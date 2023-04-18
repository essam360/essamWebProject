/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"./Request",
	"./Item"
], function(declare, lang, json, Request, Item) {

	/**
	 * Constructs a social item.
	 * 
	 * @name ecm.model.SocialItem
	 * @class Represents a single social item, for example, a recommendation (like) or a comment. Each social item is
	 *        associated with a content item.
	 * @augments ecm.model.Item
	 * @since 2.0.3
	 */
	var SocialItem = declare("ecm.model.SocialItem", [
		Item
	], {
		/** @lends ecm.model.SocialItem.prototype */

		/**
		 * A {@link ecm.model.ContentItem} object associated.
		 */
		contentItem: null,

		/**
		 * Data type constants.
		 */
		TYPE: {
			COMMENT: "comment",
			RECOMMENDATION: "recommendation",
			DOWNLOAD: "downloadrecord",
			TAG: "tag",
			BOX: "boxcollaboration"
		},

		/**
		 * Gets the short name of the originator.
		 */
		getOriginatorShortName: function() {
			return this.getValue("originator");
		},

		/**
		 * Gets the display name of the originator.
		 */
		getOriginatorDisplayName: function() {
			var name = this.getDisplayValue("originator");
			if (!name)
				name = this.getValue("originator");

			return name;
		},

		/**
		 * Gets the Id of the originator.
		 * 
		 * @since 2.0.3.5
		 */
		getOriginatorId: function() {
			var user = this.getUserInfo("originator");
			var id = user && user.id ? user.id : this.getValue("originator");

			return id;
		},

		/**
		 * Gets the date this social item was added as a string formatted to the current locale.
		 * 
		 * @returns {String} The date formatted to the current locale.
		 */
		getDateAdded: function() {
			var date = this.getDisplayValue("dateAdded");
			if (!date)
				date = this.getValue("dateAdded");

			return date;
		},

		/**
		 * Gets the version number of the content item.
		 */
		getItemVersion: function() {
			var version = this.getDisplayValue("itemVersion");
			if (!version)
				version = this.getValue("itemVersion");

			return version;
		},

		/**
		 * Returns true if this social item is created by the current user.
		 */
		isMine: function() {
			var shortName = this.getOriginatorShortName();
			var id = this.getOriginatorId();
			if (!this.repository || !shortName && !id)
				return true;

			return shortName == this.repository.userId || id == this.repository.userId;
		},

		/**
		 * Returns true if this social item can be edited by the current user.
		 */
		isEditable: function() {
			return this.isMine() && this.hasPrivilege("editable");
		},

		/**
		 * Returns true if this social item can be deleted by the current user.
		 */
		isDeletable: function() {
			return this.hasPrivilege("deletable");
		},

		/**
		 * @private
		 */
		_isCreatable: function() {
			return this.contentItem && this.contentItem.isAvailableForSocialCollaboration(this.type);
		},

		/**
		 * Saves this social item.
		 */
		save: function(callback, errorback, skipOnChange) {
			var methodName = "save";
			if (!this.contentItem || !this.contentItem.id) {
				this.logWarning(methodName, "no content item set");
				return;
			}
			if (!this.id && !this._isCreatable() || this.id && !this.isEditable()) {
				this.logWarning(methodName, this.id ? "social item is not editable or mine" : "content item is not social collaboratable");
				return;
			}

			return this._save(callback, errorback, skipOnChange);
		},

		/**
		 * @private
		 */
		_save: function(callback, errorback, skipOnChange) {
			var methodName = "_save";
			this.logDebug(methodName, "id: " + this.id + ", type: " + this.type + "content item id: " + (this.contentItem ? this.contentItem.id : ""));

			var added = this.id == null;
			var service = this._getSaveServiceName();
			if (!service) {
				this.logWarning(methodName, "no service for the type: " + this.type);
				return;
			}

			var request = Request.invokeService(service, this.repository.type, this._prepareJsonForService(), lang.hitch(this, function(response) {
				this.logDebug(methodName, "saved: " + this.id);
				this._saveCompleted(response, callback, added, skipOnChange);
			}), false, false, lang.hitch(this, function(response) {
				if (lang.isFunction(errorback))
					errorback(response);
			}));

			return request;
		},

		/**
		 * @private
		 */
		_getSaveServiceName: function() {
			var service;
			if (this.type == this.TYPE.COMMENT)
				service = "saveComment";
			else if (this.type == this.TYPE.RECOMMENDATION)
				service = "saveRecommendation";
			else if (this.type == this.TYPE.TAG)
				service = "saveTag";
			else if (this.type == this.TYPE.BOX)
				service = "saveBoxCollaboration";

			return service;
		},

		/**
		 * @private
		 */
		_prepareJsonForService: function() {
			return {
				repositoryId: this.repository.id,
				id: this.id,
				itemId: this.contentItem.id,
				itemVersionSeriesId: this.contentItem.vsId,
				type: this.type,
				template_name: this.contentItem.template
			};
		},

		/**
		 * @private
		 */
		_getSavedJson: function(response) {
			return (response.mySocialData instanceof Array && response.mySocialData.length > 0) ? response.mySocialData[0] : null;
		},

		/**
		 * @private
		 */
		_getInstance: function(json) {
			var object = lang.getObject(this.declaredClass);
			var instance;
			if (lang.isFunction(object.createFromJSON))
				instance = object.createFromJSON(json, this.contentItem);
			else
				instance = new object(this.createJsonModel(json, this.contentItem));

			return instance;
		},

		/**
		 * @private
		 */
		_saveCompleted: function(response, callback, added, skipOnChange) {
			var methodName = "_saveCompleted";
			var saved = this._getSavedJson(response);
			if (saved) {
				var c = this._getInstance(saved);
				lang.mixin(this, c);
			} else {
				this.logWarning(methodName, "request completed but nothing seems to be saved");
			}
			response.repository = this.contentItem.repository;
			response.contentItem = this.contentItem;
			response.setType = this.type;
			var countName = this._getCountPropertyName();
			if (added && countName && this.contentItem.hasAttribute(countName))
				this.contentItem.setValue(countName, this.contentItem.getValue(countName) + 1);
			if (lang.isFunction(callback))
				callback(this, response);
			if (!added) {
				// updates the content list which has this social item in it
				var repository = this.repository ? this.repository : this.contentItem.repository;
				repository.onChange([
					this
				]);
			}
			if (saved) {
				this.contentItem.onCollaborate(this, added, skipOnChange);
			}
		},

		/**
		 * Returns the name of the tags property for this item.
		 * 
		 * @since 2.0.3.5
		 */
		getTagsPropertyName: function() {
			return this.repository._isBox() ? "tags" : "ClbTags";
		},

		_getCountPropertyName: function() {
			var name;
			if (this.repository && this.repository._isBox()) {
				if (this.type == this.TYPE.COMMENT)
					name = "comment_count";
			} else {
				if (this.type == this.TYPE.COMMENT)
					name = "ClbCommentCount";
				else if (this.type == this.TYPE.RECOMMENDATION)
					name = "ClbRecommendationCount";
			}

			return name;
		},

		/**
		 * Deletes this social item.
		 */
		deleteThis: function(callback, errorback, skipOnChange) {
			var methodName = "deleteThis";
			if (!this.id || !this.contentItem || !this.contentItem.id) {
				this.logWarning(methodName, "no id and/or content item set to be deleted");
				return;
			}
			if (!this.isDeletable()) {
				this.logDebug(methodName, "not deletable");
				return;
			}

			return this._delete(callback, errorback, skipOnChange);
		},

		/**
		 * @private
		 */
		_delete: function(callback, errorback, skipOnChange) {
			var methodName = "_delete";
			this.logDebug(methodName, "id: " + this.id + ", type: " + this.type);

			var service = this._getDeleteServiceName();
			if (!service) {
				this.logWarning(methodName, "no service for the type: " + this.type);
				return;
			}

			var request = Request.invokeService(service, this.repository.type, this._prepareJsonForService(), lang.hitch(this, function(response) {
				this.logDebug(methodName, "social item deleted: " + this.id);
				this._deleteCompleted(response, callback, skipOnChange);
			}), false, false, lang.hitch(this, function(response) {
				if (lang.isFunction(errorback))
					errorback(response);
			}));

			return request;
		},

		/**
		 * @private
		 */
		_getDeleteServiceName: function() {
			var service;
			if (this.type == this.TYPE.COMMENT)
				service = "deleteComment";
			else if (this.type == this.TYPE.RECOMMENDATION)
				service = "deleteRecommendation";
			else if (this.type == this.TYPE.TAG)
				service = "deleteTag";
			else if (this.type == this.TYPE.BOX)
				service = "deleteBoxCollaboration";

			return service;
		},

		/**
		 * @private
		 */
		_deleteCompleted: function(response, callback, skipOnChange) {
			response.repository = this.contentItem.repository;
			response.contentItem = this.contentItem;
			response.setType = this.type;
			response.deleted = true;
			this.deleted = true;
			var countName = this._getCountPropertyName();
			if (countName && this.contentItem.hasAttribute(countName))
				this.contentItem.setValue(countName, this.contentItem.getValue(countName) - 1);
			if (lang.isFunction(callback))
				callback(this, response);
			// Updates the content list which has this item in it
			var repository = this.repository ? this.repository : this.contentItem.repository;
			repository.onChange([
				this
			]);
			this.contentItem.onCollaborate(this, false, skipOnChange);
		},

		/**
		 * Overrides {@link ecm.model.Item.getDisplayValue} to always return actual values for some of the attributes.
		 * 
		 * @param attribute
		 *            The name of the attribute.
		 */
		getDisplayValue: function(attribute) {
			if (attribute == "itemCurrentVersion")
				return this.getValue(attribute); // return value so it can be filtered as a boolean value

			return this.inherited(arguments);
		}
	});

	/**
	 * @private Constructs a social item given a JSON representation of the item.
	 * @param itemJson
	 *            The JSON representation of the social item.
	 * @param contentItem
	 *            An instance of {@link ecm.model.ContentItem} this item is associated with.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this item is from a result set.
	 */
	SocialItem.createFromJSON = function(itemJson, contentItem, resultSet) {
		return new SocialItem(SocialItem.createJsonModel(itemJson, contentItem, resultSet));
	};

	/**
	 * @private Constructs a JSON model that can be consumed by a social item.
	 * @param itemJson
	 *            The JSON representation of the social item.
	 * @param contentItem
	 *            An instance of {@link ecm.model.ContentItem} this item is associated with.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this item is from a result set.
	 */
	SocialItem.createJsonModel = function(itemJson, contentItem, resultSet) {
		var json = lang.clone(itemJson);

		var attributes = {};
		var attributeTypes = {};
		var attributeFormats = {};
		var attributeDisplayValues = {};
		var attributeUserInfo = {};
		var attributeValueTimeZoneOffsets = {};
		var attributeSystemProperty = {};

		for ( var i in itemJson.attributes) {
			var attr = itemJson.attributes[i];
			attributes[i] = attr[0];
			if (attr.length > 1) {
				attributeTypes[i] = attr[1];
			}
			if (attr.length > 2 && attr[2] != null) {
				attributeFormats[i] = attr[2];
			}
			if (attr.length > 3 && attr[3] != null) {
				attributeDisplayValues[i] = attr[3];
			}
			if (attr.length > 6 && attr[6] != null && attr[6].userInfo) {
				attributeUserInfo[i] = attr[6].userInfo;
			}
			if (attr.length > 6 && attr[6] != null && (attr[6].valueTimeZoneOffset || attr[6].valueTimeZoneOffset === 0)) {
				attributeValueTimeZoneOffsets[i] = attr[6].valueTimeZoneOffset;
			}
			if (attr.length > 6 && attr[6] != null && attr[6].isSystem) {
				attributeSystemProperty[i] = attr[6].isSystem;
			}
		}

		lang.mixin(json, {
			repository: contentItem ? contentItem.repository : (resultSet && resultSet.repository) ? resultSet.repository : null,
			resultSet: resultSet,
			contentItem: contentItem,
			attributes: attributes,
			attributeTypes: attributeTypes,
			attributeFormats: attributeFormats,
			attributeDisplayValues: attributeDisplayValues,
			attributeUserInfo: attributeUserInfo,
			attributeValueTimeZoneOffsets: attributeValueTimeZoneOffsets,
			attributeSystemProperty: attributeSystemProperty
		});

		return json;
	};

	return SocialItem;
});

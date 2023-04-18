/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/json",
	"dojo/_base/lang",
	"dojo/aspect",
	"./Item",
	"./ContentItem"
], function(declare, dojojson, lang, aspect, Item, ContentItem) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model.Item.
	 * @name ecm.model.Reference
	 * @class Represents a link between a parent and child, in a compound document relationship.
	 * @augments ecm.model.Item
	 */
	var Reference = declare("ecm.model.Reference", [
		Item
	], {
		/** @lends ecm.model.Reference.prototype */

		/**
		 * The parent ContentItem of this reference.
		 */
		parent: null,

		/**
		 * The child ContentItem of this reference.
		 */
		child: null,

		/**
		 * The compound document type represented by this Reference instance.
		 */
		compoundDocumentType: null,

		/**
		 * @private Constructor.
		 */
		constructor: function() {
		},

		/**
		 * Returns an instance of {@link ecm.model.ContentClass} for the content class that is associated with this
		 * content item.
		 */
		getContentClass: function() {
			if (!this.template) {
				return null;
			}
			var cls = this.repository.getContentClass(this.template, this.objectStore);
			// update the class display name, usually it is initialized with the id (sym name), which is not always the same
			if (this.template_label) {
				cls.name = this.template_label;
			}
			return cls;
		},

		/**
		 * Updates the attribute values of this item. The attributes are saved to the repository.
		 * 
		 * @param attributes
		 *            An object containing the attribute values, keyed by attribute identifier.
		 * @param newTemplatename
		 *            The new content class for the content item.
		 * @param callback
		 *            A function that is invoked after the attributes have been updated. If errors are found with the
		 *            attribute values, an object is passed to this callback which indicates the field, error message,
		 *            and values in error.
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process.
		 * @param onError
		 *            A callback function that is called if there is an error returned when updating this item.
		 */
		saveAttributes: function(attributes, newTemplateName, callback, isBackgroundRequest, onError) {
			this.logEntry("saveAttributes");

			// Ignore additional attempts to save attributes on this item if a save is already in progress.
			if (this._savingAttributes) {
				return;
			}
			this._savingAttributes = true;

			var data = attributes;
			if (this.repository.type == "p8" || this.repository.type == "cm" || this.repository._isCmis()) {
				data = [
					{
						criterias: attributes,
						acl: null
					}
				];
			}

			var params = {
				repositoryId: this.repository.id,
				docid: this.id,
				desktop: ecm.model.desktop.id,
				childComponentValues: JSON.stringify([]),
				criterias: "",
				new_template_name: newTemplateName ? newTemplateName : this.template,
				template_name: this.template
			};

			if (this.repository._isP8()) {
				params.objectStoreId = this.objectStore ? this.objectStore.id : "";
			}

			var request;

			var onSaveAttributesRequestCompletedConnect = this.own(aspect.after(ecm.model.desktop, "onRequestCompleted", lang.hitch(this, function(completedRequest) {
				if (!request || !request.isSameRequestAs(completedRequest)) {
					return;
				}
				delete this._savingAttributes;
				onSaveAttributesRequestCompletedConnect.remove();
			})));

			request = ecm.model.Request.postService("editAttributes", this.repository.type, params, "text/json", JSON.stringify(data), lang.hitch(this, function(response) {
				delete this._savingAttributes;
				if (response.messages) {
					// This section is added for P8 markings support.  A change in the value of a marking property may cause the document to
					// no longer be accessible.  This is expected behavior, so we do not show an error dialog.  Instead we show a message in the
					// status bar at the bottom.  We also want to update the list view to remove the modified item, as is done below when error 1078
					// is received after modifying permissions.
					for ( var i in response.messages) {
						var message = response.messages[i];
						// User doesn't have access to the document anymore or it has been deleted by another user so remove the item from the result list
						if (message.number == 1156) {
							this.deleted = true;
							this.repository.onChange([
								this
							]);
						}
					}
				}
				this._saveAttributesCompleted(response, newTemplateName && newTemplateName != this.template ? true : false, callback);
			}), false, isBackgroundRequest ? isBackgroundRequest : false, false, onError ? onError : lang.hitch(this, function(response) {

				delete this._savingAttributes;
				if (response.errors) {
					for ( var i in response.errors) {
						var error = response.errors[i];
						// User doesn't have access to the document anymore or it has been deleted by another user so remove the item from the result list
						if (error.number == 1078) {
							this.deleted = true;
							this.repository.onChange([
								this
							]);
						}
					}
				}
				//let the receiver do something with the response
				if (callback) {
					callback(response);
				}
			}));

			if (!request) {
				connect.disconnect(onSaveAttributesRequestCompletedConnect);
				delete this._savingAttributes;
			}

			this.logExit("saveAttributes");
			return request;
		},

		_saveAttributesCompleted: function(response, isReindex, callback) {
			this.logEntry("_saveAttributesCompleted");

			if (response.fieldErrors) {
				if (callback) {
					callback(response);
				}
			} else if (response.rows && response.rows.length > 0) {
				// Get the new item id, item name, attributes, & properties from the JSON
				var itemJSON = response.rows[0];

				var attributes = {};
				var attributeTypes = {};
				var attributeFormats = {};
				var attributeDisplayValues = {};
				var attributeReadOnly = {};
				var attributeItems = {};
				for ( var i in itemJSON.attributes) {
					var jsonAttribute = itemJSON.attributes[i];
					attributes[i] = jsonAttribute[0];
					if (jsonAttribute.length > 1) {
						attributeTypes[i] = jsonAttribute[1];
					}
					if (jsonAttribute.length > 2 && jsonAttribute[2] != null) {
						attributeFormats[i] = jsonAttribute[2];
					}
					if (jsonAttribute.length > 3 && jsonAttribute[3] != null) {
						attributeDisplayValues[i] = jsonAttribute[3];
					}
					attributeReadOnly[i] = (jsonAttribute.length > 4 && jsonAttribute[4] === true);
					if (jsonAttribute.length > 5 && jsonAttribute[5] != null && jsonAttribute[5].rows) {
						attributeItems[i] = ecm.model.ContentItem.createFromJSON(jsonAttribute[5].rows[0], this.repository, null);
					}
				}

				// Update the item with the latest data
				this.originalId = this.id;
				lang.mixin(this, itemJSON);
				this.attributes = attributes;
				this.attributeTypes = attributeTypes;
				this.attributeFormats = attributeFormats;
				this.attributeDisplayValues = attributeDisplayValues;
				this.attributeReadOnly = attributeReadOnly;
				this.attributeItems = attributeItems;

				// If the user reindexed or if there are child components, we need to do a full retrieve
				// as the response from editAttributes doesn't contain updated child components
				if (isReindex || this._childComponents) {
					this._childComponents = [];
					this.retrieveAttributes();
				}

				if (response.acl) {
					this.permissions = [];
					this.permissions = ecm.model.Permission.createFromJSON(response.acl);
				}

				if (callback) {
					callback(response);
				}
				this.repository.onChange([
					this
				]);
				this.originalId = null; // reset the originalId to null
			} else {
				if (callback) {
					callback(response);
				}
			}
			this.logExit("_saveAttributesCompleted");
		}
	});

	/**
	 * @private Constructs a work item, given a JSON representation of the item.
	 * @param itemJSON
	 *            The JSON representation of the content item.
	 * @param repository
	 *            An instance of {@link ecm.model.Repository} for the item.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this item is from a result set.
	 * @param parent
	 *            An instance of {@link ecm.model.WorkItem} for the parent of this item (if known).
	 */
	Reference.createFromJSON = function(itemJSON, repository, resultSet) {
		var attributes = {};
		var attributeTypes = {};
		var attributeFormats = {};
		var attributeDisplayValues = {};
		var attributeReadOnly = {};
		var attributeItems = {};
		var attributeSystemProperty = {};

		var parent = null;
		var child = null;

		for ( var i in itemJSON.attributes) {
			var attr = itemJSON.attributes[i];
			attributes[i] = attr[0];
			if (attr.length > 1) {
				attributeTypes[i] = attr[1];
			}
			if (attr.length > 2) {
				attributeFormats[i] = attr[2];
			}
			if (attr.length > 3) {
				attributeDisplayValues[i] = attr[3];
			}
			attributeReadOnly[i] = (attr.length > 4 && attr[4] === true);
			if (attr.length > 5 && attr[5] != null && attr[5].rows) {
				attributeItems[i] = ecm.model.ContentItem.createFromJSON(attr[5].rows[0], this.repository, null);
			}
			if (attr.length > 6 && attr[6] != null && attr[6].isSystem) {
				attributeSystemProperty[i] = attr[6].isSystem;
			}
		}

		if (attributeItems["ChildComponent"]) {
			child = attributeItems["ChildComponent"];
		}

		if (attributeItems["ParentComponent"]) {
			parent = attributeItems["ParentComponent"];
		}

		lang.mixin(itemJSON, {
			repository: repository,
			connectionPoint: parent ? parent.connectionPoint : "",
			resultSet: resultSet,
			attributes: attributes,
			attributeTypes: attributeTypes,
			attributeFormats: attributeFormats,
			attributeDisplayValues: attributeDisplayValues,
			attributeReadOnly: attributeReadOnly,
			attributeItems: attributeItems,
			attributeSystemProperty: attributeSystemProperty,
			parent: parent,
			child: child
		});

		var item = new Reference(itemJSON);
		return item;
	};

	Reference.p8Standard = {
		// String Properties:
		// URIValue
		uriValueProperty: "URIValue",

		// LabelBindValue
		labelBindValueProperty: "LabelBindValue",

		// Boolean Properties:
		// CopyToReservation
		copyToReservationProperty: "CopytoReservation",

		// Integer Properties:
		// ComponentSortOrder
		sortOrderProperty: "ComponentSortOrder",

		// Property: ComponentPreventDelete
		preventDeleteProperty: "ComponentPreventDelete",
		allowBothDelete: 0,
		preventBothDelete: 3,
		preventChildDelete: 1,
		preventParentDelete: 2,

		// Property: ComponentCascadeDelete
		cascadeDeleteProperty: "ComponentCascadeDelete",
		cascadeDelete: 1,
		noCascadeDelete: 0,

		// Property: ComponentRelationshipType
		relationshipTypeProperty: "ComponentRelationshipType",
		dynamicCR: 1,
		dynamicLabelCR: 2,
		staticCR: 0,
		uriCR: 3,

		// Property: VersionBindType
		versionBindTypeProperty: "VersionBindType",
		bindLatestMajorVersion: 1,
		bindLatestVersion: 0
	};

	return Reference;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./ContentItem",
	"./SocialItem"
], function(declare, lang, ContentItem, SocialItem) {

	/**
	 * Constructs a Box collaboration record.
	 * 
	 * @name ecm.model.BoxCollaborationRecord
	 * @class Represents a single Box collaboration record. Each Box collaboration record is associated with a content
	 *        item.
	 * @augments ecm.model.SocialItem
	 * @since 2.0.3.6
	 */
	var BoxCollaborationRecord = declare("ecm.model.BoxCollaborationRecord", [
		SocialItem
	], {
		/** @lends ecm.model.BoxCollaborationRecord.prototype */

		/**
		 * Collaboration type constants.
		 */
		COLLABORATION_TYPE: {
			SHARE: "share",
		},

		constructor: function() {
			this.type = SocialItem.prototype.TYPE.BOX;
		},

		/**
		 * Gets the collaboration type.
		 */
		getCollaborationType: function() {
			return this.getValue("collaborationType");
		},

		/**
		 * Sets the collaboration type.
		 * 
		 * @param collaborationType
		 *            Collaboration type to save
		 */
		setCollaborationType: function(/*String*/collaborationType) {
			this.setValue("collaborationType", collaborationType);
		},

		/**
		 * Gets the Box client Id.
		 */
		getBoxClientId: function() {
			return this.getValue("boxClientId");
		},

		/**
		 * Sets the Box client Id.
		 * 
		 * @param boxClientId
		 *            Box client Id to save
		 */
		setBoxClientId: function(/*String*/boxClientId) {
			this.setValue("boxClientId", boxClientId);
		},

		/**
		 * Gets the Box file Id.
		 */
		getBoxFileId: function() {
			return this.getValue("boxFileId");
		},

		/**
		 * Sets the Box file Id.
		 * 
		 * @param boxFileId
		 *            Box file Id to save
		 */
		setBoxFileId: function(/*String*/boxFileId) {
			this.setValue("boxFileId", boxFileId);
		},

		/**
		 * @private
		 */
		_prepareJsonForService: function() {
			var json = this.inherited(arguments);
			json.collaborationType = this.getValue("collaborationType");
			json.boxClientId = this.getValue("boxClientId");
			json.boxFileId = this.getValue("boxFileId");

			return json;
		},

		/**
		 * @private
		 */
		_isCreatable: function() {
			return this.contentItem && this.contentItem.isAvailableForBoxCollaboration(this.collaborationType);
		},

		/**
		 * Returns true if this Box collaboration record can be edited by the current user.
		 */
		isEditable: function() {
			return this.hasPrivilege("editable");
		}
	});

	/**
	 * @private Constructs a Box collaboration record object given a JSON representation of the item.
	 * @param itemJson
	 *            The JSON representation of the Box collaboration record.
	 * @param contentItem
	 *            An instance of {@link ecm.model.ContentItem} this Box collaboration record is associated with.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this Box collaboration record is from a result set.
	 */
	BoxCollaborationRecord.createFromJSON = function(itemJson, collaborationType, contentItem, resultSet) {
		var record = new BoxCollaborationRecord(SocialItem.createJsonModel(itemJson, contentItem, resultSet));
		record.setCollaborationType(collaborationType);

		return record;
	};

	return BoxCollaborationRecord;
});

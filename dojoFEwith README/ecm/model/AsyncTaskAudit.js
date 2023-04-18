/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ModelObject",
	"./Request"
], function(declare, lang, ModelObject, Request) {

	/**
	 * @name ecm.model.AsyncTaskAudit
	 * @class Represents an audit record for an asynchronous task. An audit record contains information such as event
	 *        type, event action, event info, and etc. Plugin writers can add audit records to create a history of the
	 *        various events that occurred for the asynchronous task.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.3
	 */
	var AsyncTaskAudit = declare("ecm.model.AsyncTaskAudit", [
		ModelObject
	], {
		/** @lends ecm.model.AsyncTaskInstance.prototype */

		/**
		 * The set of attributes for this audit.
		 */
		attributes: null,

		/**
		 * The result set that this audit came from.
		 */
		resultSet: null,

		/**
		 * The reference to the parent {@link ecm.model.AsyncTask} task.
		 */
		parent: null,

		/**
		 * Returns the event information associated with this audit.
		 */
		getEventInfo: function() {
			return this.attributes.eventInfo;
		},

		/**
		 * Returns the event action associated with this audit.
		 */
		getEventAction: function() {
			return this.attributes.eventAction;
		},

		/**
		 * Returns the event date associated with this audit.
		 */
		getEventDate: function() {
			return this.attributes.eventDate;
		},

		/**
		 * Returns the event type associated with this audit.
		 */
		getEventType: function() {
			return this.attributes.eventType;
		},

		/**
		 * Returns the originator or user who created this audit.
		 */
		getOriginator: function() {
			return this.attributes.originator;
		},

		/**
		 * Returns the attribute value in a format that can be displayed in the user interface.
		 * 
		 * @param attribute
		 *            The name of the attribute.
		 */
		getDisplayValue: function(attribute) {
			if (this.attributeDisplayValues[attribute]) {
				return this.attributeDisplayValues[attribute];
			}
			return ecm.model.desktop.valueFormatter.formatValue(this.attributes[attribute], this.attributeTypes[attribute], this.attributeFormats[attribute]);
		},

		/**
		 * Returns true if this task instance has the specified privilege.
		 */
		hasPrivilege: function(privilege) {
			return this[privilege] == true;
		},

		/**
		 * Returns the type of the attribute for this task instance.
		 * 
		 * @param attribute
		 *            The attribute name
		 * @returns {string} The type of the attribute
		 */
		getAttributeType: function(attribute) {
			return this.attributeTypes[attribute];
		}
	});

	/**
	 * @private Constructs a task instance item given a JSON representation of the item.
	 */
	ecm.model.AsyncTaskAudit.createFromJSON = function(itemJSON) {
		var item = new AsyncTaskAudit(itemJSON);

		var attributes = {};
		var attributeTypes = {};
		var attributeFormats = {};
		var attributeDisplayValues = {};
		var attributeReadOnly = {};

		for ( var i in itemJSON.attributes) {
			var attr = itemJSON.attributes[i];
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
			attributeReadOnly[i] = (attr.length > 4 && attr[4] === true);
		}

		lang.mixin(item, {
			attributes: attributes,
			attributeTypes: attributeTypes,
			attributeFormats: attributeFormats,
			attributeDisplayValues: attributeDisplayValues,
			attributeReadOnly: attributeReadOnly
		});

		return item;
	};

	return AsyncTaskAudit;
});

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
	 * @name ecm.model.AsyncTaskInstance
	 * @class Represents a instance of a recurring {@link ecm.model.AsyncTask}. For a recurring asynchronous task, if
	 *        it repeats multiple times, each record of the run is an instance of the task. For example if a recurring
	 *        task reoccurs 10 times, there will be one {@link ecm.model.AsyncTask} and 10
	 *        {@link ecm.model.AsyncTaskInstance}. The parent attribute of each AsyncTaskInstance will point to the
	 *        original recurring AsyncTask. In the ECM TaskManager, this is another word for an execution record.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.2
	 */
	var AsyncTaskInstance = declare("ecm.model.AsyncTaskInstance", [
		ModelObject
	], {
		/** @lends ecm.model.AsyncTaskInstance.prototype */

		/**
		 * The set of attributes for this task instance.
		 */
		attributes: null,

		/**
		 * The result set that the task instance came from.
		 */
		resultSet: null,

		/**
		 * The results of this asynchronous task instance.
		 */
		results: null,

		/**
		 * The reference to the parent recurring {@link ecm.model.AsyncTask}.
		 */
		parent: null,

		/**
		 * Returns the {@link ecm.model.AsyncTaskType} object associated with this task instance.
		 * 
		 * @since 2.0.3
		 */
		getAsyncTaskType: function() {
			if (this.parent) {
				return this.parent.getAsyncTaskType();
			}
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
		},

		/**
		 * Returns the user information for this task.
		 * 
		 * @since 2.0.3
		 */
		getUserInfo: function(propertyName) {
			return this.attributes.createdBy;
		}
	});

	/**
	 * @private Constructs a task instance item given a JSON representation of the item.
	 */
	ecm.model.AsyncTaskInstance.createFromJSON = function(itemJSON) {
		var item = new AsyncTaskInstance(itemJSON);

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

	return AsyncTaskInstance;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/LoggerMixin",
	"ecm/Messages"
],

function(declare, lang, LoggerMixin, Messages) {

	/**
	 * @name ecm.widget.process._ProcessorMixin
	 * @class Provides a mixin that defines methods for working with step processor meta data. This class creates the
	 *        IBM FileNet P8 workflow response buttons. In addition, the class provides utility functions for working
	 *        with filed data.
	 * @public
	 */
	return declare("ecm.widget.process._ProcessorMixin", LoggerMixin, {
		/** @lends ecm.widget.process._ProcessorMixin.prototype */

		_messages: ecm.messages,

		/**
		 * Creates the step
		 * <q>responses</q>
		 * buttons and inserts them into the button bar at bottom of page. If there are no
		 * <q>responses</q>
		 * defined on this step, it will create the standard
		 * <q>Complete</q>
		 * button instead.
		 * 
		 * @param processorButtonBar
		 *            The <code>ProcessorButtonBar</code> to add the responses buttons to.
		 * @param separator
		 *            A boolean flag for specifying whether to add a separator bar after the response buttons.
		 * @param label
		 *            Text string to use as the default dispatch button label. The string is typically
		 *            <code>Launch</code> or <code>Complete</code>.
		 */
		addResponseButtons: function(processorButtonBar, separator, label) {
			this.logEntry("addResponseButtons");
			if (this._responseActionButton) {
				this._responseActionButton.destroyRecursive();
				this._responseActionButton = null;
			}
			var attributes = this._workItem.getWorkClass().attributeDefinitions;
			for ( var i in attributes) {
				if (attributes[i].id == "F_Responses") {
					var responses = attributes[i].allowedValues;
					if (responses) {
						if (separator) {
							processorButtonBar.addSeparator();
						}

						this._responseButtons = processorButtonBar.createResponseButtons(responses, lang.hitch(this, this.onResponse));

					} else { // No responses, add the Complete/Launch button instead

						this._responseButtons = processorButtonBar.createDispatchButton(label, lang.hitch(this, this.onDispatch));

					}
					break;
				}
			}
			this.logExit("addResponseButtons");
		},

		/**
		 * Creates a value field for the specified property name.
		 * 
		 * @param name
		 *            A string holding the property name.
		 * @param value
		 *            The value of the property.
		 * @returns {Object} holding string field meta data information.
		 */
		getStringField: function(name, value, singleValue) {
			var values = [
				value
			];

			if (singleValue != undefined && singleValue == true) {
				values = value;
			}

			return {
				"name": name,
				"value": values, // Should now be using "value" in JSON
				"dataType": "xs:string",
				"label": value
			};
		},

		/**
		 * Creates a value field of type <code>system</code> for the specified property name.
		 * 
		 * @param name
		 *            A string holding the property name.
		 * @param value
		 *            The value of the property.
		 * @returns {Object} holding system field meta data information.
		 */
		getSystemField: function(name, value) {
			return {
				"name": name,
				"value": value, // Should now be using "value" in JSON
				"dataType": "xs:string",
				"label": value,
				"system": true
			};
		},

		/**
		 * Calls <code>onOK</code> event handler of the implemented processor to save the property information with
		 * specified response and dispatch the work item.
		 * 
		 * @param response
		 *            A string value of the selected response.
		 */
		onResponse: function(response) {
			this.logEntry("onResponse");
			if (this.isValid(true, false, true, response)) {
				// Call into the WorkItem with specified response to complete the step
				this.logDebug("F_Responses = \"" + response + "\"");
				this._workItem.setValue("F_Responses", response);
				this.onOk(true);
			}
			this.logExit("onResponse");
		},

		/**
		 * Calls <code>onOK</code> event handler of the implemented processor to save the property information and
		 * dispatch the work item.
		 */
		onDispatch: function() {
			this.logEntry("onDispatch");
			if (this.isValid(true, false, true)) {
				// Call into the WorkItem to launch the step
				this.logDebug("F_Responses = \"\"");
				this._workItem.setValue("F_Responses", "");
				this.onOk(true);
			}
			this.logExit("onDispatch");
		},

		/**
		 * Returns boolean <code>true</code> if there are any attachments are exposed on this work item.
		 * 
		 * @returns {Boolean} <code>true</code> if there are any attachments are exposed on this work item,
		 *          <code>false</code> otherwise.
		 */
		hasAttachment: function() {
			var foundAttachment = false;
			var attrTypes = this._workItem.attributeTypes;
			for ( var i in attrTypes) {
				if (attrTypes[i] == "xs:attachment") {
					foundAttachment = true;
					break;
				}
			}
			return foundAttachment;
		},

		destroy: function() {
			// The cleanup for _responseButtons is in processorButtonBar.
			this._responseButtons = null;

			this._workItem = null;
			this.inherited(arguments);
		}
	});
});

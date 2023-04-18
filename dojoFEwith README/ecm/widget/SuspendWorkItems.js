/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/date/locale",
	"dojo/data/ItemFileWriteStore",
	"dijit/form/FilteringSelect",
	"dijit/form/RangeBoundTextBox",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/widget/DatePicker",
	"ecm/model/Request",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"dojo/text!./templates/SuspendWorkItems.html"
],

function(declare, lang, locale, ItemFileWriteStore, FilteringSelect, RangeBoundTextBox, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, DatePicker, Request, LoggerMixin, Messages, template) {

	/**
	 * @name ecm.widget.SuspendWorkItems
	 * @class Provides a widget that is used to suspend folders and documents on an IBM Content Manager workflow.
	 * @augments
	 */
	return declare("ecm.widget.SuspendWorkItems", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.SuspendWorkItems.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_items: null,
		repository: null,

		constructor: function(cArgs) {
			this.logDebug("constructor");
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.logEntry("postCreate");
			//this._durationValueHoverHelp.message = this.messages.suspend_duration_value_hint;
			this._suspendForDurationValue.promptMessage = this.messages.suspend_duration_value_hint;
			this._suspendForDurationValue.invalidMessage = this.messages.suspend_duration_value_error;
			this._suspendForDurationValue.missingMessage = this.messages.suspend_duration_value_error;
			this._suspendForDurationValue.rangeMessage = this.messages.suspend_duration_value_error;
			this._suspendForDurationValue.regExp = "\\d{1,2}";
			this._suspendForDurationValue.constraints = {
				min: 1,
				max: 99
			};
			var minDate = new Date();
			minDate.setDate(minDate.getDate() + 1);
			this._suspendUntilDateValue.constraints.min = minDate;
			this._suspendUntilDateValue.constraints.locale = ecm.model.desktop.valueFormatter.getLocale();
			this._suspendUntilDateValue.constraints.datePattern = "M/d/yyyy"; // Want 4 digit years displayed
			this.onSuspendOptionChanged();
			this.logExit("postCreate");
		},

		/**
		 * An event function called when some input fields have changed.
		 */
		onInputChange: function() {
			// Input change event
		},

		/**
		 * An event function called when the suspend options have changed.
		 */
		onSuspendOptionChanged: function() {
			this._suspendForDurationValue.setDisabled(true);
			this._suspendUntilDateValue.setDisabled(true);
			this._suspendForDurationUnits.set("disabled", true);
			this._suspendForDurationValue.set("required", false);
			this._suspendForDurationValue.reset();
			this._suspendUntilDateValue.reset();
			this._suspendForDurationValue.required = false;
			if (this._suspendForDuration.checked == true) {
				this._suspendForDurationValue.setDisabled(false);
				this._suspendForDurationUnits.set("disabled", false);
				this._suspendForDurationValue.set("required", true);
			} else if (this._suspendUntilDate.checked == true) {
				this._suspendUntilDateValue.setDisabled(false);
				this._suspendUntilDateValue.set("required", true);
			}
			this.onInputChange();
		},

		/**
		 * An event function called when the duration options have changed.
		 */
		onDurationValueChanged: function() {
			this.onInputChange();
		},

		/**
		 * An event function called when the date value options have changed.
		 */
		onDateValueChanged: function() {
			this.onInputChange();
		},

		/**
		 * Sets the repository to use for suspending the items.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			this.repository = repository;
		},

		/**
		 * Returns the string value of the suspend option selection field.
		 * 
		 * @returns {String} holding the value of the suspend option selection field.
		 */
		getSuspendOptionValue: function() {
			var suspendOptionValue = this._suspendUntilResume.value;
			if (this._suspendForDuration.checked == true) {
				suspendOptionValue = this._suspendForDuration.value;
			} else if (this._suspendUntilDate.checked == true) {
				suspendOptionValue = this._suspendUntilDate.value;
			}
			return suspendOptionValue;
		},

		/**
		 * Returns a string value of the suspend for duration selection field.
		 * 
		 * @returns {String} holding the value of the suspend for duration selection field.
		 */
		getSuspendForDurationValue: function() {
			return this._suspendForDurationValue.getDisplayedValue();
		},

		/**
		 * Returns a string value of the suspend for duration units selection field.
		 * 
		 * @returns {String} holding the value of the suspend for duration units selection field.
		 */
		getSuspendForDurationUnits: function() {
			return this._suspendForDurationUnits.get("value");
		},

		/**
		 * Returns a string holding the value of the suspend until date selection field.
		 * 
		 * @returns {String} holding the value of the suspend until date selection field.
		 */
		getSuspendUntilDateValue: function() {
			var returnValue = "";
			var dateValue = this._suspendUntilDateValue.get("value"); // Retrieves the Date as an object (and not a string)
			if (dateValue) {
				returnValue = locale.format(dateValue, {
					datePattern: "yyyy-MM-dd",
					selector: "date"
				});
			}
			return returnValue;
		},

		/**
		 * Sets an array of items to be suspended on a Content Manager workflow.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 */
		setItems: function(items) {
			this.logEntry("setItems");
			this._items = items;
			this.repository = items[0].repository;
			this.logExit("setItems");
		},

		/**
		 * Returns <code>true</code> if all the specified workflow information is valid.
		 * 
		 * @returns {Boolean} A value of <code>true</code> if all the specified workflow information is valid,
		 *          <code>false</code> otherwise.
		 */
		isAllInputValid: function() {
			var allGood = true;
			if (this._suspendForDuration.checked == true) {
				allGood = this._suspendForDurationValue.isValid();
			} else if (this._suspendUntilDate.checked == true) {
				allGood = this._suspendUntilDateValue.isValid();
			}
			return allGood;
		},

		_nop: null
	});
});

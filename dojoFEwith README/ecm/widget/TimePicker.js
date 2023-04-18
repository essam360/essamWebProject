/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/keys",
	"dojo/date/stamp",
	"idx/form/TimeTextBox",
	"../MessagesMixin",
	"./_HoverHelpMixin",
	"./_SinglePropertyEditorMixin"
], //
function(declare, //
keys, //
dateStamp, //
TimePicker, //
MessagesMixin, //
_HoverHelpMixin, //
_SinglePropertyEditorMixin) {
	/**
	 * @name ecm.widget.TimePicker
	 * @class Provides a widget that is used to select a time.
	 *        <p>
	 *        This class extends the <code>idx.form.TimeTextBox</code> class to provide additional formatting
	 *        patterns.
	 *        </p>
	 * @augments idx.form.TimeTextBox
	 */
	return declare("ecm.widget.TimePicker", [
		TimePicker,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.TimePicker.prototype */

		/**
		 * Overrides idx's default if <code>showPickerIcon</code> is false.
		 */
		showPickerIcon: true,

		postCreate: function() {
			this.missingMessage = this.messages.property_missingMessage;
			this.inherited(arguments);
		},

		/**
		 * Returns the value.
		 * 
		 * @return The value as an ISO string.
		 */
		getValue: function() {
			return this.get("value") ? "" + dateStamp.toISOString(this.get('value')) : "";
		},

		/**
		 * Returns the time pattern from the constraints.
		 * 
		 * @return The time pattern.
		 */
		getFormatPattern: function() {
			return this.constraints.timePattern;
		},

		/**
		 * Overrides <code>idx.form.TimeTextBox</code> so that CTRL+F1 does not open the time drop-down.
		 * 
		 * @param evt
		 *            The event.
		 */
		_onKey: function(evt) {
			if (evt.ctrlKey && evt.keyCode == keys.F1) {
				// do not open the dropdown
			} else {
				this.inherited(arguments);
			}
		},

		/**
		 * Determines if the value is valid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the value is valid.
		 */
		isValid: function() {
			var isValid = this.inherited(arguments);
			if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				isValid = false;
			}
			return isValid;
		},

		/**
		 * Returns the error message.
		 * 
		 * @param isFocused
		 *            A {Boolean} indicating if it has focus.
		 * @return The error message string.
		 */
		getErrorMessage: function(/*Boolean*/isFocused) {
			if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				return this.customErrorMessage;
			} else {
				return this.inherited(arguments);
			}
		},

		/**
		 * Set the custom validation error.
		 * 
		 * @param errorMessage
		 *            A {String} indicating the custom error message.
		 */
		setCustomValidationError: function(errorMessage) {
			this.customErrorMessage = errorMessage;
			this.customErrorValue = this.textbox.value; // to know for what value the error is appropriate
			// Set this to true so that the error state and message are displayed immediately.
			this._hasBeenBlurred = true;
			this.validate(false);
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/form/ComboBox",
	"../Messages",
	"./_HoverHelpMixin",
	"./_SinglePropertyEditorMixin"
], //
function(declare, ComboBox, Messages, _HoverHelpMixin, _SinglePropertyEditorMixin) {
	/**
	 * @name ecm.widget.ComboBox
	 * @class Provides a widget that displays a combination box that consists of a field and a drop-down list. The user
	 *        can select a value from the list or type a value in the field. The value in the field does not need to
	 *        match a value in the list.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.ComboBox</code> class to provide hover help for the
	 *        combination box.
	 *        </p>
	 * @public
	 */
	return declare("ecm.widget.ComboBox", [
		ComboBox,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.ComboBox.prototype */

		postCreate: function() {
			this.missingMessage = ecm.messages.property_missingMessage;
			this.inherited(arguments);
		},

		/**
		 * Returns the value selected in the combo box.
		 * 
		 * @return The selected value.
		 */
		getValue: function() {
			var value = "";
			var index = this.get('value');
			if (index) {
				var item = this.store.store._getItemsArray()[index];
				if (item) {
					value = this.store.store.getValue(item, 'value');
				} else {
					value = index;
				}
			}
			return value;
		},

		/**
		 * Returns boolean indicating if valid.
		 * 
		 * @return Boolean indicating if valid.
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
		 *            Boolean indicating if this widget is focused.
		 * @return String error message.
		 */
		getErrorMessage: function(/*Boolean*/isFocused) {
			if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				return this.customErrorMessage;
			} else {
				return this.inherited(arguments);
			}
		},

		/**
		 * Sets the custom validation error and validates.
		 * 
		 * @param errorMessage
		 *            The input custom error message.
		 */
		setCustomValidationError: function(errorMessage) {
			this.customErrorMessage = errorMessage;
			this.customErrorValue = this.textbox.value; // to know for what value the error is appropriate
			// Set this to true so that the error state and message are displayed immediately.
			this._hasBeenBlurred = true;
			this.validate();
		},

		/**
		 * Sets the selected display value.
		 * 
		 * @param displayedValue
		 *            The displayed value to set.
		 */
		setSelectedDisplayedValue: function(displayedValue) {
			this._selectedDisplayedValue = displayedValue;
		},

		/**
		 * Returns the selected display value.
		 * 
		 * @return The selected display value that was passed into the setSelectedDisplayedValue method.
		 */
		getSelectedDisplayedValue: function() {
			return this._selectedDisplayedValue;
		}

	});
});

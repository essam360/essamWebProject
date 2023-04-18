/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/form/FilteringSelect",
	"../Messages",
	"./_HoverHelpMixin",
	"./_SinglePropertyEditorMixin"
], //
function(declare, FilteringSelect, Messages, _HoverHelpMixin, _SinglePropertyEditorMixin) {
	/**
	 * @name ecm.widget.FilteringSelect
	 * @class Provides a combination box that consists of a drop-down list and a field. The user can select a value from
	 *        the list or type a value in the field. The list is filtered to display values that begin with the value
	 *        entered in the field. A valid entry must match completely with a value from the list.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.FilteringSelect</code> class to support hover help.
	 *        </p>
	 * @augments dijit.form.FilteringSelect
	 * @public
	 */
	return declare("ecm.widget.FilteringSelect", [
		FilteringSelect,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.FilteringSelect.prototype */

		baseClass: "dijitTextBox dijitValidationTextBox dijitComboBox", // for _CssStateMixin, so error indicators show again

		// Filtering has reasonable performance under IE11 (worst performing browser) with a default page size of 500.
		pageSize: 500,

		postCreate: function() {
			this.missingMessage = ecm.messages.property_missingMessage;
			this.inherited(arguments);
		},

		/**
		 * Retrieves the value.
		 * 
		 * @return The value.
		 */
		getValue: function() {
			var value = "";
			var index = this.get('value');
			if (index) {
				var item = this.store.store._getItemsArray()[index];
				value = this.store.store.getValue(item, 'value');
			}
			return value;
		},

		_setValueAttr: function(value, priorityChange, displayedValue, item) {
			// Overrides dijit.form.FilteringSelect._setValueAttr() to provide special handling;
			// if the given value is not found in the list of choices then the value is set as
			// the displayed value and the field is flagged as having an invalid value
			try {
				if (this.store.get(value) === undefined && displayedValue === undefined) {
					// Attempt to set the displayedValue in case the given value is the item's label
					// Note: This used to be handled by the catch block bellow prior to upgrading to Dojo 1.10.4,
					// but dojo.store.DataStore no longer throws an error when setting an invalid value, instead,
					// dijit.form.FilteringSelect sets the value to '' (try/catch was left in place for safety)
					this.set('displayedValue', value);
					this.isValid();
				} else {
					this.inherited(arguments);
				}
			} catch (e) {
				// Display the value, to draw attention to the invalid setting.
				// This may be the item's id, not the display name, but should still help identify the missing item.
				this.set('displayedValue', value);
				this.isValid();
			}
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
		 * @return The selected display value that was passed into the <code>setSelectedDisplayedValue</code> method.
		 */
		getSelectedDisplayedValue: function() {
			return this._selectedDisplayedValue;
		},

		_autoCompleteText: function(text) {
			// Overrides dijit.form.FilteringSelect._autoCompleteText() to prevent the selected value from
			// being highlighted when auto-complete is disabled and searching with a "contains" query
			if (!this.autoComplete && this.queryExpr == "*${0}*") {
				this.focusNode.value = text;
				try {
					this.focusNode.focus();
				} catch (e) { /* straight from the book of DOJO: "squelch random errors (esp. on IE) from unexpected focus changes or DOM nodes being hidden" */
				}
			} else {
				this.inherited(arguments);
			}
		}
	});
});

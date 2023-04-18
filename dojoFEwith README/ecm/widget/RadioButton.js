/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/form/RadioButton",
	"./_HoverHelpMixin"
], //
function(declare, RadioButton, _HoverHelpMixin) {

	/**
	 * @name ecm.widget.RadioButton
	 * @class Provides a widget that contains a set of choices from which only one can be selected.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.RadioButton</code> class to support hover help.
	 *        </p>
	 * @public
	 * @augments dijit.form.RadioButton
	 */
	return declare("ecm.widget.RadioButton", [
		RadioButton,
		_HoverHelpMixin
	], {
		/** @lends ecm.widget.RadioButton.prototype */

		/**
		 * Determines if the value is valid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the value is valid, otherwise <code>false</code>.
		 */
		isValid: function() {
			var isValid = true;
			if (this.getInherited("isValid", arguments)) { // dijit.form.RadioButton doesn't have isValid.  Anyway, just check to see if is valid is a method in the parent class;
				isValid = this.inherited(arguments);
			}
			if (this.customErrorMessage && this.customErrorValue == this.get('value')) {
				isValid = false;
			}
			return isValid;
		},

		/**
		 * Retrieves the error message.
		 * 
		 * @return An error message string.
		 */
		getErrorMessage: function(/*Boolean*/isFocused) {
			if (this.customErrorMessage && this.customErrorValue == get('value')) {
				return this.customErrorMessage;
			} else {
				return this.inherited(arguments);
			}
		},

		/**
		 * Sets a custom validation error message string.
		 * 
		 * @param errorMessage
		 *            An error message string.
		 */
		setCustomValidationError: function(errorMessage) {
			this.customErrorMessage = errorMessage;
			this.customErrorValue = get('value'); // to know for what value the error is appropriate
			// Set this to true so that the error state and message are displayed immediately.
			this._hasBeenBlurred = true;
			this.validate();
		}
	});
});

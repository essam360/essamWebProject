/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/dom-attr",
	"dijit/_base/wai",
	"dijit/form/ValidationTextBox",
	"../Messages",
	"./_HoverHelpMixin",
	"./_SinglePropertyEditorMixin"
], //
function(declare, lang, has, string, domAttr, dijitwai, ValidationTextBox, Messages, _HoverHelpMixin, _SinglePropertyEditorMixin) {
	/**
	 * @name ecm.widget.ValidationTextBox
	 * @class Provides a widget that contains a text box in which the user input is validated against the specified
	 *        criterion.
	 *        <p>
	 *        This class extends the Dojo <apiname>dijit.form.ValidationTextBox</apiname> class to add validation for
	 *        byte maximum length.
	 *        </p>
	 * @public
	 * @augments dijit.form.ValidationTextBox
	 */
	return declare("ecm.widget.ValidationTextBox", [
		ValidationTextBox,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.ValidationTextBox.prototype */

		maxLengthMessage: "",
		invalidFormatMessage: null,
		textDir: has("text-direction"),

		postCreate: function() {
			this.missingMessage = ecm.messages.property_missingMessage;
			this.inherited(arguments);
			domAttr.set(this.focusNode, "role", "textbox");
		},

		/**
		 * Retrieves the displayed value.
		 * 
		 * @return The displayed value.
		 */
		getValue: function() {
			return this.get("displayedValue");
		},

		/**
		 * Validates the data.
		 * 
		 * @param value
		 *            The value.
		 * @param constraints
		 *            A <code>dijit.form.ValidationTextBox.__Constraints</code>.
		 */
		validator: function(value, constraints) {
			var isValid = this.inherited(arguments);
			if (isValid && !this._validateMaxLength()) {
				isValid = false;
			} else if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				isValid = false;
			}
			if (isValid && !this._validateMinLength()) {
				isValid = false;
			}
			return isValid;
		},

		/**
		 * Determines if the value is valid.
		 * 
		 * @param isFocused
		 *            A value of <code>true</code> if it has focus.
		 * @return {Boolean} A value of <code>true</code> if the value is valid, otherwise <code>false</code>.
		 */
		isValid: function(isFocused) {
			var flag = this.inherited(arguments);
			if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				flag = false;
			}

			return flag;
		},

		/**
		 * Validates the value. Includes error handling.
		 * 
		 * @param isFocused
		 *            A value of <code>true</code> if this field has focus, otherwise <code>false</code>.
		 * @return {Boolean} A value of <code>true</code> if the value is valid, otherwise <code>false</code>.
		 */
		validate: function(/*Boolean*/isFocused) {
			//alert("ecm validate is called");
			//this.inherited(arguments);
			var message = "";
			var isValid = this.disabled || this.isValid(isFocused);
			if (isValid) {
				this._maskValidSubsetError = true;
			}
			var isEmpty = this._isEmpty(this.textbox.value);
			var isValidSubset = !isValid && isFocused && this._isValidSubset();

			// The value is not a valid subset if there is a custom error message and the value matches the custom error value.
			if (isValidSubset && this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				isValidSubset = false;
			}

			this._set("state", isValid ? "" : (((((!this._hasBeenBlurred || isFocused) && isEmpty) || isValidSubset) && this._maskValidSubsetError) ? "Incomplete" : "Error"));
			// Added this if statement to force error on required empty fields that have been blurred
			if (isEmpty && this.required && this._hasBeenBlurred) {
				this._set("state", "Error");
			}
			dijitwai.setWaiState(this.focusNode, "invalid", isValid ? "false" : "true");

			if (this.state == "Error") {
				this._maskValidSubsetError = isFocused && isValidSubset; // we want the error to show up after a blur and refocus
				message = this.getErrorMessage(isFocused);
			} else if (this.state == "Incomplete") {
				message = this.getPromptMessage(isFocused); // show the prompt whenever the value is not yet complete
				this._maskValidSubsetError = !this._hasBeenBlurred || isFocused; // no Incomplete warnings while focused
			} else if (isEmpty) {
				message = this.getPromptMessage(isFocused); // show the prompt whenever there's no error and no text
			}
			// Post the message after a slight delay. The field may need to scroll into view first.
			setTimeout(lang.hitch(this, function() {
				this.set("message", message);
			}, 100));
			return isValid;
		},

		/**
		 * Returns boolean indicating if empty.
		 */
		_isEmpty: function(value) {
			return value ? (string.trim(value) == "") : true; //return (this.trim ? /^\s*$/ : /^$/).test(value); // Boolean
		},

		/**
		 * Retrieves the error message.
		 * 
		 * @return The error message string.
		 */
		getErrorMessage: function(/*Boolean*/isFocused) {
			var mtr = "";
			if (!this._validateMaxLength()) {
				mtr = this.maxLengthMessage;
			} else if (!this._validateMinLength()) {
				mtr = this.minLengthMessage;
			} else if (this.invalidFormatMessage) {
				mtr = this.invalidFormatMessage;
			} else if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				mtr = this.customErrorMessage;
			} else {
				mtr = this.inherited(arguments);
			}
			return mtr;
		},

		/**
		 * Returns boolean true if the input value length does not exceed the max length (is valid).
		 */
		_validateMaxLength: function() {
			var flag = true;
			if (this.maxLength) {
				var value = this.get("value");
				// If the associated repository is CM/OD and uses UTF-8 encoding, check the length limits using UTF-8 encoding.
				// Otherwise check the length limits using the character lengths.
				if( value ){
					var length = (this.repositoryType == "cm" && this.repositoryEncodingUTF8) || (this.repositoryType == "od") ? unescape(encodeURIComponent(value)).length : value.length;
				}else{
					var length = 0;
				}
				if (length > this.maxLength) {
					flag = false;
				}
			}
			return flag;
		},

		/**
		 * Returns boolean true if the input value length exceeds the minimum length (is valid).
		 */
		_validateMinLength: function() {
			var flag = true;
			if (this.minLength) {
				var value = this.get("value");
				// If the associated repository is CM and uses UTF-8 encoding, check the length limits using UTF-8 encoding.
				// Otherwise check the length limits using the character lengths.
				if( value ){
					var length = (this.repositoryType == "cm" && this.repositoryEncodingUTF8) ? unescape(encodeURIComponent(value)).length : value.length;
				}else{
					var length = 0;
				}	
				if (length != 0 && length < this.minLength) {
					flag = false;
				}
			}
			return flag;
		},

		/**
		 * Sets a custom validation error message.
		 * 
		 * @param errorMessage
		 *            The error message string.
		 */
		setCustomValidationError: function(errorMessage) {
			this.customErrorMessage = errorMessage;
			this.customErrorValue = this.textbox.value; // to know for what value the error is appropriate
			// Set this to true so that the error state and message are displayed immediately.
			this._hasBeenBlurred = true;
			this.validate();
		},

		destroy: function() {
			// The tooltip may be open. Dismiss it.
			this.displayMessage("");
			this.inherited(arguments);
		}
	});
});

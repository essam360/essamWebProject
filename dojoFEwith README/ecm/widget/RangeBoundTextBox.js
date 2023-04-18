/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/string",
	"dijit/_base/wai",
	"dijit/form/RangeBoundTextBox",
	"../Messages",
	"../model/_ModelStore",
	"./_HoverHelpMixin",
	"./_SinglePropertyEditorMixin"
], //
function(declare, lang, domClass, string, dijitwai, RangeBoundTextBox, Messages, _ModelStore, _HoverHelpMixin, _SinglePropertyEditorMixin) {

	/**
	 * @name ecm.widget.RangeBoundTextBox
	 * @class Provides a widget that contains a text box for which a range of valid values is specified.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.RangeBoundTextBox</code> class to support range checking
	 *        for large exponents.
	 *        </p>
	 * @public
	 * @augments dijit.form.RangeBoundTextBox
	 */
	return declare("ecm.widget.RangeBoundTextBox", [
		RangeBoundTextBox,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.RangeBoundTextBox.prototype */

		/**
		 * The validation pattern.
		 */
		pattern: "([\\d]{0,})|(([-]{0,1})([\\d]{1,}))",

		_decimalPoint: ".",

		/**
		 * Indicates whether the value is validated regardless if the field has received focus or the value has changed.
		 * 
		 * @since 2.0.2.3
		 */
		alwaysValidate: false,

		postCreate: function() {
			this.inherited(arguments);
			this.missingMessage = ecm.messages.property_missingMessage;
			domClass.add(this.domNode, "ecmRangeBoundTextBox");
		},

		/**
		 * Sets the value used for the decimal point. For example, in English, it is a period (
		 * <q><code>.</code></q>), and in French, it is a comma (
		 * <q><code>,</code></q>).
		 * 
		 * @param decimalPoint
		 *            The decimal point string.
		 */
		setDecimalPoint: function(decimalPoint) {
			this._decimalPoint = decimalPoint;
		},

		/**
		 * Retrieves the value.
		 * 
		 * @return The value.
		 */
		getValue: function() {
			var value = this.get("displayedValue");
			if (value !== null) {
				value = string.trim(value);
				if (this.dataType == "xs:decimal") {
					if (this._decimalPoint != "." && value !== "") {
						value = value.replace(this._decimalPoint, ".");
					}
				} else if (this.dataType == "xs:double" || this.dataType == "xs:score") {
					if (value === "") {
						value = null;
					} else {
						if (this._decimalPoint != ".") {
							value = value.replace(this._decimalPoint, ".");
						}
						value = parseFloat(value);
					}
				} else if (this.dataType == "xs:short" || this.dataType == "xs:integer") { // Return xs:long as string.
					value = (value === "") ? null : parseInt(value, 10);
				}
			}
			return value;
		},

		/**
		 * Returns the parsed value.
		 */
		_getParsedValue: function(input) {
			var input = (input + "").toUpperCase();
			var exponentLocation = input.indexOf("E");
			var exponentValue = "";
			var prefix = "" + input;
			if (exponentLocation > -1) {
				exponentValue = input.substring(exponentLocation + 1);
				prefix = input.substring(0, exponentLocation);
			}
			return {
				prefix: new Number(prefix),
				prefixString: prefix,
				exponent: new Number(exponentValue),
				exponentString: exponentValue
			};
		},

		/**
		 * Checks the range.
		 * 
		 * @param primitive
		 *            The number value.
		 * @param constraints
		 *            The value constraints. See <code>dijit.form.RangeBoundTextBox.__Constraints</code>.
		 */
		rangeCheck: function(primitive, constraints) {
			var isInRange;

			if (this.dataType == "xs:long") {
				isInRange = ("min" in constraints ? (_ModelStore.longComparator(primitive, constraints.min) >= 0) : true) //
						&& ("max" in constraints ? (_ModelStore.longComparator(primitive, constraints.max) <= 0) : true);
			} else {
				isInRange = this.inherited(arguments); //return	("min" in constraints? (this.compare(primitive,constraints.min) >= 0) : true) && ("max" in constraints? (this.compare(primitive,constraints.max) <= 0) : true); // Boolean
				if (isInRange && !constraints.max && constraints.maxString) {
					var inputParsedValue = this._getParsedValue(primitive);
					var maxParsedValue = this._getParsedValue(constraints.maxString);
					if (inputParsedValue.prefix > 0 && maxParsedValue.prefix > 0) { // input & max both positive
						if (inputParsedValue.exponent > maxParsedValue.exponent) {
							return false;
						} else if ((inputParsedValue.exponent - maxParsedValue.exponent) == 0) {
							if (inputParsedValue.prefix > maxParsedValue.prefix) {
								return false;
							}
						}
					}
					var minParsedValue = this._getParsedValue(constraints.minString);
					if (inputParsedValue.prefix < 0 && minParsedValue.prefix > 0) { // input negative & min positive
						return false;
					} else if (inputParsedValue.prefix < 0 && minParsedValue.prefix < 0) { // input & min are both negative
						if (inputParsedValue.exponent > 0 && minParsedValue.exponent > 0) { // input & min are both positive exponents
							if (inputParsedValue.exponent > minParsedValue.exponent) {
								return false;
							} else if ((inputParsedValue.exponent - maxParsedValue.exponent) == 0) {
								if (inputParsedValue.prefix < minParsedValue.prefix) {
									return false;
								}
							}
						} else {
							if (inputParsedValue.prefix < minParsedValue.prefix) {
								return false;
							}
						}
					}
				}
			}
			return isInRange;
		},

		_onInput: function() {
			this._keyIsInput = true;
			this.inherited(arguments);
			this._keyIsInput = false;
		},

		_initvalue: "",
		_keyIsInput: false,
		_initValueSet: false,

		/**
		 * Determines if the value is valid.
		 * 
		 * @param isFocused
		 *            A value of <code>true</code> if this field has focus, otherwise </code>false</code>.
		 * @return A boolean value indicating if the value is valid. A value of <code>true</code> if the value is
		 *         valid, otherwise false.
		 */
		isValid: function(isFocused) {
			var checkvalid = this.alwaysValidate;
			if (this._initValueSet == false && this._keyIsInput == true) {
				if (this._initvalue == "" && this.displayedValue != "") {
					this._initvalue = this.displayedValue; //return true;
				} else {
					if (this.displayedValue == "") {
						this._initvalue == "";
					}
				}
				this._initValueSet = true;
			}

			if (!checkvalid) {
				if (this.displayedValue == this._initvalue && this._keyIsInput == true) {
					checkvalid = true;
				}

				if (this.displayedValue != "" && this.displayedValue != this._initvalue && this._initValueSet == true) {
					checkvalid = true;
				}

				// Force validation if it is required, has been blurred and is empty
				if (this.required && this._hasBeenBlurred && this._isEmpty(this.textbox.value)) {
					checkvalid = true;
				}
			}

			// this check needs to always be made, similar to ValidationTextBox
			if (this.customErrorMessage && this.customErrorValue == this.textbox.value) {
				return false;
			}

			if (checkvalid == true) {
				var isValid = this.inherited(arguments);
				return isValid;
			} else {
				// Backing out this change because its breaking the validation mechanism for standard properties
				// return checkvalid; //25346
				if (this.required && this._isEmpty(this.textbox.value) && !(this._hasBeenBlurred != null && this._hasBeenBlurred))//25346
				{
					return false; //25346
				} else
					return true;
			}
		},

		/**
		 * Validates the value. Includes error handling.
		 * 
		 * @param isFocused
		 *            A value of <code>true</code> if this field has focus, otherwise <code>false</code>.
		 * @return A boolean value indicating if the value is valid. A value of <code>true</code> if the value is
		 *         valid, otherwise <code>false</code>.
		 */
		validate: function(/*Boolean*/isFocused) {
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
			// added this if statement to force error on required empty fields that have been blurred
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
		 * Retrieves the error message.
		 * 
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
		 * Sets a custom validation error message string.
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
		}
	});
});

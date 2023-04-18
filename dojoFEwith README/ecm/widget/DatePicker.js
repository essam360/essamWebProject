/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/date",
	"dojo/date/stamp",
	"dijit/Tooltip",
	"idx/form/DateTextBox",
	"../Messages",
	"./_HoverHelpMixin",
	"../LoggerMixin",
	"./_SinglePropertyEditorMixin",
	"dojo/has",
	"dojox/date/islamic",
	"dojox/date/islamic/Date",
	"dojox/date/islamic/locale",
	"dojox/date/hebrew",
	"dojox/date/hebrew/Date",
	"dojox/date/hebrew/locale",
	"dojox/date/umalqura",
	"dojox/date/umalqura/Date",
	"dojox/date/umalqura/locale"
], //
function(declare, lang, date, dateStamp, Tooltip, DateTextBox, Messages, _HoverHelpMixin, LoggerMixin, _SinglePropertyEditorMixin, has) {
	/**
	 * @name ecm.widget.DatePicker
	 * @class Provides a widget that is used to select a date. This class extends the <code>idx.form.DateTextBox</code>
	 *        class to provide additional formatting patterns.
	 * @augments idx.form.DateTextBox
	 */
	return declare("ecm.widget.DatePicker", [
		DateTextBox,
		_HoverHelpMixin,
		LoggerMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.DatePicker.prototype */

		/**
		 * Override idx's default if <code>showPickerIcon</code> is <code>false</code>.
		 */
		showPickerIcon: true,

		/**
		 * Flag indicating validation messages should be displayed as {@link dijit/Tooltip} objects
		 */
		displayMessageAsTooltip: false,

		/**
		 * @private
		 */
		_tooltip: null,

		/**
		 * Keep track of the initial value so we will pass that back to the server if the value isn't modified.
		 * Necessary because the control doesn't support seconds -- we need the complete value (including seconds) to
		 * pass compare tests in the server when saving.
		 */
		initialValue: "",

		postCreate: function() {
			this.missingMessage = ecm.messages.property_missingMessage; // NOTE: cannot use MessagesMixin or this.messages as this is used by dijit.form.ValidationTextBox
			this.inherited(arguments);

			// Fix dojo bug.  
			// When type in the date input field, if the calendar is open, then dijit.Calendar does a setValue after typing a space.
			this.connect(this.textbox, "onkeypress", lang.hitch(this, function(evt) {
				this.closeDropDown();
			}));
		},

		/**
		 * Returns the date value.
		 * 
		 * @return The date value as an ISO string.
		 */
		getValue: function() {
			// Return the displayed value if working with an OD "year" property (a property of type "xs:short" with format "%Y")
			if (this.asYearInt)
				return this.textbox.value;
			
			// If the value and the initial value are the same down to the seconds portion, return the initial value.
			// Necessary because we compare values in the mid tier before saving and this control doesn't support seconds.
			var isDateOnly = false;
			if ((this.dataType == "xs:date") || (this.repositoryType == "p8" && ecm.model.desktop.enableHideTimePortion)) {
				isDateOnly = true;
			}

			var substringLength = 16;
			if (isDateOnly) {
				substringLength = 10;
			} else if (this.constraints.datePattern && this.constraints.datePattern.indexOf("S") >= 0) {
				substringLength = 23;
			} else if (this.constraints.datePattern && this.constraints.datePattern.indexOf("s") >= 0) {
				substringLength = 19;
			}
			var initialValueString = this.initialValue.substring(0, substringLength);
			var initialValueDate = new Date(initialValueString);
			var initialValueMilliseconds = initialValueDate.getTime();

			var displayedValue = this.get('value');
			//Bidi Calendar Support start
			if (displayedValue && displayedValue.toGregorian) {
				displayedValue = displayedValue.toGregorian();
			}
			//Bidi Calendar Support end			
			var valueCompareMilliseconds = "";
			var valueCompareString = "";
			if (displayedValue) {
				valueCompareString = dateStamp.toISOString(displayedValue, {
					milliseconds: true
				}).substring(0, substringLength);
				var valueCompareDate = new Date(valueCompareString);
				valueCompareMilliseconds = valueCompareDate.getTime();

				// Don't take timezone into account when dealing with date-only values.
				if (!isDateOnly) {
					valueCompareMilliseconds += displayedValue.getTimezoneOffset() * 60000;
				}
			}

			if (initialValueMilliseconds == valueCompareMilliseconds) {
				return this.initialValue;
			} else {
				return displayedValue ? "" + dateStamp.toISOString(displayedValue, {
					milliseconds: true
				}) : "";
			}
		},

		getDateORTextValue: function() {
			// Return the displayed value if working with an OD "year" property (a property of type "xs:short" with format "%Y")
			if (this.asYearInt)
				return this.textbox.value;
				
			// If the value and the initial value are the same down to the seconds portion, return the intial value.
			// Necessary because we compare values in the mid tier before saving and this control doesn't support seconds.
			var initialValueCompare;
			if (this.initialValue && this.initialValue.length >= 17) {
				initialValueCompare = this.initialValue.substring(0, 17);
			}
			var displayedValue = this.get('value');
			var valueCompare = "";
			if (displayedValue) {
				valueCompare = dateStamp.toISOString(displayedValue).substring(0, 17);
			}

			var rV = "";
			if (initialValueCompare == valueCompare) {
				rV = this.initialValue;
			} else if (valueCompare && valueCompare.length > 0) {
				rV = dateStamp.toISOString(displayedValue);
			} else {
				rV = this.textbox.value;
			}
			return rV;
		},

		/**
		 * Gets the date format pattern from the constraints.
		 * 
		 * @return The constraints date pattern.
		 */
		getFormatPattern: function() {
			return this.constraints.datePattern;
		},

		/**
		 * Uses <code>formatLength</code> <code>"short"</code> and <code>fullYear</code> <code>false</code>.
		 */
		startup: function() {
			this.inherited(arguments);
			this.constraints.formatLength = "short";
			this.constraints.fullYear = false; // override hard coded true in idx.DatePicker
		},

		constructor: function(params /*===== , srcNodeRef =====*/) {
			if (has("calendar-type") == "hijri")
				params.datePackage = "dojox.date.islamic";
			else if (has("calendar-type") == "hebrew")
				params.datePackage = "dojox.date.hebrew";
			else if (has("calendar-type") == "UmmAlQura")
				params.datePackage = "dojox.date.umalqura";
			//defect 43621 start
			this.datePackage = params.datePackage || this.datePackage;
			this.dateLocaleModule = dojo.getObject(this.datePackage + ".locale", false);
			this.regExpGen = this.dateLocaleModule.regexp;
			this._invalidDate = idx.form._DateTimeTextBox.prototype.value.toString();
			//defect 43621 end

		},

		/**
		 * Sets the constraints.
		 * 
		 * @param contraints
		 *            The constraints.
		 */
		_setConstraintsAttr: function(constraints) {
			this.inherited(arguments);
			constraints.fullYear = false; // override hard coded true in dijit.form.DateTimeTextBox
		},

		_setValueAttr: function(value, priorityChange, formattedValue) {
			// Overrides idx.form._DateTimeTextBox._setValueAttr() to pre-format the value and override
			// the round trip validation behavior in dijit.form._TextBoxMixin._setValueAttr(); otherwise,
			// the compare function bellow would break when working with a time stamp property that is
			// set up to accept dates only, i.e., "M/d/yyyy"
			if (typeof formattedValue != "string" && !this._isInvalidDate(value)) {
				var filteredValue = this.filter(value);
				if (filteredValue !== null && ((typeof filteredValue != "number") || !isNaN(filteredValue)))
					formattedValue = this.filter(this.format(filteredValue, this.constraints));
				else
					formattedValue = '';
			}
			return this.inherited(arguments, [
				value,
				priorityChange,
				formattedValue
			]);
		},

		/**
		 * Overriding <code>_DateTimeTextBox.compare()</code> to properly compare null values; otherwise, selecting
		 * the current date will not fire an <code>onChange</code> event.
		 * 
		 * @param val1
		 *            The first date value for the comparison.
		 * @param val2
		 *            The second date value for the comparison.
		 * @return Returns 1 if val1 > val2, -1 if val1 < val2, and 0 if val1 equals val2.
		 */
		compare: function(/*Date*/val1, /*Date*/val2) {
			if (val1 && !val2) {
				return 1;
			} else if (!val1 && val2) {
				return -1;
			} else {
				// The DateTextBox does not support the selector type "datetime", so override the 
				// comparison handling here to use the "datetime" selector when comparing timestamps.  
				if (this.dataType == "xs:timestamp") {
					var isInvalid1 = this._isInvalidDate(val1);
					var isInvalid2 = this._isInvalidDate(val2);
					return isInvalid1 ? (isInvalid2 ? 0 : -1) : (isInvalid2 ? 1 : date.compare(val1, val2, "datetime"));
				} else {
					return this.inherited(arguments);
				}
			}
		},

		/**
		 * Determines if the value is valid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the value is valid, otherwise <code>false</code>.
		 */
		isValid: function() {
			var value = this.textbox.value;
			var isValid = this.inherited(arguments);

			if (this.customErrorMessage && this.customErrorValue == this.textbox.value && this.repositoryType != "od") {
				isValid = false;
			}
			this.logDebug("isValid", "return isValid: " + isValid);
			return isValid;
		},

		/**
		 * Returns the error message.
		 * 
		 * @param isFocused
		 *            Boolean indicating if the widget is focused.
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
		 * Sets the custom error message.
		 * 
		 * @param errorMessage
		 *            The custom error message string.
		 */
		setCustomValidationError: function(errorMessage) {
			this.customErrorMessage = errorMessage;
			this.customErrorValue = this.textbox.value; // to know for what value the error is appropriate
			// Set this to true so that the error state and message are displayed immediately.
			this._hasBeenBlurred = true;
			this.validate(false);
		},

		/**
		 * Displays a message for the control
		 * 
		 * @param message
		 *            A String message to display
		 * @param force
		 *            A Boolean indicating whether focus should be set to the message
		 */
		displayMessage: function(/*String*/message, /*Boolean*/force) {
			if (this._tooltip) {
				this._tooltip.destroy();
				this._tooltip = null;
			}
			if (message && this.displayMessageAsTooltip == true) {
				this._tooltip = new Tooltip({
					connectId: [
						this.iconNode
					],
					position: this.tooltipPosition,
					label: message
				});
			} else {
				this.inherited(arguments);
			}
		},

		_refreshState: function() {
			// Overrides idx.form._CompositeMixin._refreshState() to perform validation, something done by ValidationTextBox but omitted by IDX
			this.inherited(arguments);
			if (this._created)
				this.validate(this.focused);
		}
	});
});

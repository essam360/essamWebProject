/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"./AttributeDefinition",
	"ecm/widget/SinglePropertyEditorFactory",
	"../LoggerMixin",
	"../MessagesMixin"
], function(declare, lang, string, AttributeDefinition, SinglePropertyEditorFactory, LoggerMixin, MessagesMixin) {

	/**
	 * @name ecm.model._PreProcessAttributesMixin
	 * @class Provides methods for pre processing attribute definition objects such as
	 *        <code>ecm.model.AttributeDefinition</code> in preparation for passing the attributes to the custom
	 *        layout editor widget.
	 * @since 2.0.3
	 */
	return declare("ecm.model._PreProcessAttributesMixin", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.model._PreProcessAttributesMixin.prototype */

		/**
		 * @private Adds more meta-data information to the AttributeDefintion that is necessary to construct the control
		 *          widget correctly in the custom layout editor.
		 */
		_preProcessAttribute: function(attributeDefinition, item, reason, isReadOnly, repository) {
			this.logEntry("_preProcessAttribute");

			// Update AttributeDefinition from first pass taken by common properties pane.
			attributeDefinition.values = [];
			attributeDefinition.invalidMessage = attributeDefinition.formatDescription && lang.replace(this.messages.property_invalid_with_format, [
				attributeDefinition.formatDescription
			]);
			attributeDefinition.choiceList = attributeDefinition.getChoiceList(true);
			attributeDefinition.choiceListNested = attributeDefinition.isChoiceListNested();
//			attributeDefinition.name = attributeDefinition.id; // Not sure why we are switching this
			attributeDefinition.label = attributeDefinition.name;
			attributeDefinition.repository = repository;
			attributeDefinition.valueOptions = attributeDefinition.getAllowedValuesSelectOptions();
			attributeDefinition.multiSelect = false;

			// Update Attribute Definition from second pass taken by single property editor factory
			this._factory = new SinglePropertyEditorFactory();
			attributeDefinition.minMaxValues = this._factory.getMinMax(attributeDefinition.minValue, attributeDefinition.maxValue, attributeDefinition.dataType, attributeDefinition.format);
			attributeDefinition.minValue = attributeDefinition.minMaxValues.min; // Map these back in with the converted values
			attributeDefinition.maxValue = attributeDefinition.minMaxValues.max;
			// The Layout Editor controls use "help" attribute for the hover help bubble
			attributeDefinition.help = this._factory.getPromptText(attributeDefinition);

			// Update Attribute Definition from third pass taken by creator functions in the factory
// TODO: commented this out cause it caused problems with the layout editor controls (they have own pattern)
// Calling below on GUID and string properties, causes problems on integers and floats
//			attributeDefinition.pattern = attributeDefinition.pattern ? attributeDefinition.pattern : this._factory.getRegularExpression(attributeDefinition.dataType, attributeDefinition.format);

			if (attributeDefinition.cardinality && (attributeDefinition.cardinality == "LIST" || attributeDefinition.cardinality == "MULTI")) {
				this._processMultiValueMarkingSet(attributeDefinition, item, reason, isReadOnly);
			} else if (attributeDefinition.cardinality && attributeDefinition.cardinality == "SINGLE" && attributeDefinition.choiceList && attributeDefinition.choiceListNested) {
			} else if (attributeDefinition.cardinality && attributeDefinition.cardinality == "SINGLE" && attributeDefinition.choiceList) {
				attributeDefinition.invalidMessage = this.messages.property_pulldown_invalid;
				this._processSingleValueMarkingSet(attributeDefinition, item, reason, isReadOnly);
			} else if ((attributeDefinition.cardinality && attributeDefinition.cardinality == "SINGLE") && (attributeDefinition.valueOptions && attributeDefinition.valueOptions.length > 0)) {
				attributeDefinition.invalidMessage = this.messages.property_pulldown_invalid;
			}

			// Separate out the specific data types, so that the correct messages can be constructed for both single and multi value editors.
			if (attributeDefinition.dataType == "xs:timestamp") {
				this._addDateMessages(attributeDefinition);
			} else if (attributeDefinition.dataType == "xs:date") {
				this._addDateMessages(attributeDefinition);
			} else if (attributeDefinition.dataType == "xs:time") {
				if (reason && reason != "entryTemplateBuilder" && typeof attributeDefinition.defaultValue == "string") {
					if (attributeDefinition.defaultValue != null && attributeDefinition.defaultValue.length != 0) {
						attributeDefinition.defaultValue += "Z"; // Add zulu back on because the layout editor controls expect that format
					}
				}
				this._addTimeMessages(attributeDefinition);
			} else if (attributeDefinition.dataType == "xs:guid") {
				if (attributeDefinition.minLength == undefined) {
					attributeDefinition.minLength = 0; // Force this to zero if not set
				}
				attributeDefinition.invalidMessage = this.messages.property_GUI_invalid; // This correct, key is misspelled
				attributeDefinition.pattern = attributeDefinition.pattern ? attributeDefinition.pattern : this._factory.getRegularExpression(attributeDefinition.dataType, attributeDefinition.format);
			} else if (attributeDefinition.dataType == "xs:reference") {
			} else if (attributeDefinition.dataType == "xs:object") {
			} else if (attributeDefinition.dataType == "xs:integer" || attributeDefinition.dataType == "xs:short" || attributeDefinition.dataType == "xs:long" || attributeDefinition.dataType == "xs:double" || attributeDefinition.dataType == "xs:score") {
				this._addNumberMessages(attributeDefinition);
				// If pattern specified by meta-data, use it, otherwise let the layout editor handle the pattern
				if (attributeDefinition.pattern) {
					attributeDefinition.pattern = attributeDefinition.pattern;
				}
			} else if (attributeDefinition.dataType == "xs:decimal") {
				if (attributeDefinition.minMaxValues.min == undefined) {
					attributeDefinition.minValue = attributeDefinition.minMaxValues.minString;
				}
				if (attributeDefinition.minMaxValues.max == undefined) {
					attributeDefinition.maxValue = attributeDefinition.minMaxValues.maxString;
				}
				// Calculate the number of decimal places supported on fraction (instead of using the pattern to determine this)
				this._addDecimalPlaces(attributeDefinition);
				this._addNumberMessages(attributeDefinition);
			} else if (attributeDefinition.dataType == "xs:group") { // user and group
			} else if (attributeDefinition.dataType == "xs:user") { // user
			} else if (attributeDefinition.dataType == "xs:attachment") { // workflow attachment
				// skip these, they can not be displayed in property editors
			} else {
				if (attributeDefinition.minLength == undefined) {
					attributeDefinition.minLength = 0; // Force this to zero if not set
				}
				this._trimStringValue(attributeDefinition);
				this._addStringMessages(attributeDefinition);

				if (attributeDefinition.pattern) {
					attributeDefinition.pattern = attributeDefinition.pattern;
				} else {
					var pattern = this._factory.getRegularExpression(attributeDefinition.dataType, attributeDefinition.format);
					if (pattern == ".*") {
						// If standard match all pattern, replace with null otherwise the layout editors view pattern will not override
						attributeDefinition.pattern = null;
					} else {
						attributeDefinition.pattern = pattern;
					}
				}
			}

			this.logExit("_preProcessAttribute");
		},

		/**
		 * @private Trims whitespace from strings for CM special string data types. Otherwise the controls will display
		 *          them and they cause validation errors.
		 */
		_trimStringValue: function(attributeDefinition) {
			if (attributeDefinition.repositoryType == "cm") {
				if (attributeDefinition.defaultValue != null && attributeDefinition.defaultValue != "") {
					if (attributeDefinition.dataType == "xs:string" || attributeDefinition.dataType == "xs:string:alpha" || attributeDefinition.dataType == "xs:string:alphanum" || attributeDefinition.dataType == "xs:string:num" || attributeDefinition.dataType == "xs:string:ext") {
						if (lang.isArray(attributeDefinition.defaultValue)) {
							for (var i = 0; i < attributeDefinition.defaultValue.length; i++) {
								if (attributeDefinition.defaultValue[i]) {
									attributeDefinition.defaultValue[i] = string.trim(attributeDefinition.defaultValue[i]);
								}
							}
						} else {
							attributeDefinition.defaultValue = string.trim(attributeDefinition.defaultValue);
						}
					}
				}
			}
		},

		/**
		 * @private Adds validation error message strings for xs:string data type to the AttributeDefintion that is
		 *          necessary to construct the control correctly.
		 */
		_addStringMessages: function(attributeDefinition) {
			var invalidMessage = this.messages.property_invalid;
			if (attributeDefinition.dataType == "xs:string:alpha") {
				invalidMessage = this.messages.property_alpha_invalid;
			} else if (attributeDefinition.dataType == "xs:string:alphanum") {
				invalidMessage = this.messages.property_alphanum_invalid;
			} else if (attributeDefinition.dataType == "xs:string:num") {
				invalidMessage = this.messages.property_num_invalid;
			} else if (attributeDefinition.dataType == "xs:string:ext") {
				invalidMessage = this.messages.property_ext_invalid;
			}
			attributeDefinition.invalidMessage = attributeDefinition.invalidMessage || invalidMessage;

			// Let the Layout editor substitute the actual max length value, the editor uses lang.replace so formating characters are different
			attributeDefinition.maxMessage = attributeDefinition.maxLength ? string.substitute(this.messages.property_tooLong, [
				"{0}"
			]) : "";
			attributeDefinition.minMessage = attributeDefinition.minLength ? string.substitute(this.messages.property_tooShort, [
				"{0}"
			]) : "";
		},

		/**
		 * @private Adds validation error message strings for xs:integer/double data type to the AttributeDefintion that
		 *          is necessary to construct the control correctly.
		 */
		_addNumberMessages: function(attributeDefinition) {
			var minValueForMessage = attributeDefinition.minMaxValues.minString != undefined ? attributeDefinition.minMaxValues.minString : attributeDefinition.minMaxValues.min;
			var maxValueForMessage = attributeDefinition.minMaxValues.maxString != undefined ? attributeDefinition.minMaxValues.maxString : attributeDefinition.minMaxValues.max;
			var invalidMessage;
			var rangeMessage;
			if (attributeDefinition.dataType == "xs:integer" || attributeDefinition.dataType == "xs:short" || attributeDefinition.dataType == "xs:long") {
				invalidMessage = this.messages.property_integer_invalid;
				// Let the Layout editor substitute the actual range values, the editor uses lang.replace so formating characters are different
				rangeMessage = string.substitute(this.messages.property_integer_range, [
					"{0}",
					"{1}"
				]);
			} else if (attributeDefinition.dataType == "xs:decimal") {
				if (attributeDefinition.format) {
					var numChar = this.messages.property_number_character; // typically 'n'
					var format = attributeDefinition.format.replace(/#/g, numChar);
					var example = format;
					var num = 1;
					while (example.indexOf(numChar) >= 0) {
						example = example.replace(numChar, '' + num);
						num++;
						if (num > 9) {
							num = 0;
						}
					}
					invalidMessage = string.substitute(this.messages.property_decimal_format_invalid, [
						format,
						example
					]);
				} else {
					invalidMessage = this.messages.property_decimal_invalid;
				}
				// Let the Layout editor substitute the actual range values, the editor uses lang.replace so formating characters are different
				rangeMessage = string.substitute(this.messages.property_decimal_range, [
					"{0}",
					"{1}"
				]);
			} else if (attributeDefinition.dataType == "xs:double" || attributeDefinition.dataType == "xs:score") {
				invalidMessage = this.messages.property_double_invalid;
				// Let the Layout editor substitute the actual range values, the editor uses lang.replace so formating characters are different
				rangeMessage = string.substitute(this.messages.property_double_range, [
					"{0}",
					"{1}"
				]);
			}
			attributeDefinition.invalidMessage = invalidMessage;
			attributeDefinition.rangeMessage = rangeMessage;
		},

		/**
		 * @private Adds validation error message strings for xs:date/timestamp data type to the AttributeDefintion that
		 *          is necessary to construct the control correctly.
		 */
		_addDateMessages: function(attributeDefinition) {
			var invalidMessage = string.substitute(this.messages.property_date_invalid, [
				attributeDefinition.format
			]);
			var rangeMessage = string.substitute(this.messages.property_time_range, [
				"{0}",
				"{1}"
			]);
			attributeDefinition.invalidMessage = invalidMessage;
			attributeDefinition.rangeMessage = rangeMessage;
		},

		/**
		 * @private Adds validation error message strings for xs:time data type to the AttributeDefintion that is
		 *          necessary to construct the control correctly.
		 */
		_addTimeMessages: function(attributeDefinition) {
			var invalidMessage = string.substitute(this.messages.property_time_invalid, [
				attributeDefinition.format
			]);
			var rangeMessage = string.substitute(this.messages.property_time_range, [
				"{0}",
				"{1}"
			]);
			attributeDefinition.invalidMessage = invalidMessage;
			attributeDefinition.rangeMessage = rangeMessage;
		},

		_getAttributeValue: function(attributeDefinition, item, reason) {
			var attrValues;
			if ((reason == "editProperties" || reason == "viewEditProperties" || reason == "multiEditProperties") && (attributeDefinition.repositoryType == "p8" || attributeDefinition.repositoryType == "cm" || attributeDefinition.repositoryType == "cmis")) {
				// When editing properties under P8, CM and CMIS, dependent attribute definitions are retrieved. 
				// The attribute definition contains the value we should use.
				// The value may be from the item's current property value, or the value entered by the user, or the class default value,
				// or the value set by a property filter. 
				attrValues = attributeDefinition.defaultValue;
			} else {
				if (item) {
					attrValues = item.getValue(attributeDefinition.id);
				}
				// If the attribute value is not yet set or is set to an empty value and the attribute definition requires a value,
				// then use the attribute definition default value.
				if (typeof attrValues === "undefined" || (attributeDefinition.required && AttributeDefinition.isValueEmpty(attrValues))) {
					attrValues = attributeDefinition.defaultValue;
				}
			}
			// If no value is assigned, assign the empty value.
			// If the value is undefined or null...
			if (attrValues == null) {
				attrValues = [];
			} else {
				// The attribute value must be an array. 
				// Both array tests are needed because instanceof Array does not recognize arrays created under a different window.
				if (!((attrValues instanceof Array) || (!attrValues.propertyIsEnumerable('length') && (typeof attrValues === 'object') && (typeof attrValues.length === 'number')))) {
					attrValues = [
						attrValues
					];
				}
			}
			return attrValues;
		},

		_processSingleValueMarkingSet: function(attributeDefinition, item, reason, isReadOnly) {
			// Check the readOnly state based on whether there is marking set applied to the choice list
			attributeDefinition.readOnly = this._factory.getFieldIsReadOnly(attributeDefinition, item, reason, isReadOnly);

			// Get the single value from values.
			var values = this._getAttributeValue(attributeDefinition, item, reason);
			var value = null;
			if (lang.isArray(values)) {
				if (values.length > 0) {
					value = values[0];
					if (value === "") {
						value = null; // empty string is no value
					}
				}
			} else {
				value = values;
			}

			if (attributeDefinition.choiceList.markings && value != null) {
				// Marking case.  Add the current value to the options list, if it is not already there.
				var valueFound = false;
				for (var k = 0; k < attributeDefinition.choiceList.choices.length && !valueFound; k++) {
					if (attributeDefinition.choiceList.choices[k].value == value) {
						valueFound = true;
						break;
					}
				}
				if (!valueFound) {
					attributeDefinition.choiceList.choices = [
						{
							value: value,
							displayName: value
						}
					].concat(attributeDefinition.choiceList.choices);
				}
			}
		},

		_processMultiValueMarkingSet: function(attributeDefinition, item, reason, isReadOnly) {
			// Check the readOnly state based on whether there is marking set applied to the choice list
			attributeDefinition.readOnly = this._factory.getFieldIsReadOnly(attributeDefinition, item, reason, isReadOnly);

			if (item) {
				// Get the single value from values.
				var values = this._getAttributeValue(attributeDefinition, item, reason);
				var availableData = attributeDefinition.choiceList;

				// The availableData.choices contains only choices that the user has canAdd: true.
				// If a selected value is not in the list, then add it (even though its canAdd is false).
				if (values && availableData && attributeDefinition.markingList) {
					for (var i = 0; i < values.length; i++) {
						var value = values[i];
						// Check if the selected value is in the choice list
						var isInList = false;
						for (var j = 0; j < availableData.choices.length; j++) {
							var choice = availableData.choices[j];
							if (choice.value == value) {
								isInList = true;
								break;
							}
						}
						// If the selected value is not in the choice list, then add it.
						if (!isInList) {
							var allChoices = attributeDefinition.markingList.choices;
							for (var j = 0; j < allChoices.length; j++) {
								var choice = allChoices[j];
								if (choice.value == value) {
									choice.canAdd = true; // Since the value is already in the selected list, the user can add it more times
									availableData.choices.push(choice);
									break;
								}
							}
						}
					}
				}

				// availableData.canRemoves will be present if the choicelist is a marking set, and the choices
				// array contains only "canAdd" markings.
				// In this case, if a marking value is already in the selected values for this property, but is not
				// in the choicelist (because it was not "canAdd"), we want to add it to the list of available
				// choices.  Because while the user is editing, they may want to put back one of the values that
				// they removed, and this is allowed, because the MV property has not yet been persisted out to
				// the database.
				if (availableData && availableData.canRemoves) {
					var matchedChoices = {}; // don't allow duplicates.
					if (lang.isArray(values)) {
						for (var n = 0; n < values.length; n++) {
							var value = values[n];
							if (availableData.canRemoves[value] && !matchedChoices[value]) {
								// Check if the selected value is in the choice list
								var isInList = false;
								for (var j = 0; j < availableData.choices.length; j++) {
									var choice = availableData.choices[j];
									if (choice.value == value) {
										isInList = true;
										break;
									}
								}
								// If the selected value is not in the choice list, then add it.
								if (!isInList) {
									availableData.choices.push(availableData.canRemoves[value]);
									matchedChoices[value] = true;
								}
							}
						}
					} else if (availableData.canRemoves[values]) {
						// Check if the selected value is in the choice list
						var isInList = false;
						for (var j = 0; j < availableData.choices.length; j++) {
							var choice = availableData.choices[j];
							if (choice.value == values) {
								isInList = true;
								break;
							}
						}
						// If the selected value is not in the choice list, then add it.
						if (!isInList) {
							availableData.choices.push(availableData.canRemoves[values]);
						}
					}
				}
			}
		},

		_addDecimalPlaces: function(attributeDefinition) {
			if (attributeDefinition.format) {
				var decimalIndex = attributeDefinition.format.indexOf('.');
				if (decimalIndex != -1) {
					attributeDefinition.places = attributeDefinition.format.length - (decimalIndex + 1);
				} else {
					attributeDefinition.places = 0;
				}
			}
		}

	});
});

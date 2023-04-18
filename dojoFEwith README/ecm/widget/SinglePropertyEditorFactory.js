/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define(
		[
			"dojo/_base/declare",
			"dojo/_base/array",
			"dojo/_base/lang",
			"dojo/_base/sniff",
			"dojo/date/stamp",
			"dojo/dom-attr",
			"dojo/dom-style",
			"dojo/string",
			"dojo/touch",
			"dojo/on",
			"dojo/i18n",
			"dojo/data/ItemFileWriteStore",
			"dojo/store/DataStore",
			"dojox/validate/regexp",
			"idx/form/DateTextBox",
			"../MessagesMixin",
			"../LoggerMixin",
			"../model/AttributeDefinition",
			"../model/Desktop",
			"../model/ValueFormatter",
			"./DatePicker",
			"./DropDownInput",
			"./FilteringSelect",
			"./ComboBox",
			"./MultiValueChoicePane",
			"./MultiValueInputPane",
			"./RangeBoundTextBox",
			"./ReferenceAttributeButton",
			"./SingleValueTreePane",
			"./UserGroupSelectorPane",
			"./ValidationSimpleTextarea",
			"./ValidationTextBox",
			"./ValidationTextBoxFileNameNoExtension",
			"./StandByDropDownInput",
			"./TimePicker",
			"dojox/date/islamic/Date",
			"dojox/date/hebrew/Date",
			"dojox/date/umalqura/Date"
		],
		function(declare, //
		array, //
		lang, //
		has, //
		dateStamp, //
		domAttr, //
		domStyle, //
		string, //
		touch, //
		on, //
		i18n, //
		ItemFileWriteStore, //
		DataStore, //
		validateRegexp, //
		DateTextBox, //
		MessagesMixin, //
		LoggerMixin, //
		AttributeDefinition, //
		Desktop, //
		ValueFormatter, //
		DatePicker, //
		DropDownInput, //
		FilteringSelect, //
		ComboBox, //
		MultiValueChoicePane, //
		MultiValueInputPane, //
		RangeBoundTextBox, //
		ReferenceAttributeButton, //
		SingleValueTreePane, //
		UserGroupSelectorPane, //
		ValidationSimpleTextarea, //
		ValidationTextBox, //
		ValidationTextBoxFileNameNoExtension, //
		StandByDropDownInput, //
		TimePicker, islamicDate, hebrewDate, umalquraDate) { //

			/**
			 * @name ecm.widget.SinglePropertyEditorFactory
			 * @class Provides a factory that creates a <code>SinglePropertyEditor</code> instance.
			 * @public
			 */
			return declare(
					"ecm.widget.SinglePropertyEditorFactory",
					[
						LoggerMixin,
						MessagesMixin
					],
					{
						/** @lends ecm.widget.SinglePropertyEditorFactory.prototype */

						/**
						 * Creates a single property editor.
						 * 
						 * @param kwArgs
						 *            The attributes for the editor.
						 *            <ul>
						 *            <li>dataType -- data type of this control, for example, <code>xs:date</code></li>
						 *            <li>dataFormat -- format of this control, for example, <code>yyyy-mm-dd</code>
						 *            (used for date, time, timestamp, and decimal)</li>
						 *            <li>minLength -- controls the length attribute value (used for strings, for
						 *            example, TextEditor)</li>
						 *            <li>maxLength -- controls the length attribute value (used for strings, for
						 *            example, TextEditor)</li>
						 *            <li>minValue --</li>
						 *            <li>maxValue --</li>
						 *            <li>readOnly -- <code>true</code> or <code>false</code> - readonly attribute</li>
						 *            <li>values -- value to display in the editor</li>
						 *            <li>name -- name</li>
						 *            <li>width -- widget width</li>
						 *            <li>label -- label</li>
						 *            <li>id -- id of the field</li>
						 *            <li>cardinality -- LIST == multi value editor, SINGLE == single choice/value
						 *            editor</li>
						 *            <li>uniqueValues -- <code>true</code> or <code>false</code> - used by the
						 *            multi-value editor to specify if the user can select only unique values</li>
						 *            <li>choiceListNested -- used by the single choice and multi value editor - true =
						 *            show choice list in a tree</li>
						 *            <li>choiceList -- used by the single choice and multi-value editor - for single
						 *            editor, use either <code>choiceList</code> or <code>valueOptions</code> to
						 *            specify the options (label = displayName)</li>
						 *            <li>valueOptions -- used by single choice editor - used only if
						 *            <code>choiceList</code> isn't specified (label == label)</li>
						 *            <li>invalidMessage -- used by <code>_createTextEditor</code></li>
						 *            <li>votingParameter -- used by <code>UserGroupSelectorPane</code></li>
						 *            <li>votingNumber -- used by <code>UserGroupSelectorPane</code></li>
						 *            <li>repository -- used by <code>UserGroupSelectorPane</code>. Also provides
						 *            the repository.type value for the
						 *            <code>ValidationTextBox</code> <code>repositoryType</code> when
						 *            <code>repositoryType</code> is not present in <code>kwArgs</code>.</li>
						 *            <li>repositoryType -- used by stand-alone or contained (text editor)
						 *            <code>ValidationTextBox</code> widgets to determine how attribute string length
						 *            limits should be measured. If repositoryType is not provided in
						 *            <code>kwArgs</code> and repository is, the <code>repository.type</code> value
						 *            is passed for <code>ValidationTextBox</code> <code>repositoryType</code>. If
						 *            <code>ValidationTextBox</code> <code>repositoryType</code> is not set then no
						 *            repository specific handling is applied, the string character length is always
						 *            used to check against attribute length limits.</li>
						 *            <li>regularExpr -- optional - can override the default <code>regularExpr</code></li>
						 *            </ul>
						 * @param callback
						 *            Callback function required when using custom property editors.
						 * @returns The property editor.
						 */
						createSinglePropertyEditor: function(kwArgs, callback) {
							var methodName = "createSinglePropertyEditor";
							this.logDebug(methodName, "name: " + kwArgs.name + ", label: " + kwArgs.label + ", type: " + kwArgs.dataType + ", required: " + kwArgs.required + ", values: " + kwArgs.values);
							if (!kwArgs.minMaxValues) {
								kwArgs.minMaxValues = this.getMinMax(kwArgs.minValue, kwArgs.maxValue, kwArgs.dataType, kwArgs.dataFormat, kwArgs.minValueTimeZoneOffset, kwArgs.maxValueTimeZoneOffset); // call this before getPromptText
							}

							var baseConstraints = {
								name: kwArgs.name || "",
								label: kwArgs.label || "",
								dataType: kwArgs.dataType,
								readOnly: kwArgs.readOnly,
								id: kwArgs.id,
								promptText: this.getPromptText(kwArgs),
								required: kwArgs.required
							};

							if (kwArgs.tooltipPosition) {
								baseConstraints.tooltipPosition = kwArgs.tooltipPosition;
							}

							if (kwArgs.propertyEditor && kwArgs.propertyEditor.length > 0 && lang.isFunction(callback)) {
								this._createCustomEditor(baseConstraints, kwArgs, callback);
							} else {
								var editor = null;
								kwArgs.cardinality = kwArgs.cardinality.toUpperCase();
								if (kwArgs.cardinality && (kwArgs.cardinality == "LIST" || kwArgs.cardinality == "MULTI")) {
									editor = this._createMultiValueEditor(baseConstraints, kwArgs);
								} else if (kwArgs.cardinality && kwArgs.cardinality == "SINGLE" && kwArgs.choiceList && kwArgs.choiceListNested) {
									editor = this._createSingleChoiceTreeEditor(baseConstraints, kwArgs);
								} else if ((kwArgs.cardinality && kwArgs.cardinality == "SINGLE" && kwArgs.choiceList) || (kwArgs.valueOptions && kwArgs.valueOptions.length > 0)) {
									editor = this._createSingleChoiceListEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:date" || kwArgs.dataType == "xs:timestamp") {
									editor = this._createDateTimestampEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:time") {
									editor = this._createTimeEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:guid") {
									editor = this._createGuidEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:reference") {
									editor = this._createReferenceEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:object") {
									editor = kwArgs.forSearch ? this._createGuidEditor(baseConstraints, kwArgs) : this._createObjectEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:integer" || kwArgs.dataType == "xs:short" || kwArgs.dataType == "xs:long" || kwArgs.dataType == "xs:decimal" || kwArgs.dataType == "xs:double" || kwArgs.dataType == "xs:score") {
									// Use the date picker if working with an OD "year" property (a property of type "xs:short" with format "%Y")
									if (kwArgs.repository && kwArgs.repository.type == "od" && kwArgs.dataType == "xs:short" && kwArgs.dataFormat && kwArgs.dataFormat.match(/^%Y$/i)) {
										kwArgs = lang.mixin({}, kwArgs);
										kwArgs.asYearInt = true;
										kwArgs.dataFormat = "yyyy";
										editor = this._createDateTimestampEditor(baseConstraints, kwArgs);
									} else {
										editor = this._createNumberEditor(baseConstraints, kwArgs);
									}
								} else if (kwArgs.dataType == "xs:group") { // user and group
									editor = this._createGroupEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:user") { // user
									editor = this._createUserEditor(baseConstraints, kwArgs);
								} else if (kwArgs.dataType == "xs:attachment") { // workflow attachment
									// skip these, they can not be displayed in property editors
								} else {
									editor = this._createTextEditor(baseConstraints, kwArgs);
								}

								if (editor) {
									var title = baseConstraints.label ? baseConstraints.label : kwArgs.label;
									if (title) {
										editor.set("title", title);
										editor.set("alt", title);
									}
								}

								if (lang.isFunction(callback)) {
									callback(editor);
								} else {
									return editor;
								}
							}
						},

						/**
						 * @private Creates a custom property editor for the specified field.
						 * @since 2.0.2
						 */
						_createCustomEditor: function(baseConstraints, kwArgs, callback) {
							lang.mixin(baseConstraints, kwArgs);

							var self = this;
							var widgetReq = kwArgs.propertyEditor.split('.').join('/');
							require([
								widgetReq
							], function(cls) {
								var editor = new cls(baseConstraints);
								var title = baseConstraints.label ? baseConstraints.label : kwArgs.label;
								if (title) {
									editor.set("title", title);
									editor.set("alt", title);
								}

								var vals = self._getNormalizedValueString(kwArgs.values);
								var val = null;
								if (kwArgs.cardinality && kwArgs.cardinality == "LIST") {
									// remove empty entries
									val = array.filter(vals, function(value) {
										return value;
									});
								} else {
									val = vals[0];
								}
								editor.set("value", val);
								callback(editor);
							});
						},

						/**
						 * @private Returns the selected users. Remove empty values.
						 */
						_getSelectedUsers: function(values) {
							var users = array.filter(values, function(value) {
								// Remove empty values
								return value;
							});
							return users;
						},

						/**
						 * @private Create the user group down down control.
						 */
						_createUserGroupDropdownControl: function(kwArgs, baseConstraints, args) {
							if (kwArgs.hasSorting) {
								lang.mixin(args, {
									hasSorting: kwArgs.hasSorting
								});
							}
							if (kwArgs.votingParameter) {
								lang.mixin(args, {
									votingParameter: kwArgs.votingParameter,
									votingNumber: kwArgs.votingNumber
								});
							}
							if (kwArgs.width) {
								lang.mixin(baseConstraints, {
									width: kwArgs.width
								});
							}
							var userGroupSelector = new UserGroupSelectorPane(args);
							userGroupSelector.startup();
							userGroupSelector.setRepository(kwArgs.repository);
							lang.mixin(baseConstraints, {
								"label": userGroupSelector.getLabel(),
								dropDown: userGroupSelector
							});
							return new StandByDropDownInput(baseConstraints);
						},

						/**
						 * @private
						 */
						_getNormalizedValueString: function(values) {
							var r = null;
							if (lang.isArray(values)) {
								if (values.length >= 2) {
									r = [];
									array.forEach(values, function(value, index) {
										r.push(value.toString());
									});
								} else if (values.length == 1) {
									r = [
										values[0].toString(),
										""
									];
								} else {
									r = [
										"",
										""
									];
								}
							} else if (typeof values != "undefined" && values !== null) {
								r = [
									values.toString(),
									""
								];
							} else {
								r = [
									"",
									""
								];
							}
							return r;
						},

						/**
						 * Returns the minimum and maximum values in an object.
						 * 
						 * @param minValue
						 *            The minimum value.
						 * @param maxValue
						 *            The maximum value.
						 * @param dataType
						 *            The data type.
						 * @param format
						 *            The format.
						 * @return An object that contains these fields:
						 *         <ul>
						 *         <li>min: The minimum value.</li>
						 *         <li>minString: The minimum value display string.</li>
						 *         <li>max: The maximum value.</li>
						 *         <li>maxString: The maximum value display string.</li>
						 *         </ul>
						 */
						getMinMax: function(minValue, maxValue, dataType, format, minValueTimeZoneOffset, maxValueTimeZoneOffset) {
							var returnObject = new Object();
							switch (dataType) {
							case "xs:decimal":
							case "xs:double":
							case "xs:score":
								returnObject.min = AttributeDefinition.isValueEmpty(minValue) ? undefined : parseFloat(minValue);
								returnObject.max = AttributeDefinition.isValueEmpty(maxValue) ? undefined : parseFloat(maxValue);
								// Values from the server may be too large for javascript to handle
								if (returnObject.min == 'Infinity') {
									returnObject.min = undefined;
								}
								if (returnObject.max == 'Infinity') {
									returnObject.max = undefined;
								}
								// decimal doesn't support input of exponents
								if (dataType == 'xs:decimal') {
									if (returnObject.min) {
										var minStr = "" + returnObject.min;
										if (minStr.indexOf('e') > -1) {
											returnObject.min = undefined;
										}
									}
									if (returnObject.max) {
										var maxStr = "" + returnObject.max;
										if (maxStr.indexOf('e') > -1) {
											returnObject.max = undefined;
										}
									}
								}
								returnObject.minString = (minValue === undefined || minValue === null) ? "" : minValue;
								returnObject.maxString = (maxValue === undefined || maxValue === null) ? "" : maxValue;
								break;
							case "xs:long":
								if (AttributeDefinition.isValueEmpty(minValue)) {
									minValue = "-9223372036854775808";
								}
								if (AttributeDefinition.isValueEmpty(maxValue)) {
									maxValue = "9223372036854775807";
								}
								returnObject.min = minValue;
								returnObject.max = maxValue;
								break;
							case "xs:integer":
								if (AttributeDefinition.isValueEmpty(minValue)) {
									minValue = -2147483648;
								}
								if (maxValue == "Infinity") {
									// Note: special case for CRS mappings that combine numeric string and decimal/double properties;
									// the resulting property is an integer with a range from 0 to infinity (default limit for doubles/decimals)
									maxValue = null;
									returnObject.maxString = "";
								} else if (AttributeDefinition.isValueEmpty(maxValue)) {
									maxValue = 2147483647;
								}
								returnObject.min = parseFloat(minValue);
								returnObject.max = maxValue != null ? parseFloat(maxValue) : undefined;
								break;
							case "xs:short":
								// Don't set default limits for integers that represent a year, i.e., OD integer with format "%Y" (validation will be done by the OD server)
								if (AttributeDefinition.isValueEmpty(minValue) && (!format || !format.match(/^%Y$/i))) {
									minValue = -32768;
								}
								if (AttributeDefinition.isValueEmpty(maxValue) && (!format || !format.match(/^%Y$/i))) {
									maxValue = 32767;
								}
								returnObject.min = minValue != null ? parseFloat(minValue) : undefined;
								returnObject.max = maxValue != null ? parseFloat(maxValue) : undefined;
								break;
							case "xs:date":
							case "xs:time":
							case "xs:timestamp":
								var isTime = dataType == "xs:time";
								var selectorType = isTime ? "time" : "date";

								if (minValue && !(minValue instanceof Date)) {
									if (dataType == "xs:timestamp") {
										returnObject.min = dateStamp.fromISOString(minValue);
									} else {
										returnObject.min = ecm.model.desktop.valueFormatter.parseDate(minValue, {
											strict: true,
											datePattern: format,
											selector: selectorType
										});

										if (!returnObject.min) {
											returnObject.min = dateStamp.fromISOString(minValue);
										}
									}
									if (returnObject.min && minValueTimeZoneOffset) {
										returnObject.min = new Date(returnObject.min.getTime() + returnObject.min.getTimezoneOffset() * 60000 + minValueTimeZoneOffset * 60000);
									}
								} else {
									returnObject.min = "";
								}
								if (maxValue && !(maxValue instanceof Date)) {
									if (dataType == "xs:timestamp") {
										returnObject.max = dateStamp.fromISOString(maxValue);
									} else {
										returnObject.max = ecm.model.desktop.valueFormatter.parseDate(maxValue, {
											strict: true,
											datePattern: format,
											selector: selectorType
										});

										if (!returnObject.max) {
											returnObject.max = dateStamp.fromISOString(maxValue);
										}
									}
									if (returnObject.max && maxValueTimeZoneOffset) {
										returnObject.max = new Date(returnObject.max.getTime() + returnObject.max.getTimezoneOffset() * 60000 + maxValueTimeZoneOffset * 60000);
									}
								} else {
									returnObject.max = "";
								}
								break;
							default:
								returnObject.min = "";
								returnObject.max = "";
								break;
							}
							return returnObject;
						},

						/**
						 * Returns the decimal point for the language in use.
						 */
						getDecimalPoint: function() {
							return ecm.model.desktop.valueFormatter.getDecimalPoint();
						},

						/**
						 * Returns the regular expression for the dataType.
						 * 
						 * @param dataType
						 *            The data type.
						 * @param format
						 *            The format.
						 */
						getRegularExpression: function(dataType, format, repositoryType, forSearch, reason) {
							var regularExpressionString = ".*";
							switch (dataType) {
							case 'xs:double':
								if (repositoryType == "od" && forSearch != true && reason != "editProperties") {
									regularExpressionString = "[+|-]?\\d+(\\" + this.getDecimalPoint() + "\\d{1,2})?";
									break;
								}
							case 'xs:score':
								regularExpressionString = "([\+|-]{0,1})([\\d]{0,})([\\" + this.getDecimalPoint() + "]{0,1})([\\d]{1,})(([eE]([-+]{0,1})([\\d]{1,})){0,1})"; //"^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$";
								break;
							case 'xs:decimal':
								//for OD decimal data type it is forced 2 digits.
								if (repositoryType == "od" && forSearch != true && reason != "editProperties") {
									regularExpressionString = "[+|-]?\\d+(\\" + this.getDecimalPoint() + "\\d{1,2})?";
								} else {
									regularExpressionString = "[+|-]?\\d+(\\" + this.getDecimalPoint() + "\\d+)?";
								}
								if (format) {
									var decimalIndex = format.indexOf(".");
									if (decimalIndex > -1) {
										var decimalScale = format.length - 1 - decimalIndex;
										// var decimalPrecision = this.maxLength - 1 - decimalScale;
										var decimalPrecision = format.length - 1 - decimalScale;
										var precisionMinimum = (1 <= decimalPrecision) ? 1 : decimalPrecision;
										var scaleMinimum = (1 <= decimalScale) ? 1 : decimalScale;
										regularExpressionString = "([\+|-]{0,1})(([\\d]{" + precisionMinimum + "," + decimalPrecision + "})(([\\" + this.getDecimalPoint() + "]{0,1})(?=\\d{" + scaleMinimum + "," + decimalScale + "}))([\\d]{" + scaleMinimum + "," + decimalScale + "}))";
									}
								}
								break;
							case 'xs:integer':
							case 'xs:short':
							case 'xs:long':
								regularExpressionString = "([\\d]{0,})|(([-]{0,1})([\\d]{1,}))"; // Numbers or - with 1 or more numbers
								break;
							case "xs:date":
							case "xs:time":
							case "xs:timestamp":
								break;
							case "xs:object":
							case "xs:guid":
								regularExpressionString = "^\{[a-fA-F0-9]{8}\-[a-fA-F0-9]{4}\-[a-fA-F0-9]{4}\-[a-fA-F0-9]{4}\-[a-fA-F0-9]{12}\}$";
								break;

							case 'xs:string:alpha':
								regularExpressionString = format ? format : "([" + this.getAlphas() + "])*";
								break;
							case 'xs:string:alphanum':
								regularExpressionString = format ? format : "([" + this.getAlphas() + this.getNumerics() + "])*";
								break;
							case 'xs:string:num':
								regularExpressionString = format ? format : "([" + this.getNumerics() + "])*";
								break;
							case 'xs:string:ext':
								regularExpressionString = format ? format : "([" + this.getAlphas() + this.getNumerics() + "\\s'\\.,\\:;\\?\\\"\\/\\-_&\\+%\\*\\=<>\\(\\)\\|\\!\\$#\\^@~`\\[\\]\\{\\}\\\\])*";
								break;
							case 'xs:string':
							default:
								regularExpressionString = format ? format : ".*";
								break;
							}
							return regularExpressionString;
						},

						/* Generated from the Unicode Character Database */
						getAlphas: function() { // generated
							return '\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC';
						},

						getNumerics: function() { // generated
							return '\u0030-\u0039\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19';
						},
						/**
						 * Returns the prompt text.
						 * 
						 * @param kwArgs
						 *            The object of attributes.
						 *            <ul>
						 *            <li>promptText -- text from attribute definition, if set, will override
						 *            dynamically created prompt
						 *            </ul>
						 *            <li>dataType -- data type of this control, for example, <code>xs:date</code>
						 *            </ul>
						 *            <li>dataFormat -- format of this control, for example, <code>yyyy-mm-dd</code>
						 *            </ul>
						 *            <li>maxLength -- input controls length attribute value
						 *            </ul>
						 *            <li>minMaxValues--
						 *            </ul>
						 *            <li>cardinality
						 *            </ul>
						 *            <li>choiceList --- IBM FileNet P8 choice list might be a data store in the future
						 *            </ul>
						 *            <li>valueOptions--
						 *            </ul>
						 *            </ul>
						 * @return String representing the prompt text.
						 */
						getPromptText: function(kwArgs) {
							this.logEntry("getPromptText", "type: " + kwArgs.dataType + ", choiceList: " + kwArgs.choiceList + ", cardinality: " + kwArgs.cardinality);
							var promptText = "";
							var hint = "";
							if (kwArgs.promptText && kwArgs.promptText.length > 0) {
								// Prompt Text has already been specified from the attributes
								this.logExit("getPromptText", "return: " + kwArgs.promptText);
								return kwArgs.promptText;
							}

							if (kwArgs.cardinality && kwArgs.cardinality == "LIST") {
								if (kwArgs.choiceList && kwArgs.choiceList.choices.length > 0) {
									promptText = this.messages.properties_multiple_select_choice_tooltip;
								} else if (kwArgs.dataType == "xs:group") { // multi-value user/group picker
									promptText = this.messages.properties_multiple_select_typein_tooltip;
								} else { // Multivalue type in
									promptText = this.messages.properties_multiple_select_typein_tooltip;
								}

							} else if ((kwArgs.cardinality && kwArgs.cardinality == "SINGLE" && kwArgs.choiceList) || (kwArgs.valueOptions && kwArgs.valueOptions.length > 0)) {
								promptText = this.messages.properties_single_select_choice_tooltip;

							} else if (kwArgs.dataType == "xs:date" || kwArgs.dataType == "xs:timestamp") {
								promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
									kwArgs.dataType == "xs:date" ? this.messages.properties_type_date_tooltip : this.messages.properties_type_timestamp_tooltip
								]);
								if (kwArgs.dataFormat) {
									hint = ecm.messages.properties_format_tooltip + kwArgs.dataFormat;
								}

							} else if (kwArgs.dataType == "xs:time") {
								promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
									this.messages.properties_type_time_tooltip
								]);
								if (kwArgs.dataFormat) {
									hint = ecm.messages.properties_format_tooltip + kwArgs.dataFormat;
								}

							} else if (kwArgs.dataType == "xs:guid") {
								promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
									this.messages.properties_type_guid_tooltip
								]);
								promptText += this.messages.properties_type_guid_example_tooltip;

							} else if (kwArgs.dataType == "xs:reference") {
								promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
									this.messages.properties_type_reference_tooltip
								]);

							} else if (kwArgs.dataType == "xs:object") {
								// Note: This will indicate object is a document even though it may be a folder.  To improve this,
								// we'd need to figure out if document or folder & use properties_requiredClass_document_tooltip or properties_requiredClass_folder_tooltip
								if (kwArgs.requiredClass) {
									promptText = string.substitute(this.messages.properties_requiredClass_document_tooltip, [
										kwArgs.requiredClass
									]);
								} else {
									promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
										this.messages.properties_type_object_tooltip
									]);
								}

							} else if (kwArgs.dataType == "xs:integer" || kwArgs.dataType == "xs:short" || kwArgs.dataType == "xs:long" || kwArgs.dataType == "xs:decimal" || kwArgs.dataType == "xs:double" || kwArgs.dataType == "xs:score") {
								if (kwArgs.dataType == "xs:double" || kwArgs.dataType == "xs:score") {
									promptText = this.messages.properties_type_double_tooltip;
								} else if (kwArgs.dataType == "xs:short") {
									promptText = this.messages.properties_type_short_tooltip;
								} else if (kwArgs.dataType == "xs:integer") {
									promptText = this.messages.properties_type_integer_tooltip;
								} else if (kwArgs.dataType == "xs:long") {
									promptText = this.messages.properties_type_long_tooltip;
								} else if (kwArgs.dataType == "xs:decimal") {
									promptText = this.messages.properties_type_decimal_tooltip;
								}
								promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
									promptText
								]);

								var minValueForMessage, maxValueForMessage;
								if (kwArgs.minMaxValues.minString) {
									minValueForMessage = "\u202D" + kwArgs.minMaxValues.minString + "\u202C";
								} else {
									minValueForMessage = kwArgs.minMaxValues.min != undefined ? "" + kwArgs.minMaxValues.min : "";
									minValueForMessage = "\u202D" + minValueForMessage + "\u202C";
								}
								if (kwArgs.minMaxValues.maxString) {
									maxValueForMessage = "\u202D" + kwArgs.minMaxValues.maxString + "\u202C";
								} else {
									maxValueForMessage = kwArgs.minMaxValues.max != undefined ? "" + kwArgs.minMaxValues.max : "";
									maxValueForMessage = "\u202D" + maxValueForMessage + "\u202C";
								}
								//var minValueForMessage = "\u202D" + kwArgs.minMaxValues.minString + "\u202C"; // kwArgs.minMaxValues.min != undefined ? "" + kwArgs.minMaxValues.min : kwArgs.minMaxValues.minString;
								//var maxValueForMessage = "\u202D" + kwArgs.minMaxValues.maxString + "\u202C"; // kwArgs.minMaxValues.max != undefined ? "" + kwArgs.minMaxValues.max : kwArgs.minMaxValues.maxString;
								if (minValueForMessage && minValueForMessage.length > 0) {
									hint = ecm.messages.properties_minValue_tooltip + minValueForMessage;
								}
								if (maxValueForMessage && maxValueForMessage.length > 0) {
									if (hint)
										hint += "<br/>";
									hint += ecm.messages.properties_maxValue_tooltip + maxValueForMessage;
								}

							} else {
								if (kwArgs.dataType == "xs:string" || kwArgs.dataType == "xs:user") {
									promptText = ecm.messages.properties_type_string_tooltip;
								} else if (kwArgs.dataType == "xs:string:alpha") {
									promptText = ecm.messages.properties_type_string_alpha_tooltip;
								} else if (kwArgs.dataType == "xs:string:alphanum") {
									promptText = ecm.messages.properties_type_string_alphanum_tooltip;
								} else if (kwArgs.dataType == "xs:string:ext") {
									promptText = ecm.messages.properties_type_string_ext_tooltip;
								} else if (kwArgs.dataType == "xs:string:num") {
									promptText = ecm.messages.properties_type_string_num_tooltip;
								}
								promptText = string.substitute(ecm.messages.properties_dataType_tooltip, [
									promptText
								]);

								if (kwArgs.maxLength) {
									hint = ecm.messages.properties_maxLength_tooltip + kwArgs.maxLength;
								}
								if (kwArgs.minLength) {
									hint = ecm.messages.properties_minLength_tooltip + kwArgs.minLength;
								}
							}
							if (kwArgs.description) {
								if (hint)
									hint += "<br/>";
								hint += ecm.messages.properties_description_tooltip + kwArgs.description;
							}
							if (hint) {
								if (promptText)
									promptText += "<br/>";
								promptText += hint;
							}
							this.logExit("getPromptText", "return: " + promptText);
							return promptText;
						},

						/*
						 * @private Creates the text editor.
						 */
						_createTextEditor: function(baseConstraints, kwArgs) {
							var methodName = "_createTextEditor";
							//this.logDebug(methodName, "type: " + kwArgs.dataType + ", values: " + kwArgs.values);
							var regularExpr = kwArgs.regularExpr ? kwArgs.regularExpr : this.getRegularExpression(kwArgs.dataType, kwArgs.dataFormat, kwArgs.forSearch);

							var invalidMessage = this.messages.property_invalid;
							if (kwArgs.dataType == "xs:string:alpha") {
								invalidMessage = this.messages.property_alpha_invalid;
							} else if (kwArgs.dataType == "xs:string:alphanum") {
								invalidMessage = this.messages.property_alphanum_invalid;
							} else if (kwArgs.dataType == "xs:string:num") {
								invalidMessage = this.messages.property_num_invalid;
							} else if (kwArgs.dataType == "xs:string:ext") {
								invalidMessage = this.messages.property_ext_invalid;
							}
							var maxLengthMessage = kwArgs.maxLength ? string.substitute(this.messages.property_tooLong, [
								kwArgs.maxLength
							]) : "";
							var minLengthMessage = kwArgs.minLength ? string.substitute(this.messages.property_tooShort, [
								kwArgs.minLength
							]) : "";
							lang.mixin(baseConstraints, {
								pattern: regularExpr,
								invalidMessage: kwArgs.invalidMessage || invalidMessage,
								maxLength: kwArgs.maxLength,
								minLength: kwArgs.minLength,
								maxLengthMessage: maxLengthMessage,
								minLengthMessage: minLengthMessage,
								repositoryType: kwArgs.repositoryType ? kwArgs.repositoryType : (kwArgs.repository ? kwArgs.repository.type : ""),
								repositoryEncodingUTF8: kwArgs.repository ? kwArgs.repository.databaseEncodingUTF8 : false,
								trim: !kwArgs.noTrimStrings,
								style: {
									width: kwArgs.width || ""
								},
								textDir: has("text-direction")
							});
							var editor;
							if (kwArgs.maxLength && (kwArgs.maxLength > 256)) {
								//text area is slightly bigger due to resize handle..so downsize the default size to make everything even
								//if (!kwArgs.width) {
								//baseConstraints.style.width = "284px";
								//}
								if (regularExpr == ".*") {
									baseConstraints.regExp = "[\\s\\S]*"; // if default regex, change to handle line break for textarea control
								}
								if (kwArgs.maxLength == 2147483647) {
									// Special PE maxLength value, will revert to standard input field (customer must use EDS to get standard behavior).
									editor = new ValidationTextBox(baseConstraints);
								} else {
									editor = new ValidationSimpleTextarea(baseConstraints);
								}
							} else if (kwArgs.attributeDefinition && kwArgs.attributeDefinition.editorClass != null) {
								if (kwArgs.attributeDefinition.editorClass == "ecm.widget.ValidationSimpleTextarea") {
									if (regularExpr == ".*") {
										baseConstraints.regExp = "[\\s\\S]*"; // if default regex, change to handle line break for textarea control
									}
								}
								var widgetReq = kwArgs.attributeDefinition.editorClass.split('.').join('/');
								require([
									widgetReq
								], function(cls) {
									editor = new cls(baseConstraints);
								});
							} else if (kwArgs.repositoryType && kwArgs.repositoryType == "box" && kwArgs.name == "name" && kwArgs.attributeDefinition.contentClass && kwArgs.attributeDefinition.contentClass.id == "file") {
								editor = new ValidationTextBoxFileNameNoExtension(baseConstraints);
							} else {
								editor = new ValidationTextBox(baseConstraints);
							}
							editor.set("value", this._getNormalizedValueString(kwArgs.values)[0]);
							return editor;
						},

						/**
						 * @private Creates the object editor.
						 */
						_createObjectEditor: function(baseConstraints, kwArgs) {
							lang.mixin(baseConstraints, {
								style: {
									width: kwArgs.width || ""
								},
								// Until object selection is supported, treat object valued fields as read-only.
								// This prevents users from thinking they can modify the display value, and it prevents incorrectly
								// attempting to apply the display value as the actual object property value when property changes are saved.
								readOnly: true
							});
							var editor = new ValidationTextBox(baseConstraints);
							editor.set("value", this._getNormalizedValueString(kwArgs.values)[0]);
							return editor;
						},

						/**
						 * @private Creates the reference editor.
						 */
						_createReferenceEditor: function(baseConstraints, kwArgs) {
							var value = kwArgs.values;
							if (kwArgs.values instanceof Array) {
								value = (kwArgs.values.length == 0) ? null : kwArgs.values[0];
							}
							lang.mixin(baseConstraints, {
								readOnly: false,
								label: value ? this.messages.edit_properties_dialog_title + "..." : this.messages.undefined_reference_value,
								"class": kwArgs.values ? "" : "disabled"
							});
							var editor = new ReferenceAttributeButton(baseConstraints);
							if (value) {
								editor.set("value", value);
							}
							return editor;
						},

						/**
						 * @private Creates the GUI editor.
						 */
						_createGuidEditor: function(baseConstraints, kwArgs) {
							var regularExpr = kwArgs.regularExpr ? kwArgs.regularExpr : this.getRegularExpression(kwArgs.dataType, kwArgs.dataFormat);
							lang.mixin(baseConstraints, {
								invalidMessage: this.messages.property_GUI_invalid,
								style: {
									width: kwArgs.width || ""
								},
								pattern: regularExpr
							});
							var editor = new ValidationTextBox(baseConstraints);
							editor.set("value", this._getNormalizedValueString(kwArgs.values)[0]);
							return editor;
						},

						/**
						 * @private Creates the user editor.
						 */
						_createUserEditor: function(baseConstraints, kwArgs) {
							var users = this._getSelectedUsers(kwArgs.values);
							var editor = this._createUserGroupDropdownControl(kwArgs, baseConstraints, {
								queryMode: "users",
								selectionMode: "single",
								selectedItems: users
							});
							editor.set("value", users);
							editor.startup();
							return editor;
						},

						/**
						 * @private Creates the group editor.
						 */
						_createGroupEditor: function(baseConstraints, kwArgs) {
							var users = this._getSelectedUsers(kwArgs.values);
							var editor = this._createUserGroupDropdownControl(kwArgs, baseConstraints, {
								selectionMode: "single",
								selectedItems: users,
								defaultScope: "users"
							});
							editor.set("value", users);
							editor.startup();
							return editor;
						},

						/**
						 * @private Creates the number editor.
						 */
						_createNumberEditor: function(baseConstraints, kwArgs) {
							var methodName = "_createNumberEditor";
							//this.logDebug(methodName, "type: " + kwArgs.dataType + ", values: " + kwArgs.values);
							var regularExpr = kwArgs.regularExpr ? kwArgs.regularExpr : this.getRegularExpression(kwArgs.dataType, kwArgs.dataFormat, kwArgs.repositoryType, kwArgs.forSearch, kwArgs.reason);
							var constraints = {};
							if (kwArgs.minMaxValues.min != undefined) {
								constraints.min = kwArgs.minMaxValues.min;
								constraints.max = kwArgs.minMaxValues.max;
							}
							constraints.minString = kwArgs.minMaxValues.minString;
							constraints.maxString = kwArgs.minMaxValues.maxString;
							var invalidMessage;
							var rangeMessage;
							var minValueForMessage = kwArgs.minMaxValues.minString != undefined ? kwArgs.minMaxValues.minString : kwArgs.minMaxValues.min; //kwArgs.minMaxValues.min != undefined ? "" + kwArgs.minMaxValues.min : kwArgs.minMaxValues.minString;
							var maxValueForMessage = kwArgs.minMaxValues.maxString != undefined ? kwArgs.minMaxValues.maxString : kwArgs.minMaxValues.max; //kwArgs.minMaxValues.max != undefined ? "" + kwArgs.minMaxValues.max : kwArgs.minMaxValues.maxString;
							if (kwArgs.dataType == "xs:integer" || kwArgs.dataType == "xs:short" || kwArgs.dataType == "xs:long") {
								constraints.places = 0;
								invalidMessage = this.messages.property_integer_invalid;
								rangeMessage = string.substitute(this.messages.property_integer_range, [
									minValueForMessage,
									maxValueForMessage
								]);
							} else if (kwArgs.dataType == "xs:decimal") {
								if (kwArgs.dataFormat) {
									var numChar = this.messages.property_number_character;
									var format = kwArgs.dataFormat.replace(/#/g, numChar);
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
									if (kwArgs.repositoryType == "od") {
										invalidMessage = this.messages.property_invalid;
									} else {
										invalidMessage = this.messages.property_decimal_invalid;
									}
								}
								rangeMessage = string.substitute(this.messages.property_decimal_range, [
									minValueForMessage,
									maxValueForMessage
								]);
							} else if (kwArgs.dataType == "xs:double" || kwArgs.dataType == "xs:score") {
								invalidMessage = this.messages.property_double_invalid;
								rangeMessage = string.substitute(this.messages.property_double_range, [
									minValueForMessage,
									maxValueForMessage
								]);
							}
							lang.mixin(baseConstraints, {
								invalidMessage: invalidMessage,
								rangeMessage: rangeMessage,
								style: {
									width: kwArgs.width || ""
								},
								pattern: regularExpr,
								trim: true,
								repositoryType: kwArgs.repositoryType ? kwArgs.repositoryType : (kwArgs.repository ? kwArgs.repository.type : ""),
								constraints: constraints
							});
							var editor = new RangeBoundTextBox(baseConstraints);
							var val = this._getNormalizedValueString(kwArgs.values)[0];
							if (val && val != '') {
								if (kwArgs.dataType == "xs:double" || kwArgs.dataType == "xs:decimal" || kwArgs.dataType == "xs:score") {
									var decimalPoint = this.getDecimalPoint();
									if (decimalPoint != ".") {
										val = val.replace(".", decimalPoint);
									}
									editor.set("displayedValue", val); //editor.set("value", Number(val)); // NOTE: using Number(val) converts large #s to expon
								} else {
									editor.set("displayedValue", val); //editor.set("value", Number(val)); // NOTE: using Number(val) converts large #s to expon
								}
							}
							if (has("text-direction")) {
								editor.set("textDir", has("text-direction"));
							}

							if (kwArgs.dataType == "xs:double" || kwArgs.dataType == "xs:decimal" || kwArgs.dataType == "xs:score") {
								editor.setDecimalPoint(this.getDecimalPoint());
							}

							return editor;
						},

						/**
						 * @private Creates the single choice tree editor.
						 */
						_createSingleChoiceTreeEditor: function(baseConstraints, kwArgs) {
							var showNone = kwArgs.multiSelect ? false : !kwArgs.required;
							var singleValueTree = new SingleValueTreePane({
								availableData: kwArgs.choiceList,
								selectedValue: kwArgs.values && kwArgs.values.length > 0 ? kwArgs.values[0] : "",
								showNone: showNone,
								editable: !kwArgs.readOnly
							});
							lang.mixin(baseConstraints, {
								"label": singleValueTree.getLabel(),
								width: kwArgs.width || "",
								dropDown: singleValueTree
							});
							var editor = new DropDownInput(baseConstraints);
							editor.set("value", singleValueTree.getValue());
							editor.set("originalLabel", kwArgs.label);
							editor.startup();
							return editor;
						},

						/**
						 * @private Creates the single choice list editor.
						 */
						_createSingleChoiceListEditor: function(baseConstraints, kwArgs) {
							var options = [];
							var valueOptionsStore = null;

							// Get the single value from values.
							var value = null;
							if (lang.isArray(kwArgs.values)) {
								if (kwArgs.values.length > 0) {
									value = kwArgs.values[0];
								}
							} else {
								value = kwArgs.values;
							}

							// Get the current value on the item.
							var originalValue = null;
							if (lang.isArray(kwArgs.originalValue)) {
								if (kwArgs.originalValue.length > 0) {
									originalValue = kwArgs.originalValue[0];
								}
							} else {
								originalValue = kwArgs.originalValue;
							}

							if (kwArgs.choiceList) { // choiceList has displayName as the label
								if (baseConstraints.pageSize == null) {
									// Filtering has reasonable performance under IE11 (worst performing browser) with a default page size of 500.
									baseConstraints.pageSize = 500;
								}
								options = lang.clone(kwArgs.choiceList.choices); // must clone just in case the same data is passed in a 2nd time for field2
								if (!kwArgs.required && !kwArgs.multiSelect) {
									// Add a blank option
									options = [
										{
											value: "",
											displayName: ""
										}
									].concat(options);
								}
								if (originalValue != null && originalValue != "") {
									// Add the current value on the item to the options list if it is not already there.
									var valueFound = false;
									for (var k = 0; k < options.length && !valueFound; k++) {
										if (options[k].value == originalValue) {
											valueFound = true;
										}
									}

									if (!valueFound) {
										options = [
											{
												value: originalValue,
												displayName: originalValue
											}
										].concat(options);
									}
								}
								valueOptionsStore = new ItemFileWriteStore({
									data: {
										items: options,
										// identifier: 'value',
										label: 'displayName'
									}
								});
								lang.mixin(baseConstraints, {
									searchAttr: "displayName"
								});

							} else { // valueOptions has label as the label
								var valueOptions = [].concat(kwArgs.valueOptions);
								if (valueOptions.length > 0) {
									var options;
									if (!lang.isObject(valueOptions[0])) {
										// Normalize the options to guarantee that the value, not the index, is submitted
										options = new Array();
										array.forEach(valueOptions, function(value, index) {
											options.push({
												value: value,
												label: value
											});
										});
									} else {
										options = valueOptions;
									}
									if (!kwArgs.required) {
										var hasBlankValue = false;
										for ( var i in options) {
											if (options[i].value === "") {
												hasBlankValue = true;
												break;
											}
										}
										// P8 workflow boolean doesn't have the required meta property but it doesn't support blank entry either.  So if there isn't any
										// default blank value from the options then don't add one.
										if (!hasBlankValue && (kwArgs.repositoryType != "p8" || !(kwArgs.dataType == "xs:boolean" && kwArgs.reason == "editParameters"))) {
											// Add a blank option
											options = [
												{
													value: "",
													label: ""
												}
											].concat(options);
										}
									}
								}
								valueOptionsStore = new ItemFileWriteStore({
									data: {
										items: options,
										// identifier: 'value',
										label: 'label'
									}
								});
								lang.mixin(baseConstraints, {
									searchAttr: "label"
								});
							}

							// This application supports multiple values for the same label; therefore, remove identifier from the store & set value via setting the index
							lang.mixin(baseConstraints, {
								invalidMessage: this.messages.property_pulldown_invalid,
								labelType: "text", // this creates a text node for the label ... which allows data like "<title>
								style: {
									width: kwArgs.width || ""
								},
								store: new DataStore({
									store: valueOptionsStore
								})
							});
							if (!ecm.model.desktop.useStartsWithChoiceListFilter) {
								baseConstraints.queryExpr = "*${0}*"; // "contains" search
								baseConstraints.autoComplete = false; // useless with "contains" search
							}

							var editor;
							if (kwArgs.openChoice != undefined && kwArgs.openChoice == true) {
								//this is just for CMIS openChoice:true properties.
								editor = new ComboBox(baseConstraints);
								if (typeof value != "undefined" && value !== null) {
									editor.set('value', value);
								}
							} else {
								editor = new FilteringSelect(baseConstraints);
								if (value != null) {
									var boolValue = null;
									for (var k = 0; k < options.length; k++) {
										if (typeof options[k].value == "boolean") {
											if (boolValue === null) {
												boolValue = (value === "true" || value === true) ? true : ((value === "false" || value === false) ? false : value);
											}
											// Use identity compare to avoid type conversion matches.
											if (options[k].value === boolValue) {
												editor.set('value', k);
												break;
											}
										} else if (options[k].value) {
											// Allow type conversion by using the == equality match.
											if (this._trim(options[k].value) == this._trim(value)) {
												editor.set('value', k);
												break;
											}
										} else { // Value is falsy
											// Test falsy values using identity compare to avoid type conversion matches.
											if (options[k].value === value) {
												editor.set('value', k);
												break;
											}
										}
									}
								}
							}
							editor.maxHeight = 200;
							//story 9423 - to set boolean select box not very wide as others
							if (kwArgs.dataType == "xs:boolean") {
								domStyle.set(editor.domNode, "width", kwArgs.width || "");
							}
							return editor;
						},

						/**
						 * Trims traling blanks.
						 */
						_trim: function(str) {
							if (!str || !str.replace) {
								return str;
							}
							return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
						},

						/**
						 * @private Creates the multiple value editor.
						 */
						_createMultiValueEditor: function(baseConstraints, kwArgs) {
							var editor = null;
							if (kwArgs.choiceList && (kwArgs.choiceList.choices.length > 0 || kwArgs.choiceList.markings)) {
								editor = this._createMultiValueChoiceEditor(baseConstraints, kwArgs);
							} else if (kwArgs.dataType == "xs:group") { // multi-value user/group picker
								var users = this._getSelectedUsers(kwArgs.values);
								editor = this._createUserGroupDropdownControl(kwArgs, baseConstraints, {
									selectedItems: users,
									defaultScope: "users"
								});
								editor.set("value", users);
								editor.startup();
							} else if (kwArgs.dataType == "xs:user") { // multi-value user picker
								var users = this._getSelectedUsers(kwArgs.values);
								editor = this._createUserGroupDropdownControl(kwArgs, baseConstraints, {
									queryMode: "users",
									selectedItems: users
								});
								editor.set("value", users);
								editor.startup();
							} else if (kwArgs.dataType == "xs:attachment") { // multi-value workflow attachment
								// skip these, they can not be displayed in property editors
							} else { // Multivalue type in
								editor = this._createMultiValueInputEditor(baseConstraints, kwArgs);
							}
							return editor;
						},

						/**
						 * @private Creates the multiple value input editor.
						 */
						_createMultiValueInputEditor: function(baseConstraints, kwArgs) {
							var dataType = kwArgs.dataType;
							var multiValueInput = new MultiValueInputPane({
								allowDuplicateValues: !kwArgs.uniqueValues,
								hasSorting: !kwArgs.uniqueValues,
								trimStrings: !kwArgs.noTrimStrings
							});
							multiValueInput.setData(kwArgs);
							multiValueInput.setEditable(!kwArgs.readOnly);
							lang.mixin(baseConstraints, {
								"label": multiValueInput.getLabel(),
								width: kwArgs.width || "",
								dropDown: multiValueInput
							});
							var editor = new DropDownInput(baseConstraints);
							editor.set("value", multiValueInput.getValue());
							editor.set("originalLabel", kwArgs.label);

							// For timestamp MVCPs, save the initial values to the editor so the can be compared later.
							if (dataType == "xs:timestamp" || dataType == "xs:date") {
								editor.initialDateTimeValues = kwArgs.values;
							}

							editor.startup();
							return editor;
						},

						/**
						 * @private Creates the multiple value choice editor.
						 */
						_createMultiValueChoiceEditor: function(baseConstraints, kwArgs) {
							var availableData = kwArgs.choiceList;

							// availableData.canRemoves will be present if the choicelist is a marking set, and the choices
							// array contains only "canAdd" markings.
							// In this case, if a marking value is already in the selected values for this property, but is not
							// in the choicelist (because it was not "canAdd"), we want to add it to the list of available
							// choices.  Because while the user is editing, they may want to put back one of the values that
							// they removed, and this is allowed, because the MV property has not yet been persisted out to
							// the database.
							if (availableData.canRemoves) {
								availableData = lang.clone(kwArgs.choiceList); // Keep the original data that we got from the AttributeDefinition clean.
								var matchedChoices = {}; // don't allow duplicates.
								if (lang.isArray(kwArgs.values)) {
									for (var n = 0; n < kwArgs.values.length; n++) {
										var value = kwArgs.values[n];
										if (availableData.canRemoves[value] && !matchedChoices[value]) {
											availableData.choices.push(availableData.canRemoves[value]);
											matchedChoices[value] = true;
										}
									}
								} else {
									if (availableData.canRemoves[kwArgs.values]) {
										availableData.choices.push(availableData.canRemoves[kwArgs.values]);
									}
								}
							}

							var multiValueChoice = new MultiValueChoicePane({
								availableData: availableData,
								selectedValues: kwArgs.values,
								isTree: kwArgs.choiceListNested,
								editable: !kwArgs.readOnly,
								hasSorting: !kwArgs.uniqueValues,
								hideAvailableOnAdd: kwArgs.uniqueValues,
								allowDuplicateValues: !kwArgs.uniqueValues
							});
							lang.mixin(baseConstraints, {
								"label": multiValueChoice.getLabel(),
								width: kwArgs.width || "",
								dropDown: multiValueChoice
							});
							var editor = new DropDownInput(baseConstraints);
							editor.set("value", multiValueChoice.getValue());
							editor.set("originalLabel", kwArgs.label);
							editor.startup();
							return editor;
						},

						/**
						 * @private Creates the time editor.
						 */
						_createTimeEditor: function(baseConstraints, kwArgs) {
							var methodName = "_createTimeEditor";
							//this.logDebug(methodName, "type: " + kwArgs.dataType + ", values: " + kwArgs.values);
							var invalidMessage = string.substitute(this.messages.property_time_invalid, [
								kwArgs.dataFormat
							]);
							var rangeMessage;
							if (kwArgs.minMaxValues && kwArgs.minMaxValues.min) {
								var dp = new DatePicker({
									constraints: {
										datePattern: kwArgs.dataFormat,
										selector: 'date',
										locale: ecm.model.desktop.valueFormatter.getLocale()
									}
								});
								dp.set("value", kwArgs.minMaxValues.min);
								var minDisplayValue = dp.get("displayedValue");
								dp.set("value", kwArgs.minMaxValues.max);
								var maxDisplayValue = dp.get("displayedValue");
								dp.destroyRecursive();
								rangeMessage = string.substitute(this.messages.property_time_range, [
									minDisplayValue,
									maxDisplayValue
								]);
							} else {
								rangeMessage = string.substitute(this.messages.property_time_range, [
									"",
									""
								]);
							}
							lang.mixin(baseConstraints, {
								hint: kwArgs.dataFormat,
								invalidMessage: invalidMessage,
								rangeMessage: rangeMessage,
								constraints: {
									timePattern: kwArgs.dataFormat,
									selector: 'time',
									strict: false,
									locale: ecm.model.desktop.valueFormatter.getLocale()
								}
							});
							var editor = new TimePicker(baseConstraints);
							domStyle.set(editor.stateNode, "width", kwArgs.width || "");
							this._applyDateValue(editor, kwArgs);
							return editor;
						},

						/**
						 * @private Creates the date timestamp editor.
						 */
						_createDateTimestampEditor: function(baseConstraints, kwArgs) {
							var methodName = "_createDateTimestampEditor";
							//this.logDebug(methodName, "type: " + kwArgs.dataType + ", values: " + kwArgs.values);
							var invalidMessage = string.substitute(this.messages.property_date_invalid, [
								kwArgs.dataFormat
							]);
							var rangeMessage;

							if (kwArgs.minMaxValues && kwArgs.minMaxValues.min && kwArgs.minMaxValues.max) {
								var minDisplayString = kwArgs.asYearInt ? kwArgs.minMaxValues.min : ecm.model.desktop.valueFormatter.formatDate(kwArgs.minMaxValues.min, {
									strict: true,
									datePattern: kwArgs.dataFormat,
									selector: 'date'
								});

								var maxDisplayString = kwArgs.asYearInt ? kwArgs.minMaxValues.max : ecm.model.desktop.valueFormatter.formatDate(kwArgs.minMaxValues.max, {
									strict: true,
									datePattern: kwArgs.dataFormat,
									selector: 'date'
								});

								rangeMessage = string.substitute(this.messages.property_date_range, [
									minDisplayString,
									maxDisplayString
								]);
							} else {
								rangeMessage = string.substitute(this.messages.property_date_range, [
									"",
									""
								]);
							}

							var isOD = kwArgs.repositoryType == "od" || (kwArgs.repository && kwArgs.repository._isOnDemand());

							var constraints;
							constraints = {
								datePattern: kwArgs.dataFormat,
								selector: 'date',
								strict: true, // this must be strict or else some two digit year formats will not work for OD
								locale: ecm.model.desktop.valueFormatter.getLocale()
							};

							if (kwArgs.minMaxValues && kwArgs.minMaxValues.min) {
								constraints.min = kwArgs.asYearInt ? ecm.model.desktop.valueFormatter.parseDate(kwArgs.minMaxValues.min + "", {
									strict: true,
									datePattern: kwArgs.dataFormat,
									selector: "date"
								}) : kwArgs.minMaxValues.min;
							}
							if (kwArgs.minMaxValues && kwArgs.minMaxValues.max) {
								constraints.max = kwArgs.asYearInt ? ecm.model.desktop.valueFormatter.parseDate(kwArgs.minMaxValues.max + "", {
									strict: true,
									datePattern: kwArgs.dataFormat,
									selector: "date"
								}) : kwArgs.minMaxValues.max;
							}

							lang.mixin(baseConstraints, {
								hint: kwArgs.dataFormat,
								invalidMessage: invalidMessage,
								rangeMessage: rangeMessage,
								instantValidate: false,
								constraints: constraints,
								asYearInt: kwArgs.asYearInt,
								repositoryType: kwArgs.repositoryType ? kwArgs.repositoryType : (kwArgs.repository ? kwArgs.repository.type : ""),
							});

							if (kwArgs.forSearch && isOD) {
								lang.mixin(baseConstraints, {

									// allow text and keypress to propagate - override of _HasDropDown
									_onDropDownMouseDown: function(/*Event*/e) {
										if (this.disabled || this.readOnly) {
											return;
										}
										this.own(on.once(this.ownerDocument, touch.release, lang.hitch(this, "_onDropDownMouseUp")));
										setTimeout(lang.hitch(this, "toggleDropDown"));
									},
									// override of DatePicker
									getValue: function() {
										// for OD return the entered value - user may have entered just about anything in the field
										// that will not resolve to an ISO date.
										// ex.  2013/06/13 may have been changed to 13/6/13 which is ambiguous so let the OD server
										// try to figure it out
										return this.getDateORTextValue();
									}
								});
							}

							var editor = new DatePicker(baseConstraints);
							if (kwArgs.width || kwArgs.dataType == "xs:date") {
								domStyle.set(editor.stateNode, "width", kwArgs.width || "");
							}

							// for OD, allow anything to pass.  does that include the initial value?
							this._applyDateValue(editor, kwArgs);

							// Set the initial value of the control that we will use to compare when returning values to the
							// server.
							editor.initialValue = this._getNormalizedValueString(kwArgs.values)[0];

							return editor;
						},

						/**
						 * @private Applies the kwArgs values to the date editor.
						 */
						_applyDateValue: function(editor, kwArgs) {
							var value = this._getNormalizedValueString(kwArgs.values)[0];
							if (value != "") {
								var num = new Number(value);
								if (!isNaN(num)) { // timestamp or OD year integer
									value = kwArgs.asYearInt ? value : new Date(num);
								} else if (kwArgs.forSearch) {
									var date = dateStamp.fromISOString(value);
									if (date != null) {
										if (kwArgs.valueTimeZoneOffset && (!(kwArgs.valueTimeZoneOffset instanceof Array) || kwArgs.valueTimeZoneOffset.length > 0)) {
											var offset = kwArgs.valueTimeZoneOffset instanceof Array ? kwArgs.valueTimeZoneOffset[0] : kwArgs.valueTimeZoneOffset;
											date = new Date(date.getTime() + date.getTimezoneOffset() * 60000 + offset * 60000);
										}
										value = date;
										if (has("calendar-type") == "hijri") {//calendar type chosen hijri
											var dateIslamic = new islamicDate();
											value = dateIslamic.fromGregorian(date);
										} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
											var dateHebrew = new hebrewDate();
											value = dateHebrew.fromGregorian(date);
										} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
											var dateUmmAlQura = new umalquraDate();
											value = dateUmmAlQura.fromGregorian(date);
										}
									} else if (kwArgs.repositoryType != "od") {
										// Reset the value; otherwise, the field displays "Error"
										// Note: OnDemand values are not reset because input is not validated in oder to accept special date characters like 't'
										value = "";
									}
								} else {
									try {
										if (ecm.model.desktop.enableHideTimePortion && kwArgs.dataType == "xs:timestamp" && kwArgs.repositoryType == "p8" && !kwArgs.isSystem && ecm.model.desktop.valueFormatter.formatTimestampHideTime) {
											value = ecm.model.desktop.valueFormatter.formatTimestampHideTime(value, kwArgs.valueTimeZoneOffset);
										} else {
											value = ecm.model.desktop.valueFormatter.formatValue(value, kwArgs.dataType, kwArgs.dataFormat, kwArgs.valueTimeZoneOffset);
										}
									} catch (e) {
										this.logDebug("_applyDateValue", "Date formatter exception");
										value = ""; // allow rendering to continue if value cannot be formatted
									}
								}
								editor.set(value instanceof Date || value instanceof islamicDate || value instanceof umalquraDate || value instanceof hebrewDate ? "value" : "displayedValue", value);
							} else {
								this.logDebug("_applyDateValue", "no value");
							}
						},

						/**
						 * Returns a boolean flag indicating whether the attribute is read only.
						 * 
						 * @param attributeDefinition
						 *            A {@link ecm.model.AttributeDefinition} object. Provides the definition for the
						 *            attributes in the <code>item</code> parameter.
						 * @param item
						 *            A {@link ecm.model.ContentItem} object (maybe null on create).
						 * @param reason
						 *            The reason for displaying properties. Pass <code>"create"</code> when creating a
						 *            new content item, <code>"checkin"</code> when checking in a content item,
						 *            <code>"editProperties"</code> when editing the properties of a content item, or
						 *            <code>"multiEditProperties"</code> when editing the properties of multiple
						 *            content items.
						 * @param isReadOnly
						 *            Pass <code>true</code> if the entire item is read only.
						 * @since 2.0.3
						 */
						getFieldIsReadOnly: function(attributeDefinition, item, reason, isReadOnly) {
							if (isReadOnly) {
								return true;
							}
							if (attributeDefinition.readOnly) {
								return true;
							}
							if (reason != "create" && reason != "entryTemplateBuilder") {
								if (attributeDefinition.settability == "onlyOnCreate") {
									return true;
								}
								if (attributeDefinition.settability == "onlyBeforeCheckin" && reason != "checkin") {
									return true;
								}
							}

							// Don't override the attributeDefinition read only setting from the item's read only settings for
							// the attribute - the class attribute definition setting and the item's current attribute setting.
							// Those settings have already been applied to the passed in attributeDefinition, and EDS may have 
							// modified the read only setting in the attributeDefinition since then. 

							if (attributeDefinition.markingList) {
								var readOnlyDueToMarkings = false;
								var value = (item != null ? item.getValue(attributeDefinition.id) : null);

								if (!value || value == "") {
									// If the property has no value specified, and the user cannot add any markings, flag it as read-only.
									var choiceList = attributeDefinition.getChoiceList(true);
									readOnlyDueToMarkings = (choiceList == undefined || choiceList.choices.length == 0);
								}

								if (!readOnlyDueToMarkings && attributeDefinition.cardinality == "SINGLE") {
									// If the property is single-valued, and set to a marking that the user cannot remove, flag it as read-only.
									var marking = attributeDefinition.markingList.markings[value];
									readOnlyDueToMarkings = (marking && !marking.canRemove);
								}

								if (readOnlyDueToMarkings) {
									return true;
								}
							}
							return false;
						},

					});
		});

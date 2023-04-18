/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/date/stamp",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/string",
	"dojo/window",
	"dojo/data/ItemFileWriteStore",
	"dojox/grid/DataGrid",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"ecm/model/ValueFormatter",
	"../Messages",
	"./DatePicker",
	"./HoverHelp",
	"./_MoveUpDownMixin",
	"dojo/keys",
	"./PropertyEditors", //
// Loading SinglePropertyEditorFactory creates a circular reference (it references this module). 
// This module is currently only loaded by SinglePropertyEditorFactory, so SinglePropertyEditorFactory can 
// be referenced using the full ecm.widget.SinglePropertyEditorFactory name. 
// "./SinglePropertyEditorFactory", 
	"./TimePicker",
	"dojo/text!./templates/MultiValueInputPane.html",
	"dojox/date/islamic",
	"dojox/date/islamic/Date",
	"dojox/date/islamic/locale",
	"dojox/date/hebrew",
	"dojox/date/hebrew/Date",
	"dojox/date/hebrew/locale",
	"dojox/date/hebrew/numerals",
	"dojox/date/umalqura",
	"dojox/date/umalqura/Date",
	"dojox/date/umalqura/locale",
	"dojo/date/locale"
], //
function(declare, //
lang, //
array, //
has, //
dateStamp, //
domClass, //
domAttr, //
domConstruct, //
domGeom, //
string, //
win, //
ItemFileWriteStore, //
DataGrid, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ValueFormatter, //
Messages, //
DatePicker, //
HoverHelp, //
_MoveUpDownMixin, //
keys,
PropertyEditors, //
// SinglePropertyEditorFactory,
TimePicker, //
template, islamic, islamicDate, islamicLocale, hebrew, hebrewDate, hebrewLocale, hebrewNumerals, umalqura, umalquraDate, umalquraLocale, dateLocale) {

	/**
	 * @name ecm.widget.MultiValueInputPane
	 * @class Provides a widget that is used to enter multiple values. This widget is used for IBM FileNet Content
	 *        Manager repositories.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.MultiValueInputPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_MoveUpDownMixin
	], {
		/** @lends ecm.widget.MultiValueInputPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Boolean indicating if the selected values grid allows duplicates. If set to <code>false</code>, then the
		 * value will be the identifier for the store.
		 */
		allowDuplicateValues: true,

		/**
		 * Boolean indicating whether sorting is supported. If set to <code>false</code>, then the move up down
		 * buttons do not show.
		 */
		hasSorting: true,

		/**
		 * Boolean indicating whether strings are trimmed when added to the list.
		 */
		trimStrings: true,

		messages: ecm.messages,
		_args: null,
		_labelValues: null,
		_editable: true,
		_field: null,

		constructor: function() {
			if (!this._labelValues) {
				this._labelValues = [];
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			domAttr.set(this._upButton.focusNode, "aria-label", this._upButton.get("title"));
			domAttr.set(this._downButton.focusNode, "aria-label", this._downButton.get("title"));

			// SinglePropertyEditorFactory references this module, creating a circular reference that ends up making the AMD loaded
			// name for SinglePropertyEditorFactory in this module resolve to an empty object. The full ecm.widget name must be used instead.
			this._factory = new ecm.widget.SinglePropertyEditorFactory();
			this._decimalPoint = ecm.model.desktop.valueFormatter.getDecimalPoint();
			this._separator = ecm.model.desktop.valueFormatter.getSeparator(); // languages like French have , as the decimal point & " " as the group
			this._propertyEditors = new PropertyEditors();
		},

		/**
		 * Cleans up the widget when it is destroyed.
		 */
		destroy: function() {
			this.inherited(arguments);

			if (this._factory) {
				if (lang.isFunction(this._factory.destroyRecursive)) {
					this._factory.destroyRecursive();
				} else if (lang.isFunction(this._factory.destroy)) {
					this._factory.destroy();
				}
				delete this._factory;
			}

			if (this._propertyEditors) {
				this._propertyEditors.destroyFields();
				delete this._propertyEditors;
			}
			if (this._hoverHelp) {
				this._hoverHelp.destroy();
				delete this._hoverHelp;
			}
			if (this._field) {
				if (lang.isFunction(this._field.destroyRecursive)) {
					this._field.destroyRecursive();
				} else if (lang.isFunction(this._field.destroy)) {
					this._field.destroy();
				}
				delete this._field;
			}
			if (this._valuesGrid) {
				if (this._valuesGrid.domNode != null) {
					this._valuesGrid.destroyRecursive();
				}
				delete this._valuesGrid;
			}
		},

		/**
		 * Indicates if the data is editable.
		 * 
		 * @param bool
		 *            Boolean indicating if the data is editable.
		 */
		setEditable: function(bool) {
			this._editable = bool;

			this._addButton.set('disabled', !this._editable);
			this._removeButton.set('disabled', !this._editable);
			this._upButton.set('disabled', !this._editable);
			this._downButton.set('disabled', !this._editable);
			if (this._field) {
				this._field.set('disabled', !this._editable);
			}
			if (bool) {
				domClass.remove(this.domNode, "readOnly");
			} else {
				domClass.add(this.domNode, "readOnly");
			}
		},

		/**
		 * Sets the data. Also, constructs the editor widget used to enter input values using the single property editor
		 * factory.
		 * 
		 * @param inargs
		 *            Object containing the attributes for the input widget. Used to call the
		 *            <code>SinglePropertyEditorFactory</code> widget's <code>createSinglePropertyEditor</code>
		 *            method.
		 */
		setData: function(inargs) {

			this._args = {};
			this._args.cardinality = "SINGLE";
			this._args.choiceList = null;
			this._args.id = inargs.id + new Date().getTime();
			this._args.dataType = inargs.dataType;
			this._args.readOnly = inargs.readOnly;
			this._args.required = false;
			this._args.minMaxValues = inargs.minMaxValues;
			this._args.dataFormat = inargs.dataFormat;
			this._args.regularExpr = inargs.regularExpr;
			this._args.maxLength = inargs.maxLength;
			this._args.invalidMessage = inargs.invalidMessage;
			this._args.repositoryType = inargs.repositoryType ? inargs.repositoryType : "";
			if (inargs.dataType != "xs:date" && inargs.dataType != "xs:time") {
				if (inargs.dataType == "xs:timestamp") {
					this._args.width = "170px";
				} else if (inargs.dataType == "xs:guid" || inargs.dataType.substring(0, "xs:string".length) == "xs:string") {
					this._args.width = "210px";
				} else {
					this._args.width = "150px";
				}
			}
			this._args.values = "";
			this._args.valueOptions = [];
			if (this._args.dataType == "xs:boolean") {
				this._args.valueOptions.push({
					value: true,
					label: ecm.messages.true_label
				});
				this._args.valueOptions.push({
					value: false,
					label: ecm.messages.false_label
				});
			}
			this._args.noTrimStrings = !this.trimStrings && inargs.dataType && inargs.dataType.indexOf("xs:string") == 0;

			this._field = this._factory.createSinglePropertyEditor(this._args);
			if (inargs.dataType == "xs:timestamp") {

				// For MVCP date properties, display validation errors as tooltips,
				// not hover help tooltips to get around focus issues.
				this._field.displayMessageAsTooltip = true;
			}

			this._hoverHelp = new HoverHelp({
				message: inargs.promptText || this._field.getPromptText()
			});
			this._hoverHelp.startup();
			domConstruct.place(this._hoverHelp.domNode, this._hoverHelpContainer, "only");

			if (this._field.setHoverHelp) {
				this._field.setHoverHelp(this._hoverHelp);
			}
			this._inputContainer.appendChild(this._field.domNode);
			domAttr.set(this._inputLabel, "for", this._field.id);

			// NOTE: when the tooltip is after, then it covers up the Add button
			this._field.tooltipPosition.push("before");
			this._field.tooltipPosition.push("above");

			this.connect(this._field, "onKeyDown", function(evt) {
				if (evt.keyCode == 13) { // Enter
					this._onClickAdd();
				}
			});

			// If there are input values, set them into the label value array the grid uses to render
			this.setDataValues(inargs.values, inargs.dataType, inargs.dataFormat, inargs.valueTimeZoneOffset);
		},

		/**
		 * Sets the data values. This function performs no validation of the input values.
		 * 
		 * @param values
		 *            Array holding new data values to set.
		 * @since 2.0.3
		 */
		setDataValues: function(values, dataType, dataFormat, valueTimeZoneOffset) {
			this._labelValues = [];
			var valueAdded = {};	
			if (values != "") {
				var valuesArray = null;
				if (lang.isArray(values)) {
					valuesArray = values;
				} else {
					values += "";
					valuesArray = values.split(',');
				}
				var localizedDecimal = (this._decimalPoint != ".");
				for (var i = 0; i < valuesArray.length; i++) {
					var value = valuesArray[i];

					// If the value is undefined or null...
					if (value == null) {
						continue;
					}

					var label;

					if (dataType == "xs:boolean") {
						value = (value === "true" || value === true) ? true : false;
						label = value ? ecm.messages.true_label : ecm.messages.false_label;
					} else if (dataType == "xs:date" || dataType == "xs:timestamp" || dataType == "xs:time") {
						value = string.trim(value);
						if (value == "") {
							continue;
						}
						var date = dateStamp.fromISOString(value);
						var offset = (valueTimeZoneOffset instanceof Array && valueTimeZoneOffset.length > i) ? valueTimeZoneOffset[i] : null;
						if (date && offset) {
							date = new Date(date.getTime() + date.getTimezoneOffset() * 60000 + offset * 60000);
						}
						if (has("calendar-type") == "hijri") {//calendar type chosen hijri
							var dateIslamic = new islamicDate();
							var theIslamicDate = dateIslamic.fromGregorian(date);
							label = islamicLocale.format(theIslamicDate, {
								islamicLocale: ecm.model.desktop.valueFormatter.getLocale(),
								selector: "date",
								datePattern: dataFormat
							});
						} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
							var dateHebrew = new hebrewDate();
							var theHebrewDate = dateHebrew.fromGregorian(date);
							label = hebrewLocale.format(theHebrewDate, {
								hebrewLocale: ecm.model.desktop.valueFormatter.getLocale(),
								selector: "date",
								datePattern: dataFormat
							});
						} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
							var dateUmmAlQura = new umalquraDate();
							var theUmalquraDate = dateUmmAlQura.fromGregorian(date);
							label = umalquraLocale.format(theUmalquraDate, {
								umalquraLocale: ecm.model.desktop.valueFormatter.getLocale(),
								selector: "date",
								datePattern: dataFormat
							});
						} else {
							label = dateLocale.format(date, {
								locale: ecm.model.desktop.valueFormatter.getLocale(),
								selector: "date",
								datePattern: dataFormat
							});
						}
					} else if (dataType == "xs:decimal") {
						if (lang.isString(value)) {
							value = string.trim(value);
							if (value == "") {
								continue;
							}
							// Internally the "." decimal point should be used.
							if (localizedDecimal) {
								value = value.replace(this._decimalPoint, ".");
							}
						}
						// Display the label with the localized decimal point.
						if (localizedDecimal) {
							label = ("" + label).replace(".", this._decimalPoint);
						}
					} else if (dataType == "xs:double" || dataType == "xs:score") {
						label = value.toString();
						// Display the label with the localized decimal point.
						if (localizedDecimal) {
							label = label.replace(".", this._decimalPoint);
						}
					} else {
						label = value.toString();
					}
					
					if (!this.allowDuplicateValues) {
						if (valueAdded[value]) {
							continue;
						} else {
							valueAdded[value] = true;
						}
					}
					
					this._labelValues.push({
						label: label,
						value: value
					});
				}
			}
		},

		/**
		 * Returns the label string for the input values.
		 * 
		 * @return The full label string. When multiple values are entered, the label for each entered value is appended
		 *         to the label string. The <code>_separator</code> character is used to separate multiple labels in
		 *         the label string.
		 */
		getLabel: function() {
			var label = "";
			for (var i = 0; i < this._labelValues.length; i++) {
				var labelValue = this._labelValues[i];
				if (i > 0) {
					label += this._separator + " ";
				}
				label += labelValue.label;
			}
			return label;
		},

		/**
		 * Returns the value.
		 * 
		 * @return An array of the input values.
		 */
		getValue: function() {
			var valueArray = [];
			for (var i = 0; i < this._labelValues.length; i++) {
				valueArray.push(this._labelValues[i].value);
			}
			return valueArray;
		},

		/**
		 * @private Loads the values grid.
		 */
		_loadValuesGrid: function() {
			var itemsArray = [];
			for (var i = 0; i < this._labelValues.length; i++) {
				itemsArray.push({
					label: this._labelValues[i].label,
					value: this._labelValues[i].value
				});
			}
			var data = {
				items: itemsArray
			};
			if (!this.allowDuplicateValues) {
				if (this._args.dataType == "xs:timestamp") {
					data.identifier = "label"; // calculation of value (ISO timestamp) on mid-tier is different from the calculation on the client.  Using label to determine uniqueness.
				} else {
					data.identifier = "value";
				}
			}
			var store = new ItemFileWriteStore({
				data: data
			});
			if (!this.hasSorting) {
				this._valuesGridContainer.style.right = 0;
				this._moveUpDownButtonContainer.style.display = "none";
			}
			if (this._valuesGrid == null) {
				var structure = [
					{
						field: "label",
						name: ecm.messages.values_label,
						width: "100%",
						formatter: function(value) {
							return value.replace(/\s/g, "&nbsp;");
						}
					}
				];
				this._valuesGrid = new DataGrid({
					canSort: function() {
						return false;
					},
					textDir: has("text-direction"),
					store: store,
					structure: structure
				});
				this._valuesGridContainer.appendChild(this._valuesGrid.domNode);
				this._valuesGrid.startup();

				this.connect(this._valuesGrid, "onKeyDown",function(evt){
					if (evt.keyCode == keys.DOWN_ARROW || evt.keyCode == keys.UP_ARROW) { // Enter
						var startIndex = this._valuesGrid.selection.rangeStartIndex;
						var endIndex = evt.keyCode == keys.UP_ARROW ? this._valuesGrid.selection.selectedIndex -1 : this._valuesGrid.selection.selectedIndex + 1;
						this._valuesGrid.selection.deselect(this._valuesGrid.selection.selectedIndex);
						this._valuesGrid.selection.deselectAll();
						if(endIndex >= this._valuesGrid.rowCount)
							endIndex = this._valuesGrid.rowCount-1;
						if(endIndex < 0)
							endIndex = 0;
						this._valuesGrid.selection.select(endIndex);
						if(evt.shiftKey){
							this._valuesGrid.selection.selectRange(startIndex, endIndex);
							this._valuesGrid.selection.addToSelection(endIndex);
						}
						else
							this._valuesGrid.selection.rangeStartIndex = endIndex;
					}
				});
				
				this.connect(this._valuesGrid.selection, "onChanged", function() {
					var selected = this._valuesGrid.selection.getSelected();
					var selectedLength = selected.length;
					if (selectedLength == 1 && !selected[0]) { // 1st value can sometimes be null
						selectedLength = 0;
					}
					var disabled = this._editable == false || selectedLength == 0;
					this._removeButton.set('disabled', disabled);

					var disabled = this._editable == false || selectedLength == 0 || !this._hasRowsToMoveUp(this._valuesGrid);
					this._upButton.set('disabled', disabled);
					disabled = this._editable == false || selectedLength == 0 || !this._hasRowsToMoveDown(this._valuesGrid);
					this._downButton.set('disabled', disabled);
				});
			} else {
				this._valuesGrid.selection.clear();
				this._valuesGrid.setStore(store);
			}
		},

		/**
		 * Called when showing the widget. Loads the values grid.
		 */
		onShow: function() {
			this._clearTextInput();
			this._loadValuesGrid();
			// Select the first row
			if (this._valuesGrid.rowCount > 0) {
				this._valuesGrid.selection.select(0);
			} else {
				this._removeButton.set('disabled', true);
				if (this.hasSorting) { // if no data in values grid, disable up/down buttons
					this._upButton.set('disabled', true);
					this._downButton.set('disabled', true);
				}
			}
		},

		/**
		 * @private Clears the value on the _field widget.
		 */
		_clearTextInput: function() {
			if (this._field.isInstanceOf && (this._field.isInstanceOf(ecm.widget.DatePicker) || this._field.isInstanceOf(ecm.widget.TimePicker))) {
				this._field.set('displayedValue', '');
			} else {
				this._field.set('value', '');
			}
			// When the input value is cleared, also clear the custom validation error.
			this._field.setCustomValidationError(null);
		},

		/**
		 * @private Called when the user clicks the remove button.
		 */
		_onClickRemove: function() {
			if (this._valuesGrid != null) {
				var firstItemSelected = this._valuesGrid.selection.getFirstSelected();
				var firstSelectedIndex = this._valuesGrid.getItemIndex(firstItemSelected);

				this._valuesGrid.removeSelectedRows();
				this._valuesGrid.store.save(); // when use identifier & then add, remove, & add, this save fixes assert failure on add
				
				// After the remove, when duplicates are not allowed, check if the input value is a duplicate of a value in the list.
				// If not, and the duplicate error message is set, then clear the duplicate error message.
				if (!this.allowDuplicateValues && this._findDuplicateListItemForInput() == null && this._field.customErrorMessage == ecm.messages.duplicate_value_error) {
					this._field.setCustomValidationError(null);
				}

				// Select the row "above" the first selected row
				var rowToSelect = firstSelectedIndex > 0 ? firstSelectedIndex - 1 : firstSelectedIndex;
				if (this._valuesGrid.rowCount > rowToSelect) {
					this._valuesGrid.selection.select(rowToSelect);
				} else if (this._valuesGrid.rowCount > 0) {
					this._valuesGrid.selection.select(this._valuesGrid.rowCount); // select the last row 
				}
				var _this = this;
				setTimeout(function() { // it appears to take a while for the selection to catch up to what just happened so putting it on a timer
					_this._valuesGrid.selection.onChanged();
				}, 100);
			}
		},

		/**
		 * @private Called when the user clicks the up button.
		 */
		_onClickUp: function() {
			this._moveUpSelectedRows(this._valuesGrid);
		},

		/**
		 * @private Called when the user clicks the down button.
		 */
		_onClickDown: function() {
			this._moveDownSelectedRows(this._valuesGrid);
		},

		/**
		 * @private Returns the duplicate list item for the input value,
		 *          if the input value is already in the list. 
		 */
		_findDuplicateListItemForInput: function() {
			var duplicateValue;

			var inputItem = this._getItemFromTextInputValue();
			if (inputItem) {
				duplicateValue = this._valuesGrid.store._itemsByIdentity[inputItem.value];
			}

			return duplicateValue;
		},
		
		/**
		 * @private Called when the user clicks the add button.
		 */
		_onClickAdd: function() {
			// If duplicate values are not allowed, and the duplicate error message is set, then clear it
			// so that the duplicate checking below will be reapplied if there are not other problems with the value.
			if (!this.allowDuplicateValues && this._field.customErrorMessage == ecm.messages.duplicate_value_error) {
				this._field.setCustomValidationError(null);
			}
			
			if (this._field.isValid && !this._field.isValid(true)) {
				return;
			}
			
			// If duplicate values are not allowed, check that the input value is not a duplicate. 
			if (!this.allowDuplicateValues) {
				// Check for the value in the list.
				var listItem = this._findDuplicateListItemForInput();
				if (listItem) {
					// Scroll the list value into view and select it.
					var rowIndex = this._valuesGrid.getItemIndex(listItem);
					if (rowIndex >= 0) {
						var rowNode = this._valuesGrid.getRowNode(rowIndex);
						if (rowNode) {
							win.scrollIntoView(rowNode);
							this._valuesGrid.selection.select(rowIndex);
						}
					}

					// Set the duplicate error message in the input field, set the focus to the input field,
					// and select the input field value. This allows the user to immediately replace the 
					// entire value by typing in a different value, or they can modify the duplicate value.
					this._field.setCustomValidationError(ecm.messages.duplicate_value_error);
					this._field.focus();
					this._field.textbox.select();
					return;
				}
			}
			
			var isAdded = this._addTextInputValue();
			this._clearTextInput();
			this._field.focus();
			if (isAdded) {
				this._valuesGrid.selection.select(this._valuesGrid.rowCount); // select just the last row (the row the user just added)

				var _this = this;
				setTimeout(function() { // it appears to take a while for the selection to catch up to what just happened so putting it on a timer
					_this._valuesGrid.selection.onChanged();

					var rowNode = _this._valuesGrid.getRowNode(_this._valuesGrid.rowCount - 1);
					if (rowNode) {
						win.scrollIntoView(rowNode);
					}
				}, 100);
			}
		},

		/**
		 * @private Normalizes the decimal double value.
		 */
		_normalizeDecimalDouble: function(value) {
			var val = value;
			if (val.indexOf("e") == -1) { // no exponent
				if (val.indexOf(this._decimalPoint) > -1) { // if has decimal, remove extra 0s after the decimal
					while (val.length > 0 && val.substring(val.length - 1) == '0') {
						val = val.substring(0, val.length - 1);
					}
				}
				if (val.length == 0 && this._args.repositoryType == "od" && this._args.dataType == "xs:decimal") // if no value is entered for decimal in OD, do nothing
					return val;
				if (val.indexOf(this._decimalPoint) == -1) { // if no decimal, add ".0" 
					val += this._decimalPoint + "0";
				}
				if (val.substring(val.length - 1) == '.') { // if last character is a ., add "0"
					val += "0";
				}
			}
			return val;
		},

		/**
		 * @private Returns a value list item object (label and id) from the current value of the input field,
		 *          suitable for adding to the value list.
		 */
		_getItemFromTextInputValue: function() {
			var item = null;
			var label = this._field.get("displayedValue");
			var value = this._field.getValue();

			if (this._args.dataType == "xs:decimal" || this._args.dataType == "xs:double" || this._args.dataType == "xs:score") {
				var localizedDecimal = (this._decimalPoint != ".");
				if (localizedDecimal) {
					label = label.replace(".", this._decimalPoint);
				}
				if (!this.allowDuplicateValues) {
					label = this._normalizeDecimalDouble(label);
					if (localizedDecimal && this._args.dataType == "xs:decimal") {
						value = label.replace(this._decimalPoint, ".");
					}
				}
			}
			if (label && typeof value != "undefined" && value !== null && (!lang.isString(value) || string.trim(value).length)) {
				if (lang.isString(value) && this.trimStrings) {
					value = string.trim(value);
				}
				if (lang.isString(label) && this.trimStrings) {
					label = string.trim(label);
				}
				item = { 
					label: label, 
					value: value
				};				
			}
			return item;
		},
		
		/**
		 * @private Adds the _field value to the list.
		 */
		_addTextInputValue: function() {
			return this._add(this._getItemFromTextInputValue());
		},

		/**
		 * @private Adds the label / value to the _valuesGrid.
		 */
		_add: function(item) {
			var isAdded = false;
			if (item) {
				try {
					this._valuesGrid.store.newItem(item);
					isAdded = true;
				} catch (e) {
					// ignore error, problem values will be dropped
				}
			}
			return isAdded;
		},

		/**
		 * Resizes the widget.
		 * 
		 * @param changeSize
		 *            The changed size.
		 */
		resize: function(changeSize) {
			if (this._valuesGrid) {
				var domNodeMarginBox = domGeom.getMarginBox(this._valuesGridContainer);
				this._valuesGrid.resize({
					h: domNodeMarginBox.h,
					w: domNodeMarginBox.w
				});
			}
		},

		/**
		 * Called by the <code>DropDownInput</code> widget when the user clicks the <strong>OK</strong> button. Gets
		 * the data in the value grid.
		 */
		onSave: function() {
			this._valuesGrid.store.save();
			this._labelValues = this.getData(this._valuesGrid);
		},

		/**
		 * Clears the existing grid and adds each label in the array to the grid. If any label is invalid, then this
		 * method returns the error message.
		 * 
		 * @param labelArray
		 *            An array of labels.
		 * @return If a label is invalid, the error message is returned in the field named <code>error</code> of a new
		 *         object. An empty object is returned if all labels were valid.
		 */
		setLabelArray: function(labelArray) {
			if (!this._valuesGrid) {
				this._loadValuesGrid();
			}
			if (labelArray) {
				this._valuesGrid.allItemsSelected = true;
				this._valuesGrid.removeSelectedRows();
				this._valuesGrid.store.save(); // when use identifier & then add, remove, & add, this save fixes assert failure on add
				this._valuesGrid.allItemsSelected = false;
				
				for (var i = 0; i < labelArray.length; i++) {
					var label = this.trimStrings ? string.trim(labelArray[i]) : labelArray[i];
					this._field.set('displayedValue', label);
					if (this._field.isValid && !this._field.isValid(true)) {
						return {
							error: this._field.getErrorMessage()
						};
					}
					this._addTextInputValue();
				}

				this.onSave();
				return {};
			}
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/string",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Tooltip",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"../Messages",
	"../LoggerMixin",
	"../model/AttributeDefinition",
	"./HoverHelp",
	"./PropertyEditors",
	"./TitlePane",
	"./ValidationTextBox",
	"dojo/text!./templates/CustomMetadataPane.html"
], // 
function(declare, //
lang, //
domClass, //
domConstruct, //
domGeom, //
domStyle, //
aspect, //
string, //
win, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Tooltip, //
Button, //
CheckBox, //
BorderContainer, //
ContentPane, //
Messages, //
LoggerMixin, //
AttributeDefinition, //
HoverHelp, //
PropertyEditors, //
TitlePane, //
ValidationTextBox, //
template) {

	/**
	 * @name ecm.widget.CustomMetadataPane
	 * @class Provides a widget that is used to view and edit the attributes of custom metadata on Box foldes and documents.
	 * 
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.CustomMetadataPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.CustomMetadataPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		
		templateMetadata: null,
		isReadOnly: false,
		dirty: false,

		_messages: ecm.messages,
		_factory: null,
		_metadataAttributes: null,
		
		_maxNameLength: 256,

		postCreate: function() {
			this.inherited(arguments);
			this._propertyEditors = new PropertyEditors();
			this._metadataAttributes = {};
			this._titlePane.set("title", this._messages.properties_box_custom_properties);
			this.renderData();
		},
		
		startup: function(){
			this.inherited(arguments);
			setTimeout(lang.hitch(this, function() {
				this.resize();
			}, 300));
		},

		/**
		 * @private Cleans up the widget.
		 */
		_cleanUp: function() {
			this._propertyEditors.destroyFields();
			if (this._hoverHelpArray) {
				for ( var i in this._hoverHelpArray) {
					this._hoverHelpArray[i].destroy();
				}
				this._hoverHelpArray = null;
			}
		},

		/**
		 * Renders the data.
		 */
		renderData: function() {
			this._cleanUp();

			this._table = domConstruct.create("table", {});
			this._tableContainer.set("content", this._table);
			this._tbody = domConstruct.create("tbody", {
				'class': 'customMetadataTbody'
			}, this._table);

			this._rows = [];
			if (this.templateMetadata.attributeDefinitions){
				for (var rowIndex = 0; rowIndex < this.templateMetadata.attributeDefinitions.length; rowIndex++) {
					var attributeDefinition = this.templateMetadata.attributeDefinitions[rowIndex];
					this._metadataAttributes[attributeDefinition.label] = false;
					var dataRowInfo = this._createDataRow(attributeDefinition);
					this._rows.push(dataRowInfo.fields);
					this._tbody.appendChild(dataRowInfo.tr);
				}
			}
			domStyle.set(this._buttonTable, "display", this.isReadOnly ? "none" : "");
			this._addButton.set('disabled', this.isReadOnly);
		},

		/**
		 * @private Creates the hover help.
		 */
		_createHoverHelp: function(promptText) {
			var hoverHelp = new HoverHelp({
				message: promptText
			});
			hoverHelp.startup();
			if (!this._hoverHelpArray) {
				this._hoverHelpArray = [];
			}
			this._hoverHelpArray.push(hoverHelp);
			return hoverHelp;
		},

		/**
		 * @private Boolean indicating if can enable the new button.
		 */
		_canEnableNewButton: function() {
			var canEnable = true;
			if (this.isReadOnly) {
				canEnable = false;
			}
			else {
				for ( var i in this._rows) {
					if (this._rows[i][1] instanceof ecm.widget.ValidationTextBox) {
						value = this._rows[i][1].getValue();
						if (!value){
							canEnable = false;
							break;
						}
					}
				}
			}
			return canEnable;
		},

		/**
		 * @private Boolean indicating if can enable the delete button.
		 */
		_canEnableDeleteButton: function() {
			if (this.isReadOnly) {
				return false;
			}
			var numChecked = 0;
			for ( var i in this._rows) {
				if (this._rows[i][0].get('checked')) {
					numChecked++;
				}
			}
			if (numChecked > 0) {
				return true;
			} else { // none checked
				return false;
			}
		},

		/**
		 * Creates the data row.
		 */
		_createDataRow: function(attributeDefinition) {
			var tr = domConstruct.create("tr", {});
			var fields = [];

			if (!this.isReadOnly) {
				var td = domConstruct.create("td", {}, tr);
				var id = this.id + "_" + new Date().getTime();
				var checkbox = new CheckBox({
					name: id,
					id: id
				});
				this.connect(checkbox.domNode, "onclick", lang.hitch(this, function(evt) {
					this._deleteButton.set('disabled', !this._canEnableDeleteButton());
				}));
				fields.push(checkbox);
				td.appendChild(checkbox.domNode);

				var checkboxLabel = domConstruct.create("label", {
					'for': id,
					innerHTML: "Checkbox for row."
				}, td);
				domStyle.set(checkboxLabel, "display", "none");
			}
			
			var widgetId = this.id + "_" + this.templateMetadata.name + "_" + attributeDefinition.id + new Date().getTime();
			
			var tdLabel = domConstruct.create("td", {
				'class': "propertyRowLabel, ecmCustomMetadataName"
			}, tr);
			
			if (attributeDefinition.isNew){
				var newAttributeOnKey = lang.hitch(this, function(){
					this._addButton.set('disabled', !this._canEnableNewButton());
					this._onKey();
				});
				var editor = new ValidationTextBox({
					required: true,
					trim: true,
					maxLength: this._maxNameLength,
				});
				tdLabel.appendChild(editor.domNode);
				this.connect(editor, "onKeyPress", newAttributeOnKey);
				this.connect(editor, "onKeyUp", newAttributeOnKey);
				this.connect(editor, "onKeyDown", newAttributeOnKey);
				this.connect(editor.domNode, "onpaste", lang.hitch(this, function(evt) {
					// Allow the paste to finish before firing the change notification.
					setTimeout(lang.hitch(this, function() {
						newAttributeOnKey(evt);
					}), 0);
				}));
				fields.push(editor);
			}
			else {
				var label = domConstruct.create("label", {
					'for': widgetId
				}, tdLabel);
				// Not using innerHTML, due to content = "<test>aa" causes issues with innerHTML
				var labelData = string.substitute(this._messages.append_colon, [
					attributeDefinition.name
				]);
				label.appendChild(document.createTextNode(labelData));
				if (this.isReadOnly) {
					domClass.add(label, "labelReadOnly");
				}
				fields.push(label);
			}

			var value = attributeDefinition.defaultValue;
			var tdValue = domConstruct.create("td", {
				'class': "propertyRowValue, ecmCustomMetadataValue"
			}, tr);

			var kwArgs = this._getAttributeDefinitionData(attributeDefinition);
			if (this.isReadOnly) {
				kwArgs.readOnly = true;
			}
			kwArgs.values = value;
			kwArgs.name = this.templateMetadata.id + "\/" + attributeDefinition.id;
			kwArgs.id = widgetId;
			kwArgs.attributeDefinition = attributeDefinition;

			this._factory.createSinglePropertyEditor(kwArgs, lang.hitch(this, function(field) {
				this._propertyEditors.appendField(field);

				var hoverHelp = this._createHoverHelp(field.getPromptText());
				tdValue.appendChild(hoverHelp.domNode);
				domClass.add(hoverHelp.domNode, "dijitHidden");
				if (field.setHoverHelp) {
					field.setHoverHelp(hoverHelp);
				}

				tdValue.appendChild(field.domNode);
				this.connect(field, "onKeyPress", "_onKey");
				this.connect(field, "onKeyUp", "_onKey");
				this.connect(field, "onKeyDown", "_onKey");
				this.connect(field.domNode, "onpaste", lang.hitch(this, function(evt) {
					// Allow the paste to finish before firing the change notification.
					setTimeout(lang.hitch(this, function() {
						this.onChange(evt);
					}), 0);
				}));
				fields.push(field);
			}));

			return {
				tr: tr,
				fields: fields
			};
		},

		/**
		 * @private
		 */
		_onKey: function() {
			this.onChange();
		},

		/**
		 * @private Returns the attribute definition values in an object.
		 */
		_getAttributeDefinitionData: function(attributeDefinition) {
			return {
				dataType: attributeDefinition.dataType,
				dataFormat: attributeDefinition.format,
				minValue: attributeDefinition.minValue,
				maxValue: attributeDefinition.maxValue,
				minValueTimeZoneOffset: attributeDefinition.minValueTimeZoneOffset,
				maxValueTimeZoneOffset: attributeDefinition.maxValueTimeZoneOffset,
				maxLength: attributeDefinition.maxLength,
				readOnly: attributeDefinition.readOnly,
				cardinality: attributeDefinition.cardinality,
				uniqueValues: attributeDefinition.uniqueValues,
				repositoryType: attributeDefinition.repositoryType,
				requiredClass: attributeDefinition.requiredClass,
				choiceList: attributeDefinition.getChoiceList(),
				choiceListNested: attributeDefinition.isChoiceListNested(),
				required: attributeDefinition.required,
				label: attributeDefinition.name,
				valueOptions: attributeDefinition.getAllowedValuesSelectOptions(),
				propertyEditor: attributeDefinition.propertyEditor
			};
		},

		/**
		 * @private Called when the new button is clicked.
		 * @param evt
		 *            The event.
		 */
		_onClickNew: function(evt) {
			var newAttDefinition = this.templateMetadata.addCustomAttributeDefinition();
			var dataRowInfo = this._createDataRow(newAttDefinition);
			this._rows = [
				dataRowInfo.fields
			].concat(this._rows); // Add the new row to the top of the array
			this._tbody.insertBefore(dataRowInfo.tr, this._tbody.firstChild);
			var nameTextBox = dataRowInfo.fields[1];
			win.scrollIntoView(nameTextBox.domNode);
			nameTextBox.focus();
			this._deleteButton.set('disabled', !this._canEnableDeleteButton());
			this._addButton.set('disabled', !this._canEnableNewButton());
			this.resize();
		},

		/**
		 * @private Called when the delete button is clicked.
		 */
		_onClickDelete: function(tr) {
			var newRows = [];
			for (var i = (this._rows.length - 1); i >= 0; i--) {
				var fields = this._rows[i];

				var dataTr = this._table.rows[i];
				if (dataTr && fields[0].get('checked')) { // 1st field is the selection checkbox
					var parentNode = dataTr.parentNode;
					parentNode.removeChild(dataTr);
					if (this._metadataAttributes[fields[2].label] != null){
						this._metadataAttributes[fields[2].label] = true;
					}

					for (var j = 0; j < fields.length; j++) {
						this._propertyEditors.destroyField(fields[j]);
					}
					fields = null;
				} else {
					newRows.push(fields);
				}
			}
			this._rows = newRows.reverse();
			this._deleteButton.set('disabled', !this._canEnableDeleteButton());
			this._addButton.set('disabled', !this._canEnableNewButton());
			this.resize();
			this.onChange();
		},

		/**
		 * Resizes the widget.
		 */
		resize: function() {
			containerCB = domGeom.getContentBox(this.containerNode);
			var tableMB = domGeom.getMarginBox(this._table);
			var width = containerCB.w -7;
			var height = tableMB.h + 10;
			if (width > 0){
				this._borderContainer.resize({
					h: height,
					w: width
				});
			}
		},
		
		/**
		 * Validates the data.
		 * 
		 * @return A field widget that contains an invalid value. If all fields contain valid values, <code>null</code>
		 *         is returned.
		 */
		validate: function() {
			var invalidField = null;
			
			if (!this.isReadOnly){

				// Verify each new name field has a value.
				for (var i = 0; i < this._rows.length; i++) {
					var fields = this._rows[i];
					var nameField = fields[1];;
					if (nameField instanceof ValidationTextBox){
						var attributeName = nameField.get("value");
						if (attributeName == null || attributeName.length == 0){
							invalidField = fields;
						}
						else {
							// Check that the name is not a duplicate. New fields should be at the beginning of the array,
							//
							for (var j =0; j < this._rows.length; j++){
								
								// Skip over this row.
								if (j != i){
									var verifyFields = this._rows[j];
									var verifyNameField = verifyFields[1];
									var verifyValueField = verifyFields[2];
									var verifyAttributeName;
									if (verifyNameField instanceof ValidationTextBox){
										verifyAttributeName = verifyNameField.get("value");
									}
									else {
										verifyAttributeName = verifyValueField.get("label");
									}
									if (verifyAttributeName == attributeName){
										invalidField = fields;
										nameField.setCustomValidationError(this._messages.properties_box_metadata_name_in_use);
										break;
									}
								}
							}
						}
					}
					if (invalidField != null){
						break;
					}
				}
			}

			return invalidField;
		},

		/**
		 * Returns an array containing objects with values.
		 * 
		*/
		getValues: function() {
			var values = [];
			var deletedValues = [];
			var obj = {
				name: this.templateMetadata.name,
				dirty: this.dirty,
				isNew: false,
				isDelete: false,
				criterias: values,
				deletedValues: deletedValues
			};

			for (var i = 0; i < this._rows.length; i++) {
				var fields = this._rows[i];
				
				nameFieldIndex = 0
				valueFieldIndex = 1
				if (fields[0] instanceof CheckBox){
					nameFieldIndex++;
					valueFieldIndex++;
				}
				
				// Ignore the checkbox.
				var nameField = fields[nameFieldIndex];
				var valueField = fields[valueFieldIndex];

				var label = "";
				if (nameField instanceof ValidationTextBox){
					label = nameField.get("value");
				}
				else {
					label = valueField.get("label");
				}
				
				var value = valueField.get("value");
				if (value === null) {
					value = "";
				}
				
				rowProperties = {};
				rowProperties["value"] = value;
				rowProperties["label"] = label;
				this._metadataAttributes[label] = false;
				values.push(rowProperties);
			}
			
			// Now add deleted attributes.
			var keys = Object.keys(this._metadataAttributes);
			for (keyIndex in keys){
				var key = keys[keyIndex];
				if (this._metadataAttributes[key]){
					deletedValues.push(key)
				}
			}
			
			return obj;
		},

		/**
		 * This event is fired when the field is changed.
		 */
		onChange: function() {
			this.dirty = true;
		},

		/**
		 * Places focus in the provided name property field widget. This is typically used
		 * to set the focus on a field that has an invalid value.
		 * 
		 * @param field
		 *            An array controls for a custom metadata field.
		 */
		setFieldFocus: function(field) {
			if (field) {
				setTimeout(function() {
					var nameTextBox = field[1];
					// Scroll into view before setting focus so that tooltips are not dismissed by the scroll.
					win.scrollIntoView(nameTextBox.domNode);
					nameTextBox.focus();
				}, 300);
			}
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this._cleanUp();
			this.templateMetadata = null;
			delete this._factory;
			this.inherited(arguments);
		}
	});
});

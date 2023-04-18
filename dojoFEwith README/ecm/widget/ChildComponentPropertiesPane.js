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
	"dojo/text!./templates/ChildComponentPropertiesPane.html"
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
template) {

	/**
	 * @name ecm.widget.ChildComponentPropertiesPane
	 * @class Provides a widget that is used to view and edit the attributes of a child component of an IBM Content
	 *        Manager item type.
	 *        <p>
	 *        A child item type can have unique attributes. For example, IBM Content Collector uses child components to
	 *        store email instance information and references to attributes of the distinct email item type.
	 *        </p>
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.ChildComponentPropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.ChildComponentPropertiesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.ChildComponentDefinition}.
		 */
		childComponentDefinition: null,
		/**
		 * Instance of {@link ecm.model.ChildComponent}.
		 */
		childComponentItem: null,
		/**
		 * Boolean indicating read only.
		 */
		readOnly: false,

		/**
		 * Boolean indicating used in multi-item edit.
		 */
		multiSelectEdit: false,

		/**
		 * Boolean indicating the child component has been changed when in multi edit mode.
		 */
		multiEditChanged: true,

		/**
		 * Boolean indicating the pane has been rendered for multi editing.
		 * 
		 * @private
		 * @since 2.0.3.2
		 */
		_renderedForMultiEdit: false,

		_messages: ecm.messages,
		_factory: null,
		_properties: null,
		_cleared: false,
		_appending: false,

		postCreate: function() {
			this.inherited(arguments);
			this._propertyEditors = new PropertyEditors();
			if (this.childComponentDefinition) {
				this._titlePane.set("title", this._getTitle());
				this._titlePane.setHoverHelp(this._titlePaneHoverHelp);
				this.renderData();
			}
		},

		/**
		 * @private Returns the title span.
		 */
		_getTitle: function() {
			var span = domConstruct.create("span");
			if (this.childComponentDefinition.minCardinality > 0) {
				domConstruct.create("span", {
					'class': 'required',
					innerHTML: '*'
				}, span);
			}
			span.appendChild(document.createTextNode(this.childComponentDefinition.name));

			var hoverMessage = ecm.messages.properties_childComponent_noCardinality_tooltip;
			if (this.childComponentDefinition.minCardinality > 0) {
				if (this.childComponentDefinition.maxCardinality > 0) {
					hoverMessage = string.substitute(ecm.messages.properties_childComponent_minMaxCardinality_tooltip, [
						this.childComponentDefinition.minCardinality,
						this.childComponentDefinition.maxCardinality
					]);
				} else {
					hoverMessage = string.substitute(ecm.messages.properties_childComponent_minCardinalityOnly_tooltip, [
						this.childComponentDefinition.minCardinality
					]);
				}
			} else { // no min cardinality
				if (this.childComponentDefinition.maxCardinality > 0) {
					hoverMessage = string.substitute(ecm.messages.properties_childComponent_maxCardinalityOnly_tooltip, [
						this.childComponentDefinition.maxCardinality
					]);
				}
			}
			var hoverHelp = new HoverHelp({
				message: hoverMessage
			});
			hoverHelp.startup();
			this._titlePaneHoverHelp = hoverHelp;
			span.appendChild(hoverHelp.domNode);
			return span;
		},

		/**
		 * Sets child component definition, the title on the title pane, and the hover help.
		 * 
		 * @param childComponentDefinition
		 *            Instance of {@link ecm.model.ChildComponentDefinition}.
		 */
		setChildCompDefinition: function(childComponentDefinition) {
			this.childComponentDefinition = childComponentDefinition;
			this._titlePane.set("title", this._getTitle());
			this._titlePane.setHoverHelp(this._titlePaneHoverHelp);
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
			this._thead = domConstruct.create("thead", {}, this._table);
			var headerInfo = this._createHeader();
			this._thead.appendChild(headerInfo.tr);
			this._tbody = domConstruct.create("tbody", {
				'class': 'childComponentTbody'
			}, this._table);

			this._rows = [];
			var numRows = 1;
			if (headerInfo.numRows) {
				numRows = headerInfo.numRows;
			} else if (this.childComponentDefinition.minCardinality > 0) {
				numRows = this.childComponentDefinition.minCardinality;
			}
			for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
				var dataRowInfo = this._createDataRow(rowIndex);
				this._rows.push(dataRowInfo.fields);
				this._tbody.appendChild(dataRowInfo.tr);
			}
			domStyle.set(this._buttonTable, "display", this.readOnly ? "none" : "");
			this._addButton.set('disabled', !this._canEnableNewButton());

			if (this.multiSelectEdit == true) {
				this.multiEditChanged = false;
				setTimeout(lang.hitch(this, function() {
					// Set some style issues in the multi select edit dialog.
					domClass.remove(this._addButton.domNode, "dijitTitlePane-child");
					domClass.remove(this._addButton.domNode, "dijitTitlePane-dijitButton");

					domClass.remove(this._deleteButton.domNode, "dijitTitlePane-child");
					domClass.remove(this._deleteButton.domNode, "dijitTitlePane-dijitButton");

					domClass.remove(this._borderContainer.domNode, "dijitTitlePane-child");
					domClass.remove(this._borderContainer.domNode, "dijitTitlePane-dijitBorderContainerNoGutter");
					domClass.remove(this._borderContainer.domNode, "dijitTitlePane-onlyChild");

					domStyle.set(this._clearButton.domNode, "visibility", "visible");
					domClass.remove(this._clearButton.domNode, "dijitTitlePane-child");
					domClass.remove(this._clearButton.domNode, "dijitTitlePane-dijitButton");

					// Disable the Clear button if min cardinality isnt 0.
					if (this.childComponentDefinition.minCardinality != 0) {
						this._clearButton.set('disabled', true);
					}

					domStyle.set(this._appendCheckbox.domNode, "visibility", "visible");
					domClass.remove(this._appendCheckbox.domNode, "dijitTitlePane-child");
					domClass.remove(this._appendCheckbox.domNode, "dijitTitlePane-dijitButton");

					domStyle.set(this._appendLabel, "visibility", "visible");

					// These settings get overridden when put into a style sheet.
					domStyle.set(this.containerNode, "padding", "0px");

					domStyle.set(this._buttonTable, "paddingTop", "9px");
					domStyle.set(this._buttonTable, "paddingLeft", "9px");
					domStyle.set(this._buttonTable, "paddingRight", "9px");
					domStyle.set(this._buttonTable, "paddingBottom", "0px");

					domStyle.set(this._tableContainer.domNode, "marginTop", "0px");
					domStyle.set(this._tableContainer.domNode, "marginLeft", "9px");
					domStyle.set(this._tableContainer.domNode, "marginRight", "9px");
					domStyle.set(this._tableContainer.domNode, "marginBottom", "9px");
					domStyle.set(this._tableContainer.domNode, "width", "100%");

					domStyle.set(this._borderContainer.domNode, "width", "100%");

					this.resize();
					this._renderedForMultiEdit = true;
				}), 300);
			}
		},

		/**
		 * @private Creates the header.
		 */
		_createHeader: function() {
			var tr = domConstruct.create("tr", {});
			if (!this.readOnly) {
				domConstruct.create("th", {
					'class': 'checkbox'
				}, tr);
			}
			var numRows = 0;
			for ( var j in this.childComponentDefinition.attributeDefinitions) {
				// If available, use the child component instance's attribute definition since
				// in-progress EDS updates affect the child component instance, not the class
				var attributeDefinition = this.childComponentDefinition.attributeDefinitions[j];
				if (this.childComponentItem && this.childComponentItem.attributeDefinitionsById[attributeDefinition.id])
					attributeDefinition = this.childComponentItem.attributeDefinitionsById[attributeDefinition.id];
				if (!attributeDefinition.system && !attributeDefinition.hidden) {
					var th = domConstruct.create("th", {}, tr);
					if (attributeDefinition.required) {
						th.appendChild(domConstruct.create("span", {
							'class': 'required',
							innerHTML: '*'
						}));
					}
					th.appendChild(document.createTextNode(attributeDefinition.name));
					var kwArgs = this._getAttributeDefinitionData(attributeDefinition);
					kwArgs.minMaxValues = this._factory.getMinMax(attributeDefinition.minValue, attributeDefinition.maxValue, kwArgs.dataType, kwArgs.dataFormat);
					th.appendChild(this._createHoverHelp(this._factory.getPromptText(kwArgs)).domNode);
					if (j == 0) {
						if (this.childComponentItem) {
							numRows = (this.childComponentItem.getValues(attributeDefinition.id) || []).length;
						}
					}
				}
			}
			return {
				tr: tr,
				numRows: numRows
			};
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
			if (this.readOnly) {
				return false;
			}
			var maxCardinality = this.childComponentDefinition.maxCardinality;
			if (maxCardinality > 0) {
				if ((this._table.rows.length - 1) >= maxCardinality) {
					return false;
				}
			}
			return true;
		},

		/**
		 * @private Boolean indicating if can enable the delete button.
		 */
		_canEnableDeleteButton: function() {
			if (this.readOnly) {
				return false;
			}
			var numChecked = 0;
			for ( var i in this._rows) {
				if (this._rows[i][0].get('checked')) {
					numChecked++;
				}
			}
			if (numChecked > 0) {
				// now check for min cardinality 
				var minCardinality = this.childComponentDefinition.minCardinality;
				var numRows = this._rows.length;
				if (minCardinality > 0 && ((numRows - numChecked) < minCardinality) && this._appending == false) {
					return false;
				} else {
					return true;
				}
			} else { // none checked
				return false;
			}
		},

		/**
		 * Creates the data row.
		 */
		_createDataRow: function(rowIndex) {
			var tr = domConstruct.create("tr", {});
			var fields = [];

			if (!this.readOnly) {
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

			for ( var j in this.childComponentDefinition.attributeDefinitions) {
				var attributeDefinition = this.childComponentDefinition.attributeDefinitions[j];
				var defaultValue = attributeDefinition.defaultValue;
				// for EDS dependent attributes, a child component attribute might have it's own (temporary) attribute definition,   Use that if it exists.
				if (this.childComponentItem && this.childComponentItem.attributeDefinitionsById[attributeDefinition.id]) {
					attributeDefinition = this.childComponentItem.attributeDefinitionsById[attributeDefinition.id];
					defaultValue = (this.childComponentItem.attributes) ? this.childComponentItem.attributes[attributeDefinition.id] : attributeDefinition.defaultValue;
				}
				if (!attributeDefinition.system && !attributeDefinition.hidden) {
					var td = domConstruct.create("td", {}, tr);
					var widgetId = this.id + "_" + this.childComponentDefinition.name + "_" + attributeDefinition.id + new Date().getTime();

					var value = rowIndex != undefined && this.childComponentItem && this.childComponentItem.getValues(attributeDefinition.id) ? this.childComponentItem.getValues(attributeDefinition.id)[rowIndex] : defaultValue;

					var kwArgs = this._getAttributeDefinitionData(attributeDefinition);
					if (this.readOnly) {
						kwArgs.readOnly = true;
					}
					kwArgs.values = value;
					var tzOffsets = (this.childComponentItem && this.childComponentItem.attributeValueTimeZoneOffsets) ? this.childComponentItem.attributeValueTimeZoneOffsets[attributeDefinition.id] : null;
					kwArgs.valueTimeZoneOffset = rowIndex != undefined && tzOffsets instanceof Array && tzOffsets.length > rowIndex ? tzOffsets[rowIndex] : null;
					if (!kwArgs.valueTimeZoneOffset && value == attributeDefinition.defaultValue)
						kwArgs.valueTimeZoneOffset = attributeDefinition.valueTimeZoneOffset;
					//kwArgs.repository = this.childComponentItem && this.childComponentItem.repository ? this.childComponentItem.repository : this.repository;
					kwArgs.name = this.childComponentDefinition.id + "\/" + attributeDefinition.id;
					kwArgs.id = widgetId;
					kwArgs.attributeDefinition = attributeDefinition;
					kwArgs.childComponentDefinition = this.childComponentDefinition;
					if (attributeDefinition.formatDescription) {
						kwArgs.invalidMessage = lang.replace(this._messages.property_invalid_with_format, [
								attributeDefinition.formatDescription
							]);
					};
					this._factory.createSinglePropertyEditor(kwArgs, lang.hitch(this, function(field) {
						this._propertyEditors.appendField(field);

						var hoverHelp = this._createHoverHelp(field.getPromptText());
						td.appendChild(hoverHelp.domNode);
						domClass.add(hoverHelp.domNode, "dijitHidden");
						if (field.setHoverHelp) {
							field.setHoverHelp(hoverHelp);
						}

						td.appendChild(field.domNode);

						// Any changes to the handling below should also be applied for the multiSelectEdit case and to CommonPropertiesPane.js renderAttributes().						
						if (attributeDefinition.dataType == "xs:reference") {
							this.connect(field, "onClick", "onClickReferenceAttribute");
						} else {
							this.connect(field, "onKeyPress", "_onKey");
							this.connect(field, "onKeyUp", "_onKey");
							this.connect(field, "onKeyDown", "_onKey");
							this.connect(field.domNode, "onpaste", lang.hitch(this, function(evt) {
								// Allow the paste to finish before firing the change notification.
								setTimeout(lang.hitch(this, function() {
									this.onChange(evt);
								}), 0);
							}));
							if (attributeDefinition.dataType == "xs:date" || attributeDefinition.dataType == "xs:time" || attributeDefinition.dataType == "xs:timestamp") {
								this.connect(field, "onChange", "onChange"); // date picker
							} else if (attributeDefinition.dataType == "xs:group" || attributeDefinition.dataType == "xs:user") {
								this.connect(field, "onChange", "onChange"); // User-group picker should send out onChange for validation.
							} else if (attributeDefinition.getChoiceList() != null) {
								this.connect(field, "onChange", "onChange"); // Choice list fields should send out onChange for validation.
							} else if (attributeDefinition.cardinality == "LIST") {
								this.connect(field, "onChange", "onChange"); // Fields with value lists should send out onChange for validation.
							}

							// Fire an event before the onChange event when in multi edit mode and values change.
							if (this.multiSelectEdit) {
								this.own(aspect.before(this, "_onKey", lang.hitch(this, this._onMultiEditChange)));
								this.own(aspect.before(field.domNode, "onpaste", lang.hitch(this, this._onMultiEditChange)));

								if (attributeDefinition.dataType == "xs:date" || attributeDefinition.dataType == "xs:time" || attributeDefinition.dataType == "xs:timestamp") {
									this.own(aspect.before(field, "onChange", lang.hitch(this, this._onMultiEditChange)));
								} else if (attributeDefinition.dataType == "xs:group" || attributeDefinition.dataType == "xs:user") {
									this.own(aspect.before(field, "onChange", lang.hitch(this, this._onMultiEditChange))); // User-group picker should send out onChange for validation.
								} else if (attributeDefinition.getChoiceList() != null) {
									this.own(aspect.before(field, "onChange", lang.hitch(this, this._onMultiEditChange))); // Choice list fields should send out onChange for validation.
								} else if (attributeDefinition.cardinality == "LIST") {
									this.own(aspect.before(field, "onChange", lang.hitch(this, this._onMultiEditChange))); // Fields with value lists should send out onChange for validation.
								}
							}
						}
						fields.push(field);
					}));
				}
			}
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
			// If the components have been cleared, remove the text and enable the clear button
			if (this._cleared == true) {
				this._tbody.removeChild(this._tbody.firstChild);

				// Enable the clear button if min cardinality is 0.
				if (this.childComponentDefinition.minCardinality == 0) {
					this._clearButton.set('disabled', false);
				}
				this._appendCheckbox.set("disabled", false);
				this._cleared = false;
			}
			var dataRowInfo = this._createDataRow();
			this._rows = [
				dataRowInfo.fields
			].concat(this._rows); // Add the new row to the top of the array
			this._tbody.insertBefore(dataRowInfo.tr, this._tbody.firstChild);
			this._deleteButton.set('disabled', !this._canEnableDeleteButton());
			this._addButton.set('disabled', !this._canEnableNewButton());
			this.resize();
			this.onChange();
			this.onNew(this.childComponentDefinition.id);

			if (this._appending == true) {
				// See if this should cause a change to be fired.
				if (this._isMultiEditAddValid()) {
					this._onMultiEditChange();
				}
			}
		},

		/**
		 * Fired when the New button is clicked
		 * 
		 * @param: childComponentId String id of child component
		 */
		onNew: function(childComponentId) {
		},

		/**
		 * @private Called when the delete button is clicked.
		 */
		_onClickDelete: function(tr) {
			var newRows = [];
			for (var i = (this._rows.length - 1); i >= 0; i--) {
				var fields = this._rows[i];

				var dataTr = this._getDataRowAt(i + 1);
				if (dataTr && fields[0].get('checked')) { // 1st field is the selection checkbox
					var parentNode = dataTr.parentNode;
					parentNode.removeChild(dataTr);

					for (var j = 0; j < fields.length; j++) {
						this._propertyEditors.destroyField(fields[j]);
					}
					fields = null;
				} else {
					newRows.push(fields);
				}
			}
			this._rows = newRows.reverse();
			if (this._rows.length == 0) {
				this._appendCheckbox.set("disabled", true);
			}
			this._deleteButton.set('disabled', !this._canEnableDeleteButton());
			this._addButton.set('disabled', !this._canEnableNewButton());
			this.resize();
			this.onChange();
		},

		_onClickClear: function() {
			this.Clear();
		},

		Clear: function() {
			if (this._cleared == false) {
				for (var i = (this._rows.length - 1); i >= 0; i--) {
					var fields = this._rows[i];

					var dataTr = this._getDataRowAt(i + 1);
					var parentNode = dataTr.parentNode;
					parentNode.removeChild(dataTr);

					for (var j = 0; j < fields.length; j++) {
						this._propertyEditors.destroyField(fields[j]);
					}
					fields = null;
				}

				var tr = domConstruct.create("tr", {});
				var td = domConstruct.create("td", {}, tr);
				var td = domConstruct.create("td", {
					'class': 'ecmMultiSelectClearValueStyle ecmMultiSelectClearValueColor ecmMultiSelectClearValueAlign'
				}, tr);
				td.appendChild(document.createTextNode(ecm.messages.properties_value_empty));
				this._tbody.insertBefore(tr, this._tbody.firstChild);

				this._cleared = true;
				this._rows = [];
				this._clearButton.set('disabled', true);
				this._appendCheckbox.set("disabled", true);
				this._deleteButton.set('disabled', !this._canEnableDeleteButton());
				this._addButton.set('disabled', !this._canEnableNewButton());
				this.resize();
				this.onChange();
				this.onClear(this.childComponentDefinition.id);
			}
		},

		/**
		 * Fired when the Clear button is clicked
		 * 
		 * @param: childComponentId String ID of child component.
		 */
		onClear: function(childComponentId) {
		},

		/**
		 * @private
		 */
		_onClickAppend: function() {
			this._appending = this._appendCheckbox.checked;
			if (this._appending == true) {
				// See if this should cause a change to be fired.
				if (this._isMultiEditAddValid()) {
					this._onMultiEditChange();
				}
			}
			this._deleteButton.set('disabled', !this._canEnableDeleteButton());
			this.onAppendClicked(this.childComponentDefinition.id, this._appendCheckbox.checked);
		},

		/**
		 * Fired when the Append checkbox is clicked
		 * 
		 * @param: childComponentId String ID of child component.
		 * @param: checked Boolean indicating whether the append checkbox is checked.
		 * @since: 2.0.2
		 */
		onAppendClicked: function(childComponentId, checked) {
		},

		/**
		 * @private Returns the row at the specified input index.
		 */
		_getDataRowAt: function(rowIndex) {
			return this._table.rows[rowIndex];
		},

		/**
		 * Resizes the widget.
		 */
		resize: function() {
			// Set the borderContainer height to the table height so we never have a vertical scrollbar.  
			// If we have a horizontal scroll bar, then add 35 extra pixels to the height.
			var tableMB = domGeom.getMarginBox(this._table);
			if (tableMB.h != 0) {
				var contentPaneMB = domGeom.getMarginBox(this._tableContainer.domNode);
				var hasScroll = false;
				var h = tableMB.h + 25;
				if (tableMB.w > contentPaneMB.w) { // horizontal scrolling
					h += 20;
					hasScroll = true;
				}
				this._borderContainer.resize({
					h: h
				});

				// re-verify if we are scrolling horizontally
				if (!hasScroll) {
					tableMB = domGeom.getMarginBox(this._table);
					if (tableMB.w > domGeom.getMarginBox(this._tableContainer.domNode).w) {
						this._borderContainer.resize({
							h: tableMB.h + 35
						});
					}
				}
			}
		},

		/**
		 * @private Validate that min cardinality is ok.
		 */
		_validateMinCardinality: function() {
			var invalidField = null;
			if (this.childComponentDefinition.minCardinality > 0 && this._appending == false && this.multiEditChanged == true) {
				var numRowsFilledOut = 0;
				var notFilledOutField = null;
				for (var i = 0; i < this._rows.length; i++) {
					var fields = this._rows[i];
					for (var j = 1; j < fields.length; j++) { // ignore the selection checkbox
						var field = fields[j];
						var value = field.get("value");
						if (!value || value == "" || (field._isEmpty && field._isEmpty(value))) { // empty value
							if (j == 1 && !notFilledOutField) {
								notFilledOutField = field;
							}
						} else {
							numRowsFilledOut++;
							break;
						}
					}
				}
				if (numRowsFilledOut < this.childComponentDefinition.minCardinality) {
					invalidField = notFilledOutField;
				}
			}
			return invalidField;
		},

		/**
		 * Returns the first invalid field.
		 * 
		 * @return The first field widget that contains an invalid value. If all values are valid, <code>null</code>
		 *         is returned.
		 */
		getFirstInvalidField: function() {
			var invalidField = this._propertyEditors.getFirstInvalidField();
			// validate that min cardinality is ok
			if (!invalidField) {
				invalidField = this._validateMinCardinality();
			}
			return invalidField;
		},

		/**
		 * @return True if this field is valid, else if it is not valid false is returned.
		 * @since 2.0.3.8
		 */
		validateField: function(field) {
			var methodName = "validateField";
			var validField = true;
			this.logEntry(methodName);
			if (lang.isFunction(field.isValid)) {
				if (field.isValid()) {
					// The field is valid, remove it from the list of invalid fields.
					this._propertyEditors.removeFromInvalidFields(field);
				} else {
					this._propertyEditors.addToInvalidFields(field);
					validField = false;
				}
			}
			this.logDebug(methodName, "field: " + field.name + " is " + (validField ? "valid" : "invalid"));
			this.logExit(methodName);
			return validField;
		},

		/**
		 * Validates the changed field.
		 * 
		 * @return If the modified value is invalid, the field widget is returned. If the modified value is valid
		 *         <code>null</code> is returned.
		 */
		validateChangedField: function() {
			var invalidField = null;
			// validate the data in each field
			for (var i = 0; i < this._rows.length; i++) {
				var fields = this._rows[i];
				for (var j = 0; j < fields.length; j++) {
					var field = fields[j];
					if (field._hasBeenBlurred && !this.validateField(field)) {
						invalidField = field;
						break;
					}
				}
			}
			// validate that min cardinality is ok
			if (!invalidField) {
				invalidField = this._validateMinCardinality();
			}
			return invalidField;
		},

		/**
		 * Validates the required property fields.
		 * 
		 * @return Returns <code>null</code> if all required fields contain valid values. Otherwise, returns the first
		 *         required field that contains an invalid value.
		 * @since 2.0.3
		 */
		validateRequiredFields: function() {
			return this._propertyEditors.validateRequiredFields();
		},
		
		/**
		 * Validates the data.
		 * 
		 * @return A field widget that contains an invalid value. If all fields contain valid values, <code>null</code>
		 *         is returned.
		 */
		validate: function(onEditStatus, onSaveStatus) {
			var invalidField = null;

			if (onEditStatus && onEditStatus == true) {
				// Editing the properties of an existing an item.

				// Add any invalid required fields to the invalid field list.
				this.validateRequiredFields();
				invalidField = this.validateChangedField();
				// If the current field is valid, still need to check for other invalid fields.
				if (!invalidField) {
					invalidField = this.getFirstInvalidField();
				}
				return invalidField;
			} else if (onSaveStatus && onSaveStatus == true) {
				// Adding a new item.
				
				// If at least one field has been assigned a non-empty value,
				// then this child component row will be added with this new item.
				var addingChild = false;
				for (var i = 0; i < this._rows.length; i++) {
					var fields = this._rows[i];
					// Skip over the checkbox field at the front of the row.
					for (var j = 1; j < fields.length; j++) {
						var attrValues = fields[j].getValue();
						var isRequired = fields[j].required;
						if (attrValues !== "undefined" && (!AttributeDefinition.isValueEmpty(attrValues) || isRequired)) {
							addingChild = true;
							break;
						}
					}
				}
				if (addingChild) {
					// This child row will be added, all fields must be validated.
					for (var i = 0; i < this._rows.length; i++) {
						var fields = this._rows[i];
						// Skip over the checkbox field at the front of the row.
						for (var j = 1; j < fields.length; j++) {
							this.validateField(fields[j]);
						}
					}
					// Get the first invalid field, if any.
					invalidField = this.getFirstInvalidField();
				}
				return invalidField;
			}

			// validate the data in each field
			for (var i = 0; i < this._rows.length; i++) {
				var fields = this._rows[i];
				for (var j = 0; j < fields.length; j++) {
					var field = fields[j];
					if (field.isValid && !field.isValid()) {
						invalidField = field;
						break;
					}
				}
			}
			// validate that min cardinality is ok
			if (!invalidField) {
				invalidField = this._validateMinCardinality();
			}

			return invalidField;
		},

		/**
		 * Returns an array containing objects with index and values.
		 * 
		 * @return An array of value objects with the following properties:
		 *         <ul>
		 *         <li>name - The property Id string.</li>
		 *         <li>value - The property value.</li>
		 *         <li>dataType - A {@link ecm.model.AttributeDefinition} <code>dataType</code> value.</li>
		 *         <li>label - The property display name.</li>
		 *         </ul>
		 */
		getValues: function() {
			var values = [];
			var obj = {
				name: this.childComponentDefinition.id,
				values: values
			};

			var rowProperties = [];
			for (var i = 0; i < this._rows.length; i++) {
				var fields = this._rows[i];

				rowProperties = [];
				for (var j = 1; j < fields.length; j++) { // ignore the 1st field (the checkbox selection)
					var field = fields[j];
					//if (field.dataType != "xs:reference") { // also ignore reference attribute
					// We have to go through this because _TextBoxMixin forces get("value") to return "displayedValue",
					// which may discard some whitespace formatting characters.
					// the server code is not expecting null values. Send empty string "" instead of null.
					var value = field.getValue();
					if (value === null) {
						value = field.get("value");
						if (value === null) {
							value = "";
						}
					}
					rowProperties.push({
						"name": field.get("name"),
						"value": value,
						"dataType": field.get("dataType"),
						"label": field.get("label")
					});
					//}
				}

				values.push({
					index: "row_" + (i + 1),
					values: rowProperties
				});
			}
			return obj;
		},

		/**
		 * Indicates that the field is in error. This is used for custom validation.
		 * 
		 * @param fieldName
		 *            A child component property Id string.
		 * @param errorMessage
		 *            The error message string.
		 * @param invalidItems
		 *            The invalid values.
		 */
		setFieldError: function(fieldName, errorMessage, invalidItems) {
			var childCompIndex = fieldName.substring(fieldName.indexOf("[") + 1, fieldName.indexOf("]"));
			var fieldName = fieldName.substring(0, fieldName.indexOf("["));
			var fields = this._rows[childCompIndex];
			for (var i = 1; i < fields.length; i++) { // ignore the 1st field (the checkbox selection)
				var field = fields[i];
				var readOnly = field.isEditable ? !field.isEditable() : field.readOnly;
				var hidden = domStyle.get(field.domNode, "display") == "none";
				if (!hidden && !readOnly && field.name == fieldName) {
					field.setCustomValidationError(errorMessage);
					// Indicate that this field has had focus so that it is checked.
					field._hasBeenBlurred = true;
					this.validateField(field);
				}
			}
		},

		/**
		 * This event is fired when the user clicks on the reference attribute.
		 * 
		 * @param evt
		 *            The event.
		 */
		onClickReferenceAttribute: function(evt) {
		},

		/**
		 * This event is fired when the field is changed.
		 */
		onChange: function() {
		},

		/**
		 * @private
		 */
		_isMultiEditAddValid: function() {
			// When the user either adds a new instance or clicks the Append box, signal a change
			// has been made if at least one field has a value and the other fields are valid.
			var foundValue = false;
			var foundInvalid = false;
			for (var i = 0; i < this._rows.length; i++) {
				var fields = this._rows[i];
				for (var j = 1; j < fields.length; j++) { // ignore the selection checkbox
					var field = fields[j];
					var value = field.get("value");
					if (value && value != "") {
						if (field._isEmpty && !field._isEmpty(value)) {
							foundValue = true;
						} else {
							foundValue = true;
						}
					}

					if (field.isValid && !field.isValid()) {
						foundInvalid = true;
					}
				}
			}

			if (foundValue == true && foundInvalid == false) {
				return true;
			}
		},

		/**
		 * @private
		 */
		_onMultiEditChange: function() {
			// Don't track changes for multi editing until the pane has rendered. Needed so initial changes made
			// by EDS are ignored.
			if (this._renderedForMultiEdit == true) {
				this.multiEditChanged = true;
				this.onMultiEditChildComponentChange(this.childComponentDefinition.id);
			}
		},

		/**
		 * Fired in multi object editing when child component changed.
		 * 
		 * @param childComponentId
		 *            The String id of this child component.
		 */
		onMultiEditChildComponentChange: function() {
		},

		/**
		 * Places focus in the provided property field widget. This is typically used
		 * to set the focus on a field that has an invalid value.
		 * 
		 * @param field
		 *            A field widget.
		 */
		setFieldFocus: function(field) {
			if (field) {
				setTimeout(function() {
					// Scroll into view before setting focus so that tooltips are not dismissed by the scroll.
					win.scrollIntoView(field.domNode || field);
					field._hasBeenBlurred = true;
					if (lang.isFunction(field.validate)) {
						field.validate();
					}
					if (lang.isFunction(field.focus)) {
						field.focus();
					} else if (lang.isFunction(field.setFocus)) {
						field.setFocus();
					}
				}, 300);
			}
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this._cleanUp();
			this.childComponentDefinition = null;
			this.childComponentItem = null;
			// Destroyed by parent.
			delete this._factory;
			delete this._properties;
			this.inherited(arguments);
		}
	});
});

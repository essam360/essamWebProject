/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/html",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/window",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dojo/string",
	"dojo/data/ItemFileReadStore",
	"dojo/data/ItemFileWriteStore",
	"ecm/_MemoryStore",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/popup",
	"../FilteringSelect",
	"idx/html",
	"ecm/widget/DropDownDialog",
	"../../LoggerMixin",
	"../../model/AttributeDefinition",
	"../../model/ChildComponentDefinition",
	"../../model/ChildComponentSearchCriteria",
	"../../model/SearchCriterion",
	"../DatePicker",
	"../PropertyEditors",
	"../SinglePropertyEditorFactory",
	"./_HasOperatorSelect",
	"../HoverHelp",
	"../../model/_searchUtils",
	"./AdvancedSearchCriterionOptions",
	"dojo/text!./templates/AttributeDefinitionWidget.html"
], function(declare, lang, array, html, has, aspect, win, domClass, domConstruct, domGeometry, domStyle, keys, on, string, ItemFileReadStore, ItemFileWriteStore, _MemoryStore, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, popup,FilteringSelect, idxHtml, DropDownDialog, LoggerMixin, AttributeDefinition, ChildComponentDefinition, ChildComponentSearchCriteria, SearchCriterion, DatePicker, PropertyEditors, SinglePropertyEditorFactory, _HasOperatorSelect, HoverHelp, utils, AdvancedSearchCriterionOptions,template) {

	/**
	 * @name ecm.widget.search.AttributeDefinitionWidget
	 * @class Provides a widget that is used by the search builder to represent a property in a search template.
	 * @augments dijit._WidgetBase
	 */
	var AttributeDefinitionWidget = declare("ecm.widget.search.AttributeDefinitionWidget", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_HasOperatorSelect,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.AttributeDefinitionWidget.prototype */
		templateString: template,

		/**
		 * The property definitions widget.
		 */
		attributeDefinitions: null,

		/**
		 * The property definition this widget is modeling.
		 */
		attributeDefinition: null,

		/**
		 * @private The child components
		 */
		_children: null,

		/**
		 * @private The mode in which the attribute is displayed. Valid values are "standard" (default) and "fixed".
		 *          <ol>
		 *          <li>Standard mode: The attribute can be changed.</li>
		 *          <li>Fixed mode: The attribute cannot be changed.</li>
		 *          </ol>
		 * @since 2.0.3.5
		 */
		displayMode: "standard",

		/**
		 * Constructor
		 */
		constructor: function(args) {
			var methodName = "constructor";
			this.logEntry(methodName, "operator: " + args._operator);
			this.messages = ecm.messages;
			lang.mixin(this, args);
			this.attributeDefinitions = null;
			this.attributeDefinition = null;
			this._operator = null;
			this._value = null;
			this._values = [];
			this._children = [];

			if (this.criterion && this.criterion.isInstanceOf && this.criterion.isInstanceOf(SearchCriterion)) {
				this._setValues(this.criterion.values);
				this.setOperator(this.criterion.selectedOperator);
				this._readOnly = this.criterion.readOnly;
				this._valueRequired = this.criterion.valueRequired;
				this._hidden = this.criterion.hidden;
				this._hasSeletecOperators = !!this.criterion.hasSelectedOperators;
				
				this.logDebug(methodName, "default operator: " + this.getOperator());
			}

			this._currentOperator = null;
			this._factory = new SinglePropertyEditorFactory();
			this._propertyEditors = new PropertyEditors();
			this.logExit(methodName, "operator: " + this.getOperator());
		},

		_filterSelectedOperators: function(selectedOperators, allOperators){
			var filteredOperators = [];
			for( var i in selectedOperators ){
				if(array.some(allOperators, function( op ){
					if( selectedOperators[i] == op ){
						return true;
					}
				})){
					filteredOperators.push( selectedOperators[i] );
				}
			}
			return filteredOperators;
		},
		
		/**
		 * Validates all fields of the widget.
		 * 
		 * @param ignoreRequired
		 *            Boolean value. If true, the validation will ignore required.
		 */
		validate: function(ignoreRequired) {
			var invalidField = null;
			if (this._children && this._children.length > 0) {
				var invalidField = null;
				for ( var i in this._children) {
					if (invalidField = this._children[i].validate(ignoreRequired))
						break;
				}
			} else {
				if (this._allNamesSelect && !this._allNamesSelect.isValid())
					invalidField = this._allNamesSelect;
				else if (this._operatorSelect && !this._operatorSelect.isValid())
					invalidField = this._operatorSelect;
				else if ((invalidField = this._propertyEditors.validate()) && ignoreRequired && invalidField.required) {
					var value;
					if (invalidField.isInstanceOf && invalidField.isInstanceOf(DatePicker)) {
						value = invalidField.get("value") === undefined ? "invalid" : null;
					} else {
						value = invalidField.getValue ? invalidField.getValue() : invalidField.get("value");
						if (value instanceof Array)
							value = value.length > 0 ? value[0] : null;
					}
					if (value == null || string.trim(value + "") == "")
						invalidField = null;
				}
			}

			return invalidField;
		},

		/**
		 * Retrieves the properties pane property editors.
		 * 
		 * @return A {@link ecm.widget.PropertyEditors} object.
		 */
		getPropertyEditors: function() {
			return this._propertyEditors;
		},

		/**
		 * Gets fields of the property editors.
		 * 
		 * @return All fields of the property editors.
		 */
		getFields: function() {
			return this._propertyEditors.getFields();
		},

		/**
		 * Gets the model of attribute definition of this widget.
		 * 
		 * @return A {@link ecm.model.AttributeDefinition} object.
		 */
		getAttributeDefinition: function() {
			return this.attributeDefinition;
		},

		/**
		 * Gets the operator select field value of this AttributeDefinitionWidget.
		 * 
		 * @return The operator select field widget
		 * @since 2.0.3
		 */
		getOperatorSelect: function() {
			return this._operatorSelect;
		},

		/**
		 * Gets the property names select field value of this AttributeDefinitionWidget.
		 * 
		 * @return The operator select field widget
		 * @since 2.0.3
		 */
		getFieldNamesSelect: function() {
			return this._allNamesSelect;
		},

		/**
		 * Sets attribute definition(s) of the widget.
		 * 
		 * @param attributeDefinitions
		 *            Array of {@link ecm.model.AttributeDefinition}. It will be stored in the widget.
		 * @param attributeDefinition
		 *            A {@link ecm.model.AttributeDefinition} object. It will be the model of the widget.
		 */
		setAttributeDefinition: function(attributeDefinitions, attributeDefinition) {
			this.attributeDefinitions = attributeDefinitions;
			this.attributeDefinition = attributeDefinition;

			var hasCriterion = this.criterion && this.criterion.isInstanceOf && this.criterion.isInstanceOf(SearchCriterion);
			var repository = utils.getAttributeRepository(attributeDefinition);
			if (attributeDefinition.valueFixed)
				this._setValues(attributeDefinition.defaultValue);
			if (!hasCriterion && repository && repository._isOnDemand()) {
				// Apply the default operator and value defined by the attribute
				this._setValues(attributeDefinition.defaultValue);
				this.setOperator(attributeDefinition.selectedOperator);
			}

			if (this.displayMode == "fixed") {
				domClass.add(this.allAttributeNameS, "fixed");
				this.allAttributeNameS.innerHTML = idxHtml.escapeHTML(attributeDefinition.name);
				this._hoverHelp = this._createHoverHelp(attributeDefinition);
				this.allAttributeNameS.appendChild(this._hoverHelp.domNode);
			} else {
				this._allNamesSelect = this._createdAllNamesSelect(this.allAttributeNameS);
				this.allAttributeNameS.appendChild(this._allNamesSelect.domNode);
			}
			
			//for advanced settings.
			if( this.enableAdvancedSearchOptions ){
				domClass.remove(this.controlButtons, "attributeControls");
				domClass.add(this.controlButtons, "attributeControlsWithAdvancedOption");
				domStyle.set(this.advancedSettingIconNode, "display", "none");
			}else{
				domStyle.set(this.optionNode, "display", "none");
				domStyle.set(this.advancedSettingIconArea, "display", "none");
				domStyle.set(this.advancedSettingIconNode, "display", "none");
			}
			
			this._createAttributeDefinitionField(this.attributeDefinition);
		},
		
		/**
		 * @private
		 */
		_processAdvancedSettingsIcon: function(){
			var isEditableSet = this._valueRequired || this._readOnly || this._hidden;
			if( isEditableSet || this._hasSeletecOperators ){
				this._showAdvancedSettingsIcon();
			}else{
				this._hideAdvancedSettingsIcon();
			}
		},
		
		/**
		 * @private
		 */
		_showAdvancedSettingsIcon: function(){
			domStyle.set(this.advancedSettingIconNode, "display", "");
			this._setAdvancedSettingsIconToolTip();
		},
		
		/**
		 * @private
		 */
		_hideAdvancedSettingsIcon: function(){
			domStyle.set(this.advancedSettingIconNode, "display", "none");
		},
		
		/**
		 * @private
		 */
		_setAdvancedSettingsIconToolTip: function(){
			if( this._valueRequired ){
				this.advancedSettingIconNode.title = this.messages.advanced_search_options_required;
			}else if( this._readOnly ){
				this.advancedSettingIconNode.title = this.messages.advanced_search_options_readonly;
			}else if( this._hidden ){
				this.advancedSettingIconNode.title = this.messages.advanced_search_options_hidden;
			}else{
				this.advancedSettingIconNode.title = "";
			}
			if( this._hasSeletecOperators ){
				if( this.advancedSettingIconNode.title && this.advancedSettingIconNode.title.length>0 ){
					this.advancedSettingIconNode.title += " - ";
				}
				this.advancedSettingIconNode.title += this.messages.advanced_search_options_operators_filtered;
			}
			
			this.advancedSettingIconNode.setAttribute("aria-label", this.advancedSettingIconNode.title );
		},

		/**
		 * Sets the child attribute definition.
		 * 
		 * @param childAttributeDefinition
		 *            A {@link ecm.model.AttributeDefinition} object.
		 */
		setChildAttributeDefinition: function(childAttributeDefinition) {
			this.attributeDefinition = childAttributeDefinition;
			this.allAttributeNameS.innerHTML = idxHtml.escapeHTML(childAttributeDefinition.name);
			domClass.add(this.allAttributeNameS, "fixed");
			this._hoverHelp = this._createHoverHelp(childAttributeDefinition);
			this.allAttributeNameS.appendChild(this._hoverHelp.domNode);
			this._createAttributeDefinitionField(this.attributeDefinition);
		},

		/**
		 * Gets the operator.
		 * 
		 * @return Operator value.
		 */
		getOperator: function() {
			return this._operator;
		},

		/**
		 * Sets the operator.
		 * 
		 * @param operator
		 *            String value of operator
		 */
		setOperator: function(operator) {
			this._operator = operator;
		},

		/**
		 * Gets the value(s) of the attribute.
		 * 
		 * @return Value of the attribute.
		 */
		getValue: function() {
			return this._value;
		},

		/**
		 * Sets the value of the attribute.
		 * 
		 * @param value
		 *            A object of single value.
		 */
		setValue: function(value) {
			var oldValues = this._values;
			this._setValues(value ? [
				value
			] : []);
			if (this.attributeDefinition && !utils.compareValues(this._values, oldValues, utils.getAttributeInputDataType(this.attributeDefinition)))
				this.onValueChange();
		},

		/**
		 * Gets values of the attribute.
		 * 
		 * @return Values of the attribute as array.
		 */
		getValues: function() {
			return this._values;
		},

		/**
		 * Sets values of the attribute.
		 * 
		 * @param values
		 *            Array of values.
		 */
		setValues: function(values) {
			var oldValues = this._values;
			this._setValues(values);
			if (this.attributeDefinition && !utils.compareValues(this._values, oldValues, utils.getAttributeInputDataType(this.attributeDefinition)))
				this.onValueChange();
		},

		/**
		 * @private Used internally to avoid triggering an onValueChange event for changes that aren't user-driven
		 */
		_setValues: function(values) {
			this._values = values || [];
			this._value = values.length > 0 ? values[0] : null;
		},

		/**
		 * @private
		 */
		_createdAllNamesSelect: function(parent) {
			var selectOptions = [];
			array.forEach(this.attributeDefinitions, function(attributeDefinition) {
				selectOptions.push({
					id: attributeDefinition.id,
					name: attributeDefinition.valueRequired ? "* " + attributeDefinition.name : attributeDefinition.name
				});
			});

			var valueOptionsStore = new _MemoryStore({
				data: selectOptions
			});

			/**
			 * Gets the max height.
			 * 
			 * @param d
			 *            An instance of a dijit
			 */
			var getMaxHeight = function(d) {
				var maxHeight = -1, viewport = win.getBox(), aroundNode = d._aroundNode || d.domNode, position;
				if (!aroundNode) {
					return -1;
				}
				position = domGeometry.position(aroundNode, false);
				maxHeight = Math.floor(Math.max(position.y, viewport.h - (position.y + position.h)));
				maxHeight = maxHeight - 5;
				return maxHeight;
			};

			// adding hidden label so avoid RPT error
			var labelId = this.id + "_field";
			var label = domConstruct.create("label", {
				"for": labelId,
				innerHTML: ecm.messages.search_filtered_properties
			});
			domStyle.set(label, "display", "none");
			parent.appendChild(label);

			var args = {
				id: labelId,
				labelType: "text", // this creates a text node for the label ... which allows data like "<title>
				// data" to display successfully in the pulldown
				searchAttr: "name",
				value: this.attributeDefinition.id,
				store: valueOptionsStore,
				invalidMessage: ecm.messages.property_pulldown_invalid,
				textDir: has("text-direction")
			};
			if (!ecm.model.desktop.useStartsWithChoiceListFilter) {
				args.queryExpr = "*${0}*"; // "contains" search
				args.autoComplete = false; // useless with "contains" search
			}
			var select = new FilteringSelect(args);
			setTimeout(function() {
				select.maxHeight = getMaxHeight(select);
			}, 0);

			select.connect(win.global, 'onresize', function() {
				// Using function(){} closure to ensure no arguments to resize.
				this.maxHeight = getMaxHeight(this);
			});

			this.connect(select, "_onFocus", "onFocus");
			this.connect(select, "_onBlur", "onBlur");
			this.connect(select, "onKeyDown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.TAB && e.shiftKey) {
					this.onTabBackwards();
				}
			}));
			this.connect(select, "onChange", function() {
				if (select.get("value") != this.attributeDefinition.id) {
					for (var i = 0; i < this.attributeDefinitions.length; i++) {
						var attrib = this.attributeDefinitions[i];
						if (select.get("value") == attrib.id) {
							var oldAttrib = this.attributeDefinition;
							var repository = utils.getAttributeRepository(attrib);
							this.attributeDefinition = attrib;
							if (attrib.valueFixed || (repository && repository._isOnDemand())) {
								// Apply the default operator and value defined by the attribute
								this._setValues(attrib.defaultValue);
								this.setOperator(repository && repository._isOnDemand() ? attrib.selectedOperator : null);
							} else {
								this._setValues([]);
								this.setOperator(null);
							}
							this._createAttributeDefinitionField(attrib);
							this.onAttributeValidate(select.isValid());
							this.onAttributeDefinitionChange(oldAttrib, attrib);
							break;
						}
					}
				}
				this.onChange();
			});

			this.connect(select, "validate", function() {
				this.onAttributeValidate(select.isValid());
			});

			return select;
		},

		/**
		 * @private
		 */
		_cleanUp: function() {
			if (this._operatorSelect) {
				this._operatorSelect.destroy();
				this._operatorSelect = null;
			}

			if (this._hoverHelp) {
				this._hoverHelp.destroy();
				this._hoverHelp = null;
			}

			this._destroyFields();
			this._multiValued = false;
		},

		/**
		 * @private
		 */
		_destroyFields: function() {
			this._propertyEditors.destroyFields();
			if (this._andNode) {
				domConstruct.destroy(this._andNode);
				this._andNode = null;
			}
		},

		/**
		 * @private
		 */
		_getOperatorsFromOperatorOptions: function( operatorOptions ){
			var operators = [];
			for( var i in operatorOptions ){
				operators.push( operatorOptions[i].value );
			}
			return operators;
		},
		
		/**
		 * @private
		 */
		_createAttributeDefinitionField: function(attributeDefinition) {
			var methodName = "_createAttributeDefinitionField";
			// summary:
			//		Internal function used to add a field to the search form.
			// parameters:
			//		field - Field JSON definition.
			// tags:
			//		private

			try {
				domStyle.set(this.attributeContainer, "visibility", "visible");
				if (this.displayMode != "fixed")
					this._cleanUp();

				// child component
				array.forEach(this._children, function(child) {
					child.destroy();
				}, this);
				this._children = [];
				if (attributeDefinition.isInstanceOf && attributeDefinition.isInstanceOf(ChildComponentDefinition)) {
					domStyle.set(this.optionNode, "display", "none");
					this._setupChildAttributeDef(attributeDefinition);
					return;
				}

				if (this.displayMode != "fixed") {
					//the 1st dijit is the hover help
					this._hoverHelp = this._createHoverHelp(attributeDefinition);
					this.operatorSelectContainer.appendChild(this._hoverHelp.domNode);
				}

				//the 2nd dijit is the operator select
				var operatorOptions = utils.getOperatorSelectOptions(attributeDefinition);
				
				this._allOperators = this._getOperatorsFromOperatorOptions( operatorOptions );
				if( this.criterion && this.criterion.availableOperators ){
					this._selectedOperators = this._filterSelectedOperators(this.criterion.availableOperators, this._allOperators);
				}else{
					this._selectedOperators = this._allOperators;
				}
				
				if (this._operator) {
					this.setOperator(this._operator);
				} else if (operatorOptions.length) {
					// Use the first operator by default unless there is a choice list, in which case use the EQUAL operator if available
					var op = operatorOptions[0].value;
					if (attributeDefinition.getChoiceList() && op != "EQUAL" && array.some(operatorOptions, function(option) {
						return option.value == "EQUAL";
					}))
						op = "EQUAL";
					this.setOperator(op);
				}
				var opStore = new ItemFileReadStore({
					data: {
						identifier: "value",
						label: "label",
						items: operatorOptions
					}
				});
				var args = {
					value: this.getOperator() || "",
					baseClass: "dijitTextBox dijitComboBox dijitValidationTextBox operatorSelect",
					store: opStore,
					searchAttr: "label",
					title: this.messages.select_operator,
					invalidMessage: ecm.messages.property_pulldown_invalid,
					missingMessage: ecm.messages.search_operator_pulldown_missing
				};
				if (!ecm.model.desktop.useStartsWithChoiceListFilter) {
					args.queryExpr = "*${0}*"; // "contains" search
					args.autoComplete = false; // useless with "contains" search
				}
				this._operatorSelect = new FilteringSelect(args);
				this.connect(this._operatorSelect.domNode, "onkeydown", lang.hitch(this, function(evt) {
					if (evt.keyCode == keys.TAB && domStyle.get(this._propertyEditors.getFields()[0].domNode, "display") == "none") {
						this._ignoreBlur = true;
					}
				}));
				this.connect(this._operatorSelect, "_onFocus", "onFocus");
				this.connect(this._operatorSelect, "_onBlur", "_onCheckBlur");
				this.connect(this._operatorSelect, "onChange", function(value) {
					this.setOperator(value);
					this.onChange();
				});
				this.connect(this._operatorSelect, "validate", function() {
					this.onAttributeValidate(this._operatorSelect.isValid());
				});
				var width = this._getOperatorSelectWidth();
				if (width) {
					domGeometry.setMarginBox(this._operatorSelect.domNode, {
						w: width
					});
				}
				
				if( this._hasSeletecOperators ){
					this._setToSelectedOperators();
				}
				
				this.operatorSelectContainer.appendChild(this._operatorSelect.domNode);
				if (!operatorOptions.length || this._selectedOperators && this._selectedOperators.length && this._selectedOperators.length==0) {
					// Force validation to show the error
					this._operatorSelect._hasBeenBlurred = true;
					this._operatorSelect.validate();
				}

				this._createValueField(attributeDefinition, this._operatorSelect, null, this._hoverHelp, lang.hitch(this, function(field, field2) {
					if ((!operatorOptions.length || this._selectedOperators && this._selectedOperators.length && this._selectedOperators.length==0)  && field2) {
						// Hide the second value field
						domStyle.set(field2.domNode, "display", "none");
						domStyle.set(this._andNode, "display", "none");
					}
				}));
				this._processAdvancedSettingsIcon();
			} catch (e) {
				this.logError("_createAttributeDefinitionField", "Error creating field [" + attributeDefinition + "]", e.message);
			}
		},
		
		/**
		 * @private
		 */
		_setToSelectedOperators: function( ){
			if( this._selectedOperators ){
				var operators = array.map(this._selectedOperators, function(op) {
					return {
						value: op,
						label: ecm.messages["operator_" + op]
					};
				});
				
				var opStore = new ItemFileReadStore({
					data: {
						identifier: "value",
						label: "label",
						items: operators
					}
				});
				
				this._operatorSelect._setStoreAttr(opStore);
				this._operatorSelect.reset();
	
				var op = this.getOperator();
				if( !array.some( this._selectedOperators, function(operator){
					if( op == operator )
						return true;
				} ) ){
					
					op = operators[0].value;
					if (this.attributeDefinition.getChoiceList() && op != "EQUAL" && array.some(operators, function(option) {
						return option.value == "EQUAL";
					}))
					op = "EQUAL";
					this.setOperator(op);
				}
	
				this._operatorSelect.setValue(op);
			}
		},
		
		/**
		 * @private
		 */

		_showAdvancedOptions: function(){
			if (this._advancedOptionsDialog) {
				this._advancedOptionsDialog.destroy();
				this._advancedOptionsDialog = null;
			}
			
				this._advancedOptionsPane = new AdvancedSearchCriterionOptions({
					wid: this
				});
				
				
				this._advancedOptionsDialog = new DropDownDialog({
					content: this._advancedOptionsPane,
					autofocus: false,
					okButtonLabel: this.messages.ok_button_label,
					
					onClickCancel: lang.hitch(this, function() {
						this._advancedOptionsDialog.onCancel();
					}),
					onBlur: lang.hitch(this, function() {
						this._advancedOptionsDialog.onCancel();
					}),
					onClickOK: lang.hitch(this, function() {
						this._advancedOptionsPane.save();
						this._advancedOptionsDialog.onCancel();
					})
				});
				
				this._advancedOptionsPane._dialog = this._advancedOptionsDialog;

				this.own(aspect.before(this._advancedOptionsDialog, "onOpen", lang.hitch(this, function() {
					this._advancedOptionsDialog.startup();
					setTimeout(lang.hitch(this,function() {
						this._advancedOptionsDialog._okButton.focus();
					}), 0);
				})));
				popup.open({
					parent: this,
					popup: this._advancedOptionsDialog,
					around: this.optionNode,
					onCancel: lang.hitch(this, function() {
						popup.close(this._advancedOptionsDialog);
						if (this.optionNode) {
							this.optionNode.focus();
						} 
					})
				});
		},
		
		/**
		 * @private
		 */
		_setupChildAttributeDef: function(child) {
			domStyle.set(this.attributeContainer, "visibility", "hidden");

			var childAttributeDefinitions = child.attributeDefinitions;
			var self = this;

			array.forEach(childAttributeDefinitions, function(childAttributeDefinition) {
				if (childAttributeDefinition.dataType != "xs:reference") {
					var childCriterion = null;
					if (this.criterion && this.criterion.isInstanceOf && this.criterion.isInstanceOf(ChildComponentSearchCriteria)) {
						// Find the corresponding child criterion
						array.some(this.criterion.searchCriteria, function(criterion) {
							if (criterion.id == childAttributeDefinition.id) {
								childCriterion = criterion;
								return false;
							}
						});
					}
					var w = new AttributeDefinitionWidget({
						repository: child.repository,
						criterion: childCriterion,
						displayMode: "fixed"
					});
					this.connect(w, "onAttributeValidate", function(valid) {
						this.onAttributeValidate(valid);
					});
					w.setChildAttributeDefinition(childAttributeDefinition);
					this.domNode.appendChild(w.domNode);
					w.startup();
					this._children.push(w);

					domStyle.set(w.moveUpNode, "display", "none");
					domStyle.set(w.moveDownNode, "display", "none");
					
					on(w.optionNode, "click", function( evt) {
						w._showAdvancedOptions();
					});
					
					on(w.optionNode, "keydown", function(evt) {
						if (evt.keyCode == keys.SPACE) {
							w._showAdvancedOptions();
						}
					});
					
					w._setOptionNodeToolTip();
					w._processAdvancedSettingsIcon();
					
					on(w.removeNode, "click", function() {
						if (self._children && self._children.length > 1) {
							self._children.splice(array.indexOf(self._children, w), 1);
							w.destroy();
						}
					});
					on(w.removeNode, "keydown", function() {
						if (evt.keyCode == keys.SPACE) {
							if (self._children && self._children.length > 1) {
								self._children.splice(array.indexOf(self._children, w), 1);
								w.destroy();
							}
						}
					});
				}
			}, this);
			this.connect(this.domNode, "onmouseover", function() {
				if (self._children && self._children.length > 1) {
					for ( var i in self._children) {
						domClass.add(self._children[i].domNode, "attributeDefintionWidgetHover");
						domClass.remove(self._children[i].controlButtons, "controlButtonsHidden");
					}
				}
			});

			this.connect(this.domNode, "onmouseout", function() {
				if (self._children && self._children.length > 0) {
					for ( var i in self._children) {
						domClass.remove(self._children[i].domNode, "attributeDefintionWidgetHover");
						domClass.add(self._children[i].controlButtons, "controlButtonsHidden");
					}
				}
			});
		},

		/**
		 * @private
		 */
		_getDataFormat: function(attributeDefinition) {
			var format = attributeDefinition.format;

			if (utils.inputTimestampAsDate(attributeDefinition))
				format = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date");

			return format;
		},

		/**
		 * @private
		 */
		_createValueField: function(attributeDefinition, operatorSelect, cardinality, hoverHelp, callback) {
			// these are common meta data across the properties  and are going to be present on all the dijits
			var criterionUID = this.id + new Date().getTime();
			var dataType = utils.getAttributeInputDataType(attributeDefinition, true);
			var format = this._getDataFormat(attributeDefinition);
			var cardinality = attributeDefinition.cardinality;
			var operator = null;
			var multiValued = false;
			var trimStrings = !!ecm.model.desktop.trimSearchStrings;
			if (operatorSelect) {
				operator = operatorSelect.get("value");
				if (operator == "LIKE" || operator == "NOTLIKE" || operator == "STARTSWITH" || operator == "ENDSWITH" || operator == "CONTAINS") {
					// Ensure that a single value input is used even if the criterion has multiple cardinality
					cardinality = "SINGLE";
				} else if (operator == "IN" || operator == "INANY" || operator == "NOTIN") {
					cardinality = "LIST";
					multiValued = true;
				}
				if (operator == "CONTAINS")
					trimStrings = true;
			}

			var cl = attributeDefinition.getChoiceList();
			var options = attributeDefinition.getAllowedValuesSelectOptions();
			var kwArgs = {
				forSearch: true,
				dataType: dataType,
				dataFormat: format,
				minValue: attributeDefinition.minValue,
				maxValue: attributeDefinition.maxValue,
				//  unified - honor default value if attributeDefinition.valuefixed - fixed value is already take care of  in setAttributeDefintion
				values: attributeDefinition.valueFixed ? this._resolveFixedValues(operator) : (this.getValues() || []),
				//  unified - readOnly if attributeDefinition.valueFixed
				readOnly: attributeDefinition.valueFixed || false,
				required: attributeDefinition.valueRequired,
				uniqueValues: true,
				id: criterionUID,
				minLength: attributeDefinition.minLength,
				maxLength: attributeDefinition.maxLength,
				cardinality: cardinality,
				choiceList: cl ? lang.clone(cl) : null,
				choiceListNested: attributeDefinition.isChoiceListNested(),
				valueOptions: options ? lang.clone(options) : null,
				label: attributeDefinition.name,
				regularExpr: this._getRegularExpressionForAttributeDefinition(attributeDefinition),
				promptText: this._getPromptText(attributeDefinition),
				invalidMessage: attributeDefinition.formatDescription && lang.replace(this.messages.property_invalid_with_format, [ attributeDefinition.formatDescription ]),
				propertyEditor: attributeDefinition.propertyEditor,
				repository: utils.getAttributeRepository(attributeDefinition),
				repositoryType: attributeDefinition.repositoryType,
				attributeDefinition: attributeDefinition,
				noTrimStrings: !trimStrings,
				propertyPaneContainer: this
			};

			// Create fields asynchronously to support custom property editors
			var afterCreate = lang.hitch(this, function(field, field2) {
				this._multiValued = multiValued;
				if (operator == "NULL" || operator == "NOTNULL")
					this._setValueFieldDisplay("none");
				if (lang.isFunction(callback))
					callback(field, field2);
			});
			this._createField(kwArgs, hoverHelp, this.valueFieldContainer, lang.hitch(this, function(field) {
				if (!field.supportsPairedSearchFields()) {
					html.removeClass(this.valueFieldContainer, "multiValue");
					if (this._operatorSelectOnChangeSignal)
						this._operatorSelectOnChangeSignal.remove();
					this._operatorSelectOnChangeSignal = aspect.after(operatorSelect, "onChange", lang.hitch(this, function() {
						this.onChangeOperator(operatorSelect, null, hoverHelp);
					}));

					var callSetValueFunction = lang.hitch(this, "_callSetValueWithOneFieldValue", field, this);
					this.connect(field, "onChange", callSetValueFunction);
					this.connect(field, "onBlur", callSetValueFunction);

					afterCreate(field);
				} else { // create a 2nd field & "and" node
					this._andNode = this._createAndNode(this.valueFieldContainer);

					kwArgs.id = criterionUID + "_2";
					if (cl)
						kwArgs.cl = lang.clone(cl);
					if (options)
						kwArgs.valueOptions = lang.clone(options);
					kwArgs.values = (kwArgs.values instanceof Array) && kwArgs.values.length > 1 ? [
						kwArgs.values[1]
					] : null;

					this._createField(kwArgs, hoverHelp, this.valueFieldContainer, lang.hitch(this, function(field2) {
						var callSetValueFunction = lang.hitch(this, "_callSetValueWithTwoFieldValues", field, field2, this, !kwArgs.required);
						this.connect(field, "onChange", callSetValueFunction);
						this.connect(field2, "onChange", callSetValueFunction);
						this.connect(field, "onBlur", callSetValueFunction);
						this.connect(field2, "onBlur", callSetValueFunction);

						if (!kwArgs.required) {
							var callCheckRequiredFunction = lang.hitch(this, "_checkRequired", field, field2);
							this.connect(field.focusNode || field.domNode, "onkeyup", callCheckRequiredFunction);
							this.connect(field2.focusNode || field2.domNode, "onkeyup", callCheckRequiredFunction);
						}

						if (operator == "BETWEEN" || operator == "NOTBETWEEN") {
							html.addClass(this.valueFieldContainer, "multiValue");
							domStyle.set(field2.domNode, "display", "");
						} else {
							html.removeClass(this.valueFieldContainer, "multiValue");
							domStyle.set(field2.domNode, "display", "none");
						}
						this._showHideAndNode(field2, this._andNode);

						if (this._operatorSelectOnChangeSignal)
							this._operatorSelectOnChangeSignal.remove();
						this._operatorSelectOnChangeSignal = aspect.after(operatorSelect, "onChange", lang.hitch(this, function() {
							this.onChangeOperator(operatorSelect, field2, hoverHelp);
							this._showHideAndNode(field2, this._andNode);
							this.onAttributeValidate(!this._propertyEditors.validate());
						}));

						afterCreate(field, field2);
					}));
				}
			}));
		},

		/**
		 * @private
		 */
		_createField: function(kwArgs, hoverHelp, containerNode, callback) {
			var afterCreate = lang.hitch(this, function(field) {
				if ("alwaysValidate" in field) {
					field.alwaysValidate = true;
				}
				if (field.setHoverHelp) {
					field.setHoverHelp(hoverHelp);
				}
				this._propertyEditors.appendField(field);
				containerNode.appendChild(field.domNode);

				this.connect(field, "_onFocus", "onFocus");
				this.connect(field, "_onBlur", "_onCheckBlur");
				this.connect(field.focusNode || field.domNode, "onkeydown", "onKeyDown");
				this.connect(field, "onChange", "onChange");
				this.connect(field, "validate", lang.hitch(this, function() {
					this.onAttributeValidate(!this._propertyEditors.validate());
				}));

				callback(field);
			});

			// Use a callback function for custom property editors only; create all other fields synchronously
			// to maintain backwards compatibility, i.e., a plugin that overwrites the createSinglePropertyEditor
			// prototype might not support callbacks
			if (kwArgs.propertyEditor && kwArgs.propertyEditor.length > 0)
				this._factory.createSinglePropertyEditor(kwArgs, afterCreate);
			else
				afterCreate(this._factory.createSinglePropertyEditor(kwArgs));
		},

		/**
		 * @private
		 */
		_createAndNode: function(containerNode) {
			return domConstruct.create("span", {
				"class": "fieldAnd",
				innerHTML: ecm.messages.property_and
			}, containerNode);
		},

		/**
		 * @private
		 */
		_showHideAndNode: function(field2, and) {
			if (field2.domNode) { // if 2nd field is hidden/shown, hide/show the and domNode
				var hidden = domStyle.get(field2.domNode, "display") == "none";
				domStyle.set(and, "display", hidden ? "none" : "inline");
			}
		},

		/**
		 * @private
		 */
		_callSetValueWithOneFieldValue: function(field, targ) {
			if ((targ && targ.setValues && field && field.getValueAsArray) && (!field.isValid || field.isValid())) { // avoid updating value and triggering dependent attribute logic for invalid values
				targ.setValues(field.getValueAsArray());
			}
		},

		/**
		 * @private
		 */
		_checkRequired: function(field1, field2) { // Set up the dependency rules for range input
			var v1 = field1.getValue() == null ? "" : field1.getValue() + "";
			var v2 = field2.getValue() == null ? "" : field2.getValue() + "";

			field1._hasBeenBlurred = true; // instantaneous error display
			field1.set("required", domStyle.get(field2.domNode, "display") != "none" ? new Boolean(v2).valueOf() : false);
			field2._hasBeenBlurred = true; // instantaneous error display
			field2.set("required", new Boolean(v1).valueOf());
		},

		/**
		 * @private
		 */
		_callSetValueWithTwoFieldValues: function(field1, field2, targ, checkRequired) {
			if (targ && targ.setValues) {
				var v1 = field1.getValue() == null ? "" : field1.getValue() + "";
				var v2 = field2.getValue() == null ? "" : field2.getValue() + "";
				targ.setValues([
					v1,
					v2
				]);

				if (checkRequired)
					this._checkRequired(field1, field2);
			}
		},

		/**
		 * @private
		 */
		_createHoverHelp: function(attributeDefinition) {
			var hoverHelp = new HoverHelp({
				message: this._getPromptText(attributeDefinition)
			});
			hoverHelp.startup();
			return hoverHelp;
		},

		_getPromptText: function(attributeDefinition) {
			var type = utils.normalizeDataType(attributeDefinition), format = this._getDataFormat(attributeDefinition), repository = utils.getAttributeRepository(attributeDefinition);
			return this._factory.getPromptText({
				dataType: type,
				dataFormat: format,
				description: attributeDefinition.description || (repository && repository._isCM() ? attributeDefinition.name : null),
				minLength: attributeDefinition.minLength,
				maxLength: attributeDefinition.maxLength,
				minMaxValues: this._factory.getMinMax(attributeDefinition.minValue, attributeDefinition.maxValue, type, format),
				cardinality: attributeDefinition.cardinality,
				choiceList: attributeDefinition.getChoiceList(),
				valueOptions: attributeDefinition.getAllowedValuesSelectOptions()
			});
		},

		/**
		 * Launches when the attribute is validated.
		 * 
		 * @param valid
		 *            Boolean value of true if the attribute is valid.
		 */
		onAttributeValidate: function(valid) {
			if (valid && this._allNamesSelect)
				valid = this._allNamesSelect.isValid();
			if (valid && this._operatorSelect)
				valid = this._operatorSelect.isValid();
		},

		/**
		 * Launches when the widget is changed.
		 */
		onChange: function() {
		},

		/**
		 * An event that is triggered when the value is modified.
		 * 
		 * @since 2.0.3
		 */
		onValueChange: function() {
		},

		/**
		 * An event that is triggered when the attribute definition is changed.
		 * 
		 * @param oldAttributeDefinition
		 *            The previously used {@link ecm.widget.AttributeDefinition} object
		 * @param newAttributeDefinition
		 *            The currently used {@link ecm.widget.AttributeDefinition} object
		 * @since 2.0.3
		 */
		onAttributeDefinitionChange: function(oldAttributeDefinition, newAttributeDefinition) {
		},

		_onCheckBlur: function(evt) {
			if (this._ignoreBlur == undefined || !this._ignoreBlur) {
				this.onBlur();
			}
			this._ignoreBlur = null;
		},

		_onKeyDownRemoveNode: function(evt) {
			if (evt.keyCode == keys.TAB && evt.shiftKey) {
				this._ignoreBlur = true;
			}
		},

		/**
		 * Event fired when tab backwards out of this widget.
		 */
		onTabBackwards: function() {
		},

		/**
		 * Launches when a key down event is fired.
		 */
		onKeyDown: function(e) {
			if (e.keyCode == keys.TAB) {
				this._ignoreBlur = true;
			}
			// workaround to set the transient value on ENTER
//		if (e.keyCode === dojo.keys.ENTER) {
//			var node = e.currentTarget;
//			if (node.value) {
//				this.setValue(node.value);
//			}
//		}
		},

		/**
		 * Gets nodes for focus on.
		 * 
		 * @return Array of selected names.
		 */
		getNodeForFocus: function() {
			return this._allNamesSelect || this._operatorSelect;
		},

		/**
		 * Launches when change operator.
		 * 
		 * @param select
		 *            A {@link ecm.widget.Select} object.
		 * @param input
		 *            A {@link ecm.widget.TextBox} object. Or a {@link ecm.widget.NumberTextBox} object.
		 * @param hoverHelp
		 *            The {@link ecm.widget.HoverHelp} object.
		 */
		onChangeOperator: function(select, input, hoverHelp) {
			// summary:
			//		Internal function controlling search operation selection box changes.
			// parameters:
			//		select - Handle to the select widget.
			//		input - Handle to the text, date, or number box widget.
			//		parent - Handle to the parent node for input widget.
			// tags:
			//		private

			var operator = select.get("value");
			if (!operator) // invalid
				return;

			var nullOperator = operator == "NULL" || operator == "NOTNULL";
			if (!nullOperator && domStyle.get(this._propertyEditors.getFields()[0].domNode, "display") == "none") { // operator was null
				this._setValueFieldDisplay("");
			}

			var dataType = utils.normalizeDataType(this.attributeDefinition);
			if (utils.isStringDataType(dataType)) {
				var trim = operator == "CONTAINS" || !!ecm.model.desktop.trimSearchStrings;
				array.forEach(this.getFields(), function(field) {
					if (field.get("trim") != trim) {
						field.set("trim", trim);
						if (trim) {
							var value = field.get("value");
							if (value)
								field.set("value", string.trim(value));
						}
					}
				});
			}

			html.removeClass(this.valueFieldContainer, "multiValue");
			if (nullOperator) {
				this._setValueFieldDisplay("none");
			} else if (operator == "IN" || operator == "INANY" || operator == "NOTIN") {
				if (!this._multiValued) {
					// Switch to a multi-value picker
					this.setValues(this.attributeDefinition.valueFixed ? this._resolveFixedValues(operator) : [
						""
					]);
					this._multiValued = true;
					this._destroyFields();
					this._createValueField(this.attributeDefinition, select, "LIST", hoverHelp);
				}
			} else if (this._multiValued) {
				// Switch to the default input field
				this.setValues(this.attributeDefinition.valueFixed ? this._resolveFixedValues(operator) : [
					""
				]);
				this._multiValued = false;
				this._destroyFields();
				this._createValueField(this.attributeDefinition, select, null, hoverHelp);
			} else if (input && input.domNode) {
				if (operator == 'BETWEEN' || operator == 'NOTBETWEEN') {
					html.addClass(this.valueFieldContainer, "multiValue");
					domStyle.set(input.domNode, "display", "");
				} else {
					html.removeClass(this.valueFieldContainer, "multiValue");
					domStyle.set(input.domNode, "display", "none");
				}
				if (!this.attributeDefinition.valueFixed) {
					input.set("value", null);
				}
			}
		},

		/**
		 * Gets the width of the widget.
		 * 
		 * @return Number value of width.
		 */
		getWidth: function() {
			var rest = domGeometry.getMarginBox(this.attributeContainer).w;
			if (!rest) { // not visible (i.e., parent pane is collapsed)
				return 0;
			}

			var prop = domGeometry.getMarginBox(this.allAttributeNameS).w;
			var link = domGeometry.getMarginBox(this.controlButtons).w;
			var candidate = prop + rest + link + 20; // accounts for padding

			if (this._children && this._children.length > 0) {
				var _width = 0;
				for (var i = 0; i < this._children.length; i++) {
					_width = this._children[i].getWidth() + 20;
					if (candidate < _width) {
						candidate = _width;
					}
				}
			}
			return candidate;
		},

		/**
		 * @private
		 */
		_setValueFieldDisplay: function(display) {
			array.forEach(this._propertyEditors.getFields(), function(widget) {
				domStyle.set(widget.domNode, "display", display);
			});
		},

		/**
		 * @private
		 */
		_getRegularExpressionForAttributeDefinition: function(attributeDefinition) {
			// Allow any character for string type variants if a format is not specified (in-line with CM legacy clients)
			var format = this._getDataFormat(attributeDefinition), dataType = utils.normalizeDataType(attributeDefinition);
			return !format && utils.isStringDataType(dataType) ? ".*" : this._factory.getRegularExpression(dataType, format);
		},

		/**
		 * Gets the child attribute definitions.
		 * 
		 * @return Array of {@link ecm.model.AttributeDefinition} objects.
		 */
		getChildAttributeDefinitions: function() {
			return this._children;
		},

		_resolveFixedValues: function(operator) {
			var values = this.attributeDefinition.defaultValue;
			if (operator == "IN" || operator == "INANY" || operator == "NOTIN" || operator == "BETWEEN" || operator == "NOTBETWEEN") {
				values = lang.isArray(values) ? values : [
					values || ""
				];
			} else {
				values = [
					lang.isArray(values) ? values.join(" ") : (values || "")
				];
			}
			return values;
		},

		/**
		 * @private
		 */
		_updateDependentAttribute: function(attribute) {
			// Update the attribute
			this.attributeDefinition = attribute;

			// Update the list of operators since it may be affected by the presence or absence of a choice list,
			// but first remove the onChange event signal (it will be reestablished when the value field is recreated)
			var options = utils.getOperatorSelectOptions(this.attributeDefinition);
			if (this._operatorSelectOnChangeSignal)
				this._operatorSelectOnChangeSignal.remove();
			this._operatorSelect.set("store", new ItemFileReadStore({
				data: {
					identifier: "value",
					label: "label",
					items: options
				}
			}));
			if (!array.some(options, lang.hitch(this, function(option) {
				return option.value == this._operator;
			})))
				this._operator = options[0].value;
			this._operatorSelect.set("value", this._operator);

			// Clear values if the choice list was removed or any of the values aren't in the new choice list
			if ((attribute.oldChoiceList && !attribute.choiceList) || !AttributeDefinition.allValuesInChoiceList(attribute.choiceList, this._values)) {
				this._setValues([]);
			}

			// Re-render the value field
			this._destroyFields();
			this._createValueField(this.attributeDefinition, this._operatorSelect, null, this._hoverHelp);
		},
		
		/**
		 * @private
		 */
		_setOptionNodeToolTip: function(){
			if( this._valueRequired ){
				this.optionNode.title = this.messages.advanced_search_options_tooltip + " - " + this.messages.advanced_search_options_required;
			}else if( this._readOnly ){
				this.optionNode.title = this.messages.advanced_search_options_tooltip + " - " + this.messages.advanced_search_options_readonly;
			}else if( this._hidden ){
				this.optionNode.title = this.messages.advanced_search_options_tooltip + " - " + this.messages.advanced_search_options_hidden;
			}else{
				this.optionNode.title = this.messages.advanced_search_options_tooltip;
			}
			
			this.optionNode.setAttribute( "aria-label", this.optionNode.title );
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);

			if (this._allNamesSelect) {
				this._allNamesSelect.destroy();
				this._allNamesSelect = null;
			}

			if (this._operatorSelectOnChangeSignal) {
				this._operatorSelectOnChangeSignal.remove();
				this._operatorSelectOnChangeSignal = null;
			}
			
			if( this._advancedOptionsDialog ){
				this._advancedOptionsDialog.destroy();
				this._advancedOptionsDialog = null;
			}

			this._cleanUp();

			array.forEach(this._children, function(child) {
				child.destroy();
			});
		}
	});

	return AttributeDefinitionWidget;

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/window",
	"../SinglePropertyEditorFactory",
	"../../LoggerMixin"
],

function(declare, lang, array, string, win, SinglePropertyEditorFactory, LoggerMixin) {
	/**
	 * @name ecm.widget.process._PatternPropertiesMixin
	 * @class Provides a mixin that defines methods for working with pattern workflow properties pane.
	 * @public
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process._PatternPropertiesMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.process._PatternPropertiesMixin.prototype */

		_fields: {},
		_factory: new SinglePropertyEditorFactory(),

		_workItem: null,
		_attributeDefintion: null,

		_createSinglePropertyEditorControl: function(attribute, args) {
			this.logEntry("_createSinglePropertyEditorControl");
			var kwArgs = {
				readOnly: attribute.readOnly,
				dataType: attribute.dataType,
				required: attribute.required,
				id: attribute.id,
				name: attribute.id,
				label: attribute.name,
				maxLength: attribute.maxLength,
				minLength: attribute.minLength,
				cardinality: attribute.cardinality,
				values: attribute.values,
				attributeDefinition: attribute,
				trim: true
			};

			if (args) {
				lang.mixin(kwArgs, args);
			}
			var field = this._factory.createSinglePropertyEditor(kwArgs);
			this._fields[attribute.id] = field;

			this.logExit("_createSinglePropertyEditorControl");

			return field;
		},

		_getField: function(id) {
			return this._fields[id];
		},

		/**
		 * Returns the work item properties in a JSON format.
		 * 
		 * @returns {Object} holding property data.
		 */
		getPropertiesJSON: function() {
			this.logEntry("getPropertiesJSON");
			var properties = new Array();
			for ( var i in this._attributeDefinitions) {
				var attrDef = this._attributeDefinitions[i];
				if (!attrDef.system && !attrDef.readOnly && attrDef.dataType != "xs:attachment") {
					properties.push(this._getPropertyJSON(attrDef.id, attrDef.name, attrDef.dataType, this._getValue(attrDef)));
				}
			}

			this.logExit("getPropertiesJSON");
			return properties;
		},

		_getPropertyJSON: function(name, label, dataType, value) {
			return {
				"name": name,
				"label": label,
				"dataType": dataType,
				"value": (value instanceof Array) ? value : [
					value
				]
			};
		},

		_getValue: function(attributeDefinition) {
			var field = this._getField(attributeDefinition.id);
			if (field) {
				if (field.type == "checkbox" || field.type == "radio") {
					return field.get("checked");
				} else {
					return field.get("value");
				}
			} else {
				if (this._workItem && this._workItem.attributes[attributeDefinition.id]) {
					return this._workItem.attributes[attributeDefinition.id];
				} else {
					return attributeDefinition.defaultValue;
				}
			}
		},

		/**
		 * Checks the work item properties list for having valid values.
		 * 
		 * @param focus
		 * @since 2.0.3.8 A boolean value indicating if the error field (if any) should be set as focus.
		 * @param onEditStatus
		 * @since 2.0.3.8 A boolean value indicating if we are editing the properties.
		 * @param onSaveStatus
		 * @since 2.0.3.8 A boolean value indicating if we are saving the properties.
		 * @param response
		 * @since 2.0.3.8 Contains the response when this validation is taking place as part of executing a workflow response.
		 * @returns {Boolean} true if there are no validation errors, false otherwise.
		 */
		isValid: function(focus, onEditStatus, onSaveStatus, response) {
			return this._isValid(focus, onEditStatus, onSaveStatus, response);
		},

		_isValid: function(focus, onEditStatus, onSaveStatus, response) {
			var isValid = true;
			for ( var i in this._fields) {
				var field = this._fields[i];
				if (isValid) {
					if (response && response == "Reject" && field.id == "F_Comment") {
						// The comment is required for the Reject response. 
						var comment = field.get("value");
						isValid = comment != null && comment.length > 0;
					} else if (lang.isFunction(field.isValid)) {
						isValid = field.isValid();
					}
					if (!isValid && focus) {
						this._setFieldFocus(field);
					}
				}
			}
			return isValid;
		},

		/**
		 * Sets a properties field error state.
		 * 
		 * @param fieldName
		 *            A string hold the field name.
		 * @param errorMessage
		 *            A string hold the error message text to display.
		 */
		setFieldError: function(fieldName, errorMessage) {
			this.logEntry("setFieldError");
			var field = this._getField(fieldName);
			if (field) {
				if (lang.isFunction(field.setCustomValidationError)) {
					field.setCustomValidationError(errorMessage);
					// Indicate that this field has had focus.
					field._hasBeenBlurred = true;
				} else {
					this.logInfo("setFieldError", "Field doesn't support validation message: " + fieldName);
				}
			} else {
				this.logInfo("setFieldError", "Field is not exposed UI: " + fieldName);
			}
			this.logExit("setFieldError");
		},

		/**
		 * Sets a properties field focus state.
		 * 
		 * @param fieldName
		 *            A string hold the field name.
		 */
		setFieldFocus: function(fieldName) {
			this.logEntry("setFieldFocus");
			this._setFieldFocus(this._getField(fieldName));
			this.logExit("setFieldFocus");
		},

		_setFieldFocus: function(field) {
			this.logEntry("_setFieldFocus");
			if (field) {
				setTimeout(function() {
					field._hasBeenBlurred = true;
					// Scroll into view before setting focus so that tooltips are not dismissed by the scroll.
					win.scrollIntoView(field.domNode || field);
					if (lang.isFunction(field.focus)) {
						field.focus();
					} else if (lang.isFunction(field.setFocus)) {
						field.setFocus();
					}
				}, 300);
			} else {
				this.logInfo("setFieldFocus", "Field is not exposed UI: " + fieldName);
			}
			this.logExit("_setFieldFocus");
		},
		
		/**
		 * An event function called after the widget is finished rendering.
		 */
		onCompleteRendering: function() {
		},

		onChange: function() {
		},

		destroy: function() {
			if (this._fields) {
				for ( var prop in this._fields) {
					if (this._fields.hasOwnProperty(prop)) {
						var field = this._fields[prop];
						if (field) {
							if (lang.isFunction(field.destroyRecursive)) {
								field.destroyRecursive();
							} else if (lang.isFunction(field.destroy)) {
								field.destroy();
							}
						}
						delete this._fields[prop];
					}
				}
				this._fields = null;
			}
			if (this._factory) {
				if (lang.isFunction(this._factory.destroyRecursive)) {
					this._factory.destroyRecursive();
				} else if (lang.isFunction(this._factory.destroy)) {
					this._factory.destroy();
				}
				delete this._factory;
			}
			delete this._workItem;
			delete this._attributeDefintion;
			this.inherited(arguments);
		},

		_nop: null
	});
});

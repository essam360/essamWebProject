/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"../MessagesMixin",
	"../LoggerMixin",
	"../model/AttributeDefinition",
	"./DatePicker",
	"./TimePicker",
	"./RangeBoundTextBox",
	"./FilteringSelect"
], //
function(declare, lang, string, MessagesMixin, LoggerMixin, AttributeDefinition, DatePicker, TimePicker, RangeBoundTextBox, FilteringSelect) {
	/**
	 * @name ecm.widget.PropertyEditors
	 * @class Holds form fields in a private array variable.
	 * @public
	 */
	return declare("ecm.widget.PropertyEditors", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.PropertyEditors.prototype */

		constructor: function() {
			this._fields = [];
			this._invalidFields = [];
		},

		/**
		 * Returns the fields.
		 * 
		 * @return An array containing the property editor fields.
		 */
		getFields: function() {
			return this._fields;
		},

		/**
		 * Retrieves a field by name.
		 * 
		 * @param fieldName
		 *            The field name string.
		 * @return A field. If no field is found, <code>null</code> is returned.
		 */
		getFieldWithName: function(fieldName) {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (field.get("name") == fieldName) {
					return field;
				}
			}
			return null;
		},

		/**
		 * Retrieves an editable field by field name.
		 * 
		 * @param fieldName
		 *            The field name string.
		 * @return A field. If no editable field is found by field name then <code>null</code> is returned.
		 */
		getEditableFieldWithName: function(fieldName) {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (!field.isHidden() && !field.isReadOnly() && field.name == fieldName) {
					return field;
				}
			}
			return null;
		},
		
		/**
		 * Returns the first focusable field starting from the field by the given name (inclusive).
		 * If a focusable field isn't found when the end of the list is reached, the first focusable
		 * field from the top of the list is returned; otherwise, null is returned.
		 * 
		 * @param fieldName
		 *            The name of the field.
		 * @return A field or null
		 * @since 3.0.1
		 */
		getNextFocusableField: function(fieldName) {
			var fieldIndex = -1, focusField = null, altFocusField = null; 
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (field.name == fieldName)
					fieldIndex = i;
				if (!field.isHidden()) {
					if (fieldIndex > -1) { // bingo!
						focusField = field;
						break;
					} else if (!altFocusField)  {
						altFocusField = field;
					}
				}
			}
			
			return focusField || altFocusField;
		},

		/**
		 * Returns the field name string for the first text property field.
		 * 
		 * @return A field name string. If no text property field is found then <code>null</code> is returned.
		 */
		getFirstTextPropertyName: function() {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (!field.isReadOnly() && !this._isTextProperty(field)) {
					return field.get("name");
				}
			}
			return null;
		},

		/**
		 * Returns the field name string of the field that has focus.
		 * 
		 * @return A field name string. If no field is found with focus then <code>null</code> is returned.
		 */
		getFocusedFieldName: function() {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (field.focused && field.focused == true) {
					return field.get("name");
				}
			}
			return null;
		},

		/**
		 * Returns a boolean indicating if this field is for a text property.
		 */
		_isTextProperty: function(field) {
			return !(field.isInstanceOf && (field.isInstanceOf(ecm.widget.DatePicker) || field.isInstanceOf(ecm.widget.TimePicker) || field.isInstanceOf(ecm.widget.RangeBoundTextBox) || field.isInstanceOf(ecm.widget.FilteringSelect)));
		},

		/**
		 * Returns the first field that is found for one of the field name strings passed in an array of field name
		 * strings. This is intended for retrieving a field that may have a different name in certain circumstances,
		 * such as the document title field which may have a different name for different repository types.
		 * 
		 * @param fieldNames
		 *            An array of field name strings. Each name is used in array order to find a field. The first field
		 *            that is found is returned.
		 * @return A field. If no field is found for any of the field name strings then <code>null</code> is returned.
		 */
		getFieldWithEitherName: function(fieldNames) {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				var fieldName = field.get("name");
				for ( var j in fieldNames) {
					if (fieldName == fieldNames[j]) {
						return field;
					}
				}
			}
			return null;
		},

		/**
		 * Sets the value for a field by field name.
		 * 
		 * @param fieldName
		 *            The name of the field to assign the value.
		 * @param value
		 *            The value to assign to the field identified by <code>fieldName</code>.
		 * @return {Boolean} A value of <code>true</code> if the field was found, otherwise <code>false</code> is
		 *         returned.
		 */
		setPropertyValue: function(fieldName, value) {
			var methodName = "setPropertyValue", field = this.getFieldWithName(fieldName);
			this.logDebug(methodName, "fieldName: " + fieldName + ", value: " + value);
			if (field) {
				if (field.isInstanceOf && (field.isInstanceOf(ecm.widget.DatePicker) || field.isInstanceOf(ecm.widget.TimePicker))) {
					var valueInt = parseInt(value);
					field.set("value", new Date(valueInt));
				} else if (field.isInstanceOf && field.isInstanceOf(ecm.widget.FilteringSelect)) {
					// Find the item with the given value and use it's ID to set the value since the SinglePropertyEditorFactory
					// uses the item's index as the identifier, as suppose to the item's "value"
					field.store.query({
						value: value
					}).then(lang.hitch(this, function(results) {
						if (results.length) {
							var id = results[0].id;
							this.logDebug(methodName, "Setting value to: " + id);
							field.set("value", id);
						} else if (lang.isString(value)) { // possibly the displayed value
							this.logDebug(methodName, "Setting displayedValue to: " + value);
							field.set("displayedValue", value);
							field.isValid();
						} else { // possibly the ID
							this.logDebug(methodName, "Setting value to: " + value);
							field.set("value", value);
						}
					}));
				} else {
					field.set("value", value);
				}
				return true;
			}
			return false;
		},

		/**
		 * Sets the displayed value for a field by field name.
		 * 
		 * @param fieldName
		 *            The name of the field to assign the displayed value.
		 * @param value
		 *            The displayed value to assign to the field identified by the <code>fieldName</code> parameter.
		 * @return {Boolean} A value of <code>true</code> if the field was found, otherwise <code>false</code> is
		 *         returned.
		 */
		setPropertyDisplayedValue: function(fieldName, value) {
			var field = this.getFieldWithName(fieldName);
			if (field) {
				if (field.isInstanceOf && (field.isInstanceOf(ecm.widget.DatePicker) || field.isInstanceOf(ecm.widget.TimePicker))) {
					var valueInt = parseInt(value);
					field.set("displayedValue", new Date(valueInt));
				} else {
					field.set("displayedValue", value);
				}
				return true;
			}
			return false;
		},

		/**
		 * Retrieves the value for a field by field name.
		 * 
		 * @param fieldName
		 *            The name of the field.
		 * @return The field value. If the field is not found then <code>null</code> is returned. The actual field
		 *         value might also be null.
		 */
		getPropertyValue: function(fieldName) {
			var field = this.getFieldWithName(fieldName);
			if (field) {
				return field.get("value");
			}
			return null;
		},

		/**
		 * Return boolean if the field should be included.
		 */
		_shouldIncludeField: function(field, includeReadonly) {
			var methodName = "_shouldIncludeField";
			var rc = false;
			if (field.isReadOnly()) {
				rc = (includeReadonly == undefined) ? false : includeReadonly;
			} else if (field.dataType == "xs:reference") {
				rc = false;
			} else {
				rc = true;
			}
			return rc;
		},

		/**
		 * This method is used to obtain appropriate object structure for JSON serializing on add and edit properties
		 * requests. It should only be used in this way, and no other use of the object structure from this method
		 * should be performed as this structure could change.
		 * 
		 * @param includeReadonly
		 *            A boolean value. If <code>true</code>, values for read only properties are included. Otherwise
		 *            read only property values are excluded from the JSON.
		 * @param excludeEmptyValues
		 *            A boolean value. If <code>true</code>, properties with empty values are excluded.
		 * @return The JSON string for the current state of the properties.
		 */
		getPropertiesJSON: function(includeReadonly, excludeEmptyValues) {
			var methodName = "getPropertiesJSON";
			var properties = [];
			for ( var i in this._fields) {
				var field = this._fields[i];
				var repositoryType = field.repositoryType;
				if (this._shouldIncludeField(field, includeReadonly)) {
					// We have to go through this because _TextBoxMixin forces get("value") to return "displayedValue",
					// which may discard some whitespace formatting characters.
					// The server code is not expecting null values. Send empty string "" instead of null.
					var value = field.getValue();
					if (value == null) {
						value = field.get("value");
						if (value == null) {
							value = "";
						}
					}
					if ((repositoryType == "od") && ((field.dataType == "xs:double") || (field.dataType == "xs:decimal"))) {

						if (field.dataType == "xs:double") {
							value = value.toString()
						}
						if (value.length > 0 && value.lastIndexOf(".") < 0) {
							value = value + ".00"
						} else {
							var len = value.length - (value.lastIndexOf(".") + 1);
							while (len < 2) {
								value = value + "0";
								len++;
							}
						}
					}
					if (excludeEmptyValues && AttributeDefinition.isValueEmpty(value)) {
						continue;
					}
					properties.push({
						"name": field.get("name"),
						"value": value,
						"dataType": field.get("dataType"), // not used by services but needed for internal callers
						"label": field.get("label"),
						"displayValue": field.get("displayedValue") || ""
					});
				}
			}
			return properties;
		},

		/**
		 * Appends a new field to the array of fields. This is used to add custom fields that are not created here.
		 * 
		 * @param field
		 *            A field to add to the array of fields.
		 */
		appendField: function(field) {
			this._fields.push(field);
		},

		/**
		 * @private
		 */
		_destroyField: function(field) {
			this.logEntry("_destroyField");
			if (field.destroyRecursive) {
				field._isDestroying = true;
				field.destroyRecursive();
			} else if (field.destroy) {
				field._isDestroying = true;
				field.destroy();
			}
			this.logExit("_destroyField");
		},

		/**
		 * Removes and destroys the field.
		 * 
		 * @since 2.0.3
		 */
		destroyField: function(field) {
			this.logEntry("destroyField");

			// Remove the field from the invalid fields list.
			this.removeFromInvalidFields(field);

			// Remove the field from the fields list.
			for (var i = 0; i < this._fields.length; i++) {
				if (this._fields[i].id == field.id) {
					this._fields.splice(i, 1);
					break;
				}
			}

			this._destroyField(field);
			this.logExit("destroyField");
		},

		/**
		 * Removes and destroys all of the fields.
		 */
		destroyFields: function() {
			this.logEntry("destroyFields");
			var fields = this._fields;
			this._fields = []; // to avoid recursive issues
			var invalidFields = this._invalidFields;
			this._invalidFields = [];

			// Clear the invalid fields list.
			for (var i = 0; i < invalidFields.length; i++) {
				invalidFields[i] = null;
			}
			invalidFields = null;

			for (var i = 0; i < fields.length; i++) {
				this._destroyField(fields[i]);
				fields[i] = null;
			}
			fields = null;
			
			this.logExit("destroyFields");
		},

		/**
		 * Adds the input field to the list of invalid fields.
		 * 
		 * @param field
		 *            A field that will be added to the invalid field list.
		 */
		addToInvalidFields: function(field) {
			for (var i = 0; i < this._invalidFields.length; i++) {
				if (this._invalidFields[i].id == field.id) {
					return;
				}
			}
			this._invalidFields.push(field);
		},

		/**
		 * Removes the input field from the list of invalid fields.
		 * 
		 * @param field
		 *            A field that will be removed from the invalid field list.
		 */
		removeFromInvalidFields: function(field) {
			for (var i = 0; i < this._invalidFields.length; i++) {
				if (this._invalidFields[i].id == field.id) {
					this._invalidFields.splice(i, 1);
					break;
				}
			}
		},

		/**
		 * Returns the first invalid field from the list of invalid fields.
		 * 
		 * @return The first invalid field. If there are no invalid fields then <code>null</code> is returned.
		 */
		getFirstInvalidField: function() {
			// Re-check each of the invalid fields.
			for (var i = this._invalidFields.length - 1; i >= 0; i--) {
				this.validateField(this._invalidFields[i]);
			}
			return (this._invalidFields.length > 0) ? this._invalidFields[0] : null;
		},

		/**
		 * @return True if this field is valid, else if it is not valid false is returned.
		 */
		_isFieldValid: function(field) {
			var valid = (field.isHidden() || field.isReadOnly() || !field.isValid || field.isValid(true));
			return valid;
		},

		/**
		 * Retrieves a map of invalid field property names.
		 * 
		 * @return A map of invalid field property names.
		 * @since 2.0.2
		 */
		getInvalidFieldsPropertyIdMap: function() {
			// Remember the IDs of the currently invalid fields, so they can be re-validated after they are recreated.
			var invalidFieldsMap = {};
			for ( var fieldNdx in this._invalidFields) {
				var invalidField = this._invalidFields[fieldNdx];
				invalidFieldsMap[invalidField.get("name")] = true;
			}
			return invalidFieldsMap;
		},

		/**
		 * Looks up each field property name in the passed in map. If the property name entry maps to true, the field is
		 * validated.
		 * 
		 * @since 2.0.2
		 */
		validateFieldsUsingPropertyIdMap: function(propertyIdMap) {
			var fields = this.getFields();

			for ( var fieldNdx in this._fields) {
				var field = this._fields[fieldNdx];

				if (propertyIdMap[field.get("name")]) {
					this.validateField(field);
				}
			}
		},

		/**
		 * @return True if this field is valid, else if it is not valid false is returned.
		 * @since 2.0.2
		 */
		validateField: function(field) {
			var methodName = "validateField";
			this.logEntry(methodName);
			var validField = this._isFieldValid(field);
			if (validField) {
				this.removeFromInvalidFields(field); // The field is valid, remove it from the list of invalid fields.
			} else {
				this.addToInvalidFields(field);
			}
			this.logDebug(methodName, "field: " + field.name + " is " + (validField ? "valid" : "invalid"));
			this.logExit(methodName);
			return validField;
		},

		/**
		 * Validates all of the fields.
		 * 
		 * @return Returns null if all of the fields contain valid values. Otherwise, returns the first field that
		 *         contains an invalid value.
		 */
		validate: function() {
			var methodName = "validate";
			this.logEntry(methodName);
			var invalidField = null;
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				this.logDebug(methodName, "field: " + field.name);
				if (!this._isFieldValid(field)) {
					invalidField = field;
					break;
				}
			}
			this.logExit(methodName);
			return invalidField;
		},

		/**
		 * Validates the modified fields.
		 * 
		 * @return Returns <code>null</code> if all the modified fields contain valid values. Otherwise, returns the
		 *         first modified field that contains an invalid value.
		 */
		validateChangedField: function() {
			var methodName = "validateChangedField";
			this.logEntry(methodName);
			var invalidField = null;
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (field._hasBeenBlurred && !this.validateField(field)) {
					invalidField = field;
					break;
				}
			}
			this.logExit(methodName);
			return invalidField;
		},

		/**
		 * Calls validate on all required fields that are empty.
		 * 
		 * @return Returns <code>null</code> if no required fields contain empty values. Otherwise, returns the first
		 *         required field that contains an empty value.
		 * @since 2.0.2
		 */
		validateRequiredFields: function() {
			var methodName = "validateRequiredFields";
			this.logEntry(methodName);
			var invalidField = null;
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (field.required && field.getValue && (field.getValue() == null || string.trim("" + field.getValue()) == "")) {
					if (!this.validateField(field)) {
						if (invalidField == null) {
							invalidField = field;
						}
					}
				}
			}
			this.logExit(methodName);
			return invalidField;
		}
	});
});

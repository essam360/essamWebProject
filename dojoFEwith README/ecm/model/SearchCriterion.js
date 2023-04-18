/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/string",
	"./_ModelObject",
	"./_AttributeMixin",
	"./_searchUtils"
], function(declare, array, lang, string, _ModelObject, _AttributeMixin, utils) {

	/**
	 * Constructs a search criterion.
	 * 
	 * @param properties
	 *            The properties for the search criterion. The properties can be any of the public fields as defined
	 *            below and on ecm.model._ModelObject.
	 * @name ecm.model.SearchCriterion
	 * @class Represents a field in a search template. The information this class defines include the field name,
	 *        supported operators, initial value, and allowed values. This class also supports setting the operator and
	 *        values when a user fills in a search template.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SearchCriterion", [
		_ModelObject,
		_AttributeMixin
	], {
		/** @lends ecm.model.SearchCriterion.prototype */

		EDIT_PROPERTY: {
			EDITABLE: "editable",
			HIDDEN: "hidden",
			READONLY: "readonly",
			REQUIRED: "required"
		},

		/**
		 * The type of repository that is associated with this criterion.
		 * 
		 * @since 2.0.2
		 */
		repositoryType: null,

		/**
		 * The instance of {@link ecm.model._SearchTemplateBase} that contains this criterion.
		 * 
		 * @since 2.0.2
		 */
		searchTemplate: null,

		/**
		 * An array of operators used for defining search criteria.
		 */
		availableOperators: null,

		/**
		 * The default operator.
		 */
		defaultOperator: "",

		/**
		 * The current operator.
		 */
		selectedOperator: "",

		/**
		 * The data type of the values.
		 */
		dataType: "",

		/**
		 * The format applied to values.
		 */
		format: "",

		/**
		 * The cardinality (SINGLE or MULTIPLE).
		 */
		cardinality: "SINGLE",

		/**
		 * An array of values, and their labels, that can be assigned to the criterion.
		 */
		choiceList: null,

		/**
		 * A P8 marking list for the attribute.
		 */
		markingList: null,

		/**
		 * The default value or values.
		 */
		defaultValue: "",

		/**
		 * The sole value or the first value in the array of values assigned to this criterion. This field should not be
		 * updated directly, use the setValues method instead.
		 * 
		 * @deprecated As of version 2.0.2. Use the first element of the values array, e.g.,
		 *             <code>value = criterion.values && criterion.values.length ? criterion.values[0] : null</code>.
		 */
		value: "",

		/**
		 * An array of values assigned to this criterion. This field should not be updated directly, use the setValues
		 * method instead.
		 */
		values: null,

		/**
		 * Indicates whether the criterion requires a non-empty value.
		 */
		valueRequired: false,

		/**
		 * Indicates whether the criterion is read-only.
		 */
		readOnly: false,

		/**
		 * Indicates whether the criterion is hidden.
		 */
		hidden: false,

		/**
		 * An array of values that can be assigned to the criterion.
		 */
		allowedValues: null,

		/**
		 * The minimum length allowed for a string value.
		 * 
		 * @since 2.0.3
		 */
		minLength: "",

		/**
		 * The maximum length allowed for a string value.
		 */
		maxLength: "",

		/**
		 * The minimum value allowed.
		 */
		minValue: "",

		/**
		 * The maximum value allowed.
		 */
		maxValue: "",

		/**
		 * The criterion's identifier.
		 */
		itemId: "",

		/**
		 * Indicates whether the criterion contains dependent attributes.
		 */
		hasDependentAttributes: false,

		/**
		 * Indicates whether the value is fixed (CMOD only).
		 */
		valueFixed: false,

		/**
		 * The description of the attribute.
		 * 
		 * @since 2.0.2.3
		 */
		description: "",
		
		/**
		 * Returns a human-readable description of the format pattern.
		 * 
		 * @since 3.0
		 */
		formatDescription: "",

		/**
		 * Indicates whether the attribute is text-searchable.
		 * 
		 * @since 2.0.3.1
		 */
		textSearchable: false,

		/**
		 * Indicates whether the attribute's value can be null.
		 * 
		 * @since 2.0.3.1
		 */
		nullable: true,

		/**
		 * Indicates whether the attribute uses a long column (FileNet P8 only).
		 * 
		 * @since 2.0.3.1
		 */
		usesLongColumn: false,

		/**
		 * A custom property editor widget class to use when creating an editor for the attribute within the
		 * {@link ecm.widget.SinglePropertyEditorFactory}. For example: "mywidgets/MyPropertyEditor"
		 * 
		 * @since 2.0.3.4
		 */
		propertyEditor: null,

		/**
		 * @private Included here for compatibility but not published API.
		 */
		constructor: function() {
			if (!this.availableOperators) {
				this.availableOperators = [];
			}
			if (!this.allowedValues) {
				this.allowedValues = [];
			}
			if (!this.defaultOperator) {
				this.defaultOperator = (this.availableOperators && this.availableOperators.length) ? this.availableOperators[0] : "";
			}
			if (!this.selectedOperator) {
				this.selectedOperator = this.defaultOperator;
			}
			if (!this.format) {
				this.format = ecm.model.desktop.valueFormatter.getDefaultFormat(this.dataType == "xs:timestamp" ? "xs:date" : this.dataType);
			}

			if (lang.isArray(this.defaultValue)) {
				this._setValues(this._normalizeValues(this.defaultValue));
			} else if (typeof this.defaultValue != "undefined" && this.defaultValue !== null) {
				this._setValues([
					this.defaultValue
				]);
			} else {
				this._setValues([
					""
				]);
			}
		},

		clone: function() {
			this.logEntry("clone");

			var sc = ecm.model.SearchCriterion();
			for (var p in this) {
				// Clone everything except the search template and repository to avoid cyclic cloning
				if (this.hasOwnProperty(p))
					sc[p] = p == "searchTemplate" || p == "repository" ? this[p] : lang.clone(this[p]);
			}

			this.logExit("clone", sc);
			return sc;
		},

		/**
		 * Sets the values of this criterion.
		 * 
		 * @param values
		 *            An array of values
		 */
		setValues: function(values) {
			this.logDebug("setValues", values);
			var oldValues = this.values;
			this._setValues(values);
			this.onChange(this);
			if (!utils.compareValues(this.values, oldValues, utils.getAttributeInputDataType(this)))
				this.onValueChange();
		},

		/**
		 * Used internally to avoid triggering an onValueChange event for changes that aren't user-driven
		 */
		_setValues: function(values) {
			this.values = values;
			this.value = values ? values[0] : null;
		},

		/**
		 * An event that is triggered when the value is modified.
		 * 
		 * @since 2.0.3
		 */
		onValueChange: function() {
		},

		/**
		 * Restores the default value.
		 */
		resetValue: function() {
			var defaultValue = this.defaultValue;
			if (defaultValue) {
				if (lang.isArray(defaultValue)) {
					this._setValues(this._normalizeValues(defaultValue));
				} else {
					this._setValues([
						defaultValue
					]);
				}
			} else {
				this._setValues([
					""
				]);
			}
		},

		/**
		 * Restores the default operator and value.
		 */
		reset: function() {
			this.resetValue();
			this.selectedOperator = this.defaultOperator;
			this.onChange(this);
		},

		_normalizeValues: function(values) {
			var normalizedValues = new Array();
			array.forEach(values, function(value) {
				normalizedValues.push(value && typeof value == "string" && ecm.model.desktop.trimSearchStrings ? string.trim(value) : value || "");
			});
			return normalizedValues;
		},

		/**
		 * Returns true if the other object is equal to this one.
		 * 
		 * @param searchCriterion
		 *            A {@link ecm.model.SearchCriterion} object
		 */
		equals: function(searchCriterion) {
			if (this.id != searchCriterion.id)
				return false;

			if (this.selectedOperator != searchCriterion.selectedOperator)
				return false;

			return utils.compareValues(this.values, searchCriterion.values, utils.getAttributeInputDataType(searchCriterion));
		}
	});
});

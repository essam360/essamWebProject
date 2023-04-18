/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * Constructor
	 *
	 * @param properties
	 *            The properties for the entry template property option object. The properties can be any of the public
	 *            fields as defined below and on ecm.model._ModelObject.
	 * @name ecm.model.EntryTemplatePropertyOptions
	 * @class Represents the options that are set for a property in an entry template. Property options include the data
	 *        type, default value, cardinality, if a value is required, if the property is displayed, etc.
	 * @augments ecm.model._ModelObject
	 */
	var EntryTemplatePropertyOptions = declare("ecm.model.EntryTemplatePropertyOptions", [
		_ModelObject
	], {
		/** @lends ecm.model.EntryTemplatePropertyOptions.prototype */

		/**
		 * The data type of the property, one of the {@link ecm.model.AttributeDefinition} dataType strings.
		 */
		dataType: null,

		/**
		 * The default value to be used for this property when creating new items.
		 */
		defaultValue: null,

		/**
		 * A boolean value indicating whether a value is required for the property.
		 */
		required: false,

		/**
		 * A boolean value indicating whether the property is read only.
		 */
		readOnly: false,

		/**
		 * A boolean value indicating whether the property should be displayed.
		 */
		hidden: false,

		/**
		 * The cardinality of the property. One of the values in ecm.model.EntryTemplatePropertyOptions.CARDINALITY.
		 */
		cardinality: "SINGLE",

		/**
		 * For an object valued property, the required class is a string that specifies the P8 class of objects that may
		 * be selected.
		 */
		requiredClass: "",

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.id) {
				this.id = this.name;
			}
			if (this.required_template && this.required_template.template_id) {
				this.requiredClass = this.required_template.template_id;
				delete this.required_template;
			}
		}
	});

	EntryTemplatePropertyOptions.CARDINALITY = {
		SINGLE: "SINGLE",
		LIST: "LIST"
	};

	return EntryTemplatePropertyOptions;
});

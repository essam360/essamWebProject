/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./Item"
], function(declare, lang, Item) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model.Item.
	 * @name ecm.model.ChildComponent
	 * @class Represents a content item that is a child component of another content item.
	 * @augments ecm.model.Item
	 */
	return declare("ecm.model.ChildComponent", [
		Item
	], {
		/** @lends ecm.model.ChildComponent.prototype */

		/**
		 * @private Constructor.
		 * @param id
		 *            The identifier of the child component.
		 * @param name
		 *            A displayable name for the child component.
		 * @param repository
		 *            An instance of {@link ecm.model.Repository} for the repository containing the child component.
		 * @param attributes
		 * @param properties
		 * @param resultSet
		 * @param parent
		 * @param attributeTypes
		 * @param attributeFormats
		 */
		constructor: function() {
			if (this.criterias) {
				this.id = this.template_name;
				delete this.template_name;

				this.name = this.template_label;
				delete this.template_label;

				var attributes = {};
				var attributeLabels = {};
				var attributeTypes = [];
				var attributeFormats = [];
				var attributeDefinitions = [];
				var attributeDefinitionsById = {};
				var attributeValueTimeZoneOffsets = {};
				for ( var j in this.criterias) {
					var attribute = this.criterias[j];
					var attributeId = attribute.name;
					attributes[attributeId] = attribute.validValues;
					if (attribute.hasOwnProperty("label")) {
						attributeLabels[attributeId] = attribute.label;
					}
					if (attribute.dataType || attribute.dataType == "") {
						attributeTypes[attributeId] = attribute.dataType;
					}
					if (attribute.format || attribute.format == "") {
						attributeFormats[attributeId] = attribute.format;
					}
					if (attribute.classAttributeDefinition) {
						var attrDef = attribute.classAttributeDefinition.clone();
						if (attribute.hasOwnProperty("label")) {
							attrDef.name = attribute.label;
							attrDef.label = attribute.label;
						}
						if (attribute.hasOwnProperty("readOnly")) {
							attrDef.readOnly = attribute.readOnly;
						}
						if (attribute.hasOwnProperty("required")) {
							attrDef.required = attribute.required;
						}
						if (attribute.hasOwnProperty("hidden")) {
							attrDef.hidden = attribute.hidden;
						}
						if (attribute.hasOwnProperty("minValue")) {
							attrDef.minValue = attribute.minValue;
						}
						if (attribute.hasOwnProperty("maxValue")) {
							attrDef.maxValue = attribute.maxValue;
						}
						if (attribute.hasOwnProperty("minEntry")) {
							attrDef.minLength = attribute.minEntry;
						}
						if (attribute.hasOwnProperty("maxEntry")) {
							attrDef.maxLength = attribute.maxEntry;
						}
						if (attribute.hasOwnProperty("format")) {
							attrDef.format = attribute.format;
						}
						if (attribute.hasOwnProperty("formatDescription")) {
							attrDef.formatDescription = attribute.formatDescription;
						}
						if (attribute.hasOwnProperty("choiceList")) {
							if (attribute.choiceList != "default") {
								attrDef.choiceList = attribute.choiceList;
							}
						}
						if (attribute.hasOwnProperty("hasDependentAttributes")) {
							attrDef.hasDependentAttributes = attribute.hasDependentAttributes;
						}
						attributeDefinitions.push(attrDef);
						attributeDefinitionsById[attributeId] = attrDef;
					}
					if (attribute.valueTimeZoneOffset || attribute.valueTimeZoneOffset === 0) {
						attributeValueTimeZoneOffsets[attributeId] = attribute.valueTimeZoneOffset;
					}
				}
				delete this.criterias;
				this.attributes = attributes;
				this.attributeTypes = attributeTypes;
				this.attributeFormats = attributeFormats;
				this.attributeLabels = attributeLabels;
				this.attributeDefinitions = attributeDefinitions;
				this.attributeDefinitionsById = attributeDefinitionsById;
				this.attributeValueTimeZoneOffsets = attributeValueTimeZoneOffsets;
			}
		}
	});
});

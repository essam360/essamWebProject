/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojox/uuid/generateRandomUuid",
	"ecm/model/AttributeDefinition",
	"./Item"
], function(declare, lang, generateRandomUuid, AttributeDefinition, Item) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model.Item.
	 * @name ecm.model.TemplateMetadata
	 * @class Represents a set of template metadata contained by a content item.
	 * @augments ecm.model.Item
	 */
	return declare("ecm.model.TemplateMetadata", [
		Item
	], {
		/** @lends ecm.model.TemplateMetadata.prototype */
		
		repository: null,
		newTemplate: false,
		
		_customMetadataMaxLength: 4096,

		/**
		 * @private Constructor.
		 */
		constructor: function(response, repository) {
			this.repository = repository;
			var attributes = {};
			var attributeLabels = {};
			var attributeTypes = [];
			var attributeFormats = [];
			var attributeDefinitions = [];
			var attributeValueTimeZoneOffsets = {};
			this.attributeDefinitions = [];
			if (this.criterias) {
				for ( var j in this.criterias) {
					var attribute = this.criterias[j], attrDef;
					if (attribute.isInstanceOf && attribute.isInstanceOf(AttributeDefinition)) {
						attrDef = attribute.clone();
					} else {
						attrDef = new AttributeDefinition();
						attrDef.id = attribute.name;
						if (attribute.hasOwnProperty("label")) {
							attrDef.label = attribute.label;
							attrDef.name = attribute.label;
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
						else if (this.name == "$customMetadata"){
							attrDef.maxLength = this._customMetadataMaxLength;
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
						if (attribute.dataType || attribute.dataType == "") {
							attrDef.dataType = attribute.dataType;
						}
						if (attribute.hasOwnProperty("format")) {
							attrDef.format = attribute.format;
						} else {
							attrDef.format = ecm.model.desktop.valueFormatter.getDefaultFormat(attrDef.dataType);
						}

						attrDef.system = false;
						attrDef.hidden = false;
						attrDef.defaultValue = attribute.values;
						attrDef.valueTimeZoneOffset = attribute.valueTimeZoneOffset;
						attrDef.metadataTemplate = this;
					}
					attributeDefinitions.push(attrDef);
					
					attributes[attrDef.id] = attribute.values;
					attributeLabels[attrDef.id] = attrDef.name;
					attributeTypes[attrDef.id] = attrDef.dataType;
					attributeFormats[attrDef.id] = attrDef.format;
					if (attrDef.valueTimeZoneOffset || attrDef.valueTimeZoneOffset === 0)
						attributeValueTimeZoneOffsets[attrDef.id] = attrDef.valueTimeZoneOffset;
				}
				delete this.criterias;
				this.attributes = attributes;
				this.attributeTypes = attributeTypes;
				this.attributeFormats = attributeFormats;
				this.attributeLabels = attributeLabels;
				this.attributeDefinitions = attributeDefinitions;
				this.attributeValueTimeZoneOffsets = attributeValueTimeZoneOffsets;
			}
		},

		isAttributeHidden: function(attributeId) {
			return false;
		},
		
		addCustomAttributeDefinition: function(){
			
			// Use the current timestamp as the id.
			var newId = generateRandomUuid();
			
			var customAttributeDefinition = new AttributeDefinition({
					id: newId,
					dataType: "xs:string",
					defaultValue: [],
					format: null,
					hidden: false,
					label: "",
					name: "",
					readOnly: false,
					system: false,
					required: false,
					isNew: true,
					maxLength: this._customMetadataMaxLength,
			});
			
			this.attributeDefinitions[newId] = customAttributeDefinition;
			return(customAttributeDefinition);
		},
	});
});

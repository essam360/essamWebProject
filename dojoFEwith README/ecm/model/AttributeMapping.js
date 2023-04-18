/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/model/_ModelObject",
	"ecm/model/AttributeDefinition",
	"ecm/model/ChildComponentDefinition",
	"ecm/model/SearchConfiguration",
	"ecm/model/_searchUtils"
], function(array, declare, lang, _ModelObject, AttributeDefinition, ChildComponentDefinition, SearchConfiguration, utils) {

	/**
	 * @private Constructs an attribute mapping.
	 * @param properties
	 *            The properties for the attribute mapping. The properties can be any of the public fields as defined
	 *            below and on ecm.model._ModelObject.
	 * @name ecm.model.AttributeMapping
	 * @class Represents a mapping of attributes that is used to define the search criteria of a unified search.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.2
	 */
	var AttributeMapping =  declare("ecm.model.AttributeMapping", _ModelObject, {
		/** @lends ecm.model.AttributeMapping.prototype */

		/**
		 * An array of {@link ecm.model.AttributeDefinition}, {@link ecm.model.ChildComponentDefinition} or
		 * {@link ecm.model.SearchCriterion} objects that are mapped together.
		 */
		mappedAttributes: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.mappedAttributes)
				this.mappedAttributes = [];
		},

		/**
		 * Returns a pseudo {@link ecm.model.AttributeDefinition} object that can be used to represent this mapping in
		 * search criteria.
		 */
		toAttributeDefinition: function() {
			var attrib = null;
			if (this.mappedAttributes && this.mappedAttributes.length > 0) {
				var firstMappedAttrib = this.mappedAttributes[0];
				if (this.mappedAttributes.length == 1) {
					// Clone and rebrand the attribute
					attrib = firstMappedAttrib.clone();
					attrib.id = this.id;
					attrib.name = this.name;
					attrib.repository = utils.getAttributeRepository(firstMappedAttrib);
					attrib.searchable = utils.isAttributeSearchable(firstMappedAttrib);
					attrib.hasDependentAttributes = false; // not supported
					attrib._unviewable = !!attrib.metadataTemplate;
					if (attrib.dataType == "xs:string") {
						var searchConfig = SearchConfiguration.getSearchConfiguration();
						if (searchConfig.isUserProperty(firstMappedAttrib.id, attrib.repositoryType))
							attrib.dataType = "xs:user";
					}
				} else {
					// Unify mapped attributes
					var repositoryType, format, defaultValue, valueFixed, valueRequired, dataType, minValue, maxValue, orderable, searchable, boxSearchable, viewable;
					array.forEach(this.mappedAttributes, function(mappedAttrib) {
						// Use the repository type, format and data type only if common to all mapped attributes
						if (repositoryType === undefined)
							repositoryType = mappedAttrib.repositoryType;
						else if (!mappedAttrib.repositoryType || mappedAttrib.repositoryType != repositoryType)
							repositoryType = "";
						if (format === undefined)
							format = mappedAttrib.format;
						else if (!mappedAttrib.format || mappedAttrib.format != format)
							format = "";
						if (dataType === undefined)
							dataType = mappedAttrib.dataType;
						else if (mappedAttrib.dataType != dataType)
							dataType = "";
						if (mappedAttrib.repositoryType != "box") {
							if (orderable === undefined)
								orderable = "orderable" in mappedAttrib ? mappedAttrib.orderable : true;
							else if ("orderable" in mappedAttrib && mappedAttrib.orderable != orderable)
								orderable = false;
						}
						if (utils.isAttributeSearchable(mappedAttrib)) {
							searchable = true;
							if (mappedAttrib.repositoryType == "box")
								boxSearchable = true;
						}
						if (!mappedAttrib.metadataTemplate)
							viewable = true;

						// Determine if the value should be fixed or required
						if (mappedAttrib.valueFixed) {
							defaultValue = mappedAttrib.defaultValue;
							valueFixed = true;
						} else if (mappedAttrib.valueRequired) {
							valueRequired = true;
						}
					});

					if (boxSearchable)
						repositoryType = "box";

					if (!dataType) { // mixed types
						dataType = utils.findDataTypeLCD(searchable ? array.filter(this.mappedAttributes, "return this.isAttributeSearchable(item)", utils) : this.mappedAttributes);
						if (!dataType)
							dataType = firstMappedAttrib.dataType;
						else if (dataType == "xs:timestamp")
							dataType = "xs:date";
					}

					attrib = new AttributeDefinition({
						id: this.id,
						name: this.name,
						format: format || ecm.model.desktop.valueFormatter.getDefaultFormat(dataType),
						repositoryType: repositoryType || "",
						dataType: dataType,
						cardinality: firstMappedAttrib.cardinality,
						defaultValue: defaultValue || "",
						valueFixed: !!valueFixed,
						valueRequired: !!valueRequired,
						availableOperators: utils.calculateOperatorIntersection(this.mappedAttributes),
						minValue: minValue,
						maxValue: maxValue,
						orderable: !!orderable,
						searchable: !!searchable,
						_unviewable: !viewable
					});
				}

				attrib._isPseudo = true;
				if (utils.inputTimestampAsDate(attrib))
					attrib.format = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date");
				else if (utils.inputMultiValueTimestampAsDateTime(attrib))
					attrib.format = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:timestamp");
				attrib.dataType = utils.normalizeDataType(attrib, true);
			}

			return attrib;
		},

		/**
		 * Returns the attribute that belongs to a repository.
		 * 
		 * @param repositoryId
		 *            A string value holding the repository Id
		 */
		getRepositoryAttribute: function(repositoryId) {
			if (!this.mappedAttributes || this.mappedAttributes.length == 0)
				return null;
			if (!this._attributesMap)
				this._attributesMap = {};
			if (this._attributesMap[repositoryId])
				return this._attributesMap[repositoryId];

			var repoAttrib = null;
			array.some(this.mappedAttributes, function(attrib) {
				var repository = utils.getAttributeRepository(attrib);
				var found = repository && repository.id == repositoryId;
				if (found)
					repoAttrib = attrib;

				return found;
			});
			this._attributesMap[repositoryId] = repoAttrib;

			return repoAttrib;
		},

		/**
		 * Returns true if the other object is equal to this one.
		 * 
		 * @param attributeMapping
		 *            An {@link ecm.model.AttributeMapping} object
		 */
		equals: function(attributeMapping) {
			if (!attributeMapping)
				return false;

			if (this.id != attributeMapping.id)
				return false;

			if (this.name != attributeMapping.name)
				return false;

			if (this.mappedAttributes instanceof Array != attributeMapping.mappedAttributes instanceof Array)
				return false;

			if (this.mappedAttributes instanceof Array) {
				if (this.mappedAttributes.length != attributeMapping.mappedAttributes.length)
					return false;

				return array.every(this.mappedAttributes, function(attrib) {
					return array.some(attributeMapping.mappedAttributes, function(otherAttrib) {
						var repository = utils.getAttributeRepository(attrib);
						var otherRepository = utils.getAttributeRepository(otherAttrib);
						var templateMismatch = !attrib.metadataTemplate != !otherAttrib.metadataTemplate || (attrib.metadataTemplate && attrib.metadataTemplate.id != otherAttrib.metadataTemplate.id);
						return attrib.id == otherAttrib.id && repository.id == otherRepository.id && !templateMismatch;
					});
				});
			}

			return true;
		},

		/**
		 * Returns the JSON representation of this mapping.
		 */
		toJson: function() {
			var json = {
				id: this.id,
				name: this.name,
				dataType: "",
				properties: []
			};

			array.forEach(this.mappedAttributes, function(attrib) {
				if (!json.dataType)
					json.dataType = attrib.isInstanceOf && attrib.isInstanceOf(ChildComponentDefinition) ? "xs:childcomponent" : this.toAttributeDefinition().dataType;
				json.properties.push({
					repository: utils.getAttributeRepository(attrib).id,
					metadataTemplate: attrib.metadataTemplate ? attrib.metadataTemplate.id : null,
					property: attrib.id,
					dataType: attrib.dataType || json.dataType,
					orderable: attrib.orderable || false,
					searchable: utils.isAttributeSearchable(attrib)
				});
			}, this);

			return json;
		},

		/**
		 * Returns a clone of this mapping.
		 */
		clone: function() {
			var clone = new AttributeMapping({
				id: this.id,
				name: this.name
			});
			lang.mixin(clone, this);
			clone.mappedAttributes = this.mappedAttributes ? [].concat(this.mappedAttributes) : null;
			return clone;
		}
	});
	
	return AttributeMapping;
});

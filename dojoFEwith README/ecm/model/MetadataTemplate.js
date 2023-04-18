/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"./_ModelObject",
	"./_HasAttributesMixin"
], function(declare, array, lang, _ModelObject, _HasAttributesMixin) {

	/**
	 * Constructs a metadata template.
	 * 
	 * @param properties
	 *            The properties of the metadata template. The properties can be any of the public fields as defined below
	 *            and on {@link ecm.model._ModelObject}.
	 * @name ecm.model.MetadataTemplate
	 * @class Represents a logical grouping of attribute definitions that is used to classify items in a Box repository.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.MetadataTemplate", [
		_ModelObject,
		_HasAttributesMixin
	], {
		/** @lends ecm.model.MetadataTemplate.prototype */

		/**
		 * An instance of {@link ecm.model.Repository} for the Box repository containing the template.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.model.AttributeDefinition} objects for the attributes of this template.
		 */
		attributeDefinitions: null,

		/**
		 * An object that references, by attribute name, the {@link ecm.model.AttributeDefinition} objects for the
		 * attributes of this template.
		 */
		attributeDefinitionsById: null,

		/**
		 * A boolean value indicating if EDS is enabled for this template.
		 */
		edsIsEnabled: false,
		
		/**
		 * The name of the service that is used to retrieve the attribute definitions.
		 */
		retrieveAttributeDefinitionsService: "openMetadataTemplate",

		_retrieveAttributeDefinitionsCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveAttributeDefinitionsCompleted");

			this.inherited(arguments);

			// Update data that may not have been retrieved when this template was first created
			lang.mixin(this, response);

			// Remove response parameters brought in by the mixin call that have already been consumed
			delete this.criterias;
			
			// Remove properties that don't belong
			delete this.childComponentDefinitions;

			this.logExit("_retrieveAttributeDefinitionsCompleted");
		},
		
		_createAttributeDefinitions: function(response) {
			var attributes = this.inherited(arguments);
			array.forEach(attributes, function(attrib) {
				attrib.contentClass = null;
				attrib.metadataTemplate = this;
			}, this);
			
			return attributes;
		},

		/**
		 * Returns a clone of this template. All contents are cloned except for the repository (the reference is copied instead).
		 */
		clone: function() {
			var clone = new ecm.model.MetadataTemplate({
				id: this.id,
				name: this.name
			});

			for (var prop in this) {
				if (!this.hasOwnProperty(prop))
					continue;

				if (prop == "repository" || !this[prop])
					clone[prop] = this[prop];
				else if (prop == "attributeDefinitions")
					clone[prop] = array.map(this[prop], "return item.clone();");
				else if (prop != "attributeDefinitionsById") // recreated bellow using the cloned attribute definitions
					clone[prop] = lang.clone(this[prop]);
			}

			if (clone.attributeDefinitions) {
				clone.attributeDefinitionsById = {};
				array.forEach(clone.attributeDefinitions, "this.attributeDefinitionsById[item.id] = item;", clone);
			}

			return clone;
		}
	});
});

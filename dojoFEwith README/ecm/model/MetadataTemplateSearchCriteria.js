/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"./_ModelObject"
], function(declare, array, _ModelObject) {

	/**
	 * Constructs a metadata template search criteria object.
	 *
	 * @param properties
	 *            The properties of the metadata template search criteria object. The properties can be any of the public fields as defined below
	 *            and on {@link ecm.model._ModelObject}.
	 * @name ecm.model.MetadataTemplateSearchCriteria
	 * @class Represents the search criteria of a Box metadata template.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.MetadataTemplateSearchCriteria", [
		_ModelObject
	], {
		/** @lends ecm.model.MetadataTemplateSearchCriteria.prototype */

		/**
		 * An array of {@link ecm.model.SearchCriterion} objects.
		 */
		searchCriteria: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.searchCriteria)
				this.searchCriteria = [];
		},

		/**
		 * Returns a copy of this object.
		 */
		clone: function() {
			var clone = new ecm.model.MetadataTemplateSearchCriteria(this.id, this.name);
			clone.searchCriteria = array.map(this.searchCriteria, "return item.clone();");
			
			return clone;
		},

		/**
		 * Returns true if the given object is equal to this one.
		 * 
		 * @param metadataTemplateSearchCriteria
		 *            An {@link ecm.model.MetadataTemplateSearchCriteria} object
		 */
		equals: function(metadataTemplateSearchCriteria) {
			if (this.id != metadataTemplateSearchCriteria.id)
				return false;
			if ((this.searchCriteria instanceof Array) != (metadataTemplateSearchCriteria.searchCriteria instanceof Array))
				return false;
			if (this.searchCriteria instanceof Array) {
				if (this.searchCriteria.length != metadataTemplateSearchCriteria.searchCriteria.length)
					return false;
				if (!array.every(this.searchCriteria, function(criterion, i) { return criterion.equals(metadataTemplateSearchCriteria.searchCriteria[i]); }))
					return false;
			}

			return true;
		}
	});
});

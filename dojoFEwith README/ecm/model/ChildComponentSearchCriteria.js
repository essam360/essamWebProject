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
	 * Constructs the child component search criteria object.
	 *
	 * @param properties
	 *            The properties for object. The properties can be any of the public fields as defined below and on
	 *            ecm.model.Item and ecm.model._ModelObject.
	 * @name ecm.model.ChildComponentSearchCriteria
	 * @class Represents the definition of a child component in the criteria for a search template. This class is
	 *        specific to IBM Content Manager repositories.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ChildComponentSearchCriteria", [
		_ModelObject
	], {
		/** @lends ecm.model.ChildComponentSearchCriteria.prototype */

		/**
		 * An array of {@link ecm.model.SearchCriterion} for the child component.
		 */
		searchCriteria: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.searchCriteria) {
				this.searchCriteria = [];
			}
		},

		/**
		 * Makes a copy of this child component search criteria.
		 */
		clone: function() {
			var childComponent = new ecm.model.ChildComponentSearchCriteria(this.id, this.name);

			var searchCriteria = [];
			for ( var i in this.searchCriteria) {
				searchCriteria.push(this.searchCriteria[i].clone());
			}
			childComponent.searchCriteria = searchCriteria;

			return childComponent;
		},

		equals: function(childComponentCriteria) {
			if (this.id != childComponentCriteria.id)
				return false;
			if ((this.searchCriteria instanceof Array) != (childComponentCriteria.searchCriteria instanceof Array))
				return false;
			if (this.searchCriteria instanceof Array) {
				if (this.searchCriteria.length != childComponentCriteria.searchCriteria.length)
					return false;
				if (!array.every(this.searchCriteria, function(criterion, i) { return criterion.equals(childComponentCriteria.searchCriteria[i]); }))
					return false;
			}

			return true;
		}
	});
});

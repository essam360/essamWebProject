/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/json",
	"./_ModelObject",
	"./ODSavedSearchCriterion"
], function(declare, dojojson, _ModelObject, ODSavedSearchCriterion) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.ODSavedSearch
	 * @class Represents the search criteria for a saved search in an IBM Content Manager OnDemand repository.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ODSavedSearch", [
		_ModelObject
	], {
		/** @lends ecm.model.ODSavedSearch.prototype */

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		/**
		 * A string holding the search template name.
		 */
		templateName: null,

		/**
		 * A boolean flag indicating whether the search is public.
		 */
		isPublic: false,

		/**
		 * A boolean flag indicating whether the search is a n anded search.
		 */
		andSearch: true,

		/**
		 * The search criteria
		 */
		searchCriteria: null,

		/**
		 * @private Constructor used internally
		 */
		constructor: function() {
			// Convert JSON data.
			if (this.saved_criterias) {
				this._populateCriteria(this.saved_criterias);
				delete this.saved_criterias;
			}

			this.logExit("constructor");
		},

		_populateCriteria: function(criteriaJSON) {
			this.logEntry("_populateCriteriaFromJSON");
			this.searchCriteria = new Object();

			for ( var i in criteriaJSON) {
				criteriaJSON[i].id = criteriaJSON[i].name;
				var criterion = new ODSavedSearchCriterion(criteriaJSON[i]);
				this.searchCriteria[criteriaJSON[i].name] = criterion;
			}

			this.logExit("_populateCriteriaFromJSON");
		},

		toJson: function() {
			this.logEntry("toJson");

			var jsonTemplate = {};
			jsonTemplate.id = this.id;
			jsonTemplate.name = this.name;
			jsonTemplate.andSearch = this.andSearch;
			jsonTemplate.query_name = this.name;
			jsonTemplate.query_public = this.isPublic;
			jsonTemplate.template_name = this.templateName;

			jsonTemplate.saved_criterias = [];
			for ( var i in this.searchCriteria) {
				var jsonCriterion = new Object();
				jsonCriterion.name = criterion.id;
				jsonCriterion.operator = criterion.selectedOperator;
				jsonCriterion.values = criterion.values;
				jsonTemplate.saved_criterias.push(jsonCriterion);
			}

			var json = dojojson.toJson(jsonTemplate);
			this.logExit("toJson", json);

			return json;
		}
	});
});

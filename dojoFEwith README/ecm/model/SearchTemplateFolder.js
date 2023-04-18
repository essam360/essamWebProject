/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject",
	"./SearchTemplate",
	"./UnifiedSearchTemplate"
], function(declare, _ModelObject, SearchTemplate, UnifiedSearchTemplate) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.SearchTemplateFolder
	 * @class Represents a folder that contains search templates. For IBM Content Manager OnDemand, the
	 *        SearchTemplateFolder object is equivalent to a cabinet.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SearchTemplateFolder", [
		_ModelObject
	], {
		/** @lends ecm.model.SearchTemplateFolder.prototype */

		/**
		 * The description text
		 */
		description: null,

		/**
		 * A {@link ecm.model.Repository} object
		 */
		repository: null,

		/**
		 * A {@link ecm.model.Teamspace} object
		 */
		teamspace: null,

		/**
		 * Clears the search template cache.
		 */
		clearSearchTemplates: function() {
			this.logEntry("clearTemplates");

			this._templates = null;

			if (this.id == "all") {
				if (this._isUsingTeamspaceSearches())
					this.teamspace.clearSearchTemplates();
				else
					this.repository.clearSearchTemplates();
			}

			this.logExit("clearTemplates");
		},

		_isUsingTeamspaceSearches: function() {
			return this.teamspace && this.teamspace.searchTemplates instanceof Array && this.teamspace.searchTemplates.length > 0;
		},

		/**
		 * Retrieve the search templates from the repository, will return search template for the teamspace if the
		 * teamspace property has been set.
		 * 
		 * @param callback
		 *            A callback function called after the search templates have been retrieved. Passes an array of
		 *            {@ ecm.model.SearchTemplate} objects as a parameter.
		 */
		retrieveSearchTemplates: function(callback) {
			this.logEntry("retrieveSearchTemplates");
			if (this.id == "all") {
				var request = null;
				// use the teamspace only if it has default searches
				if (this._isUsingTeamspaceSearches())
					request = this.teamspace.retrieveSearchTemplates(callback);
				else
					request = this.repository.retrieveSearchTemplates(callback);
			} else {
				var self = this;

				if (this._templates) {
					if (callback)
						callback(this._templates);
				} else {
					var request = ecm.model.Request.invokeService("openCabinet", this.repository.type, {
						repositoryId: this.repository.id,
						cabinet_name: this.name
					}, function(response) {
						self._retrieveSearchTemplatesCompleted(response, callback);
					});
				}
			}
			this.logExit("retrieveSearchTemplates");
			return request;
		},

		_retrieveSearchTemplatesCompleted: function(response, callback) {
			this.logEntry("_retrieveSearchTemplatesCompleted");

			var items = response.rows;
			this._templates = [];
			for ( var i in items) {
				var factory = ecm.model.UnifiedSearchTemplate.instanceOf(items[i], this.repository) ? ecm.model.UnifiedSearchTemplate : ecm.model.SearchTemplate;
				var template = factory.createFromJSON(items[i], this.repository);
				this._templates.push(template);
			}

			if (callback)
				callback(this._templates);

			this.logExit("_retrieveSearchTemplatesCompleted");
		}
	});
});

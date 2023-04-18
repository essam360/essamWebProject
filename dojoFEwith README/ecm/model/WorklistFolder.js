/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject",
	"./Worklist"
], function(declare, _ModelObject, Worklist) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.WorklistFolder
	 * @class Represents a collection of work lists. The type of collection depends on whether the workflow is for IBM
	 *        Content Manager document routing or Business Process Management.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.WorklistFolder", [
		_ModelObject
	], {
		/** @lends ecm.model.WorklistFolder.prototype */

		/**
		 * A description to use for the work list.
		 */
		description: "",

		/**
		 * An instance of {@link ecm.model.Repository} for the repository containing or owning this work list.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.model.Worklist} objects.
		 */
		worklists: null,

		/**
		 * Retrieves a array of CM Worklist objects.
		 * 
		 * @param callback
		 *            A function, invoked when the in-baskets have been retrieved. An array of
		 *            {@link ecm.model.Worklist} objects are passed to the function.
		 */
		retrieveWorklists: function(callback) {
			this.logEntry("retrieveWorklists");
			if (this.worklists) {
				callback(this.worklists);
			} else if (this.id == "all") {
				var request = this.repository.retrieveWorklists(callback);
			} else {
				var self = this;
				var request = ecm.model.Request.invokeService("openWorklistFolder", this.repository.type, {
					repositoryId: this.repository.id,
					folder_name: this.id
				}, function(response) {
					self._retrieveWorklistsCompleted(response, callback);
				});
			}
			this.logExit("retrieveWorklists");
			return request;
		},

		_retrieveWorklistsCompleted: function(response, callback) {
			this.logEntry("_retrieveWorklistsCompleted");
			this.worklists = [];
			for ( var i in response.datastore.items) {
				var templateJSON = response.datastore.items[i];
				var template = new Worklist({
					id: templateJSON.template_name,
					name: templateJSON.template_label,
					description: templateJSON.template_desc,
					repository: this.repository
				});
				this.worklists.push(template);
			}
			callback(this.worklists);
			this.logExit("_retrieveWorklistsCompleted");
		}
	});
});

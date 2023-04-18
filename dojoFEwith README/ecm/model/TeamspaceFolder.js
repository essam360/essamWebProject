/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ModelObject",
	"./Teamspace"
], function(declare, lang, _ModelObject, Teamspace) {

	/**
	 * Constructor
	 *
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.TeamspaceFolder
	 * @class Represents a collection of teamspaces.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.TeamspaceFolder", [
		_ModelObject
	], {
		/** @lends ecm.model.TeamspaceFolder.prototype */

		/**
		 * The description of the teamspace folder collection.
		 */
		description: null,

		/**
		 * A {@link ecm.model.Repository} object
		 */
		repository: null,

		/**
		 * Retrieves the teamspaces in this collection.
		 *
		 * @param callback
		 *            A function invoked after the teamspaces are retrieved. An array of {@link ecm.model.Teamspace}
		 *            objects is provided as the only argument.
		 */
		retrieveTeamspaces: function(callback) {
			this.logEntry("retrieveTeamspaces");
			var request = ecm.model.Request.invokeService("getWorkspaces", this.repository.type, {
				repositoryId: this.repository.id,
				workspace_name: this.id
			}, lang.hitch(this, function(response) {
				this._retrieveTeamspacesCompleted(response, callback);
			}));
			this.logExit("retrieveTeamspaces");
			return request;
		},

		_retrieveTeamspacesCompleted: function(response, callback) {
			this.logEntry("_retrieveTeamspacesCompleted");
			var teamspaces = [];
			for ( var i in response.workspaces) {
				var teamspacesJSON = response.workspaces[i];
				teamspacesJSON.repository = this.repository;

				var teamspace = new Teamspace(teamspacesJSON);
				teamspaces.push(teamspace);
			}
			callback(teamspaces);

			this.logExit("_retrieveTeamspacesCompleted");
		}
	});
});

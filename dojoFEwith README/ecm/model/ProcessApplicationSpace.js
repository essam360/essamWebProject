/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/json",
	"./WorklistFolder",
	"./ProcessRole"
], function(declare, lang, dojojson, WorklistFolder, ProcessRole) {

	/**
	 * @name ecm.model.ProcessApplicationSpace
	 * @class Represents a list of process roles that determine who can access a process application and who can use
	 *        specific functionality within that application.
	 * @augments ecm.model.WorklistFolder
	 */
	return declare("ecm.model.ProcessApplicationSpace", [
		WorklistFolder
	], {
		/** @lends ecm.model.ProcessApplicationSpace.prototype */

		/**
		 * A string value holding the original authored name of the application space (since 2.0.2.3). The displayed
		 * name can be altered with the Admin customized label settings.
		 */
		auth_name: null,

		/**
		 * A string value defining the Process Engine connection point to use for this repository. (Optional)
		 * <p>
		 * This connection point overrides the connection point that is configured on this repository in the IBM Content
		 * Navigator administration tool.
		 * </p>
		 */
		connectionPoint: null,

		/**
		 * Retrieves the process roles that are part of this application space.
		 * 
		 * @param callback
		 *            A function that is invoked when the process roles have been retrieved. It is passed an array of
		 *            {@link ecm.model.ProcessRole} objects.
		 * @param includeMembers
		 *            A boolean flag indicating whether the role members should also be returned with each role. Default
		 *            is false, no members will be returned.
		 * @param accessFlag
		 *            A string value indicating what type of roles list to retrieve (optional). If not set (or null),
		 *            will retrieve the roles the current user is a participant in. if set, values can be
		 *            <ol>
		 *            <li>"write" - Fetch only role names where the current user has Write permission to the
		 *            application space</li>
		 *            <li>"read" - Fetch only role names where the current user has Write permission to the application
		 *            space, or is a participant in any roles in the application space</li>
		 *            </ol>
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process.
		 * @param onError
		 *            A callback function called if there is an error returned when updating this item.
		 */
		retrieveWorklists: function(callback, includeMembers, accessFlag, isBackgroundRequest, onError) {
			this.logEntry("retrieveWorklists");
			if (this._processRoles && includeMembers == undefined) {
				callback(this._processRoles);
			} else if (this._processRoles && (includeMembers && this._processRoles.participants)) {
				callback(this._processRoles); // Already has members
			} else {
				var requestParams = {
					repositoryId: this.repository.id,
					connection_point: this.connectionPoint,
					include_members: includeMembers ? "true" : "false",
					access_flag: accessFlag
				};
				if (this.auth_name) {
					requestParams.appspace_name = encodeURIComponent(this.auth_name);
				} else {
					requestParams.appspace_name = encodeURIComponent(this.name); // For backward compatibility
				}
				var self = this;
				var request = ecm.model.Request.invokeService("getProcessRoles", this.repository.type, requestParams, function(response) {
					self._retrieveWorklistsCompleted(response, callback);
				}, false, false, onError, isBackgroundRequest ? isBackgroundRequest : false);
			}
			this.logExit("retrieveWorklists");
			return request;
		},

		_retrieveWorklistsCompleted: function(response, callback) {
			this.logEntry("_retrieveWorklistsCompleted");
			this._processRoles = [];
			if (response.datastore && response.datastore.items) {
				for ( var i in response.datastore.items) {
					var templateJSON = response.datastore.items[i];
					templateJSON.repository = this.repository;
					templateJSON.connectionPoint = this.connectionPoint;
					templateJSON.parent = this;

					var template = new ProcessRole(templateJSON);
					this._processRoles.push(template);
				}
			}
			callback(this._processRoles);
			this.logExit("_retrieveWorklistsCompleted");
		},

		/**
		 * Save the modification that have been made to the ProcessRole member ship from this application space.
		 * 
		 * @param roles
		 *            An array of {Object} objects containing the role member values.
		 * @param callback
		 *            A function that is called when the saving the application space roles has completed.
		 */
		saveProcessRoles: function(roles, callback) {
			this.logEntry("saveProcessRoles");
			var requestParams = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint
			};
			if (this.auth_name) {
				requestParams.appspace_name = encodeURIComponent(this.auth_name);
			} else {
				requestParams.appspace_name = encodeURIComponent(this.name); // For backward compatibility
			}
			var self = this;
			var request = ecm.model.Request.postService("saveProcessRoles", this.repository.type, requestParams, "text/json", dojojson.stringify(roles), lang.hitch(this, function(response) {
				self._saveProcessRolesCompleted(response, callback);
			}));

			this.logExit("saveProcessRoles");
		},

		_saveProcessRolesCompleted: function(response, callback) {
			this.logEntry("_saveProcessRolesCompleted");
			if (callback) {
				callback();
			}
			this.logExit("_saveProcessRolesCompleted");
		}
	});
});

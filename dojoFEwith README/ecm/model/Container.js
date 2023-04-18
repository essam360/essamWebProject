/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject",
	"./Request"
], function(declare, _ModelObject, Request) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Container
	 * @class Represents the information that is used to authenticate with an application server.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.Container", [
		_ModelObject
	], {
		/** @lends ecm.model.Container.prototype */

		/**
		 * A boolean flag set to true if this user is connected through this container.
		 */
		connected: false,

		/**
		 * Type of container.
		 */
		type: "container",

		/**
		 * @deprecated Was never used or set internally. Use userId instead.
		 */
		userid: null,

		/**
		 * The user Id for the user logged into the container. (Valid when connected.)
		 */
		userId: null,

		/**
		 * The full, display user name for the user logged into the container. (Valid when connected.)
		 */
		userDisplayName: null,

		/**
		 * The login name used to login to the container. (Valid when connected.)
		 * 
		 * @since 2.0.3.8
		 */
		userLoginName: null,

		/**
		 * The full user Id including realm information. (Valid when connected.)
		 * 
		 * @since 2.0.3.8
		 */
		fullUserId: null,

		/**
		 * The desktop object {@link ecm.model.Desktop}
		 * 
		 * @deprecated Use global ecm.model.desktop reference instead.
		 */
		desktop: null,

		/**
		 * Event function, called when the repository has changed or cached information has been cleared due to a call
		 * to refresh.
		 * 
		 * @param modelObject
		 *            The instance of the particular ecm.model object that changed. This could be this repository object
		 *            or a nested object.
		 */
		onChange: function(modelObject) {
			ecm.model.desktop.onChange(modelObject);
		},

		/**
		 * An event function that is invoked when login completes successfully.
		 */
		onConnected: function(container) {
			this.logDebug("onConnected");
		},

		/**
		 * An event function that is invoked when logout completes successfully.
		 */
		onDisconnected: function(repository) {
			this.logDebug("onDisconnected");
		},

		/**
		 * An event function that is invoked when teamspace templates have been added successfully.
		 * 
		 * @deprecated Use Repository onAddTeamspaceTemplate event.
		 */
		onAddTeamspaceTemplate: function(repository) {
			this.logDebug("onAddTeamspaceTemplate");
		},

		/**
		 * An event function that is invoked when worklist containers are retrieved successfully.
		 * 
		 * @deprecated Use Repository onWorklistContainersRetrieved event.
		 */
		onWorklistContainersRetrieved: function(repository) {
			this.logDebug("onWorklistContainersRetrieved");
		},

		/**
		 * Triggered when the list of teamspaces have been changed.
		 * 
		 * @deprecated Use Repository onTeamspaceListChange event.
		 */
		onTeamspaceListChange: function(repository) {
			this.logDebug("onTeamspaceListChange");
		},

		/**
		 * Triggered when the list of teamspace templates have been changed.
		 * 
		 * @deprecated Use Repository onTeamspaceTemplateListChange event.
		 */
		onTeamspaceTemplateListChange: function(repository) {
			this.logDebug("onTeamspaceTemplateListChange");
		},

		/**
		 * An event function that is invoked when a teamspace has been added successfully.
		 * 
		 * @deprecated Use Repository onAddTeamspace event.
		 */
		onAddTeamspace: function(repository) {
			this.logDebug("onAddTeamspace");
			// after the teamspace is added refresh the teamspace templates
		},

		/**
		 * Connects to the server and authenticates with the provided password.
		 * 
		 * @param password
		 *            The password to use for login.
		 * @param callback
		 *            A function that is invoked on successfully logging on to the server.
		 */
		containerLogon: function(password, callback) {
			this.logEntry("containerLogon");
			var self = this;
			var enableSecureService = Request.enableSecureService;
			Request.enableSecureService = true;
			var request = Request.invokeService("logon", this.type, {
				desktop: ecm.model.desktop.id,
				repositoryId: ecm.model.desktop.getDefaultRepositoryId(),
				userid: this.userId,
				password: password
			}, function(response) {
				Request.enableSecureService = enableSecureService;
				self._containerLogonCompleted(response, callback);
			});
			this.logExit("containerLogon");
			return request;
		},

		_containerLogonCompleted: function(response, callback) {
			this.logEntry("_containerLogonCompleted");
			this.connected = true;
			// Remember the login name that was entered by the user.
			this.userLoginName = response.userLoginName || this.userId || response.userid || response.userID;
			// Update the user Id.
			this.userId = response.userid || response.userID;
			this.userDisplayName = response.user_displayname;
			this.fullUserId = response.fullUserId;
			if (response.adminLayout) {
				if (!response.adminLayout.featureTooltip)
					response.adminLayout.featureTooltip = ecm.messages.launchbar_admin;
				ecm.model.desktop.createAdminFeature(response.adminLayout);
			}

			this.onChange(this);
			this.onConnected(this);

			if (callback) {
				callback(this);
			}
			this.logExit("_containerLogonCompleted");
		},

		/**
		 * Disconnects from the server.
		 */
		containerLogoff: function() {
			this.logEntry("containerLogoff");
			var self = this;
			var request = Request.invokeService("logoff", this.type, {
				desktop: ecm.model.desktop.id
			}, function(response) {
				this.connected = false;
				this.onDisconnected();
			});
			this.logExit("containerLogoff");
			return request;
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ConfigurationObject"
], function(declare, lang, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.DesktopAccessConfig
	 * @class Represents the configuration for access control of a desktop.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @public
	 * @since 2.0.2
	 */
	var DesktopAccessConfig = declare("ecm.model.admin.DesktopAccessConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.DesktopAccessConfig.prototype */

		REPOSITORY_TYPE: "repositoryType",
		USERS: "users",
		GROUPS: "groups",
		DENYUSERS: "denyUsers",

		constructor: function(id, name) {
			this.logDebug("DesktopAccessConfig constructor");
		},

		getRepositoryType: function() {
			return this.getValue(this.REPOSITORY_TYPE);
		},

		setRepositoryType: function(repositoryType) {
			this.setValue(this.REPOSITORY_TYPE, repositoryType);
		},

		getUsers: function() {
			return this.getValue(this.USERS);
		},

		setUsers: function(names) {
			this.setValue(this.USERS, names);
		},

		getGroups: function() {
			return this.getValue(this.GROUPS);
		},

		setGroups: function(names) {
			this.setValue(this.GROUPS, names);
		},

		getDenyUsers: function() {
			return this.getValue(this.DENYUSERS);
		},

		setDenyUsers: function(names) {
			this.setValue(this.DENYUSERS, names);
		},

		getDesktopAccess: function(serverType, callback, synchronous, extraParams) {
			this.logEntry(arguments.callee.nom);
			var params = this._mixin([
				{
					action: "getDesktopAccess",
					serverType: serverType,
					id: this.id,
					configuration: this.name
				},
				this.default_params,
				extraParams
			]);
			var self = this;
			var request = ecm.model.Request.invokeService("getDesktopAccess", null, params, function(response) { // onFinished
				var groupIds = [];
				if (response.groups) {
					for (var i = 0; i < response.groups.length; i++) {
						groupIds.push(response.groups[i].id);
					}
				}
				self.setGroups(groupIds);

				var userIds = [];
				if (response.users) {
					for (var i = 0; i < response.users.length; i++) {
						userIds.push(response.users[i].id);
					}
				}
				self.setUsers(userIds);

				var denyUserIds = [];
				if (response.denyUsers) {
					for (var i = 0; i < response.denyUsers.length; i++) {
						denyUserIds.push(response.denyUsers[i].id);
					}
				}
				self.setDenyUsers(denyUserIds);

				if (callback)
					callback(response);
			}, false, synchronous);
			this.logExit(arguments.callee.nom);
			return self;
		}

	});

	/**
	 * Static function that constructs a desktop access config object.
	 * 
	 * @param id
	 *            Desktop identifier
	 * @memberof ecm.model.admin.DesktopAccessConfig
	 */
	DesktopAccessConfig.createDesktopAccessConfig = function(id) {
		return new DesktopAccessConfig(id, "DesktopAccessConfig");
	};
	return DesktopAccessConfig;
});

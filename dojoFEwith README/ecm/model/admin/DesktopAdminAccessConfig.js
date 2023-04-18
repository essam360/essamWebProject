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
	 * @name ecm.model.admin.DesktopAdminAccessConfig
	 * @class Represents the configuration for admin access control of a desktop.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @public
	 * @since 3.0.3
	 */
	var DesktopAdminAccessConfig = declare("ecm.model.admin.DesktopAdminAccessConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.DesktopAdminAccessConfig.prototype */

		REPOSITORY_TYPE: "repositoryType",
		USERS: "users",
		USER_NAMES: "userNames",
		GROUPS: "groups",
		GROUP_NAMES: "groupNames",
		DENYUSERS: "denyUsers",
		DENYUSER_NAMES: "denyUserNames",

		constructor: function(id, name) {
			this.logDebug("DesktoAdminpAccessConfig constructor");
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

		setUsers: function(ids) {
			this.setValue(this.USERS, ids);
		},
		
		getUserNames: function() {
			return this.getValue(this.USER_NAMES);
		},

		setUserNames: function(names) {
			this.setValue(this.USER_NAMES, names);
		},

		getGroups: function() {
			return this.getValue(this.GROUPS);
		},

		setGroups: function(ids) {
			this.setValue(this.GROUPS, ids);
		},
		
		getGroupNames: function() {
			return this.getValue(this.GROUP_NAMES);
		},

		setGroupNames: function(names) {
			this.setValue(this.GROUP_NAMES, names);
		},

		getDenyUsers: function() {
			return this.getValue(this.DENYUSERS);
		},

		setDenyUsers: function(ids) {
			this.setValue(this.DENYUSERS, ids);
		},
		
		getDenyUserNames: function() {
			return this.getValue(this.DENYUSER_NAMES);
		},

		setDenyUserNames: function(names) {
			this.setValue(this.DENYUSER_NAMES, names);
		},
		
		isLoaded: function(){
			return this._loaded;
		},
		
		_loaded: false,

		getDesktopAdminAccess: function(serverType, callback, synchronous, extraParams) {
			this.logEntry(arguments.callee.nom);
			var params = this._mixin([
				{
					action: "getDesktopAdminAccess",
					serverType: serverType,
					id: this.id,
					configuration: this.name
				},
				this.default_params,
				extraParams
			]);
			var self = this;
			var request = ecm.model.Request.invokeService("getDesktopAdminAccess", null, params, function(response) { // onFinished
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
				self._loaded = true;

				if (callback)
					callback(response);
			}, false, synchronous);
			this.logExit(arguments.callee.nom);
			return self;
		}

	});

	/**
	 * Static function that constructs a desktop admin access config object.
	 * 
	 * @param id
	 *            Desktop identifier
	 * @memberof ecm.model.admin.DesktopAdminAccessConfig
	 */
	DesktopAdminAccessConfig.createDesktopAdminAccessConfig = function(id) {
		return new DesktopAdminAccessConfig(id, "DesktopAdminAccessConfig");
	};
	return DesktopAdminAccessConfig;
});

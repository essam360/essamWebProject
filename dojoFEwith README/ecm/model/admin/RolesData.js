/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/model/admin/AccessRoleConfig",
	"ecm/Messages",
	"../../LoggerMixin"
], function(declare, lang, array, Desktop, Request, AccessRoleConfig, Messages, LoggerMixin) {

	/**
	 * @name ecm.model.admin.RolesData
	 * @class Represents the admin roles configuration objects needed to edit role's rights.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var RolesData = declare("ecm.model.admin.RolesData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.RolesData.prototype */

		/**
		 * A collection of role JSON object
		 */
		roles: [],

		/**
		 * A {@link ecm.model.admin.AccessRoleConfig} object.
		 */
		accessRoles: [],
		/**
		 * A {@link ecm.model.admin.SettingsConfig} object containing just OnDemand data.
		 */

		default_params: {
			application: "navigator"
		},

		/**
		 * Constructor.
		 */
		constructor: function(_SECURITY_TOPIC) {
			this._SECURITY_TOPIC = _SECURITY_TOPIC;
			this.logDebug("construct RolesData");
			if (!this.roles) {
				this.roles = [];
			}
		},

		/**
		 * Loads the roles data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				desktopId: Desktop.id,
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId,
				"action": "get",
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);
			Request.invokeService("admin/getAdminAccessRolesData", null, params, lang.hitch(this, function(response) { // onFinished
				if (response.roles) {
					this.roles = [];
					for ( var i in response.roles) {
						this.roles.push(response.roles[i])
					}
				}

				// A collection of AccessRoleConfig
				if (response.accessRoles) {
					this.accessRoles = [];
					for ( var i in response.accessRoles) {
						var entry = response.accessRoles[i];
						var id = entry.id ? entry.id : "" + i;
						var accessRole = AccessRoleConfig.createAccessRoleConfig(id);
						lang.mixin(accessRole, {
							_attributes: entry
						});
						this.accessRoles.push(accessRole);
					}
				}
				if (callback) {
					callback(response);
				}
			}));
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier. Saves all the data except for the OnDemand data.
		 */
		save: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				desktopId: Desktop.id,
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category,
				action: "update"
			}, this.default_params);

			var postData = JSON.stringify(this.accessRoles);
			Request.postService("admin/updateAdminAccessRolesData", null, params, "text/json", postData, lang.hitch(this, function(response) { // onFinished
				if (callback) {
					callback();
				}
			}));
			this.logExit(arguments.callee.nom);
		},

		_noOp: null

	});

	return RolesData;
});

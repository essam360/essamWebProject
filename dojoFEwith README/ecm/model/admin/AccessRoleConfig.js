/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/json",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ConfigurationObject"
], function(declare, json, lang, array, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.AccessRoleConfig
	 * @class Represents the configuration information for a admin user. This information includes:
	 *        <ul>
	 *        <li>The user's access rights to security category
	 *        <li>
	 *        <li>Desktops</li>
	 *        <li>Repositories</li>
	 *        <li>Sync</li>
	 *        <li>FileNet</li>
	 *        <li>OnDemand</li>
	 *        <li>ViewOne</li>
	 *        <li>Plugins</li>
	 *        <li>Menus</li>
	 *        <li>Labels</li>
	 *        <li>Themes</li>
	 *        <li>IconMapping</li>
	 *        <li>Admin General Settings
	 *        <li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */

	var AccessRoleConfig = declare("ecm.model.admin.AccessRoleConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.UserConfig.prototype */

		ACCESS_RIGHT_DENY: 0,
		ACCESS_RIGHT_VIEW: 1,
		ACCESS_RIGHT_CREATE: 2,
		ACCESS_RIGHT_MODIFY: 4,
		ACCESS_RIGHT_DELETE: 8,

		CATEGORY_DESKTOPS: "desktop",
		CATEGORY_REPOSITORIES: "repos",
		CATEGORY_SYNC: "sync",
		CATEGORY_FILENET: "filenet",
		CATEGORY_ON_DEMAND: "ondemand",
		CATEGORY_VIEWONE: "viewone",
		CATEGORY_PLUGINS: "plugins",
		CATEGORY_MENUS: "menus",
		CATEGORY_LABELS: "interfaceText",
		CATEGORY_THEMES: "themes",
		CATEGORY_REDACTION_REASONS: "redactionReasons",
		CATEGORY_ICON_MAPPING: "iconMapping",
		CATEGORY_SETTINGS: "settings",
		CATEGORY_ROLES: "roles",
		CATEGORIES: [
			this.CATEGORY_DESKTOPS,
			this.CATEGORY_REPOSITORIES,
			this.CATEGORY_SYNC,
			this.CATEGORY_FILENET,
			this.CATEGORY_ON_DEMAND,
			this.CATEGORY_VIEWONE,
			this.CATEGORY_PLUGINS,
			this.CATEGORY_MENUS,
			this.CATEGORY_REDACTION_REASONS,
			this.CATEGORY_LABELS,
			this.CATEGORY_THEMES,
			this.CATEGORY_ICON_MAPPING,
			this.CATEGORY_SETTINGS,
			this.CATEGORY_ROLES
		],

		constructor: function(id, name) {
			this.logDebug("AccessRoleConfig constructor");
		},

		// retrieve the admin user object
		// onCompleted event handler is callback
		getAccessRolerConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		// add a new admin user configuration
		// onCompleted event handler is callback
		addAccessRoleConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.addConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		// update a admin user configuration
		// onCompleted event handler is callback
		updateAccessRoleConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.updateConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		isUserExist: function() {
			return !(this.getValues(this.FAVORITES) && this.getValues(this.FAVORITES).length > 0);
		},

		// remove admin user configuration
		// onCompleted event handler is callback
		deleteAccessRoleConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.deleteConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		getMask: function(category) {
			var topics = category.split(".");
			return this._getMask(JSON.parse(this.getValue(topics[0])), topics.slice(1, topics.length));
		},

		_getMask: function(permission, categories) {
			if (categories.length == 1)
				return parseInt(permission[categories[0]]);
			else
				return _getMask(permission[categories[0]], categories.slice(1, categories.length));
		},

		hasRight: function(right, category) {
			var mask = this.getMask(category);
			return ((right & mask) == right);
		},

		hasRights: function(rights, category) {
			var result = false;
			if (rights && rights.length > 0) {
				result = true;
				var mask = this.getMask(category);
				result = array.every(rights, function(right, i) {
					return (right & mask == right);
				});
			}
			return result;
		},

		hasViewRight: function(category) {
			return this.hasRight(this.ACCESS_RIGHT_VIEW, category);
		},

		hasCreateRight: function(category) {
			return this.hasRight(this.ACCESS_RIGHT_CREATE, category);
		},

		hasModifyRight: function(category) {
			return this.hasRight(this.ACCESS_RIGHT_MODIFY, category);
		},

		hasDeleteRight: function(category) {
			return this.hasRight(this.ACCESS_RIGHT_DELETE, category);
		},

		isCustomCategory: function(category) {
			return array.every(this.CATEGORIES, function(cat, i) {
				return (category != cat);
			});
		},

		theEnd: null

	});

	/**
	 * Constructs a Admin user config object in Nexus.
	 * 
	 * @param user
	 *            User name.
	 */
	AccessRoleConfig.createAccessRoleConfig = function(user) {
		return new AccessRoleConfig(user.toLowerCase(), "AccessRoleConfig");
	};
	return AccessRoleConfig;
});

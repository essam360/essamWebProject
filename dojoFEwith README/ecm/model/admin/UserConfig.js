/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ConfigurationObject",
	"./RecentSearchConfig",
	"../SearchTemplate"
], function(declare, lang, array, _ConfigurationObject, RecentSearchConfig, SearchTemplate) {

	/**
	 * @name ecm.model.admin.UserConfig
	 * @class Represents the configuration information for a user. This information includes:
	 *        <ul>
	 *        <li>The user's favorites
	 *        <li>
	 *        <li>Recent searches made by the user</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var UserConfig = declare("ecm.model.admin.UserConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.UserConfig.prototype */

		FAVORITES: "favorites",
		RECENT_SEARCHES: "recentSearches",

		_recentSearchConfigMap: null, // cache by key with template ID

		constructor: function(id, name) {
			this.logDebug("UserConfig constructor");
			if (!this._recentSearchConfigMap) {
				this._recentSearchConfigMap = {};
			}
		},

		getFavorites: function() {
			return this.getValues(this.FAVORITES);
		},

		// retrieve the user object
		// onCompleted event handler is callback
		getUserConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		// add a new user configuration
		// onCompleted event handler is callback
		addUserConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.addConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		// update user configuration
		// onCompleted event handler is callback
		updateUserConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.updateConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		isFavoritesEmpty: function() {
			return !(this.getValues(this.FAVORITES) && this.getValues(this.FAVORITES).length > 0);
		},

		// remove user configuration
		// onCompleted event handler is callback
		deleteUserConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			if (this.isFavoritesEmpty())
				this.deleteConfig(callback);
			else
				this.logError(arguments.callee.nom, "Can not delete this object until all its sub-items are removed.");
			this.logExit(arguments.callee.nom);
			return this;
		},

		getRecentSearches: function(contextId, repository, callback) {
			if (contextId && repository) {
				this.listConfig(this.RECENT_SEARCHES, lang.hitch(this, function(list) {
					var templates = [];
					array.forEach(list, function(data) {
						if (data.contextId == contextId && data.templateId) {
							var id = data.templateId.toString();
							var name = (data.name || "").toString();
							var description = (data.description || "").toString();
							var properties = data.vsId ? {
								vsId: data.vsId
							} : null;
							var template = new SearchTemplate(id, name, repository, null, properties, null, null, null, null, null, null, null, description, null);
							templates.push(template);
							this._createRecentSearchConfig(data.id, contextId, template);
						}
					}, this);
					if (callback) {
						callback(templates);
					}
				}));
			}
		},

		addRecentSearch: function(contextId, template, callback) {
			if (contextId && template) {
				// use current time, instead of template ID, for shorter ID
				var id = this.id + "." + contextId + "." + new Date().getTime();
				var config = this._createRecentSearchConfig(id, contextId, template);
				config.addConfig(callback);
			}
			return this;
		},

		deleteRecentSearch: function(contextId, template, callback) {
			if (contextId && template) {
				var config = this._getRecentSearchConfig(contextId, template);
				if (config) {
					config.deleteConfig(callback);
				}
			}
			return this;
		},

		deleteRecentSearches: function(contextId, templates, callback) {
			if (contextId && templates && templates.length > 0) {
				var configs = [];
				array.forEach(templates, function(template) {
					var config = this._getRecentSearchConfig(contextId, template);
					if (config) {
						configs.push(config);
					}
				}, this);
				this.deleteConfigs(configs, callback);
			}
		},

		_getRecentSearchConfig: function(contextId, template) {
			var key = this.id + "." + contextId + "." + template.generateUUID();
			return this._recentSearchConfigMap[key];
		},

		_createRecentSearchConfig: function(id, contextId, template) {
			var config = RecentSearchConfig.createRecentSearchConfig(id);
			config.setUserId(this.id);
			config.setContextId(contextId);
			config.setTemplateId(template.id);
			config.setName(template.name);
			config.setDescription(template.description ? template.description : "");

			// Save the version series ID if applicable
			var vsId = template.vsId;
			if (vsId) {
				config.setVsId(vsId);
			}

			// Map it
			var key = this.id + "." + contextId + "." + template.generateUUID();
			this._recentSearchConfigMap[key] = config;

			return config;
		}
	});

	/**
	 * Static function that constructs a user config object.
	 * 
	 * @param user
	 *            User name.
	 * @memberof ecm.model.admin.UserConfig
	 */
	UserConfig.createUserConfig = function(user) {
		return new UserConfig(ecm.model.desktop.id + "." + ecm.model.desktop.getDefaultRepositoryId() + "." + user.toLowerCase(), "UserConfig", "user");
	};
	return UserConfig;
});

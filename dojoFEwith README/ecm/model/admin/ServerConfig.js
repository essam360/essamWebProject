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
	"./RepositoryConfig"
], function(declare, lang, array, _ConfigurationObject, RepositoryConfig) {

	/**
	 * @name ecm.model.admin.ServerConfig
	 * @class Represents the type of server that is being used.
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var ServerConfig = declare("ecm.model.admin.ServerConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ServerConfig.prototype */

		REPOSITORIES: "repositories",
		CONFIG_INFO: "configInfo",
		CONFIG_CLASS: "configClass",
		CONNECTED_CONFIG_CLASS: "connectedConfigClass",
		SERVICE_URL: "serviceURL",
		LABEL_KEY: "labelKey",
		LABEL: "label",
		TYPE: "type",

		constructor: function(id, name) {
			this.logDebug("ServerConfig constructor");
		},

		getConfigInfo: function() {
			return this.getValue(this.CONFIG_INFO);
		},

		setConfigInfo: function(configInfo) {
			this.setValue(this.CONFIG_INFO, configInfo);
		},

		getServiceURL: function() {
			return this.getValue(this.SERVICE_URL);
		},

		setServiceURL: function(serviceURL) {
			this.setValue(this.SERVICE_URL, serviceURL);
		},

		getLabelKey: function() {
			return this.getValue(this.LABEL_KEY);
		},

		setLabelKey: function(labelKey) {
			this.setValue(this.LABEL_KEY, labelKey);
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(label) {
			this.setValue(this.LABEL, label);
		},

		getType: function() {
			return this.getValue(this.TYPE);
		},

		setType: function(type) {
			this.setValue(this.TYPE, type);
		},

		getConfigClass: function() {
			return this.getValue(this.CONFIG_CLASS);
		},

		setConfigClass: function(configClass) {
			this.setValue(this.CONFIG_CLASS, configClass);
		},

		getConnectedConfigClass: function() {
			return this.getValue(this.CONNECTED_CONFIG_CLASS);
		},

		setConnectedConfigClass: function(configClass) {
			this.setValue(this.CONNECTED_CONFIG_CLASS, configClass);
		},

		// return repository objects
		getRepositoryObjects: function(callback, params) {
			var repositories = this.getValues(this.REPOSITORIES);
			if (repositories && repositories.length > 0) {
				var repositoryObjects = [];
				array.forEach(repositories, lang.hitch(this, function(entry, index) {
					var repository = RepositoryConfig.createRepositoryConfig(entry);
					repository.getConfig(function(response) {
						repositoryObjects.push(repository);
						if (repositoryObjects.length == repositories.length && callback)
							callback(repositoryObjects);
					}, null, params);
				}));
				return repositoryObjects;
			}
		}

	});

	/**
	 * Static funciton that constructs a server config object. Use Application object to save this.
	 * 
	 * @param id
	 *            Server identifier.
	 * @memberof ecm.model.admin.ServerConfig
	 */
	ServerConfig.createServerConfig = function(id) {
		return new ServerConfig(id, "ServerConfig");
	};
	return ServerConfig;
});

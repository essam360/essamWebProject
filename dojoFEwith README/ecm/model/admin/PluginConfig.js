/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ConfigurationObject"
], function(declare, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.PluginConfig
	 * @class Represents the configuration information for a plug-in. This information includes:
	 *        <ul>
	 *        <li>The class that defines the configuration parameters for the plug-in</li>
	 *        <li>The name of the JAR file that contains the plug-in</li>
	 *        <li>The version of the plug-in</li>
	 *        <li>The components included in the plug-in including actions, features, viewers, and layouts</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var PluginConfig = declare("ecm.model.admin.PluginConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.PluginConfig.prototype */

		CONFIGURATION: "configuration",
		CONFIGCLASS: "configClass",
		NAME: "name",
		FILENAME: "filename",
		VERSION: "version",
		ACTIONS: "actions",
		VIEWERS: "viewers",
		FEATURES: "features",
		LAYOUTS: "layouts",
		//add new property to store the plug-in class name if not using JAR files
		CLASSNAME: "classname",
		CHILD_PLUGINS: "childPlugins",
		ENABLED: "enabled",
		ORDERING: "ordering",
		DEPENDENCIES: "dependencies",

		constructor: function(id, name) {
			this.logDebug("PluginConfig constructor");
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getFileName: function() {
			return this.getValue(this.FILENAME);
		},

		setFileName: function(name) {
			this.setValue(this.FILENAME, name);
		},

		//Add new method for this
		getClassName: function() {
			return this.getValue(this.CLASSNAME);
		},

		setClassName: function(name) {
			this.setValue(this.CLASSNAME, name);
		},

		getConfiguration: function() {
			return this.getValue(this.CONFIGURATION);
		},

		setConfiguration: function(configuration) {
			this.setValue(this.CONFIGURATION, configuration);
		},

		getConfigClass: function() {
			return this.getValue(this.CONFIGCLASS);
		},

		setConfigClass: function(configClass) {
			this.setValue(this.CONFIGCLASS, configClass);
		},

		getVersion: function() {
			return this.getValue(this.VERSION);
		},

		setVersion: function(version) {
			this.setValue(this.VERSION, version);
		},

		getChildPlugins: function() {
			this.getValues(this.CHILD_PLUGINS);
		},

		setChildPlugins: function(childPlugins) {
			this.setValues(this.CHILD_PLUGINS, childPlugins);
		},

		getEnabled: function() {
			var val = true;
			if (this.getValue(this.ENABLED) != undefined)
				val = this.getValue(this.ENABLED);

			return val;
		},

		setEnabled: function(enabled) {
			this.setValue(this.ENABLED, enabled);
		},

		getOrdering: function() {
			return this.getValue(this.ORDERING);
		},

		setOrdering: function(ordering) {
			this.setValue(this.ORDERING, ordering);
		},
		getPluginDependencies: function() {
			return this.getValue(this.DEPENDENCIES);
		},

		setPluginDependencies: function(dependencies) {
			this.setValue(this.DEPENDENCIES, dependencies);
		},

		// retrieve the plugin config object
		// onCompleted event handler is callback
		getPluginConfig: function(callback, extraParams) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback, null, extraParams);
			this.logExit(arguments.callee.nom);
		}
	});

	/**
	 * Constructs a plug-in config object. Use Application object to save this.
	 * 
	 * @param id
	 *            Plug-in identifier.
	 * @memberof ecm.model.PluginConfig
	 */
	PluginConfig.createPluginConfig = function(id) {
		return new PluginConfig(id, "PluginConfig");
	};
	return PluginConfig;
});

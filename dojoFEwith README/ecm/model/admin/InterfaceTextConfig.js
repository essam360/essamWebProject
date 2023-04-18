/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"./_ConfigurationObject",
	"./InterfaceTextLocaleConfig",
	"./InterfaceTextLabelConfig"
], function(declare, lang, dojojson, _ConfigurationObject, InterfaceTextLocaleConfig, InterfaceTextLabelConfig) {

	/**
	 * @name ecm.model.admin.InterfaceTextConfig
	 * @class Represents the configuration information for an application label, a system property label, or a desktop
	 *        label in the user interface. This information includes:
	 *        <ul>
	 *        <li>The label key</li>
	 *        <li>The type of label: action, application, desktop, or system</li>
	 *        <li>The repository type for a repository label</li>
	 *        <li>The desktop identifier for a desktop label</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var InterfaceTextConfig = declare("ecm.model.admin.InterfaceTextConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.InterfaceTextConfig.prototype */

		LABEL_KEY: "labelKey",
		TOOLTIP_KEY: "tooltipKey", // optional tooltip
		TYPE: "type", // action, system, application or desktop
		REPOSITORY_TYPE: "repositoryType", // cm, od, or p8 - used when type == system
		REPOSITORY_ID: "repositoryId",
		DESKTOP_ID: "desktopId", // used for Desktop type label. 
		USER_DATA: "userData",

		DISPLAYED_IN: "displayedIn", // system p8 - where the field is used - (i.e. Document, Folder, Document and Folder
		CLASSIC_LABEL_KEY: "classicLabelKey", // system od - what the field used to be called in classic OD

		localeData: null, // InterfaceTextLocaleConfig
		labelData: null, // InterfaceTextLabelConfig

		repositoryLabel: "", // Not saved to the mid-tier, only used on the client

		constructor: function(id, name) {
			this.logDebug("InterfaceTextConfig constructor");
		},

		getType: function() {
			return this.getValue(this.TYPE);
		},

		setType: function(type) {
			this.setValue(this.TYPE, type);
		},

		isTypeSystem: function() {
			return this.getType() == "system";
		},

		isTypeApplication: function() {
			return this.getType() == "application";
		},

		isTypeAction: function() {
			return this.getType() == "action";
		},

		isTypeDesktop: function() {
			return this.getType() == "desktop";
		},

		getUserData: function() {
			return this.getValue(this.USER_DATA);
		},

		setUserData: function(data) {
			this.setValue(this.USER_DATA, data);
		},

		getRepositoryType: function() {
			return this.getValue(this.REPOSITORY_TYPE);
		},

		setRepositoryType: function(type) {
			this.setValue(this.REPOSITORY_TYPE, type);
		},

		getRepositoryId: function() {
			return this.getValue(this.REPOSITORY_ID);
		},

		setRepositoryId: function(id) {
			this.setValue(this.REPOSITORY_ID, id);
		},

		getRepositoryLabel: function() {
			return this.repositoryLabel;
		},

		setRepositoryLabel: function(label) {
			this.repositoryLabel = label;
		},

		getDesktopId: function() {
			return this.getValue(this.DESKTOP_ID);
		},

		setDesktopId: function(id) {
			this.setValue(this.DESKTOP_ID, id);
		},

		isP8: function() {
			return this.getRepositoryType() == "p8";
		},

		isCM: function() {
			return this.getRepositoryType() == "cm";
		},

		isOD: function() {
			return this.getRepositoryType() == "od";
		},

		getLabelKey: function() {
			return this.getValue(this.LABEL_KEY);
		},

		setLabelKey: function(key) {
			this.setValue(this.LABEL_KEY, key);
		},

		getTooltipKey: function() {
			return this.getValue(this.TOOLTIP_KEY);
		},

		getDisplayedIn: function() {
			return this.getValue(this.DISPLAYED_IN);
		},

		setDisplayedIn: function(value) {
			this.setValue(this.DISPLAYED_IN, value);
		},

		getClassicLabelKey: function() {
			return this.getValue(this.CLASSIC_LABEL_KEY);
		},

		setLocaleData: function(localeData) {
			this.localeData = localeData;
		},

		getLocaleData: function() {
			if (!this.localeData) {
				this.localeData = ecm.model.admin.InterfaceTextLocaleConfig.createInterfaceTextLocaleConfig(this.id);
			}
			return this.localeData;
		},

		setLabelData: function(labelData) {
			this.labelData = labelData;
		},

		getLabelData: function() {
			if (!this.labelData) {
				this.labelData = InterfaceTextLabelConfig.createInterfaceTextLabelConfig(this.id);
			}
			return this.labelData;
		},

		hasLabelData: function() {
			if (this.labelData) {
				return this.labelData.hasLabelData();
			} else {
				return false;
			}
		},

		// update configs
		updateConfigs: function(configs, callback, extraParams) {
			this.logEntry(arguments.callee.name);
			var data = [];
			for ( var i in configs) {
				var localeData = configs[i].getLocaleData();
				var obj = {
					id: localeData._attributes.id || localeData.id
				};
				var hasData = false;
				for ( var key in localeData._attributes) {
					if (key != "id") {
						var value = localeData._attributes[key];
						if (value && value != "") {
							//console.debug("$$$ adding key=" + key + " value =" + value + " for id=" + obj.id);
							hasData = true;
							obj[key] = value;
						}
					}
				}
				if (hasData) {
					data.push(obj);
				}
			}
			var params = this._mixin([
				{
					action: "updateUILabels",
					id: this.id,
					configuration: this.name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(data), function(response) {
				/*
				var list = response.list;
				var interfaceTextsObjects = [];
				for ( var i in list) {
					var entry = list[i];
					var id = entry.id ? entry.id : "" + i;
					var interfaceText = ecm.model.admin.InterfaceTextConfig.createInterfaceTextConfig(id);
					lang.mixin(interfaceText, {
						_attributes: entry
					});

					var localeId = entry.localeData && entry.localeData.id ? entry.localeData.id : "" + i;
					var interfaceTextLocale = ecm.model.admin.InterfaceTextLocaleConfig.createInterfaceTextLocaleConfig(localeId);
					interfaceText.setLocaleData(interfaceTextLocale);
					if (entry.localeData) {
						lang.mixin(interfaceTextLocale, {
							_attributes: entry.localeData
						});
					}
					interfaceTextsObjects.push(interfaceText);
				}
				if (callback)
					callback(interfaceTextsObjects);
				*/
				if (callback)
					callback();
			});
			this.logExit(arguments.callee.name);
			return this;
		},

		// retrieve the interface text config object
		// onCompleted event handler is callback
		getInterfaceTextConfig: function(callback, params) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback, null, params);
			this.logExit(arguments.callee.nom);
			return this;
		},

		// update interface text configuration
		// onCompleted event handler is callback
		updateInterfaceTextConfig: function(callback, params) {
			this.logEntry(arguments.callee.nom);
			this.updateConfig(callback, params);
			this.logExit(arguments.callee.nom);
		}
	});

	/**
	 * Static function that constructs an interface text config object.
	 * 
	 * @param id
	 *            Interface text identifier.
	 * @memberof ecm.model.admin.InterfaceTextConfig
	 */
	InterfaceTextConfig.createInterfaceTextConfig = function(id) {
		return new InterfaceTextConfig(id, "InterfaceTextConfig");
	};

	/**
	 * Static function that creates a unique id by using time.
	 * 
	 * @param sequenceNumber
	 *            The sequence number to use to create the unique id.
	 * @memberof ecm.model.admin.InterfaceTextConfig
	 */
	InterfaceTextConfig.getUniqueId = function(sequenceNumber) {
		var d = new Date();

		return "" + (d.getTime() + sequenceNumber);
	};

	/**
	 * Static function that updates InterfaceText and Desktop's application spaces at the same time.
	 * 
	 * @param configs
	 *            JSON object to send to the configuration service API.
	 * @param desktopId
	 *            The ID of the destktop to update
	 * @param callback
	 *            A function to run after the service API call completes.
	 * @memberof ecm.model.admin.InterfaceTextConfig
	 * @param extraParams
	 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
	 */
	InterfaceTextConfig.updateConfiguration = function(configs, desktopId, callback, extraParams) {
		var params = InterfaceTextConfig._mixin([
			{
				application: "navigator",
				action: "updateInterfaceText",
				configuration: "InterfaceTextConfig",
				desktop: desktopId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				id: desktopId ? desktopId : "interfaceText"
			// Servlet requires an id
			},
			extraParams
		]);
		ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(configs), function(response) { // onFinished
			if (callback)
				callback(response);
		});
	};

	/**
	 * Static function that updates InterfaceText and Desktop's application spaces at the same time.
	 * 
	 * @param configs
	 *            JSON Object to send to the configuration service API.
	 * @param callback
	 *            A funciton to run after the service API call completes.
	 * @memberof ecm.model.admin.InterfaceTextConfig
	 */
	InterfaceTextConfig.updateConfigurationOnly = function(configs, callback) {
		var params = {
			application: "navigator",
			action: "updateInterfaceTextOnly",
			configuration: "InterfaceTextConfig",
			id: "interfaceText",
			login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
		// Servlet requires an id
		};
		ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(configs), function(response) { // onFinished
			if (callback)
				callback(response);
		});
	};

	return InterfaceTextConfig;
});

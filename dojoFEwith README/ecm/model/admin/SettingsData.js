/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./SettingsConfig",
	"./FileTypeConfig",
	"./RepositoryConfig",
	"./InterfaceTextConfig",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/Messages",
	"../../LoggerMixin"
], function(declare, lang, array, SettingsConfig, FileTypeConfig, RepositoryConfig, InterfaceTextConfig, Desktop, Request, Messages, LoggerMixin) {

	/**
	 * @name ecm.model.admin.SettingsData
	 * @class Represents the admin settings configuration objects needed to edit settings.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var SettingsData = declare("ecm.model.admin.SettingsData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.SettingsData.prototype */

		/**
		 * Boolean indicating if an OD repository exists in admin.
		 */
		odRepositoryExists: false,
		/**
		 * An array of {@link ecm.model.admin.FileTypeConfig} objects.
		 */
		fileTypes: null,
		/**
		 * An array of strings.
		 */
		defaultContentTypes: null,
		/**
		 * A {@link ecm.model.admin.SettingsConfig} object.
		 */
		settingsConfig: null,
		/**
		 * A {@link ecm.model.admin.SettingsConfig} object containing just OnDemand data.
		 */
		onDemand: null,
		/**
		 * A object holding the common used parameters such as application. More parameters can be added later.
		 */
		default_params: {
			application: "navigator"
		},

		/**
		 * Constructor.
		 */
		constructor: function(_SECURITY_TOPIC) {
			this._SECURITY_TOPIC = _SECURITY_TOPIC;
			this.logDebug("construct SettingsData");
			if (!this.fileTypes) {
				this.fileTypes = [];
			}
			if (!this.defaultContentTypes) {
				this.defaultContentTypes = [];
			}
		},

		/**
		 * Loads the settings data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				application: ecm.model.admin.appCfg.id,
				desktopId: this.id,
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);
			Request.invokeService("admin/getAdminSettingsData", null, params, lang.hitch(this, function(response) { // onFinished
				// SettingsConfig
				if (response.settingsConfig) {
					var id = response.settingsConfig.id ? response.settingsConfig.id : "" + i;
					var settings = SettingsConfig.createSettingsConfig(id);
					lang.mixin(settings, {
						_attributes: response.settingsConfig
					});
					this.settingsConfig = settings;
				}

				var defaultContentTypes = [];
				for ( var i in response.defaultContentTypes) {
					var defaultContentType = response.defaultContentTypes[i];
					defaultContentTypes.push(defaultContentType);
				}
				this.defaultContentTypes = defaultContentTypes;

				// OnDemand
				var atts = {};
				for ( var i in this.settingsConfig._attributes) {
					if (i.indexOf("od") == 0) {
						atts[i] = this.settingsConfig._attributes[i];
						delete this.settingsConfig._attributes[i];
					}
				}
				this.onDemand = SettingsConfig.createSettingsConfig("default");
				this.onDemand._attributes = atts;

				this.odRepositoryExists = response.hasODRepository;

				// File Types
				if (response.fileTypes) {
					var fileTypeObjects = [];
					for ( var i in response.fileTypes) {
						var entry = response.fileTypes[i];
						var id = entry.id ? entry.id : "" + i;
						var fileType = FileTypeConfig.createFileTypeConfig(id);
						lang.mixin(fileType, {
							_attributes: entry
						});
						if (fileType.getName()) { // include only viewers with a name
							fileTypeObjects.push(fileType);
						}
					}
					this.fileTypes = fileTypeObjects;
				}
				if (callback) {
					callback();
				}
			}));
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		saveOnDemand: function(callback) {
			var postObj = {
				"settingsConfig": this.onDemand._attributes
			};
			var postData = JSON.stringify(postObj, null);

			var params = lang.mixin({
				login_desktop: Desktop.id,
				action: "update",
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);

			Request.postService("admin/updateAdminSettingsData", null, params, "text/json", postData, lang.hitch(this, function(response) { // onFinished
				if (callback) {
					callback();
				}
			}));
		},

		/**
		 * Adds or updates the mid-tier. Saves all the data except for the OnDemand data.
		 */
		save: function(callback) {
			var postObj = {
				"settingsConfig": this.settingsConfig._attributes,
				"objectExpiration": this.objectExpiredTime,
				"fileTypesMappingData": this.fileTypesData,
				"interfaceTextArray": this.interfaceTextArray
			};
			var postData = JSON.stringify(postObj, null);

			var params = lang.mixin({
				application: ecm.model.admin.appCfg.id,
				login_desktop: Desktop.id,
				action: "update",
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);

			Request.postService("admin/updateAdminSettingsData", null, params, "text/json", postData, lang.hitch(this, function(response) { // onFinished
				ecm.model.desktop.culturalCollation = this.settingsConfig.getCulturalCollation(); //update desktop settings
				ecm.model.admin.appCfg.setObjectExpiration(this.objectExpiredTime);
				//update session expire warning settings
				/*var customSettings = dojo.fromJson(this.settingsConfig.getCustomSettings());
				if(customSettings){
					if(customSettings.enableSessionExpireWarning != null){
						ecm.model.desktop.sessionExpireWarningEnabled = customSettings.enableSessionExpireWarning.toUpperCase()=="TRUE"?true:false;
					}
					else{
						ecm.model.desktop.sessionExpireWarningEnabled = true;
					}
					
					if(customSettings.sessionExpireWarningTime){
						var warningTime = Math.round(customSettings.sessionExpireWarningTime);
						if(!isNaN(warningTime)){
							if(warningTime >= 5)
								ecm.model.desktop.sessionExpireWarningTime = 5;
							else if(warningTime <= 2)
								ecm.model.desktop.sessionExpireWarningTime = 2;
							else
								ecm.model.desktop.sessionExpireWarningTime = warningTime;
						}
					}
					else
						ecm.model.desktop.sessionExpireWarningTime = 2;
					var sessionTimer = ecm.model.SessionTimer.getSessionTimer();	
					if(sessionTimer != null){
						sessionTimer.sessionExpireWarningTime = ecm.model.desktop.sessionExpireWarningTime;
						if(!ecm.model.desktop.sessionExpireWarningEnabled){			
							 if(sessionTimer.isRunning){
								sessionTimer.stop();
							}
						}
						else{
							if(!sessionTimer.isRunning){
								sessionTimer.start();
							}
						}
					}
				}
				*/
				if (callback) {
					callback();
				}
			}));
		},

		_noOp: null

	});

	/**
	 * Static function that constructs a setting data object.
	 * 
	 * @memberof ecm.model.admin.SettingsData
	 */
	SettingsData.createSettingsData = function(_SECURITY_TOPIC) {
		return new SettingsData(_SECURITY_TOPIC);
	};
	return SettingsData;
});

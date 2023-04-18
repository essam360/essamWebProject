/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./ApplicationConfig",
	"./ServerConfig",
	"./IconStatusConfig",
	"./IconConfig",
	"./IdLabelConfig",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/Messages",
	"../../LoggerMixin"
], function(declare, lang, array, ApplicationConfig, ServerConfig, IconStatusConfig, IconConfig, IdLabelConfig, Desktop, Request, Messages, LoggerMixin) {

	/**
	 * @name ecm.model.admin.IconMappingData
	 * @class Represents the admin settings configuration objects needed to edit icon mapping.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var IconMappingData = declare("ecm.model.admin.IconMappingData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.IconMappingData.prototype */

		/**
		 * An array of {@link ecm.model.admin.IdLabelConfig} objects.
		 */
		defaultMappingClasses: null,
		/**
		 * An array of {@link ecm.model.admin.IdLabelConfig} objects.
		 */
		defaultStatusClasses: null,
		/**
		 * An array of strings.
		 */
		defaultContentTypes: null,
		/**
		 * An array of {@link ecm.model.admin.IconConfig} objects.
		 */
		iconMappings: null,
		/**
		 * An array of {@link ecm.model.admin.IconStatusConfig} objects.
		 */
		iconStatuses: null,
		/**
		 * An array of {@link ecm.model.admin.ServerConfig} objects.
		 */
		servers: null,
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
			this.logDebug("construct IconMappingData");
			if (!this.servers) {
				this.servers = [];
			}
			if (!this.iconStatuses) {
				this.iconStatuses = [];
			}
			if (!this.iconMappings) {
				this.iconMappings = [];
			}
			if (!this.defaultMappingClasses) {
				this.defaultMappingClasses = [];
			}
			if (!this.defaultStatusClasses) {
				this.defaultStatusClasses = [];
			}
			if (!this.defaultContentTypes) {
				this.defaultContentTypes = [];
			}
			this._SECURITY_TOPIC = _SECURITY_TOPIC;

		},

		/**
		 * Return the label for the input server.
		 */
		getServerLabel: function(id) {
			for ( var i in this.servers) {
				var serverObj = this.servers[i];
				if (serverObj.id == id) {
					var key = serverObj.getLabelKey();
					if (key && ecm.messages[key]) {
						return ecm.messages[key];
					} else {
						return id;
					}
				}
			}
			return null;
		},

		/**
		 * Loads the icon mapping data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				desktopId: this.id,
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);

			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(serverObjects) { // get list of servers we support
				this.servers = serverObjects;
				Request.invokeService("getIconMapping", null, params, lang.hitch(this, function(response) {
					var defaultClasses = [];
					for ( var i in response.iconStatusClasses) {
						var iconStatusClassJSON = response.iconStatusClasses[i];
						var iconStatusClassConfig = IdLabelConfig.createIdLabelConfig(iconStatusClassJSON.id);
						iconStatusClassConfig.setLabel(iconStatusClassJSON.label);
						defaultClasses.push(iconStatusClassConfig);
					}
					this.defaultStatusClasses = defaultClasses;

					var iconStatuses = [];
					for ( var i in response.iconStatus) {
						var iconStatusJSON = response.iconStatus[i];
						var id = iconStatusJSON.id;
						var iconStatusConfig = IconStatusConfig.createIconStatusConfig(id);
						iconStatusConfig.setClassName(iconStatusJSON.className);
						iconStatusConfig.setFileName(iconStatusJSON.fileName);
						iconStatusConfig.setServers(iconStatusJSON.servers);
						iconStatusConfig.setLabel(iconStatusJSON.label);
						iconStatuses.push(iconStatusConfig);
					}
					this.iconStatuses = iconStatuses;

					var defaultContentTypes = [];
					for ( var i in response.defaultContentTypes) {
						var defaultContentType = response.defaultContentTypes[i];
						defaultContentTypes.push(defaultContentType);
					}
					this.defaultContentTypes = defaultContentTypes;

					var defaultContentTypeClasses = [];
					for ( var i in response.defaultContentTypeClasses) {
						var jsonData = response.defaultContentTypeClasses[i];
						var config = IdLabelConfig.createIdLabelConfig(jsonData.id);
						config.setLabel(jsonData.label);
						defaultContentTypeClasses.push(config);
					}
					this.defaultMappingClasses = defaultContentTypeClasses;

					// Get the Mime Icon information
					var iconMappings = [];
					for ( var i in response.iconMappings) {
						var iconMappingJSON = response.iconMappings[i];
						var id = iconMappingJSON.id;
						var iconConfig = IconConfig.createIconConfig(id);
						iconConfig.setClassName(iconMappingJSON.className);
						iconConfig.setFileName(iconMappingJSON.fileName);
						iconConfig.setContentTypes(iconMappingJSON.contentTypes);
						iconMappings.push(iconConfig);
					}
					this.iconMappings = iconMappings;

					if (callback) {
						callback();
					}
				}));
			}), params);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Updates the data in the mid-tier.
		 */
		save: function(callback) {
			ecm.model.admin.appCfg.updateApplicationIconMapping(this.mimeTypeIconData, this.statusIconData, callback, {
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			});
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an desktop data object.
	 * 
	 * @param type
	 *            server type.
	 * @memberof ecm.model.admin.IconMappingData
	 */
	IconMappingData.createIconMappingData = function(_SECURITY_TOPIC) {
		return new IconMappingData(_SECURITY_TOPIC);
	};
	return IconMappingData;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./AdminData",
	"./ViewerConfig",
	"./ViewerDefConfig",
	"./ViewerMappingConfig",
	"./ServerConfig",
	"../../LoggerMixin"
], function(declare, lang, array, AdminData, ViewerConfig, ViewerDefConfig, ViewerMappingConfig, ServerConfig, LoggerMixin) {

	/**
	 * @name ecm.model.admin.ViewerData
	 * @class Represents the admin viewer mapping configuration objects needed to add or edit a viewer mapping.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var ViewerData = declare("ecm.model.admin.ViewerData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.ViewerData.prototype */

		/**
		 * A {@link ecm.model.admin.ViewerConfig} object.
		 */
		viewerConfig: null,
		/**
		 * An array of {@link ecm.model.admin.ViewerMappingConfig}.
		 */
		mappings: null,
		/**
		 * An array of {@link ecm.model.admin.ServerConfig}.
		 */
		servers: null,
		/**
		 * An array of {@link ecm.model.admin.ViewerDefConfig}.
		 */
		viewerDefs: null,
		/**
		 * An array of {@link ecm.model.admin.ViewerContentTypeConfig}.
		 */
		viewerContentTypes: null,

		default_params: {
			application: "navigator"
		},

		/**
		 * Constructor.
		 */
		constructor: function(id, action, _SECURITY_TOPIC) {
			this.logDebug("construct " + id + " ViewerData");
			this.id = id;
			this.action = action;
			this._SECURITY_TOPIC = _SECURITY_TOPIC;

			if (!this.mappings) {
				this.mappings = [];
			}
			if (!this.servers) {
				this.servers = [];
			}
			if (!this.viewerDefs) {
				this.viewerDefs = [];
			}
			if (!this.viewerContentTypes) {
				this.viewerContentTypes = [];
			}
		},

		/**
		 * Returns true if the edited desktop id is default.
		 */
		isDisabled: function() {
			return (this.isEdit() && this.viewerConfig && this.viewerConfig.id == "default");
		},

		/**
		 * Returns true if this is this is data for a new viewer.
		 */
		isNew: function() {
			return (this.action == "new");
		},

		/**
		 * Returns true if this is this is data for a new viewer.
		 */
		isCopied: function() {
			return (this.action == "copy");
		},

		/**
		 * Returns true if this is this is data for a viewer that is being edited.
		 */
		isEdit: function() {
			return (this.action == "edit");
		},

		/**
		 * Returns true if the input server type is valid.
		 */
		isValidServerType: function(serverType) {
			for ( var i in this.servers) {
				if (serverType == this.servers[i].getType()) {
					return true;
				}
			}
			return false;
		},

		/**
		 * Returns boolean indicating if the input id is a unique viewer id.
		 */
		isUniqueId: function(viewerId) {
			var isUnique = true;
			var viewers = ecm.model.admin.adminData.viewers;
			if (viewers) {
				for (var i = 0; i < viewers.length; i++) {
					if (viewers[i].id == viewerId) {
						isUnique = false;
						break;
					}
				}
			}
			return isUnique;
		},

		/**
		 * Returns the viewer name for the input viewer id.
		 */
		getViewerName: function(viewerId) {
			for (var i = 0; i < this.viewerDefs.length; i++) {
				var viewerDefObj = this.viewerDefs[i];
				if (viewerDefObj.id == viewerId) {
					return viewerDefObj.getLabel();
				}
			}
			return viewerId;
		},

		/**
		 * Loads the viewer data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				application: ecm.model.admin.appCfg.id,
				viewerId: this.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);

			if (!this.isNew()) {
				for ( var i in ecm.model.admin.adminData.viewers) {
					var view = ecm.model.admin.adminData.viewers[i];
					if (view.id == this.id) {
						this.viewerConfig = view;
						break;
					}
				}
			}
			if (!this.viewerConfig) {
				this.viewerConfig = ViewerConfig.createViewerConfig("");
			}
			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(serverObjects) { // get list of servers we support
				this.servers = serverObjects;
				ecm.model.admin.appCfg.getDefaultViewerData(lang.hitch(this, function(viewerDefs, viewerContentTypes, defaultViewerMapping) {

					// Make sure each server is supported by at least one viewer definition.
					this.servers = [];
					for (var i = 0; i < serverObjects.length; i++) {
						var serverObj = serverObjects[i];

						// Make sure the server type is supported by at least one viewer definition.
						for (var j = 0; j < viewerDefs.length; j++) {
							var viewerDefObj = viewerDefs[j];
							if (viewerDefObj.supportsServerType(serverObj.getType(), this.servers)) {
								this.servers.push(serverObj);
								break;
							}
						}
					}

					this.viewerDefs = viewerDefs;
					this.viewerContentTypes = viewerContentTypes;
					if (this.isNew()) {
						this.mappings = defaultViewerMapping;
						if (callback) {
							callback(this);
						}
					} else {
						this.viewerConfig.getMappingObjects(lang.hitch(this, function(mappingData) {
							this.mappings = mappingData;
							if (callback) {
								callback(this);
							}
						}));
					}
				}), params);
			}), params);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			if (this.isNew() || this.isCopied()) {
				ecm.model.admin.appCfg.addApplicationViewerConfig(this.viewerConfig, this.mappings, lang.hitch(this, function() {
					this.action = "edit";
					this.id = this.viewerConfig.id;
					ecm.model.admin.adminData.loadViewers();
					if (callback) {
						callback(true);
					}
				}), {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category
				});
			} else {
				ecm.model.admin.appCfg.updateApplicationViewerConfig(this.viewerConfig, this.mappings, lang.hitch(this, function() {
					ecm.model.admin.adminData.onChange(this.viewerConfig);
					if (callback) {
						callback(true);
					}
				}), {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category
				});
			}
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an viewer data object.
	 * 
	 * @param id
	 *            Viewer content type identifier
	 * @memberof ecm.model.admin.ViewerData
	 */
	ViewerData.createViewerData = function(id, action, _SECURITY_TOPIC) {
		return new ViewerData(id, action, _SECURITY_TOPIC);
	};
	return ViewerData;
});

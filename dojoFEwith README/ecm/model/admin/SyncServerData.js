/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./SyncConfig",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/Messages",
	"../../LoggerMixin"
], function(declare, lang, array, SyncConfig, Desktop, Request, Messages, LoggerMixin) {

	/**
	 * @name ecm.model.admin.SyncServerData
	 * @class Represents the admin sync configuration objects needed to edit sync.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var SyncServerData = declare("ecm.model.admin.SyncServerData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.SyncServerData.prototype */

		/**
		 * The public sync url.
		 */
		publicSyncUrl: "",

		/**
		 * A {@link ecm.model.admin.SyncConfig} object.
		 */
		syncConfig: null,

		/**
		 * Constructor.
		 */
		constructor: function(_SECURITY_TOPIC) {
			this.logDebug("construct SyncServerData");
			this._SECURITY_TOPIC = _SECURITY_TOPIC;
		},

		/**
		 * Loads the sync server data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			Request.invokeService("sync/getSyncServerNotifyURL", null, {
				action: "get",
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category,
				application: ecm.model.admin.appCfg.id,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
			}, lang.hitch(this, function(response) { // onFinished
				if (response && response.result) {
					this.publicSyncUrl = response.result;
				} else {
					this.publicSyncUrl = "";
				}
				this._originalPublicSyncUrl = this.publicSyncUrl;
				var params = lang.mixin({
					action: "get",
					userid: ecm.model.desktop.userId,
					securityTopic: this._SECURITY_TOPIC.category,
					application: ecm.model.admin.appCfg.id,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				}, this.default_params);
				Request.invokeService("admin/getAdminSyncData", null, params, lang.hitch(this, function(response) { // onFinished */
					if (response.syncConfig) {
						var id = response.syncConfig.id ? response.syncConfig.id : "default";
						var config = SyncConfig.createSyncConfig(id);
						lang.mixin(config, {
							_attributes: response.syncConfig
						});
						this.syncConfig = config;
					}
					if (callback) {
						callback();
					}
				}));
			}));
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			this._saveSyncServerUrlIfChanged(lang.hitch(this, function() {
				var postObj = {
					"syncConfig": this.syncConfig._attributes
				};
				var params = lang.mixin({
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category,
					action: "update"
				});
				Request.postService("admin/updateAdminSyncData", null, params, "text/json", JSON.stringify(postObj, null), lang.hitch(this, function(response) { // onFinished
					if (callback) {
						callback();
					}
				}));
			}));
		},

		/**
		 * @private Save the public sync url only if it changed.
		 */
		_saveSyncServerUrlIfChanged: function(callback) {
			if (this.publicSyncUrl != this._originalPublicSyncUrl) {
				Request.invokeService("sync/updateSyncServerNotifyURL", null, {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category,
					url: this.publicSyncUrl
				}, lang.hitch(this, function(response) { // onFinished 
					callback();
				}));
			} else {
				callback();
			}
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an desktop data object.
	 * 
	 * @memberof ecm.model.admin.SyncServerData
	 */
	SyncServerData.createSyncServerData = function(_SECURITY_TOPIC) {
		return new SyncServerData(_SECURITY_TOPIC);
	};
	return SyncServerData;
});

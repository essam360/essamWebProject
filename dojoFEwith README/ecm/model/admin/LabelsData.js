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
	"./InterfaceTextConfig",
	"./DesktopConfig",
	"./RepositoryConfig",
	"./LocaleConfig",
	"../../LoggerMixin"
], function(declare, lang, array, ApplicationConfig, InterfaceTextConfig, DesktopConfig, RepositoryConfig, LocaleConfig, LoggerMixin) {

	/**
	 * @name ecm.model.admin.ViewerData
	 * @class Represents the admin labels configuration objects needed to edit custom labels.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var LabelsData = declare("ecm.model.admin.ViewerData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.ViewerData.prototype */

		/**
		 * An array of {@link ecm.model.admin.InterfaceTextConfig}.
		 */
		interfaceTexts: null,
		/**
		 * An array of {@link ecm.model.admin.Localeonfig}.
		 */
		locales: null,
		/**
		 * An array of {@link ecm.model.admin.DesktopConfig}.
		 */
		desktops: null,
		/**
		 * @private An array of {@link ecm.model.admin.RepositoryConfig}.
		 */
		_repositories: null,

		/**
		 * Constructor.
		 */
		constructor: function(_SECURITY_TOPIC) {
			this.logDebug("construct LabelsData");
			if (!this.locales) {
				this.locales = [];
			}
			if (!this.interfaceTexts) {
				this.interfaceTexts = [];
			}
			if (!this.desktops) {
				this.desktops = [];
			}
			if (!this._repositories) {
				this._repositories = [];
			}
			this._SECURITY_TOPIC = _SECURITY_TOPIC;
		},

		/**
		 * Returns the interface text with the input id.
		 */
		getInterfaceTextWithId: function(id) {
			for ( var i in this.interfaceTexts) {
				var interfaceText = this.interfaceTexts[i];
				if (interfaceText.id == id) {
					return interfaceText;
				}
			}
			this.logDebug("_getInterfaceTextWithId", "Couldn't find interfaceText with id=" + id);
			return null;
		},

		/**
		 * @private
		 */
		_getRepositoryLabel: function(repositoryId) {
			var label = repositoryId;
			for (var i = 0; this._repositories && i < this._repositories.length; i++) {
				if (this._repositories[i].id == repositoryId) {
					label = this._repositories[i].getObjectStoreDisplayName();
					break;
				}
			}
			return label;
		},

		/**
		 * Loads the labels data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			}

			ecm.model.admin.appCfg.getRepositoryObjects(lang.hitch(this, function(reposObjects) {
				this._repositories = reposObjects;
				ecm.model.admin.appCfg.getDesktopObjects(lang.hitch(this, function(desktops) {
					this.desktops = desktops;
					ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(serverObjects, locales) { // get list of locales 
						this.locales = locales;
						ecm.model.admin.appCfg.getInterfaceTextsObjects(lang.hitch(this, function(modelObjects) {
							for (var i = 0; i < modelObjects.length; i++) {
								var interfaceText = modelObjects[i];
								if (interfaceText.getRepositoryId()) {
									interfaceText.setRepositoryLabel(this._getRepositoryLabel(interfaceText.getRepositoryId()));
								}
							}
							this.interfaceTexts = modelObjects;
							if (callback) {
								callback();
							}
						}), params);
					}), params);
				}), params);
			}), params);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			this.interfaceTexts[0].updateConfigs(this.interfaceTexts, lang.hitch(this, function(modelObjects) {
				if (callback) {
					callback();
				}
			}), {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			});
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an viewer data object.
	 * 
	 * @param type
	 *            server type.
	 * @memberof ecm.model.admin.LabelsData
	 */
	LabelsData.createLabelsData = function(_SECURITY_TOPIC) {
		return new LabelsData(_SECURITY_TOPIC);
	};
	return LabelsData;
});

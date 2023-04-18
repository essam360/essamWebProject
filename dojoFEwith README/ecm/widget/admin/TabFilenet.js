/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/string",
	"dojo/_base/sniff",
	"dojo/keys",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/CheckBox",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/NumberSpinner",
	"idx/layout/TitlePane",
	"ecm/model/Request",
	"ecm/model/admin/FilenetData",
	"ecm/model/admin/FilenetConfig",
	"ecm/widget/layout/TabController",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabFilenet.html"
], //

function(declare, lang, array, aspect, domClass, string, has, keys, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, //
MessagesMixin, _NavigatorAdminTabBase, HoverHelp, RadioButton, CheckBox, ValidationTextBox, NumberSpinner, TitlePane, Request, FilenetData, FilenetConfig, //
TabController, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabFilenet
	 * @class Provides a widget that contains the widgets that are used to set values for Filenet.
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.TabFilenet", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabFilenet.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "filenet.filenet"
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.data = FilenetData.createFilenetData();
			this._init = false;
			this._disableSave();
			this._disableReset();
			this._setHoverHelp();
			this.downloadCacheMaxSize.set("invalidMessage", this.messages.property_integer_invalid);
			this.downloadCacheMaxFiles.set("invalidMessage", this.messages.property_integer_invalid);
			this.downloadCacheCleanupMin.set("invalidMessage", this.messages.property_integer_invalid);
			this.downloadCacheSizeThreshold.set("invalidMessage", this.messages.property_integer_invalid);
			this.downloadCacheMinLifetime.set("invalidMessage", this.messages.property_integer_invalid);
			this.downloadCacheCleanupDuration.set("invalidMessage", this.messages.property_integer_invalid);
			this.resetButton.set("title", this.messages.reset_hover);
			this.adminGeneralContentPane.set("title", this.messages.admin_general);
			this.communityTwisty.set("title", this.messages.admin_p8_download);
			this.collabConfigTwisty.set("title", this.messages.admin_p8_collaboration_config);
			if (has("dojo-bidi")) {
				BidiComplex.attachInput(this.downloadCacheFolder.focusNode, "FILE_PATH");
				BidiComplex.attachInput(this.downloadCacheUrl.focusNode, "FILE_PATH");
				BidiComplex.attachInput(this.connectionsUrlHttp.focusNode, "URL");
				BidiComplex.attachInput(this.connectionsUrlHttps.focusNode, "URL");
				this.downloadCacheFolder.textDir = "ltr";
				this.downloadCacheUrl.textDir = "ltr";
				this.connectionsUrlHttp.textDir = "ltr";
				this.connectionsUrlHttps.textDir = "ltr";
			}
			this._loadData();
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_loadData: function() {
			this.data.loadData(lang.hitch(this, function() {
				this._loadUI();
				this._checkSave();
			}));
		},

		_loadUI: function() {
			this._init = false;

			if (this.data.filenetConfig.getP8DownloadCacheEnable()) {
				this.downloadCacheEnable.set("checked", true);
				this._onDownloadCacheEnable();
			} else {
				this.downloadCacheDisable.set("checked", true);
				this._onDownloadCacheDisable();
			}
			this.downloadCacheFolder.set("value", this.data.filenetConfig.getP8DownloadCacheFolder());
			this.downloadCacheUrl.set("value", this.data.filenetConfig.getP8DownloadCacheUrl());
			this.downloadCacheMaxFiles.set("value", this.data.filenetConfig.getP8DownloadCacheMaxFiles());
			this.downloadCacheMaxSize.set("value", this.data.filenetConfig.getP8DownloadCacheMaxSize());
			this.downloadCacheCleanupDuration.set("value", this.data.filenetConfig.getP8DownloadCacheCleanupDuration());
			this.downloadCacheCleanupMin.set("value", this.data.filenetConfig.getP8DownloadCacheCleanupMinimum());
			this.downloadCacheMinLifetime.set("value", this.data.filenetConfig.getP8DownloadCacheMinLifetime());
			this.downloadCacheSizeThreshold.set("value", this.data.filenetConfig.getP8DownloadCacheSizeThreshold());
			this.downloadCacheGuardHeader.set("value", this.data.filenetConfig.getP8DownloadCacheGuardHeader());

			if (this.data.filenetConfig.getP8ConnectionsUrl()) {
				this.useUrlIncomingUrl.set("checked", true);
				this._onUseUrlIncomingUrl();
			} else {
				this.useUrlIncomingNone.set("checked", true);
				this._onUseUrlIncomingNone();
			}
			this.connectionsUrlHttp.set("value", this.data.filenetConfig.getP8ConnectionsUrlHttp());
			this.connectionsUrlHttps.set("value", this.data.filenetConfig.getP8ConnectionsUrlHttps());
			if (this.data.filenetConfig.getP8HideEmailAddresses()) {
				this.hideEmailAddressesEnable.set("checked", true);
			} else {
				this.hideEmailAddressesDisable.set("checked", true);
			}
			if (this.data.filenetConfig.getP8MaskUserIds()) {
				this.maskUserIdsEnable.set("checked", true);
			} else {
				this.maskUserIdsDisable.set("checked", true);
			}
			if (this.data.filenetConfig.getP8SoftDelete()) {
				this.softDeleteEnable.set("checked", true);
			} else {
				this.softDeleteDisable.set("checked", true);
			}
			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 200);
		},

		_setHoverHelp: function() {
			this.downloadCacheEnable.setHoverHelp(this.downloadCacheEnableHover);
			this.downloadCacheDisable.setHoverHelp(this.downloadCacheEnableHover);
			this.downloadCacheFolder.setHoverHelp(this.downloadCacheFolderHover);
			this.downloadCacheUrl.setHoverHelp(this.downloadCacheUrlHover);
			this.downloadCacheMaxFiles.setHoverHelp(this.downloadCacheMaxFilesHover);
			this.downloadCacheMaxSize.setHoverHelp(this.downloadCacheMaxSizeHover);
			this.downloadCacheCleanupDuration.setHoverHelp(this.downloadCacheCleanupDurationHover);
			this.downloadCacheCleanupMin.setHoverHelp(this.downloadCacheCleanupMinHover);
			this.downloadCacheMinLifetime.setHoverHelp(this.downloadCacheMinLifetimeHover);
			this.downloadCacheSizeThreshold.setHoverHelp(this.downloadCacheSizeThresholdHover);
			this.downloadCacheGuardHeader.setHoverHelp(this.downloadCacheGuardHeaderHover);

			this.useUrlIncomingNone.setHoverHelp(this.useUrlIncomingHover);
			this.useUrlIncomingUrl.setHoverHelp(this.useUrlIncomingHover);
			this.connectionsUrlHttp.setHoverHelp(this.connectionsUrlHttpHover);
			this.connectionsUrlHttps.setHoverHelp(this.connectionsUrlHttpsHover);
			this.hideEmailAddressesEnable.setHoverHelp(this.hideEmailAddressesEnableHover);
			this.hideEmailAddressesDisable.setHoverHelp(this.hideEmailAddressesEnableHover);
			this.maskUserIdsEnable.setHoverHelp(this.maskUserIdsEnableHover);
			this.maskUserIdsDisable.setHoverHelp(this.maskUserIdsEnableHover);
			this.softDeleteEnable.setHoverHelp(this.softDeleteEnableHover);
			this.softDeleteDisable.setHoverHelp(this.softDeleteEnableHover);
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			var isResetting = true;
			return isResetting;
		},

		_loadWithFieldValues: function(adminModel) {
			adminModel.setP8DownloadCacheEnable(this.downloadCacheEnable.get("checked"));
			adminModel.setP8DownloadCacheFolder(!has("dojo-bidi") ? this.downloadCacheFolder.get("value") : BidiComplex.stripSpecialCharacters(this.downloadCacheFolder.get("value")));
			adminModel.setP8DownloadCacheUrl(!has("dojo-bidi") ? this.downloadCacheUrl.get("value") : BidiComplex.stripSpecialCharacters(this.downloadCacheUrl.get("value")));
			adminModel.setP8DownloadCacheMaxFiles(this.downloadCacheMaxFiles.get("value"));
			adminModel.setP8DownloadCacheMaxSize(this.downloadCacheMaxSize.get("value"));
			adminModel.setP8DownloadCacheCleanupDuration(this.downloadCacheCleanupDuration.get("value"));
			adminModel.setP8DownloadCacheCleanupMinimum(this.downloadCacheCleanupMin.get("value"));
			adminModel.setP8DownloadCacheMinLifetime(this.downloadCacheMinLifetime.get("value"));
			adminModel.setP8DownloadCacheSizeThreshold(this.downloadCacheSizeThreshold.get("value"));
			adminModel.setP8DownloadCacheGuardHeader(this.downloadCacheGuardHeader.get("value"));

			adminModel.setP8ConnectionsUrl(this.useUrlIncomingUrl.get("checked"));
			adminModel.setP8ConnectionsUrlHttp(!has("dojo-bidi") ? this.connectionsUrlHttp.get("value") : BidiComplex.stripSpecialCharacters(this.connectionsUrlHttp.get("value")));
			adminModel.setP8ConnectionsUrlHttps(!has("dojo-bidi") ? this.connectionsUrlHttps.get("value") : BidiComplex.stripSpecialCharacters(this.connectionsUrlHttps.get("value")));
			adminModel.setP8HideEmailAddresses(this.hideEmailAddressesEnable.get("checked"));
			adminModel.setP8MaskUserIds(this.maskUserIdsEnable.get("checked"));
			adminModel.setP8SoftDelete(this.softDeleteEnable.get("checked"));
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete, closingAfterSave) {
			this._loadWithFieldValues(this.data.filenetConfig);
			this.data.save(lang.hitch(this, function() {
				if (onComplete) {
					onComplete(true);
				}
			}));
		},

		resize: function() {
			this.borderContainer.resize();
			this.inherited(arguments);
		},

		_onFieldChange: function() {
			if (this._init) {
				this._markDirty();
			}
		},

		_onDownloadCacheEnable: function() {
			this.downloadCacheFolder.set("disabled", false);
			this.downloadCacheUrl.set("disabled", false);
			this.downloadCacheMaxFiles.set("disabled", false);
			this.downloadCacheMaxSize.set("disabled", false);
			this.downloadCacheCleanupDuration.set("disabled", false);
			this.downloadCacheCleanupMin.set("disabled", false);
			this.downloadCacheMinLifetime.set("disabled", false);
			this.downloadCacheSizeThreshold.set("disabled", false);
			this.downloadCacheGuardHeader.set("disabled", false);
			//this.generateConfigButton.set("disabled", false);
			//this.configData.set("disabled", false);
		},

		_onDownloadCacheDisable: function() {
			this.downloadCacheFolder.set("disabled", true);
			this.downloadCacheUrl.set("disabled", true);
			this.downloadCacheMaxFiles.set("disabled", true);
			this.downloadCacheMaxSize.set("disabled", true);
			this.downloadCacheCleanupDuration.set("disabled", true);
			this.downloadCacheCleanupMin.set("disabled", true);
			this.downloadCacheMinLifetime.set("disabled", true);
			this.downloadCacheSizeThreshold.set("disabled", true);
			this.downloadCacheGuardHeader.set("disabled", true);
			//this.generateConfigButton.set("disabled", true);
			//this.configData.set("disabled", true);
		},

		_onUseUrlIncomingNone: function() {
			this.connectionsUrlHttp.set("disabled", true);
			this.connectionsUrlHttps.set("disabled", true);
			this._onFieldChange();
		},

		_onUseUrlIncomingUrl: function() {
			this.connectionsUrlHttp.set("disabled", false);
			this.connectionsUrlHttps.set("disabled", false);
			this._onFieldChange();
		},

		/**
		 * Overwritten to check if all fields are valid.
		 */
		_validateData: function() {
			var valid = true;
			if (this.useUrlIncomingUrl.get("checked")) {
				if (this.connectionsUrlHttp.get("value") == "" || this.connectionsUrlHttps.get("value") == "") {
					return false;
				}
			}
			return valid;
		}

	});
});

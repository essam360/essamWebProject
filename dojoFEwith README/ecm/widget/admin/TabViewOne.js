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
	"dojo/dom-attr",
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
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/CheckBox",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/NumberSpinner",
	"ecm/widget/Select",
	"idx/layout/TitlePane",
	"ecm/model/Request",
	"ecm/model/admin/ViewOneData",
	"ecm/model/admin/ViewOneConfig",
	"ecm/widget/admin/CustomSettings",
	"ecm/widget/admin/CustomSettingsDialog",
	"ecm/widget/layout/TabController",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabViewOne.html"
], //

function(declare, lang, array, aspect, domClass, domAttr, string, has, keys, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, //
LoggerMixin, MessagesMixin, _NavigatorAdminTabBase, HoverHelp, RadioButton, CheckBox, ValidationTextBox, NumberSpinner, Select, TitlePane, Request, ViewOneData, ViewOneConfig, //
CustomSettings, CustomSettingsDialog, TabController, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabViewOne
	 * @class Provides a widget that contains the widgets that are used to set values for the Daeja ViewOne viewer.
	 * @since 2.0.3
	 */
	var TabViewOne = declare("ecm.widget.admin.TabViewOne", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabViewOne.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "viewone.viewone"
		},

		postCreate: function() {
			this.inherited(arguments);
			this.resetButton.set("title", this.messages.reset_hover);
			this.generalContentPane.set("title", this.messages.admin_general);
			this.viewOneVirtualTab.set("title", this.messages.admin_daeja_virtual);
			this.viewOneStreaming.set("title", this.messages.admin_daeja_streamer);
			this.viewOneRedaction.set("title", this.messages.admin_daeja_redaction);
			this.proCustomSettings.dialogClass = _ProCustomSettingsDialog;
			this.virtualCustomSettings.dialogClass = _VirtualCustomSettingsDialog;
			this.streamerCustomSettings.dialogClass = _ServiceCustomSettingsDialog;
			this.redactionCustomSettings.dialogClass = _ServiceCustomSettingsDialog;
			this.viewOneProfessionalTab.set("title", this.messages.admin_daeja_viewonepro);
			domAttr.set(this.daejaStreamPDFDisable.focusNode, "aria-label", this.messages.admin_daeja_viewonepro_stream_pdf_documents + " " + this.messages.disable);
			domAttr.set(this.daejaStreamTIFFDisable.focusNode, "aria-label", this.messages.admin_daeja_viewonepro_stream_tiff_documents + " " + this.messages.disable);
			domAttr.set(this.proRouteDocsDisable.focusNode, "aria-label", this.messages.admin_daeja_viewonepro_route_docs + " " + this.messages.disable);
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.viewOneData = ViewOneData.createViewOneData();
			this._init = false;
			this._disableSave();
			this._disableReset();
			this._setHoverHelp();
			this._loadData();
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_loadData: function() {
			this.viewOneData.loadData(lang.hitch(this, function() {
				this._loadUI();
				this._checkSave();
			}));
		},

		_getViewerFnAnnotationTooltip: function() {
			return string.substitute(ecm.messages.viewer_fn_annotation_tooltip, ["<creator>", "<createdate>"]);	
		},
		
		_loadUI: function() {
			this._init = false;
			var value;
			var viewOneConfig = this.viewOneData.viewOneConfig;

			value = viewOneConfig.getDaejaStreamPDF();
			this._setRadioEnable(this.daejaStreamPDFEnable, this.daejaStreamPDFDisable, value);

			value = viewOneConfig.getDaejaStreamTIFF();
			this._setRadioEnable(this.daejaStreamTIFFEnable, this.daejaStreamTIFFDisable, value);

			value = viewOneConfig.getProRouteDocs();
			this._setRadioEnable(this.proRouteDocsEnable, this.proRouteDocsDisable, value);

			value = viewOneConfig.getProScale();
			this.proScale.set("value", value);

			value = viewOneConfig.getProFileButtons();
			this.proFileButtonsEnable.set("checked", value);

			value = viewOneConfig.getProFileMenus();
			this.proFileMenusEnable.set("checked", value);

			value = viewOneConfig.getProPrintButtons();
			this.proPrintButtonsEnable.set("checked", value);

			value = viewOneConfig.getProPrintMenus();
			this.proPrintMenusEnable.set("checked", value);

			value = viewOneConfig.getProInvertButtons();
			this.proInvertButtonsEnable.set("checked", value);

			value = viewOneConfig.getProFileKeys();
			this.proFileKeysEnable.set("checked", value);

			value = viewOneConfig.getProPrintKeys();
			this.proPrintKeysEnable.set("checked", value);

			// if no default custom tooltip found in configuration, apply default value
			value = viewOneConfig.getProCustomTooltipUsePredefined();
			if (typeof value === 'undefined' || value === null || value == true) {
				this.proDefaultCustomTooltipFlag.set("checked", true);
				this.proCustomTooltip.set("value", this._getViewerFnAnnotationTooltip());
				this.proCustomTooltip.set("disabled", true);
			} else {
				var tooltipValue = viewOneConfig.getProCustomTooltip();
				this.proCustomTooltip.set("value", tooltipValue);
			}

			value = viewOneConfig.getProHelpUrl();
			this.proHelpUrl.set("value", value);

			value = viewOneConfig.getProImageStampResourceContext();
			this.proImageStampResourceContext.set("value", value);

			value = viewOneConfig.getProCustomSettings();
			this.proCustomSettings.setCustomSettingsJSON(dojo.isString(value) && value != "" ? value : "{}");

			// if no default custom tooltip found in configuration, apply default value
			value = viewOneConfig.getVirtualCustomTooltipUsePredefined();
			if (typeof value === 'undefined' || value === null || value == true) {
				this.virtualDefaultCustomTooltipFlag.set("checked", true);
				this.virtualCustomTooltip.set("value", this._getViewerFnAnnotationTooltip());
				this.virtualCustomTooltip.set("disabled", true);
			} else {
				var tooltipValue = viewOneConfig.getVirtualCustomTooltip();
				this.virtualCustomTooltip.set("value", tooltipValue);
			}
			
			var virtualLicenseFilePath = viewOneConfig.getVirtualLicenseFilePath();
			if(virtualLicenseFilePath != ""){
				this.licensePathSpecified.set('checked', true);
				this.licensePathSpecifiedList.set('value', virtualLicenseFilePath);
			}
			else{
				this.defaultLicensePath.set('checked', true);
				this.licensePathSpecifiedList.set("disabled", true);
				this.licensePathSpecifiedList.set('value',"");
			}
			value = viewOneConfig.getVirtualImageStampResourceContext();
			this.virtualImageStampResourceContext.set("value", value);

			value = viewOneConfig.getVirtualCustomSettings();
			this.virtualCustomSettings.setCustomSettingsJSON(dojo.isString(value) && value != "" ? value : "{}");

			value = viewOneConfig.getStreamerCacheRoot();
			this.streamerCacheRoot.set("value", value);

			value = viewOneConfig.getStreamerCustomSettings();
			this.streamerCustomSettings.setCustomSettingsJSON(dojo.isString(value) && value != "" ? value : "{}");

			value = viewOneConfig.getRedactionCustomSettings();
			this.redactionCustomSettings.setCustomSettingsJSON(dojo.isString(value) && value != "" ? value : "{}");

			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 200);
		},

		_setRadioEnable: function(radioEnable, radioDisable, value) {
			if (value) {
				radioEnable.set("checked", true);
			} else {
				radioDisable.set("checked", true);
			}
		},

		_setHoverHelp: function() {
			this.daejaStreamPDFEnable.setHoverHelp(this.daejaStreamPDFHoverHelp);
			this.daejaStreamPDFDisable.setHoverHelp(this.daejaStreamPDFHoverHelp);
			this.daejaStreamTIFFEnable.setHoverHelp(this.daejaStreamTIFFHoverHelp);
			this.daejaStreamTIFFDisable.setHoverHelp(this.daejaStreamTIFFHoverHelp);
			this.proRouteDocsEnable.setHoverHelp(this.proRouteDocsHoverHelp);
			this.proRouteDocsDisable.setHoverHelp(this.proRouteDocsHoverHelp);
			this.proCustomTooltip.setHoverHelp(this.proCustomTooltipHoverHelp);
			this.proHelpUrl.setHoverHelp(this.proHelpUrlHoverHelp);
			this.proImageStampResourceContext.setHoverHelp(this.proImageStampResourceHoverHelp);
			this.virtualCustomTooltip.setHoverHelp(this.virtualCustomTooltipHoverHelp);
			this.virtualImageStampResourceContext.setHoverHelp(this.virtualImageStampResourceHoverHelp);
			this.streamerCacheRoot.setHoverHelp(this.streamerCacheRootHoverHelp);
			this.proFileKeysEnable.setHoverHelp(this.proFileKeysHover);
			this.proPrintKeysEnable.setHoverHelp(this.proPrintKeysHover);
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			var isResetting = true;
			return isResetting;
		},

		_loadWithFieldValues: function(adminModel) {
			adminModel.setDaejaStreamPDF(this.daejaStreamPDFEnable.get('checked'));
			adminModel.setDaejaStreamTIFF(this.daejaStreamTIFFEnable.get('checked'));
			adminModel.setProRouteDocs(this.proRouteDocsEnable.get('checked'));
			adminModel.setProScale(this.proScale.get('value'));
			adminModel.setProFileButtons(this.proFileButtonsEnable.get('checked'));
			adminModel.setProFileMenus(this.proFileMenusEnable.get('checked'));
			adminModel.setProPrintButtons(this.proPrintButtonsEnable.get('checked'));
			adminModel.setProPrintMenus(this.proPrintMenusEnable.get('checked'));
			adminModel.setProInvertButtons(this.proInvertButtonsEnable.get('checked'));
			adminModel.setProFileKeys(this.proFileKeysEnable.get('checked'));
			adminModel.setProPrintKeys(this.proPrintKeysEnable.get('checked'));
			adminModel.setProCustomTooltip(this.proCustomTooltip.get('value'));
			adminModel.setProHelpUrl(this.proHelpUrl.get('value'));
			adminModel.setProImageStampResourceContext(this.proImageStampResourceContext.get('value'));
			if (this.licensePathSpecified.get('checked')) {
				adminModel.setVirtualLicenseFilePath(this.licensePathSpecifiedList.get('value'));
			}
			else{
				adminModel.setVirtualLicenseFilePath("");
			}
			adminModel.setProCustomSettings(this.proCustomSettings.getCustomSettingsJSON());
			adminModel.setStreamerCacheRoot(this.streamerCacheRoot.get('value'));
			adminModel.setStreamerCustomSettings(this.streamerCustomSettings.getCustomSettingsJSON());
			adminModel.setRedactionCustomSettings(this.redactionCustomSettings.getCustomSettingsJSON());
			adminModel.setVirtualCustomTooltip(this.virtualCustomTooltip.get('value'));
			adminModel.setVirtualImageStampResourceContext(this.virtualImageStampResourceContext.get('value'));
			adminModel.setVirtualCustomSettings(this.virtualCustomSettings.getCustomSettingsJSON());
			adminModel.setProCustomTooltipUsePredefined(this.proDefaultCustomTooltipFlag.get("checked"));
			adminModel.setVirtualCustomTooltipUsePredefined(this.virtualDefaultCustomTooltipFlag.get("checked"));
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete, closingAfterSave) {
			this._loadWithFieldValues(this.viewOneData.viewOneConfig);
			this.viewOneData.save(lang.hitch(this, function() {
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

		_onProDefaultCustomTooltipFlagChange: function() {
			var flagChecked = this.proDefaultCustomTooltipFlag.get("checked");
			if (flagChecked) {
				this.proCustomTooltip.set("value", this._getViewerFnAnnotationTooltip());
			}
			this.proCustomTooltip.set("disabled", flagChecked);
		},
		
		_onUseDefaultLicensePath:function(){
			this.licensePathSpecifiedList.set('disabled', true);
			this.licensePathSpecifiedList.set('value', "");
		},
		
		_onlicensePathSpecified:function(){
			this.licensePathSpecifiedList.set('disabled', false);
		},
		
		_onVirtualDefaultCustomTooltipFlagChange: function() {
			var flagChecked = this.virtualDefaultCustomTooltipFlag.get("checked");
			if (flagChecked) {
				this.virtualCustomTooltip.set("value", this._getViewerFnAnnotationTooltip());
			}
			this.virtualCustomTooltip.set("disabled", flagChecked);
		},

		onViewOneHelp: function() { // invoked when the help link is clicked
			ecm.model.admin.appCfg.openSupport2HelpWindow("eucco084.dita");
		},

		/**
		 * Overwritten to check if all fields are valid.
		 */
		_validateData: function() {
			if(this.streamerCacheRoot.isValid())
				return true;
			else
				return false;
		},
	});

	var _ProCustomSettingsDialog = declare("ecm.widget.admin._ProCustomSettingsDialog", [
		CustomSettingsDialog
	], {
		/** @lends ecm.widget.admin._ProCustomSettingsDialog.prototype */

		blockedParameters: {
			logfile: true,
			customannotationtooltip: true,
			filebuttons: true,
			filekeys: true,
			filemenus: true,
			helpurl: true,
			invertbuttons: true,
			printbuttons: true,
			routedocs: true,
			scale: true,
			filenetsystem: true,
			cabbase: true,
			code: true,
			codebase: true,
			cache_archive: true,
			cache_version: true,
			name: true,
			id: true,
			userid: true,
			filename: true,
			eventhandler: true,
			annotationjavascriptextensions: true,
			javascriptextensions: true,
			mayscript: true
		},

		postCreate: function() {
			this.inherited(arguments);

			this.editTitle = this.messages.admin_daeja_setting_dialog_title_edit;
			this.addTitle = this.messages.admin_daeja_setting_dialog_title_new;
			this.addIntroText = this.messages.admin_daeja_setting_dialog_hover_help;
			this.nameFieldHoverHelp = this.messages.admin_daeja_setting_dialog_field_hover_help;
			this.valueFieldHoverHelp = this.messages.admin_daeja_setting_dialog_field_hover_help;

			this.nameField.validator = lang.hitch(this, function(value, constraints) {
				var valid = this.isNameFieldValid();
				if (valid) {
					// block some parameters.
					if (this.blockedParameters[value.toLowerCase()]) {
						valid = false;
					}
				}

				return valid;
			});
		}
	});

	var _VirtualCustomSettingsDialog = declare("ecm.widget.admin._VirtualCustomSettingsDialog", [
		CustomSettingsDialog
	], {
		/** @lends ecm.widget.admin._ProCustomSettingsDialog.prototype */

		blockedParameters: {
			logfile: true,
			customannotationtooltip: true,
			cabbase: true,
			code: true,
			codebase: true,
			cache_archive: true,
			cache_version: true,
			name: true,
			id: true,
			userid: true,
			filename: true,
			eventhandler: true,
			annotationjavascriptextensions: true,
			javascriptextensions: true,
			mayscript: true
		},

		postCreate: function() {
			this.inherited(arguments);

			this.editTitle = this.messages.admin_daeja_setting_dialog_title_edit;
			this.addTitle = this.messages.admin_daeja_setting_dialog_title_new;
			this.addIntroText = this.messages.admin_daeja_setting_dialog_hover_help;
			this.nameFieldHoverHelp = this.messages.admin_daeja_setting_dialog_field_hover_help;
			this.valueFieldHoverHelp = this.messages.admin_daeja_setting_dialog_field_hover_help;

			this.nameField.validator = lang.hitch(this, function(value, constraints) {
				var valid = this.isNameFieldValid();
				if (valid) {
					// block some parameters.
					if (this.blockedParameters[value.toLowerCase()]) {
						valid = false;
					}
				}

				return valid;
			});
		}
	});

	var _ServiceCustomSettingsDialog = declare("ecm.widget.admin._ServiceCustomSettingsDialog", [
		CustomSettingsDialog
	], {
		/** @lends ecm.widget.admin._ServiceCustomSettingsDialog.prototype */

		blockedParameters: {
			trace: true,
			traceNet: true,
			logfile: true,
			cacheroot: true,
		},

		postCreate: function() {
			this.inherited(arguments);

			this.editTitle = this.messages.admin_daeja_setting_dialog_title_edit;
			this.addTitle = this.messages.admin_daeja_setting_dialog_title_new;
			this.addIntroText = this.messages.admin_daeja_setting_dialog_hover_help;
			this.nameFieldHoverHelp = this.messages.admin_daeja_setting_dialog_field_hover_help;
			this.valueFieldHoverHelp = this.messages.admin_daeja_setting_dialog_field_hover_help;

			this.nameField.validator = lang.hitch(this, function(value, constraints) {
				var valid = this.isNameFieldValid();
				if (valid) {
					// block some parameters.
					if (this.blockedParameters[value.toLowerCase()]) {
						valid = false;
					}
				}

				return valid;
			});
		}
	});

	return TabViewOne;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/store/Memory",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dojox/html/entities",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/widget/RadioButton",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/layout/NavigatorMainLayout",
	"ecm/widget/FilteringSelect",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopAppearance.html"
],

function(declare, lang, array, has, style, MemoryStore, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, entities, Messages, LoggerMixin, MessagesMixin, DesktopData, AdminRoleConfig, RadioButton, HoverHelp, ValidationTextBox, NavigatorMainLayout, FilteringSelect, BidiComplex, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.DesktopAppearance
	 * @class Provides a pane that is used to customize the appearance of the desktop and to specify which features
	 *        users can access from this desktop.
	 */

	return declare("ecm.widget.admin.DesktopAppearance", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.DesktopAppearance.prototype */

		templateString: template,
		widgetsInTemplate: true,
		ADMIN_FEATURE_ID: "ecmClientAdmin",
		_itemStores: null,
		_init: false,

		constructor: function(id, name) {
			if (!this._itemStores) {
				this._itemStores = {};
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			this._setHoverHelp();
			this.deprecatedFeaturesTitlePane.set("title", this.messages.admin_desktop_deprecated_appearance_title);

			if (has("dojo-bidi")) {
				this._loginPageLogoUrl.set("textDir", "ltr");
				this._helpUrlUrl.set("textDir", "ltr");
				this._bannerLogoUrl.set("textDir", "ltr");
				this._loginPageContentUrl.set("textDir", "ltr");
				this._passwordRulesUrl.set("textDir", "ltr");
				BidiComplex.attachInput(this._loginPageLogoUrl.focusNode, "URL");
				BidiComplex.attachInput(this._helpUrlUrl.focusNode, "URL");
				BidiComplex.attachInput(this._bannerLogoUrl.focusNode, "URL");
				BidiComplex.attachInput(this._loginPageContentUrl.focusNode, "URL");
				BidiComplex.attachInput(this._passwordRulesUrl.focusNode, "URL");
			}
		},

		/*
		 * Called before tab got closed. Give each tab a chance to cleanup.
		 */
		_uninitialize: function() {
			this._init = false;
		},

		_setHoverHelp: function() {
			this._application_name.setHoverHelp(this._application_name_field_hover);
			this._loginPageLogoNone.setHoverHelp(this._loginPageLogoHover);
			this._loginPageLogoEnabled.setHoverHelp(this._loginPageLogoHover);
			this._loginPageLogoUrl.setHoverHelp(this._loginPageLogoUrlHover);

			this._helpUrlNone.setHoverHelp(this._helpUrlHover);
			this._helpUrlEnabled.setHoverHelp(this._helpUrlHover);
			this._helpUrlUrl.setHoverHelp(this._helpUrlUrlHover);
			this._helpKCEnabled.setHoverHelp(this._helpKCHelpHover);
			this._helpKCTax.setHoverHelp(this._helpKCTaxHover);
			this._helpKCContext.setHoverHelp(this._helpKCContextHover);
			this._helpKCWelcome.setHoverHelp(this._helpKCWelcomeHover);

			this._bannerLogoNone.setHoverHelp(this._banner_logo_file_field_hover);
			this._bannerLogoEnabled.setHoverHelp(this._banner_logo_file_field_hover);
			this._bannerLogoUrl.setHoverHelp(this._bannerLogoUrlHover);
			this._bannerBackgroundColorCustom.setHoverHelp(this._banner_background_color_field_hover);
			this._bannerBackgroundColorDefault.setHoverHelp(this._banner_background_color_field_hover);
			this._bannerBackgroundColor.setHoverHelp(this._bannerBackgroundColorCustomHover);
			this._bannerApplicationNameColorDefault.setHoverHelp(this._banner_application_name_color_hover);
			this._bannerApplicationNameColorCustom.setHoverHelp(this._banner_application_name_color_hover);
			this._bannerApplicationNameColor.setHoverHelp(this._bannerApplicationNameColorCustomHover);
			this._bannerMenuColorLight.setHoverHelp(this._banner_menu_color_hover);
			this._bannerMenuColorDark.setHoverHelp(this._banner_menu_color_hover);
			this._loginPageContentNone.setHoverHelp(this._loginPageContentHover);
			this._loginPageContentEnabled.setHoverHelp(this._loginPageContentHover);
			this._loginPageContentUrl.setHoverHelp(this._loginPageContentUrlHover);
			this._passwordRulesNone.setHoverHelp(this._passwordRulesHover);
			this._passwordRulesEnabled.setHoverHelp(this._passwordRulesHover);
			this._passwordRulesUrl.setHoverHelp(this._passwordRulesUrlHover);
			this._themesField.setHoverHelp(this._themesHover);
		},

		destroy: function() {
			this.logEntry("destroy");

			this._cleanupData();
			this.tabRepositories = null;

			this.inherited(arguments);
			this.logExit("destroy");
		},

		_cleanupData: function() {
			this.logEntry("_cleanupData");

			if (this._itemStores) {
				array.forEach(this._itemStores, lang.hitch(this, function(entry, index) {
					if (entry && entry.availableStore) {
						entry.availableStore.save();
						entry.availableStore.close();
						delete entry.availableStore;
					}
				}));
				this._itemStores = null;
			}
			this._itemStores = {};
			this._init = false;

			this.logExit("_cleanupData");
		},

		/**
		 * Called before save
		 */
		loadWithFieldValues: function(desktopConfig) {
			this.logEntry("loadWithFieldValues");
			if (has("dojo-bidi")) {
				this._loginPageLogoUrl.set('value', BidiComplex.stripSpecialCharacters(this._loginPageLogoUrl.get('value')));
				this._helpUrlUrl.set('value', BidiComplex.stripSpecialCharacters(this._helpUrlUrl.get('value')));
				this._bannerLogoUrl.set('value', BidiComplex.stripSpecialCharacters(this._bannerLogoUrl.get('value')));
				this._loginPageContentUrl.set('value', BidiComplex.stripSpecialCharacters(this._loginPageContentUrl.get('value')));
				this._passwordRulesUrl.set('value', BidiComplex.stripSpecialCharacters(this._passwordRulesUrl.get('value')));
			}
			desktopConfig.setApplicationName(this._application_name.get('value'));
			desktopConfig.setLoginInformationUrl(this._loginPageContentEnabled.get('checked') ? this._loginPageContentUrl.get('value') : "");
			desktopConfig.setPasswordRulesUrl(this._passwordRulesEnabled.get('checked') ? this._passwordRulesUrl.get('value') : "");
			desktopConfig.setLoginLogoUrl(this._loginPageLogoEnabled.get('checked') ? this._loginPageLogoUrl.get('value') : "");

			desktopConfig.setHelpUrl(this._helpUrlEnabled.get('checked') ? this._helpUrlUrl.get('value') : "");
			desktopConfig.setKCHelpTaxonomy(this._helpKCEnabled.get('checked') ? this._helpKCTax.get('value') : "");
			desktopConfig.setKCHelpContext(this._helpKCEnabled.get('checked') ? this._helpKCContext.get('value') : "");
			desktopConfig.setKCHelpWelcome(this._helpKCEnabled.get('checked') ? this._helpKCWelcome.get('value') : "");

			desktopConfig.setBannerLogoUrl(this._bannerLogoEnabled.get('checked') ? this._bannerLogoUrl.get('value') : "");
			desktopConfig.setBannerBackgroundColor(this._bannerBackgroundColorCustom.get('checked') ? this._bannerBackgroundColor.get('value') : "");
			desktopConfig.setBannerApplicationNameColor(this._bannerApplicationNameColorCustom.get('checked') ? this._bannerApplicationNameColor.get('value') : "");
			desktopConfig.setBannerMenuColor(this._bannerMenuColorLight.get('checked') ? "#FFFFFF" : "#000000");

			var theme = this._themesField.get("value");
			desktopConfig.setTheme(theme == "_default_" ? "" : theme);

			desktopConfig.setLayoutActionHandler("ecm.widget.layout.CommonActionsHandler");
			
			var values = [];
			var ids = [];
			var id = desktopConfig.id + "." + "applicationName";
			var interfaceText = ecm.model.admin.InterfaceTextConfig.createInterfaceTextConfig(id);
			interfaceText.id = id;
			interfaceText.setType("desktop");
			interfaceText.setDesktopId(desktopConfig.id);
			interfaceText.setLabelKey(ecm.messages.product_name);
			interfaceText.setDisplayedIn("admin_application_name");
			values.push(interfaceText);
			ids.push(id);
			desktopConfig.setApplicationNameLabelsParam(values, ids);
			
			this.logExit("loadWithFieldValues");
		},

		/**
		 * @since 2.0.3
		 */
		setData: function(desktopData) {
			this.desktopData = desktopData;
		},

		/**
		 * Called when the user hits the Reset button or when the desktop tab opens. Need to call load available and
		 * load selected in sequence.
		 */
		loadData: function(onComplete) {
			this.logEntry("loadData");
			this._cleanupData();
			this._loadAvailableLayout(lang.hitch(this, function() {
				setTimeout(lang.hitch(this, this.initializationOnComplete, onComplete), 2000);
			}));
			this.resize();
			this.logExit("loadData");
		},

		initializationOnComplete: function(onComplete) {
			this._init = true;
			if (onComplete) {
				onComplete();
			}
		},

		/**
		 * Get layout definition from server.
		 */
		_loadAvailableLayout: function(onComplete) {
			this.logEntry("_loadAvailableLayout");			
			this._application_name.set('value', this.desktopData.desktopConfig ? this.desktopData.desktopConfig.getApplicationName() : "");
			this._bannerLogoUrl.set('value', this.desktopData.desktopConfig ? this.desktopData.desktopConfig.getBannerLogoUrl() : "");

			this._bannerBackgroundColor.pattern = '\#[A-Fa-f0-9]{6}|\#[A-Fa-f0-9]{3}';
			this._bannerBackgroundColor.invalidMessage = this.messages.invalid_color_message;
			this._bannerBackgroundColor.set('value', this.desktopData.desktopConfig ? this.desktopData.desktopConfig.getBannerBackgroundColor() : "");

			this._bannerApplicationNameColor.pattern = '\#[A-Fa-f0-9]{6}|\#[A-Fa-f0-9]{3}';
			this._bannerApplicationNameColor.invalidMessage = this.messages.invalid_color_message;
			this._bannerApplicationNameColor.set('value', this.desktopData.desktopConfig ? this.desktopData.desktopConfig.getBannerApplicationNameColor() : "");

			// default is false
			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getLoginInformationUrl() && this.desktopData.desktopConfig.getLoginInformationUrl() != "") {
				this._loginPageContentEnabled.set('checked', true);
				this._loginPageContentUrl.set('value', this.desktopData.desktopConfig.getLoginInformationUrl());
				this._loginPageContentUrl.set('disabled', false);
			} else {
				this._loginPageContentNone.set('checked', true);
				this._loginPageContentUrl.set('disabled', true);
				this._loginPageContentUrl.reset();
			}

			// default is false
			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getPasswordRulesUrl() && this.desktopData.desktopConfig.getPasswordRulesUrl() != "") {
				this._passwordRulesEnabled.set('checked', true);
				this._passwordRulesUrl.set('value', this.desktopData.desktopConfig.getPasswordRulesUrl());
				this._passwordRulesUrl.set('disabled', false);
			} else {
				this._passwordRulesNone.set('checked', true);
				this._passwordRulesUrl.set('disabled', true);
				this._passwordRulesUrl.reset();
			}

			// default is false
			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getLoginLogoUrl() && this.desktopData.desktopConfig.getLoginLogoUrl() != "") {
				this._loginPageLogoEnabled.set('checked', true);
				this._loginPageLogoUrl.set('value', this.desktopData.desktopConfig.getLoginLogoUrl());
				this._loginPageLogoUrl.set('disabled', false);
			} else {
				this._loginPageLogoNone.set('checked', true);
				this._loginPageLogoUrl.set('disabled', true);
				this._loginPageLogoUrl.reset();
			}

			// default is false unless user sat this value before
			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getHelpUrl() && this.desktopData.desktopConfig.getHelpUrl() != "") {
				this._helpUrlEnabled.set('checked', true);
				this._helpUrlUrl.set('value', this.desktopData.desktopConfig.getHelpUrl());
				this.onHelpUrlEnabled();
			} else if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getKCHelpTaxonomy() && this.desktopData.desktopConfig.getKCHelpTaxonomy() != "") {
				this._helpKCEnabled.set('checked', true);
				this._helpKCTax.set('value', this.desktopData.desktopConfig.getKCHelpTaxonomy());
				this._helpKCContext.set('value', this.desktopData.desktopConfig.getKCHelpContext());
				this._helpKCWelcome.set('value', this.desktopData.desktopConfig.getKCHelpWelcome());
				this.onHelpKCEnabled();
			} else {
				this._helpUrlNone.set('checked', true);
				this.onHelpUrlNone();
			}

			// default is false
			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getBannerLogoUrl() && this.desktopData.desktopConfig.getBannerLogoUrl() != "") {
				this._bannerLogoEnabled.set('checked', true);
				this._bannerLogoUrl.set('value', this.desktopData.desktopConfig.getBannerLogoUrl());
				this._bannerLogoUrl.set('disabled', false);
			} else {
				this._bannerLogoNone.set('checked', true);
				this._bannerLogoUrl.set('disabled', true);
				this._bannerLogoUrl.reset();
			}

			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getBannerBackgroundColor() && this.desktopData.desktopConfig.getBannerBackgroundColor() != "") {
				this._bannerBackgroundColorCustom.set('checked', true);
				this._bannerBackgroundColor.set('value', this.desktopData.desktopConfig.getBannerBackgroundColor());
				this._bannerBackgroundColor.set('disabled', false);
			} else {
				this._bannerBackgroundColorDefault.set('checked', true);
				this._bannerBackgroundColor.set('disabled', true);
			}

			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getBannerApplicationNameColor() && this.desktopData.desktopConfig.getBannerApplicationNameColor() != "") {
				this._bannerApplicationNameColorCustom.set('checked', true);
				this._bannerApplicationNameColor.set('value', this.desktopData.desktopConfig.getBannerApplicationNameColor());
				this._bannerApplicationNameColor.set('disabled', false);
			} else {
				this._bannerApplicationNameColorDefault.set('checked', true);
				this._bannerApplicationNameColor.set('disabled', true);
			}

			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getBannerMenuColor() == "#000000") {
				this._bannerMenuColorDark.set("checked", true);
			} else {
				this._bannerMenuColorLight.set("checked", true);
			}

			// Populate the themes drop-down
			var _items = [{
				"id": "_default_",
				"label": this.messages.default_label
			}];
			array.forEach(this.desktopData.themes, lang.hitch(this, function(entry, index) {
				_items.push({
					"id": entry.id,
					"label": entry.getName()
				});
			}));
			this._themesField.set("store", new MemoryStore({
				data: _items
			}));
			this._themesField.set("value", this.desktopData.desktopConfig.getTheme() || "_default_");

			if (onComplete)
				onComplete();
			this.logExit("_loadAvailableLayout");
		},

		validateColor: function(widget, focus, required) {
			var value = widget.get('value');
			if (value) {
				if (!widget.validate()) {
					if (focus)
						widget.focus();
					return false;
				}
			} else {
				if (required) {
					if (focus)
						widget.focus();
					return false;
				}
			}
			return true;
		},

		validateNotNull: function(widget, focus, required) {
			var value = widget.get('value');
			if (!value && required) {
				if (focus)
					widget.focus();
				return false;
			}
			return true;
		},

		// Check if all the data is valid
		validateData: function(focus) {
			var valid = true;
			if (!this._init)
				return valid;

			if (valid && this._bannerBackgroundColorCustom.get('checked'))
				valid = this.validateColor(this._bannerBackgroundColor, focus, true);

			if (valid && this._bannerApplicationNameColorCustom.get('checked'))
				valid = this.validateColor(this._bannerApplicationNameColor, focus, true);

			if (valid && this._loginPageContentEnabled.get('checked'))
				valid = this.validateNotNull(this._loginPageContentUrl, focus, true);

			if (valid && this._passwordRulesEnabled.get('checked'))
				valid = this.validateNotNull(this._passwordRulesUrl, focus, true);

			if (valid && this._loginPageLogoEnabled.get('checked'))
				valid = this.validateNotNull(this._loginPageLogoUrl, focus, true);

			if (valid && this._helpUrlEnabled.get('checked'))
				valid = this.validateNotNull(this._helpUrlUrl, focus, true);

			if (valid && this._helpKCEnabled.get('checked')) {
				valid = this.validateNotNull(this._helpKCTax, focus, true);
				if (valid)
					valid = this.validateNotNull(this._helpKCContext, focus, true);
				if (valid)
					valid = this.validateNotNull(this._helpKCWelcome, focus, true);
			}

			if (valid && this._bannerLogoEnabled.get('checked'))
				valid = this.validateNotNull(this._bannerLogoUrl, focus, true);

			return valid;
		},

		compareValue: function(value, control) {
			if (value)
				return value == control.get('value');
			else
				return control.get('value') == "";
		},

		compareUrlValue: function(enabledControl, valueControl, value) {
			if (enabledControl.get('checked'))
				return value == valueControl.get('value');
			else
				return valueControl.get('value') == "" || value == valueControl.get('value');
		},

		isResetingFields: function() {
			if (!this._init)
				return true;

			if (this.desktopData.desktopConfig) {
				if (!this.compareValue(this.desktopData.desktopConfig.getApplicationName(), this._application_name))
					return false;
				else if (!this.compareValue(this.desktopData.desktopConfig.getBannerLogoUrl(), this._bannerLogoUrl))
					return false;
				else if (this._bannerBackgroundColorCustom.get('checked') && (this._bannerBackgroundColor.get('value') != this.desktopData.desktopConfig.getBannerBackgroundColor()))
					return false;
				else if (this._bannerApplicationNameColorCustom.get('checked') && (this._bannerApplicationNameColor.get('value') != this.desktopData.desktopConfig.getBannerApplicationNameColor()))
					return false;

				if (this._bannerMenuColorLight.get('checked') && (this.desktopData.desktopConfig.getBannerMenuColor() && this.desktopData.desktopConfig.getBannerMenuColor() != "#FFFFFF"))
					return false;
				else if (this._bannerMenuColorDark.get('checked') && (this.desktopData.desktopConfig.getBannerMenuColor() && this.desktopData.desktopConfig.getBannerMenuColor() != "#000000"))
					return false;

				if (!this.compareUrlValue(this._loginPageContentEnabled, this._loginPageContentUrl, this.desktopData.desktopConfig.getLoginInformationUrl()))
					return false;
				else if (!this.compareUrlValue(this._passwordRulesEnabled, this._passwordRulesUrl, this.desktopData.desktopConfig.getPasswordRulesUrl()))
					return false;
				else if (!this.compareUrlValue(this._loginPageLogoEnabled, this._loginPageLogoUrl, this.desktopData.desktopConfig.getLoginLogoUrl()))
					return false;
				else if (!this.compareUrlValue(this._helpUrlEnabled, this._helpUrlUrl, this.desktopData.desktopConfig.getHelpUrl()))
					return false;
				else if (!this.compareUrlValue(this._bannerLogoEnabled, this._bannerLogoUrl, this.desktopData.desktopConfig.getBannerLogoUrl()))
					return false;

				return true;
			} else
				return false; // In a new desktop and this method got triggered, it is dirty.
		},

		_clearOptions: function(dropdown) {
			if (dropdown && dropdown.getOptions(0))
				dropdown.removeOption(dropdown.getOptions());
		},

		_createCategories: function(configs) {
			var out = [];
			array.forEach(configs.buttons, function(entry, index) {
				out.push(entry.name);
			});
			return out;
		},

		/**
		 * Returns the JSON configuration defining the layout for the layout dijit. See
		 * {@link ecm.widget.layout.MainLayout} for more information on layout dijits.
		 */
		_getLayoutConfig: function(layoutConfigName) {
			if (this._itemStores[layoutConfigName] && this._itemStores[layoutConfigName].layoutConfig)
				return this._itemStores[layoutConfigName].layoutConfig;

			var LayoutConfigName = dojo["require"](layoutConfigName);
			this._layoutConfigObject = new LayoutConfigName();
			return this._layoutConfigObject.layoutConfig;
		},

		resize: function(changeSize) {
			this.inherited(arguments);
		},

		onLoginPageContentNone: function() {
			this._loginPageContentUrl.set("disabled", true);
			if (!this._loginPageContentUrl.get('value'))
				this._loginPageContentUrl.reset();
		},

		onLoginPageContentEnabled: function() {
			this._loginPageContentUrl.set("disabled", false);
		},

		onPasswordRulesNone: function() {
			this._passwordRulesUrl.set("disabled", true);
			if (!this._passwordRulesUrl.get('value'))
				this._passwordRulesUrl.reset();
		},

		onPasswordRulesEnabled: function() {
			this._passwordRulesUrl.set("disabled", false);
		},

		onLoginPageLogoNone: function() {
			this._loginPageLogoUrl.set("disabled", true);
			if (!this._loginPageLogoUrl.get('value'))
				this._loginPageLogoUrl.reset();
		},

		onLoginPageLogoEnabled: function() {
			this._loginPageLogoUrl.set("disabled", false);
		},

		onHelpUrlNone: function() {
			this._helpUrlUrl.set("disabled", true);
			if (this._helpUrlUrl.get('value'))
				this._helpUrlUrl.reset();

			this._helpKCTax.set("disabled", true);
			if (this._helpKCTax.get('value'))
				this._helpKCTax.reset();
			this._helpKCContext.set("disabled", true);
			if (this._helpKCContext.get('value'))
				this._helpKCContext.reset();
			this._helpKCWelcome.set("disabled", true);
			if (this._helpKCWelcome.get('value'))
				this._helpKCWelcome.reset();
		},

		onHelpUrlEnabled: function() {
			this._helpUrlUrl.set("disabled", false);

			this._helpKCTax.set("disabled", true);
			if (this._helpKCTax.get('value'))
				this._helpKCTax.reset();
			this._helpKCContext.set("disabled", true);
			if (this._helpKCContext.get('value'))
				this._helpKCContext.reset();
			this._helpKCWelcome.set("disabled", true);
			if (this._helpKCWelcome.get('value'))
				this._helpKCWelcome.reset();
		},

		onHelpKCEnabled: function() {
			this._helpUrlUrl.set("disabled", true);
			if (this._helpUrlUrl.get('value'))
				this._helpUrlUrl.reset();

			this._helpKCTax.set("disabled", false);
			this._helpKCContext.set("disabled", false);
			this._helpKCWelcome.set("disabled", false);
		},

		onBannerLogoNone: function() {
			this._bannerLogoUrl.set("disabled", true);
			if (!this._bannerLogoUrl.get('value'))
				this._bannerLogoUrl.reset();
		},

		onBannerLogoEnabled: function() {
			this._bannerLogoUrl.set("disabled", false);
		},

		onBannerBackgroundColorDefault: function() {
			this._bannerBackgroundColor.set("disabled", true);
			if (!this._bannerBackgroundColor.get('value'))
				this._bannerBackgroundColor.reset();
		},

		onBannerBackgroundColorCustom: function() {
			this._bannerBackgroundColor.set("disabled", false);
		},

		onBannerApplicationNameColorDefault: function() {
			this._bannerApplicationNameColor.set("disabled", true);
			if (!this._bannerApplicationNameColor.get('value'))
				this._bannerApplicationNameColor.reset();
		},

		onBannerApplicationNameColorCustom: function() {
			this._bannerApplicationNameColor.set("disabled", false);
			this._onFieldChange();
		},

		onBannerMenuColorLight: function() {
			this._onFieldChange();
		},

		onBannerMenuColorDark: function() {
			this._onFieldChange();
		},

		/**
		 * @since 2.0.3
		 */
		onThemeChange: function() {
			if (this._themesField.get("value") == "_default_") {
				this._loginPageLogoNone.set("disabled", false);
				this._loginPageLogoEnabled.set("disabled", false);

				this._bannerLogoNone.set("disabled", false);
				this._bannerLogoEnabled.set("disabled", false);

				this._bannerBackgroundColorDefault.set("disabled", false);
				this._bannerBackgroundColorCustom.set("disabled", false);

				this._bannerApplicationNameColorDefault.set("disabled", false);
				this._bannerApplicationNameColorCustom.set("disabled", false);

				this._bannerMenuColorLight.set("disabled", false);
				this._bannerMenuColorDark.set("disabled", false);
				
				this.onCustomThemeNone();
			} else {
				// Disable deprecated fields
				this._loginPageLogoNone.set("checked", true);
				this._loginPageLogoNone.set("disabled", true);
				this._loginPageLogoEnabled.set("disabled", true);
	
				this._bannerLogoNone.set("checked", true);
				this._bannerLogoNone.set("disabled", true);
				this._bannerLogoEnabled.set("disabled", true);
	
				this._bannerBackgroundColorDefault.set("checked", true);
				this._bannerBackgroundColorDefault.set("disabled", true);
				this._bannerBackgroundColorCustom.set("disabled", true);
	
				this._bannerApplicationNameColorDefault.set("checked", true);
				this._bannerApplicationNameColorDefault.set("disabled", true);
				this._bannerApplicationNameColorCustom.set("disabled", true);
	
				this._bannerMenuColorLight.set("disabled", true);
				this._bannerMenuColorDark.set("disabled", true);
				
				this.onCustomThemeEnabled();
			}

			this._onFieldChange();
		},

		/**
		 * @since 2.0.3
		 * @deprecated As of 3.0.1. Use onThemeChange instead.
		 */
		onCustomThemeEnabled: function() {
		},

		/**
		 * @since 2.0.3
 		 * @deprecated As of 3.0.1. Use onThemeChange instead.
		 */
		onCustomThemeNone: function() {
		},

		/**
		 * Set selected item in an array to be selected
		 */
		_setupSelected: function(values, selected) {
			array.forEach(values, function(entry, index) {
				entry.label = entities.encode(entry.label);
				if (entry.value.toLowerCase() === selected.toLowerCase()) {
					entry.selected = true;
				}
			});
			return values;
		},

		// If this method got called, it will trigger method in TabDesktop.js's _onMarkDirty method being called.
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			if (this._init) {
				this.onMarkDirty();
			}
		},

		setConnect: function(tabRepositories, onComplete) {
			if (tabRepositories) {
				this.tabRepositories = tabRepositories;
			}
			if (onComplete)
				onComplete();
		},
		
		setupForDesktopAdmin: function(desktopAdminRole){
			
			style.set(this.helpRow, "display", "none");
			style.set(this.loginPageRow, "display", "none");
			style.set(this.passwordRulesRow, "display", "none");

			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE)){
				style.set(this.appNameRow, "display", "none");
			}
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE)){
				style.set(this.themeRow, "display", "none");

			}
		}
	});	
});

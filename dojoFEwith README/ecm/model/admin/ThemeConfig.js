/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ConfigurationObject"
], function(declare, lang, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.ThemeConfig
	 * @class Represents the configuration information for a theme. This information includes:
	 *        <ul>
	 *        <li>The name of the theme</li>
	 *        <li>The brand color</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 * @since 2.0.3
	 */
	var ThemeConfig = declare("ecm.model.admin.ThemeConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ThemeConfig.prototype */

		SYSTEM: "system",
		THEME_STYLE: "themeStyle",
		COLOR_PALETTE: "colorPalette",

		// Application-wide
		FONT: "font",
		FRAMEWORK_BACKGROUND_COLOR: "frameworkBackgroundColor",
		ACCENT_COLOR: "accentColor", // default theme style only
		SELECTED_COLOR: "selectedColor",
		GLOBAL_TOOLBAR_COLOR: "globalToolbarColor",
		GLOBAL_TOOLBAR_TEXT_COLOR: "globalToolbarTextColor", // default theme style only
		LINK_COLOR: "linkColor", // classic theme style only
		
		// Login page
		LOGIN_PAGE_BACKGROUND: "loginPageBackground",
		LOGIN_PANE_BACKGROUND: "loginPaneBackground",
		LOGIN_TEXT_COLOR: "loginTextColor",
		COPYRIGHT_TEXT: "copyrightText", // classic theme style only
		LOGIN_LOGO: "loginLogo",
		
		// Banner
		BANNER_COLOR: "bannerColor",
		BANNER_TYPE: "bannerType", // aka banner fill style (classic theme style only)
		BANNER_TEXT_ICONS_COLOR: "bannerTextIconColor", // classic theme style only
		BANNER_TEXT_COLOR: "bannerTextColor", // default theme style only
		BANNER_ICON_COLOR: "bannerIconColor", // default theme style only		
		BANNER_LOGO: "bannerLogo",
		APPLICATION_NAME_LOGO: "applicationNameLogo",
		
		// Navigation
		NAVIGATION_BACKGROUND_COLOR: "navigationBackgroundColor",
		NAVIGATION_SELECTED_BACKGROUND_COLOR: "navigationSelectedBackgroundColor", // default theme style only
		NAVIGATION_ICON_COLOR: "navigationIconColor",
		NAVIGATION_SELECTED_ICON_COLOR: "navigationSelectedIconColor",
		
		// Buttons and links
		BUTTON_STYLE: "buttonStyle",
		BUTTON_BACKGROUND_COLOR: "buttonBackgroundColor", // classic theme style only
		BUTTON_TEXT_ICON_COLOR: "buttonTextIconColor", // classic theme style only
		BUTTON_COLOR: "buttonColor", // used as link color also (default theme style only)

		isSystem: function() {
			return this.getBoolean(this.SYSTEM);
		},

		setName: function(name) {
			this.setValue("name", name);
		},

		getName: function() {
			return this.getValue("name");
		},
		
		setThemeStyle: function(themeStyle) {
			this.setValue(this.THEME_STYLE, themeStyle);
		},

		getThemeStyle: function() {
			return this.getValue(this.THEME_STYLE);
		},

		setColorPalette: function(values) {
			this.setValue(this.COLOR_PALETTE, values);
		},

		getColorPalette: function() {
			return this.getValue(this.COLOR_PALETTE);
		},

		getFont: function() {
			return this.getValue(this.FONT);
		},

		setFont: function(value) {
			this.setValue(this.FONT, value);
		},

		getSelectedColor: function() {
			return this.getValue(this.SELECTED_COLOR);
		},

		setSelectedColor: function(value) {
			this.setValue(this.SELECTED_COLOR, value);
		},

		getGlobalToolbarColor: function() {
			return this.getValue(this.GLOBAL_TOOLBAR_COLOR);
		},

		setGlobalToolbarColor: function(value) {
			this.setValue(this.GLOBAL_TOOLBAR_COLOR, value);
		},

		getGlobalToolbarTextColor: function() {
			return this.getValue(this.GLOBAL_TOOLBAR_TEXT_COLOR);
		},

		setGlobalToolbarTextColor: function(value) {
			this.setValue(this.GLOBAL_TOOLBAR_TEXT_COLOR, value);
		},

		getLinkColor: function() {
			return this.getValue(this.LINK_COLOR);
		},

		setLinkColor: function(value) {
			this.setValue(this.LINK_COLOR, value);
		},

		getFrameworkBackgroundColor: function() {
			return this.getValue(this.FRAMEWORK_BACKGROUND_COLOR);
		},

		setFrameworkBackgroundColor: function(value) {
			this.setValue(this.FRAMEWORK_BACKGROUND_COLOR, value);
		},

		getAccentColor: function() {
			return this.getValue(this.ACCENT_COLOR);
		},

		setAccentColor: function(value) {
			this.setValue(this.ACCENT_COLOR, value);
		},

		getApplicationNameLogo: function() {
			return this.getValue(this.APPLICATION_NAME_LOGO);
		},

		setApplicationNameLogo: function(value) {
			this.setValue(this.APPLICATION_NAME_LOGO, value);
		},

		getLoginPageBackground: function() {
			return this.getValue(this.LOGIN_PAGE_BACKGROUND);
		},

		setLoginPageBackground: function(value) {
			this.setValue(this.LOGIN_PAGE_BACKGROUND, value);
		},

		getLoginPaneBackground: function() {
			return this.getValue(this.LOGIN_PANE_BACKGROUND);
		},

		setLoginPaneBackground: function(value) {
			this.setValue(this.LOGIN_PANE_BACKGROUND, value);
		},

		getLoginTextColor: function() {
			return this.getValue(this.LOGIN_TEXT_COLOR);
		},

		setLoginTextColor: function(value) {
			this.setValue(this.LOGIN_TEXT_COLOR, value);
		},

		getCopyrightText: function() {
			return this.getValue(this.COPYRIGHT_TEXT);
		},

		setCopyrightText: function(value) {
			this.setValue(this.COPYRIGHT_TEXT, value);
		},

		getBannerColor: function() {
			return this.getValue(this.BANNER_COLOR);
		},

		setBannerColor: function(value) {
			this.setValue(this.BANNER_COLOR, value);
		},

		getBannerType: function() {
			return this.getValue(this.BANNER_TYPE);
		},

		setBannerType: function(value) {
			this.setValue(this.BANNER_TYPE, value);
		},

		getBannerTextIconColor: function() {
			return this.getValue(this.BANNER_TEXT_ICONS_COLOR);
		},

		setBannerTextIconColor: function(value) {
			this.setValue(this.BANNER_TEXT_ICONS_COLOR, value);
		},

		getBannerTextColor: function() {
			return this.getValue(this.BANNER_TEXT_COLOR);
		},

		setBannerTextColor: function(value) {
			this.setValue(this.BANNER_TEXT_COLOR, value);
		},

		getBannerIconColor: function() {
			return this.getValue(this.BANNER_ICON_COLOR);
		},

		setBannerIconColor: function(value) {
			this.setValue(this.BANNER_ICON_COLOR, value);
		},

		getBannerLogo: function() {
			return this.getValue(this.BANNER_LOGO);
		},

		setBannerLogo: function(value) {
			this.setValue(this.BANNER_LOGO, value);
		},

		getLoginLogo: function() {
			return this.getValue(this.LOGIN_LOGO);
		},

		setLoginLogo: function(value) {
			this.setValue(this.LOGIN_LOGO, value);
		},

		getNavigationBackgroundColor: function() {
			return this.getValue(this.NAVIGATION_BACKGROUND_COLOR);
		},

		setNavigationBackgroundColor: function(value) {
			this.setValue(this.NAVIGATION_BACKGROUND_COLOR, value);
		},

		getNavigationSelectedBackgroundColor: function() {
			return this.getValue(this.NAVIGATION_SELECTED_BACKGROUND_COLOR);
		},

		setNavigationSelectedBackgroundColor: function(value) {
			this.setValue(this.NAVIGATION_SELECTED_BACKGROUND_COLOR, value);
		},

		getNavigationIconColor: function() {
			return this.getValue(this.NAVIGATION_ICON_COLOR);
		},

		setNavigationIconColor: function(value) {
			this.setValue(this.NAVIGATION_ICON_COLOR, value);
		},

		getNavigationSelectedIconColor: function() {
			return this.getValue(this.NAVIGATION_SELECTED_ICON_COLOR);
		},

		setNavigationSelectedIconColor: function(value) {
			this.setValue(this.NAVIGATION_SELECTED_ICON_COLOR, value);
		},

		getButtonBackgroundColor: function() {
			return this.getValue(this.BUTTON_BACKGROUND_COLOR);
		},

		setButtonBackgroundColor: function(value) {
			this.setValue(this.BUTTON_BACKGROUND_COLOR, value);
		},

		getButtonStyle: function() {
			return this.getValue(this.BUTTON_STYLE);
		},

		setButtonStyle: function(value) {
			this.setValue(this.BUTTON_STYLE, value);
		},

		getButtonTextIconColor: function() {
			return this.getValue(this.BUTTON_TEXT_ICON_COLOR);
		},

		setButtonTextIconColor: function(value) {
			this.setValue(this.BUTTON_TEXT_ICON_COLOR, value);
		},
		
		getButtonColor: function() {
			return this.getValue(this.BUTTON_COLOR);
		},

		setButtonColor: function(value) {
			this.setValue(this.BUTTON_COLOR, value);
		},

		// retrieve the theme config object
		// onCompleted event handler is callback
		getThemeConfig: function(callback, params) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback, null, params);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Copies values from an existing theme.
		 */
		copyTheme: function(theme) {
			if (theme) {
				// Copy all attributes except for name and system
				var name = this.getName();
				this._attributes = lang.clone(theme.getAttributes());
				this.setName(name);
				this._attributes[this.SYSTEM] = false;
			}
		}
	});

	/**
	 * Static function that constructs a theme configuration object. Use Application object to save this.
	 * 
	 * @param id
	 *            Theme identifier.
	 * @memberof ecm.model.admin.ThemeConfig
	 */
	ThemeConfig.createThemeConfig = function(id) {
		return new ThemeConfig(id, "ThemeConfig");
	};
	
	return ThemeConfig;
});

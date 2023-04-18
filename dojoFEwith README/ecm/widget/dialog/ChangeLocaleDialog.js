/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/kernel",
	"dojo/cookie",
	"dojo/dom-class",
	"dojo/dom-style",
	"ecm/widget/Select",
	"ecm/widget/HoverHelp",
	"../../Messages",
	"../../model/Desktop",
	"../../model/admin/ApplicationConfig",
	"./BaseDialog",
	"dojo/text!./templates/ChangeLocaleDialogContent.html"
], //
function(declare, //
lang, //
kernel, //
cookie, //
domClass, //
domStyle, //
Select, //
HoverHelp, //
Messages, //
Desktop, //
ApplicationConfig, // Loading this module is required so that ecm.model.admin.appCfg is initialized.
BaseDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.ChangeLocaleDialog
	 * @class Provides a dialog box that is used to change the locales.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.dialog.ChangeLocaleDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ChangeLocaleDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		expandable: false,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmChangeLocaleDialog");
			this.set("title", ecm.messages.change_locale);
			this.setIntroText(ecm.messages.change_locale_description);
			this.setWidth(550);
			this.saveButton = this.addButton(this.messages.save, "_onSave", false, true);
			this._languageLocale.setHoverHelp(this._languageLocaleHoverHelp);
			this._valueFormatLocale.setHoverHelp(this._valueFormatLocaleHoverHelp);
			this._bidiSupportFlag.setHoverHelp(this._bidiSupportFlagHoverHelp);
			this._baseTextDirection.setHoverHelp(this._baseTextDirectionHoverHelp);
			this._calendarType.setHoverHelp(this._calendarTypeHoverHelp);
		},

		/**
		 * @private Called when the user changes the language locale in the pulldown.
		 */
		_onLanguageLocaleChange: function() {
		},

		/**
		 * @private Called when the user changes the value format locale in the pulldown.
		 */
		_onValueFormatLocaleChange: function() {
		},

		/**
		 * @private Called when the user changes the bidi support value in the checkbox.
		 */
		_onBidiSupportFlagChange: function() {
			this._baseTextDirection.set("disabled", !this._bidiSupportFlag.get("checked"));
			//this._calendarType.set("disabled", !this._bidiSupportFlag.get("checked"));//38413d
		},

		/**
		 * @private Called when the user changes the base text direction in the pulldown.
		 */
		_onBaseTextDirectionChange: function() {
		},

		/**
		 * @private Called when the user changes the calendar type in the pulldown.
		 */
		_onCalendarTypeChange: function() {
		},

		/**
		 * @private Called when the user hits the save button.
		 */
		_onSave: function() {
			var selectedLanguageLocale = this._languageLocale.get("value");
			if (selectedLanguageLocale) {
				var locale = this._getLocaleWithDash(selectedLanguageLocale); // change from _ in locale to - 
				cookie(ecm.model.Desktop.cookieLocaleLanguage, locale, {
					expires: new Date(2035, 0, 1)
				});
			} else {
				cookie(ecm.model.Desktop.cookieLocaleLanguage, null, {
					expires: -1
				});
			}

			var selectedValueFormatLocale = this._valueFormatLocale.get("value");
			if (selectedValueFormatLocale) {
				var locale = this._getLocaleWithDash(selectedValueFormatLocale); // change from _ in locale to - 
				cookie(ecm.model.Desktop.cookieLocaleValueFormat, locale, {
					expires: new Date(2035, 0, 1)
				});
			} else {
				cookie(ecm.model.Desktop.cookieLocaleValueFormat, null, {
					expires: -1
				});
			}

			var bidiSupportFlag = this._bidiSupportFlag.get("checked");
			cookie(ecm.model.Desktop.cookieBidiSupportFlag, bidiSupportFlag, {
				expires: new Date(2035, 0, 1)
			});

			var selectedTextDirection = this._baseTextDirection.get("value");
			if (selectedTextDirection) {
				cookie(ecm.model.Desktop.cookieTextDirection, selectedTextDirection, {
					expires: new Date(2035, 0, 1)
				});
			} else {
				cookie(ecm.model.Desktop.cookieTextDirection, null, {
					expires: -1
				});
			}

			var selectedCalendarType = this._calendarType.get("value");
			if (selectedCalendarType) {
				cookie(ecm.model.Desktop.cookieCalendarType, selectedCalendarType, {
					expires: new Date(2035, 0, 1)
				});
			} else {
				cookie(ecm.model.Desktop.cookieTextDirection, null, {
					expires: -1
				});
			}

			domClass.add(document.body, "ecmWait");
			window.location.reload();
		},

		/**
		 * @private Loads the language locales into the pulldown.
		 */
		_loadLanguageLocales: function(localeObjects, selectedLocale) {
			if (this._languageLocale.getOptions(0)) {
				this._languageLocale.removeOption(this._languageLocale.getOptions());
			}
			if (localeObjects) {
				var valueToSelect = null;
				this._languageLocale.addOption({
					value: '',
					label: ecm.messages.change_locale_use_browser_language
				});
				var options = [];
				for ( var i in localeObjects) {
					var localeConfig = localeObjects[i];
					// Using addOption as it supports html.  RLT locales can have html in the label.
					if (selectedLocale && (selectedLocale == localeConfig.id || selectedLocale == this._getLocaleWithDash(localeConfig.id))) {
						valueToSelect = localeConfig.id;
					}
					this._languageLocale.addOption({
						value: localeConfig.id,
						label: localeConfig.getLabel()
					});
				}
				if (valueToSelect) {
					this._languageLocale.set("value", valueToSelect);
				}
			}
		},

		/**
		 * @private Loads the value format locales into the pulldown.
		 */
		_loadValueFormatLocales: function(localeObjects, selectedLocale) {
			if (this._valueFormatLocale.getOptions(0)) {
				this._valueFormatLocale.removeOption(this._valueFormatLocale.getOptions());
			}
			if (localeObjects) {
				var valueToSelect = null;
				this._valueFormatLocale.addOption({
					value: '',
					label: ecm.messages.change_locale_use_browser_locale
				});
				var options = [];
				for ( var i in localeObjects) {
					var localeConfig = localeObjects[i];
					// Using addOption as it supports html.  RLT locales can have html in the label.
					if (selectedLocale && (selectedLocale == localeConfig.id || selectedLocale == this._getLocaleWithDash(localeConfig.id))) {
						valueToSelect = localeConfig.id;
					}
					this._valueFormatLocale.addOption({
						value: localeConfig.id,
						label: localeConfig.getLabel()
					});
				}
				if (valueToSelect) {
					this._valueFormatLocale.set("value", valueToSelect);
				}
			}
		},

		_setBidiSupportFlag: function(bidiSupportFlag) {
			this._bidiSupportFlag.set("checked", bidiSupportFlag ? bidiSupportFlag == "true" : false);
		},

		_loadTextDirections: function(selectedTextDir) {
			if (this._baseTextDirection.getOptions(0)) {
				this._baseTextDirection.removeOption(this._baseTextDirection.getOptions());
			}

			var valueToSelect = null;
			var options = [
				{
					label: ecm.messages.change_locale_base_text_direction_default,
					value: ""
				},
				{
					label: ecm.messages.change_locale_base_text_direction_ltr,
					value: "ltr"
				},
				{
					label: ecm.messages.change_locale_base_text_direction_rtl,
					value: "rtl"
				},
				{
					label: ecm.messages.change_locale_base_text_direction_contextual,
					value: "auto"
				}
			];
			for ( var i in options) {
				var textDirConfig = options[i];
				// Using addOption as it supports html.
				if (selectedTextDir && (selectedTextDir == textDirConfig.value)) {
					valueToSelect = textDirConfig.value;
				}
				this._baseTextDirection.addOption({
					value: textDirConfig.value,
					label: textDirConfig.label
				});
			}
			if (valueToSelect) {
				this._baseTextDirection.set("value", valueToSelect);
			}

			this._baseTextDirection.set("disabled", !this._bidiSupportFlag.get("checked"));
		},

		_loadCalendarTypes: function(selectedCalendarType) {
			if (this._calendarType.getOptions(0)) {
				this._calendarType.removeOption(this._calendarType.getOptions());
			}

			var valueToSelect = null;
			var options = [
				{
					label: ecm.messages.change_locale_calendar_type_gregorian,
					value: "gregorian"
				},
				{
					label: ecm.messages.change_locale_calendar_type_hijri,
					value: "hijri"
				},
				{
					label: ecm.messages.change_locale_calendar_type_Umm_al_Qura,
					value: "UmmAlQura"
				},
				{
					label: ecm.messages.change_locale_calendar_type_hebrew,
					value: "hebrew"
				}
			];
			for ( var i in options) {
				var calendarTypeConfig = options[i];
				// Using addOption as it supports html.
				if (selectedCalendarType && (selectedCalendarType == calendarTypeConfig.value)) {
					valueToSelect = calendarTypeConfig.value;
				}
				this._calendarType.addOption({
					value: calendarTypeConfig.value,
					label: calendarTypeConfig.label
				});
			}
			if (valueToSelect) {
				this._calendarType.set("value", valueToSelect);
			}
			//this._calendarType.set("disabled", !this._bidiSupportFlag.get("checked"));//38413d
		},

		_setBidiSupportFlag: function(bidiSupportFlag) {
			this._bidiSupportFlag.set("checked", bidiSupportFlag ? bidiSupportFlag == "true" : false);
		},

		/**
		 * @private
		 */
		_getLocaleWithDash: function(locale) {
			if (locale.length > 2 && locale.indexOf("_") > -1) {
				var index = locale.indexOf("_");
				locale = locale.substring(0, index).toLowerCase() + "-" + locale.substring(index + 1).toLowerCase();
			}
			return locale;
		},

		/**
		 * Shows the dialog.
		 */
		show: function() {
			var args = arguments;
			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(serverObjects, locales, localizeSettings) { // get list of servers & locales we support
				this._loadLanguageLocales(locales, cookie(ecm.model.Desktop.cookieLocaleLanguage));
				this._loadValueFormatLocales(localizeSettings, cookie(ecm.model.Desktop.cookieLocaleValueFormat));
				this._setBidiSupportFlag(cookie(ecm.model.Desktop.cookieBidiSupportFlag));
				this._loadTextDirections(cookie(ecm.model.Desktop.cookieTextDirection));
				this._loadCalendarTypes(cookie(ecm.model.Desktop.cookieCalendarType));
				this.inherited(args);
			}), {
				login_desktop: ecm.model.desktop.id,
				userid: ecm.model.desktop.userId,
				securityTopic: "desktop.desktop",
				application: ecm.model.admin.appCfg.id
			});
		}

	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/aspect",
	"dojo/store/Memory",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"dijit/form/DropDownButton",
	"dojox/widget/ColorPicker",
	"dijit/Dialog",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/ThemeConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/RadioButton",
	"ecm/widget/Select",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabTheme.html"
], function(declare, lang, string, domConstruct, array, attr, style, has, domClass, aspect, MemoryStore, _Widget, _TemplatedMixin, //
_WidgetsInTemplateMixin, Button, ContentPane, BorderContainer, DropDownButton, ColorPicker, Dialog, //
MessagesMixin, LoggerMixin, Desktop, AdminData, ThemeConfig, _NavigatorAdminTabBase, HoverHelp, ValidationTextBox, //
RadioButton, Select, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabTheme
	 * @class Provides a tab that is used to add a theme or edit the values for a theme.
	 */
	var TabTheme = declare("ecm.widget.admin.TabTheme", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabPlugin.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.colorList = [];

			this.resetButton.set("title", this.messages.reset_hover);
			this.colorPaletteTitlePane.set("title", this.messages.admin_theme_color_palette_title_heading);
			this.globalOptionsTitlePane.set("title", this.messages.admin_theme_global_title_heading);
			this.loginOptionsTitlePane.set("title", this.messages.admin_theme_login_title_heading);
			this.bannerOptionsTitlePane.set("title", this.messages.admin_theme_banner_title_heading);
			this.navigationOptionsTitlePane.set("title", this.messages.admin_theme_navigation_title_heading);
			this.buttonOptionsTitlePane.set("title", this.messages.admin_theme_buttons_title_heading);

			if (has("dojo-bidi")) {
				this.set("textDir", has("text-direction"));
				this.bannerProductNameLogoField.set("textDir", "ltr");
				this.bannerLogoField.set("textDir", "ltr");
				this.loginPageLogo.set("textDir", "ltr");
				BidiComplex.attachInput(this.bannerProductNameLogoField.focusNode, "URL");
				BidiComplex.attachInput(this.bannerLogoField.focusNode, "URL");
				BidiComplex.attachInput(this.loginPageLogo.focusNode, "URL");
			}

			this.own(aspect.after(this.addColorButton, "onClick", lang.hitch(this, function() {
				this._addColor();
				this._markDirty();
				this._updateColors();
			})));
		},

		destroy: function() {
			this.inherited(arguments);
			
			this._clearColorPalette();
			
			if (this._themeStyleChangeSignal) {
				this._themeStyleChangeSignal.remove();
				this._themeStyleChangeSignal = null;
			}
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this._initialized = false;
			this._disableSave();
			this._disableReset();
			var name = this._myAdminModel ? this._myAdminModel.getName() : this.messages.admin_new_theme;

			if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				this._myAdminModel = new ThemeConfig("", "");
				this._myAdminModel.copyTheme(this._myAdminModelForCopy);
				this.action = "copy";
				name = this.messages.admin_new_theme;
				this._myAdminModelForCopy = null;
			} else if (this._myAdminModel && this._myAdminModel.id) {
				this.id = this._myAdminModel.id;
				this.action = "edit";
			} else {
				this.action = "new";
			}

			this._updateName(name);
			this.setTitle(name);
			this.setInstructions(this.getInstructions());
			this._loadData();
			
			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this.messages.admin_theme_name_invalid;
			this.idField.pattern = '([a-zA-Z0-9])*';
			this.idField.invalidMessage = this.messages.admin_id_invalid;

			this._checkSave();
			if (this._isSystemTheme())
				this._makeReadOnly();

			setTimeout(lang.hitch(this, function() {
				this._initialized = true;
			}), 300);
		},

		_isSystemTheme: function() {
			return this._myAdminModel != null && this._myAdminModel.isSystem();
		},

		_makeReadOnly: function() {
			// Disable buttons
			this.saveAndCloseButton.set("disabled", true);
			this.saveButton.set("disabled", true);
			this.resetButton.set("disabled", true);
			this.addColorButton.set("disabled", true);

			// Disable identity fields
			this.idField.set("disabled", true);
			this.nameField.set("disabled", true);
			this._classicThemeStyleRadioButton.set("disabled", true);
			this._defaultThemeStyleRadioButton.set("disabled", true);

			// Disable select fields
			for (var f in TabTheme._DEFAULTS)
				this[f].set("disabled", true);

			// Disable URL fields
			this.loginPageLogo.set("disabled", true);
			this.bannerLogoField.set("disabled", true);
			this.bannerProductNameLogoField.set("disabled", true);
		},

		_loadData: function(themeStyleChanged) {
			var style = this.getThemeStyle();
			if (!themeStyleChanged) {
				// Disable the ID field during edit operations
				if (this.action == "edit") {
					this.idField.set("value", this._myAdminModel.id);
					this.idField.set("disabled", true);
					this.nameField.set("value", this._myAdminModel.getName());
				}
				
				// Select the default theme style, but first remove the change event listener so that it doesn't trigger another load
				if (this._themeStyleChangeSignal)
					this._themeStyleChangeSignal.remove();
				style = (this._myAdminModel ? this._myAdminModel.getThemeStyle() : Desktop.baseStyle) || "default";
				this["_" + style + "ThemeStyleRadioButton"].set("checked", true);
				
				// Add the theme style change event listener asynchronously so that it's not called immediately after the above change
				setTimeout(lang.hitch(this, function() {
					this._themeStyleChangeSignal = aspect.after(this._defaultThemeStyleRadioButton, "onChange", lang.hitch(this, "_handleThemeStyleChange"));
				}));
				
				// Clear color palette
				this._clearColorPalette();
			}
			
			// Tailor settings to the theme style
			for (var f in TabTheme._DEFAULTS)
				this[f + "Row"] && domClass[TabTheme._DEFAULTS[f][style] ? "remove" : "add"](this[f + "Row"], "dijitHidden");
			
			// Tailor select options to the theme style
			for (var f in TabTheme._OPTIONS)
				this[f].set("options", [].concat(TabTheme._OPTIONS[f][style]));
			
			// Reset URL fields
			this.loginPageLogo.reset();
			this.bannerLogoField.reset();
			this.bannerProductNameLogoField.reset();

			// Populate any existing data from the theme model
			if (this._myAdminModel && !themeStyleChanged) {
				// If we're editing or copying a theme, we may have an existing color palette
				var colorPalette = this._myAdminModel.getColorPalette();
				if (colorPalette)
					array.forEach(colorPalette.split(','), "this._addColor(item);", this);
				
				if (this.colorList.length === 0) { // colorless model! (shouldn't happen, but safety first)
					// Add default color
					this._addColor();
				}
				
				// Update colors
				this._updateColors();

				// First set the value of select fields, then URL fields if needed
				for (var f in TabTheme._DEFAULTS)
					this[f].set("value", this._getModelValue(this._myAdminModel, f));
				if (this._loginPaneLogoSelect.get("value") === "url") {
					var logo = this._myAdminModel.getLoginLogo() || "";
					this.loginPageLogo.set("value", !has("dojo-bidi") ? logo : BidiComplex.createDisplayString(logo));
				}
				if (this._bannerLogoSelect.get("value") === "url") {
					var logo = this._myAdminModel.getBannerLogo() || "";
					this.bannerLogoField.set("value", !has("dojo-bidi") ? logo : BidiComplex.createDisplayString(logo));
				}
				if (this._bannerProductNameSelect.get("value") === "url") {
					var logo = this._myAdminModel.getApplicationNameLogo() || "";
					this.bannerProductNameLogoField.set("value", !has("dojo-bidi") ? logo : BidiComplex.createDisplayString(logo));
				}
			} else {
				if (this.colorList.length === 0) {
					// Add default color
					this._addColor();
				}
				
				// Update colors
				this._updateColors();

				// Set defaults
				for (var f in TabTheme._DEFAULTS)
					this[f].set("value", this[f].options[0].value);
			}
			
			// Update labels that vary by theme style
			this.buttonOptionsTitlePane.set("title", this.messages[style === "classic" ? "admin_theme_buttons_title_heading" : "admin_theme_buttons_and_links_title_heading"]);
			this._buttonStyleLabel.innerHTML = this.messages[style === "classic" ? "admin_theme_style_label" : "admin_theme_button_style_label"];
		},
		
		/**
		 * Returns the selected theme style ("default" or "classic").
		 * 
		 * @since 3.0.2
		 */
		getThemeStyle: function() {
			 return this._classicThemeStyleRadioButton.get("checked") ? "classic" : "default";
		},
		
		_getModelValue: function(model, field) {
			var v = model["get" + TabTheme._DEFAULTS[field].modelAccessorName]();
			if ((field === "_loginPaneLogoSelect" || field === "_bannerLogoSelect" || field === "_bannerProductNameSelect")
					&& v !== "default" && v !== "none")
				v = "url";
			
			return v;
		},
		
		_setModelValue: function(model, field) {
			var v = this[field].get("value");
			if (v === "url") {
				if (field === "_loginPaneLogoSelect")
					v = this.loginPageLogo.get("value");
				else if (field === "_bannerLogoSelect")
					v = this.bannerLogoField.get("value");
				else if (field === "_bannerProductNameSelect")
					v = this.bannerProductNameLogoField.get("value");
				if (has("dojo-bidi"))
					v = BidiComplex.stripSpecialCharacters(v);
			}
			model["set" + TabTheme._DEFAULTS[field].modelAccessorName](v);
		},
		
		_getColorOptions: function(defaultColor) {
			var options = [];
			if (defaultColor) {
				if (defaultColor === "auto") {
					options.push({
						value: "auto",
						label: this.messages.admin_theme_automatic_label + " (" + this.messages.default_label + ")"
					});
				} else {
					options.push({
						value: "default",
						label: '<span style="height: 10px; border: 1px solid #000; background-color: ' + defaultColor + ';">&nbsp;&nbsp;&nbsp;&nbsp;</span> ' + defaultColor + ' (' + this.messages.default_label + ')'
					});
				}
			}

			array.forEach(this.colorList, function(colorInput, index) {
				var color = colorInput.get("value");
				var label = '<span style="height: 10px; border: 1px solid #000; background-color: ' + color + ';">&nbsp;&nbsp;&nbsp;&nbsp;</span> ' + color + ' (' + this.messages.admin_theme_color + ' ' + (index + 1) + ')';
				options.push({
					id: colorInput.id,
					value: color,
					label: label
				});
			}, this);

			return options;
		},

		/**
		 * Determines if the ID specified by the user is unique.
		 * 
		 * @private
		 */
		isUniqueId: function() {
			var isUnique = true;
			var themeId = this.idField.get('value');
			var themes = AdminData.themes;

			if (themeId && themes) {
				for (var i = 0; i < themes.length; i++) {
					var theme = themes[i];
					if (theme.id == themeId) {
						isUnique = false;
						break;
					}
				}
			}

			if (!isUnique) {
				this.idField.setCustomValidationError(this.messages.admin_id_in_use);
				this.idField.validate();
			}

			return isUnique;
		},

		_loadWithFieldValues: function(adminModel) {
			// Set name and theme style
			adminModel.setName(this.nameField.get("value"));
			adminModel.setThemeStyle(this.getThemeStyle());
			
			// Set theme settings
			for (var f in TabTheme._DEFAULTS)
				this._setModelValue(adminModel, f);
			
			// Set color palette
			var items = "";
			array.forEach(this.colorList, function(colorInput, index) {
				if (index > 0)
					items += ",";
				items += colorInput.get("value");
			}, this);
			adminModel.setColorPalette(items);
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return false;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			if (this.action == "edit" && this._myAdminModel) {
				this._loadWithFieldValues(this._myAdminModel);
				ecm.model.admin.appCfg.updateApplicationThemeConfig(this._myAdminModel, lang.hitch(this, function(response) {
					this._updateName(this._myAdminModel.getName());
					this.setTitle(this._myAdminModel.getName());
					ecm.model.admin.adminData.onChange(this._myAdminModel);
					if (onComplete)
						onComplete(true);
				}));
			} else {
				var idVal = this.idField.get("value");
				var newAdminModel = ThemeConfig.createThemeConfig(idVal);
				newAdminModel.setValue("id", idVal);
				this._loadWithFieldValues(newAdminModel);
				ecm.model.admin.appCfg.addApplicationThemeConfig(newAdminModel, lang.hitch(this, function(response) {
					this._myAdminModel = newAdminModel;
					this._updateName(newAdminModel.getName());
					this.setTitle(newAdminModel.getName());
					this.action = "edit";
					this.idField.set("disabled", true);
					this._checkSave();

					ecm.model.admin.adminData.loadThemes();
					if (onComplete) {
						onComplete(true);
					}
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_THEMES
				});
			}
		},

		setInstructions: function(msg) {
			this.instructions.appendChild(document.createTextNode(msg));
		},

		getInstructions: function() {
			return this.messages.admin_theme_instructions;
		},

		/**
		 * @private
		 */
		_updateName: function(name) {
			if (has("text-direction")) {
				name = this.enforceTextDirWithUcc(null, name);
			}
			domConstruct.place("<label>" + string.substitute(this.messages.admin_theme_heading, [
				name
			]) + "</label>", this.headingText, "only");
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			if (!this.idField.get('disabled') && !this.isUniqueId()) {
				//if (focus) {
				//	this.idField.focus();
				//}
				return false;
			}

			if (!this.nameField.isValid()) {
				return false;
			}

			if (this._bannerLogoSelect.get("value") == "url" && !this.bannerLogoField.isValid()) {
				return false;
			}

			if (this._loginPaneLogoSelect.get("value") == "url" && !this.loginPageLogo.isValid()) {
				return false;
			}

			if (this._bannerProductNameSelect.get("value") == "url" && !this.bannerProductNameLogoField.isValid()) {
				return false;
			}

			return true;
		},

		/**
		 * Handles the resize of this widget.
		 */
		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},

		/**
		 * Handles an onChange event to the name input field.
		 * 
		 * @private
		 */
		_onNameChange: function() {
			if (!this.idField.get('disabled')) {
				this.idField.set('value', this._getIdValueFromName(this.nameField.get('value')));
			}
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onColorChange: function(field, button) {
			var color = field.get("value");
			button.focusNode.style.backgroundColor = color;
			this._updateColors(field);
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this._markDirty();
			}
		},
		
		_handleThemeStyleChange: function() {
			this._loadData(true);
			this._onFieldChange();
		},

		/**
		 * Cleans the color palette DOM tree.
		 */
		_clearColorPalette: function() {
			if (this.colorList) {
				array.forEach(this.colorList, function(colorInput) {
					if (colorInput)
						colorInput.destroy();
				}, this);
				this.colorList = [];
			}

			if (this.colorButtons) {
				array.forEach(this.colorButtons, function(colorButton) {
					if (colorButton)
						colorButton.destroy();
				}, this);
				this.colorButtons = [];
			}

			if (this.colorListTable)
				domConstruct.empty(this.colorListTable);
		},

		/**
		 * Adds a new color to the color palette.
		 * 
		 * @param color
		 *            Hex color value
		 * @private
		 */
		_addColor: function(color) {
			if (!color)
				color = "#e5e5e5";

			if (!this.colorButtons)
				this.colorButtons = [];

			var numColors = 1;
			if (!this.colorList) {
				this.colorList = [];
			} else {
				numColors = this.colorList.length + 1;
			}

			var tr = domConstruct.create("tr");
			domConstruct.place(tr, this.colorListTable, "last");

			// label cell
			var td1 = domConstruct.create("td", {
				"class": "propertyRowLabel",
				valign: "top"
			}, tr);
			var colorFieldId = this.id + "_color_field_" + numColors;
			domConstruct.create("label", {
				"for": colorFieldId,
				innerHTML: string.substitute(this.messages.admin_theme_color_label, [
					numColors
				])
			}, td1);

			var td2 = domConstruct.create("td", {
				"class": "propertyRowValue"
			});
			domConstruct.place(td2, tr, "last");

			var span = domConstruct.create("span", {
				"class": "colorPickerButton"
			}, td2);

			var button = null;
			var input = new ValidationTextBox({
				id: colorFieldId,
				name: colorFieldId,
				required: true,
				trim: true,
				propercase: false,
				value: color,
				disabled: this._isSystemTheme(),
				pattern: "\#[A-Fa-f0-9]{6}|\#[A-Fa-f0-9]{3}",
				invalidMessage: this.messages.invalid_color_message,
				onChange: lang.hitch(this, function() {
					this._onColorChange(input, button);
				})
			});
			domConstruct.place(input.domNode, span, "last");
			this.colorList.push(input);

			button = new Button({
				disabled: this._isSystemTheme(),
				onClick: lang.hitch(this, function() {
					this._colorPickerDialog.colorField = input;
					this._colorPickerDialog.colorButton = button;
					this._onOpenColorPicker(input);
				})
			});
			// Remove dojo styling from color picker buttons
			domClass.remove(button.domNode.firstChild, "dijitButtonNode");
			button.focusNode.style.backgroundColor = input.get("value");
			domConstruct.place(button.domNode, span, "last");
			this.colorButtons.push(button);

			if (numColors > 1 && !this._isSystemTheme()) {
				var removeButton = new Button({
					"class": "removeColorButton",
					label: this.messages.admin_theme_color_remove_button_label,
					onClick: lang.hitch(this, function() {
						var newColorList = [];
						array.forEach(this.colorList, function(colorInput) {
							if (colorInput != input) {
								newColorList.push(colorInput.get("value"));
							}
						}, this);

						this._clearColorPalette();
						array.forEach(newColorList, function(color) {
							this._addColor(color);
						}, this);

						this._onFieldChange();
						this._updateColors(input, true);
					})
				});
				this.colorButtons.push(removeButton);
				domConstruct.place(removeButton.domNode, td2, "last");
			}
		},

		_updateColors: function(colorInput, removed) {
			var ci = colorInput, d = TabTheme._DEFAULTS, re = /ColorSelect$/, ts = this.getThemeStyle(), opt = [], v;
			for (var f in d) {
				if (!f.match(re)) // not colors, not interested
					continue;

				// Update the field with the current color palette and its value if it's using the given color input,
				// which was either updated with a new color or removed from the color palette
				opt = this._getColorOptions(d[f][ts] || d[f]["classic"] || d[f]["default"]);
				v = this[f].get("value");
				if (ci && array.some(this[f].options, "return item.selected && item.id === this.id;", ci)) // updated color in use
					v = removed ? opt[0].value : ci.get("value");
				this[f].set("options", opt);
				this[f].set("value", v);
			}
		},

		/**
		 * @private
		 */
		_onOpenColorPicker: function(field) {
			var brandColor = field.get("value");
			if (brandColor && brandColor != "")
				this._colorPicker.set("value", brandColor);
			this._colorPickerDialog.show();
		},

		/**
		 * @private
		 */
		_onOkColorPicker: function() {
			this._colorPickerDialog.colorField.set("value", this._colorPicker.get("value"));
			this._colorPickerDialog.hide();
		},

		/**
		 * @private
		 */
		_onCloseColorPicker: function() {
			this._colorPickerDialog.hide();
		},

		/**
		 * @private
		 */
		_onLoginLogoChange: function() {
			var val = this._loginPaneLogoSelect.get("value");

			if ((val && val == "url") || this._isSystemTheme()) {
				this.loginPageLogo.set("disabled", false);
			} else {
				this.loginPageLogo.set("disabled", true);
				if (!this.loginPageLogo.get('value'))
					this.loginPageLogo.reset();
			}

			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onBannerLogoChange: function() {
			var val = this._bannerLogoSelect.get("value");

			if ((val && val == "url") || this._isSystemTheme()) {
				this.bannerLogoField.set("disabled", false);
			} else {
				this.bannerLogoField.set("disabled", true);
				if (!this.bannerLogoField.get('value'))
					this.bannerLogoField.reset();
			}

			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onBannerProductNameChange: function() {
			var val = this._bannerProductNameSelect.get("value");

			if ((val && val == "url") || this._isSystemTheme()) {
				this.bannerProductNameLogoField.set("disabled", false);
			} else {
				this.bannerProductNameLogoField.set("disabled", true);
				if (!this.bannerProductNameLogoField.get('value'))
					this.bannerProductNameLogoField.reset();
			}

			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onButtonStyleChange: function() {
			var val = this._buttonStyleSelect.get("value");

			if ((val && val == "text") || this._isSystemTheme()) {
				this._buttonBackgroundColorSelect.set("disabled", true);
			} else {
				this._buttonBackgroundColorSelect.set("disabled", false);
			}

			this._onFieldChange();
		}
	});
	
	TabTheme._DEFAULTS = {
		// Application-wide
		_globalFontSelect: { "classic": "option0", "modelAccessorName": "Font" },
		_globalFrameworkColorSelect: { "classic": "#008abf", "modelAccessorName": "FrameworkBackgroundColor" },
		_globalFrameworkAccentColorSelect: { "default": "#a6266e", "modelAccessorName": "AccentColor" },
		_globalSelectedColorSelect: { "classic": "#ddf2f9", "default": "#c7eafa", "modelAccessorName": "SelectedColor" },
		_globalToolbarColorSelect: { "classic": "#0066ad", "default": "#ffffff", "modelAccessorName": "GlobalToolbarColor" },
		_globalToolbarTextColorSelect: { "default": "#4178be", "modelAccessorName": "GlobalToolbarTextColor" },
		_globalLinkColorSelect: { "classic": "#00649d", "modelAccessorName": "LinkColor" },
		
		// Login page
		_loginPageBackgroundColorSelect: { "classic": "#fafafa", "default": "#e0e0e0", "modelAccessorName": "LoginPageBackground" },
		_loginPaneBackgroundColorSelect: { "classic": "#ffffff", "default": "#f9f9fb", "modelAccessorName": "LoginPaneBackground" },
		_loginPaneTextColorSelect: { "classic": "auto", "default": "#1d3649", "modelAccessorName": "LoginTextColor" },
		_loginPaneLogoSelect: { "classic": "default", "default": "default", "modelAccessorName": "LoginLogo" },
		_loginPaneCopyrightSelect: { "classic": "default", "modelAccessorName": "CopyrightText" },
		
		// Banner
		_bannerColorSelect: { "classic": "#231f20", "default": "#152935", "modelAccessorName":  "BannerColor" },
		_bannerTypeSelect: { "classic": "gradient", "modelAccessorName":  "BannerType" },
		bannerTextIconsColorSelect: { "classic": "auto", "modelAccessorName":  "BannerTextIconColor" },
		_bannerTextColorSelect: { "default": "#ffffff", "modelAccessorName":  "BannerTextColor" },
		_bannerIconColorSelect: { "default": "#41d6c3", "modelAccessorName":  "BannerIconColor" },
		_bannerLogoSelect: { "classic": "default", "default": "default", "modelAccessorName": "BannerLogo" },
		_bannerProductNameSelect: { "classic": "default", "default": "default", "modelAccessorName": "ApplicationNameLogo" },
		
		// Navigation
		_navigationBackgroundColorSelect: { "classic": "#e3e4e6", "default": "#f9f9fb", "modelAccessorName":  "NavigationBackgroundColor" },
		navigationIconColorSelect: { "classic": "auto", "default": "#1d3649", "modelAccessorName":  "NavigationIconColor" },
		_navigationSelectedIconColorSelect: { "classic": "#008ABF", "default": "#4178be", "modelAccessorName":  "NavigationSelectedIconColor" },
		
		// Buttons and links
		_buttonStyleSelect: { "classic": "default", "default": "default", "modelAccessorName":  "ButtonStyle" },
		_buttonBackgroundColorSelect: { "classic": "#e3e4e6", "modelAccessorName":  "ButtonBackgroundColor" },
		_buttonTextIconColorSelect: { "classic": "#000000", "modelAccessorName":  "ButtonTextIconColor" },
		_buttonColorSelect: { "default": "#4178be", "modelAccessorName":  "ButtonColor" },
	};
	
	TabTheme._OPTIONS = {
		_globalFontSelect: {
			"classic": [
				{ value: "option0", label: '<span style="font-family: default;">Helvetica Neue, Helvetica, Arial, sans-serif (' + ecm.messages.default_label + ')</span>' },
				{ value: "option1", label: '<span style="font-family: Helvetica, Arial, sans-serif;">Helvetica, Arial, sans-serif</span>' },
				{ value: "option2", label: "<span style='font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;'>Lucida Sans Unicode, Lucida Grande, sans-serif</span>" },
				{ value: "option3", label: '<span style="font-family: Tahoma, Geneva, sans-serif;">Tahoma, Geneva, sans-serif</span>' },
				{ value: "option4", label: '<span style="font-family: Verdana, Geneva, sans-serif;">Verdana, Geneva, sans-serif</span>' },
				{ value: "option5", label: "<span style='font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;'>Palatino Linotype, Book Antiqua, Palatino, serif</span>" },
				{ value: "option6", label: "<span style='font-family: Gulim, Dotum, \"Malgun Gothic\", \"Baekmuk Gulim\", AppleGothic, Arial, Tahoma, Verdana, sans-serif;'>Gulim, Dotum, Malgun Gothic, Baekmuk Gulim, AppleGothic, Arial, Tahoma, Verdana, sans-serif</span>" },
				{ value: "option7", label: "<span style='font-family: \"MS UI Gothic\", \"MS PGothic\", Meiryo, \"Sazanami Gothic\", \"Hiragino Kaku Gothic Pro\", Arial, Tahoma, Verdana, sans-serif'>MS UI Gothic, MS PGothic, Meiryo, Sazanami Gothic, Hiragino Kaku Gothic Pro, Arial, Tahoma, Verdana, sans-serif</span>" }
			], 
			"default": [
				{ value: "default", label: '<span style="font-family: default;">Helvetica Neue for IBM, Helvetica Neue, Helvetica, Arial, sans-serif (' + ecm.messages.default_label + ')</span>' }
			]
		},
		_bannerLogoSelect: {
			"classic": [
				{ value: "default", label: ecm.messages.ibm_label + " (" + ecm.messages.default_label + ")" },
				{ value: "none", label: ecm.messages.admin_theme_no_logo_label },
				{ value: "url", label: ecm.messages.admin_theme_custom_logo_label }
			],
			"default": [
				{ value: "default", label: ecm.messages.admin_theme_no_logo_label + " (" + ecm.messages.default_label + ")" },
				{ value: "url", label: ecm.messages.admin_theme_custom_logo_label }
			]
		},
		_buttonStyleSelect: {
			"classic": [
				{ value: "default", label: ecm.messages.admin_theme_gradient + " (" + ecm.messages.default_label + ")" },
				{ value: "solid", label: ecm.messages.admin_theme_solid },
				{ value: "text", label: ecm.messages.admin_theme_text }
			],
			"default": [
				{ value: "default", label: ecm.messages.admin_theme_box + " (" + ecm.messages.default_label + ")" },
				{ value: "solid", label: ecm.messages.admin_theme_solid },
				{ value: "text", label: ecm.messages.admin_theme_text }
			]
		}
	};
	
	return TabTheme;
});

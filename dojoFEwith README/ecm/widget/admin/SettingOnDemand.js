/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/aspect",
	"dojo/json",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/Body",
	"gridx/modules/CellWidget",
	"idx/layout/BorderContainer",
	"idx/layout/TitlePane",
	"ecm/MessagesMixin",
	"ecm/widget/FilteringSelect",
	"ecm/widget/Select",
	"ecm/widget/ComboBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/NumberTextBox",
	"ecm/widget/RadioButton",
	"ecm/widget/ValidationTextBox",
	"ecm/model/admin/SettingsConfig",
	"ecm/widget/admin/ODCustomPropertiesDialog",
	"dojo/store/Memory",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/SettingOnDemand.html"
], //

function(declare, lang, has, string, aspect, json, domClass, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, SingleSort, Body, CellWidget, //
BorderContainer, TitlePane, MessagesMixin, FilteringSelect, Select, ComboBox, HoverHelp, NumberTextBox, RadioButton, ValidationTextBox, SettingsConfig, ODCustomPropertiesDialog, MemoryStore, BidiComplex, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.SettingOnDemand
	 * @class Provides a widget that is used to configure the settings that are used by the OnDemand Web Enablement Kit.
	 */
	return declare("ecm.widget.admin.SettingOnDemand", [
		_NavigatorAdminTabBase,
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.SettingOnDemand.prototype */

		templateString: template,
		widgetsInTemplate: true,

		odRepositoryExists: false,

		_ODLanguageList: [
			"CHS",
			"CHT",
			"CZE",
			"DAN",
			"DEU",
			"ELL",
			"ENU",
			"ESP",
			"FIN",
			"FRA",
			"HRV",
			"HUN",
			"ITA",
			"JPN",
			"KOR",
			"NLD",
			"NOR",
			"PLK",
			"PTB",
			"RUS",
			"SKY",
			"SLO",
			"SVE"
		],
		_editItemValue: null,
		_dialog: null,

		postCreate: function() {
			this.inherited(arguments);
			this._setHoverHelp();
			if (has("dojo-bidi")) {
				BidiComplex.attachInput(this.odTempdir.focusNode, "FILE_PATH");
				this.odTempdir.textDir = "ltr";
				BidiComplex.attachInput(this.odTracedir.focusNode, "FILE_PATH");
				this.odTracedir.textDir = "ltr";
				BidiComplex.attachInput(this.odAfp2pdfInstalldir.focusNode, "FILE_PATH");
				this.odAfp2pdfInstalldir.textDir = "ltr";
			}
			this.odTraceQty.set("invalidMessage", this.messages.property_integer_invalid);
			this._traceSettingsTitlePane.set("title", this.messages.admin_ondemand_tracegrp);
			this.odLanguage.validator = lang.hitch(this, function(value, constraints) {
				return true;
			});
		},

		_setHoverHelp: function() {
			this.odLanguage.setHoverHelp(this.odLanguageHoverHelp);
			this.odTempdir.setHoverHelp(this.odTempdirHoverHelp);
			this.odTracedir.setHoverHelp(this.odTracedirHoverHelp);
			this.odTracelevel.setHoverHelp(this.odTracelevelHoverHelp);
			this.odTraceUnlimited.setHoverHelp(this.odMaxTraceFilesizeFieldHoverHelp);
			this.odTraceUnlimited.promptMessage = this.messages.admin_ondemand_max_trace_unlimited_hover;
			this.odTraceLimited.setHoverHelp(this.odMaxTraceFilesizeFieldHoverHelp);
			this.odTraceLimited.promptMessage = this.messages.admin_ondemand_max_trace_limited_hover;
			this.odTraceQty.rangeMessage = this.messages.admin_ondemand_max_trace_range_msg;
			this.odTraceQty.setHoverHelp(this.odMaxTraceFilesizeLimitedFieldHoverHelp);
			this.odAfp2pdfInstalldir.setHoverHelp(this.odAfp2pdfInstalldirHoverHelp);
		},

		// Called when the user hits the Reset button 
		loadData: function(model, callback) {
			this._init = false;

			var items = [];
			for (var i = 0; i < this._ODLanguageList.length; i++) {
				items.push({
					"value": this._ODLanguageList[i],
					"label": this._ODLanguageList[i]
				});
			}
			this.odLanguage.set("store", new MemoryStore({
				data: items,
				identifier: 'value'
			}));

			var value = model.getODLanguage();
			if (!value || (value.length < 1)) {
				value = "ENU";
				model.setODLanguage(value);
			}
			this.odLanguage.set('value', value);

			value = model.getODTempdir();
			if (!value || (value.length < 1)) {
				value = "";
				model.setODTempdir(value);
			}
			this.odTempdir.set('value', value);

			value = model.getODTracedir();
			if (!value || (value.length < 1)) {
				value = "";
				model.setODTracedir(value);
			}
			this.odTracedir.set('value', value);

			var options = [];
			options.push({
				value: "0",
				label: this.messages.admin_ondemand_tracelevel_0
			});
			options.push({
				value: "1",
				label: this.messages.admin_ondemand_tracelevel_1
			});
			options.push({
				value: "2",
				label: this.messages.admin_ondemand_tracelevel_2
			});
			options.push({
				value: "3",
				label: this.messages.admin_ondemand_tracelevel_3
			});
			options.push({
				value: "4",
				label: this.messages.admin_ondemand_tracelevel_4
			});
			this.odTracelevel.set("options", options);

			var traceLevel = model.getODTracelevel();
			if (!traceLevel || (traceLevel.length < 1)) {
				traceLevel = "1";
				model.setODTracelevel(traceLevel);
			}
			this.odTracelevel.set('value', traceLevel);

			var maxFilesize = model.getODMaxTraceFilesize();
			if (!maxFilesize || (maxFilesize < 1)) {
				this.odTraceUnlimited.set('checked', true);
				this.odTraceQty.set('value', "");
			} else {
				this.odTraceLimited.set('checked', true);
				this.odTraceQty.set('value', maxFilesize);
			}
			this.odTraceQty.set('disabled', this.odTraceUnlimited.get('checked'));

			value = model.getODAfp2pdfInstalldir();
			if (!value || (value.length < 1)) {
				value = "";
				model.setODAfp2pdfInstalldir(value);
			}
			this.odAfp2pdfInstalldir.set('value', value);

			this.initializeCustomPropertiesGrid(model);
			this.setRequiredFields();
			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 200);
			if (callback)
				callback();
		},

		setRequiredFields: function() {
			this.odLanguageRequired.hidden = !this.odRepositoryExists;
			this.odLanguage.required = this.odRepositoryExists;
			this.odTempdirRequired.hidden = !this.odRepositoryExists;
			this.odTempdir.required = this.odRepositoryExists;
			this.odTracedirRequired.hidden = !this.odRepositoryExists;
			this.odTracedir.required = this.odRepositoryExists;
			this.odTracelevelRequired.hidden = !this.odRepositoryExists;
			this.odTracelevel.required = this.odRepositoryExists;
		},

		initializeCustomPropertiesGrid: function(model) {
			this.setupCustomPropertiesGrid(this.loadCustomProperties(model));
			this._checkGridButtons();
			this.resize();
		},

		setupCustomPropertiesGrid: function(items) {
			if (this._odCustomPropertiesGrid) {
				this._odCustomPropertiesGrid.destroy();
			}
			this._odCustomPropertiesGrid = new Grid({
				"aria-label": ecm.messages.admin_repcfg_custom_properties_label,
				region: "center",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: new MemoryStore({
					data: items
				}),
				structure: [
					{
						field: "name",
						name: this.messages.admin_repcfg_custom_head1,
						width: "40%"
					},
					{
						field: "value",
						name: this.messages.admin_repcfg_custom_head2,
						width: "60%"
					}
				],
				modules: [
					CellWidget,
					Focus,
					SelectRow,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 1,
								descending: false
							}
						]
					},
					{
						moduleClass: ExtendedSelectRow,
						triggerOnCell: true
					}
				]
			});
			domClass.add(this._odCustomPropertiesGrid.domNode, "compact gridxWholeRow");
			this.gridBorderContainer.addChild(this._odCustomPropertiesGrid);
			this._odCustomPropertiesGrid.startup();

			this.own(aspect.after(this._odCustomPropertiesGrid.select.row, "onSelectionChange", lang.hitch(this, "_checkGridButtons"), true));
			this.own(aspect.after(this._odCustomPropertiesGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._onFieldChange();
				setTimeout(lang.hitch(this, lang.hitch(this, function() {
					this._odCustomPropertiesGrid.vScroller.scrollToRow(this._odCustomPropertiesGrid.row(id).visualIndex() - 1, true);
				}), 1500));
			}), true));
			this.own(aspect.after(this._odCustomPropertiesGrid.model, "onDelete", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._odCustomPropertiesGrid.model, "onSet", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._odCustomPropertiesGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._editItem(this._odCustomPropertiesGrid.row(evt.rowIndex).item());
			}), true));
		},

		loadCustomProperties: function(model) {
			var itemArray = [];
			var customPropertiesString = model.getCustomProperties();
			if (customPropertiesString) {
				if (customPropertiesString instanceof Array) {
					var ar = customPropertiesString;
					customPropertiesString = "";
					for (var i = 0; i < ar.length; i++) {
						customPropertiesString = customPropertiesString + ar[i];
						if (i < (ar.length - 1)) {
							customPropertiesString = customPropertiesString + ",";
						}
					}
				}
				try {
					itemArray = json.parse(customPropertiesString);
				} catch (e) {
					console.debug(e.message);
					console.debug(customPropertiesString);
				}
			}
			for (var i = 0; i < itemArray.length; i++) {
				itemArray[i].id = "id_" + i;
			}
			return itemArray;
		},

		getCustomProperties: function() {
			var values = [];
			var items = this._odCustomPropertiesGrid.model.store.query({});
			for (var i = 0; i < items.length; i++) {
				var propertyName = items[i].name;
				var propertyValue = items[i].value;
				values.push({
					"name": this._fixCustomProperty(propertyName),
					"value": this._fixCustomProperty(propertyValue)
				});
			}
			return json.stringify(values);
		},

		_fixCustomProperty: function(val) {
			// If all single slash, then replace with double slash
			var replaceString = /\\/g;
			if (val.indexOf("\\\\") == -1) {
				val = val.replace(replaceString, "\\\\");
			}

			// Add double slash for every single slash
			// If triple or more slash, replace with double slash
			var isFirstSlash = false;
			var isSecondSlash = false;
			var newValue = "";
			for (var i = 0; i < val.length; i++) {
				var aChar = val[i];
				if (aChar != "\\") {
					if (isFirstSlash && !isSecondSlash) {
						newValue += "\\";
					}
					isFirstSlash = false;
					isSecondSlash = false;
					newValue += aChar;
				} else if (!isFirstSlash) { // first slash
					isFirstSlash = true;
					isSecondSlash = false;
					newValue += aChar;
					if ((i + 1) == val.length) { // if it ends with a single slash, then add slash
						newValue += aChar;
					}
				} else if (!isSecondSlash) { // add the 2nd slash to the value.  Will ignore triple or more slashes.
					isSecondSlash = true;
					newValue += aChar;
				}
			}
			return newValue;
		},

		// overridable
		onMarkDirty: function() {
		},

		loadWithFieldValues: function(adminModel) {
			adminModel.setODLanguage(this.odLanguage.get('value').toString());
			adminModel.setODTempdir(this._getDir(this.odTempdir.get("value")));
			adminModel.setODTracedir(this._getDir(this.odTracedir.get('value')));
			adminModel.setODAfp2pdfInstalldir(this._getDir(this.odAfp2pdfInstalldir.get('value')));

			adminModel.setODTracelevel(this.odTracelevel.get('value').toString());
			var maxFilesize = "0";
			if (this.odTraceLimited.get('checked')) {
				maxFilesize = this.odTraceQty.get('value').toString();
			}
			adminModel.setODMaxTraceFilesize(maxFilesize);
			adminModel.setCustomProperties(this.getCustomProperties());
		},

		_getDir: function(val) {
			var dir = string.trim(val);
			if (dir.length > 0 && dir.charAt(dir.length - 1) == "\\") {
				dir = dir.substring(0, dir.length - 1);
			}
			if (has("dojo-bidi")) {
				return BidiComplex.stripSpecialCharacters(dir);
			} else {
				return dir;
			}
		},

		isResetingFields: function(adminModel) {
			var noChange = true;

			if (adminModel.getODLanguage() != this.odLanguage.get('value').toString()) {
				noChange = false;
			} else if (adminModel.getODTempdir() != (!has("dojo-bidi") ? this.odTempdir.get('value').toString() : BidiComplex.stripSpecialCharacters(this.odTempdir.get('value').toString()))) {
				noChange = false;
			} else if (adminModel.getODTracedir() != (!has("dojo-bidi") ? this.odTracedir.get('value').toString() : BidiComplex.stripSpecialCharacters(this.odTracedir.get('value').toString()))) {
				noChange = false;
			} else if (adminModel.getODTracelevel() != this.odTracelevel.get('value').toString()) {
				noChange = false;
			} else if (adminModel.getODAfp2pdfInstalldir() != (!has("dojo-bidi") ? this.odAfp2pdfInstalldir.get('value').toString() : BidiComplex.stripSpecialCharacters(this.getODAfp2pdfInstalldir.get('value').toString()))) {
				noChange = false;
			} else {
				var maxFilesize = "";
				if (this.odTraceLimited.get('checked')) {
					maxFilesize = this.odTraceQty.get('value').toString();
					if (maxFilesize.length < 1) {
						noChange = false;
					}
				}
				if (adminModel.getODMaxTraceFilesize() != maxFilesize) {
					noChange = false;
				}
				if (noChange) {
					var replaceString;
					var customPropsDisplayed = this.getCustomProperties();
					if (customPropsDisplayed && (customPropsDisplayed != null)) {
						customPropsDisplayed = customPropsDisplayed.toString();
						replaceString = /\\\\/g;
						customPropsDisplayed = customPropsDisplayed.replace(replaceString, "\\");
						customPropsDisplayed = customPropsDisplayed.replace(replaceString, "\\");
					} else {
						customPropsDisplayed = "";
					}
					var customPropsSaved = adminModel.getCustomProperties();
					if (customPropsSaved && (customPropsSaved != null)) {
						customPropsSaved = customPropsSaved.toString();
						replaceString = /\\\\/g;
						customPropsSaved = customPropsSaved.replace(replaceString, "\\");
					} else {
						customPropsSaved = "";
					}
					if (customPropsDisplayed != customPropsSaved) {
						noChange = false;
					}
				}
			}
			return noChange;
		},

		_onUnlimited: function() {
			this.odTraceQty.set('disabled', true);
		},

		_onLimited: function() {
			this.odTraceQty.set('disabled', false);
		},

		_onFieldChange: function() {
			if (this._init) {
				this.onMarkDirty();
			}
		},

		_checkGridButtons: function() {
			this.newPropertyButton.set('disabled', false);
			this.editPropertyButton.set('disabled', this._odCustomPropertiesGrid.select.row.getSelected().length != 1);
			this.deletePropertyButton.set('disabled', this._odCustomPropertiesGrid.select.row.getSelected().length == 0);
		},

		_onNewProperty: function() {
			this._getDialog().show(this._odCustomPropertiesGrid.model);
		},

		_onEditProperty: function() {
			var selectedItems = this._odCustomPropertiesGrid.select.row.getSelected();
			this._editItem(this._odCustomPropertiesGrid.row(selectedItems[0]).item());
		},

		_editItem: function(item) {
			this._editItemValue = item;
			this._getDialog().show(this._odCustomPropertiesGrid.model, {
				name: item.name,
				value: item.value
			});
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new ODCustomPropertiesDialog();

				this.own(aspect.after(this._dialog, "onAdd", lang.hitch(this, function(saveData) {
					this._odCustomPropertiesGrid.model.store.add({
						"id": "id_" + new Date().getTime(),
						"name": saveData.name,
						"value": saveData.value
					});
					this.onMarkDirty();
				}), true));

				this.own(aspect.after(this._dialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.name = saveData.name;
					item.value = saveData.value;
					this._odCustomPropertiesGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this.onMarkDirty();
				}), true));
			}
			return this._dialog;
		},

		_onDeleteProperty: function() {
			var rowIds = this._odCustomPropertiesGrid.select.row.getSelected();
			if (rowIds) {
				for (var i = 0; i < rowIds.length; i++) {
					this._odCustomPropertiesGrid.model.store.remove(rowIds[i]);
				}
			}
			this.onMarkDirty();
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			var valid = true;
			if (this.odRepositoryExists && (!this.odLanguage.isValid() || !this.odTempdir.isValid() || !this.odTracedir.isValid() || !this.odTracelevel.isValid() || !this.odAfp2pdfInstalldir.isValid())) {
				valid = false;
			}
			if (valid && this.odLanguage && this.odRepositoryExists && (this.odLanguage.get('value').length < 1)) {
				valid = false;
			}
			if (valid && this.odTempdir && this.odRepositoryExists && (this.odTempdir.get('value').length < 1)) {
				valid = false;
			}
			if (valid && this.odTracedir && this.odRepositoryExists && (this.odTracedir.get('value').length < 1)) {
				valid = false;
			}
			if (valid && this.odTracelevel && this.odRepositoryExists && (this.odTracelevel.get('value').length < 1)) {
				valid = false;
			}
			if (valid) {
				if (this.odTraceLimited.get('checked')) {
					var maxFilesize = this.odTraceQty.get('value');
					if (!maxFilesize || (maxFilesize < 0) || (maxFilesize > 1000000)) {
						valid = false;
					}
				}
			}
			return valid;
		},

		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},

		_markDirty: function() {
			this.inherited(arguments);
		},

		_markClean: function() {
			this.inherited(arguments);
		}

	});

});

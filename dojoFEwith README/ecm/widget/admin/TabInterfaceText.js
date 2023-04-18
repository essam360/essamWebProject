/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/_base/kernel",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/html",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/widget/HoverHelp",
	"ecm/widget/Select",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelpText",
	"ecm/widget/ValidationTextBox",
	"ecm/model/admin/LabelsData",
	"ecm/model/Request",
	"dijit/form/FilteringSelect",
	"dijit/form/Button",
	"dijit/form/RadioButton",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/ColumnResizer",
	"gridx/modules/CellWidget",
	"gridx/modules/Edit",
	"dojo/store/Memory",
	"dojo/text!./templates/TabInterfaceText.html"
], //

function(declare, lang, array, string, aspect, domClass, domAttr, has, construct, style, kernel, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, idxHtml, MessagesMixin, LoggerMixin, Desktop, HoverHelp, Select, _NavigatorAdminTabBase, HoverHelpText, ValidationTextBox, LabelsData, Request, FilteringSelect, Button, RadioButton, BorderContainer, ContentPane, TabContainer, Grid, Cache, Focus, SelectRow, ColumnResizer, CellWidget, Edit, MemoryStore, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabInterfaceText
	 * @class Provides a widget that is used to customize the text of labels that are displayed in specific areas of the
	 *        web client.
	 */
	return declare("ecm.widget.admin.TabInterfaceText", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabInterfaceText.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "interfaceText.interfaceText"
		},

		_messages: ecm.messages,

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.logEntry("initialize");
			this._isInitialized = false;

			this.applicationBorderContainer.set("title", this._messages.admin_interface_text_label_application);
			this.desktopBorderContainer.set("title", this._messages.admin_interface_text_label_desktop);
			this.systemBorderContainer.set("title", this._messages.admin_interface_text_label_system);

			this.labelsData = LabelsData.createLabelsData(this._SECURITY_TOPIC);
			this.labelsData.loadData(lang.hitch(this, function() {
				this._loadDesktops(this.labelsData.desktops);
				this._loadLocales(this.labelsData.locales);
				this._loadArrays(this.labelsData.interfaceTexts);
				this._initializeGrids();
			}));
			this.logExit("initialize");
		},

		destroy: function() {
			this.logEntry("destroy");
			delete this._applicationItems;
			delete this._systemCMItems;
			delete this._systemP8Items;
			this.clearDesktopItems();

			if (this._managedInIBMECMHoverHelp) {
				this._managedInIBMECMHoverHelp.destroy();
				delete this._managedInIBMECMHoverHelp;
			}

			this.inherited(arguments);
			this.logExit("destroy");
		},

		onSelect: function() {
			if (!domAttr.has(this.desktopBorderContainer.controlButton.focusNode, "aria-describedby")) {
				domAttr.set(this.applicationBorderContainer.controlButton.focusNode, "aria-describedby", this.applicationInstructions.id);
				domAttr.set(this.systemBorderContainer.controlButton.focusNode, "aria-describedby", this.systemInstructions.id);
				domAttr.set(this.desktopBorderContainer.controlButton.focusNode, "aria-describedby", this.desktopInstructions.id);
			}
		},

		clearDesktopItems: function() {
			for ( var i in this._desktopItems) {
				if (i && this._desktopItems[i]) {
					if (this._desktopItems[i].items)
						delete this._desktopItems[i].items;
					if (this._desktopItems[i].store) {
						delete this._desktopItems[i].store;
					}
				}
			}
			this._desktopItems = {};
		},

		_clearDesktopStores: function() {
			for ( var i in this._desktopItems) {
				if (i && this._desktopItems[i]) {
					if (this._desktopItems[i].store) {
						delete this._desktopItems[i].store;
						this._desktopItems[i].store = null;
					}
				}
			}
		},

		/**
		 * Load the desktops and create the this._desktopItems here.
		 */
		_loadDesktops: function(desktops) {
			this.logEntry("_loadDesktops");
			this.clearDesktopItems();
			var firstDesktopID = "";
			var options = [];
			for (var i = 0; i < desktops.length; i++) {
				var desktop = desktops[i];
				if (i == 0) {
					firstDesktopID = desktop.id;
				}
				options.push({
					id: desktop.id,
					label: desktop.getName()
				});
				this._desktopItems[desktop.id] = {
					items: [],
					store: null
				};
			}

			this._desktop.set("store", new MemoryStore({
				data: options
			}));
			if (this._currentDesktopID) {
				this._desktop.set("value", this._currentDesktopID);
			} else {
				this._desktop.set("value", firstDesktopID);
			}
			this.logExit("_loadDesktops");
		},

		_loadLocales: function(localeObjects) {
			this.logEntry("_loadLocales");
			var shortLocale = kernel.locale.substring(0, 2);
			var selectedLocale = "en";
			if (this._locale.getOptions(0)) {
				this._locale.removeOption(this._locale.getOptions());
			}
			if (localeObjects) {
				var options = [];
				for ( var i in localeObjects) {
					var localeConfig = localeObjects[i];

					var label = localeConfig.getLabel();
					var localeId = localeConfig.id;
					var modifiedLocaleId = this._getLocaleWithDash(localeId);

					if (modifiedLocaleId == kernel.locale || modifiedLocaleId == shortLocale) {
						selectedLocale = localeId;
					}
					// Using addOption as it supports html.  RLT languages can have html in the label.
					this._locale.addOption({
						value: localeId,
						label: label
					});
				}
				// If browser set to Chinese only, then select the 1st Chinese language in the list
				if (selectedLocale == "en" && shortLocale != "en") {
					for ( var i in localeObjects) {
						var localeId = localeObjects[i].id;
						var localeIdShort = localeId.substring(0, 2);
						if (localeIdShort == shortLocale) {
							selectedLocale = localeId;
							break;
						}
					}
				}
				if (this._isInitialized && this._lastSelectedLocale) {
					this._locale.set('value', this._lastSelectedLocale);
				} else {
					this._locale.set('value', selectedLocale);
					this._lastSelectedLocale = selectedLocale;
				}
			}
			this.logExit("_loadLocales");
		},

		_loadArrays: function(modelObjects) {
			this.logEntry("_loadArrays");
			this._applicationItems = [];
			this._systemCMItems = [];
			this._systemP8Items = [];
			for ( var i in modelObjects) {
				var interfaceText = modelObjects[i];
				if (interfaceText.isTypeApplication()) {
					this._applicationItems.push(interfaceText);
				} else if (interfaceText.isTypeSystem()) {
					if (interfaceText.isCM()) {
						this._systemCMItems.push(interfaceText);
					} else if (interfaceText.isP8()) {
						this._systemP8Items.push(interfaceText);
					}
				} else if (interfaceText.isTypeDesktop()) {
					var desktopId = interfaceText.getDesktopId();
					if (desktopId) {
						var desktopIds = desktopId.split(",");
						array.forEach(desktopIds, lang.hitch(this, function(entry) {
							if (this._desktopItems[entry] && !this.duplicatedItem(this._desktopItems[entry].items, interfaceText))
								this._desktopItems[entry].items.push(interfaceText);
						}));
					}
				}
			}
			this.logExit("_loadArrays");
		},

		duplicatedItem: function(items, interfaceText) {
			var result = array.some(items, function(entry) {
				return (entry.id == interfaceText.id);
			});
			return result;
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_initializeGrids: function() {
			this.logEntry("_initializeGrids");
			// Load the application grid
			if (this.applicationLabelGrid) {
				this.applicationLabelGrid.destroy();
			}
			this.applicationLabelGrid = this._createGrid(this._applicationItems, this._buildApplicationLabelGridStructure(), ecm.messages.admin_interface_text_label_application);
			domClass.add(this.applicationBorderContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");
			this.applicationBorderContainer.addChild(this.applicationLabelGrid);
			this.applicationLabelGrid.startup();

			// Load the system cm & p8 grids
			if (this.systemCMLabelGrid) {
				this.systemCMLabelGrid.destroy();
			}
			this.systemCMLabelGrid = this._createGrid(this._systemCMItems, this._buildStructure(), ecm.messages.admin_interface_text_label_system);
			domClass.add(this.systemBorderContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");
			this.systemBorderContainer.addChild(this.systemCMLabelGrid);
			this.systemCMLabelGrid.startup();
			style.set(this.systemCMLabelGrid.domNode, "display", this.systemRepositoryTypeCM.get('checked') ? "" : "none");

			if (this.systemP8LabelGrid) {
				this.systemP8LabelGrid.destroy();
			}
			this.systemP8LabelGrid = this._createGrid(this._systemP8Items, this._buildP8Structure(), ecm.messages.admin_interface_text_label_system);
			this.systemBorderContainer.addChild(this.systemP8LabelGrid);
			this.systemP8LabelGrid.startup();
			style.set(this.systemP8LabelGrid.domNode, "display", this.systemRepositoryTypeP8.get('checked') ? "" : "none");

			// Load the desktop grid
			var desktopId = this._desktop.get("value");
			if (this.desktopLabelGrid) {
				this.desktopLabelGrid.destroy();
			}
			this.desktopLabelGrid = this._createGrid(this._desktopItems[desktopId].items, this._buildDesktopStructure(), ecm.messages.admin_interface_text_label_desktop);
			this._desktopItems[desktopId].store = this.desktopLabelGrid.store; // don't want to lose the first one.
			domClass.add(this.desktopBorderContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");
			this.desktopBorderContainer.addChild(this.desktopLabelGrid);
			this.desktopLabelGrid.startup();

			this.resize();
			this._enableSave();
			this._isInitialized = true;
			this.logExit("_initializeGrids");
		},

		_createGrid: function(items, structure, ariaLabel) {
			this.logEntry("_createGrid", structure);
			var grid = new Grid({
				"aria-label": ariaLabel,
				region: "center",
				cacheClass: Cache,
				store: this._buildStore(items),
				structure: structure,
				textDir: has("text-direction"),
				selectRowTriggerOnCell: true,
				modules: [
					//Focus,
					//SelectRow,
					CellWidget,
					Edit
				]
			});
			this.own(aspect.after(grid.domNode, "onkeyup", lang.hitch(this, "_markDirty"), true));
			this.own(aspect.after(grid.store, 'put', lang.hitch(this, "_markDirty"), true));
			this.logExit("_createGrid");
			return grid;
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
		_saveData: function(/* function(success) */onComplete, closingAfterSave) {
			this.logEntry("_saveData");
			this._updateAllGridDataWithScreenValues(this.getSelectedLocale());
			this.labelsData.save(lang.hitch(this, function() {
				if (!closingAfterSave) {
					this._onReset();
				}
				onComplete(true);
			}));
			this.logExit("_saveData");
		},

		_updateAllGridDataWithScreenValues: function(locale, store) {
			this.logEntry("_updateAllGridDataWithScreenValues", locale);
			if (this.applicationLabelGrid) {
				this._updateDataWithScreenValues(locale, this.applicationLabelGrid);
				this._updateDataWithScreenValues(locale, this.systemCMLabelGrid);
				this._updateDataWithScreenValues(locale, this.systemP8LabelGrid);
				this._updateDesktopDataWithScreenValues(locale);
			}
			this.logExit("_updateAllGridDataWithScreenValues");
		},

		_updateDesktopDataWithScreenValues: function(locale) {
			this.logEntry("_updateDesktopDataWithScreenValues", locale);
			if (this.desktopLabelGrid.edit) {
				this.desktopLabelGrid.edit._applyAll(); // apply so that the last edited data is saved
			}
			for ( var i in this._desktopItems) {
				if (i && this._desktopItems[i] && this._desktopItems[i].store) {
					var items = this._desktopItems[i].store.query({});
					if (items) {
						for (var i = 0; i < items.length; i++) {
							var item = items[i];
							var interfaceText = this.labelsData.getInterfaceTextWithId(item.id);
							if (interfaceText) {
								interfaceText.getLocaleData().setValue(locale, item.currentLabel);
							}
						}
					}
				}
			}
			this.logExit("_updateDesktopDataWithScreenValues");
		},

		_updateDataWithScreenValues: function(locale, grid) {
			this.logEntry("_updateDataWithScreenValues", locale);
			if (grid.edit) {
				grid.edit._applyAll(); // apply so that the last edited data is saved
			}
			var items = grid.store.query({});
			if (items) {
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					var interfaceText = this.labelsData.getInterfaceTextWithId(item.id);
					if (interfaceText) {
						interfaceText.getLocaleData().setValue(locale, item.currentLabel);
					}
				}
			}
			this.logExit("_updateDataWithScreenValues", items ? items.length : 0);
		},

		_onDesktopChange: function(desktopId) {
			this.logEntry("_onDesktopChange", desktopId);
			if (this._isInitialized) {
				if (this.desktopLabelGrid.edit) {
					this.desktopLabelGrid.edit._applyAll(); // call to apply so that the last edited data is saved
				}
				if (this._desktopItems[desktopId]) {
					if (!this._desktopItems[desktopId].store) {
						this._desktopItems[desktopId].store = this._buildStore(this._desktopItems[desktopId].items);
					}
					this.desktopLabelGrid.setStore(this._desktopItems[desktopId].store);
					this.desktopLabelGrid.body.refresh();
					this.resize();
				}
			}
			this.logExit("_onDesktopChange");
		},

		_onLocaleChange: function() {
			this.logEntry("_onLocaleChange");
			if (this._isInitialized) {
				domClass.add(document.body, "ecmWait");
				var request = Request({
					backgroundRequest: false,
					progressMessage: this._messages.progress_message_general
				});
				ecm.model.desktop.onRequestStarted(request);

				setTimeout(lang.hitch(this, function() {
					// change from _ in locale to - 
					var locale = this._getLocaleWithDash(this.getSelectedLocale());
					// load new resource bundle (for the application labels that come from messages.js)
					dojo.requireLocalization("ecm", "messages", locale); // load the locales messages.js resource bundle

					if (this._lastSelectedLocale && this.getSelectedLocale()) { // this method is fired when bring up the screen before finished initialization - we only want to process when the pulldown is changed by the user
						this._updateAllGridDataWithScreenValues(this._lastSelectedLocale);
						this._clearDesktopStores(); // don't reuse the store after the grid is destroyed.
						this._initializeGrids();
						this._lastSelectedLocale = this.getSelectedLocale();
					}
					ecm.model.desktop.onRequestCompleted(request);
					domClass.remove(document.body, "ecmWait");
				}), 0);
			}
			this.logExit("_onLocaleChange");
		},

		_getLocaleWithDash: function(locale) {
			if (locale.length > 2 && locale.indexOf("_") > -1) {
				var index = locale.indexOf("_");
				locale = locale.substring(0, index).toLowerCase() + "-" + locale.substring(index + 1).toLowerCase();
			}
			return locale;
		},

		getSelectedLocale: function() {
			return this._locale.get("value");
		},

		_buildStore: function(items) {
			this.logEntry("_buildStore", items.length);
			var _items = [];
			for (var i = 0; i < items.length; i++) {
				var modelItem = items[i];
				var locale = this.getSelectedLocale();

				var displayedIn = modelItem.getDisplayedIn();
				if (displayedIn == "admin_application_space") {
					displayedIn = this._messages.admin_interface_text_displayed_in_admin_application_space;
				} else if (displayedIn == "desktop") {
					displayedIn = this._messages.admin_interface_text_displayed_in_desktop;
				} else if (displayedIn == "admin_application_name"){
					displayedIn = this._messages.admin_interface_text_displayed_in_admin_application_name;
				} else {
					// DisplayedIn - use key from the messages.properties to get the label value
					displayedIn = this._getLabelUsingKeyAndLocale(displayedIn, this._getLocaleWithDash(locale));
				}

				// CurrentLabel - use the InterfaceTextLocaleConfig (with the selected locale as the key) to get the override label value
				var currentLabel = modelItem.getLocaleData().getValue(locale) ? modelItem.getLocaleData().getValue(locale) : "";

				// Default Label
				// If we have labelKey, then use this to get the label value from messages.properties
				// Otherwise, the mid-tier will provide the label - use InterfaceTextLabelConfig (with the selected locale as the key)
				var defaultLabel = "";
				if (modelItem.hasLabelData() && modelItem.getLabelData().getValue(locale)) {
					defaultLabel = modelItem.getLabelData().getValue(locale);
				} else if (modelItem.getLabelKey()) {
					var modifiedLocaleId = this._getLocaleWithDash(locale);
					defaultLabel = this._getLabelUsingKeyAndLocale(modelItem.getLabelKey(), modifiedLocaleId);
				}
				var tooltipKey = modelItem.getTooltipKey() ? modelItem.getTooltipKey() : "";
				var desktopId = modelItem.getDesktopId() ? modelItem.getDesktopId() : "";
				var userData = modelItem.getUserData() ? modelItem.getUserData() : "";
				var repositoryName = modelItem.getRepositoryLabel() ? modelItem.getRepositoryLabel() : "";

				_items.push({
					"repository": repositoryName,
					"tooltipKey": tooltipKey,
					"displayedIn": displayedIn,
					"defaultLabel": defaultLabel,
					"currentLabel": currentLabel,
					"desktopId": desktopId,
					"userData": userData,
					"id": modelItem.id
				});
			}
			this.logExit("_buildStore");
			return new MemoryStore({
				data: _items
			});
		},

		_getLabelUsingKey: function(key) {
			if (key) {
				if (this._messages[key]) {
					return this._messages[key];
				} else {
					return key;
				}
			} else {
				return "";
			}
		},

		_getLabelUsingKeyAndLocale: function(key, locale) {
			if (key) {
				var messages = dojo.i18n.getLocalization("ecm", "messages", locale);
				if (messages) {
					if (messages[key]) {
						return messages[key];
					} else {
						return key;
					}
				}
			}
			return "";
		},

		_buildApplicationLabelGridStructure: function() {
			return [
				{
					field: "defaultLabel",
					name: this._messages.admin_interface_text_default_label_heading,
					width: "50%",
					widgetsInCell: true,
					decorator: function() {
						return "<span data-dojo-attach-point='_defaultLabelCellValue'></span>";
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						cellWidget._defaultLabelCellValue.innerHTML = gridData;
					},
					initializeCellWidget: lang.hitch(this, function(cellWidget, cell) {
						// Creates the hover help widget for the Managed In IBM ECM row
						if (cell.row.id == "app_admin_ms_managed_in_ecm") {
							this._managedInIBMECMHoverHelp = new HoverHelp();
							this._managedInIBMECMHoverHelp.message = this._messages.admin_ms_managed_in_ecm_hover_help;
							this._managedInIBMECMHoverHelp.startup();
							cellWidget._managedInIBMECMHoverHelp = this._managedInIBMECMHoverHelp;
							cellWidget.domNode.appendChild(this._managedInIBMECMHoverHelp.domNode);
						}
					}),
					uninitializeCellWidget: function(cellWidget, cell) {
						if (cellWidget._managedInIBMECMHoverHelp)
							cellWidget._managedInIBMECMHoverHelp.destroy();
					}
				},
				{
					field: "currentLabel",
					name: this._messages.admin_interface_text_current_label,
					editor: 'ecm/widget/ValidationTextBox',
					editorArgs: {
						props: '"class": "EditInputField"',
						trim: true,
						toEditor: lang.hitch(this, function(storeData, gridData, cell, editor) {
							if (cell.row.id == "app_admin_ms_managed_in_ecm" && editor.pattern != "([^,^;])*") {
								editor.pattern = "([^,^;])*";
								editor.invalidMessage = ecm.messages.admin_ms_managed_in_ibm_ecm_input_invalid;
								// Connect the cell text box to the hover help control
								editor.setHoverHelp(this._managedInIBMECMHoverHelp);
							}
							domAttr.set(editor.focusNode, "aria-label", ecm.messages.admin_interface_text_current_label);
							editor.set("value", storeData);
						})
					},
					alwaysEditing: true,
					width: "50%"
				}
			];
		},

		_buildStructure: function() {
			return [
				{
					field: "defaultLabel",
					name: this._messages.admin_interface_text_default_label_heading,
					width: "50%"
				},
				{
					field: "currentLabel",
					name: this._messages.admin_interface_text_current_label,
					editorArgs: {
						props: '"class": "EditInputField"',
						toEditor: lang.hitch(this, function(storeData, gridData, cell, editor) {
							domAttr.set(editor.focusNode, "aria-label", ecm.messages.admin_interface_text_current_label);
							editor.set("value", storeData);
						})
					},
					alwaysEditing: true,
					width: "50%"
				}
			];
		},

		_buildP8Structure: function() {
			return [
				{
					field: "defaultLabel",
					name: this._messages.admin_interface_text_system_label,
					width: "34%"
				},
				{
					field: "displayedIn",
					name: this._messages.admin_interface_text_displayed_in_label,
					width: "33%"
				},
				{
					field: "currentLabel",
					name: this._messages.admin_interface_text_current_label,
					editorArgs: {
						props: '"class": "EditInputField"',
						toEditor: lang.hitch(this, function(storeData, gridData, cell, editor) {
							domAttr.set(editor.focusNode, "aria-label", ecm.messages.admin_interface_text_current_label);
							editor.set("value", storeData);
						})
					},
					alwaysEditing: true,
					width: "33%"
				}
			];
		},

		_buildDesktopStructure: function() {
			return [
				{
					field: "displayedIn",
					name: this._messages.admin_interface_text_name_label,
					width: "20%"
				},
				{
					field: "repository",
					name: this._messages.repository,
					width: "20%"
				},
				{
					field: "defaultLabel",
					name: this._messages.admin_interface_text_default_label_heading,
					width: "30%"
				},
				{
					field: "currentLabel",
					name: this._messages.admin_interface_text_current_label,
					editorArgs: {
						props: '"class": "EditInputField"',
						toEditor: lang.hitch(this, function(storeData, gridData, cell, editor) {
							domAttr.set(editor.focusNode, "aria-label", ecm.messages.admin_interface_text_current_label);
							editor.set("value", storeData);
						})
					},
					alwaysEditing: true,
					width: "30%"
				}
			];
		},

		_onUseSystemCM: function() {
			style.set(this.systemCMLabelGrid.domNode, "display", "");
			style.set(this.systemP8LabelGrid.domNode, "display", "none");
			this.resize();
		},

		_onUseSystemP8: function() {
			style.set(this.systemCMLabelGrid.domNode, "display", "none");
			style.set(this.systemP8LabelGrid.domNode, "display", "");
			this.resize();
		},

		_onReset: function() {
			this._currentDesktopID = this._desktop.get("value");
			this._clearSelections();

			this.labelsData.loadData(lang.hitch(this, function() {
				this._loadDesktops(this.labelsData.desktops);
				this._loadLocales(this.labelsData.locales);
				this._loadArrays(this.labelsData.interfaceTexts);

				this._setAllStores();
				this._markClean();
			}));
		},

		_onClear: function() {
			this._clearSelections();
			for ( var i in this.labelsData.interfaceTexts) {
				var interfaceText = this.labelsData.interfaceTexts[i];
				interfaceText.getLocaleData().clearOverrideValues();
			}
			this._setAllStores();
			this._markDirty();
		},

		_setAllStores: function() {
			this.applicationLabelGrid.setStore(this._buildStore(this._applicationItems));
			this.systemCMLabelGrid.setStore(this._buildStore(this._systemCMItems));
			this.systemP8LabelGrid.setStore(this._buildStore(this._systemP8Items));

			// desktop items are odd balls. 
			var currentDesktopID = this._desktop.get("value");
			this.desktopLabelGrid.setStore(this._buildStore(this._desktopItems[currentDesktopID].items));
			this._desktopItems[currentDesktopID].store = this.desktopLabelGrid.store;
		},

		_clearSelections: function() {
			//this.applicationLabelGrid.select.row.clear();
			//this.systemCMLabelGrid.select.row.clear();
			//this.systemP8LabelGrid.select.row.clear();
			//this.desktopLabelGrid.select.row.clear();
		},

		onHelp: function() { // invoked when the help link is clicked
			this.openNewHelpWindow("ui_labels.html");
		},

		_validateData: function(focus) {
			var isValid = true;
			if (this.applicationLabelGrid) {
				var columns = this.applicationLabelGrid.columns();
				for (var i = 0; i < columns.length; i++) {
					var editor = this.applicationLabelGrid.edit.getEditor("app_admin_ms_managed_in_ecm", columns[i].id);
					if (editor && editor.isValid) {
						isValid = isValid && editor.isValid();
					}
				}
				this._locale.disabled = !isValid;
			}
			return isValid;
		},

		resize: function() {
			this.borderContainer.resize();
		}

	});

});

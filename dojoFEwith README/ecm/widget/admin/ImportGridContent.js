/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/dom",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/on",
	"dojo/Deferred",
	"dojo/keys",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/widget/HoverHelp",
	"ecm/model/admin/RepositoryConfig",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"dojo/store/Memory",
	"gridx/modules/Focus",
	"gridx/modules/VirtualVScroller",
	"gridx/modules/CellWidget",
	"gridx/modules/Edit",
	"gridx/modules/select/Row",
	"gridx/modules/RowHeader",
	"gridx/modules/IndirectSelect",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dojo/text!./templates/ImportGridContent.html",
	"dijit/layout/BorderContainer"
],

function(declare, lang, has, array, dom, string, style, domClass, domConstruct, domGeometry, on, Deferred, keys, MessagesMixin, LoggerMixin, HoverHelp, RepositoryConfig, Button, CheckBox, Grid, Cache, Store, modFocus, modVScroll, modCellWidget, modEdit, modSelectRow, modRowHeader, modIndirectSelect, modExtendedSelectRow, modSingleSort, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, template) {

	/**
	 * @private Part of the ImportGridContent widget.
	 * @name ecm.widget.admin.ImportGridContent
	 * @class Provides a dialog box that let user to select configuration objects to export from ICN.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.ImportGridContent", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.ImportGridContent.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Array of item
		 */
		data: null,
		label: "",

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);
			this.inherited(arguments);
			domClass.add(this._tabPane.domNode, "ecmGridContent");

			this._skippedStore = this._createStore(this.configType, this.skipped);
			this._importedStore = this._createStore(this.configType, this.imported);

			this.logExit(methodName);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (this._skippedGrid)
				this._skippedGrid.destroy();

			this.inherited(arguments);
		},

		/**
		 * Initialize the tab
		 * 
		 * @return a deferred object to sync loading
		 */
		initialize: function() {
			var methodName = "initialize";
			this.logEntry(methodName);

			this.title = this.label;
			if (this._skippedStore)
				this._initializeSkippedGrid(this._skippedStore);
			if (this._skippedStore && this._importedStore) {
				this._messageLine = domConstruct.create("div", {
					innerHTML: this.messages.admin_import_no_conflict,
					style: "padding: 5px; font-weight: bold;"
				}, this._tabPane.domNode);
			}
			if (this._importedStore)

				this._initialzieImportedGrid(this._importedStore);
			this.logExit(methodName);
		},

		_initializeSkippedGrid: function(store) {
			var methodName = "_initializeSkippedGrid";
			this.logEntry(methodName);

			var structure = [
				{
					field: "checkbox",
					width: has("isWebKit") ? "30px" : "18px",
					name: "<span class='dijitInline dijitCheckBox' aria-label=" + ecm.messages.admin_importconfiguration_button_label + " id=\"" + this.configType + "CB\" style=\"width: 16px;\" onClick=\"ecm.widget.admin.ImportConfigurationDialogEx._toggleCheckbox('" + this.configType + "')\" />",					
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return [
							'<span data-dojo-type="dijit.form.CheckBox"	class="gridxHasGridCellValue"',
							'data-dojo-attach-point="cb" />'
						].join('');
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cb.set("checked", gridData.overwrite);
						this.cb.focusNode.setAttribute("aria-label", ecm.messages.admin_importconfiguration_button_label);
					},
					formatter: lang.hitch(this, "_formatValue"),
					sortable: false,
					editable: true
				},
				{
					field: "icon",
					styles: 'align: center; display: table-cell; vertical-align: middle',
					name: " ",
					headerAriaLabel: this.configType == "repository" ? string.substitute(this.messages.repository_type_icon, [
						this.messages.repository
					]) : this.messages.admin_config_type_icon,
					width: has("isWebKit") ? "30px" : "16px",
					formatter: this.configType == "repository" ? lang.hitch(this, "_repositoryIconFormatter") : lang.hitch(this, "_iconFormatter")
				},
				{
					field: "id",
					name: this.messages.admin_to_be_imported,
					navigable: true
				},
				{
					field: "label",
					name: this.messages.admin_on_target_system,
					formatter: lang.hitch(this, "_onTargetSystemFormatter")
				}
			];

			this._skippedGrid = new Grid({
				id: this.id + '_SkippedTabGrid',
				cacheClass: Cache,
				structure: structure,
				store: store,
				textDir: has("text-direction"),
				adminSelected: false,
				modules: [
					modFocus,
					modVScroll,
					modCellWidget,
					modEdit,
//					modRowHeader,
//					modIndirectSelect,
//					modExtendedSelectRow,
					modSingleSort
				]
			});

			this._skippedGrid.connect(this._skippedGrid, "onCellClick", lang.hitch(this, function(evt) {
				this._gridEventHandler(this._skippedGrid, store, evt);
			}));

			this._skippedGrid.connect(this._skippedGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.SPACE)
					this._gridEventHandler(this._skippedGrid, store, evt);
			}));

			this._skippedGrid.model.setStore(store);
			this._skippedGrid.placeAt(this._tabPane);
			domClass.add(this._tabPane.domNode, "gridxWholeRow gridxAlternatingRows");
			this._skippedGrid.startup();
			this._skippedGrid.sort.sort('3', false);

			this.logExit(methodName);
		},

		_initialzieImportedGrid: function(store) {
			var methodName = "_initialzieImportedGrid";
			this.logEntry(methodName);

			var structure = [
				{
					field: "icon",
					styles: 'align: center; display: table-cell; vertical-align: middle',
					name: " ",
					headerAriaLabel: this.configType == "repository" ? string.substitute(this.messages.repository_type_icon, [
						this.messages.repository
					]) : this.messages.admin_config_type_icon,
					width: has("isWebKit") ? "30px" : "16px",
					formatter: this.configType == "repository" ? lang.hitch(this, "_repositoryIconFormatter") : lang.hitch(this, "_iconFormatter")
				},
				{
					field: "id",
					name: this.messages.admin_to_be_imported
				}
			];

			this._importedGrid = new Grid({
				id: this.id + '_ImportedTabGrid',
				cacheClass: Cache,
				structure: structure,
				textDir: has("text-direction"),
				store: store,
				modules: [
					modFocus,
					modVScroll,
					modSingleSort
				]
			});

			this._importedGrid.connect(this._importedGrid, "onCellClick", lang.hitch(this, function(evt) {
				this._gridEventHandler(this._importedGrid, store, evt);
			}));

			this._importedGrid.connect(this._importedGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.SPACE)
					this._gridEventHandler(this._grid, store, evt);
			}));

			this._importedGrid.model.setStore(store);
			this._importedGrid.placeAt(this._tabPane);
			domClass.add(this._tabPane.domNode, "gridxWholeRow gridxAlternatingRows");
			this._importedGrid.startup();
			this._importedGrid.sort.sort('2', false);
			this.logExit(methodName);
		},

//		update: function() {
//			if (this._skippedGrid) {
//				array.forEach(this._skippedGrid.rows(), lang.hitch(this, function(row) {
//					if (row.isSelected()) {
//						var data = this._skippedStore.get(row.id);
//						if (data) {
//							data.overwrite = true;
//						}
//					}
//				}));
//			}
//		},

		_gridEventHandler: function(grid, store, evt) {
			var cell = grid.cell(evt.rowId, evt.columnId);
			if (cell) {
				// var widget = cell.widget();
				var data = store.get(evt.rowId);
				if (data) {
					data.overwrite = !data.overwrite;
					grid.model.clearCache();
					grid.body.refresh();
					this._onChange();
				}
			}
		},

		_onChange: function() {
			if (this._skippedGrid) {
				var enable = true;
				this._skippedGrid.store.query().forEach(function(row) {
					enable &= row.overwrite;
				});

				this._skippedGrid.adminSelected = enable;
				var cb = dom.byId(this.configType + "CB");
				if (enable){
					domClass.add(cb, "dijitCheckBoxChecked");
				}
				else {
					domClass.remove(cb, "dijitCheckBoxChecked");
				}
			}
		},

		/**
		 * Create a store
		 * 
		 * @param items
		 *            An array of json object.
		 * @return a store
		 */
		_createStore: function(configType, items) {
			var methodName = "_createStore";
			this.logEntry(methodName);
			if (configType == "repository") {
				array.forEach(items, function(item) {
					var repo = RepositoryConfig.createRepositoryConfig(item.id);
					repo.setType(item.data.type);
					item.iconClass = repo.getTypeIconClass();
					item.typeString = repo.getTypeString();
				});
			}

			var store;
			if (items) {
				store = new Store({
					data: {
						identifier: "id",
						label: 'label',
						items: items
					}
				});
			}

			this.logExit(methodName);
			return store;
		},

		/**
		 * Plugin Icon formatter
		 * 
		 * @private
		 */
		_iconFormatter: function(data, rowIndex, cell) {
			var IconValue = function(iconClass, hover) {
				this.iconClass = iconClass;
				this.hover = hover;
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" />';
			};
			IconValue.prototype.replace = function() {
				return this;
			};

			var iconClass = (!data.iconClass) ? this._getTypeCss(this.configType) : data.iconClass;
			return new IconValue(iconClass, this._getTypeMessage(this.configType));
		},

		_formatValue: function(data, rowId, rowIndex) {
			return data;
		},

		/**
		 * Repository Icon formatter
		 * 
		 * @private
		 */
		_repositoryIconFormatter: function(data, rowIndex, cell) {
			var RepositoryIconValue = function(iconClass, hover) {
				this.iconClass = iconClass;
				this.hover = hover;
			};
			RepositoryIconValue.prototype = new Object();
			RepositoryIconValue.prototype.toString = function() {
				return '<div style="display:table-cell; vertical-align:middle"> <img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" /></div>';
			};
			RepositoryIconValue.prototype.replace = function() {
				return this;
			};
			return new RepositoryIconValue(data.iconClass, data.typeString);
		},

		_formatValue: function(data, rowId, rowIndex) {
			return data;
		},

		_onTargetSystemFormatter: function(data) {
			var OnTargetSystem = function(data) {
				this.data = data;
			};

			OnTargetSystem.prototype = new Object();
			OnTargetSystem.prototype.toString = function() {
				if (this.data && this.data.objectId) {
					return '<label>' + data.label + '</label>';
				} else {
					return '';
				}
			};

			OnTargetSystem.prototype.replace = function() {
				return this;
			};

			return new OnTargetSystem(data);
		},

		_getTypeMessage: function() {
			switch (this.configType) {
			case "desktop":
				return this.messages.admin_text_desktop;
			case "repository":
				return this.messages.admin_text_repository;
			case "menu":
				return this.messages.admin_text_menu;
			case "plugin":
				return this.messages.admin_text_plugin;
			case "theme":
				return this.messages.admin_text_theme;
			case "mobilefeature":
				return this.messages.admin_text_mobile_feature;
			case "interfaceText":
				return this.messages.admin_test_interface_text;
			case "interfaceTextLocale":
				return this.messages.admin_text_interface_text_locale;
			case "viewerMapping":
				return this.messages.admin_text_viewer_mapping;
			case "iconStatus":
				return this.messages.admin_text_icon_status;
			case "icon":
				return this.messages.admin_text_icon;
			case "filetype":
				return this.messages.admin_text_file_type;
			case "viewer":
				return this.messages.admin_text_viewer;
			case "desktopAccess":
				return this.messages.admin_text_desktop_access;
			case "propmapping":
				return this.messages.admin_text_mapped_properties_for_office;
			case "desktopfeature":
				return this.messages.admin_text_desktop_features;
			default:
				return this.messages.admin_text_unknown;
			}
		},

		_getTypeCss: function() {
			switch (this.configType) {
			case "desktop":
				return "adminIconDesktop";
			case "menu":
				return "adminIconMenu";
			case "plugin":
				return "adminIconPlugin";
			case "theme":
				return "adminIconTheme";
			case "interfaceText":
				return "adminIconInterfaceText";
			case "interfaceTextLocale":
				return "adminIconInterfaceTextLocale";
			case "iconStatus":
				return "adminIconIconStatus";
			case "icon":
				return "adminIconIcon";
			case "iconMapping", "viewerMapping", "viewer":
				return "adminIconMapping";
			default:
				return "adminIconDesktop";
			}
		},

		_toggleCheckbox: function() {
			if (this._skippedStore) {
				this._skippedGrid.adminSelected = !this._skippedGrid.adminSelected;
				
				var cb = dom.byId(this.configType + "CB");
				if (this._skippedGrid.adminSelected){
					domClass.add(cb, "dijitCheckBoxChecked");
				}
				else {
					domClass.remove(cb, "dijitCheckBoxChecked");
				}
				
				this._skippedStore.query().forEach(lang.hitch(this, function(item) {
					item.overwrite = this._skippedGrid.adminSelected;
				}));
				this._skippedGrid.model.clearCache();
				this._skippedGrid.body.refresh();
			}
		},

		/**
		 * Get all overwrited id from store
		 * 
		 * @param store -
		 *            an Memory store object from grid.
		 * @return An array of ID
		 * @private
		 */
		_getIds: function(store) {
			var methodName = "_getIds";
			this.logEntry(methodName);
			var ids = [];
			if (store) {
				store.query().forEach(function(item) {
					if (item.overwrite)
						ids.push(item.id);
				});
			}
			this.logExit(methodName);
			return ids.join(",");
		},

		/**
		 * Resize the dialog
		 */
		resize: function() {
			this.inherited(arguments);
			//this._tabPane.resize();

			var contentBox = domGeometry.getContentBox(this._tabPane.domNode);
			//console.log("content area in grid height: " + contentBox.h + " width: " + contentBox.w);

			var middle = 0;
			if (this._messageLine) {
				middle = domGeometry.getMarginBox(this._messageLine).h;
			}

			var height = (this._messageLine ? ((contentBox.h - middle) / 2) - 5 : contentBox.h - 10);
			height = height > 100 ? height : 100;
			var gridBox;
			if (this._skippedGrid) {
				gridBox = domGeometry.getMarginBox(this._skippedGrid.domNode);
				domGeometry.setMarginBox(this._skippedGrid.domNode, {
					h: height,
					w: contentBox.w
				});
				//console.log("skipped grid height: " + height + " width: " + contentBox.w);
				this._skippedGrid.resize();
			}

			if (this._importedGrid) {
				gridBox = domGeometry.getMarginBox(this._importedGrid.domNode);
				domGeometry.setMarginBox(this._importedGrid.domNode, {
					h: height,
					w: contentBox.w
				});
				//console.log("imported grid height: " + height + " width: " + contentBox.w);
				this._importedGrid.resize();
			}
			this._tabPane.resize();
		}

	});

});

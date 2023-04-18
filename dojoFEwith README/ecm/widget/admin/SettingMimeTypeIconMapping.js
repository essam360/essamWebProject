/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/window",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/keys",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-class",
	"dijit/registry",
	"dojo/on",
	"dojo/_base/sniff",
	"dojo/_base/event",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/model/admin/IconConfig",
	"ecm/model/admin/IdLabelConfig",
	"ecm/model/admin/SettingsData",
	"ecm/model/Action",
	"ecm/widget/admin/ActionMenu",
	"ecm/widget/FilterTextBox",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/admin/IconMappingDialog",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dojo/store/Memory",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"gridx/modules/move/Row",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/SettingMimeTypeIconMapping.html"
], //

function(declare, lang, array, win, aspect, construct, keys, string, style, domClass, registry, on, has, event, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, IconConfig, IdLabelConfig, SettingsData, Action, ActionMenu, FilterTextBox, _MoveUpDownGridxMixin, IconMappingDialog, BorderContainer, ContentPane, Button, MemoryStore, Grid, Cache, Row, Focus, SelectRow, ExtendedSelectRow, ColumnResizer, FilterModule, CellWidget, MoveRow, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.SettingMimeTypeIconMapping
	 * @class Provides a widget that is used to map a list of MIME types to a predefined icon that is provided with the
	 *        web client or to a custom icon.
	 */
	return declare("ecm.widget.admin.SettingMimeTypeIconMapping", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		_MoveUpDownGridxMixin
	], {
		/** @lends ecm.widget.admin.SettingMimeTypeIconMapping.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filter.set("placeholder", this.messages.mime_type_contains_label);
			this._filter.set("aria-label", this.messages.filter + " " + this.messages.mime_type_contains_label);
			this._isLoaded = false;
		},

		setData: function(settingsData) {
			this.settingsData = settingsData;
		},

		// Called when the user hits the Reset button 
		loadData: function() {
			this._isLoaded = true;
			this._initializeGrid();
		},

		destroy: function() {
			if (this._actionMenuCreator) {
				this._actionMenuCreator.destroy();
			}
			this.inherited(arguments);
		},

		_openItem: function(item) {
			var obj = {};
			obj.className = item.className;
			obj.fileName = item.fileName;
			obj.contentTypes = item.contentTypes;
			obj.contentTypeNames = item.contentTypeNames;
			obj.id = item.id;
			obj.order = item.order;
			this._editItemValue = item;
			this._getDialog().show(this.settingsData.defaultContentTypes, this.settingsData.defaultMappingClasses, obj);
		},

		_onNew: function() {
			this._getDialog().show(this.settingsData.defaultContentTypes, this.settingsData.defaultMappingClasses);
		},

		_getSelectedItems: function() {
			var items = [];
			if (this._theGrid && this._theGrid.select) {
				var rowIds = this._theGrid.select.row.getSelected();
				for (var i = 0; i < rowIds.length; i++) {
					var row = this._theGrid.row(rowIds[i]);
					if (row) {
						items.push(row.item());
					}
				}
			}
			return items;
		},

		_onOpen: function() {
			var items = this._getSelectedItems();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new IconMappingDialog();

				this.own(aspect.after(this._dialog, "onAdd", lang.hitch(this, function(saveData) {
					var id = this._theGrid.rowCount() + "_" + new Date().getTime();
					if (!has("dojo-bidi")) {
						this._theGrid.model.store.add({
							"id": id,
							"order": this._getOrder(),
							"contentTypes": saveData.contentTypes,
							"contentTypeNames": saveData.contentTypes.length > 0 ? saveData.contentTypes.join(', ') : "",
							"className": saveData.className,
							"classNameLabel": this._getLabelForClassName(saveData.className),
							"fileName": saveData.fileName && saveData.fileName != "" ? saveData.fileName : ""
						});
					} else {
						var arr = [];
						array.forEach(saveData.contentTypes, lang.hitch(this, function(item) {
							arr.push(this.enforceTextDirWithUcc(null, item));
						}));
						this._theGrid.model.store.add({
							"id": id,
							"order": this._getOrder(),
							"contentTypes": saveData.contentTypes,
							"contentTypeNames": saveData.contentTypes.length > 0 ? arr.join(', ') : "",
							"className": saveData.className,
							"classNameLabel": this._getLabelForClassName(saveData.className),
							"fileName": saveData.fileName && saveData.fileName != "" ? BidiComplex.createDisplayString(saveData.fileName, "URL") : ""
						});
					}

					this._resetFilter();
					this.onMarkDirty();
				}), true));

				this.own(aspect.after(this._dialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.className = saveData.className;
					item.classNameLabel = this._getLabelForClassName(saveData.className);
					item.fileName = saveData.fileName;
					item.contentTypes = saveData.contentTypes;
					item.contentTypeNames = saveData.contentTypes.length > 0 ? saveData.contentTypes.join(', ') : "";
					if (has("dojo-bidi")) {
						var arr = [];
						array.forEach(saveData.contentTypes, lang.hitch(this, function(item) {
							arr.push(this.enforceTextDirWithUcc(null, item));
						}));
						item.contentTypeNames = saveData.contentTypes.length > 0 ? arr.join(', ') : "";
						item.fileName = saveData.fileName ? BidiComplex.createDisplayString(saveData.fileName, "URL") : "";
					}
					this._theGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this.onMarkDirty();
				}), true));
			}
			return this._dialog;
		},

		_getOrder: function() {
			var order = 0;
			for ( var i in this._theGrid.model.store.data) {
				var data = this._theGrid.model.store.data[i];
				if (order < data.order) {
					order = data.order;
				}
			}
			order++;
			return order;
		},

		_getLabelForClassName: function(className) {
			if (className && className != "") {
				if (this.settingsData.defaultMappingClasses) {
					for ( var i in this.settingsData.defaultMappingClasses) {
						if (this.settingsData.defaultMappingClasses[i].id == className) {
							return this.settingsData.defaultMappingClasses[i].getLabel();
						}
					}
				}
				return className;
			} else {
				return "";
			}
		},

		_onMoveUp: function() {
			this._moveUpSelectedRows(this._theGrid);
			this._checkButtons();
			this.onMarkDirty();
		},

		_onMoveDown: function() {
			this._moveDownSelectedRows(this._theGrid);
			this._checkButtons();
			this.onMarkDirty();
		},

		// overridable
		onMarkDirty: function() {
		},

		_initializeGrid: function() {
			this._filter.reset();
			this._prevFilter = "";

			var hasStore = this._theGrid && this._theGrid.model;
			if (hasStore) {
				this._theGrid.select.row.clear();
				this._theGrid.setStore(this._createStore());
			} else {
				this._theGrid = new Grid({
					region: "center",
					cacheClass: Cache,
					textDir: has("text-direction"),
					store: this._createStore(),
					structure: [
						{
							id: "className",
							field: "className",
							name: " ",
							headerAriaLabel: this.messages.mime_type_icon,
							width: has("webkit") ? "30px" : "16px",
							decorator: lang.hitch(this, "_iconFormatter")
						},
						{
							id: "contentTypeNames",
							field: "contentTypeNames",
							name: this.messages.mime_type_header,
							width: "56%"
						},
						{
							id: "classNameLabel",
							field: "classNameLabel",
							name: this.messages.admin_icon_mapping_class_name_heading,
							width: "20%"
						},
						{
							id: "fileName",
							field: "fileName",
							name: this.messages.admin_icon_mapping_file_name_heading,
							width: "20%"
						}
					],
					selectRowTriggerOnCell: true,
					modules: [
						Row,
						FilterModule,
						Focus,
						SelectRow,
						ExtendedSelectRow,
						ColumnResizer,
						CellWidget,
						MoveRow
					]
				});
				domClass.add(this.borderContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");
				this.borderContainer.addChild(this._theGrid);
				this._theGrid.startup();
				this._filterCheckerFunction = lang.hitch(this, "_filterChecker");

				this.own(aspect.after(this._theGrid, "onRowDblClick", lang.hitch(this, function(evt) {
					this._openItem(this._theGrid.row(evt.rowIndex).item(), evt);
				}), true));
				this.own(aspect.after(this._theGrid.select.row, "onSelectionChange", lang.hitch(this, function(evt) {
					this._checkButtons();
				}), true));
				this.own(aspect.after(this._theGrid, "onRowContextMenu", lang.hitch(this, "_doContextMenu"), true));
				this.own(aspect.after(this._theGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
					if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
						event.stop(evt);
						this._theGrid.select.row.selectByIndex([
							0,
							this._theGrid.rowCount() - 1
						]);
						setTimeout(lang.hitch(this, function() {
							this._checkButtons();
						}, 100));

					} else if (evt.keyCode === keys.F10 && evt.shiftKey) {
						this._doContextMenu(evt);
						event.stop(evt);
					}
				}), true));
			}
			this.own(aspect.after(this._theGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._theGrid.vScroller.scrollToRow(this._theGrid.row(id).visualIndex() - 1, true);
				this._checkButtons();
			}), true));
			this.resize();
		},

		_checkButtons: function() {
			var items = this._getSelectedItems();

			this.deleteButton.set("disabled", items.length == 0 || !this._isDeletable(items));
			this.openButton.set("disabled", items.length == 1 ? false : true);
			this.moveUpButton.set("disabled", items.length == 0 || this.isGridFiltered() || !this._hasRowsToMoveUp(this._theGrid));
			this.moveDownButton.set("disabled", items.length == 0 || this.isGridFiltered() || !this._hasRowsToMoveDown(this._theGrid));
		},

		// Called when right click within the grid.  Shows the item(s) content menu.
		_doContextMenu: function(evt) {
			event.stop(evt);
			var byKey = (evt.keyCode === keys.F10);

			// If clicked within the selection, use the selection; otherwise, clear selection & select the row
			var id = this._theGrid.model.indexToId(evt.rowIndex);
			if (!byKey && !this._theGrid.select.row.isSelected(id)) {
				this._theGrid.select.row.clear();
				this._theGrid.select.row.selectById(id);
			}

			var items = this._getSelectedItems();
			if (items.length > 0) {
				if (!this._actionMenuCreator) {
					this._actionMenuCreator = new ActionMenu();
					this.own(aspect.after(this._actionMenuCreator, "onAction", lang.hitch(this, "_onAction"), true));
				}
				var menu = this._actionMenuCreator.createMenu(this.getMenuActions(items), items);

				var coords = null;
				if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
					coords = {
						x: evt.pageX,
						y: evt.pageY
					};
				}
				menu._openMyself({
					target: evt.target,
					coords: coords
				});
			}
		},

		getMenuActions: function(items) {
			var actions = [];
			if (items && items.length == 1) {
				actions.push(new Action({
					id: "admin_action_edit",
					name: this.messages.admin_action_edit
				}));
				actions.push(new Action({
					id: "Separator"
				}));
			}
			actions.push(new Action({
				id: "admin_action_delete",
				name: this.messages.admin_action_delete
			}));
			return actions;
		},

		_onAction: function(items, action) {
			if (action.id == "admin_action_delete") {
				this._onDelete();

			} else if (action.id == "admin_action_edit") {
				for ( var i in items) {
					this._openItem(items[i]);
				}
			}
		},

		_isDeletable: function(modelObjects) {
			return true;
		},

		_resetFilter: function() {
			this._filter.set("value", "");
		},

		_onDelete: function() {
			var items = this._getSelectedItems();
			if (items) {
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					this._theGrid.model.store.remove(item.id);
				}
			}
			this._resetFilter();
			this._checkButtons();
			this.onMarkDirty();
		},

		isGridFiltered: function() {
			return this._filter.get("value") != "";
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "contentTypeNames";
				this._theGrid.select.row.clear();
				this._theGrid.model.filter(this._filterCheckerFunction);
				this._theGrid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item[this._filterField];
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},

		_iconFormatter: function(data, rowId, rowIndex) {
			var IconValue = function(iconClass, iconFile, iconLabel) {
				this.iconClass = iconClass;
				this.iconFile = iconFile;
				this.iconLabel = iconLabel;
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				if (this.iconFile) {
					var iconSrc = this.iconFile; // "/navigator/ecm/widget/resources/images/" + this.iconFile;
					return '<img role="presentation" src="' + iconSrc + '" alt="" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconLabel + '</div>';
				} else {
					return '<img role="presentation" class="' + this.iconClass + '" alt="" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconLabel + '</div>';
				}
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			var row = this._theGrid.row(rowId);
			if (row) {
				var item = row.item();
				if (item) {
					return new IconValue(item.className, item.fileName, item.classNameLabel);
				}
			}
			return new IconValue("", "", "");
		},

		_createStore: function() {
			var items = [];
			if (this.settingsData.iconMappings) {
				for (var i = 0; i < this.settingsData.iconMappings.length; i++) {
					var iconConfig = this.settingsData.iconMappings[i];
					var className = iconConfig.getClassName() ? iconConfig.getClassName() : "";
					if (!has("dojo-bidi")) {
						items.push({
							"id": "" + i,
							"order": i + 1,
							"className": className,
							"classNameLabel": this._getLabelForClassName(className),
							"fileName": iconConfig.getFileName() ? iconConfig.getFileName() : "",
							"contentTypes": iconConfig.getContentTypes(),
							"contentTypeNames": iconConfig.getContentTypes() && iconConfig.getContentTypes().length > 0 ? iconConfig.getContentTypes().join(", ") : ""
						});
					} else {
						var arr = [];
						if (iconConfig.getContentTypes() && iconConfig.getContentTypes().length > 0) {
							array.forEach(iconConfig.getContentTypes(), lang.hitch(this, function(item) {
								arr.push(this.enforceTextDirWithUcc(null, item));
							}));
						}
						items.push({
							"id": "" + i,
							"order": i + 1,
							"className": className,
							"classNameLabel": this._getLabelForClassName(className),
							"fileName": iconConfig.getFileName() ? BidiComplex.createDisplayString(iconConfig.getFileName(), "URL") : "",
							"contentTypes": iconConfig.getContentTypes(),
							"contentTypeNames": iconConfig.getContentTypes() && iconConfig.getContentTypes().length > 0 ? arr.join(", ") : ""
						});
					}
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		getMappingData: function() {
			var mappingDataArray = this.getData(this._theGrid);
			var mappingDataArrayToSave = [];
			for (var i = 0; i < mappingDataArray.length; i++) {
				var mappingData = mappingDataArray[i];

				var contentTypes = "";
				if (mappingData.contentTypes != undefined) {
					if (mappingData.contentTypes instanceof Array) {
						if (mappingData.contentTypes.length > 0) {
							contentTypes = mappingData.contentTypes.join(',');
						}
					} else {
						contentTypes = mappingData.contentTypes;
					}
				}

				var obj = {};
				obj["className"] = mappingData.className;
				obj["fileName"] = !has("dojo-bidi") ? mappingData.fileName : BidiComplex.stripSpecialCharacters(mappingData.fileName || "");
				obj["contentTypes"] = contentTypes;
				mappingDataArrayToSave.push(obj);
			}
			return mappingDataArrayToSave;
		},

		isResetingFields: function() {
			return true;
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			if (this._theGrid && this._theGrid.model && this._theGrid.rowCount() == 0) {
				return false;
			}
			return true;
		},

		resize: function() {
			this.borderContainer.resize();
		}
	});
});

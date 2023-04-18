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
	"dojo/string",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/keys",
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
	"ecm/widget/admin/IconStatusDialog",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"dojo/store/Memory",
	"dojo/text!./templates/SettingStatusIconMapping.html"
], //

function(declare, lang, array, aspect, string, has, construct, domClass, style, keys, event, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, IconConfig, IdLabelConfig, SettingsData, Action, ActionMenu, FilterTextBox, IconStatusDialog, BorderContainer, ContentPane, Button, //
Grid, Cache, Row, SingleSort, Focus, SelectRow, ExtendedSelectRow, ColumnResizer, FilterModule, CellWidget, //
MemoryStore, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.SettingStatusIconMapping
	 * @class Provides a widget that is used to customize the icons that are displayed next to the documents, folders,
	 *        and work items on your repositories.
	 */
	return declare("ecm.widget.admin.SettingStatusIconMapping", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.SettingStatusIconMapping.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);

			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filter.set("placeholder", this.messages.state_contains_label);
			this._filter.set("aria-label", this.messages.filter + " " + this.messages.state_contains_label);
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
			obj.label = item.label;
			obj.repositoryTypes = item.repositoryTypes;
			obj.repositoryTypeNames = item.repositoryTypeNames;
			this._editItemValue = item;
			this._getDialog().show(this.settingsData.defaultStatusClasses, obj);
		},

		_getSelected: function() {
			return this._theGrid && this._theGrid.select ? this._getItems(this._theGrid.select.row.getSelected()) : [];
		},

		_getItems: function(rowIndexs) {
			var items = [];
			for (var i = 0; i < rowIndexs.length; i++) {
				var row = this._theGrid.row(rowIndexs[i]);
				if (row) {
					items.push(row.item());
				}
			}
			return items;
		},

		_onOpen: function() {
			var items = this._getSelected();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new IconStatusDialog();

				this.own(aspect.after(this._dialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.className = saveData.className;
					item.classNameLabel = this._getLabelForClassName(saveData.className);
					item.fileName = saveData.fileName;
					item.repositoryTypes = this._editItemValue.repositoryTypes;
					item.repositoryTypeNames = this._getServerNames(this._editItemValue.repositoryTypes);
					this._theGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this.onMarkDirty();
				}), true));
			}
			return this._dialog;
		},

		_getServerNames: function(repositoryTypes) {
			var array = [];
			if (repositoryTypes && repositoryTypes.length && repositoryTypes.length > 0) {
				for (var i = 0; i < repositoryTypes.length; i++) {
					var repositoryType = repositoryTypes[i];
					array.push(this.settingsData.getServerLabel(repositoryType));
				}
			}
			return array.join(', ');
		},

		_getLabelForClassName: function(className) {
			if (className && className != "") {
				if (this.settingsData.defaultStatusClasses) {
					for ( var i in this.settingsData.defaultStatusClasses) {
						if (this.settingsData.defaultStatusClasses[i].id == className) {
							return this.settingsData.defaultStatusClasses[i].getLabel();
						}
					}
				}
				return className;
			} else {
				return "";
			}
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
				var structure = [
					{
						id: "className",
						name: " ",
						headerAriaLabel: this.messages.admin_icon_state_icon,
						width: has("webkit") ? "30px" : "16px",
						sortable: false,
						headerClasses: "nosort",
						field: "className",
						decorator: lang.hitch(this, "_iconFormatter")
					},
					{
						id: "label",
						field: "label",
						name: this.messages.admin_icon_state,
						width: "29%"
					},
					{
						id: "repositoryTypeNames",
						field: "repositoryTypeNames",
						name: this.messages.repository_type_header,
						width: "28%"
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
				];

				this._theGrid = new Grid({
					region: "center",
					cacheClass: Cache,
					store: this._createStore(),
					structure: structure,
					textDir: has("text-direction"),
					selectRowTriggerOnCell: true,
					modules: [
						Row,
						FilterModule,
						Focus,
						SelectRow,
						ExtendedSelectRow,
						ColumnResizer,
						CellWidget,
						{
							moduleClass: SingleSort,
							initialOrder: [
								{
									colId: "label",
									descending: false
								}
							]
						}
					]
				});
				domClass.add(this.borderContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");
				this.borderContainer.addChild(this._theGrid);
				this._theGrid.startup();
				this.resize();
				this._filterCheckerFunction = lang.hitch(this, "_filterChecker");

				this.own(aspect.after(this._theGrid, "onRowDblClick", lang.hitch(this, function(evt) {
					this._openItem(this._theGrid.row(evt.rowIndex).item(), evt);
				}), true));
				this.own(aspect.after(this._theGrid.select.row, "onSelectionChange", lang.hitch(this, function(selected) {
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
						this._checkButtons();

					} else if (evt.keyCode === keys.F10 && evt.shiftKey) {
						this._doContextMenu(evt);
						event.stop(evt);
					}
				}), true));
			}
			this.resize();
		},

		_checkButtons: function() {
			var items = this._getSelected();
			this.openButton.set("disabled", items.length == 1 ? false : true);
		},

		// Called when right click within the grid.  Shows the item(s) content menu.
		_doContextMenu: function(evt) {
			event.stop(evt);
			if (evt.cellIndex < 0) {
				return; // If right click on empty right area of the grid, ignore it
			}
			var byKey = (evt.keyCode === keys.F10);

			// If clicked within the selection, use the selection; otherwise, clear selection & select the row
			var id = this._theGrid.model.indexToId(evt.rowIndex);
			if (!byKey && !this._theGrid.select.row.isSelected(id)) {
				this._theGrid.select.row.clear();
				this._theGrid.select.row.selectById(id);
			}

			var items = this._getSelected();
			if (items.length > 0) {
				if (!this._actionMenuCreator) {
					this._actionMenuCreator = new ActionMenu();
					this.own(aspect.after(this._actionMenuCreator, "onAction", lang.hitch(this, "_onAction"), true));
				}
				var actions = this.getMenuActions(items);
				if (actions.length > 0) {
					var menu = this._actionMenuCreator.createMenu(actions, items);
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
			}
		},

		getMenuActions: function(items) {
			var actions = [];
			if (items && items.length == 1) {
				actions.push(new Action({
					id: "admin_action_edit",
					name: this.messages.admin_action_edit
				}));
			}
			return actions;
		},

		_onAction: function(items, action) {
			if (action.id == "admin_action_edit") {
				for ( var i in items) {
					this._openItem(items[i]);
				}
			}
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "label";
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

		_iconFormatter: function(data, id, rowVisualIndex) {
			var IconValue = function(iconClass, iconFile, label) {
				this.iconClass = iconClass;
				this.iconFile = iconFile;
				this.iconLabel = label;
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				if (this.iconFile) {
					var iconSrc = this.iconFile;
					return '<img role="presentation" src="' + iconSrc + '" alt="" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconLabel + '</div>';
				} else {
					return '<img role="presentation" class="' + this.iconClass + '" alt="" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconLabel + '</div>';
				}
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			var index = this._theGrid.model.idToIndex(id);
			if (index != undefined && index > -1) {
				var item = this._theGrid.row(index).item();
				return new IconValue(item.className, item.fileName, item.classNameLabel);
			} else {
				return new IconValue("", "", "");
			}
		},

		_createStore: function() {
			var items = [];
			if (this.settingsData.iconStatuses) {
				for (var i = 0; i < this.settingsData.iconStatuses.length; i++) {
					var iconStatusConfig = this.settingsData.iconStatuses[i];
					var className = iconStatusConfig.getClassName() ? iconStatusConfig.getClassName() : "";
					items.push({
						"className": className,
						"classNameLabel": this._getLabelForClassName(className),
						"fileName": iconStatusConfig.getFileName() ? iconStatusConfig.getFileName() : "",
						"id": iconStatusConfig.id,
						"label": iconStatusConfig.getLabel(),
						"repositoryTypes": iconStatusConfig.getServers(),
						"repositoryTypeNames": this._getServerNames(iconStatusConfig.getServers())
					});
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		getIconData: function() {
			var mappingDataArrayToSave = [];
			var items = this._theGrid.model.store.query({});
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				var obj = {};
				obj["className"] = item.className;
				obj["fileName"] = item.fileName;
				obj["id"] = item.id;
				mappingDataArrayToSave.push(obj);
			}
			return mappingDataArrayToSave;
		},

		isResetingFields: function() {
			return true;
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			return true;
		},

		resize: function() {
			this.borderContainer.resize();
		}
	});

});

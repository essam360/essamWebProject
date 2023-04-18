/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/aspect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dojo/data/ItemFileWriteStore",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"gridx/modules/move/Row",
	"ecm/MessagesMixin",
	"ecm/model/_ModelStore",
	"dojo/store/Memory",
	"ecm/model/ResultSet",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/PluginConfig",
	"ecm/widget/admin/TabPlugin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"gridx/core/model/cache/Sync",
	"gridx/Grid",
	"ecm/model/Action",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/NumberTextBox",
	"dijit/form/Button",
	"dojo/text!./templates/TabPlugins.html"
], //

function(declare, lang, array, Deferred, string, aspect, has, construct, style, domClass, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, ItemFileWriteStore, Focus, SelectRow, ExtendedSelectRow, ColumnResizer, FilterModule, CellWidget, MoveRow, MessagesMixin, _ModelStore, MemoryStore, ResultSet, AdminData, PluginConfig, TabPlugin, _NavigatorAdminTabBase, _MoveUpDownGridxMixin, FilterTextBox, ConfirmationDialog, ContentList, RowContextMenuLoadMenu, Cache, Grid, Action, BorderContainer, ContentPane, MessageDialog, NumberTextBox, Button, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabPlugins
	 * @class Provides a tab that shows the available plug-ins. This tab is used to select a plug-in to edit or delete.
	 */
	return declare("ecm.widget.admin.TabPlugins", [
		ecm.widget.admin._NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		_MoveUpDownGridxMixin
	], {
		/** @lends ecm.widget.admin.TabPlugins.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "plugins.plugins"
		},

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._iconClass = "adminIconPlugin";
			this._filter.set("placeholder", this._messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof PluginConfig) {
					if (this.grid) {
						this._updateGrid();
					}
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof PluginConfig) {
					this._updateGridx(changedModel);
				}
			}), true));
		},

		initialize: function() {
			this._loadPlugins(lang.hitch(this, this._initializeGrid));
		},

		_loadPlugins: function(onComplete) {
			ecm.model.admin.adminData.loadPlugins(lang.hitch(this, function(objects) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		_getPlugins: function(callback) {
			callback(ecm.model.admin.adminData.plugins);
		},

		_initializeGrid: function() {
			this._structure = [
				{
					id: "icon",
					name: " ",
					headerAriaLabel: this.messages.status,
					sortable: false,
					headerClasses: "nosort",
					width: has("webkit") ? "30px" : "16px",
					decorator: lang.hitch(this, "_iconFormatter")
				},

				{
					field: "name",
					name: this.messages.name_label
				},
				{
					field: "version",
					name: this.messages.admin_plugins_version_heading
				}

			];

			this._theStore = new ItemFileWriteStore({
				data: this._getStoreData()
			});

			this._createGridWithItems();

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this.resize();
		},

		_updateGridx: function(modelObject) {
			var grid = this.grid;
			this.grid.store.fetchItemByIdentity({
				identity: modelObject.id,
				onItem: function(item) {
					if (item) {
						if (modelObject.getName()) {
							grid.store.setValue(item, "name", modelObject.getName());
						}
						if (modelObject.getEnabled()) {
							grid.store.setValue(item, "enable", modelObject.getEnabled());
						}
						if (modelObject.getVersion()) {
							grid.store.setValue(item, "version", modelObject.getVersion());
						}
						grid.store.setValue(item, "pluginModel", modelObject);
						grid.store.setValue(item, "icon", modelObject.getEnabled());
						grid.store.onSet(item);
					}
				}
			});
		},
		_createGridWithItems: function() {
			this._theGrid = this.grid = this._createGrid();
			this.gridContainer.set("content", this.grid);
			this.grid.startup();
			this.resize();
		},
		_createGrid: function() {
			var grid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: this._theStore,
				structure: this._structure,
				textDir: has("text-direction"),
				selectRowTriggerOnCell: true,
				modules: [
					FilterModule,
					Focus,
					SelectRow,
					ExtendedSelectRow,
					ColumnResizer,
					CellWidget,
					MoveRow
				]
			});
			domClass.add(this.gridContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");

			this.own(aspect.after(grid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this.grid.select.row.selectByIndex([
						0,
						this.grid.rowCount() - 1
					]);
					setTimeout(lang.hitch(this, function() {
						this._checkGridButtons();
					}, 100));
				}
			}), true));
			this.own(aspect.after(grid.select.row, "onSelectionChange", lang.hitch(this, "_onSelectionChanged"), true));
			this.own(aspect.after(grid, "onRowDblClick", lang.hitch(this, function(evt) {

				this._openItem(this.grid.row(evt.rowIndex).item().pluginModel[0]);
			}), true));
			return grid;
		},

		_updateGrid: function() {
			this._getStoreData();
			this._theStore = new ItemFileWriteStore({
				data: this._getStoreData()
			});
			this.grid.model.setStore(this._theStore);
			this._onSelectionChanged();
//			this.grid.body.refresh();
		},

		savePluginOrder: function(cell, value) {
			var pluginid = cell.row.id;
			var plugin = null;
			for (var i = 0; i < ecm.model.admin.adminData.plugins.length; i++) {
				if (ecm.model.admin.adminData.plugins[i].id == pluginid) {
					plugin = ecm.model.admin.adminData.plugins[i];
					plugin.setOrdering(parseInt(value));
					ecm.model.admin.adminData.onChange(plugin);
					break;
				}
			}

			if (plugin) {
				this._savePlugin(plugin);
			}
			return true;
		},
		_getStoreData: function() {
			var data = {
				identifier: "id",
				items: []
			};

			var i = 0;
			var j = -1000;//put the unnumbered plugins in the order they come up, this can only happen the first time plugins are used in R4( an upgrade scenario
			array.forEach(ecm.model.admin.adminData.plugins, function(plugin) {
				data.items.push({
					id: plugin.id,
					order: (plugin.getOrdering() == null || plugin.getOrdering() == undefined || plugin.getOrdering() == -1) ? j++ : plugin.getOrdering(),// change to use getOrdering
					name: plugin.getName(),
					version: plugin.getVersion(),
					ordering: plugin.getOrdering() || 0,
					enabled: plugin.getEnabled(),
					icon: plugin.getEnabled(),
					pluginModel: plugin
				});
			});

			return data;
		},

		_savePlugin: function(/* function(success) */pluginModel, onComplete) {
			if (pluginModel) {
				ecm.model.admin.appCfg.updateApplicationPluginConfig(pluginModel, lang.hitch(this, function(response) {
					ecm.model.admin.adminData.onChange(pluginModel);
					if (this._messageDialog) {
						this._messageDialog.destroy();
					}
					this._messageDialog = new MessageDialog({
						text: ecm.messages.admin_plugin_updated
					});
					this._messageDialog.show();
					if (onComplete) {
						onComplete(response);
					}
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
				});
			}
		},

		/**
		 * Called when this tab is selected.
		 */
		onSelect: function() {
			setTimeout(lang.hitch(this, function() {
				this.resize();
			}), 200);
		},

		_iconFormatter: function(data, id, rowIndex) {
			var iconClass = this.iconClass;
			if (data == false) {
				iconClass = "adminIconPluginDisabled";
			}
			var iconTitle = iconClass == "adminIconPluginDisabled" ? this.messages.admin_plugins_state_disabled : this.messages.admin_plugins_state_enabled;

			var IconValue = function(iconClass, iconClassTitle) {
				this.iconClass = iconClass;
				this.iconClassTitle = iconClassTitle;
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.iconClassTitle + '" alt="' + this.iconClassTitle + '" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconClassTitle + '</div>';
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			return new IconValue(iconClass, iconTitle);
		},

		_onSelectionChanged: function(selectedItems) {

			var items = this._getSelectedPugins();

			// Enable/disable delete button based on number of rows checked & if the items are deletable
			if (items.length > 0) {
				if (this._isDeletable(items)) {
					this._enableDelete();
				}
				if (items.length > 1) {
					this.enableButton.set("disabled", true);
					this.disableButton.set("disabled", true);
				}
				var disableEdit = true;
				for (var i = 0; i < items.length; i++) {
					var plugin = items[i];
					if (plugin.getEnabled()) {
						disableEdit = false;
						break;
					}
				}
				this.openButton.set("disabled", disableEdit);

			} else {
				this._disableDelete();
			}
			//this.openButton.set('disabled', items.length > 0 ? false : true);
			this._updatePluginState(items);
			this._checkGridButtons(items);
		},
		
		/**
		 * @private
		 */
		_updatePluginState: function(items) {
			var plugin = items[0];
			if (items.length == 0 || items.length > 1) {
				this.enableButton.set("disabled", true);
				this.disableButton.set("disabled", true);
			} else if (items.length == 1 && plugin) {
				if (plugin.getEnabled() === false) {
					this.enableButton.set("disabled", false);
					this.disableButton.set("disabled", true);
				} else {
					this.enableButton.set("disabled", true);
					this.disableButton.set("disabled", false);
				}
			}

		},
		/**
		 * Open Plugins.
		 * 
		 * @private
		 */
		_onOpen: function(evt) {
			var items = this._getSelectedPugins();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		_openItem: function(config) {
			if (config.getEnabled()) {
				var tabWidget = new TabPlugin();
				tabWidget.setTitle(config.getName());
				tabWidget.setIconClass(this._iconClass);
				tabWidget.setAdminModel(config);
				tabWidget._setSecurityTopic(this);
				tabWidget.initialize();
				this._openWidgetInTab(tabWidget);
			}

		},

		/**
		 * New Viewer.
		 * 
		 * @private
		 */
		_onNew: function() {
			var tabWidget = new TabPlugin();
			tabWidget.setTitle(ecm.messages.admin_new_plugin);
			tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		_isDeletable: function(modelObjects) {
			return true;
		},

		_canDeleteOrDisablePlugins: function(items, disable) {
			var requiredByPlugins = [], requiredPlugins = [];
			var dependencyExists = false;
			
			var requiredByPluginsObject = {};
			var requiredPluginsObject = {};

			array.forEach(items, function(item) {
				array.forEach(ecm.model.admin.adminData.plugins, function(pluginConfig) {
					if (pluginConfig.id != item.id) {
						var dependencies = pluginConfig.getPluginDependencies();
						for (var i = 0; dependencies && i < dependencies.length; i++) {
							
							if (dependencies[i] == item.id && (!disable || pluginConfig.getEnabled())) {
								dependencyExists = true;
								
								if (!requiredByPluginsObject[pluginConfig.id]){
									requiredByPlugins.push(pluginConfig.getName());
									requiredByPluginsObject[pluginConfig.id] = true;
								}
								
								if (!requiredByPluginsObject[item.id]){
									requiredPlugins.push(item.getName());
									requiredPluginsObject[item.id] = true;
								}	
							}
						}
					}
				});
			});
			return {
				dependencyExists: dependencyExists,
				requiredByPlugins: requiredByPlugins,
				requiredPlugins: requiredPlugins
			};
		},
		
		_canEnablePlugins: function(items){
			var requiredByPlugins = [], requiredPlugins = [];
			var dependencyExists = false;
			
			var requiredByPluginsObject = {};
			var requiredPluginsObject = {};
			
			var plugins = {};
			for (var index in ecm.model.admin.adminData.plugins){
				var pluginConfig = ecm.model.admin.adminData.plugins[index];
				plugins[pluginConfig.id] = pluginConfig;
			}

			for (var itemIndex in items){
				var item = items[itemIndex];
				var requiredPluginIds = item.getPluginDependencies();
				for (var index in requiredPluginIds){
					var requiredPluginId = requiredPluginIds[index];
					var requiredPluginConfig = plugins[requiredPluginId];
					if (!requiredPluginConfig || !requiredPluginConfig.getEnabled()){
						dependencyExists = true;
						
						if (!requiredPluginsObject[requiredPluginId]){
							requiredPluginsObject[requiredPluginId] = true;
							requiredPlugins.push(requiredPluginConfig ? requiredPluginConfig.getName() : requiredPluginId);
						}
						
						if (!requiredByPluginsObject[item.id]){
							requiredByPluginsObject[item.id] = true;
							requiredByPlugins.push(item.getName());
						}
					}
				}
			};

			return {
				enablePlugins: true,
				dependencyExists: dependencyExists,
				requiredByPlugins: requiredByPlugins,
				requiredPlugins: requiredPlugins
			};
		},

		_displayCannotPerformMessage: function(kwArgs) {
			if (this._messageDialog) {
				this._messageDialog.destroy();
			}
			
			var messageText;
			if (kwArgs.enablePlugins){
				promptMessage = this.messages.admin_plugin_cannot_enable;
				messageText = string.substitute(promptMessage, [
						kwArgs.requiredByPlugins.join(","),
						kwArgs.requiredPlugins.join(",")
				])
			}
			else {
				var promptMessage = this.messages.admin_plugin_cannot_disable;
				if (kwArgs.deletePlugin) {
					promptMessage = this.messages.admin_plugin_cannot_delete;
				}
				messageText = string.substitute(promptMessage, [
				       kwArgs.requiredPlugins.join(","),
				       kwArgs.requiredByPlugins.join(",")
				])
			}
	
			this._messageDialog = new MessageDialog({
				text: messageText
			});
			this._messageDialog.show();
		},
		/**
		 * Overwrite the delete action of the base class.
		 */
		_onDelete: function() {
			this._onDeleteItems(this._getSelectedPugins());
		},

		_onDeleteItems: function(items) {
			var self = this;
			var kwArgs = this._canDeleteOrDisablePlugins(items, false);
			if (kwArgs.dependencyExists) {
				kwArgs.deletePlugin = true;
				this._displayCannotPerformMessage(kwArgs);
			} else {
				var confirmDelete = new ConfirmationDialog({
					text: string.substitute(ecm.messages.admin_delete_confirmation_plugins, [
						items.length
					]),
					buttonLabel: ecm.messages.delete_confirmation_button,
					cancelButtonDefault: true,
					onExecute: lang.hitch(self, self._doDelete, items)
				});
				confirmDelete.show();
			}

		},

		_getSelectedPugins: function() {
			var items = [];
			if (this.grid && this.grid.select) {
				var rowIds = this.grid.select.row.getSelected();
				for (var i = 0; i < rowIds.length; i++) {
					var row = this.grid.row(rowIds[i]);
					if (row) {
						items.push(row.item().pluginModel[0]);
					}
				}
			}

			return items;
		},

		_onEnable: function(items) {

			var items = this._getSelectedPugins();
			var kwArgs = this._canEnablePlugins(items);
			if (kwArgs.dependencyExists) {
				this._displayCannotPerformMessage(kwArgs);
			} else {
				var config = items[0];
				var params = {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category,
					fileName: config.getFileName(),
					enable: true,
					className: config.getClassName(),
					plugin: config.id
				};
				var request = ecm.model.Request.invokeService("admin/loadPlugin", null, params, lang.hitch(this, function(response) {
					config.setEnabled(true);
					var self = this;
					this._savePlugin(config, function() {
						self._updatePluginState(items);
					});
				}));
			}
		},
		_onDisable: function(items) {

			var items = this._getSelectedPugins();
			var kwArgs = this._canDeleteOrDisablePlugins(items, true);
			if (kwArgs.dependencyExists) {
				this._displayCannotPerformMessage(kwArgs);
			} else {
				var config = items[0];
				var params = {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category,
					fileName: config.getFileName(),
					enable: false,
					className: config.getClassName(),
					plugin: config.id
				};
				var request = ecm.model.Request.invokeService("admin/loadPlugin", null, params, lang.hitch(this, function(response) {
					config.setEnabled(false);
					var self = this;
					this._savePlugin(config, function() {
						self._updatePluginState(items);
					});

				}));
			}
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function() {

			if (this._theStore) {
				var i = 0;
				this._theStore.fetch({
					sort: [
						{
							attribute: "order"
						}
					],
					onComplete: function(items) {

						array.forEach(items, function(item) {

							var pluginConfig = item.pluginModel[0];
							pluginConfig.setOrdering(i++);

						});

					}
				});

				//save data
				array.forEach(ecm.model.admin.adminData.plugins, function(pluginConfig) {

					ecm.model.admin.appCfg.updateApplicationPluginConfig(pluginConfig, lang.hitch(this, function(response) {
						//ecm.model.admin.adminData.onChange(pluginModel);

					}), {
						securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
					});
				});

				this._markClean();
				this._loadPlugins();
			}

		},

		_doDelete: function(selectedItems) {
			var items = this._getSelectedPugins();

			this._closeTabs(items, lang.hitch(this, function(items) { // Close items that are in open tabs & then delete the items
				ecm.model.admin.appCfg.deleteApplicationPluginsConfig(items, lang.hitch(this, function() {
					this._loadPlugins(); // reloads the list and onChildrenChange called to reload the grid and tree
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
				});
			}));
		},

		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadPlugins(lang.hitch(this, function() {
				this._updateGrid();
				this._markClean();
				this._onSelectionChanged();
				this._disableSave();
				this._enableReset(); //R3 has refresh button always on. 
			}));
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "name";
				this.grid.select.row.clear();
				this.grid.model.filter(this._filterCheckerFunction);
				this.grid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item[this._filterField];
			if (rowValue && lang.isArray(rowValue) && rowValue.length > 0) {
				rowValue = rowValue[0];
			} else {
				rowValue = "";
			}
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},

		resize: function() {
			this.borderContainer.resize();
		},

		/**
		 * Returns the content list grid modules used by this view.
		 * 
		 * @return Array of grid modules.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push({
				moduleClass: RowContextMenuLoadMenu,
				loadMenu: lang.hitch(this, this._loadActionMenu)
			});
			array.push(FilterModule);
			array.push(EditModule);
			return array;
		},

		/**
		 * Load the context menu.
		 * 
		 * @private
		 */
		_loadActionMenu: function(menu, items, grid, cell) {
			var def = new Deferred();
			if (!(items instanceof Array) || items.length < 1) {
				def.resolve(false);
				return def;
			}
			var self = this;
			var selectedItems = this._getSelectedPugins();

			if (grid && cell) {
				var editMenuItem = new MenuItem({
					label: ecm.messages.admin_action_edit,
					onClick: function(e) {
						for ( var i in selectedItems) {
							self._openItem(selectedItems[i]);
						}
					}
				});
				menu.addChild(editMenuItem);
				if (this._isDeletable(selectedItems)) {
					menu.addChild(new MenuSeparator());
					var deleteMenuItem = new MenuItem({
						label: ecm.messages.admin_action_delete,
						onClick: function(e) {
							self._onDeleteItems(selectedItems);
						}
					});
					menu.addChild(deleteMenuItem);
				}
			}
			def.resolve(menu);
			return def;
		},

		_enableSave: function() {
			if (!this._isDisabled()) { // cannot enable save it the data is disabled

				this.saveButton.set('disabled', false);
			}
		},

		_disableSave: function() {
			this.saveButton.set('disabled', true);
		},

		_onMoveUpMapping: function() {
			this._moveUpSelectedRows(this.grid);
			this._checkGridButtons();
			this._markDirty();
		},

		_checkGridButtons: function(items) {
			var selectedItems = this.grid.select.row.getSelected();
			this.moveUpMappingButton.set('disabled', this.isGridFiltered() || selectedItems.length == 0 || !this._hasRowsToMoveUp(this.grid));
			this.moveDownMappingButton.set('disabled', this.isGridFiltered() || selectedItems.length == 0 || !this._hasRowsToMoveDown(this.grid));
		},
		isGridFiltered: function() {
			return this._filter.get("value") != "";
		},

		_onMoveDownMapping: function() {
			this._moveDownSelectedRows(this.grid);
			this._checkGridButtons();
			this._markDirty();
		},

		/**
		 * Returns the content list modules used by this view.
		 * 
		 * @return Array of content list modules.
		 */
		_getContentListModules: function() {
			var array = [];
			return array;
		}
	});

});

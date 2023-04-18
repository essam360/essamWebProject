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
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"ecm/MessagesMixin",
	"ecm/model/_ModelStore",
	"ecm/model/ResultSet",
	"ecm/model/admin/MenuConfig",
	"ecm/model/admin/AdminData",
	"ecm/widget/admin/TabMenu",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/model/Action",
	"gridx/modules/Filter",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dojo/text!./templates/TabMenus.html"
], //

function(declare, lang, array, Deferred, string, aspect, has, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, MessagesMixin, _ModelStore, ResultSet, MenuConfig, AdminData, TabMenu, _NavigatorAdminTabBase, ContentList, RowContextMenuLoadMenu, FilterTextBox, ConfirmationDialog, Action, FilterModule, BorderContainer, ContentPane, Button, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabMenus
	 * @class Provides a tab that lists the available toolbars and context menus. This tab is used to select a toolbar
	 *        or a menu to edit or copy.
	 */
	return declare("ecm.widget.admin.TabMenus", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabMenus.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "menus.menus"
		},

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof MenuConfig) {
					if (this.resultSet) {
						this._contentList.setResultSet(this.resultSet);
					}
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof MenuConfig) {
					this._updateContentList(changedModel);
				}
			}), true));

			this._filter.set("placeholder", this._messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);
		},

		initialize: function() {
			this._loadMenus(lang.hitch(this, this._initializeGrid));
		},

		_loadMenus: function(onComplete) {
			ecm.model.admin.adminData.loadMenus(lang.hitch(this, function(objects) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		_getMenus: function(callback) {
			callback(ecm.model.admin.adminData.menus);
		},

		_initializeGrid: function() {
			this._structure = [
				{
					id: "icon",
					name: " ",
					headerAriaLabel: this.messages.admin_menu_type_icon,
					width: has("webkit") ? "30px" : "16px",
					field: "typeSorter",
					decorator: lang.hitch(this, "_iconFormatter")
				},
				{
					field: "name",
					name: this.messages.name_label
				},
				{
					field: "id",
					name: this.messages.id_heading
				},
				{
					field: "typeLabel",
					name: this.messages.type_heading
				},
				{
					field: "description",
					name: this.messages.description
				}
			];

			this._theStore = new _ModelStore(this, this._getMenus);
			this.resultSet = new ResultSet({
				columns: this._structure,
				sortIndex: "2"
			});
			this.resultSet.getStore = lang.hitch(this, function() {
				return this._theStore;
			});
			this._contentList.setContentListModules(this._getContentListModules());
			this._contentList.setGridExtensionModules(this._getContentListGridModules());
			this._contentList.setResultSet(this.resultSet);

			this.own(aspect.after(this._contentList, "onRowSelectionChange", lang.hitch(this, "_onSelectionChanged"), true));
			this.own(aspect.after(this._contentList, "onRowDblClick", lang.hitch(this, function(item) {
				this._openItem(item);
			}), true));

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this.resize();
		},

		_iconFormatter: function(data, id, rowIndex) {
			var IconValue = function(iconClass, hover) {
				this.iconClass = iconClass;
				this.hover = hover;
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.hover + '</div>';
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			var item = this._contentList.grid.row(id).item();
			var hover = "";
			if (item.isToolbar()) {
				hover = item.getPluginId() ? this.messages.admin_menu_toolbar_custom_hover : this.messages.admin_menu_toolbar_hover;
			} else {
				hover = item.getPluginId() ? this.messages.admin_menu_contextMenu_custom_hover : this.messages.admin_menu_contextMenu_hover;
			}
			return new IconValue(item.getIconClass(), hover);
		},

		_onSelectionChanged: function(items) {
			// Enable/disable delete button based on number of rows checked & if the items are deletable
			if (items.length == 1 && this._isDeletable(items)) {
				this._enableDelete();
			} else {
				this._disableDelete();
			}
			this.openButton.set('disabled', items.length > 0 ? false : true);
			this.copyButton.set('disabled', !this._isCopyable(items));
		},

		/**
		 * Called when this tab is selected.
		 */
		onSelect: function() {
			setTimeout(lang.hitch(this, function() {
				this.resize();
			}), 200);
		},

		/**
		 * Open Menu.
		 * 
		 * @private
		 */
		_onOpen: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		_openItem: function(config) {
			var tabWidget = new TabMenu();
			tabWidget.setTitle(config.getName());
			tabWidget.setIconClass(config.getIconClass());
			tabWidget.setAdminModel(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Copy Menu.
		 * 
		 * @private
		 */
		_onCopy: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._copyItem(items[i]);
			}
		},

		_copyItem: function(config) {
			var tabWidget = new TabMenu();
			tabWidget.setTitle(ecm.messages.admin_new_menu);
			tabWidget.setIconClass(config.getIconClass());
			tabWidget.setAdminModelForCopy(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		_isCopyable: function(modelObjects) {
			return modelObjects && modelObjects.length == 1;
		},

		/**
		 * Overwrite the delete action of the base class.
		 */
		_onDelete: function() {
			this._onDeleteItems(this._contentList.getSelectedItems());
		},

		_onDeleteItems: function(items) {
			var self = this;
			var confirmDelete = new ConfirmationDialog({
				text: string.substitute(ecm.messages.admin_delete_confirmation_menus, [
					items.length
				]),
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete, items)
			});
			confirmDelete.show();
		},

		_doDelete: function(items) {
			this._closeTabs(items, lang.hitch(this, function(items) { // Close items that are in open tabs & then delete the items
				ecm.model.admin.appCfg.deleteApplicationMenusConfig(items, lang.hitch(this, function() {
					this._loadMenus(); // reloads the list and onChildrenChange called to reload the grid and tree
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_MENUS
				});
			}));
		},

		_isDeletable: function(modelObjects) {
			for ( var i in modelObjects) {
				if (modelObjects[i].id.length > "Default".length && modelObjects[i].id.substring(0, "Default".length) == "Default") {
					return false;
				}
			}
			return true;
		},

		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadMenus(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "name";
				this._contentList.grid.select.row.clear();
				this._contentList.grid.model.filter(this._filterCheckerFunction);
				this._contentList.grid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item.getValue(this._filterField);
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
			if (grid && cell) {
				var editMenuItem = new MenuItem({
					label: ecm.messages.admin_action_edit,
					onClick: function(e) {
						for ( var i in items) {
							self._openItem(items[i]);
						}
					}
				});
				menu.addChild(editMenuItem);
				if (this._isCopyable(items)) {
					menu.addChild(new MenuSeparator());
					var copyMenuItem = new MenuItem({
						label: ecm.messages.admin_action_copy,
						onClick: function(e) {
							for ( var i in items) {
								self._copyItem(items[i]);
							}
						}
					});
					menu.addChild(copyMenuItem);
				}
			}
			def.resolve(menu);
			return def;
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

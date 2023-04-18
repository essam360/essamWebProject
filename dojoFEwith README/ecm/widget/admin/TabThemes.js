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
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"gridx/modules/Filter",
	"ecm/MessagesMixin",
	"ecm/model/_ModelStore",
	"ecm/model/ResultSet",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/ThemeConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/admin/TabTheme",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"ecm/model/Action",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dojo/text!./templates/TabThemes.html"
], //

function(declare, lang, array, Deferred, string, aspect, has, construct, style, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, FilterModule, MessagesMixin, _ModelStore, ResultSet, AdminData, ThemeConfig, _NavigatorAdminTabBase, TabTheme, FilterTextBox, ConfirmationDialog, ContentList, RowContextMenuLoadMenu, Action, BorderContainer, ContentPane, Button, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabThemes
	 * @class Provides a tab that shows the available themes. This tab is used to select a plug-in to edit or delete.
	 */
	return declare("ecm.widget.admin.TabThemes", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabThemes.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "theme.theme"
		},

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);

			this._filter.set("placeholder", this.messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);

			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._iconClass = "adminIconTheme";
			this._iconClassTitle = ecm.messages.admin_text_theme;
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof ThemeConfig) {
					if (this.resultSet) {
						this._contentList.setResultSet(this.resultSet);
					}
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof ThemeConfig) {
					this._updateContentList(changedModel);
				}
			}), true));
		},

		initialize: function() {
			this._loadThemes(lang.hitch(this, this._initializeGrid));
		},

		/**
		 * @private
		 */
		_loadThemes: function(onComplete) {
			ecm.model.admin.adminData.loadThemes(lang.hitch(this, function(objects) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		/**
		 * @private
		 */
		_getThemes: function(callback) {
			callback(ecm.model.admin.adminData.themes);
		},

		/**
		 * @private
		 */
		_initializeGrid: function() {
			this._structure = [
				{
					id: "icon",
					name: " ",
					headerAriaLabel: this.messages.admin_theme_icon,
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
					field: "id",
					name: this.messages.admin_idOp
				},
				{
					field: "themeStyle",
					name: this.messages.admin_theme_theme_style_col_header,
					decorator: lang.hitch(this.messages, function(data, rowId, rowIndex) {
						return this[data === "classic" ? "admin_base_ui_style_classic" : "default_label"];
					})
				}
			];

			this._theStore = new _ModelStore(this, this._getThemes);
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

		/**
		 * New Theme.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabTheme();
			tabWidget.setTitle(ecm.messages.admin_new_theme);
			tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
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
		 * @private
		 */
		_onSelectionChanged: function(items) {
			// Enable/disable delete button based on number of rows checked & if the items are deletable
			if (items.length > 0 && this._isDeletable(items)) {
				this._enableDelete();
			} else {
				this._disableDelete();
			}

			this.openButton.set('disabled', items.length > 0 ? false : true);
			this.copyButton.set('disabled', items.length > 0 ? false : true);
		},

		/**
		 * Open Themes.
		 * 
		 * @private
		 */
		_onOpen: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		/**
		 * @private
		 */
		_openItem: function(config) {
			var tabWidget = this._getTabWidget(config);
			if (!tabWidget) {
				tabWidget = new TabTheme();
				tabWidget.setTitle(config.getName());
				tabWidget.setIconClass(this._iconClass);
				tabWidget.setAdminModel(config);
				tabWidget._setSecurityTopic(this);
				tabWidget.initialize();
			}
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * @private
		 */
		_isDeletable: function(modelObjects) {
			if (modelObjects) {
				for ( var i in modelObjects) {
					var themeConfig = modelObjects[i];
					if (themeConfig.id == "azul" || themeConfig.id == "dark" || themeConfig.id == "light" || themeConfig.id == "verde" || themeConfig.id == "midnight")
						return false;
				}
			}
			return true;
		},

		/**
		 * Overwrite the delete action of the base class.
		 * 
		 * @private
		 */
		_onDelete: function() {
			this._onDeleteItems(this._contentList.getSelectedItems());
		},

		/**
		 * Opens a dialog when the user selects the delete action.
		 * 
		 * @param items
		 *            Array of themes to delete.
		 * @private
		 */
		_onDeleteItems: function(items) {
			var self = this;
			var confirmDelete = new ConfirmationDialog({
				text: string.substitute(ecm.messages.admin_delete_confirmation_themes, [
					items.length
				]),
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete, items)
			});
			confirmDelete.show();
		},

		/**
		 * Handles the delete action.
		 * 
		 * @param items
		 *            Array of themes to delete.
		 * @private
		 */
		_doDelete: function(items) {
			this._closeTabs(items, lang.hitch(this, function(items) { // Close items that are in open tabs & then delete the items
				ecm.model.admin.appCfg.deleteApplicationThemesConfig(items, lang.hitch(this, function() {
					this._loadThemes(); // reloads the list and onChildrenChange called to reload the grid and tree
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_THEMES
				});
			}));
		},

		/**
		 * Handles the reset action.
		 * 
		 * @private
		 */
		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadThemes(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));
		},

		/**
		 * @private
		 */
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

		/**
		 * Resizes the border container in this pane.
		 */
		resize: function() {
			this.borderContainer.resize();
		},

		/**
		 * Returns the content list grid modules used by this view.
		 * 
		 * @return Array of grid modules.
		 * @private
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
				if (this._isDeletable(items)) {
					menu.addChild(new MenuSeparator());
					var deleteMenuItem = new MenuItem({
						label: ecm.messages.admin_action_delete,
						onClick: function(e) {
							self._onDeleteItems(items);
						}
					});
					menu.addChild(deleteMenuItem);
				}
			}
			def.resolve(menu);
			return def;
		},

		/**
		 * Returns the content list modules used by this view.
		 * 
		 * @return Array of content list modules.
		 * @private
		 */
		_getContentListModules: function() {
			var array = [];
			return array;
		},

		/**
		 * Handles the copy action.
		 * 
		 * @private
		 */
		_onCopy: function() {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._copyItem(items[i]);
			}
		},

		/**
		 * Copies a given theme.
		 * 
		 * @param themeConfig
		 *            The {@link ecm.model.admin.ThemeConfig} object to copy.
		 * @private
		 */
		_copyItem: function(themeConfig) {
			var tabWidget = new TabTheme();
			tabWidget.setIconClass(this._iconClass);
			tabWidget.setAdminModelForCopy(themeConfig);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		}
	});

});

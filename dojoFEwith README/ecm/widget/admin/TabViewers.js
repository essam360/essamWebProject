/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/aspect",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"idx/layout/BorderContainer",
	"gridx/modules/Filter",
	"ecm/MessagesMixin",
	"ecm/model/ResultSet",
	"ecm/model/_ModelStore",
	"ecm/model/Action",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/ViewerConfig",
	"ecm/widget/admin/TabViewer",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"dojo/text!./templates/TabViewers.html"
],

function(declare, //
lang, //
has, //
Deferred, //
string, //
aspect, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
Button, //
MenuItem, //
MenuSeparator, //
BorderContainer, //
FilterModule, //
MessagesMixin, //
ResultSet, //
_ModelStore, //
Action, //
AdminData, //
ViewerConfig, //
TabViewer, //
_NavigatorAdminTabBase, //
FilterTextBox, //
ConfirmationDialog, //
ContentList, //
RowContextMenuLoadMenu, //
template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabViewers
	 * @class Provides a tab that lists the viewers that are available to open files.
	 */
	return declare("ecm.widget.admin.TabViewers", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabViewers.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_prevFilter: "",
		_SECURITY_TOPIC: {
			category: "viewers.viewers"
		},

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._iconClass = "adminIconMapping";
			this._iconClassTitle = ecm.messages.admin_text_viewer_mapping;
			this._filter.set("placeholder", this._messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof ViewerConfig) {
					if (this.resultSet) {
						this._contentList.setResultSet(this.resultSet);
					}
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof ViewerConfig) {
					this._updateContentList(changedModel);
				}
			}), true));
		},

		initialize: function() {
			this._loadViewers(lang.hitch(this, this._initializeGrid));
		},

		_loadViewers: function(onComplete) {
			ecm.model.admin.adminData.loadViewers(lang.hitch(this, function(objects) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		_getViewers: function(callback) {
			callback(ecm.model.admin.adminData.viewers);
		},

		_initializeGrid: function() {
			this._structure = [
				{
					id: "icon",
					name: " ",
					headerAriaLabel: this.messages.admin_viewer_mapping_icon,
					width: has("webkit") ? "30px" : "16px",
					sortable: false,
					headerClasses: "nosort",
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
					field: "description",
					name: this.messages.description
				}
			];

			this._theStore = new _ModelStore(this, this._getViewers);
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

		_onSelectionChanged: function(items) {
			// Enable/disable delete button based on number of rows checked & if the items are deletable
			if (items.length == 1 && this._isDeletable(items)) {
				this._enableDelete();
			} else {
				this._disableDelete();
			}
			this.openButton.set('disabled', items.length > 0 ? false : true);
			this.copyButton.set('disabled', items.length == 1 ? false : true);
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
		 * New Viewer.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabViewer();
			tabWidget.setTitle(ecm.messages.admin_new_viewer_mapping);
			tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Open Viewer.
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
			var tabWidget = new TabViewer();
			tabWidget.setTitle(config.getName());
			tabWidget.setIconClass(this._iconClass);
			tabWidget.setAdminModel(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Copy Viewer.
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
			var tabWidget = new TabViewer();
			tabWidget.setTitle(ecm.messages.admin_new_viewer_mapping);
			tabWidget.setIconClass(this._iconClass);
			tabWidget.setAdminModelForCopy(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Delete Viewer.
		 * 
		 * @private
		 */
		_isDeletable: function(modelObjects) {
			for ( var i in modelObjects) {
				if (modelObjects[i].id == "default") {
					return false;
				}
			}
			return true;
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
				text: string.substitute(this.messages.admin_delete_confirmation_viewer_mappings, [
					items.length
				]),
				buttonLabel: this.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete, items)
			});
			confirmDelete.show();
		},

		_doDelete: function(items) {
			this._closeTabs(items, lang.hitch(this, function(items) { // Close items that are in open tabs & then delete the items
				ecm.model.admin.appCfg.deleteApplicationViewersConfig(items, lang.hitch(this, function() {
					this._loadViewers(); // reloads the viewers and onChildrenChange called to reload the grid and tree
				}), {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: this._SECURITY_TOPIC.category
				});
			}));
		},

		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadViewers(lang.hitch(this, function() {
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

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
	"dojo/_base/Deferred",
	"dojo/aspect",
	"dojo/string",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/registry",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"ecm/MessagesMixin",
	"ecm/model/Action",
	"ecm/model/ResultSet",
	"ecm/model/_ModelStore",
	"ecm/model/admin/RepositoryConfig",
	"ecm/model/admin/AdminData",
	"ecm/widget/FilterTextBox",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/admin/TabRepository",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"idx/layout/BorderContainer",
	"gridx/modules/Filter",
	"ecm/model/admin/AccessRoleConfig",
	"dojo/text!./templates/TabRepositories.html"
], //

function(declare, lang, has, array, Deferred, aspect, string, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, Menu, MenuItem, MenuSeparator, registry, Button, DropDownButton, MessagesMixin, Action, ResultSet, _ModelStore, RepositoryConfig, AdminData, FilterTextBox, _NavigatorAdminTabBase, TabRepository, ConfirmationDialog, ContentList, RowContextMenuLoadMenu, BorderContainer, FilterModule, AccessRoleConfig, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRepositories
	 * @class Provides a tab that shows the available repositories.
	 */
	return declare("ecm.widget.admin.TabRepositories", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabRepositories.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_prevFilter: "",
		_SECURITY_TOPIC: {
			category: "repos.repos"
		},

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filter.set("placeholder", this._messages.display_name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.display_name_contains_label);
			this.newButton.set("optionsTitle", this._messages.admin_repository_new);
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof RepositoryConfig) {
					if (this.resultSet) {
						this._contentList.setResultSet(this.resultSet);
					}
				}
			}), true));
			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof RepositoryConfig) {
					this._updateContentList(changedModel);
				}
			}), true));
		},

		initialize: function() {
			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(types) {
				this._repositoryTypes = types;
				this._loadRepositoryTypes();
				this._loadRepositories(lang.hitch(this, this._initializeGrid));
			}), {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			});
		},

		_loadRepositoryTypes: function() {
			for ( var i in this._repositoryTypes) {
				var repositoryType = this._repositoryTypes[i];
				var label = repositoryType.getLabelKey() ? this._messages[repositoryType.getLabelKey()] : repositoryType.getLabel();
				var menuItem = new MenuItem({
					label: label,
					tabRepositories: this,
					repositoryType: repositoryType,
					onClick: function() {
						this.tabRepositories._onNew(this.repositoryType.getType());
					}
				});
				this.newMenu.addChild(menuItem);
			}
		},

		_loadRepositories: function(onComplete) {
			// Weblogic does not support cm.  Show only repositories that are supported.
			array.forEach(this.newMenu.getChildren(), lang.hitch(this, function(child) {
				this.newMenu.removeChild(child);
			}));
			for ( var i in this._repositoryTypes) {
				var serverObj = this._repositoryTypes[i];
				var key = serverObj.getLabelKey();
				var displaName = key && this.messages[key] ? this.messages[key] : serverObj.getLabel();
				this.newMenu.addChild(new MenuItem({
					label: displaName,
					type: serverObj.id,
					onClick: lang.hitch(this, function(evt) {
						var menuItem = registry.getEnclosingWidget(evt.target);
						this._onNew(menuItem.type);
					})
				}));
			}

			ecm.model.admin.adminData.loadRepositories(lang.hitch(this, function(reposObjects) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		_getRepositories: function(callback) {
			callback(ecm.model.admin.adminData.repositories);
		},

		_initializeGrid: function() {
			this._structure = [
				{
					id: "statusIcon",
					name: " ",
					headerAriaLabel: this.messages.status,
					sortable: false,
					filterable: false,
					width: "35px",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var htmlStr = "";
						var item = this._contentList.grid.row(rowId).item();
						if (item && item.getType() == "p8" && item.getConnectionsCommunityLibrary && item.getConnectionsCommunityLibrary()) {
							htmlStr += '<img class="ecmConnectionsEnabled" alt="' + this.messages.admin_connections_library_enabled + '" title="' + this.messages.admin_connections_library_enabled + '" src="' + this._blankGif + '"/>&nbsp;';
						}
						if (item && item.isWarning()) {
							htmlStr += '<img src="' + ecm.model.desktop.servicesUrl + "/ecm/widget/resources/images/msgWarning16.png" + '" alt="' + this.messages.admin_repos_warning + '" title="' + this.messages.admin_repos_warning + '" src="dojo/resources/blank.gif"/>';
							if (has("highcontrast")) { // IE11 with JAWS reads this char
								htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.admin_repos_warning + '">' + ecm.messages.warning_char + '</span>';
							}
							htmlStr += '<div class="dijitHidden">' + this.messages.admin_repos_warning + '</div>&nbsp;'; // Read by JAWS
						}
						return htmlStr;
					}),
					styles: "align: center; text-align: center;"
				},
				{
					id: "icon",
					name: " ",
					headerAriaLabel: this.messages.server_type_icon,
					width: has("webkit") ? "30px" : "16px",
					sortable: false,
					decorator: lang.hitch(this, "_iconFormatter")
				},
				{
					field: "name",
					name: this.messages.displayName
				},
				{
					field: "id",
					name: this.messages.id_heading
				},
				{
					field: "typeString",
					name: this.messages.server_type_heading
				},
				{
					field: "serverName",
					name: this.messages.server_name_heading
				}
			];

			this._theStore = new _ModelStore(this, this._getRepositories);
			this.resultSet = new ResultSet({
				columns: this._structure,
				sortIndex: "3"
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
		 * New Repository.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabRepository();
			tabWidget.setTitle(ecm.messages.admin_new_repository);
			tabWidget.setIconClass("adminIconRepository");
			tabWidget.setUserData(userData);
			tabWidget.setAdminModel(null);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Open Repository.
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
			var tabWidget = new TabRepository();
			tabWidget.setTitle(config.getName());
			tabWidget.setIconClass(config.getTypeIconClass());
			tabWidget.setAdminModel(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		_isDeletable: function(modelObjects) {
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
				text: string.substitute(ecm.messages.admin_delete_confirmation_repositories, [
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
				ecm.model.admin.appCfg.deleteApplicationRepositoriesConfig(items, lang.hitch(this, function() {
					this._loadRepositories(); // reloads the list and onChildrenChange called to reload the grid and tree
					// Let listeners know that the repositories list has changed.
					ecm.model.admin.adminData.onChange(this);
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_REPOSITORIES
				});
			}));
		},

		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadRepositories(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "name";
				this._runFilter(this._filterCheckerFunction, this._contentList.grid.model);
			}
		},

		_runFilter: function(checker, model) {
			var d = new Deferred();
			this._contentList.grid.select.row.clear();
			model.filter(checker);
			model.clearCache();
			Deferred.when(this._contentList.grid.body.refresh(), function() {
				d.callback();
			}, function(e) {
				d.errback(e);
			});
			return d;
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
			return new IconValue(item.getTypeIconClass(), item.getTypeString());
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

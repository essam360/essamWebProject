/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/request/iframe",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/on",
	"dojo/dom-geometry",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"gridx/modules/Filter",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/_ModelStore",
	"ecm/model/ResultSet",
	"ecm/model/admin/RedactionReasonConfig",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/model/admin/RepositoryConfig",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/DesktopAdminAccessConfig",
	"ecm/model/Request",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/admin/TabRoleBasedAdminRole",
	"ecm/widget/admin/TabRepositories",
	"ecm/widget/admin/TabDesktop",
	"ecm/widget/admin/ImportSummaryDialog",
	"ecm/widget/admin/ImportConfigurationDialogEx",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dojo/text!./templates/TabRoleBasedAdminRoles.html",
], //

function(declare, lang, iframe, array, Deferred, string, aspect, domClass, domStyle, on, domGeom, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, FilterModule, MessagesMixin, LoggerMixin, _ModelStore, ResultSet, RedactionReasonConfig, AdminRoleConfig, RepositoryConfig, DesktopData, DesktopAdminAccessConfig, Request, _NavigatorAdminTabBase, TabRoleBasedAdminRole, TabRepositories, TabDesktop, ImportSummaryDialog, ImportConfigurationDialog, ConfirmationDialog, MessageDialog, ContentList, RowContextMenuLoadMenu, BorderContainer, ContentPane, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRoleBasedAdminRoles
	 * @class Provides a tab that shows the available admin roles. 
	 */
	return declare("ecm.widget.admin.TabRoleBasedAdminRoles", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabRoleBasedAdminRoles.prototype */

		templateString: template,
		widgetsInTemplate: true,
	
		_SECURITY_TOPIC: {
			category: "rbaRoles.rbaRoles"
		},
		
		GENERAL_CATEGORY: "General",
		LAYOUT_CATEGORY: "Layout",
		APPEARANCE_CATEGORY: "Appearance",
		MENUS_CATEGORY: "Menus",
		MOBILE_CATEGORY: "Mobile",
		RBR_CATEGORY: "RBR",

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);

			this._filter.set("placeholder", this.messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);

			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._iconClass = "adminIconAdminRole";
			this._iconClassTitle = "Administration Roles";
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof AdminRoleConfig) {
					if (this.resultSet) {
						this._contentList.setResultSet(this.resultSet);
					}
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof AdminRoleConfig) {
					this._loadAdminRoles(lang.hitch(this, function(){
						var grid = this._contentList.grid;
						var id = grid.store.getIdentity(changedModel);
						var index = grid.model.idToIndex(id);
						if (index != undefined && index > -1) {
							grid.select.row.selectById(id);
						}
					}));
				}
			}), true));
			
			// Set up category lookup objects.
			this.categories = {};
			this.permissionCategories = {};
			
			this.categories[this.MENUS_CATEGORY] = [AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE, AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE, AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE, 
			                                        AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE],
			this.permissionCategories[AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE] = this.MENUS_CATEGORY;
			this.permissionCategories[AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE] = this.MENUS_CATEGORY;
			this.permissionCategories[AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE] = this.MENUS_CATEGORY;
			this.permissionCategories[AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE] = this.MENUS_CATEGORY;
			
			this.categories[this.GENERAL_CATEGORY] = [AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE, AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE, AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE, 
			                                          AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE, AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE, 
			                                          AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE, AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE, AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE,
			                		                  AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE, AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE, AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE,
			                		                  AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE, AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE];
			this.permissionCategories[AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE] = this.GENERAL_CATEGORY;
			this.permissionCategories[AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE] = this.GENERAL_CATEGORY;
			
			this.categories[this.LAYOUT_CATEGORY] = [AdminRoleConfig.LAYOUT_HOME_PRIVILEGE, AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE,
			               		                  AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE, AdminRoleConfig.LAYOUT_WORK_PRIVILEGE, AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE, 
			               		                  AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE, AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE, 
			               		                  AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR, AdminRoleConfig.LAYOUT_STATUS_BAR, /*AdminRoleConfig.LAYOUT_MANAGE_URL_FEATURES,*/ AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES];
			this.permissionCategories[AdminRoleConfig.LAYOUT_HOME_PRIVILEGE] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_WORK_PRIVILEGE] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE] = this.LAYOUT_CATEGORY;
//			this.permissionCategories[AdminRoleConfig.LAYOUT_MANAGE_URL_FEATURES] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR] = this.LAYOUT_CATEGORY;
			this.permissionCategories[AdminRoleConfig.LAYOUT_STATUS_BAR] = this.LAYOUT_CATEGORY;
			
			this.categories[this.APPEARANCE_CATEGORY] = [AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE, AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE];
			this.permissionCategories[AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE] = this.APPEARANCE_CATEGORY;
			this.permissionCategories[AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE] = this.APPEARANCE_CATEGORY;
			
			this.categories[this.MOBILE_CATEGORY] = [AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE, AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE,
			               		                  AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE, AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE, AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE];
			this.permissionCategories[AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE] = this.MOBILE_CATEGORY;
			this.permissionCategories[AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE] = this.MOBILE_CATEGORY;
			this.permissionCategories[AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE] = this.MOBILE_CATEGORY;

			this.permissionCategories[AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE] = this.MOBILE_CATEGORY;
			this.permissionCategories[AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE] = this.MOBILE_CATEGORY;
			
			this.categories[this.RBR_CATEGORY] = [AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE, AdminRoleConfig.RBR_REASONS_PRIVILEGE];
			this.permissionCategories[AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE] = this.RBR_CATEGORY;
			this.permissionCategories[AdminRoleConfig.RBR_REASONS_PRIVILEGE] = this.RBR_CATEGORY;
		},

		initialize: function() {
			this._initializeGrid();
		},

		/**
		 * @private
		 */
		_loadAdminRoles: function(onComplete) {
			ecm.model.admin.adminData.loadAdminRoles(lang.hitch(this, function(config) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		/**
		 * @private
		 */
		_getAdminRoles: function(callback) {
			callback(ecm.model.admin.adminData.adminRoles);
		},

		/**
		 * @private
		 */
		_initializeGrid: function() {
			
			this._structure = [
				{
					field: "name",
					name: this.messages.name_label
				},
				{
					field: "general",
					name: this.messages.admin_rba_general_priv,
					sortable: false,
					headerClasses: "nosort",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._contentList.grid.row(rowId).item();
						return this._getGraphic(this.GENERAL_CATEGORY, item);
					}),
				},
				{
					field: "layout",
					name:  this.messages.admin_rba_layout_priv,
					sortable: false,
					headerClasses: "nosort",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._contentList.grid.row(rowId).item();
						return this._getGraphic(this.LAYOUT_CATEGORY, item);
					}),
				},
				{
					field: "appearance",
					name: this.messages.admin_rba_appearance_priv,
					sortable: false,
					headerClasses: "nosort",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._contentList.grid.row(rowId).item();
						return this._getGraphic(this.APPEARANCE_CATEGORY, item);
					}),
				},
				{
					field: "menus",
					name: this.messages.admin_rba_menus_priv,
					sortable: false,
					headerClasses: "nosort",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._contentList.grid.row(rowId).item();
						return this._getGraphic(this.MENUS_CATEGORY, item);
					}),
				},
				{
					field: "mobile",
					name: this.messages.admin_rba_mobile_priv,
					sortable: false,
					headerClasses: "nosort",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._contentList.grid.row(rowId).item();
						return this._getGraphic(this.MOBILE_CATEGORY, item);
					}),
				},
				{
					field: "rbr",
					name: this.messages.admin_rba_rbr_priv,
					sortable: false,
					headerClasses: "nosort",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._contentList.grid.row(rowId).item();
						return this._getGraphic(this.RBR_CATEGORY, item);
					}),
				},
			];

			this._theStore = new _ModelStore(this, this._getAdminRoles);
			this._theStore.comparatorMap = {
				"name": this._localeCompare,
			};
			
			this.resultSet = new ResultSet({
				columns: this._structure,
				sortIndex: "1"
			});
			this.resultSet.getStore = lang.hitch(this, function() {
				return this._theStore;
			});
			this._contentList.setContentListModules(this._getContentListModules());
			this._contentList.setGridExtensionModules(this._getContentListGridModules());
			
			this._loadAdminRoles(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));

			this.own(aspect.after(this._contentList, "onRowSelectionChange", lang.hitch(this, "_onSelectionChanged"), true));
			this.own(aspect.after(this._contentList, "onRowDblClick", lang.hitch(this, function(item) {
				this._openItem(item);
			}), true));

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this.resize();
		},
		
		/**
		 * @private
		 */
		_getGraphic: function(category, adminRole){
			
			// Set up a lookup object based on the permission category. Find the correct category array...
			var lookupObject = {};
			var categoryArray  = this.categories[category];
			
			// Build the lookup object...
			for (indx in categoryArray){
				permission = categoryArray[indx];
				lookupObject[permission] = false;
			}

			// Set the boolean to true on the lookup object for each privilege the granted in the role.
			var privileges = adminRole.getPrivileges();
			if (privileges){
				for (jndx in privileges){
					var privilege = privileges[jndx];
					var permissionCategory = this.permissionCategories[privilege];
					if (permissionCategory && permissionCategory == category){
						lookupObject[privilege] = true;
					}
				}
			}
			
			// Iterate through the properties on the lookup object and see if one, some, or none are true. Return the correct
			// graphic.
			var foundTrue = false;
			var foundFalse = false;
			var propertyKeys = Object.keys(lookupObject);
			for (kndx in propertyKeys){
				var key = propertyKeys[kndx];
				value = lookupObject[key]
				if (value == true){
					foundTrue = true;
				}
				else if (value === false){
					foundFalse = true;
				}
				if (foundTrue && foundFalse){
					break;
				}
			}
			
			var className = "";
			altText = "";
			if (foundTrue && !foundFalse){
				className = "ecmAdminRoleCategoryFull";
				altText = this.messages.admin_rba_all_privs;
			}
			else if (foundTrue){
				className = "ecmAdminRoleCategoryPartial";
				altText = this.messages.admin_rba_some_privs;
			}
			else {
				className = "ecmAdminRoleCategoryNone";
				altText = this.messages.admin_rba_no_privs;
			}
			
			return "<img role=\"img\" class=\"" + className +  "\"alt=\"" + altText + "\" title=\"" + altText + "\" src=\"dojo/resources/blank.gif\" align=\"middle\"></img>";
		},

		/**
		 * New Admin Role.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabRoleBasedAdminRole();
			tabWidget.setTitle(this.messages.admin_rba_new_role);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			tabWidget.UUID = "newAdminRole";
			this._openWidgetInTab(tabWidget);
		},
		
		_onExport: function() {
			this._export();
		},
		
		_export: function() {
			var methodName = "_export";
			this.logEntry(methodName);

	
				var params = {
					action: "export",
					id: "navigator",
					application: "navigator",
					configuration: "ApplicationConfig",
					application: "navigator",
					desktop: ecm.model.desktop.id,
					fileName: "adminRoles.properties",
					adminRoles: this._getIds(),
					disposition: "attachment"
				};
				var contentUrl = ecm.model.Request.getServiceRequestUrl("admin/importExport");
				params = ecm.model.Request.setSecurityToken(params);

				var dfd = iframe(contentUrl, {
					method: "POST",
					data: params,
					preventCache: true,
					handleAs: "TEXT"
				});
				// Call this to clear any outstanding download deferred object.
				// Download never trigger any load or error event therefore deferred
				// never completes - it will indefinitely blocking the next iframe.send() request.
				dfd.response.cancel("terminate", false);
				
			
			this.logExit(methodName);
		},	


		_onImport: function(abort) {
			//if (!abort)
				this._getImportDialog().show(null, null, ecm.messages.admin_importconfiguration_admin_role_dialog_label);
		},
		
		_getImportDialog: function() {
			if (!this._importDialog) {
				this._importDialog = new ImportConfigurationDialog();

				on(this._importDialog, "hide", lang.hitch(this, function() {
					this._downloadLogFileCompleted();
				}));

				aspect.after(this._importDialog, "_importCompleted", lang.hitch(this, function(response) {
					var confirmDownload = new ImportSummaryDialog({
						text: response.summary,
						cancelButtonLabel: ecm.messages.close,
						buttonLabel: ecm.messages.admin_download_imported_log,
						cancelButtonDefault: true,
						title: ecm.messages.admin_rba_import_summary,
						onExecute: lang.hitch(this, this._doDownloadReport, response.logFileName, lang.hitch(this, this._downloadLogFileCompleted))
					});
					confirmDownload.show();

				}), true);
			}
			return this._importDialog;
		},	
		
		_downloadLogFileCompleted: function() {
			if (this._importDialog) {
				this._importDialog.destroy();
				this._importDialog = null;
			}
				this._onReset();
		},

		_doDownloadReport: function(fileName, onComplete) {
			var params = {
				action: "downloadReport",
				id: "navigator",
				application: "navigator",
				desktop: ecm.model.desktop.id,
				configuration: "ApplicationConfig",
				application: "navigator",
				fileName: fileName,
				disposition: "attachment"
			//disposition: has("ie") ? "attachment" : "inline"
			};
			var contentUrl = Request.getServiceRequestUrl("admin/importExport");
			params = Request.setSecurityToken(params);

			var dfd = iframe(contentUrl, {
				method: "POST",
				data: params,
				preventCache: true,
				handleAs: "TEXT"
			});
			// Call this to clear any outstanding download deferred object.
			// Download never trigger any load or error event therefore deferred
			// never completes - it will indefinitely blocking the next iframe.send() request.
			dfd.response ? dfd.response.cancel("terminate", false) : dfd.cancel("terminate", false);
			if (onComplete)
				onComplete();
		},
		
		_getIds: function() {
			var methodName = "_getIds";
			this.logEntry(methodName);
			var ids = [];
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				ids.push(items[i].id);
			}
			this.logExit(methodName);
			return ids.join(",");
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
			this.openButton.set('disabled', items.length > 0 ? false : true);
			this.copyButton.set('disabled', items.length > 0 ? false : true);
			this.exportButton.set('disabled', (items.length > 0) ? false : true);
			
			if (items.length > 0){
				domClass.remove(this._detailsArea.domNode, "dijitHidden");
				this._description.innerHTML = string.substitute(this.messages.admin_rba_description, [items[0]._attributes.description]);
				this._desktopLabel.innerHTML = string.substitute(this.messages.admin_rba_desktops, [items[0]._attributes.name]);
				
				this._loadDesktops(lang.hitch(this, function(){
					this._initializeDesktopGrid(items);
					this._enableDelete();
				}));
			}
			else {
				domClass.add(this._detailsArea.domNode, "dijitHidden");
				this._disableDelete();
			}
		},
		
		/**
		 * @private
		 */
		_loadDesktops: function(callback) {
			ecm.model.admin.adminData.loadDesktops(lang.hitch(this, function(desktops) {
				if (callback) {
					callback();
				}
			}));
		},
		
		/**
		 * @private
		 */
		_initializeDesktopGrid: function(items) {
			
			// Get the desktops for the selected role.
			var desktopsForRole = []
			for (i in ecm.model.admin.adminData.desktops){
				var desktop = ecm.model.admin.adminData.desktops[i];
				if (desktop.getAdminRoleId() == items[0].id){
					desktopsForRole.push(desktop);
				}
			}
			
			this._getDesktopAdmins(desktopsForRole, lang.hitch(this, function(desktopAdmins){
				this.desktopAdmins = desktopAdmins;
				this._desktopContentList.emptyMessage = string.substitute(this.messages.admin_rba_not_used, [items[0]._attributes.name]);
				this._desktopStructure = [
				 {
				 	field: "name",
				 	name: this.messages.name_label,
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						return "<a href='#'>" +  data  +"</a>";
					})
				},
				{
					field: "description",
					name: this.messages.description,
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var item = this._desktopContentList.grid.row(rowId).item();
							return item._attributes.description;
						}
					),
				},
				 {
				 	field: "membership",
					sortable: false,
					headerClasses: "nosort",
				 	name: this.messages.admin_rba_membership,
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var desktopAdmins = this.desktopAdmins[rowId];
						var membership = "";
						if (desktopAdmins){
							for (var index in desktopAdmins){
								var member = desktopAdmins[index];
								membership +="<div";
								if (!member.allowed){
									membership += " class='ecmRoleDenied'"
								}
								membership += ">";
								membership += member.name;
								membership += "</div>";
							}
						}
						return membership;
					}),
				},];
				
				this._theDesktopStore = new _ModelStore(this, function(callback){
					callback(desktopsForRole);
				});

				this.desktopResultSet = new ResultSet({
					columns: this._desktopStructure,
					sortIndex: "1"
				});
				this.desktopResultSet.getStore = lang.hitch(this, function() {
					return this._theDesktopStore;
				});
				this._desktopContentList.setContentListModules(this._getContentListModules());
				this._desktopContentList.setResultSet(this.desktopResultSet);
				this.own(aspect.after(this._desktopContentList.grid, "onCellClick", lang.hitch(this, function(evt) {
					if (evt.columnId == "1"){
						var item = this._desktopContentList.grid.row(evt.rowId).item();
						this._openDesktop(item);
					}
				}), true));
			}));
		},
		
		_getDesktopAdmins: function(desktops, callback){
			var desktopIds = [];
			
			for (index in desktops){
				var desktop = desktops[index];
				desktopIds.push(desktop.id);
			}
			if (desktopIds.length > 0){
				var params = {
						action: "getDesktopsAdminAccess",
						id: desktopIds,
				};
				var self = this;
				var request = ecm.model.Request.invokeService("getDesktopsAdminAccess", null, params, function(response) { // onFinished
					
					function compare(a,b) {
						if (a.name < b.name){
						    return -1;
						}
						if (a.name > b.name){
							return 1;
						}
						return 0;
					};
					
					var desktopAdmins = {};
					for (var i = 0; i < response.desktopAdmins.length; i++){
						var desktopAdminData = response.desktopAdmins[i];
						var desktopAdminMembers = [];
						desktopAdmins[desktopAdminData.id] = desktopAdminMembers;
						
						if (desktopAdminData.groups) {
							for (var j = 0; j < desktopAdminData.groups.length; j++) {
								desktopAdminMembers.push({
									"name": desktopAdminData.groups[j],
									"allowed": true
								});
							}
						}
		
						if (desktopAdminData.users) {
							for (var j = 0; j < desktopAdminData.users.length; j++) {
								desktopAdminMembers.push({
									"name": desktopAdminData.users[j],
									"allowed": true
								});
							}
						}
		
						if (desktopAdminData.denyUsers) {
							for (var j = 0; j < desktopAdminData.denyUsers.length; j++) {
								desktopAdminMembers.push({
									"name": desktopAdminData.denyUsers[j],
									"allowed": false
								});
							}
						}
						desktopAdminMembers.sort(compare);
					}
					callback(desktopAdmins);
				}, false, false);
			}
			else {
				callback({});
			}
		},
		
		/**
		 * @private
		 */
		_openDesktop: function(desktopConfig){
			var tabWidget = this._getTabWidget(desktopConfig);
			if (!tabWidget) {
				tabWidget = new TabDesktop();
				tabWidget.setTitle(desktopConfig.getName());
				tabWidget.setIconClass(this._iconClass);
				tabWidget.setAdminModel(desktopConfig);
				tabWidget._setSecurityTopic(this);
				tabWidget.initialize();
			}
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Open admin role
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
			var tabWidget = new TabRoleBasedAdminRole();
			tabWidget.setTitle(config.getName());
			tabWidget.setAdminModel(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
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
			
			// Desktops should be loaded when a role is selected.
			var usedByDesktop = false;
			for (i in items){
				var item = items[i];
				for (j in ecm.model.admin.adminData.desktops){
					var desktop = ecm.model.admin.adminData.desktops[j];
					if (desktop.getAdminRoleId() == item.id){
						var message;
						if (items.length > 1){
							message = ecm.messages.admin_rba_delete_multi_role_desktop;
						}
						else {
							message = string.substitute(this.messages.admin_rba_delete_single_role_desktop, [desktop._attributes.name]);
						}
						var dialog = new MessageDialog({
							text: message
						});
						dialog.show();
						usedByDesktop = true;
						break;
					}
				}
				if (usedByDesktop){
					break
				}
			}
			
			if (!usedByDesktop){
				var self = this;
				var confirmText = items.length > 1 ? ecm.messages.admin_rba_confirm_delete_multiple : ecm.messages.admin_rba_confirm_delete_single;
				var confirmDelete = new ConfirmationDialog({
					text: confirmText,
					buttonLabel: ecm.messages.delete_confirmation_button,
					cancelButtonDefault: true,
					onExecute: lang.hitch(self, self._doDelete, items)
				});
				confirmDelete.show();
			}
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
				ecm.model.admin.appCfg.deleteApplicationAdminRoleConfig(items, lang.hitch(this, function() {
					this._loadAdminRoles(); // reloads the list and onChildrenChange called to reload the grid and tree
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_ADMIN_ROLES
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
			this._loadAdminRoles(lang.hitch(this, function() {
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
			this._buttonBarBorderContainer.resize();
			
			var buttonBarContextBox = domGeom.getContentBox(this._buttonBarBorderContainer.domNode);
			if (buttonBarContextBox.h > 0){
				var instructionsMarginBox = domGeom.getMarginBox(this.instructions);
				var buttonsMarginBox = domGeom.getMarginBox(this.buttons);
				domStyle.set(this._buttonBarBorderContainer.domNode, "height", instructionsMarginBox.h + buttonsMarginBox.h + 10 + "px");
			}
			
			var thisContentBox = domGeom.getContentBox(this.domNode);
			var buttonBarHeight = this._buttonBarBorderContainer.domNode.offsetHeight;
			var availableHeight = thisContentBox.h - buttonBarHeight;
			domStyle.set(this._listContainer, "height", availableHeight + "px");

			this._contentList.resize();
			this._detailsArea.resize();
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
				menu.addChild(new MenuSeparator());
				var deleteMenuItem = new MenuItem({
					label: ecm.messages.admin_action_delete,
					onClick: function(e) {
						self._onDeleteItems(items);
					}
				});
				menu.addChild(deleteMenuItem);

				menu.addChild(new MenuSeparator());
				var copyMenuItem = new MenuItem({
					label: ecm.messages.admin_action_copy,
					onClick: function(e) {
						self._onCopy(items);
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
		 * Copies a given redaction reason.
		 * 
		 * @param redactionReasonConfig
		 *            The {@link ecm.model.admin.RedactionReasonConfig} object to copy.
		 * @private
		 */
		_copyItem: function(adminRoleConfig) {
			var tabWidget = new TabRoleBasedAdminRole();
			tabWidget.setAdminModelForCopy(adminRoleConfig);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		}
	});

});

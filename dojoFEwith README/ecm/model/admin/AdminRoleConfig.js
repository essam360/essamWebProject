/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/json",
	"./_ConfigurationObject",
	"../Action"
], function(declare, lang, array, dojojson, _ConfigurationObject, Action) {

	/**
	 * @name ecm.model.admin.AdminRoleConfig
	 * @class Represents the configuration information for an admin role. The information includes;

	 * @augments ecm.model.admin._ConfigurationObject
	 * 
	 * @since 3.0.2
	 */
	
	var AdminRoleConfig = declare("ecm.model.admin.AdminRoleConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.AdminRoleConfig.prototype */

		NAME: "name",
		DESCRIPTION: "description",
		PRIVILEGES: "privileges",
		

		constructor: function(id, name) {
			this.logDebug("AdminRoleConfig", "constructor: id: " + id + ", name: " + name);
			if (!name){
				this.name = "AdminRoleConfig";
			}
		},

		getValue: function(att) {
			if (att == "typeSorter") {
			} else {
				return this.inherited(arguments);
			}
		},


		getDescription: function() {
			return this.getValue(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValue(this.DESCRIPTION, description);
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},
		
		getPrivileges: function(){
			if (!this.privArray){
				this.privArray = [];
				var privileges = this.getValue(this.PRIVILEGES);
				if (privileges && Array.isArray(privileges)){
					this.privArray = privileges;
				}
				else if (privileges){
					this.privArray = privileges.split(",");
				}
				else {
					this.privArray = [];
				}
			}
			return this.privArray;
		},
		
		setPrivileges: function(privileges){
			this.setValue(this.PRIVILEGES, privileges);
		},
		
		hasPrivilege: function(privilegeName){
			var privileges = this.getPrivileges();
			if (privileges.indexOf(privilegeName) > -1){
				return true;
			}
			else {
				return false;
			}
		},


		/**
		 * Copies values from an existing admin role.
		 */
		copyAdminRole: function(adminRole) {
			this.id = Math.random();
			this.setDescription(lang.clone(adminRole.getDescription()));
			this.setPrivileges(lang.clone(adminRole.getPrivileges()));
		}


	});

	/**
	 * Static function that constructs an admin role config object.
	 * 
	 * @param id
	 *            Admin Role identifier.
	 * @memberof ecm.model.admin.AdminRoleConfig
	 */
	AdminRoleConfig.createAdminRoleConfig = function(id) {
		ecm.logger.logDebug("ecm.model.admin.createAdminRoleConfig", "id: " + id);
		return new AdminRoleConfig(id, "AdminRoleConfig");
	};
	
	// These constants should be kept in sync the corresponding data in AdminRoleConfig.java
	AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE = "menusToolbars";
	AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE = "menusContextMenus"; 
	AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE = "menusOfficeCommands"; 
	AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE = "menusOfficeMenus";		
	AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE = "generalViewerMap"; 
	AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE = "generalMergeAndSplit"; 
	AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE = "generalSyncServices"; 
	AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE = "generalEditServices";		
	AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE = "generalAdditionalSettings"; 
	AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE = "generalAddDocumentDialog";
	AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE = "generalDefaultRedaction"; 
	AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE = "generalTimeStamp"; 
	AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE = "generalTabLabelConfig"; 
	AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE = "generalOfficeGeneralConfig"; 
	AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE = "generalAddOption"; 		
	AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE = "generalOutlook";
	AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE = "generalAddUsersGroups";
	AdminRoleConfig.LAYOUT_HOME_PRIVILEGE = "layoutHome"; 
	AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE = "layoutBrowse"; 
	AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE = "layoutSearch";	
	AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE = "layoutTeamspaces";
	AdminRoleConfig.LAYOUT_WORK_PRIVILEGE = "layoutWork"; 
	AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE = "layoutETMgr"; 
	AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE = "layoutAsncTasks"; 		
	AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES = "layoutManagePluginFeatures";
	AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR = "layoutGlobalToolbar";
	AdminRoleConfig.LAYOUT_STATUS_BAR = "layoutStatusBar";
//	AdminRoleConfig.LAYOUT_MANAGE_URL_FEATURES = "layoutManageUrlFeatures";
	AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE = "appearanceAppName"; 
	AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE = "appearanceTheme"; 
	AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE = "mobileAddPhotos"; 
	AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE = "mobileAddDocuments"; 		
	AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE = "mobileOpenDocuments";				 
	AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE = "mobileMainColor"; 
	AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE = "mobileSecColor"; 
	AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE = "rbrPoliciesRoles";
	AdminRoleConfig.RBR_REASONS_PRIVILEGE = "rbrReasons";
	
	AdminRoleConfig.validPrivileges = [AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE, AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE, AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE, AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE,
	                  AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE, AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE, AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE, AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE,
	                  AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE, AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE, AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE, AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE,
	                  AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE, AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE, AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE,
	                  AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE, AdminRoleConfig.LAYOUT_HOME_PRIVILEGE, AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE,
	                  AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE, AdminRoleConfig.LAYOUT_WORK_PRIVILEGE, AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE, AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE, AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE,
	                  AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE, AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE, AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE, AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE,
	                  AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE, AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE, AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE,
	                  AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE, AdminRoleConfig.RBR_REASONS_PRIVILEGE, AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE, 
	                  /*AdminRoleConfig.LAYOUT_MANAGE_URL_FEATURES,*/ AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES, AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR, AdminRoleConfig.LAYOUT_STATUS_BAR];
	
	return AdminRoleConfig;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ 
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojox/uuid/Uuid",
	"dojox/uuid/generateRandomUuid",	
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"idx/form/TriStateCheckBox",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/admin/RedactionReasonConfig",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/TabRoleBasedAdminRole.html"
], function(declare, lang, string, domConstruct, dojoArray, has, aspect, Uuid, 	generateRandomUuid,  _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, BorderContainer, TriStateCheckbox, //
MessagesMixin, LoggerMixin, RedactionReasonConfig, AdminRoleConfig, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRoleBasedAdminRol
	 * @class Provides a tab that is used to add or edit an admin role.
	 */
	return declare("ecm.widget.admin.TabRoleBasedAdminRole", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabRoleBasedAdminRole.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.resetButton.set("title", this.messages.reset_hover);
			if (has("dojo-bidi")) {
				this.set("textDir", has("text-direction"));
			}

		},

		destroy: function() {
			this.inherited(arguments);
		},

		/**
		 * @private
		 */
		_onReset: function(){	
			this.inherited(arguments);
			for (index in this.checkboxes){
				var checkboxData = this.checkboxes[index];
				checkboxData.checkbox.set("checked", false);
			}		
			this._checkPrivilegeBoxes();
			setTimeout(lang.hitch(this, function(){
				this._markClean();
			}), 300);

		},		
		
		/**
		 * @private
		 */
		_checkPrivilegeBoxes: function(){
			if (this._myAdminModel){
				var privileges = this._myAdminModel.getPrivileges();
				for (privIdx in privileges){
					var privilege = privileges[privIdx];
					var checkboxData = this.privilegeData[privilege];
					if (checkboxData){
						checkboxData.checkbox.setChecked(true);
						this._checkParents(checkboxData.parentCheckbox);
					}
				}
			}
		},
		
		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this._initialized = false;
			this._disableSave();
			this._disableReset();
			var name = this._myAdminModel ? this._myAdminModel.getName() : this.messages.admin_rba_new_role;

			if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				this._myAdminModel = new AdminRoleConfig("", "");
				this._myAdminModel.copyAdminRole(this._myAdminModelForCopy);
				var idVal =  new Uuid(generateRandomUuid()).toString().replace(/-/g, '');; 
				this._myAdminModel.setValue("id", idVal);				
				this.action = "copy";
				name = this.messages.admin_rba_new_role;
				this._myAdminModelForCopy = null;
			} else if (this._myAdminModel && this._myAdminModel.id) {
				this.id = this._myAdminModel.id;
				this.action = "edit";
			} else {
				this.action = "new";
			}

			this._updateName(name);
			this.setTitle(name);
			this.setInstructions(this.getInstructions());
			
			this._setupEvents();
			
			this._loadData();
			this._checkSave();

			setTimeout(lang.hitch(this, function() {
				this._initialized = true;
			}), 300);
		},
		
		_setupEvents: function(){
			this.checkboxes = {};
			this.privilegeData = {};
			
			// Build a data structure for the checkbox relationships.
			var generalCheckboxData = {};
			generalCheckboxData["checkbox"] = this.generalCheckbox;
			generalCheckboxData["childCheckboxes"] = [];
			generalCheckboxData.childCheckboxes.push(this.desktopConfigurationCheckbox, this.officeConfig, this.desktopAuthenticationCheckbox);
			this.checkboxes[this.generalCheckbox.id] = generalCheckboxData;
			
			var desktopAuthenticationCheckboxData = {};
			desktopAuthenticationCheckboxData["checkbox"] = this.desktopAuthenticationCheckbox;
			desktopAuthenticationCheckboxData["childCheckboxes"] = [];
			desktopAuthenticationCheckboxData.childCheckboxes.push(this.addUsersGroupsCheckbox);
			desktopAuthenticationCheckboxData.parentCheckbox = this.generalCheckbox;
			this.checkboxes[this.desktopAuthenticationCheckbox.id] = desktopAuthenticationCheckboxData;
			
			var addUsersGroupsData = {};
			addUsersGroupsData.checkbox = this.addUsersGroupsCheckbox;
			addUsersGroupsData.parentCheckbox = this.desktopAuthenticationCheckbox;
			addUsersGroupsData.privilege = AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE;
			this.checkboxes[this.addUsersGroupsCheckbox.id] = addUsersGroupsData;
			this.privilegeData[AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE] = addUsersGroupsData;
			
			var desktopConfigurationCheckboxData = {};
			desktopConfigurationCheckboxData["checkbox"] = this.desktopConfigurationCheckbox;
			desktopConfigurationCheckboxData["childCheckboxes"] = [];
			desktopConfigurationCheckboxData.childCheckboxes.push(this.viewerMapCheckbox, this.mergeAndSplitCheckbox, this.syncServicesCheckbox,
					this.editServicesCheckbox, this.additionalSettings, this.addDocumentDialog, this.defaultRedaction, this.timeStamp);
			desktopConfigurationCheckboxData.parentCheckbox = this.generalCheckbox;
			this.checkboxes[this.desktopConfigurationCheckbox.id] = desktopConfigurationCheckboxData;
			
			var viewerMapData = {};
			viewerMapData.checkbox = this.viewerMapCheckbox;
			viewerMapData.parentCheckbox = this.desktopConfigurationCheckbox;
			viewerMapData.privilege = AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE;
			this.checkboxes[this.viewerMapCheckbox.id] = viewerMapData;
			this.privilegeData[AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE] = viewerMapData;
			
			var mergeSplitData = {};
			mergeSplitData.checkbox = this.mergeAndSplitCheckbox;
			mergeSplitData.parentCheckbox = this.desktopConfigurationCheckbox;
			mergeSplitData.privilege = AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE;
			this.checkboxes[this.mergeAndSplitCheckbox.id] = mergeSplitData;
			this.privilegeData[AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE] = mergeSplitData;
			
			var syncServicesData = {};
			syncServicesData.checkbox = this.syncServicesCheckbox;
			syncServicesData.parentCheckbox = this.desktopConfigurationCheckbox;
			syncServicesData.privilege = AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE;
			this.checkboxes[this.syncServicesCheckbox.id] = syncServicesData;
			this.privilegeData[AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE] = syncServicesData;
			
			var editServicesData = {};
			editServicesData.checkbox = this.editServicesCheckbox;
			editServicesData.parentCheckbox = this.desktopConfigurationCheckbox;
			editServicesData.privilege = AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE;
			this.checkboxes[this.editServicesCheckbox.id] = editServicesData;
			this.privilegeData[AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE] = editServicesData;
			
			var additionalSettingsData = {};
			additionalSettingsData.checkbox = this.additionalSettings;
			additionalSettingsData.parentCheckbox = this.desktopConfigurationCheckbox;
			additionalSettingsData.privilege = AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE;
			this.checkboxes[this.additionalSettings.id] = additionalSettingsData;
			this.privilegeData[AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE] = additionalSettingsData;
			
			var addDocumentDialogData = {};
			addDocumentDialogData.checkbox = this.addDocumentDialog;
			addDocumentDialogData.parentCheckbox = this.desktopConfigurationCheckbox;
			addDocumentDialogData.privilege = AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE;
			this.checkboxes[this.addDocumentDialog.id] = addDocumentDialogData;
			this.privilegeData[AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE] = addDocumentDialogData;
			
			var defaultRedactionData = {};
			defaultRedactionData.checkbox = this.defaultRedaction;
			defaultRedactionData.parentCheckbox = this.desktopConfigurationCheckbox;
			defaultRedactionData.privilege = AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE;
			this.checkboxes[this.defaultRedaction.id] = defaultRedactionData;
			this.privilegeData[AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE] = defaultRedactionData;
			
			var timeStampData = {};
			timeStampData.checkbox = this.timeStamp;
			timeStampData.parentCheckbox = this.desktopConfigurationCheckbox;
			timeStampData.privilege = AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE;
			this.checkboxes[this.timeStamp.id] = timeStampData;
			this.privilegeData[AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE] = timeStampData;
			
			var officeConfigData = {};
			officeConfigData.checkbox = this.officeConfig;
			officeConfigData.childCheckboxes = [];
			officeConfigData.childCheckboxes.push(this.tabLabelConfig, this.generalConfigCheckbox, this.addOptionCheckbox, this.outlookCheckbox);
			officeConfigData.parentCheckbox = this.generalCheckbox;
			this.checkboxes[this.officeConfig.id] = officeConfigData;
			
			var tabLabelsData = {};
			tabLabelsData.checkbox = this.tabLabelConfig;
			tabLabelsData.parentCheckbox = this.officeConfig;
			tabLabelsData.privilege = AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE;
			this.checkboxes[this.tabLabelConfig.id] = tabLabelsData;
			this.privilegeData[AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE] = tabLabelsData;
			
			var generalConfigData = {};
			generalConfigData.checkbox = this.generalConfigCheckbox;
			generalConfigData.parentCheckbox = this.officeConfig;
			generalConfigData.privilege = AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE;
			this.checkboxes[this.generalConfigCheckbox.id] = generalConfigData;
			this.privilegeData[AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE] = generalConfigData;
			
			var addOptionData = {};
			addOptionData.checkbox = this.addOptionCheckbox;
			addOptionData.parentCheckbox = this.officeConfig;
			addOptionData.privilege = AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE;
			this.checkboxes[this.addOptionCheckbox.id] = addOptionData;
			this.privilegeData[AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE] = addOptionData;
			
			var outlookData = {};
			outlookData.checkbox = this.outlookCheckbox;
			outlookData.parentCheckbox = this.officeConfig;
			outlookData.privilege = AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE;
			this.checkboxes[this.outlookCheckbox.id] = outlookData;
			this.privilegeData[AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE] = outlookData;
			
			var layoutCheckboxData = {};
			layoutCheckboxData["checkbox"] = this.layoutCheckbox;
			layoutCheckboxData["childCheckboxes"] = [];
			layoutCheckboxData.childCheckboxes.push(this.desktopFeaturesCheckbox);
			this.checkboxes[this.layoutCheckbox.id] = layoutCheckboxData;
			
			var desktopFeaturesData = {};
			desktopFeaturesData["checkbox"] = this.desktopFeaturesCheckbox;
			desktopFeaturesData.parentCheckbox = this.layoutCheckbox;
			desktopFeaturesData["childCheckboxes"] = [this.displayedFeaturseCheckbox, this.addlComponentsCheckbox];
			this.checkboxes[this.desktopFeaturesCheckbox.id] = desktopFeaturesData;

			var displayedFeaturesCheckboxData = {};
			displayedFeaturesCheckboxData["checkbox"] = this.displayedFeaturseCheckbox;
			displayedFeaturesCheckboxData.parentCheckbox = this.desktopFeaturesCheckbox;
			displayedFeaturesCheckboxData["childCheckboxes"] = [];
			displayedFeaturesCheckboxData.childCheckboxes.push(this.homeCheckbox, this.searchCheckbox, this.browseCheckbox, this.teamspacesCheckbox, this.etmgrCheckbox, this.workCheckbox, 
					this.asyncTasksCheckbox, /*this.urlFeaturesCheckbox,*/ this.pluginFeaturesCheckbox);
			this.checkboxes[this.displayedFeaturseCheckbox.id] = displayedFeaturesCheckboxData;
			
			var homeData = {};
			homeData.checkbox = this.homeCheckbox;
			homeData.parentCheckbox = this.displayedFeaturseCheckbox;
			homeData.privilege = AdminRoleConfig.LAYOUT_HOME_PRIVILEGE;
			this.checkboxes[this.homeCheckbox.id] = homeData;
			this.privilegeData[AdminRoleConfig.LAYOUT_HOME_PRIVILEGE] = homeData;
			
			var browseData = {};
			browseData.checkbox = this.browseCheckbox;
			browseData.parentCheckbox = this.displayedFeaturseCheckbox;
			browseData.privilege = AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE;
			this.checkboxes[this.browseCheckbox.id] = browseData;
			this.privilegeData[AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE] = browseData;
			
			var searchData = {};
			searchData.checkbox = this.searchCheckbox;
			searchData.parentCheckbox = this.displayedFeaturseCheckbox;
			searchData.privilege = AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE;
			this.checkboxes[this.searchCheckbox.id] = searchData;
			this.privilegeData[AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE] = searchData;
			
			var teamspacesData = {};
			teamspacesData.checkbox = this.teamspacesCheckbox;
			teamspacesData.parentCheckbox = this.displayedFeaturseCheckbox;
			teamspacesData.privilege = AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE;
			this.checkboxes[this.teamspacesCheckbox.id] = teamspacesData;
			this.privilegeData[AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE] = teamspacesData;
			
			var etMgrData = {};
			etMgrData.checkbox = this.etmgrCheckbox;
			etMgrData.parentCheckbox = this.displayedFeaturseCheckbox;
			etMgrData.privilege = AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE;
			this.checkboxes[this.etmgrCheckbox.id] = etMgrData;
			this.privilegeData[AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE] = etMgrData;
			
			var workData = {};
			workData.checkbox = this.workCheckbox;
			workData.parentCheckbox = this.displayedFeaturseCheckbox;
			workData.privilege = AdminRoleConfig.LAYOUT_WORK_PRIVILEGE;
			this.checkboxes[this.workCheckbox.id] = workData;
			this.privilegeData[AdminRoleConfig.LAYOUT_WORK_PRIVILEGE] = workData;
			
			var tasksData = {};
			tasksData.checkbox = this.asyncTasksCheckbox;
			tasksData.parentCheckbox = this.displayedFeaturseCheckbox;
			tasksData.privilege = AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE;
			this.checkboxes[this.asyncTasksCheckbox.id] = tasksData;
			this.privilegeData[AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE] = tasksData;
			
			/*
			var URLFeaturesData = {};
			URLFeaturesData.checkbox = this.urlFeaturesCheckbox;
			URLFeaturesData.parentCheckbox = this.displayedFeaturseCheckbox;
			URLFeaturesData.privilege = AdminRoleConfig.LAYOUT_MANAGE_URL_FEATURES;
			this.checkboxes[this.urlFeaturesCheckbox.id] = URLFeaturesData;
			this.privilegeData[AdminRoleConfig.LAYOUT_MANAGE_URL_FEATURES] = URLFeaturesData;
			*/
			
			var pluginFeaturesData = {};
			pluginFeaturesData.checkbox = this.pluginFeaturesCheckbox;
			pluginFeaturesData.parentCheckbox = this.displayedFeaturseCheckbox;
			pluginFeaturesData.privilege = AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES;
			this.checkboxes[this.pluginFeaturesCheckbox.id] = pluginFeaturesData;
			this.privilegeData[AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES] = pluginFeaturesData;
			
			var addlComponentsData = {};
			addlComponentsData.checkbox = this.addlComponentsCheckbox;
			addlComponentsData["childCheckboxes"] = [this.globalToolbarCheckbox, this.statusBarCheckbox];
			addlComponentsData.parentCheckbox = this.desktopFeaturesCheckbox;
			this.checkboxes[this.addlComponentsCheckbox.id] = addlComponentsData;
			
			var globalToolbarData = {};
			globalToolbarData.checkbox = this.globalToolbarCheckbox;
			globalToolbarData.parentCheckbox = this.addlComponentsCheckbox;
			globalToolbarData.privilege = AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR;
			this.checkboxes[this.globalToolbarCheckbox.id] = globalToolbarData;
			this.privilegeData[AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR] = globalToolbarData;
			
			var statusBarData = {};
			statusBarData.checkbox = this.statusBarCheckbox;
			statusBarData.parentCheckbox = this.addlComponentsCheckbox;
			statusBarData.privilege = AdminRoleConfig.LAYOUT_STATUS_BAR;
			this.checkboxes[this.statusBarCheckbox.id] = statusBarData;
			this.privilegeData[AdminRoleConfig.LAYOUT_STATUS_BAR] = statusBarData;
			
			var appearanceData = {};
			appearanceData["checkbox"] = this.appearanceCheckbox;
			appearanceData["childCheckboxes"] = [];
			appearanceData.childCheckboxes.push(this.themeCheckbox, this.appNameCheckbox);
			this.checkboxes[this.appearanceCheckbox.id] = appearanceData;
			
			var appNameData = {};
			appNameData.checkbox = this.appNameCheckbox;
			appNameData.parentCheckbox = this.appearanceCheckbox;
			appNameData.privilege = AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE;
			this.checkboxes[this.appNameCheckbox.id] = appNameData;
			this.privilegeData[AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE] = appNameData;
			
			var themeData = {};
			themeData.checkbox = this.themeCheckbox;
			themeData.parentCheckbox = this.appearanceCheckbox;
			themeData.privilege = AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE;
			this.checkboxes[this.themeCheckbox.id] = themeData;
			this.privilegeData[AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE] = themeData;
			
			var menusData = {};
			menusData["checkbox"] = this.menusCheckbox;
			menusData["childCheckboxes"] = [];
			menusData.childCheckboxes.push(this.toolbarsCheckbox, this.contextMenusCheckbox, this.officeCommandsCheckbox, this.officeMenusCheckbox);
			this.checkboxes[this.menusCheckbox.id] = menusData;
			
			var toolbarsData = {};
			toolbarsData.checkbox = this.toolbarsCheckbox;
			toolbarsData.parentCheckbox = this.menusCheckbox;
			toolbarsData.privilege = AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE;
			this.checkboxes[this.toolbarsCheckbox.id] = toolbarsData;
			this.privilegeData[AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE] = toolbarsData;
			
			var ctxMenusData = {};
			ctxMenusData.checkbox = this.contextMenusCheckbox;
			ctxMenusData.parentCheckbox = this.menusCheckbox;
			ctxMenusData.privilege = AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE;
			this.checkboxes[this.contextMenusCheckbox.id] = ctxMenusData;
			this.privilegeData[AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE] = ctxMenusData;
			
			var officeBarData = {};
			officeBarData["checkbox"] = this.officeCommandsCheckbox;
			officeBarData.parentCheckbox = this.menusCheckbox;
			officeBarData.privilege = AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE;
			this.checkboxes[this.officeCommandsCheckbox.id] = officeBarData;
			this.privilegeData[AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE] = officeBarData;
			
			var officeCtxData = {};
			officeCtxData.checkbox = this.officeMenusCheckbox;
			officeCtxData.parentCheckbox = this.menusCheckbox;
			officeCtxData.privilege = AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE;
			this.checkboxes[this.officeMenusCheckbox.id] = officeCtxData;
			this.privilegeData[AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE] = officeCtxData;
			
			var mobileData = {};
			mobileData["checkbox"] = this.mobileCheckbox;
			mobileData["childCheckboxes"] = [];
			mobileData.childCheckboxes.push(this.documentMgmtCheckbox, this.brandingCheckbox);
			this.checkboxes[this.mobileCheckbox.id] = mobileData;
			
			var docMgmtCheckboxData = {};
			docMgmtCheckboxData["checkbox"] = this.documentMgmtCheckbox;
			docMgmtCheckboxData.parentCheckbox = this.mobileCheckbox;
			docMgmtCheckboxData["childCheckboxes"] = [];
			docMgmtCheckboxData.childCheckboxes.push(this.addPhotosCheckbox, this.addDocumentsCheckbox, this.openDocumentsCheckbox);
			this.checkboxes[this.documentMgmtCheckbox.id] = docMgmtCheckboxData;
			
			var addPhotosData = {};
			addPhotosData.checkbox = this.addPhotosCheckbox;
			addPhotosData.parentCheckbox = this.documentMgmtCheckbox;
			addPhotosData.privilege = AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE;
			this.checkboxes[this.addPhotosCheckbox.id] = addPhotosData;
			this.privilegeData[AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE] = addPhotosData;
			
			var addDocsData = {};
			addDocsData["checkbox"] = this.addDocumentsCheckbox;
			addDocsData.parentCheckbox = this.documentMgmtCheckbox;
			addDocsData.privilege = AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE;
			this.checkboxes[this.addDocumentsCheckbox.id] = addDocsData;
			this.privilegeData[AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE] = addDocsData;
			
			var openDocsData = {};
			openDocsData.checkbox = this.openDocumentsCheckbox;
			openDocsData.parentCheckbox = this.documentMgmtCheckbox;
			openDocsData.privilege = AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE;
			this.checkboxes[this.openDocumentsCheckbox.id] = openDocsData;
			this.privilegeData[AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE] = openDocsData;
			
			var brandingData = {};
			brandingData["checkbox"] = this.brandingCheckbox;
			brandingData.parentCheckbox = this.mobileCheckbox;
			brandingData["childCheckboxes"] = [];
			brandingData.childCheckboxes.push(this.mainColorCheckbox, this.secColorCheckbox);
			this.checkboxes[this.brandingCheckbox.id] = brandingData;
			
			var mainColorData = {};
			mainColorData["checkbox"] = this.mainColorCheckbox;
			mainColorData.parentCheckbox = this.brandingCheckbox;
			mainColorData.privilege = AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE;
			this.checkboxes[this.mainColorCheckbox.id] = mainColorData;
			this.privilegeData[AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE] = mainColorData;
			
			var secColorData = {};
			secColorData.checkbox = this.secColorCheckbox;
			secColorData.parentCheckbox = this.brandingCheckbox;
			secColorData.privilege = AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE;
			this.checkboxes[this.secColorCheckbox.id] = secColorData;
			this.privilegeData[AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE] = secColorData;
			
			var rbrData = {};
			rbrData["checkbox"] = this.rbrCheckbox;
			rbrData["childCheckboxes"] = [];
			rbrData.childCheckboxes.push(this.policiesRolesMgmtCheckbox, this.reasonCodesCheckbox);
			this.checkboxes[this.rbrCheckbox.id] = rbrData;
			
			var rbrPoliciesData = {};
			rbrPoliciesData["checkbox"] = this.policiesRolesMgmtCheckbox;
			rbrPoliciesData.parentCheckbox = this.rbrCheckbox;
			rbrPoliciesData.privilege = AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE;
			this.checkboxes[this.policiesRolesMgmtCheckbox.id] = rbrPoliciesData;
			this.privilegeData[AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE] = rbrPoliciesData;
			
			var rbrReasonsData = {};
			rbrReasonsData.checkbox = this.reasonCodesCheckbox;
			rbrReasonsData.parentCheckbox = this.rbrCheckbox;
			rbrReasonsData.privilege = AdminRoleConfig.RBR_REASONS_PRIVILEGE;
			this.checkboxes[this.reasonCodesCheckbox.id] = rbrReasonsData;
			this.privilegeData[AdminRoleConfig.RBR_REASONS_PRIVILEGE] = rbrReasonsData;
			
			for (checkboxKey in this.checkboxes){
				var checkboxData = this.checkboxes[checkboxKey];
				var checkbox = checkboxData.checkbox;
				aspect.after(checkbox.domNode, "onclick", lang.hitch(this, function(e){
					
					var checkbox = arguments[1][0].target;
					if (checkbox.tagName.toLowerCase() == "input"){
						var checkboxData = this.checkboxes[checkbox.id];
						var sourceCheckbox = checkboxData.checkbox;
						var state = sourceCheckbox.get("checked");
						if (state == "mixed"){
							sourceCheckbox.setChecked(true);
						}
						
						var parent = checkboxData.parentCheckbox;
						if (parent){
							this._checkParents(parent)
						}
						this._checkDescendants(checkbox);
					}
					
				}));
			}
		},
		
		_checkParents: function(checkbox){
			if (checkbox){
				// if parent checked, exit
				// Get children of parent. If all checked, check parent
				var checkboxData = this.checkboxes[checkbox.id];
				var checkboxState = checkboxData.checkbox.get("checked");
				var children = checkboxData.childCheckboxes;
				if (children){
					var foundChecked = false;
					var foundUnchecked = false;
					var foundMixed = false;
					for (var i = 0; i < children.length; i++){
						var child = children[i];
						var childState = child.get("checked");
						if (childState == true){
							foundChecked = true;
						}
						else if (childState == false){
							foundUnchecked = true;
						}
						else {
							// "mixed" case
							foundMixed = true;
						}
						if (foundChecked && foundUnchecked && foundMixed){
							break;
						}
					}
					if ((foundUnchecked && foundChecked) || foundMixed){
						checkboxData.checkbox.set("checked", "mixed");
					}
					else if (foundChecked){
						checkboxData.checkbox.set("checked", true);
					}
					else if (foundUnchecked){
						checkboxData.checkbox.set("checked", false);
					}
					var parent = checkboxData.parentCheckbox;
					this._checkParents(parent);
				}
			}
		},

		_checkDescendants: function(checkbox){
			if (checkbox){
				var checkboxData = this.checkboxes[checkbox.id];
				var children = checkboxData.childCheckboxes;
				if (children){
					for (var i = 0; i < children.length; i++){
						var child = children[i];
						if (checkbox.checked){
							child.setChecked(true);
						}
						else {
							child.setChecked(false);
						}
						this._checkDescendants(child);
					}
				}
			}
		},

		_loadData: function() {
			
			// Populating any existing data in the  model
			if (this._myAdminModel) {
				this.nameField.set("value", this._myAdminModel.getName());
				this.descriptionField.set("value", this._myAdminModel.getDescription());
			}  else {
				this.nameField.set("value", "");
				this.descriptionField.set("value", "");				
			}

			this.descriptionField.pattern = '([^"*|<>?:\\\\/])*';
			this.descriptionField.invalidMessage = this.messages.admin_rba_description_invalid;
			
			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this.messages.admin_rba_name_invalid;
			
			this._checkPrivilegeBoxes();
		},

		_loadWithFieldValues: function(adminModel) {
			adminModel.setName(this.nameField.get("value"));
			adminModel.setDescription(this.descriptionField.get("value"));
			
			// Get the privileges.
			var privileges = [];
			keys = Object.keys(this.checkboxes);
			for (index in keys){
				var key = keys[index];
				if (this.checkboxes.hasOwnProperty(key)){
					
					// Include only the leaf level checkboxes.
					if (this.checkboxes[key].checkbox.get("checked") && this.checkboxes[key].privilege){
						privileges.push(this.checkboxes[key].privilege);
					}
				}
			}
			adminModel.setPrivileges(privileges);
		},
		
		/**
		 * Returns boolean indicating if the input name maps to a unique admin role id.
		 */
		isUniqueId: function(adminRoleName) {
			adminRoleName = this._getIdValueFromName(adminRoleName);
			var adminRoleName = adminRoleName ? adminRoleName.toLowerCase() : adminRoleName;
			var isUnique = true;
			var adminRoles = ecm.model.admin.adminData.adminRoles;
			if (adminRoles) {
				for (var i = 0; i < adminRoles.length; i++) {
					var adminRole = adminRoles[i];
					if (adminRole.getName().toLowerCase() == adminRoleName) {
						this.nameField.setCustomValidationError(this._messages.admin_id_in_use);
						isUnique = false;
						break;
					}
				}
			}
			this.nameField.validate();
			return isUnique;
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return false;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			if (this.action == "edit" && this._myAdminModel) {
				this._loadWithFieldValues(this._myAdminModel);
				ecm.model.admin.appCfg.updateApplicationRedactionReasonConfig(this._myAdminModel, lang.hitch(this, function(response) {
					this._updateName(this._myAdminModel.getName());
					this.setTitle(this._myAdminModel.getName());
					ecm.model.admin.adminData.onChange(this._myAdminModel);
					if (onComplete)
						onComplete(true);
				}));
			} else {
				// Check that name is unique.
				var newAdminModel = AdminRoleConfig.createAdminRoleConfig(Date.now().toString());
				this._loadWithFieldValues(newAdminModel);
				ecm.model.admin.appCfg.addAdminRoleConfig(newAdminModel, lang.hitch(this, function(response) {
					this._myAdminModel = newAdminModel;
					this._updateName(newAdminModel.getName());
					this.setTitle(newAdminModel.getName());
					this.action = "edit";
					this._checkSave();
					this.addedRole(newAdminModel);

					ecm.model.admin.adminData.loadAdminRoles();
					if (onComplete) {
						onComplete(true);
					}
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_ADMIN_ROLES
				});
			}
		},
		
		addedRole: function(newReason){
		},

		setInstructions: function(msg) {
			this.instructions.appendChild(document.createTextNode(msg));
		},

		getInstructions: function() {
			return this.messages.admin_rba_tab_instructions;
		},

	
		/**
		 * @private
		 */
		_updateName: function(name) {
			if (has("text-direction")) {
				name = this.enforceTextDirWithUcc(null, name);
			}
			var roleString = this.messages.admin_rolebase_role + " <b>${0}</b>"
			domConstruct.place("<label>" + string.substitute(roleString, [
				name
			]) + "</label>", this.headingText, "only");
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			var valid = true;
			
			if (!this.nameField.isValid()) {
				valid = false;
			}
			else {
				valid = this.isUniqueId(this.nameField.getValue());
			}
			
			// Make sure there is at least one privilege selected.
			if (valid){
				keys = Object.keys(this.checkboxes);
				var foundChecked = false;
				for (index in keys){
					var key = keys[index];
					if (this.checkboxes.hasOwnProperty(key)){
						var checkbox = this.checkboxes[key].checkbox;
						if (checkbox.get("checked")){
							foundChecked = true;
							break;
						}
					}
				}
				if (!foundChecked){
					valid = false;
				}
			}
			
			return valid;
		},

		/**
		 * Handles the resize of this widget.
		 */
		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},

			/**
		 * @private
		 */
		_onFieldChange: function(e) { 
			var test = arguments.src;
			if (this._initialized) {
				this._markDirty();
			}
		},
	
	});
});

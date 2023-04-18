/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/keys",
	"dojo/query",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/json",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/widget/NumberSpinner",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/RangeBoundTextBox",
	"ecm/widget/RadioButton",
	"ecm/widget/CheckBox",
	"ecm/widget/FilteringSelect",
	"ecm/widget/FilterTextBox",
	"ecm/widget/UserGroupPane",
	"ecm/widget/UserGroupPrivilegePane",
	"ecm/widget/dialog/SelectUserGroupDialog",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"ecm/widget/dialog/EntryTemplateFolderAssociationsDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/admin/ODCustomPropertiesDialog",
	"ecm/widget/admin/_AdminFolderSelectorDropDown",
	"ecm/widget/admin/AdminLoginDialog",
	"ecm/model/User",
	"ecm/model/Item",
	"ecm/model/ContentItem",
	"ecm/model/Repository",
	"ecm/model/Desktop",
	"ecm/model/Permission",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/Body",
	"gridx/modules/CellWidget",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"idx/html",
	"idx/layout/BorderContainer",
	"idx/layout/TitlePane",
	"idx/widget/SloshBucket",
	"dojo/store/Memory",
	"dojo/text!./templates/RepositoryConfigurationParameters.html"
],

function(declare, lang, array, connect, has, construct, domStyle, domAttr, keys, query, string, aspect, domClass, json, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, LoggerMixin, NumberSpinner, HoverHelp, ValidationTextBox, RangeBoundTextBox, RadioButton, CheckBox, FilteringSelect, FilterTextBox, UserGroupPane, UserGroupPrivilegePane, SelectUserGroupDialog, UserGroupPermissionDialog, EntryTemplateFolderAssociationsDialog, ErrorDialog, ODCustomPropertiesDialog, _AdminFolderSelectorDropDown, AdminLoginDialog, User, Item, ContentItem, Repository, Desktop, Permission, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, SingleSort, Body, CellWidget, ContentPane, Button, idxHtml, BorderContainer, TitlePane, SloshBucket, MemoryStore, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositoryConfigurationParameters
	 * @class Provides a widget that is used to configure the properties for a repository.
	 */
	return declare("ecm.widget.admin.RepositoryConfigurationParameters", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.RepositoryConfigurationParameters.prototype */

		templateString: template,
		widgetsInTemplate: true,

		availableLanguageCodeStore: null,
		selectedLanguageCodesStore: null,
		_ODCustomPropertiesStore: null,
		_editItemValue: null,
		_dialog: null,
		_selected: false,
		_folder: null,

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._downloadUsersPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmEntryTemplateEnabledClasses, "onAddRemove", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._cmEntryTemplateEnabledClasses, "onMoved", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._cmEntryTemplateEnabledClassesAreaFilter, "_onInput", lang.hitch(this, "_cmEntryTemplateEnabledClassesFilter")));
			this.own(aspect.after(this._cmEntryTemplateEnabledClassesAreaFilter, "_setValueAttr", lang.hitch(this, "_cmEntryTemplateEnabledClassesFilter")));

			this.own(aspect.after(this._cmBoxShareEnabledClassesAreaFilter, "_onInput", lang.hitch(this, "_cmBoxShareEnabledClassesFilter")));
			this.own(aspect.after(this._cmBoxShareEnabledClassesAreaFilter, "_setValueAttr", lang.hitch(this, "_cmBoxShareEnabledClassesFilter")));
			this.own(aspect.after(this._cmBoxShareEnabledClasses, "onAddRemove", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			//	this.own(aspect.after(this._cmBoxCopyEnabledClasses, "onMoved", lang.hitch(this, function() {
			//	this._onFieldChange();
			//	}), true));

			this._cmBoxShareEnabledClasses.getGridTooltipText = lang.hitch(this, "_getCMBoxShareEnabledClassesGridTooltipText");
			this._cmEntryTemplateEnabledClasses.getGridTooltipText = lang.hitch(this, "_getCMEntryTemplateEnabledClassesGridTooltipText");
			//this.cmTaskUsername.set("missingMessage", this.messages.admin_repcfg_tm_delete_teamspace_id_missing);
			//this.cmTaskPassword.set("missingMessage", this.messages.admin_repcfg_tm_delete_teamspace_pwd_missing);
			this.p8DisplayRecentTeamspacesValue.set("invalidMessage", this.messages.property_integer_invalid);
			this._cmEntryTemplateEnabledClassesAreaFilter.set("placeholder", this.messages.class_contains_label);
			this._cmBoxShareEnabledClassesAreaFilter.set("placeholder", this.messages.class_contains_label);
			this.cmOptionalFeaturesTitlePane.set("title", this.messages.admin_configuration_optional_features);
			this.p8OptionalFeaturesTitlePane.set("title", this.messages.admin_configuration_optional_features);
			
			this.own(aspect.after(this._cmTeamspaceTemplateCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmTeamspaceCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmRedactionPolicyEditorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmRedactionEditorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmEntryTemplateCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._p8TeamspaceTemplateCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._p8TeamspaceCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._p8RedactionPolicyEditorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._p8RedactionEditorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._p8EntryTemplateCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
		},

		destroy: function() {
			this.logEntry("destroy");
			this._deleteDataStore(this.availableLanguageCodeStore);
			this._deleteDataStore(this.selectedLanguageCodesStore);

			if (this.languageCodes)
				this.languageCodes.destroy();

			if (this._selectUsersDialog) {
				this._selectUsersDialog.destroy();
				this._selectUsersDialog = null;
			}
			if (this._errorDialog) {
				this._errorDialog.destroy();
				this._errorDialog = null;
			}
			if (this._loginDialog) {
				this._loginDialog.destroyRecursive();
			}

			this.inherited(arguments);
			this.logExit("destroy");
		},

		_deleteDataStore: function(store) {
			if (store) {
				delete store;
			}
		},

		_setHoverHelp: function() {
			var type = this.repositoryData.type;
			if (type == "cm") {
				this.cmNamePropertyDefault.setHoverHelp(this.cmNamePropertyDefault_hover_help);
				this.cmNamePropertySpecify.setHoverHelp(this.cmNamePropertySpecify_hover_help);

				this.cmAddDocNameEmpty.setHoverHelp(this.cmAddDocHoverHelp);
				this.cmAddDocNameFileName.setHoverHelp(this.cmAddDocHoverHelp);

				this.cmEnableWorkspaces.setHoverHelp(this.rcCMUseWorkspacesFieldHoverHelp);
				this.cmUpdateTeamspaceRoles.setHoverHelp(this.rcCMUseWorkspacesOwnerRoleHoverHelp);
				this.cmEnableTaskManagerDelete.setHoverHelp(this.rcCMEnableTaskManagerDeleteHoverHelp);
				//this.cmTaskUsername.setHoverHelp(this.rcCMTaskManagerDeleteIdHoverHelp);

				this.cmEnableRedaction.setHoverHelp(this.rcCmEnableRedactionFieldHoverHelp);
				this.cmDisableRedaction.setHoverHelp(this.rcCmEnableRedactionFieldHoverHelp);
				this.cmBurnPDFToPDF.setHoverHelp(this.rcCmReturnRedactedPDFFilesAsFieldHoverHelp)
				this.cmBurnPDFToTIFF.setHoverHelp(this.rcCmReturnRedactedPDFFilesAsFieldHoverHelp)
				this.cmRedactionAllowMergeSplit.setHoverHelp(this.cmRedactionAllowMergeSplitHoverHelp)

				this.cmEnableBoxShare.setHoverHelp(this.rcCmEnableBoxShareFieldHoverHelp);
				this.cmDisableBoxShare.setHoverHelp(this.rcCmEnableBoxShareFieldHoverHelp);
				this.cmEnableBoxCopy.setHoverHelp(this.rcCmEnableBoxCopyFieldHoverHelp);
				this.cmDisableBoxCopy.setHoverHelp(this.rcCmEnableBoxCopyFieldHoverHelp);
				this.cmEnableEntryTemplate.setHoverHelp(this.rcCMUseEntryTemplateFieldHoverHelp);
				this.cmDisableWorkspaces.setHoverHelp(this.rcCMUseWorkspacesFieldHoverHelp);
				this.cmDisableEntryTemplate.setHoverHelp(this.rcCMUseEntryTemplateFieldHoverHelp);
				this.enableSSO.setHoverHelp(this.rcCMUseSSOFieldHoverHelp);
				this.disableSSO.setHoverHelp(this.rcCMUseSSOFieldHoverHelp);
				this.cmStatusDocCheckedOut.setHoverHelp(this.cmStatusColumnsHoverHelp);
				this.cmStatusDocDeclaredRecords.setHoverHelp(this.cmStatusColumnsHoverHelp);
				this.cmStatusDocBookmarks.setHoverHelp(this.cmStatusColumnsHoverHelp);
				this.cmStatusWorkItemCheckedOut.setHoverHelp(this.cmStatusColumnsHoverHelp);
				this.cmStatusWorkItemSuspended.setHoverHelp(this.cmStatusColumnsHoverHelp);
				this.enableDirectRetrieve.setHoverHelp(this.directRetrieveFieldHoverHelp);
				this.disableDirectRetrieve.setHoverHelp(this.directRetrieveFieldHoverHelp);
				this.enableActionList.setHoverHelp(this.actionListFieldHoverHelp);
				this.disableActionList.setHoverHelp(this.actionListFieldHoverHelp);
				this.cmDBEncodingUTF8.setHoverHelp(this.cmDBEncodingUTF8_hover_help);
				this.cmDBEncodingOther.setHoverHelp(this.cmDBEncodingOther_hover_help);
				this.cmStatusDocHold.setHoverHelp(this.cmStatusColumnsHoverHelp);
				//this._itemTypeSelector.setHoverHelp(this.enableOnlyDocumentItemTypesFieldHoverHelp);
				this.enableIncludeAttrGroupName.setHoverHelp(this.IncludeAttrGroupNameFieldHoverHelp);
				this.disableIncludeAttrGroupName.setHoverHelp(this.IncludeAttrGroupNameFieldHoverHelp);

				var msg = ecm.messages.admin_repcfg_entry_template_root_folder_association_hover + " <a href='#' onclick='ecm.model.admin.appCfg.openSupport2HelpWindow(\"eucco110.htm\")'>" + ecm.messages.learn_more + "</a>";
				this._cmEntryTemplateRootFolderAssociationHoverHelp._setMessageAttr(msg);

			} else if (type == "p8") {
				this.docNameProperty.setHoverHelp(this._docNameProperty_hover_help);
				this.folderNameProperty.setHoverHelp(this._folderNameProperty_hover_help);

				this.p8EnableTaskManagerDelete.setHoverHelp(this.rcP8EnableTaskManagerDeleteHoverHelp);
				this.p8EnableWorkspaces.setHoverHelp(this.rcp8UseWorkspacesFieldHoverHelp);
				this.p8EnableWorkspaces.setHoverHelp(this.rcp8UseWorkspacesFieldHoverHelp);
				this.p8EnableRedaction.setHoverHelp(this.rcp8EnableRedactionFieldHoverHelp);
				this.p8DisableRedaction.setHoverHelp(this.rcp8EnableRedactionFieldHoverHelp);
				this.p8BurnPDFToPDF.setHoverHelp(this.rcp8ReturnRedactedPDFFilesAsFieldHoverHelp)
				this.p8BurnPDFToTIFF.setHoverHelp(this.rcp8ReturnRedactedPDFFilesAsFieldHoverHelp)
				this.p8RedactionAllowMergeSplit.setHoverHelp(this.p8RedactionAllowMergeSplitHoverHelp)
				this.p8EnableEntryTemplate.setHoverHelp(this.rcp8UseEntryTemplateFieldHoverHelp);
				this.p8EnableSyncService.setHoverHelp(this.rcp8EnableSyncFieldHoverHelp);
				this.p8DisableSyncService.setHoverHelp(this.rcp8EnableSyncFieldHoverHelp);
				this.p8EnableApprovalWorkflow.setHoverHelp(this.rcp8EnableApprovalWorklfowFieldHoverHelp);
				this.p8DisableApprovalWorkflow.setHoverHelp(this.rcp8EnableApprovalWorklfowFieldHoverHelp);
				this.p8EnableBoxShare.setHoverHelp(this.rcp8EnableBoxShareFieldHoverHelp);
				this.p8DisableBoxShare.setHoverHelp(this.rcp8EnableBoxShareFieldHoverHelp);
				this.p8EnableBoxCopy.setHoverHelp(this.rcp8EnableBoxCopyFieldHoverHelp);
				this.p8DisableBoxCopy.setHoverHelp(this.rcp8EnableBoxCopyFieldHoverHelp);
				this.p8UpdateTeamspaceRoles.setHoverHelp(this.rcP8UseWorkspacesOwnerRoleHoverHelp);
				this.p8DisplayRecentTeamspaces.setHoverHelp(this.rcP8DisplayRecentTeamspaceHoverHelp);
				this.p8DisplayRecentTeamspacesValue.setHoverHelp(this.rcP8DisplayRecentTeamspacesValue);

				this.p8DisableWorkspaces.setHoverHelp(this.rcp8UseWorkspacesFieldHoverHelp);
				this.p8DisableEntryTemplate.setHoverHelp(this.rcp8UseEntryTemplateFieldHoverHelp);
				this.enableAddAsMajorVersion.setHoverHelp(this.rcP8AddAsMajorVersionFieldHoverHelp);
				this.disableAddAsMajorVersion.setHoverHelp(this.rcP8AddAsMajorVersionFieldHoverHelp);
				this.enableCheckinAsMajorVersion.setHoverHelp(this.rcP8CheckinAsMajorVersionFieldHoverHelp);
				this.disableCheckinAsMajorVersion.setHoverHelp(this.rcP8CheckinAsMajorVersionFieldHoverHelp);
				this.inheritAnnotationSecurity.setHoverHelp(this.rcP8AnnotationSecurityFieldHoverHelp);
				this.defaultAnnotationSecurity.setHoverHelp(this.rcP8AnnotationSecurityFieldHoverHelp);
				this.connectionPoint.setHoverHelp(this.rcP8ConnectionPointHoverHelp);
				this.enableIncludeWorkflowDefinition.setHoverHelp(this.rcP8IncludeWorkflowFieldHoverHelp);
				this.disableIncludeWorkflowDefinition.setHoverHelp(this.rcP8IncludeWorkflowFieldHoverHelp);
				this.enableIncludeFormTemplate.setHoverHelp(this.rcP8IncludeFormFieldHoverHelp);
				this.disableIncludeFormTemplate.setHoverHelp(this.rcP8IncludeFormFieldHoverHelp);
				this.p8StatusDocCheckedOut.setHoverHelp(this.p8StatusColumnsHoverHelp);
				this.p8StatusDocDeclaredRecords.setHoverHelp(this.p8StatusColumnsHoverHelp);
				this.p8StatusDocMinorVersions.setHoverHelp(this.p8StatusColumnsHoverHelp);
				this.p8StatusDocCompoundDocument.setHoverHelp(this.p8StatusColumnsHoverHelp);
				this.p8StatusWorkItemLocked.setHoverHelp(this.p8StatusColumnsHoverHelp);
				this.p8StatusWorkItemDeadline.setHoverHelp(this.p8StatusColumnsHoverHelp);
				this.enableDownloadRecording.setHoverHelp(this.enableDownloadRecordingHover);
				this.disableDownloadRecording.setHoverHelp(this.enableDownloadRecordingHover);
			} else if (type == "od") {
				this.enableODSSO.setHoverHelp(this.rcODUseSSOFieldHoverHelp);
				this.afp2pdfConfigFile.setHoverHelp(this.rcodAFP2PDFConfigFileHoverHelp);
				this.transformXMLFile.setHoverHelp(this.rcodTransformXMLFileHoverHelp);
				this.odStatusDocHold.setHoverHelp(this.odStatusColumnsHoverHelp);
				this.odStatusDocNotes.setHoverHelp(this.odStatusColumnsHoverHelp);
			} else if (type == "cmis") {
				//this.useGzipEncoding.setHoverHelp(this.rcUseGzipEncodingHoverHelp);
				this.cmisEnableAddAsMajorVersion.setHoverHelp(this.rcCMISAddAsMajorVersionFieldHoverHelp);
				this.cmisDisableAddAsMajorVersion.setHoverHelp(this.rcCMISAddAsMajorVersionFieldHoverHelp);
				this.cmisEnableCheckinAsMajorVersion.setHoverHelp(this.rcCMISCheckinAsMajorVersionFieldHoverHelp);
				this.cmisDisableCheckinAsMajorVersion.setHoverHelp(this.rcCMISCheckinAsMajorVersionFieldHoverHelp);
				this.cmisStatusDocCheckedOut.setHoverHelp(this.cmisStatusColumnsHoverHelp);
				this.cmisStatusDocMinorVersions.setHoverHelp(this.cmisStatusColumnsHoverHelp);
			}
		},

		/*
		 * Save field data in the model.
		 */
		loadWithFieldValues: function(adminModel) {
			if (adminModel.getType() == "cm") {
				if (!domClass.contains(this.cmBoxShareInlineMessage, "dijitHidden") || !domClass.contains(this.cmBoxCopyInlineMessage, "dijitHidden") || !domClass.contains(this.cmTaskMgrTeamspaceDeleteInlineMessage, "dijitHidden")) {
					adminModel.setWarning(true);
				}

				if (this.cmNamePropertySpecify.get("checked")) {
					adminModel.setDocNameProperty(this.cmNameProperty.get('value'));
				} else {
					adminModel.setDocNameProperty("");
				}
				adminModel.setDocNamePropSetWithFileName(this.cmAddDocNameFileName.get("checked"));

				adminModel.setTaskManagerProxyUserId(this.cmTaskMgrProxyUserId.get('value'));
				var taskMgrProxyPwd = adminModel.getTaskManagerProxyUserPwd();
				if (taskMgrProxyPwd != this.cmTaskMgrProxyUserPwd.get('value') && this.cmTaskMgrProxyUserPwd.get('value') && this.cmTaskMgrProxyUserPwd.get('value').length > 0)
					adminModel.setTaskManagerProxyUserPwd(this.cmTaskMgrProxyUserPwd.get('value'));
				else
					adminModel.setTaskManagerProxyUserPwd("");

				adminModel.setBoxShareEnabled(this.cmEnableBoxShare.get("checked"));
				adminModel.setBoxCopyEnabled(this.cmEnableBoxCopy.get("checked"));

				adminModel.setTeamspaceOwnerModifyRoles(this.cmUpdateTeamspaceRoles.get('checked'));
				adminModel.setEnableTaskManagerDelete(this.cmEnableTaskManagerDelete.get('checked'));

				adminModel.setTeamspacesEnabled(this.cmEnableWorkspaces.get('checked'));
				
				adminModel.setRedactionEnabled(this.cmEnableRedaction.get('checked'));
				adminModel.setBurnPDFToPDF(this.cmBurnPDFToPDF.get('checked'));
				adminModel.setRedactionAllowMergeSplit(this.cmRedactionAllowMergeSplit.get('checked'));
				
				adminModel.setEntryTemplatesEnabled(this.cmEnableEntryTemplate.get('checked'));
				if (adminModel.getEntryTemplatesEnabled()) {
					var selectedClasses = this._cmEntryTemplateEnabledClasses.getSelectedItems();

					var enableETTracking = [];
					var enableETFolderAssociations = [];
					for (var i = 0; i < selectedClasses.length; i++) {
						var selectedClass = selectedClasses[i];

						if (!selectedClass.supportsEntryTemplateTracking && selectedClass.enableETTracking) {
							enableETTracking.push(selectedClass.id);
						}
						if (!selectedClass.supportsEntryTemplateFolderAssociations && selectedClass.enableETFolderAssociations) {
							enableETFolderAssociations.push(selectedClass.id);
						}
					}
					adminModel.enableEntryTemplateTracking = enableETTracking;
					adminModel.enableEntryTemplateFolderAssocations = enableETFolderAssociations;
				}

				if (adminModel.getBoxShareEnabled()) {
					var selectedClasses = this._cmBoxShareEnabledClasses.getSelectedItems();

					var enableBoxShareTracking = [];
					var enableBoxShareFolderAssociations = [];
					for (var i = 0; i < selectedClasses.length; i++) {
						var selectedClass = selectedClasses[i];

						if (!selectedClass.supportsBoxShareTracking && selectedClass.enableBoxShareTracking) {
							enableBoxShareTracking.push(selectedClass.id);
						}
					}
					adminModel.enableBoxShareTracking = enableBoxShareTracking;
				}

				adminModel.setUseSSO(this.enableSSO.get('checked'));
				adminModel.setDirectRetrieveEnabled(this.enableDirectRetrieve.get('checked'));
				adminModel.setActionListEnabled(this.enableActionList.get('checked'));
				adminModel.setUsePartFileName(this.enablePartFileName.get('checked'));
				adminModel.setEnableOnlyDocumentItemTypesEnabled(this.isDocumentModelOnly());
				adminModel.setDatabaseEncodingUTF8(this.cmDBEncodingUTF8.get('checked'));
				adminModel.setLanguageCodes(this._getLanguageCodeSelectedFields());
				adminModel.setStatusDocCheckedOut(this.cmStatusDocCheckedOut.get('checked'));
				adminModel.setStatusDocDeclaredRecord(this.cmStatusDocDeclaredRecords.get('checked'));
				adminModel.setStatusDocBookmarks(this.cmStatusDocBookmarks.get('checked'));
				adminModel.setStatusWorkItemCheckedOut(this.cmStatusWorkItemCheckedOut.get('checked'));
				adminModel.setStatusWorkItemSuspended(this.cmStatusWorkItemSuspended.get('checked'));
				adminModel.setStatusDocHold(this.cmStatusDocHold.get('checked'));
				adminModel.setIncludeAttrGroupInAttrDisplayName(this.enableIncludeAttrGroupName.get('checked'));

				var teamspaceTemplatePermissions = this._cmTeamspaceTemplateCreatorDataPane.get("userGroupData");
				var teamspacePermissions = this._cmTeamspaceCreatorDataPane.get("userGroupData");
				var redactionPermissions = this._cmRedactionEditorDataPane.get("userGroupData");
				var redactionPolicyPermissions = this._cmRedactionPolicyEditorDataPane.get("userGroupData");
				var entryTemplatePermissions = this._cmEntryTemplateCreatorDataPane.get("userGroupData");

				adminModel.setTeamspaceTemplatePermissions(this._getStringifyValue(teamspaceTemplatePermissions));
				adminModel.setTeamspacePermissions(this._getStringifyValue(teamspacePermissions));
				adminModel.setRedactionPermissions(this._getStringifyValue(redactionPermissions));
				adminModel.setRedactionPolicyPermissions(this._getStringifyValue(redactionPolicyPermissions));
				adminModel.setEntryTemplatePermissions(this._getStringifyValue(entryTemplatePermissions));
				
				if (this.cmEntryTemplateRootFolderAssociations) {
					adminModel.setCmEntryTemplateRootFolderAssociations(this._getStringifyValue(this.cmEntryTemplateRootFolderAssociations));
				}

				var oldRootFolderId = adminModel.getRootFolderId();
				var hadNoRootFolder = (oldRootFolderId == null || oldRootFolderId == "");

				var rootFolderId = this.getSelectedFolderId();
				adminModel.setRootFolderId(rootFolderId);

				if (hadNoRootFolder) {
					// Foldering is only enabled if either the hierarchical root is available or a root folder was selected.
					// We can infer that the hierarchical root is available if the repository is CM 8.4.3 or later and foldering was enabled. 
					adminModel.setFolderingEnabled((!this.repositoryData.isCM842 && adminModel.getFolderingEnabled()) || rootFolderId != "");
				} else {
					// In this case, foldering may have been enabled because a root folder was previously selected.
					// We can't tell if the hierarchical root is available or not.
					// Assume foldering is enabled if the repository is CM 8.4.3 or later, or if a root folder was selected.
					adminModel.setFolderingEnabled(!this.repositoryData.isCM842 || rootFolderId != "");
				}

				this._folder = this.getSelectedFolder();

			} else if (adminModel.getType() == "p8") {
				if (!domClass.contains(this.p8BoxShareInlineMessage, "dijitHidden") || !domClass.contains(this.p8BoxCopyInlineMessage, "dijitHidden") || !domClass.contains(this.p8TaskMgrTeamspaceDeleteInlineMessage, "dijitHidden")) {
					adminModel.setWarning(true);
				}
				adminModel.setDocNameProperty(this.docNameProperty.get('value'));
				adminModel.setFolderNameProperty(this.folderNameProperty.get('value'));
				adminModel.setUsePartFileName(this.p8EnablePartFileName.get('checked'));

				adminModel.setP8DownloadRecord(this.enableDownloadRecording.get("checked"));
				var users = [];
				if (this.enableDownloadRecording.get("checked")) {
					for (var i = 0; i < this._downloadUsers.length; i++) {
						users.push(this._downloadUsers[i].id);
					}
				}
				adminModel.setP8DownloadRecordIgnoreUserIds(users);

				adminModel.setTeamspaceOwnerModifyRoles(this.p8UpdateTeamspaceRoles.get('checked'));
				adminModel.setEnableTaskManagerDelete(this.p8EnableTaskManagerDelete.get('checked'));

				adminModel.setTaskManagerProxyUserId(this.p8TaskMgrProxyUserId.get('value'));
				var taskMgrProxyPwd = adminModel.getTaskManagerProxyUserPwd();
				if (taskMgrProxyPwd != this.p8TaskMgrProxyUserPwd.get('value') && this.p8TaskMgrProxyUserPwd.get('value') && this.p8TaskMgrProxyUserPwd.get('value').length > 0)
					adminModel.setTaskManagerProxyUserPwd(this.p8TaskMgrProxyUserPwd.get('value'));
				else
					adminModel.setTaskManagerProxyUserPwd("");

				adminModel.setDisplayRecentTeamspaces(this.p8DisplayRecentTeamspaces.get('checked'));
				adminModel.setDisplayRecentTeamspacesValue(this.p8DisplayRecentTeamspacesValue.get('value'));
				adminModel.setTeamspacesEnabled(this.p8EnableWorkspaces.get('checked'));
				adminModel.setRedactionEnabled(this.p8EnableRedaction.get('checked'));
				adminModel.setBurnPDFToPDF(this.p8BurnPDFToPDF.get('checked'));
				adminModel.setRedactionAllowMergeSplit(this.p8RedactionAllowMergeSplit.get('checked'));
				adminModel.setEntryTemplatesEnabled(this.p8EnableEntryTemplate.get('checked'));
				adminModel.setSyncEnabled(this.p8EnableSyncService.get("checked"));
				adminModel.setApprovalWorkflowEnabled(this.p8EnableApprovalWorkflow.get("checked"));
				adminModel.setBoxShareEnabled(this.p8EnableBoxShare.get("checked"));
				adminModel.setBoxCopyEnabled(this.p8EnableBoxCopy.get("checked"));
				adminModel.setAddAsMajorVersion(this.enableAddAsMajorVersion.get('checked'));
				adminModel.setCheckinAsMajorVersion(this.enableCheckinAsMajorVersion.get('checked'));
				adminModel.setAnnotationSecurity(this.inheritAnnotationSecurity.get('checked') ? "inherit" : "default");
				adminModel.setConnectionPoint(this.connectionPoint.get('value'));
				adminModel.setIncludeWorkflowDefinition(this.enableIncludeWorkflowDefinition.get('checked'));
				adminModel.setIncludeFormTemplate(this.enableIncludeFormTemplate.get('checked'));
				adminModel.setStatusDocCheckedOut(this.p8StatusDocCheckedOut.get('checked'));
				adminModel.setStatusDocDeclaredRecord(this.p8StatusDocDeclaredRecords.get('checked'));
				adminModel.setStatusDocMinorVersions(this.p8StatusDocMinorVersions.get('checked'));
				adminModel.setStatusDocCompoundDocument(this.p8StatusDocCompoundDocument.get('checked'));
				adminModel.setStatusWorkItemLocked(this.p8StatusWorkItemLocked.get('checked'));
				adminModel.setStatusWorkItemDeadline(this.p8StatusWorkItemDeadline.get('checked'));

				var teamspaceTemplatePermissions = this._p8TeamspaceTemplateCreatorDataPane.get("userGroupData");
				var teamspacePermissions = this._p8TeamspaceCreatorDataPane.get("userGroupData");
				var redactionPermissions = this._p8RedactionEditorDataPane.get("userGroupData");
				var redactionPolicyPermissions = this._p8RedactionPolicyEditorDataPane.get("userGroupData");
				var entryTemplatePermissions = this._p8EntryTemplateCreatorDataPane.get("userGroupData");

				adminModel.setTeamspaceTemplatePermissions(this._getStringifyValue(teamspaceTemplatePermissions));
				adminModel.setTeamspacePermissions(this._getStringifyValue(teamspacePermissions));
				adminModel.setRedactionPermissions(this._getStringifyValue(redactionPermissions));
				adminModel.setRedactionPolicyPermissions(this._getStringifyValue(redactionPolicyPermissions));
				adminModel.setEntryTemplatePermissions(this._getStringifyValue(entryTemplatePermissions));

			} else if (adminModel.getType() == "od") {
				adminModel.setUseSSO(this.enableODSSO.get('checked'));
				adminModel.setAfp2PdfConfigFile(this.afp2pdfConfigFile.get('value'));
				adminModel.setTransformXMLFile(this.transformXMLFile.get('value'));
				adminModel.setCustomProperties(this.getCustomProperties());
				adminModel.setStatusDocHold(this.odStatusDocHold.get('checked'));
				adminModel.setStatusDocNotes(this.odStatusDocNotes.get('checked'));
			} else if (adminModel.getType() == "ci") {
			} else if (adminModel.getType() == "cmis") {
				adminModel.setUseGzipEncoding(true); //adminModel.setUseGzipEncoding(this.useGzipEncoding.get("checked") ? "true" : "false");
				adminModel.setAddAsMajorVersion(this.cmisEnableAddAsMajorVersion.get('checked'));
				adminModel.setCheckinAsMajorVersion(this.cmisEnableCheckinAsMajorVersion.get('checked'));
				adminModel.setStatusDocCheckedOut(this.cmisStatusDocCheckedOut.get('checked'));
				adminModel.setStatusDocMinorVersions(this.cmisStatusDocMinorVersions.get('checked'));
			} else {
				if (this._configDijit) {
					this._configDijit.save(adminModel);
				}
			}
		},

		_getStringifyValue: function ( value ){
			if( typeof value !=  "string"){
				return json.stringify(value);
			}else{
				return value;
			}
		},
		
		/*
		 * Load fields from the model.
		 */
		loadData: function(container, onComplete) {
			this._init = false;
			this._container = container;
			this._setHoverHelp();
			
			var addOnPermissionLevels = this.repositoryData.repositoryConfig.getAddOnTooltipPermissionLevels();

			if (this.repositoryData.type == "od") {
				this._instructions.innerHTML = this.messages.admin_repcfg_heading_od;
			}

			this.taskManagerIsConfigured = false;
			if (this.repositoryData["taskManagerServiceEnabled"] == true || this.repositoryData["taskManagerServiceEnabled"] == "true") {
				this.taskManagerIsConfigured = true;
			}

			if (this.repositoryData.type == "cm") {
				this.cmNamePropertyDefault.set('checked', true);
				this.cmNameProperty.set('disabled', true);
				var documentPropDescsOpt = lang.clone(this.repositoryData.onlydocumentPropDescs);
				this._loadSelection(this.cmNameProperty, documentPropDescsOpt);
				if (this.repositoryData.repositoryConfig.getDocNameProperty() && this._foundProperty(this.repositoryData.repositoryConfig.getDocNameProperty(), documentPropDescsOpt)) {
					this.cmNameProperty.set("value", this.repositoryData.repositoryConfig.getDocNameProperty());
					this.cmNameProperty.set("disabled", false);
					this.cmNamePropertySpecify.set("checked", true);
				} else {
					this.cmNameProperty.set("value", "ICM$NAME"); // default to ICM$NAME
				}
				if (this.repositoryData.repositoryConfig.getDocNamePropSetWithFileName()) {
					this.cmAddDocNameFileName.set("checked", true);
				} else {
					this.cmAddDocNameEmpty.set("checked", true);
				}

				this.cmTaskMgrProxyUserId.set('value', this.repositoryData.repositoryConfig.getTaskManagerProxyUserId());
				this.cmTaskMgrProxyUserPwd.set('value', this.repositoryData.repositoryConfig.getTaskManagerProxyUserPwd());
				this._onCmTaskManagerProxyChange();

				if (this.repositoryData.repositoryConfig.getBoxShareEnabled()) {
					this.cmEnableBoxShare.set('checked', true);
					domStyle.set(this._cmBoxShareEnabledClassesContainer, "display", "table-row");
				} else {
					this.cmDisableBoxShare.set('checked', true);
					domStyle.set(this._cmBoxShareEnabledClassesContainer, "display", "none");
				}
				this._onCmBoxShareChange();
				this._loadCMBoxShareEnabledClasses();
				if (this.repositoryData.repositoryConfig.getBoxCopyEnabled()) {
					this.cmEnableBoxCopy.set('checked', true);
				} else {
					this.cmDisableBoxCopy.set('checked', true);
				}
				this._onCmBoxCopyChange();

				this.cmEnableTaskManagerDelete.set('checked', this.repositoryData.repositoryConfig.getEnableTaskManagerDelete());
				this._onCmEnableTeamspaceDeleteTask();

				this._cmTeamspaceTemplateCreatorDataPane.set("levels", addOnPermissionLevels); 
				this._cmTeamspaceTemplateCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getTeamspaceTemplatePermissions()));

				this._cmTeamspaceCreatorDataPane.set("levels", addOnPermissionLevels);
				this._cmTeamspaceCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getTeamspacePermissions()));
				this._cmTeamspaceCreatorDataPane.render();

				if (this.repositoryData.repositoryConfig.getTeamspacesEnabled()) {
					this.cmEnableWorkspaces.set('checked', true);
					domStyle.set(this._cmTeamspaceAccessControlContainer, "display", "block");
					//if (this.taskManagerIsConfigured)
					domStyle.set(this.cmTeamspaceTaskConfig, "display", "block");
					domStyle.set(this.cmTeamspaceRecentRoles, "display", "block");
				} else {
					this.cmDisableWorkspaces.set('checked', true);
					domStyle.set(this._cmTeamspaceAccessControlContainer, "display", "none");
					domStyle.set(this.cmTeamspaceTaskConfig, "display", "none");
					domStyle.set(this.cmTeamspaceRecentRoles, "display", "none");
				}
				this.cmUpdateTeamspaceRoles.set('checked', this.repositoryData.repositoryConfig.getTeamspaceOwnerModifyRoles());

				this._cmRedactionEditorDataPane.set("levels", addOnPermissionLevels);
				this._cmRedactionEditorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getRedactionPermissions()));

				this._cmRedactionPolicyEditorDataPane.set("levels", addOnPermissionLevels);
				this._cmRedactionPolicyEditorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getRedactionPolicyPermissions()));
				this._cmRedactionPolicyEditorDataPane.render();

				if (this.repositoryData.repositoryConfig.getRedactionEnabled()) {
					this.cmEnableRedaction.set('checked', true);
					domStyle.set(this._cmBurnPDFToPDF, "display", "block");
					domStyle.set(this._cmRedactionAccessControlContainer, "display", "block");
					domStyle.set(this._cmRedactionAllowMergeSplitContainer, "display", "block");
				} else {
					this.cmDisableRedaction.set('checked', true);
					domStyle.set(this._cmBurnPDFToPDF, "display", "none");
					domStyle.set(this._cmRedactionAccessControlContainer, "display", "none");
					domStyle.set(this._cmRedactionAllowMergeSplitContainer, "display", "none");
				}

				if (this.repositoryData.repositoryConfig.getBurnPDFToPDF()) {
					this.cmBurnPDFToPDF.set('checked', true);
				} else {
					this.cmBurnPDFToTIFF.set('checked', true);
				}
				this.cmRedactionAllowMergeSplit.set('checked', this.repositoryData.repositoryConfig.getRedactionAllowMergeSplit());
				
				this._cmEntryTemplateCreatorDataPane.set("levels", addOnPermissionLevels);
				this._cmEntryTemplateCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getEntryTemplatePermissions()));
				this._cmEntryTemplateCreatorDataPane.render();
				this._loadCMEntryTemplateEnabledClasses();

				if (this.repositoryData.repositoryConfig.getEntryTemplatesEnabled()) {
					this.cmEnableEntryTemplate.set('checked', true);
					domStyle.set(this._cmEntryTemplateEnabledClassesContainer, "display", "table-row");
					domStyle.set(this._cmEntryTemplateAccessControlContainer, "display", "table-row");
					domStyle.set(this._cmEntryTemplateRootFolderAssociationContainer, "display", "table-row");
				} else {
					this.cmDisableEntryTemplate.set('checked', true);
					domStyle.set(this._cmEntryTemplateEnabledClassesContainer, "display", "none");
					domStyle.set(this._cmEntryTemplateAccessControlContainer, "display", "none");
					domStyle.set(this._cmEntryTemplateRootFolderAssociationContainer, "display", "none");
				}

				if (this.repositoryData.repositoryConfig.getUseSSO()) {
					this.enableSSO.set('checked', true);
				} else {
					this.disableSSO.set('checked', true);
				}
				if (!this.repositoryData.repositoryConfig.getDirectRetrieveEnabled()) {
					this.disableDirectRetrieve.set('checked', true);
				} else {
					this.enableDirectRetrieve.set('checked', true);
				}
				if (!this.repositoryData.repositoryConfig.getActionListEnabled()) {
					this.disableActionList.set('checked', true);
				} else {
					this.enableActionList.set('checked', true);
				}
				if (this.repositoryData.repositoryConfig.getUsePartFileName() == false) {
					this.disablePartFileName.set('checked', true);
				} else {
					this.enablePartFileName.set('checked', true);
				}
				if (this.repositoryData.repositoryConfig.getDatabaseEncodingUTF8()) {
					this.cmDBEncodingUTF8.set('checked', true);
				} else {
					this.cmDBEncodingOther.set('checked', true);
				}
				if (!this.repositoryData.repositoryConfig.getIncludeAttrGroupInAttrDisplayName()) {
					this.disableIncludeAttrGroupName.set('checked', true);
				} else {
					this.enableIncludeAttrGroupName.set('checked', true);
				}

				var selected = this.repositoryData.repositoryConfig.getLanguageCodes() ? this.repositoryData.repositoryConfig.getLanguageCodes() : "";
				this._loadLanguageCodeSelectableFields(this.repositoryData.cmLanguages, selected);

				this.cmStatusDocCheckedOut.set('checked', this.repositoryData.repositoryConfig.getStatusDocCheckedOut());
				this.cmStatusDocDeclaredRecords.set('checked', this.repositoryData.repositoryConfig.getStatusDocDeclaredRecord());
				this.cmStatusDocBookmarks.set('checked', this.repositoryData.repositoryConfig.getStatusDocBookmarks());
				this.cmStatusWorkItemCheckedOut.set('checked', this.repositoryData.repositoryConfig.getStatusWorkItemCheckedOut());
				this.cmStatusWorkItemSuspended.set('checked', this.repositoryData.repositoryConfig.getStatusWorkItemSuspended());
				this.cmStatusDocHold.set('checked', this.repositoryData.repositoryConfig.getStatusDocHold());
				this.initFolderSelector();
				this.initItemTypesSelector();

			} else if (this.repositoryData.type == "p8") {
				if (this.repositoryData.repositoryConfig.getP8DownloadRecord()) {
					this.enableDownloadRecording.set("checked", true);
					this._onDownloadRecordingEnable();
				} else {
					this.disableDownloadRecording.set("checked", true);
					this._onDownloadRecordingDisable();
				}
				if (this.repositoryData.repositoryConfig.getUsePartFileName() == false) {
					this.p8DisablePartFileName.set('checked', true);
				} else {
					this.p8EnablePartFileName.set('checked', true);
				}
				this._downloadUsers = [];
				if (this.repositoryData.repositoryConfig.getP8DownloadRecordIgnoreUserObjs() && lang.isArray(this.repositoryData.repositoryConfig.getP8DownloadRecordIgnoreUserObjs()) && this.repositoryData.repositoryConfig.getP8DownloadRecordIgnoreUserObjs().length > 0) {
					for (var i = 0; i < this.repositoryData.repositoryConfig.getP8DownloadRecordIgnoreUserObjs().length; i++) {
						var obj = this.repositoryData.repositoryConfig.getP8DownloadRecordIgnoreUserObjs()[i];
						this._downloadUsers.push(new User({
							id: obj.id,
							name: obj.shortName || obj.id,
							shortName: obj.shortName || obj.id,
							displayName: obj.displayName || obj.id
						}));
					}
				}
				this._downloadUsersPane.set("userGroupData", this._downloadUsers);

				var documentPropDescsOpt = lang.clone(this.repositoryData.onlydocumentPropDescs);
				this._loadSelection(this.docNameProperty, documentPropDescsOpt);
				if (this.repositoryData.repositoryConfig.getDocNameProperty() && this._foundProperty(this.repositoryData.repositoryConfig.getDocNameProperty(), documentPropDescsOpt)) {
					this.docNameProperty.set('value', this.repositoryData.repositoryConfig.getDocNameProperty());
				}

				var folderPropDescsOpt = lang.clone(this.repositoryData.onlyfolderPropDescs);
				this._loadSelection(this.folderNameProperty, folderPropDescsOpt);
				if (this.repositoryData.repositoryConfig.getFolderNameProperty() && this._foundProperty(this.repositoryData.repositoryConfig.getFolderNameProperty(), folderPropDescsOpt)) {
					this.folderNameProperty.set('value', this.repositoryData.repositoryConfig.getFolderNameProperty());
				}

				this._p8TeamspaceTemplateCreatorDataPane.set("levels", addOnPermissionLevels);
				this._p8TeamspaceTemplateCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getTeamspaceTemplatePermissions()));

				this._p8TeamspaceCreatorDataPane.set("levels", addOnPermissionLevels);
				this._p8TeamspaceCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getTeamspacePermissions()));
				this._p8TeamspaceCreatorDataPane.render();
				
				if (this.repositoryData.repositoryConfig.getTeamspacesEnabled()) {
					this.p8EnableWorkspaces.set('checked', true);
					domStyle.set(this._p8TeamspaceAccessControlContainer, "display", "block");
					//if (this.taskManagerIsConfigured)
					if (this.repositoryData.repositoryConfig && this.repositoryData.repositoryConfig["_attributes"] && this.repositoryData.repositoryConfig._attributes["enableWSI"]) {
						domStyle.set(this.p8TeamspaceRecentRoles, "display", "block");
						domStyle.set(this.p8displayRecentTeamspacesConfig, "display", "block");
						domStyle.set(this.p8TeamspaceTaskConfig, "display", "none");	
						} else {
						domStyle.set(this.p8TeamspaceTaskConfig, "display", "block");	
						domStyle.set(this.p8TeamspaceRecentRoles, "display", "block");
						domStyle.set(this.p8displayRecentTeamspacesConfig, "display", "block");
					}
				} else {
					this.p8DisableWorkspaces.set('checked', true);
					domStyle.set(this._p8TeamspaceAccessControlContainer, "display", "none");
					domStyle.set(this.p8TeamspaceTaskConfig, "display", "none");
					domStyle.set(this.p8TeamspaceRecentRoles, "display", "none");
					domStyle.set(this.p8displayRecentTeamspacesConfig, "display", "none");
				}

				this._p8RedactionEditorDataPane.set("levels", addOnPermissionLevels);
				this._p8RedactionEditorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getRedactionPermissions()));

				this._p8RedactionPolicyEditorDataPane.set("levels", addOnPermissionLevels);
				this._p8RedactionPolicyEditorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getRedactionPolicyPermissions()));
				this._p8RedactionPolicyEditorDataPane.render();
				
				if (this.repositoryData.repositoryConfig.getRedactionEnabled()) {
					this.p8EnableRedaction.set('checked', true);
					domStyle.set(this._p8BurnPDFToPDF, "display", "block");
					domStyle.set(this._p8RedactionAccessControlContainer, "display", "block");
					domStyle.set(this._p8RedactionAllowMergeSplitContainer, "display", "block");
				} else {
					this.p8DisableRedaction.set('checked', true);
					domStyle.set(this._p8BurnPDFToPDF, "display", "none");
					domStyle.set(this._p8RedactionAccessControlContainer, "display", "none");
					domStyle.set(this._p8RedactionAllowMergeSplitContainer, "display", "none");
				}
				
				if (this.repositoryData.repositoryConfig.getBurnPDFToPDF()) {
					this.p8BurnPDFToPDF.set('checked', true);
				} else {
					this.p8BurnPDFToTIFF.set('checked', true);
				}
				this.p8RedactionAllowMergeSplit.set('checked', this.repositoryData.repositoryConfig.getRedactionAllowMergeSplit());

				this._p8EntryTemplateCreatorDataPane.set("levels", addOnPermissionLevels);
				this._p8EntryTemplateCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getEntryTemplatePermissions()));
				this._p8EntryTemplateCreatorDataPane.render();
				if (this.repositoryData.repositoryConfig.getEntryTemplatesEnabled()) {
					this.p8EnableEntryTemplate.set('checked', true);
					domStyle.set(this._p8EntryTemplateAccessControlContainer, "display", "table-row");
				} else {
					this.p8DisableEntryTemplate.set('checked', true);
					domStyle.set(this._p8EntryTemplateAccessControlContainer, "display", "none");
				}

				if (this.repositoryData.repositoryConfig.getSyncEnabled()) {
					this.p8EnableSyncService.set('checked', true);
				} else {
					this.p8DisableSyncService.set('checked', true);
				}
				
				if (!this.repositoryData.syncEnabled) {
					this.p8DisableSyncService.set('checked', true);
					this.p8EnableSyncService.set('disabled', true);
					this.p8DisableSyncService.set('disabled', true);
				}

				if (this.repositoryData.repositoryConfig.getApprovalWorkflowEnabled()) {
					this.p8EnableApprovalWorkflow.set('checked', true);
				} else {
					this.p8DisableApprovalWorkflow.set('checked', true);
				}

				domStyle.set(this._p8EnableBoxShareContainer, "display", this.repositoryData.abstractPersistableSupported ? "table-row" : "none");
				if (this.repositoryData.repositoryConfig.getBoxShareEnabled()) {
					this.p8EnableBoxShare.set('checked', true);
				} else {
					this.p8DisableBoxShare.set('checked', true);
				}
				this._onP8BoxShareChange();

				if (this.repositoryData.repositoryConfig.getBoxCopyEnabled()) {
					this.p8EnableBoxCopy.set('checked', true);
				} else {
					this.p8DisableBoxCopy.set('checked', true);
				}
				this._onP8BoxCopyChange();

				this.p8UpdateTeamspaceRoles.set('checked', this.repositoryData.repositoryConfig.getTeamspaceOwnerModifyRoles());
				this.p8DisplayRecentTeamspaces.set('checked', this.repositoryData.repositoryConfig.getDisplayRecentTeamspaces());

				var enableRecentTeamspaces = this.p8DisplayRecentTeamspaces.get('checked');
				if (enableRecentTeamspaces) {
					domStyle.set(this.p8teamspaceRecentListConfig, "display", "inline-block");
					this.p8DisplayRecentTeamspacesValue.set('value', this.repositoryData.repositoryConfig.getDisplayRecentTeamspacesValue());
					if (!this.repositoryData.repositoryConfig.getDisplayRecentTeamspacesValue())
						this.p8DisplayRecentTeamspacesValue.set('value', 30);
				}

				this.p8TaskMgrProxyUserId.set('value', this.repositoryData.repositoryConfig.getTaskManagerProxyUserId());
				this.p8TaskMgrProxyUserPwd.set('value', this.repositoryData.repositoryConfig.getTaskManagerProxyUserPwd());
				this._onP8TaskManagerProxyChange();

				this.p8EnableTaskManagerDelete.set('checked', this.repositoryData.repositoryConfig.getEnableTaskManagerDelete());
				this._onP8EnableTeamspaceDeleteTask();

				if (!this.repositoryData.repositoryConfig.getAddAsMajorVersion()) {
					this.disableAddAsMajorVersion.set('checked', true);
				} else {
					this.enableAddAsMajorVersion.set('checked', true);
				}
				if (!this.repositoryData.repositoryConfig.getCheckinAsMajorVersion()) {
					this.disableCheckinAsMajorVersion.set('checked', true);
				} else {
					this.enableCheckinAsMajorVersion.set('checked', true);
				}
				if (this.repositoryData.repositoryConfig.getAnnotationSecurity() == "default") {
					this.defaultAnnotationSecurity.set('checked', true);
				} else {
					this.inheritAnnotationSecurity.set('checked', true);
				}
				this._setP8ConnectionPointField(this.repositoryData.p8ConnectionPoints, this.repositoryData.repositoryConfig.getConnectionPoint());
				if (!this.repositoryData.repositoryConfig.getIncludeWorkflowDefinition()) {
					this.disableIncludeWorkflowDefinition.set('checked', true);
				} else {
					this.enableIncludeWorkflowDefinition.set('checked', true);
				}
				if (!this.repositoryData.repositoryConfig.getIncludeFormTemplate()) {
					this.disableIncludeFormTemplate.set('checked', true);
				} else {
					this.enableIncludeFormTemplate.set('checked', true);
				}
				this.p8StatusDocCheckedOut.set('checked', this.repositoryData.repositoryConfig.getStatusDocCheckedOut());
				this.p8StatusDocDeclaredRecords.set('checked', this.repositoryData.repositoryConfig.getStatusDocDeclaredRecord());
				this.p8StatusDocMinorVersions.set('checked', this.repositoryData.repositoryConfig.getStatusDocMinorVersions());
				this.p8StatusDocCompoundDocument.set('checked', this.repositoryData.repositoryConfig.getStatusDocCompoundDocument());
				this.p8StatusWorkItemLocked.set('checked', this.repositoryData.repositoryConfig.getStatusWorkItemLocked());
				this.p8StatusWorkItemDeadline.set('checked', this.repositoryData.repositoryConfig.getStatusWorkItemDeadline());
				if (this.repositoryData.appServerType && this.repositoryData.appServerType == "jboss") {
					domStyle.set(this.p8EnableSyncServiceRow, "display", "none");
					this.p8DisableSyncService.set('checked', true);
				}
			} else if (this.repositoryData.type == "od") {
				if (this.repositoryData.repositoryConfig.getUseSSO()) {
					this.enableODSSO.set('checked', true);
				} else {
					this.disableODSSO.set('checked', true);
				}

				this.afp2pdfConfigFile.set('value', this.repositoryData.repositoryConfig.getAfp2PdfConfigFile() ? this.repositoryData.repositoryConfig.getAfp2PdfConfigFile() : "");
				this.transformXMLFile.set('value', this.repositoryData.repositoryConfig.getTransformXMLFile() ? this.repositoryData.repositoryConfig.getTransformXMLFile() : "");
				this.odStatusDocHold.set('checked', this.repositoryData.repositoryConfig.getStatusDocHold());
				this.odStatusDocNotes.set('checked', this.repositoryData.repositoryConfig.getStatusDocNotes());
				this.initializeCustomPropertiesGrid();
			} else if (this.repositoryData.type == "ci") {
			} else if (this.repositoryData.type == "cmis") {
				/* if (this.repositoryData.repositoryConfig.getUseGzipEncoding() ) {
					this.useGzipEncoding.set('checked', true);
				} else {
					this.useGzipEncoding.set('checked', false);
				} */
				if (!this.repositoryData.repositoryConfig.getAddAsMajorVersion()) {
					this.cmisDisableAddAsMajorVersion.set('checked', true);
				} else {
					this.cmisEnableAddAsMajorVersion.set('checked', true);
				}
				if (!this.repositoryData.repositoryConfig.getCheckinAsMajorVersion()) {
					this.cmisDisableCheckinAsMajorVersion.set('checked', true);
				} else {
					this.cmisEnableCheckinAsMajorVersion.set('checked', true);
				}
				this.cmisStatusDocCheckedOut.set('checked', this.repositoryData.repositoryConfig.getStatusDocCheckedOut());
				this.cmisStatusDocMinorVersions.set('checked', this.repositoryData.repositoryConfig.getStatusDocMinorVersions());
			} else {
				// custom repository type
				this._buildPluginConfigPane();
				if (this._configDijit) {
					this._configDijit.load(this.repositoryData.repositoryConfig);
				}
			}
			this._enableTypeData(this.repositoryData.type);
			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 600);

			if (onComplete)
				onComplete();
		},

		_foundProperty: function(name, properties) {
			for (var i = 0; i < properties.length; i++) {
				if (name && properties[i].value && properties[i].value == name)
					return true;
			}
			return false;
		},

		_onDownloadRecordingEnable: function() {
			domClass.remove(this.downloadRecordingUsers, "dijitHidden");
			this._onFieldChange();
		},

		_onDownloadRecordingDisable: function() {
			domClass.add(this.downloadRecordingUsers, "dijitHidden");
			this._onFieldChange();
		},

		_onSelectDownloadRecordingUser: function() {
			this._showSelectUsersDialog(this._downloadUsers, lang.hitch(this, function() {
				this.onMarkDirty();
				this._downloadUsersPane.render();
			}));
		},

		/**
		 * @private Shows the add users dialog.
		 */
		_showSelectUsersDialog: function(data, callback, scope) {
			if (!scope)
				scope = "users";

			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._selectUsersDialog) {
					this._selectUsersDialog.destroy();
				}
				this._selectUsersDialog = new SelectUserGroupDialog({
					defaultScope: scope,
					filteredItems: data,
					callback: lang.hitch(this, lang.hitch(this, function(selectedMembers) {
						for ( var j in selectedMembers) {
							data.push(selectedMembers[j]);
						}
						if (callback) {
							callback();
						}
					}))
				});
				this._selectUsersDialog.show(repository);
			}
		},

		/**
		 * @private Shows the add users dialog.
		 */
		_showSelectUserGroupPermissionDialog: function(data, callback, defaultPermission, showPseudoGroups) {
			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._userGroupPermissionDialog) {
					this._userGroupPermissionDialog.destroy();
				}

				var permissions = [];
				var selectedUserGroups = [];
				array.forEach(data, lang.hitch(this, function(accessControlItem) {
					// If the access level is selectable, add the access level id and label to the list.
					if (accessControlItem.selectable) {
						permissions.push({
							value: accessControlItem.id,
							label: accessControlItem.label
						});
					}
					array.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup) {
						selectedUserGroups.push(userGroup);
					}));
				}));

				this._userGroupPermissionDialog = new UserGroupPermissionDialog({
					permissions: permissions,
					filteredItems: selectedUserGroups,
					defaultScope: "groups",
					defaultPermission: defaultPermission,
					showPseudoGroups: showPseudoGroups && repository.type == "p8" ? true : false,
					repository: repository,
					callback: lang.hitch(this, function(permissionId, selectedUserGroups) {
						for ( var j in data) {
							var accessControlItem = data[j];
							if (accessControlItem.id == permissionId) {
								for (k in selectedUserGroups) {
									var group = lang.mixin({
										accessMask: accessControlItem.accessMask,
										accessType: Permission.ACCESS_TYPE.ALLOW,
										permissionSource: Permission.PERMISSION_SOURCE.DIRECT,
										inheritableDepth: 0
									}, selectedUserGroups[k]);
									accessControlItem.usersGroups.push(group);
								}
								break;
							}
						}
						if (callback) {
							callback();
						}
					})
				});
				this._userGroupPermissionDialog.show(repository);
			}
		},

		_openUserGroupPermissionsDialog: function(data, pane, defaultPermission, showPseudoGroups) {
			this._showSelectUserGroupPermissionDialog(data, lang.hitch(this, function() {
				pane.set("userGroupData", data);
				this.onMarkDirty();
				pane.render();
			}), defaultPermission, showPseudoGroups);
		},

		_selectTeamspaceTemplateUserGroupClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmTeamspaceTemplateCreatorDataPane.get("userGroupData"), this._cmTeamspaceTemplateCreatorDataPane);
			} else if (this.repositoryData.type == "p8") {
				this._openUserGroupPermissionsDialog(this._p8TeamspaceTemplateCreatorDataPane.get("userGroupData"), this._p8TeamspaceTemplateCreatorDataPane, null, true);
			}
		},

		_selectTeamspaceUserGroupClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmTeamspaceCreatorDataPane.get("userGroupData"), this._cmTeamspaceCreatorDataPane);
			} else if (this.repositoryData.type == "p8") {
				this._openUserGroupPermissionsDialog(this._p8TeamspaceCreatorDataPane.get("userGroupData"), this._p8TeamspaceCreatorDataPane, null, true);
			}
		},

		_selectRedactionUserGroupClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmRedactionEditorDataPane.get("userGroupData"), this._cmRedactionEditorDataPane);
			} else if (this.repositoryData.type == "p8") {
				this._openUserGroupPermissionsDialog(this._p8RedactionEditorDataPane.get("userGroupData"), this._p8RedactionEditorDataPane, null, false);
			}
		},

		_selectRedactionPolicyEditorClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmRedactionPolicyEditorDataPane.get("userGroupData"), this._cmRedactionPolicyEditorDataPane);
			} else if (this.repositoryData.type == "p8") {
				this._openUserGroupPermissionsDialog(this._p8RedactionPolicyEditorDataPane.get("userGroupData"), this._p8RedactionPolicyEditorDataPane, null, false);
			}
		},

		_selectEntryTemplateUserGroupClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmEntryTemplateCreatorDataPane.get("userGroupData"), this._cmEntryTemplateCreatorDataPane);
			} else if (this.repositoryData.type == "p8") {
				this._openUserGroupPermissionsDialog(this._p8EntryTemplateCreatorDataPane.get("userGroupData"), this._p8EntryTemplateCreatorDataPane, null, true);
			}
		},

		_onFieldCMNameChange: function() {
			if (this._init) {
				this.onMarkDirty();
			}
		},

		onRadioCmNameNone: function() {
			this.cmNameProperty.set("disabled", true);
			if (!this.cmNameProperty.get('value')) {
				this.cmNameProperty.reset();
			}
			this._onFieldChange();
		},

		onRadioCmNameEnabled: function() {
			this.cmNameProperty.set("disabled", false);
			this._onFieldChange();
		},

		/*
		 * @private
		 */
		_onShowRecentTeamspaces: function() {
			if (this.p8DisplayRecentTeamspaces) {
				var enableRecentTeamspaces = this.p8DisplayRecentTeamspaces.get('checked');
				if (enableRecentTeamspaces) {
					domStyle.set(this.p8teamspaceRecentListConfig, "display", "inline-block");
					var recentValue = this.p8DisplayRecentTeamspacesValue.get('value');
					if (!recentValue) {
						if (!this.repositoryData.repositoryConfig.getDisplayRecentTeamspacesValue() || this.repositoryData.repositoryConfig.getDisplayRecentTeamspacesValue() == 0)
							this.p8DisplayRecentTeamspacesValue.set('value', 30);
					}
				} else
					domStyle.set(this.p8teamspaceRecentListConfig, "display", "none");
				this._onFieldChange();
			}
		},

		_onP8BoxShareChange: function() {
			if (this.p8EnableBoxShare.get("checked")) {
				if (!this.taskManagerIsConfigured) {
					domAttr.set(this.p8BoxShareInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.p8BoxShareMessageText.innerHTML = this.messages.admin_task_manager_not_enabled_and_user_warning;
					domClass.remove(this.p8BoxShareInlineMessage, "dijitHidden");

				} else if (!this.p8TaskMgrProxyUserId.get('value') || !this.p8TaskMgrProxyUserPwd.get('value')) {
					domAttr.set(this.p8BoxShareInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.p8BoxShareMessageText.innerHTML = this.messages.admin_task_manager_user_id_pw_not_set_warning;
					domClass.remove(this.p8BoxShareInlineMessage, "dijitHidden");

				} else {
					domClass.add(this.p8BoxShareInlineMessage, "dijitHidden");
				}
			} else {
				domClass.add(this.p8BoxShareInlineMessage, "dijitHidden");
			}
			if (this._init) {
				this._onFieldChange();
			}
		},

		_onP8BoxCopyChange: function() {
			/* if (this.p8EnableBoxCopy.get("checked")) {
				if (!this.taskManagerIsConfigured) {
					domAttr.set(this.p8BoxCopyInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.p8BoxCopyMessageText.innerHTML = this.messages.admin_task_manager_not_enabled_and_user_warning;
					domClass.remove(this.p8BoxCopyInlineMessage, "dijitHidden");

				} else if (!this.p8TaskMgrProxyUserId.get('value') || !this.p8TaskMgrProxyUserPwd.get('value')) {
					domAttr.set(this.p8BoxCopyInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.p8BoxCopyMessageText.innerHTML = this.messages.admin_task_manager_user_id_pw_not_set_warning;
					domClass.remove(this.p8BoxCopyInlineMessage, "dijitHidden");

				} else {
					domClass.add(this.p8BoxCopyInlineMessage, "dijitHidden");
				}
			} else {
				domClass.add(this.p8BoxCopyInlineMessage, "dijitHidden");
			} */
			if (this._init) {
				this._onFieldChange();
			}
		},

		_onCmBoxShareChange: function() {
			if (this.cmEnableBoxShare.get("checked")) {
				if (!this.taskManagerIsConfigured) {
					domAttr.set(this.cmBoxShareInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.cmBoxShareMessageText.innerHTML = this.messages.admin_task_manager_not_enabled_and_user_warning;
					domClass.remove(this.cmBoxShareInlineMessage, "dijitHidden");

				} else if (!this.cmTaskMgrProxyUserId.get('value') || !this.cmTaskMgrProxyUserPwd.get('value')) {
					domAttr.set(this.cmBoxShareInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.cmBoxShareMessageText.innerHTML = this.messages.admin_task_manager_user_id_pw_not_set_warning;
					domClass.remove(this.cmBoxShareInlineMessage, "dijitHidden");
				} else {
					domClass.add(this.cmBoxShareInlineMessage, "dijitHidden");
				}
				domStyle.set(this._cmBoxShareEnabledClassesContainer, "display", "table-row");
				// This is needed for the entry template enabled classes widget.
				this.resize();
			} else {
				domStyle.set(this._cmBoxShareEnabledClassesContainer, "display", "none");
				domClass.add(this.cmBoxShareInlineMessage, "dijitHidden");
			}
			if (this._init) {
				this._onFieldChange();
			}
		},

		_onCmBoxCopyChange: function() {
			/* if (this.cmEnableBoxCopy.get("checked")) {
				if (!this.taskManagerIsConfigured) {
					domAttr.set(this.cmBoxCopyInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.cmBoxCopyMessageText.innerHTML = this.messages.admin_task_manager_not_enabled_and_user_warning;
					domClass.remove(this.cmBoxCopyInlineMessage, "dijitHidden");

				} else if (!this.cmTaskMgrProxyUserId.get('value') || !this.cmTaskMgrProxyUserPwd.get('value')) {
					domAttr.set(this.cmBoxCopyInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.cmBoxCopyMessageText.innerHTML = this.messages.admin_task_manager_user_id_pw_not_set_warning;
					domClass.remove(this.cmBoxCopyInlineMessage, "dijitHidden");

				} else {
					domClass.add(this.cmBoxCopyInlineMessage, "dijitHidden");
				}
			} else {
				domClass.add(this.cmBoxCopyInlineMessage, "dijitHidden");
			} */
			if (this._init) {
				this._onFieldChange();
			}
		},

		_onP8TaskManagerProxyChange: function() {
			if (this._init) {
				this._onP8BoxShareChange();
				this._onP8BoxCopyChange();
				this._onP8EnableTeamspaceDeleteTask();

				this._onFieldChange();
			}
		},

		_onCmTaskManagerProxyChange: function() {
			if (this._init) {
				this._onCmBoxShareChange();
				this._onCmBoxCopyChange();
				this._onCmEnableTeamspaceDeleteTask();

				this._onFieldChange();
			}
		},

		/**
		 * @private
		 */
		_onCmEnableTeamspaceDeleteTask: function() {
			if (this.cmEnableTaskManagerDelete.get('checked')) {
				if (!this.taskManagerIsConfigured) {
					domAttr.set(this.cmTaskMgrTeamspaceDeleteInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.cmTaskMgrTeamspaceDeleteMessageText.innerHTML = this.messages.admin_task_manager_not_enabled_and_user_warning;
					domClass.remove(this.cmTaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");

				} else if (!this.cmTaskMgrProxyUserId.get('value') || !this.cmTaskMgrProxyUserPwd.get('value')) {
					domAttr.set(this.cmTaskMgrTeamspaceDeleteInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.cmTaskMgrTeamspaceDeleteMessageText.innerHTML = this.messages.admin_task_manager_user_id_pw_not_set_warning;
					domClass.remove(this.cmTaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");

				} else {
					domClass.add(this.cmTaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");
				}
			} else {
				domClass.add(this.cmTaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");
			}
			if (this._init) {
				this._onFieldChange();
			}
		},

		/**
		 * @private
		 */
		_onP8EnableTeamspaceDeleteTask: function() {
			if (this.p8EnableTaskManagerDelete.get('checked')) {
				if (!this.taskManagerIsConfigured) {
					domAttr.set(this.p8TaskMgrTeamspaceDeleteInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.p8TaskMgrTeamspaceDeleteMessageText.innerHTML = this.messages.admin_task_manager_not_enabled_and_user_warning;
					domClass.remove(this.p8TaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");

				} else if (!this.p8TaskMgrProxyUserId.get('value') || !this.p8TaskMgrProxyUserPwd.get('value')) {
					domAttr.set(this.p8TaskMgrTeamspaceDeleteInlineMessage, "class", "inlineMessage inlineMessageWarning");
					this.p8TaskMgrTeamspaceDeleteMessageText.innerHTML = this.messages.admin_task_manager_user_id_pw_not_set_warning;
					domClass.remove(this.p8TaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");

				} else {
					domClass.add(this.p8TaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");
				}
			} else {
				domClass.add(this.p8TaskMgrTeamspaceDeleteInlineMessage, "dijitHidden");
			}
			if (this._init) {
				this._onFieldChange();
			}
		},

		/**
		 * Set selected item in an array to be selected
		 */
		_loadSelection: function(control, options) {
			var currentValue = control.get('value');
			for ( var i in options) {
				options[i].id = options[i].value;
			}
			control.set("store", new MemoryStore({
				data: options
			}));
			control.set('value', (currentValue != null) ? currentValue : "");
			this._onFieldChange();
		},

		/**
		 * Load the language codes available grid.
		 */
		_loadLanguageCodeSelectableFields: function(availableCodes, selectedCodes) {
			var itemArray = [];
			for (var i = 0; i < availableCodes.length; i++) {
				itemArray.push({
					"id": availableCodes[i],
					"label": availableCodes[i],
					"value": availableCodes[i]
				});
			}
			this.availableLanguageCodeStore = new MemoryStore({
				data: itemArray
			});
			var availableLanguageStructure = [
				{
					field: "label",
					name: ecm.messages.admin_repcfg_language_codes_avail,
					width: "100%"
				}
			];
			this.languageCodes.setAvailableGridData(this.availableLanguageCodeStore, availableLanguageStructure);
			this._loadLanguageCodeSelectedFields(selectedCodes);
		},

		/**
		 * Load the language codes selected grid.
		 */
		_loadLanguageCodeSelectedFields: function(codes) {
			var langArray = [];
			if (codes instanceof Array)
				langArray = codes;
			else {
				if (codes != "") {
					langArray[0] = codes;
				}
			}

			var itemArray = [];
			for (var i = 0; i < langArray.length; i++) {
				itemArray.push({
					"id": langArray[i],
					"label": langArray[i],
					"value": langArray[i]
				});
			}
			this.selectedLanguageCodesStore = new MemoryStore({
				data: itemArray
			});
			var selectedLanguageStructure = [
				{
					field: "label",
					name: ecm.messages.admin_repcfg_language_codes_sel,
					width: "100%"
				}
			];
			this.languageCodes.setSelectedGridData(this.selectedLanguageCodesStore, selectedLanguageStructure);
		},

		/**
		 * Get the language codes selected grid values.
		 */
		_getLanguageCodeSelectedFields: function() {
			var items = this.languageCodes.getSelectedItems();
			var values = [];
			for (var i = 0; i < items.length; i++) {
				values.push(items[i].value);
			}
			return values;
		},

		_setP8ConnectionPointField: function(list, value) {
			var storeData = [];
			for (var i = 0; i < list.length; i++) {
				storeData.push({
					"id": list[i],
					"label": list[i]
				});
			}
			this.connectionPoint.set("store", new MemoryStore({
				data: storeData
			}));
			this.connectionPoint.set('value', value);
		},

		initializeCustomPropertiesGrid: function() {
			this.setupCustomPropertiesGrid(this.loadCustomProperties());
			this._checkGridButtons();
			this.resize();
		},

		refreshCMEntryTemplateEnabledClasses: function() {
			// If changes were selected for item types...
			var changesSelected = false;
			if (this.cmEnableEntryTemplate.get('checked')) {
				var selectedClasses = this._cmEntryTemplateEnabledClasses.getSelectedItems();
				for (var i = 0; i < selectedClasses.length; i++) {
					var selectedClass = selectedClasses[i];

					if (!selectedClass.supportsEntryTemplateTracking && selectedClass.enableETTracking) {
						changesSelected = true;
						break;
					}
					if (!selectedClass.supportsEntryTemplateFolderAssociations && selectedClass.enableETFolderAssociations) {
						changesSelected = true;
						break;
					}
				}
			}
			if (changesSelected) {
				// Clear the repository content classes cache and reload.
				this.repositoryData.repository.clearContentClassesCache();
				this._loadCMEntryTemplateEnabledClasses();
			}
		},

		refreshCMBoxShareEnabledClasses: function() {
			// If changes were selected for item types...
			var changesSelected = false;
			if (this.cmEnableBoxShare.get('checked')) {
				var selectedClasses = this._cmBoxShareEnabledClasses.getSelectedItems();
				for (var i = 0; i < selectedClasses.length; i++) {
					var selectedClass = selectedClasses[i];

					if (!selectedClass.supportsBoxShareTracking && selectedClass.enableBoxShareTracking) {
						changesSelected = true;
						break;
					}
				}
			}
			if (changesSelected) {
				// Clear the repository content classes cache and reload.
				this.repositoryData.repository.clearContentClassesCache();
				this._loadCMBoxShareEnabledClasses();
			}
		},

		resize: function(changeSize) {
			this.inherited(arguments);
			this._cmEntryTemplateEnabledClasses.resize();
			this._cmBoxShareEnabledClasses.resize();
		},

		_loadCMBoxShareEnabledClasses: function() {
			this.logEntry("_loadCMBoxShareEnabledClasses");

			var repository = this.repositoryData.repository;

			repository.retrieveContentClasses(lang.hitch(this, function(contentClasses) {

				var availStructure = [
					{
						field: "name",
						name: this.messages.admin_repcfg_box_share_enable_classes_available,
						width: "100%",
					}
				];

				var availableClasses = [];
				var selectedClasses = [];
				var fixedClasses = [];
				for ( var i in contentClasses) {
					var contentClass = lang.mixin({}, contentClasses[i]);
					if (repository._isCM() && contentClass.id == "ICMEntryTemplate") {
						continue;
					}
					// If no support is enabled, this is an available class.
					if (!contentClass.supportsBoxShareTracking) {
						// This option will be enabled when the class is added to the right side.
						contentClass.enableBoxShareTracking = true;
						availableClasses.push(contentClass);
					} else { // ... this is a selected class.
						contentClass.enableBoxShareTracking = contentClass.supportsBoxShareTracking;
						selectedClasses.push(contentClass);
						fixedClasses.push(contentClass.id);
					}
				}

				var availStore = new MemoryStore({
					data: availableClasses
				});
				this._cmBoxShareEnabledClasses.setAvailableGridData(availStore, availStructure);

				var self = this;
				var selectedStructure = [
					{
						field: "name",
						name: self.messages.admin_repcfg_box_share_enable_classes_selected,
						width: "45%"
					}

				];

				var selectedStore = new MemoryStore({
					data: selectedClasses
				});
				this._cmBoxShareEnabledClasses.setSelectedGridData(selectedStore, selectedStructure, fixedClasses);

				// Adds hover help to the Box Share tracking header
				var trackingHeaderNode = this._cmBoxShareEnabledClasses.selectedGrid.header.getHeaderNode(this.id + "_cmBoxShareEnabledClassesTrackingHeader");
				if (trackingHeaderNode) {
					var trackingHoverHelp = new HoverHelp();
					trackingHoverHelp.message = this.messages.admin_repcfg_box_share_enable_classes_tracking_hover;
					trackingHoverHelp.startup();
					var trackingHoverHelpNode = query("[id=\"" + this.id + "_cmBoxShareEnabledClassesTrackingHeaderHoverHelp" + "\"]", trackingHeaderNode);
					trackingHoverHelpNode[0].appendChild(trackingHoverHelp.domNode);
					this.connect(trackingHeaderNode, "onkeypress", lang.hitch(this, function(evt) {
						if (evt.ctrlKey && evt.charOrCode == keys.F1) {
							trackingHoverHelp.openDropDownDialog();
							event.stop(evt);
						}
					}));
				}

				this.logExit("setupBoxShareEntryTemplateEnabledClassesGrid");
			}), "createDocumentOrFolder");

			this.resize();
		},
		_loadCMEntryTemplateEnabledClasses: function() {
			this.logEntry("_loadCMEntryTemplateEnabledClasses");

			var repository = this.repositoryData.repository;

			repository.retrieveContentClasses(lang.hitch(this, function(contentClasses) {

				var availStructure = [
					{
						field: "name",
						name: this.messages.admin_repcfg_entry_template_enable_classes_available,
						width: "100%",
					}
				];

				var availableClasses = [];
				var selectedClasses = [];
				var fixedClasses = [];
				for ( var i in contentClasses) {
					var contentClass = lang.mixin({}, contentClasses[i]);
					if ((repository._isP8() && contentClass.id == "EntryTemplate") || (repository._isCM() && contentClass.id == "ICMEntryTemplate")) {
						continue;
					}
					// If no support is enabled, this is an available class.
					if (!contentClass.supportsEntryTemplateTracking && !contentClass.supportsEntryTemplateFolderAssociations) {
						// This option will be enabled when the class is added to the right side.
						contentClass.enableETTracking = true;
						// This option will be enabled when the class is added to the right side if the class is for hierarchical folders.
						contentClass.enableETFolderAssociations = contentClass.hierarchical && contentClass.forFoldersOnly;
						availableClasses.push(contentClass);
					} else { // ... this is a selected class.
						contentClass.enableETTracking = contentClass.supportsEntryTemplateTracking;
						contentClass.enableETFolderAssociations = contentClass.supportsEntryTemplateFolderAssociations;
						selectedClasses.push(contentClass);
						fixedClasses.push(contentClass.id);
					}
				}

				var availStore = new MemoryStore({
					data: availableClasses
				});
				this._cmEntryTemplateEnabledClasses.setAvailableGridData(availStore, availStructure);

				var self = this;
				var selectedStructure = [
					{
						field: "name",
						name: self.messages.admin_repcfg_entry_template_enable_classes_selected,
						width: "45%"
					},
					{
						field: "enableETTracking",
						id: this.id + "_cmEntryTemplateEnabledClassesTrackingHeader",
						name: "<span>" + self.messages.admin_repcfg_entry_template_enable_classes_tracking_col_label + "</span>&nbsp;<span id=\"" + this.id + "_cmEntryTemplateEnabledClassesTrackingHeaderHoverHelp\"/>",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						width: "auto",
						decorator: function() {
							return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="enableETTrackingCb"/>';
						},
						setCellValue: function(data, storeData, cellWidget) {
							if (!this.enableETTrackingCb) {
								return;
							}
							var disabled = false;
							var item = cellWidget.cell.row.item();

							if (item) {
								if (item.supportsEntryTemplateTracking) {
									this.enableETTrackingCb.set("title", self.messages.admin_repcfg_entry_template_enable_classes_tracking_enabled_title);
									disabled = true;
								}
							} else {
								disabled = true;
							}

							this.enableETTrackingCb.set("disabled", disabled);
							this.enableETTrackingCb.set("checked", data);
						}
					},
					{
						field: "enableETFolderAssociations",
						id: this.id + "_cmEntryTemplateEnabledClassesFolderAssociationsHeader",
						name: "<span>" + self.messages.admin_repcfg_entry_template_enable_classes_folder_associations_col_label + "</span>&nbsp;<span id=\"" + this.id + "_cmEntryTemplateEnabledClassesFolderAssociationsHeaderHoverHelp\"/>",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						width: "auto",
						decorator: function() {
							return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="enableETFolderAssociationsCb"/>';
						},
						setCellValue: function(data, storeData, cellWidget) {
							if (!this.enableETFolderAssociationsCb) {
								return;
							}
							var disabled = false;
							var item = cellWidget.cell.row.item();
							if (item) {
								if (item.supportsEntryTemplateFolderAssociations ) {
									this.enableETFolderAssociationsCb.set("title", self.messages.admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title);
									disabled = true;
								} else if (item.hierarchical && !item.forFoldersOnly) {
									this.enableETFolderAssociationsCb.set("title", self.messages.admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title);
									disabled = true;
								}
							} else {
								disabled = true;
							}

							// Can't change it if is already enabled, or is not a hierarchical folder.
							if (!item || item.supportsEntryTemplateFolderAssociations || !item.hierarchical || !item.forFoldersOnly) {
							}
							this.enableETFolderAssociationsCb.set("disabled", disabled);
							this.enableETFolderAssociationsCb.set("checked", data);
						}
					}
				];

				var selectedStore = new MemoryStore({
					data: selectedClasses
				});
				this._cmEntryTemplateEnabledClasses.setSelectedGridData(selectedStore, selectedStructure, fixedClasses);

				this.own(aspect.after(this._cmEntryTemplateEnabledClasses.selectedGrid, "onCellClick", lang.hitch(this, function(evt) {
					var grid = this._cmEntryTemplateEnabledClasses.selectedGrid;
					if (evt.columnIndex == 1) {
						var disabled = grid.cell(evt.rowId, evt.columnId).widget().enableETTrackingCb.get("disabled");
						if (!disabled) {
							this._toggleCheckbox(grid, "enableETTracking", evt);
						}
					} else if (evt.columnIndex == 2) {
						var disabled = grid.cell(evt.rowId, evt.columnId).widget().enableETFolderAssociationsCb.get("disabled");
						if (!disabled) {
							this._toggleCheckbox(grid, "enableETFolderAssociations", evt);
						}
					}
				}), true));
				this.own(aspect.after(this._cmEntryTemplateEnabledClasses.selectedGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
					var grid = this._cmEntryTemplateEnabledClasses.selectedGrid;
					if (evt.columnIndex == 1 && evt.keyCode == keys.SPACE) {
						var disabled = grid.cell(evt.rowId, evt.columnId).widget().enableETTrackingCb.get("disabled");
						if (!disabled) {
							this._toggleCheckbox(grid, "enableETTracking", evt);
						}
					} else if (evt.columnIndex == 2 && evt.keyCode == keys.SPACE) {
						var disabled = grid.cell(evt.rowId, evt.columnId).widget().enableETFolderAssociationsCb.get("disabled");
						if (!disabled) {
							this._toggleCheckbox(grid, "enableETFolderAssociations", evt);
						}
					}
				}), true));

				// Adds hover help to the entry template tracking header
				var trackingHeaderNode = this._cmEntryTemplateEnabledClasses.selectedGrid.header.getHeaderNode(this.id + "_cmEntryTemplateEnabledClassesTrackingHeader");
				if (trackingHeaderNode) {
					var trackingHoverHelp = new HoverHelp();
					trackingHoverHelp.message = this.messages.admin_repcfg_entry_template_enable_classes_tracking_hover;
					trackingHoverHelp.startup();
					var trackingHoverHelpNode = query("[id=\"" + this.id + "_cmEntryTemplateEnabledClassesTrackingHeaderHoverHelp" + "\"]", trackingHeaderNode);
					trackingHoverHelpNode[0].appendChild(trackingHoverHelp.domNode);
					this.connect(trackingHeaderNode, "onkeypress", lang.hitch(this, function(evt) {
						if (evt.ctrlKey && evt.charOrCode == keys.F1) {
							trackingHoverHelp.openDropDownDialog();
							event.stop(evt);
						}
					}));
				}

				// Adds hover help to the entry template folder associations header
				var folderAssociationsHeaderNode = this._cmEntryTemplateEnabledClasses.selectedGrid.header.getHeaderNode(this.id + "_cmEntryTemplateEnabledClassesFolderAssociationsHeader");
				if (folderAssociationsHeaderNode) {
					var folderAssociationsHoverHelp = new HoverHelp();
					folderAssociationsHoverHelp.message = this.messages.admin_repcfg_entry_template_enable_classes_folder_associations_hover;
					folderAssociationsHoverHelp.startup();
					var folderAssociationsHoverHelpNode = query("[id=\"" + this.id + "_cmEntryTemplateEnabledClassesFolderAssociationsHeaderHoverHelp" + "\"]", folderAssociationsHeaderNode);
					folderAssociationsHoverHelpNode[0].appendChild(folderAssociationsHoverHelp.domNode);
					this.connect(folderAssociationsHeaderNode, "onkeypress", lang.hitch(this, function(evt) {
						if (evt.ctrlKey && evt.charOrCode == keys.F1) {
							folderAssociationsHoverHelp.openDropDownDialog();
							event.stop(evt);
						}
					}));
				}

				this.logExit("setupCMEntryTemplateEnabledClassesGrid");
			}), "createDocumentOrFolder");

			this.resize();
		},

		_toggleCheckbox: function(grid, field, evt) {
			var item = grid.model.store.get(evt.rowId);
			if (item) {
				item[field] = !item[field];
				grid.model.store.put(item, {
					id: item.id,
					overwrite: true
				});

				//this.onMarkDirty();
				this._onFieldChange();
			}
		},

		/**
		 * Filter CM classes by class name.
		 */
		_cmEntryTemplateEnabledClassesFilter: function() {
			this.logEntry("_cmEntryTemplateEnabledClassesFilter");
			var filterData = this._cmEntryTemplateEnabledClassesAreaFilter.get("value");
			this._cmEntryTemplateEnabledClassesFilterData = filterData;
			this._cmEntryTemplateEnabledClasses.filter({
				name: filterData
			});
			this.logExit("_cmEntryTemplateEnabledClassesFilter");
		},

		/**
		 * Filter CM classes by class name.
		 */
		_cmBoxShareEnabledClassesFilter: function() {
			this.logEntry("_cmBoxShareEnabledClassesFilter");
			var filterData = this._cmBoxShareEnabledClassesAreaFilter.get("value");
			this._cmBoxShareEnabledClassesFilterData = filterData;
			this._cmBoxShareEnabledClasses.filter({
				name: filterData
			});
			this.logExit("_cmBoxShareEnabledClassesFilter");
		},

		/**
		 * Call back from the CM entry template classes enabled sloshBucket.
		 */
		_getCMEntryTemplateEnabledClassesGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.name));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.id_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.id));
				toolTip.push("</span></div>");
				return toolTip.join("");
			}
			return "";
		},

		/**
		 * Call back from the CM Box share classes enabled sloshBucket.
		 */
		_getCMBoxShareEnabledClassesGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.name));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.id_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.id));
				toolTip.push("</span></div>");
				return toolTip.join("");
			}
			return "";
		},

		setupCustomPropertiesGrid: function(items) {
			if (this._odCustomPropertiesGrid) {
				this._odCustomPropertiesGrid.destroy();
			}
			this._odCustomPropertiesGrid = new Grid({
				"aria-label": ecm.messages.admin_repcfg_custom_properties_label,
				region: "center",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: new MemoryStore({
					data: items
				}),
				structure: [
					{
						field: "name",
						name: this.messages.admin_repcfg_custom_head1,
						width: "40%"
					},
					{
						field: "value",
						name: this.messages.admin_repcfg_custom_head2,
						width: "60%"
					}
				],
				modules: [
					CellWidget,
					Focus,
					SelectRow,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 1,
								descending: false
							}
						]
					},
					{
						moduleClass: ExtendedSelectRow,
						triggerOnCell: true
					}
				]
			});
			domClass.add(this._odCustomPropertiesGrid.domNode, "compact gridxWholeRow");
			this.gridBorderContainer.addChild(this._odCustomPropertiesGrid);
			this._odCustomPropertiesGrid.startup();

			this.own(aspect.after(this._odCustomPropertiesGrid.select.row, "onSelectionChange", lang.hitch(this, "_checkGridButtons"), true));
			this.own(aspect.after(this._odCustomPropertiesGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._onFieldChange();
				setTimeout(lang.hitch(this, lang.hitch(this, function() {
					this._odCustomPropertiesGrid.vScroller.scrollToRow(this._odCustomPropertiesGrid.row(id).visualIndex() - 1, true);
				}), 1500));
			}), true));
			this.own(aspect.after(this._odCustomPropertiesGrid.model, "onDelete", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._odCustomPropertiesGrid.model, "onSet", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._odCustomPropertiesGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._editItem(this._odCustomPropertiesGrid.row(evt.rowIndex).item());
			}), true));
		},

		loadCustomProperties: function() {
			var itemArray = [];
			var customPropertiesString = this.repositoryData.repositoryConfig.getCustomProperties();
			if (customPropertiesString) {
				if (customPropertiesString != null) {
					if (customPropertiesString instanceof Array) {
						var ar = customPropertiesString;
						customPropertiesString = "";
						for (var i = 0; i < ar.length; i++) {
							customPropertiesString = customPropertiesString + ar[i];
							if (i < (ar.length - 1)) {
								customPropertiesString = customPropertiesString + ",";
							}
						}
					}
					itemArray = json.parse(customPropertiesString);
				}
			}
			for (var i = 0; i < itemArray.length; i++) {
				itemArray[i].id = "id_" + i;
			}
			return itemArray;
		},

		getCustomProperties: function() {
			var values = [];
			var items = this._odCustomPropertiesGrid.model.store.query({});
			for (var i = 0; i < items.length; i++) {
				var propertyName = items[i].name;
				var propertyValue = items[i].value;
				var replaceString = /\\/g;
				if (propertyName.indexOf("\\\\") == -1) {
					propertyName = propertyName.replace(replaceString, "\\\\");
				}
				if (propertyValue.indexOf("\\\\") == -1) {
					propertyValue = propertyValue.replace(replaceString, "\\\\");
				}
				values.push({
					"name": propertyName,
					"value": propertyValue
				});
			}
			return json.stringify(values);
		},

		initItemTypesSelector: function() {
			this._itemTypeSelector.set("disabled", false);
			var options = [];
			options.push({
				id: false,
				label: ecm.messages.allItemTypes
			});
			options.push({
				id: true,
				label: ecm.messages.documentItemTypesOnly
			});
			if (this.repositoryData.repositoryConfig.getDocModelOnlyEnabled() == true) {
				this._itemTypeSelector.set("value", ecm.messages.documentItemTypesOnly);
				options[1].selected = true;
			} else {
				this._itemTypeSelector.set("value", ecm.messages.allItemTypes);
				options[0].selected = true;
			}
			this._itemTypeSelector.set("store", new MemoryStore({
				data: options
			}));
		},

		initFolderSelector: function() {
			var folderId = this.repositoryData.repositoryConfig.getRootFolderId();
			if (this._folder == null) {
				//this._folderSelector.showIncludeSubFolders = true;
				//this._folderSelector.setIncludeSubfolders(false);
				this._folderSelector.showRepositoryTeamspace = false;
				var repository = this.repositoryData.repository;
				this._folderSelector.setRoot(repository, undefined, true);
				if (folderId && (folderId != null) && (folderId != "")) {
					repository.retrieveItem(folderId, lang.hitch(this, function(item) {
						this._folderSelector.setSelected(item);
						this._folder = item;
					}));
				} else {
					this._folderSelector.selectRootInitially = true;
					this._folder = this.getSelectedFolder();
				}
			} else if (this._folder != "") {
				this._folderSelector.setSelected(this._folder);
			}
			if (folderId && (folderId != null) && (folderId != "")) {
				this._enableFolderSelector.set('checked', true);
				this._folderSelector.setDisabled(false);
			} else {
				this._disableFolderSelector.set('checked', true);
				this._folderSelector.setDisabled(true);
			}
		},
		isDocumentModelOnly: function() {
			var value = "";
			if (this._itemTypeSelector) {
				value = this._itemTypeSelector.get("value");
				if (value == ecm.messages.allItemTypes)
					value = false;
				else
					value = true;
			}
			return value;

		},
		getSelectedFolder: function() {
			var folder = "";
			if (this._folderSelector) {
				//var selectedFolder = this._folderSelector.getSelected();
				//if (selectedFolder && (selectedFolder != null)) {
				folder = this._folderSelector.getSelected();
				//}
			}
			return folder;
		},

		getSelectedFolderId: function() {
			var folderId = "";
			if (this._folderSelector && this._enableFolderSelector && this._enableFolderSelector.get('checked')) {
				var folderselected = this._folderSelector.getSelected();
				if (folderselected && (folderselected != null)) {
					folderId = folderselected.id;
					//if (folder && (folder != null)) {
					//	folderId = folder.id;
					//}
				}
			}
			return folderId;
		},

		_enableTypeData: function(type) {
			domStyle.set(this.cmData, "display", "none");
			domStyle.set(this.odData, "display", "none");
			domStyle.set(this.ciData, "display", "none");
			domStyle.set(this.p8Data, "display", "none");
			domStyle.set(this.cmisData, "display", "none");
			domStyle.set(this.pluginData, "display", "none");
			if (type == "cm" || type == "p8" || type == "od" || type == "cmis") {
				domStyle.set(this[type + "Data"], "display", "");
				if (type == "cm" && this.repositoryData.isCM842) {
					domStyle.set(this.teamSpaceRow, "display", "none");
				} else if (type == "od" && this.repositoryData.isOD85) {
					domStyle.set(this.odSSOArea, "display", "none");
				}
				// Remove this when role-based redactions are supported on CM -->
				if (type == "cm") {
					domStyle.set(this.cmRedactionRow, "display", "none");
				}
				// <--- Remove this when role-based redactions are supported on CM
			} else {
				domStyle.set(this.pluginData, "display", "");
				this._buildPluginConfigPane();
			}
		},

		_buildPluginConfigPane: function() {
			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(types) {
				// find repositorytype (server object) that corresponds to the type for this repository
				for ( var i in types) {
					if (types[i].getType() == this.repositoryData.type) {
						var configDijit = types[i].getConnectedConfigClass();
						if (configDijit) {
							if (!this._configDijit) {
								require([
									configDijit.split('.').join('/')
								], lang.hitch(this, function(cls) {
									this._configDijit = new cls();
								}));
							}
							//						this._configDijit.load(this.repositoryData);
							connect.connect(this._configDijit, "onSaveNeeded", this, function() {
								this._pluginConfigDijitDirty = true;
								this.onMarkDirty();
							});
							this.pluginData.appendChild(this._configDijit.domNode);
							this._configDijit.startup();
						}
					}
				}
			}), {
				desktopId: this.id,
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId
			});
		},

		isResetingFields: function() {
			var isResetting = true;
			var type = this.repositoryData.type;
			if (type == "cm") {
				var reposDocName = this.repositoryData.repositoryConfig.getDocNameProperty();
				if (!reposDocName) { // is name
					if (this.cmNamePropertyDefault.get("checked")) {
						return false;
					}
				} else { // no name
					if (this.cmNamePropertySpecify.get("checked")) {
						return false;
					}
				}
				if (this.cmEnableWorkspaces && this.cmEnableRedaction && this.cmBurnPDFToPDF && this.cmRedactionAllowMergeSplit && this.cmEnableEntryTemplate && this.enableSSO && this.enableDirectRetrieve && this.enableActionList && this.usePartFileName && this.cmDBEncodingUTF8 && this.enableIncludeAttrGroupName && (this.repositoryData.cmLanguages != null)) {
					var enableWorkspaces = this.cmEnableWorkspaces.get('checked');
					var updateTeamspaceRoles = this.cmUpdateTeamspaceRoles.get('checked');
					var enableRedaction = this.cmEnableRedaction.get('checked');
					var burnPDFToPDF = this.cmBurnPDFToPDF.get('checked');
					var redactionAllowMergeSplit = this.cmRedactionAllowMergeSplit.get('checked');
					var enableEntryTemplate = this.cmEnableEntryTemplate.get('checked');
					var enableTSDeleteTask = this.cmEnableTaskManagerDelete.get('checked');
					//var TSDeleteTaskId = this.cmTaskUsername.get('value');
					//var TSDeleteTaskPwd = this.cmTaskPassword.get('value');
					var useSSO = this.enableSSO.get('checked');
					var enableDirectRetrieve = this.enableDirectRetrieve.get('checked');
					var enableActionList = this.enableActionList.get('checked');
					var usePartFileName = this.enablePartFileName.get('checked');
					var enableOnlyDocumentItemTypes = this.isDocumentModelOnly();
					var databaseEncodingUTF8 = this.cmDBEncodingUTF8.get('checked');
					var enableIncludeAttrGroupName = this.enableIncludeAttrGroupName.get('checked');
					var langs = this._getLanguageCodeSelectedFields();
					if ((enableTSDeleteTask != this.repositoryData.repositoryConfig.getEnableTaskManagerDelete()) //
							|| (updateTeamspaceRoles != this.repositoryData.repositoryConfig.getTeamspaceOwnerModifyRoles()) //
							|| (enableWorkspaces != this.repositoryData.repositoryConfig.getTeamspacesEnabled()) //
							|| (useSSO != this.repositoryData.repositoryConfig.getUseSSO()) //
							|| (enableOnlyDocumentItemTypes != this.repositoryData.repositoryConfig.getDocModelOnlyEnabled()) //
							|| (enableDirectRetrieve != this.repositoryData.repositoryConfig.getDirectRetrieveEnabled()) //
							|| (enableActionList != this.repositoryData.repositoryConfig.getActionListEnabled())  //
							|| (usePartFileName != this.repositoryData.repositoryConfig.getUsePartFileName()) //
							|| (langs != this.repositoryData.repositoryConfig.getLanguageCodes()) //
							|| (enableRedaction != this.repositoryData.repositoryConfig.getRedactionEnabled()) //
							|| (burnPDFToPDF != this.repositoryData.repositoryConfig.getBurnPDFToPDF()) //
							|| (redactionAllowMergeSplit != this.repositoryData.repositoryConfig.getRedactionAllowMergeSplit()) //
							|| (enableEntryTemplate != this.repositoryData.repositoryConfig.getEntryTemplatesEnabled()) //
							|| (databaseEncodingUTF8 != this.repositoryData.repositoryConfig.getDatabaseEncodingUTF8()) //
							|| (enableIncludeAttrGroupName != this.repositoryData.repositoryConfig.getIncludeAttrGroupInAttrDisplayName())) {
						isResetting = false;
					} else if ((this.getSelectedFolderId() != this.repositoryData.repositoryConfig.getRootFolderId())) {
						isResetting = false;
					}
				}
			} else if (type == "p8") {
				if ((this.repositoryData.repositoryConfig.getP8DownloadRecord() && this.disableDownloadRecording.get("checked")) || (!this.repositoryData.repositoryConfig.getP8DownloadRecord() && this.enableDownloadRecording.get("checked"))) {
					return false;
				}
				if (this.repositoryData.repositoryConfig.getDocNameProperty() != this.docNameProperty.get('value')) {
					return false;
				}
				if (this.repositoryData.repositoryConfig.getFolderNameProperty() != this.folderNameProperty.get('value')) {
					return false;
				}
				if (this.p8EnableWorkspaces && this.p8EnableRedaction && this.p8BurnPDFToPDF && this.p8RedactionAllowMergeSplit && this.p8EnableEntryTemplate && this.p8EnableSyncService && this.enableAddAsMajorVersion && this.enableCheckinAsMajorVersion && this.inheritAnnotationSecurity && this.connectionPoint) {
					var enableWorkspaces = this.p8EnableWorkspaces.get('checked');
					var enableSync = this.p8EnableSyncService.get('checked');
					var enableRedaction = this.p8EnableRedaction.get('checked');
					var burnPDFToPDF = this.p8BurnPDFToPDF.get('checked');
					var redactionAllowMergeSplit = this.p8RedactionAllowMergeSplit.get('checked');
					var enableEntryTemplate = this.p8EnableEntryTemplate.get('checked');
					var updateTeamspaceRoles = this.p8UpdateTeamspaceRoles.get('checked');
					var enableRecentTeamspaces = this.p8DisplayRecentTeamspaces.get('checked');
					var enableTSDeleteTask = this.p8EnableTaskManagerDelete.get('checked');
					//var TSDeleteTaskId = this.cmTaskUsername.get('value');
					//var TSDeleteTaskPwd = this.cmTaskPassword.get('value');
					var enableRecentTeamspacesValue = this.p8DisplayRecentTeamspacesValue.get('value');
					var enableAddAsMajorVersion = this.enableAddAsMajorVersion.get('checked');
					var enableCheckinAsMajorVersion = this.enableCheckinAsMajorVersion.get('checked');
					var inheritAnnotationSecurity = this.inheritAnnotationSecurity.get('checked') ? "inherit" : "default";
					var connectionPoint = this.connectionPoint.get('value');
					var enableIncludeWorkflowDefinition = this.enableIncludeWorkflowDefinition.get('checked');
					var enableIncludeFormTemplate = this.enableIncludeFormTemplate.get('checked');
					var usePartFileName = this.p8EnablePartFileName.get('checked');

					if ((updateTeamspaceRoles != this.repositoryData.repositoryConfig.getTeamspaceOwnerModifyRoles()) //
							|| (enableTSDeleteTask != this.repositoryData.repositoryConfig.getEnableTaskManagerDelete()) //
							|| (enableRecentTeamspacesValue != this.repositoryData.repositoryConfig.getDisplayRecentTeamspacesValue()) //
							|| (enableRecentTeamspaces != this.repositoryData.repositoryConfig.getDisplayRecentTeamspaces()) //
							|| (enableWorkspaces != this.repositoryData.repositoryConfig.getTeamspacesEnabled()) //
							|| (enableAddAsMajorVersion != this.repositoryData.repositoryConfig.getAddAsMajorVersion()) //
							|| (enableCheckinAsMajorVersion != this.repositoryData.repositoryConfig.getCheckinAsMajorVersion()) //
							|| (inheritAnnotationSecurity != this.repositoryData.repositoryConfig.getAnnotationSecurity()) //
							|| (connectionPoint != this.repositoryData.repositoryConfig.getConnectionPoint()) //
							|| (enableIncludeWorkflowDefinition != this.repositoryData.repositoryConfig.getIncludeWorkflowDefinition()) //
							|| (enableIncludeFormTemplate != this.repositoryData.repositoryConfig.getIncludeFormTemplate()) //
							|| (enableRedaction != this.repositoryData.repositoryConfig.getRedactionEnabled()) //
							|| (burnPDFToPDF != this.repositoryData.repositoryConfig.getBurnPDFToPDF()) //
							|| (enableEntryTemplate != this.repositoryData.repositoryConfig.getEntryTemplatesEnabled()) //
							|| (enableSync != this.repositoryData.repositoryConfig.getSyncEnabled()) //
							|| (usePartFileName != this.repositoryData.repositoryConfig.getUsePartFileName())) {
						isResetting = false;
					}
				}
			} else if (type == "od") {
				if (this.afp2pdfConfigFile && this.transformXMLFile && this.enableODSSO) {
					var configFile = this.repositoryData.repositoryConfig.getAfp2PdfConfigFile() ? this.repositoryData.repositoryConfig.getAfp2PdfConfigFile() : "";
					var xmlFile = this.repositoryData.repositoryConfig.getTransformXMLFile() ? this.repositoryData.repositoryConfig.getTransformXMLFile() : "";
					var hold = this.repositoryData.repositoryConfig.getStatusDocHold() ? this.repositoryData.repositoryConfig.getStatusDocHold() : false;
					var notes = this.repositoryData.repositoryConfig.getStatusDocNotes() ? this.repositoryData.repositoryConfig.getStatusDocNotes() : false;
					var ssoEnabled = this.repositoryData.repositoryConfig.getUseSSO();
					var replaceString;
					if ((this.afp2pdfConfigFile.get('value') != configFile) || (this.transformXMLFile.get('value') != xmlFile) || (this.odStatusDocHold.get('checked') != hold) || (this.odStatusDocNotes.get('checked') != notes) || this.enableODSSO.get('checked') != ssoEnabled) {
						isResetting = false;
					} else {
						var customPropsDisplayed = this.getCustomProperties();
						if (customPropsDisplayed && (customPropsDisplayed != null)) {
							customPropsDisplayed = customPropsDisplayed.toString();
							replaceString = /\\\\/g;
							customPropsDisplayed = customPropsDisplayed.replace(replaceString, "\\");
							customPropsDisplayed = customPropsDisplayed.replace(replaceString, "\\");
						} else {
							customPropsDisplayed = "";
						}
						var customPropsSaved = this.repositoryData.repositoryConfig.getCustomProperties();
						if (customPropsSaved && (customPropsSaved != null)) {
							customPropsSaved = customPropsSaved.toString();
							replaceString = /\\\\/g;
							customPropsSaved = customPropsSaved.replace(replaceString, "\\");
						} else {
							customPropsSaved = "";
						}
						if (customPropsDisplayed != customPropsSaved) {
							isResetting = false;
						}
					}
				}
			} else if (type == "cmis") {
				//var useGzipEncodingVal = this.useGzipEncoding.get('checked') ? "true" : "false";
				//if (useGzipEncodingVal != this.repositoryData.repositoryConfig.getUseGzipEncoding()) {
				//isResetting = false;
				//}
				var enableAddAsMajorVersion = this.cmisEnableAddAsMajorVersion.get('checked');
				var enableCheckinAsMajorVersion = this.cmisEnableCheckinAsMajorVersion.get('checked');
				if ((enableAddAsMajorVersion != this.repositoryData.repositoryConfig.getAddAsMajorVersion()) || (enableCheckinAsMajorVersion != this.repositoryData.repositoryConfig.getCheckinAsMajorVersion())) {
					isResetting = false;
				}
			}
			return isResetting;
		},

		resetData: function(container) {
			if (!this.isResetingFields()) {
				this.loadData(container);
			}
		},

		_onFieldChange: function() {
			if (this._init && !this.isResetingFields()) {
				this.onMarkDirty();
			}
		},

		_onChangeFolderSelector: function() {
			var enabled = this._enableFolderSelector.get("checked");
			this._folderSelector.setDisabled(!enabled);
			this._onFieldChange();
		},

		_onFolderChange: function() {
			if (this._selected && this.repositoryData.repositoryConfig) {
				var currentFolder = this.getSelectedFolderId();
				if (currentFolder != this.repositoryData.repositoryConfig.getRootFolderId()) {
					this.onMarkDirty();
				}
			}
		},

		_onItemTypeChange: function() {
			if (this._selected && this.repositoryData.repositoryConfig) {
				var value = this.isDocumentModelOnly();
				if (value != this.repositoryData.repositoryConfig.getDocModelOnlyEnabled()) {
					this.onMarkDirty();
				}
			}
		},
		
		 _onClickDocAddTemplate: function() {
			 
		 },
		
	     _onClickDocChangeTemplate: function() {
			 
		 },
		 
	     _onClickDocRemoveTemplate: function() {
			 
		 },
		 
		_onEnableTeamspaceClick: function() {
			if (this.repositoryData.type == "cm") {
				domStyle.set(this._cmTeamspaceAccessControlContainer, "display", "block");
				//if (this.taskManagerIsConfigured)
				domStyle.set(this.cmTeamspaceTaskConfig, "display", "block");
				domStyle.set(this.cmTeamspaceRecentRoles, "display", "block");
			} else if (this.repositoryData.type == "p8") {
				domStyle.set(this._p8TeamspaceAccessControlContainer, "display", "block");
				//if (this.taskManagerIsConfigured)
				domStyle.set(this.p8TeamspaceTaskConfig, "display", "block");
				domStyle.set(this.p8TeamspaceRecentRoles, "display", "block");
				domStyle.set(this.p8displayRecentTeamspacesConfig, "display", "block");

			}
			this._onFieldChange();
		},

		_onDisableTeamspaceClick: function() {
			if (this.repositoryData.type == "cm") {
				domStyle.set(this._cmTeamspaceAccessControlContainer, "display", "none");
				domStyle.set(this.cmTeamspaceTaskConfig, "display", "none");
				domStyle.set(this.cmTeamspaceRecentRoles, "display", "none");
			} else if (this.repositoryData.type == "p8") {
				domStyle.set(this._p8TeamspaceAccessControlContainer, "display", "none");
				domStyle.set(this.p8TeamspaceTaskConfig, "display", "none");
				domStyle.set(this.p8TeamspaceRecentRoles, "display", "none");
				domStyle.set(this.p8displayRecentTeamspacesConfig, "display", "none");
			}
			this._onFieldChange();
		},

		_onEnableRedactionClick: function() {
			if (this.repositoryData.type == "cm") {
				domStyle.set(this._cmBurnPDFToPDF, "display", "block");
				domStyle.set(this._cmRedactionAccessControlContainer, "display", "block");
				domStyle.set(this._cmRedactionAllowMergeSplitContainer, "display", "block");
			} else if (this.repositoryData.type == "p8") {
				domStyle.set(this._p8BurnPDFToPDF, "display", "block");
				domStyle.set(this._p8RedactionAccessControlContainer, "display", "block");
				domStyle.set(this._p8RedactionAllowMergeSplitContainer, "display", "block");
			}
			this._onFieldChange();
		},

		_onDisableRedactionClick: function() {
			if (this.repositoryData.type == "cm") {
				domStyle.set(this._cmBurnPDFToPDF, "display", "none");
				domStyle.set(this._cmRedactionAccessControlContainer, "display", "none");
				domStyle.set(this._cmRedactionAllowMergeSplitContainer, "display", "none");
			} else if (this.repositoryData.type == "p8") {
				domStyle.set(this._p8BurnPDFToPDF, "display", "none");
				domStyle.set(this._p8RedactionAccessControlContainer, "display", "none");
				domStyle.set(this._p8RedactionAllowMergeSplitContainer, "display", "none");
			}
			this._onFieldChange();
		},

		_onEnableEntryTemplateClick: function() {
			if (this.repositoryData.type == "cm") {
				domStyle.set(this._cmEntryTemplateEnabledClassesContainer, "display", "table-row");
				domStyle.set(this._cmEntryTemplateAccessControlContainer, "display", "table-row");
				if (!this._enableFolderSelector.get("checked")) {
					domStyle.set(this._cmEntryTemplateRootFolderAssociationContainer, "display", "table-row");
				}
				// This is needed for the entry template enabled classes widget.
				this.resize();
			} else if (this.repositoryData.type == "p8") {
				domStyle.set(this._p8EntryTemplateAccessControlContainer, "display", "block");
			}
			this._onFieldChange();
		},

		_onDisableEntryTemplateClick: function() {
			if (this.repositoryData.type == "cm") {
				domStyle.set(this._cmEntryTemplateEnabledClassesContainer, "display", "none");
				domStyle.set(this._cmEntryTemplateAccessControlContainer, "display", "none");
				domStyle.set(this._cmEntryTemplateRootFolderAssociationContainer, "display", "none");
			} else if (this.repositoryData.type == "p8")
				domStyle.set(this._p8EntryTemplateAccessControlContainer, "display", "none");
			this._onFieldChange();
		},

		_entryTemplateRootFolderAssociationClick: function() {
			this.repositoryData.repository.retrieveItem("/", lang.hitch(this, function(rootItem) {
				var entryTemplateFolderAssociationsDialog = new EntryTemplateFolderAssociationsDialog({
					item: rootItem,
					isCmRootFolderInConfig: true,
					_repositoryConfigurationParemeters: this
				});
				entryTemplateFolderAssociationsDialog.setMaximized(true);
				entryTemplateFolderAssociationsDialog.show();
				entryTemplateFolderAssociationsDialog.resize();
			}));
		},

		_onTeamspaceTaskConfigChange: function() {
			this._onFieldChange();
			this.validateData();
		},

		// Check if all the data is valid
		validateData: function() {
			var type = this.repositoryData.type;
			var valid = true;
			if (type == "od") { // no validations
			} else if (type == "cm") {
				if (this._enableFolderSelector.get('checked') && (this.getSelectedFolderId() == "")) {
					return false;
				}
				//if (this.cmEnableTaskManagerDelete.get('checked')) {
				//if (!this.cmTaskUsername.isValid()) {
				//return false;
				//} else if (!this.cmTaskPassword.isValid()) {
				//return false;
				//}
				//}
				if (this.cmNamePropertySpecify.get("checked")) {
					return this.cmNameProperty.isValid();
				} else {
					return true;
				}
			} else if (type == "p8") {
				return this.folderNameProperty.isValid() && this.docNameProperty.isValid();
			} else if (type == "cmis") { // no validations
			} else { // plugin repository type
				if (this._configDijit) {
					return this._configDijit.validate();
				}
			}
			return valid;
		},

		// override
		onMarkDirty: function() {
		},

		onSelect: function() {
			this._selected = true;
		},

		// for OD custom properties dialog

		_checkGridButtons: function() {
			this.newPropertyButton.set('disabled', false);
			this.editPropertyButton.set('disabled', this._odCustomPropertiesGrid.select.row.getSelected().length != 1);
			this.deletePropertyButton.set('disabled', this._odCustomPropertiesGrid.select.row.getSelected().length == 0);
		},

		_onNewProperty: function() {
			this._getDialog().show(this._odCustomPropertiesGrid.model);
		},

		_onEditProperty: function() {
			var selectedItems = this._odCustomPropertiesGrid.select.row.getSelected();
			this._editItem(this._odCustomPropertiesGrid.row(selectedItems[0]).item());
		},

		_editItem: function(item) {
			this._editItemValue = item;
			this._getDialog().show(this._odCustomPropertiesGrid.model, {
				name: item.name,
				value: item.value
			});
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new ODCustomPropertiesDialog();

				this.own(aspect.after(this._dialog, "onAdd", lang.hitch(this, function(saveData) {
					this._odCustomPropertiesGrid.model.store.add({
						"id": "id_" + new Date().getTime(),
						"name": saveData.name,
						"value": saveData.value
					});
					this._markDirty();
				}), true));

				this.own(aspect.after(this._dialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.name = saveData.name;
					item.value = saveData.value;
					this._odCustomPropertiesGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this._markDirty();
				}), true));
			}
			return this._dialog;
		},

		setData: function(data) {
			this.repositoryData = data;
		},

		_onDeleteProperty: function() {
			var rowIds = this._odCustomPropertiesGrid.select.row.getSelected();
			if (rowIds) {
				for (var i = 0; i < rowIds.length; i++) {
					this._odCustomPropertiesGrid.model.store.remove(rowIds[i]);
				}
			}
			this._markDirty();
		},

		_markDirty: function() {
			this.inherited(arguments);
		},

		_markClean: function() {
			this.inherited(arguments);
		},

		_onLogonP8TaskMgrProxy: function() {
			if (this._loginDialog) {
				this._loginDialog.destroyRecursive();
			}
			this._loginDialog = new AdminLoginDialog({
				_includePassword: true
			});
			var id = this.repositoryData.repositoryConfig.id ? this.repositoryData.repositoryConfig.id : this._container.idField.get('value');
			id += "_taskmgrproxy";
			var repository = new Repository({
				id: id,
				name: this._container.nameField.get('value'),
				type: this.repositoryData.repositoryConfig.getType(),
				isForAdministration: true
			});
			ecm.model.desktop._storeAdminRepository(repository);
			repository._logonParams = {
				displayName: this._container.nameField.get('value'),
				serverName: this._container.p8serverField.get('value'),
				objectStore: this._container.objectStore.get('value'),
				objectStoreDisplayName: this._container.objectStoreDisplayName.get('value'),
				protocol: this._container.protocol.get('value')
			};
			this._loginDialog.show(repository.type, repository.id, repository.name, repository._logonParams, lang.hitch(this, function(response) {
				if (response) {
					this.p8TaskMgrProxyUserId.set('value', response.userID);
					this.p8TaskMgrProxyUserPwd.set('value', response.password);
					this._onP8TaskManagerProxyChange();
					this._onFieldChange();
				}
			}));
		},

		_onClearP8TaskMgrProxy: function() {
			this.p8TaskMgrProxyUserId.set('value', "");
			this.p8TaskMgrProxyUserPwd.set('value', "");
			this._onP8TaskManagerProxyChange();
			this._onFieldChange();
		},

		_onLogonCmTaskMgrProxy: function() {
			if (this._loginDialog) {
				this._loginDialog.destroyRecursive();
			}
			this._loginDialog = new AdminLoginDialog({
				_includePassword: true
			});
			var id = this.repositoryData.repositoryConfig.id ? this.repositoryData.repositoryConfig.id : this._container.idField.get('value');
			id += "_taskmgrproxy";
			var repository = new Repository({
				id: id,
				name: this._container.nameField.get('value'),
				type: this.repositoryData.repositoryConfig.getType(),
				isForAdministration: true
			});
			ecm.model.desktop._storeAdminRepository(repository);
			repository._logonParams = {
				displayName: this._container.nameField.get('value'),
				serverName: this._container.cmserverField.get('value')
			};
			this._loginDialog.show(repository.type, repository.id, repository.name, repository._logonParams, lang.hitch(this, function(response) {
				if (response) {
					this.cmTaskMgrProxyUserId.set('value', response.userID);
					this.cmTaskMgrProxyUserPwd.set('value', response.password);
					this._onCmTaskManagerProxyChange();
					this._onFieldChange();
				}
			}));
		},

		_onClearCmTaskMgrProxy: function() {
			this.cmTaskMgrProxyUserId.set('value', "");
			this.cmTaskMgrProxyUserPwd.set('value', "");
			this._onCmTaskManagerProxyChange();
			this._onFieldChange();
		}

	});

});

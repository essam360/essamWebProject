/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/json",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/query",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/store/Memory",
	"dojo/dom-geometry",
	"dojo/keys",
	"dojo/data/ItemFileWriteStore",
	"dijit/Tooltip",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/TabContainer",
	"dijit/form/CheckBox",
	"ecm/LoggerMixin",
	"ecm/model/User",
	"ecm/model/UserGroup",
	"ecm/model/Repository",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/DesktopConfig",
	"ecm/model/admin/RepositoryConfig",
	"ecm/model/admin/ViewerConfig",
	"ecm/model/admin/DesktopAccessConfig",
	"ecm/model/Message",
	"ecm/model/Permission",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/CheckBox",
	"ecm/widget/CompositeButton",
	"ecm/widget/admin/DesktopAppearance",
	"ecm/widget/admin/DesktopRepositories",
	"ecm/widget/admin/DesktopWorkflows",
	"ecm/widget/admin/DesktopMenus",
	"ecm/widget/admin/DesktopMobile",
	"ecm/widget/admin/DesktopFeatures",
	"ecm/widget/FilteringSelect",
	"ecm/widget/RadioButton",
	"ecm/widget/dialog/MessageDialog",
	"idx/widget/SloshBucket",
	"ecm/widget/layout/TabController",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"ecm/widget/admin/AdminLoginDialog",
	"ecm/widget/dialog/ErrorDialog",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"idx/layout/TitlePane",
	"ecm/widget/_WidgetBaseHoverHelpMixin",
	"ecm/widget/NumberSpinner",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/model/admin/FileTrackingLocation",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Header",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/ColumnResizer",
	"gridx/modules/CellWidget",
	"gridx/modules/VirtualVScroller",
	"gridx/modules/Body",
	"gridx/modules/Filter",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/admin/OfficeCommandDialog",
	"ecm/widget/AccessControlList",
	"dojo/text!./templates/TabDesktop.html"
], function(dojojson, declare, lang, Deferred, string, query, array, has, aspect, domAttr, style, domClass, construct, MemoryStore, geometry, keys, ItemFileWriteStore, Tooltip, _TemplatedMixin, _WidgetsInTemplateMixin, Button, TabContainer, CheckBox, LoggerMixin, User, UserGroup, Repository, DesktopData, DesktopConfig, RepositoryConfig, ViewerConfig, DesktopAccessConfig, Message, Permission, AdminRoleConfig, _NavigatorAdminTabBase, HoverHelp, ValidationTextBox, ecmCheckBox, CompositeButton, DesktopAppearance, DesktopRepositories, DesktopWorkflows, DesktopMenus, DesktopMobile, DesktopFeatures, FilteringSelect, RadioButton, MessageDialog, SloshBucket, TabController, UserGroupPermissionDialog, AdminLoginDialog, ErrorDialog, BorderContainer, ContentPane, TitlePane, WidgetBaseHoverhelp, NumberSpinner, BidiComplex, FileTrackingLocation, Grid, Cache, Header, Focus, Row, ExtendedSelectRow, SingleSort, ColumnResizer,  CellWidget, VirtualVScroller, Body, FilterModule, _MoveUpDownGridxMixin, OfficeCommandDialog, AccessControlList, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabDesktop
	 * @class Provides a widget that is used to create or edit a desktop. The widget displays the desktop properties in
	 *        a tabbed pane.
	 */

	return declare("ecm.widget.admin.TabDesktop", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_MoveUpDownGridxMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabDesktop.prototype */

		templateString: template,
		widgetsInTemplate: true,
		textDir: has("text-direction"),
		
		
		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this._readOnlyAccessControlGrouping = false;	
			var id = "";
			var action = "new";
			if (this._myAdminModel && this._myAdminModel.id) {
				id = this._myAdminModel.id;
				action = "edit";
			} else if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				id = this._myAdminModelForCopy.id;
				action = "copy";
			}
			else {
				// New - hide the mobile message until saved.
				style.set(this.mobileMessageRow, "display", "none");
			}
			this.desktopData = DesktopData.createDesktopData(id, action, this._SECURITY_TOPIC);

			this._disableSave();
			this._disableReset();

			if (action == "edit") { // initialize for existing desktop
				if (this._myAdminModel.getDefault() == "Yes") {
					this.defaultDesktopCheckbox.set("disabled", true);
				}
				this.idField.set("disabled", true);
				if (this.desktopData.isAdmin()) {
					this._desktopAppearance.set("iconClass", ""); // Admin desktop - Appearance tab isn't required
				}
			}

			this._setHoverHelp(this._myAdminModel);
			this.configTitlePane.set("title", this._messages.admin_desktop_conf_label);
			this.msOfficeConfSection.set("title", this._messages.admin_ms_office_conf_label);
			this.resetButton.set("title", this._messages.reset_hover);
			this.generalContentPane.set("title", this._messages.admin_general);
			this.securityTwisty.set("title", this._messages.admin_authentication);
			this.pluginsTwisty.set("title", this._messages.admin_plugins);
			this.fileTrackingConfSection.set("title", this._messages.admin_file_tracking_section_tile);
			this._desktopRepositories.set("title", this._messages.admin_repositories);
			this._desktopFeatures.set("title", this._messages.admin_layout_tab_title);
			this._desktopAppearance.set("title", this._messages.admin_desktop_appearance);
			this._desktopMenus.set("title", this._messages.admin_menus);
			this._desktopWorkflows.set("title", this._messages.admin_workflows);
			this._desktopMobile.set("title", this._messages.admin_mobile);
			this.authenTypeRepository.set("placeholder", this._messages.default_repository_placeholder);
			this.desktopAccessRole.set("placeholder", this._messages.default_role_placeholder);
			this.shareRepository.set("placeholder", this._messages.admin_repository_box_placeholder);

			this._updateName(this._myAdminModel ? this._myAdminModel.getName() : ecm.messages.admin_new_desktop);

			this.own(aspect.after(this._tabContainer, "selectChild", lang.hitch(this, "_selectTab"), true));
			this.own(aspect.after(this._desktopRepositories, "onCheckSave", lang.hitch(this, "_checkSave"), true));

			this.registerTab(this._desktopAppearance);
			this.registerTab(this._desktopRepositories);
			this.registerTab(this._desktopWorkflows);
			this.registerTab(this._desktopMenus);
			this.registerTab(this._desktopMobile);
			this.registerTab(this._desktopFeatures);

			this.fileTrackingLocationStore = new MemoryStore({
				data: FileTrackingLocation.locationOptions,
				idProperty: "value"
			});
			this.fileTrackingEVType.set("store", this.fileTrackingLocationStore);
			this.fileTrackingEVType.set("value", FileTrackingLocation.locationTypes.MY_DOCUMENTS);

			this._loadData();
			if (has("dojo-bidi")) {
				this.errorMessageCustomURL.set("textDir", "ltr");
				this.fileTrackingQP.set("textDir", "ltr");
				this.fileTrackingAQPForEVTB.set("textDir", "ltr");
				BidiComplex.attachInput(this.errorMessageCustomURL.focusNode, "URL");
				BidiComplex.attachInput(this.fileTrackingQP.focusNode, "FILE_PATH");
				BidiComplex.attachInput(this.fileTrackingAQPForEVTB.focusNode, "FILE_PATH");
			}
			style.set(this.controlThresholdRow, "display", "none");
			var hwnd = aspect.after(this.msOfficeConfSection, "toggle", lang.hitch(this, function() {
				this.resize();
				hwnd.remove();
			}), true);
			
			// 81657. Resize the first time the plugins section is shown so the grid will display.
			var pluginsToggleHandle = aspect.after(this.pluginsTwisty, "toggle", lang.hitch(this, function() {
				this.resize();
				pluginsToggleHandle.remove();
			}), true);
			
			style.set(this.desktopAccessList.domNode, "width", "200px");
		},

		/*
		 * Called before tab got closed. Give each tab a chance to cleanup.
		 */
		_uninitialize: function() {
			if (this._desktopAppearance._uninitialize)
				this._desktopAppearance._uninitialize();
			if (this._desktopWorkflows._uninitialize)
				this._desktopWorkflows._uninitialize();
			if (this._desktopMenus._uninitialize)
				this._desktopMenus._uninitializ();
			if (this._desktopRepositories._uninitialize)
				this._desktopRepositories._uninitialize();
			if (this._desktopMobile._uninitialize)
				this._desktopMobile._uninitialize();
			if (this._desktopFeatures._uninitialize)
				this._desktopFeatures._uninitialize();
		},

		_setHoverHelp: function(isEdit) {
			this.idField.setHoverHelp(this.idFieldHoverHelp);
			if (isEdit) {
				this.idFieldHoverHelp.set('message', this._messages.admin_desktop_id_disabled_hover);
				this.idFieldHoverHelp.setFocusable(true);
			}
			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			this.defaultDesktopCheckbox.setHoverHelp(this.defaultDesktopCheckboxHoverHelp);
			this.viewerMappingField.setHoverHelp(this.viewerMappingFieldHoverHelp);
			this.mergeSplitEnableRadioButton.setHoverHelp(this.mergeSplitHoverHelp);
			this.mergeSplitDisableRadioButton.setHoverHelp(this.mergeSplitHoverHelp);
			this.syncServerEnable.setHoverHelp(this.syncServerHoverHelp);
			this.syncServerDisable.setHoverHelp(this.syncServerHoverHelp);
			this.streamlineServiceEnable.setHoverHelp(this.streamlineServiceHoverHelp);
			this.streamlineServiceDisable.setHoverHelp(this.streamlineServiceHoverHelp);
			this.shareEnable.setHoverHelp(this.shareHoverHelp);
			this.shareDisable.setHoverHelp(this.shareHoverHelp);
			this.fileIntoFolderCheckbox.setHoverHelp(this.fileIntoFolderHoverHelp);
			this.showSecurityCheckbox.setHoverHelp(this.showSecurityHoverHelp);
			this.showSecurityInheritanceUICheckbox.setHoverHelp(this.showSecurityInheritanceUICheckboxHoverHelp);
			this.wfEmailNotificationsCheckbox.setHoverHelp(this.wfEmailNotificationsHoverHelp);
			this.preventCreateNewSearchCheckbox.setHoverHelp(this.preventCreateNewSearchHoverHelp);
			this.preventCreateNewUnifiedSearchCheckbox.setHoverHelp(this.preventCreateNewUnifiedSearchHoverHelp);
			this.hideEntryTemplateNotFoundWarningCheckbox.setHoverHelp(this.hideEntryTemplateNotFoundWarningHoverHelp);
			this.showRoleSecurityCheckbox.setHoverHelp(this.showRoleSecurityHoverHelp);
			this.showPrimaryDocumentOnlyCheckbox.setHoverHelp(this.showPrimaryDocumentOnlyHoverHelp);			
			
			this.shareRepository.setHoverHelp(this.shareRepositoryHoverHelp);
			this.shareMyEmailModifiable.setHoverHelp(this.shareMyEmailModifiableHoverHelp);
			// Office online
			this.officeOnlineEnableRadioButton.setHoverHelp(this.officeOnlineHoverHelp);
			this.officeOnlineDisableRadioButton.setHoverHelp(this.officeOnlineHoverHelp);
			// office:
			this.openDocOnCheckoutCheckbox.setHoverHelp(this.openDocOnCheckoutHoverHelp);
			this.promptCloseOfficeCheckbox.setHoverHelp(this.promptCloseOfficeHoverHelp);
			this.deleteLocalOnAddCheckbox.setHoverHelp(this.deleteLocalOnAddCheckboxHoverHelp);
			this.deleteLocalOnCheckinCheckbox.setHoverHelp(this.deleteLocalOnCheckinCheckboxHoverHelp);
			this.promptForPropsOnAddCheckbox.setHoverHelp(this.promptForPropsOnAddCheckboxHoverHelp);
			this.sendEmailAsLinkOnlyCheckbox.setHoverHelp(this.sendEmailAsLinkOnlyCheckboxHoverHelp);
			this.indicateManagedEmailOnAddCheckbox.setHoverHelp(this.indicateManagedEmailOnAddCheckboxHoverHelp);
			this.enablePropMappingForAddCheckbox.setHoverHelp(this.enablePropMappingForAddCheckboxHoverHelp);
			this.disableDocumentTypeFilteringCheckbox.setHoverHelp(this.disableDocumentTypeFilteringCheckboxHoverHelp);
			this.showDetailsRecentlyUsedCheckbox.setHoverHelp(this.showDetailsRecentlyUsedCheckboxHoverHelp);
			this.hideSearchActionsCheckbox.setHoverHelp(this.hideSearchActionsCheckboxHoverHelp);
			this.hideSaveDocumentCheckbox.setHoverHelp(this.hideSaveDocumentCheckboxHoverHelp);
			this.editGroupAddButtonOption.setHoverHelp(this.editGroupAddButtonOptionHoverHelp);
			this.deleteOpenDocsAfterCloseCheckbox.setHoverHelp(this.deleteOpenDocsAfterCloseChecboxHoverHelp);
			this.checkoutDocumentAfterAddCheckbox.setHoverHelp(this.checkoutDocumentAfterAddChecboxHoverHelp);
			this.outlookPropertyRemembranceCheckbox.setHoverHelp(this.outlookPropertyRemembranceCheckboxHoverHelp);
			this.officeCommandGroupNameField.setHoverHelp(this.officeCommandGroupFieldHoverHelp);
			this._bidiSupportFlag.setHoverHelp(this._bidiSupportFlagHoverHelp);
			this._baseTextDirection.setHoverHelp(this._baseTextDirectionHoverHelp);
			this.ribbonTabLabelField.setHoverHelp(this.ribbonTabLabelFieldHoverHelp);
			this.closeTaskPaneOnOpen.setHoverHelp(this.closeTaskPaneOnOpenHoverhelp);
			this.redactionSaveMode.setHoverHelp(this.redactionSaveModeHoverHelp);
			this.documentAddMode.setHoverHelp(this.documentAddHoverHelp);

			this.maxNumberOfDocsToAdd.setHoverHelp(this.maxNumberOfDocsToAddHoverHelp);
			this.controlThreshold.setHoverHelp(this.controlThresholdHoverHelp);
			this.maxNumberOfDocsToModify.setHoverHelp(this.maxNumberOfDocsToModifyHoverHelp);
			this.maxConversionSize.setHoverHelp(this.maxConversionSizeHoverHelp);
/*
			this.timeZoneRadioButtonLocalUser.setHoverHelp(this.timezoneHoverHelp);
			this.timeZoneRadioButtonAllUser.setHoverHelp(this.timezoneHoverHelp);
			this.timeZoneField.setHoverHelp(this.timezoneHoverHelp);
*/
			this.disableTimePropertiesRadio.setHoverHelp(this.timePropertiesHoverHelp);
			this.enableHideTimePropertiesRadio.setHoverHelp(this.timePropertiesHoverHelp);
			this.mobileQREnable.setHoverHelp(this.mobileQREnableHoverHelp);
			this.mobileQRDisable.setHoverHelp(this.mobileQRDisableHoverHelp);
			
			this.errorMessageDefault.setHoverHelp(this.errorMessageHoverHelp);
			this.errorMessageCustom.setHoverHelp(this.errorMessageHoverHelp);
			this.errorMessageCustomURL.setHoverHelp(this.errorMessageCustomURLHoverHelp);

			//file tracking
			this.enableFileTrackingRadioButtonYes.setHoverHelp(this.fileTrackingLabelHoverHelp);
			this.enableFileTrackingRadioButtonNo.setHoverHelp(this.fileTrackingLabelHoverHelp);
			this.storageLocationLabel.setHoverHelp(this.storageLocationLabelHoverHelp);
			this.fileTrackingPathTypeEVRadioButton.setHoverHelp(this.environmentVariableHoverHelp);
			this.fileTrackingPathTypeQPRadioButton.setHoverHelp(this.exactPathHoverHelp);
			this.deleteLocalCopyRadioButtonYes.setHoverHelp(this.deleteLocalCopyHoverHelp);
			this.overWriteFileRadioButtonYes.setHoverHelp(this.overWriteFileHoverHelp);
			this.overWriteFileRadioButtonNo.setHoverHelp(this.overWriteFileHoverHelp);
			this.overWriteFileRadioButtonOverride.setHoverHelp(this.overWriteFileHoverHelp);
			this.deleteLocalCopyRadioButtonNo.setHoverHelp(this.deleteLocalCopyHoverHelp);
			this.deleteLocalCopyOverride.setHoverHelp(this.deleteLocalCopyHoverHelp);
			this.openFileRadioButtonNo.setHoverHelp(this.openFileHoverHelp);
			this.openFileRadioButtonYes.setHoverHelp(this.openFileHoverHelp);
			this.fileTrackingAQPForEVTB.setHoverHelp(this.fileTrackingAQPForEVTB_hoverhelp);
			this.fileTrackingAEVForQP.setHoverHelp(this.fileTrackingAEVForQPTB_hoverhelp);
			this.fileTrackingEVType.setHoverHelp(this.environmentVariableHoverHelp);
			this.fileTrackingQP.setHoverHelp(this.exactPathHoverHelp);
			this.fileTrackingAEVForQPTB.setHoverHelp(this.fileTrackingAEVForQPTB_hoverhelp);

			this._disableAccessControl.set("checked", true);

			this.maxNumberOfDocsToAdd.constraints = {
				max: 300,
				min: 1,
				places: 0
			};

			this.maxNumberOfDocsToModify.constraints = {
				max: 300,
				min: 1,
				places: 0
			};

			this.maxConversionSize.constraints = {
				min: 1,
				places: 0
			};

			this.controlThreshold.constraints = {
				max: 300,
				min: 0,
				places: 0
			};
			
			this.maxNumberOfDocsToPrint.constraints = {
					max: 10,
					min: 1,
					places: 0
				};
		},

		setInstructions: function(msg) {
			if (msg) {
				this.instructions.innerHTML = msg;
			} else {
				style.set(this.instructions, "display", "none");
			}
		},

		getInstructions: function() {
			if (this.desktopData.isNew()) {
				return this._messages.admin_desktop_general_create_instructions;
			} else {
				return this.desktopData.isAdmin() ? this._messages.admin_desktop_admin_instructions : "";
			}
		},

		_selectTab: function(page) {
			if (page.onSelect) {
				page.onSelect();
			}
		},

		onSelect: function() {
			if (this.desktopData.isAdmin()) { // Hide the repositories, workflow, & menu tab when admin desktop
				if (this.viewerMappingFieldRow)
					style.set(this.viewerMappingFieldRow, "display", "none");

				if (this.mergeSplitRow)
					style.set(this.mergeSplitRow, "display", "none");

				if (this.syncServerRow)
					style.set(this.syncServerRow, "display", "none");
				
				if (this.streamlineRow)
					style.set(this.streamlineRow, "display", "none");
					
				if (this.mobileQRRow)
					style.set(this.mobileQRRow, "display", "none");
					
				if (this.shareRow)
					style.set(this.shareRow, "display", "none");

				if (this.officeOnlineRow)
					style.set(this.officeOnlineRow, "display", "none");
				
				if (this._desktopRepositories.controlButton)
					style.set(this._desktopRepositories.controlButton.domNode, "display", "none");

				if (this._desktopWorkflows.controlButton)
					style.set(this._desktopWorkflows.controlButton.domNode, "display", "none");

				if (this._desktopMenus.controlButton)
					style.set(this._desktopMenus.controlButton.domNode, "display", "none");

				if (this._desktopMobile.controlButton)
					style.set(this._desktopMobile.controlButton.domNode, "display", "none");

				if (this._desktopFeatures.controlButton)
					style.set(this._desktopFeatures.controlButton.domNode, "display", "none");

				if (this.msOfficeConfSection)
					style.set(this.msOfficeConfSection.domNode, "display", "none");

				if (this.fileTrackingConfSection)
					style.set(this.fileTrackingConfSection.domNode, "display", "none");

				if (this.maxNumberOfDocsToAddRow)
					style.set(this.maxNumberOfDocsToAddRow, "display", "none");

				if (this.controlThresholdRow)
					style.set(this.controlThresholdRow, "display", "none");

				if (this.maxNumberOfDocsToModifyRow)
					style.set(this.maxNumberOfDocsToModifyRow, "display", "none");

				if (this.maxConversionSizeRow)
					style.set(this.maxConversionSizeRow, "display", "none");

				if (this.securityTwisty && this.securityTwisty.domNode)
					style.set(this.securityTwisty.domNode, "display", "none");

				if (this.pluginsTwisty && this.pluginsTwisty.domNode)
					style.set(this.pluginsTwisty.domNode, "display", "none");
				
				if (this.printServiceRow)
					style.set(this.printServiceRow, "display", "none");
			}
			else if (ecm.model.desktop.isDesktopAdminUser){
				// Always hide repositories and workflow tabs from desktop admins
				if (this._desktopRepositories.controlButton){
					style.set(this._desktopRepositories.controlButton.domNode, "display", "none");
				}
				if (this._desktopWorkflows.controlButton){
					style.set(this._desktopWorkflows.controlButton.domNode, "display", "none");
				}
			}
		},

		_disableTabs: function(bool) {
			this._desktopAppearance.controlButton.set("disabled", bool);
			this._desktopRepositories.controlButton.set("disabled", bool);
			this._desktopWorkflows.controlButton.set("disabled", bool);
			this._desktopMenus.controlButton.set("disabled", bool);
			this._desktopMobile.controlButton.set("disabled", bool);
			this._desktopFeatures.controlButton.set("disabled", bool);
		},

		/**
		 * Overwritten to load/clear all the data.
		 */
		_loadData: function(onComplete) {
			this.desktopData.loadData(lang.hitch(this, function(response) {
				if (this.desktopData.isCopied()) {
					this.desktopData.desktopConfig.setDefault("No");
					this.desktopData.applicationNameLabelValues = null;
					
					if (this.desktopData.desktopConfig.isRoleBasedAdminEnabled()){
						var defaultRepositoryId = this.desktopData.desktopConfig.getDefaultRepository();
						var repositoryCfg = this.desktopData.getRepositoryConfig(defaultRepositoryId);
						if(repositoryCfg.getType() == "p8")
							this.desktopData.loadDesktopAdminAccessConfig(repositoryCfg.getType());
					}
				}
				this._desktopAppearance.setData(this.desktopData);
				this._desktopRepositories.setData(this.desktopData);
				this._desktopWorkflows.setData(this.desktopData);
				this._desktopMenus.setData(this.desktopData);
				this._desktopMobile.setData(this.desktopData);
				this._desktopFeatures.setData(this.desktopData);
				this._loadGeneralTab();
				this._loadOtherTabs(onComplete);
			
				if (!this.desktopData.isNew()){
					this.setMobileAccessMessage();
				}
			}));
		},
		
		setMobileAccessMessage: function(){
			var mobileInfoMessage;
			if (this.desktopData.desktopConfig.getMobileAppAccess()){
				mobileInfoMessage = this._messages.admin_rba_mobile_access_enabled;
			}
			else{
				mobileInfoMessage =  this._messages.admin_rba_mobile_access_disabled;
			}
			if (this.mobileMessageRow)
				style.set(this.mobileMessageRow, "display", "");
			if (this.mobileMessageText)
				this.mobileMessageText.innerHTML = mobileInfoMessage;
		},

		_loadGeneralTab: function() {
			this._initialized = false;

			var instructions = this.getInstructions();
			if (instructions) {
				this.setInstructions(instructions);
				this.resize();
			}
			if (this.desktopData.isNew()) {
				this.idField.reset();
				this.nameField.reset();
				this.descriptionField.reset();
				this.defaultDesktopCheckbox.reset();
				this.mergeSplitEnableRadioButton.set("checked", true);
				this.mergeSplitShowCheckInCheckBox.set("checked", false);
				this.syncServerDisable.set('checked', true);
				this.streamlineServiceDisable.set('checked', true);
				this.mobileQRDisable.set('checked', true);
				this.shareDisable.set('checked', true);
				this._onShareChange();
				this.emailServiceRadioButton.set("checked", true);
				this.errorMessageDefault.set('checked', true);
				this.fileIntoFolderCheckbox.set('checked', false);
				this.showSecurityCheckbox.set('checked', false);
				this.showSecurityInheritanceUICheckbox.set('checked', false);
				this.wfEmailNotificationsCheckbox.set('checked', false);
				this.preventCreateNewSearchCheckbox.set('checked', false);
				this.preventCreateNewUnifiedSearchCheckbox.set('checked', false);
				this.hideEntryTemplateNotFoundWarningCheckbox.set('checked', false);
				this.showRoleSecurityCheckbox.set('checked', false);
				this.showPrimaryDocumentOnlyCheckbox.set('checked', false);

				this.openDocOnCheckoutCheckbox.set('checked', false);
				this.promptCloseOfficeCheckbox.set('checked', false);

				this.deleteLocalOnAddCheckbox.set('checked', false);
				this.deleteLocalOnCheckinCheckbox.set('checked', false);
				//this.deleteLocalOnSaveCheckbox.set('checked', false);

				this.promptForPropsOnAddCheckbox.set('checked', false);
				this.deleteEmailOnAddCheckbox.set('checked', false);
				this.indicateManagedEmailOnAddCheckbox.set('checked', false);
				this.sendEmailAsLinkOnlyCheckbox.set('checked', true);
				this.deleteOpenDocsAfterCloseCheckbox.set('checked', false);
				this.checkoutDocumentAfterAddCheckbox.set('checked', false);
				this.outlookPropertyRemembranceCheckbox.set('checked', false);
				this.printServiceDisable.set('checked', true);				
				this.maxNumberOfDocsToPrint.set('value', 10);

				this._bidiSupportFlag.set('checked', false);
				this._baseTextDirection.set('value', 0);

				this.redactionSaveMode.set('value', 0);
				this.documentAddMode.set('value', 0);

				this.enablePropMappingForAddCheckbox.set('checked', false);
				this.maxNumberOfDocsToAdd.set('value', 50);
				this.controlThreshold.set('value', 50);
				this.maxNumberOfDocsToModify.set('value', 50);
				this.maxConversionSize.set('value', 200);
				// Office custom command group settings
				this.officeCommandGroupNameField.set("value", '');
				this._initializeGrid();
				this.ribbonTabLabelField.set("value", '');
				this.closeTaskPaneOnOpen.set("value", true);

				//file tracking info
				this.enableFileTrackingRadioButtonNo.set("checked", true);
				this.fileTrackingPathTypeEVRadioButton.set("checked", true);
				this._onFileTrackingPathTypeChangeEV();
				this.deleteLocalCopyRadioButtonNo.set("checked", true);
				this.overWriteFileRadioButtonNo.set("checked", true);
				this.overWriteFileRadioButtonOverride.set("checked", false);

				this.openFileRadioButtonNo.set("checked", true);
				this.deleteLocalCopyOverride.set("checked", false);

				this._onFileTrackingStateDisable();

				this.disableDocumentTypeFilteringCheckbox.set('checked', false);
				this.showDetailsRecentlyUsedCheckbox.set('checked', false);
				this.hideSearchActionsCheckbox.set('checked', false);
				this.hideSaveDocumentCheckbox.set('checked', false);
				this.editGroupAddButtonOption.set("value", 0);

				this._enableAllPluginsRadio.set("checked", true);
				this._onEnableAllPlugins();
				
				this.officeOnlineEnableRadioButton.set("checked", false);
				this.allowCollaborativeEditingCheckBox.set("checked", false);
				this.officeOnlineDisableRadioButton.set("checked", true);									
			} else {
				if (this.desktopData.isCopied()) {
					this.idField.reset();
					this.nameField.reset();
				} else {
					this.idField.set('value', this.desktopData.desktopConfig.id);
					this.nameField.set('value', this.desktopData.desktopConfig.getName());
				}
				this.descriptionField.set('value', this.desktopData.desktopConfig.getDescription() ? this.desktopData.desktopConfig.getDescription() : "");
				if (this.desktopData.desktopConfig.getDefault() == "Yes") {
					this.defaultDesktopCheckbox.set('value', this.desktopData.desktopConfig.getDefault());
				} else {
					this.defaultDesktopCheckbox.set('checked', false);
				}
				if (this.desktopData.desktopConfig.getMessageSearchUrl() && this.desktopData.desktopConfig.getMessageSearchUrl() != "") {
					this.errorMessageCustom.set('checked', true);
					this.errorMessageCustomURL.set("value", !has("dojo-bidi") ? this.desktopData.desktopConfig.getMessageSearchUrl() : BidiComplex.createDisplayString(this.desktopData.desktopConfig.getMessageSearchUrl() || "", "URL"));
				} else {
					this.errorMessageDefault.set('checked', true);
				}

				if (this.desktopData.desktopConfig.getMergeSplitEnabled()) {
					this.mergeSplitEnableRadioButton.set("checked", true);
				} else {
					this.mergeSplitDisableRadioButton.set("checked", true);						
				}
				this.mergeSplitShowCheckInCheckBox.set("checked", this.desktopData.desktopConfig.getMergeSplitShowCheckIn());
				this._onMergeSplitEnableChanged();
				
				if (this.desktopData.desktopConfig.getPrintServiceEnabled()) {
					this.printServiceEnable.set('checked', true);
				} else {
					this.printServiceDisable.set('checked', true);
				}
				
				if (this.desktopData.desktopConfig.getSyncEnabled()) {
					this.syncServerEnable.set('checked', true);
				} else {
					this.syncServerDisable.set('checked', true);
				}
				if (this.desktopData.desktopConfig.getStreamlineEnabled()) {
					this.streamlineServiceEnable.set('checked', true);
				} else {
					this.streamlineServiceDisable.set('checked', true);
				}
				if (this.desktopData.desktopConfig.getMobileQREnabled()) {
					this.mobileQREnable.set('checked', true);
				} else {
					this.mobileQRDisable.set('checked', true);
				}
				if (this.desktopData.desktopConfig.getShareEnabled()) {
					this.shareEnable.set('checked', true);
					this.shareMyEmailModifiable.set("checked", this.desktopData.desktopConfig.getShareMyEmailModifiable());
				} else {
					this.shareDisable.set('checked', true);
					this.shareMyEmailModifiable.set("checked", false);
				}
				this._onShareChange();
				// Office online settings
				if (this.desktopData.desktopConfig.getOfficeOnlineEnabled()) {
					this.officeOnlineEnableRadioButton.set("checked", true);
					this.allowCollaborativeEditingCheckBox.set("checked", this.desktopData.desktopConfig.getAllowCollaborativeEditing());
					var selectedRepositoryIds = this.desktopData.desktopConfig.getValues(this.desktopData.desktopConfig.REPOSITORIES);
					this._onOfficeOnlineChanged(selectedRepositoryIds);
				} else {
					this.officeOnlineDisableRadioButton.set("checked", true);						
				}				
				
				if (this.desktopData.desktopConfig.getEmailServiceEnabled()) {
					this.emailServiceRadioButton.set("checked", true);
					this.fromEmailModifiableCheckBox.set("checked", this.desktopData.desktopConfig.getFromEmailModifiable());
					this.fromEmailAsSenderCheckBox.set("checked", this.desktopData.desktopConfig.getUseFromEmailAsSender());
				} else {
					this.emailAppletRadioButton.set("checked", true);
					this.fromEmailModifiableCheckBox.set("checked", false);
					this.fromEmailAsSenderCheckBox.set("checked", false);
				}

				if (this.desktopData.desktopConfig.getEnableAllPlugins()) {
					this._enableAllPluginsRadio.set("checked", true);
					this._onEnableAllPlugins();
				} else {
					this._selectPluginsRadio.set("checked", true);
					this._onSelectPlugins();
				}

				if (this.desktopData.isAdmin()) {
					this.nameField.set("disabled", true);
					this.descriptionField.set("disabled", true);
					this.msOfficeConfSection.set("disabled", true);
					this.fileTrackingConfSection.set("disabled", true);
				} else {
					var fileIntoFolder = this.desktopData.desktopConfig.getFileIntoFolder() ? true : false;
					var showSecurity = this.desktopData.desktopConfig.getShowSecurity() ? true : false;
					var showSecurityInheritanceUI = this.desktopData.desktopConfig.getShowSecurityInheritanceUI() ? true : false;
					var wfEmailNotifications = this.desktopData.desktopConfig.getSupportWorkflowNotification() ? true : false;
					var preventCreateNewSearch = this.desktopData.desktopConfig.getPreventCreateNewSearch() ? true : false;
					var preventCreateNewUnifiedSearch = this.desktopData.desktopConfig.getPreventCreateNewUnifiedSearch() ? true : false;
					var hideEntryTemplateNotFoundWarning = this.desktopData.desktopConfig.getHideEntryTemplateNotFoundWarning() ? true : false;
					var showRoleSecurity = this.desktopData.desktopConfig.getShowRoleSecurity() ? true : false;
					var showPrimaryDocumentOnly = this.desktopData.desktopConfig.getShowPrimaryDocumentOnly() ? true : false;
					
					this.fileIntoFolderCheckbox.set('checked', fileIntoFolder);
					this.showSecurityCheckbox.set('checked', showSecurity);
					this.showSecurityInheritanceUICheckbox.set('checked', showSecurityInheritanceUI);
					this.wfEmailNotificationsCheckbox.set('checked', wfEmailNotifications);
					this.preventCreateNewSearchCheckbox.set('checked', preventCreateNewSearch);
					this.preventCreateNewUnifiedSearchCheckbox.set('checked', preventCreateNewUnifiedSearch);
					this.hideEntryTemplateNotFoundWarningCheckbox.set('checked', hideEntryTemplateNotFoundWarning);
					this.showRoleSecurityCheckbox.set('checked', showRoleSecurity);
					this.showPrimaryDocumentOnlyCheckbox.set('checked', showPrimaryDocumentOnly);

					this.openDocOnCheckoutCheckbox.set('checked', this.desktopData.desktopConfig.getCheckoutOnOpenDoc() ? true : false);
					this.promptCloseOfficeCheckbox.set('checked', this.desktopData.desktopConfig.getPromptCloseOfficeIfDocCheckout() ? true : false);

					this.deleteLocalOnAddCheckbox.set('checked', this.desktopData.desktopConfig.getDeleteLocalOnAdd() ? true : false);
					this.deleteLocalOnCheckinCheckbox.set('checked', this.desktopData.desktopConfig.getDeleteLocalOnCheckin() ? true : false);
					//this.deleteLocalOnSaveCheckbox.set('checked', this.desktopData.desktopConfig.getDeleteLocalOnSave() ? true : false);

					this.promptForPropsOnAddCheckbox.set('checked', this.desktopData.desktopConfig.getPromptForPropsOnAdd() ? true : false);
					this.deleteEmailOnAddCheckbox.set('checked', this.desktopData.desktopConfig.getDeleteEmailOnAdd() ? true : false);
					this.indicateManagedEmailOnAddCheckbox.set('checked', this.desktopData.desktopConfig.getIndicateManagedEmailOnAdd() ? true : false);
					this.sendEmailAsLinkOnlyCheckbox.set('checked', this.desktopData.desktopConfig.getSendEmailAsLinkOnly() ? true : false);
					this.enablePropMappingForAddCheckbox.set('checked', this.desktopData.desktopConfig.getEnablePropMappingForAdd() ? true : false);
					this.deleteOpenDocsAfterCloseCheckbox.set('checked', this.desktopData.desktopConfig.getDeleteOpenDocsAfterClose() ? true : false);
					this.checkoutDocumentAfterAddCheckbox.set('checked', this.desktopData.desktopConfig.getCheckoutDocumentAfterAdd() ? true : false);
					this.outlookPropertyRemembranceCheckbox.set('checked', this.desktopData.desktopConfig.getOutlookPropertyRemembrance() ? true : false);

					this.maxNumberOfDocsToAdd.set('value', this.desktopData.desktopConfig.getMaxNumberDocToAdd());
					this.maxNumberOfDocsToModify.set('value', this.desktopData.desktopConfig.getMaxNumberDocToModify());
					this.maxConversionSize.set('value', this.desktopData.desktopConfig.getMaxConversionSize());
					this.controlThreshold.set('value', this.desktopData.desktopConfig.getControlThreshold());
					this.maxNumberOfDocsToPrint.set('value', this.desktopData.desktopConfig.getMaxNumberDocToPrint());
					
					this.disableDocumentTypeFilteringCheckbox.set('checked', this.desktopData.desktopConfig.getDisableDocumentTypeFiltering() ? true : false);
					this.showDetailsRecentlyUsedCheckbox.set('checked', this.desktopData.desktopConfig.getShowDetailsRecentlyUsed() ? true : false);
					this.hideSearchActionsCheckbox.set('checked', this.desktopData.desktopConfig.getHideSearchActions() ? true : false);
					this.hideSaveDocumentCheckbox.set('checked', this.desktopData.desktopConfig.getHideSaveDocument() ? true : false);
					this.editGroupAddButtonOption.set("value", this.desktopData.desktopConfig.getEditGroupAddButtonSetting());
					this.officeCommandGroupNameField.set("value", this.desktopData.desktopConfig.getOfficeCustomCommandGroupName());
					// Loads the office command grid
					this._initializeGrid();
					this.ribbonTabLabelField.set("value", this.desktopData.desktopConfig.getRibbonTabLabel());
					this.closeTaskPaneOnOpen.set("checked", this.desktopData.desktopConfig.getCloseTaskPaneOnOpen() ? true : false);

					//file tracking info
					this._loadingFileTrackingData = true;
					if (this.desktopData.desktopConfig.getEnableFileTracking()) {
						this.enableFileTrackingRadioButtonYes.set("checked", true);
						this._onFileTrackingStateEnable();

						if (this.desktopData.desktopConfig.getFileTrackingLocation() != FileTrackingLocation.locationTypes.EXACT_PATH) {
							this.fileTrackingPathTypeEVRadioButton.set("checked", true);
							this.fileTrackingPathTypeQPRadioButton.set("checked", false);
							this.fileTrackingEVType.set("value", this.desktopData.desktopConfig.getFileTrackingLocation());
							this.fileTrackingCustomENV.set("value", this.desktopData.desktopConfig.getEnvironmentVariable());
							if (this.desktopData.desktopConfig.getAppendPathComponent()) {
								this.fileTrackingAQPForEV.set("checked", true);
								this.fileTrackingAQPForEVTB.set("value", !has("dojo-bidi") ? this.desktopData.desktopConfig.getQualifiedPath() : BidiComplex.createDisplayString(this.desktopData.desktopConfig.getQualifiedPath() || "", "URL"));
								this.fileTrackingAQPForEVTB.set("disabled", false);
								this.fileTrackingAQPForEVTB.set("required", true);
							} else {
								this.fileTrackingAQPForEV.set("checked", false);
								this.fileTrackingAQPForEVTB.set("disabled", true);
								this.fileTrackingAQPForEVTB.set("required", false);
							}
							this._onFileTrackingPathTypeChangeEV();
						} else {
							this.fileTrackingPathTypeEVRadioButton.set("checked", false);
							this.fileTrackingPathTypeQPRadioButton.set("checked", true);
							if (this.desktopData.desktopConfig.getAppendPathComponent()) {
								this.fileTrackingAEVForQP.set("checked", true);
								this.fileTrackingAEVForQPTB.set("value", this.desktopData.desktopConfig.getEnvironmentVariable());
								this.fileTrackingAEVForQPTB.set("disabled", false);
								this.fileTrackingAEVForQP.set("required", true);
							} else {
								this.fileTrackingAQPForEV.set("checked", false);
								this.fileTrackingAQPForEVTB.set("disabled", true);
								this.fileTrackingAEVForQP.set("required", false);
							}
							this.fileTrackingQP.set("value", !has("dojo-bidi") ? this.desktopData.desktopConfig.getQualifiedPath() : BidiComplex.createDisplayString(this.desktopData.desktopConfig.getQualifiedPath() || "", "FILE_PATH"));
							this._onFileTrackingPathTypeChangeQP();
						}

						if (this.desktopData.desktopConfig.getDeleteLocalCopy()) {
							this.deleteLocalCopyRadioButtonYes.set("checked", true);
						} else {
							this.deleteLocalCopyRadioButtonNo.set("checked", true);
						}

						if (this.desktopData.desktopConfig.getOpenFile()) {
							this.openFileRadioButtonYes.set("checked", true);
						} else {
							this.openFileRadioButtonNo.set("checked", true);
						}

						if (this.desktopData.desktopConfig.getDeleteLocalCopyRuntimeState()) {
							this.deleteLocalCopyOverride.set("checked", true);
						} else {
							this.deleteLocalCopyOverride.set("checked", false);
						}

						if (this.desktopData.desktopConfig.getOverWriteFile()) {
							this.overWriteFileRadioButtonYes.set("checked", true);
						} else {
							this.overWriteFileRadioButtonNo.set("checked", true);
						}
						if (this.desktopData.desktopConfig.getOverWriteFileRuntimeState()) {
							this.overWriteFileRadioButtonOverride.set("checked", true);
						} else {
							this.overWriteFileRadioButtonOverride.set("checked", false);
						}

					} else {
						this.enableFileTrackingRadioButtonNo.set("checked", true);
						this._onFileTrackingStateDisable();
					}
				}
				this._loadingFileTrackingData = false;
			}
			this.errorMessageCustomURL.set("disabled", this.errorMessageDefault.get("checked"));

			this.idField.pattern = '([a-zA-Z0-9])*';
			this.idField.invalidMessage = this._messages.admin_id_invalid;

			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this._messages.admin_desktop_name_invalid;

			var needToFetchRoles = false;
			if (!this.desktopData.isAdmin()) {
				this._setViewerMapping(this.desktopData.viewers, this.desktopData.isNew() ? "default" : this.desktopData.desktopConfig.getViewer());
				this._setAuthenticationTypeInUI(this.desktopData.repositories);
				this._setShareRepositoriesInUI(this.desktopData.repositories);
				if ((this._enableAccessControl.get("checked")) || (this._enableRoleBasedAdmin.get("checked"))){
					var repository = this._getAuthenticationTypeRepository();
					if (repository && repository.type != "p8") {
						if (this._enableAccessControl.get("checked")) {
							this._renderAccessControlGrouping(this.desktopData.accessControlArray, "desktop");
						}
						
						if (this._enableRoleBasedAdmin.get("checked")) {
								setTimeout(lang.hitch(this, function() {
									this.initializeACL(this.desktopData.adminAccessControlArray);
								}), 300);
						}
					}
					if (this._enableRoleBasedAdmin.get("checked")){
						needToFetchRoles = true;
						this._setDesktopRole();
					}
				}
			}

//			this._setTimeZoneUI();
			this._setEnableTimePropertiesUI();
			if (this.desktopData.appServerType == "jboss") {
				style.set(this.syncServerRow, "display", "none");
				this.syncServerDisable.set('checked', true);
				style.set(this.shareRow, "display", "none");
			}
			this._setBidiSupportFlag(this.desktopData.desktopConfig.getOfficeBidiSupportFlag());
			this._loadTextDirections(this.desktopData.desktopConfig.getOfficeTextDirection());
			this._loadRedactionSaveMode(this.desktopData.desktopConfig.getRedactionSaveMode());
			this._loadDocumentAddMode(this.desktopData.desktopConfig.getDocumentAddMode());
			this._refreshPluginsGrid();
			
			//this.initializeACL();
			setTimeout(lang.hitch(this, function() {
				
				// If we need to fetch desktop roles, postpone setting the _intialized flag until they
				// are retrieved.
				if (!needToFetchRoles){
					this._initialized = true;
				}
			}), 300);
		},

		_initializeGrid: function() {
			var d = new Deferred();
			Deferred.when(this._initializeOfficeCommandsGrid(), function() {
				d.callback();
			}, function(e) {
				d.errback(e);
			});
			return d;
		},

		_initializeOfficeCommandsGrid: function() {
			var hasStore = this._officeCommandsGrid && this._officeCommandsGrid.model;
			if (hasStore) {
				this._officeCommandsGrid.select.row.clear();
				this._officeCommandsGrid.model.setStore(this._createStore());
			} else {
				var structure = [
					{
						field: "available",
						name: "<span>" + this._messages.admin_ms_custom_command_available_label + "</span>&nbsp;<span id=\"" + this.id + "_availableHeaderHoverHelp\">",
						width: "15%",
						id: this.id + "_availableHeader",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						decorator: function(data, rowId, rowIndex) {
							return '<span data-dojo-type="dijit/form/CheckBox" data-dojo-attach-point="cb">';
						},
						setCellValue: function(data, storeData, cellWidget) {
							var itemData = cellWidget.cell.row.data();
							if (itemData.label != null && itemData.label.length > 0 && itemData.url != null && itemData.url.length > 0)
								this.cb.set("disabled", false);
							else
								this.cb.set("disabled", true);
							this.cb.set("checked", data);
							this.cb.focusNode.setAttribute("aria-label", ecm.messages.admin_ms_custom_command_available_label);
						},
						sortable: false
					},
					{
						id: "commandId",
						field: "commandId",
						name: this._messages.admin_ms_custom_command_command_id_label,
						width: "15%"
					},
					{
						id: "label",
						field: "label",
						name: this._messages.admin_ms_custom_command_label_label,
						width: "15%"
					},
					{
						id: "description",
						field: "description",
						name: this._messages.admin_ms_custom_command_description_label,
						width: "15%"
					},
					{
						id: "url",
						field: "url",
						name: this._messages.admin_ms_custom_command_url_label,
						width: "20%"
					},
					{
						id: "icon",
						field: "icon",
						name: this._messages.admin_ms_custom_command_icon_label,
						width: "20%"
					}
				];
				this._officeCommandsGrid = new Grid({
					cacheClass: Cache,
					store: this._createStore(),
					structure: structure,
					textDir: has("text-direction"),
					style: "width: 95%; height: 150px; margin: 5px 0 5px 0;",
					selectRowTriggerOnCell: true,
					modules: [
						Row,
						Header,
						Focus,
						ExtendedSelectRow,
						ColumnResizer,
						CellWidget,
						{
							moduleClass: SingleSort,
							initialOrder: [
								{
									colId: "commandId",
									descending: false
								}
							]
						}
					]
				});
				domClass.add(this._officeCommandsGrid.domNode, "compact gridxWholeRow gridxAlternatingRows");
				this.officeCommandsContentPane.set("content", this._officeCommandsGrid);
				this._officeCommandsGrid.startup();
				// Adds hover help to the Available header
				var headerNode = this._officeCommandsGrid.header.getHeaderNode(this.id + "_availableHeader");
				if (headerNode) {
					var availableHeaderHoverHelp = query("[id=\"" + this.id + "_availableHeaderHoverHelp" + "\"]", headerNode);
					if (availableHeaderHoverHelp && availableHeaderHoverHelp.length > 0) {
						var hoverHelp = new HoverHelp();
						hoverHelp.message = this._messages.admin_ms_custom_command_available_hover_help;
						hoverHelp.startup();
						availableHeaderHoverHelp[0].appendChild(hoverHelp.domNode);
						this.own(aspect.after(headerNode, "onkeypress", lang.hitch(this, function(evt) {
							if (evt.ctrlKey && evt.charOrCode == keys.F1) {
								hoverHelp.openDropDownDialog();
								event.stop(evt);
							}
						}), true));
					}
				}
				this.own(aspect.after(this._officeCommandsGrid, "onRowDblClick", lang.hitch(this, function(evt) {
					this._openItem(this._officeCommandsGrid.row(evt.rowIndex).item());
				}), true));
				this.own(aspect.after(this._officeCommandsGrid, "onCellClick", lang.hitch(this, "_toggleCheckbox"), true));
				this.own(aspect.after(this._officeCommandsGrid, "onCellKeyDown", lang.hitch(this, "_toggleCheckbox"), true));
			}
		},

		_toggleCheckbox: function(evt) {
			var columnId = this.id + "_availableHeader";
			if (evt.columnId == columnId && ((evt.type == "keydown" && evt.keyCode == keys.SPACE) || evt.type == "click")) {
				var item = this._officeCommandsGrid.model.store.get(evt.rowId);
				if (item && item.label.length > 0 && item.url.length > 0) {
					item.available = !item.available;
					this._officeCommandsGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
				}
			}
		},

		_createStore: function() {
			var items = [];
			if (this.desktopData.officeCustomCommands) {
				for (var i = 0; i < this.desktopData.officeCustomCommands.length; i++) {
					var label = this.desktopData.officeCustomCommands[i].getLabel();
					var description = this.desktopData.officeCustomCommands[i].getDescription();
					var url = this.desktopData.officeCustomCommands[i].getUrl();
					var icon = this.desktopData.officeCustomCommands[i].getIcon();
					items.push({
						"id": this.desktopData.officeCustomCommands[i].id,
						"order": i,
						"commandId": string.substitute(this._messages.admin_ms_custom_command_id, [
							i + 1
						]),
						"available": this.desktopData.officeCustomCommands[i].getAvailable() ? true : false,
						"label": label,
						"description": description,
						"url": url,
						"icon": icon
					});
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		_onEdit: function() {
			var selectedItems = this._officeCommandsGrid.select.row.getSelected();
			this._openItem(this._officeCommandsGrid.row(selectedItems[0]).item());
			this._onFieldChange();
		},

		_openItem: function(item) {
			this._commandItem = item;
			if (!this._officeCommandDialog) {
				this._officeCommandDialog = new OfficeCommandDialog();
				this.own(aspect.after(this._officeCommandDialog, "onEdit", lang.hitch(this, function(saveData) {
					this._commandItem.commandId = saveData.commandId;
					this._commandItem.label = saveData.label;
					this._commandItem.description = saveData.description;
					this._commandItem.url = saveData.url;
					this._commandItem.icon = saveData.icon;
					this._officeCommandsGrid.model.store.put(this._commandItem, {
						id: this._commandItem.id,
						overwrite: true
					});
					this._officeCommandsGrid.body.refresh();
				}), true));
			}

			this._officeCommandDialog.show({
				id: item.id,
				commandId: item.commandId,
				label: item.label,
				description: item.description,
				url: item.url,
				icon: item.icon
			});
		},

		_onFileTrackingStateDisable: function() {
			this.fileTrackingEnabled = false;
			style.set(this.ftrow2, "display", "none");
			style.set(this.ftrow3, "display", "none");
			style.set(this.ftrow4, "display", "none");
			style.set(this.ftrow5, "display", "none");
			this._onFieldChange();
		},

		_onFileTrackingStateEnable: function() {
			this.fileTrackingEnabled = true;
			style.set(this.ftrow2, "display", "");
			style.set(this.ftrow3, "display", "");
			style.set(this.ftrow4, "display", "");
			style.set(this.ftrow5, "display", "");
			this.fileTrackingPathTypeEVRadioButton.set("checked", true);
			this._onFileTrackingPathTypeChangeEV();
			this.deleteLocalCopyRadioButtonNo.set("checked", true);
			this.openFileRadioButtonNo.set("checked", true);
			this.deleteLocalCopyOverride.set("checked", false);
			this.overWriteFileRadioButtonNo.set("checked", true);
			this.overWriteFileRadioButtonOverride.set("checked", false);
			this._onFieldChange();
		},

		_onEVAppendPathCBChange: function(isChecked) {
			//this.fileTrackingAEVForQP
			this.fileTrackingAQPForEVTB.set("required", isChecked);
			this.fileTrackingAQPForEVTB.focus();
			this._onFieldChange();
		},

		_onQPAppendPathCBChange: function(isChecked) {

			this.fileTrackingAEVForQPTB.set("required", isChecked);
			this.fileTrackingAEVForQPTB.focus();
			this._onFieldChange();
		},

		_onFileTrackingPathTypeChangeQP: function() {

			//EV section
			this.fileTrackingPathTypeEV = false;
			this.fileTrackingEVType.set("disabled", true);
			this.fileTrackingCustomENV.set("disabled", true);
			this.fileTrackingCustomENV.set("required", false);
			this.fileTrackingAQPForEV.set("disabled", true);
			this.fileTrackingAQPForEVTB.set("disabled", true);
			this.fileTrackingAQPForEVTB.set("required", false);

			//QP section
			this.fileTrackingQP.set("disabled", false);
			this.fileTrackingQP.set("required", true);
			this.fileTrackingQP.focus();
			this.fileTrackingAEVForQP.set("disabled", false);
			if (this.fileTrackingAEVForQP.get("checked")) {
				this.fileTrackingAEVForQPTB.set("required", true);
			} else {
				this.fileTrackingAEVForQPTB.set("required", false);
			}
			this.fileTrackingAEVForQPTB.set("disabled", false);

			this._onFieldChange();
		},

		_onFileTrackingPathTypeChangeEV: function() {
			this.fileTrackingPathTypeEV = true;

			//EV section
			this.fileTrackingEVType.set("disabled", false);
			this.fileTrackingCustomENV.set("disabled", false);
			this.fileTrackingAQPForEV.set("disabled", false);
			this.fileTrackingAQPForEVTB.set("disabled", false);
			if (this.fileTrackingAQPForEV.get("checked")) {
				this.fileTrackingAQPForEVTB.set("required", true);
			} else {
				this.fileTrackingAQPForEVTB.set("required", false);
			}
			if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.EV) {
				this.fileTrackingCustomENV.set("required", true);
				this.fileTrackingCustomENV.focus();
			}
			//QP section
			this.fileTrackingQP.set("disabled", true);
			this.fileTrackingQP.set("required", false);
			this.fileTrackingAEVForQP.set("disabled", true);
			this.fileTrackingAEVForQPTB.set("disabled", true);
			this.fileTrackingAEVForQPTB.set("required", false);
			this._onFieldChange();
		},

		_onFileTrackingEVTypeChange: function() {
			if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.HOME_PATH || this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.MY_DOCUMENTS) {
				this.fileTrackingCustomENV.set("required", false);
				style.set(this.fileTrackingCustomENV.domNode, "display", "none");
			} else if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.EV) {
				style.set(this.fileTrackingCustomENV.domNode, "display", "");
				this.fileTrackingCustomENV.set("required", true);
				this.fileTrackingCustomENV.focus();
			}
			this._onFieldChange();
		},

		_onMergeSplitEnableChanged: function() {								
			if (this.mergeSplitEnableRadioButton.get("checked")) {
				this.mergeSplitShowCheckInCheckBox.set("disabled", false);
				// TBD Show an inline warning message if there is a problem with the viewer mapping. 
				//
				// 		admin_desktop_merge_and_split_viewer_pdf_and_tiff_warning
				//      admin_desktop_merge_and_split_viewer_pdf_warning
				//      admin_desktop_merge_and_split_viewer_tiff_warning
				//
				// domClass.remove(this.mergeSplitInlineMessage, "dijitHidden");
			} else {
				this.mergeSplitShowCheckInCheckBox.set("disabled", true);
				domClass.add(this.mergeSplitInlineMessage, "dijitHidden");
			}
			this._onFieldChange();
		},		

		_onOfficeOnlineEnableChange: function() {
			this.allowCollaborativeEditingCheckBox.set("checked", true);	
			this._onAddAndRemoveRepositories();			
		},
		
		_onOfficeOnlineDisableChange: function() {
			this.allowCollaborativeEditingCheckBox.set("checked", false);	
			this._onOfficeOnlineChanged();
		},
		
		_loadOtherTabs: function(onComplete) {
			this._disableTabs(true);
			if (this.desktopData.isAdmin()) {
				this._desktopAppearance.loadData(lang.hitch(this, function() {
					this._checkSave();
					this._init = true;
					this._disableTabs(false);
					if (onComplete) {
						onComplete();
					}
				}));
			} else {
				this._desktopRepositories.loadData(lang.hitch(this, function() {
					this.own(aspect.after(this._desktopRepositories, "onAddAndRemoveRepositories", lang.hitch(this, this._onAddAndRemoveRepositories)));
					this._desktopMenus.loadData(lang.hitch(this, function() {
						this._desktopWorkflows.setConnect(this._desktopRepositories, lang.hitch(this, function() {
							this._desktopWorkflows.loadData(lang.hitch(this, lang.hitch(this, function() {
								this._desktopAppearance.setConnect(this._desktopRepositories, lang.hitch(this, function() {
									this._desktopAppearance.loadData(lang.hitch(this, function() {
										this._desktopFeatures.setConnect(this._desktopRepositories, this, lang.hitch(this, function() {
											this._desktopFeatures.loadData(lang.hitch(this, function() {
												this._desktopMobile.loadData(lang.hitch(this, function() {
													this._checkSave();
													this._init = true;
													this._disableTabs(false);
													if (onComplete) { // tell container we are done loading. 
														onComplete();
													}
												}));
											}));
										}));
									}));
								}));
							})));
						}));
					}));
				}));
			}
		},		
		
		_onAddAndRemoveRepositories: function() {			
			var selectedRepositories = this._desktopRepositories.sloshBucket.getSelectedItems();
			var selectedRepositoryIds = dojo.map(selectedRepositories, function(item) {
				return item.id;
			})		
			this._onOfficeOnlineChanged(selectedRepositoryIds);	
		},
		
		_onOfficeOnlineChanged: function(repositoryIds) {								
			if (this.officeOnlineEnableRadioButton.get("checked") && repositoryIds && !this._isOfficeOnlineServiceConfigured(repositoryIds)) {
				domClass.remove(this.officeOnlineInlineMessage, "dijitHidden");
			} else {
				domClass.add(this.officeOnlineInlineMessage, "dijitHidden");
			}
		},		
		
		_loadWithFieldValues: function(adminModel) {
			var isNewOrCopy = this.desktopData.isNew() || this.desktopData.isCopied();
			if (isNewOrCopy) {
				adminModel.id = this.idField.get('value');
				adminModel.setValue("id", adminModel.id);
			}
			
			if (!domClass.contains(this.shareRepositoryInlineMessage, "dijitHidden") || !domClass.contains(this.officeOnlineInlineMessage, "dijitHidden")) {
				adminModel.setWarning(true);
			}
			else {
				adminModel.setWarning(false);
			}
			
			adminModel.setValid(true);
			adminModel.setName(this.nameField.get('value'));
			adminModel.setDescription(this.descriptionField.get('value'));
			adminModel.setDefault(this.defaultDesktopCheckbox.get("checked") ? "Yes" : "No");
			if (this.errorMessageCustom.get("checked")) {
				adminModel.setMessageSearchUrl(!has("dojo-bidi") ? this.errorMessageCustomURL.get('value') : BidiComplex.stripSpecialCharacters(this.errorMessageCustomURL.get('value')));
			} else {
				adminModel.setMessageSearchUrl("");
			}
			if (this.desktopData.isAdmin()) {
				this._desktopAppearance.loadWithFieldValues(adminModel);
				adminModel.setAuthenticationType("1"); // container
				adminModel.setShareEnabled(false);
			} else {
				adminModel.setDefaultRepository(this.authenTypeRepository.get('value'));
				adminModel.setAuthenticationType("2"); // repository
				adminModel.setAccessControlEnabled(this._enableAccessControl.get("checked"));
				adminModel.setRoleBasedAdminEnabled(this._enableRoleBasedAdmin.get("checked"));
				this.desktopData.setAccessControlRepositoryType(this._getAuthenticationTypeRepository().type);
				this.desktopData.setAdminAccessControlRepositoryType(this._getAuthenticationTypeRepository().type);
				
				adminModel.setMergeSplitEnabled(this.mergeSplitEnableRadioButton.get("checked"));
				adminModel.setMergeSplitShowCheckIn(this.mergeSplitShowCheckInCheckBox.get("checked"));
				adminModel.setViewer(this.viewerMappingField.get('value'));
				adminModel.setSyncEnabled(this.syncServerEnable.get("checked"));
				adminModel.setPrintServiceEnabled(this.printServiceEnable.get("checked"));
				adminModel.setStreamlineEnabled(this.streamlineServiceEnable.get("checked"));
				adminModel.setMobileQREnabled(this.mobileQREnable.get("checked"));
				adminModel.setShareEnabled(this.shareEnable.get("checked"));
				if (this.shareEnable.get("checked")) {
					adminModel.setShareRepository(this.shareRepository.get("value"));
				} else {
					adminModel.setShareRepository("");
				}
				adminModel.setShareMyEmailModifiable(this.shareMyEmailModifiable.get("checked"));
				
				adminModel.setEmailServiceEnabled(this.emailServiceRadioButton.get("checked"));
				adminModel.setFromEmailModifiable(this.fromEmailModifiableCheckBox.get("checked"));
				adminModel.setUseFromEmailAsSender(this.fromEmailAsSenderCheckBox.get("checked"));				
				adminModel.setOfficeOnlineEnabled(this.officeOnlineEnableRadioButton.get("checked"));
				adminModel.setAllowCollaborativeEditing(this.allowCollaborativeEditingCheckBox.get("checked"));				
				if (!domClass.contains(this.officeOnlineInlineMessage, "dijitHidden")) {
					adminModel.setWarning(true);
				}
				
				adminModel.setFileIntoFolder(this.fileIntoFolderCheckbox.get('checked'));
				adminModel.setShowSecurity(this.showSecurityCheckbox.get('checked'));
				adminModel.setShowSecurityInheritanceUI(this.showSecurityInheritanceUICheckbox.get('checked'));
				adminModel.setSupportWorkflowNotification(this.wfEmailNotificationsCheckbox.get('checked'));
				adminModel.setPreventCreateNewSearch(this.preventCreateNewSearchCheckbox.get('checked'));
				adminModel.setPreventCreateNewUnifiedSearch(this.preventCreateNewUnifiedSearchCheckbox.get('checked'));
				adminModel.setHideEntryTemplateNotFoundWarning(this.hideEntryTemplateNotFoundWarningCheckbox.get('checked'));
				adminModel.setShowRoleSecurity(this.showRoleSecurityCheckbox.get('checked'));
				adminModel.setShowPrimaryDocumentOnly(this.showPrimaryDocumentOnlyCheckbox.get('checked'));
				
				adminModel.setCheckoutOnOpenDoc(this.openDocOnCheckoutCheckbox.get('checked'));
				adminModel.setPromptCloseOfficeIfDocCheckout(this.promptCloseOfficeCheckbox.get('checked'));
				// For backward compability only.  Set this based on the new editGroupAddButtonOption setting
				adminModel.setAddWithEntryTemplateOnly(this.editGroupAddButtonOption.get('value') == 3);

				adminModel.setDeleteLocalOnAdd(this.deleteLocalOnAddCheckbox.get('checked'));
				adminModel.setDeleteLocalOnCheckin(this.deleteLocalOnCheckinCheckbox.get('checked'));
				//adminModel.setDeleteLocalOnSave(this.deleteLocalOnSaveCheckbox.get('checked'));

				adminModel.setPromptForPropsOnAdd(this.promptForPropsOnAddCheckbox.get('checked'));
				adminModel.setDeleteEmailOnAdd(this.deleteEmailOnAddCheckbox.get('checked'));
				adminModel.setIndicateManagedEmailOnAdd(this.indicateManagedEmailOnAddCheckbox.get('checked'));
				adminModel.setSendEmailAsLinkOnly(this.sendEmailAsLinkOnlyCheckbox.get('checked'));
				adminModel.setOfficeBidiSupportFlag(this._bidiSupportFlag.get("checked"));
				if (this._bidiSupportFlag.get("checked")) {
					adminModel.setOfficeTextDirection(this._baseTextDirection.get("value"));
				} else {
					adminModel.setOfficeTextDirection("");
				}

				adminModel.setRedactionSaveMode(this.redactionSaveMode.get("value"));
				adminModel.setDocumentAddMode(this.documentAddMode.get("value"));
				adminModel.setEnablePropMappingForAdd(this.enablePropMappingForAddCheckbox.get('checked'));
				adminModel.setMaxNumberDocToAdd("" + this.maxNumberOfDocsToAdd.get('value'));
				adminModel.setControlThreshold("" + this.controlThreshold.get('value'));
				adminModel.setMaxNumberDocToModify("" + this.maxNumberOfDocsToModify.get('value'));
				adminModel.setMaxConversionSize("" + this.maxConversionSize.get('value'));
				adminModel.setMaxNumberDocToPrint("" + this.maxNumberOfDocsToPrint.get('value'));
				adminModel.setDisableDocumentTypeFiltering(this.disableDocumentTypeFilteringCheckbox.get('checked'));
				adminModel.setShowDetailsRecentlyUsed(this.showDetailsRecentlyUsedCheckbox.get('checked'));
				adminModel.setHideSearchActions(this.hideSearchActionsCheckbox.get('checked'));
				adminModel.setHideSaveDocument(this.hideSaveDocumentCheckbox.get('checked'));
				adminModel.setEditGroupAddButtonSetting(this.editGroupAddButtonOption.get('value'));
				adminModel.setDeleteOpenDocsAfterClose(this.deleteOpenDocsAfterCloseCheckbox.get('checked'));
				adminModel.setCheckoutDocumentAfterAdd(this.checkoutDocumentAfterAddCheckbox.get('checked'));
				adminModel.setOutlookPropertyRemembrance(this.outlookPropertyRemembranceCheckbox.get('checked'));
				adminModel.setOfficeCustomCommandGroupName("" + this.officeCommandGroupNameField.get('value'));
				adminModel.setOfficeCustomCommands(this._getOfficeCustomCommandsData(adminModel.id));
				adminModel.setRibbonTabLabel("" + this.ribbonTabLabelField.get('value'));
				adminModel.setCloseTaskPaneOnOpen(this.closeTaskPaneOnOpen.get('checked'));

				//timezone
//				adminModel.setEnableTimeZone(this.timeZoneRadioButtonAllUser.get("checked"));
//				if (this.timeZoneRadioButtonAllUser.get("checked")) {
//					adminModel.setTimeZoneUTCOffset(this.timeZoneField.get('value'));
//				}
				adminModel.setEnableHideTimePortion(this.enableHideTimePropertiesRadio.get("checked"));
				//file tracking info
				adminModel.setEnableFileTracking(this.enableFileTrackingRadioButtonYes.get("checked"));

				if (this.fileTrackingPathTypeEVRadioButton.get("checked")) {
					adminModel.setFileTrackingLocation(this.fileTrackingEVType.get("value"));

					if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.EV) {

						adminModel.setEnvironmentVariable(this.fileTrackingCustomENV.get("value"));
					} else {
						adminModel.setEnvironmentVariable("");
					}
					if (this.fileTrackingAQPForEV.get("checked")) {
						adminModel.setAppendPathComponent(true);
						adminModel.setQualifiedPath(!has("dojo-bidi") ? this.fileTrackingAQPForEVTB.get("value") : BidiComplex.stripSpecialCharacters(this.fileTrackingAQPForEVTB.get("value")));
					} else {
						adminModel.setAppendPathComponent(false);
						adminModel.setQualifiedPath("");
					}

				} else {
					adminModel.setFileTrackingLocation(FileTrackingLocation.locationTypes.EXACT_PATH);

					adminModel.setQualifiedPath(!has("dojo-bidi") ? this.fileTrackingQP.get("value") : BidiComplex.stripSpecialCharacters(this.fileTrackingQP.get("value")));
					if (this.fileTrackingAEVForQP.get("checked")) {
						adminModel.setAppendPathComponent(true);
						adminModel.setEnvironmentVariable(this.fileTrackingAEVForQPTB.get("value"));
					} else {
						adminModel.setAppendPathComponent(false);
						adminModel.setEnvironmentVariable("");
					}
				}
				//adminModel.setFileTrackingLocation(this.fileTrackingDocDirectory.get("value"));
				//adminModel.setQualifiedPath(this.fileTrackingQP.get("value"));
				//adminModel.setEnvironmentVariable(this.fileTrackingEV.get("value"));
				adminModel.setDeleteLocalCopy(this.deleteLocalCopyRadioButtonYes.get("checked"));
				adminModel.setOpenFile(this.openFileRadioButtonYes.get("checked"));
				adminModel.setDeleteLocalCopyRuntimeState(this.deleteLocalCopyOverride.get("checked"));
				adminModel.setOverWriteFile(this.overWriteFileRadioButtonYes.get("checked"));
				adminModel.setOverWriteFileRuntimeState(this.overWriteFileRadioButtonOverride.get("checked"));
				adminModel.setPluginIds(this._getSelectedPluginIds());
				adminModel.setEnableAllPlugins(this._enableAllPluginsRadio.get("checked"));
				adminModel.setAdminRoleId(this.desktopAccessRole.get("value"));

				this._desktopAppearance.loadWithFieldValues(adminModel);
				this._desktopRepositories.loadWithFieldValues(adminModel);
				this._desktopWorkflows.loadWithFieldValues(adminModel);
				this._desktopMenus.loadWithFieldValues(adminModel);
				this._desktopMobile.loadWithFieldValues(adminModel);
				this._desktopFeatures.loadWithFieldValues(adminModel);
			}
		},

		_getOfficeCustomCommandsData: function(desktopId) {
			var commands = this.getData(this._officeCommandsGrid);
			var commandArray = [];
			for (var i = 0; i < commands.length; i++) {
				var commandConfig = commands[i];
				// workaround the issue that we don't know about desktop id until now. otherwise prefix desktop id 
				// should be done in the add's connection method. 
				var id = (commandConfig.id.indexOf(desktopId) == -1) ? desktopId + "." + commandConfig.id : commandConfig.id;
				commandArray.push({
					id: id,
					_attributes: {
						desktopId: desktopId,
						available: commandConfig.available,
						label: commandConfig.label,
						description: commandConfig.description,
						url: commandConfig.url,
						icon: commandConfig.icon
					}
				});
			}

			return commandArray;
		},

		_onDefaultErrorMsgChange: function() {
			this.errorMessageCustomURL.set("disabled", true);
			if (!this.errorMessageCustomURL.get('value')) {
				this.errorMessageCustomURL.reset();
			}
		},

		_onCustomErrorMsgChange: function() {
			this.errorMessageCustomURL.set("disabled", false);
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			this._loadWithFieldValues(this.desktopData.desktopConfig);
			this.desktopData.save(lang.hitch(this, function(msg) {
				this.idField.set('disabled', true);
				this._updateName(this.desktopData.desktopConfig.getName());
				this.setTitle(this.desktopData.desktopConfig.getName());
				if (onComplete) {
					onComplete(true);
				}
				if (msg) {
					if (this._messageDialog) {
						this._messageDialog.destroy();
					}
					this._messageDialog = new MessageDialog({
						text: msg
					});
					this._messageDialog.show();
				} 
				this.setMobileAccessMessage();
			}));
		},

		_onClickDefaultDesktop: function() {
			this._onFieldChange();
		},

		_updateName: function(newName) {
			construct.place("<label>" + string.substitute(this._messages.admin_desktop_heading, [
				has("dojo-bidi") ? this.enforceTextDirWithUcc(null, newName) : newName
			]) + "</label>", this.headingText, "only");
		},

		isAllRequiredValuesSet: function() {
			return this.idField.get('value') != '' && this.nameField.get('value') != '';
		},

		/**
		 * Overwritten to return if it is resetting the fields to their original values.
		 */
		_isResetingFields: function() {
			if (this.desktopData.isEdit()) {
				if ((this.idField.get('value') != this.desktopData.desktopConfig.id) || (this.nameField.get('value') != this.desktopData.desktopConfig.getName())) {
					return false;
				} else if ((this.desktopData.desktopConfig.getDescription() && this.descriptionField.get('value') != this.desktopData.desktopConfig.getDescription()) || (!this.desktopData.desktopConfig.getDescription() && this.descriptionField.get('value') != "")) {
					return false;
				} else if (!this.defaultDesktopCheckbox.get('disabled')) {
					if ((!this.defaultDesktopCheckbox.get('checked') && (this.desktopData.desktopConfig.getDefault() == "Yes")) || (this.defaultDesktopCheckbox.get('checked') && (this.desktopData.desktopConfig.getDefault() == "No"))) {
						return false;
					}
				} else {
					var appURLPrefix = this.desktopData.desktopConfig.getMessageSearchUrl() == undefined ? "" : this.desktopData.desktopConfig.getMessageSearchUrl();
					if (appURLPrefix == "" && this.errorMessageCustom.get('checked')) {
						return false;
					} else if (appURLPrefix != "" && this.errorMessageDefault.get("checked")) {
						return false;
					} else if (appURLPrefix != "" && appURLPrefix != this.errorMessageCustomURL.get('value')) {
						return false;
					}
				}
				if (!this.desktopData.desktopConfig.isAccessControlEnabled() && this._enableAccessControl.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.isAccessControlEnabled() && this._disableAccessControl.get("checked")) {
					return false;
				}
				if (!this.desktopData.desktopConfig.isRoleBasedAdminEnabled() && this._enableAccessControl.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.isRoleBasedAdminEnabled() && this._disableRoleBasedAdmin.get("checked")) {
					return false;
				}
				if (!this.desktopData.desktopConfig.getSyncEnabled() && this.syncServerEnable.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.getSyncEnabled() && this.syncServerDisable.get("checked")) {
					return false;
				}				
				if (!this.desktopData.desktopConfig.getPrintServiceEnabled() && this.printServiceEnable.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.getPrintServiceEnabled() && this.printServiceDisable.get("checked")) {
					return false;
				}
				if (!this.desktopData.desktopConfig.getStreamlineEnabled() && this.streamlineServiceEnable.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.getStreamlineEnabled() && this.streamlineServiceDisable.get("checked")) {
					return false;
				}
				if (!this.desktopData.desktopConfig.getMobileQREnabled() && this.mobileQREnable.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.getMobileQREnabled() && this.mobileQRDisable.get("checked")) {
					return false;
				}
				if (!this.desktopData.desktopConfig.getShareEnabled() && this.shareEnable.get("checked")) {
					return false;
				} else if (this.desktopData.desktopConfig.getShareEnabled() && this.shareDisable.get("checked")) {
					return false;
				}
				if (!this.shareMyEmailModifiable.get('checked') && this.desktopData.desktopConfig.getShareMyEmailModifiable()) {
					return false;
				} else if (this.shareMyEmailModifiable.get('checked') && !this.desktopData.desktopConfig.getShareMyEmailModifiable()) {
					return false;
				}
				if (!this.shareRepository.get('value') && this.desktopData.desktopConfig.getShareRepository()) {
					return false;
				} else if (this.shareRepository.get('value') && !this.desktopData.desktopConfig.getShareRepository()) {
					return false;
				}
				
				if (!!this.emailServiceRadioButton.get("checked") !== !!this.desktopData.desktopConfig.getEmailServiceEnabled()) {
					return false;
				}
				if (!!this.fromEmailModifiableCheckBox.get("checked") !== !!this.desktopData.desktopConfig.getFromEmailModifiable()) {
					return false;
				}
				if (!!this.fromEmailAsSenderCheckBox.get("checked") !== !!this.desktopData.desktopConfig.getUseFromEmailAsSender()) {
					return false;
				}
				
				if (!this.fileIntoFolderCheckbox.get('checked') && this.desktopData.desktopConfig.getFileIntoFolder()) {
					return false;
				} else if (this.fileIntoFolderCheckbox.get('checked') && !this.desktopData.desktopConfig.getFileIntoFolder()) {
					return false;
				}
				if (!this.showSecurityCheckbox.get('checked') && this.desktopData.desktopConfig.getShowSecurity()) {
					return false;
				} else if (this.showSecurityCheckbox.get('checked') && !this.desktopData.desktopConfig.getShowSecurity()) {
					return false;
				}
				if (!this.showRoleSecurityCheckbox.get('checked') && this.desktopData.desktopConfig.getShowRoleSecurity()) {
					return false;
				} else if (this.showRoleSecurityCheckbox.get('checked') && !this.desktopData.desktopConfig.getShowRoleSecurity()) {
					return false;
				}
				if (!this.showPrimaryDocumentOnlyCheckbox.get('checked') && this.desktopData.desktopConfig.getShowPrimaryDocumentOnly()) {
					return false;
				} else if (this.showPrimaryDocumentOnlyCheckbox.get('checked') && !this.desktopData.desktopConfig.getShowPrimaryDocumentOnly()) {
					return false;
				}
				if (!this.showSecurityInheritanceUICheckbox.get('checked') && this.desktopData.desktopConfig.getShowSecurityInheritanceUI()) {
					return false;
				} else if (this.showSecurityInheritanceUICheckbox.get('checked') && !this.desktopData.desktopConfig.getShowSecurityInheritanceUI()) {
					return false;
				}
				if (!this.wfEmailNotificationsCheckbox.get('checked') && this.desktopData.desktopConfig.getSupportWorkflowNotification()) {
					return false;
				} else if (this.wfEmailNotificationsCheckbox.get('checked') && !this.desktopData.desktopConfig.getSupportWorkflowNotification()) {
					return false;
				}
				if (!this.preventCreateNewSearchCheckbox.get('checked') && this.desktopData.desktopConfig.getPreventCreateNewSearch()) {
					return false;
				} else if (this.preventCreateNewSearchCheckbox.get('checked') && !this.desktopData.desktopConfig.getPreventCreateNewSearch()) {
					return false;
				}
				if (!this.preventCreateNewUnifiedSearchCheckbox.get('checked') && this.desktopData.desktopConfig.getPreventCreateNewUnifiedSearch()) {
					return false;
				} else if (this.preventCreateNewUnifiedSearchCheckbox.get('checked') && !this.desktopData.desktopConfig.getPreventCreateNewUnifiedSearch()) {
					return false;
				}
				if (!this.hideEntryTemplateNotFoundWarningCheckbox.get('checked') && this.desktopData.desktopConfig.getHideEntryTemplateNotFoundWarning()) {
					return false;
				} else if (this.hideEntryTemplateNotFoundWarningCheckbox.get('checked') && !this.desktopData.desktopConfig.getHideEntryTemplateNotFoundWarning()) {
					return false;
				}
				if (this.maxNumberOfDocsToAdd.get('value') != this.desktopData.desktopConfig.getMaxNumberDocToAdd()) {
					return false;
				}
				if (this.controlThreshold.get('value') != this.desktopData.desktopConfig.getControlThreshold()) {
					return false;
				}
				if (this.maxNumberOfDocsToModify.get('value') != this.desktopData.desktopConfig.getMaxNumberDocToModify()) {
					return false;
				}
				if (this.maxConversionSize.get('value') != this.desktopData.desktopConfig.getMaxConversionSize()) {
					return false;
				}
				if (this.maxNumberOfDocsToPrint.get('value') != this.desktopData.desktopConfig.getMaxNumberDocToPrint()) {
					return false;
				}
				if (this.viewerMappingField.get('value') != this.desktopData.desktopConfig.getViewer()) {
					return false;
				}
				if (this.redactionSaveMode.get('value') != this.desktopData.desktopConfig.getRedactionSaveMode()) {
					return false;
				}

//				if (this.timeZoneRadioButtonLocalUser.get('checked') == this.desktopData.desktopConfig.getEnableTimeZone()) {
//					return false;
//				}
				if (this.disableTimePropertiesRadio.get('checked') == this.desktopData.desktopConfig.getEnableHideTimePortion()) {
					return false;
				}
				if (this.syncServerEnable.get('checked') == this.desktopData.desktopConfig.getSyncEnabled()) {
					return false;
				}
				if (this.streamlineServiceEnable.get('checked') == this.desktopData.desktopConfig.getStreamlineEnabled()) {
					return false;
				}
				if (this.mobileQREnable.get('checked') == this.desktopData.desktopConfig.getMobileQREnabled()) {
					return false;
				}
				if (this.printServiceEnable.get('checked') == this.desktopData.desktopConfig.getPrintServiceEnabled()) {
					return false;
				}

//				var timeZoneOffset = this.desktopData.desktopConfig.getTimeZoneUTCOffset();
//				if (timeZoneOffset && timeZoneOffset.length > 0 && dojo.isArray(timeZoneOffset)) {
//					timeZoneOffset = timeZoneOffset[0];
//				}
//				if (this.timeZoneField.get('value') != timeZoneOffset) {
//					return false;
//				}

				if (this._hasOfficeSettingChanged())
					return false;

				if (this._hasPluginSettingChanged())
					return false;
			} else {
				if ((this.idField.get('value') != "") || (this.nameField.get('value') != "") || (this.descriptionField.get('value') != "")) {
					return false;
				}
				if (this.defaultDesktopCheckbox.get('checked')) {
					return false;
				}
			}

			var isResetting = this._desktopAppearance.isResetingFields();
			if (isResetting && !this.desktopData.isAdmin()) {
				isResetting = this._desktopRepositories.isResetingFields() || this._desktopMenus.isResetingFields() || this._desktopWorkflows.isResetingFields() || this._desktopMobile.isResetingFields() || this._desktopFeatures.isResetingFields();
			}

			isResetting = isResetting && this._hasFileTrackingInfoChanged();
			return isResetting;
		},

		_hasFileTrackingInfoChanged: function() {
			var resetting = true;
			if (this._loadingFileTrackingData) {
				resetting = true;
			} else if (this.fileTrackingEnabled && this.desktopData.desktopConfig.getEnableFileTracking()) {
				var curLocationType, curEnvVariable, curAppendState, curQualifiedPath;
				if (this.fileTrackingPathTypeEV) {
					curLocationType = this.fileTrackingEVType.get("value");
					if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.EV) {
						curEnvVariable = this.fileTrackingCustomENV.get("value");
					} else {
						curEnvVariable = "";
					}
					if (this.fileTrackingAQPForEV.get("checked")) {
						curAppendState = true;
						curQualifiedPath = !has("dojo-bidi") ? this.fileTrackingAQPForEVTB.get("value") : BidiComplex.stripSpecialCharacters(this.fileTrackingAQPForEVTB.get("value"));
					} else {
						curAppendState = false;
						curQualifiedPath = "";
					}

				} else {
					curLocationType = FileTrackingLocation.locationTypes.EXACT_PATH;
					curQualifiedPath = !has("dojo-bidi") ? this.fileTrackingQP.get("value") : BidiComplex.stripSpecialCharacters(this.fileTrackingQP.get("value"));
					if (this.fileTrackingAEVForQP.get("checked")) {
						curAppendState = true;
						curEnvVariable = this.fileTrackingAEVForQPTB.get("value");
					} else {
						curAppendState = false;
						curEnvVariable = "";
					}
				}

				if (curLocationType == this.desktopData.desktopConfig.getFileTrackingLocation() && curEnvVariable == this.desktopData.desktopConfig.getEnvironmentVariable() && curAppendState == this.desktopData.desktopConfig.getAppendPathComponent() && curQualifiedPath == this.desktopData.desktopConfig.getQualifiedPath() && this.desktopData.desktopConfig.getDeleteLocalCopy() == this.deleteLocalCopyRadioButtonYes.get("checked") && this.desktopData.desktopConfig.getOpenFile() == this.openFileRadioButtonYes.get("checked") && this.desktopData.desktopConfig.getDeleteLocalCopyRuntimeState() == this.deleteLocalCopyOverride.get("checked") && this.desktopData.desktopConfig.getOverWriteFile() && this.overWriteFileRadioButtonYes.get("checked") && this.desktopData.desktopConfig.getOverWriteFileRuntimeState() == this.overWriteFileRadioButtonOverride.get("checked")) {
					resetting = true;
				} else {
					resetting = false;
				}

			} else if (this.fileTrackingEnabled != this.desktopData.desktopConfig.getEnableFileTracking()) {
				resetting = false;
			}
			return resetting;
		},

		_hasOfficeSettingChanged: function() {
			if (this._ctrlValueChanged(this.openDocOnCheckoutCheckbox, this.desktopData.desktopConfig.getCheckoutOnOpenDoc()))
				return true;
			if (this._ctrlValueChanged(this.promptCloseOfficeCheckbox, this.desktopData.desktopConfig.getPromptCloseOfficeIfDocCheckout()))
				return true;
			if (this._ctrlValueChanged(this.deleteLocalOnAddCheckbox, this.desktopData.desktopConfig.getDeleteLocalOnAdd()))
				return true;
			if (this._ctrlValueChanged(this.deleteLocalOnCheckinCheckbox, this.desktopData.desktopConfig.getDeleteLocalOnCheckin()))
				return true;
			if (this._ctrlValueChanged(this.enablePropMappingForAddCheckbox, this.desktopData.desktopConfig.getEnablePropMappingForAdd()))
				return true;
			if (this._ctrlValueChanged(this.disableDocumentTypeFilteringCheckbox, this.desktopData.desktopConfig.getDisableDocumentTypeFiltering()))
				return true;
			if (this._ctrlValueChanged(this.showDetailsRecentlyUsedCheckbox, this.desktopData.desktopConfig.getShowDetailsRecentlyUsed()))
				return true;
			if (this._ctrlValueChanged(this.hideSearchActionsCheckbox, this.desktopData.desktopConfig.getHideSearchActions()))
				return true;
			if (this._ctrlValueChanged(this.hideSaveDocumentCheckbox, this.desktopData.desktopConfig.getHideSaveDocument()))
				return true;
			if (this._ctrlValueChanged(this.editGroupAddButtonOption, this.desktopData.desktopConfig.getEditGroupAddButtonSetting()))
				return true;
			if (this._ctrlValueChanged(this.promptForPropsOnAddCheckbox, this.desktopData.desktopConfig.getPromptForPropsOnAdd()))
				return true;
			if (this._ctrlValueChanged(this.deleteEmailOnAddCheckbox, this.desktopData.desktopConfig.getDeleteEmailOnAdd()))
				return true;
			if (this._ctrlValueChanged(this.indicateManagedEmailOnAddCheckbox, this.desktopData.desktopConfig.getIndicateManagedEmailOnAdd()))
				return true;
			if (this._ctrlValueChanged(this.sendEmailAsLinkOnlyCheckbox, this.desktopData.desktopConfig.getSendEmailAsLinkOnly()))
				return true;
			if (this._ctrlValueChanged(this.deleteOpenDocsAfterCloseCheckbox, this.desktopData.desktopConfig.getDeleteOpenDocsAfterClose()))
				return true;
			if (this._ctrlValueChanged(this.checkoutDocumentAfterAddCheckbox, this.desktopData.desktopConfig.getCheckoutDocumentAfterAdd()))
				return true;
			if (this._ctrlValueChanged(this._bidiSupportFlag, this.desktopData.desktopConfig.getOfficeBidiSupportFlag()))
				return true;
			if (this._ctrlValueChanged(this._baseTextDirection, this.desktopData.desktopConfig.getOfficeTextDirection()))
				return true;
			if (this._ctrlValueChanged(this.outlookPropertyRemembranceCheckbox, this.desktopData.desktopConfig.getOutlookPropertyRemembrance()))
				return true;

			return false;
		},

		// return true if the value in the control is different from the config value
		_ctrlValueChanged: function(ctrl, configVal) {
			var valAttr = null;
			if (ctrl instanceof ecm.widget.CheckBox)
				valAttr = "checked";
			else
				valAttr = "value";

			var ctrlVal = ctrl.get(valAttr);
			if (ctrlVal != configVal)
				return true;

			return false;
		},

		isUniqueId: function() {
			var isUnique = this.desktopData.isUniqueId(this.idField.get('value'));
			if (!isUnique) {
				this.idField.setCustomValidationError(this._messages.admin_id_in_use);
			}
			this.idField.validate();
			return isUnique;
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function(focus) {
			if (!this.idField.get('disabled') && !this.isUniqueId()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}

			if (!this.idField.isValid()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}
			if (!this.nameField.isValid()) {
				if (focus) {
					this.nameField.focus();
				}
				return false;
			}
			if (this.errorMessageCustom.get("checked") && this.errorMessageCustomURL.get("value") == "") {
				return false;
			}

			if (!this.desktopData.isAdmin() && !this.authenTypeRepository.isValid()) {
				if (focus) {
					this.authenTypeRepository.focus();
				}
				return false;
			}

			if (this.maxNumberOfDocsToAdd && !this.desktopData.isAdmin()) {
				if (!this.maxNumberOfDocsToAdd.isValid()) {
					if (focus) {
						this.maxNumberOfDocsToAdd.focus();
					}
					return false;
				}
			}

			if (this.controlThreshold && !this.desktopData.isAdmin()) {
				if (!this.controlThreshold.isValid()) {
					if (focus) {
						this.controlThreshold.focus();
					}
					return false;
				}
			}

			if (this.maxNumberOfDocsToModify && !this.desktopData.isAdmin()) {
				if (!this.maxNumberOfDocsToModify.isValid()) {
					if (focus) {
						this.maxNumberOfDocsToModify.focus();
					}
					return false;
				}
			}

			if (this.maxConversionSize && !this.desktopData.isAdmin()) {
				if (!this.maxConversionSize.isValid()) {
					if (focus) {
						this.maxConversionSize.focus();
					}
					return false;
				}
			}

			var isValid = true;
			if (this.desktopData.isAdmin()) {
				isValid = this._desktopAppearance.validateData(focus);
			} else {
				if (!this.viewerMappingField.isValid()) {
					if (focus) {
						this.viewerMappingField.focus();
					}
					return false;
				}

				isValid = this._desktopRepositories.validateData(focus) && this._desktopMenus.validateData(focus) && this._desktopWorkflows.validateData(focus) && this._desktopAppearance.validateData(focus) && this._desktopFeatures.validateData(focus) && this._desktopMobile.validateData(focus);

				if (isValid && this.fileTrackingEnabled) {
					if (this.fileTrackingPathTypeEV) {
//					if (this.fileTrackingPathTypeEVRadioButton.get("checked")) {
						if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.EV || this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.HOME_PATH || this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.MY_DOCUMENTS) {

							if (this.fileTrackingEVType.get("value") == FileTrackingLocation.locationTypes.EV) {
								isValid = !this.fileTrackingCustomENV._isEmpty(this.fileTrackingCustomENV.textbox.value);
							}
							if (this.fileTrackingAQPForEVTB.get("required")) {
								isValid = isValid && !this.fileTrackingAQPForEVTB._isEmpty(this.fileTrackingAQPForEVTB.textbox.value);
							}
						} else {
							isValid = true;
						}
					} else {
						isValid = !this.fileTrackingQP._isEmpty(this.fileTrackingQP.textbox.value);
						if (this.fileTrackingAEVForQPTB.get("required")) {
							isValid = isValid && !this.fileTrackingAEVForQPTB._isEmpty(this.fileTrackingAEVForQPTB.textbox.value);
						}

					}
				}
			}
			
			if (isValid && this._enableRoleBasedAdmin.get("checked")){
				isValid = this.desktopAccessRole.get("value") ? true : false;
			}

			return isValid;
		},

		_setViewerMapping: function(viewers, value) {
			var _items = [];
			for (var i = 0; i < viewers.length; i++) {
				var viewer = viewers[i];
				_items.push({
					"id": viewer.id,
					"label": viewer.getName()
				});
			}
			this.viewerMappingField.set("store", new MemoryStore({
				data: _items
			}));
			if (value) {
				this.viewerMappingField.set('value', value);
			}
		},

		_onNameChange: function() {
			if (!this.idField.get('disabled')) {
				this.idField.set('value', this._getIdValueFromName(this.nameField.get('value')));
			}
			this._onFieldChange();
		},

		_onShareChange: function() {
			var methodName = "_onShareChange";
			this.logEntry(methodName);
			var shareEnabled = this.shareEnable.get('checked');
			if (shareEnabled) {
				this.logDebug(methodName, "Share is enabled.");
				// If enabled share and only 1 Box repository, then auto select that one repository for the admin.
				if (!this.shareRepository.get("value")) {
					if (this.shareRepository.store && this.shareRepository.store.data && this.shareRepository.store.data.length == 1 && this.shareRepository.store.data[0] && this.shareRepository.store.data[0].id) {
						this.shareRepository.set("value", this.shareRepository.store.data[0].id)
					}
					else {
						domClass.remove(this.shareRepositoryInlineMessage, "dijitHidden");
					}
				}		
				else {
					domClass.add(this.shareRepositoryInlineMessage, "dijitHidden");
				}
			}
			else {
				domClass.add(this.shareRepositoryInlineMessage, "dijitHidden");
			}

			this.shareRepository.set("disabled", !shareEnabled);
			this.shareMyEmailModifiable.set("disabled", !shareEnabled);
			this._setSloshbucketFixedValues();
			this.logExit(methodName);
		},

		_setShareRepositoriesInUI: function(repositories) {
			var appHasRepositories = repositories != null && repositories.length > 0;
			var items = [];
			if (appHasRepositories) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (repository.getType() == "box" && repository.isBoxServerTokenEnabled()) {
						items.push({
							"id": repository.id,
							"label": repository.getName()
						});
					}
				}
			}
			this.shareRepository.set("store", new MemoryStore({
				data: items
			}));
			var value = this.desktopData.desktopConfig.getShareRepository();
			if (value) {
				this.shareRepository.set('value', value);
			}

			// If no repositories, then hide the share row
			if (!appHasRepositories) {
				domClass.add(this.shareRow, "dijitHidden");
			} else {
				domClass.remove(this.shareRow, "dijitHidden");
			}
			// If no Box repositories, display the inline message.
			if (items.length == 0) {
				domClass.remove(this.shareRepositoryInlineMessage, "dijitHidden");
			}
		},

		_onFieldShareReposChange: function() {
			this._onFieldChange();
			if (this.shareRepository.get("value")){
				domClass.add(this.shareRepositoryInlineMessage, "dijitHidden");
			}
			else {
				domClass.remove(this.shareRepositoryInlineMessage, "dijitHidden");
			}
		},
		
		_onEmailTypeChange: function() {
			var useEmailService = this.emailServiceRadioButton.get("checked");
			this.fromEmailModifiableCheckBox.set("disabled", !useEmailService);
			this.fromEmailAsSenderCheckBox.set("disabled", !useEmailService);
		},
		
		_onPrintServiceChange: function() {
			var printEnabled = this.printServiceEnable.get("checked");
			this.maxNumberOfDocsToPrint.set("disabled", !printEnabled);
		},

		/**
		 * Add the authentication repositoryId and share repositoryId to the repository sloshbucket and make it fixed so
		 * the user cannot remove it from the sloshbucket.
		 * 
		 * @private
		 */
		_setSloshbucketFixedValues: function() {
			var fixedRepositories = [];
			var authenTypeRepositoryId = this.authenTypeRepository.get("value");
			if (authenTypeRepositoryId) {
				fixedRepositories.push(authenTypeRepositoryId);
			}
			this._desktopRepositories.sloshBucket.setFixedValues(fixedRepositories);
		},
		
		/**
		 * @private
		 */
		_setDesktopRole: function() {
			var callback = lang.hitch(this, function(config){
				var adminRoles;
				if (ecm.model.desktop.isDesktopAdminUser){
					adminRoles = [config];
					this.desktopAdminRole = config;
				}
				else {
					if (Array.isArray(config)){
						adminRoles = config;
					}
					else {
						adminRoles = config.adminRoles
					}
				}
				
				var items = [];
				for (i in adminRoles){
					var adminRole = adminRoles[i];
					items.push({
						id: adminRole.id,
						label: adminRole._attributes.name
					});
				}
				this.desktopAccessRole.set("store", new MemoryStore({
					data: items
				}));
				this.desktopAccessRole.set("value", this.desktopData.desktopConfig.getAdminRoleId());
				
				if (ecm.model.desktop.isDesktopAdminUser){
					this._setupForDesktopAdmin();
				}
				
				// Set the _initialized flag, since we postponed setting it
				// earlier.
				setTimeout(lang.hitch(this, function() {
					this._initialized = true;
				}), 300);
			});
			
			if (ecm.model.desktop.isDesktopAdminUser){
				// Get the single admin role that applies to this desktop
				this.desktopData.desktopConfig.getAdminRoleConfig(callback);
			}
			else if (ecm.model.admin.adminData.adminRoles){
				callback(ecm.model.admin.adminData.adminRoles)
			}
			else {
				ecm.model.admin.adminData.loadAdminRoles(callback);
			}
		},
		_setAccessControlGroup: function(hideAccessControlMembersButtonDiv){
			this._renderAccessControlGrouping(this.desktopData.accessControlArray, "desktop");
			style.set(this._enableUserGroupAccessButtons, "display", "none");
			if(hideAccessControlMembersButtonDiv)
				style.set(this._selectAccessControlMembersButtonDiv, "display", "none");

		},
		_setupForDesktopAdmin: function(){
			if (ecm.model.desktop.isDesktopAdminUser){
				style.set(this._selectAccessControlMembersButton, "display", "none");
				// Disable name, description, and auth repository
				this.nameField.set("disabled", true);
				this.descriptionField.set("disabled", true);
				this.authenTypeRepository.set("disabled", true);
				this.desktopAccessRole.set("disabled", true);
				var repository = this._getAuthenticationTypeRepository();
				if (!this.desktopAdminRole || this.desktopData.desktopConfig.isAccessControlEnabled()){
					
					if (!this.desktopAdminRole || !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADD_USERS_GROUPS_PRIVILEGE)){
						//style.set(this._setUserGroupAccess, "display", "none");
						
						// Need to display a read only view of users who have access to this desktop when desktop access is enabled but the DTA doesn't have permission to 
						// modify it.
						
						this._readOnlyAccessControlGrouping = true;
						if(repository.type == "p8"){
							this.desktopData.loadDesktopAccessConfig(repository.type, lang.hitch(this, function() {
								this._renderAccessControlGrouping(this.desktopData.accessControlArray, "desktop");
								this._setAccessControlGroup(true);
								this._readOnlyAccessControlGrouping = false; // clear value
							}));
						} else {
							this._setAccessControlGroup(true);
							this._readOnlyAccessControlGrouping = false; // clear value
						}
					}
					else {
						this._readOnlyAccessControlGrouping = false;
						if(repository.type == "p8"){
							this.desktopData.loadDesktopAccessConfig(repository.type, lang.hitch(this, function() {
								this._setAccessControlGroup(false);
							}));
						} else {
							this._setAccessControlGroup(false);
						}
				
					}
					style.set(this._accessControlLogonButton, "display", "none");
				}
				else {
					style.set(this._enableUserGroupAccess, "display", "none");
					style.set(this._setUserGroupAccess, "display", "none");
				}
				
				style.set(this.desktopAdminRoleButtons, "display", "none");
				style.set(this._desktopAdminSelectMembersButton.domNode, "display", "none");

				style.set(this._desktopAccessControlList, "display", "");
				
				//  Need to display a read only view of desktop administrators.
				this.readOnlyAccessList = true;
				if(repository.type == "p8"){
					this.desktopData.loadDesktopAdminAccessConfig(repository.type, lang.hitch(this, function() {
						this.initializeACL(this.desktopData.adminAccessControlArray);
						style.set(this._desktopAdminAccessControlLogonButton.domNode, "display", "none");
						style.set(this._desktopAdminAccessControlContainer, "display", "none");
						this.readOnlyAccessList = false;					
					}));
				} else {
					this.initializeACL(this.desktopData.adminAccessControlArray);
					style.set(this._desktopAdminAccessControlLogonButton.domNode, "display", "none");
					style.set(this._desktopAdminAccessControlContainer, "display", "none");
					this.readOnlyAccessList = false;					
				}
				

				
				
				// Check that the desktop administrator has access to at least one of the controls in the Desktop Configuration section.
				// If not, hide it.
				if (!this.desktopAdminRole || (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE)	&&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE))){
					
					style.set(this.configTitlePane.domNode, "display", "none");
				}
				else {
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_VIEWERMAP_PRIVILEGE)){
						style.set(this.viewerMappingFieldRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_MERGE_SPLIT_PRIVILEGE)){
						style.set(this.mergeSplitRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_SYNC_SVC_PRIVILEGE)){
						style.set(this.syncServerRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_EDIT_SVC_PRIVILEGE)){
						style.set(this.streamlineRow, "display", "none");
					}
					
					style.set(this.shareRow, "display", "none");
					style.set(this.officeOnlineRow, "display", "none");
					style.set(this.emailSettingsRow, "display", "none");
					style.set(this.errorMessageInfoRow, "display", "none");
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADDL_SETTINGS_PRIVILEGE)){
						style.set(this.addlSettingsRow, "display", "none");
					}
					else {
						style.set(this.defaultDesktopCheckboxDiv, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADD_DOC_DIALOG_PRIVILEGE)){
						style.set(this.documentAddModeRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_DEF_REDACTION_PRIVILEGE)){
						style.set(this.redactionSaveModeRow, "display", "none");
					}
					
					style.set(this.maxNumberOfDocsToAddRow, "display", "none");
					style.set(this.maxNumberOfDocsToModifyRow, "display", "none");
					style.set(this.maxConversionSizeRow, "display", "none");
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_TIME_STAMP_PRIVILEGE)){
						style.set(this.timeFiledSetting, "display", "none");
					}
					
					style.set(this.mobileQRRow, "display", "none");
					style.set(this.printServiceRow, "display", "none");
				}

				style.set(this.pluginsTwisty.domNode, "display", "none");
				style.set(this.fileTrackingConfSection.domNode, "display", "none");
				
				if (!this.desktopAdminRole || (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE)	&&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE))){
					
					style.set(this.msOfficeConfSection.domNode, "display", "none");
				}
				else{
					style.set(this.customCommandConfigurationRow, "display", "none");
					style.set(this.officeBidiConfigRow, "display", "none");
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_TAB_LABEL_PRIVILEGE)){
						style.set(this.officeTabLabelRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_OFFICE_GEN_CONF_PRIVILEGE)){
						style.set(this.officeGenConfigRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_ADD_OPTION_PRIVILEGE)){
						style.set(this.editGroupAddOptionRow, "display", "none");
					}
					
					if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.GENERAL_OUTLOOK_PRIVILEGE)){
						style.set(this.officeOutlookConfigRow, "display", "none");
					}
					else {
						style.set(this.deleteEmailOnAddSection, "display", "none");
					}
					
				}				
				this._desktopFeatures.setupForDesktopAdmin(this.desktopAdminRole);
				
				if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.APPEARANCE_APP_NAME_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.APPEARANCE_THEME_PRIVILEGE)){
					
					// Hide the appearance tab if there is nothing a desktop admin can do.
					style.set(this._desktopAppearance.controlButton.domNode, "display", "none");
				}
				else {
					this._desktopAppearance.setupForDesktopAdmin(this.desktopAdminRole);
				}

				if (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE) &&
						!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE)){
					
					// Hide the appearance tab if there is nothing a desktop admin can do.
					style.set(this._desktopMenus.controlButton.domNode, "display", "none");
				}
				else {
					this._desktopMenus.setupForDesktopAdmin(this.desktopAdminRole);
				}

				//  Hide the mobile tab if for desktop admins if mobile access is not enabled  or there is nothing to show on that tab.
				if (this.desktopData.desktopConfig.getMobileAppAccess()){
					if (!this.desktopAdminRole || (!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE) &&
							!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE) &&
							!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE) &&
							!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE) && 
							!this.desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE))){
		
						style.set(this._desktopMobile.controlButton.domNode, "display", "none");
					}
					else {
						this._desktopMobile.setupForDesktopAdmin(this.desktopAdminRole);
					}
				}
				else {
					style.set(this._desktopMobile.controlButton.domNode, "display", "none");
				}
			}
		},
		
		/**
		 * @private
		 */
		_setAuthenticationTypeInUI: function(repositories) {
			var appHasRepositories = repositories != null && repositories.length > 0;
			var items = [];
			if (appHasRepositories) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (repository.getDesktopAuthenticationSupported()) {
						items.push({
							"id": repository.id,
							"label": repository.getName()
						});
					}
				}
			}
			this.authenTypeRepository.set("store", new MemoryStore({
				data: items
			}));
			var value = this.desktopData.desktopConfig.getDefaultRepository();
			if (value) {
				this.authenTypeRepository.set('value', value);
			}

			if (this.desktopData.desktopConfig.isAccessControlEnabled()) {
				this._enableAccessControl.set("checked", true);
			} else {
				this._disableAccessControl.set("checked", true);
			}
			// If disabled access control, then hide the access control button & container
			if (this._disableAccessControl.get("checked")) {
				style.set(this._accessControlLogonButton.domNode, "display", "none");
				style.set(this._accessControlContainer, "display", "none");
			}

			if (this.desktopData.desktopConfig.isRoleBasedAdminEnabled()) {
				this._enableRoleBasedAdmin.set("checked", true);
			} else {
				this._disableRoleBasedAdmin.set("checked", true);
			}
			// If disabled role based admin, then hide the access control button & container
			if (this._disableRoleBasedAdmin.get("checked")) {
				style.set(this.desktopAdminRoleContainer, "display", "none");
			}

			// If no repositories or if no repository selected, then disable the access control and role based admin radio buttons.
			if (!appHasRepositories || !this.authenTypeRepository.get('value')) {
				this._enableAccessControl.set("disabled", true);
				this._disableAccessControl.set("disabled", true);
				this._enableRoleBasedAdmin.set("disabled", true);
				this._disableRoleBasedAdmin.set("disabled", true);
			}
		},

		/**
		 * @private
		 */
		_onEnableAccessControl: function() {
			// Show the access contol container data.  This will be empty if the user hits disable access control and then enable. 
			this._renderAccessControlGrouping(this.desktopData.accessControlArray, "desktop");
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onDisableAccessControl: function() {
			this._onFieldChange();
			// Clear the access control UI and structures
			this._clearAccessControl();
		},

		/**
		 * @private
		 */
		_onDeleteEmailOnAddChange: function() {
			var value = this.deleteEmailOnAddCheckbox.get('checked');
			if (value) {
				this.indicateManagedEmailOnAddCheckbox.set('checked', false);
				this.indicateManagedEmailOnAddCheckbox.set('disabled', true);
			} else {
				this.indicateManagedEmailOnAddCheckbox.set('disabled', false);
			}
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onDeleteLocalOnAddChange: function() {
			var value = this.deleteLocalOnAddCheckbox.get('checked');
			if (value) {
				this.checkoutDocumentAfterAddCheckbox.set('checked', false);
				this.checkoutDocumentAfterAddCheckbox.set('disabled', true);
			} else {
				this.checkoutDocumentAfterAddCheckbox.set('disabled', false);
			}
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onFieldAuthenTypeReposChange: function() {
			var isInit = this._init != undefined && this._init == true ? true : false;
			this._onFieldChange();
			// Add the repositoryId to the repository sloshbucket and make it fixed so the user cannot remove it from the sloshbucket
			this._setSloshbucketFixedValues();
			if (isInit) {
				// Set the disable access control button to checked
				this._disableAccessControl.set("checked", true);
				this._disableRoleBasedAdmin.set("checked", true);
			}

			// Check if the repository supports access control.  If not, disable the radio buttons; otherwise, enable the radio buttons.
			var repositoryId = this.authenTypeRepository.get("value");
			var adminRepos = this.desktopData.getRepositoryConfig(repositoryId);

			var accessControlSupported = false;
			if (repositoryId && adminRepos && adminRepos.getType() != "box") {
				accessControlSupported = true;
			}

			this._enableAccessControl.set("disabled", !accessControlSupported);
			this._disableAccessControl.set("disabled", !accessControlSupported);
			this._enableRoleBasedAdmin.set("disabled", !accessControlSupported);
			this._disableRoleBasedAdmin.set("disabled", !accessControlSupported);

			if (this._init) {
				// Show cleared access control data
				this._clearAccessControl();
				this._clearAdminAccessControl();
			}
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this.inherited(arguments);
			}
		},
		/**
		 * @private
		 */
		_setTimeZoneUI: function() {
			this.timeZoneField.set("store", new MemoryStore({
				data: this.desktopData.timezones
			}));
			if (this.desktopData.desktopConfig.getEnableTimeZone()) {
				this._onTimeZoneAllUser();
			} else {
				this._onTimeZoneLocalUser();
			}
		},
		/**
		 * @private
		 */
		_onTimeZoneLocalUser: function() {
			this.timeZoneRadioButtonLocalUser.set("checked", true);
			this.timeZoneRadioButtonAllUser.set("checked", false);
			this.timeZoneField.set("disabled", true);
		},

		/**
		 * @private
		 */
		_onTimeZoneAllUser: function() {
			this.timeZoneRadioButtonLocalUser.set("checked", false);
			this.timeZoneRadioButtonAllUser.set("checked", true);
			this.timeZoneField.set("disabled", false);
			if (this.desktopData.desktopConfig.getTimeZoneUTCOffset()) {
				this.timeZoneField.set('value', this.desktopData.desktopConfig.getTimeZoneUTCOffset().toString());
			} else {
				this.timeZoneField.set('value', 'Etc/UTC');
			}
		},
		/**
		 * @private
		 */
		_onTimeZoneChange: function() {
			if (this._initialized) {
				this.inherited(arguments);
			}
			this._onFieldChange();
		},
		/**
		 * @private
		 */
		_setEnableTimePropertiesUI: function() {
			if (this.desktopData.desktopConfig.getEnableHideTimePortion()) {
				this._onEnableHideTimeProperties();
			} else {
				this._onDisableHideTimeProperties();
			}
		},
		/**
		 * @private
		 */
		_onDisableHideTimeProperties: function() {
			this.disableTimePropertiesRadio.set("checked", true);
			this.enableHideTimePropertiesRadio.set("checked", false);
		},

		/**
		 * @private
		 */
		_onEnableHideTimeProperties: function() {
			this.disableTimePropertiesRadio.set("checked", false);
			this.enableHideTimePropertiesRadio.set("checked", true);
		},

		/**
		 * @private
		 * @return ecm.model.Repository
		 */
		_getAuthenticationTypeRepository: function() {
			var repositoryId = this.authenTypeRepository.get("value");
			if (!this._authenRepository || !this._authenRepository.id || ((this._authenRepository.id.indexOf("_CIWEBADMIN") != -1) ? this._authenRepository.id.replace("_CIWEBADMIN", "") : this._authenRepository.id) != repositoryId) {
				// Create the repository object
				var repositoryCfg = this.desktopData.getRepositoryConfig(repositoryId);
				var params = {
					id: repositoryId,
					name: repositoryCfg.getName(),
					type: repositoryCfg.getType(),
					connected: false,
					isForAdministration: true
				};
				if (repositoryCfg.getType() == "p8") {
					params.serverName = repositoryCfg.getServerName();
					params.objectStoreName = repositoryCfg.getObjectStore();
					params.objectStoreDisplayName = repositoryCfg.getObjectStoreDisplayName();
					params.protocol = repositoryCfg.getProtocol();
				} else if (repositoryCfg.getType() == "cm") {
					params.serverName = repositoryCfg.getServerName();
				}
				this._authenRepository = new Repository(params);
			}
			ecm.model.desktop._storeAdminRepository(this._authenRepository);
			return this._authenRepository;
		},

		/**
		 * @private
		 */
		_onClickShowAccessControlData: function() {
			var repository = this._getAuthenticationTypeRepository();
			if (repository) {
				if (repository.connected || repository.type != "p8") {
					if (repository.type == "p8") {
						this.desktopData.loadDesktopAccessConfig(repository.type, lang.hitch(this, function() {
							this._renderAccessControlGrouping(this.desktopData.accessControlArray, "desktop");
						}));
					} else {
						this._renderAccessControlGrouping(this.desktopData.accessControlArray,"desktop");
					}
				} else {
					this._logonToRepository(repository, lang.hitch(this, function() {
						if (repository.type == "p8") {
							this.desktopData.loadDesktopAccessConfig(repository.type, lang.hitch(this, function() {
								this._renderAccessControlGrouping(this.desktopData.accessControlArray, "desktop");
							}));
						} else {
							this._renderAccessControlGrouping(this.desktopData.accessControlArray,"desktop");
						}
					}));
				}
			}
		},

		/**
		 * @private
		 */
		_logonToRepository: function(repository, callback, params) {
			if (!this._loginDialog) {
				this._loginDialog = new AdminLoginDialog();
			}

			if (!params) {
				params = {};
			}

			params.displayName = repository.name;
			if (repository.type == "p8") {
				params.serverName = repository.serverName;
				params.objectStore = repository.objectStoreName;
				params.objectStoreDisplayName = repository.objectStoreDisplayName;
				params.protocol = repository.protocol;
			} else if (repository.type == "cm") {
				params.serverName = repository.serverName;
			} else if (repository.type == "box") {
				params.serverName = repository.serverName;
				params.oAuthEnabled = repository.repositoryConfig.isOAuthEnabled();
				params.oAuthClientId = repository.repositoryConfig.getOAuthClientId();
				params.oAuthClientSecret = repository.repositoryConfig.getOAuthClientSecret();
			}
			this._loginDialog.show(repository.type, repository.id, repository.name, params, lang.hitch(this, function(response) {
				repository._loadRepository(response);
				if (callback) {
					callback();
				}
			}));
		},

		/**
		 * @private
		 */
		_onClickShowAddUsersAndGroupsDialog: function() {
			var repository = this._getAuthenticationTypeRepository();
			if (repository) {
				if (repository.connected) {
					this._showAddUsersAndGroupsDialog(repository, false, this.desktopData.accessControlArray, "desktop");
				} else {
					this._logonToRepository(repository, lang.hitch(this, function() {
						this._showAddUsersAndGroupsDialog(repository, true, this.desktopData.accessControlArray, "desktop");
					}));
				}
			}
		},

		/**
		 * @private
		 */
		_showAddUsersAndGroupsDialog: function(repository, logoffOnPrivilegeError, accessControlArray, accessType) {
			if (repository.type == "cm" && !repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog)
					this._errorDialog = new ErrorDialog();
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_add_desktop_members_error"));
				if (logoffOnPrivilegeError) { // Logoff allows the user to relogin with a new user. 
					repository.logoff();
				}
			} else {

				if (this._accessControlDialog) {
					this._accessControlDialog.destroy();
				}
				var permissions = [];
				var selectedUserGroups = [];
				array.forEach(accessControlArray, lang.hitch(this, function(accessControlItem) {
					permissions.push({
						value: accessControlItem.id,
						label: accessControlItem.label
					});
					array.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup) {
						selectedUserGroups.push(userGroup);
					}));
				}));

				var queryMode = "all";
				if (repository.type == "cmis")
					queryMode = "users";

				this._accessControlDialog = new UserGroupPermissionDialog({
					permissions: permissions,
					filteredItems: selectedUserGroups,
					repository: this._getAuthenticationTypeRepository(),
					callback: lang.hitch(this, this._accessControlDialogCallback, accessControlArray, accessType),
					queryMode: queryMode
				});

				this.own(aspect.after(this._accessControlDialog, "onScopeChanged", lang.hitch(this, function(scope) {
					if (scope) {
						if (scope == "groups") {
							this._accessControlDialog.getPermissionsSelect().set("value", "ALLOW");
						}
						this._accessControlDialog.getPermissionsSelect().set("disabled", scope == "groups");
					}
				}), true));

				this.own(aspect.after(this._accessControlDialog, "onNameTypeChanged", lang.hitch(this, function(nameType) {
					if (nameType) {
						var isGroup = this._accessControlDialog.getNameTypeGroupRadioButton().get("checked");
						if (isGroup) {
							this._accessControlDialog.getPermissionsSelect().set("value", "ALLOW");
						}
						this._accessControlDialog.getPermissionsSelect().set("disabled", isGroup);
					}
				}), true));

				this._accessControlDialog.show();
			}
		},

		/**
		 * @private
		 */
		_accessControlDialogCallback: function(accessControlArray, accessType, permissionId, selectedUserGroups) {
			for ( var j in accessControlArray) {
				var accessControlItem = accessControlArray[j];
				if (accessControlItem.id == permissionId) {
					for (var i = 0; i < selectedUserGroups.length; i++) {
						accessControlItem.usersGroups.push(selectedUserGroups[i]);
					}
					break;
				}
			}
			
			if(accessType == "admin" ){
				if(	this.desktopAccessList.grid.store.data.length > 0)
					this.desktopAccessList.addItems(accessControlArray);
				else
					this.initializeACL(accessControlArray);	
				if( this._enableAccessControl.get("checked")){
					array.forEach(selectedUserGroups, lang.hitch(this, function(selection) {
						var notFound = true;
						if((permissionId == "ALLOW")){
							
							array.forEach(this.desktopData.accessControlArray, lang.hitch(this, function(access) {
								if(access.id == "ALLOW"){
									array.forEach(access.usersGroups, lang.hitch(this, function(item) {
										if(item.id == selection.id){
											notFound = false;
										}
									}));
								}
									
							}));
							
							if(notFound){
								var index = 1;
								if(this.desktopData.accessControlArray[0].id == "ALLOW")
									index = 0;
							
								this.desktopData.accessControlArray[index].usersGroups.push(selection);
								this._renderAccessControlGrouping(this.desktopData.accessControlArray,  "ALLOW");
							}
						}
					
					}));
				}	
			}
			else
				this._renderAccessControlGrouping(accessControlArray, accessType);
			this._markDirty();
		},

		/**
		 * @private
		 */
		_renderAccessControlGrouping: function(accessControlArray, accessType) {
			var accessControlData  = this._accessControlData;
			var accessControlContainer = this._accessControlContainer;
			var accessControlLogonButton = this._accessControlLogonButton;
			var readOnlyAccessControlGrouping = this._readOnlyAccessControlGrouping;
			if(accessType && accessType == "admin"){
				style.set(this.desktopAdminRoleContainer, "display", "");
				
				accessControlData  = null;
				accessControlLogonButton = this._desktopAdminAccessControlLogonButton;
				accessControlContainer = this._desktopAdminAccessControlContainer;
				this._clearAdminAccessControlUI();
				this._adminAccessMemberButtons = [];
				
				style.set(this._desktopAccessControlListLabel, "display", "");
				style.set(this._desktopAccessControlList, "display", "");
			}
			else{
				this._clearAccessControlUI();
				this._accessMemberButtons = [];
			}
			
			style.set(accessControlLogonButton.domNode, "display", "none");
			style.set(accessControlContainer, "display", "");
			var membersDiv = construct.create("div");
			if (accessControlData){
				construct.place(membersDiv, accessControlData, "only");
			}
			array.forEach(accessControlArray, lang.hitch(this, function(accessControlItem) { // No acccess and allow are the 2 permissions for now
				var div = construct.create("div", {
					'class': 'privilegeContainer'
				}, membersDiv);
				construct.create("div", {
					'class': 'ecmLabel leftPane',
					innerHTML: accessControlItem.label + ":"
				}, div);
				var members = construct.create("div", {
					'class': 'rightPane'
				}, div);
				array.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup, index) {
					var member = construct.create("div", {
						'class': "member"
					}, members);
					var button = new CompositeButton({
						disabled: true,
						label: userGroup.displayName,
						tooltip: "", 
						actionIconClass: readOnlyAccessControlGrouping ? null : "removeIcon",
						actionAltText:  readOnlyAccessControlGrouping ? null : string.substitute(this._messages.remove_member, [
							userGroup.displayName
						])
					});
					domClass.remove(button._actionFocusNode, "dijitHidden");
					button.connect(button._actionFocusNode, "onmouseover", function() {
						Tooltip.show(button.actionAltText, button._actionFocusNode);
					});
					button.connect(button._actionFocusNode, "onmouseout", function() {
						Tooltip.hide(button._actionFocusNode);
					});
					this.own(aspect.after(button, "_onActionButtonClick", lang.hitch(this, function(evt) {
						accessControlItem.usersGroups.splice(index, 1);
						this._markDirty();
						this._renderAccessControlGrouping(accessControlArray, accessType);
					}), true));
					member.appendChild(button.domNode);
					if(accessType && accessType == "admin")
						this._adminAccessMemberButtons.push(button);
					else
						this._accessMemberButtons.push(button);
				}));
				members.appendChild(construct.create("div", {
					'class': "member",
					innerHTML: "&nbsp;"
				}));
			}));
		},

		/**
		 * @private
		 */
		_clearAccessControlUI: function() {
			if (this._accessMemberButtons) {
				array.forEach(this._accessMemberButtons, function(item) {
					if (!item._destroyed) {
						item.destroyRecursive();
					}
					delete item;
				});
				this._accessMemberButtons = null;
			}
			if (this._accessControlData && this._accessControlData.firstChild) {
				this._accessControlData.removeChild(this._accessControlData.firstChild);
			}
		},

		/**
		 * @private
		 */
		_clearAccessControl: function() {
			// Hide the access control container data
			style.set(this._accessControlContainer, "display", "none");
			// Hide show access control button 
			style.set(this._accessControlLogonButton.domNode, "display", "none");

			// Clear the UI widgets in the access control container
			this._clearAccessControlUI();

			this.desktopData.clearAccessControlUsersGroups();
		},
		/**
		 * @private
		 */
		_clearAdminAccessControlUI: function() {
			this.desktopAccessList.removeAllItems();
		},		
		/**
		 * @private
		 */
		_clearAdminAccessControl: function() {
			// Hide show access control button 
			style.set(this._desktopAdminAccessControlLogonButton.domNode, "display", "none");

			// Clear the UI widgets in the access control container
			this._clearAdminAccessControlUI();

			this.desktopData.clearAdminAccessControlUsersGroups();
		},		

		resize: function() {
			this.borderContainer.resize();
			if (this._officeCommandsGrid)
				this._officeCommandsGrid.resize();
			if (this._pluginsGrid)
				this._pluginsGrid.resize();
		},

		/**
		 * @private Called when the user changes the bidi support value in the checkbox.
		 */
		_onBidiSupportFlagChange: function() {
			this._baseTextDirection.set("disabled", !this._bidiSupportFlag.get("checked"));
		},

		/**
		 * @private Called when the user changes the base text direction in the pulldown.
		 */
		_onBaseTextDirectionChange: function() {
			this._markDirty();
		},

		_loadTextDirections: function(selectedTextDir) {
			if (this._baseTextDirection.getOptions(0)) {
				this._baseTextDirection.removeOption(this._baseTextDirection.getOptions());
			}

			var valueToSelect = null;
			var options = [
				{
					label: ecm.messages.change_locale_base_text_direction_default,
					value: ""
				},
				{
					label: ecm.messages.change_locale_base_text_direction_ltr,
					value: "ltr"
				},
				{
					label: ecm.messages.change_locale_base_text_direction_rtl,
					value: "rtl"
				},
				{
					label: ecm.messages.change_locale_base_text_direction_contextual,
					value: "auto"
				}
			];
			for ( var i in options) {
				var textDirConfig = options[i];
				// Using addOption as it supports html.
				if (selectedTextDir && (selectedTextDir == textDirConfig.value)) {
					valueToSelect = textDirConfig.value;
				}
				this._baseTextDirection.addOption({
					value: textDirConfig.value,
					label: textDirConfig.label
				});
			}
			if (valueToSelect) {
				this._baseTextDirection.set("value", valueToSelect);
			}

			this._baseTextDirection.set("disabled", !this._bidiSupportFlag.get("checked"));
		},

		_loadRedactionSaveMode: function(saveMode) {
			if (this.redactionSaveMode.getOptions(0)) {
				this.redactionSaveMode.removeOption(this.redactionSaveMode.getOptions());
			}

			var valueToSelect = null;
			var options = [
				{
					label: this._messages.admin_desktop_redaction_save_mode_user_select,
					value: "userSelect"
				},
				{
					label: this._messages.admin_desktop_redaction_save_mode_new_version,
					value: "newVersion"
				},
				{
					label: this._messages.admin_desktop_redaction_save_mode_new_document,
					value: "newDocument"
				},
				{
					label: this._messages.admin_desktop_redaction_save_mode_local_content,
					value: "localFile"
				}
			];
			for ( var i in options) {
				var saveModeConfig = options[i];
				if (saveMode && (saveMode == saveModeConfig.value)) {
					valueToSelect = saveModeConfig.value;
				}
				this.redactionSaveMode.addOption({
					value: saveModeConfig.value,
					label: saveModeConfig.label
				});
			}
			if (valueToSelect) {
				this.redactionSaveMode.set("value", valueToSelect);
			}
		},

		_loadDocumentAddMode: function(saveMode) {
			if (this.documentAddMode.getOptions(0)) {
				this.documentAddMode.removeOption(this.documentAddMode.getOptions());
			}

			var valueToSelect = null;
			var options = [
				{
					label: this._messages.admin_desktop_document_add_mode_standard,
					value: DesktopConfig.DocumentAddMode.STANDARD
				},
				{
					label: this._messages.admin_desktop_document_add_mode_entry_template,
					value: DesktopConfig.DocumentAddMode.ENTRY_TEMPLATE
				}
			];
			for ( var i in options) {
				var addDocumentConfig = options[i];
				if (saveMode && (saveMode == addDocumentConfig.value)) {
					valueToSelect = addDocumentConfig.value;
				}
				this.documentAddMode.addOption({
					value: addDocumentConfig.value,
					label: addDocumentConfig.label
				});
			}
			if (valueToSelect) {
				this.documentAddMode.set("value", valueToSelect);
			}
		},

		_setBidiSupportFlag: function(bidiSupportFlag) {
			this._bidiSupportFlag.set("checked", bidiSupportFlag);
		},

		/**
		 * @private Refreshes the plug-ins grid with the current plug-ins
		 */
		_refreshPluginsGrid: function() {
			if (!this._pluginsGrid) {
				var d = new Deferred();
				Deferred.when(this._initializePluginsGrid(), function() {
					d.callback();
				}, function(e) {
					d.errback(e);
				});
				return d;
			} else {
				this._pluginsGrid.setStore(this._createPluginsStore());
			}
		},

		/**
		 * @private Initializes the plug-ins grid
		 */
		_initializePluginsGrid: function() {
			if (this._pluginsGrid) {
				this._pluginsGrid.destroy();
			}
			var self = this;
			this._pluginsGrid = new Grid({
				region: "center",
				"aria-label": this._messages.admin_desktop_plugins,
				id: this.id + "_pluginsGrid",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: this._createPluginsStore(),
				structure: [
					{
						field: "selected",
						headerAriaLabel: this._messages.admin_desktop_plugins_select_plugin,
						width: "30px",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						decorator: function(data, rowId, rowIndex) {
							return '<span data-dojo-type="dijit/form/CheckBox" data-dojo-attach-point="cb">';
						},
						setCellValue: function(data, storeData, cellWidget) {
							this.cb.set("checked", data);
							var item = cellWidget.cell.row.item();
							if (item) {
								domAttr.set(this.cb.focusNode, "aria-label", item.name);
							}
							cellWidget.own(aspect.after(cellWidget.cb, "onChange", function() {
								if (self._initialized){
									var message;
									var dependency;
									if (!cellWidget.cb.get("checked")){
										dependency = self._canDisablePlugin(item);
										if (dependency.dependencyExists) {
											cellWidget.cb.set("checked", true);
											item.selected = true;
											message = string.substitute(self._messages.admin_plugin_cannot_disable, [
											       dependency.requiredPlugins.join(","),
											       dependency.requiredByPlugins.join(",")
											]);
										}
									}
									else{
										dependency = self._canEnablePlugin(item);
										if (dependency.dependencyExists) {
											cellWidget.cb.set("checked", false);
											item.selected = false;
											message = string.substitute(self._messages.admin_plugin_cannot_enable, [
											        dependency.requiredByPlugins.join(","),
											        dependency.requiredPlugins.join(",")
											]);
										}
									}
									
									if (dependency.dependencyExists){
									
										// popup message to alert the user they made a mistake
										if (self._pluginDependencyDialog) {
											self._pluginDependencyDialog.destroy();
										}
		
										self._pluginDependencyDialog = new MessageDialog({
											text: message
										});
										self._pluginDependencyDialog.show();
									} else {
										item.selected = cellWidget.cb.get("checked");
										self._onFieldChange();
										self.onAddAndRemovePlugins();
									}
								}
							}));
						}
					},
					{
						field: "name",
						name: this._messages.name_label
					}
				],
				style: "height: 270px; width: 325px;",
				modules: [
					CellWidget,
					Focus
				]
			});
			domClass.add(this._pluginsGrid.domNode, "compact gridxWholeRow");
			this._pluginsGridArea.appendChild(this._pluginsGrid.domNode);
			this._pluginsGrid.startup();
			this.resize();
		},

		/**
		 * @private Creates the plug-ins grid store
		 */
		_createPluginsStore: function() {
			this.pluginsStore = null;
			var items = [];
			var pluginIds = [];

			if (this.desktopData) {
				var pluginIds = this.desktopData.desktopConfig.getPluginIds();
				var allSelected = this.desktopData.desktopConfig.getEnableAllPlugins();

				var selectedIds = {};
				if (pluginIds && pluginIds.length > 0) {
					for ( var i in pluginIds) {
						selectedIds[pluginIds[i]] = true;
					}
				}

				if (this.desktopData.availablePlugins) {
					array.forEach(this.desktopData.availablePlugins, lang.hitch(this, function(entry, index) {
						var selected = allSelected;
						if (!selected)
							selected = selectedIds[entry.id] | false;

						items.push({
							"id": entry.id,
							"name": entry.getName(),
							"dependencies": entry.getPluginDependencies(),
							"selected": selected
						});
					}));
				}
			}

			this.pluginsStore = new MemoryStore({
				data: items
			});
			return this.pluginsStore;
		},

		/**
		 * Gets the selected plug-in ids
		 * 
		 * @private
		 */
		_getSelectedPluginIds: function() {
			var pluginsData = this.getData(this._pluginsGrid);
			var selectedPluginIds = [];
			for (var i = 0; i < pluginsData.length; i++) {
				if (pluginsData[i].selected == true) {
					selectedPluginIds.push(pluginsData[i].id);
				}
			}
			return selectedPluginIds;
		},

		/**
		 * Determines if a plug-in has any dependencies.
		 * 
		 * @since 2.0.3.7
		 */
		_canDisablePlugin: function(item) {
			var requiredByPlugins = [], requiredPlugins = [];
			var dependencyExists = false;
			var pluginsData = this.getData(this._pluginsGrid);
			var allSelected = this._enableAllPluginsRadio.get('checked');
			
			var requiredByPluginsObject = {};
			
			if (!allSelected) {
				array.forEach(pluginsData, function(pluginConfig) {
					if (pluginConfig.id != item.id && pluginConfig.dependencies && pluginConfig.selected) {
						for (var i = 0; pluginConfig.dependencies && i < pluginConfig.dependencies.length; i++) {
							if (pluginConfig.dependencies[i] == item.id) {
								dependencyExists = true;
								
								if (!requiredByPluginsObject[pluginConfig.id]){
									requiredByPluginsObject[pluginConfig.id] = true;
									requiredByPlugins.push(pluginConfig.name);
								}
							}
						}
					}
				});
			}
			
			if (dependencyExists){
				requiredPlugins.push(item.name);
			}

			return {
				dependencyExists: dependencyExists,
				requiredByPlugins: requiredByPlugins,
				requiredPlugins: requiredPlugins
			};
		},
		
		/**
		 * Determines whether any other plugins have dependencies on a given plugin
		 * 
		 * @since 2.0.3.8.
		 */
		_canEnablePlugin: function(item){
			var requiredByPlugins = [], requiredPlugins = [];
			var dependencyExists = false;
			var pluginsData = this.getData(this._pluginsGrid);
			
			var requiredPluginsObject = {};
			
			var plugins = {};
			for (var index  = 0; index < pluginsData.length; index++){
				var pluginConfig = pluginsData[index];			
				plugins[pluginConfig.id] = pluginConfig;
			}
			
			var requiredPluginIds = item.dependencies;
			for (var index in requiredPluginIds){
				var requiredPluginId = requiredPluginIds[index];
				var requiredPluginConfig = plugins[requiredPluginId];
				if (requiredPluginConfig && !requiredPluginConfig.selected){
					dependencyExists = true;
					
					if (!requiredPluginsObject[requiredPluginId]){
						requiredPluginsObject[requiredPluginId] = true;
						requiredPlugins.push(requiredPluginConfig.name);
					}
				}
			}
			
			if (dependencyExists){
				requiredByPlugins.push(item.name)
			}
			
			return {
				dependencyExists: dependencyExists,
				requiredByPlugins: requiredByPlugins,
				requiredPlugins: requiredPlugins
			};
		},

		/**
		 * Handle a click on the enable all plug-ins radio button.
		 * 
		 * @private
		 */
		_onEnableAllPlugins: function() {
			this._onFieldChange();
			style.set(this._pluginsArea, "display", "none");
		},

		/**
		 * Handle a click on the select plug-ins radio button.
		 * 
		 * @private
		 */
		_onSelectPlugins: function() {
			this._onFieldChange();
			style.set(this._pluginsArea, "display", "block");
			if (this._pluginsGrid)
				this._pluginsGrid.resize();
		},

		/**
		 * Determines if the plug-in settings have been updated.
		 * 
		 * @private
		 */
		_hasPluginSettingChanged: function() {
			if (this._enableAllPluginsRadio.get('checked') != this.desktopData.desktopConfig.getEnableAllPlugins()) {
				return true;
			}

			var selectedPlugins = this._getSelectedPluginIds();
			var pluginIds = this.desktopData.desktopConfig.getPluginIds();
			for ( var i in selectedPlugins) {
				var selectedPlugin = selectedPlugins[i];
				var found = false;
				for ( var j in pluginIds) {
					if (selectedPlugin == pluginIds[j])
						found = true;
				}

				if (!found)
					return true;
			}

			return false;
		},

		_isOfficeOnlineServiceConfigured: function(repositoryIds) {
			// Checks to see if the Office online service URL is set
			if (!this.desktopData.settings.officeOnlineEnabled || !this.desktopData.settings.officeOnlineServiceURL || this.desktopData.settings.officeOnlineServiceURL.length == 0)
				return false;
			// Checks to see if there is a P8 repository with Office online enabled.
			if (repositoryIds) {
				var hasRepositories = this.desktopData.repositories != null && this.desktopData.repositories.length > 0;			
				if (hasRepositories) {
					for (var i= 0; i < repositoryIds.length; i++) {
						var id = repositoryIds[i];
						if (array.some(this.desktopData.repositories, function(item) { return item.id == id && (item.getType() == "p8" || item.getType() == "cm")&& item.getOfficeOnlineEnabled(); })) {
							return true;
					    }
					}				
				}			
			}
			return false;				
		},

		/**
		 * @private 
		 */
		_onFieldDesktopAdminAccessReposChange: function() {
			
		},
		/**
		 * @private 
		 */
		_onClickDesktopShowUsersGroupsDialog: function() {
			var repository = this._getAuthenticationTypeRepository();
			if (repository) {
				if (repository.connected) {
					this._showAddUsersAndGroupsDialog(repository, false, this.desktopData.adminAccessControlArray, "admin");
				} else {
					this._logonToRepository(repository, lang.hitch(this, function() {
						this._showAddUsersAndGroupsDialog(repository, true, this.desktopData.adminAccessControlArray, "admin");
					}));
				}
			}
		},
		/**
		 * @private 
		 */
		_onClickDesktopAdminShowAC: function() {
			var repository = this._getAuthenticationTypeRepository();
			if (repository) {
				if (repository.connected || repository.type != "p8") {
					if (repository.type == "p8") {
						this.desktopData.loadDesktopAdminAccessConfig(repository.type, lang.hitch(this, function() {
							this.initializeACL(this.desktopData.adminAccessControlArray);
						}));
					} else {
						this.initializeACL(this.desktopData.adminAccessControlArray);
					}
				} else {
					this._logonToRepository(repository, lang.hitch(this, function() {
						if (repository.type == "p8") {
							this.desktopData.loadDesktopAdminAccessConfig(repository.type, lang.hitch(this, function() {
								this.initializeACL(this.desktopData.adminAccessControlArray);
							}));
						} else {
							this.initializeACL(this.desktopData.adminAccessControlArray);
						}
					}));
				}
			}
		},	
		
		onSelectSelection: function(){
			
		},
		
		/***
		 * 
		 */
		initializeACL: function(items) {
			style.set(this._desktopAccessControlListLabel, "display", "block");
			style.set(this._desktopAccessControlList, "display", "block");
			this.desktopAccessList.readOnly =this.readOnlyAccessList;			
			var modules = [
						Row,
						Header,
						Focus,
						ColumnResizer,
						FilterModule,
						VirtualVScroller, // large dojo/store/Memory performs much faster with VirtualVScroller
						{
							moduleClass: Body,
							emptyInfo: ""
						},							
						{
						moduleClass: SingleSort,
						initialOrder: [{
								colId: "principalId",
								descending: false 
						}]
			}];
   
			this.desktopAccessList.coreModules = modules;
			this._userGroupStore = this._buildStore(items);
			this.desktopAccessList.setModel(this.getColumns(), this._userGroupStore);
			this.desktopAccessList.resize();
			this.connect(this.desktopAccessList, "onFieldChange", function() {
				var items = this.desktopAccessList.getAllItems();
				for ( var j in this.desktopData.adminAccessControlArray) {
					var accessControlItem = this.desktopData.adminAccessControlArray[j];
					accessControlItem.usersGroups = []; // clear in case of a remove 
					
					if (accessControlItem.id == "ALLOW") {
						for (var i = 0; i < items.length; i++) {
							if(items[i].access == Permission.ACCESS_TYPE.ALLOW){
								delete items[i]['formattedDisplayName'];
								accessControlItem.usersGroups.push(items[i]);
							}
						}
					} else {
						for (var i = 0; i < items.length; i++) {
							if(items[i].access == Permission.ACCESS_TYPE.DENY){
								delete items[i]['formattedDisplayName'];
								accessControlItem.usersGroups.push(items[i]);
							}
						}							
					}
				}	
			});
			
			style.set(this._desktopAdminAccessControlLogonButton.domNode, "display", "none");
			style.set(this._desktopAdminAccessControlContainer, "display", "");

		},

		_buildStore: function(items) {
			var _identifier = "id";
			var _label = "name";
			var _members = []	;
			var _this = this;
			var i=0;
			array.forEach(items, function(item) {
				
				array.forEach(item.usersGroups, function(member) {
					if(item.id == "ALLOW")
						_members.push(_this.desktopAccessList.formatSelectedUserGroup(member, Permission.ACCESS_TYPE.ALLOW));
					else
						_members.push(_this.desktopAccessList.formatSelectedUserGroup(member, Permission.ACCESS_TYPE.DENY));
					
					
				});
			});
			

			var store = new MemoryStore({
				data: _members,
				comparatorMap: {
					"formattedDisplayName": this._localeCompare
				}
			});
		

			return store;
		},

		getColumns: function(items) {
			return [
				{
					id: "principalId",
					field: "formattedDisplayName",
					name: this._messages.desktop_rba_membership_list_label,
					decorator: function(data){
						return data;
					}
				}
			];			
			
		},
		
		/**
		 * @private
		 */
		_onEnableRoleBasedAdmin: function(){
			// Show the role based admin control container data.  This will be empty if the user hits disable access control and then enable. 
			this._setDesktopRole();
			this.initializeACL([]);
			//this._renderAccessControlGrouping(this.desktopData.accessControlArray, "admin");
			style.set(this.desktopAdminRoleContainer, "display", "");
			

			if(this.desktopAccessList.grid.store.data.length == 0){
				style.set(this._desktopAccessControlListLabel, "display", "none");
				style.set(this._desktopAccessControlList, "display", "none");
			}
			this._onFieldChange();
		},
		
		
		
		/**
		 * @private
		 */
		_onDisableRoleBasedAdmin: function(){
			this._onFieldChange();			
			// Clear the access control UI and structures
			this._clearAdminAccessControl();
			this.desktopAccessRole.set("value", "");
			style.set(this.desktopAdminRoleContainer, "display", "none");
			style.set(this._desktopAccessControlListLabel, "display", "none");
			style.set(this._desktopAccessControlList, "display", "none");
		},
		
		/**
		 * @private 
		 */
		_onDesktopAccessRoleChange: function(){
			this._onFieldChange();
		},
		
		/**
		 * Event method triggered when the selected plug-in list changes.
		 */
		onAddAndRemovePlugins: function() {
		},

		/**
		 * Handles the widget shutdown cleanup.
		 */
		uninitialize: function() {
			if (this._errorDialog) {
				this._errorDialog.destroy();
				delete this._errorDialog;
			}
			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
			if (this._accessControlDialog) {
				this._accessControlDialog.destroy();
				delete this._accessControlDialog;
			}
			if (this._officeCommandDialog) {
				this._officeCommandDialog.destroy();
				delete this._officeCommandDialog;
			}
		}
	});
});

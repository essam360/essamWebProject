/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/string",
	"dojo/_base/sniff",
	"dojo/keys",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/model/Request",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/CheckBox",
	"ecm/widget/FilterTextBox",
	"ecm/widget/admin/SettingLogging",
	"ecm/widget/admin/SettingAdminUsers",
	"ecm/widget/admin/FileTypeCategoriesDialog",
	"ecm/model/admin/SettingsData",
	"ecm/model/admin/SettingsConfig",
	"ecm/widget/_MoveUpDownMixin",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/layout/TabController",
	"dojo/store/Memory",
	"ecm/model/admin/InterfaceTextConfig",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/NumberSpinner",
	"idx/layout/TitlePane",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/admin/GeneralCustomPropertiesDialog",
	"dojo/text!./templates/TabSettings.html"
], //

function(declare, lang, array, aspect, domClass, string, has, keys, registry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, MessagesMixin, Request, _NavigatorAdminTabBase, HoverHelp, RadioButton, CheckBox, FilterTextBox, SettingLogging, SettingAdminUsers, FileTypeCategoriesDialog, SettingsData, SettingsConfig, _MoveUpDownMixin, MessageDialog, TabController, MemoryStore, InterfaceTextConfig, Grid, Cache, Row, Focus, SelectRow, ExtendedSelectRow, SingleSort, ColumnResizer, FilterModule, CellWidget, BidiComplex, NumberSpinner, TitlePane, ValidationTextBox,GeneralCustomPropertiesDialog,template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabSettings
	 * @class Provides a widget that contains the widgets that are used to set values that apply to all of the desktops
	 *        in a configuration. The widgets are displayed in a tabbed pane.
	 */
	return declare("ecm.widget.admin.TabSettings", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		_MoveUpDownMixin
	], {
		/** @lends ecm.widget.admin.TabSettings.prototype */

		templateString: template,
		widgetsInTemplate: true,
		defaultFileTypes: [
			"word",
			"excel",
			"powerpoint",
			"outlook",
			"pdf",
			"boxnote"
		],
		_SECURITY_TOPIC: {
			category: "settings.settings"
		},

		postCreate: function() {
			this.inherited(arguments);             		
			this.resetButton.set("title", this.messages.reset_hover);
			this.generalSection.title = this.messages.admin_general;
			this._fileTypeCategoriesFilter.set("placeholder", this.messages.admin_file_type_contains_label);
			this._fileTypeCategoriesFilter.set("aria-label", this._messages.filter + " " + this._messages.admin_file_type_contains_label);
			this.adminUsers.set("title", this.messages.admin_adminusers);
			this.logging.set("title", this.messages.admin_logging);
			this.taskManagerConfSection.set("title", this.messages.admin_taskmanager_title);
			this.officeOnlineConfSection.set("title", this.messages.admin_office_online_title);
			this.ICNEditConfSection.set("title", this.messages.admin_icn_edit_title);
			//this.customSettings.dialogClass = GeneralCustomPropertiesDialog;
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.settingsData = SettingsData.createSettingsData(this._SECURITY_TOPIC);
			this._init = false;
			this._disableSave();
			this._disableReset();
			this._setHoverHelp();
			this._addConnections();
			this._loadData();
		},

		/**
		 * @private Add the connections.
		 */
		_addConnections: function() {
			this.own(aspect.after(this.adminUsers, "onMarkDirty", lang.hitch(this, "onChange"), true));
			this.own(aspect.after(this.logging, "onMarkDirty", lang.hitch(this, "onChange"), true));

			this.own(aspect.after(this._fileTypeCategoriesFilter, "_onInput", lang.hitch(this, "_filter"), true));
			this.own(aspect.after(this._fileTypeCategoriesFilter, "_setValueAttr", lang.hitch(this, "_filter"), true));

			this.own(aspect.after(this.taskmanagerServiceEnable, "onChange", lang.hitch(this, function(value) {
				this._setTaskManagerFields(!value);
				this.onChange();
			}), true));

			this.own(aspect.after(this.taskmanagerServiceDisable, "onChange", lang.hitch(this, function(value) {
				this._setTaskManagerFields(value);
				this.onChange();
			}), true));

			this.own(aspect.after(this.officeOnlineEnable, "onChange", lang.hitch(this, function(value) {
				this.officeOnlineURLField.set("disabled", !value);
				this.onChange();
			}), true));

			this.own(aspect.after(this.officeOnlineDisable, "onChange", lang.hitch(this, function(value) {
				this.officeOnlineURLField.set("disabled", value);
				this.onChange();
			}), true));

			
			if (has("dojo-bidi")) {
				this.taskmanagerURLField.textDir = "ltr";
				this.taskmanagerLogDirectoryField.textDir = "ltr";
				this.officeOnlineURLField.textDir = "ltr";
			}
		},

		_setTaskManagerFields: function(value) {
			this.taskmanagerURLField.set("disabled", value);
			this.taskmanagerLogDirectoryField.set("disabled", value);
			this.taskmanagerHeartBeatMonitorEnable.set("disabled", value);
			this.taskmanagerHeartBeatMonitorDisable.set("disabled", value);
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_loadData: function() {
			this.settingsData.loadData(lang.hitch(this, function() {
				this.logging.setAdminModel(this.settingsData.settingsConfig);
				this.adminUsers.setAdminModel(this.settingsData.settingsConfig);

				this._loadGeneralTab();
				this._checkSave();
			}));
		},

		_loadGeneralTab: function() {
			if (this.settingsData.settingsConfig.getDisableAutocomplete()) {
				this.autocompleteDisable.set('checked', true);
			} else {
				this.autocompleteEnable.set('checked', true);
			}
			if (this.settingsData.settingsConfig.getCulturalCollation()) {
				this.culturalCollationEnable.set('checked', true);
			} else {
				this.culturalCollationDisable.set('checked', true);
			}
			if (this.settingsData.settingsConfig.getBaseStyle() == "default") {
				this.baseStyleDefault.set('checked', true);
			} else {
				this.baseStyleClassic.set('checked', true);
			}
			this.objectExpiration.set("value", ecm.model.admin.appCfg.getObjectExpiration());
			this.tempFileCleanupInterval.set("value", this.settingsData.settingsConfig.getTempfileCleanupInterval());
			this.tempFileExpirationInterval.set("value", this.settingsData.settingsConfig.getTempfileExpirationInterval());
			this.encryptionKey.set("value", this.settingsData.settingsConfig.getEncryptionKey());
			this.helpURLField.set("value", this.settingsData.settingsConfig.getHelpUrl());
			this.MimeTypeExtensionFileField.set("value", this.settingsData.settingsConfig.getMimeTypeExtensionFile());
			/*Custom settings
			value = this.settingsData.settingsConfig.getCustomSettings();
			this.customSettings.setCustomSettingsJSON(dojo.isString(value) && value != "" ? value : "{}");
			*/
			var taskManagerUrl = this.settingsData.settingsConfig.getTaskManagerServiceURL();
			var taskManagerEnabled = this.settingsData.settingsConfig.getTaskManagerServiceEnabled();
			
			//if the taskmanager enabled is empty, it means it has not been initialized.  Check to see if the taskmanager url has value, if it does, set it to be enabled.
			if (taskManagerEnabled == "true" || (taskManagerEnabled == "" && taskManagerUrl != null && taskManagerUrl != "")) {
				this.taskmanagerServiceEnable.set('checked', true);
			} else {
				this.taskmanagerServiceDisable.set('checked', true);
			}
			this.taskmanagerURLField.set("value", taskManagerUrl);
			this.taskmanagerLogDirectoryField.set("value", this.settingsData.settingsConfig.getTaskManagerLogDirectory());
			if (this.settingsData.settingsConfig.getTaskManagerHeartBeatMonitorEnabled()) {
				this.taskmanagerHeartBeatMonitorEnable.set('checked', true);
			} else {
				this.taskmanagerHeartBeatMonitorDisable.set('checked', true);
			}

			if (this.settingsData.settingsConfig.getOfficeOnlineEnabled()) {
				this.officeOnlineEnable.set('checked', true);				
			} else {
				this.officeOnlineDisable.set('checked', true);
			}
			var officeOnlineServiceURL = this.settingsData.settingsConfig.getOfficeOnlineServiceURL();
			this.officeOnlineURLField.set("value", officeOnlineServiceURL? officeOnlineServiceURL : "");
			
			this.oosVerifyField.innerHTML = "";
			this.officeOnlineServiceVerifyValue = this.settingsData.settingsConfig.getOfficeOnlineServiceVerify();
			if ( this.officeOnlineServiceVerifyValue && this.officeOnlineServiceVerifyValue == "false")
			{
				this.oosVerifyField.innerHTML = this.messages.admin_office_online_server_Failed;
			}
			else if ( this.officeOnlineServiceVerifyValue && this.officeOnlineServiceVerifyValue == "true" )
			{
				this.oosVerifyField.innerHTML = this.messages.admin_office_online_server_Verified;
			}
			
			this.editFilesCleanupInterval.set("value", this.settingsData.settingsConfig.getEditFilesCleanupInterval());
			
			this.adminUsers.loadData(this.settingsData.settingsConfig);
			this.logging.loadData(this.settingsData.settingsConfig);

			this._checkSave();
			this._initializeGrid();
			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 200);
		},

		_setHoverHelp: function() {
			this.autocompleteEnable.setHoverHelp(this.autocompleteHoverHelp);
			this.autocompleteDisable.setHoverHelp(this.autocompleteHoverHelp);
			this.culturalCollationEnable.setHoverHelp(this.culturalCollationHoverHelp);
			this.culturalCollationDisable.setHoverHelp(this.culturalCollationHoverHelp);
			this.baseStyleClassic.setHoverHelp(this.baseStyleHoverHelp);
			this.baseStyleDefault.setHoverHelp(this.baseStyleHoverHelp);
			this.objectExpiration.setHoverHelp(this.objectExpirationHoverHelp);
			this.tempFileCleanupInterval.setHoverHelp(this.tempFileCleanupIntervalHoverHelp);
			this.tempFileExpirationInterval.setHoverHelp(this.tempFileExpirationIntervalHoverHelp);
			this.encryptionKey.setHoverHelp(this.encryptionKeyHoverHelp);
			this.helpURLField.setHoverHelp(this.helpURLHoverHelp);
			this.MimeTypeExtensionFileField.setHoverHelp(this.MimeTypeExtensionFileHoverHelp);
			this.taskmanagerURLField.setHoverHelp(this.taskManagerURLHoverHelp);
			this.taskmanagerServiceEnable.setHoverHelp(this.taskManagerSerivceHoverHelp);
			this.taskmanagerServiceDisable.setHoverHelp(this.taskManagerSerivceHoverHelp);
			this.taskmanagerHeartBeatMonitorEnable.setHoverHelp(this.taskManagerHeartBeatMonitorHoverHelp);
			this.taskmanagerHeartBeatMonitorDisable.setHoverHelp(this.taskManagerHeartBeatMonitorHoverHelp);
			this.taskmanagerLogDirectoryField.setHoverHelp(this.taskManagerLogDirectoryHoverHelp);
			this.officeOnlineEnable.setHoverHelp(this.officeOnlineHoverHelp);
			this.officeOnlineDisable.setHoverHelp(this.officeOnlineHoverHelp);
			this.officeOnlineURLField.setHoverHelp(this.officeOnlineURLHoverHelp);
			this.editFilesCleanupInterval.setHoverHelp(this.editFilesCleanupIntervalHoverHelp);
		},		
		
		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			if (this.settingsData.settingsConfig.getDisableAutocomplete() != this.autocompleteDisable.get('checked')) {
				return false;
			} else if (this.settingsData.settingsConfig.getCulturalCollation() != this.culturalCollationEnable.get('checked')) {
				return false;
			}

			if (this.baseStyleDefault.get("value") != this.settingsData.settingsConfig.getBaseStyle())
				return false;
			
			if (this.objectExpiration.get("value") != ecm.model.admin.appCfg.getObjectExpiration())
				return false;

			if (this.tempFileCleanupInterval.get("value") != this.settingsData.settingsConfig.getTempfileCleanupInterval())
				return false;

			if (this.tempFileExpirationInterval.get("value") != this.settingsData.settingsConfig.getTempfileExpirationInterval())
				return false;

			if (this.encryptionKey.get("value") != this.settingsData.settingsConfig.getEncryptionKey())
				return false;

			if (this.helpURLField.get("value") != this.settingsData.settingsConfig.getHelpUrl())
				return false;
			
			if (this.MimeTypeExtensionFileField.get("value") != this.settingsData.settingsConfig.getMimeTypeExtensionFile())
				return false;

//			if (this.cmcTTL.get("value") != this.settingsData.settingsConfig.getCMCTTL())
//				return false;			

			if (this.settingsData.settingsConfig.getTaskManagerServiceEnabled() != this.taskmanagerServiceEnable.get('checked')) {
				return false;
			}

			if (this.settingsData.settingsConfig.getTaskManagerHeartBeatMonitorEnabled() != this.taskmanagerHeartBeatMonitorEnable.get('checked')) {
				return false;
			}

			if (this.settingsData.settingsConfig.getOfficeOnlineEnabled() != this.officeOnlineEnable.get('checked')) {
				return false;
			}
			
			if (this.editFilesCleanupInterval.get("value") != this.settingsData.settingsConfig.getEditFilesCleanupInterval)
				return false;
			
			var isResetting = this.logging.isResetingFields(this.settingsData.settingsConfig);
			if (isResetting) {
				isResetting = this.adminUsers.isResetingFields(this.settingsData.settingsConfig);
			}
			
			if (isResetting) {
				isResetting = this.officeOnlineServiceVerifyValue == this.settingsData.settingsConfig.getOfficeOnlineServiceVerify() 
			}
			
			if (isResetting) {
				if (!has("dojo-bidi")) {
					isResetting = this.taskmanagerURLField.get("value") == this.settingsData.settingsConfig.getTaskManagerServiceURL() &&
									this.taskmanagerLogDirectoryField.get("value") == this.settingsData.settingsConfig.getTaskManagerLogDirectory() && 
									this.officeOnlineURLField.get("value") == this.settingsData.settingsConfig.getOfficeOnlineServiceURL()
				} else {
					isResetting = BidiComplex.stripSpecialCharacters(this.taskmanagerURLField.get("value")) == this.settingsData.settingsConfig.getTaskManagerServiceURL() &&
									BidiComplex.stripSpecialCharacters(this.taskmanagerLogDirectoryField.get("value")) == this.settingsData.settingsConfig.getTaskManagerLogDirectory() &&
									BidiComplex.stripSpecialCharacters(this.officeOnlineURLField.get("value")) == this.settingsData.settingsConfig.getOfficeOnlineServiceURL()
				}
			}			

			return isResetting;
		},

		_loadWithFieldValues: function(adminModel) {
			
			adminModel.setDisableAutocomplete(this.autocompleteDisable.get('checked'));
			adminModel.setCulturalCollation(this.culturalCollationEnable.get('checked'));
			adminModel.setBaseStyle(this.baseStyleClassic.get('checked') ? "classic": "default");
			adminModel.setOfficeOnlineServiceVerify(this.officeOnlineServiceVerifyValue);
			
			if (!has("dojo-bidi")) {
				adminModel.setTaskManagerServiceURL(this.taskmanagerURLField.get("value"));
				adminModel.setTaskManagerLogDirectory(this.taskmanagerLogDirectoryField.get("value"));
				adminModel.setOfficeOnlineServiceURL(this.officeOnlineURLField.get("value"));
				
			} else {
				adminModel.setTaskManagerServiceURL(BidiComplex.stripSpecialCharacters(this.taskmanagerURLField.get("value")));
				adminModel.setTaskManagerLogDirectory(BidiComplex.stripSpecialCharacters(this.taskmanagerLogDirectoryField.get("value")));
				adminModel.setOfficeOnlineServiceURL(BidiComplex.stripSpecialCharacters(this.officeOnlineURLField.get("value")));
			}
			
			adminModel.setTaskManagerHeartBeatMonitorEnabled(this.taskmanagerHeartBeatMonitorEnable.get('checked'));
			adminModel.setTaskManagerServiceEnabled(new String(this.taskmanagerServiceEnable.get('checked')));				

			adminModel.setOfficeOnlineEnabled(this.officeOnlineEnable.get('checked'));
			//Custom Settings
			//adminModel.setCustomSettings(this.customSettings.getCustomSettingsJSON());
			
			adminModel.setEncryptionKey(this.encryptionKey.get("value"));
			adminModel.setHelpUrl(this.helpURLField.get("value"));
			adminModel.setMimeTypeExtensionFile(this.MimeTypeExtensionFileField.get("value"));

			adminModel.setTempfileCleanupInterval(this.tempFileCleanupInterval.get("value"));
			adminModel.setTempfileExpirationInterval(this.tempFileExpirationInterval.get("value"));
			
			adminModel.setEditFilesCleanupInterval(this.editFilesCleanupInterval.get("value"));

			this.logging.loadWithFieldValues(adminModel);
			this.adminUsers.loadWithFieldValues(adminModel);
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete, closingAfterSave) {
			var oldBaseStyle = this.settingsData.settingsConfig.getBaseStyle();
			this._loadWithFieldValues(this.settingsData.settingsConfig);
			var fileTypesData = this.getMappingData();
			this._saveFileTypesId(this.settingsData.settingsConfig, fileTypesData);

			this.settingsData.fileTypesData = fileTypesData;
			this.settingsData.interfaceTextArray = this._interfaceTextArray;
			this.settingsData.objectExpiredTime = this.objectExpiration.get("value");

			this.settingsData.save(lang.hitch(this, function() {
				if (onComplete) {
					onComplete(true);
				}
				if (this.settingsData.settingsConfig.getBaseStyle() != oldBaseStyle) {
					if (this._messageDialog)
						this._messageDialog.destroy();
					this._messageDialog = new MessageDialog({
						text: this.messages.admin_refresh_message
					});
					this._messageDialog.show();
				}
			}));
		},

		_saveFileTypesId: function(model, fileTypesData) {
			var ids = [];
			for (var i = 0; i < fileTypesData.length; i++) {
				ids.push(fileTypesData[i].id);
			}
			model.setFileTypes(ids);
		},

		onSelect: function() {
			this.adminUsers.resize();
		},

		resize: function() {
			this._fileTypeButtonsPane.resize();
			this._fileTypeContentPane.resize();
			this.borderContainer.resize();
			this.inherited(arguments);
		},

		/**
		 * Overwritten to check if all fields are valid.
		 */
		_validateData: function(focus) {
			
			var value = this.taskmanagerServiceEnable.get('checked');
			if (value) {
				if (!this.taskmanagerURLField.isValid()) {
					if (focus) {
						this.taskmanagerURLField.focus();
					}
					return false;
				}

				if (!this.taskmanagerLogDirectoryField.isValid()) {
					if (focus) {
						this.taskmanagerLogDirectoryField.focus();
					}
					return false;
				}
			}
			var value = this.officeOnlineEnable.get('checked');
			if (value) {
				if (!this.officeOnlineURLField.isValid()) {
					if (focus) {
						this.officeOnlineURLField.focus();
					}
					return false;
				}				
			}
			if (!this.helpURLField.isValid()) {
				if (focus) {
					this.helpURLField.focus();
				}
				return false;
			}
			
			if(!this.MimeTypeExtensionFileField.isValid()){
				if(focus){
					this.MimeTypeExtensionFileField.focus();
				}
				return false;
			}
			
			var isValid = this.logging.validateData();
			if (isValid) {
				isValid = this.adminUsers.validateData();
			}
			return isValid;
		},

		getMappingData: function() {
			var mappingDataArray = this._theFileTypeCategoriesGrid.model.store.query();
			var mappingDataArrayToSave = [];
			this._interfaceTextArray = [];
			for (var i = 0; i < mappingDataArray.length; i++) {
				var mappingData = mappingDataArray[i];

				var contentTypes = "";
				if (mappingData.contentTypes != undefined) {
					if (mappingData.contentTypes instanceof Array) {
						if (mappingData.contentTypes.length > 0) {
							contentTypes = mappingData.contentTypes.join(',');
						}
					} else {
						contentTypes = mappingData.contentTypes;
					}
				}

				var obj = {};
				obj["id"] = mappingData.id;
				obj["_attributes"] = {};
				obj["_attributes"]["name"] = mappingData.name;
				obj["_attributes"]["description"] = mappingData.description;
				obj["_attributes"]["contentTypes"] = contentTypes;
				obj["_attributes"]["onlyUseInETAssociations"] = mappingData.onlyUseInETAssociations;
				mappingDataArrayToSave.push(obj);

				var interfaceText = ecm.model.admin.InterfaceTextConfig.createInterfaceTextConfig(mappingData.id);
				interfaceText.id = mappingData.id;
				interfaceText.setType("application");
				interfaceText.setLabelKey(mappingData.name); // do we care in this case? probably not. 
				interfaceText.setDisplayedIn("application");
				this._interfaceTextArray.push(interfaceText);
			}
			return mappingDataArrayToSave;
		},

		_onVerify: function() {
			this._request = Request.postServiceAPI("oosverify", null, "text/json", {
				requestParams: {
					URL: this.officeOnlineURLField.get("value")
				},
				requestCompleteCallback: lang.hitch(this, function(response){
					this.officeOnlineServiceVerifyValue = "true";
					this.oosVerifyField.innerHTML = this.messages.admin_office_online_server_Verified;
				}),
				requestFailedCallback: lang.hitch(this, function(response) {
					this.officeOnlineServiceVerifyValue = "false";
					this.oosVerifyField.innerHTML = this.messages.admin_office_online_server_Failed;
				})
			});
		},
		
		_onNew: function() {
			this._getFileTypeCategoriesDialog().show();
		},

		_onOpen: function() {
			var items = this._getSelected();
			this._openItem(items[0]);
		},

		_onCopy: function() {
			var items = this._getSelected();

			var obj = {};
			obj.id = "";
			obj.name = "";
			obj.description = items[0].description;
			obj.contentTypes = items[0].contentTypes;
			this._editItemValue = null;
			this._getFileTypeCategoriesDialog().show(null, obj);
		},

		_onDelete: function() {
			var items = this._getSelected();
			if (items) {
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					this._theFileTypeCategoriesGrid.model.store.remove(item.id);
				}
			}
			this._resetFilter();
			this._checkButtons();
			this.onChange();
		},

		_getFileTypeCategoriesDialog: function() {
			if (!this._fileTypeCategoriesDialog) {
				this._fileTypeCategoriesDialog = new FileTypeCategoriesDialog({
					defaultContentTypes: this.settingsData.defaultContentTypes
				});

				this.own(aspect.after(this._fileTypeCategoriesDialog, "onAdd", lang.hitch(this, function(saveData) {
					this._theFileTypeCategoriesGrid.model.store.add({
						"id": saveData.id,
						"contentTypes": saveData.contentTypes,
						"name": saveData.name,
						"description": saveData.description,
						"onlyUseInETAssociations": false
					});
					this._resetFilter();
					this.onChange();
				}), true));

				this.own(aspect.after(this._fileTypeCategoriesDialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.name = saveData.name;
					item.description = saveData.description;
					item.contentTypes = saveData.contentTypes;
					this._theFileTypeCategoriesGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this.onChange();
				}), true));

			}
			return this._fileTypeCategoriesDialog;
		},

		_initializeGrid: function() {
			this._fileTypeCategoriesFilter.reset();
			this._prevFilter = "";

			var hasStore = this._theFileTypeCategoriesGrid && this._theFileTypeCategoriesGrid.model;
			if (hasStore) {
				this._theFileTypeCategoriesGrid.select.row.clear();
				this._theFileTypeCategoriesGrid.model.setStore(this._createStore());
			} else {
				var structure = [
					{
						id: "name",
						field: "name",
						name: this.messages.name_label,
						width: "30%"
					},
					{
						id: "description",
						field: "description",
						name: this.messages.description,
						width: "50%"
					},
					{
						id: "onlyUseInETAssociations",
						field: "onlyUseInETAssociations",
						name: this.messages.admin_file_type_only_use_in_et_folder_association,
						width: "20%",
						widgetsInCell: true,
						navigable: true,
						decorator: function(data, rowId, rowIndex) {
							return [
								'<span data-dojo-type="dijit.form.CheckBox"	class="gridxHasGridCellValue"',
								' data-chkbox-type="onlyUseInETAssociations"',
								' data-dojo-attach-point="onlyUseInETAssociationsCB" />'
							].join('');
						},
						style: function(cell) {
							return "text-align: center;";
						},
						setCellValue: function(gridData, storeData, cellWidget) {
							this.onlyUseInETAssociationsCB.set("checked", gridData.onlyUseInETAssociations);
							this.onlyUseInETAssociationsCB.focusNode.setAttribute("aria-label", ecm.messages.admin_file_type_only_use_in_et_folder_association);
						},
						formatter: lang.hitch(this, "_formatValue"),
						sortable: false,
						editable: true
					}
				];
				this._theFileTypeCategoriesGrid = new Grid({
					cacheClass: Cache,
					store: this._createStore(),
					structure: structure,
					style: "width: 95%; height: 250px; margin-top: -15px; margin-left: -2px",
					selectRowTriggerOnCell: true,
					textDir: has("text-direction"),
					modules: [
						Row,
						FilterModule,
						Focus,
						SelectRow,
						ExtendedSelectRow,
						ColumnResizer,
						CellWidget,
						{
							moduleClass: SingleSort,
							initialOrder: [
								{
									colId: "name",
									descending: false
								}
							]
						}
					]
				});
				domClass.add(this._fileTypeContentPane.domNode, "compact gridxWholeRow gridxAlternatingRows");
				this._fileTypeContentPane.set("content", this._theFileTypeCategoriesGrid);
				this._theFileTypeCategoriesGrid.startup();
				this.resize();
				this._filterCheckerFunction = lang.hitch(this, "_filterChecker");

				this.own(aspect.after(this._theFileTypeCategoriesGrid, "onRowDblClick", lang.hitch(this, function(evt) {
					this._openItem(this._theFileTypeCategoriesGrid.row(evt.rowIndex).item(), evt);
				}), true));
				this.own(aspect.after(this._theFileTypeCategoriesGrid.select.row, "onSelectionChange", lang.hitch(this, function(evt) {
					this._checkButtons();
				}), true));
				this.own(aspect.after(this._theFileTypeCategoriesGrid, "onCellClick", lang.hitch(this, this._gridEventHandler, this._theFileTypeCategoriesGrid, this._theFileTypeCategoriesGrid.model.store), true));
				this.own(aspect.after(this._theFileTypeCategoriesGrid, "onCellKeyDown", lang.hitch(this, this._gridEventHandler, this._theFileTypeCategoriesGrid, this._theFileTypeCategoriesGrid.model.store), true));
			}
			this.own(aspect.after(this._theFileTypeCategoriesGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				setTimeout(lang.hitch(this, function() {
					this._theFileTypeCategoriesGrid.vScroller.scrollToRow(this._theFileTypeCategoriesGrid.row(id).visualIndex() - 1, true);
					this._checkButtons();
				}, 500));
			}), true));
			this.resize();
		},

		_gridEventHandler: function(grid, store, evt) {
			var cell = grid.cell(evt.rowId, evt.columnId);
			if (cell) {
				var data = store.get(evt.rowId);
				if (data) {
					var type = (evt.srcElement ? evt.srcElement.getAttribute("data-chkbox-type") : evt.target.getAttribute("data-chkbox-type"));
					if (type && type == "onlyUseInETAssociations") {
						data.onlyUseInETAssociations = !data.onlyUseInETAssociations;
						this.onChange();
					} else if (evt.columnId == "onlyUseInETAssociations" && evt.type == "keydown" && evt.keyCode == keys.SPACE && !evt.altKey && !evt.ctrlKey && !evt.shiftKey) {
						var checkboxElement = this._findOnlyUseInETAssociationsCheckBox(evt.srcElement);
						if (checkboxElement && checkboxElement.getAttribute("id")) {
							var checkboxObj = registry.byId(checkboxElement.getAttribute("id"));
							if (checkboxObj) {
								data.onlyUseInETAssociations = !data.onlyUseInETAssociations;
								checkboxObj.set("checked", data.onlyUseInETAssociations);
								this.onChange();
							}
						}
					}
				}
			}
		},

		_findOnlyUseInETAssociationsCheckBox: function(element) {
			while (element) {
				if (element.firstChild && element.firstChild.getAttribute("data-chkbox-type") && element.firstChild.getAttribute("data-chkbox-type") == "onlyUseInETAssociations") {
					return element.firstChild;
				} else {
					element = element.firstChild;
				}
			}
			return null;
		},

		_formatValue: function(data, rowId, rowIndex) {
			return data;
		},

		_checkButtons: function() {
			var items = this._getSelected();
			this.openButton.set("disabled", !(items.length == 1));
			this.copyButton.set("disabled", !(items.length == 1));

			var deleteButtonDisable = (items.length == 0);
			for (var i = 0; !deleteButtonDisable && i < items.length; i++) {
				var id = items[i].id;
				for (var j = 0; !deleteButtonDisable && j < this.defaultFileTypes.length; j++) {
					if (this.defaultFileTypes[j] == id) {
						deleteButtonDisable = true;
						break;
					}
				}
			}
			this.deleteButton.set("disabled", deleteButtonDisable);
		},

		_getSelected: function() {
			return this._theFileTypeCategoriesGrid && this._theFileTypeCategoriesGrid.select ? this._getItems(this._theFileTypeCategoriesGrid.select.row.getSelected()) : [];
		},

		_getItems: function(rowIndexs) {
			var items = [];
			for (var i = 0; i < rowIndexs.length; i++) {
				var row = this._theFileTypeCategoriesGrid.row(rowIndexs[i]);
				if (row) {
					items.push(row.item());
				}
			}
			return items;
		},

		_createStore: function() {
			var items = [];
			if (this.settingsData.fileTypes) {
				for (var i = 0; i < this.settingsData.fileTypes.length; i++) {
					items.push({
						"id": this.settingsData.fileTypes[i].id,
						"name": this.settingsData.fileTypes[i].getName(),
						"description": this.settingsData.fileTypes[i].getDescription(),
						"contentTypes": this.settingsData.fileTypes[i].getContentTypes(),
						"onlyUseInETAssociations": this.settingsData.fileTypes[i].getOnlyUseInETAssociations()
					});
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		_openItem: function(item) {
			var obj = {};
			obj.id = item.id;
			obj.name = item.name;
			obj.description = item.description;
			obj.contentTypes = item.contentTypes;
			this._editItemValue = item;
			this._getFileTypeCategoriesDialog().show(null, obj);
		},

		_resetFilter: function() {
			this._fileTypeCategoriesFilter.set("value", "");
		},

		/**
		 * Filter file type categories by label.
		 */
		_filter: function() {
			var filterData = this._fileTypeCategoriesFilter.get("value");
			if (this._theFileTypeCategoriesGrid && this._filterData != filterData) {
				this._filterData = string.trim(filterData).toLowerCase();
				this._filterField = "name";
				this._theFileTypeCategoriesGrid.select.row.clear();
				this._theFileTypeCategoriesGrid.model.filter(this._filterCheckerFunction);
				this._theFileTypeCategoriesGrid.body.refresh();
				//this._theFileTypeCategoriesGrid.resize();
			}
		},

		onChange: function() {
			if (this._init) {
				this._markDirty();
			}
		},

		_filterChecker: function(row, id) {
			var rowValue = row.item[this._filterField];
			return rowValue.toLowerCase().indexOf(this._filterData) > -1;
		},

		uninitialize: function() {
			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
		}

	});

});

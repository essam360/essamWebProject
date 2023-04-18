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
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dijit/registry",
	"dojo/on",
	"dojo/aspect",
	"dojo/json",
	"dojo/store/Memory",
	"dojox/fx/scroll",
	"dojo/window",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Repository",	
	"ecm/model/admin/PropertyMappingConfig",
	"ecm/model/admin/EditServiceCategoryConfig",
	"ecm/model/Request",
	"ecm/widget/admin/EditCategoriesDialog",
	"ecm/model/admin/SettingsData",
	"ecm/widget/FilterTextBox",
	"ecm/widget/_MoveUpDownMixin",
	"ecm/widget/admin/PropertyMappingDialog",
	"ecm/widget/admin/AddTemplateDialog",
	"ecm/widget/admin/AddEditServiceTemplateDialog",
	"ecm/widget/admin/ChangeTemplateDialog",
	"ecm/widget/admin/ChangeEditServiceTemplateDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/ContentClassSelector",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/UserGroupPane",
	"ecm/widget/UserGroupPrivilegePane",
	"ecm/widget/dialog/SelectUserGroupDialog",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"ecm/model/Permission",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"idx/layout/TitlePane",
	"idx/html",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/model/admin/InterfaceTextConfig",
	"ecm/widget/dialog/EditPropertiesDialog",
	"ecm/widget/admin/EditServiceEditPropertiesDialog",
	"dojo/text!./templates/RepositoryOfficeConf.html"
],

function(declare, lang, array, connect, has, construct, string, domStyle, domGeom, domClass, registry, on, aspect, dojojson, MemoryStore, scroll, win, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, LoggerMixin, Repository, PropertyMappingConfig, EditServiceCategoryConfig, Request, EditCategoriesDialog, SettingsData, FilterTextBox, _MoveUpDownMixin, PropertyMappingDialog, AddTemplateDialog, AddEditServiceTemplateDialog, ChangeTemplateDialog, ChangeEditServiceTemplateDialog, ConfirmationDialog, ContentClassSelector, MessageDialog,	UserGroupPane, UserGroupPrivilegePane, SelectUserGroupDialog, UserGroupPermissionDialog, Permission, BorderContainer, ContentPane, Button, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, SingleSort, FilterModule, CellWidget, TitlePane, idxHtml, BidiComplex, _NavigatorAdminTabBase, InterfaceTextConfig, EditPropertiesDialog, EditServiceEditPropertiesDialog, template) {
	
	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositoryOfficeConf
	 * @class Provides a widget that is used to map a list of office property to a repository's property.
	 */
	var RepositoryOfficeConf = declare("ecm.widget.admin.RepositoryOfficeConf", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin,
		_MoveUpDownMixin
	], {
		/** @lends ecm.widget.admin.RepositoryOfficeConf.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_prevFilter: "",
		_isFolderClassValid: true,
		
		_docMimeTypes: { 
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		    "application/vnd.ms-word.document.macroEnabled.12": "application/vnd.ms-word.document.macroEnabled.12",
		    "application/vnd.oasis.opendocument.text": "application/vnd.oasis.opendocument.text",
		    "application/x-vnd.oasis.opendocument.text": "application/x-vnd.oasis.opendocument.text"
		 },
		_spreadsheetMimeTypes: { 
		    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel.sheet.macroEnabled.12": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "application/vnd.ms-excel.sheet.binary.macroEnabled.12": "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
            "application/vnd.oasis.opendocument.spreadsheet": "application/vnd.oasis.opendocument.spreadsheet"
		 },
		_presentationMimeTypes: {
			"application/vnd.openxmlformats-officedocument.presentationml.presentation": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
			"application/vnd.openxmlformats-officedocument.presentationml.template": "application/vnd.openxmlformats-officedocument.presentationml.template",
            "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
		    "application/vnd.oasis.opendocument.presentation": "application/vnd.oasis.opendocument.presentation",
		    "application/x-vnd.oasis.opendocument.presentation": "application/x-vnd.oasis.opendocument.presentation"
		},
		
		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this._isLoaded = false;
			this.textDir = has("text-direction");
			//this._propertyMappingTitlePane.set("title", this.messages.admin_repository_office_conf_prop_mapping_title);
			this._propertyMappingTitlePane1.set("title", this.messages.admin_repository_office_conf_prop_mapping_title1);
			this._propertyMappingTitlePane2.set("title", this.messages.admin_repcfg_office_online_server_integration);
			this._editServiceIntegrationTitlePane.set("title", this.messages.admin_icn_edit_service_integration);
			this._classesAndRolesSettingsTitlePane.set("title", this.messages.admin_icn_cm_classes_and_roles_settings);
			this._filter.set("placeholder", this.messages.process_filter_label);
			this.defaultEditCategories = {"Word":this.messages.admin_repcfg_office_online_word_template_name, 
					"Excel":this.messages.admin_repcfg_office_online_excel_template_name , 
					"PowerPoint":this.messages.admin_repcfg_office_online_powerpoint_template_name };
			this.editCategoryGrids = {};
			this.editTemplateButtons = {};
			
			this.own(aspect.after(this._cmDraftCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmOfficeTemplateCreatorDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._cmTemplateEnabledClassesAreaFilter, "_onInput", lang.hitch(this, "_cmTemplateEnabledClassesFilter")));
			this.own(aspect.after(this._cmTemplateEnabledClassesAreaFilter, "_setValueAttr", lang.hitch(this, "_cmTemplateEnabledClassesFilter")));
			this._cmTemplateEnabledClassesAreaFilter.set("placeholder", this.messages.class_contains_label);				
			
			this._cmEntryTemplateEnabledClasses.getGridTooltipText = lang.hitch(this, "_getCMTemplateEnabledClassesGridTooltipText");
			
		},

		destroy: function() {
			this.inherited(arguments);
		},

		// Called when the user hits the Reset button 
		loadData: function(container, callback) {
			this._initialized = false;
			
			this.logEntry("loadData");
			this._isLoaded = true;
			this._emailClass = this.repositoryData.repositoryConfig.getDefaultEmailClassForAdd();
			this._folderClass = this.repositoryData.repositoryConfig.getDefaultFolderClassForAdd();
			this.delimiter.set("value", this.repositoryData.repositoryConfig.getDelimiterForOfficeProperty());
			this.delimiter.setHoverHelp(this.delimiterHoverHelp);	

			if (this.repositoryData.type == "cm") {
				this._initClassSelector();
			}
			
			var addOnPermissionLevels = this.repositoryData.repositoryConfig.getAddOnTooltipPermissionLevels();
			
			this._cmOfficeTemplateCreatorDataPane.set("levels", addOnPermissionLevels);
			this._cmOfficeTemplateCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getOfficeTemplatePermissions()));
			this._cmOfficeTemplateCreatorDataPane.render();

			this._cmDraftCreatorDataPane.set("levels", addOnPermissionLevels);
			this._cmDraftCreatorDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getDraftPermissions()));
			this._cmDraftCreatorDataPane.render();
			
			if (this.repositoryData.repositoryConfig.getOfficeOnlineEnabled()) {
				this.p8EnableOOService.set('checked', true);
				this._onEnableOOClick()
			} else {
				this.p8DisableOOService.set('checked', true);
				this._onDisableOOClick()
			}								
						
			if (this.repositoryData.repositoryConfig.getEditServiceEnabled()) {
				this.p8EnableEditService.set('checked', true);
				this._onEnableEditServiceClick();
				
			} else {
				this.p8DisableEditService.set('checked', true);
				this._onDisableEditServiceClick();
			}
			
			if( (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") && this._resetting ){
				this._loadEditCategoryData();
				//recover templates
				if( this.editCategories ){
					for( var i = 0; i < this.editCategories.length; i ++ ){
						if( !this.editTemplates[this.editCategories[i].name] && this._editTemplatesBackup && this._editTemplatesBackup[ this.editCategories[i].name ] ){
							this.editTemplates[this.editCategories[i].name] = this._editTemplatesBackup[ this.editCategories[i].name ];
							this._editTemplatesBackup[ this.editCategories[i].name ] = null;
						}
					}
				}
				
				this._deletedEditCategories = null;
				
				this.onChangeEditCategories(true);
			}
			
			if (this._repositoryPropertiesStore) { // reset.
				delete this._repositoryPropertiesStore;
			}
			this._repositoryPropertiesStore = this._createRepositoryPropertiesStore();

			if (this._dataTypeStore) { // reset.
				delete this._dataTypeStore;
			}
			this._dataTypeStore = this._createDataTypeStore();

			this._initializeGrid();
			
			if (callback)
				callback();
			this._initialized = true;
			this.logExit("loadData");
		},
		
		_convertJSONMimeTypesToArray: function( mimeTypeJSON ){
			var mimeTypeArray = [];
			for(var mime in mimeTypeJSON){
				mimeTypeArray.push(mime);
			}
			return mimeTypeArray;
		},
		
		//selecting item type list code
		_loadCMTemplateEnabledClasses: function() {
			
			var repository = this.repositoryData.repository;

			repository.retrieveContentClasses(lang.hitch(this, function(contentClasses) {
				
			//configure left side grid
			var availStructure = [
				{
					field: "name",
					name: this.messages.admin_repcfg_oos_enable_classes_available,
					width: "100%",
				}
			];

			var availableClasses = [];
			var selectedClasses = [];
			
			var availableClasses = [];
			var selectedClasses = [];
			var fixedClasses = [];
			for ( var i in contentClasses) {
				var contentClass = lang.mixin({}, contentClasses[i]);
				//if item type classification is Resource, it will not show in class selector
				if (repository._isCM() && (contentClass.classification == "RESOURCE" || contentClass.id == "ICMEntryTemplate" || contentClass.id == "ClbEditServiceTemplate" || contentClass.id == "ClbOfficeTemplate") ) {
					continue;
				}
				// If no support is enabled, this is an available class.
				if ((repository._isCM() && contentClass.versionControl == "ALWAYS") || !contentClass.supportsOOSReferenceAttribute) {
					// This option will be enabled when the class is added to the right side.
					availableClasses.push(contentClass);
				} else { // ... this is a selected class.
					contentClass.supportsOOSReferenceAttribute = true;
					selectedClasses.push(contentClass);
					fixedClasses.push(contentClass.id);
				}
			}
			
			var availStore = new MemoryStore({
				data: availableClasses
			});
			this._cmEntryTemplateEnabledClasses.setAvailableGridData(availStore, availStructure);
			
			this.own(aspect.after(this._cmEntryTemplateEnabledClasses.availableGrid, "onCellClick", lang.hitch(this, function(evt) {
				var grid = this._cmEntryTemplateEnabledClasses.availableGrid;
				var selected = grid.select.row.getSelected();
				this._cmEntryTemplateEnabledClasses._addButton.set("disabled",false);
				for ( var i in selected) {
					var row= grid.row(selected[i]);
					var item;
					if (row){
						item=row.item();
					}
					if (item!=null) {
						if (item.versionControl=="ALWAYS"){
						   this._cmEntryTemplateEnabledClasses._addButton.set("disabled",true);
						   break;
						}
					}	
				}
			}), true));
			this.own(aspect.after(this._cmEntryTemplateEnabledClasses.availableGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				var grid = this._cmEntryTemplateEnabledClasses.availableGrid;
				
			}), true));
						
			var self = this;
			var selectedStructure = [
				{
					field: "name",
					name:  self.messages.admin_repcfg_oos_enable_classes_selected,
					width: "100%"
				}
			];
			//configure right side grid
			var selectedStore = new MemoryStore({
				data: selectedClasses
			});
			this._cmEntryTemplateEnabledClasses.setSelectedGridData(selectedStore, selectedStructure, fixedClasses);

			this.own(aspect.after(this._cmEntryTemplateEnabledClasses.selectedGrid, "onCellClick", lang.hitch(this, function(evt) {
				var grid = this._cmEntryTemplateEnabledClasses.selectedGrid;

			}), true));
			this.own(aspect.after(this._cmEntryTemplateEnabledClasses.selectedGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				var grid = this._cmEntryTemplateEnabledClasses.selectedGrid;
				
			}), true));
			
			
			}), "createDocumentOrFolder");
			
			this.resize();
		},
		
		resize: function(changeSize) {
			this.inherited(arguments);
			this._cmEntryTemplateEnabledClasses.resize();
			
		},
		/**
		 * Filter CM classes by class name.
		 */
		_cmTemplateEnabledClassesFilter: function() {
			//this.logEntry("_cmTemplateEnabledClassesFilter");
			var filterData = this._cmTemplateEnabledClassesAreaFilter.get("value");
			this._cmEntryTemplateEnabledClassesFilterData = filterData;
			this._cmEntryTemplateEnabledClasses.filter({
				name: filterData
			});
			//this.logExit("_cmEntryTemplateEnabledClassesFilter");
		},
		
		/**
		 * Call back from the CM entry template classes enabled sloshBucket.
		 */
		_getCMTemplateEnabledClassesGridTooltipText_orig: function(grid, item) {
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
		
		_getCMTemplateEnabledClassesGridTooltipText: function(grid, item) {
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
				toolTip.push("<div><span class='tooltipLabel'>" + "</span> ");
				if (item.versionControl=="ALWAYS"){
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.admin_repcfg_oos_enable_classes_note + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(this.messages.admin_repcfg_oos_enable_classes_selected_not_support));
					toolTip.push("</span></div>");
					toolTip.push("<div><span class='tooltipLabel'>"  + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(this.messages.admin_repcfg_oos_enable_classes_selected_not_support1));
					toolTip.push("</span></div>");
				}
				return toolTip.join("");
			}
			return "";
		},
					
		_loadOfficeTemplateGrid: function(gridArea, grid, mimeTypes, templates, defaultName, nameHeader) {
			var gridItems = [];
			if (templates && templates.length > 0) {			    	
				array.forEach(templates, function(template) {			
					if (mimeTypes[template.mimetype]) {
						desc= template.attributes.Description? idxHtml.escapeHTML(template.attributes.Description):"";
						if (template.repository.type== "cm")
						   desc=template.attributes.clbDescription? idxHtml.escapeHTML(template.attributes.clbDescription):""
						
						var isDefault=template.attributes.IcnTemplateDefault;
						if (template.repository.type== "cm")
						    isDefault=template.attributes.clbDefault==1 ? true: false;	   
						gridItems.push({
							"id": template.id,
							"name": idxHtml.escapeHTML(template.name),
							"description": desc, //template.attributes.Description? idxHtml.escapeHTML(template.attributes.Description) : "",
							"item": template,
							"isDefault": isDefault //template.attributes.IcnTemplateDefault						
						});						
					}
				});				    	
		    } 
			// Add a default template entry
			if (gridItems.length == 0) {
		    	gridItems = [{
	    			"id": "0",
	    			"name": idxHtml.escapeHTML(defaultName),
					"description": idxHtml.escapeHTML(this.messages.admin_repcfg_office_online_blank_template_description),
					"item": null,
					"isDefault": false	
		    	}];
		    }
		    if (grid)
		    	grid.destroy();
		    grid = this._initializeOfficeOnlineGrid(gridItems, nameHeader);
		    domClass.add(grid.domNode, "compact gridxWholeRow");
			gridArea.addChild(grid);
			grid.startup();
			return grid;
		},
		
		_onEnableOOClick: function() {		    	    		    		    	
	    	if (this._initialized) {
	    		if (!this._wordGrid) {
	    			this._loadOfficeTemplates();	    		    			
	    		} else {
	    			this._toggleOfficeTemplateControls(true);	    			
	    		}	    
	    		this.onMarkDirty();
	    	} else {
	    		this._toggleOfficeTemplateControls(true);
	    	}
	    	if (this.repositoryData.type == "cm")
	    	{
	    	    this._loadCMTemplateEnabledClasses();
	    	    domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "");
		    }
	    	else
	    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "none");
	    	
	    	this.resize();
		},
		
		_toggleOfficeTemplateControls: function(show) {
			if (show) {
				if (!this.repositoryData.officeOnlineEnabled || !this.repositoryData.officeOnlineServiceURL || this.repositoryData.officeOnlineServiceURL.length == 0) {
		    		domClass.remove(this.officeOnlineInlineMessage, "dijitHidden");		    		
		    	}
				domStyle.set(this._buttonArea1, "display", "");
		    	domStyle.set(this._buttonArea2, "display", "");
		    	domStyle.set(this._buttonArea3, "display", "");	
		    	if(  this._wordGrid ){
					domStyle.set(this._wordGrid.domNode, "display", "");
					domStyle.set(this._excelGrid.domNode, "display", "");
					domStyle.set(this._powerPointGrid.domNode, "display", "");
		    	}
		    	if (this.repositoryData.type == "cm") {
		    		domStyle.set(this.officeOnlineClassesConfigInlineMessage, "display", "");			    	
			    	this.officeOnlineClassesConfigInlineMessageText.appendChild(this.scrollLinkOO);
		    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "");
		    	}  else {
		    		domStyle.set(this.officeOnlineClassesConfigInlineMessage, "display", "none");
		    	}  	
		    	this._propertyMappingBorderContainer2.domNode.style.height = this._officeOnlinePaneOriginalHeight;
		    	
			} else {
				domStyle.set(this._buttonArea1, "display", "none");
		    	domStyle.set(this._buttonArea2, "display", "none");
		    	domStyle.set(this._buttonArea3, "display", "none");
		    	if (this._wordGrid) {
			    	domStyle.set(this._wordGrid.domNode, "display", "none");
			    	domStyle.set(this._excelGrid.domNode, "display", "none");
			    	domStyle.set(this._powerPointGrid.domNode, "display", "none");
			    	domClass.add(this.officeOnlineInlineMessage, "dijitHidden");		    	
		    	}
		    	if (this.repositoryData.type == "cm" && this.p8EnableEditService.checked) {
		    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "");
		    	} else {
		    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "none");
		    	}
		        this._propertyMappingBorderContainer2.domNode.style.height = "50px";
			}
		},	
		
		_onDisableOOClick: function() {		    
			this._toggleOfficeTemplateControls(false);
			 this._propertyMappingBorderContainer2.domNode.style.height = "50px";
	    	if (this._initialized) {
	    		this.onMarkDirty();
    		}
		},	

		_loadOfficeTemplates: function() {
			var fetchTemplatesCallback = function(contentItems) {									
				// Word templates
				this._wordGrid = this._loadOfficeTemplateGrid(this._gridArea1, this._wordGrid, this._docMimeTypes, contentItems, this.messages.admin_repcfg_office_online_word_template_name, this.messages.word_template_name);										
				this.own(aspect.after(this._wordGrid.select.row, "onSelectionChange", lang.hitch(this, function() {
					this._updateOfficeOnlineButtons(this._wordGrid, this.openButton1, this.viewButton1, this.deleteButton1, this.defaultButton1);
				}), true));
			    // Excel templates
				this._excelGrid = this._loadOfficeTemplateGrid(this._gridArea2, this._excelGrid, this._spreadsheetMimeTypes, contentItems, this.messages.admin_repcfg_office_online_excel_template_name, this.messages.excel_template_name);										
				this.own(aspect.after(this._excelGrid.select.row, "onSelectionChange", lang.hitch(this, function() {
					this._updateOfficeOnlineButtons(this._excelGrid, this.openButton2, this.viewButton2, this.deleteButton2, this.defaultButton2);
				}), true));					
			    // PowerPoint templates
				this._powerPointGrid = this._loadOfficeTemplateGrid(this._gridArea3, this._powerPointGrid, this._presentationMimeTypes, contentItems, this.messages.admin_repcfg_office_online_powerpoint_template_name, this.messages.powerpoint_template_name);					
				this.own(aspect.after(this._powerPointGrid.select.row, "onSelectionChange", lang.hitch(this, function() {
					this._updateOfficeOnlineButtons(this._powerPointGrid, this.openButton3, this.viewButton3, this.deleteButton3, this.defaultButton3);
				}), true));				
				
				this.p8EnableOOService.setHoverHelp(this.rcp8EnableOOFieldHoverHelp);
				this.p8DisableOOService.setHoverHelp(this.rcp8EnableOOFieldHoverHelp);		
				// Shows the office template controls
				this._toggleOfficeTemplateControls(true); 
			};
			
			if (this.repositoryData.officeOnlineSupported == false) {
				// addon has not been run yet so just show the default templates
				var initGrids = lang.hitch(this, fetchTemplatesCallback);
				initGrids();
			} else {
				this.repositoryData.repository.retrieveOfficeOnlineTemplates(lang.hitch(this, fetchTemplatesCallback), null, [1082, 1158, 1016] );
			}
		},
		
		_toggleEditTemplateControls: function(show) {
			if (show) {
		    	domStyle.set(this._CreateCategoryArea, "display", "");	
		    	domStyle.set(this._editCategoriesDiv, "display", "");
		    	if (this.repositoryData.type == "cm") {
		    		domStyle.set(this.editServiceClassesConfigInlineMessage, "display", "");			    	
			    	this.editServiceClassesConfigInlineMessageText.appendChild(this.scrollLinkEdit);
		    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "");
		    	} else {
		    		domStyle.set(this.editServiceClassesConfigInlineMessage, "display", "none");
		    	}		    	
			} else {
				domStyle.set(this._CreateCategoryArea, "display", "none");
				domStyle.set(this._editCategoriesDiv, "display", "none");
				domStyle.set(this.editServiceClassesConfigInlineMessage, "display", "none");
				if (this.repositoryData.type == "cm" && this.p8EnableOOService.checked) {
		    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "");
		    	} else {
		    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "none");
		    	}
				
			}
		},
		
		/**
		 * @private
		 * @since 3.0.1
		 */
		_onNewCategory: function(){
			var categoryNames = [];
			if( this.editCategories && this.editCategories.length ){
				for( var i = 0; i < this.editCategories.length; i ++ ){
					categoryNames.push(this.editCategories[i].name);
				}
			}
			this._getEditCategoriesDialog()._categoryNames = categoryNames;
			this._getEditCategoriesDialog().show(null, null);
			
		},
		
		_afterSaving: function(){
			if( this.editCategories && this.editCategories.length >0 )
			for( var i = 0; i < this.editCategories.length; i ++ ){
				this.editCategories[i].isNew = false;
			}
			this.onChangeEditCategories();
		},
		
		_isDefaultEditCategory: function( categoryId ){
			if( this.defaultEditCategories && this.defaultEditCategories[categoryId] ){
				return true;
			}else{
				return false;
			}
		},
		
		_getEditCategory: function( categoryName ){
			var category;
			for( var i = 0; i < this.editCategories.length; i ++ ){
				if( this.editCategories[i].name == categoryName ){
					category = this.editCategories[i];
					break;
				}
			}
			return category;
		},
		
		_getEditCategoriesDialog: function() {
			if (!this._editCategoriesDialog) {
				this._editCategoriesDialog = new EditCategoriesDialog({
					defaultContentTypes: this.defaultMimetypes
				});

				this.own(aspect.after(this._editCategoriesDialog, "onAdd", lang.hitch(this, function(saveData) {
					var newCategory = {
							"id": this.repositoryData.id + "." + idxHtml.escapeHTML(saveData.name),
							"mimeTypes": idxHtml.escapeHTML(saveData.contentTypes),
							"name": idxHtml.escapeHTML(saveData.name),
							"displayName": idxHtml.escapeHTML(saveData.displayName),
							"enable": true,
							"isNew": true,
							"description": idxHtml.escapeHTML(saveData.description)
					};
					this.editCategories.push( newCategory );
					this.onChangeEditCategories();
				}), true));

				this.own(aspect.after(this._editCategoriesDialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var category = this._getEditCategory( originalData.name );
					category.id = this.repositoryData.id + "." + idxHtml.escapeHTML(saveData.name);
					category.mimeTypes = idxHtml.escapeHTML(saveData.contentTypes);
					//category.name = idxHtml.escapeHTML(saveData.name); //name cannot be modified.
					category.displayName = idxHtml.escapeHTML(saveData.displayName);
					category.description = idxHtml.escapeHTML(saveData.description)
					this.onChangeEditCategories();
				}), true));

			}
			return this._editCategoriesDialog;
		},
		
		
		
		_onEnableEditServiceClick: function() {
	    	if (this._initialized) {
	    		if (!this._editCategoriesInit) {
	    			this._loadEditTemplates();	 
	    			this._editCategoriesInit = true;
	    		} else {
	    			this._toggleEditTemplateControls(true);	    			
	    		}	    
	    		this.onMarkDirty();
	    	} else {
	    		this._toggleEditTemplateControls(true);
	    	}
	    	
	    	if (this.repositoryData.type == "cm")
	    	{
	    	    this._loadCMTemplateEnabledClasses();
	    	    domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "");
		    }
	    	else
	    		domStyle.set(this._classesAndRolesSettingsTitlePane.domNode, "display", "none");
	    	
	    	this.resize();
		},
		
		_onDisableEditServiceClick: function() {
			this._toggleEditTemplateControls(false);
	    	if (this._initialized) {
	    		this.onMarkDirty();
    		}
		},
		
		onChangeEditCategories: function( notMarkDirty ){
			var methodName = "onChangeEditCategories";
			this.logEntry(methodName);
			
			//clear categories
			this.logDebug(methodName, "clean up edit category doms");
			if(this._editCategoriesDiv.children && this._editCategoriesDiv.children.length >0){
				for( var i=this._editCategoriesDiv.children.length; i>0;i--  ){
					this._editCategoriesDiv.removeChild( this._editCategoriesDiv.children[0] );
				}
			}
			//construct all categories
			this._renderEditCategories();
			if( !notMarkDirty ){
				this.onMarkDirty();
			}
			this.logExit(methodName);
		},
		
		_renderEditCategories: function(){
			var methodName = "_renderEditCategories";
			var length = 0;
			if (this.editCategories) {
				length = this.editCategories.length;
			}
			this.logDebug(methodName, "Start to render edit categories. There are " + length + " to render.");
			for( var i=0; this.editCategories && (i < this.editCategories.length); i++ ){
				var editCategory = this.editCategories[i];
				this.logDebug(methodName, "Start to render category: " + editCategory.name);
				
				//append description div
				var categoryDesDiv = construct.create("div", {
					'class': 'categoryInstructions',
					'id': editCategory.name + '_category_description',
				});
				var titleSpan = construct.create("span", {
					'class': 'ecmCategoryTitle',
					'id': editCategory.name + '_title_span',
				});
				titleSpan.innerText = this.messages.admin_icn_edit_category_label + editCategory.displayName;
				var descriptionSpan = construct.create("span", {
					'id': editCategory.name + '_description_span',
				});
				var description = editCategory.description;
				if( this._isDefaultEditCategory(editCategory.name) ){
					if( editCategory.name == "Word" ){
						description = this.messages.admin_icn_edit_word_category_description;
					}else if( editCategory.name == "Excel" ){
						description = this.messages.admin_icn_edit_excel_category_description;
					}else if( editCategory.name == "PowerPoint" ){
						description = this.messages.admin_icn_edit_powerpoint_category_description;
					}
				}
				descriptionSpan.innerText = this.messages.admin_icn_edit_category_discription_label + description;
				
				categoryDesDiv.appendChild( titleSpan );
				categoryDesDiv.appendChild(construct.create("br", {}));
				categoryDesDiv.appendChild( descriptionSpan );
				
				this._editCategoriesDiv.appendChild(categoryDesDiv);
				
				//append buttons div
				var buttonsDiv = construct.create("div", {
					'class': 'adminToolbar',
					'id': editCategory.name + '_new_template_button',
				});
				
				
				var newTemplateButton = new Button();
				newTemplateButton.set("label",  this.messages.action_add_template );
				newTemplateButton.domNode.setAttribute( 'categoryId', editCategory.name );
				this.connect(newTemplateButton, "onClick", lang.hitch(this,function(e){
					var categoryId = e.target.parentElement.getAttribute('categoryId');
					var isDefault = this.editCategoryGrids[categoryId].model.store.query({id: "0"}).length == 1 || this.editCategoryGrids[categoryId].model.store.data.length == 0;
					this._newEditServiceTemplate(categoryId, isDefault);
				} ));
				if( editCategory.isNew || !editCategory.enable ){
					newTemplateButton.set("disabled", true);
				}
				buttonsDiv.appendChild(newTemplateButton.domNode);
				if (!this.editTemplateButtons.newButtons) {
					this.editTemplateButtons.newButtons = {};					
				}
				this.editTemplateButtons.newButtons[editCategory.name] = newTemplateButton;
				
				var editTemplateButton = new Button();
				editTemplateButton.set("label",  this.messages.action_change_template );
				editTemplateButton.domNode.setAttribute( 'categoryId', editCategory.name );
				this.connect(editTemplateButton, "onClick", lang.hitch(this,function(e){
					var categoryId = e.target.parentElement.getAttribute('categoryId');
					this._changeEditServiceTemplate(categoryId);
				} ));
				editTemplateButton.set("disabled", true);
				buttonsDiv.appendChild(editTemplateButton.domNode);
				if (!this.editTemplateButtons.editButtons) {
					this.editTemplateButtons.editButtons = {};					
				}
				this.editTemplateButtons.editButtons[editCategory.name] = editTemplateButton;

				
				var propertiesTemplateButton = new Button();
				propertiesTemplateButton.set("label",  this.messages.action_edit_template_properties );
				propertiesTemplateButton.domNode.setAttribute( 'categoryId', editCategory.name );
				this.connect(propertiesTemplateButton, "onClick", lang.hitch(this,function(e){
					var categoryId = e.target.parentElement.getAttribute('categoryId');
					this._changeEditServiceTemplateProperties(categoryId);
				} ));
				propertiesTemplateButton.set("disabled", true);
				buttonsDiv.appendChild(propertiesTemplateButton.domNode);
				if (!this.editTemplateButtons.propertiesButtons) {
					this.editTemplateButtons.propertiesButtons = {};					
				}
				this.editTemplateButtons.propertiesButtons[editCategory.name] = propertiesTemplateButton;

				
				var deleteTemplateButton = new Button();
				deleteTemplateButton.set("label",  this.messages.admin_repcfg_delete_button_label );
				deleteTemplateButton.domNode.setAttribute( 'categoryId', editCategory.name );
				this.connect(deleteTemplateButton, "onClick", lang.hitch(this,function(e){
					var categoryId = e.target.parentElement.getAttribute('categoryId');
					this._deleteEditServiceTemplates(categoryId);
				} ));
				deleteTemplateButton.set("disabled", true);
				buttonsDiv.appendChild(deleteTemplateButton.domNode);
				if (!this.editTemplateButtons.deleteButtons) {
					this.editTemplateButtons.deleteButtons = {};					
				}
				this.editTemplateButtons.deleteButtons[editCategory.name] = deleteTemplateButton;
				
				var makeDefaultTemplateButton = new Button();
				makeDefaultTemplateButton.set("label",  this.messages.workspacebuilder_makeDefault_list );
				makeDefaultTemplateButton.domNode.setAttribute( 'categoryId', editCategory.name );
				this.connect(makeDefaultTemplateButton, "onClick", lang.hitch(this,function(e){
					var categoryId = e.target.parentElement.getAttribute('categoryId');
					this._setEditServiceDefaultTemplate(categoryId);
				} ));				
				makeDefaultTemplateButton.set("disabled", true);
				buttonsDiv.appendChild(makeDefaultTemplateButton.domNode);
				if (!this.editTemplateButtons.makeDefaultButtons) {
					this.editTemplateButtons.makeDefaultButtons = {};					
				}
				this.editTemplateButtons.makeDefaultButtons[editCategory.name] = makeDefaultTemplateButton;
				
				if( this._isDefaultEditCategory(editCategory.name) ){
				
					//enable category button
					var enableCategoryButton = new Button();
					enableCategoryButton.set("label",  this.messages.admin_icn_edit_enable_category );
					if( editCategory.enable  ){
						enableCategoryButton.set("disabled", true);
					}
					enableCategoryButton.domNode.setAttribute( 'categoryId', editCategory.name );
					this.connect(enableCategoryButton, "onClick", lang.hitch(this,function(e){
						var categoryId = e.target.parentElement.getAttribute('categoryId');
						this._enableCategory(categoryId);
					} ));
					
					buttonsDiv.appendChild(enableCategoryButton.domNode);
					if (!this.editTemplateButtons.enableCategoryButtons) {
						this.editTemplateButtons.enableCategoryButtons = {};					
					}
					this.editTemplateButtons.enableCategoryButtons[editCategory.name] = enableCategoryButton;
					
					//disable category button
					var disableCategoryButton = new Button();
					if( !editCategory.enable  ){
						disableCategoryButton.set("disabled", true);
					}
					
					disableCategoryButton.set("label",  this.messages.admin_icn_edit_disable_category );
					
					disableCategoryButton.domNode.setAttribute( 'categoryId', editCategory.name );
					this.connect(disableCategoryButton, "onClick", lang.hitch(this,function(e){
						var categoryId = e.target.parentElement.getAttribute('categoryId');
						this._disableCategory(categoryId);
					} ));
					
					buttonsDiv.appendChild(disableCategoryButton.domNode);
					if (!this.editTemplateButtons.disableCategoryButtons) {
						this.editTemplateButtons.disableCategoryButtons = {};					
					}
					this.editTemplateButtons.disableCategoryButtons[editCategory.name] = disableCategoryButton;
				}else{
					var editCategoryButton = new Button();
					editCategoryButton.set("label",  this.messages.admin_icn_edit_edit_category );
					
					editCategoryButton.domNode.setAttribute( 'categoryId', editCategory.name )
					this.connect(editCategoryButton, "onClick", lang.hitch(this,function(e){
						var categoryId = e.target.parentElement.getAttribute('categoryId');
						this.logDebug( "Edit category:" + categoryId );
						editCategory = this._getEditCategory( categoryId );
						var editData = {
								id: editCategory.id,
								name: editCategory.name,
								displayName: editCategory.displayName,
								description: editCategory.description,
								contentTypes: editCategory.mimeTypes,
						}
						var categoryNames = [];
						if( this.editCategories && this.editCategories.length ){
							for( var i = 0; i < this.editCategories.length; i ++ ){
								if( this.editCategories[i].name != editCategory.name ){
									categoryNames.push(this.editCategories[i].name);
								}
							}
						}
						this._getEditCategoriesDialog()._categoryNames = categoryNames;
						this._getEditCategoriesDialog().show(null, editData);
					} ));
					buttonsDiv.appendChild(editCategoryButton.domNode);
					
					var deleteCategoryButton = new Button();
					deleteCategoryButton.set("label",  this.messages.admin_icn_edit_delete_category );
					deleteCategoryButton.domNode.setAttribute( 'categoryId', editCategory.name )
					this.connect(deleteCategoryButton, "onClick", lang.hitch(this,function(e){
						var categoryId = e.target.parentElement.getAttribute('categoryId');
						this.logDebug( "Delete category:" + categoryId );
						if (this.confirmDeleteDialog)
							this.confirmDeleteDialog.destroy();

						var self = this;
						this.confirmDeleteDialog = new ConfirmationDialog({
							text: ecm.messages.admin_icn_edit_delete_category_dialog_instructions,
							buttonLabel: ecm.messages.delete_confirmation_button,
							cancelButtonDefault: true,
							onExecute: function() {
								self.logDebug( "Delete category:" + categoryId );
								var editCategoriesArray = [];
								if( !self._deletedEditCategories ){
									self._deletedEditCategories = [];
								}
								if( self.editCategories && self.editCategories.length ){
									array.forEach( self.editCategories, function( category ){
										if( category.name != categoryId ){
											editCategoriesArray.push( category )
										}else{
											self._deletedEditCategories.push( category );
										}
									} ) 
									self.editCategories = editCategoriesArray;
									 
									if( self.editTemplates && self.editTemplates[categoryId] ){
										if( !self._editTemplatesBackup ){
											self._editTemplatesBackup = [];
										}
										self._editTemplatesBackup[categoryId]  = self.editTemplates[categoryId];
										self.editTemplates[categoryId] = null;
									}
									self.onChangeEditCategories();
								}
							}
						});
						this.confirmDeleteDialog.show();
					} ));
					buttonsDiv.appendChild(deleteCategoryButton.domNode);
				}
				
				this._editCategoriesDiv.appendChild(buttonsDiv);
				
				//append grid area
				var categoryGridContainer = new BorderContainer({
					gutters: false,
				});
				
				
				if( editCategory.enable ){
					domStyle.set(categoryGridContainer.domNode, "height", "100px");
					
					this._editCategoriesDiv.appendChild(categoryGridContainer.domNode);
					this.editCategoryGrids[editCategory.name] = this._loadEditTemplateGrid(categoryGridContainer, this.editCategoryGrids[editCategory.name], editCategory.name, this.editTemplates[editCategory.name], this.messages.admin_icn_edit_template_column_head);
					this.editCategoryGrids[editCategory.name].editCategoryName = editCategory.name;
					this.editCategoryGrids[editCategory.name].config = this;

					this.own(aspect.after(this.editCategoryGrids[editCategory.name].select.row, "onSelectionChange", lang.hitch(this.editCategoryGrids[editCategory.name], function(e) {
						this.config._updateEditServiceButtons(this.editCategoryName);
					}), true));
				}
				
				
			}
			this.resize();
		},
		
		
		_disableCategory: function( categoryName ){
			if( categoryName && this.editCategories && this.editCategories.length){
				var category = this._getEditCategory( categoryName );
				category.enable = false;
				this.onChangeEditCategories();
				this.editTemplateButtons.newButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.editButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.propertiesButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.deleteButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.makeDefaultButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.enableCategoryButtons[categoryName].set("disabled", false);
				this.editTemplateButtons.disableCategoryButtons[categoryName].set("disabled", true);
			}
		},
		
		_enableCategory: function( categoryName ){
			if( categoryName && this.editCategories && this.editCategories.length){
				var category = this._getEditCategory( categoryName );
				category.enable = true;
				this.onChangeEditCategories();
				this.editTemplateButtons.newButtons[categoryName].set("disabled", false);
				this.editTemplateButtons.editButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.propertiesButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.deleteButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.makeDefaultButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.enableCategoryButtons[categoryName].set("disabled", true);
				this.editTemplateButtons.disableCategoryButtons[categoryName].set("disabled", false);
			}
		},
		
		_newEditServiceTemplate: function(categoryId, isDefault){
			if (this._newEditTemplateDialog) {
				this._newEditTemplateDialog.destroyRecursive();
			}							
			this._newEditTemplateDialog = new AddEditServiceTemplateDialog({"templateType": categoryId, 
				                                    "mimeTypes": this._getEditServiceMimeTypes(categoryId),
				                                    "isDefault": isDefault});
			
			this._newEditTemplateDialog.show(this.repositoryData.repository, null, true, false, lang.hitch(this, function(item) {				
				if (item) {
					this._addEditServiceTemplateGridItem(this.editCategoryGrids[categoryId], item, categoryId, isDefault);
				}
			}));
			this._newEditTemplateDialog.setTitle(string.substitute(this.messages.icn_edit_add_template_dialog_title, [categoryId]));
			
		},
		
		_changeEditServiceTemplate: function(categoryId) {
			if (this._editEditTemplateDialog) {
				this._editEditTemplateDialog.destroyRecursive();
			}
			var item = this._getEditServiceItem(categoryId);
			this._editEditTemplateDialog = new ChangeEditServiceTemplateDialog({ templateType: categoryId, 
													  mimeTypes: this._getEditServiceMimeTypes(categoryId),
													  _item: item });
			this._editEditTemplateDialog.show(this.repositoryData.repository, null, true, false, lang.hitch(this, function() {
			    this._updateEditServiceTemplateGridItem(this.editCategoryGrids[categoryId], item, categoryId);
			}));
			this._editEditTemplateDialog.setTitle(string.substitute(this.messages.icn_edit_change_template_dialog_title, [categoryId]));
		},
		
	    _changeEditServiceTemplateProperties: function(categoryId) {
		    if (this._editEditTemplatePropertiesDialog) {
				this._editEditTemplatePropertiesDialog.destroyRecursive();
		    }
			this._editEditTemplatePropertiesDialog = new EditServiceEditPropertiesDialog();			
		    var selectedItemIds = this.editCategoryGrids[categoryId].select.row.getSelected();	
		    if (selectedItemIds && selectedItemIds.length > 0) {
		    	var selectedItem = this.editCategoryGrids[categoryId].model.store.get(selectedItemIds[0]); 
		    	if (selectedItem.item.repository.type == "cm"){
		    		var items =[];
			        items.push(selectedItem.item);			        	 
		    		if (items && items.length > 0) {
			    		selectedItem.item.repository.lockItems(items);
		    		}
		    	}		    	
		    	selectedItem.item.repository.documentSystemProperties = this.repositoryData.repositoryConfig.getDocumentSystemProperties();	
		    	this._editEditTemplatePropertiesDialog.showProperties(selectedItem.item, lang.hitch(this, function() {
		    		selectedItem.name = selectedItem.item.name;					
					if (selectedItem.item.repository.type == "cm") {
						selectedItem.description = selectedItem.item.attributes.clbDescription;
					} else {
						selectedItem.description = selectedItem.item.attributes.Description;
					}
					this.editCategoryGrids[categoryId].model.store.put(selectedItem);	
				}), null);
		    }			
	    },
	    
	    _deleteEditServiceTemplates: function(categoryId) {							
			this._deleteEditServiceTemplatesGridItem(this.editCategoryGrids[categoryId], categoryId, lang.hitch(this, function() {				
				this.editTemplateButtons.newButtons[categoryId].set("disabled", false);
				this.editTemplateButtons.editButtons[categoryId].set("disabled", true);
				this.editTemplateButtons.propertiesButtons[categoryId].set("disabled", true);
				this.editTemplateButtons.deleteButtons[categoryId].set("disabled", true);
				this.editTemplateButtons.makeDefaultButtons[categoryId].set("disabled", true);
			}));				
	    },
	    
	    _setEditServiceDefaultTemplate: function(categoryId) {
	    	var methodName = "_setEditServiceDefaultTemplate"
	    	var grid = this.editCategoryGrids[categoryId];
		    var defaultButton = this.editTemplateButtons.makeDefaultButtons[categoryId];
	    	var selectedItemIds = grid.select.row.getSelected();
	    	var selectedItem = grid.model.store.get(selectedItemIds[0]);    	
	    	if (selectedItem.item.repository.type == "cm"){
	    		var items =[];
	    		//if (!selectedItem.item.locked) {
		        	 items.push(selectedItem.item);			        	 
		        //}
	    		var filteredItems = grid.model.store.query({isDefault: true});	
	    		if (filteredItems.length > 0) {
					for( var i = 0; i < filteredItems.length; i ++ ){
						//if(!filteredItems[i].item.locked) {
							items.push(filteredItems[i].item);	
						//}												
					}
				}
	    		if (items && items.length > 0) {
		    		selectedItem.item.repository.lockItems(items);
	    		}
	    	}	    	
	    	var request = Request.invokeService("setDefaultEditTemplate", this.repositoryData.repository.type, {
				repositoryId: this.repositoryData.repository.id,
				categoryId: categoryId,
				docid: selectedItem.id
			}, lang.hitch(this, function(response) {
				this.logDebug(methodName, "set to default template: " + this.id);
				var filteredItems = grid.model.store.query({isDefault: true});			
				if (filteredItems.length > 0) {
					for( var i = 0; i < filteredItems.length; i ++ ){
						filteredItems[i].isDefault = false;						
						if (filteredItems[i].item.repository.type == "cm") {
							filteredItems[i].item.attributes.clbDefault = false;
						} else {
							filteredItems[i].item.attributes.IcnTemplateDefault = false;
						}
					}
				}
				// Sets the current grid item as the default item
				if (selectedItem.item.repository.type == "cm") {
	                selectedItem.item.attributes.clbDefault = true;
	                selectedItem.item.attributes.clbEditServiceCategoryId = categoryId;
				} else {
	                selectedItem.item.attributes.IcnTemplateDefault = true;
	                selectedItem.item.attributes.IcnTemplateCategoryId = categoryId;
				}
				selectedItem.isDefault = true;
				grid.model.store.put(selectedItem);			
				grid.body.refresh();
				// Disables the set default button
				defaultButton.set("disabled", true);
				
			}));
	    },	
		
		_getEditServiceItem: function(categoryId) {
			if (categoryId && this.editCategoryGrids[categoryId] && this.editCategoryGrids[categoryId].select) {
				var rowIds = this.editCategoryGrids[categoryId].select.row.getSelected();		
				var item = this.editCategoryGrids[categoryId].row(rowIds[0]).item();	
				return item.item;
			}			
		},
		
	    /**
		 * @private Adds new item to the Edit Service templates grid
		 */
		_addEditServiceTemplateGridItem: function(grid, item, categoryId, isDefault) {			
			var methodName = "_addEditServiceTemplateGridItem";
			if (item) {	
				this.logDebug(methodName, "template name name: " + item.name);
				if (item.repository.type == "cm") {
					var desc=item.attributes.clbDescription;
					var gridItems = grid.model.store.query({});
					if (gridItems && gridItems.length != 0 && gridItems[0].id == "0") {
						grid.model.store.remove(gridItems[0].id);
						item.attributes.clbDefault = true;
					} else if (gridItems && gridItems.length == 0) {
						item.attributes.clbDefault = true;
					} else {
						item.attributes.clbDefault = isDefault;
					}
					item.attributes.clbEditServiceCategoryId = categoryId;
					grid.model.store.add({
					   "id": item.id,				   
					   "name": idxHtml.escapeHTML(item.name),
					   "description": idxHtml.escapeHTML(desc), //item.attributes.Description,
					   "item": item,
					   "isDefault": item.attributes.clbDefault	== "true" || item.attributes.clbDefault	== true ? true :false	
					});	
				} else {
					var desc=item.attributes.Description;
					var gridItems = grid.model.store.query({});
					if (gridItems && gridItems.length != 0 && gridItems[0].id == "0") {
						grid.model.store.remove(gridItems[0].id);
						item.attributes.IcnTemplateDefault = true;
					} else if (gridItems && gridItems.length == 0) {
						item.attributes.IcnTemplateDefault = true;
					} else {
						item.attributes.IcnTemplateDefault = isDefault;
					}
					item.attributes.IcnTemplateCategoryId = categoryId;
					grid.model.store.add({
					   "id": item.id,				   
					   "name": idxHtml.escapeHTML(item.name),
					   "description": idxHtml.escapeHTML(desc), //item.attributes.Description,
					   "item": item,
					   "isDefault": item.attributes.IcnTemplateDefault
					});	
				}					
				if (this.editTemplates[categoryId]) {
					this.editTemplates[categoryId].push(item);
				} else {
					var array =[];
					array.push(item);
					this.editTemplates[categoryId] = array;
				}
			}
		},	
		
		_updateEditServiceTemplateGridItem: function(grid, item, categoryId) {
			if (item) {	
				var desc=item.attributes.Description;
				if (item.repository.type == "cm")
					desc=item.attributes.clbDescription;
				var selectedItemIds = grid.select.row.getSelected();	
				if (selectedItemIds.length == 1) {
					var selectedItem = grid.model.store.get(selectedItemIds[0]);
					selectedItem.name = item.name;
					selectedItem.description = desc;
					selectedItem.item = item;
					grid.model.store.put(selectedItem);		
					
					if (item.repository.type == "cm") {
						item.attributes.clbEditServiceCategoryId = categoryId;
						item.attributes.clbDefault = selectedItem.isDefault;
					} else {
						item.attributes.IcnTemplateCategoryId = categoryId;
						item.attributes.IcnTemplateDefault = selectedItem.isDefault;
					}					
				}

			}			
		},
		
		
	    /**
		 * @private Removes the selected items from the grid.  If it is the last item of Default categories then add back the default template.
		 *   
		 * @return true if the default template item was added back or grid is empty
		 */
		_deleteEditServiceTemplatesGridItem: function(grid, categoryId, callback) {	
			var contentItems = [];			
			var selectedItemIds = grid.select.row.getSelected();	
			array.forEach(selectedItemIds, lang.hitch(this, function(selectedItem) {	
				var contentItem = grid.model.store.get(selectedItem).item;		
				contentItems.push(contentItem);								
			}));			
			
			this.repositoryData.repository.deleteItems(contentItems, lang.hitch(this, function(items) {	
				array.forEach(selectedItemIds, lang.hitch(this, function(selectedItemId) {	
					var filterItem = array.filter(items, function(item) {
						return item.id == selectedItemId && item.deleted;
					});
					if (filterItem.length > 0) {
						grid.model.store.remove(selectedItemId);
					} 
				}));	
				
				//remove deleted items from edit templates array
                for (var i = 0; i < selectedItemIds.length; i++) {
                	for (var j = 0; j< this.editTemplates[categoryId].length; j++){
                		if (this.editTemplates[categoryId][j].deleted) {
                			this.editTemplates[categoryId].splice(j,1);
                			break;
                		}
                	}
				}	
				
				if (this._isDefaultEditCategory(categoryId)) {
					if (grid.model.store.query({}).length == 0) {
						grid.model.store.add({
				    		"id": "0",
			    			"name": idxHtml.escapeHTML(this.defaultEditCategories[categoryId]),
							"description": idxHtml.escapeHTML(this.messages.admin_repcfg_office_online_blank_template_description),
							"item": null,
							"isDefault": false	
						});
					}
					callback();
				} else {					
				    callback();
				}
			}), true);								
		},

		/**
		 * @private Return the valid mime types.
		 */
		_getEditServiceMimeTypes: function(documentType) {
			if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
				return this._docMimeTypes;
			} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
				return this._presentationMimeTypes;
			} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLAT) {
				return this._spreadsheetMimeTypes;
			} else {
				var category = new Object();
				this.editCategories.forEach (function (o){
					if (o.name == documentType) {
						category = o;
					}
				})				
				var mimeTypesJson = '{';
				category.mimeTypes.forEach(function (type) {
					mimeTypesJson = mimeTypesJson + '"' + type + '": "' + type + '",';
				})
				mimeTypesJson = mimeTypesJson.substring(0, mimeTypesJson.length - 1) + '}';
				return dojojson.parse(mimeTypesJson);	
			}

		},
		
		_loadEditTemplates: function() {
			
			var methodName = "_loadEditTemplates";
			this.logEntry(methodName);
			
			this.fetchEditTemplatesCallback = function(contentItems) {	
				this.editTemplates = this._retrieveDataFromEditServiceTemplates(contentItems);
				this._renderEditCategories();
			    // Shows the edit service template controls
				this._toggleEditTemplateControls(true); 
			};			
			if (this.repositoryData.editServiceAddonInstalled == false) {
				// edit service addon has not been run yet so just show the default templates
				var initEditGrids = lang.hitch(this, this.fetchEditTemplatesCallback);
				initEditGrids();
			} else {
				this.own(aspect.after(this, "fetchEditTemplatesCallback", lang.hitch(this,function(){
					this.resize();
				} ) ));
				this.repositoryData.repository.retrieveEditServiceTemplates(lang.hitch(this, this.fetchEditTemplatesCallback), null, [1082, 1158, 1016] );
		    }
			
			this.logExit(methodName);
		},
		
		_loadEditTemplateGrid: function(gridArea, grid, categoryId, templates, nameHeader) {
			var methodName = "_loadEditTemplateGrid";
			this.logEntry(methodName);
			var gridItems = [];
			this.logDebug( methodName, "templates:" + templates  );
			if (templates && templates.length > 0) {			    	
				array.forEach(templates, function(template) {
					if (template.repository.type == "cm") {						
						if (categoryId == template.attributes.clbEditServiceCategoryId) {
							desc= template.attributes.clbDescription? idxHtml.escapeHTML(template.attributes.clbDescription):"";						
							gridItems.push({
								"id": template.id,
								"name": idxHtml.escapeHTML(template.name),
								"description": idxHtml.escapeHTML(desc), 
								"item": template,
								"isDefault": template.attributes.clbDefault	== "true" || template.attributes.clbDefault	== true ? true :false					
							});						
						}						
					} else {
						if (categoryId == template.attributes.IcnTemplateCategoryId) {
							desc= template.attributes.Description? idxHtml.escapeHTML(template.attributes.Description):"";						
							gridItems.push({
								"id": template.id,
								"name": idxHtml.escapeHTML(template.name),
								"description": idxHtml.escapeHTML(desc), //template.attributes.Description? idxHtml.escapeHTML(template.attributes.Description) : "",
								"item": template,
								"isDefault": template.attributes.IcnTemplateDefault						
							});						
						}
					}
				});				    	
		    } 
			// Add a default template entry
			if (gridItems.length == 0 && this.defaultEditCategories[categoryId]) {
				this.logDebug( methodName, "no templates, so adding default one for default category:" + this.defaultEditCategories[categoryId]  );
		    	gridItems = [{
	    			"id": "0",
	    			"name": idxHtml.escapeHTML(this.defaultEditCategories[categoryId]),
					"description": idxHtml.escapeHTML(this.messages.admin_repcfg_office_online_blank_template_description),
					"item": null,
					"isDefault": false
		    	}];
		    }
		    if (grid)
		    	grid.destroy();
		    grid = this._initializeOfficeOnlineGrid(gridItems, nameHeader);
		    domClass.add(grid.domNode, "compact gridxWholeRow");
			gridArea.addChild(grid);
			grid.startup();
			this.logExit(methodName);
			return grid;
		},
		
		_retrieveDataFromEditServiceTemplates: function(contentItems){
			var templates = {};
			if(contentItems && contentItems.length){
				for( var i=0; i < contentItems.length; i ++ ){					
                    var categoryId = contentItems[i].attributes.IcnTemplateCategoryId;
                    if (contentItems[i].repository.type == "cm") {
                    	categoryId = contentItems[i].attributes.clbEditServiceCategoryId;
                    }
					if (templates[categoryId]) {
						templates[categoryId].push(contentItems[i]);
					} else {
						var array =[];
						array.push(contentItems[i]);
						templates[categoryId] = array;
					}
				}
			}
			
			for( var category in templates ){
				var findDefault = false;
				var templatesByCategory = templates[category];
				for( var i = 0; i < templatesByCategory.length; i ++ ){
					var isDefault = templatesByCategory[i].attributes.IcnTemplateDefault;
					if (templatesByCategory[i].repository.type == "cm") {
						isDefault = templatesByCategory[i].attributes.clbDefault;
					}
					if(isDefault){
						findDefault = true;
						break;
					}
				}
				if( !findDefault && templatesByCategory.length >= 1  ){
					if (templatesByCategory[0].repository.type == "cm") {
						templatesByCategory[0].attributes.clbDefault = true;
					} else {
						templatesByCategory[0].attributes.IcnTemplateDefault = true;
					}
					
				}
			}
			
			return templates;
		},
		
		_updateEditServiceButtons: function(categoryId) {
			var canEdit = false;	
			var canDelete = true;
			var canSetDefault = false;
			var canViewProperties = false;
			var grid = this.editCategoryGrids[categoryId];
			var editButton = this.editTemplateButtons.editButtons[categoryId];
			var propertiesButton = this.editTemplateButtons.propertiesButtons[categoryId];
			var deleteButton = this.editTemplateButtons.deleteButtons[categoryId];
			var defaultButton = this.editTemplateButtons.makeDefaultButtons[categoryId];
			var selectedItems = grid.select.row.getSelected();

			array.forEach(selectedItems, lang.hitch(this, function(selectedItem) {				
 				if (grid.row(selectedItem).id == "0") {
 					canDelete = false;
 					return;
 				}								
 				var contentItem = grid.row(selectedItem).item().item;
 				if (contentItem) {
 					if (selectedItems.length == 1) {
 						if (this.repositoryData.type == "cm" ){
							canSetDefault = !contentItem.attributes.clbDefault && contentItem.hasPrivilege("privEditProperties");
							canEdit = contentItem.hasPrivilege("privCheckOutDoc") || contentItem.hasPrivilege("privCheckInOutDoc");
						}
						else {
							canSetDefault = !contentItem.attributes.IcnTemplateDefault && contentItem.hasPrivilege("privEditProperties");
							canEdit=(contentItem.hasPrivilege("privCheckOutDoc") || contentItem.hasPrivilege("privCheckInOutDoc")) && contentItem.hasPrivilege("privMajorVersion");
						}  
 						canViewProperties = true;
 					}					
 					canDelete &= contentItem.hasPrivilege("privDelete");	
 				} else {
 					canDelete = false;
 				}				
 			}));
			editButton.set("disabled", !canEdit);
			propertiesButton.set("disabled", !canViewProperties);
			deleteButton.set("disabled", !canDelete);
			defaultButton.set("disabled", !canSetDefault);			
		},	
						
		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		isResetingFields: function() {
			var mappingData = this._getMappingData();
			if (this.repositoryData.propertiesMapping.length != mappingData.length)
				return false;

			var defEmailClass = this._emailClassSelector.getSelected() ? this._emailClassSelector.getSelected().id : "";
			var defFolderClass = this._folderClassSelector.getSelected() ? this._folderClassSelector.getSelected().id : "";
			if (defEmailClass != this.repositoryData.repositoryConfig.getDefaultEmailClassForAdd() || defFolderClass != this.repositoryData.repositoryConfig.getDefaultFolderClassForAdd()) {
				return false;
			}
			
			var officeOnlineEnabled = this.p8EnableOOService.get('checked');
			if (officeOnlineEnabled != this.repositoryData.repositoryConfig.getOfficeOnlineEnabled()) {
				return false;
			}
			var editServiceEnabled = this.p8EnableEditService.get('checked');
			if (editServiceEnabled != this.repositoryData.repositoryConfig.getEditServiceEnabled()) {
				return false;
			}
			for (var i = 0; i < mappingData.length; i++) {
				var propertyMapping = this.repositoryData.findPropertyMapping(mappingData[i].id);
				if (propertyMapping) {
					if (mappingData[i]._attributes.dataType != propertyMapping.getDataType())
						return false;
					if (mappingData[i]._attributes.repositoryProperty != propertyMapping.getRepositoryProperty())
						return false;
					if (mappingData[i]._attributes.officeProperties.length != propertyMapping.getOfficeProperties().length)
						return false;
					if (mappingData[i]._attributes.officeProperties.join(",") != propertyMapping.getOfficeProperties().join(","))
						return false;
				} else
					return false;
			}	
			
			if( (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") && this.editCategories ){
				if( this.repositoryData.editServiceCategories && this.repositoryData.editServiceCategories.length != this.editCategories.length  ){
					return false;
				}
				for( var i = 0; i < this.repositoryData.editServiceCategories.length; i ++ ){
					var editCategory = this._getEditCategory( this.repositoryData.editServiceCategories[i]._attributes.name );
					var oriEditServiceCategory = this.repositoryData.editServiceCategories[i];
					if( editCategory ){
						if( editCategory.description != oriEditServiceCategory._attributes.description )
							return false;
						if( editCategory.displayName != oriEditServiceCategory._attributes.displayName )
							return false;
                        if( editCategory.enable + "" != oriEditServiceCategory._attributes.enable )
							return false;							
						if( editCategory.mimeTypes.length != oriEditServiceCategory._attributes.mimeTypes.length )
							return false;
						if( !array.every( editCategory.mimeTypes, function(mimeType){
							return array.some( oriEditServiceCategory._attributes.mimeTypes, function( oriMimeType ){
								return mimeType == oriMimeType;
							} )
						}  )){
							return false;
						}
					}else{
						return false;
					}
				}
			}
			
			return true;
		},

		resetData: function() {
			if (!this.isResetingFields()) {
				this._resetting = true;
				this.loadData();
				this._resetting = false;
			}
		},

		/**
		 * @private
		 */
		_onFieldDelimiterChange: function() {
			if (this._initialized) {
				this._onFieldChange()
			}
		},
		
		// override
		onMarkDirty: function() {
		},
		
		_getStringifyValue: function ( value ){
			if( typeof value !=  "string"){
				return dojojson.stringify(value);
			}else{
				return value;
			}
		},
		
		// Called before save
		loadWithFieldValues: function(repositoryConfig) {
			this.logEntry("loadWithFieldValues");
			this.repositoryData.propertiesMapping = this._getMappingData();			
			this.repositoryData.editServiceCategories = this._getCategoriesData();
			
			repositoryConfig.setDefaultEmailClassForAdd(this._emailClass);
			repositoryConfig.setDefaultFolderClassForAdd(this._folderClass);
			repositoryConfig.setDelimiterForOfficeProperty(this.delimiter.get("value"))
			repositoryConfig.setOfficeOnlineEnabled(this.p8EnableOOService.get("checked"));
			repositoryConfig.setEditServiceEnabled(this.p8EnableEditService.get("checked"));

			if (this.repositoryData.type == "p8" )
			{
				if (!domClass.contains(this.officeOnlineInlineMessage, "dijitHidden")) {
					repositoryConfig.setWarning(true);
				}
			}
			
			// cm item type reference attribute case
			if (this.repositoryData.type == "cm" )
			{
				var officeTemplatePermissions = this._cmOfficeTemplateCreatorDataPane.get("userGroupData");
				repositoryConfig.setOfficeTemplatePermissions(this._getStringifyValue(officeTemplatePermissions));
				
				var draftPermissions = this._cmDraftCreatorDataPane.get("userGroupData");
				repositoryConfig.setDraftPermissions(this._getStringifyValue(draftPermissions));
				
				var selectedClasses = this._cmEntryTemplateEnabledClasses.getSelectedItems();

				var cmOOSEnableClasses = [];
				var enableETFolderAssociations = [];
				for (var i = 0; i < selectedClasses.length; i++) {
					var selectedClass = selectedClasses[i];

					cmOOSEnableClasses.push(selectedClass.id);
				}
				repositoryConfig.cmOOSEnableClasses = cmOOSEnableClasses;
				
		    }
			
			this.logExit("loadWithFieldValues");
		},

		_createRepositoryPropertiesStore: function() {
			this.logEntry("_createRepositoryPropertiesStore");
			this.documentPropDescs = lang.clone(this.repositoryData.documentMappingPropDescs);
			array.forEach(this.documentPropDescs, lang.hitch(this, function(entry) {
				if (this.repositoryData.findPropertyFromMapping(entry.value))
					entry.disable = true;
				else
					entry.disable = false;
				entry.id = entry.value;
			}));
			this.logExit("_createRepositoryPropertiesStore");
			return new MemoryStore({
				data: this.documentPropDescs
			});
		},

		_createDataTypeStore: function(callback) {
			this.logEntry("_createDataTypeStore");
			var types = {};
			array.forEach(this.documentPropDescs, lang.hitch(this, function(entry) {
				if (entry.type) {
					types[entry.type] = entry.type;
				} else if (entry.dataType && entry.id != "{CLASS}") {
					types[entry.dataType] = entry.dataType;
				}
			}));
			var options = [];
			for ( var i in types) {
				var type = types[i];
				if (type) {
					options.push({
						id: type,
						value: type,
						label: this.messages["admin_" + type.toLowerCase()] || type
					});
				}
			}
			this.logExit("_createDataTypeStore");
			return new MemoryStore({
				data: options
			});
		},

		_openItem: function(item) {
			this._setPropDescStatus(item.repositoryProperty, false);
			this._editItemValue = item;
			this._getDialog().show(this._repositoryPropertiesStore, this._dataTypeStore, {
				id: item.id,
				officeProperties: item.officeProperties,
				repositoryProperty: item.repositoryProperty,
				dataType: item.dataType
			});
		},

		/**
		 * @private Return the valid mime types for the input document type.
		 */
		_getMimeTypes: function(documentType) {
			if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
				return this._docMimeTypes;
			} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
				return this._presentationMimeTypes;
			} else {
				return this._spreadsheetMimeTypes;
			}
		},
		
		_onWordAdd: function() {
			this._addTemplate(ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE, this._wordGrid.model.store.query({id: "0"}).length == 1);
		},
		
		_onExcelAdd: function() {			
			this._addTemplate(ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLATE, this._excelGrid.model.store.query({id: "0"}).length == 1);
		},
		
		_onPowerpointAdd: function() {
			this._addTemplate(ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE, this._powerPointGrid.model.store.query({id: "0"}).length == 1);
		},
		
		/**
		 * @private Display the add template dialog.
		 */
		_addTemplate: function(documentType, isDefault) {
			if (this.repositoryData.officeOnlineSupported == false) {
				this._showErrorMessage(this.messages.office_online_save_before_adding_templates_title, this.messages.office_online_save_before_adding_templates_error);
				return;
			}
			
			if (this._tdialog) {
				this._tdialog.destroyRecursive();
			}							
			this._tdialog = new AddTemplateDialog({"templateType": documentType, 
				                                    "mimeTypes": this._getMimeTypes(documentType),
				                                    "isDefault": isDefault});
			
			this._tdialog.show(this.repositoryData.repository, null, true, false, lang.hitch(this, function(item) {				
				if (item) {
					if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
						this._addOfficeTemplateGridItem(this._wordGrid, item, ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE);
					} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
						this._addOfficeTemplateGridItem(this._powerPointGrid, item, ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE);
					} else {
						this._addOfficeTemplateGridItem(this._excelGrid, item, ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLATE);						
					}
				}
			}));
			if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
				this._tdialog.setTitle(this.messages.add_doc_template);
			} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
				this._tdialog.setTitle(this.messages.add_presentation_template);
			} else {
				this._tdialog.setTitle(this.messages.add_spreadsheet_template);
			}
		},
		
		/**
		 * @private Returns the item for the specified type.
		 */
		_getItem: function(documentType) {
			if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
				var rowIds = this._wordGrid.select.row.getSelected();		
				var item = this._wordGrid.row(rowIds[0]).item();
			} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
				var rowIds = this._powerPointGrid.select.row.getSelected();		
				var item = this._powerPointGrid.row(rowIds[0]).item();
			} else {
				var rowIds = this._excelGrid.select.row.getSelected();		
				var item = this._excelGrid.row(rowIds[0]).item();	
			}
			return item.item;
		},
		
		_onWordChange: function() {
			this._changeTemplate(ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE);
		},
		
		_onExcelChange: function() {
			this._changeTemplate(ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLATE);
		},
		
		_onPowerpointChange: function() {
			this._changeTemplate(ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE);
		},
		
		/**
		 * @private Display the change template dialog.
		 */
		_changeTemplate: function(documentType) {
			if (this._cdialog) {
				this._cdialog.destroyRecursive();
			}
			var item = this._getItem(documentType);
			this._cdialog = new ChangeTemplateDialog({ templateType: documentType, 
													  mimeTypes: this._getMimeTypes(documentType),
													  _item: item });
			this._cdialog.show(this.repositoryData.repository, null, true, false, lang.hitch(this, function() {
				if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
					this._updateOfficeTemplateGridItem(this._wordGrid, item);
				} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
					this._updateOfficeTemplateGridItem(this._powerPointGrid, item);
				} else {					
					this._updateOfficeTemplateGridItem(this._excelGrid, item);
				}
			}));
			if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
				this._cdialog.setTitle(this.messages.change_doc_template);
			} else if (documentType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
				this._cdialog.setTitle(this.messages.change_presentation_template);
			} else {
				this._cdialog.setTitle(this.messages.change_spreadsheet_template);
			}
		},
		
		_onWordDelete: function() {
	        this._deleteTemplates(ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE);
	    },

		_onExcelDelete: function() {
	        this._deleteTemplates(ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLATE);
	    },
	    
		_onPowerpointDelete: function() {
	        this._deleteTemplates(ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE);
	    },
	    
	    _deleteTemplates: function(documentType) {				
			if (documentType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {				
				this._deleteOfficeTemplatesGridItem(this._wordGrid, this.messages.admin_repcfg_office_online_word_template_name, lang.hitch(this, function(isDefault) {				
					this.newButton1.set("disabled", false);
					this.openButton1.set("disabled", true);
					this.deleteButton1.set("disabled", true);
					this.defaultButton1.set("disabled", true);
				}));				
			}
			else if  (documentType == ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLATE) {
				this._deleteOfficeTemplatesGridItem(this._excelGrid, this.messages.admin_repcfg_office_online_excel_template_name, lang.hitch(this, function(isDefault) {				
					this.newButton2.set("disabled", false);
					this.openButton2.set("disabled", true);
					this.deleteButton2.set("disabled", true);
					this.defaultButton2.set("disabled", true);
				}));				
			}
			else {
				this._deleteOfficeTemplatesGridItem(this._powerPointGrid, this.messages.admin_repcfg_office_online_powerpoint_template_name, lang.hitch(this, function(isDefault) {								
					this.newButton3.set("disabled", false);
					this.openButton3.set("disabled", true);
					this.deleteButton3.set("disabled", true);
					this.defaultButton3.set("disabled", true);
				}));
			}
	    },
	    
	    /**
		 * @private Removes the selected items from the grid.  If it is the last item then add back the default template.
		 *   
		 * @return true if the default template item was added back
		 */
		_deleteOfficeTemplatesGridItem: function(grid, defaultName, callback) {	
			var contentItems = [];			
			var selectedItemIds = grid.select.row.getSelected();	
			array.forEach(selectedItemIds, lang.hitch(this, function(selectedItem) {	
				var contentItem = grid.model.store.get(selectedItem).item;		
				contentItems.push(contentItem);								
			}));			
			
			this.repositoryData.repository.deleteItems(contentItems, lang.hitch(this, function(items) {	
				array.forEach(selectedItemIds, lang.hitch(this, function(selectedItemId) {	
					var filterItem = array.filter(items, function(item) {
						return item.id == selectedItemId && item.deleted;
					});
					if (filterItem.length > 0) {
						grid.model.store.remove(selectedItemId);
					} 
				}));			
										
				if (grid.model.store.query({}).length == 0) {
					grid.model.store.add({
			    		"id": "0",
		    			"name": idxHtml.escapeHTML(defaultName),
						"description": idxHtml.escapeHTML(this.messages.admin_repcfg_office_online_blank_template_description),
						"item": null,
						"isDefault": false	
					});
					callback(true);
				} else {
					callback(false);
				}							
			}), true);								
		},
		
	    _onSetWordDefault: function(grid, defaultButton) {   	
	    	this._setDefaultTemplate(this._wordGrid, this.defaultButton1);
	    },
	    
	    _onSetExcelDefault: function() {
	    	this._setDefaultTemplate(this._excelGrid, this.defaultButton2);
	    },
	    
	    _onSetPowerpointDefault: function() {
	    	this._setDefaultTemplate(this._powerPointGrid, this.defaultButton3);
	    },
	    
	    _setDefaultTemplate: function(grid, defaultButton) {
	    	var self = this;	    	
	    	var selectedItemIds = grid.select.row.getSelected();
	    	var selectedItem = grid.model.store.get(selectedItemIds[0]);
	    	var attName="IcnTemplateDefault";
	    	var value1=true;
	    	var value2=false;
	    	var checkin=false;
	        if (this.repositoryData.type == "cm" )
	        { 	
	        	attName="clbDefault";
	        	value1=1;
	        	value2=0;
	        	if (!selectedItem.item.locked){
	        	   var items =[selectedItem.item];	
	        	   selectedItem.item.repository.lockItems(items);
	        	   checkin=true;
	        	}
	        }
			// Sets the new default template
	    	selectedItem.item.saveAttributes([{
				"dataType": "xs:boolean",					
				"name":	attName,
				"value": value1//true 
			}], null, null, null, checkin, lang.hitch(this, function(response) {												
				// Unsets all other default templates
				// This is an edge case where we would have more than one default templates but that is very unlikely. 
				// Just loop for now instead of creating a new multi selected update service.
				var filteredItems = grid.model.store.query({isDefault: true});			
				if (filteredItems.length > 0) {
					var errors = [];		
					var finishHandler = function() {
						if (errors.length > 0) {
							var errorMessage = errors[0].statusMessage + "<br/>";
							if (errors.length > 1)
								errorMessage += "<div class='adminRepository adminOfficeWarningMessage'>";
							else 
								errorMessage += "<div>";								
							errorMessage += "<ul>";
							for (i = 0; i < errors.length; i++) {	// Unlikely to have more than one default templates
								errorMessage += "<li>" + errors[i].name + "</li>";
							}							
							errorMessage += "</div></ul>";
							self._showErrorMessage(self.messages.office_online_save_before_adding_templates_title, errorMessage);
						}
						grid.body.refresh();
					};
					var unsetDefault = function(templateItem, callback) {
						var contentItem = templateItem.item.clone();
						var checkin=false;
						if (!contentItem.locked){
							var items=[contentItem];
							contentItem.repository.lockItems(items);
							checkin=true;
						}
						// Unsets the current default						
						contentItem.saveAttributes([{
							"dataType": "xs:boolean",					
							"name":	attName,  //"IcnTemplateDefault",
							"value": value2   //false 
						}], null, null, null, checkin, function(response) {
							if (templateItem.item.repository.type == "cm" )
							   templateItem.item.attributes.clbDefault = 0;
							else
							   templateItem.item.attributes.IcnTemplateDefault = false;	
							templateItem.isDefault = false;
							grid.model.store.put(templateItem);		
							if (filteredItems.length > 0) {
								unsetDefault(filteredItems.pop(), callback);
							} else {
								callback();
							}
						}, true, function(response, errorMessages) {
							array.forEach(errorMessages, function(errorMessage) {								
								if (errorMessage && errorMessage.level >= 2) {
									errors.push({
										name: templateItem.name,
										statusMessage: errorMessage.text,
										message: errorMessage
									});
								}
							});
							if (filteredItems.length > 0) {
								unsetDefault(filteredItems.pop(), callback);
							} else {
								callback();
							}
						});
						
					}					
					unsetDefault(filteredItems.pop(), finishHandler);					
				}
				// Sets the current grid item as the default item
				if (this.repositoryData.type == "cm" )
				    selectedItem.item.attributes.clbDefault = 1;
				else
				    selectedItem.item.attributes.IcnTemplateDefault = true;				
				selectedItem.isDefault = true;
				grid.model.store.put(selectedItem);						
				// Disables the set default button
				defaultButton.set("disabled", true);
			}));							
	    },	   
	    
	    _onViewWordProperties: function() {
	    	this._onViewProperties(this._wordGrid);
	    },
	    	   
	    _onViewExcelProperties: function() {
	    	this._onViewProperties(this._excelGrid);
	    },
	    
	    _onViewPowerpointProperties: function() {
	    	this._onViewProperties(this._powerPointGrid);
	    },
	    
	    _onViewProperties: function(grid) {
	    	if (this._editPropertiesDialog) {
				this._editPropertiesDialog.destroyRecursive();
	    	}
			this._editPropertiesDialog = new EditPropertiesDialog();			
	    	
	    	var selectedItemIds = grid.select.row.getSelected();	
	    	if (selectedItemIds && selectedItemIds.length > 0) {
	    		var selectedItem = grid.model.store.get(selectedItemIds[0]);    		
	    		selectedItem.item.repository.documentSystemProperties = this.repositoryData.repositoryConfig.getDocumentSystemProperties();
	    		this._editPropertiesDialog.showProperties(selectedItem.item, lang.hitch(this, function() {
	    			selectedItem.name = selectedItem.item.name;
	    			if (selectedItem.item.repository.type=="cm")
					    selectedItem.description = selectedItem.item.attributes.clbDescription;
	    			else
	    				selectedItem.description = selectedItem.item.attributes.Description;
					grid.model.store.put(selectedItem);	
				}), null);
	    	}			
	    },
	    
	    /**
		 * @private Adds new item to the template grid
		 */
		_addOfficeTemplateGridItem: function(grid, item, idPrefix) {			
			if (item) {	
				var desc=item.attributes.Description;
				if (item.repository.type=="cm")
					desc=item.attributes.clbDescription;
				var gridItems = grid.model.store.query({});
				if (gridItems && gridItems[0].id == "0") {
					grid.model.store.remove(gridItems[0].id);
					item.attributes.IcnTemplateDefault = true;
					if (this.repositoryData.type == "cm" ){
						item.attributes.clbDefault = 1;
					}
				}				
				grid.model.store.add({
				   "id": item.id,				   
				   "name": item.name,
				   "description": desc, //item.attributes.Description,
				   "item": item,
				   "isDefault": item.attributes.IcnTemplateDefault
				});												
			}
		},	
		
	    /**
		 * @private Updates the template grid with the new item
		 */
		_updateOfficeTemplateGridItem: function(grid, item) {			
			if (item) {	
				var desc=item.attributes.Description;
				if (item.repository.type=="cm")
					desc=item.attributes.clbDescription;
				var selectedItemIds = grid.select.row.getSelected();	
				if (selectedItemIds.length == 1) {
					var selectedItem = grid.model.store.get(selectedItemIds[0]);
					selectedItem.name = item.name;
					selectedItem.description =desc; //item.attributes.Description;
					selectedItem.item = item;
					grid.model.store.put(selectedItem);					
				}				
			}
		},		
		
		_onNew: function() {
			this._getDialog().show(this._repositoryPropertiesStore, this._dataTypeStore);
		},

		_onOpen: function() {
			var items = this._propertiesMappingGrid.select.row.getSelected();
			for ( var i in items) {
				this._openItem(this._propertiesMappingGrid.row(items[i]).item());
			}
		},

		_onDelete: function() {
			var self = this;
			var items = this._propertiesMappingGrid.select.row.getSelected();
			if (this._confirmDelete) {
				this._confirmDelete.destroy();
			}
			this._confirmDelete = new ConfirmationDialog({
				text: string.substitute(ecm.messages.admin_delete_confirmation, [
					items.length
				]),
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete)
			});
			this._confirmDelete.show();
		},

		_doDelete: function() {
			var fx = lang.hitch(this, function(items) {
				for (i in items) {
					var item = this._propertiesMappingGrid.row(items[i]).item();
					this._setPropDescStatus(item.repositoryProperty, false);
				}
			});
			fx(this._propertiesMappingGrid.select.row.getSelected());
			// before removed it from the grid make those properties available for selection again. 

			var rowIds = this._propertiesMappingGrid.select.row.getSelected();
			if (rowIds) {
				for (var i = 0; i < rowIds.length; i++) {
					this._propertiesMappingGrid.model.store.remove(rowIds[i]);
				}
			}
			this._resetFilter();
			this.onMarkDirty();
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new PropertyMappingDialog();

				on(this._dialog, "Add", lang.hitch(this, function(saveData) {
					this._propertiesMappingGrid.model.store.add({
						"id": saveData.id,
						"officeProperties": saveData.officeProperties.join(", "),
						"dataType": saveData.dataType,
						"repositoryProperty": saveData.repositoryProperty,
						"label": saveData.label
					});
					this._setPropDescStatus(saveData.repositoryProperty, true);
					this._resetFilter();
					this.onMarkDirty();
					this._editItemValue = null;
				}));

				on(this._dialog, "Edit", lang.hitch(this, function(saveData) {
					var item = this._editItemValue;
					var oldPropertyName = item.repositoryProperty;
					if (oldPropertyName != saveData.repositoryProperty) {
						this._setPropDescStatus(oldPropertyName, false);
					} // enable previous property name and disable current one.
					this._setPropDescStatus(saveData.repositoryProperty, true);

					item.officeProperties = saveData.officeProperties.join(", ");
					item.dataType = saveData.dataType;
					item.repositoryProperty = saveData.repositoryProperty;
					item.label = saveData.label;
					this._propertiesMappingGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this.onMarkDirty();
					this._editItemValue = null;
				}));

				on(this._dialog, "Cancel", lang.hitch(this, function() {
					if (this._editItemValue) {
						var item = this._editItemValue;
						this._setPropDescStatus(item.repositoryProperty, true);
						// disable this property name.
					}
					this._editItemValue = null;
				}));
			}
			return this._dialog;
		},

		_setPropDescStatus: function(propertyName, disable) {
			var items = this._repositoryPropertiesStore.query({
				id: propertyName
			});
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				item.disable = disable;
				this._repositoryPropertiesStore.put(item, {
					id: item.id,
					overwrite: true
				});
			}
		},

		_savePropertyMappingIds: function(model, mappingData) {
			var ids = [];
			for (var i = 0; i < mappingData.length; i++) {
				ids.push(mappingData[i].id);
			}
			model.setFileTypes(ids);
		},

		_getMappingData: function() {
			var values = [];
			var items = this._propertiesMappingGrid.model.store.query({});
			for (var i = 0; i < items.length; i++) {
				var propertyMapping = PropertyMappingConfig.createPropertyMappingConfig(items[i].id);
				propertyMapping.setDataType(items[i].dataType);
				if (!this.textDir) {
					propertyMapping.setOfficeProperties(items[i].officeProperties);
				} else {
					propertyMapping.setOfficeProperties(BidiComplex.stripSpecialCharacters(items[i].officeProperties));
				}
				propertyMapping.setRepositoryProperty(items[i].repositoryProperty);
				values.push(propertyMapping);
			}
			return values;
		},		
		
		_getCategoriesData: function() {
			var values = [];
			var items = this.editCategories;
			for (var i = 0; items && i < items.length; i++) {
				var editCategory = EditServiceCategoryConfig.createEditServiceCategoryConfig(items[i].id);
				editCategory.setName(items[i].name);
				editCategory.setDisplayName(items[i].displayName);
				editCategory.setMimeTypes(items[i].mimeTypes);
				editCategory.setDescription(items[i].description);
				editCategory.setEnable(items[i].enable);
				values.push(editCategory);
			}
			if( this._deletedEditCategories ){
				var items = this._deletedEditCategories;
				for (var i = 0; items && i < items.length; i++) {
					var editCategory = EditServiceCategoryConfig.createEditServiceCategoryConfig(items[i].id);
					if( !array.some( this.editCategories, function(category){
						category.name == items[i].name;
					} ) ){
						editCategory.setName(items[i].name);
						editCategory.setDisplayName(items[i].displayName);
						editCategory.setMimeTypes(items[i].mimeTypes);
						editCategory.setDescription(items[i].description);
						editCategory.setEnable(false);
						editCategory.setDeleted( true );
						values.push(editCategory);
					}
				}
			}
			return values;
		},		
		
		// overridable
		onMarkDirty: function() {
		},
		

		_initializeOfficeOnlineGrid: function(gridItems, nameHeader) {						
			var grid = new Grid({
				region: "center",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: new MemoryStore({
					data: gridItems
				}),
				structure: [
					{
						name: " ",
						headerAriaLabel: this.messages.admin_default_desktop_header,
						sortable: true,
						filterable: false,
						width: "40px",
						decorator: lang.hitch(this, function(data, rowId, rowIndex) {						
							var htmlStr = "";
							var gridItem = grid.row(rowId).item();							
							if (gridItem.id != "0") {
								var contentItem = gridItem.item;
								var blankGif = require.toUrl("dojo/resources/blank.gif");					
								// Is Default template icon
								//if (contentItem && !!contentItem.attributes.IcnTemplateDefault) {
								if (contentItem && !!gridItem.isDefault) {
									htmlStr += "<img class='ecmStatusIcon ecmDefaultIcon' alt='" + this.messages.default_label + "' title='" + this.messages.default_label + "' src='" + blankGif + "'/><div class='dijitHidden'>" + this.messages.default_label + "</div>";
								}		
								var canEdit = contentItem && (contentItem.hasPrivilege("privCheckOutDoc") || gridItem.item.hasPrivilege("privCheckInOutDoc")) && gridItem.item.hasPrivilege("privMajorVersion");
								if (this.repositoryData.type == "cm" )
									canEdit = contentItem && (contentItem.hasPrivilege("privCheckOutDoc"));
								if (!canEdit) {	
									if (htmlStr.length == 0) {
										htmlStr += "<img class='ecmIconMargin' alt='' width='16px' src='" + blankGif + "'/>";										
									}
									htmlStr += "<img class='ecmStatusIcon ecmReadOnlyIcon' alt='" + this.messages.read_only_icon_title + "' title='" + this.messages.read_only_icon_title + "' src='" + blankGif + "'/><div class='dijitHidden'>" + this.messages.read_only_icon_title + "</div>";
								} 
							}
							if (htmlStr.length == 0) {
								htmlStr = '&nbsp;';
							}
							return htmlStr;
						}),
						styles: 'align: center; text-align: center;'
					},
					{
						field: "name",
						name: nameHeader,
					},
					{
						field: "description",
						name: this.messages.template_description,
					},
				],
				modules: [
					CellWidget,
					Focus,
					SelectRow,
					FilterModule,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 2,
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
			return grid;
		},
		
		_updateOfficeOnlineButtons: function(grid, editButton, propertiesButton, deleteButton, defaultButton) {
			var canEdit = false;	
			var canDelete = true;
			var canSetDefault = false;
			var canViewProperties = false;
			var selectedItems = grid.select.row.getSelected();
			array.forEach(selectedItems, lang.hitch(this, function(selectedItem) {				
				if (grid.row(selectedItem).id == "0") {
					canDelete = false;
					return;
				}								
				var contentItem = grid.row(selectedItem).item().item;
				if (contentItem) {
					if (selectedItems.length == 1) {
						//canSetDefault = !contentItem.attributes.IcnTemplateDefault && contentItem.hasPrivilege("privEditProperties");
						if (this.repositoryData.type == "cm" ){
							canSetDefault = !contentItem.attributes.clbDefault && contentItem.hasPrivilege("privEditProperties");
							canEdit =(contentItem.hasPrivilege("privCheckOutDoc"));
						}
						else {
							canSetDefault = !contentItem.attributes.IcnTemplateDefault && contentItem.hasPrivilege("privEditProperties");
							canEdit=(contentItem.hasPrivilege("privCheckOutDoc")|| contentItem.hasPrivilege("privCheckInOutDoc")) && contentItem.hasPrivilege("privMajorVersion");
						}  
						canViewProperties = true;
					}					
					canDelete &= contentItem.hasPrivilege("privDelete");	
				} else {
					canDelete = false;
				}				
			}));
			editButton.set("disabled", !canEdit);
			propertiesButton.set("disabled", !canViewProperties);
			deleteButton.set("disabled", !canDelete);
			defaultButton.set("disabled", !canSetDefault);			
		},			
		
		_initializeGrid: function() {
			this._filter.reset();
			this._prevFilter = "";

			if (this._propertiesMappingGrid) {
				this._propertiesMappingGrid.destroy();
			}
			this._propertiesMappingGrid = new Grid({
				region: "center",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: new MemoryStore({
					data: this._getProperties()
				}),
				structure: [
					{
						field: "officeProperties",
						name: this.messages.admin_office_config_properties_label,
						width: "50%"
					},
					{
						field: "dataType",
						name: this.messages.admin_office_config_type_label,
						width: "20%"
					},
					{
						field: "label",
						name: this.messages.admin_office_config_mapped_property_label,
						width: "30%"
					}
				],
				modules: [
					CellWidget,
					Focus,
					SelectRow,
					FilterModule,
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
			domClass.add(this._propertiesMappingGrid.domNode, "compact gridxWholeRow");
			this._propertyMappingBorderContainer.addChild(this._propertiesMappingGrid);
			this._propertiesMappingGrid.startup();
			this._propertyMappingBorderContainer.resize();			
			
			this.own(aspect.after(this._propertiesMappingGrid.select.row, "onSelectionChange", lang.hitch(this, "_checkButtons"), true));
			this.own(aspect.after(this._propertiesMappingGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._checkButtons();
				setTimeout(lang.hitch(this, lang.hitch(this, function() {
					this._propertiesMappingGrid.vScroller.scrollToRow(this._propertiesMappingGrid.row(id).visualIndex() - 1, true);
				}), 1500));
			}), true));
			this.own(aspect.after(this._propertiesMappingGrid.model, "onDelete", lang.hitch(this, function() {
				this._checkButtons();
			}), true));
			this.own(aspect.after(this._propertiesMappingGrid.model, "onSet", lang.hitch(this, function() {
				this._checkButtons();
			}), true));
			this.own(aspect.after(this._propertiesMappingGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._openItem(this._propertiesMappingGrid.row(evt.rowIndex).item());
			}), true));
		},
		
		_retrieveDataFromEditCategoryConfigs: function(editServiceCategoryConfigs){
			var categories = [];
			if(editServiceCategoryConfigs && editServiceCategoryConfigs.length){
				for( var i=0; i < editServiceCategoryConfigs.length; i ++ ){
					var category = {};
					category.id = editServiceCategoryConfigs[i]._attributes.id;
					if( !category.id ){
						category.id = editServiceCategoryConfigs[i].id;
					}
					if( !category.id ){
						category.id =  this.repositoryData.id + "." + idxHtml.escapeHTML(editServiceCategoryConfigs[i]._attributes.name);
					}
					category.name = editServiceCategoryConfigs[i]._attributes.name;
					category.displayName = editServiceCategoryConfigs[i]._attributes.displayName;
					if( !category.displayName ){
						category.displayName = category.name;
					}
					category.mimeTypes = editServiceCategoryConfigs[i]._attributes.mimeTypes;
					category.description = editServiceCategoryConfigs[i]._attributes.description;
					category.enable = editServiceCategoryConfigs[i]._attributes.enable;
					if( category.enable.toLowerCase && category.enable.toLowerCase() == "true" ){
						category.enable = true;
					}else if( category.enable.toLowerCase && category.enable.toLowerCase() =="false" ){
						category.enable = false;
					}
					categories.push(category);
				}
			}
			return categories;
		},
		
		_loadEditCategoryData: function() {
			var methodName = "_loadEditCategoryData";
			if( this.repositoryData.type == "p8" || this.repositoryData.type == "cm"){
				if( this.repositoryData.editServiceCategories && this.repositoryData.editServiceCategories.length > 0  ){
					this.logDebug( methodName, "Edit category quantity: " + this.repositoryData.editServiceCategories.length );
					this.editCategories = this._retrieveDataFromEditCategoryConfigs(this.repositoryData.editServiceCategories);
				}else{
					this.logDebug( methodName, "No edit category, init with default ones. " );
					//set to default ones.
					this.editCategories = [{
						id: this.repositoryData.id + "." + ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE,
						mimeTypes: this._convertJSONMimeTypesToArray(this._docMimeTypes),
						name: "Word",
						displayName: "Word",
						enable: true,
						isNew: true,
						description: this.messages.admin_icn_edit_word_category_description,
						defaultTemplateName:this.messages.admin_repcfg_office_online_word_template_name
					},{id: "Excel",
						id: this.repositoryData.id + "." + ecm.widget.admin.RepositoryOfficeConf.EXCEL_TEMPLATE,
						mimeTypes: this._convertJSONMimeTypesToArray(this._spreadsheetMimeTypes),
						name: "Excel",
						displayName: "Excel",
						enable: true,
						isNew: true,
						description: this.messages.admin_icn_edit_excel_category_description,
						defaultTemplateName: this.messages.admin_repcfg_office_online_excel_template_name
					},{id: "PowerPoint",
						id: this.repositoryData.id + "." + ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE,
						mimeTypes: this._convertJSONMimeTypesToArray(this._presentationMimeTypes),
						name: "PowerPoint",
						displayName: "PowerPoint",
						enable: true,
						isNew: true,
						description: this.messages.admin_icn_edit_powerpoint_category_description,
						defaultTemplateName: this.messages.admin_repcfg_office_online_powerpoint_template_name
					}
					];
				}
			} else {				
				domStyle.set(this._editServiceIntegrationTitlePane.domNode, "display", "none");
			}
			
			if (this.p8EnableEditService.get('checked')) {
				if (!this._editCategoriesInit) {
	    			this._loadEditTemplates();	
	    			this._editCategoriesInit = true;
	    		}
	    	}
		},
		
		onSelect: function() {
			var methodName = "onSelect";
			this.logEntry( methodName );
			if (this.p8EnableOOService.get('checked')) {
				if (!this._wordGrid) {
					this._loadOfficeTemplates();
				}
	    	}
			
			this._loadEditCategoryData();
			
			this.repositoryData._loadEditServiceData = true;
			
			if( !this.defaultMimetypes ){
				var _SECURITY_TOPIC = {
					category: "settings.settings"
				};
				this._settingsData = SettingsData.createSettingsData(_SECURITY_TOPIC);
				this._settingsData.loadData(lang.hitch(this, function() {
					this.defaultMimetypes = this._settingsData.defaultContentTypes;
				}));
			}
			
			this._officeOnlinePaneOriginalHeight = "550px";

			if( this.repositoryData.repository && this.repositoryData.repository._isP8()){
				this._officeOnlinePaneOriginalHeight = '550px';
				if( this.p8EnableOOService.get('checked') ){
					this._propertyMappingBorderContainer2.domNode.style.height = '550px';
				}else{
					this._propertyMappingBorderContainer2.domNode.style.height = "50px";
				}
			}
			
			this.resize();
			this.logExit( methodName );
		},		
		
		_getProperties: function() {
			var items = [];
			if (this.repositoryData.propertiesMapping) {
				for (var i = 0; i < this.repositoryData.propertiesMapping.length; i++) {
					var queryResults = this._repositoryPropertiesStore.query({
						id: this.repositoryData.propertiesMapping[i].getRepositoryProperty()
					});
					for (var j = 0; j < queryResults.length; j++) {
						if (!this.textDir || this.repositoryData.propertiesMapping[i].getOfficeProperties().length == 1) {
							items.push({
								"id": this.repositoryData.propertiesMapping[i].id,
								"officeProperties": this.repositoryData.propertiesMapping[i].getOfficeProperties().length > 0 ? this.repositoryData.propertiesMapping[i].getOfficeProperties().join(", ") : "",
								"dataType": this.repositoryData.propertiesMapping[i].getDataType(),
								"repositoryProperty": this.repositoryData.propertiesMapping[i].getRepositoryProperty(),
								"label": queryResults[j].label
							});
						} else {
							var arr = [];
							array.forEach(this.repositoryData.propertiesMapping[i].getOfficeProperties(), lang.hitch(this, function(item) {
								arr.push(this.enforceTextDirWithUcc(null, item));
							}));
							items.push({
								"id": this.repositoryData.propertiesMapping[i].id,
								"officeProperties": arr.join(", "),
								"dataType": this.repositoryData.propertiesMapping[i].getDataType(),
								"repositoryProperty": this.repositoryData.propertiesMapping[i].getRepositoryProperty(),
								"label": queryResults[j].label
							});
						}
						this._setPropDescStatus(this.repositoryData.propertiesMapping[i].getRepositoryProperty(), true);
					}
				}
			}
			return items;
		},

		_checkButtons: function() {
			this.openButton.set("disabled", !(this._propertiesMappingGrid.select.row.getSelected().length == 1));
			this.deleteButton.set("disabled", !(this._propertiesMappingGrid.select.row.getSelected().length > 0));
		},

		_isDeletable: function(modelObjects) {
			return true;
		},

		_resetFilter: function() {
			this._filter.set("value", "");
		},

		isGridFiltered: function() {
			return this._filter.get("value") != "";
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._propertiesMappingGrid.select.row.clear();
				this._propertiesMappingGrid.model.filter(this._filterCheckerFunction);
				this._propertiesMappingGrid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item.officeProperties;
			return rowValue.toLowerCase().indexOf(this._prevFilter.toLowerCase()) > -1;
		},

		// Determines if the save button should be enabled 
		validateData: function(focus) {
			if ((this.repositoryData.type == "p8") && !this.delimiter.isValid()) {
				if (focus) {
					this.delimiter.focus();
				}
				return false;
			}
			return this._isFolderClassValid;
		},

		_onFieldChange: function() {
			if (/*this._init &&*/!this.isResetingFields()) {
				this.onMarkDirty();
			}
		},

		_initClassSelector: function() {
			var repository = this.repositoryData.repository;
			if (repository._isBox()) {
				this._emailClassSelector.setRootClassId("file");
			} else {
				this._emailClassSelector.setRootClassId("Document");
			}
			this._emailClassSelector.filterType = "createDocument";
			this._emailClassSelector.label = this.repositoryData.repositoryConfig.getDefaultEmailClassForAdd();
			this._emailClassSelector.setVisibleOnlyForDocument(true);
			this._emailClassSelector.setVisibleOnlyIfStoresContent(true);
			this._emailClassSelector.setRepository(repository);
			this.own(aspect.after(this._emailClassSelector, "onLoaded", lang.hitch(this, function(contentClass) {
				var defClass = this.repositoryData.repositoryConfig.getDefaultEmailClassForAdd();
				// for p8 check if the class is available to select, it may be a unloaded child class
				var isavail = this.repositoryData.type == "p8" ? this._emailClassSelector.isItemAvailable(defClass) : true;
				if (defClass && isavail) {
					this._emailClassSelector.setSelected(defClass);
				}
			}), true));
			this.own(aspect.after(this._emailClassSelector, "onContentClassSelected", lang.hitch(this, function(contentClass) {
				this._emailClass = contentClass.id;
				this._onFieldChange();
			}), true));

			if (repository._isBox()) {
				this._emailClassSelector.setRootClassId("folder");
			} else {
				this._emailClassSelector.setRootClassId("Folder");
			}
			this._folderClassSelector.setRootClassId("Folder");
			this._folderClassSelector.filterType = "createFolder";
			this._folderClassSelector.label = this.repositoryData.repositoryConfig.getDefaultFolderClassForAdd();
			this._folderClassSelector.setVisibleOnlyForFolder(true);
			this._folderClassSelector.setRepository(repository);

			this.own(aspect.after(this._folderClassSelector, "onLoaded", lang.hitch(this, function(contentClass) {
				var defClass = this.repositoryData.repositoryConfig.getDefaultFolderClassForAdd();
				// for p8 check if the class is available to select, it may be a unloaded child class
				var isavail = this.repositoryData.type == "p8" ? this._folderClassSelector.isItemAvailable(defClass) : true;
				if (defClass && isavail) {
					this._folderClassSelector.setSelected(defClass);
				}
			}), true));

			this.own(aspect.after(this._folderClassSelector, "onContentClassSelected", lang.hitch(this, function(contentClass) {
				// get the class attributes and check the name prop, required fields
				contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attrDefs, childCompDefs) {
					this._validateFolderClass(contentClass, attrDefs, childCompDefs);
				}));
			}), true));
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
		
		_selectOfficeTemplateUserGroupClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmOfficeTemplateCreatorDataPane.get("userGroupData"), this._cmOfficeTemplateCreatorDataPane);
			//} else if (this.repositoryData.type == "p8") {
			//	this._openUserGroupPermissionsDialog(this._p8EntryTemplateCreatorDataPane.get("userGroupData"), this._p8EntryTemplateCreatorDataPane, null, true);
			}
		},
		
		_selectDraftUserGroupClick: function() {
			if (this.repositoryData.type == "cm") {
				this._openUserGroupPermissionsDialog(this._cmDraftCreatorDataPane.get("userGroupData"), this._cmDraftCreatorDataPane);
			//} else if (this.repositoryData.type == "p8") {
			//	this._openUserGroupPermissionsDialog(this._p8EntryTemplateCreatorDataPane.get("userGroupData"), this._p8EntryTemplateCreatorDataPane, null, true);
			}
		},
		
		// check if the class has ICM$NAME, no required props, etc.
		_validateFolderClass: function(contentClass, attrDefs, childCompDefs) {
			var isValid = true;
			var nameAttr = null;
			var requiredProp = false;
			var errTitle = null;
			var errMessage = null;
			for ( var i in attrDefs) {
				var attr = attrDefs[i];
				if (attr.id == contentClass.nameAttribute) {
					nameAttr = attr;
				} else if (attr.required == true && !attr.defaultValue) {
					requiredProp = true;
				}
			}

			if ((nameAttr == null) || (nameAttr != null && nameAttr.dataType != "xs:string")) {
				isValid = false;
				errTitle = string.substitute(this.messages.admin_ms_default_folder_warn_title, [
					contentClass.name
				]);
				errMessage = this.messages.admin_ms_default_folder_warn_name_prop_invalid;
			} else if (requiredProp) {
				isValid = false;
				errTitle = string.substitute(this.messages.admin_ms_default_folder_warn_title, [
					contentClass.name
				]);
				errMessage = this.messages.admin_ms_default_folder_warn_req_props;
			}

			if (isValid) {
				this._folderClass = contentClass.id;
				this._onFieldChange();
			} else {
				this._showErrorMessage(errTitle, errMessage);
			}
			this._isFolderClassValid = isValid;
		},

		_onClearEmailClass: function() {
			this._emailClassSelector.clearSelection();
			this._emailClass = null;
			this._onFieldChange();
		},

		_onClearFolderClass: function() {
			this._folderClassSelector.clearSelection();
			this._folderClass = null;
			this._isFolderClassValid = true;
			this._onFieldChange();
		},

		_showErrorMessage: function(title, message) {
			if (this._messageDialog)
				this._messageDialog.destroy();

			this._messageDialog = new MessageDialog({
				buttonLabel: title,
				iconClass: "warningIcon"
			});
			this._messageDialog.showMessage(message);
		},

		setData: function(data) {
			this.repositoryData = data;
			// hide class settings for P8
			if (this.repositoryData.type == "p8") {
				domClass.add(this.defaultClasses, "dijitHidden");
			}
			if (this.repositoryData.type == "cm") {
				domClass.add(this.delemiterClasses, "dijitHidden");
			}
		},
		
		_scrolldown: function() {
//			if (dojo.isFF) {
				win.scrollIntoView(this._classesAndRolesSettingsTitlePane.domNode);
//			} else {
//				scroll({
//			        node: this._classesAndRolesSettingsTitlePane.domNode,
//			        win: this.domNode
//			    }).play(); //Animation 
//			}
		},
		
		destroy: function() {
			if (this._messageDialog) {
				this._messageDialog.destroy();
				this._messageDialog = null;
			}
			if (this._dialog) {
				this._dialog.destroy();
				this._dialog = null;
			}
			if (this._tdialog) {
				this._tdialog.destroy();
				this._tdialog = null;
			}
			if (this._cdialog) {
				this._cdialog.destroy();
				this._cdialog = null;
			}
			if (this._editPropertiesDialog) {
				this._editPropertiesDialog.destroy();
				this._editPropertiesDialog = null;
			}
			if (this._confirmDelete) {
				this._confirmDelete.destroy();
				this._confirmDelete = null;
			}
			if (this._propertiesMappingGrid) {
				this._propertiesMappingGrid.destroy();
				this._propertiesMappingGrid = null;
			}
			if (this._wordGrid) {
				this._wordGrid.destroy();
				this._wordGrid = null;
			}
			if (this._excelGrid) {
				this._excelGrid.destroy();
				this._excelGrid = null;
			}
			if (this._powerPointGrid) {
				this._powerPointGrid.destroy();
				this._powerPointGrid = null;
			}
			if( this._editCategoriesDialog ){
				this._editCategoriesDialog.destroy();
				this._editCategoriesDialog = null;
			}
			if( this._newEditTemplateDialog ){
				this._newEditTemplateDialog.destroy();
				this._newEditTemplateDialog = null;
			}
			if( this._editEditTemplateDialog ){
				this._editEditTemplateDialog.destroy();
				this._editEditTemplateDialog = null;
			}
			if( this._editEditTemplatePropertiesDialog ){
				this._editEditTemplatePropertiesDialog.destroy();
				this._editEditTemplatePropertiesDialog = null;
			}
			if( this.confirmDeleteDialog ){
				this.confirmDeleteDialog.destroy();
				this.confirmDeleteDialog = null;
			}
		}
	});	
	
	RepositoryOfficeConf.WORD_TEMPLATE = "Word";
	RepositoryOfficeConf.EXCEL_TEMPLATE = "Excel";
	RepositoryOfficeConf.POWERPOINT_TEMPLATE = "PowerPoint";		
	
	return RepositoryOfficeConf;
});

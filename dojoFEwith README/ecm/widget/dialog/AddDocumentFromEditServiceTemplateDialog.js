/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/store/Memory",
	"dojo/string",
	"dijit/focus",
	"dijit/form/FilteringSelect",	
	"idx/html",
	"ecm/model/Request",
	"ecm/model/ContentItem",
	"ecm/widget/dialog/AddContentItemDialog",
	"ecm/widget/dialog/_AddDocumentSourceItemMixin",
	"ecm/Messages"
	],
	function (declare, lang, has, domClass, aspect, domConstruct, MemoryStore, string, focus, FilteringSelect, idxHtml, Request, ContentItem, AddContentItemDialog, _AddDocumentSourceItemMixin, Messages) {
	
	/**
	 * @name ecm.widget.dialog.AddDocumentFromEditServiceTemplateDialog
	 * @class Provides a dialog box that
	 * @augments ecm.widget.dialog.AddContentItemDialog
	 */
	return declare("ecm.widget.dialog.AddDocumentFromEditServiceTemplateDialog", [ AddContentItemDialog, _AddDocumentSourceItemMixin ], {
	/** @lends ecm.widget.dialog.AddDocumentFromEditServiceTemplateDialog.prototype */
		
		categoryId: null,
		_messages: Messages,
	
		// ItemObject to be used as the source content, if this is set then templates are not used
		sourceDocument: null,
		defaultWordTemplateName :"default template.docx",
		defaultPowerPointTemplateName: "default template.pptx",
		defaultExcelTemplateName: "default template.xlsx",
					
		_editServiceTemplateSelectorToolTip: null,
		
		postCreate: function() {
			this.inherited(arguments);
			this.setResizable(true);
			this._defineConnections();
			
			if (this.sourceDocument != null ) {
				// allow changing the save in
				this.templateItem = this.sourceDocument;
				this.sourceItems = [ this.sourceDocument ];
				this.allowBrowseParentFolder = true,
				this.addSourceDocumentOptionNode();
			}
		},
		
		_hideFileSelectionControls: function() {			
			domClass.add(this.addContentItemGeneralPane._contentSourceTypeDiv, "dijitHidden");
			domClass.add(this.addContentItemGeneralPane._fileInputArea, "dijitHidden");		
			domClass.add(this.addContentItemGeneralPane._majorVersionStartWorkflowDiv, "dijitHidden");
			domClass.add(this.addContentItemGeneralPane._externalURLDiv, "dijitHidden");			
		},
		
		/**
		 * @private Defines the connections.
		 */
		_defineConnections: function() {
			var onLoadFolderEntryTemplatesHandle = aspect.after(this, "_loadFolderEntryTemplates", lang.hitch(this, function() {
				if (this._entryTemplateIsFromFolder) {
					this._setEntryTemplateForFiles();
				}	
			}));
			var onEntryTemplatesRetrieved = aspect.after(this, "_onEntryTemplatesRetrieved", lang.hitch(this, function() {
				if (this.setWarningMessage) {
				   this.setMessage( this.messages.icn_edit_new_document_category_no_templates_message, "warning");
				}
			}));
			var onCompleteRenderingHandle = aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
				this._setDocumentTitle();	
				setTimeout(lang.hitch(this, function() {
					var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
					if (titlePropertyName) {
						var field;
						if (this.addContentItemPropertiesPane._commonProperties) {
							field = this.addContentItemPropertiesPane._commonProperties.getFieldWithName(titlePropertyName);
						}
						if (field && field.readOnly) {
							focus.focus(this._actionButton.domNode);
						} else {
							this.addContentItemPropertiesPane.setFieldFocus(titlePropertyName);
						}
					}
				}), 300);				
			}));
			var onEntryTemplateSelectHandle = aspect.after(this, "_onEntryTemplateSelectorChange", lang.hitch(this, function() {
				this._setDocumentTitle();
			}));
			
			this.own(onEntryTemplatesRetrieved);
			this.own(onLoadFolderEntryTemplatesHandle);
			this.own(onCompleteRenderingHandle);
			this.own(onEntryTemplateSelectHandle);
			
			this.own(aspect.around(this.addContentItemPropertiesPane, "setDefaultDocumentTitle", lang.hitch(this, function(originalFunction) {				
				return function(title) {		
					// If the document title is blank, use the template name as the default value for the title.
					var titlePropertyName = this.getTitlePropertyName();
					if (titlePropertyName) {																		
						if (title) {
							var attrDef = (this._commonProperties && this._commonProperties.attributeDefinitionsById) ? this._commonProperties.attributeDefinitionsById[titlePropertyName] : null;
							if (attrDef && (!attrDef.dataType || (attrDef.dataType.indexOf && attrDef.dataType.indexOf("xs:string") > -1))) {
								this.setPropertyValue(titlePropertyName, title);
							}
						}						
					}										
				}
			})));	
			
			var self = this;
			this.own(aspect.before(this.addContentItemPropertiesPane._commonPropertiesContainer, "_setContentAttr", lang.hitch(this, function(commonProperties) {
				this.own(aspect.before(commonProperties, "renderAttributes", lang.hitch(this, function(attributeDefinitions) {
					var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
					if (titlePropertyName) {
						for (var i = 0 ; i < attributeDefinitions.length ; i++) {
							var att = attributeDefinitions[i];
		                    if (att.id == titlePropertyName) {
								att.required = true; // Make document title required
								var defval;
								if (self.templateItem != null) {
									defval = self.templateItem.name;
								} else {
									defval = self._getTemplateName();
								}
								if (!att.dataType || (att.dataType.indexOf && att.dataType.indexOf("xs:string") > -1)) {
									att.defaultValue = defval;
									self._previousTemplateName = defval; 
								}
								break;
							}
						} 
					}
				}), true));
			}), true)); 
		},
		
		/**
		 *  Override super classes _clearErrorMessage method.  set the warning message.
		 * 
		 */		
		_clearErrorMessage: function(msg) {
			this.inherited(arguments);
			if (this.setWarningMessage) {
				this.setMessage( this.messages.icn_edit_new_document_category_no_templates_message, "warning");
			}
		},
		
		/**
		 *  Override super classes isValid method.  Tests if the current settings in the add dialog are valid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the current settings in the add dialog are valid,
		 *         otherwise <code>false</code>.
		 */
		isValid: function(onSaveStatus) {
			// Always check both the general pane and the properties pane before returning the valid state.
			var generalValid = this.addContentItemGeneralPane.folderSelector.isValid();
			if(!generalValid){
				 this.addContentItemGeneralPane.folderSelector.validate();
				 this.addContentItemGeneralPane.folderSelector.setFocus();
			}
			if (generalValid && (this.parentFolder && this.parentFolder.isInstanceOf && this.parentFolder.isInstanceOf(ecm.model.ContentItem))) {
				generalValid = this.parentFolder.hasPrivilege("privAddToFolder");
			}

			// Returns null if all entries are valid, otherwise returns the first invalid field widget.
			var propertiesValid = !this.addContentItemPropertiesPane.validate(this._checkin, onSaveStatus);

			// Both panes must be in a valid state.
			return generalValid && propertiesValid;
		},

		/**
		 * Displays the Add dialog for adding documents and folders.
		 */
		show: function(repository, parentFolder, typeDocument, virtualItems, callback, teamspace, showMultiRepoFolderSelector) {
			// filter for the class list	
			this._filterType = "CMEditServicefilter";
			
			this.inherited(arguments);
			
			// Hides the file selection controls
			this._hideFileSelectionControls();
			
			// Adds edit service templates control if adding using a template
			if (!this.sourceDocument) {
				this._addEditServiceTemplates();
			}			
			
			if (this.sourceDocument != null) {
				this.setTitle(this._messages.copy_to_OOS_dialog_doc_title);
			} else {
				var editCategory = repository.getEditCategoryObject( this.categoryId );
				if( editCategory && editCategory.displayName ){
					this.setTitle(string.substitute(this.messages.icn_edit_new_document_dialog_title, [editCategory.displayName]));
					this.setIntroText(string.substitute(this.messages.icn_edit_new_document_dialog_intro, [editCategory.displayName]));
				}
			}			
		},
		
		_addEditServiceTemplates: function() {
			this.repository.retrieveEditServiceTemplates(lang.hitch(this, function(items) {		
				if (items.length > 0) {
					this._items = dojo.filter(items, function(item){
						return item.hasPrivilege("privViewDoc");	// Cannot view content then cannot use it to add
					});
				}
				if ((this._items && this._items.length > 0) || ((this.categoryId == "Word" || this.categoryId == "PowerPoint" || this.categoryId == "Excel" ))) {					
					var templateRow = domConstruct.create("tr", {
						"class": "documentOnlyArea"
					});
					this.addContentItemGeneralPane._contentTable.insertBefore(templateRow, this.addContentItemGeneralPane._majorVersionStartWorkflowDiv);					
					this.addContentItemGeneralPane._editTemplateRow = templateRow;
					var widgetId = this.id + "_" + new Date().getTime();					
					if (this._items && this._items.length > 1) {						
						var templateStore = this._createEditServiceTemplateStore(this._items);						
						this._templateCtrl = new FilteringSelect({
							id: widgetId,
							"class": "ecmAddContentItemGeneralPane officeTemplateSelectorControl",
							store: templateStore,
							searchAttr: "label",							
							title: this.messages.icn_edit_select_edit_service_template,
							invalidMessage: this.messages.property_pulldown_invalid
						});
						var filteredItems = templateStore.query({isDefault: true});			
						if (filteredItems.length > 0) {
							this._templateCtrl.set("value", filteredItems[0].id);
						} else {
							this._templateCtrl.set("value", this._items[0].id);
						}	
						
						this.connect(this._templateCtrl, "onChange", lang.hitch(this, function() {
							this._onEditTemplateInputChange();				
						}));
					
					} else {
						var templateName;
						if (this._items && this._items.length > 0) {
							templateName = this._items[0].name;
						} else {
							if (this.categoryId == "Word") {
								templateName = this.defaultWordTemplateName;
							} else if (this.categoryId == "PowerPoint") {
								templateName = this.defaultPowerPointTemplateName;
							} else if (this.categoryId == "Excel"){
								templateName = this.defaultExcelTemplateName;
							}
						}
						this._templateCtrl = domConstruct.create("div", {
							"id": widgetId,
							innerHTML: "<span id='span_" + widgetId + "'>" + idxHtml.escapeHTML(templateName) + "</span>"
						});			
						this._setDocumentTitle();
						if (this._entryTemplateIsFromFolder) {
							this._setEntryTemplateForFiles();
						}
					
					}					
					var labelColumn = domConstruct.create("td", {
						"class": "propertyRowLabel"
					});
					var innerHTML = "<span class=\"required\">*</span><label for=\"" + widgetId + "\">" + "&nbsp;" + this.messages.icn_edit_edit_service_template + "</label>";
					
					labelColumn.innerHTML = innerHTML; 
					templateRow.appendChild(labelColumn);
					
					var valueColumn = domConstruct.create("td", {
						"class": "propertyRowValue"
					});
					templateRow.appendChild(valueColumn);		
					if (this._templateCtrl instanceof FilteringSelect)
						valueColumn.appendChild(this._templateCtrl.domNode);
					else 
						valueColumn.appendChild(this._templateCtrl);									
					this._addEditServiceTemplateToolTip();
				} else {
					this._setDocumentTitle();
					this.setWarningMessage = true;
					this.setMessage( this.messages.icn_edit_new_document_category_no_templates_message, "warning");
					this._actionButton.set("disabled", true);	
					if (this._entryTemplateIsFromFolder) {
						this._setEntryTemplateForFiles();
					}					
				}					
			}), this.categoryId, null, [1082, 1158, 1016]);						
		},
		
		/**
		 * @private
		 */
		_onEditTemplateInputChange: function() {
			if (this.addContentItemPropertiesPane._commonProperties) {
				this._setDocumentTitle();	
			}			
			if (this._entryTemplateIsFromFolder) {
				this._setEntryTemplateForFiles();
			}
		},
		

		
		_setDocumentTitle: function() {
			var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
			if (titlePropertyName && this.addContentItemPropertiesPane._commonProperties) {
				var currValue = this.addContentItemPropertiesPane.getPropertyValue(titlePropertyName);
				if (!currValue || currValue.length == 0 || this._previousTemplateName && this._previousTemplateName == currValue) {
					this._previousTemplateName = this._getTemplateName();	
					this.addContentItemPropertiesPane.setDefaultDocumentTitle(this._previousTemplateName);
				}
			}
		},
		
		_addEditServiceTemplateToolTip: function() {
			if (!this._editServiceTemplateSelectorToolTip) {
				if (this._templateCtrl instanceof FilteringSelect) {
					// Create the edit service template tooltip
					this._editServiceTemplateSelectorToolTip = new dijit.Tooltip({
						position: [
							"above",
							"below",
							"after",
							"before"
						],
						textDir: has("text-direction")
					});
					// Display the tooltip when the control gets focus.
					this.connect(this._templateCtrl, "_onFocus", lang.hitch(this, function() {
						var description = this._getTemplateDescription();
						if (description) {
							this._editServiceTemplateSelectorToolTip.open(this._templateCtrl.domNode);
						}
					}));
					this.connect(this._templateCtrl, "_onBlur", lang.hitch(this, function() {
						this._editServiceTemplateSelectorToolTip.close();
					}));
					this.connect(this._templateCtrl, "onMouseOver", lang.hitch(this, function() {
						var description = this._getTemplateDescription();
						if (description) {
							this._editServiceTemplateSelectorToolTip.set("label", description);
							this._editServiceTemplateSelectorToolTip.open(this._templateCtrl.domNode);
						}
					}));
					this.connect(this._templateCtrl, "onMouseOut", lang.hitch(this, function() {
						this._editServiceTemplateSelectorToolTip.close();
					}));
				} else if (this._items && this._items.length > 0) {
					var description = this._items[0].repository.type == "cm" ? this._items[0].attributes.clbDescription : this._items[0].attributes.Description;				
					if (description && description.length > 0) {
						this._editServiceTemplateSelectorToolTip = new dijit.Tooltip({
							position: [
								"above",
								"below",
								"after",
								"before"
							],
							textDir: has("text-direction"),
							connectId: [
								this._templateCtrl
							],
							label: this._items[0].repository.type == "cm" ? this._items[0].attributes.clbDescription : this._items[0].attributes.Description
						});	
					}						
				}
			} 
		},		
		
		_getTemplateName: function() {
			var label;
			if (this._templateCtrl) {
				if (this._templateCtrl instanceof FilteringSelect) {
					var templateId = this._templateCtrl.get("value");
					var selectedItem = this._templateCtrl.store.query({id: templateId});
					if (selectedItem && selectedItem.length > 0) {
						label = selectedItem[0].label;
					}		
				} else {
					if (this._items && this._items.length > 0) {
						label = this._items[0].repository.type == "cm" ? this._items[0].attributes.ICM$NAME : this._items[0].attributes.DocumentTitle;
					} else {
						if (this.categoryId == "Word") {
							label = this.defaultWordTemplateName;
						} else if (this.categoryId == "PowerPoint") {
							label = this.defaultPowerPointTemplateName;
						} else if (this.categoryId == "Excel"){
							label = this.defaultExcelTemplateName;
						}					
					}
				}
			}
			return label;
		},
		
		_getTemplateDescription: function() {
			var description;
			var templateId = this._templateCtrl.get("value");
			var selectedItem = this._templateCtrl.store.query({id: templateId});
			if (selectedItem && selectedItem.length > 0) {
				description = selectedItem[0].description;
			}		
			return description;
		},
		
		_createEditServiceTemplateStore: function(contentItems) {
			var items = [];			
			for (var i = 0; i < contentItems.length; i++) {
				var contentItem = contentItems[i];				
				items.push({
					"id": contentItem.id,
					"label": contentItem.name,
					"vsId": contentItem.vsId,
					"description": contentItem.repository.type == "cm" ? contentItem.attributes.clbDescription : contentItem.attributes.Description,
					"isDefault": contentItem.repository.type == "cm" ? contentItem.attributes.clbDefault == "true" : contentItem.attributes.IcnTemplateDefault,
					"mimeType": contentItem.repository.type == "cm" ? contentItem.attributes.mimeType : contentItem.attributes.MimeType
				});				
			}			
			return new MemoryStore({
				data: items
			});		
		},
		
		/**
		 * Override super classes _setEntryTemplateForFiles method.
		 */
		_setEntryTemplateForFiles: function() {
			var hasFileTypes = false;
			for ( var i = 0; i < this._entryTemplates.length; i++) {
				if (this._entryTemplates[i].fileTypes && this._entryTemplates[i].fileTypes.length > 0) {
					hasFileTypes = true;
					break;
				}
			}
			if (!hasFileTypes || ( !this.addContentItemGeneralPane._editTemplateRow && !this.sourceDocument ) ) {
				this._setEntryTemplateSelectorStore(this._entryTemplates);				
			} else {
				var fileTypes = [];
				if( this.addContentItemGeneralPane._editTemplateRow ){
					fileTypes = this._getFileTypesForEditTemplate();
				}else if( this.sourceDocument ){
					var fileType = this._getFileTypeForMimeType( [ this.sourceDocument.mimetype ] );
					if (fileType) {
						fileTypes.push(fileType);
					} else {
						fileTypes.push("++NotFound++");
					}
				}
				var findFileTypesEntryTemplates = [];
				var noRestrictionEntryTemplates = [];
				for ( var i = 0; i < this._entryTemplates.length; i++) {
					var fileTypeString = this._getFileTypeStringForEntryTemplate(this._entryTemplates[i].fileTypes);	
					if (fileTypeString.length == 0) {
						noRestrictionEntryTemplates.push(this._entryTemplates[i]);
					} else {
						var findAll = this._checkFileTypesForETFolderAssociation(this._entryTemplates[i], fileTypes);
						if (findAll) {
							findFileTypesEntryTemplates.push(this._entryTemplates[i]);
						}
					}
				}
				
				var etList = (findFileTypesEntryTemplates.length > 0) ? findFileTypesEntryTemplates : noRestrictionEntryTemplates;
				this._setEntryTemplateSelectorStore(etList);
						
				if (this._entryTemplate) {
					//if it is in the current ets list?
					var findET = false;
					for ( var i = 0; i < etList.length; i++) {
						if (etList[i].id == this._entryTemplate.id) {
							findET = true;
							break;
						}
					}
					if (!findET) {
						//this._actionButton.set("disabled", true);
						this._entryTemplateAssociationFileTypeError = true;
						this._unloadEntryTemplate();
						this._resetEntryTemplateSelectValue( etList );
					} else {
						this._entryTemplateAssociationFileTypeError = false;
						this._onChangeProperties();
					}
				} else {
					this._resetEntryTemplateSelectValue( etList );
				}
			}
		},
		
		/**
		 * @private
		 */
		_getFileTypesForEditTemplate: function() {
			
            var mimeType;
			if (this._templateCtrl) {
				if (this._templateCtrl instanceof FilteringSelect) {
					templateId = this._templateCtrl.get("value");
					var selectedItem = this._templateCtrl.store.query({id: templateId});
					if (selectedItem && selectedItem.length > 0) {
						mimeType = selectedItem[0].mimeType;
					}
				} else {
					if (this._items && this._items.length > 0) {
						mimeType = this._items[0].repository.type == "cm" ? this._items[0].attributes.mimeType : this._items[0].attributes.MimeType;
					} else {
						if (this.categoryId == "Word") {
							mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
						} else if (this.categoryId == "PowerPoint") {
							mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
						} else if (this.categoryId == "Excel") {
							mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
						}
					}
				}
			} 
		
			var fileTypes = [];
			var mimeTypes = [];
            mimeTypes.push(mimeType);

			var fileType = this._getFileTypeForMimeType(mimeTypes);
			if (fileType) {
				fileTypes.push(fileType);
			} else {
				fileTypes.push("++NotFound++");
			}
	
			return fileTypes;
		},
		
		/**
		 * The Add button event handler.
		 */
		onAdd: function() {
			if (!this.isValid(true)) {
				return;
			}
			var selectedFolder = this.addContentItemGeneralPane.folderSelector.getSelected().item;
			var folderId;
			if (this.repository.type == "cm") {
				if (this.addContentItemGeneralPane._unfiled && this.addContentItemGeneralPane._unfiled.checked) {
					folderId = "";
				} else if (selectedFolder && selectedFolder.id) {
					folderId =  selectedFolder.id;
				}				
			} else if (this.repository.type == "p8") {
				folderId = selectedFolder && selectedFolder.id && !selectedFolder.rootFolder ? selectedFolder.id : "";
			}
						
			var className = this.addContentItemPropertiesPane.getDocumentType();
			var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
			var titleField = titlePropertyName ? this.addContentItemPropertiesPane.getPropertyValue(titlePropertyName) : "";
			
			var properties = this.addContentItemPropertiesPane.getPropertiesJSON();
			var permissions = this.addContentItemSecurityPane.getPermissions();
			
			var setSecurityParent = (this._teamspace && this.repository._isP8());
			if (!setSecurityParent && this._entryTemplate && this._entryTemplate.inheritSecurityFromParentFolder) {
				setSecurityParent = true;
			}

			var templateId = "";
			var vsId = "";
			var mimeType ="";
			var templateName = "";
			if (!this.sourceDocument) {
				if (this._templateCtrl) {
					if (this._templateCtrl instanceof FilteringSelect) {
						templateId = this._templateCtrl.get("value");
						var selectedItem = this._templateCtrl.store.query({id: templateId});
						if (selectedItem && selectedItem.length > 0) {
							vsId = selectedItem[0].vsId;
							mimeType = selectedItem[0].mimeType;
							templateName = selectedItem[0].label;
						}
					} else {
						if (this._items && this._items.length > 0) {
							templateId = this._items[0].id;		
							vsId = this._items[0].vsId;
							mimeType = this._items[0].repository.type == "cm" ? this._items[0].attributes.mimeType : this._items[0].attributes.MimeType;
							templateName = this._items[0].name;
						} else {
							if (this.categoryId == "Word") {
								templateName = this.defaultWordTemplateName;
							} else if (this.categoryId == "PowerPoint") {
								templateName = this.defaultPowerPointTemplateName;
							} else if (this.categoryId == "Excel"){
								templateName = this.defaultExcelTemplateName;
							}
						}					
					}
				} 
			} else {
				templateId = this.sourceDocument.id;
				templateName = this.sourceDocument.filename;
				vsId = this.sourceDocument.vsId;
				mimeType = this.sourceDocument.mimetype;	
			}
			
			var bodyParms = {
				"acl": permissions,
				"criterias": properties
			};
			var params = {
				"repositoryId": this.repository.id,
				"categoryId": this.categoryId,
				"documentTitle": titleField,
				"folderId": folderId,
				"className": className,
				"securityPolicyId": this._getSecurityPolicyId(),
				"set_security_parent": setSecurityParent ? "true" : "false",
				"editServiceTemplateId": templateId,
				"editServiceTemplateName": templateName,
				"vsId": vsId,
				"mimetype" : mimeType
			};
			var request = Request.postService("editServiceCreateDocument", this.repository.type, params, "text/json", JSON.stringify(bodyParms), 
					lang.hitch(this, function(response) { // success
					if (response) {
						var item = ContentItem.createFromJSON(response, this.repository, this.resultSet, selectedFolder);
						item.id = item.docid;
						item.originalId = item.id
						selectedFolder.refresh();
						
						if (this._callback) {
							this._callback(item);
						}
						
						if (this._entryTemplate && this._entryTemplate.workflow) {
							this._startWorkflow(item); 
						}

						this.onCancel();
					}
				}));	
		},
		
		destroy: function() {
			if (this._templateCtrl) {
				if (this._templateCtrl instanceof FilteringSelect) {
					this._templateCtrl.destroy();
				} 
				this._templateCtrl = null;
			}
			if (this._editServiceTemplateSelectorToolTip) {
				this._editServiceTemplateSelectorToolTip.destroy();
				this._editServiceTemplateSelectorToolTip = null;
			}
			if (this._items) {
				this._items = null;
			}
		}
	});
});

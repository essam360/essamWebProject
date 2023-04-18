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
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/store/Memory",
	"dijit/focus",
	"dijit/form/FilteringSelect",
	"idx/html",
	"ecm/model/Request",
	"ecm/model/ContentItem",
	"ecm/widget/dialog/AddContentItemDialog",
	"ecm/widget/dialog/_AddDocumentSourceItemMixin",
	"ecm/Messages"
	],
	function (declare, lang, has, domClass, domStyle, aspect, domConstruct, MemoryStore, focus, FilteringSelect, idxHtml, Request, ContentItem, AddContentItemDialog, _AddDocumentSourceItemMixin, Messages) {
	
	/**
	 * @name docDojo.AddDocumentDialog
	 * @class Provides a dialog box that is used to author new document for IBM Docs.
	 * @augments ecm.widget.dialog.AddContentItemDialog
	 */
	return declare("docDojo.AddDocumentFromOfficeTemplateDialog", [ 
        AddContentItemDialog, 
        _AddDocumentSourceItemMixin
    ], {
		/** @lends AddDocumentFromOfficeTemplateDialog */
		
		documentType: 1,
		_messages: Messages,
	
		// ItemObject to be used as the source content, if this is set then predefined templates are not used
		templateItem: null,
		
		_officeTemplateSelectorToolTip: null,
		
		postCreate: function() {
			this.inherited(arguments);
			this.setResizable(true);
			this._defineConnections();
			
			if (this.templateItem != null) {
				// allow changing the save in
				this.allowBrowseParentFolder = true,
				this.sourceItems = [ this.templateItem ];
				this.addSourceDocumentOptionNode();
				// disable the classification checkbox if the source item item type does not support drafts 
				if (this.templateItem.repository.type == "cm" && this.templateItem.canNotContainDraft) {
					domStyle.set(this._useSourceDocumentOption.domNode, "display", "none")
				}
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
			var handle = aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
				handle.remove();
				// Hides the file selection controls again if they were unhidden by ET
				this._hideFileSelectionControls();
				// Adds office templates control if adding using a template
				if (!this.templateItem) {
					this._addOfficeTemplates();
				}
				setTimeout(lang.hitch(this, function() {
					var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
					if (titlePropertyName) {
						var field = this.addContentItemPropertiesPane._commonProperties.getFieldWithName(titlePropertyName);
						if (field && field.readOnly) {
							focus.focus(this._actionButton.domNode);
						} else {
							this.addContentItemPropertiesPane.setFieldFocus(titlePropertyName);
						}
					}
				}), 300);				
			}));
			this.own(handle);
			
//			this.own(aspect.around(this.addContentItemPropertiesPane, "setDefaultDocumentTitle", lang.hitch(this, function(originalFunction) {				
//				return function(title) {		
//					// If the document title is blank, use the template name as the default value for the title.
//					var titlePropertyName = this.getTitlePropertyName();
//					if (titlePropertyName) {																		
//						if (title) {
//							var attrDef = this._commonProperties ? this._commonProperties.attributeDefinitionsById[titlePropertyName] : null;
//							if (attrDef && (!attrDef.dataType || (attrDef.dataType.indexOf && attrDef.dataType.indexOf("xs:string") > -1))) {
//								this.setPropertyValue(titlePropertyName, title);
//							}
//						}						
//					}										
//				}
//			})));	
			
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
		 *  Override super classes isValid method.  Tests if the current settings in the add dialog are valid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the current settings in the add dialog are valid,
		 *         otherwise <code>false</code>.
		 */
		isValid: function(onSaveStatus) {
			// Always check both the general pane and the properties pane before returning the valid state.
			var generalValid = this.addContentItemGeneralPane.folderSelector.isValid();
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
		show: function(repository, parentFolder, typeDocument, virtualItems, callback, teamspace, useTemplate, entryTemplate, showMultiRepoFolderSelector) {
	
	        // filter for the class list	
			this._filterType = "CMOOSfilter";

			this.inherited(arguments);
			
			// Hides the file selection controls
			this._hideFileSelectionControls();
			
			if (this.templateItem != null) {
				this.setTitle(this._messages.copy_to_OOS_dialog_doc_title);
			} else if (this.documentType == 1) {
				this.setTitle(this._messages.new_document_dialog_doc_title);
			} else if (this.documentType == 2) {
				this.setTitle(this._messages.new_document_dialog_presentation_title);
			} else {
				this.setTitle(this._messages.new_document_dialog_spreadsheet_title);
			}	
		
		},
		
		_addOfficeTemplates: function() {
			this.repository.retrieveOfficeOnlineTemplates(lang.hitch(this, function(items) {		
				this._templatesRetrieved = true;
				if (items.length > 0) {
					this._items = dojo.filter(items, function(item){
						return item.hasPrivilege("privViewDoc");	// Cannot view content then cannot use it to add
					});
				} 		
				var templateRow = domConstruct.create("tr", {
					"class": "documentOnlyArea"
				});
				this.addContentItemGeneralPane._contentTable.insertBefore(templateRow, this.addContentItemGeneralPane._majorVersionStartWorkflowDiv);					
				var widgetId = this.id + "_" + new Date().getTime();					
				if (this._items && this._items.length == 1) {										
					this._templateCtrl = domConstruct.create("div", {
					"id": widgetId,
						innerHTML: "<span id='span_" + widgetId + "'>" + idxHtml.escapeHTML(this._items[0].name) + "</span>"
					});			
					this._setDocumentTitle();
				} else if (this._items && this._items.length > 1) {							
					var templateStore = this._createOfficeTemplateStore(this._items);						
					this._templateCtrl = new FilteringSelect({
						id: widgetId,
						"class": "ecmAddContentItemGeneralPane officeTemplateSelectorControl",
						store: templateStore,
						searchAttr: "label",							
						title: this.messages.select_office_template,
						invalidMessage: this.messages.property_pulldown_invalid
					});
					var filteredItems = templateStore.query({isDefault: true});			
					if (filteredItems.length > 0) {
						this._templateCtrl.set("value", filteredItems[0].id);
					} else {
						this._templateCtrl.set("value", this._items[0].id);
					}	
						
					this.connect(this._templateCtrl, "onChange", lang.hitch(this, function() {
						this._setDocumentTitle();				
					}));
				} else {
					this._templateCtrl = domConstruct.create("div", {
						"id": widgetId,
						innerHTML: "<span id='span_" + widgetId + "'>" + idxHtml.escapeHTML(this._getTemplateName()) + "</span>"
					});		
				}				
				var labelColumn = domConstruct.create("td", {
					"class": "propertyRowLabel"
				});
				var innerHTML = "<span class=\"required\">*</span><label for=\"" + widgetId + "\">" + "&nbsp;" + this.messages.office_template + "</label>";
					
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
				this._addOfficeTemplateToolTip();

				if (!(this._templateCtrl instanceof FilteringSelect))
					this._setDocumentTitle();
			}), this.documentType, null, [1082, 1158, 1016]);						
		},
		
		_setDocumentTitle: function() {
			var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
			if (titlePropertyName && this.addContentItemPropertiesPane._commonProperties) {
				var currValue = this.addContentItemPropertiesPane.getPropertyValue(titlePropertyName);
				// not set or wasn't changed
				if ((!currValue || currValue.length == 0) || (this._previousTemplateName && this._previousTemplateName == currValue)) {
					this._previousTemplateName = this._getTemplateName();	
					var attrDef = this.addContentItemPropertiesPane._commonProperties ? this.addContentItemPropertiesPane._commonProperties.attributeDefinitionsById[titlePropertyName] : null;
					if (attrDef && (!attrDef.dataType || (attrDef.dataType.indexOf && attrDef.dataType.indexOf("xs:string") > -1))) {
						this.addContentItemPropertiesPane.setPropertyValue(titlePropertyName, this._previousTemplateName);
					}
				}
			}
		},
		
		_addOfficeTemplateToolTip: function() {
			if (!this._officeTemplateSelectorToolTip) {
				if (this._templateCtrl instanceof FilteringSelect) {
					// Create the office template tooltip
					this._officeTemplateSelectorToolTip = new dijit.Tooltip({
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
							this._officeTemplateSelectorToolTip.open(this._templateCtrl.domNode);
						}
					}));
					this.connect(this._templateCtrl, "_onBlur", lang.hitch(this, function() {
						this._officeTemplateSelectorToolTip.close();
					}));
					this.connect(this._templateCtrl, "onMouseOver", lang.hitch(this, function() {
						var description = this._getTemplateDescription();
						if (description) {
							this._officeTemplateSelectorToolTip.set("label", description);
							this._officeTemplateSelectorToolTip.open(this._templateCtrl.domNode);
						}
					}));
					this.connect(this._templateCtrl, "onMouseOut", lang.hitch(this, function() {
						this._officeTemplateSelectorToolTip.close();
					}));
				} else if (this._items && this._items[0].attributes.Description && this._items[0].attributes.Description.length > 0) {		
					this._officeTemplateSelectorToolTip = new dijit.Tooltip({
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
						label: this._items[0].attributes.Description
					});					
				}
			} 
		},		
		
		_getTemplateName: function() {
			var label;
			if (this._templatesRetrieved) {
				if (this._items && this._templateCtrl) {
					if (this._templateCtrl instanceof FilteringSelect) {
						var templateId = this._templateCtrl.get("value");
						var selectedItem = this._templateCtrl.store.query({id: templateId});
						if (selectedItem && selectedItem.length > 0) {
							label = selectedItem[0].label;
						}		
					} else {
						label = this._items[0].attributes.DocumentTitle;
					}
				} else {
					// no templates defined, use default
					if (this.documentType == 1) {
						label = "default template.docx";
					} else if (this.documentType == 2) {
						label = "default template.pptx";
					} else {
						label = "default template.xlsx";
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
		
		_createOfficeTemplateStore: function(contentItems) {
			var items = [];			
			for (var i = 0; i < contentItems.length; i++) {
				var contentItem = contentItems[i];				
				items.push({
					"id": contentItem.id,
					"label": contentItem.name,
					"vsId": contentItem.vsId,
					"description": contentItem.attributes.Description,
					"isDefault": contentItem.attributes.IcnTemplateDefault
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
			if (!hasFileTypes) {
				this._setEntryTemplateSelectorStore(this._entryTemplates);
				
			} else {
				var findFileTypesEntryTemplates = [];
				var noRestrictionEntryTemplates = [];
				for ( var i = 0; i < this._entryTemplates.length; i++) {
					if (!this._entryTemplates[i].fileTypes || this._entryTemplates[i].fileTypes.length == 0) {
						noRestrictionEntryTemplates.push(this._entryTemplates[i]);
					} else if (this._isMatch(this._entryTemplates[i])) {
						findFileTypesEntryTemplates.push(this._entryTemplates[i]);
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
						this._actionButton.set("disabled", true);
						this._entryTemplateAssociationFileTypeError = true;
						this._unloadEntryTemplate();
					} else {
						this._entryTemplateAssociationFileTypeError = false;
						this._onChangeProperties();
					}
				} else {
					var value = null;
					for ( var i = 0; i < etList.length; i++) {
						if (etList[i].isDefault) {
							value = i;
							break;
						}
					}
					this.addContentItemGeneralPane._entryTemplateSelector.set('value', value);
				}
			}
		},
		
		/**
	     * @private Returns true if the entry templates file types matches the documentType.
         */
		_isMatch: function(entryTemplate) {
			for (var i = 0 ; i < entryTemplate.fileTypes.length ; i++) {
				var etFileType = entryTemplate.fileTypes[i];
				if (this.documentType == 1 && etFileType == "Word") {
					return true;
				} else if (this.documentType == 2 && etFileType == "PowerPoint") {
					return true;
				} else if (this.documentType == 3 && etFileType == "Excel") {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * The Add button event handler.
		 */
		onAdd: function() {
			if (!this.isValid(true)) {
				return;
			}
			var selectedFolder = this.addContentItemGeneralPane.folderSelector.getSelected().item;
			var documentType = this.addContentItemPropertiesPane.getDocumentType();
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
			if (!this.templateItem) {
				if (this._templateCtrl) {
					if (this._templateCtrl instanceof FilteringSelect) {
						templateId = this._templateCtrl.get("value");
						var selectedItem = this._templateCtrl.store.query({id: templateId});
						if (selectedItem && selectedItem.length > 0) {
							vsId = selectedItem[0].vsId;
						}
					} else {			
						if (this._items)
						{
							templateId = this._items[0].id;		
							vsId = this._items[0].vsId;
						}
					}
				} 
			} else {
				templateId = this.templateItem.id;
			}
			
			var bodyParms = {
				"acl": permissions,
				"criterias": properties
			};
			var params = {
				"repositoryId": this.repository.id,
				"templateType": this.documentType,
				"documentTitle": titleField,
				"folderId": selectedFolder && selectedFolder.id && !selectedFolder.rootFolder ? selectedFolder.id : "",
				"className": documentType,
				"securityPolicyId": this._getSecurityPolicyId(),
				"set_security_parent": setSecurityParent ? "true" : "false",
				"officeTemplateId": templateId,
				"vsId": vsId
//				"json_post": JSON.stringify(bodyParms) 
			};
			var request = Request.postService("officeOnlineCreateReservation", this.repository.type, params, "text/json", JSON.stringify(bodyParms), 
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
			if (this._officeTemplateSelectorToolTip) {
				this._officeTemplateSelectorToolTip.destroy();
				this._officeTemplateSelectorToolTip = null;
			}
			if (this._items) {
				this._items = null;
			}
		}
	});
});

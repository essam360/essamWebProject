/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/string",
	"dijit/focus",
	"dojo/io-query",
	"ecm/model/Request",
	"ecm/model/ContentItem",
	"ecm/model/AttributeDefinition",
	"ecm/widget/dialog/AddContentItemDialog"
	],
	function (declare, lang, domClass, array, domAttr, domStyle, aspect, string, focus, ioQuery, Request, ContentItem, AttributeDefinition, AddContentItemDialog) {
	
	return declare("ecm.widget.admin.AddEditServiceTemplateDialog", [ AddContentItemDialog ], {
		
		mimeTypes: null,
		templateType: "Word", 
		isDefault: null,
	    repositoryType: null,
	
		postCreate: function() {
			this.inherited(arguments);
			this.setResizable(true);
			this._defineConnections();
			this.addContentItemGeneralPane.allowUnfiledAddOverride = true;
		},	
		
		/**
		 * Displays the Add dialog for adding documents and folders.
		 */
		show: function(repository, parentFolder, typeDocument, virtualItems, callback, teamspace, showMultiRepoFolderSelector) {
			this.repositoryType = repository.type;
			if (repository.type=="p8") 
				this.setDefaultContentClass("IcnEditTemplate");
			else 
				this.setDefaultContentClass("ClbEditServiceTemplate");
			this.inherited(arguments);
			if (repository.type=="cm" && this.addContentItemPropertiesPane && this.addContentItemPropertiesPane._contentClassSelector && this.addContentItemPropertiesPane._contentClassSelector.setSelected)
			    this.addContentItemPropertiesPane._contentClassSelector.setSelected("ClbEditServiceTemplate");				
			domStyle.set(this.addContentItemGeneralPane._contentSourceTypeDiv, "display", "none");
			domStyle.set(this.addContentItemGeneralPane._majorVersionStartWorkflowDiv, "display", "none");	
			domStyle.set(this.addContentItemPropertiesPane._documentClassDiv, "display", "none");
			if (repository.type=="p8")
			   domStyle.set(this.addContentItemSecurityTitlePane.domNode, "display", "");
		},
		
		/**
		 *  reset the template title if it is without extension
		 */		
		_addDocumentItemMultiple: function() {
			this._changeDocumentName();			
			this.inherited(arguments); 
		},
		
		/**
		 *  private method
		 */
		_changeDocumentName: function() {
			var documentItem = this._documentItems[0];
			var fileName = documentItem.filename;
			var criterias = documentItem.criterias;
			var documentNameProperty;
			if (this.repositoryType == "cm") {
				documentNameProperty = array.filter(criterias, function(item) {
					return item.name == "ICM$NAME";
				});
			} else {
				documentNameProperty = array.filter(criterias, function(item) {
					return item.name == "DocumentTitle";
				});
			}			
			if (fileName != null && documentNameProperty != null && documentNameProperty.length != 0) {
				if (documentNameProperty[0].value.length == 0) {
					documentNameProperty[0].value = fileName;
					documentNameProperty[0].displayValue = fileName;
				} else {
					var index = fileName.lastIndexOf(".");
					if (index != -1) {
						var ext = fileName.substring(index);
						if (ext.length > 1) {  //filename has no extension but only "."
							var documentname = documentNameProperty[0].value;
							var documentNameIndex = documentname.lastIndexOf(".");
							if (ext != documentname.substring(documentNameIndex)) {
								documentNameProperty[0].value += ext;
								documentNameProperty[0].displayValue += ext;
							}
						}
				    }
				}			
			}
		},
		
		/**
		 * @private Override the general pane's on file input change method.
		 */
		_generalPaneOnFileInputChange: function() {
			var files = this.addContentItemGeneralPane.getFileInputFiles();
			if (files.length > 1) {
				this.setMessage(this.messages.icn_edit_add_template_only_one_file_error);
				this.addContentItemGeneralPane._resetFileInput();
			} else if (files.length && !this._hasType(files[0].type)) {
				this.setMessage(this._getMimeTypeNotMatchMessage(files[0].type));
				this.addContentItemGeneralPane._resetFileInput();
			} else {
				this.clearMessage();
			}
		},
				
		/**
		 * @private Returns boolean if the type matches.
		 */
		_hasType: function(mimetype) {
			if (this.mimeTypes) {
				return this.mimeTypes[mimetype];
			}
			return true;
		}, 
		
		/**
		 * @private Returns the message about mime types that match this document type.
		 */
		_getMimeTypeNotMatchMessage: function(mimetype) {
			var str = "";
			for (var key in this.mimeTypes) {
				if (str.length > 0) {
					str += ", "
				}
				str += key;
			}			
			var msg = this.messages.icn_edit_add_template_file_type_error;
			return string.substitute(string.substitute(msg, [this.templateType, mimetype, str ]));
		},
		
		/**
		 * @private Defines the connections.
		 */
		_defineConnections: function() {
			this.addContentItemGeneralPane.onFileInputChange = lang.hitch(this, this._generalPaneOnFileInputChange);
			this.own(aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
				this.addContentItemPropertiesPane._contentClassNameTextBox.set("value", "Edit Service Template");
				if (this.isDefault) {
					if (this.repositoryType=="p8")
						this.addContentItemPropertiesPane.setPropertyValue("IcnTemplateDefault", this.isDefault);
					else
						this.addContentItemPropertiesPane.setPropertyValue("clbDefault", this.isDefault ? "true" : "false");					
				}
				if (this.templateType) {					
					if (this.repositoryType=="p8")
						this.addContentItemPropertiesPane.setPropertyValue("IcnTemplateCategoryId", this.templateType);
					else
						this.addContentItemPropertiesPane.setPropertyValue("clbEditServiceCategoryId", this.templateType);	
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
			})));
			this.own(aspect.around(this, "_loadFolderEntryTemplatesCheck", function(originalFunction) {
				// Do not use entry template for adding edit service templates
				return function(folder) {		
					return;
				}
			}));
		}
	});
});

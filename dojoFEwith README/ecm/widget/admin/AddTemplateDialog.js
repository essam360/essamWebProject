/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
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
	function (declare, lang, domClass, domAttr, domStyle, aspect, string, focus, ioQuery, Request, ContentItem, AttributeDefinition, AddContentItemDialog) {
	
	/**
	 * @name docDojo.AddTemplateDialog
	 * @class Provides a dialog box that is used to author a new template for IBM Docs.
	 * @augments ecm.widget.dialog.AddContentItemDialog
	 */
	return declare("ecm.widget.admin.AddTemplateDialog", [ AddContentItemDialog ], {
	/** @lends docDojo.AddTemplateDialog.prototype */
		
		mimeTypes: null,
		templateType: "Word", 
		isDefault: null,
	
		postCreate: function() {
			this.inherited(arguments);
			this.setResizable(true);
			//this.setDefaultContentClass("IcnOfficeTemplate");
			this._defineConnections();
			this.addContentItemGeneralPane.allowUnfiledAddOverride = true;
		},	
		
		/**
		 * Displays the Add dialog for adding documents and folders.
		 */
		show: function(repository, parentFolder, typeDocument, virtualItems, callback, teamspace, showMultiRepoFolderSelector) {
			if (repository.type=="p8") 
				this.setDefaultContentClass("IcnOfficeTemplate");
			else
				this.setDefaultContentClass("ClbOfficeTemplate");
			this.inherited(arguments);
			if (repository.type=="cm" && this.addContentItemPropertiesPane && this.addContentItemPropertiesPane._contentClassSelector && this.addContentItemPropertiesPane._contentClassSelector.setSelected)				
				this.addContentItemPropertiesPane._contentClassSelector.setSelected("ClbOfficeTemplate");			
			domStyle.set(this.addContentItemGeneralPane._contentSourceTypeDiv, "display", "none");
			domStyle.set(this.addContentItemGeneralPane._majorVersionStartWorkflowDiv, "display", "none");	
			domStyle.set(this.addContentItemPropertiesPane._documentClassDiv, "display", "none");
			if (repository.type=="p8")
			   domStyle.set(this.addContentItemSecurityTitlePane.domNode, "display", "");
		},
		
		/**
		 * @private Override the general pane's on file input change method.
		 */
		_generalPaneOnFileInputChange: function() {
			var files = this.addContentItemGeneralPane.getFileInputFiles();
			if (files.length > 1) {
				this.setMessage(this.messages.office_online_only_one_template_error);
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
			var msg = this.messages.file_type_doc_error;
			if (this.templateType == ecm.widget.admin.RepositoryOfficeConf.WORD_TEMPLATE) {
				msg = this.messages.file_type_doc_error;
			} else if (this.templateType == ecm.widget.admin.RepositoryOfficeConf.POWERPOINT_TEMPLATE) {
				msg = this.messages.file_type_presentation_error;
			} else {
				msg = this.messages.file_type_spreadsheet_error;
			}
			return string.substitute(string.substitute(msg, [ mimetype, str ]));
		},
		
		/**
		 * @private Defines the connections.
		 */
		_defineConnections: function() {
			this.addContentItemGeneralPane.onFileInputChange = lang.hitch(this, this._generalPaneOnFileInputChange);
			this.own(aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
				this.addContentItemPropertiesPane._contentClassNameTextBox.set("value", "Office Template");
				if (this.isDefault) {
					this.addContentItemPropertiesPane.setPropertyValue("IcnTemplateDefault", this.isDefault);
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
				// Do not use entry template for adding office templates
				return function(folder) {		
					return;
				}
			}));
		}
	});
});

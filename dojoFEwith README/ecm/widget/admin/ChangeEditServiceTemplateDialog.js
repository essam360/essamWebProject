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
	"ecm/widget/dialog/CheckInDialog"
	],
	function (declare, lang, domClass, domAttr, domStyle, aspect, string, focus, ioQuery, Request, ContentItem, CheckInDialog) {

	return declare("ecm.widget.admin.ChangeEditServiceTemplateDialog", [ CheckInDialog ], {

		mimeTypes: null,
		templateType: null,
		_item: null,
		
		postCreate: function() {
			this.inherited(arguments);			
			this._actionButton.set("label", this.messages.change_button);
			this._defineConnections();
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
			this.own(aspect.after(this, "onCancel", lang.hitch(this, function() {
				// If locked the item in this dialog and the user cancels without checking in, then unlock the item.
				if (this._lockedTheItem) {
					this.repository.unlockItems([ this._item ] , lang.hitch(this, function() {
					}));
				}
			}), true));

			this.addContentItemGeneralPane.onFileInputChange = lang.hitch(this, this._generalPaneOnFileInputChange);
			this.addContentItemGeneralPane._folderSelectorDropDown.isValid = function() {
				return true;
			};
			
			this.own(aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
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
		},
		
		/**
		 * Show the dialog.
		 */
		show: function(repository, parentFolder, typeDocument, virtualItems, callback) {
			var d = this.inherited("show", []);
			
			this.repository = repository;

			this._typeDocument = true;
			this._callback = callback || null;
			this._originalItem = this._item;

			if (repository._isP8()) {
				this.addContentItemGeneralPane.setAsMajorVersion(repository.checkinAsMajorVersion);
			}

			// Hide security until we determine it should be shown.
			domStyle.set(this.addContentItemSecurityTitlePane.domNode, "display", "none");

			this.addContentItemGeneralPane.createRendering(this);
			this.addContentItemSecurityPane.setAddContentItemDialog(this);
			this.addContentItemPropertiesPane.setAddContentItemDialog(this);

			// Remove required styling from the folder label.
			this.addContentItemGeneralPane._targetLocationRequired.parentNode.removeChild(this.addContentItemGeneralPane._targetLocationRequired);

			// Hide folder section.
			domStyle.set(this.addContentItemGeneralPane._documentOnlyArea, "display", "none");

			// Initialize the folder selector control.
			this.addContentItemGeneralPane.setParentFolder(this.parentFolder, this.repository, this._teamspace);

			// hide class
			domStyle.set(this.addContentItemPropertiesPane._documentClassDiv, "display", "none");

			this._applyDesktopShowSecurity();

			// Collapse the security pane.
			if (this.addContentItemSecurityTitlePane.open) {
				this.addContentItemSecurityTitlePane.toggle();
			}

			// Delay loading security until security is expanded.
			this.own(aspect.after(this.addContentItemSecurityTitlePane, "toggle", lang.hitch(this, function() {
				if (this.addContentItemSecurityTitlePane.open) {
					this.addContentItemSecurityPane.setContentClass(this.addContentItemPropertiesPane._contentClass, this._typeDocument);
					this._onMarkingPropertyChange();
				}
			}), true));

			this.own(aspect.after(this.addContentItemGeneralPane, "onContentSourceTypeChange", lang.hitch(this, "_onChangeProperties"), true));
			this.own(aspect.after(this.addContentItemGeneralPane, "onContentSourceTypeChange", lang.hitch(this, "_setUpForFileTracker"), true));
			this.own(aspect.after(this.addContentItemGeneralPane, "onFileInputChange", lang.hitch(this, "_onFileInputChange"), true));
			this.own(aspect.after(this.addContentItemGeneralPane, "onExternalURLChange", lang.hitch(this, "_onFileInputChange"), true));
			this.own(aspect.after(this.addContentItemGeneralPane, "onMajorCheckboxChange", lang.hitch(this, "_onMajorCheckboxChange"), true));

			this.own(aspect.after(this.addContentItemPropertiesPane, "onChange", lang.hitch(this, "_onChangeProperties"), true));
			this.own(aspect.after(this.addContentItemPropertiesPane, "onMarkingPropertyChange", lang.hitch(this, "_onMarkingPropertyChange"), true));
			this.own(aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
				this.own(aspect.after(ecm.model.desktop, "onChangeUploadProgress", lang.hitch(this, "_changeUploadProgress"), true));
				this.own(aspect.after(ecm.model.desktop, "onCompleteUploadProgress", lang.hitch(this, "_completeUploadProgress"), true));
				
				// If the document title is blank and a file has been selected, use the file name as the default value for the title.
				var titlePropertyName;
				if (this.repository._isP8()) {
					// P8 default.
					titlePropertyName = "DocumentTitle";
				} else { // others
					// For now using the first property found in the properties pane.
					titlePropertyName = this.addContentItemPropertiesPane.getFirstTextPropertyName();
				}
				if (titlePropertyName) {
					var currValue = this.addContentItemPropertiesPane.getPropertyValue(titlePropertyName);
					if (!currValue || (currValue == "")) {
						var fileName;
						if (this.addContentItemGeneralPane.hasExternalFiles()) {
							var fileNameArray = this.addContentItemGeneralPane._externalFileNames.get("value");
							fileName = fileNameArray && fileNameArray.length > 0 ? fileNameArray[0] : "";
						} else {
							fileName = this.addContentItemGeneralPane.getInputFileName();
						}

						if (fileName && (fileName != "")) {
							this.addContentItemPropertiesPane.setPropertyValue(titlePropertyName, fileName);
						}
					}
				}

				// Update the security if it is expanded, otherwise it will be loaded after the pane is expanded.
				if (this.addContentItemSecurityTitlePane.open) {
					if (this.repository._isP8()) {
						this.addContentItemSecurityPane.setContentClass(this.addContentItemPropertiesPane._contentClass, this._typeDocument);
						if (this._entryTemplate) {
							this._onMarkingPropertyChange();
						}
					}
				}
				var contentSourceType = this.addContentItemGeneralPane.getContentSourceType();
				this._setUpForFileTracker(contentSourceType);
				this._onChangeProperties();
				this.addContentItemPropertiesPane.resizeCommonProperties();
				this.resize();
			}), true));
			this.own(aspect.after(this.addContentItemPropertiesPane, "onRetrySave", lang.hitch(this, "onCheckin"), true));

			this._lockedTheItem = null;
			this._originalItem = this._item;
			if (!this._item.locked) {
				this.repository.lockItems([ this._item ] , lang.hitch(this, function() {
					this._lockedTheItem = true;
					this._retrieveAttributes();
				}));
				
			} else if (this.repository.userId.toUpperCase() == this._item.lockedUser.toUpperCase()) {
				this._item.retrieveVersion("reservation", lang.hitch(this, function(item) { // Retrieve the reservation or equivalent version (depends on the repository type).
					this._item = item;
					this._retrieveAttributes();
				}));
				
			} else {
				this.repository.unlockItems([ this._item ] , lang.hitch(this, function() {
					this.repository.lockItems([ this._item ] , lang.hitch(this, function() {
						this._retrieveAttributes();
					}));
				}));
			}

			domStyle.set(this.addContentItemGeneralPane._contentSourceTypeDiv, "display", "none");
			domStyle.set(this.addContentItemGeneralPane._majorVersionStartWorkflowDiv, "display", "none");		
			domStyle.set(this.addContentItemSecurityTitlePane.domNode, "display", "");
			
			return d;
		},
		
		/**
		 * @private retrieve the attributes.
		 */
		_retrieveAttributes: function() {
			this._item.retrieveAttributes(lang.hitch(this, function(item) {
				this._item = item;
				this._item.parent = this._originalItem.parent;
				this.addContentItemPropertiesPane.createRendering(this._item.parent);
				this.resize();
			}), false);
		},
		
		/**
		 * @private Callback after the repository check in of the new template.
		 */
		_checkInDocumentItemCallback: function(updatedItem, fieldErrors) {
			if (fieldErrors) {
				for ( var i = 0; i < fieldErrors.length; i++) {
					var fieldError = fieldErrors[i];
					this.addContentItemPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
				}
				this.addContentItemPropertiesPane.setFieldFocus(fieldErrors[0].symbolicName);
			} else {
				this._lockedTheItem = null;
				this.onCancel(); // The add succeeded, close the dialog.
				// The checked in content item will refresh itself.
				if (this._callback) {
					this._callback();
				}
			}
		},
		
		/**
		 *  private method
		 */
		_changeDocumentName: function() {
			var inputFiles = this.addContentItemGeneralPane.getFileInputFiles();			
			var fileName = null;				
			var documentName = null;
			
			if (inputFiles) { 
				var file = inputFiles[0];
				fileName = file.fileName ? file.fileName : file.name;
			}
			
			if (this.repository.type == "cm") {
				documentName = this.addContentItemPropertiesPane.getPropertyValue("ICM$NAME");
			} else {
				documentName = this.addContentItemPropertiesPane.getPropertyValue("DocumentTitle");
			}			

			if (documentName.length == 0) {
				if (this.repository.type == "cm") {
					this.addContentItemPropertiesPane.setPropertyValue("ICM$NAME",fileName);
				} else {
					this.addContentItemPropertiesPane.setPropertyValue("DocumentTitle",fileName);
				}
			} else {
				var index = fileName.lastIndexOf(".");
				if (index != -1) {
					var ext = fileName.substring(index);
					if (ext.length > 1) {  //filename has no extension but only "."
						var documentNameIndex = documentName.lastIndexOf(".");
						if (ext != documentName.substring(documentNameIndex)) {
							documentName += ext;
							if (this.repository.type == "cm") {
								this.addContentItemPropertiesPane.setPropertyValue("ICM$NAME",documentName);
							} else {
								this.addContentItemPropertiesPane.setPropertyValue("DocumentTitle",documentName);
							}
						}
					}
			    }
			}			
		
		},

		/**
		 * The "Change" button event handler.
		 */
		onCheckin: function() {
			if (!this.isValid(true)) {
				return;
			}
			this._changeDocumentName();		
			var childComponentValues = []; // this.addContentItemPropertiesPane.getChildComponentValues();
			var documentType = this.addContentItemPropertiesPane.getDocumentType();
			var properties = this.addContentItemPropertiesPane.getPropertiesJSON();
			var permissions = this.addContentItemSecurityPane.getPermissions();
			var contentSourceType = this.addContentItemGeneralPane.getContentSourceType();
			var inputFiles = this.addContentItemGeneralPane.getFileInputFiles();
			if (inputFiles) { // If there are input files... (HTML5 browser).
				var file = inputFiles[0];
				var documentItem = {
					"templateName": documentType,
					"criterias": properties,
					"contentSourceType": contentSourceType,
					"mimetype": file.type,
					"filename": file.fileName ? file.fileName : file.name,
					filePath: (file.filePath != null) ? file.filePath : null,
					"content": file,
					"childComponentValues": [],
					"permissions": permissions,
					"securityPolicyId": this._getSecurityPolicyId(),
					"newVersion": false,
					"checkInAsMinorVersion": false,
					"autoClassify": false
				};
				this._originalItem.checkIn(documentItem.templateName, documentItem.criterias, documentItem.contentSourceType, documentItem.mimetype, documentItem.filename, documentItem.content, documentItem.childComponentValues, documentItem.permissions, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, lang.hitch(this, this._checkInDocumentItemCallback));
				
			} else { // This browser does not support HTML5 - Retrieve references to the form fields and set the data.
				var propertiesInput = this.addContentItemGeneralPane._getPropertiesInput();
				propertiesInput.value = JSON.stringify(properties);
				var childComponentInput = this.addContentItemGeneralPane._getChildComponentInput();
				childComponentInput.value = JSON.stringify(childComponentValues);
				var permissionsInput = this.addContentItemGeneralPane._getPermissionsInput();
				permissionsInput.value = JSON.stringify(permissions);
				var fileName = this.addContentItemGeneralPane.getInputFileName();
				var documentItem = {
						"templateName": documentType,
						"contentSourceType": contentSourceType,
						"filename": fileName,
						"inputForm": this.addContentItemGeneralPane.getFileInputForm(),
						"securityPolicyId": this._getSecurityPolicyId(),
						"newVersion": false,
						"checkInAsMinorVersion": false,
						"autoClassify": false
				};
				this._originalItem.checkInUsingForm(documentItem.templateName, documentItem.contentSourceType, documentItem.filename, documentItem.inputForm, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, lang.hitch(this, this._checkInDocumentItemCallback));
			}
		}
	});
});

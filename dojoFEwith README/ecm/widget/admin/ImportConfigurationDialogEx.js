/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/request/iframe",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/on",
	"dojo/json",
	"dojo/Deferred",
	"ecm/MessagesMixin",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/admin/ImportGridContent",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/model/Message",
	"dojo/text!./templates/ImportConfigurationDialogEx.html",
	"dijit/layout/BorderContainer"
],

function(declare, lang, has, arrayUtil, iframe, dom, domClass, string, style, geometry, on, JSON, Deferred, MessagesMixin, BaseDialog, GridContent, TabContainer, ContentPane, ErrorDialog, Message, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.ImportConfigurationDialog
	 * @class Provides a dialog box that let user to select a previous exported configuration file to import.
	 * @augments dijit.Dialog
	 */
	var importDialog = declare("ecm.widget.admin.ImportConfigurationDialogEx", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.ImportConfigurationDialogEx.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			domClass.add(this.domNode, "ecmImportConfigurationDialog");
			style.set(this.domNode, "maxHeight", "none");
			this.setIntroText(this.messages.admin_importconfiguration_instruction);
			this._importButton = this.addButton(this.messages.admin_importconfiguration_button_label, "_import", true, false);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (ecm.widget.admin.ImportConfigurationDialogEx._tabs) {
				ecm.widget.admin.ImportConfigurationDialogEx._tabs = null;
			}
			if (this.fileInput && this.fileInput.files)
				this._fileInput.files[0] = null;
			this.inherited(arguments);
		},

		/**
		 * Display the Import configuration dialog
		 */
		show: function(response, fileName, label) {
			var methodName = "show";
			this.logEntry(methodName);
			this.inherited(arguments);
			
			label = label != null ? label : this.messages.admin_importconfiguration_dialog_label;

			this.setTitle(label);
			style.set(this._tabsContainer.domNode, "display", "none");
			this.resize();
			this.logExit(methodName);
		},

		/**
		 * Populate all tabs with incoming desktops parameter.
		 * 
		 * @param response
		 *            an array of conflict keys by category.
		 * @param fileName
		 *            Import file name.
		 */
		_showImpl: function(response, fileName) {
			var methodName = "show";
			this.logEntry(methodName);

			if (response && response.categories && response.categories.length > 0) {
				style.set(this._tabsContainer.domNode, "display", "block");
				if (response.hasConflict) {
					style.set(this._keyConflictInstruction, "display", "block");
					this._hasConflict = response.hasConflict;
				}
				this._fileName = fileName;

				this._itemCategory = [];
				if (this._tabsContainer.getChildren()) { // clean up
					arrayUtil.forEach(this._tabsContainer.getChildren(), lang.hitch(this, function(widget) {
						this._tabsContainer.removeChild(widget);
						widget.destroy();
						widget = null;
					}));
				}
				arrayUtil.forEach(response.categories, lang.hitch(this, function(category) {
					if (response[category]) {
						if (response[category].imported || response[category].skipped) {
							var _tabContent = new GridContent({
								configType: category,
								imported: response[category].imported,
								skipped: response[category].skipped,
								label: response[category].label
							});
							_tabContent.title = response[category].label;
							_tabContent.initialize();
							this._itemCategory.push(response[category]);
							this._tabsContainer.addChild(_tabContent);
						}
					}
				}));
				ecm.widget.admin.ImportConfigurationDialogEx._tabs = this._tabsContainer;
				this.resize();
			}
			this.logExit(methodName);
		},

		formDataSupported: function() {
			return !!window.FormData;
		},

		/**
		 * If import button not disabled then import selected objects by calling postFormToServiceAPI method
		 * 
		 * @private
		 */
		_import: function() {
			if (this.formDataSupported())
				this._importUsingFormData();
			else
				this._importUsingIframe();
		},

		_importUsingIframe: function() {
			var methodName = "_importUsingIframe";
			this.logEntry(methodName);
			var params = {
				action: "import",
				id: "navigator",
				application: "navigator",
				desktop: ecm.model.desktop.id,
				configuration: "ApplicationConfig",
				application: "navigator",
				fileName: this._fileName,
				categories: JSON.stringify(this._itemCategory),
				responseAsHtml: true
			};
			ecm.model.Request.ieFileUploadServiceAPI("admin/importExport", null, {
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, this._importCompleted)
			}, this._fileInputForm);
		},

		_importUsingFormData: function() {
			var methodName = "_importUsingFormData";
			this.logEntry(methodName);
			var params = {
				action: "import",
				id: "navigator",
				application: "navigator",
				desktop: ecm.model.desktop.id,
				configuration: "ApplicationConfig",
				application: "navigator",
				fileName: this._fileName,
				userid: ecm.model.desktop.userId,
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_DESKTOPS,
				categories: JSON.stringify(this._itemCategory)
			};
			var formData = new FormData();
			ecm.model.Request.postFormToServiceAPI("admin/importExport", null, {
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, this._importCompleted)
			}, formData);

			this.logExit(methodName);
		},

		_importCompleted: function(response) {
			var methodName = "_importCompleted";
			this.logEntry(methodName);

			this.hide();
			this.logExit(methodName);
		},

		/**
		 * This event method is called when the file input control value changes. And, will validate imported
		 * configuration file to check if there are any key conflict in it.
		 */
		onFileInputChange: function() {
			var fileContent = this._getFileContent(), fileExtension, fileName = this._getFileName();
			if (fileName) {
				var fileNames = fileName.split(".");
				fileExtension = fileNames[fileNames.length - 1];
				if (fileExtension && fileExtension == 'properties') {
					if (fileContent)
						return this._uploadImportFileUsingForm(fileContent, fileName, lang.hitch(this, this._uploadImportFileCompleted)); // FF and Chrome
					else
						return this._uploadImportFileUsingIFrame(fileContent, fileName, this._fileInputForm, lang.hitch(this, this._uploadImportFileCompleted)); // IE
				} else {
					this._importButton.set("disabled", true);
					this._showErrorMessage("wrong_import_file_type_error", [
						fileContent.name
					]);
				}
			}
		},

		/**
		 * This method display the key conflicted instruction and grid with conflicted key items. This method got called
		 * after we upload the import file for key conflict checking.
		 * 
		 * @param response
		 *            response from key checking if exists it has response.gategories and array for each category in
		 *            response
		 */
		_uploadImportFileCompleted: function(response) {
			this._importButton.set("disabled", false);
			var fileName = this._getFileName();
			if (response.categories && response.categories.length > 0)
				this._showImpl(response, fileName);
			else {
				var params = {
					action: "import",
					id: "navigator",
					application: "navigator",
					desktop: ecm.model.desktop.id,
					configuration: "ApplicationConfig",
					application: "navigator",
					userid: ecm.model.desktop.userId,
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_DESKTOPS,
					fileName: fileName
				};
				var formData = new FormData();
				ecm.model.Request.postFormToServiceAPI("admin/importExport", null, {
					requestParams: params,
					requestCompleteCallback: lang.hitch(this, this._importCompleted)
				}, formData);
			}
		},

		_getFileContent: function() {
			return (this._fileInput && this._fileInput.files && this._fileInput.files[0] ? this._fileInput.files[0] : null);
		},

		_getFileName: function() {
			var fileName;
			if (has("ie")) {
				if (this._fileInput && this._fileInput.value && (this._fileInput.value.length > 0)) {
					if (this._fileInput.value && this._fileInput.value.length > 0) {
						var i = this._fileInput.value.lastIndexOf("\\");
						fileName = this._fileInput.value.substr(i + 1);
					}
				}
			} else if (this._fileInput.files[0]) { //FF & Chrome
				fileName = this._fileInput.files[0].name;
			}
			return fileName;
		},

		_showErrorMessage: function(messagePrefix, messageInserts) {
			if (!this._errorDialog)
				this._errorDialog = new ErrorDialog();
			this._errorDialog.showMessage(Message.createErrorMessage(messagePrefix, messageInserts));
		},

		/**
		 * Upload import configuration to server to check duplicated key
		 * <ul>
		 * <li>file: The file to upload
		 * </ul>
		 * 
		 * @param content
		 *            file content
		 * @param fileName
		 *            file name
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param onError
		 *            A callback function called if there is an error returned when adding this document.
		 */
		_uploadImportFileUsingForm: function(content, fileName, callback, onError) {
			var params = {
				action: "checkImport",
				id: "navigator",
				application: "navigator",
				desktop: ecm.model.desktop.id,
				configuration: "ApplicationConfig",
				userid: ecm.model.desktop.userId,
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_DESKTOPS,
				application: "navigator"
			};
			var formData = new FormData();
			formData.append("fileName", fileName);
			formData.append("file", content);

			ecm.model.Request.postFormToServiceAPI("admin/importExport", null, {
				requestParams: params,
				requestCompleteCallback: callback
			}, formData);
		},

		/**
		 * Upload import configuration to server to check duplicated key
		 * <ul>
		 * <li>file: The file to upload
		 * </ul>
		 * 
		 * @param content
		 *            file content
		 * @param fileName
		 *            file name
		 * @param form
		 *            form name
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param onError
		 *            A callback function called if there is an error returned when adding this document.
		 */
		_uploadImportFileUsingIFrame: function(content, fileName, form, callback, onError) {
			var params = {
				action: "checkImport",
				id: "navigator",
				application: "navigator",
				desktop: ecm.model.desktop.id,
				configuration: "ApplicationConfig",
				application: "navigator",
				fileName: fileName,
				responseAsHtml: true
			};

			ecm.model.Request.ieFileUploadServiceAPI("admin/importExport", null, {
				requestParams: params,
				requestCompleteCallback: callback
			}, form);
		},

		resize: function(coords) {
			this.inherited(arguments);
			this._dialogContent.resize();

//			if (coords) {
//				domGeom.setMarginBox(this.domNode, coords);
//				//console.log("coordination passed in height is: " + coords.h + " width: " + coords.w);
//				return;
//			}
//
//			var outerBox = geometry.getContentBox(this.domNode);
//			this.inherited(arguments);
//			// console.log("*** outerBox height: " + outerBox.h + " width: " + outerBox.w);
//			if (outerBox.h > 0) {
//				var titleBox = geometry.getMarginBox(this.titleBar);
//				//console.log("titleBox height: " + titleBox.h + " width: " + titleBox.w);
//
//				var contentBox = geometry.getMarginBox(this._dialogContent.domNode);
//				//console.log("contentBox height: " + contentBox.h + " width: " + contentBox.w);
//
//				var contentAreaBox = geometry.getContentBox(this.contentArea);
//				//console.log("contentAreaBox height: " + contentAreaBox.h + " width: " + contentAreaBox.w);
//
//				var actionBox = geometry.getMarginBox(this.actionBar);
//				//console.log("actionBox height: " + actionBox.h + " width: " + actionBox.w);
//
//				var contentHeight = outerBox.h - titleBox.h - actionBox.h - 20;
//				if (contentHeight > 0) {
//					geometry.setContentSize(this._dialogContent.domNode, {
//						h: contentHeight,
//						w: contentAreaBox.w - 10
//					});
//					//console.log("content area height: " + contentHeight + " width: " + contentAreaBox.w);
//
//					var fileInputAreaBox = geometry.getMarginBox(this._fileInputArea);
//					//console.log("file input area height: " + fileInputAreaBox.h + " width: " + fileInputAreaBox.w);
//
//					var instructionBox = geometry.getMarginBox(this._keyConflictInstruction);
//					//console.log("instructionBox height: " + instructionBox.h + " width: " + instructionBox.w);
//
//					var tabHeight = contentHeight - fileInputAreaBox.h - instructionBox.h - 10;
//					if (tabHeight > 0) {
//						geometry.setContentSize(this._tabsContainer.domNode, {
//							h: tabHeight,
//							w: contentAreaBox.w - 25
//						});
//						//console.log("tabcontainer area height: " + (contentHeight - fileInputAreaBox.h - instructionBox.h - 10) + " width: " + (contentAreaBox.w - 25));
//					}
//				}
//
//				this._tabsContainer.resize();
//			}
		}
	});

	/**
	 * @private
	 */
	importDialog._toggleCheckbox = function(category) {
		var tabs = importDialog._tabs.getChildren();
		for (var i = 0; i < tabs.length; i++) {
			if (tabs[i].configType == category) {
				tabs[i]._toggleCheckbox.apply(tabs[i]);
			}
		}
	};

	return importDialog;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/aspect", //
	"dojo/dom-class", //
	"dojo/dom-style", //
	"ecm/model/Desktop", //
	"ecm/model/FileTracker", //
	"ecm/model/Request",//
	"ecm/Messages",//
	"./ErrorDialog", //
	"idx/html",//
	"./BatchStatusDialog",//
	"ecm/widget/dialog/AddContentItemDialog"
], //
function(declare, //
lang, //
array, //
aspect, //
domClass, //
domStyle, //
Desktop, //
FileTracker, //
Request,//
Messages,//
ErrorDialog, //
idxHtml, //
BatchStatusDialog, //
AddContentItemDialog) {

	/**
	 * @name ecm.widget.dialog.CheckInDialog
	 * @class Provides a dialog box that is used to check documents in to a repository.
	 * @augments ecm.widget.dialog.AddContentItemDialog
	 */
	return declare("ecm.widget.dialog.CheckInDialog", [
		AddContentItemDialog
	], {
		/** @lends ecm.widget.dialog.CheckInDialog.prototype */

		_checkin: true,
		_item: null,

		_messages: ecm.messages,

		// Used by AddContentPropertiesPane to filter content classes.
		// For check in, classes should be limited to the same choices that are available when editing the item.
		_filterType: "editItem",

		/**
		 * @private
		 */
		constructor: function() {
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmCheckInDialog");
			this.setMaximized(true);
			this.setResizable(true);
			this._actionButton = this.addButton(this.messages.checkin_checkin_label, this._getCheckInFunctionName(), false, true, "CHECKIN");
		},

		_getCheckInFunctionName: function () {
			return "onCheckin";
		},

		/**
		 * Displays the Check In dialog for checking in a content item. Usually the method <code>showCheckin</code>
		 * should be called instead so that if there is an associated entry template that is enabled for check in, it is
		 * retrieved and applied.
		 * 
		 * @param repository
		 *            The {@link ecm.model.Repository} for the checkin.
		 * @param item
		 *            The {@link ecm.model.ContentItem} that will be checked in.
		 * @param callback
		 *            A function that is called after the content item is checked in.
		 * @param teamspace
		 *            The {@link ecm.model.Teamspace} for the add if working within a teamspace.
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} object that should be applied during checkin. This object is
		 *            usually passed in from <code>showCheckin</code>.
		 * @param repositoryDocumentMode
		 * @since 2.0.3.6 A boolean value indicating if the dialog should render in repository document content type
		 *        mode.
		 */
		show: function(repository, item, callback, teamspace, entryTemplate, repositoryDocumentMode) {
			// If this object is a subclass of this module, then calling this.inherited() here would call this show method
			// and enter an infinite loop. Call the BaseDialog show method directly.
			var d = ecm.widget.dialog.BaseDialog.prototype.show.apply(this, []);

			this.repository = repository;

			// If the item parent is a search template, use the item repository as the parent.
			this.parentFolder = item.parent;
			if (this.parentFolder && this.parentFolder.isInstanceOf && this.parentFolder.isInstanceOf(ecm.model._SearchTemplateBase)) {
				this.parentFolder = item.repository;
			}

			this._typeDocument = item.isFolder() ? false : true;
			this._callback = callback || null;
			this._teamspace = teamspace || null;
			this._item = item || null;
			this._originalItem = this._item;
			this._entryTemplate = entryTemplate || null;
			this._useTemplate = this._entryTemplate ? true : false;
			this._repositoryDocumentMode = !!repositoryDocumentMode;

			// Hide the check in button if this is not a folder and not CM (check in is allowed for CM folders).
			if (!this._typeDocument && !this.repository._isCM()) {
				domClass.add(this._actionButton.domNode, "dijitHidden");
			} else {
				domClass.remove(this._actionButton.domNode, "dijitHidden");
			}

			// Hide security tab if the repository is not P8.
			// Setting security is not supported on other repository types at this time.
			this._alwaysHideSecurity = !repository._isP8();

			this.set("title", this._messages.checkin_dialog_title);
			// A dialog intro message is not needed for checkin.

			if (this._typeDocument) {
				if (repository._isCM()) {
					// Default is new version.
					this.addContentItemGeneralPane.setNewVersion(true);
				} else if (repository._isP8() || repository._isCmis()) {
					this.addContentItemGeneralPane.setAsMajorVersion(repository.checkinAsMajorVersion);
				}
			} else if (repository._isCM()) {
				// Default for CM folders is replace existing.
				this.addContentItemGeneralPane.setNewVersion(false);
			}

			// Modifying security at checkin is currently supported on P8 only.
			if (this._alwaysHideSecurity) {
				domStyle.set(this.addContentItemSecurityTitlePane.domNode, "display", "none");
				domClass.add(this.ecmAddContentItemBorderContainer.domNode, "ecmAddContentItemDialogNoSecurityPane");
			} else {
				// Hide security until we determine it should be shown.
				domStyle.set(this.addContentItemSecurityTitlePane.domNode, "display", "none");
			}

			this.addContentItemGeneralPane.createRendering(this);
			this.addContentItemSecurityPane.setAddContentItemDialog(this);
			this.addContentItemPropertiesPane.setAddContentItemDialog(this);

			// Remove required styling from the folder label.
			this.addContentItemGeneralPane._targetLocationRequired.parentNode.removeChild(this.addContentItemGeneralPane._targetLocationRequired);

			// Hide folder section.
			domStyle.set(this.addContentItemGeneralPane._documentOnlyArea, "display", "none");

			// Initialize the folder selector control.
			this.addContentItemGeneralPane.setParentFolder(this.parentFolder, this.repository, this._teamspace);

			if (this._useTemplate) {
				// Remove required styling from entry template label.
				this.addContentItemGeneralPane._entryTemplateSelectorLabelRequired.parentNode.removeChild(this.addContentItemGeneralPane._entryTemplateSelectorLabelRequired);

				// Display the class as read-only.
				domStyle.set(this.addContentItemPropertiesPane._contentClassSelectorDiv, "display", "none");
				domStyle.set(this.addContentItemPropertiesPane._contentClassNameDiv, "display", "");
				this._contentClassDiv = this.addContentItemPropertiesPane._contentClassNameDiv;

				// Show the entry template.
				domStyle.set(this.addContentItemGeneralPane._entryTemplateRow, "display", "");

				this.applyEntryTemplate(false);
			} else {
				// When an entry template is not in effect, collapse the properties pane to simplify the checkin interface.
				if (this.addContentItemPropertiesTitlePane.open) {
					this.addContentItemPropertiesTitlePane.toggle();
				}
				if (!this._item.hasPrivilege("privChangeClass")) {
					// Display the class as read-only.
					domStyle.set(this.addContentItemPropertiesPane._contentClassSelectorDiv, "display", "none");
					if (this.repository._isBox()) {
						domStyle.set(this.addContentItemPropertiesPane._contentClassNameDiv, "display", "none");
					} else {
						domStyle.set(this.addContentItemPropertiesPane._contentClassNameDiv, "display", "");
					}
					this._contentClassDiv = this.addContentItemPropertiesPane._contentClassNameDiv;
				}
				this._applyDesktopShowSecurity();
			}

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
			this.own(aspect.after(this.addContentItemGeneralPane, "onSavedContentCheckboxChange", lang.hitch(this, "_onSavedContentCheckboxChange"), true));

			this.own(aspect.after(this.addContentItemPropertiesPane, "onChange", lang.hitch(this, "_onChangeProperties"), true));
			this.own(aspect.after(this.addContentItemPropertiesPane, "onMarkingPropertyChange", lang.hitch(this, "_onMarkingPropertyChange"), true));
			this.own(aspect.after(this.addContentItemPropertiesPane, "onCompleteRendering", lang.hitch(this, function() {
				this.own(aspect.after(ecm.model.desktop, "onChangeUploadProgress", lang.hitch(this, "_changeUploadProgress"), true));
				this.own(aspect.after(ecm.model.desktop, "onCompleteUploadProgress", lang.hitch(this, "_completeUploadProgress"), true));

				if( this._hasSavedContent() ){
					domStyle.set(this.addContentItemGeneralPane._savedContentArea, "display", "");
					this.addContentItemGeneralPane._savedContentLabel.textContent=this.messages.add_document_saved_content_label + this._item.filename;
					if( !this.addContentItemGeneralPane._savedContentCheckBox.get("checked") ){
						this.addContentItemGeneralPane._savedContentCheckBox.set("checked", true);
						this._onSavedContentCheckboxChange();
					}
				}else if (this._typeDocument && this._repositoryDocumentMode) {
					var choices = [];
					choices.push("RepositoryDocument");
					this.addContentItemGeneralPane.addContentSourceTypeChoices(choices);
					domStyle.set(this.addContentItemGeneralPane._contentSourceTypeDiv, "display", "none");
					this._copyCommonFieldValues();
				}
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

			// Retrieve the reservation or equivalent version (depends on the repository type).
			this._item.retrieveVersion("reservation", lang.hitch(this, function(item) {

				// If we didn't get the version we were after, or it isn't checked out,
				// try to get the original item and refresh.
				if ((item == null || !item.locked) && !this._repositoryDocumentMode) {

					this.repository.retrieveItem(this._item.id, lang.hitch(this, function(freshItem) {

						// If we have the original item, then it is no longer checked out.
						// Display a message.
						var message = new ecm.model.Message({
							number: 0,
							level: 2,
							text: this._messages.error,
							explanation: this._messages.checkin_not_checked_out
						});
						if (message) {
							ecm.model.desktop.addMessage(message);
						}
						this._item.update(freshItem);
					}));

				} else {
					if (!item)
						item = this._item;
					item.retrieveAttributes(lang.hitch(this, function(item) {
						this._item = item;
						this._item.parent = this._originalItem.parent;
						this.addContentItemPropertiesPane.createRendering(this._item.parent);
						this.resize();
					}), false);
				}
			}));

			// For the check in Daeja content use case, disable the file selector.
			// The content for the new version is provided by Daeja.
			if (this.hasDaejaContent()) {
				this.addContentItemGeneralPane.onContentSourceTypeChange();
			}

			return d;
		},

		/**
		 * @private
		 */
		_onSavedContentCheckboxChange: function() {
			if( this.addContentItemGeneralPane._savedContentCheckBox.get("checked") ){
				var choices = [];
				choices.push("SavedContent");
				this._savedContentSourceTypeChoices = this.addContentItemGeneralPane.contentSourceTypeChoices;
				this._savedContentSourceTypeChoicesValue = this.addContentItemGeneralPane._contentSourceType.get("value");
				this.addContentItemGeneralPane.contentSourceTypeChoices=[{value:"SavedContent",label:ecm.messages.add_document_saved_content_choice}];
				this.addContentItemGeneralPane.addContentSourceTypeChoices(choices);
				domStyle.set(this.addContentItemGeneralPane._fileInputArea, "display", "none");
				domStyle.set(this.addContentItemGeneralPane._externalURLDiv, "display", "none");
			}else{
				this._savedContentSourceTypeChoices;
				var choices = [];
				for( var i=0;i<this._savedContentSourceTypeChoices.length; i++ ){
					if (!this.repository._isCM() || this._savedContentSourceTypeChoices[i].value != "ExternalURL") {
						choices.push(this._savedContentSourceTypeChoices[i].value);
					}	
				}
				this.addContentItemGeneralPane.contentSourceTypeChoices=this._savedContentSourceTypeChoices;
				this.addContentItemGeneralPane.addContentSourceTypeChoices(choices);
				this.addContentItemGeneralPane._contentSourceType.set("value", this._savedContentSourceTypeChoicesValue);
				if( this._savedContentSourceTypeChoicesValue == "Document" ){
					domStyle.set(this.addContentItemGeneralPane._fileInputArea, "display", "");
				}else if( this._savedContentSourceTypeChoicesValue == "ExternalURL" ){
					domStyle.set(this.addContentItemGeneralPane._externalURLDiv, "display", "");
				}
			}
		},
		
		/**
		 * @private
		 */
		_hasSavedContent: function(){
			if( this.repository && this.repository._isP8() && this._item && this._item.mimetype && this._item.filename){
				return true;
			} else if (this.repository && this.repository._isCM() && this._item && this._item.hasDraft && this._item.hasDraftContent){ //has draft content for Edit Service or OOS
				return true; 
			} else{
				return false;
			}
		},
		
		_setUpForFileTracker: function(contentSourceType) {
			if (contentSourceType == "Document" && FileTracker.canUseFileTracker() && !this.hasDaejaContent()) {
				this._useFileTracker = true;
				var item = this._originalItem;
				this.addContentItemGeneralPane.setupFileTrackerFiledsState(true);
				var documentInfo = [];
				var documentInfoInstance = {};
				documentInfoInstance.docid = [];
				documentInfoInstance.docid.push(item.id);
				documentInfoInstance.ObjectStoreName = [];
				documentInfoInstance.ObjectStoreName.push(item.repository.objectStoreName);
				documentInfoInstance.vsId = [];
				documentInfoInstance.vsId.push(item.vsId);
				documentInfoInstance.repositoryId = [];
				//TODO
				documentInfoInstance.version = "current";
				documentInfoInstance.repositoryId.push(item.repository.id);
				documentInfo.push(documentInfoInstance);
				var filesTracked = FileTracker.getTrackingInfo({
					documentInfo: documentInfo,
				});
				if (filesTracked) {
					this._trackedFiles = filesTracked;
					var fileName = this._trackedFiles[0].fileName;
					this.logDebug("_setUpForFileTracker", "found tracked file : " + this._trackedFiles[0].fileName);
					this.logDebug("_setUpForFileTracker", "tracked file location: " + this._trackedFiles[0].filePath);
					this.addContentItemGeneralPane.setFilesToUpload(this._trackedFiles);
				} else {
					//TODO
					//indicate file is not tracked , is this necessary?
				}
			} else {
				this._useFileTracker = false;
				this.addContentItemGeneralPane.setupFileTrackerFiledsState(false);
			}

		},

		/**
		 * This is the recommended method to call for displaying the Check In dialog. If the content item was created
		 * using an entry template, this method retrieves the entry template and if it is enabled for checkin, applies
		 * it to the checkin dialog.
		 * 
		 * @param repository
		 *            The {@link ecm.model.Repository} for the checkin.
		 * @param item
		 *            The {@link ecm.model.ContentItem} that will be checked in.
		 * @param callback
		 *            A function that is called after the content item is checked in.
		 * @param teamspace
		 *            The {@link ecm.model.Teamspace} for the add if working within a teamspace.
		 * @param repositoryDocumentMode
		 *            A boolean value indicating if the dialog should render in repository document content type mode.
		 */
		showCheckin: function(repository, item, callback, teamspace, repositoryDocumentMode) {
			var methodName = "showCheckin";
			var entryTemplateId = item.entryTemplateId;
			if (entryTemplateId && (entryTemplateId.length > 0)) {
				var entryTemplate = repository.getEntryTemplateById(entryTemplateId);

				var checkInEntryTemplateRetrievedHandler = lang.hitch(this, function(entryTemplate) {
					if (!entryTemplate.isRetrieved) {
						if (!ecm.model.desktop.hideEntryTemplateNotFoundWarning) {
							this.setMessage(this._messages.checkin_entry_template_not_retrieved_warning, "warning");
						}
						this.logWarning(methodName, this._messages.checkin_entry_template_not_retrieved_warning);
						this.show(repository, item, callback, teamspace, null, repositoryDocumentMode);
					} else if (entryTemplate.useForCheckin) {
						// Check to see if the entry template identifies a workflow.
						var workflow = entryTemplate.workflow;
						if (workflow && repository._isP8()) { // isWorkflowRunning() is only supported for P8
							// If the workflow is currently running, turn off options in the Checkin dialog.
							workflow.isWorkflowRunning(item, lang.hitch(this, function(isWorkflowRunning) {
								this._isWorkflowRunning = isWorkflowRunning;
								this.show(repository, item, callback, teamspace, entryTemplate, repositoryDocumentMode);
							}));
						} else {
							// Treat checkin for other repository types as having a running workflow so that workflow options are turned off. 
							this._isWorkflowRunning = true;
							this.show(repository, item, callback, teamspace, entryTemplate, repositoryDocumentMode);
						}
					} else {
						this.show(repository, item, callback, teamspace, null, repositoryDocumentMode);
					}
				});

				if (!entryTemplate.isRetrieved) {
					entryTemplate.retrieveEntryTemplate(checkInEntryTemplateRetrievedHandler, false, true);
				} else {
					checkInEntryTemplateRetrievedHandler(entryTemplate);
				}
			} else {
				this.show(repository, item, callback, teamspace, null, repositoryDocumentMode);
			}
		},
		_buildFTParameters: function(documentInfoInstance, documentItem) {
			this.logEntry("_getParameters");

			documentInfoInstance["security_token"] = Request._security_token;
			documentInfoInstance.filePath = documentItem.filePath;

			return documentInfoInstance;
		},

		/**
		 * @private
		 */
		_checkInDocumentItemMultiple: function() {
			if (this._documentItems.length > 0) {
				// Ignore additional attempts to check in this document if it is already being checked in.
				if (this._checkingIn) {
					return;
				}
				this._checkingIn = true;

				var documentItem = this._documentItems[0];
				
				if (documentItem && documentItem.content) {
					this._contentSize = documentItem.content.size;
				}
				
				this._checkinFileName = documentItem.filename;
				this._checkInUpdateStatusMsg(this._checkinFileName, this.messages.checkin_document_status_uploading_msg);

				if (this._useFileTracker) {
					var contentURL = ecm.model.Request.getServiceRequestUrl("checkIn", this.repository.type);
					var contentUrl1 = contentURL;
					if (contentUrl1.charAt(0) == ".") {
						contentUrl1 = contentUrl1.substr(1, contentUrl1.length);
						contentUrl1 = ecm.model.desktop._cServicesUrl + contentUrl1;
					}
					var documentInfo = [];
					var documentInfoInstance = this._originalItem._makeCheckinParams(documentItem.templateName, documentItem.criterias, documentItem.contentSourceType, documentItem.mimetype, documentItem.filename, documentItem.content, documentItem.childComponentValues, documentItem.permissions, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, null, true);
					this._buildFTParameters(documentInfoInstance, documentItem);
					documentInfo.push(documentInfoInstance);
					documentItem.repositoryId = [
						this._originalItem.repository.id
					];
					documentItem.docid = [
						this._originalItem.id
					];
					documentItem.ObjectStoreName = [
						this._originalItem.repository.objectStoreName
					];
					documentItem.vsId = [
						this._originalItem.vsId
					];
					var inputParameters = {
						contentUrl: contentUrl1,
						documentInfo: documentInfo,
						deleteFile: false,
						isBackgroundRequest: false,
						progressMessage: (Messages["progress_message_" + this.repository.type + "_" + "checkIn"] || Messages["progress_message_" + "checkIn"] || Messages.progress_message_general)
					};
					var self = this;
					FileTracker.uploadFiles(inputParameters, function(response) {
						delete self._checkingIn;
						self._originalItem._checkInCompleted(response, lang.hitch(self, "_checkInDocumentItemCallback"));

					});

				} else {
					var request;

					var onCheckInRequestCompletedHandler = aspect.after(ecm.model.desktop, "onRequestCompleted", lang.hitch(this, function(completedRequest) {
						if (!request || !request.isSameRequestAs(completedRequest)) {
							return;
						}
						delete this._checkingIn;
						onCheckInRequestCompletedHandler.remove();
					}), true);

					// Call checkin on the original item, since it may be the displayed released version
					// and the checkin could be on the minor version tip. The server will apply the checkin
					// to the tip but return an updated version of the original released version.
					var isBackgroundRequest = true;
					var uploadProgress = true;

					var contentSourceParameters;
					if (documentItem.contentSourceType == "RepositoryDocument") {
						contentSourceParameters = {
						"contentSourceDocId": documentItem["contentSourceDocId"],
						"contentSourceRepositoryId": documentItem["contentSourceRepositoryId"],
						"contentSourceDelete": documentItem["contentSourceDelete"],
					};
					} else if (this.hasDaejaContent()) {
						// Set the Daeja content if is available
						documentItem.contentSourceType = "Document";
						contentSourceParameters = {
							"daejaContent": JSON.stringify(this._daejaContent)
						}
					}

					if (documentItem.inputForm) {
						var onError = lang.hitch(this, function(response, errorMessages) {
							if (this._batchStatusDialog) {
								this._batchStatusDialog.hide();
							} else {
								this._hideStatusDialog();
							}
							this.onCheckinFailed(response);
						});
						request = this._originalItem.checkInUsingForm(documentItem.templateName, documentItem.contentSourceType, documentItem.filename, documentItem.inputForm, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, lang.hitch(this, this._checkInDocumentItemCallback), onError);
					} else {
						var onError = lang.hitch(this, function(response, errorMessages) {
							if (this._batchStatusDialog) {
								this._batchStatusDialog.hide();
							} else {
								this._hideStatusDialog();
							}
							array.forEach(errorMessages, lang.hitch(this, function(errorMessage) {
								if (!this._errorDialog) {
									this._errorDialog = new ErrorDialog();
								}
								this._errorDialog.showMessage(errorMessage);
							}));
							this.onCheckinFailed(response);
						});
						//if the content size is bigger than 2GB
						if ((this.repository._isP8() || this.repository._isCM())&& documentItem.content &&  (documentItem.content.size >= 2147483648|| (documentItem.content.size >= 104857600 && has("mac") && has("safari")))) {
							request = this._originalItem.checkInLargeDocument(documentItem.templateName, documentItem.criterias, documentItem.contentSourceType, documentItem.mimetype, documentItem.filename, documentItem.content, documentItem.childComponentValues, documentItem.permissions, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, lang.hitch(this, this._checkInDocumentItemCallback), isBackgroundRequest, uploadProgress, onError, contentSourceParameters, documentItem.templateMetadata);
						}
						else if (this.repository._isBox() && this.repository.corsUploadEnabled && documentItem.content){
							this._originalItem.checkInUsingCORS(documentItem.templateName, documentItem.criterias, documentItem.contentSourceType, documentItem.mimetype, documentItem.filename, documentItem.content, documentItem.childComponentValues, documentItem.permissions, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, lang.hitch(this, this._checkInDocumentItemCallback), isBackgroundRequest, uploadProgress, onError, contentSourceParameters, documentItem.templateMetadata);
						} else {
							request = this._originalItem.checkIn(documentItem.templateName, documentItem.criterias, documentItem.contentSourceType, documentItem.mimetype, documentItem.filename, documentItem.content, documentItem.childComponentValues, documentItem.permissions, documentItem.securityPolicyId, documentItem.newVersion, documentItem.checkInAsMinorVersion, documentItem.autoClassify, lang.hitch(this, this._checkInDocumentItemCallback), isBackgroundRequest, uploadProgress, onError, contentSourceParameters, documentItem.templateMetadata);
						}
					}

					if (!request) {
						if (onCheckInRequestCompletedHandler) {
							onCheckInRequestCompletedHandler.remove();
						}
						delete this._checkingIn;
					}
				}

			}
		},

		/**
		 * @private
		 */
		_checkInDocumentItemCallback: function(updatedItem, fieldErrors, templateMetadataErrors) {
			if (fieldErrors || templateMetadataErrors) {
				// Hide the status dialog
				if (this._batchStatusDialog) {
					this._batchStatusDialog.hide();
				} else {
					this._hideStatusDialog();
				}
				
				// Clear any remaining items to upload.
				this._documentItems = [];
				
				if (fieldErrors) {
					var fieldErrorMap = {};
					array.forEach(fieldErrors, function(fieldError) {
						this.addContentItemPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
						fieldErrorMap[fieldError.symbolicName] = fieldError;
					}, this);
	
					// Set the focus to the first invalid field, in the layout order.
					var props = this.addContentItemPropertiesPane.getPropertiesJSON(true, true, false);
					array.some(props, function(prop) {
						if (fieldErrorMap[prop.name] == null) {
							return false;
						}
						this.addContentItemPropertiesPane.setFieldFocus(prop.name);
						return true;
					}, this);
				}
				
				if (templateMetadataErrors) {
					// Update fields with errors
					array.forEach(templateMetadataErrors, function(templateMetadataError) {
						array.forEach(templateMetadataError.fieldErrors, function(fieldError) {
							this.addContentItemPropertiesPane.setTemplateMetadataFieldError(templateMetadataError.id, fieldError.symbolicName, fieldError.errorMessage);
						}, this);
					}, this);
					
					// Set the focus on the first invalid field if there are no previous errors
					if (!fieldErrors)
						this.addContentItemPropertiesPane.setTemplateMetadataFieldFocus(templateMetadataErrors[0].id, templateMetadataErrors[0].fieldErrors[0].symbolicName);
				}

				// Handle the change in error state.
				this._onChangeProperties();
			} else {
				if (this._useFileTracker && this._documentItems.length > 0) {
					if (this.addContentItemGeneralPane.deleteLocalFile()) {
						FileTracker.deleteFiles({
							documentInfo: [
								this.addContentItemGeneralPane.getFileInputFiles()[0]
							]
						});
						FileTracker.removeFileTrackingInfo({
							documentInfo: [
								{
									params: {
										"repositoryId": this._documentItems[0].repositoryId,
										"docid": this._documentItems[0].docid,
										"ObjectStoreName": this._documentItems[0].ObjectStoreName,
										vsId: this._documentItems[0].vsId
									}
								}
							]
						});
					}

				}
				delete this._checkinFileName;
				if (this._documentItems.length > 0) {
					this._documentItems.shift();
				}
				if (this._documentItems.length > 0) {
					this._checkinDocumentItemMultiple();
				} else {
					if (this._batchStatusDialog) {
						this._batchStatusDialog.hide();
					} else {
						this._hideStatusDialog();
					}
					// The check in succeeded, close the dialog.
					this.onCancel();
					// The checked in content item will refresh itself.
					if (this._callback) {
						this._callback(updatedItem);
					}
					// If there is a workflow, launch it.
					if (this._entryTemplate && this._entryTemplate.workflow) {
						this._startWorkflow(updatedItem);
					}
				}
			}
		},

		/**
		 * @private
		 */
		_createBatchStatusDialog: function(modeless, withProgressBar, withLoadingIcon) {
			if (this._batchStatusDialog) {
				this._batchStatusDialog.destroyRecursive();
			}
			this._batchStatusDialog = new BatchStatusDialog({
				title: this.messages.checkin_document_status_title,
				cancellable: false,
				modeless: modeless,
				withProgressBar: withProgressBar,
				withLoadingIcon: withLoadingIcon,
				fitContentArea: true
			});

			this._batchStatusDialog.show();
		},
		/**
		 * @private
		 */
		_checkInUpdateStatusMsg: function(fileName, msg) {
			if (!this._batchStatusDialog) {
				return;
			}

			var statusMsg = [];
			var message = msg ? msg : "";

			statusMsg.push("<div>");
			statusMsg.push(idxHtml.escapeHTML(message));
			statusMsg.push("</div>");

			statusMsg.push("<p><p><div>");
			statusMsg.push(idxHtml.escapeHTML(fileName));
			statusMsg.push("</div>");

			this._batchStatusDialog.updateStatusMessage(statusMsg.join(""));
		},

		/**
		 * @private
		 */
		_changeUploadProgress: function(evt) {
			if (!this._batchStatusDialog) {
				return;
			}
			if (!evt) {
				return;
			}
			if (!ecm.model.desktop.uploadMap) {
				ecm.model.desktop.uploadMap = {};
			}
			ecm.model.desktop.uploadMap[evt.total] = evt.loaded;
			
			var total = 0;
			Object.keys(ecm.model.desktop.uploadMap).forEach(function(key) {
				var value = ecm.model.desktop.uploadMap[key];
				total = total + value;
			});

			var percent = Math.round(total * 100 / this._contentSize);

			this._batchStatusDialog.updateValueInProgressBar(percent);
			if (percent >= 100) {
				ecm.model.desktop.uploadMap = null;
				this._checkInUpdateStatusMsg(this._checkinFileName, this.messages.checkin_document_status_checkingin_msg);
				this._batchStatusDialog.showProgressBar(false);
				this._batchStatusDialog.showLoadingIcon(true);
			}
		},
		/**
		 * @private
		 */
		_completeUploadProgress: function(evt) {
			// do something when load event is fired.
		},
		/**
		 * @private
		 */
		_startWorkflow: function(newItem) {
			if (!this._isWorkflowRunning) {
				var workflow = this._entryTemplate.workflow;
				if (!workflow.promptToLaunchWorkflow || this.addContentItemGeneralPane.getStartOnWorkflow()) {
					if (workflow.selectParticipant) {
						// Display the launch processor so that the user may add workflow participants.
						ecm.widget.dialog.stepProcessorWindow.launchFromEntryTemplate(newItem, workflow);
					} else {
						// This is an automatic launch with no user interaction.
						workflow.launchWorkflow(newItem);
					}
				}
			}
		},

		/**
		 * The Check In button event handler.
		 */
		onCheckin: function() {
			// Do not allow the add to continue if there is invalid input.
			// The isValid() check will direct the user to the invalid input.
			if (!this.isValid(true)) {
				return;
			}

			var newVersion = this.addContentItemGeneralPane.getNewVersion();
			var checkInAsMinorVersion = !this.addContentItemGeneralPane.getAsMajorVersion();
			var autoClassify = this.addContentItemGeneralPane.getAutoClassify();
			var documentType = this.addContentItemPropertiesPane.getDocumentType();
			var properties = this.addContentItemPropertiesPane.getPropertiesJSON();
			var childComponentValues = this.addContentItemPropertiesPane.getChildComponentValues();
			var templateMetadataValues = this.addContentItemPropertiesPane.getTemplateMetadataValues();
			var permissions = this.addContentItemSecurityPane.getPermissions();

			if (this._typeDocument || this.repository._isCM()) { // Check in is allowed for CM folders.
				// Force content source type "Item" for folders.
				var contentSourceType = this._typeDocument ? this.addContentItemGeneralPane.getContentSourceType() : "Item";
				var inputFiles = this.addContentItemGeneralPane.getFileInputFiles();
				// If there are input files... (HTML5 browser).
				if (inputFiles) {
					this._documentItems = [];
					if ((contentSourceType == "Document" || contentSourceType == "RepositoryDocument") && (inputFiles.length > 0)) {
						// When content is not uploaded from the client, the upload progress bar is not needed.
						if (this._repositoryDocumentMode)
							this._createBatchStatusDialog(false, false, true);
						else
							this._createBatchStatusDialog(false, true, false);
						for (var i = 0; i < inputFiles.length; i++) {
							var file = inputFiles[i];

							var documentItem = {
								"templateName": documentType,
								"criterias": properties,
								"contentSourceType": contentSourceType,
								"mimetype": file.type,
								"filename": file.fileName ? file.fileName : file.name,
								filePath: (file.filePath != null) ? file.filePath : null,
								"content": file,
								"childComponentValues": childComponentValues,
								"permissions": permissions,
								"securityPolicyId": this._getSecurityPolicyId(),
								"newVersion": newVersion,
								"checkInAsMinorVersion": checkInAsMinorVersion,
								"autoClassify": autoClassify,
								"templateMetadata": templateMetadataValues
							};

							if (contentSourceType == "RepositoryDocument") {
								documentItem = lang.mixin(documentItem, {
									"contentSourceDocId": file["id"],
									"contentSourceRepositoryId": file["repository"] != null ? file.repository.id : null,
									"contentSourceDelete": this._propertiesMap.ecm_content_source_delete
								});
							}
							this._documentItems.push(documentItem);
						}
					} else { // Checking in without local file content.
						if (this.hasDaejaContent()) {
							this._showStatusDialog();
						} else {
							// When content is not uploaded from the client, the upload progress bar is not needed.
							if (this._repositoryDocumentMode)
								this._createBatchStatusDialog(false, false, true);
							else
								this._createBatchStatusDialog(false, true, false);
						}
						
						var fileName = this.getExternalContentFilename();
						this._documentItems.push({
							"templateName": documentType,
							"criterias": properties,
							"contentSourceType": contentSourceType,
							"mimetype": null,
							"filename": fileName,
							"content": null,
							"childComponentValues": childComponentValues,
							"permissions": permissions,
							"securityPolicyId": this._getSecurityPolicyId(),
							"newVersion": newVersion,
							"checkInAsMinorVersion": checkInAsMinorVersion,
							"autoClassify": autoClassify,
							"templateMetadata": templateMetadataValues
						});
					}
				} else { // This browser does not support HTML5.
					// Retrieve references to the form fields and set the data.
					var propertiesInput = this.addContentItemGeneralPane._getPropertiesInput();
					propertiesInput.value = JSON.stringify(properties);
					var childComponentInput = this.addContentItemGeneralPane._getChildComponentInput();
					childComponentInput.value = JSON.stringify(childComponentValues);
					var permissionsInput = this.addContentItemGeneralPane._getPermissionsInput();
					permissionsInput.value = JSON.stringify(permissions);

					var fileName;
					if (contentSourceType == "Document") {
						fileName = this.addContentItemGeneralPane.getInputFileName();
					} else if (contentSourceType == "ExternalURL") {
						fileName = this.addContentItemGeneralPane.getExternalURL();
					} else {
						fileName = null;
					}

					this._documentItems = [
						{
							"templateName": documentType,
							"contentSourceType": contentSourceType,
							"filename": fileName,
							"inputForm": this.addContentItemGeneralPane.getFileInputForm(),
							"securityPolicyId": this._getSecurityPolicyId(),
							"newVersion": newVersion,
							"checkInAsMinorVersion": checkInAsMinorVersion,
							"autoClassify": autoClassify
						}
					];
				}
				this._checkInDocumentItemMultiple();
			} // Else checkin does not apply.
		},

		/**
		 * This event is fired when the checkin operation has failed.
		 */
		onCheckinFailed: function(response) {
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				delete this._errorDialog;
			}
			if (this._batchStatusDialog) {
				this._batchStatusDialog.destroyRecursive();
				delete this._batchStatusDialog;
			}
			this._item = null;
			this.inherited(arguments);
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/xhr",
	"dojo/_base/url",
	"dojo/string",
	"dojo/on",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/io-query",
	"dojo/has",
	"ecm/model/_itemUtils",
	"ecm/widget/viewer/_MergeSplitMixin",
	"ecm/widget/viewer/DocViewer",
	"dojo/text!./templates/ViewoneHTMLViewer.html",
	"ecm/model/ContentItem",
	"ecm/model/Request",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/YesNoCancelDialog",
	"ecm/widget/dialog/SelectReasonDialog",
	"ecm/widget/dialog/StatusDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/model/ContentClass",
	"ecm/widget/virtualViewer/_ViewoneSaveAsTypes",
	"ecm/widget/virtualViewer/_ViewoneUtils",
	"ecm/widget/virtualViewer/AddViewoneEditedItemDialog",
	"ecm/widget/virtualViewer/CheckInViewoneEditedItemDialog",
	"ecm/model/Message",
	"ecm/LoggerMixin"
], function(declare, lang, array, xhr, url, string, on, aspect, domClass, ioQuery, has, itemUtils, _MergeSplitMixin, DocViewer, template, ContentItem, Request, ConfirmationDialog, MessageDialog, YesNoCancelDialog, SelectReasonDialog, StatusDialog, ErrorDialog, ContentClass, SaveAsTypes, Utils, AddViewoneEditedItemDialog, CheckInViewoneEditedItemDialog, Message, LoggerMixin) {

	var ViewoneHTMLViewer = declare("ecm.widget.virtualViewer.ViewoneHTMLViewer", [
		DocViewer,
		_MergeSplitMixin,
		LoggerMixin
	], {
		templateString: template,
		showErrorOnFallback: false,
		viewerId: 'v',
		viewer: null,
		docURL: null,
		saveAnnotURL: null,
		coldTemplateParam: "templateid",

		_dirty: false,
		_printing: false,
		_loadingViewer: false,
		_loadingBootstrap: false,
		_loadedBootstrap: false,
		_loadingViewoneBootstrap: false,
		_loadedViewoneBootstrap: false,
		_loadingConfig: false,
		_loadedConfig: false,
		_loadingDocument: false,
		_loadedDocument: false,
		_startingViewer: false,
		_inRedactionMode: false,
		_redactionCheckoutDocument: false,
		_mergeSplitCheckoutDocument: false,

		_OK_STATUS: "ok",
		_ERROR_STATUS: "error",
		_CANCEL_STATUS: "cancel",
		_USER_CANCEL_STATUS: "usercancel",

		_redactionSavedItem: null,
		_documentSaveMode: null,  // A "DOCUMENT_SAVE_MODE_..." value
		_isSetRedactionTransparent: false,
		_lastMode: null,

		DOCUMENT_SAVE_MODE_NEW_VERSION: "newVersion",
		DOCUMENT_SAVE_MODE_NEW_DOCUMENT: "newDocument",
		DOCUMENT_SAVE_MODE_LOCAL_FILE: "localFile",
		DOCUMENT_SAVE_MODE_USER_SELECT: "userSelect",
		DOCUMENT_ADD_MODE_STANDARD: "standard",
		DOCUMENT_ADD_MODE_ENTRY_TEMPLATE: "entryTemplate",

		postCreate: function() {
			this.inherited(arguments);
			this.viewerId = "nav_" + this.id;
			var methodName = "postCreate - " + this.viewerId;
			this.logEntry(methodName + ": ViewONE Virtual created. ");
			if (ViewoneHTMLViewer._securityTokenHandler == null) {
				this.logDebug(methodName, "Setting up security token refresh handler.");
				ViewoneHTMLViewer._securityTokenHandler = aspect.after(ecm.model.Request, "onSecurityTokenChange", function() {
					ViewoneHTMLViewer._updateSecurityToken();
				});
			}
			this.logExit(methodName);
		},

		isLoading: function() {
			this.logEntry("isLoading - " + this.viewerId);
			return this.viewer == null || this._isLoadingInProgress();
		},

		isLoaded: function() {
			var viewerLoaded = this.viewer != null && !this._isLoadingInProgress();
			this.logEntry("isLoaded - " + this.viewerId + ": " + viewerLoaded);
			return viewerLoaded;
		},

		_isLoadingInProgress: function() {
			return (this._loadingDocument || this._loadingConfig || this._loadingViewoneBootstrap || this._loadingBootstrap);
		},

		getPageNumber: function() {
			var methodName = "getPageNumber - " + this.viewerId;
			this.logEntry(methodName);

			if (this.viewer != null) {
				this.logDebug(methodName, "retrieving page number from viewer");
				this._pageNumber = this.viewer.getPage();
			}
			this.logExit(methodName + ": " + this._pageNumber);
			return this._pageNumber;
		},

		/* sets the _item property which is the document information */
		setItem: function(item, pageNumber, viewerReused) {
			var methodName = "setItem - " + this.viewerId;
			this.logEntry(methodName);
			this.inherited(arguments);
			if (!viewerReused)
				this._destroyViewer();

			this._loadingDocument = false;
			this._loadingBootstrap = false;
			this._loadedBootstrap = false;
			this._loadingConfig = false;
			this._loadedConfig = false;
			this._loadingViewoneBootstrap = false;
			this._loadedViewoneBootstrap = false;
			this._loadedDocument = false;
			this._isSetRedactionTransparent = false;
			this.item = item;
			this.docURL = item.id ? item.getContentUrl(null, "specific") : "";
			if (item.celement != null)
			{
				this.preview = true;
				this.isPart = true;
				this.docURL = this.docURL + '&element=' + item.celement;
			}
			this.docUrlBreak = this.docURL.split("?");
			this.mimetype = item.mimetype;

			var queryString = this.docURL.substring(this.docURL.indexOf('?'));
			var serverType = item.repository.type;
			var serviceURL = ecm.model.desktop.getServicesUrl();

			this.saveAnnotURL = serviceURL + "/" + serverType + "/updateAnnotations.do" + queryString;
			this.logDebug(methodName, "Annotation Save URL: " + this.saveAnnotURL);

			this.coldTemplateURL = this._getColdTemplateUrlStr();
			this.logDebug(methodName, "Cold Template URL: " + this.coldTemplateURL);

			this.logExit(methodName);
		},

		isMergeSplitSupported: function() {
			return !this.item.id || (SaveAsTypes.isMimeTypeSupported(this.item.mimetype) && !this._mergeSplitModeFailed);
		},

		enableMergeSplitMode: function() {
			if (this.isMergeSplitSupported() && this._lastMode != "docbuilder")
				this.viewer.setEditMode("docbuilder");
		},

		disableMergeSplitMode: function() {
			if (this._lastMode == "docbuilder") {
				if (this._mergeSplitModeFailed)
					this._resetItem(this.item);
				else
					this.viewer.setEditMode("annotate");
			}
		},

		_getColdTemplateUrlStr: function() {
			var urlBase = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
			return urlBase + this.docUrlBreak[0] + "?" + this.coldTemplateParam + "=0&" + this.docUrlBreak[1];
		},

		/* Called when the viewer is displayed. 
		 * arguments: Item and pageNumber
		 */
		showItem: function(callback) {
			var methodName = "showItem - " + this.viewerId;
			this.logEntry(methodName);
			this.setIsLoading(true);
			if (this.viewer == null) {
				if (!this._loadedViewoneBootstrap) {
					this._loadViewoneBootstrap();
				} else if (!this._loadedConfig) {
					this._loadViewerConfig();
				} else if (!this._loadedBootstrap) {
					this._loadBootstrap();
				}
			} else if (!(this.viewer == null || this._loadedDocument)) {
				this._loadDocument();
			} else if (this.viewer != null) {
				this.viewer.setFocus(true);
			}

			this.logExit(methodName);
			return true;
		},

		/* test the open and use the fallback if it fails and another viewer 
		 * should get the opportunity to attempt to open the item. */
		openItem: function() {
			var methodName = "openItem - " + this.viewerId;
			this.logEntry(methodName);

			this.logExit(methodName);
			//return this._loaded || this._loading || this._loadingConfig;
		},

		/* Called by Navigator to cleanup when document tab closed. Call close on viewer to prompt for any user response required */
		closeItem: function() {
			var methodName = "closeItem - " + this.viewerId;
			this.logEntry(methodName);
			this._cancelCheckoutRedaction(true);
			this._cancelCheckoutMergeSplit(true);

			this.inherited(arguments);

			if (this.viewer) {
				this.viewer.closeDocument();
			}
			this._loadingDocument = false;
			this._loadedDocument = false;
			this._setDirty(false);
			this._isSetRedactionTransparent = false;
			this.logExit(methodName);
			return false;
		},

		_setDirty: function(dirty) {
			this._dirty = dirty;
			this.onDirty(dirty);
		},

		_destroyViewer: function() {
			var methodName = "_destroyViewer - " + this.viewerId;
			this.logEntry(methodName);

			if (this.viewer != null) {
				if (window.com && window.com.ibm && window.com.ibm.dv && window.com.ibm.dv.client && window.com.ibm.dv.client.Viewer && window.com.ibm.dv.client.Viewer.stop) {
					try {
						window.com.ibm.dv.client.Viewer.stop(this.viewerId);
					} catch (error) {
						this.logError(methodName, error);
					}
				}

				this._deleteGlobalViewerFunction("_listener");
				this._deleteGlobalViewerFunction("_setRedactionReason");
				this._deleteGlobalViewerFunction("_isRedaction");
				this._deleteGlobalViewerFunction("_toggleRedactionsState");
				this._deleteGlobalViewerFunction("_checkOutItem");
				this._deleteGlobalViewerFunction("_checkInItem");
				this._deleteGlobalViewerFunction("_cancelCheckoutItem");
				this._deleteGlobalViewerFunction("_addItem");
				this._deleteGlobalViewerFunction("_evaluateCheckoutButtonState");
				this._deleteGlobalViewerFunction("_evaluateCheckinButtonState");
				this._deleteGlobalViewerFunction("_evaluateCancelCheckoutButtonState");
				this._deleteGlobalViewerFunction("_evaluateAddButtonState");
				
				if (window[this.viewerId]) {
					delete window[this.viewerId];
				}

				this.viewer = null;
			}

			this.logExit(methodName);
		},

		_deleteGlobalViewerFunction: function(functionName) {
			if ( window[this.viewerId + functionName] ) {
				delete window[this.viewerId + functionName];
			}
		},

		destroy: function() {
			var methodName = "destroy - " + this.viewerId;
			this.logEntry(methodName);
			this._destroyViewer();
			if (this.selectSaveMode) {
				this.selectSaveMode.destroyRecursive();
				this.selectSaveMode = null;
			}
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			if (this._selectReasonDialog) {
				this._selectReasonDialog.destroyRecursive();
				this._selectReasonDialog = null;
			}
			if (this._confirmDialog) {
				this._confirmDialog.destroyRecursive();
				this._confirmDialog = null;
			}
			if (this._checkoutConflictDialog) {
				this._checkoutConflictDialog.destroyRecursive();
				this._checkoutConflictDialog = null;
			}
			if (this.addContentItemDialog) {
				// Release the reference. The contents are self-destroyed.
				this.addContentItemDialog = null;
			}
			if (this._buildStatusDialog) {
				this._buildStatusDialog.destroyRecursive();
				this._buildStatusDialog = null;
			}

			this.inherited(arguments);
		},

		_refreshItem: function(itemToRefresh) {
			if (itemToRefresh) {
				// If this item is a folder...
				if (lang.isFunction(itemToRefresh.isFolder) && itemToRefresh.isFolder()) {
					// It may be a favorite or work item. Get the contained folder ecm.model.ContentItem.

					// The declaredClass test works on an item from another window, isInstanceOf() does not.
					if (itemToRefresh.declaredClass == "ecm.model.Favorite") {
						itemToRefresh = itemToRefresh.item;
					} else if (itemToRefresh.declaredClass == "ecm.model.WorkItem") {
						itemToRefresh = itemToRefresh.contentItem;
					}
				}
				if (lang.isFunction(itemToRefresh.refresh)) {
					// This will call over to the desktop window where the item was created.
					itemToRefresh.refresh();
					this._focusBack();
				}
			}
		},

		_focusBack: function() {
			if (has("ie") || has("trident")) {
				// Bring focus back to this viewer window.
				setTimeout(function() {
					window.self.focus();
				}, 3000);
			}
		},

		/* called whenever the viewer tab is closed to allow form prompting of the user for saving of annotations */
		isDirty: function() {
			this.logEntry("isDirty - " + this.viewerId + ": " + this._dirty);
			return this._dirty;
		},

		/* Call when save has completed. */
		callback: function() {
			this.logEntry("callback - " + this.viewerId);
		},

		/**
		 * Saves all annotation changes.
		 * 
		 * @param callback
		 *            If specified, call the callback upon completion of the save.
		 */
		saveAnnotations: function(callback) {
			// Call via setTimeout to deal with JavaScript STRICT mode in IE.
			setTimeout(lang.hitch(this, function() {
				this._saveAnnotations(callback)
			}), 50);
		},

		_saveAnnotations: function(callback) {
			var methodName = "_saveAnnotations";
			this.logEntry(methodName);

			if (this.viewer.saveAnnotations && this.saveCompleted == null) {
				this.saveCompleted = callback;
				this.logDebug(methodName, "Saving ViewONE Virtual annotations.");
				this.viewer.saveAnnotations();
			} else if (!this.viewer.saveAnnotations) {
				// TODO: Implement viewer.saveAnnotations and hook it up here.
				this.logError(methodName, "this.viewer.saveAnnotations function not available.");
			}

			this.logExit(methodName);
		},

		/* Called when window closing. */
		isPrinting: function() {
			this.logEntry("isPrinting - " + this.viewerId + ": " + this._printing);
			return this._printing;
		},

		/**
		 * Return the Daeja ViewONE Virtual viewer instance.
		 * 
		 * @since 2.0.3.3
		 */
		getNativeViewer: function() {
			return this.viewer;
		},

		/* this is called from Navigator after showItem */
		onDocumentLoaded: function() {
			var methodName = "onDocumentLoaded - " + this.viewerId;
			this.logEntry(methodName);
			this.inherited(arguments);
			this.logExit(methodName);
		},

		/* Indicates config has loaded. */
		onConfigLoaded: function() {
			this._loadingConfig = false;
			this._loadedConfig = true;
			this.logDebug("onConfigLoaded", this.viewerId + ": viewer configuration loaded ");
			if (this._loadedBootstrap && !this._loadedDocument) {
				this.viewerReadyToStart();
			} else if (!this._loadedBootstrap) {
				this._loadBootstrap();
			}
		},

		/*  Viewer listener methods    */
		viewerReadyEvent: function(id, text) {
			var methodName = "viewerReadyEvent - " + this.viewerId;
			this.logEntry(methodName + ": loadedConfig=" + this._loadedConfig + "; loadedDocument=" + this._loadedDocument);
			this.viewer = window[this.viewerId];
			if(this.viewer)
				this._initialAnnotationMode = this.viewer.getView();
			else
				this._initialAnnotationMode = 0;
            var params = Request.setSecurityToken({});
            this.viewer.updateRequestParameter("security_token", params.security_token);
			this._startingViewer = false;
			this._loadingViewer = false;
			if (this._loadedConfig && !this._loadedDocument) {
				this._loadDocument();
			}
			this.logExit(methodName);
		},

		documentReadyEvent: function(id, text) {
			var methodName = "documentReadyEvent - " + this.viewerId;
			this.logEntry(methodName);
			this._loadingDocument = false;
			this._loadedDocument = true;
			this.setIsLoading(false);
			if (this.isMergeSplitSupported() && this.isMergeSplitModeEnabled() && this._lastMode != "docbuilder") {
				this.viewer.setEditMode("docbuilder");
				if (this.viewer.setEditModeToolbarVisible)
					this.viewer.setEditModeToolbarVisible(false);
			} else {
				this._updateEditModeButtons();
			}
			//call superclass method
			setTimeout(lang.hitch(this, function() {
				this.onDocumentLoaded(); // DO bother!!  It is an event call that other widgets might be listening for!!
			}), 3000);
			this.logExit(methodName);
		},

		_updateEditModeButtons: function() {
			if (this.viewer.setEditModeToolbarVisible)
				this.viewer.setEditModeToolbarVisible(this._lastMode == "docbuilder" ? false : true);
		},

		annotLoadedEvent: function(id, text) {
			this.logEntry("annotLoadedEvent - " + this.viewerId);
			
			if (this._docbuilderReloadAnnotationsCallbackId) {
				this._setViewThenChangeMode("docbuilder", this._docbuilderReloadAnnotationsCallbackId);
				this._docbuilderReloadAnnotationsCallbackId = null;
			}
			if (this._redactionReloadAnnotationsCallbackId) {
				this._selectDocumentSaveMode(this._redactionReloadAnnotationsCallbackId);		
				this._redactionReloadAnnotationsCallbackId = null;
			}

			// See if there are editable role-based redaction annotations
			this._hadEditableRoleBasedRedactions = false;
			var redactLabels = this.viewer.getAnnotationLabels("redact");
			if (redactLabels) {
				redactLabels = redactLabels.split(this.viewer.getDelimiter());
				// See if any are role-based redactions.
				for (var n = 0; n < redactLabels.length; n++) {
					var reasonCode = this.getAnnotationProperty(this.viewer.getDelimiter(), this.viewer.getAnnotation(redactLabels[n]), "F_REASON_CODE");
					if (reasonCode) {
						this._hadEditableRoleBasedRedactions = true;
						break;
					}
				}
			}

			this._setDirty(false);
		},

		annotLoadFailedEvent: function(id, text) {
			this.logEntry("annotLoadFailedEvent - " + this.viewerId);
		},

		documentLoadFailedEvent: function(id, text) {
			var methodName = "documentLoadFailedEvent";
			this.logEntry(methodName + " - " + this.viewerId);

			this._loadingDocument = false;
			this._loadedDocument = true;

			//call superclass method
			setTimeout(lang.hitch(this, function() {
				this.onDocumentLoaded(); // DO bother!!  It is an event call that other widgets might be listening for!!
			}), 3000);
			this.logDebug(methodName, "Document load failed: " + text);
			if (this._lastMode == "docbuilder") {
				this._cancelMergeSplitMode("document_builder_open_failed");
			} else {
				setTimeout(lang.hitch(this, function() {
					this.onFallback();
				}), 1);
			}
		},

		annotEditEvent: function(id, text) {
			this.logEntry("annotEditEvent - " + this.viewerId + ": " + text);
			if (this._changingMode || this._isLoadingInProgress())
				return;
			if (this.isMergeSplitModeEnabled() && !this._dirty)
				this._checkoutMergeSplitIfEnabled();
			this._setDirty(true);
		},

		annotRestoredEvent: function(id, text) {
			this.logEntry("annotRestoredEvent - " + this.viewerId + ": " + text);
			this._setDirty(false);
		},

		annotSavedEvent: function(id, text) {
			var methodName = "annotSavedEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			if (this.saveCompleted != null) {
				this.logDebug(methodName, "Calling saveCallback");
				this.saveCompleted();
				this.saveCompleted = null;
			}

			if (this.item.repository.type == "cm") {
				// refresh the parent folder if the version policy is always create
				itemUtils.cmRefreshParentIfPartAlwaysVersions(this.item.origItem ? this.item.origItem : this.item, "ICMANNOTATION", this._focusBack);
			} else if (this.item.repository.type == "p8" && this.item.repository.redactionEnabled && this.item.repository.getPrivilege("addRoleBasedRedaction")) {
				// Now see if there are editable role-based redaction annotations
				var hasEditableRoleBasedRedactions = false;
				var redactLabels = this.viewer.getAnnotationLabels("redact");
				if (redactLabels) {
					redactLabels = redactLabels.split(this.viewer.getDelimiter());
					// See if any are role-based redactions.
					for (var n = 0; n < redactLabels.length; n++) {
						var reasonCode = this.getAnnotationProperty(this.viewer.getDelimiter(), this.viewer.getAnnotation(redactLabels[n]), "F_REASON_CODE");
						if (reasonCode) {
							hasEditableRoleBasedRedactions = true;
							break;
						}
					}
				}
				
				// If there was a change in the viewer from no editable RBRs to editable RBRs, or editable RBRs to no editable RBRs, 
				// then update the document properties so that changes to the Sensitive Content property value and choice list are loaded. 
				if (this._hadEditableRoleBasedRedactions !== hasEditableRoleBasedRedactions) {
					this.contentViewerPane.contentViewerTab.tabContainer.contentViewer.viewerEditContainer.setItem(this.item, this.contentViewerPane.contentViewerTab);
				}
				
				this._hadEditableRoleBasedRedactions = hasEditableRoleBasedRedactions;
			}

			this._setDirty(false);
		},

		annotSaveFailedEvent: function(id, text) {
			this.logEntry("annotSaveFailedEvent - " + this.viewerId);
			this.saveCompleted = null;
		},

		printStartEvent: function(id, text) {
			this.logEntry("printStartEvent - " + this.viewerId);
			this._printing = true;
		},

		printFinishEvent: function(id, text) {
			this.logEntry("printFinishEvent - " + this.viewerId);
			this._printing = false;
		},

		modeChangeEvent: function(id, mode) {
			this._changingMode = false;
			this.logEntry("modeChangeEvent - " + this.viewerId, ", " + mode);
			if (this._lastMode == "redaction") {
			    this._inRedactionMode = false;
			    this._cancelCheckoutRedaction(false);
			} else if (this._lastMode == "docbuilder" && this._mergeSplitCheckoutDocument) {
			    this._cancelCheckoutMergeSplit(false, true);
			}
			this._lastMode = mode;
			this._updateEditModeButtons();

			if (mode == "redaction") {
			    this._inRedactionMode = true;
			    this._redactionSavedItem = null;
			    this._redactionLabelAnnotations = Utils.getLabelAnnotations(this.viewer);
			}
			this._setDirty(false);
			this.viewer.setFocus(true);
			this.logExit("modeChangeEvent - " + this.viewerId);
		},


		taskStartEvent: function(id, taskId, callbackId, configString) {
			this.logEntry("taskStartEvent - " + this.viewerId);
			this._taskCallbackId = callbackId;
			if (taskId == this._buildTaskId) {
				// TBD Remove this when newlines (char code 13 followed by 10) are not embedded in configString.
				configString = configString.replace(/(\r\n|\n|\r)/gm," ");
				
				var configJson = JSON.parse(configString);
				configJson.showProgress = false;
				if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT) {
					this._addDocumentMergeSplit([ {
						type: "document",
						url: "",
						mimeType: configJson.config.mimeType
					} ], configJson);
				} else if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_VERSION) {
					if (ecm.model.desktop.mergeSplitShowCheckIn) {
						this._checkInMergeSplit([ {
							type: "document",
							url: "",
							mimeType: configJson.config.mimeType
						} ], configJson);
					} else {
						this._showBuildStatusDialog();
						this._doCallback(callbackId, JSON.stringify(configJson));
					}
				}
			} else if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT) {
				this._addDocumentRedaction({
					url: [],
					mimeType: []
				});
			} else {
				// this._showBuildStatusDialog();
				this._doCallback(callbackId, this._OK_STATUS);
			}
			this.logExit("taskStartEvent - " + this.viewerId);
		},

		_showBuildStatusDialog: function(cancelCallback) {
			if (!this._buildStatusDialog) {
				this._buildStatusDialog = new StatusDialog({
					onCancel: lang.hitch(this, function() {
						if (this._taskCallbackId) {
							this._doCallback(this._taskCallbackId, this._CANCEL_STATUS);
							this._taskCallbackId = null;
						}
						this._buildStatusDialog.requestCompletedHandler({});
						if (lang.isFunction(cancelCallback))
							cancelCallback();
					})
				});
			}
			this._buildStatusDialog.requestStartedHandler({
				progressMessage: ecm.messages.viewer_status_building,
				delay: 1
			});
		},

		_updateBuildStatusDialog: function(cancelCallback) {
			if (!this._buildStatusDialog || !this._buildStatusDialog.open)
				return;
			this._buildStatusDialog.requestCompletedHandler({});
			this._buildStatusDialog.requestStartedHandler({
				cancellable: true,
				progressMessage: ecm.messages.viewer_status_building,
				delay: 1
			});
		},

		_hideBuildStatusDialog: function() {
			if (this._buildStatusDialog && this._buildStatusDialog.open)
				this._buildStatusDialog.requestCompletedHandler({});
		},

		taskStartedEvent: function(id, taskId, callbackId) {
			this.logEntry("taskStartedEvent - " + this.viewerId);
			this._taskCallbackId = callbackId;
			this._buildTaskId = null;
			this._updateBuildStatusDialog();
			this.logExit("taskStartedEvent - " + this.viewerId);
		},

		taskStatusEvent: function(id, taskId, status, json) {
			var methodName = "taskStatusEvent";
			this.logEntry(methodName + " - " + this.viewerId + " - " + taskId + " - " + status);
			if (this._inRedactionMode) {
				this.logEntry(methodName + " - Redact document status.");
				switch (status) { // ok, error, cancel, usercancel
				case this._OK_STATUS:
					this.logDebug(methodName, "Redaction completed.");
					this._redactionLabelAnnotations = Utils.getLabelAnnotations(this.viewer);
					this._hideBuildStatusDialog();
					if (this._redactionCheckoutDocument) {
						// this._buildStatusDialog.showActionBar(false);
						// this._buildStatusDialog.requestStartedHandler({
						// 	progressMessage: ecm.messages.viewer_status_checking_in,
						// 	delay: 1
						// });
						this._checkInRedaction(json);
					} else {
						if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT) {
							this.addContentItemDialog.setDaejaContent(json);
							this.addContentItemDialog.onAdd();
						} else {
							var response = JSON.parse(json);
							this._performDownload(response.url[0]);
						}
					}
					break;
				case this._ERROR_STATUS:
					this._showErrorDialog("document_build_failed");
					if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT && this.addContentItemDialog && this.addContentItemDialog.open)
						this.addContentItemDialog.onCancel();
					this._hideBuildStatusDialog();
					this.logDebug(methodName, "Redaction error.");
					break;
				case this._CANCEL_STATUS:
					this._hideBuildStatusDialog();
					this.logDebug(methodName, "Redaction cancelled.");
					break;
				case this._USER_CANCEL_STATUS:
					this._hideBuildStatusDialog();
					this.logDebug(methodName, "Redaction cancelled by user.");
					break;
				}
			} else if (this.isMergeSplitModeEnabled()) {
				this.logEntry(methodName + " - Commit doc builder document status.");
				switch (status) {
				case this._OK_STATUS:
					this.logDebug(methodName, "Doc builder commit completed.");
					this._hideBuildStatusDialog();
					if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT) {
						this.addContentItemDialog.setDaejaContent(json);
						this.addContentItemDialog.onAdd();
					} else {
						if (ecm.model.desktop.mergeSplitShowCheckIn) {
							this.checkInDialog.setDaejaContent(json);
							this.checkInDialog.onCheckin();
						} else {
							this._buildStatusDialog.showActionBar(false);
							this._buildStatusDialog.requestStartedHandler({
								progressMessage: ecm.messages.viewer_status_checking_in,
								delay: 1
							});
							this._checkInMergeSplit(json);
						}
					}
					break;
				case this._ERROR_STATUS:
					this._showErrorDialog("document_build_failed");
					if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT && this.addContentItemDialog && this.addContentItemDialog.open)
						this.addContentItemDialog.onCancel();
					else if (ecm.model.desktop.mergeSplitShowCheckIn && this.checkInDialog && this.checkInDialog.open)
						this.checkInDialog.onCancel();
					this._hideBuildStatusDialog();
					this.logDebug(methodName, "Doc builder commit error.");
					break;
				case this._CANCEL_STATUS:
					this._hideBuildStatusDialog();
					this.logDebug(methodName, "Doc builder commit cancelled.");
					break;
				case this._USER_CANCEL_STATUS:
					this._hideBuildStatusDialog();
					this.logDebug(methodName, "Doc builder commit cancelled by user.");
					break;
				}
				this._documentSaveMode = null;
				this._buildTaskId = null;
				this._taskCallbackId = null;
			}
			this.logExit(methodName + " - " + this.viewerId);
		},
		
		_setRedactionReasonEvent: function() {
			var methodName = "_setRedactionReasonEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			
			if ( this.viewer && this.viewer.getActiveAnnotation ) {
				var annotation = this.viewer.getActiveAnnotation();
				var annotProperties = this.viewer.getAnnotation(annotation);
				var selectedReason = this.getAnnotationProperty(this.viewer.getDelimiter(), annotProperties, "F_REASON_CODE");
				this.logDebug(methodName, "Annotation's current reason value is: " + selectedReason);
				
				// String startsWith() is not supported by IE11.
				var redactionType = "[REDACT]";
				if ( annotProperties && annotProperties.substring(0, redactionType.length).indexOf( redactionType ) == 0 ) {
					if (this._selectReasonDialog)
						this._selectReasonDialog.destroyRecursive(false);
					
					this._selectReasonDialog = new SelectReasonDialog({
						availableReasons: this._viewoneBootstrap.editRedactionReasons, 
						selectedReason: selectedReason,
						onHide: lang.hitch(this, function() {
							var newReason = this._selectReasonDialog.selectedReason;
							// If a reason was selected and it changed, assign it.
							if (newReason && newReason != selectedReason) {
								this.logDebug(methodName, "Assigning redaction reason: " + newReason);
								this.viewer.modifyAnnotation(annotation, "CUSTOMPROPERTY = F_REASON_CODE=" + newReason);
							}
						})
					});
					this._selectReasonDialog.show();
				}
			}
			
			this.logExit(methodName + " - " + this.viewerId);
		},
		
		_toggleRedactionsEvent: function() {
			var methodName = "_toggleRedactionsEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			if ( this.viewer ) {
				this._isSetRedactionTransparent = !this._isSetRedactionTransparent;
				this.viewer.setAnnotationsSemiTransparent(this._isSetRedactionTransparent, "redacttypes");
			}
			this.logExit(methodName + " - " + this.viewerId);			
		},
		
		_updateCustomButtonState: function() {
			this.viewer && this.viewer.evaluateCustomButtons && this.viewer.evaluateCustomButtons();
		},

		_checkoutMergeSplitIfEnabled: function(callback) {
			if (this._isCheckoutItemEnabled(this.item)) {
				// Checkout the document.
				this._checkoutMergeSplit(lang.hitch(this, function(){
					if (lang.isFunction(callback)) {
						callback();
					} 
				}));
			} else {
				if (lang.isFunction(callback)) {
					callback();
				}
			}
		},

		_checkOutItemEvent: function() {
			var methodName = "_checkOutItemEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			if (this.viewer && this.isMergeSplitModeEnabled() && this.item && this._isCheckoutItemEnabled(this.item)) {
				this._checkoutMergeSplit();
			}
			this.logExit(methodName + " - " + this.viewerId);
		},

		_checkInItemEvent: function() {
			var methodName = "_checkInItemEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			if (this.viewer && this.isMergeSplitModeEnabled() && this.item && this._isCheckinItemEnabled(this.item)) {
				setTimeout(lang.hitch(this, function() {
					this._documentSaveMode = this.DOCUMENT_SAVE_MODE_NEW_VERSION;
					// Commit the doc builder changes.
    				this._buildTaskId = this.viewer.commit();
				}), 0);
			}
			this.logExit(methodName + " - " + this.viewerId);
		},

		_cancelCheckoutItemEvent: function() {
			var methodName = "_cancelCheckoutItemEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			if (this.viewer && this.isMergeSplitModeEnabled() && this.item && this._isCancelCheckoutItemEnabled(this.item)) {
				this._cancelCheckoutMergeSplit(false);
			}
			this.logExit(methodName + " - " + this.viewerId);
		},

		_addItemEvent: function() {
			var methodName = "_addItemEvent";
			this.logEntry(methodName + " - " + this.viewerId);
			if (this.viewer && this.isMergeSplitModeEnabled() && this.item && this._isAddItemEnabled(this.item)) {
				setTimeout(lang.hitch(this, function() {
					this._documentSaveMode = this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT;
					// Commit the doc builder changes.
    				this._buildTaskId = this.viewer.commit();
				}), 0);
			}
			this.logExit(methodName + " - " + this.viewerId);
		},

		documentChangeEvent: function(id) {
			this.logEntry("documentChangeEvent - " + this.viewerId);
			if (this._changingMode || this._isLoadingInProgress())
				return;
			if (this.isMergeSplitModeEnabled() && !this._dirty)
				this._checkoutMergeSplitIfEnabled();
			this._setDirty(true);
			this._updateCustomButtonState();
			this.logExit("documentChangeEvent - " + this.viewerId);
		},

		modeChangeStartEvent: function(id, mode, callbackId) {
			if (this._lastMode && this._lastMode == mode) {
				this._doCallback(callbackId, this._CANCEL_STATUS);
				return;
			}
			this._changingMode = true;
			this.logEntry("modeChangeStartEvent - " + this.viewerId + ", " + "mode");
			if (mode == "docbuilder" && this._dirty) {
				this._docbuilderReloadAnnotationsCallbackId = callbackId;
				this.viewer.reloadAnnotations();
			} else if(mode == "redaction") {
				if (this._dirty) {
					this._showYesNoCancelDialog(lang.hitch(this, function() {
						this.saveAnnotations(lang.hitch(this, function() {
							this._selectDocumentSaveMode(callbackId);		
						}));
					}), lang.hitch(this, function() {
						this._redactionReloadAnnotationsCallbackId = callbackId;
						this.viewer.reloadAnnotations();
					}), lang.hitch(this, function() {
						this._doCallback(callbackId, this._CANCEL_STATUS);
					}), string.substitute(ecm.messages.viewer_prompt_save_changes, [
						this.item.name
					]));
				} else {
					this._selectDocumentSaveMode(callbackId);		
				}
			} else if(this._lastMode == "redaction" && mode == "annotation") {
				var labelChanged = !Utils.isLabelAnnotationsEqual(this.viewer, this._redactionLabelAnnotations);
				if (this._dirty || labelChanged) {
					this._showConfirmationDialog(lang.hitch(this, function() {
						this._setViewThenChangeMode(mode, callbackId);
					}), lang.hitch(this, function() {
						this._doCallback(callbackId, this._CANCEL_STATUS);
					}), ecm.messages.viewer_warn_has_changes + " " + ecm.messages.viewer_warn_confirm_exit);
				} else {
					this._setViewThenChangeMode(mode, callbackId);
				}
			} else {
				this._setViewThenChangeMode(mode, callbackId);
			}
			this.logExit("modeChangeStartEvent - " + this.viewerId);
		},

		modeChangeCancelEvent: function(id, mode) {
			this._changingMode = false;
			this.logEntry("modeChangeCancelEvent - " + this.viewerId);
			if (mode == "docbuilder")
				this._cancelMergeSplitMode("document_builder_switch_failed");
			this.logExit("modeChangeCancelEvent - " + this.viewerId);
		},

		_cancelMergeSplitMode: function(messageKey) {
			this._showErrorDialog(messageKey);
			this._mergeSplitModeFailed = true;
			this.onMergeSplitModeFailed();
		},

		getAnnotationProperty: function(annotationDelimiter, annotProp, propName) {
		   var customVal = null;
		  
		   if (annotProp.indexOf(propName) > -1)
		   {
		      var value = annotProp.substring(annotProp.indexOf(propName));
		      if (value.indexOf(annotationDelimiter) > -1)
		      {
		         value = value.substring(0,value.indexOf(annotationDelimiter));
		      }

		      if (value.indexOf("=") > -1)
		      {
		         value = value.substring(value.indexOf("=")+1);
		      }

		      customVal = value.trim();
		   }
		   
		   return customVal;
		},
		
		_performDownload: function(responseUrl) {
			ecm.model.desktop.getActionsHandler(lang.hitch(this, function(actionsHandler) {
				var parsedUrl = new url(responseUrl);
				var params = ioQuery.queryToObject(parsedUrl.query);

				params.forDownload = "true";
				actionsHandler._performDownload("v1/viewoneAction", "", params);
			}));
		},

		_setViewThenChangeMode: function(mode, callbackId) {
			this.logEntry("_setViewThenChangeMode - mode: " + mode + ", callbackId: " + callbackId);
			this.viewer.setView(mode == "docbuilder" ? 2 : this._initialAnnotationMode);
			this.viewer.setEventHandlerCallbackResponse(callbackId, this._OK_STATUS);
			this.logExit("_setViewThenChangeMode");
		},


		_doCallback: function(callbackId, state) {
			this.logEntry("doCallback - callback Id: " + callbackId + ", state: " + state);
			this.viewer.setEventHandlerCallbackResponse(callbackId, state);
			this.logExit("doCallback");
		},

		_isRoundtripRedactionSupported: function() {
			var supported = false;

			if (this.item && this.item.repository && this.item.repository.type) {
				supported = this.item.repository.type == "cm" || this.item.repository.type == "p8";
			}

			return supported;
		},

		_selectDocumentSaveMode: function(modeChangeCallbackId) {
			if (this._isRoundtripRedactionSupported()) {
				this._documentSaveMode = this._getDocumentSaveMode();
				var canCheckoutDocument = this._canCheckoutDocument();
				var isVersioningavailable = this._isVersioningAvailable();
				var userSelectMode = false;
				if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_NEW_VERSION) {
					if (canCheckoutDocument) {
						this._checkoutRedaction();
					} else {
						// if default save mode is new version but document can't be checked out, then ask user to save as new doc or local file
						userSelectMode = true;
					}
				} else if (this._documentSaveMode == this.DOCUMENT_SAVE_MODE_USER_SELECT) {
					userSelectMode = true;
				}

				if (userSelectMode == true) {
					if (this.selectSaveMode)
						this.selectSaveMode.destroyRecursive(false);

					var repository = ecm.model.desktop.getRepository(this.item.repository.id);
					var canAddItem = repository ? (repository.getPrivilege("addItem") && (!ecm.model.desktop.fileIntoFolder || repository.getPrivilege("foldering"))) : false;

					// if document can be checked out, then ask user to choose save mode from "new version", "new document", or "local file"
					// For CM8, if document can be checked out, but is not versionable, save options will be "new content", "new document", or "local file"
					if (canCheckoutDocument && (isVersioningavailable || this.item.repository.type == "cm")) {
						var newVersionButton = ecm.messages.viewer_redaction_add_new_version_button;
						if (!isVersioningavailable) {
							newVersionButton = ecm.messages.viewer_redaction_add_new_version_button_version_never;
						}
						if (canAddItem) {
							// let user select from create new document, create new version, or save as local file
							var dialogText = ecm.messages.viewer_redaction_add_document_confirmation_question;
							if (!isVersioningavailable) {
								dialogText = ecm.messages.viewer_redaction_add_document_confirmation_question_version_never;
							}

							this.selectSaveMode = this._createYesNoCancelDialog(lang.hitch(this, function() {
								this._documentSaveMode = this.DOCUMENT_SAVE_MODE_LOCAL_FILE;
								this.selectSaveMode.hide();
								this._setViewThenChangeMode("redaction", modeChangeCallbackId);
							}), lang.hitch(this, function() {
								this._documentSaveMode = this.DOCUMENT_SAVE_MODE_NEW_VERSION;
								this._checkoutRedaction();
								this.selectSaveMode.hide();
								this._setViewThenChangeMode("redaction", modeChangeCallbackId);
							}), lang.hitch(this, function(){
								this._documentSaveMode = this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT;
								this.selectSaveMode.hide();
								this._setViewThenChangeMode("redaction", modeChangeCallbackId);
							}), dialogText, ecm.messages.viewer_redaction_save_mode_title, ecm.messages.viewer_redaction_add_local_file_button, newVersionButton,  ecm.messages.viewer_redaction_add_document_button);
							this.selectSaveMode.addButton(ecm.messages.cancel, lang.hitch(this, function() {
								this.selectSaveMode.hide();
								this._doCallback(modeChangeCallbackId, this._CANCEL_STATUS);
							}), false, true);
						} else {
							// let user select from create new version or save as local file
							var dialogText = ecm.messages.viewer_redaction_new_version_confirmation_question;
							if (!isVersioningavailable) {
								dialogText = ecm.messages.viewer_redaction_new_version_confirmation_question_never;
							}

							this.selectSaveMode = this._createConfirmationDialog(lang.hitch(this, function() {
								this._documentSaveMode = this.DOCUMENT_SAVE_MODE_LOCAL_FILE;
								this._setViewThenChangeMode("redaction", modeChangeCallbackId);
								this.selectSaveMode.hide();
							}), lang.hitch(this, function() {
								this._documentSaveMode = this.DOCUMENT_SAVE_MODE_NEW_VERSION;
								this._setViewThenChangeMode("redaction", modeChangeCallbackId);
							}), dialogText, ecm.messages.viewer_redaction_save_mode_title, ecm.messages.viewer_redaction_add_local_file_button, newVersionButton);
							this.selectSaveMode.addButton(ecm.messages.cancel, lang.hitch(this, function() {
								this.selectSaveMode.hide();
								this._doCallback(modeChangeCallbackId, this._CANCEL_STATUS);
							}), false, true);
						}
					} else if (canAddItem) {
						// let user select from create new document or save as local file
						this.selectSaveMode = this._createConfirmationDialog(lang.hitch(this, function() {
							this._documentSaveMode = this.DOCUMENT_SAVE_MODE_LOCAL_FILE;
							this._setViewThenChangeMode("redaction", modeChangeCallbackId);
							this.selectSaveMode.hide();
						}), lang.hitch(this, function() {
							this._documentSaveMode = this.DOCUMENT_SAVE_MODE_NEW_DOCUMENT;
							this._setViewThenChangeMode("redaction", modeChangeCallbackId);
						}), ecm.messages.viewer_redaction_new_document_confirmation_question, ecm.messages.viewer_redaction_save_mode_title, ecm.messages.viewer_redaction_add_local_file_button, ecm.messages.viewer_redaction_add_document_button);
						this.selectSaveMode.addButton(ecm.messages.cancel, lang.hitch(this, function() {
							this.selectSaveMode.hide();
							this._doCallback(modeChangeCallbackId, this._CANCEL_STATUS);
						}), false, true);
					} else {
						// only save as local file is allowed for current user
						userSelectMode = false;
						this._documentSaveMode = this.DOCUMENT_SAVE_MODE_LOCAL_FILE;
						this._setViewThenChangeMode(modeChangeCallbackId);
					}

					if (userSelectMode)
						this.selectSaveMode.show();
					else
						this._setViewThenChangeMode("redaction", modeChangeCallbackId);
				}
				else
					this._setViewThenChangeMode("redaction", modeChangeCallbackId);
			} else {
				this._documentSaveMode = this.DOCUMENT_SAVE_MODE_LOCAL_FILE;
				this._setViewThenChangeMode("redaction", modeChangeCallbackId);
			}
		},

		_createYesNoCancelDialog: function(yesCallback, noCallback, cancelCallback, text, title, yesLabel, noLabel, cancelLabel) {
			var confirmDialog = new YesNoCancelDialog({
				title: title ? title : ecm.messages.confirmation_icon_tooltip,
				text: text,
				yesLabel: yesLabel ? yesLabel : ecm.messages.yes,
				noLabel: noLabel ? noLabel : ecm.messages.no,
				cancelButtonLabel: cancelLabel ? cancelLabel : ecm.messages.cancel,
				onYes: function() {
					confirmDialog.hide();
					if (lang.isFunction(yesCallback))
						yesCallback();
				},
				onNo: function() {
					confirmDialog.hide();
					if (lang.isFunction(noCallback))
						noCallback();
				},
				onCancel: function() {
					if (lang.isFunction(cancelCallback))
						cancelCallback();
				}
			});
			return confirmDialog;
		},

		_showYesNoCancelDialog: function(yesCallback, noCallback, cancelCallback, text, title, yesLabel, noLabel) {
			if (this._confirmDialog)
				this._confirmDialog.destroyRecursive();
			this._confirmDialog = this._createYesNoCancelDialog(yesCallback, noCallback, cancelCallback, text, title, yesLabel, noLabel);
			this._confirmDialog.show();
		},

		_createConfirmationDialog: function(okCallback, cancelCallback, text, title, okLabel, cancelLabel) {
			var confirmDialog = new ConfirmationDialog({
				title: title ? title : ecm.messages.confirmation_icon_tooltip,
				text: text,
				buttonLabel: okLabel ? okLabel : ecm.messages.ok,
				cancelButtonLabel: cancelLabel? cancelLabel : ecm.messages.cancel,
				_onShow: function() {
					confirmDialog.setWidth(360);
				},
				onExecute: function() {
					if (lang.isFunction(okCallback))
						okCallback();
				},
				onCancel: function() {
					if (lang.isFunction(cancelCallback))
						cancelCallback();
				},
			});
			return confirmDialog;
		},

		_showConfirmationDialog: function(okCallback, cancelCallback, text, title, okLabel) {
			if (this._confirmDialog)
				this._confirmDialog.destroyRecursive();
			this._confirmDialog = this._createConfirmationDialog(okCallback, cancelCallback, text, title, okLabel);
			this._confirmDialog.show();
		},

		_updateAfterAdd: function(newItem, srcItem, callback) {
			if (srcItem.origItem.parent) {
				// Refresh the parent to show the new item.
				this._refreshItem(srcItem.origItem.parent);
			}
			// Retrieve the "origItem" from the desktop window for the new item.
			// Use the repository from the current origItem that came from the desktop window.
			this._retrieveItem(srcItem.origItem.repository, newItem, lang.hitch(this, function(origItem) {
				// Now retrieve the parent for origItem.
				if (newItem.parent) {
					var newItemParent = newItem.parent;
					this._retrieveItem(srcItem.origItem.repository, newItemParent, lang.hitch(this, function(origItemParent) {
						origItem.parent = origItemParent;
						newItem.origItem = origItem;
						callback(origItem);
					}))
				} else {
					newItem.origItem = origItem;
					callback(origItem);
				}
			}));
		},

		_retrieveItem: function(repository, item, callback, version) {
			repository.retrieveItem(item.id, lang.hitch(this, function(retrievedItem) {
				if (lang.isFunction(callback))
					callback(retrievedItem);
			}), item.template, version, version == "current" ? item.vsId : null, null, null, {
				requestFailedCallback: lang.hitch(this, function() {
					this.logError("failed to retrieve the item: " + item.id);
				})
			});
		},

		_onAddDocumentCompleted: function(newItem, srcItem) {
            this._updateAfterAdd(newItem, srcItem, lang.hitch(this, function(newOrigItem) {
                if (this.item.id)
                    this.onItemAdd(newOrigItem);
				else
					this._resetItem(newOrigItem);
            }));
		},

		onItemUpdate: function(item) {
			this.inherited(arguments);
			this._updateCustomButtonState();
		},

		_resetItem: function(item) {
			this._lastMode = null;
			this.closeItem();
			this.setItem(item);
			this.onItemUpdate(item);
			// TODO: remove above line and uncomment following line to reset without reloading
//			this.setItem(item, 0, true);
			this._loadViewoneBootstrap(lang.hitch(this, function() {
				this.showItem();
			}));
		},

		_addDocument: function(item, folder, json, repository, mergeSplitConfig) {
			var sourceItems = this._gatherSourceItems(mergeSplitConfig, item);
			this.addContentItemDialog = new AddViewoneEditedItemDialog({
				destroyWhenFinished: true,
				sourceItems: sourceItems,
				saveAsTypeShown: this.isMergeSplitModeEnabled(),
				saveAsTypeDefault: mergeSplitConfig ? mergeSplitConfig.config.mimeType : null,
				_statusMessage: ecm.messages.viewer_status_adding
			});
			this.addContentItemDialog.own(aspect.after(this.addContentItemDialog, "onViewoneBuild", lang.hitch(this, function(build) {
				if (build) {
					if (this._taskCallbackId) {
						this._showBuildStatusDialog(lang.hitch(this, function() {
							this.addContentItemDialog.onCancel();
						}));
						if (mergeSplitConfig) {
							mergeSplitConfig.allow = true;
							mergeSplitConfig.config = {
								mimeType: this.addContentItemDialog.getViewoneContentMimeType()
							};
							this._doCallback(this._taskCallbackId, JSON.stringify(mergeSplitConfig));
						} else {
							this._doCallback(this._taskCallbackId, this._OK_STATUS);
						}
					}
				}
			})));
			this.addContentItemDialog.own(aspect.after(this.addContentItemDialog, "onCancel", lang.hitch(this, function() {
				if (this._taskCallbackId) {
					if (mergeSplitConfig) {
						mergeSplitConfig.allow = false;
						this._doCallback(this._taskCallbackId, JSON.stringify(mergeSplitConfig));
					} else {
						this._doCallback(this._taskCallbackId, this._CANCEL_STATUS);
					}
					this._taskCallbackId = null;
				}
			})));

			var partFileName = this._getPartFileNameForAdd();
			this.addContentItemDialog.setDaejaContent(json, partFileName);

			// When there is a parentFolder for the add, allow the user to select a different folder.
			this.addContentItemDialog.allowBrowseParentFolder = true;

			if (this._getDocumentAddMode() == this.DOCUMENT_ADD_MODE_ENTRY_TEMPLATE) {
				this.addContentItemDialog.showUsingTemplateItem(repository, folder, true, false, lang.hitch(this, function(newItem) {
					this._onAddDocumentCompleted(newItem, item);
				}));
			} else {
				if (folder && folder.repository.teamspacesEnabled) {
					folder.retrieveTeamspace(lang.hitch(this, function(teamspace) {
						this.addContentItemDialog.show(repository, folder, true, false, lang.hitch(this, function(newItem) {
							this._onAddDocumentCompleted(newItem, item);
						}), teamspace);
					}));
				} else {
					this.addContentItemDialog.show(repository, folder, true, false, lang.hitch(this, function(newItem) {
						this._onAddDocumentCompleted(newItem, item);
					}));
				}
			}
		},

		_gatherSourceItems: function(mergeSplitConfig, baseItem) {
			var items = [];
			if (baseItem && baseItem.id)
				items.push(baseItem);
			
			// If in doc builder mode and not permanent redaction mode...
			if (mergeSplitConfig) {
				array.forEach(mergeSplitConfig.actions, lang.hitch(this, function(action) {
					if (action.type == "LoadDocument") {
						var docUrl = action.source.location;
						if (docUrl) {
							var item = this._findSourceItemByUrl(docUrl);
							if (item && item.id && (!baseItem || !baseItem.id || baseItem.id != item.id))
								items.push(item);
						}
					}
				}));
			}
			return items;
		},

		_findSourceItemByUrl: function(docUrl) {
			var item;
			var viewers = this.mergeSplitContext.getViewers();
			array.some(viewers, function(viewer) {
				if (!!viewer.docURL && docUrl.length > viewer.docURL.length && docUrl.indexOf(viewer.docURL, docUrl.length - viewer.docURL.length) > -1)
					item = viewer.item;
				return !!item;
			});
			return item;
		},

		_checkout: function(callback) {
			this._retrieveItemToCheckOut(lang.hitch(this, function(freshItem) {
				this.getItem(lang.hitch(this, function(item) {
					if (item.locked) {
						this._updateItem(item);
						if (lang.isFunction(callback)) {
							callback(item, true);
						}
					} else {
						item.repository.lockItems([ item ], lang.hitch(this, function(returnedItemsJson) {
							if (returnedItemsJson && returnedItemsJson.length && (item.id == returnedItemsJson[0].id)) {
								this._updateItem(item);
								if (lang.isFunction(callback)) {
									callback(item, false);
								}
							}
						}), null, lang.hitch(this, function() {
							this.logError("failed to lock items");
						}));
					}
				}), true, freshItem);
			}));
		},

		_updateItem: function(item) {
			if (item.origItem) {
				item.originalId = item.origItem.id;
				item.origItem.update(item);
				delete item.originalId;
			}
			this.onItemUpdate(item);
		},

		_retrieveItemToCheckOut: function(callback) {
			var repository = ecm.model.desktop.getRepository(this.item.repository.id);
			this._retrieveItem(repository, this.item, lang.hitch(this, function(currentVersion) {
				if (currentVersion.locked && !this._isCheckinItemEnabled(currentVersion)) {
					this._showCheckoutConflictMessage();
				} else if (currentVersion.id == this.item.id) {
					callback(currentVersion);
				} else {
					this._showYesNoCancelDialog(callback, lang.hitch(this, function() {
						this._retrieveItem(this.item.repository, currentVersion, lang.hitch(this, function(currentOrigItem) {
							this._refreshItem(this.item.parent);
							this._resetItem(currentOrigItem);
						}), "current");
					}), null, ecm.messages.viewer_checkout_confirm, null, ecm.messages.viewer_checkout_continue, ecm.messages.viewer_checkout_reload);
				}
			}), "current");
		},

		_showCheckoutConflictMessage: function() {
			if (!this._checkoutConflictDialog) {
				this._checkoutConflictDialog = new MessageDialog({
					buttonLabel: ecm.messages.viewer_checkout_conflict_title,
					text: ecm.messages.viewer_checkout_conflict,
					tooltip: ecm.messages.viewer_checkout_conflict_title
				});
			}
			this._checkoutConflictDialog.show();
		},

		_onCheckInCompleted: function(item, fieldErrors, callback, onError) {
			if (item && !fieldErrors) {
				this._setDirty(false);

				if (this._editItem != item) {
					// Returned item is not the same so refresh...
					if (this._editItem.origItem) {
						// propagate the origItem...
						item.origItem = this._editItem.origItem;
					}

					// replace...
					this._editItem = item;
				}

				this._updateItem(item);
				if (lang.isFunction(callback)) {
					callback(item.origItem);
				}
			} else {
				if (lang.isFunction(onError)) {
					onError();
				}
			}
		},

		_checkIn: function(json, callback, onError, showDialog, mergeSplitConfig) {
			this.getItem(lang.hitch(this, function(item) {
				if (showDialog) {
					this.checkInDialog = new CheckInViewoneEditedItemDialog({
						destroyWhenFinished: true,
						sourceItems: [ item ],
						saveAsTypeShown: this.isMergeSplitModeEnabled(),
						saveAsTypeDefault: mergeSplitConfig ? mergeSplitConfig.config.mimeType : null,
						_statusMessage: ecm.messages.viewer_status_checking_in
					});
					this.checkInDialog.own(aspect.after(this.checkInDialog, "onViewoneBuild", lang.hitch(this, function(build) {
						if (build) {
							if (this._taskCallbackId) {
								if (mergeSplitConfig) {
									this._showBuildStatusDialog(lang.hitch(this, function() {
										this.checkInDialog.onCancel();
									}));
									mergeSplitConfig.allow = true;
									mergeSplitConfig.config = {
										mimeType: this.checkInDialog.getViewoneContentMimeType()
									};
									this._doCallback(this._taskCallbackId, JSON.stringify(mergeSplitConfig));
								} else {
									this._doCallback(this._taskCallbackId, this._OK_STATUS);
								}
							}
						}
					})));
					this.checkInDialog.own(aspect.after(this.checkInDialog, "onCancel", lang.hitch(this, function() {
						if (this._taskCallbackId) {
							if (mergeSplitConfig) {
								mergeSplitConfig.allow = false;
								this._doCallback(this._taskCallbackId, JSON.stringify(mergeSplitConfig));
							} else {
								this._doCallback(this._taskCallbackId, this._CANCEL_STATUS);
							}
							this._taskCallbackId = null;
						}
					})));

					var partFileName = this._getPartFileNameForCheckin();
					this.checkInDialog.setDaejaContent(json, partFileName);

					this.checkInDialog.showCheckin(item.repository, item, lang.hitch(this, function(item) {
						this._onCheckInCompleted(item, null, callback, onError);
					}));
				} else {
					item.checkInDaejaContent(json, lang.hitch(this, function(item, fieldErrors) {
						this._onCheckInCompleted(item, fieldErrors, callback, onError);
					}), lang.hitch(this, function(response) {
						if (lang.isFunction(onError)) {
							onError();
						}
					}), this._getPartFileNameForCheckin());
				}
			}));
		},

		_cancelCheckout: function(callback) {
			if (this.item && this.item.repository && !this._cancellingCheckout) {
				this._cancellingCheckout = true;
				this.item.repository.unlockItems([ this.item ], lang.hitch(this, function() {
					delete this._cancellingCheckout;
					this._setDirty(false);
					this._updateItem(this.item);
					if (lang.isFunction(callback)) {
						callback(this.item);
					}
				}), lang.hitch(this, function(response, errors) {
					this.logError("failed to unlock items");
					delete this._cancellingCheckout;
				}));
			}
		},

		_getItemParentFolder: function(item, callback) {
			var parentFolder;

			if (item.parent) {
				var itemParent = item.parent;
				if (itemParent && itemParent.isFolder && itemParent.isFolder()) {
					if (itemParent.isInstanceOf(ecm.model.Favorite)) {
						parentFolder = itemParent.item;
					} else if (itemParent.isInstanceOf(ecm.model.WorkItem)) {
						parentFolder = itemParent.contentItem;
					} else {
						parentFolder = itemParent;
					}
				}
				if (lang.isFunction(callback)) {
					callback(parentFolder);
				}
			} else if (item.origItem && item.origItem.parent) {
				// The original item was created in the desktop window.
				// We need to retrieve the parent folder item under this window.
				var itemParent = item.origItem.parent;

				// The declaredClass test works on an item from another window, isInstanceOf() does not.
				if (itemParent.declaredClass == "ecm.model.Favorite") {
					parentFolder = itemParent.item;
				} else if (itemParent.declaredClass == "ecm.model.WorkItem") {
					parentFolder = itemParent.contentItem;
				} else {
					parentFolder = itemParent;
				}

				if (parentFolder && parentFolder.isFolder && parentFolder.isFolder()) {
					// Retrieve the parent folder item under this window.
					this._retrieveItem(item.repository, parentFolder, lang.hitch(this, function(retrievedParent) {
						if (retrievedParent && retrievedParent.isFolder && retrievedParent.isFolder()) {
							item.parent = retrievedParent;
							if (lang.isFunction(callback)) {
								callback(retrievedParent);
							}
						} else {
							if (lang.isFunction(callback)) {
								callback();
							}
						}
					}));
				} else {
					if (lang.isFunction(callback)) {
						callback();
					}
				}
			} else {
				if (lang.isFunction(callback)) {
					callback();
				}
			}
		},

		_addDocumentRedaction: function(json) {
			this.getItem(lang.hitch(this, function(item) {
				this._retrieveParentThenAdd(item, json);
			}));
		},

		_addDocumentMergeSplit: function(json, mergeSplitConfig) {
			if (this.item.id) {
				this.getItem(lang.hitch(this, function(item) {
					this._retrieveParentThenAdd(item, json, mergeSplitConfig);
				}));
			} else {
				var sourceItem = this._retrieveFirstSourceItem(mergeSplitConfig);
				if (sourceItem) {
					var repository = ecm.model.desktop.getRepository(sourceItem.repository.id);
					this._retrieveItem(repository, sourceItem, lang.hitch(this, function(item) {
						item.origItem = sourceItem;
						this._retrieveParentThenAdd(item, json, mergeSplitConfig);
					}), "specific");
				}
			}
		},

		_retrieveParentThenAdd: function(item, json, mergeSplitConfig) {
			var repository = ecm.model.desktop.getRepository(item.repository.id);
			this._getItemParentFolder(item, lang.hitch(this, function(parentFolder) {
				if (parentFolder) {
					this._addDocument(item, parentFolder, json, repository, mergeSplitConfig);
				} else {
					item.retrieveFoldersFiledIn(lang.hitch(this, function(foldersFiledIn) {
						// If the item is filed in just 1 folder, set that folder as the parent folder for the add dialog.
						// In this mode the user can't change the parent folder, as per the add dialog design.
						parentFolder = (foldersFiledIn && foldersFiledIn.length == 1) ? foldersFiledIn[0] : null;
						item.parent = parentFolder;
						this._addDocument(item, parentFolder, json, repository, mergeSplitConfig);
					}));
				}
			}));
		},

		_retrieveFirstSourceItem: function(mergeSplitConfig) {
			var sourceItem;
			array.some(mergeSplitConfig.actions, lang.hitch(this, function(action) {
				if (action.type == "LoadDocument") {
					var docUrl = action.source.location;
					if (docUrl) {
						var item = this._findSourceItemByUrl(docUrl);
						if (item && item.id && item.repository && item.repository.id)
							sourceItem = item;
					}
				}
				return !!sourceItem;
			}));
			return sourceItem;
		},

		_checkoutRedaction: function() {
			this._checkout(lang.hitch(this, function(item) {
				this._redactionCheckoutDocument = true;
			}));
		},
		
		_checkInRedaction: function(json) {
			this._checkIn(json, lang.hitch(this, function(item) {
				// this._hideBuildStatusDialog();
				this._redactionCheckoutDocument = false;
				this._redactionSavedItem = item;

				// lock item again so user can save new redaction again
				this._checkoutRedaction();
			}), lang.hitch(this, function(response) {
				// this._hideBuildStatusDialog();
				// show error dialog
				this._showErrorDialog("viewer_redaction_checkin_failed");
			}), false); // By design, the check in dialog is not shown for permanent redaction check in.
		},
		
		_cancelCheckoutRedaction: function(closingViewerWindow) {
			if (this._redactionCheckoutDocument) {
				this._cancelCheckout(lang.hitch(this, function(item){
					this._redactionCheckoutDocument = false;

					if (!closingViewerWindow && this._redactionSavedItem)
						this._resetItem(this._redactionSavedItem);
				}));
			}
		},

		_checkoutMergeSplit: function(callback) {
			this._checkout(lang.hitch(this, function(item, alreadyCheckedOut) {
				this._mergeSplitCheckoutDocument = !alreadyCheckedOut;

				if (lang.isFunction(callback)) {
					callback(item);
				}
			}));
		},

		_checkInMergeSplit: function(json, mergeSplitConfig) {
			this._checkIn(json, lang.hitch(this, function(item) {
				this._hideBuildStatusDialog();
				this._mergeSplitCheckoutDocument = false;
				this._resetItem(item);
			}), lang.hitch(this, function(response) {
				this._hideBuildStatusDialog();
				// show error dialog
				this._showErrorDialog("document_builder_checkin_failed");
			}), ecm.model.desktop.mergeSplitShowCheckIn, mergeSplitConfig);
		},

		_cancelCheckoutMergeSplit: function(closingViewerWindow, switchingMode) {
			// Allow the user to directly cancel the checkout, even if the document was not checked out
			// after merge & split changes.
			//
			// If the viewer window is closing, only cancel the checkout if the document was checked out
			// after merge & split changes.
			if (!closingViewerWindow || this._mergeSplitCheckoutDocument) {
				this._cancelCheckout(lang.hitch(this, function(item){
					this._mergeSplitCheckoutDocument = false;
					if (!closingViewerWindow && !switchingMode)
						this._resetItem(item);
				}));
			}
		},

		_startViewer: function(viewerId, retry) {
			var methodName = "_startViewer";
			if (window.com && window.com.ibm && window.com.ibm.dv && window.com.ibm.dv.client && window.com.ibm.dv.client.Viewer && window.com.ibm.dv.client.Viewer.start) {
				for (prop in window.com.ibm.dv.client.Viewer) {
					var propVal = window.com.ibm.dv.client.Viewer[prop];
					this.logDebug(methodName, "Viewer." + prop + " = " + propVal);
				}
				this.logDebug(methodName, "Starting " + viewerId + ", on retry " + retry);
				window.com.ibm.dv.client.Viewer.start(viewerId);
			} else if (retry < 5) {
				this.logDebug(methodName, "Viewer not found, starting delayed (" + retry + ")");
				setTimeout(lang.hitch(this, function() {
					this._startViewer(viewerId, ++retry);
				}), 1000);
			} else {
				this._startingViewer = false;
				this.logError(methodName, "Retry limit exceeded.  Viewer start failed.");
			}
		},

		/*  Method to be called when viewer download has completed and code is available to start viewer. */
		viewerReadyToStart: function() {
			this._loadingBootstrap = false;
			this._loadedBootstrap = true;

			var methodName = "viewerReadyToStart - id=" + this.viewerId;
			this.logEntry(methodName);
			var viewerLoaded = window[this.viewerId] && typeof (window[this.viewerId].openFile) == 'function';
			if (window.viewoneLoader && !viewerLoaded && !this._loadingViewer && this._loadedConfig) {
				this._startingViewer = true;
				this._loadingViewer = true;
				//window.viewoneLoader['isReady'] = true;
				this.logDebug(methodName, "attaching viewone listener methods");
				//check the viewer definition is present
				var viewerDefinition = document.getElementById(this.viewerId);
				if (viewerDefinition) {
					//attach viewer listener methods.
					window[this.viewerId + "_listener"] = {};

					var v1Interface = window[this.viewerId + "_listener"];
					this.logInfo("Viewer listener created: " + this.viewerId + "_listener");
					v1Interface.onSessionCheck = lang.hitch(this, "viewoneSessionCheck");
					v1Interface.onViewerReady = lang.hitch(this, "viewerReadyEvent");
					v1Interface.onDocReady = lang.hitch(this, "documentReadyEvent");
					v1Interface.onAnnotLoaded = lang.hitch(this, "annotLoadedEvent");//used for restore also
					v1Interface.onAnnotEdit = lang.hitch(this, "annotEditEvent");
					v1Interface.onAnnotRestore = lang.hitch(this, "annotRestoredEvent");
					v1Interface.onAnnotSaved = lang.hitch(this, "annotSavedEvent");
					v1Interface.onAnnotSaveFailure = lang.hitch(this, "annotSaveFailedEvent");
					v1Interface.onPrintStart = lang.hitch(this, "printStartEvent");
					v1Interface.onPrintFinish = lang.hitch(this, "printFinishEvent");
					v1Interface.onAnnotLoadFailure = lang.hitch(this, "annotLoadFailedEvent");
					v1Interface.onDocLoadFailure = lang.hitch(this, "documentLoadFailedEvent");
					v1Interface.onViewerModeChanged = lang.hitch(this, "modeChangeEvent");
					v1Interface.onTaskStart = lang.hitch(this, "taskStartEvent");
					v1Interface.onTaskStarted = lang.hitch(this, "taskStartedEvent");
					v1Interface.onTaskStatus = lang.hitch(this, "taskStatusEvent");
					v1Interface.onDocumentChanged = lang.hitch(this, "documentChangeEvent");
					v1Interface.onModeChangeStarted = lang.hitch(this, "modeChangeStartEvent");
					v1Interface.onModeChangeCancelled = lang.hitch(this, "modeChangeCancelEvent");

					window[this.viewerId + "_setRedactionReason"] = lang.hitch(this, "_setRedactionReasonEvent");
					window[this.viewerId + "_toggleRedactions"] = lang.hitch(this, "_toggleRedactionsEvent");
					window[this.viewerId + "_checkOutItem"] = lang.hitch(this, "_checkOutItemEvent");
					window[this.viewerId + "_checkInItem"] = lang.hitch(this, "_checkInItemEvent");
					window[this.viewerId + "_cancelCheckoutItem"] = lang.hitch(this, "_cancelCheckoutItemEvent");
					window[this.viewerId + "_addItem"] = lang.hitch(this, "_addItemEvent");

					// For documentation on custom button state values, see:
					// Daeja ViewONE: bar<N>button<N> parameter
					// http://www.ibm.com/support/knowledgecenter/SSTPHR_4.1.5/com.ibm.viewone.configuring/dvopr113.htm
					
					var self = this;
					window[this.viewerId + "_isRedaction"] = function() {
						var returnValue = 0;
						var viewer = window[self.viewerId];
						
						// Only show the select reason button if not in permanent redaction mode and the active annotation is a redaction.
						if ( !self._inRedactionMode && viewer && viewer.getActiveAnnotation ) {
							var annotProperties = viewer.getAnnotation(viewer.getActiveAnnotation());
							// String startsWith() is not supported by IE11.
							var redactionType = "[REDACT]";
							if ( annotProperties && annotProperties.substring(0, redactionType.length).indexOf( redactionType ) == 0 ) {
							    returnValue = 5; // visible, not depressed, enabled
							}
						}
						
						self.logDebug(self.viewerId + "_isRedaction returning: " + returnValue);
						return returnValue;
					};
					
					window[this.viewerId + "_toggleRedactionsState"] = function() {
						var returnValue = 5; // visible, not depressed, enabled
						var viewer = window[self.viewerId];

						if ( viewer && self._isSetRedactionTransparent ) {
							returnValue = 7; // visible, depressed, enabled
						}
						
						return returnValue;
					};

					window[this.viewerId + "_evaluateCheckoutButtonState"] = function() {
						var returnValue = 0;
						var viewer = window[self.viewerId];
						var visible = self.isMergeSplitModeEnabled() ? 1 : 0;
						var enabled = (visible && self._isCheckoutItemEnabled(self.item)) ? 4 : 0;

						return visible | 0 | enabled;
					};

					window[this.viewerId + "_evaluateCheckinButtonState"] = function() {
						var returnValue = 0;
						var viewer = window[self.viewerId];
						var visible = self.isMergeSplitModeEnabled() ? 1 : 0;
						var enabled = (visible && self._isCheckinItemEnabled(self.item)) ? 4 : 0;

						return visible | 0 | enabled;
					};

					window[this.viewerId + "_evaluateCancelCheckoutButtonState"] = function() {
						var returnValue = 0;
						var viewer = window[self.viewerId];
						var visible = self.isMergeSplitModeEnabled() ? 1 : 0;
						var enabled = (visible && !this._cancellingCheckout && self._isCancelCheckoutItemEnabled(self.item)) ? 4 : 0;

						return visible | 0 | enabled;
					};

					window[this.viewerId + "_evaluateAddButtonState"] = function() {
						var returnValue = 0;
						var viewer = window[self.viewerId];
						var visible = self.isMergeSplitModeEnabled() ? 1 : 0;
						var enabled = visible && self._isAddItemEnabled(self.item) && (self.item.id || self._dirty) ? 4 : 0;

						return visible | 0 | enabled;
					};

					this.logInfo(methodName + ": starting viewer.");
					//start the viewer - viewer definition replaced with viewer
					this._startViewer(this.viewerId, 0);
				} else {
					this.logError("Daeja HTML Viewer configuration object not found");
				}
			} else if (this._loadingViewer) {
				this.logDebug(methodName, "viewer startup already in progress");
				if (!this._startingViewer) {
					this.logDebug(methodName, "viewer startup timed out, trying again.");
					this._startingViewer = true;
					this._startViewer(this.viewerId, 0);
				}
			} else if (viewerLoaded) { //picks up the DIV by id in Chrome
				this.logDebug(methodName, "viewer already loaded.");
				this.viewer = window[this.viewerId];
				this._loadDocument();
			} else {
				this.logDebug(methodName, "bootstrap not ready.");
			}
			this.logExit(methodName);
		},

		viewoneSessionCheck: function(id, responseText, callback) {
			var methodName = "viewoneSessionCheck";
			this.logEntry(methodName);

			if (id != 64)
				callback.onComplete('ignored', null);

			if (responseText && (responseText.indexOf("{") == 0 || responseText.indexOf("[") == 0)) {
				var responseObj = null;
				try {
					if (JSON) {
						if (responseText.length > 4 && responseText.substring(0, 4) == "{}&&") {
							responseText = responseText.substring(4);
						}
						responseObj = JSON.parse(responseText);
					} else if (dojojson) {
						responseObj = dojojson.fromJson(responseText);
					}

					if (responseObj.errors) {
						var theDesktop = null;
						var ecmContext = window;
						while (!(ecmContext.contentViewerPane || ecmContext.parent == ecmContext || ecmContext.parent == null))
							ecmContext = ecmContext.parent;

						if (ecmContext.ecm)
							theDesktop = ecmContext.ecm.model.desktop;

						if (theDesktop) {
							for ( var i in responseObj.errors) {
								var error = responseObj.errors[i];
								if (error.text && error.number && (error.number == 1003 || error.number == 1007)) {
									var dummyRequest = new ecmContext.ecm.model.Request();
									if (callback && callback.onComplete) {
										dummyRequest.viewoneCallback = callback;
										dummyRequest.retry = function() {
											var params = {
												"security_token": ""
											};
											var propertyUpdate = {};
											ecmContext.ecm.model.Request.setSecurityToken(params);
											propertyUpdate.name = 'security_token';
											propertyUpdate.value = params.security_token;
											this.viewoneCallback.onComplete('loggedIn', propertyUpdate);
										};
									}
									callback = null; //ensure it is not handled a the end of this method.
									theDesktop.onSessionExpired(dummyRequest, error);
									break;
								}
							}
						}
					}
				} catch (e) {
					if (callback) {
						try {
							callback.onComplete("error: " + e.message, null);
							callback = null;
						} catch (e) {
							callback = null;
						}
					}
				}
			}
			if (callback) {
				callback.onComplete("ok", null);
				callback = null;
			}

			this.logExit(methodName);
		},

		/*  End of viewer listener methods.      */
		_loadViewerConfig: function() {
			var methodName = "_loadViewerConfig - " + this.viewerId;
			this.logEntry(methodName);
			if (this._loadingConfig || this._loadedConfig) {
				this.logExit(methodName + ": loading config already in progress.");
				return;
			}

			this._loadingConfig = true;

			var params = {
				plugin: "ViewONEPlugin",
				action: "ViewONEVirtualViewer",
				viewerId: this.viewerId,
				preview: this.preview,
				mimetype: this.mimetype,
				docurlbreak: this.docUrlBreak[1],
			};

			var vb;
			if (this._viewoneBootstrap != null) {
				vb = this._viewoneBootstrap;
			} else {
				vb = {
					viewerId: this.viewerId,
					viewOneParameters : {}
				}
			}
			if (this.isMergeSplitModeEnabled() && vb.viewOneParameters) {
				vb.viewOneParameters.initialEditMode = "docbuilder";
				this._lastMode = "docbuilder";
			}
			params.viewoneBoostrapJSON = JSON.stringify(vb);

			if (this.item && this.item.repository && this.item.repository) {
				if (this.item.repository.id) {
					params["repositoryId"] = this.item.repository.id;
				}

				if (this.item.repository.type) {
					params["repositoryType"] = this.item.repository.type;
				}
			}

			// Request.setSecurityToken(params);

			request = ecm.model.Request.invokeService("v1/viewoneAction", null, params, lang.hitch(this, function(data, args) {
				this.viewoneHtmlViewerContainer.innerHTML = data.responseHTML;
				this.logDebug(methodName, "configuration attached to document");
				this.onConfigLoaded();
			}), null, null, lang.hitch(this, function(data, args) {
				// the error will be routed to the desktop for handling/display.  So just log it here.
				this.logError(methodName + ": error loading viewer configuration" + data);
			}), false); // set background is false to prevent status dialog blurring the popup

			this.logExit(methodName);
		},

		_loadBootstrap: function() {
			var methodName = "_loadBootstrap - " + this.viewerId;
			this.logEntry(methodName);
			var bootstrapId = "viewoneBootstrapIni";
			//var listener = this;
			if (!window.viewoneBootstrap && document.getElementById(bootstrapId) == null && !this._loadedBootstrap || this.loadingBootstrap) {
				window.viewoneBootstrap = {
					"loading": "true"
				};

				this._loadingBootstrap = true;
				var loadCompleted = lang.hitch(this, "viewerReadyToStart");

				var stubUrl = ecm.model.desktop.getServicesUrl() + "/jaxrs/v1/viewoneAction?";
				var requestContent = {
					op: 'com.ibm.dv.client.Viewer',
					security_token: "token",  // per Daeja Development
					plugin: 'ViewONEPlugin',
					action: 'ViewONEPlatform',
					helpParameters: "security_token,action,plugin"
				};

				this.logDebug(methodName, "requesting bootstrap script");
				xhr.get({
					url: stubUrl,
					//handleAs: "json",//default is 'text'
					content: requestContent,//JSON.stringify(requestContent), 

					load: lang.hitch(this, function(data, args) {

						if (data.indexOf('<div ') == 0) {
							this._loadingBootstrap = false;
							this.viewoneHtmlViewerContainer.innerHTML = data;
						} else {
							var oHead = document.getElementsByTagName('HEAD').item(0);
							var oScript = document.createElement("script");
							oScript.language = "javascript";
							oScript.type = "text/javascript";
							oScript.id = bootstrapId;
							oScript.defer = "true";
							oScript.text = data;
							oHead.appendChild(oScript);
							this.logDebug(methodName, "viewer bootstrap script loaded ");

							if (window.viewoneLoader) {
								window.viewoneLoader.loadCompleted = loadCompleted;
							} else {
								this.logError("Error starting viewer bootstrap.");
							}
						}
					}),

					error: lang.hitch(this, function(data, args) {
						this._loadingBootstrap = false;
						this.viewoneHtmlViewerContainer.innerHTML = data;
						this.logError("Error retrieving viewer bootstrap");
					})
				});
			} else if (document.getElementById(bootstrapId) != null && !this._loadedBootstrap && window.initViewer) {
				this.logDebug(methodName, "ViewOne bootstrap was loaded by another viewer - initialising viewer object.");
				//bootstrap was loaded by another viewer. 
				this._loadingBootstrap = false;
				this._loadedBootstrap = true;
				this.viewerReadyToStart();
			} else {
				if (document.getElementById(bootstrapId) != null) {
					this._loadingBootstrap = false;
					this._loadedBootstrap = true;
					this.logDebug(methodName, "ViewOne bootstrap already loaded.");
					if (window[bootstrapId]) {
						this.viewerReadyToStart();
					} else {
						this.logError(methodName + ": viewer load failure.");
					}
				} else if (this._loadingBootstrap) {
					this.logDebug(methodName, "already loading bootstrap.")
				}
			}
			this.logExit(methodName);
		},

		_getAnnotHideButtons: function(bootstrap) {
			if (bootstrap != null && bootstrap.viewOneParameters && bootstrap.viewOneParameters.annotationHideButtons)
				return bootstrap.annotationHideButtons;
			else if (this.isFederated)
				return 'line, solidtext, highlightpoly, rectangle, poly, openpoly, oval, hyperlink, transparent';
			else
				return 'hyperlink,transparent';
		},

		_getAnnotHideContextButtons: function(bootstrap) {
			if (bootstrap != null && bootstrap.viewOneParameters && bootstrap.viewOneParameters.annotationHideContextButtons)
				return bootstrap.annotationHideContextButtons;
			else if (this.isFederated)
				return 'save,text, hyperlink,behind, transparent,security';
			else
				return 'hyperlink,behind,transparent,security';
		},

		_getAnnotHideContextButtonIds: function(bootstrap) {
			if (bootstrap != null && bootstrap.viewOneParameters && bootstrap.viewOneParameters.annotationHideContextButtonIds)
				return bootstrap.annotationHideContextButtonIds;
			else if (this.isFederated)
				return 'note, freehand, stamp, arrow, highlight, text, transparent';
			else
				return null;
		},

		_getPartFileNameForAdd: function() {
			return this.item.name ? this.item.name : ecm.messages.viewer_new_item_name;
		},

		_getPartFileNameForCheckin: function() {
			return this._viewoneBootstrap && this._viewoneBootstrap.partFileName ? this._viewoneBootstrap.partFileName : ecm.messages.viewer_new_item_name;
		},

		_getDocumentSaveMode: function() {
			return (this._viewoneBootstrap && this._viewoneBootstrap.redactionSaveMode) ? this._viewoneBootstrap.redactionSaveMode : this.DOCUMENT_SAVE_MODE_USER_SELECT;
		},

		_getDocumentAddMode: function() {
			return (this._viewoneBootstrap && this._viewoneBootstrap.documentAddMode) ? this._viewoneBootstrap.documentAddMode : ecm.model.desktop.documentAddMode;
		},

		_canCheckoutDocument: function() {
			return this._viewoneBootstrap && this._viewoneBootstrap.versionCheckoutAvailable === true;
		},

		_isVersioningAvailable: function() {
			return this._viewoneBootstrap && this._viewoneBootstrap.versioningAvailable === true;
		},

		_loadViewoneBootstrap: function(callback) {
			this._loadingViewoneBootstrap = true;

			this.newUrl = this.item.id ? this.viewerDef.getDocUrl(this.item, "specific") : "";
					
			if (this.item.celement != null)
			{
				this.newUrl = this.newUrl + '&element=' + this.item.celement;
			}
					
			var params = {
				docUrl: this.newUrl,
				repositoryId: this.item.repository.id,
				preview: this.preview,
				viewer: "virtual",
				canEdit: this.item.hasPrivilege("privEditDoc"),
				viewerId: this.viewerId
			};

			ecm.model.Request.invokeService("getViewoneBootstrap", this.item.repository.type, params, lang.hitch(this, function(response) {
				this._loadingViewoneBootstrap = false;
				this._loadedViewoneBootstrap = true;
				this._viewoneBootstrap = response.viewOneBootstrap;
				if (lang.isFunction(callback))
					callback();
				else
					this._loadViewerConfig();
			}), null, null, lang.hitch(this, function(response) {
				this._loadingViewoneBootstrap = false;
				this._loadedViewoneBootstrap = true;
				this._viewoneBootstrap = null;
				if (lang.isFunction(callback))
					callback();
				else
					this._loadViewerConfig();
			}), false); // set background is false to prevent status dialog blurring the popup
		},

		_loadDocument: function() {
			var methodName = "_loadDocument - " + this.viewerId;
			this.logEntry(methodName);
			if (!this._loadingDocument) {
				this._loadingDocument = true;
				this._loadDocumentProcessor(this._viewoneBootstrap);
			} else {
				this.logDebug(methodName, "document already loading.");
			}
			this.logExit(methodName);
		},

		_loadDocumentProcessor: function(bootstrap) {
			var methodName = "_loadDocumentProcessor - " + this.viewerId;

			//set the annot load url
			this.logDebug(methodName, "page=" + this._pageNumber + "; docURL=" + this.docURL);

			var pageList = [];
			var isFederated = false;

			if (bootstrap != null) {
				if (bootstrap.getContentUrl) {
					this.docURL = bootstrap.getContentUrl;
				}

				if (bootstrap.getAnnotationUrl) {
					this.viewer.setAnnotationFile(bootstrap.getAnnotationUrl);
				}

				if (bootstrap.updateAnnotationUrl) {
					this.viewer.setAnnotationSavePost(bootstrap.updateAnnotationUrl);
				}
				

				if (this.viewer.setFileNetCOLDTemplateResource) {
					if (bootstrap.coldTemplateUrl) {
						this.viewer.setFileNetCOLDTemplateResource(bootstrap.coldTemplateUrl);
					}
				} else {
					this.logDebug(methodName, "Method setFileNetCOLDTemplateResource was not found.");
				}

				if (!ecm.model.desktop.showPrimaryDocumentOnly || this.item.repository.type != "p8" || this.item.celement != null){
					if (bootstrap.contentElements) {
						pageList = bootstrap.contentElements;
					}
				}

				if (this.item.replicationGroup) {
					this.isFederated = this.item.replicationGroup != null;
				}
			} else if (this.item.repository.type == "p8") {
				this.viewer.setAnnotationFile(this.docURL + "&alt_output=Annotations");
				//set the annot save url
				this.viewer.setAnnotationSavePost(this.saveAnnotURL);

				if (this.viewer.setFileNetCOLDTemplateResource) {
					this.viewer.setFileNetCOLDTemplateResource(this.coldTemplateURL);
				} else {
					this.logDebug(methodName, "Method setFileNetCOLDTemplateResource was not found.");
				}

				if (!ecm.model.desktop.showPrimaryDocumentOnly){
					var contentElementsPresent = this.item.attributes.ContentElementsPresent;
					if (contentElementsPresent) {
						for (var e = 0; e < contentElementsPresent.length; e++) {
							if (!ContentItem.NoContentMimeTypes[contentElementsPresent[e]]) {
								pageList.push(e);
							}
						}
					}
				}

				if (this.item.replicationGroup) {
					this.isFederated = this.item.replicationGroup != null;
				}
			}

			var annotHideButtons = this._getAnnotHideButtons(bootstrap);
			var annotHideContextButtons = this._getAnnotHideContextButtons(bootstrap);
			var annotHideContextButtonIds = this._getAnnotHideContextButtonIds(bootstrap);

			if (this.viewer.setAnnotationHideButtons) {
				this.viewer.setAnnotationHideButtons(annotHideButtons);
			} else {
				this.logDebug(methodName, "Method setAnnotationHideButtons was not found.");
			}

			if (this.viewer.setAnnotationHideContextButtons) {
				this.viewer.setAnnotationHideContextButtons(annotHideContextButtons);
			} else {
				this.logDebug(methodName, "Method setAnnotationHideContextButtons was not found.");
			}

			if (this.viewer.setAnnotationHideContextButtonsIds) {
				if (annotHideContextButtonIds != null) {
					this.viewer.setAnnotationHideContextButtonsIds(annotHideContextButtonIds);
				}
			} else {
				this.logDebug(methodName, "Method setAnnotationHideContextButtonsIds was not found.");
			}
			
			this.viewer.setView(this.isMergeSplitSupported() && this.isMergeSplitModeEnabled() ? 2 : this._initialAnnotationMode);
			//open document
			if (this.docURL) {
				if (pageList.length <= 1)
					this.viewer.openFile(this.docURL, this._pageNumber);
				else if (this.isPart != null) {
					this.viewer.openFile(this.docURL, 1);
				}
				else {
					this.viewer.initializePageArray(pageList.length);

					for (var n = 0; n < pageList.length; n++)
						this.viewer.setPageArray(this.docURL + '&element=' + pageList[n], n);

					this.viewer.openPageArray(this._pageNumber);
				}
			} else {
					this.viewer.openFile("about:blank", 0);
			}

			this.viewer.setAnnotationsSemiTransparent(this._isSetRedactionTransparent, "redacttypes");
			this.viewer.setFocus(true);
		},

		_showErrorDialog: function(key, callback) {
			if (!this._errorDialog) {
				this._errorDialog = new ErrorDialog({
					onShow: lang.hitch(this, function() {
					}),
					onHide: lang.hitch(this, function() {
						if (callback && callback != null) {
							callback();
						}
					})
				});
			}

			var message = Message.createErrorMessage(key);
			message.text = message.text + this._errorDialog.showMessage(message);
		},

		/** @private */
		uninitialize: function() {
			var methodName = "uninitialize";
			this.logEntry(methodName);
			if (!this._uninitialized) {
				if (this.selectSaveMode) {
					this.selectSaveMode.destroyRecursive(false);
					this.selectSaveMode = null;
				}
				if (this._errorDialog) {
					this._errorDialog.destroyRecursive(false);
					this._errorDialog = null;
				}
				if (this._selectReasonDialog) {
					this._selectReasonDialog.destroyRecursive(false);
					this._selectReasonDialog = null;
				}
				if (this._confirmDialog) {
					this._confirmDialog.destroyRecursive(false);
					this._confirmDialog = null;
				}
				if (this._checkoutConflictDialog) {
					this._checkoutConflictDialog.destroyRecursive(false);
					this._checkoutConflictDialog = null;
				}
				if (this.addContentItemDialog) {
					// Release the reference. The contents are self-destroyed.
					this.addContentItemDialog = null;
				}
				this._uninitialized = true;
			}
		}
	});

	ViewoneHTMLViewer._securityTokenHandler = null;

	ViewoneHTMLViewer._updateSecurityToken = function() {
		if (window.com && window.com.ibm && window.com.ibm.dv && window.com.ibm.dv.client //
				&& window.com.ibm.dv.client.Viewer && window.com.ibm.dv.client.Viewer.updateRequestParameter) {
			var params = {};
			ecm.model.Request.setSecurityToken(params);
			window.com.ibm.dv.client.Viewer.updateRequestParameter("security_token", params.security_token);
		}
	};

	return ViewoneHTMLViewer;
});

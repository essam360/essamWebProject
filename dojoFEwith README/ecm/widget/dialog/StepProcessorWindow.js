/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/config",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/on",
	"../../LoggerMixin",
	"../../Messages",
	"ecm/model/WorkItem",
	"./WorkflowSubscriptionsDialog",
	"./TransferedWorkflowsDialog",
	"./ErrorDialog"
],

function(declare, lang, config, connect, has, on, LoggerMixin, Messages, WorkItem, WorkflowSubscriptionsDialog, TransferedWorkflowsDialog, ErrorDialog) {

	/**
	 * Creates a browser pop-up window to render the IBM FileNet P8 Step or Launch processors
	 * 
	 * @name ecm.widget.dialog.StepProcessorWindow
	 * @class Provides a mechanism that is used to display the IBM FileNet Business Process Manager widget in a separate
	 *        browser window.
	 */
	var StepProcessorWindow = declare("ecm.widget.dialog.StepProcessorWindow", [
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.StepProcessorWindow.prototype */

		/**
		 * @private
		 */
		_callbacks: null,

		/**
		 * @private
		 */
		_openStepWindows: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this._callbacks) {
				this._callbacks = [];
			}
			if (!this._openStepWindows) {
				this._openStepWindows = {};
			}
		},

		/**
		 * Opens the browser pop-up window and renders the Step processor.
		 * 
		 * @param item
		 *            An {@link ecm.model.WorkItem} object.
		 * @param callback
		 *            A function to be called after the work item is rendered.
		 */
		open: function(item, callback) {
			this.logEntry("open");
			if (item) {
				this._setApplicationBaseURL(item);
				var needToOpenWindow = true;
				var title = this._getTitle(item);
				if (this._openStepWindows && this._openStepWindows[title]) {
					if (this._openStepWindows[title].window && !this._openStepWindows[title].window.closed) {
						this._openStepWindows[title].window.focus();
						needToOpenWindow = false;
					}
				}
				if (needToOpenWindow) {
					if (item.isInTrackerQueue()) {
						this._openTracker(item, callback);
					} else {
						var onDisplayStatusDialog = connect.connect(ecm.model.desktop, "onDisplayStatusDialog", function() {
							disconnectFromStatusDialog();
							ecm.model.desktop._onRequestOverrideStatusDialogRefocus(false);
							var onHideStatusDialog = connect.connect(ecm.model.desktop, "onHideStatusDialog", function() {
								connect.disconnect(onHideStatusDialog);
								ecm.model.desktop._onRequestRevertStatusDialogRefocus();
							});
						});
						var disconnectFromStatusDialog = function() {
							if (onDisplayStatusDialog) {
								connect.disconnect(onDisplayStatusDialog);
								onDisplayStatusDialog = null;
							}
						};
						item.retrieveProcessorInformation("step", lang.hitch(this, function(item) {
							disconnectFromStatusDialog();
							// Open the item after allowing this request processing to complete.
							setTimeout(lang.hitch(this, function() {
								this._openItem(item, callback);
							}), 0);
						}), null, null, false, function() {
							disconnectFromStatusDialog();
						}, false);
					}
				}
			}
			this.logExit("open");
		},

		_setApplicationBaseURL: function(item) {
			var useAppBaseUrl = ecm.model.desktop.getRequestParam("useApplicationBaseUrl");
			if (useAppBaseUrl != null && useAppBaseUrl.length > 0) {
				if (useAppBaseUrl == "true") {
					item.useApplicationBaseUrl = true;
				}
			}
		},

		/**
		 * Returns the {@link ecm.model.WorkItem} object that was opened in a browser pop-up window.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object.
		 * @returns An {ecm.model.WorkItem} object.
		 */
		getCurrentItem: function(item) {
			var title = this._getTitle(item);
			return this._openStepWindows[title].item || null;
		},

		_getIdfromDocId: function(item) {
			return item.id.split(",")[2];
		},

		/**
		 * Opens the browser pop-up window and renders the Launch processor.
		 * 
		 * @param item
		 *            A {@link ecm.model.ContentItem} object for the workflow definition to be launched. This can also
		 *            be a document or folder content item, in which case, it will look for a workflow subscription
		 *            association to launch. If there are multiple workflow subscriptions, it will display a selection
		 *            dialog to the user first.
		 * @param callback
		 *            A function to be called after the work item is rendered.
		 */
		launch: function(item, callback) {
			this.logEntry("launch");
			if (item) {
				var self = this;
				var mimeType = item.mimetype;
				if (mimeType == "application/x-filenet-workflowdefinition" || mimeType == "application/x-filenet-xpdlworkflowdefinition") {
					var id = this._getIdfromDocId(item);
					// Bake a WorkItem object out of the ContentItem that represents the workflow definition
					var workItem = new ecm.model.WorkItem({
						id: id,
						name: item.name,
						repository: item.repository,
						connectionPoint: item.repository.connectionPoint,
						objectStore: item.getObjectStore()
					});
					this._setApplicationBaseURL(workItem);
					workItem.retrieveProcessorInformation("launch", lang.hitch(this, function(item) {
						self._launchItem(item, null, null, callback);
					}));
				} else { // Is a Workflow Subscription launch action

					// Make mid-tier call to get the subscriptions. If only one then launch otherwise show selection dialog, 
					// then launch pass attachmentId as URL parameter (in conical form, encoded) XT did this and other Launch
					// procs could too pass propertyMap as URL parameter (encoded), same as above. 
					var id = this._getIdfromDocId(item);
					// Bake a WorkItem object out of the ContentItem that represents the document/folder object we are trying to launch
					var workItem = new ecm.model.WorkItem({
						id: id,
						name: item.name,
						repository: item.repository,
						connectionPoint: item.repository.connectionPoint,
						objectStore: item.getObjectStore()
					});
					this._setApplicationBaseURL(workItem);
					workItem.retrieveSubscriptions(function(workitem, subscriptions) {
						self._processSubscriptions(workitem, subscriptions, callback);
					}, true, function(error) {
						var message = error.errors[0];
						if (message.number == 1104 && workItem.repository.approvalWorkflowEnabled) {
							workItem.retrieveTransferedWorkflows(function(items) {
								if (items.length == 0) {
									self._showErrorMessage(message);
								} else {
									self._processPatternWorkflows(items, item, callback);
								}
							}, null, {
								"filters": [
									"ICNParallelDocumentApproval",
									"ICNSequentialDocumentApproval"
								]
							});
						} else {
							self._showErrorMessage(message);
						}
					});
				}
			}
			this.logExit("launch");
		},

		_showErrorMessage: function(message) {
			if (!this._errorDialog)
				this._errorDialog = new ErrorDialog();
			this._errorDialog.showMessage(message);
		},

		/**
		 * Gets the launch processor URL information and opens a launch processor for the work item. The work item
		 * represents a workflow definition that has been transferred.
		 * 
		 * @param item
		 *            A {@link ecm.modle.WorkItem} object to be launched.
		 */
		launchTransferedWorkflow: function(workItem) {
			this.logEntry("launchTransferedWorkflow");
			var self = this;
			this._setApplicationBaseURL(workItem);
			workItem.retrieveProcessorInformation("launch", lang.hitch(this, function(item) {
				self._launchItem(item, null, null);
			}));
			this.logExit("launchTransferedWorkflow");
		},

		/**
		 * Launches a workflow definition that has been specified by an entry template.
		 * 
		 * @param item
		 *            A {@link ecm.model.ContentItem} object for the initiating attachment information
		 * @param workItem
		 *            A {@link ecm.modle.WorkItem} object to be launched.
		 * @param callback
		 *            A callback function to be called after the workflow has been launched
		 */
		launchFromEntryTemplate: function(item, workItem, callback) {
			this.logEntry("launchFromEntryTemplate");
			if (workItem) {
				var objectStoreName = workItem.objectStoreName;
				var id = workItem.id;
				// Need to push the attachmentId into the workItem
				var attachmentId = workItem.createAttachmentId(item);
				workItem.setAttachmentId(attachmentId);
				var subject = workItem.createSubject(item);
				workItem.setSubject(subject);
				this._setApplicationBaseURL(workItem);

				var self = this;
				workItem.retrieveProcessorInformation("launch", lang.hitch(this, function(item) {
					self._launchItem(item, null, "et", callback);
				}), id, objectStoreName);
			}
			this.logExit("launchFromEntryTemplate");
		},

		_getTitle: function(item) {
			var id = item.id;
			var queueName = item.queueName;
			var prefix;
			if (queueName) {
				if (item.isInTrackerQueue()) {
					prefix = "tracker_";
				} else {
					prefix = "step_";
				}
			} else {
				prefix = "launch_";
				id = item.F_VWVersion;
				if (id == null) {
					id = item.workflowVersion; // Will be same value as vwVersion
				}
				if (id == null || id.trim().length == 0) {
					id = item.id;
				}
			}

			if (id == null) {
				id = item.vsId;
			}

			var title = prefix + id.replace(/[{,\-,},.,~,\t,\/]/g, ""); // Remove some characters that can not be in window title
			this.logInfo("_getTitle", "title = " + title);
			return title;
		},

		_openItem: function(item, callback) {
			this.logEntry("_openItem");
			var height = item.F_StepHeight;
			if (height <= 0) {
				height = 600;
			}
			var width = item.F_StepWidth;
			if (width <= 0) {
				width = 860;
			}
			var left = (screen.width - width) / 2;
			var top = (screen.height - height) / 2;

			var stepProcessorUrl = this._getStepProcessorUrl(item);
			this.logInfo("_openItem", "stepProcessorUrl = " + stepProcessorUrl);

			var title = this._getTitle(item);

			var stepProcessorWindow = window.open(stepProcessorUrl, title, "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);
			this._openStepWindows[title] = {
				window: stepProcessorWindow,
				callback: callback,
				item: item
			};
			this._stepProcessorShowHandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"show",lang.hitch(stepProcessorWindow ,function() {
				stepProcessorWindow.postMessage({
					"MessageId": "ecm.widget.dialog.SessionExpireWarningDialog.show", 
					"WarningTime":ecm.model.desktop.sessionExpireWarningTime
				},"*");
			}));
			this._stepProcessorExtendhandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"_onExtendSession",lang.hitch(stepProcessorWindow,function() {
				stepProcessorWindow.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession", "*");
			}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onLogoff"){
					ecm.model.SessionTimer.getSessionTimer().warningDialog._onLogoff();
				}
			}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession"){
					ecm.model.SessionTimer.getSessionTimer().warningDialog._onExtendSession();
				}
			}));
			if(!ecm.model.desktop.isSsoTokenPresent() && stepProcessorWindow)
				stepProcessorWindow._sessionTimer = ecm.model.SessionTimer.getSessionTimer(); 
			this._onLogOffLink = dojo.connect(ecm.model.desktop, "logoff",lang.hitch(stepProcessorWindow,function() {
				if(stepProcessorWindow != null)
					stepProcessorWindow.close();
			}));
			this.logExit("_openItem");
		},

		_getStepProcessorUrl: function(item) {
			var stepProcessorUrl = null;
			if (item.F_StepTemplate.indexOf("{5}") > 0) {
				// This is new template that has isoRegion url parameter, set it to empty string
				stepProcessorUrl = lang.replace(item.F_StepTemplate, [
					item.F_StepBaseurl,
					item.F_StepLocation,
					encodeURIComponent(item.getValue("queueName")),
					item.id,
					encodeURIComponent(item.getValue("F_StepName")),
					""
				]);

			} else {
				stepProcessorUrl = lang.replace(item.F_StepTemplate, [
					item.F_StepBaseurl,
					item.F_StepLocation,
					encodeURIComponent(item.getValue("queueName")),
					item.id,
					encodeURIComponent(item.getValue("F_StepName"))
				]);

			}
			stepProcessorUrl += this._createExtraUrlParameters(item);
			return stepProcessorUrl;
		},

		_launchItem: function(item, subscription, mode, callback) {
			this.logEntry("_launchItem");			
			// Launches a new workflow
			var height = item.F_StepHeight;
			if (height <= 0) {
				height = 600;
			}
			var width = item.F_StepWidth;
			if (width <= 0) {
				width = 860;
			}
			var left = (screen.width - width) / 2;
			var top = (screen.height - height) / 2;

			var subject = item.attributes.F_Subject;
			if (!subject) {
				subject = "";
			}
			var attachmentId = item.F_AttachmentId;
			if (!attachmentId) {
				attachmentId = "";
			}
			var propertyMap = "";
			if (subscription) {
				if (subscription.propertyMap) {
					propertyMap = subscription.propertyMap;
				}
			}
			var vwVersion = item.F_VWVersion || "";

			var launchProcessorUrl;
			if (item.F_StepTemplate.indexOf("{6}") > 0) {
				// This is new template that has isoRegion url parameter, set it to empty string
				launchProcessorUrl = lang.replace(item.F_StepTemplate, [
					item.F_StepBaseurl,
					item.F_StepLocation,
					encodeURIComponent(vwVersion),
					subject,
					encodeURIComponent(attachmentId),
					encodeURIComponent(propertyMap),
					""
				]);
			} else {
				launchProcessorUrl = lang.replace(item.F_StepTemplate, [
					item.F_StepBaseurl,
					item.F_StepLocation,
					encodeURIComponent(vwVersion),
					subject,
					encodeURIComponent(attachmentId),
					encodeURIComponent(propertyMap)
				]);
			}
			launchProcessorUrl += this._createExtraUrlParameters(item);
			if (mode) {
				launchProcessorUrl = launchProcessorUrl + "&mode=" + mode;
			}

			var workClassName = item.workclass_name;
			if (workClassName) {
				launchProcessorUrl = launchProcessorUrl + "&workClassName=" + encodeURIComponent(workClassName);
			}
				
			this.logInfo("_launchItem", "launchProcessorUrl = " + launchProcessorUrl);
			var title = this._getTitle(item);
			// The same launched workflow is still opened in a pop up window so brings it to the front.
			// This doesn't work in Chrome since _launchItem was called after a server fetch callback.  Chrome blocks
			// brining up a popup window to the front unless it is directly from a user event. In this case, it is not from
			// a user event anymore since it was triggered after a server side call.
			if (this._openStepWindows && this._openStepWindows[title]) {
				if (this._openStepWindows[title].window && !this._openStepWindows[title].window.closed) {
					this._openStepWindows[title].window.focus();
				}
			}		
			var launchProcessorWindow = window.open(launchProcessorUrl, title, "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);
			this._openStepWindows[title] = {
				window: launchProcessorWindow,
				callback: callback,
				item: item
			};
			if(!ecm.model.desktop.isSsoTokenPresent() && launchProcessorWindow)
				launchProcessorWindow._sessionTimer = ecm.model.SessionTimer.getSessionTimer(); 
			this._launchProcessorShowHandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"show",lang.hitch(launchProcessorWindow ,function() {
				launchProcessorWindow.postMessage({
					"MessageId": "ecm.widget.dialog.SessionExpireWarningDialog.show", 
					"WarningTime":ecm.model.desktop.sessionExpireWarningTime
				},"*");
			}));
			this._launchProcessorExtendhandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"_onExtendSession",lang.hitch(launchProcessorWindow,function() {
				launchProcessorWindow.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession", "*");
			}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onLogoff"){
					ecm.model.SessionTimer.getSessionTimer().warningDialog._onLogoff();
				}
			}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession"){
					ecm.model.SessionTimer.getSessionTimer().warningDialog._onExtendSession();
				}
			}));
			this._onLogOffLink = dojo.connect(ecm.model.desktop, "logoff",lang.hitch(launchProcessorWindow,function() {
				if(launchProcessorWindow != null)
					launchProcessorWindow.close();
			})); 
			this.logExit("_launchItem");
		},

		_openTracker: function(item, callback) {
			this.logEntry("_openTracker");
			var height = 700;
			var width = 1000;
			var left = (screen.width - width) / 2;
			var top = (screen.height - height) / 2;

			var trackerTemplate = ecm.model.desktop.getServicesUrl() + "/tracker.jsp?queueName={0}&wobNum={1}";
			var trackerUrl = lang.replace(trackerTemplate, [
				encodeURIComponent(item.queueName),
				item.id
			]);
			trackerUrl += this._createExtraUrlParameters(item);

			var title = this._getTitle(item);
			this.logInfo("_openTracker", "trackerUrl = " + trackerUrl);
			var trackerWindow = window.open(trackerUrl, title, "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);
			this._openStepWindows[title] = {
				window: trackerWindow,
				callback: callback,
				item: item
			};
			if(!ecm.model.desktop.isSsoTokenPresent() && trackerWindow)
				trackerWindow._sessionTimer = ecm.model.SessionTimer.getSessionTimer(); 
			this._trackerShowHandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"show",lang.hitch(trackerWindow ,function() {
				trackerWindow.postMessage({
					"MessageId": "ecm.widget.dialog.SessionExpireWarningDialog.show", 
					"WarningTime":ecm.model.desktop.sessionExpireWarningTime
				},"*");
			}));
			this._trackerExtendhandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"_onExtendSession",lang.hitch(trackerWindow,function() {
				trackerWindow.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession", "*");
			}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onLogoff"){
					ecm.model.SessionTimer.getSessionTimer().warningDialog._onLogoff();
				}
			}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession"){
					ecm.model.SessionTimer.getSessionTimer().warningDialog._onExtendSession();
				}
			}));
			this._onLogOffLink = dojo.connect(ecm.model.desktop, "logoff",lang.hitch(trackerWindow,function() {
				if(trackerWindow != null)
					trackerWindow.close();
			}));
			this.logExit("_openTracker");
		},

		_createExtraUrlParameters: function(item) {
			var extraUrlParameters = "&repositoryId=" + encodeURIComponent(item.repository.id) + "&desktopId=" + ecm.model.desktop.id;
			if (item.F_InstrSheetId && item.F_WorkOrderId) {
				extraUrlParameters += "&instrSheetId=" + item.F_InstrSheetId + "&workOrderId=" + item.F_WorkOrderId;
			}
			if (config.isDebug) {
				extraUrlParameters += "&debug=true&logLevel=4";
			}
			return extraUrlParameters;
		},

		_processSubscriptions: function(workItem, subscriptions, callback) {
			// Check to see how many subscriptions came back, launch if only one.
			if (subscriptions != null) {
				if (subscriptions.length == 1) {
					var self = this;
					var subscription = subscriptions[0];
					this._setApplicationBaseURL(workItem);
					workItem.retrieveProcessorInformation("launch", lang.hitch(this, function(item) {
						self._launchItem(item, subscription, null, callback);
					}), subscriptions[0].workflowId, subscriptions[0].workflowObjectStore);
				} else {
					var self = this;
					if (this._subscriptionsDialog) {
						this._subscriptionsDialog.destroyRecursive();
					}
					this._subscriptionsDialog = new ecm.widget.dialog.WorkflowSubscriptionsDialog({
						repository: workItem.repository
					});
					this._subscriptionsDialog.show(workItem, subscriptions, lang.hitch(this, function(item, subscription) {
						item.retrieveProcessorInformation("launch", lang.hitch(this, function(item) {
							self._launchItem(item, subscription, null, callback);
						}), subscription.workflowId, subscription.workflowObjectStore);
					}));

				}
			}
		},

		_processPatternWorkflows: function(items, contentItem, callback) {
			var transferedWorkItems = new Array();
			for ( var i in items) {
				var item = items[i];
				var authoredName = item.authoredName ? item.authoredName : item.name;
				if (authoredName == "ICNParallelDocumentApproval") {
					transferedWorkItems.push({
						name: item.name,
						displayName: ecm.messages.process_parallel_review, // Custom name and description
						description: ecm.messages.process_parallel_review_description
					});
				} else if (authoredName == "ICNSequentialDocumentApproval") {
					transferedWorkItems.push({
						name: item.name,
						displayName: ecm.messages.process_sequential_review,
						description: ecm.messages.process_sequential_review_description
					});
				} else {
					transferedWorkItems.push({
						name: item.name
					});
				}
			}
			if (transferedWorkItems.length > 0) {
				if (transferedWorkItems.length == 1) {
					var transferedWorkItem = transferedWorkItems[0];
					var workItem = new ecm.model.WorkItem({
						id: transferedWorkItem.name,
						name: transferedWorkItem.name,
						repository: contentItem.repository,
						connectionPoint: contentItem.repository.connectionPoint,
						objectStore: contentItem.getObjectStore(),
						workclass_name: transferedWorkItem.name
					});
					// Gets the attachment id as needed.
					var attachmentId = workItem.createAttachmentId(contentItem);
					workItem.F_AttachmentId = attachmentId;
					this.launchTransferedWorkflow(workItem);
				} else {
					if (this._patternWorkflowsDialog) {
						this._patternWorkflowsDialog.destroyRecursive();
					}
					this._patternWorkflowsDialog = new TransferedWorkflowsDialog({
						repository: contentItem.repository,
						items: transferedWorkItems,
						contentItem: contentItem,
						showDescription: true
					});
					this._patternWorkflowsDialog.show();
				}
				this.logDebug("Total items:" + transferedWorkItems.length);
			}
		},

		_openNextWorkItemUsingExternalProcessor: function(currentWorkItem, newWorkItem) {
			// Call onStepProcessorNewItemLoaded to update the step window cache
			this.onStepProcessorNewItemLoaded(currentWorkItem, newWorkItem);
			// Redirect to the new page
			var stepProcessorUrl = this._getStepProcessorUrl(newWorkItem) + "&isGetNextEnabled=true";
			var title = this._getTitle(newWorkItem);
			var stepWindow = this._openStepWindows[title];
			stepWindow.window.location = stepProcessorUrl;
		},

		/**
		 * An event function that is called when the step processor window is loaded with the next work item.
		 * 
		 * @param currentWorkItem
		 *            A {@link ecm.model.WorkItem} object.
		 * @param newWorkItem
		 *            A {@link ecm.model.WorkItem} object.
		 */
		onStepProcessorNewItemLoaded: function(currentWorkItem, newWorkItem) {
			// Remove the current item from the window cache
			var title = this._getTitle(currentWorkItem);

			var stepWindow = this._openStepWindows[title];
			if (stepWindow) {
				delete this._openStepWindows[title];

				// Add the new item to the step window cache
				title = this._getTitle(newWorkItem);
				stepWindow.window.name = title;
				stepWindow.item = newWorkItem;
				this._openStepWindows[title] = stepWindow;
				stepWindow = null;
			}
		},

		/**
		 * An event function that is called when the step processor work item has been dispatched.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object.
		 */
		onStepProcessorWindowCompleted: function(item) {
			this.logEntry("onStepProcessorWindowCompleted");
			this._displayStatusMessage(item);
			if (item != null) {
				ecm.model.desktop.onChange(item); // Will cause the in-basket to be refreshed
				var title = this._getTitle(item);
				if (this._openStepWindows[title] && this._openStepWindows[title].callback) {
					this._openStepWindows[title].callback(item);
				}
			}
			this.logExit("onStepProcessorWindowCompleted");
		},

		/**
		 * An event function that is called when the step processor work item window has been cancelled.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object.
		 * @param refresh
		 *            A boolean value. If true, the item is refreshed.
		 */
		onStepProcessorWindowCancelled: function(item, refresh) {
			this.logEntry("onStepProcessorWindowCancelled");
			this._displayStatusMessage(item);
			if (item != null) {
				if (refresh) {
					ecm.model.desktop.onChange(item); // Will cause the in-basket to be refreshed
				}
			}
			this.logExit("onStepProcessorWindowCancelled");
		},

		_removeStepWindow: function(item) {
			this.logEntry("_removeStepWindow");
			if (item != null) {
				var title = this._getTitle(item);
				var stepWindow = this._openStepWindows[title];
				if (stepWindow) {
					delete this._openStepWindows[title];
					if (stepWindow.window) {
						stepWindow.window.name = null;
					}
					stepWindow.window = null;
					stepWindow.callback = null;
					stepWindow.item = null;
					stepWindow = null;
				}
			}
			this.logExit("_removeStepWindow");
		},

		_displayStatusMessage: function(item) {
			// Pass any Request message over to the default Desktop message queue
			if (item.F_StatusMessage) {
				// Create a separate copy of the message.
				ecm.model.desktop.onMessageAdded("" + item.F_StatusMessage);
				item.F_StatusMessage = null;
			}
		},

		destroy: function() {
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			if (this._subscriptionsDialog) {
				this._subscriptionsDialog.destroyRecursive();
				this._subscriptionsDialog = null;
			}
			if (this._patternWorkflowsDialog) {
				this._patternWorkflowsDialog.destroyRecursive();
				this._patternWorkflowsDialog = null;
			}
			if (this._openStepWindows) {
				for ( var prop in this._openStepWindows) {
					if (this._openStepWindows.hasOwnProperty(prop)) {
						if (this._openStepWindows[prop].window) {
							if (!this._openStepWindows[prop].window.closed) {
								try {
									this._openStepWindows[prop].window.close();
								} catch (e) {
								}
							}
							this._openStepWindows[prop].window = null;
						}
						this._openStepWindows[prop].callback = null;
						this._openStepWindows[prop].item = null;
						delete this._openStepWindows[prop];
					}
				}
				this._openStepWindows = null;
			}
			if (this._stepProcessorExtendhandler) {
				connect.disconnect(this._stepProcessorExtendhandler);
				this._stepProcessorExtendhandler = null;
			}
			if (this._stepProcessorShowHandler) {
				connect.disconnect(this._stepProcessorShowHandler);
				this._stepProcessorShowHandler = null;
			}
			if (this._launchProcessorExtendhandler) {
				connect.disconnect(this._launchProcessorExtendhandler);
				this._launchProcessorExtendhandler = null;
			}
			if (this._launchProcessorShowHandler) {
				connect.disconnect(this._launchProcessorShowHandler);
				this._launchProcessorShowHandler = null;
			}
			if (this._trackerExtendhandler) {
				connect.disconnect(this._trackerExtendhandler);
				this._trackerExtendhandler = null;
			}
			if (this._trackerShowHandler) {
				connect.disconnect(this._trackerShowHandler);
				this._trackerShowHandler = null;
			}
			this._callbacks = null;
			this.inherited(arguments);
		}
	});

	/**
	 * @private
	 */
	var onBeforeUnload = function(event) {
		if (oldOnBeforeUnload) {
			var results = oldOnBeforeUnload(event);
			if (results) {
				return results;
			}
		}
		if (onBeforeUnloadHandler) {
			onBeforeUnloadHandler.remove();
			onBeforeUnloadHandler = null;
		}
		if (ecm.widget.dialog.stepProcessorWindow) {
			ecm.widget.dialog.stepProcessorWindow.destroy();
		}
	};
	if (has("chrome") || has("safari")) {
		var onBeforeUnloadHandler = on(window, "beforeunload", onBeforeUnload);
	} else { // For IE and Firefox, we must directly override window.onbeforeunload
		var oldOnBeforeUnload = window.onbeforeunload;
		window.onbeforeunload = onBeforeUnload;
	}

	/**
	 * @name ecm.widget.dialog.stepProcessorWindow
	 * @description A global instance of {@link ecm.widget.dialog.StepProcessorWindow} for the IBM Content Navigator
	 *              toolkit.
	 */
	ecm.widget.dialog.stepProcessorWindow = new StepProcessorWindow();

	return StepProcessorWindow;
});

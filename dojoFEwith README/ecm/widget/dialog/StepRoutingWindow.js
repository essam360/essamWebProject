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
	"ecm/model/WorkItem"
],

function(declare, lang, config, connect, has, on, LoggerMixin, Messages, WorkItem) {
	/**
	 * Creates a pop up browser window to render the CM8 Step Processor.
	 * 
	 * @name ecm.widget.dialog.StepProcessorDialog
	 * @class Provides a mechanism that is used to display the IBM Content Manager Step Processor in a dialog.
	 * @since 2.0.2
	 */
	var StepRoutingWindow = declare("ecm.widget.dialog.StepRoutingWindow", [
		LoggerMixin
	], {
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
		 * Opens the browser popup window and renders the Content Manager Step processor
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object
		 * @param callback
		 *            A function to be called after the work item is rendered.
		 */
		open: function(item, callback) {
			this.logEntry("open");

			//if the same item has been opened in the window, do nothing
			//if not, open a new window
			var needToOpenWindow = true;
			if (item) {
				this._setApplicationBaseURL(item);
				var title = this._getTitle(item);
				if (this._openStepWindows && this._openStepWindows[title]) {
					if (this._openStepWindows[title].window && !this._openStepWindows[title].window.closed) {
						this._openStepWindows[title].window.focus();
						needToOpenWindow = false;
					}
				}
				if (needToOpenWindow) {
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
					ecm.model.desktop._onRequestOverrideStatusDialogRefocus(false);
					item.retrieveProcessorInformation("step", lang.hitch(this, function(item) {
						disconnectFromStatusDialog();
						// Open the item after allowing the request processing to complete.
						setTimeout(lang.hitch(this, function() {
							this._openItem(item, callback);
						}), 0);
					}), null, null, false, function() {
						disconnectFromStatusDialog();
					}, false);
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

		_openItem: function(item, callback) {
			this.logEntry("_openItem");
			var height = 600;
			var width = 900;
			var left = (screen.width - width) / 2;
			var top = (screen.height - height) / 2;

			var stepProcessorUrl = this._getCMStepProcessorUrl(item);
			this.logInfo("open", "stepProcessorUrl = " + stepProcessorUrl);

			var title = this._getTitle(item);
			var windowpara = "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"";
			this.logInfo("Open StepRouting jsp file:" + stepProcessorUrl + " title:" + title + " windowpara:" + windowpara);
			var stepProcessorWindow = window.open(stepProcessorUrl, title, windowpara, true);
			this._openStepWindows[title] = {
				window: stepProcessorWindow,
				callback: callback,
				item: item
			};
			if(!ecm.model.desktop.isSsoTokenPresent() && stepProcessorWindow)
				stepProcessorWindow._sessionTimer = ecm.model.SessionTimer.getSessionTimer(); 
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
			this._onLogOffLink = dojo.connect(ecm.model.desktop, "logoff",lang.hitch(stepProcessorWindow,function() {
				if(stepProcessorWindow != null)
					stepProcessorWindow.close();
			}));
			this.logExit("_openItem");
		},

		_getTitle: function(item) {
			var id = item.id;
			var prefix = "cmstep_";
			var title = prefix + id.replace(/[{,\-,},~,\t,\/]/g, ""); // Remove some characters that can not be in window title

			//fix for IE9 that itemid contains blank can not be the title
			while (title.indexOf(" ") >= 0) {
				title = title.replace(" ", "_");
			}

			this.logInfo("_getTitle", "title = " + title);
			return title;
		},

		_getTitleByID: function(id) {
			var prefix = "cmstep_";
			var title = prefix + id.replace(/[{,\-,},~,\t,\/]/g, ""); // Remove some characters that can not be in window title

			//fix for IE9 that itemid contains blank can not be the title
			while (title.indexOf(" ") >= 0) {
				title = title.replace(" ", "_");
			}

			this.logInfo("_getTitle", "title = " + title);
			return title;
		},

		_getCMStepProcessorUrl: function(item) {
			//just hardcode the jsp file name since for CM8,the step processor is launched from the main navigator
			var url = "steprouting.jsp?workpackageId=" + encodeURIComponent(item.id);
			url += this._createExtraUrlParameters(item);
			return url;
		},

		_createExtraUrlParameters: function(item) {
			var extraUrlParameters = "&repositoryId=" + encodeURIComponent(item.repository.id) + "&desktopId=" + ecm.model.desktop.id + "&name=" + encodeURIComponent(item.name) + "&template=" + item.template;

			if (config.isDebug) {
				extraUrlParameters += "&debug=true&logLevel=4";
			}
			return extraUrlParameters;
		},

		/**
		 * An event function that is called when the step processor window has been cancelled.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object
		 */
		onStepProcessorWindowCancelled: function(item) {
			this.logEntry("onStepProcessorWindowCancelled");
			//update item status after unlocking
			this._displayStatusMessage(item);
			if (item != null) {
				ecm.model.desktop.onChange(item); // Will cause the in-basket to be refreshed
			}
			this.logExit("onStepProcessorWindowCancelled");
		},

		_removeStepWindow: function(item) {
			this.logEntry("_removeStepWindow");
			if (item != null) {
				var title = this._getTitle(item);
				var stepWindow = this._openStepWindows[title];
				if (stepWindow) {
					if (stepWindow.window) {
						stepWindow.window.name = null;
					}
					stepWindow.window = null;
					stepWindow.callback = null;
					if (stepWindow.item) {
						stepWindow.item.id = null;
					}
					stepWindow.item = null;
					stepWindow = null;
				}
				delete this._openStepWindows[title];
			}
			this.logExit("_removeStepWindow");
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

		updateWindowTitlewithNewID: function(newid, oldid) {
			var title = this._getTitleByID(oldid);
			var stepWindow = this._openStepWindows[title];
			if (stepWindow) {
				delete this._openStepWindows[title];
				// Change the currentItem's id to the last workpackage since in the parent window the title has been updated
				stepWindow.item.id = newid;
				var newtitle = this._getTitleByID(newid);
				this._openStepWindows[newtitle] = stepWindow;
				stepWindow = null;
			}
		},

		/**
		 * An event function that is called when the step processor window closes and the work item has been dispatched
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object
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

		_displayStatusMessage: function(item) {
			// Pass any Request message over to the default Desktop message queue
			if (item.F_StatusMessage) {
				// Create a separate copy of the message.
				ecm.model.desktop.onMessageAdded("" + item.F_StatusMessage);
				item.F_StatusMessage = null;
			}
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

		destroy: function() {
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
				if (this._stepProcessorExtendhandler) {
					connect.disconnect(this._stepProcessorExtendhandler);
					this._stepProcessorExtendhandler = null;
				}
				if (this._stepProcessorShowHandler) {
					connect.disconnect(this._stepProcessorShowHandler);
					this._stepProcessorShowHandler = null;
				}
				this._openStepWindows = null;
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

	ecm.widget.dialog.stepRoutingWindow = new StepRoutingWindow();

	return StepRoutingWindow;
});

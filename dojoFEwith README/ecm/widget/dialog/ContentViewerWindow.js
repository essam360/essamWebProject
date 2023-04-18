/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/connect",
	"dojo/cookie",
	"ecm/widget/viewer/ContentViewer",
	"ecm/LoggerMixin",
	"ecm/Messages"
], //
function(declare, array, dojojson, lang, has, connect, cookie, ContentViewer, LoggerMixin, Messages) {

	/**
	 * @name ecm.widget.dialog.ContentViewerWindow
	 * @class Provides a separate browser window that displays the ContentViewer widget.
	 */
	var ContentViewerWindow = declare("ecm.widget.dialog.ContentViewerWindow", [
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.ContentViewerWindow.prototype */

		_toOpenQueue: null,
		_openCalledRecently: false,
		_openCalledTimestamp: 0,
		_checkOpenTimeout: 30000,
		_toPreviewQueue: null,
		_toMergeSplitQueue: null,
		_underwayPoll: null,
		_viewerWindows:null,
		_subWindow:false,

		wrappingTabController: false, 
			
		constructor: function() {
			if (!this._toOpenQueue) {
				this._toOpenQueue = [];
			}

			if (!this._toPreviewQueue) {
				this._toPreviewQueue = [];
			}

			if (!this._toMergeSplitQueue) {
				this._toMergeSplitQueue = [];
			}
			
			if (!this._viewerWindows) {
				this._viewerWindows = [];
				this._viewerWindows.push(this);
				if(ecm.widget.dialog.contentViewerWindow){
					if(ecm.widget.dialog.contentViewerWindow._viewerWindows.length>0)
						ecm.widget.dialog.contentViewerWindow._viewerWindows[0] = this;
				}
			}
			
			// propagate new security token from parent to child window
			connect.connect(ecm.model.Request, "onSecurityTokenChange", function(response) {
				if (ecm.widget.dialog.contentViewerWindow) {
					var that = ecm.widget.dialog.contentViewerWindow;
					if (that._hasContentViewer()) { // Fix for IE
						that.logDebug("onSecurityTokenChange", "_hasContentViewer() returned true, forwarding new security token.");
						for(var i = 0; i < that._viewerWindows.length; i++){
							viewerWindow = that._viewerWindows[i]._viewerWindow;
							if (viewerWindow && viewerWindow.ecm.model.Request) {
								viewerWindow.ecm.model.Request.getSecurityToken(response);
							}
						}
					} else {
						that.logDebug("onSecurityTokenChange", "_hasContentViewer() returned false, skipping.");
					}
				}
			});
		},

		_setUnderway: function(isUnderway) {
			var methodName = "_setUnderway";
			this.logEntry(methodName);

			if (isUnderway) {
				this.logDebug(methodName, "Setting to true");
				this._openCalledRecently = true;
				this._openCalledTimestamp = new Date().getTime();
			} else {
				this.logDebug(methodName, "Setting to false");
				this._openCalledRecently = false;
				this._openCalledTimestamp = 0;
				if (this._underwayPoll != null) {
					clearTimeout(this._underwayPoll);
					this._underwayPoll = null;
				}
			}

			this.logExit(methodName);
		},

		_isUnderway: function() {
			var methodName = "_isUnderway";
			this.logEntry(methodName);

			var isUnderway = this._openCalledRecently;
			var elapsed = (new Date().getTime()) - this._openCalledTimestamp;
			this.logDebug(methodName, "isUnderway: " + isUnderway + ", elapsed: " + elapsed + ", this._checkOpenTimeout: " + this._checkOpenTimeout);
			if (isUnderway && elapsed > this._checkOpenTimeout) {
				this.logDebug(methodName, "Timeout has been reached.  Setting isUnderway to false.");
				isUnderway = false;
				this._setUnderway(isUnderway);
			}

			this.logExit(methodName);
			return isUnderway;
		},

		_hasContentViewer: function() {
			var methodName = "_hasContentViewer";
			var hasContentViewer = false;

			this._cleanUpPrevious(); // clean up any leftovers from the last launch.

			if (this._viewerWindow) {
				try {
					this.logDebug("open", "this._viewerWindow exists, so checking for this._viewerWindow.contentViewer within the try block.");
					if (this._viewerWindow.contentViewer) {
						this.logDebug(methodName, "this._viewerWindow.contentViewer exists, so setting hasContentViewer to true.");
						hasContentViewer = true;
					}
				} catch (e) { // IE throws an error after close the window & then access this._viewerWindow.contentViewer
					this.logDebug(methodName, "Exception caught when checking for existence of this._viewerWindow.contentViewer");
					this.logError(methodName, e.message, e);
				}
			}

			return hasContentViewer;
		},
		
		_hasSubViewer: function(item) {
			var methodName = "_hasSubViewer";
			var subViewerIndex = -1;

			this._cleanUpPrevious(); // clean up any leftovers from the last launch.

			if (this._viewerWindows && this._viewerWindows.length > 1) {
				try {
					this.logDebug("open", "Sub viewer window exists.");
					for(var i = 0; i < this._viewerWindows.length; i++){
						viewerWindow = this._viewerWindows[i];
						if(viewerWindow._viewerWindow && viewerWindow._viewerWindow.contentViewer){
							var viewerTab = viewerWindow._viewerWindow.contentViewer.mainTabContainer.getSelectedViewerTab();
							if(viewerTab && viewerTab.viewerItem.id == item.id){
								subViewerIndex = i;
								break;
							}
						}
					}
				} catch (e) { // IE throws an error after close the window & then access this._viewerWindow.contentViewer
					this.logDebug(methodName, "Exception caught when checking for existence of this._viewerWindow.contentViewer");
					this.logError(methodName, e.message, e);
				}
			}

			return subViewerIndex;
		},
		/**
		 * Opens an item in the viewer.
		 * 
		 * @param item
		 *            The item to view.
		 * @param openInBackground
		 * 
		 * @param openMessage
		 *            The <code>ecm.model.message</code> to display after the documents are opened.
		 * @since 3.0.1
		 */
		open: function(item, openInBackground, openMessage) {
			if (openMessage) {
				this._openMessage = openMessage;
			}
			this._open(item, false, openInBackground);
		},

		/**
		 * Previews an item in the viewer.
		 * 
		 * @param item
		 *            The item to view.
		 */
		preview: function(item, openInBackground) {
			this._open(item, true, openInBackground);
		},

		/**
		 * Opens an item in Merge and Split mode.
		 * 
		 * @param item
		 *            The item to view.
		 * @param openInBackground
		 * 
		 * @param openMessage
		 *            The <code>ecm.model.message</code> to display after the documents are opened.
		 * @since 3.0.1
		 */
		openInMergeSplit: function(item, openInBackground, openMessage) {
			if (openMessage) {
				this._openMessage = openMessage;
			}
			this._open(item, false, openInBackground, true);
		},

		_open: function(item, preview, openInBackground, inMergeSplit) {
			if (item instanceof Array) {
				this._openItems(item, preview, openInBackground, inMergeSplit);
			} else {
				this._openItems([
					item
				], preview, openInBackground, inMergeSplit);
			}
		},

		_openItems: function(items, preview, openInBackground, inMergeSplit) {
			var methodName = "_openItems";
			this.logEntry(methodName);

			var hasContentViewer = this._hasContentViewer();
			var saveOpenInBackground = openInBackground; // save the original passed value.

			for (var n = 0; n < items.length; n++) {
				var item = items[n];
				var hasSubViewer = this._hasSubViewer(item);
				if (saveOpenInBackground == undefined) {
					openInBackground = (n + 1 < items.length);
				}

				if (hasContentViewer == false && hasSubViewer == -1) {
					this.logDebug(methodName, "hasContentViewer is false and hasSubViewer is "+ hasSubViewer + ".  Queue the item");
					this._queueItem(item, preview, inMergeSplit);
				} else {
					if(hasContentViewer && hasSubViewer!=-1){
						this.logDebug(methodName, "hasContentViewer and hasSubViewer are true, set focus on sub Viewer.");
						this._setWindowFocus(hasSubViewer);
					} else if(hasSubViewer == -1 && hasContentViewer){
						this.logDebug(methodName, "hasContentViewer is true, open the item immediately.");
						if (openInBackground) {
							this._openItem(item, preview, openInBackground, inMergeSplit);	
						} else {
							this._openItem(item, preview, false, inMergeSplit);
						}
					}
				}
			}

			if (!hasContentViewer) {
				this._openViewerWindow();
			} else {
				if(hasSubViewer == -1)
					this._viewerWindow.focus(); // bring to foreground.
				
				if (this._openMessage && this._viewerWindow.contentViewer) {
					this._viewerWindow.contentViewer.showMessage(this._openMessage);
					delete this._openMessage;
				}
				if (!preview && inMergeSplit)
					this._showMessageOnceIfSomeCannotBeOpenedInMergeSplit(items);
			}

			this.logExit(methodName);
		},

		_openItemInNewWindow: function(item, openInBackground, openMessage) {
			var methodName = "_openItemInNewWindow";
			this.logEntry(methodName);
			if (openMessage) {
				this._openMessage = openMessage;
			}
			var newWindow = new ContentViewerWindow();
			ecm.widget.dialog.contentViewerWindow._viewerWindows.push(newWindow);
			newWindow._open(item,false, openInBackground, false);
			newWindow._subWindow = true;
			this.logExit(methodName);
		},
		
		_showMessageOnceIfSomeCannotBeOpenedInMergeSplit: function(items) {
			if (this._mergeSplitFallbackInfoShown)
				return;

			if (!this._viewerWindow.contentViewer.isMergeSplitModeInScopeForItems(items)) {
				this._viewerWindow.contentViewer.showMessageDialog(ecm.messages.viewer_mergesplit_fallback_info);
				this._mergeSplitFallbackInfoShown = true;
			}
		},

		_queueItem: function(item, preview, inMergeSplit) {
			if (preview) {
				this._toPreviewQueue.push(item);
			} else if (inMergeSplit) {
				this._toMergeSplitQueue.push(item);
			} else {
				this._toOpenQueue.push(item);
			}
		},

		_openItem: function(item, preview, openInBackground, inMergeSplit) {
			var methodName = "_openItem";
			if (preview) {
				this.logDebug(methodName, "Calling contentViewerWindow.preview with item: " + item.name + " and openInBackground: " + openInBackground);
				this._viewerWindow.contentViewer.preview(item, openInBackground);
			} else if (inMergeSplit) {
				this.logDebug(methodName, "Calling contentViewerWindow.openInMergeSplit with item: " + item.name + " and openInBackground: " + openInBackground);
				this._viewerWindow.contentViewer.openInMergeSplit(item, openInBackground);
			} else {
				this.logDebug(methodName, "Calling contentViewerWindow.open with item: " + item.name + " and openInBackground: " + openInBackground);
				this._viewerWindow.contentViewer.open(item, openInBackground);
			}
		},

		_cleanUpPrevious: function() {
			var methodName = "_cleanUpPrevious";
			this.logEntry(methodName);

			var cleanedUp = false;

			if (this._viewerWindow && this._viewerWindow.closed && this._viewerWindow.closed == true) {
				this.logDebug(methodName, "The viewer window is confirmed closed.  Clean everything up.");
				this._setUnderway(false);
				this._viewerWindow = null;
				this._toPreviewQueue = [];
				this._toOpenQueue = [];
				this._toMergeSplitQueue = [];
				cleanedUp = true;
			}

			this.logExit(methodName);
			return cleanedUp;
		}, 
		
		_setWindowFocus:function(index){
			this._viewerWindows[index]._viewerWindow.focus();
		},
		
		_checkOpenStatus: function() { // wait for the window to open within a specified timeout.
			var methodName = "_checkOpenStatus";
			this.logEntry(methodName);
			if (this._isUnderway()) {
				if (this._cleanUpPrevious()) {
					this.logDebug(methodName, "The viewer window was closed prematurely.");
				} else if (this._viewerWindow && !this._viewerWindow.closed && this._viewerWindow.contentViewer) {
					this.logDebug(methodName, "The viewer window opened, bring to foreground.  Set underway to false.");
					this._viewerWindow.focus();
					this._setUnderway(false);
				} else {
					this.logDebug(methodName, "Window still not open and timeout has not expired, retrying. this._openCalledTimestamp: " + this._openCalledTimestamp);
					this._underwayPoll = setTimeout(lang.hitch(this, "_checkOpenStatus"), 1000);
				}
			}

			this.logExit(methodName);
		},

		_openViewerWindow: function() {
			var methodName = "_openViewerWindow";
			this.logEntry(methodName);

			if (!this._isUnderway()) {
				this.logDebug(methodName, "Opening viewer window.");
				this._setUnderway(true);
				this._underwayPoll = setTimeout(lang.hitch(this, "_checkOpenStatus"), 1000);

				var sap = ecm.widget.dialog.ContentViewerWindow.getSizeAndPosition();
				var contentViewerWindow = ecm.model.desktop.servicesUrl + "/viewer.jsp?desktop=" + ecm.model.desktop.id;
				if (dojo.config.isDebug) {
					contentViewerWindow += ("&debug=true");
					if (ecm.logger.getUseConsole() == false) {
						contentViewerWindow += "&useConsole=false";
					}
				}

				if(this.wrappingTabController===true){
					contentViewerWindow += "&wrappingTabController=true";
				}
				
				this._viewerWindow = window.open(contentViewerWindow, "_blank", "status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + sap.left + ",top=" + sap.top + ",width=" + sap.width + ",height=" + sap.height + "\"", true);
				if(this._viewerWindows[0]==null)
					ecm.widget.dialog.contentViewerWindow._viewerWindows[0] = this._viewerWindow;
				this._showHandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"show",lang.hitch(this ,function() {
					this._viewerWindow.postMessage({
						"MessageId": "ecm.widget.dialog.SessionExpireWarningDialog.show", 
						"WarningTime" :ecm.model.desktop.sessionExpireWarningTime
					},"*");
				}));
				this._extendhandler = connect.connect(ecm.model.SessionTimer.getSessionTimer().warningDialog,"_onExtendSession",lang.hitch(this,function() {
					this._viewerWindow.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession", "*");
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
				if(!ecm.model.desktop.isSsoTokenPresent() && this._viewerWindow){
					this._viewerWindow._sessionTimer = ecm.model.SessionTimer.getSessionTimer();
				}
				this._onLogOffLink = dojo.connect(ecm.model.desktop, "logoff",lang.hitch(this,function() {
					if(this._viewerWindow != null)
						this._viewerWindow.close();
				}));
			}

			this.logExit(methodName);
		},

		/**
		 * This event is called when the viewer window opens and the ContentViewer is ready to use.
		 */
		onViewerWindowOpened: function() {
			var methodName = "onViewerWindowOpened";
			this.logEntry(methodName);
			this.logDebug(methodName, "Window opened, reset the timeout clock.");
			this._setUnderway(false);

			connect.connect(this._viewerWindow.contentViewer, "onDocumentOpened", this.onDocumentOpened);
			connect.connect(this._viewerWindow.contentViewer, "onDocumentClosed", this.onDocumentClosed);
			var windowInstance;
			if(this._toOpenQueue && this._toOpenQueue.length == 0)
				windowInstance = ecm.widget.dialog.contentViewerWindow._viewerWindows[ecm.widget.dialog.contentViewerWindow._viewerWindows.length-1];
			else
				windowInstance = this;
			if(windowInstance._subWindow){
				connect.connect(windowInstance._viewerWindow.contentViewer, "onDocumentOpened", windowInstance._viewerWindow.contentViewer._setupSubWindow());
			}
			// summary:
			//	this event is called when the viewer window opens and the ContentViewer within it is ready to use
			var n = 0;
			this._toOpenQueue = windowInstance._toOpenQueue;
			for ( var i in this._toOpenQueue) {
				var item = this._toOpenQueue[i];
				var openInBackground = (n + 1 < this._toOpenQueue.length);
				this.logDebug(methodName, "Calling contentViewer.open with item: " + item.name + " and openInBackground: " + openInBackground);
				windowInstance._viewerWindow.contentViewer.open(item, openInBackground);
				++n;
			}
			this._toOpenQueue = [];
			windowInstance._toOpenQueue=[];
			n = 0;
			for ( var i in this._toPreviewQueue) {
				var item = this._toPreviewQueue[i];
				var openInBackground = (n + 1 < this._toPreviewQueue.length);
				this.logDebug(methodName, "Calling contentViewer.preview with item: " + item.name + " and openInBackground: " + openInBackground);
				this._viewerWindow.contentViewer.preview(item, openInBackground);
				++n;
			}
			this._toPreviewQueue = [];

			n = 0;
			for ( var i in this._toMergeSplitQueue) {
				var item = this._toMergeSplitQueue[i];
				var openInBackground = (n + 1 < this._toMergeSplitQueue.length);
				this.logDebug(methodName, "Calling contentViewer.openInMergeSplit with item: " + item.name + " and openInBackground: " + openInBackground);
				this._viewerWindow.contentViewer.openInMergeSplit(item, openInBackground);
				++n;
			}
			if (this._toMergeSplitQueue.length > 0)
				this._showMessageOnceIfSomeCannotBeOpenedInMergeSplit(this._toMergeSplitQueue);
			this._toMergeSplitQueue = [];

			if (this._openMessage) {
				this._viewerWindow.contentViewer.showMessage(this._openMessage);
				delete this._openMessage;
			}
			
			this.logExit(methodName);
		},

		/**
		 * This event is called when the viewer window closes.
		 */
		onViewerWindowClosed: function() {
			this.logEntry("onViewerWindowClosed");
			// summary:
			//	this event is called when the viewer window closes.  C
			// Clear the queues if the user decides to close the window, so that queued requests don't show up unexpectedly later.
			this._toOpenQueue = [];
			this._toPreviewQueue = [];
			this._toMergeSplitQueue = [];
			if (this._extendhandler) {
				connect.disconnect(this._extendhandler);
				this._extendhandler = null;
			}
			if (this._showHandler) {
				connect.disconnect(this._showHandler);
				this._showHandler = null;
			}
			this.logExit("onViewerWindowClosed");
		},

		/**
		 * Called when an item is opened in the viewer.
		 * 
		 * @param item
		 *            the item that was opened
		 * @param preview
		 *            boolean indicating if opened in preview mode
		 * @since 3.0
		 */
		onDocumentOpened: function(item, preview) {
			this.logDebug("onDocumentOpened", "item: " + item.id + ", preview: " + preview);
		},

		/**
		 * Called when an item is closed in the viewer.
		 * 
		 * @param item
		 *            the item that was opened
		 * @param preview
		 *            boolean indicating if closed from preview mode
		 * @since 3.0
		 */
		onDocumentClosed: function(item, preview) {
			this.logDebug("onDocumentClosed", "item: " + item.id + ", preview: " + preview);
		}
	});

// we're just interested in the output from the debug logging.
	ContentViewerWindow.debugSizeAndPosition = false;

	/**
	 * Persists the size and position of the viewer window in a browser cookie.
	 * 
	 * @memberof ecm.widget.dialog.ContentViewerWindow
	 */
	ContentViewerWindow.saveSizeAndPosition = function() {
		var methodName = "ecm.widget.dialog.ContentViewerWindow.saveSizeAndPosition";
		ecm.logger.logEntry(methodName);

		if (!ecm.logger.isDebug() || ContentViewerWindow.debugSizeAndPosition) {
			var sizeAndPosition = {
				left: 100,
				top: 100,
				width: 860,
				height: 600
			};

			// position...
			if (typeof window.screenX == 'number') {
				sizeAndPosition.left = window.screenX;
				sizeAndPosition.top = window.screenY;
				ecm.logger.logDebug(methodName, "Using screenX and screenY");
			} else if (typeof window.screenLeft == 'number') {
				// IE gives the pixels from screen's left/top edge to the inner left/top border
				// of the content area.  So make adjustments for window dressing.
				sizeAndPosition.left = window.screenLeft - 4;
				sizeAndPosition.top = window.screenTop - 23;
				ecm.logger.logDebug(methodName, "Using screenLeft and screenTop (IE)");
			}

			// size...
			if (typeof window.innerWidth == 'number') {
				sizeAndPosition.width = window.innerWidth;
				sizeAndPosition.height = window.innerHeight;
				ecm.logger.logDebug(methodName, "Using innerWidth and innerHeight");
			} else if (has("ie")) {
				sizeAndPosition.width = document.body.clientWidth;
				sizeAndPosition.height = document.body.clientHeight;
				ecm.logger.logDebug(methodName, "Using document.body clientWidth and clientHeight (IE)");
			}

			var toj = dojojson.toJson(sizeAndPosition);
			ecm.logger.logDebug(methodName, "Size and position being saved is: " + toj);

			if (!ecm.logger.isDebug() || ContentViewerWindow.debugSizeAndPosition) {
				ecm.logger.logDebug(methodName, "Setting size and position cookie expiration to: { expires: 365 }");
				cookie("ecm.widget.dialog.ContentViewerWindow.sizeAndPosition", toj, {
					expires: 365
				});
			}
		}

		ecm.logger.logExit(methodName);
	};

	/**
	 * Returns the size and position of the viewer window as an Object.
	 * 
	 * @returns An object containing the size and position of the window. The object contains left, top, width and
	 *          height. For example: {left: 0, top: 0, width: 100, height: 100}
	 * @memberof ecm.widget.dialog.ContentViewerWindow
	 */
	ContentViewerWindow.getSizeAndPosition = function() {
		var methodName = "ecm.widget.dialog.ContentViewerWindow.getSizeAndPosition";
		ecm.logger.logEntry(methodName);

		var toj = null;
		if (!ecm.logger.isDebug() || ContentViewerWindow.debugSizeAndPosition) {
			toj = cookie("ecm.widget.dialog.ContentViewerWindow.sizeAndPosition");
			ecm.logger.logDebug(methodName, "Not in debug mode, so use cookie for viewer window sizing, if available.");
		} else {
			ecm.logger.logDebug(methodName, "In debug mode.  The viewer window will open to the default size and position.");
		}

		var sizeAndPosition = null;
		if (toj != null) {
			ecm.logger.logDebug(methodName, "Retrieved size and position: " + toj);
			sizeAndPosition = dojojson.fromJson(toj);

			// check if the window position is not on the screen, and reset if necessary...
			if (sizeAndPosition.top >= screen.availHeight) {
				sizeAndPosition.top = 100;
				ecm.logger.logDebug("Top would not be on the screen, setting back to default top.");
			}

			if (sizeAndPosition.left >= screen.availWidth) {
				sizeAndPosition.left = 100;
				ecm.logger.logDebug("Left would not be on the screen, setting back to default left.");
			}
		} else {
			ecm.logger.logDebug(methodName, "Initializing size and position");
			var left = 100;
			var top = 100;

			// position...
			if (typeof window.screenX == 'number') {
				left = window.screenX + 50;
				top = window.screenY + 100;
				ecm.logger.logDebug(methodName, "Using screenX and screenY of the parent window");
			} else if (typeof window.screenLeft == 'number') {
				// IE gives the pixels from screen's left/top edge to the inner left/top border
				// of the content area.  So make adjustments for window dressing.
				left = window.screenLeft + 46;
				top = window.screenTop + 77;
				ecm.logger.logDebug(methodName, "Using screenLeft and screenTop of the parent window (IE)");
			}

			sizeAndPosition = {
				left: left,
				top: top,
				width: 860,
				height: 600
			};
		}

		ecm.logger.logDebug(methodName, "Returning size and position: " + dojojson.toJson(sizeAndPosition));
		ecm.logger.logExit(methodName);
		return sizeAndPosition;
	};

	ecm.widget.dialog.contentViewerWindow = new ContentViewerWindow();

	return ContentViewerWindow;
});

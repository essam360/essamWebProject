/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/keys",
	"dojo/on",
	"dojo/aspect",
	"dojo/cookie",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"dijit/layout/StackContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/SplitContainer",
	"dijit/form/Button",
	"dijit/ToolbarSeparator",
	"dijit/Dialog",
	"dijit/Toolbar",
	"dijit/layout/_LayoutWidget",
	"idx/html",
	"dojox/html/entities",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/model/Action",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/model/ContentItem",
	"ecm/model/Repository",
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/viewer/model/MergeSplitContext",
	"ecm/widget/viewer/ContentViewerPane",
	"ecm/widget/viewer/_ViewerTabContainer",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/YesNoCancelDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/StatusDialog",
	"ecm/widget/dialog/ContentViewerWindow",
	"ecm/widget/ItemPropertiesPane",
	"ecm/widget/viewer/ContentViewerEditPaneTab",
	"ecm/widget/viewer/ContentViewerComentPaneTab",
	"ecm/widget/viewer/_DocViewerMixin",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/LoginDialog",
	"ecm/model/SessionTimer",
	"dojo/text!ecm/widget/viewer/templates/ContentViewer.html"
], //

function(declare, //
lang, //
connect, //
event, //
has, //
array, //
string, //
domStyle, //
domClass, //
keys, //
on, //
aspect, //
cookie, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
BorderContainer, //
StackContainer, //
TabContainer, //
SplitContainer, //
Button, //
ToolbarSeparator, //
Dialog, //
Toolbar, //
_LayoutWidget, //
idxHtml, //
entities, //
Messages, //
LoggerMixin, //
Action, //
Desktop, //
Request, //
ContentItem, //
Repository, //
ViewerItem, //
MergeSplitContext, //
ContentViewerPane, //
_ViewerTabContainer, //
ConfirmationDialog, //
YesNoCancelDialog,
MessageDialog, //
StatusDialog, //
ContentViewerWindow, //
ItemPropertiesPane, //
ContentViewerEditPaneTab, //
ContentViewerComentPaneTab, //
_DocViewerMixin, //
ErrorDialog, //
LoginDialog, //
Timer,
template) {

	var imagesDir = require.toUrl("ecm/widget/resources/images");

	/**
	 * @name ecm.widget.viewer.ContentViewer
	 * @class Provides a widget that contains tabs in which individual viewers for documents are displayed.
	 * @augments dijit._LayoutWidget
	 */
	var ContentViewer = declare("ecm.widget.viewer.ContentViewer", [
		_LayoutWidget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_DocViewerMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer.ContentViewer.prototype */

		// Template settings
		templateString: template,

		widgetsInTemplate: true, // has child widgets (it has to have ContentPanes).

		/**
		 * Shows the layout toolbar buttons, which include tabbed view, horizontal split, vertical split, or edit
		 * properties.
		 */
		showLayouts: true,

		/**
		 * Shows the <strong>Next</strong> and <strong>Previous</strong> toolbar buttons.
		 */
		showNextPrev: true,

		splitTabContainer: null,
		debug: false,

		/**
		 * Specifies whether the <code>ContentViewer</code> widget is the sole widget in a browser window.
		 */
		isEntireWindow: true,

		/**
		 * Specifies whether the <code>ContentViewer</code> widget is the primary layout widget in a browser window.
		 * If true, the <code>ecm.model.desktop</code> object for the window will be created and loaded.
		 */
		isChildWindow: false,
		
		/**
		 * Specifies whether the <code>ContentViewer</code> widget is the sub window.
		 */
		isSubWindow: false,
		/**
		 * The title of the window, when <code>isEntireWindow == true</code>.
		 */
		windowTitle: ecm.messages.viewer_window_title,

		/**
		 * The content viewer title. If specified, this text will be placed to the left of the top toolbar of this
		 * widget. If it is null, the text will be assigned by the widget, to a predefined localized value.
		 * 
		 * @since 2.0.3
		 */
		contentViewerTitle: null,

		/**
		 * The browser's locale.
		 */
		browserLocale: "",

		/**
		 * Specifies whether the tab controller is wrapped or scrolling
		 */
		wrappingTabController: false,
		
		_request: null,
		_splitRatio: 1.0,
		_resizeTimeout: false,
		_resizeDelta: 600, // ms of inactivity to wait during resize to detect end of resize
		_clickDelta: 200, // ms of inactivity before (re)checking if the button is actually disabled prior to executing the event
		_refreshDelta: 3000, // delay before retrying refresh next/previous.
		_enableDelay: 2000, // ms delay to reenable next/prev buttons.
		_focusedSplit: null,

		/**
		 * Sets to <code>true</code> to prevent iframe-based viewers from having their page set to
		 * <code>about:blank</code> externally.
		 */
		resetAboutBlank: false,

		enabled: false,

		/**
		 * Indicates the current <code>splitMode</code> value of the viewer. The possible values are:
		 * <code>none</code>, <code>left</code>, <code>right</code>, and <code>bottom</code>.
		 */
		splitMode: "none",

		_modeTabbed: "none",
		_modeRight: "right", // _detectBidi below changes this to "left" when the language is right-to-left.
		_modeBottom: "bottom",

		/**
		 * Indicates the current <code>viewerMode</code> value of the viewer. The possible values are:
		 * <code>none</code>, <code>left</code>, <code>right</code>, <code>bottom</code>, <code>edit</code>
		 * and <code>comment</code>.
		 * 
		 * @since 2.0.3.3
		 */
		viewerMode: "none",
		_modeEdit: "edit",
		_modeComment: "comment",
		limitTime:0,
		/**
		 * PI flag to indicate that the properties pane is shown
		 * 
		 * @private [_ifEnablePI=true]
		 */
		_ifEnablePI: true,

		_inDrag: false,
		_inResize: false,
		_splitConnections: null,
		_isNextPrevDirty: false,
		_inNextPrev: false,

		_mainPaneHeading: {
			"left": ecm.messages.viewer_right_frame,
			"right": ecm.messages.viewer_left_frame,
			"bottom": ecm.messages.viewer_top_frame,
			"edit": ecm.messages.viewer_viewer_frame,
			"comment": ecm.messages.viewer_viewer_frame
		},
		_splitPaneHeading: {
			"left": ecm.messages.viewer_left_frame,
			"right": ecm.messages.viewer_right_frame,
			"bottom": ecm.messages.viewer_bottom_frame,
			"edit": ecm.messages.viewer_properties_frame,
			"comment": ecm.messages.viewer_comment_frame
		},

		constructor: function() {
			if (!this._splitConnections) {
				this._splitConnections = [];
			}
		},

		/** @private */
		layout: function() {
			this.mainBorderContainer.resize();
		},

		/**
		 * Enables the edit properties mode in the viewer.
		 * 
		 * @param {boolean}
		 *            [show=true]
		 */
		enablePI: function(show) {
			if (show == undefined || show == true) {
				this._ifEnablePI = true;
			} else {
				this._ifEnablePI = false;
			}
		},

		postMixInProperties: function() {
			this._setValueFormatterLocale();
		},

		/** @private */
		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);

			if (this.isChildWindow) {

				// once the destkop is loaded, signal back to the parent window that we are ready to open documents.
				this._onDesktopLoadedHandler = connect.connect(Desktop, "onDesktopLoaded", this, function() {
					this.logEntry("_onDesktopLoaded");
					this._setupContentViewer();
					if (window.opener)
						window.opener.ecm.widget.dialog.contentViewerWindow.onViewerWindowOpened();
					this.logExit("_onDesktopLoaded");
				});

				// propagate new security token to parent window
				this._onSecurityTokenChangeHandler = connect.connect(Request, "onSecurityTokenChange", function(response) {
					if (window.opener)
						window.opener.ecm.model.Request.getSecurityToken(response);
				});

				// propagate linkedBoxRepositories back to the parent.
				this.own(aspect.after(Desktop, "_refreshLinkedBoxRepositories", lang.hitch(this, function(response, refresh, forward) {
					if (window.opener && Desktop != window.opener.ecm.model.desktop && forward === true) {
						var responseJSON = JSON.stringify(response);
						window.opener.ecm.model.desktop._refreshLinkedBoxRepositories(responseJSON, true, false);
					}
				}), true));

				// Create and register the progress dialog
				this._statusDialog = new StatusDialog();
				this._onRequestStartedHandler = connect.connect(Desktop, "onRequestStarted", this._statusDialog, "requestStartedHandler");
				this._onRequestCompletedHandler = connect.connect(Desktop, "onRequestCompleted", this._statusDialog, "requestCompletedHandler");

				// Create and register the (re)login dialog
				this._loginDialog = LoginDialog.getLoginDialog();
				this._onSessionExpiredHandler = connect.connect(Desktop, "onSessionExpired", this._loginDialog, "sessionExpiredHandler");		
				// Session timer -->
				// No session timer if SSO is used.
				if (!window._sessionTimer && !ecm.model.desktop.isSsoTokenPresent()) {
					try {
						// The viewer window was reloaded.
						window._sessionTimer = window.parent.ecm.model.SessionTimer.getSessionTimer();
						//IE can not get timer by window.parent
						if(!window._sessionTimer.timer)
							window._sessionTimer = window.opener.ecm.model.SessionTimer._sessionTimer;
					} catch (e) {
					}
				} 	
				//set Timer.timer to not start Timer in desktop._desktopLoaded
				if(window._sessionTimer)
					Timer.timer = window._sessionTimer.timer;
				this._warningDialog = ecm.widget.dialog.SessionExpireWarningDialog.getSessionExpireWarningDialog();
				window.addEventListener('message',lang.hitch(this,function(event) {
					if(event.data.MessageId =="ecm.widget.dialog.SessionExpireWarningDialog.show"){
						ecm.model.desktop.sessionExpireWarningTime = event.data.WarningTime;
						this._warningDialog.show();
						}
					}));
				window.addEventListener('message',lang.hitch(this,function(event) {
					if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession"){
						this._warningDialog.hide();
					}
				}));	
				this._logoffHandler = connect.connect(this._warningDialog,"_onLogoff",window,function() {
					window.opener.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onLogoff", "*");
				});
				
				this._extendhandler = connect.connect(this._warningDialog,"_onExtendSession",window,function() {
					window.opener.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession", "*");
				});

				// <-- Session timer
				// Set up an error dialog and start monitoring for errors early, so error dialog appears for configuration errors
				this._errorDialog = new ErrorDialog();
				this._onMessageAddedHandler = connect.connect(Desktop, "onMessageAdded", this._errorDialog, "messageAddedHandler");

				var desktopId = Desktop.getRequestParam("desktop");
				if (desktopId && desktopId != "") {
					Desktop.loadDesktop(desktopId, null, false, true);
				} else {
					Desktop.loadDesktop(null, null, false, true);
				}

			} else {
				this._setupContentViewer();
			}

			this.logExit(methodName);
		},

		/**
		 * Returns the text to place to the left of the ContentViewer widget toolbar.
		 * 
		 * @since 2.0.3
		 */
		getContentViewerTitle: function(viewer) {
			var contentViewerTitle = "";
			if (this.contentViewerTitle != null) {
				contentViewerTitle = this.contentViewerTitle;
			} else if (this.isBookmark) {
				contentViewerTitle = ecm.messages.viewer_viewer;
			} else {
				var action = (viewer && viewer.preview) ? ecm.messages.viewer_preview : (this.isMergeSplitModeEnabled() && (!viewer || this.mergeSplitContext.isViewerInScope(viewer))) ? ecm.messages.viewer_merge_and_split : ecm.messages.viewer_view;
				var args = [
					idxHtml.escapeHTML(ecm.model.desktop.applicationName?ecm.model.desktop.applicationName:ecm.messages.product_name),
					action
				];
				contentViewerTitle = string.substitute(ecm.messages.viewer_heading, args);
			}

			return contentViewerTitle;
		},

		_setValueFormatterLocale: function() {
			var cookieLocale = cookie(ecm.model.Desktop.cookieLocaleValueFormat);
			var cookieLanguage = cookie(ecm.model.Desktop.cookieLocaleLanguage);
			if (!cookieLocale && !cookieLanguage) {
				// if no cookie locale && no cookie language, then no need to call setLocale.  ValueFormatter will use the dojo gregorian and number.
			} else if (cookieLocale && cookieLanguage && cookieLocale == cookieLanguage) {
				// if cookie for locale == cookie for language, then no need to call setLocale.  ValueFormatter will use the dojo gregorian and number. 
			} else if (!cookieLocale) {
				Desktop.valueFormatter.setLocale(this.browserLocale);
			} else {
				Desktop.valueFormatter.setLocale(cookieLocale);
			}
		},

		/**
		 * @private Event fired when the context menu should be displayed in split container pane.
		 * @param evt
		 *            The event.
		 */
		_onContextMenuSplitContainer: function(evt) {
			event.stop(evt);
			return false;
		},

		_setupContentViewer: function() {
			var methodName = "_setupContentViewer";
			this.logEntry(methodName);

			this._modeRight = (this.isLeftToRight() ? "right" : "left");
			this.logDebug(methodName, "this._modeRight set to: " + this._modeRight);

			this._initializeMergeSplitContext();
			this.own(aspect.after(this.mergeSplitContext, "onItemAdded", lang.hitch(this, function(item) {
				this.open(item);
			}), true));
			this._setupCommonToolbar();
			this.splitContainer.liveSplitters = false;
			this._focusedSplit = this.mainTabContainer;
			this.mainTabContainer.contentViewer = this;
			this.connect(this.mainTabContainer, "onViewerTabSelected", "_onViewerTabSelected");
			this.connect(this.mainTabContainer, "selectChild", "_onMainFocus");
			this.connect(this.mainTabContainer, "onFocus", "_onMainFocus");
			this.own(aspect.after(this.mainTabContainer, "addContentViewerTab", lang.hitch(this, this._afterAddContentViewerTab), true));
			this.own(aspect.before(this.mainTabContainer, "unloadViewer", lang.hitch(this, this._beforeRemoveContentViewerTab), true));
			this.connect(this.mainTabContainer, "unloadViewer", "_onMainUnloadViewer");
			this.connect(this.mainTabContainer.tablist, "onButtonClick", "_onTabButtonClick");
			this.connect(this.mainTabContainer, "onTabMenuItemSelect", "_onTabButtonClick");
			this.connect(this.splitContainer, "resize", "_winResize");

			window.contentViewer = this;
			//  ANY CHANGE MADE TO THIS ASSIGNMENT MUST BE UNIT TESTED FOR ATTEMPTING TO CLOSE A VIEWER WINDOW WITH UNSAVED
			//  ANNOTATION CHANGES.  IF THE WINDOW EXITS WITHOUT SHOWING YOU A DIALOG TO CONFIRM ABANDONING CHANGES, YOU HAVE 
			//  BROKEN IT.
			var onBeforeUnload = lang.hitch(this, function(event) {
				var methodName = "onBeforeUnload";
				this.logEntry(methodName);
				try {
					if (oldOnBeforeUnload) {
						var results = oldOnBeforeUnload(event);
						if (results) {
							return results;
						}
					}
					var isOkToClose = true;
					var isPrinting = false;

					if (this.splitMode != this._modeTabbed) {
						this.logDebug(methodName, "In split view.");
						isOkToClose = this._okToClose(this.mainTabContainer) && this._okToClose(this.splitTabContainer);
						isPrinting = this._isPrinting(this.mainTabContainer) || this._isPrinting(this.splitTabContainer);
					} else if (this.viewerMode == this._modeEdit) {
						this.logDebug(methodName, "In edit properties view");
						isOkToClose = this._okToClose(this.mainTabContainer) && this._okToClose(this.viewerEditContainer);
						isPrinting = this._isPrinting(this.mainTabContainer);
					} else if (this.viewerMode == this._modeComment) {
						this.logDebug(methodName, "In comments view");
						isOkToClose = this._okToClose(this.mainTabContainer) && this._okToClose(this.viewerCommentContainer);
						isPrinting = this._isPrinting(this.mainTabContainer);
					} else {
						this.logDebug(methodName, "Not in split or edit view");
						isOkToClose = this._okToClose(this.mainTabContainer);
						isPrinting = this._isPrinting(this.mainTabContainer);
					}

					if (!isOkToClose) {
						this.logDebug(methodName, "!isOkToClose");
						this.logExit(methodName);
						return (ecm.messages.viewer_warn_has_changes + " " + ecm.messages.viewer_warn_confirm_exit);
					} else if (isPrinting) {
						this.logDebug(methodName, "isPrinting");
						this.logExit(methodName);
						return (ecm.messages.viewer_warn_is_printing + " " + ecm.messages.viewer_warn_confirm_exit);
					}

					// If the user chooses to exit with unsaved changes, or while printing is in progress,
					// then the following lines are not executed.
					this._saveSizeAndPosition();

					if (!(has("ie") || has("trident"))) { // IE call onbeforeunload at weird unpredictable times, so we can't do this reliably here.
						this.uninitialize();
					}
				} catch (e) {
					this.logDebug(methodName, e.message);
				}
				this.logExit(methodName);
			});

			//  ANY CHANGE MADE TO THESE TWO ASSIGNMENTS MUST BE UNIT TESTED FOR ATTEMPTING TO CLOSE A VIEWER WINDOW WITH UNSAVED
			//  ANNOTATION CHANGES.  IF THE WINDOW EXITS WITHOUT SHOWING YOU A DIALOG TO CONFIRM ABANDONING CHANGES, YOU HAVE BROKEN
			//  IT.
			var oldOnBeforeUnload = window.onbeforeunload;
			window.onbeforeunload = onBeforeUnload;
			var onUnloadHandler;

			var onUnload = lang.hitch(this, function(event) {
				var methodName = "onUnload";
				this.logEntry(methodName);
				try {
					if (onUnloadHandler) {
						onUnloadHandler.remove();
						onUnloadHandler = null;
					}
					// It's better to handle the uninitialize() cleanup work from the unload handler above under some browsers.
					// But if the user tries to close the window, is prompted to confirm the exit (the return() statements above), 
					// and chooses to continue exiting then the window is closed and the uninitialize() call above isn't executed.
					// This is a last-chance shot at cleanup.
					this.uninitialize();
				} catch (e) {
					this.logDebug(methodName, e.message);
				}
				this.logExit(methodName);
			});
			onUnloadHandler = on(window, "unload", onUnload);

			if (this.isEntireWindow) {
				this.logDebug(methodName, "this.isEntireWindow");
				document.title = string.substitute(this.windowTitle, [
                    ecm.model.desktop.applicationName?ecm.model.desktop.applicationName:ecm.messages.product_name
				]);

				this.own(aspect.after(this.splitContainer.domNode, "oncontextmenu", lang.hitch(this, "_onContextMenuSplitContainer"), true));

				this.own(aspect.after(this.splitContainer, "_contextMenuCreated", lang.hitch(this, function(targetNode, menu, selectedItems) {
				}), true));

				this.own(aspect.after(this.splitContainer.domNode, "onkeydown", lang.hitch(this, function(evt) {
					if (evt.shiftKey && evt.keyCode == keys.F10) {
						this._onContextMenuSplitContainer(evt);
					}
				}), true));
			}

			this.isBookmark = (this.isBookmark ? this.isBookmark : false);
			if (this.isBookmark) {
				this.logDebug(methodName, "this.isBookmark");
				this.showNextPrev = false;
			}

			if (this.viewerToolbarText) {
				this.viewerToolbarText.innerHTML = this.getContentViewerTitle();
			}

			if (this.viewerEditContainer) {
				this._hidePropertiesPane();
				this.viewerEditContainer.setParent(this);
				domStyle.set(this.viewerEditContainer.itemPropertiesPane.domNode, "visibility", "visible");
			}

			if (this.viewerCommentContainer) {
				this._hideCommentPane();
				this.viewerCommentContainer.setParent(this);
			}

			this.logExit(methodName);
		},
		
		_setupSubWindow: function() {
			domStyle.set(this.toggleMergeSplitButton.domNode, "visibility", "hidden");
			domStyle.set(this.toggleMergeSplitSeparator.domNode, "visibility", "hidden");
			domStyle.set(this.layoutSeparator.domNode, "visibility", "hidden");
			domStyle.set(this.layoutTabsButton.domNode, "visibility", "hidden");
			domStyle.set(this.layoutVertButton.domNode, "visibility", "hidden");
			domStyle.set(this.layoutHorizButton.domNode, "visibility", "hidden");
			this.isSubWindow = true;
		},
		
		_initializeMergeSplitContext: function() {
			this.mergeSplitContext = new MergeSplitContext();
			this.own(aspect.after(this.mergeSplitContext, "onToggled", lang.hitch(this, function(viewer) {
				this._toggleMergeSplitDisplay(viewer);
			}), true));
			this.own(aspect.after(this.mergeSplitContext, "onMergeSplitModeFailed", lang.hitch(this, function(viewer) {
				this._toggleMergeSplitDisplay(viewer);
			}), true));
		},

		_afterAddContentViewerTab: function(contentViewerTab) {
			var lengthAfterAdd = this.mergeSplitContext._addViewer(contentViewerTab.contentViewerPane.docViewer);
			if (lengthAfterAdd === 1)
				this._addPlusTabs();
			contentViewerTab.updateButtonState();
		},

		_beforeRemoveContentViewerTab: function(contentViewerTab) {
			var lengthAfterRemove = this.mergeSplitContext._removeViewer(contentViewerTab.contentViewerPane.docViewer);
			if (lengthAfterRemove === 0) {
				this._collapseSplit();
				this._cleanupSplit();
				this._setViewerMode(this._modeTabbed);
				var viewerTab = this.mainTabContainer.getSelectedViewerTab();
				if (viewerTab)
					this.mainTabContainer.selectChild(viewerTab);
			}
		},

		/** @private */
		uninitialize: function() {
			var methodName = "uninitialize";
			this.logEntry(methodName);
			if (!this._uninitialized) {
				// Be sure to trap any errors during this cleanup.
				// There may be problems with the cleanup work under some browsers, depending
				// on the context in which uninitialize() is called.
				try {
					this.inherited(arguments);

					this._unloadAllViewers();

					if (this._onDesktopLoadedHandler) {
						connect.disconnect(this._onDesktopLoadedHandler);
						this._onDesktopLoadedHandler = null;
					}
					if (this._onSecurityTokenChangeHandler) {
						connect.disconnect(this._onSecurityTokenChangeHandler);
						this._onSecurityTokenChangeHandler = null;
					}
					if (this._onRequestStartedHandler) {
						connect.disconnect(this._onRequestStartedHandler);
						this._onRequestStartedHandler = null;
					}
					if (this._onRequestCompletedHandler) {
						connect.disconnect(this._onRequestCompletedHandler);
						this._onRequestCompletedHandler = null;
					}
					if (this._onSessionExpiredHandler) {
						connect.disconnect(this._onSessionExpiredHandler);
						this._onSessionExpiredHandler = null;
					}
					if (this._logoffHandler) {
						connect.disconnect(this._logoffHandler);
						this._logoffHandler = null;
					}
					if (this._extendhandler) {
						connect.disconnect(this._extendhandler);
						this._extendhandler = null;
					}
					if (this._onMessageAddedHandler) {
						connect.disconnect(this._onMessageAddedHandler);
						this._onMessageAddedHandler = null;
					}

					if (this._statusDialog) {
						this._statusDialog.destroyRecursive(false);
						this._statusDialog = null;
					}

					if (this._loginDialog) {
						this._loginDialog.destroyRecursive(false);
						this._loginDialog = null;
					}

					if (this._errorDialog) {
						this._errorDialog.destroyRecursive(false);
						this._errorDialog = null;
					}

					if (this.toggleMergeSplitButton) {
						this.toggleMergeSplitButton.destroyRecursive(false);
						this.toggleMergeSplitButton = null;
					}

					if (this.layoutTabsButton) {
						this.layoutTabsButton.destroyRecursive(false);
						this.layoutTabsButton = null;
					}

					if (this.layoutVertButton) {
						this.layoutVertButton.destroyRecursive(false);
						this.layoutVertButton = null;
					}

					if (this.layoutHorizButton) {
						this.layoutHorizButton.destroyRecursive(false);
						this.layoutHorizButton = null;
					}

					if (this.layoutEditButton) {
						this.layoutEditButton.destroyRecursive(false);
						this.layoutEditButton = null;
					}

					if (this.layoutCommentButton) {
						this.layoutCommentButton.destroyRecursive(false);
						this.layoutCommentButton = null;
					}

					if (this.toggleMergeSplitSeparator) {
						this.toggleMergeSplitSeparator.destroyRecursive(false);
						this.toggleMergeSplitSeparator = null;
					}

					if (this.layoutSeparator) {
						this.layoutSeparator.destroyRecursive(false);
						this.layoutSeparator = null;
					}

					if (this.navSeparator) {
						this.navSeparator.destroyRecursive(false);
						this.navSeparator = null;
					}

					if (this.nextHitButton) {
						this.nextHitButton.destroyRecursive(false);
						this.nextHitButton = null;
					}

					if (this.prevHitButton) {
						this.prevHitButton.destroyRecursive(false);
						this.prevHitButton = null;
					}

					if (this._confirmCloseDialog) {
						this._confirmCloseDialog.destroyRecursive(false);
						this._confirmCloseDialog = null;
					}
					
					if (this._confrimContinueDialog) {
						this._confrimContinueDialog.destroyRecursive(false);
						this._confrimContinueDialog = null;
					}
					
					if (this._confirmExitMergeSplitDialog) {
						this._confirmExitMergeSplitDialog.destroyRecursive(false);
						this._confirmExitMergeSplitDialog = null;
					}
				} catch (e) {
					this.logDebug(methodName, e.message);
				}
				this._uninitialized = true;
			}
			this.logExit(methodName);
		},

		/**
		 * Opens an item in the viewer, if it is not already opened. If <code>openInBackground</code> is
		 * <code>false</code>, the viewer will be selected into the foreground and displayed. In split mode, the tab
		 * is selected in the current focused split.
		 * 
		 * @param item
		 *            The item to view.
		 * @param openInBackground
		 */
		open: function(item, openInBackground) {
			// summary:
			//  Opens the item within the viewer.
			// description:
			//  Opens the item within the viewer.  This involves determining the appropriate viewing app to show the item,
			//  then launching that app in a new tab.
			var methodName = "open";
			this.logEntry(methodName);
			this._open(item, openInBackground, false);
			this.logExit(methodName);
		},

		/**
		 * Show a message.
		 * 
		 * @param message
		 * 			An instance of <code>ecm.model.Message</code>.
		 * 
		 * @since 3.0.1
		 */
		showMessage: function(message) {
			if (message) {
				ecm.model.desktop.addMessage(message);
			}
		},

		showMessageDialog: function(message) {
			if (!this._messageDialog) {
				this._messageDialog = new MessageDialog({
					buttonLabel: ecm.messages.message_dialog_title
				});
			}
			this._messageDialog.showMessage(message);
		},

		/**
		 * Previews an item in the viewer, if it is not already opened. If <code>openInBackground</code> is
		 * <code>false</code>, the viewer will be selected into the foreground and displayed. In split mode, the tab
		 * is selected in the current focused split.
		 * 
		 * @param item
		 *            The item to view.
		 * @param openInBackground
		 */
		preview: function(item, openInBackground) {
			var methodName = "preview";
			this.logEntry(methodName);
			this._open(item, openInBackground, true);
			this.logExit(methodName);
		},

		/**
		 * Opens an item in Merge and Split mode, if it is not already opened. If <code>openInBackground</code> is
		 * <code>false</code>, the viewer will be selected into the foreground and displayed. In split mode, the tab
		 * is selected in the current focused split.
		 * 
		 * @param item
		 *            The item to view.
		 * @param openInBackground
		 */
		openInMergeSplit: function(item, openInBackground) {
			var methodName = "openInMergeSplit";
			this.logEntry(methodName);
			this._openInMergeSplit(item, openInBackground);
			domStyle.set(this.toggleMergeSplitButton.domNode, "display", "");
			domStyle.set(this.toggleMergeSplitSeparator.domNode, "display", "");
			this.logExit(methodName);
		},

		/**
		 * Close the item, if open in a viewer or preview viewer.
		 * 
		 * @param item
		 *            The item to close.
		 * @param okCallback
		 *            Called if the item is found and it's tab(s) are closed.
		 * @param cancelCallback
		 *            Called if the item was either not found, or the close was cancelled by the user.
		 * @param preview
		 *            True or false, to indicate whether or not to close an item opened via the open call or via the
		 *            preview call. Default is false.
		 * @param confirm
		 *            True or false, to indicate whether or not to show a confirmation dialog if the viewer contains
		 *            unsaved changes or is in the middle of spooling a print. Default is false.
		 * @since 2.0.3.4
		 */
		closeItem: function(item, okCallback, cancelCallback, preview, confirm) {
			var mainTab = this.mainTabContainer.getContentViewerTab(item, preview);
			if (mainTab != null) {
				if (confirm) {
					this._onCloseTabPage(mainTab, okCallback, cancelCallback);
				} else {
					this._closeTabPage(mainTab, okCallback);
				}
			} else if (cancelCallback) {
				cancelCallback();
			}
		},

		_initializeSplitters: function() {
			var methodName = "_initializeSplitters";
			this.logEntry(methodName);

			this._modeRight = (this.isLeftToRight() ? "right" : "left");
			this.logDebug(methodName, "this._modeRight set to: " + this._modeRight);

			var splitterSetEnabled = function(enabled) {
				this.enabled = enabled;
				domStyle.set(this.domNode, "display", (enabled ? "" : "none"));
			};

			var rightSplitter = this.splitContainer.getSplitter(this._modeRight);
			rightSplitter.setEnabled = lang.hitch(rightSplitter, splitterSetEnabled);

			var bottomSplitter = this.splitContainer.getSplitter(this._modeBottom);
			bottomSplitter.setEnabled = lang.hitch(bottomSplitter, splitterSetEnabled);

			rightSplitter.setEnabled(false);
			bottomSplitter.setEnabled(false);

			this.logExit(methodName);
		},

		_enableSplitter: function(splitMode, enable) {
			var methodName = "_enableSplitter";
			this.logEntry(methodName, "splitMode: " + splitMode + ", enable: " + enable);
			var splitter = this.splitContainer.getSplitter(splitMode);
			//this.logDebug(methodName, "splitter: " + splitter);
			if (splitter)
				splitter.setEnabled(enable);
			this.logExit(methodName);
		},

		/** @private */
		startup: function() {
			var methodName = "startup";
			this.logEntry(methodName);

			this.inherited(arguments);
			this._initializeSplitters();
			this.layout();

			this.logExit(methodName);
		},

		_open: function(item, openInBackground, preview, inMergeSplit) {
			var methodName = "_open";
			this.logEntry(methodName);

			var viewerItem = new ViewerItem(item);
			pageNumber = 1;
			if (item.celement != null)
			{
				pageNumber = item.celement + 1;
			}
			this.logDebug(methodName, "Opening " + item.name + " in main tab pane.");
			var inTabView = this.splitMode == this._modeTabbed;
			if (this.isMergeSplitModeEnabled() || inMergeSplit) {
				if (this.mainTabContainer.getContentViewerTab(viewerItem.item, preview))
					this._openTab(this.mainTabContainer, viewerItem, pageNumber, !openInBackground, preview, false, inMergeSplit);
				else if (!inTabView && this.splitTabContainer.getContentViewerTab(viewerItem.item, preview))
					this._openTab(this.splitTabContainer, viewerItem, pageNumber, !openInBackground, preview, false, inMergeSplit);
				else
					this._openTab(inTabView ? this.mainTabContainer : this._focusedSplit, viewerItem, pageNumber, !openInBackground, preview, false, inMergeSplit);
			} else {
				this._openTab(this.mainTabContainer, viewerItem, pageNumber, !openInBackground, preview);
				if (!inTabView) {
					this.logDebug(methodName, "Opening " + item.name + " in " + this.splitMode + " tab pane.");
					this._openTab(this.splitTabContainer, viewerItem, pageNumber, !this.splitTabContainer.hasChildren(), preview);
				}
			}

			this._delayEnableToolbarButtons();
			this.logExit(methodName);
		},

		_openInMergeSplit: function(item, openInBackground) {
			var methodName = "_openInMergeSplit";
			this.logEntry(methodName);
			this._open(item, openInBackground, false, true);
			this._delayEnableToolbarButtons();
			this.logExit(methodName);
		},

		/**
		 * @deprecated As of release 2.0.2. This method is not implemented.
		 */
		close: function(item) {
		},

		/**
		 * Called when an item is opened in the viewer.
		 * 
		 * @param item
		 *            the item that was opened
		 * @param preview
		 *            boolean indicating if opened in preview mode
		 * @since 2.0.3.3
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
		 * @since 2.0.3.3
		 */
		onDocumentClosed: function(item, preview) {
			this.logDebug("onDocumentClosed", "item: " + item.id + ", preview: " + preview);
		},

		/**
		 * Event is fired when the next hit button for the tab container should be either enabled or disabled.
		 * 
		 * @param tabContainer
		 *            The tabContainer associated with this state update.
		 * @param enabled
		 *            Boolean to enable or disable
		 * @since 2.0.3.3
		 */
		onNextEnabled: function(tabContainer, enabled) {
		},

		/**
		 * Event is fired when the previous hit button for the tab container should be either enabled or disabled.
		 * 
		 * @param tabContainer
		 *            The tabContainer associated with this state update.
		 * @param enabled
		 *            Boolean to enable or disable
		 * @since 2.0.3.3
		 */
		onPrevEnabled: function(tabContainer, enabled) {
		},

		/**
		 * For the specified page, determine the availability of next and previous documents relative to the current
		 * document being displayed. Calling this method will cause onNextEnabled and onPrevEnabled events to fire, to
		 * update navigation controls.
		 * 
		 * @param tabPage
		 *            The tabPage containing the document being viewed
		 * @since 2.0.3.3
		 */
		refreshNavigation: function(tabPage) {
			var methodName = "refreshNavigation";
			this.logEntry(methodName);
			if (this.showNextPrev) {
				//if (this.showNextPrev && this._isNextPrevDirty) {
				this.logDebug(methodName, "this._refreshNextPrev() called.");
				this._refreshNextPrev(tabPage);
			}
			this.logExit(methodName);
		},

		/**
		 * Close all open viewers, without confirming to save or discard changes. Any changes, or print jobs underway
		 * may be interrupted.
		 * 
		 * @since 2.0.3.3
		 */
		closeAllViewers: function() {
			this._unloadAllViewers();
		},

		_saveSizeAndPosition: function() {
			if (this.isChildWindow) {
				// Only save size-and-position when launched from ContentViewerWindow.
				// When placed as a widget in a larger UI, we want to skip this.
				ecm.widget.dialog.ContentViewerWindow.saveSizeAndPosition();
			}
		},

		_getSizeAndPosition: function() {
			return ecm.widget.dialog.ContentViewerWindow.getSizeAndPosition();
		},

		_onMainFocus: function() {
			var methodName = "_onMainFocus";
			this.logEntry(methodName);
			this._setTabContainerFocus(this.mainTabContainer);
			this.logExit(methodName);
		},

		_onViewerTabSelected: function(selectedViewerTab) {
			var methodName = "_onViewerTabSelected";
			this.logEntry(methodName);
			if (!this._ifEnablePI || !selectedViewerTab || !selectedViewerTab.viewerItem)
				return;

			this._updateHeader(selectedViewerTab.contentViewerPane.docViewer);
			var item = selectedViewerTab.viewerItem.item;
			this._updatePropertiesUI(selectedViewerTab, item);
			this._updateCommentsUI(selectedViewerTab, item);
			this.logExit(methodName);
		},

		_updateHeader: function(selectedViewer) {
			this.viewerToolbarText.innerHTML = this.getContentViewerTitle(selectedViewer);
			this.toggleMergeSplitButton.set("disabled", !!selectedViewer && !this.mergeSplitContext.isViewerInScope(selectedViewer));
		},

		_updatePropertiesUI: function(selectedViewerTab, item) {
			var methodName = "_updatePropertiesUI";
			this.logEntry(methodName);
			this._setButtonDisabled(this.layoutEditButton, false);

			if (this.viewerMode == this._modeEdit) {
				if (!this.layoutEditButton.get("disabled")) {
					if (!this.movingTab && this.viewerEditContainer != undefined) {
						this.logDebug(methodName, "set item properties in edit properties pane");
						// need the item and also the applet view pane to see if it is changed (dirty) before closing
						selectedViewerTab.retrieveEditItem(lang.hitch(this, function(retrievedItem) {
							this.viewerEditContainer.setItem(retrievedItem, selectedViewerTab);
						}));
					}
				} else {
					this.logDebug(methodName, "hide properties pane");
					this._hidePropertiesPane();
					this.viewerMode = this._modeTabbed;
				}
	
			}
			this.logExit(methodName);
		},

		_updateCommentsUI: function(selectedViewerTab, item) {
			var methodName = "_updateCommentsUI";
			this.logEntry(methodName);
			this._setButtonDisabled(this.layoutCommentButton, false);
			var cm = item.repository._isCM();
			this._setButtonLabels(this.layoutCommentButton, cm ? ecm.messages.notelogs : ecm.messages.comments, cm ? ecm.messages.viewer_split_notelog_layout : ecm.messages.viewer_split_comment_layout);

			if (this.viewerMode == this._modeComment) {
				if (!this.layoutCommentButton.get("disabled")) {
					if (!this.movingTab) {
						selectedViewerTab.retrieveEditItem(lang.hitch(this, function(retrievedItem) {
							this.viewerCommentContainer.setItem(retrievedItem, selectedViewerTab);
						}), true);
					}
				} else {
					this.logDebug(methodName, "hide comments pane");
					this._hideCommentPane();
					this.viewerMode = this._modeTabbed;
				}
			}
			this.logExit(methodName);
		},

		_isItemCommentable: function(item) {
			return item.isCommentable() || item.repository._isCM() && item.isNotelogable();
		},

		_onMainUnloadViewer: function(contentViewerTab) {
			var methodName = "_onMainUnloadViewer";
			this.logEntry(methodName);
			if (!this._ifEnablePI)
				return;

			if (this.viewerMode == this._modeEdit && contentViewerTab == this.selectedChildWidget) {
				// Clear the dirty flag since we have already asked the user if it is okay to abandon changes.
				// this should only be done when the tab being closed is the current selected viewer, AND the properties are visible (with changes)
				// We don't care about losing the dirty flag, because the properties are about to be reset entirely.
				if (this.viewerEditContainer) {
					this.viewerEditContainer._setIsDirty(false); // do not prompt.  We already have.
				}
			}

			// if the last tab is closed then hide and disable edit mode
			var tabs = this.mainTabContainer.getViewerTabs();
			this.logDebug(methodName, "tab count: " + tabs.length);
			if (tabs.length < 1) {
				this._hidePropertiesPane();
				this._hideCommentPane();
				this._setButtonDisabled(this.layoutEditButton, true);
				this._setButtonDisabled(this.layoutCommentButton, true);
				if (this.viewerMode == this._modeComment || this.viewerMode == this._modeEdit) {
					this._setViewerMode(this._modeTabbed);
				}
			}

			this.logExit(methodName);
		},

		_onTabButtonClick: function(tabPage) {
			if (tabPage.plusTab) {
				var tabContainer = tabPage.getParent();
				if (tabContainer)
					this._openNewTab(tabContainer);
			}
		},

		_onSplitFocus: function() {
			var methodName = "_onSplitFocus";
			this.logEntry(methodName);
			this._setTabContainerFocus(this.splitTabContainer);
			this.logExit(methodName);
		},

		_setTabContainerFocus: function(tabContainer) {
			var methodName = "_setTabContainerFocus";
			this.logEntry(methodName);

			if (this._focusedSplit && this._focusedSplit.domNode) {
				// clear the old one if it is there
				domStyle.set(this._focusedSplit.domNode, "borderTop", "2px solid #fff");
			}

			this._focusedSplit = tabContainer;
			if (this._focusedSplit && this._focusedSplit.domNode) {
				if (this.splitMode != this._modeTabbed) {
					this.logDebug(methodName, "this.splitMode != none");
					domStyle.set(this._focusedSplit.domNode, "borderTop", "2px solid #008abf");
				} else {
					this.logDebug(methodName, "this.splitMode == none");
					domStyle.set(this._focusedSplit.domNode, "borderTop", "2px solid #fff");
				}
			}

			if (this.showNextPrev) { // This only needs to happen when next/prev functionality is there.
				this._setNextPrevDisabled(tabContainer);
				this._refreshNextPrev();
			}

			this.logExit(methodName);
		},

		_refreshNextPrev: function(tabPage) {
			var methodName = "_refreshNextPrev";
			this.logEntry(methodName);

			if (this.showNextPrev) {
				var currentTabPage = this._focusedSplit.getSelectedViewerTab();
				if (tabPage == null) {
					tabPage = currentTabPage;
				}

				if (tabPage != null) {
					this.logDebug(methodName, "tabPage != null");
					var tabContainer = tabPage.tabContainer;
					var viewerPane = tabPage.getChildren()[0];

					if (viewerPane && viewerPane.isViewerLoaded) {
						if (viewerPane.isViewerLoaded()) {
							this.logDebug(methodName, "viewerPane was found");

							this.onNextEnabled(tabPage.tabContainer, viewerPane.hasNextItem(function() {
								this._refreshNextPrev(tabPage); // false will be returned immediately if more rows need to be retrieved.  So retry when the retrieve returns.
							}));

							this.onPrevEnabled(tabPage.tabContainer, viewerPane.hasPrevItem());

							this._inNextPrev = false;
							this._isNextPrevDirty = false;
						} else {
							setTimeout(lang.hitch(this, function() {
								this._refreshNextPrev(tabPage);
							}), this._refreshDelta);
						}
					}
				}
			}
			this.logExit(methodName);
		},

		_unloadAllViewers: function() {
			var methodName = "_unloadAllViewers";
			this.logEntry(methodName);
			this._removePlusTabs();

			if (this.splitMode != this._modeTabbed) {
				this.logDebug(methodName, "this.splitMode != none");
				this.splitTabContainer.unloadViewers();
			}

			if (this.viewerMode == this._modeEdit) {
				this._hidePropertiesPane();
				this._setViewerMode(this._modeTabbed);
			}

			if (this.viewerMode == this._modeComment) {
				this._hideCommentPane();
				this._setViewerMode(this._modeTabbed);
			}

			this.mainTabContainer.unloadViewers();
			this.logExit(methodName);
			for(var i=window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindows.length-1;i>=0;i--){
				if(window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindows[i]._viewerWindow.contentViewer == this){
					if(i==0)
						window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindows[0] = null;
					else
						window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindows.splice(i,1);
					break;
				}
			}
			
		},

		_isTabInContainer: function(tabContainer, viewerTab) {
			var index = -1;
			if (tabContainer != null)
				tabContainer.getIndexOfChild(viewerTab);
			return (index >= 0);
		},

		_setViewerMode: function(mode) {
			switch (mode) {
			case this._modeTabbed:
			case this._modeRight:
			case this._modeBottom:
				this.splitMode = mode;
				this.viewerMode = mode;
				break;
			case this._modeEdit:
			case this._modeComment:
				this.splitMode = this._modeTabbed;
				this.viewerMode = mode;
				break;
			}
		},

		// This method triggers either a proceed/cancel or yes/no/cancel dialog depending
		// on the situation - if necessary, and then makes the appropriate callback, depending
		// on the response.
		_okToSetMode: function(mode, okCallback, cancelCallback) {
			switch (this.viewerMode) {
			case this._modeRight:
			case this._modeBottom:
				// Currently in one of the split modes.  If we are changing, make sure it is okay
				// Too close the split pane before doing so.
				if (mode != this.viewerMode) {
					this._okToCloseSplit(okCallback, cancelCallback);
				}
				break;
			case this._modeEdit:
				// Currently in edit mode.  Check for unsaved properties.
				if (mode != this.viewerMode) {
					var okToSet = this._okToClose(this.viewerEditContainer);
					if (okToSet && okCallback) {
						okCallback();
					} else {
						this.viewerEditContainer.onClose(okCallback, cancelCallback);
					}
				}
				break;
			case this._modeComment:
				// Currently in comment mode.  Check for unsaved properties.
				if (mode != this.viewerMode) {
					this.viewerCommentContainer.onClose(okCallback, cancelCallback);
				}
				break;
			default:
				if (mode != this.viewerMode && okCallback) {
					okCallback();
				}
				break;
			}
		},

		// This method triggers either a proceed/cancel or yes/no/cancel dialog depending
		// on the situation - if necessary, and then makes the appropriate callback, depending
		// on the response.
		_okToSwitchTab: function(okCallback, cancelCallback, tabPage) {
			if (tabPage && tabPage.plusTab) {
			    // cancel switching when a plus tab is selected
                if (lang.isFunction(cancelCallback))
                    cancelCallback();
			} else {
				switch (this.viewerMode) {
				case this._modeEdit:
					var okToSwitch = this._okToClose(this.viewerEditContainer);
					if (okToSwitch && okCallback) {
						okCallback();
					} else {
						this.viewerEditContainer.onClose(okCallback, cancelCallback);
					}
					break;
				case this._modeComment:
					this.viewerCommentContainer.onClose(okCallback, cancelCallback);
					break;
				default:
					okCallback();
					break;
				}
			}
		},

		_okToCloseViewersForRepository: function(okCallback, cancelCallback) {
			var repoId = this._getFocusedContentViewerRepositoryId();
			var confirmList = this._getCloseViewConfirmListForRepository(repoId);
			if (confirmList.length == 1) {
				confirmList[0].onClose(okCallback, cancelCallback);
			} else if (confirmList.length > 1) {
				var tabStatus = this._getTabContainersStatusForRepository(repoId, true);
				var isPrinting = array.some(tabStatus, function(status) {
					return status.isPrinting;
				});
				if (!isPrinting && this.viewerMode != this._modeEdit && this.viewerMode != this._modeComment) {
					var nameList = this._getTabNamesWithUnsavedAnnotations(tabStatus);
					this._showConfirmCloseDialog(ecm.messages.viewer_files_have_annotation_changes + "<br>" + nameList, okCallback, cancelCallback);
				} else {
					tabStatus = this.getViewersStatus(true);
					this._showConfirmCloseDialog(this._getTabStatusListInHtml(tabStatus), okCallback, cancelCallback);
				}
			} else {
				okCallback();
			}
		},

		_getTabContainersStatusForRepository: function(repositoryId, includePrinting) {
			var containersStatus = this._getTabContainerStatus(this.mainTabContainer, includePrinting, repositoryId);
			if (this.splitMode != this._modeTabbed)
				containersStatus = containersStatus.concat(this._getTabContainerStatus(this.splitTabContainer, includePrinting, repositoryId));
			return containersStatus;
		},

		_getTabStatusListInHtml: function(tabStatus) {
			var nameList = "";
			if (tabStatus.mainStatus != null) {
				var statusList = tabStatus.mainStatus instanceof Array ? tabStatus.mainStatus : [ tabStatus.mainStatus ];
				var isDirty = isPrinting = isPropertiesDirty = isCommentsDirty = false;
				array.forEach(statusList, function(status) {
					isDirty = isDirty || status.isDirty && !status.ignoreDirty;
					isPrinting = isPrinting || status.isPrinting;
					isPropertiesDirty = isPropertiesDirty || status.isPropertiesDirty;
					isCommentsDirty = isCommentsDirty || status.isCommentsDirty;
				});
				if (isDirty || isPrinting) {
					var heading = this._mainPaneHeading[this.viewerMode];
					if (heading)
						nameList += heading;
					if (isDirty) {
						nameList += ("<br>" + ecm.messages.viewer_warn_has_changes);
					}
					if (isPrinting) {
						nameList += ("<br>" + ecm.messages.viewer_warn_is_printing);
					}
				}
				if (isPropertiesDirty || isCommentsDirty) {
					if (nameList != "") {
						nameList += "<br>";
					}

					nameList += ("<br>" + this._splitPaneHeading[this.viewerMode]);
					nameList += ("<br>" + ecm.messages.viewer_warn_has_changes);
				}
			}

			if (tabStatus.splitStatus != null) {
				statusList = tabStatus.splitStatus instanceof Array ? tabStatus.splitStatus : [ tabStatus.splitStatus ];
				isDirty = isPrinting = false;
				array.forEach(statusList, function(status) {
					isDirty = isDirty || status.isDirty && !status.ignoreDirty;
					isPrinting = isPrinting || status.isPrinting;
				});
				if (isDirty || isPrinting) {
					if (nameList != "") {
						nameList += "<br>";
					}
					var heading = ("<br>" + this._splitPaneHeading[this.viewerMode]);
					if (heading)
						nameList += heading;
					if (isDirty) {
						nameList += ("<br>" + ecm.messages.viewer_warn_has_changes);
					}
					if (isPrinting) {
						nameList += ("<br>" + ecm.messages.viewer_warn_is_printing);
					}
				}
			}
			return nameList;
		},

		_showConfirmCloseDialog: function(message, okCallback, cancelCallback) {
			if (this._confirmCloseDialog)
				this._confirmCloseDialog.destroyRecursive(false);

			var executeCalled = false;
			this._confirmCloseDialog = new ConfirmationDialog({
				title: ecm.messages.confirmation_icon_tooltip,
				text: message + "<br><br>" + ecm.messages.viewer_confirm_to_proceed,
				onExecute: lang.hitch(this, function() {
					executeCalled = true;
					if (lang.isFunction(okCallback))
						okCallback();
					this._confirmCloseDialog.hide();
				}),
				onShow: lang.hitch(this, function() {
					this._hideViewers();
				}),
				onHide: lang.hitch(this, function() {
					if (!executeCalled && lang.isFunction(cancelCallback))
						cancelCallback();
					this._showViewers();
				}),
				keepContentAreaOverflowAuto: true
			});
			this._confirmCloseDialog.own(aspect.after(this._confirmCloseDialog, "resize", lang.hitch(this, function() {
				domStyle.set(this._confirmCloseDialog.containerNode, "overflow", "auto");
			})));
			domClass.add(this._confirmCloseDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");

			this._confirmCloseDialog.show();
		},
		
		_onCloseSubWindow: function(subWindow, continueCallback, switchWindowCallback){
			var methodName = "_closeSubWindow";
			var tabPage = subWindow.contentViewer.mainTabContainer.getSelectedViewerTab();
			var viewerPane = subWindow.contentViewer._getFocusedContentViewerPane();
			var mainWindow = window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindow;
			var confirmList = subWindow.contentViewer._getCloseTabConfirmList(tabPage);
			if (confirmList.length >= 1) {
				var statusList;
				statusList = string.substitute(ecm.messages.viewer_prompt_lost_changes,[viewerPane.viewerItem.item.name]);
				mainWindow.contentViewer._showContinueDialog(statusList, lang.hitch(subWindow,function() {
					this.contentViewer._closeSubWindowWithoutSave(subWindow);
					if (lang.isFunction(continueCallback))
						continueCallback();
					}), switchWindowCallback);
			} else{
				subWindow.close();
			}
		},
		
		_closeSubWindowWithoutSave: function(subWindow){
			subWindow.onbeforeunload = null;
			subWindow.contentViewer.uninitialize();
			subWindow.opener=null;
			subWindow.close();
		},
		
		_showContinueDialog: function(statusList,continueCallback, switchWindowCallback){
			if (this._confrimContinueDialog)
				this._confrimContinueDialog.destroyRecursive(false);

			this._confrimContinueDialog = new ConfirmationDialog({
				title: ecm.messages.confirmation_icon_tooltip,
				text: statusList,
				buttonLabel:ecm.messages.viewer_continue,
				cancelButtonLabel: ecm.messages.viewer_switch_window,
				"class": "confirmContinueDialog",
				onExecute: lang.hitch(this,function(){
					if (lang.isFunction(continueCallback))
						continueCallback();
					this._confrimContinueDialog.hide();
				}),
				onShow: lang.hitch(this, function() {
					this._hideViewers();
				}),
				onCancel: lang.hitch(this, function() {
					if (!(has("ie")||has("trident")) && lang.isFunction(switchWindowCallback))
						switchWindowCallback();
				}),
				onHide: lang.hitch(this, function() {
					if (lang.isFunction(switchWindowCallback))
						switchWindowCallback();
				}),
				
				keepContentAreaOverflowAuto: true,
			});
			this._confrimContinueDialog.own(aspect.after(this._confrimContinueDialog, "resize", lang.hitch(this, function() {
				domStyle.set(this._confrimContinueDialog.containerNode, "overflow", "auto");
			})));
			domClass.add(this._confrimContinueDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");

			this._confrimContinueDialog.show();
		},
		
		_okToCloseTab: function(tabPage, okCallback, cancelCallback) {
			var methodName = "_okToCloseTab";
			var confirmList = this._getCloseTabConfirmList(tabPage);
			if (confirmList.length == 1) {
				confirmList[0].onClose(lang.hitch(this, function() {
					this._closeTabPage(tabPage, okCallback);
				}), lang.hitch(this, function() {
					if (lang.isFunction(cancelCallback))
						cancelCallback(tabPage);
				}));
			} else if (confirmList.length > 1) {
				var tabStatus = this._getViewerTabStatus(tabPage, true);
				var statusList = this._getTabStatusListInHtml(tabStatus);
				this._showConfirmCloseDialog(statusList, lang.hitch(this, function() {
					this._closeTabPage(tabPage, okCallback);
				}), function() {
					if (lang.isFunction(cancelCallback))
						cancelCallback(tabPage);
				});
			} else {
				this._closeTabPage(tabPage, okCallback);
			}
		},

		// Simple true/false return on the container.  Accepts viewer tabs, or the edit pane.
		_okToClose: function(container) {
			var okToClose = true;
			if (container && container._okToClose) {
				okToClose = container._okToClose();
			}

			return okToClose;
		},

		_closeTabPage: function(tabPage, okCallback) {
			if (tabPage != null) {
				var viewerPane = tabPage.contentViewerPane;
				if (this.isMergeSplitModeEnabled()) {
					this.logDebug("_closeTabPage", "Closing viewerPane");
					if (lang.isFunction(okCallback))
						okCallback(viewerPane.contentViewerTab);
				} else {
					var mainViewerPane = this.mainTabContainer.getMatchedViewerPane(viewerPane);
					var splitViewerPane = (this.splitMode != this._modeTabbed ? this.splitTabContainer.getMatchedViewerPane(viewerPane) : null);
					this._closeTabPanes(mainViewerPane, splitViewerPane, okCallback);
				}
			}
		},

		_closeTabPanes: function(mainViewerPane, splitViewerPane, okCallback) {
			var methodName = "_closeTabPanes";
			this.logEntry(methodName);

			if (mainViewerPane != null) {
				this.logDebug(methodName, "Closing mainViewerPane");
				if (okCallback) {
					okCallback(mainViewerPane.contentViewerTab);
				}
			}

			if (splitViewerPane != null) {
				this.logDebug(methodName, "Closing splitViewerPane");
				if (okCallback) {
					okCallback(splitViewerPane.contentViewerTab);
				}
			}

			this.logExit(methodName);
		},

		_isPrinting: function(tabContainer) {
			var methodName = "_isPrinting";
			this.logEntry(methodName);
			var isPrinting = false;

			var tabs = tabContainer.getViewerTabs();
			if (tabs != null && tabs.length > 0) {
				for (var n = 0; n < tabs.length && !isPrinting; n++) {
					var viewerPane = tabs[n].contentViewerPane;
					isPrinting = viewerPane.isPrinting();
				}
			}

			this.logExit(methodName);
			return (isPrinting);
		},

		_okToCloseSplit: function(okCallback, cancelCallback) {
			var methodName = "_okToCloseSplit";
			this.logEntry(methodName);

			var okToClose = true;
			if (this.splitTabContainer != null) {
				var tabStatus = this._getTabContainerStatus(this.splitTabContainer, true);
				if (tabStatus.length > 0) {
					var isPrinting = array.some(tabStatus, function(status) {
						return status.isPrinting;
					});
					if (!isPrinting && this.viewerMode != this._modeEdit && this.viewerMode != this._modeComment) {
						var nameList = this._getTabNamesWithUnsavedAnnotations(tabStatus);
						this._showConfirmCloseDialog(ecm.messages.viewer_files_have_annotation_changes + "<br>" + nameList, okCallback, cancelCallback);
					} else {
						var statusList = this._getTabStatusListInHtml({
							splitStatus: tabStatus
						});
						this._showConfirmCloseDialog(statusList, okCallback, cancelCallback);
					}
				} else {
					okCallback();
				}
			}

			this.logExit(methodName);
			return okToClose;
		},

		_getTabNamesWithUnsavedAnnotations: function(statusList) {
			var nameList = "";
			array.forEach(statusList, function(status) {
				if (status.isDirty && !status.ignoreDirty) {
					if (nameList)
						nameList += "<br>";
					nameList += status.title;
				}
			});
			return nameList;
		},

		_getCloseViewConfirmListForRepository: function(repositoryId) {
			var confirmList = [];
			array.forEach(this._getViewerTabsForRepository(this.mainTabContainer, repositoryId), lang.hitch(this, function(tab) {
				confirmList = confirmList.concat(this._getCloseTabConfirmList(tab));
			}));
			if (this.splitMode != this._modeTabbed) {
				array.forEach(this._getViewerTabsForRepository(this.splitTabContainer, repositoryId), lang.hitch(this, function(tab) {
					confirmList = confirmList.concat(this._getCloseTabConfirmList(tab));
				}));
			}
			return confirmList;
		},

		_getViewerTabsForRepository: function(tabContainer, repositoryId) {
			var viewers = tabContainer.getViewerTabs();
			if (repositoryId) {
				viewers = array.filter(viewers, lang.hitch(this, function(tab) {
					return tab.contentViewerPane.viewerItem.item.repository.id == repositoryId;
				}));
			}
			return viewers;
		},

		_getCloseTabConfirmList: function(tabPage) {
			var confirmList = [];
			var viewerPane = tabPage.contentViewerPane;

			if (this.splitMode == this._modeTabbed) {
				if ((viewerPane.docViewer.isDirty() && !viewerPane.docViewer.ignoreDirty()) || viewerPane.docViewer.isPrinting()) {
					confirmList.push(viewerPane);
				}

				if (this._getPropertiesDirty(tabPage)) {
					confirmList.push(this.viewerEditContainer);
				}

				if (this._getCommentsDirty(tabPage)) {
					confirmList.push(this.viewerCommentContainer);
				}
			} else {
				var mainViewerPane = this.mainTabContainer.getMatchedViewerPane(viewerPane);
				var splitViewerPane = this.splitTabContainer.getMatchedViewerPane(viewerPane);

				if (mainViewerPane && ((mainViewerPane.docViewer.isDirty() && !mainViewerPane.docViewer.ignoreDirty()) || mainViewerPane.docViewer.isPrinting())) {
					confirmList.push(mainViewerPane);
				}

				if (splitViewerPane && ((splitViewerPane.docViewer.isDirty() && !splitViewerPane.docViewer.ignoreDirty()) || splitViewerPane.docViewer.isPrinting())) {
					confirmList.push(splitViewerPane);
				}
			}

			return confirmList;
		},

		/**
		 * Returns a data structure containing information about all open viewers that have unsaved changes, and/or are
		 * in the process of printing. The returned data structure:
		 * 
		 * <pre><code>
		 *  {
		 *      splitMode: one of &quot;none&quot;, &quot;left&quot;, &quot;right&quot; or &quot;bottom&quot;, indicating the position of the split pane relative to the main pane
		 *      viewerMode: one of &quot;none&quot;, &quot;left&quot;, &quot;right&quot; &quot;bottom&quot;, &quot;edit&quot;, or &quot;comment&quot;, indicating the current mode of the viewer
		 *      mainStatus: an array containing 0..n status objects
		 *      [ 
		 *          {
		 *              title:             the title as it appears on the viewer's tab
		 *              tabIndex:          the tab index of the dirty and/or printing tab
		 *              id:                the item id of the item being viewed
		 *              repositoryId:      the repository id of the item being viewed
		 *              isDirty:           boolean indicating that the item is dirty 
		 *              isPropertiesDirty: boolean indicating that properties pane is open and contains unsaved changes
		 *              isCommentsDirty:   boolean indicating that comments pane is open and contains unsaved changes
		 *              isPrinting:        boolean indicating that the item is printing 
		 *              isPreview:         boolean indicating that this tab represents a preview viewer
		 *          }
		 *          ...
		 *      ],
		 *      splitStatus: an array containing 0..n status objects, or null if splitMode == &quot;none&quot;.
		 *      [
		 *          ...
		 *      ]
		 *  }
		 * </code></pre>
		 * 
		 * @param includePrinting
		 *            (optional) Indicate whether or not to include viewers that are printing. If <code>true</code>,
		 *            all viewers that are either printing or dirty are returned. If <code>false</code> (default),
		 *            return only dirty viewers.
		 * @return {object} An object following the data structure described above.
		 */
		getViewersStatus: function(includePrinting) {
			var viewersStatus = {};

			viewersStatus.mainStatus = this._getTabContainerStatus(this.mainTabContainer, includePrinting);
			viewersStatus.splitMode = this.splitMode;
			viewersStatus.viewerMode = this.viewerMode;

			if (this.splitMode != this._modeTabbed) {
				viewersStatus.splitStatus = this._getTabContainerStatus(this.splitTabContainer, includePrinting);
			} else {
				viewersStatus.splitStatus = null;
			}

			return viewersStatus;
		},

		_getViewerTabStatus: function(tab, includePrinting) {
			var tabStatus = {};
			var mainTab = this.mainTabContainer.getMatchedViewerTab(tab);

			tabStatus.mainStatus = this._getTabStatus(mainTab, includePrinting);
			if (this.splitMode != this._modeTabbed) {
				var splitTab = this.splitTabContainer.getMatchedViewerTab(tab);
				tabStatus.splitStatus = this._getTabStatus(splitTab, includePrinting);
			} else {
				tabStatus.splitStatus = null;
			}

			return tabStatus;
		},

		_getTabContainerStatus: function(tabContainer, includePrinting, repositoryId) {
			var methodName = "_getTabContainerStatusForRepository";
			this.logEntry(methodName);

			var tabs = this._getViewerTabsForRepository(tabContainer, repositoryId);
			var viewersStatus = [];
			includePrinting = includePrinting === true;
			if (tabs != null && tabs.length > 0) {
				for (var n = 0; n < tabs.length; n++) {
					var tabStatus = this._getTabStatus(tabs[n], includePrinting);
					if (tabStatus != null) {
						tabStatus.tabIndex = n;
						viewersStatus.push(tabStatus);
					}
				}
			}

			this.logExit(methodName);
			return viewersStatus;
		},

		// Gather status for an individual tab, either the current selected or not.
		_getTabStatus: function(tab, includePrinting) {
			var tabStatus = null;
			var viewerPane = tab.contentViewerPane;
			var isPropertiesDirty = this._getPropertiesDirty(tab);
			var isCommentsDirty = this._getCommentsDirty(tab);

			if (viewerPane.isDirty() || isPropertiesDirty || isCommentsDirty || (includePrinting && viewerPane.isPrinting())) {
				tabStatus = {
					title: tab.title,
					id: viewerPane.viewerItem.item.id,
					repositoryId: viewerPane.viewerItem.item.repository.id,
					isDirty: viewerPane.isDirty(),
					ignoreDirty: viewerPane.docViewer.ignoreDirty(),
					isPropertiesDirty: isPropertiesDirty,
					isCommentsDirty: isCommentsDirty,
					isPrinting: viewerPane.isPrinting(),
					isPreview: viewerPane.preview
				};
			}

			return tabStatus;
		},

		// Check if the viewer open in the tab is currently selected and has unsaved properties being displayed.
		_getPropertiesDirty: function(tab) {
			propertiesDirty = false;
			if (this.viewerMode == this._modeEdit && tab == this.mainTabContainer.selectedChildWidget) {
				propertiesDirty = !this._okToClose(this.viewerEditContainer);
			}

			return propertiesDirty;
		},

		_getCommentsDirty: function(tab) {
			commentsDirty = false;
			if (this.viewerMode == this._modeComment && tab == this.mainTabContainer.selectedChildWidget) {
				commentsDirty = !this._okToClose(this.viewerCommentContainer);
			}

			return commentsDirty;
		},

		_openRightSplit: function() {
			var methodName = "_openRightSplit";
			this.logEntry(methodName, "this._modeRight: " + this._modeRight);

			this._enableSplitter(this._modeRight, true);

			var newWidth = Math.round(this.splitContainer.domNode.clientWidth / 2);
			this.logDebug(methodName, "layout children width: " + newWidth);
			domStyle.set(this.sidePane.domNode, "width", newWidth + "px");
			this.splitContainer.layout();

			this.logExit(methodName);
		},

		_openBottomSplit: function() {
			var methodName = "_openBottomSplit";
			this.logEntry(methodName);

			this._enableSplitter(this._modeBottom, true);

			var newHeight = Math.round(this.splitContainer.domNode.clientHeight / 2);
			this.logDebug(methodName, "layout children height: " + newHeight);
			domStyle.set(this.bottomPane.domNode, "height", newHeight + "px");
			this.splitContainer.layout();

			this.logExit(methodName);
		},

		_exportTabs: function(tabContainer, exportSelection) {
			var methodName = '_exportTabs';
			this.logEntry(methodName);

			var exportedTabs = [];

			var selectedTab = tabContainer.getSelectedViewerTab();
			if (selectedTab) {
				var selectedViewerPane = selectedTab.getChildren()[0];

				var tabs = tabContainer.getViewerTabs();
				if (tabs != null && tabs.length > 0) {
					for (var n = 0; n < tabs.length; n++) {
						var pane = tabs[n].contentViewerPane;
						var exportedTab = {
							viewerItem: pane.viewerItem,
							preview: pane.preview,
							pageNumber: pane.getPageNumber(),
							selected: (exportSelection ? (pane == selectedViewerPane) : (n == 0))
						};

						exportedTabs.push(exportedTab);
					}
				}
			}

			this.logExit(methodName);
			return exportedTabs;
		},

		_importTabs: function(tabContainer, exportedTabs) {
			var methodName = "_importTabs";
			this.logEntry(methodName);

			array.forEach(exportedTabs, function(tab) {
				this._openTab(tabContainer, tab.viewerItem, tab.pageNumber, tab.selected, tab.preview, true);
			}, this);

			this.logExit(methodName);
		},

		_cloneTabs: function(toTabContainer, fromTabContainer, cloneSelection) {
			var methodName = "_cloneTabs";
			this.logEntry(methodName);

			if (!fromTabContainer) {
				fromTabContainer = this.mainTabContainer;
			}

			var exportedTabs = this._exportTabs(fromTabContainer, cloneSelection);
			this._importTabs(toTabContainer, exportedTabs);

			this.logExit(methodName);
		},

		_transferTabs: function(fromContainer) {
			array.forEach(fromContainer.getViewerTabs(), lang.hitch(this, function(tab) {
				this._transferTab(tab, fromContainer);
			}));
		},

		_transferTab: function(viewerTab, fromContainer) {
			var toContainer;
			if (fromContainer == this.mainTabContainer) {
				if (this.viewerMode == this._modeTabbed) {
					this._openBottomSplit();
					this._initializeSplitMode(this._modeBottom, this.bottomPane);
					this._onSplitFocus();
					this._addPlusTabs();
				}
				toContainer = this.splitTabContainer;
			} else {
				toContainer = this.mainTabContainer;
			}

			var existingTab = toContainer.getContentViewerTab(viewerTab.viewerItem.item, viewerTab.preview);
			if (existingTab) {
				fromContainer.unloadViewer(viewerTab);
				toContainer.selectChild(existingTab);
			} else {
				fromContainer.removeContentViewerTab(viewerTab, true);
				toContainer.addContentViewerTab(viewerTab, true);
				toContainer.selectChild(viewerTab);
				viewerTab.tabContainer = toContainer;
			}
		},

		_startDrag: function() {
			var methodName = "_startDrag";
			this.logEntry(methodName);

			this._inDrag = true;
			this._dragHide(this.mainTabContainer);

			if (this.splitMode != this._modeTabbed)
				this._dragHide(this.splitTabContainer);

			this.logExit(methodName);
		},

		_dragHide: function(tabContainer) {
			var methodName = "_dragHide";
			this.logEntry(methodName);
			var currentTab = tabContainer.getSelectedViewerTab();
			domStyle.set(currentTab.domNode, "width", "1px");
			domStyle.set(currentTab.domNode, "height", "1px");
			this.logExit(methodName);
		},

		_stopDrag: function() {
			var methodName = "_stopDrag";
			this.logEntry(methodName);

			var mainSize = this._dragShow(this.mainTabContainer);
			var splitSize = 0;

			if (this.splitMode != this._modeTabbed)
				splitSize = this._dragShow(this.splitTabContainer);

			this._inDrag = false;
			this._updateSplitRatio(mainSize, splitSize);
			this.logExit(methodName);
		},

		_updateDrag: function() {
			var methodName = "_updateDrag";
			this.logEntry(methodName);

			if (this.splitMode != this._modeTabbed && this._inDrag) {
				var mainSize = this._splitGetSize(this.mainTabContainer);
				var splitSize = 0;

				if (this.splitMode != this._modeTabbed)
					splitSize = this._splitGetSize(this.splitTabContainer);

				this._updateSplitRatio(mainSize, splitSize);
			}

			this.logExit(methodName);
		},

		_updateSplitRatio: function(mainSize, splitSize) {
			var methodName = "_updateSplitRatio";

			if (splitSize == 0) {
				this._splitRatio = 1.0;
			} else {
				this._splitRatio = mainSize / (mainSize + splitSize);
			}

			this.logDebug(methodName, "Setting splitRatio = " + this._splitRatio);
		},

		_splitGetSize: function(tabContainer) {
			var methodName = "_splitGetSize";
			this.logEntry(methodName);

			var returnValue = 0;
			if (this.splitMode == this._modeRight) {
				this.logDebug(methodName, "this.splitMode == right");
				returnValue = tabContainer.domNode.clientWidth;
			} else {
				this.logDebug(methodName, "this.splitMode != right");
				returnValue = tabContainer.domNode.clientHeight;
			}

			this.logExit(methodName);
			return returnValue;
		},

		_dragShow: function(tabContainer) {
			var methodName = "_dragShow";
			this.logEntry(methodName);

			var currentTab = tabContainer.getSelectedViewerTab();
			// It looks like the tab at the top is being counted as part of the tab container's clientHeight.
			this.logDebug("_dragShow", "Container Size", "Width: " + tabContainer.domNode.clientWidth + ", Height: " + tabContainer.domNode.clientHeight);
			domStyle.set(currentTab.domNode, "width", tabContainer.domNode.clientWidth + "px");
			domStyle.set(currentTab.domNode, "height", (tabContainer.domNode.clientHeight - 32) + "px");
			this.logDebug("_dragShow", "Size Set", "Width: " + currentTab.domNode.style.width + ", Height: " + currentTab.domNode.style.height);

			var returnValue = this._splitGetSize(tabContainer);

			this.logExit(methodName);
			return returnValue;
		},

		_winResize: function() {
			this._inResize = true;
			this._resizeTime = new Date();
			if (this._resizeTimeout === false) {
				this._resizeTimeout = true;
				setTimeout(lang.hitch(this, "_winResizeTimeout"), this._resizeDelta);
			}
		},

		_winResizeTimeout: function() {
			if (new Date() - this._resizeTime < this.resizeDelta) {
				setTimeout(lang.hitch(this, "_winResizeTimeout"), this.resizeDelta);
			} else {
				this._resizeTimeout = false;
				this._winResizeEnd();
			}
		},

		_refreshSplitMaxSize: function() {
			var methodName = "_refreshSplitMaxSize";
			this.logEntry(methodName);

			var totalWidth = this.mainTabContainer.domNode.clientWidth + this.splitTabContainer.domNode.clientWidth;
			this.sidePane.maxSize = totalWidth - this.sidePane.minSize;
			this.logDebug(methodName, "Side pane maxSize set to " + this.sidePane.maxSize);

			this.logExit(methodName);
		},

		_winResizeEnd: function() {
			var methodName = "_winResizeEnd";
			this.logEntry(methodName);
			this._inResize = false;

			if (this.splitMode == this._modeRight) {
				this.logDebug(methodName, "this.splitMode == right");
				var totalWidth = this.mainTabContainer.domNode.clientWidth + this.splitTabContainer.domNode.clientWidth;
				var mainWidth = Math.round(this._splitRatio * totalWidth);
				var rightWidth = (totalWidth - mainWidth);
				if (mainWidth < 10) {
					mainWidth = 10; // force a gap.  This is a bugfix.
				}
				this.logDebug(methodName, "main & right widths: " + mainWidth + " & " + rightWidth);
				this.mainTabContainer.domNode.parentNode.style.width = mainWidth + "px";
				this.splitTabContainer.domNode.parentNode.style.width = rightWidth + "px";
				domStyle.set(this.bottomPane.domNode, "height", "1px");
				this._refreshSplitMaxSize();
				this.splitContainer.layout();
			} else if (this.splitMode == this._modeBottom) {
				this.logDebug(methodName, "this.splitMode == bottom");
				var totalHeight = this.mainTabContainer.domNode.clientHeight + this.splitTabContainer.domNode.clientHeight;
				var mainHeight = Math.round(this._splitRatio * totalHeight);
				var bottomHeight = Math.round(totalHeight - mainHeight);
				this.logDebug(methodName, "main & bottom heights: " + mainHeight + " & " + bottomHeight);
				this.mainTabContainer.domNode.parentNode.style.height = mainHeight + "px";
				this.splitTabContainer.domNode.parentNode.style.height = bottomHeight + "px";
				domStyle.set(this.sidePane.domNode, "width", "3px");
				this.splitContainer.layout();
			} else if (this.splitMode == this._modeTabbed) {
				var totalHeight = this.mainTabContainer.domNode.clientHeight;
				this.logDebug(methodName, "edit tab height: " + totalHeight);

				if (this.viewerMode == this._modeEdit) {
					domStyle.set(this.viewerEditContainer.domNode, "height", totalHeight + "px");
				} else if (this.viewerMode == this._modeComment) {
					domStyle.set(this.viewerCommentContainer.domNode, "height", totalHeight + "px");
				}

				this.splitContainer.layout();
			}

			this._saveSizeAndPosition();
			this.logExit(methodName);
		},

		_enableToobarButtons: function(bool) {
			var methodName = "_enableToobarButtons";
			this._toolbarStateBeingUpdated = true;
			this.logDebug(methodName, "enable buttons: " + bool);
			this._setButtonDisabled(this.toggleMergeSplitButton, !bool);
			this._setButtonDisabled(this.layoutTabsButton, !bool);
			this._setButtonDisabled(this.layoutVertButton, !bool);
			this._setButtonDisabled(this.layoutHorizButton, !bool);
			this._setButtonDisabled(this.layoutEditButton, !bool);
			this._setButtonDisabled(this.layoutCommentButton, !bool);
			this._toolbarDisabled = !bool;
			this._toolbarStateBeingUpdated = false;
		},

		_collapseSplit: function() {
			var methodName = "_collapseSplit";
			this.logEntry(methodName);

			while (this._splitConnections.length > 0) {
				connect.disconnect(this._splitConnections.shift());
			}
			this._disableSplitter();

			this.logExit(methodName);
		},

		_disableSplitter: function() {
			if (this.splitMode != this._modeTabbed) {
				this._enableSplitter(this._modeRight, false);
				this._enableSplitter(this._modeBottom, false);
				domStyle.set(this.bottomPane.domNode, "height", "0%");
				domStyle.set(this.sidePane.domNode, "width", "0%");
				this.splitContainer.layout();
			}
		},

		_cleanupSplit: function() {
			if (!this.splitTabContainer)
				return;
			this._removePlusTabsFromContainer(this.splitTabContainer);
			this._removeNewTabsFromContainer(this.splitTabContainer);
			this.splitTabContainer.unloadViewers();
			this.sidePane.set("content", null);
			this.bottomPane.set("content", null);
			delete this.splitTabContainer;
		},

		_initializeSplitMode: function(splitMode, splitPane, exportedTabs) {
			var methodName = "_initializeSplitMode";
			this.logEntry(methodName);

			this.splitTabContainer = this._addTabContainer(splitPane, "margin: 0px 0px 2px 0px; padding: 0px; width: 100%; height: 100%;", "_onSplitFocus");
			this.splitTabContainer.startup();
			this.connect(this.splitTabContainer, "onViewerTabSelected", "_onViewerTabSelected");
			this.own(aspect.after(this.splitTabContainer, "addContentViewerTab", lang.hitch(this, this._afterAddContentViewerTab), true));
			this.own(aspect.before(this.splitTabContainer, "unloadViewer", lang.hitch(this, this._beforeRemoveContentViewerTab), true));
			this.connect(this.splitTabContainer.tablist, "onButtonClick", "_onTabButtonClick");
			this.connect(this.splitTabContainer, "onTabMenuItemSelect", "_onTabButtonClick");
			this._importTabs(this.splitTabContainer, exportedTabs);

			this._focusedSplit = this.splitTabContainer;
			if (splitMode == this._modeRight) {
				this._refreshSplitMaxSize();
			}

			var splitter = this.splitContainer.getSplitter(splitMode);
			this._splitConnections.push(this.connect(splitter, "onMouseDown", "_startDrag"));
			this._splitConnections.push(this.connect(splitter, "onMouseUp", "_stopDrag"));
			this._splitConnections.push(this.connect(this.mainTabContainer, "layout", "_updateDrag"));

			this._setViewerMode(splitMode);
			this._splitRatio = 0.5;

			this.logExit(methodName);
		},

		toggleMergeSplitMode: function(event) {
			var methodName = "toggleMergeSplitMode";
			this.logEntry(methodName);

			if (this.mergeSplitContext.isViewerInScope(this._getFocusedContentViewer())) {
				this._okToSwitchMergeSplitMode(lang.hitch(this, function() {
					this._toggleMergeSplitMode();
					this._onViewerTabSelected(this.mainTabContainer.getSelectedViewerTab());
				}));
			} else {
				this._toggleMergeSplitMode();
			}

			this.logExit(methodName);
		},

		_toggleMergeSplitMode: function() {
			if (this.splitMode != this._modeTabbed) {
				this._transferTabs(this.splitTabContainer);
				this._collapseSplit();
				this._cleanupSplit();
				this._setViewerMode(this._modeTabbed);
				var viewerTab = this.mainTabContainer.getSelectedViewerTab();
				if (viewerTab)
					this.mainTabContainer.selectChild(viewerTab);
			}
			var viewer = this._getSelectedContentViewer(this.mainTabContainer);
			this.mergeSplitContext._toggle(viewer);
		},

		_toggleMergeSplitDisplay: function(viewer) {
			this._updateHeader(viewer);
			this._toggleCommonToolbar();
			this._togglePlusTabs();
			if (!this.isMergeSplitModeEnabled())
				this._removeNewTabs();
		},

		isMergeSplitModeEnabled: function() {
			return this.mergeSplitContext.isEnabled();
		},

		isMergeSplitModeInScopeForItems: function(items) {
			var allInScope = array.every(items, lang.hitch(this, function(item) {
				return this.mergeSplitContext._isItemInScope(item);
			}));
			return allInScope;
		},

		_okToSwitchMergeSplitMode: function(okCallback, cancelCallback) {
			if (this.isMergeSplitModeEnabled()) {
				var dirtyTitles = this._getAllDirtyMergeSplitTabTitlesInHtml();
				if (dirtyTitles) {
					var dialog = this._createMergeSplitExitConfirmDialog(dirtyTitles, okCallback, cancelCallback);
					dialog.show();
				} else if (lang.isFunction(okCallback)) {
					okCallback();
				}
			} else {
				this._okToCloseViewersForRepository(okCallback, cancelCallback);
			}
		},

		_createMergeSplitExitConfirmDialog: function(dirtyTitles, okCallback, cancelCallback) {
			if (this._confirmExitMergeSplitDialog)
				this._confirmExitMergeSplitDialog.destroyRecursive();

			var executeCalled = false;
			var message = dirtyTitles.indexOf("<br>") > 0 ? ecm.messages.viewer_prompt_mergesplit_changes : ecm.messages.viewer_prompt_mergesplit_tab_changes;
			this._confirmExitMergeSplitDialog = new ConfirmationDialog({
				title: ecm.messages.confirmation_icon_tooltip,
				text: string.substitute(message, [
					dirtyTitles
				]),
				onExecute: lang.hitch(this, function() {
					executeCalled = true;
					if (lang.isFunction(okCallback))
						okCallback();
					this._confirmExitMergeSplitDialog.hide();
				}),
				onShow: lang.hitch(this, function() {
					this._hideViewers();
				}),
				onHide: lang.hitch(this, function() {
					if (!executeCalled && lang.isFunction(cancelCallback))
						cancelCallback();
					this._showViewers();
				}),
				keepContentAreaOverflowAuto: true
			});
			this._confirmExitMergeSplitDialog.own(aspect.after(this._confirmExitMergeSplitDialog, "resize", lang.hitch(this, function() {
				domStyle.set(this._confirmExitMergeSplitDialog.containerNode, "overflow", "auto");
			})));
			domClass.add(this._confirmExitMergeSplitDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");

			return this._confirmExitMergeSplitDialog;
		},

		_getAllDirtyMergeSplitTabTitlesInHtml: function() {
			var methodName = "_getAllDirtyMergeSplitTabTitlesInHtml";
			this.logEntry(methodName);

			var titles = this._getDirtyMergeSplitTabTitlesInHtml(this.mainTabContainer);
			if (this.splitTabContainer) {
				if (titles)
					titles = titles + "<br>";
				titles += this._getDirtyMergeSplitTabTitlesInHtml(this.splitTabContainer);
			}

			this.logExit(methodName);
			return titles;
		},

		_getDirtyMergeSplitTabTitlesInHtml: function(tabContainer) {
			var titles = "";
			array.forEach(tabContainer.getViewerTabs(), lang.hitch(this, function(tab) {
				var viewer = tab.contentViewerPane.docViewer;
				if (this.mergeSplitContext.isViewerInScope(viewer) && viewer.isDirty() && !viewer.ignoreDirty()) {
					if (titles)
						titles = titles + "<br>";
					titles = titles + tab.title;
				}
			}));

			return titles;
		},

		_toggleCommonToolbar: function() {
			if (this.isMergeSplitModeEnabled()) {
				this.toggleMergeSplitButton.set("iconClass", "viewerMergeSplitOff");
				this.toggleMergeSplitButton.set("label", ecm.messages.viewer_mergesplit_on);
				this.toggleMergeSplitButton.set("title", ecm.messages.viewer_mergesplit_on);
				this.layoutVertButton.set("iconClass", "viewerAddTabV");
				this.layoutVertButton.set("label", ecm.messages.viewer_add_vertical_layout_highcontrast);
				this.layoutVertButton.set("title", ecm.messages.viewer_add_vertical_layout);
				this.layoutHorizButton.set("iconClass", "viewerAddTabH");
				var rtl = !this.isLeftToRight();
				this.layoutHorizButton.set("label", rtl ? ecm.messages.viewer_add_horizontal_layout_rtl_highcontrast : ecm.messages.viewer_add_horizontal_layout_highcontrast);
				this.layoutHorizButton.set("title", rtl ? ecm.messages.viewer_add_horizontal_layout_rtl : ecm.messages.viewer_add_horizontal_layout);
			} else {
				this.toggleMergeSplitButton.set("iconClass", "viewerMergeSplitOn");
				this.toggleMergeSplitButton.set("label", ecm.messages.viewer_mergesplit_off);
				this.toggleMergeSplitButton.set("title", ecm.messages.viewer_mergesplit_off);
				this.layoutVertButton.set("iconClass", "viewerSplitV");
				this.layoutVertButton.set("label", ecm.messages.viewer_split_vertical_layout_highcontrast);
				this.layoutVertButton.set("title", ecm.messages.viewer_split_vertical_layout);
				this.layoutHorizButton.set("iconClass", "viewerSplitH");
				this.layoutHorizButton.set("label", ecm.messages.viewer_split_horizontal_layout_highcontrast);
				this.layoutHorizButton.set("title", ecm.messages.viewer_split_horizontal_layout);
			}
		},

		_togglePlusTabs: function() {
			var methodName = "_togglePlusTabs";
			this.logEntry(methodName);

			if (this.isMergeSplitModeEnabled())
				this._addPlusTabs();
			else
				this._removePlusTabs();

			this.logExit(methodName);
		},

		_addPlusTabs: function() {
			var methodName = "_addPlusTab";
			this.logEntry(methodName);
			if (!this._isAllowedToAddToMergeSplitRepository())
				return;

			this._addPlusTab(this.mainTabContainer);
			this._addPlusTab(this.splitTabContainer);
			this.logExit(methodName);
		},

		_isAllowedToAddToMergeSplitRepository: function() {
			var repoId = this.mergeSplitContext.getRepositoryIdInScope();
			if (!repoId)
				return false;
			return Action._addAction.canPerformAction(Desktop.getRepository(repoId));
		},

		_addPlusTab: function(tabContainer) {
			if (!tabContainer)
				return;

			var plusTabs = this._getPlusTabs(tabContainer);
			if (plusTabs.length == 0) {
				var plusTab = new ContentPane({
					title: "+",
					plusTab: true
				});
				tabContainer.addChild(plusTab);
			}
		},

		_openNewTab: function(tabContainer) {
			var methodName = "_openNewTab";
			this.logEntry(methodName);
			if (!this._isAllowedToAddToMergeSplitRepository())
				return;

			var contentViewerTab = new ContentViewerTab({
				tabContainer: tabContainer,
				viewerItem: this._createNewViewerItem(),
				style: "margin: 0px; padding: 0px; overflow: hidden;",
				closable: true,
				_resetAboutBlank: this.resetAboutBlank,
				mergeSplitContext: this.mergeSplitContext
			});
			this._addContentViewerTab(tabContainer, contentViewerTab, true);
			this._setupTabPageOnClose(contentViewerTab);
			tabContainer.selectChild(contentViewerTab);
			contentViewerTab.refreshViewer();
			this.logExit(methodName);

			return contentViewerTab;
		},

		_createNewViewerItem: function() {
			var item = new ContentItem({
				repository: Desktop.getRepository(this.mergeSplitContext.getRepositoryIdInScope()),
				name: ecm.messages.viewer_new_item_name
			});

			return new ViewerItem(item);
		},

		_removePlusTabs: function() {
			var methodName = "_removePlusTabs";
			this.logEntry(methodName);

			this._removePlusTabsFromContainer(this.mainTabContainer);
			if (this.splitTabContainer)
				this._removePlusTabsFromContainer(this.splitTabContainer);

			this.logExit(methodName);
		},

		_removePlusTabsFromContainer: function(tabContainer) {
			var plusTabs = this._getPlusTabs(tabContainer);
			if (plusTabs.length > 0) {
				array.forEach(plusTabs, function(tab) {
					tabContainer.removeChild(tab);
					tab.destroyRecursive();
				});
			}
		},

		_getPlusTabs: function(tabContainer) {
			var tabs = array.filter(tabContainer.getChildren(), function(tab) {
				return !!tab.plusTab;
			});

			return tabs;
		},

		_removeNewTabs: function() {
			var methodName = "_removeNewTabs";
			this.logEntry(methodName);

			this._removeNewTabsFromContainer(this.mainTabContainer);
			if (this.splitTabContainer)
				this._removeNewTabsFromContainer(this.splitTabContainer);

			this.logExit(methodName);
		},

		_removeNewTabsFromContainer: function(tabContainer) {
			var newtabs = this._getNewTabs(tabContainer);
			if (newtabs.length > 0) {
				array.forEach(newtabs, function(tab) {
					tabContainer.removeChild(tab);
					tab.destroyRecursive();
				});
			}
		},

		_getNewTabs: function(tabContainer) {
			var tabs = array.filter(tabContainer.getViewerTabs(), function(tab) {
				return !tab.viewerItem.item.id;
			});

			return tabs;
		},

		_onSelectTabView: function(evt) {
			var methodName = "_onSelectTabView";
			this.logEntry(methodName);

			if (this.viewerMode != this._modeTabbed) {
				this.logDebug(methodName, "this.viewerMode != this._modeTabbed");
				this._okToSetMode(this._modeTabbed, lang.hitch(this, function() {
					this._enableToobarButtons(false);
					if (this.splitMode != this._modeTabbed) {
						this.logDebug(methodName, "this.splitMode != none");
						this._transferTabs(this.splitTabContainer);
						this._collapseSplit();
						this._cleanupSplit();
					}

					this._hidePropertiesPane();
					this._hideCommentPane();

					this._setViewerMode(this._modeTabbed);
					this._splitRatio = 1.0;
					var viewerTab = this.mainTabContainer.getSelectedViewerTab();
					if (viewerTab)
						this.mainTabContainer.selectChild(viewerTab);
					else
						this._onMainFocus();
					this._enableToobarButtons(true);
				}));
			}

			this.logExit(methodName);
		},

		_onSelectHorizView: function(evt) {
			var methodName = "_onSelectHorizView";
			this.logEntry(methodName);

			if (this.viewerMode != this._modeRight) {
				this._okToSetMode(this._modeRight, lang.hitch(this, function() {
					this._enableToobarButtons(false);
					var exportedTabs;
					if (this.splitMode != this._modeTabbed) {
						this.logDebug(methodName, "this.splitMode != none");
						this._collapseSplit();
						exportedTabs = this._exportTabs(this.splitTabContainer, true);
						this._cleanupSplit();
					} else {
						exportedTabs = this._exportTabs(this.mainTabContainer, true);
					}

					this._hidePropertiesPane();
					this._hideCommentPane();

					this._openRightSplit();
					this._initializeSplitMode(this._modeRight, this.sidePane, exportedTabs);
					this._onSplitFocus();
					this._delayEnableToolbarButtons();
				}));
			}

			this.logExit("_onSelectHorizView");
		},

		_onSelectVertView: function(evt) {
			var methodName = "_onSelectVertView";
			this.logEntry(methodName);

			if (this.splitMode != this._modeBottom) {
				this._okToSetMode(this._modeBottom, lang.hitch(this, function() {
					this._enableToobarButtons(false);
					var exportedTabs;
					if (this.splitMode != this._modeTabbed) {
						this.logDebug(methodName, "this.splitMode != none");
						this._collapseSplit();
						exportedTabs = this._exportTabs(this.splitTabContainer, true);
						this._cleanupSplit();
					} else {
						exportedTabs = this._exportTabs(this.mainTabContainer, true);
					}

					this._hidePropertiesPane();
					this._hideCommentPane();

					this._openBottomSplit();
					this._initializeSplitMode(this._modeBottom, this.bottomPane, exportedTabs);
					this._onSplitFocus();
					this._delayEnableToolbarButtons();
				}));
			}

			this.logExit(methodName);
		},

		_onNewTabToTheRight: function(event) {
			var methodName = "_onNewTabToTheRight";
			this.logEntry(methodName);
			if (this.viewerMode != this._modeRight) {
				if (this.splitMode != this._modeTabbed)
					this._disableSplitter();

				this._openRightSplit();
				if (this.splitMode == this._modeTabbed) {
					this._initializeSplitMode(this._modeRight, this.sidePane);
				} else {
					this.sidePane.set("content", this.splitTabContainer);
					this._refreshSplitMaxSize();
					this._setViewerMode(this._modeRight);
				}
				this._onSplitFocus();
				this._addPlusTabs();
			}
			if (!this._isLastViewerTabNew(this.splitTabContainer))
				this._openNewTab(this.splitTabContainer);
			this.logExit(methodName);
		},

		_isLastViewerTabNew: function(tabContainer) {
			var tabs = tabContainer.getViewerTabs();
			return tabs.length > 0 && !tabs[tabs.length - 1].viewerItem.item.id;
		},

		_onNewTabAtTheBottom: function(event) {
			var methodName = "_onNewTabAtTheBottom";
			this.logEntry(methodName);
			if (this.viewerMode != this._modeBottom) {
				if (this.splitMode != this._modeTabbed)
					this._disableSplitter();

				this._openBottomSplit()
				if (this.splitMode == this._modeTabbed) {
					this._initializeSplitMode(this._modeBottom, this.bottomPane);
				} else {
					this.bottomPane.set("content", this.splitTabContainer);
					this._setViewerMode(this._modeBottom);
				}
				this._onSplitFocus();
				this._addPlusTabs();
			}
			if (!this._isLastViewerTabNew(this.splitTabContainer))
				this._openNewTab(this.splitTabContainer);
			this.logExit(methodName);
		},

		_delayEnableToolbarButtons: function() {
			setTimeout(lang.hitch(this, function() {
				this._enableToobarButtons(true);
			}), 3000);
		},

		_onSelectEditView: function(evt) {
			var methodName = "_onSelectEditView";
			this.logEntry(methodName);

			if (this.viewerMode != this._modeEdit) {
				this._okToSetMode(this._modeEdit, lang.hitch(this, function() {
					this._enableToobarButtons(false);
					if (this.splitMode != this._modeTabbed) {
						this.logDebug(methodName, "this.splitMode != none");
						this._collapseSplit();
						this._cleanupSplit();
					}

					this.logDebug(methodName, "display edit properties tab");
					var currentTabPage = this.mainTabContainer.getSelectedViewerTab();
					if (this.viewerEditContainer != undefined) {
						currentTabPage.retrieveEditItem(lang.hitch(this, function(retrievedItem) {
							this.viewerEditContainer.setItem(retrievedItem, currentTabPage);
						}));
					}

					this._showPropertiesPane();
					this._hideCommentPane();
					this._onMainFocus();
					this._enableToobarButtons(true);
				}));
			}

			this.logExit(methodName);
		},

		_showPropertiesPane: function() {
			var methodName = "_showPropertiesPane";
			this.logEntry(methodName);

			this.logDebug(methodName, "set to edit mode");
			if (this.viewerEditContainer != undefined) {
				domStyle.set(this.viewerEditContainer.domNode, "width", "45%");
				domStyle.set(this.viewerEditContainer.domNode, "display", "");
			}
			domStyle.set(this.splitContainer.domNode, "width", "55%");
			this.mainBorderContainer.layout();
			this.mainBorderContainer.resize();
			this._setViewerMode(this._modeEdit);

			setTimeout(lang.hitch(this, function() {
				this.viewerEditContainer.itemPropertiesPane.resize();
				this.viewerEditContainer.toolbarBorderContainer.layout();
				this.viewerEditContainer.toolbarBorderContainer.resize();
			}), 1);

			this.logExit(methodName);
		},

		_hidePropertiesPane: function() {
			if (this.viewerEditContainer != undefined) {
				domStyle.set(this.viewerEditContainer.domNode, "width", "0%");
				domStyle.set(this.viewerEditContainer.domNode, "display", "none");
				this.viewerEditContainer._setIsDirty(false); // if hiding, clear the dirty flag.
			}
			domStyle.set(this.splitContainer.domNode, "width", "100%");
			this.mainBorderContainer.layout();
			this.mainBorderContainer.resize();
		},

		_onSelectCommentView: function(evt) {
			var methodName = "_onSelectCommentView";
			this.logEntry(methodName);

			var mainViewerPane = this._getSelectedContentViewerPane(this.mainTabContainer);
			if (mainViewerPane != null) {
				var bCommentable = this._isItemCommentable(mainViewerPane.viewerItem.item);
				if (bCommentable && this.viewerMode != this._modeComment) {
					this._okToSetMode(this._modeComment, lang.hitch(this, function() {
						this._enableToobarButtons(false);
						if (this.splitMode != this._modeTabbed) {
							this.logDebug(methodName, "this.splitMode != none");
							this._collapseSplit();
							this._cleanupSplit();
						}

						this.logDebug(methodName, "display comments tab");
						if (this.viewerCommentContainer != undefined) {
							var currentTabPage = this.mainTabContainer.getSelectedViewerTab();
							currentTabPage.retrieveEditItem(lang.hitch(this, function(retrievedItem) {
								this.viewerCommentContainer.setItem(retrievedItem, currentTabPage);
							}), true);
						}

						this._showCommentPane();
						this._hidePropertiesPane();
						this._onMainFocus();
						this._enableToobarButtons(true);
					}));
				}
			}

			this.logExit(methodName);
		},

		_showCommentPane: function() {
			var methodName = "_showCommentPane";
			this.logEntry(methodName);

			this.logDebug(methodName, "set to comment mode");
			if (this.viewerCommentContainer != undefined) {
				domStyle.set(this.viewerCommentContainer.domNode, "width", "45%");
				domStyle.set(this.viewerCommentContainer.domNode, "display", "");
			}

			domStyle.set(this.splitContainer.domNode, "width", "55%");
			this.mainBorderContainer.layout();
			this.mainBorderContainer.resize();
			this._setViewerMode(this._modeComment);
			this.logExit(methodName);
		},

		_hideCommentPane: function() {
			if (this.viewerCommentContainer != undefined) {
				domStyle.set(this.viewerCommentContainer.domNode, "width", "0%");
				domStyle.set(this.viewerCommentContainer.domNode, "display", "none");
			}
			domStyle.set(this.splitContainer.domNode, "width", "100%");
			this.mainBorderContainer.layout();
			this.mainBorderContainer.resize();
		},

		/**
		 * Navigate to the next hit relative to the current selected viewer.
		 * 
		 * @param tabContainer
		 *            The tab container (main or split) containing the specified viewer to navigate. If not specified,
		 *            the current focused tabContainer will be used.
		 * @param confirm
		 *            If true (default), and there are unsaved annotations in the viewer, confirmation dialog will be
		 *            shown prior to navigating to the next item.
		 * @since 2.0.3.3
		 */
		navigateNextHit: function(tabContainer, confirm) {
			if (tabContainer && tabContainer != null) {
				this._setTabContainerFocus(tabContainer);
			}
			this._onNextHit(confirm);
		},

		/**
		 * Navigate to the previous hit relative to the current selected viewer.
		 * 
		 * @param tabContainer
		 *            The tab container (main or split) containing the specified viewer to navigate. If not specified,
		 *            the current focused tabContainer will be used.
		 * @param confirm
		 *            If true (default), and there are unsaved annotations in the viewer, confirmation dialog will be
		 *            shown prior to navigating to the previous item.
		 * @since 2.0.3.3
		 */
		navigatePreviousHit: function(tabContainer, confirm) {
			if (tabContainer && tabContainer != null) {
				this._setTabContainerFocus(tabContainer);
			}
			this._onPreviousHit(confirm);
		},

		_setNextPrevDisabled: function(tabContainer) {
			var methodName = "_setNextPrevDisabled";
			this.logEntry(methodName, "disable Next and Prev buttons");
			if (this.showNextPrev) {
				this._isNextPrevDirty = true;
				if (!tabContainer) {
					tabContainer = null;
				}
				this.onNextEnabled(tabContainer, false);
				this.onPrevEnabled(tabContainer, false);
			}
			this.logExit(methodName);
		},

		_onPreviousHit: function(confirm) {
			var methodName = "_onPreviousHit";
			this.logEntry(methodName);
			if (!this._inNextPrev) {
				this._inNextPrev = true;
				this._setNextPrevDisabled();
				setTimeout(lang.hitch(this, "_onPreviousHitDelayed", confirm), this._clickDelta);
			}
			this.logExit(methodName);
		},

		_onPreviousHitDelayed: function(confirm) {
			var methodName = "_onPreviousHitDelayed";
			this.logEntry(methodName, "this._inNextPrev == " + this._inNextPrev);
			this._inNextPrev = true;

			if (confirm == undefined || confirm == null) {
				confirm = true;
			}

			var viewerPane = this._getFocusedContentViewerPane();
			var itemIndex = viewerPane.getItemIndex();
			this.logDebug(methodName, "itemIndex: " + itemIndex);
			if (itemIndex >= 0) { // There is a result set...
				this.logDebug(methodName, "There is a result set...");
				var viewerTab = viewerPane.contentViewerTab;
				if (confirm) {
					var item = viewerPane.getPrevItem();
					if(item)
						this._proceedWithPri(itemIndex, item);
				}
			}

			this.logExit(methodName);
		},
		
		_proceedWithPri:function(itemIndex, item){
			var methodName ="_proceedWithPri";
			var viewerPane = this._getFocusedContentViewerPane();
			this.logDebug(methodName, "Proceeding with Previous hit close processing.");
			var allWindows = window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindows;
			for(var i=1; i<allWindows.length; i++){
				var viewerWindow = allWindows[i];
				var viewerTab = viewerWindow._viewerWindow.contentViewer.mainTabContainer.getSelectedViewerTab();
				if(viewerTab.viewerItem.id == item.id){
					viewerWindow._viewerWindow.contentViewer._onCloseSubWindow(viewerWindow._viewerWindow, lang.hitch(this, function(viewerTab) {
						this._openNextPrevItem(item,viewerPane);
						this._refreshNextPrev(viewerPane.contentViewerTab);
					}), lang.hitch(this,function(){
						this._refreshNextPrev(this.mainTabContainer.getSelectedViewerTab());
						window.opener.ecm.widget.dialog.contentViewerWindow._setWindowFocus(i);						
					}));
					
					break;
				}
			}
			if(i==allWindows.length){
		//		window.opener.ecm.widget.dialog.contentViewerWindow._setWindowFocus(0);
				this._openNextPrevItem(item,viewerPane);
			}	
			
		},
		
		_onNextHit: function(confirm) {
			var methodName = "_onNextHit";
			this.logEntry(methodName);
			if (!this._inNextPrev) {
				this._inNextPrev = true;
				this._setNextPrevDisabled();
				setTimeout(lang.hitch(this, "_onNextHitDelayed", confirm), this._clickDelta);
			}
			this.logExit(methodName);
		},

		_getNextPage: function(viewerPane) {
			var methodName = "_getNextPage";
			this.logEntry(methodName);

			if (!this._nextPageDialog) {
				this._nextPageDialog = new StatusDialog({
					text: ecm.messages.progress_message_general,
					onShow: lang.hitch(this, function() {
						this._hideViewers();
					}),
					onHide: lang.hitch(this, function() {
						this._showViewers();
					})
				});

				this._nextPageDialog.contentNode.innerHTML = ecm.messages.progress_message_general;
			}

			this._nextPageDialog.show();

			if (!viewerPane)
				viewerPane = this._getFocusedContentViewerPane();

			viewerPane.retrieveNextPage(lang.hitch(this, function() {
				this._refreshNextPrev(viewerPane.contentViewerTab);
				this._nextPageDialog.hide();

				var nextItem = viewerPane.getNextItem();
				if (nextItem != null) {
					this.logDebug(methodName, "Retrieved results contain a new viewable item.");
					this._onNextHit();
				} else {
					this.logDebug(methodName, "Retrieved results do not contain a new viewable item.");
				}
			}));

			this.logExit(methodName);
		},

		_onNextHitDelayed: function(confirm) {
			var methodName = "_onNextHitDelayed";
			this.logEntry(methodName, "this._inNextPrev == " + this._inNextPrev);
			this._inNextPrev = true;

			if (confirm == undefined || confirm == null) {
				confirm = true;
			}

			var viewerPane = this._getFocusedContentViewerPane();
			var itemIndex = viewerPane.getItemIndex();
			this.logDebug(methodName, "itemIndex: " + itemIndex);
			if (itemIndex >= 0) { // There is a result set...
				this.logDebug(methodName, "There is a result set...");
				var proceedWithNext = false;
				if (viewerPane.nextPageRequired()) {
					this.logDebug(methodName, "Continuable result set with no next item found.");
					this._refreshNextPrev(viewerPane.contentViewerTab);
					if (this._confirmNextDialog) {
						this._confirmNextDialog.destroyRecursive(false);
					}

					this._confirmNextHitDialog = new ConfirmationDialog({
						title: ecm.messages.confirmation_icon_tooltip,
						text: ecm.messages.viewer_confirm_get_next_page,
						onExecute: lang.hitch(this, function() {
							this._getNextPage(viewerPane);
							this._confirmNextHitDialog.hide();
						}),
						onShow: lang.hitch(this, function() {
							this._hideViewers();
						}),
						onHide: lang.hitch(this, function() {
							this._showViewers();
						})
					});
					domClass.add(this._confirmNextHitDialog.domNode, "viewerConfirmationDialog");
					this._confirmNextHitDialog.show();
				} else {
					proceedWithNext = true;
				}
				this._proceedWithNext(proceedWithNext,itemIndex, viewerPane.getNextItem());
			}

			this.logExit(methodName);
		},
		
		_proceedWithNext:function(proceedWithNext,itemIndex, item){
			var methodName ="_proceedWithNext";
			var viewerPane = this._getFocusedContentViewerPane();
			if (proceedWithNext) {
				this.logDebug(methodName, "Proceeding with next hit close processing.");
				var allWindows = window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindows;
				for(var i=1; i<allWindows.length; i++){
					var viewerWindow = allWindows[i];
					var viewerTab = viewerWindow._viewerWindow.contentViewer.mainTabContainer.getSelectedViewerTab();
					if(viewerTab.viewerItem.id == item.id){
						viewerWindow._viewerWindow.contentViewer._onCloseSubWindow(viewerWindow._viewerWindow, lang.hitch(this, function(viewerTab) {
							this._openNextPrevItem(item,viewerPane);
						}), lang.hitch(this, function(){
							this._refreshNextPrev(this.mainTabContainer.getSelectedViewerTab());
							window.opener.ecm.widget.dialog.contentViewerWindow._setWindowFocus(i);
						}));
						
						break;
					}
				}
				if(i==allWindows.length){
					var viewerTab = viewerPane.contentViewerTab;
					this._onCloseTabPage(viewerTab, lang.hitch(this, function(viewerTab) { // yes or no
		//				window.opener.ecm.widget.dialog.contentViewerWindow._setWindowFocus(0);
						this._openNextPrevItem(item,viewerPane);
					}), lang.hitch(this, function(viewerTab) { // cancel
						this._refreshNextPrev(viewerTab);
					}));
				}	
			}
		},
		
		_openNextItem:function(viewerTab){
			if (confirm) {
				this._onCloseTabPage(viewerTab, lang.hitch(this, function(viewerTab) { // yes or no
					this._openNextPrevItem(viewerTab.contentViewerPane.getNextItem(), viewerTab.contentViewerPane);
				}), lang.hitch(this, function(viewerTab) { // cancel
					this._refreshNextPrev(viewerTab);
				}));
			} else {
				this._openNextPrevItem(viewerTab.contentViewerPane.getNextItem(), viewerTab.contentViewerPane);
			}
		},
		
		_openNextPrevItem: function(item, currentViewerPane) {
			var methodName = "_openNextPrevItem";
			this.logEntry(methodName);

			if (item != null) {
				this.logDebug(methodName, "item != null");

				var openNextPrevItem = lang.hitch(this, function(item, viewerPane) {
					var viewerTab = viewerPane.contentViewerTab;
					var tabContainer = viewerTab.tabContainer;
					var existingPane = tabContainer.getContentViewerPane(item, viewerPane.preview);
					var select = tabContainer.isSelectedViewerTab(viewerTab);

					if (existingPane != null) {
						this.logDebug(methodName, "existingPane != null");
						tabContainer.unloadViewer(viewerTab);
						if (select) {
							tabContainer.selectChild(existingPane.contentViewerTab);
						}
						this.logDebug(methodName, "Finished destroying existing pane.");
					} else { // recycle the existing tab...
						this.logDebug(methodName, "existingPane == null");

						this.movingTab = !tabContainer.isLastViewerTab(viewerTab);
						if (this.movingTab) {
							tabContainer.unloadViewer(viewerTab, true); // signal that we are reusing this tab (do not destroy)
						} else {
							this.onDocumentClosed(viewerPane.viewerItem.item, viewerPane.preview);
						}

						viewerTab.openItem(new ViewerItem(item));
						if (this.movingTab) {
							this._addContentViewerTab(tabContainer, viewerTab, select);
						} else {
							this.onDocumentOpened(item, viewerPane.preview);							
						}
						this.movingTab = false;

						if (select) {
							tabContainer.selectChild(viewerTab);
						}
						viewerPane.activateViewer();
						this.logDebug(methodName, "Finished recycling existing pane.");
					}
				});

				openNextPrevItem(item, currentViewerPane);

				this.logDebug(methodName, "Setting delayed call to _refreshNextPrev");
				setTimeout(lang.hitch(this, "_refreshNextPrev"), this._clickDelta);
			}

			this.logExit(methodName);
		},

		_getSelectedContentViewer: function(tabContainer) {
			var viewerPane = this._getSelectedContentViewerPane(tabContainer);
			return viewerPane ? viewerPane.docViewer : null;
		},

		_getSelectedContentViewerPane: function(tabContainer) {
			var methodName = "_getSelectedContentViewerPane";
			this.logEntry(methodName);

			var viewerPane = null;
			var currentTabPane = tabContainer.getSelectedViewerTab();
			if (currentTabPane)
				viewerPane = currentTabPane.getChildren()[0];

			this.logExit(methodName);
			return viewerPane;
		},

		_getFocusedContentViewerRepositoryId: function() {
			var viewer = this._getFocusedContentViewer();
			return viewer ? viewer.item.repository.id : null;
		},

		_getFocusedContentViewer: function() {
			var viewerPane = this._getFocusedContentViewerPane();
			return viewerPane ? viewerPane.docViewer : null;
		},

		_getFocusedContentViewerPane: function() {
			var methodName = "_getFocusedContentViewerPane";
			this.logEntry(methodName);
			var viewerPane = this._getSelectedContentViewerPane(this._focusedSplit);
			this.logExit(methodName);
			return viewerPane;
		},

		_hideViewers: function() {
			var mainViewerPane = this._getSelectedContentViewerPane(this.mainTabContainer);
			if (mainViewerPane != null)
				mainViewerPane.hideViewer();

			if (this.splitMode != this._modeTabbed) {
				var splitViewerPane = this._getSelectedContentViewerPane(this.splitTabContainer);
				if (splitViewerPane != null)
					splitViewerPane.hideViewer();
			}
		},

		_showViewers: function() {
			var mainViewerPane = this._getSelectedContentViewerPane(this.mainTabContainer);
			if (mainViewerPane != null)
				mainViewerPane.showViewer();

			if (this.splitMode != this._modeTabbed) {
				var splitViewerPane = this._getSelectedContentViewerPane(this.splitTabContainer);
				if (splitViewerPane != null)
					splitViewerPane.showViewer();
			}
		},

		_openTab: function(tabContainer, viewerItem, pageNumber, select, preview, existingIgnored, inMergeSplit) {
			var methodName = "_openTab";
			this.logEntry(methodName);
			preview = (preview ? preview : false); // Collapse down the tertiary state.

			var existingTab = existingIgnored ? null : tabContainer.getContentViewerTab(viewerItem.item, preview);
			var contentViewerTab = null;

			var toggleMergeSplit = inMergeSplit && !this.isMergeSplitModeEnabled();
			if (existingTab == null) {
				if (toggleMergeSplit)
					this.mergeSplitContext._enable();
				this.logDebug(methodName, "existingTab == null");
				contentViewerTab = new ContentViewerTab({
					tabContainer: tabContainer,
					viewerItem: viewerItem,
					style: "margin: 0px; padding: 0px; overflow: hidden;",
					closable: !this.isBookmark,
					preview: preview,
					pageNumber: pageNumber,
					_resetAboutBlank: this.resetAboutBlank,
					mergeSplitContext: this.mergeSplitContext
				});
				this._addContentViewerTab(tabContainer, contentViewerTab, select);
				this._setupTabPageOnClose(contentViewerTab);
				if (toggleMergeSplit)
					this.mergeSplitContext.onToggled(contentViewerTab.contentViewerPane.docViewer);
			} else {
				this.logDebug(methodName, "existingPane != null");
				contentViewerTab = existingTab;
				if (toggleMergeSplit)
					this.mergeSplitContext._toggle(contentViewerTab.contentViewerPane.docViewer);
			}

			if (select) {
				tabContainer.selectChild(contentViewerTab);
				contentViewerTab.refreshViewer();
			}
			if (this.isSubWindow) {
				this.viewerToolbarText.innerHTML = viewerItem.getHtmlName();
				domStyle.set(tabContainer.tablist.domNode, "display","none");
				this.nextHitButton.set("iconClass", "back");
				this.nextHitButton.set("label", ecm.messages.viewer_return_to_original_window);
				this.nextHitButton.set("title", ecm.messages.viewer_return_to_original_window);
				this._setButtonDisabled(this.nextHitButton, false);
				this.prevHitButton.set("iconClass", "close");
				this.prevHitButton.set("label", ecm.messages.close);
				this.prevHitButton.set("title", ecm.messages.close);
				this._setButtonDisabled(this.prevHitButton, false);
			}
			this.logExit(methodName);
			return contentViewerTab;
		},
		
		_addContentViewerTab: function(tabContainer, contentViewerTab, select) {
			tabContainer.addContentViewerTab(contentViewerTab, select);
			this._setupTabPageOnClose(contentViewerTab);
		},

		_getStatusMessage: function(viewerPane) {
			return (viewerPane.getSaveOrWaitStatusMessage());
		},

		_onCloseTabPage: function(tabPage, okCallback, cancelCallback) {
			var methodName = "_onCloseTabPage";
			this.logEntry(methodName);
			this.logDebug(methodName, "check on closing item: " + tabPage.viewerItem.item.name);
			this._okToCloseTab(tabPage, okCallback, cancelCallback);
			this.logExit(methodName);
		},

		_setupTabPageOnClose: function(tabPage) {
			var methodName = "_setupTabPageOnClose";
			this.logEntry(methodName);

			tabPage.onClose = lang.hitch(this, function() {
				return this._onCloseTabPage(tabPage, lang.hitch(this, function(viewerTab) {
					viewerTab.tabContainer.unloadViewer(viewerTab);
				}));
			});

			this.logExit(methodName);
		},

		_moveToNewWindow:function(viewerTab, fromContainer){
			this._onCloseTabPage(viewerTab, lang.hitch(this,function(viewerTab) { // yes or no
				if(!this.splitTabContainer || this.splitTabContainer.getMatchedViewerPane(viewerTab.contentViewerPane) != viewerTab.contentViewerPane)
					var newWindow = window.opener.ecm.widget.dialog.contentViewerWindow._openItemInNewWindow(viewerTab.viewerItem.item, false);
				viewerTab.tabContainer.removeContentViewerTab(viewerTab, true);
				this._refreshNextPrev(viewerTab);
			}), lang.hitch(this, function(viewerTab) { // cancel
				this._refreshNextPrev(viewerTab);
			}));
			
		},
		
		_addTabContainer: function(contentPane, style, selectChildListener) {
			var methodName = "_addTabContainer";
			this.logEntry(methodName);

			var tabStyle = (style ? style : "margin: 0px; padding: 0px; width: 100%; height: 100%;");
			var tabContainer = new ContentViewerTabContainer({
				nested: true,
				style: tabStyle,
				contentViewer: this,
				useMenu: true,
				useSlider: true,
				wrappingTabController: this.wrappingTabController
			});
			if(this.isSubWindow)
				domStyle.set(tabContainer.tablist.domNode, "display","none");
			if (selectChildListener)
				this.connect(tabContainer, "selectChild", selectChildListener);

			contentPane.set("content", tabContainer);
			this.logExit(methodName);
			return tabContainer;
		},

		_setFocus: function() {
			var methodName = "_setFocus";
			this.logEntry(methodName);
			this.commonToolbar.domNode.focus();
			this.logExit(methodName);
		},

		_setButtonDisabled: function(button, disabled) {
			if (!button)
				return;

			if (!disabled && !!this._toolbarDisabled && !this._toolbarStateBeingUpdated) {
				// keep button disabled when the toolbar is disabled unless the toolbar state is being updated
				disabled = true;
			} else if (!disabled) {
				var viewer = this._getFocusedContentViewer();
				if (button == this.toggleMergeSplitButton) {
					disabled = !!viewer && !this.mergeSplitContext.isViewerInScope(viewer);
				} else if (button == this.layoutEditButton || button == this.layoutCommentButton) {
					if (this.isMergeSplitModeEnabled()) {
						// disable properties and comments buttons in merge and split mode
						disabled = true;
					} else if (!viewer || button == this.layoutCommentButton && !this._isItemCommentable(viewer.item)) {
						// disable comments button if the item is not commentable
						disabled = true;
					}
				}
			}

			button.set("disabled", disabled);
		},

		_isButtonDisabled: function(button) {
			return button ? button.get("disabled") : undefined;
		},

		_setButtonGrayed: function(button, grayed) {
			if (button) {
				domStyle.set(button.domNode, "opacity", (grayed ? "0.5" : "1"));
				button.set("disabled", grayed);
				domClass[grayed ? "add" : "remove"](button.focusNode, "dijitDisabled");
			}
		},

		_setButtonLabels: function(button, label, title) {
			if (button) {
				button.set("label", label);
				button.titleNode.title = title;
			}
		},

		/** Constructs the common toolbar */
		_setupCommonToolbar: function() {
			var methodName = "_setupCommonToolbar";
			this.logEntry(methodName);

			var tbar = this.commonToolbar;
			var rtl = !this.isLeftToRight();

			this.toggleMergeSplitButton = new Button({
				iconClass: this.isMergeSplitModeEnabled() ? "viewerMergeSplitOff" : "viewerMergeSplitOn",
				showLabel: false,
				label: this.isMergeSplitModeEnabled() ? ecm.messages.viewer_mergesplit_on : ecm.messages.viewer_mergesplit_off,
				title: this.isMergeSplitModeEnabled() ? ecm.messages.viewer_mergesplit_on : ecm.messages.viewer_mergesplit_off
			});
			this.connect(this.toggleMergeSplitButton, "onClick", "toggleMergeSplitMode");
			this.toggleMergeSplitSeparator = new ToolbarSeparator({});
			if (!Desktop.mergeSplitEnabled) {
				domStyle.set(this.toggleMergeSplitButton.domNode, "display", "none");
				domStyle.set(this.toggleMergeSplitSeparator.domNode, "display", "none");
			}
			if (this.showLayouts) {
				tbar.addChild(this.toggleMergeSplitButton);
				tbar.addChild(this.toggleMergeSplitSeparator);
			}

			this.layoutTabsButton = new Button({
				iconClass: "viewerTabs",
				showLabel: false,
				label: ecm.messages.viewer_tabbed_layout_highcontrast,
				title: ecm.messages.viewer_tabbed_layout
			});
			this.connect(this.layoutTabsButton, "onClick", "_onSelectTabView");
			if (this.showLayouts) {
				tbar.addChild(this.layoutTabsButton);
			}

			this.layoutVertButton = new Button({
				iconClass: this.isMergeSplitModeEnabled() ? "viewerAddTabV" : "viewerSplitV",
				showLabel: false,
				label: this.isMergeSplitModeEnabled() ? ecm.messages.viewer_add_vertical_layout_highcontrast : ecm.messages.viewer_split_vertical_layout_highcontrast,
				title: this.isMergeSplitModeEnabled() ? ecm.messages.viewer_add_vertical_layout : ecm.messages.viewer_split_vertical_layout
			});
			this.connect(this.layoutVertButton, "onClick", lang.hitch(this, function(event) {
				if (this.isMergeSplitModeEnabled())
					this._onNewTabAtTheBottom(event);
				else
					this._onSelectVertView(event);
			}));
			if (this.showLayouts) {
				tbar.addChild(this.layoutVertButton);
			}

			var msVtLabel = rtl ? ecm.messages.viewer_add_horizontal_layout_rtl_highcontrast : ecm.messages.viewer_add_horizontal_layout_highcontrast;
			var msVtTitle = rtl ? ecm.messages.viewer_add_horizontal_layout_rtl : ecm.messages.viewer_add_horizontal_layout;
			this.layoutHorizButton = new Button({
				iconClass: this.isMergeSplitModeEnabled() ? "viewerAddTabH" : "viewerSplitH",
				showLabel: false,
				label: this.isMergeSplitModeEnabled() ? msVtLabel : ecm.messages.viewer_split_horizontal_layout_highcontrast,
				title: this.isMergeSplitModeEnabled() ? msVtTitle : ecm.messages.viewer_split_horizontal_layout
			});
			this.connect(this.layoutHorizButton, "onClick", lang.hitch(this, function(event) {
				if (this.isMergeSplitModeEnabled())
					this._onNewTabToTheRight(event);
				else
					this._onSelectHorizView(event);
			}));
			if (this.showLayouts) {
				tbar.addChild(this.layoutHorizButton);
			}

			if (this._ifEnablePI) {
				this.layoutSeparator = new ToolbarSeparator({});
				if (this.showLayouts) {
					tbar.addChild(this.layoutSeparator);
				}

				this.layoutEditButton = new Button({
					iconClass: "viewerSplitPreview",
					showLabel: false,
					label: ecm.messages.add_document_properties_label,
					title: ecm.messages.viewer_split_properties_layout,
					disabled: false
				});
				this.connect(this.layoutEditButton, "onClick", "_onSelectEditView");
				if (this.showLayouts) {
					tbar.addChild(this.layoutEditButton);
				}

				this.layoutCommentButton = new Button({
					iconClass: "viewerComments",
					showLabel: false,
					label: "",
					title: "",
					disabled: true
				});
				this.connect(this.layoutCommentButton, "onClick", "_onSelectCommentView");
				if (this.showLayouts) {
					tbar.addChild(this.layoutCommentButton);
				}
			}

			if (!this.isBookmark) {
				this.navSeparator = new ToolbarSeparator({});
				if (this.showNextPrev) {
					tbar.addChild(this.navSeparator);
				}

				this.logDebug(methodName, "!this.isBookmark");
				this.prevHitButton = new Button({
					iconClass: (rtl ? "pageRight" : "pageLeft"),
					showLabel: false,
					label: "&#8249;",
					title: ecm.messages.viewer_prev_hit,
					disabled: true
				});
				this.connect(this.prevHitButton, "onClick", lang.hitch(this, function() {
					if(this.isSubWindow)
						this._onCloseTabPage(this.mainTabContainer.getSelectedViewerTab(), lang.hitch(this, function(viewerTab) { // yes or no
							this._closeSubWindowWithoutSave(window);
						}), lang.hitch(window, function(viewerTab) { // cancel
							this._closeSubWindowWithoutSave(window);
						}));
					else
						this.navigatePreviousHit();
				}));
				if (this.showNextPrev) {
					tbar.addChild(this.prevHitButton);
				}

				this.connect(this, "onPrevEnabled", lang.hitch(this, function(tabContainer, enabled) {
					if(!this.isSubWindow)
						this._setButtonDisabled(this.prevHitButton, !enabled);
				}));

				this.nextHitButton = new Button({
					iconClass:  (rtl ? "pageLeft" : "pageRight"),
					showLabel: false,
					label: "&#8250;",
					title: ecm.messages.viewer_next_hit,
					disabled: true
				});
				this.connect(this.nextHitButton, "onClick", lang.hitch(this, function() {
					if(this.isSubWindow)
						this._onCloseTabPage(this.mainTabContainer.getSelectedViewerTab(), lang.hitch(this, function(viewerTab) { // yes or no
							window.opener.ecm.widget.dialog.contentViewerWindow._setWindowFocus(0);
							window.opener.ecm.widget.dialog.contentViewerWindow._viewerWindow.contentViewer.open(this.mainTabContainer.getSelectedViewerTab().viewerItem.item);
							this._closeSubWindowWithoutSave(window);
						}), lang.hitch(this, function(viewerTab) { // cancel
							this._refreshNextPrev(viewerTab);
						}));
					else
						this.navigateNextHit();
				}));

				if (this.showNextPrev) {
					tbar.addChild(this.nextHitButton);
				}

				this.connect(this, "onNextEnabled", lang.hitch(this, function(tabContainer, enabled) {
					if(!this.isSubWindow)
						this._setButtonDisabled(this.nextHitButton, !enabled);
				}));

				tbar.domNode.onmouseover = lang.hitch(this, function() {
					this.refreshNavigation();
				});
			}

			this.logExit(methodName);
		}
	});

	/**
	 * @name ecm.widget.viewer.ContentViewerTab
	 * @class A container widget representing a single tab in the content viewer.
	 * @private
	 */
	var ContentViewerTab = declare("ecm.widget.viewer.ContentViewerTab", [
		ContentPane,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer.ContentViewerTab.prototype */

		tabContainer: null,
		viewerItem: null,
		editItem: null,
		style: null,
		closable: false,
		preview: false,
		pageNumber: -1,
		_resetAboutBlank: false,
		_selected: false,

		postCreate: function() {
			this.inherited(arguments);

			this.title = this.viewerItem.getHtmlName();
			if (has("dojo-bidi")) {
				this.textDir = has("text-direction");
				this.title = this.enforceTextDirWithUcc(null, this.title);
			}

			var viewerPaneParams = {
				contentViewerTab: this,
				preview: this.preview,
				itemIndex: -1,
				style: "margin: 0px; padding: 0px; width: 100%; height: 100%; overflow: hidden;",
				_resetAboutBlank: this._resetAboutBlank,
				mergeSplitContext: this.mergeSplitContext
			};
			this.contentViewerPane = new ContentViewerPane(viewerPaneParams);
			this.set("content", this.contentViewerPane);
			this.contentViewerPane.openItem(this.viewerItem, this.pageNumber);
		},

		select: function() {
			var methodName = "select";
			this.logEntry(methodName);
			this.tabContainer.selectChild(this);
			this.logExit(methodName);
		},

		getId: function() {
			return this.contentViewerPane.id;
		},

		matches: function(item, preview) {
			var methodName = "matches";
			var thisItem = this.viewerItem.item;
			this.logDebug(methodName, thisItem.id + " vs " + item.id + ", " + this.preview + " vs " + preview);
			return (thisItem.id == item.id && this.preview == preview);
		},

		retrieveEditItem: function(callback, refresh) {
			var methodName = "retrieveEditItem";
			this.logEntry(methodName);
			this.contentViewerPane.docViewer.getItem(callback, refresh);
			this.logExit(methodName);
		},

		selectViewer: function(selected) {
			var methodName = "selectViewer";
			this.logEntry(methodName);

			this._selected = selected;
			this.layout();
			if (selected)
				this.mergeSplitContext._setSelectedViewer(this.contentViewerPane.docViewer);

			this.logExit(methodName);
		},

		refreshViewer: function() {
			if (this.contentViewerPane) {
				this.contentViewerPane.activateViewer();
			}
		},

		openItem: function(viewerItem, pageNumber) {
			if (this.viewerItem)
				this.viewerItem.destroy();
			this.viewerItem = viewerItem;
			this.editItem = null;
			if(window.contentViewer && window.contentViewer.isSubWindow)
				window.contentViewer.viewerToolbarText.innerHTML = viewerItem.getHtmlName();
			else
				this.set("title", viewerItem.getHtmlName());
			this.contentViewerPane.openItem(viewerItem, pageNumber);
		},

		setFocusOut: function() {
			var methodName = "setFocusOut";
			this.logEntry(methodName);
			this.tabContainer.contentViewer._setFocus();
			this.logExit(methodName);
		},

		layout: function() {
			this.resize();
		},

		resize: function() {
			var methodName = "resize";
			//this.logDebug(methodName, "inResize: " + this.tabContainer.contentViewer._inResize);
			if (!this.tabContainer.contentViewer._inResize) {
				// this.logDebug(methodName, "inDrag: " + this.tabContainer.contentViewer._inDrag);
				if (this._selected && !this.tabContainer.contentViewer._inDrag) {
					if (this.domNode.parentNode) {
						var sizerNode = this.domNode.parentNode;
						var width = sizerNode.clientWidth;
						var height = sizerNode.clientHeight;
						// this.logDebug(methodName, "client width: " + width + ", height: " + height);
						domStyle.set(this.domNode, "width", width + "px");
						domStyle.set(this.domNode, "height", height + "px");
					}
					this.contentViewerPane.layout();
				} else {
					domStyle.set(this.domNode, "width", "1px");
					domStyle.set(this.domNode, "height", "1px");
				}
			}
		},

		setDirty: function(dirty) {
			if (this.controlButton)
				this.controlButton.setDirty(dirty);
		},

		updateTabTitle: function() {
			var title = this.viewerItem.getHtmlName();
			this.set("title", has("dojo-bidi") ? this.enforceTextDirWithUcc(null, title) : title);
		},

		updateButtonState: function() {
			if (this.controlButton) {
				this.controlButton.setDirty(this.contentViewerPane.docViewer.isDirty());
				this.controlButton.setLocked(this.viewerItem.item.locked);
				this.controlButton.setInMergeSplitMode(this.mergeSplitContext.isEnabled() && this.mergeSplitContext.isViewerInScope(this.contentViewerPane.docViewer));
			}
		},

		destroy: function() {
			this.inherited(arguments);

			if (this.viewerItem) {
				this.viewerItem.destroy();
				this.viewerItem = null;
			}
		}
	});

	/**
	 * @name ecm.widget.viewer.ContentViewerTabContainer
	 * @class The TabContainer widget used by ContentViewer to contain multiple viewers.
	 * @private
	 */
	var ContentViewerTabContainer = declare("ecm.widget.viewer.ContentViewerTabContainer", [
		_ViewerTabContainer,
		LoggerMixin
	], {
	/** @lends ecm.widget.viewer.ContentViewerTabContainer.prototype */
		onTabMenuItemSelect: function(tabPage) {
		}
	});

	return ContentViewer;
});

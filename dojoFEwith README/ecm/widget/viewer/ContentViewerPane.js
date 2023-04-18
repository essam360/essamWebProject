/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/string",
	"dijit/layout/ContentPane",
	"ecm/widget/dialog/ErrorDialog", //
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/YesNoCancelDialog",
	"ecm/widget/virtualViewer/ViewoneHTMLViewer",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Message",
	"ecm/model/ContentItem",
	"ecm/model/Desktop"
], //
function(declare, lang, connect, has, aspect, domStyle, domClass, string, ContentPane, ErrorDialog, ConfirmationDialog, YesNoCancelDialog, ViewoneHTMLViewer, LoggerMixin, Messages, Message, ContentItem, Desktop) {

	/**
	 * @name ecm.widget.viewer.ContentViewerPane
	 * @class Provides an embeddable viewer widget. <code>ContentViewer</code> creates instances of this widget, to
	 *        open single viewer instances.
	 */
	var ContentViewerPane = declare("ecm.widget.viewer.ContentViewerPane", [
		ContentPane,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer.ContentViewerPane.prototype */

		/**
		 * The <code>ViewerItem</code> instance for the item currently being viewed.
		 */
		viewerItem: null,

		/** @private */
		saveCompleted: null,

		/** @private */
		lastEvent: -1,

		/** @private */
		fnViewerPrinting: false,

		_resetAboutBlank: false,
		_documentOpenedCallback: null,
		_viewerActivated: false,

		/**
		 * The instance of <code>DocViewer</code> opened within this widget.
		 * 
		 * @since 2.0.1
		 */
		docViewer: null,

		/** @private */
		postCreate: function() {
		},

		getId: function() {
			var thisItem = this.viewerItem.item;
			return thisItem.id + (this.preview ? ".preview" : ".viewer");
		},

		isViewerLoading: function() {
			return this.docViewer.isLoading();
		},

		activateViewer: function() {
			if (!this._viewerActivated || !this.docViewer.isActive()) {
				this._viewerActivated = true;
				this.docViewer.showItem();
			} else if (this._mergeSplitModeToggleNeeded) {
				this._mergeSplitModeToggleNeeded = false;
				this._applyMergeSplitMode(this.docViewer);
			}
		},

		/** @private */
		resize: function() {
			var contentViewerTab = this.contentViewerTab;
			var tabContainer = contentViewerTab.tabContainer;

			if (tabContainer != null && contentViewerTab != null) {
				if (tabContainer.selectedChildWidget == contentViewerTab) {
					this.inherited(arguments);
					if (this.docViewer) {
						this.docViewer.resize();
					}
				}
			} else {
				this.inherited(arguments);
				if (this.docViewer) {
					this.docViewer.resize();
				}
			}
		},

		/**
		 * @deprecated as of 2.0.1. Use docViewer.isLoaded() instead.
		 */
		isViewerLoaded: function() {
			return this.docViewer.isLoaded();
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>DocViewer</code> framework for document viewer specific operations
		 *             instead.
		 */
		unloadIframe: function() {
			this.docViewer.unloadIframe();
		},

		/**
		 * @deprecated as of 2.0.1. This method is intended for internal use, and is being replaced.
		 */
		getItemIndex: function() {
			var methodName = "getItemIndex";
			this.logEntry(methodName);
			var index = this.viewerItem.getItemIndex();
			this.logExit(methodName);
			return index;
		},

		_initializeDocViewer: function(viewer) {
			var methodName = "_initializeDocViewer";
			this.logEntry(methodName);

			var viewerClass = viewer.viewerClass;
			if (this.docViewer != null && (this.docViewer.viewerDef.id != viewer.id || viewer.id == "filenetViewer")) {
				this.logDebug(methodName, "Destroying old docViewer: " + this.docViewer.viewerDef.id + ", and replacing with: " + viewer.id);
				this.set("content", null);
				delete this.docViewer;
				this.docViewer = null;
			}

			if (this.docViewer == null) {
				this.logDebug(methodName, "Creating viewer: " + viewer.id + "(" + viewerClass + ")");

				var docViewerParams = {
					style: "margin: 0px; padding: 0px; width: 100%; height: 100%; overflow: hidden;",
					contentViewerPane: this,
					preview: this.preview,
					viewerDef: viewer,
					_resetAboutBlank: this._resetAboutBlank,
					mergeSplitContext: this.mergeSplitContext
				};
				var DocViewerClass = ecm.model.desktop.getLoadedViewerClass(viewer);
				if (DocViewerClass != null) {
					this.docViewer = new DocViewerClass(docViewerParams);
				} else {
					var viewerPath = viewerClass.replace(new RegExp("[.]", "gm"), "/");
					require([
						viewerPath
					], dojo.hitch(this, function(DocViewerClass) {
						this.docViewer = new DocViewerClass(docViewerParams);
					}));
				}

				connect.connect(this.docViewer, "onViewerFocusOut", this, "_setViewerFocusOut");
				connect.connect(this.docViewer, "onFallback", this, "_fallbackViewer");
				connect.connect(this.docViewer, "onDirty", this, "_setDirty");
				connect.connect(this.docViewer, "onItemUpdate", this, "_updateItem");
				connect.connect(this.docViewer, "setItem", this, "_setItem");
				connect.connect(this.docViewer, "onItemAdd", this, "_sendItemAddedEvent");
				connect.connect(this.docViewer, "onMergeSplitModeFailed", this, "_cancelMergeSplitMode");
				this.set("content", this.docViewer);
			}

			this.docViewer.setItem(this.viewerItem.item, this.pageNumber);
			this._viewerActivated = false;

			this.logExit(methodName);
		},

		_fallbackViewer: function(notFoundCallback) {
			var methodName = "_fallbackViewer" + (this.preview ? " - preview" : "");
			this.logDebug(methodName, "Looking up next fallback viewer");

			var fallbackCall = this.preview ? "getFallbackPreviewer" : "getFallbackViewer";
			this.viewerItem[fallbackCall](this.docViewer.viewerDef, lang.hitch(this, function(viewer) {
				if (viewer != null) {
					this.logDebug(methodName, "Fallback viewer was found attempting to open");
					this._initializeDocViewer(viewer);
					this.activateViewer();
				} else {
					this.logDebug(methodName, "No fallback viewer was found.");
					if (notFoundCallback && lang.isFunction(notFoundCallback)) {
						notFoundCallback();
					} else if (this.docViewer.showErrorOnFallback) {
						this._showErrorDialog("viewer_unable_to_view_error", null);
					}
				}
			}));
		},

		_setViewerFocusOut: function(movingup) {
			var methodName = "_setViewerFocusOut";
			this.logEntry(methodName);
			this.contentViewerTab.setFocusOut(movingup);
			this.logExit(methodName);
		},

		_setDirty: function(dirty) {
			if (this.contentViewerTab) {
				this.contentViewerTab.setDirty(dirty);
			}
		},

		_updateItem: function(item) {
			if (item)
				this.viewerItem.item.update(item);
			if (this.contentViewerTab) {
				this.contentViewerTab.updateTabTitle();
				this.contentViewerTab.updateButtonState();				
			}
		},

		_setItem: function(item) {
			this.viewerItem.item = item;
			if (this.contentViewerTab) {
				this.contentViewerTab.updateTabTitle();
				this.contentViewerTab.updateButtonState();
			}
			if (!this.preview && this.docViewer.isMergeSplitSupported()) {
				this._addMergeSplitToggleEventSubscription();
			} else {
				this._removeMergeSplitToggleEventSubscription();
			}
		},

		_sendItemAddedEvent: function(item) {
			this.mergeSplitContext.onItemAdded(item);
		},

		_cancelMergeSplitMode: function() {
			if (this.contentViewerTab)
				this.contentViewerTab.updateButtonState();
			this.mergeSplitContext.onMergeSplitModeFailed(this.docViewer);
		},

		_addMergeSplitToggleEventSubscription: function() {
			if (!this._mergeSplitEventSubscription) {
				this._mergeSplitEventSubscription = aspect.after(this.mergeSplitContext, "onToggled", lang.hitch(this, function(viewer) {
					this._handleMergeSplitToggleEvent(viewer);
				}), true);
			}
		},

		_removeMergeSplitToggleEventSubscription: function() {
			if (this._mergeSplitEventSubscription) {
				this._mergeSplitEventSubscription.remove();
				this._mergeSplitEventSubscription = null;
			}
		},

		_handleMergeSplitToggleEvent: function(viewer) {
			if (this.contentViewerTab)
				this.contentViewerTab.updateButtonState();
			if (viewer && viewer != this.docViewer) {
				this._mergeSplitModeToggleNeeded = true;
				this.mergeSplitContext._applyMergeSplitMode(this.docViewer);
			}
		},

		_applyMergeSplitMode: function() {
			this.mergeSplitContext._applyMergeSplitMode(this.docViewer);
			if (this.contentViewerTab)
				this.contentViewerTab.updateButtonState();
		},

		/**
		 * Open an item in this viewer. This call assigns the item to the viewer. Call activateViewer to display the
		 * item.
		 * 
		 * @param viewerItem
		 *            An instance of <code>ViewerItem</code> representing the item to open.
		 * @param pageNumber
		 *            If specified, the page number to start viewing on. If not specified, or if the contained viewer
		 *            does not support setting the viewing page, the viewer will open on page 1.
		 */
		openItem: function(viewerItem, pageNumber) {
			this.viewerItem = viewerItem;
			this.pageNumber = pageNumber;
			viewerItem.getViewer(this.preview, false, lang.hitch(this, function(viewer) {
				if (viewer == null) {
					// No viewer mapping was found, and we are too far along at this point to do anything
					// other than show a helpful message.
					this.logDebug("openItem", "viewerItem.getViewer returned null, loading noViewerViewer");
					viewer = ecm.model.desktop.getViewer("noViewerViewer");
				}

				this._initializeDocViewer(viewer);
			}));
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>ViewerItem</code> framework for item specific operations instead.
		 */
		hasPrevItem: function() {
			return this.viewerItem.hasPreviousItem();
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>ViewerItem</code> framework for item specific operations instead.
		 */
		getPrevItem: function() {
			var methodName = "getPrevItem";
			this.logEntry(methodName);
			var prevItem = this.viewerItem.getAdjacentItem(-1);
			this.logExit(methodName);
			return prevItem;
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>ViewerItem</code> framework for item specific operations instead.
		 */
		hasNextItem: function() {
			return this.viewerItem.hasNextItem();
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>ViewerItem</code> framework for item specific operations instead.
		 */
		getNextItem: function() {
			var methodName = "getNextItem";
			this.logEntry(methodName);
			var nextItem = this.viewerItem.getAdjacentItem(1);
			this.logExit(methodName);
			return nextItem;
		},
		
		getItemByIndex: function(index){
			var methodName = "getItemById";
			this.logEntry(methodName);
			var item = this.viewerItem._getItemByIndex(index);
			this.logExit(methodName);
			return item;
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>ViewerItem</code> framework for item specific operations instead.
		 */
		nextPageRequired: function() {
			var nextPageRequired = false;

			var nextItem = this.getNextItem();
			if (nextItem == null) {
				nextPageRequired = this.viewerItem.hasResultSetContinuation();
			}

			return nextPageRequired;
		},

		/**
		 * @deprecated as of 2.0.1. Use the <code>ViewerItem</code> framework for item specific operations instead.
		 */
		retrieveNextPage: function(callback) {
			this.viewerItem.retrieveNextPage(callback);
		},

		_isViewable: function(item) {
			if (!item)
				item = this.viewerItem.item;

			return item.isViewable();
		},

		/**
		 * Hides the viewer if it is Applet-based, and on browsers where hiding is required in order to display other
		 * DOJO widgets in the same area of the display. Use this call to work around Applet z-ordering issues.
		 */
		hideViewer: function() {
			var methodName = "hideViewer";
			this.logEntry(methodName);

			// We must always do this, because the backing iframe logic is imperfect, and does not always
			// show up behind all Applets.
			if (this.docViewer.isAppletViewer()) {
				this.logDebug(methodName, "The viewer is bing sized to 1x1 px to hide the applet.");
				this.domNode.style.width = "1px";
				this.domNode.style.height = "1px";
			} else {
				this.logDebug(methodName, "The viewer contains no applets, so no hiding is necessary.");
			}
			this.logExit(methodName);
		},

		/**
		 * Shows the viewer if it was previously hidden using hideViewer.
		 */
		showViewer: function() {
			var methodName = "showViewer";
			this.logEntry(methodName);
			this.domNode.style.width = "100%";
			this.domNode.style.height = "100%";
			this.logExit(methodName);
		},

		/**
		 * @deprecated as of 2.0.1. Replaced by closeViewer.
		 */
		onClose: function(closeCallback, cancelCallback) {
			this.confirmClose(closeCallback, cancelCallback);
		},

		/**
		 * Requests to close the viewer. If the viewer contains unsaved changes, or in the middle of printing, the user
		 * will be asked if they wish to abandon work, prior to closing. If the user confirms to close the viewer, the
		 * closeCallback is called. If they confirm to cancel closing, the cancelCallback is called.
		 * 
		 * @param closeCallback
		 *            Called when it is okay to close the viewer.
		 * @param cancelCallback
		 *            Called when the viewer should not be closed.
		 */
		confirmClose: function(closeCallback, cancelCallback) {
			var methodName = "onClose";
			this.logEntry(methodName);
			if (this._confirmDialog)
				this._confirmDialog.destroyRecursive();

			var confirmDialog;
			if (this.docViewer.isDirty() && !this.docViewer.ignoreDirty()) {
				this.logDebug(methodName, "isDirty() returned true.  Creating a dialog.");
				confirmDialog = this.mergeSplitContext.isEnabled() ? this._createMergeSplitTabCloseConfirmDialog(closeCallback, cancelCallback) : this._createTabCloseConfirmDialog(closeCallback, cancelCallback);
				confirmDialog.show();
			} else if (this.isPrinting()) {
				this.logDebug(methodName, "isPrinting() returned true.  Creating a dialog.");
				var executeFired = false;
				confirmDialog = new ConfirmationDialog({
					title: ecm.messages.confirmation_icon_tooltip,
					text: ecm.messages.viewer_warn_is_printing + " " + ecm.messages.viewer_warn_confirm_exit,
					onExecute: lang.hitch(this, function() {
						executeFired = true;
						this.showViewer();
						confirmDialog.hide();
						if (closeCallback)
							closeCallback(this.contentViewerTab);
					}),
					onShow: lang.hitch(this, function() {
						this.hideViewer();
					}),
					onHide: lang.hitch(this, function() {
						if (cancelCallback && !executeFired)
							cancelCallback(this.contentViewerTab);
						this.showViewer();
					})
				});
				domClass.add(confirmDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");
				confirmDialog.show();
			} else {
				this.logDebug(methodName, "Not dirty and not printing, so call the close callback.");
				if (closeCallback) {
					closeCallback(this.contentViewerTab);
				}
			}

			if (confirmDialog)
				this._confirmDialog = confirmDialog;
			this.logExit(methodName);
		},

		_createTabCloseConfirmDialog: function(closeCallback, cancelCallback) {
			var methodName = "_createTabCloseConfirmDialog";
			var yesOrNoFired = false;
			var confirmDialog = new YesNoCancelDialog({
				title: ecm.messages.confirmation_icon_tooltip,
				text: string.substitute(ecm.messages.viewer_prompt_save_changes, [
					this.viewerItem.item.name
				]),
				onYes: lang.hitch(this, function() {
					this.logDebug(methodName + ".onYesCallback", "User selected to save annotations.");
					yesOrNoFired = true;
					confirmDialog.hide();
					this._saveAnnotations(lang.hitch(this, function() {
						this.logDebug(methodName + "_saveAnnotationsCallback", "Annotation save completed, closeCallback == " + (closeCallback ? "defined" : "undefined"));
						if (closeCallback) {
							this.logDebug(methodName + "_saveAnnotationsCallback", "closeCallback is being called now.");
							closeCallback(this.contentViewerTab);
						}
					}));
				}),
				onNo: lang.hitch(this, function() {
					this.logDebug(methodName + ".onNoCallback", "User selected to discard annotations.  They will not be saved. closeCallback == " + (closeCallback ? "defined" : "undefined"));
					yesOrNoFired = true;
					confirmDialog.hide();
					if (closeCallback) {
						this.logDebug(methodName + ".onNoCallback", "closeCallback is being called now.");
						closeCallback(this.contentViewerTab);
					}
				}),
				onShow: lang.hitch(this, function() {
					this.hideViewer();
				}),
				onHide: lang.hitch(this, function() {
					if (cancelCallback && !yesOrNoFired)
						cancelCallback(this.contentViewerTab);
					this.showViewer();
				})
			});
			domClass.add(confirmDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");

			return confirmDialog;
		},

		_createMergeSplitTabCloseConfirmDialog: function(closeCallback, cancelCallback) {
			var executeCalled = false;
			var confirmDialog = new ConfirmationDialog({
				title: ecm.messages.confirmation_icon_tooltip,
				text: string.substitute(ecm.messages.viewer_prompt_mergesplit_tab_changes, [
					this.viewerItem.item.name || ""
				]),
				onExecute: lang.hitch(this, function() {
					executeCalled = true;
					confirmDialog.hide();
					if (lang.isFunction(closeCallback))
						closeCallback();
				}),
				onShow: lang.hitch(this, function() {
					this.hideViewer();
				}),
				onHide: lang.hitch(this, function() {
					if (!executeCalled && lang.isFunction(cancelCallback))
						cancelCallback();
					this.showViewer();
				})
			});
			domClass.add(confirmDialog.domNode, " ecmConfirmationWarningDialog viewerConfirmationDialog");

			return confirmDialog;
		},

		/**
		 * @deprecated as of 2.0.1. There is no replacement. Intended for internal use only.
		 */
		getSaveOrWaitStatusMessage: function(nameList, asHtml) {
			var statusMessage = "";
			if ((this.docViewer.isDirty() && !this.docViewer.ignoreDirty()) && nameList.indexOf(ecm.messages.viewer_warn_has_changes) == -1) {
				statusMessage = ecm.messages.viewer_warn_has_changes;
			} else if (this.isPrinting() && nameList.indexOf(ecm.messages.viewer_warn_is_printing) == -1) {
				statusMessage = ecm.messages.viewer_warn_is_printing;
			}

			if (nameList != "" && statusMessage != "") {
				statusMessage = (asHtml ? "<br><br>" : "\n\n") + statusMessage;
			}

			return statusMessage;
		},

		/**
		 * @deprecated as of 2.0.1. There is no replacement. Intended for internal use only.
		 */
		getSaveOrWaitStatus: function(listHeading, nameList, asHtml) {
			var methodName = "getSaveOrWaitStatus";
			this.logEntry(methodName);
			asHtml = (asHtml && asHtml == true ? true : false);

			var statusMessage = "";
			if ((this.docViewer.isDirty() && !this.docViewer.ignoreDirty()) || this.docViewer.isPrinting()) {
				statusMessage = this.getSaveOrWaitStatusMessage(nameList, asHtml);
				nameList += (statusMessage + (asHtml ? "<br><br>" : "\n\n") + listHeading + (asHtml ? "<br>&nbsp;&nbsp;" : "\n    ") + this.viewerItem.getHtmlName());
				this.logDebug(methodName, "So far we have: " + nameList);
			} else {
				this.logDebug(methodName, "viewerPane is ready to close");
			}

			this.logExit(methodName);
			return nameList;
		},

		/**
		 * @deprecated As of 2.0.1. Use the <code>DocViewer</code> framework for document viewer specific operations
		 *             instead.
		 */
		isPrinting: function() {
			return this.docViewer.isPrinting();
		},

		/**
		 * @deprecated As of 2.0.1. Use the <code>DocViewer</code> framework for document viewer specific operations
		 *             instead.
		 */
		closeItem: function() {
			this.docViewer.closeItem();
		},

		_selectMe: function() {
			var methodName = "_selectMe";
			this.logEntry(methodName);

			if (this.contentViewerTab)
				this.contentViewerTab.select();

			this.logExit(methodName);
		},

		/**
		 * @deprecated As of 2.0.1. Use the <code>DocViewer</code> framework for document viewer specific operations
		 *             instead.
		 */
		isDirty: function() {
			return this.docViewer.isDirty();
		},

		/**
		 * @deprecated As of 2.0.1. Use the <code>DocViewer</code> framework for document viewer specific operations
		 *             instead.
		 */
		isLocked: function() {
			return this.docViewer.isLocked();
		},

		_saveAnnotations: function(callback) {
			this.docViewer.saveAnnotations(callback);
		},

		getPageNumber: function() {
			return this.docViewer.getPageNumber();
		},

		_getFnViewerApplet: function() {
			return this.docViewer._getFnViewerApplet();
		},

		_getFnViewerLauncher: function() {
			return this.docViewer._getFnViewerLauncher();
		},

		_getWebiApplet: function() {
			return this.docViewer._getWebiApplet();
		},

		_showErrorDialog: function(key, callback, inserts) {
			if (this._errorDialog)
				this._errorDialog.destroyRecursive();

			this._errorDialog = new ErrorDialog({
				onShow: lang.hitch(this, function() {
					this.hideViewer();
				}),
				onHide: lang.hitch(this, function() {
					if (callback && callback != null) {
						callback();
					}
					this.showViewer();
				})
			});

			var message = Message.createErrorMessage(key, inserts);
			this._errorDialog.showMessage(message);
		},

		/** @private */
		layout: function() {
			this.resize();
			this.docViewer.layout();
		},

		/** @private */
		resize: function() {
			if (this.domNode.parentNode) {
				var sizerNode = this.domNode.parentNode;

				var width = sizerNode.style.width;
				var height = sizerNode.style.height;

				domStyle.set(this.domNode, "width", width + "px");
				domStyle.set(this.domNode, "height", height + "px");
			}
		},

		/** @private */
		uninitialize: function() {
			this.inherited(arguments);

			if (this._confirmDialog) {
				this._confirmDialog.destroyRecursive();
				this._confirmDialog = null;
			}
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			this._removeMergeSplitToggleEventSubscription();
			this.docViewer.uninitialize();
		}
	});

	return ContentViewerPane;
});

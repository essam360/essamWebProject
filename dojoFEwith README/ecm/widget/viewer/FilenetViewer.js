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
	"dojo/_base/array",
	"dojo/string",
	"ecm/widget/viewer/IframeDocViewer",
	"ecm/model/ContentItem",
	"ecm/model/Request",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Message",
	"ecm/widget/dialog/ErrorDialog"
], //
function(declare, lang, connect, has, array, string, IframeDocViewer, ContentItem, Request, LoggerMixin, Messages, Message, ErrorDialog) {

	/**
	 * @name ecm.widget.viewer.FilenetViewer
	 * @class Provides the FileNet Viewer widget.
	 * @augments ecm.widget.viewer.IframeDocViewer
	 */
	var FilenetViewer = declare("ecm.widget.viewer.FilenetViewer", [
		IframeDocViewer,
		LoggerMixin
	], {

		/** @lends ecm.widget.viewer.FilenetViewer.prototype */

		_nativeTypes: new Array("image/bmp", "image/gif", "image/jpeg", "image/jpg", "image/pjpeg", "image/png", "image/tiff", "application/vnd.ms-outlook", //
		"application/x-filenet-filetype-msg", "message/rfc822", "application/x-cold", "application/vnd.filenet.im-cold", "application/vnd.filenet.im-image", // 
		"application/vnd.filenet.im-other", "application/pdf"),

		_officeModuleTypes: new Array("application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/msword", //
		"application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document"),

		_itemLaunched: false,
		_fnViewerPrinting: false,
		_itemBootstrap: null,
		_bootedSrc: "",
		_annotTooltips: {},

		/** @private */
		postCreate: function() {
			this.inherited(arguments);
			connect.connect(this, "onDocumentLoaded", this, function() {
				this._itemLaunched = true;
			});
		},

		/**
		 * Determines if the viewer can open the item on the current client and mid-tier platforms. In the following
		 * cases, this method will return false:
		 * <ul>
		 * <li>The browser does not have a Java plug-in installed or available.</li>
		 * <li>The document is an office type of document, and the client system is not Windows 32-bit.</li>
		 * </ul>
		 * 
		 * @param item
		 *            The item to test.
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, indicating whether this viewer can
		 *         open the specified item.
		 */
		canOpenItem: function(item) {
			var methodName = "canOpenItem";
			this.logEntry(methodName);

			var canOpen = true;
			var mimeType = item.mimetype;

			if (!this._hasJavaPlugin()) {
				this.logDebug(methodName, "Required java plugin was not found.  canOpenItem will return false.");
				canOpen = false;
			} else if (!this._isOfficeModuleType(mimeType) && !this._isNativeType(mimeType)) {
				var platform = (navigator && navigator.platform ? navigator.platform : "Win32");
				if (platform != "Win32") {
					this.logDebug(methodName, "Cannot open " + mimeType + "type on the " + platform + "platform.  canOpenItem will return false.");
					canOpen = false;
				}
			}

			this.logExit(methodName);
			return canOpen;
		},

		/**
		 * Displays the item, if an item has been set on this viewer. The callback will be called on successful
		 * completion of showing the item.
		 */
		showItem: function() {
			var methodName = "showItem";
			this.logEntry(methodName);

			if (this._bootedSrc != this._src) {
				this._bootedSrc = this._src; // only call once per setItem
				this._isLoading = true;

				var params = {
					docUrl: this.viewerDef.getDocUrl(this._item),
					repositoryId: this._item.repository.id
				};

				var request = ecm.model.Request.invokeService("getViewoneBootstrap", this._item.repository.type, params, lang.hitch(this, function(response) {
					this._showItem(response.viewOneBootstrap);
				}), null, null, lang.hitch(this, function(response) {
					this._showItem(null);
				}), false); // set background is false to prevent status dialog blurring the popup
			}

			this.logExit(methodName);
			return request;
		},

		_showItem: function(bootstrap) {
			var methodName = "_showItem";
			this.logEntry(methodName);

			if (this._loadedSrc != this._bootedSrc) {
				var launched = false;

				this._annotTooltips = {};

				if (this._itemLaunched) { // Applet should already exist.
					if (!has("ie")) {
						var applet = this._getFnViewerApplet();
						if (applet) {
							this.logDebug(methodName, "FnViewerApplet found");
							var launcher = this._getFnViewerLauncher();
							if (launcher.isBootstrapCompatible(this._itemBootstrap, bootstrap)) {
								this._itemBootstrap = bootstrap;
								if (launcher != null && launcher.canReuse(this._item.mimetype)) {
									var thisItem = this._item;
									if (thisItem.attributes.ContentElementsPresent || thisItem.repository.type != "p8") {
										this._recycleFnViewer(launcher, thisItem, this.viewerDef.getDocUrl(thisItem), this._pageNumber, this._itemBootstrap);
									} else {
										thisItem.retrieveAttributes(lang.hitch(this, function(retrievedItem) {
											this._recycleFnViewer(launcher, thisItem, this.viewerDef.getDocUrl(thisItem), this._pageNumber, this._itemBootstrap);
										}), false);
									}
									this._loadedSrc = this._bootedSrc;
									launched = true;
								}
							}
						} else {
							this._itemLaunched = false;
						}
					}
				}

				if (!launched) {
					this.logDebug(methodName, "Reloading the iframe");
					this._itemBootstrap = bootstrap;
					this._loadSource(this._bootedSrc);
				}
			}

			this.logExit(methodName);
		},

		_setViewerUrl: function() {
			var methodName = "_setViewerUrl";
			this.logEntry(methodName);

			this.inherited(arguments); // call superclass to set this._src
			var viewerUrl = this._src;

			if (this._itemBootstrap != null && this._itemBootstrap.contentElementList)
				viewerUrl += "&hasElements=true";

			this._src = viewerUrl;
			this.logExit(methodName);
		},

		/**
		 * Closes the item. Terminates display of the document in the viewer, and clears any states related to the item
		 * assigned to this viewer.
		 */
		closeItem: function() {
			var methodName = "closeItem";
			this.logEntry(methodName);
			this.inherited(arguments);

			this._annotTooltips = {};

			try {
				var applet = this._getFnViewerApplet();
				if (applet != null) {
					applet.closeDocument();
				}
			} catch (e) {
				this.logError(methodName, e.message, e);
			}

			this._bootedSrc = "";
			this.logExit(methodName);
		},

		/**
		 * Determines if the current document is in the process of being loaded into the viewer.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if the document is in the process
		 *         of loading into the viewer.
		 */
		isLoading: function() {
			var methodName = "isLoading";
			this.logEntry(methodName);

			if (this._isLoading) {
				this.logDebug(methodName, "this._isLoading is true, checking javascript and applet conditions.");
				if (this._viewerIframe != null && this._viewerIframe.contentDocument && this._viewerIframe.contentDocument.readyState == "complete" && this._viewerIframe.contentDocument.URL != "about:blank") {
					var fnLauncher = this._getFnViewerLauncher();
					if (fnLauncher == null) {
						this.logDebug(methodName, "fnLauncher not found, setting this._isLoading to false.");
						this._isLoading = false;
					} else {
						var fnApplet = this._getFnViewerApplet();
						if (fnApplet == null) {
							// The Applet failed to be created.
							this.logDebug(methodName, "fnApplet not found, setting this._isLoading to false.");
							this._isLoading = false;
						} else {
							try {
								var docRef = fnApplet.getDocReference();
							} catch (exception) {
								// The Applet is not functioning as expected.
								this.logDebug(methodName, "Exception caught while calling fnApplet.getDocReference.  Applet must have failed.  setting this._isLoading to false.");
								this._isLoading = false;
							}
						}
					}
				}
			} else {
				this.logDebug(methodName, "this._isLoading is false already.");
			}

			this.logExit(methodName, "Returning: " + this._isLoading);
			return this._isLoading;
		},

		/**
		 * Determines if the document has completed loading.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if loading and display of the
		 *         document has completed.
		 */
		isLoaded: function() {
			var methodName = "isLoaded";
			this.logEntry(methodName);
			var isLoaded = !this.isLoading();
			this.logExit(methodName, "Returning: " + isLoaded);
			return isLoaded;
		},

		/**
		 * Determines if the viewer is Applet-based. Returns <code>true</code>.
		 * 
		 * @return {Boolean} <code>True</code>.
		 */
		isAppletViewer: function() {
			return true;
		},

		/**
		 * Determines if the viewer contains unsaved changes.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if annotations have been added,
		 *         modified, or deleted.
		 */
		isDirty: function() {
			var methodName = "isDirty";
			this.logEntry(methodName);
			var dirty = false;

			try {
				var applet = this._getFnViewerApplet();
				if (applet != null)
					dirty = applet.isAnnotationsUpdated();
			} catch (e) {
				this.logError(methodName, e.message, e);
				dirty = false;
			}

			this.logDebug(methodName, "Calling onDirty with " + dirty);
			this.onDirty(dirty); // Refresh when polling, in case the browser does not support callbacks.

			this.logExit(methodName, "(" + dirty + ")");
			return dirty;
		},

		ignoreDirty: function() {
			var ignore = false;

			var launcher = this._getFnViewerLauncher();
			if (launcher != null && launcher.parameterMap) {
				if (launcher.parameterMap["annotationAutoSave"]) {
					ignore = (launcher.parameterMap["annotationAutoSave"] == "true" || launcher.parameterMap["annotationAutoSave"] == true);
				}
			}

			return ignore;
		},

		/**
		 * Saves all annotation changes.
		 * 
		 * @param callback
		 *            If specified, call the callback upon completion of the save.
		 */
		saveAnnotations: function(callback) {
			var methodName = "saveAnnotations";
			this.logEntry(methodName);
			this._annotTooltips = {};

			var applet = this._getFnViewerApplet();
			if (applet != null) {
				this.logDebug(methodName, "Saving ViewONE annotations.");
				this._saveFnViewerAnnotations(callback);
			}

			this.logExit(methodName);
		},

		/**
		 * Determines if the viewer is printing the document.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if the viewer is in the process of
		 *         printing a document.
		 */
		isPrinting: function() {
			return this._fnViewerPrinting;
		},

		/**
		 * Returns the page number of the current page being viewed.
		 * 
		 * @return {number}
		 */
		getPageNumber: function() {
			var methodName = "getPageNumber";
			this.logEntry(methodName);

			var pageNumber = 1; // default to page 1 if the contained viewer does not support getting the page number.

			try {
				var applet = this._getFnViewerApplet();
				if (applet != null) {
					pageNumber = applet.getPage();
				}
			} catch (error) {
				this.logDebug(methodName, "Error while getting the page number from the Applet: " + error);
			}

			this.logExit(methodName);
			return pageNumber;
		},

		/**
		 * Return the Daeja ViewONE Pro Applet instance.
		 * 
		 * @since 2.0.3.3
		 */
		getNativeViewer: function() {
			return this._getFnViewerApplet();
		},

		//  /////////////////////////////////////////////////////////////////////////////// 
		//  Everything below this line is internal, and not part of the public interface.
		//  ///////////////////////////////////////////////////////////////////////////////

		_isNativeType: function(mimeType) {
			return array.indexOf(this._nativeTypes, mimeType.toLowerCase()) >= 0;
		},

		_isOfficeModuleType: function(mimeType) {
			return array.indexOf(this._officeModuleTypes, mimeType.toLowerCase()) >= 0;
		},

		_recycleFnViewer: function(launcher, item, docUrl, pageNumber, bootstrap) {
			var methodName = "_recycleFnViewer";
			this.logEntry(methodName);
			this.logDebug(methodName, "FnViewerLauncher.openDocument found.  Calling.");
			var pageList = new Array();
			var isFederated = false;

			if (item.replicationGroup)
				isFederated = item.replicationGroup != null;

			if (bootstrap && bootstrap.contentElements) {
				pageList = bootstrap.contentElements;
			} else if (item.repository.type == "p8") {
				var contentElementsPresent = item.attributes.ContentElementsPresent;
				for (var e = 0; e < contentElementsPresent.length; e++) {
					if (!ContentItem.NoContentMimeTypes[contentElementsPresent[e]]) {
						pageList.push(e);
					}
				}
			}

			launcher.setItemBootstrap(bootstrap);
			launcher.openDocument(docUrl, isFederated, pageList, pageNumber, item.mimetype);
			if (has("safari")) {
				this._onFnViewerEvent(5);
			}
			this.logExit(methodName);
		},

		_getFnViewerLauncher: function() {
			var fnViewerLauncher = null;

			if (this._viewerIframe != null && this._viewerIframe.contentWindow && this._viewerIframe.contentWindow.v1launcher)
				fnViewerLauncher = this._viewerIframe.contentWindow.v1launcher;

			return fnViewerLauncher;
		},

		_getFnViewerApplet: function() {
			var applet = null;

			try {
				if (this._viewerIframe != null && this._viewerIframe.contentWindow && this._viewerIframe.contentWindow.document.ViewONE) {
					applet = this._viewerIframe.contentWindow.document.ViewONE;
				}
			} catch (e) {
				applet = null;
			}

			return applet;
		},

		_saveFnViewerAnnotations: function(callback) {
			var methodName = "_saveFnViewerAnnotations";
			this.logEntry(methodName);

			if (this.saveCompleted == null) {
				this.saveCompleted = callback;
				this._getFnViewerApplet().saveAnnotations();
				if (has("safari") && this.saveCompleted != null) {
					setTimeout(dojo.hitch(this, function() {
						this._onFnViewerEvent(42); // simulate save complete after 2 seconds, since Safari does not support Java-to-JavaScript LiveConnect.
					}), 2000);
				}
			}

			this.logExit(methodName);
		},

		_getFnAnnotationTooltip: function() {
			return string.substitute(ecm.messages.viewer_fn_annotation_tooltip, ["<creator>", "<createdate>"]);	
		},

		_onFnViewerEvent: function(n, text, data, callbackId) {
			var methodName = "_sendFnViewerSignal";
			this.logEntry(methodName);
			this.lastEvent = n;
			this.logDebug(methodName, "Received FileNet Viewer event: " + n);

			switch (n) {
			case 5:
				this.logDebug(methodName, "FileNet Viewer opened the document");
				this._annotTooltips = {};
				this.onDocumentLoaded();
				break;
			case 57:
				this.logDebug(methodName, "FileNet Viewer printing started.");
				this._fnViewerPrinting = true;
				break;
			case 26:
			case 27:
				this.logDebug(methodName, "FileNet Viewer printing completed.");
				this._fnViewerPrinting = false;
				break;
			case 61: // document failed to load.
				this.logDebug(methodName, "FileNet Viewer failed to load the document");
				this.onDocumentLoaded();
				this._showErrorDialog("viewer_document_load_failed_error");
				break;
			case 21: // focus out of the Applet
				this.logDebug(methodName, "Focus out of the applet");
				this.onViewerFocusOut();
				break;
			case 24:
				this.logDebug(methodName, "Saving FileNet Viewer annotations completed.");
				if (this.saveCompleted != null) {
					this._annotTooltips = {};
					this.logDebug(methodName, "Calling saveCallback");
					this.saveCompleted();
					this.saveCompleted = null;
					this.onDirty(false);
				}
				// Don't break - fall through to case 33...
			case 33:
				this.logDebug(methodName, "Calling onDirty(false)");
				this._annotTooltips = {};
				this.onDirty(false);
				break;
			case 32:
				this.logDebug(methodName, "Calling onDirty(true)");
				this.onDirty(true);
				break;
			case 74:
				this._loadTooltip(n, text, data, callbackId);
				break;
			default: // assume it is a save completed.
				break;
			}

			this.logExit(methodName);
		},

		_loadTooltip: function(id, text, jsonData, callbackId) {
			var methodName = "_loadTooltip";
			var applet = this._getFnViewerApplet();

			this.logDebug(methodName, jsonData);
			var info = (jsonData != null && callbackId != -1 ? JSON.parse(jsonData) : null);

			if (info != null && info.type == 'annotation') {
				this.logDebug(methodName, 'annot id=' + info.id);

				if (this._annotTooltips[info.id]) {
					this.logDebug(methodName, 'Setting cached tooltip for id=' + info.id);
					setTimeout(lang.hitch(this, function() {
						applet.setEventHandlerCallbackResponse(callbackId, this._annotTooltips[info.id]);
						applet.releaseEventHandlerCallback(callbackId);
					}), 10);
				} else {
					this.logDebug(methodName, 'Processing tooltip for id=' + info.id);

					var annotData = applet.getAnnotationByID(info.id);
					//format of annotation output will need to be handle here. 
					var userId = applet.parseProperty("CREATEDID", annotData);

					this.logDebug(methodName, annotData);

					var launcher = this._getFnViewerLauncher();
					if (launcher != null && launcher.parameterMap) {
						var customAnnotationToolTip = launcher.parameterMap["customAnnotationToolTip"];
						if (customAnnotationToolTip != null) {
							if (customAnnotationToolTip.indexOf("<creatorname>") > -1 && this._itemBootstrap && this._itemBootstrap.userDisplayNames) {
								this.logDebug(methodName, "<creatorname> found.  Looking up user display name.");
								if (userId != null && this._itemBootstrap.userDisplayNames[userId]) {
									customAnnotationToolTip = customAnnotationToolTip.replace("<creatorname>", this._itemBootstrap.userDisplayNames[userId]);
								} else {
									customAnnotationToolTip = customAnnotationToolTip.replace("<creatorname>", userId);
								}
							}

							setTimeout(lang.hitch(this, function() {
								this._annotTooltips[info.id] = customAnnotationToolTip;
								applet.setEventHandlerCallbackResponse(callbackId, customAnnotationToolTip);
								applet.releaseEventHandlerCallback(callbackId);
							}), 10);
						}
					}
				}
			} else if (callbackId != -1) {
				applet.releaseEventHandlerCallback(callbackId);
			}
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
			this._errorDialog.showMessage(message);
		},

		_iframeLoaded: function() {
			var methodName = "_iframeLoaded";
			this.logEntry(methodName);
			// override for FilenetViewer, to prevent onDocumentLoaded being called by the superclass version of this method.
			// ...but Java-to-JavaScript LiveConnect don't work for Safari, so delegate in that case.
			if (has("safari")) {
				this.inherited(arguments);
			}
			this.logExit(methodName);
		},

		/** @private */
		uninitialize: function() {
			var methodName = "uninitialize";
			this.logEntry(methodName);
			if (!this._uninitialized) {
				if (this._errorDialog) {
					this._errorDialog.destroyRecursive(false);
					this._errorDialog = null;
				}

				this._uninitialized = true;
			}
		}
	});

	return FilenetViewer;
});

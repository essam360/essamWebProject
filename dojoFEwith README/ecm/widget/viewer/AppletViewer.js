/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/widget/viewer/IframeDocViewer",
	"ecm/model/ContentClass",
	"ecm/model/_OutsideInSupportedMixin",
	"ecm/LoggerMixin"
], //
function(declare, lang, IframeDocViewer, ContentClass, _OutsideInSupportedMixin, LoggerMixin) {

	/**
	 * @name ecm.widget.viewer.AppletViewer
	 * @class The IBM Content Manager OnDemand Viewer Applet widget.
	 * @augments ecm.widget.viewer.IframeDocViewer
	 */
	var AppletViewer = declare("ecm.widget.viewer.AppletViewer", [
		IframeDocViewer,
		_OutsideInSupportedMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer.AppletViewer.prototype */

		_closeRequired: false,

		/**
		 * Determine if the viewer can open the item on the current client and mid-tier platforms. In the following
		 * cases, this method will return <code>false</code>:
		 * <ul>
		 * <li>The browser does not have a Java plug-in installed or available.</li>
		 * <li>The document is an office type of document, and the client system is not Windows 32 or 64-bit.</li>
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
			} else if (this._isOIType(mimeType)) {
				var platform = (navigator && navigator.platform ? navigator.platform : "Win32");
				if (platform != "Win32" && platform != "Win64") {
					this.logDebug(methodName, "Cannot open " + mimeType + "type on the " + platform + "platform.  canOpenItem will return false.");
					canOpen = false;
				}
			}

			this.logExit(methodName);
			return canOpen;
		},

		/**
		 * Close the item. Terminate display of the document in the viewer, and clear any states related to the item
		 * that is assigned to this viewer.
		 */
		closeItem: function() {
			var methodName = "closeItem";
			this.logEntry(methodName);
			this.inherited(arguments);

			if (this._closeRequired) {
				try {
					var applet = this._getWebiApplet();
					if (applet != null) {
						applet.jsCloseDocumentNoPrompt();
					}
				} catch (e) {
					this.logError(methodName, e.message, e);
				}
			}

			this.logExit(methodName);
		},

		/**
		 * Determine if the viewer is Applet-based. Returns <code>true</code>.
		 * 
		 * @return {Boolean} A value of <code>true</code>.
		 */
		isAppletViewer: function() {
			return true;
		},

		/**
		 * Determine if the viewer contains unsaved changes.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if annotations have been added,
		 *         modified, or deleted.
		 */
		isDirty: function() {
			var methodName = "isDirty";
			this.logEntry(methodName);
			var dirty = false;

			try {
				var applet = this._getWebiApplet();
				if (applet != null) {
					dirty = applet.isDirty();
				}
			} catch (e) {
				this.logError(methodName, e.message, e);
				dirty = false;
			}

			this.logDebug(methodName, "Calling onDirty with " + dirty);
			this.onDirty(dirty); // Refresh when polling, in case the browser does not support callbacks.

			this.logExit(methodName, "(" + dirty + ")");
			return dirty;
		},

		/**
		 * Determine if the item being shown in the viewer is locked.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if the viewer has locked the item
		 *         or sees the item as locked.
		 */
		isLocked: function() {
			var methodName = "isLocked";
			this.logEntry(methodName);
			var locked = false;

			try {
				var applet = this._getWebiApplet();
				if (applet != null) {
					locked = applet.isLocked();
				}
			} catch (e) {
				this.logError(methodName, e.message, e);
				locked = false;
			}

			this.logExit(methodName, "(" + locked + ")");
			return locked;
		},

		/**
		 * Save all annotation changes.
		 * 
		 * @param callback
		 *            If specified, call the callback upon completion of the save.
		 */
		saveAnnotations: function(callback) {
			var methodName = "saveAnnotations";
			this.logEntry(methodName);

			var applet = this._getWebiApplet();
			if (applet != null) {
				this.logDebug(methodName, "Saving CM Viewer Applet annotations.");
				applet.jsSave();
				this.logDebug(methodName, "Saving CM Viewer Applet annotations completed.");
			}

			if (callback) {
				callback();
			}

			this.logExit(methodName);
		},

		/**
		 * Determine if the viewer is printing the document.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if the viewer is in the process of
		 *         printing a document.
		 */
		isPrinting: function() {
			var methodName = "isPrinting";
			this.logEntry(methodName);
			var printing = false;

			try {
				var applet = this._getWebiApplet();
				if (applet != null) {
					printing = applet.isPrinting();
				}
			} catch (e) {
				this.logError(methodName, e.message, e);
				printing = false;
			}

			this.logExit(methodName, "(" + printing + ")");
			return printing;
		},

		/**
		 * Return the page number of the current page that is being viewed.
		 * 
		 * @return {number} A number that represents the current page being viewed.
		 */
		getPageNumber: function() {
			var methodName = "getPageNumber";
			this.logEntry(methodName);

			var pageNumber = 1; // default to page 1 if the contained viewer does not support getting the page number.

			try {
				var applet = this._getWebiApplet();
				if (applet != null) {
					pageNumber = applet.getPageNumber();
				}
			} catch (error) {
				this.logDebug(methodName, "Error while getting the page number from the Applet: " + error);
			}

			this.logExit(methodName);
			return pageNumber;
		},

		/**
		 * Return the Applet Viewer Applet instance.
		 * 
		 * @since 2.0.3.3
		 */
		getNativeViewer: function() {
			return this._getWebiApplet();
		},

		onDirty: function(dirty) {
			if (dirty) {
				this._closeRequired = true; // annotation edits have taken place.  flag this as requiring document close.
			}
		},

		//  /////////////////////////////////////////////////////////////////////////////// 
		//  Everything below this line is internal, and not part of the public interface.
		//  ///////////////////////////////////////////////////////////////////////////////

		_getWebiApplet: function() {
			var applet = null;

			try {
				if (this._viewerIframe.contentWindow && this._viewerIframe.contentWindow.document.viewer) {
					applet = this._viewerIframe.contentWindow.document.viewer;
				}
			} catch (e) {
				applet = null;
			}

			return applet;
		},

		_onViewerAppletEvent: function(eventName, arg1) {
			var methodName = "_onViewerAppletEvent";
			this.logEntry(methodName);
			this.logDebug(methodName, "Called with eventName: " + eventName + ", and arg1: " + arg1);

			if (eventName == "endEditingBookmarks") {
				var item = (this._item.origItem ? this._item.origItem : this._item);
				item.hasBookmarks = (arg1 > 0 ? true : false);
				setTimeout(lang.hitch(this, function() {
					this.logDebug(methodName, "Calling item.update(item) with hasBookmarks updated.");
					item.update(item);
				}), 0);
				this.logDebug(methodName, "item hasBookmarks set to " + item.hasBookmarks);
			} else if (eventName == "updateItem") {
				var item = (this._item.origItem ? this._item.origItem : this._item);
				this._refreshItem(item, lang.hitch(this, function(refreshedItem) {
					if (refreshedItem.locked) {
						this._closeRequired = true; // item is checked out, flag to close this document out.
					}
					this.logDebug(methodName, "item hasBookmarks set to " + refreshedItem.hasBookmarks);
				}));
			} else if (eventName == "annotationsDirty") {
				this.onDirty(true);
				this.logDebug(methodName, "Annotations modified event received.");
			} else if (eventName == "annotationsClean") {
				this.onDirty(false);
				this.logDebug(methodName, "Annotations saved event received.");
			}

			this.logExit(methodName);
		},

		_refreshItem: function(item, callback) {
			var methodName = "_refreshItem";
			this.logEntry(methodName);

			var contentClass = item.getContentClass();
			if (contentClass.versionControl == ContentClass.VERSION_CONTROL.ALWAYS) {
				item.retrieveVersion("current", lang.hitch(this, function(versionItem) {
					item.update(versionItem);
					callback(item);
				}));
			} else {
				item.retrieveAttributes(lang.hitch(this, function(refreshedItem) {
					callback(refreshedItem);
				}), true);
			}

			this.logExit(methodName);
		}
	});

	return AppletViewer;
});

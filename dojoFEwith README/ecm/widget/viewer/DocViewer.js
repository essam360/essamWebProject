/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/layout/_LayoutWidget",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/DocViewer.html",
	"ecm/model/Desktop",
	"ecm/model/Repository",
	"ecm/LoggerMixin"
], //
function(declare, lang, connect, domClass, _Widget, _LayoutWidget, _TemplatedMixin, template, Desktop, Repository, LoggerMixin) {

	/**
	 * @name ecm.widget.viewer.DocViewer
	 * @class Provides a base class for all document viewer widgets. All document viewers in ICN have this widget/class
	 *        as their base.
	 * @augments dijit._Widget
	 */
	var DocViewer = declare("ecm.widget.viewer.DocViewer", [
		_LayoutWidget,
		_TemplatedMixin,
		LoggerMixin
	], {

		/** @lends ecm.widget.viewer.DocViewer.prototype */

		/**
		 * The item assigned to this doc viewer.
		 * 
		 * @deprecated This item property is not guaranteed to be in the correct window context, so it can only be used
		 *             to obtain the document id/properties required for the viewer to obtain the document content and
		 *             annotations. Use getItem instead.
		 */
		item: null,

		/**
		 * The page to start on when initially opening the item to view.
		 * 
		 * @since 2.0.2
		 */
		startingPage: 1,

		templateString: template,

		widgetsInTemplate: false, //has child widgets (it has to have ContentPanes).
		_pageNumber: 1,
		_editItem: null,
		_isLoading: false,

		/**
		 * Sets the document viewer's CSS class for the DocViewer container. By default, this is initialized to
		 * ECMDocViewer.
		 */
		docViewerClass: "ECMDocViewer",

		/**
		 * The instance of ecm.model.Viewer associated with this DocViewer instance. Set this property on construction
		 * of the DocViewer instance.
		 * 
		 * @since 2.0.2
		 */
		viewerDef: null,

		/**
		 * Indicates whether this instance of DocViewer is being used for preview.
		 * 
		 * @since 2.0.2
		 */
		preview: false,

		/**
		 * Indicates whether or not to show an error dialog, stating that no viewers are available to view a document,
		 * when the onFallback handler does not find a backup viewer.
		 * 
		 * @since 2.0.3
		 */
		showErrorOnFallback: true,

		/** @private */
		constructor: function() {
			this._initializeViewerDef();
		},

		/** @private */
		postCreate: function() {
			this._initializeViewerDef();
			connect.connect(this, "onDocumentLoaded", this, function() {
				this._isLoading = false;
				if (this.contentViewerPane && this.contentViewerPane.contentViewerTab && this.contentViewerPane.contentViewerTab.tabContainer && this.contentViewerPane.contentViewerTab.tabContainer.contentViewer && this.contentViewerPane.contentViewerTab.tabContainer.contentViewer._refreshNextPrev && lang.isFunction(this.contentViewerPane.contentViewerTab.tabContainer.contentViewer._refreshNextPrev)) {
					this.contentViewerPane.contentViewerTab.tabContainer.contentViewer._refreshNextPrev(this.contentViewerTab);
				}
			});

			if (this.docViewerClass != null && this.docViewerClass.length > 0) {
				domClass.add(this.domNode, this.docViewerClass);
			}
		},

		_initializeViewerDef: function() {
			if (this._viewerDef && !this.viewerDef) {
				this.viewerDef = this._viewerDef;
			}
		},

		/**
		 * Assigns an item to this viewer. This call is not required to actually display the document (item) in the user
		 * interface. The parameters are the viewerItem to view, and the page number to start on. If unspecified, the
		 * page number to start on is assumed to be page 1.
		 * 
		 * @param item
		 *            The item being assigned to this viewer.
		 * @param pageNumber
		 *            For document viewers that support page control, the page number to start on. If not specified,
		 *            page 1 is assumed. (optional)
		 */
		setItem: function(item, pageNumber) {
			if (this.item != null && this.item != item) {
				this.closeItem();
			}

			this.item = item;
			this._item = item; // TODO: remove references to this._item

			if (pageNumber) {
				this.startingPage = pageNumber;
			} else {
				this.startingPage = 1;
			}

			if (this._item.repository instanceof Repository) {
				// This is only true when the item is from the same window as the viewer.
				this._editItem = this._item;
			} else {
				this._editItem = null;
			}

			this._pageNumber = this.startingPage;
		},

		/**
		 * Get an instance of the item assigned to this viewer. Specify "true" to refresh the properties of the item, to
		 * be current.
		 * 
		 * @param callback
		 *            The callback to call upon completion, the item instance will be passed as the sole parameter to
		 *            this callback.
		 * @param refresh
		 *            Specify true or false, to refresh the item properties.
		 * @since 2.0.3
		 */
		getItem: function(callback, refresh, freshItem) {
			var methodName = "getItem";
			this.logEntry(methodName);

			if (this._editItem == null || refresh === true && !freshItem) {
				var item = this._item
				var repository = Desktop.getRepository(item.repository.id);
				repository.retrieveItem(item.id, lang.hitch(this, function(retrievedItem) {
					this._updateEditItem(retrievedItem);
					callback(this._editItem);
				}), item.template, "specific", null, null, null, {
					requestFailedCallback: lang.hitch(this, function() {
						this.logError("failed to retrieve the item: " + item.id);
					})
				});
			} else {
				if (freshItem)
					this._updateEditItem(freshItem);
				callback(this._editItem);
			}

			this.logExit(methodName);
		},

		_updateEditItem: function(item) {
			// If this is a refresh retrieve of _editItem, copy the parent over to the retrieved item.
			if (this._editItem && this._editItem.parent) {
				item.parent = this._editItem.parent;
			}
			// Set a reference to the original item for next/previous handling.
			item.origItem = this._item.origItem ? this._item.origItem : this._item;
			if (this._item.version) {
				item.version = this._item.version;
			}

			this._editItem = item;
		},

		/**
		 * Displays the item, if an item has been set on this viewer. The callback will be called on successful
		 * completion of showing the item.
		 * 
		 * @param callback
		 *            The callback to call on successful completion of this call. (optional)
		 */
		showItem: function(callback) {
			this._isLoading = true;
			this.onDocumentLoaded();
		},

		/**
		 * Closes the item. Terminate display of the document in the viewer, and clear any states related to the item
		 * assigned to this viewer.
		 */
		closeItem: function() {
			this.item = null;
			this._editItem = null;
			this._pageNumber = 1;
			this.onDirty(false);
			return false;
		},

		/**
		 * Determines if the viewer can open the item on the current client and mid-tier platforms.
		 * 
		 * @param item
		 *            The item to test.
		 * @return {Boolean} True or false, indicating whether this viewer can open the specified item.
		 */
		canOpenItem: function(item) {
			var methodName = "canOpenItem";
			this.logEntry(methodName);
			this.logDebug(methodName, "Fallback is not implemented for this viewer.  Returning true.");
			var canOpen = true;
			this.logExit(methodName);
			return canOpen;
		},

		/**
		 * Determines if the current document is in the process of being loaded.
		 * 
		 * @return {Boolean} True or false, if the document is in the process of loading into the viewer.
		 */
		isLoading: function() {
			return this._isLoading;
		},

		/**
		 * Sets the loading status for this widget.
		 * 
		 * @since 2.0.2
		 */
		setIsLoading: function(loading) {
			this._isLoading = loading;
		},

		/**
		 * Determines if the document has completed loading.
		 * 
		 * @return {Boolean} True or false, if loading and display of the document has completed.
		 */
		isLoaded: function() {
			return !this._isLoading;
		},

		/**
		 * Determines if the viewer is Applet-based.
		 * 
		 * @return {Boolean} True or false, if the viewer is Applet-based.
		 */
		isAppletViewer: function() {
			return false;
		},

		/**
		 * Indicates whether the viewer uses a browser plugin.
		 * 
		 * @return {Boolean} True or false, if the viewer is Plugin-based.
		 * @since 2.0.3
		 */
		isPluginViewer: function() {
			return this.isAppletViewer();
		},

		/**
		 * Determines if the viewer is iframe-based.
		 * 
		 * @return {Boolean} True or false, if the viewer is presented within an internal iframe
		 */
		isIframeViewer: function() {
			return false;
		},

		/**
		 * If the viewer is an iframe viewer, this call sets its src to "about:blank".
		 */
		unloadIframe: function() {
			return false;
		},

		/**
		 * Determines if the viewer contains unsaved changes.
		 * 
		 * @return {Boolean} True or false, if annotations have been added, modified, or deleted.
		 */
		isDirty: function() {
			return false;
		},

		/**
		 * Determines if the user should be prompted to save changes when isDirty is true.
		 * 
		 * @return {Boolean} True or false, if the isDirty value sould be ignored.
		 */
		ignoreDirty: function() {
			return false;
		},

		/**
		 * Determines if the item being shown in the viewer is locked.
		 * 
		 * @return {Boolean} True or false, if the viewer has locked the item or sees the item as locked.
		 */
		isLocked: function() {
			return false;
		},

		/**
		 * Determines if the viewer is active.
		 * 
		 * @return {Boolean} True or false, if the viewer is active.
		 */
		isActive: function() {
			return true;
		},

		/**
		 * Saves all annotation changes, if annotation editing is supported.
		 * 
		 * @param callback
		 *            If specified, call the callback upon completion of the save.
		 */
		saveAnnotations: function(callback) {
			// TODO: Add success/failure support to the callback, or add an errorCallback.
			return false;
		},

		/**
		 * Determines if the viewer is printing the document.
		 * 
		 * @return {Boolean} True or false, if the viewer is in the process of printing a document.
		 */
		isPrinting: function() {
			return false;
		},

		/**
		 * Returns the page number of the current page being viewed, if the viewer supports paging.
		 * 
		 * @return {number}
		 */
		getPageNumber: function() {
			return 1;
		},

		/**
		 * Return true if the caller should initate the download action instead of showing the item in this viewer.
		 * 
		 * @since 2.0.2
		 */
		delegateToDownload: function(item) {
			return false;
		},

		/**
		 * Returns an instance of the object representing the native viewer implementation of this DocViewer, if
		 * available. If not available, null is returned.
		 * 
		 * @since 2.0.3.3
		 */
		getNativeViewer: function() {
			return null;
		},

		// events

		/**
		 * If this is an iframe-based viewer, this event fires for the iframe onload event
		 */
		onLoad: function() {
		},

		/**
		 * This event fires when the document has loaded.
		 */
		onDocumentLoaded: function() {
		},

		/**
		 * Called when the viewer is unable to successfully open the document.
		 * 
		 * @param notFoundCallback
		 *            If specified, this method will be called by the ContentViewer framework, when there is no fallback
		 *            viewer available for the item being viewed.
		 */
		onFallback: function(notFoundCallback) {
		},

		/**
		 * Called when the contained viewer programmatically gives up focus.
		 * 
		 * @param movingup
		 *            Boolean, to set to true if the focus out is the result of a shift-tab, otherwise false.
		 */
		onViewerFocusOut: function(movingup) {
		},

		/**
		 * Called when the contained viewer dirty state changes, either by acquiring unsaved changes, and when changes
		 * are saved.
		 * 
		 * @param dirty
		 *            boolean indicating whether the new viewer state is dirty or not.
		 * @since 2.0.2
		 */
		onDirty: function(dirty) {
		},

		/**
		 * Called when the contained viewer updates the item.
		 * 
		 * @since 3.0.1
		 */
		onItemUpdate: function(item) {
			if (item) {
				this.item.update(item);
				if (this._item != this.item)
					this._item.update(item);
			}
		},

		/**
		 * Called when the contained viewer adds a new item.
		 * 
		 * @since 3.0.1
		 */
		onItemAdd: function(item) {
		},

		/**
		 * Determines if the Merge and Split is supported for the document.
		 * 
		 * @return {Boolean} True or false, if the Merge and Split is supported.
		 * @since 3.0.1
		 */
		isMergeSplitSupported: function() {
			return false;
		},

		/**
		 * Enable the Merge and Split mode.
		 * 
		 * @since 3.0.1
		 */
		enableMergeSplitMode: function() {
		},

		/**
		 * Disable the Merge and Split mode.
		 * 
		 * @since 3.0.1
		 */
		disableMergeSplitMode: function() {
		},

		/**
		 * Called when the Merge and Split mode failed.
		 * 
		 * @since 3.0.1
		 */
		onMergeSplitModeFailed: function() {
		}
	});

	return DocViewer;
});

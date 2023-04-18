/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/_base/array",
	"ecm/widget/viewer/DocViewer",
	"ecm/model/ContentItem",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Message",
	"ecm/widget/dialog/ErrorDialog"
], //
function(declare, lang, aspect, array, DocViewer, ContentItem, LoggerMixin, Messages, Message, ErrorDialog) {

	/**
	 * @name ecm.widget.viewer.BoxViewer
	 * @class Provides the Box Viewer widget.
	 * @augments ecm.widget.viewer.DocViewer
	 */
	return declare("ecm.widget.viewer.BoxViewer", [
		DocViewer,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer.BoxViewer.prototype */

		_supportedTypes: new Array("text/plain", "text/xml", "application/javascript", "application/json", "application/pdf", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/msword", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),

		_boxViewerClass: "crocodoc/viewer_min.js",
		_jQueryClass: "jquery-2.1.4.min.js",

		/**
		 * Determines if the viewer can open the item on the current client and mid-tier platforms.
		 * 
		 * @param item
		 *            The item to test.
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, indicating whether this viewer can
		 *         open the specified item.
		 */
		canOpenItem: function(item) {
			var methodName = "canOpenItem";
			this.logEntry(methodName);

			if (!this._isSupportedType(item.mimetype)) {
				this.logExit(methodName);
				return false;
			}

			this.logExit(methodName);
			return true;
		},

		/**
		 * Displays the item, if an item has been set on this viewer. The callback will be called on successful
		 * completion of showing the item.
		 */
		showItem: function() {
			var methodName = "showItem";
			this.logEntry(methodName);

			if (this.item) {
				var theItem = this.item;
				require("_jQueryClass", "_boxViewerClass", function(jQuery, Crocodoc) {
					var theViewer = Crocodoc.createViewer(this.containerNode, {
						// Specify where the viewer should find the assets for this doc
						url: theItem.getContentUrl()
					});
					// Load the assets and render the document!
					theViewer.load();
				});
			}

			this.logExit(methodName);
			return request;
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

		_isSupportedType: function(mimeType) {
			return array.indexOf(this._supportedTypes, mimeType.toLowerCase()) >= 0;
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
});

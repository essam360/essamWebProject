/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/has",
	"ecm/widget/viewer/IframeDocViewer",
	"ecm/model/_OutsideInSupportedMixin",
	"ecm/widget/viewer/_HasPDFMixin",
	"ecm/LoggerMixin"
], //
function(declare, has, IframeDocViewer, _OutsideInSupportedMixin, _HasPDFMixin, LoggerMixin) {

	/**
	 * @name ecm.widget.viewer.PDFDocViewer
	 * @class The PDF Conversion Viewer widget.
	 * @augments ecm.widget.viewer.IframeDocViewer
	 */
	var PDFDocViewer = declare("ecm.widget.viewer.PDFDocViewer", [
		IframeDocViewer,
		_OutsideInSupportedMixin,
		_HasPDFMixin,
		LoggerMixin
	], {

		/** @lends ecm.widget.viewer.PDFDocViewer.prototype */

		/**
		 * Determines if the viewer can open the item on the current client and mid-tier platforms. In the following
		 * cases, this method will return false:
		 * <ul>
		 * <li>There is no PDF plug-in detected and available in the browser.</li>
		 * <li>The document is an office type of document, and the mid-tier system is AIX or Linux for System z.</li>
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

			var canOpen = false;

			if (this._hasPDFPlugin()) {
				canOpen = true;
				var mimeType = item.mimetype;
				if (this._isOIType(mimeType)) {
					var os = ecm.model.desktop.appServerOs;
					if (os != null) {
						if (os.arch == "s390x") {
							this.logDebug(methodName, "zLinux Platform is not supported for " + mimeType + ".  canOpenItem will return false.");
							canOpen = false;
						}
					}
				}
			}

			this.logExit(methodName);
			return canOpen;
		},

		isPluginViewer: function() {
			return true;
		},

		isLoading: function() {
			// Include IE11 detection using trident.
			if ((has("ie") >= 10 || has("trident")) && !this._viewerIframe.document) {
				this.logDebug("isLoading", "IE 10 or later detected, and no document, so PDF must be loaded, setting loading to false.");
				this.setIsLoading(false);
			}

			return this.inherited(arguments);
		}
	});

	return PDFDocViewer;
});

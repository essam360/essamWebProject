/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/widget/viewer/IframeDocViewer",
	"ecm/model/_OutsideInSupportedMixin",
	"ecm/LoggerMixin"
], //
function(declare, IframeDocViewer, _OutsideInSupportedMixin, LoggerMixin) {

	/**
	 * @name ecm.widget.viewer.HTMLDocViewer
	 * @class The HTML Conversion Viewer widget.
	 * @augments ecm.widget.viewer.IframeDocViewer
	 */
	var HTMLDocViewer = declare("ecm.widget.viewer.HTMLDocViewer", [
		IframeDocViewer,
		_OutsideInSupportedMixin,
		LoggerMixin
	], {

		/** @lends ecm.widget.viewer.HTMLDocViewer.prototype */

		/**
		 * Determine if the viewer can open the item on the current client and mid-tier platforms. This method always
		 * returns true.
		 * 
		 * @param item
		 *            The item to test.
		 * @return {Boolean} True
		 */
		canOpenItem: function(item) {
			var methodName = "canOpenItem";
			this.logEntry(methodName);
			this.logExit(methodName);
			return true;
		}
	});

	return HTMLDocViewer;
});

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
	"dojo/sniff",
	"ecm/widget/viewer/IframeDocViewer",
	"ecm/widget/viewer/_HasAFPMixin",
	"ecm/LoggerMixin"
], //
function(declare, lang, connect, domClass, has, IframeDocViewer, _HasAFPMixin, LoggerMixin) {

	/**
	 * @name ecm.widget.viewer.BrowserViewer
	 * @class Provides an implementation for the browser viewer, that delegates all but natively browser-supported items
	 *        to download, when executing the Open action.
	 * @augments dijit._Widget
	 * @since 2.0.2
	 */
	var BrowserViewer = declare("ecm.widget.viewer.BrowserViewer", [
		IframeDocViewer,
		_HasAFPMixin,
		LoggerMixin
	], {

		/** @lends ecm.widget.viewer.BrowserViewer.prototype */

		/**
		 * Return true if opening of this item should be delegated to the download action.
		 */
		delegateToDownload: function(item) {
			if (has("ecmMobileView"))
				return false;

			var delegate = true;

			if (item.mimetype) {
				if (item.mimetype == "image/jpeg" || item.mimetype == "image/jpg" || item.mimetype == "image/gif" || item.mimetype == "image/png" || item.mimetype.indexOf("text/") == 0) {
					delegate = false;
				} else if ((item.mimetype == "application/afp" || item.mimetype == "application/vnd.ibm.modcap" || item.mimetype == "application/x-vnd.ibm.scs") && this._hasAFPPlugin()) {
					delegate = false;
				}
			}

			return delegate;
		}
	});

	return BrowserViewer;
});

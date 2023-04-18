/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang"
], function(declare, lang) {

	/**
	 * This mixin provides wrappers for DocViewer methods that provide pseudo-meta information.
	 */

	var _DocViewerMixin = declare("ecm.widget.viewer._DocViewerMixin", null, {

		/**
		 * @private
		 */
		_canOpenItem: function(viewer, item) {
			var docViewer = this._createViewer(viewer);
			var canOpenItem = docViewer.canOpenItem(item);
			delete docViewer;

			return canOpenItem;
		},

		/**
		 * @private
		 */
		_delegateToDownload: function(viewer, item) {
			var docViewer = this._createViewer(viewer);
			var delegate = docViewer.delegateToDownload(item);
			delete docViewer;

			return delegate;
		},

		_createViewer: function(viewer) {
			var cls = ecm.model.desktop.getLoadedViewerClass(viewer);
			return new cls();
		}
	});

	return _DocViewerMixin;
});

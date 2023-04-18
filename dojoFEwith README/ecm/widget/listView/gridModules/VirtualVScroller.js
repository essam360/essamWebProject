/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"gridx/modules/VirtualVScroller"
], function(declare, VirtualVScroller) {

	/**
	 * @name ecm.widget.listView.gridModules.VirtualVScroller
	 * @class This module fixes a bug in the gridx VirtualVScroller grid module.
	 * @augments gridx.modules.VirtualVScroller
	 * @since 2.0.3
	 */
	return declare(VirtualVScroller, {
		/** @lends ecm.widget.listView.gridModules.VirtualVScroller.prototype */

		/**
		 * @private Override _syncHeight.
		 */
		_syncHeight: function() {
			var t = this;
			var oldScrollTop = t.domNode.scrollTop;
			var isBottom = oldScrollTop >= t.domNode.scrollHeight - t.domNode.offsetHeight;
			if (t._lastScrollTop && isBottom) {
				t.inherited(arguments);
				t.domNode.scrollTop = oldScrollTop > 5 ? oldScrollTop - 5 : 0;
			} else {
				t.inherited(arguments);

				if (t.grid.contentList._resultSet && t.grid.contentList._resultSet.items) {

					// If we are on the last page of results and the body is scrolled to the bottom but the scroll bar isn't, adjust the scroll bar to match the body.
					var bn = t.grid.bodyNode;
					var resultSet = t.grid.contentList._resultSet;
					var maxScrollBody = bn.scrollHeight - bn.offsetHeight;
					var bodyAtBottom = maxScrollBody > 0 && bn.scrollTop >= maxScrollBody ? true : false;
					var barAtBottom = t.domNode.scrollTop >= t.domNode.scrollHeight - t.domNode.offsetHeight;
					var scrolledToLastPage = resultSet.items.length > resultSet.pageSize && !resultSet.continuationData;
					if (!barAtBottom && bodyAtBottom && scrolledToLastPage) {
						t.domNode.scrollTop = t.domNode.scrollHeight;
					}
				}
			}
		}
	});
});

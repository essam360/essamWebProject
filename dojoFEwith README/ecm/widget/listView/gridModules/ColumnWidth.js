/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/query",
	"gridx/modules/ColumnWidth"
], function(declare, query, ColumnWidth) {

	/**
	 * @name ecm.widget.listView.gridModules.ColumnWidth
	 * @class This module supports a gridx within a gridx. The column ids of the subgrid should be different from the
	 *        column ids in the main grid.
	 * @augments gridx.modules.ColumnWidth
	 * @since 2.0.2
	 */

	return declare(ColumnWidth, {
		/** @lends ecm.widget.listView.gridModules.ColumnWidth.prototype */

		/**
		 * @private Override _onUpdateWidth. If column not found, ignore.
		 */
		_onUpdateWidth: function() {
			var t = this, g = t.grid;
			if (g.autoWidth) {
				t._adaptWidth();
			} else {
				var noHScroller = g.hScrollerNode.style.display == 'none', autoResize = t.autoResize;
				t._adaptWidth(!noHScroller, 1); //1 as true
				if (!autoResize && noHScroller) {
					query('.gridxCell', g.bodyNode).forEach(function(cellNode) {
						var col = g._columnsById[cellNode.getAttribute('colId')];
						if (col) {
							var declaredWidth = col.declaredWidth;
							if (autoResize || !declaredWidth || declaredWidth == 'auto' || (/%$/).test(declaredWidth)) {
								var s = cellNode.style, w = col.width;
								s.width = w;
								s.minWidth = w;
								s.maxWidth = w;
							}
						}
					});
				}
				t.onUpdate();
			}
		}
	});
});

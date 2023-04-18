/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/has",
	"gridx/modules/SingleSort"
], function(declare, has, SingleSort) {

	/**
	 * @name ecm.widget.listView.gridModules.SingleSort
	 * @class This module enhances the gridx SingleSort module by only retrieving the first page of data when a column is sorted on the server.
	 * @augments gridx.modules.SingleSort
	 * @since 2.0.2
	 */

	return declare(SingleSort, {
		/** @lends ecm.widget.listView.gridModules.SingleSort.prototype */

		_initHeader: function(colId){
			var g = this.grid,
				headerCell = g.header.getHeaderNode(colId),
				col = g.column(colId, 1),
				sb = [];
			if(col.isSortable()){
				if(has("highcontrast")){ // IE11 with JAWS reads these up & down chars (which is a bug in JAWS)
					sb.push("<div role='presentation' class='gridxArrowButtonNode'>",
							"<div class='gridxArrowButtonCharAsc'>&#9652;</div>",
							"<div class='gridxArrowButtonCharDesc'>&#9662;</div>",
						"</div>");
				} else {
					sb.push("<div role='presentation' class='gridxArrowButtonNode'>",
							"<div class='gridxArrowButtonCharAsc'></div>",
							"<div class='gridxArrowButtonCharDesc'></div>",
						"</div>");
				}
				headerCell.setAttribute('aria-sort', 'none');
			}
			sb.push("<div class='gridxSortNode'>", col.name(), "</div>");
			headerCell.innerHTML = sb.join('');
		},
		
		/**
		 * @private Override _onClick to scroll to the top of the grid before sorting and resets the render count.
		 */
		_onClick: function(e) {
			// for Clicking on the divider for resizing a column without moving the mouse (no resize is done), causes a column sort
			// which should not be allowed
			if (this.grid._eventFlags.onHeaderCellMouseDown !== "columnResizer") {
				var col = this.grid._columnsById[e.columnId];
				if (col && (col.sortable || col.sortable === undefined)) {
					this.grid.vScroller.scrollToRow(0);
					this.grid.body.renderCount = 1;
					this.sort(e.columnId, this._sortId != e.columnId ? 0 : !this._sortDescend);
				}
			}
		}
	});
});

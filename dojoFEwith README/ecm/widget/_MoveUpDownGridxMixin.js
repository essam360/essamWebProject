/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/window",
	"../LoggerMixin"
], function(declare, array, win, LoggerMixin) {
	/**
	 * @name ecm.widget._MoveUpDownGridxMixin
	 * @class Provides a base class for a widget that is used to move items up or down in a gridx.
	 * @public
	 * @since 2.0.2
	 */
	return declare("ecm.widget._MoveUpDownGridxMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget._MoveUpDownGridxMixin.prototype */

		/**
		 * @private Moves the selected rows up. The gridx is required to use the move/Row module.
		 * @param grid
		 *            Instance of ${gridx/Grid}.
		 */
		_moveUpSelectedRows: function(grid) {
			var rowIds = grid.select.row.getSelected();
			if (rowIds) {
				var prevIndex = -1;
				for ( var i = 0; i < rowIds.length; i++) {
					var id = rowIds[i];
					var index = grid.model.idToIndex(id);
					var newIndex = index - 1;
					if (index != 0 && prevIndex != newIndex) {
						grid.move.row.move([
							index
						], newIndex);
						prevIndex = newIndex;
					} else {
						prevIndex = index;
					}
				}
				if (grid.vScroller && grid.vScroller.scrollToRow) {
					grid.vScroller.scrollToRow(grid.row(rowIds[0]).visualIndex(), true);
				}
			}
		},

		/**
		 * @private Move the selected rows down. The gridx is required to use the move/Row module.
		 * @param grid
		 *            Instance of ${gridx/Grid}.
		 */
		_moveDownSelectedRows: function(grid) {
			var rowIds = grid.select.row.getSelected();
			if (rowIds) {
				var lastIndex = grid.rowCount() - 1;
				var prevIndex = -1;
				for ( var i = rowIds.length - 1; i >= 0; i--) {
					var id = rowIds[i];
					var index = grid.model.idToIndex(id);
					var newIndex = index + 2;
					if (index != lastIndex && prevIndex + 1 != newIndex) {
						grid.move.row.move([
							index
						], newIndex);
						prevIndex = newIndex;
					} else {
						prevIndex = index;
					}
				}
				if (grid.vScroller && grid.vScroller.scrollToRow) {
					grid.vScroller.scrollToRow(grid.row(rowIds[0]).visualIndex(), true);
				}
			}
		},

		/**
		 * @private Boolean indicating if there are rows to move up.
		 * @param grid
		 *            Instance of ${gridx/Grid}.
		 */
		_hasRowsToMoveUp: function(grid) {
			var hasRowsToMoveUp = false;
			var rowIds = grid.select.row.getSelected();
			if (rowIds.length > 0) {
				var prevIndex = -1;
				for ( var i = 0; i < rowIds.length; i++) {
					var index = grid.model.idToIndex(rowIds[i]);
					if (prevIndex + 1 != index) {
						hasRowsToMoveUp = true;
						break;
					}
					prevIndex = index;
				}
			}
			return hasRowsToMoveUp;
		},

		/**
		 * @private Boolean indicating if there are rows to move down.
		 * @param grid
		 *            Instance of ${gridx/Grid}.
		 */
		_hasRowsToMoveDown: function(grid) {
			var hasRowsToMoveDown = false;
			var rowIds = grid.select.row.getSelected();
			if (rowIds.length > 0) {
				var prevIndex = grid.rowCount();
				for ( var i = rowIds.length - 1; i >= 0; i--) {
					var index = grid.model.idToIndex(rowIds[i]);
					if (prevIndex - 1 != index) {
						hasRowsToMoveDown = true;
						break;
					}
					prevIndex = index;
				}
			}
			return hasRowsToMoveDown;
		},

		/**
		 * Returns the data in the grid.
		 * 
		 * @param grid
		 *            Instance of ${gridx/Grid}.
		 * @return Array of the data in the grid.
		 */
		getData: function(grid) {
			var items = grid.model.store.query({}, {
				"sort": [
					{
						attribute: "order",
						descending: false
					}
				]
			});
			return items;
		}
	});
});

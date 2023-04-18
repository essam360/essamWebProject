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
	 * @name ecm.widget._MoveUpDownMixin
	 * @class Provides a base class for a widget that is used to move items up or down in a list.
	 * @public
	 */
	return declare("ecm.widget._MoveUpDownMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget._MoveUpDownMixin.prototype */

		/**
		 * @private Moves the selected rows up.
		 */
		_moveUpSelectedRows: function(grid) {
			var selected = grid.selection.getSelected();
			if (selected.length > 0) {
				var firstSelectedIndex = grid.getItemIndex(selected[0]);
				var lastSelectedIndex = grid.getItemIndex(selected[selected.length - 1]);
				var selectedArrayIndex = [];
				var prevIndex = -1;
				for ( var i = 0; i < selected.length; i++) {
					var selectedIndex = grid.getItemIndex(selected[i]);

					var newIndex = selectedIndex - 1;
					if (selectedIndex != 0 && prevIndex != newIndex) {
						this._moveItem(grid, selectedIndex, newIndex);
						selectedArrayIndex.push(newIndex);
						prevIndex = newIndex;
					} else {
						selectedArrayIndex.push(selectedIndex);
						prevIndex = selectedIndex;
					}
				}
				grid.updateRows(firstSelectedIndex - 1, (lastSelectedIndex - (firstSelectedIndex - 1) + 1));

				grid.selection.clear();
				for ( var i = 0; i < selectedArrayIndex.length; i++) {
					if (i == 0) {
						var rowNode = grid.getRowNode(selectedArrayIndex[i]);
						if (rowNode) {
							win.scrollIntoView(rowNode);
						}
					}
					grid.selection.addToSelection(selectedArrayIndex[i]);
				}
			}
		},

		/**
		 * @private Move the selected rows down.
		 */
		_moveDownSelectedRows: function(grid) {
			var selected = grid.selection.getSelected();
			if (selected.length > 0) {
				var lastIndex = grid.get('rowCount') - 1;
				var firstSelectedIndex = grid.getItemIndex(selected[0]);
				var lastSelectedIndex = grid.getItemIndex(selected[selected.length - 1]);
				var selectedArrayIndex = [];
				var prevIndex = -1;
				for ( var i = selected.length - 1; i >= 0; i--) {
					var selectedIndex = grid.getItemIndex(selected[i]);

					var newIndex = selectedIndex + 1;
					if (selectedIndex != lastIndex && prevIndex != newIndex) {
						this._moveItem(grid, selectedIndex, newIndex);
						selectedArrayIndex.push(newIndex);
						prevIndex = newIndex;
					} else {
						selectedArrayIndex.push(selectedIndex);
						prevIndex = selectedIndex;
					}
				}
				grid.updateRows(firstSelectedIndex, ((lastSelectedIndex + 1) - firstSelectedIndex + 1));

				grid.selection.clear();
				for ( var i = 0; i < selectedArrayIndex.length; i++) {
					grid.selection.addToSelection(selectedArrayIndex[i]);
					if (i == 0) {
						var rowNode = grid.getRowNode(selectedArrayIndex[i]);
						if (rowNode) {
							win.scrollIntoView(rowNode);
						}
					}
				}
			}
		},

		/**
		 * @private Boolean indicating if there are rows to move up.
		 */
		_hasRowsToMoveUp: function(grid) {
			var hasRowsToMoveUp = false;
			var selected = grid.selection.getSelected();
			if (selected.length > 0) {
				var prevIndex = -1;
				for ( var i = 0; i < selected.length; i++) {
					var selectedIndex = grid.getItemIndex(selected[i]);
					if (prevIndex + 1 != selectedIndex) {
						hasRowsToMoveUp = true;
						break;
					}
					prevIndex = selectedIndex;
				}
			}
			return hasRowsToMoveUp;
		},

		/**
		 * @private Boolean indicating if there are rows to move down.
		 */
		_hasRowsToMoveDown: function(grid) {
			var hasRowsToMoveDown = false;
			var selected = grid.selection.getSelected();
			if (selected.length > 0) {
				var prevIndex = grid.get('rowCount');
				for ( var i = selected.length - 1; i >= 0; i--) {
					var selectedIndex = grid.getItemIndex(selected[i]);
					if (prevIndex - 1 != selectedIndex) {
						hasRowsToMoveDown = true;
						break;
					}
					prevIndex = selectedIndex;
				}
			}
			return hasRowsToMoveDown;
		},

		/**
		 * @private caller is responsible to call updateRows to reflect the move
		 */
		_moveItem: function(grid, from, to) {
			if (to === from) {
				return;
			}
			var item = grid._by_idx[from];
			if (to < from) { // up
				for ( var i = from; i > to; i--) {
					grid._by_idx[i] = grid._by_idx[i - 1];
				}
			} else { // down
				for ( var i = from; i < to; i++) {
					grid._by_idx[i] = grid._by_idx[i + 1];
				}
			}
			grid._by_idx[to] = item;

			// Also update the store array since we are now using the store array to get the data items
			// after all user modifications are finished.
			var item = grid.store._arrayOfTopLevelItems[from];
			if (to < from) { // up
				for ( var i = from; i > to; i--) {
					grid.store._arrayOfTopLevelItems[i] = grid.store._arrayOfTopLevelItems[i - 1];
				}
			} else { // down
				for ( var i = from; i < to; i++) {
					grid.store._arrayOfTopLevelItems[i] = grid.store._arrayOfTopLevelItems[i + 1];
				}
			}
			grid.store._arrayOfTopLevelItems[to] = item;
		},

		/**
		 * Returns the data in the grid.
		 * 
		 * @param grid
		 *            The grid.
		 * @return Array of the data in the grid.
		 */
		getData: function(grid) {
			var items = [];
			// Access the store array list cause the grid array contains only rendered items. Since the 
			// grid pages at 25 items, if user has not scrolled, the grid array will only contain the current
			// page of items. The store array will have all items.
			var gridArray = grid.store._arrayOfTopLevelItems;
			for ( var i = 0; i < gridArray.length; i++) {
				var item = gridArray[i];
				if (item) {
					items.push(this._getItemData(grid, item));
				}
			}
			return items;
		},

		/**
		 * @private Returns the grid item attributes.
		 */
		_getItemData: function(grid, item) {
			var data = {};
			array.forEach(grid.store.getAttributes(item), function(attribute) {
				var values = item[attribute];
				if (!values || values.length === 0) {
					return;
				}
				if (values.length === 1) {
					var value = values[0];
					if (grid.store.isItem(value)) {
						value = this._getItemData(value);
					}
					data[attribute] = value;
				} else {
					data[attribute] = array.map(values, function(value) {
						if (grid.store.isItem(value)) {
							value = this._getItemData(value);
						}
						return value;
					}, this);
				}
			}, this);
			return data;
		}
	});
});

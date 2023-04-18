/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/query",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/connect",
	"dojo/dom-geometry",
	"dijit/registry",
	"gridx/modules/dnd/Row",
	"dojo/dnd/Manager"
], function(query, declare, lang, sniff, connect, domGeo, registry, DndRow, DndManager) {

	/**
	 * @name ecm.widget.listView.gridModules.DndRow
	 * @class This module extends gridx/modules/dnd/Row. Adding the capability of canDrop when hovering over a row.
	 *        Override canDrop to determine if the sourceItems can or cannot be moved/copied to the targetItem. Listen
	 *        to onDrop and provide the logic for dropping.
	 * @augments gridx.modules.dnd.Row
	 */

	return declare(DndRow, {
		/** @lends ecm.widget.listView.gridModules.DndRow.prototype */

		/**
		 * Tree that the gridx could dnd to - needed to fix bug in FF < 15
		 */
		tree: null,

		preload: function() {
			var t = this, g = t.grid;
			t.batchConnect([
				g.bodyNode,
				'onmouseover',
				'_onRowMouseOver'
			], [
				g.emptyNode,
				'onmouseover',
				'_onRowMouseOver'
			], [
				DndManager.manager(),
				'_setCopyStatus',
				'_setCopyStatus'
			], [
				DndManager.manager(),
				'overSource',
				'_overSource'
			]);
			t.inherited(arguments);
			if (t.tree) {
				t.setTree(t.tree);
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this._cleanUp();
			this.inherited(arguments);
		},

		/**
		 * Returns boolean indicating if the drag should start in "copy" mode. Can be used by other modules to determine
		 * dnd support.
		 */
		isDragCopy: function() {
			return false;
		},

		/**
		 * Returns boolean indicating if dragging is allowed. Can be used by other modules to determine dnd support.
		 */
		isDraggingAllowed: function() {
			return true;
		},

		/**
		 * @private Cleans up the connects created by setTree when FF < 15.
		 */
		_cleanUp: function() {
			if (this._conn) {
				connect.disconnect(this._conn);
			}
			if (this._conn2) {
				connect.disconnect(this._conn2);
			}
		},

		/**
		 * Set the tree that the user can drop grid row(s) onto. Needed to fix a bug in FF < 15. Allows the grid to drop
		 * row(s) on the tree nodes of the specified tree.
		 * 
		 * @param tree
		 *            The tree that the user can drop grid row(s) on.
		 */
		setTree: function(tree) {
			if (sniff('ff') < 15) {
				this._cleanUp();
				if (tree) {
					var t = this, g = t.grid, treeDndController = tree.tree.dndController, treeDomNode = tree.tree.domNode;
					//Force trigger onmouseover
					t._conn = g.dnd._dnd._fixFF(treeDndController);
					//Force trigger onmousemove
					t._conn2 = tree.connect(document, 'onmousemove', function(e) {
						var pos = domGeo.position(treeDomNode);
						//Limit the event range within the tree
						if (e.clientX > pos.x && e.clientX < pos.x + pos.w && e.clientY > pos.y && e.clientY < pos.y + pos.h) {
							//Find the tree row we are hovering
							query('.dijitTreeRow', treeDomNode).some(function(treeRow) {
								var treeRowPos = domGeo.position(treeRow);
								if (e.clientX > treeRowPos.x && e.clientX < treeRowPos.x + treeRowPos.w && e.clientY > treeRowPos.y && e.clientY < treeRowPos.y + treeRowPos.h) {
									//Get and assign the tree node widget
									treeDndController.current = registry.byNode(treeRow.parentNode);
									return true;
								}
							});
							treeDndController.onMouseMove(e);
						}
					});
				}
			}
		},

		/**
		 * Optionally override in your application. Can use this to check if the user has authorization to drop.
		 * 
		 * @param sourceItems
		 *            The source items.
		 * @param The
		 *            target item dropping on.
		 * @param isCopy
		 *            Boolean indicating if this is a copy or a move.
		 */
		canDrop: function(sourceItems, targetItem, isCopy) {
			return true;
		},

		/**
		 * Optionally listen to this in your application. This can handle a drop event from an internal (within the
		 * application) source.
		 * 
		 * @param sourceItems
		 *            The source items.
		 * @param The
		 *            target item dropping on.
		 * @param isCopy
		 *            Boolean indicating if this is a copy or a move.
		 */
		onDrop: function(sourceItems, targetItem, isCopy) {
		},

		//Private----------------------------------------------------------
		//

		/**
		 * @private Called when a treeNode is dropped on the grid.
		 */
		_onDropExternalFromTreeToGrid: function(source, nodes, copy) {
			var t = this, g = t.grid;
			var targetItem = t._getItemUsingRowIndex(t._currentRowIndex);
			t.onDrop(t._getSourceItems(), targetItem, copy);
		},

		/**
		 * @private Called when a grid row is dropped on the same grid.
		 */
		_onDropInternal: function(nodes, copy) {
			var t = this, g = t.grid;
			var targetItem = t._getItemUsingRowIndex(t._currentRowIndex);
			t.onDrop(t._getSourceItems(), targetItem, copy);
		},

		/**
		 * @private Called when the user selects/de-selects the control key to change to/from move & copy - check if
		 *          user can drop on this row.
		 */
		_setCopyStatus: function(copy) {
			var t = this, g = t.grid, m = DndManager.manager();
			if (m.target && m.target.grid && m.target.grid.id == g.id) {
				var targetItem = t._getItemUsingRowIndex(t._currentRowIndex);
				t._updateAvator(t._getSourceItems(), targetItem);
			}
		},

		/**
		 * @private Force an update to the avatar when dragging over the source due to not always receiving an
		 *          onmouseover event when drag hovering over the grid white space.
		 */
		_overSource: function(source) {
			var t = this, g = t.grid;
			if (g.dnd._dnd._source == source && t._isDragging()) {
				source.onDropExternal = lang.hitch(t, t._onDropExternalFromTreeToGrid);
				t._updateAvator(t._getSourceItems(), null);
			}
		},

		/**
		 * @private When hover over a row, check if can drop on this row.
		 */
		_onRowMouseOver: function(evt) {
			var t = this, g = t.grid;
			if (t._isDragging()) {
				// These lines allow the avatar to update via m.canDrop method when dragging from tree to grid
				var dndSource = g.dnd._dnd._source;
				dndSource.targetState = "";
				DndManager.manager().overSource(dndSource);
				// when drop from tree to grid, calls _onDropExternalFromTreeToGrid
				dndSource.onDropExternal = lang.hitch(t, t._onDropExternalFromTreeToGrid);

				t._currentRowIndex = evt.rowIndex;

				var targetItem = t._getItemUsingRowIndex(evt.rowIndex);
				t._updateAvator(t._getSourceItems(), targetItem);
			}
			return true;
		},

		/**
		 * @private Check if can drop on this target & then update the avatar.
		 */
		_updateAvator: function(sourceItems, targetItem) {
			var t = this, g = t.grid, m = DndManager.manager();
			var canDrop = true;
			if (t._isTargetItemInSourceList(sourceItems, targetItem)) {
				canDrop = false;
			} else {
				canDrop = t.canDrop(sourceItems, targetItem, m.copy);
			}
			setTimeout(function() {
				m.canDrop(canDrop); // updates the avator
			}, 10); // set on timer due to dojo.dnd.Source::onDndSourceOver calling m.canDrop & always setting canDrop to true
		},

		/**
		 * @private Returns null if not dragging.
		 */
		_isDragging: function() {
			return DndManager.manager().source;
		},

		/**
		 * @private Returns true if the target item is in the source list of items.
		 */
		_isTargetItemInSourceList: function(sourceItems, targetItem) {
			if (sourceItems && targetItem) {
				for ( var i in sourceItems) {
					if (sourceItems[i] == targetItem) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * @private Returns the source items.
		 */
		_getSourceItems: function() {
			var t = this, g = t.grid;
			var array = [];
			var dndSource = DndManager.manager().source;
			if (dndSource.tree) { // source is tree
				var treeNodes = DndManager.manager().source.getSelectedTreeNodes();
				array.push(treeNodes[0].item);

			} else if (dndSource.grid) { // source is a grid - could be same grid or another grid
				var ids = dndSource.grid.select.row.getSelected(); //dndSource.grid.dnd.row._selectedRowIds;
				for ( var i in ids) {
					var row = dndSource.grid.row(ids[i]);
					if (row) {
						array.push(row.item());
					}
				}

			} else { // source is this grid
				var ids = t._selectedRowIds;
				for ( var i in ids) {
					var item = t._getItemUsingRowIndex(ids[i]);
					if (item) {
						array.push(item());
					}
				}
			}
			return array;
		},

		/**
		 * @private Returns the item at the row index.
		 */
		_getItemUsingRowIndex: function(rowIndex) {
			var t = this, g = t.grid;
			if (rowIndex != undefined) {
				var rowId = g.model.indexToId(rowIndex);
				if (rowId) {
					var row = g.row(rowId);
					if (row) {
						return row.item();
					}
				}
			}
			return null;
		}

	});
});

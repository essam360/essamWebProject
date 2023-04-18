/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"./DndRow",
	"ecm/model/Dnd"
], function(declare, lang, connect, DndRow, Dnd) {

	/**
	 * @name ecm.widget.listView.gridModules.DndRowMoveCopy
	 * @class This module provides dnd capability for the row, checking for security when hovering over a row, and
	 *        providing move or copy action when dropping. This module extends ./DndRow. Adding the capability of
	 *        checking for security when hovering over a row & providing move or copy logic when drop.
	 * @augments ecm.widget.listView.gridModules.DndRow
	 */

	return declare([
		DndRow
	], {
		/** @lends ecm.widget.listView.gridModules.DndRowMoveCopy.prototype */

		preload: function() {
			var t = this, g = t.grid;
			t.inherited(arguments);
			t._dndModel = new Dnd();

			t.connect(g, "onModulesLoaded", lang.hitch(t, function() {
				var viewFilmstrip = g.contentList.getContentListModule("viewFilmStrip");
				if (viewFilmstrip) {
					t.connect(viewFilmstrip, "onCreateFilmstrip", lang.hitch(t, function(filmstrip) {
						t._connectFilmstripDrop = t.connect(filmstrip, "onDropItems", "onDrop");
						filmstrip.canDropItems = lang.hitch(t, "canDrop");
					}));
					t.connect(viewFilmstrip, "onDestroyFilmstrip", lang.hitch(t, function() {
						connect.disconnect(this._connectFilmstripDrop);
					}));
				}
			}));
		},

		/**
		 * Determines if the document or documents can be dragged to the specified target.
		 * 
		 * @param sourceItems
		 *            Array of items dragged.
		 * @param targetItem
		 *            Target item for the items.
		 * @param isCopy
		 *            Boolean flag indicating if the source item is a copy of the target.
		 * @return Returns true if the document(s) can be dragged and false if they cannot.
		 */
		canDrop: function(sourceItems, targetItem, isCopy) {
			var t = this;
			// If on white space below the grid, then the input targetItem is null.  Use the resultSet's parent as the targetItem.
			if (!targetItem && t.grid && t.grid.contentList && t.grid.contentList.getResultSet()) {
				targetItem = t.grid.contentList.getResultSet().parentFolder;
			}
			// if dropped on itself, ignore
			if (sourceItems.length == 1 && targetItem.id == sourceItems[0].id) {
				return false;
			}
			// If on a document, then use the document's parent as the targetItem.
			if (targetItem && (!targetItem.isFolder || !targetItem.isFolder())) {
				targetItem = targetItem.parentFolder ? targetItem.parentFolder : targetItem.parent;
			}
			return t._dndModel.canDrop(sourceItems, targetItem, isCopy);
		},

		/**
		 * Handles a drop event from an internal (within the application) source.
		 * 
		 * @param sourceItems
		 *            Array of items dragged.
		 * @param targetItem
		 *            Target item for the items.
		 * @param isCopy
		 *            Boolean flag indicating if the source item is a copy of the target.
		 */
		onDrop: function(sourceItems, targetItem, isCopy) {
			var t = this;
			// If on white space below the grid, then the input targetItem is null.  Use the resultSet's parent as the targetItem.
			if (!targetItem && t.grid && t.grid.contentList && t.grid.contentList.getResultSet()) {
				targetItem = t.grid.contentList.getResultSet().parentFolder;
			}
			// If dropped on a document, then use the document's parent as the targetItem.
			if (targetItem && (!targetItem.isFolder || !targetItem.isFolder())) {
				targetItem = targetItem.parentFolder ? targetItem.parentFolder : targetItem.parent;
			}
			if (targetItem) {
				if (isCopy) {
					t._dndModel.dropCopy(sourceItems, targetItem);
				} else {
					t._dndModel.dropMove(sourceItems, targetItem);
				}
			}
		}

	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"gridx/core/_Module",
	"dojo/_base/query",
	"dojo/dom-class",
	"dojo/dnd/autoscroll",
	"ecm/widget/_DroppedFilesAddDocMixin",
	"ecm/LoggerMixin"
], //
function(declare, connect, lang, event, sniff, _Module, query, domClass, dndAutoScroll, _DroppedFilesAddDocMixin, LoggerMixin) {

	/**
	 * @name ecm.widget.listView.gridModules.DndFromDesktop
	 * @class This module controls the drag-and-drop from the desktop to the grid. The onDrop method is called when
	 *        files from the desktop are dropped on a row in the grid. canDropOnRow method is called when hover over a
	 *        row. Allows the application to specify if the row can or cannot be dropped on. For example, this can be
	 *        used to determine if the user has the authority to drop files on this row.
	 * @augments gridx.core._Module
	 */

	return declare("ecm.widget.listView.gridModules.DndFromDesktop", [
	                _Module,
	                _DroppedFilesAddDocMixin,
	                LoggerMixin
	                ], {
		/** @lends ecm.widget.listView.gridModules.DndFromDesktop.prototype */

		name: 'dndFromDesktop',

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				dndFromDesktop: this
			};
		},

		/**
		 * Listens to grid events.
		 */
		preload: function(args) {
			var t = this, g = t.grid;
			var ie = sniff('ie');
			if (!ie || ie > 9) { // ie > 9 and non-ie browsers support HTML5 drag and drop
				t.batchConnect([
					g.domNode,
					'dragenter',
					'onExternalDragOver'
				], [
					g.domNode,
					'dragover',
					'onExternalDragOver'
				], [
					g.domNode,
					'dragexit',
					'onExternalDragExit'
				], [
					g.domNode,
					'dragleave',
					'onExternalDragExit'
				], [
					g.domNode,
					'drop',
					'onExternalDrop'
				]);
			}
		},

		/**
		 * Optionally override in your application. Return true if can drop on this row.
		 * 
		 * @param row
		 *            The row in the grid to drop on.
		 * @param evt
		 *            The event.
		 */
		canDropOnRow: function(row, evt) {
			return true;
		},

		/**
		 * Fired when file(s) from the desktop are dropped on a row in the grid.
		 * 
		 * @param row
		 *            The row in the grid to drop on.
		 * @param files
		 *            The file(s) dragged from the desktop.
		 * @param evt
		 *            The event.
		 */
		onDrop: function(row, files, evt) {
		},

		/**
		 * On hover over the row, shows row over indicator.
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDragOver: function(evt) {
			var t = this, g = t.grid;
			event.stop(evt);
			dndAutoScroll.autoScrollNodes(evt);

			// Show row over class
			var rowNode = t._getExternalDropTargetRowNode(evt);
			if (rowNode && rowNode.getAttribute) {
				var rowId = rowNode.getAttribute('rowid');
				if (rowId) {
					evt.rowId = rowId;
					t._removeRowOver();
					domClass.add(rowNode, "gridxRowOver"); //g.onRowMouseOver(evt); // This causes hanging of the browser when dnd internal link
				}
			}

			if (!rowNode && t._isHeader(evt)) { // cannot drop on the grid header
				evt.dataTransfer.dropEffect = "none";
			} else if (t.canDropOnRow(t._getExternalDropTargetRow(evt), evt)) { // Callback to see if the file(s) can be dropped on this row
				evt.dataTransfer.dropEffect = "copy";
			} else {
				evt.dataTransfer.dropEffect = "none";
			}

			if (evt["returnValue"]) {
				evt.returnValue = false;
			}
			return false;
		},

		/**
		 * Remove row over indicator when exit the row.
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDragExit: function(evt) {
			event.stop(evt);
			this._removeRowOver(evt);
			return false;
		},
		

		/**
		 * Called when a file or files are dropped on the row. Calls onDrop with the row, files, and event.
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDrop: function(evt) {
			var t = this, g = t.grid;
			event.stop(evt);
			if( evt.dataTransfer && evt.dataTransfer.items ){
				this._files = [];
				this._getFiles(evt.dataTransfer.items, lang.hitch(this, function(){
					if( this._files && this._files.length > 0 ){
						t.onDrop(t._getExternalDropTargetRow(evt), this._files, evt, true);
					}else{
						this.logDebug("onExternalDrop", "no file found for DnD.");
					}
				}));
			}else{
				t.onDrop(t._getExternalDropTargetRow(evt), evt.dataTransfer.files, evt);
			}
			
			return false;
		},

		//Private----------------------------------------------------------
		//
		/**
		 * @private
		 */
		_isHeader: function(evt) {
			return evt.target && domClass.contains(evt.target, "gridx");
		},

		/**
		 * @private
		 */
		_removeRowOver: function() {
			var t = this, g = t.grid;
			var n = query('.gridxRowOver', g.body.domNode)[0];
			if (n) {
				domClass.remove(n, 'gridxRowOver');
			}
		},

		/**
		 * @private
		 */
		_getExternalDropTargetRow: function(evt) {
			var t = this, g = t.grid;
			var rowNode = t._getExternalDropTargetRowNode(evt);
			if (rowNode) {
				return g.row(rowNode.getAttribute('rowid'));
			}
			return null;
		},

		/**
		 * @private
		 */
		_getExternalDropTargetRowNode: function(evt) {
			var node = evt.target;
			while (true) {
				if (domClass.contains(node, "gridxRow")) {
					return node;
				} else {
					node = node.parentNode;
					if (!node) {
						return null;
					}
				}
			}
		}
	});
});

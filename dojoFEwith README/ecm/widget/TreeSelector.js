/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/tree/_dndSelector"
], //
function(declare, _dndSelector) {
	/**
	 * @name ecm.widget.TreeSelector
	 * @class Provides a widget that contains a tree that is used to navigate the folders in a repository. This widget
	 *        allows users to select multiple folders, but it does not allow them to select nodes with no item value.
	 * @augments dijit.tree._dndSelector
	 */
	return declare("ecm.widget.TreeSelector", [
		_dndSelector
	], {
		/** @lends ecm.widget.TreeSelector.prototype */

		/**
		 * Add or remove the given node from selection, responding to a user action such as a click or keypress.
		 */
		userSelect: function(node, multi, range) {
			// multi: Boolean
			//		Indicates whether this is meant to be a multi-select action (e.g. ctrl-click)
			// range: Boolean
			//		Indicates whether this is meant to be a ranged action (e.g. shift-click)
			// tags:
			//		protected

			// copied multi-select logic from dijit.tree._dndSelector & added calls to new method _isSelectable
			if (range && this.anchor) {
				var cr = this._compareNodes(this.anchor.rowNode, node.rowNode), begin, end, anchor = this.anchor;

				if (cr < 0) { //current is after anchor
					begin = anchor;
					end = node;
				} else { //current is before anchor
					begin = node;
					end = anchor;
				}
				var nodes = [];
				//add everything betweeen begin and end inclusively
				while (begin != end) {
					if (this._isSelectable(begin)) {
						nodes.push(begin);
					}
					begin = this.tree._getNextNode(begin);
				}
				if (this._isSelectable(end)) {
					nodes.push(end);
				}

				this.setSelection(nodes);
			} else {
				if (this.selection[node.id] && multi) {
					this.removeTreeNode(node);
				} else if (multi) {
					if (this._isSelectable(node)) {
						this.addTreeNode(node, true);
					}
				} else if (this._isSelectable(node)) {
					this.setSelection([
						node
					]);
					this.anchor = node;
				}
			}
		},

		/**
		 * Returns boolean indicating the node is selectable. If it doesn't have a value, then it is not selectable.
		 */
		_isSelectable: function(node) {
			return node.item.value;
		}
	});
});

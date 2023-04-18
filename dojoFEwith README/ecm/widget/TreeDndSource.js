/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/registry",
	"dijit/tree/dndSource"
], function(declare, registry, dndSource) {
	/**
	 * @name ecm.widget.TreeDndSource
	 * @class Provides a widget that is used to browse the folders in a repository. This widget extends the Dojo
	 *        <code>dijit.tree.dndSource</code> class to prevent users from using the drag-and-drop feature to move
	 *        the More node. (The More node is shown in a tree when more results exist. The additional results are
	 *        displayed with the user clicks this node.)
	 * @augments dijit.tree.dndSource
	 */
	return declare("ecm.widget.TreeDndSource", [
		dndSource
	], {
		/** @lends ecm.widget.TreeDndSource.prototype */

		/**
		 * Event fired when mouse move over the tree. Used to disable dragging of certain nodes.
		 * 
		 * @param e
		 *            The event.
		 */
		onMouseMove: function(e) {
			// Disable Dnd for some cases (folder selector).
			if (this.tree.enableDnd != null && this.tree.enableDnd == false) {
				return;
			}
			if (!this.isDragging) {
				var selectedTreeNodes = this.getSelectedTreeNodes();
				for ( var index in selectedTreeNodes) {
					var node = selectedTreeNodes[index];
					// do not allow dragging the "More" special node
					if (node.item.continuationData) {
						return;
					}
					// do not allow dragging the root
					if (this.tree.rootNode == node) {
						return;
					}
					// do not allow dragging a favorite
					if (node.item.isInstanceOf && node.item.isInstanceOf(ecm.model.Favorite)) {
						return;
					}
				}
			}
			this.inherited(arguments);
		},

		/**
		 * Event fired when mouse down on the tree.
		 * 
		 * @param e
		 *            The event.
		 */
		onMouseDown: function(e) {
			var w = registry.getEnclosingWidget(e.target);
			if (!w || !w.isTreeNode) {
				return;
			}
			this.inherited(arguments);
		}
	});
});

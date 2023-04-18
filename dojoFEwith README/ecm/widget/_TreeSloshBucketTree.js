/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/Tree"
], function(declare, Tree) {
	/**
	 * @name ecm.widget._TreeSloshBucketTree
	 * @public
	 */
	return declare("ecm.widget._TreeSloshBucketTree", [
		Tree
	], {
		/** @lends ecm.widget._TreeSloshBucketTree.prototype */

		_getNextNode: function(node) {
			var nNode = this.inherited(arguments);
			if (nNode && nNode.domNode.style.display == "none") {
				nNode = this._getNextNode(nNode);
			}
			return nNode;
		},

		_createTreeNode: function(args) {
			var treeNode = this.inherited(arguments);
			treeNode.getPreviousSibling = function() {
				var pNode = this._getSibling("previous");
				if (pNode && pNode.domNode.style.display == "none") {
					pNode = pNode.getPreviousSibling();
				}
				return pNode;
			};
			return treeNode;
		}
	});
});

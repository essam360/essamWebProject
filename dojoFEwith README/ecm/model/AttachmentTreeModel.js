/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"./FolderTreeModel", //
	"../LoggerMixin", //
	"../MessagesMixin"
], //
function(declare, FolderTreeModel, LoggerMixin, MessagesMixin) {

	/**
	 * @name ecm.model.AttachmentTreeModel
	 * @class Represents a tree that is used to display the folders and documents that are attached to a work item. If
	 *        the attachment is a folder, the tree provides the nested folder information.
	 *        <p>
	 *        This class implements the Dojo dijit.tree.model class.
	 *        </p>
	 * @augments ecm.model.FolderTreeModel
	 */
	return declare("ecm.model.AttachmentTreeModel", [
		FolderTreeModel,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.model.AttachmentTreeModel.prototype */

		/**
		 * Return the list of child object from the selected parent.
		 *
		 * @param parentItem
		 *            A item object derived from {@link ecm.model.Item}
		 * @param onComplete
		 *            A function to be called when the child items have been retrieved.
		 */
		getChildren: function(parentItem, onComplete) {
			var _this = this;
			if (!parentItem.repository.connected) {
				onComplete([]);
			} else {
				if (parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.WorkItem)) {
					parentItem.retrieveAttachments(function(results) {
						var childItems = [].concat(results.getItems());
						_this._addPageForwardItem(childItems, results, parentItem); // added
						_this._loadedItems[_this.getIdentity(parentItem)] = parentItem;
						onComplete(childItems);
						if (parentItem.defobj) {
							parentItem.defobj.resolve(childItems[0]);
						}
					});
				} else if (parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.AttachmentItem)) {
					parentItem.retrieveAttachmentContents(this.showFoldersOnly, false, function(results) {
						var childItems = [].concat(results.getItems());
						_this._addPageForwardItem(childItems, results, parentItem); // added
						_this._loadedItems[_this.getIdentity(parentItem)] = parentItem;
						onComplete(childItems);
					});
				} else {
					parentItem.retrieveFolderContents(this.showFoldersOnly, function(results) {
						var childItems = [].concat(results.getItems());
						_this._addPageForwardItem(childItems, results, parentItem); // added
						_this._loadedItems[_this.getIdentity(parentItem)] = parentItem;
						onComplete(childItems);
					});
				}
			}
		},

		/**
		 * Returns boolean flag indicating whether the specified item can has child nodes.
		 *
		 * @param item
		 *            A item object to check to see if it supports having child items.
		 * @returns {Boolean} true if the item can have children, false otherwise.
		 */
		mayHaveChildren: function(item) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem)) {
				return true;
			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.AttachmentItem)) {
				return true;
			} else {
				return item.isFolder();
			}
		}
	});
});

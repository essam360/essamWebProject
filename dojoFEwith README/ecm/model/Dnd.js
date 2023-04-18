/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./Message",
	"./Item"
], function(declare, lang, Message, Item) {

	/**
	 * @name ecm.model.Dnd
	 * @class Provides common methods for checking drag and drop capabilities and dropping.
	 */
	return declare("ecm.model.Dnd", null, {
		/** @lends ecm.model.Dnd.prototype */

		/**
		 * Checks if the sourceItems can be dropped on the targetItem.
		 * 
		 * @param sourceItems
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param targetItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param isCopy
		 *            Boolean indicating if copy or move.
		 * @param rootItem
		 *            Optional parameter indicating the root item of the tree.
		 * @return Boolean indicating if the source items can be dropped on the target item.
		 */
		canDrop: function(sourceItems, targetItem, isCopy, rootItem) {
			if (!targetItem) {
				return false;
			}
			// Cannot drop on Favorite teamspace, search, or document
			if (targetItem.isInstanceOf(ecm.model.Favorite) && targetItem.type != "folder") {
				return false;
			}
			var targetItemParent = targetItem.parentFolder ? targetItem.parentFolder : targetItem.parent;
			var isP8 = targetItem.repository ? targetItem.repository._isP8Like() : false;
			var isCM = targetItem.repository ? targetItem.repository._isCM : false;
			var isDraggingDocuments = false;
			var isDraggingFolders = false;
			for (var i = 0; i < sourceItems.length; i++) {
				var sourceItem = sourceItems[i];

				// If we have any rows selected that don't have an item (i.e. empty rows with ... in them), then cannot drop anywhere
				if (!sourceItem) {
					return false;
				}
				// Cannot drop "more link" node anywhere
				if (sourceItem.continuationData) {
					return false;
				}
				// Cannot drop onto self
				if (sourceItem.id == targetItem.id) {
					return false;
				}
				// When drag over a Favorite, check that cannot drop onto self
				if (targetItem.objectId && sourceItem.id == targetItem.objectId) {
					return false;
				}
				// Cannot drop into the current parent folder.
				var sourceItemParent = sourceItem.parentFolder ? sourceItem.parentFolder : sourceItem.parent;
				if (sourceItemParent && (sourceItemParent.id == targetItem.id)) {
					return false;
				}
				// Moving data from a search template not allowed
				if (!isCopy && sourceItemParent && this._isSearchTemplate(sourceItemParent)) {
					return false;
				}
				// If target is a document and if target's parent == source's parent, then cannot drop
				if (!targetItem.isFolder()) {
					if (targetItemParent && sourceItemParent && (targetItemParent.id == sourceItemParent.id)) {
						return false;
					}
				}
				// If copy & p8, cannot drop a folder because P8 supports only one parent for a folder.
				if (isCopy && isP8 && sourceItem.isFolder()) {
					return false;
				}
				// If no target repository or if the target and source repositories are not the same, then cannot drop
				if (!targetItem.repository || targetItem.repository.id != sourceItem.repository.id) {
					return false;
				}
				// For move, check if can remove from the selected item's folder
				if (!isCopy && !this.hasPrivilegeToRemoveFrom(sourceItemParent)) {
					return false;
				}
				// For move, check if can move from the source item
				if (!isCopy && !this.hasPrivilegeMoveToFolder(sourceItem)) {
					return false;
				}
				// For copy, check if can copy the source item
				if (isCopy && !this.hasPrivilegeCopyToFolder(sourceItem)) {
					return false;
				}
				// For CM folder move, cannot drop a parent folder onto a folder that is a descendant of the parent folder
				if (!isCopy && isCM && sourceItem.isFolder() && this._isMovingParentToChildFolder(sourceItem, targetItem)) {
					return false;
				}
				if (sourceItem.isFolder()) {
					isDraggingFolders = true;
				} else {
					isDraggingDocuments = true;
				}
			}
			// p8 doesn't allow documents to be copied to the root (folders can be copied to the root)
			if (isP8 && isDraggingDocuments && rootItem && rootItem.rootFolder && rootItem.id == targetItem.id) {
				return false;
			}
			if (this.hasPrivilegeToAddItemsToFolder(targetItem, isDraggingDocuments, isDraggingFolders)) { // check privilege
				return true;
			} else if (targetItem.isInstanceOf(ecm.model.Favorite) && !targetItem.item && targetItem.type == "folder") {
				return true; // The favorite isn't retrieve yet.  Return true and will check security again onDrop.
			} else {
				return false;
			}
		},

		// For CM folder, do not allow user to move parent folder to one of its child folders
		_isMovingParentToChildFolder: function(source, target) {
			var parent = target.parent;
			while (parent) {
				if (parent.id == source.id) {
					return true;
				}
				parent = parent.parent;
			}
			return false;
		},

		/**
		 * Checks if there are privileges to remove the input item.
		 * 
		 * @param currentParentItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @return Boolean indicating if have privileges to remove from the input item.
		 */
		hasPrivilegeToRemoveFrom: function(currentParentItem) {
			if (currentParentItem.repository && currentParentItem.repository.type == "box") {
				return true;
			} else {
				return currentParentItem && currentParentItem.hasPrivilege && currentParentItem.hasPrivilege("privRemoveFromFolder");
			}
		},

		/**
		 * Checks if there are privileges to move the input item.
		 * 
		 * @param sourceItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @return Boolean indicating if have privileges to move the input item.
		 * @since 2.0.3.5
		 */
		hasPrivilegeMoveToFolder: function(sourceItem) {
			return sourceItem && sourceItem.hasPrivilege && sourceItem.hasPrivilege("privMoveToFolder");
		},

		/**
		 * Checks if there are privileges to copy the input item.
		 * 
		 * @param sourceItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @return Boolean indicating if have privileges to copy the input item.
		 * @since 2.0.3.5
		 */
		hasPrivilegeCopyToFolder: function(sourceItem) {
			if (sourceItem && sourceItem.repository && (sourceItem.repository.type == "box" || sourceItem.repository.type == "cm")) {
				if (sourceItem.repository.type == "box") {
					return sourceItem.hasPrivilege && sourceItem.hasPrivilege("privAddToFolder");
				}
				else if (sourceItem.repository.type == "cm"){
					return sourceItem.hasPrivilege && sourceItem.hasPrivilege("privAddLink");
				}
			} else {
				return true;
			}
		},

		/**
		 * Checks privileges.
		 * 
		 * @param targetItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param isDraggingDocuments
		 *            Boolean indicating if dragging documents.
		 * @param isDraggingFolders
		 *            Boolean indicating if dragging folders.
		 * @return Boolean indicating if have privileges to add to the target item.
		 * @since 2.0.3.4
		 */
		hasPrivilegeToAddItemsToFolder: function(targetItem, isDraggingDocuments, isDraggingFolders) {
			if (isDraggingDocuments && !this.hasPrivilegeToAddTo(targetItem)) {
				return false;
			}
			if (isDraggingFolders && !this.hasPrivilegeToAddFolderTo(targetItem)) {
				return false;
			}
			return true;
		},

		/**
		 * Checks if there are privileges to add items to the input folder item.
		 * 
		 * @param targetItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @return Boolean indicating if have privileges to add to the target item.
		 */
		hasPrivilegeToAddTo: function(targetItem) {
			if (targetItem && targetItem.repository && targetItem.repository.type == "box") {
				return targetItem && targetItem.hasPrivilege && targetItem.hasPrivilege("privAddItem");
			}
			else if (targetItem && targetItem.repository && targetItem.repository.type == "cm"){
				return (targetItem.hasPrivilege && targetItem.hasPrivilege("privAddToFolder"))
			} else {
				return targetItem && targetItem.hasPrivilege && targetItem.hasPrivilege("privAddItem") && targetItem.hasPrivilege("privAddToFolder");
			}
		},

		/**
		 * Checks if there are privileges to add folders to the input folder item.
		 * 
		 * @param targetItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @return Boolean indicating if have privileges to add to the target item.
		 * @since 2.0.3.4
		 */
		hasPrivilegeToAddFolderTo: function(targetItem) {
			if (targetItem && targetItem.repository && targetItem.repository.type == "box") {
				return targetItem && targetItem.hasPrivilege && targetItem.hasPrivilege("privAddItem");
			} else {
				return targetItem && targetItem.hasPrivilege && targetItem.hasPrivilege("privAddLink");
			}
		},

		/**
		 * Displays error dialog indicating no privilege to add to the folder with the input name.
		 * 
		 * @param name
		 *            String indicating the folder that cannot be added to.
		 */
		addCannotDropErrorMessage: function(name) {
			if (ecm.model.desktop) {
				ecm.model.desktop.addMessage(Message.createErrorMessage("dnd_no_privilege_error", [
					name
				]));
			}
		},

		/**
		 * When the source items have been dropped on the target item for "copy", this method adds the source items to
		 * the target.
		 * 
		 * @param sourceItems
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param targetItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 */
		dropCopy: function(sourceItems, targetItem) {
			var isDraggingDocuments = false;
			var isDraggingFolders = false;
			for ( var i in sourceItems) {
				var sourceItem = sourceItems[i];
				var parent = sourceItem.parentFolder ? sourceItem.parentFolder : sourceItem.parent;
				if (sourceItem.item) {
					sourceItems[i] = sourceItem.item;
				}
				if (sourceItem.isFolder()) {
					isDraggingFolders = true;
				} else {
					isDraggingDocuments = true;
				}
			}
			this._getItem(targetItem, lang.hitch(this, function(targetItemData) {
				targetItem = targetItemData;
				if (this.hasPrivilegeToAddItemsToFolder(targetItem, isDraggingDocuments, isDraggingFolders)) { // re-check privileges
					if (targetItem.repository.type == "box") {
						targetItem.copyToFolder(sourceItems);
					} else {
						targetItem.addToFolder(sourceItems);
					}
				} else {
					this.addCannotDropErrorMessage(targetItem.name);
				}
			}));
		},

		/**
		 * When the source items have been dropped on the target item for "move", this method moves the source items to
		 * the target.
		 * 
		 * @param sourceItems
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param targetItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param currentParentItem
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}. Optional parameter specifying
		 *            the parent of all the source items.
		 */
		dropMove: function(sourceItems, targetItem, currentParentItem) {
			var isDraggingDocuments = false;
			var isDraggingFolders = false;
			for ( var i in sourceItems) {
				var sourceItem = sourceItems[i];
				if (!currentParentItem) {
					var parent = sourceItem.parentFolder ? sourceItem.parentFolder : sourceItem.parent;
					if (parent) {
						currentParentItem = parent;
					}
				}
				if (sourceItem.item) {
					sourceItems[i] = sourceItem.item;
				}
				if (sourceItem.isFolder()) {
					isDraggingFolders = true;
				} else {
					isDraggingDocuments = true;
				}
			}
			this._getItem(targetItem, lang.hitch(this, function(targetItemData) {
				targetItem = targetItemData;
				this._getItem(currentParentItem, lang.hitch(this, function(currentParentItemData) {
					currentParentItem = currentParentItemData;
					if (this.hasPrivilegeToRemoveFrom(currentParentItem) && this.hasPrivilegeToAddItemsToFolder(targetItem, isDraggingDocuments, isDraggingFolders)) { // re-check privileges
						targetItem.moveToFolder(sourceItems, currentParentItem, function() {
						});
					} else {
						this.addCannotDropErrorMessage(targetItem.name);
					}
				}));
			}));
		},

		/**
		 * @private Returns true if the item is a search template.
		 */
		_isSearchTemplate: function(item) {
			if (item && item.item) {
				item = item.item;
			}
			if (item && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				return true;
			}
			return false;
		},

		/**
		 * @private Get the item. If the input item is a favorite that isn't retrieved, then retrieve it.
		 */
		_getItem: function(item, callback) {
			var t = this;
			if (item.isInstanceOf(ecm.model.Favorite)) {
				if (item.item) {
					callback(item.item);
				} else {
					item.retrieveFavorite(lang.hitch(this, function() {
						callback(item.item);
					}));
				}
			} else {
				callback(item);
			}
		}
	});
});

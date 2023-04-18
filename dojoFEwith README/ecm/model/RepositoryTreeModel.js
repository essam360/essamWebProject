/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"./_ModelObject"
], function(declare, lang, aspect, _ModelObject) {

	/**
	 * @name ecm.model.RepositoryTreeModel
	 * @class Represents a tree that that is used to display the hierarchy of repository objects. This class implements
	 *        the Dojo dijit.tree.model class.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.RepositoryTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.RepositoryTreeModel.prototype */

		/**
		 * Constructs the tree model.
		 */
		constructor: function() {
			this.own(aspect.after(ecm.model.desktop, "onDesktopLoaded", lang.hitch(this, function() {
				this.setRepositories();
			})));
			this._rootNode = new _ModelObject("Repostories", "");
		},

		/**
		 * Sets the repositories that are used for this model.
		 */
		setRepositories: function() {

			this.onChange(this._rootNode);
			var self = this;
			this.getChildren(this._rootNode, function(items) {
				self.onChildrenChange(self._rootNode, items);
			});
		},

		/**
		 * Destroys the model.
		 */
		destroy: function() {
			if (this._rootNode) {
				this._rootNode = null;
			}
		},

		// =======================================================================
		// Methods for traversing hierarchy

		/**
		 * Returns the root item in the callback.
		 * 
		 * @param onItem
		 *            Callback in which the root item is returned as a parameter.
		 */
		getRoot: function(onItem) {
			onItem(this._rootNode);
		},

		/**
		 * Returns <code>true</code> if the item is permitted to have children.
		 */
		mayHaveChildren: function(/* dojo.data.Item */item) {
			if (item == this._rootNode) {
				return true;
			}
			return false;
		},

		/**
		 * Gets the child items for the input parentItem.
		 * 
		 * @param parentItem
		 *            Parent item in which to retrieve the folder contents.
		 * @param onComplete
		 *            Callback function that returns an array of child items.
		 */
		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			if (parentItem == this._rootNode) {
				if (!ecm.model.desktop.desktopLoaded) {
					onComplete([]);
				} else {
					var repositories = ecm.model.desktop.repositories;
					var childItems = [];
					for ( var i = 0; i < repositories.length; i++) {
						childItems.push(repositories[i]);
					}
					onComplete(childItems);
				}
			} else {
				// can't have children or not supported
				onComplete([]);
			}
		},

		// =======================================================================
		// Inspecting items

		/**
		 * Returns true if the input object is an instance of {@link ecm.model.Repository}.
		 * 
		 * @param something
		 *            An object.
		 * @return {Boolean} If the input object is an instance of {@link ecm.model.Respository}, then returns true.
		 */
		isItem: function(/* anything */something) {
			return (something == this._rootNode || (something && something.isInstanceOf && something.isInstanceOf(ecm.model.Repository)));
		},

		/**
		 * This method uses a given identity of an item to return the corresponding item by using the
		 * <code>onItem</code> callback. Return <code>null</code> if there is no item that uses the given identity.
		 * Implementations of this method can sometimes return an item from a local cache and can sometimes fetch an
		 * item from a remote server.
		 * 
		 * @param keywordArgs
		 */
		fetchItemByIdentity: function(/* object */keywordArgs) {
			// summary:
			// Given the identity of an item, this method returns the item that has
			// that identity through the onItem callback. Conforming implementations
			// should return null if there is no item with the given identity.
			// Implementations of fetchItemByIdentity() may sometimes return an item
			// from a local cache and may sometimes fetch an item from a remote server.
			// tags:
			// extension

			return null;
		},

		/**
		 * Returns the item's identifier.
		 * 
		 * @param item
		 *            A {@link ecm.model._ModelObject} or derivation from which to get the id.
		 */
		getIdentity: function(/* item */item) {
			return item.id;
		},

		/**
		 * Returns the item's label.
		 * 
		 * @param item
		 *            A {@link ecm.model._ModelObject} or derivation from which to get the name.
		 * @returns {String} String label.
		 */
		getLabel: function(/* dojo.data.Item */item) {
			return item.name;
		},

		// =======================================================================
		// Write interface

		/**
		 * This method is not implemented.
		 */
		newItem: function(/* dojo.dnd.Item */args, /* Item */parent, /* int? */insertIndex) {
			// summary:
			// Creates a new item. See `dojo.data.api.Write` for details on args.
			// tags:
			// extension
		},

		/**
		 * Move or copy an item from one parent item to another parent item.
		 * 
		 * @param childItem
		 *            Child item to paste.
		 * @param oldParentItem
		 *            Child's old parent item.
		 * @param newParentItem
		 *            Child's new parent item.
		 * @param bCopy
		 *            If <code>true</code>, indicates copy. If <code>false</code>, indicates move.
		 */
		pasteItem: function(/* Item */childItem, /* Item */oldParentItem, /* Item */newParentItem, /* Boolean */bCopy) {
			// summary:
			// Move or copy an item from one parent item to another.
			// Used in drag & drop.
			// If oldParentItem is specified and bCopy is false, childItem is removed from oldParentItem.
			// If newParentItem is specified, childItem is attached to newParentItem.
			// tags:
			// extension
		},

		// =======================================================================
		// Callbacks

		/**
		 * Callback whenever an item has changed, so that Tree can update the label, icon, and so on. Note that changes
		 * to an item's children or parent(s) will trigger an <code>onChildrenChange()</code> so you can ignore those
		 * changes here.
		 * 
		 * @param item
		 *            A dojo.data.Item.
		 */
		onChange: function(/* dojo.data.Item */item) {
			// summary:
			// Callback whenever an item has changed, so that Tree
			// can update the label, icon, etc. Note that changes
			// to an item's children or parent(s) will trigger an
			// onChildrenChange() so you can ignore those changes here.
			// tags:
			// callback
		},

		/**
		 * A callback function that is called to send notifications about new, updated, or deleted items.
		 * 
		 * @param parent
		 *            A <code>dojo.data.Item</code>.
		 * @param newChildrenList
		 *            An array of <code>dojo.data.Item</code> objects.
		 */
		onChildrenChange: function(/* dojo.data.Item */parent, /* dojo.data.Item[] */newChildrenList) {
			// summary:
			// Callback to do notifications about new, updated, or deleted items.
			// tags:
			// callback
		}
	});
});

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
	 * @name ecm.model.WorklistsTreeModel
	 * @class Represents a tree that is used to display the work list hierarchy in a repository. This class implements
	 *        the Dojo <code>dijit.tree.model</code> class.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.WorklistsTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.WorklistsTreeModel.prototype */

		/**
		 * Constructs the tree and creates a root node of type {@link ecm.model._ModelObject}.
		 */
		constructor: function() {
			if (!this.id) {
				this.id = this.repository.id;
			}
			if (!this.name) {
				this.name = this.id;
			}
			this._rootNode = new _ModelObject("worklistsRoot", "");
		},

		/**
		 * Cleans up.
		 */
		destroy: function() {
			if (this._rootNode) {
				this._rootNode = null;
			}
			if (this.repository) {
				this.repository = null;
			}
		},

		/**
		 * Set the current repository object.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object to set.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this.onChange(this._rootNode);
		},

		/**
		 * Returns the root item in the callback.
		 * 
		 * @param onItem
		 *            A callback function in which the root item is returned as a parameter.
		 */
		getRoot: function(onItem) {
			onItem(this._rootNode);
		},

		/**
		 * Returns <code>true</code> if the input item can have children.
		 * 
		 * @param item
		 *            A {@link ecm.model.Worklist} or derivation of Worklist that will be checked for its ability to
		 *            contain child items.
		 * @returns {Boolean} A value of <code>true</code> if the item can have children, <code>false</code>
		 *          otherwise.
		 */
		mayHaveChildren: function(item) {
			if (item == this._rootNode) {
				return true;
			}
			if (item && item.isInstanceOf && (item.isInstanceOf(ecm.model.Worklist) || item.isInstanceOf(ecm.model.ProcessInbasket))) {
				return false;
			}
			return true;
		},

		/**
		 * Get the child objects for the input <code>parentItem</code> parameter.
		 * 
		 * @param parentItem
		 *            Parent item in which to retrieve the child contents.
		 * @param onComplete
		 *            A callback function that returns an array of children items as a parameter.
		 */
		getChildren: function(parentItem, onComplete) {
			if (parentItem == this._rootNode) {
				if (!this.repository) {
					onComplete([]);
				} else {
					var self = this;
					var request = this.repository.retrieveWorklistContainers(function(worklistFolders) {
						var childItems = [];
						for (var i = 0; i < worklistFolders.length; i++) {
							var worklistFolder = worklistFolders[i];
							childItems.push(worklistFolder);
						}
						// Adding a timeout on root nodes to give the WorklistSelector tree time to create itself and hook up event handlers
						setTimeout(lang.hitch(this, function() {
							self.onChildrenChange(parentItem, worklistFolders);
							onComplete(childItems);
						}), 300);
					});
				}
			} else if (parentItem.isInstanceOf && (parentItem.isInstanceOf(ecm.model.WorklistFolder) || parentItem.isInstanceOf(ecm.model.ProcessRole) || parentItem.isInstanceOf(ecm.model.ProcessApplicationSpace))) {
				var self = this;
				var request = parentItem.retrieveWorklists(function(worklists) {
					var childItems = [];
					for (var i = 0; i < worklists.length; i++) {
						var worklist = worklists[i];
						childItems.push(worklist);
					}
					self.onChildrenChange(parentItem, worklists);
					onComplete(childItems);
				});
			} else {
				// can't have children or not supported
				onComplete([]);
			}
			if (request) {
				this.own(aspect.after(request, "onRequestCompleted", lang.hitch(this, function() {
					this.onProcessingComplete(parentItem);
				})));
			}
		},

		/**
		 * Returns <code>true</code> if the item is an instance of {@link ecm.model.Worklist},
		 * {@link ecm.model.ProcessApplicationSpace}, {@link ecm.model.ProcessRole} or
		 * {@link ecm.model.ProcessInbasket}.
		 * 
		 * @param something
		 *            An object to test for being a recognized item supported by this tree model.
		 * @returns {Boolean} A value of <code>true</code> if the item is recognized, <code>false</code> otherwise.
		 */
		isItem: function(something) {
			if (something == this._rootNode) {
				return true;
			}
			if (something && something.isInstanceOf && (something.isInstanceOf(ecm.model.Worklist) || something.isInstanceOf(ecm.model.ProcessApplicationSpace) || something.isInstanceOf(ecm.model.ProcessRole) || something.isInstanceOf(ecm.model.ProcessInbasket))) {
				return true;
			}
			return false;
		},

		/**
		 * This method uses a given identity of an item to return the corresponding item by using the
		 * <code>onItem</code> callback. Return <code>null</code> if there is no item that uses the given identity.
		 * Implementations of this method can sometimes return an item from a local cache and can sometimes fetch an
		 * item from a remote server.
		 * 
		 * @param keywordArgs
		 */
		fetchItemByIdentity: function(keywordArgs) {
			// summary:
			// Given the identity of an item, this method returns the item that has
			// that identity through the onItem callback. Conforming implementations
			// should return null if there is no item with the given identity.
			// Implementations of fetchItemByIdentity() may sometimes return an item
			// from a local cache and may sometimes fetch an item from a remote server.
			// tags:
			// extension
		},

		/**
		 * Returns the item's identifier.
		 * 
		 * @param item
		 *            A {@link ecm.model._ModelObject} or derivation from which to get the id.
		 * @returns {String} String id.
		 */
		getIdentity: function(item) {
			return item.id;
		},

		/**
		 * Returns the item's label.
		 * 
		 * @param item
		 *            A {@link ecm.model._ModelObject} or derivation from which to get the name.
		 * @returns {String} String label.
		 */
		getLabel: function(item) {
			return item.name;
		},

		// =======================================================================
		// Write interface

		/**
		 * Creates a new item.
		 * 
		 * @param args
		 *            Information about the item to add.
		 * @param parent
		 *            Parent item to add the new item.
		 * @param insertIndex
		 */
		newItem: function(args, parent, insertIndex) {
			// summary:
			// Creates a new item.
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

		/**
		 * A callback function that is called whenever an item has changed, so that <code>Tree</code> can update the
		 * label, icon, and so on. <strong>Note:</strong> Changes to an item's children or parent(s) will trigger an
		 * <code>onChildrenChange()</code> event, so you can ignore those changes here.
		 * 
		 * @param item
		 *            Item that is changed.
		 */
		onChange: function(item) {
		},

		/**
		 * A callback function that is called to send notifications about new, updated, or deleted items.
		 * 
		 * @param parent
		 *            Parent that changed.
		 * @param newChildrenList
		 *            Array of items.
		 */
		onChildrenChange: function(parent, newChildrenList) {
		},

		/**
		 * This event is triggered when the model begins processing an item. It allows tree widgets to display a
		 * progress indicator next to the node for the item.
		 * 
		 * @param item
		 *            Item to which processing is started.
		 */
		onProcessingStarted: function(item) {
		},

		/**
		 * This event is triggered when the model completes processing an item. It allows tree widgets to remove display
		 * of progress indicators.
		 * 
		 * @param item
		 *            Item to which processing is completed.
		 */
		onProcessingComplete: function(item) {
		}
	});
});

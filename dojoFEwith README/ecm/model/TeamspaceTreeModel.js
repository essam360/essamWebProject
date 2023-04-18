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
	 * @name ecm.model.TeamspaceTreeModel
	 * @class Represents a tree that is used to display the hierarchy of all teamspaces for a repository. This class
	 *        implements the Dojo dijit.tree.model class.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.TeamspaceTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.TeamspaceTreeModel.prototype */

		/**
		 * Constructs the tree model.
		 */
		constructor: function() {
			if (!this.id) {
				this.id = this.repository.id;
			}
			if (!this.name) {
				this.name = this.id;
			}
			this._rootNode = new _ModelObject("teamspaceRoot", "");
		},

		/**
		 * Destroys the model. <strong>Note:</strong> This is required by <code>dijit.tree.model</code> although this
		 * tree model is doing nothing for destroy.
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
		 * Sets the repository used for this model. This is needed in cases where the tree widget using the model needs
		 * to show teamspaces for a different repository.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this.onChange(this._rootNode);
		},

		// =======================================================================
		// Methods for traversing hierarchy

		/**
		 * Returns the root item of the model.
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
			if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
				return false;
			}
			return true;
		},

		/**
		 * Invokes the onComplete callback function which provides an array of the children for an item.
		 * 
		 * @param parentItem
		 *            The item used to determine the children.
		 * @param onComplete
		 *            The callback function that is used to invoke with an array of the child items as the only
		 *            argument.
		 */
		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			if (parentItem == this._rootNode) {
				if (!this.repository) {
					onComplete([]);
				} else {
					var request = this.repository.retrieveTeamspaceFolders(function(teamspaceFolders) {
						var childItems = [];
						for ( var i = 0; i < teamspaceFolders.length; i++) {
							var teamspaceFolder = teamspaceFolders[i];
							childItems.push(teamspaceFolder);
						}
						onComplete(childItems);
					});
				}
			} else if (parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.TeamspaceFolder)) {
				var request = parentItem.retrieveTeamspaces(function(teamspaces) {
					var childItems = [];
					for ( var i = 0; i < teamspaces.length; i++) {
						var teamspace = teamspaces[i];
						childItems.push(teamspace);
					}
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

		// =======================================================================
		// Inspecting items

		/**
		 * Returns true if an object is an item that can be displayed in the tree.
		 * 
		 * @param something
		 *            Any object.
		 */
		isItem: function(/* anything */something) {
			if (something == this._rootNode || (something && something.isInstanceOf && something.isInstanceOf(ecm.model.Teamspace))) {
				return true;
			}
			return false;
		},

		/**
		 * This method is not implemented.
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
		},

		/**
		 * Returns the identifier for the given item.
		 */
		getIdentity: function(/* item */item) {
			return item.id;
		},

		/**
		 * Returns the name for an item. The name can be displayed in the user interface.
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
		 * This method is not implemented.
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
		 * Event method that is called when an item's properties have changed.
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
		 * Event method that is called when an item's children have changed (added, updated, deleted).
		 */
		onChildrenChange: function(/* dojo.data.Item */parent, /* dojo.data.Item[] */newChildrenList) {
			// summary:
			// Callback to do notifications about new, updated, or deleted items.
			// tags:
			// callback
		},

		/**
		 * This event is triggered when the model begins processing an item. It is intended to allow tree widgets to
		 * display a progress indicator next to the node for the item.
		 */
		onProcessingStarted: function(item) {
		},

		/**
		 * This event is triggered when the model completes processing an item. It is intended to allow tree widgets to
		 * remove display of progress indicators.
		 */
		onProcessingComplete: function(item) {
		}
	});
});

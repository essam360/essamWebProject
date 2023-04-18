/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/model/Request",
	"ecm/model/Desktop",
	"ecm/widget/admin/model/_AdminObjectBase"
], //

function(declare, lang, Request, Desktop, _AdminObjectBase) {

	/**
	 * @name ecm.widget.admin.model.AdminTreeModel
	 * @class Provides a widget that contains a hierarchical navigation tree for administration objects.
	 */
	return declare("ecm.widget.admin.model.AdminTreeModel", null, {
		/** @lends ecm.widget.admin.model.AdminTreeModel.prototype */

		_rootNode: null,
		labelType: "html",

		/**
		 * Constructs the tree model.
		 */
		constructor: function() {
			this._rootNode = new _AdminObjectBase();
			this._rootNode.id = "RootID";
			this._rootNode.name = "";
			this._rootNode.setTreeModel(this);
		},

		onDelete: function(item) {
		},

		/**
		 * @deprecated
		 */
		_createCategory: function(id, name, parent) {
			if (!parent) {
				parent = this._rootNode;
			}
			var newNode = new NavigatorAdminCategoryObject(id, name);
			newNode.initialize();
			parent.addChild(newNode);
			return newNode;
		},

		/**
		 * Destroys the model.
		 */
		destroy: function() {
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
		 * Returns true if the item might have children.
		 */
		mayHaveChildren: function(/* dojo.data.Item */item) {
			if (item == this._rootNode) {
				return true;
			}
			return item.mayHaveChildren();
		},

		/**
		 * Invokes the <code>onComplete</code> callback function, providing an array of the children for an item.
		 * 
		 * @param parentItem
		 *            The item to determine the children for.
		 * @param onComplete
		 *            The callback function to invoke with an array of the child items as the only argument.
		 */
		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			if (parentItem == this._rootNode && parentItem._children.length == 0) {
				var params = {
					application: "navigator",
					login_desktop: Desktop.id,
					userid: Desktop.userId
				};
				Request.invokeService("admin/getAdminTreeData", null, params, lang.hitch(this, function(response) {
					var list = [];
					var items = response.items;
					if (items) {
						for (var i = 0; i < items.length; i++) {
							var item = items[i];
							if (item && item.treeItemClass) {
								require([
									item.treeItemClass.replace(/\./g, "/")
								], lang.hitch(this, function(treeItemClass) {
									var treeItem = new treeItemClass(item);
									if (parentItem.addChild) {
										parentItem.addChild(treeItem, false);
									}
									list.push(treeItem);
								}));
							}
						}
					}

					// admin user access rights.
					response.admin_access_role && ecm.model.admin.appCfg.setAccessRoleConfig(Desktop.userId, response.admin_access_role);

					onComplete(list);

				}));
			} else {
				parentItem.getChildren(onComplete);
			}
		},

		// =======================================================================
		// Inspecting items

		/**
		 * Returns true if an object is an item that is displayable in the tree.
		 * 
		 * @param something
		 *            Any object.
		 */
		isItem: function(/* anything */something) {
			if (something == this._rootNode) {
				return true;
			} else {
				// Note: Returns true for everything, though this may need to be updated
				return true;
			}
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
			return item.getIdentity();
		},

		/**
		 * Returns the displayable name for an item.
		 */
		getLabel: function(/* dojo.data.Item */item) {
			return item.getLabel();
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
		 * Event method that is called when an item's children have changed (added, updated, or deleted).
		 */
		onChildrenChange: function(/* dojo.data.Item */parent, /* dojo.data.Item[] */newChildrenList) {
			// summary:
			// Callback to do notifications about new, updated, or deleted items.
			// tags:
			// callback
		}

	});

});

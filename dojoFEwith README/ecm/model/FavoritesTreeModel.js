/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dnd/Manager",
	"./_ModelObject",
	"./FavoritesResultSet",
	"./ResultSet",
	"./Item",
	"./Message",
	"./Desktop",
	"./Dnd"
], function(declare, lang, array, aspect, DNDManager, _ModelObject, FavoritesResultSet, ResultSet, Item, Message, Desktop, Dnd) {

	/**
	 * @name ecm.model.FavoritesTreeModel
	 * @class Represents a tree that is used to display the favorites hierarchy. This class implements the Dojo
	 *        <code>dijit.tree.model</code>.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.FavoritesTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.FavoritesTreeModel.prototype */

		/**
		 * Constructs the tree.
		 * 
		 * @param rootItem
		 *            The folder to use as the root of the tree.
		 * @param data
		 *            The root bookmark folder. Data will be populated with bookmark folder.
		 */
		constructor: function(rootItem, data) {
			this._rootItem = rootItem;
			this._data = data; // local data
			this._dndModel = new Dnd();
			this._createDesktopConnections();
		},

		/**
		 * Destroys the model.
		 */
		destroy: function() {
			if (this._rootItem) {
				this._rootItem = null;
			}
			if (this._data) {
				this._data = null;
			}
			if (this._dndModel) {
				this._dndModel = null;
			}
		},

		/**
		 * Creates connections to the desktop events fired when favorites are added or removed from the favorite list.
		 */
		_createDesktopConnections: function() {
			this.own(aspect.after(Desktop, "onFavoriteAdded", lang.hitch(this, "reload")));
			this.own(aspect.after(Desktop, "onFavoritesRemoved", lang.hitch(this, "reload")));
		},

		// =======================================================================
		// Methods for traversing hierarchy

		/**
		 * Returns the root item of the model. The root item is returned as a callback parameter.
		 * 
		 * @param onItem
		 *            A callback function called with the root item.
		 */
		getRoot: function(onItem) {
			onItem(this._rootItem);
		},

		/**
		 * Returns true if the item is permitted to have children.
		 * 
		 * @param item
		 *            The input item.
		 */
		mayHaveChildren: function(/*dojo.data.Item*/item) {
			if (item === this._rootItem) {
				return true;
			} else if (item && item.isFolder && item.isFolder()) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Gets the children of the input parentItem.
		 * 
		 * @param parentItem
		 *            Parent item in which need to retrieve the folder contents.
		 * @param onComplete
		 *            Callback that will be returned an array of children items.
		 */
		getChildren: function(/*dojo.data.Item*/parentItem, /*function(items)*/onComplete) {
			if (parentItem === this._rootItem) {
				this._retrieveFavorites(onComplete);
			} else if (parentItem.repository) {
				var repository = parentItem.repository;
				// Retrieve repository folder favorite or folder children.
				ecm.widget.dialog.LoginDialog.checkLogin(repository, lang.hitch(this, function() {
					if (parentItem && parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.Favorite)) {
						var favItem = parentItem.item;
						if (favItem) {
							this.retrieveChildren(favItem, onComplete, parentItem);
						} else {
							parentItem.retrieveFavorite(lang.hitch(this, function(item) {
								// Pass the Favorite (aka parentItem) to retrieveChildren
								this.retrieveChildren(item, onComplete, parentItem);
							}));
						}
					} else {
						this.retrieveChildren(parentItem, onComplete);
					}
				}), lang.hitch(this, function() {
					// The repository login was cancelled.
					// Clear the tree node processing. The user can try expanding the node again later.
					this.onProcessingComplete(parentItem);
				}), true);				
				
			} else {
				onComplete([]);
			}
		},

		/**
		 * Retrieves the children of a favorite item.
		 * 
		 * @param parentItem
		 *            The {@link ecm.model.Item} object used to determine the children.
		 * @param onComplete
		 *            A callback function called after the children have been retrieved.
		 * @param favoritesItem
		 *            The favorite item.
		 */
		retrieveChildren: function(parentItem, onComplete, favoritesItem) {
			var repository = parentItem.repository;
			var filterType = repository.isSearchTemplateSupported() && (repository._isCM() || repository._isP8()) ? "searchAndFolderSearch" : "folderSearch";
			var criteria = null;
			if (repository._isBox()) {
				criteria = {
					isFavorite: true
				}
			}
			var request = parentItem.retrieveFolderContents(true, lang.hitch(this, function(results) {
				var childItems = [].concat(results.getItems());
				this._addPageForwardItem(childItems, results, parentItem, favoritesItem); // added
				onComplete(childItems);
				this.onProcessingComplete(parentItem);
			}), null, false, false, null, filterType, favoritesItem, criteria);
		},

		/**
		 * @private
		 */
		_addPageForwardItem: function(/* Item array */children, /* ResultSet */resultSet, /* Item */parentItem, favoritesItem) {
			var continuable = resultSet.hasContinuation();
			if (continuable) {
				var id = "continuation_" + new Date().getTime();
				var parent = favoritesItem ? favoritesItem : parentItem;
				var moreLink = new Item({
					"id": id,
					"name": this.messages.more_paging_link,
					"repository": resultSet.repository,
					"resultSet": resultSet,
					"parent": parent
				});
				moreLink.continuationData = resultSet.continuationData;
				moreLink.pagedResultSet = resultSet;
				children.push(moreLink);

				//moreLink reference on the parentItem to find it more quickly
				parentItem.moreLink = moreLink;
			}
		},

		/**
		 * Retrieves the next page of items. When processing is complete, onComplete is called.
		 * 
		 * @param pagedResultSet
		 *            The item resultSet {@link ecm.model.ResultSet} object.
		 * @param parentItem
		 *            The parent item.
		 * @param onComplete
		 *            Callback called when processing is complete.
		 */
		fetchNextPage: function(/* dojo.data.ResultSet */pagedResultSet, /* Item */parentItem, /* function */onComplete) {
			// fetch more subnodes for this node
			pagedResultSet.retrieveNextPage(lang.hitch(this, function() {
				this.replaceChildren(parentItem, pagedResultSet);
				this.onProcessingComplete(parentItem);
				if (onComplete) {
					onComplete();
				}
			}));
		},

		/**
		 * Replaces the children with the items in the result set.
		 * 
		 * @param parentItem
		 *            The parent item.
		 * @param results
		 *            Instance of {@link ecm.model.ResultSet}.
		 */
		replaceChildren: function(/* dojo.data.Item */parentItem, /* ResultSet */results) {
			var childItems = [].concat(results.getItems());
			this._addPageForwardItem(childItems, results, parentItem); // added
			this._onChildrenChange(parentItem, childItems); // notify the tree to refresh the parent item with a new set of children
		},

		/**
		 * Returns the ResultSet {@link ecm.model.ResultSet} object for the data.
		 */
		getResultSet: function() {
			return this.resultSet;
		},

		/**
		 * @private Retrieves the favorites config object
		 */
		_retrieveFavorites: function(callback) {
			// Check to see if we are running in bookmark mode (_data will be populated with bookmark folder)
			if (this._rootItem && this._rootItem.isInstanceOf && this._rootItem.isInstanceOf(ecm.model.ContentItem) && this._rootItem.isFolder()) {
				var teamspaceId = null;
				if (this._data) {
					teamspaceId = this._data[0].teamspaceId;
				}

				this._rootItem.retrieveFolderContents(true, lang.hitch(this, function(resultSet) {
					this.resultSet = resultSet;
					if (callback)
						callback(this.resultSet.items);
				}), null, false, false, teamspaceId);
			} else {
				ecm.model.desktop.loadFavorites(lang.hitch(this, function(favorites, structure, magazineStructure) {
					if (favorites) {
						if (!this.resultSet) {
							this.resultSet = FavoritesResultSet.createFromJSON({
								id: "__favorites",
								name: "__favorites",
								items: array.filter(favorites, function(item) { // remove the hidden favorites
									return !item.hidden;
								}),
								structure: structure,
								magazineStructure: magazineStructure,
								parentFolder: this._rootItem
							});
						} else {
							this.resultSet.items = array.filter(favorites, function(item) { // remove the hidden favorites
								return !item.hidden;
							});
						}

						// Update the parent so the breadcrumb can show this parent
						for ( var i in this.resultSet.items) {
							this.resultSet.items[i].parentFolder = this._rootItem;
						}
						this._items = array.filter(this.resultSet.items, function(item) {
							return item.type != "document";
						});

						if (callback)
							callback(this._items);
					}
				}));
			}
		},

		/**
		 * Clears the favorite data model and retrieves the favorite items again.
		 * 
		 * @param callback
		 *            A callback function called after the favorite items have been retrieved.
		 */
		reload: function(callback) {
			this._items = null;

			if (Desktop.connected) {
				this._retrieveFavorites(lang.hitch(this, function(items) {
					this._onChildrenChange(this._rootItem, items);
					if (callback) {
						callback(items);
					}
				}));
			} else {
				this._onChildrenChange(this._rootItem, []);
				if (callback)
					callback([]);
			}
		},

		/**
		 * Retrieves the children of the favorite item again.
		 * 
		 * @param item
		 *            The input item.
		 * @param favItem
		 *            The favorite item.
		 */
		reloadChildren: function(item, favItem) {
			var moveToFolder = item._moveToFolder;
			if (item && item.unloadFolderContents && item.isFolder()) {
				item.unloadFolderContents();
				this.retrieveChildren(item, lang.hitch(this, function(children) {
					var parentItem = favItem ? favItem : item;
					if (moveToFolder) {
						item._moveToFolder = null;
						this.onChildrenChangeForMove(parentItem, children);
						for ( var i in children) {
							this.onChange(children[i]);
						}

						if (moveToFolder.unloadFolderContents) {
							moveToFolder.unloadFolderContents();
							this.retrieveChildren(moveToFolder, lang.hitch(this, function(moveToFolderNewChildren) {
								this.onChildrenChangeForMove(moveToFolder, moveToFolderNewChildren);
								for ( var i in moveToFolderNewChildren) {
									this.onChange(moveToFolderNewChildren[i]);
								}
								this._onRefreshRoot(moveToFolder);
							}));
						}
					} else {
						this._onChildrenChange(parentItem, children);
					}
				}));
			}
		},

		_onRefreshRoot: function(item) {
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
			if (something && something.isInstanceOf && something.isInstanceOf(_ModelObject)) {
				return true;
			}
			return false;
		},

		/**
		 * Returns the item given the identity of the item.
		 * 
		 * @param keywordArgs
		 *            See `dojo.data.api.Identity` for details on args.
		 */
		fetchItemByIdentity: function(/* object */keywordArgs) {
			var identity = keywordArgs.identity || "";
			var items = this.resultSet.items;
			var arr = [];
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				if (this.getIdentity(item) == identity) {
					if (keywordArgs.onItem) {
						keywordArgs.onItem(item);
					}
					arr.push(item);
				}
			}
			if (keywordArgs.onComplete) {
				keywordArgs.onComplete(arr);
			}
		},

		/**
		 * Returns the input item's id.
		 * 
		 * @param item
		 *            The input item.
		 */
		getIdentity: function(/* item */item) {
			return item && item.id ? item.id : "";
		},

		/**
		 * Returns the item's label.
		 * 
		 * @param item
		 *            The input item.
		 */
		getLabel: function(/*dojo.data.Item*/item) {
			return item && item.name ? item.name : "";
		},

		// =======================================================================
		// Write interface

		/**
		 * Creates a new item. See <code>dojo.data.api.Write</code> for details on args.
		 */
		newItem: function(/* dojo.dnd.Item */args, /* Item */parent, /* int? */insertIndex) {
			if (args && args.sourceItems && args.sourceItems.length > 0) { // Paste the items into the parent folder (i.e. items dragged from ContentList into the tree)
				if (DNDManager.manager().copy) {
					this._dndModel.dropCopy(args.sourceItems, parent);
				} else {
					this._dndModel.dropMove(args.sourceItems, parent);
				}
			}
		},

		/**
		 * Move or copy an item from one parent item to another. Used in drag-and-drop. If <code>oldParentItem</code>
		 * is specified and <code>bCopy</code> is <code>false</code>, <code>childItem</code> is removed from
		 * <code>oldParentItem</code>. If <code>newParentItem</code> is specified, <code>childItem</code> is
		 * attached to <code>newParentItem</code>.
		 */
		pasteItem: function(/* Item */childItem, /* Item */oldParentItem, /* Item */newParentItem, /* Boolean */bCopy) {
			if (bCopy && newParentItem.repository.type == "p8" && childItem.isFolder()) {
				return; // cannot drag & drop copy a folder into a folder on p8
			} else if (newParentItem.repository.id != childItem.repository.id) {
				return; // cannot drag & drop between repositories
			}
			var sourceItems = [
				childItem
			];
			if (bCopy) {
				this._dndModel.dropCopy(sourceItems, newParentItem);
			} else {
				this._dndModel.dropMove(sourceItems, newParentItem, oldParentItem);
			}
		},

		/**
		 * Sets the value of all items that have the same item identity.
		 * 
		 * @param item
		 *            The input item.
		 * @param attribute
		 *            The item attribute that will get updated with the new value.
		 * @param value
		 *            The new value of the item attribute
		 */
		setValue: function(item, attribute, value) {
			var id = this.getIdentity(item);
			var items = this.resultSet.items;
			for (var i = 0; i < items.length; i++) {
				if (this.getIdentity(items[i]) == id) {
					items[i][attribute] = value;
					this.onChange(items[i]);
					break;
				}
			}
		},

		/**
		 * This event is triggered when the model completes processing an item. It is intended to allow tree widgets to
		 * remove display of progress indicators.
		 */
		onProcessingComplete: function(item) {
		},

		/**
		 * @private
		 */
		_onChildrenChange: function(/*dojo.data.Item*/parent, /*dojo.data.Item[]*/newChildrenList) {
			this.onChildrenChange(parent, newChildrenList);
			// dojo is interesting as when it processes the newChildrenList, it looks for a cached treeNode & uses that.
			// therefore, call onChange to make sure the dojo isn't used a cached version of item
			if (newChildrenList && newChildrenList.length > 0) {
				for (var i = 0; i < newChildrenList.length; i++) {
					this.onChange(newChildrenList[i]);
				}
			}
		},

		// =======================================================================
		// Callbacks

		/**
		 * Callback whenever an item has changed, so that Tree can update the label, icon, and so on. Note that changes
		 * to an item's children or parent(s) will trigger an <code>onChildrenChange()</code> so you can ignore those
		 * changes here.
		 * 
		 * @param item
		 *            Item which is changed.
		 */
		onChange: function(/*dojo.data.Item*/item) {
			// summary:
			//		Callback whenever an item has changed, so that Tree
			//		can update the label, icon, etc.   Note that changes
			//		to an item's children or parent(s) will trigger an
			//		onChildrenChange() so you can ignore those changes here.
			// tags:
			//		callback
		},

		/**
		 * Callback to do notifications about new, updated, or deleted items.
		 * 
		 * @param parent
		 *            Parent that changed.
		 * @param newChildrenList
		 *            Array of items.
		 */
		onChildrenChange: function(/*dojo.data.Item*/parent, /*dojo.data.Item[]*/newChildrenList) {
			// summary:
			//		Callback to do notifications about new, updated, or deleted items.
			// tags:
			//		callback
		}
	});
});

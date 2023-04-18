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
	"./MySyncedFilesResultSet",
	"./FavoritesTreeModel",
	"./ResultSet",
	"./Item",
	"./Message",
	"./Desktop",
	"./SyncServer",
	"./Dnd"
], function(declare, lang, array, aspect, DNDManager, _ModelObject, MySyncedFilesResultSet, FavoritesTreeModel, ResultSet, Item, Message, Desktop, SyncServer, Dnd) {

	/**
	 * @name ecm.model.MySyncedFilesTreeModel
	 * @class Represents a tree that is used to display the sync items hierarchy. This class implements the Dojo
	 *        <code>dijit.tree.model</code>.
	 * @augments ecm.model.FavoritesTreeModel
	 * @since 2.0.3.5
	 */
	return declare("ecm.model.MySyncedFilesTreeModel", [
		FavoritesTreeModel
	], {
		/** @lends ecm.model.MySyncedFilesTreeModel.prototype */

		/**
		 * Creates connections to the desktop events fired when sync items are added or removed from the sync item list.
		 */
		_createDesktopConnections: function() {
			this.own(aspect.after(Desktop.syncServer, "onEnableSyncForItemsComplete", lang.hitch(this, "reload")));
			this.own(aspect.after(Desktop.syncServer, "onDisableSyncForItemsComplete", lang.hitch(this, "reload")));
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
			var _this = this;
			if (parentItem === this._rootItem) {
				this._retrieveSyncItems(onComplete);
			} else if (!parentItem.repository.connected) {
				onComplete([]);
			} else {
				var repository = parentItem.repository;
				if (parentItem && parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.SyncItem)) {
					var syncItem = parentItem.item;
					if (syncItem) {
						this.retrieveChildren(syncItem, onComplete, parentItem);
					} else {
						var handler = lang.hitch(this, function(item) {
							this.retrieveChildren(item, onComplete, parentItem); // pass the sync item (aka parentItem) to retrieveChildren
						});
						parentItem.retrieveSyncItem(handler);
					}
				} else {
					this.retrieveChildren(parentItem, onComplete);
				}
			}
		},

		/**
		 * @private Retrieves the sync items config object
		 */
		_retrieveSyncItems: function(callback) {
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
				ecm.model.desktop.loadSyncItems(lang.hitch(this, function(syncItems, structure, magazineStructure) {
					if (syncItems) {
						if (!this.resultSet) {
							this.resultSet = MySyncedFilesResultSet.createFromJSON({
								id: "__syncItems",
								name: "__syncItems",
								items: syncItems,
								structure: structure,
								magazineStructure: magazineStructure,
								parentFolder: this._rootItem
							});
						} else {
							this.resultSet.items = syncItems;
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
		 * Clears the sync item data model and retrieves the sync items again.
		 * 
		 * @param callback
		 *            A callback function called after the sync items have been retrieved.
		 */
		reload: function(callback) {
			this._items = null;

			if (Desktop.connected) {
				this._retrieveSyncItems(lang.hitch(this, function(items) {
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

	});
});

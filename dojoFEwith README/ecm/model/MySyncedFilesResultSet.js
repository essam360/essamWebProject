/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/data/util/sorter",
	"dojo/_base/Deferred",
	"dojo/DeferredList",
	"ecm/model/_ModelObject",
	"ecm/model/FavoritesResultSet"
], //
function(declare, lang, has, array, aspect, sorter, Deferred, DeferredList, _ModelObject, FavoritesResultSet) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.MySyncedFilesResultSet
	 * @class This class represents a set of sync item results. The most efficient method to iterate through the results
	 *        is to use getStore and use dijits that support dojo.data stores.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.3.5
	 */
	var MySyncedFilesResultSet = declare("ecm.model.MySyncedFilesResultSet", [
		FavoritesResultSet
	], {
		/** @lends ecm.model.MySyncedFilesResultSet.prototype */

		/**
		 * Returns an array of {@link ecm.model.SyncItem} objects for all hits in the result set.
		 * 
		 * @param handler
		 *            Function.
		 * @return Array of {@link ecm.model.SyncItem} objects.
		 */
		getItems: function(/* function */handler) {
			if (handler)
				handler(this.items);
			this._retrieveSyncItems();
			return this.items; // just returns the cached items
		},

		/**
		 * Refreshes the my synced files view.
		 */
		refresh: function() {
			ecm.model.desktop.loadSyncItems(lang.hitch(this, function(syncItems, structure, magazineStructure) {
				this.items = syncItems;
				this.structure = lang.clone(this.structure);
				this.magazineStructure = lang.clone(this.magazineStructure);
				this._setupStructure();
				this.onChange(this);
				this._retrieveSyncItems();
			}));
		},

		/**
		 * Clears the sync items cache and reloads sync items from the server.
		 */
		reload: function() {
			ecm.model.desktop.clearSyncItems();
			this.refresh();
		},

		/**
		 * @private
		 */
		_connectToSyncItemRepositories: function(callback) {
			if (this.items) {
				var self = this;
				var connectedRepositoryItems = [];

				var ssoRepositoryItems = {};
				var ssoRepositoriesArray = [];
				var deferArray = [];

				array.forEach(this.items, function(item) {
					if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.SyncItem) && item.repository && !item.item && (item.type == "document" || item.type == "folder" || item.type == "teamspace")) {
						if (item.repository.connected) {
							connectedRepositoryItems.push(item);
						} else if (item.repository.usesEJB() || item.repository.useSSO || item.repository.isOAuthLinked()) {
							if (!ssoRepositoryItems[item.repository.id]) {
								ssoRepositoryItems[item.repository.id] = [];
								ssoRepositoriesArray.push(item.repository);
							}
							ssoRepositoryItems[item.repository.id].push(item);
						}
					}
				});

				if (callback && connectedRepositoryItems && connectedRepositoryItems.length > 0) {
					var deferred = new Deferred();
					deferArray.push(deferred);
					callback(connectedRepositoryItems, deferred);
				}

				// Automatically connect the SSO repositories 
				array.forEach(ssoRepositoriesArray, function(ssoRepository) {
					var deferred = new Deferred();
					deferArray.push(deferred);
					ecm.widget.dialog.LoginDialog.checkLogin(ssoRepository, function() {
						if (callback && ssoRepository.connected) {
							callback(ssoRepositoryItems[ssoRepository.id], deferred);
						} else {
							deferred.resolve();
						}
					}, function() {
						deferred.resolve();
					});
				});

				if (deferArray && deferArray.length > 0) {
					var defs = new DeferredList(deferArray);
					defs.then(function() {
						self._isRetrievingSyncItems = false;
					});
				} else {
					self._isRetrievingSyncItems = false;
				}
			}
		},

		/**
		 * @private
		 */
		_retrieveSyncItems: function() {
			if (this.items && !this._isRetrievingSyncItems) {
				this._isRetrievingSyncItems = true;
				var self = this;

				this._connectToSyncItemRepositories(function(items, repositoryDeferred) {
					var deferArray = [];

					// Retrieve items associated with sync items
					array.forEach(items, function(item) {
						var deferred = new Deferred();
						deferArray.push(deferred);
						item.retrieveSyncItem(function(updatedItem) {
							if (!item.parentFolder) {
								item.parentFolder = self.parentFolder; // Pass along "SyncItem" parent
							}
							if (self.store) {
								if (item.item && item.item.mimetype == "teamspace" && !item.item.syncEnabled) {
									self.store.deleteItem(item);
								} else {
									self.store.onSet(item);
								}
							}
							deferred.resolve();
						}, {
							requestFailedCallback: function() {
								deferred.resolve();
							},
							backgroundRequest: true
						});
					});

					if (deferArray && deferArray.length > 0) {
						var defs = new DeferredList(deferArray);
						defs.then(function() {
							repositoryDeferred.resolve();
						});
					} else {
						repositoryDeferred.resolve();
					}
				});
			}
		},

		/**
		 * Return the context menu type for the list of items
		 * 
		 * @param items
		 *            A array of sync items
		 * @param loadBaseMenu
		 *            Boolean indicating whether to load just the base sync item actions. If false, item-specific
		 *            context menus will be loaded.
		 */
		getActionsMenuItemsType: function(items, loadBaseMenu) {
			//if only one sync item is selected and an actions menu type is set on that sync item, return that instead.
			if (items && items.length == 1) {
				if (items[0].getActionsMenuItemsType) {
					var contextMenuType = items[0].getActionsMenuItemsType(loadBaseMenu);
					if (contextMenuType)
						return contextMenuType;
				}
			}

			if (loadBaseMenu) {
				return "MySyncedFilesContextMenu";
			}

			var contextMenuType = "MySyncedFilesFolderContextMenu";
			if (items && items.length > 0) {
				var favType = items[0].type;
				if (favType == "teamspace") {
					contextMenuType = "MySyncedFilesTeamspaceContextMenu";
				} else if (favType == "folder") {
					contextMenuType = "MySyncedFilesFolderContextMenu";
				} else {
					contextMenuType = "MySyncedFilesItemContextMenu";
				}
			}
			return contextMenuType;
		},

		/**
		 * Load the context menu actions for the set of items
		 * 
		 * @param items
		 *            An array of sync items.
		 * @param callback
		 *            A function called when the context menu items have been loaded.
		 * @param loadBaseMenu
		 *            Set this flag to true to load only the base sync item menu. This is used when we fail to
		 *            authenticate with the repository containing the sync item or cannot retrieve the item associated
		 *            with the sync item.
		 */
		loadContextMenu: function(items, callback, loadBaseMenu) {
			if (items.length > 0) {
				var deferArray = []; //an array to store all the deferred objects
				if (!loadBaseMenu) {
					array.forEach(items, function(item) {
						if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.SyncItem)) {
							if (!item.item) { //if item is not cached
								//create a deferred object and save the object
								var deferred = new Deferred();
								deferArray.push(deferred);
								item.retrieveSyncItem(function() {
									//when the item is retrieved, resolve the deferred object
									deferred.resolve();
								});
							}
						}
					});
				}

				//create a deferredlist that will only operate once all the provided deferred objects have been resolved.
				//This means all the sync items have been retrieved.
				if (deferArray && deferArray.length > 0) {
					var self = this;
					var defs = new DeferredList(deferArray);
					defs.then(function() {
						ecm.model.desktop.loadMenuActions(self.getActionsMenuItemsType(items, loadBaseMenu), callback);
						return true;
					});
				} else {
					ecm.model.desktop.loadMenuActions(this.getActionsMenuItemsType(items, loadBaseMenu), callback);
				}
			}
		},

		/**
		 * @private
		 */
		_addItem: function(item) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.SyncItem)) {
				if (!this.items)
					this.items = [];
				item.parentFolder = this.parentFolder;
				var existing = false;
				for ( var i = 0; i < this.items.length; i++) {
					if (this.items[i].id && this.items[i].id == item.id || this.items[i].vsId && this.items[i].vsId == item.vsId) {
						existing = true;
						break;
					}
				}
				if (!existing) {
					this.items.push(item);
				}
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Return the default toolbar name.
		 */
		getToolbarDef: function() {
			return "MySyncedFilesToolbar";
		},

		/**
		 * Load the default my synced files toolbar.
		 * 
		 * @param callback
		 *            A function called when the toolbar actions have been loaded.
		 */
		loadToolbar: function(callback) {
			if (this.hasToolbar && callback) {
				ecm.model.desktop.loadMenuActions("MySyncedFilesToolbar", callback);
			}
		}
	});

	/**
	 * Static function that registers a factory for sub-classes of <code>MySyncedFilesResultSet</code>.
	 * 
	 * @param factory
	 *            A factory object with <code>createFromJSON</code> method to possibly create a sub-class of
	 *            <code>MySyncedFilesResultSet</code>. The factory method should return null when the given item is
	 *            not one for known sub-classes, giving chances for other factories to create one or falling back to the
	 *            default <code>MySyncedFilesResultSet</code> construction.
	 * @memberof ecm.model.MySyncedFilesResultSet
	 */
	MySyncedFilesResultSet.registerFactory = function(factory) {
		if (!MySyncedFilesResultSet._factories) {
			MySyncedFilesResultSet._factories = [];
		}
		MySyncedFilesResultSet._factories.push(factory);
	};

	/**
	 * Constructs a sync items result set given a JSON representation of the item.
	 * 
	 * @param itemJSON
	 *            The JSON representation of the favorites result set.
	 * @private
	 */
	MySyncedFilesResultSet.createFromJSON = function(itemJSON) {
		var mySyncedFilesResultSet = null;
		// visit factories to see if one of them can create a sub-class for this sync items
		MySyncedFilesResultSet._factories && array.some(MySyncedFilesResultSet._factories, function(factory) {
			if (factory && factory.createFromJSON) {
				mySyncedFilesResultSet = factory.createFromJSON(itemJSON);
			}
			return !!mySyncedFilesResultSet;
		});

		if (!mySyncedFilesResultSet) {
			mySyncedFilesResultSet = new MySyncedFilesResultSet(itemJSON);
		}

		return mySyncedFilesResultSet;
	};

	return MySyncedFilesResultSet;
});

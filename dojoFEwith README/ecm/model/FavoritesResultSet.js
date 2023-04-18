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
	"ecm/model/_ModelStore"
], //
function(declare, lang, has, array, aspect, sorter, Deferred, DeferredList, _ModelObject, _ModelStore) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.FavoritesResultSet
	 * @class This class represents a set of favorite results. The most efficient method to iterate through the results
	 *        is to use getStore and use dijits that support dojo.data stores.
	 * @augments ecm.model._ModelObject
	 */
	var FavoritesResultSet = declare("ecm.model.FavoritesResultSet", [
		_ModelObject
	], {
		/** @lends ecm.model.FavoritesResultSet.prototype */

		/**
		 * List of {@link ecm.model.Favorite} objects to load.
		 */
		items: null,

		/**
		 * Parent folder in the favorites tree.
		 */
		parentFolder: null,

		/**
		 * Structure of favorites details view.
		 */
		structure: null,

		/**
		 * Structure of the favorites magazine view.
		 */
		magazineStructure: null,

		/**
		 * Index of the mime type column.
		 */
		mimeIndex: 0,

		/**
		 * Returns boolean true if has a toolbar.
		 */
		hasToolbar: true,

		/**
		 * Returns an array of column names.
		 */
		columnNames: null,

		/**
		 * Returns the paging size to use.
		 */
		pageSize: 200,

		/**
		 * @private
		 */
		constructor: function() {
			this.structure = lang.clone(this.structure);
			this.magazineStructure = lang.clone(this.magazineStructure);
			this._setupStructure();

			this.items = array.filter(this.items, function(item) { // remove the hidden favorites
				return !item.hidden;
			});
		},

		/**
		 * @private
		 */
		_setupStructure: function() {
			if (this.structure && this.structure.cells) {
				for ( var i in this.structure.cells[0]) {
					var cell = this.structure.cells[0][i];
					if (has("webkit")) {
						if (cell.field == "icon" || cell.field == "mimeTypeIcon") {
							cell.width = "25px";
						}
					}
					if (cell.field == "mimeTypeIcon") {
						cell.sortable = true;
					}
				}
			}
		},

		/**
		 * Sort the result set by a column property
		 * 
		 * @param p
		 *            Column property to sort on.
		 * @param afterSort
		 *            A function called after the sort process has completed.
		 * @param store
		 *            A ModelStore
		 */
		doSort: function(p, afterSort, store) {
			var col = p[0];
			var sortProperty = col.attribute;
			var clientAttribute = col.clientAttribute;
			if (clientAttribute) {
				delete col.clientAttribute;
			}

			function isNumericAttribute(store, attribute) {
				return (attribute && (store.comparatorMap[attribute] == _ModelStore.numericComparator || store.comparatorMap[attribute] == _ModelStore.longComparator));
			}

			if (store && this.items && // all data in hand
			(isNumericAttribute(store, sortProperty) || !ecm.model.desktop.culturalCollation)) { // safe for client-side sorting
				if (clientAttribute) {
					col.attribute = clientAttribute; // reset original attribute for client-side sorting
				}
				// _ModelStore#getValue() returns formatted value, sorting requires raw value
				var sortStore = {
					comparatorMap: store.comparatorMap,
					getValue: function(item, attribute) {
						var value = null;
						if (item && item.getValue) {
							value = item.getValue(attribute);
							if (attribute == "type") { // order "folder", "search", "teamspace", "document"
								if (value == "folder") {
									value = 2;
								} else if (value == "search") {
									value = 3;
								} else if (value == "teamspace") {
									value = 1;
								} else {
									value = 4;
								}
							}
						}
						return value;
					}
				};
				p = [
					{
						attribute: "type",
						descending: p[0].descending
					}
				].concat(p); // group by type
				this.items.sort(sorter.createSortFunction(p, sortStore));
				if (afterSort) {
					afterSort(this);
				}
				return;
			}
		},

		/**
		 * Returns an array of {@link ecm.model.Favorite} objects for all hits in the result set.
		 * 
		 * @param handler
		 *            Function.
		 * @return Array of {@link ecm.model.Favorite} objects.
		 */
		getItems: function(/* function */handler) {
			if (handler)
				handler(this.items);
			this._retrieveFavoriteItems();
			return this.items; // just returns the cached items
		},

		/**
		 * Returns an array of column names.
		 */
		getColumns: function() {
			if (!this.columnNames) {
				if (this.structure && this.structure.cells) {
					var array = [];
					for ( var i in this.structure.cells) {
						for ( var j in this.structure.cells[i]) {
							if (this.structure.cells[i][j].field) {
								array.push(this.structure.cells[i][j].field);
							}
						}
					}
					this.columnNames = array;
				} else {
					this.columnNames = [];
				}
			}
			return this.columnNames;
		},

		/**
		 * Returns a dojo.data store that can be used to read the results directly into a dojox.grid
		 */
		getStore: function() {
			this.store = new _ModelStore(this, this.getItems, lang.hitch(this, this._addItem), lang.hitch(this, this._deleteItem));
			return this.store;
		},

		saveStructure: function(structure, saveStructureCallback) {
		},

		/**
		 * Returns the favorite located at the given index.
		 * 
		 * @param index
		 *            Index of the favorite.
		 * @return The {@link ecm.model.Favorite} object at the given index.
		 */
		getItem: function(index) {
			return this.items[index];
		},

		/**
		 * Returns the index of the given {@link ecm.model.Favorite} object.
		 * 
		 * @param item
		 *            The favorite to locate in the items array.
		 * @return The number index of the favorite.
		 */
		getIndexOfItem: function(item) {
			return array.indexOf(this.items, item);
		},

		/**
		 * @private
		 */
		_deleteItem: function(item) {
			for ( var index in this.items) {
				if (item.id == this.items[index].id) {
					this.items.splice(index, 1);
					return true;
				}
			}
			return false;
		},

		/**
		 * @private
		 */
		_addItem: function(item) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite) && (!item.isInstanceOf(ecm.model.SyncItem))) {
				if (!this.items)
					this.items = [];
				item.parentFolder = this.parentFolder;
				this.items.push(item);

				return true;
			} else {
				return false;
			}
		},

		isMaxResultsReached: function() {
			return true;
		},

		hasContinuation: function() {
			return false;
		},

		/**
		 * Sets the new item at the provided index for this result set.
		 * 
		 * @param index
		 *            Location in the items are to store the item.
		 * @param item
		 *            Item to store in the items array.
		 */
		setItem: function(index, item) {
			this.items[index] = item;
			this.onChange(item);
		},

		/**
		 * Refreshes the favorites view.
		 */
		refresh: function() {
			ecm.model.desktop.loadFavorites(lang.hitch(this, function(favorites, structure, magazineStructure) {
				this.items = array.filter(favorites, function(item) { // remove the hidden favorites
					return !item.hidden;
				});
				this.structure = lang.clone(this.structure);
				this.magazineStructure = lang.clone(this.magazineStructure);
				this._setupStructure();
				this.onChange(this);
				this._retrieveFavoriteItems();
			}));
		},

		/**
		 * Clears the favorites cache and reloads favorites from the server.
		 * 
		 * @since 2.0.3.3
		 */
		reload: function() {
			ecm.model.desktop.clearFavorites();
			this.refresh();
		},

		/**
		 * @private
		 */
		_connectToFavoriteRepositories: function(callback) {
			if (this.items) {

				var repositoryItems = {};
				var repositories = [];
				var deferArray = [];

				// Collect the repositories that do not require an interactive login, and their items.

				// Only automatically connect SSO repositories if the authenticating repository for the desktop is SSO. 
				var defaultRepository = ecm.model.desktop.getRepository(ecm.model.desktop.defaultRepositoryId);
				var authRepoIsSSO = defaultRepository && (defaultRepository.usesEJB() || defaultRepository.useSSO); // isOAuthLinked does not apply to the authenticating repository

				array.forEach(this.items, lang.hitch(this, function(item) {
					if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite) && item.repository && !item.item && (item.type == "document" || item.type == "folder" || item.type == "teamspace")) {
						if (item.repository.connected || (authRepoIsSSO && (item.repository.usesEJB() || item.repository.useSSO)) || item.repository.isOAuthLinked()) {
							if (!repositoryItems[item.repository.id]) {
								repositoryItems[item.repository.id] = [];
								repositories.push(item.repository);
							}
							repositoryItems[item.repository.id].push(item);
						}
					}
				}));

				// Logging into a repository resets the session.
				// Logins must be serialized and items should not be retrieved until after all repositories are connected. 
				var connectRepositories = lang.hitch(this, function(connectedCallback, index) {
					if (index < repositories.length) {
						ecm.widget.dialog.LoginDialog.checkLogin(repositories[index], lang.hitch(this, function() {
							// Connect the next repository.
							connectRepositories(connectedCallback, index + 1);
						}), lang.hitch(this, function() { // Error or login was cancelled.
							// Connect the next repository.
							connectRepositories(connectedCallback, index + 1);
						}), true);
					} else {
						// Finished connecting to repositories
						if (ecm.model.desktop.favoritesLoginsCompleted) {
							ecm.model.desktop.favoritesLoginsCompleted.resolve();
						}
						connectedCallback();
					}
				});

				// Retrieve the items from the connected repositories.
				var finishedConnecting = lang.hitch(this, function() {
					array.forEach(repositories, lang.hitch(this, function(repository) {
						if (repository.connected) {
							var deferred = new Deferred();
							deferArray.push(deferred);
							callback(repositoryItems[repository.id], deferred);
						}
					}));

					// Wait for all item retrieves to complete.
					if (deferArray && deferArray.length > 0) {
						var defs = new DeferredList(deferArray);
						defs.then(lang.hitch(this, function() {
							this._isRetrievingFavorites = false;
						}));
					} else {
						this._isRetrievingFavorites = false;
					}
				});

				connectRepositories(finishedConnecting, 0);
			}
		},

		/**
		 * @private
		 */
		_retrieveFavoriteItems: function() {
			if (this.items) {
				if (!this._isRetrievingFavorites) {
					this._isRetrievingFavorites = true;
					var self = this;

					this._connectToFavoriteRepositories(function(items, repositoryDeferred) {
						var deferArray = [];

						// Retrieve items associated with favorites
						array.forEach(items, function(item) {
							var deferred = new Deferred();
							deferArray.push(deferred);
							item.retrieveFavorite(function(updatedItem) {
								if (!item.parentFolder) {
									item.parentFolder = self.parentFolder; // Pass along "Favorites" parent
								}
								if (self.store) {
									self.store.onSet(item);
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
			} else {
				// Finished connecting to repositories
				if (ecm.model.desktop.favoritesLoginsCompleted) {
					ecm.model.desktop.favoritesLoginsCompleted.resolve();
				}
			}
		},

		/**
		 * Check the result set for being associated with the item.
		 * 
		 * @param item
		 *            A content item object
		 */
		isResultSetForItem: function(item) {
			if (this.parentFolder && this.parentFolder.id == item.id) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Return the context menu type for the list of items
		 * 
		 * @param items
		 *            A array of favorite items
		 * @param loadBaseMenu
		 *            Boolean indicating whether to load just the base favorite actions. If false, item-specific context
		 *            menus will be loaded.
		 */
		getActionsMenuItemsType: function(items, loadBaseMenu) {
			//if only one favorite item is selected and an actions menu type is set on that favorite item, return that instead.
			if (items && items.length == 1) {
				if (items[0].getActionsMenuItemsType) {
					var contextMenuType = items[0].getActionsMenuItemsType(loadBaseMenu);
					if (contextMenuType)
						return contextMenuType;
				}
			}

			if (loadBaseMenu) {
				return "FavoriteContextMenu";
			}

			var contextMenuType = "FavoriteFolderContextMenu";
			if (items && items.length > 0) {
				var favType = items[0].type;
				if (favType == "search") {
					contextMenuType = "FavoriteSearchTemplateContextMenu";
				} else if (favType == "teamspace") {
					contextMenuType = "FavoriteTeamspaceContextMenu";
				} else if (favType == "folder" && items[0].repository && items[0].repository.type == "cm") {
					contextMenuType = "FavoriteFolderContextMenuCM";
				} else if (favType == "folder") {
					contextMenuType = "FavoriteFolderContextMenu";
				} else if (favType == "systemItem") {
					contextMenuType = "FavoriteSystemItemContextMenu";
				} else {
					contextMenuType = "FavoriteItemContextMenu";
				}
			}
			return contextMenuType;
		},

		/**
		 * Load the context menu actions for the set of items
		 * 
		 * @param items
		 *            An array of favorite items.
		 * @param callback
		 *            A function called when the context menu items have been loaded.
		 * @param loadBaseMenu
		 *            Set this flag to true to load only the base favorite menu. This is used when we fail to
		 *            authenticate with the repository containing the favorite item or cannot retrieve the item
		 *            associated with the favorite.
		 */
		loadContextMenu: function(items, callback, loadBaseMenu) {
			if (items.length > 0) {
				var deferArray = []; //an array to store all the deferred objects
				if (!loadBaseMenu) {
					array.forEach(items, function(item) {
						if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite)) {
							if (!item.item) { //if item is not cached
								//create a deferred object and save the object
								var deferred = new Deferred();
								deferArray.push(deferred);
								item.retrieveFavorite(function() {
									//when the item is retrieved, resolve the deferred object
									deferred.resolve();
								});
							}
						}
					});
				}

				//create a deferredlist that will only operate once all the provided deferred objects have been resolved.
				//This means all the favorite items have been retrieved.
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
		 * Return the default toolbar name.
		 */
		getToolbarDef: function() {
			return "FavoritesToolbar";
		},

		/**
		 * Load the default favorites toolbar.
		 * 
		 * @param callback
		 *            A function called when the toolbar actions have been loaded.
		 */
		loadToolbar: function(callback) {
			if (this.hasToolbar && callback) {
				ecm.model.desktop.loadMenuActions("FavoritesToolbar", callback);
			}
		}
	});

	/**
	 * Static function that registers a factory for sub-classes of <code>FavoritesResultSet</code>.
	 * 
	 * @param factory
	 *            A factory object with <code>createFromJSON</code> method to possibly create a sub-class of
	 *            <code>FavoritesResultSet</code>. The factory method should return null when the given item is not
	 *            one for known sub-classes, giving chances for other factories to create one or falling back to the
	 *            default <code>FavoritesResultSet</code> construction.
	 * @since 2.0.3
	 * @memberof ecm.model.FavoritesResultSet
	 */
	FavoritesResultSet.registerFactory = function(factory) {
		if (!FavoritesResultSet._factories) {
			FavoritesResultSet._factories = [];
		}
		FavoritesResultSet._factories.push(factory);
	};

	/**
	 * Constructs a favorites result set given a JSON representation of the item.
	 * 
	 * @param itemJSON
	 *            The JSON representation of the favorites result set.
	 * @since 2.0.3
	 * @private
	 */
	FavoritesResultSet.createFromJSON = function(itemJSON) {
		var favoritesResultSet = null;
		// visit factories to see if one of them can create a sub-class for this favorite
		FavoritesResultSet._factories && array.some(FavoritesResultSet._factories, function(factory) {
			if (factory && factory.createFromJSON) {
				favoritesResultSet = factory.createFromJSON(itemJSON);
			}
			return !!favoritesResultSet;
		});

		if (!favoritesResultSet) {
			favoritesResultSet = new FavoritesResultSet(itemJSON);
		}

		return favoritesResultSet;
	};

	return FavoritesResultSet;
});

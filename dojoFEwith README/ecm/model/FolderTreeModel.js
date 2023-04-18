/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dnd/Manager",
	"dojo/data/util/filter",
	"./_ModelObject",
	"./Item",
	"./ContentItem",
	"./Dnd"
], function(declare, lang, aspect, DNDManager, datafilter, _ModelObject, Item, ContentItem, Dnd) {

	/**
	 * @name ecm.model.FolderTreeModel
	 * @class Represents a tree that is used to display the folder hierarchy in a repository. This class implements the
	 *        Dojo dijit.tree.model class.
	 * @augments ecm.model._ModelObject
	 */
	var FolderTreeModel = declare("ecm.model.FolderTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.FolderTreeModel.prototype */

		/**
		 * When true, indicates this FolderTreeModel is search in teamspaces.
		 */
		isFirstNodeasTeamspaces: false,
		/**
		 * Used when <code>isFirstNodeasTeamspaces</code> is true. Used to filter teamspaces in the search in
		 * teamspaces. This value is set in the <code>applyFilter</code> method.
		 */
		filter: null,
		/**
		 * @private Used when isFirstNodeasTeamspaces is true. Used in getLabel method to get the teamspace name for the
		 *          1st level tree items.
		 */
		isChildrenNodeTeamspace: false,
		/**
		 * Used when <code>isFirstNodeasTeamspaces</code> is true. If true, create
		 * <q>"This teamspace"</q>
		 * node as the first item in the list when getting list of teamspaces. Used when getting children from the
		 * teamspace builder's > new search > search in dropdown.
		 */
		isShowThisTeamspace: false,
		/**
		 * Used when <code>isFirstNodeasTeamspaces</code> and </code>isShowThisTeamspace</code> are true. This value
		 * is used for the PathName in this teamspace node.
		 */
		thisTeamspaceName: ecm.messages.search_in_thisteamspaces,

		/**
		 * @private
		 */
		_teamspaces: [],

		/**
		 * An teamspace id of a node to filter from the list of teamspaces.
		 */
		rootItemToFilter: null,

		/**
		 * Constructs the tree.
		 * 
		 * @param rootItem
		 *            The folder to use as the root of the tree.
		 * @param showFoldersOnly
		 *            If true, only folders display in the tree. If false, both folders and non-folders display.
		 * @param isFirstNodeasTeamspaces
		 *            If true, indicates search in teamspaces.
		 * @param isShowThisTeamspace
		 *            If true and isFirstNodeasTeamspaces is true, create
		 *            <q>"This teamspace"</q>
		 *            node when getting teamspace children.
		 * @param thisTeamspacename
		 *            If isShowThisTeamspace and isFirstNodeasTeamspaces are true, this value used in the PathName in
		 *            the this teamspace node.
		 * @param filterType
		 *            Filters the items displayed on the tree (supersedes showFoldersOnly). Used when getting children
		 *            for an item.
		 */
		constructor: function(rootItem, showFoldersOnly, isFirstNodeasTeamspaces, isShowThisTeamspace, thisTeamspacename, filterType) {
			this.id = "Root:" + rootItem.id;
			this.name = this.id;
			this._loadedItems = {};
			this._rootItem = rootItem;
			this.showFoldersOnly = showFoldersOnly || false;
			this.own(aspect.after(ecm.model.desktop, "onChange", lang.hitch(this, "_onDesktopChanged"), true));
			this.isFirstNodeasTeamspaces = isFirstNodeasTeamspaces;
			this.isShowThisTeamspace = isShowThisTeamspace;
			if (thisTeamspacename) {
				this.thisTeamspaceName = thisTeamspacename;
			}
			this._filterType = filterType;
			this._dndModel = new Dnd();
		},

		/**
		 * @private
		 */
		_onDesktopChanged: function(modelObject) {
			if (!this._rootItem || !this._rootItem.repository)
				return;

			if (modelObject == this._rootItem.repository) { // a full refresh
				if (this._rootItem.repository.connected == false) { // logoff
					this._loadedItems = {};
					this.reload(this._rootItem);
				} else {
					for ( var i in this._loadedItems) {
						this.reload(this._loadedItems[i]);
					}
				}
			} else if (this.isItem(modelObject) && this.isLoaded(modelObject) && modelObject.repository == this._rootItem.repository) { // a partial refresh
				this.reload(modelObject);
			} else if (this.isItem(modelObject) && !this.isLoaded(modelObject) && modelObject.repository == this._rootItem.repository) { // a partial refresh
				var moveToFolder = modelObject._moveToFolder;
				if (moveToFolder && moveToFolder.unloadFolderContents) {
					moveToFolder.unloadFolderContents();
					modelObject._moveToFolder = null;
				}
			}
		},

		/**
		 * Cleans up.
		 */
		destroy: function() {
			this.inherited(arguments);

			this._loadedItems = null;
			this._rootItem = null;
			this._dndModel = null;
		},

		/**
		 * Returns true if the item is loaded.
		 * 
		 * @param item
		 *            Input item.
		 * @return Boolean indicating if the item is loaded.
		 */
		isLoaded: function(item) {
			return this._loadedItems[this.getIdentity(item)] ? true : false;
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
			onItem(this._rootItem);
		},

		/**
		 * Returns true if the input item is a folder.
		 * 
		 * @param item
		 *            Item to check if it is a folder
		 * @return Boolean indicating if the item is a folder.
		 */
		mayHaveChildren: function(item) {
			return item.isFolder();
		},

		/**
		 * Retrieves the next page. When processing is complete, onComplete is called.
		 * 
		 * @param pagedResultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parentItem
		 *            The parent item.
		 * @param onComplete
		 *            Callback called when processing is complete.
		 */
		fetchNextPage: function(pagedResultSet, /* Item */parentItem, /* function */onComplete) {
			this.onProcessingStarted(parentItem);
			pagedResultSet.retrieveNextPage(lang.hitch(this, function() {
				if (pagedResultSet.setType == "teamspace") {
					var childItems = this._createTeamspaceChildren(pagedResultSet, parentItem, this.isShowThisTeamspace);
					this.onChildrenChange(parentItem, childItems);
					this.onProcessingComplete(parentItem);
					onComplete(childItems);
				} else {
					this.replaceChildren(parentItem, pagedResultSet);
					this.onProcessingComplete(parentItem);
					if (onComplete) {
						onComplete();
					}
				}
			}));
		},

		/**
		 * Replace the children with the items in the result set.
		 * 
		 * @param parentItem
		 *            The parent item.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 */
		replaceChildren: function(parentItem, resultSet) {
			var childItems = [].concat(resultSet.getItems());
			this._addPageForwardItem(childItems, resultSet, parentItem);
			this.onChildrenChange(parentItem, childItems); // notify the tree to refresh the parent item with a new set of children
		},

		/**
		 * Gets the teamspace items for the input parentItem. If <code>this.isShowThisTeamspace</code> is true, then
		 * add
		 * <q>"This
		 * teamspace"</q>
		 * to the top of the list.
		 * 
		 * @param parentItem
		 *            Parent item in which need to retrieve the contents.
		 * @param onComplete
		 *            Callback that will be called and will be passed the array of teamspace items.
		 */
		getTeamspacesItem: function(parentItem, onComplete) {
			var _this = this;
			if (!parentItem.repository.teamspacesEnabled) {
				this.onProcessingComplete();
				onComplete([]);
			} else {
				parentItem.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(teamspacesResultSet) {
					_this.teamspacesResultSet = teamspacesResultSet;
					var childItems = this._createTeamspaceChildren(teamspacesResultSet, parentItem, this.isShowThisTeamspace);
					this.onProcessingComplete();
					onComplete(childItems);
				}), true);
			}
		},

		/**
		 * @private
		 */
		_createTeamspaceChildren: function(teamspacesResultSet, parentItem, addThisTeamspace) {

			// Create content items from the teamspace objects so they can be displayed in the tree.
			var teamspaceContentItems = [];
			for ( var index = 0; index < teamspacesResultSet.items.length; index++) {
				var teamspace = teamspacesResultSet.items[index];
				var teamspaceItem = ContentItem.createFromJSON(teamspace.toJson(), this, null);
				teamspaceItem.id = teamspace.id;
				teamspaceItem.name = teamspace.name;
				teamspaceItem.attributes.ClbTeamspaceName = teamspace.name;
				teamspaceItem.attributes.clbTitle = teamspace.name;
				teamspaceItem.mimetype = "folder";
				teamspaceItem.template = "Teamspace";
				teamspaceItem.repository = parentItem.repository;
				teamspaceContentItems.push(teamspaceItem);
			}

			this._loadedItems[this.getIdentity(parentItem)] = parentItem;
			this._teamspaces.length = 0;
			var childitems = [];
			for ( var i = 0; i < teamspaceContentItems.length; i++) {
				var teamspaceItem = teamspaceContentItems[i];
				if (this.rootItemToFilter && this.rootItemToFilter != teamspaceItem.id) {
					childitems.push(teamspaceItem);
					this._teamspaces.push(teamspaceItem);
				} else if (!this.rootItemToFilter) {
					childitems.push(teamspaceItem);
					this._teamspaces.push(teamspaceItem);
				}

			}
			// create "This teamspace" node when the option is enabled
			if (addThisTeamspace) {
				var pathname = parentItem.repository.type == "p8" ? "/Teamspaces/" + this.thisTeamspaceName : "/" + this.thisTeamspaceName;
				var teamspaceItem = new ContentItem({
					id: ecm.model.FolderTreeModel.THIS_TEAMSPACE_ID,
					name: ecm.messages.search_in_thisteamspaces,
					repository: parentItem.repository,
					PathName: pathname,
					template: "Teamspace"
				});
				childitems.unshift(teamspaceItem);
			}

			// set the parentItem to the items so that it can return correct path name
			for ( var i = 0; i < childitems.length; i++) {
				childitems[i].parent = parentItem;
			}
			this._addPageForwardItem(childitems, teamspacesResultSet, parentItem);
			return (childitems);
		},

		/**
		 * @private Called by the <code>getTeamspacesItem</code> method
		 * @deprecated.
		 */
		_getTeamspaceIds: function(repository, callback) {
			if (repository.teamspaces) {
				var array = [];
				for ( var i = 0; i < repository.teamspaces.length; i++) {
					array.push(repository.teamspaces[i].id);
				}
				callback(array);
			} else {
				repository.retrieveTeamspaceFolders(lang.hitch(this, function(teamspaces) {
					var array = [];
					for ( var i = 0; i < teamspaces.length; i++) {
						array.push(teamspaces[i].id);
					}
					callback(array);
				}));
			}
		},

		/**
		 * Get the child for the input parentItem. This will either get the teamspace items or it will retrieve the
		 * folder contents of the input parentItem.
		 * 
		 * @param parentItem
		 *            Parent item in which need to retrieve the folder contents.
		 * @param onComplete
		 *            Callback that will be returned an array of children items.
		 */
		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			if (!parentItem.repository.connected) {
				onComplete([]);
			} else {
				// If showing teamspaces in a tree and if getting children for the root, then set isChildrenNodeTeamspace to true.
				if (this.isFirstNodeasTeamspaces && this._rootItem && parentItem == this._rootItem) {
					this.isChildrenNodeTeamspace = true;
				}
				// The parentItem is teamspace contentItem, so should be opened by folder
				if (parentItem.template && parentItem.template.indexOf("Teamspace") >= 0) {
					this.isChildrenNodeTeamspace = false;
				}

				this.onProcessingStarted(parentItem);
				if (this.isFirstNodeasTeamspaces && this.isChildrenNodeTeamspace) {
					this.getTeamspacesItem(parentItem, onComplete);
				} else {

					var request = parentItem.retrieveFolderContents(this.showFoldersOnly, lang.hitch(this, function(results) {
						var childItems = [].concat(results.getItems());
						this._addPageForwardItem(childItems, results, parentItem);
						if (!this._loadedItems) {
							this._loadedItems = {};
						}
						this._loadedItems[this.getIdentity(parentItem)] = parentItem;
						this.onProcessingComplete(parentItem);
						onComplete(childItems);
					}), null, false, false, this._teamspaceId, this._filterType);
				}
			}
		},

		/**
		 * Sets the filter and reloads the root. The filter is by getTeamspacesItem method.
		 * 
		 * @param filter
		 *            Filter data.
		 * @param callback:
		 *            Function called when filtering complete with information about the number of filtered teamspaces
		 *            and whether there are more results available on the server.
		 */
		applyFilter: function(filter, callback) {
			if (filter && filter.length > 0) {

				// Make case sensitive for CM
				var ignoreCase = true;
				if (this._rootItem.repository._isCM()) {
					ignoreCase = false;
				}

				// Generate a regular expression from the simple filter string, which ignores case.
				this.filter = datafilter.patternToRegExp(filter, ignoreCase);
			} else {
				this.filter = null;
			}

			this._rootItem.unloadFolderContents();
			var newChildItems = [];
			for ( var index = 0; index < this._teamspaces.length; index++) {
				var teamspace = this._teamspaces[index];
				if (!this.filter || (teamspace.name && teamspace.name.match(this.filter))) {
					if (this.rootItemToFilter && this.rootItemToFilter != teamspace.id)
						newChildItems.push(teamspace);
					else if (!this.rootItemToFilter)
						newChildItems.push(teamspace);
				}
			}

			if (newChildItems.length == this._teamspaces.length) {
				if (this._rootItem.moreLink) {
					// Add the "more" link if needed and the filter is cleared.
					newChildItems.push(this._rootItem.moreLink);
				}
			}

			this.onChildrenChange(this._rootItem, newChildItems); // notify tree to redisplay the parent with these children
			for ( var i in newChildItems) {
				this.onChange(newChildItems[i]);
			}
			callback(newChildItems.length, this._rootItem.moreLink != null && newChildItems.length <= this._teamspaces.length);
		},

		/**
		 * Retreives teamspaces passing filter criteria to the server to be used in the query.
		 * 
		 * @param filter
		 *            Filter data.
		 * @param callback:
		 *            Function called when filtering complete.
		 */
		searchAllTeamspaces: function(filterValue, callback) {
			var criteria = {};
			criteria.type = "all";
			var condition = {};
			criteria.conditions = [];
			condition.name = "name";
			condition.condition = "contain";
			condition.value = filterValue;
			criteria.conditions.push(condition);

			// Remove the "more" link on the root item if present since we are rebuilding the tree.
			if (this._rootItem.moreLink) {
				delete this._rootItem.moreLink;
			}

			this._rootItem.unloadFolderContents();
			this._rootItem.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(teamspacesResultSet) {
				var filteredTeamspaces = this._createTeamspaceChildren(teamspacesResultSet, this._rootItem, false);
				this.onChildrenChange(this._rootItem, filteredTeamspaces); // notify tree to redisplay the parent with these children
				for ( var i in filteredTeamspaces) {
					this.onChange(filteredTeamspaces[i]);
				}
				callback(teamspacesResultSet);
			}), true, null, null, criteria);
		},

		/**
		 * @private If the resultSet has more data, then adds the more link as an {@link ecm.model.Item} in the
		 *          children.
		 */
		_addPageForwardItem: function(children, resultSet, parentItem) {
			if (resultSet.hasContinuation()) {
				var moreLink = new Item({
					"id": "continuation_" + new Date().getTime(),
					"name": ecm.messages.more_paging_link,
					"repository": resultSet.repository,
					"resultSet": resultSet,
					"parent": parentItem
				});
				moreLink.continuationData = resultSet.continuationData;
				moreLink.pagedResultSet = resultSet;
				children.push(moreLink);
				parentItem.moreLink = moreLink; //moreLink reference on the parentItem to find it more quickly
			}
		},

		// =======================================================================
		// Inspecting items

		/**
		 * Returns true if the input is instance of {@link ecm.model.Item}.
		 * 
		 * @param something
		 *            If something is instanceof {@link ecm.model.Item}, then return true.
		 * @return Boolean indicating if this is an item.
		 */
		isItem: function(something) {
			if (something && something.isInstanceOf && something.isInstanceOf(ecm.model.Item)) {
				return true;
			}
			return false;
		},

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
		 * Returns the input item's id.
		 * 
		 * @param item
		 *            Item in which to get the id.
		 * @return String id.
		 */
		getIdentity: function(item) {
			return item.id;
		},

		/**
		 * Returns the item's label.
		 * 
		 * @param item
		 *            Item in which to get the label.
		 * @return String label.
		 */
		getLabel: function(item) {
			var label = item.name;
			// If the "{NAME}" attribute is present and requires special formatting (not a string)...
			if (item.hasAttribute("{NAME}") && (item.getAttributeType("{NAME}") != "xs:string")) {
				label = item.getDisplayValue("{NAME}"); // Get the formatted display value.
			}
			if (this.isChildrenNodeTeamspace) { // If getting label for a teamspace
				if (item.attributes.ClbTeamspaceName) {
					label = item.attributes.ClbTeamspaceName;
				} else if (item.attributes.clbTitle) {
					label = item.attributes.clbTitle;
				}
			}
			return label;
		},

		/**
		 * Unloads and retrieves the parent folder.
		 * 
		 * @param parent
		 *            Parent item to unload and reload.
		 */
		reload: function(parent) {
			if (this._rootItem && this._rootItem.moreLink) {
				delete this._rootItem.moreLink;
			}

			if (parent == null) {
				parent = this._rootItem;
			}
			var moveToFolder = parent._moveToFolder;
			this.onProcessingStarted(parent);
			// Check that the unloadFolderContents function exists.
			if (parent.unloadFolderContents) {
				parent.unloadFolderContents();
				this.getChildren(parent, lang.hitch(this, function(newChildren) { // re-get the folder's children
					this.onChildrenChangeForMove(parent, newChildren); // notify tree to redisplay the parent with these children
					for ( var i in newChildren) {
						this.onChange(newChildren[i]);
					}
					if (moveToFolder) {
						parent._moveToFolder = null;
						moveToFolder.refresh(); // Will notify the tree and content list to reload with latest data
					}
				}));
			}
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
		 */
		newItem: function(args, parent) {
			if (args && args.sourceItems && args.sourceItems.length > 0) { // Paste the items into the parent folder (i.e. items dragged from ContentList into the tree)
				if (DNDManager.manager().copy) {
					this._dndModel.dropCopy(args.sourceItems, parent);
				} else {
					this._dndModel.dropMove(args.sourceItems, parent);
				}
			}
		},

		/**
		 * Move or copy an item from one parent item to another. Used in drag & drop. If oldParentItem is specified and
		 * bCopy is false, childItem is removed from oldParentItem. If newParentItem is specified, childItem is attached
		 * to newParentItem.
		 * 
		 * @param childItem
		 *            Child item to paste.
		 * @param oldParentItem
		 *            Child's old parent item.
		 * @param newParentItem
		 *            Child's new parent item.
		 * @param bCopy
		 *            If true, indicates copy. If false, indicates move.
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

		// =======================================================================
		// Callbacks

		/**
		 * Callback whenever an item has changed, so that Tree can update the label, icon, etc. Note that changes to an
		 * item's children or parent(s) will trigger an onChildrenChange() so you can ignore those changes here.
		 * 
		 * @param item
		 *            Item which is changed.
		 */
		onChange: function(item) {
		},

		/**
		 * Callback to do notifications about new, updated, or deleted items.
		 * 
		 * @param parent
		 *            Parent that changed.
		 * @param newChildrenList
		 *            Array of items.
		 */
		onChildrenChange: function(parent, newChildrenList) {
		},

		onChildrenChangeForMove: function(parent, newChildrenList) {
		},
		
		/**
		 * This event is triggered when the model begins processing an item. It is intended to allow tree dijits to
		 * display a progress indicator next to the node for the item.
		 * 
		 * @param item
		 *            Item to which processing is started.
		 */
		onProcessingStarted: function(item) {
		},

		/**
		 * This event is triggered when the model completes processing an item. It is intended to allow tree dijits to
		 * remove display of progress indicators.
		 * 
		 * @param item
		 *            Item to which processing is completed.
		 */
		onProcessingComplete: function(item) {
		}

	});

	FolderTreeModel.THIS_TEAMSPACE_ID = "{this_teamspace_id}";
	return FolderTreeModel;
});

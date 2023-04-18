/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/aspect",
	"dojo/_base/lang",
	"dojo/data/util/filter",
	"./_ModelObject",
	"./Item"
], function(declare, aspect, lang, dojoFilter, _ModelObject, Item) {

	/**
	 * @name ecm.model.SearchTemplateTreeModel
	 * @class Represents a tree that is used to display the hierarchy of search template folders and the search
	 *        templates in these folders. This class implements the {@link dijit.tree.model} contract.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SearchTemplateTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.SearchTemplateTreeModel.prototype */

		/**
		 * Indicates whether this model has an all searches node.
		 */
		noAllSearches: false,

		/**
		 * Indicates whether to show the list of recently used search templates.
		 */
		showRecents: true,

		/**
		 * Indicates whether to show the list of opened search templates.
		 */
		showOpenedSearches: false,

		/**
		 * Indicates whether to show cross repository search templates.
		 */
		showCrossRepositorySearches: true,

		/**
		 * @private
		 */
		maxRecents: 10,

		/**
		 * @private The node containing the recently used search templates.
		 */
		recentNode: null,

		/**
		 * @private
		 */
		filter: null,

		/**
		 * The number of search templates that are displayed per page.
		 */
		itemsPerPage: 100,

		/**
		 * @private
		 */
		numPages: 1,

		/**
		 * Constructs a tree model.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param teamspace
		 *            An optional {@link ecm.model.Teamspace} object
		 */
		constructor: function(repository, teamspace) {
			if (teamspace) {
				this.id = teamspace.id;
				this.name = teamspace.name;
			} else {
				this.id = repository.id;
				this.name = repository.name;
			}

			this._teamspace = teamspace;
			this.repository = repository;
			this._rootNode = new _ModelObject("templatesRoot", "");

			if (this.showRecents) {
				this.recentNode = new _ModelObject("recent_open_searches", ecm.messages.recent_searches);
			}
		},

		destroy: function() {
			if (this._teamspace) {
				this._teamspace = null;
			}
			if (this.repository) {
				this.repository = null;
			}
			if (this._rootNode) {
				this._rootNode = null;
			}

			if (this.recentNode) {
				this.recentNode = null;
			}
		},

		/**
		 * Applies the given filter to the tree model.
		 * 
		 * @param filter
		 *            Simple filter string to apply.
		 */
		applyFilter: function(filter) {
			this.logEntry("applyFilter");

			this.logDebug("applyFilter", "Filter=" + filter);

			if (filter && filter.length > 0) {
				// Generate a regular expression from the simple filter string, which ignores case.
				this.filter = dojoFilter.patternToRegExp(filter, true);
			} else {
				this.filter = null;
			}
			this.numPages = 1; // reset paging

			this.reload();

			this.logExit("applyFilter");
		},

		/**
		 * Reloads this model.
		 */
		reload: function() {
			this.getChildren(this._rootNode, lang.hitch(this, function(newChildren) {
				this.onChildrenChange(this._rootNode, newChildren); // notify tree to redisplay the parent with these children
				for ( var i in newChildren) {
					this.onChange(newChildren[i]);
				}
			}));
		},

		/**
		 * Reloads the specified node.
		 */
		reloadNode: function(item) {
			if (item) {
				var self = this;
				this.getChildren(item, function(newChildren) {
					self.onChildrenChange(item, newChildren); // notify tree to redisplay the parent with these children
				});
			}
		},

		// =======================================================================
		// Methods for traversing hierarchy

		/**
		 * Calls onItem with the root node of this model.
		 */
		getRoot: function(onItem) {
			onItem(this._rootNode);
		},

		/**
		 * Returns true if the item has or may have children.
		 * 
		 * @param item
		 *            The item to be evaluated
		 */
		mayHaveChildren: function(/* dojo.data.Item */item) {
			if (item == this._rootNode) {
				return true;
			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.SearchTemplateFolder)) {
				return true;
			} else if (item.id == "recent_open_searches") {
				return true;
			} else if (item.id == "opened_searches") {
				return true;
			} else if (!(item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase))) {
				return false;
			}
			return false;
		},

		/**
		 * Calls onComplete with an array of child items of the given parent item.
		 * 
		 * @param parentItem
		 *            The parent of the child items to be loaded
		 * @param onComplete
		 *            A function called with an array of child items of the parent item
		 */
		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			var hideAllSearches = this.noAllSearches;

			// Retrieve from teamspace if we are in the context of a teamspace
			var containerRepo = this._getRepository();

			var self = this;
			var request = null;
			if (parentItem == this._rootNode) {
				var self = this;

				if (!this.repository) {
					onComplete([]);
				} else {

					this.onProcessingStarted(parentItem);
					request = containerRepo.retrieveSearchTemplateFolders(function(searchTemplateFolders) {
						var childItems = [];

						if (!hideAllSearches || searchTemplateFolders.length > 1) {
							if (self.showRecents) {
								childItems.push(self.recentNode);
							}

							// Creates opened searches node
							if (self.showOpenedSearches) {
								if (!self.openedSearchesNode)
									self.openedSearchesNode = new _ModelObject("opened_searches", ecm.messages.opened_searches);
								childItems.push(self.openedSearchesNode);
							}

							for ( var i = 0; i < searchTemplateFolders.length; i++) {
								var searchTemplateFolder = searchTemplateFolders[i];
								childItems.push(searchTemplateFolder);
							}

							onComplete(childItems);
						} else {
							//child request
							self.onProcessingStarted(parentItem);
							var request1 = containerRepo.retrieveSearchTemplates(function(searchTemplates) {
								var maxItems = self.itemsPerPage * self.numPages;
								var childItems = [];
								for ( var i = 0; i < searchTemplates.length; i++) {
									var searchTemplate = searchTemplates[i];
									if (self.filter) {
										var nameMatch = false;
										if (searchTemplate.name) {
											nameMatch = searchTemplate.name.match(self.filter);
										}
										var descMatch = false;
										if (searchTemplate.description) {
											descMatch = searchTemplate.description.match(self.filter);
										}
										if (!nameMatch && !descMatch) {
											continue;
										}
									}
									if (childItems.length == maxItems) {
										childItems.push(self._getMoreLinkItem());
										break;
									}
									self.onChange(searchTemplate);

									if (!searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate))
										childItems.push(searchTemplate);
									else if (self.showCrossRepositorySearches)
										childItems.push(searchTemplate);
								}
								onComplete(childItems);
								//proecessing complete for this specific request; different from the parent request
								self.onProcessingComplete(parentItem);
							});
						}
					});
				}
			} else if (parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.SearchTemplateFolder)) {
				// Retrieve from teamspace if we are in the context of a teamspace with default searches
				var containerRepo = parentItem;
				if (this._teamspace && this._teamspace.searchTemplates instanceof Array && this._teamspace.searchTemplates.length > 0) {
					containerRepo = this._teamspace;
				}

				this.onProcessingStarted(parentItem);

				request = containerRepo.retrieveSearchTemplates(function(searchTemplates) {
					var maxItems = self.itemsPerPage * self.numPages;
					var childItems = [];
					for ( var i = 0; i < searchTemplates.length; i++) {
						var searchTemplate = searchTemplates[i];
						if (self.filter && !self._isFilterMatched(searchTemplate)) {
							continue;
						}
						if (childItems.length == maxItems) {
							childItems.push(self._getMoreLinkItem());
							break;
						}
						self.onChange(searchTemplate);

						if (!searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate))
							childItems.push(searchTemplate);
						else if (self.showCrossRepositorySearches)
							childItems.push(searchTemplate);
					}
					onComplete(childItems);
				});
			} else if (parentItem == this.recentNode) {
				var containerRepo = this._getRepository();
				this.onProcessingStarted(parentItem);
				request = containerRepo.retrieveRecentSearches(function(recentSearches) {
					var childItems = [];
					if (recentSearches && recentSearches.length > 0) {
						for ( var i = recentSearches.length - 1; i >= 0; i--) {
							if (recentSearches[i] && recentSearches[i].isInstanceOf(ecm.model.UnifiedSearchTemplate) && !self.showCrossRepositorySearches)
								continue;

							if (!self.filter || self._isFilterMatched(recentSearches[i]))
								childItems.push(recentSearches[i]);
						}
					}
					onComplete(childItems);
					self.onRecentSearchesLoad(childItems);
				});
			} else if (parentItem == this.openedSearchesNode) {
				var containerRepo = this._getRepository();
				var openedSearches = containerRepo.getOpenedSearches();
				var childItems = [];
				for ( var i in openedSearches) {
					var openedSearch = openedSearches[i];
					if (!self.filter) {
						childItems.push(openedSearch);
					} else if (self._isFilterMatched(openedSearch)) {
						childItems.push(openedSearch);
					}
				}
				onComplete(childItems);
			} else {
				// can't have children or not supported
				onComplete([]);
			}

			if (request) {
				this.own(aspect.after(request, "onRequestCompleted", lang.hitch(this, function() {
					this.onProcessingComplete(parentItem);
				})));
			} else {
				//there was no request to the server ; we surely are done processing at this point
				this.onProcessingComplete(parentItem);
			}
		},

		_isFilterMatched: function(searchTemplate) {
			var matched = false;
			if (searchTemplate.name) {
				matched = searchTemplate.name.match(this.filter);
			}
			if (!matched && searchTemplate.description && this.repository.type == 'od') {
				matched = searchTemplate.description.match(this.filter);
			}

			return matched;
		},

		_getRepository: function() {
			// Retrieve from teamspace if we are in the context of a teamspace
			var containerRepo = this.repository;
			if (this._teamspace) {
				containerRepo = this._teamspace;
			}
			return containerRepo;
		},

		// =======================================================================
		// Inspecting items

		/**
		 * Returns true if "something" is an item in or belonging to this model.
		 * 
		 * @param something
		 *            The object to be evaluated
		 */
		isItem: function(/* anything */something) {
			if (something == this._rootNode || (something != null && something == this.recentNode)) {
				return true;
			}
			if (something && something.isInstanceOf && (something.isInstanceOf(ecm.model.SearchTemplateFolder) || something.isInstanceOf(ecm.model._SearchTemplateBase))) {
				return true;
			}
			return false;
		},

		/**
		 * Not implemented.
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
		 * Returns the identity of an item.
		 * 
		 * @param something
		 *            The item for which to get the identity
		 */
		getIdentity: function(/* dojo.data.Item */item) {
			var id;
			if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				if (item.UUID) { // opened search
					// Use the UUID to prevent opened searches from affecting or being affected
					// (dijit.Tree reuses nodes with the same identity whenever its children are updated, which may result in unintentional gain/loss of the UUID)
					id = item.UUID;
				} else {
					// Generate the UUID to ensure that all instances of the item are affected by changes to the model
					// (UUID member is used to distinguish instances of the same item in the model, thus, it is not guaranteed to be the generated UUID)
					id = item.generateUUID();
				}
			} else {
				id = item.id;
			}
			return id;
		},

		/**
		 * Returns the label for an item.
		 * 
		 * @param item
		 *            The item for which to get the label
		 */
		getLabel: function(/* dojo.data.Item */item) {
			if (this.repository.type == 'od' && item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				var label = item.name;
				var desc = item.description;
				if (desc != null && desc.length > 0)
					label += " - " + desc;

				return label;
			} else {
				return item.name;
			}
		},

		// =======================================================================
		// Write interface

		/**
		 * Not implemented.
		 */
		newItem: function(/* dojo.dnd.Item */args, /* Item */parent, /* int? */insertIndex) {
			// summary:
			// Creates a new item. See `dojo.data.api.Write` for details on args.
			// tags:
			// extension
		},

		/**
		 * Not implemented.
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
		 * Called whenever an item has changed.
		 * 
		 * @param item
		 *            The item that has changed
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
		 * Called whenever a parent item or its children have changed.
		 * 
		 * @param parent
		 *            The parent item that has changed
		 * @param newChildrenList
		 *            An array of newly loaded child items of the given parent item
		 */
		onChildrenChange: function(/* dojo.data.Item */parent, /* dojo.data.Item[] */newChildrenList) {
			// summary:
			// Callback to do notifications about new, updated, or deleted items.
			// tags:
			// callback
		},

		/**
		 * This event is triggered when the model begins processing an item. It is intended to allow tree dijits to
		 * display a progress indicator next to the node for the item.
		 * 
		 * @param item
		 *            The item that is being processed.
		 */
		onProcessingStarted: function(/* dojo.data.Item */item) {
		},

		/**
		 * This event is triggered when the model completes processing an item. It is intended to allow tree dijits to
		 * remove display of progress indicators.
		 * 
		 * @param item
		 *            The item that was being processed.
		 */
		onProcessingComplete: function(/* dojo.data.Item */item) {
		},

		/**
		 * Called whenever recent searches are loaded.
		 * 
		 * @param recentSearches
		 *            An array of recent searches loaded
		 * @since 2.0.2
		 */
		onRecentSearchesLoad: function(recentSearches) {
		},

		/**
		 * Loads the next page of items.
		 */
		loadMore: function() {
			this.numPages++;
			this.reload();
		},

		_getMoreLinkItem: function(parentItem) {
			if (!this._moreLinkItem) {
				var id = "moreLink" + new Date().getTime();
				var name = ecm.messages.more_paging_link;
				this._moreLinkItem = new Item(id, name);
				this._moreLinkItem.isMoreLink = true;
			}
			return this._moreLinkItem;
		}
	});
});

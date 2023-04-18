/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"./_ModelObject",
	"./ContentClass"
], function(declare, lang, aspect, _ModelObject, ContentClass) {

	/**
	 * @name ecm.model.ContentClassTreeModel
	 * @class Represents a tree that is used to display the hierarchy for content classes in a repository. The
	 *        <code>ContentClassTreeModel</code> class implements the Dojo <code>dijit.tree.model</code> class.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ContentClassTreeModel", [
		_ModelObject
	], {
		/** @lends ecm.model.ContentClassTreeModel.prototype */

		/**
		 * Constructs the tree.
		 * 
		 * @param repository
		 *            An instance of {@link ecm.model.Repository} for the repository containing the content classes.
		 * @param hasAll
		 *            If set to <code>true</code>, then the model includes a pseudo class called <code>All</code>.
		 *            In search this parameter is used to get all properties. IBM Content Manager only.
		 * @param filterType
		 *            Filters the items displayed on the tree. Used when getting children for an item.
		 * @param excludedItems
		 *            An array of content class id strings for content classes to exclude.
		 * @param itemList
		 *            Optional parameter to specify a list of items/classes to return, only these items will be shown.
		 *            Value should be an array of item/class IDs.
		 * @param objectStore
		 *            IBM FileNet P8 only. Optional parameter to specify a FileNet P8 object store when the associated
		 *            class is from a FileNet P8 object store that is different from the active repository. This is an
		 *            object valued property where the object store information is stored in the properties
		 *            <code>id</code>, <code>symbolicName</code>, and <code>displayName</code>.
		 */
		constructor: function(repository, hasAll, filterType, excludedItems, itemList, objectStore) {
			this.logDebug("constructor", "repository=" + repository + " hasAll=" + hasAll + " filterType=" + filterType + " excludedItems=" + (excludedItems ? excludedItems.toString() : ""));
			this.id = repository.id;
			this.name = this.id;
			this._hasAll = hasAll;
			this.setRepository(repository);
			this._filterType = filterType;
			this._itemList = itemList;
			if (excludedItems) {
				this.setExcludedItems(excludedItems);
			}
			this.objectStore = objectStore || null;
			this._rootNode = new _ModelObject("contentClassRoot", "");

		},

		/**
		 * Destroys the model. <strong>Note:</strong> This function is required by <code>dijit.tree.model</code>
		 */
		destroy: function() {
			if (this._repository) {
				this._repository = null;
			}
			if (this._rootNode) {
				this._rootNode = null;
			}
			if (this._itemList) {
				this._itemList = null;
			}
			if (this._topLevelItems) {
				this._topLevelItems = null;
			}
		},

		/**
		 * Sets the repository containing the content classes. This is useful in cases where the repository is switched
		 * but the user interface associated with the tree model is not, so the classes should reflect those of the new
		 * repository.
		 * 
		 * @param repository
		 *            An instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			this.logEntry("setRepository", "repository=" + repository);
			this.repository = repository;
			if (this.repository)
				this._hasAll = this._hasAll && repository.allPseudoClassSupported;
			this.onChange(this._rootNode);
			this.logExit("setRepository");
		},

		/**
		 * For CMIS repositories, sets the base class for the tree. Usually this is the <code>cmis:document</code>
		 * class.
		 * 
		 * @param contentClass
		 *            The ContentClass to be set as root.
		 */
		setBaseContentClass: function(contentClass) {
			this.logEntry("setBaseContentClass", "classId=" + contentClass.id);
			// don't do if using a set list of classes (because the the baseclass may be specified in the list)
			if (this.repository.type == "cmis" && !this._itemList) {
				this._rootNode = contentClass;
			}
			this.logExit("setBaseContentClass");
		},

		/**
		 * For FileNet P8 repositories, sets the base calls for the tree. Usually this is the <code>Document</code>
		 * class.
		 * 
		 * @param className
		 *            The identifier of the ContentClass for the class.
		 * @param classLabel
		 *            The displayable name for the class.
		 */
		setBaseClass: function(className, classLabel) {
			this.logEntry("setBaseClass", "className=" + className + " classLabel=" + classLabel);
			// don't do if using a set list of classes (because the the baseclass may be specified in the list)
			if ((this.repository.type == "p8" || this.repository.type == "cmis") && !this._itemList) {
				var baseClass = this.repository.getContentClass(className, this.objectStore);
				if (classLabel && classLabel != baseClass.name) {
					baseClass.name = classLabel;
				}
				this._rootNode = baseClass;
			}
			this.logExit("setBaseClass");
		},

		/**
		 * Specifies a list of classes to exclude. These classes will not appear in the tree model.
		 * 
		 * @param excludedItems
		 *            An array of content class ID strings for content classes to exclude.
		 */
		setExcludedItems: function(excludedItems) {
			this.logEntry("setExcludedItems", (excludedItems ? excludedItems.toString() : ""));
			this._excludedItems = excludedItems;
			this.logExit("setExcludedItems");
		},

		// =======================================================================
		// Methods for traversing hierarchy

		getRoot: function(onItem) {
			onItem(this._rootNode);
		},

		/**
		 * Returns <code>true</code> if the item might have children.
		 * 
		 * @param item
		 *            The item to test.
		 * @return Boolean indicating if the item might have children.
		 */
		mayHaveChildren: function(item) {
			if (item == this._rootNode) {
				return true;
			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.ContentClass)) {
				if ((this.repository.type == "p8" || this.repository.type == "cmis") && !item.pseudoClass && !this._itemList) {
					return true;
				}
			}
			return false;
		},

		/**
		 * @private
		 */
		_isExcludedItem: function(item) {
			var isExcluded = false;
			if (this._excludedItems) {
				for ( var i = 0; i < this._excludedItems.length; i++) {
					if (item.id == this._excludedItems[i]) {
						isExcluded = true;
						break;
					}
				}
			}
			//if (!isExcluded && (this.repository.type == "cm") && (item.id == "ICM$FOLDER")) {
			//	isExcluded = true;
			//}
			this.logDebug("_isExcludedItem", "excluding item " + item + ": " + isExcluded);
			return isExcluded;
		},

		/**
		 * @private
		 */
		_isIncludedItem: function(item) {
			var isincluded = true;
			if (this._itemList) {
				var itemarr = this._itemList;
				isincluded = false;
				for (i in itemarr) {
					if (item.id == itemarr[i]) {
						isincluded = true;
						break;
					}
				}
			}
			this.logDebug("_isIncludedItem", "including item " + item + ": " + isincluded);
			return isincluded;
		},

		/**
		 * Obtains the children of a given item.
		 * 
		 * @param parentItem
		 *            The item from which to return the children.
		 * @param onComplete
		 *            A function invoked when the children have been obtained. It is passed an array containing the
		 *            child items of the parent item.
		 */
		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			var self = this;
			if (parentItem == this._rootNode) {
				if (!this.repository) {
					onComplete([]);
				} else {
					var cb = function(contentClassFolders) {
						var childItems = [];
						if (self._hasAll) {
							var allClass = new ContentClass({
								id: "$common",
								name: ecm.messages.search_class_all_pseudo,
								repository: self.repository,
								pseudoClass: true
							});
							childItems.push(allClass);
						}
						for ( var i = 0; i < contentClassFolders.length; i++) {
							var contentClassFolder = contentClassFolders[i];
							if (self.repository.type == "p8" || self.repository.type == "cmis") {
								// p8 the include itemList check is done in the mid-tier, no need to check here
								if (!self._isExcludedItem(contentClassFolder)) {
									childItems.push(contentClassFolder);
								}
							} else {
								if ((self._itemList && self._isIncludedItem(contentClassFolder)) || !self._itemList) {
									if (!self._isExcludedItem(contentClassFolder)) {
										childItems.push(contentClassFolder);
									}
								}
							}

						}
						// cache the top level items (for filtering)
						self._topLevelItems = childItems;

						onComplete(childItems);
					};
					if (this.repository.type == "p8" || this.repository.type == "cmis") {
						if (!this._itemList) {
							var request = parentItem.retrieveSubClasses(cb, this._filterType);
						} else {
							// only fetching a specified list of classes, for P8 this has to be done in the request
							// (because of subclasses), for CM can do this on the client
							var request = this.repository.retrieveContentClassList(cb, this._itemList);
						}
					} else {
						var request = this.repository.retrieveContentClasses(cb, this._filterType);
					}
				}
			} else if (parentItem.isInstanceOf && parentItem.isInstanceOf(ecm.model.ContentClass) && (this.repository.type == "p8" || this.repository.type == "cmis")) {
				var request = parentItem.retrieveSubClasses(function(contentClasses) {
					var childItems = [];
					for ( var i = 0; i < contentClasses.length; i++) {
						var contentClass = contentClasses[i];
						if (!self._isExcludedItem(contentClass)) {
							childItems.push(contentClass);
						}
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
		 * Returns <code>true</code> if the object is modeled by this tree model.
		 * 
		 * @param something
		 *            An object to test.
		 */
		isItem: function(something) {
			if (something == this._rootNode || (something && something.isInstanceOf && something.isInstanceOf(ecm.model.ContentClass))) {
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
		 * Returns the identity for an item.
		 * 
		 * @param item
		 *            The item for which to provide an identity.
		 */
		getIdentity: function(item) {
			return item.id;
		},

		/**
		 * Returns a displayable name for an item.
		 * 
		 * @param item
		 *            The item for which to provide a displayable name.
		 * @return String name for the item.
		 */
		getLabel: function(item) {
			return item.name;
		},

		// =======================================================================
		// Write interface

		/**
		 * This method is not implemented. See dojo.data.api.Write for details.
		 */
		newItem: function(args, parent, insertIndex) {
		},

		/**
		 * This method is not implemented. see dojo.data.api.Write for details.
		 */
		pasteItem: function(/* Item */childItem, /* Item */oldParentItem, /* Item */newParentItem, /* Boolean */bCopy) {
		},

		/**
		 * Will cause a re-retrieval of the parent folder.
		 */
		reload: function(parent, callback) {
			this.logEntry("reload");
			var _this = this;
			this.getChildren(parent, function(newChildren) { // re-get the folder's children
				_this.onChildrenChange(parent, newChildren); // notify tree to redisplay the parent with these children
				if (callback) {
					callback();
				}
			});
			this.logExit("reload");
		},

		/**
		 * @private
		 */
		_filter: function(filterData) {
			this.logEntry("filter");
			// apply a filter to the list of items, we are only filtering the top level items for now,
			// (CM shows a flat list of items)

			// use the cached list of top level items, if available
			// in search the call to getContentClasses was never caching the returned list because it passes
			// a value for filterType so each time this filter was executed it was a round trip, so we'll
			// cache the list here just for filtering
			if (this._topLevelItems) {
				this._doFilter(this._topLevelItems, filterData);
			} else {
				var _this = this;
				this.getChildren(this._rootNode, function(newChildren) {
					_this._doFilter(newChildren, filterData);
				});
			}
			this.logExit("filter");
		},

		/**
		 * @private apply the filter data to the list if child items
		 */
		_doFilter: function(children, filterData) {
			this.logEntry("filter");
			var filteredChildren = [];
			for (i in children) {
				var itemName = children[i].name.toLowerCase();
				if (itemName.indexOf(filterData.toLowerCase()) >= 0) {
					filteredChildren.push(children[i]);
				}
			}
			this.onChildrenChange(this._rootNode, filteredChildren); // notify tree to redisplay the parent with these children
			this.logExit("filter");
		},

		/**
		 * Removes the pseudo <code>All</code> class from the list of classes.
		 */
		removeAllClass: function() {
			if (this._topLevelItems && this._topLevelItems.length > 0 && this._topLevelItems[0].id == "$common") {
				this._topLevelItems.shift();
				this.onChildrenChange(this._rootNode, this._topLevelItems); // notify tree to redisplay the parent with these children
			}
		},

		/**
		 * Adds the pseudo <code>All</code> class from the list of classes.
		 */
		addAllClass: function() {
			if (this._hasAll) {
				if (this._topLevelItems && this._topLevelItems.length > 0 && this._topLevelItems[0].id != "$common") {
					var allClass = new ContentClass({
						id: "$common",
						name: ecm.messages.search_class_all_pseudo,
						repository: this.repository,
						pseudoClass: true
					});
					this._topLevelItems.unshift(allClass);
					this.onChildrenChange(this._rootNode, this._topLevelItems); // notify tree to redisplay the parent with these children
				}
			}
		},

		// =======================================================================
		// Callbacks

		/**
		 * Callback whenever an item has changed, so that Tree can update the label, icon, and so on. Note that changes
		 * to an item's children or parent(s) will trigger an onChildrenChange() so you can ignore those changes here.
		 * 
		 * @param item
		 *            A <code>dojo.data.Item</code> object.
		 */
		onChange: function(item) {
		},

		/**
		 * A callback function that is called to send notifications about new, updated, or deleted items.
		 * 
		 * @param parent
		 *            A <code>dojo.data.Item</code>.
		 * @param newChildrenList
		 *            An array of <code>dojo.data.Item</code> objects.
		 */
		onChildrenChange: function(parent, newChildrenList) {
		},

		/**
		 * This event is triggered when the model begins processing an item. It is intended to allow tree widgets to
		 * display a progress indicator next to the node for the item.
		 * 
		 * @param item
		 *            Item to which processing is started.
		 */
		onProcessingStarted: function(item) {
		},

		/**
		 * This event is triggered when the model completes processing an item. It is intended to allow tree widgets to
		 * remove display of progress indicators.
		 * 
		 * @param item
		 *            Item to which processing is completed.
		 */
		onProcessingComplete: function(item) {
		}
	});
});

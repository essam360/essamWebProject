/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/array",
	"dojo/aspect",
	"ecm/model/_ModelObject",
	"ecm/model/Desktop",
	"ecm/model/AsyncTask",
	"ecm/model/AsyncTaskResultSet",
	"ecm/model/TaskCategoryConfiguration"
], function(declare, lang, connect, array, aspect, ModelObject, Desktop, AsyncTask, AsyncTaskResultSet, CategoryTask) {

	/**
	 * @name ecm.model.TaskTreeModel
	 * @class Represents a tree that is used to display tasks hierarchy. This class implements the Dojo dijit.tree.model
	 *        class.
	 * @augments ecm.model._ModelObject
	 */
	var TaskTreeModel = declare("ecm.model.TaskTreeModel", [
		ModelObject
	], {
		/** @lends ecm.model.TaskTreeModel.prototype */

		/**
		 * The categorization of types of asynchronous tasks that will be used for display. Users can set a different
		 * categorization to show a different set of task types.
		 */
		categorization: "Navigator",

		/**
		 * Constructs the tree.
		 */
		constructor: function() {
			this.id = "TaskNavigation";
			this.name = "TaskNavigation";
			this._loadedItems = {};
			this.rootObject = new ModelObject("rootTaskNavigation", "rootTaskNavigation");

			aspect.after(Desktop.taskManager, "onAsyncTaskItemAdded", lang.hitch(this, function(modelObject) {
				this._onDesktopChanged(modelObject);
			}));
			this._desktopChangeHandler = connect.connect(Desktop, "onChange", this, "_onDesktopChanged");
		},

		_onDesktopChanged: function(modelObject) {
			if (this.recurringCategoryTask && this.recurringCategoryTask.opened == true) {
				this.reload(this.recurringCategoryTask);
			}
		},

		reload: function(node) {
			//refresh the recurring task list and reload the object
			this.getChildren(parent, lang.hitch(this, function(newChildren) { // re-get the folder's children
				this.onChildrenChange(parent, newChildren); // notify tree to redisplay the parent with these children
				for ( var i in newChildren) {
					this.onChange(newChildren[i]);
				}
			}));
		},

		_repostioryChanged: function(repository) {
			this._onDesktopChanged(repository);
		},

		destroy: function() {
			this.taskManagerHandler.remove();
			this.desktopHandler.remove();
		},

		isLoaded: function(item) {
			return this._loadedItems[this.getIdentity(item)] ? true : false;
		},

		getRoot: function(onItem) {
			onItem(this.rootObject);
		},

		mayHaveChildren: function(/* dojo.data.Item */item) {
			if (item && item.id == "recurringTasks")
				return true;
			else
				return false;
		},

		fetchNextPage: function(/* dojo.data.ResultSet */pagedResultSet, /* Item */parentItem, /* function */onComplete) {
			// fetch more subnotes for this node
			this.onProcessingStarted(parentItem);
			pagedResultSet.retrieveNextPage(lang.hitch(this, function() {
				this.replaceChildren(parentItem, pagedResultSet);
				this.onProcessingComplete(parentItem);
				if (onComplete) {
					onComplete();
				}
			}));
		},

		replaceChildren: function(/* dojo.data.Item */parentItem, /* ResultSet */results) {
			var childItems = [].concat(results.getItems());
			this._addPageForwardItem(childItems, results, parentItem); // added
			this.onChildrenChange(parentItem, childItems); // notify the tree to refresh the parent item with a new set of
		},

		getChildren: function(/* dojo.data.Item */parentItem, /* function(items) */onComplete) {
			this.onProcessingStarted(parentItem);

			if (parentItem == this.rootObject) {
				var childItems = [];

				for ( var i in Desktop.taskManager.taskPaneLayoutConfiguration[this.categorization].navigationTreeCategories) {
					var category = Desktop.taskManager.taskPaneLayoutConfiguration[this.categorization].navigationTreeCategories[i];
					if (category && category.id == "recurringTasks")
						this.recurringCategoryTask = category;
					childItems.push(category);
				}

				this.rootObject.children = childItems;
				onComplete(childItems);
			}

			if (parentItem && parentItem.id == "recurringTasks") {
				parentItem.opened = true;
				var params = {};
				params["isRecurring"] = true;
				params["parent"] = this.categorization;

				Desktop.taskManager.retrieveAsyncTasks(params, lang.hitch(this, function(response) {
					response.parentFolder = parentItem;
					response.parent = parentItem;
					response.isRecurring = true;
					response.parentFilter = this.categorization;
					var resultSet = new AsyncTaskResultSet(response);
					var childItems = [].concat(resultSet.items);
					this._addPageForwardItem(childItems, resultSet, parentItem);
					this._loadedItems[this.getIdentity(parentItem)] = parentItem;
					this.onProcessingComplete(parentItem);
					onComplete(childItems);
				}));
			}
		},

		_addCategoryItem: function(item) {
			item.isTaskRootNode = true;
			return item;
		},

		_addPageForwardItem: function(/* Item array */children, /* ResultSet */resultSet, /* Item */parentItem) {
			var continuable = resultSet.hasContinuation();
			if (continuable) {
				var id = "continuation_" + new Date().getTime();
				var moreLink = new ModelObject(id, ecm.messages.more_paging_link);
				moreLink.continuationData = resultSet.continuationData;
				moreLink.pagedResultSet = resultSet;
				moreLink.isMoreLink = true;
				children.push(moreLink);

				//moreLink reference on the parentItem to find it more quickly
				parentItem.moreLink = moreLink;
				moreLink.parent = parentItem;
			}
		},

		isItem: function(/* anything */something) {
			return true;
		},

		fetchItemByIdentity: function() {
			// summary:
			// Given the identity of an item, this method returns the item that has
			// that identity through the onItem callback. Conforming implementations
			// should return null if there is no item with the given identity.
			// Implementations of fetchItemByIdentity() may sometimes return an item
			// from a local cache and may sometimes fetch an item from a remote server.
			// tags:
			// extension
		},

		getIdentity: function(/* item */item) {
			return item.id;
		},

		getLabel: function(/* dojo.data.Item */item) {
			return item.name;
		},

		reload: function(parent) {
			// summary:
			// Will cause a reretrieval of the parent folder
			this.onProcessingStarted(parent);

			this.getChildren(parent, lang.hitch(this, function(newChildren) { // re-get the folder's children
				this.onChildrenChange(parent, newChildren); // notify tree to redisplay the parent with these children
				for ( var i in newChildren) {
					this.onChange(newChildren[i]);
				}
			}));
		},

		// =======================================================================
		// Callbacks

		onChange: function(/* dojo.data.Item */item) {
			// summary:
			// Callback whenever an item has changed, so that Tree
			// can update the label, icon, etc. Note that changes
			// to an item's children or parent(s) will trigger an
			// onChildrenChange() so you can ignore those changes here.
			// tags:
			// callback
		},

		onChildrenChange: function(/* dojo.data.Item */parent, /* dojo.data.Item[] */newChildrenList) {
			// summary:
			// Callback to do notifications about new, updated, or deleted items.
			// tags:
			// callback
		},

		/**
		 * This event is triggered when the model begins processing an item. It is intended to allow tree dijits to
		 * display a progress indicator next to the node for the item.
		 */
		onProcessingStarted: function(item) {
		},

		/**
		 * This event is triggered when the model completes processing an item. It is intended to allow tree dijits to
		 * remove display of progress indicators.
		 */
		onProcessingComplete: function(item) {
		}

	});
	return TaskTreeModel;
});

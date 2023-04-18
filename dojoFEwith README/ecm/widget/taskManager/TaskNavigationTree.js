/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/event",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/keys",
	"dojo/window",
	"dijit/registry",
	"ecm/widget/Tree",
	"ecm/model/Desktop",
	"ecm/model/AsyncTask",
	"ecm/widget/ActionMenu",
	"ecm/model/TaskTreeModel"
], function(declare, event, lang, construct, domGeom, domClass, keys, window, registry, Tree, Desktop, AsyncTask, ActionMenu, TaskTreeModel) {

	/**
	 * @name ecm.widget.tasksManager.TaskNavigationTree
	 * @class The navigation tree that appears on the left-hand side of the task pane. It is responsible for displaying
	 *        various categories of tasks. It will also lists all recurring tasks available as well.
	 * @augments dijit.Tree
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.TaskNavigationTree", [
		Tree
	], {
		/** @lends ier.widget.tasks.TaskNavigationTree.prototype */

		showMissingFolderMessage: false,

		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmFolderTree"); // not really a folder tree, but use same styles
			this.connect(this.model, "onProcessingComplete", "_onProcessingComplete");
			this.connect(this, "onClick", "_onTreeClick");
		},

		reload: function() {
			this.model.reload(this.model.rootObject);
		},

		/**
		 * Handle when the model has completed processing an item.
		 * 
		 * @param item
		 *            The item.
		 */
		_onProcessingComplete: function(item) {
			// This returns the tree node's progress indicator back normal if errors occur during retrieve of children
			var node = this.getNodesByItem(item)[0];
			if (node != null) {
				node.unmarkProcessing();
				node.state = "UNCHECKED";
				node._expandNodeDeferred = null;
			}
		},

		/**
		 * Selects the provided item
		 */
		selectItem: function(item) {
			this.set('selectedItems', [
				item
			]);
			var itemNodes = this.getNodesByItem(item);
			var node = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
			if (node) {
				window.scrollIntoView(node.rowNode);
			}
			this.onClick(item, node);
		},

		/**
		 * @private Called when the tree is clicked.
		 */
		_onTreeClick: function(item, node, evt) {
			if (item.continuationData) {
				node.labelNode.innerHTML = "<span class='dijitContentPaneLoading'></span>";

				//wipe out the more link reference on the parent node since it's being expanded right now
				if (item.parent.moreLink) {
					delete item.parent.moreLink;
				}

				// make sure after the request comes back we scroll back to the last node
				var onComplete = lang.hitch(this, function() {
					window.scrollIntoView(parent.lastChild);
					this.onPagingComplete();
				});
				this.onPagingStart();
				this.model.fetchNextPage(item.pagedResultSet, item.parent, onComplete);
			} else {
				this.onItemSelected(item, node);
			}
		},

		/**
		 * Event indicating item opened.
		 * 
		 * @param item
		 *            The item to open.
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object that contains the item's result set.
		 */
		onOpenItem: function(item, resultSet) {
		},

		/**
		 * Event fired indicating the item is selected.
		 * 
		 * @param item
		 *            The item that is selected.
		 * @param node
		 *            The node that is selected.
		 */
		onItemSelected: function(item, node) {
		},

		/**
		 * Event fired indicating the paging start.
		 */
		onPagingStart: function() {
		},

		/**
		 * Event fired indicating paging complete.
		 */
		onPagingComplete: function() {
		},

		/**
		 * @private Event fired when the items change.
		 * @param modelObjects
		 *            The modelObjects that changed.
		 */
		_onChangeItems: function(modelObjects) {

		},

		/**
		 * @private Returns the tree row node for the input node.
		 * @param inputNode
		 *            The input node.
		 */
		_getTreeRowNode: function(inputNode) {
			var node = inputNode;
			while (node) {
				if (domClass.contains(node, "dijitTreeRow")) {
					break;
				}
				node = node.parentElement;
			}
			return node ? node : inputNode;
		},

		/**
		 * Event fired when refresh.
		 * 
		 * @param items
		 *            The items.
		 */
		onRefresh: function(items) {
		},

		/**
		 * Returns the icon class for the specified item.
		 * 
		 * @param item
		 *            The item in the tree.
		 * @param opened
		 *            Boolean indicating if opened.
		 */
		getIconClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			var iconClass = null;

			if (item instanceof AsyncTask && item.isTaskRecurring()) {
				iconClass = "asyncTaskRecurringIcon";
			} else {
				iconClass = "asyncTasksIcon";

				if (item.id == "inProgressTasks") {
					return "asyncTaskStatusInProgressIcon";
				} else if (item.id == "completedTasks") {
					return "asyncTaskStatusCompletedIcon";
				} else if (item.id == "scheduledTasks") {
					return "asyncTaskStatusScheduledIcon";
				} else if (item.id == "disabledTasks") {
					return "asyncTaskStatusPausedIcon";
				} else if (item.id == "failedTasks") {
					return "asyncTaskStatusFailedIcon";
				} else if (item.id == "recurringTasks") {
					return "asyncTaskRecurringIcon";
				} else if (item.isMoreLink) {
					iconClass = "asyncTaskRecurringIcon";
				}
			}

			return iconClass;
		}
	});
});

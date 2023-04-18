/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"ecm/model/Desktop",
	"ecm/model/AsyncTask",
	"ecm/model/AsyncTaskInstance",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Breadcrumb",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/modules/TaskFilter",
	"ecm/widget/listView/modules/TaskPaneToolbar",
	"ecm/widget/taskManager/TasksListingPane",
	"dojo/text!./templates/TasksListingPane.html",
	"ecm/widget/listView/ContentList" // in template
], function(declare, array, lang, Desktop, AsyncTask, AsyncTaskInstance, Bar, Breadcrumb, RowContextMenu, TaskFilter, TaskPaneToolbar, TasksListingPane, templateString) {

	/**
	 * @name ecm.widget.taskManager.RecurringTasksListingPane
	 * @class The pane will be responsible for handling recurring tasks. The pane will initially list all available
	 *        recurring tasks in the ECM TaskManager. If the user opens a recurring task, a listing of all
	 *        {@link ecm.model.AsyncTaskInstance} of that recurring task will be presented. A bread crumb will also be
	 *        present for users to navigate back to the parent recurring task. Users can then navigate through each task
	 *        instance (runs of the original task) and view information about those task instances.
	 * @augments ecm.widget.taskManager.TasksListingPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.RecurringTasksListingPane", [
		TasksListingPane
	], {

		templateString: templateString,
		widgetsInTemplate: true,

		/**
		 * Creates and initializes this pane.
		 */
		postCreate: function() {
			this.inherited(arguments);

			this.connect(Desktop.taskManager, "onAsyncTaskItemOpened", "openItem");
		},

		/**
		 * Obtains the content list modules for this pane
		 */
		getContentListModules: function() {
			var array = [];

			array.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: TaskPaneToolbar,
								categorization: this.taskCategoryConfiguration ? this.taskCategoryConfiguration.categorization : null
							},
							{
								moduleClass: TaskFilter
							}
						]
					],
					[
						[
							{
								moduleClass: Breadcrumb,
								includeRootItemName: false
							}
						]
					]
				]
			});

			return array;
		},

		/**
		 * Event fired when there's a change in resultset
		 */
		onChangeResultSet: function(resultSet) {
			this._addInitialBreadCrumb(resultSet);
		},

		_addInitialBreadCrumb: function() {
			var parent = null;
			this.breadCrumb = this.taskContentList.getContentListModule("breadcrumb");
			if (this.breadCrumb) {
				if (this.parentFolder && !(this.parentFolder instanceof AsyncTask)) {
					parent = this.taskContentList.getResultSet().parentFolder;
				} else
					parent = this.taskCategoryConfiguration;

				this.breadCrumb.getBreadcrumb().setData([
					{
						label: parent.name,
						item: parent
					}
				]);
			}
		},

		/**
		 * Opens a task within this recurring listing pane. If the item is a recurring task, the task instances will be
		 * displayed and the bread crumb will be updated.
		 * 
		 * @param item
		 *            The recurring task that will be opened
		 * @param resultSet
		 *            The result set that this recurring task will be a part of.
		 */
		openItem: function(item, resultSet) {
			var task = item instanceof AsyncTask ? item : item.parent;
			if (task instanceof AsyncTask && task.isTaskRecurring()) {
				resultSet.toolbarDef = this.toolbarDef;
				this.taskContentList.setResultSet(resultSet);

				this.breadCrumb = this.taskContentList.getContentListModule("breadcrumb");
				if (this.breadCrumb) {
					var breadcrumbData = [];
					var path = [];
					path.push(this.recurringTaskTreeNode);
					path.push(item);

					for ( var i = 0; i < path.length; i++) {
						breadcrumbData.push({
							label: path[i].name,
							item: path[i]
						});
					}

					this.breadCrumb.getBreadcrumb().setData(breadcrumbData);
				}

				if (item instanceof AsyncTaskInstance) {
					var grid = this.taskContentList.grid;
					var id = grid.store.getIdentity(item);
					var index = grid.model.idToIndex(id);
					if (index != undefined && index > -1) {
						var gridItem = grid.row(index).item();
						if (gridItem == item) {
							grid.select.row.selectById(id);
						}
					}
				}

				this.onOpenItem(item, resultSet);
			}
		},

		/**
		 * Event invoked when a task is opened
		 * 
		 * @param item
		 *            The recurring task that is being opened
		 * @param resultSet
		 *            The resultset this recurring task is a part of.
		 */
		onOpenItem: function(item, resultSet) {

		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/model/Desktop",
	"ecm/model/AsyncTaskResultSet",
	"ecm/LoggerMixin",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Breadcrumb",
	"ecm/widget/listView/modules/TaskFilter",
	"ecm/widget/listView/modules/TaskPaneToolbar",
	"dojo/text!./templates/TasksListingPane.html",
	"ecm/widget/listView/ContentList" // in template
], function(declare, array, lang, TemplatedMixin, WidgetsInTemplateMixin, ContentPane, Desktop, AsyncTaskResultSet, LoggerMixin, RowContextMenu, Bar, Breadcrumb, TaskFilter, TaskPaneToolbar, templateString) {

	/**
	 * @name ecm.widget.tasksManager.TasksListingPane
	 * @class A pane for displaying a list of asynchronous tasks. It makes use of
	 *        {@link ecm.widget.listView.ContentList} to display them. It also contains a toolbar with a filter
	 *        capability to find tasks quicker. filtering capabilities.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.TasksListingPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		LoggerMixin
	], {

		templateString: templateString,
		widgetsInTemplate: true,

		/**
		 * the toolbar definition for the content list toolbar
		 */
		toolbarDef: "AsyncTaskToolbar",

		taskCategoryConfiguration: null,

		postCreate: function() {
			this.inherited(arguments);
			this.setupTaskGrid();
		},

		/**
		 * Obtains the content list grid modules for this pane
		 */
		getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			return array;
		},

		/**
		 * Obtains the content list modules for this pane.
		 */
		getContentListModules: function() {
			var array = [];

			array.push({
				moduleClass: Bar,
				top: [
					[ // Table
						[ // Row 
							{
								moduleClass: TaskPaneToolbar,
								categorization: this.taskCategoryConfiguration ? this.taskCategoryConfiguration.categorization : null
							},
							{
								moduleClass: TaskFilter
							}
						]
					]
				]
			});
			return array;
		},

		/*
		 * Sets up the grid by setting the various content list modules
		 */
		setupTaskGrid: function() {
			var modules = this.getContentListModules();
			if (modules)
				this.taskContentList.setContentListModules(modules);
			this.taskContentList.setGridExtensionModules(this.getContentListGridModules());
			this.taskContentList.multiSelect = true;
		},

		reset: function() {
			this.taskCategoryConfiguration = null;

			if (this.taskContentList) {
				this.taskContentList.reset();
				this.setupTaskGrid();
			}
		},

		/**
		 * Retrieves tasks for the current listing pane
		 */
		retrieveTasks: function(onComplete) {
			var params = {};
			var userId = Desktop.taskManager.showCurrentUserOnly ? Desktop.getRepository(Desktop.defaultRepositoryId).userId : null;

			params["userId"] = userId;
			params["taskType"] = this.taskCategoryConfiguration.type;
			params["taskStatus"] = this.taskCategoryConfiguration.status && this.taskCategoryConfiguration.status == "all" ? "" : this.taskCategoryConfiguration.status;
			params["isRecurring"] = this.taskCategoryConfiguration.isRecurring;
			params["parent"] = this.taskCategoryConfiguration.categorization;
			params["nameFilter"] = this.taskCategoryConfiguration.nameFilter;
			this.setupTaskGrid();

			Desktop.taskManager.retrieveAsyncTasks(params, lang.hitch(this, function(response) {
				response.repository = Desktop.getRepository(Desktop.defaultRepositoryId);
				response.parentFolder = this.taskCategoryConfiguration;
				var resultSet = new AsyncTaskResultSet(response);
				resultSet.toolbarDef = this.toolbarDef;
				resultSet.taskType = this.taskCategoryConfiguration.type;
				resultSet.taskStatus = this.taskCategoryConfiguration.status;
				resultSet.isRecurring = this.taskCategoryConfiguration.isRecurring;
				resultSet.parentFilter = this.taskCategoryConfiguration.categorization;
				resultSet.nameFilter = this.taskCategoryConfiguration.nameFilter;
				this.taskContentList.setResultSet(resultSet);
				this.setupTaskFilterConnections();
				this.onChangeResultSet(resultSet);
				this.taskCategoryConfiguration.contentListResultSet = resultSet;
				if (onComplete)
					onComplete(resultSet);
			}));
		},

		/**
		 * Event fired when there's a change in resultset
		 */
		onChangeResultSet: function(resultSet) {

		},

		/**
		 * refresh the content list
		 */
		refresh: function() {
			this.taskContentList.getResultSet().refresh();
		},

		/**
		 * Connect to the various task filter connections
		 */
		setupTaskFilterConnections: function() {
			if (this._clearTaskFilterHandler) {
				this.disconnect(this._clearTaskFilterHandler);
			}

			if (this._onTaskFilterSelectChangeHandler) {
				this.disconnect(this._onTaskFilterSelectChangeHandler);
			}

			if (this._onTaskFilterHandler) {
				this.disconnect(this._onTaskFilterHandler);
			}

			if (this._onUserCheckboxClickedHandler) {
				this.disconnect(this._onUserCheckboxClickedHandler);
			}

			if (this._onResultSetChangedHandler) {
				this.disconnect(this._onResultSetChangedHandler);
			}

			this.taskFilterModule = this.taskContentList.getContentListModule("taskFilter");

			this._onTaskFilterHandler = this.connect(this.taskFilterModule, "onTextFilter", function(value) {
				if (this.taskCategoryConfiguration.nameFilter != value) {
					if (value != null || value != "")
						this.taskCategoryConfiguration.nameFilter = value;
					else
						this.taskCategoryConfiguration.nameFilter = null;

					this.retrieveTasks();
				}
			});

			this._onTaskFilterSelectChangeHandler = this.connect(this.taskFilterModule, "onFilterSelectChange", function(value) {
				if (this.taskCategoryConfiguration) {
					this.taskCategoryConfiguration.type = value;
					this.retrieveTasks();
				}
			});

			this._onUserCheckboxClickedHandler = this.connect(this.taskFilterModule, "onUserCheckboxClicked", function(event) {
				if (event && event.currentTarget && event.currentTarget.checked == true) {
					Desktop.taskManager.showCurrentUserOnly = true;
				} else {
					Desktop.taskManager.showCurrentUserOnly = false;
				}

				this.retrieveTasks();
			});

			this._onResultSetChangedHandler = this.connect(this.taskCOntentList, "onSetResultSet", "onChangeResultSet");
		}
	});
});

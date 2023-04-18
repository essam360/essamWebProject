/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/data/util/sorter",
	"dojo/_base/lang",
	"./Request",
	"./ResultSet"
], function(declare, sorter, lang, Request, ResultSet) {

	/**
	 * @name ecm.model.AsyncTaskResultSet
	 * @class Represents a result set for a list of {@link ecm.model.AsyncTask} or {@link ecm.model.AsyncTaskInstances}
	 *        (available only for recurring tasks}.
	 * @augments ecm.model.ResultSet
	 * @since 2.0.2
	 */
	return declare("ecm.model.AsyncTaskResultSet", [
		ResultSet
	], {

		setType: "asyncTask",

		/**
		 * The authenticating repository is used for all task's result set. Actions and context menus rely on a
		 * repository being present.
		 */
		repository: null,

		/**
		 * An int value hold the sort column index. The sortIndex is initially set to Start Time column
		 */
		sortIndex: 6,

		/**
		 * The current column sort direction. It will be set to ascending.
		 */
		sortDirection: -1,

		/**
		 * The parent filter for retrieving tasks
		 */
		parentFilter: null,

		/**
		 * The name filter for retrieving tasks
		 */
		nameFilter: null,

		/**
		 * The original parameters used to retrieve results for this result set.
		 */
		originalParameters: null,

		/**
		 * @private
		 */
		constructor: function() {
			this.repository = ecm.model.desktop.getAuthenticatingRepository();

			if (this.setType == "asyncTask") {
				//redefine the values again so it will be picked up correctly.
				this.sortDirection = -1;
				this.sortIndex = 6;
			} else if (this.setType == "asyncTaskInstance") {
				this.sortDirection = -1;
				this.sortIndex = 5;
			} else if (this.setType == "audit") {
				this.sortDirection = -1;
				this.sortIndex = 4;
			}
		},

		/**
		 * Returns the menu type to be used for the actions menu.
		 * 
		 * @param items
		 *            The items to retrieve the context menu for.
		 */
		getActionsMenuItemsType: function(items) {
			if (items) {
				if (items.length > 1)
					//only allow delete
					return "MultipleAsyncTasksContextMenu";
				else {
					var item = items[0];
					if (item) {
						var asyncTaskType = item.getAsyncTaskType();
						if (asyncTaskType) {
							if (item instanceof ecm.model.AsyncTaskInstance) {
								if (asyncTaskType.asyncTaskInstanceContextMenuDefinitions)
									return asyncTaskType.asyncTaskInstanceContextMenuDefinitions[item.attributes.status];
								else
									return "AsyncTaskInstanceContextMenu";
							} else {
								if (asyncTaskType.asyncTaskContextMenuDefinitions) {
									return asyncTaskType.asyncTaskContextMenuDefinitions[item.attributes.status];
								} else
									return "AsyncTaskContextMenu";
							}
						} else
							return "AsyncTaskContextMenu";
					}
				}
			}
		},

		/**
		 * Build the list of items from JSON, will create {@link ecm.model.Item} or derivations of Item.
		 * 
		 * @param jsonItemsArray
		 *            A Json object holding the list of items to construct
		 * @param templates
		 *            A Json object holding the list of templates
		 */
		buildItems: function(/* Array */jsonItemsArray, templates) {

			if (this.setType == "asyncTask") {
				var result = [];
				for ( var i in jsonItemsArray) {
					var itemJSON = jsonItemsArray[i];
					var item = ecm.model.AsyncTask.createFromJSON(itemJSON);
					item.resultSet = this;
					item.parent = this.parentFolder;
					result.push(item);
				}

				return result;
			} else if (this.setType == "asyncTaskInstance") {
				var result = [];
				for ( var i in jsonItemsArray) {
					var itemJSON = jsonItemsArray[i];
					var item = ecm.model.AsyncTaskInstance.createFromJSON(itemJSON);
					item.resultSet = this;
					item.parent = this.parentFolder;
					result.push(item);
				}

				return result;
			} else if (this.setType == "audit") {
				var result = [];
				for ( var i in jsonItemsArray) {
					var itemJSON = jsonItemsArray[i];
					var item = ecm.model.AsyncTaskAudit.createFromJSON(itemJSON);
					item.resultSet = this;
					item.parent = this.parentFolder;
					result.push(item);
				}

				return result;
			} else
				return this.inherited(arguments);
		},

		/**
		 * Returns boolean value true if continuation data has been defined on this result set.
		 */
		hasContinuation: function() {
			return this.continuationData && this.continuationData != "0";
		},

		/**
		 * Called to retrieve the next page of items using the continuation data for the result set.
		 * 
		 * @param retrievedCallback
		 *            A callback function called after the next page of items has been retrieved. Passes an array of
		 *            {@link ecm.model.Item} objects or derivations of Item as a parameter.
		 * @param itemsNeeded
		 *            An int value indicating the number of items needed
		 */
		retrieveNextPage: function(retrievedCallback, itemsNeeded) {
			if (this.setType == "asyncTask") {
				var params = {};
				var userId = ecm.model.desktop.taskManager.showCurrentUserOnly ? ecm.model.desktop.getRepository(ecm.model.desktop.defaultRepositoryId).userId : null;

				params["sortBy"] = this.columnNames ? this.columnNames[this.sortIndex - 1] : null;
				params["sortIndex"] = this.sortIndex;
				params["sortAsc"] = this.sortDirection;
				params["userId"] = userId;
				params["taskType"] = this.taskType;
				params["taskStatus"] = this.taskStatus;
				params["isRecurring"] = this.isRecurring;
				params["continuationData"] = this.continuationData;
				params["parent"] = this.parentFilter;
				params["nameFilter"] = this.nameFilter;

				ecm.model.desktop.taskManager.retrieveAsyncTasks(params, lang.hitch(this, function(response) {
					var moreItems = this.buildItems(response.rows, response.templates);
					this.items = this.items.concat(moreItems);
					this.continuationData = response.continuationData;
					this.originalParameters = response.originalParameters;

					retrievedCallback(this.items);
				}));
			} else if (this.setType == "asyncTaskInstance") {
				var asyncTask = this.parentFolder;
				asyncTask.retrieveAsyncTaskInstances(null, true);
			} else if (this.setType == "audit") {
				var asyncTask = this.parentFolder;
				if (this.originalParameters && this.continuationData)
					this.originalParameters.continuationData = this.continuationData;

				asyncTask.retrieveAudits(this.originalParameters, lang.hitch(this, function(resultSet) {
					this.items = this.items.concat(resultSet.items);
					this.continuationData = resultSet.continuationData;
					this.sortIndex = resultSet.sortIndex;
					this.sortDirection = resultSet.sortDirection;
					this.maxResultsReached = resultSet.maxResultsReached;
					this.originalParameters = resultSet.originalParameters;

					retrievedCallback(this.items);
				}), true);
			}
		},

		/**
		 * Reruns the search or re-retrieves the folder content.
		 */
		refresh: function() {
			if (this.setType == "asyncTask") {
				var params = {};
				var userId = ecm.model.desktop.taskManager.showCurrentUserOnly ? ecm.model.desktop.getRepository(ecm.model.desktop.defaultRepositoryId).userId : null;

				params["sortBy"] = this.columnNames ? this.columnNames[this.sortIndex - 1] : null;
				params["sortAsc"] = this.sortDirection;
				params["sortIndex"] = this.sortIndex;
				params["userId"] = userId;
				params["taskType"] = this.taskType;
				params["taskStatus"] = this.taskStatus;
				params["isRecurring"] = this.isRecurring;
				params["continuationData"] = "0";
				params["parent"] = this.parentFilter;
				params["nameFilter"] = this.nameFilter;

				ecm.model.desktop.taskManager.retrieveAsyncTasks(params, lang.hitch(this, function(response) {
					this.items = this.buildItems(response.rows, response.templates);
					this.continuationData = response.continuationData;
					this.sortIndex = response.sortIndex;
					this.sortDirection = response.sortDirection;
					this.maxResultsReached = response.maxResultsReached;

					if (response.parentFolder)
						this.parentFolder = response.parentFolder;

					this.onChange(this);
					ecm.model.desktop.taskManager.onAsyncTasksRefreshed();
				}));
			} else if (this.setType == "asyncTaskInstance" || (this.parentFolder && this.parentFolder instanceof ecm.model.AsyncTask && this.parentFolder.isTaskRecurring())) {
				this.parentFolder.retrieveAsyncTaskInstances(lang.hitch(this, function(resultSet) {
					this.items = resultSet.items;
					this.continuationData = resultSet.continuationData;
					this.sortIndex = resultSet.sortIndex;
					this.sortDirection = resultSet.sortDirection;
					this.maxResultsReached = resultSet.maxResultsReached;

					if (resultSet.parentFolder)
						this.parentFolder = resultSet.parentFolder;

					this.onChange(this);
				}), true);
			} else if (this.setType == "audit") {
				this.parentFolder.retrieveAudits(null, lang.hitch(this, function(resultSet) {
					this.items = resultSet.items;
					this.continuationData = resultSet.continuationData;
					this.sortIndex = resultSet.sortIndex;
					this.sortDirection = resultSet.sortDirection;
					this.maxResultsReached = resultSet.maxResultsReached;

					if (resultSet.parentFolder)
						this.parentFolder = resultSet.parentFolder;

					this.onChange(this);
				}), true);
			}
		},

		/**
		 * Get the menutype definition for the toolbar
		 */
		getToolbarDef: function() {
			if (this.toolbarDef) {
				return this.toolbarDef;
			} else {
				var toolbarDef = "AsyncTaskToolbar";
				return toolbarDef;
			}
		},

		doSort: function(params, callback, store) {
			if (params && params[0] && params[0].colId && params[0].descending != null) {
				this.sortIndex = params[0].colId;
				this.sortDirection = params[0].descending == 0 ? 1 : -1;
			}

			var sortColumn = this.sortIndex > 0 ? this.columnNames[this.sortIndex - 1] : null;
			if (this.items && this.continuationData == "0" && sortColumn != "AsyncTaskViewDecorator.typeDecorator" && sortColumn != "AsyncTaskViewDecorator.statusDecorator") {
				if (params && store && this.items) {
					var sortStore = {
						comparatorMap: store.comparatorMap,
						getValue: lang.hitch(this, function(item, attribute) {
							return item.attributes[attribute];
						})
					};
					this.items.sort(sorter.createSortFunction(params, store));
					if (callback) {
						callback(this);
					}
				}
			} else {
				this.refresh();
			}
		}
	});
});

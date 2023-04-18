/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/date/locale",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/string",
	"dojo/aspect",
	"dojo/_base/connect",
	"ecm/widget/layout/_LaunchBarPane",
	"ecm/model/Request",
	"ecm/model/Desktop",
	"ecm/model/_ModelObject",
	"ecm/model/AsyncTask",
	"ecm/model/AsyncTaskInstance",
	"ecm/widget/Select",
	"dojo/text!./templates/AsyncTaskPane.html",
	"dijit/layout/BorderContainer", // in template
	"dijit/layout/ContentPane", // in template
	"dijit/layout/StackContainer" //in template
], function(declare, array, lang, locale, construct, style, string, aspect, connect, LaunchBarPane, Request, Desktop, ModelObject, AsyncTask, AsyncTaskInstance, Select, templateString) {

	/**
	 * @name ecm.widget.layout.AsyncTaskPane
	 * @class Provides a layout for viewing, scheduling, and managing asynchronous tasks.
	 * @augments ecm.widget.layout._LaunchBarPane
	 * @since 2.0.3
	 */
	var TaskPane = declare("ecm.widget.layout.AsyncTaskPane", [
		LaunchBarPane
	], {
		/** @lends ecm.widget.layout.AsyncTaskPane.prototype */

		templateString: templateString,
		widgetsInTemplate: true,

		/**
		 * Whether the task information pane will be shown when a task is selected
		 */
		showTaskInformationPane: true,

		/**
		 * Whether the left-hand side navigation tree should be shown
		 */
		showTaskNavigationTree: true,

		/**
		 * The layout configuration for the IBM Content Navigator task pane. You can override this to customize the
		 * widgets that appear in various parts of this pane.
		 */
		taskPaneLayoutConfiguration: null,

		/**
		 * The categorization of types of asynchronous tasks that will be used for display. Users can set a different
		 * category to show a different set of task types.
		 */
		categorization: "Navigator",

		/**
		 * Creates the task navigation tree
		 */
		createNavigationTree: function(onComplete) {
			require([
				this.taskPaneLayoutConfiguration[this.categorization].navigationTreeModel,
				this.taskPaneLayoutConfiguration[this.categorization].navigationTree
			], lang.hitch(this, function(TreeModel, NavigationTree) {
				onComplete(new NavigationTree({
					model: new TreeModel({
						categorization: this.categorization
					}),
					showRoot: false,
					style: "height: 90%",
					"aria-label": ecm.messages.taskPane_tree
				}));

				style.set(this.taskNavigationTree.domNode, "height", "100%");
				style.set(this.taskMenuContainer.domNode, "height", "90%");
			}));
		},

		constructor: function() {
			if (!this.taskPaneLayoutConfiguration)
				this.taskPaneLayoutConfiguration = Desktop.taskManager.taskPaneLayoutConfiguration;
		},

		postCreate: function() {
			this.inherited(arguments);
			this.panes = {};
			this.taskInformationPanes = {};

			//Add a parent categorization switcher
			var categorizations = Desktop.taskManager.getCategorizations();
			if (categorizations && categorizations.length > 1) {
				var selectOptions = [];
				array.forEach(categorizations, function(categorization) {
					selectOptions.push({
						label: categorization,
						value: categorization
					});

				}, this);

				this.typeSelector = new Select({
					options: selectOptions,
					"aria-label": ecm.messages.taskSchedulerPane_categorization,
					style: "margin-left: 10px"
				});
				construct.place(this.typeSelector.domNode, this.taskMenuPane.domNode, "first");

				this.connect(this.typeSelector, "onChange", function(value) {
					this.categorization = value;
					this._loadContent();
				});
			}

			this.connect(Desktop, "onLogout", function(repository) {
				if (this.isLoaded) {
					this.isLoaded = false;
					this.cleanUp();
				}
			});

			this.connect(Desktop, "onLogin", function(repository) {
				if (this.selected)
					this.loadContent();
			});

			//creates the navigation tree
			this.createNavigationTree(lang.hitch(this, function(navigationTree) {
				this.taskNavigationTree = navigationTree;
				construct.place(this.taskNavigationTree.domNode, this.taskMenuContainer.domNode, "only");
				style.set(this.taskNavigationTree.domNode, "height", "100%");

				//obtains the root
				this.taskNavigationTree.model.getRoot(lang.hitch(this, function(root) {
					this.treeRoot = root;
					this.recurringTaskTreeNode = this.treeRoot.children[2];
				}));
			}));

			//connect and open task items appropriately
			this.connect(Desktop.taskManager, "onAsyncTaskItemOpened", "openItem");

			//connects to the onItemSelected and opens the task when selected
			this.connect(this.taskNavigationTree, "onItemSelected", "_onTreeItemSelected");

			//connect and refresh the task list when a task is added
			this.connect(Desktop.taskManager, "onAsyncTaskItemAdded", function(task) {
				this.currentTaskListingPane.refresh();
			});

			this.connect(Desktop.taskManager, "onAsyncTaskItemDeleted", function() {
				this.selectItem(null);
			});

			this.connect(Desktop.taskManager, "onAsyncTasksRefreshed", function() {
				this.selectItem(null);
			});

			//connect to each tasklisting pane selection to change settings
			aspect.after(this.taskListingStackContainer, "selectChild", lang.hitch(this, function(page, animation) {
				if (this.currentTaskListingPane && this.currentTaskListingPane.taskFilterModule) {
					this.currentTaskListingPane.taskFilterModule.setUserCheckBox();
					this.currentTaskListingPane.taskFilterModule.clearFilter();
				}
			}), true);
		},

		/**
		 * Loads the content of this pane
		 */
		loadContent: function() {
			if (!this.isLoaded) {
				var authenticatingRepository = Desktop.getAuthenticatingRepository();
				this._loadContent();
			}
		},

		_loadContent: function() {
			//initially call the all tasks pane
			var firstItem = this.treeRoot.children[0];
			this.setCurrentPane(firstItem.pane);
			this.taskNavigationTree.selectItem(firstItem);

			//initially create the recurring task pane so it can listen to open events as well
			this._recurringListingPaneClass = this._getRecurringPaneClass();
			this.setCurrentPane(this._recurringListingPaneClass, true);
			var recurringTaskPane = this.panes[this._recurringListingPaneClass];
			recurringTaskPane.recurringTaskTreeNode = this.recurringTaskTreeNode;
			this.connectGridRowSelection(recurringTaskPane);

			//performs task preview connections 
			this._setupTaskPreviewPaneConnections();

			this.isLoaded = true;
		},

		_getRecurringPaneClass: function() {
			for ( var i in this.taskPaneLayoutConfiguration[this.categorization].navigationTreeCategories) {
				var category = this.taskPaneLayoutConfiguration[this.categorization].navigationTreeCategories[i];
				if (category.id == "recurringTasks") {
					return category.pane;
				}
			}
		},

		/**
		 * When an item is selected in the navigation tree, display the different task view panes if a task category is
		 * selected or open the task if it's a recurring task
		 */
		_onTreeItemSelected: function(item, node) {
			this.selectItem(null);

			if (item != this._itemInProgress) {
				if (item instanceof AsyncTask && item.isTaskRecurring()) {
					this.setCurrentPane(this._recurringListingPaneClass);
					this._itemInProgress = item;
					if (item.parent == this.recurringTaskTreeNode) {
						item.retrieveAsyncTaskInstances(lang.hitch(this, function(resultSet) {
							Desktop.taskManager.onAsyncTaskItemOpened(item, resultSet);
							this.taskListingStackContainer.selectChild(this.currentTaskListingPane, false);
							this._itemInProgress = null;
						}));
					} else {
						this.taskListingStackContainer.selectChild(this.currentTaskListingPane, false);
						this._itemInProgress = null;
					}
				} else {
					this.filterTaskListing(item);
				}
			}
		},

		/**
		 * Sets up a number of task preview pane connections
		 */
		_setupTaskPreviewPaneConnections: function() {
			// If the pane is already open, then listen to row selection.
			if (this.taskInformationPaneContainer._isOpen) {
				this.connectGridRowSelection();

			} else if (!this.taskInformationPaneContainer._isInitialized) {
				// If the pane is not initialized, then one-time connect to the grid selection event to restore the properties pane.
				// It will disconnect immediately after restoring.
				this._oneTimeRowClickHandle = this.connect(this.currentTaskListingPane.taskContentList, "onRowSelectionChange", function(selectedItems) {
					if (selectedItems && selectedItems.length == 1) {
						if (selectedItems[0]) {
							//this.selectItem(selectedItem);
							this.taskListingBorderPane.restore();
							style.set(this.taskInformationPaneContainer.domNode, "height", "50%");
							this.taskInformationPaneContainer._isInitialized = true;
							connect.disconnect(this._oneTimeRowClickHandle);
						}
					}
				});
			}

			// When the panel opens, listen for future row selection change. 
			this._onPanelOpenHandler = this.connect(this.taskListingBorderPane, "onPanelOpen", function(region) {
				this.taskInformationPaneContainer._isOpen = true;
				this.connectGridRowSelection();
			});

			// When the panel closes, disconnect from the row selection change.
			this._onPanelCloseHandler = this.connect(this.taskListingBorderPane, "onPanelClose", function(region) {
				this.taskInformationPaneContainer._isOpen = false;
				connect.disconnect(this.rowClickHandle);
			});
		},

		/**
		 * Performs cleanup and disconnects all the handlers
		 */
		cleanUp: function() {
			if (this._onPanelOpenHandler)
				connect.disconnect(this._onPanelOpenHandler);

			if (this._onPanelCloseHandler)
				connect.disconnect(this._onPanelCloseHandler);

			if (this._onOpenItemHandler)
				connect.disconnect(this._onOpenItemHandler);

			if (this.taskNavigationTree) {
				this.taskNavigationTree.reload();
			}

			if (this.panes) {
				for ( var i in this.panes) {
					if (this.panes[i]) {
						this.panes[i].reset();
					}
				}
			}
		},

		/**
		 * Sets the current task listing pane. If it haven't been created yet, create it and add it to the stack
		 * container
		 * 
		 * @param paneClass
		 * @param noSet
		 */
		setCurrentPane: function(paneClass, noSet) {
			var currentPane = this.panes[paneClass];
			if (!currentPane) {
				require([
					paneClass
				], lang.hitch(this, function(cls) {
					currentPane = new cls();
					this.panes[paneClass] = currentPane;
					this.taskListingStackContainer.addChild(currentPane);

					if (!noSet)
						this.currentTaskListingPane = currentPane;
				}));
			} else {
				if (!noSet)
					this.currentTaskListingPane = currentPane;
			}
		},

		/**
		 * Filters the list of tasks when a user clicks on a task category
		 */
		filterTaskListing: function(categoryTaskItem) {
			this.setCurrentPane(categoryTaskItem.pane);
			this._retrieveTasks(categoryTaskItem);
		},

		/**
		 * Retrieves tasks listing and shows the right listing pane
		 */
		_retrieveTasks: function(categoryTask) {
			this.currentTaskListingPane.taskCategoryConfiguration = categoryTask;
			this.currentTaskListingPane.retrieveTasks(lang.hitch(this, function(resultSet) {
				this.taskListingStackContainer.selectChild(this.currentTaskListingPane, false);
				this.connectGridRowSelection();
				this._itemInProgress = null;
			}));
		},

		/**
		 * Reconnect the grid row selection after changing the pane listing view
		 */
		connectGridRowSelection: function(pane) {
			var currentPane = pane ? pane : this.currentTaskListingPane;
			if (!currentPane._hasSetRowClickConnection) {
				this.connect(currentPane.taskContentList, "onRowSelectionChange", function(selectedItems) {
					if (selectedItems && selectedItems.length == 1) {
						if (selectedItems[0]) {
							this.selectItem(selectedItems[0]);
						}
					}
				});

				this.connect(currentPane, "onChangeResultSet", function(selectedItems) {
					this.selectItem(null);
				});

				currentPane._hasSetRowClickConnection = true;
			}
		},

		/**
		 * Opens a task or a task instance
		 */
		openItem: function(item, resultSet) {
			this.selectItem(null);

			//for a recurring task, 
			if (item && (item instanceof AsyncTask || item instanceof AsyncTaskInstance)) {
				var task = item instanceof AsyncTask ? item : item.parent;
				if (task.isTaskRecurring()) {
					var path = [];
					path.push(this.treeRoot);
					path.push(this.recurringTaskTreeNode);
					path.push(task);

					if (!this.taskNavigationTree.isPathSelected(path)) {
						this.taskNavigationTree.set('path', path);
					}

					var recurringListingPane = this.panes[this._recurringListingPaneClass];
					if (this.currentTaskListingPane != recurringListingPane) {
						this.setCurrentPane(this._recurringListingPaneClass);
						this.taskListingStackContainer.selectChild(this.currentTaskListingPane, false);
						//this.currentTaskListingPane.openItem(task);
					}
				} else {
					if (task.errors && task.errors.length > 0) {
						this.selectItem(task, 'errors');
					} else {
						//for a non-recurring task, open it by exposing the results
						this.selectItem(task, 'results');
					}
				}
			} else {
				this.filterTaskListing(item);
			}
		},

		/**
		 * Obtain the right task information pane to be displayed for this type of task
		 * 
		 * @param item
		 * @param handlerClassName
		 * @param onComplete
		 */
		_getTaskInformationPane: function(item, onComplete) {
			var asyncTaskType = item.getAsyncTaskType();
			var handlerClassName = asyncTaskType ? asyncTaskType.classHandlerName : "default";
			var taskInformationPane = this.taskInformationPanes[handlerClassName];
			if (!taskInformationPane) {
				var informationPaneClass = asyncTaskType && asyncTaskType.taskInformationDijitClass ? asyncTaskType.taskInformationDijitClass : "ecm/widget/taskManager/BaseTaskInformationPane";
				require([
					informationPaneClass
				], lang.hitch(this, function(cls) {
					taskInformationPane = new cls({
						taskHandlerClass: handlerClassName
					});
					this.taskInformationPanes[handlerClassName] = taskInformationPane;
					this.taskInformationPane = taskInformationPane;
					if (this.taskInformationPaneContainer.domNode.children.length == 1)
						this.taskInformationPaneContainer.domNode.removeChild(this.taskInformationPaneContainer.domNode.children[0]);
					construct.place(this.taskInformationPane.domNode, this.taskInformationPaneContainer.domNode, "only");

					onComplete(taskInformationPane);
				}));
			} else {
				if (taskInformationPane != this.taskInformationPane) {
					this.taskInformationPane = taskInformationPane;
					if (this.taskInformationPaneContainer.domNode.children.length == 1)
						this.taskInformationPaneContainer.domNode.removeChild(this.taskInformationPaneContainer.domNode.children[0]);
					construct.place(this.taskInformationPane.domNode, this.taskInformationPaneContainer.domNode, "only");
				}
				onComplete(taskInformationPane);
			}
		},

		/**
		 * Selects a task and obtains the task details
		 */
		selectItem: function(item, tabId) {
			if (item) {
				if (!this.taskInformationPaneContainer._isInitialized) {
					this.taskListingBorderPane.restore();
					style.set(this.taskInformationPaneContainer.domNode, "height", "50%");
					this.taskInformationPaneContainer._isInitialized = true;
				}

				//obtain the correct information pane class to be displayed for this type of task
				//it will be based on the handler's class name
				var _this = this;
				this._getTaskInformationPane(item, function(taskInformationPane) {
					this.taskInformationPane = taskInformationPane;
					if (item instanceof AsyncTask || item instanceof AsyncTaskInstance) {
						this.taskInformationPane.setItem(item, lang.hitch(this, function(item) {
							_this.taskListingBorderPane.resize();
						}), tabId);
					}
				});
			} else {
				if (this.taskInformationPane)
					this.taskInformationPane.setItem(null);
			}
		}
	});
	return TaskPane;
});

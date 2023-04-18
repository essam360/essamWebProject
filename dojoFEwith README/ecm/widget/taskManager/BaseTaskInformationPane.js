/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/AsyncTask",
	"ecm/model/AsyncTaskInstance",
	"ecm/widget/taskManager/TaskDetailsPane",
	"ecm/widget/taskManager/TaskResultsPane",
	"ecm/widget/taskManager/TaskErrorPane",
	"ecm/widget/taskManager/TaskInstancesPane",
	"ecm/widget/taskManager/TaskAuditsPane",
	"dojo/text!./templates/TaskInformationPane.html",
	"idx/layout/HeaderPane", // in template
	"dijit/layout/TabContainer" // in template
], function(declare, lang, connect, style, geo, ContentPane, TemplatedMixin, WidgetsInTemplateMixin, LoggerMixin, Desktop, AsyncTask, AsyncTaskInstance, TaskDetailsPane, TaskResultsPane, TaskErrorPane, TaskInstancesPane, TaskAuditsPane, templateString) {

	/**
	 * @name ecm.widget.taskManager.BaseTaskInformationPane
	 * @class The base information pane for custom tasks. This pane is a tab controller that displays numerous tabs that
	 *        contains information about an asynchronous task. By default, there will be a detailed, error, and async
	 *        task instances tab view available. Plugin writers can override this task information pane to add
	 *        additional tabs or replace this completely. If this pane is replaced completely, the new pane must contain
	 *        a setItem() call which will be invoked by {@link ecm.widget.layout.TaskPane}. Plugin writers can specify
	 *        their custom information pane for their custom tasks inside of AsyncTaskType that they registered with the
	 *        plugin.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.BaseTaskInformationPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		LoggerMixin
	], {

		templateString: templateString,
		widgetsInTemplate: true,

		messages: ecm.messages,

		/**
		 * The {@link ecm.model.AsyncTask} this information pane will be showing.
		 */
		item: null,

		/**
		 * The handler's class that this task information pane supports.
		 */
		taskHandlerClass: null,

		/**
		 * Creates and initializes this pane.
		 */
		postCreate: function() {
			this.inherited(arguments);

			this.taskPreviewTabContainer.startup();
			this.setUpTabs();

			if (this.item) {
				this.setItem(this.item);
			}

			/*this.connect(Desktop, "onChange", function(item) {
				if (item && item[0] && item[0] instanceof AsyncTask) {
					if (item[0] == this.item) {
						//refresh the information on the item
						this.item = null;
						this.setItem(item[0], null, null, true);
					}
				}
			});*/
		},

		/**
		 * Override this function to create a separate set of tabs or add additional tabs. By default, it will be
		 * initialized with a {@link ecm.widget.taskManager.TaskDetailsPane},
		 * {@link ecm.widget.taskManager.TaskErrorPane}, and {@link ecm.widget.taskManager.TaskInstancesPane}. The
		 * details tab will always be shown to display detailed information about a particular task such as name,
		 * description, creation time, creator, and etc. The error tab will only be shown if an error occurs on the
		 * running of the task. Finally the task instances tab will only be shown for recurring tasks.
		 */
		setUpTabs: function() {
			this.detailsTab = new TaskDetailsPane({
				UUID: "details",
				title: this.messages.taskInformationPane_details,
				informationPane: this
			});
			this.taskPreviewTabContainer.addChild(this.detailsTab);

			this.errorsTab = new TaskErrorPane({
				UUID: "errors",
				title: this.messages.taskInformationPane_errors,
				informationPane: this
			});
			this.taskPreviewTabContainer.addChild(this.errorsTab);

			this.taskInstancesTab = new TaskInstancesPane({
				UUID: "asyncTaskInstances",
				title: this.messages.taskInformationPane_taskInstances,
				informationPane: this
			});
			this.taskPreviewTabContainer.addChild(this.taskInstancesTab);

			this.auditsTab = new TaskAuditsPane({
				UUID: "audits",
				title: this.messages.taskInformationPane_audits,
				informationPane: this
			});
			this.taskPreviewTabContainer.addChild(this.auditsTab);
		},

		/**
		 * Returns the error tab for this task information pane.
		 */
		getErrorsPane: function() {
			return this.errorsTab;
		},

		/**
		 * Returns the task instances tab for this task information pane.
		 */
		getTaskInstancesPane: function() {
			return this.taskInstancesTab;
		},

		/**
		 * Returns the details tab for this task information pane.
		 */
		getDetailsPane: function() {
			return this.detailsTab;
		},

		/**
		 * Returns the audits tab for this task information pane.
		 */
		getAuditsPane: function() {
			return this.auditsTab;
		},

		/**
		 * Sets the {@link ecm.model.AsyncTask} item for this information pane. Information will be obtained and then
		 * displayed for this item.
		 * 
		 * @param item
		 *            The {@link ecm.model.AsyncTask} that this information pane will open.
		 * @param onComplete
		 *            The function that will be called once this information pane has finished loading.
		 * @param tabIdToOpen
		 *            The UUID of the tab or pane that will be opened up first when this information panes opens. This
		 *            value is optional and if it is not provided, the first tab will be opened.
		 */
		setItem: function(item, onComplete, tabIdToOpen) {
			if (item == null) {
				style.set(this.noItemSelected, "display", "");
				style.set(this.taskPreviewTabContainer.domNode, "display", "none");
			} else {
				style.set(this.noItemSelected, "display", "none");
				style.set(this.taskPreviewTabContainer.domNode, "display", "");

				if (item && this.item != item) {
					this.item = item;

					this.getDetails(lang.hitch(this, function(item) {
						if (this.getDetailsPane())
							this.getDetailsPane().createRendering(this.item);

						if (this.getErrorsPane()) {
							//if the task has errors, show the errors tab
							if (this.item.errors && this.item.errors.length > 0) {
								style.set(this.getErrorsPane().controlButton.domNode, "display", "");
								this.getErrorsPane().createRendering(item);
							} else {
								style.set(this.getErrorsPane().controlButton.domNode, "display", "none");
							}
						}

						if (this.getTaskInstancesPane()) {
							//if the task is recurring, show the execution records tab
							if (this.item.isTaskRecurring && this.item.isTaskRecurring()) {
								style.set(this.getTaskInstancesPane().controlButton.domNode, "display", "");
								this.getTaskInstancesPane().createRendering(item);
							} else {
								style.set(this.getTaskInstancesPane().controlButton.domNode, "display", "none");
							}
						}

						if (this.getAuditsPane()) {
							var isAuditor = Desktop.taskManager.isTaskAuditor();
							if (isAuditor) {
								this.getAuditsPane().createRendering(this.item);
								style.set(this.getAuditsPane().controlButton.domNode, "display", "");
							} else
								style.set(this.getAuditsPane().controlButton.domNode, "display", "none");
						}

						if (tabIdToOpen) {
							var tab = this.getTab(tabIdToOpen);
							if (tab && this.taskPreviewTabContainer.selectedChildWidget != tab)
								this.taskPreviewTabContainer.selectChild(tab);
							else
								this.taskPreviewTabContainer.selectChild(this.detailsTab);
						} else
							this.taskPreviewTabContainer.selectChild(this.detailsTab);

						this.taskPreviewTabContainer.resize();

						if (onComplete)
							onComplete(this.item);
					}));
				}
			}
		},

		_tabHasChild: function(child) {
			var children = this.taskPreviewTabContainer.getChildren();
			for ( var i in children) {
				if (children[i] == child)
					return true;
			}
			return false;
		},

		/**
		 * Returns a tab based on the UUID that is registered with this information pane.
		 * 
		 * @param uuid
		 *            The UUID of the tab to be retrieved.
		 */
		getTab: function(uuid) {
			var children = this.taskPreviewTabContainer.getChildren();
			for ( var i in children) {
				if (children[i].UUID == uuid)
					return children[i];
			}
			return null;
		},

		/**
		 * Adds a new tab to this information pane.
		 * 
		 * @param contentPane
		 *            The pane that will be added as a tab to this informatin pane.
		 */
		addTab: function(contentPane) {
			this.taskPreviewTabContainer.addChild(contentPane);
		},

		/**
		 * Returns and sets detailed information onto the task for this pane. This causes another call to be made to the
		 * task to get detailed information. Once the information returns, it will be used to populate the various tabs
		 * in this information pane.
		 * 
		 * @param onComplete
		 *            The function that will be called when the detailed information for the task returns
		 */
		getDetails: function(onComplete) {
			if (this.item instanceof AsyncTask) {
				if (!this.item.detailsLoaded) {
					this.item.getDetails(lang.hitch(this, function() {
						this.item.onChange([
							this.item
						]);
						if (onComplete)
							onComplete(this.item);
					}));
				} else {
					if (onComplete)
						onComplete(this.item);
				}
			} else {
				if (onComplete)
					onComplete(this.item);
			}
		}
	});
});

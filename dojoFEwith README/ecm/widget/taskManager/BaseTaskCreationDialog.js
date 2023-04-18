/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/string",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/taskManager/AsyncTaskCalendarSchedulerPane",
	"dojo/text!./templates/BaseTaskCreationDialogContent.html",
	"dijit/layout/ContentPane" //in template
], function(declare, lang, construct, style, string, Desktop, Request, BaseDialog, AsyncTaskCalendarSchedulerPane, contentString) {

	/**
	 * @name ecm.widget.taskManager.BaseTaskCreationDialog
	 * @class The base task creation dialog that custom tasks can extend. This dialog will prompt users to input values
	 *        to schedule a task. Plug-in writers can add additional dijits to this dialog to prompt for additional
	 *        information. Once inputs are done, plug-in writers can call this.taskSchedulerPane.get("schedule") to
	 *        obtain an {@link ecm.model.AsyncTaskSchedule} model object which can be used to pass into
	 *        Desktop.taskManager.scheduleAsyncTask() to schedule a new task. If users do not want to use this dialog,
	 *        they can also prompt their own dialog of any type as well. They can do this by putting the appropriate
	 *        custom dialog dijit in the custom task's AsyncTaskType that is registered with the plugin.
	 * @augments ecm.widget.taskManager.BaseAccordionWizardDialog
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.BaseTaskCreationDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.taskManager.BaseTaskCreationDialog.prototype */

		contentString: contentString,
		widgetsInTemplate: true,

		/**
		 * The finish label string that will appear in this dialog.
		 */
		finishButtonLabel: ecm.messages.schedule,

		/**
		 * The {@link ecm.model.AsyncTaskType} this dialog is trying to create.
		 */
		asyncTaskType: null,

		/**
		 * The task parameters that will be passed into the task manager when scheduling the task. You can store
		 * information in here that can be accessed by the custom task.
		 */
		taskParameters: null,

		/**
		 * Creates and initializes this dialog.
		 */
		postCreate: function() {
			this.inherited(arguments);
			style.set(this.domNode, {
				width: "900px",
				height: "800px"
			});
			this.setResizable(true);
			this.setMaximized(true);

			//schedule pane
			this.taskSchedulerPane = new AsyncTaskCalendarSchedulerPane({
				showLoginInformation: true,
				title: this.messages.taskSchedulerPane_title
			});

			this.taskParameters = {};

			this.contentContainerNode.domNode.appendChild(this.taskSchedulerPane.domNode);
			this.finishButton = this.addButton(this.finishButtonLabel, "onSchedule", false, true);

			this.startup();
		},

		/**
		 * Resizes this dialog
		 */
		resize: function() {
			this.inherited(arguments);
			this.taskSchedulerPane.resize();
		},

		/**
		 * Shows the task creation dialog
		 */
		show: function() {
			this.inherited(arguments);
			this.logEntry("show()");
			this.setTitle(this.asyncTaskType.name);

			this.taskSchedulerPane.resize();
			this.resize();

			this.logExit("show()");
		},

		/**
		 * Returns true if this dialog contains all valid values. Returns false if it does not. If it is false, it will
		 * also set an error message on the dialog indicating the reason for the non-successful validation.
		 */
		validate: function() {
			this.clearMessage();

			var valid = this.taskSchedulerPane.validate();
			if (valid == true)
				return true;

			else {
				this.setMessage(string.substitute(this.messages.property_invalidValueOrRequired, [
					valid ? valid : ""
				]));
				return false;
			}
		},

		/**
		 * Event invoked before scheduling starts. Users can add parameters to the taskParameters at this point.
		 */
		onBeforeScheduling: function() {

		},

		/**
		 * Event invoked when the schedule button is invoked. This will cause the task to be scheduled by the
		 * taskmanager.
		 */
		onSchedule: function() {
			this.onBeforeScheduling();

			var valid = this.validate();

			if (valid == true) {
				var schedule = this.taskSchedulerPane.get("schedule");
				Desktop.taskManager.scheduleAsyncTask(schedule, this.asyncTaskType.classHandlerName, this.taskParameters, null, lang.hitch(this, function(response) {
					this.onSchedulingFinished();
					this.hide();
					Desktop.taskManager.onAsyncTaskItemAdded(response);
				}, this.asyncTaskType.categorization));
			}
		},

		/**
		 * Event invoked when the wizard has finished scheduling a task.
		 */
		onSchedulingFinished: function() {

		}
	});
});

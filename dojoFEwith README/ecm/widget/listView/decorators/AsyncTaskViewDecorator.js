/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/_base/window",
	"dojo/dom-construct"
], function(lang, connect, event, win, domConstruct) {

	/**
	 * @name ecm.widget.listView.AsyncTaskViewDecorator
	 * @class Contains the decorators for displaying asynchronous tasks in the task pane feature.
	 * @since 2.0.3
	 */
	return {
		/** @lends ecm.widget.listView.AsyncTaskViewDecorator */

		/**
		 * The decorator for showing the correct async task status
		 * 
		 * @param item
		 *            The AsyncTask item that this column decorator is displaying for.
		 * @param rowId
		 *            The rowId of this grid this decorator is displaying for.
		 * @param rowIndex
		 *            The row index or column of this grid this decorator is displaying for.
		 */
		statusDecorator: function(item, rowId, rowIndex) {
			item = this.grid.row(rowId).item();

			var display = '';

			if (item) {
				var attributes = item.attributes;
				var value = attributes["status"];
				var message = "";
				var iconStatus = "";

				if (value == ecm.model.desktop.taskManager.TaskStatus.Completed) {
					message = ecm.messages.taskPane_statusCompleted;
					iconStatus = "asyncTaskStatusCompletedIcon";
				} else if (value == ecm.model.desktop.taskManager.TaskStatus.Scheduled) {
					message = ecm.messages.taskPane_statusScheduled;
					iconStatus = "asyncTaskStatusScheduledIcon";
				} else if (value == ecm.model.desktop.taskManager.TaskStatus.Failed) {
					message = ecm.messages.taskPane_statusFailed;
					iconStatus = "asyncTaskStatusFailedIcon";
				} else if (value == ecm.model.desktop.taskManager.TaskStatus.Paused) {
					message = ecm.messages.taskPane_statusPaused;
					iconStatus = "asyncTaskStatusPausedIcon";
				} else if (value == ecm.model.desktop.taskManager.TaskStatus.InProgress) {
					message = ecm.messages.taskPane_statusInProgress;
					iconStatus = "asyncTaskStatusInProgressIcon";
				}

				display = '<img class="' + iconStatus + '" style="padding-right:5px;" alt="' + message + '" title="' + message + '" src="dojo/resources/blank.gif" />' + message;
			}

			return display;
		},

		/**
		 * The decorator for showing the correct async task type.
		 * 
		 * @param item
		 *            The AsyncTask item that this column decorator is displaying for.
		 * @param rowId
		 *            The rowId of this grid this decorator is displaying for.
		 * @param rowIndex
		 *            The row index or column of this grid this decorator is displaying for.
		 */
		typeDecorator: function(item, rowId, rowIndex) {
			item = this.grid.row(rowId).item();
			var display = '';

			if (item) {
				var attributes = item.attributes;
				var value = attributes["type"];
				var isRecurring = item.isTaskRecurring ? item.isTaskRecurring() : false;
				var asyncTaskType = item.getAsyncTaskType();
				var icon = isRecurring ? "asyncTaskRecurringIcon" : asyncTaskType ? asyncTaskType.iconClass : "";
				value = asyncTaskType ? asyncTaskType.name : value;
				display = '<img class="' + icon + '" style="padding-right: 5px;" alt="' + value + '" title="' + value + '" src="dojo/resources/blank.gif" />';

				display += value;
			}

			return display;
		}
	};
});

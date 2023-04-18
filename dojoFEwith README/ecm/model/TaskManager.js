/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ModelObject",
	"./Request",
	"./AsyncTaskResultSet",
	"./TaskPaneLayoutConfiguration",
	"./AsyncTaskSchedule",
	"./AsyncTaskType"
], function(declare, lang, ModelObject, Request, AsyncTaskResultSet, TaskPaneLayoutConfiguration, AsyncTaskSchedule, AsyncTaskType) {

	/**
	 * @name ecm.model.TaskManager
	 * @class Represents the task manager service in IBM Content Navigator. It holds all related task manager
	 *        information and functionalities.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.2
	 */
	var TaskManager = declare("ecm.model.TaskManager", [
		ModelObject
	], {
		/** @lends ecm.model.TaskManager.prototype */

		/**
		 * Holds information about the security roles of the task manager. It will list whether the current user is a
		 * <ul>
		 * <li>Task Admin - full administrative abilities to create and delete any tasks in the system.</li>
		 * <li>Task User - ability to only see or delete tasks that the current user created only.</li>
		 * <li>Task Auditor - ability to create and retrieve audit information of each task.</li>
		 * </ul>
		 */
		taskSecurityRoles: null,

		/**
		 * The taskmanager's service URL.
		 */
		serviceURL: null,

		/**
		 * A boolean that indicates whether the task manager service is enabled or not.
		 * 
		 * @since 2.0.3
		 */
		isEnabled: null,

		/**
		 * An array of {@link ecm.model.AsyncTaskType} objects for this task manager.
		 * 
		 * @since 2.0.3
		 */
		asyncTaskTypes: null,

		/**
		 * The layout configuration for the IBM Content Navigator task pane. You can override this to customize the
		 * widgets that appear in various parts of the task pane.
		 * 
		 * @since 2.0.3
		 */
		taskPaneLayoutConfiguration: null,

		/**
		 * Constant values for the various task status in ECM TaskManager.
		 * 
		 * @since 2.0.3
		 */
		TaskStatus: {
			Init: 2,
			Pending: 4,
			InProgress: 16,
			Completed: 32,
			Paused: 64,
			Failed: 128,
			Scheduled: 256
		},

		/**
		 * Constant values for various schedule modes in ECM TaskManager.
		 * <ul>
		 * <li>"0" - Single. This means the task will only run once.</li>
		 * <li>"1" - FixedIntervalSchedule. This means the task will reoccur on a fixed interval.</li>
		 * <li>"4" - CalendarSchedule. This means the task will reoccur based on a calendar schedule.</li>
		 * </ul>
		 * 
		 * @since 2.0.3
		 */
		ScheduleMode: {
			Single: 0,
			FixedIntervalSchedule: 1,
			CalendarSchedule: 4
		},

		/**
		 * Initially initializes the task manager with values from the desktop.
		 */
		initialize: function(response) {
			if (response.taskSecurityRoles)
				this.taskSecurityRoles = response.taskSecurityRoles;
			this.serviceURL = response.taskManagerServiceURL;
			this.isEnabled = response.taskManagerIsEnabled;

			this.taskPaneLayoutConfiguration = new TaskPaneLayoutConfiguration();
			this.asyncTaskTypes = [];

			for ( var i in response.asyncTaskTypes) {
				var json = response.asyncTaskTypes[i];
				this.asyncTaskTypes.push(new AsyncTaskType(json));
			}
		},

		/**
		 * Return the {@link ecm.model.AsyncTaskType} that matches the appropriate id.
		 * 
		 * @param id
		 *            The id of the {@link ecm.model.AsyncTaskType} to return. This id is usually the classHandlerName
		 *            of the custom task created or the type attribute on {@link ecm.model.AsyncTask}.
		 * @since 2.0.3
		 */
		getAsyncTaskType: function(id) {
			for ( var i in this.asyncTaskTypes) {
				var asyncTaskType = this.asyncTaskTypes[i];
				if (asyncTaskType.id == id) {
					return asyncTaskType;
				}
			}
		},

		/**
		 * Return an array of different categorizations for all the AsyncTaskType registered. Categorizations can be
		 * used to show different categorizations of task types. For more information, read about it in
		 * {@link ecm.model.AsyncTaskType}.
		 * 
		 * @since 2.0.3
		 */
		getCategorizations: function() {
			var categorizations = {};
			for ( var i in this.asyncTaskTypes) {
				var asyncTaskType = this.asyncTaskTypes[i];
				if (asyncTaskType.categorization) {
					categorizations[asyncTaskType.categorization] = asyncTaskType.categorization;
				}
			}

			var array = [];
			for ( var i in categorizations) {
				array.push(categorizations[i]);
			}
			return array;
		},

		/**
		 * Retrieves all asynchronous tasks in the ECM TaskManager. Users can filter the amount of tasks returned by
		 * providing the following parameters:
		 * <ul>
		 * <li>userId - Returns only tasks created by this user.</li>
		 * <li>taskType - Returns only tasks with the given class handler's name. The class handler name can be
		 * obtained from the ecm.model.AsyncTaskType.classHandlerName. You can string multiple class handler names
		 * together separated by commas.</li>
		 * <li>taskStatus - Returns only tasks with the given task status. The task's status values can be obtained
		 * from <code>TaskStatus</code> constant values specified in this TaskManager model object.</li>
		 * <li>isRecurring - Returns only tasks that are recurring.</li>
		 * <li>parent - Returns tasks with the given parent categorization. The categorization can be obtained from the
		 * ecm.model.AsyncTaskType.categorization.</li>
		 * <li>nameFilter - Returns only tasks with names that match this given name filter.</li>
		 * </ul>
		 * 
		 * @param parameters
		 *            The parameters to be passed in as part of the requestParams for the request.
		 * @param callback
		 *            The callback when the request completes.
		 */
		retrieveAsyncTasks: function(parameters, callback) {
			var params = {
				requestParams: {}
			};
			lang.mixin(params.requestParams, parameters);

			params.requestCompleteCallback = lang.hitch(this, function(response) {
				response.originalParameters = parameters;
				if (callback) {
					callback(response);
				}
			});
			Request.postServiceAPI("getAsyncTasks", null, "text/json", params);
		},

		/**
		 * Schedules an asynchronous task by using the provided {@link ecm.model.AsyncTaskSchedule}, class name, and
		 * other parameters. Any items in parameter or data will be appended to the {@link ecm.model.AsyncTask} and pass
		 * along to the ECM TaskManager. Plugin writers that create custom tasks can then retrieve these parameters
		 * within the task's taskInfo JSON object under "specificTaskRequest".
		 * 
		 * @param schedule
		 *            A {@link ecm.model.AsyncTaskSchedule} object that contains all the scheduling information. It is
		 *            usually obtained by using the {@link ecm.widget.taskManager.AsyncTaskSchedulerPane} and calling
		 *            AsyncTaskSchedulerPane.get("schedule") or CalendarSchedulerPane.get("schedule").
		 * @param handlerClassName
		 *            The handlerClassName of the task that will be scheduled. This is typically the full class path of
		 *            the task that will be executed.
		 * @param parameters
		 *            The parameters to be passed in as part of the requestParams for the request. These parameters will
		 *            be appended to "specificTaskRequest" and will be part of the task's taskInfo object.
		 * @param data
		 *            The data parameters to be passed in as part of the requestBody for the request.
		 * @param callback
		 *            The callback when the request completes.
		 * @param categorization
		 *            The categorization for this asynchronous task.
		 * @param errorback
		 * @since 2.0.3.6 A callback invoked when there is a problem scheduling the task.
		 */
		scheduleAsyncTask: function(schedule, handlerClassName, parameters, data, callback, categorization, errorback) {
			var params = {
				requestParams: {},
				requestBody: {}
			};

			if (schedule instanceof AsyncTaskSchedule) {
				params.requestParams["name"] = schedule.name;
				params.requestParams["description"] = schedule.description;
				params.requestParams["userId"] = schedule.userId;
				params.requestParams["password"] = schedule.password;
				params.requestParams["emailAddress"] = schedule.emailAddress;
				params.requestParams["isRecurring"] = schedule.isRecurring;
				params.requestParams["mode"] = schedule.mode;

				if (schedule.mode == this.ScheduleMode.Single) {
					params.requestParams["startTime"] = schedule.singleSchedule.startTime;
				} else if (schedule.mode == this.ScheduleMode.FixedIntervalSchedule) {

					for ( var i in schedule.fixedIntervalSchedule) {
						params.requestParams[i] = schedule.fixedIntervalSchedule[i];
					}

				} else if (schedule.mode == this.ScheduleMode.CalendarSchedule) {
					for ( var i in schedule.calendarSchedule) {
						params.requestParams[i] = schedule.calendarSchedule[i];
					}
				}
			}
			//backwards compatibility with the original schedule object
			else {
				params.requestParams["isRecurring"] = schedule.recurring;
				params.requestParams["repeatCycle"] = schedule.interval;
				params.requestParams["startTime"] = schedule.startTime;
				params.requestParams["endTime"] = schedule.endTime;
				params.requestParams["description"] = schedule.description;
				params.requestParams["name"] = schedule.name;
				params.requestParams["userId"] = schedule.username;
				params.requestParams["password"] = schedule.password;
				params.requestParams["emailAddress"] = schedule.email;
			}

			params.requestParams["handlerClassName"] = handlerClassName;
			params.requestParams["parent"] = categorization ? categorization : "Navigator";

			lang.mixin(params.requestParams, parameters);

			if (data)
				params["requestBody"] = data;
			params.requestCompleteCallback = lang.hitch(this, function(response) {
				if (callback)
					callback(response);
			});
			params.requestFailedCallback = lang.hitch(this, function(response) {
				if (errorback) {
					errorback(response);
				}
			});

			Request.postServiceAPI("scheduleAsyncTask", null, "text/json", params);
		},

		/**
		 * Returns true if the current user is a task admin. This will return false until login.
		 */
		isTaskAdmin: function() {
			if (this.taskSecurityRoles) {
				return this.taskSecurityRoles.isTaskAdmin;
			}
			return false;
		},

		/**
		 * Returns true if the current user is a task user. This will return false until login.
		 */
		isTaskUser: function() {
			if (this.taskSecurityRoles) {
				return this.taskSecurityRoles.isTaskUser;
			}
			return false;
		},

		/**
		 * Returns true if the current user is a task auditor. This will return false until login.
		 */
		isTaskAuditor: function() {
			if (this.taskSecurityRoles) {
				return this.taskSecurityRoles.isTaskAuditor;
			}
			return false;
		},

		/**
		 * Event invoked when an async task has been added.
		 */
		onAsyncTaskItemAdded: function(response) {

		},

		/**
		 * Event invoked when an async task has been opened.
		 */
		onAsyncTaskItemOpened: function(task) {

		},

		/**
		 * Event invoked when an async task has been deleted.
		 */
		onAsyncTaskItemDeleted: function(task) {

		},

		/**
		 * Event invoked when the async task pane is refreshed.
		 * 
		 * @since 2.0.3
		 */
		onAsyncTasksRefreshed: function() {

		},

		/**
		 * Disconnects from the server and clears any login-sensitive cache
		 */
		logoff: function() {
			this.taskSecurityRoles = null;
		}
	});

	return TaskManager;
});

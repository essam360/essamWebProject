/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"./_ModelObject",
	"./Request",
	"./AsyncTaskAudit"
], function(declare, lang, dojo_json, ModelObject, Request) {

	/**
	 * @name ecm.model.AsyncTask
	 * @class Represents an asynchronous task from ECM TaskManager. An asynchronous task is any type of long running
	 *        process that once started will report its completion at a later time without needing the user to wait for
	 *        it to finish. This is intended for any actions that may tie up a graphical user interface for an extended
	 *        period of time. Once an asynchronous task is started, users can view that it's running and can come back
	 *        at a later time to view its completion or whether it has failed.
	 *        <p>
	 *        For an asynchronous task, it will also have an {@link ecm.model.AsyncTaskType} which represents a type of
	 *        the current task. An AsyncTask can also be recurring and if it does, it will have multiple
	 *        {@link ecm.model.AsyncTaskInstace} which represents each run as it repeats.
	 *        </p>
	 *        <p>
	 *        This model object shouldn't be created by hand. It is created from calling functions inside
	 *        {@link ecm.model.TaskManager} to be placed inside of a {@link ecm.widget.listView.ContentList}.
	 *        </p>
	 * @augments ecm.model._ModelObject
	 * @since 2.0.2
	 */
	var Task = declare("ecm.model.AsyncTask", [
		ModelObject
	], {
		/** @lends ecm.model.AsyncTask.prototype */

		/**
		 * The set of attributes for this task
		 */
		attributes: null,

		/**
		 * The result set that the task came from if applicable
		 */
		resultSet: null,

		/**
		 * The instances for recurring tasks. This is only available for recurring tasks and only available once
		 * retrieveAsyncTaskInstances() is called.
		 */
		recurringTaskInstances: null,

		/**
		 * The parent of the task
		 */
		parent: null,

		/**
		 * All the request information used to schedule this task
		 */
		taskRequest: null,

		/**
		 * The results for this task when the task completes. The results for this task is a json object set by the task
		 * writer in the task's information. It will depend on each task whether it will be available. This variable
		 * will be populated once getDetails() is called. Otherwise it is always null.
		 */
		results: null,

		/**
		 * The errors associated with the task if they exist. It will be available once getDetails() is called.
		 * Otherwise it is always null.
		 */
		errors: null,

		/**
		 * A result set of {@link ecm.model.AsyncTaskAudit} items associated with this task. It will be available once
		 * retrieveAudits() is called.
		 * 
		 * @since 2.0.3
		 */
		audits: null,

		/**
		 * The mode for this task. It can be
		 * <ul>
		 * <li>"0" - Single. This means the task will only run once.</li>
		 * <li>"1" - FixedIntervalSchedule. This means the task will reoccur on a fixed interval.</li>
		 * <li>"4" - CalendarSchedule. This means the task will reoccur based on a calendar schedule.</li>
		 * </ul>
		 * 
		 * @since 2.0.3
		 */
		mode: null,

		/**
		 * A boolean that indicates whether this task is a recurring task. A task is recurring if the mode is
		 * FixedIntervalSchedule or CalendarSchedule.
		 * 
		 * @since 2.0.3
		 */
		isRecurring: null,

		/**
		 * Returns the {@link ecm.model.AsyncTaskType} object associated with this task.
		 * 
		 * @since 2.0.3
		 */
		getAsyncTaskType: function() {
			return ecm.model.desktop.taskManager.getAsyncTaskType(this.attributes.type);
		},

		/**
		 * Returns whether this task is a recurring task.
		 */
		isTaskRecurring: function() {
			return this.isRecurring;
		},

		/**
		 * Returns the attribute value in a format that can be displayed in the user interface.
		 * 
		 * @param attribute
		 *            The name of the attribute.
		 */
		getDisplayValue: function(attribute) {
			if (this.attributeDisplayValues[attribute]) {
				return this.attributeDisplayValues[attribute];
			}
			return ecm.model.desktop.valueFormatter.formatValue(this.attributes[attribute], this.attributeTypes[attribute], this.attributeFormats[attribute]);
		},

		/**
		 * Returns true if this item has the specified privilege. It will always return true.
		 * 
		 * @param privilege
		 *            The name of the privilege.
		 */
		hasPrivilege: function(privilege) {
			return this[privilege] == true;
		},

		/**
		 * Reschedules the task with the new task request information. Users can modify the <code>taskRequest</code>
		 * attribute associated with this task and reschedule with this new information. The name of the task and the
		 * schedule information can not be changed in a reschedule.
		 * 
		 * @param callback
		 *            The callback function that will be invoked when rescheduling completes.
		 * @param taskRequest
		 *            The new task request information that will be passed into the task when rescheduling.
		 */
		reschedule: function(callback, taskRequest) {
			var params = {
				requestParams: {}
			};
			params.requestParams["id"] = this.id;
			params.requestParams["desktop"] = ecm.model.desktop.id;
			params.requestCompleteCallback = lang.hitch(this, function(response) {
				this.getDetails(lang.hitch(this, function() {
					this.onChange([
						this
					]);
					if (callback)
						callback();
				}, true));
			});

			var data = null;
			if (taskRequest) {
				params["requestBody"] = taskRequest;
			}

			Request.postServiceAPI("rescheduleAsyncTask", null, "text/json", params);
		},

		/**
		 * Deletes the task permanently from the ECM TaskManager.
		 * 
		 * @param callback
		 *            The callback function that will be invoked when delete completes.
		 */
		deleteTask: function(callback) {
			var params = {
				requestParams: {}
			};
			params.requestParams["id"] = this.id;
			params.requestParams["desktop"] = ecm.model.desktop.id;
			params.requestCompleteCallback = lang.hitch(this, function(response) {
				this.deleted = true;
				this.onChange([
					this
				]);
				ecm.model.desktop.taskManager.onAsyncTaskItemDeleted();
				if (callback)
					callback();
			});
			Request.postServiceAPI("deleteAsyncTask", null, "text/json", params);
		},

		/**
		 * Pauses the current task. Once paused, the status of the task will be changed to paused. This paused command
		 * will also be sent to the asynchronous task for it to pause its current state. For a recurring task, pausing
		 * the current instance will cause the entire task to not execute until resume() is called.
		 * 
		 * @param callback
		 *            The callback function to be invoked when pause completes.
		 */
		pause: function(callback) {
			var params = {
				requestParams: {}
			};
			params.requestParams["id"] = this.id;
			params.requestParams["desktop"] = ecm.model.desktop.id;
			params.requestCompleteCallback = lang.hitch(this, function(response) {
				this.getDetails(lang.hitch(this, function() {
					this.onChange([
						this
					]);
					if (callback)
						callback();
				}), true);
			});
			Request.postServiceAPI("pauseAsyncTask", null, "text/json", params);
		},

		/**
		 * Resumes the current task. Once resumed, the task will be rescheduled with its original schedule. The resume
		 * command will also be sent to the asynchronous task for it to resume from its current state.
		 * 
		 * @param callback
		 *            The callback function to be invoked when resume completes.
		 * @since 2.0.3
		 */
		resume: function(callback) {
			this.reschedule(callback, this.taskRequest);
		},

		/**
		 * If this task was obtained in a result set that contained a parent category, it will return an array of the
		 * path to this task. If not, it will return with an empty array.
		 */
		getPath: function() {
			var array = [];
			var item = this;
			while (item) {
				array.push(item);
				item = item.parentFolder ? item.parentFolder : item.parent;
			}
			return array.reverse();
		},

		/**
		 * Refreshes the current task by fetching all of its details again.
		 */
		refresh: function() {
			this.detailsLoaded = false;
			this.recurringTaskInstances = null;

			this.getDetails();

			this.onChange([
				this
			]);
		},

		/**
		 * Updates an item with the provided new item's properties and attributes
		 * 
		 * @param item
		 */
		update: function(item) {
			var prop = null;
			for (prop in item) {
				if ((typeof item[prop] !== "function") && (prop != "declaredClass") && (prop != "resultSet") && (prop != "parent") && (prop != "repository")) {
					this[prop] = item[prop];
				}
			}
			this.onChange([
				this
			]);
		},

		/**
		 * Returns the user information for this task.
		 * 
		 * @since 2.0.3
		 */
		getUserInfo: function(propertyName) {
			return this.attributes.createdBy;
		},

		/**
		 * Retrieves all async task instances for this task. This only applies for recurring tasks.
		 * 
		 * @param callback
		 *            a callback when all the async task instances have been retrieved.
		 * @param forcedRefresh
		 *            refresh and go to the server to obtain all the async task instances again.
		 */
		retrieveAsyncTaskInstances: function(callback, forcedRefresh) {
			if (this.isTaskRecurring()) {
				this.getDetails(lang.hitch(this, function() {
					if (this.asyncTaskInstances && !forcedRefresh) {
						if (callback) {
							callback(this.asyncTaskInstances);
						}
					} else {
						var params = {
							requestParams: {}
						};
						params.requestParams["id"] = this.id;
						params.requestParams["taskType"] = this.attributes.type;
						params.requestParams["name"] = this.attributes.name;
						params.requestParams["desktop"] = ecm.model.desktop.id;
						params.requestCompleteCallback = lang.hitch(this, function(response) {
							response.setType = "asyncTaskInstance";
							response.parentFolder = this;
							var resultSet = new ecm.model.AsyncTaskResultSet(response);
							this.asyncTaskInstances = resultSet;
							this.onChange([
								this
							]);
							if (callback)
								callback(resultSet);
						});
						Request.postServiceAPI("getAsyncTaskInstances", null, "text/json", params);
					}
				}));
			}
		},

		/**
		 * Obtains the details for this task. It will grab additional attributes for this task such as errors and etc.
		 * 
		 * @param onComplete
		 *            A callback when the details for this task has been retrieved.
		 * @param forcedRefresh
		 *            A boolean that indicates whether to force a refresh and always grab go back to the server to
		 *            obtain the details
		 * @param skipOnChange
		 *            A boolean that indicates whether to skip on throwing the onChange event.
		 */
		getDetails: function(onComplete, forcedRefresh, skipOnChange) {
			if (!this.detailsLoaded || forcedRefresh) {
				this._getDetails(lang.hitch(this, function(response) {
					for ( var i in response.content) {
						var attribute = response.content[i];
						if (i != "taskRequest" && i != "errors")
							this.attributes[i] = attribute;
					}

					if (response.content.taskRequest) {
						try {
							//taskRequest is a string so convert it to a json object
							this.taskRequest = dojo_json.fromJson(response.content.taskRequest);
							if (this.taskRequest.results) {
								this.results = this.taskRequest.results;
							}
						} catch (exp) {
							/** ignore* */
						}
					}

					if (response.content.errors) {
						this.errors = response.content.errors;
					}

					this.detailsLoaded = true;

					if (!skipOnChange) {
						this.onChange([
							this
						]);
					}
					if (onComplete)
						onComplete(this);
				}));
			} else {
				if (onComplete)
					onComplete(this);
			}
		},

		/**
		 * Retrieves a result set of {@link ecm.model.AsyncTaskAudit} items associated with this task. This result set
		 * can be placed into a {@link ecm.widget.listView.ContentList} for displaying purposes.
		 * <p>
		 * Users can filter the amount of audits return with the following filter parameters:
		 * <ul>
		 * <li>originator - Return only audits created by this user.</li>
		 * <li>eventType - Return only audits that are of this particular event type.</li>
		 * <li>eventAction - Return only audits that are of this particular event action.</li>
		 * <li>status - Return only audits that of this status</li>
		 * <li>startDate (Timestamp in milliseconds) - Return only audits created after this start date.</li>
		 * <li>endDate (Timestamp in milliseconds) - Return only audits created before this end date.</li>
		 * </ul>
		 * </p>
		 * 
		 * @param filterParameters
		 *            Parameters that can filter the amount of audits returned.
		 * @param callback
		 *            The callback function that will be called when the result set of audits have returned.
		 * @param forcedRefresh
		 *            Boolean to force a refresh and not to return with the cached set of audits.
		 * @since 2.0.3
		 */
		retrieveAudits: function(filterParameters, callback, forcedRefresh) {
			if (this.audits && !forcedRefresh) {
				if (callback) {
					callback(this.audits);
				}
			} else {
				var params = {
					requestParams: {}
				};
				params.requestParams["id"] = this.id;
				params.requestParams["desktop"] = ecm.model.desktop.id;
				lang.mixin(params.requestParams, filterParameters);

				params.requestCompleteCallback = lang.hitch(this, function(response) {
					response.setType = "audit";
					response.parentFolder = this;
					var resultSet = new ecm.model.AsyncTaskResultSet(response);
					this.audits = resultSet;
					resultSet.originalParameters = filterParameters || {};
					this.onChange([
						this
					]);
					if (callback)
						callback(resultSet);
				});
				Request.postServiceAPI("getAsyncTaskAudits", null, "text/json", params);
			}
		},

		/**
		 * Deletes all error records associated with this async task if they exist.
		 * 
		 * @since 2.0.3
		 */
		deleteErrors: function() {
			var params = {
				requestParams: {}
			};
			params.requestParams["id"] = this.id;
			params.requestParams["desktop"] = ecm.model.desktop.id;
			params.requestCompleteCallback = lang.hitch(this, function(response) {
				this.onChange([
					this
				]);
				if (callback)
					callback(resultSet);
			});
			Request.postServiceAPI("deleteTaskErrors", null, "text/json", params);
		},

		/**
		 * @private Internal function call to get task details
		 * @param onComplete
		 */
		_getDetails: function(onComplete) {
			var params = {
				requestParams: {}
			};
			params.requestParams["id"] = this.id;
			params.requestParams["desktop"] = ecm.model.desktop.id;
			params.requestCompleteCallback = lang.hitch(this, function(response) {
				if (onComplete)
					onComplete(response);
			});
			Request.postServiceAPI("getAsyncTaskDetails", null, "text/json", params);
		},

		/**
		 * Returns the results associated with this task if they exist. The results is just a json array stored along
		 * with the task's information.
		 * 
		 * @param callback
		 *            The callback function that will be invoked once results are obtained.
		 */
		getResults: function(callback) {
			if (!this.results) {
				this.detailsLoaded = false;
				this.getDetails(lang.hitch(this, function() {
					if (callback)
						callback(this.results);
				}));
			} else {
				if (callback)
					callback(this.results);
			}
		},

		/**
		 * The onChange event that is invoked when a change occurs on this task.
		 */
		onChange: function(modelObject) {
			ecm.model.desktop.onChange(modelObject);
		},

		/**
		 * Returns the type of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name
		 * @returns {string} The type of the attribute
		 */
		getAttributeType: function(attribute) {
			return this.attributeTypes[attribute];
		}
	});

	/**
	 * Static function that registers a factory for sub-classes of <code>AsyncTask</code>.
	 * 
	 * @param factory
	 *            A factory object with <code>createFromJSON()</code> method to possibly create a sub-class of
	 *            <code>AsyncTask</code> from JSON. The factory method should return null when the given JSON is not
	 *            one for known sub-classes, giving chances for other factories to create one or falling back to the
	 *            default <code>AsyncTask</code> construction.
	 * @memberof ecm.model.AsyncTask
	 */
	ecm.model.AsyncTask.registerFactory = function(factory) {
		if (!ecm.model.AsyncTask._factories) {
			ecm.model.AsyncTask._factories = [];
		}
		ecm.model.AsyncTask._factories.push(factory);
	};

	/**
	 * @private Constructs a task item given a JSON representation of the item.
	 */
	ecm.model.AsyncTask.createFromJSON = function(itemJSON) {

		var item = null;
		// visit factories to see if one of them can create a sub-class from this JSON
		ecm.model.AsyncTask._factories && dojo_array.some(ecm.model.AsyncTask._factories, function(factory) {
			if (factory && factory.createFromJSON) {
				item = factory.createFromJSON(itemJSON, repository, resultSet, parent);
			}
			return !!item;
		});

		if (!item) {
			item = new Task(itemJSON);
		}

		var attributes = {};
		var attributeTypes = {};
		var attributeFormats = {};
		var attributeDisplayValues = {};
		var attributeReadOnly = {};

		for ( var i in itemJSON.attributes) {
			var attr = itemJSON.attributes[i];
			attributes[i] = attr[0];
			if (attr.length > 1) {
				attributeTypes[i] = attr[1];
			}
			if (attr.length > 2 && attr[2] != null) {
				attributeFormats[i] = attr[2];
			}
			if (attr.length > 3 && attr[3] != null) {
				attributeDisplayValues[i] = attr[3];
			}
			attributeReadOnly[i] = (attr.length > 4 && attr[4] === true);
		}

		lang.mixin(item, {
			attributes: attributes,
			attributeTypes: attributeTypes,
			attributeFormats: attributeFormats,
			attributeDisplayValues: attributeDisplayValues,
			attributeReadOnly: attributeReadOnly
		});

		item.isRecurring = attributes.isRecurring;
		item.mode = attributes.mode;

		return item;
	};

	return Task;
});

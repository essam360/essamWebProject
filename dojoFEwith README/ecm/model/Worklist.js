/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"./_ModelObject"
], function(declare, lang, dojojson, _ModelObject) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Worklist
	 * @class Represents a list of work items. For routing IBM Content Manager documents, this class represents an IBM
	 *        Content Manager work list.
	 * @augments ecm.model._ModelObject
	 */
	var Worklist = declare("ecm.model.Worklist", [
		_ModelObject
	], {
		/** @lends ecm.model.Worklist.prototype */

		/**
		 * A description to use for the work list.
		 */
		description: null,

		/**
		 * An instance of {@link ecm.model.Repository} for the repository containing or owning this work list.
		 */
		repository: null,

		/**
		 * Retrieve the work items in this worklist.
		 * 
		 * @param callback
		 *            A function that is called when the work items have been retrieved. When the function is called, an
		 *            instance of {@link ecm.model.ResultSet} is passed as a single argument which provides access to
		 *            the work items.
		 * @param orderBy
		 *            A string value indicating the column property to order the result set by.
		 * @param descending
		 *            A boolean value indicating the direction of the sort. True is descending.
		 */
		retrieveWorkItems: function(callback, orderBy, descending) {
			this.logEntry("retrieveWorkItems");
			var request = ecm.model.Request.invokeService("getWorkItems", this.repository.type, {
				repositoryId: this.repository.id,
				worklist_name: this.id,
				order_by: orderBy ? orderBy : "",
				order_descending: descending ? "true" : "false"
			}, lang.hitch(this, function(response) {
				this._retrieveWorkItemsCompleted(response, callback);
			}));
			this.logExit("retrieveWorkItems");
			return request;
		},

		_retrieveWorkItemsCompleted: function(response, callback) {
			this.logEntry("_retrieveWorkItemsCompleted");

			response.repository = this.repository;
			response.parentFolder = this;
			response.setType = "workItems";
			var results = Worklist.createResultSet(response);
			callback(results);
			this.logExit("_retrieveWorkItemsCompleted");
		},

		_getWorkItemIDsParam: function(workItems) {
			var workIDsParam = '{';
			for ( var i in workItems) {
				workIDsParam = workIDsParam + '"workItemId' + i + '":"' + workItems[i].id + '",';
			}
			workIDsParam = workIDsParam.substring(0, workIDsParam.length - 1) + '}';
			return workIDsParam;
		},

		/**
		 * Perform the Continue action on a CM work item.
		 * 
		 * @param workItems
		 *            An array of {@link ecm.model.WorkItem} objects to be continued.
		 * @param callback
		 *            A function that is called when the all work items have been continued.
		 */
		continueWorkflow: function(workItems, callback) {
			this.logEntry("continueWorkflow");
			var repository = workItems[0].repository;
			var workItemIDsParam = this._getWorkItemIDsParam(workItems);
			var continueWorkflowParam = lang.mixin(dojojson.fromJson(workItemIDsParam), {
				repositoryId: repository.id
			});
			ecm.model.Request.invokeService("continueWorkflow", repository.type, continueWorkflowParam, lang.hitch(this, function(response) {
				this._continueWorkflowCompleted(response, callback);
			}));
			this.logExit("continueWorkflow");
		},

		_continueWorkflowCompleted: function(response, callback) {
			this.logEntry("_continueWorkflowCompleted");
			this.onRefreshWorklist(this);
			if (callback) {
				callback();
			}
			this.logExit("_continueWorkflowCompleted");
		},

		/**
		 * Perform the Suspend action on a CM work item.
		 * 
		 * @param workItems
		 *            An array of {@link ecm.model.WorkItem} objects to be suspended.
		 * @param callback
		 *            A function that is called when the all work items have been suspended.
		 */
		suspendWorkflow: function(workItems, callback) {
			this.logEntry("suspendWorkflow");
			var repository = workItems[0].repository;
			var workItemIDsParam = this._getWorkItemIDsParam(workItems);
			var suspendWorkflowParam = lang.mixin(dojojson.fromJson(workItemIDsParam), {
				repositoryId: repository.id,
				radioSuspend: "Until Resumption"
			});
			ecm.model.Request.invokeService("suspendWorkflow", repository.type, suspendWorkflowParam, lang.hitch(this, function(response) {
				this._suspendWorkflowCompleted(response, callback);
			}));
			this.logExit("suspendWorkflow");
		},

		_suspendWorkflowCompleted: function(response, callback) {
			this.logEntry("_suspendWorkflowCompleted");
			this.onRefreshWorklist(this);
			if (callback) {
				callback();
			}
			this.logExit("_suspendWorkflowCompleted");
		},

		/**
		 * Perform the Resume action on a CM work item.
		 * 
		 * @param workItems
		 *            An array of {@link ecm.model.WorkItem} objects to be resumed.
		 * @param callback
		 *            A function that is called when the all work items have been resumed.
		 */
		resumeWorkflow: function(workItems, callback) {
			this.logEntry("resumeWorkflow");
			var repository = workItems[0].repository;
			var workItemIDsParam = this._getWorkItemIDsParam(workItems);
			var resumeWorkflowParam = lang.mixin(dojojson.fromJson(workItemIDsParam), {
				repositoryId: repository.id
			});
			ecm.model.Request.invokeService("resumeWorkflow", repository.type, resumeWorkflowParam, lang.hitch(this, function(response) {
				this._resumeWorkflowCompleted(response, callback);
			}));
			this.logExit("resumeWorkflow");
		},

		_resumeWorkflowCompleted: function(response, callback) {
			this.logEntry("_resumeWorkflowCompleted");
			this.onRefreshWorklist(this);
			if (callback) {
				callback();
			}
			this.logExit("_resumeWorkflowCompleted");
		},

		/**
		 * Perform the Remove action on a CM work item.
		 * 
		 * @param workItems
		 *            An array of {@link ecm.model.WorkItem} objects to be removed.
		 * @param callback
		 *            A function that is called when the all work items have been removed.
		 */
		removeWorkflow: function(workItems, callback) {
			this.logEntry("removeWorkflow");
			var repository = workItems[0].repository;
			var workItemIDsParam = this._getWorkItemIDsParam(workItems);
			var removeWorkflowParam = lang.mixin(dojojson.fromJson(workItemIDsParam), {
				repositoryId: repository.id
			});
			ecm.model.Request.invokeService("removeFromWorkflow", repository.type, removeWorkflowParam, lang.hitch(this, function(response) {
				this._removeWorkflowCompleted(response, callback);
			}));
			this.logExit("removeWorkflow");
		},

		_removeWorkflowCompleted: function(response, callback) {
			this.logEntry("_removeWorkflowCompleted");
			this.onRefreshWorklist(this);
			if (callback) {
				callback();
			}
			this.logExit("_removeWorkflowCompleted");
		},

		/**
		 * Event fired when the worklist has been updated.
		 * 
		 * @param worklist
		 *            A pointer to this {@link ecm.model.Worklist} object.
		 */
		onRefreshWorklist: function(worklist) {
			// event for refresh work items for this worklist
		},

		/**
		 * Refresh the worklist
		 * 
		 * @since 2.0.3.5 LA002
		 */
		refresh: function() {
			this.repository.onChange(this);
		}

	});

	return Worklist;
});

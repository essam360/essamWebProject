/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/_ModelObject"
], function(declare, ModelObject) {

	/**
	 * @name ecm.model.TaskCategoryConfiguration
	 * @class Represents the configuration information within a category of tasks. This object is used by
	 *        {@link ecm.widget.taskManager.TaskNavigationTree} to group a list of tasks together to display for
	 *        navigation.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.TaskCategoryConfiguration", [
		ModelObject
	], {
		/** @lends ecm.model._ModelObject.prototype */

		/**
		 * The class of the task listing pane responsible for this category task.
		 */
		pane: null,

		/**
		 * The status of this particular set of tasks.
		 */
		status: null,

		/**
		 * Whether this set of tasks is recurring.
		 */
		isRecurring: null,

		/**
		 * The type of this task.
		 */
		type: null,

		/**
		 * The user id associated with this type of task.
		 */
		userId: null,

		/**
		 * a filter string to filter the list of tasks.
		 */
		nameFilter: "",

		/**
		 * The parent which is used to decide what type of associated asynchronous tasks to list.
		 */
		categorization: "Navigator"

	});
});

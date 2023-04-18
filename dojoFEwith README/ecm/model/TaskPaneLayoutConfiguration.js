/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/_ModelObject",
	"ecm/model/TaskCategoryConfiguration"
], function(declare, ModelObject, TaskCategoryConfiguration) {

	/**
	 * @name ecm.model.TaskPaneLayoutConfiguration
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.TaskPaneLayoutConfiguration", [
		ModelObject
	], {

		"Navigator": {
			navigationTree: "ecm/widget/taskManager/TaskNavigationTree",
			navigationTreeModel: "ecm/model/TaskTreeModel",
			navigationTreeCategories: [
				new TaskCategoryConfiguration({
					id: "allTasks",
					name: ecm.messages.taskPane_allTasks,
					status: null,
					pane: "ecm/widget/taskManager/TasksListingPane",
					categorization: "Navigator"
				}),
				new TaskCategoryConfiguration({
					id: "scheduledTasks",
					name: ecm.messages.taskPane_scheduledTasks,
					status: "256",
					pane: "ecm/widget/taskManager/TasksListingPane",
					categorization: "Navigator"
				}),
				new TaskCategoryConfiguration({
					id: "recurringTasks",
					name: ecm.messages.taskPane_recurringTasks,
					status: null,
					pane: "ecm/widget/taskManager/RecurringTasksListingPane",
					isRecurring: true,
					categorization: "Navigator"
				}),
				new TaskCategoryConfiguration({
					id: "failedTasks",
					name: ecm.messages.taskPane_failedTasks,
					status: "128",
					pane: "ecm/widget/taskManager/TasksListingPane",
					categorization: "Navigator"
				}),
				new TaskCategoryConfiguration({
					id: "disabledTasks",
					name: ecm.messages.taskPane_disabledTasks,
					status: "64",
					pane: "ecm/widget/taskManager/TasksListingPane",
					categorization: "Navigator"
				}),
				new TaskCategoryConfiguration({
					id: "inProgressTasks",
					name: ecm.messages.taskPane_inProgressTasks,
					status: "16",
					pane: "ecm/widget/taskManager/TasksListingPane",
					categorization: "Navigator"
				}),
				new TaskCategoryConfiguration({
					id: "completedTasks",
					name: ecm.messages.taskPane_completedTasks,
					status: "32",
					pane: "ecm/widget/taskManager/TasksListingPane",
					categorization: "Navigator"
				})
			]
		}
	});
});

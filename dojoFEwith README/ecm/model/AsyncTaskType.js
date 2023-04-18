/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * @name ecm.model.AsyncTaskType
	 * @class Represents a type of asynchronous tasks created for the ECM Task Manager. For every custom task created, a
	 *        type defining what that asynchronous task is should be registered with the plug-in. An AsyncTaskType will
	 *        automatically be created when the desktop loads. An AsyncTaskType will have defined widgets that will load
	 *        when user interacts with that task type in the IBM Content Navigator task pane feature.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.AsyncTaskType", [
		_ModelObject
	], {
		/** @lends ecm.model.AsyncTaskType.prototype */

		/**
		 * The full canonical class name for this asynchronous task. This class name should match custom class you have
		 * created for the ECM Task Manager.
		 */
		classHandlerName: null,

		/**
		 * The name of the icon style class that will represent this asynchronous task type.
		 */
		iconClass: null,

		/**
		 * The name of a Dojo <code>dijit</code> class that provides the creation dialog interface widget for this
		 * asynchronous task. The widget must extend the <code>ecm.widget.taskManager.BaseTaskCreationDialog</code>
		 * widget. An instance of the widget is created and displayed in the IBM Content Navigator task pane when the
		 * user selects to create this type of asynchronous task.
		 * <p>
		 * Refer to the documentation on {@link ecm.widget.taskManager.BaseTaskCreationDialog BaseTaskCreationDialog}
		 * for more information on what is required.
		 * </p>
		 */
		taskCreationDialogDijitClass: null,

		/**
		 * The name of a Dojo <code>dijit</code> class that provides the information interface widget for this
		 * asynchronous task. The widget must extend the <code>ecm.widget.taskManager.TaskInformationPane</code>
		 * widget. An instance of the widget is created and displayed in the IBM Content Navigator task pane when the
		 * user selects to view this type of asynchronous task.
		 */
		taskInformationDijitClass: null,

		/**
		 * The appropriate IBM Content Navigator IBM Content Navigator context menu definition id for each status of an
		 * asynchronous task. This context menu will be displayed when a user right clicks on this task type. By default
		 * it will return a menu definition with open, refresh, and delete actions for all the statuses.
		 */
		asyncTaskContextMenuDefinitions: null,

		/**
		 * The appropriate IBM Content Navigator context menu definition id for each task instance status. This context
		 * menu will be displayed when a user right clicks on an instance of a recurring async task. By default all the
		 * task instances will return a menu definition with open and refresh actions.
		 */
		asyncTaskInstanceContextMenuDefinitions: null,

		/**
		 * An identifier that this type of asynchronous task should be classified with. This will be used by
		 * {@link ecm.widget.layout.TaskPane} so users can toggle between different categorization of tasks. For
		 * example, different products can use this classifier to show only the appropriate tasks associated for their
		 * own product. By default, it will be "Navigator".
		 */
		categorization: null,

		/**
		 * Indicates whether this type of asynchronous task can be created. If it is true, a create button will appear
		 * in the {@link ecm.widget.layout.TaskPane}.
		 */
		canCreate: null

	});
});

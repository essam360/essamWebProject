/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/AsyncTask",
	"ecm/model/AsyncTaskInstance",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"dojo/text!./templates/TaskInstancesPane.html",
	"ecm/widget/listView/ContentList" //in template
], function(declare, lang, ContentPane, TemplatedMixin, WidgetsInTemplateMixin, LoggerMixin, Desktop, AsyncTask, AsyncTaskInstance, RowContextMenu, templateString) {

	/**
	 * @name ecm.widget.taskManager.TaskInstancesPane
	 * @class The pane will be responsible for displaying a list of instances of a recurring task. This pane will make
	 *        use of {@link ecm.widget.listView.ContentList} for display.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.TaskInstancesPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		LoggerMixin
	], {
		templateString: templateString,
		widgetsInTemplate: true,
		messages: ecm.messages,

		/**
		 * Creates and initializes the pane.
		 */
		postCreate: function() {
			this.logEntry("postCreate");

			this.inherited(arguments);
			this.contentList.setContentListModules(this.getContentListModules());
			this.contentList.setGridExtensionModules(this.getContentListGridModules());

			this.logExit("postCreate");
		},

		/**
		 * Returns the content list modules that will be used by this pane.
		 */
		getContentListModules: function() {
			var array = [];
			return array;
		},

		/**
		 * Returns the content list grid modules that will be used by this pane.
		 */
		getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			return array;
		},

		/**
		 * Renders this pane based on the given item
		 * 
		 * @param item
		 *            The {@link ecm.model.AsyncTask} item that this pane will be listing instances of.
		 */
		createRendering: function(item) {
			if (item && this.item != item && (item instanceof AsyncTask)) {
				item.retrieveAsyncTaskInstances(lang.hitch(this, function(resultSet) {
					this.contentList.setResultSet(resultSet);
				}));

			}

			this.connect(this.contentList, "onOpenItem", lang.hitch(this, function(item, openedItemData) {
				this.onTaskInstanceOpened(item, openedItemData);
			}));
		},

		/**
		 * Event invoked when a task instance is clicked on and opened.
		 * 
		 * @param item
		 *            The {@link ecm.model.AsyncTaskInstance} that is being opened.
		 */
		onTaskInstanceOpened: function(item, openedItemData) {

		}
	});
});

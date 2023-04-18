/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/widget/PropertyGrid",
	"dojo/text!./templates/TaskDetailsPane.html"
], function(declare, ContentPane, TemplatedMixin, WidgetsInTemplateMixin, LoggerMixin, PropertyGrid, templateString) {

	/**
	 * @name ecm.widget.taskManager.TaskDetailsPane
	 * @class The pane will be responsible for detailed information of a {@link ecm.model.AsyncTask} in a grid-like
	 *        format.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.TaskDetailsPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		LoggerMixin
	], {
		templateString: templateString,
		widgetsInTemplate: true,
		messages: ecm.messages,

		/**
		 * Creates the rendering of this pane.
		 * 
		 * @param item
		 *            The task to be displayed.
		 */
		createRendering: function(item) {
			this.logEntry("createRendering");

			if (item != this.item) {
				this.item = item;

				this._createTaskDetailsGrid(item);
			}

			this.logExit("createRendering");
		},

		_createTaskDetailsGrid: function(item) {
			if (this.taskPropGrid)
				this.taskPropGrid.destroy();

			var data = {};
			var resources = {};
			var propertiesArray = [];

			for ( var name in item.attributes) {
				var value = item.attributes[name];
				var label = this.getLabel(name);
				value = this.getValue(name, value);
				if (value && name != "taskRequest" && name != "errors" && label != null) {
					data[name] = value;
					resources[name + "Label"] = label || name;
					propertiesArray.push(name);
				}
			}

			var taskProperties = propertiesArray.join(",");
			this.taskPropGrid = new PropertyGrid({
				data: data,
				properties: taskProperties,
				labelKeySuffix: "Label",
				resources: resources
			});
			this.taskPropGrid.startup();
			this.taskPropGrid.placeAt(this.gridContainer, "first");
			this.resize();
		},

		/**
		 * Returns a localized label of a property in the task given the name. By default, it will attempt to find the a
		 * label inside the localized bundle of ecm.messages. If none is returned, null is returned.
		 * 
		 * @param name
		 *            The name of the property to be displayed.
		 */
		getLabel: function(name) {
			var message = this.messages[name];
			if (message)
				return this._trimColon(message);
			else
				return null;
		},

		/**
		 * Returns the value of the property in the task given the name.
		 * 
		 * @param name
		 *            The name of the property to be displayed.
		 */
		getValue: function(name) {
			if (name == "type") {
				return this._getTaskTypeDisplayName();
			} else
				return this.item.getDisplayValue(name);
		},

		_trimColon: function (msg) {
			if (msg && msg.length && msg.charAt(msg.length - 1) === ':')
				return msg.substring(0, msg.length - 1);
			else
				return msg;
		},

		_getTaskTypeDisplayName: function() {
			var asyncTaskType = this.item.getAsyncTaskType();
			return asyncTaskType ? asyncTaskType.name : "";
		},

		_addValue: function(name, item, data, resources, propertiesArray) {
			var value = item.taskRequest.specificTaskRequest[name];
			var label = this.getLabel(name);

			if (value) {
				data[name] = value;
				resources[name + "Label"] = label || name;
				propertiesArray.push(name);
			}
		}
	});
});

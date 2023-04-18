/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/AsyncTaskInstance",
	"ecm/widget/taskManager/TaskDetailsPane",
	"ecm/widget/PropertyGrid",
	"dojo/text!./templates/TaskDetailsPane.html"
], function(declare, AsyncTaskInstance, TaskDetailsPane, PropertyGrid, templateString) {

	/**
	 * @name ecm.widget.taskManager.TaskResultsPane
	 * @class The pane is responsible for listing the results of a task.
	 * @augments ecm.widget.taskManager.TaskDetailsPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.TaskResultsPane", [
		TaskDetailsPane
	], {
		templateString: templateString,
		widgetsInTemplate: true,
		messages: ecm.messages,

		createRendering: function(item) {
			this.logEntry("createRendering");

			this._createPropertiesGrid(item);

			this.logExit("createRendering");
		},

		_createPropertiesGrid: function(item) {
			if (this.propGrid)
				this.propGrid.destroy();

			var data = {};
			var resources = {};
			var propertiesArray = [];

			if (item instanceof AsyncTaskInstance)
				item = item.parent;

			for ( var index in item.taskRequest.results) {
				var parameter = item.taskRequest.results[index];
				if (parameter) {
					var name = index;
					var label = this.messages[index];
					var value = parameter;

					if (value && label) {
						data[name] = value;
						resources[name + "Label"] = label || name;
						propertiesArray.push(name);
					}
				}
			}

			var taskProperties = propertiesArray.join(",");
			this.propGrid = new PropertyGrid({
				data: data,
				properties: taskProperties,
				labelKeySuffix: "Label",
				resources: resources
			});

			this.propGrid.startup();
			this.propGrid.placeAt(this.gridContainer, "first");
			this.resize();
		}
	});
});

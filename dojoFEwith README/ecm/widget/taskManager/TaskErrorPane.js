/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"dojo/text!./templates/TaskPane.html"
], function(declare, domStyle, construct, ContentPane, TemplatedMixin, WidgetsInTemplateMixin, LoggerMixin, templateString) {

	/**
	 * @name ecm.widget.taskManager.TaskErrorPane
	 * @class The pane will be responsible for displaying errors of a task if it exists. It is a simple pane that will
	 *        display the errors in a list with the last error first.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.TaskErrorPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		LoggerMixin
	], {
		templateString: templateString,
		widgetsInTemplate: true,

		/**
		 * Creates and render the pane
		 */
		createRendering: function(item) {
			this.logEntry("createRendering");
			this.item = item;

			this.errorsContainer = construct.create("div");

			if (item.errors) {
				for ( var i = item.errors.length; i--;) {
					var error = item.errors[i];
					if (error && error.message) {
						construct.create("pre", {
							"style": "",
							"class": "taskError",
							"innerHTML": error.message
						}, this.errorsContainer);
					}
				}

				construct.place(this.errorsContainer, this.container, "only");

			}
			this.logExit("createRendering");
		}
	});
});

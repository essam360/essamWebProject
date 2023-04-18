/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/widget/process/ProcessorLayout",
	"ecm/widget/process/_ProcessorMixin",
	"ecm/widget/process/TrackerMilestonesPane",
	"ecm/widget/dialog/ConfirmationDialog",
	"dojo/text!./templates/MilestonesLayout.html"
],

function(declare, lang, domClass, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, idxHtml, LoggerMixin, Messages, ProcessorLayout, _ProcessorMixin, TrackerMilestonesPane, ConfirmationDialog, template) {

	/**
	 * @name ecm.widget.process.MilestonesLayout
	 * @class Provides a layout that is used to display milestones for an IBM FileNet P8 workflow.
	 * @augments ecm.widget.process.ProcessorLayout, ecm.widget.process._ProcessorMixin
	 */
	return declare("ecm.widget.process.MilestonesLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		ProcessorLayout,
		_ProcessorMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.MilestonesLayout.prototype */

		widgetsInTemplate: true,
		contentString: template,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.milestonesPane._stepMilestones = false;

			this.connect(this.milestonesPane, "onCompleteRendering", "onCompleteRendering");

			this.viewTabContainer.watch("selectedChildWidget", lang.hitch(this, function(name, oldPane, newPane) {
				this.milestonesPane.render();
			}));

			this.logExit("postCreate");
		},

		/**
		 * An event function called after the milestones layout has completed rendering.
		 */
		onCompleteRendering: function() {
			this.workclassText.innerHTML = idxHtml.escapeHTML(this.milestonesPane._workClassName);
		},

		/**
		 * Creates a {@link ecm.model.WorkItem} object from the parameter information that is passed in.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		createWorkItem: function(repository) {
			this.logEntry("createWorkItem");

			var workSpaceId = this._getRequestParam("workSpaceId");
			var workClassId = this._getRequestParam("workClassId");
			var workflowNumber = this._getRequestParam("workflowNumber");

			if (workSpaceId && workClassId) {
				var properties = {};
				properties["workSpaceId"] = workSpaceId;
				properties["workClassId"] = workClassId;
				properties["workflowNumber"] = workflowNumber;
				properties.id = workflowNumber;
				properties.name = workSpaceId;
				properties.repository = repository;

				this._workItem = new ecm.model.WorkItem(properties);

				if (this.milestonesPane) {
					this.milestonesPane.setItem(this._workItem);
					this.milestonesPane.render();

					// Fix visibility problem with first tab contents after dojo 1.9 upgrade
					domClass.remove(this.milestonesPane.domNode.parentNode, "dijitHidden");
					domClass.add(this.milestonesPane.domNode.parentNode, "dijitVisible");
					this.milestonesPane.resize();
				}
			}
			this.logExit("createWorkItem");
		},

		/**
		 * Closes the milestones window.
		 */
		onClose: function() {
			this.logEntry("onClose");

			if (this._closing) {
				return;
			}
			this._closing = true;

			if (window.opener && this._checkHost()) {
				window.opener.ecm.widget.dialog.stepProcessorWindow.onStepProcessorWindowCancelled(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("onClose");
		},

		destroy: function() {
			this._workItem = null;
			this.inherited(arguments);
		}
	});
});

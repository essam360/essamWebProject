/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/string",
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
	"ecm/widget/process/TrackerHistoryPane",
	"ecm/widget/process/TrackerMilestonesPane",
	"ecm/widget/dialog/ConfirmationDialog",
	"dojo/text!./templates/TrackerLayout.html"
],

function(declare, lang, domClass, string, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, idxHtml, LoggerMixin, Messages, ProcessorLayout, _ProcessorMixin, TrackerHistoryPane, TrackerMilestonesPane, ConfirmationDialog, template) {

	/**
	 * @name ecm.widget.process.TrackerLayout
	 * @class Provides the basic layout for the IBM FileNet P8 workflow tracker page. Users can use the tracker page to
	 *        monitor the progress of a running workflow.
	 * @augments ecm.widget.process.ProcessorLayout, ecm.widget.process._ProcessorMixin
	 */
	return declare("ecm.widget.process.TrackerLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		ProcessorLayout,
		_ProcessorMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.TrackerLayout.prototype */

		widgetsInTemplate: true,
		contentString: template,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.viewTabContainer.watch("selectedChildWidget", lang.hitch(this, function(name, oldPane, newPane) {
				if (oldPane && newPane.dojoAttachPoint == "trackerHistoryPane") {
					this.trackerHistoryPane.render();
				} else if (oldPane && newPane.dojoAttachPoint == "trackerMilestonesPane") {
					this.trackerMilestonesPane.render();
				}
			}));

			this.logExit("postCreate");
		},

		/**
		 * Creates a {@link ecm.model.WorkItem} object from the passed in parameter information.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		createWorkItem: function(repository) {
			this.logEntry("createWorkItem");
			var stepName = this._getRequestParam("stepName");
			var wobNum = this._getRequestParam("wobNum");
			var queueName = this._getRequestParam("queueName");
			if (wobNum && queueName) {
				var properties = {};
				properties["queueName"] = queueName;
				properties["wobNum"] = wobNum;
				properties.id = wobNum;
				properties.name = queueName;
				properties.repository = repository;

				this._workItem = new ecm.model.WorkItem(properties);

				this._workItem.retrieveTrackerParameters(lang.hitch(this, function(item) {
					this.updateView();
				}));
			}
			this.logExit("createWorkItem");
		},

		/**
		 * Updates the widgets with the current work item property information for rendering.
		 */
		updateView: function() {
			this.logEntry("updateView");
			var appName = ecm.model.desktop.applicationName;
			if (appName != null) {
				document.title = appName + " " + ecm.messages.process_tracker;
			} else {
				document.title = ecm.messages.process_tracker;
			}

			this.subjectText.innerHTML = idxHtml.escapeHTML(this._workItem.getValue("F_Subject"));
			this.deadline.innerHTML = this._workItem.getDisplayValue("F_Deadline");
			var originatorDisplayName = this._workItem.getDisplayValue("F_OriginatorDisplayName");
			if (!originatorDisplayName || originatorDisplayName.length == 0) // Fall back to short name if display name is blank
				originatorDisplayName = this._workItem.getDisplayValue("F_Originator");
			this.launchedby.innerHTML = idxHtml.escapeHTML(originatorDisplayName);
			this.receivedOn.innerHTML = this._workItem.getDisplayValue("F_StepReceived");

			if (this.trackerHistoryPane) {
				this.trackerHistoryPane.setItem(this._workItem);
				this.trackerHistoryPane.render();

				// Fix visibility problem with first tab contents after dojo 1.9 upgrade
				domClass.remove(this.trackerHistoryPane.domNode.parentNode, "dijitHidden");
				domClass.add(this.trackerHistoryPane.domNode.parentNode, "dijitVisible");
				this.trackerHistoryPane.resize();
			}

			if (this.trackerMilestonesPane) {
				this.trackerMilestonesPane.setItem(this._workItem);
			}

			// Resize ourselves to fit new content
			this.mainBorderContainer.resize();

			this.logExit("updateView");
		},

		/**
		 * Unlocks the tracker item and closes the tracker window.
		 */
		onClose: function() {
			this.logEntry("onClose");

			if (this._closing) {
				return;
			}
			this._closing = true;

			this._workItem.unlockStep(true, lang.hitch(this, function(response) {
				this._closeTrackerCompleted(response);
			}), false, lang.hitch(this, function() {
				this._closing = false;
			}), this._getBackgroundRequest());
			this.logExit("onClose");
		},

		/**
		 * Removes the tracker item from the tracker queue.
		 */
		onDelete: function() {
			this.logEntry("onDelete");

			if (this._confirmDelete) {
				this._confirmDelete.destroyRecursive();
			}
			this._confirmDelete = new ecm.widget.dialog.ConfirmationDialog({
				text: string.substitute(ecm.messages.process_tracker_delete_confirmation, [
					this._workItem.getValue("F_Subject")
				]),
				buttonLabel: ecm.messages.process_finish_button_label,
				title: ecm.messages.confirmation_icon_tooltip,
				onExecute: lang.hitch(this, function() {
					this._workItem.deleteTracker("false", lang.hitch(this, function(response) {
						this._deleteTrackerCompleted(response);
					}));
				})
			});
			this._confirmDelete.show();
			this.logExit("onDelete");
		},

		_deleteTrackerCompleted: function(response) {
			this.logEntry("deleteTrackerCompleted");
			if (window.opener && this._checkHost()) {
				window.opener.ecm.widget.dialog.stepProcessorWindow.onStepProcessorWindowCompleted(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("deleteTrackerCompleted");
		},

		_closeTrackerCompleted: function(response) {
			this.logEntry("closeTrackerCompleted");
			if (window.opener && this._checkHost()) {
				window.opener.ecm.widget.dialog.stepProcessorWindow.onStepProcessorWindowCancelled(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("closeTrackerCompleted");
		},

		destroy: function() {
			if (this._confirmDelete) {
				this._confirmDelete.destroyRecursive();
				this._confirmDelete = null;
			}
			this._workItem = null;
			this.inherited(arguments);
		}
	});
});

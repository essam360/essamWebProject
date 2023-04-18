/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dijit/layout/ContentPane",
	"ecm/Messages",
	"ecm/model/WorkItem",
	"ecm/widget/StartWorkflow",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/StartWorkflowDialogContent.html"
],

function(declare, lang, connect, domStyle, domClass, construct, ContentPane, Messages, WorkItem, StartWorkflow, BaseDialog, template) {

	/**
	 * Displays a dialog to allow the user to start IBM Content Manager workflows.
	 * 
	 * @name ecm.widget.dialog.StartWorkflowDialog
	 * @class Provides a dialog box that is used to start documents or folders on a Content Manager document routing
	 *        workflow.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.StartWorkflowDialog", [
		ecm.widget.dialog.BaseDialog
	], {
		/** @lends ecm.widget.dialog.StartWorkflowDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		messages: ecm.messages,

		/**
		 * A {@link ecm.model.Repository} object that the items reside in.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.model.WorkItem} objects to be started on a workflow.
		 */
		items: null,

		/**
		 * A text string holding the name of the workflow to default the selection to
		 */
		workflowName: null,

		/**
		 * A boolean setting that renders the workflow name selection control in readonly mode.
		 */
		workflowReadOnly: false,

		/**
		 * A callback function to be called after the items have been started on a workflow.
		 */
		callback: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmStartWorkflowDialog");
			domStyle.set(this.domNode, "maxHeight", "none");
			var titleLabel = this.messages.start_workflow_title;
			var okButtonLabel = this.messages.start_button_label;
			var introText = this.messages.start_workflow_intro;
			if (this.items[0].isInstanceOf && this.items[0].isInstanceOf(ecm.model.WorkItem)) {
				titleLabel = this.messages.edit_workflow_title;
				okButtonLabel = this.messages.save_button_label;
				introText = this.messages.edit_workflow_intro;
			}
			construct.create("span", {
				innerHTML: introText
			}, this.introText);
			this.set("title", titleLabel);
			this._okButton = this.addButton(okButtonLabel, "_onOkClicked", true, false);
			if (this.workflowName) {
				this._startWorkflow.workflowName = this.workflowName;
			}
			if (this.workflowReadOnly) {
				this._startWorkflow.workflowReadOnly = this.workflowReadOnly;
			}
			this._startWorkflow.setItems(this.items);
			this.connect(this._startWorkflow, "onInputChange", "_validateInput");
		},

		_validateInput: function() {
			this._okButton.set("disabled", !this._startWorkflow.isAllInputValid());
		},

		_onOkClicked: function() {
			var properties = {};
			properties.workflowName = this._startWorkflow.getWorkflowValue();
			properties.owner = this._startWorkflow.getOwnerValue();
			properties.priority = this._startWorkflow.getPriorityValue();
			properties.id = properties.workflowName;
			properties.repository = this.repository;

			var workItem = new WorkItem(properties);
			var self = this;
			if (this.items[0].isInstanceOf && this.items[0].isInstanceOf(ecm.model.WorkItem)) {
				workItem.editWorkflow(this.items, function(response) {
					self._onClose();
					var parent = self.items[0].parent;
					if (parent && parent.onRefreshWorklist) {
						// Refresh worklist for edit workflow action
						parent.onRefreshWorklist();
					}
				});
			} else {
				workItem.startWorkflow(this.items, function(response) {
					self._onClose();
				});
			}
		},

		_onClose: function() {
			this.onCancel();
			if (this.callback) {
				this.callback();
			}
		},

		/**
		 * Makes the dialog visible.
		 * 
		 * @param callback
		 *            A function that is called when the dialog is closed.
		 */
		show: function(callback) {
			var d = this.inherited(arguments);
			this.callback = callback;
			return d;
		},

		destroy: function() {
			this.repository = null;
			this.items = null;
			// This button is cleaned up by BaseDialog
			this._okButton = null;
			this.callback = null;
			this.inherited(arguments);
		},

		_noop: null
	});
});

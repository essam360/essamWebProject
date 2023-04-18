/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/store/DataStore",
	"dojo/data/ItemFileWriteStore",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Repository",
	"ecm/model/WorkItem",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/TransferWorkflowDefinitionDialogContent.html"

], function(declare, lang, domClass, DataStore, ItemFileWriteStore, idxHtml, LoggerMixin, Messages, Repository, WorkItem, BaseDialog, MessageDialog, template) {

	/**
	 * Displays a dialog where the user can Transfer a P8 workflow definition.
	 * 
	 * @name ecm.widget.dialog.TransferWorkflowDefinitionDialog
	 * @class Provides a dialog box that is used to transfer a P8 workflow definition.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.dialog.TransferWorkflowDefinitionDialog", [
		BaseDialog,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.TransferWorkflowDefinitionDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmTransferWorkflowDefinitionDialog");
			this.setTitle(this.messages.transfer_workflow_dialog_title);
			this.setIntroText(this.messages.transfer_workflow_dialog_info_text);

			this._transferButton = this.addButton(this.messages.transfer_workflow_dialog_transfer_button_label, "_transfer", false, false, "TRANSFER");
		},

		/**
		 * Makes the dialog visible.
		 */
		show: function(repository, item, callback) {
			this.logEntry("show");
			this.repository = repository;
			this.item = item;
			this.workItem = new WorkItem({
				id: this.item.id,
				name: this.item.name,
				repository: this.repository,
				connectionPoint: this.repository.connectionPoint
			});
			this.workItem.retrieveTransferedWorkflows(lang.hitch(this, function(transferedWorkflows) {
				this.workclass_name = this.workItem.workclass_name;
				this.workclass_name_exists = this.workItem.workclass_name_exists;
				this.transferedWorkflowName.innerHTML = idxHtml.escapeHTML(this.workclass_name);

				this.useWorkflowName.set('checked', true);

				this.useWorkflowName.setHoverHelp(this.rcUseWorkflowHoverHelp);
				this.useAnotherWorkflowName.setHoverHelp(this.rcAnotherWorkflowHoverHelp);

				if (transferedWorkflows.length > 0) {
					this.logDebug("Total transfered items:" + transferedWorkflows.length);
					this._setTransferedWorkflowsField(transferedWorkflows);
					this.inherited("show", []);
					this.resize();
				}
			}), this.item);
			this.logExit("show");
		},

		_setTransferedWorkflowsField: function(transferedWorkflows) {
			this.logEntry("_setTransferedWorkflowsField");
			if (this.transferedWorkflows.store && this.transferedWorkflows.store.store) {
				this.transferedWorkflows.store.store.close();
			}
			var storeData = [];
			for ( var i = 0; i < transferedWorkflows.length; i++) {
				storeData.push({
					"value": transferedWorkflows[i].name,
					"label": transferedWorkflows[i].name
				});
			}

			this._store = new ItemFileWriteStore({
				data: {
					identifier: 'value',
					label: 'label',
					items: storeData
				}
			});
			this.transferedWorkflows.store = new DataStore({
				"store": this._store
			});

			this.logExit("_setTransferedWorkflowsField");
		},

		resize: function() {
			this.inherited(arguments);
		},

		_transfer: function() {
			this.logEntry("_transfer");
			var workflowName = this.workclass_name;
			if (this.useAnotherWorkflowName.get('checked')) {
				workflowName = lang.trim(this.newWorkflowName.get('value'));
			}
			this.workItem.transferWorkflow(null, this.item, workflowName);

			this.onCancel();

			this.logExit("_transfer");
		},

		_onUseWorkflowChange: function() {
			if (this.useWorkflowName.get('checked')) {
				this.newWorkflowName.set('value', "");
				this._transferButton.set("disabled", false);
			} else {
				this._setTransferButtonDisabledState();
			}
		},

		_onWorkflowNameChange: function() {
			if (this.useAnotherWorkflowName.get('checked')) {
				this._setTransferButtonDisabledState();
			}
		},

		_onTransferedWorkflowChange: function() {
			var newValue = this.transferedWorkflows.get('value');
			this.newWorkflowName.set('value', newValue);
			this._transferButton.set("disabled", false);
		},

		_setTransferButtonDisabledState: function() {
			var workflowName = this.newWorkflowName.get('value');
			if (workflowName == null || lang.trim(workflowName).length == 0) {
				this._transferButton.set("disabled", true);
			} else {
				this._transferButton.set("disabled", false);
			}
		},

		/**
		 * Destroys the dialog.
		 */
		destroy: function() {
			this.workItem = null;
			this._store = null;
			if (this.transferedWorkflows) {
				this.transferedWorkflows.store = null;
			}
			this.transferedWorkflows = null;
			this.inherited(arguments);
		}

	});
});

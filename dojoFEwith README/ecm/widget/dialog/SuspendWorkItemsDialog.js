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
	"dojo/json",
	"dojo/text!./templates/SuspendWorkItemsDialogContent.html",
	"ecm/Messages",
	"ecm/model/Request",
	"ecm/widget/SuspendWorkItems",
	"ecm/widget/dialog/BaseDialog"
],

function(declare, lang, connect, domStyle, domClass, construct, dojojson, template, Messages, Request, SuspendWorkItems, BaseDialog) {

	/**
	 * Displays a dialog to allow the user to suspend IBM Content Manager work items.
	 * 
	 * @name ecm.widget.dialog.SuspendWorkItemsDialog
	 * @class Provides a dialog box that is used to suspend work items in a Content Manager workflow.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.SuspendWorkItemsDialog", [
		ecm.widget.dialog.BaseDialog
	], {
		/** @lends ecm.widget.dialog.SuspendWorkItemsDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		messages: ecm.messages,

		/**
		 * A {@link ecm.model.Repository} object that the items reside in.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.model.WorkItem} objects to be suspended.
		 */
		items: null,

		/**
		 * A callback function to be called after the items have been suspended.
		 */
		callback: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmSuspendWorkItemsDialog");
			domStyle.set(this.domNode, "maxHeight", "none");
			domStyle.set(this.introText, "width", "450px");
			var titleLabel = this.messages.suspend_workitems_title;
			var okButtonLabel = this.messages.suspend_button_label;
			var introText = this.messages.suspend_workitems_intro;
			construct.create("span", {
				innerHTML: introText
			}, this.introText);
			this.set("title", titleLabel);
			this._okButton = this.addButton(okButtonLabel, "_onOkClicked", true, false);
			this._suspendWorkItems.setItems(this.items);
			this.connect(this._suspendWorkItems, "onInputChange", "_validateInput");
			this._validateInput();
		},

		_validateInput: function() {
			this._okButton.set("disabled", !this._suspendWorkItems.isAllInputValid());
		},

		_onOkClicked: function() {
			var workItemIdJson = '{';
			for ( var i in this.items) {
				workItemIdJson = workItemIdJson + '"workItemId' + i + '":"' + this.items[i].id + '",';
			}
			workItemIdJson = workItemIdJson.substring(0, workItemIdJson.length - 1) + '}';
			var workflowParam = lang.mixin(dojojson.parse(workItemIdJson), {
				repositoryId: this.repository.id,
				suspendRadioSelected: this._suspendWorkItems.getSuspendOptionValue(),
				radioSuspend: this._suspendWorkItems.getSuspendOptionValue(),
				suspendForCount: this._suspendWorkItems.getSuspendForDurationValue(),
				suspendForUnits: this._suspendWorkItems.getSuspendForDurationUnits(),
				suspendUntilDate: this._suspendWorkItems.getSuspendUntilDateValue()
			});
			var _this = this;
			ecm.model.Request.invokeService("suspendWorkflow", this.repository.type, workflowParam, function(response) {
				_this._onClose();
				var parent = _this.items[0].parent;
				if (parent.isInstanceOf && parent.isInstanceOf(ecm.model.Worklist)) {
					// Refresh worklist for edit workflow action
					parent.onRefreshWorklist();
				}
			}, true);
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
		 *            A callback is a function that is called when the dialog is closed.
		 */
		show: function(callback) {
			var d = this.inherited(arguments);
			this.callback = callback;
			return d;
		},

		_noop: null
	});
});

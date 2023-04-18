/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/dom-class",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/ImportSummaryDialog.html"
],

function(declare, connect, domClass, BaseDialog, template) {

	/**
	 * @name ecm.widget.dialog.ImportSummaryDialog
	 * @class Provides a dialog box that displays a question and prompts the user to approve or cancel the action.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @private
	 */
	return declare("ecm.widget.admin.ImportSummaryDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ConfirmationDialog.prototype */

		text: "confirm?",
		buttonLabel: ecm.messages.yes,
		contentString: template,
		cancelButtonDefault: false,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmImportSummaryDialog");
			this.setTitle(this.title || this.buttonLabel);
			this.addButton(this.buttonLabel, this.onExecute, false, !this.cancelButtonDefault);

			// Make the cancel button the default if requested.
			if (this.cancelButtonDefault) {
				this.autofocus = false;
				connect.connect(this, "onKeyDown", this, function(event) {
					if (event.keyCode == 13)
						this["onCancel"]();
				});
			}
		},

		show: function() {
			this.inherited(arguments);
			if (this.cancelButtonDefault) {
				this.cancelButton.focus();
			}
		}
	});
});

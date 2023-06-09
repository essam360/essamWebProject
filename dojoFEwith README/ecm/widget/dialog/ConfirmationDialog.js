/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-attr",
	"./BaseDialog",
	"dojo/text!./templates/ConfirmationDialogContent.html"
], //
function(declare, connect, lang, domClass, domAttr, BaseDialog, template) {

	/**
	 * @name ecm.widget.dialog.ConfirmationDialog
	 * @class Provides a dialog box that displays a question and prompts the user to approve or cancel the action.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ConfirmationDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ConfirmationDialog.prototype */

		text: "confirm?",
		buttonLabel: ecm.messages.yes,
		contentString: template,
		cancelButtonDefault: false,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmConfirmationDialog minor");
			domAttr.set(this.domNode, "aria-describedby", this.description.id);
			this.setTitle(this.title || this.buttonLabel);
			this.addButton(this.buttonLabel, this.onExecute, false, !this.cancelButtonDefault);

			// Make the cancel button the default if requested.
			if (this.cancelButtonDefault) {
				connect.connect(this, "onKeyDown", this, function(event) {
					if (event.keyCode == 13)
						this["onCancel"]();
				});
			}

			var locale = ecm.model.desktop.valueFormatter.getLocale();
			if (locale == "he" || locale == "iw") {
				domClass.add(this.titleNode, "ecmConfirmationDialogHEIWOnly");
			}
		},

		show: function() {
			this.inherited(arguments);
			if (this.cancelButtonDefault) {
				setTimeout(lang.hitch(this, function() {
					this.cancelButton.focus();
				}, 300));
			}
		}
	});
});

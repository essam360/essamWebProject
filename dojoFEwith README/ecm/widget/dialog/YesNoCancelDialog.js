/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"./BaseDialog",
	"dojo/text!./templates/ConfirmationDialogContent.html"
], function(declare, domClass, BaseDialog, template) {

	/**
	 * @name ecm.widget.dialog.YesNoCancelDialog
	 * @class Provides a dialog box that displays a question and and the buttons <strong>Yes</strong>, <strong>No</strong>,
	 *        and <strong>Cancel</strong>.
	 *        <p>
	 *        For example, this dialog is commonly displayed when a user closes a document that contains changes. In
	 *        this situation, the user is asked whether the changes are to be saved. The buttons perform the following
	 *        actions:
	 *        <ul>
	 *        <li> <strong>Yes</strong>: The changes are saved and the document is closed. </li>
	 *        <li> <strong>No</strong>: The changes are discarded and the document is closed. </li>
	 *        <li> <strong>Cancel</strong>: The document is left open for the user to continue editing. </li>
	 *        </ul>
	 *        </p>
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.YesNoCancelDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.YesNoCancelDialog.prototype */
		contentString: template,
		title: ecm.messages.confirmation_icon_tooltip,
		yesLabel: ecm.messages.yes,
		noLabel: ecm.messages.no,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmConfirmationDialog minor");
			this.setTitle(this.title);
			this.noButton = this.addButton(this.noLabel, this.onNo, false, false);
			this.yesButton = this.addButton(this.yesLabel, this.onYes, false, true);
		}
	});
});

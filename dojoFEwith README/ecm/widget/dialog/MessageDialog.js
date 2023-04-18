/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"./BaseDialog",
	"dojo/text!./templates/MessageDialogContent.html"
], function(declare, domClass, domStyle, domAttr, BaseDialog, template) {

	/**
	 * @name ecm.widget.dialog.MessageDialog
	 * @class Provides a dialog box that displays a simple message to the user. The following syntax shows how to use
	 *        this dialog box:
	 * 
	 * <pre>
	 * var messageDialog = new ecm.widget.dialog.MessageDialog({
	 * 	text: &quot;My message&quot;
	 * });
	 * messageDialog.show();
	 * </pre>
	 * 
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.MessageDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.MessageDialog.prototype */

		/* Text message that will be display in this dialog */
		text: "",

		/* Dialog title */
		buttonLabel: ecm.messages.message_dialog_title,

		/* @private Dialog HTML template */
		contentString: template,

		/* @since 2.0.2 Icon class is a CSS class that represent a image display before text */
		iconClass: "informationIcon",

		/* @since 2.0.2 Tooltip for alt attribute */
		tooltip: ecm.messages.message_dialog_title,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmMessageDialog minor");
			this.setTitle(this.buttonLabel);
			if (this.iconClass && this.iconClass != "informationIcon")
				domClass.replace(this.icon, this.iconClass);
			this.setResizable(true);
			domAttr.set(this.icon, "alt", this.tooltip);

			var descId = domAttr.get(this.description, "id") || "";
			if (descId) {
				var labelBy = domAttr.get(this.cancelButton.focusNode, "aria-labelledby") || "";
				domAttr.set(this.cancelButton.focusNode, "aria-labelledby", descId + " " + labelBy);
			}
		},

		/**
		 * Displays the given content in this dialog.
		 * 
		 * @param innerHTML
		 *            A String
		 * @since 2.0.2
		 */
		showMessage: function(innerHTML) {
			if (this.description.innerHTML != innerHTML) {
				this.description.innerHTML = innerHTML;

				// Reset the dimensions of the content area to force the dialog to fit new content
				domStyle.set(this.contentArea, "height", "auto");
				domStyle.set(this.contentArea, "width", "auto");
			}
			this.show();
		}
	});
});

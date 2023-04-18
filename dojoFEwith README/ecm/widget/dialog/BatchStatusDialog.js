/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"../../model/Desktop",
	"./BaseDialog",
	"dijit/ProgressBar",
	"dojo/text!./templates/BatchStatusDialogContent.html"
], function(declare, lang, domClass, domStyle, domAttr, Desktop, BaseDialog, ProgressBar, template) {

	/**
	 * @name ecm.widget.dialog.BatchStatusDialog
	 * @class Provides a dialog box that is used to display a status message during batch processing of multiple
	 *        requests to the server.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.BatchStatusDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.BatchStatusDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A boolean value. If <code>true</code>, progress bar is displayed on batch status dialog.
		 */
		withProgressBar: false,

		/**
		 * A boolean value. If <code>true</code>, loading icon is displayed on batch status dialog.
		 */
		withLoadingIcon: true,

		/**
		 * A boolean value. If <code>true</code>, a <strong>Cancel</strong> button is displayed so that the user can
		 * cancel the batch operation at any time. It is the responsibility of the batch operation to monitor the
		 * <code>onCancel</code> event and process the cancel request.
		 */
		cancellable: false,

		/**
		 * A boolean value that controls whether the batch status window locks the background window. If
		 * <code>true</code>, the background window is not locked and the user can interact with the background
		 * window.
		 */
		modeless: true,

		/**
		 * From {@link ecm.widget.dialog.BaseDialog}. This is set to <code>false</code> so that the batch status
		 * dialog automatically resizes to display the full status message (no scrollbars).
		 */
		fitContentArea: false,

		/**
		 * The title string for the batch status dialog.
		 */
		title: null,

		/**
		 * Creates the batch status dialog.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmBatchStatusDialog minor");
			if (this.modeless) {
				// The "class" property provides a way to override the style settings for the underlay.
				// The suffix "_underlay" is appended to the end of each name in "class" and the resulting
				// "classname1_underlay", "classname2_underlay", ... class names are set on the underlay.
				//
				// BatchStatusDialog.css contains this entry to hide the underlay:
				//
				//    .modeless_underlay {
				//       display: none;
				//    }
				//
				this["class"] = "modeless";
			}
			if (this.cancellable) {
				// Add our own cancel button to avoid the handling linked to the default cancel button.
				this._quitButton = this.addButton(this.messages.cancel, "onQuit", false, false, "QUIT");
			}
			this.setTitle(this.title);
			//this.setWidth(250);
		},

		startup: function() {
			this.inherited("startup", arguments);

			// Prevent key strokes like ESC from closing this status dialog.
			this._onKey = function() {
			};

			// Show the title if there is title text.
			domStyle.set(this.titleBar, "display", this.title ? "" : "none");

			// Hide the built-in cancel button.
			domStyle.set(this.cancelButton.domNode, "display", "none");

			// Center the only button, the quit button that replaces the built-in cancel button.
			domStyle.set(this.actionBar, "text-align", "center");

			// Only show the action bar & quit button if the status window has been set to cancellable.
			this.showActionBar(this.cancellable);

			//Only show the progress bar if the status window has been set to withProgressBar.
			this.showProgressBar(this.withProgressBar);

			//Only show the loading icon if the status window has been set to withLoadingIcon.
			this.showLoadingIcon(this.withLoadingIcon);
		},

		/**
		 * Updates the status message.
		 */
		updateStatusMessage: function(statusMessage) {
			this.contentNode.innerHTML = statusMessage ? statusMessage : "";
			if (this.cancellable) {
				domStyle.set(this.actionBar, "minHeight", "30px");
				domStyle.set(this.titleBar, "minHeight", "30px");
			}
			this.resize();
		},
		/**
		 * Updates value for progress bar.
		 */
		updateValueInProgressBar: function(percentage) {
			this.progressBar.set({
				value: percentage,
			});
		},
		/**
		 * Updates label for progress bar.
		 */
		updateLabelInProgressBar: function(message) {
			this.progressBar.set({
				label: message,
			});
			domAttr.set(this.progressBar.domNode, "aria-valuetext", message);
		},
		/**
		 * Shows or hides the progress bar.
		 * 
		 * @param show
		 *            If true, the progress bar will be shown. If false, the progress bar is hidden.
		 */
		showProgressBar: function(show) {
			if (show) {
				domStyle.set(this.progressBar.domNode, "display", "");
			} else {
				domStyle.set(this.progressBar.domNode, "display", "none");
			}
			this.resize();
		},
		/**
		 * Shows or hides the loading icon.
		 * 
		 * @param show
		 *            If true, the loading icon will be shown. If false, the loading icon is hidden.
		 */
		showLoadingIcon: function(show) {
			if (show) {
				domStyle.set(this.iconNode, "display", "");
			} else {
				domStyle.set(this.iconNode, "display", "none");
			}
			this.resize();
		},
		/**
		 * Event handler that is called when the batch status dialog is shown.
		 */
		onShow: function() {
			Desktop.onDisplayBatchStatusDialog();
		},

		/**
		 * Event handler that is called when the batch status dialog is hidden.
		 */
		onHide: function() {
			Desktop.onHideBatchStatusDialog();
		},

		/**
		 * Event handler that is called when the batch status dialog is canceled.
		 */
		onQuit: function() {
			// No need to continue displaying the quit button after it has been clicked.
			domStyle.set(this._quitButton.domNode, "display", "none");
			domStyle.set(this.actionBar, "display", "none");
			this.cancellable = false;
		},

		/**
		 * Event handler that overrides the default dialog <code>onCancel</code> event.
		 */
		onCancel: function() {
		}
	});
});

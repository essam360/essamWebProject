/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"dojo/dom-style",
	"./BaseDialog",
	"../ShowHyperlinkPane",
	"dojo/text!./templates/ShowHyperlinkDialogContent.html"
], function(declare, domClass, domStyle, BaseDialog, ShowHyperlinkPane, template) {

	/**
	 * @name ecm.widget.dialog.ShowHyperlinkDialog
	 * @class Provides a dialog box that is used to display the hyperlink to a folder or the hyperlink to a specific
	 *        version of a document.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ShowHyperlinkDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ShowHyperlinkDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,
		_messages: ecm.messages,
		repository: null,
		item: null,
		callback: null,
		showVersionSelection: true,
		version: null,
		expandable: false,

		/**
		 * Creates the show hyperlink (view link) dialog box.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmShowHyperlinkDialog");
			this.setResizable(true);
			if (this.showVersionSelection) {
				this.setIntroText(ecm.messages.show_hyperlink_intro);
			} else {
				this.setIntroText(ecm.messages.show_hyperlink_intro_no_version_select);
			}
			domStyle.set(this.domNode, "maxHeight", "none");
			if (!this.title) {
				this.set("title", this.messages.show_hyperlink_title);
			}

			this._showHyperlink.setShowVersionSelection(this.showVersionSelection);
			this._showHyperlink.setItem(this.item, this.version);
		},

		_onClose: function() {
			this.onCancel();
		},

		/**
		 * Displays the show hyperlink (view link) dialog box.
		 * 
		 * @param callback
		 *            Callback function that is called when the dialog box is closed.
		 */
		show: function(callback) {
			var d = this.inherited(arguments);
			this.resize();
			return d;
		},

		_noop: null
	});
});

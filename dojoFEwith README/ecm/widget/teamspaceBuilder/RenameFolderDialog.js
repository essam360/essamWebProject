/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/ValidationTextBox",
	"dijit/registry",
	"ecm/Messages",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/RenameFolderDialogContent.html"
],

function(declare, //
lang, //
has, //
domStyle, //
domClass, //
window, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ValidationTextBox, //
registry, //
Messages, //
BaseDialog, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.RenameFolderDialog
	 * @class Provides a dialog box that is used to rename a folder in a teamspace.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.teamspaceBuilder.RenameFolderDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.teamspaceBuilder.RenameFolderDialog.prototype */

		contentString: template,
		_callback: null,
		_folderName: null,

		constructor: function(args) {
			args = args || {};
			this._callback = args.callback;
			this._folderName = args.name;
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmRenameFolderDialog");
			this.addButton(this.messages.ok, "onOK", false, false);
			this.folderNameTextBox.set("textDir", has("text-direction"));
			this.folderNameTextBox.set("value", this._folderName);
			this.setTitle(ecm.messages.workspacebuilder_folders_props);
		},

		onOK: function() {
			// make sure name is valid
			if (this.folderNameTextBox.isValid()) {
				this._callback(this.folderNameTextBox.value);
				this.onCancel(); // close the dialog
			} else {
				this.folderNameTextBox.focus(); // focus on the name if not valid
			}
		}
	});
});

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
	"dijit/form/CheckBox",
	"dijit/form/SimpleTextarea",
	"dijit/form/ValidationTextBox",
	"dojox/uuid/Uuid",
	"dojox/uuid/generateRandomUuid",
	"ecm/Messages",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/EditRoleDialogContent.html"
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
CheckBox, //
SimpleTextarea, //
ValidationTextBox, //
Uuid, //
generateRandomUuid, //
Messages, //
BaseDialog, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.EditRoleDialog
	 * @class Provides a dialog box that is used to edit the name and description for a role.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.teamspaceBuilder.EditRoleDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.teamspaceBuilder.EditRoleDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		messages: ecm.messages,
		title: null,
		_callback: null,
		_roleName: null,
		_roleDescription: null,
		_item: null,

		constructor: function(args) {
			args = args || {};
			this._callback = args.callback;
			if (args.item) {
				this._item = args.item;
				this._createMode = false;
				this._roleName = args.roleName;
				this._roleDescription = args.roleDescription;
				this.title = ecm.messages.workspacebuilder_roles_edit_dialog_title_edit;
			} else {
				this.title = ecm.messages.workspacebuilder_roles_edit_dialog_title_new;
			}
			this.textDir = has("text-direction");
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmEditRoleDialog");
			this.addButton(this.messages.ok, "onOK", false, false);
			if (this._item) { // edit mode
				this.roleName.set("textDir", this.textDir);
				this.roleDescription.set("textDir", this.textDir);
				this.roleName.set("value", this._roleName);
				this.roleDescription.set("value", this._roleDescription);
			}
		},

		onOK: function() {
			// make sure no role name can be empty
			if (this.roleName.isValid()) {

				if (this._callback) {
					var description = this.roleDescription.value;
					if (description) {
						// replace newlines for protecting against MHTML vulnerability
						description = description.replace(/[\n\r]/g, " ");
					}
					var role = null;
					if (!this._item) {
						// new role
						role = {
							id: "{" + new Uuid(generateRandomUuid()) + "}",
							name: this.roleName.value,
							description: description,
							privileges: [
								"viewItemProperties"
							]
						};
					} else {
						// modify role
						role = {
							item: this._item,
							name: this.roleName.value,
							description: description
						};
					}
					this._callback(role);
				}

				this.onCancel(); // close the dialog
			} else {
				this.roleName.focus(); // focus on the name if not valid
			}
		}
	});
});

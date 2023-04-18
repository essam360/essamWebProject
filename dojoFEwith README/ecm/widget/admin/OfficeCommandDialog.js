/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/dom-class", //
	"ecm/MessagesMixin", //
	"ecm/widget/ValidationTextBox", //
	"ecm/widget/dialog/BaseDialog", //
	"ecm/model/admin/InterfaceTextConfig", //
	"dojo/text!./templates/OfficeCommandDialog.html"
], //

function(declare, lang, domClass, MessagesMixin, ValidationTextBox, BaseDialog, InterfaceTextConfig, template) {

	/**
	 * @private Part of the General Tab Desktop widgets.
	 * @name ecm.widget.admin.OfficeCommandDialog
	 * @class Provides a dialog box that is used to define a custom command.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.OfficeCommandDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.OfficeCommandDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAdminTab ecmOfficeCommandDialog");

			this.urlField.set("title", this.messages.admin_url_placeholder_text);
			this.setTitle(this.messages.admin_ms_custom_command_dialog_title);
			this.setIntroText(this.messages.admin_ms_custom_command_dialog_intro_text);
			this.okButton = this.addButton(this.messages.ok, "_saveButton", true, true);
			// Sets hover help
			this.labelField.setHoverHelp(this.customCommandLabelFieldHoverHelp);
			this.descriptionField.setHoverHelp(this.customCommandDescriptionFieldHoverHelp);
			this.urlField.setHoverHelp(this.customCommandUrlFieldHoverHelp);
			this.iconField.setHoverHelp(this.customCommandIconFieldHoverHelp);
		},

		show: function(editData) {
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			this.inherited(arguments);
		},

		_loadData: function() {
			// Clears value
			this.commandIdField.set("value", "");
			this.labelField.set("value", "");
			this.descriptionField.set("value", "");
			this.urlField.set('value', "");
			this.iconField.set('value', "");
			// Resets errors
			this.labelField.reset();
			this.descriptionField.reset();
			this.urlField.reset();
			this.iconField.reset();
			this.id = "";
			if (this._editData) {
				if (this._editData.id)
					this.id = this._editData.id;
				if (this._editData.commandId)
					this.commandIdField.set("value", this._editData.commandId);
				if (this._editData.label)
					this.labelField.set("value", this._editData.label);
				if (this._editData.description)
					this.descriptionField.set("value", this._editData.description);
				if (this._editData.url)
					this.urlField.set('value', this._editData.url);
				if (this._editData.icon)
					this.iconField.set('value', this._editData.icon);
			}
		},

		_onFieldChange: function() {
			this.okButton.set('disabled', !this._validateData()); // Disable ok button if not valid
		},

		_validateData: function() {
			return (this.labelField.get("value") != null && this.labelField.get("value") != "") && (this.urlField.get("value") != null && this.urlField.get("value") != "");
		},

		_saveButton: function() {
			if (this._validateData()) {
				var label = this.labelField.get('value');
				var description = this.descriptionField.get('value');
				var url = this.urlField.get('value');
				var icon = this.iconField.get('value');
				var screenData = {
					id: this.id,
					commandId: this._editData.commandId,
					label: label,
					description: description,
					icon: icon,
					url: url
				};
				this.onEdit(screenData);
				this.onCancel();
			}
		},

		// override to get data entered on the screen
		onEdit: function(screenData) {
		}
	});
});

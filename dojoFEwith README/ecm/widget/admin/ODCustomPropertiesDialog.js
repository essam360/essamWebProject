/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-construct",
	"dojo/string",
	"dojo/dom-style",
	"dijit/registry",
	"dojo/on",
	"dojo/store/Memory",
	"idx/html",
	"ecm/MessagesMixin",
	"dijit/form/Button",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/ODCustomPropertiesDialogContent.html"
],

function(declare, lang, array, construct, string, style, registry, on, MemoryStore, idxHtml, MessagesMixin, Button, ValidationTextBox, HoverHelp, BaseDialog, template) {

	/**
	 * @name ecm.widget.admin.ODCustomPropertiesDialog
	 * @class Provides a dialog box that is used to edit custom properties for the connection to an IBM Content Manager
	 *        OnDemand repository.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.ODCustomPropertiesDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.ODCustomPropertiesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		propertiesDatastore: null,

		postCreate: function() {
			this.inherited(arguments);
			this.setTitle(this.messages.admin_repcfg_ecpdialog_title_edit);
			this.okButton = this.addButton(this.messages.admin_repcfg_ecpdialog_save, "_saveCustomProperties", true, true);

			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			this.valueField.setHoverHelp(this.valueFieldHoverHelp);

			this.nameField.validator = lang.hitch(this, function(value, constraints) {
				return this.isNameFieldValid();
			});

			this.nameField.invalidMessage = this.messages.admin_repcfg_ecpdialog_nameInvalid;
		},

		show: function(store, editData) {
			this.propertiesDatastore = store;
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			return this.inherited(arguments);
		},

		_isEdit: function() {
			return this._editData != undefined && this._editData;
		},

		_loadData: function() {

			if (this._editData) {
				this._previousName = idxHtml.unescapeHTML( this._editData.name );
				this._previousValue = idxHtml.unescapeHTML( this._editData.value );
				this.setTitle(this.messages.admin_repcfg_ecpdialog_title_edit);
				this.okButton.set("label", this.messages.admin_repcfg_ecpdialog_save);
			} else {
				this._previousName = "";
				this._previousValue = "";
				this.setTitle(this.messages.admin_repcfg_ecpdialog_title_new);
				this.okButton.set("label", this.messages.admin_repcfg_ecpdialog_create);
			}
			this.nameField.set("value", this._previousName);
			this.valueField.set("value", this._previousValue);
		},

		_onFieldChange: function() {
			this.okButton.set('disabled', !this._validateData()); // Disable ok button if not valid
		},

		_validateData: function() {
			var valid = this.isNameFieldValid();
			if (valid && !this.valueField.isValid()) {
				valid = false;
			}
			return valid;
		},

		isNameFieldValid: function() {
			var name = this.nameField.get("value");
			var valid = ((name.length > 0) && (name.indexOf(' ') < 0));
			if (valid && this.propertiesDatastore && (name != this._previousName)) {
				if (this.propertiesDatastore.store.get({
					name: name
				})) {
					valid = false;
				}
			}
			return valid;
		},

		_saveCustomProperties: function() {
			if (this._validateData()) {
				var name = idxHtml.escapeHTML( this.nameField.get("value") );
				var value = idxHtml.escapeHTML( this.valueField.get("value") );
				var screenData = {
					name: name,
					value: value
				};
				if (this._isEdit()) {
					this.onEdit(screenData, this._editData);
				} else {
					this.onAdd(screenData);
				}
				this.onCancel();
			}
		},

		// override to get data entered on the screen
		onEdit: function(screenData, originalData) {
		},

		// override to get data entered on the screen
		onAdd: function(screenData) {
		}
	});
});

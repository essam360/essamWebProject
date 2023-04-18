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
	"ecm/MessagesMixin",
	"dijit/form/Button",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/GeneralCustomPropertiesDialogContent.html"
],

function(declare, lang, array, construct, string, style, registry, on, MemoryStore, MessagesMixin, Button, ValidationTextBox, HoverHelp, BaseDialog,template) {

	/**
	 * @name ecm.widget.admin.GeneralCustomPropertiesDialog
	 * @class Provides a dialog box that is used to edit custom properties f
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.GeneralCustomPropertiesDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.GeneralCustomPropertiesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		propertiesDatastore: null,

		postCreate: function() {
			this.inherited(arguments);
			this.editTitle = this.messages.admin_custom_setting_dialog_title_edit;
			this.addTitle = this.messages.admin_custom_setting_dialog_title_new;

			this.okButton = this.addButton(this.messages.admin_repcfg_ecpdialog_save, "_saveCustomProperties", true, true);

			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			this.valueField.setHoverHelp(this.valueFieldHoverHelp);

			this.valueField.validator = lang.hitch(this, function(value, constraints) {
				return this.isValueFieldValid();
			});

			
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
				this._previousName = this._editData.name;
				this._previousValue = this._editData.value;
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
			var valid = this.isValueFieldValid();
			if (valid && !this.valueField.isValid()) {
				valid = false;
			}
			return valid;
		},

		isValueFieldValid: function() {
			var name = this.nameField.get("value");
			var value = this.valueField.get("value");
			var valid = ((name.length > 0) && (name.indexOf(' ') < 0));
			valid = ((value.length > 0) && (value.indexOf(' ') < 0));
			if (valid && this.propertiesDatastore && (name != this._previousName)) {
				if (this.propertiesDatastore.store.get({
					name: name
				})) {
					valid = false;
					this.valueField.invalidMessage = this.messages.admin_custom_setting_dialog_nameInvalid;
					return valid;
				}
			}
			
			if(name == "enableSessionExpireWarning" && (value.toUpperCase()!="FALSE" && value.toUpperCase()!="TRUE")){
				valid = false;
				this.valueField.invalidMessage = this.messages.admin_custom_setting_dialog_bool_valueInvalid;
			}
			
			if(name == "sessionExpireWarningTime" && ((isNaN(Math.round(value)) || (value.indexOf('.')!=-1)))){
				valid = false;
				this.valueField.invalidMessage = this.messages.admin_custom_setting_dialog_int_valueInvalid;
			}
			
			return valid;
		},

		_saveCustomProperties: function() {
			if (this._validateData()) {
				var name = this.nameField.get("value");
				var value = this.valueField.get("value");
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

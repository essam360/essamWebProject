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
	"dojo/text!./templates/CustomSettingsDialog.html"
],

function(declare, lang, array, construct, string, style, registry, on, MemoryStore, MessagesMixin, Button, ValidationTextBox, HoverHelp, BaseDialog, template) {

	/**
	 * @name ecm.widget.admin.CustomSettingsDialog
	 * @class Provides a dialog box that is used to edit custom settings OnDemand repository.
	 * @augments dijit.Dialog
	 */
	var CustomSettingsDialog = declare("ecm.widget.admin.CustomSettingsDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.CustomSettingsDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		propertiesDatastore: null,

		nameFieldHoverHelp: "",
		valueFieldHoverHelp: "",

		addTitle: "",
		addIntroText: "",
		addOkButtonLabel: "",

		editTitle: "",
		editIntroText: "",
		editOkButtonLabel: "",

		invalidNameMessage: "",
		expandable: false,

		postCreate: function() {
			this.inherited(arguments);

			this.addTitle = this.messages.admin_repcfg_ecpdialog_title_new;
			this.addOkButtonLabel = this.messages.admin_repcfg_ecpdialog_create;
			this.editTitle = this.messages.admin_repcfg_ecpdialog_title_edit;
			this.editOkButtonLabel = this.messages.admin_repcfg_ecpdialog_save;
			this.invalidNameMessage = this.messages.admin_repcfg_ecpdialog_nameInvalid;

			this.okButton = this.addButton(this.editOkButtonLabel, "_saveCustomProperties", true, true);

			this.nameField.validator = lang.hitch(this, function(value, constraints) {
				return this.isNameFieldValid();
			});
		},

		show: function(store, editData) {
			this.setTitle(this.editTitle);
			this.setIntroText(this.editIntroText);

			this.nameField.invalidMessage = this.invalidNameMessage;
			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			this.valueField.setHoverHelp(this.valueFieldHoverHelp);

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
				this.setTitle(this.editTitle);
				this.setIntroText(this.editIntroText);
				this.okButton.set("label", this.editOkButtonLabel);
			} else {
				this._previousName = "";
				this._previousValue = "";
				this.setTitle(this.addTitle);
				this.setIntroText(this.addIntroText);
				this.okButton.set("label", this.addOkButtonLabel);
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
			
			if ( valid ) {
				valid = this.validateData();
			}
			
			return valid;
		},
		
		/**
		 * Validate any custom data on the form.  Return true if valid, false if not.
		 * This is called, only if the name and value field validation tests have passed.
		 * 
		 * @since 2.0.3.8
		 */
		validateData: function() {
			return true;
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

	return CustomSettingsDialog;
});

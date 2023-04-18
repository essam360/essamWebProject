/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"idx/html",//
	"ecm/MessagesMixin", //
	"ecm/widget/ValidationTextBox", //
	"ecm/widget/dialog/BaseDialog", //
	"ecm/model/admin/InterfaceTextConfig", //
	"dojo/_base/sniff", //
	"dojo/has!dojo-bidi?dojox/string/BidiComplex", //
	"dojo/text!./templates/MobileFeatureDialog.html"
], //

function(declare, lang, idxHtml, MessagesMixin, ValidationTextBox, BaseDialog, InterfaceTextConfig, has, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.MobileFeatureDialog
	 * @class Provides a dialog box that is used to map icons to MIME types.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.MobileFeatureDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.MobileFeatureDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			if (has("dojo-bidi")) {
				BidiComplex.attachInput(this.iconFileField.focusNode, "FILE_PATH");
				BidiComplex.attachInput(this.urlField.focusNode, "URL");
				this.iconFileField.textDir = "ltr";
				this.urlField.textDir = "ltr";
			}
			this.okButton = this.addButton(this.messages.ok, "_saveFeature", true, true);
			
			this.iconFileField.set("placeholder", this.messages.admin_icon_file_placeholder_text);
			this.iconFileField.set("title", this.messages.admin_icon_file_placeholder_text);
			this.urlField.set("placeholder", this.messages.admin_url_placeholder_text);
			this.urlField.set("title", this.messages.admin_url_placeholder_text);
		},

		show: function(editData) {
			this.setTitle(editData ? this.messages.admin_mobile_feature_dialog_title : this.messages.admin_mobile_feature_dialog_new_title);
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			this.inherited(arguments);
		},

		_isEdit: function() {
			return (this._editData != undefined && this._editData != null);
		},

		_loadData: function() {
			this.nameField.set("value", "");
			this.iconFileField.set('value', "");
			this.urlField.set('value', "");

			var contentTypes = [];
			this.id = "";
			if (this._editData) {
				if (this._editData.name)
					this.nameField.set("value", idxHtml.unescapeHTML( this._editData.name) );

				if (this._editData.iconFile)
					this.iconFileField.set('value', idxHtml.unescapeHTML( this._editData.iconFile) );

				if (this._editData.url)
					this.urlField.set('value', idxHtml.unescapeHTML( this._editData.url) );

				if (this._editData.id)
					this.id = this._editData.id;
			}
		},

		_onFieldChange: function() {
			this.okButton.set('disabled', !this._validateData()); // Disable ok button if not valid
		},

		_validateData: function() {
			return (this.nameField.get("value") != null && this.nameField.get("value") != "") && (this.iconFileField.get("value") != null && this.iconFileField.get("value") != "") && (this.urlField.get("value") != null && this.iconFileField.get("value") != "");
		},

		_saveFeature: function() {
			if (this._validateData()) {
				if (has("dojo-bidi")) {
					this.iconFileField.set("value", BidiComplex.stripSpecialCharacters(this.iconFileField.get("value")));
					this.urlField.set("value", BidiComplex.stripSpecialCharacters(this.urlField.get("value")));
				}
				var name = idxHtml.escapeHTML( this.nameField.get('value') );
				var iconFile = idxHtml.escapeHTML( this.iconFileField.get('value') );
				var url = idxHtml.escapeHTML( this.urlField.get('value') );

				var screenData = {
					id: this.id,
					name: name,
					iconFile: iconFile,
					url: url
				};

				if (screenData.id != "" && this._isEdit()) {
					this.onEdit(screenData, this._editData);
				} else {
					screenData.id = InterfaceTextConfig.getUniqueId(0);
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

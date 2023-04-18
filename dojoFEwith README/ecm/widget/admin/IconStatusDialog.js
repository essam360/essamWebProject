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
	"ecm/MessagesMixin",
	"dijit/form/Button",
	"dijit/form/RadioButton",
	"ecm/model/admin/IdLabelConfig",
	"ecm/widget/Select",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/FilteringSelect",
	"dojo/text!./templates/IconStatusDialogContent.html"
], //

function(declare, lang, array, construct, string, style, registry, on, MessagesMixin, Button, RadioButton, IdLabelConfig, Select, ValidationTextBox, HoverHelp, BaseDialog, FilteringSelect, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.IconStatusDialog
	 * @class Provides a dialog box that is used to edit the icons that are mapped to the document states.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.IconStatusDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.IconStatusDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			this.setWidth(600);
			this.setIntroText(this.messages.admin_icon_state_dialog_instructions);
			this.okButton = this.addButton(this.messages.ok, "_saveMapping", true, true);
			this.fileNameField.setHoverHelp(this.fileNameFieldHoverHelp);
			this.classNameField.setHoverHelp(this.classNameFieldHoverHelp);
			this.fileNameField.set("placeholder", this.messages.admin_icon_mapping_file_name_placeholder);
			this.classNameField.set("placeholder", this.messages.admin_icon_mapping_class_name_placeholder);
		},

		show: function(classes, editData) {
			this.setTitle(this.messages.admin_icon_state_dialog_title);
			this._classes = classes;
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			this.inherited(arguments);
		},

		_loadData: function() {
			this._clearOptions(this.classNameField);
			var options = [];
			options.push({
				value: "",
				label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			});
			if (this._classes) {
				for ( var i = 0; i < this._classes.length; i++) {
					var idLabelConfig = this._classes[i];
					var className = idLabelConfig.id;
					var labelText = idLabelConfig.getLabel();
					var label = "<img role='presentation' src='dojo/resources/blank.gif' class='" + className + "' />&nbsp;" + labelText;
					options.push({
						value: className,
						label: label
					});
				}
			}
			this.classNameField.set("options", options);

			this.fileNameField.set("value", "");
			this.classNameField.set("value", "");
			if (this._editData.fileName) {
				this.fileNameField.set("value", idxHtml.unescapeHTML( this._editData.fileName) );
				this.radioFileName.set("checked", true);
			} else if (this._editData.className) {
				this.classNameField.set("value", this._editData.className);
				this.radioClassName.set("checked", true);
			}
			this._onFieldChange();
		},

		_clearOptions: function(dropdown) {
			if (dropdown && dropdown.getOptions(0))
				dropdown.removeOption(dropdown.getOptions());
		},

		_onClassNameChange: function() {
			this.radioClassName.set("checked", true);
			this._onFieldChange();
		},

		_onFileNameChange: function() {
			this.radioFileName.set("checked", true);
			this._onFieldChange();
		},

		_onFieldChange: function() {
			this.okButton.set('disabled', !this._validateData()); // Disable ok button if not valid
		},

		_onUseClassName: function() {
		},

		_onUseFileName: function() {
		},

		_validateData: function() {
			if (this.radioFileName.get("checked")) {
				if (!this.fileNameField.isValid() || !this.fileNameField.get("value")) {
					return false;
				}
			} else {
				if (!this.classNameField.get("value")) {
					return false;
				}
			}
			return true;
		},

		_saveMapping: function() {
			if (this._validateData()) {
				var fileName = "", className = "";
				if (this.radioFileName.get("checked")) {
					fileName = idxHtml.escapeHTML( this.fileNameField.get("value") );
				} else {
					className = this.classNameField.get("value");
				}
				var screenData = {
					fileName: fileName,
					className: className
				};
				this.onEdit(screenData, this._editData);
				this.onCancel();
			}
		},

		// override to get data entered on the screen
		onEdit: function(screenData, originalData) {
		}
	});
});

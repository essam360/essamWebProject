/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/aspect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-class",
	"idx/html",
	"dijit/layout/ContentPane",
	"ecm/MessagesMixin",
	"ecm/model/admin/IdLabelConfig",
	"ecm/widget/Select",
	"idx/widget/SloshBucket",
	"idx/layout/BorderContainer",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/FilteringSelect",
	"dijit/form/Button",
	"dijit/form/RadioButton",
	"dojo/store/Memory",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/IconMappingDialogContent.html"
], //

function(declare, lang, array, string, aspect, has, construct, style, domClass, idxHtml, ContentPane, MessagesMixin, IdLabelConfig, Select, SloshBucket, BorderContainer, ValidationTextBox, HoverHelp, BaseDialog, FilteringSelect, Button, RadioButton, MemoryStore, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.IconMappingDialog
	 * @class Provides a dialog box that is used to map icons to MIME types.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.IconMappingDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.IconMappingDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			this.setIntroText(this.messages.admin_icon_mapping_instructions);
			this.okButton = this.addButton(this.messages.ok, "_saveMapping", true, true);
			this.fileNameField.setHoverHelp(this.fileNameFieldHoverHelp);
			this.classNameField.setHoverHelp(this.classNameFieldHoverHelp);

			domClass.add(this.domNode, "iconMappingDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);

			this.fileNameField.set("placeholder", this.messages.admin_icon_mapping_file_name_placeholder);
			this.classNameField.set("placeholder", this.messages.admin_icon_mapping_class_name_placeholder);
			this.addMimeTypeButton.set("disabled", true);
			this.inputMimeField.pattern = '([^,])*';
			this.inputMimeField.invalidMessage = this.messages.mime_type_input_invalid;

			if (has("dojo-bidi")) {
				BidiComplex.attachInput(this.fileNameField.focusNode, "URL");
				this.fileNameField.textDir = "ltr";
			}

			this.own(aspect.after(this.sloshBucket, "onAddRemove", lang.hitch(this, function() {
				this.okButton.set('disabled', !this._validateData()); // Disable OK button if all data isn't filled out successfully
			})));
		},

		show: function(contentTypes, classes, editData) {
			this.setTitle(editData ? this.messages.admin_icon_mapping_dialog_title : this.messages.admin_new_icon_mapping);
			this._contentTypes = contentTypes;
			this._classes = classes;
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			this.inherited(arguments);
		},

		_isEdit: function() {
			return this._editData != undefined && this._editData;
		},

		_loadData: function() {
			this.inputMimeField.set("value", "");
			this.inputMimeField.set("disabled", false);

			this._clearOptions(this.classNameField);
			var options = [];
			options.push({
				value: "",
				label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
				innerHTML: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			});
			if (this._classes) {
				for ( var i = 0; i < this._classes.length; i++) {
					var idLabelConfig = this._classes[i];
					var className = idLabelConfig.id;
					var labelText = idLabelConfig.getLabel();
					var label = "<img role='presentation' src='dojo/resources/blank.gif' class='" + className + "' />&nbsp;" + labelText;
					options.push({
						value: className,
						label: label,
						innerHTML: label
					});
				}
			}
			this.classNameField.set("options", options);

			this.fileNameField.set("value", "");
			this.classNameField.set('value', "");
			this.radioClassName.set("checked", true);
			var radioField = this.radioClassName;

			var contentTypes = [];
			if (this._editData) {
				if (this._editData.fileName) {
					this.fileNameField.set("value",  idxHtml.unescapeHTML( this._editData.fileName) );
					radioField = this.radioFileName;
				} else if (this._editData.className) {
					this.classNameField.set('value', this._editData.className);
				}
				contentTypes = this._editData.contentTypes;
			}

			setTimeout(lang.hitch(this, function() {
				this._loadContentTypes(contentTypes);
				radioField.set("checked", true);
				this._onFieldChange();
			}, 100));
		},

		_clearOptions: function(dropdown) {
			if (dropdown && dropdown.getOptions(0))
				dropdown.removeOption(dropdown.getOptions());
		},

		_loadContentTypes: function(selectedContentTypes) {
			var availableContentTypes = [];
			if (this._contentTypes) {
				for ( var i = 0; i < this._contentTypes.length; i++) {
					var contentTypeID = this._contentTypes[i];
					availableContentTypes.push({
						id: idxHtml.unescapeHTML( contentTypeID ),
						label: idxHtml.unescapeHTML( contentTypeID ),
						value: idxHtml.unescapeHTML( contentTypeID )
					});
				}
			}
			var availableStore = new MemoryStore({
				data: availableContentTypes
			});
			var availableStructure = [
				{
					field: "label",
					name: this.messages.mime_type_available,
					width: "100%"
				}
			];
			this.sloshBucket.setAvailableGridData(availableStore, availableStructure);
			if (has("text-direction") && this.sloshBucket.availableGrid) {
				this.sloshBucket.availableGrid.set("textDir", has("text-direction"));
			}

			var selectedContentTypeItems = [];
			if (selectedContentTypes != undefined && selectedContentTypes && selectedContentTypes.length > 0) {
				for ( var i = 0; i < selectedContentTypes.length; i++) {
					var contentType = selectedContentTypes[i];
					if (contentType && contentType != "") {
						selectedContentTypeItems.push({
							label: idxHtml.unescapeHTML( contentType ),
							value: idxHtml.unescapeHTML( contentType ),
							id: idxHtml.unescapeHTML( contentType )
						});
					}
				}
			}
			var selectedStore = new MemoryStore({
				data: selectedContentTypeItems
			});
			var selectedStructure = [
				{
					field: "label",
					name: this.messages.mime_type_selected,
					width: "100%"
				}
			];
			this.sloshBucket.setSelectedGridData(selectedStore, selectedStructure);
			if (has("text-direction") && this.sloshBucket.selectedGrid) {
				this.sloshBucket.selectedGrid.set("textDir", has("text-direction"));
			}
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
			this.addMimeTypeButton.set('disabled', this.inputMimeField.get('value') == "");
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
			if (this.sloshBucket.getSelectedItems().length == 0) {
				return false;
			}
			return true;
		},

		_onClickAddMimeType: function() {
			var value = idxHtml.escapeHTML( this.inputMimeField.get("value") );
			if (this.inputMimeField.isValid() && value != "") {
				this.sloshBucket.addToSelected({
					value: idxHtml.unescapeHTML( value ),
					id: idxHtml.unescapeHTML( value ),
					label: idxHtml.unescapeHTML( value )
				});
				this.inputMimeField.set("value", "");
				this._onFieldChange();
			}
		},

		_saveMapping: function() {
			if (this._validateData()) {
				var fileName = "", className = "";
				if (this.radioFileName.get("checked")) {
					if (!has("dojo-bidi")) {
						fileName = idxHtml.escapeHTML( this.fileNameField.get("value") );
					} else {
						fileName = BidiComplex.stripSpecialCharacters(this.fileNameField.get("value"));
					}
				} else {
					className = this.classNameField.get("value");
				}
				var contentTypeArray = [];
				var dataArray = this.sloshBucket.getSelectedItems();
				for ( var i = 0; i < dataArray.length; i++) {
					contentTypeArray.push(idxHtml.escapeHTML( dataArray[i].value) );
				}
				var screenData = {
					fileName: fileName,
					className: className,
					contentTypes: contentTypeArray
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
		},

		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		}
	});

});

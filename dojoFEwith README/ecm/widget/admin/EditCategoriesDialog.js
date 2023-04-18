/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/aspect",
	"ecm/MessagesMixin",
	"ecm/model/admin/IdLabelConfig",
	"ecm/widget/Select",
	"idx/widget/SloshBucket",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/FilteringSelect",
	"ecm/model/admin/InterfaceTextConfig",
	"dijit/form/Button",
	"dojo/store/Memory",
	"dojo/text!./templates/EditCategoriesDialog.html"
], //

function(declare, lang, array, has, aspect, MessagesMixin, IdLabelConfig, Select, SloshBucket, ValidationTextBox, HoverHelp, BaseDialog, FilteringSelect, InterfaceTextConfig, Button, MemoryStore, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.EditCategoriesDialog
	 * @class Provides a dialog box that is used to create edit service categories
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.EditCategoriesDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.EditCategoriesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		defaultContentTypes: null,

		postCreate: function() {
			this.inherited(arguments);
			this.setIntroText(this.messages.admin_icn_edit_edit_category_dialog_instructions);
			this.okButton = this.addButton(this.messages.ok, "_saveMapping", true, true);

			this.own(aspect.after(this.filterField, "_onInput", lang.hitch(this, "_filter"), true));
			this.own(aspect.after(this.filterField, "_setValueAttr", lang.hitch(this, "_filter"), true));

			this.addMimeTypeButton.set("disabled", true);
			this.inputMimeField.pattern = '([^,])*';
			this.inputMimeField.invalidMessage = this.messages.mime_type_input_invalid;
			this.filterField.set("placeHolder", this.messages.admin_file_type_filter_place_holder);
			

			this.own(aspect.after(this.sloshBucket, "onAddRemove", lang.hitch(this, function() {
				this.okButton.set('disabled', !this._validateData()); // Disable OK button if all data isn't filled out successfully
			})));
		},

		show: function(contentTypes, editData) {
			this.setTitle(editData ? this.messages.admin_icn_edit_edit_category_dialog_title : this.messages.admin_icn_edit_new_category_dialog_title);
			this.setIntroText(editData ? this.messages.admin_icn_edit_edit_category_dialog_instructions: this.messages.admin_icn_edit_new_category_dialog_instructions);
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			
			if( this._editData ){
				this.nameField.set( "disabled", true );
			}else{
				this.nameField.set( "disabled", false );
			}
			
			if( this._categoryNames && this._categoryNames.length && this._categoryNames.length>1 && this._categoryNames[0] ){
				this.nameField.setCustomValidationError(this.messages.admin_icn_edit_category_duplicate_error_message);
				this.nameField.customErrorValue = this._categoryNames[0];
				this.nameField.set( "constraints", this._categoryNames );
				this.nameField.parse = function(value, constraints){
					if( array.some( constraints, function(constraint){ return value.toLowerCase()==constraint.toLowerCase();} ) ){
						this.customErrorValue = value;
						return undefined;
					}else{
						return value;
					}
				}
			}
			
			this.inherited(arguments);
		},

		_isEdit: function() {
			return (this._editData != undefined && this._editData != null);
		},

		_loadData: function() {
			this.inputMimeField.set("value", "");
			this.inputMimeField.set("disabled", false);

			this.nameField.set("value", "");
			this.displayNameField.set("value", "");
			this.descriptionField.set('value', "");

			var contentTypes = [];
			this.id = "";
			if (this._editData) {
				if (this._editData.name)
					this.nameField.set("value", this._editData.name);
				if (this._editData.displayName)
					this.displayNameField.set("value", this._editData.displayName);
				if (this._editData.description)
					this.descriptionField.set('value', this._editData.description);
				if (this._editData.id)
					this.id = this._editData.id;

				contentTypes = this._editData.contentTypes;
			}

			setTimeout(lang.hitch(this, function() {
				this._loadContentTypes(contentTypes);
				this._onFieldChange();
			}, 100));
		},

		_loadContentTypes: function(selectedContentTypes) {
			var availableContentTypes = [];
			if (this.defaultContentTypes) {
				for ( var i = 0; i < this.defaultContentTypes.length; i++) {
					var contentTypeID = this.defaultContentTypes[i];
					availableContentTypes.push({
						label: contentTypeID,
						id: contentTypeID,
						value: contentTypeID
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
							label: contentType,
							id: contentType,
							value: contentType
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

			this.filterField.set("value", "");
		},

		_onFieldChange: function() {
			this.addMimeTypeButton.set('disabled', this.inputMimeField.get('value') == "");
			this.okButton.set('disabled', !this._validateData()); // Disable ok button if not valid
		},
		
		_onDisplayNameFieldChange: function(){
			if( !this._editData ){
				this.nameField.set('value', this._getIdValueFromName( this.displayNameField.getValue() ) );
			}
			this._onFieldChange();
		},
		
		_getIdValueFromName: function(name) {
			var id = "";
			if (name) {
				for ( var i = 0; i < name.length; i++) {
					var ch = name[i].charCodeAt();
					if ((ch > 47 && ch < 58) || (ch > 64 && ch < 91) || (ch > 96 && ch < 123)) {
						id += name[i];
					}
				}
			}
			return id;
		},

		_validateData: function() {
			if (this.sloshBucket.getSelectedItems().length == 0) {
				return false;
			}

			var value = this.nameField.get("value");
			if (value == null || value == "")
				return false;

			var value = this.displayNameField.get("value");
			if (value == null || value == "")
				return false;
			
			return true;
		},

		_onClickAddMimeType: function() {
			var value = this.inputMimeField.get("value");
			if (this.inputMimeField.isValid() && value != "") {
				this.sloshBucket.addToSelected({
					value: value,
					id: value,
					label: value
				});
				this.inputMimeField.set("value", "");
				this._onFieldChange();
			}
		},

		_saveMapping: function() {
			if (this._validateData()) {
				var nameValue = this.nameField.get('value');
				var displayNameValue = this.displayNameField.get('value');
				var descriptionValue = this.descriptionField.get('value');

				var contentTypeArray = [];
				var dataArray = this.sloshBucket.getSelectedItems();
				for ( var i = 0; i < dataArray.length; i++) {
					contentTypeArray.push(dataArray[i].value);
				}
				var screenData = {
					id: this.id,
					name: nameValue,
					displayName: displayNameValue,
					description: descriptionValue,
					contentTypes: contentTypeArray
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
		},

		/**
		 * Filter mime types.
		 */
		_filter: function() {
			var filterData = this.filterField.get("value");
			if (this._filterData != filterData) {
				this._filterData = filterData;
				this.sloshBucket.filter({
					"label": filterData
				});
			}
		}
	});
});

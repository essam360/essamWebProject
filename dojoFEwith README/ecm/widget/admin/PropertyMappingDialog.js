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
	"dojo/dom-construct",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/registry",
	"dojo/on",
	"ecm/MessagesMixin",
	"ecm/model/admin/IdLabelConfig",
	"ecm/widget/Select",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/FilteringSelect",
	"dijit/form/Button",
	"dijit/form/MultiSelect",
	"dojo/store/Memory",
	"ecm/model/admin/InterfaceTextConfig",
	"dojo/text!./templates/PropertyMappingDialog.html"
],

function(declare, lang, array, has, construct, string, aspect, domClass, style, registry, on, MessagesMixin, IdLabelConfig, Select, ValidationTextBox, HoverHelp, BaseDialog, FilteringSelect, Button, MultiSelect, MemoryStore, InterfaceTextConfig, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.PropertyMappingDialog
	 * @class Provides a dialog box that is used to map icons to MIME types.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.admin.PropertyMappingDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.PropertyMappingDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		expandable: false,
		keepContentAreaOverflowAuto: true,

		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmPropertyMappingDialog");
			this.okButton = this.addButton(this.messages.ok, "_saveMapping", true, true);

			this._property_input_field.setHoverHelp(this._properties_field_hover_help);
			this._mapped_property_field.setHoverHelp(this._mapped_property_field_hover_help);

			on(this._type_field, "Change", lang.hitch(this, this._createMappedPropertyStore));
			on(this._mapped_property_field, "Change", lang.hitch(this, this.onMappedPropertyChange));

			on(this._properties_field, "Click", lang.hitch(this, function(item) {
				this.removePropertyButton.set("disabled", !this._properties_field.getSelected());
			}));

			this.own(aspect.after(this._property_input_field, "_onInput", lang.hitch(this, function(item) {
				this.addPropertyButton.set("disabled", !this._property_input_field.get("value"));
			}), true));

			this.textDir = has("text-direction");
		},

		show: function(repositoryPropertiesStore, dataTypeStore, editData) {
			this.setTitle(editData ? this.messages.admin_property_mapping_title : this.messages.admin_new_property_mapping_title);
			this.setIntroText(this.messages.admin_property_mapping_instruction);
			this._repositoryPropertiesStore = repositoryPropertiesStore;
			this._dataTypeStore = dataTypeStore;
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			this.inherited(arguments);
		},

		_isEdit: function() {
			return this._editData != undefined && this._editData;
		},

		_loadData: function() {
			this._property_input_field.reset();
			this._mapped_property_field.reset();
			this.removePropertyButton.set("disabled", true);

			// clean up previous entry. 
			while (this._properties_field.domNode.childNodes != null && this._properties_field.domNode.childNodes.length > 0)
				this._properties_field.domNode.removeChild(this._properties_field.domNode.childNodes[0]);

			this._mapped_property_field.set("store", this._repositoryPropertiesStore);
			this._type_field.set("store", this._dataTypeStore);

			if (this._editData) {
				if (this._editData.officeProperties) {
					var properties = this._editData.officeProperties.split(", ");
					array.forEach(properties, lang.hitch(this, function(entry) {
						var o = window.document.createElement('option');
						o.innerHTML = entry;
						this._properties_field.domNode.appendChild(o);
					}));
				}

				this._createMappedPropertyStore(this._editData.dataType.toUpperCase(), lang.hitch(this, function() {
					setTimeout(lang.hitch(this, function() {
						this._mapped_property_field.set("value", this._editData.repositoryProperty);
					}), 100);
					this._type_field.set("value", this._editData.dataType.toUpperCase());
				}));
			} else {
				this.addPropertyButton.set("disabled", true);
				this._createMappedPropertyStore("STRING", lang.hitch(this, function() {
					this._type_field.set('value', "STRING"); // using string as default
					this._mapped_property_field.set("value", "");
				}));
			}
			this._onFieldChange();
		},

		_onFieldChange: function() {
			var val = this._property_input_field.get('value') ? lang.trim(this._property_input_field.get('value')) : "";
			this.okButton.set('disabled', !this._validateData() || !!val); // Disable ok button if not valid
			this.addPropertyButton.set("disabled", !this._property_input_field.get("value"));
		},

		_validateData: function() {
			return (this._mapped_property_field.isValid() && this._properties_field.domNode.childNodes.length > 0 && this._type_field.isValid());
		},

		onClickAddProperty: function() {
			var value = this._property_input_field.get("value");
			if (value) {
				var o = window.document.createElement('option');
				if (this.textDir) {
					value = this.enforceTextDirWithUcc(o, value);
				}
				o.innerHTML = value;
				this._properties_field.domNode.appendChild(o);
				this._property_input_field.reset();
			}
			this._onFieldChange();
		},

		onClickRemoveProperty: function() {
			array.forEach(this._properties_field.getSelected(), lang.hitch(this, function(entry, index) {
				this._properties_field.domNode.removeChild(entry);
			}));
			this._onFieldChange();
		},

		_createMappedPropertyStore: function(dataType, callback) {
			var values = [];
			var items = this._repositoryPropertiesStore.query({});
			for ( var i = 0; i < items.length; i++) {
				if (items[i].disable == false && (items[i].type == dataType || items[i].dataType == dataType)) {
					values.push({
						id: items[i].value,
						value: items[i].value,
						label: items[i].label
					});
				}
			}
			this._mapped_property_field.store = new MemoryStore({
				data: values
			});
			this._mapped_property_field.set("value", ""); // reset it.
			if (callback)
				callback();
		},

		onMappedPropertyChange: function(item) {
			var notEmpty = (this._mapped_property_field.get("value") != null && this._mapped_property_field.get("value") != "");
			this._onFieldChange();
		},

		_saveMapping: function() {
			if (this._validateData()) {
				var dataArray = this._properties_field.domNode.childNodes;
				var properties = [];
				var length = dataArray.length;
				for ( var i = 0; i < length; i++) {
					var item = dataArray[i];
					properties.push(item.value);
				}

				var screenData = {};
				screenData.id = (this._editData) ? this._editData.id : InterfaceTextConfig.getUniqueId(0);
				screenData.officeProperties = properties;
				screenData.dataType = this._type_field.get("value");
				screenData.repositoryProperty = this._mapped_property_field.get("value");
				screenData.label = this._mapped_property_field.item.label;

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

		// override to get data clear
		onAbort: function(screenData) {
		}

	});

});

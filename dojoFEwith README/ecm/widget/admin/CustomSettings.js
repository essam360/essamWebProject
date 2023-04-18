/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/aspect",
	"dojo/json",
	"dojo/dom-class",
	"dojo/dom-style",
	"idx/html",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/layout/_LayoutWidget",
	"idx/layout/BorderContainer",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/Focus",
	"gridx/modules/Body",
	"gridx/modules/CellWidget",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/listView/gridModules/SingleSort",
	"ecm/widget/FilteringSelect",
	"ecm/widget/admin/CustomSettingsDialog",
	"dijit/form/Button",
	"dojo/store/Memory",
	"dojo/text!./templates/CustomSettings.html"
], //

function(declare, //
lang, //
has, //
string, //
aspect, //
json, //
domClass, //
domStyle, //
idxHtml, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
_LayoutWidget, //
BorderContainer, //
Grid, //
Cache, //
SelectRow, //
ExtendedSelectRow, //
Focus, //
Body, //
CellWidget, //
LoggerMixin, //
MessagesMixin, //
SingleSort, //
FilteringSelect, //
CustomSettingsDialog, //
Button, //
MemoryStore, //
template) {

	/**
	 * @name ecm.widget.admin.CustomSettings
	 * @class General purpose widget for defining one or more custom settings.
	 */
	var CustomSettings = declare("ecm.widget.admin.CustomSettings", [
		_LayoutWidget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.CustomSettings.prototype */

		templateString: template,
		widgetsInTemplate: true,
		dialogClass: CustomSettingsDialog,

		_objectMode: false,

		postCreate: function() {
			this.inherited(arguments);
		},

		// Called when the user hits the Reset button 
		startup: function() {
			this.inherited(arguments);
			this._setupCustomPropertiesGrid();
			this._checkGridButtons();
			this.resize();
		},

		_setupCustomPropertiesGrid: function() {
			if (this.grid) {
				this.grid.destroy();
			}

			var escapeFunction = function(data, rowId) {
				if (data && lang.isString(data)) {
					return idxHtml.escapeHTML(data);
				} else {
					return data;
				}
			};

			this.grid = new Grid({
				"aria-label": ecm.messages.admin_repcfg_custom_properties_label,
				region: "center",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: new MemoryStore({
					data: []
				}),
				structure: [
					{
						field: "name",
						name: this.messages.admin_repcfg_custom_head1,
						width: "40%",
						decorator: escapeFunction
					},
					{
						field: "value",
						name: this.messages.admin_repcfg_custom_head2,
						width: "60%",
						decorator: escapeFunction
					}
				],
				modules: [
					CellWidget,
					Focus,
					SelectRow,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 1,
								descending: false
							}
						]
					},
					{
						moduleClass: ExtendedSelectRow,
						triggerOnCell: true
					}
				]
			});

			domClass.add(this.grid.domNode, "compact gridxWholeRow");

			this.gridContainer.addChild(this.grid);
			this.grid.startup();

			this.own(aspect.after(this.grid.select.row, "onSelectionChange", lang.hitch(this, "_checkGridButtons"), true));
			this.own(aspect.after(this.grid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._onFieldChange();
				setTimeout(lang.hitch(this, lang.hitch(this, function() {
					this.grid.vScroller.scrollToRow(this.grid.row(id).visualIndex() - 1, true);
				}), 1500));
			}), true));
			this.own(aspect.after(this.grid.model, "onDelete", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this.grid.model, "onSet", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this.grid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._editItem(this.grid.row(evt.rowIndex).item());
			}), true));
		},

		/**
		 * Accepts JSON Array in the format: [{"name":"name1","value":"value1"},{"name":"name2","value":"value2"},...]
		 * Or accepts JSON object in the format: {"name1":"value1", "name2:value2",...} An empty array or object can be
		 * set to initialize the mode for return JSON from getCustomSettingsJSON
		 */
		setCustomSettingsJSON: function(settingsJSON) {
			if (settingsJSON != null && dojo.isString(settingsJSON) && settingsJSON != "") {
				var data = json.parse(settingsJSON);
				this.clearCustomSettings();
				if (dojo.isArray(data)) {
					for (var i = 0; i < data.length; i++) {
						data[i].id = "id_" + i;
						this.grid.model.store.add(data[i]);
					}
				} else if (dojo.isObject(data)) {
					this._objectMode = true;
					var i = 0;
					for ( var key in data) {
						if (data.hasOwnProperty(key)) {
							this.grid.model.store.add({
								id: "id_" + i++,
								name: key,
								value: data[key]
							});
						}
					}
				}
			}
		},

		/**
		 * By default returns a JSON Array in the format:
		 * [{"name":"name1","value":"value1"},{"name":"name2","value":"value2"},...] Optionally returns a JSON Object in
		 * the format: {"name1":"value1", "name2:value2",...} When setCustomSettingsJSON is called initially with a JSON
		 * Object, either empty or not.
		 */
		getCustomSettingsJSON: function() {
			var values = this._objectMode ? {} : [];
			var items = this.grid.model.store.query({});

			for (var i = 0; i < items.length; i++) {
				var propertyName = items[i].name;
				var propertyValue = items[i].value;
				var replaceString = /\\/g;
				if (propertyName.indexOf("\\\\") == -1) {
					propertyName = propertyName.replace(replaceString, "\\\\");
				}
				if (propertyValue.indexOf("\\\\") == -1) {
					propertyValue = propertyValue.replace(replaceString, "\\\\");
				}
				if (this._objectMode) {
					values[propertyName] = propertyValue;
				} else {
					values.push({
						"name": propertyName,
						"value": propertyValue
					});
				}
			}

			return json.stringify(values);
		},

		clearCustomSettings: function() {
			var items = this.grid.model.store.query({});
			for (var i = 0; i < items.length; i++) {
				this.grid.model.store.remove(items[i].id);
			}
		},

		_checkGridButtons: function() {
			this.newPropertyButton.set('disabled', false);
			this.editPropertyButton.set('disabled', this.grid.select.row.getSelected().length != 1);
			this.deletePropertyButton.set('disabled', this.grid.select.row.getSelected().length == 0);
		},

		_onNewProperty: function() {
			this._getDialog().show(this.grid.model);
		},

		_onEditProperty: function() {
			var selectedItems = this.grid.select.row.getSelected();
			this._editItem(this.grid.row(selectedItems[0]).item());
		},

		_onDeleteProperty: function() {
			var rowIds = this.grid.select.row.getSelected();
			if (rowIds) {
				for (var i = 0; i < rowIds.length; i++) {
					this.grid.model.store.remove(rowIds[i]);
				}
			}

			this.onMarkDirty();
		},

		/**
		 *  This method is called when data is being saved from the dialog, back into the grid.
		 *  Copy any custom properties from the saved data, to be saved in the item.
		 *  The item passed in will already have id, name and value populated.  The saveData object will
		 *  contain all of the additional data saved from the dialog.
		 *  
		 *  @since 2.0.3.8
		 */
		saveData: function(item, saveData) {
			// override
		},
		
		/**
		 * This method is called when the edit dialog for this list is about to be opened.  Copy any
		 * custom properties from the stored item to the data object, to be edited in the dialog.  The 
		 * data object will already contain the name and value properties from the item.
		 * 
		 * @since 2.0.3.8
		 */
		getData: function(data, item) {
			// override
		},

		_editItem: function(item) {
			this._editItemValue = item;
			var data = {
				name: item.name,
				value: item.value
			};
			
			this.getData(data, item);
			this._getDialog().show(this.grid.model, data);
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new this.dialogClass();

				this.own(aspect.after(this._dialog, "onAdd", lang.hitch(this, function(saveData) {
					var item = {
						"id": "id_" + new Date().getTime(),
						"name": saveData.name,
						"value": saveData.value
					};
					
					this.saveData(item, saveData);
					this.grid.model.store.add(item);
					this.onMarkDirty();
				}), true));

				this.own(aspect.after(this._dialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.name = saveData.name;
					item.value = saveData.value;
					
					this.saveData(item, saveData);
					this.grid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this.onMarkDirty();
				}), true));
			}
			domClass.add(this._dialog.domNode, "ecmDaejaCustomSettingsDialog");
			return this._dialog;
		},
		
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			this._checkGridButtons();
			this.onMarkDirty();
		},

		resize: function() {
			var methodName = "resize";
			this.logEntry(methodName);
			this.inherited(arguments);
			this.borderContainer.resize();
			this.logExit(methodName);
		},

		layout: function() {
			this.inherited(arguments);
		}
	});

	return CustomSettings;
});

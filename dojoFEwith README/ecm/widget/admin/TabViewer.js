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
	"dojo/dom-geometry",
	"dojo/_base/event",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/ViewerData",
	"ecm/model/admin/ViewerConfig",
	"ecm/model/admin/ViewerDefConfig",
	"ecm/model/admin/ViewerMappingConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/admin/ViewerMappingDialog",
	"ecm/widget/admin/model/NavigatorAdminInstanceObject",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/FilterTextBox",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"gridx/modules/move/Row",
	"dojo/store/Memory",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dijit/form/ComboBox",
	"dojo/text!./templates/TabViewer.html"
], //

function(declare, lang, array, string, aspect, has, construct, style, domClass, domGeom, event, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, AdminData, ViewerData, ViewerConfig, ViewerDefConfig, ViewerMappingConfig, _NavigatorAdminTabBase, ViewerMappingDialog, NavigatorAdminInstanceObject, HoverHelp, ValidationTextBox, _MoveUpDownGridxMixin, FilterTextBox, //
Grid, Cache, Focus, SelectRow, ExtendedSelectRow, ColumnResizer, FilterModule, CellWidget, MoveRow, //
MemoryStore, ContentPane, Button, ComboBox, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabViewer
	 * @class Provides a tab that is used to add or edit a viewer that is used to open files.
	 */
	return declare("ecm.widget.admin.TabViewer", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		_MoveUpDownGridxMixin
	], {
		/** @lends ecm.widget.admin.TabViewer.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "viewers.viewers"
		},

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);

			this.resetButton.set("title", this.messages.reset_hover);
			this.instructions.title = this.messages.learn_more;
			this._filter.set("placeholder", this.messages.repository_type_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.repository_type_contains_label);
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			var id = "";
			var action = "new";
			if (this._myAdminModel && this._myAdminModel.id) {
				id = this._myAdminModel.id;
				action = "edit";
			} else if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				id = this._myAdminModelForCopy.id;
				action = "copy";
			}
			this.viewerData = ViewerData.createViewerData(id, action, this._SECURITY_TOPIC);

			this.editMappingButton.set('disabled', true);
			this.deleteMappingButton.set('disabled', true);
			this.moveUpMappingButton.set('disabled', true);
			this.moveDownMappingButton.set('disabled', true);
			this._disableSave();
			this._disableReset();
			if (this.viewerData.isEdit()) {
				this.idField.set('disabled', true);
			}

			this.idField.setHoverHelp(this.idFieldHoverHelp);
			if (this.viewerData.isEdit() || this.viewerData.isCopied()) {
				this.idFieldHoverHelp.set('message', this._messages.admin_viewer_mapping_id_disabled_hover);
				this.idFieldHoverHelp.setFocusable(true);
			}
			this._updateName(this._myAdminModel ? this._myAdminModel.getName() : ecm.messages.admin_new_viewer_mapping);

			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));

			this._checkSave();
			this._loadData();
		},

		_loadData: function() {
			this.viewerData.loadData(lang.hitch(this, function(response) {
				this._loadTabData();
				this.resize();
			}));
		},

		_loadTabData: function() {
			if (this.viewerData.isEdit()) {
				this.idField.set('value', this.viewerData.viewerConfig.id);
				this.nameField.set('value', this.viewerData.viewerConfig.getName());
				this.descriptionField.set('value', this.viewerData.viewerConfig.getDescription());
				if (this.viewerData.isDisabled()) {
					this.idField.set('disabled', true);
					this.nameField.set('disabled', true);
					this.descriptionField.set('disabled', true);
				}
			} else if (this.viewerData.isCopied()) {
				this.idField.reset();
				this.nameField.reset();
				this.descriptionField.set('value', this.viewerData.viewerConfig.getDescription() ? this.viewerData.viewerConfig.getDescription() : "");
			} else {
				this.idField.reset();
				this.nameField.reset();
				this.descriptionField.reset();
			}

			this.idField.pattern = '([a-zA-Z0-9])*';
			this.idField.invalidMessage = this._messages.admin_id_invalid;

			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this._messages.admin_name_invalid;

			this._createGridWithItems(this.viewerData.mappings);
		},

		_createGridWithItems: function(mappingObjects) {
			this.grid = this._createGrid(mappingObjects, this._buildStructure());
			this.gridContainer.set("content", this.grid);
			this.grid.startup();
			if (this.viewerData.isDisabled()) {
				domClass.add(this.grid.domNode, "readOnly");
			}
			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this._checkGridButtons();
			this.resize();
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			var isResetting = true;
			if (this.viewerData.isEdit()) {
				if ((this.idField.get('value') != this.viewerData.viewerConfig.id) || (this.nameField.get('value') != this.viewerData.viewerConfig.getName())) {
					return false;
				} else if ((this.viewerData.viewerConfig.getDescription() && this.descriptionField.get('value') != this.viewerData.viewerConfig.getDescription()) || (!this.viewerData.viewerConfig.getDescription() && this.descriptionField.get('value') != "")) {
					return false;
				}
			} else if (this.viewerData.isCopied()) {
				if ((this.idField.get('value') != "") || (this.nameField.get('value') != this.viewerData.viewerConfig.getName())) {
					return false;
				} else if ((this.viewerData.viewerConfig.getDescription() && this.descriptionField.get('value') != this.viewerData.viewerConfig.getDescription()) || (!this.viewerData.viewerConfig.getDescription() && this.descriptionField.get('value') != "")) {
					return false;
				}
			} else {
				if ((this.idField.get('value') != "") || (this.nameField.get('value') != "") || (this.descriptionField.get('value') != "")) {
					return false;
				}
			}
			return isResetting;
		},

		_loadWithFieldValues: function(adminModel) {
			var isNewOrCopy = this.viewerData.isNew() || this.viewerData.isCopied();
			if (isNewOrCopy) {
				adminModel.id = this.idField.get('value');
				adminModel.setValue("id", adminModel.id);
			}
			adminModel.setName(this.nameField.get('value'));
			adminModel.setDescription(this.descriptionField.get('value'));
		},

		_getMappingData: function() {
			var serverTypeLabel = ecm.model.admin.ViewerMappingConfig.prototype.SERVER_TYPE;
			var contentTypesLabel = ecm.model.admin.ViewerMappingConfig.prototype.CONTENT_TYPES;
			var viewerNameLabel = ecm.model.admin.ViewerMappingConfig.prototype.VIEWER_NAME;
			var previewOnlyLabel = ecm.model.admin.ViewerMappingConfig.prototype.PREVIEW_ONLY;

			var mappingDataArray = this.getData(this.grid);
			var mappingDataArrayToSave = [];
			for (var i = 0; i < mappingDataArray.length; i++) {
				var mappingData = mappingDataArray[i];

				var contentTypes = "";
				if (mappingData.contentTypes != undefined) {
					if (mappingData.contentTypes instanceof Array) {
						if (mappingData.contentTypes.length > 0) {
							contentTypes = mappingData.contentTypes.join(',');
						}
					} else {
						contentTypes = mappingData.contentTypes;
					}
				}
				var obj = {};
				obj[serverTypeLabel] = mappingData.serverType == " " ? "" : mappingData.serverType;
				obj[contentTypesLabel] = contentTypes;
				obj[viewerNameLabel] = mappingData.viewer;
				obj[previewOnlyLabel] = mappingData.previewOnly;
				mappingDataArrayToSave.push(obj);
			}
			return mappingDataArrayToSave;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			this._loadWithFieldValues(this.viewerData.viewerConfig);
			this.viewerData.mappings = this._getMappingData();
			this.viewerData.save(lang.hitch(this, function() {
				this.idField.set('disabled', true);
				this._updateName(this.viewerData.viewerConfig.getName());
				this.setTitle(this.viewerData.viewerConfig.getName());
				if (onComplete) {
					onComplete(true);
				}
			}));
		},

		_createGrid: function(items, structure) {
			var grid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: this._buildStore(items),
				structure: structure,
				textDir: has("text-direction"),
				selectRowTriggerOnCell: true,
				modules: [
					FilterModule,
					Focus,
					SelectRow,
					ExtendedSelectRow,
					ColumnResizer,
					CellWidget,
					MoveRow
				]
			});
			domClass.add(this.gridContainer.domNode, "compact gridxWholeRow gridxAlternatingRows");

			this.own(aspect.after(grid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this.grid.select.row.selectByIndex([
						0,
						this.grid.rowCount() - 1
					]);
					setTimeout(lang.hitch(this, function() {
						this._checkGridButtons();
					}, 100));
				}
			}), true));
			this.own(aspect.after(grid.select.row, "onSelectionChange", lang.hitch(this, "_checkGridButtons"), true));
			this.own(aspect.after(grid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._checkSave();
				this.grid.vScroller.scrollToRow(this.grid.row(id).visualIndex() - 1, true);
				this._markDirty();
			}), true));
			this.own(aspect.after(grid.model, "onDelete", lang.hitch(this, function() {
				this._checkSave();
				this._markDirty();
			}), true));
			this.own(aspect.after(grid, "onRowDblClick", lang.hitch(this, function(evt) {
				if (!this.viewerData.isDisabled()) {
					this._editItem(this.grid.row(evt.rowIndex).item());
				}
			}), true));
			return grid;
		},

		_onNameChange: function() {
			if (!this.idField.get('disabled')) {
				this.idField.set('value', this._getIdValueFromName(this.nameField.get('value')));
			}
			this._onFieldChange();
		},

		_getSelected: function() {
			var items = [];
			if (this.grid && this.grid.select) {
				var rowIds = this.grid.select.row.getSelected();
				for (var i = 0; i < rowIds.length; i++) {
					var row = this.grid.row(rowIds[i]);
					if (row) {
						items.push(row.item());
					}
				}
			}
			return items;
		},

		_checkGridButtons: function() {
			var selectedItems = this.grid.select.row.getSelected();
			this.newMappingButton.set('disabled', this.viewerData.isDisabled());
			this.moveUpMappingButton.set('disabled', this.viewerData.isDisabled() || this.isGridFiltered() || selectedItems.length == 0 || !this._hasRowsToMoveUp(this.grid));
			this.moveDownMappingButton.set('disabled', this.viewerData.isDisabled() || this.isGridFiltered() || selectedItems.length == 0 || !this._hasRowsToMoveDown(this.grid));
			this.deleteMappingButton.set('disabled', this.viewerData.isDisabled() || selectedItems.length == 0);
			this.editMappingButton.set('disabled', this.viewerData.isDisabled() || selectedItems.length != 1);
		},

		_buildStructure: function() {
			return [
				{
					field: "serverTypeName",
					name: this.messages.repository_type_header,
					width: "auto"
				},
				{
					field: "viewerLabel",
					name: this.messages.viewer_viewer,
					width: "auto",
				},
				{
					field: "contentTypeNames",
					name: this.messages.file_type_header,
					width: "auto"
				}
			];
		},

		_buildStore: function(items) {
			var _items = [];
			for (var i = 0; i < items.length; i++) {
				var modelItem = items[i];
				if (modelItem.getServerType() == "" || this.viewerData.isValidServerType(modelItem.getServerType())) {
					var contentTypes = modelItem.getContentTypes();
					var viewerName = this.viewerData.getViewerName(modelItem.getViewerName());
					var previewOnly = modelItem.getPreviewOnly();
					_items.push({
						"id": "" + i,
						"order": i + 1,
						"contentTypes": contentTypes,
						"contentTypeNames": contentTypes.length > 0 ? contentTypes.join(', ') : this.messages.file_type_any,
						"serverType": modelItem.getServerType(),
						"serverTypeName": modelItem.getServerType() == "" ? this.messages.repository_type_any : modelItem.getServerTypeString(),
						"viewer": modelItem.getViewerName(),
						"viewerName": viewerName,
						"viewerLabel": previewOnly ? (viewerName + " " + this.messages.preview_only_label) : viewerName,
						"previewOnly": previewOnly
					});
				}
			}
			return new MemoryStore({
				data: _items
			});
		},

		_updateName: function(name) {
			construct.place("<label>" + string.substitute(this.messages.admin_viewer_def_heading, [
				name
			]) + "</label>", this.headingText, "only");
		},

		isUniqueId: function() {
			var isUnique = this.viewerData.isUniqueId(this.idField.get('value'));
			if (!isUnique) {
				this.idField.setCustomValidationError(this._messages.admin_id_in_use);
			}
			this.idField.validate();
			return isUnique;
		},

		_validateData: function(focus) {
			if (!this.idField.get('disabled') && !this.isUniqueId()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}
			if (!this.idField.isValid()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}
			if (!this.nameField.isValid()) {
				if (focus) {
					this.nameField.focus();
				}
				return false;
			}
			if (this.grid && this.grid.rowCount() == 0) { // Cannot save with 0 grid rows of mapping
				return false;
			}
			return true;
		},

		_onNewMapping: function() {
			this._getDialog().show(this.viewerData.servers, this.viewerData.viewerDefs, this.viewerData.viewerContentTypes);
		},

		_onEditMapping: function() {
			var selectedItems = this._getSelected();
			this._editItem(selectedItems[0]);
		},

		_editItem: function(item) {
			var obj = {};
			obj.serverType = item.serverType;
			obj.viewer = item.viewer;
			obj.contentTypes = item.contentTypes;
			obj.previewOnly = item.previewOnly;
			this._editItemValue = item;
			this._getDialog().show(this.viewerData.servers, this.viewerData.viewerDefs, this.viewerData.viewerContentTypes, obj);
		},

		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = new ViewerMappingDialog();

				this.own(aspect.after(this._dialog, "onAdd", lang.hitch(this, function(saveData) {
					var id = this.grid.rowCount() + "_" + new Date().getTime();
					this.grid.model.store.add({
						"id": id,
						"order": this._getOrder(),
						"contentTypes": saveData.contentTypes,
						"contentTypeNames": saveData.contentTypes.length > 0 ? saveData.contentTypes.join(', ') : this.messages.file_type_any,
						"serverType": saveData.serverType,
						"serverTypeName": saveData.serverTypeName,
						"viewer": saveData.viewer,
						"viewerName": saveData.viewerName,
						"viewerLabel": saveData.previewOnly ? (saveData.viewerName + " " + this.messages.preview_only_label) : saveData.viewerName,
						"previewOnly": saveData.previewOnly
					});
					this._resetFilter();
					this._markDirty();
				}), true));

				this.own(aspect.after(this._dialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.serverType = saveData.serverType;
					item.serverTypeName = saveData.serverTypeName;
					item.viewer = saveData.viewer;
					item.viewerName = saveData.viewerName;
					item.viewerLabel = saveData.previewOnly ? (saveData.viewerName + " " + this.messages.preview_only_label) : saveData.viewerName;
					item.previewOnly = saveData.previewOnly;
					item.contentTypes = saveData.contentTypes;
					item.contentTypeNames = saveData.contentTypes.length > 0 ? saveData.contentTypes.join(', ') : this.messages.file_type_any;
					this.grid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this._markDirty();
				}), true));
			}
			return this._dialog;
		},

		_getOrder: function() {
			var order = 0;
			for ( var i in this.grid.model.store.data) {
				var data = this.grid.model.store.data[i];
				if (order < data.order) {
					order = data.order;
				}
			}
			order++;
			return order;
		},

		_onDeleteMapping: function() {
			var rowIds = this.grid.select.row.getSelected();
			if (rowIds) {
				for (var i = 0; i < rowIds.length; i++) {
					this.grid.model.store.remove(rowIds[i]);
				}
			}
			this._resetFilter();
			this._checkGridButtons();
			this._markDirty();
		},

		_onMoveUpMapping: function() {
			this._moveUpSelectedRows(this.grid);
			this._checkGridButtons();
			this._markDirty();
		},

		_onMoveDownMapping: function() {
			this._moveDownSelectedRows(this.grid);
			this._checkGridButtons();
			this._markDirty();
		},

		isGridFiltered: function() {
			return this._filter.get("value") != "";
		},

		_resetFilter: function() {
			this._filter.set("value", "");
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "serverTypeName";
				this.grid.select.row.clear();
				this.grid.model.filter(this._filterCheckerFunction);
				this.grid.body.refresh();
				this._checkGridButtons();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item[this._filterField];
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},

		resize: function() {
			if (this.grid) {
				var domNodeContentBox = domGeom.getContentBox(this.domNode);
				var headerMarginBox = domGeom.getMarginBox(this.header);
				var diff = domNodeContentBox.h - headerMarginBox.h - 30;
				if (diff < 125) {
					diff = 125;
				}
				var width = domNodeContentBox.w - 40;
				this.grid.resize({
					h: diff,
					w: width
				});
			}
		}

	});

});

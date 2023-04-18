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
	"dojo/aspect",
	"dojo/keys",
	"dojo/string",
	"dojo/dom-style",
	"dijit/registry",
	"dojo/dom-geometry",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"dijit/layout/ContentPane",
	"ecm/widget/CheckBox",
	"ecm/widget/ValidationTextBox",
	"idx/widget/SloshBucket",
	"dojo/store/Memory",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"idx/html",
	"ecm/widget/Select",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"dijit/tree/ForestStoreModel",
	"dojox/html/entities",
	"ecm/widget/FilterTextBox",
	"dijit/layout/BorderContainer",
	"dojox/collections/Dictionary",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/RepositoryFolders.html"
], //

function(declare, lang, array, construct, aspect, keys, string, style, registry, geometry, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, ContentPane, CheckBox, ValidationTextBox, SloshBucket, MemoryStore, Messages, LoggerMixin, idxHtml, Select, FilteringSelect, HoverHelp, RadioButton, ForestStoreModel, entities, FilterTextBox, BorderContainer, Dictionary, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositoryFolders
	 * @class Provides a pane that is used to specify the properties for repository folders. The pane also determines
	 *        the order in which the folders are displayed when users browse a repository.
	 */
	return declare("ecm.widget.admin.RepositoryFolders", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.RepositoryFolders.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._browseDefaultCols, "onAddRemove", lang.hitch(this, "_onFieldChange")));
			this.own(aspect.after(this._browseDefaultCols, "onMoved", lang.hitch(this, "_onFieldChange")));

			this.own(aspect.after(this.browseDefaultColsAreaFilter, "_onInput", lang.hitch(this, "_filter")));
			this.own(aspect.after(this.browseDefaultColsAreaFilter, "_setValueAttr", lang.hitch(this, "_filter")));

			this._browseDefaultCols.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");

			this.browseDefaultColsAreaFilter.set('placeholder', this.messages.property_contains_label);
		},

		destroy: function() {
			this.logEntry("destroy");
			this.cleanData();
			this.inherited(arguments);
			this.logExit("destroy");
		},

		cleanData: function() {
			this.logEntry("cleanData");
			if (this.colsDictionary) {
				this.colsDictionary.clear();
				delete this.colsDictionary;
			}
			this._init = false;
			this.logExit("cleanData");
		},

		/**
		 * Called before save.
		 */
		loadWithFieldValues: function(repositoryConfig) {
			this.logEntry("loadWithFieldValues");
			if (repositoryConfig.getType() == "cm" || repositoryConfig.getType() == "p8" || repositoryConfig.getType() == "cmis") {
				this._saveData(repositoryConfig);
			}
			this.logExit("loadWithFieldValues");
		},

		_saveData: function(repositoryConfig) {
			this.logEntry("_saveData");
			var dataArray = this._browseDefaultCols.getSelectedItems();
			var detailValues = [];
			var magazineValues = [];
			for (var i = 0; i < dataArray.length; i++) {
				var item = dataArray[i];
				if (item.detailsView) {
					detailValues.push(item.value ? item.value : item.name);
				}
				if (item.magazineView && item.value != "{NAME}") {
					magazineValues.push(item.value ? item.value : item.name);
				}
			}
			repositoryConfig.setFolderDefaultColumns(detailValues);
			repositoryConfig.setFolderMagazineDefaultColumns(magazineValues);
			this.logExit("_saveData");
		},

		/**
		 * Called when the user hits the Reset button or when the repository tab opens. Need to call load available and
		 * load selected in sequence.
		 */
		loadData: function(container, callback) {
			this.logEntry("loadData");
			this.cleanData();
			//this.set("iconClass", this.repositoryData.type == "p8" ? "required" : "");
			this._loadSloshBucket();
			this.resize();
			if (callback)
				callback();
			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 100);
			this.logExit("loadData");
		},

		resetData: function() {
			if (this._init && !this.isResetingFields()) {
				this.loadData();
			}
		},

		// override
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			if (this._init && !this.isResetingFields())
				this.onMarkDirty();
		},

		/**
		 * Set selected item in an array to be selected
		 */
		_loadSelection: function(control, options) {
			var currentValue = control.get('value');
			for ( var i in options) {
				options[i].id = options[i].value;
			}
			control.set("store", new MemoryStore({
				data: options
			}));
			control.set('value', (currentValue != null) ? currentValue : "");
			this._onFieldChange();
		},

		/**
		 * Set up sloshbucket.
		 */
		_loadSloshBucket: function() {
			this.logEntry("_loadSloshBucket");
			var availStructure = [
				{
					field: "label",
					name: this.messages.admin_available_properties,
					width: "100%"
				}
			];
			var documentPropDescs = lang.clone(this.repositoryData.documentPropDescs);
			for ( var i in documentPropDescs) {
				var item = documentPropDescs[i];
				item.id = item.value;
				item.magazineView = true;
				var detailsView = true;
				if (this.repositoryData.type == "p8") {
					if (documentPropDescs[i].value == "CmThumbnails" || documentPropDescs[i].value.substring(0, 3) == "Clb") {
						detailsView = false;
					}
				}
				item.detailsView = detailsView;
			}
			var availStore = new MemoryStore({
				data: documentPropDescs
			});
			this._browseDefaultCols.setAvailableGridData(availStore, availStructure);

			var self = this;
			var selectedStructure = [
				{
					field: "label",
					name: this.messages.admin_selected_properties,
					width: "70%"
				},
				{
					field: "detailsView",
					name: this.messages.detail_view_show,
					widgetsInCell: true,
					navigable: true,
					style: 'align: center; text-align: center;',
					headerStyle: 'align: center; text-align: center;',
					width: "15%",
					decorator: function() {
						return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="detailsCb" />';
					},
					setCellValue: function(data, storeData, cellWidget) {
						var disabled = cellWidget.cell.row.index() == 0; // first row is disabled
						if (!disabled && self.repositoryData.type == "p8") { // For P8, if the field is a social field, then disable it
							var item = cellWidget.cell.row.item();
							if (item && item.value) {
								if (item.value == "CmThumbnails") {
									disabled = true;
								}
							}
						}
						this.detailsCb.set("disabled", disabled);
						this.detailsCb.set("checked", data);
					}
				},
				{
					field: "magazineView",
					name: this.messages.magazine_view_show,
					widgetsInCell: true,
					navigable: true,
					style: 'align: center; text-align: center;',
					headerStyle: 'align: center; text-align: center;',
					width: "15%",
					decorator: function() {
						return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="magazineCb" />';
					},
					setCellValue: function(data, storeData, cellWidget) {
						var disabled = (cellWidget.cell.row.index() == 0);
						this.magazineCb.set("disabled", disabled);
						this.magazineCb.set("checked", data);
					}
				}
			];
			var itemArray = this.repositoryData.getBrowseColumnData();
			for (var i = 0; i < itemArray.length; i++) {
				itemArray[i].id = itemArray[i].value;
				itemArray[i].order = i;
			}
			var selectedStore = new MemoryStore({
				data: itemArray
			});
			this._browseDefaultCols.setSelectedGridData(selectedStore, selectedStructure, this.repositoryData.defaultData.getFolderDefFixedCols());

			this.own(aspect.after(this._browseDefaultCols.selectedGrid, "onCellClick", lang.hitch(this, function(evt) {
				var grid = this._browseDefaultCols.selectedGrid;
				if (evt.columnId == "2") {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().detailsCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "detailsView", evt);
					}
				} else if (evt.columnId == "3") {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().magazineCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "magazineView", evt);
					}
				}
			}), true));
			this.own(aspect.after(this._browseDefaultCols.selectedGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				var grid = this._browseDefaultCols.selectedGrid;
				if (evt.columnId == "2" && evt.keyCode == keys.SPACE) {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().detailsCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "detailsView", evt);
					}
				} else if (evt.columnId == "3" && evt.keyCode == keys.SPACE) {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().magazineCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "magazineView", evt);
					}
				}
			}), true));
			this.logExit("_loadSloshBucket");
		},

		_toggleCheckbox: function(grid, field, evt) {
			var item = grid.model.store.get(evt.rowId);
			if (item) {
				item[field] = !item[field];
				grid.model.store.put(item, {
					id: item.id,
					overwrite: true
				});

				this.onMarkDirty();
				this._onFieldChange();
			}
		},

		/**
		 * Call back from the sloshBucket.
		 */
		_getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.label));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.value));
				toolTip.push("</span></div>");
				return toolTip.join("");
			}
			return "";
		},

		// Check if all the data is valid
		validateData: function() {
			return true;
		},

		isResetingFields: function() {
			var dataArray = this._browseDefaultCols.getSelectedItems();
			var values = this.repositoryData.repositoryConfig.getFolderDefaultColumns();
			if ((dataArray && !values) || (!dataArray && values) || (dataArray.length != values.length))
				return false;

			for (var i = 0; i < values.length; i++) {
				if (values[i] != dataArray[i].value)
					return false;
			}
			return true;
		},

		setData: function(data) {
			this.repositoryData = data;
		},

		resize: function(changeSize) {
			this.inherited(arguments);
			var size = geometry.getContentBox(this.domNode);
			if (size.h > 0) {
				geometry.setMarginBox(this.repositoryBrowseContainer.domNode, {
					w: size.w,
					h: size.h - geometry.getMarginBox(this._instructions).h
				});
				this._browseDefaultCols.resize(changeSize);
			}
		},

		/**
		 * Filter default columns by label.
		 */
		_filter: function() {
			this.logEntry("_filter");
			var filterData = this.browseDefaultColsAreaFilter.get("value");
			this._filterData = filterData;
			this._browseDefaultCols.filter({
				label: filterData
			});
			this.logExit("_filter");
		}
	});

});

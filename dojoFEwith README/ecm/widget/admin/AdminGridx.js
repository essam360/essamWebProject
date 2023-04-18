/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/keys",
	"dojo/string",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dojo/store/Memory",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"dijit/Menu",
	"dijit/MenuItem",
	"ecm/MessagesMixin",
	"ecm/widget/admin/ActionMenu",
	"ecm/model/Action",
	"dojo/text!./templates/AdminGridx.html"
],

function(declare, //
lang, //
event, //
has, //
keys, //
string, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
MemoryStore, //
Grid, //
Cache, //
Row, //
Focus, //
SelectRow, //
ExtendedSelectRow, //
SingleSort, //
ColumnResizer, //
FilterModule, //
CellWidget, //
Menu, //
MenuItem, //
MessagesMixin, //
ActionMenu, //
Action, //
template) {

	/**
	 * @name ecm.widget.admin.AdminGridx
	 * @class Provides a scrollable, tabular grid that is used to display administration objects.
	 * @private
	 * @deprecated
	 */
	return declare("ecm.widget.admin.AdminGridx", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.AdminGridx.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Set the sort to the 2nd column - Name column.
		 */
		sortColIndex: 2,
		/**
		 * Set the sort to ascending.
		 */
		sortDescending: false,

		postCreate: function() {
			this.inherited(arguments);
		},

		destroy: function() {
			if (this._actionMenuCreator) {
				this._actionMenuCreator.destroy();
			}
			this.inherited(arguments);
		},

		/**
		 * Sets the actions to display on the row context menu.
		 * 
		 * @param actions
		 *            Array of {@link ecm.model.Action}.
		 */
		setActions: function(actions) {
			this._actions = actions;
		},

		/**
		 * Set the data to display in the admin grid.
		 * 
		 * @param structure
		 *            The grid structure.
		 * @param store
		 *            A {@link ecm.model._ModelStore} object that contains the grid store.
		 * @param actions
		 *            Array of {@link ecm.model.Action}.
		 * @param treeModel
		 *            The {@ecm.widget.admin.model.AdminTreeModel) to listen to onChange events.
		 */
		setData: function(structure, store, actions, treeModel) {
			this.setActions(actions);
			this._theGrid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: store,
				structure: structure,
				textDir: has("text-direction"),
				selectRowTriggerOnCell: true,
				modules: [
					Row,
					FilterModule,
					Focus,
					SelectRow,
					ExtendedSelectRow,
					ColumnResizer,
					CellWidget,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: "" + this.sortColIndex, // Admin columns after "icon" are automatically assigned an id string using the 1-based column index
								descending: this.sortDescending
							}
						]
					}
				]
			});
			this.connect(this._theGrid, "onModulesLoaded", lang.hitch(this, function() {
				var c = this._theGrid.column("icon", true);
				if (c && c.setFilterable) {
					c.setFilterable(false);
				}
			}));
			domClass.add(this.borderContainer.domNode, "gridxWholeRow gridxAlternatingRows");
			this.borderContainer.addChild(this._theGrid);
			this._theGrid.startup();
			this.resize();

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");

			this.connect(this._theGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this.onRowDblClick(this._theGrid.row(evt.rowIndex).item(), evt);
			}));

			this.connect(this._theGrid.select.row, "onSelectionChange", function(selected) {
				this.onSelectionChanged(this._getItems(selected));
			});

			this.connect(this._theGrid, "onRowContextMenu", "_doContextMenu");
			this.connect(this._theGrid.bodyNode, "oncontextmenu", function(evt) {
				if (!evt.rowId) {
					event.stop(evt);
				}
			});
			this.connect(this._theGrid.domNode, "onkeydown", function(evt) {
				if (evt.keyCode === keys.F10 && evt.shiftKey) {
					this._doContextMenu(evt);
					event.stop(evt);

				} else if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this._selectAll(evt);
				}
			});

			// When model data is changed, update the grid row with the latest model data
			if (treeModel) {
				this.connect(treeModel, "onChange", lang.hitch(this, function(treeModelObject) {
					var modelObject = treeModelObject._myAdminModel;
					var id = this._theGrid.store.getIdentity(modelObject);
					var index = this._theGrid.model.idToIndex(id);
					if (index != undefined && index > -1) {
						this._theGrid.store.onSet(modelObject); // will notify the grid to refresh the row with the item data
					}
				}));
			}
		},

		/**
		 * Selects all the rows.
		 * 
		 * @private
		 */
		_selectAll: function(evt) {
			var lastIndex = this._theGrid.rowCount();
			for ( var i = 0; i < lastIndex; i++) {
				this._theGrid.select.row.selectByIndex(i);
			}
		},

		/**
		 * Returns array of items corresponding to the passed in row indexes.
		 * 
		 * @private
		 */
		_getItems: function(rowIndexs) {
			var items = [];
			for ( var i = 0; i < rowIndexs.length; i++) {
				var row = this._theGrid.row(rowIndexs[i]);
				if (row) {
					items.push(row.item());
				}
			}
			return items;
		},

		/**
		 * Fired when an action is selected for the items.
		 * 
		 * @param items
		 *            Array of row items that are selected.
		 * @param action
		 *            The selected {@link ecm.model.Action}.
		 */
		onAction: function(items, action) {
		},

		/**
		 * Fired when a row is double clicked.
		 * 
		 * @param modelItem
		 *            Row item that was double clicked.
		 * @param evt
		 *            The event.
		 */
		onRowDblClick: function(modelItem, evt) {
		},

		/**
		 * Fired when the grid selection changes.
		 * 
		 * @param selectedModelItems
		 *            Array of row items that are selected.
		 */
		onSelectionChanged: function(selectedModelItems) {
		},

		/**
		 * Clears selection of rows on the grid.
		 */
		clearSelection: function() {
			this._theGrid.select.row.clear();
		},

		/**
		 * Return the selected rows item.
		 * 
		 * @return Array of row items that are selected.
		 */
		getSelected: function() {
			return this._theGrid && this._theGrid.select ? this._getItems(this._theGrid.select.row.getSelected()) : [];
		},

		/**
		 * Set the store for the grid.
		 * 
		 * @param store
		 *            A {@link ecm.model._ModelStore} object that contains the grid store.
		 */
		setStore: function(store) {
			// Get the current sort settings.
			var prevSortId = this._theGrid.sort._sortId;
			var prevSortDescend = this._theGrid.sort._sortDescend;

			this._theGrid.store.close();

			this._theGrid.setStore(store);

			// Sort the data after the update.
			if (prevSortId) {
				// Clear the current sort so that we can get the sort to work.
				this._theGrid.sort.clear();
				this._theGrid.column(prevSortId).sort(prevSortDescend);
			}
		},

		/**
		 * Filters the grid with the specified data.
		 * 
		 * @param data
		 *            Object containing <b>value</b> which is the filter value and <b>field</b> which is the
		 *            row.item.getValue(field).
		 */
		filter: function(data) {
			this.clearSelection();
			this._filterValue = string.trim(data.value).toLowerCase();
			this._filterField = data.field;
			this._theGrid.model.filter(this._filterCheckerFunction);
			this._theGrid.body.refresh();
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item.getValue(this._filterField);
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},

		/**
		 * Returns the row item with the input id.
		 * 
		 * @param id
		 *            The unique row id.
		 * @return Row item with the specified id.
		 */
		getItemWithId: function(id) {
			return this._theGrid.row(id).item();
		},

		/**
		 * Called when right click within the grid. Shows the item(s) content menu.
		 * 
		 * @private
		 */
		_doContextMenu: function(evt) {
			event.stop(evt);
			var byKey = (evt.keyCode === keys.F10);

			// If clicked within the selection, use the selection; otherwise, clear selection & select the row
			var id = this._theGrid.model.indexToId(evt.rowIndex);
			if (!byKey && !this._theGrid.select.row.isSelected(id)) {
				this._theGrid.select.row.clear();
				this._theGrid.select.row.selectById(id);
			}

			var items = this._getItems(this._theGrid.select.row.getSelected());
			if (items.length > 0) {
				if (!this._actionMenuCreator) {
					this._actionMenuCreator = new ecm.widget.admin.ActionMenu();
					this.connect(this._actionMenuCreator, "onAction", "onAction");
				}
				var menu = this._actionMenuCreator.createMenu(this._actions, items);
				var coords = (!byKey ? {
					x: evt.pageX,
					y: evt.pageY
				} : null);
				menu._openMyself({
					target: evt.target,
					coords: coords
				});
			}
		},

		/**
		 * Resize the border container.
		 */
		resize: function() {
			this.borderContainer.resize();
		}
	});

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/array", //
	"dojo/_base/event", // 
	"dojo/_base/lang", //
	"dojo/_base/sniff", //
	"dojo/dom-construct", //
	"dojo/dom-geometry", //
	"dojox/grid/DataGrid", //
	"dojox/grid/DataSelection", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"idx/layout/BorderContainer", //
	"idx/layout/ContentPane", //
	"../MessagesMixin", //
	"../LoggerMixin", //
	"../model/Desktop", //
	"./dialog/ConfirmationDialog", //
	"./_DataSelection", // 
	"./FilterTextBox", // 
	"dojo/text!./templates/MultiColumnList.html"
], //
function(declare, //
array, //
event, //
lang, //
has, //
domConstruct, //
domGeom, //
DataGrid, //
DataSelection, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
ContentPane, //
MessagesMixin, //
LoggerMixin, //
Desktop, //
ConfirmationDialog, //
ecmDataSelection, //
FilterTextBox, //
template) {

	/**
	 * @name ecm.widget.MultiColumnList
	 * @class Provides a simple multiple-column list that is used to select items.
	 * @augments dijit._Widget, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin, ecm.MessagesMixin
	 */
	return declare("ecm.widget.MultiColumnList", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.MultiColumnList.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * @private
		 */
		_selectedItem: null,

		/**
		 * {@link dojox.grid.DataGrid} selection mode.
		 */
		selectionMode: "single",

		/***************************************************************************************************************
		 * A string indicating the name of the list.
		 */
		label: "",

		/**
		 * A string indicating the height of the list.
		 */
		borderHeight: "250px;",

		/**
		 * Selection label.
		 */
		selectionLabel: "Add selection label",

		/**
		 * {@link dijit.Menu} instance for the context menu to use for the list.
		 */
		contextMenuHandler: null,

		/**
		 * Sets the numbers of items per page.
		 */
		pageSize: 25,

		/**
		 * The aria label for the grid.
		 */
		"aria-label": "",

		/**
		 * Called after widget creation to connect {@link ecm.model.Desktop} events and create grid.
		 */
		postCreate: function() {
			// summary:
			//	 	 Called after buildRendering() to setup the page.

			this.inherited(arguments);
			var self = this;
			this.textDir = has("text-direction");
			this.connect(ecm.model.desktop, "onChange", function(modelObject) {
				if (this.grid && this.grid.store && lang.isArray(modelObject)) {
					array.forEach(modelObject, function(model, i) {
						if (model.isInstanceOf && model.isInstanceOf(ecm.model.Item) && self.grid.store.onSet) {
							self.grid.store.onSet(model); // will notify the grid to refresh the row with the item data
						}
					}, self);
				}
			});

			this._buildGrid();
		},

		postMixInProperties: function() {
			this._filterText = ecm.messages.multicolumn_list_filter_text;
		},

		/**
		 * Sets the toolbar to be used for the list.
		 * 
		 * @param toolbar
		 *            A {@link ecm.widget.teamspaceBuilder.SelectionToolbar} object.
		 */
		setToolbar: function(toolbar) {
			while (this.topPane.domNode.hasChildNodes()) {
				this.topPane.domNode.removeChild(this.topPane.domNode.lastChild);
			}
			this.topPane.domNode.appendChild(toolbar.domNode);
			if (!this.selectionLabelNode)
				this.selectionLabelNode = domConstruct.place("<div style='font-weight: bold;'>" + this.selectionLabel + "</div>", this.borderContainer.domNode, "before");
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			return this.inherited(arguments);
		},

		/**
		 * Invokes resize on the border container for the widget.
		 */
		resize: function() {
			this.borderContainer.resize();
		},

		/**
		 * Sets the single or multiple selection mode for the {@link dojox.grid.DataGrid}.
		 * 
		 * @param selectionMode
		 *            The string value "single" or "multiple".
		 */
		setSelectionMode: function(selectionMode) {
			this.selectionMode = selectionMode;
		},

		/**
		 * Resets the selection list.
		 */
		clearSelection: function() {
			this.grid.selection.clear();
		},

		/**
		 * Private method used to build the {@link dojox.grid.DataGrid} used for this widget.
		 * 
		 * @private
		 */
		_buildGrid: function(columns, datastore) {
			// summary:
			//  creates (or recreates) the grid used for detailed view
			if (this.grid) {
				if (this.grid.domNode) {
					this.grid.destroyRecursive();
				}
				delete this.grid;
			}
			var _this = this;

			this.grid = new DataGrid({
				selectionMode: this.selectionMode,
				doheaderclick: lang.hitch(this, "doheaderclick"),
				structure: columns,
				store: datastore,
				"aria-label": this["aria-label"],
				rowsPerPage: this.pageSize,
				region: "center",
				comfirmSelection: this.comfirmSelection,
				comfirmMsg: this.comfirmMsg,
				textDir: this.textDir,
				createSelection: function() {
					if (this.comfirmSelection) {
						this.selection = new ecmDataSelection(this);
						this.selection.comfirmMsg = this.comfirmMsg;
					} else
						this.selection = new DataSelection(this);
				}
			});
			if (this.contextMenuHandler)
				this.connect(this.grid, "onRowContextMenu", this.contextMenuHandler);

			this.borderContainer.addChild(this.grid);
			this.grid.startup();

			this.connect(this.grid, "onKeyDown", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this.grid.selection.selectRange(0, this.grid.get('rowCount') - 1);
					this.onSelection(this.grid.selection.getSelected());
				}
			}));

			this.connect(this.grid.selection, "onChanged", function() {
				_this.onSelection(this.grid.selection.getSelected());
			});

			if (this.filter) {
				this.connect(this.filter, "_onInput", function() {
					//{firstName:"*" + filterStr + "*"} OR {lastName:"*" + filterStr + "*"}
					var value = _this.filter.get("value");
					_this.grid.queryOptions = {
						ignoreCase: true
					};
					_this.grid.filter({
						name: "*" + value + "*"
					});// OR description : "*" + value + "*"});
				});
				this.connect(this.filter, "_setValueAttr", function() {
					var value = _this.filter.get("value");
					_this.grid.queryOptions = {
						ignoreCase: true
					};
					_this.grid.filter({
						name: "*" + value + "*"
					});
				});
			}
		},

		/**
		 * Override grid's doheaderclick to support nosort for a column
		 * 
		 * @param onClick
		 *            event.
		 */
		doheaderclick: function(evt) {
			if (evt.cellNode && !evt.cell._props.nosort) {
				this.grid.setSortIndex(evt.cell.index);
			}
			this.grid.onHeaderClick(evt);
		},

		/**
		 * Invoked when an item is selected in the grid.
		 * 
		 * @param selectedItems
		 *            An array of the selected items.
		 */
		onSelection: function(selectedItems) {
		},

		/**
		 * Used to build grid without a {@link ecm.model.Resultset}.
		 * 
		 * @param structure
		 *            The structure for the {@link dojox.grid.DataGrid}.
		 * @param store
		 *            The store for the {@link dojox.grid.DataGrid}.
		 */
		setModel: function(structure, store) {
			// summary:
			//	A convenience function for setting the content list given a results set.
			this._buildGrid(structure, store); // this is required due to a dojo bug on setStructure
			var domNodeMarginBoxBorderContainer = domGeom.getMarginBox(this.borderContainer.domNode);
			var topPaneBox = domGeom.getMarginBox(this.topPane.domNode);
			var gridHeight = domNodeMarginBoxBorderContainer.h - topPaneBox.h;
			this.grid.resize({
				h: gridHeight,
				w: domNodeMarginBoxBorderContainer.w
			});
		},

		/**
		 * Sets the {@link ecm.model.Resultset} on the {@link dojox.grid.DataGrid}.
		 * 
		 * @param resultSet
		 *            An instance of {@link ecm.model.Resultset}.
		 */
		setResultSet: function(resultSet) {
			// summary:
			//	A convenience function for setting the content list given a results set.
			this.resultSet = resultSet;
			this._structure = resultSet.structure;
			this._buildGrid(this._structure, resultSet.getStore()); // this is required due to a dojo bug on setStructure
			var domNodeMarginBoxBorderContainer = domGeom.getMarginBox(this.borderContainer.domNode);
			var topPaneBox = domGeom.getMarginBox(this.topPane.domNode);
			var gridHeight = domNodeMarginBoxBorderContainer.h - topPaneBox.h;
			this.grid.resize({
				h: gridHeight,
				w: domNodeMarginBoxBorderContainer.w
			});
		},

		/**
		 * Adds and item to the selection list.
		 * 
		 * @param selection
		 *            The row number of the item to be selected.
		 */
		addToSelection: function(selection) {
			this.grid.selection.addToSelection(selection);
		},

		/**
		 * Get an Array of selected items from the {@link dojox.grid.DataGrid}.
		 * 
		 * @return An array of the selected rows.
		 */
		getSelectedItems: function() {
			var items = this.grid.selection.getSelected();
			this.logDebug("getSelectedItems", "items size = " + items.length);
			return items;
		}
	});
});

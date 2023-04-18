/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dojo/data/ItemFileWriteStore",
	"dojox/grid/DataGrid",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/registry",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/widget/_MoveUpDownMixin",
	"ecm/widget/MultiColumnList",
	"ecm/widget/teamspaceBuilder/SelectionToolbar",
	"dojo/text!./templates/VerticalSloshBucket.html"
],

function(declare, //
array, //
lang, //
domStyle, //
domClass, //
window, //
ItemFileWriteStore, //
DataGrid, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
registry, //
LoggerMixin, //
Messages, //
_MoveUpDownMixin, //
MultiColumnList, //
SelectionToolbar, //
template) {

	/**
	 * @name ecm.widget.VerticalSloshBucket
	 * @class Provides a vertical slosh bucket that is used in teamspace builder to add classes or entry templates,
	 *        searches, and existing roles to teamspace templates.
	 * @augments dijit._Widget, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin,
	 *           ecm.widget._MoveUpDownMixin
	 */
	return declare("ecm.widget.VerticalSloshBucket", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		_MoveUpDownMixin
	], {
		/** @lends ecm.widget.VerticalSloshBucket.prototype */

		templateString: template,
		widgetsInTemplate: true,
		messages: ecm.messages,

		/**
		 * @private A {@link dojo.data.ItemFileWriteStore} for the available list.
		 */
		_availableStore: null,

		/**
		 * @private A {@link dojo.data.ItemFileWriteStore} for the selection list.
		 */
		_selectionStore: null,

		/**
		 * Indicates if the <strong>Add</strong> button should be visible.
		 */
		showAddButton: false,

		/**
		 * Indicates if the <strong>Edit</strong> button should be visible.
		 */
		showEditButton: false,

		/**
		 * Indicates if the <strong>Make Default</strong> button should be visible.
		 */
		showMakeDefaultButton: false,

		/**
		 * Indicates if the <strong>Make Available</strong> button should be visible.
		 */
		showMakeAvailableButton: false,

		/**
		 * Indicates if the <strong>Create</strong> button should be visible.
		 */
		showCreateButton: true,
		/**
		 * Indicates that double-click is enabled to add a selection.
		 */
		doubleClickAddSelection: true,

		/**
		 * Indicates double-click is enabled to open or view an item in the available list.
		 */
		doubleClickAddAvailable: true,

		/**
		 * The label used for the available list.
		 */
		availableListLabel: "", // set in the template

		/**
		 * The label used for the selection list.
		 */
		selectionLabel: "",

		/**
		 * The label used for the <strong>Create</strong> button.
		 */
		createButtonLabel: "", // set in the template

		/**
		 * The label used for the <strong>Add</strong> button.
		 */
		addButtonLabel: "", // set in the template

		/**
		 * The label used for the selection list.
		 */
		selectedListLabel: "", // also set in the template

		/**
		 * If set to <code>true</code>, when an available item is added to the selection list it is hidden in the
		 * available list.
		 */
		hideAvailableItemOnAdd: false,

		/**
		 * Height of the selection list.
		 */
		selectedHeight: "200px",

		/**
		 * Height of the available list.
		 */
		availableHeight: "225px",

		/**
		 * Is called when an add item event is fired.
		 * 
		 * @private
		 */
		onAddItem: function() {
			var storeItems = this.availableList.grid.selection.getSelected();
			for ( var i = 0; i < storeItems.length; i++) {
				var item = storeItems[i];
				var obj = this._itemToObject(this._availableStore, item);

				var testItem = this._selectionStore._getItemByIdentity(obj.id); // check if items is already added to the store
				if (!testItem) {
					this.addItemToSelection(obj);
				}
			}
			if (this.hideAvailableItemOnAdd) {
				this.availableList.grid.removeSelectedRows();
				this.availableList.grid.store.save();
			} else {
				this.availableList.clearSelection();
			}
			this._handleSelectionChange();
		},

		/**
		 * Adds an object to the selection store.
		 * 
		 * @param obj
		 *            The object that will be added to the selection store.
		 */
		addItemToSelection: function(obj) {
			this._addToStore(obj, this._selectionStore);
			this._handleSelectionChange();
		},

		/**
		 * This method listens for the double-click event fired from the available list.
		 * 
		 * @private
		 */
		onAvailableRowDblClick: function(evt) {
			if (this.doubleClickAddAvailable) {
				var item = this.availableList.grid.getItem(evt.rowIndex);
				var obj = this._itemToObject(this._availableStore, item);
				var testItem = this._selectionStore._getItemByIdentity(obj.id); // check if items is already added to the store
				if (!testItem) {
					this.addItemToSelection(obj);
				}
				if (this.hideAvailableItemOnAdd) {
					this.availableList.grid.removeSelectedRows();
					this.availableList.grid.store.save();
				}
				this._handleSelectionChange();
			}
		},

		/**
		 * Adds an object to the available store.
		 * 
		 * @param obj
		 *            The object that will be added to the available store.
		 */
		addItemToAvailableList: function(obj) {
			this._addToStore(obj, this._availableStore);
		},

		/**
		 * Removes an object from the available list.
		 * 
		 * @param obj
		 *            The object that will be removed from the available store.
		 */
		removeItemFromAvailableList: function(obj) {
			this._removeFromStore(obj, this._availableStore);
		},

		/**
		 * Moves the selected rows in the selection list to the bottom of the available list.
		 */
		onMoveItemFromSelectedToAvailable: function() {
			var storeItems = this.selectionList.grid.selection.getSelected();
			for ( var i = 0; i < storeItems.length; i++) {
				var item = storeItems[i];
				var obj = this._itemToObject(this._selectionStore, item);
				this.addItemToAvailableList(obj);
			}
			this.selectionList.grid.removeSelectedRows();
			this.selectionList.grid.store.save();

			this._handleSelectionChange();
		},

		/**
		 * Called when a row in the selection list is double clicked.
		 * 
		 * @param evt
		 *            The double click event.
		 * @private
		 */
		onSelectedRowDblClick: function(evt) {
			if (this.doubleClickAddSelection) {
				var item = this.selectionList.grid.getItem(evt.rowIndex);
				var obj = this._itemToObject(this._selectionStore, item);
				this.addItemToAvailableList(obj);

				this.selectionList.grid.selection.clear();
				this._selectionStore.deleteItem(item);
				this._selectionStore.save();
				this._handleSelectionChange();
			}
		},

		/**
		 * Moves the selected rows in the selection list up.
		 */
		onMoveOrderUp: function() {
			this._moveUpSelectedRows(this.selectionList.grid);
		},

		/**
		 * Moves the selected rows in the selection list down.
		 */
		onMoveOrderDown: function() {
			this._moveDownSelectedRows(this.selectionList.grid);
		},

		/**
		 * Removes the selected rows from the selection list.
		 */
		onRemoveItems: function() {
			this.selectionList.grid.removeSelectedRows();
			this.selectionList.grid.store.save();

			this._handleSelectionChange();
		},

		/**
		 * Adds an object to a store.
		 * 
		 * @param obj
		 *            An object.
		 * @param store
		 *            A {@link dojo.data.ItemFileWriteStore}.
		 * @private
		 */
		_addToStore: function(obj, store) {
			var testItem = store._getItemByIdentity(obj.id); // check if the item is already added to the store
			if (!testItem) {
				store.newItem(obj);
				store.save();
			}
		},

		/**
		 * Removes an object from a {@link dojo.data.ItemFileWriteStore} store.
		 * 
		 * @private
		 */
		_removeFromStore: function(obj, store) {
			var item = store._getItemByIdentity(obj.id);
			if (item) {
				store.deleteItem(item);
				store.save();
			}

		},

		/**
		 * Fires event when selection of the selection list changes.
		 * 
		 * @private
		 */
		_handleSelectionChange: function() {
			var store = this._selectionStore;
			var _this = this;
			store.fetch({
				onComplete: function(/* array of items */storeItems) {
					var objects = [];
					for ( var i = 0; i < storeItems.length; i++) {
						var item = storeItems[i];
						var obj = _this._itemToObject(store, item);
						objects.push(obj);
					}

					_this.onSelectionChange(objects);
				}
			});
		},

		/**
		 * Invoked when the selection list selections change.
		 * 
		 * @param selectedItems
		 *            An array of selected items.
		 */
		onSelectionChange: function(/* array of objects */selectedItems) {
		},

		/**
		 * Invoked when the <strong>Create New</strong> button is clicked.
		 */
		onCreateNewItem: function() {

		},

		/**
		 * Invoked when the <strong>Add New</strong> button is clicked.
		 */
		onAddNewItem: function() {

		},

		/**
		 * Invoked when the <strong>Make Default</strong> button is clicked.
		 */
		onMakeDefault: function() {

		},

		/**
		 * Invoked when the <strong>Make Available</strong> button is clicked. Gets the selected item from the
		 * selection list and calls <code>onMakeAvailable</code> with the selected item. If there is no selected item,
		 * <code>onMakeAvailable</code> is not called.
		 */
		onMakeAvailableButtonClicked: function() {
			var storeItems = this.selectionList.grid.selection.getSelected();
			if (storeItems.length != 0) {
				var obj = this._itemToObject(this._selectionStore, storeItems[0]);
				this.onMakeAvailable(obj);
			}
		},

		/**
		 * Called when the <strong>Make Available</strong> button is clicked and an item is selected in the selection
		 * list.
		 * 
		 * @param obj
		 *            The selected object.
		 */
		onMakeAvailable: function(obj) {
			// subscribe in the container control
		},

		/**
		 * Invoked when the <strong>Edit</strong> button is clicked. Gets the selected item from the selection list and
		 * calls <code>onEdit</code> with the selected item. If there is no selected item, <code>onEdit</code> is
		 * not called.
		 */
		onEditButtonClicked: function() {
			var storeItems = this.selectionList.grid.selection.getSelected();
			if (storeItems.length != 0) {
				this.onEdit(storeItems[0]);
			}
		},

		/**
		 * Called when the <strong>Edit</strong> button is clicked and an item is selected in the selection list.
		 * 
		 * @param obj
		 *            The selected object.
		 */
		onEdit: function(obj) {
			// subscribe in the container control
		},

		/**
		 * Overrides dijit._Widget.postCreate to create the teamspaceBuilder.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.selectionToolbar = new SelectionToolbar({
				id: this.id + "_selectionToolbar",
				showEditButton: this.showEditButton,
				createButtonLabel: this.createButtonLabel,
				addButtonLabel: this.addButtonLabel,
				showCreateButton: this.showCreateButton,
				showMakeDefaultButton: this.showMakeDefaultButton,
				showAddButton: this.showAddButton,
				showMakeAvailableButton: this.showMakeAvailableButton
			});
			this.connect(this.selectionToolbar, "onMakeDefault", "onMakeDefault");
			this.connect(this.selectionToolbar, "onCreateNewItem", "onCreateNewItem");
			this.connect(this.selectionToolbar, "onAddNewItem", "onAddNewItem");
			this.connect(this.selectionToolbar, "onEdit", "onEditButtonClicked");
			this.connect(this.selectionToolbar, "onRemove", "onRemoveItems");
			this.connect(this.selectionToolbar, "onMakeAvailable", "onMakeAvailableButtonClicked");
			this.connect(this.selectionToolbar, "onMoveOrderUp", "onMoveOrderUp");
			this.connect(this.selectionToolbar, "onMoveOrderDown", "onMoveOrderDown");

			this.selectionList.setToolbar(this.selectionToolbar);
			this.logExit("postCreate");
		},

		/**
		 * Enables or disables buttons based on if anything is selected in the selection list.
		 * 
		 * @param selectedItems
		 *            An array of selected items.
		 * @private
		 */
		onSelectSelection: function(selectedItems) {
			this.selectionToolbar.updateButtons(selectedItems.length);

			this.selectionToolbar.moveOrderUpButton.set('disabled', selectedItems.length == 0 || !this._hasRowsToMoveUp(this.selectionList.grid));
			this.selectionToolbar.moveOrderDownButton.set('disabled', selectedItems.length == 0 || !this._hasRowsToMoveDown(this.selectionList.grid));
			this.removeButton.set('disabled', selectedItems.length == 0);
		},

		/**
		 * Disables the <strong>Add</strong> button if no items are selected.
		 * 
		 * @param selectedItems
		 *            An array of selected items.
		 * @private
		 */
		onSelectAvailable: function(selectedItems) {
			this.addButton.set('disabled', selectedItems.length == 0);
		},

		/**
		 * Sets the models to be used in the verticalSloshBucket.
		 * 
		 * @param availableStore
		 *            A {@link dojo.data.ItemFileWriteStore} object that contains the available items.
		 * @param selectionStore
		 *            A {@link dojo.data.ItemFileWriteStore} object that will store the selected items.
		 * @param availableListColumns
		 *            An array of columns for the available list grid.
		 * @param selectionListColumns
		 *            An array of columns for the selection list grid.
		 */
		setModels: function(availableStore, selectionStore, availableListColumns, selectionListColumns) {
			this._availableStore = availableStore;
			this.availableList.setModel(availableListColumns, availableStore);
			this.availableList.resize();
			this.connect(this.availableList.grid, "onRowDblClick", "onAvailableRowDblClick");

			if (selectionStore) {
				this._selectionStore = selectionStore;
				this.selectionList.setModel(selectionListColumns, selectionStore);
				this.selectionList.resize();
				this.connect(this.selectionList.grid, "onRowDblClick", "onSelectedRowDblClick");
			}
		},

		/**
		 * Invokes resize on the selected and available list.
		 */
		resize: function() {
			this.selectionList.resize();
			this.availableList.resize();
		},

		/**
		 * Returns the properties of the selected item in a new object.
		 * 
		 * @param store
		 *            The {@link dojo.data.ItemFileWriteStore} that contains the selected item.
		 * @param selectedItem
		 *            The selected item.
		 * @return A new object that contains the properties of the selected item.
		 * @private
		 */
		_itemToObject: function(store, selectedItem) {
			var obj = {};
			if (selectedItem !== null) {
				array.forEach(store.getAttributes(selectedItem), function(attribute) {
					var isArray = attribute == "privileges"; // these properties contain arrays
					var value = isArray ? store.getValues(selectedItem, attribute) : store.getValue(selectedItem, attribute);
					obj[attribute] = value;
				});
			}
			return obj;
		},

		_eof: null
	});
});

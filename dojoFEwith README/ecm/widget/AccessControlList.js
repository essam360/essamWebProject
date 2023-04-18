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
	"dojo/dom-style", //
	"dojo/dom-construct", //
	"dojo/dom-geometry", //
	"dojo/store/Memory",
	"dojo/aspect",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Body",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/Focus",
	"gridx/modules/CellWidget",
	"gridx/modules/Filter",
	"gridx/modules/move/Row",
	"gridx/modules/VirtualVScroller",	
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
	"ecm/model/Permission",
	"dojo/text!./templates/AccessControlList.html"
], //
function(declare, //
array, //
event, //
lang, //
has, //
style, //
domConstruct, //
domGeom, //
MemoryStore, //
aspect, //
Grid, //
Cache, //
Body, //
SelectRow, //
ExtendedSelectRow, //
Focus, //
CellWidget, //
FilterModule, //
MoveRow, //
VirtualVScroller, //
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
Permission, //
template) {

	/**
	 * @name ecm.widget.AccessControlList
	 * @class Provides a simple list that is used to select users or groups.
	 * @augments dijit._Widget, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin, ecm.MessagesMixin
	 *
	 * @private
	 */
	return declare("ecm.widget.AccessControlList", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.AccessControlList.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * List of modules to optionally add to the available grid.
		 */
		availableGridModules: null,
		
		/**
		 * @private
		 */
		_selectedItem: null,


		/***************************************************************************************************************
		 * A string indicating the name of the list.
		 */
		label: "",

		/**
		 * A string indicating the height of the list.
		 */
		borderHeight: "300px",
		/**
		 * A string indicating the width of the list.
		 */
		borderWidth: "300px",


		/**
		 * {@link dijit.Menu} instance for the context menu to use for the list.
		 */
		contextMenuHandler: null,


		/**
		 * The aria label for the grid.
		 */
		"aria-label": "",

		/**
		 * Enables in read only mode.
		 */
		readOnly: false,

		/**
		 * Constructor.
		 */
		constructor: function() {
			if (!this.coreModules) {
				this.coreModules = [
					CellWidget,
					Focus,
					SelectRow,
					ExtendedSelectRow,
					FilterModule,
					VirtualVScroller, // large dojo/store/Memory performs much faster with VirtualVScroller
					{
						moduleClass: Body,
						emptyInfo: ""
					}
				];
	
			}
		},
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
			//this._filter.set("placeholder", this.messages.name_contains_label);
			var accessOptions = [{
				value: Permission.ACCESS_TYPE.ALLOW,
				label: this.messages.admin_repository_redaction_role_access_type_access,
				selected: true
			}, 
			{
				value: Permission.ACCESS_TYPE.DENY,
				label: this.messages.admin_repository_redaction_role_access_type_no_access
			}];
			this.access.addOption(accessOptions);
		},

		postMixInProperties: function() {
			this.inherited(arguments);
			//this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			//this._filterText = ecm.messages.multicolumn_list_filter_text;
			
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
			
			var domNodeMarginBoxBorderContainer = domGeom.getMarginBox(this.borderContainer.domNode);
			var centerPaneBox = domGeom.getMarginBox(this.centerPane.domNode);
			var bottomPaneBox = domGeom.getMarginBox(this.bottomPane.domNode);

			
			this.centerPane.resize({
				h: (domNodeMarginBoxBorderContainer.h - bottomPaneBox.h),
				w: domNodeMarginBoxBorderContainer.w
			});
			
			this.grid.resize({
				h: centerPaneBox.h
				//w: centerPaneBox.w
			});			
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

			this.grid = new Grid({
				region: "center",
				style: "width: 95%; height: 300px; margin: 5px 0 5px 0;",
				structure: this._hitchEscapeHtmlDecorators(columns),
				store: datastore,
				textDir: this.textDir,
				cacheClass: Cache,
				selectRowTriggerOnCell: true,
				modules: this._getAvailableGridModules(),
				columnWidthAutoResize: true
			});
			if (this.contextMenuHandler)
				this.connect(this.grid, "onRowContextMenu", this.contextMenuHandler);
			domConstruct.place(this.grid.domNode, this.gridPane, "only");
			//this.centerPane.addChild(this.grid);
			this.grid.startup();
			//this.refreshGrid();
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
		 * @private Filters and refreshes the available grid.
		 */
		refreshGrid: function() {
			this.grid.select.row.clear();
			//this.grid.model.filter();
			this.grid.body.refresh();
		},		
		/**
		 * @private Returns the modules to add to the available grid.
		 */
		_getAvailableGridModules: function() {
			var modules = this.coreModules;
			if (this.availableGridModules) {
				for ( var i in this.availableGridModules) {
					modules.push(this.availableGridModules[i]);
				}
			}
			return modules;
		},

		/**
		 * @private Any cell without a decorator, add the html escape decorator so all string data is shown as-is.
		 * @param structure
		 *            Structure array containing column definitions to modify.
		 */
		_hitchEscapeHtmlDecorators: function(structure) {
			if (structure) {
				for ( var i in structure) {
					var cell = structure[i];
					if (cell && !cell.decorator) {
						cell.decorator = function(data, rowId) {
							if (data && lang.isString(data)) {
								return idxHtml.escapeHTML(data);
							} else {
								return data;
							}
						};
					}
				}
			}
			return structure;
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
			

			this.own(aspect.after(this.grid.select.row, "onSelectionChange", lang.hitch(this, "_setAccessControl")));
			if(!this.readOnly)
				style.set(this.bottomPane.domNode, "display", "inline");
			else
				style.set(this.bottomPane.domNode, "display", "none");
			this.resize();
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
		},
		
		/**
		 * Check if the input items can be removed from the selected grid. This method can be overriden to add custom
		 * logic.  (This method is called after the user selects the remove button and after the user double clicks on a row in the selected grid.)
		 * 
		 * @return Boolean indicating if the input items can be removed from the selected grid.
		 */
		isValidToRemove: function(selectedItems) {
			return true;
		},	
		
		_setAccessControl: function(){
			var selected = this.grid.select.row.getSelected();
			if (selected.length > 0){
				this.access.set("disabled", false);
				this._cmAclRemoveMemberButton.set("disabled", false);
				var row = this.grid.row(selected[0]);
				if (row) {
					var item = row.item();
					if (this.access.get("value") != item.access){
						this._settingAccess = true;
						this.access.set("value", item.access);
					}
				}
			}
			else {
				this.access.set("disabled", true);
				this._cmAclRemoveMemberButton.set("disabled", true);
			}
		},	
		/**
		 * @private
		 */
		_onAccessChange: function(){
			if (!this._settingAccess){
				var access = this.access.value;
						

				// Get the selected items .
				var selectedItems = {};
				var selected = this.grid.select.row.getSelected();
				for ( var i = 0; i < selected.length; i++) {
					var row = this.grid.row(selected[i]);
					if (row) {
						selectedItems[row.id] = row.item();
					}
				}

				var currentStoreItems = this.getAllItems();
				// Iterate through the selected items array and change access.
				for (var i = 0; i < currentStoreItems.length; i++){
					var selectedMember = currentStoreItems[i];
					if (selectedItems[selectedMember.id]){
						selectedMember = this.formatSelectedUserGroup(selectedMember, access);
						this.grid.model.store.put(selectedMember, {overwrite: true});
						this.onFieldChange();
					}
				}
				
			}
			this._settingAccess = false;			
		},

		/**
		 * Gets all items from the store.
		 * @private
		 */
		getAllItems: function(){
			var currentStoreItems = [];
			if (this.grid){
				var store = this.grid.store;
				if(store.data.length){
					for (var i in store.data){
						var row = store.data[i];
						currentStoreItems.push(row);
					}
				}
			}
			return currentStoreItems;
		},
		/**
		 * @private
		 */
		addItems: function(items){
			var _this = this; 
			array.forEach(items, function(item) {
				array.forEach(item.usersGroups, function(member) {
					var existingItem = _this.grid.model.store.get(member.id);
					if(!existingItem){
						if(item.id == "ALLOW")
							_this.grid.model.store.add(_this.formatSelectedUserGroup(member, Permission.ACCESS_TYPE.ALLOW));
						else
							_this.grid.model.store.add(_this.formatSelectedUserGroup(member, Permission.ACCESS_TYPE.DENY));
					}
				});
				_this.refreshGrid();
			});		
			
		},
		
		/**
		 * Removes all items from the store
		 */
		removeAllItems: function(){
			var allItems = this.getAllItems();
			for (index in allItems){
				var item = allItems[index];
				this.grid.model.store.remove(item[this.grid.model.store.idProperty]);
			}
		},
		
		/**
		 * @private Event fired when the user clicks the remove button to remove the selected items from the selected
		 *          grid.
		 */
		_onClickRemove: function() {
			var selectedItems = [];
			var selected = this.grid.select.row.getSelected();
			for ( var i = 0; i < selected.length; i++) {
				var row = this.grid.row(selected[i]);
				if (row) {
					selectedItems.push(row.item());
				}
			}
			if (this.isValidToRemove(selectedItems)) {
				// Remove the selected items from the selected grid
				for ( var i = 0; i < selectedItems.length; i++) {
					this.grid.model.store.remove(selectedItems[i][this.grid.model.store.idProperty]);
				}
				this.grid.select.row.clear();
			}
			this.refreshGrid();
			this.onFieldChange();
		},		
		/**
		 * @private
		 */
		formatSelectedUserGroup: function(selectedMember, access){
			
			// Add HTML for strikethrough for denied access
			var html = "<span ";
			if (access == Permission.ACCESS_TYPE.DENY){
				html += "class='ecmRoleDenied'"
			}
			html += ">";
			html += selectedMember.displayName;
			html += "</span>";
			selectedMember.formattedDisplayName = html;
			selectedMember.access = access;
			return selectedMember;
		},			
		/**
		 *  @private
		 */
		onFieldChange: function() {
		
		}
	});
});

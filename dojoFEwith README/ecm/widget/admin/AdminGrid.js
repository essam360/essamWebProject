/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/event", //
	"dojo/keys", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/layout/BorderContainer", //
	"dojox/grid/DataGrid", //
	"dijit/Menu", //
	"dijit/MenuItem", //
	"ecm/MessagesMixin", //
	"ecm/widget/admin/ActionMenu", //
	"ecm/model/Action", //
	"dojo/text!./templates/AdminGrid.html"
], //

function(declare, lang, event, keys, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, DataGrid, Menu, MenuItem, MessagesMixin, ActionMenu, Action, template) {

	/**
	 * @name ecm.widget.admin.AdminGrid
	 * @class Provides a scrollable, tabular grid that is used to display administration objects.
	 * @deprecated
	 */
	return declare("ecm.widget.admin.AdminGrid", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.AdminGrid.prototype */

		templateString: template,
		widgetsInTemplate: true,

		isResultSetSorted: true,
		//clickableFieldName: "name", // set to the field name that needs a formatter so that it is clickable

		postCreate: function() {
			this.inherited(arguments);
		},

		destroy: function() {
			if (this._actionMenuCreator) {
				this._actionMenuCreator.destroy();
			}
			this.inherited(arguments);
		},

		setActions: function(actions) {
			this._actions = actions;
		},

		setData: function(structure, store, actions, treeModel) {
			this.setActions(actions);

			// Add the name formatter to the structure 
			/* if (this.clickableFieldName) {
			    var structureArray = structure.cells ? structure.cells[0] : structure;
			    for ( var i in structureArray) {
			        var cell = structureArray[i];
			        if (cell.field == this.clickableFieldName) {
			            cell.formatter = lang.hitch(this, "_nameFormatter");
			        }
			    }
			} */

			this._theGrid = new DataGrid({ //new dojox.grid.EnhancedGrid({
				region: "center",
				store: store,
				structure: structure,
				selectionMode: "extended", // Value must be 'single', 'multiple', or 'extended'.  Default is 'extended'.
				plugins: {
				/* indirectSelection: {
				    headerSelector: true,
				    name: "Selection",
				    width: "20px",
				    styles: "text-align: center;"
				} */
				}
			}, document.createElement("div"));
			if (this.isResultSetSorted) { // If isResultSetSorted, the server returned the items sorted by name, update UI to show the sort indicator
				this.connect(this._theGrid, "_onFetchComplete", lang.hitch(this, function() {
					if (this._theGrid.sortInfo == 0) { // On first display of the results, the sortInfo is 0.
						this._theGrid.sortInfo = 2; // set the sort to the 2nd column - Name column
						this._theGrid.views.views[0].renderHeader();
					}
				}));
			}
			this._theGrid.doheaderclick = lang.hitch(this, "doheaderclick", this._theGrid);
			this.borderContainer.addChild(this._theGrid);
			this._theGrid.startup();
			this.resize();

			this.connect(this._theGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this.onRowDblClick(this._theGrid.getItem(evt.rowIndex), evt);
			}));

			this.connect(this._theGrid.selection, "onChanged", function(evt) {
				this.onSelectionChanged(this._theGrid.selection.getSelected(), evt);
			});

			this.connect(this._theGrid, "onRowContextMenu", "_doContextMenu");
			this.connect(this._theGrid, "onKeyDown", function(evt) {
				if (evt.keyCode === keys.F10 && evt.shiftKey) {
					this._doContextMenu(evt);
					event.stop(evt);

				} else if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this._theGrid.selection.selectRange(0, this._theGrid.get('rowCount') - 1);
				}
			});

			// When model data is changed, update the grid row with the latest model data
			if (treeModel) {
				this.connect(treeModel, "onChange", lang.hitch(this, function(treeModelObject) {
					var modelObject = treeModelObject._myAdminModel;
					var index = this._theGrid.getItemIndex(modelObject);
					if (index >= 0) {
						this._theGrid._addItem(modelObject, index, false); // will notify the grid to refresh the row with the item data
					} else {
						this._theGrid.store.onSet(modelObject); // will notify the grid to refresh the row with the item data
					}
				}));
			}
		},

		// override
		onAction: function(items, action) {
		},

		/* // override
		onClickDefaultField: function(modelItem) {
		}, */

		// override
		onRowDblClick: function(modelItem, evt) {
		},

		// override
		onSelectionChanged: function(selectedModelItems) {
		},

		clearSelection: function() {
			this._theGrid.selection.clear();
		},

		getSelected: function() {
			return this._theGrid.selection.getSelected();
		},

		setStore: function(store) {
			this._theGrid.store.close();
			this._theGrid.sortInfo = 0; // re-set the sort to no column sorted
			this._theGrid.setStore(store);
		},

		filter: function(data) {
			this.clearSelection();
			this._theGrid.queryOptions = {
				ignoreCase: true
			};
			this._theGrid.filter(data);
		},

		// Called when right click within the grid.  Shows the item(s) content menu.
		_doContextMenu: function(evt) {
			if (evt.cellIndex < 0) {
				return; // If right click on empty right area of the grid, ignore it
			}
			var byKey = (evt.keyCode === keys.F10);

			// If clicked within the selection, use the selection; otherwise, clear selection & select the row
			if (!byKey && !this._theGrid.selection.isSelected(evt.rowIndex)) {
				this._theGrid.selection.clear();
				this._theGrid.selection.select(evt.rowIndex);
			}

			var items = this.getSelected();
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

		// Override grid's doheaderclick to support nosort for a column
		doheaderclick: function(grid, evt) {
			if (evt.cellNode && !evt.cell._props.nosort) {
				grid.setSortIndex(evt.cell.index);
			}
			grid.onHeaderClick(evt);
		},

		/* _nameFormatter: function(inValue, inRowIndex, cell) {
		    setTimeout(lang.hitch(this, function() {
		        var node = cell.getNode(inRowIndex);
		        if (node && node.firstChild) {
		    		this.connect(node.firstChild, "onclick", lang.hitch(this, function(evt) {
		    			event.stop(evt);
		    			this.onClickDefaultField(this._theGrid.getItem(inRowIndex));
		    			return false;		
		            }));
		        }
		    }), 0);
		    var v = inValue || ecm.messages.undefined_value;
		    return '<a href="javascript:;">' + v + '</a>';
		}, */

		resize: function() {
			this.borderContainer.resize();
		}
	});

});

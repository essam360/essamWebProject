/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"dojox/grid/DataGrid",
	"dojo/data/ItemFileWriteStore",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/window",
	"../../model/ContentClass",
	"../../model/SearchContentClasses",
	"../ContentClassSelector",
	"../HoverHelp"
], function(declare, lang, aspect, domConstruct, domClass, Button, CheckBox, DataGrid, ItemFileWriteStore, domStyle, domGeom, win, ContentClass, SearchContentClasses, ContentClassSelector, HoverHelp) {

	/**
	 * @name ecm.widget.search.SearchClassSelector
	 * @class Provides a widget that contains a tree or drop-down list that is used to select the class for a document
	 *        or folder. It also provides an option to select multiple classes.
	 * @augments ecm.widget.ContentClassSelector
	 */
	return declare("ecm.widget.search.SearchClassSelector", [
		ContentClassSelector
	], {

		/**
		 * Set to true if the widget is to default to selecting multiple classes the first time it is opened.
		 */
		allowMultipleClasses: false,
		_gridRendered: false,

		/**
		 * @private Add the elements needed for multiple classes
		 */
		_createDropDown: function() {
			this.inherited(arguments);

			if (this.allowMultipleClasses) {
				// default to single class on re-rendering
				this._multipleClassesChecked = false;
				// add multiple classes checkbox:
				var multClassChkboxPane = domConstruct.create("div", {
					'class': 'multClassChkBoxArea'
				});
				this._multipleClassesChk = new CheckBox({
					'id': this.id + '_multClassChkBox',
					checked: false
				});
				this.connect(this._multipleClassesChk, "onChange", function(checked) {
					this._multipleClassesChecked = checked;
					this._showMultipleClasses(checked);
					this._renderGrid();
					this._resizeHeight();
				});

				if (this._treeModel) {
					var multiClassCheckBox = this._multipleClassesChk;
					this.own(aspect.around(this._treeModel, "_isExcludedItem", function(originalFunction) {
						return function(item) {
							// When selecting multiple classes, exclude CMIS classes that are not included in super class queries
							return lang.hitch(this, originalFunction, item)() || (multiClassCheckBox.get("checked") && this.repository._isCmis() && !item.includedInSuperClassQuery);
						}
					}));
				}

				// add a title bar to the class tree
				this._treeTitleBar = domConstruct.create("div", {
					innerHTML: ecm.messages.available_classes_col_header,
					'class': 'treeTitle dijitTitlePaneTitle'
				});
				this._availClassesPane.insertBefore(this._treeTitleBar, this._treePanel);

				var multipleClassesLbl = domConstruct.create("label", {
					innerHTML: ecm.messages.multiple_classes_label,
					'for': this.id + '_multClassChkBox'
				});
				this._hoverHelp = new HoverHelp({
					message: ecm.messages.multiple_classes_hover_help,
					isFocusable: true
				});
				this._hoverHelp.startup();
				multClassChkboxPane.appendChild(this._multipleClassesChk.domNode);
				multClassChkboxPane.appendChild(multipleClassesLbl);
				multClassChkboxPane.appendChild(this._hoverHelp.domNode);
				this._subclassPane.style.marginBottom = "5px";
				this._buttonPane.insertBefore(multClassChkboxPane, this._buttonContainerNode);
				this._buildAddRemoveButtonsPane();
				this._buildSelectedGrid();

				// create array for handling tab order
				this._focusItems_singleClass = this._focusItems;
				this._focusItems_multipleClass = [];
				var incSubclassesIdx = -1;
				var treeIdx = -1;
				for (var i = 0; i < this._focusItems.length; i++) {
					if (this._focusItems[i] == this._incSubclasses) {
						incSubclassesIdx = i;
						continue;
					}
					this._focusItems_multipleClass.push(this._focusItems[i]);
					if (this._focusItems[i] == this._grid || this._focusItems[i] == this._tree) {
						treeIdx = i;
						this._focusItems_multipleClass.push(this._multipleClassesChk);
						this._focusItems_multipleClass.push(this._hoverHelp);
						this._focusItems_multipleClass.push(this._addButton);
						this._focusItems_multipleClass.push(this._removeButton);
						this._focusItems_multipleClass.push(this._selectedGrid);
					}
				}
				// add the mult class checkbox to the single class tab order
				var spliceIdx = 0;
				if (incSubclassesIdx >= 0) {
					spliceIdx = incSubclassesIdx;
				} else if (treeIdx >= 0) {
					spliceIdx = treeIdx;
				}
				this._focusItems_singleClass.splice(spliceIdx + 1, 0, this._multipleClassesChk, this._hoverHelp);

				this._showMultipleClasses(this._multipleClassesChk.get("checked"));
			}
		},

		/**
		 * @private
		 */
		_buildSelectedGrid: function() {
			// create store:
			var items = [];
			this._selectedClassesStore = new ItemFileWriteStore({
				data: {
					items: items
				}
			});

			// create structure:
			var layout = [
				{
					field: "name",
					name: ecm.messages.selected_classes_col_header,
					width: "100%"
				}
			];

			this._selectedGrid = new DataGrid({
				structure: layout,
				canSort: function() {
					return false;
				},
				store: this._selectedClassesStore
			});
			this._gridRendered = false;

			this._selectedPane = domConstruct.create("div", {
				'class': 'selectedClassesPane dijitHidden dijitInline'
			});
			this._selectedPane.appendChild(this._selectedGrid.domNode);
			this._mainPanel.appendChild(this._selectedPane);

			this.connect(this._selectedGrid, "onSelected", function(index) {
				this._removeButton.set("disabled", false);
			});

			this.connect(this._selectedGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._removeClick();
			}));

			// need to call startup after the dropdown is rendered
			this.connect(this._dropdown, "openDropDown", function() {
				this._multipleClassesChk.set("value", this._multipleClassesChecked);
			});
		},

		/**
		 * @private
		 */
		_buildAddRemoveButtonsPane: function() {
			this._addRemoveButtonsPane = domConstruct.create("div", {
				'class': 'addRemovePane dijitHidden dijitInline'
			});
			this._mainPanel.appendChild(this._addRemoveButtonsPane);

			this._addButton = new Button({
				showLabel: false,
				iconClass: "addButton",
				'id': this.id + '_addButton'
			});
			this.connect(this._addButton, "onClick", function() {
				this._addClick();
			});
			this._addRemoveButtonsPane.appendChild(this._addButton.domNode);

			this._removeButton = new Button({
				showLabel: false,
				iconClass: "removeButton",
				disabled: true,
				'id': this.id + '_removeButton'
			});
			this.connect(this._removeButton, "onClick", function() {
				this._removeClick();
			});
			this._addRemoveButtonsPane.appendChild(this._removeButton.domNode);
		},

		/**
		 * @private
		 */
		_addClick: function() {
			var selected = this._getSelectedItems();
			if (lang.isArray(selected)) {
				for (ii in selected) {
					this._addSelectedClass(selected[ii]);
				}
			} else {
				this._addSelectedClass(selected);
			}
			this._updateButtonStates();
		},

		/**
		 * @private
		 */
		_addSelectedClass: function(contentClass) {
			var addit = true;
			if (contentClass.id == "$common") {
				addit = false;
			} else {
				for (i in this._selectedClassesStore._arrayOfTopLevelItems) {
					var item = this._selectedClassesStore._arrayOfTopLevelItems[i];
					if (contentClass.id == item.contentClass[0].id) {
						addit = false;
						break;
					}
				}
			}
			if (addit) {
				var newClass = {
					name: contentClass.name,
					contentClass: contentClass
				};
				this._selectedClassesStore.newItem(newClass);
				this._selectedClassesStore.save();
			}
		},

		/**
		 * @private
		 */
		_removeClick: function() {
			this._selectedGrid.removeSelectedRows();
			this._selectedGrid.store.save();
			this._updateButtonStates();
		},

		/**
		 * @private
		 */
		_renderGrid: function() {
			if (!this._gridRendered && this._multipleClassesChecked) {
				this._selectedGrid.startup();
				this._gridRendered = true;
			}
		},

		/**
		 * @private
		 */
		_showMultipleClasses: function(show) {
			if (show) {
				domClass.remove(this._addRemoveButtonsPane, "dijitHidden");
				domClass.remove(this._selectedPane, "dijitHidden");
				domClass.remove(this._treeTitleBar, "dijitHidden");
				domClass.add(this._popupContent, "multipleClasses");
				domClass.add(this._subclassPane, "dijitHidden");
				if (this._grid)
					this._grid.resize();
				
				// save the include subclass state
				this._incSubClass = this._incSubclasses.get("checked");
				this._incSubclasses.set("checked", false);
				this._focusItems = this._focusItems_multipleClass;

				if (this.repository._isCmis()) {
					// Reload the tree to filter out CMIS classes that are not included in super class queries,
					// a must-have for a CMIS class to be included in a multi-class search
					this._treeModel.reload(this._treeModel._rootNode, lang.hitch(this, "_updateButtonStates"));
				} else {
					if (this.repository._isCM() && this._grid) {
						if (this.hasAll) {
							// Remove the All pseudo class
							this._grid.store.deleteItem({
								id: "$common"
							});
							this._grid.store.save();
							this._grid.selection.clear();
						}
						this._doFilter("");
						this._filter.set("value", "");
					}
					this._updateButtonStates();
				}
			} else {
				domClass.add(this._addRemoveButtonsPane, "dijitHidden");
				domClass.add(this._selectedPane, "dijitHidden");
				domClass.add(this._treeTitleBar, "dijitHidden");
				domClass.remove(this._popupContent, "multipleClasses");
				domClass.remove(this._subclassPane, "dijitHidden");
				this._focusItems = this._focusItems_singleClass;
				if (this._grid)
					this._grid.resize();

				// restore the include subclass state
				if (this._incSubClass)
					this._incSubclasses.set("checked", this._incSubClass);

				if (this.repository._isCmis()) {
					// Reload the tree to reinstate CMIS classes that may have been filtered out when selecting multiple classes
					this._treeModel.reload(this._treeModel._rootNode, lang.hitch(this, "_updateButtonStates"));
				} else {
					// restore all class
					if (this.repository._isCM() && this._grid) {
						var objStore = this._grid.store.objectStore;
						if (this.hasAll && !objStore.get("$common")) {
							// Add the All pseudo class at the beginning
							var allClass = new ContentClass({
								id: "$common",
								name: ecm.messages.search_class_all_pseudo,
								repository: this.repository,
								pseudoClass: true
							});
							var data = objStore.data;
							data.unshift({
								id: allClass.id,
								name: allClass.name,
								contentClass: allClass
							});
							
							// Re-index the store's data
							objStore.setData(data);
							
							// Refresh the grid
							this._grid.setStore(this._grid.store);
							this._grid.selection.clear();
						}
						this._doFilter("");
						this._filter.set("value", "");
					}
					this._updateButtonStates();
				}
			}
		},

		/**
		 * Returns the currently selected classes.
		 * 
		 * @return If more than one class is selected, then an array of {@link ecm.model.ContentClass} objects is
		 *         returned. If only one class is selected then a {@link ecm.model.ContentClass} object is returned.
		 */
		getSelected: function() {
			if (this._multipleClassesChecked) {
				var items = this._selectedClassesStore._arrayOfAllItems;
				var selectedItems = [];
				for (ii in items) {
					if (items[ii])
						selectedItems.push(items[ii].contentClass[0]);
				}
				// if there was only 1 class selected don't return an array so that search treats this as a single class search
				if (selectedItems.length == 1) {
					return selectedItems[0];
				}
				return selectedItems;
			} else {
				return this.inherited(arguments);
			}
		},

		/**
		 * @private overridden to disable double click selecting the class 
		 */
		_handleDblClick: function(/* dojo.data */item) {
			if (!this._multipleClassesChecked) {
				return this.inherited(arguments);
			} else {
				// add to selected
				this._addClick();
			}
			return;
		},

		/**
		 * Sets the currently selected class or classes.
		 * 
		 * @param contentClasses
		 *            A {@link ecm.model.SearchContentClasses} object representing the list of selected classes.
		 * @param multiple
		 *            A boolean set to true if multiple classes are selected.
		 */
		setSelected: function(contentClasses, multiple) {
			var selected = contentClasses;
			if (selected && selected.isInstanceOf && selected.isInstanceOf(SearchContentClasses))
				selected = selected.contentClasses;
			if (selected instanceof Array) {
				if (selected.length < 1)
					selected = null;
				else if (selected.length == 1 || !this._multipleClassesChecked && !multiple)
					selected = selected[0];
			}
			if (selected instanceof Array) {
				var addSelected = lang.hitch(this, function(selectedClasses) {
					for (i in selectedClasses) {
						this._addSelectedClass(selectedClasses[i]);
					}
				});
				this._setSelectedItemLabel(selected);
				if (this._multipleClassesChecked) {
					addSelected(selected);
				} else {
					this._multipleClassesChecked = true;
					var handle = aspect.after(this._dropdown, "openDropDown", function() {
						setTimeout(function() {
							handle.remove();
							addSelected(selected);
						});
					});
				}
				this.onContentClassSelected(contentClasses, false);
			} else {
				this.inherited(arguments);
			}
		},

		/**
		 * @private
		 */
		_resizeHeight: function() {
			// Get the dimensions of the window and the space above and below the button.
			var windowBoxDimensions = win.getBox();
			var thisPosition = domGeom.position(this.domNode);
			var spaceBelow = windowBoxDimensions.h - thisPosition.y - thisPosition.h;
			var spaceAbove = thisPosition.y;
			var spaceAvailable = spaceBelow > spaceAbove ? spaceBelow : spaceAbove;
			// Add 5px margin.
			spaceAvailable -= 5;

			// save the full height
			if (this._originalTreePanelHeight == null) {
				this._originalTreePanelHeight = domStyle.get(this._treePanel.id, "height");
			} else {
				domStyle.set(this._treePanel.id, "height", this._originalTreePanelHeight + "px");
				if (this._grid)
					this._grid.resize({ h: this._originalTreePanelHeight });
			}
			if (this._originalPopUpHeight == null) {
				this._originalPopUpHeight = domStyle.get(this._popupContent, "height");
			} else {
				// check if there is enough room for the original height
				if (spaceAvailable > this._originalPopUpHeight) {
					// remove height styles (so it gets it from the CSS)
					domStyle.set(this._treePanel, "height", null);
					if (this._gridRendered && this._multipleClassesChecked) {
						domStyle.set(this._selectedPane, "height", null);
						this._selectedGrid.resize({ h: domStyle.get(this._selectedPane, "height") });
					}
					return;
				}
			}

			// If the dropdown doesn't fit in the space available, reduce height
			if (this._originalPopUpHeight > spaceAvailable) {
				// compute the available room for the tree widget
				var treePanelHeight = spaceAvailable;
				// subtract button area height
				var buttonBarHeight = domGeom.getMarginBox(this._buttonPane).h;
				treePanelHeight -= buttonBarHeight;
				// subtract filter height
				if (this._filterPanel) {
					var filterAreaHeight = domGeom.getMarginBox(this._filterPanel).h;
					treePanelHeight -= filterAreaHeight;
				}

				if (treePanelHeight > 0) {
					var treeHeight = treePanelHeight;
					if (this._treeTitleBar) {
						var titleHeight = domGeom.getMarginBox(this._treeTitleBar).h;
						if (treePanelHeight > titleHeight) {
							treeHeight = treePanelHeight - titleHeight;
							domStyle.set(this._treePanel, "height", treeHeight + "px");
						}
					}

					// resize selected classes pane
					if (this._gridRendered && this._multipleClassesChecked) {
						domStyle.set(this._selectedPane, "height", treePanelHeight + "px");
						this._selectedGrid.resize({ h: treePanelHeight });
					}
					if (this._grid)
						this._grid.resize({ h: treeHeight });
				}
			}
		},

		/**
		 * @private
		 */
		_updateButtonStates: function() {
			if (!this._multipleClassesChecked) {
				this.inherited(arguments);
			} else {
				this._okButton.set("disabled", this._selectedGrid.store._arrayOfTopLevelItems.length <= 0);
				this._removeButton.set("disabled", this._selectedGrid.selection.getSelected().length <= 0);
				
				var selectedItems = this._getSelectedItems();
				this._addButton.set("disabled", (selectedItems == null || (lang.isArray(selectedItems) && !selectedItems.length)));
			}
		},

		/**
		 * Cleans up any objects created.
		 */
		destroy: function() {
			var methodName = "destroy";
			if (this._multipleClassesChk) {
				this._multipleClassesChk.destroy();
				delete this._multipleClassesChk;
			}
			if (this._hoverHelp) {
				this._hoverHelp.destroy();
				delete this._hoverHelp;
			}
			if (this._selectedGrid) {
				if (this._selectedGrid.domNode) {
					this._selectedGrid.destroyRecursive();
				}
				delete this._selectedGrid;
			}
			if (this._addButton) {
				this._addButton.destroy();
				delete this._addButton;
			}
			if (this._removeButton) {
				this._removeButton.destroy();
				delete this._removeButton;
			}
			this.inherited(arguments);
			this.logExit(methodName);
		}

	});
});

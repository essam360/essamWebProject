/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/keys",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojox/grid/DataGrid",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/registry",
	"dijit/Tooltip",
	"dijit/Tree",
	"../MessagesMixin",
	"../LoggerMixin",
	"./_MoveUpDownMixin",
	"./TreeSelector",
	"dojo/text!./templates/SloshBucket.html"
], //
function(declare, //
array, //
event, //
lang, //
has, //
keys, //
domClass, //
domAttr, //
domConstruct, //
domGeom, //
domStyle, //
DataGrid, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
registry, //
Tooltip, //
Tree, //
MessagesMixin, //
LoggerMixin, //
_MoveUpDownMixin, //
TreeSelector, //
template) {
	/**
	 * @name ecm.widget.SloshBucket
	 * @class Provides a widget that is used to pick a subset of unique items from a larger set of items.
	 *        <p>
	 *        The widget contains two single column lists. One list contains the available items and the other list
	 *        contains the selected items. The <strong>Add</strong> button and a <strong>Remove</strong> button that
	 *        are used to move items from one list to the other appear between the columns. Optionally, the widget
	 *        includes an <strong>Up</strong> button and a <strong>Down</strong> button that are used to order the
	 *        selected items.
	 *        </p>
	 * @augments dijit._Widget
	 * @deprecated As of 2.0.3. This widget has been replaced by {@link idx.widget.SloshBucket}
	 */
	return declare("ecm.widget.SloshBucket", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_MoveUpDownMixin,
		MessagesMixin,
		LoggerMixin

	], {
		/** @lends ecm.widget.SloshBucket.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * If set to <code>false</code>, then the move up and move down buttons and container are not displayed.
		 */
		hasSorting: true,
		/**
		 * If set to <code>true</code>, when an available item is added to the selected list it is hidden in the
		 * available list.
		 */
		hideAvailableOnAdd: false,
		/**
		 * This object implements the <code>getTooltipText</code> method which returns the tooltip text for a row.
		 * Tooltip text is displayed when the user hovers the mouse over a row.
		 */
		tooltipClass: null,
		/**
		 * The tooltip position.
		 */
		tooltipPosition: [
			"after",
			"before",
			"above",
			"below"
		], // adding above & below due to long tooltip with no spaces causing issues when only before & after
		/**
		 * The label above the available grid or tree.
		 */
		availableLabel: "",
		/**
		 * The label above the selected grid.
		 */
		selectedLabel: "",

		/**
		 * If defined, this function will be called to perform validation before removing items from the slosh bucket.
		 * selection is passed as the first parameter to validateRemove. The function defined should return true if it
		 * is okay to proceed with the remove. Required for P8 markings use case.
		 */
		validateRemove: null,

		/**
		 * @private Boolean indicating if the sloshBucket is editable.
		 */
		_editable: true,
		/**
		 * @private Boolean indicating if the available list is a tree.
		 */
		_isTree: false,
		/**
		 * @private
		 */
		_enableFixedValuesMoveUpDown: false,

		postCreate: function() {
			this.inherited(arguments);
			domAttr.set(this._addButton.focusNode, "aria-label", this._addButton.get("title"));
			domAttr.set(this._removeButton.focusNode, "aria-label", this._removeButton.get("title"));
			domAttr.set(this._upButton.focusNode, "aria-label", this._upButton.get("title"));
			domAttr.set(this._downButton.focusNode, "aria-label", this._downButton.get("title"));
			this.textDir = has("text-direction");

			this.connect(Tooltip.containerNode, "onkeypress", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.ESCAPE) {
					this._prevTooltipCellNode = null;
					Tooltip.hide(evt.target);
					event.stop(evt);
				}
			}));

			this.connect(Tooltip.containerNode, "onmouseout", lang.hitch(this, function(evt) {
				if (this._prevTooltipCellNode) {
					Tooltip.hide(this._prevTooltipCellNode);
					this._prevTooltipCellNode = null;
				}
			}));

			var keyboardEventNode = this.focusNode || this.domNode;
			this.connect(keyboardEventNode, "keydown", lang.hitch(this, "_onKey"));
		},

		/**
		 * Returns the selected items.
		 */
		getSelectedItems: function() {
			return this.getData(this._valuesGrid);
		},

		_onKey: function(/*Event*/e) {
			if (e.keyCode == keys.ESCAPE) {
				Tooltip.hide(this._prevTooltipCellNode);
			}
			this.inherited(arguments);
		},

		/* make sure the tooltips get destroyed */
		destroy: function() {
			if (this._availableData) {
				if (this._availableData.domNode) {
					this._availableData.destroyRecursive();
				}
				delete this._availableData;
			}
			if (this._valuesGrid) {
				if (this._valuesGrid.domNode) {
					this._valuesGrid.destroyRecursive();
				}
				delete this._valuesGrid;
			}
			if (this._prevTooltipCellNode) {
				Tooltip.hide(this._prevTooltipCellNode);
				delete this._prevTooltipCellNode;
			}
			this.inherited(arguments);
		},

		onHide: function() {
			if (this._prevTooltipCellNode)
				Tooltip.hide(this._prevTooltipCellNode);
		},

		/**
		 * Sets the store and layout on the available (left) grid. Use either <code>setAvailableGridModel</code> if
		 * the available list is a grid, or use <code>setAvailableTreeModel</code> if the available list is a tree.
		 * 
		 * @param store
		 *            The store for the available DataGrid.
		 * @param layout
		 *            The structure for the available DataGrid.
		 */
		setAvailableGridModel: function(store, layout) {
			if (this._availableData) {
				this._availableData.destroy();
			}
			this._isTree = false;
			var displayIt = (this.availableLabel.length > 0) ? "" : "none";
			domStyle.set(this._availableLabel, "display", displayIt);
			domStyle.set(this._availableContentPane, "top", "0");
			this._availableStore = store;
			this._availableData = new DataGrid({
				canSort: function() {
					return false;
				},
				store: store,
				structure: layout,
				textDir: has("text-direction")
			});
			domConstruct.place(this._availableData.domNode, this._availableDataContainer, "only");
			this._availableData.startup();

			this.connect(this._availableData.selection, "onChanged", lang.hitch(this, function() {
				var selected = this._availableData.selection.getSelected();
				var disabled = this._editable == false || selected.length == 0;
				this._addButton.set('disabled', disabled);
			}));

			this.connect(this._availableData, "onKeyDown", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this._availableData.selection.selectRange(0, this._availableData.get('rowCount') - 1);
				}
			}));

			this.connect(this._availableData, "onRowDblClick", lang.hitch(this, function(evt) {
				Tooltip.hide(evt.target);
				if (this._editable) {
					var rowIndex = evt.rowIndex;
					var item = this._availableData.getItem(rowIndex);
					if (this._availableData.onCanSelect(rowIndex)) {
						this._addItem(item);
						if (this.hideAvailableOnAdd) {
							if (this._isTree) {
								this._availableData.dndController.selectNone();
							} else {
								this._availableData._refresh();
								this._availableData.selection.clear();
							}
						}
					}
				}
			}));

			this._addGridTooltipConnect(this._availableData);
		},

		/**
		 * Sets the tree model for the available (left) tree. Use either <code>setAvailableGridModel</code> if the
		 * available list is a grid, or use <code>setAvailableTreeModel</code> if the available list is a tree.
		 * 
		 * @param treeModel
		 *            The tree model for the available tree.
		 * @param showRoot
		 *            Boolean indicating if the root should or should not be shown.
		 */
		setAvailableTreeModel: function(treeModel, showRoot) {
			if (this._availableData) {
				this._availableData.destroy();
			}
			this._isTree = true;
			domStyle.set(this._availableLabel, "display", "");
			domStyle.set(this._availableContentPane, "top", "0");
			this._availableStore = treeModel.store;
			this._availableData = new Tree({
				model: treeModel,
				showRoot: showRoot == undefined ? true : showRoot,
				dndController: "ecm.widget.TreeSelector",
				getRowClass: lang.hitch(this, this._getTreeRowClass),
				onLoad: lang.hitch(this, this._treeLoaded),
				autoExpand: true, // loads all the tree nodes - in reset we can hide all the tree nodes that are already in the values list for hideAvailableOnAdd
				openOnClick: true
			});
			domConstruct.place(this._availableData.domNode, this._availableDataContainer, "only");
			this._availableData.startup();

			this.connect(this._availableData.dndController, "_updateSelectionProperties", function() {
				var selected = this._availableData.dndController.getSelectedTreeNodes();
				var disabled = this._editable == false || selected.length == 0;
				this._addButton.set('disabled', disabled);
			});
			// Ctrl F1 opens the hover help drop down dialog - Escape closes it
			this.connect(this._availableData.domNode, "onkeypress", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.charOrCode == keys.F1) {
					var treeNode = registry.getEnclosingWidget(evt.target);
					this._showTooltipForTreeNode(registry.getEnclosingWidget(evt.target));
					event.stop(evt);
				}
			}));
			this.connect(this._availableData.domNode, "onmouseover", lang.hitch(this, function(evt) {
				this._showTooltipForTreeNode(registry.getEnclosingWidget(evt.target));
			}));
			this.connect(this._availableData.domNode, "onmouseout", lang.hitch(this, function(evt) {
				Tooltip.hide(evt.target);
			}));
			this.connect(this._availableData, "_onDblClick", lang.hitch(this, function(treeNode, evt) {
				Tooltip.hide(evt.target);
				if (this._editable && this._availableData.dndController._isSelectable(treeNode)) {
					this._addItem(treeNode.item);
					if (this.hideAvailableOnAdd) {
						this._availableData.dndController.selectNone();
					}
				}
			}));
		},

		/**
		 * @private Show the tooltip for the input tree node.
		 */
		_showTooltipForTreeNode: function(treeNode) {
			if (treeNode) {
				var tooltipText = this.tooltipClass.getTreeTooltipText(treeNode.tree.model, treeNode);
				if (tooltipText && tooltipText.length > 0) {
					this._prevTooltipCellNode = treeNode.domNode;
					Tooltip.show(tooltipText, treeNode.domNode, this.tooltipPosition, !this.isLeftToRight(), this.textDir);
				}
			}
		},

		/**
		 * When the available tree is loaded, collapse all nodes.
		 */
		_treeLoaded: function() {
			this._collapseAll(this._availableData.rootNode);
		},

		/**
		 * Collapse all nodes under the input node.
		 * 
		 * @param node
		 *            The node to collapse.
		 */
		_collapseAll: function(node) {
			if (node) {
				var children = node.getChildren();
				if (children) {
					for ( var i = 0; i < children.length; i++) {
						this._collapseAll(children[i]);
						this._availableData._collapseNode(children[i]);
					}
				}
			}
		},

		/**
		 * Return the CSS class for the tree node. If there is no value on the item, then set the CSS class to
		 * <code>NotSelectable</code>.
		 * 
		 * @param item
		 *            The item.
		 * @param opened
		 *            If the item is opened.
		 */
		_getTreeRowClass: function(/* dojo.data.Item */item, /* Boolean */opened) {
			return (!item.value) ? "NotSelectable" : "";
		},

		/**
		 * On mouse over the grid, display the tooltip. On mouse out, hide the tooltip.
		 * 
		 * @param grid
		 *            The DataGrid in which to add the <code>onRowMouseOver</code> and <code>OnRowMouseOut</code>
		 *            events.
		 */
		_addGridTooltipConnect: function(grid) {
			if (this.tooltipClass && this.tooltipClass.getGridTooltipText) {
				// Ctrl F1 opens the hover help drop down dialog - Escape closes it
				this.connect(grid.domNode, "onkeypress", lang.hitch(this, function(evt) {
					if (evt.ctrlKey && evt.charOrCode == keys.F1) {
						var node = evt.target;
						while (true) {
							if (!node || domClass.contains(node, "dojoxGridRow")) {
								break;
							}
							node = node.parentNode;
						}
						if (node && node.gridRowIndex != undefined) {
							var item = grid.getItem(node.gridRowIndex);
							var tooltipText = this.tooltipClass.getGridTooltipText(grid, item);
							if (tooltipText && (!this._prevTooltipCellNode || this._prevTooltipCellNode != evt.target)) {
								try {
									if (evt.target)
										Tooltip.show(tooltipText, evt.target, this.tooltipPosition, !this.isLeftToRight(), this.textDir);//38360
									this._prevTooltipCellNode = evt.cellNode;
								} catch (e) {
									Tooltip.hide(this._prevTooltipCellNode);
								}
							}
							event.stop(evt);
						}
					}
				}));
				this.connect(grid, "onRowMouseOver", lang.hitch(this, function(evt) {
					var item = grid.getItem(evt.rowIndex);
					var tooltipText = this.tooltipClass.getGridTooltipText(grid, item);
					if (tooltipText && (!this._prevTooltipCellNode || this._prevTooltipCellNode != evt.cellNode)) {
						try {
							if (evt.cellNode)
								Tooltip.show(tooltipText, evt.cellNode, this.tooltipPosition, !this.isLeftToRight(), this.textDir);//38360
							this._prevTooltipCellNode = evt.cellNode;
						} catch (e) {
							Tooltip.hide(this._prevTooltipCellNode);
						}
					}
				}));
				this.connect(grid, "onRowMouseOut", lang.hitch(this, function(evt) {
					this._prevTooltipCellNode = null;
					Tooltip.hide(evt.cellNode);
				}));
			}
		},

		/**
		 * Sets the store, layout, selected values, and fixed values for the selected (right) grid.
		 * 
		 * @param store
		 *            The selected values store.
		 * @param layout
		 *            The selected values structure.
		 * @param selectedValues
		 *            The keys on this structure are the default selected values to add to the selected values grid.
		 * @param fixedSelectedValues
		 *            Array of values that cannot be removed from the selected values grid.
		 */
		setSelectedValuesGridModel: function(store, layout, selectedValues, fixedSelectedValues) {
			if (this._valuesGrid) {
				this._valuesGrid.destroyRecursive();
			}
			this._fixedSelectedValues = fixedSelectedValues;
			var displayIt = (this.selectedLabel.length > 0) ? "" : "none";
			domStyle.set(this._selectedLabel, "display", displayIt);
			if (!this.hasSorting) { // hide the up down arrows pane if sorting is disabled
				domStyle.set(this._valuesGridContentPane, "right", "0");
				domStyle.set(this._moveUpDownButtonContainer, "display", "none");
			}
			this._valuesGrid = new DataGrid({
				canSort: function() {
					return false;
				},
				store: store,
				structure: layout,
				textDir: has("text-direction")
			});
			domConstruct.place(this._valuesGrid.domNode, this._valuesGridContainer, "only");
			this._valuesGrid.startup();

			this.connect(store, "onNew", lang.hitch(this, function() {
				setTimeout(lang.hitch(this, function() {
					this._valuesGrid.scrollToRow(this._valuesGrid.get('rowCount'));
				}, 100));
			}));

			this.connect(this._valuesGrid, "onKeyDown", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.keyCode == 65) { // Ctrl A
					event.stop(evt);
					this._valuesGrid.selection.selectRange(0, this._valuesGrid.get('rowCount') - 1);
				}
			}));

			this.connect(this._valuesGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				Tooltip.hide(evt.target);
				if (this._editable) {
					var item = this._valuesGrid.getItem(evt.rowIndex);
					var value = this._valuesGrid.store.getValue(item, "value");
					if (this._isFixedValue(value)) {
						return;
					}
					if (this.hideAvailableOnAdd) {
						this._availableStore.fetch({
							queryOptions: {
								deep: true
							},
							scope: this,
							onItem: function(availItem) {
								var availValue = this._availableStore.getValue(availItem, "value");
								if (availValue == value) {
									if (this._isTree) {
										var nodes = this._availableData.getNodesByItem(availItem);
										if (nodes && nodes.length > 0) {
											for ( var j = 0; j < nodes.length; j++) {
												var node = nodes[j];
												if (node) {
													node.domNode.style.display = "";
												}
											}
										}
									} else { // grid uses "displayit" in its filter to determine if the row should be displayed
										this._availableStore.setValue(availItem, "displayit", "true");
									}
								}
							}
						});
						if (!this._isTree) {
							this._availableData._refresh();
						}
					}
					this._valuesGrid.selection.clear();
					this._valuesGrid.store.deleteItem(item);
					this._valuesGrid.store.save(); // when use identifier & then add, remove, & add, this save fixes assert failure on add  
				}
			}));

			if (this.hasSorting) {
				this.connect(this._valuesGrid, "updateRowCount", lang.hitch(this, function(num) {
					// Since we added row(s), need to re-check the down button
					var disabled = this._editable == false || !this._hasRowsToMoveDown(this._valuesGrid);
					this._downButton.set('disabled', disabled);
				}));
			}

			this.connect(this._valuesGrid.selection, "onChanged", function() {
				var selected = this._valuesGrid.selection.getSelected();
				var disabled = this._editable == false || selected.length == 0;
				var disableMoveUp = false;

				if (this._fixedSelectedValues) {
					for ( var i = 0; i < selected.length; i++) {
						var item = selected[i];
						if (item) {
							var value = this._valuesGrid.store.getValue(item, "value");
							if (this._isFixedValue(value)) {
								disabled = true;
								break;
							}
						}
						var selectedIndex = this._valuesGrid.getItemIndex(selected[i]);
						if (selectedIndex == this._fixedSelectedValues.length)
							disableMoveUp = true;
					}
					this._removeButton.set('disabled', disabled);
					if (this._enableFixedValuesMoveUpDown) {
						disabled = this._editable == false || !this._hasRowsToMoveUp(this._valuesGrid);
						this._upButton.set('disabled', disabled);
						disabled = this._editable == false || !this._hasRowsToMoveDown(this._valuesGrid);
						this._downButton.set('disabled', disabled);
					} else {
						this._upButton.set('disabled', disabled || disableMoveUp);
						this._downButton.set('disabled', disabled);
					}
				} else {
					this._removeButton.set('disabled', disabled);

					if (this.hasSorting) {
						disabled = this._editable == false || !this._hasRowsToMoveUp(this._valuesGrid);
						this._upButton.set('disabled', disabled);
						disabled = this._editable == false || !this._hasRowsToMoveDown(this._valuesGrid);
						this._downButton.set('disabled', disabled);
					}
				}
			});
			this._addGridTooltipConnect(this._valuesGrid);
			this.resize();

			if (this.hideAvailableOnAdd) {
				this._availableStore.fetch({
					queryOptions: {
						deep: true
					},
					scope: this,
					onItem: function(availItem) {
						var availValue = this._availableStore.getValue(availItem, "value");
						var displayit = selectedValues[availValue] ? false : true;

						if (this._isTree) {
							var nodes = this._availableData.getNodesByItem(availItem);
							if (nodes && nodes.length > 0) {
								for ( var i = 0; i < nodes.length; i++) {
									var node = nodes[i];
									if (node) {
										node.domNode.style.display = (displayit ? "" : "none");
									}
								}
							}
						} else { // grid uses "displayit" in its filter to determine if the row should be displayed
							this._availableStore.setValue(availItem, "displayit", displayit);
						}
					}
				});
				if (this._isTree) {
					this._availableData.dndController.selectNone();
				} else { // refresh the grid
					var _this = this;
					setTimeout(function() {
						_this._availableData._refresh();
						_this._availableData.selection.clear();
					}, 100);
				}
			} else {
				if (this._isTree) {
					this._availableData.dndController.selectNone();
				} else {
					this._availableData.selection.clear();
				}
			}
			// clear the selection & disable the buttons on show
			this._addButton.set('disabled', true);
			this._removeButton.set('disabled', true);
			if (this.hasSorting) {
				this._upButton.set('disabled', true);
				this._downButton.set('disabled', true);
			}
		},

		/**
		 * @private
		 */
		_isFixedValue: function(value) {
			// Javascript array object indexOf is not supported in IE8 and earlier. Use the dojo array module wrapper for indexOf.
			return (this._fixedSelectedValues ? (array.indexOf(this._fixedSelectedValues, value) >= 0) : false);
		},

		/**
		 * @private
		 */
		_setFixedValues: function(fixedValues) {
			this._fixedSelectedValues = fixedValues;
			if (this._valuesGrid) {
				this._valuesGrid.selection.onChanged(); // force the sloshbucket buttons to be enabled/disabled
			}
		},

		/**
		 * @private
		 */
		_addSelectedValue: function(value) {
			if (this._editable && this._availableData) {
				this._availableData.store.fetch({
					queryOptions: {
						deep: true
					},
					scope: this,
					onItem: function(item) {
						var availValue = this._availableData.store.getValue(item, "value");
						if (availValue == value) {
							this._addItem(item);
						}
					}
				});
				if (this.hideAvailableOnAdd) {
					if (this._isTree) {
						this._availableData.dndController.selectNone();
					} else {
						var _this = this;
						setTimeout(function() {
							_this._availableData._refresh();
							_this._availableData.selection.clear();
							_this._valuesGrid._refresh();
							_this._valuesGrid.selection.clear();
						}, 100);
					}
				}
			}
		},

		/**
		 * Returns the selected values grid.
		 * 
		 * @return The Dojo DataGrid.
		 */
		getSelectedValuesGrid: function() {
			return this._valuesGrid;
		},

		/**
		 * Boolean that sets the slosh bucket as editable or read only.
		 * 
		 * @param editable
		 *            {Boolean} Set to <code>true</code> to make the slosh bucket editable and <code>false</code> to
		 *            make it read only.
		 */
		setEditable: function(editable) {
			this._editable = editable;
			if (editable) {
				domClass.remove(this.domNode, "readOnly");
			} else {
				domClass.add(this.domNode, "readOnly");
			}
			this._addButton.set('disabled', !this._editable);
			this._removeButton.set('disabled', !this._editable);
			this._upButton.set('disabled', !this._editable);
			this._downButton.set('disabled', !this._editable);
		},

		/**
		 * Event fired when an item is removed from the selected grid.
		 */
		_onClickRemove: function() {
			var valid = true;
			if (this.validateRemove != null) {
				valid = this.validateRemove(this._valuesGrid.selection);
			}

			if (valid && this._valuesGrid != null) {
				if (this.hideAvailableOnAdd) {
					var items = this._valuesGrid.selection.getSelected();
					for ( var i = 0; i < items.length; i++) {
						var item = items[i];
						var value = this._valuesGrid.store.getValue(item, "value");

						this._availableStore.fetch({
							queryOptions: {
								deep: true
							},
							scope: this,
							onItem: function(availItem) {
								var availValue = this._availableStore.getValue(availItem, "value");
								if (availValue == value) {
									if (this._isTree) {
										var nodes = this._availableData.getNodesByItem(availItem);
										if (nodes && nodes.length > 0) {
											for ( var j = 0; j < nodes.length; j++) {
												var node = nodes[j];
												if (node) {
													node.domNode.style.display = "";
												}
											}
										}
									} else { // grid uses "displayit" in its filter to determine if the row should be displayed
										this._availableStore.setValue(availItem, "displayit", "true");
									}
								}
							}
						});
					}
					if (!this._isTree) {
						this._availableData._refresh();
					}
				}
				this._valuesGrid.removeSelectedRows();
				this._valuesGrid.store.save(); // when use identifier & then add, remove, & add, this save fixes assert failure on add  
			}
		},

		/**
		 * Event fired when the up button is clicked.
		 */
		_onClickUp: function() {
			this._moveUpSelectedRows(this._valuesGrid);
		},

		/**
		 * Event fired when the down button is clicked.
		 */
		_onClickDown: function() {
			this._moveDownSelectedRows(this._valuesGrid);
		},

		/**
		 * Used for user-entered values that need to be added to the selected grid and may not be in the available grid.
		 * Currently only the available grid is supported.
		 * 
		 * @param newData
		 *            The item to add to the selected grid.
		 */
		addToSelected: function(newData) {
			if (this.hideAvailableOnAdd) {
				var value = newData.value;
				this._availableStore.fetch({
					scope: this,
					onItem: function(availItem) {
						var availValue = this._availableStore.getValue(availItem, "value");
						if (availValue == value) {
							var displayIt = this._availableStore.getValue(availItem, "displayit");
							if (displayIt == undefined || displayIt != "false") {
								this._availableStore.setValue(availItem, "displayit", "false");
							}
						}
					}
				});
				this._availableData._refresh();
				this._availableData.selection.clear();
			}
			try {
				this._valuesGrid.store.newItem(newData);
			} catch (e) {
				// ignore error - errors happens for duplicates
			}
		},

		/**
		 * Event fired when items from the available grid or tree should be added to the selected grid.
		 */
		_onClickAdd: function() {
			var items = this._isTree ? this._availableData.dndController.getSelectedTreeNodes() : this._availableData.selection.getSelected();
			for ( var i = 0; i < items.length; i++) {
				var item = items[i];
				if (item.item) { // if tree, then have the node & need to get the item
					item = item.item;
				}
				this._addItem(item);
			}
			if (this.hideAvailableOnAdd) {
				if (this._isTree) {
					this._availableData.dndController.selectNone();
				} else {
					this._availableData._refresh();
					this._availableData.selection.clear();
				}
			}
		},

		/**
		 * Adds the item to the selected grid. If <code>this.hideAvailableOnAdd</code> is <code>true</code>, then
		 * hide the item from the available tree or grid.
		 * 
		 * @param item
		 *            The item to add to the selected grid.
		 */
		_addItem: function(item) {
			var value = this._availableStore.getValue(item, "value");
			if (this.hideAvailableOnAdd) {
				if (this._isTree) {
					this._availableStore.fetch({
						queryOptions: {
							deep: true
						},
						scope: this,
						onItem: function(availItem) {
							var availValue = this._availableStore.getValue(availItem, "value");
							if (availValue == value) {
								var nodes = this._availableData.getNodesByItem(availItem);
								if (nodes && nodes.length > 0) {
									for ( var j = 0; j < nodes.length; j++) {
										var node = nodes[j];
										if (node) {
											node.domNode.style.display = "none";
										}
									}
								}
							}
						}
					});
				} else { // grid, then set displayit value to false
					this._availableStore.setValue(item, "displayit", "false");
				}
			}

			var attributes = this._availableStore.getAttributes(item);
			var newItem = {};
			if (this.customAdd)
				newItem = this.customAdd(this._availableStore, item, attributes);
			else {
				for ( var j = 0; j < attributes.length; j++) {
					var attribute = attributes[j];
					newItem[attribute] = this._availableStore.getValue(item, attribute);
				}
			}
			try {
				this._valuesGrid.store.newItem(newItem);
			} catch (e) {
				// ignore error - errors happens for duplicates
			}
		},

		/**
		 * Filters the available data using the passed in filter structure.
		 * 
		 * @param struct
		 *            The filter structure for the DataGrid.
		 */
		filter: function(struct) {
			this._availableData.selection.clear();
			if (this.hideAvailableOnAdd) {
				struct.displayit = "true";
			}
			this._availableData.queryOptions = {
				ignoreCase: true
			};
			this._availableData.filter(struct);
		},

		/**
		 * Resizes the pane.
		 * 
		 * @param changeSize
		 *            The changed size.
		 */
		resize: function(changeSize) {
			this.inherited(arguments);

			var availableLabelBox = domGeom.getMarginBox(this._availableLabel);
			var selectedLabelBox = domGeom.getMarginBox(this._selectedLabel);
			var valuesMarginBox = domGeom.getMarginBox(this._valuesGridContainer);
			var availableMarginBox = domGeom.getMarginBox(this._availableDataContainer);
			var height = (valuesMarginBox.h - selectedLabelBox.h) > (availableMarginBox.h - availableLabelBox.h) ? valuesMarginBox.h - selectedLabelBox.h : availableMarginBox.h - availableLabelBox.h;
			if (height <= 0 || valuesMarginBox.w <= 0) {
				return;
			}
			if (changeSize && changeSize.h && changeSize.h < height) {
				height = changeSize.h;
			}

			if (this._valuesGrid) {
				this._valuesGrid.resize({
					h: height,
					w: valuesMarginBox.w
				});
			}
			if (this._availableData) {
				var h = (this._availableData.isInstanceOf && this._availableData.isInstanceOf(Tree)) ? height - 28 : height;
				domGeom.setMarginBox(this._availableDataBorder, {
					h: h
				});
				this._availableData.resize({
					h: h,
					w: availableMarginBox.w
				});
			}
		},

		/**
		 * Registers a custom add function.
		 * 
		 * @param customAdd
		 *            Custom add function.
		 */
		registerCustomAddFunc: function(customAdd) {
			this.customAdd = customAdd;
		},

		/**
		 * Registers a custom remove function.
		 * 
		 * @param customRemove
		 *            Custom remove function.
		 */
		registerCustomRemoveFunc: function(customRemove) {
			this.customRemove = customRemove;
		}
	});
});

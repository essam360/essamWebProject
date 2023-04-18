/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/window",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/Tree",
	"dijit/Tooltip",
	"../MessagesMixin",
	"./_TreeSloshBucketTree",
	"dojo/text!./templates/TreeSloshBucket.html"
], //
function(declare, //
lang, //
aspect, //
domClass, //
domAttr, //
domConstruct, //
domGeom, //
domStyle, //
win, //
registry, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
Tree, //
Tooltip, //
MessagesMixin, //
_TreeSloshBucketTree, //
template) {

	/**
	 * @name ecm.widget.TreeSloshBucket
	 * @class Provides a widget that contains a slosh bucket that uses a tree to display available and selected items.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.TreeSloshBucket", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.TreeSloshBucket.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * If set to <code>false</code>, then the move up and move down buttons and container are not displayed.
		 */
		hasSorting: true,

		/**
		 * This object implements the <code>getTooltipText</code> method which returns the tooltip text for a row.
		 * Tooltip text is displayed when the user hovers the mouse over a row.
		 */
		tooltipClass: null,

		/**
		 * The desired tooltip positioning choices, ordered by preference.
		 */
		tooltipPosition: [
			"after",
			"before",
			"above",
			"below"
		],

		/**
		 * Label displayed above the available (left) tree.
		 */
		availableLabel: ecm.messages.available_label,

		/**
		 * Label displayed above the selected (right) tree.
		 */
		selectedLabel: ecm.messages.selected_label,

		/**
		 * If set to <code>true</code>, when an available item is added to the selected list it is hidden in the
		 * available list.
		 */
		hideAvailableOnAdd: true,

		/**
		 * Boolean indicating if the selected (right) tree supports one level (bool == false) or two levels (bool ==
		 * true).
		 */
		_multiLevelSupported: true,

		/*
		 * @private
		 */
		_lastTooltip: null,

		/**
		 * Boolean indicating if the trees are editable or read only.
		 */
		_editable: true,

		postCreate: function() {
			this.inherited(arguments);
			domAttr.set(this._addButton.focusNode, "aria-label", this._addButton.get("title"));
			domAttr.set(this._removeButton.focusNode, "aria-label", this._removeButton.get("title"));
			domAttr.set(this._upButton.focusNode, "aria-label", this._upButton.get("title"));
			domAttr.set(this._downButton.focusNode, "aria-label", this._downButton.get("title"));
		},

		destroy: function() {
			if (this._lastTooltip)
				dijit.hideTooltip(this._lastTooltip);
			this.inherited(arguments);
		},

		onHide: function() {
			if (this._lastTooltip) {
				dijit.hideTooltip(this._lastTooltip);
				this._lastTooltip = null;
			}
		},

		/**
		 * Sets whether multiple levels are supported.
		 * 
		 * @param multiLevelSupported
		 *            A boolean value. Indicates if the selected tree supports one level (false) or two levels (true).
		 *            If true, the right and left buttons are shown; otherwise, they are hidden.
		 */
		setMultipleLevelsSupported: function(multiLevelSupported) {
			this._multiLevelSupported = multiLevelSupported;
			if (!this._multiLevelSupported) {
				domStyle.set(this._rightButton.domNode, "display", "none");
				domStyle.set(this._leftButton.domNode, "display", "none");
			}
		},

		/**
		 * Sets the available (left) tree model.
		 * 
		 * @param showRoot
		 *            A boolean value. If <code>true</code> the root is displayed. Otherwise, the root is hidden.
		 */
		setAvailableTreeModel: function(treeModel, showRoot) {
			if (this._availableTree) {
				this._availableTree.destroy();
			}

			this._availableTree = new _TreeSloshBucketTree({
				getIconClass: lang.hitch(this._selectedTree, this.getTreeIconClass),
				model: treeModel,
				showRoot: showRoot == undefined ? true : showRoot,
				persist: false
			});
			domConstruct.place(this._availableTree.domNode, this._availableContainer, "only");
			this._availableTree.startup();

			this.own(aspect.after(this._availableTree.dndController, "_updateSelectionProperties", lang.hitch(this, function() {
				this._addButton.set('disabled', !this._editable || !this._isAddEnabled());
			}), true));
			this.own(aspect.after(this._availableTree.domNode, "onmouseover", lang.hitch(this, function(evt) {
				var treeNode = registry.getEnclosingWidget(evt.target);
				if (treeNode) {
					var tooltipText = this.tooltipClass.getTreeTooltipText(treeNode.tree.model, treeNode);
					if (tooltipText && tooltipText.length > 0) {
						dijit.showTooltip(tooltipText, evt.target, null, !this.isLeftToRight(), this.textDir);
						this._lastTooltip = evt.target;
					}
				} else {
					dijit.hideTooltip(evt.target);
					this._lastTooltip = null;
				}
			}), true));
			this.own(aspect.after(this._availableTree.domNode, "onmouseout", lang.hitch(this, function(evt) {
				dijit.hideTooltip(evt.target);
			}), true));
			this.own(aspect.after(this._availableTree, "_onDblClick", lang.hitch(this, function(treeNode, evt) {
				dijit.hideTooltip(evt.target);
				if (this._editable) {
					var addTo = this._getAddTo(true);
					var newItem = this._addAvailableTreeNodeToSelected(treeNode, addTo.treeNode, addTo.index);

					if (addTo.treeNode == this._selectedTree.rootNode && addTo.index != undefined) {
						var rootItemsArray = this._getRootsItemChildren(this._selectedTree.model.store);
						this._scrollIntoView(this._selectedTree, rootItemsArray[addTo.index], true);
					} else if (newItem) {
						this._scrollIntoView(this._selectedTree, newItem, true);
					}
					if (this.hideAvailableOnAdd) {
						this._availableTree.dndController.selectNone();
					}
				}
			}), true));
		},

		/**
		 * Sets the selected (right) tree model.
		 * 
		 * @param showRoot
		 *            A boolean value. If <code>true</code> the root is displayed. Otherwise, the root is hidden.
		 * @param selectedValues
		 *            The array of selected values. If <code>hideAvailableOnAdd</code> is <code>true</code>, the
		 *            selected values are hidden in the available tree.
		 */
		setSelectedTreeModel: function(treeModel, showRoot, selectedValues) {
			if (this._selectedTree) {
				this._selectedTree.destroy();
			}
			if (!this.hasSorting) { // hide the up down arrows pane if sorting is disabled
				domStyle.set(this._selectedContentPane, "right", "0");
				domStyle.set(this._moveUpDownButtonContainer, "display", "none");
			}
			this._selectedTree = new Tree({
				//openOnClick: true,
				getIconClass: lang.hitch(this._selectedTree, this.getTreeIconClass),
				model: treeModel,
				showRoot: showRoot == undefined ? true : showRoot,
				persist: false
			});
			domConstruct.place(this._selectedTree.domNode, this._selectedContainer, "only");
			this._selectedTree.startup();
			this._selectedTree.set('selectedItems', [
				this._selectedTree.model.root
			]);

			this.resize();

			if (this.hideAvailableOnAdd) {
				this._availableTree.model.store.fetch({
					queryOptions: {
						deep: true
					},
					scope: this,
					onItem: function(availItem) {
						var availValue = this._availableTree.model.store.getValue(availItem, "value");
						var displayit = selectedValues[availValue] ? false : true;
						var nodes = this._availableTree.getNodesByItem(availItem);
						if (nodes && nodes.length > 0) {
							for ( var i = 0; i < nodes.length; i++) {
								var node = nodes[i];
								if (node) {
									node.domNode.style.display = (displayit ? "" : "none");
								}
							}
						}
					}
				});
			}
			this._availableTree.dndController.selectNone();

			if (this.hasSorting) {
				this.own(aspect.after(this._selectedTree.model.store, "onNew", lang.hitch(this, function(item, parent) {
					// Since we added a tree node, need to re-check the down button
					this._checkUpDownButtons();
					this._scrollIntoView(this._selectedTree, item, true);
				}), true));
			}
			this.own(aspect.after(this._selectedTree.dndController, "_updateSelectionProperties", lang.hitch(this, function() {
				this._removeButton.set('disabled', !this._editable || !this._canRemoveFromSelected());
				if (this.hasSorting) {
					this._checkUpDownButtons();
					this._checkRightLeftButtons();
				}
			}), true));
			this.own(aspect.after(this._selectedTree.domNode, "onmouseover", lang.hitch(this, function(evt) {
				var treeNode = registry.getEnclosingWidget(evt.target);
				if (treeNode) {
					var tooltipText = this.tooltipClass.getTreeTooltipText(treeNode.tree.model, treeNode);
					if (tooltipText && tooltipText.length > 0) {
						dijit.showTooltip(tooltipText, evt.target, null, !this.isLeftToRight(), this.textDir);
						this._lastTooltip = evt.target;
					}
				}
			}), true));
			this.own(aspect.after(this._selectedTree.domNode, "onmouseout", lang.hitch(this, function(evt) {
				dijit.hideTooltip(evt.target);
			}), true));

			// clear the selection & disable the buttons on show
			this._addButton.set('disabled', true);
			this._removeButton.set('disabled', true);
			if (this.hasSorting) {
				this._upButton.set('disabled', true);
				this._downButton.set('disabled', true);
				this._rightButton.set('disabled', true);
				this._leftButton.set('disabled', true);
			}
		},

		/**
		 * Enable or disable the up and down buttons.
		 */
		_checkUpDownButtons: function() {
			this._upButton.set('disabled', !this._editable || !this._canMoveUp(this._selectedTree));
			this._downButton.set('disabled', !this._editable || !this._canMoveDown(this._selectedTree));
		},

		/**
		 * Enable or disable the right and left buttons.
		 */
		_checkRightLeftButtons: function() {
			this._rightButton.set('disabled', !this._editable || !this._canMoveRight(this._selectedTree));
			this._leftButton.set('disabled', !this._editable || !this._canMoveLeft(this._selectedTree));
		},

		/**
		 * Returns the icon class for the input item.
		 * 
		 * @param item
		 *            The input item.
		 * @param opened
		 *            A value of <code>true</code> if the item is opened.
		 * @return An icon class.
		 */
		getTreeIconClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			var iconClass = ""; //(!item || this.model.mayHaveChildren(item)) ? (opened ? "dijitFolderOpened" : "dijitFolderClosed") : "";
			if (opened && item.openIconClassName) {
				iconClass = item.openIconClassName;
			} else if (!opened && item.closedIconClassName) {
				iconClass = item.closedIconClassName;
			}
			return iconClass;
		},

		/**
		 * Returns a boolean indicating if the selected tree nodes can be removed from the selected (right) tree.
		 */
		_canRemoveFromSelected: function() {
			var selectedTreeNodes = this._selectedTree.dndController.getSelectedTreeNodes();
			if (selectedTreeNodes.length == 0) {
				return false;
			} else if (selectedTreeNodes.length == 1 && selectedTreeNodes[0].item == this._selectedTree.model.root) { // If root is only selected node, then disable remove button
				return false;
			}
			return true;
		},

		/**
		 * Returns a boolean indicating if the input item can be added to the input tree.
		 */
		_canAddToItem: function(tree, item) { // Can only add actions to the root or an item with canAddTo attribute
			return (item == tree.model.root || item.canAddTo);
		},

		/**
		 * Returns a boolean if the <strong>Add</strong> button can be enabled.
		 */
		_isAddEnabled: function() {
			var selectedTreeNodes = this._availableTree.dndController.getSelectedTreeNodes();
			return selectedTreeNodes && selectedTreeNodes.length > 0;
		},

		/**
		 * Returns a boolean if the selected tree nodes in the selected (right) tree can be moved down.
		 */
		_canMoveDown: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree);
			if (selectedTreeNodes) {
				var store = this._selectedTree.model.store;
				for ( var i = selectedTreeNodes.length - 1; i >= 0; i--) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode != this._selectedTree.rootNode) {
						var parentTreeNode = treeNode.getParent();
						if (parentTreeNode != this._selectedTree.rootNode) {
							var children = store.getValues(parentTreeNode.item, "children");
							var index = this._getItemIndex(children, treeNode.item, store);
							if (index != -1 && index != children.length - 1 && !this._isSelected(children[index + 1])) {
								return true;
							}
						} else { // root 
							var rootItemsArray = this._getRootsItemChildren(store);
							var index = this._getItemIndex(rootItemsArray, treeNode.item, store);
							if (index != -1 && index != rootItemsArray.length - 1 && !this._isSelected(rootItemsArray[index + 1])) {
								return true;
							}
						}
					}
				}
			}
			return false;
		},

		/**
		 * Returns a boolean if the selected tree nodes in the selected (right) tree can be moved up.
		 */
		_canMoveUp: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree);
			if (selectedTreeNodes) {
				var store = this._selectedTree.model.store;
				for ( var i = 0; i < selectedTreeNodes.length; i++) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode != this._selectedTree.rootNode) {
						var parentTreeNode = treeNode.getParent();
						if (parentTreeNode != this._selectedTree.rootNode) {
							var children = store.getValues(parentTreeNode.item, "children");
							var index = this._getItemIndex(children, treeNode.item, store);
							if (index > 0 && !this._isSelected(children[index - 1])) {
								return true;
							}
						} else { // root 
							var rootItemsArray = this._getRootsItemChildren(store);
							var index = this._getItemIndex(rootItemsArray, treeNode.item, store);
							if (index > 0 && !this._isSelected(rootItemsArray[index - 1])) {
								return true;
							}
						}
					}
				}
			}
			return false;
		},

		/**
		 * Returns a boolean if the selected tree nodes in the selected (right) tree can be moved right.
		 */
		_canMoveRight: function() {
			if (this._multiLevelSupported) {
				var selectedTreeNodes = this._selectedTree.dndController.getSelectedTreeNodes();
				for ( var i = 0; i < selectedTreeNodes.length; i++) {
					var treeNode = selectedTreeNodes[i];
					// only root level items can be moved for right now & cannot move a folder into a folder right now & must find an item above it to move into
					if (treeNode.indent == 1 && !treeNode.item.canAddTo && this._getCanAddToItemAboveTreeNode(treeNode, this._selectedTree.model.store)) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * Returns a boolean if the selected tree nodes in the selected (right) tree can be moved left.
		 */
		_canMoveLeft: function() {
			if (this._multiLevelSupported) {
				var selectedTreeNodes = this._selectedTree.dndController.getSelectedTreeNodes();
				if (selectedTreeNodes) {
					for ( var i = 0; i < selectedTreeNodes.length; i++) {
						var treeNode = selectedTreeNodes[i];
						if (treeNode.indent > 1) { // treeNode is in a submenu
							return true;
						}
					}
				}
			}
			return false;
		},

		/**
		 * Retrieves the selected (right) tree.
		 * 
		 * @return A dijit.Tree.
		 */
		getSelectedTree: function() {
			return this._selectedTree;
		},

		/**
		 * Returns the selected tree nodes from the selected (right) tree.
		 */
		_getSelectedTreeNodes: function(sorted, tree) {
			if (sorted == undefined || !sorted) {
				return tree.dndController.getSelectedTreeNodes();
			} else {
				var selectedTreeNodes = tree.dndController.getSelectedTreeNodes();
				var orderedSelectedTreeNodes = [];
				var store = tree.model.store;
				for ( var i = 0; i < selectedTreeNodes.length; i++) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode != tree.rootNode) { // ignore the root
						if (treeNode.domNode.style.display != "none") {
							var parentTreeNode = treeNode.getParent();
							if (parentTreeNode != tree.rootNode) {
								var parentIndex = this._getItemIndex(this._getRootsItemChildren(store), treeNode.getParent().item, store);
								var children = store.getValues(parentTreeNode.item, "children");
								var index = this._getItemIndex(children, treeNode.item, store);
								var orderedIndex = parentIndex * 1000 + index;
								orderedSelectedTreeNodes.push({
									treeNode: treeNode,
									sortIndex: orderedIndex
								});
							} else { // root 
								var index = this._getItemIndex(this._getRootsItemChildren(store), treeNode.item, store);
								orderedSelectedTreeNodes.push({
									treeNode: treeNode,
									sortIndex: index
								});
							}
						}
					}
				}
				if (orderedSelectedTreeNodes.length > 1) {
					orderedSelectedTreeNodes.sort(function(a, b) {
						return a.sortIndex - b.sortIndex;
					});
				}
				var array = [];
				for ( var i = 0; i < orderedSelectedTreeNodes.length; i++) {
					var treeNode = orderedSelectedTreeNodes[i].treeNode;
					array.push(treeNode);
				}
				return array;
			}
		},

		/**
		 * Event fired when the user clicks the up button.
		 */
		_onClickUp: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree); // sorting the selected nodes - we need to check if previous is selected
			if (selectedTreeNodes) {
				var store = this._selectedTree.model.store;
				var scrollIntoViewItem = null;
				for ( var i = 0; i < selectedTreeNodes.length; i++) {
					var treeNode = selectedTreeNodes[i];
					if (!scrollIntoViewItem) {
						scrollIntoViewItem = treeNode.item;
					}
					if (treeNode != this._selectedTree.rootNode) {
						var parentTreeNode = treeNode.getParent();
						if (parentTreeNode != this._selectedTree.rootNode) {
							var children = store.getValues(parentTreeNode.item, "children");
							var index = this._getItemIndex(children, treeNode.item, store);
							if (index > 0 && !this._isSelected(children[index - 1])) {
								var item = children[index];
								children[index] = children[index - 1];
								children[index - 1] = item;
								store.setValues(parentTreeNode.item, "children", children);
							}
						} else { // root 
							var rootItemsArray = this._getRootsItemChildren(store);
							var index = this._getItemIndex(rootItemsArray, treeNode.item, store);
							if (index > 0 && !this._isSelected(rootItemsArray[index - 1])) {
								var item = rootItemsArray[index];
								rootItemsArray[index] = rootItemsArray[index - 1];
								rootItemsArray[index - 1] = treeNode.item;
								this._selectedTree.model.onChildrenChange(parentTreeNode.item, rootItemsArray);
							}
						}
					}
				}
				this._scrollIntoView(this._selectedTree, scrollIntoViewItem, false);
				this._checkUpDownButtons();
				this._checkRightLeftButtons();
			}
		},

		/**
		 * Returns a boolean indicating if the item is selected.
		 */
		_isSelected: function(item) {
			var selectedTreeNodes = this._selectedTree.dndController.getSelectedTreeNodes();
			if (selectedTreeNodes) {
				var store = this._selectedTree.model.store;
				var itemValue = store.getValue(item, "value");
				for ( var i = 0; i < selectedTreeNodes.length; i++) {
					var treeNode = selectedTreeNodes[i];
					var value = store.getValue(treeNode.item, "value");
					if (value == itemValue) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * Scrolls the item into view.
		 */
		_scrollIntoView: function(tree, item, expandParent) {
			if (item) {
				var treeNodes = tree.getNodesByItem(item);
				if (treeNodes && treeNodes.length > 0) {
					var treeNode = treeNodes[0];
					if (expandParent != undefined && expandParent) {
						tree._expandNode(treeNode.getParent());
					}
					win.scrollIntoView(treeNode.rowNode);
				}
			}
		},

		/**
		 * Returns the index of the item.
		 */
		_getItemIndex: function(children, item, store) { // assumes value is unique
			var value = store.getValue(item, "value");
			for ( var i = 0; i < children.length; i++) {
				var child = children[i];
				var childValue = store.getValue(child, "value");
				if (childValue == value) {
					return i;
				}
			}
			return -1;
		},

		/**
		 * Event fired when the user clicks the down button.
		 */
		_onClickDown: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree); // sorting the selected nodes - we need to check if next is selected
			if (selectedTreeNodes) {
				var store = this._selectedTree.model.store;
				for ( var i = selectedTreeNodes.length - 1; i >= 0; i--) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode != this._selectedTree.rootNode) {
						var parentTreeNode = treeNode.getParent();
						if (parentTreeNode != this._selectedTree.rootNode) {
							var children = store.getValues(parentTreeNode.item, "children");
							var index = this._getItemIndex(children, treeNode.item, store);
							if (index != -1 && index != children.length - 1 && !this._isSelected(children[index + 1])) {
								var item = children[index];
								children[index] = children[index + 1];
								children[index + 1] = item;
								store.setValues(parentTreeNode.item, "children", children);
							}
						} else { // root 
							var rootItemsArray = this._getRootsItemChildren(store);
							var index = this._getItemIndex(rootItemsArray, treeNode.item, store);
							if (index != -1 && index != rootItemsArray.length - 1 && !this._isSelected(rootItemsArray[index + 1])) {
								var item = rootItemsArray[index];
								rootItemsArray[index] = rootItemsArray[index + 1];
								rootItemsArray[index + 1] = treeNode.item;
								this._selectedTree.model.onChildrenChange(parentTreeNode.item, rootItemsArray);
							}
						}
					}
				}
				this._scrollIntoView(this._selectedTree, selectedTreeNodes[selectedTreeNodes.length - 1].item, false);
				this._checkUpDownButtons();
				this._checkRightLeftButtons();
			}
		},

		/**
		 * Event fired when the user clicks the right button.
		 */
		_onClickRight: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree);
			var firstParentItem = null;
			var arrayOfItemsToSelect = [];
			for ( var i = 0; i < selectedTreeNodes.length; i++) {
				var treeNode = selectedTreeNodes[i];
				if (treeNode.indent == 1) { // only root level items can be moved for right now
					if (!treeNode.item.canAddTo) { // cannot move a folder into a folder right now
						var parentItem = this._getCanAddToItemAboveTreeNode(treeNode, this._selectedTree.model.store);
						if (parentItem) {
							if (!firstParentItem) {
								firstParentItem = parentItem;
							}
							try {
								var newItem = this._selectedTree.model.store.newItem(this._copyItem(treeNode.item, this._selectedTree), {
									parent: parentItem,
									attribute: this._selectedTree.model.childrenAttrs[0]
								});
								arrayOfItemsToSelect.push(newItem);
								this._selectedTree.model.store.deleteItem(treeNode.item);
							} catch (e) {
								//console.debug("$$$$$$$$ e=" + e);
							}
						}
					}
				}
			}
			if (firstParentItem) {
				selectedTreeNodes = this._selectedTree.dndController.getSelectedTreeNodes();
				for ( var i = 0; i < selectedTreeNodes.length; i++) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode.indent == 1) { // only root level items can be moved for right now
						if (!treeNode.item.canAddTo) { // cannot move a folder into a folder right now
							try {
								var newItem = this._selectedTree.model.store.newItem(this._copyItem(treeNode.item, this._selectedTree), {
									parent: firstParentItem,
									attribute: this._selectedTree.model.childrenAttrs[0]
								});
								arrayOfItemsToSelect.push(newItem);
								this._selectedTree.model.store.deleteItem(treeNode.item);
							} catch (e) {
								//console.debug("$$$$$$$$ e=" + e);
							}
						}
					}
				}
			}

			// re-select the items again & scroll into view the last item
			if (arrayOfItemsToSelect.length > 0) {
				this._selectedTree.set('selectedItems', arrayOfItemsToSelect);
				this._scrollIntoView(this._selectedTree, arrayOfItemsToSelect[0], true);
				this._checkUpDownButtons();
				this._checkRightLeftButtons();
			}
		},

		/**
		 * Returns a new copy of the item.
		 */
		_copyItem: function(item, tree) {
			var newItem = {};
			var attributes = tree.model.store.getAttributes(item);
			for ( var j = 0; j < attributes.length; j++) {
				var attribute = attributes[j];
				newItem[attribute] = tree.model.store.getValue(item, attribute);
			}
			return newItem;
		},

		/**
		 * Returns the root's children.
		 */
		_getRootsItemChildren: function(store) {
			return store._getItemsArray();
		},

		/**
		 * Returns a boolean indicating if the item above the input tree node can be added to.
		 */
		_getCanAddToItemAboveTreeNode: function(treeNode, store) {
			var rootItemsArray = this._getRootsItemChildren(store);
			var treeNodeIndex = this._getItemIndex(rootItemsArray, treeNode.item, store);
			for ( var i = treeNodeIndex; i >= 0; i--) {
				var child = rootItemsArray[i];
				if (child.canAddTo) {
					return child;
				}
			}
			return null;
		},

		/**
		 * Event fired when the user hits the left button.
		 */
		_onClickLeft: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree);
			if (selectedTreeNodes) {
				var arrayOfItemsToSelect = [];
				for ( var i = selectedTreeNodes.length - 1; i >= 0; i--) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode.getParent() && treeNode.getParent().getParent()) { // treeNode is in a submenu
						var moveAfterTreeNodeIndex = this._getItemIndex(this._getRootsItemChildren(this._selectedTree.model.store), treeNode.getParent().item, this._selectedTree.model.store);
						var newItem = this._moveItemFromSubmenuToRoot(treeNode.item, this._selectedTree, moveAfterTreeNodeIndex);
						arrayOfItemsToSelect.push(newItem);
					}
				}

				// re-select the items again & scroll into view 
				if (arrayOfItemsToSelect.length > 0) {
					this._selectedTree.set('selectedItems', arrayOfItemsToSelect);
					this._scrollIntoView(this._selectedTree, arrayOfItemsToSelect[arrayOfItemsToSelect.length - 1], true);
					this._checkUpDownButtons();
					this._checkRightLeftButtons();
				}
			}
		},

		/**
		 * Moves the item from submenu to the root node.
		 */
		_moveItemFromSubmenuToRoot: function(item, tree, moveAfterTreeNodeIndex) {
			try {
				var copyItem = this._copyItem(item, tree);
				tree.model.store.deleteItem(item);
				var newItem = tree.model.newItem(copyItem, tree.model.root);
				if (moveAfterTreeNodeIndex != undefined && moveAfterTreeNodeIndex >= 0) {
					this._moveLastRootNodeInSelectedTreeTo(moveAfterTreeNodeIndex);
				}
				return newItem;
			} catch (e) {
				//console.debug("$$$$$$$$ e=" + e);
				return null;
			}
		},

		/**
		 * Event fired when the user clicks the remove button.
		 */
		_onClickRemove: function() {
			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree);
			var scrollIntoViewItem = null;
			for ( var i = 0; i < selectedTreeNodes.length; i++) {
				var item = selectedTreeNodes[i].item;
				if (item != this._selectedTree.model.root) { // cannot remove the root
					if (this._selectedTree.model.isItem(item)) { // item may no longer be there ... as the parent may have also been selected
						// Move the submenu children to the root ... right below the submenu
						var children = this._selectedTree.model.store.getValues(item, "children");
						if (children && children.length > 0) {
							var moveAfterTreeNodeIndex = this._getItemIndex(this._getRootsItemChildren(this._selectedTree.model.store), item, this._selectedTree.model.store);
							for ( var j = children.length; j >= 0; j--) {
								scrollIntoViewItem = this._moveItemFromSubmenuToRoot(children[j], this._selectedTree, moveAfterTreeNodeIndex);
							}
						}

						if (this.hideAvailableOnAdd) {
							var value = this._selectedTree.model.store.getValue(item, "value");
							this._hideShowAvailableItemWithValue(value, false); // In available list, show the submenu item
						}

						this._selectedTree.model.store.deleteItem(item); // remove the submenu from the selected tree
					}
				}
				this._scrollIntoView(this._selectedTree, scrollIntoViewItem, true);
			}
		},

		/**
		 * Adds the selected available (left) tree nodes to the selected (right) tree.
		 */
		_addAvailableTreeNodeToSelected: function(treeNode, addToTreeNode, addToIndex) {
			if (this.hideAvailableOnAdd) {
				var value = this._availableTree.model.store.getValue(treeNode.item, "value");
				this._hideShowAvailableItemWithValue(value, true);
			}
			try {
				var newItem = this._newSelectedTreeItem(this._copyItem(treeNode.item, this._availableTree), addToTreeNode);
				if (addToIndex != undefined) {
					this._moveLastRootNodeInSelectedTreeTo(addToIndex);
				}
				return newItem;
			} catch (e) {
				//console.debug("$$$$$$$$ e=" + e);
				return null;
			}
		},

		/**
		 * Adds the data to the selected (right) tree.
		 */
		_newSelectedTreeItem: function(newData, addToTreeNode) {
			var newItem = null;
			if (addToTreeNode == this._selectedTree.rootNode) {
				newItem = this._selectedTree.model.newItem(newData, addToTreeNode.item);
			} else {
				newItem = this._selectedTree.model.store.newItem(newData, {
					parent: addToTreeNode.item,
					attribute: this._selectedTree.model.childrenAttrs[0]
				});
			}
			return newItem;
		},

		/**
		 * Hide or show the available item with the input value.
		 */
		_hideShowAvailableItemWithValue: function(value, isHide) {
			var _firstFocusable = null;
			var needRefocus = false;
			this._availableTree.model.store.fetch({
				queryOptions: {
					deep: true
				},
				scope: this,
				onItem: function(availItem) {
					var availValue = this._availableTree.model.store.getValue(availItem, "value");
					if (availValue == value) {
						var nodes = this._availableTree.getNodesByItem(availItem);
						if (nodes && nodes.length > 0) {
							for ( var j = 0; j < nodes.length; j++) {
								var node = nodes[j];
								if (node) {
									node.domNode.style.display = isHide ? "none" : "";
									var lastFocused = this._availableTree.lastFocused;
									if (!lastFocused) {
										needRefocus = true;
									} else if (lastFocused.domNode.style.display == "none") {
										if (lastFocused.setFocusable) {
											lastFocused.setFocusable(false);
										}
										needRefocus = true;
									}
								}
							}
						}
					}
					if (!_firstFocusable) {
						_firstFocusable = this._getFirstFocusable(availItem);
					}
					if (needRefocus && _firstFocusable) {
						if (_firstFocusable.setFocusable) {
							_firstFocusable.setFocusable(true);
						}
						needRefocus = false;
					}
				}
			});
		},

		/**
		 * Returns the tree node for the input item. If the tree node is not visible, return null.
		 */
		_getFirstFocusable: function(item) {
			var treeNodes = this._availableTree.getNodesByItem(item);
			if (treeNodes && treeNodes.length > 0) {
				for ( var i = 0; i < treeNodes.length; i++) {
					var tNode = treeNodes[i];
					if (domStyle.get(tNode.domNode, "display") != "none") {
						return tNode;
					}
				}
			}
			return null;
		},

		_moveLastRootNodeInSelectedTreeTo: function(addToIndex) {
			var rootItemsArray = this._getRootsItemChildren(this._selectedTree.model.store);
			for ( var i = (rootItemsArray.length - 1); (i - 1) > addToIndex; i--) {
				var treeNodeItem = rootItemsArray[i];
				rootItemsArray[i] = rootItemsArray[i - 1];
				rootItemsArray[i - 1] = treeNodeItem;
			}
			this._selectedTree.model.onChildrenChange(this._selectedTree.rootNode, rootItemsArray);
		},

		/**
		 * Returns the tree node and index from the selected (right) tree that should add to.
		 */
		_getAddTo: function(canAddToSubfolder) {
			var moveIntoNode = this._selectedTree.rootNode;
			var moveAfterTreeNodeIndex = null;

			var selectedTreeNodes = this._getSelectedTreeNodes(true, this._selectedTree);
			for ( var i = selectedTreeNodes.length - 1; i >= 0; i--) {
				var selectedTreeNode = selectedTreeNodes[i];
				if (selectedTreeNode.item.root) { // if selected root, move into the root
					moveIntoNode = this._selectedTree.rootNode;
					break;
				}
				if (canAddToSubfolder && selectedTreeNode.item.canAddTo) { // if selected submenu folder, move into the submenu folder
					moveIntoNode = selectedTreeNode;
					break;
				}

				if (selectedTreeNode.getParent().item.root) { // if selected item's parent is root, move into the root
					moveIntoNode = this._selectedTree.rootNode;

					var rootItemsArray = this._getRootsItemChildren(this._selectedTree.model.store);
					moveAfterTreeNodeIndex = this._getItemIndex(rootItemsArray, selectedTreeNode.item, this._selectedTree.model.store);
					break;
				}
				if (canAddToSubfolder && selectedTreeNode.getParent().item.canAddTo) { // if selected item's parent is submenu, move into the submenu
					moveIntoNode = selectedTreeNode.getParent();
					break;
				}
			}
			return {
				treeNode: moveIntoNode,
				index: moveAfterTreeNodeIndex
			};
		},

		/**
		 * Event fired when the user hits the add button.
		 */
		_onClickAdd: function() {
			var addTo = this._getAddTo(true);
			var availableTreeNodes = this._getSelectedTreeNodes(true, this._availableTree);
			var scrollTo = null;
			var addToIndex = addTo.index;
			for ( var i = 0; i < availableTreeNodes.length; i++) {
				var newItem = this._addAvailableTreeNodeToSelected(availableTreeNodes[i], addTo.treeNode, addToIndex);
				if (addToIndex != undefined) {
					addToIndex++;
				}
				if (!scrollTo) {
					scrollTo = newItem;
				}
			}

			if (addTo.treeNode == this._selectedTree.rootNode && addTo.index != undefined) {
				var rootItemsArray = this._getRootsItemChildren(this._selectedTree.model.store);
				this._scrollIntoView(this._selectedTree, rootItemsArray[addTo.index], true);
			} else if (scrollTo) {
				this._scrollIntoView(this._selectedTree, scrollTo, true);
			}
			if (this.hideAvailableOnAdd) {
				this._availableTree.dndController.selectNone();
			}
		},

		/**
		 * Adds the new item to the selected (right) tree.
		 * 
		 * @param item
		 *            New item to add to the selected tree.
		 * @return Returns <code>null</code> if there was an error adding the item.
		 */
		addNewToSelected: function(item) {
			var addTo = this._getAddTo(item.canAddTo ? false : true); // cannot add a subfolder into a subfolder
			try {
				var newItem = this._newSelectedTreeItem(item, addTo.treeNode);
				if (addTo.index != undefined) {
					this._moveLastRootNodeInSelectedTreeTo(addTo.index);
				}

				if (addTo.treeNode == this._selectedTree.rootNode && addTo.index != undefined) {
					var rootItemsArray = this._getRootsItemChildren(this._selectedTree.model.store);
					this._scrollIntoView(this._selectedTree, rootItemsArray[addTo.index], true);
				} else {
					this._scrollIntoView(this._selectedTree, newItem, true);
				}
			} catch (e) {
				//console.debug("$$$$$$$$ addToSelected - e=" + e);
				// ignore error - errors happens for duplicates
				return null;
			}
		},

		/**
		 * Set if the tree is editable.
		 * 
		 * @param editable
		 *            A boolean value. True if the tree is editable, otherwise it is read only.
		 */
		setEditable: function(editable) {
			this._editable = editable;
			if (this._editable) {
				domClass.remove(this.domNode, "readOnly");
			} else {
				domClass.add(this.domNode, "readOnly");
			}
			this._addButton.set('disabled', !this._editable);
			this._removeButton.set('disabled', !this._editable);
			this._upButton.set('disabled', !this._editable);
			this._downButton.set('disabled', !this._editable);
			this._rightButton.set('disabled', !this._editable);
			this._leftButton.set('disabled', !this._editable);
		},

		/**
		 * Resizes the pane.
		 * 
		 * @param changeSize
		 *            The changed size.
		 */
		resize: function(changeSize) {
			var availableLabelMB = domGeom.getMarginBox(this._availableLabel);
			var labelHeight = availableLabelMB.h + 2;
			domStyle.set(this._selectedContentPane, "top", "0");
			domStyle.set(this._availableContentPane, "top", "0");
			var valuesMarginBox = domGeom.getMarginBox(this._selectedContainer);
			var availableMarginBox = domGeom.getMarginBox(this._availableContainer);
			var height = valuesMarginBox.h > availableMarginBox.h ? valuesMarginBox.h : availableMarginBox.h;
			if (this._selectedTree) {
				this._selectedTree.resize({
					h: height - labelHeight,
					w: valuesMarginBox.w
				});
			}
			if (this._availableTree) {
				this._availableTree.resize({
					h: height - labelHeight,
					w: availableMarginBox.w
				});
			}
		}
	});
});

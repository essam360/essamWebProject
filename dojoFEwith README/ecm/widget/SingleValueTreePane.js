/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/window",
	"dojo/data/ItemFileWriteStore",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/tree/ForestStoreModel",
	"idx/html",
	"../Messages",
	"./SingleSelectTree",
	"dojo/text!./templates/SingleValueTreePane.html"
], //
function(declare, array, Deferred, lang, aspect, domConstruct, win, ItemFileWriteStore, registry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ForestStoreModel, idxHtml, Messages, SingleSelectTree, template) {
	/**
	 * @name ecm.widget.SingleValueTreePane
	 * @class Provides a widget that contains a tree in which the user can select one value at a time. This widget is
	 *        used for IBM FileNet Content Manager object stores.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.SingleValueTreePane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.SingleValueTreePane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The tree data. It has a displayName and choices.
		 */
		availableData: null,
		/**
		 * Boolean indicating if the tree is editable.
		 */
		editable: true,
		/**
		 * The selected value. Also used to select the value in the tree when the tree is constructed.
		 */
		selectedValue: "",
		/**
		 * Boolean indicating if the none value is shown in the tree.
		 */
		showNone: true,

		_selectedLabel: null,
		
		_valuePath: null,

		messages: ecm.messages,

		postCreate: function() {
			this.inherited(arguments);
			this._loadTree();
		},

		/**
		 * Retrieves the label for the selected node.
		 * 
		 * @return A label string.
		 */
		getLabel: function() {
			var treeNode = this._tree._selectedNode; // while loading the tree, we set the selectedNode
			if (this._selectedLabel == null && this.getValue() != "" && treeNode) { // label hasn't been set yet & there is a value
				this._selectedLabel = this._tree.model.store.getValue(treeNode.item, "label");
			}
			return this._selectedLabel ? this._selectedLabel : this.getValue();
		},

		/**
		 * Retrieves the value for the selected node.
		 * 
		 * @return A value.
		 */
		getValue: function() {
			return this.selectedValue ? this.selectedValue : "";
		},

		/**
		 * Collapses all the nodes in the tree when it is loaded.
		 */
		_treeLoaded: function() {
			this._collapseAll(this._tree.rootNode);
		},

		/**
		 * Collapses all nodes under the input node.
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
						this._tree._collapseNode(children[i]);
					}
				}
			}
		},

		/**
		 * Event fired when showing the pane.
		 */
		onShow: function() {
			var treeNode = this._tree._selectedNode; // while loading the tree, we set the selectedNode
			this._tree._selectedNode = null;
			if (treeNode) {
				// Waiting to open the tree path until showing the widget; otherwise, the horizontal scroll bar gets very truncated for long paths
				this._tree.dndController.setSelection([
					treeNode
				]);
				var d = new Deferred();
				d.then(lang.hitch(this, function() {
					win.scrollIntoView(treeNode.rowNode);
					this._tree.focusNode(treeNode);
				}));
				this._selectPath(treeNode.getTreePath(), [
					this._tree.rootNode
				], d);
			} else {
				var selectedTreeNodes = this._tree.dndController.getSelectedTreeNodes();
				for ( var i in selectedTreeNodes) {
					var treeNode = selectedTreeNodes[i];
					if (treeNode && treeNode.item) {
						win.scrollIntoView(treeNode.rowNode);
						this._tree.focusNode(treeNode);
					}
				}
			}
		},

		/**
		 * Overrides <code>dijit.Tree.selectPath</code>.
		 */
		_selectPath: function(path, nodes, def) {
			var nextPath = path.shift();
			var nextNode = array.filter(nodes, function(node) {
				return nextPath.root || node.getIdentity() == nextPath._0;
			})[0];
			if (!!nextNode) {
				if (path.length) {
					var _this = this;
					this._tree._expandNode(nextNode).then(function() {
						_this._selectPath(path, nextNode.getChildren(), def);
					});
				} else {
					def.callback(nextNode); //Successfully reached the end of this path
				}
			} else {
				def.errback("Could not expand path at " + nextPath);
			}
		},
		

		/**
		 * Loads the tree.
		 */
		_loadTree: function() {
			var itemsArray = [];
			if (this.showNone) {
				itemsArray.push({
					isNoneNode: true,
					label: ecm.messages.properties_none,
					value: ""
				});
			}
			var root = {
				label: this.availableData.displayName,
				autoExpand:true
			};
			root.children = this._getAvailableItems(this.availableData.choices, this.selectedValue);
			itemsArray.push(root);

			var store = new ItemFileWriteStore({
				data: {
					items: itemsArray
				}
			});
			var model = new ForestStoreModel({
				store: store,
				childrenAttrs: [
					"children"
				],
				labelAttr: "label"
			});
			
			model.mayHaveChildren = function(item)  
			{
				if( item.root ){
					return true;
				}else{
					if( ( model.store.getValue(item, 'value') &&  model.store.getValue(item, 'value').length >  0 )
						|| model.store.getValue(item, 'isNoneNode')	){
						return false;
					}else{
						return true;
					}
				}
			}  
			
			if (this._tree) {
				this._tree.destroy();
			}
			this._tree = new ecm.widget.SingleSelectTree({
				model: model,
				_originalData: this.availableData.choices,
				showRoot: false,
				_selectedValue: this.selectedValue,
				onLoad: lang.hitch(this, this._treeLoaded),
				openOnClick: true,
				autoExpand: false
			});
			domConstruct.place(this._tree.domNode, this._container, "only");
			this._tree.startup();

			this.own(aspect.after(this._tree.domNode, "onmouseover", lang.hitch(this, function(evt) {
				var treeNode = registry.getEnclosingWidget(evt.target);
				if (treeNode) {
					var tooltipText = this.getTooltipText(treeNode.tree.model, treeNode);
					if (tooltipText && tooltipText.length > 0) {
						dijit.showTooltip(tooltipText, evt.target);
					}
				}
			}), true));
			this.own(aspect.after(this._tree.domNode, "onmouseout", lang.hitch(this, function(evt) {
				dijit.hideTooltip(evt.target);
			}), true));
			if (this.editable) {
				this.own(aspect.after(this._tree, "onDblClick", lang.hitch(this, "_onTreeDblClick"), true));
			}
		},

		/**
		 * Retrieves the tooltip text for the tree node.
		 * 
		 * @param treeModel
		 *            The tree model.
		 * @param treeNode
		 *            The tree node.
		 * @return The tooltip text string.
		 */
		getTooltipText: function(treeModel, treeNode) {
			var item = treeNode.item;
			if (item && item.value) {
				var toolTip = [];
				var label = treeModel.store.getValue(item, 'label');
				if (label == ecm.messages.properties_none) {
					toolTip.push("<div><span>" + this.messages.properties_none_tooltip + "</span></div>");
				} else {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(label));
					toolTip.push("</span></div>");
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					var value = treeModel.store.getValue(item, 'value');
					toolTip.push(idxHtml.escapeHTML(value));
					toolTip.push("</span></div>");
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.path_label + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					var path = treeNode.getTreePath();
					var pathStr = "";
					for ( var i = 1; i < path.length - 1; i++) { // ignore the dummy root & the leaf
						if (i != 1) {
							pathStr += " > ";
						}
						pathStr += path[i].label;
					}
					toolTip.push(idxHtml.escapeHTML(pathStr));
					toolTip.push("</span></div>");
				}
				return toolTip.join("");
			} else {
				return ecm.messages.properties_not_selectable_tooltip;
			}
		},

		/**
		 * Returns the available items for the input choices.
		 * 
		 * @param choices
		 *            The array of choices. Each choice includes a displayName, value, and an option choice array.
		 */
		
		_getAvailableItems: function(choices, selectedValue, level) {
			//find selectedValue path in choices
			if( selectedValue ){
				this._valuePath = this._getSelectedValuePath(choices, selectedValue);
			}
			if( !level ){
				var level = 0;
			}
			var itemsArray = [];
			if (this.availableData) {
				for ( var i = 0; i < choices.length; i++) {
					var choice = choices[i];
					var label = choice.displayName;
					var value = choice.value;

					var item = {
						label: label
					};
					if (value) {
						item.value = value;
					}
					itemsArray.push(item);
					if (choice.choices && this._valuePath && lang.isArray(this._valuePath) && item.label == this._valuePath[level] ) {
						//if the node is on selected value path, get children and expand it.
						item.autoExpand = true;
						item.children = this._getAvailableItems(choice.choices, null, level+1 );
					}
					
				}
			}
			return itemsArray;
		},
		
		//get the selectedValuePath like [2nd level, 3rd level, leaf node]
		_getSelectedValuePath: function( choices, selectedValue ){
			var selectedItem = this._getFindSelectedValue( choices, selectedValue );
			if( selectedItem ){
				var tempPath = [];
				tempPath.push( selectedItem.label );
				var parentItem = selectedItem.parentItem;
				while( parentItem && parentItem.label ){
					tempPath.push( parentItem.label );
					parentItem = parentItem.parentItem;
				}
				var valuePath = [];
				for( var i = tempPath.length-1; i >= 0; i -- ){
					valuePath.push( tempPath[i] );
				}
			}
			return valuePath;
		},
		
		//find the selectedValue in choices, return a leaf item that has parentItem.
		_getFindSelectedValue: function( choices, selectedValue, parentItem ){
			if( selectedValue && choices && lang.isArray(choices) ){
				for ( var i = 0; i < choices.length; i++) {
					var choice = choices[i];
					var label = choice.displayName;
					var value = choice.value;
					var item = {
							label: label,
							parentItem: parentItem
					};
					if( value == selectedValue ){
						return item;
					}
					
					if (choice.choices) {
						var item  =this._getFindSelectedValue(choice.choices,selectedValue, item);
						if( item ){
							return item;
						}
					}
				}
			}
			return null;
		},

		/**
		 * Event fired when the user double clicks a tree node.
		 * 
		 * @param item
		 *            The item in the tree node.
		 * @param node
		 *            The tree node.
		 * @param evt
		 *            The event.
		 */
		_onTreeDblClick: function(/* dojo.data.Item */item, /* TreeNode */node, /* Event */evt) {
			var selectedValue = this._tree.model.store.getValue(item, "value");
			if (selectedValue != undefined) {
				this.selectedValue = selectedValue;
				this._selectedLabel = this._tree.model.store.getValue(item, "label");
				if (this._selectedLabel == ecm.messages.properties_none) {
					this._selectedLabel = "";
				}
				this.onChange();
			}
		},

		/**
		 * Event fired when the user double-clicks and we want the drop-down input to know there was a change.
		 */
		onChange: function() {
		},

		/**
		 * Event fired when the user clicks the <strong>OK button</strong> to save the changes.
		 */
		onSave: function() {
			var selectedTreeNodes = this._tree.dndController.getSelectedTreeNodes();
			for ( var i in selectedTreeNodes) {
				var node = selectedTreeNodes[i];
				if (node && node.item && node.item.value) {
					var selectedValue = this._tree.model.store.getValue(node.item, "value");
					if (selectedValue != undefined) {
						this.selectedValue = selectedValue;
						this._selectedLabel = this._tree.model.store.getValue(node.item, "label");
						if (this._selectedLabel == ecm.messages.properties_none) {
							this._selectedLabel = "";
						}
						return true;
					}
				}
			}
			return false; // false == cancel the operation due to node.item.value being selected
		},
		
		destroy: function() {
			if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}
			this.inherited(arguments);
		}
	});
});

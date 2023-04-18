/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dijit/Tree"
], //
function(declare, array, lang, Tree) {
	/**
	 * @name ecm.widget.SingleSelectTree
	 * @class Provides a widget that contains a tree in which the user can select one node in the tree at a time.
	 * @augments dijit.Tree
	 */
	return declare("ecm.widget.SingleSelectTree", [
		Tree
	], {
		/** @lends ecm.widget.SingleSelectTree.prototype */

		/**
		 * Boolean indicating if this tree supports only single selection.
		 */
		singular: true,

		_selectedValue: null,
		_selectedNode: null,
		_originalData: null,

		postMixInProperties: function() {
			this.inherited(arguments);
			this.dndParams.push("singular");
			this.dndParams.push("userSelect");
		},

		/**
		 * Creates the tree node.
		 */
		_createTreeNode: function(/* Object */args) {
			var node = new dijit._TreeNode(args);
			if (this._selectedValue != undefined && args.item.value != undefined) {
				var value = args.tree.model.store.getValue(args.item, "value");
				if (value != undefined && value == this._selectedValue) {
					this._selectedNode = node;
				}
			}
			if( !args.item.root && args.tree.model.store.getValue(args.item, "autoExpand") ){
				//if the node is on the path of selected value, expand it.
				this.autoExpand = true;
			}else{
				//if the node is not on the path of selected value, don't expand it.
				this.autoExpand = false;
			}
			return node;
		},
		

		_onItemChildrenChange: function( parent,  newChildrenList){
			//override original method to not _setExpando(false) for each new item 
			var model = this.model,
				identity = model.getIdentity(parent),
				parentNodes = this._itemNodesMap[identity];

			if(parentNodes){
				array.forEach(parentNodes, function(parentNode){
					var tempExpando = parentNode._setExpando;
					parentNode._setExpando = null;
					//or the setChildItems will do _setExpando.
					parentNode.setChildItems(newChildrenList);
					parentNode._setExpando = tempExpando;
				});
			}
		},
		
		
		_onExpandoClick: function(message)  
	    {  
	        var node = message.node;  
	        var store = node.tree.model.store;  
	        var nodeItem = node.item;
	        if( !nodeItem.children && !nodeItem.value ){
	        	
	        	//no children no value, so it should have children, try to see if there is any children
		        var treePath = node.getTreePath();
		        if( treePath && treePath[2] && this._originalData){
		        	var originalObj = this._originalData;
		        	var find = false;
		        	for( var i = 2; i < treePath.length; i ++){
		        		if( originalObj && lang.isArray(originalObj) ){
		        			find = false;
			        		nodeObj  = treePath[i];
			        		for( var j = 0; j < originalObj.length; j ++ ){
			        			if( nodeObj.label == originalObj[j].displayName ){
			        				originalObj = originalObj[j].choices;
			        				find = true;
			        				break;
			        			}
			        		}
			        		if( !find ){
			        			break;
			        		}
		        		}else{
		        			break;
		        		}
		        	} 
		        	
		        	if( find && originalObj && lang.isArray(originalObj) ){
		        		//find children, init new nodes and load them to the tree before expand.
		        		node._setExpando(true);
		        		var choices = originalObj;
		        		var itemsArray = [];
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
							if( value || choice.choices ){
								store.newItem(item,{parent:nodeItem, attribute: 'children'});
							}
						}
		        		store.save();
		        		node._setExpando(false);
		        		
		        	}
		        }
	        }
            this.inherited(arguments);
	    },  

		/**
		 * Add or remove the given node from the selection, responding to a user action such as a click or key press.
		 * 
		 * @param node
		 *            The node to add or remove from selection.
		 * @param multi
		 *            A boolean value. If <code>true</code> this is a multiple select action (for example,
		 *            CTRL+click).
		 * @param range
		 *            A boolean value. If <code>true</code> this is a range select action (for example, SHIFT+click).
		 */
		userSelect: function(node, multi, range) {
			if (node.item.value) { // Only allow selection if node has a value
				if (this.anchor == node && multi) {
					this.selectNone();
				} else {
					this.setSelection([
						node
					]);
					this.anchor = node;
				}
			}
		},

		/**
		 * Returns the CSS class for a row based on the state of the passed in item.
		 * 
		 * @param item
		 *            A dojo.data.Item.
		 * @param opened
		 *            A boolean value. A value of <code>true</code> if the item is opened.
		 * @return The CSS class for the row.
		 */
		getRowClass: function(item, opened) {
			if (!item.value) {
				return "NotSelectable";
			} else if (item.value == '') {
				return "ecmNoneNode";
			} else {
				return "";
			}
		}
	});
});

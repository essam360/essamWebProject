/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/_base/connect", //
	"ecm/MessagesMixin", //
	"ecm/model/_ModelObject"
], //

function(declare, lang, array, connect, MessagesMixin, _ModelObject) {

	/**
	 * @public
	 * @name ecm.widget.admin.model._AdminObjectBase
	 * @class Base class for all administrative objects
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.widget.admin.model._AdminObjectBase", [
		ecm.model._ModelObject
	], {
		/** @lends ecm.widget.admin.model._AdminObjectBase.prototype */

		// reference to the parent object (an _AdminObjectBase object)
		_parent: null,

		// reference to the tree model that contains this object (an AdminTreeModel)
		_treeModel: null,

		// an array of children objects (_AdminObjectBase objects)
		_children: null,

		/**
		 * After the constructor is called, setId(id), setName(name) and initialize() should be called to initialize the
		 * object
		 */
		constructor: function() {
			this._parent = null;
			this._treeModel = null;
			if (!this._children) {
				this._children = [];
			}
		},

		/*
		 * Common getters and setters
		 */

		setTreeModel: function(treeModel) {
			this._treeModel = treeModel;
		},

		getTreeModel: function() {
			return this._treeModel;
		},

		setParent: function(parentObj) {
			this._parent = parentObj;
		},

		getParent: function() {
			return this._parent;
		},

		//-----------------------------------------------------------------------------
		/*
		 * The following functions are to be overwritten by the subclass
		 */

		/**
		 * To be overwritten to do all necessary initialization needed by the subclass
		 */
		initialize: function() {

		},

		/**
		 * To be overwritten to return the label to be displayed on the tree
		 */
		getLabel: function() {
			return this.name;
		},

		/**
		 * To be overwritten to return the class name for the Icon
		 */
		getIconClass: function(opened) {
			return "";
		},

		/**
		 * To be overwritten to returns true if the item my have children.
		 */
		mayHaveChildren: function() {
			return this._children.length > 0;
		},

		/**
		 * To be overwritten if the children is going to be lazy loaded
		 */
		getChildren: function(/* function(items) */onComplete) {
			onComplete(this._children);
		},

		/**
		 * To be overwritten to process the object being clicked on the tree
		 */
		onClick: function() {
			alert(this.getLabel() + " is being clicked");
		},

		/**
		 * To be overwritten to return a list of context menu action IDs
		 */
		getMenuActions: function() {
			var actionIDs = [];
			return actionIDs;
		},

		/**
		 * To be overwritten to return translated label for an action ID to be displayed on the context menu
		 */
		getActionLabel: function(actionID) {
			return actionID;
		},

		/**
		 * To be overwritten to process the actionID being invoked from the context menu
		 */
		processAction: function(actionID) {
			alert("Process action " + actionID + " for " + this.getLabel());
		},

		//-----------------------------------------------------------------------------
		/*
		 * Common functions to provide the basic interactions
		 */

		/**
		 * To add a child node and setup its parent and treeModel automatically
		 */
		addChild: function(childObj, isReload) {
			childObj.setParent(this);
			childObj.setTreeModel(this._treeModel);
			this._children.push(childObj);
			if (isReload == undefined || isReload == false) { // if reloading, don't call onChildrenChange for every child that is added
				this._onChildrenChange();
			}
		},

		/**
		 * To remove a child node
		 */
		removeChild: function(childObj) {
			var index = array.indexOf(this._children, childObj);
			if (index >= 0) {
				this._children.splice(index, 1);
				this._onChildrenChange();
			}
		},

		/**
		 * Notify the Tree Model about a change of children
		 */
		_onChildrenChange: function() {
			if (this._treeModel)
				this._treeModel.onChildrenChange(this, this._children);
		},

		/**
		 * Notify the Tree Model about data change
		 */
		_onChange: function() {
			if (this._treeModel)
				this._treeModel.onChange(this);
		},

		/**
		 * Returns the identifier for this item
		 */
		getIdentity: function() {
			return this.id;
		},

		/**
		 * Send a message to _AdminPaneBase.js to open a widget in the Admin Tabs
		 */
		openWidgetInTab: function(widget) {
			connect.publish("ecm.admin.AdminPane.openTab", [
				widget
			]);
		},

		/**
		 * Send a message to _AdminPaneBase.js to close a widget in the Admin Tabs
		 */
		closeWidgetInTab: function(widget) {
			connect.publish("ecm.admin.AdminPane.closeTab", [
				widget
			]);
		}

	});

});

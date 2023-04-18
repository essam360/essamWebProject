/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/aspect",
	"dojo/dom-attr",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"idx/layout/BorderContainer",
	"idx/layout/TitlePane",
	"ecm/widget/admin/AdminTree",
	"ecm/widget/admin/AdminTabs",
	"ecm/Messages",
	"ecm/widget/admin/model/AdminTreeModel",
	"dojo/text!./templates/_AdminPaneBase.html"
], //

function(declare, lang, array, connect, aspect, domAttr, ContentPane, _templatedMixin, _widgetsInTemplateMixin, LoggerMixin, BorderContainer, TitlePane, AdminTree, AdminTabs, Messages, AdminTreeModel, template) {

	/**
	 * @public
	 * @name ecm.widget.admin._AdminPaneBase
	 * @class Provides the administration view for the Application layout. An administration view is a pane that
	 *        presents the user with a view for administration and configuration.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.admin._AdminPaneBase", [
		ContentPane,
		_templatedMixin,
		_widgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin._AdminPaneBase.prototype */

		// widgetsInTemplate: Boolean
		// Set this to true if your widget contains other widgets
		widgetsInTemplate: true,
		templateString: template,

		gutters: false,

		_dirty: null,
		_dirtyWidgets: null,
		_labelTitle: ecm.messages.administration,

		constructor: function() {
			if (!this._dirtyWidgets) {
				this._dirtyWidgets = [];
			}
		},

		//---------------------------------------------------------------------------
		/*
		 * General functions can be overwritten by subclass
		 */

		destroy: function() {
			this.inherited(arguments);
			connect.unsubscribe(this._openTabHandle);
			connect.unsubscribe(this._closeTabHandle);
			connect.unsubscribe(this._dirtyTabHandle);
			connect.unsubscribe(this._cleanTabHandle);
			connect.unsubscribe(this._connectTabHandle);
		},

		/**
		 * Initialize the admin pane
		 */
		_initialize: function() {
			this._initializeTab();
			this._initializeTree();
			this._markClean();
			this.resize();
		},

		focus: function() {
			if (this.adminTreeWidget && this.adminTreeWidget.getTree() && this.adminTreeWidget.getTree().rootNode && this.adminTreeWidget.getTree().rootNode.getChildren().length > 0) {
				this.adminTreeWidget.getTree().focusNode(this.adminTreeWidget.getTree().rootNode.getChildren()[0]);
			}
		},

		_selectFirstChildFromTree: function() {
			var treeModel = this.adminTreeWidget.getModel();
			treeModel.getRoot(lang.hitch(this, function(rootItem) {
				rootItem.getChildren(lang.hitch(this, function(children) {
					if (children && children.length > 0) {
						var firstChild = children[0];
						this.adminTreeWidget.getTree().set('selectedItem', firstChild);
						firstChild.onClick();
						if (firstChild.resizeTabWidget) {
							firstChild.resizeTabWidget();
						}
					}
				}));
			}));
		},

		/**
		 * Initialize the tree widget
		 */
		_initializeTree: function() {
			this.own(aspect.after(this.adminTreeWidget, "onOpen", lang.hitch(this, function(item, node) {
				if (this.adminTreeWidget.getTree().rootNode == node) {
					this._selectFirstChildFromTree();
					this.resize();
				}
			}), true));
			this.adminTreeWidget.setModel(new AdminTreeModel());
		},

		/**
		 * Initialize the tab widget
		 */
		_initializeTab: function() {
			this._openTabHandle = connect.subscribe("ecm.admin.AdminPane.openTab", this, this._openTab);
			this._closeTabHandle = connect.subscribe("ecm.admin.AdminPane.closeTab", this, this._closeTab);
			this._dirtyTabHandle = connect.subscribe("ecm.admin.AdminPane.dirtyTab", this, this._dirtyTab);
			this._cleanTabHandle = connect.subscribe("ecm.admin.AdminPane.cleanTab", this, this._cleanTab);
			this._connectTabHandle = connect.subscribe("ecm.admin.AdminPane.connectTab", this, this._connectTab);
		},

		/**
		 * Function to handle the save all button click action.
		 */
		_onSaveAll: function() {
			while (this._dirtyWidgets.length > 0) {
				// Call the onSave() of each dirty tab widget
				this._dirtyWidgets[0].onSave();
			}
			this._markClean();
		},

		//---------------------------------------------------------------------------
		/*
		 * Private functions
		 */

		/**
		 * This is used to hook tabContainer and tab that needs to know their parent.
		 * 
		 * @param widget
		 *            a object that implements setParent method. It is child responsibility to null parent object in
		 *            destroy method.
		 */
		_connectTab: function(widget) {
			widget.setParent(this.adminTabsWidget);
		},

		// Open a tab
		_openTab: function(widget) {
			this.adminTabsWidget.openTab(widget);
		},

		// Close a tab
		_closeTab: function(widget, confirm) {
			this.adminTabsWidget.closeTab(widget, confirm);

			// Select the last child tab
			var bypassSelection = widget[0] && widget[0]._dirty ? true : false;
			if (!bypassSelection) {
				var children = this.adminTabsWidget.getChildren();
				if (children.length > 0) {
					this.adminTabsWidget.selectChild(children[children.length - 1]);
				}
			}
		},

		/**
		 * onSelect() is called when a pane is selected.
		 */
		onSelect: function() {
		},

		// Mark a tab dirty
		_dirtyTab: function(widget) {
			this._markDirty();
			if (array.indexOf(this._dirtyWidgets, widget) < 0)
				this._dirtyWidgets.push(widget);
		},

		// Mark a tab clean
		_cleanTab: function(widget) {
			var index = array.indexOf(this._dirtyWidgets, widget);
			if (index >= 0) {
				if (widget._uninitialize)
					widget._uninitialize();
				this._dirtyWidgets.splice(index, 1);
			}
			if (this._dirtyWidgets.length == 0)
				this._markClean();
		},

		// Mark that some tab(s) has unsaved data.
		// Enable the Save All button.
		_markDirty: function() {
			this._dirty = true;
			//this.saveAllButton.set('disabled', false);
		},

		// Mark that all tabs are clean.
		// Disable the Save All button.
		_markClean: function() {
			this._dirty = false;
			//this.saveAllButton.set('disabled', true);
		},

		resize: function() {
			this.inherited(arguments);
			if (this.adminTreeWidget && this.adminTreeWidget.getTree()) {
				this.adminTreeWidget.getTree().resize();
			}
		},

		//---------------------------------------------------------------------------

		// When this method is called, all variables inherited from superclasses are 'mixed in'.
		// Common operations for postMixInProperties
		// 1) Modify or assign values for widget property variables defined in the template HTML file
		postMixInProperties: function() {
		},

		// postCreate() is called after buildRendering().  This is useful to override when 
		// you need to access and/or manipulate DOM nodes included with your widget.
		// DOM nodes and widgets with the dojoAttachPoint attribute specified can now be directly
		// accessed as fields on "this". 
		// Common operations for postCreate
		// 1) Access and manipulate DOM nodes created in buildRendering()
		// 2) Add new DOM nodes or widgets 
		postCreate: function() {
			this.inherited(arguments);
			domAttr.set(this.adminTabsWidget.domNode, "role", "region");
			domAttr.set(this.adminTabsWidget.domNode, "aria-label", ecm.messages.admin_tabs_label);
			this._initialize();
		}
	});
});

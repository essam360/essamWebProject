/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"ecm/widget/listView/modules/_Module",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/registry",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/Menu",
	"ecm/widget/ActionMenu",
	"ecm/MessagesMixin",
	"ecm/widget/listView/modules/Toolbar2",
	"dijit/Tooltip"
], //
function(declare, lang, array, domClass, domGeom, _Module, connect, domConstruct, registry, Button, DropDownButton, Menu, ActionMenu, MessagesMixin, Toolbar, Tooltip) {

	/**
	 * @private
	 * @name ecm.widget.search.SelectedRepositoriesToolbar
	 * @class This module provides a toolbar with buttons for add,edit and remove actions.
	 */
	return declare("ecm.widget.search.SelectedRepositoriesToolbar", [
		Toolbar
	], {

		_customtoolbarButtons: null,

		constructor: function() {
			this._customtoolbarButtons = [];
		},

		/**
		 * event raised when the add repository button is clicked
		 */
		onAddRepository: function() {

		},

		/**
		 * Event raised when the edit repository button is clicked
		 */
		onEditRepository: function(item) {

		},

		/**
		 * onRemoveRepository
		 */
		onRemoveRepository: function(item) {

		},

		destroy: function() {
			var t = this;
			t.inherited(arguments);
			t._customtoolbarButtons = [];
		},

		/**
		 * Cleans up the toolbar buttons.
		 */
		clearToolbar: function() {
			var t = this;
			t.inherited(arguments);
			for ( var i in t._customtoolbarButtons) {
				t._customtoolbarButtons[i].destroy();
			}
			t._customtoolbarButtons = [];
		},

		/**
		 * Creates the toolbar buttons. Adds extra hardcoded buttons , the baseclass will only list the default action.
		 */
		createToolbar: function() {
			var t = this, buttonArea = t.getButtonArea();
			t.inherited(arguments);
			t.actionsButton.domNode.style.display = "none";
			var firstButton = buttonArea;
			t._createAddButton(firstButton);
			t._createEditButton(firstButton);
			t._createRemoveButton(firstButton);
			t.updateToolbarState();
		},

		_createButton: function(label, actionId) {
			var t = this;
			var toolbarButton = new Button({
				label: label,
				id: registry.getUniqueId((actionId ? (actionId.toUpperCase() + "_") : "") + "dijit_form_Button")
			});
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(toolbarButton.domNode, "oncontextmenu", "_stopEvent");
			return toolbarButton;
		},

		/**
		 * Creates the Open button.
		 */
		_createAddButton: function(contentDiv) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			var addButton = t._createButton(ecm.messages.add_repository);
			addButton.actionid = "addButton";
			t._customtoolbarButtons.push(addButton);
			t.connect(addButton, "onClick", lang.hitch(t, function(evt) {
				t.onAddRepository();
			}));
			domConstruct.place(addButton.domNode, contentDiv, "last");
		},

		/**
		 * Creates the edit button.
		 */
		_createEditButton: function(contentDiv) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			var editButton = t._createButton(ecm.messages.edit_repository);
			editButton.actionid = "editButton";
			t._customtoolbarButtons.push(editButton);
			t.connect(editButton, "onClick", lang.hitch(t, function(evt) {
				var item = cl.getSelectedItems()[0];
				if (item) {
					t.onEditRepository(item);
				}
			}));

			domConstruct.place(editButton.domNode, contentDiv, "last");
		},

		/**
		 * Creates the remove button.
		 */
		_createRemoveButton: function(contentDiv) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			var removeButton = t._createButton(ecm.messages.remove_repository);
			removeButton.actionid = "removeButton";
			t._customtoolbarButtons.push(removeButton);
			t.connect(removeButton, "onClick", lang.hitch(t, function(evt) {
				var item = cl.getSelectedItems()[0];
				t.onRemoveRepository(item);
			}));

			domConstruct.place(removeButton.domNode, contentDiv, "last");
		},

		updateToolbarState: function() {
			var t = this, cl = t.contentList;
			var selectedItems = cl.getSelectedItems();
			var disabled = selectedItems.length == 0;

			for ( var i in t._customtoolbarButtons) {
				if (t._customtoolbarButtons[i].actionid == "editButton") {
					t._customtoolbarButtons[i].set("disabled", disabled);
				} else if (t._customtoolbarButtons[i].actionid == "removeButton") {
					t._customtoolbarButtons[i].set("disabled", disabled);
				}
			}
		},

		_onRowSelectionChange: function(selectedItems) {
			var t = this;
			t.inherited(arguments);
			t.updateToolbarState();
		}
	});
});

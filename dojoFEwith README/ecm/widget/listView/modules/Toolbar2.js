/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/Menu",
	"dijit/registry",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/model/Desktop",
	"ecm/widget/Toolbar",
	"ecm/widget/ActionMenu",
	"ecm/widget/listView/modules/_Module",
	"ecm/MessagesMixin"
], //
function(declare, lang, event, array, domClass, domGeom, connect, domConstruct, Button, DropDownButton, Menu, registry, UnifiedSearchTemplate, Desktop, ToolbarWidget, ActionMenu, _Module, MessagesMixin) {

	/**
	 * @name ecm.widget.listView.modules.Toolbar2
	 * @class This content list module provides toolbar capability. This module uses the ecm.widget.Toolbar (which
	 *        supports regular and dropdown buttons) to load the toolbar buttons. By default, this module also has an
	 *        Actions drop down button which has the context menu actions for the selected items in the content list.
	 * @augments ecm.widget.listView.modules._Module
	 * @since 2.0.3
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.Toolbar2.prototype */

		name: 'toolbar',

		/**
		 * Show the actions button.
		 */
		showActionsButton: true,

		/**
		 * @private
		 */
		_selectedItems: null,

		constructor: function() {
			if (!this._selectedItems) {
				this._selectedItems = [];
			}
		},

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				toolbar: this
			};
		},

		preload: function() {
			var t = this, cl = t.contentList;
			if (t._bar) {
				t.domNode = t.buttonArea = domConstruct.create("div", {
					"class": "toolbarButtonArea"
				});
			}
			this.constructToolbarWidget();
			domClass.add(t.toolbar.domNode, "dijitInline");
			var buttonArea = t.getButtonArea();
			buttonArea.appendChild(this.toolbar.domNode);
			if (t.showActionsButton) {
				t._createActionsDropDownButton();
			}

			t.batchConnect([
				cl,
				'onSetResultSet',
				'createToolbar'
			], [
				cl,
				'onRowSelectionChange',
				'_onRowSelectionChange'
			], [
				buttonArea,
				'oncontextmenu',
				'_stopEvent'
			], [
				t.toolbar,
				"onToolbarButtonsCreated",
				"_onToolbarButtonsCreated"
			], [
				cl,
				'onSelectedItemUpdateItem',
				'_onRowSelectionChange'
			]);
			t.createToolbar();
		},

		/**
		 * Construct the Toolbar widget used to display the action items
		 */
		constructToolbarWidget: function() {
			this.toolbar = new ToolbarWidget();
		},

		/**
		 * Returns the button area dom node that the buttons are contained in.
		 */
		getButtonArea: function() {
			var t = this;
			return t.buttonArea ? t.buttonArea : t.contentList.buttonArea;
		},

		/**
		 * @private Stops the event.
		 */
		_stopEvent: function(evt) {
			return this.toolbar._stopEvent(evt);
		},

		/**
		 * Event fired when the context menus have been constructed. This is used to alter the menu items if necessary.
		 * 
		 * @param actionMenu
		 *            The action menu.
		 * @param items
		 *            The selected items.
		 */
		onContextMenuCreated: function(actionMenu, items) {
		},

		/**
		 * @private Adds the actions button to the toolbar.
		 */
		_onToolbarButtonsCreated: function(toolbarButtons) {
			var t = this, cl = t.contentList;
			if (t.showActionsButton) {
				t.toolbar.addChild(t.actionsButton);
			}
			cl.resize(); // resize - if the toolbar has many buttons, it may have grown the content list header
			t.onToolbarButtonsCreated(toolbarButtons);
		},

		/**
		 * Event fired when toolbar buttons are created.
		 * 
		 * @param toolbarButtons
		 *            The array of toolbar buttons.
		 */
		onToolbarButtonsCreated: function(toolbarButtons) {
		},

		/**
		 * @private Creates the actions button and adds it to the button area.
		 */
		_createActionsDropDownButton: function() {
			var t = this, buttonArea = t.getButtonArea();
			// Create the actions dropdown button
			t.actionsButton = new DropDownButton({
				optionsTitle: "Actions",
				dropDown: new Menu({
					style: "display: none;"
				}),
				label: ecm.messages.actions,
				isLoaded: function() {
					return false;
				},
				loadDropDown: lang.hitch(this, "_createActionsMenuItems") 
			});
			t.actionsButton.set("disabled", true);
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(t.actionsButton.domNode, "oncontextmenu", "_stopEvent");
			//buttonArea.appendChild(t.actionsButton.domNode);
		},

		/**
		 * Load the context menu by loading it from the resultSet. Provides a way for sub-modules to override this
		 * functionality.
		 * 
		 * @param selectedItems
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param callback
		 *            The callback function.
		 */
		loadContextMenu: function(selectedItems, callback) {
			var t = this, resultSet = t.contentList.getResultSet();
			resultSet.loadContextMenu(selectedItems, callback);
		},

		/**
		 * @private Cleans up the action menu and re-loads it.
		 */
		_createActionsMenuItems: function(callback) {
			var t = this;
			var childMenuItems = t.actionsButton.dropDown.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.destroy();
			}, t);

			if (!t._actionMenuCreator) {
				t._actionMenuCreator = new ActionMenu();
			}

			if (t._selectedItems) {
				t._loadActionMenuItems(callback);
			}
		},

		/**
		 * @private Gets the actions from the model and loads the action menu.
		 */
		_loadActionMenuItems: function(callback) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			t.loadContextMenu(t._selectedItems, lang.hitch(t, function(actions) {
				// The repository for the item may not be the same one for the list when invoked for workitem attachments.
				// When that's the case, use the repository for the item.
				var menuRepository = null;
				if (!resultSet.repository || t._selectedItems.length > 0 && t._selectedItems[0].repository && t._selectedItems[0].repository.id != resultSet.repository.id) {
					menuRepository = t._selectedItems[0].repository;
				} else {
					menuRepository = resultSet.repository;
				}

				t._getTeamspace(resultSet.teamspaceId, menuRepository, lang.hitch(t, function(teamspace) {
					resultSet.teamspace = teamspace;
					var menu = t._actionMenuCreator.createMenu(actions, t._selectedItems, "", null, menuRepository, teamspace, resultSet, {
						widget: cl
					});

					t.onContextMenuCreated(t._actionMenuCreator, t._selectedItems);
					array.forEach(menu.getChildren(), function(child) {
						t.actionsButton.dropDown.addChild(child);
					}, t);
					if (callback) {
						callback();
					} else if (t.actionsButton.dropDown.isShowingNow) {
						t.actionsButton.dropDown.focusFirstChild();
					}
				}));
			}));
		},

		/**
		 * @private Gets the teamspace for the input teamspace id.
		 */
		_getTeamspace: function(teamspaceId, repository, callback) {
			var t = this;
			if (teamspaceId) {
				repository.retrieveTeamspaceById(teamspaceId, "instance", lang.hitch(t, function(teamspace) {
					teamspace.retrieveContentClasses(function() {
					});
					callback(teamspace);
				}));
			} else {
				callback(null);
			}
		},

		/**
		 * Clears the toolbar buttons.
		 */
		clearToolbar: function() {
			var t = this;
			// Delete the actions buttons children
			if (t.actionsButton && t.actionsButton.dropDown) {
				var childMenuItems = t.actionsButton.dropDown.getChildren();
				array.forEach(childMenuItems, function(child) {
					child.destroy();
				}, t);
			}
			if (t.toolbar) {
				t.toolbar.clearToolbar();
			}
		},

		/**
		 * Creates the toolbar.
		 */
		createToolbar: function() {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			t.clearToolbar();
			if (resultSet) {
				t._getTeamspace(resultSet.teamspaceId, resultSet.repository, lang.hitch(t, function(teamspace) {
					resultSet.teamspace = teamspace;

					t.toolbar.toolbarName = resultSet.getToolbarDef();
					t.toolbar.createToolbar({
						contentList: cl,
						resultSet: resultSet,
						teamspace: teamspace,
						parameterMap: {
							widget: cl
						}
					});
				}));
			}
		},

		/**
		 * Retrieves a specific toolbar button if it exists.
		 * 
		 * @param actionId
		 *            The id of the {@link ecm.model.Action}.
		 * @return The button with the associated action id.
		 */
		getButton: function(actionId) {
			var t = this;
			var toolbarButton = null;
			if (t.toolbar && t.toolbar.toolbarButtons) {
				for ( var i in t.toolbar.toolbarButtons) {
					if (t.toolbar.toolbarButtons[i].action.id == actionId) {
						toolbarButton = t.toolbar.toolbarButtons[i];
						break;
					}
				}
			}
			return toolbarButton;
		},

		/**
		 * Retrieves the toolbar buttons.
		 * 
		 * @return Array of buttons.
		 */
		getButtons: function() {
			return this.toolbar.toolbarButtons;
		},

		/**
		 * @private When grid row selection changes, update toolbar button states.
		 */
		_onRowSelectionChange: function(selectedItems) {
			var t = this;
			
			var existingSelectedItems = t._selectedItems;
			t._selectedItems = [];
			if(selectedItems){
				for(var s in selectedItems){
					t._selectedItems.push(selectedItems[s]);
				}
			}
			
			//add back those selected before sorting, but not retrieved to grid yet after sorting
			var allSelectedIds = t.contentList.grid.select.row.getSelected();
			if(allSelectedIds && selectedItems){
				if(allSelectedIds.length > selectedItems.length){
					for(var i in allSelectedIds){
						for(var j=0; j<selectedItems.length; j++){
							if(allSelectedIds[i]==selectedItems[j].id){
								break;
							}
						}
						
						if(j < selectedItems.length){//Already retrieved to grid
							continue;
						}
						
						for(var k in existingSelectedItems){
							if(allSelectedIds[i]==existingSelectedItems[k].id){
								t._selectedItems.push(existingSelectedItems[k]);
								break;
							}
						}
					}
				}
			}
			
			if (t.actionsButton) {
				t.actionsButton.set("disabled", t._selectedItems.length == 0);
			}
			t.toolbar.updateToolbarState();
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			t.clearToolbar();
			if (t.actionsButton) {
				if (t.actionsButton.dropDown) {
					t.actionsButton.dropDown.destroyRecursive();
					t.actionsButton.dropDown = null;
				}
				t.actionsButton.destroyRecursive();
				t.actionsButton = null;
			}
			t.toolbar.destroy();
			t._selectedItems = null;
			t.inherited(arguments);
		}
	});
});

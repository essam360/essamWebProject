/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/aspect",
	"dojo/keys",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dijit/registry",
	"gridx/core/_Module",
	"ecm/model/_EditServiceMixin",
	"ecm/widget/ActionMenu",
	"ecm/widget/dialog/LoginDialog"
], //
function(declare, lang, array, event, aspect, keys, domClass, domGeom, registry, _Module, _EditServiceMixin, ActionMenu, LoginDialog) {

	/**
	 * @name ecm.widget.listView.gridModules.RowContextMenu
	 * @class This module displays the context menu when the user right clicks or hits Shift F10. It also provides
	 *        default action capability.
	 * @augments gridx.core._Module
	 */

	return declare( [_Module,
         _EditServiceMixin
	],{
		/** @lends ecm.widget.listView.gridModules.RowContextMenu.prototype */

		name: 'rowContextMenu',

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				rowContextMenu: this
			};
		},

		/**
		 * Listen to grid events such as onkeydown, onRowDblClick, onRowContextMenu, and oncontextmenu.
		 */
		preload: function() {
			var t = this, g = t.grid;
			t.batchConnect([
				g,
				'onRowContextMenu',
				'_showContextMenu'
			], [
				g.domNode,
				'onkeydown',
				'_onKeyDown'
			], [
				g,
				'onRowDblClick',
				'performDefaultAction'
			], [
				g.bodyNode,
				'oncontextmenu',
				'_checkForContextMenuInEmptySpace'
			], [
				ecm.model.desktop,
				"onDisplayStatusDialog",
				"_onDisplayStatusDialog"
			], [
				ecm.model.desktop,
				"onHideStatusDialog",
				"_onHideStatusDialog"
			], [
				g.select.row, "onSelectionChange",
				'_onRowSelectionChange'
			]);
			t.inherited(arguments);
		},

		_onRowSelectionChange: function(selectedIds) {
			var t = this, g = t.grid;
			var existingSelectedItems = t._selectedItems;
			t._selectedItems = [];
			array.forEach(selectedIds, function(id) {
				var existing = null;
				array.some(existingSelectedItems, function(item) {
					var found = item.id == id;
					if (found)
						existing = item;
					return found;
				});
				if (existing) {
					t._selectedItems.push(existing);
				} else {
					var selected = g.row(id);
					if (selected)
						t._selectedItems.push(selected.item());
				}
			});
		},

		/**
		 * @private
		 */
		_onDisplayStatusDialog: function() {
			var t = this;
			t._statusDialogOpen = true;
			t._openMenuOnStatusHide = false;
		},

		/**
		 * @private
		 */
		_onHideStatusDialog: function() {
			var t = this;
			t._statusDialogOpen = false;
			if (t._openMenuOnStatusHide && t._openMenuOnStatusHide.menu) {
				t._openMenuOnStatusHide.menu._openMyself({
					target: t._openMenuOnStatusHide.target,
					coords: t._openMenuOnStatusHide.coords
				});
			}
		},

		/**
		 * @private If the user right clicks in the empty space (with no rowid), then stop the event.
		 */
		_checkForContextMenuInEmptySpace: function(evt) {
			if (!evt.rowId) {
				event.stop(evt);
			}
		},

		/**
		 * Perform the default action for the item at the specified evt row index.
		 * 
		 * @param evt
		 *            The event.
		 */
		performDefaultAction: function(evt) {
			var t = this, g = t.grid;
			t.performDefaultActionForItem(g.row(evt.rowIndex).item());
		},

		/**
		 * Load the context menu by loading it from the resultSet. Provides a way for sub-modules to override this
		 * functionality.
		 * 
		 * @param selectedItems
		 *            The selected items.
		 * @param callback
		 *            Callback called when complete.
		 */
		loadContextMenu: function(selectedItems, callback) {
			var t = this, g = t.grid, cl = g.contentList, gridResultSet = cl.getResultSet();
			gridResultSet.loadContextMenu(selectedItems, callback);
		},

		/**
		 * Perform the default action for the item.
		 * 
		 * @param selectedItem
		 *            The selected item.
		 */
		performDefaultActionForItem: function(selectedItem) {
			var t = this, g = t.grid, cl = g.contentList, gridResultSet = cl.getResultSet();
			var selectedItems = [
				selectedItem
			];
			var repository = gridResultSet.repository ? gridResultSet.repository : selectedItem.repository;

			LoginDialog.checkLogin(repository, lang.hitch(t, function() {
				t.loadContextMenu(selectedItems, lang.hitch(t, function(actions) {
					var action = t._getActionToPerform(actions, selectedItems, repository, gridResultSet);
					if (action) {
						action.performAction(repository, selectedItems, null, null, gridResultSet, {
							widget: cl
						});
					} else {
						cl.openItem(selectedItem);
					}
				}));
			}));
		},

		/**
		 * @private Get the first action that is visible, enabled, not a separator, and not a label with subactions.
		 */
		_getActionToPerform: function(actions, selectedItems, repository, gridResultSet) {
			var t = this, g = t.grid;
			var actionToPerform = null;
			if (actions && actions.length > 0) {
				for ( var i = 0; i < actions.length; i++) {
					var action = actions[i];
					if (action.isVisible(repository) && action.isEnabled(repository, "", selectedItems, null, gridResultSet)) {
						if (action.id.substr(0, "Separator".length) == "Separator") {
							// ignore separator actions
						} else if (action.subActions && action.subActions.length > 0) {
							// ignore an action with subactions
						} else {
							actionToPerform = action;
							break;
						}
					}
				}
			}
			return actionToPerform;
		},

		/**
		 * @private If hit Shift F10, open the context menu. If hit Enter, perform the default action for the row item.
		 */
		_onKeyDown: function(evt) {
			// If the containing grid id doesn't equal this grid id, then ignore the keydown.
			// This solves the problem where if a gridx is within a gridx, both gridx are processing the key press for the inner gridx.
			// Only the inner gridx should process the keydown event in this scenario.
			var t = this, g = t.grid, widget = registry.getEnclosingWidget(evt.target);
			while (widget && widget.declaredClass != "gridx.Grid") {
				widget = registry.getEnclosingWidget(widget.domNode.parentNode);
			}
			if (widget && widget.declaredClass == "gridx.Grid" && widget.id && g.id != widget.id) {
				return;
			}

			if (evt.keyCode == keys.ENTER && !evt.shiftKey) { // Enter - perform default action
				if (evt.rowIndex == undefined) {
					evt.rowIndex = t._getRowIndex(evt);
				}
				if (evt.rowIndex != null) {
					event.stop(evt);
					t.performDefaultAction(evt);
				}
			} else if (evt.keyCode === keys.F10 && evt.shiftKey) { // Shift F10 - show context menu
				if (evt.rowIndex == undefined) {
					evt.rowIndex = t._getRowIndex(evt);
				}
				if (evt.rowIndex != null) {
					t._showContextMenu(evt);
				}
			}
		},

		/**
		 * @private Returns the row index when the event doesn't have a evt.rowIndex.
		 */
		_getRowIndex: function(evt) {
			if (evt.srcElement) {
				var node = evt.srcElement;
				while (node != null && !domClass.contains(node, "gridxRow")) {
					node = node.parentNode;
				}
				if (node) {
					var rowindex = node.getAttribute("rowindex");
					return parseInt(rowindex);
				}
			}
			return null;
		},

		/**
		 * @private If the row is not selected, then clear the selection & select the row. Display the context menu for
		 *          the selected rows.
		 */
		_showContextMenu: function(evt) {
			var t = this, g = t.grid, cl = g.contentList, gridResultSet = cl.getResultSet();
			event.stop(evt);

			// If the row isn't selected already, then clear selection & select the row.
			var id = g.model.indexToId(evt.rowIndex);
			if (!g.select.row.isSelected(id)) {
				// Workaround for bug in gridx
				if (g.dnd && g.dnd._dnd && g.dnd._dnd._dismissDndReady) {
					g.dnd._dnd._dismissDndReady(evt);
				}
				g.select.row.clear();
				g.select.row.selectById(id);
			}

			t.getMenu(t._selectedItems, lang.hitch(t, function(menu) {
				t._openMenu(menu, evt.target, evt.keyCode, evt.pageX, evt.pageY);
			}));
		},

		/**
		 * For the selectedItems, return the menu in the callback.
		 * 
		 * @param selectedItems
		 *            The selected items.
		 * @param callback
		 *            Method to call when complete.
		 */
		getMenu: function(selectedItems, callback) {
			var t = this, g = t.grid, cl = g.contentList, gridResultSet = cl.getResultSet();
			var repository = gridResultSet.repository ? gridResultSet.repository : selectedItems[0].repository;

			var loginHideHandle = aspect.after(LoginDialog.getLoginDialog(), "onHide", function() {
				if (selectedItems && selectedItems.length > 0 && selectedItems[0] instanceof ecm.model.Favorite && !repository.connected) {
					gridResultSet.loadContextMenu(selectedItems, function(actions) {
						if (!t._actionMenuCreator) {
							t._actionMenuCreator = new ActionMenu();
						}
						var menu = t._actionMenuCreator.createMenu(actions, selectedItems, "", {}, repository, null, gridResultSet, {
							widget: cl
						});
						callback(menu);
					}, true);
				}

				if (loginHideHandle)
					loginHideHandle.remove();
			});

			var errorHideHandle = null;
			var layout = ecm.model.desktop.getLayout();
			if (layout && layout._errorDialog) {
				errorHideHandle = aspect.after(layout._errorDialog, "onHide", function() {
					if (selectedItems && selectedItems.length > 0 && selectedItems[0] instanceof ecm.model.Favorite) {
						gridResultSet.loadContextMenu(selectedItems, function(actions) {
							if (!t._actionMenuCreator) {
								t._actionMenuCreator = new ActionMenu();
							}
							var menu = t._actionMenuCreator.createMenu(actions, selectedItems, "", {}, repository, null, gridResultSet, {
								widget: cl
							});
							callback(menu);
						}, true);
					}

					if (errorHideHandle)
						errorHideHandle.remove();
				});
			}

			LoginDialog.checkLogin(repository, lang.hitch(t, function() {
				if (loginHideHandle)
					loginHideHandle.remove();

				t.loadContextMenu(selectedItems, lang.hitch(t, function(actions) {
					if (errorHideHandle)
						errorHideHandle.remove();
					this._addEditServiceActions(repository, actions);
					if (callback) {
						if (!t._actionMenuCreator) {
							t._actionMenuCreator = new ActionMenu();
						}
						if (gridResultSet.teamspaceId && gridResultSet.teamspace && gridResultSet.teamspace.contentClasses.length == 0) {
							repository.retrieveTeamspaceById(gridResultSet.teamspaceId, "instance", lang.hitch(t, function(teamspace) {
								teamspace.retrieveContentClasses(lang.hitch(t, function() {
									var menu = t._actionMenuCreator.createMenu(actions, selectedItems, "", {}, repository, teamspace, gridResultSet, {
										widget: cl
									});
									callback(menu);
								}));
							}));
						} else {
							var menu = t._actionMenuCreator.createMenu(actions, selectedItems, "", {}, repository, null, gridResultSet, {
								widget: cl
							});
							callback(menu);
						}
					}
				}));
			}));
		},

		/**
		 * @private Show the menu.
		 */
		_openMenu: function(menu, target, keyCode, pageX, pageY) {
			var t = this;
			var coords = null;
			if (keyCode && keyCode !== keys.F10 && pageX) {
				coords = {
					x: pageX,
					y: pageY
				};
			}
			if (!t._hasMenuListener) {
				t._hasMenuListener = true;
				t.connect(menu, "onClose", lang.hitch(t, function() {
					t._openMenuOnStatusHide = null; // If the menu closes, don't auto reopen it
				}));
			}
			if (t._statusDialogOpen) {
				t._openMenuOnStatusHide = {
					menu: menu,
					target: target,
					coords: coords
				};
			} else {
				t._openMenuOnStatusHide = null;
				menu._openMyself({
					target: target,
					coords: coords
				});
			}
		},

		destroy: function() {
			if (this._selectedItems)
				this._selectedItems = null;
			this.inherited(arguments);
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/keys",
	"dojo/dom-class",
	"dijit/Menu",
	"dojo/_base/Deferred",
	"gridx/core/_Module"
], //
function(declare, lang, event, keys, domClass, Menu, Deferred, _Module) {

	/**
	 * @name ecm.widget.listView.gridModules.RowContextMenuLoadMenu
	 * @class This module displays the context menu when the user right clicks or hits Shift F10. This module allows the
	 *        user of the module to load the menu by overriding the loadMenu method.
	 * @augments gridx.core._Module
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.gridModules.RowContextMenuLoadMenu.prototype */

		name: 'rowContextMenu',

		getAPIPath: function() {
			return {
				rowContextMenu: this
			};
		},

		/**
		 * Loads the menu and then calls the given callback. Overridable by the user of the module.
		 * 
		 * @param menu
		 *            The menu to load.
		 * @param selectedItems
		 *            The array of selected items.
		 */
		loadMenu: function(menu, selectedItems) {
			var def = new Deferred();
			// Override method & put logic to load the menu 
			def.callback();
			return def;
		},

		/**
		 * Listen to keydown & contextmenu.
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
				'_checkForShiftF10'
			]);
			t.inherited(arguments);
		},

		/**
		 * @private If hit Shift F10, open the context menu.
		 */
		_checkForShiftF10: function(evt) {
			var t = this, g = t.grid;
			if (evt.keyCode === keys.F10 && evt.shiftKey) {
				t._showContextMenu(evt);
			}
		},

		/**
		 * @private If the row is not selected, then clear the selection & select the row. Call loadMenu to load the
		 *          menu and display the context menu for the selected rows.
		 * @param evt
		 *            The event.
		 */
		_showContextMenu: function(evt) {
			var t = this, g = t.grid, cl = g.contentList;
			event.stop(evt);

			var id = g.model.indexToId(evt.rowIndex);
			if (!g.select.row.isSelected(id)) {
				// Workaround for bug in gridx
				if (g.dnd && g.dnd._dnd && g.dnd._dnd._dismissDndReady) {
					g.dnd._dnd._dismissDndReady(evt);
				}
				g.select.row.clear();
				g.select.row.selectById(id);
			}

			var coords = null;
			if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
				coords = {
					x: evt.pageX,
					y: evt.pageY
				};
			}	
			var target = evt.target;
			var menu = new Menu();
			t.loadMenu(menu, cl.getSelectedItems(), g, g.cell(evt.rowIndex, evt.columnIndex)).then(lang.hitch(this, function() {
				if (!menu.hasChildren())
					return;

				t._showMenu(menu, target, coords);
			}));
		},

		/**
		 * @private Shows the menu.
		 * @param menu
		 *            The menu to open.
		 * @param The
		 *            target.
		 * @param The
		 *            coordinates.
		 */
		_showMenu: function(menu, target, coords) {
			menu._openMyself({
				target: target,
				coords: coords
			});
		}
	});
});

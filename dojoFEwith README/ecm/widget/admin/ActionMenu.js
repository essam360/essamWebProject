/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dijit/_Widget",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/PopupMenuItem",
	"ecm/Messages",
	"ecm/model/Desktop"
],

function(declare, lang, array, _Widget, Menu, MenuItem, MenuSeparator, PopupMenuItem, Messages, Desktop) {

	/**
	 * @name ecm.widget.admin.ActionMenu
	 * @class Provides context menu that is used in the IBM Content Navigator admininstration tool.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.admin.ActionMenu", [
		_Widget
	], {
		/** @lends ecm.widget.admin.ActionMenu.prototype */

		/**
		 * @private Instance of {@dijit.Menu}.
		 */
		_actionsMenu: null,

		postCreate: function() {
			this.inherited(arguments);
			this._actionsMenu = new Menu();
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this._cleanUp();
			this.inherited(arguments);
		},

		/**
		 * Cleans up the data.
		 */
		_cleanUp: function() {
			var childMenuItems = this._actionsMenu.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.destroy();
			}, this);
		},

		/**
		 * Adds the input actions to the menu as menu items and menu separators.
		 * 
		 * @param actions
		 *            Array of {@link com.model.Action}.
		 * @param items
		 *            Array of selected items.
		 * @return Instance of {@link dijit.Menu}.
		 */
		createMenu: function(actions, items) {
			this._cleanUp();
			this._isPrevSeparator = false;
			for ( var i in actions) {
				var action = actions[i];
				this._addActionToMenu(this._actionsMenu, action, items);
			}
			return this._actionsMenu;
		},

		/**
		 * @private
		 */
		_addActionToMenu: function(menu, action, items) {
			if (action.id.substr(0, "Separator".length) == "Separator") {
				if (!this._isPrevSeparator) {
					this._isPrevSeparator = true;
					menu.addChild(new MenuSeparator());
				}
			} else {
				this._isPrevSeparator = false;
				if (action.subActions && action.subActions.length > 0) {
					var subMenu = new Menu({});
					var popupMenuItem = new PopupMenuItem({
						label: action.name,
						popup: subMenu
					});
					popupMenuItem.startup();
					menu.addChild(popupMenuItem);

					for ( var i in action.subActions) {
						var subaction = action.subActions[i];
						this._addActionToMenu(subMenu, subaction, items);
					}
				} else {
					var mi = new MenuItem({
						label: action.name,
						onClick: lang.hitch(this, function(evt) {
							this.onAction(items, action);
						})
					});
					mi.action = action;
					menu.addChild(mi);
				}
			}
		},

		/**
		 * Event fired when action is selected.
		 * 
		 * @param items
		 *            The selected items.
		 * @param action
		 *            Instance of {@link ecm.model.Action}.
		 */
		onAction: function(items, action) {
		}
	});

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/dom-style",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/PopupMenuItem",
	"../Messages"
], //
function(declare, array, domStyle, registry, _Widget, Menu, MenuItem, MenuSeparator, PopupMenuItem, Messages) {
	/**
	 * @name ecm.widget.ActionMenu
	 * @class Provides a widget that is used as a context menu.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.ActionMenu", [
		_Widget
	], {
		/** @lends ecm.widget.ActionMenu.prototype */

		/**
		 * @private Instance of {@link dijit.Menu}.
		 */
		_actionsMenu: null,

		/**
		 * Creates the action menu.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this._actionsMenu = new Menu();
		},

		destroy: function() {
			this.inherited(arguments);
			this._cleanUp();
		},

		/**
		 * Cleans up the items in the menu.
		 */
		_cleanUp: function() {
			var childMenuItems = this._actionsMenu.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.destroy();
			}, this);
			// Fix dojo 1.9 bug - 2nd time open context menu gives firebug error due to focusedChild.domNode being null
			if (this._actionsMenu) {
				this._actionsMenu.selected = null;
			}
		},

		/**
		 * Returns the children in the action menu.
		 */
		getChildren: function() {
			if (this._actionsMenu)
				return this._actionsMenu.getChildren();
			else
				return null;
		},

		/**
		 * Returns the menu item with the specified action id.
		 * 
		 * @param actionId
		 *            String id of the {@link ecm.model.Action}.
		 * @return Menu item with the specified action id.
		 */
		getMenu: function(actionId) {
			var childMenuItems = this._actionsMenu.getChildren();
			for ( var i in childMenuItems) {
				var menuItem = childMenuItems[i];
				if (menuItem.action && menuItem.action.id == actionId)
					return menuItem;
			}
			return null;
		},

		/**
		 * For the specified actions, adds the visible actions as menu items to the action menu and returns the action
		 * menu.
		 * 
		 * @param actions
		 *            Array of {@link ecm.model.Action}.
		 * @param items
		 *            The selected items.
		 * @param listType
		 *            Passed into isEnabled method of the action. A string value indicating the type of object in the
		 *            items list.
		 * @param callbackMap
		 *            Can be null.
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 *            Passed into performAction method of the action. An array of extra parameters to be passed to the
		 *            action (can be null).
		 */
		createMenu: function(actions, items, listType, callbackMap, repository, teamspace, resultSet, parameterMap) {
			this._cleanUp();
			this._isPrevSeparator = false;
			for ( var i in actions) {
				var action = actions[i];
				var isVisible = action.isVisible(repository, items, null, teamspace);
				if (isVisible) {
					this._addActionToMenu(this._actionsMenu, action, repository, items, listType, callbackMap, teamspace, resultSet, parameterMap);
				} else if (parameterMap && parameterMap.hideNotVisibleItems) {
					var mi = this._addActionToMenu(this._actionsMenu, action, repository, items, listType, callbackMap, teamspace, resultSet, parameterMap);
					if (mi) {
						domStyle.set(mi.domNode, "display", "none");
					}
				}
			}
			return this._actionsMenu;
		},

		/**
		 * @private Add the action as menu item to the action menu.
		 */
		_addActionToMenu: function(menu, action, repository, items, listType, callbackMap, teamspace, resultSet, parameterMap) {
			if (action.id.substr(0, "Separator".length) == "Separator") {
				if (!this._isPrevSeparator) {
					this._isPrevSeparator = true;
					menu.addChild(new MenuSeparator());
				}
			} else {
				this._isPrevSeparator = false;
				if (action.subActions && action.subActions.length > 0) {
					var hasVisibleSubItems = false;
					var hasEnabledSubItems = false;
					for ( var i in action.subActions) {
						var subaction = action.subActions[i];
						if (subaction.isVisible(repository, items, null, teamspace)) {
							hasVisibleSubItems = true;
							if (subaction.isEnabled(repository, listType, items, teamspace, resultSet)) {
								hasEnabledSubItems = true;
							}
						}
						if (hasVisibleSubItems && hasEnabledSubItems) {
							break;
						}
					}

					if (hasVisibleSubItems) {
						var subMenu = new Menu({});
						var popupMenuItem = new PopupMenuItem({
							label: action.name,
							popup: subMenu,
							disabled: !hasEnabledSubItems,
							iconClass: action.iconClass? action.iconClass : ""
						});
						popupMenuItem.startup();
						menu.addChild(popupMenuItem);

						//if (hasEnabledSubItems) {
						for ( var i in action.subActions) {
							var subaction = action.subActions[i];
							if (subaction.isVisible(repository, items, null, teamspace)) {
								this._addActionToMenu(subMenu, subaction, repository, items, listType, callbackMap, teamspace, resultSet, parameterMap);
							}
						}
						//}
						return popupMenuItem;
					}
				} else {
					var mi = new MenuItem({
						label: action.name,
						disabled: !action.isEnabled(repository, listType, items, teamspace, resultSet),
						iconClass: action.iconClass? action.iconClass : "",
						onClick: function(evt) {
							var callback = null;
							if (callbackMap) {
								if (callbackMap[action.id]) {
									callback = callbackMap[action.id];
								} else if (callbackMap["ALL"]) {
									callback = callbackMap["ALL"];
								}
							}
							setTimeout(function() {
								registry.getEnclosingWidget(evt.target).action.performAction(repository, items, callback, teamspace, resultSet, parameterMap);
							}, 100);
						}
					});
					mi.action = action;
					menu.addChild(mi);
					return mi;
				}
			}
		}
	});
});

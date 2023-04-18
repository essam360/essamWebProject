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
	"dojo/dom-class",
	"dojo/keys",
	"dojo/window",
	"dojo/dnd/Manager",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/registry",
	"../Messages",
	"../model/Desktop",
	"./ActionMenu",
	"./FavoritesTree",
	"ecm/widget/dialog/LoginDialog"
], //
function(declare, lang, array, event, aspect, domClass, keys, win, DNDManager, Menu, MenuItem, registry, Messages, Desktop, ActionMenu, FavoritesTree, LoginDialog) {
	/**
	 * @name ecm.widget.MySyncedFilesTree
	 * @class Provides a widget that contains a tree that is used to display the user’s synced items.
	 * @augments ecm.widget.Tree
	 * @since 2.0.3.5
	 */
	return declare("ecm.widget.MySyncedFilesTree", [
		FavoritesTree
	], {
		/** @lends ecm.widget.MySyncedFilesTree.prototype */

		/**
		 * Enable drag and drop.
		 */
		enableDnd: true,
		/**
		 * The dnd controller to be used by dijit.Tree.
		 */
		dndController: "ecm.widget.TreeDndSource",

		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmFolderTree"); // not really a folder tree, but use same styles
			this.own(aspect.after(this.domNode, "oncontextmenu", lang.hitch(this, "_onContextMenu"), true));
			this.own(aspect.after(ecm.model.desktop, "onChange", lang.hitch(this, this._onDesktopChange), true));
			this.own(aspect.after(this.model, "onProcessingComplete", lang.hitch(this, "_onProcessingComplete"), true));
			this.own(aspect.after(this.model, "_onRefreshRoot", lang.hitch(this, "_onRefreshRoot"), true));
			this.own(aspect.after(this, "onClick", lang.hitch(this, "_onTreeClick"), true));
			this.own(aspect.after(DNDManager.manager(), "_setCopyStatus", lang.hitch(this, "_setCopyStatus"), true));

			this.own(aspect.after(this, "_contextMenuCreated", lang.hitch(this, function(targetNode, menu, selectedItems) {
			}), true));
			this.own(aspect.after(this.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.shiftKey && evt.keyCode == keys.F10) {
					this._onContextMenu(evt);
				}
			}), true));
		},

		/**
		 * @private Event fired when the context menu should be displayed.
		 * @param evt
		 *            The event.
		 */
		_onContextMenu: function(evt) {
			event.stop(evt);
			var targetNode = registry.getEnclosingWidget(evt.target);
			var item = targetNode.item;
			if (item) {
				var loginHideHandle = aspect.after(LoginDialog.getLoginDialog(), "onHide", lang.hitch(this, function() {
					this._createActionsMenu(item, targetNode, evt, true);

					if (loginHideHandle)
						loginHideHandle.remove();
				}));

				var errorHideHandle = null;
				var layout = Desktop.getLayout();
				if (layout && layout._errorDialog) {
					errorHideHandle = aspect.after(layout._errorDialog, "onHide", lang.hitch(this, function() {
						this._createActionsMenu(item, targetNode, evt, true);

						if (errorHideHandle)
							errorHideHandle.remove();
					}));
				}
				
				if(item === this.rootObject){
					if (errorHideHandle)
							errorHideHandle.remove();

						this._createActionsMenu(item, targetNode, evt, false);
				}
				else{
					LoginDialog.checkLogin(item.repository, lang.hitch(this, function() {
						if (loginHideHandle)
							loginHideHandle.remove();
	
						if (item.isInstanceOf && item.isInstanceOf(ecm.model.SyncItem)) {
							if (!item.item && item != this.rootObject) {
								item.retrieveSyncItem(lang.hitch(this, function(obj) {
									if (errorHideHandle)
										errorHideHandle.remove();
	
									this._createActionsMenu(item, targetNode, evt, false);
								}));
							} else {
								if (errorHideHandle)
									errorHideHandle.remove();
	
								this._createActionsMenu(item, targetNode, evt, false);
							}
						} else {
							if (errorHideHandle)
								errorHideHandle.remove();
	
							this._createActionsMenu(item, targetNode, evt, false);
						}
					}));
				}
			}
			return false;
		},

		/**
		 * @private Event fired when the items change.
		 * @param modelObjects
		 *            The modelObjects that changed.
		 */
		_onChangeItems: function(modelObjects) {
			if (lang.isArray(modelObjects)) {
				for ( var i = 0; i < modelObjects.length; i++) {
					var changedModel = modelObjects[i];
					if (changedModel.isInstanceOf && changedModel.isInstanceOf(ecm.model.SyncItem)) {
						if (!changedModel.originalId || changedModel.originalId == changedModel.id) { // id didn't change
							var itemNodes = this.getNodesByItem(changedModel);
							if (itemNodes) {
								array.forEach(itemNodes, function(itemNode) {
									if (itemNode && itemNode.item) {
										itemNode.item.name = changedModel.name;
										if (!changedModel.item && changedModel != this.rootObject) {
											changedModel.retrieveSyncItem(lang.hitch(this, function(obj) {
												lang.mixin(itemNode.item, changedModel);
												this._onItemChange(itemNode.item); //updates the label if this changed
											}));
										} else {
											if (changedModel.item) {
												lang.mixin(itemNode.item, changedModel);
											}
											this._onItemChange(itemNode.item); //updates the label if this changed
										}
										//dijitTree does not update the text direction when label is changed and textDir is auto
										if (this.textDir === "auto") {
											this.applyTextDir(itemNode.focusNode);
										}
									}
								}, this);
							}
						}
					}
				}
			}
		},

		/**
		 * Returns the action menu type for the specified item.
		 * 
		 * @param item
		 *            The item for which to get the action menu type.
		 * @param loadBaseMenu
		 *            Boolean indicating whether to load just the base sync item actions. If false, item-specific
		 *            context menus will be loaded.
		 * @return The context menu type string.
		 */
		getActionsMenuType: function(item, loadBaseMenu) {
			if (loadBaseMenu) {
				return "MySyncedFilesContextMenu";
			}

			// If there are all folders, use the folder context menu, if they're are any sync item then
			// wee need to use the my synced files context menus
			var contextMenuType = "FolderContextMenu";
			if (item.isInstanceOf) {
				if (item.isInstanceOf(ecm.model.SyncItem)) {
					var favType = item.type;
					if (favType == "teamspace") {
						contextMenuType = "MySyncedFilesTeamspaceContextMenu";
					} else {
						contextMenuType = "MySyncedFilesFolderContextMenu";
					}
				}
			}
			return contextMenuType;
		},

		/**
		 * Create the action menu for the specified info.
		 * 
		 * @param item
		 *            The selected item.
		 * @param targetNode
		 *            The target node.
		 * @param evt
		 *            The event.
		 * @param loadBaseMenu
		 *            Boolean indicating whether to load just the base sync item actions. If false, item-specific
		 *            context menus will be loaded.
		 */
		_createActionsMenu: function(item, targetNode, evt, loadBaseMenu) {
			var selectedItems = [
				item
			];
			var target = evt.target;
			var coords = null;
			if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
				coords = {
					x: evt.pageX,
					y: evt.pageY
				};
			}

			if (item && item == this.rootObject && this.rootObject.isInstanceOf(ecm.model.SyncItem)) {
				if (!this.rootMenu) {
					this.rootMenu = new Menu();
					var self = this;
					var mi = new MenuItem({
						label: ecm.messages.refresh,
						onClick: function(evt) {
							ecm.model.desktop.clearSyncItems();

							// Reload sync item from server
							self.model.reload(function(items) {
								self.onRefresh(items);
							});
						}
					});
					this.rootMenu.addChild(mi);
				}
				this._contextMenuCreated(target, coords, this.rootMenu, selectedItems);
			} else {
				if (this._actionsMenu) {
					var childMenuItems = this._actionsMenu.getChildren();
					array.forEach(childMenuItems, function(child) {
						child.destroy();
					}, this);
				}

				if (!this._actionMenuCreator) {
					this._actionMenuCreator = new ActionMenu();
				}

				var menuType = this.getActionsMenuType(item, loadBaseMenu);
				ecm.model.desktop.loadMenuActions(menuType, lang.hitch(this, function(actions) {
					var listType = this._context;
					if (menuType == "MySyncedFilesTeamspaceContextMenu" || menuType == "MySyncedFilesFolderContextMenu" || menuType == "MySyncedFilesContextMenu" || menuType == "MySyncedFilesFolderContextMenuCM") {
						listType = "MySyncedFiles";
					}
					this._actionsMenu = this._actionMenuCreator.createMenu(actions, selectedItems, listType, this._actionCallbackMap, item.repository, null, null, {
						widget: this
					});
					this._contextMenuCreated(target, coords, this._actionsMenu, selectedItems);
				}));
			}
		},

		/**
		 * Returns the icon class for the specified item.
		 * 
		 * @param item
		 *            The item in the tree.
		 * @param opened
		 *            Boolean indicating if opened.
		 */
		getIconClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			var iconClass = this.inherited(arguments);
			// The item can only be a SearchTemplate, a Teamspace, or a Folder.
			// Folder uses default icon so handle the other two.
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.SyncItem)) {
				iconClass = item.getMimeClass();
			} else if (item.attributes.type == "teamspace") {
				iconClass = "ecmTeamspaceIcon";
			}
			return iconClass;
		}
	});
});

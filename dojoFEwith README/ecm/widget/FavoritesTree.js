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
	"./Tree",
	"ecm/model/_EditServiceMixin",
	"ecm/widget/dialog/LoginDialog"
], //
function(declare, lang, array, event, aspect, domClass, keys, win, DNDManager, Menu, MenuItem, registry, Messages, Desktop, ActionMenu, Tree, _EditServiceMixin, LoginDialog) {
	/**
	 * @name ecm.widget.FavoritesTree
	 * @class Provides a widget that contains a tree that is used to display the user’s favorites.
	 * @augments ecm.widget.Tree
	 */
	return declare("ecm.widget.FavoritesTree", [
		Tree,
		_EditServiceMixin
	], {
		/** @lends ecm.widget.FavoritesTree.prototype */

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
			this.own(aspect.after(ecm.model.desktop, "onFavoriteUpdated", lang.hitch(this, "_onChangeItems"), true));
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
		 * Handle when the model has completed processing an item.
		 * 
		 * @param item
		 *            The item.
		 */
		_onProcessingComplete: function(item) {
			// This returns the tree node's progress indicator back normal if errors occur during retrieve of children
			var node = this.getNodesByItem(item)[0];
			if (node != null) {
				node.unmarkProcessing();
				node.state = "UNCHECKED";
				node._expandNodeDeferred = null;
				node._loadDeferred = null;
			}
		},

		/**
		 * @private If the root contains the input item, then reload the children in the root.
		 */
		_onRefreshRoot: function(item) {
			var rootChildren = this.rootNode.getChildren();
			if (rootChildren) {
				for ( var i in rootChildren) {
					var treeNode = rootChildren[i];
					if (treeNode && treeNode.item && treeNode.item.item && treeNode.item.item.id && treeNode.item.item.id == item.id) {
						this.model.reloadChildren(item, treeNode.item);
					}
				}
			}
		},

		/**
		 * @private When user hits the control key, dojo doesn't call checkItemAcceptance - adding code below for this
		 *          scenario.
		 */
		_setCopyStatus: function(copy) {
			var m = DNDManager.manager();
			if (m.target && m.target.current && m.target.tree) { // m.target.current is TreeNode mouse is over
				if (m.target.tree.checkItemAcceptance(m.target.current.rowNode, m.source)) {
					m.canDrop(true);
				} else {
					m.canDrop(false);
				}
			}
		},

		/**
		 * Checks if the tree can accept nodes from this source.
		 * 
		 * @param source
		 *            {dijit.tree._dndSource} The source which provides items.
		 * @param nodes
		 *            Array of DOM nodes corresponding to nodes being dropped, dijitTreeRow nodes if source is a
		 *            dijit.Tree.
		 * @return {Boolean} true if the tree can accept nodes.
		 */
		checkAcceptance: function(source, nodes) {
			return true;
		},

		/**
		 * Checks if the tree can accept the item.
		 * 
		 * @param target
		 *            The target.
		 * @param source
		 *            {dijit.tree._dndSource} The source which provides items.
		 * @return {Boolean} true if the tree target can accept nodes.
		 */
		checkItemAcceptance: function(target, source, position) {
			var bool = this.tree.checkItemAcceptance2(target, source, position);
			setTimeout(function() {
				DNDManager.manager().canDrop(bool);
			}, 10);
			return bool;
		},

		/**
		 * @private Called when the tree is clicked.
		 */
		_onTreeClick: function(item, node, evt) {
			if (item.continuationData) {
				node.labelNode.innerHTML = "<span class='dijitContentPaneLoading'></span>";

				//wipe out the more link reference on the parent node since it's being expanded right now
				if (item.parent.moreLink) {
					delete item.parent.moreLink;
				}

				// make sure after the request comes back we scroll back to the last node
				var parent = node.domNode.parentNode;
				var onComplete = lang.hitch(this, function() {
					win.scrollIntoView(parent.lastChild);
					this.onPagingComplete();
				});
				this.onPagingStart();
				this.model.fetchNextPage(item.pagedResultSet, item.parent, onComplete);
			} else {
				this.onItemSelected(item, node);
			}
		},

		/**
		 * Event indicating item opened.
		 * 
		 * @param item
		 *            The item to open.
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object that contains the item's result set.
		 */
		onOpenItem: function(item, resultSet) {
		},

		/**
		 * Event fired indicating the item is selected.
		 * 
		 * @param item
		 *            The item that is selected.
		 * @param node
		 *            The node that is selected.
		 */
		onItemSelected: function(item, node) {
		},

		/**
		 * Event fired indicating the paging start.
		 */
		onPagingStart: function() {
		},

		/**
		 * Event fired indicating paging complete.
		 */
		onPagingComplete: function() {
		},

		/**
		 * Returns the nodes with the input item.
		 * 
		 * @param item
		 *            The item.
		 * @return The array of tree nodes having the specified item.
		 */
		getNodesByItem: function(item) {
			var nodes = [];
			if (item) {
				var identity = lang.isString(item) ? item : this.model.getIdentity(item);
				if (identity) {
					var itemNodes = this._itemNodesMap[identity];
					if (itemNodes) {
						nodes = nodes.concat(itemNodes);
					}
					// check corresponding favorite IDs prefixed by the repository ID
					var repository = item.repository;
					if (repository && repository.id) {
						identity = [
							repository.id,
							identity
						].join(".");
						//the identity is repositoryid.docId, but the favorite id is desktopid.userid.repositoryid.docId, so need to check if the favoriteid contains identity
						for (key in this._itemNodesMap) {
							if (key.indexOf(identity) > -1) {
								itemNodes = this._itemNodesMap[key];
							}

						}
						if (itemNodes) {
							nodes = nodes.concat(itemNodes);
						}
					}
				}
			}
			return nodes;
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
	
						if (item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite)) {
							if (!item.item && item != this.rootObject) {
								item.retrieveFavorite(lang.hitch(this, function(obj) {
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
				for (var i = 0; i < modelObjects.length; i++) {
					var changedModel = modelObjects[i];
					if (changedModel.isInstanceOf && changedModel.isInstanceOf(ecm.model.Favorite)) {
						if (!changedModel.originalId || changedModel.originalId == changedModel.id) { // id didn't change
							var itemNodes = this.getNodesByItem(changedModel);
							if (itemNodes) {
								array.forEach(itemNodes, function(itemNode) {
									if (itemNode && itemNode.item) {
										itemNode.item.name = changedModel.name;
										if (!changedModel.item && changedModel != this.rootObject) {
											changedModel.retrieveFavorite(lang.hitch(this, function(obj) {
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
		 * Event fired when the desktop changes.
		 * 
		 * @param items
		 *            The array of items that changed.
		 */
		_onDesktopChange: function(items) {
			if (items) {
				if (lang.isArray(items)) { // modify or delete items
					array.forEach(items, function(item) {
						var nodes = this.getNodesByItem(item);
						if (nodes && nodes.length > 0) {
							if (item.deleted) { // delete
								this._onItemDelete(item);
							} else {
							//when onDesktopChange, the items is array of ContentItem, _onItemChange need ecm.model.Favorite 
								for ( var i = 0; i < nodes.length; i++) {
									if (nodes[i].item) {
										nodes[i].item.item = item;
										nodes[i].item.syncEnabled = item.syncEnabled;
										this._onItemChange(nodes[i].item);
									}
								}
							}
						}
					}, this);
				} else { // new child item
					var item = items;
					var nodes = this.getNodesByItem(item);
					if (nodes && nodes.length > 0) {
						this.model.reloadChildren(item);
					}
					// let's see if this item is in a Favorite model object with the item of the Favorite
					var rootChildren = this.rootNode.getChildren();
					if (rootChildren) {
						for ( var i in rootChildren) {
							var treeNode = rootChildren[i];
							if (treeNode && treeNode.item && treeNode.item.item && treeNode.item.item.id) {
								if (treeNode.item.item.id == item.id) {
									this.model.reloadChildren(item, treeNode.item);
								}
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
		 *            Boolean indicating whether to load just the base favorite actions. If false, item-specific context
		 *            menus will be loaded.
		 * @return The context menu type string.
		 */
		getActionsMenuType: function(item, loadBaseMenu) {
			if (loadBaseMenu) {
				return "FavoriteContextMenu";
			}

			// If there are all folders, use the folder context menu, if they're are any favorites then
			// wee need to use the favorites context menus
			var contextMenuType = "FolderContextMenu";
			if (item.isInstanceOf) {
				if (item.isInstanceOf(ecm.model.Favorite)) {
					var favType = item.type;
					if (favType == "search") {
						contextMenuType = "FavoriteSearchTemplateContextMenu";
					} else if (favType == "teamspace") {
						contextMenuType = "FavoriteTeamspaceContextMenu";
					} else if (favType == "folder" && item.repository && item.repository.type == "cm") {
						contextMenuType = "FavoriteFolderContextMenuCM";
					} else {
						contextMenuType = "FavoriteFolderContextMenu";
					}
				} else if (item.isInstanceOf(ecm.model._SearchTemplateBase)) {
					contextMenuType = "SearchTemplateContextMenu";
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
		 *            Boolean indicating whether to load just the base favorite actions. If false, item-specific context
		 *            menus will be loaded.
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

			if (item && item == this.rootObject && this.rootObject.isInstanceOf(ecm.model.Favorite)) {
				if (!this.rootMenu) {
					this.rootMenu = new Menu();
					var self = this;
					var mi = new MenuItem({
						label: ecm.messages.refresh,
						onClick: function(evt) {
							ecm.model.desktop.clearFavorites();

							// Reload favorites from server
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
					this._addEditServiceActions(item.repository, actions);
					var listType = this._context;
					if (menuType == "FavoriteSearchTemplateContextMenu" || menuType == "FavoriteTeamspaceContextMenu" || menuType == "FavoriteFolderContextMenu" || menuType == "FavoriteContextMenu" || menuType == "FavoriteFolderContextMenuCM") {
						listType = "Favorites";
					}
					this._actionsMenu = this._actionMenuCreator.createMenu(actions, selectedItems, listType, this._actionCallbackMap, item.repository, null, null, {
						widget: this
					});
					this._contextMenuCreated(target, coords, this._actionsMenu, selectedItems);
				}));
			}
		},

		/**
		 * @private Displays the context menu.
		 */
		_contextMenuCreated: function(target, coords, menu, selectedItems) {
			this.onContextMenuCreated(selectedItems, menu);
			var treeNode = this._getTreeRowNode(target);
			domClass.add(treeNode, "ecmTreeNodeContextMenuHover");
			menu._openMyself({
				target: target,
				coords: coords
			});
			this.own(aspect.after(menu, "_onBlur", lang.hitch(this, function() {
				domClass.remove(treeNode, "ecmTreeNodeContextMenuHover");
			}), true));
		},

		/**
		 * @private Returns the tree row node for the input node.
		 * @param inputNode
		 *            The input node.
		 */
		_getTreeRowNode: function(inputNode) {
			var node = inputNode;
			while (node) {
				if (domClass.contains(node, "dijitTreeRow")) {
					break;
				}
				node = node.parentElement;
			}
			return node ? node : inputNode;
		},

		/**
		 * Event fired when the context menu is created.
		 * 
		 * @param selectedItems
		 *            The selected items.
		 * @param menu
		 *            The menu.
		 */
		onContextMenuCreated: function(selectedItems, menu) {
		},

		/**
		 * Event fired when refresh.
		 * 
		 * @param items
		 *            The items.
		 */
		onRefresh: function(items) {
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
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite)) {
				iconClass = item.getMimeClass();
			} else if (item.attributes.type == "teamspace") {
				iconClass = "ecmTeamspaceIcon";
			} else if (item.attributes.type == "search") {
				iconClass = item.getMimeClass();
			}
			return iconClass;
		}
	});
});

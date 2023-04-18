/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/keys",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/model/Desktop",
	"dijit/Tree",
	"dijit/registry",
	"ecm/model/Action",
	"ecm/widget/admin/ActionMenu",
	"ecm/widget/admin/model/NavigatorAdminCategoryObject",
	"dojo/text!./templates/AdminTree.html"
],

function(declare, lang, event, has, aspect, keys, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, Desktop, Tree, registry, Action, ActionMenu, NavigatorAdminCategoryObject, template) {

	/**
	 * @name ecm.widget.admin.AdminTree
	 * @class Provides a navigation tree for administration objects such as desktops, labels, menus, plug-ins,
	 *        repositories, settings, and viewer maps.
	 */
	return declare("ecm.widget.admin.AdminTree", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.admin.AdminTree.prototype */

		// widgetsInTemplate: Boolean
		// 		Set this to true if your widget contains other widgets
		widgetsInTemplate: true,
		templateString: template,

		_tree: null,
		_treeModel: null,

		getModel: function() {
			return this._treeModel;
		},

		getTree: function() {
			return this._tree;
		},

		/**
		 * Set the tree model and show the tree.
		 */
		setModel: function(model) {
			this._treeModel = model;
			this._tree = new Tree({
				model: this._treeModel,
				showRoot: false,
				autoExpand: false,
				onOpen: lang.hitch(this, "onOpen"),
				persist: false,
				"aria-label": ecm.messages.admin_tree_label,
				textDir: has("text-direction"),
				getIconClass: this._getIconClass
			});
			this.domNode.appendChild(this._tree.domNode);

			this._connectEvents();
		},

		destroy: function() {
			this._cleanUpTree();
			if (this._actionMenuCreator) {
				this._actionMenuCreator.destroy();
			}
			this.inherited(arguments);
		},

		/**
		 * Fired when a tree node is open.
		 * 
		 * @since 2.0.3
		 */
		onOpen: function(item, node) {
		},

		/*
		 * Internal functions
		 */

		_getIconClass: function(item, opened) {
			return item.getIconClass(opened);
		},

		_connectEvents: function() {
			this.own(aspect.after(this._tree, "onClick", lang.hitch(this, "_onTreeClick"), true));
			this.own(aspect.after(this._tree, "_onExpandoClick", lang.hitch(this, "_onTreeExpandoClick"), true));
			this.own(aspect.after(this._tree.domNode, "oncontextmenu", lang.hitch(this, "_onRightClick"), true));
			this.own(aspect.after(this._tree.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.shiftKey && evt.keyCode == keys.F10) {
					this._onRightClick(evt);
				}
			}), true));
		},

		_cleanUpTree: function() {
			// Clean up the tree
			var model = this.getModel();
			if (model) {
				model._rootNode.getChildren(lang.hitch(this, function(children) {
					// Delete NavigatorAdminCategoryObject children
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (child && child.isInstanceOf && child.isInstanceOf(NavigatorAdminCategoryObject)) {
							if (child._children.length > 0) {
								for (var j = 0; j < child._children.length; j++) {
									var categoryChild = child._children[j];
									this.getModel().onDelete(categoryChild); // This removes the item from tree
									if (categoryChild.destroy) {
										categoryChild.destroy();
									}
									delete this.categoryChild;
								}
							}
							child._children = [];
							child._childrenLoaded = false;
							if (child._myTabWidgetInstance) {
								if (child._myTabWidgetInstance.destroyRecursive) {
									child._myTabWidgetInstance.destroyRecursive();
								} else if (child._myTabWidgetInstance.destroy) {
									child._myTabWidgetInstance.destroy();
								}
								child._myTabWidgetInstance = null;
							}
						}
					}
					// Update tree so that if logon again, the expand icon is shown & works
					var childrenNodes = this._tree.rootNode.getChildren();
					for (var i = 0; i < childrenNodes.length; i++) {
						var childNode = childrenNodes[i];
						if (childNode.item._mayHaveChildren && !childNode.isExpandable) { // this is an item where we deleted the children above
							childNode.isExpandable = true;
							childNode.isExpanded = false;
							if (childNode._expandNodeDeferred) {
								delete childNode._expandNodeDeferred;
							}
							childNode.state = "UNCHECKED";
							childNode._setExpando(false);
						}
					}
				}));
			}
		},

		_onTreeClick: function(item, node, evt) {
			item.onClick();
		},

		_onTreeExpandoClick: function(message) {
			message.node.item._onExpandoClick(message.node.isExpanded);
		},

		_onRightClick: function(evt) {
			event.stop(evt);
			var treeItem = registry.getEnclosingWidget(evt.target).item;
			if (!this._actionMenuCreator) {
				this._actionMenuCreator = new ActionMenu();
				this.own(aspect.after(this._actionMenuCreator, "onAction", lang.hitch(this, function(treeItems, action) {
					treeItems[0].processAction(action.id, action.repositoryTypes);
				}), true));
			}
			var menu = this._actionMenuCreator.createMenu(treeItem.getMenuActions(), [
				treeItem
			]);
			var coords = null;
			if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
				coords = {
					x: evt.pageX,
					y: evt.pageY
				};
			}
			menu._openMyself({
				target: evt.target,
				coords: coords
			});
			return false;
		}
	});

});

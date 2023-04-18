/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/event",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/keys",
	"dojo/window",
	"dijit/Tree",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/text!./templates/WorklistSelector.html",
	"ecm/model/Desktop",
	"ecm/model/WorklistsTreeModel"
],

function(declare, event, lang, connect, domClass, domGeom, keys, win, Tree, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template, Desktop, WorklistsTreeModel) {

	/**
	 * @name ecm.widget.WorklistSelector
	 * @class Provides a widget that contains a tree that is used to navigate process workflow items. This widget
	 *        displays the available worklists, process roles, and in-baskets for selection.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.WorklistSelector", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.WorklistSelector.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_style: "tree",

		// function  call back passed on to the tree dijit , see dijit.Tree for more details 
		getIconClass: null,

		postCreate: function() {
			this.inherited(arguments);
			if (this.repository) {
				this._createRendering();
			}
		},

		/**
		 * Clears the selected node in the list.
		 */
		clearSelection: function() {
			if (this._tree && this._tree.selectedItems) {
				var selectedNodes = this._tree.getNodesByItem(this._tree.selectedItems[0]);

				if (selectedNodes && selectedNodes.length > 0) {
					selectedNodes[0].setSelected(false);
				}
			}
		},

		/**
		 * Sets the repository to use for filtering the list.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			if (this._treeModel) {
				this._treeModel = null;
			}
			if (this.repository) {
				this._createRendering();
			} else {
				if (this._dropdown) {
					this._dropdown.destroy();
				}
				if (this._tree) {
					this._tree.destroy();
				}
			}
		},

		/**
		 * Sets the style of the selector. The supported styles: <code>tree</code>.
		 * 
		 * @param style
		 *            Selector style (tree).
		 */
		setStyle: function(style) {
			this._style = style;
		},

		/**
		 * Creates the widget rendering.
		 */
		_createRendering: function() {
			this._createTree();

			this.connect(this._tree.domNode, "oncontextmenu", "_onContentMenu");
			this.connect(this._tree.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.shiftKey && evt.keyCode == keys.F10) {
					this._onContentMenu(evt);
				}
			}));
		},

		/**
		 * Creates a tree to display the list of search templates.
		 */
		_createTree: function() {
			if (this._dropdown) {
				this._dropdown.destroy();
			}
			if (this._tree) {
				this._tree.destroy();
			}
			if (!this._treeModel) {
				this._treeModel = new WorklistsTreeModel({
					repository: this.repository
				});
				connect.connect(ecm.model.desktop, "onActiveRepositoryChanged", this, function(repository) {
					this._treeModel.setRepository(repository);
				});
			}

			this.getIconClass = this.getIconClass ? this.getIconClass : function(item, opened) {
				if (item && item.isInstanceOf) {
					if (item.isInstanceOf(ecm.model.ProcessApplicationSpace)) {
						return "ecmAppSpaceIcon";
					} else if (item.isInstanceOf(ecm.model.ProcessRole)) {
						return "ecmRoleIcon";
					} else if (item.isInstanceOf(ecm.model.ProcessInbasket)) {
						return "ecmInbasketIcon";
					}
				}
				return (item && this.model.mayHaveChildren(item)) ? (opened ? "dijitFolderOpened" : "dijitFolderClosed") : "dijitLeaf";
			};

			this._tree = new dijit.Tree({
				model: this._treeModel,
				showRoot: false,
				persist: false,
				openOnClick: true,
				getIconClass: this.getIconClass,
				singular: true, // single selection for the tree
				"aria-label": ecm.messages.work_tree_label,
				getTooltip: function(item) {
					if (item && item.isInstanceOf) {
						if (item.isInstanceOf(ecm.model.ProcessApplicationSpace)) {
							return ecm.messages.process_application_space;
						} else if (item.isInstanceOf(ecm.model.ProcessRole)) {
							return ecm.messages.process_role;
						} else if (item.isInstanceOf(ecm.model.ProcessInbasket)) {
							return ecm.messages.process_inbasket;
						} else if (item.isInstanceOf(ecm.model.Worklist)) {
							return ecm.messages.process_worklist;
						}
					}
					return "";
				}
			});
			connect.connect(this._tree, "onClick", this, "_onTreeClick");
			connect.connect(this._tree, "onDblClick", this, "_onTreeClick");
			connect.connect(this._tree, "onOpen", this, "_onTreeOpen");

			// This returns the tree node's progress indicator back normal if errors occur during retrieve of children
			this.connect(this._treeModel, "onProcessingComplete", function(item) {
				var node = this._tree.getNodesByItem(item)[0];
				node.unmarkProcessing();
				node.state = "UNCHECKED";
				node._expandNodeDeferred = null;
			});

			this.connect(this._treeModel, "onChildrenChange", function(parentItem, items) {
				if (items.length == 1) {
					// If there is only one item and its a Inbasket go ahead and select it.
					var item = items[0];
					if (item.isInstanceOf && (item.isInstanceOf(ecm.model.ProcessInbasket) || item.isInstanceOf(ecm.model.Worklist))) {
						this._selectItem(item);
					}
				}
			});

			this.domNode.appendChild(this._tree.domNode);

			// The ContentPane div above the tree provides the scroll bars, turn off dijitTree so the scroll bars don't get messed up
			domClass.remove(this._tree.domNode, "dijitTree");
			this.resize();
		},

		/**
		 * Resizes the tree.
		 */
		resize: function() {
			var pn = this.getParent();
			if (pn) {
				if (pn.titleBarNode != null) {
					domGeom.setMarginBox(this.domNode, domGeom.getContentBox(pn.containerNode));
				} else {
					domGeom.setMarginBox(this.domNode, domGeom.getContentBox(pn.domNode));
				}
			}

			if (this._tree && this._tree.domNode) {
				var mb = domGeom.getMarginBox(this.domNode);
				if (mb && mb.h > 0) {
					this._tree.resize(mb);
				}
			}
		},

		/**
		 * Selects the input item in the tree, scrolls it into view, and calls <code>onClick</code>.
		 * 
		 * @param item
		 *            The item to select.
		 */
		_selectItem: function(item) {
			this._tree.set('selectedItems', [
				item
			]);
			var itemNodes = this._tree.getNodesByItem(item);
			var node = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
			if (node) {
				win.scrollIntoView(node.rowNode);
			}
			this._tree.onClick(item, node);
		},

		/**
		 * Handles a tree click event.
		 * 
		 * @param item
		 *            The selected item.
		 * @param node
		 *            The tree node selected.
		 * @param evt
		 *            Event handle.
		 */
		_onTreeClick: function(item, node, evt) {
			if (item.isInstanceOf) {
				if (item.isInstanceOf(ecm.model.Worklist)) {
					this.onWorklistSelected(item);
				} else if (item.isInstanceOf(ecm.model.ProcessApplicationSpace)) {
					this.onProcessApplicationSpaceSelected(item);
				} else if (item.isInstanceOf(ecm.model.ProcessRole)) {
					this.onProcessRoleSelected(item);
				}
			}
		},

		/**
		 * Handles a tree open event.
		 * 
		 * @param item
		 *            The selected item.
		 * @param node
		 *            The tree node selected.
		 * @param evt
		 *            Event handle.
		 */
		_onTreeOpen: function(item, node, evt) {
			if (item.isInstanceOf) {
				if (item.isInstanceOf(ecm.model.Worklist)) {
					this.onWorklistSelected(item);
				} else if (item.isInstanceOf(ecm.model.ProcessApplicationSpace)) {
					this.onProcessApplicationSpaceSelected(item);
				} else if (item.isInstanceOf(ecm.model.ProcessRole)) {
//					this.onProcessRoleSelected(item);
				}
			}
		},

		/**
		 * @private Handles the context menu request, currently there are no context menus that are displayed in this
		 *          widget.
		 */
		_onContentMenu: function(evt) {
			event.stop(evt);
			return false;
		},

		/**
		 * Event fired when a worklist or in-basket is selected.
		 * 
		 * @param worklist
		 *            Selected {@link ecm.model.WorkList} or {@link ecm.model.ProcessInbasket} object.
		 */
		onWorklistSelected: function(worklist) {
		},

		/**
		 * Event fired when a process role is selected.
		 * 
		 * @param role
		 *            Selected {@link ecm.model.ProcessRole} object.
		 */
		onProcessRoleSelected: function(role) {
		},

		/**
		 * Event fired when a process application space is selected.
		 * 
		 * @param applicationSpace
		 *            Selected {@link ecm.model.ProcessApplicationSpace} object.
		 */
		onProcessApplicationSpaceSelected: function(applicationSpace) {
		}

	});
});

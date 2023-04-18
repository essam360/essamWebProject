/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/event",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dnd/Manager",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/aspect",
	"dojo/keys",
	"dojo/window",
	"dijit/_Contained",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"../Messages",
	"../model/AttachmentTreeModel",
	"../model/Desktop",
	"../model/FolderTreeModel",
	"../model/Item",
	"../model/Teamspace",
	"./ActionMenu",
	"./Tree",
	"./TreeDndSource",
	"ecm/model/_EditServiceMixin",
	"dojo/has!dojo-bidi?dijit/_BidiSupport",
	"dojo/text!./templates/FolderTree.html"
], //
function(declare, //
event, //
lang, //
has, //
DNDManager, //
domConstruct, //
domGeom, //
domClass, //
aspect, //
keys, //
win, //
_Contained, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
registry, //
Messages, //
AttachmentTreeModel, //
Desktop, //
FolderTreeModel, //
Item, //
Teamspace, //
ActionMenu, //
Tree, //
TreeDndSource, //
_EditServiceMixin,//
bidiExtension,//
template) {

	/**
	 * @name ecm.widget.FolderTree
	 * @class Provides a widget that is used to browse the folders in a repository.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.FolderTree", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_EditServiceMixin,
		_Contained
	], {
		/** @lends ecm.widget.FolderTree.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * {@link ecm.model.FolderTreeModel} or {@link ecm.model.AttachmentTreeModel}
		 */
		treeModel: null,
		/**
		 * Boolean indicating if the root should be shown.
		 */
		showRoot: true,
		/**
		 * {@link ecm.model.Teamspace}
		 */
		teamspace: null,
		/**
		 * Boolean indicating if the tree should show folders only.
		 */
		showFoldersOnly: false,
		/**
		 * Boolean to pass into the <code>dijit.Tree</code>.
		 */
		persist: false,
		/**
		 * The dnd controller to pass into the <code>dijit.Tree</code>.
		 */
		dndController: "ecm.widget.TreeDndSource",
		/**
		 * The root folder id.
		 */
		rootFolderId: "",
		/**
		 * Default context menu type.
		 */
		contextMenuType: "FolderContextMenu",
		/**
		 * Boolean indicating if the root should be selected after the tree is created.
		 */
		selectRootInitially: true,
		/**
		 * Optional callback method used in <code>getTreeRowClass</code> method.
		 */
		getRowClassCallback: null,
		/**
		 * Boolean indicating listen for <code>oncontextmenu</code>.
		 */
		enableCtxMenu: true,
		/**
		 * Boolean indicating that drag-and-drop is enabled.
		 */
		enableDnd: true,
		/**
		 * Base Text Direction to pass into the <code>dijit.Tree</code>.When it is set its value should be ltr,rtl or
		 * auto.
		 */
		textDir: has("text-direction"),
		/**
		 * @private
		 */
		_style: "tree",
		/**
		 * @private
		 */
		_messages: ecm.messages,
		/**
		 * @private
		 */
		_rootFolderName: null,
		/**
		 * Identify if the search in control is opened when building teamspace or templates.
		 */
		teamspacemode: false,
		/**
		 * The teamspace name to pass into the <code>FolderTreeModel</code> widget.
		 */
		teamspacename: "",
		/**
		 * The filter type to pass into the <code>FolderTreeModel</code> widget.
		 */
		filterType: null,
		/**
		 * Aria label for the tree.
		 * 
		 * @since 2.0.2
		 */
		"aria-label": "",
		/**
		 * If the first node or children are teamspaces items, the root node is not displayed.
		 */
		isFirstChildTeamspaces: false,

		/**
		 * An teamspace id to filter from the list of teamspaces.
		 * 
		 * @since 2.0.3
		 */
		rootItemToFilter: null,

		postCreate: function() {
			this.inherited(arguments);

			if (this.repository && this.repository.canListFolders()) {
				this._createTreeModel();
			}
			this.own(aspect.after(ecm.model.desktop, "onActiveTeamspaceChanged", lang.hitch(this, "_createTreeModel"), true));
			this.own(aspect.after(DNDManager.manager(), "_setCopyStatus", lang.hitch(this, "_setCopyStatus"), true));

			this._actionCallbackMap = {};
			this._actionCallbackMap["ALL"] = this._contextMenuItemRefresh;
		},

		/**
		 * Sets the repository.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 * @param objectStore
		 *            The object store name on the repository.
		 * @param rootFolderId
		 *            The root folder Id to initialize this tree with after the repository changed.
		 */
		setRepository: function(repository, objectStore, rootFolderId) {
			this.repository = repository;
			this._objectStore = objectStore;
			if (this.repository && repository.canListFolders()) {
				this._rootObject = repository;

				if (rootFolderId)
					this.rootFolderId = rootFolderId;
				else
					this.rootFolderId = "";
				this._createTreeModel();
			} else if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}
		},

		/**
		 * Sets the teamspace.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Teamspace} object.
		 * @param objectStore
		 *            The object store name on the repository.
		 */
		setTeamspace: function(teamspace, objectStore) {
			if (teamspace) {
				this.repository = teamspace.repository;
				this._objectStore = objectStore;
				this._rootObject = teamspace;
				this.teamspace = teamspace;
				this._createTreeModel(teamspace);
			}
		},

		/**
		 * Sets the root folder.
		 * 
		 * @param folder
		 *            A {@link ecm.model.ContentItem} object.
		 */
		setFolder: function(folder) {
			if (folder) {
				this.repository = folder.repository;
				this._rootObject = folder;
				this._createTreeModel(folder);
			}
		},

		/**
		 * Sets the root work item.
		 * 
		 * @param workItem
		 *            A {@link ecm.model.WorkItem} object.
		 */
		setWorkItem: function(workItem) {
			if (workItem) {
				this.repository = workItem.repository;
				this._rootObject = workItem;
				this._createTreeModel(workItem);
			}
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
				this._tree.resize(domGeom.getMarginBox(this.domNode));
			}
		},

		/**
		 * Returns the tree model.
		 * 
		 * @return {@link ecm.model.FolderTreeModel} or {@link ecm.model.AttachmentTreeModel}
		 */
		getTreeModel: function() {
			return this.treeModel;
		},

		/**
		 * @private Creates the tree model.
		 */
		_createTreeModel: function(param) {
			domConstruct.place(domConstruct.create("DIV"), this.domNode, "only"); // clear the domNode, just in case no "/" item
			// param passed in from dojo connect can be repository, teamspace or folder.
			if (param && param.isInstanceOf && ((param.isInstanceOf(ecm.model.Teamspace)) || (param.isInstanceOf(ecm.model.Item)))) {
				this.rootFolderId = param.id; // for now name is the doc id, could map it to path for db name later
			}

			if (param && param.isFolder && !param.isFolder() && param.isWorkItem()) {
				var repository = this.repository;
				if (repository) {
					var rootItemId = param.id;
					if (this.treeModel) {
						this.treeModel.destroy();
						this.treeModel = null;
					}
					this.treeModel = new AttachmentTreeModel(param, true);
					this._createRendering();
				}
			} else {
				var repository = this.repository;
				if (repository && repository.canListFolders()) {
					var rootItemId = this.rootFolderId || "/";
					repository.retrieveItem(rootItemId, lang.hitch(this, function(rootFolder) {
						this._retrieveItemResponse(rootFolder, param, this);
					}), null, null, null, this._objectStore ? this._objectStore.id : "");
				}
			}
		},

		/**
		 * @private The response after retrieving the root.
		 */
		_retrieveItemResponse: function(rootFolder, param, _this) {
			// Some CM systems (ex pre 8.4.3) don't have root folders.
			if (rootFolder != null) {
				// Keep track of whether the root item is a favorite.
				if (param && param._isFavorite) {
					rootFolder._isFavorite = param._isFavorite;
				}
				// Set the root node name.
				if (this.rootFolderId) {
					// Don't use setters for setting name to avoid issues with publish/subscribe.
					if (rootFolder.attributes[ecm.model.Teamspace.NAME_ATTRIBUTE] != null || rootFolder.attributes[ecm.model.Teamspace.TITLE_ATTRIBUTE] != null) {
						if (rootFolder.attributes[ecm.model.Teamspace.NAME_ATTRIBUTE])
							rootFolder.name = rootFolder.attributes.ClbTeamspaceName;
						else
							rootFolder.name = rootFolder.attributes.clbTitle;
					} else {
						// folder root node.
					}
					if (this.teamspace) {
						rootFolder.usesClasses = this.teamspace.usesClasses;
					}
				} else {
					rootFolder.name = this.repository.name;
				}
				var repoOsName = this.repository.objectStoreName;
				if (this._rootFolderName != null && this._rootFolderName != "") {
					rootFolder.name = this._rootFolderName;
				} else if (this._objectStore && this._objectStore.symbolicName != repoOsName) {
					var repo = ecm.model.desktop.getRepositoryOfObjectStore(this._objectStore.symbolicName, this.repository.domainId);
					if (repo)
						rootFolder.name = repo.name;
					else
						rootFolder.name = this._objectStore.displayName;
				}
				if (_this.treeModel) {
					_this.treeModel.destroy();
					_this.treeModel = null;
				}
				_this.treeModel = new FolderTreeModel(rootFolder, _this.showFoldersOnly, _this.isFirstChildTeamspaces, _this.teamspacemode, _this.teamspacename, _this.filterType);
				_this.treeModel.rootItemToFilter = _this.rootItemToFilter;
				if (this.teamspace) {
					_this.treeModel._teamspaceId = _this.teamspace.id;
				}
				_this._createRendering();
			}
		},

		/**
		 * Selects the path.
		 * 
		 * @param path
		 *            The path to select.
		 */
		_setPathAttr: function(/*Item[] || String[]*/path) {
			if (this._tree && path) {
				this._tree._setPath(path);
			}
		},

		/**
		 * Sets the selected item.
		 * 
		 * @param item
		 *            The item to select.
		 */
		_setSelectedItemAttr: function(/*dojo.data.Item or id*/item) {
			if (this._tree && item) {
				if (!item.parent || this._tree.model.isLoaded(item.parent)) {
					this._tree._selectItem(item);
				} else {
					var parentNode = this._tree.getNodesByItem(item.parent);
					if (parentNode && parentNode.length > 0 && parentNode[0]) {
						var deferred = this._tree._expandNode(parentNode[0]);
						deferred.then(lang.hitch(this, function() {
							this._tree._selectItem(item);
						}));
					}
				}
			}
		},

		/**
		 * Sets the style of the selector. Only "tree" is supported.
		 */
		setStyle: function(style) {
			this._style = style;
		},

		/**
		 * @private Creates the tree and listens to events.
		 */
		_createRendering: function() {
			this._createTree();

			if (this.enableCtxMenu == true) {
				this.own(aspect.after(this._tree.domNode, "oncontextmenu", lang.hitch(this, "_onContentMenu"), true));
				this.own(aspect.after(this._tree.domNode, "onkeydown", lang.hitch(this, function(evt) {
					if (evt.shiftKey && evt.keyCode == keys.F10) {
						this._onContentMenu(evt);
					}
				}), true));
			}
			this.own(aspect.after(this._tree, "onClick", lang.hitch(this, "_onTreeClick"), true));
			this.own(aspect.after(this._tree, "onDblClick", lang.hitch(this, "onItemDblClick"), true));
			this.own(aspect.after(this._tree, "_onProcessingComplete", lang.hitch(this, "onProcessingComplete"), true));
			this.own(aspect.after(this._tree, "_onProcessingStarted", lang.hitch(this, "onProcessingStarted"), true));

			// Select the root node if required.
			var deferred = this._tree._expandNode(this._tree.rootNode);
			if (this.selectRootInitially == true) {
				deferred.then(lang.hitch(this, function() {
					this.set('selectedItem', this._tree.rootNode.item);
					this.onRendered();
				}));
			} else {
				this.onRendered();
			}
		},

		/**
		 * Event fired after the tree is rendered.
		 */
		onRendered: function() {
		},

		/**
		 * @private Creates the tree internally
		 */
		_createTree: function() {
			if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}

			//If first node or children is teamspaces items, the root node is not displayed
			if (this.isFirstChildTeamspaces == true) {
				this.showRoot = false;
			}

			var tree = this.createTree({
				"aria-label": this["aria-label"],
				model: this.treeModel,
				showRoot: this.showRoot,
				persist: this.persist,
				teamspace: this.teamspace,
				dndController: this.dndController,
				enableDnd: this.enableDnd,
				checkAcceptance: this.checkAcceptance,
				checkItemAcceptance: this.checkItemAcceptance,
				rootObject: this._rootObject,
				showMissingFolderMessage: false,
				textDir: this.textDir
			});

			//mantains backwards compatibility with R2 where we set the this._tree directly
			if (tree)
				this._tree = tree;

			domConstruct.place(this._tree.domNode, this.domNode, "only");
			this.resize();
		},

		/**
		 * Creates the tree.
		 * 
		 * @param params
		 *            The parameters used to create the tree
		 */
		createTree: function(params) {
			if (params) {
				params.getRowClass = lang.hitch(this, this.getTreeRowClass);
			}

			return new Tree(params);
		},

		/**
		 * Returns true if the path is selected.
		 * 
		 * @param path
		 *            The path.
		 */
		isPathSelected: function(path) {
			return this._tree.isPathSelected(path);
		},

		/**
		 * @private Shows the context menu.
		 */
		_onContentMenu: function(evt) {
			event.stop(evt);
			if (!this._actionMenuCreator) {
				this._actionMenuCreator = new ActionMenu();
			}
			var targetNode = registry.getEnclosingWidget(evt.target);
			var item = targetNode.item;
			if (item) {
				this._contextMenuItem = item;
				var contextMenuType = this.getContextMenuType(targetNode);
				ecm.model.desktop.loadMenuActions(contextMenuType, lang.hitch(this, function(actions) {
					this._addEditServiceActions(item.repository, actions);
					var menu = this._actionMenuCreator.createMenu(actions, [
						item
					], null, this._actionCallbackMap, this.repository, this.teamspace, null, {
						widget: this
					});
					this.onContextMenuCreated(this._actionMenuCreator, [
						item
					]);
					var treeNode = this._getTreeRowNode(evt.target);
					domClass.add(treeNode, "ecmTreeNodeContextMenuHover");

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
					this.own(aspect.after(menu, "_onBlur", lang.hitch(this, function() {
						domClass.remove(treeNode, "ecmTreeNodeContextMenuHover");
					}), true));
				}));
			}
			return false;
		},

		/**
		 * @private Returns the tree row node for the input node.
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
		 * Returns the context menu type for the input target node.
		 * 
		 * @param targetNode
		 *            The target node.
		 * @return The string context menu type.
		 */
		getContextMenuType: function(targetNode) {
			var type = this.contextMenuType;
			if (targetNode == this._tree.rootNode) {
				type = this.teamspace == null ? "ObjectStoreFolderContextMenu" : "TeamspaceFolderContextMenu";
			} else if (targetNode.item.isInstanceOf && targetNode.item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				type = "SearchTemplateContextMenu";
			} else if (targetNode.item.isInstanceOf && targetNode.item.isInstanceOf(ecm.model.AttachmentItem)) {
				type = "AttachmentContextMenu";
			}
			return type;
		},

		/**
		 * Event invoked when the context menus have been constructed. This is used to alter the menu items if
		 * necessary.
		 * 
		 * @param actionMenu
		 *            A {@link ecm.widget.ActionMenu} object.
		 * @param items
		 *            The array of items selected.
		 */
		onContextMenuCreated: function(actionMenu, items) {
		},

		/**
		 * @private Callback when context menu action completes.
		 */
		_contextMenuItemRefresh: function() {
			if (this._contextMenuItem) {
				this._contextMenuItem.refresh(this._contextMenuItem);
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
					this.onLoadedNextPage();
					var parentNode = this._tree.getNodesByItem(item.parent);
					if (parentNode && parentNode.length > 0)
						this._tree.focusNode(parentNode[0]);
					win.scrollIntoView(parent.lastChild);
				});
				this.treeModel.fetchNextPage(item.pagedResultSet, item.parent, onComplete);

			} else {
				this.onItemSelected(item, node);
			}
		},

		/**
		 * Event fired when open an item. Called by the context menu actions.
		 * 
		 * @param item
		 *            The item to open.
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object that contains the item's resultSet.
		 */
		onOpenItem: function(item, resultSet) {
		},

		/**
		 * Returns the selected item in the tree.
		 */
		getSelectedItem: function() {
			return this._tree.selectedItem;
		},

		/**
		 * Event fired when next page is loaded.
		 */
		onLoadedNextPage: function() {
		},

		/**
		 * Event fired when processing is complete.
		 */
		onProcessingComplete: function() {
		},

		/**
		 * Event fired when processing is started.
		 */
		onProcessingStarted: function() {
		},

		/**
		 * Returns the tree row class for the input item.
		 * 
		 * @param item
		 *            The item in the tree.
		 */
		getTreeRowClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			var rowClass = null;
			if (this.getRowClassCallback != null) {
				rowClass = this.getRowClassCallback(item, opened);
			}
			if (rowClass == null) {
				rowClass = this.inherited(arguments);
			}
			return rowClass;
		},

		/**
		 * Event called when an item is double-clicked.
		 */
		onItemDblClick: function() {
		},

		/**
		 * Event called when a item is selected.
		 * 
		 * @param item
		 *            The tree item selected.
		 * @param node
		 *            The tree node selected.
		 */
		onItemSelected: function(item, node) {
			ecm.model.desktop.setSelectedItems([
				item
			]);
		},

		destroy: function() {
			if (this.treeModel) {
				this.treeModel.destroy();
				this.treeModel = null;
			}
			if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}
			if (this._actionMenuCreator) {
				this._actionMenuCreator.destroy();
				this._actionMenuCreator = null;
			}
			this.inherited(arguments);
		}
	});
});

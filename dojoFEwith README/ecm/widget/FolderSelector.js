/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/query", //
	"dojo/aspect",
	"dojo/dom-style", //
	"dojo/dom-geometry", //
	"dojo/keys", //
	"dojo/number", //
	"dojo/window", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/form/CheckBox", //
	"dijit/registry", //
	"dijit/Tooltip", //
	"dijit/layout/utils", //
	"../Messages", //
	"../LoggerMixin", //
	"../model/Item", //
	"../model/Teamspace", //
	"../model/Repository", //
	"../model/SelectedFolder", //
	"./FolderTree", //
	"dojo/text!./templates/FolderSelector.html"
], //
function(declare, //
lang, //
query, //
aspect, //
domStyle, //
domGeom, //
keys, //
number, //
win, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
CheckBox, //
registry, //
Tooltip, //
layoutUtils, //
Messages, //
LoggerMixin, //
Item, //
Teamspace, //
Repository, //
SelectedFolder, //
FolderTree, //
template) {

	/**
	 * @name ecm.widget.FolderSelector
	 * @class Provides a widget that is used to select folders in a repository, teamspace, or parent folder.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.FolderSelector", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.FolderSelector.prototype */

		// summary:
		//      Widget used to select a folder.
		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Whether the include subfolders checkbox should be displayed.
		 */
		showIncludeSubfolders: false,

		/**
		 * Whether the root node should be selectable.
		 */
		preventSelectRoot: false,

		/**
		 * String displayed in tooltip when user hovers over root node when it is not selectable.
		 */
		preventSelectRootTooltip: null,

		/**
		 * Whether the root node should be selected initially.
		 */
		selectRootInitially: true,

		/**
		 * Either dropdown or inline. Use dropdown when displaying in the FolderSelectorDropDown widget.
		 */
		style: "dropdown",

		/**
		 * Array of {@link ecm.widget.UnselectableFolder} objects that represent folders that will be unselectable in
		 * the tree.
		 */
		unselectableFolders: null,

		/**
		 * The {@link ecm.model.Respository} object.
		 */
		repository: null,

		/**
		 * Boolean indicating whether the control should be used to select a folder in a teamspace.
		 */
		teamspacemode: false,

		/**
		 * The name of the teamspace.
		 */
		teamspacename: "",

		/**
		 * Boolean indicating whether to avoid recreating the internal folder tree initially.
		 * 
		 * @since 2.0.3
		 */
		avoidInitialTreeCreation: true,

		/**
		 * An teamspace id of a node to filter from the list of teamspaces.
		 * 
		 * @since 2.0.3
		 */
		rootItemToFilter: null,
		_selectedItem: null,
		_messages: ecm.messages,
		_isRepository: true,
		_teamspace: null,
		_isSelectableCallback: null,
		_root: null,
		_incSubfoldersCheckbox: null,
		_navigationDijit: null,
		_toolTipTarget: null,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);

			// Remove some empty attributes dojo adds by default that RPT complains
			// about.
			this._folderTree.domNode.removeAttribute("lang");
			this._folderTree.domNode.removeAttribute("dir");

			this._includeSubfoldersCheckBox.domNode.removeAttribute("lang");
			this._includeSubfoldersCheckBox.domNode.removeAttribute("dir");

			// Set controls that may be shared with the control sheet.
			if (this.style == "inline") {
				this._incSubfoldersCheckbox = this._includeSubfoldersCheckBox;
			}

			this.logExit(methodName);
		},

		/**
		 * Sets the style of the control to be displayed inline in a widget, or in a dropdown control (see
		 * {@link ecm.widget._FolderSelectorDropDown}).
		 * 
		 * @public
		 * @param style
		 *            A String, either "inline" or "dropdown".
		 */
		setStyle: function(style) {
			var methodName = "setStyle";
			this.logEntry(methodName, "style = " + style);

			this.style = style;
			if (this.style == "inline") {
				this._incSubfoldersCheckbox = this._includeSubfoldersCheckBox;
			}

			this.logExit(methodName);
		},

		/**
		 * Sets the root repository, teamspace or folder of the control.
		 * 
		 * @public
		 * @param root
		 *            An ecm.model.Repository, ecm.model.Teamspace, or ecm.model.Item to be used as the root node of the
		 *            control.
		 * @param objectStore
		 *            The object store for the root object. May be null.
		 */
		setRoot: function(root, objectStore) {
			var methodName = "setRoot";
			this.logEntry(methodName, "rootObject = " + root.name);

			// Fire the onPagingStart event so dropdown containers will handle creating the tree appropriately.
			this.onPagingStart();

			this._root = root;
			this._objectStore = objectStore || (this._root.getObjectStore && this._root.getObjectStore());

			if (this.preventSelectRoot == true) {
				this.selectRootInitially = false;
			}
			this._folderTree.isFirstChildTeamspaces = this.isFirstNodeasTeamspaces;
			this._folderTree.teamspacemode = this.teamspacemode;
			this._folderTree.teamspacename = this.teamspacename;
			this._folderTree.rootItemToFilter = this.rootItemToFilter;
			// If we are setting a new root node, recreate the folder tree.
			if (!this.avoidInitialTreeCreation) {
				this._recreateFolderTree();
				this._folderTree.isFirstChildTeamspaces = this.isFirstNodeasTeamspaces;
				this._folderTree.teamspacemode = this.teamspacemode;
				this._folderTree.teamspacename = this.teamspacename;
			}
			this.avoidInitialTreeCreation = false;

			if (this.preventSelectRoot == true || this._isSelectableCallback != null || (this.unselectableFolders != null && this.unselectableFolders.length > 0)) {

				// Callback function used to set styling of first node in tree.
				this._folderTree.getRowClassCallback = lang.hitch(this, function(item, opened) {
					if (this.preventSelectRoot == true && item.parent == null) {
						item.isSelectable = false;
						if (this.preventSelectRootTooltip != null) {
							item.notSelectableTooltip = this.preventSelectRootTooltip;
						}
					} //if the ecm/widget/FolderSelectorCallback obj is provided, use that to call the isSelectableCallback function.  This is done to prevent global changes to the FolderSelectorCallback permissions
					else if (this._isSelectableCallback != null) {
						if (this._isSelectableCallbackObject != null) {
							item.isSelectable = this._isSelectableCallback.apply(this._isSelectableCallbackObject, [
								item,
								this._isSelectableCallbackObject.permissionToCheck || this._isSelectableCallback.permissionToCheck
							]);
						} else if (this._isSelectableCallback.permissionToCheck)
							item.isSelectable = this._isSelectableCallback(item, this._isSelectableCallback.permissionToCheck);

						if (item.isSelectable == false) {
							item.notSelectableTooltip = this._isSelectableCallbackObject ? this._isSelectableCallbackObject.notSelectableTooltip : this._isSelectableCallback.notSelectableTooltip;
						}
					}
					if (item.isSelectable == true && this.unselectableFolders != null && this.unselectableFolders.length > 0) {
						for (i in this.unselectableFolders) {
							if (this.unselectableFolders[i].folderId == item.id) {
								item.notSelectableTooltip = this.unselectableFolders[i].tooltipMessage;
								item.isSelectable = false;
								break;
							}

							// If the allowSelectChildren flag is false, check that the current item isn't a child.
							if (this.unselectableFolders[i].allowSelectChildren == false) {
								var parent = item.parent;
								while (parent != null) {
									if (this.unselectableFolders[i].folderId == parent.id) {
										item.notSelectableTooltip = this.unselectableFolders[i].tooltipMessage;
										item.isSelectable = false;
										break;
									}
									parent = parent.parent;
								}
							}
						}
					}
					if (item.isSelectable == false) {
						return "ecmFolderNotSelectable";
					}
				});
			}

			this._folderTree.selectRootInitially = this.selectRootInitially;

			if (this._root && this._root.isInstanceOf && this._root.isInstanceOf(ecm.model.Repository)) {
				this._isRepository = true;
				this.repository = root;
				this.logDebug(methodName, "Root object is repository");
			} else if (root && root.isInstanceOf && root.isInstanceOf(ecm.model.Teamspace)) {
				this._isRepository = false;
				this.repository = root.repository;
				this._teamspace = root;
				this.logDebug(methodName, "Root object is teamspace");
			} else if (root && root.isInstanceOf && root.isInstanceOf(ecm.model.Item) && root.isFolder() == true) {
				this._isRepository = false;
				this.repository = root.repository;
				this.logDebug(methodName, "Root object is folder");
			} else {
				this.logDebug(methodName, "Invalid root object");
				throw ("Invalid ecm.widget.FolderSelector.setRoot: Invalid object type");
			}

			this._setFolderTreeRoot();

			if (this.selectRootInitially == true) {
				this._incSubfoldersCheckbox.set('checked', true);
				this._incSubfoldersCheckbox.set('disabled', this._isRepository);
			}

			this.logExit(methodName);
		},

		/**
		 * @private Creates the folder tree internally
		 */
		_createFolderTree: function() {
			var methodName = "_createFolderTree";
			this.logEntry(methodName);

			if (this._folderTree != null) {
				this._folderTree.destroy();
				this._folderTree = null;
			}

			var folderTree = this.createFolderTree({
				'aria-label': ecm.messages.browse_tree_label,
				'dojoAttachPoint': '_folderTree',
				'showFoldersOnly': 'true',
				'enableCtxMenu': 'false',
				'enableDnd': 'false',
				'class': 'folderTree',
				"rootItemToFilter": this.rootItemToFilter
			});

			//mantains backwards compatibility with R2 where we set this._folderTree directly
			if (folderTree)
				this._folderTree = folderTree;

			this.logExit(methodName);
		},

		/**
		 * Creates the folder tree
		 * 
		 * @public
		 * @param params
		 *            The parameters used to create the folder tree
		 */
		createFolderTree: function(params) {
			var methodName = "createFolderTree";
			this.logEntry(methodName);
			// 26452 - name collision
			return new ecm.widget.FolderTree(params);

			this.logExit(methodName);
		},

		isFirstNodeasTeamspaces: false,

		/*
		 * Recreates the folder tree when the control is re-initialized
		 */
		_recreateFolderTree: function() {
			var methodName = "_recreateFolderTree";
			this.logEntry(methodName);

			this._createFolderTree();

			this.connect(this._folderTree, "onItemSelected", function(item) {
				this.onFolderSelect(item);
			});
			this.connect(this._folderTree, "onItemDblClick", function(item) {
				this._onTreeDblClick();
			});
			this.connect(this._folderTree, "onProcessingStarted", function() {
				this.onPagingStart();
			});
			;
			this.connect(this._folderTree, "onProcessingComplete", function() {
				this.onPagingComplete();
			});
			this.domNode.insertBefore(this._folderTree.domNode, this._includeSubfoldersNode);

			this.connect(this._folderTree, "onRendered", "onFolderTreeRendered");

			this.logExit(methodName);
		},

		/*
		 * Sets the root of the contained ecm.model.FolderTree widget
		 */
		_setFolderTreeRoot: function() {
			var methodName = "_setFolderTreeRoot";
			this.logEntry(methodName);

			// Set the root of the FolderTree dijit.
			if (this._root && this._root.isInstanceOf) {
				if (this._root.isInstanceOf(ecm.model.Repository)) {
					this._folderTree.setRepository(this._root, this._objectStore);
				} else if (this._root.isInstanceOf(ecm.model.Teamspace)) {
					this._folderTree.setTeamspace(this._root, this._objectStore);
				} else if (this._root.isInstanceOf(ecm.model.Item) && this._root.isFolder() == true) {
					this._folderTree.setFolder(this._root);
				}
			}

			this.connect(this._folderTree.domNode, "onkeyup", lang.hitch(this, function(evt) {
				if (evt.keyCode != keys.ESCAPE) {
					if (this._toolTipTarget) {
						this._hideTooltip(this._toolTipTarget);
					}
					this._toolTipTarget = evt.target;
					this._displayTooltip(registry.getEnclosingWidget(evt.target), evt.target);
				}
			}));
			this.connect(this._folderTree.domNode, "onkeydown", lang.hitch(this, function(evt) {
				this._hideTooltip(evt.target);
				if (this._toolTipTarget != null) {
					this._hideTooltip(this._toolTipTarget);
					this._toolTipTarget = null;
				}
			}));

			this.connect(this._folderTree.domNode, "onmouseover", lang.hitch(this, function(evt) {
				this._toolTipTarget = evt.target;
				this._displayTooltip(registry.getEnclosingWidget(evt.target), evt.target);
			}));
			this.connect(this._folderTree.domNode, "onmouseout", lang.hitch(this, function(evt) {
				this._hideTooltip(evt.target);
				if (this._toolTipTarget != null) {
					this._hideTooltip(this._toolTipTarget);
					this._toolTipTarget = null;
				}
			}));

			this.logExit(methodName);
		},

		/**
		 * @since 2.0.3
		 */
		hideTooltip: function() {
			var methodName = "hideTooltip";
			this.logEntry(methodName);

			if (this._showTooltipTimer) {
				clearTimeout(this._showTooltipTimer);
				delete this._showTooltipTimer;
			}

			if (this._toolTipTarget != null) {
				this._hideTooltip(this._toolTipTarget);
				this._toolTipTarget = null;
			}

			this.logExit(methodName);
		},

		/*
		 * Hides the tooltip that may be displayed when the mouse hovers over non-selectable nodes in the tree
		 */
		_hideTooltip: function(domNode) {
			var methodName = "_hideTooltip";
			this.logEntry(methodName);

			if (this._showTooltipTimer) {
				clearTimeout(this._showTooltipTimer);
				delete this._showTooltipTimer;
			}
			Tooltip.hide(domNode);

			this.logExit(methodName);
		},

		/*
		 * Displays a tooltip over a non-selectable folder node in the tree.
		 */
		_displayTooltip: function(treeNode, domNode) {
			var methodName = "_displayTooltip";
			this.logEntry(methodName);

			this._hideTooltip(this.domNode);
			if (treeNode && treeNode.item && treeNode.item.isSelectable == false) {

				if (this._showTooltipTimer) {
					clearTimeout(this._showTooltipTimer);
					delete this._showTooltipTimer;
				}

				if (treeNode.item.notSelectableTooltip && domNode) {
					this._showTooltipTimer = setTimeout(lang.hitch(this, function() {
						Tooltip.show(treeNode.item.notSelectableTooltip, domNode);
					}), 700);
				}
			}

			this.logExit(methodName);
		},

		/**
		 * Selects the root node in the tree.
		 * 
		 * @public
		 */
		selectRootNode: function() {
			var methodName = "selectRootNode";
			this.logEntry(methodName);

			this._folderTree._tree.focusNode(this._folderTree._tree.rootNode);
			this._folderTree.set('selectedItem', this._folderTree._tree.rootNode.item);
			var labelNodes = query(".dijitTreeLabelFocused");
			this._toolTipTarget = labelNodes[0];
//		this._displayTooltip(this._folderTree._tree.rootNode, labelNodes[0]);

			this.logExit(methodName);
		},

		/**
		 * Sets the callback function to determine whether a folder is selectable.
		 * 
		 * @public
		 * @param callbackFunction
		 *            The function used to determine whether a folder is selectable.
		 * @param callbackObject
		 *            An instance of ecm/widget/FolderSelectorCallback. This callback will be used to call the
		 *            callbackFunction
		 */
		setIsSelectableCallback: function(callbackFunction, callbackObject) {
			var methodName = "setIsSelectableCallback";
			this.logEntry(methodName);

			this._isSelectableCallback = callbackFunction;
			this._isSelectableCallbackObject = callbackObject;

			this.logExit(methodName);
		},

		/**
		 * Sets folders that will be unselectable in the control.
		 * 
		 * @public
		 * @param unselectableFolders
		 *            Array of {@link ecm.widget.UnselectableFolder} objects where the corresponding folder nodes in the
		 *            control will not be selectable.
		 */
		setUnselectableFolders: function(unselectableFolders) {
			var methodName = "setUnselectableFolders";
			this.logEntry(methodName);

			this.unselectableFolders = unselectableFolders;

			this.logExit(methodName);
		},

		/**
		 * Sets the teamspace. Needed when the root object is a folder.
		 * 
		 * @public
		 * @param teamspace
		 *            A {link ecm.model.Teamspace} object. Used when the root of the control is a folder in a teamspace.
		 */
		setTeamspace: function(teamspace) {
			var methodName = "setTeamspace";
			this.logEntry(methodName);

			this._teamspace = teamspace;

			this.logExit(methodName);
		},

		/**
		 * Returns the function used to determine whether folders in the tree are selectable.
		 * 
		 * @public
		 * @returns The callback function set in setIsSelectableCallback, used to determine whether a folder is
		 *          seletable in the control.
		 */
		getIsSelectableCallback: function() {
			return this._isSelectableCallback;
		},

		/**
		 * Sets the initially selected folder.
		 * 
		 * @public
		 * @param folder
		 *            {link ecm.model.item} object that is the initially selected folder.
		 */
		setSelected: function(/*ecm.model.item*/folder) {
			var methodName = "setSelected";
			this.logEntry(methodName);

			this._selectedItem = folder;
			if (this._teamspace && folder.id == this._teamspace.id)
				this._selectedItem.name = this._getTeamsplaceName(folder);
			this.repository = folder.repository;

			this.logExit(methodName);
		},

		_getTeamsplaceName: function(folder) {
			var name = folder.name;
			if (folder.attributes[ecm.model.Teamspace.NAME_ATTRIBUTE] != null)
				name = folder.attributes[ecm.model.Teamspace.NAME_ATTRIBUTE];
			else if (folder.attributes[ecm.model.Teamspace.TITLE_ATTRIBUTE] != null)
				name = folder.attributes[ecm.model.Teamspace.TITLE_ATTRIBUTE];
			return name;
		},

		/**
		 * Returns an ecm.model.SelectedFolder object representing the selected folder.
		 * 
		 * @public
		 * @param inRepo
		 *            A {Boolean} value indicating that the repository should be selected.
		 * @return A {@link ecm.model.Item) object that is the selected folder in the control.
		 */
		getSelected: function(inRepo) {

			var selectedFolder = null;

			if (this._selectedItem != null) {
				var includeSubfolders = false;
				if (this.showIncludeSubfolders == true) {
					includeSubfolders = this._incSubfoldersCheckbox.get("checked");
				}
				var repositoryOrTeamspace = this._teamspace ? this._teamspace : this.repository;
				selectedFolder = new SelectedFolder(this._selectedItem, includeSubfolders, repositoryOrTeamspace, inRepo);

				if (this.isFirstNodeasTeamspaces)
					selectedFolder.isTeamspaceSubFolder = true;
				else
					selectedFolder.isTeamspaceSubFolder = false;

			}
			return selectedFolder;
		},

		/**
		 * Scrolls the selected folder into view if it is not visible.
		 * 
		 * @public
		 */
		scrollSelectedIntoView: function() {
			var methodName = "scrollSelectedIntoView";
			this.logEntry(methodName);

			var node = null;
			if (this._folderTree._tree.selectedNode != null) {
				node = this._folderTree._tree.selectedNode;
			} else if (this._folderTree._tree.lastFocused != null) {
				node = this._folderTree._tree.lastFocused;
			}

			// Don't try to scroll to a continuation node.
			if (node && node.item.continuationData == null) {
				setTimeout(lang.hitch(this, function() {
					win.scrollIntoView(node.rowNode);
					this._folderTree._tree.focusNode(node);
					var labelNodes = query(".dijitTreeLabelFocused");
					this._toolTipTarget = labelNodes[0];
					this._displayTooltip(node, labelNodes[0]);
				}), 500);
			}

			this.logExit(methodName);
		},

		/**
		 * Event fired when a folder is selected by the user.
		 * 
		 * @param item
		 *            A {@link ecm.model.Item} object that is the seleted folder.
		 */
		onFolderSelect: function(item) {
			var methodName = "onFolderSelect";
			this.logEntry(methodName);

			/* (Selection not showing in the tree on initial folder select)
			// Need to do this because when we select programatically
			// sometimes the node remains highlighted.
			if (this._selectedItem) {
				var tree = this._folderTree._tree;
				if (tree._itemNodesMap[this._selectedItem.id]) {
					var selectedNode = tree._itemNodesMap[this._selectedItem.id][0];
					if (selectedNode) {
						var tree = this._folderTree._tree;
						selectedNode.setSelected(false);
					}
				}
			} */

			// If the item is not selectable, don't allow selection.
			if (item.isSelectable != null && item.isSelectable == false) {
				this._selectedItem = null;
			} else {
				var isRoot = false;
				if (item.parent == null) {
					isRoot = true;
				}

				if (isRoot) {
					// If this is the root folder, we need to check for selectability the first time
					// it is selected.
					var rootIsSelectable = true;

					//if the ecm/widget/FolderSelectorCallback obj is provided, use that to call the isSelectableCallback function
					if (this._isSelectableCallback != null) {
						if (this._isSelectableCallbackObject != null) {
							item.isSelectable = this._isSelectableCallback.apply(this._isSelectableCallbackObject, [
								item,
								this._isSelectableCallbackObject.permissionToCheck || this._isSelectableCallback.permissionToCheck
							]);
						} else if (this._isSelectableCallback.permissionToCheck)
							item.isSelectable = this._isSelectableCallback(item, this._isSelectableCallback.permissionToCheck);

						if (item.isSelectable == false) {
							rootIsSelectable = false;
						}
					}
					if (rootIsSelectable) {
						this._selectedItem = item;
					}
					// If they select the repository, include subfolders if needed.
					if (this.showIncludeSubfolders == true && this._isRepository == true) {
						this._incSubfoldersCheckbox.set('checked', true);
						this._incSubfoldersCheckbox.set('disabled', true);
					}
				} else {
					this._selectedItem = item;
					if (this.showIncludeSubfolders == true) {
						this._incSubfoldersCheckbox.set('disabled', false);
					}
				}
			}

			this.logExit(methodName);
		},

		/*
		 * Event fired when the underlying FolderTree widget begins paging.
		 */
		onPagingStart: function() {
		},

		/*
		 * Event fired when paging in the the underlying FolderTree widget is complete.
		 */
		onPagingComplete: function() {
		},

		/*
		 * Event fired when user double clicks in tree.
		 */
		_onTreeDblClick: function() {
			var methodName = "_onTreeDblClick";
			this.logEntry(methodName);

			if (this._folderTree._tree.selectedItems != null) {
				if (!this.preventSelectRoot || (this.preventSelectRoot && this._folderTree._tree.selectedItems[0].parent != null)) {
					this.onFolderDblClick();
				}
			}

			this.logExit(methodName);
		},

		/*
		 * Event fired when user double clicks a selectable folder.
		 */
		onFolderDblClick: function() {
			var methodName = "onFolderDblClick";
			this.logEntry(methodName);

			if (this._folderTree._tree.selectedItems != null) {
				// Should only be one item selected.
				this.onFolderSelect(this._folderTree._tree.selectedItems[0]);
			}

			this.logExit(methodName);
		},

		/**
		 * Event fired after the folder tree is rendered.
		 * 
		 * @since 2.0.3
		 */
		onFolderTreeRendered: function() {
			this.own(aspect.before(this._folderTree._tree, "_expandNode", lang.hitch(this, function(parent) {
				var processingCompleteHandle = aspect.after(this._folderTree, "onProcessingComplete", lang.hitch(this, function() {
					// If the selected folder is one of the children of the item, select its 
					// node in the tree.
					if (this._selectedItem) {
						setTimeout(lang.hitch(this, function() {
							var tree = this._folderTree._tree;
							if (tree._itemNodesMap[this._selectedItem.id]) {
								var selectedNode = tree._itemNodesMap[this._selectedItem.id][0];
								var selectedNodeParent = selectedNode.getParent();
								if (selectedNode && selectedNodeParent == parent && selectedNode.selected == false) {
									var tree = this._folderTree._tree;
									selectedNode.setSelected(true);
									tree.focusNode(selectedNode);
								}
							}
						}), 300);
					}
					processingCompleteHandle.remove();
				}));
			})));
		},

		/**
		 * Initializes control to display as inline
		 * 
		 * @public
		 */
		startup: function() {
			var methodName = "startup";
			this.logEntry(methodName);

			this.inherited(arguments);

			// Hide the include subfolders control if required.
			if (this.showIncludeSubfolders == false || this.style == "dropdown") {
				domStyle.set(this._includeSubfoldersNode, "display", "none");
			}

			// If style is inline, set overflow in the FolderTree widget
			if (this.style == "inline") {
				domStyle.set(this._folderTree, "overflow", "auto");
			}

			this.resize();

			this.logExit(methodName);
		},

		/**
		 * Resizes the control
		 * 
		 * @public
		 * @param size
		 *            An object that contains the new width and height of the control.
		 */
		resize: function(size) {
			var methodName = "resize";
			this.logEntry(methodName);

			if (size) {
				size = layoutUtils.marginBox2contentBox(this.domNode, size);
			} else {
				size = domGeom.getContentBox(this.domNode);
			}
			// Size the FolderTree dijit depending on whether the include subfolders option is 
			// displayed.
			if (this.style == "inline") {
				var showIncludeSubfoldersHeight = 0;
				var navigationButtonHeight = 0;
				if (this.showIncludeSubfolders == true) {
					var showIncludeSubfoldersPosition = domGeom.getMarginBox(this._includeSubfoldersNode);
					showIncludeSubfoldersHeight = showIncludeSubfoldersPosition.h;
				}
				var treeHeight = number.round(size.h - (showIncludeSubfoldersHeight + navigationButtonHeight));
				domGeom.setMarginBox(this._folderTree.domNode, {
					w: size.w,
					h: treeHeight
				});
				if (this._folderTree._tree) {
					domGeom.setMarginBox(this._folderTree._tree.domNode, {
						w: this._folderTree.domNode.clientWidth,
						h: treeHeight
					});
				}
			} else {
				domGeom.setMarginBox(this._folderTree.domNode, {
					w: size.w,
					h: size.h
				});
			}

			this.logExit(methodName);
		}
	});
});

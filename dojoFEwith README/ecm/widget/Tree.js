/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/_base/event",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/DeferredList",
	"dojo/aspect",
	"dojo/on",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dnd/autoscroll",
	"dojo/dnd/Manager",
	"dojo/string",
	"dojo/window",
	"dijit/registry",
	"dijit/Tree",
	"dijit/_Container",
	"dijit/tree/dndSource",
	"../model/_SearchTemplateBase",
	"../model/Desktop",
	"../model/Repository",
	"../model/Teamspace",
	"../model/Item",
	"../model/ContentItem",
	"../model/AttachmentItem",
	"../model/Favorite",
	"../model/SearchTemplate",
	"../model/Message",
	"../model/Dnd",
	"./dialog/MessageDialog",
	"./dialog/AddContentItemDialog",
	"./_DroppedFilesAddDocMixin"
],

function(declare, //
array, //
Deferred, //
event, //
lang, //
has, //
DeferredList, //
aspect, //
on, //
domAttr, //
domClass, //
domStyle, //
dndAutoscroll, //
DNDManager, //
string, //
win, //
registry, //
Tree, //
_Container, //
dndSource, //
_SearchTemplateBase, //
Desktop, //
Repository, //
Teamspace, //
Item, //
ContentItem, //
AttachmentItem, //
Favorite, //
SearchTemplate, //
Message, //
Dnd, //
MessageDialog, //
AddContentItemDialog, //
_DroppedFilesAddDocMixin) {

	/**
	 * @name ecm.widget.Tree
	 * @class A custom version of <code>dijit.Tree</code> that is used within the IBM Content Navigator widgets.
	 */
	return declare("ecm.widget.Tree", [
		Tree,
		_DroppedFilesAddDocMixin
	], {
		/** @lends ecm.widget.Tree.prototype */

		/**
		 * This tree only supports single selection.
		 */
		singular: true,
		/**
		 * Boolean indicating if <code>true</code>, show a dialog with the error message when the folder is missing
		 * from the tree.
		 */
		showMissingFolderMessage: true,

		postMixInProperties: function() {
			this.inherited(arguments);
			this.dndParams.push("singular");
		},

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this.model, "onProcessingStarted", lang.hitch(this, "_onProcessingStarted"), true));
			this.own(aspect.after(this.model, "onProcessingComplete", lang.hitch(this, "_onProcessingComplete"), true));
			this.own(aspect.after(Desktop, "onChange", lang.hitch(this, "_onChangeItems"), true));
			this.own(aspect.after(this.model, "onChildrenChangeForMove", lang.hitch(this, "_onItemChildrenChangeForMove"), true));

			// The browser supports external drag and drop if it is not IE or the IE version is later than 9.
			if (!has("ie") || has("ie") > 9) {
				// Used for drag & drop from outside the application to inside the tree
				// For DOM node events use "dojo/on".
				this.own(on(this.domNode, "dragenter", lang.hitch(this, "onExternalDragEnter"), true));
				this.own(on(this.domNode, "dragover", lang.hitch(this, "onExternalDragOver"), true));
				this.own(on(this.domNode, "dragexit", lang.hitch(this, "onExternalDragExit"), true));
				this.own(on(this.domNode, "dragleave", lang.hitch(this, "onExternalDragExit"), true));
				this.own(on(this.domNode, "drop", lang.hitch(this, "onExternalDrop"), true));
			}
			this._dndModel = new Dnd();
			this.textDir = has("text-direction");
		},

		/**
		 * Returns the icon class for the item.
		 * 
		 * @param item
		 *            The item.
		 */
		getIconClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			var iconClass = this.inherited(arguments);
			var searchTemplate = item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase);
			if (item.continuationData) {
				iconClass = "ecmNoBackgroundIcon";
			} else if (item.isInstanceOf && item.isInstanceOf(Favorite)) {
				iconClass = item.getMimeClass();
			} else if (!item.parent && !searchTemplate) {
				if ((item.isInstanceOf && item.isInstanceOf(Teamspace)) || (this.rootObject.isInstanceOf && this.rootObject.isInstanceOf(Teamspace))) {
					iconClass = "ecmTeamspaceIcon";
				} else if (this.rootObject.isInstanceOf && this.rootObject.isInstanceOf(Repository)) {
					iconClass = ""; //"ecmRepositoryIcon";
				}
			} else if (item.isInstanceOf && item.isInstanceOf(AttachmentItem)) {
				iconClass = "ecmAttachmentIcon";
			} else if (searchTemplate) {
				iconClass = item.getMimeClass();
			} else if (item.isFolder && item.isFolder() && (item["template"] != "Teamspace")) {
				if (item.syncEnabled) {
					iconClass = "ftFolderSyncedIcon";
				} else if (item.isExternal) {
					iconClass = "ftFolderSharedIcon";
				} else if (item.hasCollaborations) {
					iconClass = "ftFolderCollaborationIcon";
				}
			} else {
				//show the teamspace icon when the content item contained in the teamspace
				if (this.model.isFirstNodeasTeamspaces == true && item.template != null && item.template.indexOf("Teamspace") >= 0) {
					iconClass = "ecmTeamspaceFolderIcon";
				}
			}
			return iconClass;
		},

		/**
		 * Returns a boolean indicating if the path is selected.
		 * 
		 * @param path
		 *            The path.
		 * @return {Boolean} Indicates if the path is selected.
		 */
		isPathSelected: function(path) {
			var isTreePathsEqual = true;
			var treePath = this.get("path");
			if (!treePath || treePath.length != path.length) {
				isTreePathsEqual = false;
			} else {
				for (var i = 0; i < treePath.length; i++) {
					if (treePath[i] != path[i]) {
						isTreePathsEqual = false;
						break;
					}
				}
			}
			return isTreePathsEqual;
		},

		/**
		 * Sets the tree path with the input path.
		 * 
		 * @param path
		 *            The path to select.
		 */
		_setPath: function(path) {
			var retries = 0;
			var deferred = this.set('path', path);
			deferred.then(lang.hitch(this, function(nodeInfo) {
				if (nodeInfo) {
					var treeNode = nodeInfo[0][1];
					if (treeNode) {
						win.scrollIntoView(treeNode.rowNode);
						this.onClick(treeNode.item, treeNode);
					}
				}
			}));
		},

		/**
		 * Selects the input item in the tree, scrolls it into view, and calls <code>onClick</code>.
		 * 
		 * @param item
		 *            The item to select.
		 */
		_selectItem: function(item) {
			this.set('selectedItems', [
				item
			]);
			var itemNodes = this.getNodesByItem(item);
			var node = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
			if (node) {
				win.scrollIntoView(node.rowNode);
			}
			this.onClick(item, node);
		},

		/**
		 * Overrides <code>dijit.Tree._onClick</code<> to optionally expand and execute the node.
		 *
		 * @param nodeWidget
		 *            The widget node.
		 * @param e
		 *            The event.
		 */
		_onClick: function(nodeWidget, e) {
			if (!Desktop.getRequestParam("expandOnClick")) {
				this.inherited(arguments);
			} else {
				var domElement = e.target, isExpandoClick = this.isExpandoNode(domElement, nodeWidget);
				if (nodeWidget.isExpandable || isExpandoClick) {
					// expando node was clicked, or label of a folder node was clicked; open it
					if (nodeWidget.isExpandable) {
						this._onExpandoClick({
							node: nodeWidget
						});
					}
				}
				this._publish("execute", {
					item: nodeWidget.item,
					node: nodeWidget,
					evt: e
				});
				this.onClick(nodeWidget.item, nodeWidget, e);
				this.focusNode(nodeWidget);
				event.stop(e);
			}
		},

		/**
		 * Collapses the tree node.
		 * 
		 * @param node
		 *            The tree node to collapse.
		 */
		_collapseNode: function(/*_TreeNode*/node, /*Boolean?*/recursive) {
			this.inherited(arguments);
			node.state = "UNCHECKED";
		},

		/**
		 * Handles when the model indicates that it started processing an item. Processes the notification of a need to
		 * mark processing for a item's node.
		 * 
		 * @param item
		 *            The item on which to start the process.
		 */
		_onProcessingStarted: function(item) {
			var itemNodes = this.getNodesByItem(item);
			if (itemNodes) {
				array.forEach(itemNodes, function(itemNode) {
					if (itemNode)
						itemNode.markProcessing();
				});
			}
		},

		/**
		 * Handles when the model has completed processing an item.
		 * 
		 * @param item
		 *            The item on which processing is completed.
		 */
		_onProcessingComplete: function(item) {
			// This returns the tree node's progress indicator back normal if errors occur during retrieve of children
			var node = this.getNodesByItem(item)[0];
			if (node != null) {
				node.unmarkProcessing();
				node.state = "UNCHECKED";
				node._expandNodeDeferred = null;
			}
		},

		/**
		 * Event that is fired when items are changed. Process these changed model objects.
		 * 
		 * @param modelObjects
		 *            The model objects that are changed.
		 */
		_onChangeItems: function(modelObjects) {
			if (lang.isArray(modelObjects)) {
				for (var i = 0; i < modelObjects.length; i++) {
					var changedModel = modelObjects[i];
					if (changedModel && changedModel.isInstanceOf && (changedModel.isInstanceOf(Item) || changedModel.isInstanceOf(Favorite))) {
						if (!changedModel.originalId || changedModel.originalId == changedModel.id) { // id didn't change
							var itemNodes = this.getNodesByItem(changedModel);
							if (itemNodes) {
								array.forEach(itemNodes, function(itemNode) {
									if (itemNode && itemNode.item) {
										if (changedModel.deleted) {
											if (itemNode.tree.rootNode != itemNode) {
												var selectedItemDeleted = false;
												if (this.selectedItem && this.selectedItem.id == changedModel.id) {
													selectedItemDeleted = true;
												}

												var parent = itemNode.getParent();
												if (parent && parent.getChildren().length <= 1) {
													this.model.reload(parent.item);
												} else {
													this._onItemDelete(itemNode.item);
												}

												// If the deleted item is selected, select its parent.
												if (selectedItemDeleted && parent != null) {
													var parentItem = parent.item;
													this._selectItem(parentItem);
												}
											}
										} else {
											itemNode.item.name = changedModel.name;
											itemNode.item = changedModel;
											this._onItemChange(itemNode.item); //updates the label if this changed
											//dijitTree does not update the case of changing direction when label is changed and textDir is auto
											if (this.textDir === "auto") {
												this.applyTextDir(itemNode.focusNode);
											}
										}
									}
								}, this);
							}
						} else { // id changed - user did a re-index
							var tempItem = new Item(changedModel.originalId ? changedModel.originalId : changedModel.id);
							var itemNodes = this.getNodesByItem(tempItem);
							if (itemNodes) {
								array.forEach(itemNodes, function(itemNode) {
									if (itemNode && itemNode.item) {
										itemNode.item.name = changedModel.name;
										itemNode.item = changedModel;
										itemNode.item.id = changedModel.id;
										if (!this._itemNodesMap[changedModel.id]) {
											this._itemNodesMap[changedModel.id] = [];
										}
										this._itemNodesMap[changedModel.id].push(itemNode);
										this._onItemChange(itemNode.item); //updates the label if this changed
										//dijitTree does not update the text direction when label is changed and textDir is auto
										if (this.textDir === "auto") {
											this.applyTextDir(itemNode.focusNode);
										}
									}
								}, this);
							}
							if (this._itemNodesMap[tempItem.id]) {
								this._itemNodesMap[tempItem.id].length = 0;
							}
						}
					}
				}
			} else {
				if (changedModel && changedModel.isInstanceOf && modelObjects.isInstanceOf(ContentItem) && !modelObjects.deleted && modelObjects.id) {
					this.model.reload(modelObjects);
				}
			}
		},

		/**
		 * Event that is fired when a user drags an external document over the widget.
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDragOver: function(evt) {
			event.stop(evt);
			dndAutoscroll.autoScrollNodes(evt);
			if (this._getExternalDropTargetItem(evt)) {
				var targetRow = this._getExternalDropTargetRow(evt);
				var targetItem = this._getExternalDropTargetItem(evt);
				if (this._lastHoveredTargetRow) {
					if (this._lastHoveredTargetRow != targetRow) {
						// The target row changed. Update the old and new target rows.
						domClass.remove(this._lastHoveredTargetRow, "dijitTreeRowHover");
						if (targetRow) {
							domClass.add(targetRow, "dijitTreeRowHover");
						}
						this._lastHoveredTargetRow = targetRow;
					}
				} else { // Update the target row.
					if (targetRow) {
						domClass.add(targetRow, "dijitTreeRowHover");
					}
					this._lastHoveredTargetRow = targetRow;
				}
				evt.dataTransfer.dropEffect = "copy";

			} else {
				if (this._lastHoveredTargetRow) {
					domClass.remove(this._lastHoveredTargetRow, "dijitTreeRowHover");
					this._lastHoveredTargetRow = null;
				}
				evt.dataTransfer.dropEffect = "none";
			}
			if (evt["returnValue"]) {
				evt.returnValue = false;
			}
			return false;
		},

		/**
		 * Event that is fired when a user drags an external document out of the widget (i.e., the document is exiting
		 * the widget).
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDragExit: function(evt) {
			event.stop(evt);
			domClass.remove(this.domNode, "ecmFolderTreeHover");
			if (this._lastHoveredTargetRow) {
				domClass.remove(this._lastHoveredTargetRow, "dijitTreeRowHover");
				this._lastHoveredTargetRow = null;
			}
			return false;
		},

		/**
		 * Event that is fired when a user drags an external document into the widget (i.e., the document is entering
		 * the widget).
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDragEnter: function(evt) {
			domClass.add(this.domNode, "ecmFolderTreeHover");
			// Let onExternalDragOver handle the stop event and target.
			return this.onExternalDragOver(evt);
		},

		/**
		 * Event that is fired when a user drops an external document on the widget.
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDrop: function(evt) {
			event.stop(evt);
			var targetItem = this._getExternalDropTargetItem(evt);
			if( evt.dataTransfer && evt.dataTransfer.items ){
				this._files = [];
				this._getFiles(evt.dataTransfer.items, lang.hitch(this, function(){
					if( this._files && this._files.length > 0 ){
						this._processExternalDropFiles( targetItem, evt, true );
					}else{
						this.logDebug("onExternalDrop", "no file found for DnD.");
					}
				}));
			}else{
				this._files = evt.dataTransfer.files;
				this._processExternalDropFiles( targetItem, evt );
			}
			
			return false;
		},

		
		_processExternalDropFiles: function( targetItem, evt, hasFiles ){
			if (targetItem && (hasFiles || this._eventHasFiles(evt) ) && this._numberWithinMaxDocToAdd(this._files, targetItem)) {
				var success = lang.hitch(this, function() {
					this.addContentItem = new AddContentItemDialog({
						skipPreloadingFileTracker: true,
						destroyWhenFinished: true
					});
					this.addContentItem.setFiles(this._files);
					if (targetItem.isInstanceOf(ecm.model.Favorite)) {
						targetItem = targetItem.item;
					}

					var checkForTeamspace = targetItem && targetItem.repository.teamspacesEnabled && !this.teamspace;
					if (checkForTeamspace) {
						targetItem.retrieveTeamspace(lang.hitch(this, function(teamspace) {
							this.addContentItem.show(targetItem.repository, targetItem, true, false, null, teamspace, false, null);
						}));
					} else {
						this.addContentItem.show(targetItem.repository, targetItem, true, false, null, this.teamspace, false, null);
					}
				});

				if (targetItem.isInstanceOf && targetItem.isInstanceOf(ecm.model.Favorite) && !targetItem.item) {
					targetItem.retrieveFavorite(lang.hitch(this, function(obj) {
						// re-check the privilege for the newly retrieve favorite item.  If cannot add, display error message.
						if (targetItem.repository && targetItem.repository.type == "od") {
							if (targetItem.repository.supportsAddDocument) {

								//this._oddocfiles = evt.dataTransfer.files
								if (this._dragfiles[0].size == 0) {
									Desktop.addMessage(Message.createErrorMessage("add_document_filesize_empty_od_error", [
										targetItem.name
									]));
								} else {
									targetItem.repository.retrieveODAddDocPermission(targetItem.name, lang.hitch(this, function(hasPermission) {
										if (hasPermission) {
											this._verifyCanAddFiles(this._files, targetItem).then(success, this._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
										} else {
											this._dndModel.addCannotDropErrorMessage(targetItem.item.name);
										}
									}));
								}

							} else {
								Desktop.addMessage(Message.createErrorMessage("add_document_odserver_odwek_version_od_error", [
									targetItem.name
								]));
							}

						} else {
							if (!this._dndModel.hasPrivilegeToAddTo(targetItem)) {
								this._dndModel.addCannotDropErrorMessage(targetItem.item.name);
							} else {
								this._verifyCanAddFiles(this._files, targetItem).then(success, this._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
							}
						}
					}));
				} else {
					this._verifyCanAddFiles(evt.dataTransfer.files, targetItem).then(success, this._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
				}
			}
		},
		
		/**
		 * Returns the target item when dragging and dropping files from the desktop onto the tree.
		 * 
		 * @param evt
		 *            The event.
		 */
		_getExternalDropTargetItem: function(evt) {
			var targetItem = null;
			var targetRow = this._getExternalDropTargetRow(evt);
			var targetNode = registry.getEnclosingWidget(targetRow);
			if (targetNode && targetNode.item) {
				var dropItem = targetNode.item;
				if (dropItem && !dropItem.continuationData) {
					//Logger.logDebug("targetItem = " + dropItem);
					//Logger.logDebug("dropItem.type = " + dropItem.type);
					//Logger.logDebug("dropItem.repository.type = " + dropItem.repository.type);
					// Allow dropping on the root node if it has a repository node (i.e. browse view).  The user can select a subfolder in the add dialog.
					// Otherwise, only allow if the target item grants permission and it is not a search template.
					if ((this.rootNode.item.id == dropItem.id && dropItem.repository)) {
						targetItem = dropItem;
					} else if (!this._isSearchTemplate(dropItem) && (dropItem.repository && dropItem.repository.type != "od")) {
						if (this._dndModel.hasPrivilegeToAddTo(dropItem)) {
							targetItem = dropItem;
						} else if (dropItem.isInstanceOf && dropItem.isInstanceOf(ecm.model.Favorite) && !dropItem.item && dropItem.type == "folder" && dropItem.id != this.rootNode.item.id) {
							targetItem = dropItem; // For favorites, we may not have the privilege info retrieved yet.  In this case, we will check for privilege again in onDrop method.
						}
					} else if (dropItem.type == "search" && dropItem.repository.type == "od") {
						targetItem = dropItem; // For CMOD favorites, drag &drop
					}
				}
			}
			//Logger.logDebug("targetItem = " + targetItem);
			return targetItem;
		},

		/**
		 * @private Returns true if the item is a search template.
		 */
		_isSearchTemplate: function(item) {
			if (item && item.item) {
				item = item.item;
			}
			if (item && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				return true;
			}
			return false;
		},

		/**
		 * Return the target row when dragging and dropping files from the desktop onto the tree.
		 * 
		 * @param evt
		 *            The event.
		 */
		_getExternalDropTargetRow: function(evt) {
			var node = evt.target;
			while (true) {
				if (domClass.contains(node, "dijitTreeRow")) {
					return node;
				} else {
					node = node.parentNode;
					if (!node) {
						return evt.target;
					}
				}
			}
		},

		/**
		 * @private Processes notification of a change to an item's children when doing a move. Calls
		 *          _setChildItemsForMove.
		 */
		_onItemChildrenChangeForMove: function(/*dojo/data/Item*/parent, /*dojo/data/Item[]*/newChildrenList) {
			var parentNodes = this._itemNodesMap[this.model.getIdentity(parent)];
			if (parentNodes) {
				array.forEach(parentNodes, function(parentNode) {
					this._setChildItemsForMove(parentNode, newChildrenList);
				}, this);
			}
		},
		/**
		 * @private dijit.Tree setChildItems cleans up / destroys in the middle of the move due to ICN's async
		 *          retrieving of children. This method is copied from dijit.Tree setChildItems with no this.defer
		 *          cleanup logic.
		 */
		_setChildItemsForMove: function(parentNode, items) {
			var tree = this, model = tree.model, defs = []; // list of deferreds that need to fire before I am complete

			// Orphan all my existing children.
			// If items contains some of the same items as before then we will reattach them.
			// Don't call this.removeChild() because that will collapse the tree etc.
			var oldChildren = parentNode.getChildren();
			array.forEach(oldChildren, function(child) {
				_Container.prototype.removeChild.call(parentNode, child);
			}, parentNode);

			parentNode.state = "LOADED";

			if (items && items.length > 0) {
				parentNode.isExpandable = true;

				// Create _TreeNode widget for each specified tree node, unless one already
				// exists and isn't being used (presumably it's from a DnD move and was recently released
				array.forEach(items, function(item) { // MARKER: REUSE NODE
					var id = model.getIdentity(item), existingNodes = tree._itemNodesMap[id], node;
					if (existingNodes) {
						for (var i = 0; i < existingNodes.length; i++) {
							if (existingNodes[i] && !existingNodes[i].getParent()) {
								node = existingNodes[i];
								node.set('indent', parentNode.indent + 1);
								break;
							}
						}
					}
					if (!node) {
						node = parentNode.tree._createTreeNode({
							item: item,
							tree: tree,
							isExpandable: model.mayHaveChildren(item),
							label: tree.getLabel(item),
							tooltip: tree.getTooltip(item),
							ownerDocument: tree.ownerDocument,
							dir: tree.dir,
							lang: tree.lang,
							textDir: tree.textDir,
							indent: parentNode.indent + 1
						});
						if (existingNodes) {
							existingNodes.push(node);
						} else {
							tree._itemNodesMap[id] = [
								node
							];
						}
					}
					parentNode.addChild(node);

					// If node was previously opened then open it again now (this may trigger
					// more data store accesses, recursively)
					if (this.tree.autoExpand || this.tree._state(node)) {
						defs.push(tree._expandNode(node));
					}
				}, parentNode);

				// note that updateLayout() needs to be called on each child after _all_ the children exist
				array.forEach(parentNode.getChildren(), function(child) {
					child._updateLayout();
				});
			} else {
				parentNode.isExpandable = false;
			}

			if (parentNode._setExpando) {
				// change expando to/from dot or + icon, as appropriate
				parentNode._setExpando(false);
			}

			// Set leaf icon or folder icon, as appropriate
			parentNode._updateItemClasses(parentNode.item);

			// On initial tree show, make the selected TreeNode as either the root node of the tree,
			// or the first child, if the root node is hidden
			if (parentNode == tree.rootNode) {
				var fc = parentNode.tree.showRoot ? parentNode : parentNode.getChildren()[0];
				if (fc) {
					if (fc.setFocusable) {
						fc.setFocusable(true);
					}
					tree.lastFocused = fc;
				} else {
					// fallback: no nodes in tree so focus on Tree <div> itself
					tree.domNode.setAttribute("tabIndex", "0");
				}
			}

			var def = new DeferredList(defs);
			this._startPaint(def); // to reset TreeNode widths after an item is added/removed from the Tree
			return def; // dojo/_base/Deferred
		},

		/**
		 * Returns objects passed to
		 * <code>Tree.model.newItem()<code> based on drag-and-drop (DnD) nodes dropped onto the
		 * tree. Developer must override this method to enable dropping from external sources onto this Tree, unless the
		 * <code>Tree.model</code>'s items happen to look like <code>{id: 123, name: "Apple" }</code> with no other attributes.
		 * For each node in nodes[], which came from source, create a hash of name/value pairs to be passed to
		 * <code>Tree.model.newItem()</code>. Returns an array of those hashes.
		 *
		 * @param nodes
		 *            Array of the DOMNodes dragged from the source container.
		 * @param target
		 *            The target <code>TreeNode.rowNode</code>.
		 * @param source
		 *            The source container the nodes were dragged from, perhaps another Tree or the ContentList.
		 * @return Array of name/value hashes for each new item to be added to the Tree.
		 */
		itemCreator: function(nodes, target, source) {
			if (source.getSelectedItems) {
				var selectedItems = source.getSelectedItems();
				return [
					{
						sourceItems: selectedItems
					}
				];
			} else if (source.grid) { // copy from grid into the tree
				var selectedItems = source.grid.contentList ? source.grid.contentList.getSelectedItems() : [];
				return [
					{
						sourceItems: selectedItems
					}
				];
			}
			return array.map(nodes, function(node) {
				return {
					"userid": domAttr.get(node, "userid") || node.textContent,
					"name": node.textContent || node.innerText || ""
				};
			}); // Object[]
		},

		/**
		 * Stub function to be overridden if one wants to check for the ability to drop at the node/item level. In the
		 * base case, this is called to check if the target can become a child of source. When
		 * <code>betweenThreshold<code>
		 * is set, <code>position="before"</code> or </code>"after"</code> means that
		 * we are asking if the source node can be dropped before/after the target node.
		 * 
		 * @param target
		 *            DOMNode The <code>dijitTreeRoot</code> DOM node inside of the TreeNode that we are dropping on
		 *            to.
		 * @param source
		 *            <code>dijit.tree.dndSource</code> The (set of) nodes we are dropping.
		 * @param position
		 *            String containing value of <code>"over"</code>, <code>"before"</code>, or
		 *            <code>"after"</code>.
		 */
		checkItemAcceptance2: function(target, source, position) {
			var m = DNDManager.manager();
			var targetTreeNode = registry.getEnclosingWidget(target);
			if (targetTreeNode.item.isFolder()) {
				if (source.grid) { // Dragging from the grid into the tree
					var selectedItems = source.grid.contentList ? source.grid.contentList.getSelectedItems() : [];
					return this._dndModel.canDrop(selectedItems, targetTreeNode.item, m.copy, targetTreeNode.tree.rootNode.item);

				} else if (source.getSelectedItems) { // Dragging from filmstrip into the tree
					var selectedItems = source.getSelectedItems();
					return this._dndModel.canDrop(selectedItems, targetTreeNode.item, m.copy, targetTreeNode.tree.rootNode.item);

				} else { // Dragging a treeNode within the tree
					var selectedItems = [];
					for ( var i in source.selection) {
						var sourceTreeNode = source.selection[i];
						if (sourceTreeNode && sourceTreeNode.item) {
							selectedItems.push(sourceTreeNode.item);
						}
					}
					return this._dndModel.canDrop(selectedItems, targetTreeNode.item, m.copy, targetTreeNode.tree.rootNode.item);
				}
			} else {
				return false; // Cannot drag into a non-folder
			}
		},

		/**
		 * Overrides the <code>setPaths</code> from tree to handle the problem of automatically expanding more links
		 * of nodes. Select the tree nodes identified by passed paths.
		 * 
		 * @param paths
		 *            An array of arrays of items or item id's.
		 * @return Deferred to indicate when the set is complete.
		 */
		_setPathsAttr: function(/*Item[][] || String[][]*/paths) {
			var tree = this;
			//retries to try before stopping on fails
			var retries = 0;

			// We may need to wait for some nodes to expand, so setting
			// each path will involve a Deferred. We bring those deferreds
			// together with a DeferredList.
			return new DeferredList(array.map(paths, function(path) {
				var d = new Deferred();
				if (path.length) {
					selectPath(path, [
						tree.rootNode
					], d);
				} else {
					d.errback("Empty path");
				}
				return d;
			})).then(setNodes);

			function selectPath(path, nodes, def) {
				if (path) {
					//clone path
					var originalPath = path.slice(0);

					// Traverse path; the next path component should be among "nodes".
					var nextPath = path.shift();
					var nextNode = array.filter(nodes, function(node) {
						//this is done to handle favorites which the item is a favorite but the path objects are regular ContentItems
						//var nodeId = node.item && node.item.isInstanceOf && node.item.isInstanceOf(Favorite) && node.item.item ? node.item.item.id : node.getIdentity();
						var newPathId = tree.model.getIdentity(nextPath);
						return node.getIdentity() == newPathId;
					})[0];

					if (!!nextNode) {
						if (path.length) {
							tree._expandNode(nextNode).then(function() {
								selectPath(path, nextNode.getChildren(), def);
							});
						} else {
							//Successfully reached the end of this path
							def.callback(nextNode);
						}
					} else {
						//most likely the error is that it can't find the path because the node doesn't exist.  Expand it and retry.  Set it to only retry four times
						if (retries < 4) {
							retries++;

							//obtain the parentNode by taking the first children and looking up the parent item
							var firstNode = nodes[0];
							if (firstNode && firstNode.item && firstNode.item.parent) {
								var parent = firstNode.item.parent;

								//if the parent item has a more link, then attempt to auto-expand itself
								if (parent.moreLink) {
									var nodes = tree.getNodesByItem(parent.moreLink);
									if (nodes && nodes[0]) {
										var node = nodes[0];
										node.labelNode.innerHTML = "<span class='dijitContentPaneLoading'></span>";
										var moreLinksParentItem = node.getParent().item;

										//after the request returns, scroll, and then perform a select path on the same parent node but
										//with all the newly added additional children.  Make sure to use the original path that hasn't been shifted yet
										//to retry the path lookup.
										var parentDomNode = node.domNode.parentNode;
										var onComplete = lang.hitch(this, function() {
											if (parentDomNode && parentDomNode.lastChild) {
												win.scrollIntoView(parentDomNode.lastChild);
											}
											var parentNode = tree.getNodesByItem(parent);
											if (parentNode && parentNode[0]) {
												selectPath(originalPath, parentNode[0].getChildren(), def);
											} else {
												parentNode = tree.getNodesByItem(moreLinksParentItem);
												if (parentNode && parentNode[0]) {
													selectPath(originalPath, parentNode[0].getChildren(), def);
												}
											}
										});
										//fetches the next set of items for the tree
										tree.model.fetchNextPage(parent.moreLink.pagedResultSet, node.getParent().item, onComplete); // This has the item from the parent (which may be Favorites) versus the ContentItem the Favorites is holding

										//wipe out the more link reference on the parent node since it's being expanded right now
										if (parent.moreLink) {
											delete parent.moreLink;
										}
									}
								} else {
									tree._showMissingFolderDialog(nextPath);
								}
							} else {
								tree._showMissingFolderDialog(nextPath);
							}
						} else {
							tree._showMissingFolderDialog(nextPath);
						}
					}
				}
			}

			function setNodes(newNodes) {
				//After all expansion is finished, set the selection to
				//the set of nodes successfully found.
				var nodes = array.map(array.filter(newNodes, function(x) {
					return x[0];
				}), function(x) {
					return x[1];
				});
				if (tree.dndController.setSelection) {
					tree.set("selectedNodes", nodes);
				}
				if (nodes && nodes.length > 0) {
					var treeNode = nodes[0];
					if (treeNode) {
						win.scrollIntoView(treeNode.rowNode);
					}
				}
			}
		},

		/**
		 * @private Show a dialog that the folder is missing from the tree.
		 * @param item.
		 *            The item that is missing from the tree.
		 */
		_showMissingFolderDialog: function(item) {
			if (item && this.showMissingFolderMessage) {
				var messageDialog = new MessageDialog({
					text: string.substitute(ecm.messages.folderTree_missing_folder_error, [
						item.name
					])
				});
				domStyle.set(messageDialog.domNode, "width", "40%");
				messageDialog.show();
			}
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			// Release the reference. The contents are self-destroyed.
			this.addContentItem = null;
		}
	});
});

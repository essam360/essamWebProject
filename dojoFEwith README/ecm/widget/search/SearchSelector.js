/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/dnd/autoscroll",
	"dojo/dnd/Manager",
	"dojo/keys",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/Tooltip",
	"dijit/Tree",
	"dijit/form/Button",
	"ecm/widget/DropDownButton",
	"dijit/layout/ContentPane",
	"dijit/tree/_dndSelector",
	"idx/html",
	"idx/form/ComboLink",
	"../../LoggerMixin",
	"../../model/ContentItem",
	"../../model/Item",
	"../../model/SearchConfiguration",
	"../../model/SearchTemplate",
	"../../model/SearchTemplateFolder",
	"../../model/SearchTemplateTreeModel",
	"../dialog/AddContentItemDialog",
	"../_DroppedFilesAddDocMixin",
	"../ActionMenu",
	"../Ellipsis",
	"ecm/model/Desktop",
	"ecm/model/Message",
	"dojo/window", //
	"dojo/dom-geometry", //
	"dojox/html/entities", //
	"../FilterTextBox",
	"dojo/text!./templates/SearchSelector.html"
], function(declare, lang, has, array, event, aspect, domClass, domConstruct, domGeometry, domStyle, dndAutoscroll, DNDManager, keys, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, registry, Menu, MenuItem, MenuSeparator, Tooltip, Tree, Button, DropDownButton, ContentPane, _dndSelector, idxHtml, ComboLink, LoggerMixin, ContentItem, Item, SearchConfiguration, SearchTemplate, SearchTemplateFolder, SearchTemplateTreeModel, AddContentItemDialog, _DroppedFilesAddDocMixin, ActionMenu, Ellipsis, Desktop, Message, win, domGeom, entities, FilterTextBox, template) {

	/**
	 * @name ecm.widget.search.SearchSelector
	 * @class Provides a widget that contains a tree or drop-down list that is used to select a search template. This
	 *        widget displays the available search templates that are available to the user. If the search templates are
	 *        in folders, this widget allows users to traverse the folders to find and select a particular template.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.SearchSelector", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_DroppedFilesAddDocMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.SearchSelector.prototype */
		templateString: template,

		/**
		 * A string holding the style, "tree" or "dropdown", of this widget.
		 */
		selectorStyle: "tree",
		/**
		 * A string holding the label of the drop-down list.
		 */
		label: "",
		/**
		 * A function that will be passed to Tree widget.
		 */
		getIconClass: null,
		/**
		 * A boolean flag to enable a button to launch {@link ecm.widget.search.SearchBuilder} widget and a text box to
		 * filter searches.
		 */
		toolbarEnabled: true,

		/**
		 * A boolean flag to create a button to launch {@link ecm.widget.search.SearchBuilder} widget in the toolbar.
		 * Works in conjunction with toolbarEnabled. If true the new search button appears in the toolbar otherwise it
		 * is hidden.
		 * 
		 * @since 2.0.2
		 */
		toolbarContainsNewSearchButton: true,

		/**
		 * A boolean flag to enable context menus.
		 */
		enableCtxMenu: true,
		/**
		 * A boolean flag to show opened searches.
		 */
		showOpenedSearches: true,
		/**
		 * @deprecated As of release 2.0.1.
		 */
		showRecents: true,
		/**
		 * @deprecated As of release 2.0.1.
		 */

		/**
		 * @private
		 * @since 2.0.2
		 */
		defaultLabel: "",

		_treeModelHandles: null,
		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		/**
		 * If <code>true</code> then double clicking an item selects it and closes the dropdown.
		 */
		onDblClickSelectAndClose: true,

		/**
		 * Boolean to allow multiple selection of classes.
		 */
		multiSelect: false,

		/**
		 * If <code>true</code> then cross repository searches will be shown in the search selector.
		 * 
		 * @since 2.0.3
		 */
		showCrossRepositorySearches: true,

		constructor: function() {
			if (!this._treeModelHandles) {
				this._treeModelHandles = [];
			}
		},

		/**
		 * @private Initializes this widget
		 */
		postCreate: function() {
			this.inherited(arguments);
			this._actionParameterMap = new Object();
			this.textDir = has("text-direction");

			if (this.repository) {
				this.setRepository(this.repository);
			}

			this._actionCallbackMap = new Object();
			this._actionCallbackMap.ALL = this._refreshContextMenuItem;
		},

		/**
		 * @private Adds entry to action parameter map, used to pass parameters to action execute calls.
		 * @param key
		 *            Key of the parameter
		 * @param value
		 *            Value of the parameter
		 */
		addToActionParameterMap: function(key, value) {
			this._actionParameterMap[key] = value;
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

				this.label = null;
				this.setLabel(null);
				this._tree.set('selectedItems', null);
			}
		},

		/**
		 * @private Clears the existing tree model.
		 */
		_clearTreeModel: function() {
			if (this._treeModel) {
				this._treeModel.destroy();
				this._treeModel = null;
			}
		},

		/**
		 * @private Clears the existing toolbar.
		 */
		_clearToolbar: function() {
			if (this._newSearchButton) {
				this._newSearchButton.destroy();
			}

			if (this._newSearchComboLink) {
				this._newSearchComboLink.destroy();
			}

			if (this._filter) {
				this._filter.destroy();
			}

			this._toolbarNode = null;
			this._toolbarButtonNode = null;
			this._toolbarFilterNode = null;
		},

		/**
		 * Gets the repository of this widget.
		 * 
		 * @return {@link ecm.model.Repository}
		 * @deprecated As of release 2.0.2. Use repository directly, e.g., searchSelector.repository.
		 */
		getRepository: function() {
			return this.repository;
		},

		/**
		 * Sets the repository and teamspace objects to use for filtering the list.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object
		 */
		setRepository: function(repository, teamspace) {
			if (this.repository == repository)
				return;

			this.teamspace = teamspace;

			// If the repository changes we need to clear the template list and reload.
			var repositoryChanged = true;
			if (repository != this.repository)
				this._clearTreeModel();
			else
				repositoryChanged = false;

			//If this is teamspace DO NOT return, teamspaces needs the widget to rerender when the teamspace changes
			//DO NOT REGRESS
			//else if (this._tree != null && !this.teamspace)
			//	return;
			// BM: I don't see why we wouldn't always rerender the selector if the repository or teamspace changes, so I removed
			// this block of code. However, if the repository does not change we shouldn't be recreating the tree model. That's
			// an unnecessary expense.

			if (teamspace) {
				if (this.repository != teamspace.repository) {
					repositoryChanged = true;
					this.repository = teamspace.repository;
				} else {
					repositoryChanged = false;
				}
			} else {
				this.repository = repository;
			}

			if (repository && repositoryChanged) {
				this._searchConfig = new SearchConfiguration({
					repository: this.repository,
					teamspace: teamspace
				});

				this._createRendering();
			}
		},

		/**
		 * Sets the style of the selector. There are two supported styles: "tree" and "dropdown".
		 * 
		 * @param style
		 *            A string holding the style of this widget
		 */
		setStyle: function(style) {
			this.selectorStyle = style;
		},

		/**
		 * Resizes itself to fit inside its container if the toolbar is enabled.
		 */
		resize: function() {
			if (!this.domNode || !this.domNode.parentNode || !this._treeNode) {
				return;
			}

			var width = domGeometry.getContentBox(this.domNode.parentNode).w;
//			if (this._toolbarNode) {
//				if (this._newSearchButton) {
//					var buttonAreaWidth = domGeometry.getMarginBox(this._newSearchButton.domNode).w;
//					domGeometry.setContentSize(this._toolbarButtonNode, {
//						w: buttonAreaWidth
//					});
//				} else {
//					domGeometry.setMarginBox(this._toolbarButtonNode, {
//						w: 0
//					});
//				}
//
//				domGeometry.setContentSize(this._toolbarNode, {
//					w: domGeometry.getMarginBox(this._toolbarButtonNode).w + domGeometry.getMarginBox(this._toolbarFilterNode).w + 1
//				});
//
//				var toolbarWidth = domGeometry.getMarginBox(this._toolbarNode).w;
//				if (width > toolbarWidth) {
//					domGeometry.setMarginBox(this._toolbarNode, {
//						w: width
//					});
//				}
//			}

			var height = domGeometry.getContentBox(this.domNode.parentNode).h;
			domGeometry.setMarginBox(this.domNode, {
				w: width,
				h: height
			});

			domGeometry.setMarginBox(this._treeNode, {
				w: width,
				h: height - domGeometry.getMarginBox(this._toolbarNode).h
			});

			if (this._tree)
				this._tree._resize();
		},

		/**
		 * @private Creates the dijit rendering.
		 */
		_createRendering: function() {
			if (this.toolbarEnabled) {
				this._createToolbar();
			} else if (this._toolbarNode) {
				domStyle.set(this._toolbarNode, "display", "none");
			}

			if (this.repository.isSearchTemplateSupported()) {
				if (this.selectorStyle == "tree") {
					this._createTree();
				} else if (this.selectorStyle == "dropdown") {
					this._createDropDown();
				}
			} else {
				if (this._dropdown) {
					this._dropdown.destroy();
					this._dropdown = null;
				}
				this._clearTreeModel();
				if (this._tree) {
					this._tree.destroy();
					this._tree = null;
				}
			}

			this.resize();
		},

		/**
		 * @private Creates a toolbar.
		 */
		_createToolbar: function() {
			if (this._toolbarNode) {
				domStyle.set(this._toolbarNode, "display", "");
				if (this.toolbarContainsNewSearchButton) {
					this._createNewSearchButton();
				}
				if (this._filter) {
					this._filter.set("value", "");
				}
				domStyle.set(this._toolbarFilterNode, "display", this.repository.isSearchTemplateSupported() ? "" : "none");
				return;
			}

			this._toolbarNode = domConstruct.create("div", {
				"class": "toolbar"
			});
			this.domNode.appendChild(this._toolbarNode);

			this._toolbarButtonNode = domConstruct.create("div", {
				"class": "buttonArea"
			});
			this._toolbarNode.appendChild(this._toolbarButtonNode);

			if (this.toolbarContainsNewSearchButton) {
				this._createNewSearchButton();
			}

			this._toolbarFilterNode = domConstruct.create("div", {
				"class": "filterArea"
			});
			this._toolbarNode.appendChild(this._toolbarFilterNode);

			var filterTextBoxId = this.id + "_filterTextBox";
			var filterLabel = domConstruct.create("label", {
				"for": filterTextBoxId,
				innerHTML: ecm.messages.multicolumn_list_filter_text
			});
			domStyle.set(filterLabel, "display", "none");
			this._toolbarFilterNode.appendChild(filterLabel);
			this._filter = new FilterTextBox({
				id: filterTextBoxId,
				placeholder: ecm.messages.searh_name_contains,
				title: ecm.messages.searh_name_contains
			});
			this._toolbarFilterNode.appendChild(this._filter.domNode);

			domStyle.set(this._toolbarFilterNode, "display", this.repository.isSearchTemplateSupported() ? "" : "none");

			this._filterData = null;
			this.connect(this._filter, "_onInput", "_filterItems");
			this.connect(this._filter, "_setValueAttr", "_filterItems");
		},

		/**
		 * @private Creates a button to launch {@link ecm.widget.search.SearchBuilder} widget.
		 */
		_createNewSearchButton: function() {
			domStyle.set(this._toolbarButtonNode, "display", "none");

			var canBuildSearches = this._searchConfig.canBuildSearches();
			var canBuildUnifiedSearches = this._searchConfig.canBuildUnifiedSearches();
			if (!canBuildSearches && !canBuildUnifiedSearches)
				return;

			if (!this._newSearchButton) {
				this._newSearchButton = new Button();
				// Block right-click event, so the browser doesn't show an annoying right-click window
				this.connect(this._newSearchButton.domNode, "oncontextmenu", function(evt) {
					event.stop(evt);
					return false;
				});
				domStyle.set(this._newSearchButton.domNode, "display", "none");
				this._toolbarButtonNode.appendChild(this._newSearchButton.domNode);
			}
			if (!this._newSearchComboLink) {
				var menu = new Menu();
				menu.addChild(new MenuItem({
					label: ecm.messages.new_search,
					onClick: lang.hitch(this, "onNewSearchButtonClick")
				}));
				menu.addChild(new MenuItem({
					label: ecm.messages.new_unified_search,
					onClick: lang.hitch(this, "onNewUnifiedSearchButtonClick")
				}));
				this._newSearchComboLink = new ComboLink({
					label: ecm.messages.new_search,
					onClick: lang.hitch(this, "onNewSearchButtonClick"),
					dropDown: menu
				});
				domStyle.set(this._newSearchComboLink.domNode, "display", "none");
				this._toolbarButtonNode.appendChild(this._newSearchComboLink.domNode);
			}

			if (canBuildSearches && canBuildUnifiedSearches) {
				domStyle.set(this._newSearchButton.domNode, "display", "none");
				domStyle.set(this._newSearchComboLink.domNode, "display", "inline");
			} else {
				// Rebrand the new search button
				this._newSearchButton.set("label", canBuildSearches ? ecm.messages.new_search : ecm.messages.new_unified_search);
				if (this._newSearchButtonHandle)
					this.disconnect(this._newSearchButtonHandle);
				this._newSearchButtonHandle = this.connect(this._newSearchButton, "onClick", canBuildSearches ? "onNewSearchButtonClick" : "onNewUnifiedSearchButtonClick");
				domStyle.set(this._newSearchComboLink.domNode, "display", "none");
				domStyle.set(this._newSearchButton.domNode, "display", "inline");
			}

			domStyle.set(this._toolbarButtonNode, "display", "inline");
		},

		/**
		 * @private Filters the tree based on the user input.
		 */
		_filterItems: function() {
			this.logEntry("_filterItems");

			var filterData = this._filter.get("value");

			// dont execute the filter if nothing changed

			if (((this._filterData && this._filterData != filterData) || // if _filterData is defined just compare old and new value
			(!this._filterData && filterData && filterData.length > 0))//if _filterData is not defined check for length>0 on filterData
					&& this._treeModel) {
				this._filterData = filterData;
				this._treeModel.applyFilter("*" + filterData + "*");
			}

			this.logExit("_filterItems");
		},

		/**
		 * @private
		 */
		_isItemInFilter: function(nodeOrItem) {
			// check if the item not filtered out (the call to scrollIntoView and focusNode
			// causes an error if the node is not displayed because of filtering)
			// Can pass in either the class or node item
			var isInFilter = true;
			var item = null;
			if (nodeOrItem.isInstanceOf && nodeOrItem.isInstanceOf(ecm.model.SearchTemplate)) {
				item = nodeOrItem;
			} else {
				item = nodeOrItem.item;
			}
			if (this._filterData && item) {
				var itemName = item.name.toLowerCase();
				isInFilter = itemName.indexOf(this._filterData.toLowerCase()) >= 0;
			}
			return isInFilter;
		},

		/**
		 * Creates the tree model.
		 * 
		 * @return Instance of {@link ecm.model.SearchTemplateTreeModel}.
		 */
		createTreeModel: function() {
			return new SearchTemplateTreeModel(this.repository, this.teamspace);
		},

		/**
		 * @private Creates a tree to display the list of search templates.
		 */
		_createTree: function() {
			if (this._dropdown) {
				this._dropdown.destroy();
			}

			this._clearTreeModel();

			if (this._tree) {
				this._tree.destroy();
			}

			if (this.selectorStyle == "tree") {
				if (!this._treeModel) {
					this._treeModel = this.createTreeModel();
					this._treeModel.showCrossRepositorySearches = this.showCrossRepositorySearches;
					this._treeModel.showOpenedSearches = this.showOpenedSearches;

					if (this.teamspace) {
						this.connect(this.teamspace, "onSearchTemplateAdded", "_reloadTree");
						this.connect(this.teamspace, "onRecentSearchAdded", "_reloadRecentSearches");
						this.connect(this.teamspace, "onRecentSearchesRemoved", "_reloadRecentSearches");
						this.connect(this.teamspace, "onOpenedSearchesUpdated", "_reloadOpenedSearches");
						this.connect(this.teamspace, "onSearchTemplateDeleted", "_reloadTree");
						this.connect(this.teamspace, "onChange", "_handleModelChange");

						this.connect(this.repository, "onSearchTemplateDeleted", "_reloadTree");
						this.connect(this.repository, "onChange", "_handleModelChange");
						if (!(this.teamspace.searchTemplates instanceof Array) || this.teamspace.searchTemplates.length < 1)
							this.connect(this.repository, "onSearchTemplateAdded", "_reloadTree");
					} else {
						this.connect(this.repository, "onSearchTemplateAdded", "_reloadTree");
						this.connect(this.repository, "onRecentSearchAdded", "_reloadRecentSearches");
						this.connect(this.repository, "onRecentSearchesRemoved", "_reloadRecentSearches");
						this.connect(this.repository, "onOpenedSearchesUpdated", "_reloadOpenedSearches");
						this.connect(this.repository, "onSearchTemplateDeleted", "_reloadTree");
						this.connect(this.repository, "onChange", "_handleModelChange");
					}
				}

				this._tree = this._createTreeInstance({
					id: this.id + (this.teamspace ? this.teamspace.id : (this.repository ? this.repository.id : "Tree")),
					model: this._treeModel,
					showRoot: false,
					persist: true
				// required for filtering to work
				});
				this.connect(this._tree, "onClick", "_onTreeClick");
				this.connect(this._tree, "onLoad", "resize");

				// To support OD Document drag&drop
				// The browser supports external drag and drop if it is not IE or the IE version is later than 9.
				if ((!has("ie") || has("ie") > 9) && (this.repository.type == "od")) {
					// Used for drag & drop from outside the application to inside the tree
					// For DOM node events use "dojo/on".
					this.connect(this._tree.domNode, "dragenter", "onExternalDragEnter");
					this.connect(this._tree.domNode, "dragover", "onExternalDragOver");
					this.connect(this._tree.domNode, "dragexit", "onExternalDragExit");
					this.connect(this._tree.domNode, "dragleave", "onExternalDragExit");
					this.connect(this._tree.domNode, "drop", "onExternalDrop");

				}
				// This returns the tree node's progress indicator back normal if errors occur during retrieve of children
				this.connect(this._treeModel, "onProcessingComplete", function(item) {
					var node = this._tree.getNodesByItem(item)[0];
					node.unmarkProcessing();
					node.state = "UNCHECKED";
					node._expandNodeDeferred = null;
				});

				this.connect(this._treeModel, "onChildrenChange", function(parent, items) {
					this.onTreeReload(items);
				});

				this.connect(this._treeModel, "onRecentSearchesLoad", function(recentSearches) {
					this.onRecentSearchesLoad(recentSearches);
				});

				if (this.toolbarEnabled) {
					if (!this._treeNode) {
						this._treeNode = domConstruct.create("div", {
							"class": "treeBaseNode"
						});
					}
					domStyle.set(this._tree.domNode, {
						width: "100%",
						height: "100%",
						overflow: "visible"
					});
					this._treeNode.appendChild(this._tree.domNode);
					this.domNode.appendChild(this._treeNode);
				} else {
					if (this._treeNode) {
						this._treeNode.parentNode.removeChild(this._treeNode);
						this._treeNode = null;
					}
					this.domNode.appendChild(this._tree.domNode);
				}

				if (this.enableCtxMenu == true) {
					this.connect(this._tree.domNode, "oncontextmenu", "_onContextMenu");
					this.connect(this._tree.domNode, "onkeydown", lang.hitch(this, function(evt) {
						if (evt.shiftKey && evt.keyCode == keys.F10) {
							this._onContextMenu(evt);
							return false;
						}
					}));
				}
				var self = this;
				this.connect(this._tree, "onLoad", function() {
					var firstNode = self._tree._getFirst();
					if (firstNode) {
						self._tree._expandNode(firstNode, true);
					}
				});
			}
		},

		/**
		 * Event that is fired when a user drags an external document into the widget (i.e., the document is entering
		 * the widget).
		 * 
		 * @param evt
		 *            The event.
		 */
		onExternalDragEnter: function(evt) {
			//domClass.add(this.domNode, "ecmFolderTreeHover");
			// Let onExternalDragOver handle the stop event and target.
			//return this.onExternalDragOver(evt);
			domClass.add(this._tree.domNode, "ecmFolderTreeHover");

			this.logDebug("onExternalDragEnter");
			return this.onExternalDragOver(evt);
		},

		onExternalDragExit: function(evt) {
			event.stop(evt);
			domClass.remove(this.domNode, "ecmFolderTreeHover");
			if (this._lastHoveredTargetRow) {
				domClass.remove(this._lastHoveredTargetRow, "dijitTreeRowHover");
				this._lastHoveredTargetRow = null;
			}
			this.logDebug("onExternalDragExit");
			return false;

		},
		onExternalDragOver: function(evt) {
			event.stop(evt);
			dndAutoscroll.autoScrollNodes(evt);
			if (this._getExternalDropTargetItem(evt)) {
				var targetRow = this._getExternalDropTargetRow(evt);
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
			this.logDebug("onExternalDragOver");
			return false;

		},

		onExternalDrop: function(evt) {
			event.stop(evt);
			var targetItem = this._getExternalDropTargetItem(evt);
			// The function _numberWithinMaxDocToAdd is from _DroppedFilesAddDocMixin
			if (targetItem && targetItem.repository.type == "od" && this._eventHasFiles(evt) && this._numberWithinMaxDocToAdd(evt.dataTransfer.files, targetItem)) {

				this._oddocfiles = evt.dataTransfer.files
				if (this._oddocfiles[0].size == 0) {
					Desktop.addMessage(Message.createErrorMessage("add_document_filesize_empty_od_error", [
						targetItem.name
					]));
				} else {
					if (targetItem.repository.supportsAddDocument) {
						targetItem.repository.retrieveODAddDocPermission(targetItem.name, lang.hitch(this, function(hasPermission) {
							if (hasPermission) {
								var success = lang.hitch(this, function() {
									this.addContentItem = new AddContentItemDialog({
										skipPreloadingFileTracker: true,
										destroyWhenFinished: true
									});
									//this.addContentItem.setFiles(evt.dataTransfer.files);
									this.addContentItem.setFiles(this._oddocfiles);
									this.addContentItem.show(targetItem.repository, targetItem, true, false, null, this.teamspace, false, null);
								});
								//this._verifyCanAddFiles(evt.dataTransfer.files).then(success, this._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
								this._verifyCanAddFiles(this._oddocfiles, targetItem).then(success, this._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
							} else {
								Desktop.addMessage(Message.createErrorMessage("dnd_no_privilege_error", [
									targetItem.name
								]));
							}
						}));
					} else {
						Desktop.addMessage(Message.createErrorMessage("add_document_odserver_odwek_version_od_error", [
							targetItem.name
						]));
					}
				}
			}
			this.logDebug("onExternalDrop");
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

				if (dropItem.isInstanceOf(SearchTemplate) && dropItem.repository.type == "od") {
					//if (dropItem.hasPrivilege("addDoc")){
					targetItem = dropItem;
					//}
				}

			}

			return targetItem;
		},

		/**
		 * @private Opens a context menu of a selected search.
		 * @param evt
		 *            An Event object
		 */
		_onContextMenu: function(evt) {
			event.stop(evt);

			var targetNode = registry.getEnclosingWidget(evt.target);
			var item = targetNode.item;
			var folder = item && item.isInstanceOf && item.isInstanceOf(SearchTemplateFolder);
			if (targetNode.isExpandable || folder) {
				if (folder) {
					var self = this;
					this._contextMenuItem = item;

					if (this.folderContextMenu) {
						var childMenuItems = this.folderContextMenu.getChildren();
						array.forEach(childMenuItems, function(child) {
							child.destroy();
						}, this);
					} else {
						this.folderContextMenu = new Menu();
					}

					var mi = new MenuItem({
						label: ecm.messages.refresh,
						onClick: function(evt) {
							item.clearSearchTemplates();
							self._treeModel.reloadNode(item);
						}
					});
					this.folderContextMenu.addChild(mi);
					if (item.id != "all") {
						this.folderContextMenu.addChild(new MenuItem({
							label: ecm.messages.refresh_cabinets,
							onClick: function(evt) {
								item.repository.templateFolders = null;
								self._treeModel.reload();
							}
						}));
					}

					var coords = null;
					if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
						coords = {
							x: evt.pageX,
							y: evt.pageY
						};
					}
					this.folderContextMenu._openMyself({
						target: evt.target,
						coords: coords
					});
				}

				return false;
			}

			if (item && item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				if (!this.repository._isOnDemand() && !item.isNew() && !item.isLoaded() && !item.UUID) {
					var request = this.repository.retrieveSearchTemplate(item.id, item.vsId, "released", lang.hitch(this, function(searchTemplate) {
						this._treeModel.onChange(searchTemplate);
						this._addContextMenu(evt, searchTemplate);
					}), lang.hitch(this, function() {
						// Remove the search template from recent searches if it could not be retrieved.
						if (this.teamspace) {
							this.teamspace.removeRecentSearches([
								item
							]);
						} else {
							this.repository.removeRecentSearches([
								item
							]);
						}
					}));
				} else {
					this._addContextMenu(evt, item);
				}
			}
		},

		/**
		 * @private Opens a context menu
		 * @param evt
		 *            An Event object
		 * @param item
		 *            A target {@link ecm.model.SearchTemplate} object of the context menu
		 */
		_addContextMenu: function(evt, item, isRecentSearch) {
			if (!this._actionMenuCreator) {
				this._actionMenuCreator = new ActionMenu();
			}
			this._contextMenuItem = item;
			ecm.model.desktop.loadMenuActions("SearchSearchTemplateContextMenu", lang.hitch(this, function(actions) {
				var menu = this._actionMenuCreator.createMenu(actions, [
					item
				], null, this._actionCallbackMap, this.repository, this.teamspace, null, this._actionParameterMap);
				var itemTreeNode = registry.getEnclosingWidget(evt.target);
				var parentTreeNode = registry.getEnclosingWidget(itemTreeNode.domNode.parentNode);
				if (parentTreeNode && parentTreeNode.item == this._treeModel.recentNode) { // recent search
					menu.addChild(new MenuSeparator());
					menu.addChild(new MenuItem({
						label: ecm.messages.removeFromThisList,
						onClick: lang.hitch(this, function() {
							(this.teamspace || this.repository).removeRecentSearches([
								item
							]);
						})
					}));
				}
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
			}));
		},

		/**
		 * @private Reloads the tree widget containing searches.
		 */
		_reloadTree: function() {
			this.logEntry("_reloadTree");

			if (this._treeModel)
				this._treeModel.reload();

			this.logExit("_reloadTree");
		},

		/**
		 * @private Reloads the recent searches list.
		 */
		_reloadRecentSearches: function() {
			this.logEntry("_reloadRecentSearches");

			if (this._treeModel)
				this._treeModel.reloadNode(this._treeModel.recentNode);

			this.logExit("_reloadRecentSearches");
		},

		/**
		 * @private Reloads opened searches list
		 */
		_reloadOpenedSearches: function() {
			this.logEntry("_reloadOpenedSearches");

			if (this._treeModel)
				this._treeModel.reloadNode(this._treeModel.openedSearchesNode);

			this.logExit("_reloadOpenedSearches");
		},

		/**
		 * @private Notifies changes of the searches
		 */
		_handleModelChange: function(modelObjects) {
			if (this._treeModel) {
				array.forEach(modelObjects, function(modelObj) {
					if (!modelObj.deleted && modelObj.isInstanceOf && modelObj.isInstanceOf(ecm.model._SearchTemplateBase)) {
						this._treeModel.onChange(modelObj);
					}
				}, this);
			}
		},

		/**
		 * @private Creates a dropdown button to display the list of search templates.
		 */
		_createDropDown: function() {

			if (this._dropdown && this._dropdown.dropDown) {

				if (this._popupContent && this._toolbarNode) {
					this._popupContent.removeChild(this._toolbarNode);
				}
				this._dropdown.dropDown.destroy();

			}

			this._clearTreeModel();

			if (this._tree) {
				this._tree.destroy();
			}

			if (this.selectorStyle == "dropdown") {

				this._focusItems = [];
				this._focusItems.push(this._filter);
				this._treeModel = this.createTreeModel();
				this._treeModel.showOpenedSearches = this.showOpenedSearches;

				var div = domConstruct.create("div", {
					'class': 'ecmSearchSelectorPopUpContent',
					'id': this.id + '_SearchTemplateSelectorPopUpContent'
				});

				this._popupContent = div;
				if (this._toolbarNode) {
					div.appendChild(this._toolbarNode);
				}
				// this holds the body of the dropdown (everything above the button panel)
				this._treePanel = domConstruct.create("div", {
					'class': 'mainPanel',
					'id': this.id + '_MainPanel'
				});
				div.appendChild(this._treePanel);

				this._tree = this._createTreeInstance({
					id: this.id + (this.teamspace ? this.teamspace.id : (this.repository ? this.repository.id : "DropDown")),
					model: this._treeModel,
					showRoot: false,
					persist: true
				// required for filtering to work
				});
				this._focusItems.push(this._tree);

				this.connect(this._tree, "onClick", "_onTreeClick");
				this.connect(this._tree, "onClick", function(/* dojo.data */item, /*TreeNode*/node, /*Event*/evt) {
					this._handleSelection(item);
				});
				this.connect(this._tree, "onDblClick", this._handleTreeDblClick);

				this._treePanel.appendChild(this._tree.domNode);

				// add button bar
				this._buttonPane = domConstruct.create("div", {
					'class': 'buttonArea',
					'id': this.id + '_ClassSelectorButtonPane'
				});

				this._buttonContainerNode = domConstruct.create("div", {
					'class': 'buttonContainer'
				});
				this._buttonPane.appendChild(this._buttonContainerNode);
				this._okButton = new Button({
					label: ecm.messages.ok_button_label,
					disabled: true,
					'id': this.id + '_okButton'
				});
				this.connect(this._okButton, "onClick", function() {
					this._pickSelectedItemAndClose();
				});
				this._buttonContainerNode.appendChild(this._okButton.domNode);

				this._cancelButton = new Button({
					label: ecm.messages.cancel,
					'id': this.id + '_cancelButton'
				});
				this.connect(this._cancelButton, "onClick", lang.hitch(this, function() {
					this._dropdown._allowCloseOnBlur = true;
					this._dropdown.closeDropDown();
				}));
				this._buttonContainerNode.appendChild(this._cancelButton.domNode);
				div.appendChild(this._buttonPane);
				var cp = new ContentPane();
				cp.set("content", div);
				this.connect(cp, "onKeyPress", "_onDropDownPaneKeyPress");

				if (!this._dropdown) {
					this._dropdown = new DropDownButton({
						'class': 'ecmDropDownInput'
					});

				}

				//add buttons to list of focusable controls
				this._focusItems.push(this._okButton);
				this._focusItems.push(this._cancelButton);

				if (this.openDropDownHandle) {
					this.openDropDownHandle.remove();
				}

				this.openDropDownHandle = aspect.after(this._dropdown, "openDropDown", lang.hitch(this, function() {
					var node = null;
					var _this = this;
					this._resizeHeight();
					this._updateButtonStates();
					var selectedItems = _this._tree.get('selectedItems');
					if (selectedItems && selectedItems.length > 0) {
						var itemNodes = _this._tree.getNodesByItem(selectedItems[0]);
						node = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
					} else if (_this._tree.lastFocused) {
						node = _this._tree.lastFocused;
					}
					if (node && _this._isItemInFilter(node)) {
						win.scrollIntoView(node.rowNode);
						if (_this._filter) {
							_this._filter.focus();
						} else {
							_this._tree.focusNode(node);
						}
					} else {
						this._cancelButton.focus();
					}
				}));
				var self = this;
				this._setUpDropDownDisable();

				aspect.after(this._treeModel, "onProcessingStarted", function() {
					self._disableDropdownClose();
				});
				aspect.after(this._treeModel, "onProcessingComplete", function() {
					self._enableDropdownClose();
				});

				this.own(this.openDropDownHandle);

				if (!this._ellipsis) {
					this._ellipsis = new Ellipsis();
					this._dropdown.containerNode.appendChild(this._ellipsis.domNode);
				}

				this.setLabel(this.defaultLabel);

				this._dropdown.dropDown = cp;

				if (this.domNode && this._dropdown.domNode) {
					this.domNode.appendChild(this._dropdown.domNode);
				}
			}

			if (this.domNode) {
				domClass.add(this.domNode, "dijitInline");
			}
		},

		/**
		 * @private Creates Tree instance
		 * @param kwArgs
		 *            model: tree model showRoot : boolean indicating to show root or not persist: boolean indicating
		 *            the persistence properties of dijit tree
		 * @return A <code>dijit.Tree</code> widget
		 */
		_createTreeInstance: function(kwArgs/*{model:model,*/) {
			this.getIconClass = this.getIconClass ? this.getIconClass : function(/*dojo.data.Item*/item, /*Boolean*/opened) {
				var rValue = "";

				if (kwArgs.model.mayHaveChildren(item)) {
					if (item.repository && item.repository._isOnDemand()) {
						if (item.id == "all" || item.id == "recents") {
							if (opened)
								rValue = "dijitFolderOpened";
							else
								rValue = "dijitFolderClosed";
						} else {
							if (opened)
								rValue = "odCabinetOpened";
							else
								rValue = "odCabinetClosed";
						}
					} else {
						if (opened)
							rValue = "dijitFolderOpened";
						else
							rValue = "dijitFolderClosed";
					}
				} else if (item.isMoreLink) {
					rValue = "ecmNoBackgroundIcon";
				} else if (item.isInstanceOf && item.isInstanceOf(Item)) {
					rValue = item.getMimeClass();
				}

				return rValue;
			};

			var treeClass = declare(Tree, {
				singular: true, // single selection for the tree

				postMixInProperties: function() {
					this.inherited(arguments);
					this.dndParams.push("singular");
				},

				postCreate: function() {
					// Temporarily disable persistance to prevent the dnd controller from loading any saved paths and auto-expanding them
					this.persist = false;
					this.inherited(arguments);
					this.persist = true;
					this.textDir = has("text-direction");
				},

				onClick: function(/* dojo.data */item, /*TreeNode*/node, /*Event*/evt) {
					Tooltip.hide(node.domNode);
					this._resize();
				},

				_expandNode: function(/*_TreeNode*/node, /*Boolean?*/recursive) {
					var deferred = this.inherited(arguments);
					deferred.then(lang.hitch(this, function() {
						this._resize();
					}));
					return deferred;
				},

				_collapseNode: function(/*_TreeNode*/node) {
					this.inherited(arguments);
					node.state = "UNCHECKED";
					this._resize();
				},

				_onItemChange: function(/*Item*/item) {
					// Overrides dijit.Tree._onItemChange() to update the node's item instead of replacing it
					var nodes;
					if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
						var openedSearches = this._itemNodesMap["opened_searches"];
						var latest = !item.repository._isP8() || item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RELEASED;
						if (openedSearches) {
							// If the item is the latest version, collect the nodes that represent the latest version of the item in the list of opened searches;
							// otherwise, collect the nodes that represent the same version of the item
							nodes = array.filter(openedSearches[0].getChildren(), function(node) {
								return item.equals(node.item) && node.item.UUID && node.item.UUID.indexOf(latest ? item.generateUUID() : item.id) == 0;
							});
						}

						if (latest) {
							// Collect nodes that represent the same item in all other lists
							if (this._itemNodesMap[item.generateUUID()])
								nodes = (nodes || []).concat(this._itemNodesMap[item.generateUUID()]);
						}
					} else {
						nodes = this._itemNodesMap[item.id];
					}

					if (nodes) {
						var label = this.getLabel(item);
						var tooltip = this.getTooltip(item);
						array.forEach(nodes, function(node) {
							var args = {
								label: label,
								tooltip: tooltip
							};

							if (node.item.isInstanceOf && node.item.isInstanceOf(ContentItem)) {
								var nodeItem = node.item;
								if (nodeItem.template) {
									nodeItem.update(item, true);
								} else {
									args.item = item;
								}
							} else {
								args.item = item;
							}

							node.set(args);
							//dijitTree does not update the text direction when label is changed and textDir is auto
							if (node.textDir === "auto") {
								node.applyTextDir(node.focusNode);
							}
							node._updateItemClasses(item);
						});
					}

					this._resize();
				},

				_onItemChildrenChange: function(/*dojo.data.Item*/parent, /*dojo.data.Item[]*/newChildrenList) {
					var model = this.model;
					var self = this;
					array.forEach(newChildrenList, function(newChild) {
						var nodes = self._itemNodesMap[model.getIdentity(newChild)];
						array.forEach(nodes, function(node) {
							// Reset the node's expand state to force it to re-expand and apply the filter
							if (node && node._expandNodeDeferred) {
								delete node._expandNodeDeferred;
							}
							if (node && node._expandDeferred) {
								delete node._expandDeferred;
							}
							if (node && node._loadDeferred) {
								delete node._loadDeferred;
							}
							node.state = "UNCHECKED";
						});
					});

					// Overrides the super-class's implementation to perform custom resizing after the children are displayed
					var identity = this.model.getIdentity(parent);
					var parentNodes = this._itemNodesMap[identity];
					if (parentNodes) {
						array.forEach(parentNodes, function(parentNode) {
							parentNode.setChildItems(newChildrenList).then(lang.hitch(this, function() {
								this._resize();
							}));
						}, this);
					}
				},

				_onItemDelete: function(/*Item*/item) {
					this.inherited(arguments);
					this._resize();
				},

				_onNodeMouseEnter: function(node, e) {
					var item = node.item;
					if (!item) {
						return;
					}
					var description = item.description;
					if (description) {
						Tooltip.show(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(description)) : idxHtml.escapeHTML(description), node.domNode, [
							"above",
							"below"
						], !this.isLeftToRight(), this.textDir);//38360
					}
				},

				_onNodeMouseLeave: function(node, e) {
					Tooltip.hide(node.domNode);
				},

				/**
				 * Resizes itself to fit the widest node.
				 */
				_resize: function() {
					if (this.domNode) {
						var maxWidth = 0;
						var traverse = function traverse(parent) {
							var node = parent.rowNode;
							node.style.width = "auto";
							maxWidth = Math.max(maxWidth, node.clientWidth);
							if (parent.isExpanded) {
								array.forEach(parent.getChildren(), traverse);
							}
						};
						traverse(this.rootNode);
						this.domNode.style.width = maxWidth ? (maxWidth + "px") : "auto";
					}
				}
			});

			return new treeClass({
				model: kwArgs.model,
				showRoot: kwArgs.showRoot,
				persist: kwArgs.persist,
				dndController: "dijit.tree._dndSelector",
				"aria-label": ecm.messages.search_selector_label,
				getIconClass: this.getIconClass
			});
		},

		/**
		 * @private
		 */
		_resizeHeight: function() {
			// Get the dimensions of the window and the space above and below the button.
			var windowBoxDimensions = win.getBox();
			var thisPosition = domGeom.position(this.domNode);
			var spaceBelow = windowBoxDimensions.h - thisPosition.y - thisPosition.h;
			var spaceAbove = thisPosition.y;
			var spaceAvailable = spaceBelow > spaceAbove ? spaceBelow : spaceAbove;

			// Add 5px margin.
			spaceAvailable -= 5;

			// If this is the first time the dropdown is opening, get the height of the two controls.
			// Otherwise, reset the height back to their original values.
			if (this._originalTreePanelHeight == null) {
				this._originalTreePanelHeight = domStyle.get(this._treePanel.id, "height");
			} else {
				domStyle.set(this._treePanel.id, "height", this._originalTreePanelHeight + "px");
			}
			if (this._originalPopUpHeight == null) {
				this._originalPopUpHeight = domStyle.get(this._popupContent.id, "height");
			} else {
				domStyle.set(this._popupContent.id, "height", this._originalPopUpHeight + "px");
			}

			// If the dropdown doesn't fit in the space available, reduce height up to 50%.
			if (this._originalPopUpHeight > spaceAvailable) {

				// Calculate the height of the tree control.
				var newTreePanelHeight = this._originalTreePanelHeight - (this._originalPopUpHeight - spaceAvailable);

				// Set the heights of the two controls.
				domStyle.set(this._treePanel.id, "height", newTreePanelHeight + "px");
				domStyle.set(this._popupContent.id, "height", spaceAvailable + "px");
			}
		},

		/**
		 * Returns the currently selected Search Template. If multiple select is enabled, then an array of Search
		 * Templates is returned.
		 * 
		 * @return An {@link ecm.model.SearchTemplate} object representing the selected item. If multiple select is
		 *         enabled, then an array of {@link ecm.model.SearchTemplate} objects is returned.
		 */
		getSelected: function() {
			return this._getSelectedTreeItems();
		},

		/**
		 * @private
		 */
		_getSelectedTreeItems: function() {
			var selectedItem = null;
			if (this._tree) {
				if (this.multiSelect) {
					return this._tree.selectedItems;
				} else {
					return this._tree.selectedItem;
				}
			}

			return null;
		},

		/**
		 * Sets the currently selected SearchTemplate.
		 * 
		 * @param searchTemplate
		 *            A string that is set to the id of the SearchTemplate to select, or an
		 *            {@link ecm.model.SearchTemplate} object representing the Search Template to select.
		 */
		setSelected: function(searchTemplate) {
			if (searchTemplate && lang.isString(searchTemplate)) {
				// Get class node from class name
				var searchTemplateNode = this._tree.getNodesByItem(searchTemplate)[0];
				if (searchTemplate) {
					// Get class item from class node.
					searchTemplate = searchTemplateNode.item;
				} else {
					// Class not found. Fall through to the default behavior below.
					searchTemplate = null;
				}
			}

			var label = null;
			// verify that it is in the tree
			if (searchTemplate) {
				var searchTemplateNode = this._tree.getNodesByItem(searchTemplate)[0];
				// sometimes the class passed into this method does not have the right name (display name)
				// so use the one from the tree instead
				if (searchTemplateNode) {
					searchTemplate = searchTemplateNode.item;
				}

				if (searchTemplate) {
					label = searchTemplate.name;
				}
			}

			this.setLabel(label);

			this._tree.set('selectedItems', [
				searchTemplate
			]);
			if (searchTemplate) {
				this.onSearchTemplateSelected(searchTemplate);
			}
			this._updateButtonStates();
		},

		/**
		 * Sets the label of the dropdown control. Only valid for the <code>dropdown</code> style.
		 * 
		 * @param label
		 *            The label to set.
		 */
		setLabel: function(label) {
			if (label) {
				this.label = label;
			} else {
				label = this.defaultLabel;
			}
			var lblDiv = domConstruct.create("div");
			var classDiv = domConstruct.create("div", {
				'class': 'dijitInline className',
				innerHTML: has("dojo-bidi") ? this.enforceTextDirWithUcc(null, entities.encode(label)) : entities.encode(label)
			}, lblDiv);

			// The dropdown may not exist yet.
			if (this._dropdown) {
				this._dropdown.set("title", has("dojo-bidi") ? this.enforceTextDirWithUcc(null, label) : label); // jaws announces the title
			}

			if (this._ellipsis) {
				this._ellipsis.set("content", lblDiv);
				setTimeout(lang.hitch(this, function() {
					if (this._ellipsis) {
						this._ellipsis.layout();

						// When the surrounding containers are not yet sized,
						// the ellipsis height is set to 0 and the label is not displayed.
						// Check for this condition and set the height to the standard size.
						var h = domStyle.get(this._ellipsis.domNode, "height");
						if (h == 0) {
							domStyle.set(this._ellipsis.domNode, "height", "15px");
						}
					}
				}));
			}
		},

		/**
		 * Sets the <code>disabled</code> attribute of the dropdown control that contains the class tree.
		 * 
		 * @param disabled
		 *            Specify <code>true</code> to disable the dropdown control. Specify <code>false</code> to
		 *            enable it.
		 */
		setDisabled: function(disabled) {
			if (this._dropdown) {
				this._dropdown.set("disabled", disabled);
			}
		},

		/**
		 * @private Handles a tree click event.
		 * @param item
		 *            A selected {@link ecm.model.SearchTemplate} object
		 * @param node
		 *            A tree node selected
		 * @param evt
		 *            An Event object
		 */
		_onTreeClick: function(/* dojo.data */item, /*TreeNode*/node, /*Event*/evt) {
//			if (this._dropdown) {
//				this._dropdown.closeDropDown();
//			}
			var searchItem = item;
			if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				if (!this.repository._isOnDemand() && !item.isNew() && !item.isLoaded() && !item.UUID) {
					var request = this.repository.retrieveSearchTemplate(item.id, item.vsId, "released", lang.hitch(this, function(searchTemplate) {
						this._treeModel.onChange(searchTemplate);
						this.onSearchTemplateSelected(searchTemplate);
					}), lang.hitch(this, function() {
						// Remove the search template from recent searches if it could not be retrieved.
						if (this.teamspace) {
							this.teamspace.removeRecentSearches([
								searchItem
							]);
						} else {
							this.repository.removeRecentSearches([
								searchItem
							]);
						}
					}));
				} else {
					this._updateButtonStates();
					this._handleSelection(item);
				}
			} else if (item.isMoreLink) {
				this._treeModel.loadMore();
			}
		},

		_setUpDropDownDisable: function() {

			if (this._dropdown) {

				this._dropdown._allowCloseOnBlur = true;

				this._dropdown.setAllowCloseOnBlur = lang.hitch(this._dropdown, function(value) {
					this._allowCloseOnBlur = value;
				});
				this._dropdown._onBlur = lang.hitch(this._dropdown, function() {
					if (this._allowCloseOnBlur) {
						dijit.form.DropDownButton.prototype._onBlur.call(this);
					}
				});

				//close dropdown is called by onExecute and other events . see ecm/dojoOverride.js  dijit.popup.open for events that can cause this.
				this._dropdown.closeDropDown = lang.hitch(this._dropdown, function() {
					if (this._allowCloseOnBlur) {
						dijit.form.DropDownButton.prototype.closeDropDown.call(this);
					}
				});
			}
		},

		count: 0,

		/**
		 * @private
		 */
		_disableDropdownClose: function() {

			if (this._dropdown) {
				this.count++;
				this._dropdown.setAllowCloseOnBlur(false);

			}
		},

		/**
		 * @private
		 */
		_enableDropdownClose: function() {

			if (this._dropdown) {
				this.count--;
				if (this.count <= 0) {
					this._dropdown.setAllowCloseOnBlur(true);
				}
			}
		},

		/**
		 * @private Check whether the classes can be selected.
		 */
		_selectionOk: function() {
			var selOk = false;
			// check if any selected are non-selectable
			if (this._tree.selectedItems != null) {
				for (var i = 0; i < this._tree.selectedItems.length; i++) {
					if (this._tree.selectedItems[i].isInstanceOf && this._tree.selectedItems[i].isInstanceOf(SearchTemplate)) {
						selOk = true;
					}
					if (!selOk) {
						break;
					}
				}
			}
			return selOk;
		},

		/**
		 * @private Update the ok button
		 */
		_updateButtonStates: function() {
			if (this._okButton) {
				var enabled = (this._tree.selectedItems != null) && (this._tree.selectedItems.length > 0);
				if (enabled)
					enabled = this._selectionOk();
				this._okButton.set("disabled", !enabled);
			}
		},

		/**
		 * @private Handle clicking on an item
		 */
		_handleSelection: function(/* dojo.data */item) {
			if (!this.multiSelect) {
				this._tree.set('selectedItems', [
					item
				]);
			}
			this._updateButtonStates();

			if (this.selectorStyle == "tree") {
				this.onSearchTemplateSelected(item);
			}

		},

		/**
		 * @private
		 */
		_handleTreeDblClick: function(/* dojo.data */item, /*TreeNode*/node, /*Event*/evt) {
			if (this._selectionOk() && this.onDblClickSelectAndClose) {
				this._pickSelectedItemAndClose(item);
			} else {
				this.onDoubleClickSelected(item);
			}
		},

		/**
		 * @private
		 */
		_pickSelectedItemAndClose: function(item) {
			var selItem = item;

			if (!selItem) {
				selItem = this.getSelected();
			}
			if (this._dropdown) {
				this._dropdown.closeDropDown();
				this._setSelectedItemLabel(selItem);
			}
			this.onSearchTemplateSelected(selItem);
		},

		/**
		 * @private
		 */
		_setSelectedItemLabel: function(selItem) {
			var lbl = "";
			if (lang.isArray(selItem)) {
				array.forEach(selItem, function(item, i) {
					if (lbl != "") {
						lbl += ", ";
					}
					lbl += item.name;
				});
			} else {
				lbl = selItem.name;
			}
			this.setLabel(lbl);
		},

		/**
		 * Callback when an item is double clicked. This is not called if the double click results in the item being
		 * selected and the dropdown being closed (usually when onDblClickSelectAndClose is <code>true</code>).
		 */
		onDoubleClickSelected: function(/* dojo.data */item) {

		},

		/**
		 * Event fired when a search template is selected.
		 * 
		 * @param searchTemplate
		 *            A selected {@link ecm.model.SearchTemplate} object
		 */
		onSearchTemplateSelected: function(searchTemplate) {
		},

		/**
		 * Event fired when the new search button is clicked.
		 */
		onNewSearchButtonClick: function() {
		},

		/**
		 * Event fired when the new unified search button is clicked.
		 */
		onNewUnifiedSearchButtonClick: function() {
		},

		/**
		 * Event fired when the tree is reloaded.
		 */
		onTreeReload: function(searchTemplates) {
		},

		/**
		 * Called whenever recent searches are loaded.
		 * 
		 * @param recentSearches
		 *            An array of recent searches loaded
		 * @since 2.0.2
		 */
		onRecentSearchesLoad: function(recentSearches) {
		},

		/**
		 * @private
		 */
		_onDownArrow: function(/*Object*/message) {
			// summary:
			//		down arrow pressed; get next visible node, set focus there
			var node = this._tree._getNextNode(message.node);

			while (node && node.domNode && node.domNode.children && node.domNode.children[0]) {
				if (domStyle.get(node.domNode.children[0], "display") != "none") {
					break;
				} else {
					node = this._tree._getNextNode(node);
				}
			}

			if (node && node.isTreeNode) {
				this._tree.focusNode(node);
			}
		},

		/**
		 * @private
		 */
		_onUpArrow: function(/*Object*/message) {
			// summary:
			//		Up arrow pressed; move to previous visible node

			var node = message.node;

			// if younger siblings
			var previousSibling = node.getPreviousSibling();

			while (previousSibling && previousSibling.domNode && previousSibling.domNode.children && previousSibling.domNode.children[0]) {
				if (domStyle.get(previousSibling.domNode.children[0], "display") != "none") {
					break;
				} else {
					previousSibling = previousSibling.getPreviousSibling();
				}
			}

			if (previousSibling) {
				node = previousSibling;
				// if the previous node is expanded, dive in deep
				while (node.isExpandable && node.isExpanded && node.hasChildren()) {
					// move to the last child
					var children = node.getChildren();
					node = children[children.length - 1];
				}
			} else {
				// if this is the first child, return the parent
				// unless the parent is the root of a tree with a hidden root
				var parent = node.getParent();
				if (!(!this._tree.showRoot && parent === this._tree.rootNode)) {
					node = parent;
				}
			}

			if (node && node.isTreeNode) {
				this._tree.focusNode(node);
			}
		},
		/**
		 * @private
		 */
		_onDropDownPaneKeyPress: function(evt) {
			if (evt.keyCode == 9 && this._focusItems && this._focusItems.length > 0) {
				event.stop(evt);

				// find current focus
				var currentFocus = -1;
				for (var i = 0; i < this._focusItems.length; i++) {
					if (this._focusItems[i].focused) {
						currentFocus = i;
						break;
					}
				}
				if (currentFocus >= 0) {
					// find next item to focus
					var nextItem = null;
					while (!nextItem) {
						if (evt.shiftKey) {
							currentFocus--;
							if (currentFocus < 0) {
								currentFocus = this._focusItems.length - 1;
							}
						} else {
							currentFocus++;
							if (currentFocus >= this._focusItems.length) {
								currentFocus = 0;
							}
						}
						nextItem = this._focusItems[currentFocus];
						// check if disabled
						if (nextItem == this._tree) {
							if (!this._isTreeFocusable()) {
								nextItem = null;
							}
						} else if (nextItem.isInstanceOf && nextItem.isInstanceOf(dojox.grid.DataGrid)) {
							// skip empty grids
							if (nextItem.store._arrayOfTopLevelItems.length == 0)
								nextItem = null;
						} else if (nextItem.disabled != null && nextItem.disabled == true) {
							nextItem = null;
						}
					}
					if (nextItem) {
						if (nextItem == this._tree) {
							this._focusTree();
						} else if (nextItem.isInstanceOf && nextItem.isInstanceOf(dojox.grid.DataGrid)) {
							var fm = nextItem.focus;
							fm.focusGrid();
							fm.setFocusIndex(0, 0);
						} else {
							nextItem.focus();
						}

					}
				}
			}
		},

		/**
		 * @private
		 */
		_focusTree: function() {
			// set focus on the tree digit. either set focus on the last focused node, or the first item.  The problems
			// occur when there is filtering, the last focused may have been filtered out, or the tree may be empty,
			// so need to check for that.
			var focusNode = this._getTreeFocusNode();
			if (focusNode) {
				this._tree.focusNode(focusNode);
			}
		},

		/**
		 * @private See if focus can be set on the tree, only false if everything has been filtered out (the tree is
		 *          empty)
		 */
		_isTreeFocusable: function() {
			var focusNode = this._getTreeFocusNode();
			return focusNode != null;
		},

		/**
		 * @private
		 */
		_getTreeFocusNode: function() {
			// Get the node in the tree to set focus on.  This would usually be the last focused node, or the root or
			// first child node.  If last focused node was filtered out, or if the tree is empty then return null
			var focusNode = null;

			// try the current selected item, if none selected then use last focused item
			var selectedItems = this._tree.get('selectedItems');
			if (selectedItems && selectedItems.length > 0) {
				var itemNodes = this._tree.getNodesByItem(selectedItems[0]);
				focusNode = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
			} else {
				focusNode = this._tree.lastFocused;
			}

			// now check if it is not filtered out and visible
			if (focusNode) {
				if (!this._isItemInFilter(focusNode)) {
					focusNode = null;
				}
			}

			// if none of that worked then use the first item
			if (!focusNode) {
				if (this._tree.get("showRoot")) {
					focusNode = this._tree.rootNode;
				} else {
					// get the first child
					var childNodes = this._tree.rootNode.getChildren();
					if (childNodes && childNodes.length > 0) {
						//focusNode = childNodes[0];
						// get first visible one
						var _this = this;
						array.some(childNodes, function(childNode) {
							if (_this._isVisible(childNode.item)) {
								focusNode = childNode;
								return true;
							} else {
								return false;
							}
						});
					}
				}
			}
			return focusNode;
		},

		/**
		 * @private Destorys this widget and its contained widgets
		 */
		destroy: function() {
			if (this._dropdown) {
				if (this._dropdown.dropDown) {
					this._dropdown.dropDown.destroy();
				}
				this._dropdown.destroy();
				this._dropdown = null;
			}

			this._clearTreeModel();
			this._clearToolbar();

			if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}

			if (this._ellipsis) {
				this._ellipsis.destroy();
				this._ellipsis = null;
			}

			if (this.addContentItem) {
				// Release the reference. The contents are self-destroyed.
				this.addContentItem = null;
			}

			this._treeNode = null;

			this.inherited(arguments);
		}
	});

});

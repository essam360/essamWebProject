/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/aspect",
	"dojo/_base/array",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"gridx/modules/Filter",
	"../../model/Desktop",
	"../../model/MySyncedFilesTreeModel",
	"../../model/SyncItem",
	"../../model/SyncServer",
	"ecm/model/MySyncedFilesResultSet",
	"../listView/gridModules/RowContextMenu",
	"../listView/modules/Breadcrumb",
	"../listView/modules/Toolbar2",
	"../listView/modules/DocInfo",
	"../listView/modules/FilterDataServer",
	"../listView/gridModules/FilterBar",
	"../listView/modules/Bar",
	"../listView/gridModules/DndFromDesktopAddDoc",
	"../listView/gridModules/DndRowMoveCopy",
	"../listView/gridModules/DndDropOnly",
	"../listView/modules/ViewDetail",
	"../listView/modules/ViewMagazine",
	"../listView/modules/ViewFilmStrip",
	"../listView/modules/InlineMessage",
	"../listView/ContentList",
	"../MySyncedFilesTree",
	"./_LaunchBarPane",
	"dojo/text!./templates/MySyncedFilesPane.html"
],

function(declare, //
lang, //
array, //
domStyle, //
domClass, //
domAttr, //
aspect, //
array, //
ContentPane, //
BorderContainer, //
Filter, //
Desktop, //
MySyncedFilesTreeModel, //
SyncItem, //
SyncServer,//
MySyncedFilesResultSet, //
RowContextMenu, //
Breadcrumb, //
Toolbar, //
DocInfo, //
FilterDataServer, //
FilterBar, //
Bar, //
DndFromDesktopAddDoc, //
DndRowMoveCopy, //
DndDropOnly, //
ViewDetail, //
ViewMagazine, //
ViewFilmStrip, //
InlineMessage, //
ContentList, //
MySyncedFilesTree, //
_LaunchBarPane, //
template) {

	/**
	 * @name ecm.widget.layout.MySyncedFilesPane
	 * @class Provides a pane that is used to store and access the documents, folders, teamspaces that a user synced.
	 * @augments ecm.widget.layout._LaunchBarPane
	 * @since 2.0.3.5
	 */
	return declare("ecm.widget.layout.MySyncedFilesPane", [
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.MySyncedFilesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._config = this.getFeatureConfiguration();

			domAttr.set(this.syncItemsContent.domNode, "role", "region");
			domAttr.set(this.syncItemsContent.domNode, "aria-label", ecm.messages.syncItems_content_list_label);

			this.syncItemsContent.setGridExtensionModules(this.getContentListGridModules(true));
			this.syncItemsContent.setContentListModules(this.getContentListModules());
			this._addDesktopListeners();
			this._addContentListListeners();
			this.logExit("postCreate");
		},

		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to retrieve the correct feature
		 * configuration information.
		 */
		getFeatureConfiguration: function() {
			// Add a tab for my checkouts if it is configured to be shown on the desktop
			if (this.feature && this.feature.configurations) {
				return this.feature.configurations;
			} else {
				return null;
			}
		},

		/**
		 * @private Add desktop listeners.
		 */
		_addDesktopListeners: function() {
			this.own(aspect.after(Desktop, "onLogout", lang.hitch(this, function(repository) {
				if (this.mySyncedFilesTree && this.mySyncedFilesTree.rootNode && this.mySyncedFilesTree.rootNode.item) {
					this.mySyncedFilesTree.dndController.selectNone();
				}
				if (this.syncItemsContent)
					this.syncItemsContent.reset();
			}), true));

			this.own(aspect.after(Desktop, "onChange", lang.hitch(this, function(modelObject) {
				var repository = this.syncItemsContent.getResultSet() && this.syncItemsContent.getResultSet().parentFolder && this.syncItemsContent.getResultSet().parentFolder.repository ? this.syncItemsContent.getResultSet().parentFolder.repository : null;
				if (repository && modelObject == repository) {
					this._showHideFilter();
				}
			}), true));

			this.own(aspect.after(Desktop.syncServer, "onEnableSyncForItemsComplete", lang.hitch(this, function() {
				domStyle.set(this.syncItemsContent.domNode, "display", "");
				domStyle.set(this.syncItemsContentEmpty.domNode, "display", "none");
			})));
			this.own(aspect.after(Desktop.syncServer, "onDisableSyncForItemsComplete", lang.hitch(this, function() {
				if (!Desktop.syncItems || Desktop.syncItems.length == 0) {
					domStyle.set(this.syncItemsContent.domNode, "display", "none");
					domStyle.set(this.syncItemsContentEmpty.domNode, "display", "");
				}
			})));
		},

		/**
		 * @private Shows or hides the filterData module based on if the repository supports filtering.
		 */
		_showHideFilter: function() {
			var filterData = this.syncItemsContent.getContentListModule("filterData");
			if (filterData) {
				var repository = this.syncItemsContent.getResultSet() && this.syncItemsContent.getResultSet().parentFolder && this.syncItemsContent.getResultSet().parentFolder.repository ? this.syncItemsContent.getResultSet().parentFolder.repository : null;
				if (repository && repository.supportsFiltering()) {
					domClass.remove(filterData.domNode, "dijitHidden");
					filterData.isCaseSensitive = repository.isCaseSensitiveFiltering();
				} else {
					domClass.add(filterData.domNode, "dijitHidden");
				}
			}
		},

		/**
		 * Returns the content list modules.
		 * 
		 * @return Array of content list modules.
		 */
		getContentListModules: function() {
			var viewModules = [];
			if (this._config && this._config.showViews && this._config.showViews.length > 0) {
				for ( var i = 0; i < this._config.showViews.length; i++) {
					var viewId = this._config.showViews[i];
					if (viewId == "detail") {
						viewModules.push(ViewDetail);
					} else if (viewId == "magazine") {
						viewModules.push(ViewMagazine);
					} else if (viewId == "filmstrip") {
						viewModules.push(ViewFilmStrip);
					}
				}
			}
			if (viewModules.length == 0) {
				viewModules.push(ViewDetail);
				viewModules.push(ViewMagazine);
				if (Desktop.showViewFilmstrip)
					viewModules.push(ViewFilmStrip);
			}

			var detailsListView = Desktop.getRequestParam("defaultListView");
			if ((detailsListView == "viewDetail" && array.indexOf(viewModules, ViewDetail) > -1) //
					|| (detailsListView == "viewMagazine" && array.indexOf(viewModules, ViewMagazine) > -1) //
					|| (detailsListView == "viewFilmStrip" && array.indexOf(viewModules, ViewFilmStrip) > -1))
				this.syncItemsContent._viewCurrentName = detailsListView;

			var modules = [];
			modules.push({
				moduleClass: Bar,
				top: [
					[ // Table
						[ // Row 
							{
								moduleClass: Toolbar
							},
							{
								moduleClasses: viewModules,
								"className": "BarViewModules"
							}
						]
					],
					[ // Table
						[ // Row 
							{
								moduleClass: Breadcrumb
							//},
							//{
							//moduleClass: FilterDataServer,
							//"className": "BarFilterData"
							}
						]
					],
					[
						[
							{
								moduleClass: InlineMessage
							}
						]
					]
				]
			});

			if (this._config && this._config.showDocumentInfoPane) {
				//only show the doc info pane when set it is shown.
				modules.push({
					moduleClass: DocInfo,
					selectAutoOpen: this._config.documentInfoPaneOpenOnSelection,
					showSystemProps: false
				});
			}
			return modules;
		},

		/**
		 * Returns the grid modules.
		 * 
		 * @param isSyncItemRoot
		 *            Boolean indicate if the grid modules are for the sync item root.
		 * @return Array of grid modules.
		 */
		getContentListGridModules: function(isSyncItemRoot) {
			var array = [];
			if (isSyncItemRoot != undefined && isSyncItemRoot == true) {
				array.push(DndDropOnly); // can only drop items onto the sync item, cannot copy or move sync item rows
			} else {
				array.push(DndRowMoveCopy);
			}
			array.push(DndFromDesktopAddDoc);
			array.push(RowContextMenu);
			return array;
		},

		/**
		 * @private Returns boolean indicating if the tree's root contains any of the input items.
		 */
		_isInTreeRoot: function(items) {
			if (this.mySyncedFilesTree) {
				var rootChildren = this.mySyncedFilesTree.rootNode.getChildren();
				if (rootChildren && rootChildren.length > 0) {
					for ( var i = 0; i < items.length; i++) {
						var item = items[i];
						for ( var j = 0; j < rootChildren.length; j++) {
							if (rootChildren[j].item.id == item.id) {
								return true;
							}
						}
					}
				}
			}
			return false;
		},

		/**
		 * @private Returns boolean indicating if the breadcrumb contains any of the input items.
		 */
		_isInBreadcrumb: function(items) {
			if (this.syncItemsContent) {
				var breadcrumbModule = this.syncItemsContent.getContentListModule("breadcrumb");
				if (breadcrumbModule) {
					for ( var i = 0; i < items.length; i++) {
						var item = items[i];
						if (breadcrumbModule.hasItem(item)) {
							return true;
						} else if (item.isInstanceOf && (item.isInstanceOf(SyncItem) || item.isInstanceOf(SyncItem)) && item.item && breadcrumbModule.hasItem(item.item)) {
							return true;
						}
					}
				}
			}
			return false;
		},

		/**
		 * Creates the tree and the module and listens to events.
		 */
		loadContent: function(data) {
			this.logEntry("loadContent");

			if (!this.isLoaded) {
				var rootItem = this.bookmarkFolder;
				if (!rootItem) {
					rootItem = SyncItem.createFromJSON({
						id: "_ecmMySyncedFilesRootNode",
						name: Desktop.getConfiguredLabelsvalue("mySyncedFiles"),
						type: "folder"
					});
				} else {
					this._isBookmark = true;
					this._togglesyncItemsContentEmpty(false);
				}
				this.syncItemsModel = new MySyncedFilesTreeModel(rootItem, data);

				this.mySyncedFilesTree = new MySyncedFilesTree({
					region: "leading",
					rootObject: rootItem,
					model: this.syncItemsModel,
					splitter: true,
					"class": "leadingPane favoritesList",
					showRoot: true,
					persist: false,
					enableDnd: true,
					showMissingFolderMessage: false,
					"aria-label": ecm.messages.syncItems_tree_label
				});
				this._addTreeListeners();

				this.container.addChild(this.mySyncedFilesTree, 0);
				this.container.layout();
				this.syncItemsContent.openItem(this.syncItemsModel._rootItem);

				this.isLoaded = true;
				this.needReset = false;
			}

			this.logExit("loadContent");
		},

		/**
		 * @private Add tree listeners.
		 */
		_addTreeListeners: function() {
			this.own(aspect.after(this.mySyncedFilesTree.rootNode, "setChildItems", lang.hitch(this, function(deferred) {
				if (this.syncItemsContent.getResultSet()) {
					if (this.syncItemsModel._data && this.syncItemsContent.getResultSet().parentFolder.id == "_ecmMySyncedFilesRootNode") {
						this._contentListOpenItemHandler(this.syncItemsModel._rootItem);
					}
				} else {
					if (this.mySyncedFilesTree && this.mySyncedFilesTree.rootObject) {
						this.mySyncedFilesTree.set('path', [
							this.mySyncedFilesTree.rootObject
						]);
					}

					if (!this._isBookmark)
						this._checkForNoSyncItems();
					this._contentListOpenItemHandler(this.syncItemsModel._rootItem);
				}

				if (deferred) {
					return deferred;
				}
			})));

			if (!this.syncItemsModel._data) {
				this.own(aspect.after(this.mySyncedFilesTree, "onRefresh", lang.hitch(this, function() {
					this.syncItemsModel.reload();
				}), true));
			}

			// onItemSelected called when user selects a node in the tree
			this.own(aspect.after(this.mySyncedFilesTree, "onItemSelected", lang.hitch(this, function(item) {
				if (!this.syncItemsContent.getResultSet() || !this.syncItemsContent.getResultSet().isResultSetForItem(item)) {
					this._contentListOpenItemHandler(item);
				}
			}), true));

			this.own(aspect.after(this.mySyncedFilesTree, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // will select other panes if needed
			this.own(aspect.after(this.mySyncedFilesTree, "onEditItem", lang.hitch(this, "onEditItem"), true)); // will select other panes if needed
		},

		/**
		 * @private Add content list listeners.
		 */
		_addContentListListeners: function() {
			this.own(aspect.after(this.syncItemsContent, "onModulesLoaded", lang.hitch(this, function() {
				var dndModule = this.syncItemsContent.getGridModule("dnd");
				if (dndModule && this.mySyncedFilesTree) {
					dndModule.row.setTree(this.mySyncedFilesTree);
				}

				this._showHideFilter();
				if (this._config && this._config.showDocumentInfoPane && this._config.documentInfoPaneDefaultOpen) {
					var docInfoModule = this.syncItemsContent.getContentListModule("rightPane");
					docInfoModule.setPaneWidth();
					this.syncItemsContent.gridContainer.restore("trailing");
					this.syncItemsContent.gridContainer.onPanelOpen();
				}
			}), true));

			this.own(aspect.after(this.syncItemsContent, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // will select other panes if needed
			this.own(aspect.after(this.syncItemsContent, "onOpenItem", lang.hitch(this, function(item, data) {
				if (data && data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.MySyncedFilesResultSet)) && item.getPath) {
					var path = item.getPath();
					if (this.mySyncedFilesTree && !this.mySyncedFilesTree.isPathSelected(path)) {
						this.mySyncedFilesTree.set("path", path);
					}
				}
				this.openItemInProgress = false;
			}), true));

			this.own(aspect.after(this.syncItemsContent, "onEditItem", lang.hitch(this, "onEditItem"), true)); // will select other panes if needed
			this.syncItemsContent.onBeforeSetResultSet = lang.hitch(this, function(resultSet) { // re-set the grid modules
				if (resultSet && resultSet.parentFolder) {
					this.syncItemsContent.setGridExtensionModules(this.getContentListGridModules(resultSet.parentFolder.id == this.mySyncedFilesTree.rootNode.item.id));
				}
			});

			this.own(aspect.after(this.syncItemsContent, "onSetResultSet", lang.hitch(this, function(resultSet) {
				var resultSet = this.syncItemsContent.getResultSet();
				if (resultSet && resultSet.parentFolder.id == "_ecmMySyncedFilesRootNode" && resultSet.items && resultSet.items.length > 0) {
					this._togglesyncItemsContentEmpty(false);
				} else if (resultSet && resultSet.parentFolder.id == "_ecmMySyncedFilesRootNode" && (!resultSet.items || resultSet.items.length == 0)) {
					this._togglesyncItemsContentEmpty(true);
				}
			}), true));
		},

		/**
		 * @private
		 */
		_contentListOpenItemHandler: function(item) {
			if (!this.openItemInProgress) {
				this.openItemInProgress = true;
				this.syncItemsContent.openItem(item);
			}
		},

		/**
		 * @private If no items in the sync items, then display sync items empty message.
		 */
		_checkForNoSyncItems: function() {
			var items = this.syncItemsModel.getResultSet().items;
			if (items && items.length > 0) {
				this._togglesyncItemsContentEmpty(false);
			} else {
				this._togglesyncItemsContentEmpty(true);
			}
		},

		/**
		 * @private
		 */
		_togglesyncItemsContentEmpty: function(isEmpty) {
			if (isEmpty) {
				domStyle.set(this.syncItemsContent.domNode, "display", "none");
				domStyle.set(this.syncItemsContentEmpty.domNode, "display", "");
			} else {
				domStyle.set(this.syncItemsContent.domNode, "display", "");
				domStyle.set(this.syncItemsContentEmpty.domNode, "display", "none");
			}
		},

		/**
		 * When reset, reload the sync items model.
		 */
		reset: function() {
			this.logEntry("reset");
			if (this.syncItemsModel) {
				this.syncItemsModel.reload();
			}
			this.needReset = false;
			this.logExit("reset");
		}
	});
});

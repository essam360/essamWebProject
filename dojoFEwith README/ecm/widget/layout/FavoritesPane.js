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
	"../../model/FavoritesTreeModel",
	"../../model/Favorite",
	"ecm/model/FavoritesResultSet",
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
	"../FavoritesTree",
	"./_LaunchBarPane",
	"dojo/text!./templates/FavoritesPane.html"
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
FavoritesTreeModel, //
Favorite, //
FavoritesResultSet, //
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
FavoritesTree, //
_LaunchBarPane, //
template) {

	/**
	 * @name ecm.widget.layout.FavoritesPane
	 * @class Provides a pane that is used to store and access the documents, folders, teamspaces, or predefined
	 *        searches that a user uses most frequently.
	 * @augments ecm.widget.layout._LaunchBarPane
	 */
	return declare("ecm.widget.layout.FavoritesPane", [
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.FavoritesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._config = this.getFeatureConfiguration();

			domAttr.set(this.favoritesContent.domNode, "role", "region");
			domAttr.set(this.favoritesContent.domNode, "aria-label", ecm.messages.favorites_content_list_label);

			this.favoritesContent.setGridExtensionModules(this.getContentListGridModules(true));
			this.favoritesContent.setContentListModules(this.getContentListModules());
			this._addDesktopListeners();
			this._addContentListListeners();
			this.logExit("postCreate");
		},

		/**
		 * Focus on the tree.
		 */
		focus: function() {
			if (this.favoritesTree) {
				if (this.favoritesTree.rootNode) {
					this.favoritesTree.rootNode.focus();
				} else {
					this.favoritesTree.focus();
				}
			}
		},

		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to retrieve the correct feature
		 * configuration information.
		 * 
		 * @since 2.0.3.3
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
				if (this.favoritesTree && this.favoritesTree.rootNode && this.favoritesTree.rootNode.item) {
					this.favoritesTree.dndController.selectNone();
				}
				if (this.favoritesContent)
					this.favoritesContent.reset();
			}), true));

			this.own(aspect.after(Desktop, "onChange", lang.hitch(this, function(modelObject) {
				var repository = this.favoritesContent.getResultSet() && this.favoritesContent.getResultSet().parentFolder && this.favoritesContent.getResultSet().parentFolder.repository ? this.favoritesContent.getResultSet().parentFolder.repository : null;
				if (repository && modelObject == repository) {
					this._showHideFilter();
				}
			}), true));

			this.own(aspect.after(Desktop, "onFavoriteAdded", lang.hitch(this, function() {
				domStyle.set(this.favoritesContent.domNode, "display", "");
				domStyle.set(this.favoritesContentEmpty.domNode, "display", "none");
			})));
			this.own(aspect.after(Desktop, "onFavoritesRemoved", lang.hitch(this, function() {
				if (!Desktop.favorites || Desktop.favorites.length == 0) {
					domStyle.set(this.favoritesContent.domNode, "display", "none");
					domStyle.set(this.favoritesContentEmpty.domNode, "display", "");
				}
			})));
		},

		/**
		 * @private Shows or hides the filterData module based on if the repository supports filtering.
		 */
		_showHideFilter: function() {
			var filterData = this.favoritesContent.getContentListModule("filterData");
			if (filterData) {
				var repository = this.favoritesContent.getResultSet() && this.favoritesContent.getResultSet().parentFolder && this.favoritesContent.getResultSet().parentFolder.repository ? this.favoritesContent.getResultSet().parentFolder.repository : null;
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
				for (var i = 0; i < this._config.showViews.length; i++) {
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
				this.favoritesContent._viewCurrentName = detailsListView;

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
		 * @param isFavoritesRoot
		 *            Boolean indicate if the grid modules are for the favorites root.
		 * @return Array of grid modules.
		 */
		getContentListGridModules: function(isFavoritesRoot) {
			var array = [];
			if (isFavoritesRoot != undefined && isFavoritesRoot == true) {
				array.push(DndDropOnly); // can only drop items onto the favorites, cannot copy or move favorites rows
			} else {
				array.push(DndRowMoveCopy);
			}
			array.push(DndFromDesktopAddDoc);
			array.push(RowContextMenu);
			/* array.push(Filter);
			array.push({
				moduleClass: FilterBar,
				conditionContain: ecm.messages.operator_LIKE,
				conditionStartWith: ecm.messages.operator_STARTSWITH,
				conditionEndWith: ecm.messages.operator_ENDSWITH,
				conditions: {
					string: [
						'contain',
						'startWith',
						'endWith'
					]
				}
			}); */
			return array;
		},

		/**
		 * @private Returns boolean indicating if the tree's root contains any of the input items.
		 */
		_isInTreeRoot: function(items) {
			if (this.favoritesTree) {
				var rootChildren = this.favoritesTree.rootNode.getChildren();
				if (rootChildren && rootChildren.length > 0) {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						for (var j = 0; j < rootChildren.length; j++) {
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
			if (this.favoritesContent) {
				var breadcrumbModule = this.favoritesContent.getContentListModule("breadcrumb");
				if (breadcrumbModule) {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						if (breadcrumbModule.hasItem(item)) {
							return true;
						} else if (item.isInstanceOf && item.isInstanceOf(Favorite) && item.item && breadcrumbModule.hasItem(item.item)) {
							return true;
						}
					}
				}
			}
			return false;
		},

		/**
		 * Creates the favorites tree and favorites module and listens to events.
		 */
		loadContent: function(data) {
			this.logEntry("loadContent");

			if (!this.isLoaded) {
				this.isLoaded = true;

				var rootItem = this.bookmarkFolder;
				if (!rootItem) {
					rootItem = Favorite.createFromJSON({
						id: "_ecmFavoritesRootNode",
						name: Desktop.getConfiguredLabelsvalue("favorites"),
						type: "folder"
					});
				} else {
					this._isBookmark = true;
					this._toggleFavoritesContentEmpty(false);
				}
				this.favoritesModel = new FavoritesTreeModel(rootItem, data);

				this.favoritesTree = new FavoritesTree({
					region: "leading",
					rootObject: rootItem,
					model: this.favoritesModel,
					splitter: true,
					"class": "leadingPane favoritesList",
					showRoot: true,
					persist: false,
					enableDnd: true,
					showMissingFolderMessage: false,
					"aria-label": ecm.messages.favorites_tree_label
				});
				this._addTreeListeners();

				this.container.addChild(this.favoritesTree, 0);
				this.container.layout();
				this.favoritesContent.openItem(this.favoritesModel._rootItem);

				this.needReset = false;
			}

			this.logExit("loadContent");
		},

		/**
		 * @private Add tree listeners.
		 */
		_addTreeListeners: function() {
			this.own(aspect.after(this.favoritesTree, "onLoad", lang.hitch(this, function() {
				setTimeout(lang.hitch(this, "focus"), 900);
			}), true));

			this.own(aspect.after(this.favoritesTree.rootNode, "setChildItems", lang.hitch(this, function(deferred) {
				if (this.favoritesContent.getResultSet()) {
					if (this.favoritesModel._data && this.favoritesContent.getResultSet().parentFolder.id == "_ecmFavoritesRootNode") {
						this._contentListOpenItemHandler(this.favoritesModel._rootItem);
					}
				} else {
					if (this.favoritesTree && this.favoritesTree.rootObject) {
						this.favoritesTree.set('path', [
							this.favoritesTree.rootObject
						]);
					}

					if (!this._isBookmark)
						this._checkForNoFavorites();
					this._contentListOpenItemHandler(this.favoritesModel._rootItem);
				}

				if (deferred) {
					return deferred;
				}
			})));

			if (!this.favoritesModel._data) {
				this.own(aspect.after(this.favoritesTree, "onRefresh", lang.hitch(this, function() {
					this.favoritesModel.reload();
				}), true));
			}

			// onItemSelected called when user selects a node in the tree
			this.own(aspect.after(this.favoritesTree, "onItemSelected", lang.hitch(this, function(item) {
				if (!this.favoritesContent.getResultSet() || !this.favoritesContent.getResultSet().isResultSetForItem(item)) {
					this._contentListOpenItemHandler(item);
				}
			}), true));

			this.own(aspect.after(this.favoritesTree, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // will select other panes if needed
			this.own(aspect.after(this.favoritesTree, "onEditItem", lang.hitch(this, "onEditItem"), true)); // will select other panes if needed
		},

		/**
		 * @private Add content list listeners.
		 */
		_addContentListListeners: function() {
			this.own(aspect.after(this.favoritesContent, "onModulesLoaded", lang.hitch(this, function() {
				var dndModule = this.favoritesContent.getGridModule("dnd");
				if (dndModule && this.favoritesTree) {
					dndModule.row.setTree(this.favoritesTree);
				}

				this._showHideFilter();
				if (this._config && this._config.showDocumentInfoPane && this._config.documentInfoPaneDefaultOpen) {
					var docInfoModule = this.favoritesContent.getContentListModule("rightPane");
					docInfoModule.setPaneWidth();
					this.favoritesContent.gridContainer.restore("trailing");
					this.favoritesContent.gridContainer.onPanelOpen();
				}
			}), true));

			this.own(aspect.after(this.favoritesContent, "onOpenItem", lang.hitch(this, function(item, data) {
				if (data && data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.FavoritesResultSet)) && item.getPath) {
					var path = item.getPath();
					if (this.favoritesTree && !this.favoritesTree.isPathSelected(path)) {
						this.favoritesTree.set("path", path);
					}
				}
				this.openItemInProgress = false;
				if (item != null) {
					this.onOpenItem(item, data);
				}
			}), true));

			this.own(aspect.after(this.favoritesContent, "onEditItem", lang.hitch(this, "onEditItem"), true)); // will select other panes if needed
			this.favoritesContent.onBeforeSetResultSet = lang.hitch(this, function(resultSet) { // re-set the grid modules
				if (resultSet && resultSet.parentFolder) {
					this.favoritesContent.setGridExtensionModules(this.getContentListGridModules(resultSet.parentFolder.id == this.favoritesTree.rootNode.item.id));
				}
			});

			this.own(aspect.after(this.favoritesContent, "onSetResultSet", lang.hitch(this, function(resultSet) {
				var resultSet = this.favoritesContent.getResultSet();
				if (resultSet && resultSet.parentFolder.id == "_ecmFavoritesRootNode" && resultSet.items && resultSet.items.length > 0) {
					this._toggleFavoritesContentEmpty(false);
				} else if (resultSet && resultSet.parentFolder.id == "_ecmFavoritesRootNode" && (!resultSet.items || resultSet.items.length == 0)) {
					this._toggleFavoritesContentEmpty(true);
				}
			}), true));
		},

		/**
		 * @private
		 */
		_contentListOpenItemHandler: function(item) {
			if (!this.openItemInProgress) {
				this.openItemInProgress = true;
				this.favoritesContent.openItem(item);
			}
		},

		/**
		 * @private If no items in the favorites, then display favorites empty message.
		 */
		_checkForNoFavorites: function() {
			var items = this.favoritesModel.getResultSet().items;
			if (items && items.length > 0) {
				this._toggleFavoritesContentEmpty(false);
			} else {
				this._toggleFavoritesContentEmpty(true);
			}
		},

		/**
		 * @private
		 */
		_toggleFavoritesContentEmpty: function(isEmpty) {
			if (isEmpty) {
				domStyle.set(this.favoritesContent.domNode, "display", "none");
				domStyle.set(this.favoritesContentEmpty.domNode, "display", "");
			} else {
				domStyle.set(this.favoritesContent.domNode, "display", "");
				domStyle.set(this.favoritesContentEmpty.domNode, "display", "none");
			}
		},

		/**
		 * When reset, reload the favorites model.
		 */
		reset: function() {
			this.logEntry("reset");
			if (this.favoritesModel) {
				this.favoritesModel.reload();
			}
			this.needReset = false;
			this.logExit("reset");
		}
	});
});

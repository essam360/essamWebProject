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
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/aspect",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"idx/layout/BorderContainer",
	//"gridx/modules/dnd/Column",
	"gridx/modules/Filter",
	"./_LaunchBarPane",
	"../../model/Desktop",
	"../../model/Message",
	"../listView/gridModules/RowContextMenu",
	"../listView/modules/Breadcrumb",
	"../listView/modules/Toolbar2",
	"../listView/modules/DocInfo",
	"../listView/gridModules/DndRowMoveCopy",
	"../listView/gridModules/DndFromDesktopAddDoc",
	"../listView/gridModules/FilterBar",
	"../listView/modules/Bar",
	"../listView/modules/FilterDataServer",
	"../listView/modules/ViewDetail",
	"../listView/modules/ViewMagazine",
	"../listView/modules/ViewFilmStrip",
	"../listView/modules/InlineMessage",
	"../listView/ContentList",
	"../FolderTree",
	"../RepositorySelector",
	"./_RepositorySelectorMixin",
	"dojo/text!./templates/BrowsePane.html"
],

function(declare, //
lang, //
array, //
domStyle, //
domAttr, //
domClass, //
aspect, //
Button, //
ContentPane, //
BorderContainer, //
idxBorderContainer, //
//Column, //
Filter, //
_LaunchBarPane, //
Desktop, //
Message, //
RowContextMenu, //
Breadcrumb, //
Toolbar, //
DocInfo, //
DndRowMoveCopy, //
DndFromDesktopAddDoc, //
FilterBar, //
Bar, //
FilterDataServer, //
ViewDetail, //
ViewMagazine, //
ViewFilmStrip, //
InlineMessage, //
ContentList, //
FolderTree, //
RepositorySelector, //
_RepositorySelectorMixin, //
template) {

	/**
	 * @name ecm.widget.layout.BrowsePane
	 * @class Provides a pane that is used to browse folders and documents.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._RepositorySelectorMixin
	 */
	return declare("ecm.widget.layout.BrowsePane", [
		_LaunchBarPane,
		_RepositorySelectorMixin
	], {
		/** @lends ecm.widget.layout.BrowsePane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		viewMode: 1, // Browse

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._config = this.getFeatureConfiguration();
			this.showTreeView = this._config && this._config.showTreeView;

			domAttr.set(this.folderContents.domNode, "role", "region");
			domAttr.set(this.folderContents.domNode, "aria-label", ecm.messages.browse_content_list_label);

			this.folderContents.setContentListModules(this.getContentListModules());
			this.folderContents.setGridExtensionModules(this.getContentListGridModules());
			this.own(aspect.after(this.folderContents, "onModulesLoaded", lang.hitch(this, function() {
				var dndModule = this.folderContents.getGridModule("dnd");
				if (dndModule) {
					dndModule.row.setTree(this.folderTree._tree);
				}

				this._showHideFilter();
				if (this._config && this._config.showDocumentInfoPane && this._config.documentInfoPaneDefaultOpen) {
					var docInfoModule = this.folderContents.getContentListModule("rightPane");
					docInfoModule.setPaneWidth();
					this.folderContents.gridContainer.restore("trailing");
					this.folderContents.gridContainer.onPanelOpen();
				}

			}), true));
			this.defaultLayoutRepositoryComponent = "browse";
			this.setRepositoryTypes("cm,p8,cmis,box");
			this.doBrowseConnections();

			if (this.showTreeView) {
				// If there is more than one repository in the list, show the selector to the user.
				this.repositorySelector = new RepositorySelector({
					'class': "reposSelectorArea",
					folderingEnabledOnly: true,
					type: "dropdown",
					viewMode: 1
				// Browse
				});
				this.doRepositorySelectorConnections();
				// Hide the selector only if there is 1 repository & and it is the default repository.
				// (If the user doesn't have permission to the default repository, then it is removed from the list by the RepositorySelector.)
				if (this.repositorySelector.getNumRepositories() > 1 || this.repositorySelector.getDropdown().get("value") != this._config.defaultRepository) {
					this.repositorySelectorArea.domNode.appendChild(this.repositorySelector.domNode);

					if (this.repositorySelector.getNumRepositories() == 1 && this.repositorySelector.getDropdown().get("value") != this._config.defaultRepository) {
						var repository = this.repositorySelector._getRepository(this.repositorySelector.getDropdown().get("value"));
						this.onRepositorySelectorSelect([
							repository
						]);
						domClass.add(this.domNode, "hideNavContainerTop");
					}
				} else {
					domClass.add(this.domNode, "hideNavContainerTop");
				}
			} else {
				this.doRepositorySelectorConnections();
				var style = domStyle.getComputedStyle(this.treeContainer.domNode);
				if (style.display != "none" && style.visibility != "hidden") {
					this.treeContainer.set("splitter", false);
					domStyle.set(this.treeContainer.domNode, "display", "none");
				}
			}
			this.logExit("postCreate");
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
		 * Override to check for repository parameter in URL
		 */
		getDefaultLayoutRepository: function() {
			var repository = null;
			var repositoryOverride = false;

			// See if the default repository is overridden by a url parameter.
			var params = location.search.substring(1).split("&");
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split("=");
				if (param[0] == "repository") {
					repositoryOverride = true;
					var repositoryId = param[1];
					repository = Desktop.getRepository(repositoryId);
					if (repository == null) {
						Desktop.addMessage(Message.createErrorMessage("browse_repository_not_found_error", [
							repositoryId,
							Desktop.name
						]));
					} else if (!repository.showInBrowseView) {
						repository = null;
						Desktop.addMessage(Message.createErrorMessage("browse_repository_not_enabled_error", [
							repositoryId,
							Desktop.name
						]));
					}
					break;
				}
			}

			if (repositoryOverride == false) {
				return this.inherited(arguments);
			} else {
				return repository;
			}
		},

		/**
		 * since 2.0.3
		 */
		onRepositorySelectorSelect: function(repositories) {
			// Ignore the event if there are folder parameters in the URL and the control has not been loaded.
			if (this._getFolderUrlParameter().length == 0 || this.isLoaded) {
				this.inherited(arguments);
			}
		},

		/**
		 * @private Shows or hides the filterData module based on if the repository supports filtering.
		 */
		_showHideFilter: function() {
			var filterData = this.folderContents.getContentListModule("filterData");
			if (filterData && this.repository) {
				if (this.repository.supportsFiltering()) {
					domClass.remove(filterData.domNode, "dijitHidden");
					filterData.isCaseSensitive = this.repository.isCaseSensitiveFiltering();
				} else {
					domClass.add(filterData.domNode, "dijitHidden");
				}
			}
		},

		/**
		 * Returns the content list grid modules used by this view.
		 * 
		 * @return Array of grid modules.
		 */
		getContentListGridModules: function() {
			var array = [];
			array.push(DndRowMoveCopy);
			array.push(DndFromDesktopAddDoc);
			array.push(RowContextMenu);
			//array.push(Column);
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
		 * Returns the content list modules used by this view.
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
				this.folderContents._viewCurrentName = detailsListView;

			var modules = [];
			if (this._config && this._config.showDocumentInfoPane) { //only show the doc info pane when set it is shown.
				modules.push({
					moduleClass: DocInfo,
					selectAutoOpen: this._config.documentInfoPaneOpenOnSelection,
					showSystemProps: false
				});
			}
			modules.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: Toolbar
							},
							{
								moduleClasses: viewModules,
								"className": "BarViewModules"
							}
						]
					],
					[
						[
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
			return modules;
		},

		/**
		 * Opens a tab with the given parameters.
		 */
		setParams: function(params) {
			this.logEntry("setParams", params);
			if (params) {
				if (params.repository) {
					this.setRepository(params.repository);
				}
				if (!this.isLoaded && this.selected) {
					this.loadContent();
				}
			}
			this.logExit("setParams");
		},

		/**
		 * Focus on the repository selector's drop down.
		 */
		focus: function() {
			if (this.repositorySelector && this.repositorySelector.getDropdown()) {
				this.repositorySelector.getDropdown().focus();
			}
		},

		/**
		 * @since 2.0.3
		 */
		loadDefaultRepository: function() {
			// Overridden to check for folder parameters in the URL. If found, sets the specified folder as root
			// on the initial load.
			if (this.selected) {
				var repository = this.getDefaultLayoutRepository();

				if (this.repositorySelector) {
					if (this.repositorySelector.type == "dropdown")
						this.repositorySelector.getDropdown().set("value", repository.id);
					else
						this.repositorySelector.getMenu().set("value", repository.id);
				}

				if (this.showTreeView == false) {
					var treeContainer = this.treeContainer;
					if (treeContainer) {
						this.removeChild(treeContainer);
						treeContainer.destroyRecursive();
					}
				}

				if (repository && repository.connected) {
					this._getRootFolder(repository, lang.hitch(this, function(folder) {
						var folderOrRepository = folder == null ? repository : folder;
						this._setFolderOrRepository(folderOrRepository);
						if (!this.isLoaded)
							this.loadContent();
					}));
				} else if (repository) {
					this.connectToRepository(repository, lang.hitch(this, function() {
						this._getRootFolder(repository, lang.hitch(this, function(folder) {
							var folderOrRepository = folder == null ? repository : folder;
							this._setFolderOrRepository(folderOrRepository);
							if (!this.isLoaded)
								this.loadContent();
						}));
					}));
				}
			}
		},

		_getRootFolder: function(repository, callback) {
			var folderUrlParameter = this._getFolderUrlParameter();
			if (folderUrlParameter.length > 0) {
				repository.retrieveItem(folderUrlParameter, callback, null, null, null, null, "browseFolder");
			} else {
				callback();
			}
		},

		_getFolderUrlParameter: function() {
			var folderId = "";
			// See if the we need to set the root to a folder specified as a URL parameter.
			var params = location.search.substring(1).split("&");
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split("=");
				if (param[0] == "folder") {
					folderId = decodeURIComponent(param[1]);
					break;
				}
			}
			return folderId;
		},

		/**
		 * Sets the repository.
		 * 
		 * @param repository
		 *            An instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			this._setFolderOrRepository(repository);
		},

		_setFolderOrRepository: function(folderOrRepository) {
			var folder = null;
			// Save the new repository

			// At logout, the browse repository is set to null.
			if (!folderOrRepository) {
				this.repository = folderOrRepository;
			} else if (folderOrRepository.isInstanceOf && folderOrRepository.isInstanceOf(ecm.model.Repository)) {
				this.repository = folderOrRepository;
			} else {
				// Assume folder.
				folder = folderOrRepository;
				this.repository = folder.repository;
			}

			// Clear the tree and contentlist first before loading the items from the new repositories
			this.clear();

			// Only set the repository in the pane if it is available and the pane is selected.
			// If not, hold the repository until the pane is selected.
			if (this.repository && this.selected) {
				// If the browse pane is defined as the start pane and
				// the user logged into an OD server, show the flyout and make them select another pane
				if (this.repository && this.repository.type == "od") {
					this.openButtonFlyout("browsePane");
					this.isLoaded = false;
				} else if (this.repository && this.repository.getPrivilege("foldering")) {
					if (this.repositorySelector)
						this.repositorySelector.getDropdown().set("value", this.repository.id);

					if (this.folderTree && this.showTreeView) {
						this.folderTree.filterType = this.repository.isSearchTemplateSupported && this.repository.isSearchTemplateSupported() && ((this.repository._isCM && this.repository._isCM()) || (this.repository._isP8 && this.repository._isP8())) ? "searchAndFolderSearch" : "folderSearch";
						if (folder == null) {
							this.folderTree.setRepository(this.repository);
						} else {
							this.folderTree.setFolder(folder);
						}
					} else if (folder) {
						this._setRootFolder(folder);
					} else {
						this._retrieveTopFolder(this.repository);
					}

					this.needReset = false;
					this.isLoaded = true;
					this.disableButtonClick = false;
				} else {
					if (this.folderTree && this.showTreeView)
						this.folderTree.setRepository(null);
					this.folderContents.setResultSet(null);
					if (this.repository) {
						// Handle case where repository does not support folders. Show a message in the content area.
						if (this.repositorySelector) {
							this.repositorySelector.getDropdown().set("value", this.repository.id);
							if (this.repositorySelector.getNumRepositories() == 1 && this.repositorySelector.getDropdown().get("value") != this.repository.id) {
								domClass.remove(this.domNode, "hideNavContainerTop");
								this.repositorySelectorArea.domNode.appendChild(this.repositorySelector.domNode);
								this.setRepository(this.repositorySelector.setSelected(0));
							} else {
								this.needReset = false;
								this.isLoaded = true;
							}
						} else {
							this.needReset = false;
							this.isLoaded = true;
						}
					}
				}
			}
		},

		/**
		 * Loads the content.
		 */
		loadContent: function() {
			this.logEntry("loadContent");
			if (this.repository && this.repository.connected) {
				// If the browse pane is defined as the start pane and
				// the user logged into an OD server, show the flyout and make them select another pane
				if (this.repository.type == "od") {
					this.openButtonFlyout("browsePane");
					this.isLoaded = false;
				} else {
					if (this.repositorySelector) {
						this.repositorySelector.getDropdown().set("value", this.repository.id);
					}
					if (this.showTreeView) {
						this.folderTree.filterType = this.repository.isSearchTemplateSupported() && (this.repository._isCM() || this.repository._isP8()) ? "searchAndFolderSearch" : "folderSearch";
						this.folderTree.setRepository(this.repository);
						this.isLoaded = true;
						this.needReset = false;
						this.disableButtonClick = false;
					} else {
						this._retrieveTopFolder(this.repository);
					}
				}
			} else {
				//this handles retrieving the default layout repository, login, and setting it as the repository if no repository has been set yet.
				this.setPaneDefaultLayoutRepository();
				if (this.repository) {
					this.loadContent();
				}
			}
			this.logExit("loadContent");
		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			this.logEntry("reset");
			if (this.repositorySelector)
				this.repositorySelector.getDropdown().set("value", this.repository.id);

			//setting the repository again in case it was set from syncing and not while it was selected
			this.setRepository(this.repository);
			this.needReset = false;
			this.logExit("reset");
		},

		/**
		 * Listens to the tree and content list.
		 */
		doBrowseConnections: function() {
			// onOpenItem called when user selects open search in new tab or open search from context menu
			if (this.folderTree && this.showTreeView) {
				this.own(aspect.after(this.folderTree, "onOpenItem", lang.hitch(this, function(item, data) {
					if (data && data.openNewTab != undefined && data.openNewTab == true) {
						this.onOpenItem(item, data);
					} else if (!this.folderContents.getResultSet() || !this.folderContents.getResultSet().isResultSetForItem(item)) {
						this.folderContents.openItem(item);
					}
				}), true));
				this.own(aspect.after(this.folderTree, "onEditItem", lang.hitch(this, "onEditItem"), true)); // will select other panes if needed

				// onItemSelected called when user selects a node in the tree
				this.own(aspect.after(this.folderTree, "onItemSelected", lang.hitch(this, function(item) {
					if (!this.folderContents.getResultSet() || !this.folderContents.getResultSet().isResultSetForItem(item)) {
						this.folderContents.openItem(item);
					}
				}), true));

				this.own(aspect.after(this.folderContents, "onOpenItem", lang.hitch(this, function(item, data) {
					if (data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.FavoritesResultSet)) && item.getPath) {
						var path = item.getPath();
						if (!this.folderTree.isPathSelected(path)) {
							this.folderTree.set("path", path);
						}
					}
				}), true));
				this.own(aspect.after(this.folderContents, "onEditItem", lang.hitch(this, "onEditItem"), true)); // will select other panes if needed				
			}

			this.own(aspect.after(this.folderContents, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // will select other panes if needed
			this.own(aspect.after(Desktop, "onChange", lang.hitch(this, function(modelObject) {
				if (this.repository && modelObject == this.repository) {
					this._showHideFilter();
				}
			}), true));
			/*
			// Listen to changes on the desktop, and refresh folder contents as needed.
			// Need to check IDs since folders may be separate instances of same folder.
			this.own(aspect.after(Desktop, "onChange", lang.hitch(this, function(modelObject) {
				//If the object deleted in browse is the same object as the parent folder of the content list, delete that object
				//from the parent's item cache.  This is the most logical place to put this code since contentList should only deal with the direct result
				//set.  A special case had to be made for the root item - which the parent reference was very unreliable.
				if (modelObject && lang.isArray(modelObject)) {
					array.forEach(modelObject, function(changedModel, i) {
						//if a delete occurs
						if (changedModel.isInstanceOf && changedModel.isInstanceOf(ecm.model.ContentItem) && changedModel.deleted) {
							var folderContentParentFolder = this.folderContents.getResultSet() ? this.folderContents.getResultSet().parentFolder : null;
							//obtain the parent folder from the contentlist and see if that's the item being deleted
							if (folderContentParentFolder && folderContentParentFolder == changedModel) {
								if (folderContentParentFolder.isFolder() && folderContentParentFolder.getParent()) {
									if (folderContentParentFolder.getParent().isRootFolder()) {
										//since the root item is not the same item as the current changeModel's parent reference (it's very unreliable..it changes based on selection and refreshes)
										//so I must obtain the root from the tree itself and make the deletion in the model there.
										this.folderTree.getTreeModel().getRoot(lang.hitch(this, function(root) {
											if (root.isInstanceOf && root.isInstanceOf(ecm.model.ContentItem)) {
												root.deleteItemFromFolderContentCache(changedModel);
											}
										}));
									} else {
										if (folderContentParentFolder.getParent()) {
											folderContentParentFolder.getParent().deleteItemFromFolderContentCache(folderContentParentFolder);
										}
									}
								}
							}
						}
					}, this);
				}
			}), true));*/
		},

		/**
		 * Return the repository's top folder object back
		 * 
		 * @param repository
		 * @private
		 */
		_retrieveTopFolder: function(repository) {
			if (repository && repository.canListFolders()) {
				var rootItemId = this.rootFolderId || "/";
				// Retrieve top folder.
				repository.retrieveItem(rootItemId, lang.hitch(this, function(rootFolder) {
					if (rootFolder && !this.rootFolderId)
						rootFolder.name = repository.name; // replaces "Root"
					this._setRootFolder(rootFolder);
				}), null, null, null, this._objectStore ? this._objectStore.id : "");
			}
		},

		/**
		 * @private call folderContent to load root item's content.
		 */
		_setRootFolder: function(item) {
			if (!this.folderContents.getResultSet() || !this.folderContents.getResultSet().isResultSetForItem(item)) {
				this.folderContents.openItem(item);
				Desktop.setSelectedItems([
					item
				]);
				this.isLoaded = true;
			}
		},

		/**
		 * Clears the browse pane.
		 */
		clear: function() {
			var dndModule = this.folderContents.getGridModule("dnd");
			if (dndModule) {
				dndModule.row.setTree(null);
			}
			if (this.folderTree && this.showTreeView) {
				this.folderTree.setRepository(null);
			}
			if (this.folderContents) {
				this.folderContents.setResultSet(null);
			}
		}
	});
});

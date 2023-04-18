/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/window",
	"dojo/data/ItemFileReadStore",
	"dijit/form/Button",
	"dijit/form/ComboBox",
	"dijit/form/DropDownButton",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/StackContainer",
	"dijit/Menu",
	"dijit/MenuSeparator",
	"dijit/MenuItem",
	"dijit/TooltipDialog",
	"idx/layout/TitlePane",
	"idx/layout/DockContainer",
	"idx/layout/DockPane",
	"idx/layout/VerticalEqualDockPane",
	//"gridx/modules/dnd/Column",
	"idx/html",
	"../../model/Desktop",
	"../ActionMenu",
	"../FolderTree",
	"../TeamList",
	"../search/SearchSelector",
	"../search/SearchTabContainer",
	"../listView/gridModules/RowContextMenu",
	"../listView/modules/Breadcrumb",
	"../listView/modules/Toolbar2",
	"../listView/modules/DocInfo",
	"../listView/gridModules/DndRowMoveCopy",
	"../listView/gridModules/DndFromDesktopAddDoc",
	"../listView/modules/Bar",
	"../listView/modules/FilterData",
	"../listView/modules/ViewDetail",
	"../listView/modules/ViewMagazine",
	"../listView/modules/ViewFilmStrip",
	"../listView/ContentList",
	"./_SearchSelectorMixin",
	"./_SearchTabMixin",
	"./_LaunchBarPane",
	"dojo/text!./templates/TeamspacePane.html"
],

function(declare, //
lang, //
array, //
has, //
domStyle, //
domClass, //
domAttr, //
window, //
ItemFileReadStore, //
Button, //
ComboBox, //
DropDownButton, //
BorderContainer, //
ContentPane, //
StackContainer, //
Menu, //
MenuSeparator, //
MenuItem, //
TooltipDialog, //
TitlePane, //
DockContainer, //
DockPane, //
VerticalEqualDockPane, //
//Column, //
idxhtml, //
Desktop, //
ActionMenu, //
FolderTree, //
TeamList, //
SearchSelector, //
SearchTabContainer, //
RowContextMenu, //
Breadcrumb, //
Toolbar, //
DocInfo, //
DndRowMoveCopy, //
DndFromDesktopAddDoc, //
Bar, //
FilterData, //
ViewDetail, //
ViewMagazine, //
ViewFilmStrip, //
ContentList, //
_SearchSelectorMixin, //
_SearchTabMixin, //
_LaunchBarPane, //
template) {

	/**
	 * @name ecm.widget.layout.TeamspacePane
	 * @class Provides a pane that is used to display a teamspace in the layout.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._SearchTabMixin,
	 *           ecm.widget.layout._SearchSelectorMixin,
	 */
	return declare("ecm.widget.layout.TeamspacePane", [
		_LaunchBarPane,
		_SearchTabMixin,
		_SearchSelectorMixin
	], {
		/** @lends ecm.widget.layout.TeamspacePane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_dockPanes: null,

		constructor: function() {
			if (!this._dockPanes) {
				this._dockPanes = [];
			}
		},

		/**
		 * Disconnects handlers and destroys dock panes created by this widget.
		 */
		destroy: function() {
			if (this._dockPanes) {
				array.forEach(this._dockPanes, function(dockPane) {
					dockPane.destroy();
				});
			}

			this.inherited(arguments);
		},

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.logEntry("postCreate");

			this.connect(ecm.model.desktop, "onLogout", lang.hitch(this, function(repository) {
				this.teamspace = null;
			}));

			this.inherited(arguments);

			domAttr.set(this.folderContents.domNode, "role", "region");
			domAttr.set(this.folderContents.domNode, "aria-label", ecm.messages.teamspace_browse_content_list_label);

			domAttr.set(this.searchTabContainer.domNode, "role", "region");
			domAttr.set(this.searchTabContainer.domNode, "aria-label", ecm.messages.teamspace_search_tabs_label);

			this.textDir = has("text-direction");

			this.logExit("postCreate");
		},

		/**
		 * Method called by parent container to pass additional parameters to this pane.
		 * 
		 * @param params
		 *            Contains a handle to the teamspace object to use when displaying this pane.
		 */
		setParams: function(params) {
			this.isLoaded = false;
			var emailLink = ecm.model.desktop.emailLink;
			if (emailLink) {
				//this.manageTeamspaceLink.domNode.style.display = "none";
				//this.manageTeamspaceLink2.style.display = "none";
			}
			this.teamspace = null;
			this.resetTeamspacePane(params.teamspace);
			this.setTeamspace(params.teamspace);
		},

		/**
		 * Resets the pane by resetting the repository, classes, and folder contents.
		 */
		resetTeamspacePane: function(teamspace) {
			if (this.searchSelector)
				this.searchSelector.setRepository(null, null);

			var dndModule = this.folderContents.getGridModule("dnd");
			if (dndModule) {
				dndModule.row.setTree(null);
			}
			if (teamspace) {
				teamspace.contentClasses = [];
				teamspace.onChange(teamspace);
			}

			if (this.folderContents && this.folderContents.getResultSet()) {
				this.folderContents.setResultSet(null);
				this.folderContents.reset();
			}
			if (this.folderTree) {
				this.folderTree.setRepository(null);
			}
			this._closeAllSearchTabs();
		},

		/**
		 * Returns an array of grid modules used for this widget's content grid.
		 */
		getContentListGridModules: function() {
			var array = [];
			array.push(DndRowMoveCopy);
			array.push(DndFromDesktopAddDoc);
			array.push(RowContextMenu);
			//array.push(Column);
			return array;
		},

		/**
		 * Returns an array of content list modules used for this widget.
		 */
		getContentListModules: function() {
			var viewModules = [];
			// Use the manage teamspaces default list view mode setting from admin on the actual teamspace too
			var config = Desktop.getFeatureById("manageTeamspaces").configurations;
			if (config && config.showViews && config.showViews.length > 0) {
				for (var i = 0; i < config.showViews.length; i++) {
					var viewId = config.showViews[i];
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
				if (ecm.model.desktop.showViewFilmstrip) {
					viewModules.push(ViewFilmStrip);
				}
			}

			var detailsListView = Desktop.getRequestParam("defaultListView");
			if (detailsListView == "viewDetail" || detailsListView == "viewMagazine" || (detailsListView == "viewFilmStrip" && ecm.model.desktop.showViewFilmstrip))
				this.folderContents._viewCurrentName = detailsListView;

			var array = [];
			array.push({
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
							}
						]
					]
				]
			});
			array.push({
				moduleClass: DocInfo,
				showSystemProps: false
			});
			return array;
		},

		/**
		 * Sets the teamspace associated with this pane.
		 * 
		 * @param teamspace
		 *            An instance of {@link ecm.model.Teamspace}.
		 */
		setTeamspace: function(teamspace) {
			if (!this._selectedTeamSpacePaneLoaded)
				this._setupSelectedTeamSpacePane();

			if (teamspace) {
				var curRepos = null;
				if (this.teamspace)
					curRepos = this.teamspace.repository;

				if (curRepos != teamspace.repository) {
					var self = this;

					//reload the currently open teamspace if it gets modified
					this.connect(teamspace.repository, "onUpdateTeamspace", function(teamspace) {
						if (self["teamspace"] && teamspace && teamspace.id == self.teamspace.id) {
							self.teamspace.repository.retrieveTeamspaceById(self.teamspace.id, "instance", function(updatedTeamspace) {
								// need full retreive to get teamlist
								updatedTeamspace.initFromJson();
								self.resetTeamspacePane(updatedTeamspace);
								self.setTeamspace(updatedTeamspace);
								self.set("title", self.teamspace.name);

							});

						}
					});

					this.connect(teamspace, "onSearchTemplateAdded", function(template) {
						self.teamspace.repository.retrieveTeamspaceById(self.teamspace.id, "instance", function(updatedTeamspace) {
							updatedTeamspace.initFromJson();
							self.resetTeamspacePane(updatedTeamspace);
							self.setTeamspace(updatedTeamspace);
						});
					});
				}

				this.connect(teamspace.repository, "searchTemplatesDeleted", function(templates) {
					teamspace.searchTemplatesDeleted(templates);
				});

				//this.teamspaceName.innerHTML = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxhtml.escapeHTML(teamspace.name)) : idxhtml.escapeHTML(teamspace.name);
				//this.teamspaceDesc.innerHTML = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxhtml.escapeHTML(teamspace.desc ? teamspace.desc : "")) : idxhtml.escapeHTML(teamspace.desc ? teamspace.desc : "");

				teamspace.retrieveContentClasses(function() {
				});

				this.teamList.teamspace = teamspace;
				this.teamList.setTeam(teamspace.team);

				// this.folderTree.setTeamspace() below destroys the tree.  Remove the tree from the module before the tree is destroyed.
				var dndModule = this.folderContents.getGridModule("dnd");
				if (dndModule) {
					dndModule.row.setTree(null);
				}
				this.folderTree.contextMenuType = "TeamspaceSubFolderContextMenu";
				if (teamspace.repository.type == "cm")
					this.folderTree.contextMenuType = "TeamspaceSubFolderContextMenuCM";
				this.folderTree.rootFolderId = teamspace.id;
				this.folderTree.setTeamspace(teamspace);
				this.folderTree.filterType = teamspace.repository.isSearchTemplateSupported() && (teamspace.repository._isCM() || teamspace.repository._isP8()) ? "searchAndFolderSearch" : "folderSearch";

				this.folderContents.setGridExtensionModules(this.getContentListGridModules());
				this.folderContents.setContentListModules(this.getContentListModules());

				// In the following line of code the search templateTreeModel will cause a retrieve of templates from the teamspace
				this.searchSelector.setRepository(teamspace.repository, teamspace);

				this.searchTabContainer.setRepository(teamspace.repository, teamspace);

				this.teamspace = teamspace;

				// recreate teamspace menu
				//this._createTeamspaceMenu();
				this.dockContainer.restore();
				this.dockContainer.resize();
				this.resize();
			}
			this.logExit("setTeamspace");
		},

		// this creates the "modify teamspace menu"
		/* _createTeamspaceMenu: function() {
			// check if the user has rights to modify the teamspace, if not then just remove the menu button
			var hideModTeamspace = !this.teamspace.hasPrivilege("addRemoveRoleParticipants") && !this.teamspace.hasPrivilege("addNewSearches") && !this.teamspace.hasPrivilege("addRemoveClassesOrEntryTemplates");
			if (hideModTeamspace) {
				domClass.add(this.teamspaceButton.domNode, "dijitHidden");
			} else {
				domClass.remove(this.teamspaceButton.domNode, "dijitHidden");

				// remove existing menu
				var childmenu = this.teamspaceButton.getChildren();
				for (i = childmenu.length - 1; i >= 0; i--) {
					this.teamspaceButton.removeChild(this.teamspaceButton.getChildren()[i]);
				}

				this.teamspaceMenu = new Menu();
				this.teamspaceButton.set("dropDown", this.teamspaceMenu);
				if (!this._actionMenuCreator) {
					this._actionMenuCreator = new ActionMenu();
				}
				ecm.model.desktop.loadMenuActions("TeamspaceToolbar", lang.hitch(this, function(actions) {
					var menu = new Menu();
					var _this = this;
					array.forEach(actions, function(action) {
						if (action.id == "Separator") {
							menu.addChild(new MenuSeparator());
						} else {
							if (_this._actionIsVisible(action)) {
								var repository = _this.teamspace.repository;
								menu.addChild(new MenuItem({
									label: action.name,
									disabled: !action.isEnabled(repository, null, [
										_this.teamspace
									]),
									onClick: function(evt) {
										action.performAction(repository, [
											_this.teamspace
										], function() {
										});
									}
								}));
							}
						}
					});
					this.teamspaceButton.set("dropDown", menu);
				}));
			}
		}, */

		/**
		 * Used internally to determine which menu items should be visible.
		 * 
		 * @private
		 */
		_actionIsVisible: function(action) {
			var isVisible = true;
			switch (action.id) {
			case "EditTeamspaceClasses":
				isVisible = this.teamspace.usesClasses;
				break;
			case "EditTeamspaceEntryTemplates":
				isVisible = !this.teamspace.usesClasses;
				break;
			}
			return isVisible;
		},

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");

			//if no teamspace is selected, show the manage teamspace pane on the initial load
			if (!this.teamspace) {
				this.selectContentPane("manageTeamspaces");
			} else {
				if (!this._selectedTeamSpacePaneLoaded)
					this._setupSelectedTeamSpacePane();
			}

			this.logExit("loadContent");
		},

		/**
		 * Builds the initial teamspace pane.
		 * 
		 * @private
		 */
		_setupSelectedTeamSpacePane: function() {
			this._dockPanes = [];

			// Add browse pane
			this.folderTree = new FolderTree({
				"aria-label": ecm.messages.browse_tree_label,
				showFoldersOnly: true
			});
			this._addDockPane("TeamspaceBrowse-" + this.id, "left", ecm.model.desktop.getConfiguredLabelsvalue("browse"), true, this.folderTree, this.leadingPane);
			domStyle.set(this._dockPanes["TeamspaceBrowse-" + this.id].containerNode, "overflow", "auto");

			this.folderTree.onEditItem = lang.hitch(this, this._openSearchBuilder);
			this.folderContents.onEditItem = lang.hitch(this, this._openSearchBuilder);

			this.doBrowseConnections();

			// Add search pane
			this.searchSelector = new SearchSelector({
				toolbarEnabled: true,
				showOpenedSearches: false
			});
			this.connect(this.searchSelector, "onNewSearchButtonClick", "_openSearchBuilder");
			this.searchSelector.setRepository(null, null);
			this.searchSelector.addToActionParameterMap("widget", this.searchSelector); // will call onOpenItem on this widget

			this._addDockPane("TeamspaceSearch-" + this.id, "left", ecm.model.desktop.getConfiguredLabelsvalue("search"), true, this.searchSelector, this.leadingPane);
			var containerNode = this._dockPanes["TeamspaceSearch-" + this.id].containerNode;
			//if (toolbarEnabled) {
			domStyle.set(containerNode, "padding", "0");
			domStyle.set(containerNode, "margin", "0");
			domStyle.set(containerNode, "overflow", "hidden");
			/*} else {
				domStyle.set(containerNode, "padding", "5px");
				domStyle.set(containerNode, "overflow", "auto");
				domStyle.set(this.searchSelector.domNode, "overflow", "visible");
			}*/
			this.doSearchConnections();

			this.teamList = new TeamList();
			this._addDockPane("TeamspaceTeam-" + this.id, "left", this.messages.team, false, this.teamList, this.leadingPane);

			this.leadingPane.setupChildren();
			this._selectedTeamSpacePaneLoaded = true;
		},

		/**
		 * Adds a new DockPane to the specified pane.
		 * 
		 * @param dockPaneId
		 *            Topic ID for registering drag and drop events.
		 * @param dockPaneLoc
		 *            Location of the dock pane (left or right).
		 * @param dockPaneTitle
		 *            Text to display in the header of the dock pane.
		 * @param isOpen
		 *            Initial state of the dock pane (open or closed).
		 * @param contentWidget
		 *            The content to insert in the body of the dock pane.
		 * @param pane
		 *            The parent for the newly created dock pane.
		 */
		_addDockPane: function(dockPaneId, dockPaneLoc, dockPaneTitle, isOpen, contentWidget, pane) {
			this.logEntry("_addDockPane", dockPaneId, dockPaneLoc, dockPaneTitle, isOpen);
			var dockPane = new TitlePane({
				open: isOpen,
				dockArea: dockPaneLoc,
				title: dockPaneTitle,
				topicId: this.id + "_DockContainer"
			});

			dockPane.addChild(contentWidget);
			pane.addChild(dockPane);
			this._dockPanes[dockPaneId] = dockPane;
			this.logExit("_addDockPane");
		},

		doBrowseConnections: function() {
			// onOpenItem called by context menu actions selected from the tree
			this.connect(this.folderTree, "onOpenItem", lang.hitch(this, function(item, data) {
				if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase) && !data) {
					this._openSearchTab(item);
				} else if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase) && data && data.openNewTab != undefined) {
					this._openSearchTab(item, data.openNewTab);
				} else {
					if (this.searchSelector) {
						this.searchSelector.clearSelection();
					}
					this.centerPaneStackContainer.selectChild(this.folderContentArea);
					if (!this.folderContents.getResultSet() || !this.folderContents.getResultSet().isResultSetForItem(item)) {
						this.folderContents.openItem(item);
					}
				}
			})),

			// onItemSelected called when user selects a node in the tree
			this.connect(this.folderTree, "onItemSelected", lang.hitch(this, function(item) {
				if (this.searchSelector) {
					this.searchSelector.clearSelection();
				}
				this.centerPaneStackContainer.selectChild(this.folderContentArea);

				if (!this.isLoaded || !this.folderContents.getResultSet() || !this.folderContents.getResultSet().isResultSetForItem(item)) {
					this.folderContents.openItem(item);
					this.isLoaded = true;
				}
			}));

			this.connect(this.folderContents, "onOpenItem", lang.hitch(this, function(item, data) {
				if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase) && !data) {
					this._openSearchTab(item);
				} else if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase) && data && data.openNewTab != undefined) {
					this._openSearchTab(item, data.openNewTab, data.version);
				} else if (data && data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.FavoritesResultSet)) && item.getPath) {
					var path = item.getPath();
					if (!this.folderTree.isPathSelected(path)) {
						this.folderTree.set("path", path);
					}
				}
			}));

			this.connect(this.folderContents, "onModulesLoaded", lang.hitch(this, function() {
				var dndModule = this.folderContents.getGridModule("dnd");
				if (dndModule) {
					dndModule.row.setTree(this.folderTree._tree);
				}
			}));
		},

		doSearchConnections: function() {
			this.setUpTabContainer();
			this.connect(this.searchTabContainer, "onSearchTemplateOpen", function(searchTemplate, version) {
				this._openSearchTab(searchTemplate, true, version);
			});

			this.connect(this.searchSelector, "onNewSearchButtonClick", function() {
				if (this.folderTree)
					this.folderTree._tree.dndController.selectNone();

				if (this.searchSelector)
					this.searchSelector.clearSelection();
			});

			this.connect(this.searchSelector, "onSearchTemplateSelected", this._openSearchTab);

			this.searchSelector.onOpenItem = lang.hitch(this, function(item, data) {
				var openInNewTab = data && data.openNewTab != undefined ? data.openNewTab : false;
				this._openSearchTab(item, openInNewTab);
			});

			this.searchSelector.onEditItem = lang.hitch(this, function(searchTemplate) {
				this._openSearchBuilder(searchTemplate);
			});
		},

		onManageTeamspace: function() {
			ecm.model.desktop.getActionsHandler().actionManageTeamspaces(this.teamspace.repository, null, this);
		},

		_openSearchTab: function(searchTemplate, newTab, version) {
			if (this.centerPaneStackContainer.selectedChildWidget != this.searchTabContainer) {
				if (this.folderTree) {
					this.folderTree._tree.dndController.selectNone();
				}
				this.centerPaneStackContainer.selectChild(this.searchTabContainer);
			}

			var searchWidget = this.openTab({
				UUID: searchTemplate.UUID,
				openNewTab: newTab,
				tabType: "search",
				repository: this.teamspace.repository,
				teamspace: this.teamspace,
				selected: true,
				closable: true,
				showDocumentInfoPane: false,
				version: version,
				"searchTemplate": searchTemplate
			});

			this.searchTemplate = searchTemplate;
		},

		_openSearchBuilder: function(searchTemplate) {
			if (this.centerPaneStackContainer.selectedChildWidget != this.searchTabContainer) {
				if (this.folderTree) {
					this.folderTree._tree.dndController.selectNone();
				}
				this.centerPaneStackContainer.selectChild(this.searchTabContainer);
			}

			var tabType = "searchbuilder";
			if (searchTemplate && searchTemplate.isInstanceOf) {
				if (searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate))
					tabType = "unifiedsearchbuilder";
			} else {
				searchTemplate = null;
			}

			var searchWidget = this.openTab({
				tabType: tabType,
				repository: this.teamspace.repository,
				teamspace: this.teamspace,
				selected: true,
				closable: true,
				showDocumentInfoPane: false,
				"searchTemplate": searchTemplate
			});
		}
	});
});

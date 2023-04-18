/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/StackContainer",
	"idx/html",
	"ecm/model/Desktop",
	"ecm/model/Message",
	"ecm/model/Teamspace",
	"ecm/widget/LoginPane",
	"ecm/widget/Banner",
	"ecm/widget/MessageBar",
	"ecm/widget/layout/MainLayout",
	"ecm/widget/layout/LaunchBarContainer",
	"dojo/text!./templates/MainLayout.html"
],

function(declare, //
lang, //
aspect, //
domClass,//
domStyle,//
BorderContainer, //
ContentPane, //
StackContainer, //
idxhtml, //
Desktop, //
Message, //
Teamspace, //
LoginPane, //
Banner, //
MessageBar, //
MainLayout, //
LaunchBarContainer, //
template) {

	/**
	 * @name ecm.widget.layout.NavigatorMainLayout
	 * @class Extends the MainLayout class to provide additional interactions that are specific to IBM Content
	 *        Navigator.
	 * @augments ecm.widget.layout.MainLayout
	 */
	return declare("ecm.widget.layout.NavigatorMainLayout", [
		MainLayout
	], {
		/** @lends ecm.widget.layout.NavigatorMainLayout.prototype */

		postCreate: function() {
			this.inherited(arguments);
			this._setBannerAndLaunchbarState();

			this.own(aspect.after(Desktop, "onLogout", lang.hitch(this, function() {
				var admFeature = Desktop.adminFeature;
				if (admFeature) {
					Desktop.removeFeature(admFeature);
					this.launchBarContainer.removeFeatureFromLayout(admFeature);
				}

				this._clearSelectedPanes();
			})));

			this.own(aspect.after(Desktop, "onLogin", lang.hitch(this, function() {
				this.addAdminFeature();
				
				if (!this.launchBarContainer._isButtonBarVisible() && this.launchBarContainer._getFeatureCount() > 1) {
					domStyle.set(this.launchBarContainer.launchBarButtonArea.domNode, "display", "block");
					this.resize();
				}
				
				if (this.defaultFeatureId) {
					var button = this.launchBarContainer.getButtonByID(this.defaultFeatureId);
					this.launchBarContainer.selectContentPane(button, this.defaultFeatureId, null);
					// need to set a timeout to give launch bar container time to construct the layout pane especially if it's Admin
					setTimeout(lang.hitch(this, function() {
						this.mainContainer.resize();
					}), 700);
				}
				this._setBannerAndLaunchbarState();
			})));
		},

		_setBannerAndLaunchbarState: function() {
			if (Desktop.getRequestParam("sideChrome") == 0) {//hide banner and launchbar
				if (!domClass.contains(this.banner.domNode, "dijitHidden")) {
					domClass.add(this.banner.domNode, "dijitHidden");
				}
				this.launchBarContainer.hideButtonBar();
				this.mainContainer.resize();

			} else if (Desktop.getRequestParam("sideChrome") == 1) {//hide banner only
				if (!domClass.contains(this.banner.domNode, "dijitHidden")) {
					domClass.add(this.banner.domNode, "dijitHidden");
				}
				this.mainContainer.resize();
			} else if (Desktop.getRequestParam("sideChrome") == 2) {//hide launchbar only
				this.launchBarContainer.hideButtonBar();
				this.mainContainer.resize();
			}
		},

		/**
		 * Clear all last selected panes for a button so the default pane will be selected
		 */
		_clearSelectedPanes: function() {
			for ( var i in this.launchBarContainer.getButtons()) {
				var button = this.launchBarContainer.getButtons()[i];
				if (button && button.lastSelectedPane) {
					button.lastSelectedPane = null;
				}
			}
		},

		/**
		 * Sets the layout configuration.
		 */
		setFeatures: function(selectedFeatures, defaultFeature, defaultSecondaryPlugin) {
			this.logEntry("setFeatures");

			var features = this.mergeFeatures(this.getAvailableFeatures(), selectedFeatures, defaultFeature);
			var hasTeamspaceFeature = false;
			if (features) {
				for ( var i in features) {
					if (features[i].id == "manageTeamspaces")
						hasTeamspaceFeature = true;
				}
			}

			var layout = null;
			if (hasTeamspaceFeature) {
				layout = {
					buttons: features,
					selectedPane: defaultFeature,
					containerPanes: [
						{
							name: "teamspaceBuilder",
							title: this.messages.repository_tab_createWorkspace,
							contentClass: "ecm.widget.layout.TeamspaceBuilderPane",
							params: {
								type: Teamspace.INSTANCE,
								mode: "create"
							},
							featureId: "manageTeamspaces"
						},
						{
							name: "teamspacePane",
							title: this.messages.repository_tab_createWorkspace,
							contentClass: "ecm.widget.layout.TeamspacePane",
							params: {},
							featureId: "manageTeamspaces"
						}
					]
				};
			} else {
				layout = {
					buttons: features,
					selectedPane: defaultFeature,
					containerPanes: null
				};
			}
			layout.selectedSecondaryPlugin = defaultSecondaryPlugin;

			this._setupRepositorySyncing();
			this.launchBarContainer.setLayout(layout);
			this.defaultFeatureId = defaultFeature;

			this.onLayoutLoaded();
			// need to set a timeout to give launch bar container time to construct the layout pane especially if it's Admin
			setTimeout(lang.hitch(this, function() {
				this.mainContainer.resize();
			}), 700);

			this.logExit("setFeatures");
		},

		/**
		 * Performs repository syncing for all the various panes. The logic is very specific to Navigator. Browse,
		 * Search, banner, and global toolbars are synced. Work and Teamspaces operate independently. All flyouts are
		 * always synced with their respective panes.
		 */
		_setupRepositorySyncing: function() {
			var callback = lang.hitch(this, function(panel) {
				if (panel) {
					var panelID = panel.params.UUID;
					this.connect(panel, "onOpenItem", "_onOpenItem");
					this.connect(panel, "onEditItem", "_onEditItem");

					// Handle delayed creation
					if (panelID != Desktop._defaultFeature) {
						var browsePane = this.launchBarContainer.getContentPaneByID("browsePane");
						var browsePaneFlyout = this.launchBarContainer.getContentPaneByID("browsePane_popup");
						var searchPane = this.launchBarContainer.getContentPaneByID("searchPane");
						var searchPaneFlyout = this.launchBarContainer.getContentPaneByID("searchPane_popup");

						if (panelID == "searchPane" || panelID == "searchPane_popup") {
							if (panelID == "searchPane" && searchPaneFlyout) {
								this._setPaneRepository(null, panel, searchPaneFlyout.repository);
							} else if (panelID == "searchPane_popup" && searchPane) {
								this._setPaneRepository(null, panel, searchPane.repository);
							}
						}

						if (panelID == "workPane" || panelID == "workPane_popup") {
							var workPane = this.launchBarContainer.getContentPaneByID("workPane");
							var workPaneFlyout = this.launchBarContainer.getContentPaneByID("workPane_popup");

							if (panelID == "workPane" && workPaneFlyout) {
								this._setPaneRepository(null, panel, workPaneFlyout.repository);
							} else if (panelID == "workPane_popup" && workPane) {
								this._setPaneRepository(null, panel, workPane.repository);
							}
						}

						if (panelID == "manageTeamspaces" || panelID == "manageTeamspaces_popup") {
							var manageTeamspaces = this.launchBarContainer.getContentPaneByID("manageTeamspaces");
							var manageTeamspacesFlyout = this.launchBarContainer.getContentPaneByID("manageTeamspaces_popup");

							if (panelID == "manageTeamspaces" && manageTeamspacesFlyout) {
								this._setPaneRepository(null, panel, manageTeamspacesFlyout.repository);
							} else if (panelID == "manageTeamspaces_popup" && manageTeamspaces) {
								this._setPaneRepository(null, panel, manageTeamspaces.repository);
							}
						}

						if (panelID == "manageEntryTemplates" || panelID == "manageEntryTemplates_popup") {
							var manageEntryTemplates = this.launchBarContainer.getContentPaneByID("manageEntryTemplates");
							var manageEntryTemplatesFlyout = this.launchBarContainer.getContentPaneByID("manageEntryTemplates_popup");

							if (panelID == "manageEntryTemplates" && manageEntryTemplatesFlyout) {
								this._setPaneRepository(null, panel, manageEntryTemplatesFlyout.repository);
							} else if (panelID == "manageEntryTemplates_popup" && manageEntryTemplates) {
								this._setPaneRepository(null, panel, manageEntryTemplates.repository);
							}
						}
					}

					if (panel.onRepositoryChange) {
						this.connect(panel, "onRepositoryChange", lang.hitch(this, function(pane, repository) {
							var name = pane ? pane.params.UUID : null;

							if (name == "browsePane" || name == "browsePane_popup" || name == "searchPane" || name == "searchPane_popup") {
								if (repository.type != "od" || name == "searchPane" || name == "searchPane_popup") {
									if (this.globalToolbar)
										this.globalToolbar.createToolbar({
											repository: repository
										});
									this.banner.setRepository(repository);
								}

								var browsePane = this.launchBarContainer.getContentPaneByID("browsePane");
								if (browsePane && name != "browsePane_popup")
									this._setPaneRepository(pane, browsePane, repository);

								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("searchPane"), repository);
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("searchPane_popup"), repository);
							}

							if (name == "workPane" || name == "workPane_popup") {
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("workPane"), repository);
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("workPane_popup"), repository);
							}

							if (name == "manageTeamspaces_popup" || name == "manageTeamspaces") {
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("manageTeamspaces"), repository);
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("manageTeamspaces_popup"), repository);
							}

							if (name == "manageEntryTemplates_popup" || name == "manageEntryTemplates") {
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("manageEntryTemplates"), repository);
								this._setPaneRepository(pane, this.launchBarContainer.getContentPaneByID("manageEntryTemplates_popup"), repository);
							}
						}));
					}

					if (panel.repositorySelector && lang.isFunction(panel.repositorySelector.getNumRepositories) && panel.repositorySelector.getNumRepositories() == 0) {
						//disables the browse flyout pane explicitly based on the browse pane since it does not have a repository selector
						var browsePaneFlyout = this.launchBarContainer.getContentPaneByID("browsePane_popup");
						if (panelID == "browsePane" && browsePaneFlyout) {
							this.launchBarContainer.disableButton(browsePaneFlyout.params.UUID);
						}
					}
				}
			});

			this.connect(this.launchBarContainer, "onFeaturePanelCreated", callback);
			this.connect(this.launchBarContainer, "onFeatureFlyoutCreated", callback);
		},

		_onEditItem: function(item) {
			this.openEditSearch(item);
		},

		_onOpenItem: function(item, data, container) {
			if ((item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace) && item.type == "instance") || item.attributes && item.attributes.type === "teamspace") {
				this.openTeamspace(item, data);
			} else if ((item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace) && item.type === "template") || item.attributes && item.attributes.type === "template") {
				this.openTeamspaceTemplate(item, data, container);
			} else if ((item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) || (item.attributes && item.attributes.type === "search")) {
				// Open the search only if the data represents search parameters
				// In some cases the data is a result set from an automatic search and should only be processed by a content list
				if (!data || data.tabType != undefined || data.openNewTab != undefined)
					this.openSearch(item, data || {});
			}
		},

		/**
		 * Selects the search feature & shows the specified search template.
		 */
		openSearch: function(item, data) {
			var button = this.launchBarContainer ? this.launchBarContainer.getFeatureButtonByID("searchPane") : null;
			if (button) {
				var searchTemplate = item.item ? item.item : item;
				this.launchBarContainer.selectContentPane(button, "searchPane", {
					tabType: data.tabType || "search",
					repository: searchTemplate.repository,
					teamspace: null,
					selected: true,
					closable: true,
					openNewTab: data.openNewTab === true,
					UUID: data.UUID || null,
					version: data.version,
					"searchTemplate": searchTemplate
				});
			} else { // no search pane
				var message = Message.createErrorMessage("search_cannot_open_error");
				if (message) {
					Desktop.addMessage(message);
				}
			}
		},

		/**
		 * Selects the search feature & shows the specified search template.
		 * 
		 * @deprecated As of 2.0.3. Use <code>openSearch</code> and set <code>data.openNewTab</code> to true.
		 */
		openNewSearch: function(item, data) {
			if (!data)
				data = {};
			data.openNewTab = true;
			this.openSearch(item, data);
		},

		/**
		 * Selects the search feature & shows the specified search template.
		 */
		openEditSearch: function(item) {
			var button = this.launchBarContainer ? this.launchBarContainer.getFeatureButtonByID("searchPane") : null;
			if (button) {
				var searchTemplate = item.item ? item.item : item;
				var tabType = "searchbuilder";
				if (searchTemplate.isInstanceOf && searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate))
					tabType = "unifiedsearchbuilder";

				this.launchBarContainer.selectContentPane(button, "searchPane", {
					tabType: tabType,
					repository: searchTemplate.repository,
					teamspace: null,
					selected: true,
					closable: true,
					openNewTab: false,
					"searchTemplate": searchTemplate,
					UUID: searchTemplate.generateUUID()
				});
			} else { // no search pane
				var message = Message.createErrorMessage("search_cannot_open_error");
				if (message) {
					Desktop.addMessage(message);
				}
			}
		},

		/**
		 * Opens the specified teamspace.
		 */
		openTeamspace: function(item, teamspace) {
			var button = this.launchBarContainer ? this.launchBarContainer.getFeatureButtonByID("manageTeamspaces") : null;
			if (button) {
				this.launchBarContainer.selectContentPane(button, "manageTeamspaces", {
					tabType: "teamspace",
					teamspace: teamspace,
					repository: teamspace.repository,
					selected: true,
					openNewTab: true,
					title: idxhtml.escapeHTML(teamspace.name),
					closable: false,
					contentClass: "ecm.widget.layout.TeamspacePane",
					uid: teamspace.id,
					UUID: teamspace.id

				});
				if (this.launchBarContainer.flyoutMenuContainer && this.launchBarContainer.flyoutMenuContainer.open) {
					this.launchBarContainer.flyoutMenuContainer.hide();
				}
			} else { // no teamspace feature
				var message = Message.createErrorMessage("teamspace_cannot_open_error");
				if (message) {
					Desktop.addMessage(message);
				}
			}
		},

		/**
		 * Opens the specified teamspace template.
		 */
		openTeamspaceTemplate: function(item, teamspaceTemplate, container) {
			var button = this.launchBarContainer ? this.launchBarContainer.getFeatureButtonByID("manageTeamspaces") : null;
			this.launchBarContainer.selectContentPane(button, "teamspaceBuilder", {
				repository: teamspaceTemplate.repository,
				type: Teamspace.TEMPLATE,
				mode: "edit",
				container: container,
				teamspace: teamspaceTemplate
			});
			if (this.launchBarContainer.flyoutMenuContainer && this.launchBarContainer.flyoutMenuContainer.open) {
				this.launchBarContainer.flyoutMenuContainer.hide();
			}
		},

		/**
		 * Sets the repository on the pane and tells it to reset itself.
		 */
		_setPaneRepository: function(currentPane, pane, repository) {
			if (pane && currentPane != pane) {
				if (!lang.isFunction(pane.setRepository) || (pane.params.UUID == "browsePane" && !repository.showInBrowseView) || (pane.params.UUID == "searchPane" && !repository.showInSearchView))
					return;

				if (pane.params.UUID == "browsePane") {
					if (repository && repository.type == "od") {
						pane.disableButtonClick = true;
						pane.isLoaded = false;
					} else {
						pane.disableButtonClick = false;
					}
				}
				pane.setRepository(repository);
				pane.needReset = true;
			}
		},

		addAdminFeature: function() {
			this.logEntry("addAdminFeature");
			var admFeature = Desktop.adminFeature;
			//if the feature hasn't been added to the desktop or the launch bar container yet
			if (admFeature && !Desktop.getFeature(admFeature)) {
				Desktop.addFeature(admFeature);
				var page = this.launchBarContainer.getContentPaneByID(admFeature.id);
				if (!page) {
					this.launchBarContainer.addFeatureToContainer(admFeature);
				} else {
					page._selectFirstChildFromTree();
				}
			}
			this.logExit("addAdminFeature");
		}
	});
});

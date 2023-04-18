/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"idx/html",
	"idx/layout/BorderContainer",
	"../../LoggerMixin",
	"../search/SearchTabContainer",
	"./SearchTabPane",
	"./_RepositorySelectorMixin",
	"./_SearchSelectorMixin",
	"ecm/model/Desktop",
	"ecm/model/SearchConfiguration",
	"dojo/text!./templates/SearchPane.html"
],

function(declare, //
lang, //
array, //
aspect, //
domClass, //
domAttr, //
BorderContainer, //
ContentPane, //
idxHtml, //
idxBorderContainer, //
LoggerMixin, //
SearchTabContainer, //
SearchTabPane, //
_RepositorySelectorMixin, //
_SearchSelectorMixin, //
Desktop, //
SearchConfiguration, //
template) {

	/**
	 * @name ecm.widget.layout.SearchPane
	 * @class Provides a pane that contains the search interface for a layout.
	 * @augments ecm.widget.layout.SearchTabPane, ecm.widget.layout._RepositorySelectorMixin,
	 *           ecm.widget.layout._SearchSelectorMixin
	 */
	return declare("ecm.widget.layout.SearchPane", [
		SearchTabPane,
		_RepositorySelectorMixin,
		_SearchSelectorMixin
	], {
		/** @lends ecm.widget.layout.SearchPane.prototype */
		templateString: template,
		widgetsInTemplate: true,
		viewMode: 2, // Search

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.defaultLayoutRepositoryComponent = "search";
			this.setRepositoryTypes("cm,p8,cmis,od,ci,box");
			this.createRepositorySelector();
			this.doRepositorySelectorConnections();

			// If there is more than one repository in the list, show the selector to the user.
			if (this.repositorySelector.getNumRepositories() > 1) {
				this.repositorySelectorArea.domNode.appendChild(this.repositorySelector.domNode);
			}
			domAttr.set(this.searchTabContainer.domNode, "role", "region");
			domAttr.set(this.searchTabContainer.domNode, "aria-label", ecm.messages.search_tabs_label);

			this._defaultSearch = Desktop.getRequestParam("defaultSearch");
			if (this._defaultSearch) {
				this._defaultSearch = decodeURIComponent(this._defaultSearch);
				this._defaultSearchOnly = Desktop.getRequestParam("defaultSearchOnly") === "true";
				if (this._defaultSearchOnly) { // single search mode
					// Hide the search selector
					this.searchSelectionPane.splitter = false;
					domClass.add(this.searchSelectionPane.domNode, "dijitHidden");

					// Hide the tabs if there is only one
					var self = this;
					domClass.add(self.searchTabContainer.domNode, "singleSearchMode");
					domClass.add(self.searchTabContainer.tablist.domNode, "dijitHidden");
					this.own(aspect.after(this.searchTabContainer, "onTabOpened", function() {
						if (self.searchTabContainer.getChildren().length == 2) {
							domClass.remove(self.searchTabContainer.domNode, "singleSearchMode");
							domClass.remove(self.searchTabContainer.tablist.domNode, "dijitHidden");
							self.searchTabContainer.resize();
						}
					}));
					this.own(aspect.after(this.searchTabContainer, "onTabClosed", function() {
						if (self.searchTabContainer.getChildren().length < 2) {
							domClass.add(self.searchTabContainer.domNode, "singleSearchMode");
							domClass.add(self.searchTabContainer.tablist.domNode, "dijitHidden");
							self.searchTabContainer.resize();
						}
					}));
				}
			}

			this.logExit("postCreate");
		},

		destroy: function() {
			this.logEntry("destroy");

			if (this.repositorySelector)
				this.repositorySelector.destroy();

			this._destroySearchSelector();

			this.inherited(arguments);
			this.logExit("destroy");
		},

		focus: function() {
			if (this.repositorySelector && this.repositorySelector.getDropdown()) {
				this.repositorySelector.getDropdown().focus();
			}
		},

		setRepository: function(repository) {
			this.logEntry("setRepository");

			this.inherited(arguments);

			//only set the repository in the pane if the pane is selected.  If not, hold the repository until the pane is selected.
			if (this.selected) {
				if (!this.repository) {
					this._destroySearchSelector();
					this.isLoaded = false;
				} else {
					if (!this.searchSelector)
						this._createSearchSelector(false);

					if (this.searchSelector) {
						this.repositorySelector._dropdown.set("value", this.repository.id);
						if (this.searchSelector.repository != this.repository)
							this.searchSelector.setRepository(this.repository);
					}
				}
				this.needReset = false;
				this._onShow();
			}

			this.logExit("setRepository");
		},

		loadContent: function() {
			this.logEntry("loadContent");

			//this handles retrieving the default layout repository, login, and setting it as the repository if no repository has been set yet.
			this.setPaneDefaultLayoutRepository();

			if (this.repositorySelector.getNumRepositories() == 1 && this.repository && this.repository.type == "od") {
				domClass.add(this.repositorySelectorArea.domNode, "title");
				this.repositorySelectorArea.domNode.innerHTML = idxHtml.escapeHTML(this.repository.name);
			} else if (this.repositorySelector.getNumRepositories() == 1) {
				domClass.add(this.domNode, "hideNavContainerTop");
				this.searchSelectionArea.resize();
			}

			if (this.repository && this.repository.connected && (!this.searchSelector || !this.isLoaded)) {
				this.repositorySelector._dropdown.set("value", this.repository.id);
				if (!this.searchSelector)
					this._createSearchSelector(false);

				if (this.searchSelector) {
					this._doSearchSelectorConnections();
					this.searchSelectorArea.domNode.appendChild(this.searchSelector.domNode);

					if (this.searchTabContainer)
						this.searchTabContainer.setRepository(this.repository);

					if (!this._hasBeenLoaded && this._defaultSearch) {
						var self = this;
						this.repository.retrieveSearchTemplate(this._defaultSearch, null, "released", function(searchTemplate) {
							if (self._defaultSearchOnly) {
								// Prevent the search from being edited
								declare.safeMixin(searchTemplate, {
									hasPrivilege: function(privilege) {
										return privilege != "privCheckInOutDoc" && this.inherited(arguments);
									}
								});
							}
							self.openTab({
								tabType: "search",
								repository: self.repository,
								selected: true,
								closable: !self._defaultSearchOnly,
								searchTemplate: searchTemplate
							});
						});
					}
				}
				this.isLoaded = true;
				this._hasBeenLoaded = true;
				this._onShow();
			}

			this.logExit("loadContent");
		},

		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to retrieve the correct feature
		 * configuration information.
		 * 
		 * @since 2.0.3.5
		 */
		getFeatureConfiguration: function() {
			if (this.feature && this.feature.configurations) {
				return this.feature.configurations;
			} else {
				return null;
			}
		},

		/**
		 * Sets up event handles for the search list.
		 */
		_doSearchSelectorConnections: function() {
			var self = this;

			this.searchSelector.connect(this.searchSelector, "onSearchTemplateSelected", function(searchTemplate) {
				var tabType = "search";
				if (searchTemplate.isInstanceOf && searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate) && searchTemplate.isNew())
					tabType = "unifiedsearchbuilder";
				else if (searchTemplate.isNew())
					tabType = "searchbuilder";

				self.openTab({
					UUID: searchTemplate.UUID,
					tabType: tabType,
					repository: self.repository,
					selected: true,
					closable: true,
					"searchTemplate": searchTemplate
				});
			});

			this.searchSelector.connect(this.searchSelector, "onNewSearchButtonClick", function() {
				if (self.searchSelector)
					self.searchSelector.clearSelection();

				self.openTab({
					tabType: "searchbuilder",
					repository: self.repository,
					selected: true,
					closable: true
				});
			});

			this.searchSelector.connect(this.searchSelector, "onNewUnifiedSearchButtonClick", function() {
				if (self.searchSelector)
					self.searchSelector.clearSelection();

				self.openTab({
					tabType: "unifiedsearchbuilder",
					repository: self.repository,
					selected: true,
					closable: true
				});
			});
		},

		_onShow: function() {
			// Open a new search builder for the selected repository if one doesn't exist already and the repository supports building searches,
			// but not saving searches (i.e., Box and CMIS)
			if (this.isLoaded && this.repository && this.repository.connected && !this.repository.isSearchTemplateSupported() && this.searchTabContainer) {
				var searchConfig = new SearchConfiguration({
					repository: this.repository
				});
				if (searchConfig.canBuildSearches() && !array.some(this.searchTabContainer.getChildren(), function(tab) {
					return tab.repository == this.repository;
				}, this)) {
					this.openTab({
						tabType: "searchbuilder",
						repository: this.repository,
						selected: true,
						closable: true,
						openNewTab: true
					});
				}
			}
		}
	});
});

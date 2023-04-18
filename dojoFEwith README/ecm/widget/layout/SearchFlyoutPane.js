/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"../../LoggerMixin",
	"./_LaunchBarDialogPane",
	"./_RepositorySelectorMixin",
	"./_SearchSelectorMixin",
	"dojo/text!./templates/FlyoutPane.html"
],

function(declare, //
lang, //
BorderContainer, //
ContentPane, //
LoggerMixin, //
_LaunchBarDialogPane, //
_RepositorySelectorMixin, //
_SearchSelectorMixin, //
template) {

	/**
	 * @name ecm.widget.layout.SearchFlyoutPane
	 * @class Provides a fly-out pane that contains the search interface for a layout.
	 * @augments ecm.widget.layout.LaunchBarDialogPane, ecm.widget.layout._RepositorySelectorMixin,
	 *           ecm.widget.layout._SearchSelectorMixin
	 */
	return declare("ecm.widget.layout.SearchFlyoutPane", [
		_LaunchBarDialogPane,
		_RepositorySelectorMixin,
		_SearchSelectorMixin
	], {
		/** @lends ecm.widget.layout.SearchFlyoutPane.prototype */
		templateString: template,
		widgetsInTemplate: true,
		viewMode: 2, // Search

		/**
		 * The ID of the search feature that hosts search tabs.
		 * 
		 * @since 2.0.3
		 */
		searchFeatureId: "searchPane",

		postCreate: function() {
			this.logEntry("postCreate");

			this.inherited(arguments);
			this.defaultLayoutRepositoryComponent = "search";
			this.setRepositoryTypes("cm,p8,cmis,od,ci,box");
			this.createRepositorySelector();
			this.doRepositorySelectorConnections();

			// If there is more than one repository in the list, show the selector to the user.
			if (this.repositorySelector.getNumRepositories() > 1)
				this.topPane.domNode.appendChild(this.repositorySelector.domNode);

			this.logExit("postCreate");
		},

		focus: function() {
			if (this.repositorySelector && this.repositorySelector.getDropdown()) {
				this.repositorySelector.getDropdown().focus();
			}
		},

		setRepository: function(repository) {
			this.logEntry("setRepository");

			this.repository = repository;

			//only set the repository in the pane if the pane is selected.  If not, hold the repository until the pane is selected.
			if (this.selected) {
				if (!this.repository) {
					this._destroySearchSelector();
				} else {
					if (!this.searchSelector)
						this._createSearchSelector(true);

					if (this.searchSelector) {
						this.repositorySelector._dropdown.set("value", this.repository.id);
						this.searchSelector.setRepository(this.repository);
					}
					if (this.searchTabContainer)
						this.searchTabContainer.setRepository(repository);
				}
				this.needReset = false;
			} else {
				if (!this.repository) {
					this._destroySearchSelector();
				}
			}

			this.logExit("setRepository");
		},

		/**
		 * Called when a template is selected from the search selector.
		 */
		onOpenItem: function(item, data) {
			// Actual open is handled by NavigatorMainLayout._onOpenItem
			this.closePopup();
		},

		/**
		 * Called when a template is edited from the search selector.
		 */
		onEditItem: function(searchTemplate) {
			// Actual edit is handled by NavigatorMainLayout._onEditItem
			this.closePopup();
		},

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");

			this.focus(); // focus 1st before calling setPaneDefaultLayoutRepository so that if setPaneDefaultLayoutRepository causes the logon dialog to show, the focus will go back to flyout when done logging on

			//this handles retrieving the default layout repository, login, and setting it as the repository if no repository has been set yet.
			this.setPaneDefaultLayoutRepository();

			if (this.repository && this.repository.connected && (!this.searchSelector || !this.isLoaded)) {
				if (!this.searchSelector)
					this._createSearchSelector(true);

				if (this.searchSelector) {
					this._doSearchSelectorConnections();
					this.bottomPane.domNode.appendChild(this.searchSelector.domNode);
				}

				this.setRepository(this.repository);
				this.isLoaded = true;
			}
			this.needReset = false;

			this.logExit("loadContent");
		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			//setting the repository again in case it was set from syncing and not while it was selected
			this.setRepository(this.repository);

			this.needReset = false;
		},

		/**
		 * Sets up event handles for the search list.
		 */
		_doSearchSelectorConnections: function() {
			var self = this;

			this.searchSelector.connect(this.searchSelector, "onNewSearchButtonClick", function() {
				if (self.searchSelector)
					self.searchSelector.clearSelection();

				self.selectContentPane(self.searchFeatureId, {
					tabType: "searchbuilder",
					repository: self.repository,
					selected: true,
					closable: true
				});
				self.closePopup();
			});
			this.searchSelector.connect(this.searchSelector, "onNewUnifiedSearchButtonClick", function() {
				if (self.searchSelector)
					self.searchSelector.clearSelection();

				self.selectContentPane(self.searchFeatureId, {
					tabType: "unifiedsearchbuilder",
					repository: self.repository,
					selected: true,
					closable: true
				});
				self.closePopup();
			});

			this.searchSelector.connect(this.searchSelector, "onSearchTemplateSelected", function(searchTemplate) {
				var data = {};
				if (searchTemplate.UUID) // already opened
					data.UUID = searchTemplate.UUID;
				if (searchTemplate.isNew() || searchTemplate.UUID == searchTemplate.generateUUID()) // builder
					data.tabType = searchTemplate.isInstanceOf && searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate) ? "unifiedsearchbuilder" : "searchbuilder";
				else
					data.tabType = "search";
				self.onOpenItem(searchTemplate, data);
			});
		}
	});

});

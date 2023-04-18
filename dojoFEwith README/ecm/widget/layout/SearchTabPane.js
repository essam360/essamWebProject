/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"idx/layout/BorderContainer",
	"../search/SearchTabContainer",
	"./_LaunchBarPane",
	"./_SearchTabMixin",
	"dojo/text!./templates/SearchTabPane.html"
],

function(declare, //
lang, //
BorderContainer, //
SearchTabContainer, //
_LaunchBarPane, //
_SearchTabMixin, //
template) {

	/**
	 * @name ecm.widget.layout.SearchTabPane
	 * @class Provides a pane that contains the search tabs interface for a layout.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._SearchTabMixin,
	 */
	return declare("ecm.widget.layout.SearchTabPane", [
		_LaunchBarPane,
		_SearchTabMixin
	], {
		/** @lends ecm.widget.layout.SearchTabPane.prototype */
		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.connect(this.searchTabContainer, "onSearchTemplateOpen", function(searchTemplate, version) {
				this.openTab({
					tabType: "search",
					repository: this.repository,
					openNewTab: true,
					selected: true,
					closable: true,
					version: version,
					"searchTemplate": searchTemplate
				});
			});

			this.logExit("postCreate");
		},

		setRepository: function(repository) {
			this.logEntry("setRepository");

			//Saves the new repository.  It might not be set yet if the pane has not been selected.
			this.repository = repository;

			//only set the repository in the pane if the pane is selected.  If not, hold the repository until the pane is selected.
			if (this.selected) {
				if (!this.repository) {
					this.isLoaded = false;
				} else {
					if (this.searchTabContainer)
						this.searchTabContainer.setRepository(repository);
				}
				this.needReset = false;
			}

			this.logExit("setRepository");
		},

		loadContent: function() {
			this.logEntry("loadContent");

			if (this.repository && this.repository.connected && !this.isLoaded) {
				this.isLoaded = true;
			}

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
		 * Opens a tab with the given parameters.
		 */
		setParams: function(params) {
			this.logEntry("setParams", params);

			if (params) {
				this.setRepository(params.repository);
				this.loadContent();

				this.openTab(params);
			}

			this.logExit("setParams");
		}
	});

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dojox/collections/ArrayList",
	"../../LoggerMixin",
	"../../model/Desktop",
	"../dialog/LoginDialog",
	"../RepositorySelector"
],

function(declare, //
lang, //
array, //
event, //
connect, //
domConstruct, //
ArrayList, //
LoggerMixin, //
Desktop, //
LoginDialog, //
RepositorySelector) {

	/**
	 * @name ecm.widget.layout._RepositorySelectorMixin
	 * @class Class used to set up an {@link ecm.widget.RepositorySelector}.
	 * @augments ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._RepositorySelectorMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._RepositorySelectorMixin.prototype */

		repositorySelectorStyle: "dropdown",

		repositoryStr: "cm,p8,cmis,od,ci,box",

		repositoryTypes: null,

		/**
		 * View mode 1:Browse, 2:Search, 3:Work
		 */
		viewMode: 0,

		setRepositoryTypes: function(repositoryTypes) {
			if (repositoryTypes != null && repositoryTypes.length > 0)
				this.repositoryStr = repositoryTypes;

			this.repositoryTypes = new ArrayList(this.repositoryStr.split(","));
		},

		createRepositorySelector: function(mode) {
			this.repositorySelector = new RepositorySelector({
				'class': "reposSelectorArea",
				repositoryTypes: this.repositoryStr,
				type: this.repositorySelectorStyle,
				viewMode: this.viewMode
			});
			// Block right-click event, so the browser doesn't show an annoying right-click window
			this.connect(this.repositorySelector.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});
		},

		/**
		 * Retrieves the default repository for the current category in the layout.
		 */
		getDefaultLayoutRepository: function() {
			var defaultLayoutRepositories = ecm.model.desktop.defaultLayoutRepositories;
			var repositoryId = null;
			if (defaultLayoutRepositories) {
				repositoryId = defaultLayoutRepositories[this.defaultLayoutRepositoryComponent];
			}

			if (!repositoryId)
				repositoryId = ecm.model.desktop.getDefaultRepositoryId();

			if (repositoryId)
				return ecm.model.desktop.getRepository(repositoryId);
		},

		/**
		 * Sets the default layout repository for the current pane if no repository has been found yet. This will handle
		 * connecting to the repository, setting it to the pane, and calling the pane's loadContent when done.
		 */
		setPaneDefaultLayoutRepository: function() {
			if (!this.repository) {
				var repository = this.getDefaultLayoutRepository();
				if (!repository.connected) {
					this.connectToRepository(repository, lang.hitch(this, function() {
						this.repository = repository;
						this.loadContent();
						this._updateRepositorySelector(repository);
						this.onRepositoryChange(this, repository);
					}), lang.hitch(this, function() {
						// The connection attempt failed or was cancelled.
						// If there is another repository for this feature, select the first connected repository.
						var configuration = this.getFeatureConfiguration && this.getFeatureConfiguration();
						var featureRepositoryIds = configuration && configuration.showRepositories;
						array.some(featureRepositoryIds, lang.hitch(this, function(repositoryId) {
							var repository = ecm.model.desktop.getRepository(repositoryId);
							if (repository && repository.connected) {
								this.repository = repository;
								this.loadContent();
								this._updateRepositorySelector(repository);
								this.onRepositoryChange(this, repository);
								return true;
							}
						}));
					}));
				} else {
					this.repository = repository;
					this._updateRepositorySelector(repository);
					this.onRepositoryChange(this, repository);
				}
			}
		},

		/**
		 * Event invoked when a repository changes
		 */
		onRepositoryChange: function(pane, repository) {

		},

		connectToRepository: function(repository, callback, onCancel) {
			var loginDialog = LoginDialog.getLoginDialog();
			loginDialog.connectToRepository(repository, callback, onCancel);
		},

		doRepositorySelectorConnections: function() {
			this.connect(ecm.model.desktop, "onLogin", lang.hitch(this, this.loadDefaultRepository));

			this.connect(ecm.model.desktop, "onLogout", lang.hitch(this, function(repository) {
				this.setRepository(null);
				this.isLoaded = false;
			}));

			if (this.repositorySelector && this.repositorySelector.getNumRepositories() > 1) {
				this.connect(this.repositorySelector, "onSelect", lang.hitch(this, this.onRepositorySelectorSelect));
			}
		},

		/**
		 * Gets and loads the default layout repository
		 * 
		 * @since 2.0.3
		 */
		loadDefaultRepository: function() {
			if (this.selected) {
				var repository = this.getDefaultLayoutRepository();

				if (this.repositorySelector) {
					if (this.repositorySelector.type == "dropdown")
						this.repositorySelector.getDropdown().set("value", repository.id);
					else
						this.repositorySelector.getMenu().set("value", repository.id);
				}

				if (repository && repository.connected) {
					this.setRepository(repository);
					if (!this.isLoaded)
						this.loadContent();
				} else if (repository) {
					this.connectToRepository(repository, lang.hitch(this, function() {
						this.setRepository(repository);
						if (!this.isLoaded)
							this.loadContent();
					}));
				}
			}
		},

		/**
		 * Handles selecting a repository in the control. @ since 2.0.3
		 */
		onRepositorySelectorSelect: function(repositories) {
			var repository = repositories[0];

			if (repository == null || this.repository == repository)
				return;

			if (repository.connected) {
				this.needsReset = true;
				this.setRepository(repository);
				if (!this.isLoaded)
					this.loadContent();
				this.onRepositoryChange(this, repository);
			} else if (!repository.connected) {
				this.connectToRepository(repository, lang.hitch(this, function() {
					if (!repository.connected && this.repository)
						this.repositorySelector.getDropdown().set("value", this.repository.id);

					if (repository.connected) {
						this.needsReset = true;
						this.setRepository(repository);
						if (!this.isLoaded)
							this.loadContent();
						this.onRepositoryChange(this, repository);
					}
				}), lang.hitch(this, function() {
					// The connection attempt failed or was cancelled.
					// If there is a current repository choice and it is connected, restore it.
					if (this.repository && this.repository.connected && this.repositorySelector) {
						if (this.repositorySelector.type == "dropdown")
							this.repositorySelector.getDropdown().set("value", this.repository.id);
						else
							this.repositorySelector.getMenu().set("value", this.repository.id);
					}
				}));
			}
		},

		_updateRepositorySelector: function(repository) {
			if (this.repositorySelector) {
				if (this.repositorySelector.type == "dropdown")
					this.repositorySelector.getDropdown().set("value", repository.id);
				else
					this.repositorySelector.getMenu().set("value", repository.id);
			}
		},
		
		addFeatureContextSelector: function(domNode) {
			var rs = this.repositorySelector;
			if (rs && rs.getNumRepositories() > 1)
				domConstruct.place(rs.domNode, domNode, "last");
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/_base/event",
	"dojo/data/ItemFileWriteStore",
	"dijit/form/Button",
	"dijit/ToolbarSeparator",
	"../../Messages",
	"../../LoggerMixin",
	"../../model/Desktop",
	"../../model/Teamspace",
	"../../model/ResultSet",
	"../dialog/LoginDialog",
	"../dialog/MessageDialog",
	"../RepositorySelector",
	"ecm/widget/listView/ContentList"
],

function(declare, //
lang, //
array, //
connect, //
has, //
domClass, //
domStyle, //
domConstruct, //
event, //
ItemFileWriteStore, //
Button, //
ToolbarSeparator, //
Messages, //
LoggerMixin, //
Desktop, //
Teamspace, //
ResultSet, //
LoginDialog, //
MessageDialog, //
RepositorySelector, //
ContentList) {
	/**
	 * @name ecm.widget.layout._ManageTeamspaceMixin
	 * @class Class used for ManageTeamspacesPane and TeamspaceFlyout
	 * @augments ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._ManageTeamspaceMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._ManageTeamspaceMixin.prototype */

		/**
		 * Loads actions for the teamspaces.
		 */
		_loadActions: function(actionListName, contentList) {
			this.logEntry("_loadActions");
			ecm.model.desktop.loadMenuActions(actionListName, lang.hitch(this, function(actions) {
				this.setActions(actions, contentList);
			}));
			this.logExit("_loadActions");
		},

		_createActionButton: function(action, contentList) {
			if (action.id == "Separator") {
				return new ToolbarSeparator();
			} else {
				var toolbarButton = new Button({
					label: action.name
				});
				domClass.add(toolbarButton.domNode, "action");
				toolbarButton.action = action;

				this.connect(toolbarButton, "onClick", function() {
					var selectedItems = [];
					if (contentList.getSelectedItems() != null && contentList.getSelectedItems().length > 0) {
						selectedItems.push(contentList.getSelectedItems()[0]);
					}
					action.performAction(this.repository, selectedItems, this);
				});

				// Block right-click event, so the browser doesn't show an annoying right-click window
				this.connect(toolbarButton.domNode, "oncontextmenu", function(evt) {
					if (evt.stopPropagation) {
						evt.cancelBubble = true;
						evt.stopPropagation();
					} else {
						event.stop(evt);
					}
					return false;
				});

				return toolbarButton;
			}
		},

		/**
		 * Sets up the teamspaces list.
		 */
		_setupTeamspaces: function() {
			this.logEntry("_setupTeamspaces");
			if (this.repository && this.repository.teamspacesEnabled) {
				var paging = true;
				if (this._isFlyout()) {
					paging = false;
				}
				this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(resultSet) {
					resultSet.container = this;
					if (this._isFlyout()) {
						delete resultSet.structure;
						resultSet.sortDirection = 0;
						resultSet.sortIndex = 0;
					}
					this._teamspacesLoaded = true;
					this.teamspaceContents.setResultSet(resultSet);
				}), paging, null, null, null, true);
			}
			this.logExit("_setupTeamspaces");
		},

		/**
		 * Sets up the templates list.
		 */
		_setupTemplates: function() {
			this.logEntry("_setupTemplates");
			if (this.repository && this.repository.teamspacesEnabled) {
				this.repository.retrieveTeamspaceTemplateFolderResultSet(lang.hitch(this, function(resultSet) {
					resultSet.container = this;
					if (this._isFlyout()) {
						delete resultSet.structure;
						resultSet.sortDirection = 0;
						resultSet.sortIndex = 0;
					}
					this._templatesLoaded = true;
					this.templateContents.setResultSet(resultSet);
				}));
			}
			this.logExit("_setupTemplates");
		},

		connectRepositorySelector: function() {
			this.logEntry("connectRepositorySelector");
			this.connect(this.repositorySelector, "onSelect", lang.hitch(this, this.connectRepositories));
			this.logExit("connectRepositorySelector");
		},

		connectRepositories: function(repository) {

			if (repository == this.repository)
				return;

			if (repository.teamspacesEnabled && repository.connected) {
				this.setRepository(repository);
				this.onRepositoryChange(this, repository);

			} else if (repository.teamspacesEnabled && !repository.connected) {
				var loginDialog = LoginDialog.getLoginDialog();
				var currentRepo = this.repository;
				// set the repo to the selected repo in case any repo's on change events are fired 
				// during the logon process.
				this.repository = repository;
				loginDialog.connectToRepository(repository, lang.hitch(this, function() {
					if (!repository.connected && this.repository) {
						this.repositorySelector.getDropdown().set("value", this.repository.id);
					}
					if (repository.connected) {
						if (!this.isLoaded) {
							this.loadContent();
						}
						this.setRepository(repository);
						this.onRepositoryChange(this, repository);
					}
				}));

				connect.connect(loginDialog, "hide", lang.hitch(this, function() {
					if (!repository.connected) {
						this.repository = currentRepo;
						if (this.repositorySelector["getDropdown"])
							this.repositorySelector.getDropdown().set("value", this.repository.id);
						else
							this.repositorySelector.setRepositoryId(this.repository.id);
					}
				}));
			}

		},
		connectDesktopListeners: function() {
			this.connect(ecm.model.desktop, "onLogin", lang.hitch(this, function(repository) {
				if (this.selected) {
					var repository = this.getDefaultLayoutRepository();

					if (repository && repository.connected) {
						this.setRepository(repository);
						if (!this.isLoaded) {
							this.loadContent();
						}
					} else if (repository) {
						this.connectToRepository(repository, lang.hitch(this, function(repo) {
							this.setRepository(repo);
							if (!this.isLoaded) {
								this.loadContent();
							}
						}));
					}

					if (this.repositorySelector && this.repositorySelector["getDropdown"])
						this.repositorySelector.getDropdown().set("value", this.repository.id);
					else if (this.repositorySelector)
						this.repositorySelector.setRepositoryId(repository.id);
				}
			}));

			this.connect(ecm.model.desktop, "onLogout", lang.hitch(this, function(repository) {
				this.repository = null;
				this.isLoaded = false;

				if (this.teamspaces) {
					this.teamspaces.setResultSet(null);
				}
				if (this.templates) {
					this.templates.setResultSet(null);
				}
				if (this.repositorySelector) {
					this.repositorySelector.destroy();
					this.repositorySelector = null;
				}
				this._cleanUpActions();
				this.reset();
			}));
		},
		createRepositorySelector: function() {
			this.repositorySelector = new RepositorySelector({
				'class': "reposSelectorArea",
				repositoryTypes: "cm,p8",
				teamspaceEnabledOnly: true,
				viewMode: 4
			});

			// If there is more than one repository in the list, show the selector to the user.
			if (this._isFlyout() && this.repositorySelector.getNumRepositories() > 1)
				domConstruct.place(this.repositorySelector.domNode, this.topPane.domNode, "first");
			else if (this.repositorySelector.getNumRepositories() > 1) {
				domConstruct.place(this.repositorySelector.domNode, this.templateRepoPicker, "first");
			} else {

				if (this.teamspaceRepoPickerPane)
					this.teamspaceRepoPickerPane.domNode.style.display = "none";
				if (this.templateRepoPickerPane)
					this.templateRepoPickerPane.domNode.style.display = "none";
			}

		},

		connectToRepository: function(repository, callback) {
			var loginDialog = LoginDialog.getLoginDialog();
			loginDialog.connectToRepository(repository, lang.hitch(this, function() {
				if (callback) {
					callback(repository);
				}
			}));
		},

		/**
		 * Retrieves the default repository for teamspaces
		 */
		getDefaultLayoutRepository: function() {
			var defaultLayoutRepositories = ecm.model.desktop.defaultLayoutRepositories;
			var repositoryId = null;
			if (defaultLayoutRepositories) {
				repositoryId = defaultLayoutRepositories["teamspaces"];
				if (!repositoryId) {
					repositoryId = ecm.model.desktop.getDefaultRepositoryId();
				}
			}
			return ecm.model.desktop.getRepository(repositoryId);
		},

		setRepository: function(repository) {
			this.repository = repository;
			this._teamspacesLoaded = false;
			this._templatesLoaded = false;

			if (this.repository && this.repository.teamspacesEnabled) {
				if (this.bottomPane && this.bottomPane.domNode) {
					domStyle.set(this.bottomPane.domNode, "display", ""); // unhide tabs
					this.bottomPane.resize();
				}

				if (this._tabContainer) { // load just the current tab's content list
					var contentListName = this._tabContainer.selectedChildWidget.getChildren()[0].dojoAttachPoint;
					if (contentListName == "templateContents") {
						this._setupTemplates();
					} else {
						this._setupTeamspaces();
					}
				} else {
					this._setupTeamspaces();
					this._setupTemplates();
				}
				this.needRefresh = false;

				this._cleanUpActions();
				this._loadActions("TeamspacesListToolbar", this.teamspaceContents);
				this._loadActions("TemplatesListToolbar", this.templateContents);

				this.isLoaded = true;
				this.needReset = false;

				// avoid multiple connects on the object. causes duplicate calls
				if (!this.connectedRepos || this.connectedRepos[this.repository.id] != this.repository.id) {
					if (!this.connectedRepos) {
						var repoIds = new Array();
						repoIds[this.repository.id] = this.repository.id;
						this.connectedRepos = repoIds;
					} else {
						this.connectedRepos[this.repository.id] = this.repository.id;
					}

					this.connect(this.repository, "onChange", function(repo) {
						this.needReset = true;
						if (repo && repo.isInstanceOf && repo.isInstanceOf(ecm.model.Repository) && repo.connected && repo == this.repository) {
							this.reset();
						}
					});

					this.connect(this.repository, "onAddTeamspace", lang.hitch(this, function(teamspace) {
						this._clearFilter(teamspace.type);
						this.teamspaceContents.getResultSet().refresh(); //this.teamspaces.addItem(this.createTeamspaceListEntry(teamspace));
					}));

					this.connect(this.repository, "onAddTeamspaceTemplate", lang.hitch(this, function(template) {
						if (template)
							this._clearFilter(template.type);
						else
							this._clearFilter("template");
						this.templateContents.getResultSet().refresh(); //this.templates.addItem(this.createTeamspaceTemplateEntry(template));
					}));

					this.connect(this.repository, "onUpdateTeamspace", lang.hitch(this, lang.hitch(this, function(teamspace) {
						this._clearFilter(teamspace.type);
					})));

					this.connect(this.repository, "onUpdateTeamspaceTemplate", lang.hitch(this, function(template, repo) {
						if (template.state == "default") {
							// need to refresh a list for this case because previous default item needs to be updated also
							this._clearFilter(template.type);
							this.templateContents.getResultSet().refresh();
						} else {
							//repository.onChange should have fired to indicate the has been updated
						}
					}));

					this.connect(this.repository, "onTeamspaceDeleted", lang.hitch(this, function(id) {

						this._clearFilter("teamspace");
						this.teamspaceContents.getResultSet().refresh(); //this.teamspaces.removeItem(id);
					}));

					this.connect(this.repository, "onTeamspaceTemplateDeleted", lang.hitch(this, function(id) {
						this._clearFilter("template");
						this.templateContents.getResultSet().refresh(); //this.templates.removeItem(id);
					}));
				}
			}
		},
		/**
		 * @private
		 */
		_clearFilter: function(type) {
			if (this._clearTemplateFilter)
				this._clearTemplateFilter();

			if (this._clearFilterText)
				this._clearFilterText(type);
		},
		/**
		 * Event invoked when a repository changes
		 */
		onRepositoryChange: function(pane, repository) {
		},

		/**
		 * Sets the default layout repository for the current pane if no repository has been found yet. This will handle
		 * connecting to the repository, setting it to the pane, and calling the pane's loadContent when done.
		 */
		setPaneDefaultLayoutRepository: function() {
			this.repository = this.getDefaultLayoutRepository();

			if (this.repositorySelector && this.repositorySelector["getDropdown"])
				this.repositorySelector.getDropdown().set("value", this.repository.id);
			else if (this.repositorySelector)
				this.repositorySelector.setRepositoryId(this.repository.id);

			if (!this.repository.connected) {
				var logingDialog = LoginDialog.getLoginDialog();
				logingDialog.connectToRepository(this.repository, lang.hitch(this, function() {
					this.setRepository(this.repository);
					this.onRepositoryChange(this, this.repository);
				}), lang.hitch(this, function() {
					this.setRepository(this.repository);
					//this.onRepositoryChange(this, this.repository);
				}));
			} else {
				this.setRepository(this.repository);
				this.onRepositoryChange(this, this.repository);
			}
		}
	});
});

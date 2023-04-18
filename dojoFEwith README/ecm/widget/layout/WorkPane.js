/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/aspect",
	"dojo/window",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"idx/layout/BorderContainer",
	"dijit/form/Button",
	"../../model/Desktop",
	"../../model/Message",
	"../../model/ProcessApplicationSpace",
	"../../model/ProcessRole",
	"../../model/ProcessInbasket",
	"../../model/Worklist",
	"../RepositorySelector",
	"../WorklistSelector",
	"../process/InbasketContainer",
	"./_LaunchBarPane",
	"./_RepositorySelectorMixin",
	"../dialog/WorkflowPreferencesDialog",
	"../dialog/ManageProcessRolesDialog",
	"dojo/text!./templates/WorkPane.html"
],

function(declare, lang, domStyle, domClass, domAttr, aspect, window, ContentPane, BorderContainer, idxBorderContainer, Button, Desktop, Message, ProcessApplicationSpace, ProcessRole, ProcessInbasket, Worklist, RepositorySelector, WorklistSelector, InbasketContainer, _LaunchBarPane, _RepositorySelectorMixin, WorkflowPreferencesDialog, ManageProcessRolesDialog, template) {

	/**
	 * @name ecm.widget.layout.WorkPane
	 * @class Provides a pane that contains workflow navigation components. This pane restricts repository selection to
	 *        IBM FileNet P8 repositories with workflow privileges and IBM Content Manager repositories.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._RepositorySelectorMixin
	 */
	return declare("ecm.widget.layout.WorkPane", [
		_LaunchBarPane,
		_RepositorySelectorMixin
	], {
		/** @lends ecm.widget.layout.WorkPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		viewMode: 3, // Work

		_appSpaceName: null,
		_roleName: null,
		_worklistName: null,
		_allWork: true, // setting this to false on the URL will hide the work selector tree
		_singleInbasket: false, //setting this to true on the URL will display only the one specified in-basket from a role

		postCreate: function() {
			this.logEntry("postCreate");

			this.inherited(arguments);
			this.defaultLayoutRepositoryComponent = "work";
			this.repositorySelector = new RepositorySelector({
				'class': "reposSelectorArea",
				repositoryTypes: "cm,p8",
				workflowEnabledOnly: true,
				type: "dropdown",
				viewMode: this.viewMode
			});
			this.setRepositoryTypes("cm,p8");
			this.doRepositorySelectorConnections();

			this.own(aspect.after(Desktop, "onLogout", lang.hitch(this, function(repository) {
				this._applicationSpace = null;
				this._worklist = null;
			}), true));

			// If there is more than one repository in the list, show the selector to the user.
			if (this.repositorySelector.getNumRepositories() > 1) {
				this.repositorySelectorArea.domNode.appendChild(this.repositorySelector.domNode);
			} else {
				domStyle.set(this.repositorySelectorArea.domNode, "display", "none");
			}

			this.logExit("postCreate");
		},

		destroy: function() {
			this.logEntry("destroy");
			if (this.repositorySelector) {
				this.repositorySelector.destroy();
			}
			this._destroyWorklistSelector();
			this._applicationSpace = null;
			this.inherited(arguments);
			this.logExit("destroy");
		},

		_destroyWorklistSelector: function() {
			this.logEntry("_destroyWorklistSelector");
			if (this.worklistSelector) {
				this.worklistSelector.destroy();
				this.worklistSelector = null;
			}
			this.logExit("_destroyWorklistSelector");
		},

		focus: function() {
			if (this.repositorySelector && this.repositorySelector.getDropdown()) {
				this.repositorySelector.getDropdown().focus();
			}
		},

		/**
		 * Looks for repository specified as a URL parameter and uses it if found, otherwise, use the default repository
		 * specified in the desktop.
		 * 
		 * @since 2.0.3
		 */
		getDefaultLayoutRepository: function() {
			this.logEntry("getDefaultLayoutRepository");
			var repository = null;
			var repositoryOverride = false;

			// See if the default repository is overridden by a url parameter.
			var params = location.search.substring(1).split("&");
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split("=");
				if (param[0] == "repository" || param[0] == "repositoryId") { // Per ICN documentation, the url parameter is repositoryId so need to look for both now.
					repositoryOverride = true;
					var repositoryId = param[1];
					repository = ecm.model.desktop.getRepository(repositoryId);
					if (repository == null) {
						ecm.model.desktop.addMessage(Message.createErrorMessage("work_repository_not_found_error", [
							repositoryId,
							ecm.model.desktop.name
						]));
					} else if (!repository.showInWorkView) {
						repository = null;
						ecm.model.desktop.addMessage(Message.createErrorMessage("work_repository_not_enabled_error", [
							repositoryId,
							ecm.model.desktop.name
						]));
					}
					break;
				}
			}

			this.logExit("getDefaultLayoutRepository");
			if (repositoryOverride == false) {
				return this.inherited(arguments);
			} else {
				return repository;
			}
		},

		/**
		 * @since 2.0.3
		 */
		onRepositorySelectorSelect: function(repositories) {
			// Ignore the event if there are worklist parameters in the URL and the control has not been loaded.
			if (this._getWorklistUrlParameter() == null || this.isLoaded) {
				this.inherited(arguments);
			}
		},

		/**
		 * Overridden to check for worklist parameters in the URL. If found, sets the specified worklist as selected on
		 * the initial load. Called when connecting up the repository selector just after login.
		 * 
		 * @since 2.0.3
		 */
		loadDefaultRepository: function() {
			this.logEntry("loadDefaultRepository");
			if (this.selected) {
				var repository = this.getDefaultLayoutRepository();

				if (this._allWork) {
					if (this.repositorySelector) {
						if (this.repositorySelector.type == "dropdown")
							this.repositorySelector.getDropdown().set("value", repository.id);
						else
							this.repositorySelector.getMenu().set("value", repository.id);
					}
				}

				if (repository && repository.connected) {
					this._getWorklist(repository, lang.hitch(this, function(worklist) {
						this.setRepository(repository);
						if (!this.isLoaded) {
							this.loadContent();
						}
					}));
				} else if (repository) {
					this.connectToRepository(repository, lang.hitch(this, function() {
						if (repository.connected) {
							this._getWorklist(repository, lang.hitch(this, function(worklist) {
								this.setRepository(repository);
								if (!this.isLoaded) {
									this.loadContent();
								}
							}));
						}
					}));
				}
			}
			this.logExit("loadDefaultRepository");
		},

		/**
		 * private
		 */
		_getWorklist: function(repository, callback) {
			var worklistUrlParameter = this._getWorklistUrlParameter(repository);
			if (worklistUrlParameter != null && worklistUrlParameter.length > 0) {
				if (repository._isP8()) {
					var roleId = this._appSpaceName + "," + this._roleName; // Unique id's for the tree
					var inbasketId = roleId + "," + this._worklistName;
					var self = this;
					// Pre-load the model objects with the application space/ process roles
					var request = repository.retrieveWorklistContainers(lang.hitch(this, function(worklistFolders) {
						for (var i = 0; i < worklistFolders.length; i++) {
							var worklistFolder = worklistFolders[i];
							if (worklistFolder.isInstanceOf && worklistFolder.isInstanceOf(ecm.model.ProcessApplicationSpace)) {
								if (worklistFolder.id == this._appSpaceName) {
									// Found the correct application space, now get it's process roles (will be cached in app space)
									worklistFolder.retrieveWorklists(lang.hitch(this, function(processRoles) {
										for (var j = 0; j < processRoles.length; j++) {
											var processRole = processRoles[j];
											if (processRole.id == roleId) {
												// Found the correct process role, now get it's inbaskets (will be cached in process role)
												processRole.retrieveWorklists(lang.hitch(this, function(inbaskets) {
													for (var k = 0; k < inbaskets.length; k++) {
														if (inbaskets[k].id == inbasketId) {
															self._worklist = inbaskets[k];
															callback(self._worklist);
														}
													}
												}));
											}
										}
									}));
								}
							} else if (worklistFolder.isInstanceOf && worklistFolder.isInstanceOf(ecm.model.ProcessRole)) {
								if (worklistFolder.id == roleId) {
									// Found the correct process role, now get it's inbaskets (will be cached in process role)
									worklistFolder.retrieveWorklists(lang.hitch(this, function(inbaskets) {
										for (var j = 0; j < inbaskets.length; j++) {
											if (inbaskets[j].id == inbasketId) {
												self._worklist = inbaskets[j];
												callback(self._worklist);
											}
										}
									}));
								}
							} else if (worklistFolder.isInstanceOf && worklistFolder.isInstanceOf(ecm.model.ProcessInbasket)) {
								// Single application space and single process role so the return worklistFolder is a ProcessInBasket object
								if (worklistFolder.id == inbasketId) {
									self._worklist = worklistFolder;
									callback(self._worklist);
								}
							}
						}
					}));
				} else { // Is CM8 
					this._worklist = new Worklist({
						id: this._worklistName,
						name: this._worklistName,
						description: this._worklistName,
						repository: repository
					});
					callback(this._worklist);
				}
			} else {
				callback();
			}
		},

		_getWorklistUrlParameter: function(repository) {
			this.logEntry("_getWorklistUrlParameter");
			this._worklistName = null;
			this._roleName = null;
			this._appSpaceName = null;

			// See if the we need to set the root to a worklist specified as a URL parameter.
			var params = location.search.substring(1).split("&");
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split("=");
				if (param[0] == "worklist" || param[0] == "inbasket") {
					this._worklistName = decodeURIComponent(param[1]);
				} else if (param[0] == "role") {
					this._roleName = decodeURIComponent(param[1]);
				} else if (param[0] == "applicationSpace") {
					this._appSpaceName = decodeURIComponent(param[1]);
				} else if (param[0] == "allWork") {
					var allWork = decodeURIComponent(param[1]);
					if (allWork && allWork.length > 0 && allWork == "false") {
						this._allWork = false;
						// Hide the left side leading edge pane (holds repository and worklist selectors
						var leadingPane = this.leadingPane;
						this.removeChild(leadingPane);
						leadingPane.destroyRecursive();
					}
				} else if (param[0] == "singleInbasket") {
					var singleInbasket = decodeURIComponent(param[1]);
					if (singleInbasket && singleInbasket.length > 0 && singleInbasket == "true") {
						this._singleInbasket = true;
					}
				}
			}

			if (repository && repository.type == "p8") {
				// Check for all URL parameters to specify a P8 inbasket, will produce a JS error message (not a user error)
				if (this._worklistName != null) {
					if (this._appSpaceName == null || this._appSpaceName.length == 0) {
						throw new Error("URL parameters are not complete for specifying P8 In-basket, missing applicationSpace.");
					} else if (this._roleName == null || this._roleName.length == 0) {
						throw new Error("URL parameters are not complete for specifying P8 In-basket, missing role.");
					}
				}

				if (this._singleInbast) {
					if (this._allWork) {
						throw new Error("URL parameters are not consistent for specifying P8 In-basket, singleInbasket = true, requires allWork = false.");
					}
				}
			}
			this.logExit("_getWorklistUrlParameter");
			return this._worklistName;
		},

		/**
		 * Sets a specific repository as being selected in the work pane.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object to be selected.
		 */
		setRepository: function(repository) {
			this.logEntry("setRepository");
			//Saves the new repository.  It might not be set yet if the pane has not been selected.
			this.repository = repository;
			if (this._allWork) {
				this._displayPreferencesLink();

				//only set the repository in the pane if the pane is selected.  If not, hold the repository until the pane is selected.
				if (this.selected) {
					if (this.repository != null) {
						this.repositorySelector.getDropdown().set("value", this.repository.id);
						if (this.worklistSelector && this.repository.getPrivilege("workflow")) {
							this.worklistSelector.setRepository(this.repository);
						} else if (this.worklistSelector) {
							this.worklistSelector.setRepository(null);
						}
					} else {
						if (this.worklistSelector) {
							this._destroyWorklistSelector();
							this.isLoaded = false;

							this.inbasketArea.tabContainer.destroyDescendants(); // remove all tabs from previous role
							this.inbasketArea.setSelectedContentList(null);
							this.inbasketArea.setProcessRole(null);
						}
						this._applicationSpace = null;
						this._checkManageRolesDisplay(null);
					}
					this.needReset = false;
				} else {
					if (this.worklistSelector) {
						this.worklistSelector.setRepository(null);
					}
				}
			}
			this.logExit("setRepository");
		},

		/**
		 * Method called by parent container to pass additional parameters to this pane.
		 * 
		 * @param params
		 *            Contains a handle to the worklist object to use when displaying this pane.
		 */
		setParams: function(params) {
			if (params) {
				this.setWorklist(params.worklist, params.repository);
			}
		},

		/**
		 * Sets the worklist to be loaded into this pane.
		 * 
		 * @param worklist
		 *            An {@link ecm.model.Worklist} object, or a derivation of one.
		 * @param repository
		 *            An {@link ecm.model.Repository} object to be selected.
		 */
		setWorklist: function(worklist, repository) {
			this.logEntry("setWorklist");

			this.worklist = worklist;
			this.repository = repository;
			this.inbasketArea.setRepository(this.repository);

			if (this.repository.type == "p8") {
				this.openInbaskets(this.worklist);
			} else if (this.repository.type == "cm") {
				this.openWorklists(this.worklist);
			}

			this.logExit("setWorklist");
		},

		/**
		 * Loads the work pane content for rendering.
		 */
		loadContent: function() {
			this.logEntry("loadContent");
			var self = this;

			// This handles retrieving the default layout repository, login, and setting it as the repository if no repository has been set yet.
			this.setPaneDefaultLayoutRepository();

			if (!this.isLoaded && this.repository && this.repository.connected) {
				this.isLoaded = true;
				if (this._allWork) {
					this._displayPreferencesLink();
					this._createWorklistSelector();

					if (this._worklist != null && this.worklistSelector) {
						if (this.repository.type == "cm") {
							// If CM repository and the worklist has been specified on the URL, pre-load it.
							this.setWorklist(this._worklist, this.repository);

							var workflowTree = this.worklistSelector._tree;
							var worklistFolderNode = workflowTree.getNodesByItem("all"); // CM parent node id
							var deferred = workflowTree._expandNode(worklistFolderNode[0], false);
							deferred.then(lang.hitch(this, function() {
								var worklistNode = workflowTree.getNodesByItem(this._worklist.id);
								if (worklistNode[0]) {
									workflowTree.set('selectedItems', [
										worklistNode[0].item
									]);
									window.scrollIntoView(worklistNode[0].rowNode);
								}
							}));
						} else if (this.repository.type == "p8") {
							// P8 inbasket has bee specified on the URL, pre load it.
							this.setWorklist(this._worklist, this.repository);
						}
					}
				} else {
					// Only show content list (right side), do not render the worklist selector tree.
					this._doWorkConnections(); // setup the tab transitions for inbaskets
					this.setWorklist(this._worklist, this.repository);
				}
			}
			this.needReset = false;
			this.logExit("loadContent");
		},

		_displayPreferencesLink: function() {
			if (this.repository && this.repository.type == "p8") {
				domStyle.set(this.preferences.domNode, "display", "");
			} else {
				domStyle.set(this.preferences.domNode, "display", "none");
			}

			if (this.leadingPane) {
				this.leadingPane.resize(); // For Preferences link to display properly
			}
		},

		/**
		 * Creates a new worklist selector.
		 */
		_createWorklistSelector: function() {
			this.logEntry("_createWorklistSelector");

			this._destroyWorklistSelector();

			this.worklistSelector = new WorklistSelector();
			this._doWorkSelectorConnections();
			this._doWorkConnections();

			if (this.repository.getPrivilege("workflow")) {
				this.worklistSelector.setRepository(this.repository);
			}

			this.workSelectorArea.domNode.appendChild(this.worklistSelector.domNode);

			this.logExit("_createWorklistSelector");
		},

		_doWorkConnections: function() {
			this.connect(this.inbasketArea.tabContainer, "_transition", function(newInbasket, oldInbasket) {
				var selectedContentList = this.inbasketArea.getSelectedContentList();
				if (oldInbasket && (selectedContentList == null || newInbasket.title != selectedContentList.title)) {
					var inbaskets = this.inbasketArea.getInbaskets();
					for (var index = 0; index < inbaskets.length; index++) {
						var inbasket = inbaskets[index];
						if (inbasket.name == newInbasket.title) {
							this.inbasketArea.setSelectedIndex(index);
							this.inbasketArea.selectedInbasket = inbasket;
							this.inbasketArea.setSelectedContentList(newInbasket);
							if (!newInbasket.getResultSet()) {
								this.inbasketArea.retrieveResultSet(inbasket, index);
							} else {
								this.inbasketArea.setMessage();
							}
							break;
						}
					}
				}

				if (this.worklistSelector) {
					var workflowTree = this.worklistSelector._tree;
					var processRole = this.inbasketArea.getProcessRole();
					var appSpaceNode = workflowTree.getNodesByItem(processRole.parent.id);

					var selectInbasket = lang.hitch(this, function(processRole) {
						var currentInbasket = inbasket ? inbasket : this.inbasketArea.selectedInbasket;
						if (currentInbasket && currentInbasket.parent.id == processRole.id) {
							var inbasketNode = workflowTree.getNodesByItem(currentInbasket)[0];
							if (inbasketNode) {
								workflowTree.set('selectedItems', [
									inbasketNode.item
								]);
								window.scrollIntoView(inbasketNode.rowNode);
								// this.onClick(inbasketNode.item, inbasketNode);
							}
						}
					});

					if (appSpaceNode && appSpaceNode[0]) {
						var deferred = workflowTree._expandNode(appSpaceNode[0], false);
						deferred.then(lang.hitch(this, function() {
							var roleNode = workflowTree.getNodesByItem(processRole.id);
							if (roleNode && roleNode[0]) {
								var def = workflowTree._expandNode(roleNode[0], false);
								def.then(lang.hitch(this, function() {
									selectInbasket(processRole);
								}));
							}
						}));
					} else {
						var roleNode = workflowTree.getNodesByItem(processRole.id);
						if (roleNode && roleNode[0]) {
							var deferred = workflowTree._expandNode(roleNode[0], false);
							deferred.then(lang.hitch(this, function() {
								selectInbasket(processRole);
							}));
						}
						else{
							//if only 1 role in the list, no role node in the tree
							if(processRole)
								selectInbasket(processRole);
						}
					}
				}
			});
		},

//	expand: function(node) {
//		this.worklistSelector._tree._expandNode(node);
//
//	            var childBranches = dojo.filter(node.getChildren() || [], function(node) {
//	                return node.isExpandable;
//	            });
//
//	            var def = new Deferred();
//	            defs = dojo.map(childBranches, expand);
//	 },

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			this.logEntry("reset");

			this.setRepository(this.repository);
			this.needReset = false;

			this.logExit("reset");
		},

		/**
		 * Sets up event handles for the work selector.
		 */
		_doWorkSelectorConnections: function() {
			this.logEntry("_doWorkSelectorConnections");

			this.connect(this.worklistSelector, "onProcessRoleSelected", lang.hitch(this, function(processRole) {
				this._applicationSpace = processRole.parent;
				this._checkManageRolesDisplay(this._applicationSpace);
				if (this.leadingPane) {
					this.leadingPane.resize();
				}

				processRole.retrieveWorklists(lang.hitch(this, function(result) {
					this.setWorklist(result[0], this.repository);
				}));
			}));

			this.connect(this.worklistSelector, "onProcessApplicationSpaceSelected", lang.hitch(this, function(applicationSpace) {
				this._applicationSpace = applicationSpace;
				this._checkManageRolesDisplay(this._applicationSpace);
				if (this.leadingPane) {
					this.leadingPane.resize();
				}
			}));

			this.connect(this.worklistSelector, "onWorklistSelected", lang.hitch(this, function(worklist) {
				if (this.repository._isP8()) {
					if (!this._applicationSpace) {
						this._applicationSpace = worklist.parent.parent;
					}
					this._checkManageRolesDisplay(this._applicationSpace);
				}
				this.setWorklist(worklist, this.repository);
			}));

			this.logExit("_doWorkSelectorConnections");
		},

		_checkManageRolesDisplay: function(applicationSpace) {
			if (applicationSpace && applicationSpace.canManageRoles) {
				domStyle.set(this.separatorNode, "display", "inline-block");
				domStyle.set(this.manageRoles.domNode, "display", "inline-block");
			} else {
				domStyle.set(this.separatorNode, "display", "none");
				domStyle.set(this.manageRoles.domNode, "display", "none");
			}
		},

		/**
		 * Opens an IBM FileNet P8 in-basket worklist.
		 * 
		 * @param worklist
		 *            This is an {@link ecm.model.ProcessInbasket} object.
		 */
		openInbaskets: function(worklist) {
			this.logEntry("openInbaskets");
			this._worklist = worklist;
			if (!this.isLoaded) {
				this.loadContent();
			} else {
				domStyle.set(this.inbasketArea.tabContainer.domNode, "display", "block");
				domStyle.set(this.inbasketArea.worklistContentsPane.domNode, "display", "none");

				var currentProcessRole = worklist.parent;
				if (currentProcessRole == this.inbasketArea.getProcessRole()) { // inbasket is from a role that is already selected
					var index = this.inbasketArea.getInbasketTabIndex(worklist);
					this.inbasketArea.setSelectedIndex(index);
					var contentList = this.inbasketArea.getSelectedContentList();
					if (index >= 0 && !contentList.getResultSet()) {
						this.inbasketArea.retrieveResultSet(this.inbasketArea.getInbasket(index), index);
					} else {
						// this inbasket has already been opened, just reload and update toolbar state
						this.inbasketArea.selectedInbasket = this.inbasketArea.getInbasket(index);
						this.inbasketArea.setMessage();
					}
					this.inbasketArea.selectCurrentContentList();
				} else { // work list is from a role that isn't yet selected
					this.inbasketArea.tabContainer.destroyDescendants(); // remove all tabs from previous role
					this.inbasketArea.setSelectedContentList(null);
					this.inbasketArea.setProcessRole(currentProcessRole);

					// retrieves all inbaskets from current role
					currentProcessRole.retrieveWorklists(lang.hitch(this, function(result) {
						var inbaskets = result;
						if (this._singleInbasket) {
							// Only create one in-basket tab if single inbasket specified on the URL
							for (var i = 0; i < inbaskets.length; i++) {
								if (worklist.id != inbaskets[i].id) {
									inbaskets.splice(i, 1);
									i--; // step back one spot to start looking at new item
								}
							}
						}
						this.inbasketArea.setInbaskets(inbaskets);
						// creates content lists for each inbasket, but only retrieves workitems for currently selected tab
						for (var index = 0; index < inbaskets.length; index++) {
							var inbasket = inbaskets[index];
							this.inbasketArea.createInbasketTab(index);
							if (inbasket.id == worklist.id) {
								this.inbasketArea.retrieveResultSet(inbasket, index);
								this.inbasketArea.selectCurrentContentList();
							}
						}
					}));
				}
			}

			this.logExit("openInbaskets");
		},

		/**
		 * Opens an IBM Content Manager worklist.
		 * 
		 * @param worklist
		 *            This is an {@link ecm.model.Worklist} object.
		 */
		openWorklists: function(worklist) {
			this.logEntry("openWorklists");
			this._worklist = worklist;
			if (!this.isLoaded) {
				this.loadContent();
			} else {

				domStyle.set(this.inbasketArea.tabContainer.domNode, "display", "none");
				domStyle.set(this.inbasketArea.worklistContentsPane.domNode, "display", "block");

				worklist.retrieveWorkItems(lang.hitch(this, function(resultSet) {
					this.inbasketArea.worklistContents.setResultSet(resultSet);
					this.inbasketArea.resize();
				}));

				this.connect(worklist, "onRefresh", function() {
					worklist.retrieveWorkItems(lang.hitch(this, function(resultSet) {
						this.inbasketArea.worklistContents.setResultSet(resultSet);
					}));
				});

				this.connect(worklist, "onRefreshWorklist", function() {
					this.inbasketArea.refresh();
				});

				this.inbasketArea.setSelectedWorklist(worklist);
				this.inbasketArea.setSelectedContentList(this.inbasketArea.worklistContents);
			}

			this.logExit("openWorklists");
		},

		_showPreferences: function() {
			var userInfoDialog = new WorkflowPreferencesDialog({
				repository: this.repository
			});
			userInfoDialog.show();
		},

		_showManageRoles: function() {
			var manageRolesDialog = new ManageProcessRolesDialog({
				repository: this.repository
			});
			manageRolesDialog.show(this._applicationSpace, null, true);
		},

		/**
		 * Clears the work pane.
		 */
		clear: function() {
			if (this.worklistSelector) {
				this.worklistSelector.setRepository(null);
			}
			if (this.inbasketArea) {
				this.inbasketArea.tabContainer.destroyDescendants(); // remove all tabs from previous role
				this.inbasketArea.setSelectedContentList(null);
				this.inbasketArea.setProcessRole(null);
			}
		}

	});
});

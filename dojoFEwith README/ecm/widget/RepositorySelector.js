/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojox/collections/ArrayList",
	"dojox/grid/DataGrid",
	"dijit/_Widget",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/form/Select",
	"dijit/registry",
	"idx/html",
	"../LoggerMixin",
	"../model/Desktop"
], function(declare, //
lang, //
has, //
domClass, //
domConstruct, //
domGeom, //
ArrayList, //
DataGrid, //
_Widget, //
Menu, //
MenuItem, //
Select, //
registry, //
idxHtml, //
LoggerMixin, //
Desktop) {

	/**
	 * @name ecm.widget.RepositorySelector
	 * @class Provides a widget that is used to select a repository.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.RepositorySelector", [
		_Widget,
		LoggerMixin
	], {
		/** @lends ecm.widget.RepositorySelector.prototype */

		/**
		 * String equal "dropdown", "menu", or "grid".
		 */
		type: "",
		/**
		 * Used when type is "dropdown". The id of the default selected item.
		 */
		defaultSelectedId: "",
		/**
		 * Used when type is "grid" or "dropdown". The store for the DataGrid or Select.
		 */
		store: null,
		/**
		 * Used when type is "grid". The DataGrid structure.
		 */
		structure: null,
		/**
		 * Used when type is "grid". Style to set on the DataGrid.
		 */
		style: "",
		/**
		 * Label to display when the type is "dropdown".
		 */
		label: null,
		/**
		 * The number of repositories.
		 */
		numRepositoies: 0,
		/**
		 * Comma separated string containing the list of repository types.
		 */
		repositoryTypes: null,
		/**
		 * Boolean indicating use only the teamspaces enabled repositories.
		 */
		teamspaceEnabledOnly: false,
		/**
		 * Boolean indicating use only the workflow privileged repositories.
		 */
		workflowEnabledOnly: false,
		/**
		 * Boolean indicating use only the entry templates enabled repositories.
		 */
		entryTemplatesEnabledOnly: false,
		/**
		 * Boolean indicating use only the foldering privileged repositories.
		 */
		folderingEnabledOnly: false,
		/**
		 * View mode 1:Browse, 2:Search, 3:Work, 4:Manage Teamspaces
		 */
		viewMode: 0,

		postCreate: function() {
			this.inherited(arguments);

			this.textDir = has("text-direction");

			if (this.repositoryTypes != null && this.repositoryTypes.length > 0) {
				this.repositoryTypes = new ArrayList(this.repositoryTypes.split(","));
			}

			domClass.add(this.domNode, "ecmRepositorySelector");
			if (ecm.model.desktop.desktopLoaded) {
				this._createRendering();
			} else {
				this.connect(ecm.model.desktop, "onDesktopLoaded", "_createRendering");
			}
			this.connect(ecm.model.desktop, "onTeamspacesListChanged", lang.hitch(this, function() {
				if (this.teamspaceEnabledOnly && this._dropdown) {
					this._dropdown.destroy();
					this._dropdown = null;
				}
			}));
		},

		/**
		 * Return the menu.
		 * 
		 * @return Instance of {@link dijit.Menu}.
		 */
		getMenu: function() {
			if (!this._menu) {
				this._menu = this._createMenu();
			}
			return this._menu;
		},

		/**
		 * Return the dropdown.
		 * 
		 * @return Instance of {@link dijit.form.Select}.
		 */
		getDropdown: function(refresh) {
			if (!this._dropdown || refresh) {
				this._dropdown = this._createDropdown();
			}
			return this._dropdown;
		},

		/**
		 * Return the number of repositories.
		 * 
		 * @return Number of repositories.
		 */
		getNumRepositories: function() {
			return this.numRepositoies;
		},

		/**
		 * Returns the list of repositories available for the desktop. The list may be filtered based on filtering
		 * settings on this dijit.
		 * 
		 * @return Array of {@link ecm.model.Repository}.
		 */
		getRepositories: function() {
			var repositoriesList = [];
			var repositories = ecm.model.desktop.repositories;
			if (repositories) {
				var filteredRepositories = [];
				for (var i = 0; i < repositories.length; i++) {
					switch (this.viewMode) {
					case 1:
						if (repositories[i].showInBrowseView)
							filteredRepositories.push(repositories[i]);
						break;
					case 2:
						if (repositories[i].showInSearchView)
							filteredRepositories.push(repositories[i]);
						break;
					case 3:
						if (repositories[i].showInWorkView)
							filteredRepositories.push(repositories[i]);
						break;
					case 4:
						if (repositories[i].showInTeamspaceView)
							filteredRepositories.push(repositories[i]);
						break;
					default:
						filteredRepositories.push(repositories[i]);
					}
				}
				repositories = filteredRepositories;
			}

			if (repositories && this.teamspaceEnabledOnly) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (repository.teamspacesEnabled && repository.showInTeamspaceView)
						repositoriesList.push(repository);
				}
			} else if (repositories && this.workflowEnabledOnly) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (this.repositoryTypes != null) {
						if (this.repositoryTypes.contains(repository.type)) {
							this._checkWorkflowPrivilege(repository, repositoriesList);
						}
					} else {
						this._checkWorkflowPrivilege(repository, repositoriesList);
					}
				}
			} else if (repositories && this.entryTemplatesEnabledOnly) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (repository.entryTemplatesEnabled)
						repositoriesList.push(repository);
				}
			} else if (repositories && this.folderingEnabledOnly) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (this.repositoryTypes != null && this.repositoryTypes.contains(repository.type) && repository && repository.getPrivilege("foldering")) {
						repositoriesList.push(repository);
					} else if (repository && repository.getPrivilege("foldering")) {
						repositoriesList.push(repository);
					}
				}
			} else if (repositories) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (this.repositoryTypes != null) {
						if (this.repositoryTypes.contains(repository.type))
							repositoriesList.push(repository);
					} else {
						repositoriesList.push(repository);
					}
				}
			}
			this.numRepositoies = repositoriesList.length;
			return repositoriesList;
		},

		/**
		 * Checks the repository type and if P8 look at the workflow privilege to determine if repository should be
		 * added to the list.
		 */
		_checkWorkflowPrivilege: function(repository, repositoriesList) {
			if (repository.type == "p8") {
				if (repository.getPrivilege("workflow")) {
					repositoriesList.push(repository);
				}
			} else {
				repositoriesList.push(repository);
			}
		},

		/**
		 * Event called when a Repository is selected.
		 * 
		 * @param repositories
		 *            Array of {@link ecm.model.Repository}.
		 */
		onSelect: function(repositories) {
		},

		/**
		 * Sets the store.
		 * 
		 * @param param
		 *            The store to set on the DataGrid or Select.
		 */
		setStore: function(store) {
			try {
				if (this._dropdown) {
					this._dropdown.setStore(store);
				} else if (this._grid) {
					this._grid.setStore(store);
				}
			} catch (e) { // throws error on IE8 after setting store when trying to refresh, ignore
			}
		},

		/**
		 * @private Creates the dropdown, menu, or grid.
		 */
		_createRendering: function() {
			if (this.type == "dropdown") {
				this._createDropdown();
			} else if (this.type == "menu") {
				this._createMenu();
			} else if (this.type == "grid") {
				if (this.structure != null && this.store != null)
					this._createGrid();
			} else {
				this._createDropdown();
			}
		},

		/**
		 * @private Creates the menu.
		 */
		_createMenu: function() {
			this._deletePrevious();

			var _this = this;
			this._menu = new Menu({
				templateString: '<div class="ecmScrollMenu"><table class="dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable" role="menu" tabIndex="${tabIndex}" dojoAttachEvent="onkeypress:_onKeyPress" cellspacing="0"><tbody class="dijitReset" dojoAttachPoint="containerNode"></tbody></table></div>'
			});
			var repositories = this.getRepositories();
			for (var i = 0; i < repositories.length; i++) {
				var repository = repositories[i];
				var mi = new MenuItem({
					label: repository.name,
					value: repository.id
				});
				this.connect(mi, "onClick", function(evt) {
					var menuItem = registry.getEnclosingWidget(evt.target);
					if (menuItem) {
						_this.onSelect([
							this._getRepository(menuItem.value)
						]);
					}
				});
				this._menu.addChild(mi);
			}
		},

		/**
		 * @private Creates the dropdown.
		 */
		_createDropdown: function() {
			this._deletePrevious();

			var selectOptions = [];
			var repositories = this.getRepositories();
			for (var i = 0; i < repositories.length; i++) {
				var repository = repositories[i];
				var selectOption = {
					value: repository.id,
					label: repository.name
				};
				if (this.defaultSelectedId && repository.id == this.defaultSelectedId) {
					selectOption.selected = true;
				}
				selectOptions.push(selectOption);
			}

			this._dropdown = new Select({
				"aria-label": ecm.messages.repository_selector_label,
				options: selectOptions,
				textDir: this.textDir
			});
			domClass.add(this._dropdown.dropDown.domNode, "ecmScrollMenu");

			this.connect(this._dropdown, "onChange", function() {
				var value = this._dropdown.get('value');
				this.onSelect([
					this._getRepository(value)
				]);
			});

			if (this.label) {
				var label = domConstruct.create("label", {
					'for': this._dropdown.id,
					innerHTML: idxHtml.escapeHTML(this.label)
				});
				this.domNode.appendChild(label);
			}
			this.domNode.appendChild(this._dropdown.domNode);
		},

		/**
		 * @private Creates the DataGrid.
		 */
		_createGrid: function() {
			this._deletePrevious();

			this._grid = new DataGrid({
				style: this.style,
				structure: this.structure,
				store: this.store,
				escapeHTMLInData: false
			});

			this.connect(this._grid.selection, "onChanged", function() {
				var selectedRepos = this._grid.selection.getSelected();
				this.onSelect(selectedRepos);
			});

			this.connect(this._grid, "onRowDblClick", function() {
				var selectedRepos = this._grid.selection.getSelected();
				this.onDoubleClick(selectedRepos);
			});

			domConstruct.place(this._grid.domNode, this.domNode, "only");
			this._grid.startup();
		},

		/**
		 * Filters the grid by the input data.
		 * 
		 * @param filterObj
		 *            The filter criteria for the DataGrid.
		 */
		filterGrid: function(filterObj) {
			if (this._grid != null) {
				this._grid.queryOptions = {
					ignoreCase: true
				};
				this._grid.filter(filterObj);
			}
		},

		/**
		 * Set the selected data on the grid or dropdown.
		 */
		setSelected: function(slot) {
			if (this._grid) {
				this._grid.selection.setSelected(slot);
			}
			if (this._dropdown) {
				this._dropdown.set("value", this._dropdown.options[slot].value);
			}
		},

		/**
		 * Resize the widget.
		 */
		resize: function(changeSize) {
			if (this._grid) {
				var domNodeMarginBox = domGeom.getMarginBox(this.domNode);
				this._grid.resize({
					h: domNodeMarginBox.h,
					w: domNodeMarginBox.w
				});
			}
		},

		/**
		 * @private Returns the repository with the input id.
		 */
		_getRepository: function(repositoryId) {
			var repositories = this.getRepositories();
			if (repositories) {
				for ( var i in repositories) {
					var repository = repositories[i];
					if (repository.id == repositoryId) {
						return repository;
					}
				}
			}
			return null;
		},

		/**
		 * @private Cleans up the previous data.
		 */
		_deletePrevious: function() {
			if (this._dropdown) {
				this._dropdown.destroy();
				delete this._dropdown;
			}
			if (this._menu) {
				this._menu.destroy();
				delete this._menu;
			}
			if (this._grid) {
				if (this._grid.domNode) {
					this._grid.destroyRecursive();
				}
				delete this._grid;
			}
		}
	});
});

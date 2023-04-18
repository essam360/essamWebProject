/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/aspect",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"gridx/modules/Filter",
	"./_LaunchBarPane",
	"./_ManageTeamspaceMixin",
	"../teamspace/TeamspaceTabContainer",
	"./TeamspacePane",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/gridModules/FilterBar",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/FilterData",
	"ecm/widget/listView/modules/ViewDetail",
	"ecm/widget/listView/modules/ViewMagazine",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/listView/modules/InlineMessage",
	"ecm/widget/listView/modules/RepositorySelector",
	"ecm/model/Desktop",
	"ecm/model/ResultSet",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/ManageTeamspacesPane.html"
],

function(declare, //
array, //
lang, //
string, //
domStyle, //
domAttr, //
domGeometry, //
domClass, //
domConstruct, //
aspect, //
BorderContainer, //
ContentPane, //
Filter, //
_LaunchBarPane, //
_ManageTeamspaceMixin, //
TeamspaceTabContainer, //
TeamspacePane, //
ContentList, //
RowContextMenu, //
FilterBar, //
Bar, //
FilterData, //
ViewDetail, //
ViewMagazine, //
Toolbar, //
InlineMessage, //
RepositorySelectorModule, //
Desktop, //
ResultSet, //
MessageDialog, //
template) {

	/**
	 * @name ecm.widget.layout.ManageTeamspacesPane
	 * @class Provides a widget that displays a list of all teamspaces and teamspace templates that a user can access.
	 *        From the list, a user with appropriate authority can open, edit, and delete teamspaces and teamspace
	 *        templates. A user with the appropriate authority can also open the builder to create new templates and
	 *        teamspaces from this widget.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._ManageTeamspaceMixin
	 */
	return declare("ecm.widget.layout.ManageTeamspacesPane", [
		_LaunchBarPane,
		_ManageTeamspaceMixin
	], {
		/** @lends ecm.widget.layout.ManageTeamspacesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * @private
		 */
		_teamspaces_label: "",

		/**
		 * @private
		 */
		_templates_label: "",

		/**
		 * @private
		 */
		_searchingServer: false,

		/**
		 * @private
		 */
		_teamspaceSortResultSet: null,

		/**
		 * @private
		 */
		_templateSortResultSet: null,

		/**
		 * @private
		 */
		_settingResultSet: false,

		/**
		 * Renders the widget.
		 */
		buildRendering: function() {
			this._teamspaces_label = ecm.model.desktop.getConfiguredLabelsvalue("workspaces");
			this._templates_label = ecm.model.desktop.getConfiguredLabelsvalue("templates");
			this.inherited(arguments);
		},

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._tabContainer.startup();

			this._createContentLists();

			this.defaultLayoutRepositoryComponent = "teamspaces";
			this.connectDesktopListeners();
			//this.createRepositorySelector();
			//this.connectRepositorySelector();

			domClass.add(this._tabContainer.domNode, "teamspacesTab");
			this.connect(this, "onRepositoryChange", function() {
				// Select the teamspaces tab if the repository selector is in the launch bar and the current tab is a teamspace instance
				if (this._repositorySelectorInLaunchBar
						&& this._tabContainer.selectedChildWidget !=  this._templateTab
						&& this._tabContainer.selectedChildWidget !=  this._teamspaceTab) {
					this._tabContainer.selectChild(this._teamspaceTab);
				} else {
					this.focus();
				}
			});

			domClass.add(this._templateTab.controlButton.domNode, "templatesTab");
			domClass.add(this._teamspaceTab.controlButton.domNode, "teamspacesTab");

			// lazy load templates or teamspaces pane
			this._tabContainer.watch("selectedChildWidget", lang.hitch(this, function(name, pPane, tPane) {
				if (this.init == undefined || this.init == false) {
					if (tPane.tabType == "templatesList") {
						this.type = "template";
						if (this._templatesLoaded == undefined || this._templatesLoaded == false || !this._currentRepoMatchesResultSetRepo(this.templateContents)) {
							this._setRepositorySelector(this.repository, "template");
							this._setupTemplates();
							this._templatesLoaded = true;
						}
					} else if (tPane.tabType == "teamspacesList") {
						this.type = "teamspace";
						if (this._teamspacesLoaded == undefined || this._teamspacesLoaded == false || !this._currentRepoMatchesResultSetRepo(this.teamspaceContents)) {
							this._setRepositorySelector(this.repository, "instance");
							this._setupTeamspaces();
							this._teamspacesLoaded = true;
						}
					}
				}
			}));
			this.logExit("postCreate");
		},

		_currentRepoMatchesResultSetRepo: function(cl) {
			var resultSet = cl != null ? cl.getResultSet() : null;
			if (resultSet && this.repository) {
				if (resultSet.repository == this.repository) {
					return true;
				} else {
					return false;
				}

			}
			return false;
		},
		/**
		 * Opens a tab.
		 * 
		 * @param kwArgs
		 *            A tab to be opened
		 */
		openTab: function(kwArgs) {
			this._tabContainer.openTab(kwArgs);
		},

		/**
		 * Closes the specified tab.
		 * 
		 * @param kwArgs
		 *            A tab to be closed
		 * @param noConfirmDialog
		 *            A boolean flag to close a tab without confirmation
		 */
		closeTab: function(kwArgs, noConfirmDialog) {
			this._tabContainer.closeTab(kwArgs, noConfirmDialog);
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._cleanUpActions();
		},

		/**
		 * @private
		 */
		_createContentLists: function() {
			this.templateContents.setGridExtensionModules(this._getContentListGridModules());
			this.templateContents.setContentListModules(this._getContentListModules());
			domAttr.set(this.templateContents.domNode, "role", "region");
			domAttr.set(this.templateContents.domNode, "aria-label", ecm.messages.templates_content_list_label);

			this.teamspaceContents.setGridExtensionModules(this._getContentListGridModules());
			this.teamspaceContents.setContentListModules(this._getContentListModules());
			domAttr.set(this.teamspaceContents.domNode, "role", "region");
			domAttr.set(this.teamspaceContents.domNode, "aria-label", ecm.messages.teamspaces_content_list_label);

			this.connect(this.templateContents, "onOpenItem", lang.hitch(this, function(item, data) {
				this.onOpenItem(item, data, this);
			}));
			this.connect(this.teamspaceContents, "onOpenItem", "onOpenItem");
			aspect.after(this.teamspaceContents, "onContentListModulesLoaded", lang.hitch(this, function() {
				if (!this._contentTeamspaceListModulesLoaded) {
					this._setRepositorySelector(this.repository, "instance");
					//this.setRepository(this.repository);
					var repositorySelector = this.getContentsListView(this.type).getContentListModule("repositorySelector");
					if (repositorySelector) {
						this.own(aspect.after(repositorySelector, "onSelect", lang.hitch(this, "connectRepositories"), true));
					}
					this._contentTeamspaceListModulesLoaded = true;
				}
			}));
			aspect.after(this.teamspaceContents, "setResultSet", lang.hitch(this, function() {
				this._setFilterBarConnections("teamspace");
				var teamspaceResultSet = this.teamspaceContents.getResultSet();
				var newFilterBar = this.teamspaceContents.getGridModule("filterBar");

				var recentNumber = 0;
				var recentMessage = "";

				if (teamspaceResultSet && teamspaceResultSet.displayingRecent && this.repository._isP8()) {
					recentNumber = teamspaceResultSet.displayingRecent;
					recentMessage = string.substitute(ecm.messages.displaying_recent_results, [
						recentNumber
					]);
				}
				if (teamspaceResultSet && teamspaceResultSet.displayingRecent && this.repository._isP8())
					this._displayFilteredResultsMessage(this.teamspaceContents, newFilterBar, recentMessage, false);
				this.connect(teamspaceResultSet, "onChange", lang.hitch(this, function() {
					this._setFilterBarConnections("teamspace");
					if (teamspaceResultSet.displayingRecent && this.repository._isP8()) {
						this._displayFilteredResultsMessage(this.teamspaceContents, newFilterBar, recentMessage, false);
					} else {

						this._hideInlineMessage("teamspace");
					}
				}));

				if (teamspaceResultSet) {
					this.connect(teamspaceResultSet, "refresh", lang.hitch(this, function() {
						this._clearFilterText("teamspace");
					}));

					this.connect(teamspaceResultSet, "onServerTeamspaceSort", lang.hitch(this, function(resultSet) {
						this._setTeamspaceSortResultSet(resultSet);
					}));
				}
			}));
			aspect.after(this.templateContents, "onContentListModulesLoaded", lang.hitch(this, function() {
				if (!this._contentTemplateListModulesLoaded) {
					this._setRepositorySelector(this.repository, "template");
					//this.setRepository(this.repository);
					var repositorySelector = this.getContentsListView(this.type).getContentListModule("repositorySelector");
					if (repositorySelector) {
						this.own(aspect.after(repositorySelector, "onSelect", lang.hitch(this, "connectRepositories"), true));
					}
					this._contentTemplateListModulesLoaded = true;
				}
			}));
			aspect.after(this.templateContents, "setResultSet", lang.hitch(this, function() {
				this._setFilterBarConnections("template");
				var templateResultSet = this.templateContents.getResultSet();
				this.connect(templateResultSet, "onChange", lang.hitch(this, function() {
					this._setFilterBarConnections("template");
					this._hideInlineMessage("template");
				}));

				if (templateResultSet) {
					this.connect(templateResultSet, "refresh", lang.hitch(this, function() {
						this._clearFilterText("template");
					}));

					this.connect(templateResultSet, "onServerTemplateSort", lang.hitch(this, function(resultSet) {
						this._setTeamspaceSortResultSet(resultSet);
					}));
				}
			}));
			this.getContentsListView("instance").setResultSet(null);

		},
		/**
		 * @private Sets the repository selector.
		 */
		_setRepositorySelector: function(repository, type) {
			type = type != null ? type : this.type;
			var rs = this.getContentsListView(type).getContentListModule("repositorySelector");
			if (rs) {
				if (repository)
					rs.setRepositoryId(repository.id);
				
				if (!this.repositorySelector)
					this.repositorySelector = rs;
				
				// Hide the selector if its counterpart (teamspace or template) has been moved to the launch bar
				if (this._repositorySelectorInLaunchBar) {
					if (rs.domNode.parentNode && domClass.contains(rs.domNode.parentNode, "BarRepositorySelector"))
						domClass.add(rs.domNode.parentNode, "dijitHidden");
				}
			}
		},
		/**
		 * @private
		 */
		_setTeamspaceSortResultSet: function(resultSet) {
			this._teamspaceSortResultSet = resultSet;
			this.connect(resultSet, "onServerTeamspaceSort", lang.hitch(this, function(resultSet) {
				this._setTeamspaceSortResultSet(resultSet);
			}));
		},

		/**
		 * @private
		 */
		_setTemplateSortResultSet: function(resultSet) {
			this._templateSortResultSet = resultSet;
			this.connect(resultSet, "onServerTemplateSort", lang.hitch(this, function(resultSet) {
				this._setTemplateSortResultSet(resultSet);
			}));
		},

		/**
		 * @private
		 */
		_setFilterBarConnections: function(type) {
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			var filterBar = listView.getGridModule("filterBar");

			var filterData = listView.getContentListModule("filterData");
			aspect.before(filterData, "_onInput", lang.hitch(this, function(evt) {
				if (evt.keyCode == 13) {
					var filterValue = filterData._filterTextBox.get("value");
					if (filterValue != "") {
						filterBar.applyFilter({
							conditions: [
								{
									condition: "contain",
									value: filterValue
								}
							]
						});
					}
					this._searchAllTeamspaces(type);

				}

			}));
			if (filterBar) {
				aspect.before(filterBar, "applyFilter", lang.hitch(this, function() {
					this._onFilter(type);
				}));

				aspect.around(filterBar, "clearFilter", lang.hitch(this, function(originalMethod) {
					return lang.hitch(this, function(noConfirm) {
						this._onClearFilter(type, originalMethod, filterBar, noConfirm);
					});
				}));

				var filterData = listView.getContentListModule("filterData");
				aspect.around(filterData, "clearFilter", lang.hitch(this, function(originalMethod) {
					return lang.hitch(this, function() {
						this._onClearFilter(type, originalMethod, filterData, true);
					});
				}));

				this.connect(filterBar, "showFilterDialog", lang.hitch(this, function() {
					this._onShowFilterDialog(type);
				}));

				var filter = listView.getGridModule("filter");
				var modClass = filter.moduleClass;
				aspect.around(modClass, "contain", lang.hitch(this, function(originalMethod) {
					return lang.hitch(this, function() {
						var newArguments = this._getFilterArguments(arguments);
						return (originalMethod.apply(modClass, newArguments));
					});
				}));

				aspect.around(modClass, "startWith", lang.hitch(this, function(originalMethod) {
					return lang.hitch(this, function() {
						var newArguments = this._getFilterArguments(arguments);
						return (originalMethod.apply(modClass, newArguments));
					});
				}));

				aspect.around(modClass, "endWith", lang.hitch(this, function(originalMethod) {
					return lang.hitch(this, function() {
						var newArguments = this._getFilterArguments(arguments);
						return (originalMethod.apply(modClass, newArguments));
					});
				}));
			}
		},

		/**
		 * @private
		 */
		_getFilterArguments: function(originalArguments) {
			var newArguments = new Array();
			newArguments.push(originalArguments[0]);
			newArguments.push(originalArguments[1]);

			// Make filtering case sensitive for CM8 to be consistent with filtering done 
			// using queries on server.
			if (this.repository && this.repository._isCM()) {
				newArguments.push(true);
			}
			return newArguments;
		},

		// This filter dialog sometimes fire sort events when it is being edited. Disable
		// sorting when the dialog is open.
		_onShowFilterDialog: function(type) {
			var resultSet = this._getSortResultSet(type);
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			var filterBar = listView.getGridModule("filterBar");
			resultSet._disableSort = this.connect(filterBar._filterDialog, "hide", lang.hitch(this, function() {
				this._onHideFilterDialog(type);
			}));
		},

		_onHideFilterDialog: function(type) {
			var resultSet = this._getSortResultSet(type);
			if (resultSet._disableSort != null) {
				dojo.disconnect(resultSet._disableSort);
				resultSet._disableSort = null;
			}
		},

		_getSortResultSet: function(type) {
			if (type == "teamspace") {
				if (this._teamspaceSortResultSet != null) {
					return this._teamspaceSortResultSet;
				} else {
					return this.teamspaceContents.getResultSet();
				}
			} else {
				if (this._templateSortResultSet != null) {
					return this._templateSortResultSet;
				} else {
					return this.templateContents.getResultSet();
				}
			}
		},

		_onClearFilter: function(type, originalMethod, parentObject, noConfirm) {
			var args = [];
			args.push(noConfirm);
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;

			// If there are multiple rules, call the original method so the confirmation dialog will be displayed.
			var displayConfirmationDialog = false;
			if (!noConfirm) {
				if (parentObject.ruleCountToConfirmClearFilter) {
					var confirmThreshold = parentObject.ruleCountToConfirmClearFilter;
					if (parentObject.filterData && parentObject.filterData.conditions && parentObject.filterData.conditions.length >= confirmThreshold || confirmThreshold <= 0) {
						displayConfirmationDialog = true;
					}
				}
			}

			if (displayConfirmationDialog) {
				// This should display the confirmation dialog.
				originalMethod.apply(parentObject, args);
			} else if (this._searchingServer == false && this._settingResultSet == false) {
				var resultSet = this._getSortResultSet(type);
				resultSet.criteria = null;
				// If there is more data on the server, refresh the result set.
				if ((resultSet.displayingRecent && this.repository._isP8()) || (resultSet._filteredResultSet && resultSet._filteredResultSet == true) || (resultSet._moreTeamspaceData && resultSet._moreTeamspaceData == true)) {
					// If the result set is filtered, get a fresh result set from server.
					// Get sort criteria.
					var columnName = resultSet.getColumns()[resultSet.sortIndex];
					var descending = resultSet.sortDirection == 1 ? false : true;
					if (type == "template") {
						this.repository.retrieveTeamspaceTemplateFolderResultSet(lang.hitch(this, function(resultSet) {
							this._setClearFilterResultSet(listView, resultSet);
						}), columnName, descending);
					} else {
						this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(resultSet) {
							this._setClearFilterResultSet(listView, resultSet);
						}), true, columnName, descending, null, true);
					}
				} else {
					// This should clear the filter.
					originalMethod.apply(parentObject, args);
				}
				this._hideInlineMessage(type);
			}
		},

		/**
		 * @private
		 */
		_setClearFilterResultSet: function(listView, resultSet) {
			resultSet.container = this;
			this._settingResultSet = true;
			listView.setResultSet(resultSet);
			this._settingResultSet = false;
		},

		/**
		 * @private
		 */
		_onFilter: function(type) {
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			var resultSet = this._getSortResultSet(type);
			if ((resultSet.displayingRecent && this.repository._isP8()) || (resultSet.continuationData != null && this._searchingServer == false) || (resultSet._filteredResultSet && resultSet._filteredResultSet == true) || (resultSet._moreTeamspaceData && resultSet._moreTeamspaceData == true)) {

				// Remove continuation data from the result set to prevent paging.
				resultSet.continuationData = null;
				resultSet._moreTeamspaceData = true;

				var inlineMessageModule = listView.getContentListModule("inlineMessage");
				setTimeout(lang.hitch(this, function() {
					var message = "";
					var filterBar = listView.getGridModule("filterBar");
					var display = filterBar.domNode.style.display;
					if (display == "none") {
						var count = filterBar.model.size();
						message = string.substitute(ecm.messages.teamspace_filter_results, [
							count
						]);
					}
					var messageNode = domConstruct.create("span");
					domConstruct.place(document.createTextNode(message + ecm.messages.more_results_on_server + " "), messageNode, "only");
					var href = domConstruct.create("a", {
						href: '#',
						style: {
							"text-decoration": "underline"
						}
					});

					domConstruct.place(document.createTextNode(ecm.messages.search_all_teamspaces), href);
					domConstruct.place(href, messageNode);
					href.onkeypress = lang.hitch(this, function(evt) {
						if (evt.keyCode == 13) {
							this._searchAllTeamspaces(type);
						}
					});
					href.onclick = lang.hitch(this, function(evt) {
						this._searchAllTeamspaces(type);
					});
					inlineMessageModule.setMessage(messageNode, "info");
				}, 1000));
			}
		},

		/**
		 * @private
		 */
		_searchAllTeamspaces: function(type) {
			this._hideInlineMessage(type);

			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			var filterData = listView.getContentListModule("filterData");
			var filterText = filterData._filterTextBox.get("value");
			var resultSet = this._getSortResultSet(type);

			// Build the conditions to send to the server.
			var filterBar = listView.getGridModule("filterBar");
			filterBar.hide();
			var conditions = dojo.clone(filterBar.filterData);

			var conditionType = "any";
			if (filterBar.filterData["type"]) {
				conditionType = filterBar.filterData.type;
			}

			var criteria = {};
			criteria.type = conditionType;
			criteria.conditions = [];
			for ( var index = 0; index < filterBar.filterData.conditions.length; index++) {
				var filterCondition = filterBar.filterData.conditions[index];
				var condition = {};
				if (filterCondition.colId && filterCondition.colId > 0) {
					condition.name = resultSet.getColumns()[filterCondition.colId - 1];
				} else {
					condition.name = "all";
				}

				if (filterCondition.condition) {
					condition.condition = filterCondition.condition;
				} else {
					condition.condition = "contain";
				}

				condition.value = filterCondition.value;
				criteria.conditions.push(condition);
			}

			this._searchingServer = true;
			if (type == "template") {
				this.repository.retrieveTeamspaceTemplateFolderResultSet(lang.hitch(this, function(resultSet) {
					this._setFilterResultSet(resultSet, this.templateContents, filterData, filterText, criteria);
				}), null, null, criteria);
			} else {
				this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(resultSet) {
					this._setFilterResultSet(resultSet, this.teamspaceContents, filterData, filterText, criteria);
				}), true, null, null, criteria, true);
			}
		},

		/**
		 * @private
		 */
		_clearFilterText: function(type) {
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			var filterData = listView.getContentListModule("filterData");
			filterData._filterTextBox.set("value", "");
		},
		/**
		 * @private
		 */
		_setFilterResultSet: function(resultSet, listView, filterData, filterText, criteria) {
			resultSet.container = this;
			resultSet._filteredResultSet = true;
			resultSet.criteria = criteria;
			listView.setResultSet(resultSet);
			filterData._filterTextBox.set("value", filterText);
			var newFilterBar = listView.getGridModule("filterBar");
			setTimeout(lang.hitch(this, function() {
				this._displayFilteredResultsMessage(listView, newFilterBar);
				this._searchingServer = false;
				newFilterBar.filterData = criteria.conditions;
			}, 1000));
		},

		/**
		 * @private
		 */
		_displayFilteredResultsMessage: function(listView, filterBar, message, showClearFilter) {

			if (!message) {
				message = ecm.messages.displaying_filtered_results;
				showClearFilter = true;
			}
			var messageNode = domConstruct.create("span");
			domConstruct.place(document.createTextNode(message), messageNode, "only");
			if (showClearFilter) {
				var href = domConstruct.create("a", {
					href: '#'
				});
				domConstruct.place(document.createTextNode(ecm.messages.clear_filter), href);
				domConstruct.place(href, messageNode);
				href.onkeypress = lang.hitch(this, function(evt) {
					if (evt.keyCode == 13) {
						filterBar.clearFilter();
					}
				});
				href.onclick = lang.hitch(this, function(evt) {
					filterBar.clearFilter();
				});
			}
			var inlineMessageModule = listView.getContentListModule("inlineMessage");
			inlineMessageModule.setMessage(messageNode, "info");
		},

		/**
		 * @private
		 */
		_hideInlineMessage: function(type) {
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			var inlineMessageModule = listView.getContentListModule("inlineMessage");
			inlineMessageModule.clearMessage();
		},

		_cleanUpActions: function() {
			if (this.teamspaceContents._myButtons) {
				array.forEach(this.teamspaceContents._myButtons, function(button, index) {
					button.destroy();
				});
			}
			if (this.templateContents._myButtons) {
				array.forEach(this.templateContents._myButtons, function(button, index) {
					button.destroy();
				});
			}
		},

		/**
		 * Adds actions to the toolbar at the top of the contentList.
		 */
		setActions: function(actions, contentList) {
			// Add the actions as buttons
			var buttons = [];
			//var selectedItems = contentList.getSelectedItems();
			//array.forEach(actions, lang.hitch(this, function(action) {
			//	if (action.isVisible(this.repository, selectedItems)) {
			//		var button = this._createActionButton(action, contentList);
			//		buttons.push(button);
			//		domConstruct.place(button.domNode, contentList.buttonArea, "last");
			//		button.startup();
			//	}
			//}));
			//contentList._myButtons = buttons;
		},

		/**
		 * Get the content list grid modules.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			array.push(Filter);
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
			});
			return array;
		},

		/**
		 * Get the content list modules.
		 */
		_getContentListModules: function() {
			var viewModules = [];
			/*
			if (this.feature && this.feature.configurations && this.feature.configurations.showViews && this.feature.configurations.showViews.length > 0) {
				for ( var i = 0; i < this.feature.configurations.showViews.length; i++) {
					var viewId = this.feature.configurations.showViews[i];
					if (viewId == "detail") {
						viewModules.push(ViewDetail);
					} else if (viewId == "magazine") {
						viewModules.push(ViewMagazine);
					}
				}
			} */
			if (viewModules.length == 0) {
				viewModules.push(ViewMagazine);
				viewModules.push(ViewDetail);
			}

			var array = [];
			array.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: RepositorySelectorModule,
								"className": "BarRepositorySelector",
								validateRepository: lang.hitch(this, function(repository) {
									return (repository && repository.teamspacesEnabled && repository.showInTeamspaceView);
								})
							},
							{
								moduleClass: Toolbar
							},
							{
								moduleClass: FilterData,
								"className": "BarFilterData"
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
								moduleClass: InlineMessage
							}
						]
					]
				]
			});
			return array;
		},

		/**
		 * Adds focus to the pane.
		 */
		focus: function() {
			var repositorySelector = this.getContentsListView(this.type).getContentListModule("repositorySelector");
			if (repositorySelector) {
				repositorySelector.focus();
			}
		},
		/**
		 * Get contents list view.
		 */
		getContentsListView: function(type) {
			var listView = (type == "template") ? this.templateContents : this.teamspaceContents;
			return listView;
		},
		/**
		 * @private
		 */
		_isFlyout: function() {
			return false;
		},
		/**
		 * Loads the content of the pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");
			this.focus(); // focus 1st before calling setPaneDefaultLayoutRepository so that if it causes the logon dialog to show, the focus will go back to flyout when done logging on
			if (!this.repository) {
				this.init = true;
				this._tabContainer._selectTab("teamspacesList");
				this.type = "teamspace";
				this.init = false;
				this.setPaneDefaultLayoutRepository();

			} else if (!this.isLoaded && this.repository && this.repository.connected) {
				this.setRepository(this.repository);
				this.isLoaded = true;
				this.needReset = false;
			}
			this.logExit("loadContent");
		},

		/**
		 * Method called by parent container to pass additional parameters to this pane.
		 * 
		 * @param params
		 *            Contains a handle to the teamspace object to use when displaying this pane.
		 */
		setParams: function(params) {

			if (params && params.openNewTab) {
				if (!this.isLoaded) {
					this.loadContent();
				}
				if (params.tabType == "teamspace") {
					if (params["teamspace"] && params.teamspace.type == "instance" && params.teamspace.state == "offline" && !params.teamspace["currentUserIsOwner"] == true) {
						var msg = this.messages.offlineTeamspace_open_msg;
						var dialog = new MessageDialog({
							text: msg
						});
						dialog.show();
					} else
						this._openTeamspaceTab(params);
				}
			}
		},

		/**
		 * @private
		 */
		_openTeamspaceTab: function(params) {
			//var tp = new TeamspacePane({
			//	title: params.teamspace.name,
			//});

			//this._tabContainer.addChild(tp);
			this._tabContainer.openTab(params);
			//tp.setParams(params);

		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {

			this.logEntry("reset");
			this.setRepository(this.repository);
			this.needReset = false;
			this.isLoaded = false;
			this._contentTeamspaceListModulesLoaded = false;
			this._contentTemplateListModulesLoaded = false;
			this.logExit("reset");
		},
		
		addFeatureContextSelector: function(domNode) {
			var rs = this.getContentsListView(this.type).getContentListModule("repositorySelector");
			if (rs && !domClass.contains(rs.domNode, "dijitHidden")) {
				if (rs.domNode.parentNode && domClass.contains(rs.domNode.parentNode, "BarRepositorySelector"))
					domClass.add(rs.domNode.parentNode, "dijitHidden");
				domConstruct.place(rs.domNode, domNode, "last");
				this._repositorySelectorInLaunchBar = true;
			}
		}
	});
});

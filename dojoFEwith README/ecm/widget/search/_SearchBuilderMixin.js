/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/focus",
	"ecm/MessagesMixin",
	"ecm/model/Desktop",
	"ecm/model/SearchTemplate",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/widget/dialog/LoginDialog",
	"ecm/widget/listView/gridModules/SingleSort",
	"ecm/widget/listView/gridModules/DndRowCopy",
	"ecm/widget/listView/gridModules/DndFromDesktopAddDoc",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/search/_SearchPaneContainer"
], function(aspect, domClass, domGeometry, array, connect, declare, lang, focus, MessagesMixin, Desktop, SearchTemplate, UnifiedSearchTemplate, LoginDialog, SingleSort, DndRowCopy, DndFromDesktopAddDoc, RowContextMenu, _SearchPaneContainer) {

	/**
	 * @name ecm.widget.search._SearchBuilderMixin
	 * @class Mixin for search builder widgets, for example, {@link ecm.widget.search.SearchBuilder} and
	 *        {@link ecm.widget.search.UnifiedSearchBuilder}.
	 * @augments dijit._MessagesMixin
	 * @since 2.0.2
	 */
	return declare("ecm.widget.search._SearchBuilderMixin", [
		MessagesMixin,
		_SearchPaneContainer
	], {
		/** @lends ecm.widget.search._SearchBuilderMixin.prototype */

		repository: null,

		teamspace: null,

		searchTemplate: null,

		_searchTemplateClass: SearchTemplate,

		_newSearchName: ecm.messages.new_search,

		/**
		 * The ID of the search feature that hosts this search builder.
		 * 
		 * @since 2.0.3
		 */
		searchFeatureId: "searchPane",

		/**
		 * Locks the search for editing or constructs one if not provided, and adds it to the list of opened searches.
		 * Unlocks the search and removes it from the list of opened searches when the builder is closed.
		 */
		postCreate: function() {
			this.inherited(arguments);

			this.searchResults.parentPane = this.parentPane;

			if (this.repository) {
				if (!this.searchTemplate) {
					this.searchTemplate = new this._searchTemplateClass({
						id: this.uid,
						name: this._newSearchName,
						repository: this.repository,
						description: ""
					});
				} else {
					this.searchTemplate = this.searchTemplate.clone();
					if (!this.searchTemplate.isNew() && this.searchTemplate.isInstanceOf && this.searchTemplate.isInstanceOf(UnifiedSearchTemplate)) {
						this._loginDialogOnCancelHandle = connect.subscribe("ecm.widget.dialog.LoginDialog.onCancel", lang.hitch(this, function(message) {
							connect.unsubscribe(this._loginDialogOnCancelHandle);
							this._loginDialogOnCancelHandle = null;
							this.tabContainer.closeTab(this);
						}));
						this.own(aspect.after(this.searchTemplate, "_onRequestRepositoryConnection", function(repository, request, onConnect) {
							var dialog = LoginDialog.getLoginDialog();
							dialog.setRepository(repository);
							dialog.show(false, request, onConnect);
						}, true));
					}
				}

				this.searchTemplate.UUID = this.uid;
				this.searchDefinition.searchTemplate = this.searchTemplate;
				if (this.searchTemplate.isNew()) {
					(this.teamspace || this.repository).addOpenedSearch(this.searchTemplate);
					this.setRepository(this.repository, this.teamspace);
				} else {
					// Lock the search for editing, and then retrieve the latest criteria
					this.repository.lockItems([
						this.searchTemplate
					], lang.hitch(this, function() {
						this.searchTemplate.retrieveSearchCriteria(lang.hitch(this, function() {
							if (this._loginDialogOnCancelHandle) {
								connect.unsubscribe(this._loginDialogOnCancelHandle);
								this._loginDialogOnCancelHandle = null;
							}
							(this.teamspace || this.repository).addOpenedSearch(this.searchTemplate);
							this.setRepository(this.repository, this.teamspace);
						}), "edit", this.teamspace ? this.teamspace.id : null, true, true);
					}), "released");
				}
			}

			this.connect(this, "onClose", function() {
				// Unlock the search and remove it from the list of opened searches
				var searchTemplate = this.getSearchTemplate();
				if (searchTemplate.locked && searchTemplate.repository.connected)
					this.searchTemplate.repository.unlockItems([
						searchTemplate
					]);
				if (this.teamspace)
					this.teamspace.removeOpenedSearch(searchTemplate);
				else
					this.repository.removeOpenedSearch(searchTemplate);
			});
			this.connect(this.searchDefinition, "onCancel", function() {
				this.tabContainer.closeTab(this);
			});
			this.connect(this.searchDefinition, "onChange", function() {
				this._setToolbarButtonDisabledState("RefreshGrid", true);
			});
			this.connect(this.searchDefinition, "onKeyDown", function() {
				this._setToolbarButtonDisabledState("RefreshGrid", true);
			});
			this.connect(this.searchDefinition, "onSearchStarted", function(keepSearchCriteriaExpanded) {
				this.searchResults.setResultSet(null);
				if (!keepSearchCriteriaExpanded)
					this._toggleSearchCriteria();
				if (domClass.contains(this.searchResultsContainer.domNode, "dijitHidden"))
					this._toggleSearchResults();
			});
			this.connect(this.searchDefinition, "onSearchCompleted", function(results) {
				if (results && results.searchTemplate && !results.searchTemplate.name) {
					// Set the name of the search to be used in the bread crumb
					results.searchTemplate.name = ecm.messages.new_search;
				}
				this.searchResults.setResultSet(results);
				this._setToolbarButtonDisabledState("RefreshGrid", false);
			});
			this.connect(this.searchDefinition, "onReset", lang.hitch(this, function() {
				this._setToolbarButtonDisabledState("RefreshGrid", true);
			}));
		},

		/**
		 * Sets and propagates the repository and teamspace of the search being built.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object
		 */
		setRepository: function(repository, teamspace) {
			this.repository = repository;
			this.teamspace = teamspace;
			this.searchDefinition.setRepository(this.repository, this.teamspace);
			this.searchResults.setGridExtensionModules(this.getContentListGridModules());
			this.searchResults.setContentListModules(this.getContentListModules());
			this.connect(this.searchResults, "onModulesLoaded", lang.hitch(this, function() {
				var feature = Desktop.getFeatureById(this.searchFeatureId);
				var config = feature ? feature.configurations : null;
				if (config && config.documentInfoPaneDefaultOpen) {
					var docInfoModule = this.searchResults.getContentListModule("rightPane");
					if (docInfoModule) {
						docInfoModule.setPaneWidth();
						this.searchResults.gridContainer.restore("trailing");
						this.searchResults.gridContainer.onPanelOpen();
					}
				}
			}));
		},

		/**
		 * Sets and propagates the teamspace of the search being built.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object
		 */
		setTeamspace: function(teamspace) {
			this.teamspace = teamspace;
			this.searchDefinition.setTeamspace(this.teamspace);
		},

		/**
		 * Returns the search being built.
		 */
		getSearchTemplate: function() {
			return this.searchTemplate;
		},

		_setToolbarButtonDisabledState: function(actionId, disabled) {
			var toolbar = this.searchResults.getContentListModule("toolbar");
			if (toolbar) {
				var button = toolbar.getButton(actionId);
				if (button)
					button.set("disabled", disabled);
			}
		},

		/**
		 * @private
		 */
		getContentListModules: function() {
			var modules = [];
			require([
				"ecm/widget/listView/modules/Toolbar2",
				"ecm/widget/listView/modules/Bar",
				"ecm/widget/listView/modules/Breadcrumb",
				"ecm/widget/listView/modules/DocInfo",
				"ecm/widget/listView/modules/ViewDetail",
				"ecm/widget/listView/modules/ViewMagazine",
				"ecm/widget/listView/modules/ViewFilmStrip",
				"ecm/widget/listView/modules/TotalCount",
				"ecm/widget/listView/modules/InlineMessage"
			], lang.hitch(this, function(Toolbar, Bar, Breadcrumb, DocInfo, ViewDetail, ViewMagazine, ViewFilmStrip, TotalCount, InlineMessage) {
				var feature = Desktop.getFeatureById(this.searchFeatureId);
				var config = feature ? feature.configurations : null;

				var viewModules = [];
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
					if (Desktop.showViewFilmstrip)
						viewModules.push(ViewFilmStrip);
				}

				var detailsListView = Desktop.getRequestParam("defaultListView");
				if ((detailsListView == "viewDetail" && array.indexOf(viewModules, ViewDetail) > -1) //
						|| (detailsListView == "viewMagazine" && array.indexOf(viewModules, ViewMagazine) > -1) //
						|| (detailsListView == "viewFilmStrip" && array.indexOf(viewModules, ViewFilmStrip) > -1))
					this.searchResults._viewCurrentName = detailsListView;

				modules.push({
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
									moduleClass: Breadcrumb,
									rootPrefix: ecm.messages.showing_results + " "
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
					],
					bottom: [
						[
							[
								{
									moduleClass: TotalCount
								}
							]
						]
					]
				});
				if (this._searchTemplateClass == UnifiedSearchTemplate || (this.repository && !this.repository._isOnDemand())) {
					// Show the document info pane if it's configured to be shown on the search feature or the search feature is unavailable
					if (!config || config.showDocumentInfoPane) {
						modules.push({
							moduleClass: DocInfo,
							selectAutoOpen: config ? config.documentInfoPaneOpenOnSelection : true, // feature's default is true
							showSystemProps: false
						});
					}
				}
			}));

			return modules;
		},

		/**
		 * @private
		 */
		getContentListGridModules: function() {
			var modules = [];
			if (this.repository && !this.repository._isOnDemand()) {
				modules.push(DndRowCopy);
				modules.push(DndFromDesktopAddDoc);
			}
			modules.push(SingleSort);
			modules.push(RowContextMenu);
			return modules;
		},

		/**
		 * @private
		 */
		resizeSearchCriteria: function() {
			var height = domGeometry.getMarginBox(this.searchCriteriaPane.domNode).h - domGeometry.getMarginBox(this.searchCriteriaHeader).h - domGeometry.getMarginBox(this.searchDefinition.buttonArea).h;
			domGeometry.setMarginBox(this.searchDefinition.searchSection, {
				h: height < 0 ? 0 : height
			});

			this.inherited(arguments);
		},

		_focusNode: function(node) {
			setTimeout(function() {
				focus.focus(node);
			}, 500);
		},

		destroy: function() {
			this.inherited(arguments);
			if (this._loginDialogOnCancelHandle) {
				connect.unsubscribe(this._loginDialogOnCancelHandle);
				this._loginDialogOnCancelHandle = null;
			}
		}
	});

});

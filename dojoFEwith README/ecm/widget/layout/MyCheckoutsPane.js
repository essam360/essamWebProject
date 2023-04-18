/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/aspect",
	"dojo/dom-attr",
	"dojo/window",
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/layout/ContentPane",
	"ecm/model/Desktop",
	"ecm/model/Item",
	"ecm/widget/dialog/LoginDialog",
	"ecm/widget/layout/_LaunchBarPane",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/gridModules/SingleSort",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/DocInfo",
	"ecm/widget/listView/modules/RepositorySelector",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/listView/modules/ViewDetail",
	"ecm/widget/listView/modules/ViewFilmStrip",
	"ecm/widget/listView/modules/ViewMagazine",
	"dojo/text!./templates/MyCheckoutsPane.html"
], function(aspect, domAttr, win, array, declare, lang, ContentPane, Desktop, Item, LoginDialog, _LaunchBarPane, ContentList, RowContextMenu, SingleSort, Bar, DocInfo, RepositorySelector, Toolbar, ViewDetail, ViewFilmStrip, ViewMagazine, template) {

	/**
	 * @name ecm.widget.layout.MyCheckoutsPane
	 * @class Provides a pane that is used to access the items that are checked out by the current user (not applicable
	 *        to OnDemand repositories).
	 * @augments ecm.widget.layout._LaunchBarPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.layout.MyCheckoutsPane", [
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.MyCheckoutsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);

			this._config = this.getFeatureConfiguration();

			// Configure the content list
			domAttr.set(this._contentList.domNode, "role", "region");
			domAttr.set(this._contentList.domNode, "aria-label", this.messages.my_checkouts_content_list_label);
			this._contentList.setContentListModules(this._getContentListModules());
			this._contentList.setGridExtensionModules(this._getContentListGridModules());
			this.own(aspect.after(this._contentList, "onModulesLoaded", lang.hitch(this, function() {
				if (this._config.showDocumentInfoPane && this._config.documentInfoPaneDefaultOpen) {
					var docInfo = this._contentList.getContentListModule("rightPane");
					docInfo.setPaneWidth(300);
					this._contentList.gridContainer.restore("trailing");
					this._contentList.gridContainer.onPanelOpen();
				}
			})));
			this.own(aspect.after(this._contentList, "onContentListModulesLoaded", lang.hitch(this, function() {
				var repositorySelector = this._contentList.getContentListModule("repositorySelector");
				this.own(aspect.after(repositorySelector, "onSelect", lang.hitch(this, "_setRepository"), true));
				if (this._repository)
					repositorySelector.setRepositoryId(this._repository.id);
			})));
			this.own(aspect.after(this._contentList, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // delegates to other panes
			this.own(aspect.after(this._contentList, "onEditItem", lang.hitch(this, "onEditItem"), true)); // delegates to other panes
			this._contentList.setResultSet(null); // shows repository selector
		},

		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to retrieve the correct feature
		 * configuration information.
		 * 
		 * @since 2.0.3.3
		 */
		getFeatureConfiguration: function() {
			// Add a tab for my checkouts if it is configured to be shown on the desktop
			return this.feature.configurations;
		},

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			var methodName = "loadContent";
			if (!this.isLoaded) {
				var repository = Desktop.getRepository(this._config.defaultRepository)
				this.logDebug(methodName, "repository: " + (repository && repository.id));
				if (!repository || repository._isBox() || repository._isOnDemand()) {
					this.logDebug(methodName, "Default repository is not supported; searching for alternate repository ...");
					var findRepository = function(repositories) {
						var repo;
						array.some(repositories, function(id) {
							repo = Desktop.getRepository(id);
							return repo && !repo._isBox() && !repo._isOnDemand();
						});
						return repo;
					};
					repository = findRepository(this._config.showRepositories);
					if (!repository) {
						repository = Desktop.getDefaultRepository();
						if (!repository || repository._isBox() || repository._isOnDemand())
							repository = findRepository(Desktop.repositories);
					}
					this.logDebug(methodName, "repository: " + (repository && repository.id));
				}
				this._setRepository(repository);
				this.isLoaded = true;
				this.needReset = false;
			}
		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			if (this.isLoaded) {
				// Reload it next time
				this._repository = null;
				this._contentList.setResultSet(null);
				this.isLoaded = false;
			}
			this.needReset = false;
		},

		_setRepository: function(repository) {
			if (repository == this._repository)
				return;

			if (repository.connected) {
				this._repository = repository;
				this._handleRepositoryChange();
			} else {
				var loginDialog = LoginDialog.getLoginDialog();
				loginDialog.connectToRepository(repository, lang.hitch(this, function() {
					if (repository.connected) {
						this._repository = repository;
						this._handleRepositoryChange();
					} else {
						this._selectRepository(this._repository);
					}
				}));
				var signal = aspect.after(loginDialog, "hide", lang.hitch(this, function() {
					signal.remove();
					if (!repository.connected) {
						if (this._repository && this._repository.connected) {
							// Restore previous selection
							this._selectRepository(this._repository);
						} else {
							// Select the disconnected repository anyway since no repository has been loaded yet
							this._repository = repository;
							this._selectRepository(repository);
						}
					}
				}));
			}
		},

		_handleRepositoryChange: function() {
			// Reset the content list if initialized with a null result set so that the document info pane is loaded properly
			// (if not reset, the pane does not automatically load the selected item unless the pane is reopened plus editing
			// properties empties the pane rendering it useless) 
			var resetNeeded = this._contentList.getResultSet() == null;
			this._contentList.setResultSet(null);
			this._selectRepository(this._repository); // in case it was not a user-driven change
			this._repository.retrieveCheckedOutItems(lang.hitch(this, function(resultSet) {
				if (resetNeeded) {
					// Preserve the current view
					var viewName = this._contentList._viewCurrentName;
					this._contentList.reset();
					this._contentList._viewCurrentName = viewName;
				}
				this._contentList.setResultSet(resultSet);
			}));
			if (this._repositoryOnChangeSignal)
				this._repositoryOnChangeSignal.remove();
			this._repositoryOnChangeSignal = aspect.after(this._repository, "onChange", lang.hitch(this, function(modelObject) {
				// Remove items that are no longer checked out
				array.forEach([].concat(modelObject), function(obj) {
					if (obj && obj.isInstanceOf && obj.isInstanceOf(Item) && !obj.locked) {
						if (this._contentList.grid.store.deleteItem(obj))
							this._contentList.grid.select.row.clear();
					}
				}, this);
			}), true);
		},

		_selectRepository: function(repository) {
			var repositorySelector = this._contentList.getContentListModule("repositorySelector");
			repositorySelector.setRepositoryId(repository.id);
		},

		_getContentListModules: function() {
			var modules = [], viewModules = [];
			if (this._config && this._config.showViews && this._config.showViews.length > 0) {
				for (var i = 0; i < this._config.showViews.length; i++) {
					var viewId = this._config.showViews[i];
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
				this._contentList._viewCurrentName = detailsListView;

			modules.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: RepositorySelector,
								"className": "BarRepositorySelector",
								validateRepository: lang.hitch(this, function(repository) {
									return !repository._isBox() && !repository._isOnDemand() && array.indexOf(this._config.showRepositories, repository.id) != -1;
								})
							},
							{
								moduleClass: Toolbar
							},
							{
								moduleClasses: viewModules,
								"className": "BarViewModules"
							}
						]
					]
				]
			});
			if (this._config.showDocumentInfoPane) {
				modules.push({
					moduleClass: DocInfo,
					selectAutoOpen: this._config.documentInfoPaneOpenOnSelection,
					showSystemProps: false
				});
			}
			return modules;
		},

		_getContentListGridModules: function() {
			return [
				SingleSort,
				RowContextMenu
			];
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._repositoryOnChangeSignal) {
				this._repositoryOnChangeSignal.remove();
				delete this._repositoryOnChangeSignal;
			}
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dijit/popup",
	"dijit/registry",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"../../LoggerMixin",
	"../ActionMenu",
	"../layout/TabController"
], function(declare, lang, domAttr, domClass, popup, registry, Menu, MenuItem, MenuSeparator, LoggerMixin, ActionMenu, TabController) {

	/**
	 * @private Used internally by {@link ecm.widget.search.SearchTabController} widget
	 * @name ecm.widget.search.SearchTabButton
	 * @class Provides a tab button widget for a search.
	 * @augments ecm.widget.layout.TabButton
	 */
	var TabButton = declare("ecm.widget.search.SearchTabButton", [
		ecm.widget.layout.TabButton
	], {
		showDropDown: false,

		destroy: function() {
			this.inherited(arguments);
			if (this._closeMenu) {
				this._closeMenu.destroyRecursive();
				delete this._closeMenu;
			}
		}
	});

	/**
	 * @private Used internally by a {@link ecm.widget.search.SearchTabController} widget
	 * @name ecm.widget.search.SearchTabController
	 * @class Provides a widget that controls search tabs.
	 * @augments ecm.widget.layout.TabController
	 */
	return declare("ecm.widget.search.SearchTabController", [
		TabController
	], {
		buttonWidget: TabButton,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.tablistWrapper, "ecmSearchTablistWrapper");
		},

		onCloseButtonClick: function(/*dijit._Widget*/page) {
			this.tabContainer.closeTab(page);
		},

		_addMenus: function(page, item) {
			var controlButton = page.controlButton;
			if (!controlButton)
				return;

			if (this.tabContainer.isBookmark && controlButton._closeMenu) {
				controlButton._closeMenu.destroyRecursive();
				controlButton._closeMenu = null;
			}

			if (!controlButton._closeMenu) {
				controlButton._closeMenu = new Menu({
					id: controlButton.id + "_Menu",
					dir: controlButton.dir,
					lang: controlButton.lang,
					targetNodeIds: [
						controlButton.domNode
					]
				});
			} else {
				popup.close(controlButton._closeMenu);
			}

			if (this.tabContainer.isBookmark) {
				if (!this._actionMenuCreator) {
					this._actionMenuCreator = new ActionMenu();
				}
				ecm.model.desktop.loadMenuActions("SearchTemplateBookmarkContextMenu", lang.hitch(this, function(actions) {
					var filteredActions = new Array();
					var isSearchTab = page.contentClass == "ecm.widget.search.SearchTab";
					var searchTemplate = item || page.getSearchTemplate();
					var resultSet = null;
					if (isSearchTab && page.repository._isP8() && page.uid && searchTemplate && page.uid.indexOf(searchTemplate.id) == 0) { // tab represents a specific version of a P8 search
						// Create a mock result set to emulate an all versions search and enable/disable actions accordingly
						resultSet = {
							_versionLookup: {}
						};
						resultSet._versionLookup[page.repository.id] = "allversions";
					}
					for ( var i in actions) {
						var action = actions[i];
						if (action.id != "OpenSearch" && action.id != "OpenSearchInTab" && (action.id != "OpenSearchNewTab" || isSearchTab))
							filteredActions.push(action);
					}
					this._actionMenuCreator._actionsMenu = controlButton._closeMenu;
					this._actionMenuCreator.createMenu(filteredActions, [
						searchTemplate
					], null, null, page.repository, page.teamspace, resultSet);
					controlButton._closeMenu.addChild(new MenuSeparator());
					this._addTabMenus(page);

					// Force an update of the tab since it was updated before the menu was added asynchronously
					page.set("closable", true);
					this._onTabUpdate(page);
				}));
			} else {
				this._addTabMenus(page);
			}
		},

		_addTabMenus: function(page) {
			var controlButton = page.controlButton;
			if (!this.tabContainer.isBookmark && page.contentClass == "ecm.widget.search.SearchTab") {
				if (!controlButton._closeMenu.openNewTabMenu) {
					controlButton._closeMenu.openNewTabMenu = new MenuItem({
						label: ecm.messages.open_in_new_tab,
						dir: controlButton.dir,
						lang: controlButton.lang,
						onClick: lang.hitch(this, function() {
							var searchTemplate = null;
							if (page._searchTemplateOrig) {
								searchTemplate = page._searchTemplateOrig;
							} else if (page.searchForm && page.searchForm._searchTemplateBackup) {
								searchTemplate = page.searchForm._searchTemplateBackup;
							}

							if (searchTemplate) {
								// Open the same version of the search if the tab represents a specific version of a P8 search; otherwise, open the latest version
								var version = page.repository._isP8() && page.uid && page.uid.indexOf(searchTemplate.id) == 0 ? "specific" : null;
								this.tabContainer.onSearchTemplateOpen(searchTemplate, version);
							}
						})
					});

					controlButton._closeMenu.addChild(controlButton._closeMenu.openNewTabMenu);
				}
			}

			// add context menu onto title button
			if (controlButton.closeNode) {
				domAttr.set(controlButton.closeNode, "title", ecm.messages.close_tab);
			}

			if (page.closable) {
				if (!controlButton._closeMenu.closeAllTabsMenu) {
					controlButton._closeMenu.closeAllTabsMenu = new MenuItem({
						label: ecm.messages.close_all,
						dir: controlButton.dir,
						lang: controlButton.lang,
						onClick: lang.hitch(this, function() {
							this.tabContainer.closeAllTabs();
						})
					});
					controlButton._closeMenu.addChild(controlButton._closeMenu.closeAllTabsMenu);
				}

				if (!controlButton._closeMenu.closeOtherTabsMenu) {
					controlButton._closeMenu.closeOtherTabsMenu = new MenuItem({
						label: ecm.messages.close_others,
						dir: controlButton.dir,
						lang: controlButton.lang,
						onClick: lang.hitch(this, function() {
							this.tabContainer.closeAllTabsExceptOne(page);
						})
					});
					controlButton._closeMenu.addChild(controlButton._closeMenu.closeOtherTabsMenu);
				}

				if (!registry.byId(controlButton.id + "_closeTabMenu")) {
					controlButton._closeMenu._closeTabMenu = new MenuItem({
						label: ecm.messages.close_tab,
						id: controlButton.id + "_closeTabMenu",
						dir: controlButton.dir,
						lang: controlButton.lang,
						onClick: lang.hitch(this, function(evt) {
							this.onCloseButtonClick(page);
						})
					});
					controlButton._closeMenu.addChild(controlButton._closeMenu._closeTabMenu);
				}
			}
		}
	});

});

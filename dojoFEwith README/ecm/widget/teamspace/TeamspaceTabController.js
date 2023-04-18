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
	 * @private Used internally by {@link ecm.widget.teamspace.TeamspaceTabController} widget
	 * @name ecm.widget.teamspace.TeamsppaceTabButton
	 * @class Provides a tab button widget for a teamspace.
	 * @augments ecm.widget.layout.TabButton
	 */
	var TabButton = declare("ecm.widget.teamspace.TeamspaceTabButton", [
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
	 * @private Used internally by a {@link ecm.widget.teamspace.TeamspaceTabController} widget
	 * @name ecm.widget.teamspace.TeamspaceTabController
	 * @class Provides a widget that controls teamspace tabs.
	 * @augments ecm.widget.layout.TabController
	 */
	return declare("ecm.widget.teamspace.TeamspaceTabController", [
		TabController
	], {
		buttonWidget: TabButton,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.tablistWrapper, "ecmTeamspaceTablistWrapper");
		},

		onCloseButtonClick: function(/*dijit._Widget*/page) {
			if (page && (page.tabType == "teamspace" || page.tabType == "decommission")) {
				this.tabContainer.closeTab(page);
			} else
				this.inherited(arguments);
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
				controlButton.own(controlButton._closeMenu);
			} else {
				popup.close(controlButton._closeMenu);
			}

			this._addTabMenus(page);

		},

		_addTabMenus: function(page) {
			var controlButton = page.controlButton;

			if (page && (page["tabType"] == "teamspacesList" || page["tabType"] == "templatesList"))
				return;

			// add context menu onto title button
			if (controlButton.closeNode) {
				domAttr.set(controlButton.closeNode, "title", ecm.messages.close_tab);
			}

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
	});

});

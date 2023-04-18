/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"../../Messages",
	"../../LoggerMixin"
], function(declare, lang, Messages, LoggerMixin) {

	/**
	 * @name ecm.widget.layout._TeamspaceTabMixin
	 * @class Class used to augment a LaunchBarPane that contains an {@link ecm.widget.TeamspaceTabContainer}. The
	 *        LaunchBarPane must have an instance of {@link ecm.widget.TeamspaceTabContainer}.
	 * @augments ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._TeamspaceTabMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._TeamspaceTabMixin.prototype */

		tabs: {
			teamspace: {
				contentClass: "ecm.widget.layout.TeamspacePane"
			}
		},

		/**
		 * Opens a new teamspace tab.
		 */
		openTab: function(args) {
			this.logEntry("openTab", args);

			var tabArgs = this._getTabInfo(args);

			// open the tab
			if (tabArgs)
				this.teamspaceTabContainer.openTab(tabArgs);

			return this.getChildTab(tabArgs.uid);

			this.logExit("openTab");
		},

		/**
		 * Returns the next available tab number for the specified teamspace.
		 */
		_nextTabNumber: function(searchTemplate, uuid) {
			var children = this.teamspaceTabContainer.getChildren();
			var uuidLength = uuid.length;
			var tabNum = -1;

			for (var i = 0; i < children.length; i++) {
				var childId = children[i].uid;
				if (childId.indexOf(uuid) == 0 && childId.lastIndexOf("_T") == uuid.length) {
					var n = parseInt(childId.substring(uuid.length + 2));
					if (n > tabNum) {
						tabNum = n;
					}
				}
			}

			return tabNum > -1 ? tabNum + 1 : 0;
		},

		/**
		 * Returns the child tab that contains the same uuid.
		 */
		getChildTab: function(uid) {
			var children = this.searchTabContainer.getChildren();

			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				if (child && child.uid && child.uid == uid) {
					return child;
					break;
				}
			}
			return null;
		},

		/**
		 * Sets up the argument list for the tab.
		 * 
		 * @param args
		 *            Base arguments.
		 */
		_getTabInfo: function(args) {
			this.logEntry("_getTabInfo", args);

			var def = (args.tabType) ? this.tabs[args.tabType] : null;

			if (!def) {
				return;
			}

			var baseArgs = null;
			args.parentPane = this;

			this.logExit("_getTabInfo");
			return lang.mixin(baseArgs, args);
		},

		openTeamspace: function(tabType, repository, uuid, eamspace) {
			this.openTab({
				tabType: tabType,
				repository: repository,
				teamspace: teamspace,
				selected: true,
				closable: true,
				openNewTab: false,
				UUID: uuid
			});
		},

		_closeAllTeamspaceTabs: function() {
			this.logEntry("_closeAllTeamspaceTabs");

			this.teamspaceTabContainer.closeAllTabs();

			this.logExit("_closeAllTeamspaceTabs");
		}
	});

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"../../Messages",
	"../../LoggerMixin",
	"../search/SearchTab",
	"../search/SearchBuilder",
	"../search/_SearchBuilderMixin"
],

function(declare, //
lang, //
has, //
Messages, //
LoggerMixin, //
SearchTab, //
SearchBuilder, //
_SearchBuilderMixin) {

	/**
	 * @name ecm.widget.layout._SearchTabMixin
	 * @class Class used to augment a LaunchBarPane that contains an {@link ecm.widget.SearchTabContainer}. The
	 *        LaunchBarPane must have an instance of {@link ecm.widget.SearchTabContainer}.
	 * @augments ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._SearchTabMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._SearchTabMixin.prototype */

		tabs: {
			search: {
				contentClass: "ecm.widget.search.SearchTab"
			},
			searchbuilder: {
				contentClass: "ecm.widget.search.SearchBuilder"
			},
			unifiedsearchbuilder: {
				contentClass: "ecm.widget.search.UnifiedSearchBuilder"
			}
		},

		textDir: has("text-direction"),

		/**
		 * Opens a new search tab.
		 */
		openTab: function(args) {
			this.logEntry("openTab", args);

			var tabArgs = this._getTabInfo(args);

			// open the tab
			if (tabArgs)
				this.searchTabContainer.openTab(tabArgs);

			return this.getChildTab(tabArgs.uid);

			this.logExit("openTab");
		},

		/**
		 * Returns the next available tab number for the specified search.
		 */
		_nextTabNumber: function(searchTemplate, uuid) {
			var children = this.searchTabContainer.getChildren();
			var uuidLength = uuid.length;
			var tabNum = -1;

			for ( var i = 0; i < children.length; i++) {
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

			for ( var i = 0; i < children.length; i++) {
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
			if (args.tabType == "search") {
				var dTemplate = null;
				var rep = args.repository;
				var version = args.version;

				if (args.searchTemplate) {
					dTemplate = args.searchTemplate;
				} else if (args.searchTemplateId) {
					if (rep) {
						rep.retrieveSearchTemplates(function(templates) {
							for ( var i = 0; templates && i < templates.length; i++) {
								if (templates[i].id == args.searchTemplateId) {
									dTemplate = templates[i];
									break;
								}
							}
						});
					}
				}

				if (rep && !dTemplate) {
					rep.retrieveSearchTemplates(function(templates) {
						if (templates && templates.length > 0) {
							dTemplate = templates[0];
						}
					});
				}

				var uid = args.UUID;
				var generatedUUID = dTemplate.generateUUID();
				var tabNum = 0; // primary tab (additional tabs 1..n)
				if (args.openNewTab || !uid || uid == generatedUUID) {
					// Generate UUID
					if (rep && rep._isP8() && (version == "specific" || version == "current")) {
						// Open one tab per ID for specific and current versions
						generatedUUID = dTemplate.id;
					}
					if (args.openNewTab) {
						tabNum = this._nextTabNumber(dTemplate, generatedUUID);
					}
					uid = generatedUUID + "_T" + tabNum;
				}

				//change
				var div = document.createElement('div');
				var labelText = ecm.messages.select_search;
				if (dTemplate) {
					labelText = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, dTemplate.name) : dTemplate.name;
					if (args.openNewTab && tabNum > 0) {
						labelText = labelText + " (" + tabNum + ")";
					}
				}
				var text = document.createTextNode(labelText);
				div.appendChild(text);

				baseArgs = {
					initArgs: [
						args
					],
					title: div.innerHTML,
					uid: uid,
					"class": "ecmCommonNoPadding",
					contentClass: def.contentClass,
					contentArgs: {
						showLabel: true,
						"searchTemplate": dTemplate
					}
				};
				if (div)
					delete div;

			} else { // builder
				var title = args.tabType == "unifiedsearchbuilder" ? ecm.messages.new_unified_search : ecm.messages.new_search;
				if (args.searchTemplate) {
					var div = document.createElement("div");
					var text = document.createTextNode(args.searchTemplate.name);
					div.appendChild(text);
					title = div.innerHTML;
				}

				baseArgs = {
					initArgs: [
						args
					],
					title: title,
					uid: this._getBuilderUid(args.searchTemplate),
					"class": "ecmCommonNoPadding",
					contentClass: def.contentClass,
					contentArgs: {
						showLabel: true
					}
				};
			}

			this.logExit("_getTabInfo");
			return lang.mixin(baseArgs, args);
		},

		setUpTabContainer: function() {
			this.connect(this.searchTabContainer, "onTabOpened", function(child) {
				if (child.searchResults && this.itemProperties) {
					this.connect(child.searchResults, "onSelectionChange", function(selectedItems) {
						if (selectedItems && selectedItems.length > 0) {
							this.itemProperties.setItem(selectedItems[0]);
						} else {
							this.itemProperties.setItem(null);
						}
					});
				}
			});
		},

		openSearch: function(tabType, repository, uuid, searchTemplate, teamspace) {
			this.openTab({
				tabType: tabType,
				repository: repository,
				teamspace: teamspace,
				selected: true,
				closable: true,
				openNewTab: false,
				"searchTemplate": searchTemplate,
				UUID: uuid
			});
		},

		_openSearchBuilder: function() {
			this.logEntry("_openSearchBuilder");

			/*this.openTab({
				tabType: "searchbuilder",
				repository: self.repository,
				selected: true,
				closable: true
			});*/

			this.logExit("_openSearchBuilder");
		},

		_closeAllSearchTabs: function() {
			this.logEntry("_closeAllSearchTabs");

			this.searchTabContainer.closeAllTabs();

			this.logExit("_closeAllSearchTabs");
		},

		_getBuilderUid: function(searchTemplate) {
			var uid;
			if (searchTemplate) {
				uid = searchTemplate.generateUUID();
				if (!searchTemplate.isNew()) {
					var children = this.searchTabContainer.getChildren();
					for ( var i = 0; i < children.length; i++) {
						if (children[i].isInstanceOf && children[i].isInstanceOf(_SearchBuilderMixin) && children[i].getSearchTemplate().equals(searchTemplate)) {
							uid = children[i].uid;
							break;
						}
					}
				}
			} else {
				uid = "NewSearch_" + new Date().getTime();
			}
			return uid;
		}
	});

});

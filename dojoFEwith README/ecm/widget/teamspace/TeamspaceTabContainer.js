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
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/registry",
	"dojox/html/entities",
	"../../LoggerMixin",
	"../../model/Item",
	"./TeamspaceTabController",
	"../dialog/ConfirmationDialog",
	"../dialog/LoginDialog",
	"../layout/_TabContainerBase"
], function(declare, lang, array, connect, aspect, domClass, domStyle, registry, entities, LoggerMixin, Item, TeamspaceTabController, ConfirmationDialog, LoginDialog, _TabContainerBase) {

	/**
	 * @name ecm.widget.layout.TeamspaceTabContainer
	 * @class Provides a widget that contains and controls the teamspace tabs that are open.
	 * @augments ecm.widget.layout._TabContainerBase
	 */
	return declare("ecm.widget.teamspace.TeamspaceTabContainer", [
		_TabContainerBase
	], {
		/** @lends ecm.widget.teamspace.TeamspaceTabContainer.prototype */
		controllerWidget: "ecm.widget.teamspace.TeamspaceTabController",

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmTeamspaceTabContainer");
			this._establishConnections();
			this.connect(ecm.model.desktop, "onLogout", function(repository) {
				setTimeout(lang.hitch(this, "_closeAllTabs"));
			});

			var actionsHandler = ecm.model.desktop.getActionsHandler();
			this.isBookmark = actionsHandler && actionsHandler.declaredClass == "ecm.widget.layout.BookmarkActionsHandler";
		},

		/**
		 * Sets the repository and establishes event listeners that react to model changes.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this.teamspace = teamspace;
		},

		/**
		 * Closes all the tabs except for the specified one.
		 * 
		 * @param excludedTab
		 *            A tab that will remain open after all tabs are closed.
		 */
		closeAllTabsExceptOne: function(excludedTab) {
			var children = this.getChildren();
			var self = this;
			var handle = function() {
				if (children) {
					array.forEach(children, function(child) {
						if (child != excludedTab) {
							if (child.get("closable"))
								self.closeTab(child, true);
						}
					});
				}
			};
			this._closeMultipleTabsWithConfirm(handle, handle, excludedTab);
		},

		/**
		 * Closes all the tabs. Displays a confirmation dialog if closing a {@link ecm.widget.search.SearchBuilder}
		 * widget.
		 */
		closeAllTabs: function() {
			var handle = lang.hitch(this, this._closeAllTabs);
			this._closeMultipleTabsWithConfirm(handle, handle);
		},

		/**
		 * @private Closes all the tabs.
		 */
		_closeAllTabs: function(children) {
			var children = this.getChildren();
			var self = this;
			if (children) {
				array.forEach(children, function(child) {
					if (child.get("closable"))
						self.closeTab(child, true);
				});
			}
		},

		/**
		 * @private Displays a confirmation dialog if closing a {@link ecm.widget.search.SearchBuilder} widget.
		 */
		_closeMultipleTabsWithConfirm: function(onComplete, onConfirmComplete, excludedTab) {
			var children = this.getChildren();
			var self = this;
			if (this.repository && children) {
				array.forEach(children, function(child) {
					if (child && (child.tabType == "teamspaceTab") && child != excludedTab) {

					}
				});
			}

			onComplete();
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
			var self = this;
			return this.inherited(arguments);
		},

		/**
		 * @private Displays a confirmation dialog to close a tab.
		 */
		_showCloseConfirmationDialog: function(onExecute, text) {
			var self = this;
			var confirmClose = new ConfirmationDialog({
				text: text ? text : ecm.messages.search_prompt_close_without_save,
				title: ecm.messages.close,
				buttonLabel: ecm.messages.yes,
				cancelButtonLabel: ecm.messages.no,
				cancelButtonDefault: true,
				onExecute: lang.hitch(this, onExecute)
			});
			confirmClose.show();
		},

		/**
		 * Called when a teamspace is opened.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object that was opened.
		 */
		onTeamspaceOpen: function(Teamspace) {
			// Event fired when a teamspace is opened
		},

		/**
		 * @private
		 */
		_getPanes: function(item) {
			// If the item is the latest version, return the panes that represent the latest version of the item;
			// otherwise, return the panes that represent the same version of the item
			var children = this.getChildren();
			var latest = !item.repository._isP8() || item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RELEASED;
			return array.filter(children, function(child) {
				var searchTemplate = child.getSearchTemplate();
//				return item.equals(searchTemplate) && searchTemplate.UUID.indexOf(latest ? item.generateUUID() : item.id) == 0;
				return (item.equals && item.equals(searchTemplate)) && searchTemplate.UUID.indexOf(latest ? item.generateUUID() : item.id) == 0;
			});
		},

		/**
		 * @private
		 */
		_getPanesById: function(id, vsId) {
			var panes = new Array();
			var children = this.getChildren();
			array.forEach(children, function(child) {
				var teamspace = child.getTeamspace();
				if (teamspace && (teamspace.id == id || (searchTemplate.vsId && searchTemplate.vsId == vsId))) {
					panes.push(child);
				}
			});
			return panes;
		},

		/**
		 * @private Handles changes made to searches
		 */
		_handleModelChange: function(modelObjects) {
			array.forEach(modelObjects, function(modelObj) {
				if (modelObj && modelObj.isInstanceOf && modelObj.isInstanceOf(Item)) {
					array.forEach(this._getPanes(modelObj), function(pane) {
						if (modelObj.deleted) {
							this.removeChild(pane);
						} else { // modified
							// Update the search template's name and description
							var searchTemplate = pane.getSearchTemplate();
							searchTemplate.name = modelObj.name;
							if (modelObj && modelObj.isInstanceOf && modelObj.isInstanceOf(ecm.model._SearchTemplateBase)) {
								searchTemplate.description = modelObj.description;
							}

							// Update the tab's label
							var label = modelObj.name;
							var paneId = pane.uid;
							var uuid = searchTemplate.generateUUID();
							var tIndex = paneId.lastIndexOf("_T");
							if (tIndex > -1 && (paneId.indexOf(uuid) == 0 && tIndex == uuid.length) || (paneId.indexOf(searchTemplate.id) == 0 && tIndex == searchTemplate.id.length)) {
								var n = parseInt(paneId.substring(tIndex + 2));
								if (n > 0) {
									// Append the tab number
									label += " (" + n + ")";
								}
							}

							var button = this.tablist.pane2button(pane.id);
							button.set("label", entities.encode(label));

							if (this.isBookmark) {
								// Update the contextual menu
								button._controller._addMenus(pane, modelObj);
							}

							this._scrollIntoView(pane);
						}
					}, this);
				}
			}, this);
		},

		/**
		 * @private
		 */
		_handleTeamspaceDelete: function(id) {
			var panes = this._getPanesById(id);
			array.forEach(panes, function(pane) {
				this.removeChild(pane);
			}, this);
		},

		/**
		 * @private
		 */
		_selectTab: function(type) {
			var children = this.getChildren();
			var child;
			array.some(children, function(c) {
				if (c["tabType"] === type) {
					child = c;
					return true;
				}
				return false;
			});

			if (child && this.selectedChildWidget != child) {
				this.selectChild(child);
			}
		},
		/**
		 * @private
		 */
		_establishConnections: function() {
			if (this.repository) {
				if (!this.handles) {
					this._handles = new Object();
				}
				if (!(this.repository in this._handles)) {
					var handles = new Array();
					handles.push(this.connect(this.repository, "onChange", "_handleModelChange"));
					handles.push(this.connect(this.repository, "onTeamspaceDeleted", "_handleTeamspaceDelete"));
					handles.push(this.connect(this.repository, "onDisconnected", function(repository) {
						array.forEach(this._handles[repository], this.disconnect, this);
						delete this._handles[repository];
					}));
					this._handles[this.repository] = handles;
				}
			}

		},

		/**
		 * @private Scrolls the selected tab into view. This is necessary when a teamspace is saved with a long name and
		 *          the tab becomes partially hidden. ScrollingTabController listens for changes to the tab's label and
		 *          resizes accordingly, but it does not make sure that the selected tab is completely visible.
		 */
		_scrollIntoView: function(pane) {
			var button = this.tablist.pane2button(pane.id);
			var controller = button._controller;
			var dim = controller._dim;
			if (dim) {
				controller.resize(dim);
				var node = button.domNode;
				if (node && this.selectedChildWidget === pane) {
					var scroll = controller._getScroll();
					if (scroll > node.offsetLeft || (scroll + domStyle.get(controller.scrollNode, "width")) < (node.offsetLeft + domStyle.get(node, "width"))) {
						controller.createSmoothScroll().play();
					}
				}
			}
		},

		/**
		 * @Private
		 */
		_onTabUpdate: function(child) {
			if (this._beingDestroyed) {
				return;
			}

			var tabArguments = [];
			array.forEach(this.getChildren(), function(child, idx, arr) {
				var closable = (arr.length !== 1);
				if (child.get("closable") != closable) {
					child.set("closable", closable);
				}
				if (child["class"] == "templatesList" || child["class"] == "teamspacesList")
					child.set("closable", false);
			}, this);
			//this.resize();

			if (child.onTabUpdate)
				child.onTabUpdate();
		},

		onTabClosed: function(child) {
			var _this = this;
			if (child != null && (child["tabType"] == "teamspace" || child["tabType"] == "decommission")) {

				dojo.forEach(this.getChildren(), function(tab) {
					if (tab && tab["tabType"] == "teamspacesList") {
						_this.selectChild(tab);
					}
				});

			}

		},
		/**
		 * @Private
		 */
		_openTab: function(msg) {
			var children = this.getChildren();
			var child;
			var uid = msg.UUID;

			lang.mixin(msg, {
				tabContainer: this
			});

			array.some(children, function(c) {
				if (c.uid === uid) {
					child = c;
					return true;
				}
				return false;
			});

			if (!child) {
				dojo["require"](msg.contentClass);
				var childClass = lang.getObject(msg.contentClass);
				child = new childClass(msg);
				this.addChild(child, children.length);

				if (typeof child.setParams == 'function') {
					child.setParams(msg);
				}
				child.connect(child, "onClose", function() {
					// Close child
					if (child["type"] == "teamspace") {

					}
					return true;
				});
			}

			if (msg.selected && this.selectedChildWidget != child) {
				this.selectChild(child);
			}

			this.onTabOpened(child);

			return child;
		}
	});

});

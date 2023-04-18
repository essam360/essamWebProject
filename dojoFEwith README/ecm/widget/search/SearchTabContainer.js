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
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/registry",
	"dojox/html/entities",
	"../../LoggerMixin",
	"../../model/Item",
	"../../model/SearchTemplate",
	"./SearchTabController",
	"../dialog/ConfirmationDialog",
	"../dialog/LoginDialog",
	"../layout/_TabContainerBase"
], function(declare, lang, array, connect, domClass, domStyle, registry, entities, LoggerMixin, Item, SearchTemplate, SearchTabController, ConfirmationDialog, LoginDialog, _TabContainerBase) {

	/**
	 * @name ecm.widget.search.SearchTabContainer
	 * @class Provides a widget that contains and controls the search tabs that are open.
	 * @augments ecm.widget.layout._TabContainerBase
	 */
	return declare("ecm.widget.search.SearchTabContainer", [
		_TabContainerBase
	], {
		/** @lends ecm.widget.search.SearchTabContainer.prototype */
		controllerWidget: "ecm.widget.search.SearchTabController",

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmSearchTabContainer");
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
		 * @param teamspace
		 *            An optional {@link ecm.model.Teamspace} object.
		 */
		setRepository: function(repository, teamspace) {
			this.repository = repository;
			this.teamspace = teamspace;
			this._establishConnections();
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
						if (child != excludedTab)
							self.closeTab(child, true);
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
					self.closeTab(child, true);
				});
			}
		},

		/**
		 * @private Displays a confirmation dialog if closing a {@link ecm.widget.search.SearchBuilder} widget.
		 */
		_closeMultipleTabsWithConfirm: function(onComplete, onConfirmComplete, excludedTab) {
			var children = this.getChildren();
			var searchBuilderFound = false;
			var self = this;
			if (this.repository && !this.repository._isCmis() && children) {
				array.forEach(children, function(child) {
					if (child && (child.tabType == "searchbuilder" || child.tabType == "unifiedsearchbuilder") && child != excludedTab && child.searchDefinition.isCriteriaModified()) {
						searchBuilderFound = true;
					}
				});
			}

			if (searchBuilderFound) {
				self._showCloseConfirmationDialog(onConfirmComplete, ecm.messages.search_prompt_close_all_without_save);
			} else
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
			var self = this, sd = kwArgs && (kwArgs.tabType == "searchbuilder" || kwArgs.tabType == "unifiedsearchbuilder") && kwArgs.searchDefinition;
			if (!sd || !sd.isSaveSupported())
				noConfirmDialog = true;
			if (!noConfirmDialog && sd.isCriteriaModified()) {
				this._showCloseConfirmationDialog(lang.hitch(this, function() {
					self._closeTab(kwArgs);
				}));
			} else {
				return this.inherited(arguments);
			}
		},

		addChild: function(child, index) {
			this.inherited(arguments);

			if (!lang.isFunction(child.onLoad))
				return;

			this._subscribeToLoginDialogOnCancel(child);
			var onLoadHandler = child.connect(child, "onLoad", lang.hitch(this, function() {
				this._unsubscribeToLoginDialogOnCancel();
				child.disconnect(onLoadHandler);
			}));
		},

		_subscribeToLoginDialogOnCancel: function(child) {
			this._unsubscribeToLoginDialogOnCancel();
			this._LoginDialogOnCancelHandle = connect.subscribe("ecm.widget.dialog.LoginDialog.onCancel", lang.hitch(this, function(message) {
				this._unsubscribeToLoginDialogOnCancel();
				this.closeTab(child, true);
			}));
		},

		_unsubscribeToLoginDialogOnCancel: function() {
			if (this._LoginDialogOnCancelHandle)
				connect.unsubscribe(this._LoginDialogOnCancelHandle);
			this._LoginDialogOnCancelHandle = null;
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
		 * Opens a tab.
		 * 
		 * @param kwArgs
		 *            A tab to be opened
		 */
		openTab: function(kwArgs) {
			var child = this.inherited(arguments);
			if (child.searchForm) {
				var self = this;
				var repo = this.teamspace || this.repository;
				child.connect(child.searchForm, "onUnsupportedSearchTemplateSet", function(searchTemplate) {
					self.closeTab(child, true);
					if (repo)
						repo.removeRecentSearches([
							searchTemplate
						]);
				});
			} else {
				// Style the tab to indicate that the search is being edited
				var button = this.tablist.pane2button(child.id);
				if (button) {
					domClass.add(button.domNode, "editSearchTab");
				}
			}

			return child;
		},

		/**
		 * Called when a search template is opened.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} object that was opened.
		 * @param version
		 *            The version to be opened, i.e., "current", "released", or "specific" (optional).
		 */
		onSearchTemplateOpen: function(searchTemplate, version) {
			// Event fired when a search template is opened
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
				var searchTemplate = child.getSearchTemplate();
				if (searchTemplate && (searchTemplate.id == id || (searchTemplate.vsId && searchTemplate.vsId == vsId))) {
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
		_handleSearchTemplateAdd: function(searchTemplate) {
			var panes = this._getPanes(searchTemplate);
			array.forEach(panes, function(pane) {
				var button = this.tablist.pane2button(pane.id);
				button.set("label", entities.encode(searchTemplate.name));
				this._scrollIntoView(pane);
			}, this);
		},

		/**
		 * @private
		 */
		_handleSearchTemplateDelete: function(id, vsId) {
			var panes = this._getPanesById(id, vsId);
			array.forEach(panes, function(pane) {
				this.removeChild(pane);
			}, this);
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
					handles.push(this.connect(this.repository, "onSearchTemplateAdded", "_handleSearchTemplateAdd"));
					handles.push(this.connect(this.repository, "onSearchTemplateDeleted", "_handleSearchTemplateDelete"));
					handles.push(this.connect(this.repository, "onDisconnected", function(repository) {
						array.forEach(this._handles[repository], this.disconnect, this);
						delete this._handles[repository];
					}));
					this._handles[this.repository] = handles;
				}
			}

			// setup teamspace connections if working in a teamspace
			if (this.teamspace) {
				if (!this.handles) {
					this._handles = new Object();
				}
				if (!(this.teamspace in this._handles)) {
					var handles = new Array();
					handles.push(this.connect(this.teamspace, "onSearchTemplateAdded", "_handleSearchTemplateAdd"));
					this._handles[this.teamspace] = handles;
				}
			}
		},

		/**
		 * @private Scrolls the selected tab into view. This is necessary when a search is saved with a long name and
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

		_onTabUpdate: function(child) {
			// Overrides the super-class's implementation to avoid suppressing the close button of the last remaining tab
			if (!this._beingDestroyed && child.onTabUpdate)
				child.onTabUpdate();
		}
	});

});

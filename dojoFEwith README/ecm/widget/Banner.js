/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/_base/event",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/string",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/PopupMenuItem",
	"dijit/Tooltip",
	"idx/form/Link",
	"idx/form/DropDownLink",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Repository",
	"ecm/model/Desktop",
	"dojo/text!./templates/Banner.html"
], //
function(declare, //
lang, //
array, //
aspect, //
event, //
domClass, //
domStyle, //
string, //
registry, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
DropDownButton, //
Menu, //
MenuItem, //
MenuSeparator, //
PopupMenuItem, //
Tooltip, //
idxFormLink, //
idxDropDownLink, //
idxHtml, //
LoggerMixin, //
MessagesMixin, //
Repository, //
Desktop, //
template) {

	/**
	 * @name ecm.widget.Banner
	 * @class Provides a banner that is displayed in the user interface for an IBM Content Navigator application.
	 * @augments dijit._Widget, dijit._Templated, ecm.LoggerMixin, ecm.MessagesMixin
	 */
	return declare("ecm.widget.Banner", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.Banner.prototype */

		templateString: template,
		widgetsInTemplate: true,
		baseClass: "ecmBanner",
		showApplicationMenu: false,
		showToolsContextMenu: true,
		showUserSessionContextMenu: true,
		hasSearchBar: false,

		postCreate: function() {
			this.logEntry("postCreate ");
			this.inherited(arguments);

			// Block right-click actions on the drop-down buttons, because it's creates an extremely annoying double
			// context menu situation.
			this.connect(this.userSessionActionsButton.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});
			this.connect(this.toolsActionsButton.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});
			this.connect(this.helpButton.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});

			/**
			 * Desktop specific style settings have been deprecated in 2.0.3. Use the custom theme capability instead to
			 * apply custom styling to desktops.
			 */
			if (!Desktop.theme && Desktop.bannerLogoUrl) {
				domStyle.set(this.logoImage, "backgroundImage", "url(" + Desktop.bannerLogoUrl + ")");
			}
			if (!Desktop.theme && Desktop.bannerBackgroundColor) {
				domStyle.set(this.bannerContainer, "backgroundColor", Desktop.bannerBackgroundColor);
				domStyle.set(this.bannerContainer, "backgroundImage", "none");
				domStyle.set(this.applicationName, "textShadow", "none");
				domStyle.set(this.logo, "backgroundColor", Desktop.bannerBackgroundColor);
				domStyle.set(this.logo, "filter", "none");
				domStyle.set(this.logo, "backgroundImage", "none");
			}
			if (!Desktop.theme && Desktop.bannerApplicationNameColor) {
				domStyle.set(this.applicationName, "color", Desktop.bannerApplicationNameColor);
			}
			if (!Desktop.theme && Desktop.bannerMenuColor == "#000000") {
				domClass.add(this.bannerContainer, "lightTheme");
			} else {
				// darkTheme is default
			}

			if (Desktop.theme && Desktop.theme.bannerLogo != "default" && Desktop.theme.bannerLogo != "none") {
				this.bannerLogoImg.src = Desktop.theme.bannerLogo;
			}
			if (Desktop.theme && Desktop.theme.applicationNameLogo != "default" && Desktop.theme.applicationNameLogo != "none") {
				this.applicationLogoImg.src = Desktop.theme.applicationNameLogo;
			}

			/**
			 * End style updates
			 */
			if (Desktop.desktopLoaded) {
				this._onDesktopLoaded();
			} else {
				this.connect(Desktop, "onDesktopLoaded", lang.hitch(this, function() {
					this._onDesktopLoaded();
				}));
			}
			this.connect(Desktop, "onLogin", lang.hitch(this, function() {
				this._onLogin();
			}));
			this.connect(Desktop, "onLogout", lang.hitch(this, function() {
				this._onLogout();
			}));

			// If already logged in, show the application menu
			if (Desktop.connected) {
				this._onLogin();
			}

			this.logExit("postCreate");
		},

		_onDesktopLoaded: function() {
			this.logEntry("_onDesktopLoaded");
			var appName = Desktop.applicationName;
			this.applicationName.innerHTML = appName != "IBM Content Navigator" ? idxHtml.escapeHTML(appName) : "IBM <strong>Content Navigator</strong>";
			if (this.showApplicationMenu) {
				this._createApplicationMenu();
			}
			if (this.showUserSessionContextMenu) {
				this._createUserSessionActionMenu();
			} else {
				domStyle.set(this.userSessionActionsButton.domNode, "display", "none");
			}
			this.logExit("_onDesktopLoaded");
		},

		_onLogout: function() {
			this.logEntry("_onLogout");
			domStyle.set(this.trailerNode, "visibility", "hidden");
			domStyle.set(this.applicationMenu, "visibility", "hidden");
			domStyle.set(this.searchBarArea, "visibility", "hidden");
			this._updateUserNameTooltip();
			this.logExit("_onLogout");
		},

		_onLogin: function() {
			this.logEntry("_onLogin");

			domStyle.set(this.trailerNode, "visibility", "visible");
			domStyle.set(this.searchBarArea, "visibility", "visible");

			if (this.showApplicationMenu)
				domStyle.set(this.applicationMenu, "visibility", "visible");

			var displayName = Desktop.userDisplayName;
			if (!displayName || displayName.length == 0)
				displayName = Desktop.userId;

			this.userSessionActionsButton.set("label", idxHtml.escapeHTML(displayName));
			// Causes the tools action menu to be loaded and displayed
			this.setRepository(Desktop.getDefaultRepository());
			
			this._updateUserNameTooltip();

			this.logExit("_onLogin");
		},

		/**
		 * @deprecated As of 2.0.2. The user display name should be set in the desktop, not in the container or
		 *             repository.
		 */
		setUser: function(repository) {
			if (repository && !Desktop.isContainerLoggedIn()) {
				var userDisplayName = repository.userDisplayName;
				var userId = repository.userId;

				if (userDisplayName)
					this.userSessionActionsButton.set("label", idxHtml.escapeHTML(userDisplayName));
				else
					this.userSessionActionsButton.set("label", idxHtml.escapeHTML(userId));

				if (this.repDisconnectHandler) {
					this.disconnect(this.repDisconnectHandler);
				}
			} else if (Desktop.isContainerLoggedIn()) {
				var container = Desktop.container;
				if (container) {
					var userDisplayName = container.userDisplayName;
					var userId = container.userId;

					if (userDisplayName)
						this.userSessionActionsButton.set("label", idxHtml.escapeHTML(userDisplayName));
					else
						this.userSessionActionsButton.set("label", idxHtml.escapeHTML(userId));

					if (this.repDisconnectHandler) {
						this.disconnect(this.repDisconnectHandler);
					}
				}
			}
		},

		/**
		 * Sets the repository to use for checking actions.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			if (this.repository != repository) {
				this.repository = repository;
				if (this.repository && this.showToolsContextMenu) {
					this._createToolsActionMenu();
				} else {
					domStyle.set(this.toolsActionsButton.domNode, "display", "none");
				}
			} else { // admin desktop has no repository - need to show About in the tools context menu for admin desktop
				if (this.showToolsContextMenu) {
					this._createToolsActionMenu();
				} else {
					domStyle.set(this.toolsActionsButton.domNode, "display", "none");
				}
			}
		},
		
		_updateUserNameTooltip: function() {
			// Update the user session button tooltip with the user Id and full container login id, if available.
			var userSessionButtonTitle;
			var userId = (ecm.model.desktop.connected && ecm.model.desktop.userId) ? idxHtml.escapeHTML(ecm.model.desktop.userId) : null;
			if (userId) {
				var userContainerLogin = ecm.model.desktop.container && ecm.model.desktop.container.connected && ecm.model.desktop.container.fullUserId && idxHtml.escapeHTML(ecm.model.desktop.container.fullUserId);
				if (!userContainerLogin || userId == userContainerLogin) {
					userSessionButtonTitle = string.substitute(ecm.messages.user_session_for, [
						userId
					]);
				} else {
					userSessionButtonTitle = string.substitute(ecm.messages.user_session_for_with_container, [
						userId,
						userContainerLogin
					]);
				}
			} else {
				userSessionButtonTitle = ecm.messages.user_session;
			}
			this.userSessionActionsButton.set("title", userSessionButtonTitle);
			this.userSessionActionsButton.set("alt", userSessionButtonTitle);
		},

		_createUserSessionActionMenu: function(callback, errorback) {
			Desktop.loadMenuActions("BannerUserSessionContextMenu", lang.hitch(this, function(actions) {
				var hasHelpAction = false;

				this._updateUserNameTooltip();

				this.actionMenuItems = [];
				array.forEach(actions, lang.hitch(this, function(action, index) {
					if (action.id == "Help") {
						hasHelpAction = true;
						this.own(aspect.after(this.helpButton, "onClick", function(evt) {
							action.performAction(Desktop.getDefaultRepository());
						}));
					} else if (action.id == "Separator") {
						this.userSessionActionsMenu.addChild(new MenuSeparator());
					} else if (action.isVisible(Desktop.getDefaultRepository(), null, Desktop.getRepositoryTypes())) {
						var disabled = false;
						if (action.id == "ChangePassword" && !this._canEnableChangePassword()) {
							disabled = true;
						}

						var actionMenuItem = new MenuItem({
							label: action.name,
							disabled: disabled,
							onClick: function(evt) {
								var menuItem = registry.getEnclosingWidget(evt.target);
								menuItem.action.performAction(Desktop.getDefaultRepository());
							},
							action: action
						});
						this.userSessionActionsMenu.addChild(actionMenuItem);
						this.actionMenuItems.push(actionMenuItem);
					}
				}));
				if (hasHelpAction) {
					domClass.remove(this.helpButton.domNode, "dijitHidden");
				} else {
					domClass.add(this.helpButton.domNode, "dijitHidden");
				}

				this.own(aspect.after(Desktop, "onChange", lang.hitch(this, "_updateBannerMenuStates"), true));

				domStyle.set(this.userSessionActionsButton.domNode, "display", (this.actionMenuItems instanceof Array) && this.actionMenuItems.length > 0 ? "" : "none");

				if (lang.isFunction(callback))
					callback(this.userSessionActionsMenu);
			}), function(error) {
				if (lang.isFunction(errorback))
					errorback(error);
			});
		},

		_updateMenuState: function(updatedObject) {
			if (updatedObject == Desktop) {
				for ( var i in this.actionMenuItems) {
					var menuItem = this.actionMenuItems[i];
					var canPerform = menuItem.action.canPerformAction(Desktop.getDefaultRepository());
					this._setMenuItemDisabled(menuItem, !canPerform);
				}
			}
		},

		_canEnableChangePassword: function() {
			var repos = Desktop.repositories;
			var enableChangePasswd = false;
			if (repos) {
				for ( var i in repos) {
					var repository = repos[i];
					// Show Change password for only connected CM and OD repositories 
					if (repository.canChangePassword() == true) {
						enableChangePasswd = true;
					}
				}
			}
			return enableChangePasswd;
		},

		_updateChangePasswordState: function(updatedObject) {
			for ( var i in this.actionMenuItems) {
				var menuItem = this.actionMenuItems[i];
				// The Change password action is only available on some repository types
				if (menuItem.action.id == "ChangePassword") {
					this._setMenuItemDisabled(menuItem, !this._canEnableChangePassword());
				}
			}
		},

		_getBoxConnectionStatus: function() {
			var status = false;
			if (ecm.model.desktop.linkedBoxRepositories != null) {
				if (ecm.model.desktop.linkedBoxRepositories.length == 1) {
					var linkedBoxRepo = ecm.model.desktop.linkedBoxRepositories[0];
					if (linkedBoxRepo) {
						this.logDebug("Banner _getBoxConnectionStatus() - userDisplayName: '" + linkedBoxRepo.userDisplayName + "', repositoryId: '" + linkedBoxRepo.repositoryId + "', oAuthClientId: '", linkedBoxRepo.oAuthClientId + "'");
						status = linkedBoxRepo.userDisplayName || ecm.messages.admin_text_unknown;
					} else {
						status = false;
					}
				} else {
					status = ecm.model.desktop.linkedBoxRepositories.length > 0;
				}
			}

			return status;
		},

		_updateDisconnectBoxState: function(updatedObject) {
			for ( var i in this.actionMenuItems) {
				var menuItem = this.actionMenuItems[i];
				if (menuItem.action.id == "DisconnectBox") {
					if (ecm.model.desktop.hasBoxRepositories) {
						var authRepository = ecm.model.desktop.getAuthenticatingRepository();

						if (authRepository && authRepository.type == "box") {
							domStyle.set(menuItem.domNode, "display", "none");
						} else {
							var status = this._getBoxConnectionStatus();
							switch (status) {
							case true:
								this._setMenuItemDisabled(menuItem, false);
								menuItem.set("label", ecm.messages.disconnect_box_accounts);
								break;
							case false:
								this._setMenuItemDisabled(menuItem, true);
								menuItem.set("label", ecm.messages.disconnect_box_account);
								break;
							default:
								this._setMenuItemDisabled(menuItem, false);
								menuItem.set("label", string.substitute(ecm.messages.disconnect_box_account_user, [
									!this.textDir ? status : this.enforceTextDirWithUcc(null, status)
								]));
								break;
							}

							domStyle.set(menuItem.domNode, "display", "");
						}
					} else {
						domStyle.set(menuItem.domNode, "display", "none");
					}
				}
			}
		},

		_updateLogoutState: function(updatedObject) {
			if (Desktop.isSsoTokenPresent()) {
				for ( var i in this.actionMenuItems) {
					var menuItem = this.actionMenuItems[i];
					if (menuItem.action.id == "LogOut") {
						this._setMenuItemDisabled(menuItem, true);
					}
				}
			}
		},

		_updateBannerMenuStates: function(updatedObject) {
			this.logEntry("_updateBannerMenuStates");
			if (updatedObject && updatedObject.isInstanceOf && (updatedObject.isInstanceOf(ecm.model.Desktop) || updatedObject.isInstanceOf(ecm.model.Repository) || updatedObject.isInstanceOf(ecm.model.Container))) {
				this._updateChangePasswordState(updatedObject);
				this._updateDisconnectBoxState(updatedObject);
				this._updateLogoutState(updatedObject);
			}
			this.logExit("_updateBannerMenuStates");
		},

		_createApplicationMenu: function() {
			this.logEntry("_createApplicationMenu");
			Desktop.loadMenuActions("BannerApplicationMenu", lang.hitch(this, function(actions) {
				var self = this;
				if (actions && actions.length > 0) {
					array.forEach(actions, function(action, index) {
						var linkObj = new dijit.form.Button({
							label: action.name,
							onClick: function(evt) {
								var linkObj = registry.getEnclosingWidget(evt.target);
								linkObj.action.performAction(Desktop.getDefaultRepository());
							},
							action: action
						});
						self.applicationMenu.appendChild(linkObj.domNode);
					});
				}
			}));
			this.logExit("_createApplicationMenu");
		},

		/**
		 * Inserts a search dijit in the banner.
		 * 
		 * @param searchBar
		 *            Search dijit to add to the banner.
		 */
		addSearchBar: function(searchBar) {
			if (searchBar && searchBar.domNode && !this.hasSearchBar) {
				this.searchBarArea.appendChild(searchBar.domNode);
				this.hasSearchBar = true;
			}
		},

		/**
		 * Setups the tools action menu.
		 */
		_createToolsActionMenu: function(skipActionIds, callback, errorback) {
			this.logEntry("_createToolsActionMenu");

			if (this.showToolsContextMenu) {
				var childMenuItems = this.toolsActionMenu.getChildren();
				array.forEach(childMenuItems, function(child) {
					child.destroy();
				}, this);
				var self = this;
				Desktop.loadMenuActions("BannerToolsContextMenu", lang.hitch(this, function(actions) {
					self.toolsActionMenuItems = [];
					array.forEach(actions, function(action, index) {
						if (array.indexOf(skipActionIds, action.id) > -1)
							return;

						if (action.id == "Separator") {
							self.toolsActionMenu.addChild(new MenuSeparator());
						} else if (action.subActions && action.subActions.length > 0) {
							var hasVisibleSubItems = false;
							for ( var i in action.subActions) {
								var subaction = action.subActions[i];
								if (subaction.isVisible(self.repository) && array.indexOf(skipActionIds, subaction.id) < 0) {
									hasVisibleSubItems = true;
									break;
								}
							}

							if (hasVisibleSubItems) {
								var subMenu = new Menu({});
								var popupMenuItem = new PopupMenuItem({
									label: action.name,
									popup: subMenu
								});
								popupMenuItem.startup();
								self.toolsActionMenu.addChild(popupMenuItem);

								for ( var i in action.subActions) {
									var subaction = action.subActions[i];
									if (subaction.isVisible(self.repository)) {
										var actionMenuItem = new MenuItem({
											label: subaction.name,
											onClick: function(evt) {
												var menuItem = registry.getEnclosingWidget(evt.target);
												menuItem.action.performAction(self.repository);
											},
											action: subaction
										});

										subMenu.addChild(actionMenuItem);
										self.toolsActionMenuItems.push(actionMenuItem);
									}
								}
							}

						} else {
							if (action.isVisible(self.repository)) {
								var actionMenuItem = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(self.repository);
									},
									action: action
								});

								self.toolsActionMenu.addChild(actionMenuItem);
								self.toolsActionMenuItems.push(actionMenuItem);
							}
						}
					});

					self.own(aspect.after(Desktop, "onChange", lang.hitch(self, "_updateToolsActionMenuState"), true));
					self._updateToolsActionMenuState(Desktop);

					domStyle.set(self.toolsActionsButton.domNode, "display", (self.toolsActionMenuItems instanceof Array) && self.toolsActionMenuItems.length > 0 ? "" : "none");

					if (lang.isFunction(callback))
						callback(self.toolsActionMenu);
				}), function(error) {
					if (lang.isFunction(errorback))
						errorback(error);	
				});
			} else {
				if (lang.isFunction(callback))
					callback(this.toolsActionMenu);				
			}
			this.logExit("_createToolsActionMenu");
		},

		/**
		 * Updates the tools action menu state based on changes to the desktop.
		 * 
		 * @param updateObject
		 *            Handle to the updated object.
		 */
		_updateToolsActionMenuState: function(updatedObject) {
			if (updatedObject == Desktop) {
				for ( var i in this.toolsActionMenuItems) {
					var menuItem = this.toolsActionMenuItems[i];
					var canPerform = menuItem.action.canPerformAction(this.repository);
					this._setMenuItemDisabled(menuItem, !canPerform);
				}
			}
		},

		_setMenuItemDisabled: function(menuItem, disabled) {
			if (menuItem.focusNode) {
				menuItem.set('disabled', disabled);
			}
		}
	});
});

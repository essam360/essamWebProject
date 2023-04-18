/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./ApplicationConfig",
	"./AdminData",
	"./MenuConfig",
	"./ServerConfig",
	"ecm/model/Action",
	"ecm/model/Request",
	"../../LoggerMixin"
], function(declare, lang, array, ApplicationConfig, AdminData, MenuConfig, ServerConfig, Action, Request, LoggerMixin) {

	/**
	 * @name ecm.model.admin.MenuData
	 * @class Represents the admin menu configuration objects needed to add or edit a menu.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var MenuData = declare("ecm.model.admin.MenuData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.MenuData.prototype */

		/**
		 * A {@link ecm.model.admin.MenuConfig} object.
		 */
		menuConfig: null,
		/**
		 * An array of {@link ecm.model.Action}. All the actions that can be used on this menu.
		 */
		defaultActions: null,
		/**
		 * An array of {@link ecm.model.Action}. All the actions configured for this menu.
		 */
		actions: null,
		/**
		 * An array of {@link ecm.model.Action}. All the predefined labels.
		 */
		allLabels: null,
		/**
		 * An array of {@link ecm.model.admin.ServerConfig}.
		 */
		servers: null,

		default_params: {
			application: "navigator"
		},

		/**
		 * Constructor.
		 */
		constructor: function(id, action, _SECURITY_TOPIC) {
			this.logDebug("construct " + id + " MenuData");
			this.id = id;
			this.action = action;
			this._SECURITY_TOPIC = _SECURITY_TOPIC;

			if (!this.servers) {
				this.servers = [];
			}
			if (!this.defaultActions) {
				this.defaultActions = [];
			}
			if (!this.actions) {
				this.actions = [];
			}
		},

		/**
		 * Returns true if this is this is data for a new menu.
		 */
		isNew: function() {
			return (this.action == "new");
		},

		/**
		 * Returns true if this is this is data for a new menu.
		 */
		isCopied: function() {
			return (this.action == "copy");
		},

		/**
		 * Returns true if this is this is data for a menu that is being edited.
		 */
		isEdit: function() {
			return (this.action == "edit");
		},

		/**
		 * Returns boolean indicating if the menu is a default menu.
		 */
		isDefault: function() {
			if (this.isEdit()) {
				var id = this.menuConfig.id;
				if (id.length > "Default".length && id.substring(0, "Default".length) == "Default") {
					return true;
				}
			}
			return false;
		},

		/**
		 * Returns boolean indicating if the menu is a disabled. Default menus are disabled.
		 */
		isDisabled: function() {
			return this.isDefault();
		},

		/**
		 * Returns boolean if the menu is from a plugin.
		 */
		isCustom: function() {
			return this.menuConfig && this.menuConfig.getPluginId();
		},

		/**
		 * Returns boolean if the menu is a toolbar.
		 */
		isToolbar: function() {
			return this.menuConfig && this.menuConfig.isToolbar();
		},

		/**
		 * Returns boolean if the menu is a NMO menu.
		 */
		isOfficeMenu: function() {
			return this.menuConfig && this.menuConfig.getType().indexOf("Office") > -1;
		},

		/**
		 * Returns boolean if the menu supports casacading.
		 */
		isCascadable: function() {
			// Toolbars do not currently cascade.  Context menus do support cascade. NMO menus do not support submenus
			return this.isCustom() || (!this.isToolbar() && !this.isOfficeMenu());
		},

		/**
		 * Returns boolean indicating if the input id is a unique menu id.
		 */
		isUniqueId: function(menuId) {
			var isUnique = true;
			var menus = ecm.model.admin.adminData.menus;
			if (menus) {
				for (var i = 0; i < menus.length; i++) {
					if (menus[i].id == menuId) {
						isUnique = false;
						break;
					}
				}
			}
			return isUnique;
		},

		/**
		 * Loads the menu data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				application: ecm.model.admin.appCfg.id,
				menuId: this.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			}, this.default_params);
			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(serverObjects) { // get list of servers we support
				this.servers = serverObjects;
				Request.invokeService("admin/getAdminMenuData", null, params, lang.hitch(this, function(response) { // onFinished
					// MenuConfig
					if (response.menuConfig) {
						var id = response.menuConfig.id ? response.menuConfig.id : "" + i;
						var menu = MenuConfig.createMenuConfig(id);
						lang.mixin(menu, {
							_attributes: response.menuConfig
						});
						this.menuConfig = menu;
					}

					// All Labels
					if (response.allLabels) {
						var allLabels = [];
						ecm.model.admin.appCfg._loadActions(response.allLabels, allLabels);
						this.allLabels = allLabels;
					}

					// Actions
					if (response.actions) {
						var actions = [];
						ecm.model.admin.appCfg._loadActions(response.actions, actions);
						this.actions = actions;
					}

					// Default Actions
					if (response.defaultActions) {
						var actions = [];
						ecm.model.admin.appCfg._loadActions(response.defaultActions, actions);
						this.defaultActions = actions;
					}

					if (callback) {
						callback(this);
					}
				}));
			}), params);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			if (this.isNew() || this.isCopied()) {
				this.menuConfig._attributes.id = this.menuConfig.id;
				ecm.model.admin.appCfg.addApplicationMenuConfig(this.menuConfig, lang.hitch(this, function() {
					this.action = "edit";
					this.id = this.menuConfig.id;
					ecm.model.admin.adminData.loadMenus();
					if (callback) {
						callback(true);
					}
				}), {
					application: ecm.model.admin.appCfg.id,
					securityTopic: this._SECURITY_TOPIC.category,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				});
			} else {
				ecm.model.admin.appCfg.updateApplicationMenuConfig(this.menuConfig, lang.hitch(this, function() {
					ecm.model.admin.adminData.onChange(this.menuConfig);
					if (callback) {
						callback(true);
					}
				}), {
					application: ecm.model.admin.appCfg.id,
					securityTopic: this._SECURITY_TOPIC.category,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				});
			}
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an menu data object.
	 * 
	 * @param id
	 *            Menu identifier.
	 * @memberof ecm.model.admin.MenuData
	 */
	MenuData.createMenuData = function(id, action, _SECURITY_TOPIC) {
		return new MenuData(id, action, _SECURITY_TOPIC);
	};
	return MenuData;
});

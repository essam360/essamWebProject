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
	"./DesktopConfig",
	"./ViewerConfig",
	"./RepositoryConfig",
	"./MenuConfig",
	"./RedactionReasonConfig",
	"./PluginConfig",
	"./ThemeConfig",
	"./AdminRoleConfig",
	"../../LoggerMixin"
], function(declare, lang, array, ApplicationConfig, DesktopConfig, ViewerConfig, RepositoryConfig, MenuConfig,RedactionReasonConfig, PluginConfig, ThemeConfig, AdminRoleConfig, LoggerMixin) {

	/**
	 * @name ecm.model.admin.AdminData
	 * @class Represents the admin desktop configuration objects needed to add or edit a desktop.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var AdminData = declare("ecm.model.admin.AdminData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.AdminData.prototype */

		/**
		 * An array of {@link ecm.model.admin.RepositoryConfig} objects.
		 */
		repositories: null,
		/**
		 * An array of {@link ecm.model.admin.DesktopConfig} objects.
		 */
		desktops: null,
		/**
		 * An array of {@link ecm.model.admin.ViewerConfig} objects.
		 */
		viewers: null,
		/**
		 * An array of {@link ecm.model.admin.MenuConfig} objects.
		 */
		menus: null,
		/**
		 * An array of {@link ecm.model.admin.RedactionReasonConfig} objects.
		 */
		redactionReasons: null,
		/**
		 * An array of {@link ecm.model.admin.PluginConfig} objects.
		 */
		plugins: null,

		/**
		 * An array of {@link ecm.model.admin.ThemeConfig} objects.
		 */
		themes: null,

		/**
		 * Instance of {@link ecm.model.admin.DesktopConfig} representing the parent of the list of desktops.
		 */
		desktopParent: null,
		/**
		 * Instance of {@link ecm.model.admin.RepositoryConfig} representing the parent of the list of repositories.
		 */
		repositoryParent: null,
		/**
		 * Instance of {@link ecm.model.admin.ViewerConfig} representing the parent of the list of viewers.
		 */
		viewerParent: null,
		/**
		 * Instance of {@link ecm.model.admin.MenuConfig} representing the parent of the list of menus.
		 */
		menuParent: null,
		/**
		 * Instance of {@link ecm.model.admin.PluginConfig} representing the parent of the list of plugins.
		 */
		pluginParent: null,
		/**
		 * Instance of {@link ecm.model.admin.ThemeConfig} representing the parent of the list of themes.
		 */
		themeParent: null,
		
		/**
		 * Instance of {@link ecm.model.admin.AdminRoleConfig} representing the parent of the list of admin roles.
		 */
		adminRolesParent: null,
		
		/**
		 * An array of {@link ecm.model.admin.AdminRoleConfig} objects
		 */
		adminRoles: null,

		/**
		 * Constructor.
		 */
		constructor: function(obj) {
			if (!this.repositories) {
				this.repositories = [];
			}
			if (!this.desktops) {
				this.desktops = [];
			}
			if (!this.viewers) {
				this.viewers = [];
			}
			if (!this.menus) {
				this.menus = [];
			}
			if (!this.plugins) {
				this.plugins = [];
			}
			if (!this.themes) {
				this.themes = [];
			}
			this.desktopParent = DesktopConfig.createDesktopConfig("parent");
			this.repositoryParent = RepositoryConfig.createRepositoryConfig("parent");
			this.viewerParent = ViewerConfig.createViewerConfig("parent");
			this.menuParent = MenuConfig.createMenuConfig("parent");
			this.redactionReasonsParent = RedactionReasonConfig.createRedactionReasonConfig("parent");
			this.pluginParent = PluginConfig.createPluginConfig("parent");
			this.themeParent = ThemeConfig.createThemeConfig("parent");
			this.adminRolesParent = AdminRoleConfig.createAdminRoleConfig("parent");
		},

		/**
		 * This event is invoked whenever the model object changes.
		 * 
		 * @param modelObj
		 *            Model object that has changed.
		 */
		onChange: function(modelObj) {
		},

		/**
		 * This event is invoked whenever the children list changes for the parent.
		 * 
		 * @param parent
		 *            Parent object that has changed.
		 * @param newChildrenList
		 *            The array of updated children.
		 */
		onChildrenChange: function(parent, newChildrenList) {
		},

		/**
		 * Loads the array of desktops.
		 */
		loadDesktops: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getDesktopObjects(lang.hitch(this, function(desktops) {
				this.desktops = desktops;
				this.onChildrenChange(this.desktopParent, this.desktops);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_DESKTOPS
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loads the array of repositories.
		 */
		loadRepositories: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getRepositoryObjects(lang.hitch(this, function(repositories) {
				this.repositories = repositories;
				this.onChildrenChange(this.repositoryParent, this.repositories);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_REPOSITORIES
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loads the array of viewers.
		 */
		loadViewers: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getViewersObjects(lang.hitch(this, function(viewers) {
				this.viewers = viewers;
				this.onChildrenChange(this.viewerParent, this.viewers);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_VIEWERS
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loads the array of plugins.
		 */
		loadPlugins: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getPluginObjects(lang.hitch(this, function(plugins) {
				this.plugins = plugins;
				this.onChildrenChange(this.pluginParent, this.plugins);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loads the array of themes.
		 */
		loadThemes: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getThemeObjects(lang.hitch(this, function(themes) {
				this.themes = themes;
				this.onChildrenChange(this.themeParent, this.themes);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_THEMES
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loads the array of menus.
		 */
		loadMenus: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getMenuObjects(lang.hitch(this, function(menus) {
				this.menus = menus;
				this.onChildrenChange(this.menuParent, this.menus);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_MENUS
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loads the array of redaction reason.
		 */
		loadRedactionReasons: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getRedactionReasonObjects(lang.hitch(this, function(redactionReasons) {
				this.redactionReasons = redactionReasons;
				this.onChildrenChange(this.redactionReasonsParent, this.redactionReasons);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_REDACTION_REASONS
			});
			this.logExit(arguments.callee.nom);
		},
		
		/**
		 * Loads the array of admin roles.
		 */
		loadAdminRoles: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getAdminRoleObjects(lang.hitch(this, function(adminRoles) {
				this.adminRoles = adminRoles;
				this.onChildrenChange(this.adminRolesParent, this.adminRoles);
				if (callback) {
					callback(this);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_ADMIN_ROLES
			});
			this.logExit(arguments.callee.nom);
		},
		
		_noOp: null

	});

	/**
	 * Constructs an desktop data object.
	 * 
	 * @param type
	 *            server type.
	 */
	ecm.model.admin.adminData = new AdminData({
		id: "default",
		name: "Default Desktop"
	});
	return ecm.model.admin.adminData;
});

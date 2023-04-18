/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./AdminData",
	"./DesktopConfig",
	"./ViewerConfig",
	"./RepositoryConfig",
	"./MobileFeatureConfig",
	"./DesktopFeatureConfig",
	"./OfficeCustomCommandConfig",
	"./MenuConfig",
	"./MenuTypeConfig",
	"./DesktopAccessConfig",
	"./DesktopAdminAccessConfig",
	"./InterfaceTextConfig",
	"./ThemeConfig",
	"./PluginConfig",
	"ecm/model/User",
	"ecm/model/UserGroup",
	"ecm/model/Request",
	"ecm/model/Desktop",
	"../../LoggerMixin"
], function(declare, lang, array, AdminData, DesktopConfig, ViewerConfig, RepositoryConfig, MobileFeatureConfig, DesktopFeatureConfig, OfficeCustomCommandConfig, MenuConfig, MenuTypeConfig, DesktopAccessConfig, DesktopAdminAccessConfig, InterfaceTextConfig, ThemeConfig, PluginConfig, User, UserGroup, Request, Desktop, LoggerMixin) {

	/**
	 * @name ecm.model.admin.DesktopData
	 * @class Represents the admin desktop configuration objects needed to add or edit a desktop.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var DesktopData = declare("ecm.model.admin.DesktopData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.DesktopData.prototype */

		/**
		 * An array of {@link ecm.model.admin.RepositoryReadConfig} objects.
		 */
		repositories: null,
		/**
		 * The application server type.
		 */
		appServerType: null,
		/**
		 * An array of {@link ecm.model.admin.ViewerConfig} objects.
		 */
		viewers: null,
		/**
		 * An array of {@link ecm.model.admin.MenuTypeConfig} objects.
		 */
		menuTypes: null,
		/**
		 * An array of {@link ecm.model.admin.MenuConfig} objects.
		 */
		menus: null,
		/**
		 * An array of {@link ecm.model.admin.MobileFeatureConfig} objects.
		 */
		mobileFeatures: null,
		/**
		 * An array of objects containing feature data such as featureClass, id, name, and pluginId.
		 */
		customFeatures: null,
		/**
		 * An array of objects containing layout data such as label, type, value, and layoutClass.
		 */
		availableLayoutItems: null,
		/**
		 * An array of {@link ecm.model.admin.InterfaceTextConfig} objects.
		 */
		applicationSpacesLabelValues: null,
		/**
		 * An array of {@link ecm.model.admin.InterfaceTextConfig} objects.
		 */
		applicationNameLabelValues: null,
		/**
		 * An array of {@link ecm.model.admin.ThemeConfig} objects.
		 */
		availableThemes: null,
		/**
		 * An array of {@link ecm.model.admin.PluginConfig} objects.
		 * 
		 * @since 2.0.3.7
		 */
		availablePlugins: null,
		/**
		 * A {@link ecm.model.admin.DesktopAccessConfig} object. Use the accessControlArray to get to the access control
		 * data.
		 * 
		 * @private
		 */
		_accessConfig: null,
		/**
		 * A {@link ecm.model.admin.DesktopAdminAccessConfig} object. Use the adminAccessControlArray to get to the access control
		 * data.
		 * 
		 * @private
		 */
		_adminAccessConfig: null,		
		/**
		 * An array of object containing id, label, userGroups. The userGroups is an array of {@link ecm.model.User} or
		 * {@link ecm.model.UserGroup},
		 */
		accessControlArray: null,
		/**
		 * @private
		 */
		adminAccessControlArray: null,		
		/**
		 * A {@link ecm.model.admin.DesktopConfig} object.
		 */
		desktopConfig: null,
		/**
		 * Contains action value of "edit", "new", or "copy".
		 */
		action: "edit",
		/**
		 * A object holding the common used parameters such as application. More parameters can be added later.
		 */
		default_params: {
			application: "navigator"
		},

		/**
		 * An array of {@link ecm.model.admin.OfficeCustomCommandConfig} objects.
		 */
		officeCustomCommands: null,

		/**
		 * Constructor.
		 */
		constructor: function(id, action, _SECURITY_TOPIC) {
			this.logDebug("construct " + id + " DesktopData");
			this.id = id;
			this.action = action;

			if (!this.repositories) {
				this.repositories = [];
			}
			if (!this.viewers) {
				this.viewers = [];
			}
			if (!this.menus) {
				this.menus = [];
			}
			if (!this.menuTypes) {
				this.menuTypes = [];
			}
			if (!this.mobileFeatures) {
				this.mobileFeatures = [];
			}
			if (!this.customFeatures) {
				this.customFeatures = [];
			}
			if (!this.availableLayoutItems) {
				this.availableLayoutItems = [];
			}
			if (!this.applicationSpacesLabelValues) {
				this.applicationSpacesLabelValues = [];
			}
			if (!this.applicationNameLabelValues) {
				this.applicationNameLabelValues = [];
			}
			if (!this.availableThemes) {
				this.availableThemes = [];
			}
			if (!this.availablePlugins) {
				this.availablePlugins = [];
			}
			if (!this.officeCustomCommands) {
				this.officeCustomCommands = [];
			}

			if (ecm.model.desktop.view != null) {
				this.default_params.view = ecm.model.desktop.view;
			}
		},

		/**
		 * Returns true if this is the admin desktop.
		 */
		isAdmin: function() {
			return (this.id && this.id == "admin");
		},

		/**
		 * Returns true if this is this is data for a new desktop.
		 */
		isNew: function() {
			return (this.action == "new");
		},

		/**
		 * Returns true if this is this is data for a new desktop.
		 */
		isCopied: function() {
			return (this.action == "copy");
		},

		/**
		 * Returns true if this is this is data for a desktop that is being edited.
		 */
		isEdit: function() {
			return (this.action == "edit");
		},

		/**
		 * Returns the RepositoryConfig with the input id.
		 */
		getRepositoryConfig: function(repId) {
			if (this.repositories) {
				// Repository objects used for admin configuration append "_CIWEBADMIN" to the repository id.
				if (repId.indexOf("_CIWEBADMIN") != -1) {
					repId = repId.replace("_CIWEBADMIN", "");
				}
				for ( var i in this.repositories) {
					if (this.repositories[i].id == repId) {
						return this.repositories[i];
					}
				}
			}
			return null;
		},

		/**
		 * Return array of MenuConfig with the input menu type.
		 */
		getMenusWithType: function(menuType) {
			var array = [];
			for (var i = 0; i < this.menus.length; i++) {
				var menu = this.menus[i];
				if (!menuType || menu.getType() == menuType) {
					array.push(menu);
				}
			}
			return array;
		},

		/**
		 * Returns boolean indicating if the input id is a unique desktop id.
		 */
		isUniqueId: function(desktopId) {
			var isUnique = true;
			var desktopId = desktopId ? desktopId.toLowerCase() : desktopId;
			var desktops = ecm.model.admin.adminData.desktops;
			if (desktops) {
				for (var i = 0; i < desktops.length; i++) {
					var desktop = desktops[i];
					if (desktop.id.toLowerCase() == desktopId && this.desktopConfig.id.toLowerCase() != desktopId) {
						isUnique = false;
						break;
					}
				}
			}
			return isUnique;
		},

		/**
		 * Clears the access control users and groups in the access control structure.
		 */
		clearAccessControlUsersGroups: function() {
			array.forEach(this.accessControlArray, lang.hitch(this, function(accessControlItem) { // No acccess and allow are the 2 permissions for now
				accessControlItem.usersGroups = [];
			}));
		},
		
		/**
		 * Clears the administration access control users and groups in the access control structure.
		 */
		clearAdminAccessControlUsersGroups: function() {
			array.forEach(this.adminAccessControlArray, lang.hitch(this, function(accessControlItem) { // No acccess and allow are the 2 permissions for now
				accessControlItem.usersGroups = [];
			}));
		},		

		/**
		 * Loads the accessControlArray with the input deny users, allow users, & allow groups.
		 * 
		 * @private
		 */
		_loadAccessControlUsersAndGroupsStructure: function(denyUsers, allowUsers, allowGroups) {
			for ( var j in this.accessControlArray) {
				var accessControlItem = this.accessControlArray[j];
				accessControlItem.usersGroups = [];
				if (accessControlItem.id == "NO_ACCESS") {
					if (denyUsers) {
						if (denyUsers instanceof Array) {
							for (var i = 0; i < denyUsers.length; i++) {
								var denyUser = denyUsers[i];
								var id = denyUser.id ? denyUser.id : denyUser;
								var shortName = denyUser.shortName ? denyUser.shortName : id;
								var displayName = denyUser.displayName ? denyUser.displayName : id;
								accessControlItem.usersGroups.push(new User({
									id: id,
									name: shortName,
									shortName: shortName,
									displayName: displayName
								}));
							}
						} else {
							var shortName = denyUsers;
							accessControlItem.usersGroups.push(new User({
								id: shortName,
								name: shortName,
								shortName: shortName,
								displayName: shortName
							}));
						}
					}
				} else if (accessControlItem.id == "ALLOW") {
					if (allowUsers) {
						if (allowUsers instanceof Array) {
							for (var i = 0; i < allowUsers.length; i++) {
								var allowUser = allowUsers[i];
								var id = allowUser.id ? allowUser.id : allowUser;
								var shortName = allowUser.shortName ? allowUser.shortName : id;
								var displayName = allowUser.displayName ? allowUser.displayName : id;
								accessControlItem.usersGroups.push(new User({
									id: id,
									name: shortName,
									shortName: shortName,
									displayName: displayName
								}));
							}
						} else {
							var shortName = allowUsers;
							accessControlItem.usersGroups.push(new User({
								id: shortName,
								name: shortName,
								shortName: shortName,
								displayName: shortName
							}));
						}
					}
					if (allowGroups) {
						if (allowGroups instanceof Array) {
							for (var i = 0; i < allowGroups.length; i++) {
								var allowGroup = allowGroups[i];
								var id = allowGroup.id ? allowGroup.id : allowGroup;
								var shortName = allowGroup.shortName ? allowGroup.shortName : id;
								var displayName = allowGroup.displayName ? allowGroup.displayName : id;
								accessControlItem.usersGroups.push(new UserGroup({
									id: id,
									name: shortName,
									shortName: shortName,
									displayName: displayName
								}));
							}
						} else {
							var shortName = allowGroups;
							accessControlItem.usersGroups.push(new UserGroup({
								id: shortName,
								name: shortName,
								shortName: shortName,
								displayName: shortName
							}));
						}
					}
				}
			}
		},
		/**
		 * Loads the Administration accessControlArray with the input deny users, allow users, & allow groups.
		 * 
		 * @private
		 */
		_loadAdminAccessControlUsersAndGroupsStructure: function(denyUsers, allowUsers, allowGroups) {
			for ( var j in this.adminAccessControlArray) {
				var accessControlItem = this.adminAccessControlArray[j];
				accessControlItem.usersGroups = [];
				if (accessControlItem.id == "NO_ACCESS") {
					if (denyUsers) {
						if (denyUsers instanceof Array) {
							for (var i = 0; i < denyUsers.length; i++) {
								var denyUser = denyUsers[i];
								var id = denyUser.id ? denyUser.id : denyUser;
								var shortName = denyUser.shortName ? denyUser.shortName : id;
								var displayName = denyUser.displayName ? denyUser.displayName : id;
								accessControlItem.usersGroups.push(new User({
									id: id,
									name: shortName,
									shortName: shortName,
									displayName: displayName
								}));
							}
						} else {
							var shortName = denyUsers;
							accessControlItem.usersGroups.push(new User({
								id: shortName,
								name: shortName,
								shortName: shortName,
								displayName: shortName
							}));
						}
					}
				} else if (accessControlItem.id == "ALLOW") {
					if (allowUsers) {
						if (allowUsers instanceof Array) {
							for (var i = 0; i < allowUsers.length; i++) {
								var allowUser = allowUsers[i];
								var id = allowUser.id ? allowUser.id : allowUser;
								var shortName = allowUser.shortName ? allowUser.shortName : id;
								var displayName = allowUser.displayName ? allowUser.displayName : id;
								accessControlItem.usersGroups.push(new User({
									id: id,
									name: shortName,
									shortName: shortName,
									displayName: displayName
								}));
							}
						} else {
							var shortName = allowUsers;
							accessControlItem.usersGroups.push(new User({
								id: shortName,
								name: shortName,
								shortName: shortName,
								displayName: shortName
							}));
						}
					}
					if (allowGroups) {
						if (allowGroups instanceof Array) {
							for (var i = 0; i < allowGroups.length; i++) {
								var allowGroup = allowGroups[i];
								var id = allowGroup.id ? allowGroup.id : allowGroup;
								var shortName = allowGroup.shortName ? allowGroup.shortName : id;
								var displayName = allowGroup.displayName ? allowGroup.displayName : id;
								accessControlItem.usersGroups.push(new UserGroup({
									id: id,
									name: shortName,
									shortName: shortName,
									displayName: displayName
								}));
							}
						} else {
							var shortName = allowGroups;
							accessControlItem.usersGroups.push(new UserGroup({
								id: shortName,
								name: shortName,
								shortName: shortName,
								displayName: shortName
							}));
						}
					}
				}
			}
		},
		/**
		 * Set the access control repository type.
		 */
		setAccessControlRepositoryType: function(repositoryType) {
			this._accessConfig.setRepositoryType(repositoryType);
		},

		/**
		 * Set the administration access control repository type.
		 * 
		 * @since 3.0.3
		 */
		setAdminAccessControlRepositoryType: function(repositoryType) {
			this._adminAccessConfig.setRepositoryType(repositoryType);
		},
		/**
		 * Updates the access control config with the array data before saving it to the mid-tier. Called before saving
		 * the data.
		 * 
		 * @private
		 */
		_updateAccessControlConfig: function() {
			// Load model with access control user & groups
			var denyUsers = [];
			var users = [];
			var groups = [];
			var userOrGroup;
			for ( var j in this.accessControlArray) {
				var accessControlItem = this.accessControlArray[j];
				if (accessControlItem.id == "NO_ACCESS") {
					for (var i = 0; i < accessControlItem.usersGroups.length; i++) {
						userOrGroup = accessControlItem.usersGroups[i];
						if (userOrGroup.hasUser) { // group
							// We don't allow denying access to a group.
							// When the user selected this group, the access control was set to allow.
							groups.push(userOrGroup.id);
						} else {
							denyUsers.push(userOrGroup.id);
						}
					}
				} else if (accessControlItem.id == "ALLOW") {
					for (var i = 0; i < accessControlItem.usersGroups.length; i++) {
						userOrGroup = accessControlItem.usersGroups[i];
						if (userOrGroup.hasUser) { // group
							groups.push(userOrGroup.id);
						} else {
							users.push(userOrGroup.id);
						}
					}
				}
			}
			this._accessConfig.setDenyUsers(denyUsers);
			this._accessConfig.setUsers(users);
			this._accessConfig.setGroups(groups);
		},

		/**
		 * Updates the administration access control config with the array data before saving it to the mid-tier. Called before saving
		 * the data.
		 * 
		 * @private
		 */
		_updateAdminAccessControlConfig: function() {
			// Load model with access control user & groups
			var denyUsers = [];
			var denyUserNames = [];
			var users = [];
			var userNames = [];
			var groups = [];
			var groupNames = [];
			var userOrGroup;
			for ( var j in this.adminAccessControlArray) {
				var accessControlItem = this.adminAccessControlArray[j];
				if (accessControlItem.id == "NO_ACCESS") {
					for (var i = 0; i < accessControlItem.usersGroups.length; i++) {
						userOrGroup = accessControlItem.usersGroups[i];
						if (userOrGroup.hasUser) { // group
							// We don't allow denying access to a group.
							// When the user selected this group, the access control was set to allow.
							groups.push(userOrGroup.id);
							groupNames.push(userOrGroup.displayName);
						} else {
							denyUsers.push(userOrGroup.id);
							denyUserNames.push(userOrGroup.displayName);
						}
					}
				} else if (accessControlItem.id == "ALLOW") {
					for (var i = 0; i < accessControlItem.usersGroups.length; i++) {
						userOrGroup = accessControlItem.usersGroups[i];
						if (userOrGroup.hasUser) { // group
							groups.push(userOrGroup.id);
							groupNames.push(userOrGroup.displayName);
						} else {
							users.push(userOrGroup.id);
							userNames.push(userOrGroup.displayName);
						}
					}
				}
			}
			this._adminAccessConfig.setDenyUsers(denyUsers);
			this._adminAccessConfig.setDenyUserNames(denyUserNames);
			this._adminAccessConfig.setUsers(users);
			this._adminAccessConfig.setUserNames(userNames);
			this._adminAccessConfig.setGroups(groups);
			this._adminAccessConfig.setGroupNames(groupNames);
		},
		/**
		 * Calls the mid-tier to load the p8 deny users, allow users, & allow groups. Assumes the user is already logged
		 * on to the repository.
		 */
		loadDesktopAccessConfig: function(type, callback) {
			this._accessConfig.getDesktopAccess(type, lang.hitch(this, function(response) {
				this._loadAccessControlUsersAndGroupsStructure(response.denyUsers, response.users, response.groups);
				if (callback) {
					callback();
				}
			}), null, {
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
			});
		},

		/**
		 * Calls the mid-tier to load the p8 deny users, allow users, & allow groups for desktop administration. Assumes the user is already logged
		 * on to the repository.
		 */
		loadDesktopAdminAccessConfig: function(type, callback) {
			this._adminAccessConfig.getDesktopAdminAccess(type, lang.hitch(this, function(response) {
				this._loadAdminAccessControlUsersAndGroupsStructure(response.denyUsers, response.users, response.groups);
				if (callback) {
					callback();
				}
			}), null, {
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
			});
		},

		/**
		 * Calls the mid-tier to load the application spaces for the input repository id.
		 */
		loadProcessApplicationSpaces: function(repositoryId, callback) {
			Request.postService("getProcessApplicationSpaces", "p8", {
				mode: "admin",
				repositoryId: repositoryId + "_CIWEBADMIN", // Use the admin repository connection for this operation.
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
			}, null, null, lang.hitch(this, function(response) {
				var items = [];
				array.forEach(response.datastore.items, lang.hitch(this, function(entry) {
					items.push({
						value: repositoryId + entry.name,
						name: entry.name,
						label: entry.description
					});
				}));
				if (callback) {
					callback(items);
				}
			}));
		},

		/**
		 * Loads the desktop data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			ecm.model.admin.appCfg.getMenuTypeObjects(lang.hitch(this, function(menuTypes) {
				this.menuTypes = menuTypes;

				var params = lang.mixin({
					desktopId: this.id,
					userid: ecm.model.desktop.userId
				}, this.default_params);
				Request.invokeService("admin/getAdminDesktopData", null, params, lang.hitch(this, function(response) { // onFinished
					// DesktopConfig
					if (response.desktopConfig) {
						var id = response.desktopConfig.id ? response.desktopConfig.id : "" + i;
						var desktop = DesktopConfig.createDesktopConfig(id);
						lang.mixin(desktop, {
							_attributes: response.desktopConfig
						});
						this.desktopConfig = desktop;
					}

					if (response.appServerType) {
						this.appServerType = response.appServerType;
					}

					// Access control
					this.accessControlArray = [];
					this.accessControlArray.push({
						id: "NO_ACCESS",
						label: ecm.messages.no_access_privilege,
						usersGroups: []
					});
					this.accessControlArray.push({
						id: "ALLOW",
						label: ecm.messages.allow,
						usersGroups: []
					});
					if (response.accessConfig) {
						var id = response.accessConfig.id ? response.accessConfig.id : "" + i;
						var accessConfig = DesktopAccessConfig.createDesktopAccessConfig(id);
						lang.mixin(accessConfig, {
							_attributes: response.accessConfig
						});
						this._accessConfig = accessConfig;
						this._loadAccessControlUsersAndGroupsStructure(accessConfig.getDenyUsers(), accessConfig.getUsers(), accessConfig.getGroups());
					}
					
					// Admin Access control
					this.adminAccessControlArray = [];
					this.adminAccessControlArray.push({
						id: "NO_ACCESS",
						label: ecm.messages.no_access_privilege,
						usersGroups: []
					});
					this.adminAccessControlArray.push({
						id: "ALLOW",
						label: ecm.messages.allow,
						usersGroups: []
					});
					if (response.adminAccessConfig) {
						var id = response.adminAccessConfig.id ? response.adminAccessConfig.id : "" + i;
						var adminAccessConfig = DesktopAdminAccessConfig.createDesktopAdminAccessConfig(id);
						lang.mixin(adminAccessConfig, {
							_attributes: response.adminAccessConfig
						});
						this._adminAccessConfig = adminAccessConfig;
						this._loadAdminAccessControlUsersAndGroupsStructure(adminAccessConfig.getDenyUsers(), adminAccessConfig.getUsers(), adminAccessConfig.getGroups());
					}					

					// Viewers
					if (response.viewers) {
						var viewersObjects = [];
						for ( var i in response.viewers) {
							var entry = response.viewers[i];
							var id = entry.id ? entry.id : "" + i;
							var viewer = ViewerConfig.createViewerConfig(id);
							lang.mixin(viewer, {
								_attributes: entry
							});
							if (viewer.getName()) { // include only viewers with a name
								viewersObjects.push(viewer);
							}
						}
						this.viewers = viewersObjects;
					}

					// Repositories
					if (response.repositories) {
						var repositoryObjects = [];
						for ( var i in response.repositories) {
							var entry = response.repositories[i];
							var id = entry.id ? entry.id : "" + i;
							var repository = RepositoryConfig.createRepositoryConfig(id);
							lang.mixin(repository, {
								_attributes: entry
							});
							if (repository.name) { // include only repositories with a name
								repositoryObjects.push(repository);
							}
						}
						this.repositories = repositoryObjects;
					}

					// Mobile Features
					if (response.mobileFeatures) {
						var featureObjects = [];
						for ( var i in response.mobileFeatures) {
							var entry = response.mobileFeatures[i];
							var id = entry.id ? entry.id : "" + i;
							if (this.isCopied() && entry.id) {
								var ids = entry.id.split(".");
								if (ids && ids.length == 2)
									id = ids[1];
							}
							var feature = MobileFeatureConfig.createMobileFeatureConfig(id);
							lang.mixin(feature, {
								_attributes: entry
							});
							featureObjects.push(feature);
						}
						this.mobileFeatures = featureObjects;
					}

					// Desktop Features
					if (response.desktopFeatures) {
						var featureObjects = [];
						for ( var i in response.desktopFeatures) {
							var entry = response.desktopFeatures[i];
							var id = entry.id ? entry.id : "" + i;
							var feature = DesktopFeatureConfig.createDesktopFeatureConfig(id);
							lang.mixin(feature, {
								_attributes: entry
							});
							featureObjects.push(feature);
						}
						this.desktopFeatures = featureObjects;
					}

					// Custom office commands
					if (response.officeCustomCommands) {
						var officeCommandObjects = [];
						for ( var i in response.officeCustomCommands) {
							var entry = response.officeCustomCommands[i];
							var id = entry.id ? entry.id : "" + i;
							if (this.isCopied() && entry.id) {
								var ids = entry.id.split(".");
								if (ids && ids.length == 2)
									id = ids[1];
							}
							var command = OfficeCustomCommandConfig.createOfficeCustomCommandConfig(id);
							lang.mixin(command, {
								_attributes: entry
							});
							officeCommandObjects.push(command);
						}
						this.officeCustomCommands = officeCommandObjects;
					}

					// Menus
					if (response.menus) {
						var menuObjects = [];
						for ( var i in response.menus) {
							var entry = response.menus[i];
							var id = entry.id ? entry.id : "" + i;
							var menu = MenuConfig.createMenuConfig(id);
							lang.mixin(menu, {
								_attributes: entry
							});
							if (menu.getName()) { // include only menuObjects with a name
								menuObjects.push(menu);
							}
						}
						this.menus = menuObjects;
					}

					// Features and layouts
					if (response.listLayoutConfig) {
						this.customFeatures = response.listLayoutConfig.features;

						var items = response.listLayoutConfig.layouts.items;
						var defaults = {};
						for (var i = 0; i < items.length; i++) {
							if (items[i].type == "default")
								defaults[items[i].value] = items[i].value;
						}
						this.availableLayoutItems = array.filter(items, function(entry) {
							return (entry.type == "default" || (entry.type == "custom" && !defaults[entry.value]));
						});
					}

					// Application Space Label Values
					if (response.listLayoutConfig) {
						var interfaceTextsObjects = [];
						var list = response.applicationSpacesLabelValues;
						for ( var i in list) {
							var entry = list[i];
							var id = entry.id ? entry.id : "" + i;
							var interfaceText = ecm.model.admin.InterfaceTextConfig.createInterfaceTextConfig(id);
							lang.mixin(interfaceText, {
								_attributes: entry
							});
							interfaceTextsObjects.push(interfaceText);
						}
						this.applicationSpacesLabelValues = interfaceTextsObjects;
					}
					
					// Application Name Label
					if (response.applicationNameLabelValues) {
						var interfaceTextsObjects = [];
						var list = response.applicationNameLabelValues;
						for ( var i in list) {
							var entry = list[i];
							var id = entry.id ? entry.id : "" + i;
							var interfaceText = ecm.model.admin.InterfaceTextConfig.createInterfaceTextConfig(id);
							lang.mixin(interfaceText, {
								_attributes: entry
							});
							interfaceTextsObjects.push(interfaceText);
						}
						this.applicationNameLabelValues = interfaceTextsObjects;
					}

					// Themes
					if (response.themes) {
						var themes = [];
						for ( var i in response.themes) {
							var entry = response.themes[i];
							var id = entry.id ? entry.id : "" + i;
							var theme = ThemeConfig.createThemeConfig(id);
							lang.mixin(theme, {
								_attributes: entry
							});
							themes.push(theme);
						}

						this.themes = themes;
					}

					// Plugins
					if (response.availablePlugins) {
						var plugins = [];
						for ( var i in response.availablePlugins) {
							var entry = response.availablePlugins[i];
							var id = entry.id ? entry.id : "" + i;
							var plugin = PluginConfig.createPluginConfig(id);
							lang.mixin(plugin, {
								_attributes: entry
							});
							plugins.push(plugin);
						}

						this.availablePlugins = plugins;
					}

					if (response.settings) {
						this.settings = {};
						lang.mixin(this.settings, response.settings);
					}

					if (response.timezones) {
						this.timezones = response.timezones;
					}

					if (callback) {
						callback(this);
					}
				}));
			}), null, {
				userid: ecm.model.desktop.userId
			});
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			var isDefault = this.desktopConfig.getDefault() == "Yes";

			var postObj = {
				"desktopConfig": this.desktopConfig._attributes
			};
			this._updateAccessControlConfig();
			
			if (this._accessConfig) {
				postObj.desktopAccessConfig = this._accessConfig._attributes;
			}
			if (!ecm.model.desktop.isDesktopAdminUser && this._adminAccessConfig  &&
					(this._adminAccessConfig.isLoaded() || 
					((this._adminAccessConfig.getRepositoryType() == "p8" && this.isNew()) && this.desktopConfig.isRoleBasedAdminEnabled()) ||
					(this._adminAccessConfig.getRepositoryType() != "p8" &&  this.desktopConfig.isRoleBasedAdminEnabled())
					)){
				
				this._updateAdminAccessControlConfig();
				postObj.desktopAdminAccessConfig = this._adminAccessConfig._attributes;
			} 
			if (!this.isAdmin()) {
				if (this.desktopConfig.getMobileFeatures()) {
					postObj.mobileFeaturesInterfaceTextData = this.desktopConfig.getMobileFeaturesInterfaceText();
					postObj.mobileFeaturesData = this.desktopConfig.getMobileFeatures();
				}
				postObj.applicationSpacesLabelValues = this.desktopConfig.getApplicationSpacesLabelValues();
				postObj.applicationNameLabelValues = this.desktopConfig.getApplicationNameLabelValues();

				// desktop features config:
				if (this.desktopConfig.getDesktopFeatures()) {
					postObj.desktopFeaturesData = this.desktopConfig.getDesktopFeatures();
				}

				// Custom office buttons
				if (this.desktopConfig.getOfficeCustomCommands()) {
					postObj.officeCustomCommandsData = this.desktopConfig.getOfficeCustomCommands();
				}
			}
			var postData = JSON.stringify(postObj, null);

			if (this.isNew() || this.isCopied()) {
				this._accessConfig.id = this.desktopConfig.id;
				this._adminAccessConfig.id = this.desktopConfig.id;
				var params = lang.mixin({
					desktopId: this.desktopConfig.id,
					"action": "add",
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				}, this.default_params);
				Request.postService("admin/updateAdminDesktopData", null, params, "text/json", postData, lang.hitch(this, function(response) { // onFinished
					this.action = "edit";
					this.id = this.desktopConfig.id;
					this.desktopConfig.setApplicationSpaceLabels(this.desktopConfig.getApplicationSpacesLabelIds());
					this.desktopConfig.setApplicationNameLabels(this.desktopConfig.getApplicationNameLabelIds());

					ecm.model.admin.adminData.loadDesktops();
					if (callback) {
						callback(isDefault ? ecm.messages.admin_default_desktop_refresh_message : null);
					}
				}));
			} else {
				var params = lang.mixin({
					desktopId: this.desktopConfig.id,
					"action": "edit",
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				}, this.default_params);
				Request.postService("admin/updateAdminDesktopData", null, params, "text/json", postData, lang.hitch(this, function(response) { // onFinished
					this.desktopConfig.setApplicationSpaceLabels(this.desktopConfig.getApplicationSpacesLabelIds());
					this.desktopConfig.setApplicationNameLabels(this.desktopConfig.getApplicationNameLabelIds());
					
					if (isDefault) {
						ecm.model.admin.adminData.loadDesktops();
					} else {
						ecm.model.admin.adminData.onChange(this.desktopConfig);
					}
					if (callback) {
						var msg = isDefault ? ecm.messages.admin_default_desktop_refresh_message : null;
						if (!msg && this.id == Desktop.id) {
							msg = ecm.messages.admin_desktop_refresh_message;
						}
						callback(msg);
					}
				}));
			}
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an desktop data object.
	 * 
	 * @param type
	 *            server type.
	 * @memberof ecm.model.admin.DesktopData
	 */
	DesktopData.createDesktopData = function(id, action, _SECURITY_TOPIC) {
		return new DesktopData(id, action, _SECURITY_TOPIC);
	};
	return DesktopData;
});

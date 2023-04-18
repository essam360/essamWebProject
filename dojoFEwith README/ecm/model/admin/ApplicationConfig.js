/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define(
		[ "dojo/_base/declare", "dojo/_base/lang", "dojo/_base/json",
				"../Action", "./_ConfigurationObject", "./PluginConfig",
				"./IconConfig", "./IconStatusConfig", "./SettingsConfig",
				"./ViewerConfig", "./ViewerDefConfig",
				"./ViewerContentTypeConfig", "./ViewerMappingConfig",
				"./ServerConfig", "./DesktopConfig", "./RepositoryConfig",
				"./MenuConfig", "./MenuTypeConfig", "./InterfaceTextConfig",
				"./LocaleConfig", "./InterfaceTextLocaleConfig",
				"./InterfaceTextLabelConfig", "./MobileFeatureConfig",
				"./IdLabelConfig", "./ThemeConfig", "./AccessRoleConfig",
				"./RedactionReasonConfig", "./AdminRoleConfig" ],

		function(declare, lang, dojojson, Action, _ConfigurationObject,
				PluginConfig, IconConfig, IconStatusConfig, SettingsConfig,
				ViewerConfig, ViewerDefConfig, ViewerContentTypeConfig,
				ViewerMappingConfig, ServerConfig, DesktopConfig,
				RepositoryConfig, MenuConfig, MenuTypeConfig,
				InterfaceTextConfig, LocaleConfig, InterfaceTextLocaleConfig,
				InterfaceTextLabelConfig, MobileFeatureConfig, IdLabelConfig,
				ThemeConfig, AccessRoleConfig, RedactionReasonConfig, AdminRoleConfig) {

			/**
			 * @name ecm.model.admin.ApplicationConfig
			 * @class Represents the configuration information for an
			 *        application. This information identifies the following
			 *        components that are used for the application:
			 *        <ul>
			 *        <li>Plug-ins</li>
			 *        <li>Desktops</li>
			 *        <li>Repositories</li>
			 *        <li>Menus</li>
			 *        <li>Viewers</li>
			 *        <li>Servers</li>
			 *        </ul>
			 *        <p>
			 *        In addition, this class maintains the object expiration
			 *        time and thread sleep time for the application.
			 *        </p>
			 * @augments ecm.model.admin._ConfigurationObject
			 * @public
			 */
			var ApplicationConfig = declare(
					"ecm.model.admin.ApplicationConfig",
					[ _ConfigurationObject ],
					{
						/** @lends ecm.model.admin.ApplicationConfig.prototype */

						/**
						 * @private property name of plugin definitions defined
						 *          in this application object.
						 */
						PLUGINS : "plugins",

						/**
						 * @private property name of the theme definitions
						 *          defined in this application object.
						 */
						THEMES : "themes",

						/**
						 * @private property name of desktop definitions defined
						 *          in this application object.
						 */
						DESKTOPS : "desktops",

						/**
						 * @private property name of repository definitions
						 *          defined in this application object.
						 */
						REPOSITORIES : "repositories",

						/**
						 * @private property name of menu definitions defined in
						 *          this application object.
						 */
						MENUS : "menus",

						/**
						 * @private property name of redaction reason
						 *          definitions defined in this application
						 *          object.
						 */
						REDACTION_REASONS : "redactionReasons",

						/**
						 * @private property name of viewer definitions defined
						 *          in this application object.
						 */
						VIEWERS : "viewers",

						/**
						 * @private property name of servers definitions defined
						 *          in this application object.
						 */
						SERVERS : "servers",

						/**
						 * @private property name that holds the default desktop
						 *          name.
						 */
						DESKTOP : "desktop",

						/**
						 * @private property name that holds the child plugins
						 *          id.
						 */
						CHILD_PLUGINS : "childPlugins",
						
						/**
						 * @private Admin roles id
						 */
						ADMIN_ROLES: "adminRoles",

						/**
						 * @private property name that holds the object
						 *          expiration time in cache.
						 */
						OBJECT_EXPIRATION : "objectExpiration",

						/**
						 * @private property name that holds the thread sleeping
						 *          time in second.
						 */
						THREAD_SLEEP_TIME : "threadSleepTime",

						/**
						 * @private property name that holds the application
						 *          version number.
						 */
						APPLICATION_VERSION : "applicationVersion",

						/**
						 * @private a boolean value indicate if an application
						 *          definition has been retrived from server.
						 */
						_initialized : false,

						/**
						 * @private property name that holds the menus security
						 *          category name.
						 */
						SECURITY_CATEGORY_MENUS : "menus.menus",

						/**
						 * @private property name that holds the redaction
						 *          reason security category name.
						 */
						SECURITY_CATEGORY_REDACTION_REASONS : "redactionReasons.redactionReasons",

						/**
						 * @private property name that holds the repositories
						 *          security category name.
						 */
						SECURITY_CATEGORY_REPOSITORIES : "repos.repos",

						/**
						 * @private property name that holds the desktops
						 *          security category name.
						 */
						SECURITY_CATEGORY_DESKTOPS : "desktop.desktop",

						/**
						 * @private property name that holds the roles security
						 *          category name.
						 */
						SECURITY_CATEGORY_ROLES : "roles.roles",

						/**
						 * @private property name that holds the filenet
						 *          security category name.
						 */
						SECURITY_CATEGORY_FILENET : "filenet.filenet",

						/**
						 * @private property name that holds the ondemand
						 *          security category name.
						 */
						SECURITY_CATEGORY_ONDEMAND : "ondemand.ondemand",

						/**
						 * @private property name that holds the themes security
						 *          category name.
						 */
						SECURITY_CATEGORY_THEMES : "theme.theme",

						/**
						 * @private property name that holds the sync security
						 *          category name.
						 */
						SECURITY_CATEGORY_SYNC : "sync.sync",

						/**
						 * @private property name that holds the viewers
						 *          security category name.
						 */
						SECURITY_CATEGORY_VIEWERS : "viewers.viewers",

						/**
						 * @private property name that holds the view one
						 *          security category name.
						 */
						SECURITY_CATEGORY_VIEWONE : "viewone.viewone",

						/**
						 * @private property name that holds the icon mapping
						 *          security category name.
						 */
						SECURITY_CATEGORY_ICONMAPPING : "iconMapping.iconMapping",

						/**
						 * @private property name that holds the plugins
						 *          security category name.
						 */
						SECURITY_CATEGORY_PLUGINS : "plugins.plugins",
						
						/**
						 * @private Admin roles security topic
						 */
						SECURITY_CATEGORY_ADMIN_ROLES: "rba.rba",

						/**
						 * Constructs a application configuration object and its
						 * base class is
						 * {@link ecm.model.admin._ConfigurationObject}.
						 * 
						 * @param id
						 *            The configuration object id
						 * @param name
						 *            The configuration object name (ie,
						 *            "ApplicationConfig" or "DesktopConfig")
						 * @param action
						 *            The parameter is omitted therefore using
						 *            default "admin/configuration".
						 */
						constructor : function(id, name) {
							this.logDebug("ApplicationConfig constructor");
							this.serverObjects = [];
						},

						/**
						 * Gets the default desktop name.
						 * 
						 * @return A string value of desktop name.
						 */
						getDesktopName : function() {
							return this.getValue(this.DESKTOP);
						},

						/**
						 * Gets the object expiration time, unit in minutes.
						 * This value controls when the object will be removed
						 * from the Cache object in server side.
						 * 
						 * @return a string value of expiration time unit in
						 *         minute.
						 */
						getObjectExpiration : function() {
							return this.getValue(this.OBJECT_EXPIRATION);
						},

						setObjectExpiration : function(value) {
							this.setValue(this.OBJECT_EXPIRATION, value);
						},

						/**
						 * Gets the application version number, for example
						 * 2.0.3
						 * 
						 * @return a string value of application version number.
						 */
						getApplicationVersion : function() {
							return this.getValue(this.APPLICATION_VERSION);
						},

						setApplicationVersion : function(value) {
							this.setValue(this.APPLICATION_VERSION, value);
						},

						/**
						 * Gets the Settings configuration object.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in a
						 *            SettingsConfiguration object as a
						 *            parameter if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getSettingsConfigObject : function(callback,
								extraParams) {
							var settingsConfig = SettingsConfig
									.createSettingsConfig("default");
							settingsConfig.getSettingsConfig(callback, params);
						},

						/**
						 * Returns icon status objects if any.
						 * 
						 * @param callback
						 *            A call back method. Call back method will
						 *            be called and pass in an array of
						 *            {@link ecm.model.admin.IconStatusConfig}
						 *            objects as a parameter if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getIconStatusObjects : function(callback, extraParams) {
							var params = this._mixin([ extraParams ])
							var request = ecm.model.Request
									.invokeService(
											"getIconMapping",
											null,
											params,
											lang
													.hitch(
															this,
															function(response) {
																var defaultClasses = [];
																for ( var i in response.iconStatusClasses) {
																	var iconStatusClassJSON = response.iconStatusClasses[i];
																	var iconStatusClassConfig = IdLabelConfig
																			.createIdLabelConfig(iconStatusClassJSON.id);
																	iconStatusClassConfig
																			.setLabel(iconStatusClassJSON.label);
																	defaultClasses
																			.push(iconStatusClassConfig);
																}
																var iconStatuses = [];
																for ( var i in response.iconStatus) {
																	var iconStatusJSON = response.iconStatus[i];
																	var id = iconStatusJSON.id;
																	var iconStatusConfig = IconStatusConfig
																			.createIconStatusConfig(id);
																	iconStatusConfig
																			.setClassName(iconStatusJSON.className);
																	iconStatusConfig
																			.setFileName(iconStatusJSON.fileName);
																	iconStatusConfig
																			.setServers(iconStatusJSON.servers);
																	iconStatusConfig
																			.setLabel(iconStatusJSON.label);
																	iconStatuses
																			.push(iconStatusConfig);
																}
																callback(
																		iconStatuses,
																		defaultClasses);
															}));
						},

						/**
						 * Returns icon objects if any.
						 * 
						 * @param callback
						 *            A call back method. Call back method will
						 *            be called and pass in an array of
						 *            {@link ecm.model.admin.IconConfig} objects
						 *            as a parameter if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getIconObjects : function(callback, extraParams) {
							var params = this._mixin([ extraParams ])
							var request = ecm.model.Request
									.invokeService(
											"getIconMapping",
											null,
											params,
											lang
													.hitch(
															this,
															function(response) {
																var defaultContentTypes = [];
																for ( var i in response.defaultContentTypes) {
																	var defaultContentType = response.defaultContentTypes[i];
																	defaultContentTypes
																			.push(defaultContentType);
																}
																var defaultContentTypeClasses = [];
																for ( var i in response.defaultContentTypeClasses) {
																	var jsonData = response.defaultContentTypeClasses[i];
																	var config = IdLabelConfig
																			.createIdLabelConfig(jsonData.id);
																	config
																			.setLabel(jsonData.label);
																	defaultContentTypeClasses
																			.push(config);
																}
																// Get the Mime
																// Icon
																// information
																var iconMappings = [];
																for ( var i in response.iconMappings) {
																	var iconMappingJSON = response.iconMappings[i];
																	var id = iconMappingJSON.id;
																	var iconConfig = IconConfig
																			.createIconConfig(id);
																	iconConfig
																			.setClassName(iconMappingJSON.className);
																	iconConfig
																			.setFileName(iconMappingJSON.fileName);
																	iconConfig
																			.setContentTypes(iconMappingJSON.contentTypes);
																	iconMappings
																			.push(iconConfig);
																}
																callback(
																		iconMappings,
																		defaultContentTypes,
																		defaultContentTypeClasses);
															}));
						},

						/**
						 * Updates icon mapping and icon status objects in the
						 * same transaction.
						 * 
						 * @param iconMimeMappingData
						 *            A collection of icon MIME mapping object
						 *            {@link ecm.model.admin.IconConfig}
						 * @param iconStatusData
						 *            A collection of icon status object
						 *            {@link ecm.model.admin.IconStatusConfig}
						 * @param callback
						 *            A call back method. Call back method will
						 *            be called and pass in a response object as
						 *            a parameter if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationIconMapping : function(
								iconMimeMappingData, iconStatusData, callback,
								extraParams) {
							this.logEntry(arguments.callee.nom);
							var data = {
								"iconMimeMappingData" : iconMimeMappingData,
								"iconStatusData" : iconStatusData
							};
							var params = this
									._mixin([
											{
												action : "updateIconMapping",
												id : this.id,
												configuration : this.name,
												login_desktop : ecm.model.desktop
														&& ecm.model.desktop.id ? ecm.model.desktop.id
														: null
											}, this.default_params, extraParams ]);
							var request = ecm.model.Request.postService(
									"admin/configuration", null, params,
									"text/json", dojojson.toJson(data), lang
											.hitch(this, function(response) {
												if (callback)
													callback(response);
											}));
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates file types mapping.
						 * 
						 * @param fileTypesMappingData
						 *            A collection of file types mapping objects
						 *            {@link ecm.model.admin.FileTypeConfig}
						 * @param callback
						 *            A call back method. Call back method will
						 *            be called and pass in a response object as
						 *            a parameter if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateFileTypesMapping : function(fileTypesMappingData,
								callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							var data = {
								"fileTypesMappingData" : fileTypesMappingData
							};
							var params = this
									._mixin([
											{
												action : "updateFileTypesMapping",
												id : this.id,
												configuration : this.name,
												login_desktop : ecm.model.desktop
														&& ecm.model.desktop.id ? ecm.model.desktop.id
														: null
											}, this.default_params, extraParams ]);
							var request = ecm.model.Request.postService(
									"admin/configuration", null, params,
									"text/json", dojojson.toJson(data), lang
											.hitch(this, function(response) {
												if (callback)
													callback(response);
											}));
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Gets an array of plugin configuration objects if any.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of plugin
						 *            objects
						 *            {@link ecm.model.admin.PluginConfig} as a
						 *            parameter if provided.
						 * @param params
						 * @since ICN 2.0.3.4 passing parameters to mid-tier
						 */
						getPluginObjects : function(callback, params) {
							var pluginObjects = [];
							this.listConfig(this.PLUGINS, lang.hitch(this,
									function(list) {
										for ( var i in list) {
											var entry = list[i];
											var id = entry.id ? entry.id : ""
													+ i;
											var plugin = PluginConfig
													.createPluginConfig(id);
											lang.mixin(plugin, {
												_attributes : entry
											});
											if (plugin.getName()) { // include
																	// only
																	// plugins
																	// with a
																	// name
												pluginObjects.push(plugin);
											}
										}
										if (callback) {
											callback(pluginObjects);
										}
									}), "true", params);
						},

						/**
						 * Gets an array of theme configuration objects if any.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of theme
						 *            objects
						 *            {@link ecm.model.admin.ThemeConfig} as a
						 *            parameter if provided.
						 * @since 2.0.3
						 * @param params
						 * @since ICN 2.0.3.4 passing parameters to mid-tier
						 */
						getThemeObjects : function(callback, params) {
							var themeObjects = [];
							this.listConfig(this.THEMES, lang.hitch(this,
									function(list) {
										for ( var i in list) {
											var entry = list[i];
											var id = entry.id ? entry.id : ""
													+ i;
											var theme = ThemeConfig
													.createThemeConfig(id);
											lang.mixin(theme, {
												_attributes : entry
											});
											if (theme.getName()) { // include
																	// only
																	// themes
																	// with a
																	// name
												themeObjects.push(theme);
											}
										}
										if (callback) {
											callback(themeObjects);
										}
									}), "true", params);
						},

						/**
						 * Gets an array of theme configuration objects if any.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of theme
						 *            objects
						 *            {@link ecm.model.admin.RedactionReasonConfig}
						 *            as a parameter if provided.
						 * @since 3.0
						 */
						getRedactionReasonObjects : function(callback, params) {
							var redactionReasonObjects = [];
							this
									.listConfig(
											this.REDACTION_REASONS,
											lang
													.hitch(
															this,
															function(list) {
																for ( var i in list) {
																	var entry = list[i];
																	var id = entry.id ? entry.id
																			: ""
																					+ i;
																	var redactionReason = RedactionReasonConfig
																			.createRedactionReasonConfig(id);
																	lang
																			.mixin(
																					redactionReason,
																					{
																						_attributes : entry
																					});
																	if (redactionReason
																			.getName()) { // include
																							// only
																							// redaction
																							// reasons
																							// with
																							// a
																							// name
																		redactionReasonObjects
																				.push(redactionReason);
																	}
																}
																if (callback) {
																	callback(redactionReasonObjects);
																}
															}), "true", params);
						},
						
						/**
						 * Gets an array of admin role objects, if any
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of theme
						 *            objects
						 *            {@link ecm.model.admin.AdminRoleConfig}
						 *            as a parameter if provided.
						 * @since 3.0.3
						 */
						getAdminRoleObjects : function(callback, params) {
							var adminRoleObjects = [];
							this.listConfig(this.ADMIN_ROLES, lang.hitch(this, function(list) {
								for ( var i in list) {
									var entry = list[i];
									var id = entry.id ? entry.id : "" + i;
									var adminRole = AdminRoleConfig.createAdminRoleConfig(id);
									lang.mixin(adminRole, {
										_attributes : entry
									});
									adminRoleObjects.push(adminRole);
								}
								if (callback) {
									callback(adminRoleObjects);
								}
							}), "true", params);
						},

						/**
						 * Gets an array of server configuration objects. This
						 * is a read-only object. There is no set method to
						 * update/delete serverConfig. There will be a server
						 * configuration object provided as default for each
						 * supported server type(ie P8, CM, CMIS, OD...). There
						 * will also be a server configuration object provided
						 * for each plug-in provided repository type.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of
						 *            ServerConfig objects
						 *            {@link ecm.model.admin.ServerConfig} as a
						 *            parameter if provided.
						 * @param params
						 * @since ICN 2.0.3.4 passing parameters to mid-tier
						 */
						getServerObjects : function(callback, params) {
							if (this._serverObjects) {
								if (callback) {
									callback(this._serverObjects,
											this._locales,
											this._localizeSettings);
								}
							} else {
								var request = ecm.model.Request
										.invokeService(
												"getServers",
												null,
												params,
												lang
														.hitch(
																this,
																function(
																		response) {
																	var servers = [];
																	for ( var i in response.servers) {
																		var jsonData = response.servers[i];
																		var serverConfig = ServerConfig
																				.createServerConfig(jsonData.id);
																		lang
																				.mixin(
																						serverConfig,
																						{
																							_attributes : jsonData
																						});
																		servers
																				.push(serverConfig);
																	}
																	var locales = [];
																	for ( var i in response.locales) {
																		var jsonData = response.locales[i];
																		var localeConfig = LocaleConfig
																				.createLocaleConfig(jsonData.id);
																		localeConfig
																				.setLabel(jsonData.label);
																		locales
																				.push(localeConfig);
																	}
																	var localizeSettings = [];
																	for ( var i in response.localizeSettings) {
																		var jsonData = response.localizeSettings[i];
																		var localeConfig = LocaleConfig
																				.createLocaleConfig(jsonData.id);
																		localeConfig
																				.setLabel(jsonData.label);
																		localizeSettings
																				.push(localeConfig);
																	}
																	this._serverObjects = servers;
																	this._locales = locales;
																	this._localizeSettings = localizeSettings;
																	callback(
																			servers,
																			locales,
																			this._localizeSettings);
																}));
							}
						},

						/**
						 * Gets an array of viewer configuration objects if any.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of viewer
						 *            objects
						 *            {@link ecm.model.admin.ViewerDefConfig} as
						 *            a parameter if provided.
						 * @param params
						 * @since ICN 2.0.3.4 passing parameters to mid-tier
						 */
						getViewersObjects : function(callback, params) {
							var viewersObjects = [];
							this.listConfig(this.VIEWERS, lang.hitch(this,
									function(list) {
										for ( var i in list) {
											var entry = list[i];
											var id = entry.id ? entry.id : ""
													+ i;
											var viewer = ViewerConfig
													.createViewerConfig(id);
											lang.mixin(viewer, {
												_attributes : entry
											});
											if (viewer.getName()) { // include
																	// only
																	// viewers
																	// with a
																	// name
												viewersObjects.push(viewer);
											}
										}
										if (callback) {
											callback(viewersObjects);
										}
									}), "true", params);
						},

						/**
						 * Gets viewer definition, content type and mapping
						 * configuration to callback method.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of viewer
						 *            definition objects
						 *            {@link ecm.model.admin.ViewerDefConfig},
						 *            an array of viewer content type objects
						 *            {@link ecm.model.admin.ViewerContentTypeConfig},
						 *            and an array of viewer mapping
						 *            configuration objects
						 *            {@link ecm.model.admin.ViewerMappingConfig}
						 *            as parameters if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getDefaultViewerData : function(callback, extraParams) {
							if (this._viewerDefs && this._viewerContentTypes
									&& this._defaultViewerMappings) {
								if (callback) {
									callback(this._viewerDefs,
											this._viewerContentTypes,
											this._defaultViewerMappings);
								}
							} else {
								var self = this;
								var params = this._mixin([ {
									"adminData" : "true"
								}, extraParams ]);
								var request = ecm.model.Request.invokeService(
										"getViewers", null, params, function(
												response) {
											self._defaultViewerDataLoaded(
													response, callback);
										});
							}
						},

						/**
						 * Parses response content and creates viewer
						 * definition, content type and mapping configuration to
						 * a callback method.
						 * 
						 * @param response
						 *            response object
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of viewer
						 *            definition objects
						 *            {@link ecm.model.admin.ViewerDefConfig},
						 *            an array of viewer content type objects
						 *            {@link ecm.model.admin.ViewerContentTypeConfig},
						 *            and an array of viewer mapping
						 *            configuration objects
						 *            {@link ecm.model.admin.ViewerMappingConfig}
						 *            as parameters if provided.
						 * @private
						 */
						_defaultViewerDataLoaded : function(response, callback) {
							this._viewerDefs = [];
							for ( var i in response.viewerDefs) {
								var viewerJSON = response.viewerDefs[i];
								var id = viewerJSON.id ? viewerJSON.id : "" + i;
								var viewerDef = ViewerDefConfig
										.createViewerDefConfig(id);
								lang.mixin(viewerDef, {
									_attributes : viewerJSON
								});
								this._viewerDefs.push(viewerDef);
							}
							this._viewerContentTypes = [];
							for ( var i in response.viewerContentTypes) {
								var viewerJSON = response.viewerContentTypes[i];
								var id = viewerJSON.id ? viewerJSON.id : "" + i;
								var viewerContentType = ViewerContentTypeConfig
										.createViewerContentTypeConfig(id);
								lang.mixin(viewerContentType, {
									_attributes : viewerJSON
								});
								this._viewerContentTypes
										.push(viewerContentType);
							}
							this._defaultViewerMappings = [];
							for ( var i in response.defaultViewerMappings) {
								var viewerJSON = response.defaultViewerMappings[i];
								var id = viewerJSON.id ? viewerJSON.id : "" + i;
								var viewerMapping = ViewerMappingConfig
										.createViewerMappingConfig(id);
								lang.mixin(viewerMapping, {
									_attributes : viewerJSON
								});
								this._defaultViewerMappings.push(viewerMapping);
							}
							if (callback) {
								callback(this._viewerDefs,
										this._viewerContentTypes,
										this._defaultViewerMappings);
							}
						},

						/**
						 * Gets icon mapping and icon status objects.
						 * 
						 * @param callback
						 *            A call back method. Callback method will
						 *            be called and pass in an array of icon
						 *            MIME mapping object
						 *            {@link ecm.model.admin.IconConfig}, and
						 *            an array of icon status object
						 *            {@link ecm.model.admin.IconStatusConfig}
						 *            as parameters if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getMimeAndStateIconObjects : function(callback,
								extraParams) {
							var params = this._mixin([ extraParams ])
							var request = ecm.model.Request
									.invokeService(
											"getIconMapping",
											null,
											params,
											lang
													.hitch(
															this,
															function(response) {
																// Get the Mime
																// Icon
																// information
																var iconMappings = [];
																for ( var i in response.iconMappings) {
																	var iconMappingJSON = response.iconMappings[i];
																	var id = iconMappingJSON.id;
																	var iconConfig = IconConfig
																			.createIconConfig(id);
																	iconConfig
																			.setClassName(iconMappingJSON.className);
																	iconConfig
																			.setFileName(iconMappingJSON.fileName);
																	iconConfig
																			.setContentTypes(iconMappingJSON.contentTypes);
																	iconMappings
																			.push(iconConfig);
																}
																// Get the State
																// Icon
																// information
																var iconStates = [];
																for ( var i in response.iconStatus) {
																	var iconStatusJSON = response.iconStatus[i];
																	var id = iconStatusJSON.id;
																	var iconStatusConfig = IconStatusConfig
																			.createIconStatusConfig(id);
																	iconStatusConfig
																			.setClassName(iconStatusJSON.className);
																	iconStatusConfig
																			.setFileName(iconStatusJSON.fileName);
																	iconStatusConfig
																			.setServers(iconStatusJSON.servers);
																	iconStatusConfig
																			.setLabel(iconStatusJSON.label);
																	iconStates
																			.push(iconStatusConfig);
																}
																callback(
																		iconMappings,
																		iconStates);
															}));
						},

						/**
						 * Gets all the action labels.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.Action}.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getAllLabels : function(callback, extraParams) {
							if (this.allLabels) {
								if (callback) {
									callback(this.allLabels);
								}
							} else {
								var params = this._mixin([ {
									action_id : "allLabels",
									firstLevelOnly : "true",
									sorted : "true"
								}, extraParams ]);
								var request = ecm.model.Request.invokeService(
										"getActions", null, params,
										lang.hitch(this, function(response) {
											var actions = [];
											this._loadActions(response.actions,
													actions);
											this.allLabels = actions;
											if (callback) {
												callback(this.allLabels);
											}
										}));
							}
						},

						/**
						 * Parses action JSON and fills the actions parameter
						 * with an array of {@link ecm.model.Action}.
						 * 
						 * @param actionJSON
						 *            actions in JSON format.
						 * @param actions
						 * @return an array of {@link ecm.model.Action}
						 * @private
						 */
						_loadActions : function(actionsJSON, actions) {
							for ( var i in actionsJSON) {
								var actionJSON = actionsJSON[i];
								var action = new Action(actionJSON);
								if (actionJSON.actions
										&& actionJSON.actions.length > 0) {
									this._loadActions(actionJSON.actions,
											action.subActions);
								}
								actions.push(action);
							}
						},

						/**
						 * Gets all repository configuration objects defined in
						 * the application object.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.admin.RepositoryConfig}
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getRepositoryObjects : function(callback, params) {
							var repositoryObjects = [];
							this
									.listConfig(
											this.REPOSITORIES,
											lang
													.hitch(
															this,
															function(list) {
																for ( var i in list) {
																	var entry = list[i];
																	var id = entry.id ? entry.id
																			: ""
																					+ i;
																	var repository = RepositoryConfig
																			.createRepositoryConfig(id);
																	lang
																			.mixin(
																					repository,
																					{
																						_attributes : entry
																					});
																	if (repository.name) { // include
																							// only
																							// repositories
																							// with
																							// a
																							// name
																		repositoryObjects
																				.push(repository);
																	}
																}
																if (callback) {
																	callback(repositoryObjects);
																}
															}), "true", params);
						},

						/**
						 * Gets all menu type configuration objects defined in
						 * the application object.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.admin.MenuTypeConfig}.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getMenuTypeObjects : function(callback, extraParams) {
							if (this.allMenuTypes) {
								if (callback) {
									callback(this.allMenuTypes);
								}
							} else {
								var params = this._mixin([ extraParams ]);
								var request = ecm.model.Request
										.invokeService(
												"getMenuTypes",
												null,
												params,
												lang
														.hitch(
																this,
																function(
																		response) {
																	var menuTypes = [];
																	for ( var i in response.menuTypes) {
																		var menuTypeJSON = response.menuTypes[i];
																		var menuType = MenuTypeConfig
																				.createMenuTypeConfig(menuTypeJSON.id);
																		lang
																				.mixin(
																						menuType,
																						{
																							_attributes : menuTypeJSON
																						});
																		menuTypes
																				.push(menuType);
																	}
																	this.allMenuTypes = menuTypes;
																	if (callback) {
																		callback(this.allMenuTypes);
																	}
																}));
							}
						},

						/**
						 * Gets all menu configuration objects defined in the
						 * application object.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.admin.MenuConfig}.
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getMenuObjects : function(callback, params) {
							var menuObjects = [];
							this.listConfig("menus", lang.hitch(this, function(
									list) {
								for ( var i in list) {
									var entry = list[i];
									var id = entry.id ? entry.id : "" + i;
									var menu = MenuConfig.createMenuConfig(id);
									lang.mixin(menu, {
										_attributes : entry
									});
									if (menu.getName()) { // include only
															// menuObjects with
															// a name
										menuObjects.push(menu);
									}
								}
								if (callback) {
									callback(menuObjects);
								}
							}), "true", params);
						},

						/**
						 * Gets all desktop configuration objects defined in the
						 * application object.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.admin.DesktopConfig}
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getDesktopObjects : function(callback, params) {
							var desktopObjects = [];
							this.listConfig(this.DESKTOPS, lang.hitch(this,
									function(list) {
										for ( var i in list) {
											var entry = list[i];
											var id = entry.id ? entry.id : ""
													+ i;
											var desktop = DesktopConfig
													.createDesktopConfig(id);
											lang.mixin(desktop, {
												_attributes : entry
											});
											if (desktop.getName()) { // include
																		// only
																		// desktops
																		// with
																		// a
																		// name
												desktopObjects.push(desktop);
											}
										}
										if (callback) {
											callback(desktopObjects);
										}
									}), "true", params);
						},

						/**
						 * Gets all {@link ecm.model.admin.InterfaceTextConfig}
						 * objects defined in the application.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.admin.InterfaceTextConfig}
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getUIApplicationLabelObjects : function(callback,
								extraParams) {
							var params = this._mixin([ extraParams ]);
							var request = ecm.model.Request
									.invokeService(
											"getUIApplicationLabels",
											null,
											params,
											lang
													.hitch(
															this,
															function(response) {
																var uiLabels = [];
																for ( var i in response.uiLabels) {
																	var uiLabelJSON = response.uiLabels[i];
																	var id = uiLabelJSON.id;
																	var uiLabel = InterfaceTextConfig
																			.createInterfaceTextConfig(id);
																	lang
																			.mixin(
																					uiLabel,
																					{
																						_attributes : uiLabelJSON
																					});

																	var localeId = uiLabelJSON.localeData
																			&& uiLabelJSON.localeData.id ? uiLabelJSON.localeData.id
																			: id;
																	var uiLabelLocale = InterfaceTextLocaleConfig
																			.createInterfaceTextLocaleConfig(localeId);
																	uiLabel
																			.setLocaleData(uiLabelLocale);
																	if (uiLabelJSON.localeData) {
																		lang
																				.mixin(
																						uiLabelLocale,
																						{
																							_attributes : uiLabelJSON.localeData
																						});
																	}
																	uiLabels
																			.push(uiLabel);
																}
																callback(uiLabels);
															}));
						},

						/**
						 * Gets all {@link ecm.model.admin.InterfaceTextConfig}
						 * objects defined in the configuration.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with an array of
						 *            {@link ecm.model.admin.InterfaceTextConfig}
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getInterfaceTextsObjects : function(callback,
								extraParams) {
							var params = this._mixin([ extraParams ]);
							var request = ecm.model.Request
									.invokeService(
											"getUILabels",
											null,
											params,
											lang
													.hitch(
															this,
															function(response) {
																var uiLabels = [];
																for ( var i in response.uiLabels) {
																	var uiLabelJSON = response.uiLabels[i];
																	var id = uiLabelJSON.id;
																	var uiLabel = InterfaceTextConfig
																			.createInterfaceTextConfig(id);
																	lang
																			.mixin(
																					uiLabel,
																					{
																						_attributes : uiLabelJSON
																					});

																	var localeId = uiLabelJSON.localeData
																			&& uiLabelJSON.localeData.id ? uiLabelJSON.localeData.id
																			: id;
																	var uiLabelLocale = InterfaceTextLocaleConfig
																			.createInterfaceTextLocaleConfig(localeId);
																	uiLabel
																			.setLocaleData(uiLabelLocale);
																	if (uiLabelJSON.localeData) {
																		lang
																				.mixin(
																						uiLabelLocale,
																						{
																							_attributes : uiLabelJSON.localeData
																						});
																	}

																	var uiLabelServerLabel = InterfaceTextLabelConfig
																			.createInterfaceTextLabelConfig(localeId);
																	uiLabel
																			.setLabelData(uiLabelServerLabel);
																	if (uiLabelJSON.labelData) {
																		lang
																				.mixin(
																						uiLabelServerLabel,
																						{
																							_attributes : uiLabelJSON.labelData
																						});
																	}

																	uiLabels
																			.push(uiLabel);
																}
																callback(uiLabels);
															}));
						},

						/**
						 * Adds a viewer mapping object
						 * {@link ecm.model.admin.ViewerMappingConfig} into a
						 * viewer configuration object
						 * {@link ecm.model.admin.ViewerConfig}.
						 * 
						 * @param viewerConfig
						 *            A Viewer configuration object
						 *            {@link ecm.model.admin.ViewerConfig}. It
						 *            contains a collection of mapping objects
						 *            this viewer can handle.
						 * @param mapping
						 *            A Viewer mapping configuration object
						 *            {@link ecm.model.admin.ViewerMappingConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						addApplicationViewerConfig : function(viewerConfig,
								mapping, callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							viewerConfig.addConfig(mapping, this.VIEWERS,
									callback, extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Adds a repository configuration object
						 * {@link ecm.model.admin.RepositoryConfig} to the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param repositoryConfig
						 *            A Repository configuration object
						 *            {@link ecm.model.admin.RepositoryConfig}.
						 *            It contains a repository definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						addApplicationRepositoryConfig : function(
								repositoryConfig, callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							repositoryConfig.addConfig(callback, this.name,
									this.id, this.REPOSITORIES, extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Adds a menu configuration object
						 * {@link ecm.model.admin.MenuConfig} to the application
						 * object {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param menuConfig
						 *            A menu configuration object
						 *            {@link ecm.model.admin.MenuConfig}. It
						 *            contains a menu definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						addApplicationMenuConfig : function(menuConfig,
								callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							menuConfig.addConfig(callback, extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Adds a plugin configuration object
						 * {@link ecm.model.admin.PluginConfig} to the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param pluginConfig
						 *            A plugin configuration object
						 *            {@link ecm.model.admin.PluginConfig}. It
						 *            contains a plugin definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						addApplicationPluginConfig : function(pluginConfig,
								callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							this.allMenuTypes = null;
							this._defaultViewerMappings = null;
							pluginConfig.addConfig(callback, this.name,
									this.id, this.PLUGINS, extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Adds a theme configuration object
						 * {@link ecm.model.admin.ThemeConfig} to the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param themeConfig
						 *            A theme configuration object
						 *            {@link ecm.model.admin.ThemeConfig}. It
						 *            contains a theme definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 * @since 2.0.3 *
						 */
						addApplicationThemeConfig : function(themeConfig,
								callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							themeConfig.addConfig(callback, this.name, this.id,
									this.THEMES, extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Adds a redaction reason configuration object
						 * {@link ecm.model.admin.RedactionReasonConfig} to the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param redactionReasonConfig
						 *            A redaction reason configuration object
						 *            {@link ecm.model.admin.RedactionReasonConfig}.
						 *            It contains a redaction reason definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @since 3.0
						 */
						addApplicationRedactionReasonConfig : function(redactionReasonConfig, callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							redactionReasonConfig.addConfig(callback,
									this.name, this.id, this.REDACTION_REASONS,
									extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},
						
						/**
						 * Adds an admin role configuration object
						 * {@link ecm.model.admin.AdminRoleConfig} to the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param adminRoleConfig
						 *            A redaction reason configuration object
						 *            {@link ecm.model.admin.AdminRoleConfig}.
						 *            It contains an admin role definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @since 3.0.3
						 */
						addAdminRoleConfig : function(adminRoleConfig, callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							adminRoleConfig.addConfig(callback,
									this.name, this.id, this.ADMIN_ROLES,
									extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},


						/**
						 * Adds a child plugin configuration object
						 * {@link ecm.model.admin.PluginConfig} to the plugin
						 * object {@link ecm.model.admin.PluginConfig}.
						 * 
						 * @param pluginConfig
						 *            A plugin configuration object
						 *            {@link ecm.model.admin.PluginConfig}. It
						 *            contains a plugin definition.
						 * @param parentId
						 *            parent object id.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						addChildPluginConfig : function(pluginConfig, parentId,
								callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							pluginConfig.addConfig(callback, "PluginConfig",
									parentId, this.CHILD_PLUGINS, extraParams);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Adds a desktop configuration object
						 * {@link ecm.model.admin.DesktopConfig} to the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param desktopConfig
						 *            An desktop configuration object
						 *            {@link ecm.model.admin.DesktopConfig}. It
						 *            contains a desktop definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param desktopAccessConfig
						 * @since 2.0.2 A desktop access configuration object
						 *        {@link ecm.model.admin.DesktopAccessConfig}.
						 *        It contains a desktop access definition.
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						addApplicationDesktopConfig : function(desktopConfig,
								callback, desktopAccessConfig, params) {
							this.logEntry(arguments.callee.nom);
							desktopConfig.addConfig(lang.hitch(this,
									function() {
										if (desktopAccessConfig) {
											desktopAccessConfig
													.addConfig(callback);
										} else if (callback) {
											callback();
										}
									}), this.name, this.id, this.DESKTOPS,
									params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates a theme configuration object
						 * {@link ecm.model.admin.ThemeConfig} defined in the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param themeConfig
						 *            A theme configuration object
						 *            {@link ecm.model.admin.ThemeConfig}. It
						 *            contains a theme definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @since 2.0.3
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationThemeConfig : function(themeConfig,
								callback, params) {
							this.logEntry(arguments.callee.nom);
							themeConfig.updateConfig(callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates a theme configuration object
						 * {@link ecm.model.admin.RedactionReasonConfig} defined
						 * in the application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param redactionReasonConfig
						 *            A redaction reason configuration object
						 *            {@link ecm.model.admin.RedactionReasonConfig}.
						 *            It contains a redaction reason definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * 
						 * @since 3.0
						 */
						updateApplicationRedactionReasonConfig : function(redactionReasonConfig, callback, params) {
							this.logEntry(arguments.callee.nom);
							redactionReasonConfig
									.updateConfig(callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},
						/**
						 * Updates a plugin configuration object
						 * {@link ecm.model.admin.PluginConfig} defined in the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param pluginConfig
						 *            A plugin configuration object
						 *            {@link ecm.model.admin.PluginConfig}. It
						 *            contains a plugin definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationPluginConfig : function(pluginConfig,
								callback, params) {
							this.logEntry(arguments.callee.nom);
							pluginConfig.updateConfig(callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates a settings configuration object
						 * {@link ecm.model.admin.SettingsConfig}
						 * 
						 * @param settingsConfig
						 *            A plugin configuration object
						 *            {@link ecm.model.admin.SettingsConfig}.
						 *            It contains an application settings
						 *            definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationSettingsConfig : function(
								settingsConfig, callback, params) {
							this.logEntry(arguments.callee.nom);
							settingsConfig.updateConfig(callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates a desktop configuration object
						 * {@link ecm.model.admin.DesktopConfig} defined in the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param desktopConfig
						 *            A desktop configuration object
						 *            {@link ecm.model.admin.DesktopConfig}. It
						 *            contains a desktop definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param desktopAccessConfig
						 * @since 2.0.2 A desktop access configuration object
						 *        {@link ecm.model.admin.DesktopAccessConfig}.
						 *        It contains a desktop access definition.
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationDesktopConfig : function(
								desktopConfig, callback, desktopAccessConfig,
								params) {
							this.logEntry(arguments.callee.nom);
							desktopConfig.updateConfig(lang.hitch(this,
									function(response) {
										if (desktopAccessConfig) {
											desktopAccessConfig.updateConfig(
													callback, params);
										} else if (callback) {
											callback();
										}
									}));
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates a repository configuration object
						 * {@link ecm.model.admin.RepositoryConfig} defined in
						 * the application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param repositoryConfig
						 *            A desktop configuration object
						 *            {@link ecm.model.admin.RepositoryConfig}.
						 *            It contains a repository definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationRepositoryConfig : function(
								repositoryConfig, callback, params) {
							this.logEntry(arguments.callee.nom);
							repositoryConfig.updateConfig(callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Updates a viewer configuration object
						 * {@link ecm.model.admin.ViewerConfig} defined in the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param viewerConfig
						 *            A desktop configuration object
						 *            {@link ecm.model.admin.ViewerConfig}. It
						 *            contains a viewer definition.
						 * @param mappingData
						 *            A viewer mapping configuration object
						 *            {@link ecm.model.admin.ViwerMappingConfig}.
						 *            It contains mapping information.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationViewerConfig : function(viewerConfig,
								mappingData, callback, params) {
							this.logEntry(arguments.callee.nom);
							viewerConfig.updateConfig(mappingData, callback,
									params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Update a menu configuration object
						 * {@link ecm.model.admin.MenuConfig} defined in the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param menuConfig
						 *            A desktop configuration object
						 *            {@link ecm.model.admin.MenuConfig}. It
						 *            contains a menu definition.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationMenuConfig : function(menuConfig,
								callback, params) {
							this.logEntry(arguments.callee.nom);
							menuConfig.updateMenuConfig(callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes repository configuration objects
						 * {@link ecm.model.admin.RepositoryConfig} from the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param repositoryConfigArray
						 *            An array of repository configuration
						 *            objects
						 *            {@link ecm.model.admin.RepositoryConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						deleteApplicationRepositoriesConfig : function(
								repositoryConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							this.deleteConfigs(repositoryConfigArray,
									this.REPOSITORIES, callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes viewer configuration objects
						 * {@link ecm.model.admin.ViewerConfig} from the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param viewerConfigArray
						 *            An array of viewer configuration objects
						 *            {@link ecm.model.admin.ViewerConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						deleteApplicationViewersConfig : function(
								viewerConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							viewerConfigArray[0].deleteConfigs(
									viewerConfigArray, this.VIEWERS, callback,
									params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes menu configuration objects
						 * {@link ecm.model.admin.MenuConfig} from the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param menuConfigArray
						 *            An array of menu configuration objects
						 *            {@link ecm.model.admin.MenuConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						deleteApplicationMenusConfig : function(
								menuConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							menuConfigArray[0].deleteConfigs(menuConfigArray,
									this.MENUS, callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes redaction reason configuration objects
						 * {@link ecm.model.admin.RedactionReasonConfig} from
						 * the application object
						 * {@link ecm.model.admin.RedactionReasonConfig}.
						 * 
						 * @param redactionReasonConfigArray
						 *            An array of redaction reason configuration
						 *            objects
						 *            {@link ecm.model.admin.RedactionReasonConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 *            Passing extra parameters to mid-tier
						 * @since 3.0
						 */ 
						deleteApplicationRedactionReasonConfig : function(redactionReasonConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							redactionReasonConfigArray[0].deleteConfigs(
									redactionReasonConfigArray,
									this.REDACTION_REASONS, callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},
						
						/**
						 * Deletes admin role configuration objects
						 * {@link ecm.model.admin.AdminRoleConfig} from
						 * the application object
						 * {@link ecm.model.admin.AdminRoleConfig}.
						 * 
						 * @param adminRoleConfigArray
						 *            An array of redaction reason configuration
						 *            objects
						 *            {@link ecm.model.admin.RedactionReasonConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 *            Passing extra parameters to mid-tier
						 * @since 3.0.3
						 */ 
						deleteApplicationAdminRoleConfig : function(adminRoleConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							adminRoleConfigArray[0].deleteConfigs(
									adminRoleConfigArray,
									this.ADMIN_ROLES, callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes plugin configuration objects
						 * {@link ecm.model.admin.PluginConfig} from the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param pluginConfigArray
						 *            An array of plugin configuration objects
						 *            {@link ecm.model.admin.PluginConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						deleteApplicationPluginsConfig : function(
								pluginConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							this.allMenuTypes = null;
							this._defaultViewerMappings = null;
							this.deleteConfigs(pluginConfigArray, this.PLUGINS,
									callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes theme configuration objects
						 * {@link ecm.model.admin.ThemeConfig} from the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param themeConfigArray
						 *            An array of theme configuration objects
						 *            {@link ecm.model.admin.ThemeConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 * @since 2.0.3
						 */
						deleteApplicationThemesConfig : function(
								themeConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							this.deleteConfigs(themeConfigArray, this.THEMES,
									callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Deletes desktop configuration objects
						 * {@link ecm.model.admin.DekstopConfig} from the
						 * application object
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param desktopConfigArray
						 *            An array of desktop configuration objects
						 *            {@link ecm.model.admin.DekstopConfig}.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with response
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						deleteApplicationDesktopsConfig : function(
								desktopConfigArray, callback, params) {
							this.logEntry(arguments.callee.nom);
							this.deleteConfigs(desktopConfigArray,
									this.DESKTOPS, callback, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Retrieves the application configuration objects
						 * {@link ecm.model.admin.ApplicationConfig}.
						 * 
						 * @param callback
						 *            A callback method if provided will be
						 *            called with application object as
						 *            parameter.
						 * @param params
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getApplicationConfig : function(callback, params) {
							this.logEntry(arguments.callee.nom);
							var func = lang.hitch(this, function(obj) {
								this._initialized = true;
								if (callback)
									callback(obj);
							});

							this.getConfig(func, params);
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * Retrieves the mobile feature list
						 * {@link ecm.model.admin.MobileFeatureConfig} defined
						 * in a desktop configuration object.
						 * 
						 * @param desktopId
						 *            A desktop id.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with returned mobiel feature object
						 *            {@link ecm.model.admin.MobileFeatureConfig}
						 *            as parameter.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						getFeaturesList : function(desktopId, callback,
								extraParams) {
							var featureObjects = [];
							var params = this._mixin([ {
								action : "list",
								id : desktopId,
								type : "mobileFeatures",
								sorted : false,
								configuration : "DesktopConfig"
							}, this.default_params, extraParams ]);
							var self = this;
							var request = ecm.model.Request
									.invokeService(
											this.action,
											null,
											params,
											function(response) { // onFinished
												var list = response.list;
												for ( var i in list) {
													var entry = list[i];
													var id = entry.id ? entry.id
															: "" + i;
													var feature = MobileFeatureConfig
															.createMobileFeatureConfig(id);
													lang.mixin(feature, {
														_attributes : entry
													});
													featureObjects
															.push(feature);
												}
												if (callback)
													callback(featureObjects);
											});
						},

						/**
						 * Exports selected configuration object and associated
						 * configuraiton objects.
						 * 
						 * @param objects
						 *            An object with three attributes: desktops,
						 *            repositories, and plugins. Each contains
						 *            an array of IDs.
						 * @param callback
						 *            A callback method if provided will be
						 *            called with returned response.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						exportConfiguration : function(data, callback,
								extraParams) {
							var featureObjects = [];
							var params = this
									._mixin([
											{
												action : "export",
												id : this.id,
												application : this.id,
												configuration : this.name,
												login_desktop : ecm.model.desktop
														&& ecm.model.desktop.id ? ecm.model.desktop.id
														: null
											}, this.default_params, extraParams ]);
							var request = ecm.model.Request.postService(
									"admin/importExport", null, params,
									"text/json", dojojson.toJson(data), lang
											.hitch(this, function(response) {
												if (callback)
													callback(response);
											}));
						},

						/**
						 * Updates application's object expiration.
						 * 
						 * @param objectExpiration
						 *            A value, unit in minutes.
						 * @param callback
						 *            A call back method. Call back method will
						 *            be called and pass in a response object as
						 *            a parameter if provided.
						 * @param extraParams
						 * @since ICN 2.0.3.4 passing extra parameters to
						 *        mid-tier
						 */
						updateApplicationObjectExpiration : function(
								objectExpiration, callback, extraParams) {
							this.logEntry(arguments.callee.nom);
							var data = {
								"objectExpiration" : objectExpiration
							};
							var params = this
									._mixin([
											{
												action : "updateObjectExpiration",
												id : this.id,
												configuration : this.name,
												login_desktop : ecm.model.desktop
														&& ecm.model.desktop.id ? ecm.model.desktop.id
														: null
											}, this.default_params, extraParams ]);
							var request = ecm.model.Request.postService(
									"admin/configuration", null, params,
									"text/json", dojojson.toJson(data), lang
											.hitch(this, function(response) {
												if (callback)
													callback(response);
											}));
							this.logExit(arguments.callee.nom);
							return this;
						},

						openNewHelpWindow : function(file) {
							var left = 100;
							var top = 100;
							var width = 860;
							var height = 600;
							var url = "http://publib.boulder.ibm.com/infocenter/p8docs/v5r1m0/index.jsp?topic=/com.ibm.installingeuc.doc/"
									+ file;
							// var url = ecm.model.desktop.getHelpUrl(false) +
							// "index.jsp?topic=/com.ibm.installingeuc.doc/" +
							// file;
							var newWindow = window
									.open(
											url,
											"_blank",
											"status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left="
													+ left
													+ ",top="
													+ top
													+ ",width="
													+ width
													+ ",height="
													+ height
													+ "\"", true);
						},

						openSupport1HelpWindow : function(file) {
							var left = 100;
							var top = 100;
							var width = 860;
							var height = 600;
							var url = "http://www.ibm.com/support/knowledgecenter/SSNW2F_5.1.0/com.ibm.p8.install.doc/"
									+ file;
							// var url = ecm.model.desktop.getHelpUrl(false) +
							// "index.jsp?topic=/com.ibm.installingeuc.doc/" +
							// file;
							var newWindow = window
									.open(
											url,
											"_blank",
											"status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left="
													+ left
													+ ",top="
													+ top
													+ ",width="
													+ width
													+ ",height="
													+ height
													+ "\"", true);
						},

						openSupport2HelpWindow : function(file) {
							var left = 100;
							var top = 100;
							var width = 860;
							var height = 600;
							var url = "http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/"
									+ file;
							// var url = ecm.model.desktop.getHelpUrl(false) +
							// "index.jsp?topic=/com.ibm.installingeuc.doc/" +
							// file;
							var newWindow = window
									.open(
											url,
											"_blank",
											"status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left="
													+ left
													+ ",top="
													+ top
													+ ",width="
													+ width
													+ ",height="
													+ height
													+ "\"", true);
						},

						getAccessRoleConfig : function() {
							return this.accessRoleConfig;
						},

						setAccessRoleConfig : function(userId, accessRights) {
							this.accessRoleConfig = AccessRoleConfig
									.createAccessRoleConfig(userId);
							lang.mixin(this.accessRoleConfig, {
								_attributes : accessRights
							});
						},

						/**
						 * Return a boolean value represent if an application
						 * definition has been retrieved
						 * 
						 * @return Return a boolean value represent if an
						 *         application definition has been retrieved
						 */
						isInitialized : function() {
							return this._initialized;
						}

					});

			ecm.model.admin.appCfg = new ApplicationConfig("navigator",
					"ApplicationConfig");
			return ecm.model.admin.appCfg;
		});

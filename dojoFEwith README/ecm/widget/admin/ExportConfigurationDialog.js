/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/request/iframe",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/string",
	"dojo/dom-style",
	"dojo/on",
	"dojo/Deferred",
	"dojo/keys",
	"ecm/MessagesMixin",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"idx/layout/BorderContainer",
	"ecm/model/Request",
	"ecm/widget/ValidationTextBox",
	'gridx/Grid',
	'gridx/core/model/cache/Sync',
	"dojo/store/Memory",
	'gridx/modules/Focus',
	'gridx/modules/VirtualVScroller',
	"gridx/modules/RowHeader",
	"gridx/modules/IndirectSelect",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/select/Row",
	"gridx/modules/CellWidget",
	"gridx/modules/Edit",
	"dojo/text!./templates/ExportConfigurationDialog.html"
],

function(declare, lang, has, array, aspect, iframe, dom, domClass, string, style, on, Deferred, keys, MessagesMixin, HoverHelp, BaseDialog, Button, CheckBox, BorderContainer, Request, validationTextBox, Grid, Cache, Store, modFocus, modVScroll, modRowHeader, modIndirectSelect, modExtendedSelectRow, modSingleSort, modSelectRow, modCellWidget, modEdit, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.ExportConfigurationDialog
	 * @class Provides a dialog box that let user to select configuration objects to export from ICN.
	 * @augments dijit.Dialog
	 */
	var exportDialog = declare("ecm.widget.admin.ExportConfigurationDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.ExportConfigurationDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			domClass.add(this.domNode, "ecmExportConfigurationDialog");
			style.set(this.domNode, "maxHeight", "none");

			this._desktopPane.set("title", this.messages.admin_desktops);
			this._repositoryPane.set("title", this.messages.admin_repositories);
			this._pluginPane.set("title", this.messages.admin_plugins);
			this._themePane.set("title", this.messages.admin_themes);

			this.okButton = this.addButton(this.messages.admin_exportconfiguration_button_label, "_export", true, true);
			this.setIntroText(this.messages.admin_exportconfiguration_instruction);
			this.fileNameField.pattern = '([^"*|<>?:\\\\/])*';
			this.fileNameField.invalidMessage = this.messages.admin_name_invalid;
			this.own(aspect.after(this.fileNameField, "_onInput", lang.hitch(this, function(evt) {
				this._updateButton(this._onChange(this._desktopsGrid));
			}), true));
			this.own(aspect.after(this.fileNameField, "_setValueAttr", lang.hitch(this, function(evt) {
				this._updateButton(this._onChange(this._desktopsGrid));
			}), true));
			ecm.widget.admin.ExportConfigurationDialog._tabs = {};
			this.logExit(methodName);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (ecm.widget.admin.ExportConfigurationDialog._tabs) {
				delete ecm.widget.admin.ExportConfigurationDialog._tabs;
				ecm.widget.admin.ExportConfigurationDialog._tabs = null;
			}

			if (this._desktopsGrid)
				this._desktopsGrid.destroy();
			if (this._repositoriesGrid)
				this._repositoriesGrid.destroy();
			if (this._pluginsGrid)
				this._pluginsGrid.destroy();
			if (this._themesGrid)
				this._themesGrid.destroy();

			this.inherited(arguments);
		},

		/**
		 * Populate all tabs with incoming desktops parameter.
		 * 
		 * @param desktops
		 *            an array of desktop {@link ecm.model.admin.DesktopConfig} objects
		 */
		show: function(desktops) {
			var methodName = "show";
			this.logEntry(methodName);

			this.setTitle(this.messages.admin_exportconfiguration_dialog_label);
			this._desktops = desktops;
			this.inherited(arguments);
			this._loadData();
			this._updateButton(this._onChange(this._desktopsGrid));
			this.logExit(methodName);
		},

		/**
		 * If export button not disabled then export selected objects by calling _performDownload method
		 * 
		 * @private
		 */
		_export: function() {
			var methodName = "_export";
			this.logEntry(methodName);

			if (!this.okButton.get("disabled")) {
				var params = {
					action: "export",
					id: "navigator",
					application: "navigator",
					configuration: "ApplicationConfig",
					application: "navigator",
					desktops: this._getIds(this._desktopsGrid, this._desktopsStore),
					desktop: ecm.model.desktop.id,
					repositories: this._getIds(this._repositoriesGrid, this._repositoriesStore),
					plugins: this._getIds(this._pluginsGrid, this._pluginsStore),
					themes: this._getIds(this._themesGrid, this._themesStore),
					securities: this.exportSecurityCheckbox.get('checked'),
					fileName: this.fileNameField.get("value"),
					disposition: "attachment"
				};
				var contentUrl = ecm.model.Request.getServiceRequestUrl("admin/importExport");
				params = ecm.model.Request.setSecurityToken(params);

				var dfd = iframe(contentUrl, {
					method: "POST",
					data: params,
					preventCache: true,
					handleAs: "TEXT"
				});
				// Call this to clear any outstanding download deferred object.
				// Download never trigger any load or error event therefore deferred
				// never completes - it will indefinitely blocking the next iframe.send() request.
				dfd.response.cancel("terminate", false);
				this.hide();
			}
			this.logExit(methodName);
		},

		/**
		 * Use deferred to sync object loading
		 * 
		 * @private
		 */
		_loadData: function() {
			var methodName = "_loadData";
			this.logEntry(methodName);

			var deferred = new Deferred();
			var self = this;
			self._initializeDesktopsGrid(this._desktops).then(function(desktops) {
				self._containedRepositories = null;
				return self._loadRepositoriesFromServer(desktops);
			}).then(function(repositories) {
				return self._initializeRepositoriesGrid(repositories);
			}).then(function(repositories) {
				return self._loadPlugins();
			}).then(function(plugins) {
				return self._initializePluginsGrid(plugins);
			}).then(function(plugins) {
				return self._loadThemes();
			}).then(function(themes) {
				return self._initializeThemesGrid(themes);
			}).then(function() {
				deferred.resolve(true);
			}, function(err) {
				deferred.cancel(err);
			});

			this.logExit(methodName);
		},

		/**
		 * Initialize the desktops grid
		 * 
		 * @return a deferred object to sync loading
		 */
		_initializeDesktopsGrid: function(desktops) {
			var methodName = "_initializeDesktopsGrid";
			this.logEntry(methodName);

			var deferred = new Deferred();
			this._desktopsStore = this._createDesktopsStore(desktops);
			var structure = [
				{
					field: "checkbox",
					width: has("isWebKit") ? "30px" : "18px",
					name: "<span class='dijitInline dijitCheckBox dijitCheckBoxChecked' id=\"desktopCB\" aria-label=\"" + ecm.messages.export_config + "\" onClick=\"ecm.widget.admin.ExportConfigurationDialog._toggleCheckbox('desktop')\"></span>",					
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return [
							'<span data-dojo-type="dijit.form.CheckBox" style="padding: 5px 0 0" class="gridxHasGridCellValue"',
							'data-dojo-attach-point="cb">'
						].join('');
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cb.set("checked", gridData.display);
						this.cb.focusNode.setAttribute("aria-label", ecm.messages.export_config);
					},
					formatter: lang.hitch(this, "_formatValue"),
					sortable: false,
					editable: true
				},
				{
					field: "icon",
					styles: 'align: center; vertical-align: center;',
					name: " ",
					headerAriaLabel: this.messages.admin_desktop_icon,
					width: has("isWebKit") ? "30px" : "16px",
					sortable: false,
					formatter: lang.hitch(this, "_desktopIconFormatter")
				},
				{
					field: "name",
					name: this.messages.name_label,
					width: "30%"
				},
				{
					field: "id",
					name: this.messages.id_heading,
					width: "25%"
				},
				{
					field: "description",
					name: this.messages.description
				}
			];

			this._desktopsGrid = new Grid({
				id: 'desktopsGrid',
				cacheClass: Cache,
				structure: structure,
				store: this._desktopsStore,
				style: "height: 320px;",
				adminSelected: true,
				textDir: has("text-direction"),
				adminCBID: "desktopCB",
				modules: [
					modFocus,
					modVScroll,
					modCellWidget,
					modEdit,
//					modRowHeader,
					modSelectRow,
//					modIndirectSelect,
//					modExtendedSelectRow,
					modSingleSort
				]
			});

			this._desktopsGrid.connect(this._desktopsGrid, "onCellClick", lang.hitch(this, function(evt) {
				this._gridEventHandler(this._desktopsGrid, this._desktopsStore, evt);
				this._updateButton(this._onChange(this._desktopsGrid));
			}));

			this._desktopsGrid.connect(this._desktopsGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.SPACE) {
					this._gridEventHandler(this._desktopsGrid, this._desktopsStore, evt);
					this._updateButton(this._onChange(this._desktopsGrid));
				}
			}));

			this._desktopsGrid.connect(this._desktopsGrid.select.row, 'onSelectionChange', lang.hitch(this, function(selected) {
				this._onChange(this._desktopsGrid);
			}));

			this._desktopsGrid._updateExportButton = lang.hitch(this, function(grid) {
				this._updateButton(this._onChange(grid));
			});

			this._desktopsGrid.model.setStore(this._desktopsStore);
			this._desktopsGrid.placeAt(this._desktopPane);
			domClass.add(this._desktopPane.domNode, "gridxWholeRow gridxAlternatingRows");
			this._desktopsGrid.startup();
			this._desktopsGrid.sort.sort('2', false);
			//this._selectAll(this._desktopsGrid);
			ecm.widget.admin.ExportConfigurationDialog._tabs["desktop"] = this._desktopsGrid;

			this.resize();
			deferred.resolve(desktops);

			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Create a desktops store
		 * 
		 * @param desktops
		 *            An array of DesktopConfig {@link ecm.model.admin.DesktopConfig} object.
		 * @return a desktops store
		 */
		_createDesktopsStore: function(desktops) {
			var methodName = "_createDesktopsStore";
			this.logEntry(methodName);

			var items = [];
			if (desktops) {
				this.fileNameField.set("value", "ICNExportedConfiguration.properties");
				array.forEach(desktops, function(desktop, i) {
					items.push({
						"id": desktop.id,
						"name": desktop.getName(),
						"display": true,
						"description": desktop.getDescription()
					});
				});
			}
			this.logExit(methodName);
			return new Store({
				data: {
					identifier: "id",
					items: items
				}
			});
		},

		/**
		 * Return repositories list contained in the desktops
		 * 
		 * @param desktops
		 *            A array of desktop {@link ecm.model.admin.DesktopConfig} object.
		 * @private
		 */
		_loadRepositoriesFromServer: function(desktops) {
			var methodName = "_loadRepositoriesFromServer";
			this.logEntry(methodName);

			var deferred = new Deferred();
			var self = this;
			var selectedRepositories = [];
			this._loadRepositories(function(repositories) {
				array.forEach(repositories, function(repository, i) {
					if (self._findThisFromDesktops(desktops, repository.id))
						selectedRepositories.push(repository);
				});
				deferred.resolve(selectedRepositories);
			});
			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Check to see if repository has included in the desktops.
		 * 
		 * @param desktops
		 *            An array of DesktopConfig {@link ecm.model.admin.DesktopConfig} object.
		 * @param repoId
		 *            Repository id
		 * @return true or false if repository id is included in any of desktops.
		 * @private
		 */
		_findThisFromDesktops: function(desktops, repoId) {
			var self = this;
			if (!this._containedRepositories) {
				this._containedRepositories = {};
				array.forEach(desktops, function(desktop, i) {
					array.forEach(desktop.getValues(desktop.REPOSITORIES), function(repoId, i) {
						self._containedRepositories[repoId] = repoId;
					});
				});
			}
			return (this._containedRepositories[repoId] != undefined);
		},

		/**
		 * Load repositories from server
		 * 
		 * @param onComplete
		 *            An callback method.
		 * @private
		 */
		_loadRepositories: function(onComplete) {
			var methodName = "_loadRepositories";
			this.logEntry(methodName);

			ecm.model.admin.appCfg.getRepositoryObjects(lang.hitch(this, function(reposObjects) {
				this._repositories = reposObjects;
				if (onComplete) {
					onComplete(this._repositories);
				}
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_REPOSITORIES
			});
			this.logExit(methodName);
		},

		/**
		 * Desktop Icon formatter
		 * 
		 * @private
		 */
		_desktopIconFormatter: function(data, rowIndex, cell) {
			var DesktopIconValue = function(iconClass, hover) {
				this.iconClass = (!iconClass) ? "adminIconDesktop" : this.iconClass;
				this.hover = hover;
			};
			DesktopIconValue.prototype = new Object();
			DesktopIconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" />';
			};
			DesktopIconValue.prototype.replace = function() {
				return this;
			};
			return new DesktopIconValue(data.iconClass, this.messages.admin_text_desktop);
		},

		/**
		 * Plugin Icon formatter
		 * 
		 * @private
		 */
		_pluginIconFormatter: function(data, rowIndex, cell) {
			var DesktopIconValue = function(iconClass, hover) {
				this.iconClass = (!iconClass) ? "adminIconPlugin" : this.iconClass;
				this.hover = hover;
			};
			DesktopIconValue.prototype = new Object();
			DesktopIconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" />';
			};
			DesktopIconValue.prototype.replace = function() {
				return this;
			};
			return new DesktopIconValue(data.iconClass, this.messages.admin_text_plugin);
		},

		/**
		 * Theme Icon formatter
		 * 
		 * @private
		 */
		_themeIconFormatter: function(data, rowIndex, cell) {
			var DesktopIconValue = function(iconClass, hover) {
				this.iconClass = (!iconClass) ? "adminIconTheme" : this.iconClass;
				this.hover = hover;
			};
			DesktopIconValue.prototype = new Object();
			DesktopIconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" />';
			};
			DesktopIconValue.prototype.replace = function() {
				return this;
			};
			return new DesktopIconValue(data.iconClass, this.messages.admin_text_theme);
		},

		/**
		 * Repository Icon formatter
		 * 
		 * @private
		 */
		_repositoryIconFormatter: function(data, rowIndex, cell) {
			var RepositoryIconValue = function(iconClass, hover) {
				this.iconClass = iconClass;
				this.hover = hover;
			};
			RepositoryIconValue.prototype = new Object();
			RepositoryIconValue.prototype.toString = function() {
				return '<div style="display:table-cell; vertical-align:middle"> <img class="' + this.iconClass + '" title="' + this.hover + '" alt="' + this.hover + '" src="dojo/resources/blank.gif" /></div>';
			};
			RepositoryIconValue.prototype.replace = function() {
				return this;
			};
			return new RepositoryIconValue(data.iconClass, data.typeString);
		},

		/**
		 * Initialize repositories grid
		 * 
		 * @param repositories
		 *            An array of RepositoryConfig {@link ecm.model.admin.RepositoryConfig} object.
		 */
		_initializeRepositoriesGrid: function(repositories) {
			var methodName = "_initializeRepositoriesGrid";
			this.logEntry(methodName);

			var deferred = new Deferred();
			var structure = [
				{
					field: "checkbox",
					width: has("isWebKit") ? "30px" : "18px",
					name: "<span class='dijitInline dijitCheckBox dijitCheckBoxChecked' id=\"repositoryCB\" aria-label=\"" + ecm.messages.export_config + "\" onClick=\"ecm.widget.admin.ExportConfigurationDialog._toggleCheckbox('repository')\"></span>",					
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return [
							'<span data-dojo-type="dijit.form.CheckBox"	class="gridxHasGridCellValue"',
							'data-dojo-attach-point="cb">'
						].join('');
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cb.set("checked", gridData.display);
						this.cb.focusNode.setAttribute("aria-label", ecm.messages.export_config);
					},
					formatter: lang.hitch(this, "_formatValue"),
					sortable: false,
					editable: true
				},
				{
					field: "icon",
					styles: 'align: center; display: table-cell; vertical-align: middle',
					name: " ",
					headerAriaLabel: string.substitute(this.messages.repository_type_icon, [
						this.messages.repository
					]),
					sortable: false,
					width: has("isWebKit") ? "30px" : "16px",
					formatter: lang.hitch(this, "_repositoryIconFormatter")
				},
				{
					field: "name",
					name: this.messages.displayName
				},
				{
					field: "id",
					name: this.messages.id_heading
				},
				{
					field: "typeString",
					name: this.messages.server_type_heading
				},
				{
					field: "serverName",
					name: this.messages.server_name_heading
				},
				{
					field: "portNumber",
					name: this.messages.port_heading
				}
			];

			this._repositoriesStore = this._createRepositoriesStore(repositories);
			this._repositoriesGrid = new Grid({
				id: 'repositoriesGrid',
				cacheClass: Cache,
				structure: structure,
				style: "height: 320px",
				store: this._repositoriesStore,
				adminSelected: true,
				textDir: has("text-direction"),
				adminCBID: "repositoryCB",
				modules: [
					modFocus,
					modVScroll,
					modCellWidget,
					modEdit,
//					modRowHeader,
					modSelectRow,
//					modIndirectSelect,
//					modExtendedSelectRow,
					modSingleSort
				]
			});

			this._repositoriesGrid.connect(this._repositoriesGrid, "onCellClick", lang.hitch(this, function(evt) {
				this._gridEventHandler(this._repositoriesGrid, this._repositoriesStore, evt);
				this._onChange(this._repositoriesGrid);
			}));

			this._repositoriesGrid.connect(this._repositoriesGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.SPACE) {
					this._gridEventHandler(this._repositoriesGrid, this._repositoriesStore, evt);
					this._onChange(this._repositoriesGrid);
				}
			}));
			
			this._repositoriesGrid._onChange = lang.hitch(this, function(grid) {
				this._onChange(grid);
			});

			this._repositoriesGrid.model.setStore(this._repositoriesStore);
			this._repositoriesGrid.placeAt(this._repositoryPane);
			domClass.add(this._repositoryPane.domNode, "gridxWholeRow gridxAlternatingRows");
			this._repositoriesGrid.startup();
			this._repositoriesGrid.sort.sort(3, false);
			//this._selectAll(this._repositoriesGrid);
			ecm.widget.admin.ExportConfigurationDialog._tabs["repository"] = this._repositoriesGrid;

			this.resize();
			deferred.resolve(repositories);
			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Create a repositores store
		 * 
		 * @return a repositories store
		 * @private
		 */
		_createRepositoriesStore: function(repositories) {
			var methodName = "_initializeRepositoriesGrid";
			this.logEntry(methodName);
			var items = [];
			if (repositories) {
				array.forEach(repositories, function(repository, i) {
					items.push({
						"id": repository.id,
						"name": repository.getName(),
						"display": true,
						"typeString": repository.getTypeString(),
						"serverName": repository.getServerName(),
						"portNumber": repository.getPortNumber(),
						"iconClass": repository.getTypeIconClass()
					});
				});
			}
			this.logExit(methodName);
			return new Store({
				data: {
					identifier: "id",
					items: items
				}
			});
		},

		/**
		 * Load plugins from server
		 * 
		 * @return An array of PluginConfig {@link ecm.model.admin.PluginConfig} object
		 * @private
		 */
		_loadPlugins: function() {
			var methodName = "_loadPlugins";
			this.logEntry(methodName);
			var deferred = new Deferred();
			ecm.model.admin.appCfg.getPluginObjects(lang.hitch(this, function(objects) {
				deferred.resolve(objects);
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
			});
			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Load themes from server
		 * 
		 * @return An array of ThemeConfig {@link ecm.model.admin.ThemeConfig} object
		 * @private
		 */
		_loadThemes: function() {
			var methodName = "_loadThemes";
			this.logEntry(methodName);
			var deferred = new Deferred();
			ecm.model.admin.appCfg.getThemeObjects(lang.hitch(this, function(objects) {
				deferred.resolve(objects);
			}), {
				securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_THEMES
			});
			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Initialize plugins grids
		 * 
		 * @param plugins
		 *            An array of PluginConfig {@link ecm.model.admin.PluginConfig} object
		 * @private
		 */
		_initializePluginsGrid: function(plugins) {
			var methodName = "_initializePluginsGrid";
			this.logEntry(methodName);
			var deferred = new Deferred();

			var structure = [
				{
					field: "checkbox",
					width: has("isWebKit") ? "30px" : "18px",	
					name: "<span class='dijitInline dijitCheckBox dijitCheckBoxChecked' id=\"pluginCB\" aria-label=\"" + ecm.messages.export_config + "\" onClick=\"ecm.widget.admin.ExportConfigurationDialog._toggleCheckbox('plugin')\"></span>",							
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return [
							'<span data-dojo-type="dijit.form.CheckBox"	class="gridxHasGridCellValue"',
							'data-dojo-attach-point="cb">'
						].join('');
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cb.set("checked", gridData.display);
						this.cb.focusNode.setAttribute("aria-label", ecm.messages.export_config);
					},
					formatter: lang.hitch(this, "_formatValue"),
					sortable: false,
					editable: true
				},
				{
					field: "icon",
					styles: 'align: center; vertical-align: center;',
					name: " ",
					headerAriaLabel: this.messages.admin_plugins_icon,
					sortable: false,
					width: has("isWebKit") ? "30px" : "16px",
					formatter: lang.hitch(this, "_pluginIconFormatter")
				},
				{
					field: "name",
					name: this.messages.name_label
				},
				{
					field: "version",
					name: this.messages.admin_plugins_version_heading
				}
			];

			this._pluginsStore = this._createPluginsStore(plugins);
			this._pluginsGrid = new Grid({
				id: 'pluginsGrid',
				cacheClass: Cache,
				structure: structure,
				style: "height: 320px",
				store: this._pluginsStore,
				textDir: has("text-direction"),
				adminSelected: true,
				adminCBID: "pluginCB",
				modules: [
					modFocus,
					modVScroll,
					modCellWidget,
					modEdit,
//					modRowHeader,
					modSelectRow,
//					modIndirectSelect,
//					modExtendedSelectRow,
					modSingleSort
				]
			});

			this._pluginsGrid.connect(this._pluginsGrid, "onCellClick", lang.hitch(this, function(evt) {
				this._gridEventHandler(this._pluginsGrid, this._pluginsStore, evt);
				this._onChange(this._pluginsGrid);
			}));

			this._pluginsGrid.connect(this._pluginsGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.SPACE) {
					this._gridEventHandler(this._pluginsGrid, this._pluginsStore, evt);
					this._onChange(this._pluginsGrid);
				}
			}));
			
			this._pluginsGrid._onChange = lang.hitch(this, function(grid) {
				this._onChange(grid);
			});
			
			this._pluginsGrid.model.setStore(this._pluginsStore);
			this._pluginsGrid.placeAt(this._pluginPane);
			domClass.add(this._pluginPane.domNode, "gridxWholeRow gridxAlternatingRows");
			this._pluginsGrid.startup();
			this._pluginsGrid.sort.sort(2, false);
			// this._selectAll(this._pluginsGrid);
			ecm.widget.admin.ExportConfigurationDialog._tabs["plugin"] = this._pluginsGrid;

			this.resize();
			deferred.resolve(true);
			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Create a plugins store
		 * 
		 * @return a plugins store
		 * @private
		 */
		_createPluginsStore: function(plugins) {
			var methodName = "_createPluginsStore";
			this.logEntry(methodName);
			var items = [];
			if (plugins) {
				array.forEach(plugins, function(plugin, i) {
					items.push({
						"id": plugin.id,
						"name": plugin.getName(),
						"display": true,
						"version": plugin.getVersion()
					});
				});
			}
			this.logExit(methodName);
			return new Store({
				data: {
					identifier: "id",
					items: items
				}
			});
		},

		/**
		 * Initialize themes grids
		 * 
		 * @param themes
		 *            An array of ThemeConfig {@link ecm.model.admin.ThemeConfig} objects
		 * @private
		 */
		_initializeThemesGrid: function(themes) {
			var methodName = "_initializeThemesGrid";
			this.logEntry(methodName);
			var deferred = new Deferred();

			var structure = [
				{
					field: "checkbox",
					width: has("isWebKit") ? "30px" : "18px",
					name: "<span class='dijitInline dijitCheckBox dijitCheckBoxChecked' id=\"themeCB\" aria-label=\"" + ecm.messages.export_config + "\" onClick=\"ecm.widget.admin.ExportConfigurationDialog._toggleCheckbox('theme')\"></span>",							
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return [
							'<span data-dojo-type="dijit.form.CheckBox"	class="gridxHasGridCellValue"',
							'data-dojo-attach-point="cb">'
						].join('');
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cb.set("checked", gridData.display);
						this.cb.focusNode.setAttribute("aria-label", ecm.messages.export_config);
					},
					formatter: lang.hitch(this, "_formatValue"),
					sortable: false,
					editable: true
				},
				{
					field: "icon",
					styles: 'align: center; vertical-align: center;',
					name: " ",
					headerAriaLabel: this.messages.admin_theme_icon,
					sortable: false,
					width: has("isWebKit") ? "30px" : "16px",
					formatter: lang.hitch(this, "_themeIconFormatter")
				},
				{
					field: "name",
					name: this.messages.name_label
				},
				{
					field: "id",
					name: this.messages.id_heading
				}
			];

			this._themesStore = this._createThemesStore(themes);
			this._themesGrid = new Grid({
				id: 'themesGrid',
				cacheClass: Cache,
				structure: structure,
				style: "height: 320px",
				store: this._themesStore,
				textDir: has("text-direction"),
				adminSelected: true,
				adminCBID: "themeCB",
				modules: [
					modFocus,
					modVScroll,
					modCellWidget,
					modEdit,
					modSelectRow,
					modSingleSort
				]
			});

			this._themesGrid.connect(this._themesGrid, "onCellClick", lang.hitch(this, function(evt) {
				this._gridEventHandler(this._themesGrid, this._themesStore, evt);
				this._onChange(this._themesGrid);
			}));

			this._themesGrid.connect(this._themesGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.SPACE) {
					this._gridEventHandler(this._themesGrid, this._themesStore, evt);
					this._onChange(this._themesGrid);
				}
			}));
			
			this._themesGrid._onChange = lang.hitch(this, function(grid) {
				this._onChange(grid);
			});
			
			this._themesGrid.model.setStore(this._themesStore);
			this._themesGrid.placeAt(this._themePane);
			domClass.add(this._themePane.domNode, "gridxWholeRow gridxAlternatingRows");
			this._themesGrid.startup();
			this._themesGrid.sort.sort(2, false);
			ecm.widget.admin.ExportConfigurationDialog._tabs["theme"] = this._themesGrid;

			this.resize();
			deferred.resolve(true);
			this.logExit(methodName);
			return deferred;
		},

		/**
		 * Create a themes store
		 * 
		 * @return a themes store
		 * @private
		 */
		_createThemesStore: function(themes) {
			var methodName = "_createThemesStore";
			this.logEntry(methodName);
			var items = [];
			if (themes) {
				array.forEach(themes, function(theme, i) {
					items.push({
						"id": theme.id,
						"name": theme.getName(),
						"display": true
					});
				});
			}
			this.logExit(methodName);
			return new Store({
				data: {
					identifier: "id",
					items: items
				}
			});
		},

		/**
		 * This method controls the Select All checkbox created in the column. It will be triggered by the cellClick
		 * event and examine all item to decide if checkall should be turn on.
		 */
		_onChange: function(grid) {
			if (grid) {
				var enable = true;
				var enableDisableExportButton = false;
				grid.store.query().forEach(function(row) {
					enable &= row.display;
					enableDisableExportButton |= row.display;
				}); // as long as we have at least one desktop is selected Export button is on. 

				grid.adminSelected = enable;
				var cb = dom.byId(grid.adminCBID);
				if (enable){
					domClass.add(cb, "dijitCheckBoxChecked");
				}
				else {
					domClass.remove(cb, "dijitCheckBoxChecked");
				}
				return enableDisableExportButton;
			}
		},

		_updateButton: function(enable) {
			this.okButton.set("disabled", !(enable && this.fileNameField.isValid()));
		},

		_formatValue: function(data, rowId, rowIndex) {
			return data;
		},

		/**
		 * Resize the dialog
		 */
		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},

		_selectAll: function(grid) {
			array.forEach(grid.rows(), function(row) {
				try {
					row.select(true);
				} catch (err) {
					;
				}

			});
		},

		_gridEventHandler: function(grid, store, evt) {
			var cell = grid.cell(evt.rowId, evt.columnId);
			if (cell) {
				// var widget = cell.widget();
				var data = store.get(evt.rowId);
				if (data) {
					data.display = !data.display;
					grid.model.clearCache();
					grid.body.refresh();

				}
			}
		},

		/**
		 * Get ids from store
		 * 
		 * @param grid -
		 *            a Grid with checkbox at row head.
		 * @return An array of ID
		 * @private
		 */
		_getIds: function(grid) {
			var methodName = "_getIds";
			this.logEntry(methodName);
			var ids = [];
			if (grid) {
				grid.store.query().forEach(function(row) {
					if (row.display)
						ids.push(row.id);
				});
//				array.forEach(grid.rows(), function(row) {
//					if (row.isSelected())
//						ids.push(row.id);
//				});
			}
			this.logExit(methodName);
			return ids.join(",");
		}
	});

	/**
	 * @private
	 */
	exportDialog._toggleCheckbox = function(type) {
		if (exportDialog._tabs[type]) {
			exportDialog._tabs[type].adminSelected = !exportDialog._tabs[type].adminSelected;
			exportDialog._tabs[type].store.query().forEach(lang.hitch(this, function(item) {
				item.display = exportDialog._tabs[type].adminSelected;
			}));

			if (type == "desktop"){
				exportDialog._tabs[type]._updateExportButton(exportDialog._tabs[type]);
			}
			else {
				exportDialog._tabs[type]._onChange(exportDialog._tabs[type]);
			}
			exportDialog._tabs[type].model.clearCache();
			exportDialog._tabs[type].body.refresh();

		}
	};

	return exportDialog;

});

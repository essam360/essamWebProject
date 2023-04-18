/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/kernel",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/keys",
	"dojo/aspect",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/DesktopFeatureConfig",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/widget/HoverHelp",
	"ecm/widget/CheckBox",
	"ecm/widget/dialog/MessageDialog",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/Tooltip",
	"dojo/store/Memory",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/CellWidget",
	"gridx/modules/move/Row",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/admin/DesktopFeatureConfigPanel",
	"idx/layout/BorderContainer",
	"idx/html",
	"idx/layout/TitlePane",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopFeatures.html"
], //

function(declare, lang, array, kernel, has, string, geometry, domClass, domStyle, domAttr, keys, aspect, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, LoggerMixin, DesktopData, DesktopFeatureConfig, AdminRoleConfig, HoverHelp, CheckBox, MessageDialog, Button, ContentPane, Tooltip, MemoryStore, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, CellWidget, MoveRow, _MoveUpDownGridxMixin, DesktopFeatureConfigPanel, BorderContainer, idxHtml, TitlePane, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.DesktopFeatures
	 * @class Provides a pane that is used to select and configure features assigned to a desktop
	 * @since 2.0.3
	 */

	return declare("ecm.widget.admin.DesktopFeatures", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin,
		_MoveUpDownGridxMixin
	], {
		/** @lends ecm.widget.admin.DesktopFeatures.prototype */

		templateString: template,
		imageHTML: "&nbsp;&nbsp;<img style='vertical-align: middle;margin-top: 1px;margin-bottom:1px;' class='adminPluginsLayout' src='dojo/resources/blank.gif' />",
		widgetsInTemplate: true,
		_init: false,
		DEFAULT_LAYOUT: "ecm.widget.layout.NavigatorMainLayout",
		TEAMSPACE_FEATURE: "manageTeamspaces",
		WORK_FEATURE: "workPane",
		BROWSE_FEATURE: "browsePane",
		SEARCH_FEATURE: "searchPane",
		FAVORITES_FEATURE: "favorites",
		ENTRYTEMPLATES_FEATURE: "manageEntryTemplates",
		ASYNCTASK_FEATURE: "asyncTaskPane",

		postCreate: function() {
			this.inherited(arguments);

			this._featureConfigPanel = new DesktopFeatureConfigPanel();
			this.featureConfigContainer.appendChild(this._featureConfigPanel.domNode);

			this._layoutTitlePane.set("aria-label", this.messages.admin_layout_components_title);
			this._layoutTitlePane.set("title", this.messages.admin_layout_components_title);
			this._featureTitlePane.set("aria-label", this.messages.admin_layout_features_title);
			this._featureTitlePane.set("title", this.messages.admin_layout_features_title);
			this._defaultFeature.set("placeholder", this.messages.admin_default_category_placeholder);

			this.own(aspect.after(this._featureConfigPanel, "onMarkDirty", lang.hitch(this, "onFeatureConfigMarkDirty"), true));
			this._setHoverHelp();
		},

		_setHoverHelp: function() {
			this._layoutDropdown.setHoverHelp(this._layout_field_hover_help);
			this._defaultFeature.setHoverHelp(this._default_feature_hover_help);
			this._thumbNailsEnabled.setHoverHelp(this._layout_document_thumbnails_hover_help);
			this._thumbNailsDisabled.setHoverHelp(this._layout_document_thumbnails_hover_help);
			this._showGlobalToolBarEnabled.setHoverHelp(this._layout_show_globaltoolbar_hover_help);
			this._showGlobalToolBarDisabled.setHoverHelp(this._layout_show_globaltoolbar_hover_help);
			this._showStatusbarEnabled.setHoverHelp(this._layout_show_statusbar_hover_help);
			this._showStatusbarDisabled.setHoverHelp(this._layout_show_statusbar_hover_help);
		},

		destroy: function() {
			this.logEntry("destroy");
			this.tabRepositories = null;
			this.tabGeneral = null;
			this._cleanupData();

			this.inherited(arguments);
			this.logExit("destroy");
		},

		_cleanupData: function() {
			this.logEntry("_cleanupData");
			this._init = false;
			if (this._cachedLayoutInstances) {
				for ( var i in this._cachedLayoutInstances) {
					this._cachedLayoutInstances[i].destroy();
				}
				this._cachedLayoutInstances = null;
			}
			this.logExit("_cleanupData");
		},

		// Called before save - copy the screen values into the model
		loadWithFieldValues: function(desktopConfig) {
			this._featureConfigPanel.saveFieldData();
			var configs = this._getSelectedFeatureConfigs(desktopConfig.id);
			desktopConfig.setDesktopFeatures(configs);
			desktopConfig.setDefaultFeature(this._defaultFeature.get('value'));
			desktopConfig.setLayout(this._layoutDropdown.get('value'));
			desktopConfig.setLayoutActionHandler("ecm.widget.layout.CommonActionsHandler");
			desktopConfig.setShowThumbnails(this._thumbNailsEnabled.get('checked'));
			desktopConfig.setShowGlobalToolbar(this._showGlobalToolBarEnabled.get('checked'));
			desktopConfig.setShowStatusbar(this._showStatusbarEnabled.get('checked'));

			// save the "old" settings
			var values = [];
			var setOther = false;
			var browseDef = null;
			var searchDef = null;
			var teamspaceDef = null;
			var workflowDef = null;
			var entryTemplateDef = null;
			for (var i = 0; i < configs.length; i++) {
				var featureid = configs[i].id;
				var dot = featureid.indexOf(".");
				if (dot > 0) {
					featureid = featureid.substring(dot + 1);
				}
				values.push(featureid);

				if (featureid == this.TEAMSPACE_FEATURE) {
					teamspaceDef = configs[i].getDefaultRepository();
				} else if (featureid == this.WORK_FEATURE) {
					workflowDef = configs[i].getDefaultRepository();
				} else if (featureid == this.ENTRYTEMPLATES_FEATURE)
					entryTemplateDef = configs[i].getDefaultRepository();
				else if (featureid == this.BROWSE_FEATURE) {
					browseDef = configs[i].getDefaultRepository();
				} else if (featureid == this.SEARCH_FEATURE) {
					searchDef = configs[i].getDefaultRepository();
				}
			}
			desktopConfig.setTeamspacesDefaultRepository(teamspaceDef);
			desktopConfig.setWorkDefaultRepository(workflowDef);
			desktopConfig.setEntryTemplatesDefaultRepository(entryTemplateDef);

			// set "other" def to either browse or search def
			if (browseDef)
				desktopConfig.setOtherFeaturesDefaultRepository(browseDef);
			else
				desktopConfig.setOtherFeaturesDefaultRepository(searchDef);

			desktopConfig.setFeatures(values);
		},

		setData: function(desktopData) {
			this.desktopData = desktopData;
			//save the list of initial repositories (before adding/deleting)
			this._allInitRepositories = desktopData.desktopConfig.getValues(desktopData.desktopConfig.REPOSITORIES);
			this._featureConfigPanel.setData(desktopData);
		},

		setConnect: function(tabRepositories, tabGeneral, onComplete) {
			this.tabRepositories = tabRepositories;
			this.tabGeneral = tabGeneral;
			this.own(aspect.after(tabRepositories, "onAddAndRemoveRepositories", lang.hitch(this, function() {
				this.onAddAndRemoveRepositories();
			})));
			this.own(aspect.after(this, "onAddAndRemoveRepositories", lang.hitch(this, this.turnoffBrowseIfODOnly)));
			this._featureConfigPanel.setConnect(this, tabRepositories, onComplete);

			this.own(aspect.after(tabGeneral, "onAddAndRemovePlugins", lang.hitch(this, function() {
				this.refreshGrid();
				this._populateLayoutDropDown();
			})));

			//aspect.before(tabRepositories, "_onFieldChange", lang.hitch(this, this.updateRepositoryDropDown));
		},
		
		setupForDesktopAdmin: function(desktopAdminRole){
			this.desktopAdminRole = desktopAdminRole;
			
			domStyle.set(this.layoutRow, "display", "none");
			domStyle.set(this.thumbnailRow, "display", "none");
			
			if (!desktopAdminRole || (!desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR) &&
					!desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_STATUS_BAR))){
					
				domStyle.set(this._layoutTitlePane.domNode, "display", "none");
			}
			else {
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_GLOBAL_TOOLBAR)){
					domStyle.set(this.globalToolbarRow, "display", "none");
				}
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_STATUS_BAR)){
					domStyle.set(this.statusbarRow, "display", "none");
				}
			}
		},

		turnoffBrowseIfODOnly: function() {
			if (!this._userActionOnBrowse && this._ODOnly)
				this.enableFeatureInGrid(this._featuresGrid, !this._ODOnly, this.BROWSE_FEATURE);
		},

		/**
		 * Enable or disable a feature in a grid.
		 * 
		 * @param grid -
		 *            Grid control.
		 * @param enable -
		 *            boolean (true/false)
		 * @param featureID -
		 *            string id, for example string value of "favorites" is for FAVORITES_FEATURE
		 */
		enableFeatureInGrid: function(grid, enable, featureID) {
			if (grid && featureID) {
				var item = grid.model.store.get(featureID);
				if (item) {
					if (item.selected != enable) {
						item.selected = enable;
						item.isValid = enable ? item.isValid : true;
						grid.model.store.put(item, {
							id: item.id,
							overwrite: true
						});
					}
				}

				// check if toggled the current selection, if so then show/hide the edit panel
				var selected = this._featuresGrid.select.row.getSelected();
				if (selected.length > 0 && selected[0] == item.id) {
					if (item.selected) {
						// refresh the current row
						if (this._featureConfigPanel._currentFeatureConfig) {
							this._refreshFeatureGridRow(this._featureConfigPanel._currentFeatureConfigId);
						}
						var featureConfig = this._getFeatureConfig(item.id);
						if (featureConfig != null) {
							this._featureConfigPanel.show(featureConfig, item.name, this._getFeatures(item.id));
							domClass.add(this._configPaneInstructions, "dijitHidden"); //hide the instructions
							domAttr.set(this._featureConfigPanel.domNode, "aria-label", string.substitute(this.messages.admin_layout_featureconfig_label, [
								item.name
							]));
						}
					} else {
						this._featureConfigPanel.hide();
						domClass.remove(this._configPaneInstructions, "dijitHidden"); //show the instructions
						this._refreshFeatureGridRow(item.id); // in case it was invalid, clears the invalid icon
					}
				}
				this.onUpdateDefaultFeature(); // update the default features dropdown list
			}
		},

		/**
		 * Event invoked when repositories are added or removed in the selected repository list.
		 */
		onAddAndRemoveRepositories: function() {
			this._ODOnly = true;
			var self = this;
			array.forEach(this.tabRepositories.sloshBucket.getSelectedItems(), function(entry) {
				if (entry.type && entry.type != "od")
					self._ODOnly = false;
			});
			this._updateConfigs();
		},

		// Called when the user hits the Reset button 
		loadData: function(onComplete) {
			this._cleanupData();

			// get the feature configs
			this._featureConfigs = [];
			this._featureConfigPanel.hide();
			this._featureConfigPanel.reset();
			if (this.desktopData.desktopFeatures) {
				for (var i = 0; i < this.desktopData.desktopFeatures.length; i++) {
					this._featureConfigs.push(this.desktopData.desktopFeatures[i]);
				}
			}

			this._loadAvailableLayout(lang.hitch(this, function() {
				this._initializeGrid();
				this.resize();
				this.onUpdateDefaultFeature();
				setTimeout(lang.hitch(this, function() {
					this._init = true;
					if (onComplete)
						onComplete();
				}, 100));
			}));
		},

		/**
		 * Get layout definition from server.
		 */
		_loadAvailableLayout: function(onComplete) {
			this.logEntry("_loadAvailableLayout");

			if (!this.desktopData.isAdmin()) {
				if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getShowThumbnails())
					this._thumbNailsEnabled.set('checked', true);
				else
					this._thumbNailsDisabled.set('checked', true);

				if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getShowGlobalToolbar())
					this._showGlobalToolBarEnabled.set('checked', true);
				else
					this._showGlobalToolBarDisabled.set('checked', true);

				// default show statusbar to true
				if (this.desktopData.desktopConfig && (this.desktopData.desktopConfig.getShowStatusbar() || this.desktopData.desktopConfig.getShowStatusbar() == null))
					this._showStatusbarEnabled.set('checked', true);
				else
					this._showStatusbarDisabled.set('checked', true);

				// get list of available layouts
				this._populateLayoutDropDown();
				var layout = this.DEFAULT_LAYOUT;
				if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getLayout()) {
					layout = this.desktopData.desktopConfig.getLayout();
				}
				this._layoutDropdown.set('value', layout);
				this._currentLayout = layout;
				this._loadFeatures(layout, this.desktopData.customFeatures, lang.hitch(this, function() {
					if (!this.desktopData.isNew() && this.desktopData.desktopConfig.getDefaultFeature()) {
						this._defaultFeature.set('value', this.desktopData.desktopConfig.getDefaultFeature());
					}
					if (onComplete) {
						onComplete();
					}
				}));

			} else {
				if (onComplete) {
					onComplete();
				}
			}
			this.logExit("_loadAvailableLayout");
		},

		/**
		 * Using the passed in layout and custom features, create a store. Load available using store created in
		 * previous steps. Load selected feature either from loaded desktopConfig object or empty object for a new
		 * desktop.
		 */
		_loadFeatures: function(layout, customFeatures, onComplete) {
			this.logEntry("_loadFeatures", layout, customFeatures);
			var layoutInstance = (this._cachedLayoutInstances && this._cachedLayoutInstances[layout]) ? this._cachedLayoutInstances[layout] : null;
			if (!layoutInstance) {
				var Layout = dojo["require"](layout);
				layoutInstance = new Layout({
					includeSkipNavigationLinks: false
				});
				if (!this._cachedLayoutInstances) {
					this._cachedLayoutInstances = {};
				}
				this._cachedLayoutInstances[layout] = layoutInstance;
			}

			var layoutFeatures = layoutInstance.getAvailableFeatures();
			var features = [];
			if (layoutFeatures && layoutFeatures.length > 0) {
				this._featuresEnabled = true;
				this._defaultFeature.set("disabled", false);
				domStyle.set(this._defaultFeatureDropRequired, "display", "");

				for ( var i in layoutFeatures) {
					features.push({
						name: layoutFeatures[i].id,
						label: layoutFeatures[i].name
					});
				}
				for ( var j in customFeatures) {
					var customFeature = customFeatures[j];
					var replaced = false;
					for ( var i in layoutFeatures) {
						if (layoutFeatures[i].id == customFeature.id) {
							features.splice(i, 1, customFeature);
							if (!features[i].label) {
								features[i].label = customFeature.name;
							}
							features[i].name = customFeature.id;
							replaced = true;
							break;
						}
					}
					if (!replaced) {
						features.push({
							name: customFeature.id,
							label: customFeature.name,
							pluginId: customFeature.pluginId,
							featureClass: customFeature.featureClass,
							configurationDijitClass: customFeature.configurationDijitClass
						});
					}
				}

				this._features = features;
				this._featureConfigPanel.hide();
			} else {
				this._featuresEnabled = false;
				this._features = features;
				this._defaultFeature.set("disabled", true);
				domStyle.set(this._defaultFeatureDropRequired, "display", "none");
			}
			//layoutInstance.destroy(); // to avoid side effects on the UI // Causes js error for some layouts that async load widgets (i.e. the banner async loading the actions dropdown)
			if (onComplete) {
				onComplete();
			}
			this.logExit("_loadFeatures");
		},
		
		_onDefaultFeatureChange: function(){
			if (this._init && !this.compareValue(this.desktopData.desktopConfig.getDefaultFeature(), this._defaultFeature)){
				var dialog = new MessageDialog({
					text: this.messages.admin_layout_default_feature_warning
				});
				dialog.show();
			}
			this._onFieldChange();
		},
		
		compareValue: function(value, control) {
			if (value)
				return value == control.get('value');
			else
				return control.get('value') == "";
		},

		// override
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			if (this._init) {
				this.onMarkDirty();
			}
		},

		// override 
		onCheckSave: function() {
		},

		// something changed on the feature config panel, refresh the selected feature in the grid (to update the 
		// valid icon)
		onFeatureConfigMarkDirty: function() {
			if (this._featureConfigPanel._currentFeatureConfig) {
				this._refreshFeatureGridRow(this._featureConfigPanel._currentFeatureConfigId);
			}
			this.onMarkDirty();
		},

		// Check if all the data is valid - called when the user hits save
		validateData: function(focus) {
			var valid = true;
			if (!this._init)
				return valid;

			if (valid && !this.desktopData.isAdmin()) {
				if (this._featuresEnabled)
					valid = this.validateNotNull(this._defaultFeature, focus, true);

				if (valid)
					valid = this.validateNotNull(this._layoutDropdown, focus, true);

				// validate feature configs:
				if (valid) {
					// need to save the current edited config
					// causing the showRepositories setting to be erroneously changed
					//this._featureConfigPanel.saveFieldData(); 
					//valid = this._featureConfigPanel.validateData(focus);
					var configs = this._getSelectedFeatureConfigs();
					var self = this;
					array.some(configs, function(config) {
						valid = self._isValidConfig(config);
						return !valid;
					});
				}
			}

			if (valid)
				valid = this._featureConfigPanel.validate();

			return valid;
		},

		_isValidConfig: function(config) {
			var valid = config.isValid();

			// check if the default repo is in the desktop
			if (valid && config.getDefaultRepository() && (config.id != this.FAVORITES_FEATURE || config.getShowMyCheckouts())) {
				var defaultRepId = config.getDefaultRepository();
				var selectedRepositories = this.tabRepositories.sloshBucket.getSelectedItems();
				var defaultRepository = null;
				if (selectedRepositories) {
					valid = array.some(selectedRepositories, function(repo) {
						if (repo.id == defaultRepId) {
							defaultRepository = repo;
							return true;
						}
						return false;
					});

					// check if it is a valid repo for this feature:
					if (defaultRepository && valid) {
						valid = this._isValidRepository(config, defaultRepository);
					}
				}
			}

			if (this._featureConfigPanel) {
				if (!this._featureConfigPanel.validateCurrentConfig(config))
					return false;
			}
			return valid;
		},

		validateNotNull: function(widget, focus, required) {
			var value = widget.get('value');
			if (!value && required) {
				if (focus)
					widget.focus();
				return false;
			}
			return true;
		},

		// return false if you want to mark tab as dirty - called when data is changed
		isResetingFields: function() {
			if (!this._init)
				return true;

			var values = this.desktopData.desktopConfig.getFeatures();
			var selFeatures = this._getSelectedFeatures();
			var featureNotFound = array.some(values, function(value) {
				var found = array.some(selFeatures, function(feature) {
					return (feature.id == value);
				});
				if (!found) {
					return true;
				}
			});
			if (featureNotFound)
				return false;

			if (!this.compareValue(this.desktopData.desktopConfig.getDefaultFeature(), this._defaultFeature))
				return false;

			if (!this.desktopData.isAdmin()) {
				var value = this.desktopData.desktopConfig.getShowThumbnails() && !this.desktopData.desktopConfig.getShowThumbnails() ? false : true;
				if (value != this._thumbNailsEnabled.get('checked'))
					return false;

				value = this.desktopData.desktopConfig.getShowGlobalToolbar() && this.desktopData.desktopConfig.getShowGlobalToolbar() ? true : false;
				if (value != this._showGlobalToolBarEnabled.get('checked'))
					return false;

				value = this.desktopData.desktopConfig.getShowStatusbar() && this.desktopData.desktopConfig.getShowStatusbar() ? true : false;
				if (value != this._showStatusBarEnabled.get('checked'))
					return false;
			}

			return true;
		},

		_initializeGrid: function() {
			if (this._featuresGrid) {
				this._featuresGrid.destroy();
			}
			this._featuresGrid = new Grid({
				region: "center",
				"aria-label": this.messages.admin_desktop_layout_features,
				id: this.id + "_featuresGrid",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: this._createStore(),
				structure: [
					{
						field: "isValid",
						name: " ",
						headerAriaLabel: this.messages.error_message,
						sortable: false,
						filterable: false,
						width: "20px",
						decorator: lang.hitch(this, function(data, rowId, rowIndex) {
							var item = this._featuresGrid.model.store.get(rowId);
							if (item && item.selected && !item.isValid) {
								return '<img src="' + ecm.model.desktop.servicesUrl + "/ecm/widget/resources/images/error.png" + '" alt="' + this.messages.admin_feature_config_invalid_icon_title + '" title="' + this.messages.admin_feature_config_invalid_icon_title + '" src="dojo/resources/blank.gif"/>';
							}
							return "";
						}),
						style: 'align: center; text-align: center;'
					},
					{
						field: "selected",
						//name: "Selected",
						headerAriaLabel: this.messages.admin_desktop_mobile_select_feature_label,
						width: "30px",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						decorator: function(data, rowId, rowIndex) {
							return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="cb">';
						},
						setCellValue: function(data, storeData, cellWidget) {
							this.cb.set("checked", data);
							var item = cellWidget.cell.row.item();
							if (item) {
								domAttr.set(this.cb.focusNode, "aria-label", item.name);
								this.cb.set("disabled", item.disabled);
							}
						}
					},
					{
						field: "name",
						name: this.messages.admin_layout_feature_list_header
					}
				],
				style: "height: 300px; width: 300px;",
				modules: [
					CellWidget,
					Focus,
					MoveRow,
					SelectRow,
					{
						moduleClass: SelectRow,
						multiple: false,
						triggerOnCell: true
					}
				]
			});
			domClass.add(this._featuresGrid.domNode, "compact gridxWholeRow");
			this._featuresGridArea.appendChild(this._featuresGrid.domNode);

			this._featuresGrid.startup();
			this.own(aspect.after(this._featuresGrid.select.row, "onSelectionChange", lang.hitch(this, "_gridSelectionChange"), true));
			this.own(aspect.after(this._featuresGrid, "onCellClick", lang.hitch(this, "_onCellClick"), true));
			this.own(aspect.after(this._featuresGrid, "onCellKeyDown", lang.hitch(this, "_onCellClick"), true));
			this._addGridTooltipConnect(this._featuresGrid);
		},

		_onCellClick: function(evt) {
			if (evt.columnId == "2" && ((evt.type == "keydown" && evt.keyCode == keys.SPACE) || evt.type == "click")) {
				this._toggleCheckbox(this._featuresGrid, evt);
			}
		},

		onSelect: function() {
			if (this._featureConfigPanel)
				this._featureConfigPanel.onSelect();
		},

		onLayoutDropdownChange: function(layout) {
			if (layout != this._currentLayout) {
				//console.debug(layout);

				if (!this._init) {
					this._init = true;
				}
				this._loadFeatures(layout, this.desktopData.customFeatures, lang.hitch(this, function() {
					this.refreshGrid();
					this.onUpdateDefaultFeature();
				}));
				this._currentLayout = layout;
			}
		},

		// refresh the grid with the current features
		refreshGrid: function() {
			if (this._featureConfigPanel)
				this._featureConfigPanel.hide();

			if (!this._featuresGrid) {
				this._initializeGrid();
			} else {
				this._featuresGrid.setStore(this._createStore());
			}
		},

		_toggleCheckbox: function(grid, evt) {
			var item = grid.model.store.get(evt.rowId);
			if (item) {
				item.selected = !item.selected;
				grid.model.store.put(item, {
					id: item.id,
					overwrite: true
				});

				if (item.id == this.BROWSE_FEATURE)
					this._userActionOnBrowse = true;

				// check if toggled the current selection, if so then show/hide the edit panel
				var selected = this._featuresGrid.select.row.getSelected();
				if (selected.length > 0 && selected[0] == item.id) {
					if (item.selected) {
						this._editConfig(item.id, item.name);
					} else {
						this._featureConfigPanel.hide();
						domClass.remove(this._configPaneInstructions, "dijitHidden"); //show the instructions
						this._refreshFeatureGridRow(item.id); // in case it was invalid, clears the invalid icon
					}
				} else {
					// select the toggled feature
					this._featuresGrid.select.row.clear();
					this._featuresGrid.select.row.selectById(item.id);
				}
				this.onUpdateDefaultFeature(); // update the default features dropdown list
			}
		},

		_createStore: function() {
			var items = [];
			this._featuresStore = null;

			if (this._features) {
				var featureIds = [];
				// first get the selected features so their order is retained
				if (this.desktopData.desktopFeatures && this.desktopData.desktopFeatures.length > 0) {
					for (var i = 0; i < this.desktopData.desktopFeatures.length; i++) {
						var id = this.desktopData.desktopFeatures[i].id;
						var dot = id.indexOf(".");
						if (dot > 0) {
							id = id.substring(dot + 1);
						}
						featureIds.push(id);
					}
				} else if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getFeatures() && this.desktopData.desktopConfig.getFeatures().length > 0) {
					// get selected features from the old setting
					featureIds = this.desktopData.desktopConfig.getFeatures();
				} else if (this.desktopData.isNew()) {
					// new desktops default to favs, browse and search
					featureIds = [
						this.FAVORITES_FEATURE,
						this.BROWSE_FEATURE,
						this.SEARCH_FEATURE
					];
				}

				var unselectedFeatures = [];
				// get the rest:
				for (var i = 0; i < this._features.length; i++) {
					if (array.indexOf(featureIds, this._features[i].name) == -1) {
						unselectedFeatures.push(this._features[i].name);
					}
				}

				var order = 0;
				array.forEach(featureIds, lang.hitch(this, function(entry, index) {
					array.some(this._features, lang.hitch(this, function(feature) {
						var include = true;
						if (feature.pluginId && !this._isFeatureOrLayoutAvailable(feature.pluginId))
							include = false;
						
						var disabled = this._isFeatureDisabled(feature);
						if (feature.name == entry && include) {
							var config = this._getFeatureConfig(feature.name);
							var isValid = this._isValidConfig(config);
							items.push({
								"id": feature.name,
								"name": feature.label,
								"order": order++,
								"selected": true,
								"isValid": isValid,
								"disabled": disabled
							});
							return true;
						}
					}));
				}));
				array.forEach(unselectedFeatures, lang.hitch(this, function(entry, index) {
					array.some(this._features, lang.hitch(this, function(feature) {
						var include = true;
						if (feature.pluginId && !this._isFeatureOrLayoutAvailable(feature.pluginId))
							include = false;

						var disabled = this._isFeatureDisabled(feature);
						if (feature.name == entry && include) {
							items.push({
								"id": feature.name,
								"name": feature.label,
								"order": order++,
								"selected": false,
								"isValid": true,
								"disabled": disabled
							});
							return true;
						}
					}));
				}));
			}

			this._featuresStore = new MemoryStore({
				data: items
			});
			return this._featuresStore;
		},
		
		_isFeatureDisabled: function(feature){
			var disabled = false;
			
			// Disable features for desktop admins.
			if (this.desktopAdminRole){
				if ((feature.name == this.FAVORITES_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_HOME_PRIVILEGE)) ||
						(feature.name == this.BROWSE_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_BROWSE_PRIVILEGE)) ||
						(feature.name == this.SEARCH_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_SEARCH_PRIVILEGE)) ||
						(feature.name == this.TEAMSPACE_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_TEAMSPACES_PRIVILEGE)) ||
						(feature.name == this.WORK_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_WORK_PRIVILEGE)) ||
						(feature.name == this.ENTRYTEMPLATES_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_ET_MGR_PRIVILEGE)) ||
						(feature.name == this.ASYNCTASK_FEATURE && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_ASCNC_TASKS_PRIVILEGE)) ||
						(feature.pluginId && !this.desktopAdminRole.hasPrivilege(AdminRoleConfig.LAYOUT_MANAGE_PLUGIN_FEATURES))){
					
					// TODO: Need to add URL features to this when they are available.
					disabled = true;
				}
			}
			
			return disabled;
		},

		// get the feature config data for the selected features
		// if the desktopId is passed then prepend it to the feature id, since when we save them they need
		// the desktopId in the id
		_getSelectedFeatureConfigs: function(desktopId) {
			var selectedFeatures = this._getSelectedFeatures();
			var featureConfigs = [];
			for (var i = 0; i < selectedFeatures.length; i++) {
				var featureConfig = this._getFeatureConfig(selectedFeatures[i].id);
				// check if the id has the desktop id prepended yet, on new desktops 
				if (desktopId && featureConfig.id.indexOf(desktopId+".") != 0 ) {
					featureConfig.id = desktopId + "." + featureConfig.id;
				}
				featureConfigs.push(featureConfig);
			}
			return featureConfigs;
		},

		// get the existing feature config object or create a new one
		_getFeatureConfig: function(featureId) {
			var featureConfig = null;
			for (var i = 0; i < this._featureConfigs.length; i++) {
				// the id might have the desktop id in it
				var configId = this._featureConfigs[i].id;
				var dot = configId.indexOf(".");
				if (dot >= 0) {
					configId = configId.substring(dot + 1);
				}

				if (configId == featureId) {
					featureConfig = this._featureConfigs[i];
					break;
				}
			}
			// not there so make a new one
			if (featureConfig == null) {
				featureConfig = DesktopFeatureConfig.createDesktopFeatureConfig(featureId);
				this._featureConfigs.push(featureConfig);
				// set defaults:
				if (featureId == this.BROWSE_FEATURE) {
					featureConfig.setShowTreeView(true);
					featureConfig.setShowDocumentInfoPane(true);
					featureConfig.setDocumentInfoPaneDefaultOpen(false);
					featureConfig.setDocumentInfoPaneOpenOnSelection(true);
				} else if (featureId == this.FAVORITES_FEATURE) {
					featureConfig.setShowMyCheckouts(false);
					featureConfig.setShowDocumentInfoPane(true);
					featureConfig.setDocumentInfoPaneDefaultOpen(false);
					featureConfig.setDocumentInfoPaneOpenOnSelection(true);
				} else if (featureId == this.SEARCH_FEATURE) {
					featureConfig.setShowDocumentInfoPane(true);
					featureConfig.setDocumentInfoPaneDefaultOpen(false);
					featureConfig.setDocumentInfoPaneOpenOnSelection(true);
				} else if (featureId == this.WORK_FEATURE) {
					featureConfig.setShowDocumentInfoPane(true);
					featureConfig.setDocumentInfoPaneDefaultOpen(false);
					featureConfig.setDocumentInfoPaneOpenOnSelection(true);
				}
			}

			// default repository 			
			if (!featureConfig.getDefaultRepository()) {
				if (featureId == this.BROWSE_FEATURE || featureId == this.SEARCH_FEATURE) {
					featureConfig.setDefaultRepository(this.desktopData.desktopConfig.getOtherFeaturesDefaultRepository());
				} else if (featureId == this.TEAMSPACE_FEATURE) {
					featureConfig.setDefaultRepository(this.desktopData.desktopConfig.getTeamspacesDefaultRepository());
				} else if (featureId == this.WORK_FEATURE) {
					featureConfig.setDefaultRepository(this.desktopData.desktopConfig.getWorkDefaultRepository());
				} else if (featureId == this.ENTRYTEMPLATES_FEATURE) {
					featureConfig.setDefaultRepository(this.desktopData.desktopConfig.getEntryTemplatesDefaultRepository());
				}
			}
			return featureConfig;
		},

		resize: function(changeSize) {
			this.inherited(arguments);
			this._featuresGrid.resize();
		},

		_gridSelectionChange: function(evt) {
			// if the selected feature is checked, then display the feature config panel
			var selected = this._featuresGrid.select.row.getSelected();
			// single selection only
			if (selected.length == 1) {
				var selectedItem = this._featuresGrid.row(selected[0]).item();
				if (selectedItem.selected == true) {
					this._editConfig(selectedItem.id, selectedItem.name);
				} else {
					// Save the current feature's data and refresh the corresponding row
					this._featureConfigPanel.saveFieldData();
					if (this._featureConfigPanel._currentFeatureConfig)
						this._refreshFeatureGridRow(this._featureConfigPanel._currentFeatureConfigId);

					// Hide the panel and show instructions
					this._featureConfigPanel.hide();
					domClass.remove(this._configPaneInstructions, "dijitHidden"); //show the instructions
					this._refreshFeatureGridRow(selectedItem.id); // in case it was invalid, this clears the invalid icon
				}
			}
			this._setButtonState();
		},

		// show the edit config pane for the feature
		_editConfig: function(featureId, featureName) {
			// save the current changes
			this._featureConfigPanel.saveFieldData();
			// refresh the current row
			if (this._featureConfigPanel._currentFeatureConfig) {
				this._refreshFeatureGridRow(this._featureConfigPanel._currentFeatureConfigId);
			}
			var featureConfig = this._getFeatureConfig(featureId);
			if (featureConfig != null) {
				var feature = this._getFeatures(featureId);
				var disabled = this._isFeatureDisabled(feature)
				this._featureConfigPanel.show(featureConfig, featureName, feature, null, disabled);
				domClass.add(this._configPaneInstructions, "dijitHidden"); //hide the instructions
				domAttr.set(this._featureConfigPanel.domNode, "aria-label", string.substitute(this.messages.admin_layout_featureconfig_label, [
					featureName
				]));
			}
		},

		_getFeatures: function(featureId) {
			for ( var i in this._features) {
				if (this._features[i].name == featureId)
					return this._features[i];
			}
		},

		// refresh the row in the grid for the specified feature
		_refreshFeatureGridRow: function(featureId) {
			var item = this._featuresGrid.model.store.get(featureId);
			// update the isValid attribute (so that the icon cell refreshes)
			if (item.selected) {
				var config = this._getFeatureConfig(featureId);
				item.isValid = this._isValidConfig(config);
			} else
				item.isValid = true;
			this._featuresGrid.model.store.put(item, {
				id: item.id,
				overwrite: true
			});
		},

		/**
		 * Create a store based on selected feature in grid. Set value to what is defined in desktopConfig if this is
		 * the first time.
		 */
		onUpdateDefaultFeature: function(onComplete) {
			this.logEntry("onUpdateDefaultFeature");

			var selected = this._defaultFeature.get('value');
			var dataArray = this._getSelectedFeatures();
			var items = [];
			var first = null;
			array.forEach(dataArray, lang.hitch(this, function(entry, index) {
				if (!first)
					first = entry.id;
				if (selected == entry.id)
					first = entry.id;

				items.push({
					id: entry.id,
					label: entry.name
				});
			}));

			this._defaultFeature.set("store", new MemoryStore({
				data: items
			}));

			if (!this._init) {
				if (!this.desktopData.isNew() && this.desktopData.desktopConfig.getDefaultFeature()) {
					this._defaultFeature.set('value', this.desktopData.desktopConfig.getDefaultFeature());
				} else if (this._containsFeature(this.FAVORITES_FEATURE)) { //initialize it to favorites pane initially on a new desktop
					this._defaultFeature.set('value', this.FAVORITES_FEATURE);
				}
			} else {
				this._defaultFeature.set('value', first);
				this._defaultFeature.isValid();
			}

			this._onFieldChange();

			if (onComplete instanceof Function) {
				onComplete();
			}
			this.logExit("onUpdateDefaultFeature");
		},

		// return a list of the selected features, the list of objects includes the feature id and name property
		// note the id does not include the desktop id prepended.
		_getSelectedFeatures: function() {
			var featuresData = this.getData(this._featuresGrid);
			var selectedFeatures = [];
			for (var i = 0; i < featuresData.length; i++) {
				if (featuresData[i].selected == true) {
					selectedFeatures.push(featuresData[i]);
				}
			}
			return selectedFeatures;
		},

		_containsFeature: function(featureId) {
			var selectedFeatures = this._getSelectedFeatures();
			if (selectedFeatures) {
				for ( var i in selectedFeatures) {
					if (selectedFeatures[i].id == featureId)
						return true;
				}
			}
			return false;
		},

		_onClickUp: function() {
			this._moveUpSelectedRows(this._featuresGrid);
			this._setButtonState();
			this._onFieldChange();
		},

		_onClickDown: function() {
			this._moveDownSelectedRows(this._featuresGrid);
			this._setButtonState();
			this._onFieldChange();
		},

		_setButtonState: function() {
			var selected = this._featuresGrid.select.row.getSelected();
			var lastIndex = this._featuresGrid.rowCount() - 1;
			var firstSelectedIndex = (selected.length > 0) ? this._featuresGrid.model.idToIndex(selected[0]) : 0;
			var lastSelectedIndex = (selected.length > 0) ? this._featuresGrid.model.idToIndex(selected[selected.length - 1]) : 0;
			this._moveUpButton.set("disabled", (selected.length == 0) || (firstSelectedIndex == 0));
			this._moveDownButton.set("disabled", (selected.length == 0) || (lastSelectedIndex == lastIndex));
		},

		// a repository was added or removed in the repository tab, need to update the repositories in the config
		// objects
		_updateConfigs: function() {
			if (this.tabRepositories) {// get it from Repositories tab
				var changedRepos = this._getChangedRepositories();
				var configs = this._featureConfigs;
				// save the currrent edited config
				this._featureConfigPanel.saveFieldData();
				var self = this;
				array.forEach(configs, function(config) {
					self._updateConfigRepos(config, changedRepos);
				});

				// update this._allInitRepositories
				this._allInitRepositories = [];
				var self = this;
				array.forEach(this.tabRepositories.sloshBucket.getSelectedItems(), function(entry) {
					self._allInitRepositories.push(entry.id);
				});
			}
		},

		// return the added/remove repository from the repositories tab, by comparing the new repo. list
		// to the initial list
		_getChangedRepositories: function() {
			var newReposData = this.tabRepositories.sloshBucket.getSelectedItems();
			var oldReposData = this._allInitRepositories;
			var added = [];
			// check for new
			array.forEach(newReposData, function(entry) {
				var oldRepo = array.some(oldReposData, function(item) {
					return (item == entry.id);
				});
				if (!oldRepo) {
					added.push(entry);
				}
			});
			if (added.length > 0) {
				return {
					added: true,
					repositories: added
				};
			} else {
				// check for deleted
				var deleted = [];
				array.forEach(oldReposData, function(entry) {
					var oldRepo = array.some(newReposData, function(item) {
						return (item.id == entry);
					});
					if (!oldRepo) {
						deleted.push(entry);
					}
				});
				return {
					added: false,
					repositories: deleted
				};
			}
		},

		// update the repositories for the config object
		_updateConfigRepos: function(config, changedRepos) {
			var methodName = "_updateConfigRepos";
			// update the showrepositories setting:
			this.logDebug(methodName, "updating config " + config + " with repository change " + changedRepos);
			if (config.id == this.BROWSE_FEATURE || config.id == this.WORK_FEATURE || config.id == this.SEARCH_FEATURE || config.id == this.TEAMSPACE_FEATURE || config.id == this.FAVORITES_FEATURE) {
				var showRepositories = config.getShowRepositories();
				if (showRepositories == null) {
					showRepositories = []; // this should cause new configs to get the show repos initialized below:
				}
				if (showRepositories) {
					// need to add new repositories so that new repositories default to view enabled
					if (changedRepos.added) {
						array.forEach(changedRepos.repositories, lang.hitch(this, function(entry) {
							if (this._isValidRepository(config, entry)) {
								// Don't enable features for added repositories that authenticate using server tokens.
								if (!entry.serverTokenEnabled){
									showRepositories.push(entry.id);
									this.logDebug(methodName, "adding " + entry.id + " to showRepositories");
								}
							}
						}));
					} else {
						// deleted a repository, remove them from showRepositories					
						array.forEach(changedRepos.repositories, function(entry) {
							var filteredArr = array.filter(showRepositories, function(item) {
								return item != entry;
							});
							showRepositories = filteredArr;
						});
					}
				}
				config.setShowRepositories(showRepositories);
			}

			// init default repository
			var defRepo = config.getDefaultRepository();
			if (!defRepo && changedRepos.added && changedRepos.repositories[0]) {
				if (this._isValidDefaultRepository(config, changedRepos.repositories[0])) {
					config.setDefaultRepository(changedRepos.repositories[0].id);
					this.logDebug(methodName, "setting default repository to " + changedRepos.repositories[0].id);
					this._refreshFeatureGridRow(config.id);
				}
			} else if (defRepo && !changedRepos.added) {
				// deleted a repository, check if it was the default
				array.some(changedRepos.repositories, lang.hitch(this, function(rep) {
					if (defRepo == rep) {
						config.setDefaultRepository(null);
						this.logDebug(methodName, "default repository removed, clearing the default repository");
						this._refreshFeatureGridRow(config.id);
						return true;
					}
					return false;
				}));
			} else {
				var item = this._featuresGrid.model.store.get(config.id);
				if (item.isValid == false && this._isValidConfig(config)) {
					this._refreshFeatureGridRow(config.id);
				}
			}
		},

		// check if this repository is valid for the feature
		_isValidRepository: function(config, repository) {
			var valid = true;
			switch (config.id) {
			case this.FAVORITES_FEATURE:
				if (repository.type == "od")
					valid = false;
				break;
			case this.TEAMSPACE_FEATURE:
				if (repository.type == "od" || !repository.isTeamSpaceEnabled)
					valid = false;
				break;
			case this.WORK_FEATURE:
				if (repository.type == "od" || !repository.isWorkEnabled)
					valid = false;
				break;
			case this.ENTRYTEMPLATES_FEATURE:
				if (repository.type == "od" || !repository.isEntryTemplatesEnabled)
					valid = false;
				break;
			case this.BROWSE_FEATURE:
				if (repository.type == "od" || !repository.isBrowseSupported)
					valid = false;
				break;
			case this.SEARCH_FEATURE:
				if (!repository.isSearchSupported)
					valid = false;
				break;
			}
			return valid;
		},

		// same as _isValidRepository except return true if valid and the feature uses default repository setting
		_isValidDefaultRepository: function(config, repository) {
			if (config.id == this.FAVORITES_FEATURE || config.id == this.TEAMSPACE_FEATURE || config.id == this.WORK_FEATURE || config.id == this.ENTRYTEMPLATES_FEATURE || config.id == this.BROWSE_FEATURE || config.id == this.SEARCH_FEATURE) {
				return this._isValidRepository(config, repository);
			}
			return false;
		},

		// config the grid tooltip:
		_addGridTooltipConnect: function(grid) {
			// Ctrl F1 opens the hover help drop down dialog - Escape closes it
			this.own(aspect.after(grid.domNode, "onkeypress", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.charOrCode == keys.F1) {
					var node = evt.target;
					while (true) {
						if (!node || domClass.contains(node, "gridxRow")) {
							break;
						}
						node = node.parentNode;
					}
					if (node && node.attributes['rowindex'] != undefined) {
						var rowindx = node.attributes['rowindex'].value;
						var item = grid.store.data[rowindx];
						var tooltipText = this._getGridTooltipText(grid, item);
						if (!this._prevTooltipCellNode || this._prevTooltipCellNode != evt.target) {
							try {
								if (evt.target)
									Tooltip.show(tooltipText, evt.target, this.tooltipPosition, !this.isLeftToRight(), this.textDir);//38360
								this._prevTooltipCellNode = evt.cellNode;
							} catch (e) {
								Tooltip.hide(this._prevTooltipCellNode);
							}
						}
						event.stop(evt);
					}
				}
			}), true));

			this.own(aspect.after(grid, "onRowMouseOver", lang.hitch(this, function(evt) {
				var item = grid.store.data[evt.rowIndex];
				var tooltipText = this._getGridTooltipText(grid, item);
				if (!this._prevTooltipCellNode || this._prevTooltipCellNode != evt.cellNode) {
					try {
						if (evt.cellNode)
							Tooltip.show(tooltipText, evt.cellNode, this.tooltipPosition, !this.isLeftToRight(), this.textDir);//38360
						this._prevTooltipCellNode = evt.cellNode;
					} catch (e) {
						Tooltip.hide(this._prevTooltipCellNode);
					}
				}
			}), true));

			this.own(aspect.after(grid, "onRowMouseOut", lang.hitch(this, function(evt) {
				this._prevTooltipCellNode = null;
				Tooltip.hide(evt.cellNode);
			}), true));
		},

		_getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.name));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.id));
				toolTip.push("</span></div>");

				return toolTip.join("");
			}
			return "";
		},

		_clearOptions: function(dropdown) {
			if (dropdown && dropdown.getOptions(0))
				dropdown.removeOption(dropdown.getOptions());
		},

		_populateLayoutDropDown: function() {
			this._clearOptions(this._layoutDropdown);
			for ( var i in this.desktopData.availableLayoutItems) {
				var entry = this.desktopData.availableLayoutItems[i];
				var include = true;
				if (entry.pluginId && !this._isFeatureOrLayoutAvailable(entry.pluginId))
					include = false;

				if (include) {
					var value = (entry.type == "custom" ? entry.layoutClass : entry.value);
					var label = (entry.type == "custom" ? entry.label + this.imageHTML : entry.value);
					var option = {
						value: value,
						label: label,
						innerHTML: label
					};
					this._layoutDropdown.addOption(option);
				}
			}
		},

		/**
		 * @private
		 */
		_isFeatureOrLayoutAvailable: function(id) {
			var selectedPluginIds = this.tabGeneral._getSelectedPluginIds();

			if (selectedPluginIds) {
				for ( var i in selectedPluginIds) {
					var pluginId = selectedPluginIds[i];
					if (id == pluginId)
						return true;
				}
			}

			return false;
		}
	});
});

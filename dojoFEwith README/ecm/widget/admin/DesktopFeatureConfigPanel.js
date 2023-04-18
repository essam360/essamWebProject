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
	"dojo/string",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/keys",
	"dojo/store/Memory",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dijit/registry",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/CellWidget",
	"gridx/modules/move/Row",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Item",
	"ecm/model/Desktop",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/CheckBox",
	"ecm/model/admin/DesktopFeatureConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopFeatureConfigPanel.html"
],

function(declare, lang, array, kernel, string, domClass, domAttr, style, construct, keys, MemoryStore, aspect, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, Button, registry, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, CellWidget, MoveRow, Messages, LoggerMixin, MessagesMixin, Item, Desktop, _MoveUpDownGridxMixin, HoverHelp, ValidationTextBox, CheckBox, DesktopFeatureConfig, _NavigatorAdminTabBase, template) {

	/**
	 * @name ecm.widget.admin.DesktopFeatureConfigPanel
	 * @class Provides a pane that is used to configure properties of a feature
	 * @since 2.0.3
	 */

	return declare("ecm.widget.admin.DesktopFeatureConfigPanel", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_MoveUpDownGridxMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.DesktopFeatureConfigPanel.prototype */

		templateString: template,
		TEAMSPACE_FEATURE: "manageTeamspaces",
		WORK_FEATURE: "workPane",
		BROWSE_FEATURE: "browsePane",
		SEARCH_FEATURE: "searchPane",
		FAVORITES_FEATURE: "favorites",
		ENTRYTEMPLATES_FEATURE: "manageEntryTemplates",
		ASYNCTASK_FEATURE: "asyncTaskPane",

		// the current feature config object being edited
		_currentFeatureConfig: null,

		// the id of the current feature config object being edited, with the desktop id prefix removed
		_currentFeatureConfigId: null,

		// holds the list of filtered repositories that can be used for this feature:
		_filteredRepositories: null,

		// display the selected repositories grid:
		_showSelRepository: false,

		// constant vals for selectedState:
		_SELECTED_EDITABLE: 0,
		_NOTSELECTED_EDITABLE: 1,
		_SELECTED_NOTEDITABLE: 2,

		/**
		 * An array of {@link ecm.widget.admin.PluginConfigurationPane} panes for each features.
		 */
		_pluginFeatureConfigurations: null,

		constructor: function() {
		},

		postCreate: function() {
			this.inherited(arguments);
			this._setHoverHelp();
			this._pluginFeatureConfigurations = [];

			this._defaultRepository.set("placeholder", this.messages.default_repository_placeholder);
		},

		_setHoverHelp: function() {
			this._defaultRepository.setHoverHelp(this._layout_default_repository_hover_help);
			this._treeViewEnabled.setHoverHelp(this._layout_treeView_hover_help);
			this._treeViewDisabled.setHoverHelp(this._layout_treeView_hover_help);
			this._docinfopaneEnabled.setHoverHelp(this._layout_docinfopane_hover_help);
			this._docinfopaneDisabled.setHoverHelp(this._layout_docinfopane_hover_help);
			this._myCheckoutsEnabled.setHoverHelp(this._layout_myCheckouts_hover_help);
			this._myCheckoutsDisabled.setHoverHelp(this._layout_myCheckouts_hover_help);
			this._selViews_hover_help.baseHref = "http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/";
			this._selViews_hover_help.href = "eucco082.htm";
		},

		setData: function(desktopData) {
			this.desktopData = desktopData;
		},

		destroy: function() {
			this.logEntry("destroy");

			this._cleanupData();
			this.tabRepositories = null;

			this.inherited(arguments);
			this.logExit("destroy");
		},

		setConnect: function(tabFeatures, tabRepositories, onComplete) {
			this.tabFeatures = tabFeatures;
			this.tabRepositories = tabRepositories;
			this.own(aspect.after(tabFeatures, "onAddAndRemoveRepositories", lang.hitch(this, this._onAddAndRemoveRepositories)));
			if (onComplete)
				onComplete();
		},

		// display the feature config pane 
		show: function(featureConfig, featureName, feature, onComplete, disabled) {
			this.disabled = disabled;
			this._currentFeatureConfig = featureConfig;

			// save the feature id without the desktop id prepended
			var featureId = featureConfig.id;
			var dot = featureId.indexOf(".");
			if (dot > 0) {
				featureId = featureId.substring(dot + 1);
			}
			this._currentFeatureConfigId = featureId;

			//if a custom feature configuration dijit exits, show that.
			if (feature && feature.configurationDijitClass) {
				try {
					domClass.remove(this.domNode, "dijitHidden");
					domClass.remove(this._pluginFeatureConfigurationContainer, "dijitHidden");
					domClass.add(this._desktopFeatureConfigurations, "dijitHidden");
					domClass.add(this._showTaskManagerConfiguration, "dijitHidden");
					domClass.add(this._showTaskManagerConfigurationLabel, "dijitHidden");
					var pluginFeatureConfiguration = this._pluginFeatureConfigurations[featureId];

					var widgetReq = feature.configurationDijitClass.split('.').join('/');
					if (!pluginFeatureConfiguration) {
						require([
							widgetReq
						], lang.hitch(this, function(ConfigurationDijitClass) {
							pluginFeatureConfiguration = new ConfigurationDijitClass({
								configurationString: featureConfig.getFeatureConfiguration(),
								desktopData: this.desktopData,
								desktopFeaturePanel: this
							});
							this.connect(pluginFeatureConfiguration, "onSaveNeeded", lang.hitch(this, function(saveNeeded) {
								if (saveNeeded)
									this.onMarkDirty();
							}));
							pluginFeatureConfiguration.load(onComplete);
							this._pluginFeatureConfigurations[featureId] = pluginFeatureConfiguration;

							this._replacePluginFeaturePane(pluginFeatureConfiguration);
							pluginFeatureConfiguration.startup();
							this._enableDisableControls(pluginFeatureConfiguration.domNode, onComplete)
						}));
					} else {
						this._replacePluginFeaturePane(pluginFeatureConfiguration);
					}

					domClass.add(this._configPaneNoConfigurationInstruction, "dijitHidden");
				} catch (e) {
					this.logError("show", "Error creating feature configuration pane " + e.message);
					console.debug(e);
					throw e;
				}

			} else {
				domClass.add(this._pluginFeatureConfigurationContainer, "dijitHidden");
				domClass.remove(this._desktopFeatureConfigurations, "dijitHidden");

				this._initConfigPanel(featureName, lang.hitch(this, function(){
					this._enableDisableControls(this.domNode, onComplete)
					if (onComplete){
						onComplete();
					}
				}));
			}
		},
		
		_enableDisableControls: function(domNode, callback){
			array.forEach(registry.findWidgets(domNode), lang.hitch(this, function(widget) {
				if (!domClass.contains(widget.domNode, "ecmHoverHelp")){
					widget.set("disabled", this.disabled);
				}
			}));
			if (callback){
				callback();
			}
		},

		_replacePluginFeaturePane: function(pluginFeatureConfiguration) {
			if (this._pluginFeatureConfigurationContainer.children.length == 1)
				this._pluginFeatureConfigurationContainer.removeChild(this._pluginFeatureConfigurationContainer.children[0]);
			construct.place(pluginFeatureConfiguration.domNode, this._pluginFeatureConfigurationContainer, "only");
		},

		_hideControls: function(featureName) {
			domClass.remove(this.domNode, "dijitHidden");
			this._showDefaultRepository = true;
			this._showViews = false;
			var showDocInfoPane = true;
			this._showSelRepository = true;
			domClass.add(this._showTaskManagerConfiguration, "dijitHidden");
			domClass.add(this._showTaskManagerConfigurationLabel, "dijitHidden");

			/// hide tree for all (except browse)
			domClass.add(this._showTreeViewRow, "dijitHidden");

			// Hide my checkouts for all features except favorites (aka home)
			this._setMyCheckoutsVisibility(false);

			//hide the configuration available message
			domClass.add(this._configPaneNoConfigurationInstruction, "dijitHidden");

			switch (this._currentFeatureConfigId) {
			case this.FAVORITES_FEATURE:
				this._showViews = true;
				this._setMyCheckoutsVisibility(true);
				break;
			case this.BROWSE_FEATURE:
				this._showViews = true;
				domClass.remove(this._showTreeViewRow, "dijitHidden");
				break;
			case this.SEARCH_FEATURE:
				this._showViews = true;
				break;
			case this.ENTRYTEMPLATES_FEATURE:
				this._showViews = true;
				this._showSelRepository = true;
				showDocInfoPane = false;
				break;
			case this.TEAMSPACE_FEATURE:
				this._showViews = true;
				showDocInfoPane = false;
				break;
			case this.WORK_FEATURE:
				break;
			case this.ASYNCTASK_FEATURE:
				showDocInfoPane = false;
				this._showSelRepository = false;
				this._showDefaultRepository = false;
				domClass.remove(this._showTaskManagerConfiguration, "dijitHidden");
				domClass.remove(this._showTaskManagerConfigurationLabel, "dijitHidden");
				if (this.desktopData.settings) {
					if (this.desktopData.settings.taskManagerServiceEnabled == "true")
						this.taskmanagerServiceEnable.set("checked", true);
					else
						this.taskmanagerServiceDisable.set("checked", true);
				}
				this._onFieldChange();
				break;
			default:
				this._showSelRepository = false;
				this._showDefaultRepository = false;
				showDocInfoPane = false;
				//show the configuration available message
				domClass.remove(this._configPaneNoConfigurationInstruction, "dijitHidden");
				break;
			}

			if (this._showViews)
				domClass.remove(this._showViewsRow, "dijitHidden");
			else
				domClass.add(this._showViewsRow, "dijitHidden");

			if (this._showDefaultRepository)
				domClass.remove(this._defaultRepositoryRow, "dijitHidden");
			else
				domClass.add(this._defaultRepositoryRow, "dijitHidden");

			if (this._showSelRepository)
				domClass.remove(this._selRepositoriesRow, "dijitHidden");
			else
				domClass.add(this._selRepositoriesRow, "dijitHidden");

			this._initDocInfo();
			if (showDocInfoPane) {
				domClass.remove(this._docInfoPaneRow, "dijitHidden");
			} else
				domClass.add(this._docInfoPaneRow, "dijitHidden");
		},

		// hide certain controls
		_initConfigPanel: function(featureName, onComplete) {
			this._hideControls(featureName);
			if (this._showViews) {
				this._initViewsGrid();
			}
			if (this._showDefaultRepository || this._showSelRepository) {
				// this populates the default rep. control and the hide rep. grid 
				this._allRepositories = null;
				this._getRepositories(lang.hitch(this, function() {
					if (this._showSelRepository) {
						this._initSelectedReposGrid(lang.hitch(this, function() {
							this._loadRepositoriesControl(this._defaultRepository, this._filteredRepositories, lang.hitch(this, this._initOnComplete, featureName, onComplete));
						}));
					} else {
						this._loadRepositoriesControl(this._defaultRepository, this._filteredRepositories, lang.hitch(this, this._initOnComplete, featureName, onComplete));
					}
				}));
			} else {
				this._initOnComplete(featureName, onComplete);
			}
		},

		_initOnComplete: function(featureName, onComplete) {
			this._setCurrentFieldData();
			if (onComplete)
				onComplete();
		},

		// set the values of the form fields to the value in the config object
		_setCurrentFieldData: function() {
			var methodName = "_setCurrentFieldData";
			var defaultRepository = this._currentFeatureConfig.getDefaultRepository();
			if (defaultRepository != null && defaultRepository != "") {
				this._defaultRepository.set('value', this._defaultRepository.store.get(defaultRepository) ? defaultRepository : "");
			} else {
				// see if we need to init the default repository, init to the first available repo
				var initDef = null;
				var configId = this._currentFeatureConfig.id;
				this.logDebug(methodName, "current default repository is not set for feaature " + configId);
				if (this._filteredRepositories && this._filteredRepositories.length > 0 && (configId == this.FAVORITES_FEATURE || configId == this.TEAMSPACE_FEATURE || configId == this.WORK_FEATURE || configId == this.ENTRYTEMPLATES_FEATURE || configId == this.BROWSE_FEATURE || configId == this.SEARCH_FEATURE)) {
					initDef = this._filteredRepositories[0].id;
				}
				this.logDebug(methodName, "setting default repository to " + initDef);
				this._defaultRepository.set('value', initDef);
				this._currentFeatureConfig.setDefaultRepository(initDef);

				// update grid
				if (this._showSelRepository && this._selReposGrid) {
					var item = this._selReposGrid.model.store.get(initDef);
					if (item) {
						item.selectedState = this._getSelectedState(initDef, true, initDef);
						item.isDefault = true;
						this._selReposGrid.model.store.put(item, {
							id: item.id,
							overwrite: true
						});
					}
				}

				this._onFieldChange();
			}

			if (this._currentFeatureConfig.getShowTreeView())
				this._treeViewEnabled.set('checked', true);
			else
				this._treeViewDisabled.set('checked', true);

			if (this._currentFeatureConfig.getShowDocumentInfoPane()) {
				this._docinfopaneEnabled.set('checked', true);
				// set the default open/closed radios
				if (this._currentFeatureConfig.getDocumentInfoPaneDefaultOpen()) {
					this._docInfoPaneDefault.set("value", 0);
					//this._docinfopaneDefaultOpen.set('checked', true);
				} else {
					// set the open on select checkbox
					if (this._currentFeatureConfig.getDocumentInfoPaneOpenOnSelection()) {
						this._docInfoPaneDefault.set("value", 1);
					} else {
						this._docInfoPaneDefault.set("value", 2);
					}
				}
			} else {
				this._docinfopaneDisabled.set('checked', true);
				this._docInfoPaneDefault.set("value", 1);
			}

			this._setDocInfoPaneState(this._docinfopaneEnabled.get('checked'));

			if (this._currentFeatureConfig.getShowMyCheckouts() == this._myCheckoutsEnabled.get("checked"))
				this._onMyCheckoutsEnabledChange(this._currentFeatureConfig.getShowMyCheckouts());
			if (this._currentFeatureConfig.getShowMyCheckouts())
				this._myCheckoutsEnabled.set('checked', true);
			else
				this._myCheckoutsDisabled.set('checked', true);

			if (this.desktopData.settings) {
				if (this.desktopData.settings.taskManagerServiceEnabled == "true")
					this.taskmanagerServiceEnable.set("checked", true);
				else
					this.taskmanagerServiceDisable.set("checked", true);
			}
		},

		/**
		 * Returns true if all the config panels are valid. This is called when saving.
		 */
		validate: function() {
			if (this._showDefaultRepository && !this._defaultRepository.isValid() && this._currentFeatureConfig && this._currentFeatureConfig.id != this.FAVORITES_FEATURE) {
				return false;
			}
			if (this._showDefaultRepository && !this._defaultRepository.isValid() && this._myCheckoutsEnabled.get("checked")) {
				return false;
			}

			if (this._pluginFeatureConfigurations) {
				for ( var i in this._pluginFeatureConfigurations) {
					if (!this._pluginFeatureConfigurations[i].validate())
						return false;
				}
			}

			if (this._validateAsyncTaskPane() == false)
				return false;

			return true;
		},

		/**
		 * Validates the current config only. This is called to put an X on a single feature config
		 */
		validateCurrentConfig: function(config) {
			// the id may have the desktop id prepended so remove it for comparisons
			var featureId = config.id;
			var dot = featureId.indexOf(".");
			if (dot > 0) {
				featureId = featureId.substring(dot + 1);
			}
			if (this._pluginFeatureConfigurations) {
				for ( var i in this._pluginFeatureConfigurations) {
					var pluginFeatureConfig = this._pluginFeatureConfigurations[i];
					if (pluginFeatureConfig && i == featureId) {
						if (!pluginFeatureConfig.validate())
							return false;
					}
				}
			}

			if (featureId == this.ASYNCTASK_FEATURE && this._validateAsyncTaskPane(config) == false)
				return false;

			return true;
		},

		_validateAsyncTaskPane: function(config) {
			if (!domClass.contains(this._showTaskManagerConfiguration, "dijitHidden") || config) {
				return this.desktopData.settings && this.desktopData.settings.taskManagerServiceEnabled == "true";
			}
		},

		// save  the values of the form fields to the value in the config object (called from DesktopFeatures)
		saveFieldData: function() {
			if (this._currentFeatureConfig != null) {
				this._currentFeatureConfig.setDefaultRepository(this._defaultRepository.get('value'));
				this._currentFeatureConfig.setShowTreeView(this._treeViewEnabled.get('checked'));
				this._currentFeatureConfig.setShowDocumentInfoPane(this._docinfopaneEnabled.get('checked'));
				this._currentFeatureConfig.setShowMyCheckouts(this._myCheckoutsEnabled.get('checked'));
				var docInfoDefault = this._docInfoPaneDefault.get("value");
				this._currentFeatureConfig.setDocumentInfoPaneDefaultOpen(docInfoDefault == 0);
				this._currentFeatureConfig.setDocumentInfoPaneOpenOnSelection(docInfoDefault == 1);

				// show views
				if (this._showViews) {
					var showViews = this._getViewsToShow();
					if (showViews) {
						this._currentFeatureConfig.setShowViews(showViews);
					}
				}

				// show repositories
				if (this._showSelRepository) {
					var showRepos = this._getRepositoriesToShow();
					if (showRepos != null) {
						this._currentFeatureConfig.setShowRepositories(showRepos);
					}
				}

				var pluginFeatureConfiguration = this._pluginFeatureConfigurations[this._currentFeatureConfigId];
				if (pluginFeatureConfiguration) {
					pluginFeatureConfiguration.save();
					this._currentFeatureConfig.setFeatureConfiguration(pluginFeatureConfiguration.configurationString);
				}
			}
		},

		// hide the feature config pane 
		hide: function() {
			domClass.add(this.domNode, "dijitHidden");
			this._currentFeatureConfig = null;
			this.reset();
		},

		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			this.onMarkDirty();
		},

		_onMyCheckoutsEnabledChange: function(checked) {
			if (this._currentFeatureConfigId != this.FAVORITES_FEATURE) // safety
				return;

			if (checked) {
				domClass.remove(this._myCheckoutsRepositorySettingsTable, "disabled");
				this._defaultRepository.set("readOnly", false);
				this._defaultRepository.set("required", true);
				this._setRepositoryGridDisabled(this.disabled);
			} else {
				domClass.add(this._myCheckoutsRepositorySettingsTable, "disabled");
				this._defaultRepository.set("required", false);
				this._defaultRepository.set("readOnly", true);
				this._setRepositoryGridDisabled(true);
			}

			this.saveFieldData(); // makes data available to DesktopFeatures.validateData
			this._onFieldChange();
		},

		_onChangeDefaultRepository: function() {
			var oldval = this._currentFeatureConfig.getDefaultRepository();
			var newval = this._defaultRepository.get('value');
			this._currentFeatureConfig.setDefaultRepository(newval);
			this._onFieldChange();

			// update grid (if displaying the selected repositories):
			if (this._showSelRepository && oldval != newval) {
				var item = this._selReposGrid.model.store.get(newval);
				if (item) {
					item.selected = true;
					item.selectedState = this._getSelectedState(newval, true, newval);
					item.isDefault = true;
					this._selReposGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
				}

				if (oldval) {
					var item = this._selReposGrid.model.store.get(oldval);
					if (item) {
						item.selectedState = this._getSelectedState(oldval, item.selected, newval);
						item.isDefault = false;
						this._selReposGrid.model.store.put(item, {
							id: item.id,
							overwrite: true
						});
					}
				}
			}
		},

		// filter out the repositories based on the current feature being edited
		_filterRepositories: function(repositories, callback) {
			var filteredRepositories = [];
			for (var i = 0; i < repositories.length; i++) {
				var repository = repositories[i];
				switch (this._currentFeatureConfigId) {
				case this.FAVORITES_FEATURE:
					if (repository.type != "od" && repository.type != "box")
						filteredRepositories.push(repository);
					break;
				case this.TEAMSPACE_FEATURE:
					if (repository.type != "od" && repository.isTeamSpaceEnabled)
						filteredRepositories.push(repository);
					break;
				case this.WORK_FEATURE:
					if (repository.type != "od" && repository.isWorkEnabled)
						filteredRepositories.push(repository);
					break;
				case this.ENTRYTEMPLATES_FEATURE:
					if (repository.type != "od" && repository.isEntryTemplatesEnabled)
						filteredRepositories.push(repository);
					break;
				case this.BROWSE_FEATURE:
					if (repository.type != "od" && repository.isBrowseSupported)
						filteredRepositories.push(repository);
					break;
				case this.SEARCH_FEATURE:
					if (repository.isSearchSupported)
						filteredRepositories.push(repository);
					break;
				default:
					filteredRepositories.push(repository);
					break;
				}
			}
			this._filteredRepositories = filteredRepositories;
			if (callback)
				callback();
		},

		_getRepositories: function(callback) {
			if (!this._allRepositories) {
				if (this.tabRepositories) {// get it from Repositories tab
					var selectedReposData = this.tabRepositories.sloshBucket.getSelectedItems();
					this._allRepositories = selectedReposData;
					this._filterRepositories(selectedReposData, callback);
				} else if (this.desktopData.desktopConfig) { // if we don't have repositories tab then get it by using desktopConfig
					this.desktopData.desktopConfig.getRepositoryObjects(lang.hitch(this, function(repositories) {
						this._allRepositories = repositories;
						this._filterRepositories(repositories, callback);
					}));
				}
			} else {
				this._filterRepositories(this._allRepositories, callback);
			}
		},

		_loadRepositoriesControl: function(repositoryControl, repositories, callback) {
			var currentValue = repositoryControl.get('value');
			var hasCurrentValue = false;
			var _items = [];
			var self = this;

			array.forEach(repositories, function(entry, index) {
				var id = entry.getId ? entry.id : entry.id;

				var selected = true;
				// if showing the select repositories grid see if it was selected:
				if (self._showSelRepository && self._selReposGrid) {
					var item = self._selReposGrid.model.store.get(id);
					if (item)
						selected = item.selected;
					}
				if (selected) {
					if (id && currentValue && currentValue == id)
						hasCurrentValue = true;
					_items.push({
						id: id,
						label: entry.getName ? entry.getName() : entry.name
					});
				}
			});
			repositoryControl.set("store", new MemoryStore({
				data: _items
			}));
			repositoryControl.set('value', hasCurrentValue ? currentValue : "");
			this._onFieldChange();
			if (callback)
				callback();
		},

		_initSelectedReposGrid: function(callback) {
			if (this._selReposGrid) {
				this._selReposGrid.destroy();
			}
			var self = this;
			this._selReposGrid = new Grid({
				region: "center",
				"aria-label": this.messages.admin_feature_config_selected_repositories_label,
				id: this.id + "_selReposGrid",
				cacheClass: Cache,
				store: this._createStore(),
				structure: [
					{
						field: "isDefault",
						name: " ",
						headerAriaLabel: this.messages.admin_feature_config_default_repository_icon_text,
						sortable: false,
						filterable: false,
						width: "25px",
						decorator: lang.hitch(this, function(data, rowId, rowIndex) {
							if (data == true) {
								var stateClass = Item.StateToCssClass["default"];
								if (!stateClass) {
									stateClass = "ecmDefaultIcon";
								}
								return '<img class="ecmStatusIcon ' + stateClass + '" alt="' + this.messages.admin_feature_config_default_repository_icon_text + '" title="' + this.messages.admin_feature_config_default_repository_icon_text + '" src="' + this._blankGif + '"/>';
							}
							return "";
						}),
						styles: 'align: center; text-align: center;'
					},
					{
						field: "selectedState",
						name: "",
						headerAriaLabel: this.messages.admin_feature_config_selected_repositories_select_state_hdr,
						width: "30px",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						decorator: function(data, rowId, rowIndex) {
							return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="cb">';
						},
						setCellValue: function(data, storeData, cellWidget) {
							var item = cellWidget.cell.row.item();
							this.cb.set("checked", item.selected);

							// Disable the check box if this is the default repository or my checkouts is disabled
							this.cb.set("disabled", item.isDefault ||  self.disabled || (self._currentFeatureConfig == this.FAVORITES_FEATURE && !self._myCheckoutsEnabled.get("checked")));
							domAttr.set(this.cb.focusNode, "aria-label", item.name);
						}
					},
					{
						field: "name",
						name: this.messages.admin_feature_config_selected_repositories_name_hdr
					}
				],
				style: "height: 200px; width: 300px;",
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
			domClass.add(this._selReposGrid.domNode, "compact gridxWholeRow");
			this._selRepositoriesGridArea.appendChild(this._selReposGrid.domNode);
			this._selReposGrid.startup();
			this.own(aspect.after(this._selReposGrid, "onCellClick", lang.hitch(this, "_onCellClick"), true));
			this.own(aspect.after(this._selReposGrid, "onCellKeyDown", lang.hitch(this, "_onCellClick"), true));
			if (callback)
				callback();
		},

		// toggle the checked state
		_onCellClick: function(evt) {
			if (evt.columnId == "2" && ((evt.type == "keydown" && evt.keyCode == keys.SPACE) || evt.type == "click")) {
				var item = this._selReposGrid.model.store.get(evt.rowId);
				if (item && item.selectedState != this._SELECTED_NOTEDITABLE) {
					item.selected = !item.selected;
					var defRepo = this._defaultRepository.get('value');
					item.selectedState = this._getSelectedState(item.id, item.selected, defRepo);
					this._selReposGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					this._loadRepositoriesControl(this._defaultRepository, this._filteredRepositories);
				}
			}
		},

		_createStore: function() {
			var items = [];
			if (this._filteredRepositories) {
				// get the current value of the selected repositories
				var showRepositories = this._currentFeatureConfig.getShowRepositories();
				var currentDefault = this._currentFeatureConfig.getDefaultRepository();
				var self = this;
				for (var i = 0; i < this._filteredRepositories.length; i++) {
					var selected = true;
					var currentRep = this._filteredRepositories[i];
					var isDefault = false;
					// the default rep should always be selected
					if (currentDefault && currentRep.id == currentDefault) {
						selected = true;
						isDefault = true;
					} else {
						if (showRepositories != null) {
							selected = array.some(showRepositories, function(item) {
								return (item == currentRep.id);
							});
						}
					}
					items.push({
						"id": currentRep.id,
						"name": currentRep.name,
						"selected": selected,
						"isDefault": isDefault,
						"selectedState": this._getSelectedState(currentRep.id, selected, currentDefault)
					});
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		_initViewsGrid: function() {
			if (this._viewsGrid) {
				this._viewsGrid.destroy();
			}
			var _self = this;
			this._viewsGrid = new Grid({
				region: "center",
				"aria-label": this.messages.admin_feature_config_view,
				id: this.id + "_viewsGrid",
				cacheClass: Cache,
				store: this._createViewsStore(),
				structure: [
					{
						field: "selectedState",
						name: "",
						headerAriaLabel: this.messages.admin_feature_config_view_select_hdr,
						width: "30px",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						decorator: function(data, rowId, rowIndex) {
							return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="viewCb">';
						},
						setCellValue: function(data, storeData, cellWidget) {
							var item = cellWidget.cell.row.item();
							this.viewCb.set("checked", item.selected);
							this.viewCb.set("disabled", _self.disabled);
							domAttr.set(this.viewCb.focusNode, "aria-label", item.name);
						}
					},
					{
						field: "name",
						name: this.messages.admin_feature_config_view_hdr
					}
				],
				modules: [
					CellWidget,
					Focus,
					MoveRow,
					{
						moduleClass: SelectRow,
						multiple: false,
						triggerOnCell: true
					}
				]
			});
			style.set(this._viewsGrid.domNode, "height", "115px");
			domClass.add(this._viewsGrid.domNode, "compact gridxWholeRow");
			this._selViewsGridArea.appendChild(this._viewsGrid.domNode);
			this._viewsGrid.startup();
			this._checkViewGridButtons();

			var moveUpTooltip = this.messages.move_up_selected_tooltip;
			this.moveUpViewButton.set("title", moveUpTooltip);
			domAttr.set(this.moveUpViewButton.focusNode, "aria-label", moveUpTooltip);
			var moveDownTooltip = this.messages.move_down_selected_tooltip;
			this.moveDownViewButton.set("title", moveDownTooltip);
			domAttr.set(this.moveDownViewButton.focusNode, "aria-label", moveDownTooltip);

			this.own(aspect.after(this._viewsGrid.select.row, "onSelectionChange", lang.hitch(this, "_checkViewGridButtons"), true));
			this.own(aspect.after(this._viewsGrid, "onCellClick", lang.hitch(this, "_onViewCellClick"), true));
			this.own(aspect.after(this._viewsGrid, "onCellKeyDown", lang.hitch(this, "_onViewCellClick"), true));
		},

		// toggle the checked state
		_onViewCellClick: function(evt) {
			if (evt.columnId == "1" && ((evt.type == "keydown" && evt.keyCode == keys.SPACE) || evt.type == "click")) {
				var item = this._viewsGrid.model.store.get(evt.rowId);
				if (item) {
					item.selected = !item.selected;
					this._viewsGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
				}
			}
		},

		_createViewsStore: function() {
			var items = [];
			var i = 0;
			var showViews = this._currentFeatureConfig.getShowViews() || [];
			if (showViews.length == 0) {
				if (this._currentFeatureConfigId == this.BROWSE_FEATURE || this._currentFeatureConfigId == this.FAVORITES_FEATURE || this._currentFeatureConfigId == this.SEARCH_FEATURE || this._currentFeatureConfigId == this.TEAMSPACE_FEATURE) {
					showViews.push("detail");
					showViews.push("magazine");
					showViews.push("filmstrip");
				} else if (this._currentFeatureConfigId == this.ENTRYTEMPLATES_FEATURE) {
					showViews.push("magazine");
					showViews.push("detail");
				}
			}
			for (i = 0; i < showViews.length; i++) {
				var viewId = showViews[i];
				var name = this.messages[viewId + "_view_button"];
				if (!name) {
					name = viewId;
				}
				items.push({
					"id": viewId,
					"name": name,
					"selected": true,
					"order": i
				});
			}
			// Add the de-selected views
			if (!this._hasView("detail", showViews)) {
				items.push({
					"id": "detail",
					"name": ecm.messages.detail_view_button,
					"order": ++i,
					"selected": false
				});
			}
			if (!this._hasView("magazine", showViews)) {
				items.push({
					"id": "magazine",
					"name": ecm.messages.magazine_view_button,
					"order": ++i,
					"selected": false
				});
			}
			if (this._currentFeatureConfigId == this.BROWSE_FEATURE || this._currentFeatureConfigId == this.FAVORITES_FEATURE || this._currentFeatureConfigId == this.SEARCH_FEATURE || this._currentFeatureConfigId == this.TEAMSPACE_FEATURE) {
				if (!this._hasView("filmstrip", showViews)) {
					items.push({
						"id": "filmstrip",
						"name": ecm.messages.filmstrip_view_button,
						"order": ++i,
						"selected": false
					});
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		_hasView: function(viewId, views) {
			if (views) {
				for (var i = 0; i < views.length; i++) {
					if (views[i] == viewId) {
						return true;
					}
				}
			}
			return false;
		},

		_onMoveUpView: function() {
			this._moveUpSelectedRows(this._viewsGrid);
			this._checkViewGridButtons();
		},

		_onMoveDownView: function() {
			this._moveDownSelectedRows(this._viewsGrid);
			this._checkViewGridButtons();
		},

		_checkViewGridButtons: function() {
			var selectedItems = this._viewsGrid.select.row.getSelected();
			if (this.disabled){
				this.moveUpViewButton.set('disabled', true);
				this.moveDownViewButton.set('disabled', true);
			}
			else{
				this.moveUpViewButton.set('disabled', selectedItems.length == 0 || !this._hasRowsToMoveUp(this._viewsGrid));
				this.moveDownViewButton.set('disabled', selectedItems.length == 0 || !this._hasRowsToMoveDown(this._viewsGrid));
			}
		},

		// get the list of views to show from the selected views grid
		_getViewsToShow: function() {
			var views = null;
			if (this._viewsGrid) {
				var items = this.getData(this._viewsGrid);
				views = [];
				array.forEach(items, function(entry) {
					if (entry.selected)
						views.push(entry.id);
				});
			}
			return views;
		},

		// get the value for selected state, this is just a value to use to represent the 
		// selected checkbox in the grid
		_getSelectedState: function(repositoryId, selected, defaultRep) {
			//var defRepo = this._defaultRepository.get('value');
			var selState = this._SELECTED_EDITABLE;
			if (defaultRep) {
				if (defaultRep == repositoryId)
					selState = this._SELECTED_NOTEDITABLE;
				else
					selState = selected ? this._SELECTED_EDITABLE : this._NOTSELECTED_EDITABLE;
			}
			return selState;
		},

		// the repository list changed, update the grid
		_updateSelectedRepositoriesGrid: function(callback) {
			if (this._selReposGrid && this._showSelRepository) {
				var newStore = this._createStore();
				this._selReposGrid.setStore(newStore);
			}
			if (callback)
				callback();
		},

		// get the list of repositories to show from the selected repositories grid
		_getRepositoriesToShow: function() {
			var showRepositories = null;
			if (this._selReposGrid) {
				var items = this._selReposGrid.model.store.query({});
				showRepositories = [];
				array.forEach(items, function(entry) {
					if (entry.selected)
						showRepositories.push(entry.id);
				});
			}
			return showRepositories;
		},

		onSelect: function() {
			if (this._reloadRepository) {
				if (this._selReposGrid && this._showSelRepository) {
					this._initSelectedReposGrid(lang.hitch(this, function() {
						this._loadRepositoriesControl(this._defaultRepository, this._filteredRepositories);
					}));
					this._reloadRepository = false;
				}
			}
		},

		// a repository was added or removed in the repositories tab:
		//  -repopulate the repositories drop down
		//  -repopulate the selected repositories grid
		//  -if the current config default repository was updated then update the UI
		_onAddAndRemoveRepositories: function() {
			// reset current list of repositories
			if (this._currentFeatureConfig != null) {
				this._allRepositories = null;
				this._getRepositories(lang.hitch(this, function() {
					this._updateSelectedRepositoriesGrid(lang.hitch(this, function() {
						this._reloadRepository = true;
						this._loadRepositoriesControl(this._defaultRepository, this._filteredRepositories);
						// if default repo changed then update the form value
						var screenVal = this._defaultRepository.get('value');
						var configVal = this._currentFeatureConfig.getDefaultRepository();
						if (screenVal != configVal) {
							this._defaultRepository.set('value', configVal);
							this._onFieldChange();
						}
					}));
				}));
			}
		},

		_onDocInfoPaneEnabledClick: function() {
			this._setDocInfoPaneState(true);
			this._onFieldChange();
		},

		_onDocInfoPaneDisabledClick: function() {
			this._setDocInfoPaneState(false);
			this._onFieldChange();
		},

		// set the disabled state of the doc info pane controls
		_setDocInfoPaneState: function(paneEnabled) {
			if (paneEnabled) {
				this._docInfoPaneDefault.set("disabled", false);
			} else {
				this._docInfoPaneDefault.set("disabled", true);
			}
		},

		_initDocInfo: function() {
			this._docInfoPaneDefault.set("store", new MemoryStore({
				data: [
					{
						"id": "0",
						"label": this.messages.admin_feature_config_docinfopane_expanded
					},
					{
						"id": "1",
						"label": this.messages.admin_feature_config_docinfopane_expand_on_select
					},
					{
						"id": "2",
						"label": this.messages.admin_feature_config_docinfopane_collapsed
					}
				]
			}));
		},

		_setMyCheckoutsVisibility: function(visible) {
			if (visible) {
				// Move the repository settings inside my checkouts before making it visible
				construct.place(this._defaultRepositoryRow, this._myCheckoutsRepositorySettingsTable, "first");
				construct.place(this._selRepositoriesRow, this._defaultRepositoryRow, "after");
				domClass.remove(this._showMyCheckoutsRow, "dijitHidden");
			} else {
				// Hide my checkouts and then move the repository settings outside
				domClass.add(this._showMyCheckoutsRow, "dijitHidden");
				construct.place(this._defaultRepositoryRow, this._desktopFeatureConfigurations, "first");
				construct.place(this._selRepositoriesRow, this._defaultRepositoryRow, "after");

				// Reset the state of the default repository field
				this._defaultRepository.set("readOnly", false);
				this._defaultRepository.set("required", true);
			}
		},

		_setRepositoryGridDisabled: function(disabled) {
			array.forEach(this._selReposGrid.rows(), function(row) {
				var item = row.item();
				var cell = row.cell(1);
				var widget = cell.widget();
				if (widget && widget.cb)
					widget.cb.set("disabled", disabled || item.isDefault); // default repository shall remain disabled
			});
		},

		/**
		 * Resets this current widget.
		 */
		reset: function() {
			this._allRepositories = null;
			this._pluginFeatureConfigurations = [];
			domClass.add(this._showTaskManagerConfiguration, "dijitHidden");
			domClass.add(this._showTaskManagerConfigurationLabel, "dijitHidden");
		},

		_cleanupData: function() {
			this.logEntry("_cleanupData");

			this.logExit("_cleanupData");
		}

	});
});

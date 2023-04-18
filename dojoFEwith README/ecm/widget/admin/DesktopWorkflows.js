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
	"dojo/dom-geometry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/model/admin/DesktopData",
	"idx/html",
	"ecm/MessagesMixin",
	"dojox/html/entities",
	"idx/widget/SloshBucket",
	"dojo/store/Memory",
	"ecm/model/Repository",
	"ecm/model/admin/InterfaceTextConfig",
	"ecm/model/admin/InterfaceTextLocaleConfig",
	"ecm/widget/admin/AdminLoginDialog",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopWorkflows.html"
],

function(declare, lang, array, aspect, geometry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, Messages, LoggerMixin, DesktopData, idxHtml, MessagesMixin, entities, SloshBucket, MemoryStore, Repository, InterfaceTextConfig, InterfaceTextLocaleConfig, AdminLoginDialog, FilteringSelect, HoverHelp, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.DesktopWorkflows
	 * @class Provides a pane that is used to specify the IBM FileNet P8 application spaces that are displayed in a
	 *        specific desktop.
	 */

	return declare("ecm.widget.admin.DesktopWorkflows", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.DesktopWorkflows.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_selectedItemsStore: null,
		_init: false,
		_itemStores: null,
		_p8Repositories: null,

		constructor: function() {
			if (!this._itemStores) {
				this._itemStores = {};
			}
			if (!this._p8Repositories) {
				this._p8Repositories = [];
			}
		},

		postCreate: function() {
			this.inherited(arguments);

			this.own(aspect.after(this._applicationSpaces, "onAddRemove", lang.hitch(this, "_onFieldChange")));
			this.own(aspect.after(this._applicationSpaces, "onMoved", lang.hitch(this, "_onFieldChange")));

			this._repositoriesField.setHoverHelp(this.repositoriesFieldHoverHelp);

			this._applicationSpaces.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");
			this._applicationSpaces.newItem = lang.hitch(this, "addApplicationSpace");
			this._applicationSpaces.availableLabel = this.messages.admin_available_application_spaces;
			this._applicationSpaces._availableLabel.innerHTML = this.messages.admin_available_application_spaces;
			this._applicationSpaces.selectedLabel = this.messages.admin_selected_application_spaces;
			this._applicationSpaces._selectedLabel.innerHTML = this.messages.admin_selected_application_spaces;
		},

		destroy: function() {
			this.logEntry("destroy");
			this._cleanupData();
			this.tabRepositories = null;

			this.inherited(arguments);
			this.logExit("destroy");
		},

		_cleanupData: function() {
			this.logEntry("_cleanupData");
			delete this._availableRepositories;
			this._availableRepositories = [];

			if (this._selectedItemsStore) {
				delete this._selectedItemsStore;
			}
			this._selectedItemsStore = null;

			if (this._itemStores) {
				array.forEach(this._itemStores, lang.hitch(this, function(entry, index) {
					if (entry && entry.availableItemsStore) {
						entry.availableStore.save();
						entry.availableStore.close();
						delete entry.availableStore;
					}
				}));
				this._itemStores = null;
			}

			delete this._selectedItems;
			this._itemStores = {};
			delete this._p8Repositories;
			this._p8Repositories = [];
			this._init = false;
			this.logExit("_cleanupData");
		},

		/**
		 * this method will be called before save
		 */
		loadWithFieldValues: function(desktopConfig) {
			this.logEntry("loadWithFieldValues");
			var dataArray = this._applicationSpaces.getSelectedItems();
			var values = [];
			var ids = [];
			for (var i = 0; i < dataArray.length; i++) {
				var item = dataArray[i];
				var id = item.id ? item.id : ecm.model.admin.InterfaceTextConfig.getUniqueId(i); // using existing id if we already have one
				var interfaceText = ecm.model.admin.InterfaceTextConfig.createInterfaceTextConfig(id);
				interfaceText.id = id;
				interfaceText.setType("desktop");
				interfaceText.setRepositoryType("p8");
				interfaceText.setRepositoryId(item.repositoryId);
				interfaceText.setDesktopId(desktopConfig.id);
				interfaceText.setLabelKey(item.name);
				interfaceText.setDisplayedIn("admin_application_space");
				values.push(interfaceText);
				ids.push(id);
			}
			desktopConfig.setApplicationSpacesLabelsParam(values, ids);
			//ecm.model.admin.InterfaceTextConfig.updateConfiguration(values, desktopConfig.id);
			//desktopConfig.setApplicationSpaceLabels(ids);
			this.logExit("loadWithFieldValues");
		},

		/**
		 * @since 2.0.3
		 */
		setData: function(desktopData) {
			this.desktopData = desktopData;
		},

		/**
		 * Called when the user hits the Reset button or when the desktop tab opens. Need to call load available and
		 * load selected in sequence.
		 */
		loadData: function(onComplete) {
			this.logEntry("loadData");
			this._cleanupData();

			this._repositoriesField.set('value', "");
			this._loadAvailableRepositories(lang.hitch(this, function(repositories) {
				this._displayRepositories(repositories);
				this._showAvailableApplicationSpaces(null, lang.hitch(this, function() {
					this._loadSelectedApplicationSpaces(lang.hitch(this, function(_valuesObj, store) {
						this._displaySelectedFields(_valuesObj, store, onComplete);
					}));
				}));
			}));
			this.logExit("loadData");
		},

		/**
		 * Get repositories defined in this desktop from a desktopConfig object.
		 */
		_loadAvailableRepositories: function(onComplete) {
			this.logEntry("_loadAvailableRepositories");
			if (this.tabRepositories) { // get repositories from repositories tab first
				this._availableRepositories = [];
				var selectedReposData = this.tabRepositories.sloshBucket.getSelectedItems();
				for (var i = 0; i < selectedReposData.length; i++) {
					array.forEach(this.desktopData.repositories, lang.hitch(this, function(entry, index) {
						if (entry.id == selectedReposData[i].id) {
							this._availableRepositories.push(entry);
						}
					}));
				}
				if (onComplete) {
					onComplete(this._availableRepositories);
				}
			} else if (this.desktopData.desktopConfig) { // use desktopConfig next if there is no repositories tab.
				this.desktopData.desktopConfig.getRepositoryObjects(lang.hitch(this, function(reposObjects) {
					this._availableRepositories = reposObjects;
					if (onComplete) {
						onComplete(this._availableRepositories);
					}
				}));
			} else {
				if (onComplete) {
					onComplete([]);
				}
			}
			this.logExit("_loadAvailableRepositories");
		},

		/**
		 * Only display P8 repository with connection info.
		 */
		_displayRepositories: function(repositories) {
			this.logEntry("_displayRepositories");
			var _items = [];
			array.forEach(repositories, lang.hitch(this, function(entry, index) {
				if (entry.getType() == "p8" && entry.getConnectionPoint() && entry.getConnectionPoint().length > 0) {
					_items.push({
						"id": entry.id,
						"label": (entry.getName() && entry.getName().length > 0) ? entry.getName() : entry.getObjectStoreDisplayName()
					});
					this._p8Repositories.push(entry);
				}
			}));
			this._repositoriesField.set("store", new MemoryStore({
				data: _items
			}));
			this.logExit("_displayRepositories");
		},

		/**
		 * Display application spaces from selected repository. Create a MemoryStore to host selection.
		 */
		_showAvailableApplicationSpaces: function(availableItemsStore, callback) {
			this.logEntry("_showAvailableApplicationSpaces");
			var store = availableItemsStore;
			if (!store) {
				store = new MemoryStore({
					data: []
				});
			}
			var availableStructure = [
				{
					field: "name",
					name: this.messages.admin_application_space
				}
			];
			this._applicationSpaces.setAvailableGridData(store, availableStructure);
			if (callback)
				callback();
			this.logExit("_showAvailableApplicationSpaces");
		},

		/**
		 * Load selected either from mid-tier or create a empty store if it is a new desktop.
		 */
		_loadSelectedApplicationSpaces: function(callback) {
			this.logEntry("_loadSelectedApplicationSpaces");
			if (!this._init) {
				if (this.desktopData.desktopConfig) { // modify
					this.getInterfaceTextsObjects(this.desktopData.desktopConfig.getApplicationSpaceLabels(), lang.hitch(this, function(interfaceTexts) {
						if (interfaceTexts && interfaceTexts.length > 0) {
							var _items = [];
							array.forEach(interfaceTexts, lang.hitch(this, function(entry, index) {
								var repo = this._findRepository(entry.getRepositoryId());
								if (repo) {
									_items.push({
										"value": repo.id + entry.getLabelKey(),
										"repository": (repo.getName() && repo.getName().length > 0) ? repo.getName() : repo.getObjectStoreDisplayName(),
										"repositoryId": repo.id,
										"name": entry.getLabelKey(),
										"label": entry.getLabelKey(),
										"id": entry.id,
										"order": index
									});
								}
							}));
							this._selectedItemsStore = new MemoryStore({
								data: _items
							});
							this._loadSelectedApplicationSpacesCompleted(callback);
						} else {
							this._selectedItemsStore = new MemoryStore({
								data: []
							});
							this._loadSelectedApplicationSpacesCompleted(callback);
						}
					}));
				} else { // new desktop
					this._selectedItemsStore = new MemoryStore({
						data: []
					});
					this._loadSelectedApplicationSpacesCompleted(callback);
				}
			} else {
				this._loadSelectedApplicationSpacesCompleted(callback);
			}
			this.logExit("_loadSelectedApplicationSpaces");
		},

		_loadSelectedApplicationSpacesCompleted: function(callback) {
			this._init = true;
			if (callback)
				callback(null, this._selectedItemsStore);
		},

		/**
		 * Create a repositories dictionary if none exist.
		 */
		_findRepository: function(id) {
			for (var i = 0; i < this._availableRepositories.length; i++) {
				if (this._availableRepositories[i].id == id)
					return this._availableRepositories[i];
			}
		},

		/**
		 * Return interface texts objects.
		 */
		getInterfaceTextsObjects: function(interfaceTexts, callback) {
			if (callback) {
				callback(this.desktopData.applicationSpacesLabelValues);
			}
		},

		/**
		 * Display selected application spaces.
		 */
		_displaySelectedFields: function(_valuesObj, store, onComplete) {
			this.logEntry("_loadSelectableFields");
			var selectedColumns = [
				{
					field: "repository",
					name: this.messages.repository,
					width: "40%"
				},
				{
					field: "name",
					name: this.messages.admin_application_space,
					width: "60%"
				}
			];
			this._applicationSpaces.setSelectedGridData(store, selectedColumns);
			this.resize();
			if (onComplete) {
				onComplete();
			}
			this.logExit("_loadSelectableFields");
		},

		/**
		 * Utility method to set selected item in an array to be selected.
		 */
		_setupSelected: function(values, selected) {
			array.forEach(values, function(entry, index) {
				entry.label = entities.encode(entry.label);
				if (entry.value.toLowerCase() === selected.toLowerCase()) {
					entry.selected = true;
				}
			});
			return values;
		},

		/**
		 * Event handler on selection changed for object type drop-down. Log into a given repository if haven't do so.
		 */
		_onRepositoryChange: function(repositoryId) {
			this.logEntry("_onRepositoryChange");
			if (repositoryId && repositoryId != "") {
				if (!this._loginDialog) {
					this._loginDialog = new AdminLoginDialog();
				}

				this.selectedRepository = null;
				var repo = ecm.model.desktop.getRepository(repositoryId + "_CIWEBADMIN");
				if (repo != null && repo.connected) {
					this.selectedRepository = repositoryId;
					this._getApplicationSpace();
				} else {
					for (var i = 0; i < this._p8Repositories.length; i++) {
						if (this._p8Repositories[i].id == repositoryId) {
							this.selectedRepository = repositoryId;
							var repoCfg = this._p8Repositories[i];
							repo = new Repository({
								id: repositoryId,
								name: repoCfg.getName(),
								type: repoCfg.getType(),
								isForAdministration: true
							});
							ecm.model.desktop._storeAdminRepository(repo);
							var params = {
								displayName: repoCfg.getName(),
								serverName: repoCfg.getServerName(),
								objectStore: repoCfg.getObjectStore(),
								objectStoreDisplayName: repoCfg.getObjectStoreDisplayName(),
								protocol: repoCfg.getProtocol()
							};
							this._loginDialog.show(repo.type, repo.id, repo.name, params, lang.hitch(this, function(response) {
								repo._loadRepository(response);
								this._getApplicationSpace();
							}));
							break;
						}
					}
				}
			}
			this.logExit("_onRepositoryChange");
		},

		/**
		 * Get application spaces from the selected repository. this._itemStores has all the application spaces stored
		 * in it identified by repository Id.
		 */
		_getApplicationSpace: function() {
			this.logEntry("_getApplicationSpace");
			if (this._itemStores && this._itemStores[this.selectedRepository]) { // we already loaded
				this._showAvailableApplicationSpaces(this._itemStores[this.selectedRepository].availableStore, lang.hitch(this, function() {
					this._loadSelectedApplicationSpaces(lang.hitch(this, this._displaySelectedFields));
				}));
			} else { // load it from mid-tier
				this.desktopData.loadProcessApplicationSpaces(this.selectedRepository, lang.hitch(this, function(items) {
					var _items = [];
					for ( var i in items) {
						_items.push({
							value: items[i].value,
							name: items[i].name,
							label: items[i].label,
							id: items[i].value,
							order: i
						});
					}
					this._itemStores[this.selectedRepository] = {
						availableStore: new MemoryStore({
							data: _items
						})
					};
					this._showAvailableApplicationSpaces(this._itemStores[this.selectedRepository].availableStore, lang.hitch(this, function() {
						this._loadSelectedApplicationSpaces(lang.hitch(this, this._displaySelectedFields));
					}));
				}));
			}
			this.logExit("_getApplicationSpace");
		},

		/**
		 * Call back from the sloshBucket.
		 */
		_getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.label));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.value));
				toolTip.push("</span></div>");
				return toolTip.join("");
			}
			return "";
		},

		// Check if all the data is valid
		validateData: function() {
			return true;
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		isResetingFields: function() {
			var dataArray = this._applicationSpaces.getSelectedItems();
			for (var i = 0; i < dataArray.length; i++) {
				if (dataArray[i] && !dataArray[i].id)
					return false;
			}
			return true;
		},

		// override
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			if (this._init && !this.isResetingFields())
				this.onMarkDirty();
		},

		resize: function(changeSize) {
			this.inherited(arguments);
			this._applicationSpaces.resize(changeSize);
		},

		/**
		 * Method called by grid when adding an item to the right. Need this method because left and right structure is
		 * different.
		 */
		addApplicationSpace: function(item) {
			var newItem = {};
			newItem.value = this._getIdValueFromApplicationSpaceName(this.selectedRepository + item.name);
			newItem.id = this._getIdValueFromApplicationSpaceName(this.selectedRepository + item.name);
			newItem.name = item.name;
			newItem.label = item.label;
			var repo = this._findRepository(this.selectedRepository);
			newItem.repository = repo.getName() ? repo.getName() : repo.getObjectStoreDisplayName();
			newItem.repositoryId = this.selectedRepository;
			return newItem;
		},

		_getIdValueFromApplicationSpaceName: function(name) {
			var id = "";
			if (name) {
				for (var i = 0; i < name.length; i++) {
					var ch = name[i].charCodeAt();
					if ((ch > 47 && ch < 58) || (ch > 64 && ch < 91) || (ch > 96 && ch < 123)) {
						id += name[i];
					}
				}
			}
			return id;
		},

		/**
		 * This is called from container. This links Repositories and Workflow tab together. If user register any
		 * repository in Repositories tab we will be notified and repositories list got populated and refreshed.
		 */
		setConnect: function(tabRepositories, onComplete) {
			this.logEntry("setConnect");
			if (tabRepositories) {
				this.tabRepositories = tabRepositories; // Desktop's repositories tab.
				this.own(aspect.after(tabRepositories, "_onAddRemoveItems", lang.hitch(this, function() {
					var selectedReposData = this.tabRepositories.sloshBucket.getSelectedItems();
					this._availableRepositories = [];
					for (var i = 0; i < selectedReposData.length; i++) {
						array.forEach(this.desktopData.repositories, lang.hitch(this, function(entry, index) {
							if (entry.id == selectedReposData[i].id)
								this._availableRepositories.push(entry);
						}));
					}
					this._displayRepositories(this._availableRepositories);
				})));
			}
			if (onComplete) {
				onComplete();
			}
			this.logExit("setConnect");
		},

		_nop: null
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-geometry",
	"dojo/aspect",
	"dojo/store/Memory",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"idx/widget/SloshBucket",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"idx/html",
	"dijit/form/Select",
	"dojox/collections/Dictionary",
	"ecm/LoggerMixin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/RepositorySystemProperties.html"
], //

function(declare, lang, array, geometry, aspect, MemoryStore, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, SloshBucket, BorderContainer, ContentPane, idxHtml, Select, dictionary, LoggerMixin, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositorySystemProperties
	 * @class Provides a pane that is used to specify the system properties that are displayed for the documents and
	 *        folders in a repository.
	 */

	return declare("ecm.widget.admin.RepositorySystemProperties", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.RepositorySystemProperties.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_selectedDocumentData: null,
		_selectedFolderData: null,

		postCreate: function() {
			this.inherited(arguments);

			this.own(aspect.after(this._systemProperties, "onAddRemove", lang.hitch(this, "onMarkDirty")));
			this.own(aspect.after(this._systemProperties, "onMoved", lang.hitch(this, "onMarkDirty")));
			this._systemProperties.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");
		},

		destroy: function() {
			this.logEntry("destroy");

			this._destroyParams();

			this.inherited(arguments);
			this.logExit("destroy");
		},

		_destroyParams: function() {
			this.logEntry("_destroyParams");
			if (this.repositoryData.docSystemColsDictionary) {
				this.repositoryData.docSystemColsDictionary.clear();
				delete this.repositoryData.docSystemColsDictionary;
			}

			if (this.repositoryData.folderSystemColsDictionary) {
				this.repositoryData.folderSystemColsDictionary.clear();
				delete this.repositoryData.folderSystemColsDictionary;
			}

			if (this._availableDocumentItemsStore) {
				delete this._availableDocumentItemsStore;
			}

			if (this._selectedDocumentItemsStore) {
				delete this._selectedDocumentItemsStore;
			}

			if (this._availableFolderItemsStore) {
				delete this._availableFolderItemsStore;
			}

			if (this._selectedFolderItemsStore) {
				delete this._selectedFolderItemsStore;
			}
			delete this._selectedDocumentData;
			delete this._selectedFolderData;
			this.logExit("_destroyParams");
		},

		// Called before save
		loadWithFieldValues: function(repositoryConfig) {
			this.logEntry("loadWithFieldValues");
			if (this.repositoryData.type == "cm" || this.repositoryData.type == "p8" || this.repositoryData.type == "cmis") {
				this._saveData(repositoryConfig);
			}
			this.logExit("loadWithFieldValues");
		},

		_saveData: function(repositoryConfig) {
			this.logEntry("_saveData");
			var objectType = this._objectTypeSelect.value;
			if (objectType == "document") {
				this._selectedDocumentData = this._systemProperties.getSelectedItems(); //Save the previous folder data
			} else if (objectType == "folder") {
				this._selectedFolderData = this._systemProperties.getSelectedItems(); //Save the previous document data
			}

			var values = this._getValuesFromDataStoreOrArray(this._selectedDocumentItemsStore, this._selectedDocumentData);
			repositoryConfig.setDocumentSystemProperties(values);

			values = this._getValuesFromDataStoreOrArray(this._selectedFolderItemsStore, this._selectedFolderData);
			repositoryConfig.setFolderSystemProperties(values);
			this.logExit("_saveData");
		},

		loadData: function(container, callback) {
			this.logEntry("loadData");
			this._createDataStores(lang.hitch(this, function() {
				this._loadDocumentAvailableFields(lang.hitch(this, function() {
					this._loadDocumentSelectedFields(lang.hitch(this, function() {
						this.onSelect();
						this.resize();
						if (callback)
							callback();
					}));
				}));
			}));
			this.logExit("loadData");
		},

		_createDataStores: function(callback) {
			this.logEntry("_createDataStores");
			this._createDocumentAvailableStore();
			this._createFolderAvailableStore();
			this._createDocumentSelectedStore();
			this._createFolderSelectedStore();
			if (callback)
				callback();
			this.logExit("_createDataStores Exit");
		},

		/**
		 * Need to clone property description array locally if more than one tab is using the same array to create an
		 * store in the sloshBucket without it will causes a "Invalid argument type" error.
		 */
		_createDocumentAvailableStore: function() {
			this.logEntry("_createDocumentAvailableStore");
			var documentSystemPropDescs = lang.clone(this.repositoryData.documentSystemPropDescs);
			for ( var i in documentSystemPropDescs) {
				documentSystemPropDescs[i].id = documentSystemPropDescs[i].value;
				documentSystemPropDescs[i].label = documentSystemPropDescs[i].label;
			}
			this._availableDocumentItemsStore = new MemoryStore({
				data: documentSystemPropDescs
			});
			this.logExit("_createDocumentAvailableStore");
		},

		_createDocumentSelectedStore: function() {
			this.logEntry("_createDocumentSelectedStore");
			var itemArray = [];
			if (this.repositoryData.type == "p8" || this.repositoryData.type == "cm" || this.repositoryData.type == "cmis") {
				var systemProperties = this.repositoryData.repositoryConfig.getDocumentSystemProperties();
				// setup selected array and its value array
				array.forEach(systemProperties, lang.hitch(this, function(entry, index) {
					var foundItem = this.repositoryData.findSystemDocumentColDefinition(entry.toLowerCase());
					if (foundItem) {
						var newItem = lang.clone(foundItem);
						newItem.id = newItem.value;
						newItem.label = newItem.label;
						newItem.order = index;
						itemArray.push(newItem);
					} else {
						itemArray.push({
							label: this.messages[entry] || this.messages[entry.toLowerCase()],
							value: entry,
							id: entry,
							order: index
						});
					}
				}));
			}
			this._selectedDocumentItemsStore = new MemoryStore({
				data: itemArray
			});
			this.logExit("_createDocumentSelectedStore");
		},

		_createFolderAvailableStore: function() {
			this.logEntry("_createFolderAvailableStore");
			var folderSystemPropDescs = lang.clone(this.repositoryData.folderSystemPropDescs);
			for ( var i in folderSystemPropDescs) {
				folderSystemPropDescs[i].id = folderSystemPropDescs[i].value;
				folderSystemPropDescs[i].label = folderSystemPropDescs[i].label;
			}
			this._availableFolderItemsStore = new MemoryStore({
				data: folderSystemPropDescs
			});
			this.logExit("_createFolderAvailableStore");
		},

		_createFolderSelectedStore: function() {
			this.logEntry("_createFolderSelectedStore");
			var itemArray = [];
			if (this.repositoryData.type == "p8" || this.repositoryData.type == "cm" || this.repositoryData.type == "cmis") {
				var systemProperties = this.repositoryData.repositoryConfig.getFolderSystemProperties();
				// setup selected array and its value array
				array.forEach(systemProperties, lang.hitch(this, function(entry, index) {
					var foundItem = this.repositoryData.findSystemFolderColDefinition(entry.toLowerCase());
					if (foundItem) {
						var newItem = lang.clone(foundItem);
						newItem.id = newItem.value;
						newItem.label = newItem.label;
						newItem.order = index;
						itemArray.push(newItem);
					} else {
						itemArray.push({
							label: this.messages[entry] || this.messages[entry.toLowerCase()],
							value: entry,
							id: entry,
							order: index
						});
					}
				}));
			}
			this._selectedFolderItemsStore = new MemoryStore({
				data: itemArray
			});
			this.logExit("_createFolderSelectedStore");
		},

		/**
		 * Setup sloshBucket's available grid.
		 */
		_loadDocumentAvailableFields: function(callback) {
			this.logEntry("_loadDocumentAvailableFields");
			var structure = [
				{
					field: "label",
					name: this.messages.admin_available_properties,
					width: "100%"
				}
			];
			this._systemProperties.setAvailableGridData(this._availableDocumentItemsStore, structure);
			if (callback)
				callback();
			this.logExit("_loadDocumentAvailableFields");
		},

		_loadDocumentSelectedFields: function(callback) {
			this.logEntry("_loadDocumentSelectedFields");
			var structure = [
				{
					field: "label",
					name: this.messages.admin_selected_properties,
					width: "100%"
				}
			];
			this._systemProperties.setSelectedGridData(this._selectedDocumentItemsStore, structure);
			if (callback)
				callback();
			this.logExit("_loadDocumentSelectedFields");
		},

		/**
		 * Set up sloshBucket's available grid.
		 */
		_loadFolderAvailableFields: function(callback) {
			this.logEntry("_loadFolderAvailableFields");
			var structure = [
				{
					field: "label",
					name: this.messages.admin_available_properties,
					width: "100%"
				}
			];
			this._systemProperties.setAvailableGridData(this._availableFolderItemsStore, structure);
			if (callback)
				callback();
			this.logExit("_loadFolderAvailableFields");
		},

		_loadFolderSelectedFields: function(callback) {
			this.logEntry("_loadFolderSelectedFields");
			var structure = [
				{
					field: "label",
					name: this.messages.admin_selected_properties,
					width: "100%"
				}
			];
			this._systemProperties.setSelectedGridData(this._selectedFolderItemsStore, structure);
			if (callback)
				callback();
			this.logExit("_loadFolderSelectedFields");
		},

		_getValuesFromDataStoreOrArray: function(store, data) {
			var values = [];
			if (data == null) {
				var results = store.query({}, {
					"sort": [
						{
							attribute: "order",
							descending: false
						}
					]
				});
				for (var i = 0; i < results.length; i++) {
					values.push(results[i].value);
				}
			} else {
				for (var i = 0; i < data.length; i++) {
					values.push(data[i].value);
				}
			}
			return values;
		},

		// override
		onMarkDirty: function() {
		},

		resetData: function() {
			if (!this.isResetingFields()) {
				console.log("calling _destroyParams");
				this._destroyParams();
				this.loadData();
			}
		},

		_getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(item.label);
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(item.value);
				toolTip.push("</span></div>");
				return toolTip.join("");
			} else {
				return "";
			}
		},

		onSelect: function() {
			this.logEntry("onSelect");
			this.logExit("onSelect");
		},

		_onObjectTypeChange: function(objectType) {
			this.logEntry("_onObjectTypeChange");
			var availableStructure = [
				{
					field: "label",
					name: this.messages.admin_available_properties,
					width: "100%"
				}
			];
			var structure = [
				{
					field: "label",
					name: this.messages.admin_selected_properties,
					width: "100%"
				}
			];
			if (objectType == "document") {
				this._selectedFolderData = this._systemProperties.getSelectedItems(); //Save the previous folder data
				this._systemProperties.setAvailableGridData(this._availableDocumentItemsStore, availableStructure);
				this._systemProperties.setSelectedGridData(this._selectedDocumentItemsStore, structure);
			} else {
				this._selectedDocumentData = this._systemProperties.getSelectedItems(); //Save the previous document data
				this._systemProperties.setAvailableGridData(this._availableFolderItemsStore, availableStructure);
				this._systemProperties.setSelectedGridData(this._selectedFolderItemsStore, structure);
			}
			this.onSelect();
			//this.onMarkDirty();
			this.logExit("_onObjectTypeChange");
		},

		// Check if all the data is valid
		validateData: function() {
			return true;
		},

		isResetingFields: function() {
			return false;
		},

		setData: function(data) {
			this.repositoryData = data;
		},

		resize: function(changeSize) {
			this.inherited(arguments);
			var size = geometry.getContentBox(this.domNode);
			if (size.w > 0) {
				geometry.setMarginBox(this.repositorySystemPropertiesContainer.domNode, {
					w: size.w,
					h: size.h - geometry.getMarginBox(this._instructions).h
				});
				this._systemProperties.resize(changeSize);
			}
		}

	});
});

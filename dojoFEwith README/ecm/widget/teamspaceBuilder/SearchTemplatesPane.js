/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dojo/data/ItemFileWriteStore",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/SearchTemplate",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/model/Teamspace",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/widget/VerticalSloshBucket",
	"ecm/widget/search/SearchBuilderDialog",
	"ecm/widget/search/SearchDialog",
	"ecm/widget/search/SearchSelectorDialog",
	"dojo/text!./templates/SearchTemplatesPane.html"
],

function(declare, //
array, //
lang, //
domStyle, //
domClass, //
window, //
ItemFileWriteStore, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
registry, //
LoggerMixin, //
Messages, //
SearchTemplate, //
UnifiedSearchTemplate, //
Teamspace, //
Pane, //
VerticalSloshBucket, //
SearchBuilderDialog, //
SearchDialog, //
SearchSelectorDialog, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.SearchTemplatesPane
	 * @class Provides a widget that is used to select the searches that will be available to teamspace users.
	 *        <p>
	 *        In IBM Content Navigator, this widget provides the <strong>Select Searches</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	return declare("ecm.widget.teamspaceBuilder.SearchTemplatesPane", [
		Pane,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.SearchTemplatesPane.prototype */

		templateString: template,
		arrayOfSelections: null, // items selected in available template list
		messages: ecm.messages,
		showAddButton: false,

		constructor: function() {
			if (!this.arrayOfSelections) {
				this.arrayOfSelections = [];
			}
		},

		postMixInProperties: function() {
			this.init();
			this._setText();
		},

		setModel: function(model) {
			this.model = model;
			this.type = model.type;
			this._setText();
		},

		_setText: function() {
			if (this.type == Teamspace.TEMPLATE) {
				this._searchTemplatesIntroText = ecm.messages.workspacebuilder_template_search_template_introText;
			} else {
				this._searchTemplatesIntroText = ecm.messages.workspacebuilder_instance_search_template_introText;
				this.showAddButton = false;
			}
		},

		/** Overrides dijit._Widget.postCreate to create the TeamspaceBuilderSearchTemplates. */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			this.connect(this.sloshBucket, "onAddNewItem", "_onAddNewItem");
			this.connect(this.sloshBucket, "onCreateNewItem", "_onCreateNewSearch");
			this.connect(this.sloshBucket, "onSelectionChange", "_updateTeamspaceModel");
			this.sloshBucket.selectionList.selectionMode = "extended";
			this.sloshBucket.availableList.selectionMode = "extended";
			this.logExit("postCreate");
		},

		_getDataFromRepository: function() {
			var self = this;
			this.logDebug("_getDataFromRepository", "load templates from repository");

			if (this.model && this.model.repository && this.model.repository.connected) {
				this.model.repository.retrieveSearchTemplates(function(items) {
					self._loadAvailableList(items);
				}, "workspace");
			}
		},

		resize: function() {
			this.sloshBucket.resize();
		},

		reset: function() {
			this._loaded = false;
		},

		_validate: function() {
			var model = this.getModel();

			if (model["validate"] == true && !this._loaded) {
				var invalidSearches = model["invalidSearches"];
				this._displayWarning(this.messages.workspace_validation_searches, invalidSearches);
			}
		},
		render: function() {
			var self = this;

			if (!this._loaded) {
				this.connect(this.model.repository, "onChange", "_getDataFromRepository");
			}

			if (this.getModel().type == Teamspace.TEMPLATE) {
				if (!this._loaded) {
					if (this.model.repository && this.model.repository.teamspacesEnabled) {
						this.logDebug("render", "load tempaltes from repository");
						this._getDataFromRepository();
					}
				}
			} else {

				this.logDebug("render", "load tempaltes from model");
				this.sloshBucket.addButton.domNode.style.visibility = "visible";
				this.sloshBucket.availableList.domNode.style.visibility = "visible";
				this.model.repository.retrieveSearchTemplates(function(items) {
					self._validate();
					// the model only has ids, need to load with full search template
					var selectedTemplates = self._getRetrievedTemplates(items, self.model);
					self.model.searchTemplatesselectedTemplates;
					self.model.onChange(self.model);
					self._loadAvailableList(items, selectedTemplates);

				}, "workspace");
			}

			this.resize();

		},
		_getRetrievedTemplates: function(items, model) {
			var modelTemplates = model.searchTemplates;
			var selectedTemplates = [];
			for ( var i = 0; i < modelTemplates.length; i++) {
				for ( var j = 0; j < items.length; j++) {
					if (items[j].id == modelTemplates[i].id) {
						items[j]._unifiedSearch = items[j]._unifiedSearch || UnifiedSearchTemplate.instanceOf(items[j], model.repository);
						selectedTemplates.push(items[j]);
					}
				}
			}
			return selectedTemplates;
		},
		_buildStoreItems: function(/* array of searches */items) {
			var arrayOfItems = [];
			for ( var i = 0; i < items.length; i++) { // Note: This will not handle duplicate names
				var item = {
					"id": items[i].id,
					"name": items[i].name,
					"description": items[i].description || "",
					"mimeType": items[i].mimeType || items[i].mimetype || "",
					"_unifiedSearch": items[i]._unifiedSearch || UnifiedSearchTemplate.instanceOf(items[i], this.model.repository)
				};
				if (items[i].vsId)
					item.vsId = items[i].vsId;
				arrayOfItems.push(item);
			}
			return arrayOfItems;
		},

		_buildStore: function(items) {
			var items = this._buildStoreItems(items);
			var store = new ItemFileWriteStore({
				data: {
					identifier: "id",
					label: "description",
					items: items
				}
			});
			return store;
		},

		_loadAvailableList: function(availableItems, selectionItems) {
			//TODO break this  method up for reload after new search template is added.
			// the reloaded causes flicker on the screen

			var columns = [
				{
					field: 'name',
					name: ecm.messages.workspacebuilder_templates_name,
					"width": "50%"
				},
				{
					field: 'description',
					name: ecm.messages.description,
					"width": "50%"
				}
			];

			var selectionStore = null;
			if (!this.selectionStore || selectionItems) {
				if (this.getModel().type == "instance") {
					this.selectionStore = this._buildStore(selectionItems);
				} else if (!this.selectionStore) { // if added new template and this function is called with times.
					this.selectionStore = this._buildStore([]);
				}
				selectionStore = this.selectionStore;
			}

			this.availableStore = this._buildStore(availableItems);
			this.selectionStore._saveEverything = lang.hitch(this, "_saveStore");
			this.sloshBucket.setModels(this.availableStore, selectionStore, columns, columns);
			this.connect(this.sloshBucket.availableList.grid, "onRowDblClick", "onPreviewSearchAvailable");
			this.connect(this.sloshBucket.selectionList.grid, "onRowDblClick", "onPreviewSearchSelection");

			this.sloshBucket.domNode.style.visibility = "visible";
			this._loaded = true;
		},

		_updateTeamspaceModel: function(selectedItems) {
			var searchTemplate;
			var arrayList = [];
			var _this = this;
			// build list of content class objects
			array.forEach(selectedItems, function(entry) {
				var cls = entry._unifiedSearch ? UnifiedSearchTemplate : SearchTemplate;
				var args = {
					id: entry.id,
					name: entry.name,
					repository: _this.model.repository,
					description: entry.description,
					mimetype: entry.mimeType
				};
				if (entry.vsId)
					args.vsId = entry.vsId;
				searchTemplate = new cls(args);
				arrayList.push(searchTemplate);
			});
			this.arrayOfSelections = arrayList;
			this.getModel().searchTemplates = arrayList;
			this.getModel().onChange(this.getModel());
		},

		// called after new items are added to the selection store
		_saveStore: function(saveCompleteCallback, saveFailedCallback, newFileContentString) {
			saveCompleteCallback();
		},

		destroy: function() {
			if (this.searchBuilder) {
				this.searchBuilder.destroy();
			}
			this.inherited(arguments);
		},
		onPreviewSearchAvailable: function(e) {
			this.onPreviewSearch(e, this.availableStore, this.sloshBucket.availableList.grid);
		},

		onPreviewSearchSelection: function(e) {
			this.onPreviewSearch(e, this.selectionStore, this.sloshBucket.selectionList.grid);
		},

		onPreviewSearch: function(e, store, grid) {
			var rowIndex = e.rowIndex;
			var item = grid.getItem(rowIndex);

			item = this.sloshBucket._itemToObject(store, item);
			var cls = item._unifiedSearch ? UnifiedSearchTemplate : SearchTemplate;
			var template = new cls({
				id: item.id,
				name: item.name,
				repository: this.model.repository,
				description: item.description
			});
			if (this.search) {
				// workaround for dojo bug
				//http://mail.dojotoolkit.org/pipermail/dojo-contributors/2011-April/024116.html
				try {
					this.search.destroy();
				} catch (e) {
				}
			}

			this.search = new SearchDialog({
				searchTemplate: template,
				repository: this.model.repository,
				showSearch: true
			});
			this.search.show();
		},

		onAddTemplate: function(items) {
			// if items are passed in used them, if not use the items from the selected list
			var storeItems = [];
			var store;
			if (items && items instanceof Array) {
				storeItems = this._buildStoreItems(items);
			} else {
				storeItems = this._buildStoreItems(this.arrayOfSelections);
			}

			for ( var i = 0; i < storeItems.length; i++) {
				var item = this.sloshBucket.selectionList.grid.store._getItemByIdentity(storeItems[i].id);
				if (!item) {
					this.sloshBucket.addItemToSelection(storeItems[i]);
				} else {
					this.logDebug("onAddTemplate", "duplicate item " + storeItems[i].name);
				}
			}

			// this.selectionList.grid.setStore(store);
		},

		/* invoked when the help link is clicked */
		onHelp: function() {
			var helpFile = "euche011.htm";
			//if (this.getModel().type == Teamspace.INSTANCE)
			//	helpFile = "search_inst.html";

			this.openNewHelpWindow(helpFile);
		},

		_onAddNewItem: function() {
			//this.sloshBucket.selectionToolbar.addNew.domNode.style.display = "none";
			this.sloshBucket.addButton.domNode.style.visibility = "visible";
			this.sloshBucket.availableList.domNode.style.visibility = "visible";
		},

		_onCreateNewSearch: function() {

			if (this.searchBuilder) {
				this.searchBuilder.destroyRecursive();
			}

			this.searchBuilder = new SearchBuilderDialog({
				repository: this.model.repository,
				teamspaceMode: true,
				teamspacename: this.model.name
			});

			// subscribe to the event when the search definition is saved
			var self = this;
			this.connect(this.searchBuilder.builder.searchDefinition, "onSearchSaved", function(template) {
				self.onAddTemplate([
					template
				]);
				self.searchBuilder.hide();
			});

			this.searchBuilder.show();
			this.searchBuilder.resize();
		}
	});
});

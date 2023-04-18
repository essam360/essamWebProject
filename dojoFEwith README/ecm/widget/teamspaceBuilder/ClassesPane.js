/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/_base/lang",
	"dojo/data/ItemFileWriteStore",
	"dojo/dom",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"idx/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/ContentClass",
	"ecm/model/EntryTemplate",
	"ecm/model/Teamspace",
	"ecm/widget/ContentClassSelector",
	"ecm/widget/MultiColumnList",
	"ecm/widget/FilterTextBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/widget/teamspaceBuilder/SelectionToolbar",
	"ecm/widget/VerticalSloshBucket",
	"dojo/text!./templates/ClassesPane.html"
],

function(declare, //
array, //
dojojson, //
lang, //
ItemFileWriteStore, //
dom, //
domStyle, //
domClass, //
window, //
registry,//
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
CheckBox, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
ContentClass, //
EntryTemplate, //
Teamspace, //
ContentClassSelector, //
MultiColumnList, //
FilterTextBox, //
HoverHelp, //
RadioButton, //
Pane, //
SelectionToolbar, //
VerticalSloshBucket, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.ClassesPane
	 * @class Provides a widget that is used to specify the classes that teamspace users can use to add documents to the
	 *        repository.
	 *        <p>
	 *        In IBM Content Navigator, this widget defines the <strong>Select Classes</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	return declare("ecm.widget.teamspaceBuilder.ClassesPane", [
		Pane,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.ClassesPane.prototype */

		templateString: template,
		/**
		 * Instance of {@link ecm.widget.ContentClassSelector}.
		 */
		selectorWidget: null,
		/**
		 * Handle to {@link ecm.messages}.
		 */
		messages: ecm.messages,
		arrayOfSelections: null, // items selected in available template list
		showAddButton: false,
		_loaded: false,

		OBJECT_TYPE: {
			ENTRY_TEMPLATE_LIST: "entryTemplateList",
			CLASS_LIST: "classesList"
		},

		constructor: function() {
			if (!this.arrayOfSelections) {
				this.arrayOfSelections = [];
			}
		},

		/** Overrides dijit._Widget.postCreate to create the TeamspaceBuilder. */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			this.connect(this.sloshBucket, "onAddNewItem", "_onAddNewItem");
			this.useClasses.setHoverHelp(this.useClassesHoverHelp);
			this.useTemplates.setHoverHelp(this.useTemplatesHoverHelp);
			this.useTemplatesHoverHelp.set("hrefLabel", ecm.messages.learn_more);
			this.useTemplatesHoverHelp.set("href", "euche013.htm");

			this.logExit("postCreate");
		},

		postMixInProperties: function() {
			this.init();
			if (this.model)
				this._setLabels();
		},

		_validate: function() {
			var model = this.getModel();
			if (model["validate"] == true && !this._loaded) {
				var usesClases = model.usesClasses;
				var value = "";
				var message = this.messages.workspace_validation_classes;
				if (usesClases) {
					value = model["invalidClasses"];
				} else {
					value = model["invalidEntryTemplates"];
					message = this.messages.workspace_validation_ets;
				}

				var invalidSearches = model["invalidSearches"];
				this._displayWarning(message, value);
			}
		},

		_setLabels: function() {
			this._templatesLabel = ecm.messages.workspacebuilder_item_classes;
			var repository = this.model.repository;

			if (this.type == Teamspace.TEMPLATE) {
				if (repository && repository.type == "cm") {
					this._introText = ecm.messages.workspacebuilder_classes_template_introText_cm;
					this.title = ecm.messages.workspacebuilder_classes_title_cm;
				} else {
					this._introText = ecm.messages.workspacebuilder_classes_template_introText;
					this.title = ecm.messages.workspacebuilder_classes_title;
				}
			} else {
				if (repository && repository.type == "cm") {
					this._introText = ecm.messages.workspacebuilder_classes_instance_introText_cm;
					this.title = ecm.messages.workspacebuilder_classes_title_cm;
				} else {
					this._introText = ecm.messages.workspacebuilder_classes_instance_introText;
					this.title = ecm.messages.workspacebuilder_classes_title;
				}
				// we are always showing the available classes/templates, so the add button is no longer necessary
				//this.showAddButton = true;
			}
		},

		destroy: function() {
			this.inherited(arguments);
			if (this.selectorWidget) {
				this.selectorWidget.destroy();
			}
		},

		resize: function() {
			this.stackContainer.resize();
		},

		setModel: function(model) {
			this.model = model;
			this._setLabels();
		},

		_renderItemList: function() {
			this.logEntry("_renderItemList");
			var repository = this.model.repository;
			this.logDebug("_renderItemList", "create selector widget");
			var filterType = "";

			if (repository._isCM()){
				filterType = "createDocument";
				
				// Prevent double scroll bars in class selector
				domStyle.set(this.selectorContentPane.domNode, "overflow", "hidden");
			}

			this.selectorWidget = new ContentClassSelector({
				selectorStyle: "tree",
				rootClassId: "Document",
				hasAll: false,
				filterType: filterType,
				filterTemplateName: null,
				"class": "dijitInline",
				multiSelect: true,
				onDblClickSelectAndClose: false,
				onlySelectable: true
			});

			if (repository._isP8()) {
				this.selectorWidget.setExcludedItems(this.selectorWidget.p8FormsExcludeList);

			}
			
			// Needed to delay setting repo until setExcluded had been called.
			this.selectorContentPane.addChild(this.selectorWidget);
			this.selectorWidget.setRepository(repository);

			this.connect(this.selectorWidget, "onSelected", "onAvailableSelection");
			this.connect(this.selectorWidget, "onDoubleClickSelected", "onDoubleClickClassSelection");

			this._loaded = true;
			this.logExit("_renderItemList");
		},

		_onAddNewItem: function() {
			//this.sloshBucket.selectionToolbar.addNew.domNode.style.display = "none";
			this.sloshBucket.addButton.domNode.style.visibility = "visible";
			this.sloshBucket.availableList.domNode.style.visibility = "visible";
		},

		onChangeTemplate: function() {
			this._loaded = false;
		},

		render: function() {
			if (this.model.repository.type == "cm") {
				dom.byId(this.id + "_options").style.display = "none";
				this.onClasses();

				// add filter control
				if (!this._filter) {
					this._filter = new FilterTextBox();
					this._classFilterContainer.appendChild(this._filter.domNode);
					this.connect(this._filter, "_onInput", "_filterItems");
					this.connect(this._filter, "_setValueAttr", "_filterItems");
				}
			}

			if (this.getModel().type == Teamspace.TEMPLATE) {
				if (!this._loaded) {
					if (this.model.repository && this.model.repository.teamspacesEnabled) {
						this.logDebug("render", "load templates from repository");
						//this._getDataFromRepository();
						this._renderItemList();
					}
					this._buildSelectionList();
				}
			} else {
				var usesClases = this.getModel().usesClasses;
				if (this.parent.mode != "edit") {
					dom.byId(this.id + "_options").style.display = "none";

				} else {
					if (usesClases)
						this.useClasses.set('checked', true);
					else
						this.useTemplates.set('checked', true);
				}
				this.logDebug("render", "load templates from model");
				this.addButton.domNode.style.visibility = "visible";
				this.selectorContentPane.domNode.style.visibility = "visible";
				dom.byId(this.id + "_availClassesLabel").style.visibility = "visible";
				if (!this._loaded) {
					this._validate();
					this._renderItemList();
				}
				var numOfClasses = this.getModel().contentClasses.length;
				var numOfEntryTemplates = this.getModel().entryTemplates.length;

				if (usesClases) {
					this._buildSelectionList(this.getModel().contentClasses);
					this.onClasses();
				} else {
					this._buildSelectionList([]);
					this.sloshBucket.addButton.domNode.style.visibility = "visible";
					this.sloshBucket.availableList.domNode.style.visibility = "visible";
					this.onEntryTemplates(this.getModel().entryTemplates);
				}

			}

		},

		_filterTemplatesThatAreInRepo: function(items, model) {
			var modelTemplates = model.entryTemplates;
			var selectedTemplates = [];
			for (var i = 0; i < modelTemplates.length; i++) {
				for (var j = 0; j < items.length; j++) {
					if (items[j].id == modelTemplates[i].id) {
						// make sure the default value is set for the default item. 
						items[j].teamspaceDefault = modelTemplates[i].teamspaceDefault;
						selectedTemplates.push(items[j]);
					}
				}
			}
			return selectedTemplates;
		},

		_filterItems: function() {
			var filterData = this._filter.get("value");
			if (this.selectorWidget) {
				this.selectorWidget._doFilter(filterData);
			}

		},

		_renderEntryTemplates: function(items) {
			var paging = false;
			this.model.repository.retrieveEntryTemplatesResultSet(lang.hitch(this, function(resultSet) {
				this._renderSloshbucketNew(items, resultSet);
			}), "all", paging);
		},
		_renderSloshbucketNew: function(selectedItems, availableResultSet) {
			this.connect(this.sloshBucket, "onSelectionChange", "_updateTeamspaceModel");
			//selectionStore._saveEverything = lang.hitch(this, "_saveStore");
			this.sloshBucket.setItems(this.getModel(), selectedItems, availableResultSet);
			this.sloshBucket.domNode.style.visibility = "visible";
			this.resize();
		},
		_renderSloshbucket: function(selectedItems, availableItems) {
			//this.connect(this.sloshBucket, "onCreateNewItem", "_onCreateNewSearch");
			this.connect(this.sloshBucket, "onSelectionChange", "_updateTeamspaceModel");
			this.connect(this.sloshBucket, "onSelectSelection", "onSelectionList");
			this.connect(this.sloshBucket, "onMakeDefault", "_onMakeDefault");
			var availableListColumns = this._getColumns(this.OBJECT_TYPE.ENTRY_TEMPLATE_LIST, false);

			var selectionListColums = this._getColumns(this.OBJECT_TYPE.ENTRY_TEMPLATE_LIST, true);
			var selectionStore;
			if (this.getModel().type == "instance") {
				//Filter items by what's available in the stor3e
				var templates = this._filterTemplatesThatAreInRepo(availableItems, this.getModel());
				selectionStore = this._buildStore(templates);
			} else
				selectionStore = this._buildStore([]);

			this.availableStore = this._buildStore(availableItems);

			selectionStore._saveEverything = lang.hitch(this, "_saveStore");

			this.sloshBucket.setModels(this.availableStore, selectionStore, availableListColumns, selectionListColums);
			this.sloshBucket.domNode.style.visibility = "visible";
			this.resize();
		},

		_buildSelectionList: function(items) {
			var response = {};
			if (items) {

			} else {
				items = new Array();
			}
			if (this.selectionToolbar) {
				this.selectionToolbar.destroy();
			}
			var args;
			if (this.getModel().type == Teamspace.TEMPLATE) {
				args = {
					id: this.id + "_selectionToolbar",
					showCreateButton: false,
					showMakeDefaultButton: true
				};
			} else {
				args = {
					createButtonLabel: this.messages.workspacebuilder_classes_new,
					id: this.id + "_selectionToolbar",
					showAddButton: false,
					showCreateButton: false,
					addButtonLabel: this.messages.workspacebuilder_classes_add,
					showMakeDefaultButton: true
				};
			}
			this.selectionToolbar = new SelectionToolbar(args);

			this.connect(this.selectionToolbar, "onRemove", "_onRemove");
			this.connect(this.selectionToolbar, "onMakeDefault", "_onMakeDefault");
			this.connect(this.selectionToolbar, "onAddNewItem", "_onCreateNewClass");

			this.connect(this.selectionToolbar, "onCreateNewItem", "_onCreateNewClass");
			var columns = this._getColumns(this.OBJECT_TYPE.CLASS_LIST);
			var store = this._buildStore(items);
			store._saveEverything = lang.hitch(this, "_saveStore");
			this.selectionList = registry.byId(this.id + "_selectionList");

			this.selectionList.selectionLabel = this.messages.workspacebuilder_item_classes_selected;
			this.selectionList.setToolbar(this.selectionToolbar);
			this.connect(this.selectionList, "onSelection", "onSelectionList");
			this.selectionList.setSelectionMode("extended");
			this.selectionList.setModel(columns, store);
			this.selectionList.resize();
		},

		_onCreateNewClass: function() {
			this.addButton.domNode.style.visibility = "visible";
			this.selectorContentPane.domNode.style.visibility = "visible";
			dom.byId(this.id + "_availClassesLabel").style.visibility = "visible";
		},

		// selection or deselection of selection list
		onSelectionList: function(selectedItems) {
			var _this = this;
			var classes = this.getModel().usesClasses;
			var foundDefault = false;
			var toolbar = this.selectionToolbar;
			if (!classes) {
				toolbar = this.sloshBucket.selectionToolbar;
			} else {
				this.selectionToolbar.updateButtons(selectedItems.length);
			}
			array.forEach(selectedItems, function(entry) {
				if (entry && entry["default"] != "") {
					toolbar.setMakeDefaultLabel(_this.messages.workspacebuilder_removeDefault_list);
					foundDefault = true;
				}
			});
			if (!foundDefault) // set label to make default
				toolbar.setMakeDefaultLabel(this.messages.workspacebuilder_makeDefault_list);

		},
		// fired when classes are double clicked
		onDoubleClickClassSelection: function(item) {
			this.onAddItem(item, true);
		},
		onAvailableSelection: function() {
			this.addButton.set('disabled', false);
		},

		// called after new items are added to the selection store
		_saveStore: function(saveCompleteCallback, saveFailedCallback, newFileContentString) {

			var json = dojojson.toJson(dojojson.fromJson(newFileContentString)); // this unprettifies the string
			var structureObject = dojojson.fromJson(json);
			var items = structureObject.items;
			this._updateTeamspaceModel(items);
			saveCompleteCallback();
		},

		onAddItem: function(items, doNotclearSelection) {
			// get array of ContentClass objects
			var arrayOfSelections = this.getSelectedFromSelectorWidget();
			var storeItems = [];
			var store;
			if (items && lang.isArray(items)) {
				storeItems = this._buildStoreItems(items);
			} else {
				storeItems = this._buildStoreItems(arrayOfSelections);
			}

			for (var i = 0; i < storeItems.length; i++) {
				var item = this.selectionList.grid.store._getItemByIdentity(storeItems[i].id);
				if (!item) {
					this.selectionList.grid.store.newItem(storeItems[i]);
					this.selectionList.grid.store.save();
				} else {
					this.logDebug("onAddItem", "duplicate item " + storeItems[i].name);
				}
			}
			// deselect items in the selector after they have been added
			if (!doNotclearSelection) {
				this.selectorWidget.clearSelection();
				this.addButton.set("disabled", true);
			}
			this._handleSelectionChange();
		},

		_handleSelectionChange: function() {
			if (!this.getModel().usesClasses) {
				var allItems = this.selectionList.getResultSet().items;
				this.onSelectionChange(allItems);
			}
		},

		onSelectionChange: function(/* array */selectedItems) {
			this._updateTeamspaceModel(selectedItems);
		},

		_updateTeamspaceModel: function(selectedItems) {
			var item;
			var arrayList = [];
			var _this = this;
			// build list of content class objects
			if (this.getModel().usesClasses == true) {
				array.forEach(selectedItems, function(entry, i) {
					item = new ContentClass({
						id: entry.id,
						name: entry.name,
						repository: _this.model.repository
					});
					var defaultItemValue = entry["default"] != "" ? true : false;
					item.teamspaceDefault = defaultItemValue;
					if (entry["default"] != "") {
						_this.getModel().defaultClass = entry.id;
						_this.getModel().onChange(_this.getModel());
					}
					arrayList.push(item);

				});
				this.getModel().contentClasses = arrayList;
				this.getModel().onChange(this.getModel());

			} else {
				var repository = this.model.repository;
				var descriptionFieldName;

				if (repository._isP8()) {
					descriptionFieldName = "EntryTemplateDescription";
				} else if (repository._isCM()) {
					descriptionFieldName = "clbDescription";
				}

				array.forEach(selectedItems, function(entry, i) {
					item = EntryTemplate.createFromJSON({
						id: entry.entryTemplate.id,
						name: entry.entryTemplate.name,
						description: entry.entryTemplate.getValue(descriptionFieldName),
						repository: _this.model.repository,
						currentFolderAsParent: entry.currentFolderAsParent,
						fileTypes: entry.fileTypes,
						type: entry.entryTemplate.attributes.TargetObjectType
					});
					var defaultItemValue = (entry.entryTemplate.isDefault) ? true : false;
					item.teamspaceDefault = defaultItemValue;
					if (entry.entryTemplate.isDefault) {
						_this.getModel().defaultEntryTemplate = entry.entryTemplate.id;
						_this.getModel().onChange(_this.getModel());
					}
					arrayList.push(item);
				});
				this.getModel().entryTemplates = arrayList;
				this.getModel().onChange(this.getModel());
			}

		},
		_onMakeDefault: function() {
			var classes = this.getModel().usesClasses;
			if (classes) {
				var selectionList = this.selectionList;
				if (!classes) {
					selectionList = this.sloshBucket.selectionList;
				}
				var items = selectionList.grid.store._arrayOfAllItems;
				var _this = this;
				if (items.length > 0) {
					var selectedItems = selectionList.grid.selection.getSelected();
					// can only have one default, loop over all items and make their default value false
					// it's not the selected item
					for (var i = 0; i < items.length; i++) {
						if (!items[i])
							continue;
						if (items[i].id == selectedItems[0].id) {
							if (items[i]["default"] != "")
								selectionList.grid.store.setValue(items[i], "default", "");
							else
								selectionList.grid.store.setValue(items[i], "default", this.messages.workspacebuilder_classes_columns_default);
						} else
							selectionList.grid.store.setValue(items[i], "default", "");

					}
					selectionList.grid.store.save();

				}
				this.onSelectionList(selectionList.grid.selection.getSelected());
			}
			this._handleSelectionChange();

		},

		// remove selected rows from selection list for classes
		_onRemove: function() {
			var item;
			var arrayList = [];

			this.selectionList.grid.removeSelectedRows();
			// need to save the store or errors will occur on new add
			// could check for isDirty on the store before each add also
			this.selectionList.grid.store.save();

			this._handleSelectionChange();
		},
		getSelectedFromSelectorWidget: function() {
			var selected = [];

			if (this.selectorWidget && this.selectorWidget.getSelected() != null) {
				var tempSelected = this.selectorWidget.getSelected();

				if (lang.isArray(tempSelected)) {
					selected = tempSelected;
				} else {
					selected.push(args);
				}
			} else {
				this.logError("getSelectedFromSelectorWidget", "selector widget was null or no items were selected");
			}
			return selected;
		},

		_buildStoreItems: function(items) {
			var _items = [];
			var item;
			var isDefault = "";
			for (var i = 0; i < items.length; i++) { // Note: this will not handle duplicate names
				if (!items[i].isInstanceOf) {
					continue;
				}
				if (items[i].isInstanceOf(ecm.model.ContentClass) && !items[i].allowsInstances)
					continue;
				if (items[i].isInstanceOf(ecm.model.ContentClass)) {
					item = {
						"id": items[i].id,
						"default": items[i].teamspaceDefault ? this.messages.workspacebuilder_classes_columns_default : "",
						"name": items[i].name
					};
				} else if (items[i].isInstanceOf(ecm.model.EntryTemplate)) {
					item = {
						"id": items[i].id,
						"default": items[i].teamspaceDefault ? this.messages.workspacebuilder_classes_columns_default : "",
						"description": items[i].description,
						"name": items[i].name
					};

				}
				_items.push(item);

			}
			return _items;

		},

		_buildStore: function(items) {
			var _identifier = "id";
			var _label = "name";
			var _items = this._buildStoreItems(items);
			var store = new ItemFileWriteStore({
				data: {
					identifier: _identifier,
					label: _label,
					items: _items
				}
			});
			return store;
		},
		/* provides list of columns for the grid */
		_getColumns: function(type, showDefaultColumn) {

			var columns = "";
			if (type == this.OBJECT_TYPE.CLASS_LIST) {
				columns = [
					{
						field: 'default',
						name: this.messages.workspacebuilder_classes_columns_default,
						"width": "15%"
					},
					{
						field: 'name',
						name: this.messages.workspacebuilder_classes_columns_className,
						"width": "85%"
					}
				];
			} else if (type == this.OBJECT_TYPE.ENTRY_TEMPLATE_LIST) {
				if (showDefaultColumn) {
					columns = [
						{
							field: 'default',
							name: this.messages.workspacebuilder_classes_columns_default,
							"width": "15%"
						},
						{
							field: 'name',
							name: this.messages.workspacebuilder_classes_type_entryTemplates_columnName,
							"width": "40%"
						},
						{
							field: 'description',
							name: this.messages.workspacebuilder_classes_type_entryTemplates_columnDescription,
							"width": "45%"
						}
					];
				} else {
					columns = [
						{
							field: 'name',
							name: this.messages.workspacebuilder_classes_type_entryTemplates_columnName,
							"width": "40%"
						},
						{
							field: 'description',
							name: this.messages.workspacebuilder_classes_type_entryTemplates_columnDescription,
							"width": "50%"
						}
					];

				}
			} else {
				columns = [
					{
						field: 'name',
						name: this.messages.workspacebuilder_classes_columns_className,
						"width": "50%"
					}
				];
			}

			return columns;
		},

		onClasses: function() {
			this.getModel().usesClasses = true;
			this.getModel().onChange(this.getModel());
			this.stackContainer.selectChild(this.classesContainer);
			this.resize();
		},

		onEntryTemplates: function(items) {

			this.getModel().usesClasses = false;
			this.getModel().onChange(this.getModel());
			this._renderEntryTemplates(items);
			this.stackContainer.selectChild(this.entryTemplatesContainer);
			this.resize();
		}

	});
});

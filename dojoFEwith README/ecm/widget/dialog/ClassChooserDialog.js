/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"dojo/store/Memory",
	"dojo/dom-geometry",
	"dojo/_base/lang",
	"dijit/layout/utils",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/CellWidget",
	"./BaseDialog",
	"ecm/widget/dialog/EditPropertiesDialog",
	"ecm/widget/dialog/MultiEditPropertiesDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/ClassChooserDialogContent.html"
],

function(declare, //
domClass, //
MemoryStore, //
domGeom, //
lang, //
layoutUtils, //
Grid, //
Cache, //
Row, //
Focus, //
SelectRow, //
SingleSort, //
ColumnResizer, //
FilterModule, //
CellWidget, //
BaseDialog, //
EditPropertiesDialog, //
MultiEditPropertiesDialog, //
MessageDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.ClassChooserDialog
	 * @class Provides a dialog box that is used choose a class when editing multiple items.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ClassChooserDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ClassChooserDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,

		_classes: null,
		_items: null,
		_callback: null,
		_multiEditDialog: null,
		_singleEditDialog: null,
		_multipleRepositories: false,
		_entryTemplates: false,
		_initialRepositoryId: "",
		_displaySomeItemsNotDisplayedMsg: false,
		_entryTemplatesByClass: null,
		_entryTemplatesById: null,

		_classIndex: 0,
		_foundModifiableProp: false,
		
		_etNotFoundVsId: "notFound",

		postCreate: function() {
			this.inherited(arguments);
			this.setResizable(true);
			domClass.add(this.domNode, "ecmClassChooserDialog");
			this.set("title", ecm.messages.edit_properties_dialog_title);
			this.setIntroText(ecm.messages.multi_edit_mult_classes_dialog_info);
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			this._OKButton = this.addButton(ecm.messages.ok_button_label, "_onOK");
		},

		/**
		 * Shows the dialog
		 * 
		 * @param items
		 *            Array of {@link ecm.model.ContentItem} objects.
		 * @param classes
		 *            Array of (@link ecm.model.Contentclass} objects for the items.
		 */
		show: function(items, classes, callback, entryTemplates) {
			domClass.add(this._gridNode, "compact gridxWholeRow gridxAlternatingRows");

			this._items = items;
			this._callback = callback;
			this._multipleRepositories = false;
			this._initialRepositoryId = "";
			this._displaySomeItemsNotDisplayedMsg = false;

			this._initialRepositoryId = classes[0].repository.id;
			this._classes = {};
			this._classIndex = 0;
			this._foundModifiableProp = false;
			
			// Keep entry templates by ID and by class.
			this._entryTemplatesById = {};
			this._entryTemplatesByClass = {};
			if (entryTemplates && entryTemplates.length > 0){
				this._entryTemplates = true;
				for (var index in entryTemplates){
					this._entryTemplates = true;
					entryTemplate = entryTemplates[index];
					var entryTemplateId = this._getEntryTemplateId(entryTemplate);
					this._entryTemplatesById[entryTemplateId] = entryTemplate;
					this._addToTemplatesByClass(entryTemplate);
				}
			}
			this._getClassInfo(classes);
		},
		
		/**
		 * @private
		 */
		_addToTemplatesByClass: function(entryTemplate){
			if (entryTemplate.addClassName && entryTemplate.addClassName.length > 0){
				if (!this._entryTemplatesByClass[entryTemplate.addClassName + entryTemplate.repository.id]){
					this._entryTemplatesByClass[entryTemplate.addClassName + entryTemplate.repository.id] = [];
				}
				this._entryTemplatesByClass[entryTemplate.addClassName + entryTemplate.repository.id].push(entryTemplate);
			}
		},

		/**
		 * @private
		 */
		_getClassKey: function(contentClass) {
			return contentClass.id + contentClass.repository.id;
		},

		_getClassInfo: function(classes) {
			if (this._classIndex >= classes.length) {
				if (this._foundModifiableProp == true) {
					if (this._displaySomeItemsNotDisplayedMsg == true) {
						this.setMessage(ecm.messages.multi_edit_some_classes_not_displayed, "warning");
					}
					this._setUpGrid();
				} else {
					var msg = this.messages.multi_edit_no_modifiable_properties;
					if (this._dialog) {
						this._dialog.destroyRecursive();
					}
					this._dialog = new MessageDialog({
						text: msg
					});
					this._dialog.show();
				}
			} else {
				var contentClass = classes[this._classIndex];
				if (contentClass.repository.type == "od") {
					this._displaySomeItemsNotDisplayedMsg = true;
					this._classIndex++;
					this._getClassInfo(classes);
				} else {
					if (contentClass.repository.id != this._initialRepositoryId) {
						this._multipleRepositories = true;
					}

					// Get the class attributes to see if there are any editable properties.
					var foundModifiableProp = false;
					contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attrDefs, childCompDefs) {
						if (childCompDefs != null && childCompDefs.length > 0) {
							foundModifiableProp = true;
						} else {
							for (attrIndex in attrDefs) {
								var attrDef = attrDefs[attrIndex];
								if (contentClass.repository.type == "p8" && (attrDef.id == "FolderName" || attrDef.id == "DocumentTitle")) {
									// Treat document title and folder name like read only properties.
								} else if (attrDef.readOnly == false && attrDef.hidden == false && attrDef.system == false) {
									foundModifiableProp = true;
									break;
								}
							}
						}
						if (foundModifiableProp == true) {
							this._foundModifiableProp = true;
							this._classes[this._getClassKey(contentClass)] = contentClass;
						} else {
							this._displaySomeItemsNotDisplayedMsg = true;
						}
						this._classIndex++;
						this._getClassInfo(classes);
					}));
				}
			}
		},

		/**
		 * @private
		 */
		_setUpGrid: function() {
			this.inherited("show", []); // This is bybassing BaseDialog.js show and calling Dialog.js show directly.
			this.resize(); // Add call to resize which would have been done in BaseDialog.js show.
			var classCount = {};

			var greatestNumItems = 0;
			var greatestNumItemId = "";
			for ( var index in this._items) {
				var item = this._items[index];
				
				// If item doesn't have ET, add to class total.
				// Otherwise, add to class + ET total. Use the ET version Id since the individual ET Ids may differ due to versioning.
				// Skip classes that don't have modifiable properties.
				var classKey = this._getClassKey(item.getContentClass());
				var rowId = classKey;
				var numItems;
				if (this._classes[classKey] != null) {
					if (classCount[classKey] == null) {
						classCount[classKey] = {};
						classCount[classKey].noEtCount = 0;
					}
					
					if (item.entryTemplateId){
						var entryTemplate = this._entryTemplatesById[item.entryTemplateId];

						// Set the addClass attribute on the entry template if it is missing - this will be the case for ETs that are not found.
						if (!entryTemplate.addClassName || entryTemplate.addClassName.length == 0){
							entryTemplate.addClassName = item.getContentClass().id;
							this._addToTemplatesByClass(entryTemplate);
						}
						
						var templateVersionId = this._getEntryTemplateVersionId(entryTemplate);
						rowId = rowId + templateVersionId;
						if (!classCount[classKey][templateVersionId]){
							classCount[classKey][templateVersionId] = 1;
						}
						else {
							classCount[classKey][templateVersionId]++;
						}
						numItems = classCount[classKey][templateVersionId];
					}
					else {
						classCount[classKey].noEtCount++;
						numItems = classCount[classKey].noEtCount;
					}

					if (numItems > greatestNumItems) {
						greatestNumItems = numItems;
						greatestNumItemId = rowId;
					}
				}
			}

			var classCountItems = [];
			for ( var classIndex in this._classes) {
				var contentClass = this._classes[classIndex];
				var key = this._getClassKey(contentClass);
				if (classCount[key].noEtCount > 0){
					var classCountItem = {
							id: key,
							contentClass: contentClass.name,
							repository: contentClass.repository.name,
							items: classCount[key].noEtCount,
							classKey: key
						};
						classCountItems.push(classCountItem);
				}
				var classEntryTemplates = this._entryTemplatesByClass[key];
				if (classEntryTemplates && classEntryTemplates.length > 0){
					var classEntryTemplateVersionIds = {};
					for (var classTemplateIndex in classEntryTemplates){
						var template = classEntryTemplates[classTemplateIndex];
						var templateVersionId = this._getEntryTemplateVersionId(template);
						if (!classEntryTemplateVersionIds[templateVersionId] && classCount[key][templateVersionId] && classCount[key][templateVersionId] > 0){
							var templateName = template.name;
							if (templateVersionId == this._etNotFoundVsId){
								templateName = ecm.messages.multi_edit_entry_template_not_found_name
							}
							var classCountETItem = {
									id: key + templateVersionId,
									contentClass: contentClass.name,
									template: templateName,
									repository: contentClass.repository.name,
									items: classCount[key][templateVersionId],
									templateVsId: templateVersionId,
									classKey: key
								};
								classCountItems.push(classCountETItem);
								classEntryTemplateVersionIds[templateVersionId] = templateVersionId;
						}
					}
				}
			}

			var store = new MemoryStore({
				data: classCountItems
			});

			var columns = [];
			
			if (this._multipleRepositories == true) {
				columns.push(					{
					field: 'repository',
					name: ecm.messages.multi_edit_class_selector_repository_heading
				});
			}
			
			columns.push(					{
				field: 'contentClass',
				name: ecm.messages.multi_edit_class_selector_class_heading
			});
			
			if (this._entryTemplates == true){
				columns.push(					{
					field: 'template',
					name: ecm.messages.multi_edit_class_selector_entry_template_heading
				});
			}
			
			columns.push(					{
				field: 'items',
				name: ecm.messages.multi_edit_class_selector_items_heading
			});

			this._theGrid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: store,
				structure: columns,
				selectRowTriggerOnCell: true,
				modules: [
					Row,
					FilterModule,
					Focus,
					ColumnResizer,
					CellWidget,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 1,
								descending: false
							}
						]
					},
					{
						moduleClass: SelectRow,
						multiple: false
					},
				]
			});
			domClass.add(this._gridNode, "compact gridxWholeRow gridxAlternatingRows");
			this._gridNode.appendChild(this._theGrid.domNode);
			this._theGrid.startup();
			this.resize();

			this.connect(this._theGrid, "onRowDblClick", lang.hitch(this, function() {
				this._onOK();
			}));

			// Select the row with the greatest number of items and scroll it into view.
			this._theGrid.select.row.selectById(greatestNumItemId);
			var visualIndex = this._theGrid.row(greatestNumItemId).visualIndex();
			setTimeout(lang.hitch(this, function() {
				this._theGrid.vScroller.scrollToRow(visualIndex, false);
			}, 100));
		},
		
		/**
		 * @private
		 */
		_getEntryTemplateId: function(entryTemplate){
			return entryTemplate.itemId ? entryTemplate.itemId : entryTemplate.id;
		},
		
		/**
		 * @private
		 */
		_getEntryTemplateVersionId: function(entryTemplate){
			var etVsId = "";
			
			if (entryTemplate.itemId){
				etVsId = entryTemplate.itemId;
			}
			else if (entryTemplate.vsId){
				etVsId = entryTemplate.vsId;
			}
			else {
				etVsId = this._etNotFoundVsId;
			}
			
			return etVsId;
		},

		/**
		 * Resize the grid.
		 */
		resize: function() {
			this.inherited(arguments);
			if (this._gridNode && this._theGrid) {
				var contentMarginBox = domGeom.getMarginBox(this.contentArea);
				var contentSize = layoutUtils.marginBox2contentBox(this.contentArea, contentMarginBox);

				domGeom.setMarginBox(this._gridNode, contentSize);
				var gridNodeMarginBox = domGeom.getMarginBox(this._gridNode);
				var gridSize = layoutUtils.marginBox2contentBox(this._gridNode, gridNodeMarginBox);
				this._theGrid.resize({
					h: gridSize.h,
					w: gridSize.w
				});
			}
		},

		/**
		 * @private
		 */
		_onOK: function() {
			this.hide();
			
			var selectedId = this._theGrid.select.row.getSelected();
			var index = this._theGrid.model.idToIndex(selectedId);
			var gridItem = this._theGrid.row(index).item();
			
			var selectedClass = this._classes[gridItem.classKey];
			var selectedItems = [];
			for ( var itemIndex in this._items) {
				var item = this._items[itemIndex];
				if (item.getContentClass().id == selectedClass.id && item.repository.id == selectedClass.repository.id) {
					if (!gridItem.templateVsId && !item.entryTemplateId){
						// No entry template.
						selectedItems.push(item);
					}
					else if (gridItem.templateVsId && item.entryTemplateId){
						var template = this._entryTemplatesById[item.entryTemplateId];
						var templateVersionId = this._getEntryTemplateVersionId(template);
						if (templateVersionId == gridItem.templateVsId){
							// Entry template matches selected.
							selectedItems.push(item);
						}
					}
				}
			}
			if (selectedItems.length > 1) {
				if (this._multiEditDialog) {
					this._multiEditDialog.destroyRecursive();
				}
				this._multiEditDialog = new MultiEditPropertiesDialog();
				this._multiEditDialog.show(selectedItems, this._callback, selectedClass);
			} else {
				if (this._singleEditDialog) {
					this._singleEditDialog.destroyRecursive();
				}
				this._singleEditDialog = new EditPropertiesDialog();
				this._singleEditDialog.showProperties(selectedItems[0], this._callback);
			}
		},

		/**
		 * Destroys the dialog.
		 */
		destroy: function() {
			if (this._theGrid) {
				if (this._theGrid.domNode) {
					this._theGrid.destroyRecursive();
				}
				delete this._theGrid;
			}
			if (this._multiEditDialog) {
				this._multiEditDialog.destroyRecursive();
				delete this._multiEditDialog;
			}
			if (this._singleEditDialog) {
				this._singleEditDialog.destroyRecursive();
				delete this._singleEditDialog;
			}
			if (this._dialog) {
				this._dialog.destroyRecursive();
				delete this._dialog;
			}
			this.inherited(arguments);
		}
	});
});

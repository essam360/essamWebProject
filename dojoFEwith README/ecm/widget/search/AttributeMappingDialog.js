/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/string",
	"dojo/store/Memory",
	"dojox/uuid/generateRandomUuid",
	"dijit/form/Button",
	"dijit/form/Select",
	"dijit/form/TextBox",
	"idx/html",
	"idx/widget/SloshBucket",
	"gridx/modules/select/Row",
	"ecm/model/AttributeMapping",
	"ecm/model/ChildComponentDefinition",
	"ecm/model/SearchConfiguration",
	"ecm/widget/FilterTextBox",
	"ecm/model/SearchContentClasses",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/model/_searchUtils",
	"ecm/model/Desktop",
	"dojo/text!./templates/AttributeMappingDialogContent.html"
], function(array, declare, lang, has, aspect, domClass, string, MemoryStore, generateRandomUuid, Button, Select, TextBox, idxHtml, SloshBucket, SelectRow, AttributeMapping, ChildComponentDefinition, SearchConfiguration, FilterTextBox, SearchContentClasses, ValidationTextBox, BaseDialog, MessageDialog, utils, Desktop, template) {

	/**
	 * @private Part of the {@link ecm.widget.search.UnifiedSearchBuilder} widget.
	 * @name ecm.widget.search.AttroibuteMappingDialog
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.search.AttributeMappingDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.AttributeMappingDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		textDir: has("text-direction"),
		expandable: false,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAttributeMappingDialog");
			this.setIntroText(this.messages.unified_search_mapping_dialog_instructions);
			this.setIntroTextRef(this.messages.learn_more, (Desktop.getHelpUrl(true) || "") + "euche044.dita");
			this._sloshBucket.getGridTooltipText = lang.hitch(this, "getGridTooltipText");
			this._sloshBucket.newItem = lang.hitch(this, "_addItem");
			this._sloshBucket.availableGridModules = [
				{
					moduleClass: SelectRow,
					multiple: false
				}
			];
			this.own(aspect.after(this._sloshBucket, "onAddRemove", lang.hitch(this, this._updateOkButtonState)));
			this.okButton = this.addButton(this.messages.ok, "_save", true, true);
			this.setWidth(625);
		},

		show: function(searchRepositories, attributeMapping) {
			this.setTitle(this._attributeMapping ? this.messages.unified_search_mapping : this.messages.unified_search_new_mapping);
			this._searchRepositories = searchRepositories;
			this._attributeMapping = attributeMapping;
			this._searchRepositoryLookup = {};
			for ( var i in this._searchRepositories)
				this._searchRepositoryLookup[this._searchRepositories[i].id] = this._searchRepositories[i];

			// Populate the grid of selected items when the data is available
			var signal = aspect.after(this, "_onDataAvailable", lang.hitch(this, function() {
				signal.remove();
				this._populateSelectedItemsGrid(this._attributeMapping ? this._attributeMapping.mappedAttributes : []);
				this._sloshBucket.set("disabled", false);
				this._updateOkButtonState();
			}));

			// Clear everything first, then start populating
			this._clear();
			if (this._attributeMapping)
				this._nameTextBox.set("value", this._attributeMapping.name);
			this._populateSearchRepositorySelect();

			this.inherited(arguments);
		},

		/**
		 * @private
		 */
		getGridTooltipText: function(grid, item) {
			return item ? item.tooltip : "";
		},

		_clear: function() {
			this._nameTextBox.reset();
			var layout = this._createGridLayout(this.messages.unified_search_available_properties);
			if (!this._sloshBucket.availableGrid) {
				// Initialize the slosh bucket with empty stores
				var store = this._createGridStore([]);
				this._sloshBucket.setAvailableGridData(store, layout);
				store = this._createGridStore([]);
				this._createGridLayout(this.messages.unified_search_mapped_properties);
				this._sloshBucket.setSelectedGridData(store, layout);
			} else {
				// Empty the slosh bucket and disable it
				this._sloshBucket.set("disabled", true);
				setTimeout(lang.hitch(this, function() {
					this._sloshBucket.setAvailableGridData(this._createGridStore([]), layout);
					this._sloshBucket.setSelectedGridData(this._createGridStore([]), layout);
				}));
			}
		},

		_createGridStore: function(items) {
			return new MemoryStore({
				data: items || []
			});
		},

		_createGridLayout: function(name) {
			return [
				{
					field: "icon",
					name: " ",
					headerAriaLabel: this.messages.unified_search_display_only_property,
					width: "10%",
					decorator: lang.hitch(this, function(data, rowId, rowIndex, cell) {
						var item = cell.column.grid.row(rowId).item(), html = "";
						if (!utils.isAttributeSearchable(item.attribute)) {
							var title = this.messages.unified_search_display_only_property;
							html = "<img src=\"dojo/resources/blank.gif\" class=\"ecmDisplayOnlyProperty\" title=\"" + title + "\" alt=\"" + title + "\" />";
						}
						return html;
					})
				},
				{
					field: "name",
					name: name,
					width: "90%"
				}
			];
		},

		_populateSearchRepositorySelect: function() {
			var options = array.map(this._searchRepositories, function(searchRepository) {
				return {
					label: searchRepository.repository.name,
					value: searchRepository.id
				};
			});
			this._searchRepositorySelect.removeOption(this._searchRepositorySelect.getOptions());
			this._searchRepositorySelect.addOption(options);

			// Reset the last reported value to ensure that the onChange event is fired, which in turn loads the data
			this._searchRepositorySelect._lastValueReported = "";
			this._searchRepositorySelect.set("value", options[0].value);
		},

		_populateAvailableItemsGrid: function(searchRepositoryId, attributes) {
			var items = array.map(attributes, lang.hitch(this, function(attrib) {
				return {
					id: attrib.id + searchRepositoryId + (attrib.metadataTemplate ? attrib.metadataTemplate.id : ""),
					name: attrib.valueRequired ? "* " + attrib.name : attrib.name,
					attribute: attrib,
					searchRepositoryId: searchRepositoryId,
					tooltip: this._createTooltip(attrib)
				};
			})).sort(function(a, b) {
				return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
			});
			var store = this._createGridStore(items);
			var layout = this._createGridLayout(this.messages.unified_search_available_properties);
			this._sloshBucket.setAvailableGridData(store, layout);
			this._sloshBucket.resize();

			// attach advising functions that will do the filtering
			this._filterTextBox.set("value", "");
			this.own(aspect.after(this._filterTextBox, "_onInput", lang.hitch(this, this._filterAvailableItems)));
			this.own(aspect.after(this._filterTextBox, "_setValueAttr", lang.hitch(this, this._filterAvailableItems)));

			this._onDataAvailable();
		},

		_populateSelectedItemsGrid: function(attributes) {
			var items = array.map(attributes, lang.hitch(this, function(attrib) {
				var searchRepository = this._searchRepositoryLookup[utils.getAttributeRepository(attrib).id];
				return {
					id: attrib.id + searchRepository.id + (attrib.metadataTemplate ? attrib.metadataTemplate.id : ""),
					name: (attrib.valueRequired ? "* " + attrib.name : attrib.name) + " (" + searchRepository.repository.name + ")",
					attribute: attrib,
					tooltip: this._createTooltip(attrib)
				};
			}));
			var store = this._createGridStore(items);
			var layout = this._createGridLayout(this.messages.unified_search_mapped_properties);
			this._sloshBucket.setSelectedGridData(store, layout);
		},

		_createTooltip: function(attribute) {
			var searchConfig = SearchConfiguration.getSearchConfiguration();
			var tooltip = searchConfig.getDataTypeLabel(attribute.isInstanceOf(ChildComponentDefinition) ? "xs:childcomponent" : attribute.dataType, true);
			if (attribute.valueFixed)
				tooltip += "<br/>" + this.messages.unified_search_fixed_value_property;
			else if (attribute.valueRequired)
				tooltip += "<br/>" + this.messages.unified_search_required_property;
			if (!utils.isAttributeSearchable(attribute))
				tooltip += "<br/>" + this.messages.unified_search_display_only_property;
			if (attribute.description)
				tooltip += "<br/>" + this.messages.properties_description_tooltip + attribute.description;

			return tooltip;
		},

		_updateOkButtonState: function() {
			var disabled = false;
			if (this._sloshBucket.getSelectedItems().length == 0)
				disabled = true;
			else if (!this._nameTextBox.isValid() || this._nameTextBox.get("value").length == 0)
				disabled = true;
			this.okButton.set("disabled", disabled);
		},

		_handleSearchRepositoryChange: function() {
			var searchRepository = this._searchRepositoryLookup[this._searchRepositorySelect.get("value")];
			var repository = searchRepository.repository;
			var objectType = searchRepository.objectType;
			var searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: repository
			});
			var contentClass = searchRepository.contentClass;
			if (contentClass) {
				contentClass.retrieveAttributeDefinitionsForSearches(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {
					// Filter the attributes
					var textSearchOnly = repository.capabilityQuery == "fulltextonly" || (repository.capabilityQuery == "bothseparate" && searchRepository.textSearchEnabled);
					var attributes = array.map(attributeDefinitions, function(attrib) {
						// Don't allow searching with Box - Owned By since non-administrators can't look up users,
						// or properties in CMIS repositories that only support text search
						if ((repository._isBox() && attrib.id == "owned_by") || textSearchOnly) {
							// Clone the attribute and save the original "searchable" value so that it can be restored when
							// a CMIS repository, with query capability "bothseperate", is updated to exclude text criteria
							attrib = attrib.clone();
							attrib._searchable = attrib.searchable;
							attrib.searchable = false;
						}
						return attrib;
					});
					attributes = searchConfig.filterAttributeDefinitions(attributes, {
						objectType: objectType,
						allowNonSearchable: true
					});
					array.forEach(childComponentDefinitions, function(child) {
						attributes.push(child);
					});
					
					// Append metadata template attributes, if any
					var metadataTemplate = searchRepository.metadataTemplate;
					if (metadataTemplate) {
						metadataTemplate.retrieveAttributeDefinitionsForSearches(lang.hitch(this, function(attributeDefinitions, childDefinitions) {
							// Filter out hidden properties since they can't be used to search with
							attributeDefinitions = array.filter(attributeDefinitions, "return !item.hidden;");
							this._populateAvailableItemsGrid(searchRepository.id, attributes.concat(attributeDefinitions));
						}));
					} else {
						this._populateAvailableItemsGrid(searchRepository.id, attributes);
					}
				}), searchRepository.searchSubclasses);
			} else if (searchRepository.searchTemplate) {
				searchRepository.searchTemplate.retrieveSearchCriteria(lang.hitch(this, this._populateAvailableItemsGrid, searchRepository.id));
			}
		},

		_onDataAvailable: function() {
		},

		_filterAvailableItems: function() {
			var value = this._filterTextBox.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this._sloshBucket.filter({
					name: value
				});
			}
		},

		_addItem: function(item) {
			var searchRepository = this._searchRepositoryLookup[item.searchRepositoryId];
			var attrib = item.attribute;
			var selectedItems = this._sloshBucket.getSelectedItems();
			var add = array.some(selectedItems, function(selectedItem) {
				return item.id == selectedItem.id;
			});
			if (!add) {
				// Enforce mapping rules
				if (searchRepository.repository._isBox() && attrib.searchable && array.some(this.attributeMappingsPane.attributeMappings, function(mapping) {
					return array.some(mapping.mappedAttributes, function(mappedAttrib) {
						var templateMismatch = !attrib.metadataTemplate != !mappedAttrib.metadataTemplate || (attrib.metadataTemplate && attrib.metadataTemplate.id != mappedAttrib.metadataTemplate.id);
						return attrib.id == mappedAttrib.id && searchRepository.repository.id == utils.getAttributeRepository(mappedAttrib).id && !templateMismatch;
					});
				})) {
					this._showMessage("unified_search_mapping_rule_box", [
						attrib.name,
						searchRepository.repository.name
					]);
				} else if (!array.some(selectedItems, lang.hitch(this, function(selectedItem) {
					var msgPrefix, msgInserts;
					var selectedAttrib = selectedItem.attribute;
					var selectedAttribRepository = utils.getAttributeRepository(selectedAttrib);
					if (searchRepository.id == selectedAttribRepository.id) {
						msgPrefix = "unified_search_mapping_rule_repository";
						msgInserts = [
							searchRepository.repository.name
						];
					} else if (attrib.isInstanceOf(ChildComponentDefinition) || selectedAttrib.isInstanceOf(ChildComponentDefinition)) {
						msgPrefix = "unified_search_mapping_rule_child_component";
					} else if (!utils.isDataTypeCompatible(attrib.dataType, selectedAttrib.dataType)) {
						var searchConfig = SearchConfiguration.getSearchConfiguration();
						msgPrefix = "unified_search_mapping_rule_data_type";
						msgInserts = [
							searchConfig.getDataTypeLabel(attrib.dataType),
							searchConfig.getDataTypeLabel(selectedAttrib.dataType)
						];
					} else if (attrib.cardinality != selectedAttrib.cardinality) {
						msgPrefix = "unified_search_mapping_rule_cardinality";
						msgInserts = [
							attrib.cardinality == "SINGLE" ? this.messages.unified_search_single_values : this.messages.unified_search_multiple_values,
							selectedAttrib.cardinality == "SINGLE" ? this.messages.unified_search_single_values : this.messages.unified_search_multiple_values
						];
					} else if (attrib.valueFixed && selectedAttrib.valueFixed) {
						msgPrefix = "unified_search_mapping_rule_fixed_value";
					}
					if (msgPrefix) {
						this._showMessage(msgPrefix, msgInserts);
						return true;
					}
				}))) {
					add = true;
					selectedItems = array.filter(selectedItems, "return this.isAttributeSearchable(item.attribute);", utils);
					if (utils.isAttributeSearchable(attrib) && selectedItems.length > 0) {
						// Verify that the intersection of operators is not empty
						var selectedAttributes = array.map(selectedItems, function(selectedItem) {
							return selectedItem.attribute;
						});
						if (utils.calculateOperatorIntersection(selectedAttributes.concat([
							attrib
						])).length == 0) {
							add = false;
							this._showMessage("unified_search_mapping_rule_operator_intersection", [
								attrib.name
							]);
						}
					}
				}
			}

			var newItem = null;
			if (add) {
				newItem = {};
				newItem.id = item.id;
				newItem.name = (attrib.valueRequired ? "* " + attrib.name : attrib.name) + " (" + searchRepository.repository.name + ")";
				newItem.attribute = attrib;
				newItem.tooltip = item.tooltip;

				// Auto fill the name if not yet defined
				if (this._nameTextBox.get("value").length == 0)
					this._nameTextBox.set("value", attrib.name);
			}

			return newItem;
		},

		_showMessage: function(messagePrefix, messageInserts) {
			if (!this._messageDialog)
				this._messageDialog = new MessageDialog();
			this._messageDialog.showMessage(string.substitute(ecm.messages[messagePrefix], messageInserts || []));
		},

		_save: function() {
			// Disable the OK button to prevent a second call if double-clicked
			this.okButton.set("disabled", true);

			// Create the mapping
			var mapping = new AttributeMapping({
				id: this._attributeMapping ? this._attributeMapping.id : generateRandomUuid(),
				name: this._nameTextBox.get("value")
			});
			var items = this._sloshBucket.getSelectedItems();
			mapping.mappedAttributes = array.map(items, function(item) {
				return item.attribute;
			});

			// Save the mapping only if it is new or has been modified
			if (mapping.equals(this._attributeMapping) || this.onSave(mapping))
				this.hide();
			else
				this.okButton.set("disabled", false);
		},

		onSave: function(attributeMapping) {
			return true;
		},

		destroy: function() {
			this.inherited(arguments);
			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
		}
	});
});

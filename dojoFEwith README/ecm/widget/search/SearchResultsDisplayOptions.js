/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/string",
	"../dialog/BaseDialog",
	"ecm/model/ChildComponentDefinition",
	"ecm/model/admin/AdminConfig",
	"./_SearchResultsDisplayPane",
	"dojo/text!./templates/SearchResultsDisplayOptions.html"
], function(declare, lang, array, domClass, string, BaseDialog, ChildComponentDefinition, AdminConfig, _SearchResultsDisplayPane, template) {
	/**
	 * @name ecm.widget.search.SearchResultsDisplayOptions
	 * @class Provides a widget that contains the columns that are used to display search results. The search results
	 *        can be sorted by a property in descending or ascending order. If the text search is enabled, the search
	 *        results can be sorted by rank in descending order.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.search.SearchResultsDisplayOptions", [
		BaseDialog
	], {

		/** @lends ecm.widget.search.SearchResultsDisplayOptions.prototype */

		contentString: template,
		widgetsInTemplate: true,
		/**
		 * Array of {@link ecm.model.AttributeDefinitions} objects.
		 * 
		 * @since 2.0.2
		 */
		attributeDefinitions: null,

		/**
		 * The symbolic name of the text search Rank column.
		 */
		RANK: "Rank",

		/**
		 * Constructor.
		 */
		constructor: function() {
			this._messages = ecm.messages;
			this.expandable = false;
		},

		/**
		 * Launches after the widget is created.
		 */
		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmSearchResultsDisplayOptionsDialog");
			this.setTitle(this._messages.search_results_columns_label);
			this._okButton = this.addButton(this.messages.ok, "onSave", false, true);
		},

		/**
		 * Sets to true to enable text search Rank column.
		 * 
		 * @param enabled
		 *            A boolean value indicating that text search is enabled.
		 */
		setTextSearchEnabled: function(enabled) {
			this._setTextSearchEnabled = enabled;
		},

		/**
		 * Indicates whether to show the pseudo class property.
		 * 
		 * @param showClassProperty
		 *            Boolean indicating whether to show the pseudo class property
		 */
		setShowClassProperty: function(showClassProperty) {
			this._showClassProperty = showClassProperty;
			if (this._availableItems) {
				var index = -1;
				for ( var i = 0; i < this._availableItems.length; i++) {
					if (this._availableItems[i].value == "{CLASS}") {
						index = i;
						break;
					}
				}
				if (showClassProperty != (index > -1)) {
					if (showClassProperty) {
						this._availableItems.push({
							label: ecm.messages.class_label_no_html_encode,
							value: "{CLASS}",
							detailsView: true
						});
						this._sort(this._availableItems);
					} else {
						this._availableItems.splice(index, 1);
						this._cleanResultsDisplay();
					}

					// Reset the load state so that the list of available items is updated the next time we are disclosed  
					this._isLoaded = false;
				}
			}
		},

		/**
		 * @private
		 */
		_onShow: function() {
			if (!this._searchResultsDisplay) { // IE crashes when running inside dropdown input pane due to infinite resize calls.  So dynamically add the control on first open event.
				this._searchResultsDisplay = new _SearchResultsDisplayPane();
				if (!this._contentClass) {
					this._searchResultsDisplay._sloshBucket.tooltipClass = {
							getGridTooltipText: function(grid, item) {
								return grid.store.getValue(item, "tooltip") || "";
							}
					};
				}

				this._searchResultsDisplayPane.appendChild(this._searchResultsDisplay.domNode);
				this.connect(this._searchResultsDisplay, "onChange", lang.hitch(this, function() {
					var selectedSortBy = this._searchResultsDisplay.getSortByProperty();
					var selectedItems = this._searchResultsDisplay.getSelectedItems();
					if (this.repository && !this.repository._isCM() && !selectedSortBy) {
						selectedSortBy = this._getOrderByProperty(selectedItems);
					}
					this._loadSortByList(selectedSortBy);

					var disabled = (!selectedItems || selectedItems.length == 0);
					this._okButton.set("disabled", disabled);
				}));
			}

			if (this.repository && this.repository.type == "p8") {
				this._searchResultsDisplay.showContentSummary(true);
				this._searchResultsDisplay._summaryEnabled.set("checked", this._resultsDisplay.showContentSummary || false);
			} else {
				this._searchResultsDisplay.showContentSummary(false);
			}

			if (!this._contentClass && this._resultsDisplay)
				this._cleanResultsDisplay();

			if (!this._isLoaded) {
				this._searchResultsDisplay.loadSelectableGrid(this._availableItems);
				this._isLoaded = true;
			}
			this._createSelectedItems();
			var sortBy = this._resultsDisplay ? this._resultsDisplay.sortBy : ((this.repository && !this.repository._isCM()) ? ecm.model.admin.AdminConfig.PSEUDO_NAME : null);
			this._loadSortByList(sortBy);
			this._searchResultsDisplay.setSortAscending(this._resultsDisplay ? this._resultsDisplay.sortAsc : true, true);
			this.inherited(arguments);
			// Set the focus to the filtering text box
			this._searchResultsDisplay._filterBox.focus();
		},

		_cleanResultsDisplay: function() {
			// Remove columns that are no longer available
			var availableItems = this._availableItems || [];
			this._resultsDisplay.columns = array.filter(this._resultsDisplay.columns, function(col) {
				return array.some(availableItems, function(item) {
					return item.value == col;
				});
			});
			this._okButton.set("disabled", this._resultsDisplay.columns.length == 0);

			// Reset the sort by column if it is no longer orderable or selected
			if (!this._resultsDisplay.sortBy || this._resultsDisplay.columns.length < 1) {
				this._resultsDisplay.sortBy = null;
			} else if (!this._hasColumn(this._resultsDisplay.columns, this._resultsDisplay.sortBy) || !this._attributeMap[this._resultsDisplay.sortBy] || !this._isOrderable(this._attributeMap[this._resultsDisplay.sortBy])) {
				this._resultsDisplay.sortBy = null;
				if (this._contentClass && (!this.repository || (!this.repository._isCM() && !this.repository._isP8Like()))) { // None option is not available
					for ( var i in this._resultsDisplay.columns) {
						var attrib = this._attributeMap[this._resultsDisplay.columns[i]];
						if (attrib && this._isOrderable(attrib)) {
							this._resultsDisplay.sortBy = attrib.id;
							break;
						}
					}
				}
			}
		},

		/**
		 * An event that is triggered when the OK button is selected.
		 */
		onSave: function() {
			this._resultsDisplay = {
				"sortBy": this._searchResultsDisplay.getSortByProperty(),
				"sortAsc": this._searchResultsDisplay.getSortAscending(),
				"columns": this._searchResultsDisplay.getSelectedItems(),
				"magazineColumns": this._resultsDisplay.magazineColumns,
				"honorNameProperty": true,
				"showContentSummary": this._searchResultsDisplay.getContentSummary(),
				"saved": true
			};
			this._savedToOrderByRank = this._isOrderByRank();
			this.onCancel();
		},

		/**
		 * Shows the search results display dialog box.
		 */
		show: function() {
			var attributeDefinitions = null;
			if (this._contentClass) {
				attributeDefinitions = this._includeSubclasses ? this._contentClass.allAttributeDefinitions : this._contentClass.attributeDefinitions;
			} else if (this.attributeDefinitions) {
				attributeDefinitions = this.attributeDefinitions;
			}

			if (!attributeDefinitions) {
				this._contentClass.retrieveAttributeDefinitionsForSearches(lang.hitch(this, function(attributeDefinitions) {
					this._createSelectableItems();
					this._normalizeNameProperty();
					if (this._resultsDisplay)
						this._resultsDisplay.sortBy = this._getOrderByProperty(this._resultsDisplay.columns);
					ecm.widget.dialog.BaseDialog.prototype.show.apply(this, arguments); // avoids error "can't deduce a name to call inherited()"
				}), this._includeSubclasses);
			} else {
				if (!this._availableItems) {
					this._createSelectableItems();
					if (this._resultsDisplay)
						this._resultsDisplay.sortBy = this._getOrderByProperty(this._resultsDisplay.columns);
				}
				ecm.widget.dialog.BaseDialog.prototype.show.apply(this, arguments); // avoids error "can't deduce a name to call inherited()"
			}
		},

		/**
		 * Sets the search object type.
		 * 
		 * @param objectType
		 *            The object type of the search for which to get the name property.
		 * @deprecated As of 2.0.3.3. Use <code>setContentClass</code>.
		 */
		setObjectType: function(objectType) {
			this._objectType = objectType;
			this._filteredMap = this._getFilteredProperties();
		},

		/**
		 * Sets the selected search content class.
		 * 
		 * @param contentClass
		 *            Instance of {@link ecm.model.ContentClass}.
		 * @param includeSubclasses
		 *            A boolean value indicating to include all subclasses attributes.
		 * @param objectType
		 *            The type of object the search is querying, i.e., "document" or "folder".
		 */
		setContentClass: function(contentClass, includeSubclasses, objectType) {
			this._contentClass = contentClass;
			this._includeSubclasses = includeSubclasses;
			this._objectType = objectType;
			this._filteredMap = this._getFilteredProperties();
			var attributeDefinitions = includeSubclasses ? contentClass.allAttributeDefinitions : contentClass.attributeDefinitions;
			if (attributeDefinitions) {
				this._createSelectableItems();
			}
		},

		/**
		 * Sets the selected search content class.
		 * 
		 * @param attributeDefinitions
		 *            An array of attribute definitions.
		 */
		setAttributeDefinitions: function(attributeDefinitions) {
			if (attributeDefinitions) {
				this.attributeDefinitions = attributeDefinitions;
				this._filteredMap = {};
				this._createSelectableItems();
			}
		},

		_normalizeNameProperty: function() {
			// Replace the name property with the pseudo name property only if the results display is not configured to honor the name property
			// and the class has been loaded if working with a CM repository; in CM, the name property is not configurable and is defined by
			// ContentClass.nameAttribute so normalization can be postponed until the dialog is disclosed
			if (this._resultsDisplay && !this._resultsDisplay.honorNameProperty && this.repository && (!this.repository._isCM() || (this._contentClass && this._contentClass.attributeDefinitions))) {
				var columns = this._resultsDisplay.columns;
				if (!array.some(columns, function(col) {
					return col == ecm.model.admin.AdminConfig.PSEUDO_NAME;
				})) {
					var nameProperty = this._getNameProperty();
					for ( var i in columns) {
						if (columns[i] == nameProperty) {
							columns[i] = ecm.model.admin.AdminConfig.PSEUDO_NAME;
							break;
						}
					}
					if (this._resultsDisplay.sortBy == nameProperty)
						this._resultsDisplay.sortBy = ecm.model.admin.AdminConfig.PSEUDO_NAME;
				}
				this._resultsDisplay.honorNameProperty = true; // marks a new era where the name property is truly honored
			}
		},

		/**
		 * @private
		 */
		_normalizeResultsDisplayData: function() {
			if (!this._resultsDisplay)
				return;

			// Only add to the normalize array if the property is not in the filtered out list
			this._normalizeSortByProperty();
			var normalizeColumns = [];
			array.forEach(this._resultsDisplay.columns, function(entry, index) {
				if (!this._filteredMap[entry]) {
					normalizeColumns.push(entry);
				}
			}, this);

			var normalizeMagazineColumns = [];
			if (this._resultsDisplay.magazineColumns) {
				array.forEach(this._resultsDisplay.magazineColumns, function(entry, index) {
					if (!this._filteredMap[entry]) {
						normalizeMagazineColumns.push(entry);
					}
				}, this);
			}

			this._resultsDisplay.columns = normalizeColumns;
			this._resultsDisplay.sortBy = this._getOrderByProperty(this._resultsDisplay.columns); // Verify if the sort by column is sortable

			if (normalizeMagazineColumns.length == 0) {
				var lastModifiedBy = null;
				var lastModifiedDate = null;
				if (this.repository) {
					if (this.repository.type == "cmis") {
						lastModifiedBy = "cmis:lastModifiedBy";
						lastModifiedDate = "cmis:lastModificationDate";
					} else if (this.repository.type == "p8") {
						lastModifiedBy = "LastModifier";
						lastModifiedDate = "DateLastModified";
					} else if (this.repository.type == "cm") {
						lastModifiedBy = "modifiedBy";
						lastModifiedDate = "modifiedTimestamp";
					}
				}

				if (!this._hasColumn(normalizeColumns, lastModifiedBy) || !this._hasColumn(normalizeColumns, lastModifiedDate)) {
					for ( var i = 0; i < normalizeColumns.length; i++) {
						var columnId = normalizeColumns[i];
						normalizeMagazineColumns.push(columnId);
						if (i == 3) {
							break;
						}
					}
				} else {
					normalizeMagazineColumns.push(lastModifiedBy);
					normalizeMagazineColumns.push(lastModifiedDate);
				}
			}
			this._resultsDisplay.magazineColumns = normalizeMagazineColumns;
		},

		/**
		 * @private
		 */
		_normalizeSortByProperty: function() {
			if (this._resultsDisplay && this._resultsDisplay.sortBy && this._filteredMap[this._resultsDisplay.sortBy])
				this._resultsDisplay.sortBy = ecm.model.admin.AdminConfig.PSEUDO_NAME;
		},

		/**
		 * @private
		 */
		_isOrderByRank: function() {
			return this._resultsDisplay && this._resultsDisplay.sortBy == this.RANK;
		},

		/**
		 * @private
		 */
		_getOrderByProperty: function(selectedColumns) {
			if (!this._resultsDisplay)
				return null;

			if (!this._attributeMap || this._isOrderByRank() || ((this.repository._isCM() || this.repository._isP8Like()) && !this._resultsDisplay.sortBy))
				return this._resultsDisplay.sortBy || null;

			var isPseudoName = this._resultsDisplay.sortBy == ecm.model.admin.AdminConfig.PSEUDO_NAME;
			var attributeDefinition = this._attributeMap[isPseudoName ? this._getNameProperty() : this._resultsDisplay.sortBy];
			if (attributeDefinition == null || !this._isOrderable(attributeDefinition)) {
				var sortByItems = this._createSortByItems(selectedColumns);
				for ( var i = 0; i < selectedColumns.length; i++) {
					var name = selectedColumns[i];
					for ( var j = 0; j < sortByItems.length; j++) {
						if (name == sortByItems[j].value) {
							return name;
						}
					}
				}
				return null;
			} else {
				return isPseudoName ? ecm.model.admin.AdminConfig.PSEUDO_NAME : attributeDefinition.id;
			}
		},

		/**
		 * Sets the search results display settings.
		 * 
		 * @param resultsDisplay
		 *            An object with the following attributes.
		 *            <p>
		 *            sortBy: The ID of the property to sort by
		 *            sortAsc: A Boolean indicating whether to sort search results in ascending order
		 *            columns: An array of property identifiers representing the search result columns
		 *            magazineColumns: An array of property identifiers representing the search result columns displayed in the magazine view
		 *            honorNameProperty: A Boolean indicating whether to honor the label of the repository's designated name property (typically
		 *                               Document Title in FileNet P8) by showing it as-is on the column header or as the pseudo "Name" property
		 *            showContentSummary: A Boolean indicating whether to enable content summaries in the magazine view (FileNet P8 text searches only)
		 *            </p>
		 * @param isDataNotNormalized
		 *            A boolean value indicating that the search results display properties should be validated to see
		 *            if they have been filtered out by configuration.
		 */
		setResultsDisplay: function(resultsDisplay, isDataNotNormalized) {
			this._resultsDisplay = resultsDisplay;
			if (this._contentClass) {
				this._normalizeNameProperty();
				if (isDataNotNormalized)
					this._normalizeResultsDisplayData();
			}
		},

		/**
		 * Returns the search results display settings.
		 * 
		 * @return The search results display item that contains the selected search display properties, sort by
		 *         property and sort direction setting.
		 */
		getResultsDisplay: function() {
			return this._resultsDisplay;
		},

		/**
		 * Initializes the search results display settings based on whether the text search criteria is defined by the
		 * search.
		 * 
		 * @param searchResultsDisplay
		 *            The search results display item that contains the selected search display properties, sort by
		 *            property and sort direction setting.
		 * @param textSearchCriteriaDefined
		 *            A boolean value indicating if text search criteria is defined by the search.
		 */
		processSearchResultsDisplay: function(searchResultsDisplay, textSearchCriteriaDefined) {
			if (!this._resultsDisplay)
				return;

			if (!this._resultsDisplay.saved && searchResultsDisplay && searchResultsDisplay.sortBy == this.RANK || this._resultsDisplay.saved && this._savedToOrderByRank) {
				if (textSearchCriteriaDefined) {
					this._resultsDisplay.sortBy = this.RANK;
					this._resultsDisplay.sortAsc = false;
				} else {
					this._resultsDisplay.sortBy = ecm.model.admin.AdminConfig.PSEUDO_NAME;
					this._resultsDisplay.sortAsc = true;
				}
			} else if (this._resultsDisplay.saved && this._resultsDisplay.sortBy == this.RANK && !textSearchCriteriaDefined) {
				this._resultsDisplay.sortBy = ecm.model.admin.AdminConfig.PSEUDO_NAME;
				this._resultsDisplay.sortAsc = true;
			}

			return this._resultsDisplay;
		},

		/**
		 * @private
		 */
		_createSelectableItems: function() {
			this.logEntry("_createSelectableItems");
			this._hasSystemAttributes = false;
			this._attributeMap = {};
			this._childComponentMap = new Object();
			var nameProperty = this._getNameProperty();
			this._availableItems = [];

			var attributeDefinitions = null;
			if (this._contentClass) {
				attributeDefinitions = this._includeSubclasses ? this._contentClass.allAttributeDefinitions : this._contentClass.attributeDefinitions;
			} else if (this.attributeDefinitions) {
				attributeDefinitions = this.attributeDefinitions;
			}

			var namePropertyAdded = false;
			array.forEach(attributeDefinitions, function(attrib) {
				var id = attrib.id;
				if ((!attrib.hidden || array.indexOf(ecm.model.SearchConfiguration.prototype.VISIBLE_PROPERTIES[attrib.repositoryType], id) != -1) //
						&& (!this._filteredMap[id] || id == nameProperty)) {
					// Exclude the Box name property until it can be configured by administrators
					var isBoxNameProperty = this.repository && this.repository._isBox() && id == nameProperty;
					if (!isBoxNameProperty) {
						var item = {
							label: id == "cmis:name" ? this._messages.Name : attrib.name,
							value: id,
							detailsView: true
						};
						if (attrib._unviewable) {
							item.disabled = true;
							item.tooltip = this._messages.unified_search_mapping_not_viewable;
						}
						this._availableItems.push(item);
						this._attributeMap[attrib.id] = attrib;
						this._hasSystemAttributes = this._hasSystemAttributes || attrib.system;
					}

					if (id == nameProperty) {
						// Add the pseudo name property
						this._availableItems.push({
							label: isBoxNameProperty ? this._messages.Name : string.substitute(this._messages.search_name_attribute, [
								this._getAttributeDefinitionName(nameProperty)
							]),
							value: ecm.model.admin.AdminConfig.PSEUDO_NAME,
							detailsView: true
						});
						namePropertyAdded = true;
					}
				}
			}, this);

			if (!namePropertyAdded && this.repository && this.repository._isCM() && nameProperty == ecm.model.admin.AdminConfig.PSEUDO_NAME) {
				// Add the pseudo name property
				this._availableItems.push({
					label: this._messages.admin_name_propepty,
					value: ecm.model.admin.AdminConfig.PSEUDO_NAME,
					detailsView: true
				});
			}

			if ((this._showClassProperty === undefined && this.repository && this._contentClass) || this._showClassProperty) {
				this._availableItems.push({
					label: ecm.messages.class_label_no_html_encode,
					value: "{CLASS}",
					detailsView: true
				});
			}

			/*array.forEach(this._contentClass.childComponentDefinitions, function(childComponentDefinition) {
				//TODO 6779: how we can represent the parent-child structure in CM?
				// I put tentatively put "parent." as prefix
				var id = childComponentDefinition.id;
				if (!this._filteredMap[id] || id == nameProperty) {
					if (childComponentDefinition.isInstanceOf && childComponentDefinition.isInstanceOf(ecm.model.ChildComponentDefinition)) {
						var prefixName = childComponentDefinition.name;
						var prefixId = childComponentDefinition.id;
						array.forEach(childComponentDefinition.getAttributeDefinitions(), function(child) {
							this._availableItems.push({
								label: prefixName + "." + child.name,
								value: prefixId + "." + child.id
							});
						}, this);
					} else {
						this._availableItems.push({
							label: childComponentDefinition.name,
							value: childComponentDefinition.id
						});
					}
				}
			}, this);*/

			if (this._contentClass) {
				array.forEach(this._contentClass.childComponentDefinitions, function(childComponentDefinition) {
					this._childComponentMap[childComponentDefinition.id] = childComponentDefinition;
					this._availableItems.push({
						label: childComponentDefinition.name,
						value: childComponentDefinition.id,
						detailsView: true
					});
				}, this);
			}

			// Sort the available attribute definitions
			this._sort(this._availableItems);

			this._isLoaded = false;

			this.logExit("_createSelectableItems");
		},

		/**
		 * @private
		 */
		_sort: function(items) {
			// sorting attribute definitions
			var sortArray = function(a, b) {
				if (a.label > b.label) {
					return 1;
				}
				if (a.label < b.label) {
					return -1;
				}
				return 0;
			};
			items.sort(sortArray);
		},

		/**
		 * @private
		 */
		_getFilteredProperties: function() {
			this.logEntry("_getFilteredProperties");

			var filteredProperties = {};
			if (this._objectType && this._searchConfig && this._searchConfig.repository && this._contentClass) {
				array.forEach(this._searchConfig.getFilteredProperties(this._objectType), function(entry) {
					filteredProperties[entry] = entry;
				});
			}
			this.logExit("_getFilteredProperties");

			return filteredProperties;
		},

		/**
		 * @private
		 */
		_hasColumn: function(columns, id) {
			if (id && columns) {
				for ( var i in columns) {
					if (columns[i] == id) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * @private
		 */
		_getItemFromModelObj: function(name, modelObj, nameProperty) {
			if (name == ecm.model.admin.AdminConfig.PSEUDO_NAME) {
				// Use "Name" as the label since we are excluding the Box name property from the list of available properties
				var isBox = this.repository && this.repository._isBox();
				return {
					label: isBox || name == nameProperty ? this._messages.admin_name_propepty : string.substitute(this._messages.search_name_attribute, [
						this._getAttributeDefinitionName(nameProperty)
					]),
					value: name,
					tooltip: isBox ? this._messages.admin_name_propepty : nameProperty
				};
			} else if (modelObj) {
				return {
					label: modelObj.name,
					value: modelObj.id
				};
			} else if (name == "{CLASS}") {
				return {
					label: ecm.messages.class_label_no_html_encode,
					value: name
				};
			} else {
				return {
					label: name,
					value: name
				};
			}
		},

		/**
		 * @private
		 */
		_createSelectedItems: function() {
			this.logEntry("_createSelectedItems");
			var nameProperty = this._getNameProperty();
			var selectedItems = [];
			var values = {};
			if (this._resultsDisplay && this._attributeMap) {
				var detailsColumns = this._resultsDisplay.columns;
				// Add the columns in the details view
				array.forEach(detailsColumns, function(name, index) {
					var modelObj = this._attributeMap[name] || this._childComponentMap[name];
					var item = this._getItemFromModelObj(name, modelObj, nameProperty);
					item.detailsView = true;
					selectedItems.push(item);
					values[item.value] = item.value;
				}, this);
			}
			this._searchResultsDisplay.loadSelectedGrid(selectedItems, values, [], false);
			this.logExit("_createSelectedItems");
		},

		/**
		 * @private
		 */
		_createSortByItems: function(selectedItems) {
			this.logEntry("_createSortByItems");
			var nameProperty = this._getNameProperty();
			var sortItems = [];
			if (this._resultsDisplay && this._attributeMap) {
				array.forEach(selectedItems, function(name, index) {
					var attributeDefinition = this._attributeMap[name == ecm.model.admin.AdminConfig.PSEUDO_NAME ? nameProperty : name];
					if (attributeDefinition != null && this._isOrderable(attributeDefinition)) {
						sortItems.push({
							label: name == ecm.model.admin.AdminConfig.PSEUDO_NAME ? this._messages.admin_name_propepty : attributeDefinition.name,
							value: name
						});
					}
				}, this);
			}

			if (this._setTextSearchEnabled && (this.repository && (this.repository._isP8() || this.repository._isCM()))) {
				sortItems.push({
					label: this._messages.search_rank_property,
					value: this.RANK
				});
			}

			// sort the sort by list items
			this._sort(sortItems);
			this.logExit("_createSortByItems");

			return sortItems;
		},

		/**
		 * @private
		 */
		_isOrderable: function(attributeDefinition) {
			if (!this._contentClass) {
				return attributeDefinition.orderable;
			} else if (this.repository && (this.repository._isP8Like() || this.repository._isBox())) {
				return attributeDefinition.orderable;
			} else {
				if (this._contentClass.id == "$common") {
					return attributeDefinition.system && attributeDefinition.orderable;
				} else {
					return attributeDefinition.dataType != "xs:reference" && attributeDefinition.orderable;
				}
			}
		},

		/**
		 * @private
		 */
		_loadSortByList: function(sortBy) {
			if (this._contentClass && this.repository && !this.repository._isP8Like() && this._contentClass.id == "$common" && !this._hasSystemAttributes) {
				this._searchResultsDisplay.loadSortByList([], null, true);
				this._searchResultsDisplay.hideSortControls(true);
			} else {
				this._searchResultsDisplay.hideSortControls(false);
				var selectedItems = this._searchResultsDisplay.getSelectedItems();
				var sortItems = this._createSortByItems(selectedItems);
				this._searchResultsDisplay.loadSortByList(sortItems, sortBy, !this._contentClass || (this.repository && (this.repository._isCM() || this.repository._isP8Like())));
			}
		},

		/**
		 * Sets the repository.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this._searchConfig = ecm.model.SearchConfiguration.getSearchConfiguration({
				repository: this.repository
			});
		},

		/**
		 * @private
		 */
		_getNameProperty: function() {
			var docNameProp = this.repository ? this.repository.documentNameProperty : null;
			var nameAttribute = this._contentClass ? this._contentClass.nameAttribute : null;
			if (docNameProp && nameAttribute && this.repository._isCM() && !array.some(this._contentClass.attributeDefinitions, function(attrib) {
				return attrib.id == docNameProp;
			})) {
				// Use the pseudo name since the class doesn't contain the name property configured for the CM repository
				nameAttribute = ecm.model.admin.AdminConfig.PSEUDO_NAME;
			}

			if (nameAttribute) {
				return nameAttribute;
			} else {
				return this._searchConfig && this._searchConfig.repository && this._contentClass ? this._searchConfig.getNameProperty(this._objectType) : null;
			}
		},

		_getAttributeDefinitionName: function(id) {
			var name;
			if (this._contentClass) {
				var attribDefinitions = this._includeSubclasses ? this._contentClass.allAttributeDefinitions : this._contentClass.attributeDefinitions;
				array.some(attribDefinitions, function(attrib) {
					if (attrib.id == id)
						name = attrib.name;
					return name != null;
				});
			}
			return name || id;
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			if (this._searchResultsDisplay) {
				this._searchResultsDisplay.destroy();
				this._searchResultsDisplay = null;
			}
		},

		/**
		 * An event that is triggered when the search results display pane onChange event is fired.
		 */
		onChange: function() {
		}
	});
});

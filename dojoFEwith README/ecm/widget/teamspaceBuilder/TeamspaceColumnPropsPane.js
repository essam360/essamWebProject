/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/window",
	"dojo/data/ItemFileWriteStore",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/CheckBox",
	"dijit/layout/ContentPane",
	"dijit/registry",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/admin/AdminConfig",
	"ecm/widget/search/_SearchResultsDisplayPane",
	"dojo/text!./templates/TeamspaceColumnPropsPane.html"
],

function(declare, //
array, //
lang, //
domClass, //
domGeom, //
domStyle, //
window, //
ItemFileWriteStore, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
CheckBox, //
ContentPane, //
registry, //
LoggerMixin, //
MessagesMixin, //
AdminConfig, //
_SearchResultsDisplayPane, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.TeamspaceColumnPropsPane
	 * @class Provides a widget that displays the columns of information that are returned by a search.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.teamspaceBuilder.TeamspaceColumnPropsPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.TeamspaceColumnPropsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_CBR_RANK: "content.rank",
		_PSEUDO_NAME_PROPERTY: AdminConfig.PSEUDO_NAME,

		/**
		 * An instance of {@link ecm.model.Teamspace} that represents the teamspace that is to be associated with this
		 * dialog.
		 */
		model: null,

		/**
		 * Constructor
		 */
		constructor: function() {
			this.logEntry("constructor");
			this.inherited(arguments);
			this._messages = ecm.messages;
			this.logExit("constructor");
		},

		/**
		 * Sets the associated {@link ecm.model.Teamspace} object.
		 * 
		 * @param model
		 *            A {@link ecm.model.Teamspace} object.
		 */
		setModel: function(model) {
			this.model = model;
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.connect(this._columnSelector, "onChange", lang.hitch(this, function() {
				this._loadSortByList();
				this._resultsDisplay.sortBy = this._columnSelector.getSortByProperty();
			}));

			this.connect(this.useDefaultArea, "onmouseover", lang.hitch(this, function(evt) {
				dijit.showTooltip(this._messages.teamspace_props_sel_cols_use_default_tooltip, evt.target);
			}));
			this.connect(this.useDefaultArea, "onmouseout", lang.hitch(this, function(evt) {
				dijit.hideTooltip(evt.target);
			}));

			this.logExit("postCreate");
		},

		/**
		 * Sets the values in the properties list based on the {@link ecm.model.Teamspace} object.
		 */
		initValues: function() {
			this.logEntry("initValues");
			var colProps = null;
			var useDefault = true;
			if (this.model.columnProperties) {
				this.logDebug("using column properties from the teamspace definition");
				colProps = this.model.columnProperties;
				useDefault = false;
			} else {
				colProps = this._getColumnPropsFromConfig();
			}

			this.setResultsDisplay(colProps);
			this.setUseDefault(useDefault);
			this.logExit("initValues");
		},

		/**
		 * Sets whether text search is enabled. If enabled then the Rank property is added to the list of properties.
		 * 
		 * @param enabled
		 *            Set to true if text searching is enabled and the Rank property should be added to the list of
		 *            properties.
		 */
		setTextSearchEnabled: function(enabled) {
			this.logEntry("setTextSearchEnabled");
			this._setTextSearchEnabled = enabled;
			this.logExit("setTextSearchEnabled");
		},

		/**
		 * Renders the property lists.
		 */
		render: function() {
			this.logEntry("render");
			// first load the class properties into the available items list:
			this._contentClass.retrieveAttributeDefinitionsForSearches(lang.hitch(this, function(attributeDefinitions) {
				this._createSelectableItems(attributeDefinitions);
				this._adjustNameProperty();

				// load selected items list
				this._createSelectedItems();
				this._loadSortByList();
				this._columnSelector.setSortAscending(this._resultsDisplay ? this._resultsDisplay.sortAsc : true);

			}), true);
			this.logExit("render");
		},

		/**
		 * Returns the currently selected properties.
		 * 
		 * @return An object valued property with a "columns" property set to the list of selected properties.
		 */
		saveColumnProps: function() {
			this.logEntry("saveColumnProps");
			// use the pseudo name instead of the actual name property
			var selCols = this._columnSelector.getSelectedItems();
			if (selCols[0] != AdminConfig.PSEUDO_NAME) {
				selCols[0] = AdminConfig.PSEUDO_NAME;
			}
			this._resultsDisplay = {
				"sortBy": this._columnSelector.getSortByProperty(),
				"sortAsc": this._columnSelector.getSortAscending(),
				"columns": selCols,
				"magazineColumns": this._columnSelector.getSelectedMagazineItems()
			};
			this.logExit("saveColumnProps");
			return this._resultsDisplay;
		},

		/**
		 * Sets the content class to use to get the list of properties.
		 * 
		 * @param contentClass
		 *            A {@link ecm.model.ContentClass} object.
		 */
		setContentClass: function(contentClass) {
			this.logEntry("setContentClass");
			this._contentClass = contentClass;
			this.logExit("setContentClass");
		},

		/**
		 * @private
		 */
		_adjustNameProperty: function() {
			this.logEntry("_adjustNameProperty");
			// Make sure the selected sort by property can be used in a sort by clause.
			this._resultsDisplay.sortBy = this._getOrderByProperty();
			// make sure the pseudo name prop is used for the name
			var columns = this._resultsDisplay.columns;
			if (columns[0] != AdminConfig.PSEUDO_NAME) {
				if (columns[0] == this.getNameProperty()) {
					columns[0] = AdminConfig.PSEUDO_NAME;
				} else {
					columns.unshift(AdminConfig.PSEUDO_NAME);
				}
			}
			this.logExit("_adjustNameProperty");
		},

		/**
		 * Sets the currently selected column properties and sort info.
		 * 
		 * @param resultsDisplay
		 *            An object valued property specifying the selected properties and sort order. The values are set in
		 *            "columns", "sortBy", and "sortASC" properties. If null then the current properties are retrieved
		 *            from the repository configuration.
		 */
		setResultsDisplay: function(resultsDisplay) {
			this.logEntry("setResultsDisplay");
			if (resultsDisplay) {
				this._resultsDisplay = resultsDisplay;
			} else {
				this._resultsDisplay = this._getColumnPropsFromConfig();
			}

			// if this was rendered then re-render the selected items and other controls 
			if (this._attributeMap) {
				this._adjustNameProperty();
				this._createSelectedItems();
				this._loadSortByList();
				this._columnSelector.setSortAscending(this._resultsDisplay ? this._resultsDisplay.sortAsc : true);
			}
			this.logExit("setResultsDisplay");
		},

		/**
		 * Returns the currently selected column properties and sort info.
		 * 
		 * @return An object valued property specifying the selected properties and sort order. The values are set in
		 *         "columns", "sortBy", and "sortASC" properties.
		 */
		getResultsDisplay: function() {
			this.logEntry("getResultsDisplay");
			this.logExit("getResultsDisplay");
			return this._resultsDisplay;
		},

		_showInDetailsView: function(value) {
			if (this.model.repository._isP8() && value && value == "CmThumbnails") {
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @private
		 */
		_createSelectableItems: function(attributeDefinitions) {
			this.logEntry("_createSelectableItems");
			var nameProperty = this.getNameProperty();
			var availableItems = [];
			this._attributeMap = {};
			array.forEach(attributeDefinitions, function(attributeDefinition) {
				if (!attributeDefinition.hidden && attributeDefinition.id != nameProperty && attributeDefinition.dataType != "xs:object") {
					if (!attributeDefinition.system || (this._isExposedSystemProperty(attributeDefinition))) {
						availableItems.push({
							label: this._getAttributeLabel(attributeDefinition),
							value: attributeDefinition.id,
							detailsView: this._showInDetailsView(attributeDefinition.id),
							magazineView: true
						});
					}
				}
				this._attributeMap[attributeDefinition.id] = attributeDefinition;
			}, this);

			array.forEach(this._contentClass.childComponentDefinitions, function(childComponentDefinition) {
				availableItems.push({
					label: childComponentDefinition.name,
					value: childComponentDefinition.id,
					detailsView: true,
					magazineView: true
				});
			});

			if (this._setTextSearchEnabled) {
				availableItems.push({
					label: this._messages.search_rank_property,
					value: this._CBR_RANK,
					detailsView: true,
					magazineView: true
				});
			}
			availableItems.push({
				label: this._messages.class_label_no_html_encode,
				value: "{CLASS}",
				detailsView: true,
				magazineView: true
			});

			availableItems.sort(lang.hitch(this, this._sort));

			this._columnSelector.loadSelectableGrid(availableItems);
			this.logExit("_createSelectableItems");
		},

		/**
		 * @private
		 */
		_getAttributeLabel: function(attributeDefinition) {
			var label = attributeDefinition.name;
			// Currently only P8 repositories are placing * on system properties (even in Admin)
			if (this.model.repository._isP8() && attributeDefinition.system) {
				label = label + "*";
			}
			return label;
		},

		/**
		 * @private
		 */
		_sort: function(a, b) {
			if (a.label > b.label) {
				return 1;
			} else if (a.label < b.label) {
				return -1;
			} else
				return 0;
		},

		/**
		 * @private
		 */
		_isExposedSystemProperty: function(attributeDefinition) {
			this.logEntry("_isExposedSystemProperty");
			this.logExit("_isExposedSystemProperty");
			return true;
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
		_getLabelValue: function(index, name, nameProperty) {
			if (name == "{CLASS}") {
				return {
					label: this._messages.class_label_no_html_encode,
					value: name
				};
			} else if (name != nameProperty) {
				var attributeDefinition = this._attributeMap[name];
				if (attributeDefinition) {
					return {
						label: this._getAttributeLabel(attributeDefinition),
						value: attributeDefinition.id
					};
				}
			}
		},

		/**
		 * @private
		 */
		_createSelectedItems: function() {
			this.logEntry("_createSelectedItems");
			var nameProperty = this.getNameProperty();
			var selectedItems = [];
			var values = {};
			if (this._resultsDisplay) {
				var magazineColumns = this._resultsDisplay.magazineColumns ? this._resultsDisplay.magazineColumns : [];
				var detailsColumns = this._resultsDisplay.columns;

				// if no magazine columns, load with the default values for magazine view 
				if (magazineColumns.length == 0) {
					var lastModifiedBy = this.model.repository._isP8() ? "LastModifier" : "modifiedBy";
					var lastModifiedDate = this.model.repository._isP8() ? "DateLastModified" : "modifiedTimestamp";
					if (!this._hasColumn(detailsColumns, lastModifiedBy) || !this._hasColumn(detailsColumns, lastModifiedDate)) {
						for ( var i = 0; i < detailsColumns.length; i++) {
							var columnId = detailsColumns[i];
							magazineColumns.push(columnId);
							if (i == 3) {
								break;
							}
						}
					} else {
						magazineColumns.push(lastModifiedBy);
						magazineColumns.push(lastModifiedDate);
					}
				}

				// Add the columns in the details view
				array.forEach(detailsColumns, function(name, index) {
					var item = index != 0 ? this._getLabelValue(index, name, nameProperty) : {
						label: this._messages.admin_name_propepty,
						value: nameProperty
					};
					if (item) {
						item.detailsView = true;
						if (index == 0) {
							item.disabled = true;
							item.magazineView = true; // Select the name column for magazine view (the checkbox will be disabled)
						} else {
							item.magazineView = this._hasColumn(magazineColumns, name);
						}
						selectedItems.push(item);
						values[item.value] = item.value;
					}
				}, this);

				// Add the magazine columns that aren't in the details view
				var prevColumnId = null;
				for ( var i = 0; i < magazineColumns.length; i++) {
					var name = magazineColumns[i];
					var inDetails = this._hasColumn(detailsColumns, name);
					if (!inDetails) {
						var item = this._getLabelValue(i, name, nameProperty);
						if (item) {
							item.detailsView = false;
							item.magazineView = true;
							values[item.value] = item.value;

							var addedIt = false;
							if (prevColumnId) {
								var newColumns = [];
								for ( var j = 0; j < selectedItems.length; j++) {
									var colData = selectedItems[j];
									newColumns.push(colData);
									if (!addedIt && prevColumnId == colData.value) {
										newColumns.push(item);
										addedIt = true;
									}
								}
								selectedItems = newColumns;
							}
							if (!addedIt) {
								selectedItems.splice(1, 0, item);
							}
						}
					}
					prevColumnId = name;
				}
			}

			this._columnSelector.loadSelectedGrid(selectedItems, values, [
				nameProperty
			], true);
			this._updateSelectedStructure(this.getUseDefault());

			this.logExit("_createSelectedItems");
		},

		/**
		 * @private
		 */
		_createSortByItems: function(selectedItems) {
			this.logEntry("_createSortByItems");
			var nameProperty = this.getNameProperty();
			var sortItems = [];
			if (this._resultsDisplay) {
				array.forEach(selectedItems, function(name, index) {
					var attributeDefinition = this._attributeMap[name];
					if (attributeDefinition != null && this._isSortable(attributeDefinition)) {
						sortItems.push({
							label: nameProperty == attributeDefinition.id ? this._messages.admin_name_propepty : attributeDefinition.name,
							value: attributeDefinition.id
						});
					}
				}, this);
			}

			sortItems.sort(lang.hitch(this, this._sort));

			this.logExit("_createSortByItems");
			return sortItems;
		},

		/**
		 * @private
		 */
		_isSortable: function(attributeDefinition) {
			this.logEntry("_isSortable");
			if (this.model.repository._isP8()) {
				return !attributeDefinition.usesLongColumn;
			} else {
				if (this._contentClass.id == "$common") {
					return this._isExposedSystemProperty(attributeDefinition);
				} else {
					return attributeDefinition.dataType != "xs:reference";
				}
			}
			this.logExit("_isSortable");
		},

		/**
		 * @private
		 */
		_loadSortByList: function() {
			this.logEntry("_loadSortByList");
			var hideSortControls = false;

			//if (this.model.repository._isP8()) {
			//	hideSortControls = false;
			//}
			// not sure what the purpose of this is
			/*
			if (!this.repository._isP8() && this._contentClass.id == "$common") {
				var systemAttributes = this._searchConfig.getSystemProperties();
				hideSortControls = !systemAttributes || systemAttributes.length == 0;
			}
			*/

			if (hideSortControls) {
				this._columnSelector.loadSortByList([], ""); // clear the list
				this._columnSelector.hideSortControls(true);
			} else {
				var selectedItems = this._columnSelector.getSelectedItems();
				var sortItems = this._createSortByItems(selectedItems);
				var sortBy = this._resultsDisplay && this._resultsDisplay.sortBy ? this._resultsDisplay.sortBy : this.getNameProperty();
				this._columnSelector.loadSortByList(sortItems, sortBy);
				this._columnSelector.hideSortControls(false);
			}
			this.logExit("_loadSortByList");

		},

		/**
		 * Returns the name property specified by the repository configuration.
		 * 
		 * @return The property name that is designated to be used for the object name.
		 */
		getNameProperty: function() {
			this.logEntry("getNameProperty");
			var nameProp = "";
			if (this.repositoryConfig) {
				nameProp = this.repositoryConfig.getDocNameProperty();
			}
			if (!nameProp) {
				nameProp = this._PSEUDO_NAME_PROPERTY;
			}
			this.logExit("getNameProperty");
			return nameProp;
		},

		/**
		 * @private
		 */
		_getOrderByProperty: function() {
			this.logEntry("_getOrderByProperty");
			var columns = this._resultsDisplay.columns;
			var attributeDefinition;
			if (!this._resultsDisplay.sortBy || (columns[0] == this._resultsDisplay.sortBy && columns[0] != this.getNameProperty()))
				attributeDefinition = this._attributeMap[this.getNameProperty()];
			else
				attributeDefinition = this._attributeMap[this._resultsDisplay.sortBy];
			if (attributeDefinition == null || !this._isSortable(attributeDefinition)) {
				var sortBy = null;
				var sortByItems = this._createSortByItems(this._resultsDisplay.columns);
				array.some(sortByItems, function(name, index) {
					attributeDefinition = this._attributeMap[name.value];
					if (attributeDefinition != null && this._isSortable(attributeDefinition)) {
						sortBy = attributeDefinition.id;
						return true;
					}
				}, this);
				this.logExit("_getOrderByProperty");
				return sortBy;
			} else {
				this.logExit("_getOrderByProperty");
				return attributeDefinition.id;
			}
		},

		/**
		 * Resizes the widget.
		 */
		resize: function(changeSize) {
			this.inherited(arguments);
			var size = domGeom.getContentBox(this.domNode);
			var headingAreaSize = domGeom.getMarginBox(this.headingArea);
			var useDefaultAreaSize = domGeom.getMarginBox(this.useDefaultArea);
			this._columnSelector.resize({
				w: size.w,
				h: size.h - headingAreaSize.h - useDefaultAreaSize.h
			});
		},

		/**
		 * @private
		 */
		_onUseDefaultClick: function() {
			var checked = this._useDefault.get("checked");
			if (checked) {
				// reset to default
				var colProps = this._getColumnPropsFromConfig();
				if (colProps) {
					this.setResultsDisplay(colProps);
				}
			}
			this._columnSelector.setEditable(!checked);
			this._updateSelectedStructure(checked);
		},

		/**
		 * Returns whether the "Use Default" checkbox is checked.
		 * 
		 * @return True if the use default checkbox is checked.
		 */
		getUseDefault: function() {
			return this._useDefault.get("checked");
		},

		/**
		 * Sets the "checked" attribute of the "Use Default" checkbox.
		 * 
		 * @param checked
		 *            Specify the boolean value of the "checked" attribute.
		 */
		setUseDefault: function(checked) {
			this._useDefault.set("checked", checked);
			this._columnSelector.setEditable(!checked);
			this._updateSelectedStructure(checked);
		},

		/**
		 * @private Updates the Show in checkboxes disabled value in the selected sloshbucket.
		 */
		_updateSelectedStructure: function(disabled) {
			if (this._columnSelector._sloshBucket && this._columnSelector._sloshBucket.getSelectedValuesGrid()) {
				var structure = this._columnSelector._sloshBucket.getSelectedValuesGrid().structure;
				structure[1].disableFirstRow = true;
				structure[1].disabled = disabled;
				structure[2].disableFirstRow = true;
				structure[2].disabled = disabled;
				this._columnSelector._sloshBucket.getSelectedValuesGrid().set('structure', structure);
			}
		},

		/**
		 * Sets the repository configuration to be used to get the default list of properties. The repository
		 * configuration can be retrieved from the getRepositoryConfig method on the {@link ecm.model.Repository}
		 * object.
		 * 
		 * @param repConfig
		 *            A repository configuration object.
		 */
		setRepositoryConfig: function(repConfig) {
			this.repositoryConfig = repConfig;
		},

		/**
		 * @private
		 */
		_getColumnPropsFromConfig: function() {
			var colProps = null;
			if (this.repositoryConfig) {
				this.logDebug("using default column properties definition");
				var defaultCols = this.repositoryConfig.getFolderDefaultColumns();
				defaultCols[0] = this._PSEUDO_NAME_PROPERTY;
				colProps = {
					"sortBy": this.getNameProperty(),
					"sortAsc": true,
					"columns": defaultCols,
					"magazineColumns": this.repositoryConfig.getFolderMagazineDefaultColumns()
				};
			}
			return colProps;
		},

		/**
		 * Callback that is called when a change is made.
		 */
		onChange: function() {
			this.logEntry("onChange");
			this.logExit("onChange");
		}

	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dijit/form/RadioButton",
	"dijit/form/Select",
	"dojo/data/ItemFileWriteStore",
	"idx/form/CheckBox",
	"../../LoggerMixin",
	"../_DropDownDialogButtonMixin",
	"../DropDownDialog",
	"../FilterTextBox",
	"../SloshBucket",
	"idx/html",
	"dojo/text!./templates/_SearchResultsDisplayPane.html"
], function(declare, array, lang, has, aspect, domClass, domStyle, geometry, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, Button, RadioButton, Select, ItemFileWriteStore, CheckBox, LoggerMixin, _DropDownDialogButtonMixin, DropDownDialog, FilterTextBox, SloshBucket, idxHtml, template) {
	/**
	 * @private Part of {@link ecm.widget.search.SearchResultsDisplayOptions} widget
	 * @name ecm.widget.search._SearchResultsDisplayPane
	 * @class Provides a pane that is used to select search columns and sort by property.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.search._SearchResultsDisplayPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.search._SearchResultsDisplayPane.prototype */

		SORT_BY_NONE: " ",

		templateString: template,
		widgetsInTemplate: true,

		constructor: function() {
			this._messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
			this._sloshBucket.hideAvailableOnAdd = true;
			this._sloshBucket.tooltipClass = this;
			this.textDir = has("text-direction");

			this.connect(this._filterBox, "_onInput", "_filter");
			this.connect(this._filterBox, "_setValueAttr", "_filter");
			this.connect(this._sloshBucket, "_onClickRemove", "onChange");
			this.connect(this._sloshBucket, "_onClickAdd", "onChange");
			this.connect(this._sortByProperty, "onChange", this._updateSortDirectionState);
			this.connect(this._orderByAscending, "onChange", this._saveSortDirection);
			this.connect(this._summaryEnabled, "onChange", "onChange");
			this.showContentSummary(false);

			this._filterBox.set("placeholder", this._messages.name_contains_label);
			this._summaryEnabled.set("label", this._messages.search_results_summary_enabled_label);
		},

		/**
		 * Enables or disables the content summary checkbox area.
		 * 
		 * @since 2.0.3
		 */
		showContentSummary: function(contentSummaryEnabled) {
			if (contentSummaryEnabled) {
				domStyle.set(this.summaryEnabledArea, "display", "block");
			} else {
				domStyle.set(this.summaryEnabledArea, "display", "none");
			}
		},

		/**
		 * @private
		 */
		_updateSortDirectionState: function() {
			if (this.getSortByProperty() != null) {
				if (!this._sortIsHidden) {
					domClass.remove(this._sortOrder, "dijitHidden");
				}
				this._orderByAscending.set("disabled", this._isOrderByRank());
				this._orderByDescending.set("disabled", this._isOrderByRank());
				if (this._isOrderByRank())
					this.setSortAscending(false);
				else if (this._wasOrderByDescending != undefined)
					this.setSortAscending(!this._wasOrderByDescending);
			} else if (!this._sortIsHidden) {
				domClass.add(this._sortOrder, "dijitHidden");
			}
		},

		/**
		 * @private
		 */
		_isOrderByRank: function() {
			return this.getSortByProperty() == ecm.widget.search.SearchResultsDisplayOptions.prototype.RANK;
		},

		/**
		 * @private
		 */
		_saveSortDirection: function() {
			if (!this._isOrderByRank())
				this._wasOrderByDescending = this._orderByDescending.get("checked");
		},

		/**
		 * Load the SloshBucket available grid.
		 * 
		 * @param availableItems
		 *            An array of property objects.
		 * 
		 * <pre>
		 * {
		 * 	value: &quot;Name&quot;,
		 * 	label: &quot;Name Property&quot;
		 * }
		 * </pre>
		 */
		loadSelectableGrid: function(availableItems) {
			this.logEntry("loadSelectableGrid");
			this._availableItemsStore = new ItemFileWriteStore({
				data: {
					items: availableItems
				},
				clearOnClose: true
			});

			var structure = [
				{
					field: "label",
					name: this._messages.search_results_available_properties,
					width: "100%",
					formatter: function(value, rowIndex, cell) {
						var item = this.grid.getItem(rowIndex);
						return item && item.disabled ? '<div class="itemDisabled">' + value + '</div>' : value;
					}
				}
			];
			this._sloshBucket.setAvailableGridModel(this._availableItemsStore, structure);
			this._sloshBucket.filter({});
			this._sloshBucket._availableData.onCanSelect = lang.hitch(this, function(inIndex) {
				var item = this._sloshBucket._availableData.getItem(inIndex);
				return !item || !item.disabled;
			});
			this.connect(this._sloshBucket._availableData, "onRowDblClick", "onChange");
			this.logExit("loadSelectableGrid");
		},

		/**
		 * Load the SloshBucket selected grid.
		 * 
		 * @param selectedItems
		 *            An array of property objects.
		 * 
		 * <pre>
		 * {
		 * 	value: &quot;Name&quot;,
		 * 	label: &quot;Name Property&quot;
		 * }
		 * </pre>
		 * 
		 * @param valueArray
		 *            The keys on this structure are the default selected values to add to the selected values grid.
		 * @param fixedItems
		 *            An array of property JSON objects indicating items that cannot be removed from, moved up or down
		 *            in the selected values grid.
		 * @param includeCheckboxes
		 * @since 2.0.2 True to include the show in details and show in magazine checkbox columns.
		 */
		loadSelectedGrid: function(selectedItems, valueArray, fixedItems, includeCheckboxes) {
			this.logEntry("loadSelectedGrid");
			this._selectedItemsStore = new ItemFileWriteStore({
				data: {
					items: selectedItems
				},
				clearOnClose: true
			});

			var structure = [
				{
					field: "label",
					name: this._messages.search_results_selected_properties,
					width: "100%"
				}
			];
			this._includeCheckboxes = includeCheckboxes;
			if (includeCheckboxes) {
				var self = this;
				structure = [
					{
						field: "label",
						name: this._messages.search_results_selected_properties,
						width: "98%"
					},
					{
						field: "detailsView",
						name: this._messages.detail_view_show,
						editable: true,
						cellType: "dojox.grid.cells.Bool",
						styles: "text-align: center;",
						formatEditing: function(inDatum, inRowIndex) {
							var disabled = this.disabled || (this.disableFirstRow && inRowIndex == 0);
							if (!disabled) {
								var item = this.grid.getItem(inRowIndex);
								if (item) {
									var value = this.grid.store.getValue(item, "value");
									if (value) {
										if (value == "CmThumbnails") {
											disabled = true;
										}
									}
								}
							}
							if (disabled) {
								return '<input class="dojoxGridInput" disabled="disabled" type="checkbox"' + (inDatum ? ' checked="checked"' : '') + ' style="width: auto" />';
							} else {
								return '<input class="dojoxGridInput" type="checkbox"' + (inDatum ? ' checked="checked"' : '') + ' style="width: auto" />';
							}
						},
						doclick: function(evt) {
							if (evt.target.tagName == 'INPUT') {
								this.applyStaticValue(evt.rowIndex);
								self.onChange();
							}
						}
					},
					{
						field: "magazineView",
						name: this._messages.magazine_view_show,
						editable: true,
						cellType: "dojox.grid.cells.Bool",
						styles: "text-align: center;",
						formatEditing: function(inDatum, inRowIndex) {
							if (this.disabled || (this.disableFirstRow && inRowIndex == 0)) {
								return '<input class="dojoxGridInput" disabled="disabled" type="checkbox"' + (inDatum ? ' checked="checked"' : '') + ' style="width: auto" />';
							} else {
								return '<input class="dojoxGridInput" type="checkbox"' + (inDatum ? ' checked="checked"' : '') + ' style="width: auto" />';
							}
						},
						doclick: function(evt) {
							if (evt.target.tagName == 'INPUT') {
								this.applyStaticValue(evt.rowIndex);
								self.onChange();
							}
						}
					}
				];
			}
			this._sloshBucket.setSelectedValuesGridModel(this._selectedItemsStore, structure, valueArray, fixedItems);
			this.connect(this._sloshBucket._valuesGrid, "onRowDblClick", "onChange");
			this.logExit("loadSelectedGrid");
		},

		/**
		 * Load the Select sort by list.
		 * 
		 * @param sortByItems
		 *            An array of property objects.
		 * 
		 * <pre>
		 * {
		 * 	value: &quot;Name&quot;,
		 * 	label: &quot;Name Property&quot;
		 * }
		 * </pre>
		 * 
		 * @param sortByProperty
		 *            The sort by property.
		 * @param addNoneOption
		 *            A boolean value indicating if a None entry is added to the sort by property Select box.
		 */
		loadSortByList: function(sortByItems, sortByProperty, addNoneOption) {
			this.logEntry("loadSortByList");
			var options = [];
			var valueToSelect = null;
			if (addNoneOption) {
				options.push({
					label: "<i>" + idxHtml.escapeHTML(this._messages.none) + "</i>",
					value: this.SORT_BY_NONE
				});
				if (!sortByProperty) {
					valueToSelect = this.SORT_BY_NONE;
				}
			}
			array.forEach(sortByItems, function(sortByItem) {
				options.push({
					label: idxHtml.escapeHTML(sortByItem.label),
					value: sortByItem.value
				});
				if (sortByItem.value == sortByProperty) {
					valueToSelect = sortByItem.value;
				}
			});
			this._sortByProperty.set("options", options);
			if (!valueToSelect && options.length > 0) {
				valueToSelect = options[0].value;
			}
			if (valueToSelect) {
				this.hideSortControls(false);
				this._sortByProperty.set("value", valueToSelect);
			} else {
				this.hideSortControls(true);
			}
			this._updateSortDirectionState();
			this.logExit("loadSortByList");
		},

		/**
		 * Set true to hide the sort by select box and the sort direct radio button.
		 * 
		 * @param yes
		 *            A boolean value indicating if the sort controls should be hidden.
		 */
		hideSortControls: function(yes) {
			if (yes) {
				domClass.add(this._sortBy, "dijitHidden");
				domClass.add(this._sortOrder, "dijitHidden");
			} else {
				domClass.remove(this._sortBy, "dijitHidden");
				domClass.remove(this._sortOrder, "dijitHidden");
			}
			this._sortIsHidden = yes;
		},

		/**
		 * Call back from the sloshBucket to create grid tooltip.
		 * 
		 * @param grid
		 *            Instance of {@link dojox.grid.DataGrid}
		 * @param item
		 *            The grid item that currently has the mouse over event.
		 */
		getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this._messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var label = grid.store.getValue(item, 'tooltip') ? grid.store.getValue(item, 'tooltip') : grid.store.getValue(item, 'label');
				toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(label)) : idxHtml.escapeHTML(label));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this._messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var value = grid.store.getValue(item, 'value');
				toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(value)) : idxHtml.escapeHTML(value));
				toolTip.push("</span></div>");
				return toolTip.join("");
			} else {
				return "";
			}
		},

		/**
		 * Returns the selected properties used to display search results in details view.
		 * 
		 * @return Returns an array of the current selected property value.
		 */
		getSelectedItems: function() {
			this.logEntry("getSelectedItems");
			var selectedGriditems = this._sloshBucket.getData(this._sloshBucket.getSelectedValuesGrid());
			var newItems = [];
			for ( var i = 0; i < selectedGriditems.length; i++) {
				if (this._includeCheckboxes) {
					if (selectedGriditems[i].detailsView) {
						newItems.push(selectedGriditems[i].value);
					}
				} else {
					newItems.push(selectedGriditems[i].value);
				}
			}
			this.logExit("getSelectedItems");
			return newItems;
		},

		/**
		 * Returns the selected properties used to display search results in magazine view.
		 * 
		 * @return Returns an array of the current selected property value.
		 * @since 2.0.2
		 */
		getSelectedMagazineItems: function() {
			this.logEntry("getSelectedMagazineItems");
			var selectedGriditems = this._sloshBucket.getData(this._sloshBucket.getSelectedValuesGrid());
			var newItems = [];
			for ( var i = 0; i < selectedGriditems.length; i++) {
				if (selectedGriditems[i].magazineView && !selectedGriditems[i].disabled) {
					newItems.push(selectedGriditems[i].value);
				}
			}
			this.logExit("getSelectedMagazineItems");
			return newItems;
		},

		/**
		 * Sets the sort by property.
		 * 
		 * @param sortByProperty
		 *            A string value to set as the selected sort by property.
		 */
		setSortByProperty: function(sortByProperty) {
			if (!sortByProperty && this._sortByProperty.getOptions(this.SORT_BY_NONE))
				sortByProperty = this.SORT_BY_NONE;
			this._sortByProperty.set("value", sortByProperty);
		},

		/**
		 * Returns the value of the sort by property Select control.
		 * 
		 * @return Returns the property that is currently selected as the sort by property.
		 */
		getSortByProperty: function() {
			var value = this._sortByProperty.get("value");
			return value === this.SORT_BY_NONE ? null : value;
		},

		/**
		 * Sets the sort ascending radio button.
		 * 
		 * @param value
		 *            A boolean value that sets the sort ascending radio button value.
		 * @param resetSaved
		 *            A boolean value that clears the current saved value.
		 */
		setSortAscending: function(value, resetSaved) {
			if (resetSaved) {
				this._wasOrderByDescending = undefined;
				this._orderByAscending.set("checked", false);
				this._orderByDescending.set("checked", false);
			}

			if (value) {
				if (!this._orderByAscending.get("disaled"))
					this._orderByAscending.set("checked", true);
			} else {
				if (!this._orderByDescending.get("disaled"))
					this._orderByDescending.set("checked", true);
			}
		},

		/**
		 * Returns the value of the sort ascending radio button
		 * 
		 * @return Returns true if the sort ascending radio button is checked.
		 */
		getSortAscending: function() {
			return this._orderByAscending.get("checked");
		},

		/**
		 * Returns the value of the content summary check box
		 * 
		 * @return Returns true if the content summary check box is checked.
		 * @since 2.0.3
		 */
		getContentSummary: function() {
			return this._summaryEnabled.get("checked");
		},

		/**
		 * Filters default columns by label
		 */
		_filter: function() {
			this.logEntry("_filter");
			var filterData = this._filterBox.get("value");

			// Filter grid on text changes
			if (this._filterData != filterData) {
				this._filterData = filterData;
				this._sloshBucket.filter({
					label: "*" + filterData + "*"
				});
			}
			this.logExit("_filter");
		},

		/**
		 * Resizes the pane.
		 */
//		resize: function(changeSize) {
//			this.inherited(arguments);
//			var size = geometry.getContentBox(this.domNode);
//			var filterBoxSize = geometry.getMarginBox(this._filterBox);
//			var sortBySize = geometry.getMarginBox(this._sortBy);
//			var sortOrderSize = geometry.getMarginBox(this._sortOrder);
//			var summaryEnabledSize = geometry.getMarginBox(this.summaryEnabledArea);
//			this._sloshBucket.resize({
//				w: size.w,
//				h: size.h - filterBoxSize.h - sortBySize.h - sortOrderSize.h - summaryEnabledSize.h
//			});
//		},

		/**
		 * Sets the widget to editable.
		 * 
		 * @param editable
		 *            A boolean value indicating if the widget is editable.
		 */
		setEditable: function(editable) {
			this._sloshBucket.setEditable(editable);
			this._sortByProperty.set("disabled", !editable);
			this._orderByAscending.set("disabled", !editable);
			this._orderByDescending.set("disabled", !editable);
			this._summaryEnabled.set("disabled", !editable);
		},

		/**
		 * An event that gets trigger when items are added to or removed from the selected list, the sort property is
		 * changed or the sort direction is changed.
		 */
		onChange: function() {
		}
	});
});

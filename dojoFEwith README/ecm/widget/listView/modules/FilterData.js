/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/connect",
	"dojo/string",
	"dojo/keys",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/form/Button",
	"ecm/widget/listView/modules/_Module",
	"ecm/widget/FilterTextBox",
	"gridx/modules/Filter",
	"ecm/widget/listView/gridModules/FilterBar"
],

function(declare, lang, array, event, connect, string, keys, domAttr, domConstruct, domClass, domStyle, domGeom, Button, _Module, FilterTextBox, Filter, FilterBar) {

	/**
	 * @name ecm.widget.listView.modules.FilterData
	 * @class This content list module provides filter capability using the gridx module Filter. This module allows the
	 *        user to type in their filter in the filter text box. This module will then filter the grid on any of the
	 *        filterable columns containing this input value.<br>
	 *        <br>
	 *        If showFilterButton is true, then this module also displays the filter builder button which allows the
	 *        user to build their filter using a filter dialog. The filter builder capability is provided by the
	 *        FilterBar gridx module.
	 * @augments ecm.widget.listView.modules._Module
	 * @since 2.0.2
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.FilterData.prototype */

		name: 'filterData',

		/**
		 * The time (in ms) delay before applying the filter after each key stroke in the filter box.
		 */
		delay: 70,

		/**
		 * Boolean indicates if the filter button should show. If the filter button shows, then the FilterBar gridx
		 * module will be added to the list of grid modules.
		 */
		showFilterButton: true,

		/**
		 * Boolean indicating if the filtering should be case sensitive.
		 * 
		 * @since 2.0.3
		 */
		isCaseSensitive: false,

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				filterDataModule: this
			};
		},

		/**
		 * Preload listens to events.
		 */
		preload: function() {
			var t = this, cl = t.contentList;
			t.domNode = domConstruct.create("span", {
				"class": "filterData"
			});

			//Create the filter (hidden) label for accessibility
			var id = cl.id + "_FilterTextBox";
			domConstruct.create("label", {
				"for": id,
				"style": "display: none",
				innerHTML: ecm.messages.name_contains_label
			}, t.domNode);

			// Create the filter text box
			t._filterTextBox = new FilterTextBox({
				"class": "filter",
				"id": id,
				"style": "float: none;",
				placeholder: ecm.messages.process_filter_label
			});
			t.connect(t._filterTextBox, "onInput", "_onInput");
			t.connect(t._filterTextBox, "_onClickClear", "clearFilter");
			domConstruct.place(t._filterTextBox.domNode, t.domNode);

			// Create the filter button
			t._filterButton = new Button({
				"class": "iconButton",
				iconClass: "filterButtonIcon",
				title: ecm.messages.filter_builder_tooltip,
				showLabel: false,
				label: ecm.messages.filter_builder_tooltip
			});
			domClass.add(t._filterButton.domNode, "filterButton");
			// hide by default, 'display' will be updated once the modules are loaded
			domStyle.set(t._filterButton.domNode, "display", "none");
			t.connect(t._filterButton, "onClick", "showFilterDialog");
			domConstruct.place(t._filterButton.domNode, t.domNode);

			// Adds the gridx Filter module if it isn't already in the core modules or the grid extensions
			if (!t._hasModule(cl.coreModules, "filter") && !t._hasModule(cl._gridExtensionModules, "filter")) {
				cl.coreModules.push(Filter);
			}
			// Adds the gridx FilterBar module if it isn't already in the core modules or the grid extensions and if the user wants to show the filter button.
			if (t.showFilterButton) {
				if (!t._hasModule(cl.coreModules, "filterBar") && !t._hasModule(cl._gridExtensionModules, "filterBar")) {
					cl.coreModules.push(FilterBar);
				}
			}

			t.connect(cl, "onModulesLoaded", "_modulesLoaded");
		},

		/**
		 * @private Returns true if the list of modules has the specified module name.
		 */
		_hasModule: function(modules, name) {
			if (modules) {
				for ( var i = 0; i < modules.length; i++) {
					var module = modules[i];
					if (module.prototype) {
						if (module.prototype.name == name) {
							return true;
						}
					} else if (module.moduleClass && module.moduleClass.prototype && module.moduleClass.prototype.name == name) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * @private Called every time the grid modules are loaded.
		 */
		_modulesLoaded: function() {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				t.connect(filterBar, "_buildFilterState", "_updateFilterStatus");
				t.connect(filterBar, "clearFilter", lang.hitch(t, function() {
					t._filterTextBox.set("value", "");
				}));
				t.clearFilter();
				t._updateFilterStatus();
				domStyle.set(t._filterButton.domNode, "display", "");
				domStyle.set(t.domNode, "display", "");

				var stringMethods = filterBar.conditions.string;
				var filterModuleClass = cl.getGridModule("filter").moduleClass;
				for ( var i in stringMethods) {
					t.aspect(filterModuleClass, stringMethods[i], lang.hitch(t, function(originalMethod) {
						return lang.hitch(t, function() {
							if (t.isCaseSensitive) {
								return (originalMethod.apply(filterModuleClass, [
									arguments[0],
									arguments[1],
									true
								]));
							} else {
								return (originalMethod.apply(filterModuleClass, arguments));
							}
						});
					}), t, "around");
				}
			} else {
				t._filterTextBox.set("value", "");
				domStyle.set(t._filterButton.domNode, "display", "none");
				domStyle.set(t.domNode, "display", "");
			}

			// Only allow sorting if no filter is enabled
			var sort = cl.getGridModule("sort");
			if (sort) {
				sort._onClick = lang.hitch(t, function(evt) {
					var filter = t.contentList.grid.filter;
					if (!filter.getFilter()) {
						sort.sort(evt.columnId, sort._sortId != evt.columnId ? 0 : !sort._sortDescend);
					}
				});
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			t._cleanUp();
			t.inherited(arguments);
		},

		/**
		 * @private Cleans up the widgets created.
		 */
		_cleanUp: function() {
			var t = this;
			if (t._filterButton) {
				t._filterButton.destroyRecursive();
				t._filterButton = null;
			}
			if (t._filterTextBox) {
				t._filterTextBox.destroyRecursive();
				t._filterTextBox = null;
			}
		},

		/**
		 * @private Show the tooltip.
		 */
		_showTooltip: function(evt, delayed) {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				filterBar._showTooltip(evt);
			}
		},

		/**
		 * @private Hide the tooltip.
		 */
		_hideTooltip: function() {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				filterBar._hideTooltip();
			}
		},

		/**
		 * @private Entered data in the filter text area. Filter by this data after a delay.
		 */
		_onInput: function(evt) {
			var t = this;
			if (evt.keyCode != keys.TAB) {
				clearTimeout(t._handle);
				t._handle = setTimeout(lang.hitch(t, function() {
					t._filter();
				}), evt.keyCode == keys.ENTER ? 0 : t.delay);
			}
		},

		/**
		 * @private Filter using the filter text area value.
		 */
		_filter: function() {
			var t = this, cl = t.contentList, g = cl.grid, v = t._filterTextBox.get("value");
			if (g) {
				clearTimeout(t._handle);
				var filterBar = cl.getGridModule("filterBar");
				if (filterBar) {
					if (v === "") {
						t.clearFilter();
					} else {
						filterBar.applyFilter({
							conditions: [
								{
									condition: "contain",
									value: v
								}
							]
						});
					}
				} else {
					var cols = array.filter(g.columns(), function(col) {
						return col.filterable !== false;
					});
					g.filter.setFilter(v === "" ? 0 : Filter.or.apply(0, array.map(cols, function(col) {
						return Filter.contain(Filter.column(col.id), Filter.value(v));
					})));
				}
			}
		},

		/**
		 * @private Builds the filter status and puts it in the status node.
		 */
		_updateFilterStatus: function() {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				if (t._shouldShowFilterBar()) {
					filterBar.show();
					var filterData = filterBar.filterData;
					if (filterData && filterData.conditions) {
						if (filterData.conditions.length > 1) {
							t._filterTextBox.set("value", "");
						} else if (filterData.conditions.length == 1 && filterData.conditions[0].condition == "contain" && t._filterTextBox.get("value") != filterData.conditions[0].value) {
							t._filterTextBox.set("value", "");
						}
					}
				} else {
					filterBar.hide();
				}
			}
			// Update the grid header cursor to indicate if can or cannot click
			if (cl.grid.sort && cl.grid.header) {
				domStyle.set(cl.grid.header.domNode, "cursor", cl.grid.filter.getFilter() ? "text" : "default");
			}
		},

		/**
		 * @private Returns boolean indicating if should show the filter bar.
		 */
		_shouldShowFilterBar: function() {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				var filterData = filterBar.filterData;
				if (!filterData || !filterData.conditions.length || filterData.conditions.length == 0) {
					return false;
				} else if (filterData.conditions.length > 1) {
					return true;
				} else if (filterData.conditions[0].condition == "contain" && t._filterTextBox.get("value") == filterData.conditions[0].value) {
					return false;
				} else {
					return true;
				}
			} else {
				return false;
			}
		},

		/**
		 * Clears the filter.
		 */
		clearFilter: function() {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				filterBar.clearFilter();
			} else {
				t._filterTextBox.set("value", "");
				t._filter();
			}
		},

		/**
		 * Shows the filter dialog.
		 */
		showFilterDialog: function() {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			if (filterBar) {
				filterBar.showFilterDialog();
			}
		}
	});
});

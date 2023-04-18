/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/dom-geometry",
	"dojo/data/ItemFileWriteStore",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/tree/ForestStoreModel",
	"idx/html",
	"ecm/model/Message",
	"../Messages",
	"./FilterTextBox",
	"./SloshBucket",
	"dojo/text!./templates/MultiValueChoicePane.html"
],

function(declare, //
lang, //
domStyle, //
domAttr, //
domGeom, //
ItemFileWriteStore, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ForestStoreModel, //
idxHtml, //
Message, //
Messages, //
FilterTextBox, //
SloshBucket, //
template) {

	/**
	 * @name ecm.widget.MultiValueChoicePane
	 * @class Provides a widget that is used to select multiple values from a choice list. This widget is used for IBM
	 *        FileNet Content Manager repositories.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.MultiValueChoicePane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.MultiValueChoicePane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		/**
		 * Choice list to be displayed as the available data. This has a <code>displayName</code> and choices.
		 */
		availableData: null,
		/**
		 * Array of the selected values.
		 */
		selectedValues: null,
		/**
		 * Boolean indicating if duplicate values are allowed. If set to <code>false</code>, then value will be the
		 * identifier.
		 */
		allowDuplicateValues: true,
		/**
		 * Boolean indicating if the widget supports sorting. If set to <code>false</code>, then the move up down
		 * buttons/container is non-displayed.
		 */
		hasSorting: true,
		/**
		 * If set to <code>true</code>, when an available item is added to the selected list, it is hidden in the
		 * available list.
		 */
		hideAvailableOnAdd: false,
		/**
		 * Boolean indicating if the available list is a tree or grid.
		 */
		isTree: false,
		/**
		 * Boolean indicating if the data is editable.
		 */
		editable: true,

		messages: ecm.messages,
		_availableDataMap: null,
		_previousFilter: "",

		/**
		 * Markings that are in the selected data that the user does not have permission to remove.
		 */
		_fixedMarkings: {},

		constructor: function() {
			if (!this.selectedValues) {
				this.selectedValues = [];
			}
		},

		postCreate: function() {
			this.inherited(arguments);

			this._separator = ecm.model.desktop.valueFormatter.getSeparator();

			if (this.allowDuplicateValues) {
				this.hideAvailableOnAdd = false; // hideAvailableOnAdd is only allowed if using unique/non-duplicate values
			}
			this._sloshBucket.tooltipClass = this;
			this._sloshBucket.hasSorting = this.hasSorting;
			this._sloshBucket.hideAvailableOnAdd = this.hideAvailableOnAdd;
			this._sloshBucket.setEditable(this.editable);

			this._sloshBucket.validateRemove = dojo.hitch(this, "_validateRemove");

			this._filter.set('disabled', !this.editable);
			this._availableDataMap = {};

			this._loadAvailableValues();
			this._loadFixedMarkings();
			this._displayWarning("");
		},

		destroy: function() {
			if (this._sloshBucket)
				this._sloshBucket.destroy();
			if (this._availableDataMap)
				delete this._availableDataMap;

			this.inherited(arguments);
		},

		/**
		 * When the widget is shown, clears the filter and loads the {@link ecm.widget.SloshBucket} widget.
		 */
		onShow: function() {
			this._displayWarning("");
			this._filter.set('value', '');
			this._loadSloshBucket();
		},

		onHide: function() {
			if (this._sloshBucket)
				this._sloshBucket.onHide();
		},

		/**
		 * Callback from the sloshBucket. Loads the grid tooltip.
		 * 
		 * @param grid
		 *            The grid.
		 * @param item
		 *            The item.
		 */
		getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var label = grid.store.getValue(item, 'label');
				toolTip.push(idxHtml.escapeHTML(label));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var value = grid.store.getValue(item, 'value');
				toolTip.push(idxHtml.escapeHTML(value));
				toolTip.push("</span></div>");
				return toolTip.join("");
			} else {
				return "";
			}
		},

		/**
		 * Callback from the sloshBucket. Loads the tree node's tooltip.
		 * 
		 * @param treeModel
		 *            The <code>treeModel</code>.
		 * @param treeNode
		 *            The tree node.
		 */
		getTreeTooltipText: function(treeModel, treeNode) {
			var item = treeNode.item;
			if (item && item.value) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var label = treeModel.store.getValue(item, 'label');
				toolTip.push(idxHtml.escapeHTML(label));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var value = treeModel.store.getValue(item, 'value');
				toolTip.push(idxHtml.escapeHTML(value));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.path_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var path = treeNode.getTreePath();
				var pathStr = "";
				for ( var i = 0; i < path.length - 1; i++) {
					if (i != 0) {
						pathStr += " > ";
					}
					pathStr += path[i].label;
				}
				toolTip.push(idxHtml.escapeHTML(pathStr));
				toolTip.push("</span></div>");
				return toolTip.join("");
			} else {
				return ecm.messages.properties_not_selectable_tooltip;
			}
		},

		/**
		 * Returns the label string for the selected values.
		 * 
		 * @return The full label string. When multiple values are selected, the label for each selected value is
		 *         appended to the label string. The <code>_separator</code> character is used to separate multiple
		 *         labels in the label string.
		 */
		getLabel: function() {
			var label = "";
			for ( var i = 0; i < this.selectedValues.length; i++) {
				var value = this.selectedValues[i];
				var lab = this._availableDataMap[value] && value !== "" ? this._availableDataMap[value] : value;
				if (i > 0) {
					label += this._separator + " ";
				}
				label += lab;
			}
			return label;
		},

		/**
		 * Returns the value.
		 * 
		 * @return An array of the selected values in the selected values sloshBucket.
		 */
		getValue: function() {
			var valueArray = [];
			for ( var i = 0; i < this.selectedValues.length; i++) {
				valueArray.push(this.selectedValues[i]);
			}
			return valueArray;
		},

		/**
		 * @private On initialization of this widget, add all of its selected marking values, assumed to be persisted in
		 *          the repository, to a fixed values list, to be flagged later if the user attempts to remove them.
		 */
		_loadFixedMarkings: function() {
			this._fixedMarkings = {};
			if (this.availableData.markings) {
				for ( var i = 0; i < this.selectedValues.length; i++) {
					if (this.selectedValues[i] && this.selectedValues[i] != "") {
						var value = this.selectedValues[i];
						if (!this.availableData.markings[value].canRemove) {
							this._fixedMarkings[value] = true;
						}
					}
				}
			}
		},

		/**
		 * @private Loads the sloshBucket.
		 */
		_loadSloshBucket: function() {
			var itemsArray = [];
			var valueArray = [];
			for ( var i = 0; i < this.selectedValues.length; i++) {
				if (this.selectedValues[i] != null && this.selectedValues[i] !== "") {
					var value = this.selectedValues[i];
					var label = this._availableDataMap[value] ? this._availableDataMap[value] : value;
					itemsArray.push({
						label: label,
						value: value
					});
					valueArray[value] = label;
				}
			}
			var data = {
				items: itemsArray
			};
			if (!this.allowDuplicateValues) {
				data.identifier = "value";
			}
			var store = new ItemFileWriteStore({
				data: data
			});
			var structure = [
				{
					field: "label",
					name: ecm.messages.selected_heading,
					width: "100%"
				}
			];
			this._sloshBucket.setSelectedValuesGridModel(store, structure, valueArray);
		},

		/**
		 * @private Loads the available values.
		 */
		_loadAvailableValues: function() {
			var store = new ItemFileWriteStore({
				data: {
					items: this._getAvailableItems(this.availableData.choices)
				}
			});
			if (this.isTree) {
				domStyle.set(this._filterDiv, "display", "none");
				var model = new ForestStoreModel({
					store: store,
					rootLabel: this.availableData.displayName,
					childrenAttrs: [
						"children"
					],
					labelAttr: "label"
				});
				this._sloshBucket.setAvailableTreeModel(model);

			} else {
				this._sloshBucket.availableLabel = ""; // no extra label for grid
				domStyle.set(this._filterDiv, "display", "");
				var structure = [
					{
						field: "label",
						name: ecm.messages.available_heading,
						width: "100%"
					}
				];
				this._sloshBucket.setAvailableGridModel(store, structure);
				this._sloshBucket.filter({
					label: "*"
				});
				this.connect(this._filter, "_onInput", "_filterData");
				this.connect(this._filter, "_setValueAttr", "_filterData");
			}
		},

		/**
		 * @private Returns the available items.
		 */
		_getAvailableItems: function(choices) {
			var itemsArray = [];
			if (this.availableData) {
				for ( var i = 0; i < choices.length; i++) {
					var choice = choices[i];
					var label = choice.displayName;
					var value = choice.value;

					var item = {
						label: label
					};
					if (value != null) {
						item.value = value;
						this._availableDataMap[value] = label;
					}
					itemsArray.push(item);

					if (choice.choices) {
						var childrenArray = this._getAvailableItems(choice.choices);
						item.children = childrenArray;
					}
				}
			}
			return itemsArray;
		},

		/**
		 * @private Filters the data.
		 */
		_filterData: function() {
			var value = this._filter.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this._sloshBucket.filter({
					label: "*" + value + "*"
				});
			}
		},

		_validateRemove: function(selection) {
			var validated = true;

			/*
			 *  This code detects when a marking is being removed, that the user does not have permission to remove.
			 */
			if (this.availableData.markings) {
				var selected = selection.getSelected();
				var grid = selection.grid;
				var cantRemoveCount = {};
				var cantRemove = [];
				var cantRemoveValues = "";

				for ( var i in selected) {
					var value = selected[i].value[0];
					if (this._fixedMarkings[value] === true) {
						if (cantRemoveCount[value] == undefined) {
							cantRemoveCount[value] = -1;
							cantRemove.push(value);
						} else {
							--cantRemoveCount[value];
						}
					}
				}

				if (cantRemove.length > 0) {
					for ( var i = 0; i < grid.rowCount; i++) {
						var value = grid.getItem(i).value[0];
						if (cantRemoveCount[value] != undefined) {
							++cantRemoveCount[value];
						}
					}

					for ( var i in cantRemove) {
						if (cantRemoveCount[cantRemove[i]] <= 0) {
							if (cantRemoveValues != "") {
								cantRemoveValues = cantRemoveValues + ", ";
							}
							cantRemoveValues = cantRemoveValues + cantRemove[i];
						}
					}

					if (cantRemoveValues != "") {
						this._displayWarning(lang.replace(ecm.messages.cannot_remove_markings, [
							cantRemoveValues
						]));
						validated = false;
					}
				}
			}

			return validated;
		},

		/**
		 * @private
		 */
		_displayWarning: function(message) {
			var warningMessage = idxHtml.escapeHTML(message);
			this._infoText.innerHTML = warningMessage;
			domAttr.set(this._infoImage, "alt", warningMessage);
			if (message.length > 0) {
				domStyle.set(this._infoPane, "display", "block");
			} else {
				domStyle.set(this._infoPane, "display", "none");
			}

			var dropDownDialog = this.getParent();
			if (dropDownDialog && dropDownDialog.scheduleResize) {
				dropDownDialog.scheduleResize();
			}
		},

		/**
		 * Called when the user clicks the <code>Save</code> or <code>OK</code> button to save the changes. Gets the
		 * selected values from the sloshBucket.
		 */
		onSave: function() {
			var values = [];
			var dataArray = this._sloshBucket.getData(this._sloshBucket.getSelectedValuesGrid());
			for ( var i = 0; i < dataArray.length; i++) {
				var item = dataArray[i];
				if (item.value !== "")
					values.push(item.value);
			}
			this.selectedValues = values;
		},

		/**
		 * Resizes the sloshBucket.
		 * 
		 * @param changeSize
		 *            The changed size. See the {@link ecm.widget.SloshBucket} method <code>resize</code>.
		 */
		resize: function(changeSize) {
			 if (changeSize && changeSize.h && changeSize.h > 0 && domStyle.get(this._filterDiv, "display") != "none") {
				var filterDivMB = domGeom.getMarginBox(this._filterDiv);
				if (filterDivMB && filterDivMB.h && filterDivMB.h > 0) {
					changeSize.h = changeSize.h - filterDivMB.h;
				}
			} 
			this._sloshBucket.resize(changeSize);
		}
	});
});

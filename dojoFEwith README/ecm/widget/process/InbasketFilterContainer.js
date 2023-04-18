/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/keys",
	"dojo/json",
	"dojo/string",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/layout/ContentPane",
	"dijit/Tooltip",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/text!./templates/InbasketFilterContainer.html",
	"ecm/Logger",
	"ecm/Messages",
	"ecm/widget/process/InbasketFiltersPane"
],

function(declare, lang, domStyle, domClass, attr, construct, keys, dojojson, string, Button, DropDownButton, ContentPane, Tooltip, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template, Logger, Messages, InbasketFiltersPane) {

	/**
	 * @name ecm.widget.process.InbasketFilterContainer
	 * @class Provides a widget that is used to display the query filters that are specified on the in-basket content.
	 *        The filters can be used to refine the query for the items that are displayed in the in-basket.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.process.InbasketFilterContainer", [
		ContentPane,
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.process.InbasketFilterContainer.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * An {@link ecm.model.ProcessInbasket} object.
		 */
		inbasket: null,

		/**
		 * An {@link ecm.widget.listView.ContentList} widget folder holding the filtered in-basket work items list.
		 */
		contentList: null,

		/**
		 * An {@link ecm.widget.process.InbasketContainer} widget object that is the parent of this widget.
		 */
		inbasketContainer: null,

		/**
		 * A {@link dijit.form.DropDownButton} for displaying the filter criteria.
		 */
		filterButton: null,

		_messages: ecm.messages,

		postCreate: function() {
			this.inherited(arguments);

			this._renderFilters();
			this.updateFilterSummary();

			if (document.body.dir == "rtl") {
				attr.set(this.filterSummary, "dir", "rtl");
			}
		},

		_renderFilters: function() {
			if (this.inbasket.filterClass) {
				this._setUpFilterPane();

				//this.filterButton._onBlur = function() {
				//};
				domStyle.set(this.filterButton.domNode, "display", "");
				domStyle.set(this.resetButton.domNode, "display", "");

				// create a tooltip for the reset button 
				if (!this._toolTip) {
					this._toolTip = new dijit.Tooltip({
						connectId: [
							this.resetButton.domNode
						],
						label: this._messages.process_filter_reset_tooltip
					});
					this._toolTip.startup();
				}
				this._doButtonConnections();
			} else {
				this.set("disabled", true);

				domStyle.set(this.filterButton.domNode, "display", "none");
				domStyle.set(this.resetButton.domNode, "display", "none");
				domClass.add(this.filterSummary, "noFilterSummary");
			}
		},

		_cleanUpFilterPane: function() {
			if (this._buttonPane) {
				if (this._filterOptions) {
					if (this._filterOptions.containerNode) {
						this._filterOptions.containerNode.removeChild(this._buttonPane);
					}
					if (this._filterOptions.cancelButton) {
						if (this._filterOptions.cancelButton.domNode) {
							this._buttonPane.removeChild(this._filterOptions.cancelButton.domNode);
						}
						this._filterOptions.cancelButton.destroyRecursive();
						this._filterOptions.cancelButton = null;
					}
					if (this._filterOptions.resetButton) {
						if (this._filterOptions.resetButton.domNode) {
							this._buttonPane.removeChild(this._filterOptions.resetButton.domNode);
						}
						this._filterOptions.resetButton.destroyRecursive();
						this._filterOptions.resetButton = null;
					}
					if (this._filterOptions.okButton) {
						if (this._filterOptions.okButton.domNode) {
							this._buttonPane.removeChild(this._filterOptions.okButton.domNode);
						}
						this._filterOptions.okButton.destroyRecursive();
						this._filterOptions.okButton = null;
					}
					this._filterOptions.destroyRecursive();
					this._filterOptions = null;
					this.filterButton.dropDown = null;
				}
				construct.destroy(this._buttonPane);
				this._buttonPane = null;
			}
		},

		_setUpFilterPane: function() {
			this._cleanUpFilterPane();
			this._buttonPane = construct.create("div", {
				'class': 'buttonArea'
			});

			this._filterOptions = new InbasketFiltersPane();
			this._filterOptions.setInbasket(this.inbasket);

			this._filterOptions.cancelButton = new dijit.form.Button({
				label: this._messages.cancel
			});
			this._filterOptions.resetButton = new dijit.form.Button({
				label: this._messages.reset
			});
			this._filterOptions.okButton = new dijit.form.Button({
				label: this._messages.ok
			});

			this._buttonPane.appendChild(this._filterOptions.okButton.domNode);
			this._buttonPane.appendChild(this._filterOptions.resetButton.domNode);
			this._buttonPane.appendChild(this._filterOptions.cancelButton.domNode);
			this._filterOptions.containerNode.appendChild(this._buttonPane);

			this.filterButton.dropDown = this._filterOptions;
		},

		/**
		 * Connect the Filter and Rest buttons to their event handlers.
		 */
		_doButtonConnections: function() {
			this.connect(this._filterOptions.cancelButton, "onClick", function() {
				this.filterButton.closeDropDown();
			});
			this.connect(this._filterOptions.resetButton, "onClick", "_clearFilters");
			this.connect(this._filterOptions.okButton, "onClick", "_executeFilterQuery");

			this.connect(this.resetButton, "onClick", function() {
				this._clearFilters();
				this._executeFilterQuery();
			});

			this.connect(this.filterButton, "onClick", function() {
				var properties = this._filterOptions.commonProperties;
				if (properties && properties.getFields()[0]) {
					properties.setFieldFocus(properties.getFields()[0].name);
				}
			});

			this.connect(this._filterOptions, "onKeyPress", "_onEnterKey");

			// For some reason the enter key is not propagating up to the filterOptions pane.
			this.connect(this._filterOptions.commonProperties, "_onKey", "_onEnterKey");
		},

		_clearFilters: function() {
			if (this._filterOptions) {
				var attributes = this._filterOptions.attributes;
				for ( var i in attributes) {
					var defaultValue = attributes[i].defaultValue;
					if (!defaultValue)
						defaultValue = "";
					if (this._filterOptions.commonProperties) {
						if (attributes[i].getChoiceList() == null) {
							this._filterOptions.commonProperties.setPropertyValue(attributes[i].id, defaultValue);
						} else {
							// Fixes Reset problem with fields that have choice lists (will be from EDS integration).
							this._filterOptions.commonProperties.setPropertyDisplayedValue(attributes[i].id, defaultValue);
						}
					}
				}
				this._filterOptions.onChangeProperties();
			}
		},

		_executeFilterQuery: function() {
			var invalidField = this._filterOptions.commonProperties.validateAll(false, true, true);
			if (invalidField == null) {
				var filterValues = this.getFilterValues();
				this.inbasketContainer.refresh(filterValues);
				this.filterButton.closeDropDown();
				this.updateFilterSummary();
				this.resize();
			}
		},

		/**
		 * Returns an array of filter criteria value objects.
		 * 
		 * @returns {Object} An array of filter values.
		 */
		getFilterValues: function() {
			var filterCriteria = {};
			if (this._filterOptions) {
				var attributes = this._filterOptions.attributes;
				filterCriteria.filters = [];
				for ( var i in attributes) {
					var name = attributes[i].id;
					if (this._filterOptions.commonProperties) {
						for ( var j in this._filterOptions.commonProperties.getFields()) {
							var field = this._filterOptions.commonProperties.getFields()[j];
							if (field.get("name") == name) {
								var value = field.getValue();
								if (value !== null && value !== "") {
									// Getting the field values from common properties should do this conversion
									//if (attributes[i].getDataType() == "xs:timestamp") {
									//	if (typeof value != "string")
									//		value = dojo.date.stamp.toISOString(value);
									//}
									var criteria = {
										"name": name,
										"value": value,
										"type": attributes[i].dataType,
										"field": (attributes[i].field) ? attributes[i].field : ""
									};
									filterCriteria.filters.push(criteria);
								}
								break;
							}
						}
					}
				}
			}
			this.inbasket.filterValues = dojojson.stringify(filterCriteria);
			return this.inbasket.filterValues;
		},

		resize: function() {
		},

		_getSummaryText: function() {
			var num = this.getFiltersApplied();
			var message = num > 0 ? string.substitute(this._messages.process_filter_summary, [
				num
			]) : this._messages.process_no_filter_summary;
			return message;
		},

		/**
		 * Updates the filter summary text with the number of filters applied (if any).
		 */
		updateFilterSummary: function() {
			this.filterSummary.innerHTML = this._getSummaryText();
		},

		/**
		 * Returns an integer value indicating the number of filter criteria that are currently in effect.
		 * 
		 * @returns {Integer} holding number of filters that have been applied.
		 */
		getFiltersApplied: function() {
			this._filtersApplied = 0;
			if (this._filterOptions) {
				var attributes = this._filterOptions.attributes;
				for ( var i in attributes) {
					var name = attributes[i].id;
					for ( var j in this._filterOptions.commonProperties.getFields()) {
						var field = this._filterOptions.commonProperties.getFields()[j];
						if (field.get("name") == name) {
							var value = field.getValue();
							if (value != null && value !== "") {
								this._filtersApplied++;
							}
							break;
						}
					}
				}
			}
			return this._filtersApplied;
		},

		/**
		 * Method for handling Enter key to invoke the filter.
		 */
		_onEnterKey: function(evt) {
			if (evt.keyCode == keys.ENTER && !evt.shiftKey && !this._filterOptions.okButton.get("disabled")) {
				var w = dijit.getEnclosingWidget(evt.target);
				if (w && w.onBlur) {
					w.onBlur();
				}
				this._executeFilterQuery();
			}
		},

		destroy: function() {
			if (this._toolTip) {
				this._toolTip.destroyRecursive();
				this._toolTip = null;
			}
			this._cleanUpFilterPane();
			if (this.filterButton) {
				// this._filterOptions is the filterButton.dropDown 
				this.filterButton.dropDown = null;
				this.filterButton.destroyRecursive();
				this.filterButton = null;
			}
			// These are references.
			this.contentList = null;
			this.inbasket = null;
			this.inbasketContainer = null;
			this.inherited(arguments);
		}
	});
});

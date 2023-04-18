/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"ecm/model/Desktop",
	"ecm/model/ValueFormatter",
	"gridx/modules/filter/FilterBar"
], function(declare, has, array, Desktop, ValueFormatter, FilterBar) {

	/**
	 * @name ecm.widget.listView.gridModules.FilterBar
	 * @class This module overrides gridx FilterBar using dojo locale to parse and format dates.
	 * @augments gridx.modules.filter.FilterBar
	 * @private
	 * @since 2.0.2
	 */

	return declare(FilterBar, {
		/** @lends ecm.widget.listView.gridModules.FilterBar.prototype */

		/**
		 * Shows the filter dialog and updates the locale in the date and time input.
		 * @private 
		 */
		showFilterDialog: function() {
			this.inherited(arguments);
			var filterPanes = this._filterDialog._accordionContainer.getChildren();
			if (filterPanes && filterPanes.length > 0) {
				for ( var i = 0; i < filterPanes.length; i++) {
					this._setFilterPaneLocale(filterPanes[i]);
				}
			}
			this.connect(this._filterDialog._accordionContainer, "addChild", "_setFilterPaneLocale");
		},

		/**
		 * @private Updates the date and time text input to use the value formatter locale.
		 */
		_setFilterPaneLocale: function(filterPane) {
			var locale = ecm.model.desktop.valueFormatter.getLocale();
			filterPane.dtbSingle.constraints.locale = locale;
			filterPane.dtbStart.constraints.locale = locale;
			filterPane.dtbEnd.constraints.locale = locale;
			filterPane.ttbSingle.constraints.locale = locale;
			filterPane.ttbStart.constraints.locale = locale;
			filterPane.ttbEnd.constraints.locale = locale;
			filterPane.comboText.textDir = has("text-direction");
		},

		/**
		 * Overrides _stringToDate in gridx FilterBar to use dojo locale. Used to format the grid date column data.
		 * @private 
		 */
		_stringToDate: function(s) {
			var date = ecm.model.desktop.valueFormatter.parseDate(s, {
				formatLength: "short",
				fullYear: true
			});
			if (date) {
				return date.getTime();
			} else {
				return null;
			}
		},

		/**
		 * Overrides _formatDate in gridx FilterBar to use dojo locale. Used to format the selected date from the filter dialog.
		 * @private 
		 */
		_formatDate: function(date) {
			var format = ecm.model.desktop.valueFormatter.formatDate(date, {
				selector: "date",
				formatLength: "short",
				fullYear: true
			});
			return format;
		},
		
		/**
		 * Overrides _getColumnConditions to remove not operands for "any column".
		 * @private 
		 */
		_getColumnConditions: function(colId) {
			var disabled, type;
			if (!colId){ //any column
				disabled = [ 'notEqual', 'notContain', 'notStartWith', 'notEndWith' ]; // any column and not conditions don't operate as the user would assume
				type = 'string';
			}else{
				disabled = this.grid._columnsById[colId].disabledConditions || [];
				type = (this.grid._columnsById[colId].dataType || 'string').toLowerCase();
			}
			var ret = this.conditions[type], hash = {};
			if(!ret){
				ret = this.conditions.string;
			}
			array.forEach(disabled, function(name){hash[name] = true;});
			ret = array.filter(ret, function(name){return !hash[name];});
			return ret; 
		}
	});
});

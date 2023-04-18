/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../_OptionsLinkMixin",
	"../DropDownLink",
	"../DropDownDialog",
	"./_MatchOption",
	"dojo/text!./templates/SearchPropertyOptions.html"
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, _OptionsLinkMixin, DropDownLink, DropDownDialog, _MatchOption, template) {

	/**
	 * @name ecm.widget.search.SearchPropertyOptions
	 * @class Provides a widget that contains property search criteria in a drop-down dialog box. The dialog box can be
	 *        defined to return results that match all conditions or any condition.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.SearchPropertyOptions", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_OptionsLinkMixin
	], {
		/** @lends ecm.widget.search.SearchPropertyOptions.prototype */
		templateString: template,

		/**
		 * Label of the widget.
		 */
		label: ecm.messages.search_property_options,

		/**
		 * Initializes the widget.
		 */
		initialize: function() {
			if (this._matchAll === undefined) {
				this._matchAll = true;
			}
			if (this._matchAll != this._matchOption.isMatchAllChecked()) {
				this._matchOption.setMatchAllChecked(this._matchAll);
			}
		},

		/**
		 * Saves all options.
		 */
		saveOptions: function() {
			this._matchAll = this._matchOption.isMatchAllChecked();
			this.inherited(arguments);
		},

		/**
		 * Restores all options.
		 */
		restoreOptions: function() {
			this._matchOption.setMatchAllChecked(this._matchAll);
			this.inherited(arguments);
		},

		/**
		 * Gets all selected options.
		 *
		 * @return An object that contains options as parameters.
		 */
		getSelectedOptions: function() {
			var options = {};
			if (!this._getDisabledAttr()) {
				options.matchAll = this._matchOption.isMatchAllChecked();
			}
			return options;
		},
		/**
		 * Sets all selected options.
		 *
		 * @param options
		 *            An object that contains options as parameters.
		 */
		setSelectedOptions: function(options) {
			if (!options) {
				return;
			}
			if (!this._getDisabledAttr() && "matchAll" in options) {
				this._matchAll = options.matchAll;
				this._matchOption.setMatchAllChecked(this._matchAll);
			}
			this.inherited(arguments);
		}
	});

});

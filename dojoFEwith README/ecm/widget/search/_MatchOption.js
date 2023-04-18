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
	"dijit/form/RadioButton",
	"../../LoggerMixin",
	"dojo/text!./templates/_MatchOption.html"
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, RadioButton, LoggerMixin, template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchPropertyOptions} widget
	 * @name ecm.widget.search._MatchOption
	 * @class Provides an option to match all or any of the search criteria defined in a search.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._MatchOption", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.search._MatchOption.prototype */
		templateString: template,

		constructor: function() {
			this._messages = ecm.messages;
		},

		isMatchAllChecked: function() {
			return this._matchAllRadioButton.get("checked");
		},

		setMatchAllChecked: function(/* Boolean */checked) {
			if (checked) {
				this._matchAllRadioButton.set("checked", true);
			} else {
				this._matchAnyRadioButton.set("checked", true);
			}
		},

		getSummary: function() {
			return this.isMatchAllChecked() ? this._messages.search_property_option_match_all_summary : this._messages.search_property_option_match_any_summary;
		}
	});

});

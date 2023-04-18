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
	"dojo/text!./templates/_PropertyTextOption.html"
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, RadioButton, LoggerMixin, template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._PropertyTextOption
	 * @class Provides an option to return items that meet both property and text based search criteria, or either property or text based search criteria.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._PropertyTextOption", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.search._PropertyTextOption.prototype */
		templateString: template,

		constructor: function() {
			this._messages = ecm.messages;
		},

		isAnded: function() {
			return this._andedRadioButton.get("checked");
		},

		setAnded: function(anded) {
			if (anded) {
				this._andedRadioButton.set("checked", true);
			} else {
				this._oredRadioButton.set("checked", true);
			}
		},

		getSummary: function() {
			return this.isAnded() ? this._messages.search_property_and_text : this._messages.search_property_or_text;
		}
	});

});

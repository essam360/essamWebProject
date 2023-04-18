/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/LoggerMixin",
	"ecm/widget/search/_SearchSelectOption"
], function(array, declare, lang, LoggerMixin, _SearchSelectOption) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._ContentSizeOption
	 * @class Provides a widget used for filtering Box search results by content size.
	 * @augments ecm.widget.search._SearchSelectOption
	 */
	return declare("ecm.widget.search._ContentSizeOption", [
		_SearchSelectOption
	], {
		/** @lends ecm.widget.search._ContentSizeOption.prototype */
		OPTIONS: [
			{
				label: ecm.messages.search_content_size_filter_any,
				value: ""
			},
			{
				label: "0 - 1 MB",
				value: "0,1000000"
			},
			{
				label: "1 - 5 MB",
				value: "1000000,5000000"
			},
			{
				label: "5 - 25 MB",
				value: "5000000,25000000"
			},
			{
				label: "25 - 100 MB",
				value: "25000000,100000000"
			},
			{
				label: "100 MB - 1 GB",
				value: "100000000,1000000000"
			}
		],

		constructor: function() {
			this._cache = {};
			this._labels = array.map(this.OPTIONS, function(opt) {
				return opt.label;
			});
		},

		postCreate: function() {
			this.inherited(arguments);
			this._select.addOption(this.OPTIONS);
		}
	});

});

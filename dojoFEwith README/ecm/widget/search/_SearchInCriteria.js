/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/string",
	"dijit/_WidgetBase",
	"../../LoggerMixin"
], function(declare, string, _WidgetBase, LoggerMixin) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchInCriteria} widget
	 * @name ecm.widget.search._SearchInCriteria
	 * @class Provides a function to summarize search-in criteria
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._SearchInCriteria", [
		_WidgetBase
	], {
		/** @lends ecm.widget.search._SearchInCriteria.prototype */
		constructor: function() {
			this._messages = ecm.messages;
		},

		getSummary: function() {
			if (!this._searchInCriteria._data)
				return "";

			var summary = "";
			var items = this._searchInCriteria._data.items;
			for ( var i = 0; i < items.length; i++) {
				var searchIn = items[i].folderName == this._messages.all ? items[i].repository : items[i].folderName;
				if (i < (items.length - 1))
					summary += string.substitute(this._messages.append_comma, [
						searchIn
					]);
				else
					summary += searchIn;
			}

			return summary;
		}
	});

});

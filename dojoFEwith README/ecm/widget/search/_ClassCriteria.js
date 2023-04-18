/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/string",
	"dijit/_Widget",
	"../../LoggerMixin"
], function(declare, string, _Widget, LoggerMixin) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchTab} widget
	 * @name ecm.widget.search._ClassCriteria
	 * @class Provides a widget that is used to display the item class on which a saved search is defined to search. For a saved search that was defined in IBM FileNet® Workplace XT to support searching multiple item classes, this widget includes a link to open a drop-down list of the item classes from which users can select.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.search._ClassCriteria", [
		dijit._Widget
	], {
		/** @lends ecm.widget.search._ClassCriteria.prototype */
		constructor: function() {
			this._messages = ecm.messages;
		},

		getSummary: function() {
			if (!this._classCriteria._selectedClasses || this._classCriteria._selectedClasses.length < 1)
				return "";

			var summary = "";
			var items = this._classCriteria._selectedClasses;
			for ( var i = 0; i < items.length; i++) {
				var className = items[i].className;
				if (items[i].searchSubclasses)
					className = string.substitute(this._messages.search_class_including_subclasses, [
						className
					]);
				if (i < (items.length - 1))
					summary += string.substitute(this._messages.append_comma, [
						className
					]);
				else
					summary += className;
			}

			return summary;
		}
	});

});

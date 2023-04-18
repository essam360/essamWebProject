/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare"
], function(declare) {

	/**
	 * @name ecm.widget.openedSearchesMixin
	 * @class Provides methods that are used to track open search templates.
	 * @public
	 */
	return declare("ecm.model.openedSearchesMixin", null, {
		/** @lends ecm.model.openedSearchesMixin.prototype */

		getOpenedSearches: function() {
			if (!this.openedSearches)
				return {};
			else
				return this.openedSearches;
		},

		addOpenedSearch: function(searchTemplate) {
			if (!searchTemplate)
				return;
			if (!this.openedSearches)
				this.openedSearches = {};
			if (!this.openedSearches[searchTemplate.UUID]) {
				this.openedSearches[searchTemplate.UUID] = searchTemplate;
				this.onOpenedSearchesUpdated(searchTemplate);
			}
		},

		removeOpenedSearch: function(searchTemplate) {
			if (!searchTemplate || !this.openedSearches)
				return;
			if (this.openedSearches[searchTemplate.UUID]) {
				delete this.openedSearches[searchTemplate.UUID];
				this.onOpenedSearchesUpdated(searchTemplate);
			}
		},

		isSearchOpened: function(searchTemplate) {
			var opened = false;
			if (searchTemplate && this.openedSearches) {
				for ( var i in this.openedSearches) {
					if (searchTemplate.equals(this.openedSearches[i])) {
						opened = true;
						break;
					}
				}
			}
			return opened;
		},

		onOpenedSearchesUpdated: function(searchTemplate) {
		}
	});
});

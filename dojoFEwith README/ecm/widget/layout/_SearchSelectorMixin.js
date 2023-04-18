/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../../LoggerMixin",
	"../search/SearchSelector"
],

function(declare, LoggerMixin, SearchSelector) {

	/**
	 * @name ecm.widget.layout._SearchSelectorMixin
	 * @class Class used to augment a LaunchBarPane that contains an {@link ecm.widget.SearchSelector}. The
	 *        LaunchBarPane must have an instance of {@link ecm.widget.SearchSelector}.
	 * @augments ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._SearchSelectorMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._SearchSelectorMixin.prototype */

		_searchSelectorHandles: null,

		_destroySearchSelector: function() {
			this.logEntry("_destroySearchSelector");

			if (this.searchSelector) {
				this.searchSelector.destroy();
				this.searchSelector = null;
			}

			this.logExit("_destroySearchSelector");
		},

		/**
		 * Creates a new search selector.
		 */
		_createSearchSelector: function(showOpenedSearches) {
			this.logEntry("_createSearchSelector");

			this._destroySearchSelector();

			if (this.repository.getPrivilege("search")) {
				this.searchSelector = new SearchSelector({
					showOpenedSearches: showOpenedSearches
				});
				this.searchSelector.startup();
				this.searchSelector.setRepository(this.repository);

				this.searchSelector.addToActionParameterMap("widget", this);
			}

			this.logExit("_createSearchSelector");
		}
	});
});

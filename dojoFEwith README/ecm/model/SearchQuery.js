/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/json",
	"dojo/_base/lang",
	"ecm/model/Item",
	"ecm/model/_SearchMixin",
	"ecm/model/_searchUtils",
	"ecm/model/ContentItem"
], function(declare, json, lang, Item, _SearchMixin, utils, ContentItem) {

	/**
	 * Constructs a search query.
	 * 
	 * @name ecm.model.SearchQuery
	 * @class Provides search functionality via a query string that conforms to the query language specifications of the
	 *        underlying repository.
	 *        <p>
	 *        Usage (FileNet P8 query shown):
	 *        <p>
	 *        var searchQuery = new SearchQuery({<br>
	 *            "repository": repository,<br>
	 *            "query": "SELECT ClassDescription, ID, DocumentTitle, ContentSize, LastModifier FROM Document ORDER BY LastModifier",<br>
	 *            "resultsDisplay": {<br>
	 *                "columns": [ "DocumentTitle", "ContentSize", "LastModifier" ],<br>
	 *                "sortBy": "LastModifier",<br>
	 *                "sortAsc": true,<br>
	 *                "honorNameProperty": true
	 *            }<br>
	 *        });<br>
	 *        searchQuery.search(function(response){<br>
	 *            console.log("response", response);<br>
	 *        });
	 *        </p>
	 * @augments ecm.model._Item
	 * @since 2.0.3
	 */
	return declare("ecm.model.SearchQuery", [
		Item,
		_SearchMixin
	], {
		/** @lends ecm.model.SearchQuery.prototype */

		/**
		 * A query string that conforms to the query language specifications of the underlying repository.
		 * When searching in a FileNet P8 repository, the query's SELECT clause must at least include the
		 * ClassDescription, ID, and any other properties specified in the <code>resultsDisplay</code>
		 * (see {@link ecm.model._SearchMixin#resultsDisplay}).
		 */
		query: null,

		/**
		 * Specifies whether to retrieve the latest versions of the items via CM retrieval options, which is more
		 * efficient than the query alternative, i.e., "@VERSIONID = latest-version(.)" (CM only).
		 */
		retrieveLatestVersion: false,

		/**
		 * Specifies whether to retrieve the latest and non-latest versions of the items (CMIS only).
		 */
		retrieveAllVersions: false,

		/**
		 * The number of items to display per page in the search results (FileNet P8 only). If the specified value is
		 * less than 0, then 200 items per page are displayed by default. If the specified value is 0, then the maximum
		 * number of items retrieved is limited only by the query or the repository, and all items found are displayed
		 * on one page.<br>
		 * <br>
		 * Important: If you display the search results in a content list, small page sizes (typically less than 50) are
		 * not recommended because additional requests might be sent to fill the content list. For example, if the
		 * content list displays 10 rows, and you set the page size to 6, the first 6 items returned by the search are
		 * displayed, but to fill the content list, an additional query attempts to retrieve 4 more items.
		 * 
		 * @since 2.0.3.3
		 */
		pageSize: -1,

		/**
		 * Runs the search.
		 * 
		 * @param callback
		 *            A function called with a {@ecm.model.ResultSet} object when the search has completed running
		 * @param sortProperty
		 *            The ID of the attribute to sort by (mainly used by content lists to resort the results)
		 * @param descending
		 *            Specifies whether to sort the results in descending order (mainly used by content lists to resort
		 *            the results)
		 * @param teamspace
		 *            Not supported
		 * @param errorCallback
		 *            A function called with the response object when the search fails
		 */
		search: function(callback, sortProperty, descending, teamspace, errorCallback) {
			if (!this.repository || this.repository._isOnDemand())
				return;

			return ecm.model.Request.postService("search", this.repository.type, {
				repositoryId: this.repository.id,
				order_by: sortProperty,
				order_descending: descending
			}, "text/json", this._toJson(), lang.hitch(this, function(response) {
				response.repository = this.repository;
				response.parentFolder = this;
				response.searchTemplate = this;

				var results = ContentItem.createResultSet(response);
				results._versionLookup = this._getVersionLookup();
				if (lang.isFunction(callback))
					callback(results);

				this.onSearchCompleted(results);
			}), false, false, false, function(response) {
				if (response.errors && lang.isFunction(errorCallback))
					errorCallback(response);
			});
		},

		_getVersionLookup: function() {
			var versionLookup = {};
			if (this.query) {
				if (this.repository._isCM()) {
					versionLookup[this.repository.id] = this.retrieveLatestVersion || this.query.match(/@VERSIONID\s*=\s*latest-version\(\.\)/) ? "currentversion" : "allversions";
				} else if (this.repository._isCmis()) {
					versionLookup[this.repository.id] = this.retrieveAllVersions ? "allversions" : "currentversion";
				} else if (this.repository._isP8()) {
					if (this.query.match(/\s+VersionStatus\s*=\s*1($|\s)/))
						versionLookup[this.repository.id] = "releasedversion";
					else if (this.query.match(/\s+IsCurrentVersion\s*=\s*[tT][rR][uU][eE]($|\s)/))
						versionLookup[this.repository.id] = "currentversion";
					else
						versionLookup[this.repository.id] = "allversions";
				}
			}

			return versionLookup;
		},

		_toJson: function() {
			return this.query ? json.toJson({
				query: this.query,
				resultsDisplay: this.resultsDisplay,
				retrieveLatestVersion: this.retrieveLatestVersion,
				retrieveAllVersions: this.retrieveAllVersions,
				pageSize: this.pageSize >= 0 ? this.pageSize : -1
			}) : {};
		}
	});
});

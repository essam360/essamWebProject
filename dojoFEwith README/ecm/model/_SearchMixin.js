/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare"
], function(declare) {

	/**
	 * @name ecm.model._SearchMixin
	 * @class An interface for models that provide search functionality.
	 * @public
	 * @since 2.0.3
	 */
	return declare("ecm.model._SearchMixin", null, {
		/** @lends ecm.model._SearchMixin.prototype */

		/**
		 * An object holding the display settings for search results. Available options:
		 * <p>
		 * sortBy: The ID of the property to sort by
		 * sortAsc: A Boolean indicating whether to sort search results in ascending order
		 * columns: An array of property identifiers representing the search result columns
		 * magazineColumns: An array of property identifiers representing the search result columns displayed in the magazine view
		 * honorNameProperty: A Boolean indicating whether to honor the label of the repository's designated name property (typically
		 *                    Document Title in FileNet P8) by showing it as-is on the column header or as the pseudo "Name" property
		 * showContentSummary: A Boolean indicating whether to enable content summaries in the magazine view (FileNet P8 text searches only)
		 * </p>
		 */
		resultsDisplay: null,

		/**
		 * Runs the search.
		 * 
		 * @param callback
		 *            A function called with a {@ecm.model.ResultSet} object when the search has completed running
		 * @param sortProperty
		 *            The ID of the attribute to sort by
		 * @param descending
		 *            Specifies whether to sort the results in descending order
		 * @param teamspace
		 *            An optional {@link ecm.model.Teamspace} object
		 * @param errorCallback
		 *            A function called with the response object when the search fails
		 */
		search: function(callback, sortProperty, descending, teamspace, errorCallback) {
			// to be implemented by concrete models
		},

		/**
		 * Event fired when the search has completed running.
		 * 
		 * @param results
		 *            A {@link ecm.model.ResultSet} object
		 */
		onSearchCompleted: function(results) {
		}
	});
});

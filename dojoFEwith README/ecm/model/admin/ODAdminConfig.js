/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./AdminConfig"
], function(declare, AdminConfig) {

	/*
	 * Notes from doc review:
	 * [Lider Pan] In Navigator R2, we change to use hard coded settings. Each type of server will has its own settings class. 
	 *  
	 */

	/**
	 * @name ecm.model.admin.ODAdminConfig
	 * @class Represents an OD admin configuration object.
	 * @augments ecm.model.admin.AdminConfig
	 * @private
	 */
	return declare("ecm.model.admin.ODAdminConfig", [
		AdminConfig
	], {
		/** @lends ecm.model.admin.ODAdminConfig.prototype */

		constructor: function() {
			this.logDebug("ODAdminConfig constructor");
		},

		getFolderDefFixedCols: function() {
			return [];
		},

		getSearchResultDefFixedCols: function() {
			return [];
		},

		getAvailableOperators: function() {
			return [];
		},

		getSearchFilteredOperators: function(type) {
			switch (type) {
			case "datetimeOp":
				return [];
			case "integerOp":
				return [];
			case "floatOp":
				return [];
			case "stringOp":
				return [];
			default:
				return [];
			}
		},

		getSearchMaxResults: function() {
			return 5000;
		},

		getTimeoutInSeconds: function() {
			return 180;
		},

		getNumberOfSearchesToDisplay: function() {
			return 100;
		},

		getDocumentSystemProperties: function() {
			return [];
		},

		getFolderSystemProperties: function() {
			return [];
		},

		_noOp: null
	});
});

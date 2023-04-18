/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../../LoggerMixin"
], function(declare, LoggerMixin) {

	/*
	 * Notes from doc review:
	 * [Lider Pan] In Navigator R2, we change to use hard coded settings. Each type of server will has its own settings class.  
	 */

	/**
	 * @name ecm.model.admin.AdminConfig
	 * @class Represents an admin configuration object.
	 * @augments ecm.LoggerMixin
	 * @private
	 */
	var AdminConfig = declare("ecm.model.admin.AdminConfig", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.AdminConfig.prototype */

		FOLDER_DEFAULT_FIXED_COLS: "folderDefFixedCols",
		DOCUMENT_SYSTEM_PROPERTIES: "documentSystemProperties",
		FOLDER_SYSTEM_PROPERTIES: "folderSystemProperties",
		OPERATORS: "operators",
		SEARCH_MAX_RESULTS: "searchMaxResults",
		TIMEOUT_IN_SECONDS: "timeoutInSeconds",
		NUMBER_OF_SEARCHES_TO_DISPLAY: "numberOfSearchesToDisplay",

		// constant definition
		OPERATOR_DATETIME: "datetimeOp",
		OPERATOR_INTEGER: "integerOp",
		OPERATOR_FLOAT: "floatOp",
		OPERATOR_STRING: "stringOp",
		OPERATOR_BOOLEAN: "booleanOp",
		OPERATOR_OBJECT: "objectOp",
		OPERATOR_ID: "idOp",
		OPERATOR_USER: "userOp",

		constructor: function(id) {
			this.logDebug("construct " + id + " AdminConfig");
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an admin config object.
	 * 
	 * @param type
	 *            server type.
	 * @memberof ecm.model.admin.AdminConfig
	 */
	AdminConfig.createAdminConfig = function(type) {
		switch (type.toUpperCase()) {
		case "P8":
			dojo["require"]("ecm.model.admin.P8AdminConfig");
			return new ecm.model.admin.P8AdminConfig();
		case "CM":
			dojo["require"]("ecm.model.admin.CMAdminConfig");
			return new ecm.model.admin.CMAdminConfig();
		case "CMIS":
			dojo["require"]("ecm.model.admin.CMISAdminConfig");
			return new ecm.model.admin.CMISAdminConfig();
		case "OD":
			dojo["require"]("ecm.model.admin.ODAdminConfig");
			return new ecm.model.admin.ODAdminConfig();
		default:
			return null;
		}
	};

	// name property.
	AdminConfig.PSEUDO_NAME = "{NAME}";

	return AdminConfig;
});

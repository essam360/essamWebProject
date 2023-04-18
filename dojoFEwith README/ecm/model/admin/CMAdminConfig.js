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
	 * @name ecm.model.admin.CMAdminConfig
	 * @class Represents an CM admin configuration object.
	 * @augments ecm.model.admin.AdminConfig
	 * @private
	 */
	return declare("ecm.model.admin.CMAdminConfig", [
		AdminConfig
	], {
		/** @lends ecm.model.admin.CMAdminConfig.prototype */

		constructor: function() {
			this.logDebug("CMAdminConfig constructor");
		},

		getNameFieldPlaceholder: function() {
			return "{NAME}";
		},

		getFolderDefFixedCols: function() {
			return [
				"{NAME}"
			];
		},

		getSearchResultDefFixedCols: function() {
			return [
				"{NAME}"
			];
		},

		getAvailableOperators: function() {
			return [
				"datetimeOp",
				"integerOp",
				"floatOp",
				"stringOp"
			];
		},

		getSearchFilteredOperators: function(type) {
			switch (type) {
			case "datetimeOp":
				return [
					"EQ",
					"!EQ",
					"LT",
					"LE",
					"GT",
					"GE",
					"BT",
					"!BT",
					"IA",
					"!IN",
					"NL",
					"!NL"
				];
			case "integerOp":
				return [
					"EQ",
					"!EQ",
					"LT",
					"LE",
					"GT",
					"GE",
					"BT",
					"!BT",
					"IA",
					"!IN",
					"NL",
					"!NL"
				];
			case "floatOp":
				return [
					"EQ",
					"!EQ",
					"LT",
					"LE",
					"GT",
					"GE",
					"BT",
					"!BT",
					"IA",
					"!IN",
					"NL",
					"!NL"
				];
			case "stringOp":
				return [
					"CT",
					"SW",
					"EW",
					"LK",
					"!LK",
					"EQ",
					"!EQ",
					"LT",
					"LE",
					"GT",
					"GE",
					"BT",
					"!BT",
					"IA",
					"!IN",
					"NL",
					"!NL"

				];
			default:
				return [];
			}
		},

		getSearchMaxResults: function() {
			return 5000;
		},

		getTimeoutInSeconds: function() {
			return 60;
		},

		getNumberOfSearchesToDisplay: function() {
			return 100;
		},

		getDocumentSystemProperties: function() {
			return [
				"itemID",
				"createdTimestamp",
				"createdBy",
				"modifiedTimestamp",
				"modifiedBy",
				"icn_sys_version"
			];
		},

		getFolderSystemProperties: function() {
			return [
				"itemID",
				"createdTimestamp",
				"createdBy",
				"modifiedTimestamp",
				"modifiedBy",
				"icn_sys_version"
			];
		},

		_noOp: null

	});
});

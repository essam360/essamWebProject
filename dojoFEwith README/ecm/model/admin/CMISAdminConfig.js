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
	 * @name ecm.model.admin.CMISAdminConfig
	 * @class Represents an CMIS admin configuration object.
	 * @augments ecm.model.admin.AdminConfig
	 * @private
	 */
	return declare("ecm.model.admin.CMISAdminConfig", [
		AdminConfig
	], {
		/** @lends ecm.model.admin.CMISAdminConfig.prototype */

		constructor: function() {
			this.logDebug("CMISAdminConfig constructor");
		},

		getNameFieldPlaceholder: function() {
			return "cmis:name";
		},

		getFolderDefFixedCols: function() {
			return [
				"cmis:name"
			];
		},

		getSearchResultDefFixedCols: function() {
			return [
				"cmis:name"
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
			return 180;
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
				"version"
			];
		},

		getFolderSystemProperties: function() {
			return [
				"itemID",
				"createdTimestamp",
				"createdBy",
				"modifiedTimestamp",
				"modifiedBy",
				"version"
			];
		},

		_noOp: null
	});
});

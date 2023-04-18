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
	 * @name ecm.model.admin.P8AdminConfig
	 * @class Represents an P8 admin configuration object.
	 * @augments ecm.model.admin.AdminConfig
	 * @private
	 */
	return declare("ecm.model.admin.P8AdminConfig", [
		AdminConfig
	], {
		/** @lends ecm.model.admin.P8AdminConfig.prototype */

		constructor: function() {
			this.logDebug("P8AdminConfig constructor");
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
				"idOp",
				"datetimeOp",
				"integerOp",
				"floatOp",
				"stringOp",
				"booleanOp",
				"objectOp"
			];
		},

		getSearchFilteredOperators: function(type) {
			switch (type) {
			case "idOp":
				return [
					"EQ",
					"!EQ",
					"IA",
					"IN",
					"!IN",
					"NL",
					"!NL"
				];
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
					"IN",
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
					"IN",
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
					"IN",
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
					"IA",
					"IN",
					"!IN",
					"NL",
					"!NL"
				];
			case "booleanOp":
				return [
					"EQ",
					"!EQ",
					"IA",
					"IN",
					"!IN",
					"NL",
					"!NL"
				];
			case "objectOp":
				return [
					"EQ",
					"!EQ",
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
				"Creator",
				"DateCreated",
				"LastModifier",
				"DateLastModified",
				"Id",
				"IsReserved",
				"IsCurrentVersion",
				"MajorVersionNumber",
				"MinorVersionNumber",
				"ContentSize",
				"MimeType"
			];
		},

		getFolderSystemProperties: function() {
			return [
				"Creator",
				"DateCreated",
				"Id",
				"PathName"
			];
		},

		_noOp: null

	});
});

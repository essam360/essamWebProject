/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./ViewOneConfig",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"../../LoggerMixin"
], function(declare, lang, array, ViewOneConfig, Desktop, Request, LoggerMixin) {

	/**
	 * @name ecm.model.admin.ViewOneData
	 * @class Represents the admin settings configuration objects needed to edit Daeja ViewOne data.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var ViewOneData = declare("ecm.model.admin.ViewOneData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.ViewOneData.prototype */

		/**
		 * A {@link ecm.model.admin.ViewOneConfig} object.
		 */
		viewOneConfig: null,
		/**
		 * A object holding the common used parameters such as application. More parameters can be added later.
		 */
		default_params: {
			application: "navigator"
		},

		/**
		 * Constructor.
		 */
		constructor: function() {
			this.logDebug("construct ViewOneData");
		},

		/**
		 * Loads the viewOne server data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.viewOneConfig = ViewOneConfig.createViewOneConfig("default");
			this.viewOneConfig.getConfig(callback);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			this.viewOneConfig.updateConfig(callback);
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an viewOne data object.
	 * 
	 * @memberof ecm.model.admin.ViewOneData
	 */
	ViewOneData.createViewOneData = function() {
		return new ViewOneData();
	};
	return ViewOneData;
});

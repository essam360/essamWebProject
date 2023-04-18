/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./FilenetConfig",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"../../LoggerMixin"
], function(declare, lang, array, FilenetConfig, Desktop, Request, LoggerMixin) {

	/**
	 * @name ecm.model.admin.FilenetData
	 * @class Represents the admin settings configuration objects needed to edit Filenet data.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var FilenetData = declare("ecm.model.admin.FilenetData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.FilenetData.prototype */

		/**
		 * A {@link ecm.model.admin.FilenetConfig} object.
		 */
		filenetConfig: null,
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
			this.logDebug("construct FilenetData");
		},

		/**
		 * Loads the Filenet server data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.filenetConfig = FilenetConfig.createFilenetConfig("default");
			this.filenetConfig.getConfig(callback);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier.
		 */
		save: function(callback) {
			this.filenetConfig.updateConfig(callback);
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an Filenet data object.
	 * 
	 * @param type
	 *            server type.
	 * @memberof ecm.model.admin.FilenetData
	 */
	FilenetData.createFilenetData = function() {
		return new FilenetData();
	};
	return FilenetData;
});

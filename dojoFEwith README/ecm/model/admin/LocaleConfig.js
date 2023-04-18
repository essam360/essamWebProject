/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ConfigurationObject"
], function(declare, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.LocaleConfig
	 * @class Represents the configuration information for a locale.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @private
	 */
	var LocaleConfig = declare("ecm.model.admin.LocaleConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.LocaleConfig.prototype */

		ID: "id",
		LABEL: "label",

		constructor: function(id, name) {
			this.logDebug("LocaleConfig constructor");
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(name) {
			this.setValue(this.LABEL, name);
		}
	});

	/**
	 * Static function that constructs an locale object.
	 * 
	 * @param id
	 *            Locale id.
	 * @memberof ecm.model.admin.LocaleConfig
	 */
	LocaleConfig.createLocaleConfig = function(id) {
		return new LocaleConfig(id, "LocaleConfig");
	};
	return LocaleConfig;
});

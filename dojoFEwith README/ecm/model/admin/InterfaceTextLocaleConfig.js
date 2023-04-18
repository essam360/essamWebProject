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
	 * @name ecm.model.admin.InterfaceTextLocaleConfig
	 * @class Represents the interface text information for a locale.
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var InterfaceTextLocaleConfig = declare("ecm.model.admin.InterfaceTextLocaleConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.InterfaceTextLocaleConfig.prototype */

		ID: "id",

		constructor: function(id, name) {
			this.logDebug("InterfaceTextLocaleConfig constructor");
		},

		getId: function() {
			return this.getValue(this.ID);
		},

		clearOverrideValues: function() {
			for ( var key in this._attributes) {
				if (key != "id") {
					this._attributes[key] = "";
				}
			}
		}
	});

	/**
	 * Static function that constructs an interface text locale config object.
	 * 
	 * @param id
	 *            Interface text identifier.
	 * @memberof ecm.model.admin.InterfaceTextLocaleConfig
	 */
	InterfaceTextLocaleConfig.createInterfaceTextLocaleConfig = function(id) {
		return new InterfaceTextLocaleConfig(id, "InterfaceTextLocaleConfig");
	};
	return InterfaceTextLocaleConfig;
});

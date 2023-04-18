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
	 * @name ecm.model.admin.InterfaceTextLabelConfig
	 * @class Represents the configuration information for the text of a label that is used in the user interface.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @private
	 */
	var InterfaceTextLabelConfig = declare("ecm.model.admin.InterfaceTextLabelConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.InterfaceTextLabelConfig.prototype */

		ID: "id",

		constructor: function(id, name) {
			this.logDebug("InterfaceTextLabelConfig constructor");
		},

		hasLabelData: function() {
			return this.getValue("en") != undefined;
		},

		getId: function() {
			return this.getValue(this.ID);
		}
	});

	/**
	 * Static function that constructs an interface text label config object.
	 * 
	 * @param id
	 *            Interface text identifier.
	 * @memberof ecm.model.admin.InterfaceTextLabelConfig
	 */
	InterfaceTextLabelConfig.createInterfaceTextLabelConfig = function(id) {
		return new InterfaceTextLabelConfig(id, "InterfaceTextLabelConfig");
	};
	return InterfaceTextLabelConfig;
});

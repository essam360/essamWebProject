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
	 * @name ecm.model.admin.IdLabelConfig
	 * @class Represents the configuration information for an ID label.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @private
	 */
	var IdLabelConfig = declare("ecm.model.admin.IdLabelConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.IdLabelConfig.prototype */

		ID: "id",
		LABEL: "label",

		constructor: function(id, name) {
			this.logDebug("IdLabelConfig constructor");
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(name) {
			this.setValue(this.LABEL, name);
		}
	});

	/**
	 * Static function that constructs an id label object.
	 * 
	 * @param id
	 *            id.
	 * @memberof ecm.model.admin.IdLabelConfig
	 */
	IdLabelConfig.createIdLabelConfig = function(id) {
		return new IdLabelConfig(id, "IdLabelConfig");
	};
	return IdLabelConfig;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/admin/_ConfigurationObject"
], function(declare, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.OfficeCustomCommandConfig
	 * @class Represents the configuration information for an MS Office custom commands.
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var OfficeCustomCommandConfig = declare("ecm.model.admin.OfficeCustomCommandConfig", ecm.model.admin._ConfigurationObject, {
		/** @lends ecm.model.admin.OfficeCustomCommandConfig.prototype */

		AVAILABLE: "available",
		LABEL: "label",
		DESCRIPTION: "description",
		URL: "url",
		ICON: "icon",
		DESKTOP_ID: "desktopId",

		constructor: function(id, name) {
			this.logDebug("OfficeCustomCommandConfig constructor");
		},

		getAvailable: function() {
			return this.getValue(this.AVAILABLE);
		},

		setAvailable: function(available) {
			this.setValue(this.AVAILABLE, available);
		},

		getIcon: function() {
			return this.getValue(this.ICON);
		},

		setIcon: function(icon) {
			this.setValue(this.ICON, icon);
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(label) {
			this.setValue(this.LABEL, label);
		},

		getDescription: function() {
			return this.getValue(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValue(this.DESCRIPTION, description);
		},

		getUrl: function() {
			return this.getValue(this.URL);
		},

		setUrl: function(url) {
			this.setValue(this.URL, url);
		},

		getDesktopId: function() {
			return this.getValue(this.DESKTOP_ID);
		},

		setDesktopId: function(destkopId) {
			this.setValue(this.DESKTOP_ID, desktopId);
		}

	});

	/**
	 * Static function that constructs an Office custom command config object.
	 * 
	 * @param id
	 *            Office custom command id.
	 * @memberof ecm.model.OfficeCustomCommandConfig
	 */
	OfficeCustomCommandConfig.createOfficeCustomCommandConfig = function(id) {
		return new OfficeCustomCommandConfig(id, "OfficeCustomCommandConfig");
	};

	return OfficeCustomCommandConfig;

});

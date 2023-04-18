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
	 * @name ecm.model.admin.MobileFeatureConfig
	 * @class Represents the configuration information for an MS Office Properties mapping to a P8 property. This
	 *        information includes:
	 *        <ul>
	 *        <li>The name of the property in P8
	 *        <li>
	 *        <li>MS Office properties</li>
	 *        <li>The data type</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var MobileFeatureConfig = declare("ecm.model.admin.MobileFeatureConfig", ecm.model.admin._ConfigurationObject, {
		/** @lends ecm.model.admin.MobileFeatureConfig.prototype */

		DISPLAY: "display",
		ICON_FILE: "iconFile",
		NAME: "name",
		URL: "url",
		DESKTOP_ID: "desktopId",

		constructor: function(id, name) {
			this.logDebug("MobileFeatureConfig constructor");
		},

		getDisplay: function() {
			return this.getValue(this.DISPLAY);
		},

		setDisplay: function(display) {
			this.setValue(this.DISPLAY, display);
		},

		getIconFile: function() {
			return this.getValue(this.ICON_FILE);
		},

		setIconFile: function(iconFile) {
			this.setValue(this.ICON_FILE, iconFile);
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
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
	 * Static function that constructs an MobileFeature config object.
	 * 
	 * @param id
	 *            Mobile feature config id.
	 * @memberof ecm.model.MobileFeatureConfig
	 */
	MobileFeatureConfig.createMobileFeatureConfig = function(id) {
		return new MobileFeatureConfig(id, "MobileFeatureConfig");
	};

	return MobileFeatureConfig;

});

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
	 * @name ecm.model.admin.IconStatusConfig
	 * @class Represents the configuration information for a state icon. State icons indicate the state of an item such
	 *        as minor version or notes.
	 *        <p>
	 *        The information that is maintained by this class includes:
	 *        <ul>
	 *        <li>The name of the icon
	 *        <li>
	 *        <li>The name of the file that contains the icon</li>
	 *        <li>The types of content for which the icon is used</li>
	 *        <li>The name of the CSS class that is used to display the icon</li>
	 *        <li>The list of repository types that support the icon</li>
	 *        </ul>
	 *        </p>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var IconStatusConfig = declare("ecm.model.admin.IconStatusConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.IconStatusConfig.prototype */

		ID: "id",
		LABEL: "label",
		FILE_NAME: "fileName",
		CLASS_NAME: "className",
		SERVERS: "servers",

		constructor: function(id, name) {
			this.logDebug("IconConfig constructor");
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(name) {
			this.setValue(this.LABEL, name);
		},

		getFileName: function() {
			return this.getValue(this.FILE_NAME);
		},

		setFileName: function(name) {
			this.setValue(this.FILE_NAME, name);
		},

		getClassName: function() {
			return this.getValue(this.CLASS_NAME);
		},

		setClassName: function(name) {
			this.setValue(this.CLASS_NAME, name);
		},

		getServers: function() {
			return this.getValues(this.SERVERS);
		},

		setServers: function(servers) {
			this.setValue(this.SERVERS, servers);
		}

	});

	/**
	 * Static function that constructs an icon config object.
	 * 
	 * @param id
	 *            Icon id.
	 * @memberof ecm.model.admin.IconStatusConfig
	 */
	IconStatusConfig.createIconStatusConfig = function(id) {
		return new IconStatusConfig(id, "IconStatusConfig");
	};
	return IconStatusConfig;
});

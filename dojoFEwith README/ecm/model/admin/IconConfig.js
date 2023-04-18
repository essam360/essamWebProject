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
	 * @name ecm.model.admin.IconConfig
	 * @class Represents the configuration information for an icon that is mapped to MIME types. This information
	 *        includes:
	 *        <ul>
	 *        <li>The name of the icon </li>
	 *        <li>The name of the file that contains the icon</li>
	 *        <li>The types of content for which the icon is used</li>
	 *        <li>The name of the CSS class that is used to display the icon</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var IconConfig = declare("ecm.model.admin.IconConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.IconConfig.prototype */

		ID: "id",
		NAME: "name",
		FILE_NAME: "fileName",
		CLASS_NAME: "className",
		CONTENT_TYPES: "contentTypes",

		constructor: function(id, name) {
			this.logDebug("IconConfig constructor");
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
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

		getContentTypes: function() {
			return this.getValues(this.CONTENT_TYPES);
		},

		setContentTypes: function(contentTypes) {
			this.setValue(this.CONTENT_TYPES, contentTypes);
		}

	});

	/**
	 * Static function that constructs an icon configuration object.
	 * 
	 * @param id
	 *            Icon id.
	 * @memberof ecm.model.admin.IconConfig
	 */
	IconConfig.createIconConfig = function(id) {
		return new IconConfig(id, "IconConfig");
	};
	return IconConfig;
});

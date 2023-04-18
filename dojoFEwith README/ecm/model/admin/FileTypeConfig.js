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
	 * @name ecm.model.admin.FileTypeConfig
	 * @class Represents the configuration information for a file type that is mapped to MIME types. This information
	 *        includes:
	 *        <ul>
	 *        <li>The name of the file type</li>
	 *        <li>The description of the file type</li>
	 *        <li>The types of content for which the file type is used</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var FileTypeConfig = declare("ecm.model.admin.FileTypeConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.FileTypeConfig.prototype */

		NAME: "name",
		DESCRIPTION: "description",
		CONTENT_TYPES: "contentTypes",
		ONLY_USE_IN_ET_FOLDER_ASSOCIATIONS: "onlyUseInETAssociations",

		constructor: function(id, name) {
			this.logDebug("FileTypeConfig constructor");
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getDescription: function() {
			return this.getValue(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValue(this.DESCRIPTION, description);
		},

		getContentTypes: function() {
			return this.getValues(this.CONTENT_TYPES);
		},

		setContentTypes: function(contentTypes) {
			this.setValue(this.CONTENT_TYPES, contentTypes);
		},

		/**
		 * @since 2.0.3
		 */
		getOnlyUseInETAssociations: function() {
			var onlyUseInETAssociationsvalue = this.getValue(this.ONLY_USE_IN_ET_FOLDER_ASSOCIATIONS);
			if (onlyUseInETAssociationsvalue && onlyUseInETAssociationsvalue == "true") {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * @since 2.0.3
		 */
		setOnlyUseInETAssociations: function(onlyUseInETAssociations) {
			this.setValue(this.ONLY_USE_IN_ET_FOLDER_ASSOCIATIONS, onlyUseInETAssociations);
		}

	});

	/**
	 * Static function that constructs a file type configuration object.
	 * 
	 * @param id
	 *            file type id.
	 * @memberof ecm.model.admin.FileTypeConfig
	 */
	FileTypeConfig.createFileTypeConfig = function(id) {
		return new FileTypeConfig(id, "FileTypeConfig");
	};

	return FileTypeConfig;
});

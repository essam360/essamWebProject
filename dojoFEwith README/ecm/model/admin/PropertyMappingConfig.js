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
	 * @name ecm.model.admin.PropertyMappingConfig
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
	var PropertyMappingConfig = declare("ecm.model.admin.PropertyMappingConfig", ecm.model.admin._ConfigurationObject, {
		/** @lends ecm.model.admin.PropertyMappingConfig.prototype */

		DATA_TYPE: "dataType",
		OFFICE_PROPERTIES: "officeProperties",
		REPOSITORY_PROPERTY: "repositoryProperty",

		constructor: function(id, name) {
			this.logDebug("PropertyMappingConfig constructor");
		},

		getRepositoryProperty: function() {
			return this.getValue(this.REPOSITORY_PROPERTY);
		},

		setRepositoryProperty: function(repoProperty) {
			this.setValue(this.REPOSITORY_PROPERTY, repoProperty);
		},

		getDataType: function() {
			return this.getValue(this.DATA_TYPE);
		},

		setDataType: function(type) {
			this.setValue(this.DATA_TYPE, type);
		},

		getOfficeProperties: function() {
			return this.getValues(this.OFFICE_PROPERTIES);
		},

		setOfficeProperties: function(officeProperties) {
			this.setValues(this.OFFICE_PROPERTIES, officeProperties);
		}
	});

	/**
	 * Static function that constructs an PropertyMapping config object.
	 * 
	 * @param id
	 *            Property symbolic name.
	 * @memberof ecm.model.admin.PropertyMappingConfig
	 */
	PropertyMappingConfig.createPropertyMappingConfig = function(id) {
		return new PropertyMappingConfig(id, "PropertyMappingConfig");
	};

	return PropertyMappingConfig;

});

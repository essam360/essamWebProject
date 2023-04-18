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
	 * @name ecm.model.admin.EditServiceCategoryConfig
	 * @class Edit Service Category configuration. This
	 *        information includes:
	 *        <ul>
	 *        <li>Category Name</li>
	 *        <li>MimeTypes</li>
	 *        <li>Description</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var EditServiceCategoryConfig = declare("ecm.model.admin.EditServiceCategoryConfig", ecm.model.admin._ConfigurationObject, {
		/** @lends ecm.model.admin.EditServiceCategoryConfig.prototype */

		NAME: "name",
		MIMETYPES: "mimeTypes",
		DESCRIPTION: "description",
		ENABLE: "enable",
		DISPLAYNAME: "displayName",
		DELETED: "deleted",

		constructor: function(id, name) {
			this.logDebug("EditServiceCategoryConfig constructor");
		},

		getMimeTypes: function() {
			return this.getValues(this.mimeTypes);
		},

		setMimeTypes: function(mimeTypes) {
			this.setValues(this.MIMETYPES, mimeTypes);
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},
		
		getDisplayName: function() {
			return this.getValue(this.DISPLAYNAME);
		},

		setDisplayName: function(displayName) {
			this.setValue(this.DISPLAYNAME, displayName);
		},


		getDescription: function() {
			return this.getValues(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValues(this.DESCRIPTION, description);
		},
		
		setEnable: function(enable){
			this.setValue( this.ENABLE, enable );
		},
		
		getEnable: function(){
			this.getValue( this.ENABLE ) 
		},
		
		setDeleted: function( deleted ){
			this.setValue( this.DELETED, deleted );
		},
		
		getDeleted: function(  ){
			this.getValue( this.DELETED );
		}
	});

	/**
	 * Static function that constructs an PropertyMapping config object.
	 * 
	 * @param id
	 *            Property symbolic name.
	 * @memberof ecm.model.admin.EditServiceCategoryConfig
	 */
	EditServiceCategoryConfig.createEditServiceCategoryConfig = function(id) {
		return new EditServiceCategoryConfig(id, "EditServiceCategoryConfig");
	};

	return EditServiceCategoryConfig;

});

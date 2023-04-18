/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/json",
	"./_ConfigurationObject",
	"../Action"
], function(declare, lang, array, dojojson, _ConfigurationObject, Action) {

	/**
	 * @name ecm.model.admin.RedactionReasonConfig
	 * @class Represents the configuration information for a redaction reason. The information includes;
	 *        <ul>
	 *        <li>The name, description, and Datacap application name of the redaction reason</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 * 
	 * @since 3.0
	 */
	var RedactionReasonConfig = declare("ecm.model.admin.RedactionReasonConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.RedactionReasonConfig.prototype */

		NAME: "name",
		DESCRIPTION: "description",
		ID: "id",
		APPLICATIONS: "applications",
		REPOSITORIES: "repositories",


		constructor: function(id, name) {
			this.logDebug("RedactionReasonConfig", "constructor: id: " + id + ", name: " + name);
			this._attributes.id = id;
		},

		getValue: function(att) {
			if (att == "typeSorter") {
			} else {
				return this.inherited(arguments);
			}
		},


		getDescription: function() {
			return this.getValue(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValue(this.DESCRIPTION, description);
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getApplications: function() {
			return this.getValue(this.APPLICATIONS);
		},
		
		setApplications: function(applications) {
			return this.setValue(this.APPLICATIONS, applications);
		},

		getRepositories: function() {
			return this.getValue(this.REPOSITORIES);
		},
		
		setDataToSave: function(items, subActionObjs) {
		},

		// return sub menu objects
		getItemObjects: function(callback, params) {
		},


		/**
		 * Copies values from an existing redaction reason.
		 */
		copyRedactionReason: function(redactionReason) {
			this.setName(lang.clone(redactionReason.getName()));
			this.setDescription(lang.clone(redactionReason.getDescription()));
			this.setApplications(lang.clone(redactionReason.getApplications()));
		}


	});

	/**
	 * Static function that constructs a redaction reason config object.
	 * 
	 * @param id
	 *            Redaction Reason identifier.
	 * @memberof ecm.model.admin.RedactionReasonConfig
	 */
	RedactionReasonConfig.createRedactionReasonConfig = function(id) {
		ecm.logger.logDebug("ecm.model.admin.createRedactionReasonConfig", "id: " + id);
		return new RedactionReasonConfig(id, "RedactionReasonConfig");
	};
	return RedactionReasonConfig;
});

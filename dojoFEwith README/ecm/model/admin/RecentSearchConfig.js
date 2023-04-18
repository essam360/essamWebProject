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
	 * @name ecm.model.admin.RecentSearchConfig
	 * @class Represents the configuration for a recent search. This information includes:
	 *        <ul>
	 *        <li>The identifier of the user who made the search</li>
	 *        <li>The context of the search</li>
	 *        <li>The search template that was used</li>
	 *        <li>The version series identifier</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var RecentSearchConfig = declare("ecm.model.admin.RecentSearchConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.RecentSearchConfig.prototype */

		USER_ID: "userId",
		CONTEXT_ID: "contextId",
		TEMPLATE_ID: "templateId",
		NAME: "name",
		DESCRIPTION: "description",
		VS_ID: "vsId",
		MIME_TYPE: "mimeType",

		constructor: function(id, name) {
			this.logDebug("RecentSearchConfig constructor");
		},

		getUserId: function() {
			return this.getValue(this.USER_ID);
		},

		setUserId: function(userId) {
			this.setValue(this.USER_ID, userId);
		},

		getContextId: function() {
			return this.getValue(this.CONTEXT_ID);
		},

		setContextId: function(contextId) {
			this.setValue(this.CONTEXT_ID, contextId);
		},

		getTemplateId: function() {
			return this.getValue(this.TEMPLATE_ID);
		},

		setTemplateId: function(templateId) {
			this.setValue(this.TEMPLATE_ID, templateId);
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

		getVsId: function() {
			return this.getValue(this.VS_ID);
		},

		setVsId: function(vsId) {
			this.setValue(this.VS_ID, vsId);
		},

		getMimeType: function() {
			return this.getValue(this.MIME_TYPE);
		},

		setMimeType: function(mimeType) {
			this.setValue(this.MIME_TYPE, mimeType);
		}
	});

	/**
	 * Static function that constructs a recent search config object. Use UserConfig object to save this.
	 * 
	 * @param id
	 *            Recent search identifier.
	 * @memberof ecm.model.admin.RecentSearchConfig
	 */
	RecentSearchConfig.createRecentSearchConfig = function(id) {
		return new RecentSearchConfig(id, "RecentSearchConfig", "user");
	};
	return RecentSearchConfig;
});

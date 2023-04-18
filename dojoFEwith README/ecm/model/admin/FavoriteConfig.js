/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * @name ecm.model.admin.FavoriteConfig
	 * @class Represents the configuration information for an item designated as a user favorite. This information
	 *        includes the following information for the favorite item:
	 *        <ul>
	 *        <li>The identifier, name, and alias</li>
	 *        <li>The type</li>
	 *        <li>The repository in which the item is stored</li>
	 *        <li>The content and MIME type</li>
	 *        <li>The template that is used for the item</li>
	 *        <li>The version series identifier</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var FavoriteConfig = declare("ecm.model.admin.FavoriteConfig", [
		_ModelObject
	], {
		/** @lends ecm.model.admin.FavoriteConfig.prototype */

		REPOSITORY_ID: "repositoryId",
		REPOSITORY_NAME: "repositoryName",
		ALIAS: "alias",
		NAME: "name",
		TEAM_SPACE_ID: "teamSpaceId",
		ITEM_ID: "itemId",
		TYPE: "type",
		CONTENT: "content",
		TEMPLATE: "template",
		MIMETYPE: "mimetype",
		VSID: "vsId",
		CONTENT_ITEM: "contentItem",
		SYNC_ENABLED: "syncEnabled",
		SYNC_ID: "syncId",
		SYNC_DEVICES: "syncDevices",
		HIDDEN: "hidden",

		constructor: function(id, name) {
			this.logDebug("FavoriteConfig constructor");
		},

		getItemId: function() {
			return this.getValue(this.ITEM_ID);
		},

		setItemId: function(itemId) {
			this.setValue(this.ITEM_ID, itemId);
		},

		getRepositoryId: function() {
			return this.getValue(this.REPOSITORY_ID);
		},

		setRepositoryId: function(repositoryId) {
			this.setValue(this.REPOSITORY_ID, repositoryId);
		},

		getRepositoryName: function() {
			return this.getValue(this.REPOSITORY_NAME);
		},

		setRepositoryName: function(repositoryName) {
			this.setValue(this.REPOSITORY_NAME, repositoryName);
		},

		getAlias: function() {
			return this.getValue(this.ALIAS);
		},

		setAlias: function(alias) {
			this.setValue(this.ALIAS, alias);
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getTeamSpaceId: function() {
			return this.getValue(this.TEAM_SPACE_ID);
		},

		setTeamSpaceId: function(teamSpaceId) {
			this.setValue(this.TEAM_SPACE_ID, teamSpaceId);
		},

		getType: function() {
			return this.getValue(this.TYPE);
		},

		setType: function(type) {
			this.setValue(this.TYPE, type);
		},

		getContent: function() {
			return this.getValue(this.CONTENT);
		},

		setContent: function(content) {
			this.setValue(this.CONTENT, content);
		},

		setMimeType: function(type) {
			this.setValue(this.MIMETYPE, type);
		},

		getMimeType: function() {
			return this.getValue(this.MIMETYPE);
		},

		setTemplate: function(template) {
			this.setValue(this.TEMPLATE, template);
		},

		getTemplate: function() {
			return this.getValue(this.TEMPLATE);
		},

		setVersionSeriesId: function(vsId) {
			this.setValue(this.VSID, vsId);
		},

		getVersionSeriesId: function() {
			return this.getValue(this.VSID);
		},

		setContentItem: function(contentItem) {
			this.setValue(this.CONTENT_ITEM, contentItem);
		},

		getContentItem: function() {
			return this.getValue(this.CONTENT_ITEM);
		},

		/**
		 * @since 2.0.3
		 */
		setSyncEnabled: function(syncEnabled) {
			syncEnabled = (syncEnabled === true || syncEnabled == "true");
			this.setValue(this.SYNC_ENABLED, syncEnabled ? "true" : "false");
		},

		/**
		 * @since 2.0.3
		 */
		getSyncEnabled: function() {
			var bool = true;
			var syncEnabled = this.getValue(this.SYNC_ENABLED);
			if (syncEnabled == false || syncEnabled == "false") {
				bool = false;
			}
			return bool;
		},

		/**
		 * @since 2.0.3
		 */
		setSyncId: function(id) {
			this.setValue(this.SYNC_ID, id);
		},

		/**
		 * @since 2.0.3
		 */
		getSyncId: function() {
			return this.getValue(this.SYNC_ID);
		},

		/**
		 * @since 2.0.3
		 */
		setSyncDevices: function(devices) {
			this.setValue(this.SYNC_DEVICES, devices);
		},

		/**
		 * @since 2.0.3
		 */
		getSyncDevices: function() {
			return this.getValue(this.SYNC_DEVICES);
		},

		setHidden: function(bool) {
			this.setValue(this.HIDDEN, bool);
		},

		isHidden: function() {
			return this.getValue(this.HIDDEN, false);
		},

		// retrieve the favorite config object
		// onCompleted event handler is callback
		getFavoriteConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		}

	});

	/**
	 * Static function that cnstructs a favorite config object. Use UserConfig object to save this.
	 * 
	 * @param id
	 *            Favorite identifier.
	 * @memberof ecm.model.admin.DesktopFavoriteConfig
	 */
	FavoriteConfig.createFavoriteConfig = function(id) {
		return new FavoriteConfig(id, "FavoriteConfig");
	};
	return FavoriteConfig;
});

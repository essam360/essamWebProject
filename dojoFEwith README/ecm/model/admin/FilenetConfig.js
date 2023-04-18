/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ConfigurationObject"
], function(declare, lang, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.FilenetConfig
	 * @class Represents the configuration information for Filenet data.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @since 2.0.3
	 * @public
	 */
	var FilenetConfig = declare("ecm.model.admin.FilenetConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.FilenetConfig.prototype */

		P8_DOWNLOAD_CACHE_ENABLE: "p8DlCacheEnable",
		P8_DOWNLOAD_CACHE_FOLDER: "p8DlCacheFolder",
		P8_DOWNLOAD_CACHE_URL: "p8DlCacheUrl",
		P8_DOWNLOAD_CACHE_MAX_FILES: "p8DlCacheMaxFiles",
		P8_DOWNLOAD_CACHE_MAX_SIZE: "p8DlCacheMaxSize",
		P8_DOWNLOAD_CACHE_CLEANUP_DURATION: "p8DlCacheCleanupDuration",
		P8_DOWNLOAD_CACHE_CLEANUP_MIN: "p8DlCacheCleanupMin",
		P8_DOWNLOAD_CACHE_MIN_LIFETIME: "p8DlCacheMinLifetime",
		P8_DOWNLOAD_CACHE_SIZE_THRESHOLD: "p8DlCacheSizeThreshold",
		P8_DOWNLOAD_CACHE_GUARD_HEADER: "p8DlCacheGuardHeader",

		P8_HIDE_EMAIL_ADDRESSES: "p8HideEmailAddresses",
		P8_MASK_USER_IDS: "p8MaskUserIds",
		P8_SOFT_DELETE: "p8SoftDelete",
		P8_DOWNLOAD_URL: "p8DlUrl",
		P8_CONNECTIONS_URL: "p8ConnectionsUrl",
		P8_CONNECTIONS_URL_HTTP: "p8ConnectionsUrlHttp",
		P8_CONNECTIONS_URL_HTTPS: "p8ConnectionsUrlHttps",

		constructor: function(id, name) {
			this.logDebug("FilenetConfig constructor");
		},

		getP8ConnectionsUrl: function() {
			return this.getValue(this.P8_CONNECTIONS_URL, "");
		},

		setP8ConnectionsUrl: function(val) {
			this.setValue(this.P8_CONNECTIONS_URL, val);
		},

		getP8ConnectionsUrlHttp: function() {
			return this.getValue(this.P8_CONNECTIONS_URL_HTTP, "");
		},

		setP8ConnectionsUrlHttp: function(val) {
			this.setValue(this.P8_CONNECTIONS_URL_HTTP, val);
		},

		getP8ConnectionsUrlHttps: function() {
			return this.getValue(this.P8_CONNECTIONS_URL_HTTPS, "");
		},

		setP8ConnectionsUrlHttps: function(val) {
			this.setValue(this.P8_CONNECTIONS_URL_HTTPS, val);
		},

		getP8DownloadUrl: function() {
			return this.getValue(this.P8_DOWNLOAD_URL, "");
		},

		setP8DownloadUrl: function(val) {
			this.setValue(this.P8_DOWNLOAD_URL, val);
		},

		getP8SoftDelete: function() {
			return this.getValue(this.P8_SOFT_DELETE, "");
		},

		setP8SoftDelete: function(val) {
			this.setValue(this.P8_SOFT_DELETE, val);
		},

		getP8MaskUserIds: function() {
			return this.getValue(this.P8_MASK_USER_IDS, "");
		},

		setP8MaskUserIds: function(val) {
			this.setValue(this.P8_MASK_USER_IDS, val);
		},

		getP8HideEmailAddresses: function() {
			return this.getValue(this.P8_HIDE_EMAIL_ADDRESSES, "");
		},

		setP8HideEmailAddresses: function(val) {
			this.setValue(this.P8_HIDE_EMAIL_ADDRESSES, val);
		},

		getP8DownloadCacheEnable: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_ENABLE, true);
		},

		setP8DownloadCacheEnable: function(downloadCache) {
			this.setValue(this.P8_DOWNLOAD_CACHE_ENABLE, downloadCache);
		},

		getP8DownloadCacheUrl: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_URL, "");
		},

		setP8DownloadCacheUrl: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_URL, val);
		},

		getP8DownloadCacheGuardHeader: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_GUARD_HEADER, "");
		},

		setP8DownloadCacheGuardHeader: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_GUARD_HEADER, val);
		},

		getP8DownloadCacheSizeThreshold: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_SIZE_THRESHOLD, "");
		},

		setP8DownloadCacheSizeThreshold: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_SIZE_THRESHOLD, val);
		},

		getP8DownloadCacheMinLifetime: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_MIN_LIFETIME, "");
		},

		setP8DownloadCacheMinLifetime: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_MIN_LIFETIME, val);
		},

		getP8DownloadCacheCleanupDuration: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_CLEANUP_DURATION, "");
		},

		setP8DownloadCacheCleanupDuration: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_CLEANUP_DURATION, val);
		},

		getP8DownloadCacheCleanupMinimum: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_CLEANUP_MIN, "");
		},

		setP8DownloadCacheCleanupMinimum: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_CLEANUP_MIN, val);
		},

		getP8DownloadCacheMaxFiles: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_MAX_FILES, "");
		},

		setP8DownloadCacheMaxFiles: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_MAX_FILES, val);
		},

		getP8DownloadCacheMaxSize: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_MAX_SIZE, "");
		},

		setP8DownloadCacheMaxSize: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_MAX_SIZE, val);
		},

		getP8DownloadCacheFolder: function() {
			return this.getValue(this.P8_DOWNLOAD_CACHE_FOLDER, "");
		},

		setP8DownloadCacheFolder: function(val) {
			this.setValue(this.P8_DOWNLOAD_CACHE_FOLDER, val);
		}

	});

	/**
	 * Static function that constructs a application Filenet config object.
	 * 
	 * @param id
	 *            id.
	 * @memberof ecm.model.admin.FilenetConfig
	 */
	FilenetConfig.createFilenetConfig = function(id) {
		return new FilenetConfig(id, "FilenetConfig");
	};
	return FilenetConfig;
});

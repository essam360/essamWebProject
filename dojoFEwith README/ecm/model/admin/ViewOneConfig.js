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
	 * @name ecm.model.admin.ViewOneConfig
	 * @class Represents the configuration information for Daeja ViewOne.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @since 2.0.3
	 * @public
	 */
	var ViewOneConfig = declare("ecm.model.admin.ViewOneConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ViewOneConfig.prototype */

		DAEJA_VIEWONEPRO_STREAM_PDF: "daejaStreamPDF",
		DAEJA_VIEWONEPRO_STREAM_TIFF: "daejaStreamTIFF",
		//DAEJA_VIEWONEPRO_EDIT_ANNOTATIONS: "proEditAnnotations",
		DAEJA_VIEWONEPRO_ROUTE_DOCS: "proRouteDocs",
		//DAEJA_VIEWONEPRO_ANNOTATION_UNITS: "proAnnotationUnits",
		DAEJA_VIEWONEPRO_SCALE: "proScale",
		DAEJA_VIEWONEPRO_FILE_BUTTONS: "proFileButtons",
		DAEJA_VIEWONEPRO_FILE_MENUS: "proFileMenus",
		DAEJA_VIEWONEPRO_PRINT_BUTTONS: "proPrintButtons",
		DAEJA_VIEWONEPRO_PRINT_MENUS: "proPrintMenus",
		DAEJA_VIEWONEPRO_INVERT_BUTTONS: "proInvertButtons",
		// DAEJA_VIEWONEPRO_FLIP_BUTTONS: "proFlipButtons",
		DAEJA_VIEWONEPRO_FILE_KEYS: "proFileKeys",
		DAEJA_VIEWONEPRO_PRINT_KEYS: "proPrintKeys",
		DAEJA_VIEWONEPRO_CUSTOM_TOOLTIP: "proCustomTooltip",
		//DAEJA_VIEWONEPRO_ALWAYS_RUBBERBAND: "proAlwaysRubberband",
		//DAEJA_VIEWONEPRO_PHOTOMETRIC: "proPhotometric",
		DAEJA_VIEWONEPRO_HELP_URL: "proHelpUrl",
		DAEJA_VIEWONEPRO_IMAGE_STAMP_RESOURCE_CONTEXT: "proImageStampResourceContext",
		DAEJA_VIEWONEPRO_CUSTOM_SETTINGS: "proCustomSettings",
		DAEJA_STREAMER_CACHE_ROOT: "streamerCacheRoot",
		//DAEJA_STREAMER_SESSION_COOKIES: "streamerSessionCookies",
		DAEJA_STREAMER_CUSTOM_SETTINGS: "streamerCustomSettings",
		//DAEJA_REDACTION_SESSION_COOKIES: "redactionSessionCookies",
		DAEJA_REDACTION_CUSTOM_SETTINGS: "redactionCustomSettings",
		//DAEJA_VIRTUAL_EDIT_ANNOTATIONS: "virtualEditAnnotations",
		//DAEJA_VIRTUAL_ROUTE_DOCS: "virtualRouteDocs",
		//DAEJA_VIRTUAL_FILE_BUTTONS: "virtualFileButtons",
		DAEJA_VIRTUAL_CUSTOM_TOOLTIP: "virtualCustomTooltip",
		DAEJA_VIRTUAL_License_File_Path:"virtualLicenseFilePath",
		DAEJA_VIRTUAL_IMAGE_STAMP_RESOURCE_CONTEXT: "virtualImageStampResourceContext",
		//DAEJA_VIRTUAL_SESSION_COOKIES: "virtualSessionCookies",
		DAEJA_VIRTUAL_CUSTOM_SETTINGS: "virtualCustomSettings",

		DAEJA_VIEWONEPRO_CUSTOM_TOOLTIP_USE_PREDEFINED: "proCustomTooltipUsePredefined",
		DAEJA_VIRTUAL_CUSTOM_TOOLTIP_USE_PREDEFINED: "virtualCustomTooltipUsePredefined",

		constructor: function(id, name) {
			this.logDebug("ViewOneConfig constructor");
		},

		getDaejaStreamPDF: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_STREAM_PDF);
		},

		setDaejaStreamPDF: function(daejaStreamPDF) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_STREAM_PDF, daejaStreamPDF);
		},

		getDaejaStreamTIFF: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_STREAM_TIFF);
		},

		setDaejaStreamTIFF: function(daejaStreamTIFF) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_STREAM_TIFF, daejaStreamTIFF);
		},

		getProRouteDocs: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_ROUTE_DOCS);
		},

		setProRouteDocs: function(proRouteDocs) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_ROUTE_DOCS, proRouteDocs);
		},

		getProScale: function() {
			return this.getValue(this.DAEJA_VIEWONEPRO_SCALE);
		},

		setProScale: function(proScale) {
			this.setValue(this.DAEJA_VIEWONEPRO_SCALE, proScale);
		},

		getProFileButtons: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_FILE_BUTTONS);
		},

		setProFileButtons: function(proFileButtons) {
			this.setValue(this.DAEJA_VIEWONEPRO_FILE_BUTTONS, proFileButtons);
		},

		getProFileMenus: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_FILE_MENUS);
		},

		setProFileMenus: function(proFileMenus) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_FILE_MENUS, proFileMenus);
		},

		getProPrintButtons: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_PRINT_BUTTONS);
		},

		setProPrintButtons: function(proPrintButtons) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_PRINT_BUTTONS, proPrintButtons);
		},

		getProPrintMenus: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_PRINT_MENUS);
		},

		setProPrintMenus: function(proPrintMenus) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_PRINT_MENUS, proPrintMenus);
		},

		getProInvertButtons: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_INVERT_BUTTONS);
		},

		setProInvertButtons: function(proInvertButtons) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_INVERT_BUTTONS, proInvertButtons);
		},

		getProFileKeys: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_FILE_KEYS);
		},

		setProFileKeys: function(proFileKeys) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_FILE_KEYS, proFileKeys);
		},

		getProPrintKeys: function() {
			return this.getBoolean(this.DAEJA_VIEWONEPRO_PRINT_KEYS);
		},

		setProPrintKeys: function(proPrintKeys) {
			this.setBoolean(this.DAEJA_VIEWONEPRO_PRINT_KEYS, proPrintKeys);
		},

		getProCustomTooltip: function() {
			return this.getValue(this.DAEJA_VIEWONEPRO_CUSTOM_TOOLTIP);
		},

		setProCustomTooltip: function(proCustomTooltip) {
			this.setValue(this.DAEJA_VIEWONEPRO_CUSTOM_TOOLTIP, proCustomTooltip);
		},

		getProCustomTooltipUsePredefined: function() {
			return this.getValue(this.DAEJA_VIEWONEPRO_CUSTOM_TOOLTIP_USE_PREDEFINED);
		},

		setProCustomTooltipUsePredefined: function(proCustomTooltipUsePredefined) {
			this.setValue(this.DAEJA_VIEWONEPRO_CUSTOM_TOOLTIP_USE_PREDEFINED, proCustomTooltipUsePredefined);
		},

		getProHelpUrl: function() {
			return this.getValue(this.DAEJA_VIEWONEPRO_HELP_URL);
		},

		setProHelpUrl: function(proHelpUrl) {
			this.setValue(this.DAEJA_VIEWONEPRO_HELP_URL, proHelpUrl);
		},

		getProImageStampResourceContext: function() {
			return this.getValue(this.DAEJA_VIEWONEPRO_IMAGE_STAMP_RESOURCE_CONTEXT);
		},

		setProImageStampResourceContext: function(proImageStampResourceContext) {
			this.setValue(this.DAEJA_VIEWONEPRO_IMAGE_STAMP_RESOURCE_CONTEXT, proImageStampResourceContext);
		},

		getProCustomSettings: function() {
			return this.getValue(this.DAEJA_VIEWONEPRO_CUSTOM_SETTINGS);
		},

		setProCustomSettings: function(proCustomSettings) {
			this.setValue(this.DAEJA_VIEWONEPRO_CUSTOM_SETTINGS, proCustomSettings);
		},

		getStreamerCacheRoot: function() {
			return this.getValue(this.DAEJA_STREAMER_CACHE_ROOT);
		},

		setStreamerCacheRoot: function(streamerCacheRoot) {
			this.setValue(this.DAEJA_STREAMER_CACHE_ROOT, streamerCacheRoot);
		},

		getStreamerCustomSettings: function() {
			return this.getValue(this.DAEJA_STREAMER_CUSTOM_SETTINGS);
		},

		setStreamerCustomSettings: function(streamerCustomSettings) {
			this.setValue(this.DAEJA_STREAMER_CUSTOM_SETTINGS, streamerCustomSettings);
		},

		getRedactionCustomSettings: function() {
			return this.getValue(this.DAEJA_REDACTION_CUSTOM_SETTINGS);
		},

		setRedactionCustomSettings: function(redactionCustomSettings) {
			this.setValue(this.DAEJA_REDACTION_CUSTOM_SETTINGS, redactionCustomSettings);
		},

		getVirtualCustomTooltip: function() {
			return this.getValue(this.DAEJA_VIRTUAL_CUSTOM_TOOLTIP);
		},

		setVirtualCustomTooltip: function(virtualCustomTooltip) {
			this.setValue(this.DAEJA_VIRTUAL_CUSTOM_TOOLTIP, virtualCustomTooltip);
		},

		getVirtualCustomTooltipUsePredefined: function() {
			return this.getValue(this.DAEJA_VIRTUAL_CUSTOM_TOOLTIP_USE_PREDEFINED);
		},

		setVirtualCustomTooltipUsePredefined: function(virtualCustomTooltipUsePredefined) {
			this.setValue(this.DAEJA_VIRTUAL_CUSTOM_TOOLTIP_USE_PREDEFINED, virtualCustomTooltipUsePredefined);
		},
		
		setVirtualLicenseFilePath:function(virtualLicenseFilePath) {
			this.setValue(this.DAEJA_VIRTUAL_License_File_Path, virtualLicenseFilePath);
		},
		
		getVirtualLicenseFilePath: function() {
			return this.getValue(this.DAEJA_VIRTUAL_License_File_Path);
		},

		getVirtualImageStampResourceContext: function() {
			return this.getValue(this.DAEJA_VIRTUAL_IMAGE_STAMP_RESOURCE_CONTEXT);
		},

		setVirtualImageStampResourceContext: function(virtualImageStampResourceContext) {
			this.setValue(this.DAEJA_VIRTUAL_IMAGE_STAMP_RESOURCE_CONTEXT, virtualImageStampResourceContext);
		},

		getVirtualCustomSettings: function() {
			return this.getValue(this.DAEJA_VIRTUAL_CUSTOM_SETTINGS);
		},

		setVirtualCustomSettings: function(virtualCustomSettings) {
			this.setValue(this.DAEJA_VIRTUAL_CUSTOM_SETTINGS, virtualCustomSettings);
		},
	});

	/**
	 * Static function that constructs a application Daeja ViewOne config object.
	 * 
	 * @param id
	 *            ViewOne configuration identifier.
	 * @memberof ecm.model.admin.ViewOneConfig
	 */
	ViewOneConfig.createViewOneConfig = function(id) {
		return new ViewOneConfig(id, "ViewOneConfig");
	};
	return ViewOneConfig;
});

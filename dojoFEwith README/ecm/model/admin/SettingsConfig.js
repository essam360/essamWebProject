/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ConfigurationObject",
	"./FileTypeConfig"
], function(declare, lang, _ConfigurationObject, FileTypeConfig) {

	/**
	 * @name ecm.model.admin.SettingsConfig
	 * @class Represents the configuration information for an application setting. These settings encompass global
	 *        settings beyond the scope of a desktop or a repository. For example, this class can represent the
	 *        following settings:
	 *        <ul>
	 *        <li>Logging settings including the level, the classes to be included and excluded, the debug users, and
	 *        the debug hosts.</li>
	 *        <li>A flag that indicates whether autocomplete is disabled</li>
	 *        <li>A list of the administrators</li>
	 *        </ul>
	 *        <p>
	 *        For an IBM Content Manager OnDemand application, the <code>ConfigurationObject</code> class can also
	 *        represent:
	 *        <ul>
	 *        <li>The language</li>
	 *        <li>The temporary directory</li>
	 *        <li>The trace directory, level, and maximum file size</li>
	 *        <li>A list of custom properties</li>
	 *        </ul>
	 *        </p>
	 * @augments ecm.model.admin._ConfigurationObject
	 * @public
	 */
	var SettingsConfig = declare("ecm.model.admin.SettingsConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.SettingsConfig.prototype */

		LOGGING_LEVEL: "logging.level",
		LOGGING_CLASS_INCLUDES: "logging.class.includes",
		LOGGING_CLASS_EXCLUDES: "logging.class.excludes",
		LOGGING_DEBUG_USERS: "logging.debug.users",
		LOGGING_DEBUG_HOSTS: "logging.debug.hosts",

		OFFICE_LOGGING_LEVEL: "office.logging.level",
		OFFICE_LOGGING_CLASS_INCLUDES: "office.logging.class.includes",
		OFFICE_LOGGING_CLASS_EXCLUDES: "office.logging.class.excludes",
		OFFICE_LOGGING_DEBUG_USERS: "office.logging.debug.users",
		OFFICE_LOGGING_DEBUG_HOSTS: "office.logging.debug.hosts",
		OFFICE_LOGGING_FILE_SIZE: "office.logging.file.size",
		OFFICE_LOGGING_SHOUW_STRACKTRACE_ON_DIALOGS: "office.logging.show.stacktrace.on.dialogs",

		DISABLE_AUTOCOMPLETE: "disableAutocomplete",
		CULTURAL_COLLATION: "culturalCollation",
		BASE_STYLE: "baseStyle",
		OD_LANGUAGE: "odLanguage",
		OD_TEMPDIR: "odTempdir",
		OD_TRACEDIR: "odTracedir",
		OD_TRACELEVEL: "odTracelevel",
		OD_MAX_TRACE_FILESIZE: "odMaxTraceFilesize",
		OD_AFP2PDF_INSTALLDIR: "odAfp2pdfInstalldir",
		OD_CUSTOM_PROPS: "odCustomProperties",

		TASKMANGER_SERVICE_URL: "taskManagerServiceURL",
		TASKMANAGER_LOG_DIRECTORY: "taskManagerLogDirectory",
		TASKMANGER_SERVICE_ENABLED: "taskManagerServiceEnabled",
		TASKMANAGER_HEARTBEAT_MONITOR: "taskManagerHeartBeatMonitor",
		
		/**
		 * @since 3.0.0
		 */
		OFFICE_ONLINE_ENABLED: "officeOnlineEnabled",
		OFFICE_ONLINE_SERVICE_URL: "officeOnlineServiceURL",
		OFFICE_ONLINE_SERVICE_VERIFY: "officeOnlineServiceVerify",
		//CUSTOM_SETTINGS: "customSettings",
		
		/**
		 * @since 3.0.1
		 */
		EDIT_FILES_CLEANUP_INTERVAL: "editFilesCleanupInterval",

		/**
		 * @since 2.0.3
		 */
		ENCRYPTION_KEY: "encryptionKey",

		/**
		 * @since 2.0.3
		 */
		HELP_URL: "helpUrl",
		MIMETYPEEXTENSIONFILE: "MimeTypeExtensionFile",

		ADMIN_USERS: "adminUsers",
		FILE_TYPES: "fileTypes",
		CMC_TTL: "CMCTTL",

		DAEJA_VIEWONEPRO_TRACE: "daejaViewONEProTrace",
		DAEJA_VIEWONEPRO_TRACE_NET: "daejaViewONEProTraceNet",
		DAEJA_VIEWONEPRO_TRACE_ANNOTATIONS: "daejaViewONEProTraceAnnotations",
		DAEJA_STREAMER_TRACE: "daejaStreamerTrace",
		DAEJA_STREAMER_TRACE_NET: "daejaStreamerTraceNet",
		DAEJA_STREAMER_LOG_FILE: "daejaStreamerLogFile",
		DAEJA_REDACTION_TRACE: "daejaRedactionTrace",
		DAEJA_REDACTION_TRACE_NET: "daejaRedactionTraceNet",
		DAEJA_REDACTION_LOG_FILE: "daejaRedactionLogFile",
		DAEJA_VIRTUAL_TRACE: "daejaVirtualTrace",
		DAEJA_VIRTUAL_TRACE_NET: "daejaVirtualTraceNet",
		DAEJA_VIRTUAL_TRACE_ANNOTATIONS: "daejaVirtualTraceAnnotations",
		DAEJA_VIRTUAL_LOG_FILE: "daejaVirtualLogFile",

		TEMPFILE_CLEANUP_INTERVAL: "tempfileCleanupInterval",
		TEMPFILE_EXPIRATION_INTERVAL: "tempfileExpirationInterval",
		

		constructor: function(id, name) {
			//this.logDebug("SettingsConfig constructor");
		},

		getLoggingLevel: function() {
			return this.getValue(this.LOGGING_LEVEL, "2");
		},

		setLoggingLevel: function(loggingLevel) {
			this.setValue(this.LOGGING_LEVEL, loggingLevel);
		},

		getLoggingClassIncludes: function() {
			return this.getValue(this.LOGGING_CLASS_INCLUDES, "");
		},

		setLoggingClassIncludes: function(loggingClassIncludes) {
			this.setValue(this.LOGGING_CLASS_INCLUDES, loggingClassIncludes);
		},

		getLoggingClassExcludes: function() {
			return this.getValue(this.LOGGING_CLASS_EXCLUDES, "");
		},

		setLoggingClassExcludes: function(loggingClassExcludes) {
			this.setValue(this.LOGGING_CLASS_EXCLUDES, loggingClassExcludes);
		},

		getLoggingDebugUsers: function() {
			return this.getValue(this.LOGGING_DEBUG_USERS, "");
		},

		setLoggingDebugUsers: function(loggingDebugUsers) {
			this.setValue(this.LOGGING_DEBUG_USERS, loggingDebugUsers);
		},

		getLoggingDebugHosts: function() {
			return this.getValue(this.LOGGING_DEBUG_HOSTS, "");
		},

		setLoggingDebugHosts: function(loggingDebugHosts) {
			this.setValue(this.LOGGING_DEBUG_HOSTS, loggingDebugHosts);
		},
//office integration
		getOfficeLoggingLevel: function() {
			return this.getValue(this.OFFICE_LOGGING_LEVEL, "2");
		},

		setOfficeLoggingLevel: function(officeLoggingLevel) {
			this.setValue(this.OFFICE_LOGGING_LEVEL, officeLoggingLevel);
		},

		getOfficeLoggingClassIncludes: function() {
			return this.getValue(this.OFFICE_LOGGING_CLASS_INCLUDES, "");
		},

		setOfficeLoggingClassIncludes: function(officeLoggingClassIncludes) {
			this.setValue(this.OFFICE_LOGGING_CLASS_INCLUDES, officeLoggingClassIncludes);
		},

		getOfficeLoggingClassExcludes: function() {
			return this.getValue(this.OFFICE_LOGGING_CLASS_EXCLUDES, "");
		},

		setOfficeLoggingClassExcludes: function(officeLoggingClassExcludes) {
			this.setValue(this.OFFICE_LOGGING_CLASS_EXCLUDES, officeLoggingClassExcludes);
		},

		getOfficeLoggingDebugUsers: function() {
			return this.getValue(this.OFFICE_LOGGING_DEBUG_USERS, "");
		},

		setOfficeLoggingDebugUsers: function(officeLoggingDebugUsers) {
			this.setValue(this.OFFICE_LOGGING_DEBUG_USERS, officeLoggingDebugUsers);
		},

		getOfficeLoggingDebugHosts: function() {
			return this.getValue(this.OFFICE_LOGGING_DEBUG_HOSTS, "");
		},

		setOfficeLoggingDebugHosts: function(officeLoggingDebugHosts) {
			this.setValue(this.OFFICE_LOGGING_DEBUG_HOSTS, officeLoggingDebugHosts);
		},

		getOfficeLoggingFileSize: function() {
			return this.getValue(this.OFFICE_LOGGING_FILE_SIZE, "");
		},

		setOfficeLoggingFileSize: function(officeLoggingFileSize) {
			this.setValue(this.OFFICE_LOGGING_FILE_SIZE, officeLoggingFileSize);
		},

		getOfficeShowStacktraceOnDialogs: function() {
			return this.getValue(this.OFFICE_LOGGING_SHOUW_STRACKTRACE_ON_DIALOGS, "");
		},

		setOfficeShowStacktraceOnDialogs: function(officeShowStacktraceOnDialogs) {
			this.setValue(this.OFFICE_LOGGING_SHOUW_STRACKTRACE_ON_DIALOGS, officeShowStacktraceOnDialogs);
		},

// end of office
		
		//Custom settings
		/*setCustomSettings: function(customSettings) {
			this.setValue(this.CUSTOM_SETTINGS, customSettings);
		},
		
		getCustomSettings: function() {
			return this.getValue(this.CUSTOM_SETTINGS);
		},*/
		getDisableAutocomplete: function() {
			var disableAutocomplete = this.getValue(this.DISABLE_AUTOCOMPLETE, "false");
			return (disableAutocomplete === true || disableAutocomplete == "true");
		},

		setDisableAutocomplete: function(disableAutocomplete) {
			disableAutocomplete = (disableAutocomplete === true || disableAutocomplete == "true");
			this.setValue(this.DISABLE_AUTOCOMPLETE, (disableAutocomplete ? "true" : "false"));
		},

		getCulturalCollation: function() {
			var culturalCollation = this.getValue(this.CULTURAL_COLLATION, "false");
			return (culturalCollation === true || culturalCollation == "true");
		},

		setCulturalCollation: function(culturalCollation) {
			culturalCollation = (culturalCollation === true || culturalCollation == "true");
			this.setValue(this.CULTURAL_COLLATION, (culturalCollation ? "true" : "false"));
		},

		getBaseStyle: function() {
			return this.getValue(this.BASE_STYLE, "default");
		},

		setBaseStyle: function(baseStyle) {
			this.setValue(this.BASE_STYLE, (baseStyle || "default"));
		},
		
		getODLanguage: function() {
			return this.getValue(this.OD_LANGUAGE, "");
		},

		setODLanguage: function(language) {
			this.setValue(this.OD_LANGUAGE, language);
		},

		getODTempdir: function() {
			return this.getValue(this.OD_TEMPDIR, "");
		},

		setODTempdir: function(tempdir) {
			this.setValue(this.OD_TEMPDIR, tempdir);
		},

		getODTracedir: function() {
			return this.getValue(this.OD_TRACEDIR, "");
		},

		setODTracedir: function(tracedir) {
			this.setValue(this.OD_TRACEDIR, tracedir);
		},

		getODTracelevel: function() {
			return this.getValue(this.OD_TRACELEVEL, 1);
		},

		setODTracelevel: function(tracelevel) {
			this.setValue(this.OD_TRACELEVEL, tracelevel);
		},

		getODMaxTraceFilesize: function() {
			return this.getValue(this.OD_MAX_TRACE_FILESIZE, 0);
		},

		setODMaxTraceFilesize: function(maxTraceFilesize) {
			this.setValue(this.OD_MAX_TRACE_FILESIZE, maxTraceFilesize);
		},

		getODAfp2pdfInstalldir: function() {
			return this.getValue(this.OD_AFP2PDF_INSTALLDIR, "");
		},

		setODAfp2pdfInstalldir: function(afp2pdfInstalldir) {
			this.setValue(this.OD_AFP2PDF_INSTALLDIR, afp2pdfInstalldir);
		},

		getDaejaViewONEProTrace: function() {
			var daejaViewONEProTrace = this.getValue(this.DAEJA_VIEWONEPRO_TRACE);
			return (daejaViewONEProTrace == true || daejaViewONEProTrace == "true");
		},

		setDaejaViewONEProTrace: function(daejaViewONEProTrace) {
			daejaViewONEProTrace = (daejaViewONEProTrace === true || daejaViewONEProTrace == "true");
			this.setValue(this.DAEJA_VIEWONEPRO_TRACE, (daejaViewONEProTrace ? "true" : "false"));
		},

		getDaejaViewONEProTraceNet: function() {
			var daejaViewONEProTraceNet = this.getValue(this.DAEJA_VIEWONEPRO_TRACE_NET);
			return (daejaViewONEProTraceNet == true || daejaViewONEProTraceNet == "true");
		},

		setDaejaViewONEProTraceNet: function(daejaViewONEProTraceNet) {
			var daejaViewONEProTrace = (daejaViewONEProTraceNet === true || daejaViewONEProTraceNet == "true");
			this.setValue(this.DAEJA_VIEWONEPRO_TRACE_NET, (daejaViewONEProTraceNet ? "true" : "false"));
		},

		getDaejaViewONEProTraceAnnotations: function() {
			var daejaViewONEProTraceAnnotations = this.getValue(this.DAEJA_VIEWONEPRO_TRACE_ANNOTATIONS);
			return (daejaViewONEProTraceAnnotations == true || daejaViewONEProTraceAnnotations == "true");
		},

		setDaejaViewONEProTraceAnnotations: function(daejaViewONEProTraceAnnotations) {
			var daejaViewONEProTrace = (daejaViewONEProTraceAnnotations === true || daejaViewONEProTraceAnnotations == "true");
			this.setValue(this.DAEJA_VIEWONEPRO_TRACE_ANNOTATIONS, (daejaViewONEProTraceAnnotations ? "true" : "false"));
		},

		getDaejaStreamerTrace: function() {
			var daejaStreamerTrace = this.getValue(this.DAEJA_STREAMER_TRACE);
			return (daejaStreamerTrace == true || daejaStreamerTrace == "true");
		},

		setDaejaStreamerTrace: function(daejaStreamerTrace) {
			daejaStreamerTrace = (daejaStreamerTrace === true || daejaStreamerTrace == "true");
			this.setValue(this.DAEJA_STREAMER_TRACE, (daejaStreamerTrace ? "true" : "false"));
		},

		getDaejaStreamerTraceNet: function() {
			var daejaStreamerTraceNet = this.getValue(this.DAEJA_STREAMER_TRACE_NET);
			return (daejaStreamerTraceNet == true || daejaStreamerTraceNet == "true");
		},

		setDaejaStreamerTraceNet: function(daejaStreamerTraceNet) {
			var daejaStreamerTrace = (daejaStreamerTraceNet === true || daejaStreamerTraceNet == "true");
			this.setValue(this.DAEJA_STREAMER_TRACE_NET, (daejaStreamerTraceNet ? "true" : "false"));
		},

		getDaejaStreamerLogFile: function() {
			return this.getValue(this.DAEJA_STREAMER_LOG_FILE);
		},

		setDaejaStreamerLogFile: function(daejaStreamerLogFile) {
			this.setValue(this.DAEJA_STREAMER_LOG_FILE, daejaStreamerLogFile);
		},

		getDaejaRedactionTrace: function() {
			var daejaRedactionTrace = this.getValue(this.DAEJA_REDACTION_TRACE);
			return (daejaRedactionTrace == true || daejaRedactionTrace == "true");
		},

		setDaejaRedactionTrace: function(daejaRedactionTrace) {
			daejaRedactionTrace = (daejaRedactionTrace === true || daejaRedactionTrace == "true");
			this.setValue(this.DAEJA_REDACTION_TRACE, (daejaRedactionTrace ? "true" : "false"));
		},

		getDaejaRedactionTraceNet: function() {
			var daejaRedactionTraceNet = this.getValue(this.DAEJA_REDACTION_TRACE_NET);
			return (daejaRedactionTraceNet == true || daejaRedactionTraceNet == "true");
		},

		setDaejaRedactionTraceNet: function(daejaRedactionTraceNet) {
			var daejaRedactionTrace = (daejaRedactionTraceNet === true || daejaRedactionTraceNet == "true");
			this.setValue(this.DAEJA_REDACTION_TRACE_NET, (daejaRedactionTraceNet ? "true" : "false"));
		},

		getDaejaRedactionLogFile: function() {
			return this.getValue(this.DAEJA_REDACTION_LOG_FILE);
		},

		setDaejaRedactionLogFile: function(daejaRedactionLogFile) {
			this.setValue(this.DAEJA_REDACTION_LOG_FILE, daejaRedactionLogFile);
		},

		getDaejaVirtualTrace: function() {
			var daejaVirtualTrace = this.getValue(this.DAEJA_VIRTUAL_TRACE);
			return (daejaVirtualTrace == true || daejaVirtualTrace == "true");
		},

		setDaejaVirtualTrace: function(daejaVirtualTrace) {
			daejaVirtualTrace = (daejaVirtualTrace === true || daejaVirtualTrace == "true");
			this.setValue(this.DAEJA_VIRTUAL_TRACE, (daejaVirtualTrace ? "true" : "false"));
		},

		getDaejaVirtualTraceNet: function() {
			var daejaVirtualTraceNet = this.getValue(this.DAEJA_VIRTUAL_TRACE_NET);
			return (daejaVirtualTraceNet == true || daejaVirtualTraceNet == "true");
		},

		setDaejaVirtualTraceNet: function(daejaVirtualTraceNet) {
			var daejaVirtualTrace = (daejaVirtualTraceNet === true || daejaVirtualTraceNet == "true");
			this.setValue(this.DAEJA_VIRTUAL_TRACE_NET, (daejaVirtualTraceNet ? "true" : "false"));
		},

		getDaejaVirtualTraceAnnotations: function() {
			var daejaVirtualTraceAnnotations = this.getValue(this.DAEJA_VIRTUAL_TRACE_ANNOTATIONS);
			return (daejaVirtualTraceAnnotations == true || daejaVirtualTraceAnnotations == "true");
		},

		setDaejaVirtualTraceAnnotations: function(daejaVirtualTraceAnnotations) {
			var daejaVirtualTrace = (daejaVirtualTraceAnnotations === true || daejaVirtualTraceAnnotations == "true");
			this.setValue(this.DAEJA_VIRTUAL_TRACE_ANNOTATIONS, (daejaVirtualTraceAnnotations ? "true" : "false"));
		},

		getDaejaVirtualLogFile: function() {
			return this.getValue(this.DAEJA_VIRTUAL_LOG_FILE);
		},

		setDaejaVirtualLogFile: function(daejaVirtualLogFile) {
			this.setValue(this.DAEJA_VIRTUAL_LOG_FILE, daejaVirtualLogFile);
		},

		getCustomProperties: function() {
			return this.getValue(this.OD_CUSTOM_PROPS);
		},

		setCustomProperties: function(customProps) {
			this.setValue(this.OD_CUSTOM_PROPS, customProps);
		},

		getAdminUsers: function() {
			return this.getValues(this.ADMIN_USERS);
		},

		setAdminUsers: function(users) {
			this.setValues(this.ADMIN_USERS, users);
		},

		getFileTypes: function() {
			return this.getValues(this.FILE_TYPES);
		},

		setFileTypes: function(fileTypes) {
			this.setValues(this.FILE_TYPES, fileTypes);
		},

		/**
		 * @since 2.0.3
		 */
		getTaskManagerServiceURL: function() {
			return this.getValues(this.TASKMANGER_SERVICE_URL);
		},

		/**
		 * @since 2.0.3
		 */
		setTaskManagerServiceURL: function(url) {
			this.setValues(this.TASKMANGER_SERVICE_URL, url);
		},

		/**
		 * @since 2.0.3
		 */
		getTaskManagerServiceEnabled: function() {
			return this.getValues(this.TASKMANGER_SERVICE_ENABLED);
		},

		/**
		 * @since 2.0.3
		 */
		setTaskManagerServiceEnabled: function(enabled) {
			this.setValues(this.TASKMANGER_SERVICE_ENABLED, enabled);
		},

		/**
		 * @since 2.0.3
		 */
		setTaskManagerHeartBeatMonitorEnabled: function(enabled) {
			this.setValues(this.TASKMANAGER_HEARTBEAT_MONITOR, enabled);
		},

		/**
		 * @since 2.0.3
		 */
		getTaskManagerHeartBeatMonitorEnabled: function() {
			return this.getValues(this.TASKMANAGER_HEARTBEAT_MONITOR);
		},

		/**
		 * @since 2.0.3
		 */
		getTaskManagerLogDirectory: function() {
			return this.getValues(this.TASKMANAGER_LOG_DIRECTORY);
		},

		/**
		 * @since 2.0.3
		 */
		setTaskManagerLogDirectory: function(dir) {
			this.setValues(this.TASKMANAGER_LOG_DIRECTORY, dir);
		},
		
		/**
		 * @since 3.0.1
		 */
		
		getEditFilesCleanupInterval: function() {
			return this.getValue(this.EDIT_FILES_CLEANUP_INTERVAL);
		},

		/**
		 * @since 3.0.1
		 */
		
		setEditFilesCleanupInterval: function(value) {
			this.setValue(this.EDIT_FILES_CLEANUP_INTERVAL, value);
		},

		/**
		 * @since 3.0.0
		 */
		getOfficeOnlineEnabled: function() {
			var value = this.getValue(this.OFFICE_ONLINE_ENABLED);
			return (value == true || value == "true");
		},

		/**
		 * @since 3.0.0
		 */
		setOfficeOnlineEnabled: function(enabled) {
			this.setValues(this.OFFICE_ONLINE_ENABLED, enabled);
		},
		
		/**
		 * @since 3.0.0
		 */
		getOfficeOnlineServiceURL: function() {
			return this.getValues(this.OFFICE_ONLINE_SERVICE_URL);
		},

		/**
		 * @since 3.0.0
		 */
		setOfficeOnlineServiceURL: function(url) {
			this.setValues(this.OFFICE_ONLINE_SERVICE_URL, url);
		},

	
		/**
		 * @since 3.0.1
		 */
		getOfficeOnlineServiceVerify: function() {
			return this.getValues(this.OFFICE_ONLINE_SERVICE_VERIFY);
		},

		/**
		 * @since 3.0.1
		 */
		setOfficeOnlineServiceVerify: function(verify) {
			this.setValues(this.OFFICE_ONLINE_SERVICE_VERIFY, verify);
		},
		
		/**
		 * CMC time to live. unit in seconds default is 10 hours.
		 */
		getCMCTTL: function() {
			return this.getValue(this.CMC_TTL);
		},

		setCMCTTL: function(cmcTTL) {
			this.setValue(this.CMC_TTL, cmcTTL);
		},

		// return file type objects
		getFileTypeList: function(callback, params) {
			var fileTypeObjects = [];
			this.listConfig("fileTypes", lang.hitch(this, function(list) {
				for ( var i in list) {
					var entry = list[i];
					var fileType = FileTypeConfig.createFileTypeConfig(entry.id);

					lang.mixin(fileType, {
						_attributes: entry
					});
					if (fileType.getName()) { // include only file type with a name
						fileTypeObjects.push(fileType);
					}
				}
				if (callback) {
					callback(fileTypeObjects);
				}
			}), "true", params);
		},

		/**
		 * Gets the encryption key for the application.
		 * 
		 * @return a string value of the encryption key.
		 * @since 2.0.3
		 */
		getEncryptionKey: function() {
			return this.getValue(this.ENCRYPTION_KEY);
		},

		/**
		 * Sets the encryption key for the application.
		 * 
		 * @since 2.0.3
		 */
		setEncryptionKey: function(value) {
			this.setValue(this.ENCRYPTION_KEY, value);
		},

		/**
		 * Gets the help url.
		 * 
		 * @since 2.0.3
		 */
		getHelpUrl: function() {
			return this.getValue(this.HELP_URL);
		},

		/**
		 * Sets the help url.
		 * 
		 * @since 2.0.3
		 */
		setHelpUrl: function(value) {
			this.setValue(this.HELP_URL, value);
		},
				
		setMimeTypeExtensionFile:function(value){
			this.setValue(this.MIMETYPEEXTENSIONFILE, value);
		},
		getMimeTypeExtensionFile:function(){
			return this.getValue(this.MIMETYPEEXTENSIONFILE);
		},

		getTempfileCleanupInterval: function() {
			return this.getValue(this.TEMPFILE_CLEANUP_INTERVAL);
		},

		setTempfileCleanupInterval: function(value) {
			this.setValue(this.TEMPFILE_CLEANUP_INTERVAL, value);
		},

		getTempfileExpirationInterval: function() {
			return this.getValue(this.TEMPFILE_EXPIRATION_INTERVAL);
		},

		setTempfileExpirationInterval: function(value) {
			this.setValue(this.TEMPFILE_EXPIRATION_INTERVAL, value);
		},

		// retrieve the application configuration
		getSettingsConfig: function(callback, params) {
			//this.logEntry(arguments.callee.nom);
			this.getConfig(callback, params);
			//this.logExit(arguments.callee.nom);
			return this;
		},

		// update application configuration
		// onCompleted event handler is callback
		updateSettingsConfig: function(callback, params) {
			//this.logEntry(arguments.callee.nom);
			this.updateConfig(callback, params);
			//this.logExit(arguments.callee.nom);
		}
	});

	/**
	 * Static function that constructs a application setting config object.
	 * 
	 * @param id
	 *            Settings identifier
	 * @memberof ecm.model.admin.SettingsConfig
	 */
	SettingsConfig.createSettingsConfig = function(id) {
		return new SettingsConfig(id, "SettingsConfig");
	};
	return SettingsConfig;
});

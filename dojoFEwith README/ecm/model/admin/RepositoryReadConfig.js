/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ConfigurationObject"
],

function(declare, lang, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.RepositoryReadConfig
	 * @class Represents the configuration information for a repository. For all repository types, the
	 *        <code>RepositoryReadConfig</code> class includes the following information:
	 *        <ul>
	 *        <li>Repository type</li>
	 *        <li>Name of the server on which the repository is located</li>
	 *        <li>Maximum size for retrieving and downloading information</li>
	 *        <li>Date, time, and timestamp format</li>
	 *        <li>System properties for documents and folders</li>
	 *        <li>Search information</li>
	 *        <li>Document and work item status</li>
	 *        </ul>
	 *        <p>
	 *        For IBM Content Manager OnDemand repositories, the <code>RepositoryReadConfig</code> class includes the
	 *        following information:
	 *        <ul>
	 *        <li>Transform information for PDF and XML files</li>
	 *        <li>Secure socket layer</li>
	 *        <li>Custom properties</li>
	 *        <li>Maximum number of folders and search results</li>
	 *        <li>Folder search expression</li>
	 *        <li>Trace directory and trace level</li>
	 *        </ul>
	 *        <p>
	 *        For IBM FileNet P8 repositories, the <code>RepositoryReadConfig</code> class includes the following
	 *        information:
	 *        <ul>
	 *        <li>Object store name and display name</li>
	 *        <li>Versioning for adding and checking in documents</li>
	 *        <li>Annotation security</li>
	 *        <li>Connection point</li>
	 *        <li>Protocol</li>
	 *        </ul>
	 *        <p>
	 *        For common management information service (CMIS) repositories, the <code>RepositoryConfig</code> class
	 *        includes the following information:
	 *        <ul>
	 *        <li>Repository identifier</li>
	 *        <li>Flag that indicates whether gzip encoding is used</li>
	 *        </ul>
	 *        <p>
	 *        For IBM Content Manager repositories, the <code>RepositoryReadConfig</code> class includes the following
	 *        information:
	 *        <ul>
	 *        <li>Flag that indicates whether single sign-on (SSO) is used</li>
	 *        <li>Language codes</li>
	 *        <li>Flag that indicates whether folders are supported</li>
	 *        <li>The identifier of the root folder</li>
	 *        <li>The default configuration</li>
	 *        <li>Definitions for constants such as float, integer, object, and string.</li>
	 *        </ul>
	 *        </p>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var RepositoryReadConfig = declare("ecm.model.admin.RepositoryReadConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.RepositoryReadConfig.prototype */

		MAX_IN_MEMORY_RETRIEVE_SIZE: "maxInMemoryRetrieveSize",
		MAX_DOWNLOAD_SIZE: "maxDownloadSize",
		TIMESTAMP_FORMAT: "timestampFormat",
		TIME_FORMAT: "timeFormat",
		DATE_FORMAT: "dateFormat",
		TEAMSPACES_ENABLED: "teamspacesEnabled",
		TEAMSPACES_OWNER_MODIFY_ROLE: "teamspaceOwnersModifyRoles",
		TEAMSPACES_DISPLAY_RECENT: "teamspaceDisplayRecent",
		TEAMSPACES_DISPLAY_RECENT_VALUE: "teamspaceDisplayRecentValue",
		TEAMSPACES_DELETE_TASK_ENABLED: "teamspaceDeleteTaskEnabled",
		TEAMSPACES_DELETE_TASK_ID: "teamspaceDeleteTaskId",
		TEAMSPACES_DELETE_TASK_PWD: "teamspaceDeleteTaskPwd",
		TEAMSPACES_DELETE_TASK_PWD_NEW: "teamspaceDeleteTaskPwdNew",
		TASK_MGR_PROXY_USER_ID: "taskMgrProxyUserId",
		TASK_MGR_PROXY_PWD: "taskMgrProxyPwd",
		TASK_MGR_PROXY_PWD_NEW: "taskMgrProxyPwdNew",
		SERVER_NAME: "serverName",
		TYPE: "type",
		NAME: "name",
		DOCUMENT_SYSTEM_PROPERTIES: "documentSystemProperties",
		FOLDER_SYSTEM_PROPERTIES: "folderSystemProperties",
		UNIFIED_SEARCHES_ENABLED: "unifiedSearchesEnabled",
		SEARCH_MAX_RESULTS: "searchMaxResults",
		TIMEOUT_IN_SECONDS: "timeoutInSeconds",
		FOLDER_DEF_COLS: "folderDefCols",
		FOLDER_MAGAZINE_DEF_COLS: "folderMagazineDefCols",
		SEARCH_DEF_COLS: "searchDefCols",
		SEARCH_MAGAZINE_DEF_COLS: "searchMagazineDefCols",
		DOC_NAME_PROPERTY: "docNameProp",
		FOLDER_NAME_PROPERTY: "folderNameProp",
		DOC_NAME_PREFILL_FILE_NAME: "docNamePropSetWithFileName",
		SEARCH_FILTERED_DOCUMENT_PROPERTIES: "searchFilteredDocumentProperties",
		SEARCH_FILTERED_FOLDER_PROPERTIES: "searchFilteredFolderProperties",
		MATCH_ALL: "matchAll",
		RESTRICTED_SEARCH_DOCUMENTS_TYPE: "restrictedSearchDocumentsType",
		RESTRICTED_SEARCH_FOLDERS_TYPE: "restrictedSearchFoldersType",
		DEFAULT_SEARCH_TYPE: "defaultSearchType",
		DEFAULT_SEARCH_VERSION: "defaultSearchVersion",
		ALL_CLASSES_SEARCH: "allClassesSearch",

		STATUS_DOC_NOTES: "statusDocNotes",
		STATUS_DOC_HOLD: "statusDocHold",
		STATUS_DOC_CHECKED_OUT: "statusDocCheckedOut",
		STATUS_DOC_BOOKMARKS: "statusDocBookmarks",
		STATUS_DOC_DECLARED_RECORD: "statusDocDeclaredRecord",
		STATUS_DOC_MINOR_VERSIONS: "statusDocMinorVersions",
		STATUS_DOC_COMPOUND_DOCUMENT: "statusDocCompoundDocument",
		STATUS_WORK_ITEM_CHECKED_OUT: "statusWorkItemCheckedOut",
		STATUS_WORK_ITEM_LOCKED: "statusWorkItemLocked",
		STATUS_WORK_ITEM_SUSPENDED: "statusWorkItemSuspended",
		STATUS_WORK_ITEM_DEADLINE: "statusWorkItemDeadline",

		// OD specific
		PORT_NUMBER: "portNumber",
		// OD repository
		AFP2PD_CONFIG_FILE: "afp2pdfConfigFile",
		XFORM_XML_FILE: "transformXMLFile",
		OD_SSL: "odSSL",
		OD_KEYRING_DBFILE: "odKeyringDBFile",
		OD_KEYRING_STASHFILE: "odKeyringStashFile",
		CUSTOM_PROPS: "customProperties",
		MAX_FOLDERS: "maxFolders",
		MAX_HITS: "maxHits",
		FOLDER_SEARCH_EXPRESSION: "folderSearchExpression",
		// OD global
		AFP2PD_INSTALL_DIR: "afp2pdfInstallDir",
		LANGUAGE: "language",
		TEMP_DIR: "tempDir",
		TRACE_DIR: "traceDir",
		TRACE_LEVEL: "traceLevel",

		// P8 specific
		OBJECT_STORE: "objectStore",
		OBJECT_STORE_DISPLAY_NAME: "objectStoreName",
		ADD_AS_MAJOR_VERSION: "addAsMajorVersion",
		CHECKIN_AS_MAJOR_VERSION: "checkinAsMajorVersion",
		ANNOTATION_SECURITY: "annotationSecurity",
		CONNECTION_POINT: "connectionPoint",
		INCLUDE_WORKFLOW_DEFINITION: "includeWorkflowDefinition",
		INCLUDE_FORM_TEMPLATE: "includeFormTemplate",

		P8_DOWNLOAD_RECORD: "p8DownloadRecord",
		P8_DOWNLOAD_RECORD_IGNORE_USER_IDS: "p8DownloadRecordIgnoreUsersIds",
		P8_DOWNLOAD_RECORD_IGNORE_USER_OBJS: "p8DownloadRecordIgnoreUsersObjs",

		// P8 & CMIS
		PROTOCOL: "protocol",

		// CMIS
		CMIS_REPOS_ID: "cmisRepositoryID",
		USE_GZIP_ENCODING: "useGzipEncoding",

		// CM specific
		USE_SSO: "useSSO",
		LANGUAGE_CODES: "languageCodes",

		// @since 2.0.3
		ANONYMOUS_ACCESS_ENABLED: "anonymousAccessEnabled",

		// Plugin specific
		PLUGIN_CONFIGURATION: "pluginConfiguration",

		// @obsoleted in ICN 2.0.2
		PDF_CONVERSION: "pdfConversion",

		FOLDERING_ENABLED: "folderingEnabled",
		ROOT_FOLDER_ID: "rootFolderId",

		// for Office integration:
		DEFAULT_EMAIL_CLASS_FOR_ADD: "defaultEmailClassForAdd",
		DEFAULT_FOLDER_CLASS_FOR_ADD: "defaultFolderClassForAdd",
		DELIMITER_FOR_OFFICE_PROPERTY: "delimiterForOfficeProperty",
		
		//@since 3.0
		OFFICE_ONLINE_ENABLED: "officeOnlineEnabled",	
		//@since 3.0.1
		EDIT_SERVICE_ENABLED: "editServiceEnabled",
		EDIT_SERVICE_CATEGORIES:"editServiceCategories",

		DOC_MODEL_ONLY_ENABLED: "enableOnlyDocumentItemTypes",
		// Note: the following are no longer needed for CM Repository Config -
		DIRECT_RETRIEVE_ENABLED: "directRetrieveEnabled",
		MAX_RESULTS: "maxResults",
		MAX_ITEM_TYPES: "maxItemTypes",
		MAX_WORKLISTS: "maxWorklists",
		UPDATE_STORAGE_COLLECTION: "UpdateStorageCollection",
		KEEP_IN_AUTO_FOLDER: "keepInAutoFolder",
		INCLUDE_MIME_TYPES_IN_SEARCH_RESULTS: "includeMIMETypesInSearchResults",
		
		ACTION_LIST_ENABLED: "actionListEnabled",

		// transient variable
		tempId: null,

		// constant definition
		OPERATOR_DATETIME: "datetimeOp",
		OPERATOR_FLOAT: "floatOp",
		OPERATOR_INTEGER: "integerOp",
		OPERATOR_STRING: "stringOp",
		OPERATOR_BOOLEAN: "booleanOp",
		OPERATOR_OBJECT: "objectOp",
		OPERATOR_USER: "userOp",
		OPERATOR_ID: "idOp",

		//@since 2.0.3
		ENTRY_TEMPLATE_ENABLED: "entryTemplatesEnabled",

		//@since 2.0.3
		COMPOUND_DOCUMENTS_ENABLED: "compoundDocumentsEnabled",

		//@since 2.0.3
		DATABASE_ENCODING_UTF8: "databaseEncodingUTF8",

		//@since 2.0.3
		BROWSE_SUPPORTED: "browseSupported",
		SEARCH_SUPPORTED: "searchSupported",
		DESKTOP_AUTHENTICATION_SUPPORTED: "desktopAuthenticationSupported",
		
		//@since 2.0.3
		SYNC_ENABLED: "syncEnabled",
		SYNC_REPOSITORY_ID: "syncRepositoryId",

		//@since 2.0.3.4
		SYNC_UPDATE_STATE: "syncUpdateStatus",

		//@since 2.0.3 FP2
		INCLUDE_ATTR_GROUP_IN_ATTR_DISPLAY_NAME: "includeAttrGroupInAttrDisplayName",

		TEAMSPACE_TEMPLATE_PERMISSIONS: "teamspaceTemplatePermissions",
		TEAMSPACE_UPDATE_STATE: "teamspacUpdateStatus",
		TEAMSPACE_PERMISSIONS: "teamspacePermissions",
		SEARCH_PERMISSIONS: "searchPermissions",
		ENTRY_TEMPLATE_PERMISSIONS: "entryTemplatePermissions",
		OFFICE_TEMPLATE_PERMISSIONS: "officeTemplatePermissions",
		DRAFT_PERMISSIONS: "draftPermissions",
		CM_ENTRY_TEMPLATE_ROOT_FOLDER_ASSOCIATIONS: "cmEntryTemplateRootFolderAssociations",
		USE_PART_FILE_NAME: "usePartFileName",

		CONNECTIONS_COMMUNITY_LIBRARY: "conCommunityLib",
		CONNECTIONS_URL_HTTP: "conUrlHttp",
		CONNECTIONS_URL_HTTPS: "conUrlHttps",
		CONNECTIONS_SEEDLIST_ENABLE: "conSeedlistEnable",
		CONNECTIONS_ANONYMOUS_ENABLE: "conAnonymousEnable",
		CONNECTIONS_ANONYMOUS_USER_ID: "conAnonymousUserId",
		CONNECTIONS_ANONYMOUS_USER_OBJ: "conAnonymousUserObj",

		CONNECTIONS_REVIEW_ADMIN_USER_IDS: "conReviewAdminUserIds",
		CONNECTIONS_REVIEW_ADMIN_USER_OBJS: "conReviewAdminUserObjs",
		CONNECTIONS_GLOBAL_ADMIN_USER_IDS: "conGlobalAdminUserIds",
		CONNECTIONS_GLOBAL_ADMIN_USER_OBJS: "conGlobalAdminUserObjs",

		CONNECTIONS_REVIEW_ADMIN_GROUP_IDS: "conReviewAdminGroupIds",
		CONNECTIONS_REVIEW_ADMIN_GROUP_OBJS: "conReviewAdminGroupObjs",
		CONNECTIONS_GLOBAL_ADMIN_GROUP_IDS: "conGlobalAdminGroupIds",
		CONNECTIONS_GLOBAL_ADMIN_GROUP_OBJS: "conGlobalAdminGroupObjs",

		CONNECTIONS_ACTIVITY_STREAM_ENABLE: "conActivityStreamEnable",
		CONNECTIONS_ACTIVITY_STREAM_USER_ID: "conActivityUserId",
		CONNECTIONS_ACTIVITY_STREAM_PASSWORD: "conActivityStreamPw",
		CONNECTIONS_ACTIVITY_STREAM_CONNECTIONS_URL: "conActivityStreamConUrl",
		CONNECTIONS_ACTIVITY_STREAM_IGNORE_USER_IDS: "conActivityStreamIgnoreUserIds",
		CONNECTIONS_ACTIVITY_STREAM_IGNORE_USER_OBJS: "conActivityStreamIgnoreUserObjs",
		CONNECTIONS_ACTIVITY_STREAM_IGNORE_GROUP_IDS: "conActivityStreamIgnoreGroupIds",
		CONNECTIONS_ACTIVITY_STREAM_IGNORE_GROUP_OBJS: "conActivityStreamIgnoreGroupObjs",

		// @since 2.0.3.5 (Box-specific)
		OAUTH_ENABLED: "oAuthEnabled",
		OAUTH_CLIENT_ID: "oAuthClientID",
		OAUTH_CLIENT_SECRET: "oAuthClientSecret",
		OAUTH_ENDPOINT: "oAuthEndpoint",
		BOX_OAUTH_SUBDOMAIN: "boxOAuthSubdomain",

		// @since 2.0.3.6 (Box-specific)
		BOX_COPY_ENABLED: "boxCopyEnabled",
		BOX_SHARE_ENABLED: "boxShareEnabled",
		
		//@deprecated
		SHARE_ADMIN_USER_NAME: "shareAdminUserName",
		//@deprecated
		SHARE_ADMIN_USER_ID: "shareAdminUserId",
		
		// @since 3.0
		BOX_ENTERPRISE_ID: "boxEnterpriseId",
		BOX_PUBLIC_KEY_ID: "boxPublicKeyId",
		BOX_PRIVATE_KEY_PATH: "boxPrivateKeyPath",
		BOX_SERVER_TOKEN_ENABLED: "boxServerTokenEnabled",
		
		CORS_UPLOAD_ENABLED: "corsUploadEnabled",

		// @since 2.0.3.6
		IS_WARN: "isWarn",

		// CM all classes search options
		// @since 2.0.3.5
		ALL_CLASSES_SEARCH_HIDDEN: "hidden",
		ALL_CLASSES_SEARCH_DOCUMENTS_INCLUDES_ONLY_DOCUMENTS: "documentsIncludesOnlyDocuments",
		ALL_CLASSES_SEARCH_DOCUMENTS_INCLUDES_NON_FOLDERS: "documentsIncludesNonFolders",

		// @since 2.0.3.7 
		APPROVAL_WORKFLOW_ENABLED: "approvalWorkflowEnabled",

		// @since 3.0
		REDACTION_ENABLED: "redactionEnabled",
		REDACTION_PERMISSIONS: "redactionPermissions",
		REDACTION_POLICY_PERMISSIONS: "redactionPolicyPermissions",
		BURN_PDF_TO_PDF: "burnPDFToPDF",
		// @since 3.0.1
		REDACTION_ALLOW_MERGE_AND_SPLIT: "redactionAllowMergeSplit",

		_DEFAULT_CONFIG: null,

		// private connection information used by DesktopWorkflow tab.
		connected: false,

		constructor: function(id, name, action) {
			this.logDebug("RepositoryReadConfig constructor");
			if (!this._DEFAULT_CONFIG) {
				this._DEFAULT_CONFIG = {};
			}
		},

		getIncludeMIMETypesInSearchResults: function() {
			return this.getValue(this.INCLUDE_MIME_TYPES_IN_SEARCH_RESULTS);
		},

		getKeepInAutoFolder: function() {
			return this.getValue(this.KEEP_IN_AUTO_FOLDER);
		},

		getUpdateStorageCollection: function() {
			return this.getValue(this.UPDATE_STORAGE_COLLECTION);
		},

		getMaxWorklists: function() {
			return this.getValue(this.MAX_WORKLISTS);
		},

		getMaxItemTypes: function() {
			return this.getValue(this.MAX_ITEM_TYPES);
		},

		getLanguageCodes: function() {
			return this.getValue(this.LANGUAGE_CODES);
		},

		getRootFolderId: function() {
			return this.getValue(this.ROOT_FOLDER_ID);
		},

		getMaxResults: function() {
			return this.getValue(this.MAX_RESULTS);
		},

		getUseSSO: function() {
			return this.getValue(this.USE_SSO);
		},

		/**
		 * @since 2.0.3
		 */
		getAnonymousAccessEnabled: function() {
			return this.getValue(this.ANONYMOUS_ACCESS_ENABLED);
		},

		getDirectRetrieveEnabled: function() {
			return this.getValue(this.DIRECT_RETRIEVE_ENABLED);
		},
		
		getActionListEnabled: function() {
			return this.getValue(this.ACTION_LIST_ENABLED);
		},

		getUsePartFileName: function() {
			return this.getValue(this.USE_PART_FILE_NAME);
		},

		getDocModelOnlyEnabled: function() {
			return this.getValue(this.DOC_MODEL_ONLY_ENABLED);
		},

		getConnectionPoint: function() {
			return this.getValue(this.CONNECTION_POINT);
		},

		getObjectStore: function() {
			return this.getValue(this.OBJECT_STORE);
		},

		getCMISReposID: function() {
			return this.getValue(this.CMIS_REPOS_ID);
		},

		getUseGzipEncoding: function() {
			return this.getValue(this.USE_GZIP_ENCODING);
		},

		getObjectStoreDisplayName: function() {
			return this.getValue(this.OBJECT_STORE_DISPLAY_NAME);
		},

		getProtocol: function() {
			return this.getValue(this.PROTOCOL);
		},

		getAddAsMajorVersion: function() {
			return this.getValue(this.ADD_AS_MAJOR_VERSION);
		},

		getCheckinAsMajorVersion: function() {
			return this.getValue(this.CHECKIN_AS_MAJOR_VERSION);
		},

		getIncludeWorkflowDefinition: function() {
			return this.getValue(this.INCLUDE_WORKFLOW_DEFINITION);
		},

		getIncludeFormTemplate: function() {
			return this.getValue(this.INCLUDE_FORM_TEMPLATE);
		},

		getAnnotationSecurity: function() {
			return this.getValue(this.ANNOTATION_SECURITY);
		},

		getFolderSearchExpression: function() {
			return this.getValue(this.FOLDER_SEARCH_EXPRESSION);
		},

		getMaxHits: function() {
			return this.getValue(this.MAX_HITS);
		},

		getMaxFolders: function() {
			return this.getValue(this.MAX_FOLDERS);
		},

		// OD Repository
		getAfp2PdfConfigFile: function() {
			return this.getValue(this.AFP2PD_CONFIG_FILE);
		},

		getTransformXMLFile: function() {
			return this.getValue(this.XFORM_XML_FILE);
		},

		getODSSL: function() {
			return this.getValue(this.OD_SSL);
		},

		getODKeyringDBFile: function() {
			return this.getValue(this.OD_KEYRING_DBFILE);
		},

		getODKeyringStashFile: function() {
			return this.getValue(this.OD_KEYRING_STASHFILE);
		},

		getCustomProperties: function() {
			return this.getValue(this.CUSTOM_PROPS);
		},

		// OD Global
		getAfp2PdfInstallDirectory: function() {
			return this.getValue(this.AFP2PD_INSTALL_DIR);
		},

		getLanguage: function() {
			return this.getValue(this.LANGUAGE);
		},

		getTempDir: function() {
			return this.getValue(this.TEMP_DIR);
		},

		getTraceDir: function() {
			return this.getValue(this.TRACE_DIR);
		},

		getTraceLevel: function() {
			return this.getValue(this.TRACE_LEVEL);
		},

		getPortNumber: function() {
			return this.getValue(this.PORT_NUMBER);
		},

		getMaxInMemoryRetrieveSize: function() {
			return this.getValue(this.MAX_IN_MEMORY_RETRIEVE_SIZE);
		},

		getMaxDownloadSize: function() {
			return this.getValue(this.MAX_DOWNLOAD_SIZE);
		},

		getTimestampFormat: function() {
			return this.getValue(this.TIMESTAMP_FORMAT);
		},

		getTimeFormat: function() {
			return this.getValue(this.TIME_FORMAT);
		},

		getDateFormat: function() {
			return this.getValue(this.DATE_FORMAT);
		},

		getTeamspacesEnabled: function() {
			return this.getValue(this.TEAMSPACES_ENABLED);
		},

		getUnifiedSearchesEnabled: function() {
			return this.getValue(this.UNIFIED_SEARCHES_ENABLED);
		},

		getEntryTemplatesEnabled: function() {
			return this.getValue(this.ENTRY_TEMPLATE_ENABLED);
		},

		getCompoundDocumentsEnabled: function() {
			return this.getValue(this.COMPOUND_DOCUMENTS_ENABLED);
		},

		getDatabaseEncodingUTF8: function() {
			return this.getValue(this.DATABASE_ENCODING_UTF8);
		},

		/**
		 * A return value of zero means maximum for P8 and CM. In the OD system, there is no infinitive concept; it has
		 * to be a finite number.
		 */
		getSearchMaxResults: function() {
			return this.getValue(this.SEARCH_MAX_RESULTS);
		},

		/**
		 * There is no timeout setting for OD and CM8.
		 */
		getTimeoutInSeconds: function() {
			return this.getValue(this.TIMEOUT_IN_SECONDS);
		},

		getServerName: function() {
			return this.getValue(this.SERVER_NAME);
		},

		getDocNameProperty: function() {
			return this.getValue(this.DOC_NAME_PROPERTY);
		},

		/**
		 * @since 2.0.3.6
		 */
		getDocNamePropSetWithFileName: function() {
			var bool = this.getValue(this.DOC_NAME_PREFILL_FILE_NAME, "false");
			return (bool === true || bool == "true");
		},

		getFolderNameProperty: function() {
			return this.getValue(this.FOLDER_NAME_PROPERTY);
		},

		getFolderDefaultColumns: function() {
			return this.getValues(this.FOLDER_DEF_COLS, null);
		},

		/**
		 * @since 2.0.2
		 */
		getFolderMagazineDefaultColumns: function() {
			return this.getValues(this.FOLDER_MAGAZINE_DEF_COLS, null);
		},

		/**
		 * @since 2.0.2
		 */
		getTeamspaceOwnerModifyRoles: function() {
			var bool = this.getValue(this.TEAMSPACES_OWNER_MODIFY_ROLE, "false");
			return (bool === true || bool == "true");
		},

		/**
		 * @since 2.0.3
		 */
		getDisplayRecentTeamspaces: function() {
			var bool = this.getValue(this.TEAMSPACES_DISPLAY_RECENT, "false");
			return (bool === true || bool == "true");
		},

		/**
		 * @since 2.0.3
		 */
		getDisplayRecentTeamspacesValue: function() {
			var value = this.getValue(this.TEAMSPACES_DISPLAY_RECENT_VALUE);
			return value;
		},

		/**
		 * @since 2.0.3
		 */
		getEnableTaskManagerDelete: function() {
			var bool = this.getValue(this.TEAMSPACES_DELETE_TASK_ENABLED, "false");
			return (bool === true || bool == "true");
		},

		/**
		 * @since 2.0.3
		 * @deprecated
		 */
		getTeamspaceTaskManagerPwd: function() {
			var value = this.getValue(this.TEAMSPACES_DELETE_TASK_PWD);
			return value;
		},

		/**
		 * @since 2.0.3
		 * @deprecated
		 */
		getTeamspaceTaskManagerId: function() {
			var value = this.getValue(this.TEAMSPACES_DELETE_TASK_ID);
			return value;
		},

		/**
		 * @since 2.0.3.6
		 */
		getTaskManagerProxyUserPwd: function() {
			var value = this.getValue(this.TASK_MGR_PROXY_PWD);
			return value;
		},

		/**
		 * @since 2.0.3.6
		 */
		getTaskManagerProxyUserId: function() {
			var value = this.getValue(this.TASK_MGR_PROXY_USER_ID);
			return value;
		},

		getSearchMagazineDefaultColumns: function() {
			return this.getValues(this.SEARCH_MAGAZINE_DEF_COLS, null);
		},

		getSearchDefaultColumns: function() {
			return this.getValues(this.SEARCH_DEF_COLS, null);
		},

		getSearchFilteredDocumentProperties: function() {
			return this.getValues(this.SEARCH_FILTERED_DOCUMENT_PROPERTIES, null);
		},

		getSearchFilteredFolderProperties: function() {
			return this.getValues(this.SEARCH_FILTERED_FOLDER_PROPERTIES, null);
		},

		getMatchAll: function() {
			return this.getValue(this.MATCH_ALL);
		},

		/**
		 * @since 2.0.2
		 */
		getDefaultSearchType: function() {
			return this.getValue(this.DEFAULT_SEARCH_TYPE);
		},

		/**
		 * @since 2.0.3.6
		 */
		getRestrictedSearchDocumentsType: function() {
			return this.getValue(this.RESTRICTED_SEARCH_DOCUMENTS_TYPE);
		},

		/**
		 * @since 2.0.3.6
		 */
		getRestrictedSearchFoldersType: function() {
			return this.getValue(this.RESTRICTED_SEARCH_FOLDERS_TYPE);
		},

		/**
		 * @since 2.0.3
		 */
		getDefaultSearchVersion: function() {
			return this.getValue(this.DEFAULT_SEARCH_VERSION);
		},

		/**
		 * @since 2.0.3.5
		 */
		getAllClassesSearch: function() {
			return this.getValue(this.ALL_CLASSES_SEARCH);
		},

		getType: function() {
			return this.getValue(this.TYPE);
		},

		getDocumentSystemProperties: function() {
			return this.getValues(this.DOCUMENT_SYSTEM_PROPERTIES, null);
		},

		getFolderSystemProperties: function() {
			return this.getValues(this.FOLDER_SYSTEM_PROPERTIES, null);
		},

		getStatusDocNotes: function() {
			var bool = this.getValue(this.STATUS_DOC_NOTES, "false");
			return (bool === true || bool == "true");
		},

		getStatusDocHold: function() {
			var bool = this.getValue(this.STATUS_DOC_HOLD, "false");
			return (bool === true || bool == "true");
		},

		getStatusDocCheckedOut: function() {
			var bool = this.getValue(this.STATUS_DOC_CHECKED_OUT, "false");
			return (bool === true || bool == "true");
		},

		getStatusDocBookmarks: function() {
			var bool = this.getValue(this.STATUS_DOC_BOOKMARKS, "false");
			return (bool === true || bool == "true");
		},

		getStatusDocDeclaredRecord: function() {
			var bool = this.getValue(this.STATUS_DOC_DECLARED_RECORD, "false");
			return (bool === true || bool == "true");
		},

		getStatusDocMinorVersions: function() {
			var bool = this.getValue(this.STATUS_DOC_MINOR_VERSIONS, "false");
			return (bool === true || bool == "true");
		},

		getStatusDocCompoundDocument: function() {
			var bool = this.getValue(this.STATUS_DOC_COMPOUND_DOCUMENT, "false");
			return (bool === true || bool == "true");
		},

		getStatusWorkItemCheckedOut: function() {
			var bool = this.getValue(this.STATUS_WORK_ITEM_CHECKED_OUT, "false");
			return (bool === true || bool == "true");
		},

		getStatusWorkItemLocked: function() {
			var bool = this.getValue(this.STATUS_WORK_ITEM_LOCKED, "false");
			return (bool === true || bool == "true");
		},

		getStatusWorkItemSuspended: function() {
			var bool = this.getValue(this.STATUS_WORK_ITEM_SUSPENDED, "false");
			return (bool === true || bool == "true");
		},

		getStatusWorkItemDeadline: function() {
			var bool = this.getValue(this.STATUS_WORK_ITEM_DEADLINE, "false");
			return (bool === true || bool == "true");
		},

		getFolderingEnabled: function() {
			var bool = this.getValue(this.FOLDERING_ENABLED, "false");
			return (bool === true || bool == "true");
		},

		getDefaultEmailClassForAdd: function() {
			return this.getValue(this.DEFAULT_EMAIL_CLASS_FOR_ADD);
		},

		getDefaultFolderClassForAdd: function() {
			return this.getValue(this.DEFAULT_FOLDER_CLASS_FOR_ADD);
		},

		/**
		 * @since 2.0.3 FP6
		 */
		getDelimiterForOfficeProperty: function() {
			return this.getValue(this.DELIMITER_FOR_OFFICE_PROPERTY);
		},

		/**
		 * @since 3.0
		 */
		getOfficeOnlineEnabled: function() {
			var bool = false;
			var officeOnlineEnabled = this.getValue(this.OFFICE_ONLINE_ENABLED);
			if (officeOnlineEnabled == true || officeOnlineEnabled == "true") {
				bool = true;
			}
			return bool;
		},
		
		/**
		 * @since 3.0.1
		 */
		getEditServiceEnabled: function() {
			var bool = false;
			var editServiceEnabled = this.getValue(this.EDIT_SERVICE_ENABLED);
			if (editServiceEnabled == true || editServiceEnabled == "true") {
				bool = true;
			}
			return bool;
		},
		
		/**
		 * @since 3.0.1
		 */
		
		getEditServiceCategories: function(callback, params){
			var editServiceCategoriesObjects = [];
			this.listConfig("editServiceCategories", lang.hitch(this, function(list) {
				for ( var i in list) {
					var entry = list[i];
					var id = entry.id ? entry.id : "" + i;
					var editServiceCategory = EditServiceCategoryConfig.createEditServiceCategoryConfig(id);
					lang.mixin(editServiceCategory, {
						_attributes: entry
					});
					editServiceCategoriesObjects.push(editServiceCategory);
				}
				if (callback) {
					callback(editServiceCategoriesObjects);
				}
			}), "true", params);
		},
		
		getPluginConfiguration: function() {
			return this.getValue(this.PLUGIN_CONFIGURATION);
		},

		//@since 2.0.3
		getBrowseSupported: function() {
			var bool = true;
			var browseSupported = this.getValue(this.BROWSE_SUPPORTED);
			if (browseSupported == false || browseSupported == "false") {
				bool = false;
			}
			return bool;
		},

		//@since 2.0.3
		getSearchSupported: function() {
			var bool = true;
			var searchSupported = this.getValue(this.SEARCH_SUPPORTED);
			if (searchSupported == false || searchSupported == "false") {
				bool = false;
			}
			return bool;
		},

		//@since 2.0.3
		getDesktopAuthenticationSupported: function() {
			var bool = true;
			var desktopAuthenticationSupported = this.getValue(this.DESKTOP_AUTHENTICATION_SUPPORTED);
			var boxServerTokenEnabled = this.getValue(this.BOX_SERVER_TOKEN_ENABLED);
			if (desktopAuthenticationSupported == false || desktopAuthenticationSupported == "false" || boxServerTokenEnabled == true || boxServerTokenEnabled == "true") {
				bool = false;
			}
			return bool;
		},
		
		/**
		 * @since 2.0.3
		 */
		getSyncEnabled: function() {
			var bool = false;
			var syncEnabled = this.getValue(this.SYNC_ENABLED);
			if (syncEnabled == true || syncEnabled == "true") {
				bool = true;
			}
			return bool;
		},

		/**
		 * @since 2.0.3
		 */
		getSyncRepositoryId: function() {
			return this.getValue(this.SYNC_REPOSITORY_ID);
		},

		/**
		 * @private
		 */
		_getSyncUpdateState: function() {
			return this.getValue(this.SYNC_UPDATE_STATE);
		},

		/**
		 * Returns the collection of add on permission levels to support displaying 
		 * detailed tooltips in the UserGroupPrivilegePane.
		 * 
		 * These settings are not configurable and are not persisted.
		 * 
		 * @since 2.0.3.8
		 */
		getAddOnTooltipPermissionLevels: function() {
			var levels = null;
			if (this.getType() == "p8") {
				levels = {
					// Display access levels that make sense for class security:
					// read properties, read permissions, modify properties, 
					// create instance, and modify permissions.
					"default": [
						{
							id: "VIEW_PROPERTIES",
							name: this.messages.view_properties_level,
							mask: 0x00000001 // `1 READ
						},
						{
							id: "VIEW_PERMISSIONS",
							name: this.messages.view_permissions_level,
							mask: 0x00020000, // 131072 READ_ACL
						},
						{
							id: "CREATE_INSTANCE",
							name: this.messages.create_instance_level,
							mask: 0x00000100, // 256 CREATE_INSTANCE
						}
					],
					// Redaction policy Editors is a special case, security for
					// instances of redaction policy objects plus the class definition
					// create instance permission.
					"editors": [
					    {
							id: "VIEW_PROPERTIES",
							name: this.messages.view_properties_level,
							mask: 0x00000001 // `1 READ
						},
						{
							id: "VIEW_PERMISSIONS",
							name: this.messages.view_permissions_level,
							mask: 0x00020000, // 131072 READ_ACL
						},
						{
							id: "MODIFY_PROPERTIES",
							name: this.messages.modify_properties_level,
							mask: 0x00000002, // 2 WRITE
						},
						{
							id: "CREATE_INSTANCE",
							name: this.messages.create_instance_level,
							mask: 0x00000100, // 256 CREATE_INSTANCE
						},
						{
							id: "DELETE_DOCUMENT",
							// Use the "Delete item" label, since the redaction policy objects are custom objects not documents.
							name: this.messages.delete_item_level,
							mask: 0x00010000, // 65536 DELETE
						}
					],
					// For the case of permissions assigned outside of our
					// model, show more permission levels.
					"others": [{
					 		id: "VIEW_PROPERTIES",
					 		name: this.messages.view_properties_level,
					 		mask: 0x00000001 // `1 READ
					 	},
					 	{
					 		id: "VIEW_PERMISSIONS",
					 		name: this.messages.view_permissions_level,
					 		mask: 0x00020000, // 131072 READ_ACL
					 	},
						{
							id: "LINK",
							name: ecm.messages.link_level,
							mask: 0x00000010, // 16 Link
						},
					 	{
					 		id: "MODIFY_PROPERTIES",
					 		name: this.messages.modify_properties_level,
					 		mask: 0x00000002, // 2 WRITE
					 	},
					 	{
					 		id: "CREATE_INSTANCE",
					 		name: this.messages.create_instance_level,
					 		mask: 0x00000100, // 256 CREATE_INSTANCE
					 	},
					 	{
					 		id: "DELETE_DOCUMENT",
					 		name: this.messages.delete_document_level,
					 		mask: 0x00010000, // 65536 DELETE
					 	},
					 	{
					 		id: "MODIFY_PERMISSIONS",
					 		name: ecm.messages.modify_document_permissions_level,
					 		mask: 0x00040000, // 262144 WRITE_ACL
					 	},
						{
							id: "MODIFY_OWNER",
							name: ecm.messages.modify_owner_level,
							mask: 0x00080000, // 524288 WRITE_ANY_OWNER
						}
					],
					// Show the same detailed view as for others.
					"owners": [{
					 		id: "VIEW_PROPERTIES",
					 		name: this.messages.view_properties_level,
					 		mask: 0x00000001 // `1 READ
					 	},
					 	{
					 		id: "VIEW_PERMISSIONS",
					 		name: this.messages.view_permissions_level,
					 		mask: 0x00020000, // 131072 READ_ACL
					 	},
						{
							id: "LINK",
							name: ecm.messages.link_level,
							mask: 0x00000010, // 16 Link
						},
					 	{
					 		id: "MODIFY_PROPERTIES",
					 		name: this.messages.modify_properties_level,
					 		mask: 0x00000002, // 2 WRITE
					 	},
					 	{
					 		id: "CREATE_INSTANCE",
					 		name: this.messages.create_instance_level,
					 		mask: 0x00000100, // 256 CREATE_INSTANCE
					 	},
					 	{
					 		id: "DELETE_DOCUMENT",
					 		name: this.messages.delete_document_level,
					 		mask: 0x00010000, // 65536 DELETE
					 	},
					 	{
					 		id: "MODIFY_PERMISSIONS",
					 		name: ecm.messages.modify_document_permissions_level,
					 		mask: 0x00040000, // 262144 WRITE_ACL
					 	},
						{
							id: "MODIFY_OWNER",
							name: ecm.messages.modify_owner_level,
							mask: 0x00080000, // 524288 WRITE_ANY_OWNER
						}
					]
				};
			}
			return levels;
		},

		/**
		 * @since 2.0.3
		 */
		getTeamspaceTemplatePermissions: function() {
			return this.getValue(this.TEAMSPACE_TEMPLATE_PERMISSIONS);
		},

		/**
		 * @private
		 */
		_getTeamspaceUpdateState: function() {
			return this.getValue(this.TEAMSPACE_UPDATE_STATE);
		},

		/**
		 * @since 2.0.3
		 */
		getTeamspacePermissions: function() {
			return this.getValue(this.TEAMSPACE_PERMISSIONS);
		},

		/**
		 * @since 2.0.3
		 */
		getSearchPermissions: function() {
			return this.getValue(this.SEARCH_PERMISSIONS);
		},

		/**
		 * @since 2.0.3
		 */
		getEntryTemplatePermissions: function() {
			return this.getValue(this.ENTRY_TEMPLATE_PERMISSIONS);
		},
		
		/**
		 * @since 3.0.1
		 */
		getOfficeTemplatePermissions: function() {
			return this.getValue(this.OFFICE_TEMPLATE_PERMISSIONS);
		},

		/**
		 * @since 3.0.1
		 */
		getDraftPermissions: function() {
			return this.getValue(this.DRAFT_PERMISSIONS);
		},
		
		/**
		 * @since 2.0.3
		 */
		getCmEntryTemplateRootFolderAssociations: function(val) {
			return this.getValue(this.CM_ENTRY_TEMPLATE_ROOT_FOLDER_ASSOCIATIONS);
		},

		/**
		 * @since 2.0.3
		 */
		getP8DownloadRecord: function() {
			return this.getValue(this.P8_DOWNLOAD_RECORD);
		},

		getP8DownloadRecordIgnoreUserIds: function() {
			return this.getValue(this.P8_DOWNLOAD_RECORD_IGNORE_USER_IDS);
		},

		getP8DownloadRecordIgnoreUserObjs: function() {
			return this.getValue(this.P8_DOWNLOAD_RECORD_IGNORE_USER_OBJS);
		},

		getConnectionsReviewAdminUserIds: function() {
			return this.getValue(this.CONNECTIONS_REVIEW_ADMIN_USER_IDS);
		},

		getConnectionsGlobalAdminUserIds: function() {
			return this.getValue(this.CONNECTIONS_GLOBAL_ADMIN_USER_IDS);
		},

		getConnectionsReviewAdminUserObjs: function() {
			return this.getValue(this.CONNECTIONS_REVIEW_ADMIN_USER_OBJS);
		},

		getConnectionsGlobalAdminUserObjs: function() {
			return this.getValue(this.CONNECTIONS_GLOBAL_ADMIN_USER_OBJS);
		},

		getConnectionsReviewAdminGroupIds: function() {
			return this.getValue(this.CONNECTIONS_REVIEW_ADMIN_GROUP_IDS);
		},

		getConnectionsGlobalAdminGroupIds: function() {
			return this.getValue(this.CONNECTIONS_GLOBAL_ADMIN_GROUP_IDS);
		},

		getConnectionsReviewAdminGroupObjs: function() {
			return this.getValue(this.CONNECTIONS_REVIEW_ADMIN_GROUP_OBJS);
		},

		getConnectionsGlobalAdminGroupObjs: function() {
			return this.getValue(this.CONNECTIONS_GLOBAL_ADMIN_GROUP_OBJS);
		},

		getConnectionsCommunityLibrary: function() {
			return this.getValue(this.CONNECTIONS_COMMUNITY_LIBRARY);
		},

		getConnectionsUrlHttp: function() {
			return this.getValue(this.CONNECTIONS_URL_HTTP);
		},

		getConnectionsUrlHttps: function() {
			return this.getValue(this.CONNECTIONS_URL_HTTPS);
		},

		getConnectionsSeedlistEnable: function() {
			return this.getValue(this.CONNECTIONS_SEEDLIST_ENABLE);
		},

		getConnectionsAnonymousEnable: function() {
			return this.getValue(this.CONNECTIONS_ANONYMOUS_ENABLE);
		},

		getConnectionsAnonymousUserId: function() {
			return this.getValue(this.CONNECTIONS_ANONYMOUS_USER_ID);
		},

		getConnectionsAnonymousUserObj: function() {
			return this.getValue(this.CONNECTIONS_ANONYMOUS_USER_OBJ);
		},

		getConnectionsActivityStreamEnable: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_ENABLE);
		},

		getConnectionsActivityStreamUserId: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_USER_ID);
		},

		getConnectionsActivityStreamConnectionsUrl: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_CONNECTIONS_URL);
		},

		getConnectionsActivityStreamPassword: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_PASSWORD);
		},

		getConnectionsActivityStreamIgnoreUserIds: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_IGNORE_USER_IDS);
		},

		getConnectionsActivityStreamIgnoreUserObjs: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_IGNORE_USER_OBJS);
		},

		getConnectionsActivityStreamIgnoreGroupIds: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_IGNORE_GROUP_IDS);
		},

		getConnectionsActivityStreamIgnoreGroupObjs: function() {
			return this.getValue(this.CONNECTIONS_ACTIVITY_STREAM_IGNORE_GROUP_OBJS);
		},

		/**
		 * @since 2.0.3 FP2
		 */
		getIncludeAttrGroupInAttrDisplayName: function() {
			return this.getValue(this.INCLUDE_ATTR_GROUP_IN_ATTR_DISPLAY_NAME);
		},

		/**
		 * @since 2.0.3.5
		 */
		isOAuthEnabled: function() {
			return this.getValue(this.OAUTH_ENABLED);
		},

		/**
		 * @since 2.0.3.5
		 */
		getOAuthClientId: function() {
			return this.getValue(this.OAUTH_CLIENT_ID);
		},

		/**
		 * @since 2.0.3.5
		 */
		getOAuthClientSecret: function() {
			return this.getValue(this.OAUTH_CLIENT_SECRET);
		},

		/**
		 * @since 2.0.3.5
		 * @deprecated
		 */
		getOAuthEndpoint: function() {
			return this.getValue(this.OAUTH_ENDPOINT);
		},

		/**
		 * @since 2.0.3.6
		 */
		getBoxOAuthSubdomain: function() {
			return this.getValue(this.BOX_OAUTH_SUBDOMAIN);
		},

		/**
		 * @since 2.0.3.6
		 * @deprecated
		 */
		getShareAdminUserId: function() {
			return this.getValue(this.SHARE_ADMIN_USER_ID);
		},

		/**
		 * @since 2.0.3.6
		 * @deprecated
		 */
		getShareAdminUserName: function() {
			return this.getValue(this.SHARE_ADMIN_USER_NAME);
		},
		
		/**
		 * @since 3.0
		 */
		getBoxEnterpriseId: function(){
			return this.getValue(this.BOX_ENTERPRISE_ID);
		},
		
		/**
		 * @since 3.0
		 */
		getBoxPublicKeyId: function(){
			return this.getValue(this.BOX_PUBLIC_KEY_ID);
		},
		
		/**
		 * @since 3.0
		 */
		getBoxPrivateKeyPath: function(){
			return this.getValue(this.BOX_PRIVATE_KEY_PATH);
		},
		
		/**
		 * @since 3.0
		 */
		isBoxServerTokenEnabled: function(){
			return this.getValue(this.BOX_SERVER_TOKEN_ENABLED);
		},
		
		/**
		 * @since 3.0
		 */
		getBoxPrivateKey: function(){
			return this.getValue(this.BOX_PRIVATE_KEY);
		},
		
		isCorsUploadEnabled: function(){
			return this.getValue(this.CORS_UPLOAD_ENABLED);
		},

		/**
		 * @since 2.0.3.6
		 */
		getBoxShareEnabled: function() {
			var bool = false;
			var enabled = this.getValue(this.BOX_SHARE_ENABLED);
			if (enabled == true || enabled == "true") {
				bool = true;
			}
			return bool;
		},

		/**
		 * @since 2.0.3.6
		 */
		getBoxCopyEnabled: function() {
			var bool = false;
			var enabled = this.getValue(this.BOX_COPY_ENABLED);
			if (enabled == true || enabled == "true") {
				bool = true;
			}
			return bool;
		},

		/**
		 * @since 2.0.3.6
		 */
		isWarning: function() {
			var bool = false;
			var enabled = this.getValue(this.IS_WARN);
			if (enabled == true || enabled == "true") {
				bool = true;
			}
			return bool;
		},

		/**
		 * @since 2.0.3.7
		 */
		getApprovalWorkflowEnabled: function() {
			var bool = false;
			if (this.getType() == "p8") {
				var enabled = this.getValue(this.APPROVAL_WORKFLOW_ENABLED);
				if (enabled == null)
					bool = true; // Approval workflow was on by default in older releases.
				else
					bool = (enabled == true || enabled == "true");
			}
			return bool;
		},
		
		/**
		 * @since 3.0
		 */
		getRedactionEnabled: function() {
			var bool = false;
			var enabled = this.getValue(this.REDACTION_ENABLED);
			if (enabled == true || enabled == "true") {
				bool = true;
			}
			return bool;
		},

		/**
		 * @since 3.0
		 */
		getRedactionPermissions: function() {
			return this.getValue(this.REDACTION_PERMISSIONS);
		},
		
		/**
		 * @since 3.0
		 */
		getRedactionPolicyPermissions: function() {
			return this.getValue(this.REDACTION_POLICY_PERMISSIONS);
		},
		
		/**
		 * @since 3.0
		 */
		getBurnPDFToPDF: function() {
			var bool = false;
			var enabled = this.getValue(this.BURN_PDF_TO_PDF);
			if (enabled == true || enabled == "true") {
				bool = true;
			}
			return bool;
		},

		/**
		 * @since 3.0.1
		 */
		getRedactionAllowMergeSplit: function() {
			var bool = false;
			var allowed = this.getValue(this.REDACTION_ALLOW_MERGE_AND_SPLIT);
			if (allowed == true || allowed == "true") {
				bool = true;
			}
			return bool;
		},

		getValue: function(attribute) {
			var value = null;
			if (attribute == "typeString") {
				value = this.getTypeString();
			} else {
				if (this.hasAttribute(attribute)) //{
					value = this.inherited(arguments);
//				} else {
//					var defs = this._getDefaultConfig();
//					if (defs && defs.hasAttribute(attribute))
//						value = this.inherited(arguments);
//				}
			}
			return value;
		},

		_getDefaultConfig: function() {
			var type = this._attributes[this.TYPE];
			if (!type)
				return null;
			if (!this._DEFAULT_CONFIG[type]) {
				this.logDebug("_getDefaultConfig", "Get the default config for " + type);
				var defaultConfig = new RepositoryReadConfig(type + "defaultsettings", "RepositoryConfig", "user");
				this._DEFAULT_CONFIG[type] = defaultConfig;
				defaultConfig.getConfig(lang.hitch(this, function(response) {
					this._DEFAULT_CONFIG[type] = response;
				}), true);
			}
			return this._DEFAULT_CONFIG[type];
		},

		getValues: function(attribute) {
			var values = null;
			if (this.hasAttribute(attribute)) {
				values = this.inherited(arguments);
			} //else {
//				var defs = this._getDefaultConfig();
//				if (defs && defs.hasAttribute(attribute))
//					values = this.inherited(arguments);
//			}
			return values;
		},

		getTempId: function() {
			return this.tempId;
		},

		/**
		 * Returns a DOM node for the connected icon.
		 */
		getTypeIconClass: function() {
			var type = this.getType();
			var iconStr = "";
			if (type == "od")
				iconStr = "adminIconRepositoryOD";
			else if (type == "cm")
				iconStr = "adminIconRepositoryCM";
			else if (type == "p8")
				iconStr = "adminIconRepositoryP8";
			else if (type == "ci")
				iconStr = "adminIconRepositoryCI";
			else if (type == "cmis")
				iconStr = "adminIconRepositoryCMIS";
			else if (type == "box")
				iconStr = "adminIconRepositoryBox";
			else
				iconStr = "adminIconRepository";
			return iconStr;
		},

		/**
		 * Returns the display name of the server type.
		 */
		getTypeString: function() {
			var type = this.getType();
			if (type == "od")
				return this.messages.ondemand;
			else if (type == "cm")
				return this.messages.content_manager;
			else if (type == "p8")
				return this.messages.filenet_p8;
			else if (type == "ci")
				return this.messages.content_integrator;
			else if (type == "cmis")
				return this.messages.cmis;
			else if (type == "box")
				return this.messages.box_content;
			else
				return type;
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		// retrieve the repository config object
		// onCompleted event handler is callback
		getRepositoryConfig: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback);
			this.logExit(arguments.callee.nom);
			return this;
		},

		/**
		 * Use data type constant defined in this class to retrieve operators per data type to be filtered.
		 * <ul>
		 * <li>OPERATOR_DATETIME: "datetimeOp"</li>
		 * <li>OPERATOR_FLOAT: "floatOp"</li>
		 * <li>OPERATOR_INTEGER: "integerOp"</li>
		 * <li>OPERATOR_STRING: "stringOp"</li>
		 * <li>OPERATOR_BOOLEAN: "booleanOp"</li>
		 * <li>OPERATOR_OBJECT: "objectOp"</li>
		 * <li>OPERATOR_USER: "userOp"</li>
		 * <li>OPERATOR_ID: "idOp"</li>
		 * </ul>
		 */
		getSearchFilteredOperators: function(type) {
			return this.getValues(type);
		},

		isConnected: function() {
			return this.connected;
		}
	});

	/**
	 * Static function that constructs a repository config object. Use Application or server object to save this.
	 * 
	 * @param id
	 *            Repository identifier.
	 * @memberof ecm.model.admin.RepositoryReadConfig
	 */
	RepositoryReadConfig.createRepositoryReadConfig = function(id) {
		return new RepositoryReadConfig(id, "RepositoryConfig", "user");
	};
	return RepositoryReadConfig;
});

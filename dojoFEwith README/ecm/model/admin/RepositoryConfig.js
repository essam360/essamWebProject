/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"ecm/model/admin/RepositoryReadConfig",
	"ecm/model/admin/PropertyMappingConfig"
], function(declare, lang, dojojson, RepositoryReadConfig, PropertyMappingConfig) {

	/**
	 * @name ecm.model.admin.RepositoryConfig
	 * @class Represents the configuration information for a repository. For all repository types, the
	 *        <code>RepositoryConfig</code> class includes the following information:
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
	 *        For IBM Content Manager OnDemand repositories, the <code>RepositoryConfig</code> class includes the
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
	 *        For IBM FileNet P8 repositories, the <code>RepositoryConfig</code> class includes the following
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
	 *        For IBM Content Manager repositories, the <code>RepositoryConfig</code> class includes the following
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
	var RepositoryConfig = declare("ecm.model.admin.RepositoryConfig", [
		RepositoryReadConfig
	], {
		/** @lends ecm.model.admin.RepositoryConfig.prototype */

		/**
		 * A private boolean value indicating whether Workflow is connected used by DesktopWorkflow tab.
		 */
		connected: false,

		/**
		 * IBM Content Manager only. An array of content class ID strings. Each content class will be enabled for Box
		 * share tracking when this repository configuration is saved and addOns are deployed. This array is not saved
		 * to the repository configuration.
		 * 
		 * @since 2.0.3.6
		 */
		enableBoxShareTracking: null,

		/**
		 * IBM Content Manager only. An array of content class ID strings. Each content class will be enabled for entry
		 * template tracking when this repository configuration is saved and addOns are deployed. This array is not
		 * saved to the repository configuration.
		 * 
		 * @since 2.0.3
		 */
		enableEntryTemplateTracking: null,

		/**
		 * IBM Content Manager only. An array of content class ID strings. Each content class will be enabled for entry
		 * template folder associations when this repository configuration is saved and addOns are deployed. This array
		 * is not saved to the repository configuration.
		 * 
		 * @since 2.0.3
		 */
		enableEntryTemplateFolderAssocations: null,
        
		cmOOSEnableClasses: null,
		/**
		 * Constructs a repository.
		 * 
		 * @param id
		 *            The repository id.
		 * @param name
		 *            The repository name.
		 * @param action
		 *            Filters the items displayed on the tree (supersedes showFoldersOnly).
		 */
		constructor: function(id, name, action) {
			this.logDebug("RepositoryConfig constructor");
		},

		setIncludeMIMETypesInSearchResults: function(includeMIMETypesInSearchResults) {
			this.setValue(this.INCLUDE_MIME_TYPES_IN_SEARCH_RESULTS, includeMIMETypesInSearchResults);
		},

		setKeepInAutoFolder: function(keepInAutoFolder) {
			this.setValue(this.KEEP_IN_AUTO_FOLDER, keepInAutoFolder);
		},

		setUpdateStorageCollection: function(updateStorageCollection) {
			this.setValue(this.UPDATE_STORAGE_COLLECTION, updateStorageCollection);
		},

		setMaxWorklists: function(maxWorklists) {
			this.setValue(this.MAX_WORKLISTS, maxWorklists);
		},

		setMaxItemTypes: function(maxItemTypes) {
			this.setValue(this.MAX_ITEM_TYPES, maxItemTypes);
		},

		setLanguageCodes: function(languageCodes) {
			this.setValue(this.LANGUAGE_CODES, languageCodes);
		},

		setRootFolderId: function(rootFolderId) {
			this.setValue(this.ROOT_FOLDER_ID, rootFolderId);
		},

		setMaxResults: function(maxResults) {
			this.setValue(this.MAX_RESULTS, maxResults);
		},

		setUseSSO: function(useSSO) {
			this.setValue(this.USE_SSO, useSSO);
		},

		/**
		 * @since 2.0.3
		 */
		setP8DownloadRecord: function(val) {
			this.setValue(this.P8_DOWNLOAD_RECORD, val);
		},

		setP8DownloadRecordIgnoreUserIds: function(val) {
			this.setValue(this.P8_DOWNLOAD_RECORD_IGNORE_USER_IDS, val);
		},

		setAnonymousAccessEnabled: function(anonymousAccessEnabled) {
			this.setValue(this.ANONYMOUS_ACCESS_ENABLED, anonymousAccessEnabled);
		},

		setDirectRetrieveEnabled: function(directRetrieveEnabled) {
			this.setValue(this.DIRECT_RETRIEVE_ENABLED, directRetrieveEnabled);
		},
		
		setActionListEnabled: function(actionListEnabled) {
			this.setValue(this.ACTION_LIST_ENABLED, actionListEnabled);
		},

		/**
		 * @since 2.0.3
		 */
		setUsePartFileName: function(usePartFileName) {
			this.setValue(this.USE_PART_FILE_NAME, usePartFileName);
		},

		setEnableOnlyDocumentItemTypesEnabled: function(enableOnlyDocumentItemTypes) {
			this.setValue(this.DOC_MODEL_ONLY_ENABLED, enableOnlyDocumentItemTypes);
		},

		setConnectionPoint: function(connectionPoint) {
			this.setValue(this.CONNECTION_POINT, connectionPoint);
		},

		setObjectStore: function(objectStore) {
			this.setValue(this.OBJECT_STORE, objectStore);
		},

		setCMISReposID: function(cmisReposID) {
			this.setValue(this.CMIS_REPOS_ID, cmisReposID);
		},

		setUseGzipEncoding: function(useGzipEncoding) {
			this.setValue(this.USE_GZIP_ENCODING, useGzipEncoding);
		},

		setObjectStoreDisplayName: function(objectStore) {
			this.setValue(this.OBJECT_STORE_DISPLAY_NAME, objectStore);
		},

		setProtocol: function(protocol) {
			this.setValue(this.PROTOCOL, protocol);
		},

		setAddAsMajorVersion: function(addAsMajorVersion) {
			this.setValue(this.ADD_AS_MAJOR_VERSION, addAsMajorVersion);
		},

		setCheckinAsMajorVersion: function(checkinAsMajorVersion) {
			this.setValue(this.CHECKIN_AS_MAJOR_VERSION, checkinAsMajorVersion);
		},

		setIncludeWorkflowDefinition: function(includeWorkflowDefinition) {
			this.setValue(this.INCLUDE_WORKFLOW_DEFINITION, includeWorkflowDefinition);
		},

		setIncludeFormTemplate: function(includeFormTemplate) {
			this.setValue(this.INCLUDE_FORM_TEMPLATE, includeFormTemplate);
		},

		setAnnotationSecurity: function(annotationSecurity) {
			this.setValue(this.ANNOTATION_SECURITY, annotationSecurity);
		},

		setFolderSearchExpression: function(folderSearchExpression) {
			this.setValue(this.FOLDER_SEARCH_EXPRESSION, folderSearchExpression);
		},

		setMaxHits: function(maxHits) {
			this.setValue(this.MAX_HITS, maxHits);
		},

		setMaxFolders: function(maxFolders) {
			this.setValue(this.MAX_FOLDERS, maxFolders);
		},

		setAfp2PdfConfigFile: function(afp2PdfConfigFile) {
			this.setValue(this.AFP2PD_CONFIG_FILE, afp2PdfConfigFile);
		},

		setTransformXMLFile: function(transformXMLFile) {
			this.setValue(this.XFORM_XML_FILE, transformXMLFile);
		},

		setODSSL: function(odSSL) {
			this.setValue(this.OD_SSL, odSSL);
		},

		setODKeyringDBFile: function(odKeyringDBFile) {
			this.setValue(this.OD_KEYRING_DBFILE, odKeyringDBFile);
		},

		setODKeyringStashFile: function(odKeyringStashFile) {
			this.setValue(this.OD_KEYRING_STASHFILE, odKeyringStashFile);
		},

		setCustomProperties: function(customProps) {
			this.setValue(this.CUSTOM_PROPS, customProps);
		},

		// OD Global
		setAfp2PdInstallDirectory: function(afp2PdfInstallDir) {
			this.setValue(this.AFP2PD_INSTALL_DIR, afp2PdfInstallDir);
		},

		setLanguage: function(language) {
			this.setValue(this.LANGUAGE, language);
		},

		setTempDir: function(tempDir) {
			this.setValue(this.TEMP_DIR, tempDir);
		},

		setTraceDir: function(traceDir) {
			this.setValue(this.TRACE_DIR, traceDir);
		},

		setTraceLevel: function(traceLevel) {
			this.setValue(this.TRACE_LEVEL, traceLevel);
		},

		setPortNumber: function(portNumber) {
			this.setValue(this.PORT_NUMBER, portNumber);
		},

		setMaxInMemoryRetrieveSize: function(maxInMemoryRetrieveSize) {
			this.setValue(this.MAX_IN_MEMORY_RETRIEVE_SIZE, maxInMemoryRetrieveSize);
		},

		setMaxDownloadSize: function(maxDownloadSize) {
			this.setValue(this.MAX_DOWNLOAD_SIZE, maxDownloadSize);
		},

		setTimestampFormat: function(timestampFormat) {
			this.setValue(this.TIMESTAMP_FORMAT, timestampFormat);
		},

		setTimeFormat: function(timeFormat) {
			this.setValue(this.TIME_FORMAT, timeFormat);
		},

		setDateFormat: function(dateFormat) {
			this.setValue(this.DATE_FORMAT, dateFormat);
		},

		setTeamspacesEnabled: function(teamspacesEnabled) {
			this.setValue(this.TEAMSPACES_ENABLED, teamspacesEnabled);
		},

		setUnifiedSearchesEnabled: function(unifiedSearchesEnabled) {
			this.setValue(this.UNIFIED_SEARCHES_ENABLED, unifiedSearchesEnabled);
		},

		setEntryTemplatesEnabled: function(entryTemplatesEnabled) {
			this.setValue(this.ENTRY_TEMPLATE_ENABLED, entryTemplatesEnabled);
		},

		setCompoundDocumentsEnabled: function(compoundDocumentsEnabled) {
			this.setValue(this.COMPOUND_DOCUMENTS_ENABLED, compoundDocumentsEnabled);
		},

		setDatabaseEncodingUTF8: function(databaseEncodingUTF8) {
			this.setValue(this.DATABASE_ENCODING_UTF8, databaseEncodingUTF8);
		},

		/**
		 * A return value of zero means maximum for P8 and CM. In the OD system, there is no infinitive concept; it has
		 * to be a finite number.
		 */
		setSearchMaxResults: function(searchMaxResults) {
			this.setValue(this.SEARCH_MAX_RESULTS, searchMaxResults);
		},

		/**
		 * There is no timeout setting for OD and CM8.
		 */
		setTimeoutInSeconds: function(timeoutInSeconds) {
			this.setValue(this.TIMEOUT_IN_SECONDS, timeoutInSeconds);
		},

		setServerName: function(serverName) {
			this.setValue(this.SERVER_NAME, serverName);
		},

		setDocNameProperty: function(docNameProp) {
			this.setValue(this.DOC_NAME_PROPERTY, docNameProp);
		},

		setFolderNameProperty: function(folderNameProp) {
			this.setValue(this.FOLDER_NAME_PROPERTY, folderNameProp);
		},

		setFolderDefaultColumns: function(folderDefCols) {
			return this.setValues(this.FOLDER_DEF_COLS, folderDefCols);
		},

		/**
		 * @since 2.0.2
		 */
		setFolderMagazineDefaultColumns: function(folderDefCols) {
			return this.setValues(this.FOLDER_MAGAZINE_DEF_COLS, folderDefCols);
		},

		/**
		 * @since 2.0.2
		 */
		setSearchMagazineDefaultColumns: function(searchDefCols) {
			return this.setValues(this.SEARCH_MAGAZINE_DEF_COLS, searchDefCols);
		},

		setSearchDefaultColumns: function(searchDefCols) {
			return this.setValues(this.SEARCH_DEF_COLS, searchDefCols);
		},

		setSearchFilteredDocumentProperties: function(searchProperties) {
			return this.setValues(this.SEARCH_FILTERED_DOCUMENT_PROPERTIES, searchProperties);
		},

		setSearchFilteredFolderProperties: function(searchProperties) {
			return this.setValues(this.SEARCH_FILTERED_FOLDER_PROPERTIES, searchProperties);
		},

		setMatchAll: function(matchAll) {
			this.setValue(this.MATCH_ALL, matchAll);
		},

		/**
		 * @since 2.0.2
		 */
		setDefaultSearchType: function(default_search_type) {
			this.setValue(this.DEFAULT_SEARCH_TYPE, default_search_type);
		},

		/**
		 * @since 2.0.3.6
		 */
		setRestrictedSearchDocumentsType: function(isChecked) {
			this.setValue(this.RESTRICTED_SEARCH_DOCUMENTS_TYPE, isChecked);
		},

		/**
		 * @since 2.0.3.6
		 */
		setRestrictedSearchFoldersType: function(isChecked) {
			this.setValue(this.RESTRICTED_SEARCH_FOLDERS_TYPE, isChecked);
		},

		/**
		 * @since 2.0.3
		 */
		setDefaultSearchVersion: function(defaultSearchVersion) {
			this.setValue(this.DEFAULT_SEARCH_VERSION, defaultSearchVersion);
		},

		/**
		 * @since 2.0.3.5
		 */
		setAllClassesSearch: function(allClassesSearch) {
			this.setValue(this.ALL_CLASSES_SEARCH, allClassesSearch);
		},

		setType: function(type) {
			this.setValue(this.TYPE, type);
		},

		setDocumentSystemProperties: function(documentSystemProps) {
			return this.setValues(this.DOCUMENT_SYSTEM_PROPERTIES, documentSystemProps);
		},

		setFolderSystemProperties: function(folderSystemProps) {
			return this.setValues(this.FOLDER_SYSTEM_PROPERTIES, folderSystemProps);
		},

		setTeamspaceOwnerModifyRoles: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.TEAMSPACES_OWNER_MODIFY_ROLE, (bool ? "true" : "false"));
		},

		/**
		 * @since 2.0.3.6
		 */
		setDocNamePropSetWithFileName: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.DOC_NAME_PREFILL_FILE_NAME, (bool ? "true" : "false"));
		},

		//@since 2.0.3
		setDisplayRecentTeamspaces: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.TEAMSPACES_DISPLAY_RECENT, (bool ? "true" : "false"));
		},

		//@since 2.0.3
		setDisplayRecentTeamspacesValue: function(value) {

			this.setValue(this.TEAMSPACES_DISPLAY_RECENT_VALUE, (value ? value : 30));
		},

		//@since 2.0.3
		setEnableTaskManagerDelete: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.TEAMSPACES_DELETE_TASK_ENABLED, (bool ? "true" : "false"));
		},

		/**
		 * @since 2.0.3
		 * @deprecated
		 */
		setTeamspaceTaskManagerId: function(value) {
			this.setValue(this.TEAMSPACES_DELETE_TASK_ID, (value ? value : ""));
		},

		/**
		 * @since 2.0.3
		 * @deprecated
		 */
		setTeamspaceTaskManagerPwd: function(value) {
			this.setValue(this.TEAMSPACES_DELETE_TASK_PWD_NEW, (value ? value : ""));
		},

		/**
		 * @since 2.0.3.6
		 */
		setTaskManagerProxyUserId: function(value) {
			this.setValue(this.TASK_MGR_PROXY_USER_ID, (value ? value : ""));
		},

		/**
		 * @since 2.0.3.6
		 */
		setTaskManagerProxyUserPwd: function(value) {
			this.setValue(this.TASK_MGR_PROXY_PWD_NEW, (value ? value : ""));
		},

		setStatusDocNotes: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_NOTES, (bool ? "true" : "false"));
		},

		setStatusDocHold: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_HOLD, (bool ? "true" : "false"));
		},

		setStatusDocCheckedOut: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_CHECKED_OUT, (bool ? "true" : "false"));
		},

		setStatusDocBookmarks: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_BOOKMARKS, (bool ? "true" : "false"));
		},

		setStatusDocDeclaredRecord: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_DECLARED_RECORD, (bool ? "true" : "false"));
		},

		setStatusDocMinorVersions: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_MINOR_VERSIONS, (bool ? "true" : "false"));
		},

		setStatusDocCompoundDocument: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_DOC_COMPOUND_DOCUMENT, (bool ? "true" : "false"));
		},

		setStatusWorkItemCheckedOut: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_WORK_ITEM_CHECKED_OUT, (bool ? "true" : "false"));
		},

		setStatusWorkItemLocked: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_WORK_ITEM_LOCKED, (bool ? "true" : "false"));
		},

		setStatusWorkItemSuspended: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_WORK_ITEM_SUSPENDED, (bool ? "true" : "false"));
		},

		setStatusWorkItemDeadline: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.STATUS_WORK_ITEM_DEADLINE, (bool ? "true" : "false"));
		},

		setFolderingEnabled: function(bool) {
			bool = (bool === true || bool == "true");
			this.setValue(this.FOLDERING_ENABLED, (bool ? "true" : "false"));
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
		setSyncRepositoryId: function(val) {
			this.setValue(this.SYNC_REPOSITORY_ID, val);
		},

		//@since 2.0.3
		setConnectionsCommunityLibrary: function(bool) {
			this.setValue(this.CONNECTIONS_COMMUNITY_LIBRARY, bool);
		},

		setConnectionsActivityStreamConnectionsUrl: function(val) {
			this.setValue(this.CONNECTIONS_ACTIVITY_STREAM_CONNECTIONS_URL, val);
		},

		setConnectionsReviewAdminUserIds: function(val) {
			this.setValue(this.CONNECTIONS_REVIEW_ADMIN_USER_IDS, val);
		},

		setConnectionsReviewAdminGroupIds: function(val) {
			this.setValue(this.CONNECTIONS_REVIEW_ADMIN_GROUP_IDS, val);
		},

		setConnectionsGlobalAdminUserIds: function(val) {
			this.setValue(this.CONNECTIONS_GLOBAL_ADMIN_USER_IDS, val);
		},

		setConnectionsGlobalAdminGroupIds: function(val) {
			this.setValue(this.CONNECTIONS_GLOBAL_ADMIN_GROUP_IDS, val);
		},

		setConnectionsActivityStreamIgnoreUserIds: function(val) {
			this.setValue(this.CONNECTIONS_ACTIVITY_STREAM_IGNORE_USER_IDS, val);
		},

		setConnectionsActivityStreamIgnoreGroupIds: function(val) {
			this.setValue(this.CONNECTIONS_ACTIVITY_STREAM_IGNORE_GROUP_IDS, val);
		},

		setConnectionsSeedlistEnable: function(val) {
			this.setValue(this.CONNECTIONS_SEEDLIST_ENABLE, val);
		},

		setConnectionsActivityStreamEnable: function(val) {
			this.setValue(this.CONNECTIONS_ACTIVITY_STREAM_ENABLE, val);
		},

		setConnectionsAnonymousEnable: function(val) {
			this.setValue(this.CONNECTIONS_ANONYMOUS_ENABLE, val);
		},

		setConnectionsAnonymousUserId: function(val) {
			this.setValue(this.CONNECTIONS_ANONYMOUS_USER_ID, val);
		},

		setConnectionsActivityStreamUserId: function(val) {
			this.setValue(this.CONNECTIONS_ACTIVITY_STREAM_USER_ID, val);
		},

		setConnectionsActivityStreamPassword: function(val) {
			this.setValue(this.CONNECTIONS_ACTIVITY_STREAM_PASSWORD, val);
		},

		setConnectionsUrlHttp: function(val) {
			this.setValue(this.CONNECTIONS_URL_HTTP, val);
		},

		setConnectionsUrlHttps: function(val) {
			this.setValue(this.CONNECTIONS_URL_HTTPS, val);
		},

		/**
		 * @since 2.0.3
		 */
		setTeamspaceTemplatePermissions: function(val) {
			this.setValue(this.TEAMSPACE_TEMPLATE_PERMISSIONS, val);
		},

		/**
		 * @since 2.0.3.5
		 */
		setOAuthEnabled: function(val) {
			this.setValue(this.OAUTH_ENABLED, val);
		},
		
		/**
		 * @since 3.0
		 */
		setBoxServerTokenEnabled: function(val){
			this.setValue(this.BOX_SERVER_TOKEN_ENABLED, val);
		},

		/**
		 * @since 2.0.3.5
		 */
		setOAuthClientId: function(val) {
			this.setValue(this.OAUTH_CLIENT_ID, val);
		},

		/**
		 * @since 2.0.3.5
		 */
		setOAuthClientSecret: function(val) {
			this.setValue(this.OAUTH_CLIENT_SECRET, val);
		},

		/**
		 * @since 2.0.3.5
		 * @deprecated
		 */
		setOAuthEndpoint: function(val) {
			this.setValue(this.OAUTH_ENDPOINT, val);
		},

		/**
		 * @since 2.0.3.6
		 */
		setBoxOAuthSubdomain: function(val) {
			this.setValue(this.BOX_OAUTH_SUBDOMAIN, val);
		},
		
		/**
		 * @since 3.0
		 */
		setBoxEnterpriseId: function(val){
			this.setValue(this.BOX_ENTERPRISE_ID, val);
		},
		
		/**
		 * @since 3.0
		 */
		setBoxPublicKeyId: function(val){
			this.setValue(this.BOX_PUBLIC_KEY_ID, val);
		},
		
		/**
		 * @since 3.0
		 */
		setBoxPrivateKeyPath: function(val){
			this.setValue(this.BOX_PRIVATE_KEY_PATH, val);
		},
		
		setEnableCORSUpload: function(val){
			this.setValue(this.CORS_UPLOAD_ENABLED, val);
		},
		
		/**
		 * @since 2.0.3.6
		 */
		setBoxShareEnabled: function(boxShareEnabled) {
			boxShareEnabled = (boxShareEnabled === true || boxShareEnabled == "true");
			this.setValue(this.BOX_SHARE_ENABLED, boxShareEnabled ? "true" : "false");
		},

		/**
		 * @since 2.0.3.6
		 */
		setBoxCopyEnabled: function(enabled) {
			enabled = (enabled === true || enabled == "true");
			this.setValue(this.BOX_COPY_ENABLED, enabled ? "true" : "false");
		},

		/**
		 * @since 2.0.3.6
		 * @deprecated
		 */
		setShareAdminUserId: function(val) {
			this.setValue(this.SHARE_ADMIN_USER_ID, val);
		},

		/**
		 * @since 2.0.3.6
		 * @deprecated
		 */
		setShareAdminUserName: function(val) {
			this.setValue(this.SHARE_ADMIN_USER_NAME, val);
		},

		/**
		 * @since 2.0.3.6
		 */
		setWarning: function(isWarning) {
			isWarning = (isWarning === true || isWarning == "true");
			this.setValue(this.IS_WARN, isWarning ? "true" : "false");
		},

		/**
		 * @private
		 */
		_setTeamspaceUpdateState: function(val) {
			this.setValue(this.TEAMSPACE_UPDATE_STATE, val);
		},
		/**
		 * @private
		 */
		_setSyncUpdateState: function(val) {
			this.setValue(this.SYNC_UPDATE_STATE, val);
		},

		setTeamspacePermissions: function(val) {
			this.setValue(this.TEAMSPACE_PERMISSIONS, val);
		},

		setSearchPermissions: function(val) {
			this.setValue(this.SEARCH_PERMISSIONS, val);
		},

		/**
		 * @since 3.0
		 */
		setRedactionPermissions: function(val) {
			this.setValue(this.REDACTION_PERMISSIONS, val);
		},

		/**
		 * @since 3.0
		 */
		setRedactionPolicyPermissions: function(val) {
			this.setValue(this.REDACTION_POLICY_PERMISSIONS, val);
		},
		
		setEntryTemplatePermissions: function(val) {
			this.setValue(this.ENTRY_TEMPLATE_PERMISSIONS, val);
		},

		/**
		 * @since 3.0.1
		 */
		setOfficeTemplatePermissions: function(val) {
			this.setValue(this.OFFICE_TEMPLATE_PERMISSIONS, val);
		},
	
		/**
		 * @since 3.0.1
		 */
		setDraftPermissions: function(val) {
			this.setValue(this.DRAFT_PERMISSIONS, val);
		},
		
		setCmEntryTemplateRootFolderAssociations: function(val) {
			this.setValue(this.CM_ENTRY_TEMPLATE_ROOT_FOLDER_ASSOCIATIONS, val);
		},

		setTempId: function(tempId) {
			this.tempId = tempId;
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		setSearchFilteredOperators: function(type, values) {
			this.setValues(type, values);
		},

		setConnected: function(connected) {
			this.connected = connected;
		},

		setDefaultEmailClassForAdd: function(value) {
			this.setValue(this.DEFAULT_EMAIL_CLASS_FOR_ADD, value);
		},

		setDefaultFolderClassForAdd: function(value) {
			this.setValue(this.DEFAULT_FOLDER_CLASS_FOR_ADD, value);
		},

		/**
		 * @since 2.0.3 FP6
		 */
		setDelimiterForOfficeProperty: function(value) {
			this.setValue(this.DELIMITER_FOR_OFFICE_PROPERTY, value);
		},

		/**
		 * @since 3.0
		 */
		setOfficeOnlineEnabled: function(officeOnlineEnabled) {
			syncEnabled = (officeOnlineEnabled === true || officeOnlineEnabled == "true");
			this.setValue(this.OFFICE_ONLINE_ENABLED, syncEnabled ? "true" : "false");
		},
		
		/**
		 * @since 3.0.1
		 */
		setEditServiceEnabled: function(editServiceEnabled) {
			editEnabled = (editServiceEnabled === true || editServiceEnabled == "true");
			this.setValue(this.EDIT_SERVICE_ENABLED, editEnabled ? "true" : "false");
		},
		
		
		/**
		 * @since 2.0.3 FP2
		 */
		setIncludeAttrGroupInAttrDisplayName: function(includeAttrGroupInAttrDisplayName) {
			this.setValue(this.INCLUDE_ATTR_GROUP_IN_ATTR_DISPLAY_NAME, includeAttrGroupInAttrDisplayName);
		},

		/**
		 * This string is for plugin repository types, for the plugin to save config. This string should be kept less
		 * than 1K in length. Typically, JSON is the best structure to use for saving configuration information.
		 */
		setPluginConfiguration: function(value) {
			this.setValue(this.PLUGIN_CONFIGURATION, value);
		},

		/**
		 * @since 2.0.3.7
		 */
		setApprovalWorkflowEnabled: function(enabled) {
			enabled = (enabled === true || enabled == "true");
			this.setValue(this.APPROVAL_WORKFLOW_ENABLED, enabled ? "true" : "false");
		},

		/**
		 * @since 3.0
		 */
		setRedactionEnabled: function(enabled) {
			enabled = (enabled === true || enabled == "true");
			this.setValue(this.REDACTION_ENABLED, enabled ? "true" : "false");
		},
		
		/**
		 * @since 3.0
		 */
		setBurnPDFToPDF: function(enabled) {
			enabled = (enabled === true || enabled == "true");
			this.setValue(this.BURN_PDF_TO_PDF, enabled ? "true" : "false");
		},

		/**
		 * @since 3.0.1
		 */
		setRedactionAllowMergeSplit: function(allowed) {
			allowed = (allowed === true || allowed == "true");
			this.setValue(this.REDACTION_ALLOW_MERGE_AND_SPLIT, allowed ? "true" : "false");
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


		// return property mapping collection objects
		getPropertiesMapping: function(callback, params) {
			var propertiesMappingObjects = [];
			this.listConfig("propertiesMapping", lang.hitch(this, function(list) {
				for ( var i in list) {
					var entry = list[i];
					var id = entry.id ? entry.id : "" + i;
					var propertyMapping = PropertyMappingConfig.createPropertyMappingConfig(id);
					lang.mixin(propertyMapping, {
						_attributes: entry
					});
					propertiesMappingObjects.push(propertyMapping);
				}
				if (callback) {
					callback(propertiesMappingObjects);
				}
			}), "true", params);
		}

	});
	
	
	/**
	 * Static function that constructs a repository config object. Use Application or server object to save this.
	 * 
	 * @param id
	 *            Repository identifier.
	 * @memberof ecm.model.admin.RepositoryConfig
	 */
	RepositoryConfig.createRepositoryConfig = function(id) {
		return new RepositoryConfig(id, "RepositoryConfig", "admin/configuration");
	};

	/**
	 * Static function that constructs a new RepositoryConfig and fills it with default values. You must call setId in
	 * order to save it.
	 * 
	 * @param type
	 *            The repository type.
	 * @param callback
	 *            Function called when the repository configuration is retrieved.
	 * @memberof ecm.model.admin.RepositoryConfig
	 * @param params
	 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
	 */
	RepositoryConfig.getDefaultRepositoryConfig = function(type, callback, extraParams) {
		var repositoryConfig = RepositoryConfig.createRepositoryConfig(type + "defaultsettings");
		repositoryConfig.getConfig(function(response) {
			repositoryConfig.setType(type); // needed
			response.id = null;
			if (callback)
				callback(response);
		}, null, extraParams);
	};
	return RepositoryConfig;
});

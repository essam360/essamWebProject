/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/json",
	"dojox/uuid/generateRandomUuid",
	"./admin/RepositoryReadConfig",
	"./_ModelObject",
	"./_OpenedSearchesMixin",
	"./_RecentSearchesMixin",
	"./_RecentObjectsMixin",
	"./_SharedRequestsMixin",
	"./_CORSUploadMixin",
	"./ContentClass",
	"./ContentItem",
	"./Directory",
	"./EntryTemplate",
	"./Item",
	"./MetadataTemplate",
	"./ProcessApplicationSpace",
	"./ProcessRole",
	"./ProcessInbasket",
	"./Request",
	"./ResultSet",
	"./Role",
	"./RedactionPolicy",
	"./SearchTemplateFolder",
	"./SearchTemplate",
	"./Task",
	"./Teamspace",
	"dojo/_base/sniff",
	"./User",
	"./UserGroup",
	"./Worklist",
	"./WorklistFolder",
	"./UnifiedSearchTemplate"
], function(declare, lang, array, connect, dojojson, generateRandomUuid,  RepositoryReadConfig, _ModelObject, _OpenedSearchesMixin, _RecentSearchesMixin, _RecentObjectsMixin, _SharedRequestsMixin, _CORSUploadMixin, ContentClass, ContentItem, Directory, EntryTemplate, Item, MetadataTemplate, ProcessApplicationSpace, ProcessRole, ProcessInbasket, Request, ResultSet, Role, Policy, SearchTemplateFolder, SearchTemplate, Task, Teamspace, has, User, UserGroup, Worklist, WorklistFolder, UnifiedSearchTemplate) {

	/**
	 * Constructs a repository object. Note that repositories are normally constructed as part of
	 * ecm.model.Desktop.loadDesktop and don't need to be constructed separately.
	 * 
	 * @param properties
	 *            The properties of the repository. The properties can be any of the public fields as defined below and
	 *            in ecm.model._ModelObject.
	 * @name ecm.model.Repository
	 * @class Represents a single repository on the server.
	 *        <p>
	 *        For an IBM FileNet P8 content server, this class represents a single object store. There can be multiple
	 *        repository objects for a single server object. For other content servers, a single repository object
	 *        exists for each server object.
	 * @augments ecm.model._ModelObject, ecm.model._OpenedSearchesMixin, ecm.model._RecentSearchesMixin,
	 *           ecm.model._RecentObjectsMixin
	 */
	return declare("ecm.model.Repository", [
		_ModelObject,
		_OpenedSearchesMixin,
		_RecentSearchesMixin,
		_RecentObjectsMixin,
		_SharedRequestsMixin,
		_CORSUploadMixin
	], {
		/** @lends ecm.model.Repository.prototype */

		/**
		 * Comment capability type constants.
		 */
		CAPABILITY_COMMENT: {
			NONE: "none",
			DOCUMENT_ONLY: "documentonly",
			DOCUMENT_AND_FOLDER: "documentandfolder"
		},

		/**
		 * All classes search type constants (IBM Content Manager only).
		 * 
		 * @since 2.0.3.5
		 */
		ALL_CLASSES_SEARCH: {
			HIDDEN: "hidden",
			DOCUMENTS_INCLUDES_ONLY_DOCUMENTS: "documentsIncludesOnlyDocuments",
			DOCUMENTS_INCLUDES_NON_FOLDERS: "documentsIncludesNonFolders"
		},

		/**
		 * A string indicating the type of the repository. The defined values are "cm" for IBM Content Manager, "p8" for
		 * IBM FileNet P8, "od" for IBM Content Manager OnDemand, "cmis" for repositories supported through CMIS.
		 */
		type: null,

		/**
		 * A boolean indicating that this repository is connected. A connected repository is one that has been logged
		 * into, either explicitly or implicitly by association. For example, when one repository representing a P8
		 * object store is connected, all other repositories representing object stores of the same domain will also be
		 * connected.
		 */
		connected: false,

		/**
		 * For FileNet P8, contains the symbolic name of the object store associated with this repository.
		 */
		objectStoreName: null,

		/**
		 * For FileNet P8, contains the display name of the object store associated with this repository.
		 */
		objectStoreDisplayName: null,

		/**
		 * For FileNet P8, contains the p8 server connection URL associated with this repository.
		 */
		serverName: null,

		/**
		 * The user Id for the user logged into the repository. (Valid when connected.)
		 */
		userId: null,

		/**
		 * The full, display user name for the user logged into the repository. (Valid when connected.)
		 */
		userDisplayName: null,

		/**
		 * The login name used to login to the repository. (Valid when connected.)
		 * 
		 * @since 2.0.3.8
		 */
		userLoginName: null,

		/**
		 * An array of strings for the privileges granted on the repository for the logged-in user. These privileges are
		 * related to global actions, such as being able to add documents or folders to the repository.
		 */
		privileges: null,

		/**
		 * A boolean indicating that single-sign on is supported for this repository.
		 */
		useSSO: false,

		/**
		 * @deprecated Use retrieveItem with a path of "/" to retrieve the root item. This value is null until a
		 *             retrieveItem with a path of "/" is performed.
		 */
		rootItem: null,

		/**
		 * A boolean indicating that teamspaces are supported on the repository.
		 */
		teamspacesEnabled: false,

		/**
		 * For FileNet P8 and IBM Content Manager only, indicates that task manager service user id for this repository.
		 * 
		 * @since 2.0.3.6
		 */
		taskManagerProxyUserId: null,

		/**
		 * For FileNet P8 and IBM Content Manager only, indicates that task manager service password for this
		 * repository.
		 * 
		 * @since 2.0.3.6
		 */
		taskManagerProxyPwd: null,

		/**
		 * For FileNet P8 and IBM Content Manager only, indicates that Box share is supported on the repository.
		 * 
		 * @since 2.0.3.6
		 */
		boxShareEnabled: false,

		/**
		 * For FileNet P8 and IBM Content Manager only, indicates that Box copy is supported on the repository.
		 * 
		 * @since 2.0.3.6
		 */
		boxCopyEnabled: false,

		/**
		 * For Box only, indicates that Box administrator.
		 * 
		 * @since 2.0.3.6
		 */
		shareAdminUserId: null,

		/**
		 * For FileNet P8 and IBM Content Manager only, indicates that new IBM Content Navigator entry templates are
		 * supported on the repository.
		 * 
		 * @since 2.0.3
		 */
		entryTemplatesEnabled: false,

		/**
		 * For IBM Content Manager only, indicates that new IBM Content Navigator name property should be set to the
		 * file name when a file name is selected.
		 * 
		 * @since 2.0.3.6
		 */
		docNamePropSetWithFileName: false,

		/**
		 * For FileNet P8, indicates that new major versions should be created when add is performed.
		 */
		addAsMajorVersion: true,

		/**
		 * For FileNet P8, indicates that new major versions should be created when checkin is performed.
		 */
		checkinAsMajorVersion: true,

		/**
		 * A boolean value indicating whether this repository supports the "All" classes pseudo class choice for
		 * searches.
		 */
		allPseudoClassSupported: false,

		/**
		 * For IBM Content Manager only, a boolean value indicating whether the "All" classes pseudo class choice for
		 * searches is hidden.
		 * 
		 * @since 2.0.3.2
		 * @deprecated As of 2.0.3.5. Use allClassesSearch instead.
		 */
		allPseudoClassHidden: false,

		/**
		 * For IBM Content Manager only, contains one of the <code>ALL_CLASSES_SEARCH</code> options for all classes
		 * searches. If <code>allPseudoClassHidden</code> is true, the value will always be
		 * <code>ALL_CLASSES_SEARCH.HIDDEN</code>.
		 * 
		 * @since 2.0.3.5
		 */
		allClassesSearch: null,

		/**
		 * An array of {@link ecm.model.SearchTemplate} objects.
		 */
		templates: null,

		/**
		 * A string value holding the search template filter.
		 */
		templatesFilter: null,

		/**
		 * An array of {@link ecm.model.SearchTemplateFolder} objects.
		 */
		templateFolders: null,

		/**
		 * An array of {@link ecm.model.ContentClass} objects.
		 */
		contentClassCache: null,

		/**
		 * A string value indicating the process engine connection point to use (optional). Will override the connection
		 * point configured on the repository in the Admin data base.
		 */
		connectionPoint: null,

		/**
		 * An array of {@link ecm.model.WorklistFolder} objects
		 */
		worklistFolders: null,

		/**
		 * An array of {@link ecm.model.ProcessApplicationSpace} objects or if there is only one application space, an
		 * array of {@link ecm.model.ProcessRole} objects (FileNet P8 only)
		 */
		worklistContainers: null,

		/**
		 * An array of {@link ecm.modelWorklist} objects for this repository.
		 */
		worklists: null,

		/**
		 * An array of {@link ecm.model.Teamspace} objects of type "instance".
		 */
		teamspaces: null,

		/**
		 * An array of {@link ecm.model.Role} objects for this repository.
		 */
		roles: null,
		
		/**
		 * An array of {@link ecm.model.Role} objects representing redaction roles for this repository.
		 */
		redactionRoles: null,
		
		/**
		 * An array of {@link ecm.model.RedactionPolicy} objects representing redaction policies for this repository.
		 */
		redactionPolicies: null,

		/**
		 * An array of {@link ecm.model.Teamspace} objects of type "template".
		 */
		teamspaceTemplates: null,

		/**
		 * An array of {@link ecm.model.EntryTemplate} objects.
		 */
		entryTemplateCache: null,

		/**
		 * A boolean indicating that the repository is enabled for text search.
		 */
		textSearchType: false,

		/**
		 * A setting indicating the query capabilities of this repository.
		 */
		capabilityQuery: null,

		/**
		 * A setting indicating the comment capabilities of this repository.
		 */
		capabilityComment: null,

		/**
		 * A boolean indicating the repository supports recommendation.
		 */
		supportsRecommendation: false,

		/**
		 * A boolean indicating the repository supports tag.
		 */
		supportsTag: false,

		/**
		 * A boolean indicating the repository supports Box share.
		 */
		supportsBoxShare: false,

		/**
		 * A boolean indicating the repository supports adding items.
		 */
		supportsAddDocument: true,

		/**
		 * A boolean value indicating the repository queries support searching with multiple classes.
		 * 
		 * @since 2.0.3.8
		 */
		supportsMultiClassSearch: false,

		/**
		 * A boolean value indicating the repository queries support searching for all versions of an item (CMIS only).
		 */
		capabilityAllVersionsSearchable: false,

		/**
		 * A boolean value indicating the repository supports searching for folders (CMIS only).
		 * 
		 * @since 2.0.3.5
		 */
		folderSearchSupported: false,

		/**
		 * An array of attributes for the repository.
		 */
		attributes: null,

		/**
		 * A {@link ecm.model.admin.RepositoryReadConfig} object holding the configuration information.
		 */
		repositoryConfig: null,

		/**
		 * An array of {@link ecm.model.SearchTemplate} objects that have been opened.
		 */
		openedSearches: null, // It gets bake up in _OpenedSearchesMixin

		/**
		 * A string value holding the data model type for records.
		 */
		recordDatamodelType: null,

		/**
		 * A string value holding the repository type for records.
		 */
		recordRepositoryType: null,

		/**
		 * A boolean value indicating whether the current user is "admin".
		 */
		isAdminUser: false,

		/**
		 * An array of printer objects.
		 */
		serverPrinters: null,

		/**
		 * Server print default properties.
		 */
		serverPrinterDefaults: null,

		/**
		 * Flag indicating if AFP transform to PDF is enabled (Content Manager OnDemand only).
		 * 
		 * @since 2.0.2
		 */
		isAFP2PDFEnabled: false,

		/**
		 * The FileNet P8 domain ID (GUID).
		 * 
		 * @since 2.0.3
		 */
		domainId: null,

		/**
		 * This repository will be displayed in the Browse Pane RepositorySelector
		 */
		showInBrowseView: true,

		/**
		 * This repository will be displayed in the Search Pane RepositorySelector
		 */
		showInSearchView: true,

		/**
		 * This repository will be displayed in the Workflow Pane RepositorySelector
		 */
		showInWorkView: true,

		/**
		 * This repository will be displayed in the Manage Teamspace RepositorySelector
		 */
		showInTeamspaceView: true,

		/**
		 * This repository will be displayed in the Manage EntryTemplate RepositorySelector
		 */
		showInEntryTemplateView: true,

		/**
		 * A boolean indicating if this repository is enabled for sync.
		 * 
		 * @since 2.0.3
		 */
		syncEnabled: false,

		/**
		 * The identifier of the folder that represents the root folder of this repository (IBM Content Manager only).
		 * 
		 * @since 2.0.3
		 */
		rootFolderId: null,

		/**
		 * The property that represents the name of documents in the repository.
		 * 
		 * @since 2.0.3
		 */
		documentNameProperty: null,

		/**
		 * The property that represents the name of folders in the repository.
		 * 
		 * @since 2.0.3
		 */
		folderNameProperty: null,

		/**
		 * The default columns used in the list view when creating a search.
		 * 
		 * @since 2.0.3
		 */
		searchDefaultColumns: null,

		/**
		 * The default columns used in the magazine view when creating a search.
		 * 
		 * @since 2.0.3
		 */
		searchMagazineDefaultColumns: null,

		/**
		 * A list of document properties that are hidden when searching.
		 * 
		 * @since 2.0.3
		 */
		searchFilteredDocumentProperties: null,

		/**
		 * A list of folder properties that are hidden when searching.
		 * 
		 * @since 2.0.3
		 */
		searchFilteredFolderProperties: null,

		/**
		 * A mapping from a data type to a list of operators that are hidden when searching on a particular data type.
		 * 
		 * @since 2.0.3
		 */
		searchFilteredOperators: null,

		/**
		 * A list of search types (i.e., document) that are hidden when creating a search (CM8 and P8 only).
		 * 
		 * @since 2.0.3.6
		 */
		searchFilteredSearchTypes: null,

		/**
		 * The default search type used when creating a search (i.e., "document").
		 * 
		 * @since 2.0.3
		 */
		defaultSearchType: null,

		/**
		 * The default search version used when creating a search (i.e., "document").
		 * 
		 * @since 2.0.3
		 */
		defaultSearchVersion: null,

		/**
		 * A boolean indicating if a new search has to match all properties.
		 * 
		 * @since 2.0.3
		 */
		searchMatchAll: true,

		/**
		 * A boolean indicating if this repository is enabled for cross-repository searches.
		 * 
		 * @since 2.0.3
		 */
		unifiedSearchesEnabled: false,

		/**
		 * An array of system property names that are displayed when viewing or editing the properties of a document
		 * (P8, CM8, and CMIS only).
		 * 
		 * @since 2.0.3
		 */
		documentSystemProperties: false,

		/**
		 * An array of system property names that are displayed when viewing or editing the properties of a folder (P8,
		 * CM8, and CMIS only).
		 * 
		 * @since 2.0.3
		 */
		folderSystemProperties: false,

		/**
		 * A boolean indicating if this repository object is for administering IBM Content Navigator configurations. If
		 * true, this repository object will have "_CIWEBADMIN" appended to the repository Id to keep the server
		 * connection separate from the desktop repository connection for the same repository configuration.
		 * 
		 * @since 2.0.3
		 */
		isForAdministration: false,

		/**
		 * A boolean indicating if this repository object uses OAuth (Box only).
		 * 
		 * @since 2.0.3.5
		 */
		oAuthEnabled: false,

		/**
		 * If oAuthEnabled is true, this is the OAuth client id for the Box application associated with this repository
		 * (Box only).
		 * 
		 * @since 2.0.3.5
		 */
		oAuthClientId: null,

		/**
		 * A boolean indicating if this repository is enabled for the Approval Workflow Launch action.
		 * 
		 * @since 2.0.3.7
		 */
		approvalWorkflowEnabled: false,

		/**
		 * A boolean indicating if this repository is enabled to support role-based redactions. 
		 * 
		 * @since 3.0
		 */
		redactionEnabled: false,
		
		/**
		 * A boolean indicating this Box repository authenticates using a server token.
		 * 
		 * @since 3.0
		 */
		serverTokenEnabled: false,

		/**
		 * An array of {@link ecm.model.ContentItem} objects.
		 */
		officeTemplateCache: null,
		/**
		 * An array of {@link ecm.model.ContentItem} objects.
		 */
		editServiceTemplateCache: null,
		
		/**
		 * @private
		 */
		constructor: function() {
			if (this.isForAdministration) {
				this.id += "_CIWEBADMIN";
			}
			if (!this.privileges) {
				this.privileges = [];
			}
			if (!this.attributes) {
				this.attributes = [];
			}
			this.allPseudoClassSupported = this._isCM();
		},

		/**
		 * Returns the value of the attribute.
		 */
		getAttribute: function(attributeName) {
			if (this.attributes)
				return this.attributes[attributeName];
			else
				return null;
		},

		/**
		 * Returns true if the given attribute exists. Returns false otherwise.
		 */
		hasAttribute: function(attributeName) {
			return ((this.attributes && (typeof this.attributes[attributeName] != "undefined")) ? true : false);
		},

		/** 
		 * Return the CE SchemaVeriosn major version number
		 */
		CEmajorVersion: function() {
			var majorVersion = 0;
			if (this.objectStore.CESchemaVersion){
				var index = this.objectStore.CESchemaVersion.indexOf(".");
				if ( index == -1 ){
					index = this.objectStore.CESchemaVersion.length;
				}
				majorVersion = this.objectStore.CESchemaVersion.substring(0,index)
			} 
			return majorVersion;
		},
		
		/**
		 * Connects to the server and authenticates with the provided password.
		 * 
		 * @param password
		 *            The password to use for login.
		 * @param callback
		 *            A function that is invoked on successful login.
		 * @param desktopId
		 *            An optional parameter to be used to log into a different desktop. If it is not provided, the
		 *            current desktop's id is used.
		 * @param synchronous
		 *            An optional flag indicating the logon request should be synchronous.
		 * @param errorCallback
		 *            An option method to call when errors occur during logon.
		 * @param backgroundRequest
		 *            An optional flag indicating if the logon request should be run without showing a status dialog.
		 */
		logon: function(password, callback, desktopId, synchronous, errorCallback, backgroundRequest) {
			this.logEntry("logon");
			var self = this;
			var enableSecureService = ecm.model.Request.enableSecureService;
			ecm.model.Request.enableSecureService = true;

			var params = this._logonParams ? lang.mixin({}, this._logonParams) : {};
			lang.mixin(params, {
				desktop: desktopId ? desktopId : ecm.model.desktop.id,
				repositoryId: this.id,
				userid: this.userId,
				password: password,
				contextPath: ecm.model.desktop._cServicesUrl
			});

			if (this.isOAuthLinked() && password == null) {
				// When logging into an OAuth2 linked Box repository, userid must be blank to signal
				// to the service that we want to use the stored refresh token.
				// Otherwise, send the user id.
				delete params.userid;
			}

			var sharedRequestParams = {
				sharedRequestMethod: "logon",
				sharedRequestCompleteCallback: callback,
				sharedRequestFailedCallback: errorCallback,
				serviceName: "logon",
				repositoryType: this.type,
				requestParams: params,
				requestCompleteCallback: function(response) {
					ecm.model.Request.enableSecureService = enableSecureService;
					self._logonCompleted(response, sharedRequestParams);
				},
				requestFailedCallback: function(response, errorMessages) {
					self.failSharedRequest(sharedRequestParams, function(callback) {
						callback(response, errorMessages);
					});
				},
				synchronous: synchronous,
				backgroundRequest: backgroundRequest
			};
			request = this.invokeSharedRequest(sharedRequestParams);

			this.logExit("logon");
			return request;
		},

		_logonCompleted: function(response, sharedRequestParams) {
			this.logEntry("_logonCompleted");

			if (!this.connected) { // may already be connected if this is re-login after session expired
				this.connected = true;
				// Remember the login name.
				this.userLoginName = response.userLoginName || this.userId || response.userID;
				// Update the user Id.
				this.userId = response.userID;
				this.userDisplayName = response.user_displayname;
				this.serverPrinters = null;
				this.serverPrinterDefaults = null;

				var workflow = this.privileges.workflow; // Save this value before creating new privileges
				this.privileges = {};
				this.privileges.addDoc = response.priv_addDoc;
				this.privileges.addItem = response.priv_addItem;
				this.privileges.addSearch = response.priv_addSearch;
				this.privileges.addUnifiedSearch = response.priv_addUnifiedSearch;
				this.privileges.search = true;
				this.privileges.shareSearch = false;
				this.privileges.addTeamspace = response.priv_addTeamspace;
				this.privileges.addTeamspaceTemplate = response.priv_addTeamspaceTemplate;
				this.privileges.addModifyTeamspaceRole = response.priv_addModifyTeamRoles;
				this.privileges.manageTeamspace = true;
				this.privileges.createHold = response.privCreateHold;
				this.privileges.findUsersAndGroups = response.privFindUsersAndGroups;
				this.privileges.addEntryTemplate = response.privAddEntryTemplate;
				this.privileges.addRoleBasedRedaction = response.privAddRoleBasedRedaction;
				this.privileges.addRedactionPolicy = response.privAddRedactionPolicy;
				
				if (workflow != null) {
					this.privileges.workflow = workflow; // Will be set in Desktop loaded implementation
				} else {
					if (this.type == "cm") {
						this.privileges.workflow = this.type == "cm";
					} else if (this.type == "p8") {
						this.privileges.workflow = response.priv_workflow;
					}
				}

				if (this.type == "p8") {
					this.privileges.foldering = true;
					this.domainId = response.domainId;
				} else if (this.type == "cmis") {
					this.privileges.foldering = true;
				} else if (this.type == "cm") {
					this.privileges.foldering = this.folderingEnabled && response.priv_foldering;
				} else {
					this.privileges.foldering = !!response.priv_foldering;
				}

				this.textSearchType = response.textSearchType;
				this.capabilityQuery = response.capabilityQuery;
				this.capabilityComment = response.capabilityComment;
				this.supportsDownloadCount = response.supportsDownloadCount;
				this.supportsRecommendation = response.supportsRecommendation;
				this.supportsTag = response.supportsTag;
				this.supportsBoxShare = response.supportsBoxShare;
				this.supportsMultiClassSearch = !!response.supportsMultiClassSearch;
				this.capabilityAllVersionsSearchable = response.capabilityAllVersionsSearchable;
				this.folderSearchSupported = !!response.folderSearchSupported;
				this._searchTemplateSupported = response.searchTemplateSupported;
				this._entryTemplateSupported = response.entryTemplateSupported;
				this._redactionSupported = response.redactionSupported;
				this.allPseudoClassHidden = !!response.allPseudoClassHidden;
				this.supportsAddDocument = !(response.supportsAddDocument === false);

				if (response.inputTimestampAsText)
					this.inputTimestampAsText = response.inputTimestampAsText;

				if (response.allClassesSearch) {
					this.allClassesSearch = response.allClassesSearch;
				}
				if (response.useSSO)
					this.useSSO = response.useSSO;
				else
					this.useSSO = false;

				this.isAFP2PDFEnabled = response.afp2pdfEnabled | false;
				//records information
				this.setRecordType(response.recordType);
				this.setRecordDatamodelType(response.recordDatamodelType);

				//set information from response for this repository only
				for ( var i in response.servers) {
					var repositoryJSON = response.servers[i];
					if (repositoryJSON.connected && repositoryJSON.repositoryId == this.id) {
						this.textSearchType = repositoryJSON.textSearchType;
						this.capabilityQuery = repositoryJSON.capabilityQuery;
						this.capabilityComment = repositoryJSON.capabilityComment;
						this.supportsDownloadCount = repositoryJSON.supportsDownloadCount;
						this.supportsRecommendation = repositoryJSON.supportsRecommendation;
						this.supportsTag = repositoryJSON.supportsTag;
						this.supportsBoxShare = repositoryJSON.supportsBoxShare;
						this.supportsMultiClassSearch = !!repositoryJSON.supportsMultiClassSearch;
						this.capabilityAllVersionsSearchable = repositoryJSON.capabilityAllVersionsSearchable;
						this.folderSearchSupported = !!repositoryJSON.folderSearchSupported;
						this.allPseudoClassHidden = !!repositoryJSON.allPseudoClassHidden;
						this.supportsAddDocument = !(repositoryJSON.supportsAddDocument === false);

						if (repositoryJSON.inputTimestampAsText)
							this.inputTimestampAsText = repositoryJSON.inputTimestampAsText;

						if (response.allClassesSearch) {
							this.allClassesSearch = response.allClassesSearch;
						}
						if (repositoryJSON.attributes) {
							lang.mixin(this.attributes, repositoryJSON.attributes);
						}

						if (repositoryJSON.adminLayout) {
							if (!repositoryJSON.adminLayout.featureTooltip)
								repositoryJSON.adminLayout.featureTooltip = ecm.messages.launchbar_admin;
							ecm.model.desktop.createAdminFeature(repositoryJSON.adminLayout);
						}
						this.isAdminUser = repositoryJSON.admin_user;
						
						if (repositoryJSON.accessToken){
							this.accessToken = repositoryJSON.accessToken;
						}

						if (this.type == "p8") {
							// Update the object store information.
							if (repositoryJSON.objectStore) {
								this.objectStoreName = repositoryJSON.objectStore;
								this.objectStore = {
									symbolicName: repositoryJSON.objectStore
								};
								if (repositoryJSON.objectStoreDisplayName) {
									this.objectStore.displayName = repositoryJSON.objectStoreDisplayName;
								}
								if (repositoryJSON.objectStoreId) {
									this.objectStore.id = repositoryJSON.objectStoreId;
								}
								if (repositoryJSON.capabilityComment) {
									this.objectStore.capabilityComment = repositoryJSON.capabilityComment;
								}
								if (repositoryJSON.CESchemaVersion) {
									this.objectStore.CESchemaVersion = repositoryJSON.CESchemaVersion;
								}
								this.objectStore.supportsDownloadCount = repositoryJSON.supportsDownloadCount;
								this.objectStore.supportsRecommendation = repositoryJSON.supportsRecommendation;
								this.objectStore.supportsTag = repositoryJSON.supportsTag;
								this.objectStore.supportsBoxShare = repositoryJSON.supportsBoxShare;
							}
							if (repositoryJSON.objectStoreDisplayName) {
								this.objectStoreDisplayName = repositoryJSON.objectStoreDisplayName;
							}
							this.domainId = repositoryJSON.domainId;
						}
					}
				}

				this.onChange(this);
				this.onConnected(this, repositoryJSON);
				if (ecm.model.desktop.getInitialRepository() == this) {
					ecm.model.desktop.onLogin(this);
				}
			}

			for ( var i in response.servers) {
				var repositoryJSON = response.servers[i];
				if (repositoryJSON.connected) {
					var repository = ecm.model.desktop.getRepository(repositoryJSON.repositoryId);
					if (repository != null && repository != this) {
						repository._loadRepository(repositoryJSON);
					}
				}
			}

			// Specify forward == true, so that if in a child window, the state can be
			// forwarded to the top-level window.
			ecm.model.desktop._refreshLinkedBoxRepositories(response, true, true);
			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this);
			}));

			this.logExit("_logonCompleted");
		},

		_loadRepository: function(repositoryJSON) {
			this.connected = true;
			this.userId = repositoryJSON.userID;
			this.externalUser = repositoryJSON.externalUser; // p8
			this.localUser = repositoryJSON.localUser; // p8
			this.userEmailAddress = repositoryJSON.userEmailAddress; // p8 and box
			this.userDisplayName = repositoryJSON.user_displayname;
			this.userLoginName = repositoryJSON.userLoginName || this.userId;

			var workflow = this.privileges.workflow; // Save this value before creating new privileges
			this.privileges = {};
			this.privileges.addDoc = repositoryJSON.priv_addDoc;
			this.privileges.addItem = repositoryJSON.priv_addItem;
			this.privileges.addSearch = repositoryJSON.priv_addSearch;
			this.privileges.addUnifiedSearch = repositoryJSON.priv_addUnifiedSearch;
			this.privileges.addTeamspace = repositoryJSON.priv_addTeamspace;
			this.privileges.addTeamspaceTemplate = repositoryJSON.priv_addTeamspaceTemplate;
			this.privileges.addModifyTeamspaceRole = repositoryJSON.priv_addModifyTeamRoles;
			this.privileges.manageTeamspace = true;
			this.privileges.createHold = repositoryJSON.privCreateHold;
			this.privileges.search = true;
			this.privileges.shareSearch = false;
			this.privileges.findUsersAndGroups = repositoryJSON.privFindUsersAndGroups;
			this.privileges.addEntryTemplate = repositoryJSON.privAddEntryTemplate;
			this.privileges.addRoleBasedRedaction = repositoryJSON.privAddRoleBasedRedaction;
			this.privileges.addRedactionPolicy = repositoryJSON.privAddRedactionPolicy;

			if (this.type == "p8") {
				this.privileges.foldering = true;
				// Update the object store information.
				if (repositoryJSON.objectStore) {
					this.objectStoreName = repositoryJSON.objectStore;
					this.objectStore = {
						symbolicName: repositoryJSON.objectStore
					};
					if (repositoryJSON.objectStoreDisplayName) {
						this.objectStore.displayName = repositoryJSON.objectStoreDisplayName;
					}
					if (repositoryJSON.objectStoreId) {
						this.objectStore.id = repositoryJSON.objectStoreId;
					}
					if (repositoryJSON.capabilityComment) {
						this.objectStore.capabilityComment = repositoryJSON.capabilityComment;
					}
					if (repositoryJSON.CESchemaVersion) {
						this.objectStore.CESchemaVersion = repositoryJSON.CESchemaVersion;
					}
					this.objectStore.supportsDownloadCount = repositoryJSON.supportsDownloadCount;
					this.objectStore.supportsRecommendation = repositoryJSON.supportsRecommendation;
					this.objectStore.supportsTag = repositoryJSON.supportsTag;
					this.objectStore.supportsBoxShare = repositoryJSON.supportsBoxShare;
				}
				if (repositoryJSON.objectStoreDisplayName) {
					this.objectStoreDisplayName = repositoryJSON.objectStoreDisplayName;
				}
				this.domainId = repositoryJSON.domainId;
			} else if (this.type == "cmis") {
				this.privileges.foldering = true;
			} else if (this.type == "cm") {
				this.privileges.foldering = this.folderingEnabled && repositoryJSON.priv_foldering;
			} else {
				this.privileges.foldering = !!repositoryJSON.priv_foldering;
			}
			
			if (repositoryJSON.accessToken){
				this.accessToken = repositoryJSON.accessToken;
			}

			if (workflow != null) {
				this.privileges.workflow = workflow; // Will be set in Desktop loaded implementation
			} else {
				if (this.type == "cm") {
					this.privileges.workflow = this.type == "cm";
				} else if (this.type == "p8") {
					this.privileges.workflow = repositoryJSON.priv_workflow;
				}
			}

			this.textSearchType = repositoryJSON.textSearchType;
			this.capabilityQuery = repositoryJSON.capabilityQuery;
			this.capabilityComment = repositoryJSON.capabilityComment;
			this.supportsDownloadCount = repositoryJSON.supportsDownloadCount;
			this.supportsRecommendation = repositoryJSON.supportsRecommendation;
			this.supportsTag = repositoryJSON.supportsTag;
			this.supportsBoxShare = repositoryJSON.supportsBoxShare;
			this.supportsMultiClassSearch = !!repositoryJSON.supportsMultiClassSearch;
			this.capabilityAllVersionsSearchable = repositoryJSON.capabilityAllVersionsSearchable;
			this.folderSearchSupported = !!repositoryJSON.folderSearchSupported;
			this._searchTemplateSupported = repositoryJSON.searchTemplateSupported;
			this._entryTemplateSupported = repositoryJSON.entryTemplateSupported;
			this._redactionSupported = repositoryJSON.redactionSupported;
			this.allPseudoClassSupported = this._isCM();
			this.allPseudoClassHidden = !!repositoryJSON.allPseudoClassHidden;
			this.supportsAddDocument = !(repositoryJSON.supportsAddDocument === false);

			if (repositoryJSON.inputTimestampAsText)
				this.inputTimestampAsText = repositoryJSON.inputTimestampAsText;

			if (repositoryJSON.allClassesSearch) {
				this.allClassesSearch = repositoryJSON.allClassesSearch;
			}

			this.useSSO = repositoryJSON.useSSO;
			this.isAFP2PDFEnabled = repositoryJSON.afp2pdfEnabled | false;

			//records information
			this.setRecordType(repositoryJSON.recordType);
			this.setRecordDatamodelType(repositoryJSON.recordDatamodelType);

			if (repositoryJSON.adminLayout) {
				if (!repositoryJSON.adminLayout.featureTooltip)
					repositoryJSON.adminLayout.featureTooltip = ecm.messages.launchbar_admin;
				ecm.model.desktop.createAdminFeature(repositoryJSON.adminLayout);
			}
			this.isAdminUser = repositoryJSON.admin_user;

			if (repositoryJSON.iconClass) {
				this.iconClass = repositoryJSON.iconClass;
			}

			//mixin repository attributes from the response if available.
			//This allows plugins to add attributes to a repository after a login request
			if (repositoryJSON.attributes)
				lang.mixin(this.attributes, repositoryJSON.attributes);

			this.onChange(this);
			this.onConnected(this, repositoryJSON);
		},

		/**
		 * An event function that is invoked when either login completes successfully or the repository is otherwise
		 * considered connected (such as after a refresh of the browser and the repository is already connected in the
		 * session.
		 * 
		 * @param repository
		 *            {@link ecm.model.Repository} object is passed as a parameter.
		 * @param repositoryJSON
		 *            an object obtained from the JSON returned from the server for this repository. This object is
		 *            intended to be used by plug-ins to access additional fields added to the repository JSON from a
		 *            plug-in repository type.
		 */
		onConnected: function(repository, repositoryJSON) {
			this.logDebug("onConnected");
		},

		/**
		 * Disconnects from the server.
		 */
		logoff: function() {
			this.logEntry("logoff");
			var self = this;
			var request = ecm.model.Request.invokeService("logoff", this.type, {
				repositoryId: this.id
			}, function(response) {
				self._logoffCompleted(response);
				ecm.model.desktop.logOffRepositories(response);
			});
			this.logExit("logoff");
			return request;
		},

		/**
		 * Clears data cached under this session.
		 */
		_clearCache: function() {
			this.rootItem = null;
			this.templates = null;
			this.templatesFilter = null;
			this.templateFolders = null;
			this.contentClassCache = null;
			this.worklistFolders = null;
			this.worklistContainers = null;
			this.worklists = null;
			this.teamspaces = null;
			this.roles = null;
			this.redactionRoles = null;
			this.teamspaceTemplates = null;
			this.fullyCachedTeamspaces = null;
			this.entryTemplateCache = null;
			this.repositoryConfig = null;
			this.serverPrinters = null;
			this.odItemPermission = null;
			this.appGrpListCache = null;
			this._metadataTemplateCache = null;
		},

		_logoffCompleted: function(response) {
			this.logEntry("_logoffCompleted");
			this.connected = false;
			// All data retrieved under this session should be released below.

			// Clear all pending shared requests.
			this.clearSharedRequests();

			// Clear cached data
			this._clearCache();
			// Clear recent and opened searches
			this._recentSearches = null;
			this.openedSearches = null;
			// The items below are filled in by logon()
			this.attributes = [];
			this.recordRepositoryType = null;
			this.recordDatamodelType = null;
			this._clearPrivileges();
			this.isAdminUser = null;
			this.isAFP2PDFEnabled = false;
			this.onDisconnected(this);
			if (ecm.model.desktop.getInitialRepository() == this) {
				ecm.model.desktop.onLogout(this);
			}
			this.onChange(this); // 20992 - need to let tree model _onDesktopChanged  know to clean up old items.
			this.logExit("_logoffCompleted");
		},

		/**
		 * Set every thing else to null except the foldering and workflow permissions.
		 */
		_clearPrivileges: function() {
			this.privileges.addDoc = null;
			this.privileges.addItem = null;
			this.privileges.addSearch = null;
			this._searchTemplateSupported = null;
			this.privileges.addTeamspace = null;
			this.privileges.addModifyTeamspaceRole = null;
			this.privileges.addTeamspaceTemplate = null;
			this.privileges.findUsersAndGroups = null;
			//this.privileges.workflow = repositoryJSON.priv_workflow;
			this.privileges.manageTeamspace = true;
			//this.privileges.foldering = repositoryJSON.priv_foldering;
			this._entryTemplateSupported = null;
			this.privileges.addEntryTemplate = null;
			this._redactionSupported = null;
			this.privileges.addRoleBasedRedaction = null;
			this.privileges.addRedactionPolicy = null;
		},

		/**
		 * An event function that is invoked when logout completes successfully.
		 * 
		 * @param repository
		 *            {@link ecm.model.Repository} object is passed as a parameter.
		 */
		onDisconnected: function(repository) {
			this.logDebug("onDisconnected");
		},

		/**
		 * Returns true if the server allows password changing.
		 */
		canChangePassword: function() {
			if ((this.type == "od" || this.type == "cm") && this.connected && !this.useSSO) {
				return true;
			}
			return false;
		},

		/**
		 * Returns true if the server allows password changing.
		 */
		canChangeExpiredPassword: function() {
			if ((this.type == "od" || this.type == "cm")) {
				return true;
			}
			return false;
		},
		/**
		 * Performs a password change on the server.
		 * 
		 * @param password
		 *            A string value holding current password.
		 * @param newPassword
		 *            A string holding the new password to set.
		 * @param callback
		 *            A callback function called when the new password has been set.
		 */
		changePassword: function(password, newPassword, callback) {
			this.logEntry("changePassword");
			var self = this;
			var request = ecm.model.Request.invokeService("changePassword", this.type, {
				repositoryId: this.id,
				userid: this.userLoginName || this.userId || ecm.model.desktop.userLoginName || ecm.model.desktop.userId, // If changing the password at the desktop login, the userId needs to come from the desktop.
				password: password,
				new_password: newPassword
			}, function(response) {
				self._changePasswordCompleted(response, callback);
			});
			this.logExit("changePassword");
			return request;
		},

		_changePasswordCompleted: function(response, callback) {
			this.logEntry("_changePasswordCompleted");
			var oldConnected = this.connected;
			/*Making the repository connected after the change password is causing the login to fail
			   after logged in the Desktop is not switching from the loginpane (defect 19371)
			this.connected = true;
			if (!oldConnected) {
				this.onConnected(this);
				this.onChange(this);
			}*/
			callback(this);
			this.logExit("_changePasswordCompleted");
		},

		/**
		 * Retrieves an array of {@link ecm.model.Directory} objects from the repository.
		 * 
		 * @param callback
		 *            A callback function that is called when the directories have been retrieved. Passes an array of
		 *            {@link ecm.model.Directory} objects as a parameter.
		 */
		getDirectories: function(callback) {
			this.logEntry("getDirectories");

			var request = ecm.model.Request.invokeService("getDirectories", this.type, {
				repositoryId: this.id
			}, function(response) {
				var directories = [];
				for ( var i in response.directories) {
					var directoryJSON = response.directories[i];
					var directory = new Directory(directoryJSON);
					directories.push(directory);
				}
				if (callback) {
					callback(directories);
				}
			});

			this.logExit("getDirectories");
			return request;
		},
		
		/**
		 * Query for the specified users.
		 * 
		 * @param callback
		 *            A callback function called when the query for users finishes. Passes an array of
		 *            {@link ecm.model.User} objects as a parameter.
		 * @param directoryName
		 *            A string value holding the FileNet P8 directory name to use.
		 * @param searchString
		 *            A string value holding the actual search string. For Content Manager, use the % wild card to query
		 *            for Starts with, Ends with, and Contains. FileNet P8 uses the <code>searchType</code> parameter.
		 * @param searchType
		 *            A string value holding the FileNet P8 search type (Starts with = 2 Ends with = 3 and Contains =
		 *            4).
		 * @param sortType
		 *            A string value holding the FileNet P8 sort type (Ascending = 1 and Descending = 2).
		 * @param maxResult
		 *            A string value holding the maximum results expected.
		 * @param searchAttribute
		 *            A string holding the FileNet P8 search by attribute (Short Name = 1 and Display Name).
		 * @param queryAcrossDomains
		 *            A boolean value indicating if the query should cross domains. It is for Content Manager only. *
		 * @param excludeAdminAccounts
		 *            A boolean value indicating if the query should exclude admin account with Item Super Access
		 *            privilege. It is for Content Manager only.
		 * @param includeGroups
		 * @since 3.0
		 *           A boolean indicating groups should be included in the response as well as users. Box only.
		 */
		findUsers: function(callback, directoryName, searchString, searchType, sortType, maxResult, searchAttribute, queryAcrossDomains, excludeAdminAccounts, includeGroups, onError, callerHandledErrorNumbers) {
			this.logEntry("findUsers");
			var request = ecm.model.Request.invokeService("findUsers", this.type, {
				repositoryId: this.id,
				queryAcrossDomains: queryAcrossDomains,
				excludeAdminAccounts: !!excludeAdminAccounts,
				directoryName: directoryName,
				searchString: searchString,
				searchType: searchType ? searchType : "2",
				sortType: sortType ? sortType : "1",
				maxResult: maxResult ? maxResult : "500",
				searchAttribute: searchAttribute,
				includeGroups: includeGroups
			}, function(response) {
				var users = [];
				for ( var i in response.items) {
					var userJSON = response.items[i];
					if (!userJSON.emailAddress)
						userJSON.emailAddress = userJSON.name;

					var user = new User(userJSON);
					users.push(user);
				}
				if (callback) {
					callback(users);
				}
			}, false, false, onError, callerHandledErrorNumbers);

			this.logExit("findUsers");
			return request;
		},
		
		/**
		 * Query for the specified users.
		 * 
		 * @param callback
		 *            A callback function called when the query for users finishes. Passes an array of
		 *            {@link ecm.model.User} objects as a parameter.
		 * @param directoryName
		 *            A string value holding the FileNet P8 directory name to use.
		 * @param searchString
		 *            A string value holding the actual search string. For Content Manager, use the % wild card to query
		 *            for Starts with, Ends with, and Contains. FileNet P8 uses the <code>searchType</code> parameter.
		 * @param searchType
		 *            A string value holding the FileNet P8 search type (Starts with = 2 Ends with = 3 and Contains =
		 *            4).
		 * @param sortType
		 *            A string value holding the FileNet P8 sort type (Ascending = 1 and Descending = 2).
		 * @param maxResult
		 *            A string value holding the maximum results expected.
		 * @param searchAttribute
		 *            A string holding the FileNet P8 search by attribute (Short Name = 1 and Display Name).
		 * @param queryAcrossDomains
		 *            A boolean value indicating if the query should cross domains. It is for Content Manager only. *
		 * @param excludeAdminAccounts
		 *            A boolean value indicating if the query should exclude admin account with Item Super Access
		 *            privilege. It is for Content Manager only.
		 * @param includeGroups
		 * @since 3.0
		 *           A boolean indicating groups should be included in the response as well as users. Box only.
		 */
		findRoles: function(callback, directoryName, searchString, searchType, sortType, maxResult, searchAttribute, queryAcrossDomains, excludeAdminAccounts, includeGroups, onError, callerHandledErrorNumbers) {
			this.logEntry("findUsers");
			var request = ecm.model.Request.invokeService("findRoles", this.type, {
				repositoryId: this.id,
				queryAcrossDomains: queryAcrossDomains,
				excludeAdminAccounts: !!excludeAdminAccounts,
				directoryName: directoryName,
				searchString: searchString,
				searchType: searchType ? searchType : "2",
				sortType: sortType ? sortType : "1",
				maxResult: maxResult ? maxResult : "500",
				searchAttribute: searchAttribute,
				includeGroups: includeGroups
			}, function(response) {
				var roles = [];
				for ( var i in response.items) {
					var roleJSON = response.items[i];

					var role = new User(roleJSON);
					roles.push(role);
				}
				if (callback) {
					callback(roles);
				}
			}, false, false, onError, callerHandledErrorNumbers);

			this.logExit("findUsers");
			return request;
		},

		/**
		 * Query for the specified groups
		 * 
		 * @param callback
		 *            A callback function called when the query for groups finishes. Passes an array of
		 *            {@link ecm.model.UserGroup} objects as a parameter.
		 * @param directoryName
		 *            A string value holding the P8 directory name to use.
		 * @param searchString
		 *            A string value holding the actual search string. For CM, use the % wild card to query for Starts
		 *            with, Ends with and Contains. P8 uses the searchType parameter.
		 * @param searchType
		 *            A string value holding the P8 search type (Starts with = 2 Ends with = 3 and Contains = 4).
		 * @param sortType
		 *            A string value holding the P8 sort type (Ascending = 1 and Descending = 2).
		 * @param maxResult
		 *            A string value holding the maximum results expected.
		 * @param searchAttribute
		 *            A string holding the P8 search by attribute (Short Name = 1 and Display Name).
		 * @param queryAcrossDomains
		 *            A boolean value indicating if the query should cross domains. It is for IBM Content Manager only.
		 */
		findGroups: function(callback, directoryName, searchString, searchType, sortType, maxResult, searchAttribute, queryAcrossDomains) {
			this.logEntry("findGroups");
			var request = ecm.model.Request.invokeService("findGroups", this.type, {
				repositoryId: this.id,
				queryAcrossDomains: queryAcrossDomains,
				directoryName: directoryName,
				searchString: searchString,
				searchType: searchType ? searchType : "2",
				sortType: sortType ? sortType : "1",
				maxResult: maxResult ? maxResult : "500",
				searchAttribute: searchAttribute
			}, function(response) {
				var groups = [];
				for ( var i in response.items) {
					var groupJSON = response.items[i];
					var group = new UserGroup(groupJSON);
					groups.push(group);
				}
				if (callback) {
					callback(groups);
				}
			});
			this.logExit("findGroups");
			return request;
		},

		/**
		 * Returns an instance of {@link ecm.model.ContentClass} for the given class identifier.
		 * 
		 * @param classId
		 *            The identifier of the content class.
		 * @param objectStore
		 *            P8 only. The object store for the class if it is not from the active repository.
		 */
		getContentClass: function(classId, objectStore) {
			return this._getContentClass({
				classId: classId,
				objectStore: objectStore
			});
		},

		/**
		 * @private Returns an instance of {@link ecm.model.ContentClass} for the given class identifier.
		 * @param params
		 *            An object containing the parameter properties listed below.
		 *            <ul>
		 *            <li><code>classId</code><br>
		 *            The identifier of the content class.</li>
		 *            <li><code>objectStore</code><br>
		 *            P8 only. The object store for the class if it is not from the active repository.</li>
		 *            </ul>
		 */
		_getContentClass: function(params) {
			if (!params || !params.classId) {
				return;
			}
			this.logEntry("getContentClass", arguments);
			var classId = params.classId;
			var objectStore = params.objectStore;
			var formType = params.formType; // used to request a context aware content class when adding an OD document
			var contentClassCache;
			var contentClass;

			if (contentClassCache = this.contentClassCache) {
				if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
					if (contentClassCache = contentClassCache.byObjectStore) {
						if (contentClassCache = contentClassCache[objectStore.symbolicName.toLowerCase()]) {
							if (contentClassCache = contentClassCache.byId) {
								contentClass = contentClassCache[classId];
							}
						}
					}
				} else if (formType) {
					if (contentClassCache = contentClassCache.byFormType) {
						if (contentClassCache = contentClassCache[formType]) {
							if (contentClassCache = contentClassCache.byId) {
								contentClass = contentClassCache[classId];
							}
						}
					}
				} else {
					if (contentClassCache = contentClassCache.byId) {
						contentClass = contentClassCache[classId];
					}
				}
			}

			if (!contentClass) {
				contentClass = this._cacheContentClassById(new ContentClass({
					id: classId,
					name: classId,
					repository: this,
					objectStore: objectStore || null,
					pseudoClass: false,
					allowsInstances: true,
					_formType: formType || null
				}));
			}
			this.logExit("getContentClass", (contentClass ? contentClass.name : ""));
			return contentClass;
		},

		/**
		 * Returns a boolean value if search templates are supported in this repository.
		 */
		isSearchTemplateSupported: function() {
			var priv = this._searchTemplateSupported;
			this.logEntry("isSearchTemplateSupported " + priv);
			if (this.type == "od")
				return true;
			if (priv == null) {
				this.retrievePrivileges(lang.hitch(this, function() {
					priv = this._searchTemplateSupported;
				}));
			}
			this.logExit("isSearchTemplateSupported " + priv);
			return priv;
		},

		/**
		 * Returns a boolean value if IBM Content Navigator entry templates are supported in this repository.
		 * 
		 * @since 2.0.3
		 */
		isEntryTemplateSupported: function() {
			var priv = this._entryTemplateSupported;
			this.logEntry("isEntryTemplateSupported " + priv);
			if (this.type != "p8" && this.type != "cm")
				return false;
			if (priv == null) {
				this.retrievePrivileges(lang.hitch(this, function() {
					priv = this._entryTemplateSupported;
				}));
			}
			this.logExit("isEntryTemplateSupported " + priv);
			return priv;
		},

		/**
		 * Returns a boolean value if IBM Content Navigator role-based redaction is supported in this repository.
		 * 
		 * @since 3.0
		 */
		isRedactionSupported: function() {
			var priv = this._redactionSupported;
			this.logEntry("isRedactionSupported " + priv);
			if (this.type != "p8" && this.type != "cm")
				return false;
			if (priv == null) {
				this.retrievePrivileges(lang.hitch(this, function() {
					priv = this._redactionSupported;
				}));
			}
			this.logExit("isRedactionSupported " + priv);
			return priv;
		},

		/**
		 * Get the specified privilege from the privileges.
		 * 
		 * @param privilege
		 *            A string value holding the privilege name to look up.
		 */
		getPrivilege: function(privilege) {
			var priv = this.privileges[privilege];
			this.logDebug("getPrivilege", privilege + "=" + priv);
			if (priv == null && this.type != "od") {
				this.retrievePrivileges(lang.hitch(this, function(privileges) {
					if (privileges) {
						priv = privileges[privilege];
						this.logDebug("getPrivilege", privilege + "=" + priv);
					}
				}));
			}
			return priv;
		},

		/**
		 * Retrieves all the privileges for the repository
		 * 
		 * @param callback
		 *            A callback function called when the privileges have been retrieved. Passes the array of privileges
		 *            as a parameter.
		 */
		retrievePrivileges: function(callback) {
			this.logEntry("retrievePrivileges");
			var request = null;
			if (this.connected) {
				var self = this;
				request = ecm.model.Request.invokeService("getPrivileges", this.type, {
					repositoryId: this.id
				}, function(response) {
					for ( var i in response.servers) {
						var repositoryJSON = response.servers[i];
						self._retrievePrivilegesCompleted(repositoryJSON, callback);
					}

				}, false, true);
			} else {
				callback(null);
			}

			this.logExit("retrievePrivileges");
			return request;
		},

		_retrievePrivilegesCompleted: function(repositoryJSON, callback) {
			this.logEntry("_retrievePrivilegesCompleted");

			this.privileges.addDoc = repositoryJSON.priv_addDoc;
			this.privileges.addItem = repositoryJSON.priv_addItem;
			this.privileges.addSearch = repositoryJSON.priv_addSearch;
			this.privileges.addUnifiedSearch = repositoryJSON.priv_addUnifiedSearch;
			this._searchTemplateSupported = repositoryJSON.searchTemplateSupported;
			this.privileges.addTeamspace = repositoryJSON.priv_addTeamspace;
			this.privileges.addTeamspaceTemplate = repositoryJSON.priv_addTeamspaceTemplate;
			this.privileges.addModifyTeamspaceRole = repositoryJSON.priv_addModifyTeamRoles;
			this.privileges.manageTeamspace = true;
			this.privileges.findUsersAndGroups = repositoryJSON.privFindUsersAndGroups;
			this.privileges.workflow = repositoryJSON.priv_workflow;
			this._entryTemplateSupported = repositoryJSON.entryTemplateSupported;
			this.privileges.addEntryTemplate = repositoryJSON.privAddEntryTemplate;
			this._redactionSupported = repositoryJSON.redactionSupported;
			this.privileges.addRoleBasedRedaction = repositoryJSON.privAddRoleBasedRedaction;
			this.privileges.addRedactionPolicy = repositoryJSON.privAddRedactionPolicy;

			if (repositoryJSON.priv_foldering != null) {
				if (this.type == "cm") {
					this.privileges.foldering = this.folderingEnabled && repositoryJSON.priv_foldering;
				} else {
					this.privileges.foldering = repositoryJSON.priv_foldering;
				}
			}
			if (callback) {
				callback(this.privileges);
			}
			this.logExit("_retrievePrivilegesCompleted");
		},

		/**
		 * Retrieves filenames of the items
		 * 
		 * @param items
		 *            Array of {@link ecm.model.ContentItem} to get filenames.
		 * @param callback
		 *            A callback function called when the filenames have been retrieved. Passes the map of item id and
		 *            filenames as a parameter.
		 * @param userPartFileName
		 *            It is for Content Manager to return file name for part name or based on properties. FileNet will
		 *            not use this parameter.
		 */
		retrieveFileNames: function(items, callback, usePartFileName) {
			this.logEntry("retrieveFileNames");
			var request = null;
			if (this.connected) {
				var self = this;
				var docIds = [];
				for (var i = 0; i < items.length; i++) {
					if (!items[i].filename) {
						docIds.push(items[i].id);
					}
				}
				if (docIds.length > 0) {
					request = ecm.model.Request.invokeService("getFileNames", this.type, {
						repositoryId: this.id,
						usePartFileName: usePartFileName,
						docid: docIds
					}, function(response) {
						var fileNames = response.fileNames;
						self._retrieveFileNamesCompleted(items, fileNames, callback);
					}, false, true);
				} else {
					callback(items);
				}
			} else {
				callback(null);
			}

			this.logExit("retrieveFileNames");
			return request;
		},

		_retrieveFileNamesCompleted: function(items, fileNames, callback) {
			this.logEntry("_retrieveFileNamesCompleted");
			for (var i = 0; i < fileNames.length; i++) {
				for (var j = 0; j < items.length; j++) {
					if (fileNames[i].itemId == items[j].id) {
						items[j].filename = fileNames[i].filename;
					}
				}
			}
			callback(items);
			this.logExit("_retrieveFileNamesCompleted");
		},

		/**
		 * Gets the default {@link ecm.model.SearchTemplate} object for the repository (if one exists).
		 */
		getDefaultTemplate: function() {
			var template = null;
			this.retrieveSearchTemplates(function(templates) {
				if (templates && templates.length > 0) {
					template = templates[0];
				}
			});
			return template;
		},

		/**
		 * Retrieves an array of {@link ecm.model.SearchTemplate} objects for the repository.
		 * 
		 * @param callback
		 *            A callback function called after the searches have been retrieved. Passes an array of
		 *            {@link ecm.model.SearchTemplate} objects as a parameter.
		 * @param filter
		 *            A string value holding the search filter type.
		 */
		retrieveSearchTemplates: function(callback, filter) {
			this.logEntry("retrieveSearchTemplates");
			var request = null;
			if (!filter) {
				filter = "navigation";
			}
			if (this.templates && this.templatesFilter == filter) {
				if (callback) {
					callback(this.templates);
				}
			} else {
				var self = this;
				request = ecm.model.Request.invokeService("getSearchTemplates", this.type, {
					repositoryId: this.id,
					filter_type: filter
				}, function(response) {
					self._retrieveSearchTemplatesCompleted(response, callback);
				});
				this.templatesFilter = filter;
			}
			this.logExit("retrieveSearchTemplates");
			return request;
		},

		_retrieveSearchTemplatesCompleted: function(response, callback) {
			this.logEntry("_retrieveSearchTemplatesCompleted");
			var items = response.rows;
			this.templates = [];
			for ( var i in items) {
				var factory = ecm.model.UnifiedSearchTemplate.instanceOf(items[i], this) ? ecm.model.UnifiedSearchTemplate : ecm.model.SearchTemplate;
				var template = factory.createFromJSON(items[i], this);
				this.templates.push(template);
			}
			if (callback) {
				callback(this.templates);
			}
			this.logExit("_retrieveSearchTemplatesCompleted");
		},

		/**
		 * Retrieves an {@link ecm.model.SearchTemplate} object from the repository.
		 * 
		 * @param docId
		 *            A string value holding the document id of the serch template to retrieve
		 * @param vsId
		 *            A string value holding the version series Id of the search template (optional, FileNet P8 only)
		 * @param version
		 *            A string value holding the version to return; ie. "current" or "released" (optional)
		 * @param callback
		 *            A callback function called after the searches have been retrieved. Passes an
		 *            {@link ecm.model.SearchTemplate} object as a parameter.
		 * @param backgroundRequest
		 *            Boolean flag indicating if the request to retrieve the search template should be run in the
		 *            background.
		 */
		retrieveSearchTemplate: function(docId, vsId, version, callback, errorback, backgroundRequest) {
			this.logEntry("retrieveSearchTemplate");
			var request = null;
			if (this.type != "od") {
				var params = {
					requestParams: {
						repositoryId: this.id,
						docid: docId
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this._retrieveSearchTemplateCompleted(response, callback);
					}),
					requestFailedCallback: errorback,
					backgroundRequest: backgroundRequest,
					cancellable: false,
					synchronous: false
				}
				if (vsId) {
					params.requestParams.vsId = vsId;
				}
				if (version) {
					params.requestParams.version = version;
				}
				request = ecm.model.Request.invokeServiceAPI("getContentItems", this.type, params);
			} else {
				var json = {
					rows: [
						{
							id: docId,
							name: docId,
							attributes: []
						}
					]
				};
				this._retrieveSearchTemplateCompleted(json, callback);
			}
			this.logExit("retrieveSearchTemplate");
			return request;
		},

		_retrieveSearchTemplateCompleted: function(response, callback) {
			this.logEntry("_retrieveSearchTemplateCompleted");
			var item = response.rows[0];
			var factory = ecm.model.UnifiedSearchTemplate.instanceOf(item, this) ? ecm.model.UnifiedSearchTemplate : ecm.model.SearchTemplate;
			var template = factory.createFromJSON(item, this);
			if (callback) {
				callback(template);
			}
			this.logExit("_retrieveSearchTemplateCompleted");
		},

		_getEntryTemplateFromCacheById: function(entryTemplateId, objectStore) {
			if (!entryTemplateId) {
				return;
			}
			var entryTemplateCache;
			var entryTemplate;

			if (entryTemplateCache = this.entryTemplateCache) {
				if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
					if (entryTemplateCache = entryTemplateCache.byObjectStore) {
						if (entryTemplateCache = entryTemplateCache[objectStore.symbolicName.toLowerCase()]) {
							if (entryTemplateCache = entryTemplateCache.byId) {
								entryTemplate = entryTemplateCache[entryTemplateId];
							}
						}
					}
				} else {
					if (entryTemplateCache = entryTemplateCache.byId) {
						entryTemplate = entryTemplateCache[entryTemplateId];
					}
				}
			}
			return entryTemplate;
		},

		/**
		 * Returns an instance of {@link ecm.model.EntryTemplate} for the given entry template identifier. The returned
		 * instance is cached in this repository object. The cached instance will be returned if this method is called
		 * again with the same entryTemplateId.
		 * <p>
		 * <strong>Important:</strong> Do not modify the contents of the returned entryTemplate instance. A private
		 * copy can be created by calling the <code>clone<code> method on the returned instance.  
		 * 
		 * @param entryTemplateId
		 *            A string value holding the identifier of the entry template.
		 *            For Filenet P8, this is the entry template {@link ecm.model.ContentItem} ID.
		 *            For IBM Content Manager, this is the entry template Content Manager ITEMID. 
		 * @param entryTemplateName
		 *            A string value holding the entry template name.
		 * @param objectStore
		 *            An object store object holding its identifier information.
		 * @param type
		 * 			  A string value holding the type attribute of the entry template.
		 */
		getEntryTemplateById: function(entryTemplateId, entryTemplateName, objectStore, type) {
			if (!entryTemplateId) {
				return;
			}

			var entryTemplate = this._getEntryTemplateFromCacheById(entryTemplateId, objectStore);

			if (!entryTemplate) {
				if (!entryTemplateName) {
					entryTemplateName = entryTemplateId;
				}

				var entryTemplateJSON = {
					name: entryTemplateName,
					repository: this
				};

				if (this._isCM()) {
					entryTemplateJSON.itemId = entryTemplateId;
				} else {
					entryTemplateJSON.id = entryTemplateId;
				}

				if (type)
					entryTemplateJSON.type = type;

				entryTemplate = EntryTemplate.createFromJSON(entryTemplateJSON);
				entryTemplate = this._cacheEntryTemplate(entryTemplate, objectStore);
			}
			return entryTemplate;
		},

		_cacheEntryTemplate: function(entryTemplate, objectStore) {
			if (!entryTemplate) {
				return;
			}

			var id = this._isCM() ? entryTemplate.itemId : entryTemplate.id;

			var entryTemplateCache = this.entryTemplateCache || (this.entryTemplateCache = {});

			if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
				entryTemplateCache = entryTemplateCache.byObjectStore || (entryTemplateCache.byObjectStore = {});
				entryTemplateCache = entryTemplateCache[objectStore.symbolicName.toLowerCase()] || (entryTemplateCache[objectStore.symbolicName.toLowerCase()] = {});
			}

			if (!entryTemplateCache.byId) {
				entryTemplateCache.byId = {};
			}
			var cachedEntryTemplate = entryTemplateCache.byId[id];
			if (cachedEntryTemplate) {
				if (entryTemplate.isRetrieved) {
					lang.mixin(cachedEntryTemplate, entryTemplate);
				}
				entryTemplate = cachedEntryTemplate;
			} else {
				if (entryTemplate.vsId && entryTemplateCache.byVsId && entryTemplateCache.byVsId[entryTemplate.vsId]) {
					// Update the cached entry template with the new version of this entryTemplate.
					entryTemplate = lang.mixin(entryTemplateCache.byVsId[entryTemplate.vsId], entryTemplate);
					// Add a reference for the new id.
					entryTemplateCache.byId[id] = entryTemplate;
				} else {
					entryTemplateCache.byId[id] = entryTemplate;
					if (entryTemplate.vsId) {
						if (!entryTemplateCache.byVsId) {
							entryTemplateCache.byVsId = {};
						}
						entryTemplateCache.byVsId[entryTemplate.vsId] = entryTemplate;
					}
				}
			}

			return entryTemplate;
		},
		
		/**
		 * Retrieves an array of {@link ecm.model.EntryTemplate} given their ids. The repository entryTemplateCache
		 * is checked first - any entry templates already in the cache are not retrieved again from the repository.
		 * 
		 * @param entryTemplateIds
		 * 			An array of entry template ids for which the entry templates will be returned.
		 * 
		 * @param callback
		 *            A callback function to be called after the entry templates are retrieved. Passes an array of
		 *            {@link ecm.model.EntryTemplate} objects as a parameter.
		 */
		retrieveEntryTemplatesByIds: function(entryTemplateIds, callback){
			this.logEntry("retrieveEntryTemplatesByIds");
			
			// Check the cache for the entry templates
			var neededEntryTemplateIds = [];
			var cachedEntryTemplatesObject = {};
			var cachedEntryTemplates = [];
			for (var index in entryTemplateIds){
				var entryTemplateId = entryTemplateIds[index];
				if (!cachedEntryTemplatesObject[entryTemplateId]){
					var cachedEntryTemplate = this._getEntryTemplateFromCacheById(entryTemplateId);
					if (cachedEntryTemplate){
						
						// Clone the entry templates so we don't run into version problems when we get any needed ETs from the server below.
						// If any of the ETs returned from the server are different versions of the same ET, their ids may be updated from what
						// they are here when we get it from the cache.
						cachedEntryTemplate = cachedEntryTemplate.clone();
						
						// If the cached entry template doesn't have the same id as the one we asked for (a new version may have
						// been created), change the id to what we expect.
						if (this._isP8() && cachedEntryTemplate.id != entryTemplateId){
							cachedEntryTemplate.id = entryTemplateId
						}
						cachedEntryTemplatesObject[entryTemplateId] = cachedEntryTemplate;
						cachedEntryTemplates.push(cachedEntryTemplate);
					}
					else if (neededEntryTemplateIds.indexOf(entryTemplateId) < 0){
						neededEntryTemplateIds.push(entryTemplateId);
					}
				}
			}
			
			if (neededEntryTemplateIds.length > 0){
				var request = ecm.model.Request.invokeService("getEntryTemplates", this.type, {
					repositoryId: this.id,
					docid: neededEntryTemplateIds
				}, lang.hitch(this, function(response) {
					var _neededEntryTemplateIds = neededEntryTemplateIds;
					this._retrieveEntryTemplatesCompleted(response, lang.hitch(this, function(){
						
						// Get the entry templates from the cache, since caching them may return different versions from _retrieveEntryTemplatesCompleted.
						for (var index in _neededEntryTemplateIds){
							var entryTemplateId = _neededEntryTemplateIds[index];
							var cachedEntryTemplate = this._getEntryTemplateFromCacheById(entryTemplateId);
							
							// If an entry template is not found, for example, the ET id on the document/folder refers to a prior version that has been 
							// deleted, or the user doesn't have access to the ET, create an empty ET.
							if (!cachedEntryTemplate){
								cachedEntryTemplate = this.getEntryTemplateById(entryTemplateId);
							}
								
							// Same as above - if the cached entry template doesn't have the same id as the one we asked for (a new version may have
							// been created), clone the template set the id.
							cachedEntryTemplate = cachedEntryTemplate.clone();
							if (this._isP8() && cachedEntryTemplate.id != entryTemplateId){
								cachedEntryTemplate.id = entryTemplateId;
							}
							cachedEntryTemplates.push(cachedEntryTemplate);
						}
						callback(cachedEntryTemplates);
					}));
				}));
			}
			else {
				callback(cachedEntryTemplates);
			}

			this.logExit("retrieveEntryTemplatesByIds");
		},
		
		/**
		 * Retrieves an array of {@link ecm.model.EntryTemplate} objects from a repository based on a filter.
		 * 
		 * @param callback
		 *            A callback function to be called after the entry templates are retrieved. Passes an array of
		 *            {@link ecm.model.EntryTemplate} objects as a parameter.
		 * @param filter
		 *            A string value holding the filter criteria (setting to null, will retrieve all entry templates).
		 * @param folderId
		 *            A string value holding the folder identifier.
		 * @param rootFolderId
		 *            A string value holding the root folder identifier.
		 * @param objectStore
		 *            An object store object holding its identifier information.
		 */
		retrieveEntryTemplates: function(callback, filter, folderId, rootFolderId, objectStore, onError) {
			this.logEntry("retrieveEntryTemplates");
			var request = null;
			// If no filter provided, use the default of "all".
			if (!filter) {
				filter = "all";
			}

			var entryTemplates = null;
			var entryTemplateCache;
			if (entryTemplateCache = this.entryTemplateCache) {
				if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
					entryTemplateCache = entryTemplateCache.byObjectStore && entryTemplateCache.byObjectStore[objectStore.symbolicName.toLowerCase()];
				}
				if (entryTemplateCache) {
					if (folderId) {
						if (entryTemplateCache.byFolderId) {
							entryTemplates = entryTemplateCache.byFolderId[folderId];
							var counts = entryTemplateCache.byFolderId[folderId + "_counts"];
						}
					} else {
						if (entryTemplateCache.byFilter) {
							entryTemplates = entryTemplateCache.byFilter[filter];
						}
					}
				}
			}

			if (entryTemplates) {
				if (folderId) {
					var folderEntryTemplates = [];
					for (var i = 0; i < entryTemplates.length; i++) {
						// Clone so that the cached entry template isn't modified.
						var entryTemplate = entryTemplates[i].clone();
						if (entryTemplate.byFolderId[folderId]) {
							entryTemplate.fileTypes = entryTemplates[i].byFolderId[folderId].fileTypes;
							entryTemplate.currentFolderAsParent = entryTemplates[i].byFolderId[folderId].currentFolderAsParent;
							entryTemplate.isDefault = entryTemplates[i].byFolderId[folderId].isDefault;
						}
						folderEntryTemplates.push(entryTemplate);
					}
					entryTemplates = folderEntryTemplates;
				}
				if (callback) {
					var document_ET_count;
					var folder_ET_count;
					if (counts) {
						document_ET_count = counts.document_ET_count;
						folder_ET_count = counts.folder_ET_count;
					}
					callback(entryTemplates, document_ET_count, folder_ET_count);
				}
			} else {
				request = ecm.model.Request.invokeService("getEntryTemplates", this.type, {
					repositoryId: this.id,
					filter_type: filter,
					folderDocid: folderId || "",
					rootFolderId: rootFolderId || "",
					objectStoreId: objectStore ? objectStore.id : ""
				}, lang.hitch(this, function(response) {
					this._retrieveEntryTemplatesCompleted(response, callback, filter, folderId, objectStore);
				}), null, null, onError);
			}
			this.logExit("retrieveEntryTemplates");
			return request;
		},

		_retrieveEntryTemplatesCompleted: function(response, callback, filter, folderId, objectStore) {
			this.logEntry("_retrieveEntryTemplatesCompleted");

			var entryTemplates = [];
			for ( var i in response.datastore.items) {
				var entryTemplateJSON = response.datastore.items[i];
				entryTemplateJSON.id = entryTemplateJSON.template_name;
				delete entryTemplateJSON.template_name;
				entryTemplateJSON.name = entryTemplateJSON.template_label;
				delete entryTemplateJSON.template_label;
				entryTemplateJSON.description = entryTemplateJSON.template_desc;
				delete entryTemplateJSON.template_desc;
				entryTemplateJSON.repository = this;

				var entryTemplate = EntryTemplate.createFromJSON(entryTemplateJSON);
				entryTemplate = this._cacheEntryTemplate(entryTemplate, objectStore);
				entryTemplate.fileTypes = entryTemplateJSON.fileTypes;
				entryTemplate.currentFolderAsParent = entryTemplateJSON.currentFolderAsParent;
				entryTemplate.isDefault = entryTemplateJSON.isDefault;
				if (!entryTemplate.byFolderId) {
					entryTemplate.byFolderId = {};
				}
				entryTemplate.byFolderId[folderId] = {};
				entryTemplate.byFolderId[folderId].fileTypes = entryTemplateJSON.fileTypes;
				entryTemplate.byFolderId[folderId].currentFolderAsParent = entryTemplateJSON.currentFolderAsParent;
				entryTemplate.byFolderId[folderId].isDefault = entryTemplateJSON.isDefault;
				entryTemplates.push(entryTemplate);
			}
			if (!this.entryTemplateCache) {
				this.entryTemplateCache = {};
			}
			var entryTemplateCache = this.entryTemplateCache;

			if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
				entryTemplateCache = entryTemplateCache.byObjectStore || (entryTemplateCache.byObjectStore = {});
				entryTemplateCache = entryTemplateCache[objectStore.symbolicName.toLowerCase()] || (entryTemplateCache[objectStore.symbolicName.toLowerCase()] = {});
			}
			if (folderId) {
				if (!entryTemplateCache.byFolderId) {
					entryTemplateCache.byFolderId = {};
				}
				entryTemplateCache.byFolderId[folderId] = entryTemplates;
				entryTemplateCache.byFolderId[folderId + "_counts"] = {
					"document_ET_count": response.document_ET_count,
					"folder_ET_count": response.folder_ET_count
				};
			} else {
				if (!entryTemplateCache.byFilter) {
					entryTemplateCache.byFilter = {};
				}
				entryTemplateCache.byFilter[filter] = entryTemplates;
			}
			if (callback) {
				callback(entryTemplates, response.document_ET_count, response.folder_ET_count);
			}
			this.logExit("_retrieveEntryTemplatesCompleted");
		},

		/**
		 * Clear the entry template cache held by this repository
		 * 
		 * @param filter
		 *            A string value holding the filter criteria (setting to null, will clear all entry templates).
		 * @param allFolders
		 *            A boolean value indicating that all folder entry templates in the cache should be cleared.
		 * @param folderId
		 *            A string value holding a folder identifier to clear from the cache.
		 * @param objectStore
		 *            An object store object holding its identifier information, will clear items with same object
		 *            store.
		 */
		clearEntryTemplateCache: function(filter, allFolders, folderId, objectStore) {
			var entryTemplateCache;
			// clear entire cache
			if (filter == null && folderId == null && allFolders == null) {
				delete this.entryTemplateCache;
				return;
			}
			if (entryTemplateCache = this.entryTemplateCache) {
				if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
					entryTemplateCache = entryTemplateCache.byObjectStore && entryTemplateCache.byObjectStore[objectStore.symbolicName.toLowerCase()];
				}
				if (entryTemplateCache) {
					if (allFolders) {
						if (entryTemplateCache.byFolderId) {
							delete entryTemplateCache.byFolderId;
						}
					} else if (folderId) {
						if (entryTemplateCache.byFolderId) {
							delete entryTemplateCache.byFolderId[folderId];
						}
					} else {
						if (entryTemplateCache.byFilter) {
							delete entryTemplateCache.byFilter[filter];
						}
					}
				}
			}
		},

		/**
		 * Retrieves an array of edit service templates {@link ecm.model.ContentItem} from a repository.
		 * 
		 * @param callback
		 *            A callback function to be called after the edit service templates are retrieved. Passes an array of
		 *            {@link ecm.model.ContentItem} objects as a parameter.		 
		 * @param categoryId 		 *            		
		 *            A string value holding the category ID
		 * @param onError
		 *            A callback function that is called if an error is returned when retrieving the edit service templates
		 * @param callerHandledErrorNumbers
		 *            An array of error numbers that are handled by the caller.
		 * @since 3.0.1
		 */
		retrieveEditServiceTemplates: function(callback, categoryId, onError, callerHandledErrorNumbers) {
			this.logEntry("retrieveEditServiceTemplates");
			
			var contentItems;
			if (this.editServiceTemplateCache) {
				if (categoryId) {
					contentItems = this.editServiceTemplateCache[categoryId];
				} 
			}
			if (contentItems) {
				callback(contentItems);
			} else {
			request = ecm.model.Request.invokeService("getEditServiceTemplates", this.type, {
				repositoryId: this.id,				
				categoryId: categoryId
			}, lang.hitch(this, function(response) {
					this._retrieveEditServiceTemplatesCompleted(response, categoryId, callback);
			}), null, null, onError, null, callerHandledErrorNumbers);
			}
			this.logExit("retrieveEditServiceTemplates");
		},
		
		_retrieveEditServiceTemplatesCompleted: function(response, categoryId, callback) {
			this.logEntry("_retrieveEditServiceTemplatesCompleted");
			var items = response.rows;
			var contentItems = [];
			if (items) {
				for (var i = 0; i < items.length; i++) {
					var itemJSON = items[i];							
					var item = ecm.model.ContentItem.createFromJSON(itemJSON, this, null);
						contentItems.push(item);
				}
			}
			var editServiceTemplateCache = this.editServiceTemplateCache || (this.editServiceTemplateCache = {});
			if (categoryId) {
				editServiceTemplateCache[categoryId] = contentItems;
			} 
			if (callback)
				callback(contentItems);
			this.logExit("_retrieveEditServiceTemplatesCompleted");
		},
		
		/**
		 * Clear the edit service cache held by this repository
		 * 		
		 * @param categoryId 		             		
		 *            A string value holding the Category ID	 
		 * @since 3.0.1
		 */
		clearEditServiceTemplateCache: function(categoryId) {
			this.logEntry("clearEditServiceTemplateCache");
			if (!this.editServiceTemplateCache)
				return;
			
			if (categoryId) {
				delete this.editServiceTemplateCache[categoryId];
			} 
			this.logExit("clearEditServiceTemplateCache");
		},
		
		/**
		 * Get edit service category object by id
		 * @param categoryId
		 * 			A string value holding the Category ID
		 * @since 3.0.1
		 */
		getEditCategoryObject: function( categoryId ){
			var editCategory = null;
			if( this.editServiceCategories && this.editServiceCategories.length ){
				for( var i = 0; i < this.editServiceCategories.length; i ++ ){
					if( this.editServiceCategories[i].name == categoryId ){
						editCategory = this.editServiceCategories[i];
						break;
					}
				}
			}
			return editCategory;
		},
		
		/**
		 * Retrieves an array of office online templates {@link ecm.model.ContentItem} from a repository.
		 * 
		 * @param callback
		 *            A callback function to be called after the office online templates are retrieved. Passes an array of
		 *            {@link ecm.model.ContentItem} objects as a parameter.		 
		 * @param templateType 		 *            		
		 *            A string value holding the template type (1 = Word, 2 = PowerPoint, 3 = Excel, Unspecified = All)
		 * @param onError
		 *            A callback function that is called if an error is returned when retrieving the office templates
		 * @param callerHandledErrorNumbers
		 *            An array of error numbers that are handled by the caller.
		 * @since 3.0.0
		 */
		retrieveOfficeOnlineTemplates: function(callback, templateType, onError, callerHandledErrorNumbers) {
			var contentItems;
			if (this.officeTemplateCache) {
				if (templateType) {
					contentItems = this.officeTemplateCache[templateType];
				} else {
					contentItems = this.officeTemplateCache["all"];
				} 
			}
			if (contentItems) {
				callback(contentItems);
			} else {
			request = ecm.model.Request.invokeService("getOfficeOnlineTemplates", this.type, {
				repositoryId: this.id,				
				templateType: templateType
			}, lang.hitch(this, function(response) {
					this._retrieveOfficeTemplatesCompleted(response, templateType, callback);
			}), null, null, onError, null, callerHandledErrorNumbers);
			}
		},
		
		_retrieveOfficeTemplatesCompleted: function(response, templateType, callback) {
			var items = response.rows;
			var contentItems = [];
			if (items) {
				for (var i = 0; i < items.length; i++) {
					var itemJSON = items[i];							
					var item = ecm.model.ContentItem.createFromJSON(itemJSON, this, null);
						contentItems.push(item);
				}
			}
			var officeTemplateCache = this.officeTemplateCache || (this.officeTemplateCache = {});
			if (templateType) {
				officeTemplateCache[templateType] = contentItems;
			} else {
				officeTemplateCache["all"] = contentItems;
			} 
			if (callback)
				callback(contentItems);
		},
		
		/**
		 * Clear the office template cache held by this repository
		 * 		
		 * @param templateType 		 *            		
		 *            A string value holding the template type (1 = Word, 2 = PowerPoint, 3 = Excel, Unspecified = All)		 
		 * @since 3.0.0
		 */
		clearOfficeTemplateCache: function(templateType) {
			if (!this.officeTemplateCache)
				return;
			
			if (templateType) {
				delete this.officeTemplateCache[templateType];
			} else {
				delete this.officeTemplateCache["all"];
			} 
		},
		
		/**
		 * Returns boolean indicating if this repository supports repository filtering.
		 * 
		 * @since 2.0.3
		 */
		supportsFiltering: function() {
			if (this._isP8() || this._isCmis()) {
				return true;
			} else if (this._isCM()) {
				return this.getRepositoryConfig().getDocNameProperty() ? true : false;
			} else {
				return false;
			}
		},

		/**
		 * Returns boolean indicating if this repository uses case sensitive filtering.
		 * 
		 * @since 2.0.3
		 */
		isCaseSensitiveFiltering: function() {
			return this._isCM();
		},

		/**
		 * Adds a search template to the content server.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model.SearchTemplate}.
		 * @param callback
		 *            A function that is invoked when the add has completed successfully. The search template is passed
		 *            as the only argument.
		 */
		addSearchTemplate: function(searchTemplate, callback, teamspace) {
			this.logEntry("addSearchTemplate");
			var self = this;
			var request = ecm.model.Request.postService("addSearchTemplate", this.type, {
				repositoryId: this.id
			}, "text/json", searchTemplate.toJson(), function(response) {
				self._searchTemplateAdded(response, searchTemplate, callback);
			});
			this.logExit("addSearchTemplate");
			return request;
		},

		_searchTemplateAdded: function(response, searchTemplate, callback) {
			if (response) {
				var properties = response.rows[0];
				lang.mixin(searchTemplate, properties);
			}
			searchTemplate.permissions = null;

			if (this.templates)
				this.templates.push(searchTemplate);

			if (callback)
				callback(searchTemplate);

			this.onSearchTemplateAdded(searchTemplate);
			this.onChange(this);
		},

		/**
		 * A event function called after a search template has been added to the repository.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} is passed as a parameter.
		 */
		onSearchTemplateAdded: function(searchTemplate) {
			this.logEntry("onSearchTemplateAdded");
		},

		/**
		 * Clears the search template cache.
		 */
		clearSearchTemplates: function() {
			this.logEntry("clearSearchTemplates");
			this.templates = null;
			this.onChange(this);
			this.logExit("clearSearchTemplates");
		},

		/**
		 * Deletes search templates.
		 * 
		 * @param searchTemplates
		 *            An array of {@link ecm.model.SearchTemplate} objects to delete.
		 */
		searchTemplatesDeleted: function(searchTemplates) {
			this.removeRecentSearches(searchTemplates);

			array.forEach(searchTemplates, function(searchTemplate) {
				this._searchTemplateDeleted(searchTemplate);
			}, this);
		},

		_searchTemplateDeleted: function(searchTemplate) {
			if (this.templates) {
				for (var i = 0; i < this.templates.length; i++) {
					if (this.templates[i].equals(searchTemplate)) {
						this.templates.splice(i, 1);
						break;
					}
				}
			}

			if (this.openedSearches) {
				for ( var i in this.openedSearches) {
					if (this.openedSearches[i].equals(searchTemplate)) {
						delete this.openedSearches[i];
					}
				}
			}

			this.onSearchTemplateDeleted(searchTemplate.id, searchTemplate.vsId);
		},

		/**
		 * An event function that is called after a search template has been deleted.
		 * 
		 * @param searchTemplateId
		 *            A string value holding the search template's ID.
		 * @param searchVsId
		 *            A string value holding the search template's version series ID (FileNet P8 only).
		 */
		onSearchTemplateDeleted: function(searchTemplateId, searchVsId) {
		},

		/**
		 * Retrieves the search template folders (only Content Manager OnDemand supports this type of search).
		 * 
		 * @param callback
		 *            A callback function called after the search template folders have been retrieved. Passes an array
		 *            of {@link ecm.model.SearchTemplateFolder} objects as a parameter.
		 */
		retrieveSearchTemplateFolders: function(callback) {
			this.logEntry("retrieveSearchTemplateFolders");
			var request = null;
			if (this.templateFolders) {
				if (callback) {
					callback(this.templateFolders);
				}
			} else {
				if (this.type == "od") { // only OD has search template folders right now
					var self = this;
					request = ecm.model.Request.invokeService("getCabinets", this.type, {
						repositoryId: this.id
					}, function(response) {
						self._retrieveSearchTemplateFoldersCompleted(response, callback);
					});
				} else {
					this._retrieveSearchTemplateFoldersCompleted({
						datastore: {
							items: []
						}
					}, callback); // fake a response w no folders
				}
			}
			this.logExit("retrieveSearchTemplateFolders");
			return request;
		},

		_retrieveSearchTemplateFoldersCompleted: function(response, callback) {
			this.logEntry("_retrieveSearchTemplateFoldersCompleted");
			this.templateFolders = [];

			// the first folder is an "all templates" folder
			if (!this._allSearchTemplatesFolder) {
				this._allSearchTemplatesFolder = new SearchTemplateFolder({
					id: "all",
					name: ecm.messages.all_search_templates,
					description: "",
					repository: this,
					canAddItem: false
				});
			}
			this.templateFolders.push(this._allSearchTemplatesFolder);

			for ( var i in response.datastore.items) {
				var templateFolderJSON = response.datastore.items[i];
				templateFolderJSON.repository = this;
				templateFolderJSON.id = templateFolderJSON.cabinet_name;
				templateFolderJSON.name = templateFolderJSON.cabinet_name;
				templateFolderJSON.description = templateFolderJSON.cabinet_desc;
				//templateFolderJSON.canAddItem = templateFolderJSON.canAddItem;

				var templateFolder = new SearchTemplateFolder(templateFolderJSON);
				this.templateFolders.push(templateFolder);
			}

			if (callback) {
				callback(this.templateFolders);
			}
			this.onSearchTemplateFoldersRetrieved(this);
			this.logExit("_retrieveSearchTemplateFoldersCompleted");
		},

		/**
		 * An event function called after the search template folders have been retrieved.
		 * 
		 * @param repository
		 *            {@link ecm.model.Repository} object is passed as a parameter.
		 */
		onSearchTemplateFoldersRetrieved: function(repository) {
		},

		/**
		 * Retrieves a specified list of {@link ecm.model.ContentClass} objects (instead of all classes), this is a case
		 * for teamspace builder.
		 * 
		 * @param callback
		 *            A callback function to call when all the classes have been retrieved. Passes an array of
		 *            {@link ecm.model.ContentClass} objects as a parameter.
		 * @param itemList
		 *            A list of {@link ecm.model.ContentClass} items.
		 */
		retrieveContentClassList: function(callback, itemList) {
			this.logEntry("retrieveContentClassList", "itemList=" + itemList);
			var self = this;

			var request = ecm.model.Request.invokeService("getContentClasses", this.type, {
				repositoryId: this.id,
				itemList: dojojson.toJson(itemList)
			}, function(response) {
				var classList = [];
				var responseItems;
				if (response.datastore) {
					responseItems = response.datastore.items;
				} else if (response.rows) {
					responseItems = response.rows
				}
				if (responseItems) {
					for ( var i in responseItems) {
						var templateJSON = responseItems[i];
						if (templateJSON[0]) { // optimization for OD
							var template = new ContentClass({
								id: templateJSON[0],
								name: templateJSON[1] || templateJSON[0],
								repository: self
							});
						} else if (!templateJSON.template_name) {// optimization for OD
							var template = new ContentClass({
								id: templateJSON.id,
								name: templateJSON.name,
								repository: self
							});
						} else {
							var template = new ContentClass({
								id: templateJSON.template_name,
								name: templateJSON.template_label,
								repository: self
							});
							if (templateJSON.allowsInstances != null) {
								template.allowsInstances = templateJSON.allowsInstances;
							}
							if (templateJSON.isQueryable != null) {
								template.isQueryable = templateJSON.isQueryable;
							}
							if (templateJSON.includedInSuperClassQuery != null) {
								template.includedInSuperClassQuery = templateJSON.includedInSuperClassQuery;
							}
						}
						classList.push(template);
					}
				}
				callback(classList);
			});

			this.logExit("retrieveContentClassList");
			return request;
		},

		_cacheContentClassById: function(contentClass) {
			if (!contentClass) {
				return;
			}
			var contentClassCache = this.contentClassCache || (this.contentClassCache = {});
			var objectStore = contentClass.objectStore;
			var formType = contentClass._formType;
			if (objectStore && objectStore.symbolicName && this.objectStoreName && (objectStore.symbolicName.toLowerCase() != this.objectStoreName.toLowerCase())) {
				contentClassCache = contentClassCache.byObjectStore || (contentClassCache.byObjectStore = {});
				contentClassCache = contentClassCache[objectStore.symbolicName.toLowerCase()] || (contentClassCache[objectStore.symbolicName.toLowerCase()] = {});
			} else if (formType) {
				contentClassCache = contentClassCache.byFormType || (contentClassCache.byFormType = {});
				contentClassCache = contentClassCache[formType] || (contentClassCache[formType] = {});
			}

			if (contentClassCache.byId) {
				// If a content class with this Id is already cached, update the cached instance.
				var cachedContentClass = contentClassCache.byId[contentClass.id];
				if (cachedContentClass) {
					for ( var prop in contentClass) {
						// Update the properties.
						if (contentClass.hasOwnProperty(prop)) {
							cachedContentClass[prop] = contentClass[prop];
						}
					}
					return cachedContentClass;
				}
			} else {
				contentClassCache.byId = {};
			}
			contentClassCache.byId[contentClass.id] = contentClass;
			return contentClass;
		},

		_getContentClassesRetrieveFilterType: function(filterType) {
			if (filterType == "editItem") {
				// Only CM returns a different class list for "editItem".
				if (!this._isCM()) {
					filterType = null;
				}
			} else if (this._isP8()) {
				// P8 filtered class lists are the same as the full class list - except for "search"
				if (filterType != "search") {
					filterType = null;
				}
			}
			return filterType;
		},

		/**
		 * Clears the repository content classes cache for the provided filter type.
		 * 
		 * @param filterType
		 *            A string value holding the filter type for the cached content classes. If no filter type is
		 *            provided, the entire content class cache is cleared.
		 * @since 2.0.3
		 */
		clearContentClassesCache: function(filterType) {
			if (this.contentClassCache) {
				filterType = this._getContentClassesRetrieveFilterType(filterType);
				if (filterType && (filterType.length > 0)) {
					if (this.contentClassCache.byFilterType) {
						delete this.contentClassCache.byFilterType[filterType];
					}
				} else {
					delete this.contentClassCache;
				}
			}
		},

		/**
		 * Retrieves an array of {@link ecm.model.ContentClass} objects.
		 * 
		 * @param callback
		 *            A callback function to call when the classes have been retrieved. Passes an array of
		 *            {@link ecm.model.ContentClass} objects as a parameter.
		 * @param filterType
		 *            A string value holding the filter type.
		 */
		retrieveContentClasses: function(callback, filterType) {
			this.logEntry("retrieveContentClasses");
			var request = null;
			var contentClasses = null;

			filterType = this._getContentClassesRetrieveFilterType(filterType);

			if (this.contentClassCache) {
				if (filterType && (filterType.length > 0)) {
					if (this.contentClassCache.byFilterType) {
						contentClasses = this.contentClassCache.byFilterType[filterType];
					}
				} else {
					contentClasses = this.contentClassCache.all;
				}
			}

			if (contentClasses) {
				if (callback) {
					callback(contentClasses);
				}
			} else {
				var sharedRequestParams = {
					sharedRequestMethod: "retrieveContentClasses",
					sharedRequestKey: (filterType == null) ? "all" : filterType,
					sharedRequestCompleteCallback: callback,
					serviceName: "getContentClasses",
					repositoryType: this.type,
					requestParams: {
						repositoryId: this.id,
						filter_type: filterType
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this._retrieveContentClassesCompleted(response, sharedRequestParams);
					})
				};
				request = this.invokeSharedRequest(sharedRequestParams);
			}
			this.logExit("retrieveContentClasses");
			return request;
		},

		_retrieveContentClassesCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveContentClassesCompleted");
			var filterType = sharedRequestParams.requestParams.filter_type;
			var contentClassJSON;
			var contentClass;
			var contentClasses = [];
			if (this._isOnDemand()) {
				// Classes for OnDemand are generated from the search objects, so the response is in the service "getSearchTemplates" response format.
				for ( var i in response.rows) {
					contentClassJSON = response.rows[i];
					contentClass = this._cacheContentClassById(new ContentClass({
						id: contentClassJSON.id,
						name: contentClassJSON.name,
						repository: this
					}));
					contentClasses.push(contentClass);
				}
			} else {
				for ( var i in response.datastore.items) {
					contentClassJSON = response.datastore.items[i];

					if (contentClassJSON[0]) { // optimization for OD
					} else {
						contentClassJSON.id = contentClassJSON.template_name;
						delete contentClassJSON.template_name;
						contentClassJSON.name = contentClassJSON.template_label;
						delete contentClassJSON.template_label;
						delete contentClassJSON.template_desc;
						contentClassJSON.repository = this;

						if (this._isCM()) {
							contentClassJSON.allowsInstances = true;
							contentClassJSON.itemTypeSecurity = contentClassJSON.item_type_acl;
							delete contentClassJSON.item_type_acl;
						}
						contentClass = new ContentClass(contentClassJSON);
					}
					contentClass = this._cacheContentClassById(contentClass);
					contentClasses.push(contentClass);
				}
			}

			if (!this.contentClassCache) {
				this.contentClassCache = {};
			}

			if (filterType && (filterType.length > 0)) {
				if (!this.contentClassCache.byFilterType) {
					this.contentClassCache.byFilterType = {};
				}
				if (!this.contentClassCache.byFilterType[filterType]) {
					this.contentClassCache.byFilterType[filterType] = {};
				}
				this.contentClassCache.byFilterType[filterType] = contentClasses;
			} else {
				this.contentClassCache.all = contentClasses;
			}

			this.completeSharedRequest(sharedRequestParams, function(callback) {
				callback(contentClasses);
			});

			this.logExit("_retrieveContentClassesCompleted");
		},

		_retrieveItem: function(params, itemRetrievedCallback) {
			this.logEntry("_retrieveItem");
			var sharedRequestParams = lang.mixin(lang.mixin({}, params), {
				sharedRequestMethod: "_retrieveItem",
				sharedRequestKey: params.requestParams.docid + ":" + params.requestParams.version + ":" + (params.requestParams.vsId ? params.requestParams.vsId : ""),
				sharedRequestCompleteCallback: itemRetrievedCallback,
				sharedRequestFailedCallback: params.requestFailedCallback,
				serviceName: "getContentItems",
				repositoryType: this.type,
				requestCompleteCallback: lang.hitch(this, function(response) {
					response.requestDocid = sharedRequestParams.requestParams.docid;
					this._retrieveItemCompleted(response, sharedRequestParams);
				}),
				requestFailedCallback: lang.hitch(this, function(response, errorMessages) {
					this.failSharedRequest(sharedRequestParams, function(callback) {
						if (callback) {
							callback(response, errorMessages);
						}
					});
				})
			});
			var request = this.invokeSharedRequest(sharedRequestParams);
			this.logExit("_retrieveItem");
			return request;
		},

		/**
		 * Retrieves the specified {@link ecm.model.ContentItem} from the repository.
		 * 
		 * @param itemIdOrPath
		 *            A String value holding the item identifier or item path.
		 * @param itemRetrievedCallback
		 *            A callback function called after the item has been retrieved. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param templateID
		 *            A string value holding the template Id.
		 * @param version
		 *            A string holding the version requested; ie. "current" or "released" (optional).
		 * @param vsId
		 *            A string value holding the version series identifier (optional, FileNet P8 only).
		 * @param objectStoreId
		 *            A string value holding the object store identifier (FileNet P8 only).
		 * @param action
		 *            A string value to pass up to the mid-tier specifying the action being performed (optional).
		 * @param params
		 *            An object containing parameters to control the request to the server. For example, you can set the
		 *            retrieve to be performed in the background. See {@link ecm.model.Request} for a list of parameters
		 *            supported by a server request.
		 */
		retrieveItem: function(itemIdOrPath, itemRetrievedCallback, templateID, version, vsId, objectStoreId, action, params) {
			this.logEntry("retrieveItem", "itemIdOrPath=" + itemIdOrPath);
			if (!params) {
				params = {
					requestParams: {}
				};
			}
			if (this.type == "box") {
				itemIdOrPath;
			}

			params.requestParams = {
				repositoryId: this.id,
				objectStoreId: objectStoreId || "",
				docid: itemIdOrPath,
				template_name: templateID ? templateID : "",
				version: version ? version : ""
			};
			if (action) {
				params.requestParams.action = action;
			}
			if (vsId) {
				params.requestParams.vsId = vsId;
			}

			this.logExit("retrieveItem");
			return this._retrieveItem(params, itemRetrievedCallback);
		},

		/**
		 * Retrieves the admon root (@link ecm.model.ContentItem} from the repository.
		 * 
		 * @param itemIdOrPath
		 *            A String value holding the item identifier or item path.
		 * @param itemRetrievedCallback
		 *            A callback function called after the item has been retrieved. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param templateID
		 *            A string value holding the template Id.
		 * @param version
		 *            A string holding the version requested; ie. "current" or "released" (optional).
		 * @param vsId
		 *            A string value holding the version series identifier (optional, FileNet P8 only)
		 * @param objectStoreId
		 *            A string value holding the object store identifier (FileNet P8 only).
		 * @param params
		 *            An object containing parameters to control the request to the server. For example, you can set the
		 *            retrieve to be performed in the background. See {@link ecm.model.Request} for a list of parameters
		 *            supported by a server request.
		 */
		retrieveAdminRoot: function(itemIdOrPath, itemRetrievedCallback, templateID, version, vsId, objectStoreId, params) {
			this.logEntry("retrieveAdminRoot", "itemIdOrPath=" + itemIdOrPath);

			if (!params)
				params = {};
			params.requestParams = {
				repositoryId: this.id,
				objectStoreId: objectStoreId || "",
				docid: itemIdOrPath,
				template_name: templateID ? templateID : "",
				version: version ? version : "",
				adminRoot: "true"
			};

			if (vsId) {
				params.requestParams.vsId = vsId;
			}

			this.logExit("retrieveAdminRoot");
			return this._retrieveItem(params, itemRetrievedCallback);
		},

		_retrieveItemCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveItemCompleted");

			var itemJSON = response.rows[0];

			var item = null;
			if (itemJSON) {
				if (response.requestDocid == "/" && !itemJSON.rootfolder) { // a root item
					itemJSON.rootfolder = true;
				}
				item = ContentItem.createFromJSON(itemJSON, this, null);
			}

			if (response.requestDocid == "/") { // a root item
				this.rootItem = item;
			}

			this.completeSharedRequest(sharedRequestParams, function(callback) {
				callback(item);
			});

			this.logExit("_retrieveItemCompleted");
		},

		// _teamspaceItemsCache: null,

		/**
		 * Retrieves multiple items by sending more than one docid. If the array contains only one docid and the item
		 * cannot be retrieved the call will return an error. However, if the array contains more than one docid and one
		 * refers to an item that cannot be retrieved the call will succeed and result in a list of
		 * {@link ecm.model.ContentItem} objects representing only the successfully retrieved items.
		 * 
		 * @param itemIdArray
		 *            An array of string values holding the item identifier
		 * @param itemRetrievedCallback
		 *            A callback function called after the item has been retrieved. Will pass an array of
		 *            {@link ecm.model.ContentItem} objects as a parameter.
		 * @param templateID
		 *            A string value holding the template Id.
		 * @param version
		 *            A string holding the version requested; ie. "current" or "released" (optional).
		 * @param vsId
		 *            A string value holding the version series identifier (optional, FileNet P8 only).
		 * @param retrieveSecurityParent
		 *            Boolean value to indicate if the security parent value should be retrieved ((optional, FileNet P8
		 *            only).
		 * @param retrieveSocialData       
		 *            Boolean value to indicate if social data should be retrieved for documents in the results (optional,
		 *            FileNet P8 only).
		 * @param exportCM8ChildComponents       
		 *            Boolean value to indicate if CM8 child components data should be exported (optional,
		 *            CM8 only).          
		 */
		retrieveMultiItem: function(itemIdArray, itemRetrievedCallback, templateID, version, vsId, retrieveSecurityParent, retrieveSocialData, exportCM8ChildComponents) {
			this.logEntry("retrieveMultiItem", "item array length=" + itemIdArray.length);
			var request = null;
			var requestParams = {
				repositoryId: this.id,
				docid: itemIdArray,
				multiitem: "true",
				template_name: templateID ? templateID : "",
				version: version ? version : "",
				retrieveSecurityParent: retrieveSecurityParent,
				retrieveSocialData: retrieveSocialData,
				exportCM8ChildComponents: exportCM8ChildComponents
			};

			if (vsId)
				requestParams.vsId = vsId;

			// if (this._teamspaceItemsCache) {
			// 	itemRetrievedCallback(this._teamspaceItemsCache);
			// } else {
			request = ecm.model.Request.invokeService("getContentItems", this.type, requestParams, lang.hitch(this, function(response) {
				this._retrieveMultiItemCompleted(response, itemRetrievedCallback);
			}));
			// }

			this.logExit("retrieveMultiItem");
			return request;
		},

		_retrieveMultiItemCompleted: function(response, itemRetrievedCallback) {
			this.logEntry("_retrieveMultiItemCompleted");
			// this._teamspaceItemsCache = [];
			var items = response.rows;
			var contentItems = [];
			if (items) {
				for (var i = 0; i < items.length; i++) {
					var itemJSON = items[i];
					var item = ContentItem.createFromJSON(itemJSON, this, null);
					// this._teamspaceItemsCache.push(item);
					contentItems.push(item);
				}
			}

			if (itemRetrievedCallback) {
				//itemRetrievedCallback(this._teamspaceItemsCache);
				itemRetrievedCallback(contentItems);
			}
			this.logExit("_retrieveMultiItemCompleted");
		},

		/**
		 * @private
		 */
		_makeAddDocumentItemArgs: function(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, mixFormParams, applicationGroup, application, parameters, templateMetadataValues, fullPath) {

			var formParams = {
				criterias: JSON.stringify(criterias),
				childComponentValues: JSON.stringify(childComponentValues),
				acl: JSON.stringify(permissions)
			};
			if (templateMetadataValues){
				formParams.templateMetadata = JSON.stringify(templateMetadataValues);
			}

			if (content) {
				if (content.type == "Base64") {
					formParams.fileBase64 = content.content;
				} else {
					formParams.file = content;
				}
			}

			var args = {
				desktop: ecm.model.desktop.id,
				repositoryId: this.id,
				workspaceId: teamspaceId,
				parm_content_source_type: contentSourceType,
				docid: (parentFolder && parentFolder.id) || "",
				template_name: templateName,
				mimetype: mimeType,
				parm_part_filename: filename,
				fullPath: fullPath
			};

			if (parameters)
				lang.mixin(args, parameters);

			if (this._isOnDemand()) {
				args.application_group = applicationGroup;
				args.application = application;
			}

			if (mixFormParams) {
				args.criterias = formParams.criterias;
				args.childComponentValues = formParams.childComponentValues;
				args.acl = formParams.acl;
				
				if (formParams.templateMetadataValues){
					args.templateMetadata = formParams.templateMetadataValues;
				}
			}

			if (this._isCM()) {
				args.parm_part_type = "ICMBASE";
			} else if (this._isP8()) {
				args.securityPolicyId = securityPolicyId;
				args.asMinorVersion = addAsMinorVersion ? "true" : "false";
				args.autoClassify = autoClassify ? "true" : "false";
				args.compoundDocument = compoundDocument ? "true" : "false";
				args.allowDuplicateFileNames = allowDuplicateFileNames ? "true" : "false";
				args.set_security_parent = setSecurityParent ? "true" : "false";
				args.objectStoreId = objectStore ? objectStore.id : "";
			} else if (this._isCmis()) {
				args.asMinorVersion = addAsMinorVersion ? "true" : "false";
			}
			return args;
		},

		/**
		 * Adds a document to the repository.
		 * 
		 * @param parentFolder
		 *            A {@link ecm.model.ContentItem} object for the parent folder.
		 * @param objectStore
		 *            A object store object holding identifier information (FileNet P8 only).
		 * @param templateName
		 *            A string value holding the content class name.
		 * @param criterias
		 *            An object holding the criteria information.
		 * @param contentSourceType
		 *            A string value holding the content source type.
		 * @param mimeType
		 *            A string value holding the MIME type.
		 * @param filename
		 *            A string value holding the file name.
		 * @param content
		 *            A object holding the file stream.
		 * @param childComponentValues
		 *            An object holding the child component values (Content Manager only).
		 * @param permissions
		 *            An object holding the permission information.
		 * @param securityPolicyId
		 *            A string value holding the security policy id (FileNet P8 only).
		 * @param addAsMinorVersion
		 *            A boolean value indicating whether to add as a minor version.
		 * @param autoClassify
		 *            A boolean value indicating whether to automatically classify this object on add (FileNet P8 only).
		 * @param allowDuplicateFileNames
		 *            A boolean value indicating whether the content server will allow duplicate file names.
		 * @param setSecurityParent
		 *            A boolean value indicating whether the security parent should be set.
		 * @param teamspaceId
		 *            A string value holding the teamspace id.
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process.
		 * @param onError
		 *            A callback function that is called if an error is returned when adding this document.
		 * @param compoundDocument
		 *            A boolean value indicating whether this is a compound document (FileNet P8 only).
		 * @param uploadProgress
		 *            A boolean value indicating whether the event listener is added for upload progress event.
		 * @param parameters
		 * @since 2.0.3.6 An object holding additional parameters to be passed in the request.
		 * @param templateMetadataValues
		 * @since 3.0 An array holding template metadata values (Box only).
		 * @param fullPath
		 *  		  The local full path of dnd folders.
		 * @since 3.0.3 for dnd folders support.
		 */
		addDocumentItem: function(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, uploadProgress, applicationGroup, application, parameters, templateMetadataValues, fullPath) {
			this.logEntry("addDocumentItem");
			var args = this._makeAddDocumentItemArgs(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, null, applicationGroup, application, parameters, templateMetadataValues, fullPath);

			var formParams = {
				criterias: JSON.stringify(criterias),
				childComponentValues: JSON.stringify(childComponentValues),
				acl: JSON.stringify(permissions)
			};
			if (templateMetadataValues){
				formParams.templateMetadata = JSON.stringify(templateMetadataValues);
			}

			if (content) {
				if (content.type == "Base64") {
					formParams.fileBase64 = content.content;
				} else {
					formParams.file = content;
				}
			}
			var request = ecm.model.Request.postFormToServiceAPI("addItem", this.type, {
				requestParams: args,
				requestCompleteCallback: lang.hitch(this, function(response) {
					this._addDocumentItemCompleted(response, parentFolder, callback);
				}),
				backgroundRequest: isBackgroundRequest,
				requestFailedCallback: onError,
				uploadProgress: uploadProgress
			}, formParams);

			this.logExit("addDocumentItem");
			return request;
		},
		
		/**
		 * Adds a large document which size is bigger than 2GB to the repository.
		 * 
		 * @param parentFolder
		 *            A {@link ecm.model.ContentItem} object for the parent folder.
		 * @param objectStore
		 *            A object store object holding identifier information (FileNet P8 only).
		 * @param templateName
		 *            A string value holding the content class name.
		 * @param criterias
		 *            An object holding the criteria information.
		 * @param contentSourceType
		 *            A string value holding the content source type.
		 * @param mimeType
		 *            A string value holding the MIME type.
		 * @param filename
		 *            A string value holding the file name.
		 * @param content
		 *            A object holding the file stream.
		 * @param childComponentValues
		 *            An object holding the child component values (Content Manager only).
		 * @param permissions
		 *            An object holding the permission information.
		 * @param securityPolicyId
		 *            A string value holding the security policy id (FileNet P8 only).
		 * @param addAsMinorVersion
		 *            A boolean value indicating whether to add as a minor version.
		 * @param autoClassify
		 *            A boolean value indicating whether to automatically classify this object on add (FileNet P8 only).
		 * @param allowDuplicateFileNames
		 *            A boolean value indicating whether the content server will allow duplicate file names.
		 * @param setSecurityParent
		 *            A boolean value indicating whether the security parent should be set.
		 * @param teamspaceId
		 *            A string value holding the teamspace id.
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process.
		 * @param onError
		 *            A callback function that is called if an error is returned when adding this document.
		 * @param compoundDocument
		 *            A boolean value indicating whether this is a compound document (FileNet P8 only).
		 * @param uploadProgress
		 *            A boolean value indicating whether the event listener is added for upload progress event.
		 * @param parameters
		 *            An object holding additional parameters to be passed in the request.
		 * @param templateMetadataValues
		 * @since 3.0.1 An array holding template metadata values (Box only).
		 * @param fullPath
		 *  		  The local full path of dnd folders.
		 * @since 3.0.3 To support dnd folders.
		 */
		addLargeDocumentItem: function(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, uploadProgress, applicationGroup, application, parameters, templateMetadataValues, fullPath) {
			this.logEntry("addLargeDocumentItem");
			var args = this._makeAddDocumentItemArgs(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, null, applicationGroup, application, parameters, templateMetadataValues, fullPath);
			
			var formParams = {
				criterias: JSON.stringify(criterias),
				childComponentValues: JSON.stringify(childComponentValues),
				acl: JSON.stringify(permissions)
			};		
			if (templateMetadataValues){
				formParams.templateMetadata = JSON.stringify(templateMetadataValues);
			}
			
			var blob = content;
			var BYTES_PER_CHUNK = 104857600;//chunk size is 100M.
			if (has("mac") && has("safari")) 
				BYTES_PER_CHUNK = 20971520; //chunk size is 20M for safari.
            var SIZE = blob.size;
            var start = 0;
            var end = BYTES_PER_CHUNK;
            var sequence = 0;
            var requestId = generateRandomUuid();
            
            var hasEqualSizeChunk = false;
           
            while( start < SIZE ) {

            	if (end >= SIZE && !hasEqualSizeChunk) {
                	//it is the last chunk
                	var lastChunkSize = SIZE - start;
                	for (var i = 0; i < sequence; i++) {
                		if (BYTES_PER_CHUNK + i == lastChunkSize) {
                			hasEqualSizeChunk = true;
                			break;
                		}
                	}
                	
                }
                
                if (hasEqualSizeChunk) {
                	end = start + BYTES_PER_CHUNK / 2 + sequence;
                }
                
                var chunk = blob.slice(start, end);
                
                formParams.file = chunk;
                formParams.requestFileId = requestId;
                formParams.fileSize = SIZE;
                formParams.sequence = sequence;
                formParams.partFileName = filename;
                
                var request = ecm.model.Request.postFormToServiceAPI("addLargeItem", this.type, {
        			requestParams: args,
        			requestCompleteCallback: lang.hitch(this, function(response) {
        				if (response.messages && response.messages.length == 1) {
            				this.logDebug("AddLargeDocumentCompleted");
            				this._addDocumentItemCompleted(response, parentFolder, callback);
        				} else {
        					this.logDebug("AddOneChunkCompleted");
        				}
        			}),
        			backgroundRequest: isBackgroundRequest,
        			requestFailedCallback: onError,
        			uploadProgress: uploadProgress
        		}, formParams);
                sequence ++;
                start = end;
                end = start + BYTES_PER_CHUNK + sequence;
            };
			
			this.logExit("addLargeDocumentItem");
			return request;
		},


		/**
		 * Adds a document to the repository. This version requires an input form to be provided that contains the
		 * following fields:
		 * <ul>
		 * <li>file: The file to upload
		 * <li>criterias: Document repository properties
		 * <li>childComponentValues: Child component values
		 * <li>acl: Document permissions
		 * </ul>
		 * 
		 * @param parentFolder
		 *            A {@link ecm.model.ContentItem} object for the parent folder.
		 * @param objectStore
		 *            A object store object holding identifier information (FileNet P8 only).
		 * @param templateName
		 *            A string value holding the content class name.
		 * @param contentSourceType
		 *            A string value holding the content source type.
		 * @param filename
		 *            A string value holding the file name.
		 * @param form
		 *            A form object holding the file stream.
		 * @param securityPolicyId
		 *            A string value holding the security policy id (FileNet P8 only).
		 * @param addAsMinorVersion
		 *            A boolean value indicating whether to add as a minor version.
		 * @param autoClassify
		 *            A boolean value indicating whether to automatically classify this object on add (FileNet P8 only).
		 * @param allowDuplicateFileNames
		 *            A boolean value indicating whether the content server will allow duplicate file names.
		 * @param setSecurityParent
		 *            A boolean value indicating whether the security parent should be set.
		 * @param teamspaceId
		 *            A string value holding the teamspace id.
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process.
		 * @param onError
		 *            A callback function called if there is an error returned when adding this document.
		 * @param compoundDocument
		 *            A boolean value indicating whether this is a compound document (FileNet P8 only).
		 */
		addDocumentItemUsingForm: function(parentFolder, objectStore, templateName, contentSourceType, filename, form, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument) {
			this.logEntry("addDocumentItemUsingForm");

			var args = {
				desktop: ecm.model.desktop.id,
				repositoryId: this.id,
				workspaceId: teamspaceId,
				parm_content_source_type: contentSourceType,
				docid: (parentFolder && parentFolder.id) || "",
				template_name: templateName,
				parm_part_filename: filename
			};

			if (this._isCM()) {
				args.parm_part_type = "ICMBASE";
			} else if (this._isP8()) {
				args.securityPolicyId = securityPolicyId;
				args.asMinorVersion = addAsMinorVersion ? "true" : "false";
				args.autoClassify = autoClassify ? "true" : "false";
				args.compoundDocument = compoundDocument ? "true" : "false";
				args.allowDuplicateFileNames = allowDuplicateFileNames ? "true" : "false";
				args.set_security_parent = setSecurityParent ? "true" : "false";
				args.objectStoreId = objectStore ? objectStore.id : "";
			} else if (this._isCmis()) {
				args.asMinorVersion = addAsMinorVersion ? "true" : "false";
			}

			var request = ecm.model.Request.ieFileUploadServiceAPI("addItem", this.type, {
				requestParams: args,
				requestCompleteCallback: lang.hitch(this, function(response) {
					this._addDocumentItemCompleted(response, parentFolder, callback);
				}),
				backgroundRequest: isBackgroundRequest,
				requestFailedCallback: onError
			}, form);

			this.logExit("addDocumentItemUsingForm");
			return request;
		},

		_addDocumentItemCompleted: function(response, parentFolder, callback) {
			this.logEntry("_addDocumentItemCompleted");
			if (response.fieldErrors || response.templateMetadataErrors) {
				if (callback) {
					callback(undefined, response.fieldErrors, response.templateMetadataErrors);
				}
			} else {
				if (callback) {
					if (this._isOnDemand()) {
						//Here cmod does not have return docitem
						callback(null);
					} else {
						var itemJSON = response.rows[0];
						if (itemJSON) {
							var newItem = ContentItem.createFromJSON(itemJSON, this, null, parentFolder);
							this.addRecentItem(newItem);
							callback(newItem);
						} else {
							callback(null);
						}
					}
				}

			}
			this.logExit("_addDocumentItemCompleted");
		},
		
		/**
		 * Attempts to add a document to a repository using Cross-Origin Resource Sharing (CORS). Box  is the only repository type currently supported.
		 * If an error occurs, this method falls back to calling addDocumentItem(). The parameters to this method
		 * must be kept in sync with addDocumentItem().
		 * 
		 * @since 3.0.1
		 * @param parentFolder
		 *            A {@link ecm.model.ContentItem} object for the parent folder.
		 * @param objectStore
		 *            A object store object holding identifier information (FileNet P8 only).
		 * @param templateName
		 *            A string value holding the content class name.
		 * @param criterias
		 *            An object holding the criteria information.
		 * @param contentSourceType
		 *            A string value holding the content source type.
		 * @param mimeType
		 *            A string value holding the MIME type.
		 * @param filename
		 *            A string value holding the file name.
		 * @param content
		 *            A object holding the file stream.
		 * @param childComponentValues
		 *            An object holding the child component values (Content Manager only).
		 * @param permissions
		 *            An object holding the permission information.
		 * @param securityPolicyId
		 *            A string value holding the security policy id (FileNet P8 only).
		 * @param addAsMinorVersion
		 *            A boolean value indicating whether to add as a minor version.
		 * @param autoClassify
		 *            A boolean value indicating whether to automatically classify this object on add (FileNet P8 only).
		 * @param allowDuplicateFileNames
		 *            A boolean value indicating whether the content server will allow duplicate file names.
		 * @param setSecurityParent
		 *            A boolean value indicating whether the security parent should be set.
		 * @param teamspaceId
		 *            A string value holding the teamspace id.
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process.
		 * @param onError
		 *            A callback function that is called if an error is returned when adding this document.
		 * @param compoundDocument
		 *            A boolean value indicating whether this is a compound document (FileNet P8 only).
		 * @param uploadProgress
		 *            A boolean value indicating whether the event listener is added for upload progress event.
		 * @param parameters
		 * 	         An object holding additional parameters to be passed in the request.
		 * @param templateMetadataValues
		 *            An array holding template metadata values (Box only).
		 */
		addDocumentItemUsingCORS: function(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, uploadProgress, applicationGroup, application, parameters, templateMetadataValues) {
			this.logEntry("addDocumentItemUsingCORS");
			
			var xhr = this._getCORSRequest();
			if (!xhr || !this.corsUploadEnabled || !content){				
				// if CORS isn't supported by the browser, fall back to the non-CORS method of adding the document.
				this.logDebug("CORS not supported by browser. Falling back to this.addDocumentItem()...");
				this.addDocumentItem(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, uploadProgress, applicationGroup, application, parameters, templateMetadataValues);
			}
			else{
				
				// Get the content of the file.
				var reader = new FileReader();
				reader.onerror = (lang.hitch(this, function(){
					// If an error occurs reading the file, fall back to standard add document
					this.logDebug("Error reading document content. Falling back to this.addDocumentItem()...");
					this.addDocumentItem(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, uploadProgress, applicationGroup, application, parameters, templateMetadataValues);
				}));
				
				var _templateMetadataValues = templateMetadataValues;
				reader.onload = (lang.hitch(this, function(event) {
					this.logDebug("Loaded document content.");
					var form = new FormData();
					
					var blob = new Blob([event.target.result], { type: mimeType});
					form.append('file', blob, filename);
					
					// Get the Box id for the folder.
					idParts = parentFolder.id.split(",");
					
					form.append('parent_id', idParts[1]);
					
					var handleSuccess = lang.hitch(this, function(response){
						this.logDebug("Success uploading content.");
						var newItem = ContentItem.createFromJSON(responseJson.entries[0], this, null, parentFolder);
						newItem.template = "file";
						newItem.id = "file," + newItem.id;
						this.addRecentItem(newItem);
						if (_templateMetadataValues != null && _templateMetadataValues.length > 0){
							var foundDirtyMetadata = false;
							for (var i = 0; i < templateMetadataValues.length; i++){
								var metadata = _templateMetadataValues[i];
								foundDirtyMetadata = metadata.dirty;
								if (foundDirtyMetadata){
									this.logDebug("Found metadata.");
									break;
								}
							}
							if (foundDirtyMetadata){
								params = {};
								params["templateMetadata"] = _templateMetadataValues;
								newItem.saveAttributes(criterias, "", [], [], false, lang.hitch(this, function(){
									this.logDebug("Returned from saveAttributes.");
									callback(newItem);
								}), false, function(response){
									// Error message stating the document was added, but there was a problem setting metadata template values.
									this.logDebug("Error saving attributes.");
									ecm.model.desktop.addMessage(Message.createErrorMessage("add_cors_save_attributes_error"));
								}, params);
							}
							else {
								this.logDebug("No metadata detected.");
								callback(newItem);
							}
						}
						else {
							this.logDebug("No metadata detected.");
							callback(newItem);
						}
					});
					
					var _handleSuccess = handleSuccess;
					var handleError = lang.hitch(this, function() {
						// The upload may have failed because the access token expired. Get a fresh access token from the mid tier
						// and retry.
						this.logDebug("Error uploading content. Getting fresh access token...");
						request = ecm.model.Request.invokeService("getOAuthToken", this.type,{
							repositoryId: this.id
						}, lang.hitch(this, function(response) {
							this.logDebug("Retrieved access token.");
							this.accessToken = response.accessToken;
							
							var handleError2 = lang.hitch(this, function(){
								// If an error occured this time, fall back.
								this.logDebug("Error uploading content on second try. Falling back to this.addDocumentItem()");
								this.addDocumentItem(parentFolder, objectStore, templateName, criterias, contentSourceType, mimeType, filename, content, childComponentValues, permissions, securityPolicyId, addAsMinorVersion, autoClassify, allowDuplicateFileNames, setSecurityParent, teamspaceId, callback, isBackgroundRequest, onError, compoundDocument, uploadProgress, applicationGroup, application, parameters, templateMetadataValues)
							});
							
							var xhrOnload2 = lang.hitch(this, function() {
								responseJson = JSON.parse(xhr.responseText);
								if (responseJson.type && responseJson.type == "error"){
									handleError2();								}
								else if (responseJson.entries && responseJson.entries[0].id){
									_handleSuccess(responseJson);
								}
							});

							var xhr = this._getCORSRequest();
							if (!xhr){
								// If there was a problem building the request, fall back.
								handleError2();
							};
							this._sendCORSUpload(this.accessToken, xhr, form, xhrOnload2, handleError2);
						}));
					});
					
					var xhrOnload = lang.hitch(this, function() {
						responseJson = JSON.parse(xhr.responseText);
						if (responseJson.type && responseJson.type == "error"){
							handleError();
						}
						else if (responseJson.entries && responseJson.entries[0].id){
							handleSuccess(responseJson);
						}
					});
					
					this._sendCORSUpload(this.accessToken, xhr, form, xhrOnload, handleError)
				}));

				// Read the contents.
				reader.readAsArrayBuffer(content);
			}

			this.logExit("addDocumentItemUsingCORS");
		},
		
		/**
		 * Adds a data object to the repository.
		 * 
		 * @param parentFolder
		 *            A {@link ecm.model.ContentItem} object for the parent folder.
		 * @param objectStore
		 *            A object store object holding identifier information (FileNet P8 only).
		 * @param templateName
		 *            A string value holding the content class name.
		 * @param criterias
		 *            An object holding the criteria information.
		 * @param childComponentValues
		 *            An object holding the child component values (Content Manager only).
		 * @param permissions
		 *            An object holding the permission information.
		 * @param securityPolicyId
		 *            A string value holding the security policy id (FileNet P8 only).
		 * @param teamspaceId
		 *            A string value holding the teamspace id.
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 */
		addDataObject: function(parentFolder, objectStore, templateName, criterias, childComponentValues, permissions, securityPolicyId, teamspaceId, callback) {
			this.logEntry("addDataObject");
			var request = this._addItem("DataObject", parentFolder, objectStore, templateName, criterias, childComponentValues, permissions, securityPolicyId, teamspaceId, callback, null);
			this.logExit("addDataObject");
			return request;
		},

		/**
		 * Adds a folder to the repository.
		 * 
		 * @param parentFolder
		 *            A {@link ecm.model.ContentItem} object for the parent folder.
		 * @param objectStore
		 *            A object store object holding identifier information (FileNet P8 only).
		 * @param templateName
		 *            A string value holding the content class name.
		 * @param criterias
		 *            An object holding the criteria information.
		 * @param childComponentValues
		 *            An object holding the child component values (Content Manager only).
		 * @param permissions
		 *            An object holding the permission information.
		 * @param securityPolicyId
		 *            A string value holding the security policy id (FileNet P8 only).
		 * @param teamspaceId
		 *            A string value holding the teamspace id.
		 * @param callback
		 *            A callback function called after the item has been added. Will pass a
		 *            {@link ecm.model.ContentItem} object as a parameter.
		 * @param templateMetadataValues
		 * @since 3.0
		 *            An array holding template metaadata values (Box only).
		 */
		addFolderItem: function(parentFolder, objectStore, templateName, criterias, childComponentValues, permissions, securityPolicyId, teamspaceId, callback, templateMetadataValues) {
			this.logEntry("addFolderItem");
			var request = this._addItem("Folder", parentFolder, objectStore, templateName, criterias, childComponentValues, permissions, securityPolicyId, teamspaceId, callback, templateMetadataValues);
			this.logExit("addFolderItem");
			return request;
		},

		_addItem: function(contentSourceType, parentFolder, objectStore, templateName, criterias, childComponentValues, permissions, securityPolicyId, teamspaceId, callback, templateMetadataValues) {
			var methodName = "addItem(" + contentSourceType + ")";
			this.logEntry(methodName);

			var args = {
				desktop: ecm.model.desktop.id,
				repositoryId: this.id,
				workspaceId: teamspaceId,
				parm_content_source_type: contentSourceType,
				docid: (parentFolder && parentFolder.id) || "",
				template_name: templateName
			};

			var data = criterias;
			if (this._isCM()) {
				data = [
					{
						criterias: criterias,
						childComponentValues: childComponentValues,
						acl: permissions
					}
				];
			} else if (this._isP8()) {
				args.securityPolicyId = securityPolicyId;
				args.objectStoreId = objectStore ? objectStore.id : "";
				data = [
					{
						criterias: criterias.criterias,
						acl: permissions
					}
				];
			} else if (this._isCmis()) {
				data = [
					{
						criterias: criterias,
						acl: permissions
					}
				];
			} else if (this._isBox()) {
				data = [
					{
						criterias: criterias
					}
				];
				if (templateMetadataValues){
					data[0].templateMetadata = templateMetadataValues;
				}
			}

			var request = ecm.model.Request.postService("addItem", this.type, args, "text/json", JSON.stringify(data), lang.hitch(this, function(response) {
				this._addItemCompleted(response, parentFolder, callback);
			}));
			this.logExit(methodName);
			return request;
		},

		_addItemCompleted: function(response, parentFolder, callback) {
			this.logEntry("_addItemCompleted");
			if (response.fieldErrors || response.templateMetadataErrors) {
				if (callback) {
					callback(undefined, response.fieldErrors, response.templateMetadataErrors);
				}
			} else {
				if (callback) {
					var itemJSON = response.rows[0];
					var newItem = ContentItem.createFromJSON(itemJSON, this, null, parentFolder);
					callback(newItem);
				}
			}
			this.logExit("_addItemCompleted");
		},

		/**
		 * Retrieves an array of {@link ecm.model.Worklist} objects (Content Manager only).
		 * 
		 * @param callback
		 *            A callback function called after the worklists have been retrieved. Passes an array of
		 *            {@link ecm.model.Worklist} objects as a parameter.
		 */
		retrieveWorklists: function(callback) {
			this.logEntry("retrieveWorklists");
			var request = null;
			if (this.worklists) {
				if (callback) {
					callback(this.worklists);
				}
			} else {
				var self = this;
				if (this.type == "cm") {
					request = ecm.model.Request.invokeService("getWorklists", this.type, {
						repositoryId: this.id
					}, function(response) {
						self._retrieveWorklistsCompleted(response, callback);
					});
				}
			}
			this.logExit("retrieveWorklists");
			return request;
		},

		_retrieveWorklistsCompleted: function(response, callback) {
			this.logEntry("_retrieveWorklistsCompleted");
			this.worklists = [];
			for ( var i in response.datastore.items) {
				var worklistJSON = response.datastore.items[i];
				worklistJSON.id = worklistJSON.worklist_name;
				worklistJSON.name = worklistJSON.worklist_name;
				worklistJSON.description = worklistJSON.worklist_desc;
				worklistJSON.repository = this;

				var worklist = new Worklist(worklistJSON);
				this.worklists.push(worklist);
			}
			if (callback) {
				callback(this.worklists);
			}
			this.logExit("_retrieveWorklistsCompleted");
		},

		/**
		 * Retrieves an array of {@link ecm.model.ProcessApplicationSpace} objects or if there is only one application
		 * space, return an array of {@link ecm.model.ProcessRole} objects (FileNet P8 only)
		 * 
		 * @param callback
		 *            A callback function called after the containers have been retrieved. Passes an array of
		 *            {@link ecm.model.ProcessApplicationSpace} objects or {@link ecm.model.ProcessRole} objects as a
		 *            parameter.
		 * @param rootContainersOnly
		 *            A {boolean} flag indicating whether to return the first tier root containers, regardless of the
		 *            number of items.
		 */
		retrieveWorklistContainers: function(callback, rootContainersOnly) {
			this.logEntry("retrieveWorklistContainers");
			var request = null;
			if (this.worklistContainers) {
				if (callback) {
					callback(this.worklistContainers);
				}
			} else {
				var self = this;
				if (this.type == "cm") {
					this._retrieveWorklistFoldersCompleted({
						datastore: {
							items: []
						}
					}, callback); // fake a response w no folders as cm server does not support them
				} else {
					request = ecm.model.Request.invokeService("getProcessApplicationSpaces", this.type, {
						repositoryId: this.id,
						connection_point: this.connectionPoint
					}, function(response) {
						self._retrieveWorklistContainersCompleted(response, callback, rootContainersOnly);
					});
				}
			}
			this.logExit("retrieveWorklistContainers");
			return request;
		},

		_retrieveWorklistContainersCompleted: function(response, callback, rootContainersOnly) {
			this.logEntry("_retrieveWorklistContainersCompleted");
			var request = null;
			this.worklistContainers = [];
			if (rootContainersOnly || response.num_appspaces > 1) {
				for ( var i in response.datastore.items) {
					var templateJSON = response.datastore.items[i];
					templateJSON.repository = this;
					templateJSON.connectionPoint = this.connectionPoint;
					var processApplicationSpace = new ProcessApplicationSpace(templateJSON);
					this.worklistContainers.push(processApplicationSpace);
				}
				callback(this.worklistContainers);
				this.onWorklistContainersRetrieved(this.worklistContainers);
			} else {
				var templateJSON = response.datastore.items[0];
				templateJSON.repository = this;
				templateJSON.connectionPoint = this.connectionPoint;
				var processApplicationSpace = new ProcessApplicationSpace(templateJSON);

				var self = this;
				request = ecm.model.Request.invokeService("getProcessRoles", this.type, {
					repositoryId: this.id,
					connection_point: this.connectionPoint,
					appspace_name: encodeURIComponent(templateJSON.auth_name)
				}, function(response) {
					self._retrieveWorklistContainerRolesCompleted(response, processApplicationSpace, callback);
				});
			}
			this.logExit("_retrieveWorklistContainersCompleted");
			return request;
		},

		_retrieveWorklistContainerRolesCompleted: function(response, processApplicationSpace, callback) {
			this.logEntry("_retrieveWorklistContainerRolesCompleted");
			var request = null;
			this.worklistContainers = [];
			if (response.num_processroles > 1) {
				for ( var i in response.datastore.items) {
					var templateJSON = response.datastore.items[i];
					templateJSON.repository = this;
					templateJSON.connectionPoint = this.connectionPoint;
					templateJSON.parent = processApplicationSpace;

					var processRole = new ProcessRole(templateJSON);
					this.worklistContainers.push(processRole);
				}
				callback(this.worklistContainers);
				this.onWorklistContainersRetrieved(this.worklistContainers);
			} else if (response.num_processroles == 1) {
				var templateJSON = response.datastore.items[0];
				templateJSON.repository = this;
				templateJSON.connectionPoint = this.connectionPoint;
				templateJSON.parent = processApplicationSpace;
				var processRole = new ProcessRole(templateJSON);

				var self = this;
				request = ecm.model.Request.invokeService("getProcessInbaskets", this.type, {
					repositoryId: this.id,
					connection_point: this.connectionPoint,
					appspace_name: encodeURIComponent(processApplicationSpace.auth_name),
					processrole_name: encodeURIComponent(processRole.name),
				}, function(response) {
					self._retrieveWorklistInbasketsCompleted(response, processRole, callback);
				});
			} else {
				// No Process Roles at all were returned, we don't know if there just aren't any Roles defined yet
				// or the logged in user doen't have access to the rules under this application space
				this.worklistContainers.push(processApplicationSpace);
				callback(this.worklistContainers);
				this.onWorklistContainersRetrieved(this.worklistContainers);
			}
			this.logExit("_retrieveWorklistContainerRolesCompleted");
			return request;
		},

		_retrieveWorklistInbasketsCompleted: function(response, processRole, callback) {
			this.logEntry("_retrieveWorklistInbasketsCompleted");
			this.worklistContainers = [];
			for ( var i in response.datastore.items) {
				var templateJSON = response.datastore.items[i];
				templateJSON.repository = this;
				templateJSON.connectionPoint = this.connectionPoint;
				templateJSON.parent = processRole;

				var processInbasket = new ProcessInbasket(templateJSON);
				this.worklistContainers.push(processInbasket);
			}
			callback(this.worklistContainers);
			this.onWorklistContainersRetrieved(this.worklistContainers);
			this.logExit("_retrieveWorklistInbasketsCompleted");
		},

		/**
		 * An event function called after the worklist continer objects have been retrieved.
		 * 
		 * @param worklistContainers
		 *            An array of {@link ecm.model.ProcessApplicationSpace} objects or {@link ecm.model.ProcessRole}
		 *            objects as a parameter.
		 */
		onWorklistContainersRetrieved: function(worklistContainers) {
		},

		/**
		 * Retrieves an array of {@link ecm.model.WorklistFolder} objects.
		 * 
		 * @param callback
		 *            A callback function called after the worklist folders have been retrieved. Passes an array of
		 *            {@link ecm.model.WorklistFolder} objects as a parameter.
		 */
		retrieveWorklistFolders: function(callback) {
			this.logEntry("retrieveWorklistFolders");
			var request = null;
			if (this.worklistFolders) {
				if (callback) {
					callback(this.worklistFolders);
				}
			} else {
				this._retrieveWorklistFoldersCompleted({
					datastore: {
						items: []
					}
				}, callback); // fake a response w no folders as no server supports them
			}
			this.logExit("retrieveWorklistFolders");
			return request;
		},

		_retrieveWorklistFoldersCompleted: function(response, callback) {
			this.logEntry("_retrieveWorklistFoldersCompleted");
			this.worklistFolders = [];

			// The first item is a root "All worklists" folder for CM worklist navigation
			if (!this._allWorklistsFolder) {
				this._allWorklistsFolder = new WorklistFolder({
					id: "all",
					name: ecm.messages.all_worklists,
					description: ecm.messages.all_worklists_description,
					repository: this
				});
			}
			this.worklistFolders.push(this._allWorklistsFolder);

			for ( var i in response.datastore.items) {
				var worklistFolderJSON = response.datastore.items[i];
				worklistFolderJSON.id = worklistFolderJSON.folder_name;
				worklistFolderJSON.name = worklistFolderJSON.folder_name;
				worklistFolderJSON.description = worklistFolderJSON.folder_desc;
				worklistFolderJSON.repository = this;

				var worklistFolder = new WorklistFolder(worklistFolderJSON);
				this.worklistFolders.push(worklistFolder);
			}
			if (callback) {
				callback(this.worklistFolders);
			}
			this.logExit("_retrieveWorklistFoldersCompleted");
		},

		/**
		 * Deletes the specified teamspace from the content server.
		 * 
		 * @param teamspaceId
		 *            A string value holding the teamspace identifier
		 * @param type
		 *            A string value holding the teamspace type
		 * @param callback
		 *            A function that is invoked when the delete has completed successfully.
		 */
		deleteTeamspace: function(teamspaceId, type, callback) {
			this.logEntry("deleteTeamspace");
			var self = this;
			var request = ecm.model.Request.invokeService("deleteWorkspace", this.type, {
				repositoryId: this.id,
				workspaceType: type,
				workspaceId: teamspaceId
			}, function(response) {
				self._teamspaceDeleted(response, callback, type, teamspaceId);
			});
			this.logExit("deleteTeamspace");
			return request;
		},

		_teamspaceDeleted: function(response, callback, type, id) {
			if (type == Teamspace.TEMPLATE) {
				this.teamspaceTemplates = null;
				this.onTeamspaceTemplateDeleted(id);
			} else {
				this.teamspaces = null;
				this.fullyCachedTeamspaces = null;

				// Remove the teamspace from the recent teamspaces list
				this.removeRecentTeamspaces([
					new Teamspace({
						id: id
					})
				]);

				this.onTeamspaceDeleted(id);
			}

			callback(id);
		},

		/**
		 * An event function called after a teamspace has been deleted.
		 * 
		 * @param id
		 *            The teamspace id as a parameter.
		 */
		onTeamspaceDeleted: function(id) {
		},

		/**
		 * An event function called after a teamspace template has been deleted.
		 * 
		 * @param id
		 *            The teamspace template id as a parameter.
		 */
		onTeamspaceTemplateDeleted: function(id) {
		},
		/**
		 * Saves a modified teamspace template.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 * @param callback
		 *            A callback function called after the teamspace template has been saved.
		 * @param updateUsers
		 *            A boolean value indicating whether the list of users should also be updated.
		 * @param updateRoles
		 *            A boolean value indicating whether the list of roles should also be updated.
		 * @since 2.0.3
		 */
		editTeamspace: function(teamspace, callback, updateUsers, updateRoles) {
			this.editTeamspaceTemplate(teamspace, callback, updateUsers, updateRoles);
		},

		/**
		 * Saves a modified teamspace template.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 * @param callback
		 *            A callback function called after the teamspace template has been saved.
		 * @param updateUsers
		 *            A boolean value indicating whether the list of users should also be updated.
		 * @param updateRoles
		 *            A boolean value indicating whether the list of roles should also be updated.
		 * @deprecated use editTeamspace instead.
		 */
		editTeamspaceTemplate: function(teamspace, callback, updateUsers, updateRoles) {
			this.logEntry("editTeamspaceTemplate");
			var self = this;
			var request = ecm.model.Request.postService("addWorkspace", this.type, {
				repositoryId: this.id,
				workspaceId: teamspace.id,
				modifyWorkspace: "true",
				modifyUsers: updateUsers ? "true" : "false",
				modifyRoles: updateRoles ? "true" : "false",
				workspaceType: teamspace.type
			}, "text/json", teamspace.toJson(), function(response) {
				self._editTeamspaceTemplateCompleted(response, teamspace, callback);
			});
			this.logExit("editTeamspaceTemplate");
			return request;
		},

		_editTeamspaceTemplateCompleted: function(response, oldTeamspace, callback) {
			this.logEntry("_editTeamspaceTemplateCompleted");
			callback(response);
			var teamspace;
			if (response.workspaces.length > 0) {
				var json = response.workspaces[0];
				json.repository = this;
				teamspace = new Teamspace(json);
			}

			if (teamspace.type == Teamspace.TEMPLATE) {
				this.teamspaceTemplates = null;
				if (oldTeamspace.state == "default") { // need to refresh a list for this case because previous default item needs to be updated also
					this.teamspaceTemplates = null;
					this.onUpdateTeamspaceTemplate(oldTeamspace, this); // old teamspace stated needed to trigger refresh of resultSet
				} else {
					this.onUpdateTeamspaceTemplate(teamspace, this);
				}
			} else {
				//clear the et association cache
				var tempItem = new ContentItem();
				tempItem.repository = this;
				tempItem.id = teamspace.id;
				tempItem._clearEntryTemplateFolderAssociationsToCache();

				this.teamspaces = null;
				this.fullyCachedTeamspaces = null;
				this.onUpdateTeamspace(teamspace, this);
			}

			this.onChange([
				teamspace
			]);
			this.logExit("_editTeamspaceTemplateCompleted");
		},

		/**
		 * Adds a new teamspace template to the repository.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 * @param callback
		 *            A callback function called after the teamspace template has been added.
		 * @param onError
		 *            A callback function called when an error occurs.
		 */
		addTeamspaceTemplate: function(teamspace, callback, onError) {
			this.logEntry("addTeamspaceTemplate", teamspace.toJson());

			var self = this;
			var params = {
				requestParams: {}
			};
			params.requestParams.repositoryId = this.id;
			params.requestParams.workspaceType = teamspace.type;
			params.requestBody = teamspace.toJson();
			params.requestCompleteCallback = function(response) {
				self._addTeamspaceTemplateCompleted(response, teamspace, callback);
			};
			params.requestFailedCallback = onError;

			var request = ecm.model.Request.postServiceAPI("addWorkspace", this.type, "text/json", params);

			this.logExit("addTeamspaceTemplate");
			return request;
		},

		_addTeamspaceTemplateCompleted: function(response, teamspace, callback) {
			this.logEntry("_addTeamspaceTemplateCompleted");
			// comes back in an array because it reuses the list teamspaces service
			if (response.workspaces.length > 0) {
				var json = response.workspaces[0];
				json.repository = this;
				var teamspace = new Teamspace(json);
				if (this.teamspaceTemplates && this.teamspaceTemplates.length > 0) // else we need to refresh the entire list
					this.teamspaceTemplates.push(teamspace);
				if (callback)
					callback(teamspace);

				this.onAddTeamspaceTemplate(teamspace);
			}

			this.logExit("_addTeamspaceTemplateCompleted");
		},

		/**
		 * An event function called after a teamspace template has been added.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 */
		onAddTeamspaceTemplate: function(teamspace) {
			this.logDebug("onAddTeamspaceTemplate");
		},

		/**
		 * An event function called after a teamspace template has been updated.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 * @param repo
		 *            A {@link ecm.model.Repository} object
		 */
		onUpdateTeamspaceTemplate: function(teamspace, repo) {
			this.logDebug("onUpdateTeamspaceTemplate");
		},

		/**
		 * Decommission a teamspace.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 * @param deleteOption
		 *            A string value of deleteAll or refileAll.
		 * @param destinationFolderId
		 *            Id of the destination folder.
		 * @param callback
		 *            A callback function called after the teamspace has been added. Passes a
		 *            {@link ecm.model.Teamspace} object as a parameter.
		 */
		decommissionTeamspace: function(teamspace, deleteOption, destinationFolderId, callback) {
			this.logEntry("decommissionTeamspace");
			var self = this;
			var request = ecm.model.Request.invokeService("deleteWorkspace", this.type, {
				workspaceId: teamspace.id,
				workspaceType: teamspace.type,
				option: deleteOption,
				refileFolderId: destinationFolderId,
				repositoryId: this.id
			}, function(response) {
				self._teamspaceDeleted(response, callback, teamspace.type, teamspace.id);
			});

			this.logExit("decommissionTeamspace");
			return request;
		},

		/**
		 * Adds a new teamspace to the repository.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 * @param callback
		 *            A callback function called after the teamspace has been added. Passes a
		 *            {@link ecm.model.Teamspace} object as a parameter.
		 * @param onError
		 *            A callback function called when an error occurs.
		 * @param parentFolderName
		 *            An optional parameter indicating the name of the parent folder for the new teamspace (P8 only).
		 *            When not specified, new P8 teamspaces are partioned into YYYY-MM folders.
		 */
		addTeamspace: function(teamspace, callback, onError, parentFolderName) {
			this.logEntry("addTeamspace");

			var self = this;
			var params = {
				requestParams: {}
			};
			params.requestParams.repositoryId = this.id;
			params.requestParams.workspaceType = teamspace.type;
			params.requestBody = teamspace.toJson();
			params.requestCompleteCallback = function(response) {
				self._addTeamspaceCompleted(response, teamspace, callback);
			};
			params.requestFailedCallback = onError;
			
			if (parentFolderName){
				params.requestParams.parentFolderName = parentFolderName;
			}

			var request = ecm.model.Request.postServiceAPI("addWorkspace", this.type, "text/json", params);

			this.logExit("addTeamspace");
			return request;
		},

		_addTeamspaceCompleted: function(response, teamspace, callback) {
			this.logEntry("_addTeamspaceCompleted");

			if (!this.teamspaces)
				this.teamspaces = [];

			// comes back in an array because it reuses the list teamspaces service
			if (response.workspaces.length > 0) {
				var json = response.workspaces[0];
				json.repository = this;
				var teamspace = new Teamspace(json);
				this.teamspaces.push(teamspace);

				// add to recent teamspaces
				if (teamspace && teamspace.type == "instance")
					this.addRecentTeamspace(teamspace);

				if (callback)
					callback(teamspace);

				this.onAddTeamspace(teamspace);
			}

			this.logExit("_addTeamspaceCompleted");
		},

		/**
		 * An event function called after the teamspace has been added.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object as a parameter.
		 */
		onAddTeamspace: function(teamspace) {
			this.logDebug("onAddTeamspace");
		},

		/**
		 * An event function called after the teamspace has been updated.
		 * 
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object as a parameter.
		 */
		onUpdateTeamspace: function(teamspace) {
			this.logDebug("onUpdateTeamspace");
		},

		/**
		 * Validates a {@link ecm.model.Teamspace} template data.
		 * 
		 * @param Id
		 *            A string value holding the teamspace identifier.
		 * @param type
		 *            A string value holding the teamspace type.
		 * @param callback
		 *            A callback function called after the teamspace has been retrieved. Passes a
		 *            {@link ecm.model.Teamspace} object as a parameter.
		 * @since 2.0.2
		 */
		validateTeamspace: function(Id, type, callback) {
			this.logEntry("validateTeamspace");
			var found = false;
			var self = this;
			if (!type)
				type = "instance";

			var request = ecm.model.Request.invokeService("getWorkspaces", this.type, {
				workspaceId: Id,
				validate: true,
				workspaceType: type,
				repositoryId: this.id
			}, function(response) {
				self._validateTeamspaceCompleted(response, callback);
			});

			this.logExit("validateTeamspace");
			return request;
		},

		_validateTeamspaceCompleted: function(response, callback) {
			this.logEntry("_validateTeamspaceCompleted");

			// comes back in an array because it reuses the list teamspaces service
			if (response.workspaces.length > 0) {
				var json = response.workspaces[0];
				json.repository = this;
				var teamspace = new Teamspace(json);
				callback(teamspace);
			}

			this.logExit("_validateTeamspaceCompleted");
		},

		/**
		 * @private
		 */
		_getFullyCachedTeamspace: function(Id) {
			var teamspace = null;
			if (this.fullyCachedTeamspaces) {
				array.forEach(this.fullyCachedTeamspaces, function(item) {
					if (item.id == Id) {
						teamspace = item;
					}

				});
			}
			// add to recent teamspaces
			if (teamspace && teamspace.type == "instance") {
				this.addRecentTeamspace(teamspace);
			}
			return teamspace;
		},

		/**
		 * @private
		 */
		_deleteFullyCachedTeamspace: function(teamspaceId) {
			if (this.fullyCachedTeamspaces instanceof Array) {
				for (var i = 0; i < this.fullyCachedTeamspaces.length; i++) {
					if (this.fullyCachedTeamspaces[i].id == teamspaceId) {
						this.fullyCachedTeamspaces.splice(i, 1);
						break;
					}
				}
			}
		},

		/**
		 * Retrieves an {@link ecm.model.Teamspace} object from the repository.
		 * 
		 * @param Id
		 *            A string value holding the teamspace identifier.
		 * @param type
		 *            A string value holding the teamspace type.
		 * @param callback
		 *            A callback function called after the teamspace has been retrieved. Passes a
		 *            {@link ecm.model.Teamspace} object as a parameter.
		 * @param params
		 *            An object containing parameters to control the request to the server. For example, you can set the
		 *            retrieve to be performed in the background. See {@link ecm.model.Request} for a list of parameters
		 *            supported by a server request.
		 */
		retrieveTeamspaceById: function(Id, type, callback, params) {
			this.logEntry("retrieveTeamspaceById");
			var request = null;
			var found = false;
			var self = this;
			if (!type)
				type = "instance";
			if (type == "instance" && this._getFullyCachedTeamspace(Id)) {
				if (callback)
					callback(this._getFullyCachedTeamspace(Id));
			} else {
				if (!params) {
					params = {};
				}
				params.requestParams = {
					workspaceId: Id,
					workspaceType: type,
					repositoryId: this.id
				};
				params.requestCompleteCallback = function(response) {
					self._retrieveTeamspaceByIdCompleted(response, callback);
				};
				request = ecm.model.Request.invokeServiceAPI("getWorkspaces", this.type, params);
			}

			this.logExit("retrieveTeamspaceById");
			return request;
		},

		_retrieveTeamspaceByIdCompleted: function(response, callback) {
			this.logEntry("_retrieveTeamspaceByIdCompleted");

			// comes back in an array because it reuses the list teamspaces service
			if (response.workspaces.length > 0) {
				var json = response.workspaces[0];
				json.repository = this;
				var teamspace = new Teamspace(json);
				teamspace.initFromJson();

				// add to recent teamspaces
				if (teamspace && teamspace.type == "instance") {
					this.addRecentTeamspace(teamspace);
				}
				if (!this.fullyCachedTeamspaces) {
					this.fullyCachedTeamspaces = [];
				}
				this.fullyCachedTeamspaces.push(teamspace);
				callback(teamspace);
			} else {
				callback(null);
			}
			this.logExit("_retrieveTeamspaceByIdCompleted");
		},

		/**
		 * Retrieve an array of {@link ecm.model.Teamspace} objects
		 * 
		 * @param callback
		 *            A callback function called after the teamspaces has been retrieved. Passes an array
		 *            {@link ecm.model.Teamspace} objects as a parameter.
		 */
		retrieveTeamspaceFolders: function(callback) {
			this.logEntry("retrieveTeamspaceFolders");
			var request = null;
			if (this.teamspaces) {
				if (callback)
					callback(this.teamspaces);
			} else {
				var sharedRequestParams = {
					sharedRequestMethod: "retrieveTeamspaceFolders",
					sharedRequestCompleteCallback: callback,
					serviceName: "getWorkspaces",
					repositoryType: this.type,
					requestParams: {
						repositoryId: this.id
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this._retrieveTeamspaceFolderCompleted(response, sharedRequestParams);
					}),
					requestFailedCallback: lang.hitch(this, function() {
						// When the request fails call the completed callbacks with an empty teamspaces array.
						this.teamspaces = [];
						this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
							callback(this.teamspaces);
						}));
					})

				};
				request = this.invokeSharedRequest(sharedRequestParams);
			}
			this.logExit("retrieveTeamspaceFolders");
			return request;
		},

		_retrieveTeamspaceFolderCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveTeamspaceFolderCompleted");
			this.teamspaces = [];
			for ( var i in response.workspaces) {
				var teamspacesJSON = response.workspaces[i];
				teamspacesJSON.repository = this;
				teamspacesJSON.usesClasses = (teamspacesJSON.usesClasses == "true");

				var teamspace = new Teamspace(teamspacesJSON);
				this.teamspaces.push(teamspace);
			}
			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.teamspaces);
			}));
			this.logExit("_retrieveTeamspaceFolderCompleted");
		},

		/**
		 * Retrieve an array of {@link ecm.model.Teamspace} template objects
		 * 
		 * @param callback
		 *            A callback function called after the teamspace templates has been retrieved. Passes an array
		 *            {@link ecm.model.Teamspace} objects as a parameter.
		 */
		retrieveTeamspaceTemplateFolder: function(callback) {
			this.logEntry("retrieveTeamspaceTemplateFolder");
			var request = null;
			if (this.teamspaceTemplates && this.teamspaceTemplates.length > 0) {
				if (callback)
					callback(this.teamspaceTemplates);
			} else {
				var sharedRequestParams = {
					sharedRequestMethod: "retrieveTeamspaceTemplateFolder",
					sharedRequestCompleteCallback: callback,
					serviceName: "getWorkspaces",
					repositoryType: this.type,
					requestParams: {
						repositoryId: this.id,
						workspaceType: "template"
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this._retrieveTeamspaceTemplateFolderCompleted(response, sharedRequestParams);
					}),
					requestFailedCallback: lang.hitch(this, function() {
						// When the request fails call the completed callbacks with an empty teamspaces array.
						this.teamspaces = [];
						this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
							callback(this.teamspaces);
						}));
					})
				};
				request = this.invokeSharedRequest(sharedRequestParams);
			}
			this.logExit("retrieveTeamspaceTemplateFolder");
			return request;
		},

		_retrieveTeamspaceTemplateFolderCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveTeamspaceTemplateFolderCompleted");
			this.teamspaceTemplates = [];

			for ( var i in response.workspaces) {
				var teamspacesJSON = response.workspaces[i];
				teamspacesJSON.repository = this;
				teamspacesJSON.templateJSON = dojojson.toJson(teamspacesJSON.props);

				var teamspace = new Teamspace(teamspacesJSON);
				this.teamspaceTemplates.push(teamspace);
			}
			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.teamspaceTemplates);
			}));
			this.logExit("_retrieveTeamspaceTemplateFolderCompleted");
		},

		/**
		 * Retrieves teamspaces and return a {@link ecm.model.ResultSet} object holding the list of teamspaces.
		 * 
		 * @param callback
		 *            A callback function called after the teamspace result set has been retrieved. Passes a
		 *            {@link ecm.model.ResultSet} objects as a parameter.
		 * @param pageResults
		 *            A boolean indicating whether the result set should be paged.
		 * @param orderBy
		 *            The attribute ID of the attribute to sort the contents by, if any.
		 * @param descending
		 *            If true, then sorting will be in descending order.
		 * @param offline
		 *            If true, then offline teamspaces will also be returned.
		 * @param Id
		 *            A string value holding a teamspace identifier.		             
		 */
		retrieveTeamspaceFoldersResultSet: function(callback, pageResults, orderBy, descending, criteria, offline, id ) {
			this.logEntry("retrieveTeamspaceFoldersResultSet");

			var params = {
				repositoryId: this.id,
				offline: offline != null ? offline : false,
				paging: pageResults
			};

			if (id) {
	           params.workspaceId = id;
	        }
			
			if (orderBy) {
				params.order_by = orderBy;

				if (descending) {
					params.order_descending = "true";
				}
			}

			if (criteria) {
				params.criterias = JSON.stringify(criteria);
			}

			var sharedRequestParams = {
				sharedRequestMethod: "retrieveTeamspaceFoldersResultSet",
				sharedRequestCompleteCallback: callback,
				serviceName: "getWorkspaces",
				repositoryType: this.type,
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, function(response) {
					this._retrieveTeamspaceFolderResultSetCompleted(response, sharedRequestParams);
				}),
				requestFailedCallback: lang.hitch(this, function() {
					// When the request fails call the completed callbacks with an empty result set.
					this.teamspaceResultSet = new ResultSet();
					this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
						callback(this.teamspaceResultSet);
					}));
				})
			};
			var request = this.invokeSharedRequest(sharedRequestParams);
			this.logExit("retrieveTeamspaceFoldersResultSet");
			return request;
		},

		_retrieveTeamspaceFolderResultSetCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveTeamspaceFolderResultSetCompleted");
			response.repository = this;
			response.rows = [];
			for ( var i in response.workspaces) {
				var teamspaceJSON = response.workspaces[i];
				teamspaceJSON.usesClasses = (teamspaceJSON.usesClasses == "true");
				var teamspace = new Teamspace(teamspaceJSON);
				response.rows.push(teamspaceJSON);
			}
			response.setType = "teamspace";
			this.teamspaceResultSet = new ResultSet(response);

			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.teamspaceResultSet);
			}));

			this.logExit("_retrieveTeamspaceFolderResultSetCompleted");
		},

		/**
		 * Retrieves teamspace templates and return a {@link ecm.model.ResultSet} object holding the list of teamspace
		 * templates.
		 * 
		 * @param callback
		 *            A callback function called after the teamspace result set has been retrieved. Passes a
		 *            {@link ecm.model.ResultSet} objects as a parameter.
		 * @param orderBy
		 *            The attribute ID of the attribute to sort the contents by, if any.
		 * @param descending
		 *            If true, then sorting will be in descending order.
		 */
		retrieveTeamspaceTemplateFolderResultSet: function(callback, orderBy, descending, criteria) {
			this.logEntry("retrieveTeamspaceTemplateFolderResultSet");
			var request = null;

			var params = {
				repositoryId: this.id,
				workspaceType: "template",
				paging: true
			};

			if (orderBy) {
				params.order_by = orderBy;

				if (descending) {
					params.order_descending = "true";
				}
			}

			if (criteria) {
				params.criterias = JSON.stringify(criteria);
			}

			var sharedRequestParams = {
				sharedRequestMethod: "retrieveTeamspaceTemplateFolderResultSet",
				sharedRequestCompleteCallback: callback,
				serviceName: "getWorkspaces",
				repositoryType: this.type,
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, function(response) {
					this._retrieveTeamspaceTemplateFolderResultSetCompleted(response, sharedRequestParams);
				}),
				requestFailedCallback: lang.hitch(this, function() {
					// When the request fails call the completed callbacks with an empty result set.
					this.teamspaceTemplateResultSet = new ResultSet();
					this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
						callback(this.teamspaceTemplateResultSet);
					}));
				})
			};
			var request = this.invokeSharedRequest(sharedRequestParams);
			this.logExit("retrieveTeamspaceTemplateFolder");
			return request;
		},

		_retrieveTeamspaceTemplateFolderResultSetCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveTeamspaceTemplateFolderResultSetCompleted");
			response.repository = this;
			response.rows = [];
			for ( var i in response.workspaces) {
				var teamspaceJSON = response.workspaces[i];
				teamspaceJSON.usesClasses = (teamspaceJSON.usesClasses == "true");
				teamspaceJSON.repository = this;
				teamspaceJSON.templateJSON = dojojson.toJson(teamspaceJSON.props);
				var teamspace = new Teamspace(teamspaceJSON);
				response.rows.push(teamspaceJSON);
			}
			response.setType = "template";
			this.teamspaceTemplateResultSet = new ResultSet(response);

			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.teamspaceTemplateResultSet);
			}));

			this.logExit("_retrieveTeamspaceTemplateFolderResultSetCompleted");
		},

		/**
		 * Adds an entry template design to the repository.
		 * 
		 * @param entryTemplate
		 *            A design instance of {@link ecm.model.EntryTemplate}.
		 * @param callback
		 *            A function that is invoked when the add has completed successfully. The entry template design with
		 *            updated ID information is passed as the only argument. Design instances of entry templates should
		 *            not be used to add items.
		 * @since 2.0.3
		 */
		addEntryTemplate: function(entryTemplate, callback) {
			this.logEntry("addEntryTemplate");
			var request = Request.postService("addEntryTemplate", this.type, {
				repositoryId: this.id
			}, "text/json", entryTemplate.toJson(), lang.hitch(this, function(response) {
				// Clear the appropriate entry template list caches.
				this.clearEntryTemplateCache("all");
				if (entryTemplate.type == EntryTemplate.TYPE.DOCUMENT) {
					this.clearEntryTemplateCache("Document");
				} else if (entryTemplate.type == EntryTemplate.TYPE.FOLDER) {
					this.clearEntryTemplateCache("Folder");
				}

				// The response contains the entry template content item search result.
				var contentItem = ContentItem.createFromJSON(response.rows[0], this, null, entryTemplate.saveToFolder);

				// Update the entry template id information.
				entryTemplate.id = contentItem.id;
				if (contentItem.vsId) {
					entryTemplate.vsId = contentItem.vsId;
				}
				if (contentItem.itemId) {
					entryTemplate.itemId = contentItem.itemId;
				}

				if (callback) {
					callback(entryTemplate);
				}
				this.onEntryTemplateAdded(entryTemplate);
				this.onChange(this);
			}));
			this.logExit("addEntryTemplate");
			return request;
		},

		/**
		 * Updates an existing entry template design in the repository.
		 * 
		 * @param entryTemplate
		 *            A design instance of {@link ecm.model.EntryTemplate}.
		 * @param checkoutEntryTemplate
		 *            Boolean flag indicating whether to check out the entry template after updating it.
		 * @param callback
		 *            A function that is invoked when the update has completed successfully. The entry template design
		 *            with updated ID information is passed as the only argument. Design instances of entry templates
		 *            should not be used to add items.
		 * @since 2.0.3
		 */
		updateEntryTemplate: function(entryTemplate, checkoutEntryTemplate, callback) {
			this.logEntry("updateEntryTemplate");
			var request = Request.postService("addEntryTemplate", this.type, {
				repositoryId: this.id,
				modifyEntryTemplate: true,
				checkoutEntryTemplate: checkoutEntryTemplate
			}, "text/json", entryTemplate.toJson(), lang.hitch(this, function(response) {
				// The modified entry template may appear in the entry template lists cache,
				// folder associations cache for multiple folders, etc.
				// Clear the entire entry template cache.
				this.clearEntryTemplateCache();

				// The response contains the entry template content item search result.
				var contentItem = ContentItem.createFromJSON(response.rows[0], this, null, null);
				contentItem.originalId = entryTemplate.id;

				// Update the entry template id information.
				entryTemplate.id = contentItem.id;
				if (contentItem.vsId) {
					entryTemplate.vsId = contentItem.vsId;
				}
				if (contentItem.itemId) {
					entryTemplate.itemId = contentItem.itemId;
				}

				if (callback) {
					callback(entryTemplate);
				}
				this.onEntryTemplateUpdated(entryTemplate);
				this.onChange([
					contentItem
				]);
				this.onChange(this);
			}));
			this.logExit("updateEntryTemplate");
			return request;
		},

		/**
		 * A event function called after an entry template has been added to the repository.
		 * 
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} is passed as a parameter.
		 */
		onEntryTemplateAdded: function(entryTemplate) {
			this.logEntry("onEntryTemplateAdded");
		},

		/**
		 * A event function called after an entry template has been updated.
		 * 
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} is passed as a parameter.
		 */
		onEntryTemplateUpdated: function(entryTemplate) {
			this.logEntry("onEntryTemplateUpdated");
		},

		/**
		 * A event function called after an entry template has been deleted.
		 * 
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} is passed as a parameter.
		 */
		onEntryTemplateDeleted: function(entryTemplate) {
			this.logEntry("onEntryTemplateUpdated");
		},

		/**
		 * Retrieves a {@link ecm.model.ResultSet} object holding the list of all entry templates.
		 * 
		 * @param callback
		 *            A callback function called after the entry template result set has been retrieved. Passes a
		 *            {@link ecm.model.ResultSet} objects as a parameter.
		 * @param filter
		 *            A filter flag.
		 * @param pageResults
		 *            A boolean indicating whether the result set should be paged.
		 * @param orderBy
		 *            The attribute ID of the attribute to sort the contents by, if any.
		 * @param descending
		 *            If true, then sorting will be in descending order.
		 * @param criteria
		 *            Filter criteria for retrieving entry templates.
		 * @since 2.0.3
		 */
		retrieveEntryTemplatesResultSet: function(callback, filter, pageResults, orderBy, descending, criteria) {
			this.logEntry("retrieveEntryTemplatesResultSet");
			var request = null;
			// If no filter provided, use the default of "all".
			if (!filter) {
				filter = "all";
			}

			var params = {
				repositoryId: this.id,
				resultsType: "resultSet"
			};
			if (filter) {
				params.filter_type = filter;
			}
			if (pageResults) {
				params.paging = pageResults;
			}
			if (orderBy) {
				params.order_by = orderBy;
				if (descending) {
					params.order_descending = "true";
				}
			}
			if (criteria) {
				params.criterias = JSON.stringify(criteria);
			}

			var sharedRequestParams = {
				sharedRequestMethod: "retrieveEntryTemplatesResultSet",
				sharedRequestKey: filter,
				sharedRequestCompleteCallback: callback,
				serviceName: "getEntryTemplates",
				repositoryType: this.type,
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, function(response) {
					this._retrieveEntryTemplatesResultSetCompleted(response, sharedRequestParams);
				}),
				requestFailedCallback: lang.hitch(this, function() {
					// When the request fails call the completed callbacks with a null entry templates result set.
					this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
						callback(null);
					}));
				})
			};
			request = this.invokeSharedRequest(sharedRequestParams);
			this.logExit("retrieveEntryTemplatesResultSet");
			return request;
		},

		_retrieveEntryTemplatesResultSetCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveEntryTemplatesResultSetCompleted");

			response.setType = "entryTemplate";
			response.filterType = sharedRequestParams.requestParams.filter_type;
			response.repository = this;
			for ( var i in response.rows) {
				response.rows[i].repository = this;
			}

			var entryTemplatesResultSet = new ResultSet(response);
			if (this.type == "cm") {
				this._updateFieldLabel(entryTemplatesResultSet, "clbDescription", ecm.messages.entry_template_description_label);
				this._updateFieldLabel(entryTemplatesResultSet, "clbETClassName", ecm.messages.entry_template_columns_className);
				this._updateFieldLabel(entryTemplatesResultSet, "clbETWorkflowName", ecm.messages.entry_template_columns_workflow);
			}

			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(entryTemplatesResultSet);
			}));

			this.logExit("_retrieveEntryTemplatesResultSetCompleted");
		},

		/**
		 * @private
		 */
		_updateFieldLabel: function(resultSet, field, label) {
			if (!resultSet || !field) {
				return null;
			}
			var columns = resultSet.structure && resultSet.structure.cells && resultSet.structure.cells[0];
			var column = null;
			if (columns != null) {
				for (var i = 0; i < columns.length; i++) {
					if (columns[i].field == field) {
						columns[i].name = label;
						break;
					}
				}
			}
			var columns = resultSet.magazineStructure;
			if (columns != null) {
				for (var i = 0; i < columns.length; i++) {
					if (columns[i].field == "content") {
						for (var j = 0; j < columns[i].fieldsToDisplay.length; j++) {
							if (columns[i].fieldsToDisplay[j].field == field) {
								columns[i].fieldsToDisplay[j].displayName = label;
								break;
							}
						}
						continue;
					}
					if (columns[i].field == field) {
						columns[i].name = label;
						break;
					}
				}
			}
		},

		/**
		 * Retrieves a {@link ecm.model.ResultSet} object holding the list of all security policies.
		 * 
		 * @param callback
		 *            A callback function called after the security policies result set has been retrieved. Passes a
		 *            {@link ecm.model.ResultSet} objects as a parameter.
		 * @since 2.0.3
		 */
		retrieveSecurityPolicies: function(callback) {
			this.logEntry("retrieveSecurityPolicies");
			var sharedRequestParams = {
				sharedRequestMethod: "retrieveSecurityPolicies",
				sharedRequestCompleteCallback: callback,
				serviceName: "getSecurityPolicies",
				repositoryType: this.type,
				requestParams: {
					resultsType: "resultSet",
					repositoryId: this.id
				},
				requestCompleteCallback: lang.hitch(this, function(response) {
					this._retrieveSecurityPoliciesCompleted(response, sharedRequestParams);
				}),
				requestFailedCallback: lang.hitch(this, function() {
					// When the request fails call the completed callbacks with an empty result set.
					this.securityPoliciesResultSet = new ResultSet();
					this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
						callback(this.securityPoliciesResultSet);
					}));
				})
			};
			var request = this.invokeSharedRequest(sharedRequestParams);
			this.logExit("retrieveSecurityPolicies");
			return request;
		},

		_retrieveSecurityPoliciesCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveSecurityPoliciesCompleted");
			response.setType = "securityPolicies";
			response.repository = this;
			this.securityPoliciesResultSet = new ResultSet(response);

			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.securityPoliciesResultSet);
			}));

			this.logExit("_retrieveSecurityPoliciesCompleted");
		},

		/**
		 * Retrieves an array of {@link ecm.model.Role} objects available for this repository.
		 * 
		 * @param callback
		 *            A function invoked after the roles have been retrieved. It is passed one argument, an array of
		 *            {@link ecm.model.Role} objects which represent the roles.
		 */
		retrieveRoles: function(callback) {
			this.logEntry("retrieveRoles");
			var request = null;
			if (this.roles) {
				callback(this.roles);
			} else {
				request = ecm.model.Request.invokeService("getRoles", this.type, {
					repositoryId: this.id
				}, lang.hitch(this, function(response) {

					this.roles = [];
					for ( var i in response.roles) {
						var rolesJSON = response.roles[i];
						if (rolesJSON.desc)
							rolesJSON.description = rolesJSON.desc;
						if (rolesJSON.privs)
							rolesJSON.privileges = rolesJSON.privs;

						var role = new Role(rolesJSON);
						this.roles.push(role);
					}
					callback(this.roles);

				}));
			}
			this.logExit("retrieveRoles");
			return request;
		},
		
		/**
		 * Retrieves an array of {@link ecm.model.Role} objects representing redaction roles available for this repository.
		 * 
		 * @param callback
		 *            A function invoked after the redaction roles have been retrieved. It is passed one argument, an array of
		 *            {@link ecm.model.Role} objects which represent the redaction roles.
		 *            
		 * @param refresh
		 *            Boolean indicating the list should be retrieved fresh from the server.
		 */
		retrieveRedactionRoles: function(callback, refresh){
			this.logEntry("retrieveRedactionRoles");
			var request = null;

			if (this.redactionRoles  && !refresh) {
				callback(this.redactionRoles);
			} else {
				request = ecm.model.Request.invokeService("getRoles", this.type, {
					repositoryId: this.id,
					type: "redaction"
				}, lang.hitch(this, function(response) {

					this.redactionRoles = [];
					for ( var i in response.roles) {
						var rolesJSON = response.roles[i];
						if (rolesJSON.desc)
							rolesJSON.description = rolesJSON.desc;
						if (rolesJSON.privs)
							rolesJSON.privileges = rolesJSON.privs;
						
						var redactionRole = new Role(rolesJSON);
						this.redactionRoles.push(redactionRole);
					}
					callback(this.redactionRoles);
				}));
			}
			this.logExit("retrieveRedactionRoles");
			return request;
		}, 
		
		/**
		 * Adds a redaction role to the repository
		 * 
		 * @param newRole
		 *            A {@link ecm.model.Role} object holding data for the role to be created.
		 * @param callback
		 *            A function invoked after the role has been added.
		 * @since 3.0
		 */
		createRedactionRole: function(newRole, callback){
			this.logEntry("createRedactionRole");

			var params = {
				repositoryId: this.id,
				name: newRole.name,
				description: newRole.description,
				type: newRole.type,
				assignees: JSON.stringify(newRole.assignees),
			};

			var request = ecm.model.Request.invokeService("addRedactionRole", this.type, params, lang.hitch(this, function(response) {

				// Add to redaction roles collection and sort.
				if (!this.redactionRoles){
					this.redactionRoles = [];
				}
				var addedRole = new Role(response.roles[0]);
				this.redactionRoles.push(addedRole);
				this.redactionRoles.sort(function(a, b) {
					return a.name.localeCompare(b.name);
				});
				this.onChange(this);
				callback(addedRole);
			}));

			this.logExit("createRedactionRole");
			return request;
		},
		
		/**
		 * Updates a redaction role in the repository
		 * 
		 * @param newRole
		 *            A {@link ecm.model.Role} object holding data for the role to be updated.
		 * @param callback
		 *            A function invoked after the role has been updated.
		 * @since 3.0
		 */		
		updateRedactionRole: function(role, callback){
			this.logEntry("updateRedactionRole");

			var params = {
				repositoryId: this.id,
				name: role.name,
				description: role.description,
				assignees: JSON.stringify(role.assignees),
				id: role.id
			};

			var request = ecm.model.Request.invokeService("updateRedactionRole", this.type, params, lang.hitch(this, function(response) {

				// Replace the updated redaction role in the list and sort.
				var updatedRole = new Role(response.roles[0]);
				for (var i = 0; i < this.redactionRoles.length; i++){
					var redactionRole = this.redactionRoles[i];
					if (redactionRole.id == updatedRole.id){
						this.redactionRoles[i] = updatedRole;
						break;
					}
				}
				this.redactionRoles.sort(function(a, b) {
					return a.name.localeCompare(b.name);
				});
				
				// Now update any policies that contain the role.
				for (var j = 0; this.redactionPolicies && j < this.redactionPolicies.length; j++){
					var redactionPolicy = this.redactionPolicies[j];
					foundRole = false;
					for (var k = 0; k < redactionPolicy.redactionEditors.length && !foundRole; k++){
						var policyRole = redactionPolicy.redactionEditors[k];
						if (policyRole.id == updatedRole.id){
							redactionPolicy.redactionEditors[k] = dojo.clone(updatedRole);
							foundRole = true;
						}
					}
					for (var l = 0; l < redactionPolicy.redactionViewers.length && !foundRole; l++){
						var policyRole = redactionPolicy.redactionViewers[l];
						if (policyRole.id == updatedRole.id){
							redactionPolicy.redactionViewers[l] = dojo.clone(updatedRole);
							foundRole = true;
						}
					}
				}
				this.onChange(this);
				callback(updatedRole);
			}));

			this.logExit("updateRedactionRole");
			return request;
		},
		
		/**
		 * Deletes a redaction role from this repository.
		 * 
		 * @param id
		 *            A string value holding the role identifier.
		 * @param callback
		 *            A function invoked after the role has been deleted.
		 */
		deleteRedactionRole: function(id, callback){
			this.logEntry("deleteRedactionRole");

			var params = {
				repositoryId: this.id,
				id: id,
				type: "redaction"
			};

			var request = ecm.model.Request.invokeService("deleteRole", this.type, params, lang.hitch(this, function(response) {
				// Delete role in the list.
				for (var i = 0; i < this.redactionRoles.length; i++){
					var redactionRole = this.redactionRoles[i];
					if (redactionRole.id == id){
						this.redactionRoles.splice(i, 1);
						break;
					}
				}
				
				// Now delete the role from policies.
				for (var j = 0; this.redactionPolicies && j < this.redactionPolicies.length; j++){
					var redactionPolicy = this.redactionPolicies[j];
					foundRole = false;
					for (var k = 0; k < redactionPolicy.redactionEditors.length && !foundRole; k++){
						var policyRole = redactionPolicy.redactionEditors[k];
						if (policyRole.id == id){
							redactionPolicy.redactionEditors.splice(k, 1);
							foundRole = true;
						}
					}
					for (var l = 0; l < redactionPolicy.redactionViewers.length && !foundRole; l++){
						var policyRole = redactionPolicy.redactionViewers[l];
						if (policyRole.id == id){
							redactionPolicy.redactionViewers.splice(l, 1);
							foundRole = true;
						}
					}
				}
				this.onChange(this);
				if (callback){
					callback();
				}
			}));

			this.logExit("deleteRedactionRole");
			return request;
		},
		
		/**
		 * Adds a redaction policy to the repository
		 * 
		 * @param newPolicy
		 *            A {@link ecm.model.Policy} object holding data for the policy to be created.
		 * @param callback
		 *            A function invoked after the policy has been added.
		 * @since 3.0
		 */
		createRedactionPolicy: function(newPolicy, callback){
			this.logEntry("createRedactionPolicy");
			
			var reasonIds = [];
			for (var i = 0; i < newPolicy.redactionReasons.length; i++){
				reasonIds.push(newPolicy.redactionReasons[i].getValue("id"));
			}
			
			var roleIds = [];
			for (var j = 0; j < newPolicy.redactionEditors.length; j++){
				var redactionEditor = newPolicy.redactionEditors[j];
				if (redactionEditor.id){
					roleIds.push(redactionEditor.id);
				}
				else {
					roleIds.push(redactionEditor.getValue("id"));
				}
			}
			
			for (var k = 0; k < newPolicy.redactionViewers.length; k++){
				var redactionViewer = newPolicy.redactionViewers[k];
				if (redactionViewer.id){
					roleIds.push(redactionViewer.id);
				}
				else {
					roleIds.push(redactionViewer.getValue("id"));
				}
			}

			var params = {
				repositoryId: this.id,
				name: newPolicy.name,
				description: newPolicy.description,
				reasons: JSON.stringify(reasonIds),
				roles: JSON.stringify(roleIds),
			};

			var request = ecm.model.Request.invokeService("addRedactionPolicy", this.type, params, lang.hitch(this, function(response) {
				
				if (!this.redactionPolicies){
					this.redactionPolicies = [];
				}
				var addedPolicy = new Policy(response.policies[0]);
				this.redactionPolicies.push(addedPolicy);
				this.redactionPolicies.sort(function(a, b) {
					return a.name.localeCompare(b.name);
				});
				this.onChange(this);
				callback(addedPolicy);
			}));

			this.logExit("createRedactionPolicy");
			return request;
		},
		
		/**
		 * Retrieves an array of {@link ecm.model.RedactionPolicy} objects representing redaction policies available for this repository.
		 * 
		 * @param callback
		 *            A function invoked after the redaction policies have been retrieved. It is passed one argument, an array of
		 *            {@link ecm.model.RedactionPolicy} objects which represent the redaction policies.
		 *            
		 * @param refresh
		 *            Boolean indicating the list should be retrieved fresh from the server.
		 */
		retrieveRedactionPolicies: function(callback, refresh){
			this.logEntry("retrieveRedactionPolicies");
			var request = null;

			if (this.redactionPolicies  && !refresh) {
				callback(this.redactionPolicies);
			} else {
				request = ecm.model.Request.invokeService("getRedactionPolicies", this.type, {
					repositoryId: this.id
				}, lang.hitch(this, function(response) {

					this.redactionPolicies = [];
					for ( var i in response.policies) {
						var policy = new Policy(response.policies[i]);
						this.redactionPolicies.push(policy);
					}
					callback(this.redactionPolicies);
				}));
			}
			this.logExit("retrieveRedactionPolicies");
			return request;
		}, 
		
		/**
		 * Updates a redaction policy in the repository
		 * 
		 * @param newRole
		 *            A {@link ecm.model.RedacationPolicy} object holding data for the policy to be updated.
		 * @param callback
		 *            A function invoked after the policy has been updated.
		 * @since 3.0
		 */		
		updateRedactionPolicy: function(policy, callback){
			this.logEntry("updateRedactionPolicy");
			
			var reasonIds = [];
			for (var i = 0; i < policy.redactionReasons.length; i++){
				reasonIds.push(policy.redactionReasons[i].getValue("id"));
			}
			
			var roleIds = [];
			for (var j = 0; j < policy.redactionEditors.length; j++){
				var redactionEditor = policy.redactionEditors[j];
				if (redactionEditor.id){
					roleIds.push(redactionEditor.id);
				}
				else {
					roleIds.push(redactionEditor.getValue("id"));
				}
			}
			
			for (var k = 0; k < policy.redactionViewers.length; k++){
				var redactionViewer = policy.redactionViewers[k];
				if (redactionViewer.id){
					roleIds.push(redactionViewer.id);
				}
				else {
					roleIds.push(redactionViewer.getValue("id"));
				}
			}

			var params = {
					repositoryId: this.id,
					id: policy.id,
					name: policy.name,
					description: policy.description,
					reasons: JSON.stringify(reasonIds),
					roles: JSON.stringify(roleIds),
				};

			var request = ecm.model.Request.invokeService("updateRedactionPolicy", this.type, params, lang.hitch(this, function(response) {
				// Replace the updated redaction policy in the list and sort.
				var updatedPolicy = new Policy(response.policies[0]);
				for (var i = 0; i < this.redactionPolicies.length; i++){
					var redactionPolicy = this.redactionPolicies[i];
					if (redactionPolicy.id == updatedPolicy.id){
						this.redactionPolicies[i] = updatedPolicy;
						break;
					}
				}
				this.redactionPolicies.sort(function(a, b) {
					return a.name.localeCompare(b.name);
				});
				this.onChange(this);
				callback(updatedPolicy);
			}));

			this.logExit("updateRedactionPolicy");
			return request;
		},
		
		
		/**
		 * Deletes a redaction policy from this repository.
		 * 
		 * @param id
		 *            A string value holding the policy identifier.
		 * @param callback
		 *            A function invoked after the policy has been deleted.
		 */
		deleteRedactionPolicy: function(id, callback){
			this.logEntry("deleteRedactionPolicy");

			var params = {
				repositoryId: this.id,
				id: id
			};

			var request = ecm.model.Request.invokeService("deleteRedactionPolicy", this.type, params, lang.hitch(this, function(response) {
				// Delete role in the list.
				for (var i = 0; i < this.redactionPolicies.length; i++){
					var redactionPolicy = this.redactionPolicies[i];
					if (redactionPolicy.id == id){
						this.redactionPolicies.splice(i, 1);
						break;
					}
				}

				this.onChange(this);
				if (callback){
					callback();
				}
			}));

			this.logExit("deleteRedactionPolicy");
			return request;
		},
		
		/**
		 * Adds a system role (template) to this repository.
		 * 
		 * @param name
		 *            A string value holding the name of the role to add.
		 * @param description
		 *            A string value holding a description of the role.
		 * @param privilege
		 *            A set of privileges for the role.
		 * @param callback
		 *            A function invoked after the role has been added. Passes a {@link ecm.modle.Role} object as a
		 *            parameter.
		 */
		addSystemRole: function(name, description, privileges, callback) {
			this.logEntry("addSystemRole");

			var params = {
				repositoryId: this.id,
				name: name,
				description: description,
				privs: privileges
			};

			var request = ecm.model.Request.invokeService("addRole", this.type, params, lang.hitch(this, function(response) {
				this.roles = null; // force cache refresh next time retriveRoels is called
				var rolesJSON = response.roles[0];
				if (rolesJSON.desc)
					rolesJSON.description = rolesJSON.desc;
				if (rolesJSON.privs)
					rolesJSON.privileges = rolesJSON.privs;

				var role = new Role(rolesJSON);
				callback(role);
			}));

			this.logExit("addSystemRole");
			return request;
		},

		/**
		 * Deletes a system role (template) from this repository.
		 * 
		 * @param id
		 *            A string value holding the role identifier.
		 * @param callback
		 *            A function invoked after the role has been deleted.
		 */
		deleteSystemRole: function(id, callback) {
			this.logEntry("deleteSystemRole");

			var params = {
				repositoryId: this.id,
				name: name,
				id: id

			};

			var request = ecm.model.Request.invokeService("deleteRole", this.type, params, lang.hitch(this, function(response) {
				this.roles = null; // force cache refresh next time retrieveRoles is called
				callback();
			}));

			this.logExit("deleteSystemRole");
			return request;
		},

		/**
		 * Retrieves the holds that can be applied to, or removed from, a specified list of items.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects for the items to be queried for valid holds.
		 * @param isAply
		 *            If true the holds listed are for apply, if false the holds are for remove.
		 * @param callback
		 *            A function invoked after the hold information has been retrieved. Two arguments are passed to this
		 *            callback: the list of holds, and a boolean value indicating if new holds can be created.
		 */
		retrieveHolds: function(items, isApply, callback) {
			this.logEntry("retrieveHolds");
			var self = this;
			var docIDs = [];
			for ( var i in items) {
				docIDs.push(items[i].id);
			}
			var request = ecm.model.Request.invokeService("getHolds", this.type, {
				repositoryId: this.id,
				list_all_hold_names: isApply,
				template_name: items.length > 0 ? items[0].template : "",
				docid: docIDs
			}, function(response) {
				self._retrieveHoldsCompleted(response, callback);
			});
			this.logExit("retrieveHolds");
			return request;
		},

		_retrieveHoldsCompleted: function(response, callback) {
			this.logEntry("_retrieveHoldsCompleted");
			if (callback) {
				var canCreateHold = false;
				var holds = [];
				if (response.hold_names) {
					response.hold_names.sort(function(a, b) {
						return a.hold_name.toUpperCase().localeCompare(b.hold_name.toUpperCase());
					});
					var name, label;
					for ( var i in response.hold_names) {
						name = response.hold_names[i].hold_name;
						label = response.hold_names[i].hold_desc;
						holds.push({
							name: name,
							label: label
						});
					}
				}
				canCreateHold = response.privCreateHold;
				callback(holds, canCreateHold);
			}
			this.logExit("_retrieveRolesCompleted");
		},

		/**
		 * Applies one or more holds from the specified items. This is only supported for Content Manager OnDemand.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the documents to be applied to the holds.
		 * @param holdNames
		 *            An array of hold names.
		 * @param callback
		 *            A function invoked after the holds have been applied to the items.
		 */
		applyHold: function(items, holdNames, callback) {
			this.logEntry("applyHolds");
			var self = this;
			var docIDs = [];
			for ( var i in items) {
				docIDs.push(items[i].id);
			}
			var request = ecm.model.Request.invokeService("applyHold", this.type, {
				repositoryId: this.id,
				template_name: items[0].template,
				desktop: ecm.model.desktop.id,
				hold_names: holdNames,
				docid: docIDs
			}, function(response) {
				self._applyHoldCompleted(items, response, callback);
			});
			this.logExit("applyHold");
			return request;
		},

		_applyHoldCompleted: function(items, response, callback) {
			this.logEntry("_applyHoldCompleted");
			var itemsJSON = response.rows;
			for ( var i in itemsJSON) {
				var itemJSON = itemsJSON[i];
				for ( var j in items) {
					if (itemJSON.origdocid == items[j].id) {
						items[j].originalId = items[j].id;
						items[j].id = itemJSON.id;
						items[j].hasHold = itemJSON.hasHold;
					}
				}
			}
			this.onChange(items);
			if (callback) {
				callback(response);
			}
			this.onHoldApplied(this);
			this.logExit("_applyHoldCompleted");
		},

		/**
		 * An event function called after the hold has been applied.
		 * 
		 * @param repository
		 *            {@link ecm.model.Repository} object is passed as a parameter.
		 */
		onHoldApplied: function(repository) {
		},

		/**
		 * Removes one or more holds from the specified items. This is only supported for Content Manager OnDemand.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the documents to be removed from the
		 *            holds.
		 * @param holdNames
		 *            An array of hold names.
		 * @param callback
		 *            A function invoked after the holds have been removed from the items.
		 */
		removeHold: function(items, holdNames, callback) {
			this.logEntry("removeHold");
			var self = this;
			var docIDs = [];
			for ( var i in items) {
				docIDs.push(items[i].id);
			}
			var request = ecm.model.Request.invokeService("removeHold", this.type, {
				repositoryId: this.id,
				template_name: items[0].template,
				desktop: ecm.model.desktop.id,
				hold_names: holdNames,
				docid: docIDs
			}, function(response) {
				self._removeHoldCompleted(items, response, callback);
			});
			this.logExit("removeHold");
			return request;
		},

		_removeHoldCompleted: function(items, response, callback) {
			this.logEntry("_removeHoldCompleted");
			var itemsJSON = response.rows;
			for ( var i in itemsJSON) {
				var itemJSON = itemsJSON[i];
				for ( var j in items) {
					if (itemJSON.origdocid == items[j].id) {
						items[j].originalId = items[j].id;
						items[j].id = itemJSON.id;
						items[j].hasHold = itemJSON.hasHold;
					}
				}
			}
			this.onChange(items);
			if (callback) {
				callback(response);
			}
			this.onHoldRemoved(this);
			this.logExit("_removeHoldCompleted");
		},

		/**
		 * An event function called after the hold has been removed.
		 * 
		 * @param repository
		 *            {@link ecm.model.Repository} object is passed as a parameter.
		 */
		onHoldRemoved: function(repository) {
		},

		/**
		 * Creates a new hold record. This is supported only for Content Manager OnDemand.
		 * 
		 * @param name
		 *            The name of the hold.
		 * @param description
		 *            A description of the hold.
		 * @param folderName
		 *            A string value holding the folder name
		 * @param callback
		 *            A funtion invoked after the hold is created.
		 */
		createHold: function(name, description, folderName, callback) {
			this.logEntry("createHold");
			var self = this;
			var request = ecm.model.Request.invokeService("createHold", this.type, {
				repositoryId: this.id,
				desktop: ecm.model.desktop.id,
				hold_name: name,
				hold_desc: description,
				template_name: folderName ? folderName : ""
			}, function(response) {
				self._createHoldCompleted(response, callback);
			});
			this.logExit("createHold");
			return request;
		},

		_createHoldCompleted: function(response, callback) {
			this.logEntry("_createHoldCompleted");
			if (callback) {
				callback(response);
			}
			this.onHoldCreated(this);
			this.logExit("_createHoldCompleted");
		},

		/**
		 * An event function called after the hold has been created.
		 * 
		 * @param repository
		 *            {@link ecm.model.Repository} object is passed as a parameter.
		 */
		onHoldCreated: function(repository) {
		},

		/**
		 * Deletes the specified items from the repository.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects for the items to delete.
		 * @param callback
		 *            A function invoked after the items are successfully deleted.
		 * @param allVersions
		 *            If true, deletes all versions of the items.
		 */
		deleteItems: function(items, callback, allVersions) {
			this.logEntry("deleteItems");
			var docIDs = [];
			for ( var i in items) {
				if (this.type == "box") {
					if (allVersions != undefined && allVersions == false && items[i].parent) {
						docIDs.push(items[i].parent.id + "|" + items[i].id);
					} else {
						docIDs.push(items[i].id);
					}
				} else {
					docIDs.push(items[i].id);
				}
			}
			var request = ecm.model.Request.invokeService("deleteItem", this.type, {
				repositoryId: this.id,
				docid: docIDs,
				include_all_versions: allVersions ? "true" : "false"
			}, lang.hitch(this, function(response) {
				this._deleteItemsCompleted(response, items, callback);
			}));
			this.logExit("deleteItems");
			return request;
		},

		_deleteItemsCompleted: function(response, items, callback) {
			this.logEntry("_deleteItemsCompleted");

			if (this._isP8() || this._isCM()) {
				var deletedItemIds = response.deletedItemIds;
				array.forEach(deletedItemIds, function(deletedItemId) {
					for ( var i in items) {
						if (items[i].id == deletedItemId) {
							items[i].deleted = true;
							break;
						}
					}
				});
			} else {
				array.forEach(items, function(item) {
					item.deleted = true;
				});
			}

			// Remove the item from the recent items list
			this.removeRecentItems(items);

			if (callback) {
				callback(items);
			}

			if (items && items[0] && items[0].resultSet && items[0].resultSet.context == "PropertiesVersions") {
				items[0].resultSet.onChange(items);
			} else {
				this.onChange(items);
			}

			this.logExit("_deleteItemsCompleted");
		},

		/**
		 * Locks the specified items on the repository.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the items to lock.
		 * @param callback
		 *            A function invoked when the items have successfully been locked.
		 * @param returnVersion
		 *            The version of the item to be returned in the response.
		 * @param errorCallback
		 *            An option method to call when errors occur during logon.
		 */
		lockItems: function(items, callback, returnVersion, errorCallback) {
			if (this.type != "od") { // OD doesn't support lock right now
				var task = new Task({
					id: ecm.messages.lock_items,
					name: ecm.messages.lock_items
				});
				task.doit = lang.hitch(this, "_lockItemsDoIt", task);
				task.undoit = lang.hitch(this, "_lockItemsUndoIt", task);
				task.lockCallback = callback;
				task.lockErrorCallback = errorCallback;
				task.items = items;
				task.returnVersion = returnVersion;
				task.doit();
				ecm.model.desktop.addUndoableTask(task);
			}
		},

		_lockItemsDoIt: function(task) {
			this.logEntry("lockItemsDoit");
			var docIDs = [];
			for ( var i in task.items) {
				docIDs.push(task.items[i].id);
			}
			var request = ecm.model.Request.invokeService("lock", this.type, {
				repositoryId: this.id,
				docid: docIDs,
				template_name: task.items[0].template,
				returnVersion: task.returnVersion
			}, lang.hitch(this, function(response) {
				this._lockItemsCompleted(response, task.items, task.lockCallback);
			}), false, false, lang.hitch(this, function(response, errors) {
				if (task.lockErrorCallback) {
					task.lockErrorCallback(response, errors);
				}
			}));
			this.logExit("lockItemsDoIt");
			return request;
		},

		_lockItemsUndoIt: function(task) {
			this._unlockItemsDoIt(task);
		},

		_lockItemsCompleted: function(response, items, lockCallback) {
			this.logEntry("lockItemsCompleted");
			var itemsJSON = response.rows;
			this._updateItemsById(items, itemsJSON);
			if (ecm.model.desktop.id != "admin") { //Edit Service and OOS update templates documents in admin desktop, don't need to add them in recent items
				this.addRecentItems(items);
			}			
			if (lockCallback) {
				lockCallback(itemsJSON);
			}
			if (this._isCmis()) {
				// work around for CMIS Tech Preview:  refresh parent folder to correct the lock icon and which versioning actions are enabled
				this._CMIS_refreshParentFolder(items);
			}
			this.logExit("lockItemsCompleted");
		},

		_updateItemsById: function(items, jsonItems) {
			var returnedItem = null;
			for ( var i in jsonItems) {
				returnedItem = ContentItem.createFromJSON(jsonItems[i], this, null, null);
				for ( var j in items) {
					if ((items[j].id == returnedItem.id) || (items[j].id == returnedItem.origdocid)) {
						items[j].update(returnedItem);
					}
				}
			}
		},

		// Refresh the first item's parent folder.
		// Items in query view do not have a parent folder.
		// So, this method only has affect in browse view.
		_CMIS_refreshParentFolder: function(items) {
			if (items != null && items.length > 0 && items[0] != null && items[0].parent != null) {
				items[0].parent.refresh();
			}
		},

		/**
		 * Unlocks the specified items in the repository.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the items to unlock.
		 * @param callback
		 *            A function invoked when the items have successfully been unlocked.
		 * @param errorCallback
		 *            An option method to call when errors occur during logon.
		 */
		unlockItems: function(items, callback, errorCallback) {
			if (this.type != "od") { // OD doesn't support unlock right now
				var task = new Task({
					id: ecm.messages.unlock_items,
					name: ecm.messages.unlock_items
				});
				task.doit = lang.hitch(this, "_unlockItemsDoIt", task);
				task.undoit = lang.hitch(this, "_unlockItemsUndoIt", task);
				task.items = items;
				task.unlockCallback = callback;
				task.unlockErrorCallback = errorCallback;
				task.doit();
				ecm.model.desktop.addUndoableTask(task);
			}
		},

		_unlockItemsDoIt: function(task) {
			this.logEntry("unlockItemsDoIt");
			var docIDs = [];
			for ( var i in task.items) {
				docIDs.push(task.items[i].id);
			}
			var request = ecm.model.Request.invokeService("unlock", this.type, {
				repositoryId: this.id,
				docid: docIDs,
				template_name: task.items[0].template
			}, lang.hitch(this, function(response) {
				this._unlockItemsCompleted(response, task.items, task.unlockCallback);
			}), false, false, lang.hitch(this, function(response, errors) {
				if (task.unlockErrorCallback) {
					task.unlockErrorCallback(response, errors);
				}
			}));
			this.logExit("unlockItemsDoit");
			return request;
		},

		/**
		 * Returns true if the repository allows browsing of folders.
		 */
		canListFolders: function() {
			return this.type == 'od' ? false : true;
		},

		_unlockItemUndoIt: function(task) {
			this._lockItemsDoIt(task);
		},

		_unlockItemsCompleted: function(response, items, unlockCallback) {
			this.logEntry("unlockItemsCompleted");
			var itemsJSON = response.rows;
			this._updateItemsById(items, itemsJSON);
			if (ecm.model.desktop.id != "admin") { //Edit Service and OOS update templates documents in admin desktop, don't need to add them in recent items
				this.addRecentItems(items);
			}	
			if (unlockCallback) {
				unlockCallback(items);
			}
			if (this._isCmis()) {
				// work around for CMIS Tech Preview:  refresh parent folder to correct the lock icon and which versioning actions are enabled
				this._CMIS_refreshParentFolder(items);
			}

			this.logExit("unlockItemsCompleted");
		},

		/**
		 * Gets all the object store names in the same domain as current repository. This function is for FileNet P8
		 * only.
		 * 
		 * @param callback
		 *            A callback function called after the object store names have been retrieved. Passes an array of
		 *            object store names as a parameter.
		 */
		getDomainObjectStoreNames: function(callback) {
			this.logEntry("getDomainObjectStoreNames");
			var request = null;
			if (this.type != "p8") {
				return null;
			} else {
				var self = this;
				request = ecm.model.Request.invokeService("getDomainObjectStoreNames", this.type, {
					repositoryId: this.id
				}, function(response) {
					self._getDomainObjectStoreNamesCompleted(response, callback);
				});
			}
			this.logExit("getDomainObjectStoreNames");
			return request;
		},

		_getDomainObjectStoreNamesCompleted: function(response, callback) {
			this.logEntry("_getDomainObjectStoreNamesCompleted");
			var objestStoreNames;
			if (response["objectstores"]) {
				objestStoreNames = response.objectstores;
			}
			if (callback) {
				callback(objestStoreNames);
			}
			this.logExit("_getDomainObjectStoreNamesCompleted");
		},

		/**
		 * Clears all cached information related to this repository and invokes the <code>onChange(this)</code> event.
		 */
		refresh: function() {
			// Dijits listening to onChange should respond by clearing their cached info as well and
			// reretrieving it.
			this._clearCache();
			this.onChange(this);
		},

		/**
		 * Event function, called when the repository has changed or cached information has been cleared due to a call
		 * to refresh.
		 * 
		 * @param modelObject
		 *            The instance of the particular ecm.model object that changed. This could be this repository object
		 *            or a nested object.
		 */
		onChange: function(modelObject) {
			ecm.model.desktop.onChange(modelObject);
		},

		_isOnDemand: function() {
			return this.type == "od";
		},
		_isCM: function() {
			return this.type == "cm";
		},
		_isP8: function() {
			return this.type == "p8";
		},
		_isP8Like: function() {
			return this.type == "p8" || this.type == "cmis";
		},
		_isCmis: function() {
			return this.type == "cmis";
		},
		_isBox: function() {
			return this.type == "box";
		},

		/**
		 * Retrieves the repository configuration information. If no callback is provided, the repository configuration
		 * associated with this repository is returned. If the repository configuration is not retrieved, it is
		 * synchronously retrieved and returned.
		 * <p>
		 * If a callback is provided, the repository configuration associated with this repository is passed to the
		 * callback method. If the repository configuration is not retrieved, it is asynchronously retrieved and passed
		 * to the callback when the retrieve has completed.
		 * 
		 * @param callback
		 *            A callback function called after the configuration information has been retrieved.
		 */
		getRepositoryConfig: function(callback) {
			var usingCallback = (callback != null);
			if (this.repositoryConfig) {
				if (usingCallback) {
					callback(this.repositoryConfig);
				} else {
					return this.repositoryConfig;
				}
			} else {
				var repositoryConfig = RepositoryReadConfig.createRepositoryReadConfig(this.id);
				repositoryConfig.getConfig(lang.hitch(this, function(response) {
					this.repositoryConfig = repositoryConfig;
					if (usingCallback) {
						callback(this.repositoryConfig);
					}
				}), !usingCallback); // If a callback is not provided retrieve synchronously.
				if (!usingCallback) {
					return this.repositoryConfig;
				}
			}
		},

		/**
		 * Returns an {@link ecm.model.ResultSet} object containing the requested versions for each item.
		 * 
		 * @param items
		 *            A single item or an array of items.
		 * @param version
		 *            Identifies which versions to return. May be a specific version string or the special strings
		 *            <code>"released"</code>, <code>"current"</code>, or <code>"reservation"</code>. If
		 *            version is null all versions are retrieved for each of the item identifiers.
		 * @param callback
		 *            A function that is called when the versions have been retrieved.
		 * @param synchronous
		 *            An optional flag indicating the request should be synchronous.
		 */
		retrieveVersions: function(items, version, callback, synchronous) {
			this.logEntry("retrieveVersions");
			var itemids = [];
			if (items instanceof Array) {
				for ( var i in items) {
					itemids.push(items[i].id);
				}
			} else {
				itemids.push(items.id);
			}
			var request = ecm.model.Request.invokeService("getDocumentVersions", this.type, {
				repositoryId: this.id,
				requestedVersion: version,
				docid: itemids,
				thumbnailExcluded: true
			}, lang.hitch(this, function(response) {
				response.repository = this;
				var results = new ResultSet(response);
				results.context = "PropertiesVersions";
				var structure = results.structure.cells[0];
				for ( var i in structure) {
					// VersionStatus is numeric & has align right, but the actual translated string value is returned
					if (structure[i].field == "VersionStatus") {
						structure[i].styles = "";
					}
					structure[i].sortable = false; // none of the columns are sortable
				}
				if (this._isBox()) {
					for (var i = 1; i < results.items.length; i++) {
						results.items[i].parent = results.items[0]; // Set the version's current item (to be used if this version is to be deleted)
					}
				}
				if (callback) {
					callback(results);
				}
			}), false, synchronous);
			this.logExit("retrieveVersions");
			return request;
		},

		/**
		 * Retrieves all items that are checked out by the current user.
		 * 
		 * @param callback
		 *            A function called with a {@link ecm.model.ResultSet} object holding the items that were retrieved
		 * @since 2.0.3
		 */
		retrieveCheckedOutItems: function(callback, sortProperty, sortDescending) {
			this.logEntry("retrieveCheckedOutItems");

			var request = ecm.model.Request.invokeService("getCheckedOutItems", this.type, {
				repositoryId: this.id,
				order_by: sortProperty,
				order_descending: sortDescending
			}, lang.hitch(this, function(response) {
				response.repository = this;
				response.setType = "checkedOutItems";
				if (callback)
					callback(new ResultSet(response));
			}));

			this.logExit("retrieveCheckedOutItems");
			return request;
		},

		/**
		 * Returns whether this repository is a FilePlan repository for Enterprise Records.
		 * 
		 * @returns {Boolean} It will return true if the record repository type is <code>"FilePlan"</code>.
		 */
		isRecordFilePlanRepository: function() {
			return this.getRecordType() == "FilePlan";
		},

		/**
		 * Returns whether this repository is a Content repository for Enterprise Records.
		 * 
		 * @returns {Boolean} It will return true if the record repository type is <code>"Content"</code>.
		 */
		isRecordContentRepository: function() {
			return this.getRecordType() == "Content";
		},

		/**
		 * Return the record type of this repository.
		 * 
		 * @returns {String} It will return <code>"Content"</code>, <code>"FilePlan"</code>, or
		 *          <code>"Plain"</code>
		 */
		getRecordType: function() {
			return this.recordRepositoryType;
		},

		/**
		 * Sets the record type for this repository for Enterprise Records.
		 * 
		 * @param recordType
		 *            The record type for the repository.
		 */
		setRecordType: function(recordType) {
			if (recordType)
				this.recordRepositoryType = recordType;
		},

		/**
		 * Sets the record's datamodel type for this repository for Enterpise Records. This only applies to File Plan
		 * Repositories.
		 * 
		 * @param datamodel
		 *            A string value holding the data model type.
		 */
		setRecordDatamodelType: function(datamodel) {
			if (datamodel)
				this.recordDatamodelType = datamodel;
		},

		/**
		 * Return the record datamodel type for this repository.
		 * 
		 * @returns {String} It will return <code>"Base"</code>, <code>"DoD"</code>, <code>"Pro"</code>, or
		 *          <code>"DoDClassified"</code>.
		 */
		getRecordDatamodelType: function() {
			return this.recordDatamodelType;
		},

		/**
		 * Retrieves server printers and faxes.
		 * 
		 * @param callback
		 *            Callback function called after retrieval of the printers.
		 * @param force
		 *            A boolean value indicating whether to return the cached list or re-retrieve a new list.
		 */
		retrieveServerPrinters: function(callback, force) {
			this.logEntry("retrieveServerPrinters");
			var request = null;

			if (this.type == "od") {
				var self = this;

				if (this.serverPrinters && !force) {
					callback(this.serverPrinters, this.serverPrinterDefaults);
				} else {
					request = ecm.model.Request.invokeService("getServerPrinters", "od", {
						repositoryId: this.id
					}, function(response) {
						self._retrieveServerPrintersCompleted(response, callback);
					});
				}
			} else {
				if (callback)
					callback(null);
			}

			this.logExit("retrieveServerPrinters");
			return request;
		},

		_retrieveServerPrintersCompleted: function(response, callback) {
			this.logEntry("_retrieveServerPrintersCompleted");

			this.serverPrinters = [];
			this.serverPrinterDefaults = {};

			if (response) {
				this.serverPrinterDefaults.faxCoverPage = response.faxCoverPage;
				this.serverPrinterDefaults.faxSenderCompany = response.faxSenderCompany;
				this.serverPrinterDefaults.faxSenderName = response.faxSenderName;
				this.serverPrinterDefaults.faxSenderNumber = response.faxSenderNumber;
				this.serverPrinterDefaults.faxSenderTelNumber = response.faxSenderTelNumber;
				this.serverPrinterDefaults.user_printclass = response.user_printclass;
				this.serverPrinterDefaults.user_printer = response.user_printer;
				this.serverPrinterDefaults.user_printerid = response.user_printerid;
				this.serverPrinterDefaults.user_printformdef = response.user_printformdef;
				this.serverPrinterDefaults.user_printforms = response.user_printforms;
				this.serverPrinterDefaults.user_printnode = response.user_printnode;
				this.serverPrinterDefaults.user_printpagedef = response.user_printpagedef;
				this.serverPrinterDefaults.user_printrouting = response.user_printrouting;
				this.serverPrinterDefaults.user_printwriter = response.user_printwriter;
				this.serverPrinterDefaults.user_printbanner = response.user_printbanner;

				for ( var k in response) {
					var prop = response[k];
					if (k === "printers") {
						for ( var i in prop) {
							this.serverPrinters[i] = prop[i];
						}
					}
				}
			}

			if (callback) {
				callback(this.serverPrinters);
			}

			this.logExit("_retrieveServerPrintersCompleted");
		},

		/**
		 * Runs a server print using the supplied printer parameters.
		 * 
		 * @param params
		 *            Print parameters to send to the server.
		 * @param items
		 *            An array of {@link ecm.model.Item} objects to be printed.
		 * @param callback
		 *            Function to call when the server print request completes.
		 */
		serverPrint: function(params, items, callback) {
			this.logEntry("serverPrint");
			var request = null;
			if (this.type == "od") {
				var docid = [];
				for ( var i in items) {
					if (i == 0)
						params.template_name = items[i].template;
					docid.push(items[i].id);
				}
				params.docid = docid;
				params.repositoryId = this.id;

				request = ecm.model.Request.invokeService("serverPrint", "od", params, function(response) {
					if (callback) {
						callback(response);
					}
				}, true);
			}

			this.logExit("serverPrint");
			return request;
		},

		/**
		 * Returns the email address if is available from either P8 (when P8 users are configured with email addresses).
		 * 
		 * @param userId
		 *            The user to look up the email address for.
		 * @param callback
		 *            Function to call when the server request completes.
		 */
		getUserEmail: function(userId, callback) {
			var _userId = userId;
			var _callback = callback;

			// If this is P8, see if the email address is configured for the user.
			if (this.type == "p8") {
				this._getEmailFromDirectory(userId, lang.hitch(this, function(emailAddress) {
					_callback(emailAddress);
				}));
			} else {
				_callback(null);
			}
		},

		/**
		 * Attempts to get a user's email address from the directory service.
		 * 
		 * @param userId
		 *            The user to look up the email address for.
		 * @param callback
		 *            Function to call when the server request completes.
		 * @private
		 */
		_getEmailFromDirectory: function(userId, callback) {
			var _userId = userId;
			var _callback = callback;
			var found = false;
			this.getDirectories(lang.hitch(this, function(domains) {
				for (i = 0; i < domains.length; i++) {
					dir = domains[i];
					this.findUsers(lang.hitch(this, function(users) {
						for (var j = 0; j < users.length; j++) {
							var user = users[j];
							if (user.id == _userId || user.shortName == _userId || user.displayName == _userId) {
								var emailfilter = new RegExp(".+\\@.+\\..+");
								if (emailfilter.test(user.emailAddress)) {
									_callback(user.emailAddress);
								} else {
									_callback(null);
								}
								return;
							}
						}
						if (i >= domains.length && j >= users.length) {
							_callback(null);
						}
					}), dir.id, _userId, "5", null, null, "1");
				}
			}));
		},

		/**
		 * For a FileNet P8 repository, returns true if the serverName URL uses EJB.
		 */
		usesEJB: function() {
			return this.type == "p8" && this.serverName && this.serverName.substring(0, 4) != "http";
		},

		/**
		 * Returns true if this repository has a linked account assigned for the current user.
		 */
		isOAuthLinked: function() {
			return ecm.model.desktop._hasLinkedBoxRepository(this);
		},

		/**
		 * For an IBM Content Manager repository, returns true if the All classes search option should be hidden.
		 * 
		 * @since 2.0.3.5
		 */
		hideSearchAllClasses: function() {
			return !this.allPseudoClassSupported || (this._isCM() && (this.allPseudoClassHidden || this.allClassesSearch == this.ALL_CLASSES_SEARCH.HIDDEN));
		},

		/**
		 * Retrieve AppGroupNames & AppNames using the supplied templateName parameters.
		 * 
		 * @param callback
		 *            Function to call when the retrieve app groups request completes.
		 * @param templateName
		 *            templateName parameters to send to the server.
		 */
		retrieveODAppGroups: function(callback, templateName) {
			this.logEntry("retrieveODAppGroups");
			var request = null;
			var appGrpList = null;
			if (this.type != "od") {
				return null;
			} else {
				if (this.appGrpListCache && this.appGrpListCache[templateName]) {
					if (callback) {
						callback(this.appGrpListCache[templateName]);
					}
				} else {
					var self = this;
					request = ecm.model.Request.invokeService("getAppGroups", this.type, {
						repositoryId: this.id,
						template_name: templateName,
					}, function(response) {
						self._retrieveODAppGroupsCompleted(response, callback, templateName);
					}, true);
				}
			}
			this.logExit("retrieveODAppGroups");
			return request;
		},

		_retrieveODAppGroupsCompleted: function(response, callback, templateName) {
			this.logEntry("_retrieveODAppGroupsCompleted");
			var appGrp = response.appGrp;
			if (!this.appGrpListCache) {
				this.appGrpListCache = [];
			}
			this.appGrpListCache[templateName] = appGrp;
			if (callback) {
				callback(appGrp);
			}
			this.logExit("_retrieveODAppGroupsCompleted");
		},

		/**
		 * Retrieve AppGroupNames & AppNames using the supplied templateName parameters.
		 * 
		 * @param templateName
		 *            templateName parameters to send to the server.
		 * @param callback
		 *            Function to call when the retrieve add document permission on cmod.
		 */
		retrieveODAddDocPermission: function(templateName, callback) {
			this.logEntry("retrieveODAddDocPermission");
			var request = null;
			var appGrpList = null;
			if (this.type != "od") {
				return null;
			} else {
				if (this.odItemPermission && this.odItemPermission[templateName]) {
					if (callback) {
						callback(this.odItemPermission[templateName]);
					}
				} else {
					var self = this;
					this.logDebug("templateName is " + templateName);
					request = ecm.model.Request.invokeService("getPermissions", this.type, {
						repositoryId: this.id,
						template_name: templateName,
					}, function(response) {
						self._retrieveODAddDocPermissionCompleted(response, callback, templateName);
					}, true);
				}
			}
			this.logExit("retrieveODAddDocPermission");
			return request;
		},

		_retrieveODAddDocPermissionCompleted: function(response, callback, templateName) {
			this.logEntry("_retrieveODAddDocPermissionCompleted");
			var permission = response.hasPermission;
			if (!this.odItemPermission) {
				this.odItemPermission = [];
			}
			this.odItemPermission[templateName] = permission;
			if (callback) {
				callback(permission);
			}
			this.logExit("_retrieveODAddDocPermissionCompleted");
		},
		
		/**
		 * Returns an instance of {@link ecm.model.MetadataTemplate} for the given identifier (Box only).
		 * 
		 * @param metadataTemplateId
		 *            The identifier of the metadata template
		 * @since 3.0
		 */
		getMetadataTemplate: function(metadataTemplateId) {
			if (!this._isBox() || !metadataTemplateId)
				return null;
			
			var cache = this._metadataTemplateCache && this._metadataTemplateCache.byId;
			return (cache && cache[metadataTemplateId]) || this._cacheMetadataTemplateById(new MetadataTemplate({
				id: metadataTemplateId,
				name: metadataTemplateId,
				repository: this
			}));
		},
		
		/**
		 * Retrieves metadata templates asynchronously (Box only).
		 * 
		 * @param callback
		 *            A function called with an array of {@link ecm.model.MetadataTemplate} objects
		 * @returns A {@link ecm.model.Request} object
		 * @since 3.0
		 */
		retrieveMetadataTemplates: function(callback) {
			this.logEntry("retrieveMetadataTemplates");
			var templates = this._metadataTemplateCache && this._metadataTemplateCache.all;
			var request = null;
			if (this._isBox() && !templates) {
				request = ecm.model.Request.invokeService("getMetadataTemplates", this.type, {
					repositoryId: this.id
				}, lang.hitch(this, function(response) {
					this._retrieveMetadataTemplatesCompleted(response, callback);
				}));
			} else if (callback) {
				callback(templates);
			}
			
			this.logExit("retrieveMetadataTemplates");
			return request;
		},
		
		_retrieveMetadataTemplatesCompleted: function(response, callback) {
			this.logEntry("_retrieveMetadataTemplatesCompleted");
			var cache = this._metadataTemplateCache || (this._metadataTemplateCache = {});
			cache.all = array.map(response.items, function(item) {
				return this._cacheMetadataTemplateById(new MetadataTemplate({
					id: item.id,
					name: item.name,
					repository: this
				}));
			}, this);
			if (callback)
				callback(cache.all);
			this.logExit("_retrieveMetadataTemplatesCompleted");
		},
		
		_cacheMetadataTemplateById: function(metadataTemplate) {
			if (metadataTemplate) {
				var cache = this._metadataTemplateCache || (this._metadataTemplateCache = {});
				if (cache.byId) {
					// If it's already cached, update the cached instance
					var cachedMetadataTemplate = cache.byId[metadataTemplate.id];
					if (cachedMetadataTemplate) {
						for (var prop in metadataTemplate) {
							if (metadataTemplate.hasOwnProperty(prop))
								cachedMetadataTemplate[prop] = metadataTemplate[prop]
						}
						metadataTemplate = cachedMetadataTemplate;
					}
				} else {
					cache.byId = {};
				}
				
				cache.byId[metadataTemplate.id] = metadataTemplate;
			}
			
			return metadataTemplate;
		}
	});

});

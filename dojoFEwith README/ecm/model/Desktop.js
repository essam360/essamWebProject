/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/config",
	"dojo/_base/json",
	"dojo/_base/kernel",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/xhr",
	"dojo/_base/connect",
	"dojo/aspect",
	"dojo/dom", 
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/date/stamp",
	"dojo/io-query",
	"dojo/string",
	"dojo/cookie",
	"ecm/model/_ModelObject",
	"ecm/model/_SharedRequestsMixin",
	"ecm/model/Request",
	"ecm/model/Feature",
	"ecm/model/Repository",
	"ecm/model/Action",
	"ecm/model/Viewer",
	"ecm/model/ViewerMapping",
	"ecm/model/_ModelStore",
	"ecm/model/ValueFormatter",
	"ecm/model/Container",
	"ecm/model/ConfiguredLabels",
	"ecm/model/Item",
	"ecm/model/Favorite",
	"ecm/model/SyncItem",
	"ecm/model/Message",
	"ecm/model/TaskManager",
	"ecm/model/SyncServer",
	"ecm/model/admin/InterfaceTextLocaleConfig",
	"ecm/model/admin/InterfaceTextConfig",
	"ecm/model/admin/IconStatusConfig",
	"ecm/model/admin/IconConfig",
	"ecm/model/admin/FileTypeConfig",
	"ecm/model/admin/UserActionMacroConfig",
	"ecm/model/SessionTimer",
	"ecm/widget/dialog/BaseDialog",
	"dijit/registry"
], function (declare,
	array,
	config,
	dojojson,
	kernel,
	lang,
	has,
	xhr,
	connect,
	aspect,
	dom,
	domClass,
	domStyle,
	domConstruct,
	dateStamp,
	ioQuery,
	string,
	cookie,
	_ModelObject,
	_SharedRequestsMixin,
	Request,
	Feature,
	Repository,
	Action,
	Viewer,
	ViewerMapping,
	_ModelStore,
	ValueFormatter,
	Container,
	ConfiguredLabels,
	Item,
	Favorite,
	SyncItem,
	Message,
	TaskManager,
	SyncServer,
	InterfaceTextLocaleConfig,
	InterfaceTextConfig,
	IconStatusConfig,
	IconConfig,
	FileTypeConfig,
	UserActionMacroConfig,
	timer,
	baseDialog,
	registry
) {

	/**
	 * Constructs the desktop. Note that a desktop has already been constructed and resides in the global variable
	 * ecm.model.desktop, so it is not normally necessary to construct the desktop object. However, the desktop needs to
	 * be loaded. To load the desktop object, invoke {@link ecm.model.desktop.loadDesktop}. Many of the fields will be
	 * null until the desktop has been loaded.
	 * 
	 * @param properties
	 *            The properties of the desktop. Can be any of the public fields as defined below and on
	 *            ecm.model._ModelObject.
	 * @name ecm.model.Desktop
	 * @class Represents the current desktop. This class provides information on about the servers and layout that are
	 *        configured for the desktop. The class also provides a list of the messages that have been displayed to the
	 *        user.
	 *        <p>
	 *        The Desktop class provides access to the single desktop object that is available for a page. Even though a
	 *        Desktop object is created initially, the desktop configuration is not loaded until an explicit call is
	 *        made to the <code>loadDesktop</code> method.
	 * @augments ecm.model._ModelObject
	 */
	var Desktop = declare("ecm.model.Desktop", [
		_ModelObject,
		_SharedRequestsMixin
	], {
		/** @lends ecm.model.Desktop.prototype */

		/**
		 * A boolean value indicating this desktop is logged in.
		 * 
		 * @since 2.0.2
		 */
		connected: false,

		/**
		 * The user Id for the user logged into the desktop. (Valid when connected.)
		 * 
		 * @since 2.0.2
		 */
		userId: null,

		/**
		 * The full, display user name for the user logged into the desktop. (Valid when connected.)
		 * 
		 * @since 2.0.2
		 */
		userDisplayName: null,

		/**
		 * The login name used to login to the desktop. (Valid when connected.)
		 * 
		 * @since 2.0.3.8
		 */
		userLoginName: null,

		/**
		 * An int value holding the IBM Content Navigator version number. This version number will be incremented on
		 * every major release and can be used by plugin writers to detect and target new features in each release.
		 * 
		 * @since 2.0.3
		 */
		navigatorVersionNumber: 4,

		/**
		 * A string value holding the IBM Content Navigator release information.
		 */
		navigatorRelease: null,

		/**
		 * A string value holding the IBM Content Navigator build number.
		 */
		navigatorBuild: null,

		/**
		 * The URL to use for access to the IBM Content Navigator services. By default, the URL is set relative to the
		 * Dojo location. This assumes the Dojo being used is IBM Content Navigator's (typically located in
		 * /navigator/dojo). For custom application situations where the IBM Content Navigator's dojo is not used, this
		 * can be set to the address of IBM Content Navigator.
		 */
		servicesUrl: null,

		/**
		 * A boolean value indicating whether browser "cookies" are disabled.
		 */
		disableCookies: false,

		/**
		 * A boolean value indicating whether browser autocomplete feature should be disabled.
		 */
		disableAutocomplete: false,

		/**
		 * A boolean value setting for cultural collation. If true, string sorting should be done on the server.
		 */
		culturalCollation: false,

		/**
		 * A string value setting that defines the UI style ("default" or "classic") for a desktop that doesn't use a custom theme;
		 * custom themes use the classic base-style.
		 */
		baseStyle: "default",

		/**
		 * A string value indicating the theme that is used for the desktop.
		 */
		theme: null,

		/**
		 * Authentication mechanism used to authenticate the user when they log in to the desktop. Supported mechanisms
		 * include:
		 * <ul>
		 * <li>1 - Authentication is handled via the web application container (e.g. IBM WebSphere Application Server).</li>
		 * <li>2 - Authentication is handled by an ECM repository (e.g. IBM FileNet Content Manager).</li>
		 * </ul>
		 */
		authenticationType: 1,

		/**
		 * An array of {@link ecm.model.Repository} objects for this desktop.
		 */
		repositories: null,

		/**
		 * Default repository id that is defined for this desktop. This will only be defined if the desktop is defined
		 * to use repository authentication.
		 * 
		 * @since 2.0.2
		 */
		defaultRepositoryId: null,

		/**
		 * A {@link ecm.model.Container} object for the desktop container object.
		 */
		container: null,

		/**
		 * A string value holding the help URL. This help url is specified in desktop. This has the original / wcdocs
		 * url syntax.
		 */
		helpUrl: null,

		/**
		 * A string value holding the IBM help URL from Settings. This URL is for IBM KCCI url syntax.
		 * 
		 * @since 2.0.3
		 */
		helpSettingsUrl: null,

		/**
		 * A string value holding the help URL context.
		 */
		helpContext: null,

		/**
		 * A string value holding the help taxonomy. This is used to construct the KCCI help url.
		 * 
		 * @since 2.0.3
		 */
		helpTaxonomy: null,

		/**
		 * private
		 */
		_defaultHelpContext: "/com.ibm.usingeuc.doc/",

		/**
		 * A string value holding the help welcome file. This is used to construct the KCCI help url.
		 * 
		 * @since 2.0.3
		 */
		helpWelcomeFile: null,

		/**
		 * A string value holding the value of the help taxonomy code of the currently displayed feature.
		 * 
		 * @since 3.0
		 */
		featureHelpTaxonomy: null,

		/**
		 * A string value holding the value of the help context of the currently displayed feature.
		 * 
		 * @since 3.0
		 */
		featureHelpContext: null,

		/**
		 * A string value holding the value of the help welcome page of the currently displayed feature.
		 * 
		 * @since 3.0
		 */
		featureHelpWelcomePage: null,

		/**
		 * A base URL string to use for searching for messages.
		 */
		messageSearchUrl: "http://www.ibm.com/search/csass/search?q=",

		/**
		 * A string holding the application name.
		 */
		applicationName: null,

		/**
		 * A URL string to the logo displayed on the login panel.
		 */
		loginLogoUrl: null,

		/**
		 * A URL string to the logo displayed in the banner area.
		 */
		bannerLogoUrl: null,

		/**
		 * A URL string to a page providing additional login information.
		 */
		loginInformationUrl: null,

		/**
		 * A URL string to a page providing rules for password specification.
		 */
		passwordRulesUrl: null,

		/**
		 * A string value holding the banner's background color.
		 */
		bannerBackgroundColor: null,

		/**
		 * A string value holding the color to use for the application name in the banner.
		 */
		bannerApplicationNameColor: null,

		/**
		 * A string value holding the color to use for the menu in the banner.
		 */
		bannerMenuColor: null,

		/**
		 * An array of {@link ecm.model.Action} objects holding the desktop actions.
		 */
		actionLists: null,

		/**
		 * @since 2.0.2 A two-level map containing all of the open actions available for this Desktop.
		 */
		openActions: null,

		/**
		 * An array of {@link ecm.model.Viewer} objects defined for this desktop.
		 */
		viewers: null,

		/**
		 * An array of {@link ecm.model.ViewerMapping} objects defined for this desktop.
		 */
		viewerMappings: null,

		/**
		 * An array of {@link ecm.model.Viewer} objects held in the desktop cache.
		 */
		viewersCache: null,

		/**
		 * An array of {@link ecm.model.Message} objects retrieved for this desktop.
		 */
		messages: null,

		/**
		 * A {@link ecm.widget.layout.CommonActionsHandler} object to handle desktop actions.
		 */
		actionsHandler: null,

		/**
		 * The array of allowed prefixes for a document's external link.
		 * 
		 * @since 3.0.1
		 */
		allowedExternalLinkPrefixes: ["file:", "ftp:", "ftpes:", "ftps:", "http:", "https:", "mailto:", "scp:", "sftp:", "x-ftps:"],

		/**
		 * @private
		 */
		_undoQueue: null,

		/**
		 * @private
		 */
		_redoQueue: null,

		/**
		 * @private
		 */
		_selectedItems: null,

		/**
		 * A string value holding a repository identifier.
		 */
		repositoryId: null,

		/**
		 * A string value holding a template name.
		 */
		templateName: null,

		/**
		 * A string value holding a document identifier.
		 */
		documentId: null,

		/**
		 * A string value holding email link. It is set by the layouts to record the parameters passed in on the
		 * invocation for launching a view on a particular document. These parameters are normally those pasted into
		 * email using the email as link action.
		 */
		emailLink: null,

		/**
		 * A string value holding the desktop layout class.
		 */
		layout: "ecm.widget.layout.NavigatorMainLayout",

		/**
		 * A single instance of the layout dijit to use for the desktop. See {@link ecm.widget.layout.BaseLayout} for
		 * more information on layout dijits.
		 */
		layoutDijit: null,

		/**
		 * A string value holding the desktop bookmark layout class.
		 * 
		 * @since 2.0.3
		 */
		bookmarkLayout: "ecm.widget.layout.BookmarkLayout",

		/**
		 * A single instance of the bookmark layout widget to use for the desktop. See
		 * {@link ecm.widget.layout.BookmarkLayout} for more information on a bookmark layout.
		 * 
		 * @since 2.0.3
		 */
		bookmarkLayoutWidget: null,

		/**
		 * Configured encryption key that is set in the settings configuration.
		 * 
		 * @since 2.0.3
		 */
		encryptionKey: null,

		/**
		 * An instance of {@link ecm.model.Message} for a message that will be displayed on the logout dialog as a
		 * warning.
		 */
		dirtyMessage: null,

		/**
		 * A boolean value indicating if thumbnail generation should be enabled for this desktop and false if it should
		 * not.
		 */
		enableThumbnails: true,

		/**
		 * A boolean value indicating if filmstrip view should be enabled for this desktop and false if it should not.
		 */
		showViewFilmstrip: true,

		/**
		 * A boolean value indicating if the global toolbar should be shown in the layout or not.
		 */
		showGlobalToolbar: false,

		/**
		 * A boolean value indicating if the users can create an ad hoc search.
		 */
		preventCreateNewSearch: false,

		/**
		 * A boolean value indicating if the users can create a cross-repository search.
		 */
		preventCreateNewUnifiedSearch: false,

		/**
		 * A boolean value indicating if the entry template not found warning should be hidden when item properties are
		 * edited.
		 * 
		 * @since 2.0.3.5
		 */
		hideEntryTemplateNotFoundWarning: false,

		/**
		 * A boolean value indicating if security should be displayed for documents and folders.
		 */
		showSecurity: false,

		/**
		 * A boolean value indicating if security inheritance UI should be displayed for folders.
		 */
		showSecurityInheritanceUI: false,

		/**
		 * A boolean value to show the adding of role security.
		 */
		showRoleSecurity: false,

		/**
		 * A boolean value to show just the primary document in the viewer.
		 */
		showPrimaryDocumentOnly: false,

		/**
		 * A boolean value indicating if new documents must be filed in a folder.
		 */
		fileIntoFolder: false,

		/**
		 * A {@link ecm.model.ConfiguredLabels} object.
		 */
		configuredLabels: null,

		/**
		 * An object containing the repository id's for the default repositories defined for the various features in the
		 * layout. For the NavigatorMainLayout there are three fields in the object whose values define the three
		 * default repositories for the layout:
		 * <ul>
		 * <li>work - the default repository for workflow</li>
		 * <li>teamspaces - the default repository for teamspaces</li>
		 * <li>others - the default repository for browse, search and other features.</li>
		 * </ul>
		 */
		defaultLayoutRepositories: null,

		/**
		 * An array of {@link ecm.model.Feature} objects set for the desktop.
		 */
		features: null,

		/**
		 * A {@link ecm.model.Feature} object for the first feature to be displayed in the layout.
		 */
		defaultFeature: null,

		/**
		 * A {@link ecm.model.Feature} object for the admin features.
		 */
		adminFeature: null,

		/**
		 * @private
		 */
		_ssoTokenPresent: false,

		/**
		 * A boolean value indicating whether this desktop has been loaded or not.
		 */
		desktopLoaded: false,

		/**
		 * A array of {@link ecm.model.Favorite} objects for this desktop.
		 */
		favorites: null,

		/**
		 * An array of {@link ecm.model.admin.FileTypeConfig} objects that hold the file type information of this
		 * desktop.
		 */
		fileTypes: null,

		/**
		 * An array of {@link ecm.model.admin.UserActionMacroConfig} objects holding the macros for this desktop.
		 */
		userActionMacros: null,

		/**
		 * An object holding the application server operating system information.
		 */
		appServerOs: null,

		/**
		 * An int value holding the maximum number of documents that can be added with the multi-select add document
		 * action.
		 */
		maxNumberDocToAdd: null,

		/**
		 * An int value holding the maximum number of items that can be modified at one time.
		 */
		maxNumberDocToModify: null,

		/**
		 * An instance of {@link ecm.model.ValueFormatter} used to format values for display.
		 */
		valueFormatter: null,

		/**
		 * Mobile settings of allowing Mobile application user to access this desktop.
		 */
		mobileAppAccess: null,

		/**
		 * Mobile settings to allow Mobile application to add photos from the camera and photo library.
		 */
		addPhotoFromMobile: null,

		/**
		 * Mobile settings to allow Mobile application to add documents and create folders to the repository.
		 */
		addDocFoldersToRepo: null,

		/**
		 * Mobile settings to allow Mobile application to open documents in other applications.
		 */
		openDocFromOtherApp: null,

		/**
		 * An object holding the mobile features.
		 */
		mobileFeatures: null,

		/**
		 * The timeout time to use for all requests to the midtier, in milliseconds. This is undefined by default,
		 * meaning the default timeout of the browser will be used by default.
		 */
		requestTimeout: undefined,

		/**
		 * The timeout handler to use for all requests to the midtier. This is undefined by default.
		 */
		onRequestTimeout: undefined,

		/**
		 * An instance of {@link ecm.model.TaskManager} used perform task manager related services.
		 * 
		 * @since 2.0.2
		 */
		taskManager: null,

		/**
		 * A boolean indicating if share is enabled.
		 * 
		 * @since 2.0.3.5
		 */
		shareEnabled: false,

		/**
		 * A boolean indicating if session expire warning is enabled.
		 * 
		 * @since 3.0.1
		 */
		sessionExpireWarningEnabled: true,
		/**
		 * A value indicating session expire warning time. Default value is 2. Minimum value is 2, maximum value is 5.
		 * 
		 * @since 3.0.1
		 */
		sessionExpireWarningTime: 2,

		/**
		 * The share repository id.
		 * 
		 * @since 2.0.3.5
		 */
		shareRepositoryId: false,

		/**
		 * The share repository OAuth id
		 * 
		 * @since 3.0
		 */
		shareRepositoryOAuthId: false,

		/**
		 * Boolean indicating if the my email can be modified by the user on the share dialog.
		 * 
		 * @since 2.0.3.5
		 */
		shareMyEmailModifiable: false,

		/**
		 * A boolean value indicating if the email service is enabled. If disabled, e-mails are sent using the Email Applet.
		 * 
		 * @since 3.0
		 */
		emailServiceEnabled: false,

		/**
		 * A boolean value indicating if the From email address can be modified by the user on the email dialog.
		 * 
		 * @since 3.0
		 */
		fromEmailModifiable: false,

		/**
		 * A boolean value indicating if the streamline service is enabled.
		 * 
		 * @since 2.0.3.8
		 */
		streamlineEnabled: false,

		/**
		 * A boolean value indicating if the mobile QR code is enabled.
		 * 
		 * @since 3.0.1
		 */
		mobileQREnabled: false,

		/**
		 * A string value indicating if using entry template to add document for some special scenario is enabled.
		 * <ul><li>New permanently redacted document</li><li>New merge and split document</li><li>New Microsoft Office document</li><li>New edit service document</li></ul>
		 * 
		 * @since 3.0.1
		 */
		documentAddMode: "standard",

		/**
		 * A boolean value indicating if the edit client Windows installer available on icn.
		 * 
		 * @since 3.0.1
		 */
		editWinClientInstallerAvailable: false,

		/**
		 * A boolean value indicating if the edit client Mac installer available on icn.
		 * 
		 * @since 3.0.3
		 */
		editMacClientInstallerAvailable: false,

		/**
		 * An instance of {@link ecm.model.SyncServer} used perform desktop, web and mobile sync.
		 * 
		 * @since 2.0.3
		 */
		syncServer: null,

		/**
		 * A boolean value that controls whether the status bar should be enabled.
		 * 
		 * @since 2.0.3
		 */
		showStatusbar: null,

		/**
		 * Maximum size (in MB) of content sent to the server for conversion routines.
		 * 
		 * @since 2.0.3
		 */
		maxConversionSize: null,

		/**
		 * A boolean value indicating if a site login page should be used instead of the login dialog when desktop
		 * authentication is required.
		 * 
		 * @since 2.0.3.3
		 */
		useSiteLoginPage: false,

		/**
		 * A list of Box repositories that are associated with the logged in Desktop user.
		 * 
		 * @since 2.0.3.5
		 */
		linkedBoxRepositories: null,

		/**
		 * Flag indicating whether or not this desktop contains Box repositories.
		 * 
		 * @since 2.0.3.5
		 */
		hasBoxRepositories: false,

		/**
		 * An object that contains settings assigned by custom plug-ins. The settings object for a plug-in should be
		 * assigned to the property named using the plug-in Id. <br>
		 * Example JSON: "pluginSettings": { "ExamplePlugin": { "ExampleSetting1": "Example value", "ExampleSetting2": 5 } }
		 * 
		 * @since 2.0.3.5
		 */
		pluginSettings: null,

		/**
		 * @private
		 * @since 2.0.3.7
		 */
		_viewerClassesLoaded: false,

		/**
		 * A boolean value indicating if the office online service is enabled.
		 * 
		 * @since 3.0
		 */
		officeOnlineEnabled: false,

		/**
		 * A URL string to the Office online server
		 * 
		 * @since 3.0
		 */
		officeOnlineServiceURL: null,

		/**
		 * A boolean indicating if merge and split enabled.
		 * 
		 * @since 3.0.1
		 */
		mergeSplitEnabled: true,

		/**
		 * A boolean indicating if users should be prompted to provide property values when they check in merge and 
		 * split changes to a document.
		 * 
		 * @since 3.0.1
		 */
		mergeSplitShowCheckIn: false,

		/**
		 * A boolean value indicating if printing using the print service is enabled.
		 * 
		 * @since 3.0.2
		 */
		printServiceEnabled: false,

		/**
		 * An int value holding the maximum number of documents that can be printed using the print
		 * action.
		 */
		maxNumberDocToPrint: null,


		/**
		 * @private Constructor invoked internally.
		 */
		constructor: function () {
			if (!this.valueFormatter) {
				this.valueFormatter = new ValueFormatter();
			}
			if (!this.repositories) {
				this.repositories = [];
			}
			if (!this.actionLists) {
				this.actionLists = [];
			}
			if (!this.viewers) {
				this.viewers = [];
			}
			if (!this.viewerMappings) {
				this.viewerMappings = [];
			}
			if (!this.viewersCache) {
				this.viewersCache = {};
			}
			if (!this.messages) {
				this.messages = [];
			}
			if (!this._undoQueue) {
				this._undoQueue = [];
			}
			if (!this._redoQueue) {
				this._redoQueue = [];
			}
			if (!this._selectedItems) {
				this._selectedItems = [];
			}
			if (!this.fileTypes) {
				this.fileTypes = [];
			}
			if (!this.userActionMacros) {
				this.userActionMacros = [];
			}
			if (!this.appServerOs) {
				this.appServerOs = {};
			}
			if (!this.mobileFeatures) {
				this.mobileFeatures = [];
			}

			if (!this.taskManager) {
				this.taskManager = new TaskManager();
			}

			if (!this.syncServer) {
				this.syncServer = new SyncServer();
			}

			if (kernel.global.location && kernel.global.location.href.substring(0, 5) == "file:") {
				this.servicesUrl = null;
				this._cServicesUrl = null;
			} else {
				var contextRoot = config.baseUrl;
				contextRoot = contextRoot.replace(/\/$/, ""); // remove trailing /
				contextRoot = contextRoot.replace(/\/.jgz/, ""); // remove trailing /.jgz in non-debug mode
				var end = contextRoot.lastIndexOf("/");
				contextRoot = contextRoot.substring(0, end);
				if (contextRoot == "") {
					this.servicesUrl = ".";
					contextRoot = window.location.pathname;
					end = contextRoot.lastIndexOf("/");
					this._cServicesUrl = contextRoot.substring(0, end);
				} else {
					this.servicesUrl = contextRoot;
					this._cServicesUrl = contextRoot;
				}
			}
			if (!this.pluginSettings) {
				this.pluginSettings = {};
			}
		},

		/**
		 * This is added to prevent pop-up windows from having to reload another copy of the desktop singleton when they
		 * initially start up. Instead, they can just clone from the window parent's singleton, if present.
		 * 
		 * @param desktop
		 *            A {@link ecm.model.Desktop} object to clone.
		 */
		copyDesktop: function (desktop) {
			this.logEntry("copyDesktop");

			this.userId = desktop.userId;
			this.userDisplayName = desktop.userDisplayName;
			this.userLoginName = desktop.userLoginName;

			this.authenticationType = desktop.authenticationType;
			this.repositories = desktop.repositories;
			this.defaultRepositoryId = desktop.defaultRepositoryId;

			this.disableCookies = desktop.disableCookies;
			this.disableAutocomplete = desktop.disableAutocomplete;
			this.culturalCollation = desktop.culturalCollation;
			this.baseStyle = desktop.baseStyle;
			this.theme = desktop.theme;

			this.pluginSettings = desktop.pluginSettings || {};

			this.helpUrl = desktop.helpUrl;
			this.helpSettingsUrl = desktop.helpSettingsUrl;
			this.helpTaxonomy = desktop.helpTaxonomy;
			this.helpContext = desktop.helpContext;
			this.helpWelcomeFile = desktop.helpWelcomeFile;

			this.messageSearchUrl = desktop.messageSearchUrl;
			this.applicationName = desktop.applicationName;
			this.loginLogoUrl = desktop.loginLogoUrl;
			this.bannerLogoUrl = desktop.bannerLogoUrl;
			this.loginInformationUrl = desktop.loginInformationUrl;
			this.passwordRulesUrl = desktop.passwordRulesUrl;
			this.bannerBackgroundColor = desktop.bannerBackgroundColor;
			this.bannerApplicationNameColor = desktop.bannerApplicationNameColor;
			this.bannerMenuColor = desktop.bannerMenuColor;
			this._role = desktop._role;
			this.viewers = desktop.viewers;
			this.viewerMappings = desktop.viewerMappings;
			this.layout = desktop.layout;
			this.layoutDijit = desktop.layoutDijit;
			this.bookmarkLayout = desktop.bookmarkLayout;
			this.bookmarkLayoutWidget = desktop.bookmarkLayoutWidget;
			this.enableThumbnails = desktop.enableThumbnails;
			this.showViewFilmstrip = desktop.showViewFilmstrip;
			this.showGlobalToolbar = desktop.showGlobalToolbar;
			this.showStatusbar = desktop.showStatusbar;
			this.preventCreateNewSearch = desktop.preventCreateNewSearch;
			this.preventCreateNewUnifiedSearch = desktop.preventCreateNewUnifiedSearch;
			this.hideEntryTemplateNotFoundWarning = desktop.hideEntryTemplateNotFoundWarning;

			this.showSecurity = desktop.showSecurity;
			this.showSecurityInheritanceUI = desktop.showSecurityInheritanceUI;
			this.showRoleSecurity = desktop.showRoleSecurity;
			this.showPrimaryDocumentOnly = desktop.showPrimaryDocumentOnly;

			this.fileIntoFolder = desktop.fileIntoFolder;
			this.features = desktop.features;
			this.defaultFeature = desktop.defaultFeature;
			this.defaultLayoutRepositories = desktop.defaultLayoutRepositories;

			this.documentId = desktop.documentId;
			this.emailLink = desktop.emailLink;
			this.messages = desktop.messages;
			this._redoQueue = desktop._redoQueue;
			this.repositoryId = desktop.repositoryId;
			this._selectedItems = desktop._selectedItems;
			this.servicesUrl = desktop.servicesUrl;
			this.templateName = desktop.templateName;
			this._undoQueue = desktop._undoQueue;

			this.desktopLoaded = desktop.desktopLoaded;

			this._initialRepository = desktop._initialRepository;
			this._authenticatingRepositoryId = desktop._authenticatingRepositoryId;
			this.container = desktop.container;

			this._plugins = desktop._plugins;

			//this._applicationConfig = desktop._applicationConfig;
			this.adminFeature = desktop.adminFeature;
			this._ssoTokenPresent = desktop._ssoTokenPresent;
			this.useSiteLoginPage = desktop.useSiteLoginPage;
			this.favorites = desktop.favorites;
			this.fileTypes = desktop.fileTypes;
			this.userActionMacros = desktop.userActionMacros;
			this.appServerOs = desktop.appServerOs;
			this.maxNumberDocToAdd = desktop.maxNumberDocToAdd;
			this.maxNumberDocToModify = desktop.maxNumberDocToModify;
			this.maxConversionSize = desktop.maxConversionSize;
			this.maxNumberDocToPrint = desktop.maxNumberDocToPrint;

			this.timeZonePrefs = desktop.timeZonePrefs;
			this.enableHideTimePortion = desktop.enableHideTimePortion;

			this.navigatorRelease = desktop.navigatorRelease;
			this.navigatorBuild = desktop.navigatorBuild;

			this.shareEnabled = desktop.shareEnabled;
			this.shareRepositoryId = desktop.shareRepositoryId;
			this.shareRepositoryOAuthId = desktop.shareRepositoryOAuthId;
			this.shareMyEmailModifiable = desktop.shareMyEmailModifiable;
			this.streamlineEnabled = desktop.streamlineEnabled;
			this.mobileQREnabled = desktop.mobileQREnabled;
			this.documentAddMode = desktop.documentAddMode;
			this.editWinClientInstallerAvailable = desktop.editWinClientInstallerAvailable;
			this.editMacClientInstallerAvailable = desktop.editMacClientInstallerAvailable;
			this.officeOnlineEnabled = desktop.officeOnlineEnabled;
			this.officeOnlineServiceURL = desktop.officeOnlineServiceURL;
			this.printServiceEnabled = desktop.printServiceEnabled;
			this.mergeSplitEnabled = desktop.mergeSplitEnabled;
			this.mergeSplitShowCheckIn = desktop.mergeSplitShowCheckIn;

			this.emailServiceEnabled = desktop.emailServiceEnabled;
			this.fromEmailModifiable = desktop.fromEmailModifiable;

			// mobile settings
			this.mobileAppAccess = desktop.mobileAppAccess;
			this.addPhotoFromMobile = desktop.addPhotoFromMobile;
			this.addDocFoldersToRepo = desktop.addDocFoldersToRepo;
			this.openDocFromOtherApp = desktop.openDocFromOtherApp;

			//file tracking settings
			this.enableFileTracking = desktop.enableFileTracking;
			this.fileTrackingLocation = desktop.fileTrackingLocation;
			this.qualifiedPath = desktop.qualifiedPath;
			this.envVariable = desktop.envVariable;
			this.deleteLocalCopy = desktop.deleteLocalCopy;
			this.deleteLocalCopyRuntimeState = desktop.deleteLocalCopyRuntimeState;
			this.openFile = desktop.openFile;
			this.overWriteFile = desktop.overWriteFile;
			this.overWriteFileRuntimeState = desktop.overWriteFileRuntimeState;
			this.appendPathComponent = desktop.appendPathComponent;

			//taskManager
			this.taskManager = desktop.taskManager;

			//sync server
			this.syncServer = desktop.syncServer;

			this.mobileFeatures = [];
			array.forEach(desktop.mobileFeatures, function (desktopMobileFeature) {
				var mobileFeature = {};
				mobileFeature.id = desktopMobileFeature.id;
				mobileFeature.name = desktopMobileFeature.name;
				mobileFeature.display = desktopMobileFeature.display;
				mobileFeature.url = desktopMobileFeature.url;
				mobileFeature.iconFile = desktopMobileFeature.iconFile;
				mobileFeature.label = desktopMobileFeature.label;
				this.mobileFeatures.push(mobileFeature);
			}, this);

			this.logExit("copyDesktop");
		},

		/**
		 * Connects to the server and authenticates with the provided password.
		 * 
		 * @param password
		 *            The password to use for logon.
		 * @param callback
		 *            A function that is invoked on successfully logging on to the server.
		 * @param reqParams
		 *            Custom request parameters to send to the mid-tier logon action (optional).
		 * @param reqHeaders
		 *            Custom header parameters to send to the mid-tier logon action (optional).
		 * @since 2.0.2
		 */
		logon: function (password, callback, reqParams, reqHeaders) {
			this.logEntry("logon");

			if (!reqParams)
				reqParams = {};
			lang.mixin(reqParams, {
				desktop: this.id,
				userid: this.userId,
				password: password,
				contextPath: this._cServicesUrl
			});

			var enableSecureService = Request.enableSecureService;
			try {
				Request.enableSecureService = true;
				var request = Request.invokeServiceAPI("logon", null, {
					requestParams: reqParams,
					requestHeaders: reqHeaders,
					requestCompleteCallback: lang.hitch(this, function (response) {
						this._logonCompleted(response, callback, password);
					})
				});
			} finally {
				Request.enableSecureService = enableSecureService;
			}

			this.logExit("logon");
			return request;
		},

		/**
		 * Handles the logon response from the server.
		 * 
		 * @param response
		 *            Response JSON from the server.
		 * @param callback
		 *            Optional callback method to invoke.
		 * @private
		 * @since 2.0.2
		 */
		_logonCompleted: function (response, callback, password) {
			this.logEntry("_containerLogonCompleted");
			this.connected = true;
			// Remember the login name.
			this.userLoginName = response.userLoginName || this.userId || response.userid;
			// Update the user Id.
			this.userId = response.userid;
			this.userDisplayName = response.user_displayname;

			//taskManager
			this.taskManager.taskSecurityRoles = response.taskSecurityRoles;

			this._refreshLinkedBoxRepositories(response, false);

			if (response.adminLayout) {
				if (!response.adminLayout.featureTooltip)
					response.adminLayout.featureTooltip = ecm.messages.launchbar_admin;
				this.createAdminFeature(response.adminLayout);
			}

			// This approach of mixing in the desktopAttributes property is deprecated as of ICN 2.0.3.5.
			// Plug-in developers should store plug-in settings under the plug-in Id string
			// in the object assigned to the pluginSettings property.

			// Copy in desktop attributes from the login response if available.
			// This allows plugins to add attributes to a desktop after a login request
			if (response.desktopAttributes) {
				// This should be removed at some point, but will be left for now in case there are
				// plug-ins leveraging it.
				lang.mixin(this, response.desktopAttributes);
			}

			// This property replaces the mixin of the plug-in assigned desktopAttributes mixin above (legacy approach).
			lang.mixin(this.pluginSettings, response.pluginSettings || {});

			this.onChange(this);

			// If the desktop logon response includes a container login, apply it. 
			if (response.containers) {
				this.container = null;
				var containerJSON = response.containers;
				var container = new Container(containerJSON);
				container.userId = containerJSON.userid;
				container.userDisplayName = containerJSON.user_displayname;
				container.userLoginName = containerJSON.userLoginName || container.userId;
				container.desktop = containerJSON.desktop;
				this.container = container;
			}

			if (this.repositories.length > 0) {
				var defaultRepository;
				for (var i in response.servers) {
					var repositoryJSON = response.servers[i];
					if (repositoryJSON.connected) {
						var repository = this.getRepository(repositoryJSON.repositoryId);
						if (repository != null && repository != this) {
							repository._loadRepository(repositoryJSON);
							if (this.defaultRepositoryId == repository.id) {
								repository.userDisplayName = this.userDisplayName;
								this._initialRepository = repository;
								// Postpone the onLogin notification for the desktop authenticating repository 
								// until after all of the repositories have been updated.
								defaultRepository = repository;
							}
						}
					}
				}
				if (defaultRepository && defaultRepository.connected) {
					this._fireOnLogin(defaultRepository);
				}
			}

			// Mid-tier appServer information
			this.appServerOs = {
				name: response.appServerOSName,
				arch: response.appServerOSArch,
				version: response.appServerOSVersion,
				distroName: response.appServerOSDistroName,
				distroRelease: response.appServerOSDistroRelease
			};

			this.navigatorRelease = response.navigatorRelease;
			ecm.messages.product_version = this.navigatorRelease;
			this.navigatorBuild = response.navigatorBuild;

			this.helpUrl = response.helpURL;
			this.helpSettingsUrl = response.helpSettingsURL;

			if (this.authenticationType != 2)
				this._fireOnLogin(null);

			if (response.sessioninactivelimit >= 600 && !this.isSsoTokenPresent() && this.sessionExpireWarningEnabled) {
				timer.sessionExpireWarningTime = this.sessionExpireWarningTime;
				timer.getSessionTimer(response.sessioninactivelimit).start();
			}

			this._getEditClientPort(password);
			if (this._getPostToEditServiceHandler) {
				connect.disconnect(this._getPostToEditServiceHandler);
			}
			this._getPostToEditServiceHandler = connect.connect(ecm.model.desktop, "onEditConnected", lang.hitch(this, function (password) {
				this._postLogonToEditClient("icnLogon", password);
			}));

			this.isDesktopAdminUser = response.desktop_admin_user;

			if (callback) {
				callback(this);
			}

			this.logExit("_logonCompleted");
		},

		/**
		 * Disconnects from the server.
		 * 
		 * @param reloadDesktop
		 *            Indicates whether to force reloading the desktop after logging off.
		 * @since 2.0.2
		 */
		logoff: function (reloadDesktop) {
			this.logEntry("logoff");
			if (timer._sessionTimer != null) {
				timer._sessionTimer.stop();
				delete timer._sessionTimer;

			}
			var request = Request.invokeService("logoff", null, {
				desktop: this.id
			}, lang.hitch(this, function (response) {
				this._logoffCompleted(response, reloadDesktop);
			}));

			this.logExit("logoff");
			return request;
		},

		/**
		 * Handles the response returned by the server during a logout.
		 * 
		 * @param response
		 *            JSON response from the server.
		 * @param reloadDesktop
		 *            Indicates whether to force reloading the desktop after logging off.
		 * @private
		 * @since 2.0.2
		 */
		_logoffCompleted: function (response, reloadDesktop) {
			this.logEntry("_logoffCompleted");
			this.connected = false;

			if (!reloadDesktop) {
				// If this is not the native mobile client and a site login is used, then the desktop should be reloaded.
				reloadDesktop = !Request.isNativeClient() && this.useSiteLoginPage;
			}

			if (reloadDesktop) {
				// Hide the desktop layout before handling the logout and reloading, it's confusing to display the login pane.
				var layout = this.getLayout();
				if (layout && layout.domNode) {
					domStyle.set(layout.domNode, "display", "none");
				}

				// If this is the bookmark desktop, disconnect the bookmark layout reload handler.
				if (this.bookmarkLayoutWidget && this.bookmarkLayoutWidget.repDisconnectHandler) {
					connect.disconnect(this.bookmarkLayoutWidget.repDisconnectHandler);
					delete this.bookmarkLayoutWidget.repDisconnectHandler;
				}
			}

			if (this.repositories) {
				for (var i in this.repositories) {
					var repository = this.repositories[i];
					if (repository) {
						try {
							repository._logoffCompleted(response);
						} catch (e) {
						}
					}
				}
			}

			if (this._adminRepositories) {
				for (var i in this._adminRepositories) {
					var repository = this._adminRepositories[i];
					if (repository) {
						try {
							repository._logoffCompleted(response);
						} catch (e) {
						}
					}
				}
			}

			if (this.container) {
				this.container.connected = false;
				try {
					this.container.onDisconnected();
				} catch (e) {
				}
			}

			if (this.taskManager) {
				try {
					this.taskManager.logoff();
				} catch (e) {
				}
			}

			try {
				this.clearFavorites();
			} catch (e) {
			}

			try {
				this.clearSyncItems();
			} catch (e) {
			}

			try {
				this.onLogout();
			} catch (e) {
			}

			if (reloadDesktop) {
				this.reloadDesktop();
			}

			if (response.redirect_url) {
				window.location = response.redirect_url;
			}

			this.logExit("_logoffCompleted");
		},

		/**
		 * @private
		 */
		_ssoLogoff: function () {
			this.logEntry("_ssoLogoff");
			var request = new Request({
				requestMethod: "POST",
				requestUrl: Request.getServiceRequestUrl("logoff"),
				requestHeaders: {
					"Cache-Control": "no-cache"
				},
				requestBody: ioQuery.objectToQuery({
					desktop: this.id
				}),
				backgroundRequest: true,
				requestFailedCallback: null,
				_onFinished: lang.hitch(this, function () {
					request.onRequestCompleted(request);
					this._ssoLogoffCompleted(request.getResponseText());
				})
			});
			request.send();
			this.logExit("_ssoLogoff");
			return request;
		},

		/**
		 * @private
		 */
		_ssoLogoffCompleted: function (response) {
			this.logEntry("_ssoLogoffCompleted");
			// Check if we need to reload following logout.

			// Keep track of the cookies present before the test request.
			var prePingCookies = {};
			var cookies = document.cookie;
			if (cookies) {
				cookies = cookies.split(";");
				array.forEach(cookies, function (cookie) {
					var equals = cookie.indexOf("=");
					var cookieName = cookie.substring(0, (equals > 0) ? equals : 0).trim();
					prePingCookies[cookieName] = cookieName;
				});
			}

			// This test request must be the first request made after logout.
			// No other requests should be made until the test request response is handled.
			var request = new Request({
				requestMethod: "GET",
				requestUrl: Request.getServiceRequestUrl("Ping") + "?ProductNameOnly=true", // For a minimal Ping response.
				requestHeaders: {
					"Cache-Control": "no-cache",
					"Content-Type": "application/json" // Request a JSON response from the Ping action.
				},
				backgroundRequest: true,
				requestFailedCallback: null,
				_onFinished: lang.hitch(this, function () {
					request.onRequestCompleted(request);
					// If the response is the expected "text/plain", handle the desktop logout.
					if (request.getResponseContentType("Content-Type") == "text/plain") {
						this._logoffCompleted();
					} else {
						// The site is not allowing access to the test request after the logout.
						// Force reload from the server so that the site login is accessed.

						// If the request was redirected to a separate SSO server, xmlHttpRequest() will not follow the redirect. 
						// This may leave uncleared redirect cookies. Remove any cookies that were added by the test request
						// so that the navigator URL will be loaded below.
						cookies = document.cookie;
						if (cookies) {
							cookies = cookies.split(";");
							array.forEach(cookies, function (cookie) {
								var equals = cookie.indexOf("=");
								var cookieName = cookie.substring(0, (equals > 0) ? equals : 0).trim();
								if (!prePingCookies[cookieName]) {
									document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
									document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
								}
							});
						}
						// Reload Navigator from the server. 
						setTimeout(function () {
							window.self.location.reload(true);
						}, 100);
					}
				})
			});
			request.send();
			this.logExit("_ssoLogoffCompleted");
		},

		/**
		 * Sets the URL to use for access to the Content Navigator services. By default, the URL is
		 * <code>/navigator</code>. For situations where the IBM Content Navigator resides on a different application
		 * server from the web application, this can be set to the address of that server, typically using a proxy
		 * reference.
		 * 
		 * @param url
		 *            A string value holding the url to set.
		 */
		setServicesUrl: function (url) {
			this.logEntry("setServicesUrl", url);
			this.servicesUrl = url;
			this.onChange(this);
			this.logExit("setServicesUrl");
		},

		/**
		 * Returns the URL that is being used to access the IBM Content Navigator services.
		 * 
		 * @deprecated As of 2.0.2. You can obtain the services URL simply by accessing the member variable on the
		 *             Desktop object. For example, Desktop.servicesUrl.
		 */
		getServicesUrl: function () {
			return this.servicesUrl;
		},

		/**
		 * Sets the actions handler object. This object contains functions that are invoked for all of the actions
		 * defined in {@link ecm.model.Action} objects.
		 * 
		 * @param actionsHandler
		 *            An object containing the action functions. See {@link ecm.widget.layout.CommonActionsHandler}.
		 */
		setActionsHandler: function (actionsHandler) {
			this.logEntry("setActionsHandler");
			this.actionsHandler = actionsHandler;
			this.onChange(this);
			this.logExit("setActionsHandler");
		},

		/**
		 * Returns the actions handler object.
		 * 
		 * @param callback
		 *            Required to support asynchronous loading.
		 */
		getActionsHandler: function (callback) {
			var self = this;

			if (!this.actionsHandler && this._actionHandler) {
				var widgetReq = this._actionHandler.split('.').join('/');
				require([
					widgetReq
				], function (cls) {
					self.actionsHandler = new cls();
					if (callback) {
						callback(self.actionsHandler);
					}
				});
			} else {
				if (callback) {
					callback(this.actionsHandler);
				}
			}

			return this.actionsHandler;
		},

		/**
		 * @private Returns {@link ecm.model.Repository} that was logged onto initially. Global actions will use this
		 *          repository as their assumed repository.
		 */
		getInitialRepository: function () {
			return this._initialRepository;
		},

		/**
		 * @private Sets the repository that was initially logged on. This can be used in cases where no initial
		 *          repository was specified so the user selected one.
		 */
		setInitialRepository: function (repository) {
			this._initialRepository = repository;
		},

		/**
		 * Returns {@link ecm.model.Repository} that should be initially logged on. If no repository is returned, the
		 * client should prompt the user (usually through a drop-down menu) to specify the repository.
		 * 
		 * @private
		 */
		getAuthenticatingRepository: function () {
			if (this._authenticatingRepositoryId) {
				return this.getRepository(this._authenticatingRepositoryId);
			}
			return null;
		},

		/**
		 * @private
		 */
		getAuthenticatingRepositoryId: function () {
			return this._authenticatingRepositoryId;
		},

		/**
		 * @private Retrieves the repository id that was used for authentication.
		 */
		getDefaultRepositoryId: function () {
			return this.defaultRepositoryId;
		},

		/**
		 * @private Sets the repository that was initially logged on. This can be used in cases where no initial
		 *          repository was specified so the user selected one.
		 */
		setDefaultRepositoryId: function (repository) {
			this.defaultRepositoryId = repository;
		},

		/**
		 * @private Retrieves the repository that was used for authentication.
		 */
		getDefaultRepository: function () {
			if (this.defaultRepositoryId) {
				return this.getRepository(this.defaultRepositoryId);
			}
			return null;
		},

		/**
		 * @private Retrieves the default repositories set for the layout. This is usually a map of layout components
		 *          and default repositories assigned to each component.
		 */
		getDefaultLayoutRepositories: function () {
			return this.defaultLayoutRepositories;
		},

		/**
		 * Retrieves an array of all the repository types contained in this desktop.
		 * 
		 * @return An array of repository types.
		 * @since 2.0.3.3
		 */
		getRepositoryTypes: function () {
			var repositoryTypes = [];
			var repositoryTypesAdded = {};

			array.forEach(this.repositories, function (repository) {
				if (!repositoryTypesAdded[repository.type]) {
					repositoryTypes.push(repository.type);
					repositoryTypesAdded[repository.type] = repository.type;
				}
			});

			return repositoryTypes;
		},

		/**
		 * Returns a boolean true value if the container is logged in.
		 */
		isContainerLoggedIn: function () {
			if (this.container) {
				return true;
			}

			return false;
		},

		/**
		 * @private Returns the context for help pages.
		 */
		setHelpContext: function (helpContext) {
			this.helpContext = helpContext;
		},

		/**
		 * Returns the context for help pages.
		 * 
		 * @since 2.0.3
		 */
		getHelpContext: function () {
			return this.helpContext ? this.helpContext : this._defaultHelpContext;
		},

		/**
		 * Sets help information for a feature
		 * 
		 * @since 3.0
		 */
		applyFeatureHelpInfo: function (feature) {
			this.featureHelpTaxonomy = feature.helpTaxonomy;
			this.featureHelpContext = feature.helpContext;
			this.featureHelpWelcomePage = feature.helpWelcomePage;
		},

		/**
		 * Returns the base URL to use for help pages.
		 * 
		 * @since 2.0.3
		 */
		getHelpUrl: function (forPage) {
			if (!this.helpUrl && !this.helpSettingsUrl) {
				return null;

			}
			if (this.helpUrl) { // wcdocs url syntax for backward compatability
				return forPage ? this.helpUrl + "index.jsp?content=" + this.getHelpContext() : this.helpUrl;

			} else { // KCCI url syntax

				// Allow features to override the three parts of taxonomy based help:
				// 1. Taxonomy code
				// 2. Help context
				// 3. Welcome page.
				var kcHelpUrl = this.helpSettingsUrl;
				if (this.featureHelpTaxonomy) {
					kcHelpUrl += this.featureHelpTaxonomy;
				}
				else {
					kcHelpUrl += this.helpTaxonomy;
				}

				if (this.featureHelpContext) {
					kcHelpUrl += this.featureHelpContext;
				}
				else {
					kcHelpUrl += this.getHelpContext();
				}

				if (!forPage) {
					if (this.featureHelpWelcomePage) {
						kcHelpUrl += this.featureHelpWelcomePage
					}
					else {
						kcHelpUrl += this.helpWelcomeFile
					}
				}
				return kcHelpUrl;
			}
		},

		/**
		 * Returns a base URL to use for searching for messages.
		 * 
		 * @since 2.0.3
		 */
		getMessageSearchUrl: function () {
			return this.messageSearchUrl || "http://www.ibm.com/search/csass/search?q=";
		},

		/**
		 * Returns a single instance of the layout widget to use for the desktop. See
		 * {@link ecm.widget.layout.BaseLayout} for more information on layout widgets.
		 * 
		 * @param callback
		 *            Required to use getLayout with the asynchronous loader.
		 */
		getLayout: function (callback) {
			var self = this;
			if (!this.layoutDijit) {
				var widgetReq = this.layout.split('.').join('/');
				require([
					widgetReq
				], function (cls) {
					self.layoutDijit = new cls({});
					if (callback) {
						callback(self.layoutDijit);
					}
				});
			} else {
				if (callback) {
					callback(self.layoutDijit);
				}
			}
			return this.layoutDijit;
		},

		/**
		 * Returns a single instance of the bookmark layout widget to use for the desktop. See
		 * {@link ecm.widget.layout.BookmarkLayout} for more information on a bookmark layout.
		 * 
		 * @param callback
		 *            Required callback function to get an instance of the bookmark layout widget.
		 * @param args
		 *            Arguments to use when constructing the new bookmark layout widget.
		 * @since 2.0.3
		 */
		getBookmarkLayout: function (callback, args) {
			var self = this;
			if (!args)
				args = {};

			if (!this.bookmarkLayoutWidget) {
				var widgetReq = this.bookmarkLayout.split('.').join('/');
				require([
					widgetReq
				], function (cls) {
					self.bookmarkLayoutWidget = new cls(args);
					if (callback) {
						callback(self.bookmarkLayoutWidget);
					}
				});
			} else if (lang.isFunction(callback)) {
				callback(self.bookmarkLayoutWidget);
			}
		},

		/**
		 * Creates a new admin feature from JSON.
		 * 
		 * @param repositoryJSON
		 *            A JSON object holding the repository information.
		 */
		createAdminFeature: function (repositoryJSON) {
			if (this.adminFeature) {
				this.adminFeature.destroy();
				this.adminFeature = null;
			}

			this.adminFeature = new Feature(repositoryJSON);
		},

		/**
		 * Adds a new {@link ecm.model.Feature} to the desktop.
		 * 
		 * @param feature
		 *            The {@link ecm.model.Feature} to add to the desktop layout.
		 */
		addFeature: function (feature) {
			if (!feature)
				return;

			if (!this.features)
				this.features = [];

			this.features.push(feature);
			this.onChange(feature);
		},

		/**
		 * Removes a feature from the desktop.
		 * 
		 * @param feature
		 *            The {@link ecm.model.Feature} to remove from the desktop layout.
		 */
		removeFeature: function (feature) {
			if (!feature)
				return;

			if (this.features) {
				for (var index in this.features) {
					if (feature.id == this.features[index].id) {
						this.features.splice(index, 1);
						if (this.adminFeature) {
							if (feature.id == this.adminFeature.id)
								this.adminFeature = null;
						}
					}
				}
				this.onChange(feature);
			}
		},

		/**
		 * Returns a feature from the desktop.
		 * 
		 * @param featureId
		 *            The id of the feature to retrieve from the desktop layout.
		 */
		getFeatureById: function (featureId) {
			if (this.features && featureId) {
				for (var i in this.features) {
					var feat = this.features[i];
					if (feat.id == featureId) {
						return feat;
					}
				}
			}
			return null;
		},

		/**
		 * Returns a feature from the desktop.
		 * 
		 * @param feature
		 *            The {@link ecm.model.Feature} to retrieve from the desktop layout.
		 */
		getFeature: function (feature) {
			if (feature && feature.id)
				return this.getFeatureById(feature.id);
			else
				return null;
		},

		/**
		 * @private
		 */
		isSsoTokenPresent: function () {
			return this._ssoTokenPresent;
		},

		/**
		 * @private
		 */
		setSsoTokenPresent: function (token) {
			this._ssoTokenPresent = token;
		},

		/**
		 * @private Returns the available repositories as a dojo.data store, suitable for immediate use with
		 *          dijit.form.Select.setStore or dojox.Grid.
		 */
		getRepositoriesStore: function () {
			if (!this._repositoriesStore) {
				this._repositoriesStore = new _ModelStore(this, lang.hitch(this, function (callback) {
					callback(this.repositories);
				}));
			}

			return this._repositoriesStore;
		},

		/**
		 * @private
		 */
		_storeAdminRepository: function (adminRepository) {
			if (!adminRepository)
				return;
			if (!this._adminRepositories) {
				this._adminRepositories = {};
			}
			this._adminRepositories[adminRepository.id] = adminRepository;
		},

		/**
		 * Returns an instance of {@link ecm.model.Repository} for the given repository identifier.
		 */
		getRepository: function (repositoryId) {
			if (repositoryId && repositoryId.indexOf("_CIWEBADMIN") != -1 && this._adminRepositories) {
				return this._adminRepositories[repositoryId];
			} else {
				if (this.repositories) {
					for (var i in this.repositories) {
						var repository = this.repositories[i];
						if (repository.id == repositoryId) {
							return repository;
						}
					}
				}
			}

			return null;
		},

		/**
		 * Returns an instance of {@link ecm.model.Repository} for the given server name. For FileNet P8, this method
		 * will validate against the Object Store name.
		 * 
		 * @param name
		 *            A string value holding the repository's server name or for FileNet P8 object store name.
		 * @param domainId
		 *            The ID of the FileNet P8 domain where the object store resides (optional). If not specified, the
		 *            repository is not guaranteed to be correct since there may be more than one repository with the
		 *            same object store name residing in different domains.
		 */
		getRepositoryByName: function (name, domainId) {
			if (this.repositories) {
				for (var i in this.repositories) {
					var repository = this.repositories[i];
					if (repository.type == "p8" && (repository.objectStoreName == name || repository.objectStoreDisplayName == name) && (!domainId || !repository.domainId || domainId === repository.domainId)) {
						return repository;
					} else if (repository.serverName == name) {
						return repository;
					}
				}
			}

			return null;
		},

		/**
		 * Returns an instance of {@link ecm.model.Repository} for the given FileNet P8 object store name.
		 * 
		 * @param objectStoreName
		 *            A string value holding a FileNet P8 object store name.
		 * @param domainId
		 *            The ID of the FileNet P8 domain where the object store resides (optional). If not specified, the
		 *            repository is not guaranteed to be correct since there may be more than one repository with the
		 *            same object store name residing in different domains.
		 */
		getRepositoryOfObjectStore: function (objectStoreName, domainId) {
			if (this.repositories) {
				for (var i in this.repositories) {
					var repository = this.repositories[i];
					if (repository.objectStoreName == objectStoreName && (!domainId || !repository.domainId || domainId === repository.domainId)) {
						return repository;
					}
				}
			}
			return null;
		},

		/**
		 * An event function invoked when the desktop has been loaded. The get methods on the desktop will not return
		 * valid values until this event has triggered.
		 * 
		 * @param response
		 *            The response used to initiate the desktop (optional).
		 */
		onDesktopLoaded: function (response) {
			this.desktopLoaded = true;
		},

		/**
		 * Returns true if the initial repository is connected. If this is the case, clients should not show a login.
		 */
		isLoggedIn: function () {
			return this._initialRepository && this._initialRepository.connected;
		},

		/**
		 * @private Sets the desktop-wide selection of items. This is used by global actions for the items to operate
		 *          upon.
		 */
		setSelectedItems: function (items) {
			this.logEntry("setSelectedItems", items);
			this._selectedItems = items;
			this.onChange(this);
			this.logExit("setSelectedItems");
		},

		/**
		 * @private Returns an array of items for the desktop-wide selection. This is used by global actions for the
		 *          items to operate upon.
		 */
		getSelectedItems: function () {
			return this._selectedItems;
		},

		/**
		 * Adds a message to the list of messages maintained in the desktop.
		 * 
		 * @param message
		 *            An instance of {@link ecm.model.Message} for the message being added.
		 */
		addMessage: function (message) {
			this.logEntry("addMessage");
			this.logInfo("addMessage", message);
			this.messages.push(message);
			if (this.messages.length > 100) {
				this.messages.shift();
			}
			this.onMessagesChanged();
			this.onMessageAdded(message);
			this.onChange(this);
			this.logExit("addMessage");
		},

		/**
		 * Clears the messages list.
		 */
		clearMessages: function () {
			this.logEntry("clearMessages");
			this.messages = [];
			this.onMessagesChanged();
			this.onChange(this);
			this.logExit("clearMessages");
		},

		/**
		 * Returns an instance of {@link ecm.model.Viewer} for the specified viewer identifier.
		 * 
		 * @param viewerId
		 *            A string value holding the viewer identifier.
		 */
		getViewer: function (viewerId) {
			for (var i in this.viewers) {
				var viewer = this.viewers[i];
				if (viewer.id == viewerId) {
					return viewer;
				}
			}
			return null;
		},

		/**
		 * Returns the appropriate instance of {@link ecm.model.Viewer} for the viewer to use to view the provided item.
		 * 
		 * @param item
		 *            An instance of {@link ecm.model.Item} for the item to be viewed.
		 * @param explicitMatchRequired
		 *            A boolean value indicating that an explicit match is required to find the viewer
		 * @deprecated as of ICN 2.0.3, use getViewersForItem instead.
		 */
		getViewerForItem: function (item, explicitMatchRequired) {
			var returnViewer = null;

			var contentClass = null;
			if (item.getContentClass && item.getContentClass()) {
				contentClass = item.getContentClass().id;
			}

			for (var i in this.viewerMappings) {
				var viewerMapping = this.viewerMappings[i];
				var viewer = viewerMapping.useViewer(item, explicitMatchRequired, contentClass);
				if (viewer) {
					returnViewer = viewer;
					break;
				}
			}

			return returnViewer;
		},

		/**
		 * Loads the specified viewer classes using AMD require, unless they've been loaded already..
		 */
		loadViewerClasses: function (loadedCallback, viewerClasses, contextRequire) {
			var methodName = "loadViewerClasses";
			this.logEntry(methodName);

			if (!viewerClasses || viewerClasses == null) { // if viewer classes were not specified, get all configured and load.
				viewerClasses = this._getConfiguredViewerClasses();
			}

			if (!contextRequire || contextRequire == null) {
				contextRequire = require;
			}

			var requestedClasses = [];
			var requestedParms = "";
			var requestedStores = "";
			for (var idx = 0; idx < viewerClasses.length; idx++) {
				var viewerClass = viewerClasses[idx];
				if (viewerClass.indexOf("ecm.widget.viewer.") < 0 && viewerClass.indexOf("ecm.widget.virtualViewer") < 0) {
					this.logDebug(methodName, "Adding require for " + viewerClass);
					requestedClasses.push(viewerClass.split('.').join('/'));
				} else {
					this.logDebug(methodName, "Skipping require for " + viewerClass);
				}
			}

			if (!this._viewerClassesLoaded && requestedClasses.length > 0) {
				this.logDebug(methodName, "Calling require for " + requestedClasses.length + " doc viewer classes.");
				try {
					contextRequire(requestedClasses, lang.hitch(this, function () {
						this._viewerClassesLoaded = true;
						loadedCallback();
					}));
				} catch (e) {
					this._viewerClassesLoaded = true;
					console.log(e);
					// Some of the requested classes may have been loaded, call the callback with the error.
					loadedCallback(e);
				}
			} else {
				this.logDebug(methodName, "All requested doc viewer classes have already been loaded.");
				loadedCallback();
			}

			this.logExit(methodName);
		},

		_getConfiguredViewerClasses: function () {
			var viewerClasses = new Array();
			var requestedViewers = new Object();

			for (var idx = 0; idx < this.viewers.length; idx++) {
				var viewerClass = this.viewers[idx].viewerClass;
				if (viewerClass != null && !requestedViewers[viewerClass]) {
					requestedViewers[viewerClass] = true;
					viewerClasses.push(viewerClass);
				}
			}

			delete requestedViewers;
			return viewerClasses;
		},

		/**
		 * Returns an array of {@link ecm.model.Viewer} objects for the viewer to use to preview the provided item.
		 * 
		 * @param item
		 *            An instance of {@link ecm.model.Item} for the item to be viewed.
		 * @param explicitMatchRequired
		 *            A boolean value indicating that an explicit MIME type match is required to find the viewer
		 * @param callback
		 *            Required to use getViewersForItem with the asynchronous loader.
		 * @since 2.0.3
		 */
		getPreviewersForItem: function (item, explicitMatchRequired, callback, contextRequire) {
			var methodName = "getViewersForItem";
			this.logEntry(methodName);

			var viewers = null;

			if (callback && lang.isFunction(callback)) {
				this.loadViewerClasses(lang.hitch(this, function () {
					viewers = this._getViewersForItem(item, explicitMatchRequired, true);
					callback(viewers);
				}), null, contextRequire);
			} else {
				viewers = this._getViewersForItem(item, explicitMatchRequired, true);
			}

			this.logExit(methodName);
			return viewers;
		},

		/**
		 * Returns an array of {@link ecm.model.Viewer} objects for the viewer to use to view the provided item.
		 * 
		 * @param item
		 *            An instance of {@link ecm.model.Item} for the item to be viewed.
		 * @param explicitMatchRequired
		 *            A boolean value indicating that an explicit MIME type match is required to find the viewer
		 * @param callback
		 *            Required to use getViewersForItem with the asynchronous loader.
		 */
		getViewersForItem: function (item, explicitMatchRequired, callback, contextRequire) {
			var methodName = "getViewersForItem";
			this.logEntry(methodName);

			var viewers = null;

			if (callback && lang.isFunction(callback)) {
				this.loadViewerClasses(lang.hitch(this, function () {
					viewers = this._getViewersForItem(item, explicitMatchRequired, false);
					callback(viewers);
				}), null, contextRequire);
			} else {
				viewers = this._getViewersForItem(item, explicitMatchRequired, false);
			}

			this.logExit(methodName);
			return viewers;
		},

		_getViewersForItem: function (item, explicitMatchRequired, preview) {
			var methodName = "_getViewersForItem";
			this.logEntry(methodName);

			var contentClass = null;
			if (item.getContentClass && item.getContentClass()) {
				contentClass = item.getContentClass().id;
			}

			var viewers = this._getCachedViewers(item, explicitMatchRequired, preview);
			if (viewers == null) {
				viewers = new Array();
				var pushedViewers = {};

				for (var i in this.viewerMappings) {
					var viewerMapping = this.viewerMappings[i];
					var viewer = viewerMapping.useViewer(item, explicitMatchRequired, contentClass, preview);
					if (viewer && (!has("ecmMobileView") || viewer.name == "browser")) {
						if (this._canOpenItem(viewer, item)) {
							this._pushViewer(viewer, viewers, pushedViewers);
						}
					}
				}

				if (preview) {
					if (item.repository && item.repository._isBox()) {
						if (item.mimetype == "application/x-box-note")
							this._pushViewer(ecm.model.desktop.getViewer("boxNoteViewer"), viewers, pushedViewers);
						else
							this._pushViewer(ecm.model.desktop.getViewer("boxViewer"), viewers, pushedViewers);
					} else {
						this._pushViewer(ecm.model.desktop.getViewer("htmlConversion"), viewers, pushedViewers);
					}
				}

				this._setCachedViewers(item, explicitMatchRequired, viewers);
			}

			this.logExit(methodName);
			return viewers;
		},

		_pushViewer: function (viewer, viewers, pushedViewers) {
			var methodName = "_pushViewer";

			if (!pushedViewers[viewer.id]) {
				this.logDebug(methodName, "Adding viewer " + viewer.id);
				viewers.push(viewer);
				pushedViewers[viewer.id] = viewer;
			} else {
				this.logDebug(methodName, "Viewer " + viewer.id + " is already on the list.  Skipping.")
			}
		},

		getLoadedViewerClass: function (viewer) {
			var viewerClass = viewer.viewerClass;
			var cls = null;

			try {
				cls = require(viewerClass.split('.').join('/'));
			} catch (error) {
				throw new Error("Viewer classes have not been loaded. " + error);
			}

			return cls;
		},

		/**
		 * @private
		 */
		_getCachedViewersKey: function (item, explicitMatchRequired, preview) {
			var contentType = item.mimetype || "";
			contentType = contentType.toLowerCase();
			if (contentType == null || contentType == "") {
				contentType = item.getContentClass();
			}
			if (preview !== true) {
				preview = false;
			}

			return preview + item.repository.type + contentType + explicitMatchRequired;
		},

		/**
		 * @private
		 */
		_getCachedViewers: function (item, explicitMatchRequired, preview) {
			var key = this._getCachedViewersKey(item, explicitMatchRequired, preview);
			return this.viewersCache[key];
		},

		/**
		 * @private
		 */
		_setCachedViewers: function (item, explicitMatchRequired, preview, viewers) {
			var key = this._getCachedViewersKey(item, explicitMatchRequired, preview);
			this.viewersCache[key] = viewers;
		},

		/**
		 * @private
		 */
		_canOpenItem: function (viewer, item) {
			var viewerClass = viewer.viewerClass;
			var docViewer = null;
			var cls = this.getLoadedViewerClass(viewer);

			docViewer = new cls();
			var canOpenItem = Viewer.canOpenItem(docViewer, item);
			delete docViewer;

			return canOpenItem;
		},

		/**
		 * This event function is called when a request to the services is about to be launched. A dialog box or other
		 * indicator can be displayed to indicate that the user should wait.
		 */
		onRequestStarted: function (request) {
		},

		/**
		 * This event function is called when a request to the services completed (either successfully or
		 * unsuccessfully). Any dialog box or other indicator to the user to wait should be removed.
		 */
		onRequestCompleted: function (request) {
		},

		/**
		 * This event function is called when a user-displayed message is to be shown or added to the messages area.
		 * Typically, error messages would be shown to the user through a message dialog as well as added to the
		 * messages area, whereas informational messages would only be added to the messages area.
		 * 
		 * @param message
		 *            An instance of {@link ecm.model.Message} for the last message added.
		 */
		onMessageAdded: function (message) {
		},

		/**
		 * This event function is called when a message is added or the messages are cleared. It is intended to provide
		 * notification for the messages area to update the list of messages.
		 */
		onMessagesChanged: function () {
		},

		_onRequestOverrideStatusDialogRefocus: function (refocus) {
		},

		_onRequestRevertStatusDialogRefocus: function () {
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Adds an undoable task to the undo queue. This
		 *          allows the task to be undone using the undo action.
		 * @param task
		 *            An instance of {@link ecm.model.Task} that will perform undo and redo for an action.
		 */
		addUndoableTask: function (task) {
			this.logEntry("addUndoableTask", task);
			if (this._undoQueue.length >= this._maxUndoQueueLength) {
				this._undoQueue.shift();
			}
			this._undoQueue.push(task);
			this._redoQueue = [];
			this.onChange(this);
			this.logExit("addUndoableTask");
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Returns true if there is a task in the undo queue.
		 */
		canUndo: function () {
			return this._undoQueue.length > 0;
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Returns a description of the action that would be
		 *          performed if undo is invoked.
		 */
		getUndoDescription: function () {
			return ecm.messages.format(this.messages.undo_description, this._undoQueue[this._undoQueue.length - 1].name);
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Performs an undo on the most recent task added to
		 *          the undo queue.
		 */
		undo: function () {
			this.logEntry("undo");
			var task = this._undoQueue.pop();
			if (!task) {
				this.logError("undo", "No task on undo queue!");
			} else {
				task.undoit();
				this._redoQueue.push(task);
				this.onChange(this);
			}
			this.logExit("undo");
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Returns true if there is a task in the redo queue
		 *          that can be performed.
		 */
		canRedo: function () {
			return this._redoQueue.length > 0;
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Returns a description of the action that will be
		 *          performed if a redo is invoked.
		 */
		getRedoDescription: function () {
			return ecm.messages.format(this.messages.redo_description, this._undoQueue[this._undoQueue.length - 1].name);
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete Performs a redo on the last undone task.
		 */
		redo: function () {
			this.logEntry("redo");
			var task = this._redoQueue.pop();
			if (!task) {
				this.logError("undo", "No task on redo queue!");
			} else {
				task.doit();
				this._undoQueue.push(task);
				this.onChange(this);
			}
			this.logExit("redo");
		},

		/**
		 * Refreshes all repositories in this desktop.
		 */
		refresh: function () {
			this.logEntry("refresh");
			array.forEach(this.repositories, function (repository) {
				if (repository.connected) {
					repository.refresh();
				}
			});
			this.logExit("refresh");
		},

		refreshActionsList: function () {
			this.actionLists = [];
		},

		/**
		 * Loads the desktop.
		 * 
		 * @param desktopId
		 *            A string value holding the identifier of the desktop (or null for default desktop).
		 * @param callback
		 *            A function that is invoked when the desktop has completed loading.
		 * @param synchronous
		 *            A boolean value indicating that the load operation should be performed in a synchronous fashion.
		 * @param useLastCache
		 *            Use the last cached copy of the desktop, if present. If not present, the desktop will be generated
		 *            and cached (default is false, if this parameter is omitted or null).
		 */
		loadDesktop: function (desktopId, callback, synchronous, useLastCache) {
			this.logEntry("loadDesktop");
			this.id = desktopId || "";
			var self = this;

			var request = Request.invokeService("getDesktop", null, {
				desktop: this.id,
				token:"50505050",
				useLastCache: (useLastCache === true ? "true" : "false")
			}, function (response) {
				self._desktopLoaded(response, callback);
			}, false, synchronous);

			//load the configured labels
			this.getConfiguredLabels(lang.hitch(this, function (callback) {
				//callback
			}));

			this.logExit("loadDesktop");
			return request;
		},

		/**
		 * Retrieves the specified request parameter from the invocation URL.
		 * 
		 * @param name
		 *            The name of the parameter to retrieve.
		 */
		getRequestParam: function (name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexStr = "[\\?&]" + name + "=([^&#]*)";
			var regex = new RegExp(regexStr);
			var results = regex.exec(window.location.href);

			if (results == null)
				return null;
			else
				return results[1];
		},

		/**
		 * Creates a new repository object.
		 */
		createRepository: function (repositoryJSON) {
			var initialPrivileges = {};
			initialPrivileges.foldering = !!repositoryJSON.folderingEnabled;

			if (repositoryJSON.connected) {
				initialPrivileges.addDoc = repositoryJSON.priv_addDoc || false;
				initialPrivileges.addItem = repositoryJSON.priv_addItem || false;
				initialPrivileges.addSearch = repositoryJSON.priv_addSearch || false;
				initialPrivileges.addUnifiedSearch = repositoryJSON.priv_addUnifiedSearch || false;
				initialPrivileges.createHold = repositoryJSON.privCreateHold || false;
				initialPrivileges.addTeamspace = repositoryJSON.priv_addTeamspace || false;
				initialPrivileges.addTeamspaceTemplate = repositoryJSON.priv_addTeamspaceTemplate || false;
				initialPrivileges.addModifyTeamspaceRole = repositoryJSON.priv_addModifyTeamRoles || false;
				initialPrivileges.manageTeamspace = true;
				initialPrivileges.search = true;
				initialPrivileges.workflow = repositoryJSON.type == "cm" || (repositoryJSON.type == "p8" && repositoryJSON.connectionPoint != null);
				initialPrivileges.findUsersAndGroups = repositoryJSON.privFindUsersAndGroups || false;
				if (repositoryJSON.type == "cm" && initialPrivileges.foldering) {
					initialPrivileges.foldering = repositoryJSON.priv_foldering;
				}
			} else {
				if (repositoryJSON.type == "p8") {
					initialPrivileges.workflow = repositoryJSON.connectionPoint != null && repositoryJSON.connectionPoint != "";
				}
			}

			repositoryJSON.id = repositoryJSON.repositoryId;
			repositoryJSON.name = repositoryJSON.displayName;
			repositoryJSON.privileges = initialPrivileges;

			var repository;
			if (repositoryJSON.repositoryModelClass) { // a custom repository model
				var modelReq = repositoryJSON.repositoryModelClass.split('.').join('/');
				require([
					modelReq
				], lang.hitch(this, function (repositoryJSON, cls) {
					repository = new cls(repositoryJSON);
				}, repositoryJSON));
			} else {
				repository = new Repository(repositoryJSON);
			}
			if (repositoryJSON.userID) {
				repository.userId = repositoryJSON.userID;
			}
			if (repositoryJSON.externalUser) {
				repository.externalUser = repositoryJSON.externalUser;
			}
			if (repositoryJSON.localUser) {
				repository.localUser = repositoryJSON.localUser;
			}
			if (repositoryJSON.userEmailAddress) {
				repository.userEmailAddress = repositoryJSON.userEmailAddress;
			}
			if (repositoryJSON.user_displayname) {
				repository.userDisplayName = repositoryJSON.user_displayname;
			}

			if (repositoryJSON.userLoginName) {
				repository.userLoginName = repositoryJSON.userLoginName;
			} else if (repositoryJSON.userID) {
				repository.userLoginName = repositoryJSON.userID;
			}
			repository.isDesktopAdminUser = (repositoryJSON.desktop_admin_user == true);
			repository.isAdminUser = (repositoryJSON.admin_user == true);
			if (repositoryJSON.adminLayout) {
				if (!repositoryJSON.adminLayout.featureTooltip)
					repositoryJSON.adminLayout.featureTooltip = ecm.messages.launchbar_admin;

				ecm.model.desktop.createAdminFeature(repositoryJSON.adminLayout);
				if (ecm.model.desktop.adminFeature)
					this.features.push(ecm.model.desktop.adminFeature);
			}
			if (repositoryJSON.type == "p8") {
				// Update the object store information.
				if (repositoryJSON.objectStore) {
					repository.objectStoreName = repositoryJSON.objectStore;
					repository.objectStore = {
						symbolicName: repositoryJSON.objectStore
					};
					if (repositoryJSON.objectStoreDisplayName) {
						repository.objectStore.displayName = repositoryJSON.objectStoreDisplayName;
					}
					if (repositoryJSON.objectStoreId) {
						repository.objectStore.id = repositoryJSON.objectStoreId;
					}
					if (repositoryJSON.capabilityComment) {
						repository.objectStore.capabilityComment = repositoryJSON.capabilityComment;
					}
					repository.objectStore.supportsDownloadCount = repositoryJSON.supportsDownloadCount;
					repository.objectStore.supportsRecommendation = repositoryJSON.supportsRecommendation;
					repository.objectStore.supportsTag = repositoryJSON.supportsTag;
					repository.objectStore.supportsBoxShare = repositoryJSON.supportsBoxShare;
				}
				if (repositoryJSON.objectStoreDisplayName) {
					repository.objectStoreDisplayName = repositoryJSON.objectStoreDisplayName;
				}
				repository.domainId = repositoryJSON.domainId;
			}
			repository.serverName = repositoryJSON.hostName;

			return repository;
		},

		/**
		 * @private
		 */
		onEditConnected: function (password) {

		},

		/**
		 * @private
		 */
		_editClientHostName: "localhost.ibm.net",
		/**
		 * @private
		 */
		_editClientResponse: "Edit is available now!",

		/**
		 * @private
		 */
		_sendRequest: function (port, password, callback) {
			var url = "https://" + this._editClientHostName + ":" + port;
			try {
				var xhr = new XMLHttpRequest();
				url = url + "/?editFilesCleanupInterval=" + this.editFilesCleanupInterval;
				xhr.open("GET", url, true);
				xhr.timeout = 3000;
				xhr.onload = lang.hitch(this, function () {
					if (xhr.readyState == 4 && xhr.status == 200) {
						if (xhr.response && xhr.response.trim() == this._editClientResponse) {
							ecm.model.desktop.streamlinePort = port;
							cookie("ecm.model.desktop.streamlinePort", port, {
								expires: new Date(2035, 0, 1)
							});
							ecm.model.desktop.onEditConnected(password);
							if (callback) {
								callback();
							}
						}
					}
				});
				xhr.onerror = lang.hitch(this, function () {
					console.log("Error Occured.");
					this._getStreamlineServicePortAgain(port, password, callback);
				});
				xhr.ontimeout = lang.hitch(this, function () {
					console.log("Server response not received.");
					this._getStreamlineServicePortAgain(port, password, callback);
				});
				xhr.send(null);
			} catch (e) {
				console.log('catch', e);
				if (callback) {
					callback();
				}
			}

		},


		/**
		 * @private
		 */
		_getStreamlineServicePortAgain: function (port, password, callback) {
			var defaultPort = 13553;
			for (var i = 0; i <= 2; i++, defaultPort++) {
				if (port == defaultPort) {
					continue;
				}
				this._sendRequestAgain(defaultPort, password, callback);
			}
		},
		/**
		 * @private
		 */
		_sendRequestAgain: function (port, password, callback) {
			var url = "https://" + this._editClientHostName + ":" + port;
			try {
				var xhr = new XMLHttpRequest();
				url = url + "/?editFilesCleanupInterval=" + this.editFilesCleanupInterval;
				xhr.open("GET", url, true);
				xhr.timeout = 3000;
				xhr.onload = lang.hitch(this, function () {
					if (xhr.readyState == 4 && xhr.status == 200) {
						if (xhr.response && xhr.response.trim() == this._editClientResponse) {
							ecm.model.desktop.streamlinePort = port;
							cookie("ecm.model.desktop.streamlinePort", port, {
								expires: new Date(2035, 0, 1)
							});
							ecm.model.desktop.onEditConnected(password);
							if (callback) {
								callback();
							}
						}
					}
				});
				xhr.onerror = lang.hitch(this, function () {
					console.log("Error Occured.");
					if (callback) {
						callback();
					}
				});
				xhr.ontimeout = lang.hitch(this, function () {
					console.log("Server response not received.");
					if (callback) {
						callback();
					}
				});
				xhr.send(null);
			} catch (e) {
				console.log('catch', e);
				if (callback) {
					callback();
				}
			}

		},

		/**
		 * @private
		 */
		_getEditClientPort: function (password, callback) {
			var port = cookie("ecm.model.desktop.streamlinePort") ? cookie("ecm.model.desktop.streamlinePort") : 13553;
			ecm.model.desktop.streamlinePort = null;
			//try the first port
			if (ecm.model.desktop && ecm.model.desktop.streamlineEnabled) {
				this._sendRequest(port, password, callback);
			}
		},

		/**
		 * @private
		 */

		_postLogonToEditClient: function (action, password) {
			//post message to edit client.
			if (ecm.model.desktop.streamlinePort && ecm.model.desktop.streamlinePort.toString().trim().length != 0) {
				var url = "https://" + this._editClientHostName + ":" + ecm.model.desktop.streamlinePort;
				try {
					var xhr = new XMLHttpRequest();
					var criteria = {
						"action": action ? action : "icnLogon",
						"desktopId": ecm.model.desktop.id,
						"userId": ecm.model.desktop.userId,
						"password": password ? password : "",
						"navigatorURL": document.location.origin + document.location.pathname
					}
					xhr.open("POST", url, true);
					xhr.timeout = 3000;
					xhr.onload = lang.hitch(this, function () {
						if (xhr.readyState == 4 && xhr.status == 200) {
							if (xhr.response) {
								console.log(xhr.response.trim());
							}
						}
					});
					xhr.onerror = lang.hitch(this, function () {

					});
					xhr.ontimeout = lang.hitch(this, function () {

					});
					xhr.send(dojo.toJson(criteria));
				} catch (e) {
					console.log('catch', e);
				}
			}
		},

		/**
		 * @private
		 */
		_desktopLoaded: function (response, callback) {
			this.logEntry("_desktopLoaded");
			this.id = response.id;
			this.name = response.name;

			this.authenticationType = response.authenticationType || 2;

			this.connected = response.connected;
			this.userId = response.userid;
			this.userDisplayName = response.user_displayname;
			this.userLoginName = response.userLoginName || this.userId;

			this.disableCookies = response.disableCookies || false;
			this.disableAutocomplete = response.disableAutocomplete || false;
			this.culturalCollation = response.culturalCollation || false;
			this.baseStyle = response.baseStyle || "classic";
			this.theme = response.theme;

			lang.mixin(this.pluginSettings, response.pluginSettings || {});

			// Set the help URL if available (only included when connected)
			if (response.helpURL != null)
				this.helpUrl = response.helpURL;
			if (response.helpSettingsURL != null)
				this.helpSettingsUrl = response.helpSettingsURL;

			this.helpTaxonomy = response.helpTaxonomy;
			this.helpContext = response.helpContext;
			this.helpWelcomeFile = response.helpWelcomeFile;

			// Add the release and build information if available.
			if (response.navigatorRelease) {
				this.navigatorRelease = response.navigatorRelease;
				ecm.messages.product_version = this.navigatorRelease;
			}

			if (response.navigatorBuild) {
				this.navigatorBuild = response.navigatorBuild;
			}

			this.messageSearchUrl = response.messageSearchURL || "http://www.ibm.com/search/csass/search?q=";
			this.applicationName = response.applicationName || ecm.messages.product_name;
			this.loginLogoUrl = response.loginLogoURL;
			this.bannerLogoUrl = response.bannerLogoURL;
			this.loginInformationUrl = response.loginInformationURL;
			this.passwordRulesUrl = response.passwordRulesURL;
			this.bannerBackgroundColor = response.bannerBackgroundColor;
			this.bannerApplicationNameColor = response.bannerApplicationNameColor;
			this.bannerMenuColor = response.bannerMenuColor;
			this._authenticatingRepositoryId = response.authenticatingRepositoryId;
			this.defaultLayoutRepositories = response.defaultLayoutRepositories;

			this._additionalScript = response.additionalScript;
			this._additionalCss = response.additionalCss;
			this.layout = response.layout || "ecm.widget.layout.NavigatorMainLayout";
			this.maxNumberDocToAdd = response.maxNumberDocToAdd || 50;
			this.maxNumberDocToModify = response.maxNumberDocToModify || 50;
			this.maxConversionSize = response.maxConversionSize || 50;
			this.maxNumberDocToPrint = response.maxNumberDocToPrint;
			this._actionHandler = response.actionHandler || "ecm.widget.layout.CommonActionsHandler";
			this._mimeTypeDefs = response.mimeTypeDefs;

			this.timeZonePrefs = response.timeZonePrefs;
			this.enableHideTimePortion = response.enableHideTimePortion;
			this.encryptionKey = response.encryptionKey;

			this.shareEnabled = response.shareEnabled;
			this.shareRepositoryId = response.shareRepositoryId;
			this.shareRepositoryOAuthId = response.shareRepositoryOAuthId;
			this.shareMyEmailModifiable = response.shareMyEmailModifiable;
			this.streamlineEnabled = response.streamlineEnabled;
			this.mobileQREnabled = response.mobileQREnabled;
			this.documentAddMode = response.documentAddMode;
			this.editWinClientInstallerAvailable = response.editWinClientInstallerAvailable;
			this.editMacClientInstallerAvailable = response.editMacClientInstallerAvailable;
			this.officeOnlineEnabled = response.officeOnlineEnabled;
			this.officeOnlineServiceURL = response.officeOnlineServiceURL;
			this.editFilesCleanupInterval = response.editFilesCleanupInterval;
			this.printServiceEnabled = response.printServiceEnabled;
			this.mergeSplitEnabled = response.mergeSplitEnabled;
			this.mergeSplitShowCheckIn = response.mergeSplitShowCheckIn;

			this.emailServiceEnabled = response.emailServiceEnabled;
			this.fromEmailModifiable = response.fromEmailModifiable;
			/*Custom Settings
			if(response.customSettings)
				this.customSettings = dojo.fromJson(response.customSettings);
			if(this.customSettings){
				if(this.customSettings.enableSessionExpireWarning && this.customSettings.enableSessionExpireWarning.toUpperCase() != "FALSE")
					this.sessionExpireWarningEnabled = true;
				else if(!this.customSettings.enableSessionExpireWarning)
					this.sessionExpireWarningEnabled = true;
				else
					this.sessionExpireWarningEnabled = false;
				if(this.customSettings.sessionExpireWarningTime){
					var warningTime = Math.round(this.customSettings.sessionExpireWarningTime);
					if(!isNaN(warningTime)){
						if(warningTime >= 5)
							this.sessionExpireWarningTime = 5;
						else if(warningTime <= 2)
							this.sessionExpireWarningTime = 2;
						else
							this.sessionExpireWarningTime = warningTime;
					}
				}
				else
					this.sessionExpireWarningTime = 2;
			}
			*/

			// Apply custom theme
			if (response.theme && response.theme.name) {
				this.baseStyle = response.theme.themeStyle;
				if (response.theme.cssString) {
					this.theme = response.theme;
					var head = document.getElementsByTagName("head")[0];
					var customStyleNode = domConstruct.create("style", {
						innerHTML: this.theme.cssString
					});
					domConstruct.place(customStyleNode, head, "last");
					domClass.add(document.body, this.theme.id);
				}
			}

			// Apply base style
			if (this.baseStyle != "classic")
				domClass.add(document.body, "icn");

			// If this is a top-level window under Google Chrome...
			// The desktop may be loaded early, before the Chrome Frame plugin has sent a request to the server,
			// so ecm.model.desktop.isChromeFrame may not be set yet.
			if (!window.opener && has("chrome")) {
				// There are problems with submitting the download form using iframe.send from 
				// a popup window under IE + Google Chrome Frame.
				// Have the top-level desktop window handle the download.
				if (this._onPerformDownloadHandler) {
					connect.disconnect(this._onPerformDownloadHandler);
				}
				this._onPerformDownloadHandler = connect.connect(window, "message", this, function (e) {
					if (ecm.model.desktop.isChromeFrame && e.origin == window.location.href.split("/").splice(0, 3).join("/") && e.data.json) {
						var messageData = dojojson.fromJson(e.data.json);
						if (messageData.action == "performDownload") {
							var actionsHandler = this.getActionsHandler();
							if (actionsHandler && lang.isFunction(actionsHandler._performDownload)) {
								actionsHandler._performDownload(messageData.serviceName, messageData.repositoryType, messageData.params);
							}
						}
					}
				});
			}

			this._plugins = response.plugins;
			this._registerPluginPackages();

			//taskManager
			this.taskManager.initialize(response);

			// sync server
			this.syncServer.initialize(response);

			var defaultFeatureParamValue = this.getRequestParam("feature");
			var featureValueValid = false;
			if (response.features) {
				this.features = [];
				for (var i = 0; i < response.features.length; i++) {
					var featureI = new Feature(response.features[i]);
					this.features.push(featureI);

					if (!featureValueValid && defaultFeatureParamValue) {
						if (featureI.id == defaultFeatureParamValue) {
							featureValueValid = true;
						}
					}
				}
			}

			if (featureValueValid) {
				this.defaultFeature = defaultFeatureParamValue;
			} else {
				if (defaultFeatureParamValue) {

					if (defaultFeatureParamValue != "ecmClientAdmin") {
						ecm.model.desktop.addMessage(Message.createErrorMessage("feature_invalid", [
							defaultFeatureParamValue
						]));
						this.defaultFeature = response.defaultFeature;
					} else {
						this.defaultFeature = "ecmClientAdmin";
					}

				} else {
					this.defaultFeature = response.defaultFeature;
				}
			}

			// used for plugins
			this.defaultSecondaryPlugin = this.getRequestParam("secondaryPlugin");
			this.alternateMenuTypeSuffix = response.alternateMenuTypeSuffix; // used by layout plugins to use alternate menus

			this._role = response.role;
			this.showGlobalToolbar = response.showGlobalToolbar || false;
			this.preventCreateNewSearch = response.preventCreateNewSearch || false;
			this.preventCreateNewUnifiedSearch = response.preventCreateNewUnifiedSearch || false;
			this.hideEntryTemplateNotFoundWarning = response.hideEntryTemplateNotFoundWarning || false;

			this.showSecurity = response.showSecurity || false;
			this.showSecurityInheritanceUI = response.showSecurityInheritanceUI || false;
			this.showRoleSecurity = response.showRoleSecurity || false;
			this.showPrimaryDocumentOnly = response.showPrimaryDocumentOnly || false;
			this.fileIntoFolder = response.fileIntoFolder || false;
			this.showStatusbar = response.showStatusbar || false;
			this.enableThumbnails = true;
			if (response.enableThumbnails == false)
				this.enableThumbnails = false;
			this.showViewFilmstrip = true;
			if (response.showViewFilmstrip == undefined) {
				this.showViewFilmstrip = this.enableThumbnails;
			} else if (response.showViewFilmstrip == false)
				this.showViewFilmstrip = false;

			if (this._additionalScript) {
				try {
					var scriptText;
					xhr.get({
						url: this._additionalScript,
						sync: true,
						load: function (text) {
							scriptText = text;
						}
					});
					if (has("ie")) {
						window.execScript(scriptText);
					} else {
						eval.call(window, scriptText);
					}
				} catch (e) {
					this.logError("_desktopLoaded", "Error evaluating additional JavaScript for desktop");
					ecm.model.desktop.addMessage(Message.createErrorMessage("desktop_error", [
						this.getId
					]));
				}
			}

			if (this._additionalCss) {
				if (has("ie")) {
					document.createStyleSheet(this._additionalCss);
				} else {
					var head = document.getElementsByTagName("head")[0];
					var link = document.createElement("link");
					link.rel = "stylesheet";
					link.type = "text/css";
					link.href = this._additionalCss;
					head.appendChild(link);
				}
			}

			this.defaultRepositoryId = response.defaultRepositoryId;
			this.repositories = [];
			for (var i in response.servers) {
				var repositoryJSON = response.servers[i];
				this.repositories.push(this.createRepository(repositoryJSON));
			}

			this.container = null;
			if (response.containers) {
				var containerJSON = response.containers;
				var container = new Container(containerJSON);
				container.userId = containerJSON.userid;
				container.userDisplayName = containerJSON.user_displayname;
				container.userLoginName = containerJSON.userLoginName || container.userId;
				container.desktop = containerJSON.desktop;
				if (containerJSON.adminLayout) {
					if (!containerJSON.adminLayout.featureTooltip)
						containerJSON.adminLayout.featureTooltip = ecm.messages.launchbar_admin;

					this.createAdminFeature(containerJSON.adminLayout);
					if (this.adminFeature)
						this.features.push(this.adminFeature);
				}

				if (this.authenticationType == 1 && container.connected) {
					container.onConnected(container);
					this._fireOnLogin();
				}
			}

			this.container = container;
			if (response.tam_token)
				this._ssoTokenPresent = response.tam_token;
			this.useSiteLoginPage = response.useSiteLoginPage;

			this._initializePlugins();

			if (response.openActions) {
				this.openActions = {};
				for (var i = 0; i < response.openActions.length; i++) {
					var openAction = response.openActions[i];
					for (var r = 0; r < openAction.serverTypes.length; r++) {
						var serverType = openAction.serverTypes[r];
						if (!this.openActions[serverType]) {
							this.openActions[serverType] = {};
						}

						for (var m = 0; m < openAction.contentTypes.length; m++) {
							var contentType = openAction.contentTypes[m];
							if (!this.openActions[serverType][contentType]) {
								this.openActions[serverType][contentType] = openAction;
							} else if (openAction.id != this.openActions[serverType][contentType].id) {
								this.logDebug("_desktopLoaded", "Collision in openActions for server " + serverType + ", contentType " + contentType + "; open action " + openAction.id + " was not loaded.");
							}
						}
					}
				}
			}

			this.viewers = [];
			for (var i in response.viewerDefs) {
				var viewerJSON = response.viewerDefs[i];
				viewerJSON.id = viewerJSON.viewerName;
				viewerJSON.name = viewerJSON.viewerName;

				var viewer = new Viewer(viewerJSON);
				this.viewers.push(viewer);
			}
			this.viewerMappings = [];
			var ctr = 0;
			for (var i in response.viewerMappings) {
				var viewerMappingJSON = response.viewerMappings[i];
				if (viewerMappingJSON.contentTypes && viewerMappingJSON.contentTypes.length > 0) {
					for (var j = 0; j < viewerMappingJSON.contentTypes.length; j++) {
						var contentType = viewerMappingJSON.contentTypes[j];
						var viewerMapping = new ViewerMapping({
							id: ctr,
							name: ctr,
							contentType: contentType,
							serverType: viewerMappingJSON.serverType,
							previewOnly: viewerMappingJSON.previewOnly,
							viewer: this.getViewer(viewerMappingJSON.viewerName)
						});
						this.viewerMappings.push(viewerMapping);
						ctr++;
					}
				} else {
					var viewerMapping = new ViewerMapping({
						id: ctr,
						name: ctr,
						contentType: "",
						serverType: viewerMappingJSON.serverType,
						previewOnly: viewerMappingJSON.previewOnly,
						viewer: this.getViewer(viewerMappingJSON.viewerName)
					});
					this.viewerMappings.push(viewerMapping);
					ctr++;
				}
			}

			// most typical menus
			for (var menuId in response.menus) {
				var actions = [];
				this._loadActions(response.menus[menuId], actions);
				this.actionLists[menuId] = actions;
			}

			// Get the Mime Icon information
			var iconMappings = [];
			for (var i in response.iconMappings) {
				var iconMappingJSON = response.iconMappings[i];
				var id = iconMappingJSON.id;
				var iconConfig = IconConfig.createIconConfig(id);
				iconConfig.setClassName(iconMappingJSON.className);
				iconConfig.setFileName(iconMappingJSON.fileName);
				iconConfig.setContentTypes(iconMappingJSON.contentTypes);
				iconMappings.push(iconConfig);
			}
			Item.loadIconMapping(iconMappings);

			// Get the State Icon information
			var iconStates = [];
			for (var i in response.iconStatus) {
				var iconStatusJSON = response.iconStatus[i];
				var id = iconStatusJSON.id;
				var iconStatusConfig = IconStatusConfig.createIconStatusConfig(id);
				iconStatusConfig.setClassName(iconStatusJSON.className);
				iconStatusConfig.setFileName(iconStatusJSON.fileName);
				iconStatusConfig.setServers(iconStatusJSON.servers);
				iconStatusConfig.setLabel(iconStatusJSON.label);
				iconStates.push(iconStatusConfig);
			}
			Item.loadIconStateMapping(iconStates);

			// Labels
			var uiLabels = [];
			for (var i in response.uiLabels) {
				var uiLabelJSON = response.uiLabels[i];
				var id = uiLabelJSON.id;
				var uiLabel = InterfaceTextConfig.createInterfaceTextConfig(id);
				lang.mixin(uiLabel, {
					_attributes: uiLabelJSON
				});

				var localeId = uiLabelJSON.localeData && uiLabelJSON.localeData.id ? uiLabelJSON.localeData.id : "" + i;
				var uiLabelLocale = InterfaceTextLocaleConfig.createInterfaceTextLocaleConfig(localeId);
				uiLabel.setLocaleData(uiLabelLocale);
				if (uiLabelJSON.localeData) {
					lang.mixin(uiLabelLocale, {
						_attributes: uiLabelJSON.localeData
					});
				}
				uiLabels.push(uiLabel);
			}
			this.configuredLabels = new ConfiguredLabels(uiLabels);

			//Class label
			var classDisplayLabel = this.configuredLabels.getLabelValue("class_label", kernel.locale);
			ecm.messages.document_type = classDisplayLabel;
			ecm.messages.search_class = string.substitute(ecm.messages.append_colon, [
				classDisplayLabel
			]);
			ecm.messages.search_class_multiple = string.substitute(ecm.messages.append_colon, [
				classDisplayLabel + " (${0})"
			]);
			ecm.messages.document_type = classDisplayLabel;
			ecm.messages.print_property_class = string.substitute(ecm.messages.append_colon, [
				classDisplayLabel
			]);
			ecm.messages.class_label = classDisplayLabel;
			ecm.messages.class_label_no_html_encode = this.configuredLabels.getLabelValue("class_label", kernel.locale, false);

			// process_role
			var processRoleDisplayLabel = this.configuredLabels.getLabelValue("process_role", kernel.locale, false);
			ecm.messages.process_role = processRoleDisplayLabel;

			// process_inbasket
			var processInbasketDisplayLabel = this.configuredLabels.getLabelValue("process_inbasket", kernel.locale, false);
			ecm.messages.process_inbasket = processInbasketDisplayLabel;

			//Repository label
			var repositoryDisplayLabel = this.configuredLabels.getLabelValue("repository", kernel.locale);
			ecm.messages.repository = repositoryDisplayLabel;
			ecm.messages.repository_label = repositoryDisplayLabel;
			ecm.messages.server = string.substitute(ecm.messages.append_colon, [
				repositoryDisplayLabel
			]);

			// File types
			array.forEach(response.fileTypes, function (fileTypeJSON) {
				var fileTypeConfig = FileTypeConfig.createFileTypeConfig(fileTypeJSON.id);
				fileTypeConfig.setName(fileTypeJSON.name);
				fileTypeConfig.setDescription(fileTypeJSON.description);
				fileTypeConfig.setContentTypes(fileTypeJSON.contentTypes);
				fileTypeConfig.setOnlyUseInETAssociations(fileTypeJSON.onlyUseInETAssociations);
				this.fileTypes.push(fileTypeConfig);
			}, this);

			// User action macros
			array.forEach(response.userActionMacros, function (userActionMacroJSON) {
				var userActionMacroConfig = UserActionMacroConfig.createUserActionMacroConfig(userActionMacroJSON.id);
				userActionMacroConfig.setName(userActionMacroJSON.name);
				userActionMacroConfig.setServerType(userActionMacroJSON.serverType);
				userActionMacroConfig.setUserProperty(userActionMacroJSON.userProperty);
				userActionMacroConfig.setDateProperty(userActionMacroJSON.dateProperty);
				userActionMacroConfig.setReserved(userActionMacroJSON.reserved);
				this.userActionMacros.push(userActionMacroConfig);
			}, this);

			// mobile settings
			this.mobileAppAccess = response.mobileAppAccess;
			this.addPhotoFromMobile = response.addPhotoFromMobile;
			this.addDocFoldersToRepo = response.addDocFoldersToRepo;
			this.openDocFromOtherApp = response.openDocFromOtherApp;

			this.fileTrackingPrefs = response.fileTrackingPrefs;

			this.mobileFeatures = [];
			array.forEach(response.mobileFeatures, function (mobileFeatureJSON) {
				var mobileFeature = {};
				mobileFeature.id = mobileFeatureJSON.id;
				mobileFeature.name = mobileFeatureJSON.name;
				mobileFeature.display = mobileFeatureJSON.display;
				mobileFeature.url = mobileFeatureJSON.url;
				mobileFeature.iconFile = mobileFeatureJSON.iconFile;
				mobileFeature.label = mobileFeatureJSON.label;

				if (mobileFeature.id == this.id + "." + "browse" && !mobileFeature.label) {
					mobileFeature.label = ecm.messages.browse;
				} else if (mobileFeature.id == this.id + "." + "search" && !mobileFeature.label) {
					mobileFeature.label = ecm.messages.search;
				} else if (mobileFeature.id == this.id + "." + "favorites" && !mobileFeature.label) {
					mobileFeature.label = ecm.messages.favorites;
				} else if (mobileFeature.id == this.id + "." + "casesearch" && !mobileFeature.label) {
					mobileFeature.label = ecm.messages.casesearch;
				}
				this.mobileFeatures.push(mobileFeature);
			}, this);

			// feature config
			array.forEach(response.desktopFeatures, function (desktopFeatureJSON) {
				if (desktopFeatureJSON && desktopFeatureJSON.id) {
					var feature = this.getFeatureById(desktopFeatureJSON.id);
					if (feature) {
						feature.configurations = {
							showTreeView: desktopFeatureJSON.showTreeView,
							defaultRepository: desktopFeatureJSON.defaultRepository,
							showRepositories: desktopFeatureJSON.showRepositories,
							showViews: desktopFeatureJSON.showViews,
							showDocumentInfoPane: desktopFeatureJSON.showDocumentInfoPane,
							documentInfoPaneDefaultOpen: desktopFeatureJSON.documentInfoPaneDefaultOpen,
							documentInfoPaneOpenOnSelection: desktopFeatureJSON.documentInfoPaneOpenOnSelection,
							showMyCheckouts: desktopFeatureJSON.showMyCheckouts
						};
						feature.pluginConfiguration = desktopFeatureJSON.featureConfiguration;
						if (desktopFeatureJSON.secondaryPanes) {
							feature.secondaryPanes = desktopFeatureJSON.secondaryPanes;
						}
					}
				}
			}, this);

			this.hasBoxRepositories = (response.hasBoxRepositories === true);
			this._refreshLinkedBoxRepositories(response, false);
			this.onDesktopLoaded(response);
			if (callback) {
				callback(this);
			}
			this._checkForConnectedRepositories(response.servers);

			this.isDesktopAdminUser = response.desktop_admin_user;

			if (response.sessioninactivelimit >= 600 && response.connected == true && !this.isSsoTokenPresent() && !timer.timer && this.sessionExpireWarningEnabled) {
				timer.sessionExpireWarningTime = this.sessionExpireWarningTime;
				timer.getSessionTimer(response.sessioninactivelimit).start();
			}
			this.onChange(this);
			this.logExit("_desktopLoaded");
		},

		_refreshLinkedBoxRepositories: function (response, refresh, forward) {
			// forward parameter is used by ecm.widget.viewer.ContentViewer, to prevent aspect-infinite recursion.
			var methodName = "_refreshLinkedBoxRepositories";
			this.logEntry(methodName);

			// Some callers send JSON, so check...
			if (typeof response === "string" || response instanceof String) {
				response = JSON.parse(response);
			}

			if (response.linkedBoxRepositories) {
				this.linkedBoxRepositories = response.linkedBoxRepositories;
				this._linkedBoxRepositoryLookup = null; // Clear the lookup so that it refreshes on next access.
				if (refresh) {
					this.onChange(this);
				}
			}
			this.logExit(methodName);
		},

		_hasLinkedBoxRepository: function (repository) {
			if (!this._linkedBoxRepositoryLookup || this._linkedBoxRepositoryLookup == null) {
				// Lazy load lookup...
				this._linkedBoxRepositoryLookup = {};
				if (this.linkedBoxRepositories) {
					for (var n = 0; n < this.linkedBoxRepositories.length; n++) {
						this._linkedBoxRepositoryLookup[this.linkedBoxRepositories[n].repositoryId] = this.linkedBoxRepositories[n];
					}
				}
			}

			return repository.oAuthEnabled && repository.oAuthClientId && this._linkedBoxRepositoryLookup[repository.id] != undefined;
		},

		/**
		 * @param repository -
		 *            source repository
		 * @private
		 */
		_getNumOfBoxCopyRepositories: function (repository) {
			var desktopRepositories = this.repositories;
			var repositoryCount = 0;
			for (var i in desktopRepositories) {
				var dRepository = desktopRepositories[i];
				if (dRepository._isP8() || dRepository._isCM() || dRepository._isBox()) {
					if (dRepository.type != repository.type && (dRepository["boxCopyEnabled"] || dRepository._isBox())) {
						if ((repository._isP8() && dRepository._isCM()) || (repository._isCM() && dRepository._isP8())) {

						} else {
							repositoryCount++;
						}
					}
				}

			}
			return repositoryCount;
		},
		/**
		 * @private Called from _desktopLoaded to register dojo packages for plugins. This is done earlier than general
		 *          initialization of plugins so repository model classes can be specified by the plugin repository
		 *          types.
		 */
		_registerPluginPackages: function () {
			if (this._plugins) {
				this.logEntry("_registerPluginPackages", "registering plugin packages");
				for (var i in this._plugins) {
					var plugin = this._plugins[i];
					if (plugin.dojoModule) {
						var moduleUrl = Request.getPluginResourceUrl(plugin.id, plugin.dojoModule);
						if (moduleUrl.indexOf("./") == 0) { // a relative url
							moduleUrl = "." + moduleUrl; // change to .. since relative to dojo
						}
						require({
							packages: [
								{
									name: plugin.dojoModule,
									location: escape(moduleUrl)
								}
							]
						});
					}
				}
			}
		},

		/**
		 * @private Called from both _desktopLoaded to initialize plugins for the desktop.
		 */
		_initializePlugins: function () {
			if (this._plugins) {
				this.logDebug("_initializePlugins", "initializing plugins");
				var cssLoading = 0;
				for (var i in this._plugins) {
					var plugin = this._plugins[i];
					var cssFileName;
					if (this.isLogDebug() && plugin.debugCssFileName) {
						cssFileName = plugin.debugCssFileName;
					} else {
						cssFileName = plugin.cssFileName;
					}
					if (cssFileName) {
						var cssFileUrl = Request.getPluginResourceUrl(plugin.id, cssFileName);
						if (has("ie")) {
							document.createStyleSheet(cssFileUrl);
						} else {
							var head = document.getElementsByTagName("head")[0];
							var link = document.createElement("link");
							link.rel = "stylesheet";
							link.type = "text/css";
							link.href = cssFileUrl;
							link.onload = lang.hitch(this, function () {
								cssLoading -= 1;
								if (cssLoading <= 0) {
									this.onPluginCSSLoaded();
								}
							});
							cssLoading += 1;
							head.appendChild(link);
						}
					}
					var script;
					if (this.isLogDebug() && plugin.debugScript) {
						script = plugin.debugScript;
					} else {
						script = plugin.script;
					}
					if (script) {
						var scriptUrl = Request.getPluginResourceUrl(plugin.id, script);
						try {
							var scriptText;
							xhr.get({
								url: scriptUrl,
								sync: true,
								load: function (text) {
									scriptText = text;
								}
							});
							scriptText += "\n\n////@ sourceURL=" + scriptUrl; // for improved firebug debugging
							if (has("ie")) {
								window.execScript(scriptText);
							} else {
								eval.call(window, scriptText);
							}
						} catch (e) {
							this.logError("_initializePlugins", "Error evaluating JavaScript for plugin " + plugin.id, e.message);
							ecm.model.desktop.addMessage(Message.createErrorMessage("plugin_error", [
								plugin.id
							]));
						}
					}
				}
			}
		},

		/**
		 * Return boolean true if the specified plugin is loaded
		 * 
		 * @param pluginId
		 *            A string value holding the plugin Identifier
		 */
		isPluginLoaded: function (pluginId) {
			if (this._plugins) {
				for (var i in this._plugins) {
					if (this._plugins[i].id == pluginId) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * This event is fired after all CSS loads complete for plug-in provided CSS. The ecm.widget.layout.BaseLayout
		 * listens to this event in order to resize the layout in case any plug-in CSS has changed computed sizes.
		 * 
		 * @since 2.0.2.1
		 */
		onPluginCSSLoaded: function () {
		},

		/**
		 * Returns the action list for a particular suffix.
		 * 
		 * @param actionListSuffix
		 *            A string value holding the action suffix
		 * @param callback
		 *            A callback function that is called after the context menu actions are loaded.
		 */
		loadMenuActions: function (actionListSuffix, callback, errorback) {
			this.logEntry("loadMenuActions");
			if (this.useAlternateMenuTypeSuffix && this.alternateMenuTypeSuffix && this.actionLists[actionListSuffix + this.alternateMenuTypeSuffix]) {
				callback(this.actionLists[actionListSuffix + this.alternateMenuTypeSuffix]); // used by layout plugins
			} else if (this.actionLists[actionListSuffix]) {
				callback(this.actionLists[actionListSuffix]);
			} else {
				var self = this;
				var params = {
					desktop: this.id,
					action_list_suffix: actionListSuffix
				};
				var request = Request.invokeService("getActions", null, params, function (response) {
					self._actionsLoaded(response, actionListSuffix, callback);
				}, false, false, function (error) {
					if (lang.isFunction(errorback))
						errorback(error)
				});
			}
			this.logExit("loadMenuActions");
			return request;
		},

		/**
		 * @private
		 */
		_actionsLoaded: function (response, actionListSuffix, callback) {
			this.logEntry("_actionsLoaded");
			var actions = [];
			this._loadActions(response.actions, actions);
			this.actionLists[actionListSuffix] = actions;
			callback(actions);
			this.logExit("_actionsLoaded");
		},

		/**
		 * @private
		 */
		_loadActions: function (actionsJSON, actions) {
			for (var i in actionsJSON) {
				var actionJSON = actionsJSON[i];
				var action;

				if (actionJSON.actionModelClass) {
					// Don't attempt to load actions from disabled plug-ins.
					if (!actionJSON.pluginId || this.isPluginLoaded(actionJSON.pluginId)) {
						var widgetReq = actionJSON.actionModelClass.split('.').join('/');
						try {
							require([
								widgetReq
							], lang.hitch(this, function (actionJSON, actions, cls) {
								action = new cls(actionJSON);
								this._recLoadActions(actionJSON, action, actions);
							}, actionJSON, actions));
						} catch (e) {
							this.logError("_loadActions", "Unable to load action class '" + actionJSON.actionModelClass + "'." + (actionJSON.pluginId ? (" The plug-in " + actionJSON.pluginId + " may not be loaded and enabled, or there is a problem with the plug-in.") : ""));
						}
					} else { // ...this action is from a plug-in, and the plug-in is not enabled for this desktop.
						this.logDebug("_loadActions", "The action class '" + actionJSON.actionModelClass + "' from the '" + actionJSON.pluginId + "' plug-in will not be loaded. The plug-in is not enabled for this desktop.");
					}
				} else {
					action = new Action(actionJSON);
					this._recLoadActions(actionJSON, action, actions);
				}
			}
		},

		/**
		 * @private
		 */
		_recLoadActions: function (actionJSON, action, actions) {
			if (actionJSON.actions && actionJSON.actions.length > 0) {
				this._loadActions(actionJSON.actions, action.subActions);
			}
			actions.push(action);
		},

		/**
		 * @private
		 */
		_checkForConnectedRepositories: function (repositoriesJSON) {
			this.logEntry("_checkForConnectedRepositories");
			for (var i in this.repositories) {
				var repository = this.repositories[i];
				if (repository.connected) {
					repository.onConnected(repository, repositoriesJSON[i]);
					if (this.authenticationType == 2 && repository.id == this.defaultRepositoryId) {
						this._initialRepository = repository;
						this._fireOnLogin(repository);
						break;
					}
				}
			}
			this.logExit("_checkForConnectedRepositories");
		},

		/**
		 * Return customizable label. This method will first look at a table of customizable labels filled by database
		 * content. If no data is found it will then pull the information from ecm.messages.
		 * 
		 * @param name
		 *            A string value holding the string identifer to look for.
		 */
		getCustomLabel: function (name) {
			return ecm.messages[name];
		},

		/**
		 * An event function that is called when teamspaces has been turn on or off from Admin for a repository.
		 * 
		 * @param id
		 *            A string value holding the repository identifer.
		 * @param teamspaceStringValue
		 *            A boolean value set to true if the teamspace if enabled.
		 */
		onTeamspacesValueChanged: function (id, teamspacesStringValue) {
			for (var i = 0; i < this.repositories.length; i++) {
				var repository = this.repositories[i];
				if (repository.id == id) {
					var teamspacesEnabled = (teamspacesStringValue == true || teamspacesStringValue == "true");
					if (repository.teamspacesEnabled != teamspacesEnabled) {
						repository._teamspacesEnabled = teamspacesEnabled;
						this.onTeamspacesListChanged();
					}
					break;
				}
			}
		},

		/**
		 * An event function called when the list of teamspaces has changed.
		 */
		onTeamspacesListChanged: function () {
		},

		/**
		 * Clear favorites cache.
		 */
		clearFavorites: function () {
			if (this.favorites) {
				for (var i = 0; i < this.favorites.length; i++) {
					this.favorites[i].destroy();
				}
			}
			this.favorites = null;
		},

		/**
		 * Clear sync items cache.
		 * 
		 * @since 2.0.3.5
		 */
		clearSyncItems: function () {
			if (this.syncItems) {
				for (var i = 0; i < this.syncItems.length; i++) {
					this.syncItems[i].destroy();
				}
			}
			this.syncItems = null;
		},

		/**
		 * Loads an array of {@link ecm.model.Favorite} objects for the current user within this desktop.
		 * 
		 * @param callback
		 *            A callback function for the caller to work with the list of favorites return from the server.
		 */
		loadFavorites: function (callback) {
			this.logEntry("loadFavorites");

			if (this.favorites && this.favoritesStructure && this.favoritesMagazineStructure) {
				if (callback)
					callback(this.favorites, this.favoritesStructure, this.favoritesMagazineStructure);
			} else {
				var params = {
					application: "navigator",
					userid: this.id + "." + this.getDefaultRepositoryId() + "." + this.getDefaultRepository().userId.toLowerCase()
				};

				var sharedRequestParams = {
					sharedRequestMethod: "loadFavorites",
					sharedRequestCompleteCallback: callback,
					serviceName: "listFavorites",
					requestParams: params,
					requestCompleteCallback: lang.hitch(this, function (response) {
						this.favoritesStructure = response.columns;
						this.favoritesMagazineStructure = response.magazineColumns;

						var itemsJSON = response.rows;

						if (itemsJSON) {
							var favorites = [];
							array.forEach(itemsJSON, function (item) {
								favorites.push(ecm.model.Favorite.createFromJSON(item))
							});
							this.favorites = favorites;
						} else {
							this.favorites = null;
						}

						this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function (callback) {
							callback(this.favorites, this.favoritesStructure, this.favoritesMagazineStructure);
						}));
					})
				};
				var request = this.invokeSharedRequest(sharedRequestParams);
			}

			this.logExit("loadFavorites");
			return request;
		},

		/**
		 * Loads an array of {@link ecm.model.SyncItem} objects for the current user within this desktop.
		 * 
		 * @since 2.0.3.5
		 * @param callback
		 *            A callback function for the caller to work with the list of sync items return from the server.
		 */
		loadSyncItems: function (callback) {
			this.logEntry("loadSyncItems");

			if (this.syncItems && this.syncItemsStructure && this.syncItemsMagazineStructure) {
				if (callback)
					callback(this.syncItems, this.syncItemsStructure, this.syncItemsMagazineStructure);
			} else {
				var params = {
					application: "navigator",
					userid: this.id + "." + this.getDefaultRepositoryId() + "." + this.getDefaultRepository().userId.toLowerCase()
				};

				var sharedRequestParams = {
					sharedRequestMethod: "loadSyncItems",
					sharedRequestCompleteCallback: callback,
					serviceName: "listSyncItems",
					requestParams: params,
					requestCompleteCallback: lang.hitch(this, function (response) {
						this.syncItemsStructure = response.columns;
						this.syncItemsMagazineStructure = response.magazineColumns;

						var itemsJSON = response.rows;

						if (itemsJSON) {
							var syncItems = [];
							array.forEach(itemsJSON, function (item) {
								syncItems.push(SyncItem.createFromJSON(item))
							});
							this.syncItems = syncItems;
						} else {
							this.syncItems = null;
						}

						this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function (callback) {
							callback(this.syncItems, this.syncItemsStructure, this.syncItemsMagazineStructure);
						}));
					})
				};
				var request = this.invokeSharedRequest(sharedRequestParams);
			}

			this.logExit("loadSyncItems");
			return request;
		},

		/**
		 * Adds a new favorite to the favorites list.
		 * 
		 * @param favorite
		 *            A {@link ecm.model.Favorite} object to add to the list.
		 * @param callback
		 *            A callback function called after the favorite item has been added.
		 */
		addFavorite: function (favorite, callback) {
			this.logEntry("addFavorite");
			var request = null;

			var params = {
				desktop: this.id,
				application: "navigator",
				action: "add",
				configuration: "FavoriteConfig",
				id: favorite.id,
				update_list_configuration: "UserConfig",
				update_list_id: this.id + "." + this.getDefaultRepositoryId() + "." + this.getDefaultRepository().userId.toLowerCase(),
				update_list_type: "favorites"
			};

			this.loadFavorites(lang.hitch(this, function (favorites) {
				var canAddFav = true;

				// First check to ensure we have not exceed the maximum number of favorites allowed per desktop
				if (favorites.length >= 100) {
					canAddFav = false;
					var msg = new Message({
						id: "id???",
						number: "",
						level: 4,
						text: this.messages.add_favorite_error,
						explanation: string.substitute(ecm.messages.add_favorite_max_reached, [
							100
						]),
						userResponse: ecm.messages.add_favorite_max_reached_response
					});
					this.addMessage(msg);
				} else { // Check to see if the item is already a favorite
					for (var i in favorites) {
						// For P8, don't allow adding new favorite from the same document version series so check the version series id.
						if (favorite.id == favorites[i].id || ((favorite.type == "document" || favorite.type == "search") && favorite.vsId && favorites[i].vsId == favorite.vsId)) {
							canAddFav = false;
							break;
						}
					}

					if (!canAddFav) {
						var msg = new Message({
							id: "id???",
							number: "",
							level: 0,
							text: ecm.messages.add_favorite_duplicate_error
						});
						this.addMessage(msg);
					}
				}

				if (canAddFav) {
					request = Request.postService("user", null, params, "text/json", favorite.toJSON(), lang.hitch(this, function (response) {
						this._addFavoriteCompleted(response, favorite, callback);
					}));
				} else {
					if (callback)
						callback(null);
				}
			}));

			this.logExit("addFavorite");
			return request;
		},

		/**
		 * Method called when adding a favorite returns successfully.
		 * 
		 * @private
		 */
		_addFavoriteCompleted: function (response, favorite, callback) {
			this.logEntry("_addFavoriteCompleted");

			if (favorite) {
				favorite.repositoryLabel = response.configuration.repositoryLabel;
				favorite.syncEnabled = response.configuration.syncEnabled;
				favorite.syncId = response.configuration.syncId;
				// No update on teamspaces				
				if (favorite.item && lang.isFunction(favorite.item.update)) {
					favorite.item.syncEnabled = favorite.syncEnabled;
					favorite.item.update(favorite.item);
				} else if (favorite.item && favorite.item instanceof ecm.model.Teamspace) {
					favorite.item.syncEnabled = favorite.syncEnabled;
					favorite.item.onChange(favorite.item);
				}

				if (!this.favorites)
					this.favorites = [];

				this.favorites.push(favorite);

				// Add to recent items list
				if (favorite.type && favorite.type == "teamspace") {
					favorite.item.repository.addRecentTeamspace(favorite.item);
				} else if (favorite.item) {
					favorite.item.repository.addRecentItem(favorite.item);
				}

				if (callback)
					callback(favorite);
				this.onFavoriteAdded(favorite);
			}

			this.logExit("_addFavoriteCompleted");
		},

		/**
		 * Event function called when a favorite is added.
		 * 
		 * @param favorite
		 *            A {@link ecm.model.Favorite} object that was added to the list.
		 */
		onFavoriteAdded: function (favorite) {
		},

		/**
		 * Updates a favorite in the favorites list.
		 * 
		 * @param favorite
		 *            A {@link ecm.model.Favorite} object to update.
		 * @param callback
		 *            A callback function called after the favorite item has been updated.
		 */
		updateFavorite: function (favorite, callback) {
			this.logEntry("updateFavorite");
			var params = {
				application: "navigator",
				action: "update",
				configuration: "FavoriteConfig",
				id: favorite.favoriteId ? favorite.favoriteId : favorite.id
			};
			var request = Request.postService("user", null, params, "text/json", favorite.toJSON(), lang.hitch(this, function (response) {
				this._updateFavoriteCompleted(response, favorite, callback);
			}));
			this.logExit("updateFavorite");
			return request;
		},

		/**
		 * @private Method called when updating a favorite returns successfully.
		 */
		_updateFavoriteCompleted: function (response, favorite, callback) {
			this.logEntry("_updateFavoriteCompleted");
			if (favorite && this.favorites) {
				for (var i in this.favorites) {
					if (this.favorites[i].id == favorite.id) {
						this.favorites[i].name = favorite.name;
						this.favorites[i].syncEnabled = favorite.syncEnabled;
						this.favorites[i].syncId = favorite.syncId;
					}
				}
				if (callback)
					callback(response, favorite);
				this.onFavoriteUpdated([
					favorite
				]);
			}
			this.logExit("_updateFavoriteCompleted");
		},

		/**
		 * Event function that is called when a favorite is updated.
		 * 
		 * @param favorite
		 *            A {@link ecm.model.Favorite} object to update.
		 */
		onFavoriteUpdated: function (favorite) {
		},

		/**
		 * Updates a sync item in the sync item list.
		 * 
		 * @param favorite
		 *            A {@link ecm.model.SyncItem} object to update.
		 * @param callback
		 *            A callback function called after the favorite item has been updated.
		 * @since 2.0.3.5
		 */
		updateSyncItem: function (syncItem, callback) {
			this.logEntry("updateSyncItem");
			var params = {
				application: "navigator",
				action: "update",
				configuration: "SyncItemConfig",
				id: syncItem.syncItemId ? syncItem.syncItemId : syncItem.id
			};
			var request = Request.postService("user", null, params, "text/json", syncItem.toJSON(), lang.hitch(this, function (response) {
				this._updateSyncItemCompleted(response, syncItem, callback);
			}));
			this.logExit("updateSyncItem");
			return request;
		},

		/**
		 * @private Method called when updating a sync item returns successfully.
		 */
		_updateSyncItemCompleted: function (response, syncItem, callback) {
			this.logEntry("_updateSyncItemCompleted");
			if (syncItem && this.syncItems) {
				for (var i in this.syncItems) {
					if (this.syncItems[i].id == syncItem.id) {
						this.syncItems[i].name = syncItem.name;
						this.syncItems[i].syncEnabled = syncItem.syncEnabled;
						this.syncItems[i].syncId = syncItem.syncId;
					}
				}
				if (callback)
					callback(response, syncItem);
				this.onSyncItemUpdated([
					syncItem
				]);
			}
			this.logExit("_updateSyncItemCompleted");
		},

		/**
		 * Event function that is called when a sync item is updated.
		 * 
		 * @param syncItem
		 *            A {@link ecm.model.SyncItem} object to update.
		 */
		onSyncItemUpdated: function (syncItem) {
		},

		/**
		 * Removes the specified favorites from the list.
		 * 
		 * @param favorites
		 *            An array of {@link ecm.model.Favorite} objects to remove.
		 * @param callback
		 *            A callback function that is called after the favorite items have been removed.
		 */
		removeFavorites: function (favorites, callback) {
			this.logEntry("removeFavorites");

			var ids = [];
			var vsIds = [];
			if (!lang.isArray(favorites)) {
				ids.push(favorites.id);
				vsIds.push(favorites.vsId);
			} else {
				for (var i in favorites) {
					ids.push(favorites[i].favoriteId ? favorites[i].favoriteId : favorites[i].id);
					vsIds.push(favorites[i].vsId);
				}
			}

			var params = {
				application: "navigator",
				action: "deleteFavorites",
				configuration: "FavoriteConfig",
				id: "nexus", // dummy but needed to get pass config checking.
				vsIds: dojojson.toJson(vsIds),
				ids: dojojson.toJson(ids),
				update_list_id: this.id + "." + this.getDefaultRepositoryId() + "." + this.getDefaultRepository().userId.toLowerCase()
			};

			var request = Request.postService("user", null, params, null, null, lang.hitch(this, function (response) {
				this._removeFavoritesCompleted(response, favorites, ids, callback);
			}));

			this.logExit("removeFavorites");
			return request;
		},

		/**
		 * @private Method called with removing from favorites returns successfully.
		 */
		_removeFavoritesCompleted: function (response, favoritesRemoved, ids, callback) {
			this.logEntry("_removeFavoritesCompleted");
			if (ids && this.favorites) {
				var tempArray = [];
				var removed = [];
				for (var i in this.favorites) {
					var favorite = this.favorites[i];
					var index = array.indexOf(ids, favorite.id);
					if (index == -1) {
						tempArray.push(favorite);
					} else {
						favorite.deleted = true;
						removed.push(favorite);
					}
				}
				this.favorites = tempArray;
				if (callback)
					callback(ids);
				this.onFavoritesRemoved(favoritesRemoved);
				//if (removed.length > 0) {
				//this.onFavoritesRemoved(removed);
				//}
			}
			this.logExit("_removeFavoritesCompleted");
		},

		/**
		 * Event function that is called when a favorite is removed.
		 * 
		 * @param favoritesRemoved
		 *            An array of strings holding the identifiers of the favorite items that have been removed.
		 */
		onFavoritesRemoved: function (favoritesRemoved) {
		},

		/**
		 * This event is triggered when a session expiration is detected.
		 * <p>
		 * The ecm.widget.dialog.LoginDialog can be connected to listen to this event and will display the login dialog
		 * on the event of a session expiration.
		 * 
		 * @param request
		 *            An instance of {@link ecm.model.Request} for the request that failed. To retry the request after
		 *            login, use request.retry().
		 * @param error
		 *            An instance of {@link ecm.model.Message} that is the error message.
		 */
		onSessionExpired: function (request, error) {
			this.logDebug("onSessionExpired");
		},

		/**
		 * @private
		 */
		_fireOnLogin: function (repository) {
			this.onLogin(repository);
		},

		/**
		 * This event is triggered when the initial repository is connected.
		 * 
		 * @param repository
		 *            An instance of {@link ecm.model.Repository} for the initial repository connected.
		 */
		onLogin: function (repository) {
			this.logDebug("onLogin");
		},

		/**
		 * This event is triggered when the initial repository is disconnected.
		 * 
		 * @param repository
		 *            The initial repository, now disconnected.
		 */
		onLogout: function (repository) {
			this.logDebug("onLogout");
		},

		/**
		 * Log off the desktop repositories.
		 * 
		 * @param response
		 *            A response parameter.
		 */
		logOffRepositories: function (response) {
			this.logEntry("logOffRepositories");

			var repos = this.repositories;
			if (repos) {
				for (var i in repos) {
					var repository = repos[i];
					if (repository && repository.connected)
						repository._logoffCompleted(response);
				}
			}

			var repos = this._adminRepositories;
			if (repos) {
				for (var i in repos) {
					var repository = repos[i];
					if (repository && repository.connected)
						repository._logoffCompleted(response);
				}
			}
			this.logExit("logOffRepositories");
		},

		/**
		 * Return the configured label value.
		 * 
		 * @param key
		 *            A string value holding the key of the string to return.
		 */
		getConfiguredLabelsvalue: function (key) {
			if (this.configuredLabels) {
				return this.configuredLabels.getLabelValue(key, kernel.locale);
			} else {
				return ecm.messages[key];
			}
		},

		/**
		 * Return the configured labels for the desktop.
		 * 
		 * @param callback
		 *            A callback function that is called with an array of configured label values.
		 */
		getConfiguredLabels: function (callback) {
			callback(this.configuredLabels);
		},

		/**
		 * An event function that is called when the status dialog is displayed.
		 */
		onDisplayStatusDialog: function (statusDialog) {
		},

		/**
		 * An event function that is called when the status dialog is hidden.
		 */
		onHideStatusDialog: function (statusDialog) {
		},

		/**
		 * An event function that is called when the batch status dialog is displayed.
		 */
		onDisplayBatchStatusDialog: function () {
		},

		/**
		 * An event function that is called when the batch status dialog is hidden.
		 */
		onHideBatchStatusDialog: function () {
		},
		/**
		 * An event function that is called when upload progress is changed.
		 */
		onChangeUploadProgress: function (evt) {
		},
		/**
		 * An event function that is called when upload progress is completed.
		 */
		onCompleteUploadProgress: function (evt) {
		},

		/**
		 * An event function that is called prior to logout of the initial repository or close of the browser window.
		 * 
		 * @param events
		 *            An array of strings containing messages describing objects being edited or information that will
		 *            be lost when the logout or close is performed. The array is initially empty. Event handlers can
		 *            add messages to the array. If any messages are added, the confirmation dialog shown before logout
		 *            or the browsers on-before-unload dialog will display these messages.
		 */
		onBeforeClose: function (events) {
		},

		/**
		 * This function reloads the desktop URL.
		 * 
		 * @param logoutUrl
		 *            If a logoutUrl is provided, the logoutUrl is loaded to process the logout before the desktop is
		 *            reloaded.
		 * @since 2.0.3.3
		 */
		reloadDesktop: function (logoutUrl) {
			this.logEntry("reloadDesktop");
			// Reload the desktop.
			if (!Desktop._reload) {
				Desktop._reload = true;
				this.logInfo("reloadDesktop", "Reloading the desktop");

				// Hide the desktop layout then show the loading animation with the reloading message.
				var layout = this.getLayout();
				if (layout && layout.domNode) {
					domStyle.set(layout.domNode, "display", "none");
					var loadingAnimation = dom.byId("ECMWebUIloadingAnimation");
					if (loadingAnimation) {
						var node = dom.byId("ECMWebUIloadingText");
						if (node) {
							node.innerHTML = ecm.messages.progress_message_desktop_reload;
						}
						domStyle.set(loadingAnimation, "display", "");
					}
				}

				setTimeout(lang.hitch(this, function () {
					var cookies = document.cookie;
					// Clear any redirect cookies. They will be set to the last action or resource retrieve that failed,
					// interfering with the desktop load redirect.
					if (cookies) {
						cookies = cookies.split(";");
						array.forEach(cookies, function (cookie) {
							var equals = cookie.indexOf("=");
							var cookieName = cookie.substring(0, (equals > 0) ? equals : 0).trim();
							var cookieNameLC = cookieName.toLowerCase();
							array.forEach(Desktop.formBasedAuthRedirectCookies, function (redirectCookie) {
								if (cookieNameLC == redirectCookie.toLowerCase()) {
									document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
									document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
								}
							});
						});
					}
					if (logoutUrl) {
						var iframe = document.createElement("iframe");
						iframe.style.display = "none";
						var onLogoutLoad = function () {
							setTimeout(function () {
								document.body.removeChild(iframe);
								delete iframe;
								window.self.location.reload(true);
							}, 100); // Allow some time for the logout processing.
						};
						if (iframe.addEventListener) {
							iframe.addEventListener("load", onLogoutLoad, false);
						} else if (iframe.attachEvent) {
							iframe.attachEvent("onload", onLogoutLoad);
						}
						iframe.src = logoutUrl;
						document.body.appendChild(iframe);
					} else {
						window.self.location.reload(true);
					}
				}), 100);
			} else {
				this.logInfo("reloadDesktop", "The desktop is already reloading");
			}
			this.logExit("reloadDesktop");
		},

		/**
		 * Returns a boolean true value if the desktop is reloading.
		 * 
		 * @since 2.0.3.3
		 */
		isReloading: function () {
			return !!Desktop._reload;
		}
	});

	/**
	 * The name of the cookie used to store the selected language locale.
	 * 
	 * @since 2.0.2
	 */
	Desktop.cookieLocaleLanguage = "icn_locale_language";

	/**
	 * The name of the cookie used to store the selected value format locale.
	 * 
	 * @since 2.0.2
	 */
	Desktop.cookieLocaleValueFormat = "icn_locale_format";

	/**
	 * The name of the cookie used to store the bidi support flag.
	 * 
	 * @since 2.0.3
	 */
	Desktop.cookieBidiSupportFlag = "icn_bidi_support_flag";

	/**
	 * The name of the cookie used to store the base text direction preference
	 * 
	 * @since 2.0.3
	 */
	Desktop.cookieTextDirection = "icn_text_direction";

	/**
	 * The name of the cookie used to store the calendar type preference
	 * 
	 * @since 2.0.3
	 */
	Desktop.cookieCalendarType = "icn_calendar_type";

	/**
	 * The names of site login page redirect request URL cookies. These cookies are removed when
	 * <code>reloadDesktop</code> is called.
	 * 
	 * @since 2.0.3.3
	 */
	Desktop.formBasedAuthRedirectCookies = [
		"WasSamlSpReqURL"
	];

	/**
	 * @name ecm.model.desktop .
	 * @description A global instance of {@link ecm.model.Desktop} for the IBM Content Navigator toolkit.
	 */
	ecm.model.desktop = new Desktop({
		id: "default",
		name: "Default Desktop"
	});
	return ecm.model.desktop;
});

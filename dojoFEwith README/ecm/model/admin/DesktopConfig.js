/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define(
		[ "dojo/_base/declare", "dojo/_base/lang", "dojo/_base/array",
				"dojo/_base/json", "./_ConfigurationObject", "./ServerConfig",
				"./RepositoryConfig", "./AdminRoleConfig" ],
		function(declare, lang, array, dojojson, _ConfigurationObject,
				ServerConfig, RepositoryConfig, AdminRoleConfig) {

			/**
			 * @name ecm.model.admin.DesktopConfig
			 * @class Represents the configuration information for a desktop.
			 *        This information includes the following information for
			 *        the desktop:
			 *        <ul>
			 *        <li>URLs to login information and password rules</li>
			 *        <li>Banner configuration</li>
			 *        <li>Repositories that are supported by the desktop,
			 *        including the various default repositories</li>
			 *        <li>The servers that this desktop connects to</li>
			 *        <li>The layout that is used for this desktop</li>
			 *        <li>The features that are available in this desktop</li>
			 *        <li>A flag that indicates whether this desktop is the
			 *        default desktop</li>
			 *        <li>A flag indicating that the desktop has access control
			 *        enabled</li>
			 *        </ul>
			 * @augments ecm.model.admin._ConfigurationObject
			 * @public
			 */
			var DesktopConfig = declare(
					"ecm.model.admin.DesktopConfig",
					[ _ConfigurationObject ],
					{
						/** @lends ecm.model.admin.DesktopConfig.prototype */

						SHOW_FIELD_HOVER_HELP : "showFieldHoverHelp",

						/**
						 * @private property name of application name. Specify
						 *          the name to display for the application in
						 *          the banner.
						 */
						APPLICATION_NAME : "applicationName",

						/**
						 * @private property name of the theme applied to this
						 *          desktop. The theme refers to a custom theme
						 *          created using the theme generator
						 *          administration UI. A theme provides an
						 *          overlay that overrides some of the styling
						 *          in the user interface.
						 * @since 2.0.3
						 */
						THEME : "theme",

						/**
						 * @private property name of Login page logo URL. If the
						 *          logo is on the same web application server
						 *          as the web client, enter a relative URL for
						 *          example: /mycustomizations/login_logo.png.
						 *          The logo should be no larger than 200 pixels
						 *          wide and 150 pixels high. It is recommended
						 *          that the logo have a transparent background.
						 * @deprecated As of 2.0.3. Use the theme generator to
						 *             set the login logo.
						 */
						LOGIN_LOGO_URL : "loginLogoUrl",

						/**
						 * @private property name of Banner logo URL. URL of the
						 *          logo file. If the logo is on the same web
						 *          application server as the web client, enter
						 *          a relative URL, for example:
						 *          /mycustomizations/banner_logo.png The logo
						 *          should be no larger than 72 pixels wide and
						 *          36 pixels high. It is recommended that the
						 *          logo have a transparent background.
						 * @deprecated As of 2.0.3. Use the theme generator to
						 *             banner logo.
						 */
						BANNER_LOGO_URL : "bannerLogoUrl",

						/**
						 * @private property name of Banner background color.
						 *          Specify the color of the application banner
						 *          as a hexadecimal color.
						 * @deprecated As of 2.0.3. Use the theme generator to
						 *             set brand color, which will override the
						 *             banner color.
						 */
						BANNER_BACKGROUND_COLOR : "bannerBackgroundColor",

						/**
						 * @private property name of application name text
						 *          color. Specify the color of the application
						 *          name as a hexadecimal color.
						 * @deprecated As of 2.0.3. Use the theme generator to
						 *             set brand color, which will override the
						 *             application name color.
						 */
						BANNER_APPLICATION_NAME_COLOR : "bannerApplicationNameColor",

						/**
						 * @private property name of Banner icon color. If you
						 *          change the background color of the banner,
						 *          you might need to change the color scheme of
						 *          the icons in the banner to make them more
						 *          visible. Specify whether to display the
						 *          light or dark version of the banner icons.
						 * @deprecated As of 2.0.3. Use the theme generator to
						 *             set brand color, which will override the
						 *             banner menu color.
						 */
						BANNER_MENU_COLOR : "bannerMenuColor",

						/**
						 * @private property name of Login page content URL.
						 *          Enter the URL of the login page content. If
						 *          the content is on the same web application
						 *          server as the web client, enter a relative
						 *          URL, for example:
						 *          /mycustomizations/login_notices.html
						 */
						LOGIN_INFORMATION_URL : "loginInformationUrl",

						/**
						 * @private property name of password rules URL. URL of
						 *          the password rules content. If the content
						 *          is on the same web application server as the
						 *          web client, enter a relative URL
						 */
						PASSWORD_RULES_URL : "passwordRulesUrl",

						/**
						 * @private property name of layout. The layout
						 *          specifies which features can be displayed in
						 *          the web client and how the contents of the
						 *          web client are arranged. Tip: You can define
						 *          custom layouts by creating plug-ins. You
						 *          must register the plug-in in the
						 *          administration tool before you can select a
						 *          custom layout.
						 */
						LAYOUT : "layout",

						/**
						 * @private property name of displayed features. Select
						 *          which features are displayed in this
						 *          desktop. This is an array of feature id.
						 */
						FEATURES : "features",

						/**
						 * @private property name of default features id. Select
						 *          which feature is the default feature in this
						 *          desktop.
						 */
						DEFAULT_FEATURE : "defaultFeature",

						MESSAGE_SEARCH_URL : "messageSearchUrl",

						/**
						 * @private list of plug-ins mapped to this desktop
						 *          instance.
						 * @since 2.0.3.7
						 */
						PLUGIN_IDS : "pluginIds",
						ENABLE_ALL_PLUGINS : "enableAllPlugins",

						HELP_URL : "helpUrl",
						KC_HELP_TAXONOMY : "kcHelpTax",
						KC_HELP_CONTEXT : "kcHelpContext",
						KC_HELP_WELCOME_FILE : "kcHelpWelcome",

						REPOSITORIES : "repositories",
						SERVERS : "servers",
						NAME : "name",

						/**
						 * @private property name of desktop description.
						 */
						DESCRIPTION : "description",

						/**
						 * @private property name of default desktop.
						 */
						IS_DEFAULT : "isDefault",

						/**
						 * @private property name of requiring users to select a
						 *          folder when adding documents and folders to
						 *          the repository. If you do not select this
						 *          option, users can add documents and folders
						 *          to the root folder. This applied to IBM
						 *          Content Manager and FileNet P8 users only.
						 */
						FILE_INTO_FOLDER : "fileIntoFolder",

						/**
						 * @private property name of allowing users to edit the
						 *          security of documents and folders when
						 *          adding or checking in items to this desktop.
						 *          This applied to IBM FileNet P8 users only.
						 */
						SHOW_SECURITY : "showSecurity",

						SHOW_SECURITY_INHERITANCE_UI : "showSecurityInheritanceUI",

						LAYOUT_ACTION_HANDLER : "actionHandler",

						LAYOUT_LOG_FILE : "layoutLogFile",

						TEAMSPACES_DEFAULT_REPOSITORY : "teamspacesDefaultRepository",

						WORK_DEFAULT_REPOSITORY : "workDefaultRepository",

						ENTRY_TEMPLATES_DEFAULT_REPOSITORY : "entryTemplatesDefaultRepository",

						OTHER_FEATURES_DEFAULT_REPOSITORY : "otherFeaturesDefaultRepository",

						SHOW_THUMBNAILS : "showThumbnails",

						SHOW_VIEWFILMSTRIP : "showViewFilmstrip",

						SHOW_GLOBETOOLBAR : "showGlobalToolbar",

						SHOW_STATUSBAR : "showStatusbar",

						DEFAULT_REPOSITORY : "defaultRepository",

						/**
						 * @private property name of the viewer map specifies
						 *          which viewer is used to open different types
						 *          of documents on the repository.
						 */
						VIEWER : "viewer",

						APPLICATION_SPACE_LABELS : "appSpaceLabels",

						APPLICATION_NAME_LABELS : "appNameLabels",

						/**
						 * @private property name of workflow can be open by the
						 *          email notification. True if you want to
						 *          enable users to open the web client from the
						 *          URLs that are included in email
						 *          notifications that are generated by Process
						 *          Engine. If you do not enable this option for
						 *          any desktops, users cannot log into the web
						 *          client from the URLs in notifications. If
						 *          you enable this option on multiple desktops
						 *          and more than one desktop meets the criteria
						 *          that are specified in the URL in the
						 *          notification, the web client uses the first
						 *          desktop that matches the criteria. This
						 *          applied to FileNet P8 users only.
						 */
						SUPPORT_WORKFLOW_NOTIFICATION : "workflowNotification",

						PREVENT_CREATE_NEW_SEARCH : "preventCreateNewSearch",
						PREVENT_CREATE_NEW_UNIFIED_SEARCH : "preventCreateNewUnifiedSearch",

						/**
						 * @private Property name of the option to hide the
						 *          entry template not found warning when item
						 *          properties are edited.
						 */
						HIDE_ENTRY_TEMPLATE_NOT_FOUND_WARNING : "hideEntryTemplateNotFoundWarning",
						
						SHOW_ROLE_SECURITY : "showRoleSecurity",
						
						SHOW_PRIMARY_DOCUMENT_ONLY: "showPrimaryDocumentOnly", 

						/**
						 * @private property name of the maximum number of
						 *          documents that users can add at a time. The
						 *          default maximum is 50. However, you can set
						 *          the maximum up to 300.
						 */
						
						
						MAX_NUMBER_DOC_TO_ADD : "maxNumberDocToAdd",

						/**
						 * @private property for the threshold to switch
						 *          controls in NIMO for single value choice
						 *          list The default threshold is 50. However,
						 *          you can set the maximum up to 300.
						 * @since 2.0.3.6
						 */
						CONTROL_THRESHOLD : "controlThreshold",

						/**
						 * @private property name of the maximum content size of
						 *          the documents users can send to the server
						 *          for conversion routines. The default maximum
						 *          is 50 MB. However you can set the maximum up
						 *          to 250.
						 * @since 2.0.3
						 */
						MAX_CONVERSION_SIZE : "maxConversionSize",

						/**
						 * @private property name of the maximum number of
						 *          documents that users can modify at a time.
						 *          The default maximum is 50. However, you can
						 *          set the maximum up to 300.
						 */
						MAX_NUMBER_DOC_TO_MODIFY : "maxNumberDocToModify",

						AUTHENTICATION_TYPE : "authenticationType",

						/**
						 * @private an MS Office configuration property name to
						 *          automatically check out a document when it
						 *          is opened.
						 */
						CHECKOUT_ON_OPEN_DOC : "checkoutOnOpenDoc",

						/**
						 * @private an MS Office configuration property name to
						 *          prompt for check in when closing Office
						 *          applications.
						 */
						PROMPT_CLOSING_OFFICE : "promptCloseOffice",

						/**
						 * @private an MS Office configuration property name to
						 *          delete local files when users add a
						 *          document:
						 */
						DELETE_LOCAL_ON_ADD : "deleteLocalOnAdd",

						/**
						 * @private an MS Office configuration property name to
						 *          delete local files when users checkin a
						 *          document:
						 * @since 2.0.3.5
						 */
						DELETE_LOCAL_ON_CHECKIN : "deleteLocalOnCheckin",

						/**
						 * @private an MS Office configuration property name to
						 *          delete local files when users save a
						 *          document:
						 */
						DELETE_LOCAL_ON_SAVE : "deleteLocalOnSave",

						/**
						 * @private an MS Office configuration property name to
						 *          require users to add documents by using
						 *          entry templates.
						 */
						ADD_WITH_ENTRY_TEMPLATE_ONLY : "addWithEntryTemplateOnly",

						/**
						 * @private an MS Outlook integration property name to
						 *          prompt users to provide property values when
						 *          they add emails to the repository.
						 */
						PROMPT_FOR_PROPERTIES_ON_ADD : "promptForPropsOnAdd",

						/**
						 * @private an MS Outlook integration property name to
						 *          delete email from the email server when that
						 *          email is added to the repository.
						 */
						DELETE_EMAIL_ON_ADD : "deleteEmailOnAdd",

						/**
						 * @private an MS Outlook integration property name to
						 *          assign email from the email server to the
						 *          "Added to ICN" category when that email is
						 *          added to the repository.
						 */
						INDICATE_MANAGED_EMAIL_ON_ADD : "indicateManagedEmailOnAdd",

						/**
						 * @private an MS Outlook integration property name to
						 *          prevent users from sending documents as
						 *          attachments.
						 */
						SEND_EMAIL_AS_LINK_ONLY : "sendEmailAsLinkOnly",

						/**
						 * @since 2.0.3
						 * @private an MS office locale setting.
						 */
						OFFICE_BIDI_SUPPORT_FLAG : "officeBidiSupportFlag",

						/**
						 * @since 2.0.3
						 * @private an MS office locale setting.
						 */
						OFFICE_TEXT_DIRECTION : "officeTextDirection",

						/**
						 * @private an MS Office integration property name to
						 *          map Office properties to repository
						 *          properties when users add or check in
						 *          documents
						 */
						ENABLE_PROP_MAPPING_FOR_ADD : "enablePropMappingForAdd",

						/**
						 * @private an MS Office integration property name to
						 *          disable the default document type filtering
						 *          for Word, Excel, and Powerpoint
						 */
						DISABLE_DOCUMENT_TYPE_FILTERING : "disableDocumentTypeFiltering",

						/**
						 * @private an MS Office integration property name to
						 *          show the details in recently used for all
						 *          office applications,
						 * @since 2.0.3.5
						 */
						SHOW_DETAILS_RECENTLY_USED : "showDetailsRecentlyUsed",

						/**
						 * @private an MS Office integration property name to
						 *          hide the permissions warning on checkin or
						 *          show properties when the user has no
						 *          permissions to the entry template add office
						 *          applications,
						 * @since 2.0.3.5
						 */
						SHOW_NO_PREMISSIONS_WARNING : "showNoPermissionsWarning",

						/**
						 * @private an MS Office integration property name to
						 *          hide search actions for all office
						 *          applications,
						 * @since 2.0.3.5
						 */
						HIDE_SEARCH_ACTIONS : "hideSearchActions",

						/**
						 * @private a MS Office integration, hide the save
						 *          document on the ribbon bar
						 */
						HIDE_SAVE_DOCUMENT : "hideSaveDocument",

						/**
						 * @private an MS Office integration property name to
						 *          control the Edit Group Add button visibility
						 */
						EDIT_GROUP_ADD_BUTTON_SETTING : "editGroupAddButtonState",

						/**
						 * @private an MS Outlook integration property name to
						 *          control whether documents that are opened
						 *          are automatically deleted after they are
						 *          closed
						 */
						DELETE_OPEN_DOCS_AFTER_CLOSE : "deleteOpenDocsAfterClose",

						/**
						 * @private an MS Office integration property name to
						 *          control a automatic checkout after an add
						 * @since 2.0.3.5
						 */
						CHECKOUT_DOCUMENT_AFTER_ADD : "checkoutDocumentAfterAdd",

						/**
						 * @private an MS Office configuration property name to
						 *          set the Office custom command group.
						 * @since 2.0.3
						 */
						OFFICE_CUSTOM_COMMAND_GROUP_NAME : "officeCustomCommandGroupName",

						/**
						 * @private an MS Office configuration property name to
						 *          set the Office ribbon bar title.
						 * @since 2.0.3
						 */
						RIBBON_TAB_LABEL : "ribbonTabLabel",

						/**
						 * @private an MS Office configuration property name to
						 *          automatically close the task pane after
						 *          opening a document.
						 * @since 2.0.3
						 */
						CLOSE_TASK_PANE_ON_OPEN : "closeTaskPaneOnOpen",

						/**
						 * @private an Mobile settings property name to allow
						 *          Mobile application user to access this
						 *          desktop
						 */
						MOBILE_APP_ACCESS : "mobileAppAccess",

						/**
						 * @private an Mobile settings property name to allow
						 *          Mobile application to add photos from the
						 *          camera and photo library
						 */
						ADD_PHOTO_FROM_MOBILE : "addPhotoFromMobile",

						/**
						 * @private an Mobile settings property name to allow
						 *          Mobile application to add documents and
						 *          create folders to the repository
						 */
						ADD_DOC_FOLDERS_TO_REPO : "addDocFoldersToRepo",

						/**
						 * @private an Mobile settings property name to allow
						 *          Mobile application to open documents in
						 *          other applications
						 */
						OPEN_DOC_FROM_OTHER_APP : "openDocFromOtherApp",

						/**
						 * @private an status indicator of this desktop that if
						 *          this desktop was imported but missing some
						 *          required properties this value will be false
						 */
						IS_VALID : "isValid",

						/**
						 * @private an status indicator of this desktop that if
						 *          this desktop was saved with warnings.
						 */
						IS_WARN : "isWarn",

						/**
						 * @private indicates that access control is enabled.
						 *          The DesktopAccessConfig object related to
						 *          this desktop will control lists of
						 *          users/groups that have access to the
						 *          desktop.
						 */
						ACCESS_CONTROL_ENABLED : "accessControlEnabled",

						/**
						 * @private indicated that time zone setting is disabled
						 */
						ENABLE_TIME_ZONE : "enableTimeZone",

						/**
						 * @private indicated the UTC offset value when the time
						 *          zone setting is enabled
						 */
						TIME_ZONE_UTC_OFFSET : "timeZoneUTCOffset",

						/**
						 * @private indicated whether to hide the time/date
						 *          properties during edit scenarios
						 */
						ENABLE_HIDE_TIME_PORTION : "enableHideTimePortion",

						/**
						 * @private file tracking property to control enabling
						 *          or disabling file tracking feature
						 */
						ENABLE_FILE_TRACKING : "enableFileTracking",

						/**
						 * @private file tracking property to track file
						 *          download location type
						 */

						FILE_TRACKING_LOCATION : "fileTrackingLocation",

						/**
						 * @private a file tracking property to track file
						 *          download location
						 */

						QUALIFIED_PATH : "qualifiedPath",

						/**
						 * @private a file tracking property to track file
						 *          download location specified as an
						 *          Environment Variable
						 */

						ENVIRONMENT_VARIABLE : "envVariable",

						/**
						 * @private a file tracking property that controls if
						 *          the local copy of a file is to be deleted on
						 *          check/add
						 */
						DELETE_LOCAL_COPY : "deleteLocalCopy",

						/**
						 * @private a file tracking property that controls if
						 *          the run time state of the delete local copy
						 *          setting can be changed
						 */
						DELETE_LOCAL_COPY_RUNTIME_STATE : "deleteLocalCopyRuntimeState",

						/**
						 * @private file tracking property that specifies if a
						 *          an external application is launched to open
						 *          a file upon check out and download.
						 */
						OPEN_FILE : "openFile",

						/**
						 * *
						 * 
						 * @private file tracking property that specifies if a
						 *          path component has to be appended check out
						 *          and download.
						 */
						APPEND_PATH_COMPONENT : "appendPathComponent",

						/**
						 * @private a file tracking property that controls if
						 *          the local copy of a file is to be
						 *          overwritten
						 */
						OVER_WRITE_FILE : "overWriteFile",

						/**
						 * @private a file tracking property that controls if
						 *          the run time state of the overwrite file
						 *          setting can be overridden
						 */

						OVER_WRITE_FILE_RUNTIME_STATE : "overWriteFileRuntimeState",

						/**
						 * @since 2.0.3
						 */
						SYNC_ENABLED : "syncEnabled",

						/**
						 * @since 2.0.3.5
						 */
						SHARE_ENABLED : "shareEnabled",

						/**
						 * @since 2.0.3.8
						 */
						STREAMLINE_ENABLED : "streamlineEnabled",

						/**
						 * @since 3.0.1
						 */
						EDIT_WIN_CLIENT_INSTALLER_AVAILABLE : "editWinClientInstallerAvailable",
						
						/**
						 * @since 3.0.3
						 */
						EDIT_MAC_CLIENT_INSTALLER_AVAILABLE : "editMacClientInstallerAvailable",

						/**
						 * @since 3.0.1
						 */
						MOBILEQR_ENABLED : "mobileQREnabled",

						/**
						 * @since 2.0.3.5
						 */
						SHARE_REPOSITORY : "shareRepository",

						/**
						 * @since 2.0.3.5
						 */
						SHARE_MY_EMAIL_MODIFIABLE : "shareMyEmailModify",

						/**
						 * @since 2.0.3.8
						 */
						EMAIL_SERVICE_ENABLED : "emailServiceEnabled",

						/**
						 * @since 2.0.3.8
						 */
						FROM_EMAIL_MODIFIABLE : "fromEmailModifiable",

						/**
						 * @since 2.0.3.8
						 */
						USE_FROM_EMAIL_AS_SENDER : "useFromEmailAsSender",

						/**
						 * @since 2.0.3.5
						 * @private is a CSS value to theme ICN mobile
						 *          application
						 */
						MOBILE_BRANDING_MAIN_COLOR : "mobileBrandingMainColor",

						/**
						 * @since 2.0.3.5
						 * @private is a CSS value to theme ICN mobile
						 *          application
						 */
						MOBILE_BRANDING_SECONDARY_COLOR : "mobileBrandingSecondaryColor",

						/**
						 * @since 2.0.3.5
						 * @private a boolean value that indicate if Maas360 has
						 *          been enabled or not
						 */
						MOBILE_MAAS360_ENABLED : "mobileMaaS360Enabled",

						/**
						 * @since 2.0.3.5
						 * @private MaaS360 developer ID.
						 */
						MOBILE_MAAS360_DEVELOPER_ID : "mobileMaaS360DeveloperID",

						/**
						 * @since 2.0.3.5
						 * @private MaaS360 License key. Need both developer ID
						 *          and License key to connect to MaaS360
						 */
						MOBILE_MAAS360_LICENSE_KEY : "mobileMaaS360LicenseKey",

						/**
						 * @since 2.0.3.5
						 * @private This email address will be used in the
						 *          mobile app when a mobile user clicks "Send
						 *          Error Report" from the app
						 */
						MOBILE_EMAIL_ADDRESS : "mobileEmailAddress",

						/**
						 * @since 2.0.3.7
						 * @private A string value that specifies the default
						 *          save mode for ViewONE Virtual viewer
						 *          redaction
						 */
						REDACTION_SAVE_MODE : "redactionSaveMode",

						/**
						 * @since 2.0.3.7
						 * @private a string value specify the default add
						 *          document mode for ViewONE Virtual viewer
						 *          redaction
						 * @deprecated 3.0.1 Replaced by DOCUMENT_ADD_MODE.
						 */
						REDACTION_ADD_DOCUMENT_MODE : "redactionAddDocumentMode",

						/**
						 * @since 3.0.1 Replaces REDACTION_ADD_DOCUMENT_MODE:
						 *        "redactionAddDocumentMode"
						 * 
						 * @private A string value that specifies the default
						 *          document add mode (standard or
						 *          entryTemplate).
						 */
						DOCUMENT_ADD_MODE : "documentAddMode",

						/**
						 * @since 3.0
						 * @private a boolean value to specify whether property
						 *          values are remembered in outlook integration
						 */
						OUTLOOK_PROPERTY_REMEMBRANCE : "outlookPropertyRemembrance",

						/**
						 * @since 3.0
						 * @private a boolean value to specify whether office
						 *          online service is enabled.
						 */
						OFFICE_ONLINE_ENABLED : "officeOnlineEnabled",

						/**
						 * @since 3.0
						 * @private a boolean value to specify whether to allow
						 *          collaborative editing for Office online
						 */
						ALLOW_COLLABORATIVE_EDITING : "allowCollaborativeEditing",

						/**
						 * @since 3.0.1
						 * @private a boolean value to specify whether merge and
						 *          split is enabled.
						 */
						MERGE_AND_SPLIT_ENABLED : "mergeSplitEnabled",
						MERGE_AND_SPLIT_SHOW_CHECK_IN : "mergeSplitShowCheckIn",
						
						/**
						 * @since 3.0.3
						 * @private Admin role for the desktop
						 */
						ADMIN_ROLE_ID: "adminRoleId",
						
						/**
						 * @since 3.0.3
						 * @private A boolean indicating role based administration is enabled on the desktop.
						 */
						ROLE_BASED_ADMIN_ENABLED: "adminAccessControlEnabled",
						

						/**
						 * @since 3.0.2
						 * @private a boolean value to specify whether printing using the 
						 *         printer service is enabled.
						 */
						PRINT_SERVICE_ENABLED : "printServiceEnabled",
						
						/**
						 * @private property name of the maximum number of
						 *          documents that users can print at a time.
						 * @since 3.0.3
						 */
						MAX_NUMBER_DOC_TO_PRINT : "maxNumberDocToPrint",

						constructor : function(id, name) {
							this.logDebug("DesktopConfig constructor");
						},

						getShowFieldHoverHelp : function() {
							return this.getValue(this.SHOW_FIELD_HOVER_HELP);
						},

						setShowFieldHoverHelp : function(showFieldHoverHelp) {
							this.setValue(this.SHOW_FIELD_HOVER_HELP,
									showFieldHoverHelp);
						},

						getPasswordRulesUrl : function() {
							return this.getValue(this.PASSWORD_RULES_URL);
						},

						setPasswordRulesUrl : function(passwordRulesUrl) {
							this.setValue(this.PASSWORD_RULES_URL,
									passwordRulesUrl);
						},

						getTheme : function() {
							return this.getValue(this.THEME);
						},

						setTheme : function(theme) {
							this.setValue(this.THEME, theme);
						},

						/**
						 * @since 2.0.3.5
						 */
						getMobileBrandingMainColor : function() {
							return this
									.getValue(this.MOBILE_BRANDING_MAIN_COLOR);
						},

						setMobileBrandingMainColor : function(value) {
							this.setValue(this.MOBILE_BRANDING_MAIN_COLOR,
									value);
						},

						getMobileBrandingSecondaryColor : function() {
							return this
									.getValue(this.MOBILE_BRANDING_SECONDARY_COLOR);
						},

						setMobileBrandingSecondaryColor : function(value) {
							this.setValue(this.MOBILE_BRANDING_SECONDARY_COLOR,
									value);
						},

						getMobileMaaS360Enabled : function() {
							var bool = false;
							var enabled = this
									.getValue(this.MOBILE_MAAS360_ENABLED);
							if (enabled == true || enabled == "true") {
								bool = true;
							}
							return bool;
						},

						setMobileMaaS360Enabled : function(enabled) {
							enabled = (enabled === true || enabled == "true");
							this.setValue(this.MOBILE_MAAS360_ENABLED,
									enabled ? "true" : "false");
						},

						getMobileMaaS360DeveloperID : function() {
							return this
									.getValue(this.MOBILE_MAAS360_DEVELOPER_ID);
						},

						setMobileMaaS360DeveloperID : function(value) {
							this.setValue(this.MOBILE_MAAS360_DEVELOPER_ID,
									value);
						},

						getMobileMaaS360LicenseKey : function() {
							return this
									.getValue(this.MOBILE_MAAS360_LICENSE_KEY);
						},

						setMobileMaaS360LicenseKey : function(value) {
							this.setValue(this.MOBILE_MAAS360_LICENSE_KEY,
									value);
						},

						getMobileEmailAddress : function() {
							return this.getValue(this.MOBILE_EMAIL_ADDRESS);
						},

						setMobileEmailAddress : function(value) {
							this.setValue(this.MOBILE_EMAIL_ADDRESS, value);
						},

						/**
						 * @since 2.0.3
						 */
						getSyncEnabled : function() {
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
						setSyncEnabled : function(syncEnabled) {
							syncEnabled = (syncEnabled === true || syncEnabled == "true");
							this.setValue(this.SYNC_ENABLED,
									syncEnabled ? "true" : "false");
						},

						/**
						 * @since 2.0.3.8
						 */
						getStreamlineEnabled : function() {
							var bool = false;
							var streamlineEnabled = this
									.getValue(this.STREAMLINE_ENABLED);
							if (streamlineEnabled == true
									|| streamlineEnabled == "true") {
								bool = true;
							}
							return bool;
						},

						/**
						 * @since 2.0.3.8
						 */
						setStreamlineEnabled : function(streamlineEnabled) {
							streamlineEnabled = (streamlineEnabled === true || streamlineEnabled == "true");
							this.setValue(this.STREAMLINE_ENABLED,
									streamlineEnabled ? "true" : "false");
						},

						/**
						 * @since 3.0.1
						 */
						getEditWinClientInstallerAvailable : function() {
							var bool = false;
							var editWinClientInstallerAvailable = this
									.getValue(this.EDIT_WIN_CLIENT_INSTALLER_AVAILABLE);
							if (editWinClientInstallerAvailable == true
									|| editWinClientInstallerAvailable == "true") {
								bool = true;
							}
							return bool;
						},
						
						/**
						 * @since 3.0.3
						 */
						getEditMacClientInstallerAvailable : function() {
							var bool = false;
							var editMacClientInstallerAvailable = this
									.getValue(this.EDIT_MAC_CLIENT_INSTALLER_AVAILABLE);
							if (editMacClientInstallerAvailable == true
									|| editMacClientInstallerAvailable == "true") {
								bool = true;
							}
							return bool;
						},

						/**
						 * @since 3.0.1
						 */
						getMobileQREnabled : function() {
							var bool = false;
							var mobileQREnabled = this
									.getValue(this.MOBILEQR_ENABLED);
							if (mobileQREnabled == true
									|| mobileQREnabled == "true") {
								bool = true;
							}
							return bool;
						},

						/**
						 * @since 3.0.1
						 */
						setMobileQREnabled : function(mobileQREnabled) {
							mobileQREnabled = (mobileQREnabled === true || mobileQREnabled == "true");
							this.setValue(this.MOBILEQR_ENABLED,
									mobileQREnabled ? "true" : "false");
						},

						/**
						 * @since 2.0.3.5
						 */
						getShareEnabled : function() {
							var bool = false;
							var enabled = this.getValue(this.SHARE_ENABLED);
							if (enabled == true || enabled == "true") {
								bool = true;
							}
							return bool;
						},

						/**
						 * @since 2.0.3.5
						 */
						setShareEnabled : function(enabled) {
							enabled = (enabled === true || enabled == "true");
							this.setValue(this.SHARE_ENABLED, enabled ? "true"
									: "false");
						},

						/**
						 * @since 2.0.3.5
						 */
						getShareMyEmailModifiable : function() {
							var bool = false;
							var enabled = this
									.getValue(this.SHARE_MY_EMAIL_MODIFIABLE);
							if (enabled == true || enabled == "true") {
								bool = true;
							}
							return bool;
						},

						/**
						 * @since 2.0.3.5
						 */
						setShareMyEmailModifiable : function(enabled) {
							enabled = (enabled === true || enabled == "true");
							this.setValue(this.SHARE_MY_EMAIL_MODIFIABLE,
									enabled ? "true" : "false");
						},

						/**
						 * @since 2.0.3.5
						 */
						getShareRepository : function() {
							return this.getValue(this.SHARE_REPOSITORY);
						},

						/**
						 * @since 2.0.3.5
						 */
						setShareRepository : function(repository) {
							this.setValue(this.SHARE_REPOSITORY, repository);
						},

						/**
						 * @since 2.0.3.8
						 */
						getEmailServiceEnabled : function() {
							var value = this
									.getValue(this.EMAIL_SERVICE_ENABLED);
							return value == true || value == "true";
						},

						/**
						 * @since 2.0.3.8
						 */
						setEmailServiceEnabled : function(emailServiceEnabled) {
							this
									.setValue(
											this.EMAIL_SERVICE_ENABLED,
											emailServiceEnabled === true
													|| emailServiceEnabled == "true" ? "true"
													: "false");
						},

						/**
						 * @since 2.0.3.8
						 */
						getFromEmailModifiable : function() {
							var value = this
									.getValue(this.FROM_EMAIL_MODIFIABLE);
							return value == true || value == "true";
						},

						/**
						 * @since 2.0.3.8
						 */
						setFromEmailModifiable : function(fromEmailModifiable) {
							this
									.setValue(
											this.FROM_EMAIL_MODIFIABLE,
											fromEmailModifiable === true
													|| fromEmailModifiable == "true" ? "true"
													: "false");
						},

						/**
						 * @since 2.0.3.8
						 */
						getUseFromEmailAsSender : function() {
							var value = this
									.getValue(this.USE_FROM_EMAIL_AS_SENDER);
							return value == true || value == "true";
						},

						/**
						 * @since 2.0.3.8
						 */
						setUseFromEmailAsSender : function(useFromEmailAsSender) {
							this
									.setValue(
											this.USE_FROM_EMAIL_AS_SENDER,
											useFromEmailAsSender === true
													|| useFromEmailAsSender == "true" ? "true"
													: "false");
						},

						getLoginInformationUrl : function() {
							return this.getValue(this.LOGIN_INFORMATION_URL);
						},

						setLoginInformationUrl : function(loginInformationUrl) {
							this.setValue(this.LOGIN_INFORMATION_URL,
									loginInformationUrl);
						},

						getLoginLogoUrl : function() {
							return this.getValue(this.LOGIN_LOGO_URL);
						},

						setLoginLogoUrl : function(loginLogoUrl) {
							this.setValue(this.LOGIN_LOGO_URL, loginLogoUrl);
						},

						getBannerLogoUrl : function() {
							return this.getValue(this.BANNER_LOGO_URL);
						},

						setBannerLogoUrl : function(bannerLogoUrl) {
							this.setValue(this.BANNER_LOGO_URL, bannerLogoUrl);
						},

						getApplicationName : function() {
							return this.getValue(this.APPLICATION_NAME);
						},

						setApplicationName : function(applicationName) {
							this.setValue(this.APPLICATION_NAME,
									applicationName);
						},

						getMessageSearchUrl : function() {
							return this.getValue(this.MESSAGE_SEARCH_URL);
						},

						setMessageSearchUrl : function(messageSearchUrl) {
							this.setValue(this.MESSAGE_SEARCH_URL,
									messageSearchUrl);
						},

						getHelpUrl : function() {
							return this.getValue(this.HELP_URL);
						},

						setHelpUrl : function(helpUrl) {
							this.setValue(this.HELP_URL, helpUrl);
						},

						/**
						 * @since 2.0.3
						 */
						getKCHelpTaxonomy : function() {
							return this.getValue(this.KC_HELP_TAXONOMY);
						},

						/**
						 * @since 2.0.3
						 */
						setKCHelpTaxonomy : function(taxonomy) {
							this.setValue(this.KC_HELP_TAXONOMY, taxonomy);
						},

						/**
						 * @since 2.0.3
						 */
						getKCHelpContext : function() {
							return this.getValue(this.KC_HELP_CONTEXT);
						},

						/**
						 * @since 2.0.3
						 */
						setKCHelpContext : function(context) {
							this.setValue(this.KC_HELP_CONTEXT, context);
						},

						/**
						 * @since 2.0.3
						 */
						getKCHelpWelcome : function() {
							return this.getValue(this.KC_HELP_WELCOME_FILE);
						},

						/**
						 * @since 2.0.3
						 */
						setKCHelpWelcome : function(welcome) {
							this.setValue(this.KC_HELP_WELCOME_FILE, welcome);
						},

						getName : function() {
							return this.getValue(this.NAME);
						},

						setName : function(name) {
							this.setValue(this.NAME, name);
						},

						getDescription : function() {
							return this.getValue(this.DESCRIPTION);
						},

						setDescription : function(description) {
							this.setValue(this.DESCRIPTION, description);
						},

						getFileIntoFolder : function() {
							return this.getValue(this.FILE_INTO_FOLDER);
						},

						setFileIntoFolder : function(fileIntoFolder) {
							this
									.setValue(this.FILE_INTO_FOLDER,
											fileIntoFolder);
						},

						getShowSecurity : function() {
							return this.getValue(this.SHOW_SECURITY);
						},

						setShowSecurity : function(showSecurity) {
							this.setValue(this.SHOW_SECURITY, showSecurity);
						},

						getShowSecurityInheritanceUI : function() {
							return this
									.getValue(this.SHOW_SECURITY_INHERITANCE_UI);
						},

						setShowSecurityInheritanceUI : function(
								showSecurityInheritanceUI) {
							this.setValue(this.SHOW_SECURITY_INHERITANCE_UI,
									showSecurityInheritanceUI);
						},

						getLayoutActionHandler : function() {
							return this.getValue(this.LAYOUT_ACTION_HANDLER);
						},

						setLayoutActionHandler : function(layoutActionHandler) {
							this.setValue(this.LAYOUT_ACTION_HANDLER,
									layoutActionHandler);
						},

						getLayout : function() {
							return this.getValue(this.LAYOUT);
						},

						setLayout : function(layout) {
							this.setValue(this.LAYOUT, layout);
						},

						getFeatures : function() {
							return this.getValues(this.FEATURES);
						},

						setFeatures : function(features) {
							return this.setValues(this.FEATURES, features);
						},

						/**
						 * @since 2.0.3.7
						 */
						getPluginIds : function() {
							return this.getValues(this.PLUGIN_IDS);
						},

						/**
						 * @since 2.0.3.7
						 */
						setPluginIds : function(pluginIds) {
							return this.setValues(this.PLUGIN_IDS, pluginIds);
						},

						/**
						 * @since 2.0.3.7
						 */
						getEnableAllPlugins : function() {
							return this.getValue(this.ENABLE_ALL_PLUGINS);
						},

						/**
						 * @since 2.0.3.7
						 */
						setEnableAllPlugins : function(value) {
							this.setValue(this.ENABLE_ALL_PLUGINS, value);
						},

						/**
						 * @since 2.0.3.7
						 */
						getRedactionSaveMode : function() {
							return this.getValue(this.REDACTION_SAVE_MODE);
						},

						/**
						 * @since 2.0.3.7
						 */
						setRedactionSaveMode : function(value) {
							this.setValue(this.REDACTION_SAVE_MODE, value);
						},

						/**
						 * @since 2.0.3.7
						 * @deprecated 3.0.1 Use
						 *             <code>getDocumentAddMode()</code>
						 *             instead.
						 */
						getRedactionAddDocumentMode : function() {
							return this.getDocumentAddMode();
						},

						/**
						 * @since 2.0.3.7
						 * @deprecated 3.0.1 Use
						 *             <code>setDocumentAddMode(value)</code>
						 *             instead.
						 */
						setRedactionAddDocumentMode : function(value) {
							this.setDocumentAddMode(value);
						},

						/**
						 * @since 3.0.1
						 */
						getDocumentAddMode : function() {
							return this.getValue(this.DOCUMENT_ADD_MODE);
						},

						/**
						 * @since 3.0.1
						 */
						setDocumentAddMode : function(value) {
							this.setValue(this.DOCUMENT_ADD_MODE, value);
						},

						/**
						 * @since 2.0.3
						 */
						setSharePointUrlIds : function(sharePointUrlIds) {
							return this.setValues(this.SHAREPOINT_URL_IDS,
									sharePointUrlIds);
						},

						/**
						 * @since 2.0.3
						 */
						getSharePointUrlIds : function() {
							return this.getValues(this.SHAREPOINT_URL_IDS);
						},

						getDefaultFeature : function() {
							return this.getValue(this.DEFAULT_FEATURE);
						},

						setDefaultFeature : function(defaultFeature) {
							this.setValue(this.DEFAULT_FEATURE, defaultFeature);
						},

						getLayoutLogFile : function() {
							return this.getValue(this.LAYOUT_LOG_FILE);
						},

						setLayoutLogFile : function(logFile) {
							this.setValue(this.LAYOUT_LOG_FILE, logFile);
						},

						getBannerBackgroundColor : function() {
							return this.getValue(this.BANNER_BACKGROUND_COLOR);
						},

						setBannerBackgroundColor : function(
								bannerBackgroundColor) {
							this.setValue(this.BANNER_BACKGROUND_COLOR,
									bannerBackgroundColor);
						},

						getBannerApplicationNameColor : function() {
							return this
									.getValue(this.BANNER_APPLICATION_NAME_COLOR);
						},

						setBannerApplicationNameColor : function(
								bannerApplicationNameColor) {
							this.setValue(this.BANNER_APPLICATION_NAME_COLOR,
									bannerApplicationNameColor);
						},

						getBannerMenuColor : function() {
							return this.getValue(this.BANNER_MENU_COLOR);
						},

						setBannerMenuColor : function(bannerMenuColor) {
							this.setValue(this.BANNER_MENU_COLOR,
									bannerMenuColor);
						},

						getTeamspacesDefaultRepository : function() {
							return this
									.getValue(this.TEAMSPACES_DEFAULT_REPOSITORY);
						},

						setTeamspacesDefaultRepository : function(
								defaultRepository) {
							this.setValue(this.TEAMSPACES_DEFAULT_REPOSITORY,
									defaultRepository);
						},

						getWorkDefaultRepository : function() {
							return this.getValue(this.WORK_DEFAULT_REPOSITORY);
						},

						setWorkDefaultRepository : function(defaultRepository) {
							this.setValue(this.WORK_DEFAULT_REPOSITORY,
									defaultRepository);
						},

						getEntryTemplatesDefaultRepository : function() {
							return this
									.getValue(this.ENTRY_TEMPLATES_DEFAULT_REPOSITORY);
						},

						setEntryTemplatesDefaultRepository : function(
								defaultRepository) {
							this.setValue(
									this.ENTRY_TEMPLATES_DEFAULT_REPOSITORY,
									defaultRepository);
						},

						getOtherFeaturesDefaultRepository : function() {
							return this
									.getValue(this.OTHER_FEATURES_DEFAULT_REPOSITORY);
						},

						setOtherFeaturesDefaultRepository : function(
								defaultRepository) {
							this.setValue(
									this.OTHER_FEATURES_DEFAULT_REPOSITORY,
									defaultRepository);
						},

						getShowThumbnails : function() {
							return this.getValue(this.SHOW_THUMBNAILS);
						},

						setShowThumbnails : function(showThumbnails) {
							this.setValue(this.SHOW_THUMBNAILS, showThumbnails);
						},

						getShowViewFilmstrip : function() {
							var value = this.getValue(this.SHOW_VIEWFILMSTRIP);
							if (value == undefined) {
								return this.getShowThumbnails();
							} else {
								return value;
							}
						},

						setShowViewFilmstrip : function(showViewFilmstrip) {
							this.setValue(this.SHOW_VIEWFILMSTRIP,
									showViewFilmstrip);
						},

						getShowGlobalToolbar : function() {
							return this.getValue(this.SHOW_GLOBETOOLBAR);
						},

						setShowGlobalToolbar : function(showGlobalToolbar) {
							this.setValue(this.SHOW_GLOBETOOLBAR,
									showGlobalToolbar);
						},

						getDefault : function() {
							return this.getValue(this.IS_DEFAULT);
						},

						setDefault : function(isDefault) {
							this.setValue(this.IS_DEFAULT, isDefault);
						},

						isValid : function() {
							return this.getValue(this.IS_VALID);
						},

						setValid : function(isValid) {
							this.setValue(this.IS_VALID, isValid);
						},

						/**
						 * @since 2.0.3.6
						 */
						isWarning : function() {
							var bool = false;
							var enabled = this.getValue(this.IS_WARN);
							if (enabled == true || enabled == "true") {
								bool = true;
							}
							return bool;
						},

						/**
						 * @since 2.0.3.6
						 */
						setWarning : function(isWarning) {
							isWarning = (isWarning === true || isWarning == "true");
							this.setValue(this.IS_WARN, isWarning ? "true"
									: "false");
						},

						getDefaultRepository : function() {
							return this.getValue(this.DEFAULT_REPOSITORY);
						},

						setDefaultRepository : function(defaultRepository) {
							this.setValue(this.DEFAULT_REPOSITORY,
									defaultRepository);
						},

						getViewer : function() {
							return this.getValue(this.VIEWER);
						},

						setViewer : function(viewer) {
							this.setValue(this.VIEWER, viewer);
						},

						// return server objects
						getServerObjects : function(callback) {
							var servers = this.getValues(this.SERVERS);
							if (servers && servers.length > 0) {
								var serverObjects = [];
								array
										.forEach(
												servers,
												lang
														.hitch(
																this,
																function(entry,
																		index) {
																	var server = ServerConfig
																			.createServerConfig(entry);
																	server
																			.getConfig(function(
																					response) {
																				serverObjects
																						.push(server);
																				if (serverObjects.length == servers.length
																						&& callback)
																					callback(serverObjects);
																			});
																}));
								return serverObjects;
							}
						},

						// return repository objects
						getRepositoryObjects : function(callback) {
							var repositoryObjects = [];
							var repositories = this
									.getValues(this.REPOSITORIES);
							if (repositories && repositories.length > 0) {
								this
										.listConfig(
												"repositories",
												lang
														.hitch(
																this,
																function(list) {
																	for ( var i in list) {
																		var entry = list[i];
																		var id = entry.id ? entry.id
																				: ""
																						+ i;
																		var repository = RepositoryConfig
																				.createRepositoryConfig(id);
																		lang
																				.mixin(
																						repository,
																						{
																							_attributes : entry
																						});
																		repositoryObjects
																				.push(repository);
																	}
																	if (callback) {
																		callback(repositoryObjects);
																	}
																}), "true");
								return repositoryObjects;
							} else {
								if (callback) {
									callback(repositoryObjects);
								}
								return repositoryObjects;
							}
						},

						getSupportWorkflowNotification : function() {
							return this
									.getValues(this.SUPPORT_WORKFLOW_NOTIFICATION);
						},

						setSupportWorkflowNotification : function(values) {
							this.setValues(this.SUPPORT_WORKFLOW_NOTIFICATION,
									values);
						},

						getPreventCreateNewSearch : function() {
							return this
									.getValues(this.PREVENT_CREATE_NEW_SEARCH);
						},

						setPreventCreateNewSearch : function(values) {
							this.setValues(this.PREVENT_CREATE_NEW_SEARCH,
									values);
						},

						getPreventCreateNewUnifiedSearch : function() {
							return this
									.getValues(this.PREVENT_CREATE_NEW_UNIFIED_SEARCH);
						},

						setPreventCreateNewUnifiedSearch : function(values) {
							this.setValues(
									this.PREVENT_CREATE_NEW_UNIFIED_SEARCH,
									values);
						},

						getHideEntryTemplateNotFoundWarning : function() {
							return this
									.getValues(this.HIDE_ENTRY_TEMPLATE_NOT_FOUND_WARNING);
						},

						setHideEntryTemplateNotFoundWarning : function(values) {
							this.setValues(
									this.HIDE_ENTRY_TEMPLATE_NOT_FOUND_WARNING,
									values);
						},
						
						getShowRoleSecurity : function() {
							return this.getValues(this.SHOW_ROLE_SECURITY);
						},

						setShowRoleSecurity : function(values) {
							this.setValues(
									this.SHOW_ROLE_SECURITY,
									values);
						},
						
						getShowPrimaryDocumentOnly : function() {
							return this.getValues(this.SHOW_PRIMARY_DOCUMENT_ONLY);
						},

						setShowPrimaryDocumentOnly : function(values) {
							this.setValues(
									this.SHOW_PRIMARY_DOCUMENT_ONLY,
									values);
						},
						
						

						getMaxNumberDocToAdd : function() {
							return (this.getValue(this.MAX_NUMBER_DOC_TO_ADD) ? this
									.getValue(this.MAX_NUMBER_DOC_TO_ADD)
									: 50);
						},

						setMaxNumberDocToAdd : function(value) {
							this.setValue(this.MAX_NUMBER_DOC_TO_ADD, value);
						},

						/**
						 * @since 2.0.3.6
						 */
						getControlThreshold : function() {
							return (this.getValue(this.CONTROL_THRESHOLD) ? this
									.getValue(this.CONTROL_THRESHOLD)
									: 50);
						},

						/**
						 * @since 2.0.3.6
						 */
						setControlThreshold : function(value) {
							this.setValue(this.CONTROL_THRESHOLD, value);
						},

						getMaxConversionSize : function() {
							return (this.getValue(this.MAX_CONVERSION_SIZE) ? this
									.getValue(this.MAX_CONVERSION_SIZE)
									: 50);
						},

						setMaxConversionSize : function(value) {
							this.setValue(this.MAX_CONVERSION_SIZE, value);
						},

						getMaxNumberDocToModify : function() {
							return (this
									.getValue(this.MAX_NUMBER_DOC_TO_MODIFY) ? this
									.getValue(this.MAX_NUMBER_DOC_TO_MODIFY)
									: 50);
						},

						setMaxNumberDocToModify : function(value) {
							this.setValue(this.MAX_NUMBER_DOC_TO_MODIFY, value);
						},

						setApplicationSpacesLabelsParam : function(values, ids) {
							this.applicationSpacesLabels = values;
							this.applicationSpacesIds = ids;
						},

						setApplicationNameLabelsParam : function(values, ids) {
							this.applicationNameLabels = values;
							this.applicationNameIds = ids;
						},

						getApplicationSpacesLabelValues : function() {
							return this.applicationSpacesLabels;
						},

						getApplicationNameLabelValues : function() {
							return this.applicationNameLabels;
						},

						getApplicationSpacesLabelIds : function() {
							return this.applicationSpacesIds;
						},

						getApplicationNameLabelIds : function() {
							return this.applicationNameIds;
						},

						getApplicationSpaceLabels : function() {
							return this
									.getValues(this.APPLICATION_SPACE_LABELS);
						},

						setApplicationSpaceLabels : function(values) {
							this.setValues(this.APPLICATION_SPACE_LABELS,
									values);
						},

						getApplicationNameLabels : function() {
							return this.getValues(this.APPLICATION_NAME_LABELS);
						},

						setApplicationNameLabels : function(values) {
							this
									.setValues(this.APPLICATION_NAME_LABELS,
											values);
						},

						// timezone configuration
						getEnableTimeZone : function() {
							return this.getValue(this.ENABLE_TIME_ZONE);
						},

						setEnableTimeZone : function(value) {
							this.setValue(this.ENABLE_TIME_ZONE, value);
						},
						getTimeZoneUTCOffset : function() {
							return this.getValue(this.TIME_ZONE_UTC_OFFSET);
						},

						setTimeZoneUTCOffset : function(value) {
							this.setValue(this.TIME_ZONE_UTC_OFFSET, value);
						},
						getEnableHideTimePortion : function() {
							return this.getValue(this.ENABLE_HIDE_TIME_PORTION);
						},
						setEnableHideTimePortion : function(value) {
							return this.setValue(this.ENABLE_HIDE_TIME_PORTION,
									value);
						},
						// file tracking configuration
						getEnableFileTracking : function() {
							return this.getValue(this.ENABLE_FILE_TRACKING);
						},

						setEnableFileTracking : function(value) {
							this.setValue(this.ENABLE_FILE_TRACKING, value);
						},

						getFileTrackingLocation : function() {
							return this.getValue(this.FILE_TRACKING_LOCATION);
						},

						setFileTrackingLocation : function(loc) {
							this.setValue(this.FILE_TRACKING_LOCATION, loc);
						},

						getQualifiedPath : function() {
							return this.getValue(this.QUALIFIED_PATH);
						},

						setQualifiedPath : function(value) {
							this.setValue(this.QUALIFIED_PATH, value);
						},

						getEnvironmentVariable : function() {
							return this.getValue(this.ENVIRONMENT_VARIABLE);
						},

						setEnvironmentVariable : function(value) {
							this.setValue(this.ENVIRONMENT_VARIABLE, value);
						},

						getDeleteLocalCopy : function() {
							return this.getValue(this.DELETE_LOCAL_COPY);
						},

						setDeleteLocalCopy : function(value) {
							this.setValue(this.DELETE_LOCAL_COPY, value);
						},

						getDeleteLocalCopyRuntimeState : function() {
							return this
									.getValue(this.DELETE_LOCAL_COPY_RUNTIME_STATE);
						},

						setDeleteLocalCopyRuntimeState : function(value) {
							this.setValue(this.DELETE_LOCAL_COPY_RUNTIME_STATE,
									value);
						},
						getAppendPathComponent : function() {
							return this.getValue(this.APPEND_PATH_COMPONENT);
						},

						setAppendPathComponent : function(value) {
							this.setValue(this.APPEND_PATH_COMPONENT, value);
						},

						getOverWriteFile : function() {
							return this.getValue(this.OVER_WRITE_FILE);
						},

						setOverWriteFile : function(value) {
							this.setValue(this.OVER_WRITE_FILE, value);
						},

						getOverWriteFileRuntimeState : function() {
							return this
									.getValue(this.OVER_WRITE_FILE_RUNTIME_STATE);
						},

						setOverWriteFileRuntimeState : function(value) {
							this.setValue(this.OVER_WRITE_FILE_RUNTIME_STATE,
									value);
						},

						// false - delete local copy value is readonly during
						// run time
						// true - delete local copy value is editable during run
						// time
						getOpenFile : function() {
							return this.getValue(this.OPEN_FILE);
						},

						setOpenFile : function(value) {
							this.setValue(this.OPEN_FILE, value);
						},

						// MS Office configuration
						getCheckoutOnOpenDoc : function() {
							return this.getValue(this.CHECKOUT_ON_OPEN_DOC);
						},

						setCheckoutOnOpenDoc : function(checkoutOnOpenDoc) {
							this.setValue(this.CHECKOUT_ON_OPEN_DOC,
									checkoutOnOpenDoc);
						},

						getPromptCloseOfficeIfDocCheckout : function() {
							return this.getValue(this.PROMPT_CLOSING_OFFICE);
						},

						setPromptCloseOfficeIfDocCheckout : function(
								promptCloseOffice) {
							this.setValue(this.PROMPT_CLOSING_OFFICE,
									promptCloseOffice);
						},

						getDeleteLocalOnAdd : function() {
							return this.getValue(this.DELETE_LOCAL_ON_ADD);
						},

						setDeleteLocalOnAdd : function(deleteLocalOnAdd) {
							this.setValue(this.DELETE_LOCAL_ON_ADD,
									deleteLocalOnAdd);
						},

						getDeleteLocalOnCheckin : function() {
							return this.getValue(this.DELETE_LOCAL_ON_CHECKIN);
						},

						setDeleteLocalOnCheckin : function(deleteLocalOnCheckin) {
							this.setValue(this.DELETE_LOCAL_ON_CHECKIN,
									deleteLocalOnCheckin);
						},

						getDeleteLocalOnSave : function() {
							return this.getValue(this.DELETE_LOCAL_ON_SAVE);
						},

						setDeleteLocalOnSave : function(deleteLocalOnSave) {
							this.setValue(this.DELETE_LOCAL_ON_SAVE,
									deleteLocalOnSave);
						},

						getAddWithEntryTemplateOnly : function() {
							return this
									.getValue(this.ADD_WITH_ENTRY_TEMPLATE_ONLY);
						},

						setAddWithEntryTemplateOnly : function(
								addWithEntryTemplateOnly) {
							this.setValue(this.ADD_WITH_ENTRY_TEMPLATE_ONLY,
									addWithEntryTemplateOnly);
						},

						getPromptForPropsOnAdd : function() {
							return this
									.getValue(this.PROMPT_FOR_PROPERTIES_ON_ADD);
						},

						setPromptForPropsOnAdd : function(promptForPropsOnAdd) {
							this.setValue(this.PROMPT_FOR_PROPERTIES_ON_ADD,
									promptForPropsOnAdd);
						},

						getDeleteEmailOnAdd : function() {
							return this.getValue(this.DELETE_EMAIL_ON_ADD);
						},

						setDeleteEmailOnAdd : function(deleteEmailOnAdd) {
							this.setValue(this.DELETE_EMAIL_ON_ADD,
									deleteEmailOnAdd);
						},

						/**
						 * @since 2.0.3
						 */
						getIndicateManagedEmailOnAdd : function() {
							return this
									.getValue(this.INDICATE_MANAGED_EMAIL_ON_ADD);
						},

						/**
						 * @since 2.0.3
						 */
						setIndicateManagedEmailOnAdd : function(
								indicateManagedEmailOnAdd) {
							this.setValue(this.INDICATE_MANAGED_EMAIL_ON_ADD,
									indicateManagedEmailOnAdd);
						},

						getSendEmailAsLinkOnly : function() {
							return this.getValue(this.SEND_EMAIL_AS_LINK_ONLY);
						},

						setSendEmailAsLinkOnly : function(sendEmailAsLinkOnly) {
							this.setValue(this.SEND_EMAIL_AS_LINK_ONLY,
									sendEmailAsLinkOnly);
						},

						/**
						 * @since 2.0.3
						 */
						setOfficeBidiSupportFlag : function(
								officeBidiSupportFlag) {
							this.setValue(this.OFFICE_BIDI_SUPPORT_FLAG,
									officeBidiSupportFlag);
						},

						/**
						 * @since 2.0.3
						 */
						getOfficeBidiSupportFlag : function() {
							return this.getValue(this.OFFICE_BIDI_SUPPORT_FLAG);
						},

						/**
						 * @since 2.0.3
						 */
						setOfficeTextDirection : function(officeTextDirection) {
							this.setValue(this.OFFICE_TEXT_DIRECTION,
									officeTextDirection);
						},

						/**
						 * @since 2.0.3
						 */
						getOfficeTextDirection : function() {
							return this.getValue(this.OFFICE_TEXT_DIRECTION);
						},

						getEnablePropMappingForAdd : function() {
							return this
									.getValue(this.ENABLE_PROP_MAPPING_FOR_ADD);
						},

						setEnablePropMappingForAdd : function(
								enablePropMappingOnAdd) {
							this.setValue(this.ENABLE_PROP_MAPPING_FOR_ADD,
									enablePropMappingOnAdd);
						},

						/**
						 * @since 2.0.3
						 */
						getDisableDocumentTypeFiltering : function() {
							return this
									.getValue(this.DISABLE_DOCUMENT_TYPE_FILTERING);
						},

						/**
						 * @since 2.0.3
						 */
						setDisableDocumentTypeFiltering : function(
								disableDocumentTypeFiltering) {
							this.setValue(this.DISABLE_DOCUMENT_TYPE_FILTERING,
									disableDocumentTypeFiltering);
						},

						/**
						 * @since 2.0.3.5
						 */
						getShowDetailsRecentlyUsed : function() {
							return this
									.getValue(this.SHOW_DETAILS_RECENTLY_USED);
						},

						/**
						 * @since 2.0.3.5
						 */
						setShowDetailsRecentlyUsed : function(
								showDetailsRecentlyUsed) {
							this.setValue(this.SHOW_DETAILS_RECENTLY_USED,
									showDetailsRecentlyUsed);
						},

						/**
						 * @since 2.0.3.5
						 */
						getShowNoPermissionsWarning : function() {
							return this
									.getValue(this.SHOW_NO_PREMISSIONS_WARNING);
						},

						/**
						 * @since 2.0.3.5
						 */
						setShowNoPermissionsWarning : function(
								showNoPermissionsWarning) {
							this.setValue(this.SHOW_NO_PREMISSIONS_WARNING,
									showNoPermissionsWarning);
						},

						/**
						 * @since 2.0.3.5
						 */
						getHideSearchActions : function() {
							return this.getValue(this.HIDE_SEARCH_ACTIONS);
						},

						/**
						 * @since 2.0.3.5
						 */
						setHideSearchActions : function(hideSearchActions) {
							this.setValue(this.HIDE_SEARCH_ACTIONS,
									hideSearchActions);
						},

						/**
						 * @since 2.0.3.1
						 */
						getHideSaveDocument : function() {
							return this.getValue(this.HIDE_SAVE_DOCUMENT);
						},

						/**
						 * @since 2.0.3.1
						 */
						setHideSaveDocument : function(hideSaveDocument) {
							this.setValue(this.HIDE_SAVE_DOCUMENT,
									hideSaveDocument);
						},

						/**
						 * @since 2.0.3
						 */
						getEditGroupAddButtonSetting : function() {
							return this
									.getValue(this.EDIT_GROUP_ADD_BUTTON_SETTING);
						},

						/**
						 * @since 2.0.3
						 */
						setEditGroupAddButtonSetting : function(
								editGroupAddButtonSetting) {
							this.setValue(this.EDIT_GROUP_ADD_BUTTON_SETTING,
									editGroupAddButtonSetting);
						},

						getDeleteOpenDocsAfterClose : function() {
							return this
									.getValue(this.DELETE_OPEN_DOCS_AFTER_CLOSE);
						},

						setDeleteOpenDocsAfterClose : function(
								deleteOpenDocsAfterClose) {
							this.setValue(this.DELETE_OPEN_DOCS_AFTER_CLOSE,
									deleteOpenDocsAfterClose);
						},

						/**
						 * @since 2.0.3.5
						 */
						getCheckoutDocumentAfterAdd : function() {
							return this
									.getValue(this.CHECKOUT_DOCUMENT_AFTER_ADD);
						},

						/**
						 * @since 2.0.3.5
						 */
						setCheckoutDocumentAfterAdd : function(
								checkoutDocumentAfterAdd) {
							this.setValue(this.CHECKOUT_DOCUMENT_AFTER_ADD,
									checkoutDocumentAfterAdd);
						},

						/**
						 * @since 2.0.3
						 */
						getOfficeCustomCommandGroupName : function() {
							return this
									.getValue(this.OFFICE_CUSTOM_COMMAND_GROUP_NAME);
						},

						/**
						 * @since 2.0.3
						 */
						setOfficeCustomCommandGroupName : function(
								officeCustomCommandGroupName) {
							this.setValue(
									this.OFFICE_CUSTOM_COMMAND_GROUP_NAME,
									officeCustomCommandGroupName);
						},

						/**
						 * @since 2.0.3
						 */
						getRibbonTabLabel : function() {
							return this.getValue(this.RIBBON_TAB_LABEL);
						},

						/**
						 * @since 2.0.3
						 */
						setRibbonTabLabel : function(ribbonBarTitle) {
							this
									.setValue(this.RIBBON_TAB_LABEL,
											ribbonBarTitle);
						},

						/**
						 * @since 2.0.3
						 */
						getOfficeCustomCommands : function() {
							return this.officeCustomCommands;
						},

						/**
						 * @since 2.0.3
						 */
						setOfficeCustomCommands : function(officeCustomCommands) {
							this.officeCustomCommands = officeCustomCommands;
						},

						/**
						 * @since 2.0.3
						 */
						getCloseTaskPaneOnOpen : function() {
							return this.getValue(this.CLOSE_TASK_PANE_ON_OPEN);
						},

						/**
						 * @since 2.0.3
						 */
						setCloseTaskPaneOnOpen : function(closeTaskPaneOnOpen) {
							this.setValue(this.CLOSE_TASK_PANE_ON_OPEN,
									closeTaskPaneOnOpen);
						},

						// Mobile settings

						getMobileAppAccess : function() {
							return this.getValue(this.MOBILE_APP_ACCESS, false);
						},

						setMobileAppAccess : function(mobileAppAccess) {
							this.setValue(this.MOBILE_APP_ACCESS,
									mobileAppAccess);
						},

						getAddPhotoFromMobile : function() {
							return this.getValue(this.ADD_PHOTO_FROM_MOBILE,
									false);
						},

						setAddPhotoFromMobile : function(addPhotoFromMobile) {
							this.setValue(this.ADD_PHOTO_FROM_MOBILE,
									addPhotoFromMobile);
						},

						getAddDocFoldersToRepo : function() {
							return this.getValue(this.ADD_DOC_FOLDERS_TO_REPO,
									false);
						},

						setAddDocFoldersToRepo : function(addDocFoldersToRepo) {
							this.setValue(this.ADD_DOC_FOLDERS_TO_REPO,
									addDocFoldersToRepo);
						},

						getOpenDocFromOtherApp : function() {
							return this.getValue(this.OPEN_DOC_FROM_OTHER_APP,
									false);
						},

						setOpenDocFromOtherApp : function(openDocFromOtherApp) {
							this.setValue(this.OPEN_DOC_FROM_OTHER_APP,
									openDocFromOtherApp);
						},

						/**
						 * @since 3.0
						 */
						getOutlookPropertyRemembrance : function() {
							return this
									.getValue(this.OUTLOOK_PROPERTY_REMEMBRANCE);
						},

						/**
						 * @since 3.0
						 */
						setOutlookPropertyRemembrance : function(
								outlookPropertyRemembrance) {
							this.setValue(this.OUTLOOK_PROPERTY_REMEMBRANCE,
									outlookPropertyRemembrance);
						},

						/**
						 * @since 3.0
						 */
						getOfficeOnlineEnabled : function() {
							var value = this
									.getValue(this.OFFICE_ONLINE_ENABLED);
							return (value == true || value == "true");
						},

						/**
						 * @since 3.0
						 */
						setOfficeOnlineEnabled : function(officeOnlineEnabled) {
							this
									.setValue(
											this.OFFICE_ONLINE_ENABLED,
											officeOnlineEnabled === true
													|| officeOnlineEnabled == "true" ? "true"
													: "false");
						},

						/**
						 * @since 3.0
						 */
						getAllowCollaborativeEditing : function() {
							var value = this
									.getValue(this.ALLOW_COLLABORATIVE_EDITING);
							return value == true || value == "true";
						},

						/**
						 * @since 3.0
						 */
						setAllowCollaborativeEditing : function(
								allowCollaborativeEditing) {
							this
									.setValue(
											this.ALLOW_COLLABORATIVE_EDITING,
											allowCollaborativeEditing === true
													|| allowCollaborativeEditing == "true" ? "true"
													: "false");
						},
						
						/**
						 * @since 3.0.2
						 */
						getPrintServiceEnabled : function() {
							var value = this.getValue(this.PRINT_SERVICE_ENABLED);
							return value == true || value == "true";
						},

						/**
						 * @since 3.0.2
						 */
						setPrintServiceEnabled : function(printServiceEnabled) {
							this.setValue(this.PRINT_SERVICE_ENABLED, printServiceEnabled === true || printServiceEnabled == "true" ? "true" : "false");
						},

						// Following properties don't need to be persisted in
						// the _attributes

						/**
						 * since 2.0.3
						 */
						setSharePointUrlData : function(sharePointUrlData) {
							return this.sharePointUrlData = sharePointUrlData;
						},

						/**
						 * since 2.0.3
						 */
						getSharePointUrlData : function() {
							return this.sharePointUrlData;
						},

						setMobileFeatures : function(features) {
							this.features = features;
						},

						getMobileFeatures : function() {
							return this.features;
						},

						getMobileFeaturesInterfaceText : function() {
							return this.mobileTexts;
						},

						setMobileFeaturesInterfaceText : function(mobileTexts) {
							this.mobileTexts = mobileTexts;
						},

						// update Mobile feature list
						updateFeaturesList : function(featuresData,
								featuresInterfaceTestData, callback,
								extraParams) {
							this.logEntry(arguments.callee.nom);
							var data = {
								"mobileFeaturesData" : featuresData,
								"mobileFeaturesInterfaceTextData" : featuresInterfaceTestData
							};
							var params = this
									._mixin([
											{
												action : "updateMobileFeatures",
												id : this.id,
												configuration : this.name,
												login_desktop : ecm.model.desktop
														&& ecm.model.desktop.id ? ecm.model.desktop.id
														: null
											}, this.default_params, extraParams ]);
							var request = ecm.model.Request.postService(
									"admin/configuration", null, params,
									"text/json", dojojson.toJson(data), lang
											.hitch(this, function(response) {
												if (callback)
													callback(response);
											}));
							this.logExit(arguments.callee.nom);
							return this;
						},

						/**
						 * @since 2.0.3
						 */
						getDesktopFeatures : function() {
							return this.desktopFeatures;
						},

						/**
						 * @since 2.0.3
						 */
						setDesktopFeatures : function(features) {
							this.desktopFeatures = features;
						},

						setAuthenticationType : function(authType) {
							this.setValue(this.AUTHENTICATION_TYPE, authType);
						},

						getAuthenticationType : function() {
							return this.getValue(this.AUTHENTICATION_TYPE,
									false);
						},

						/**
						 * @since 2.0.3
						 */
						getShowStatusbar : function() {
							return this.getValue(this.SHOW_STATUSBAR);
						},

						/**
						 * @since 2.0.3
						 */
						setShowStatusbar : function(showStatusbar) {
							this.setValue(this.SHOW_STATUSBAR, showStatusbar);
						},

						/**
						 * @since 2.0.2
						 */
						isAccessControlEnabled : function() {
							return this.getValue(this.ACCESS_CONTROL_ENABLED);
						},

						/**
						 * @since 2.0.2
						 */
						setAccessControlEnabled : function(enabled) {
							this.setValue(this.ACCESS_CONTROL_ENABLED, enabled);
						},

						/**
						 * @since 3.0.1
						 */
						getMergeSplitEnabled : function() {
							var value = this
									.getValue(this.MERGE_AND_SPLIT_ENABLED);
							return (value == true || value == "true");
						},

						/**
						 * @since 3.0.1
						 */
						setMergeSplitEnabled : function(enabled) {
							this
									.setValue(
											this.MERGE_AND_SPLIT_ENABLED,
											enabled === true
													|| enabled == "true" ? "true"
													: "false");
						},

						/**
						 * @since 3.0.1
						 */
						getMergeSplitShowCheckIn : function() {
							var value = this
									.getValue(this.MERGE_AND_SPLIT_SHOW_CHECK_IN);
							return (value == true || value == "true");
						},

						/**
						 * @since 3.0.1
						 */
						setMergeSplitShowCheckIn : function(show) {
							this.setValue(this.MERGE_AND_SPLIT_SHOW_CHECK_IN,
									show === true || show == "true" ? "true"
											: "false");
						},
						
						/**
						 * @since 3.0.3
						 */
						getAdminRoleId: function(){
							return this.getValue(this.ADMIN_ROLE_ID);
						},
						
						/**
						 * @since 3.0.3
						 */
						setAdminRoleId: function(adminRoleId){
							this.setValue(this.ADMIN_ROLE_ID, adminRoleId);
						},
						
						/**
						 * @since 3.0.3
						 */
						isRoleBasedAdminEnabled : function() {
							return this.getValue(this.ROLE_BASED_ADMIN_ENABLED);
						},

						/**
						 * @since 3.0.3
						 */
						setRoleBasedAdminEnabled : function(enabled) {
							this.setValue(this.ROLE_BASED_ADMIN_ENABLED, enabled);
						},	
						
						/**
						 * @since 3.0.3
						 */
						getAdminRoleConfig: function(callback){
							var adminRoleConfig = new AdminRoleConfig(this.getValue(this.ADMIN_ROLE_ID));
							adminRoleConfig.getConfig(callback);
						},
						
						/**
						 * @since 3.0.3
						 */
						getMaxNumberDocToPrint : function() {
							var val =  this.getValue(this.MAX_NUMBER_DOC_TO_PRINT);
							return val != null ? val : 50;
						},

						/**
						 * @since 3.0.3
						 */
						setMaxNumberDocToPrint : function(value) {
							this.setValue(this.MAX_NUMBER_DOC_TO_PRINT, value);
						},
					});

			DesktopConfig.DocumentAddMode = {
				STANDARD : "standard",
				ENTRY_TEMPLATE : "entryTemplate"
			};

			/**
			 * Static function that constructs a desktop config object.
			 * 
			 * @param id Desktop identifier.
			 * @memberof ecm.model.admin.DesktopConfig
			 */
			DesktopConfig.createDesktopConfig = function(id) {
				return new DesktopConfig(id, "DesktopConfig");
			};
			return DesktopConfig;
		});

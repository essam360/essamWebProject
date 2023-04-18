/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define({

	root: ({

		// Message number ranges:
		//  1000 - 1999 -- messages for the ICN core mid-tier services.
		//  2000 - 2999 -- messages for the web client (model/widgets)
		//  3000 - 3999 -- messages for the NMO client -- except for message 3316 which is in use by ICN core
		//  4000 - 4999 -- messages for the mobile client
		//  10000 and up -- messages reserved for plug-in writers
		// 
		//  DO NOT RESERVE YOUR OWN MESSAGE NUMBER RANGES WITHIN THESE BLOCKS!
		//  INSTEAD, USE THE NEXT AVAILABLE NUMBER

		// *** Note to translators: Please use &#39; instead of ' in FR and CA translation file. 
		// NLS_CHARSET=UTF-8
		welcome_user: "Welcome, ",
		about: "About",
		all: "All",
		help: "Help",
		user_session: "User session",
		user_session_for: "User session for ${0}",
		user_session_for_with_container: "User session for ${0} (${1})",
		tools: "Tools",
		login: "Log In",
		logout: "Log Out",
		search: "Search",
		saved_searches: "Saved Searches",
		content_analytics: "Analyze Content",
		reset: "Reset",
		reset_hover: "Any unsaved data in all tabs will be reset to the previously saved values.",
		reset_default: "Clear All",
		reset_default_hover: "Clears the Current Label field on all tabs.",
		locale: "Locale:",
		up: "Up",
		down: "Down",
		restore: "Restore",
		maximize: "Maximize",
		values_label: "Values",
		value_label: "Value:",
		path_label: "Path:",
		new_label: "New:",
		back_label: "Back",
		clear: "Clear",
		set: "Set...",
		browse: "Browse",
		work: "Work",
		connect: "Connect",
		documents: "Documents:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM and the IBM logo are trademarks of IBM Corporation, registered in many jurisdictions worldwide. Java and all Java-based trademarks and logos are trademarks or registered trademarks of Oracle and/or its affiliates. The Oracle Outside In Technology included herein is subject to a restricted use license and can only be used in conjunction with this application. This Program is licensed under the terms of the license agreement accompanying the Program.  This license agreement may be either located in a Program directory folder or library identified as \"License\" or \"Non_IBM_License\", if applicable, or provided as a printed license agreement. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms. ",
		edit: "Edit",
		cancel: "Cancel",
		close: "Close",
		close_all: "Close All Tabs",
		close_others: "Close Other Tabs",
		ok: "OK",
		yes: "Yes",
		no: "No",
		open: "Open",
		refresh: "Refresh",
		refresh_cabinets: "Refresh All Cabinets",
		delete_text: "Delete",
		export_config: "Export Configuration",
		description: "Description",
		true_label: "True",
		false_label: "False",
		error: "Error",
		error_reference_hover: "Search www.ibm.com for more information about this error.",
		url_label: "URL",
		default_label: "Default",
		ibm_label: "IBM",
		light_label: "Light",
		dark_label: "Dark",
		save: "Save",
		saveAs: "Save As...",
		save_and_close: "Save and Close",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "None",
		Name: "Name",
		"${NAME}": "Name",
		mime_type: "MIME type",
		mime_type_contains_label: "MIME type contains",
		mime_type_header: "MIME Type",
		mime_type_icon: "MIME Type Icon",
		casesearch: "Case",
		item: "Item",
		no_mime_type: "This item contains no content.",
		items_selected: "${0} items selected.",
		requestor: "Requested By",
		scheduledStartTime: "Scheduled start time",
		isRecurring: "Is recurring",
		weeks: "Weeks",
		days: "Days",
		hours: "Hours",
		endTime: "End time",
		username: "User name",
		password: "Password",
		serverURL: "Server URL",
		enable: "Enable",
		disable: "Disable",
		finish: "Finish",
		previous: "Previous",
		next: "Next",
		schedule: "Schedule",
		removeFromThisList: "Remove from This List",
		status: "Status",
		scheduledEndTime: "Scheduled end time",
		type: "Type",
		mode: "Mode",
		startTime: "Start time",
		createdBy: "Created by",
		nextScheduledTime: "Next scheduled time",
		id: "ID",
		duration: "Duration",
		repeatCycle: "Frequency",
		taskTypeName: "Task type",
		to: "to",
		filter: "Filter:",
		error_message: "Error Message",

        file_type: "Document Type",
        word_template_name: "Word Template Name",
        excel_template_name: "Excel Template Name",
        powerpoint_template_name: "PowerPoint Template Name",
        template_description: "Template Description",
        action_add_template: "Add",
        action_change_template: "Edit",      
        action_edit_template_properties: "Properties",
        add_presentation_template: "Add Presentation Template",
    	add_spreadsheet_template: "Add Spreadsheet Template",
    	add_doc_template: "Add Document Template",    	
    	file_type_doc_hover: "You must specify a valid word processing document template file.<br><br>Valid MIME types: ${0}",
    	file_type_doc_error: "You must specify a valid word processing document template file.<br><br>The selected document mime type: ${0}<br><br>Valid MIME types: ${1}",
    	file_type_presentation_hover: "You must specify a valid presentation template file.<br><br>Valid MIME types: ${0}",
    	file_type_presentation_error: "You must specify a valid presentation template file.<br><br>The selected document mime type: ${0}<br><br>Valid MIME types: ${1}",
    	file_type_spreadsheet_hover: "You must specify a valid spreadsheet template file.<br><br>Valid MIME types: ${0}",
    	file_type_spreadsheet_error: "You must specify a valid spreadsheet template file.<br><br>The selected document mime type: ${0}<br><br>Valid MIME types: ${1}",
    	office_online_only_one_template_error: "You can select only one file.",
    	change_presentation_template: "Edit Presentation Template",
    	change_spreadsheet_template: "Edit Spreadsheet Template",
    	change_doc_template: "Edit Document Template",
    	change_button: "Edit",
	    new_document_dialog_doc_title: "New Document",
	    new_document_dialog_presentation_title: "New Presentation",
	    new_document_dialog_spreadsheet_title: "New Spreadsheet",
	    new_document_dialog_title_label: "Title:",
	    new_document_dialog_title_hover: "Enter a title for this document.",
	    new_document_dialog_title_missing_message: "You must specify a title.",
	    office_online_save_before_adding_templates_title: "Save changes to the repository",
	    office_online_save_before_adding_templates_error: "You can't add Office templates until you save the changes you made to the repository. Click <b>Save and Close</b>, and then reopen the repository to add the Office templates.",
	    copy_to_OOS_dialog_doc_title: "New Document",
	    office_online_checkin_cancelcheckout_message: "This document is being edited in Microsoft Office Online. You cannot check the document in or cancel the checkout while it is open in Microsoft Office Online.",
	    new_document_classification: "Classification:",
	    new_document_classification_help: "Resets the class, properties, and the parent folder, if one exists, of the source document. When adding a document using an entry template, the entry template of the source document will be selected automatically if one exists. The properties of the source document are used as the default values, but the folder and class specified in the entry template are preserved.",
		new_document_classification_use_source_document: "Use source document:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} Type Icon",
		repository_name_and_type: "${0} Name and Type",
		select_class_label: "Select ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Details view",
		detail_view_button: "Details",
		magazine_view_button_tooltip: "Magazine view",
		magazine_view_button: "Magazine",
		filmstrip_view_button_tooltip: "Filmstrip view",
		filmstrip_view_button: "Filmstrip",

		magazine_view_show: "Show in Magazine View",
		detail_view_show: "Show in Details View",

		total_count_item: "item",
		total_count_items: "items",
		total_count_more_items: "More than ${0} items",

		extension_changed: "The extension of the file you selected does not match that of the original.  Select a different file.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "The selected viewer does not support all file types. If you save this viewer mapping, you might encounter problems when viewing documents. It is recommended that you select a viewer that supports all file types when the All file types option is selected.<br><br><b>Tip:</b> The following viewers support all file types:<ul><li>Applet viewer</li><li>AJAX viewer</li><li>HTML conversion</li><li>PDF conversion</li><li>Web browser</li></ul>",
		file_type_any: "All file types",
		file_type_any_hover: "Select this option if you want to use the selected viewer to view all documents, regardless of file type. This option is supported for the following viewers:<br><br><ul><li>Applet viewer</li><li>AJAX viewer</li><li>HTML conversion</li><li>PDF conversion</li><li>Web browser</li></ul><br><br><b>Remember:</b> If you want to use specific viewers most of the time, any mappings that you create that use this option should be moved to the end of your viewer map. ",
		file_type_input: "New file type:",

		mime_type_input: "New MIME type:",
		mime_type_input_invalid: "The new MIME type cannot contain any of the following characters: ,",
		mime_type_available: "Available MIME Types",
		mime_type_selected: "Selected MIME Types",
		file_type_input: "New file type:",
		file_type_input_invalid: "The new file type cannot contain any of the following characters: ,",
		file_type_available: "Available file types",
		file_type_selected: "Selected file types",
		file_type_header: "File Type",
		viewer: "Viewer:",
		viewer_viewer: "Viewer",
		viewer_view: "View",
		viewer_preview: "Preview",
		viewer_merge_and_split: "Merge and Split",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Preview only",
		preview_only_label: "(preview)",
		preview_only_hover: "This viewer mapping will be used only when a user clicks <b>Preview</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "This repository does not support browsing. Select another repository.",

		repository_community_teamspace_message: "Another repository is already designated as the community library repository. If you want to continue using the existing repository as the community library repository, select <b>No</b> before you save your changes to prevent the existing repository from being replaced with this repository.",

		favorites_empty: "You do not have any favorites yet.",
		syncItems_empty: "You do not have any synced files yet.",

		root_folder_id: "Root folder ID",
		unified_searches: "Cross-repository searches:",
		max_results: "Number of results:",
		direct_retrieve_enabled: "Direct retrieve:",
		itemTypesToDisplay: "Item types to display:",
		allItemTypes: "All Item Types",
		include_attr_group_name: "Attribute group descriptions in attribute display names:",
		admin_repcfg_include_attr_group_name_hover: "By default, the attribute group description is included in the names for attribute group attributes. This helps users see which attribute group that an attribute group attribute belongs to when they work with attributes.<br>For example, users might see the following name for an attribute group attribute: Document Settings.Document Type.<br><br>If you disable this option, only the attribute description is used for the attribute group attribute name.<br>For example, users will see this name: Document Type.<br><br>Without the attribute group description, users might not be able to tell whether Document Type is the simple attribute or an attribute group attribute.",
		documentItemTypesOnly: "Document Model Item Types Only",
		object_store: "Object store symbolic name:",
		object_store_display_name: "Object store display name:",
		teamspaceUpgradeMsg: "Your teamspaces will be updated when you save your repository configuration. If you have many teamspaces, the update might take several minutes.",
		synchUpgradeMsg: "The sync module on this repository will be updated when you save your repository configuration.",
		protocol: "Protocol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS Repository ID:",
		cmis_url: "CMIS AtomPub binding service document URL:",
		trace_level: "Trace level",
		trace_dir: "Trace directory",
		temp_dir: "Temporary directory",
		show_document_location: "Show document location",
		max_folders: "Maximum folders",
		afp_conversion: "AFP conversion",
		line_conversion: "Line data conversion",
		max_hits: "Maximum hits",
		folder_search_expresssion: "Folder search expression",
		max_item_types: "Maximum item types",
		max_worklists: "Maximum worklists",
		update_storage_collection: "Update storage collection",
		include_mime_types_in_search_results: "Include MIME types in search results",
		object_type: "Object type",
		object_type_document: "Documents",
		object_type_folder: "Folders",
		file_label: "File:",
		plugin_jarfile_path_label: "JAR file path:",
		plugin_classfolder_path_label: "Class file path:",
		plugin_classname_label: "Class name:",
		plugin_id_label: "Plug-in ID:",
		class_label: "Class",
		configuration: "Configuration",
		connect_repository: "Connect...",
		server_type: "Server Type",
		timeout_in_seconds: "Timeout (in seconds):",
		default_search_template: "Default search",
		search_filtered_properties: "Searchable Properties",
		property_contains_label: "Property contains",
		class_contains_label: "Class contains",
		search_filtered_operators: "Search Operators",
		default_search_results: "Search Results",
		data_type: "Data type",
		status_bar: "Status Bar",
		operators_for: "Operators for:",
		currentUser: "Current User",
		nameContains: "Name Contains",
		searchFor: "Search For",
		server_autentication: "Server Authentication (OAuth 2.0 with JWT)",
		standard_authentication: "Standard Authentication (3-legged OAuth2.0)",
		developer_authentication: "Developer Authentication",
		enterprise_id: "Enterprise ID:",
		public_key_id: "Public Key ID:",
		private_key_path: "Private key file path:",
		server_user_email: "Server user email",

		filter_builder_tooltip: "Define Filter",

		// Launch bar
		launchbar_home: "Open Home",
		launchbar_favorites: "Open Favorites",
		launchbar_browse: "Open Browse View",
		launchbar_browse_popup: "Open Browse Pop-up List",
		launchbar_search: "Open Search View",
		launchbar_search_popup: "Open Search Pop-up List",
		launchbar_teamspaces: "Open Teamspaces View",
		launchbar_teamspaces_popup: "Open Teamspaces Pop-up List",
		launchbar_work: "Open Work View",
		launchbar_work_popup: "Open Work Pop-up List",
		launchbar_entry_templates: "Open Entry Templates View",
		launchbar_entry_templates_popup: "Open Entry Templates Pop-up List",
		launchbar_admin: "Open Administration View",

		admin_sync_server: "Sync Services",
		admin_settings: "Settings",
		admin_interface_text: "Labels",
		admin_interface_text_desktop: "Desktop:",
		admin_desktops: "Desktops",
		admin_repositories: "Repositories",
		admin_mobile: "Mobile",
		admin_menus: "Menus",
		admin_reason_codes: "Redaction Reasons",
		admin_plugins: "Plug-ins",
		admin_plugins_state_enabled: "Plug-in is enabled",
		admin_plugins_state_disabled: "Plug-in is disabled",
		admin_plugins_version: "Version:",
		admin_plugins_version_heading: "Version",
		admin_plugins_icon: "Plug-in Icon",
		admin_viewer_mapping_icon: "Viewer Mapping Icon",
		admin_viewer_defs: "Viewer Maps",
		admin_viewer_dialog_title: "Mapping",
		admin_viewer_dialog_new_title: "New Mapping",
		admin_viewer_dialog_instructions: "A mapping specifies which viewer to use for the files on a repository. You can create multiple mappings to specify different viewers for different types of files. You can use either a MIME type or a file extension to define a mapping. Mappings with file extensions will be mapped to document names. For example, a mapping with the file type set to gif will be mapped to document names that end with the extension .gif",
		admin_desktop_viewer_defs: "Viewer map:",
		admin_desktop_viewer_defs_hover: "The viewer map specifies which viewer is used to open different types of documents on the repository.<br><br>You can create new viewer maps in the <b>Viewer Maps</b> section of the administration tool.",
		admin_desktops_used: "Used in desktops",
		admin_desktop_additional_settings: "Additional settings:",
		admin_default_desktop: "Set as the default desktop",
		admin_default_desktop_header: "Default Desktop",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Desktop Icon",

		// Themes
		admin_themes: "Themes",
		admin_theme_list_instructions: "You can create a theme to make it easier to customize the web client for your organization. You can create multiple themes if you need to use different colors, fonts, or logos for different desktops in your environment.<br><br>After you create a theme, you can apply it to a desktop by configuring the theme on the <b>Appearance</b> tab of the desktop.",
		admin_theme_instructions: "Create a theme to control the colors and fonts that are displayed in the web client. Additionally, you can use the theme to change the logo, application name, and copyright text that is displayed on the log in page and in the banner.",
		admin_theme_heading: "Theme: <b>${0}</b>",
		admin_new_theme: "New Theme",
		admin_text_theme: "Theme",
		admin_delete_confirmation_themes: "Do you want to delete the selected themes?\n${0} themes are selected.",
		admin_theme_color: "Color",
		admin_theme_text: "Text",
		admin_theme_solid: "Solid",
		admin_theme_gradient: "Gradient",
		admin_theme_box: "Box",
		admin_theme_color_label: "Color ${0}:",
		admin_theme_name_invalid: "The theme name cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "The theme ID must be unique, and you cannot change the ID after you save the theme.<br><br>The ID can contain only alphanumeric characters.",
		admin_theme_name_hover: "The name cannot contain the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatic",
		admin_theme_logo_url_hover: "Enter the URL of the logo file. If the logo is on the same web application server as the web client, enter a relative URL, for example: /mycustomizations/banner_logo.png<br><br>It is recommended that the logo have a transparent background.",
		admin_theme_color_palette_title_heading: "Color Palette",
		admin_theme_color_palette_help_text: "Create the color palette for your theme, using the hexadecimal value or the color picker. You can add as many colors as you want.",
		admin_theme_color_add_button_label: "Add Color",
		admin_theme_color_remove_button_label: "Remove Color",
		admin_theme_global_title_heading: "Application-wide Elements",
		admin_theme_global_font: "Font family:",
		admin_theme_global_font_hover: "Select the font to use in the web client. The fonts are listed in order of precedence; the next font in the list is used only if the previous font is not installed on the client machine.",
		admin_theme_global_framework_color_label: "Framework color:",
		admin_theme_global_framework_color_hover: "Select the color to use for the following elements:<ul><li>Title bars on dialog boxes</li><li>The highlight color at the top of the selected tab</li><li>The content list view icons (Details view, Magazine view, Filmstrip view)</li></ul><br>This color is not used for the separators between sections of the web client. If you want to change the color of the separators, you must create a plug-in to provide a custom CSS file.",
		admin_theme_color_global_toolbar: "Global toolbar color:",
		admin_theme_color_global_toolbar_hover: "If you include the global toolbar in the web client, select the color of the toolbar.<br><br><b>Tip:</b> The toolbar is displayed in the banner at the top of the web client, so the color of the toolbar should complement the color of the banner.",
		admin_theme_global_selected_color: "Selected item color:",
		admin_theme_global_selected_color_hover: "Select the color to use when items are selected in the browse tree, the search tree, and the content list.<br><br>The hover color (the color used when a user hovers over an item) is derived from this color.",
		admin_theme_global_link_color: "Link color:",
		admin_theme_global_link_color_hover: "Select the color to use for all clickable URLs in the web client. For example, this color is used in Learn more links that are displayed throughout the web client.",
		admin_theme_login_title_heading: "Login Page Elements",
		admin_theme_page_background_label: "Login page background color:",
		admin_theme_login_page_background_hover: "Select the color to display behind the login pane.",
		admin_theme_login_pane_background_label: "Login pane background color:",
		admin_theme_login_pane_background_hover: "Select a color to display for the login pane. This color should complement the background color of the login page.",
		admin_theme_text_color: "Text color:",
		admin_theme_login_pane_text_color_hover: "Select a color to use for the login pane text. This color is used for the welcome text and field labels. This color should be legible against the background color of the login pane.",
		admin_theme_copyright_text: "Copyright text:",
		admin_theme_copyright_text_hover: "Specify whether to display copyright text on the login page.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "No copyright text",
		admin_theme_banner_title_heading: "Banner Elements",
		admin_theme_text_icons_color: "Text and icon color:",
		admin_theme_icon_color_label: "Icon color:",
		admin_theme_shadow_label: "Shadow:",
		admin_theme_banner_text_icons_hover: "Select a color to use for the text and icons in the banner. This color should be legible against the background color of the banner.",
		admin_theme_banner_product_name_label: "Product name:",
		admin_theme_banner_product_name_hover: "When you create a desktop, you can specify a custom name to display for the application. If you do not specify a custom name, IBM Content Navigator is used as the product name. Specify whether to use the application name that is defined in the desktop or an image in place of a name.",
		admin_theme_banner_product_name_desktop_defined_label: "Use Name from Desktop",
		admin_theme_banner_product_name_image: "Use Custom Logo (URL)",
		admin_theme_background_color_label: "Background color:",
		admin_theme_style_label: "Style:",
		admin_theme_banner_color_hover: "Select a color to use for the banner at the top of the application.<br><br><b>Tip:</b> Ensure that the color of the text on the banner is legible against the background color of the banner.",
		admin_theme_buttons_title_heading: "Buttons",
		admin_theme_navigation_title_heading: "Navigation Elements",
		admin_theme_navigation_icon_selected_label: "Selected icon color:",
		admin_theme_navigation_background_hover: "Select a color to use for the background of the feature navigation bar.",
		admin_theme_navigation_icon_color_hover: "Select a color to use for the icons in the feature navigation bar. When using the default layout on a desktop, this color should contrast with the background of the feature drop-down menu. When using the classic layout on a desktop, this color should contrast with the background of the feature navigation bar.",
		admin_theme_navigation_icon_selected_hover: "Select a color to use for the selected feature in the feature navigation bar. The color should complement the color of the icons and the background color of the feature navigation bar.<br><br>When using the classic layout on a desktop, this color is used as the hover color in the feature navigation bar.",
		admin_theme_button_background_color_hover: "Select a color to use for button backgrounds.",
		admin_theme_button_style_hover: "Select a button style.",
		admin_theme_button_text_icon_color_hover: "Select a color to use for text and images on buttons.",
		admin_theme_no_logo_label: "No Logo",
		admin_theme_custom_logo_label: "Custom Logo (URL)",
		admin_theme_banner_type: "Banner fill style:",
		admin_theme_banner_type_hover: "Specify whether the banner should be a solid color or gradient color. If you specify a gradient banner, the color that you specify for the banner color is the darkest color in the banner.<br><br><b>Tip:</b> Ensure that the color of the text on the banner is legible against the background color of the banner.",
		admin_theme_icon: "Theme Icon",
		admin_theme_buttons_and_links_title_heading: "Buttons, Fields, and Links",
		admin_theme_button_style_label: "Button style:",
		admin_theme_theme_style_label: "Theme style:",
		admin_theme_theme_style_hover: "Select the style on which to base the theme. You can change the style at anytime when creating or editing a theme. When you change from one style to another, the theme settings are reset to the default values.",
		admin_theme_accent_color_label: "Accent color:",
		admin_theme_accent_color_hover: "Select the color to use for the bar at the top of a dialog and for the loading spinner.",
		admin_theme_global_toolbar_text_color_label: "Global toolbar text color:",
		admin_theme_global_toolbar_text_color_hover: "If you include the global toolbar in the web client, select the color to use for the text in the toolbar.",
		admin_theme_banner_text_color_hover: "Select the color to use for the text in the banner.",
		admin_theme_banner_icon_color_hover: "Select the color to use for the icons in the banner.",
		admin_theme_button_color_label: "Color:",
		admin_theme_button_color_hover: "Select the color to use for the following elements:<ul><li>Title bars on dialog boxes</li><li>The highlight color at the top of the selected tab</li><li>The content list view icons (Details view, Magazine view, Filmstrip view)</li><li>Buttons, fields, and links</li></ul>The color used when a user hovers over a button is derived from this color. This color is not used for the separators between sections of the web client. If you want to change the color of the separators, you must create a plug-in to provide a custom CSS file.",
		admin_theme_theme_style_col_header: "Theme Style",

		admin_syncserver_consistency_checker: "Consistency checker:",
		admin_syncserver_consistency_checker_hover: "Run the consistency checker to ensure that the sync service databases has current information about the status of each item that is on the server. For example, run the consistency checker after a sync services database outage to get information about documents that were updated on the repository during the outage.",
		admin_syncserver_consistency_checker_button: "Run Consistency Checker",
		admin_syncserver_consistency_checker_started: "Started:",
		admin_syncserver_consistency_checker_ended: "Ended:",
		admin_syncserver_consistency_checker_duration: "Duration:",
		admin_syncserver_consistency_checker_items_processed: "Sync items processed:",
		admin_syncserver_consistency_checker_items_processed_success: "Sync items successfully processed:",
		admin_syncserver_consistency_checker_items_discovered: "New repository items discovered:",
		admin_syncserver_consistency_checker_change_updates: "Total updates:",
		admin_syncserver_consistency_checker_state: "State:",
		admin_syncserver_consistency_checker_state_done: "Done",
		admin_syncserver_consistency_checker_state_running: "Running",
		admin_syncserver_consistency_checker_user: "Submitted by:",
		admin_syncserver_consistency_checker_scheduled: "Scheduled:",

		admin_syncserver_dbcleanup: "Database Cleanup",
		admin_syncserver_dbcleanup_hover: "Run the database cleanup tool to remove any unused devices and items that are no longer synced from the database.",
		admin_syncserver_dbcleanup_button: "Database Cleanup",
		admin_syncserver_dbcleanup_state_done: "Done",
		admin_syncserver_dbcleanup_state_running: "Running",
		admin_syncserver_dbcleanup_started: "Started:",
		admin_syncserver_dbcleanup_ended: "Ended:",
		admin_syncserver_dbcleanup_state: "State:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Repositories deleted:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Synced item deleted:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Deleted devices:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Expired devices:",

		admin_syncserver_publicSyncUrl: "Sync services public URL:",
		admin_syncserver_publicSyncUrl_hover: "Specify the URL by which repositories can communicate with the IBM Content Navigator sync services. The default format of the URL is http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Sync client settings:",
		admin_syncserver_managed_hover: "Users cannot change these settings in the IBM Content Navigator Sync client.",
		admin_syncserver_managed_subfolder: "Folder levels to sync",
		admin_syncserver_managed_subfolder_hover: "If a user syncs a folder, specify the maximum number of folders that will be synced. For example, if a user specifies 3 folder levels, the folder that the user syncs and 2 levels of subfolders are synced.<br><br>Ensure that your environment is scaled to support the amount of sync traffic that is created by this setting.",
		admin_syncserver_managed_subfolder_all: "All Subfolders",
		admin_syncserver_managed_subfolder_none: "No Subfolders",
		admin_syncserver_managed_subfolder_no_more: "Limited levels",
		admin_syncserver_managed_subfolder_levels: "folders",
		admin_syncserver_managed_schedule: "Sync schedule",
		admin_syncserver_managed_schedule_hover: "Ensure that your environment is scaled to support the amount of sync traffic that is created by the sync schedule.<br><br>The maximum interval is 24 hours or 1440 minutes.<br><br>Users can override the sync schedule by clicking <b>Sync Now</b> in the client.",
		admin_syncserver_managed_schedule_manual: "Sync manually",
		admin_syncserver_managed_schedule_continuous: "Sync continuously",
		admin_syncserver_managed_schedule_every: "Sync at specified intervals",
		admin_syncserver_managed_schedule_minutes: "Minutes",
		admin_syncserver_managed_schedule_hours: "Hours",

		// redaction codes
		admin_new_reason_code: "New Redaction Reason",		
		admin_reason_code_name_invalid: "The redaction reason name cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "The description cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "The description cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "The name cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Description:",
		admin_reason_code_applications_hover: "The list of Datacap applications that are referencing this redaction reason.",
		admin_reason_code_applications: "Datacap applications",
		admin_delete_confirmation_reason_codes: "Do you want to delete the selected redaction reasons?",
		admin_delete_confirmation_reason_code: "Do you want to delete the selected redaction reason?",
		admin_reason_code_heading: "Redaction reason: <b>${0}</b>",
		admin_reason_code_list_instructions: "Redaction reasons indicate why sensitive data is protected by obscuring it from view. Each reason identifies a type of sensitive data that is concealed from general users.",
		admin_reason_code_instructions: "You can create a redaction reason for each type of sensitive data. You can then use that reason in a redaction policy to define who can see that data and who can create or modify redactions.",
		admin_reason_code_applications_label: "Datacap Applications",
		admin_reason_code_repositories: "Repositories",
		admin_reason_code_repositories_label: "Repositories",
		admin_reason_code_repositories_hover: "The list of ICN repositories that are referencing this redaction reason.",
		admin_reason_code_repositories_default_value: "Not Set",
		admin_reason_code_description_label: "Description",
		admin_reason_code_applications_default_value: "Not Set",
		admin_redaction_reasons: "Redaction Reasons",
		admin_redactions: "Role-based Redactions",
		admin_redactions_policies_roles: "Policies and Roles",
		admin_reasons: "Reasons",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "The ID cannot be edited.  It can be copied to the clipboard",
		
		// Role based administration
		admin_rba: "Role-based Desktop Administration",
		admin_rba_mobile_access_enabled: "This desktop is enabled for mobile access.",
		admin_rba_mobile_access_disabled: "This desktop is not enabled for mobile access.",
		admin_rba_confirm_delete_multiple: "Do you want to delete the selected administration roles?",
		admin_rba_confirm_delete_single: "Do you want to delete the selected administration role?",
		admin_rba_delete_multi_role_desktop: "One or more of the roles you selected is assigned to a desktop. You must remove roles from desktops before you can delete them.",
		admin_rba_delete_single_role_desktop: "The role you selected is assigned to the ${0} desktop. You must remove the role from the desktop before you can delete it.",
		admin_desktop: "Desktop",
		admin_rba_instructions: "You can create and manage desktop administration roles, which associate privileges granted to desktop administrators.",
		admin_rba_tab_instructions: "You can create a desktop administration role to grant permissions and associate them to the administrators of a desktop. You can assign a single role to a desktop.",
		admin_rba_not_used: "${0} is not used in any desktops.",
		admin_rba_desktops: "<b>${0} is used in the following desktops:</b>",
		admin_rba_new_role: "New Role",
		admin_rba_name_invalid: "The administration role name cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "The description cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "The description cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "The name cannot contain any of the following characters: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Description:</b> ${0}",
		admin_rba_membership: "Membership",
		admin_rba_general_priv: "General",
		admin_rba_appearance_priv: "Appearance",
		admin_rba_desktop_config_priv: "Desktop Configuration",
		admin_rba_app_name_priv: "Application name",
		admin_rba_theme_priv: "Theme",
		admin_rba_viewer_map_priv: "Viewer Map",
		admin_rba_merge_split_priv: "Merge and Split",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Menus",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Toolbars",
		admin_rba_ctx_menus_priv: "Context Menus",
		admin_rba_office_ribbon_priv: "MS Office Ribbon Bar Commands",
		admin_rba_office_menues_priv: "MS Office Context Menus",
		admin_rba_addl_settings_priv: "Additional Settings",
		admin_rba_mobile_priv: "Mobile",
		admin_rba_add_doc_dlg_priv: "Add Document Dialog",
		admin_rba_doc_mgmt_priv: "Document Management",
		admin_rba_def_redaction_priv: "Default Redaction Option",
		admin_rba_add_photos_priv: "Add photos from the camera and photo library",
		admin_rba_time_stamp_priv: "Time Stamp",
		admin_rba_add_docs_folders_priv: "Add documents and create folders to the repository",
		admin_rba_open_docs_priv: "Open documents in other applications",
		admin_rba_office_config_priv: "Office Configuration",
		admin_rba_tab_label_priv: "IBM ECM tab label",
		admin_rba_feature_sel_priv: "Feature Selection",
		admin_rba_general_config_priv: "General Configuration",
		admin_rba_favorites_priv: "Favorites",
		admin_rba_add_options_priv: "Add options in the Edit group",
		admin_rba_browse_priv: "Browse",
		admin_rba_outlook_int_priv: "Outlook Integration",
		admin_rba_search_priv: "Search",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Case",
		admin_rba_desktop_feat_priv: "Desktop Features",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Displayed Features",
		admin_rba_branding_priv: "Branding",
		admin_rba_home_priv: "Home",
		admin_rba_main_color_priv: "Main color",
		admin_rba_sec_color_priv: "Secondary color",
		admin_rba_teamspaces_priv: "Teamspaces",
		admin_rba_rbr_priv: "Role-based Redaction",
		admin_rba_et_mgr_priv: "Entry Template Manager",
		admin_rba_policies_roles_priv: "Manage Policies and Roles",
		admin_rba_work_priv: "Work",
		admin_rba_reasons_priv: "Reason Codes",
		admin_rba_tasks_priv: "Asynchronous Tasks",
		admin_rba_auth_priv: "Authentication",
		admin_rba_all_privs: "All privileges",
		admin_rba_some_privs: "Some privileges",
		admin_rba_no_privs: "No privileges",
		admin_add_users_groups_priv: "Add users and groups",
		admin_url_features_priv: "Manage URL features",
		admin_plugin_features_priv: "Manage plugin features",
		admin_addl_components_priv: "Additional Components",
		admin_global_toolbar_priv: "Global toolbar",
		admin_status_bar_priv: "Status bar",
		
		
		admin_refresh_message: "You must refresh your browser to use the updated data.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "You must refresh your browser to use the updated default desktop.",
		admin_desktop_refresh_message: "You must refresh your browser to use the updated desktop.",
		admin_action_open: "Open",
		admin_action_edit: "Edit",
		admin_action_copy: "Copy",
		admin_action_delete: "Delete",
		admin_action_copy: "Copy",
		admin_action_new: "Create New",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "This ID is already in use. You must specify a unique ID.",

		admin_searchable_properties_for: "Searchable properties for:",
		admin_repository_new: "New Repository",
		admin_desktop_new: "New Desktop",
		admin_desktop_file_documents: "Require users to save new documents and folders in a folder",
		admin_desktop_file_documents_hover: "Select this option if you want to require users to select a folder when adding items to the repository. If you do not select this option, users can add documents (IBM FileNet P8) or documents and folders (IBM Content Manager) without filing them in a folder.",
		admin_desktop_show_security_tab: "Show security settings during add and check in actions",
		admin_desktop_show_security_hover: "<b>IBM FileNet P8 users only.</b>  Select this option if you want to allow users to edit the security of documents and folders when adding or checking in items to this desktop.",
		admin_desktop_configure_security_inheritance: "Allow users to configure the security inheritance of folders",
		admin_desktop_configure_security_inheritance_hover: "<b>IBM FileNet P8 users only.</b>  Select this option if you want users to be able to customize the access to items in a folder by controlling the security inheritance of folders. If you select this option, users can specify whether users or groups can inherit the security from:<ul><li>A folder</li><li>A folder and its immediate subfolders</li><li>A folder and all of its subfolders</li></ul>",
		admin_desktop_appearance: "Appearance",
		admin_desktop_appearance_instruction: "You can customize the appearance of the desktop by changing the login page and banner that are displayed for the desktop.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "The layout specifies which features can be displayed in the web client and how the contents of the web client are arranged.<br><br><b>Tip:</b> You can define custom layouts by creating plug-ins. You must register the plug-in in the administration tool before you can select a custom layout.",
		admin_desktop_layout_default: "Default",
		admin_desktop_layout_custom: "Custom",
		admin_desktop_enable_workflow_email: "Enable this desktop for FileNet P8 workflow email notification",
		admin_desktop_enable_workflow_email_hover: "FileNet P8 users only. Select this option if you want to enable users to open the web client from the URLs that are included in email notifications that are generated by Process Engine.<br /><br />If you do not enable this option for any desktops, users cannot log into the web client from the URLs in notifications.<br /><br />If you enable this option on multiple desktops and more than one desktop meets the criteria that are specified in the URL in the notification, the web client uses the first desktop that matches the criteria. ",
		admin_desktop_prevent_create_new_search: "Prevent users from creating searches",
		admin_desktop_prevent_create_new_search_hover: "This option restricts users to using only existing searches and from creating open ended search that might not be optimized.</br></br>This setting does not impact teamspaces. The right to create searches in a teamspace is controlled by the role a user has on a given teamspace.",
		admin_desktop_prevent_create_new_unified_search: "Prevent users from creating cross-repository searches",
		admin_desktop_prevent_create_new_unified_search_hover: "This option restricts users to using only existing cross-repository searches and from creating open ended cross-repository searches that might not be optimized.",
		admin_desktop_hide_entry_template_not_found_warning: "Hide the warning that is displayed when the associated entry template is not found",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Select this option if you want to hide the warning message that is displayed when item properties are edited and the entry template associated with the item is not found.",
		admin_desktop_show_class_role_security_selection: "Allow users to configure role based security in entry templates",
		admin_desktop_show_class_role_security_selection_hover:	"<b>IBM FileNet P8 users only.</b> Select this option if you want users to configure entry templates to use role based security when setting security on documents and or folders using entry templates.  If you select this option,  entry template editors can specify whether role security objects are applied to an entry template definition.",
		admin_desktop_show_primary_multi_part: "Only open the primary document in viewer",
		admin_desktop_show_primary_multi_part_hover: "<b>IBM FileNet P8 users only.</b> Select this option if you only want the primary document file opened in the viewer.  Documents can have multiple files associated with them.  This option will only open the primary file associated with the document.",
			
		admin_desktop_redaction_save_mode: "Default redaction option:",
		admin_desktop_redaction_save_mode_hover: "Select default ViewONE Virtual viewer redaction save mode:</br>* Always ask user to choose: will cause the dialog to be shown on entry into redaction mode, to ask the user whether they want to check in as new version, create new document, or download content.</br>* Check in as a new version: will always save the redacted content back to a new version of the existing document.</br>* Save as an entirely new document: will always save the redacted content back as an entirely new document.</br>* Download and save on the client: will download the redacted content to the client system.",
		admin_desktop_redaction_save_mode_user_select: "Always ask user to choose",
		admin_desktop_redaction_save_mode_new_version: "Check in as a new version",
		admin_desktop_redaction_save_mode_new_document: "Save as an entirely new document",
		admin_desktop_redaction_save_mode_local_content: "Download and save on the client",

		admin_desktop_document_add_mode: "Add document dialog:",
		admin_desktop_document_add_mode_hover: "Specify the add dialog to use when adding documents that are created by IBM Content Navigator:<ul><li>New permanently redacted document</li><li>New merged and split document</li><li>New Microsoft Office document</li><li>New edit service document</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Add Document",
		
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Add Document Using Entry Template",
		
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Merge and Split:",
		
		admin_desktop_merge_and_split_enable_hover: "Specify whether you want users who access this desktop to be able to merge and split documents using a supporting viewer.",

		admin_desktop_merge_and_split_show_checkin: "Prompt users to provide property values when they check in changes to a document.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "If you select this option, the check-in dialog is displayed when users check in changes to a document in the Merge and Split mode.",

		admin_desktop_available_categories: "Available Features",
		admin_desktop_selected_categories: "Selected Features",

		admin_layout_banner_title: "Banner and login page",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Application name:",
		admin_desktop_application_name_hover: "Specify the application name to display in the banner.<br><br>Tip: Define the application name for other languages in the Labels / Desktop Labels tab.",
		admin_desktop_theme: "Theme:",
		admin_desktop_theme_hover: "Specify whether to use the default IBM Content Navigator theme or to use a custom theme for this desktop. To use a custom theme, you must create a theme in the <b>Themes</b> section of the administration tool.",
		admin_desktop_login_logo: "Login page logo:",
		admin_desktop_login_logo_hover: "If you want to change the logo that is displayed on the login page, you can specify the URL of a logo file. However, it is recommended that you use a custom theme to change the logo.",
		admin_desktop_login_logo_url_hover: "Enter the URL of the logo file. If the logo is on the same web application server as the web client, enter a relative URL, for example: /mycustomizations/login_logo.png<br><br>The logo should be no larger than 200 pixels wide and 150 pixels high.<br><br>It is recommended that the logo have a transparent background.",
		admin_desktop_banner_logo: "Banner logo:",
		admin_desktop_banner_logo_hover: "If you want to change the logo that is displayed on the banner, you can specify the URL of a logo file. However, it is recommended that you use a custom theme to change the logo.",
		admin_desktop_banner_logo_url_hover: "Enter the URL of the logo file. If the logo is on the same web application server as the web client, enter a relative URL, for example: /mycustomizations/banner_logo.png<br><br>The logo should be no larger than 72 pixels wide and 36 pixels high.<br><br>It is recommended that the logo have a transparent background.",
		admin_desktop_banner_background_color: "Banner background color:",
		admin_desktop_banner_background_color_hover: "If you want to change the background color of the banner, you can specify a custom color. However, it is recommended that you use a custom theme to change the color of the banner.",
		admin_desktop_banner_background_color_custom_hover: "Specify the color of the application banner as a hexadecimal color.",
		admin_desktop_banner_application_name_color: "Application name text color:",
		admin_desktop_banner_application_name_color_hover: "If you want to change the color of the application name, you can specify a custom color. However, it is recommended that you use a custom theme to change the color of the application name.",
		admin_desktop_banner_application_name_color_custom_hover: "Specify the color of the application name as a hexadecimal color.",
		admin_desktop_banner_menu_color: "Banner icon color:",
		admin_desktop_banner_menu_color_hover: "If you change the background color of the banner, you might need to change the color scheme of the icons in the banner to make them more visible. Specify whether to display the light or dark version of the banner icons.<br><br>However, it is recommended that you use a custom theme to change the color of the icons.",
		admin_desktop_login_page_content: "Login page content:",
		admin_desktop_login_page_content_hover: "If you want to display additional information on the login page, such as announcements about system outages or where users can get help with user names and passwords, you can specify the URL of the content that you want to display.",
		admin_desktop_login_page_content_url_hover: "Enter the URL of the login page content. If the content is on the same web application server as the web client, enter a relative URL, for example: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Password rules:",
		admin_desktop_password_rules_hover: "If you want to provide users with guidelines for creating passwords, such as restricted characters or the minimum number of characters, you can specify the URL of a page that contains your password rules.",
		admin_desktop_password_rules_url_hover: "Enter the URL of the password rules content. If the content is on the same web application server as the web client, enter a relative URL, for example: /mycustomizations/passwords.html",
		admin_desktop_help_url: "End user help URL:",
		admin_desktop_help_url_hover: "You can use the help that is shipped with IBM Content Navigator, or you can redirect users to custom help content by taking one of the following actions:<br><br><ul><li>Directing to a custom help system</li><li>Adding help to the instance of IBM Knowledge Center that is deployed with IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Enter the URL of your custom help system. IBM Content Navigator appends index.jsp?content=/com.ibm.usingeuc.doc/ and a file name to the end of the URL that you specify.  For \"Learn more\" links in the interface to work, the help system must use the same file names as the integrated end user help. ",
		admin_desktop_deprecated_appearance_title: "Deprecated Settings",
		admin_desktop_deprecated_appearance_instructions: "If you use a custom theme, these settings are overridden by the custom theme. You should migrate these settings to a custom theme, which provides more detailed styling than the settings in this section. In addition, a custom theme can be used by multiple desktops.",

		admin_desktop_plugins_title: "Enable or disable plug-ins for this desktop.",
		admin_desktop_plugins_enable_all_plugins: "Enable all deployed plug-ins for use with this desktop",
		admin_desktop_plugins_select_plugins: "Select the deployed plug-ins to enable for use with this desktop",
		admin_desktop_plugins_select_plugin: "Select Plug-in",

		admin_desktop_layout_features: "Displayed features:",
		admin_desktop_layout_features_hover: "Select the features that you want users to have access to from this desktop. The features are displayed in the order that they are listed.<br><br>When you select a feature, you can customize some of the behaviors of the feature within the desktop, such as the default repository that is selected for the feature.",
		admin_desktop_layout_default_repository: "Default repository:",
		admin_desktop_layout_default_repository_layout_hover: "Specify which repository is selected by default when users open this feature.",
		admin_desktop_layout_document_thumbnails: "Document thumbnails:",
		admin_desktop_layout_document_thumbnails_hover: "Specify whether to display thumbnails for documents in the Document Information pane.<br><br>Displaying thumbnails can slow the performance of the web client.",
		admin_desktop_layout_show_filmstrip_view: "Filmstrip view:",
		admin_desktop_layout_show_filmstrip_view_hover: "Specify whether to allow users to switch the content list display to the filmstrip view.<br><br>The filmstrip view generates a preview of each document that a user selects. However, using the filmstrip view can slow the performance of the web client. In addition, you must configure the HTML conversion viewer to see document previews.",
		admin_enabled: "Enable",
		admin_disabled: "Disable",
		admin_include: "Include",
		admin_exclude: "Exclude",
		admin_layout_teamspaces_default_repository: "Teamspaces:",
		admin_layout_entry_templates_default_repository: "Entry Templates:",
		admin_layout_other_features_default_repository: "Search and Browse:",
		admin_layout_work_default_repository: "Work:",
		admin_layout_default_feature: "Default feature:",
		admin_default_category_placeholder: "Select a feature",
		admin_layout_default_feature_hover: "Specify which feature is displayed when users log in to this desktop.",
		admin_layout_default_feature_warning: "Changing the default feature may affect the time needed to load the application.",
		admin_layout_feature_list_header: "Feature",
		admin_layout_show_statusbar: "Status bar:",
		admin_layout_show_statusbar_hover: "Specify whether to display the status bar at the bottom of the desktop.<br><br>If you hide the status bar, users cannot see information about non-error events, such as:<ul><li>The document was added to the repository.</li><li>The search returned 59 documents.</li></ul>",
		admin_layout_show_magazineview: "Magazine view:",
		admin_layout_show_magazineview_hover: "Specify whether to allow users to switch the content list display to the magazine view.<br><br>The magazine view increases the height of each entry in the content list, which reduces the number of items that can be displayed in the content list at the same time.",
		admin_layout_show_detailsview: "Details view:",
		admin_layout_show_detailsview_hover: "Specify whether to allow users to switch the content list display to the details view.<br><br>The details view maximizes the number of rows visible in the content list.",
		admin_feature_config_docinfopane_label: "Document info pane:",
		admin_feature_config_docinfopane_hoverhelp: "Specify whether users can access the document information pane in this feature.",
		admin_feature_config_docinfopane_default_label: "Default behavior:",
		admin_feature_config_docinfopane_expanded: "Expanded",
		admin_feature_config_docinfopane_collapsed: "Collapsed",
		admin_feature_config_docinfopane_expand_on_select: "Expand when item is selected",
		admin_layout_features_title: "Desktop Features",
		admin_layout_features_instructions: "Specify which features users can access from this desktop.  Additionally, you can customize the behavior of each feature that is included in the desktop.",
		admin_layout_components_title: "Additional Desktop Components",
		admin_layout_components_instructions: "You can disable some of the components of the desktop if you want a more streamlined interface or if you want to improve the performance of the web client.",
		admin_layout_featureconfig_instructions: "Select a feature to configure",
		admin_layout_featureconfig_no_configuration: "No feature configuration available.",
		admin_layout_featureconfig_label: "Configuration for feature ${0}",
		admin_layout_featureconfig_title: "Feature configuration",
		admin_layout_featureconfig_taskManagerURL: "To use this feature, you must enable and configure IBM Content Navigator to connect to the task manager service. Enable the task manager service in the <b>Settings</b> section of this administration tool.",
		admin_feature_config_show_my_checkouts_label: "My Checkouts pane:",
		admin_feature_config_show_my_checkouts_hoverhelp: "The My Checkouts pane enables users to run a search for all of the items that they have checked out on a specific repository. Specify whether users can access the My Checkouts pane from the Home feature.<br/><br/><b>Restriction:</b> This feature requires that you have at least one IBM Content Manager, IBM FileNet P8, or OASIS CMIS repository associated with this desktop.",

		admin_feature_config_default_repository_icon_text: "Default repository",
		admin_show: "Show",
		admin_hide: "Hide",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "You cannot remove the Administration feature from the Admin Desktop",
		admin_warning_label: "Warning:",
		admin_layout_show_globaltoolbar: "Global toolbar:",
		admin_layout_show_globaltoolbar_hover: "Specify whether to display the toolbar in the banner at the top of the desktop.<br><br>The global toolbar includes actions that enable users to add documents, folders, and holds to the repository. The available actions depend on the repository to which the user is connected.",
		admin_interface_text_name_label: "Label Type",

		admin_interface_text_label_description: "You can customize the text that is displayed in certain areas of the web client. The labels are displayed for all repositories and desktops in your configuration. Enter the text that you want to see in the interface in the Current Label field.<br><br><b>Important:</b> Any changes that you make to the labels will not be displayed in the administration tool.",
		admin_interface_text_label_action: "Action Labels",
		admin_interface_text_label_action_description: "Action labels are displayed on buttons and in menus throughout the web client. You can define different action labels for each type of repository.",
		admin_interface_text_label_application: "Application Labels",
		admin_interface_text_label_application_description: "Application labels are displayed throughout the web client.",
		admin_interface_text_label_system: "System Property Labels",
		admin_interface_text_label_system_description: "The system properties that are displayed vary by repository. You can customize the labels that are displayed for the system properties that are associated with the documents and folders in your repositories.",
		admin_interface_text_label_desktop: "Desktop Labels",
		admin_interface_text_label_desktop_description: "If you customized the name of the application in a desktop, you can customize that name in languages other than English. You can also customize the names of the IBM FileNet P8 application spaces in a desktop.",

		admin_interface_text_system_label: "System Label",
		admin_interface_text_current_label: "Current Label",
		admin_interface_text_default_label_heading: "Default Label",
		admin_interface_text_default_label: "Default label:",
		admin_interface_text_displayed_in_label: "Displayed For",
		admin_interface_text_displayed_in_document_folder: "Documents and folders",
		admin_interface_text_displayed_in_document: "Documents",
		admin_interface_text_displayed_in_folder: "Folders",
		admin_interface_text_displayed_in_admin_application_space: "Application space label",
		admin_interface_text_displayed_in_desktop: "Feature label for mobile",
		admin_interface_text_displayed_in_admin_application_name: "Application Name",

		admin_new_desktop: "New Desktop",
		admin_new_repository: "New Repository",
		admin_new_menu: "New Menu",
		admin_new_viewer_mapping: "New Viewer Map",
		admin_new_mapping_label: "New Mapping",
		admin_new_icon_mapping: "New Icon Mapping",
		admin_viewer_mapping_list_instructions: "You can configure which viewers the web client uses to display different types of content. A viewer map defines which MIME types are associated with each viewer that you want to use. You can create multiple viewer maps if you want to use different viewers for different desktops.",
		admin_viewer_mapping_instructions: "Specify the viewers that you want to use to open files. If you want to use a custom viewer, you must integrate the viewer as a plug-in before you can add it to the viewer map.<br><br><b>Important:</b> When a user opens a document, the web client searches the list of viewer mappings to find the first viewer that can open the document based on the operating system that the user is running and the repository that the user is connected to. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "New Plug-in",
		admin_menu_list_instructions: "You can create customized toolbars and context menus to control which actions are available to users. You cannot edit the default menus, but you can create copies of existing menus to restrict the actions that are available or to add custom actions that are defined in plug-ins.<br><br>If you want to create a new type of menu, you must define the menu in a plug-in.",
		admin_menu_id_hover: "The ID must be unique, and you cannot change the ID after you save the menu.<br><br>The ID can contain only alphanumeric characters and are case sensitive.",
		admin_menu_id_disabled_hover: "The menu ID cannot be changed. If you want to use a different ID, you must create a new menu.",
		admin_menu_default_instructions: "You cannot edit this menu because it is a default menu. If you want to edit this menu, you must create a copy of the menu.",
		admin_menu_toolbar_instructions: "You can restrict the actions that are available for this toolbar or you can add custom actions that are defined in a plug-in. You can also organize the actions by adding separators to the toolbar.",
		admin_menu_toolbar_custom_instructions: "This toolbar is defined by a plug-in. If you want to edit this toolbar, you must update the plug-in or create a copy of the toolbar.",
		admin_menu_context_menu_instructions: "You can restrict the actions that are available for this context menu or you can add custom actions that are defined in a plug-in. You can also organize the actions by adding separators and submenus to the context menu.",
		admin_menu_context_menu_custom_instructions: "This context menu is defined by a plug-in. If you want to edit this context menu, you must update the plug-in or create a copy of the context menu.",
		admin_desktop_list_instructions: "You can create multiple desktops to give different users access to the content they need. For example, you can create a desktop that only allows users to search for content or a desktop that gives users access to a single repository. ",
		admin_plugin_updated: "The configuration of the selected plug-in has been changed. You must refresh your browser for your changes to take effect.",
		admin_repository_ci_heading: "Content Integrator repository: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager repository: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager repository: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand repository: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) repository: <b>${0}</b>",
		admin_repository_box_heading: "Box repository: <b>${0}</b>",
		admin_repository_generic_heading: "Repository: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Do you want to delete the selected desktops?\n${0} desktops are selected.",
		admin_delete_confirmation_menus: "Do you want to delete the selected menus?\n${0} menus are selected.",
		admin_delete_confirmation_repositories: "Do you want to delete the selected repositories?\n${0} repositories are selected.",
		admin_delete_confirmation_viewer_mappings: "Do you want to delete the selected viewer maps?  ${0} maps are selected.",
		admin_delete_confirmation_icon_mappings: "Do you want to delete the selected icon configurations?\n${0} icon configurations are selected.",
		admin_delete_confirmation_plugins: "Do you want to delete the selected plug-ins?\n${0} plug-ins are selected.",
		admin_delete_confirmation: "Do you want to delete the selected items?\n${0} items are selected.",

		admin_viewer_mapping_id_hover: "The ID must be unique, and you cannot change the ID after you save the viewer map.<br><br>The ID can contain only alphanumeric characters and are case sensitive.",
		admin_viewer_mapping_id_disabled_hover: "The viewer map ID cannot be changed. If you want to use a different ID, you must create a new viewer map.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "The default desktop cannot be deleted.",

		admin_desktop_heading: "Desktop: <b>${0}</b>",
		admin_menu_toolbar_heading: "Toolbar: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Custom Toolbar: <b>${0}</b>",
		admin_menu_context_menu_heading: "Context Menu: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Custom Context Menu: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "A plug-in can be either a JAR file or a compiled class file.<br/><br/><b>Important:</b> The IBM Content Navigator web application server must be able to access the plug-in file on the local file system or through a URL.",
		admin_plugin_list_instructions: "You must use the administration tool to register plug-ins for the web client. If a plug-in requires additional configuration, the configuration parameters are displayed after you register the plug-in.<br /><br /><b>Important:</b> If you edit a plug-in that is referenced in another area of the administration tool, such as a menu, you might encounter problems with the behavior of the plug-in. In addition, the plug-ins are invoked in the order that they are listed. If a plug-in needs to be run before another plug-in, ensure that the plug-ins are listed in the order in which they must be run.",
		admin_plugin_cannot_delete: "The selected plug-ins cannot be deleted because some plug-ins depend on them.<br/>Selected plug-ins: ${0}<br/>Dependent plug-ins: ${1}",
		admin_plugin_cannot_disable: "The selected plug-ins cannot be disabled because some plug-ins depend on them.<br/>Selected plug-ins: ${0}<br/>Dependent plug-ins: ${1}",
		admin_plugin_cannot_add: "The plug-in cannot be added because some plug-ins it depends on are missing or disabled. Missing or disabled plugins: ${0}",
		admin_plugin_cannot_enable: "The selected plug-ins cannot be enabled because some plug-ins they depend on are missing or disabled.<br/>Selected plug-ins: ${0}<br/>Missing or disabled plugins: ${1}",
		admin_plugin_save_order: "Save Order",
		admin_plugin_load: "Load",
		admin_plugin_load_hover: "Specify the URL of the plug-in",
		admin_plugin_file_hover: "If the plug-in JAR file is on your local file system, you can enter the fully qualified path or URL of the plug-in file. If the plug-in JAR file is on a remote server, you must enter the URL of the plug-in file.",
		admin_plugin_classfolderpath_hover: "The compiled class file must be on the IBM Content Navigator web application server.<br/><br/>Enter the fully qualified path of the folder where the plug-in classes are compiled and generated.<br/><br/>The path must not contain the package name of the plug-in class. For example, the default path for the sample plug-in class on Windows is C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Enter the complete name of the Java class inside the class file that should be loaded and called as the plug-in class.<br/>For example, the class name for the sample plug-in is com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "The plug-in JAR file was not found at the specified URL. Ensure that the JAR file is on the web application server and that the URL and file name are correct.",
		admin_plugin_for_repository_not_loaded: "You cannot edit this repository. The plug-in that defines and supports this type of repository is not loaded. On the Plug-ins tab, edit the plug-in to verify that it is configured correctly and that it is loaded.",
		admin_plugin_repository_types: "Repository types:",
		admin_plugin_viewers: "Viewers:",
		admin_plugin_features: "Features:",
		admin_plugin_layouts: "Layouts:",
		admin_plugin_not_available: "Not available",
		admin_plugin_config_params: "Configuration Parameters:",
		admin_viewer_def_heading: "Viewer Map: <b>${0}</b>",
		admin_users_and_groups: "Users and Groups",
		admin_general: "General",
		admin_logging: "Logging",
		admin_authentication: "Authentication",		
		admin_rolebase_role: "Role:",
		admin_settings_logging_instructions: "You can use logging to troubleshoot problems with the web client. You can refine your logging if you know that a problem occurs within a specific Java class or for a particular user. Error information is written to your web application server error log files.",
		admin_settings_logging_instructions2: "<b>Debug Logging Settings</b><br />If you know that a problem occurs for a specific client host machine or user, you can target your debug logging to that machine or user. You can capture debug information in a production environment without significantly impacting the performance of your system.<br /><br /><b>Important:</b> If you specify a client host machine or user, this setting overrides any other logging settings. After you capture the information that you need, set this option to <b>None</b> to resume standard logging for your environment.",
		admin_settings_export_config_hover: "Export the current system configuration information to a file for use with the IBM Support Assistant Data Collector. The file is saved to the location that is defined by the user.home Java system property.",
		admin_logging_level: "Application-level logging:",
		admin_logging_level_hover: "Logging levels affect how much information is stored on your server. Selecting <b>Error</b> captures the least amount of logging information. Selecting <b>Debug</b> captures the most information.<br /><br />Do not specify <b>Debug</b> in a production environment unless you are instructed to do so by IBM Software Support.",
		admin_logging_level_0: "No logging",
		admin_logging_level_1: "Error",
		admin_logging_level_2: "Warning",
		admin_logging_level_3: "Information",
		admin_logging_level_4: "Debug",
		admin_logging_classes: "Java class-level logging:",
		admin_logging_classes_hover: "By default, all Java classes and packages are included in the web application server error logs. However, you can specify which classes or packages to include or exclude from your logging. You can use the web application server error logs to determine which classes to include or exclude.<br><br>If you know that a problem occurs in a specific class, you can specifically include that class in the log files. When you include a class in your error logs, all of the other classes are excluded from the log file.<br><br>If you know that a problem does not occur in a class and you want to reduce the size of the log file, you can exclude that class from the log files.",
		admin_logging_classes_include: "Include",
		admin_logging_classes_include_all: "All classes",
		admin_logging_classes_include_specified: "Specific classes",
		admin_logging_classes_include_specified_msg: "Specify which classes to include.",
		admin_logging_classes_exclude: "Exclude",
		admin_logging_classes_exclude_none: "None",
		admin_logging_classes_exclude_specified: "Specific classes",
		admin_logging_classes_exclude_specified_msg: "Specify which classes to exclude.",
		admin_logging_debug: "Debug logging for:",
		admin_logging_debug_hover: "<b>Important:</b> Review the web application server log files before you specify either a client host machine IP address or user. The value that you provide must match the value that is displayed in the log file.",
		admin_logging_debug_none: "None (default)",
		admin_logging_debug_host: "Client host machines (IP addresses)",
		admin_logging_debug_host_msg: "Specify the IP address of one or more client machines that you want to log debug information for. Use a comma to separate IP addresses.<br /><br /><b>Important:</b> Review the web application server log files before you specify an IP address. The value that you provide must match the value that is displayed in the log file.",
		admin_logging_debug_user: "Users",
		admin_logging_debug_user_msg: "Specify the user name of one or more users that you want to log debug information for. Use a comma to separate user names.<br /><br /><b>Important:</b> Review the web application server log files before you specify a user name. The value that you provide must match the value that is displayed in the log file.",

		admin_office_settings_logging_instructions: "You can use logging to troubleshoot problems with IBM Content Navigator for Microsoft Office. You can refine your logging if you know that a problem occurs within a specific class or for a particular user. Error information is written to the application log files on the IBM Content Navigator for Microsoft Office client host machines. ",
		admin_office_settings_logging_instructions2: "<b>Debug Logging Settings</b><br />If you know that a problem occurs for a specific client host machine or IBM Content Navigator for Microsoft Office user, you can target your debug logging to that machine or user. You can capture debug information in a production environment without significantly impacting the performance of your system. <br /><br /><b>Important:</b> If you specify a client host machine or user, this setting overrides any other logging settings. After you capture the information that you need, set this option to  <b>None</b> to resume standard logging for your IBM Content Navigator for Microsoft Office environment. ",
		admin_office_logging_debug_hover: "<b>Important:</b> Review the client machine log files before you specify either a client host machine IP address or user. The value that you provide must match the value that is displayed in the log file. ",
		admin_office_logging: "Office Logging",
		admin_office_logging_classes: "Class-level logging:",
		admin_office_logging_classes_hover: "By default, all classes and packages are included in the IBM Content Navigator for Microsoft Office error logs. However, you can specify which classes or packages to include or exclude from your logging. You can use the client machine logs to determine which classes to include or exclude.<br /><br />If you know that a problem occurs in a specific class, you can specifically include that class in the log files. When you include a class in your error logs, all of the other classes are excluded from the log files. <br /><br />If you know that a problem does not occur in a class and you want to reduce the size of the log file, you can exclude that class from the log files. ",
		admin_office_logging_debug_hover: "<b>Important:</b> Review the client machine log files before you specify either a client host machine IP address or user. The value that you provide must match the value that is displayed in the log file.",
		admin_office_logging_additional_settings: "Additional settings:",
		admin_office_logging_additional_settings_hover: "Specify the additional settings",
		admin_office_logging_file_size: "Log file size",
		admin_office_logging_file_size_hover: "Specify the size at which IBM Content Navigator for Microsoft Office creates a new log file. When a log file reaches the maximum size, the current log is renamed to include the date (with the format YYYYMMdd) and a file increment number (for example, ICNExcelAddin-20121116-5.log) and a new log file is created. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Show stack trace on dialogs",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "You can optionally show stack trace information on message dialogs to facilitate problem resolution. Even if you do not enable this option, detailed stack trace information is always included in the IBM Content Navigator for Microsoft Office error logs. ",

		admin_icon_state_twisty: "State Icons",
		admin_icon_state_icon: "State Icon",
		admin_icon_state: "State",
		state_contains_label: "State contains",
		admin_icon_state_instructions: "You can customize the icons that are displayed next to the documents, folders, and work items on your repositories.<br><br><b>Tip:</b> You can specify whether to display state icons for each repository in your environment.",
		admin_icon_state_dialog_title: "State Icon Mapping",
		admin_icon_state_dialog_instructions: "You can map the selected state to a predefined icon that is provided with the web client or to a custom icon.",

		admin_icon_mapping_twisty: "MIME Type Icons",
		admin_icon_mapping_dialog_title: "Icon Mapping",
		admin_icon_mapping: "Icon Mapping",
		admin_icon_mapping_instructions: "You can map a list of MIME types to a predefined icon that is provided with the web client or to a custom icon.",
		admin_icon_mapping_list_instructions: "You can customize the icons that are displayed for the different MIME types that are stored on your repository. The web client uses the icons in the order that they are listed. If a MIME type is listed more than once, the first icon that is associated with that MIME type is used.",
		admin_icon_mapping_icon_label: "What icon do you want to use?",
		admin_icon_mapping_file_name: "Custom icon:",
		admin_icon_mapping_file_name_heading: "Custom Icon",
		admin_icon_mapping_file_name_placeholder: "Specify the URL of the icon",
		admin_icon_mapping_file_name_hover: "Enter the URL of the icon. If the icon is on the same web application server as the web client, enter a relative URL. For example: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Predefined icon:",
		admin_icon_mapping_class_name_heading: "Predefined Icon",
		admin_icon_mapping_class_name_hover: "Select an icon that is provided with the web client.",
		admin_icon_mapping_class_name_placeholder: "Select an icon",

		admin_p8_instructions: "This information is shared by all of the FileNet Content Manager repositories that are configured for the web client.",
		admin_p8_collaboration_config: "Optional FileNet Collaboration Services Configuration",
		admin_p8_collaboration_config_instructions: "You can configure these parameters if you want to tune FileNet Collaboration Services for your IBM FileNet P8 environment.",
		admin_p8_use_url_incoming: "Use the URL on incoming requests to generate response URLs:",
		admin_p8_use_url_incoming_hover: "In most FileNet Collaboration Services environments, you can use the URL of an incoming request to generate the URL in a response. Select <b>Yes</b> unless one of the following situations applies to your environment:<ul><li>You want to force client applications to access FileNet Collaboration Services through a specific URL.<li>Your proxy server settings cause FileNet Collaboration Services to produce invalid URLS.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL:",
		admin_p8_use_url_incoming_http_hover: "Specify the URL by which client applications can access FileNet Collaboration Services with the form http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL:",
		admin_p8_use_url_incoming_https_hover: "If FileNet Collaboration Services is configured to use SSL, specify the HTTPS URL by which client applications can access FileNet Collaboration Services with the form https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Hide user email addresses in server responses:",
		admin_p8_hide_email_addresses_hover: "You can hide users’ email addresses in server responses if you need to comply with privacy policies. For example, you can hide the list of users’ email addresses when the server returns a list of documents and information about the users who created or edited the documents.",

		admin_p8_mask_user_ids: "Mask user IDs in log files:",
		admin_p8_mask_user_ids_hover: "You can hide user names in FileNet Collaboration Services log files if you need to comply with privacy policies. When you enable this option, user names are replaced with hash values. This enables you to provide log files to external companies, such as IBM, for support purposes without compromising your users’ names or activity records.",

		admin_p8_soft_delete: "Move deleted files to the recovery bin:",
		admin_p8_soft_delete_hover: "When users delete items, move the items to a recovery bin, rather than deleting the items from the repository. The items remain in the recovery bin until they are purged. This setting is ignored if the target repository does not support recovery bins.<br><br><b>Restriction:</b> Recovery bins are supported on IBM FileNet P8 Version 5.2 or later and require the Social Collaboration Base Extensions add-on.",

		admin_p8_download: "Content Download HTTP Cache Configuration",
		admin_p8_download_instructions: "If your IBM FileNet Content Manager repositories contain many large files, you can configure Content Download HTTP Cache (CDHC) to enable FileNet Collaboration Services to securely redirect content requests for large files to a dedicated web server.<br/><br/>This feature requires IBM HTTP Server. Additionally, you must update the IBM HTTP Server httpd.conf file.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Specify whether you want to enable Content Download HTTP Cache (CDHC) for all of the IBM FileNet Content Manager repositories in your environment. You can specify a minimum file size at which files are cached.",
		admin_p8_download_cache_folder: "Fully qualified cache directory:",
		admin_p8_download_cache_folder_hover: "Specify the fully qualified path of the directory where you want to store cached files. The directory can be on any operating system or device, such as a shared network directory, as long as it is visible as a file system to FileNet Collaboration Services and IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias for the cache location:",
		admin_p8_download_cache_url_hover: "Specify the alias that is used to point to the cache directory from the FileNet Collaboration Services URL. Specify the alias with the format /alias, for example, /cdhc.<br/><br/>When /cdhc is included in a URL, the application is redirected to the fully qualified cache directory.",
		admin_p8_download_cache_max_files: "Maximum number of cached files:",
		admin_p8_download_cache_max_files_hover: "When the maximum number of files is reached, the oldest file is removed from the cache.<br><br>If you specify the maximum number of files to cache and the maximum size of the cache, the oldest file is removed from the cache when the lower of the two conditions is met.",
		admin_p8_download_cache_max_size: "Maximum cache size (in GB):",
		admin_p8_download_cache_max_size_hover: "When the maximum cache size is reached, the oldest file is removed from the cache.<br/><br/>If you specify the maximum number of files to cache and the maximum size of the cache, the oldest file is removed from the cache when the lower of the two conditions is met.",
		admin_p8_download_cache_cleanup_duration: "Maximum cleanup duration (in seconds):",
		admin_p8_download_cache_cleanup_duration_hover: "Specify the maximum amount of time that the cleanup operation can take. The default duration is 5 seconds.<br><br>Any files that are subject to deletion but that remain in the cache after the cleanup operation will be removed during a future cleanup operation.",
		admin_p8_download_cache_cleanup_min: "Minimum interval between cache cleanup operations (in seconds):",
		admin_p8_download_cache_cleanup_min_hover: "Specify the minimum amount of time that should elapse between cache cleanup operations. The default time is 3,600 seconds (1 hour).<br><br>Cache cleanup operations occur only when there is an active request to download content from the cache. If requests come in every minute, the cleanup operation will occur every hour. However, if three hours pass between download requests, the cleanup operation will not occur until the next download request is received.",
		admin_p8_download_cache_min_lifetime: "Minimum time in cache (in seconds):",
		admin_p8_download_cache_min_lifetime_hover: "Specify the minimum amount of time that a file is kept in the cache before it can be removed. The default time is 3,600 seconds (1 hour).<br><br>Even if the cache reaches the maximum size or contains the maximum number of files, the oldest file in the cache cannot be deleted until the file has been in the cache for the specified amount of time.",
		admin_p8_download_cache_size_threshold: "Minimum file size to cache (in KB):",
		admin_p8_download_cache_size_threshold_hover: "Specify the minimum size at which CDHC should be used to cache files. If a file is smaller than the specified size, the file is directed through the web application server on which FileNet Collaboration Services is deployed. The default size is 1,000 KB.",
		admin_p8_download_guard_header: "HTTP header for gatekeeping:",
		admin_p8_download_guard_header_hover: "If a client application does not route a request through IBM HTTP Server, the cached content cannot be downloaded. You can specify that only incoming requests with a specific HTTP header (which is added to requests from IBM HTTP Server) can access the cached content to prevent download failures.<br><br>The HTTP header is configured in IBM HTTP Server and is present on all incoming requests that are routed through IBM HTTP Server. If a request does not have the HTTP header, the content is routed through the web application server rather than IBM HTTP server.",
		admin_p8_download_generate_config: "Generate configuration",
		admin_p8_download_generate_config_label: "IBM HTTP Server configuration:",
		admin_p8_download_generate_config_label_hover: "For the CHDC configuration to work, you must update the IBM HTTP Server httpd.conf file. Click Generate Configuration to generate the statements that must be added to the httpd.conf file.",

		admin_logging_viewone_pro: "ViewONE Professional logging:",
		admin_logging_viewone_virtual: "ViewONE Virtual logging:",
		admin_logging_viewone_streamer: "Document Streaming Server Module  logging:",
		admin_logging_viewone_streamer_hover: "The Document Streaming Server Module logging options are applicable only if you enabled streaming for PDF or TIFF files in the <b>Daeja ViewONE</b> section of the administration tool.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module logging:",
		admin_logging_viewone_redaction_hover: "The Permanent Redaction Server Module logging options are applicable only if you are entitled to use the Redaction module of Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Stream PDF files:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "If you have large PDF documents in your repository, you can enable the viewer to stream document content to make it faster for users to view these documents. However, if streaming does not work in your environment, you can disable streaming.",
		admin_daeja_viewonepro_stream_tiff_documents: "Stream TIFF files:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "If you have large TIFF documents in your repository, you can enable the viewer to stream document content to make it faster for users to view these documents. However, if streaming does not work in your environment, you can disable streaming.",
		admin_daeja_viewonepro_show_file_buttons: "File buttons",
		admin_daeja_viewonepro_show_file_menus: "File menus",
		admin_daeja_viewonepro_enable_file_keys: "File hot keys",
		admin_daeja_viewonepro_file_keys_hover_help: "Specify whether you want users to use keyboard shortcuts to work with files, for example, to open or save a file. For more information about specific hot keys, see the FileKeys parameter description in the IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Print buttons",
		admin_daeja_viewonepro_show_print_menus: "Print menus",
		admin_daeja_viewonepro_enable_print_keys: "Print hot keys",
		admin_daeja_viewonepro_print_keys_hover_help: "Specify whether you want users to use keyboard shortcuts to print files, for example, print page or print document. For more information about specific hot keys, see the PrintKeys parameter description in the IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Invert buttons",
		admin_daeja_viewonepro_annotation_tooltip: "Default custom annotation tooltip:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Enter the text to display when no tooltip is specified for a custom annotation. The text can include replaceable tokens. For example, &quot;&lt;creator&gt; created this annotation on &lt;createdateonly&gt;.&quot; For more information about replaceable tokens, see the customAnnotationsToolTip parameter in the IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Use predefined custom tooltip",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Use system defined custom tooltip showing in text box below",
		admin_daeja_viewonepro_help_url: "Help URL:",
		admin_daeja_viewonepro_help_url_hover_help: "Specify the URL of the web page that contains help documentation for the viewer. The help button on the viewer toolbar and the help menu action open the web page. If you do not specify a URL, the help button and menu action are not displayed.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Image stamp resource context:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Route unsupported content to the browser:",
		admin_daeja_viewonepro_route_docs_hover_help: "Users can view unsupported image files by routing them to the browser, which opens the appropriate application for viewing the file. For example, to open a Microsoft Word document, the browser uses the Microsoft Word viewer.",
		admin_daeja_viewonepro_scale: "Autofit image:",
		admin_daeja_viewonepro_scale_best: "Best Fit",
		admin_daeja_viewonepro_scale_ftow: "Fit To Width",
		admin_daeja_viewonepro_scale_ftoh: "Fit To Height",
		admin_daeja_viewonepro_enable_hotkeys: "Enable hot keys:",
		admin_daeja_viewonepro_show_features: "Show buttons and menus:",
		admin_daeja_custom_settings: "Additional settings:",
		admin_daeja_custom_settings_hover_help: "You can add other parameters by specifying the parameter name and value. For example, you can specify &quot;scrollbars&quot; and &quot;true&quot; if you want scrollbars to be displayed when the image is scaled to a size larger than the display area. For more information about parameter names and values, see IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Default custom annotation tooltip:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Enter the text to display when no tooltip is specified for a custom annotation. The text can include replaceable tokens. For example, &quot;&lt;creator&gt; created this annotation on &lt;createdateonly&gt;.&quot; For more information about replaceable tokens, see the customAnnotationsToolTip parameter in the IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Use predefined custom tooltip",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Use system defined custom tooltip showing in text box below",
		admin_daeja_virtual_image_stamp_resource_context: "Image stamp resource context:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
    
		admin_daeja_virtual_license_path:"License files path:",
		admin_daeja_virtual_license_path_hover_help:"Specify the fully qualified path of the directory containing the lic-server-virtual.v1 and lic-server.v1 license files.",
		admin_default_license_path:"Use the default license files path",
		admin_license_path_specified:"Use the custom license files path",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Cache directory:",
		admin_daeja_streamer_cache_root_hover_help: "Specify the fully qualified path of the directory where you want to store cached files for faster access. It is recommended that you use a local directory to improve performance.",
		admin_daeja_streamer_settings: "Additional settings:",
		admin_daeja_streamer_settings_hover_help: "You can add other parameters by specifying the parameter name and value. For example, you can specify “cookieAllowedDomainList”  and a comma-separated list of host servers.  For more information about parameter names and values, see IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Settings:",
		admin_daeja_redaction_settings_hover_help: "You can add other parameters by specifying the parameter name and value. For example, you can specify “burnIncrementalAnnotations” and”true”. For more information about parameter names and values, see IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "New Setting",
		admin_daeja_setting_dialog_title_edit: "Edit Setting",
		admin_daeja_setting_dialog_hover_help: "Add other parameters by specifying the parameter name and value. For example, you can specify “scrollbars” and “true” if you want scrollbars to be displayed when the image is scaled to a size larger than the display area.",
		admin_daeja_setting_dialog_field_hover_help: "For more information about parameter names and values, see the Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Daeja ViewONE Logging",
		admin_daeja_logging_trace: "Enable trace logging",
		admin_daeja_logging_trace_net: "Enable network logging",
		admin_daeja_logging_trace_annotations: "Enable annotations logging",
		admin_daeja_logging_log_file: "Log file:",
		admin_daeja_logging_instructions: "You can use logging to troubleshoot problems with Daeja ViewONE Professional and Daeja ViewONE Virtual. If you know that a problem occurs for a specific feature, you can target your logging to that feature.",

		admin_v1pro_logging_trace_hover: "Use this setting to troubleshoot general issues with the viewer.<br><br>Logging information is written to the Java console on the client machine. You can access the Java console from the Control Panel (Windows) or System Preferences (Mac) for your operating system.",
		admin_v1pro_logging_trace_net_hover: "Use this setting to troubleshoot the following issues:<ul><li>Issues with your server connection</li><li>Issues with MIME types</li><li>Issues with files being too long</li></ul>In addition, you can use network trace logging to determine where delays occur when using Daeja ViewONE Professional.<br><br>Logging information is written to the Java console on the client machine. You can access the Java console from the Control Panel (Windows) or System Preferences (Mac) for your operating system.",
		admin_v1pro_logging_trace_annotations_hover: "Use this setting to troubleshoot issues with creating, saving, or loading annotations.<br><br>Logging information is written to the Java console on the client machine. You can access the Java console from the Control Panel (Windows) or System Preferences (Mac) for your operating system.",

		admin_virtual_logging_trace_hover: "Use this setting to troubleshoot general issues with the viewer.<br><br>By default, the logging information is written to the virtual.log file in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_virtual_logging_trace_net_hover: "Use this setting to troubleshoot the following issues:<ul><li>Issues with your server connection</li><li>Issues with MIME types</li><li>Issues with files being too long</li></ul>In addition, you can use network trace logging to determine where delays occur when using Daeja ViewONE Virtual.<br><br>By default, the logging information is written to the virtual.log file in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_virtual_logging_trace_annotations_hover: "Use this setting to troubleshoot issues with creating, saving, or loading annotations.<br><br>By default, the logging information is written to the virtual.log file in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_virtual_logging_log_file_hover: "If you enable logging for the viewer, you must specify the fully qualified path and name of the log file where you want to store logging information.  It is recommended that you name the log file virtual.log.",

		admin_streamer_logging_trace_hover: "Use this setting to troubleshoot general issues with the Document Streaming Server Module.<br><br>By default, logging information is written to the streamer.log file, which is in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_streamer_logging_trace_net_hover: "Use this setting to troubleshoot the following issues:<ul><li>Issues with your server connection</li><li>Issues with specific MIME types</li><li>Issues with files being too long</li></ul>In addition, you can use network trace logging to determine where delays occur when using the Document Streaming Server Module.<br><br>By default, logging information is written to the streamer.log file, which is in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_streamer_logging_log_file_hover: "If you enable logging for the Document Streaming Server Module, you must specify the fully qualified path and name of the log file where you want to store logging information.  It is recommended that you name the log file streamer.log.",

		admin_redaction_logging_trace_hover: "Use this setting to troubleshoot general issues with the Permanent Redaction Server Module.<br><br>By default, logging information is written to the redacttofile.log file, which is in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_redaction_logging_trace_net_hover: "Use this setting to troubleshoot the following issues:<ul><li>Issues with your server connection</li><li>Issues with specific MIME types</li><li>Issues with files being too long</li></ul>In addition, you can use network trace logging to determine where delays occur when using the Permanent Redaction Server Module.<br><br>By default, logging information is written to the redacttofile.log file, which is in the config subdirectory of the IBM Content Navigator installation directory.",
		admin_redaction_logging_log_file_hover: "If you enable logging for the Permanent Redaction Server Module, you must specify the fully qualified path and name of the log file where you want to store logging information.  It is recommended that you name the log file redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configure features for your viewers and services.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "If you use the web client to connect to one or more Content Manager OnDemand repositories, you must specify information that the OnDemand Web Enablement Kit requires to function correctly. This information is shared by all of the Content Manager OnDemand repositories that are configured for the web client.",
		admin_ondemand_language: "Language:",
		admin_ondemand_tempdir: "ODWEK temporary directory:",
		admin_ondemand_tracegrp: "ODWEK Tracing",
		admin_ondemand_tracedir: "Trace directory:",
		admin_ondemand_tracelevel: "Trace level:",
		admin_ondemand_tracelevel_0: "0 - No logging",
		admin_ondemand_tracelevel_1: "1 - Error message logging",
		admin_ondemand_tracelevel_2: "2 - Error and warning message logging",
		admin_ondemand_tracelevel_3: "3 - Error, warning, and informational message logging",
		admin_ondemand_tracelevel_4: "4 - All messages are captured, including function trace",
		admin_ondemand_max_trace_filesize: "Maximum trace file size:",
		admin_ondemand_max_trace_filesize_unlimited: "Unlimited",
		admin_ondemand_max_trace_filesize_limited: "Limited (Recommended)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "This value is out of range. The value must be an integer between 1 and 1,000,000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF installation directory:",
		admin_ondemand_language_hover: "Specify the language in which ODWEK returns messages.",
		admin_ondemand_tempdir_hover: "Enter the directory where the OnDemand Web Enablement Kit stores temporary files during processing. You must enter the fully qualified path of an existing directory on the web application server.",
		admin_ondemand_tracedir_hover: "Enter the directory where you want to store the ODWEK trace file arswww.trace. You must enter the fully qualified path of an existing directory on the web application server.",
		admin_ondemand_tracelevel_hover: "Specify the level of logging information that is written to the arswww.trace file. <b>Error message logging</b> captures the least amount of logging information. <b>All messages are captured, including function trace</b> captures the most information.<br /><br />Do not specify <b>All messages are captured, including function trace</b> in a production environment unless you are instructed to do so by IBM Software Support.",
		admin_ondemand_max_trace_filesize_hover: "Specify whether you want to allow the ODWEK trace file to grow to an unlimited size or whether you want the web client to create new log files when the log file reaches a certain size. The default is to allow the trace log file to grow until the web application is stopped on the web application server.",
		admin_ondemand_max_trace_unlimited_hover: "Select this option if you want the ODWEK trace information written to a single log file. If you select this option, you might have a log file that is too large to open with a standard file viewer.",
		admin_ondemand_max_trace_limited_hover: "Select this option if you want the ODWEK trace information written to smaller log files. When a log file reaches the maximum size, the current log is renamed to include the date (arswww.trace.YYYYMMDD.HHMMSS) and a new log file is created.",
		admin_ondemand_afp2pdf_installdir_hover: "If you want to use the AFP2PDF Transform utility to convert AFP documents to PDF documents for viewing and printing, specify the directory where the AFP2PDF Transform utility is installed on the web application server. For example: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administrators",
		admin_adminusers_heading_text_multi: "You must specify which users have administrative privileges in the web client. Only administrators can log in to the administration desktop.<br /><br /><b>Important:</b> The user IDs of the IBM Content Navigator administrators must match:<ul><li>User IDs that exist on your web application server. The user IDs do not have to be administrators on the web application server.</li><li>User IDs that exist on the default repository that is configured for each desktop that includes the Administration feature.</li></ul>",
		admin_adminusers_heading_text_single: "You must specify which users have administrative privileges in the web client. Only administrators can log in to the administration desktop.<br /><br /><b>Important:</b> The user IDs of the IBM Content Navigator administrators must match user IDs that exist on your web application server. The user IDs do not have to be administrators on the web application server.",
		admin_adminusers_newuser: "New administrator:",
		admin_adminusers_add: "Add",
		admin_adminusers_remove: "Remove",
		admin_adminusers_listheading: "Administrators",
		admin_adminusers_nameInvalid: "The value cannot be a duplicate.",

		admin_sync_server_instructions: "<b>FileNet P8 users only:</b> If you plan to enable sync services for one or more repositories, you must configure the web client to use sync services. The sync services configuration is shared by all of the repositories in your environment.",
		admin_settings_instructions: "The values that you specify on the Settings tab apply to all of the desktops in your configuration.",
		admin_autocomplete: "Automatically populate user names:",
		admin_autocomplete_hover: "Specify whether you want the web client to store user names in browser cookies to enable the browser to automatically populate user names in the web client during login.<br><br>If you enable this option, the user name of the last user to log in to the web client is stored in the browser cookies and is automatically displayed on the Login page when a user opens the web client.<br><br>You should disable this option if the application is accessed from shared workstations, or if you are concerned about storing user names in browser cookies.<br /><br />This option does not apply to mobile or custom applications.",
		admin_autocomplete_enable: "Enable",
		admin_autocomplete_disable: "Disable",
		admin_cultural_collation: "Use locale-specific sorting:",
		admin_cultural_collation_hover: "If you enable locale-specific sorting, the sorting is done on the repository server. This can decrease the performance of the web client.<br><br>Disabling locale-specific sorting can improve the performance of the web client.",
		admin_cultural_collation_enable: "Enable",
		admin_cultural_collation_disable: "Disable",
		admin_base_ui_style: "Theme style",
		admin_base_ui_style_hover: "Specify the style of the default theme that is used in the web client. This style is used only on desktops that use the <b>Default</b> theme (as specified on the <b>Appearance</b> tab of the desktop configuration).<br/></br><b>Restriction:</b> If your desktop configurations use custom themes, the custom themes are based on the classic style, regardless of which style you select.",
		admin_base_ui_style_classic: "Classic",
		admin_access_control_access: "Limit access to specific users and groups",
		admin_access_control_access_show: "Show access control data",
		admin_access_control_access_enable: "Yes",
		admin_access_control_access_disable: "No",
		admin_mobile_access: "Allow access from mobile applications",
		admin_mobile_access_hover: "By default, users can access the web client from the IBM Content Navigator iOS application.<br /><br /><b>Important:</b> If you prevent users from accessing the web client from the iOS application, users can still access the web client from the web browsers on their mobile devices and from any custom applications that are written by using the IBM Content Navigator APIs and that work on mobile devices.",
		admin_mobile_access_enable: "Yes",
		admin_mobile_access_disable: "No",
		admin_error: "Error message information:",
		admin_error_custom: "Search custom support content",
		admin_error_default: "Search IBM Support content <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Specify where you want to direct users for more information when they encounter an error message. You can direct users to information on the IBM Support Portal, or you can direct users to an internal resource, such as a help desk.",
		admin_error_URL: "URL prefix:",
		admin_error_URL_hover: "Enter the URL of the resource that you want to direct users to when they encounter an error, such as a help desk. For example: http://localhost:port_number. The web client appends the number of the message to the URL.",
		admin_prompt_close_without_save: "Do you want to close without saving your changes?",
		admin_object_expiration_time: "Cache refresh interval (in minutes):",
		admin_object_expiration_time_hover: "You can increase the amount of time that configuration objects, such as desktops, are kept in the cache to improve the performance of the web client.  The default time is 10 minutes. The maximum time is 1440 minutes (1 day).<br /><br />You must restart the web application for your changes to take effect.<br /><br />If IBM Content Navigator is deployed in a highly available clustered environment, any changes to the configuration objects will not be propagated to the nodes in the cluster until the cache is refreshed.",
		admin_temp_file_cleanup_interval: "Scan interval for cleaning up viewer cache (in hours):",
		admin_temp_file_cleanup_interval_hover: "Schedule how often the temporary directory is scanned to find and delete expired temporary files. By default, the temporary directory is scanned every six hours. You can specify 6-48 hours.",
		admin_temp_file_expiration_interval: "Expire viewer cache (in hours):",
		admin_temp_file_expiration_interval_hover: "Specify the amount of time that temporary files related to activities in the viewer remain in browser cache. By default, these temporary files expire after 24 hours. You can specify 12-48 hours.",
		admin_encryption_key_hover: "Key used for Navigator encryption functions.",
		admin_encryption_key: "Encryption key:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Branding",
		admin_mobile_branding_main_color: "Main color:",
		admin_mobile_branding_secondary_color: "Secondary color:",
		admin_mobile_device_title: "MaaS360 Management",
		admin_mobile_device_enable_maas360: "Enable MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Enable MaaS360 hover help goes here",
		admin_mobile_device_maas360_developer_id: "MaaS360 developer ID:",
		admin_mobile_device_maas360_license_key: "MaaS360 license key:",
		admin_mobile_settings_title: "Settings",
		admin_mobile_email_address_hover_help: "The email address is used in the mobile application when a user clicks \"Send Error Report.\"",
		admin_mobile_email_address: "Email address:",
		admin_invalid_email_address_message: "The email address that you entered is not in the correct format. Enter the correct address and try again.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Some data is not valid.",
		admin_configuration_parameters: "Configuration Parameters",
		admin_configuration_optional_features: "Optional Features",
		admin_configuration_optional_features_p8_instructions: "Select the features that you want to enable on this repository.<p><b>Important:</b> If you enable a feature that installs an add-on to the repository, you must be connected to the repository as a Content Platform Engine or Content Engine administrator.</p>",
		admin_configuration_optional_features_cm_instructions: "Select the features that you want to enable on this repository.<p><b>Important:</b> These features modify the data model on your repository. To enable them, you must be connected to the repository as a library server administrator.</p>",
		admin_system_properties: "System Properties",
		admin_system_properties_for: "System properties for:",
		admin_available_properties: "Available Properties",
		admin_displayed_properties: "Displayed Properties",
		admin_selected_properties: "Selected Properties",
		admin_selected_filtered_properties: "Hidden Properties",
		admin_available_operators: "Displayed Operators",
		admin_selected_filtered_operators: "Hidden Operators",
		admin_system_properties_shown: "Shown Properties",
		admin_system_properties_hidden: "Hidden Properties",
		admin_available_menu_items: "Available Actions:",
		admin_selected_menu_items: "Selected Actions:",
		admin_menu_global: "Applies when no items are selected:",
		admin_menu_multiple_document: "Applies when multiple items are selected:",
		admin_menu_privileges: "Required privileges:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Repository types:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separator",
		admin_browse: "Browse",
		admin_search: "Search",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Role-based Redaction",
		admin_connections_library_enabled: "IBM Connections enabled",
		admin_office_conf: "Edit Integration",
		admin_desktop_conf_label: "Desktop Configuration",
		admin_ms_office_conf_label: "Office Configuration",
		admin_workflows: "Workflows",
		admin_file_types: "File Types",
		admin_file_type_contains_label: "File type contains",
		admin_name_propepty: "Name",
		admin_cm_name_property_default: "Use default name",
		admin_cm_name_property_default_hover: "By default, the ICM hierarchical name (ICM$NAME) property is used as the item name, if the property is defined for the item.  If the ICM hierarchical name (ICM$NAME) property is not available, the first property that is flagged as \"represents\" is used as the item name.",
		admin_cm_name_property: "Specify item name property",
		admin_cm_name_property_hover: "Specify which property is used as the name for documents and folders.",
		admin_name_property: "Name property:",
		admin_doc_name_property: "Document name property:",
		admin_doc_name_property_hover: "Specify which property is used as the document name.",
		admin_folder_name_property: "Folder name property:",
		admin_folder_name_property_hover: "Specify which property is used as the folder name.",
		admin_all_searches_label: "Number of searches to display:",
		admin_unlimited: "No limit",
		admin_limit: "Limit to",
		admin_repository: "Repository:",
		admin_application_space: "Application Space",
		admin_available_application_spaces: "Available Application Spaces:",
		admin_selected_application_spaces: "Selected Application Spaces:",
		admin_label: "Label",
		admin_repository_box_placeholder: "Select a Box repository",
		admin_repository_placeholder: "Select a repository",
		admin_search_match: "Match:",
		admin_search_match_all: "Match all of the search criteria",
		admin_search_match_any: "Match any of the search criteria",
		admin_search_match_hover: "Specify which option is selected by default in the <b>Property options</b> menu.",

		admin_repository_redactions_instructions: "You can configure role-based redactions for this repository.",
		admin_repository_redaction_policies_description: "You can create and manage redaction policies, which associate redaction reasons with users and groups who can read sensitive data and can edit annotations that protect that sensitive data from view.",
		admin_repository_redaction_roles_instruction: "You can create a redaction role to associate the specified users and groups with either the ability to read sensitive data or the ability to edit annotations that protect sensitive data from view. The redaction role must be associated with a redaction reason in a redaction policy before those users and groups can read the data or edit the annotations.",
		admin_repository_redaction_reasons_instruction: "You can configure redaction reasons for your repository.",
		admin_repository_redaction_policies: "Redaction Policy Configuration",
		admin_repository_redaction_roles: "Redaction Roles Configuration",
		admin_repository_redaction_reasons: "Redaction Reasons Configuration",
		admin_repository_redaction_roles_type: "Type",
		admin_repository_redaction_roles_type_hover: "An editor can create, modify, or delete specific types of role-based redactions while a viewer can view specific types of sensitive data.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Viewer",
		admin_repository_redaction_roles_membership: "Membership",
		admin_repository_redaction_roles_membership_hover: "Select the editors that you want to have this role.",
		admin_repository_redaction_roles_user_group_hover: "Search for the users and groups, or select the editors, that you want to have this role.",
		admin_repository_redaction_roles_description: "You can create and manage redaction roles, which associate users and groups with the ability to read sensitive data and edit annotations that protect sensitive data from view.",
		admin_repository_redaction_new: "New Redaction Role",
		admin_repository_redaction_role_avail_editors: "Available Redaction Editors",
		admin_repository_redaction_role_avail_users: "Available Users",
		admin_repository_redaction_role_avail_groups: "Available Groups",
		admin_repository_redaction_role_selected_editors: "Selected Redaction Editors",
		admin_repository_redaction_role_selected_users_groups: "Selected Users and Groups",
		admin_repository_redaction_role_add_editor: "New Editors...",
		admin_repository_redaction_role_access_type: "Access",
		admin_repository_redaction_role_access_type_access: "Allow",
		admin_repository_redaction_role_access_type_no_access: "Deny",
		admin_repository_redaction_role_users: "Users",
		admin_repository_redaction_role_groups: "Groups",
		admin_repository_redaction_role_editors: "Editors",
		admin_delete_confirmation_redaction_roles: "Do you want to delete the selected redaction role?",
		admin_repository_edit_redaction_role: "Redaction role: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Default access",
		
		// RBA
		desktop_user_group_acl: "Desktop Administrators",
		desktop_user_group_remove: "Remove",
		desktop_rba_membership: "Membership:",
		desktop_rba_membership_list_label: "Name",
	
		
		admin_repository_redaction_policy_hover: "Provide a description that will enable users to distinguish between this policy and the other policies.",
		admin_repository_new_redaction_policy: "New Redaction Policy",
		admin_repository_policy_name: "Policy Name",
		admin_repository_reason_redactions: "Redaction Reasons:",
		admin_repository_role_editors: "Editors",
		admin_repository_role_viewers: "Viewers",
		admin_repository_redaction_policy_instruction: "You can create a redaction policy to associate the selected redaction reasons with both redaction editors and redaction viewers.",
		admin_repository_redaction_reasons_hover: "Select one or more types of sensitive data that you do not want most users to be able to see, for example, personally-identifiable information, trade secrets, or information that is confidential or proprietary to your company.",
		admin_repository_readaction_available_reasons: "Available Reasons",
		admin_repository_readaction_selected_reasons: "Selected Reasons",
		admin_repository_readaction_new_reason: "New Reason...",
		admin_repository_redeaction_reasons: "Redaction reasons:",
		admin_repository_readaction_editor_permmission: "Redaction editors:",
		admin_repository_redaction_editors_hover: "Select the roles that can create and modify the redaction for the selected reasons.",
		admin_repository_readaction_new_editor_role: "New Editor Role...",
		admin_repository_readaction_available_editors: "Available Editor Roles",
		admin_repository_readaction_selected_editors: "Selected Editor Roles",
		admin_repository_readaction_viewer_permmission: "Redaction viewers:",
		admin_repository_redaction_viewers_hover: "Select the roles that can view the sensitive data for the selected reasons. The redaction is not applied for users and groups with these roles.",
		admin_repository_readaction_new_viewer_role: "New Viewer Role...",
		admin_repository_readaction_available_viewers: "Available Viewer Roles",
		admin_repository_readaction_selected_viewers: "Selected Viewer Roles",
		admin_repository_reason_redactions_header: "Redaction Reasons",
		admin_delete_confirmation_redaction_policy: "Do you want to delete the selected redaction policy?",
		
		admin_role_type_repository: "Repository",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Template",
		admin_role_type_teamspace: "Teamspace",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Viewer",
		
		admin_collaboration_services_instructions: "If you have  IBM Connections and  a FileNet Collaboration Services web application, you can configure community teamspaces and activity streams for the repository.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Community Library Configuration",
		admin_collaboration_community_instruction: "You can configure one repository in your IBM FileNet P8 domain to store IBM Connections community libraries (also called teamspaces). When users create a community library through IBM Connections, it is stored on the repository that is designated as the community library repository.",
		admin_collaboration_community_teamspaces: "Use this repository for community libraries:",
		admin_collaboration_community_teamspaces_hover: "You can use only one repository in your IBM FileNet P8 domain to store new community libraries. If you enable this repository and you have an existing repository, the existing repository will be disabled. However, any existing libraries will remain on the current repository.",
		admin_collaboration_connections_anonymous: "Allow anonymous access to public content:",
		admin_collaboration_connections_anonymous_hover: "If your IBM Connections server contains public or moderated communities, you can configure FileNet Collaboration Services to allow users to browse and download content from the libraries in those communities without having to log in first.<br><br>Users who access community libraries anonymously cannot create, modify, or delete content.<br><br><b>Important:</b> You must designate an IBM FileNet P8 LDAP user as the anonymous user and configure that user with the <b>Anonymous</b> role in WebSphere Application Server.",
		admin_collaboration_connections_url: "IBM Connections URL:",
		admin_collaboration_connections_url_hover: "Specify the URL to your IBM Connections server with the format http://IBMConnectionsServer:port_number.  If IBM Connections is configured to use IBM HTTP Server, you can omit the port number from the URL.<br><br>The URL must be accessible to IBM Connections users because this is the link that FileNet Collaboration Services uses to create links to document landing pages in IBM Connections.",
		admin_collaboration_connections_url_http_use: "Use the IBM Connections URL",
		admin_collaboration_connections_url_https_use: "Use the IBM Connections HTTPS URL",
		admin_collaboration_connections_url_specify: "Specify the URL",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "If IBM Connections is configured to use SSL, specify the HTTPS URL to your IBM Connections server with the format https://IBMConnectionsServer:port_number.  If IBM Connections is configured to use IBM HTTP Server, you can omit the port number from the URL.",

		admin_collaboration_connections_gadget_url: "IBM Connections gadget URL:",
		admin_collaboration_connections_retrieval_url: "IBM Connections retrieval URL:",
		admin_collaboration_connections_security: "Community administrators:",
		admin_collaboration_connections_security_hover: "Specify the users and groups who can administer content in community libraries.<br><br>Global administrators can create, modify, delete and provide access to community libraries and the contents of community libraries. When you specify a user as a global administrator, the user is given ClbGlobalAdministrator privileges in the repository.<br><br>Global review administrators can approve and reject content that is under review for publication in a community library. When you specify a user as a global review administrator, the user is given ClbGloablReviewAdministrator privileges in the repository.",

		admin_collaboration_connections_admins: "Global administrators",
		admin_collaboration_connections_admins_review: "Global review administrators",
		admin_collaboration_connections_seedlist: "Index the community library contents:",
		admin_collaboration_connections_seedlist_hover: "Specify whether you want IBM Connections to crawl the community libraries in this repository to create a search index. Creating an index can affect the performance of the repository.<br><br>If the Social Collaboration Search Indexing Extensions are installed on the repository, this option is enabled by default. If the Social Collaboration Search Indexing Extensions are  not installed on the repository, the add-on is installed on the repository when you enable this option",
		admin_collaboration_activity_stream: "Activity Stream Event Configuration",
		admin_collaboration_activity_stream_label: "Push event information to IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Specify whether you want to push event information, such as document creation, check-outs, check-ins, comments, tags, and shares, to IBM Connections.<br><br><b>Important:</b> Pushing notifications to IBM Connections can affect the performance of the repository.",

		admin_collaboration_activity_stream_instruction: "You can configure this repository to push event information, such as comments and document approvals, to IBM Connections. Events are displayed on the <b>Recent Updates</b> page in IBM Connections communities. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignore event information for specific users and groups:",
		admin_collaboration_activity_stream_ignored_ids_hover: "You can ignore events that are generated by specific users or groups, such as administrators or system accounts, to reduce the number of notifications that users see. For example, if you are migrating content, you might want to specify that events that are generated by the account that is used for the migration are ignored.",
		admin_collaboration_activity_stream_userid: "IBM Connections user name:",
		admin_collaboration_activity_stream_userid_hover: "Specify the system account that Content Platform Engine will use to authenticate to and send event information to IBM Connections. The user must be in the <b>trustedExternalApplication</b> role in the Widget Container application in IBM Connections.<br><br><b>Tip:</b> By default, the IBM Connections administrator has the appropriate privileges. You can use the administrator ID as the user name",
		admin_collaboration_activity_stream_password: "IBM Connections user password:",

		admin_help_url: "End user help URL:",
		admin_help_url_hover: "<b>Important note:</b> IBM Knowledge Center Customer Installed will not be updated as of IBM Content Navigator Version 3.0.0. Contact customer service for more information on using customized help.<br><br>As of IBM Content Navigator Version 3.0.0, the URL for the end user help goes to the IBM Knowledge Center. The URL for the IBM Knowledge Center is: http://www.ibm.com/support/knowledgecenter.<br><br>If you want to continue to use a previous version of IBM Knowledge Center Customer Installed, specify the URL of the instance of IBM Knowledge Center Customer Installed that was deployed by the IBM Content Navigator Configuration and Deployment Tool. The URL must be accessible to client machines. The URL has the format http://server_name:port_number/kc.<br><br>You can get the server name and port number from the console.log file in the KnowledgeCenter/logs subdirectory of the IBM Content Navigator installation directory.",

		admin_help_default: "Use the default help provided by IBM",
		admin_custom_help: "Use a custom help system",
		admin_help_kc: "Use custom help in IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Important note:</b> IBM Knowledge Center Customer Installed will not be updated as of IBM Content Navigator Version 3.0.0. Contact customer service for more information on using customized help.<br><br>If you want to continue to use a previous version of IBM Knowledge Center Customer Installed, select this option to continue to add content to the instance of IBM Knowledge Center Customer Installed that you have previously deployed.",
		admin_help_taxonomy: "Taxonomy code:",
		admin_help_taxonomy_hover: "Specify the taxonomy code for your custom help.<br><br>The taxonomy code for IBM Content Navigator is SSEUEX. If you want to display your help under a different product name in IBM Knowledge Center Customer Installed, you must add a unique taxonomy code to the KC_taxonomy.ditamap file in the KnowledgeCenter/usr/taxonomy directory of the IBM Content Navigator installation directory.",
		admin_help_context: "Help context:",
		admin_help_context_hover: "Specify the context for your custom help.<br><br>The help for IBM Content Navigator is in the KnowledgeCenter/usr/content/com.ibm.usingeuc.doc directory of the IBM Content Navigator installation directory. The context of the default help is com.ibm.usingeuc.doc. If you want to provide custom help, add the content to a new subdirectory in the KnowledgeCenter/usr/content/ directory.",
		admin_help_welcome: "Landing page:",
		admin_help_welcome_hover: "Specify the name of the topic that you want to use as the landing page when users access the help. You must create a properties file that specifies the location of the landing page and add the properties file to the KnowledgeCenter/usr/conf directory of the IBM Content Navigator installation directory.",

		admin_settings_mimetype_extensions_jsonfile: "Mime Type Extensions JSON File:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verify the JSON file name and the full path to the file. The file can be a general file from the file system or a URL that points to the JSON file.  <br><br>The JSON file content is an array for mime type definitions. <br><br>A Mime Type definition includes four keys \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". The first two keys \"mimeTypes\", \"extensions\" are required, and they can be string arrays that are separated by \",\". The last two keys \"fileType\", \"iconName\" are optional. <br><br>For example: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		
		admin_taskmanager_title: "Task Manager Configuration",
		admin_taskmanager_service: "Task manager service:",
		admin_taskmanager_service_hover: "Specify whether you want to use the task manager service to create and run asynchronous tasks. <br><br>If you change this setting, you must restart the IBM Content Navigator web application for the changes to take effect.",
		admin_taskmanager_url: "Task manager service URL:",
		admin_taskmanager_url_hover: "Specify the URL by which other applications can communicate with the task manager service. The URL has the format http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Task manager log directory:",
		admin_taskmanager_logdirectory_hover: "By default, the log files for the task manager service are written to the same directory as the web application server log files. <br><br>If you want logging information written to a different directory on the IBM Content Navigator server, specify the fully qualified path of the directory where you want to store the log files that are generated by the task manager component. <br><br>If you change this setting, you must restart the IBM Content Navigator web application for the changes to take effect.",
		admin_taskmanager_heartBeatMonitor: "Cluster heartbeat monitoring",
		admin_taskmanager_heartBeatMonitor_hover: "Highly available cluster environments only. If you enable this option, the task manager service reroutes tasks from nodes that are currently down to nodes that are currently running. <br><br>If you change this setting, you must restart the IBM Content Navigator web application for the changes to take effect.",

		admin_syncserver_title: "Sync Server Configuration",
		admin_syncserver_enable: "Sync services:",
		admin_syncserver_enable_hover: "Specify whether you want users who access this desktop to be able to synchronize their items across their workstations and mobile devices.<br><br><b>Important:</b> To use this feature you must also complete the following tasks:<ul><li>Specify the <b>Sync services public URL</b> in the <b>Sync Services</b> section of the administration tool.</li><li>Add a repository for which sync services are enabled to this desktop.</li></ul>If you disable this option but add a repository for which sync services is enabled to this desktop, the setting on the repository is ignored.",
		
		admin_mobileqr_enable: "Show IBM Navigator QR code on login page:",
		admin_mobileqr_enable_hover: "Enable this option if you want to display the QR code for the IBM Navigator mobile application on the web client login page. <br><br>When a user scans the QR code, they are taken to the appropriate app store for their device, where they can download the IBM Navigator mobile application.",

		admin_streamlineservice_enable: "Edit Service:",
		admin_streamlineservice_enable_hover: "FileNet P8 users only. Enable this option if you want desktop users to be able to easily add and edit documents from native applications on their workstations. <br><br>To use this setting, you must also: <ul><li>Enable the edit service on one or more repositories that are associated with this desktop</li><li>Install the IBM Content Navigator Edit client on user workstations</li></ul>",

		admin_repository_general_instructions: "You must connect to the repository before you configure parameters, system properties, folders, and so on.",
		admin_repository_system_instructions: "Specify which system properties are displayed for the documents and folders on this repository.",

		admin_desktop_general_create_instructions: "A desktop determines what the user can see and do when they log in to the web client. After you create a desktop, you can send the desktop URL to users so that they can access the desktop.",
		admin_desktop_admin_instructions: "The administration desktop is provided with the web client to enable administrative users to set up the web client. This desktop has access to all of the repositories that are configured for the web client.",
		admin_desktop_repositories_instructions: "Specify which repositories you want users to have access to from this desktop. You must configure your repositories before you can add them to the desktop.<br><br><b>Tip:</b> You can limit which repositories are available for each feature when you configure the desktop layout.",
		admin_desktop_menus_instructions: "Specify which menus you want users to have access to from this desktop. The menus specify which actions are available depending on what is selected in the interface.<br><br><b>Tip:</b> You can customize the contents of menus in the <b>Menus</b> section of the administration tool or you can create new types of menus by creating plug-ins.",

		admin_desktop_no_repositories: "There are no repositories configured.",

		admin_desktop_id_hover: "The desktop ID is included in the web client URL and specifies which desktop is opened when a user logs in to the web client. The ID must be unique, and you cannot change the ID after you save the desktop.<br><br>The ID can contain only alphanumeric characters and is case sensitive.",
		admin_desktop_id_disabled_hover: "The desktop ID cannot be changed. If you want to use a different ID, you must create a new desktop.",
		admin_desktop_name_hover: "The desktop name cannot contain the following characters: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Your configuration can contain only one default desktop.",

		admin_repository_id_disabled_hover: "The repository ID cannot be changed. If you want to use a different ID, you must create a new repository connection.",
		
		admin_printService_enable: "Print using the IBM Daeja ViewONE print service:",
		admin_printService_enable_hover: "If you choose to enable the IBM Daeja ViewONE print service, documents are converted to PDF format and printing can be completed using any web browser.<br><br>If you choose to disable the IBM Daeja ViewONE print service, you are limited to printing documents only in web browsers that support Java applets.  Some web browsers do not support Java applets, and therefore do not support applet printing.<br><br>See the documentation for supported browsers.",
		
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "User Home Directory",
		admin_file_tracking_doc_directory_my_documents: "User Document Directory",
		admin_file_tracking_doc_directory_qp: "Qualified Path",
		admin_file_tracking_section_tile: "File Tracking Configuration",
		admin_file_tracking_home_path: "Home Path",
		admin_file_tracking_my_documents: "My Documents",
		admin_file_tracking_exact_path: "Fully qualified path:",
		admin_file_tracking_qp: "Qualified Path",
		admin_file_tracking_ev: "Environment variable",
		admin_file_tracking_ev_us: "Custom Environment Variable ",
		admin_file_tracking_del_local_copy: "Delete local copy:",
		admin_file_tracking_yes: "Yes",
		admin_file_tracking_no: "No",
		admin_file_tracking_del_local_copy_rt_state_editable: "Allow users to override this setting",
		admin_file_tracking_del_local_copy_rt_state1: "Yes",
		admin_file_tracking_del_local_copy_rt_state2: "No",
		admin_file_Tracking_label: "File tracking:",
		admin_file_Tracking_disable: "Disable",
		admin_file_Tracking_enable: "Enable",
		admin_file_tracking_label_hover_help: "File tracking uses an applet to checkout and download documents to a specific directory on users’ machines. The applet also enables IBM Content Navigator to find documents on users’ machines when users check in documents.",
		admin_file_tracking_doc_directory: "Storage location:",
		admin_file_tracking_open_file: "Open file automatically",
		admin_file_Tracking_append_qualified_path: "Append directory",
		admin_file_Tracking_append_qualified_path_hover_help: "You can append a directory to the end of the environment variable if you want documents to be saved to a specific subdirectory. <br/><br/>For example, you can specify that documents are downloaded to an <i>EnterpriseDocuments</i> directory within the user home directory.",
		admin_file_Tracking_append_ev: "Append environment variable",
		admin_file_Tracking_append_ev_hover_help: "You can append an environment variable if you want documents to be saved in a dynamically specified directory, such as a user directory.<br/><br/>For example, you can specify that documents are stored in a <i>user_name</i> subdirectory on a shared network directory. ",
		admin_file_tracking_doc_directory_hover_help: "Specify where documents should be stored when they are checked out and downloaded.<br/><br/> <b>Tip</b>: If you want to store documents in a user’s home directory or default document directory, select <b>Environment variable</b>, which includes predefined variables that point to those locations.",
		admin_file_tracking_qualified_path_hover_help: "Use the appropriate directory structure for your Windows or Mac operating system to specify the directory  or network directory in which you want to store documents. <ul><li>For Windows, include a drive letter in the path, such as C:\\Enterprise Documents.</li><li>For a shared network directory, enter the path with the format \\\\servername\\directory</li></ul><br/><b>Important:</b> To use this option, the directory structure that you specify must be able to be created on all of the client workstations in your environment.",
		admin_file_tracking_environment_variable_path_hover_help: "Use the appropriate environment variables for your Windows or Mac operating system to specify the directory  or network directory in which you want to store documents. <br/><br/>The <b>User Home Directory</b> option stores documents in the following directory:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>The <b>User Document Directory</b> option stores documents in the following directory:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Specify whether the local copy of a document is deleted when users add or check documents in to the repository.<br/><br/>Deleting the local copy enables you to:<br/><ul><li>Enforce compliance with IT policies</li><li>Ensure that users are working with the latest versions of documents</li></ul><br/><b>Restriction:</b> This setting is not used when users add documents by dragging and dropping them.<br/><br/>For IBM Content Navigator for Microsoft Office, you must select <b>Delete local files when users add or check in a document or cancel a check out</b> in the <b>Office Configuration</b> section of the desktop.",
		admin_file_tracking_open_file_hover_help: "This setting overrides any document handling preferences that are configured in users’ web browsers. </br></br><b>Restriction:</b> This setting is not used by IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Overwrite local copy:",
		admin_file_tracking_over_write_file_hover_help: "Specify whether to overwrite the local copy of a document when users check documents out of the repository. <br/><br/>Overwriting the local copy enables you to:<br/><ul><li>Ensure that users are working with the latest versions of documents</li><li>Prevent users from seeing a prompt when a local copy exists</li></ul> </br></br><b>Restriction:</b> This setting is not used by IBM Content Navigator for Microsoft Office if you select <b>Allow users to override this setting</b>.",
		admin_file_tracking_over_write_file_state_editable: "Allow users to override this setting",
		admin_file_tracking_inline_help: "File tracking streamlines the process of checking documents out of and in to the repository. It also enables you to manage how documents are stored on users machines. <br/><br/>In addition, file tracking enables documents to be tracked in multiple IBM Content Navigator components, such as the web client and IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "You must enable Standard or Server authentication before you connect to the repository.",
		admin_box_use_oauth: "Authentication Type:",
		admin_box_use_oauth_hover: "Select Standard or Server authentication in a production environment when you are providing access to Box documents from IBM Content Navigator. Specify the client_id and OAuth2 client_secret values that are associated with this deployment of IBM Content Navigator. You can get these values from Box after you create the Box application for your IBM Content Navigator server.<br/><br/>Select Developer authentication in a development environment. Developers can log in to Box by using their developer account and generate a developer token that is valid for 60 minutes. Developer tokens allow developers to log in to Box by using the developer token as the password for any user ID.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Box enterprise account subdomain:",
		admin_box_share: "Task manager connection ID:",
		admin_box_share_hover: "For Box copy or Box share, task manager uses an administrator user ID and password to run background tasks that modify the repository.<br/><br/>Click Set and log in to Box by using a valid Box administrator account.<br/><br/>If you configure a desktop by selecting this Box repository as the repository for shared files, you must specify a Box administrator user who has unlimited storage in Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Open file automatically",
		file_tracking_runtime_overwrite_hover_help: "If you do not select this option and you have a document on your local file system with the same name, the document will be checked out but not downloaded unless you take one of the following actions:<br/><ul><li> Download the document to a subdirectory of the default directory. If you select a subdirectory, the location of the document can be tracked by the web application.</li><li>Rename the document that you are downloading. Renaming the document prevents a file name conflict.</li></ul>",
		open_file: "Open file automatically",
		over_write_file: "Overwrite local copy",
		checkout_and_download_file: "Check Out and Download Documents",
		download_to_local_directory: "Download to:",
		checkout_and_download_button_title: "Check Out and Download",
		checkout_without_java_confirmation_dialog: "The file cannot be downloaded and tracked by the file tracking feature.",
		browse_for_directory: "Browse",
		selected_documents: "Selected Documents",

		checkout_without_java_confirmation_text: "This problem can occur for the following reasons:<br/><ul><li>The Java Runtime Environment (JRE) is not installed on your workstation.</li><li>The Java plug-in is not enabled in your web browser.</li><li>Your web browser does not support Java.</li></ul><br/><br/>To resolve this problem, take the appropriate action:<br/><br/><ul><li>If you want to continue to download the file without file tracking enabled, click OK.</li><li>If you want to download the file with file tracking enabled, cancel the download and ensure that the JRE is installed on your workstation and that the Java plug-in is enabled in your web browser.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "The document was checked out and downloaded, but the document cannot be opened.",
		runtime_file_tracking_open_error_explanation: "The operating system that is installed on your workstation does not support files of this type.",
		runtime_file_tracking_open_error_userResponse: "To resolve the problem, take one of the following actions:<br/><br/><ul><li>If you need to work with the document, open the web client from another workstation that has a different operating system.</li><li>If you only need to view the document, right-click the document in the web client and click Open.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "The document was checked out but was not downloaded.",
		runtime_file_tracking_save_file_error_explanation: "A document with the same name exists on your local file system, but it was not overwritten. ",
		runtime_file_tracking_save_file_error_userResponse: "If you want to download the file from the repository, you must overwrite the local copy of the document when you download the document from the repository.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "The document was checked out but the document cannot be downloaded or opened.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "A document with the same name exists on your local file system. However, the file was not overwritten, which prevents the document on the repository from being downloaded and opened.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "If you want to download the file from the repository, you must overwrite the local copy of the document when you download the document from the repository.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "The document cannot be downloaded.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "The ${0} environment variable, which is required for file tracking, is not defined on this client machine.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "To resolve the problem:<br/><br/><ul><li>Add the ${0} environment variable to the operating system environment variables.</li><li>Log out of the web client and close your web browser. Then, log back in.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "The document cannot be downloaded and tracked by the file tracking applet.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "The ${0} directory, which is required for file tracking, is not defined and cannot be created.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "To resolve this issue, take the appropriate action:<br/><br/><ul><li>Click Browse and select another directory on the client machine. If you select this option, the file will not be tracked.</li><li>Contact your system administrator and ask them to specify a different directory to use for tracking files. For example, this might be necessary if the specified directory is for a Windows operating system but you are running Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "If this desktop is accessed from devices with different operating systems, you can reduce the likelihood of problems by taking one of the following actions:<br/><br/><ul><li>Use environment variables to specify the storage location on client machines.</li><li>Create different desktops for the users of each type of device. For example, create a desktop for users with a Windows operating system and a desktop for users with Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Your request cannot be processed.",
		runtime_file_tracking_generic_error_explanation: "An error occurred in the file tracking applet.",
		runtime_file_tracking_generic_error_userResponse: "Contact your system administrator for assistance.",
		runtime_file_tracking_generic_error_adminResponse: "Open the Java console and try to submit your request again. The details of the error are displayed in the Java console.<br/><br/>You can access the Java console from the Control Panel (Windows) or System Preferences (Macintosh) for your operating system.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Your request cannot be processed",
		runtime_file_tracking_cannot_delete_file_error_explanation: "The following files were added to the repository but were not deleted from your local file system: ${0}.This usually occurs when the files are open or are being used by another application. If required, you can manually delete the files.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "The document cannot be downloaded.",
		runtime_file_tracking_ioexception_error_explanation: "The document cannot  be downloaded.",
		runtime_file_tracking_ioexception_userResponse: "You might not have appropriate permissions to write to the following directory: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Ensure that you have write permissions to the specified directory. If you do not have write permissions to the specified directory, contact your system administrator.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Your request cannot be processed.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "This error can occur for the following reasons:<br/><br/><ul><li>You are using Safari on Mac OS and Java is running in safe mode.</li><li>You do not have read/write permissions for the directory that is specified in the file tracking configuration for your desktop.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "You can continue to use IBM Content Navigator without file tracking, or you can complete the following steps to resolve the issue:<br/><br/><ol><li>Enable Java unsafe mode in Safari.</li><li>If prompted whether you want to trust the IBM Content Navigator web site, click <b>Trust</b> to load the page and then enable Java unsafe mode in Safari.</li></ol><br/><br/>If Safari is configured correctly, complete the following steps to resolve the issue:<br/><br/><ol><li>Ensure that you have read/write permissions for the directory that is specified in the file tracking configuration for your desktop.</li><li>If you do not have read/write permissions on the directory, edit the permissions on the directory.</li><li>If you cannot edit your permissions on the directory, your administrator must change the directory that is configured for file tracking or give you access to a desktop that has a different file tracking directory configured.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Your request cannot be processed.",
		runtime_file_tracking_java__notfound_error_explanation: "This problem error usually occurs in the following situations:<br/><br/><ul><li>The Java Runtime Environment (JRE) is not present or enabled on your workstation.</li><li>The JRE version on your workstation is not compatible with the IBM Content Navigator version.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "You can continue to use IBM Content Navigator without file tracking, or you can complete the following steps to resolve the issue with the JRE:<br/><br/><ol><li>Ensure that the JRE is installed on your workstation.</li><li>Ensure that the JRE version on your workstation is compatible with IBM Content Navigator. A list of the supported versions is included in the <i>Hardware and software prerequisites for IBM Content Navigator</i> document on the IBM Software Support site.</li><li>Ensure that the JRE is enabled on your workstation.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Your request cannot be processed.",
		runtime_file_tracking_security_error_explanation: "You do not have read/write permissions for the directory that is specified in the file tracking configuration for your desktop.",
		runtime_file_tracking_security_error_userResponse: "You can continue to use IBM Content Navigator without file tracking, or you can work with your system administrator to complete the following steps:<ol><li>Ensure that you have read/write permissions for the directory that is specified in the file tracking configuration for your desktop. </li><li>If you do not have read/write permissions on the directory, edit the permissions on the directory.</li><li>If you cannot edit your permissions on the directory, your administrator must change the directory that is configured for file tracking or give you access to a desktop that has a different file tracking directory configured.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "The following documents were downloaded: ${0}.",

		admin_file_tracking_inline_help: "File tracking streamlines the process of adding documents to and checking documents out of and in to the repository. It also enables you to manage how documents are stored on users’ machines.<br/><br/>In addition, file tracking enables documents to be tracked in multiple IBM Content Navigator components, such as the web client and IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "The menu ID cannot start with \"Default\".  \"Default\" is a reserved prefix for menu IDs.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "The ID can contain only alphanumeric characters and is case sensitive.",
		admin_repository_id_hover: "The repository ID is included in web client URLs, favorites, and email links to specify which repository to log in to. The ID must be unique, and you cannot change the ID after you save the repository.<br><br>The ID can contain only alphanumeric characters and is case sensitive.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "The name cannot contain any of the following characters: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "The desktop ID cannot contain spaces or any of the following characters: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "The desktop name cannot contain any of the following characters: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "The display name cannot contain any of the following characters: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Specify the repository name to display to users in the web client.<br><br>The name cannot contain the following characters: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Specify the host name or IP address of the Content Manager OnDemand server that you want to connect to, for example, server.id.com.",
		admin_server_p8_name_hover: "Specify the URL of the Content Engine or Content Platform Engine server. The URL is case sensitive and has the following format:<br><br><ul><li>On WebSphere Application Server, iiop://host_name:port_number/FileNet/Engine. On base deployments, the default port number is 2809.</li><li>On WebLogic Server, t3://host_name:port_number/FileNet/Engine. The default port number is 7001.</li></ul><br><br>For highly available configurations of Content Engine and Content Platform Engine, use the highly available EJB transport URL without the cemp: prefix. ",
		admin_server_p8_protocol_hover: "Specify the protocol to use to communicate with Content Engine.",
		admin_server_cm_name_hover: "Specify the local catalog name of the Content Manager database or the library server connection name. This name is the value that is specified for the ICMSERVER variable.",
		admin_repository_cmis_hover: "Specify the ID of the repository that you want to connect to.  The ID of each repository in your CMIS environment is listed in the AtomPub binding service document.  <br/><br/><b>Tip:</b>You can also enter an asterisk (*) to connect to the first or only repository that is defined in the Atompub binding service document.",
		admin_url_cmis_hover: "The format of the URL varies by service provider. See your CMIS documentation or contact your CMIS server administrator for the URL.",
		admin_repcfg_cmis_status_columns_hover: "Specify the item states that you want to see icons for. The state icons are displayed next to documents in the content list.",
		admin_port_hover: "Specify the TCP/IP port number that the Content Manager OnDemand server listens on. The default value is 1445.",
		admin_unified_searches_hover: "Specify whether you want users to be able to save cross-repository searches on this repository.<br/><br/>If you do not enable this option, users can still create cross-repository searches that run against this repository. You can prevent users from creating cross-repository searches at the desktop level.<br/><br/>If you enable cross-repository searches, IBM Content Navigator creates the cross-repository search data model on the repository.<br/><br/>For IBM FileNet Content Manager, you must connect to the repository as a Content Engine administrator before you enable this option.",
		admin_unified_searches_cm_hover: "Specify whether you want users to be able to save cross-repository searches on this repository.<br/><br/>If you do not enable this option, users can still create cross-repository searches that run against this repository. You can prevent users from creating cross-repository searches at the desktop level.<br/><br/>If you enable cross-repository searches, IBM Content Navigator creates the cross-repository search data model on the repository.",
		admin_max_results_hover: "Specify whether to limit the number of results that are returned by a search. If you do not limit the number of search results, you might experience performance problems if a search returns a large number of results.",
		admin_timeout_hover: "Specify how long, in seconds, a search can run on the repository. If the search does not complete in the time specified, the web client cancels the request. The recommended maximum timeout is 60 seconds.",
		admin_object_store_hover: "Specify the object store that you want to connect to on the Content Engine server. You can obtain the symbolic name from Content Platform Engine administration console.",
		admin_object_store_display_name_hover: "The object store display name is required if you want to use IBM FileNet P8 workflows. You can get the object store display name from Content Platform Engine administration console.",
		admin_all_searches_hover: "Specify whether to limit the number of searches that are displayed under <b>All Searches</b> when users are searching on the repository. If you do not limit the number of searches, you might experience performance problems if the repository includes a large number of saved searches.",

		admin_text_desktop: "Desktop",
		admin_text_repository: "Repository",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Theme",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Redaction Reason",
		admin_text_redactions: "Redactions",
		admin_text_viewer_mapping: "Viewer mapping",
		admin_text_mobile_feature: "Mobile feature",
		admin_test_interface_text: "Interface text",
		admin_text_interface_text_locale: "Localized interface text",
		admin_text_icon_status: "Status icon",
		admin_text_icon: "Icon",
		admin_text_file_type: "File type",
		admin_text_viewer: "Viewer",
		admin_text_desktop_access: "Desktop access",
		admin_text_mapped_properties_for_office: "Mapped properties for Microsoft Office",
		admin_text_desktop_features: "Desktop Features",
		admin_text_unknown: "Unknown",
		admin_folder_instruction: "Specify the properties that are displayed for documents and folders in the content list when users are browsing. You can also specify the order in which the properties are displayed.",
		admin_search_instruction: "Specify which options are selected by default when users create a search.",
		admin_repository_office_conf_class_instruction: "If you have IBM Content Navigator for Microsoft Office installed on the client machines in your environment, you can specify how documents are handled when they are added to or checked into this repository.",
		admin_repository_office_conf_instruction: "Map Microsoft Office document properties to the properties that are defined on this repository.<br/><br/>When property mapping is enabled for a desktop that this repository is associated with, the properties that are set on the Microsoft Office documents are used to populate the properties on the repository when the user adds a document from IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Property Mapping",
		admin_repository_office_conf_prop_mapping_title1: "MS Office Integration",
		admin_office_conf_instruction: "You can control how IBM Content Navigator integrates with Microsoft Office applications when IBM Content Navigator for Microsoft Office is installed on client machines<br /><br /><b>Important:</b> If you select <b>Map Office properties…</b>, you must also configure the property mapping for each repository that is associated with this desktop. You can configure the property mappings on the <b>Office Properties</b> tab for each repository in your environment.",
		admin_desktop_workflows_instruction: "<b>IBM FileNet P8 systems only:</b> Specify which application spaces are displayed in this desktop. The order of the selected application spaces determines the order in which the application spaces are displayed in the web client.<br><br><b>Tip:</b> You can change the display name of the application spaces by specifying new names in the <b>Labels</b> section of the administration tool.",
		admin_search_filtered_properties_instruction: "Specify the properties that users can search on. You can hide any properties that you do not want users to search on.",
		admin_search_filtered_operators_instruction: "Specify the operators that are available when users are searching on a particular data type, such as a date or an integer. You can hide any operators that you do not want users to select.",
		admin_search_default_search_results_instruction: "Specify the properties that are displayed for documents and folders in the search results. You can hide any properties that you do not want to appear in the search results.",
		admin_search_default_search_results_p8_cmis_instruction: "Specify the properties that are displayed for documents in the search results. You can hide any properties that you do not want to appear in the results.",

		admin_datetimeOp: "Date Time",
		admin_floatOp: "Floating-point number",
		admin_integerOp: "Integer",
		admin_stringOp: "String",
		admin_binaryOp: "Binary",
		admin_objectOp: "Object",
		admin_idOp: "ID",
		admin_userOp: "User",
		admin_booleanOp: "Boolean",

		admin_string: "String",
		admin_long: "Long",
		admin_date: "Date",
		admin_double: "Double",
		admin_object: "Object",
		admin_guid: "GUID",
		admin_boolean: "Boolean",

		admin_repcfg_heading: "You can override the default behavior of this repository by setting the configuration parameters.",
		admin_repcfg_heading_od: "You can override the default behavior of this repository by setting the configuration parameters.<br /><br /><b>Important:</b> To use the web client with Content Manager OnDemand, you must also specify values for the parameters that are included on the <b>Content Manager OnDemand</b> tab under <b>Settings</b>, which apply to all of the Content Manager OnDemand repositories that you connect to.",
		admin_repcfg_teamspaces: "Teamspace management:",
		admin_repcfg_enable: "Enable",
		admin_repcfg_disable: "Disable",

		admin_repcfg_deliver_redacted_pdf_files_as: "Redacted PDF files will be delivered as:",
		admin_repcfg_burn_pdf_to_pdf: "PDF files",
		admin_repcfg_burn_pdf_to_tiff: "TIFF files",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "A PDF file that is redacted by applying role-based redactions can be delivered to the client in a different file format. When the file format changes, the file extension and MIME type also change.<br><br>For example, when a PDF file is delivered as a TIFF file, the file extension is changed to .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Allow users to merge and split pages that have role-based redactions",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Select this option to allow users to merge and split pages that have role-based redactions. Users who are not redaction editors will not be able to edit role-based redactions and are not granted access to the sensitive data associated with the role-based redactions even if this option is enabled.",
		admin_repcfg_modify_teamspace_roles: "Allow owners to modify the roles of existing teamspaces",
		admin_repcfg_tm_delete_teamspace: "Enable owners to delete teamspace, including contents",
		admin_repcfg_tm_delete_teamspace_id_missing: "You must specify the user name of a repository administrator.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "You must specify the password of the repository administrator.",
		admin_repcfg_teamspace_display_Recent: "Show only recently modified teamspaces ",
		admin_repcfg_teamspace_display_Recent_value: "Days since the last modification:",

		admin_repcfg_folder_selector: "Root folder:",
		admin_repcfg_enable_folder_selector: "Enable",
		admin_repcfg_disable_folder_selector: "Disable",
		admin_repcfg_SSO: "Single sign-on:",
		admin_repcfg_teamspace_template_permission_text: "Assign teamspace template creators:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Specify the groups or users who can create teamspace templates. The users and groups are given the appropriate security settings on the required classes and folders. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Learn more</a><br/><br/><b>Recommendation:</b> Use groups to simplify teamspace management.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Specify the groups or users who can create teamspace templates. The users are added to the appropriate ACLs and given the required privileges. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Learn more</a><br/><br/><b>Recommendation:</b> Use groups to simplify teamspace management.",
		admin_repcfg_teamspace_permission_text: "Assign teamspace roles:",
		admin_repcfg_teamspace_permission_hover_p8: "Specify the groups or users who can create teamspaces and use teamspaces. The users are given the appropriate security settings on the required classes and folders. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Learn more</a><br/><br/><b>Recommendation:</b> Use groups to simplify teamspace management.",
		admin_repcfg_teamspace_permission_hover_cm: "Specify the groups or users who can create teamspaces and use teamspaces. The users are added to the appropriate ACLs and given the required privileges. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Learn more</a><br/><br/><b>Recommendation:</b> Use groups to simplify teamspace management.",
		admin_repcfg_entry_template_permission_text: "Assign entry template roles:",
		admin_repcfg_entry_template_permission_hover_p8: "Specify the groups or users who can create entry templates and use entry templates. The users are given the appropriate security settings on the Entry Template document class. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Learn more</a><br/><br/><b>Recommendation:</b> Use groups to simplify entry template management.",
		admin_repcfg_entry_template_permission_hover_cm: "Specify the groups or users who can create entry templates and use entry templates. The users are added to the appropriate ACLs and given the required privileges. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Learn more</a><br /><br /><b>Recommendation:</b> Use groups to simplify entry template management.",
		admin_repcfg_office_template_permission_text: "Assign template roles:",
		admin_repcfg_office_template_permission_hover_cm: "Specify the groups or users who can create, edit, and use Microsoft Office Online or Edit Service templates. The users are added to the appropriate ACLs and given the required privileges.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a><br /><br /><b>Recommendation:</b> Use groups to simplify Microsoft Office Online or Edit Service template management.",
		admin_repcfg_draft_permission_text: "Assign draft roles:",
		admin_repcfg_draft_permission_hover_cm: "Specify the groups or users who can create drafts of Microsoft Office Online or Edit Service documents during collaborative editing. Any user who needs to collaboratively edit documents in Microsoft Office Online or Edit Service must have the appropriate privileges to create drafts. The users are added to the appropriate ACLs and given the required privileges. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a><br /><br /><b>Recommendation:</b> Use groups to simplify draft management.",
		admin_repcfg_search_permission_text: "Assign search roles:",
		admin_repcfg_search_permission_hover_p8: "Specify the groups or users who can create or use saved searches and cross-repository searches. The users are given the appropriate security settings on the required classes. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Learn more</a><br /><br /><b>Recommendation:</b> Use groups to simplify search management.",
		admin_repcfg_search_permission_hover_cm: "Specify the groups or users who can create, edit, or use saved searches and cross-repository searches. The users are added to the appropriate ACLs and given the required privileges. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Learn more</a><br /><br /><b>Recommendation:</b> Use groups to simplify search management.",
		admin_repcfg_search_permission_title: "Search Roles",
		admin_repcfg_search_permission_intro_text: "Ensure that users have access to a desktop that supports their role. For example, ensure that search creators have access to a desktop that allows them to create searches and cross-repository searches.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Teamspace template administrators are users who have <b>Full Control</b> permissions on the repository (object store). You cannot change the list of teamspace template administrators from the administration tool. <p>Teamspace template administrators can delete or modify any teamspace template. The user that creates a teamspace template does not need to share the template with teamspace template administrators.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "When you designate a user or group as a teamspace template creator, the user or group is given the appropriate security on the repository to create teamspace templates. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Learn more</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Users and groups that are assigned privileges other than the privileges that are associated with Administrators and Creators.<p>You can move these users and groups to the teamspace template creators role by removing them from the Others role and then assigning them as teamspace template creators.<p>You can review the privileges that are currently granted to these users and groups by using IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Teamspace administrators are users who have <b>Full Control</b> permissions on the repository (object store). You cannot change the list of teamspace administrators from the administration tool.<p>Teamspace administrators can delete or modify any teamspace. The user that creates a teamspace does not need to share the teamspace with teamspace administrators.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "When you designate a user or group as a teamspace creator, the user or group is given the appropriate security on the repository to create teamspaces. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Learn more</a>",
		admin_repcfg_teamspace_user_hover_p8: "When you designate a user or group as a teamspace user, the user or group is given the appropriate security on the repository to use teamspaces. However, a user must be a member of a teamspace to access the teamspace. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Learn more</a><p><b>Tip:</b> If you want all of the users in your environment to be able to see teamspaces, you can add the #AUTHENTICATED-USERS pseudo-account to the teamspace user role.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Users and groups that are assigned privileges other than the privileges that are associated with Administrators, Creators, and Users.<p>You can move these users and groups into predefined roles by removing them from the Others role and then assigning teamspace roles to them.<p>You can review the privileges that are currently granted to these users and groups by using IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Entry template administrators are users who have <b>Full Control</b> permissions on the repository (object store). You cannot change the list of entry template administrators from the administration tool. <p>Entry template administrators can delete or modify any entry template. The user that creates an entry template does not need to share the entry template with entry template administrators.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "When you designate a user or group as an entry template creator, the user or group is given the appropriate security on the repository to create entry templates. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Learn more</a>",
		admin_repcfg_entry_template_user_hover_p8: "When you designate a user or group as an entry template user, the user or group is given the appropriate security on the repository to use entry templates. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Learn more</a><p><b>Tip:</b> If you want all of the users in your environment to be able to use entry templates, you can add the #AUTHENTICATED-USERS pseudo-account to the entry template user role.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Users and groups that are assigned privileges other than the privileges that are associated with Administrators, Creators, and Users.<p>You can move these users and groups into predefined roles by removing them from the Others role and then assigning entry template roles to them.<p>You can review the privileges that are currently granted to these users and groups by using IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "When you designate a user or group as a teamspace template creator, the user or group is given the appropriate privileges to create teamspace templates on the repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Learn more</a>",
		admin_repcfg_teamspace_creators_hover_cm: "When you designate a user or group as a teamspace creator, the user or group is given the appropriate privileges to create teamspaces on the repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Learn more</a>",
		admin_repcfg_teamspace_user_hover_cm: "When you designate a user or group as a teamspace user, the user or group is given the appropriate privileges to use teamspaces on the repository. However, a user must be a member of a teamspace to access the teamspace. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Learn more</a>",
		admin_repcfg_entry_template_creators_hover_cm: "When you designate a user or group as an entry template creator, the user or group is given the appropriate privileges to create entry templates on the repository. <br/><br/>However, the security settings for a specific entry template determine the privileges the user or group has on the entry template. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Learn more</a>",
		admin_repcfg_entry_template_editors_hover_cm: "When you designate a user or group as an entry template editor, the user or group is given the appropriate privileges to modify entry templates on the repository. <br/><br/>However, the security settings for a specific entry template determine the privileges the user or group has on the entry template. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Learn more</a>",
		admin_repcfg_entry_user_hover_cm: "When you designate a user or group as an entry template user, the user or group is given the appropriate privileges to use entry templates on the repository. <br/><br/>However, the security settings for a specific entry template determine the privileges the user or group has on the entry template. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Learn more</a>",
		admin_repcfg_office_template_creators_hover_cm: "When you designate a user or group as a Microsoft Office Online or Edit Service template creator, the user or group is given the appropriate privileges to create template files on the repository. <br/><br/>However, the security settings for a specific template file determine the privileges the user or group has on the template. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a>",
		admin_repcfg_office_template_editors_hover_cm: "When you designate a user or group as a Microsoft Office Online or Edit Service template editor, the user or group is given the appropriate privileges to modify template files on the repository.  <br/><br/>However, the security settings for a specific template file determine the privileges the user or group has on the template. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a>",
		admin_repcfg_office_template_user_hover_cm: "When you designate a user or group as a Microsoft Office Online or Edit Service template user, the user or group is given the appropriate privileges to apply a template when they create a new Office Online or Edit Service document from the web client.  <br/><br/>However, the security settings for a specific template file determine the privileges the user or group has on the template.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a>",
		admin_repcfg_draft_creators_hover_cm: "Any users who need to collaboratively edit documents in Microsoft Office Online or Edit Service must be assigned this role. Do not assign users to the editor or user roles. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a>",
		admin_repcfg_draft_editors_hover_cm: "Any users who need to collaboratively edit documents in Microsoft Office Online or Edit Service must be assigned to the <b>creator</b> role. If a user is assigned to the editor role, they cannot create drafts, which are required for collaborative editing.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a>",
		admin_repcfg_draft_user_hover_cm: "Any users who need to collaboratively edit documents in Microsoft Office Online or Edit Service must be assigned to the <b>creator</b> role. If a user is assigned to the user role, they cannot create drafts, which are required for collaborative editing.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Learn more</a>",		
		admin_repcfg_search_others_hover_p8: "Users and groups that are assigned privileges other than the privileges that are associated with Administrators, Creators, and Users.<p>You can move these users and groups into predefined roles by removing them from the Others role and then assigning search roles to them.<p>You can review the privileges that are currently granted to these users and groups by using IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Search administrators are users who have <b>Full Control</b> permissions on the repository (object store). You cannot change the list of search administrators from the administration tool. <br /><br />Search administrators can delete or modify any search. The user that creates a search does not need to share the search with search administrators.",
		admin_repcfg_search_creators_hover_p8: "When you designate a user or group as a search creator, the user or group is given the appropriate security on the repository to create searches. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Learn more</a>",
		admin_repcfg_search_user_hover_p8: "When you designate a user or group as a search user, the user or group is given the appropriate security on the repository to use searches <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Learn more</a><br /><br /><b>Tip:</b> If you want all of the users in your environment to be able to use searches, you can add the #AUTHENTICATED-USERS pseudo-account to the search user role.<br/><br />By default, a search user can create searches and cross-repository searches but cannot save the searches. You can prevent search users from creating searches by having them use a desktop for which the following options are selected:<ul><li><b>Prevent users from creating searches</b></li><li><b>Prevent users from creating cross-repository searches</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "When you designate a user or group as a search creator, the user or group is given the appropriate privileges to create and save searches and cross-repository searches on the repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Learn more</a><br /><br /><b>Important:</b> Ensure that search creators use a desktop for which the following options are not selected:<ul><li><b>Prevent users from creating searches</b></li><li><b>Prevent users from creating cross-repository searches</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "When you designate a user or group as a search editor, the user or group is given the appropriate privileges to modify existing searches and cross-repository searches. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Learn more</a><br /><br /><b>Tip:</b> By default, a search editor can create searches and cross-repository searches but cannot save the searches. You can prevent search editors from creating searches by having them use a desktop for which the following options are selected:<ul><li><b>Prevent users from creating searches</b></li><li><b>Prevent users from creating cross-repository searches</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "When you designate a user or group as a search user, the user or group is given the appropriate privileges to open and run saved searches and cross-repository searches. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Learn more</a><br /><br /><b>Tip:</b> By default, a search user can create searches and cross-repository searches but cannot save the searches. You can prevent search users from creating searches by having them use a desktop for which the following options are selected:<ul><li><b>Prevent users from creating searches</b></li><li><b>Prevent users from creating cross-repository searches</b></li></ul>",
		admin_repcfg_db_encoding: "Server database character encoding:",
		admin_repcfg_db_encoding_hover: "The default character encoding for an IBM Content Manager database is UTF-8.",
		admin_repcfg_db_encoding_specify: "Specify the database character encoding",
		admin_repcfg_db_encoding_utf8: "UTF-8 encoding",
		admin_repcfg_db_encoding_utf8_hover: "Specify this option if you use a UTF-8 encoded database. IBM Content Navigator will use UTF-8 encoding to check the length of item property value strings.",
		admin_repcfg_db_encoding_other: "Other encoding",
		admin_repcfg_db_encoding_other_hover: "Specify this option if you use a database with an encoding that is not UTF-8. IBM Content Navigator will use the character count to check the length of item property value strings.",
		admin_repcfg_language_codes: "Server language codes:",
		admin_repcfg_language_codes_avail: "Available",
		admin_repcfg_language_codes_sel: "Selected",
		admin_repcfg_pdf_conversion: "MIME types to convert to PDF documents in attachments:",
		admin_repcfg_pdf_conversion_avail: "Available",
		admin_repcfg_pdf_conversion_sel: "Selected",

		admin_repcfg_box_share_enable_classes_label: "Classes to modify for Box share support:",
		admin_repcfg_box_share_enable_classes_hover: "You can modify the class to store the ID of the file in Box when the item is shared.",
		admin_repcfg_box_share_enable_classes_warning: "Important: Any classes that you specify will be modified to support Box share. After you save your changes, the changes cannot be removed from the classes.<br><br>You must be connected to the repository as a library server administrator to modify classes.",
		admin_repcfg_box_share_enable_classes_available: "Available Classes",
		admin_repcfg_box_share_enable_classes_selected: "Selected Classes",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Store Box Share ID",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "This class has already been modified to store the Box share ID. You cannot remove this option.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modify this class so that it stores the ID of the file in Box when the item is shared.",

		admin_repcfg_redaction: "Role-based redactions:",
		admin_repcfg_enable_redaction_hover: "Specify whether you want to use role-based redactions on documents in this repository.<br/><br/>Role-based redactions are applied when a document is downloaded, printed, rendered by a viewer, or displayed as a thumbnail. What users see when they view the document is dependent on their role and on the applicable redaction policies.",

		admin_repcfg_redaction_policy_permission_text: "Assign policy editors:",
		admin_repcfg_redaction_policy_editors_hover: "Select the users and groups who will create, modify, and delete redaction policies and redaction roles.",
		admin_repcfg_redaction_policy_editors_select_hover: "Redaction policy editors can create, modify, and delete redaction policies and redaction roles.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Redaction policy administrators can assign redaction policy editors.<br/><br/>You can change the list of redaction policy administrators by using IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Redaction policy administrators can assign redaction policy editors.<br/><br/>You can change the list of redaction policy administrators by using the IBM Content Manager system administration client.",

		admin_repcfg_redaction_permission_text: "Assign redaction editors:",
		admin_repcfg_redaction_editors_hover: "Select the users and groups who will create, modify, and delete role-based redactions. After you select users and groups as editors, you must specify them as editors in redaction policies before they can edit role-based redactions.",
   		admin_repcfg_redaction_editors_select_hover: "Redaction editors can create, modify, and delete role-based redactions when they are also specified as editors in redaction policies.",
   		admin_repcfg_redaction_administrators_hover_p8: "Redaction administrators can assign redaction editors.<br/><br/>You can change the list of redaction administrators by using IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Redaction administrators can assign redaction editors.<br/><br/>You can change the list of redaction administrators by using the IBM Content Manager system administration client.",
        	
		admin_repcfg_entry_template: "Entry template management:",
		admin_repcfg_entry_template_enable_classes_label: "Classes to modify for entry template support:",
		admin_repcfg_oos_reference_attribute_label: "Reference attributes for office online:",
		admin_repcfg_entry_template_enable_classes_hover: "Important: Any classes that you specify will be modified to support entry templates. After you save your changes, the changes cannot be removed from the classes.<br><br>You can modify the class for one or both of the following purposes:<br><ul><li>To store the ID of the entry template that was used to add an item so that the entry template settings are applied when the item is modified</li><li>Hierarchical folder classes only: To support entry template folder associations</li></ul>You must be connected to the repository as a library server administrator to modify classes.",
		admin_repcfg_entry_template_enable_classes_warning: "Important: Any classes that you specify will be modified to support entry templates. After you save your changes, the changes cannot be removed from the classes.<br><br>You must be connected to the repository as a library server administrator to modify classes.",
		admin_repcfg_entry_template_enable_classes_available: "Available Classes",
		admin_repcfg_entry_template_enable_classes_selected: "Selected Classes",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Store Entry Template ID",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modify this class so that it stores the ID of the entry template that was used to add an item so that the entry template settings are applied when the item is modified.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Store Folder Associations",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modify this class so that it can support entry template folder associations. This option is only available for hierarchical folder classes.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "This class has already been modified to store the entry template ID. You cannot remove this option.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "This class has already been modified to store folder associations. You cannot remove this option.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Only hierarchical folder classes and non-hierarchical classes can be used to store folder associations.",
		admin_repcfg_entry_template_root_folder_association_title: "Entry templates associated with the root folder:",
		admin_repcfg_entry_template_root_folder_association_hover: "Specify which entry templates you want to associate with the root folder on your IBM Content Manager repository.<br /><br />If you associate entry templates with the root folder and users add items to a hierarchical folder, an entry template will always be used to add items.",
		admin_repcfg_entry_template_root_folder_association_button: "Set Associations",
        
		admin_repcfg_oos_enable_classes_label: "Classes to modify for office online and Edit Service support:",
		admin_repcfg_oos_enable_classes_warning: "Important: Any classes that you specify will be modified to work with Microsoft Office Online or Edit Service. After you save your changes, the reference attribute that is automatically added to each class cannot be removed.<br><br>You must be connected to the repository as a library server administrator to modify classes.",
		admin_repcfg_oos_enable_classes_available: "Available Classes",
		admin_repcfg_oos_enable_classes_selected: "Selected Classes",
		admin_repcfg_oos_enable_classes_note: "Important:",
		admin_repcfg_oos_enable_classes_selected_not_support: "This class is not supported with Microsoft Office Online or Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "The version policy for the class is set to always version, which Microsoft Office Online or Edit Service does not support. Select a different class.",
		
		
		admin_repcfg_download_recording: "Track downloads:",
		admin_repcfg_download_recording_hover: "Downloads are tracked by default when the Social Collaboration Base Extensions add-on is installed on the repository. However, disabling this option can improve the performance of the repository.<br><br>If you disable this option, users will see a count of the downloads that occurred before the option was disabled.",
		admin_repcfg_sync_service: "Sync services:",
				
		admin_repcfg_download_ignored: "Ignore downloads for specific users:",
		admin_repcfg_download_ignored_hover: "You can ignore downloads requested by specific users, such as administrators or system accounts to more accurately reflect the number of users who have downloaded a document. For example, if you have a specific account that is used to download content to generate a monthly report, you can ignore downloads that are requested by that account.<br><br><b>Restriction:</b> You cannot specify groups.",

		admin_repcfg_add_as_major_version: "Add as major version:",
		admin_repcfg_enable_add_as_major_version: "Yes",
		admin_repcfg_disable_add_as_major_version: "No",
		admin_repcfg_checkin_as_major_version: "Check in as a major version:",
		admin_repcfg_enable_checkin_as_major_version: "Yes",
		admin_repcfg_disable_checkin_as_major_version: "No",
		admin_repcfg_annotation_security: "Annotation security:",
		admin_repcfg_inherit_annotation_security: "Duplicate the security of the containing document",
		admin_repcfg_default_annotation_security: "Use the default annotation security",
		admin_repcfg_connection_point: "Workflow connection point:",
		admin_repcfg_include_workflow_definition: "Display workflow definition class:",
		admin_repcfg_include_form_template: "Display form template class:",
		admin_repcfg_enable_include_workflow_definition: "Yes",
		admin_repcfg_disable_include_workflow_definition: "No",

		admin_repcfg_status_columns: "State icons:",
		admin_repcfg_status_columns_hover: "Specify the states that you want to see icons for. The state icons are displayed next to documents, folders, and work items in the content list.",
		admin_repcfg_status_columns_documents_or_folders: "Display an icon when documents or folders:",
		admin_repcfg_status_columns_documents: "Display an icon when documents:",
		admin_repcfg_status_columns_documents_checked_out: "Are checked out",
		admin_repcfg_status_columns_documents_declared_records: "Are declared as records",
		admin_repcfg_status_columns_documents_minor_versions: "Have minor versions",
		admin_repcfg_status_columns_documents_compound_document: "Are compound documents",
		admin_repcfg_status_columns_documents_bookmarks: "Have bookmarks",
		admin_repcfg_status_columns_documents_hold: "Are on hold",
		admin_repcfg_status_columns_documents_notes: "Have notes",
		admin_repcfg_status_columns_work_items: "Display an icon when work items:",
		admin_repcfg_status_columns_work_items_locked: "Are locked",
		admin_repcfg_status_columns_work_items_checked_out: "Are checked out",
		admin_repcfg_status_columns_work_items_deadline: "Have a deadline",
		admin_repcfg_status_columns_work_items_suspended: "Are suspended from processing",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF configuration file:",
		admin_repcfg_transform_xml_file: "Custom transform file:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Enable",
		admin_repcfg_disable_ssl: "Disable",
		admin_repcfg_keyringdb_file: "Keyring database file:",
		admin_repcfg_keyringstash_file: "Keyring stash file:",
		admin_repcfg_od_sso: "Single sign-on",
		admin_repcfg_od_enable_sso: "Enable",
		admin_repcfg_od_disable_sso: "Disable",
		admin_repcfg_od_sso_password: "Password",
		admin_repcfg_advanced_label: "Advanced",
		admin_repcfg_custom_properties_label: "Custom properties:",
		admin_repcfg_new_button_label: "New",
		admin_repcfg_edit_button_label: "Edit",
		admin_repcfg_delete_button_label: "Delete",
		admin_repcfg_custom_head1: "Name",
		admin_repcfg_custom_head2: "Value",
		admin_repcfg_ecpdialog_title_new: "New Custom Property",
		admin_repcfg_ecpdialog_title_edit: "Edit Custom Property",
		admin_repcfg_ecpdialog_name: "Name:",
		admin_repcfg_ecpdialog_value: "Value:",
		admin_repcfg_ecpdialog_save: "Save",
		admin_repcfg_ecpdialog_create: "Create",
		admin_repcfg_ecpdialog_cancel: "Cancel",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "This value is required. The value cannot contain blanks and cannot be a duplicate.",

		admin_repcfg_cmis_use_gzip_encoding: "Use GZIP encoding:",

		admin_repcfg_task_mgr_proxy: "Task manager connection ID:",
		admin_repcfg_task_mgr_proxy_hover: "For Box share or Teamspace deletion, task manager uses an administrator user ID and password to run background tasks that modify the repository.<br><br>Click Set and log in to the repository by using a valid repository administrator user ID and password.",
		admin_task_manager_not_enabled_warning: "This option requires the task manager service, but the task manager service is not enabled.  You can enable the task manager service for all desktops on the General page for Settings.",
		admin_task_manager_not_enabled_and_user_warning: "This option requires the task manager service, but the task manager service is not enabled. On this page, set the task manager connection ID, and then on the General page for Settings, enable the task manager service for all desktops.",
		admin_task_manager_user_id_pw_not_set_warning: "This option requires the task manager service, and an administrator user ID and password. On this page, set the task manager connection ID.",
		
		admin_repcfg_teamspaces_delete_task_id: "Repository administrator:",
		admin_repcfg_teamspaces_delete_task_password: "Password:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "You must specify a library server administrator to enable the task manager service to delete a teamspace on the repository.",
		admin_repcfg_teamspaces_delete_task_hover: "By default, when a user deletes a teamspace, the teamspace is hidden. All of the folders and documents in the teamspace remain on the repository. <br /> <br />When you enable this option, only the documents that are filed in other folders in the repository remain on the repository.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "If you have a large number of teamspaces in your environment, it can take a long time to display all of the teamspaces in the <b>Teamspaces</b> tab. You can select this option to reduce the amount of time that it takes to populate the list.<br /><br />If a user needs to work with a teamspace that is outside of the range that you specify, the user can use the <b>Filter</b> field to find the teamspace.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "If you select this option, users who have the owner role on a teamspace can modify the roles that are associated with teamspaces that were created before IBM Content Navigator, Version 2.0.2.<br /><br />This option does not affect teamspaces that are created with IBM Content Navigator, Version 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Specify whether you want users to be able to create teamspaces and teamspace templates on this repository.<br /><br /><b>Important:</b> The repository must support hierarchical folders.<br /><br />If you enable teamspaces, IBM Content Navigator creates the teamspace data model on the repository. The data model includes ACL objects, privileges, privilege sets, and two new item types.",
		admin_repcfg_folder_selector_hover: "Select the folder that you want to use as the root folder when users browse for documents. If you do not have hierarchical folders configured on your repository, this setting enables you to support browsing by defining a root folder. If you have hierarchical folders configured on your repository, this setting overrides the root folder that is configured on the repository.",
		admin_repcfg_cm_use_sso_hover: "Specify whether to allow single sign-on for users with the Trusted Logon privilege set.<br /><br /><b>Important:</b> Single sign-on must be enabled on the Content Manager server, and WebSphere Application Server must be configured for LTPA for this configuration parameter to work.",
		admin_repcfg_cm_direct_retrieve_hover: "Direct retrieve is enabled by default because it allows the web client to quickly retrieve content from the resource manager. <br /><br />You can disable this option if you do not want the client application to access the resource manager directly or if you have a firewall or proxy server that prevents the web client from accessing the resource manager through URLs. For example, a firewall can prevent users from viewing documents in the applet viewer when direct retrieve is enabled.",
		admin_repcfg_cmItemTypesToDisplay: "If you do not want users to see the resource item types and item item types on your IBM Content Manager server, you can display only the document model item types. The item types are displayed when users create searches, add documents, and create folders.",
		admin_repcfg_cm_language_codes_hover: "Specify the languages in which to return data from the Content Manager server. The list of available languages is controlled by the list of language definitions on the server.<br /><br /><b>Remember:</b> Data in the web client is displayed in the language that is set in the user’s web browser.",
		admin_repcfg_cm_pdf_conversion_hover: "Specify the types of documents to be converted to PDF when a user sends a document with multiple parts as an email attachment. All of the parts are combined into a single PDF document.",
		admin_repcfg_use_teamspaces_p8_hover: "Specify whether you want users to be able to create teamspaces and teamspace templates on this repository.<br /><br />If you enable teamspaces, IBM Content Navigator creates the teamspace data model on the repository. The data model includes property templates, custom objects, a folder object, and several folders.",
		admin_repcfg_use_entry_template_p8_hover: "Specify whether you want users to be able to create and manage entry templates on this repository from IBM Content Navigator. If you do not enable this feature, users can search for and use entry templates that are already on the repository.<br /><br />If you enable entry template management, IBM Content Navigator updates the entry template data model on the repository. The update includes new properties. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Learn more</a>",
		admin_repcfg_use_entry_template_cm_hover: "Specify whether you want users to be able to create and manage entry templates on this repository from IBM Content Navigator.<br /><br />If you enable entry template management, IBM Content Navigator creates the entry template data model on the repository. The data model includes a new ACL object, new properties, and a new item type. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Learn more</a>",
		admin_repcfg_sync_service_p8_hover: "Specify whether you want users to be able to synchronize their favorite items across their workstations and mobile devices.<br><br><b>Important:</b> To use this feature you must also complete the following tasks:<br><ul><li>Specify the <b>Sync services public URL</b> in the <b>Sync Services</b> section of the administration tool.</li><li>Add this repository to a desktop for which sync services are enabled.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Specify whether the major version option is selected by default when users add documents to the repository.<br /><br />Users have the option to clear this option if they want to add the document as a minor version.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Specify whether the major version option is selected by default when users check documents in to the repository.<br /><br />Users have the option to clear this option if they want to check the document in as a minor version.",
		admin_repcfg_p8_annotation_security_hover: "Specify which type of security to apply to annotations by default.<br /><br />Users have the option to change the security of the annotations.",
		admin_repcfg_p8_connection_point_hover: "If you want to use IBM FileNet P8 workflows, select a Process Engine connection point. The connection point that you select determines which workflows are available to the users who access this repository.",
		admin_repcfg_p8_include_workflow_definition_hover: "If you display the IBM FileNet P8 workflow definition document class in the web client, users can search for and add workflow definitions to the repository.",
		admin_repcfg_p8_include_form_template_hover: "If you display the IBM FileNet P8 form template document class in the web client, users can search for and add form templates to the repository.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Specify the fully qualified path of the AFP2PDF configuration file for this repository on the web application server. The AFP2PDF Transform is required to view and print AFP data.<br /><br /><b>Remember:</b> The AFP2PDF Transform must be installed to use this parameter.",
		admin_repcfg_od_transform_xml_file_hover: " If you want to use a custom transform to convert Content Manager OnDemand content, specify the fully qualified path of the XML file that is used to define the transform. The XML file must be located on the web application server.",
		admin_repcfg_od_ssl_hover: "Specify whether to use SSL to encrypt communication between the IBM Content Navigator application server and the Content Manager OnDemand library server and object servers.<br /><br /><b>Important:</b> When you enable SSL for Content Manager OnDemand, it does not include the communication between the IBM Content Navigator application server, web server, or users' workstations.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Specify the fully qualified path of the keyring database file for this repository on the web application server. For example, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />The keyring database file contains your trusted root certificates. You should use strong file system protection to prevent unauthorized access to this file.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Specify the fully qualified path of the keyring stash file for this repository on the web application server. For example, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />The keyring stash file contains the password for the keyring database file. You should use strong file system protection to prevent unauthorized access to this file.",
		admin_repcfg_od_sso_password_hover: "Specify the password to use for single sign-on with the OnDemand server.",
		admin_repcfg_od_custom_properties_hover: "The ODWEK Java API supports custom properties. If you want to use any custom properties when connecting to the repository through the web client, specify the names and values of the custom properties.<br /><br />For more information about supported custom properties, see the ODWEK Java API Javadocs, which are in the /api subdirectory of the ODWEK installation directory.",
		admin_repcfg_od_custom_properties_name_hover: "Enter the property name.",
		admin_repcfg_od_custom_properties_value_hover: "Enter the property value.",
		admin_repcfg_od_use_sso_hover: "Specify whether to allow single sign-on for users.<br /><br /><b>Important:</b> Single sign-on must be enabled on the Content Manager OnDemand server for this configuration parameter to work.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Use GZIP encoding for this CMIS source.",
		admin_repcfg_cm_use_part_file_name: "File name to use when downloading documents:",
		admin_repcfg_cm_use_part_file_name_help: "Specify how the file names of documents are determined when users download documents.",
		admin_repcfg_cm_use_part_file_name_enable: "Use the file name",
		admin_repcfg_cm_use_part_file_name_disable: "Use the name of the item in the repository",
		admin_repcfg_add_doc_name: "Default name for an added document:",
		admin_repcfg_add_doc_name_hover: "Users can change the name before adding the document.",
		admin_repcfg_add_doc_name_empty: "None (blank)",
		admin_repcfg_add_doc_name_file_name: "The file name of the selected document",

		admin_repcfg_compound_documents: "Compound document features:",
		admin_repcfg_compound_documents_hover: "Enable P8 compound document features, such as navigation.",
		
		admin_repcfg_cm_action_list_config_enabled: "Work item action list:",
		admin_repcfg_cm_action_list_config_hover: "When you configure document routing in the Content Manager system administration client, you can specify a list of actions that a user can perform on work item.<br /><br />Enable this option if you want to use the Action List from the Content Manager server. These settings are used in the context menu and in the Edit Properties window for the work item.<br /><br /><b>Important:</b> The settings in the Action List override any customized menus that you configure in the Content Navigator administration tool. If there are no settings in the Action List, the user will not be able to take any actions on work items.",

		admin_repcfg_box_share: "Box share",
		admin_repcfg_box_share_p8_hover: "Allows users to share a document from this repository. Sharing a document includes copying the file to Box, creating a link, and sending the link in email.<br /><br />If you enable Box share, IBM Content Navigator creates the Box share data model on the repository. To install the IBM Content Navigator Box share add-on, you must be connected to the repository as a library server administrator.",

		admin_menu_type_icon: "Menu Type Icon",
		admin_menu_toolbar_hover: "Toolbar",
		admin_menu_toolbar_custom_hover: "Custom toolbar",
		admin_menu_contextMenu_hover: "Context menu",
		admin_menu_contextMenu_custom_hover: "Custom context menu",

		admin_menu_contextMenu_custom_empty: "No custom context menus are defined in the configured plug-ins.",
		admin_menu_toolbar_custom_empty: "No custom toolbars are defined in the configured plug-ins.",

		admin_file_type_category_filters: "File type filters:",
		admin_file_type_category_filters_hover_help: "Specify the list of file types that users can use in the following situations:<ul><li>To narrow the list of results when searching or browsing in IBM Content Navigator for Microsoft Office<li>To narrow the list of results when searching an IBM FileNet P8 repository in the web client<li>To restrict the types of files that users can add to the repository when using an entry template</ul>",
		admin_file_type_only_use_in_et_folder_association: "Show Only in Entry Template Folder Associations",
		admin_office_config_properties_label: "Office Properties",
		admin_office_config_type_label: "Data Type",
		admin_office_config_mapped_property_label: "Repository Property",
		admin_office_config_properties_hover_help: "Enter and then add the name of each Microsoft Office property that you want to map to a repository property. The data type of all of the properties must match",
		admin_office_config_mapped_property_hover_help: "If you want to map the Office Properties to more than one repository property, you must create a new property mapping",
		admin_new_property_mapping_title: "New Property Mapping",
		admin_property_mapping_title: "Edit Property Mapping",
		admin_property_mapping_instruction: "Specify which Microsoft Office properties you want to map to a property on the repository. The data type of the Office properties must match the data type of the property on the repository. <br /><br />If an Office document has more than one property from the mapping, IBM Content Navigator uses the first property in the list to populate the property on the repository.",
		admin_ms_general_settings: "General configuration:",
		admin_ms_delete_local_settings: "Delete local files when users:",
		admin_ms_outlook_options: "Outlook integration:",
		admin_ms_enable_props_mapping: "Map Office properties to repository properties when users:",
		admin_ms_open_doc_when_checkout: "Automatically check out a document when it is opened",
		admin_ms_open_doc_when_checkout_hover_help: "Selecting this option prevents the user from overwriting the file on the repository with an older version of the file.",
		admin_ms_prompt_close_office: "Prompt users to check in documents when they close Office applications",
		admin_ms_prompt_close_office_hover_help: "Selecting this option prevents users from forgetting to check in their work.",
		admin_ms_add_with_entry_template_only: "Show only the Add With Template action",
		admin_ms_delete_local_on_add: "Delete local files when users add documents",
		admin_ms_delete_local_on_checkin: "Delete local files when users check in documents or cancel checkout",
		admin_ms_delete_local_on_add_hover_help: "When a user adds a document in IBM Content Navigator for Microsoft Office, the document is added to the repository, and the local copy of the document remains open so that users can immediately check out the document to make changes.<br /><br />Select this option to automatically close and delete the local copy of the document after adding the document to the repository.",
		admin_ms_delete_local_on_checkin_hover_help: "When a user checks in a document in IBM Content Navigator for Microsoft Office, the document is checked in to the repository, and the local copy of the document remains open. Also, after using the cancel checkout action, the local copy of the document remains open. With the local copy open, users can immediately check out the document again to make changes.<br /><br />Select this option to automatically close and delete the local copy of the document after either checking in a document, or using the cancel checkout action.",
		admin_ms_delete_local_on_save: "Save a document",
		admin_ms_prompt_for_props_on_add: "Prompt users to provide property values when they add emails to the repository",
		admin_ms_prompt_for_props_on_add_hover_help: "If you do not select this option, the web client uses the Outlook property mapping that is defined for the repository.<br /><br />If you have entry templates associated with the folder that the emails are added to, the user might not be prompted for any properties.",
		admin_ms_delete_email_on_add: "Delete email from the email server when that email is added to the repository",
		admin_ms_send_email_as_link_only: "Prevent users from sending documents as attachments",
		admin_ms_send_email_as_link_only_hover_help: "If you select this option, users can only send documents as links from Outlook. This option ensures that only users who have the appropriate privileges on the repository can view documents.",
		admin_ms_enable_prop_mapping_for_add: "Map Office properties to repository properties when users add or check in documents",
		admin_ms_checkout_document_after_add: "Automatically check out documents after they are added to the repository",
		admin_no_default_document_type_filtering: "Return all document types by default when users run searches",
		admin_no_default_document_type_filtering_hover_help: "In IBM Content Navigator for Microsoft Office, the default behavior is that users see only the document type for the current application when they run searches. For example, the Word document type is selected by default when they search from Microsoft Word.<br/><br/>However, selecting this option clears the Document types check boxes so that users see all of the documents that are returned by a search. Users can override this setting by selecting one or more document types before they run searches.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Specify whether to map the document properties defined for Microsoft Office documents to properties defined on repository.<br /></br /><b>Important:</b> If you enable this feature, you must configure the Office properties for each repository in your environment. If you do not map the Office properties to your repository properties, this feature will not work.<br /><br />This setting does not apply to Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Select this option to reduce the number of steps users need to take to work with documents after the documents are added to the repository.<br /></br /><b>Tip:</b> To ensure that users check the files back in to the repository, select <b>Prompt users to check in documents when they close Office applications</b>.",
		admin_ms_show_details_recently_used: "Show details of <b>Recently used</b> item",
		admin_ms_show_details_recently_used_hover_help: "By default, when you view the list of Recently Used items, the details for the items are hidden allowing more items to be displayed. When you select this option, in the Recently Used items list, the details are displayed for the first document in the details pane by default.",
		admin_ms_show_no_permissions_warning: "Show warnings when users edit properties or check in a document but don't have permission to view the document's entry template",
		admin_ms_show_no_permissions_warning_hover_help: "If a document in the repository was created using an entry template, but the user doesn't have permission to view the document's entry template, then the entry template is not retrieved.<br /><br/>So, when the user edits the document properties, the properties are displayed without using the entry template. And, when the user checks in the document, the document is checked in without using the entry template.<br /><br />By default, these actions occur without informing the user that the entry template is not being used. A warning is logged in the log file, only.<br /><br />Select this option if you want to display warnings that immediately inform the user when the entry template is not used.",
		admin_ms_hide_search_actions: "Collapse search filters section",
		admin_ms_hide_search_actions_hover_help: "By default, users can apply an action filter to specify an action, a user, or group of users, and select a date or date range when the action occurred. For example, you can search for documents that only you added during last month.<br /><br />If you don’t want to allow users to apply action filters, select this option to hide the action filters and reduce the number of fields that are displayed when defining search criteria.",
		admin_ms_hide_save_document: "Hide the <b>Save</b> option in the ribbon bar",
		admin_ms_hide_save_document_hover_help: "By using the <b>Save</b> option, users can save document changes to the repository without checking in the document.",
		admin_ms_indicate_managed_email_on_add: "Indicate whether an email has already been added to the repository",
		admin_ms_indicate_managed_email_on_add_hover_help: "Selecting this option lets users know that an email is already in the repository, which can reduce the number of times an email is added to the repository.  When this option is selected, a new color category called IBM ECM is created in Microsoft Outlook. Any email that is added to the repository is automatically added to the Managed in IBM ECM category.",
		admin_ms_edit_group_add_command_configuration: "Add options in the Edit group:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Specify which <b>Add</b> options are available from the <b>Edit</b> group in the ribbon bar:<ul><li>Select <b>Show all Add options</b> to show the Add button and all of the Add actions that are available from the Edit group.</li><li>Select <b>Hide all Add options</b> to prevent users from adding documents to the repository or if you want users to add documents only from within a teamspace.</li><li>Select <b>Hide the Add With Template action</b> if you want to enforce entry template folder associations and prevent users from selecting a different entry template.</li><li>Select <b>Show only the Add With Template action</b> if you want to require users to add documents by using entry templates.</li></ul>",
		admin_ms_show_edit_group_add_button: "Show all Add options (default)",
		admin_ms_hide_edit_group_add_button: "Hide all Add options",
		admin_ms_hide_add_with_entry_template: "Hide the Add With Template action",
		admin_ms_managed_in_ecm: "Managed in IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "If users display categories in Microsoft Outlook, this label is displayed for email that was added to an IBM Content Manager or IBM FileNet Content Manager repository.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "The Managed in IBM ECM category name cannot contain a comma (,) or a semicolon (;).",
		admin_delete_open_docs_after_close: "Automatically delete open documents when users close the documents",
		admin_admin_delete_open_docs_after_close_hover_help: "When a user opens a document in IBM Content Navigator for Microsoft Office, the document is downloaded to the user's document directory or to the location specified by the file tracking settings for the desktop.<br><br>Select this option to delete files that are open but not checked out when users close the documents. Selecting this option enables you to:<ul><li>Enforce compliance with IT policies</li><li>Ensure that users are working with the latest versions of documents</li><li>Reduce the amount of disk space that is used to store documents</li><ul>",
		admin_ms_custom_command_configuration: "Custom commands:",
		admin_ms_custom_command_configuration_hover_help: "You can add up to four commands to the IBM Content Navigator for Microsoft Office toolbar in Microsoft Office applications. The commands can be used to open URLs. For example, you can add a command to open a service that can be used to search for users and groups.",
		admin_ms_custom_command_dialog_title: "Edit Custom command",
		admin_ms_custom_command_dialog_intro_text: "Define a command that can be used to open a URL from the IBM Content Navigator for Microsoft Office toolbar in Microsoft Office applications.",
		admin_ms_custom_command_id: "Command ${0}",
		admin_ms_custom_command_available_label: "Available",
		admin_ms_custom_command_available_hover_help: "If the URL that is defined for a command needs to be taken offline for maintenance, you can clear the checkbox for the command so that the command is not displayed in Microsoft Office.<br/><br/><b>Important:</b> Users must log out of the desktop for the changes to be reflected in IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "Command ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Label",
		admin_ms_custom_command_label_hover_help: "Specify the label to display for the command in Microsoft Office.",
		admin_ms_custom_command_description_label: "Description",
		admin_ms_custom_command_description_hover_help: "Specify the description to display for the command in Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Specify the fully qualified URL to open from Microsoft Office. The URL can be a web page or service.",
		admin_ms_custom_command_icon_label: "Icon",
		admin_ms_custom_command_icon_hover_help: "Specify the file name of the icon to display, for example, CommandIcon.png.<br/><br/><b>Important:</b> You must add the icon file the Plugins subdirectory of the IBM Content Navigator for Microsoft Office installation directory on each client machine.<br/><br/>If the icon file is not in the Plugins directory, or if you do not specify an icon, the default icon, customButtonIcon_38.gif, is displayed.",
		admin_ms_custom_command_group_name: "Group label:",
		admin_ms_custom_command_group_name_hover_help: "You can specify a group label to display below the custom commands in the ribbon bar.<br/><br/>If you do not specify a label, the group label is <b>Custom Commands</b>.",
		admin_ms_ribbon_tab_label: "IBM ECM tab label:",
		admin_ms_ribbon_tab_hover_help: "Enter the name that you want to display for the IBM Content Navigator for Microsoft Office tab in the Microsoft Office ribbon bar. If you do not specify a name, the tab is named \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Close the task pane when users open documents",
		admin_ms_close_task_pane_on_open_hover_help: "Select this option if you want to maximize the space in which users can see documents in Microsoft Office.<br/><br/>Microsoft Office 2010 users: To ensure that the task pane is closed for all documents, enable multiple document interface (MDI) mode by clicking <b>Options</b> &gt; <b>Advanced</b> and clearing the <b>Show all windows in the Taskbar</b> option.",
		admin_ms_open_document_options: "Open document options:",
		admin_ms_delete_local_file_options: "Delete local file options:",
		admin_ms_add_and_checkin_options: "Add and check-in options:",
		admin_ms_search_options: "Search options:",
		admin_ms_display_options: "Display options:",
		admin_ms_bidirection_enable_label: "Enable support for bidirectional text",
		admin_ms_bidirection_enable_hover_help: "Select this option if you want to enable users to enter or view text in IBM Content Navigator for Microsoft Office in a direction other than left-to-right.",
		admin_ms_text_direction_label: "Base text direction for content:",
		admin_ms_text_direction_hover_help: "Specify the direction in which text is entered into input fields in IBM Content Navigator for Microsoft Office. This setting also controls how items, such as folder names or property values, are displayed.",
		admin_ms_control_threshold_label: "Minimum number of items to enable look ahead:",
		admin_ms_control_threshold_hover_help: "By default, look ahead is enabled when the number of items is greater than or equal to 50, for searching or setting properties that have pre-defined values in a drop-down list. You can change the minimum value.",

		admin_ms_default_email_class: "Class to use when adding email",
		admin_ms_default_email_class_hover_help: "Any email that is added to this repository from Microsoft Outlook will be added to the class that you specify. Users cannot change the class.",
		admin_ms_default_folder_class: "Class to use when creating folders",
		admin_ms_default_folder_class_hover_help: "Any folder that is created in this repository from a Microsoft Office application will be added to the class that you specify.  Users cannot change the class.",
		admin_ms_default_folder_warn_title: "You cannot use the ${0} class as the class to use when creating folders.",
		admin_ms_default_folder_warn_name_prop_invalid: "The name property of the class is not a string, and the name of the folder must be a string.<br />Select a different class to use when creating folders or work with your IBM Content Manager administrator to change the name property of the class to a string.",
		admin_ms_default_folder_warn_req_props: "The class includes required properties that do not have values. However, users cannot specify values for the required properties when they create folders from IBM Content Navigator for Microsoft Office.<br />Select a different class to use when creating folders or work with your IBM Content Manager administrator to make the required properties optional or to prefill the required properties with a value.",
		admin_ms_delimiter_for_office_properties: "Delimiter for multi value string properties",
		admin_ms_delimiter_for_office_properties_hover_help: "Specify the character to use as a delimiter for string properties that you are mapping to multi-value string properties. By default, you can assign a set of values to a multi-value string property by using a semi-colon(;) as a delimiter to separate the values. However, if one of your string values includes a semi-colon, you cannot add that string value unless the delimiter is changed to a different character. For example, you might change the delimiter to a comma (,)",
		admin_ms_outlookPropertyRemembrance : "Remember settings when adding messages and attachments",
		admin_ms_outlookPropertyRemembrance_hover_help : "The property values, location, class selection and security that are assigned to the messages and attachments are remembered and will be used as the default settings when future items are added.",

		admin_file_type_name_hover_help: "Name hover help",
		admin_file_type_description_hover_help: "Description hover help",
		admin_file_type_dialog_title: "Edit File Type Filter",
		admin_new_file_type_dialog_title: "New File Type Filter",
		admin_mobile_feature_dialog_title: "Feature",
		admin_mobile_feature_dialog_new_title: "New Feature",
		admin_file_type_instructions: "Create a filter that users can use to narrow their list of search results. You can map multiple MIME types to the filter.",
		admin_file_type_filter_place_holder: "Filter MIME types",
		admin_new_button_label: "New",
		admin_edit_button_label: "Edit",
		admin_delete_button_label: "Delete",
		admin_copy_button_label: "Copy",
		admin_verify_button_label: "Verify",
		admin_availabe_filters_label: "Available Filters",
		admin_selected_filters_label: "Selected Filters",

		admin_mobile_access: "Mobile application access:",
		admin_mobile_access_hover_help: "If you want to use IBM Content Navigator from a mobile device, it is recommended that you enable users to access this desktop from the mobile application.<br /><br />If you disable access to this desktop from the mobile application, users can still access the web client from their mobile browsers. However, the web client is not designed to be accessed from mobile devices.",

		admin_mobile_access_allow_label: "Allow users to:",
		admin_mobile_allow_add_photos: "Add photos from the camera and photo library",
		admin_mobile_allow_add_docs: "Add documents and create folders to the repository",
		admin_mobile_allow_open_docs: "Open documents in other applications",
		admin_mobile_allow_add_docs_hover_help: "Users can create folders or add documents from other mobile applications, such as a document that is attached to an email.",
		admin_mobile_allow_open_docs_hover_help: "Users are prompted to select the application to use to view the selected document. If only one application is available, that application is used.",
		admin_mobile_features: "Features:",
		admin_mobile_features_hover_help: "Specify which features of this desktop are displayed in the IBM Content Navigator mobile application.",
		admin_mobile_new_feature_button_label: "New Feature",
		admin_mobile_move_up_button_label: "Move Up",
		admin_mobile_move_down_button_label: "Move Down",
		admin_desktop_mobile_instructions: "Mobile settings instruction goes here",
		admin_desktop_max_number_of_docs_to_add: "Maximum number of documents to add:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Specify the maximum number of documents that users can add at a time. The default  maximum is 50. However, you can set the maximum up to 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maximum number of items to modify:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Specify the maximum number of items that users can modify at a time. The default  maximum is 50. However, you can set the maximum up to 300.",
		admin_desktop_max_conversion_size: "Maximum amount of data for PDF conversions (in MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Restriction:</b> This setting is not supported on IBM Content Manager OnDemand.<br/><br/>Specify the maximum amount of data that can be converted to PDF. This limit applies when users download items as PDF files or send items through email as PDF files.<br /><br />If the size of each document cannot be determined, the documents are still converted to PDF.<br/><br/>The default limit is 200 MB. Setting the limit above 200 MB might affect system performance.",
		admin_desktop_timeProperties: "Time stamp:",
		admin_desktop_time_properties_hover_help: "<b>IBM FileNet P8 users only:</b> This setting applies to custom properties and does not apply to the system properties. For example, the Modified By property will still show the time portion of the time stamp if you select <b>Display only the date portion of the time stamp</b>.<br/><br/>This setting does not change the time stamp in the repository.",
		admin_desktop_disable_time_stamp: "Display the full time stamp",
		admin_desktop_enable_time_stamp: "Display only the date portion of the time stamp",
		admin_desktop_timezone: "Time zone:",
		admin_desktop_timezone_localuser: "Display the user’s local time zone",
		admin_desktop_timezone_alluser: "Display the same time zone for all users",
		admin_desktop_timezone_hover_help: "You can specify whether users see a time stamp that is based on their local time zone or whether all users see the same time stamp.<br/><br/>This setting does not change the time stamp in the repository. However, the setting that you select determines the time zone is used to create the time stamp in the repository when users add or modify items.",
		admin_desktop_mobile_feature_display_label: "Display",
		admin_desktop_mobile_feature_icon_file_label: "Icon File",
		admin_mobile_feature_dialog_icon_file_label: "Icon File:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Name",
		admin_desktop_mobile_select_feature_label: "Select Feature",
		admin_desktop_mobile_feature_icon_label: "Feature Icon",
		admin_desktop_share_admin_none: "Administrator not set.",
		admin_desktop_share_admin_edit_label: "Set Administrator...",
		admin_browse_icon: "Browse Icon",
		admin_search_icon: "Search Icon",
		admin_favorites_icon: "Favorites Icon",
		admin_casesearch_icon: "Case Icon",
		admin_datacap_icon: "Datacap Icon",
		admin_system_defined: "System Defined",
		admin_icon_file_placeholder_text: "File Location (i.e. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Root",
		admin_folder_default: "Default",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Toolbars",
		admin_menu_context_menus: "Context Menus",
		admin_menu_office_toolbars: "Microsoft Office Ribbon Bar Commands",
		admin_menu_office_menus: "Microsoft Office Context Menus",

		admin_file_name_label: "File name:",
		admin_exportconfiguration_security_label: "Include users and groups who are authorized to use this desktop",
		admin_exportconfiguration_instruction: "You can export your desktops, including the repository configurations and plug-in configurations that are associated with the selected desktops, to a file that you can import to another instance of IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Export Desktop",
		admin_exportconfiguration_button_label: "Export",
		admin_dialog_select_all: "Select All",
		admin_dialog_deselect_all: "Clear All",

		admin_importconfiguration_instruction: "The items in the selected configuration file will be imported to this system. However, if an item with the same ID already exists on the system, you must decide whether to preserve or overwrite the item.",
		admin_importconfiguration_dialog_label: "Import Desktop",
		admin_importconfiguration_reason_dialog_label: "Import Redaction Reasons",
		admin_importconfiguration_admin_role_dialog_label: "Import Desktop Administration Roles",
		admin_importconfiguration_button_label: "Import",
		admin_to_be_imported: "Configuration Item to Import",
		admin_on_target_system: "Existing Item on Target System",
		admin_import_short_warning_message: "The following items already exist on this system. Select the items that you want to replace on this system:",
		admin_import_warning_message: "The following configuration items have the same IDs as items that exist on the target system. Select only those items that you want to import and overwrite on the target system.<br /><br />If you don't want to overwrite a configuration item, create a copy of the item on the instance from which you exported the desktop, give it a different ID and associated it with the desktop. Export the desktop again, and then import the desktop on this instance.",
		admin_choose_file_to_import_label: "Choose file for import:",
		admin_download_imported_log: "Download Report",
		admin_desktop_import_summary: "Desktop Import Summary",
		admin_reason_import_summary: "Redaction Reason Import Summary",
		admin_rba_import_summary: "Administration Role Import Summary",
		admin_import_open_tabs_checking: "Before you can import desktops, you must close all of the tabs other than the <bold>Desktops</bold> tab in the administration tool.",
		admin_import_no_conflict: "The following items will be imported:",
		admin_desktop_invalid: "Invalid desktop",
		admin_desktop_warning: "The desktop was saved with warnings.",
		admin_repos_warning: "The repository was saved with warnings.",
		admin_config_type_icon: "Configuration Item Type Icon",

		admin_approval_workflow: "Approval Workflow",
		admin_approval_workflow_hover: "Allows users to launch a predefined approval workflow. You can disable approval workflow to allow users to launch a custom approval workflow that is defined by a subscription. By default, approval workflow is enabled.<br><br><b>Important:</b> If you enable approval workflow, you must also ensure that one or both of the predefined workflow definitions (ICNParallelDocumentApproval.pep and ICNSequentialDocumentApproval.pep) are added to the repository and transferred to the Content Process Engine.",

		admin_cannot_add_desktop_members_error: "You cannot specify the users and groups who have access to this desktop.",
		admin_cannot_add_desktop_members_error_explanation: "You do not have the appropriate permissions to retrieve user and group information.",
		admin_cannot_add_desktop_members_error_userResponse: "Log in with a different user name or ask your IBM Content Manager system administrator to grant you the UserACLOwner privilege, which is required to retrieve user and group information.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "You cannot select users and groups.",
		admin_cannot_select_users_groups_error_explanation: "You do not have the appropriate permissions to retrieve user and group information.",
		admin_cannot_select_users_groups_error_userResponse: "Log in with a different user name or ask your IBM Content Manager system administrator to grant you the UserACLOwner privilege, which is required to retrieve user and group information.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "The OAuth2 client was not found.",
		oauth_client_not_found_error_explanation: "The OAuth2 client ID ${0} was not found.",
		oauth_client_not_found_error_userResponse: "Contact your system administrator, and let them know that the OAuth2 client ID was not found.",
		oauth_client_not_found_error_adminResponse: "Review the repository configuration, and verify that it contains the correct OAuth2 client ID.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "The repository login failed.",
		oauth_login_failed_error_explanation: "An attempt to log in to the repository ${0} failed.",
		oauth_login_failed_error_userResponse: "Verify that the user id and password are correct, and try logging in again.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "An error occurred while trying to log into ${0}.",
		oauth_error_return_error_explanation: "The ${0} authorization attempt failed.",
		oauth_error_return_error_userResponse: "Contact your system administrator with the following information: The ${0} authorization attempt failed and returned the following error message: <br>${1}<br><b>error:</b> ${2}.<br><b>description:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Additional information about the error is in the web application server log files.  For more information about the log files, see &quot;IBM Content Navigator log files&quot; in IBM Knowledge Center. Using information about the ${0} authorization attempt, try to correct the problem, and verify OAuth2 is enabled.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth target application",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "error",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Unrecognized OAuth error message.",

		delete_share_permission_error: "The share was not deleted.",
		delete_share_permission_error_explanation: "You do not have the appropriate permissions to delete the share.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "You cannot share this item.",
		class_not_support_share_error_explanation: "The class ${0} has not been set up to support sharing.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		
		rbr_not_support_share_error: "You cannot share this item.",
		rbr_not_support_share_error_explanation: "Sensitive content has been added to item.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "The device the user is trying to log in from is not authorized to access the user’s account.",
		box_oauth_error_invalid_request: "The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.",
		box_oauth_error_unsupported_response_type: "The authorization server does not support obtaining an authorization code using this method.  Check the value of the code param in your request.",
		box_oauth_error_access_denied: "The resource owner or authorization server denied the request.",
		box_oauth_error_temporarily_unavailable: "Your device is being rate limited, you need to either decrease your rate of authorization requests, or wait a bit.",
		box_oauth_error_unknown: "Unrecognized Box error message.",

		admin_default_search_type: "Default search type",
		admin_default_search_type_hover: "Specify which option is selected by default in the <b>Search for</b> field in the <b>Search options</b> menu.",
		admin_default_search_type_documents: "Documents",
		admin_default_search_type_folders: "Folders",
		admin_default_search_type_folders_and_documents: "Documents and Folders",

		admin_restricted_search_type: "Allow search on",
		admin_restricted_search_type_hover: "By default, users can search on both documents and folders. If you want to hide the Search on option and restrict searches to documents only, select Documents and deselect Folders.</br>,</br> If you allow search on both documents and folders, select the default option to display when the search pane is opened.",
		admin_restricted_search_type_documents: "Documents",
		admin_restricted_search_type_folders: "Folders",
		admin_restricted_search_type_folders_and_documents: "Documents and Folders",

		admin_default_search_version: "Default search version",
		admin_default_search_version_hover: "Specify which option is selected by default in the <b>Version</b> field in the <b>Search options</b> menu.",

		admin_all_classes_search: "Search all classes",
		admin_all_classes_search_hover: "Specify if users are allowed to search across all classes, and if so what should be included in document searches.",
		admin_all_classes_search_removed_hover: "The options to search all classes are not available because the context-param allPseudoClassHidden parameter in the Navigator application web.xml is set to true.",
		admin_all_classes_search_hide: "Remove the choice to search all classes",
		admin_all_classes_search_documents_only_documents: "A documents search includes only documents, saved searches, and entry templates",
		admin_all_classes_search_documents_non_folders: "A documents search includes any items that are not folders",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Tree view:",
		admin_feature_config_tree_view_hoverhelp: "Specify whether users can access the list of folders in the repository through the Browse pane. If you hide the Browse pane, users must use the content list to navigate to folders in the repository.",
		admin_feature_config_selected_repositories_label: "Repositories:",
		admin_feature_config_selected_repositories_hoverhelp: "Select the repositories that users can access in this feature.",
		admin_feature_config_selected_repositories_select_state_hdr: "Select Repository",
		admin_feature_config_selected_repositories_name_hdr: "Repository Name",
		admin_feature_config_selected_repositories_show_hdr: "Show",
		admin_feature_config_invalid_icon_title: "The feature is missing some required settings",
		admin_feature_config_view_select_hdr: "Select View",
		admin_feature_config_view_hdr: "View",
		admin_feature_config_view: "View",
		admin_feature_config_views: "Views:",
		admin_feature_config_views_hoverhelp: "Specify which views users can apply to the content list. The views are displayed in the order that they are listed. The first selected view is the default view for the feature.<br><br><b>Important:</b> If you enable the Filmstrip view, you must configure the HTML conversion viewer to see document previews.",

		admin_custom_dialog_name: "Name:",
		admin_custom_dialog_value: "Value:",
		admin_custom_setting_name_hover: "Enter the name of the Daeja ViewONE setting that you want to add to your configuration. See the Daeja ViewONE documentation for more information about configuration settings.",
		admin_custom_setting_value_hover: "Enter the value that you want to use for the Daeja ViewONE configuration setting. See the Daeja ViewONE documentation for more information about valid values for the configuration setting.",

		entry_template_name_required_message: "The name field on Entry Template Settings is required.",
		entry_template_name_invalid_message: "The name field on Entry Template Settings cannot contain the following characters: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "When specific users and groups is selected for the Share with field on Entry Template Settings, then you must specify at least one user or group.",
		entry_template_no_permission_to_save_to_teamspace_message: "You do not have permission to add entry templates to the teamspace (${0}) which was selected from the Save in on Entry Template Settings.",
		entry_template_save_in_destination_required_message: "You must specify a default save in location in the <b>Set the Item Storage Location</b> section.",
		entry_template_save_in_destination_must_select_folder: "If you hide the <b>Save in</b> field and require users to add new items to a folder, you must select a folder in the <b>Default Save in location</b> field in the <b>Set the Item Storage Location</b> section.",
		entry_template_what_to_save_required_message: "Select at least one choice for the what do you want to save on Set Options.",
		entry_template_custom_workflow_empty_message: "If you select <b>Custom Workflow...</b>, you must search for and select the workflow that you want to use.",

		entry_template_new: "New Entry Template",
		entry_template_name_hover: "The entry template name cannot contain the following characters: * \\ / : ? \" < > |",
		entry_template_name_invalid: "The entry template name cannot contain any of the following characters: * \\ / : ? \" < > |",
		entry_template_description_hover: "Provide a description that will enable users to distinguish between this entry template and the other entry templates.",
		entry_tempalte_save_in_hover: "Specify where to save the entry template.<br><br><b>Restriction:</b> If you save the entry template in a teamspace, you can use the entry template only within the teamspace.",
		entry_template_inherit_hover: "If you select this option, the security settings for the parent folder are added to the list of users and groups that the entry template is shared with.",
		entry_template_builder_aria_label: "Entry Template Builder",
		entry_template_builder_layout_aria_label: "Entry Template Properties Builder",

		entry_template_settings_document: "Define the Entry Template",
		entry_template_settings_folder: "Set the Item Storage Location",
		entry_template_settings_folder_intro: "Specify where items that are added by using this entry template are stored.",
		entry_template_settings_properties: "Set the Item Properties",
		entry_template_settings_properties_intro: "You can specify default or predefined values for the items that are added by using this entry template. In addition, you can change the layout of the properties to control which properties are displayed and the order in which they are displayed.",
		entry_template_settings_workflow: "Configure a Workflow for the Item",
		entty_template_settings_workflow_intro: "You can specify whether a workflow is launched when items are added by using the entry template.",
		entry_template_settings_security: "Set the Item Security",
		entry_template_settings_security_intro: "You can specify default or predefined security for the items that are added by using this entry template. Users with the appropriate permissions might be able to change the security of the item after it is added.",
		entry_template_settings_options: "Set Options for the Item",
		entry_template_xt_warning: "Saving changes to this entry template will convert it from an IBM Workplace XT entry template into an IBM Content Navigator entry template. IBM Workplace XT does not support IBM Content Navigator entry templates.",

		entry_template_properties_edit_layout: "Edit Layout...",
		entry_template_properties_read_only: "Read only",
		entry_template_properties_hidden: "Hidden",

		entry_template_destination_show: "Show the <b>Save in</b> field",
		entry_template_destination_show_hover: "If you display the <b>Save in</b> field, users can change where items are stored.",
		entry_template_destination_hide: "Hide the <b>Save in</b> field",
		entry_template_destination_hide_hover: "If you hide the <b>Save in</b> field, users cannot change where items are stored.",
		entry_template_folder_save_in_default: "Default <b>Save in</b> location:",
		entry_template_folder_save_in_default_hover: "Specify the default location where items are added by using this entry template.<br><br>The default location that you select imposes restrictions on the runtime behavior of the entry template:<ul><li>Users cannot select a different repository.</li><li>If the default location is a teamspace, users cannot select a different teamspace.</li></ul>However, if users associate this entry template with a folder, users can override the storage location that is configured for this entry template.",
		entry_template_folder_restrict_choice: "Require users to add items to the default location or a child folder of the default location",
		entry_template_folder_file_in_required: "Require users to add new items to a folder",
		entry_template_folder_file_in_required_hover: "If you do not select this option, users can add items to the root folder of the repository.<br><br><b>Restriction:</b> The desktop configuration might require users to select a folder.",

		entry_template_document_type_show: "Show the <b>What do you want to save</b> field",
		entry_template_document_type_show_hover: "If you display the <b>What do you want to save</b> field, the items that you select are displayed as options in the <b>What do you want to save</b> field.",
		entry_template_document_type_hide: "Hide the <b>What do you want to save</b> field",
		entry_template_document_type_hide_hover: "If you hide the <b>What do you want to save</b> field, the type of document that you select is always used when users add documents by using this entry template.",
		entry_template_document_type: "This entry template can be used to add the following items:",
		entry_template_document_type_hover: "If you display the <b>What do you want to save</b> field, the items that you select are displayed as options in the <b>What do you want to save</b> field.<br><br>If you hide the <b>What do you want to save</b> field, the type of document that you select is always used when users add documents by using this entry template.",

		entry_template_misc: "Additional options:",
		entry_template_auto_classify_show: "Automatically classify the contents of the document",
		entry_template_auto_classify_show_hover: "When a document is classified on FileNet Content Manager, the contents of the document are examined to determine the appropriate class and property values for the document.<br><br>Talk to your system administrator to determine whether content classification is enabled on Content Platform Engine.<br><br>If you enable this option, the class and properties of the document might be changed when a user adds the document to the repository.",
		entry_template_allow_duplicate_file_names: "Allow documents with duplicate file names",
		entry_template_allow_duplicate_file_names_hover: "By default, you can add documents with the same name to a folder in FileNet Content Manager. You can clear this option if you want each file in the selected storage location to have a unique name.",
		entry_template_allow_compound_documents: "Allow this document to be the parent of a compound document",
		entry_template_version_show: "Show version options for add and check in",
		entry_template_version_hide: "Hide version options for add and check in",
		entry_template_version_to_add_as: "Default version to add as:",
		entry_template_version_default: "Default version option:",
		entry_template_version_default_checked: "Major Version",
		entry_template_version_default_unchecked: "Minor Version",
		entry_template_version_display: "Document version:",
		entry_template_version_display_show: "Show",
		entry_template_version_display_hide: "Hide",
		entry_template_version_default_add: "Default version to add as:",

		entry_template_checkin_version_show: "Show version options for check in",
		entry_template_checkin_version_hide: "Hide version options for check in",

		entry_template_checkin_version_message_no_versions: "The version policy of the selected class prevents users from checking in a new version of the document.",
		entry_template_checkin_version_message_always_version: "The version policy of the selected class prevents users from replacing the current version of the document.",

		entry_template_applied: "Use this entry template when users:",
		entry_template_applied_add: "Add documents (required)",
		entry_template_applied_add_folder: "Create folders (required)",
		entry_template_applied_checkin: "Check in",
		entry_template_applied_properties_group: "View or edit properties:",
		entry_template_applied_properties: "In the Properties window",
		entry_template_applied_viewer: "In the applet viewer",
		entry_template_applied_docinfo: "In the document information pane",
		entry_template_applied_no_class_support: "This entry template can be used to add items but cannot be used to check in documents or view and edit properties. The selected class must be modified to support these situations. If you need to use the entry template in these situations, ask your administrator to use the administration tool to modify the class so that it can store entry template IDs.",
		entry_template_applied_no_child_component_support: "The selected class has child components and a property layout is defined. Property layouts do not support child components. The child components will not be displayed to the user.",
		entry_template_applied_child_component: "The selected class has child components. They will be displayed to the user, but you cannot configure the child components in this entry template.",

		entry_template_properties_show: "Show the <b>Properties</b> section",
		entry_tempalte_properties_show_hover: "If you display the <b>Properties</b> section, users can modify any property values that are displayed in the entry template and that are not read-only properties.",
		entry_template_properties_hide: "Hide the <b>Properties</b> section",
		entry_template_properties_hide_hover: "If you hide the <b>Properties</b> section, users cannot modify any property values. The entry template must define all of the values that you want to use when items are added by using this entry template.",

		entry_template_security_show: "Show the <b>Security</b> section",
		entry_template_security_show_hover: "If you display the <b>Security</b> section, users who have the appropriate permissions can modify the security of the item.",
		entry_template_security_hide: "Hide the <b>Security</b> section",
		entry_template_security_hide_hover: "If you hide the <b>Security</b> section, users cannot modify the security of the items. The entry template must define all of the security settings that you want to use when items are added or edited.",
		entry_template_security_policy: "Security policy:",
		entry_template_security_policy_hover: "Depending on the security policy that you select, the security policy can:<br><ul><li>Override the permissions that are specified under <b>Set the Item Security</b>.</li><li>Add to the permissions that are specified under <b>Set the Item Security</b>.</li></ul>",
		entry_template_security_policy_none: "No security policy selected",
		entry_template_security_inherit: "Inherit the security settings from the parent folder",
		entry_tempalte_save_in_hover: "Specify where to save the entry template.<br><br><b>Restriction:</b> If you save the entry template in a teamspace, you can use the entry template only within the teamspace.",
		entry_template_security_inherit_item_security_hover: "If you select this option, the security settings for the parent folder are added to the security settings that are defined by one of the following items:<ul><li>The class that is specified in the <b>Set the Item Properties</b> section</li><li>The custom security that you specified in the <b>Set the Item Security</b> section</li></ul>",
		entry_template_security_change: "Override the security defined by the selected class",
		entry_template_security_change_hover: "If you select this option, the security settings that are defined for the class are displayed by default. You can then modify the security settings for the entry template.<br><br>If you display the <b>Security</b> section, users who have the appropriate permissions can modify the security of the item.<br><br>If you select this option and choose to inherit the security settings from the parent folder, any inheritable permissions will be added to the security that you specify.",
		entry_template_security_default_item_security: "Override the default item security of the user who adds the item",
		entry_template_security_policy_message_override: "The selected security policy is configured to override the permissions that are specified under Set Security.",
		entry_template_security_policy_message_add: "The selected security policy is configured to add to the permissions that are specified under Set Security.",
		entry_template_security_policy_preserve_true_hover: "Preserves direct permission",
		entry_template_security_policy_preserve_false_hover: "Does not preserve direct permission",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specific roles",
		entry_template_security_class_role_search_title: "Search for Roles:",
		entry_template_secuirty_class_member_title: "Member list for ${0}",
		entry_template_secuirty_class_folder_only: "These permissions apply to this folder only",
		entry_template_secuirty_class_folder_and_immediate_children: "These permissions apply to this folder and to those immediate children that are configured to inherit security from this folder.",
		entry_template_secuirty_class_folder_and_all_children: "These permissions apply to this folder and to all descendants that are configured to inherit security from this folder. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"These permissions apply to those immediate children that are configured to inherit security from this folder",
		entry_template_secuirty_class_folder_all_children_not_folder: "These permissions apply to all descendants that are configured to inherit security from this folder",

		entry_template_secuirty_class_folder_only_label: "Folder Only",
		entry_template_secuirty_class_folder_and_immediate_children_label: "Folder and Immediate Children",
		entry_template_secuirty_class_folder_and_all_children_label: "Folder and All Children",
		entry_template_secuirty_class_folder_all_children_not_folder_label: "All levels below only",
		sentry_template_secuirty_class_folder_Immediate_children_not_folder_label: "One level below only",
		
		entry_template_class_security_message_no_override: "The security of the selected class prevents users from overriding the security.",
		entry_template_class_security_required_privileges: "<b>Important</b>: When you override the security of the selected class, users who add items by using this entry template must have the ItemSetACL and UserACLOwner privileges.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Sequential Pattern Workflow",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Parallel Pattern Workflow",
		entry_template_workflow_type_existing: "Custom Workflow...",
		entry_template_workflow_launch_prompt: "Ask users whether to launch the workflow",
		entry_template_workflow_launch_auto: "Automatically launch the workflow",
		entry_template_workflow_modify_launch: "Allow users to modify the launch step",
		entry_template_workflow_modify_launch_hover: "Select this option if you want to allow users to change how the workflow is launched.",

		entry_template_optionsButton_title: "Modify",
		entry_template_optionsButton_readonly_title: "View Association",
		entry_template_optionsDialog_title: "Folder Association Settings",
		entry_template_removeButton_title: "Remove",
		entry_template_addButton_title: "Add",
		entry_template_selected_entry_templates: "Selected Entry Templates",
		entry_template_docs_added_to_template_destination: "Documents are added to the destination specified in the entry template.",
		entry_template_docs_added_to_other_object_store: "This entry template adds items to the ${0} object store.",
		entry_template_inherited_entry_templates_label: "I want to: ",
		entry_template_inherited_entry_templates: "Inherit entry template associations from folder: ",
		entry_template_inherited_entry_templates_not: "Create new associations for this folder",
		entry_template_inherited_folder_path: "The entry templates in the list of selected entry templates are associated with the following folder: ${0}. <br> The path to the folder is ${1}.",
		entry_template_folder_associations_title: "Associate Entry Templates",
		entry_template_folder_associations_intro: "When you associate an entry template with a folder, users must use the entry template to add items to the folder. If you associate multiple entry templates with a folder, users can select which entry template to use.",
		entry_tempalte_folder_associations_entrytemplate: "Entry template: ",
		entry_template_avaliable_entry_templates: "Available Entry Templates",
		entry_template_fileTypes_intro_title: "Allowed file types:",
		entry_template_fileTypes_intro: "By default an entry template can be used to add any type of document to the repository. However, if you select one or more file types, the entry templates is available only when users add documents that match one of the specified file types.",
		entry_template_fileTypes: "File Types",
		entry_template_fileType_error: "Invalid file types are selected for one or more entry template associations. You must remove the invalid file types before these entry template associations can be saved.",
		entry_template_fileTypes_any_type_of_file: " Any type of file",
		entry_template_description_label: "Description",
		entry_template_ItemInfoPrefix: "Associate With: ",
		entry_template_TargetObjectStoreName: "Target Object Store",
		entry_template_class: "Class",
		entry_template_current_folder_as_parent: "Use folder as destination",
		entry_template_view_minetypes: "View MIME Types",
		entry_template_avaliable_MIME_types: "Available File Types",
		entry_template_selected_MIME_types: "Selected File Types",
		entry_template_MIME_type_column: "file type category name",
		entry_template_file_type_not_existing: "Please remove the invalid file types.",
		entry_template_MIME_types: "MIME types:",
		entry_template_MIME_types_info_dialog_title: "The MIME types for",
		entry_template_destination_label: "Add documents to: ",
		entry_template_destination_help: "Specify where documents are stored on the repository when users add documents to this folder by using the selected entry template.",
		entry_template_radioButton_folder_destination: "Selected folder",
		entry_template_radioButton_template_destination: "Destination specified in the entry template",
		entry_tempalte_teamspace_default: "Default Entry Template",
		entry_template_folder_associations_save_new: "You modified some entry template associations. Do you want to close this window without saving your changes?",
		entry_template_mode_binding_label: "Properties",
		entry_template_columns_className: "Class Name",
		entry_template_columns_type: "Template Type",
		entry_template_columns_workflow: "Workflow Name",
		entry_template_columns_destination: "Destination",
		entry_template_association_less_than_record: "There are ${0} entry templates not listed in the Selected Entry Templates. You have no permission to see them. Or they are deleted. Contact your system administrator to get more information.",
		
		/* Request */

		progress_message_general: "Working...",
		cancel_message_general: "The action was canceled.",
		ie8_not_supported_browser: "IE8 is not a supported browser.",
		progress_message_getDesktop: "Loading desktop...",
		progress_message_getActions: "Loading actions...",
		progress_message_getViewers: "Loading desktop...",
		progress_message_logon: "Logging in...",
		progress_message_logoff: "Logging out...",
		progress_message_getContentClasses: "Retrieving classes...",
		progress_message_openContentClass: "Retrieving class details...",
		progress_message_od_getCabinets: "Retrieving cabinets...",
		progress_message_getSearchTemplates: "Retrieving searches...",
		progress_message_od_getTemplates: "Retrieving folders...",
		progress_message_od_openCabinet: "Retrieving folders...",
		progress_message_openSearchTemplate: "Opening search...",
		progress_message_od_openTemplate: "Opening folder...",

		progress_message_getWorklists: "Retrieving work lists...",
		progress_message_getWorkItems: "Retrieving work items...",
		progress_message_getNextWorkItems: "Retrieving work items...",
		progress_message_getStepParameters: "Retrieving work item information...",
		progress_message_getStepAttachmentItems: "Retrieving attachment information...",
		progress_message_getDependentParameters: "Retrieving property information...",

		progress_message_p8_getProcessApplicationSpaces: "Retrieving application spaces...",
		progress_message_p8_getProcessRoles: "Retrieving process roles...",
		progress_message_p8_getProcessInbaskets: "Retrieving in-baskets...",
		progress_message_p8_getProcessorInformation: "Retrieving process information...",
		progress_message_p8_getFilterCriteria: "Retrieving in-basket filter...",
		progress_message_p8_getLaunchParameters: "Retrieving work item information...",
		progress_message_p8_getStepAttachments: "Retrieving work item attachments...",
		progress_message_p8_getSubscriptions: "Retrieving workflow subscriptions...",
		progress_message_p8_getTrackerParameters: "Retrieving work item information...",
		progress_message_p8_getTrackerHistory: "Retrieving work item history...",
		progress_message_p8_getTrackerMilestones: "Retrieving work item milestones...",
		progress_message_p8_completeStep: "Completing work item...",
		progress_message_p8_moveToInbox: "Moving item to in-basket...",
		progress_message_p8_returnToSender: "Returning work item...",
		progress_message_p8_reassign: "Reassigning work item...",
		progress_message_p8_launchWorkflow: "Launching workflow...",
		progress_message_p8_getTransferedWorkflows: "Retrieving workflow information...",

		progress_message_cm_getProcesses: "Retrieving workflow information...",
		progress_message_cm_completeStep: "Continuing work item...",
		progress_message_cm_getItemProcessInformation: "Retrieving workflow information...",

		progress_message_search: "Searching...",
		cancel_message_search: "The search was canceled.",
		progress_message_getContentItems: "Retrieving item information...",
		progress_message_openFolder: "Opening folder...",
		progress_message_addItem: "Creating item...",
		progress_message_checkIn: "Checking in item...",
		progress_message_changePassword: "Changing password...",
		progress_message_getDefaultInstancePermissions: "Retrieving default permissions...",
		progress_message_openItem: "Retrieving item information...",
		progress_message_saveItem: "Saving item information...",
		progress_message_getPermissions: "Retrieving permissions...",
		progress_message_getEntryTemplates: "Retrieving entry templates...",
		progress_message_openEntryTemplate: "Opening entry template...",
		progress_message_getFavorites: "Retrieving favorites...",
		progress_message_getFoldersFiledIn: "Retrieving folders...",
		progress_message_getDocumentVersions: "Retrieving versions...",
		progress_message_getDependentAttributeInfo: "Retrieving attribute information...",
		progress_message_packageForDownload: "Packaging for download...",
		progress_message_convertDocument: "Converting content...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Retrieving content type...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Adding document...",

		progress_message_desktop_reload: "The client is reloading your desktop.<br>You might be prompted to log in again.",
		
		progress_message_email: "Sending email...",
		cancel_message_email: "The email was cancelled.",

		progress_message_p8_getOfficeOnlineTemplates: "Retrieving Office templates...",
		
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Favorites Tree",
		favorites_content_list_label: "Favorites Content List",
		syncItems_tree_label: "My Synced Files Tree",
		syncItems_content_list_label: "My Synced Files Content List",
		my_checkouts_content_list_label: "My Checkouts Content List",
		browse_tree_label: "Browse Tree",
		browse_content_list_label: "Browse Content List",
		repository_selector_label: "Repository Selector",
		teamspaces_content_list_label: "Teamspace Content List",
		templates_content_list_label: "Templates Content List",
		work_content_list_label: "Work Content List",
		work_tree_label: "Work Tree",
		admin_tree_label: "Administration Tree",
		admin_tabs_label: "Administration Tabs",
		search_tabs_label: "Search Tabs",
		search_selector_label: "Search Selector",
		teamspace_browse_content_list_label: "Teamspace Browse Content List",
		teamspace_search_tabs_label: "Teamspace Search Tabs",

		/* Desktop */
		undo_description: "Undo ${0}",
		redo_description: "Redo ${0}",

		/* Application Tabs */
		home: "Home",
		repository: "Repository",
		repository_type: "Repository type:",
		repository_type_header: "Repository Type",
		repository_type_any: "All Repositories",
		repository_type_contains_label: "Repository type contains",
		document_info: "Document Information",
		team: "Team",
		administration: "Administration",

		/* Home Page */
		recent_activity: "Recent Activity",
		repos_and_wrksp: "Repositories and Teamspaces",
		workspaces: "Teamspaces",
		repositories: "Repositories",
		templates: "Templates",
		favorites: "Favorites",
		my_checkouts: "My Checkouts",
		mySyncedFiles: "My Synced Files",
		links: "Links",
		name_label: "Name",
		description_label: "Description:",
		type_label: "Type:",
		type_heading: "Type",
		type_id_label: "Type ID",
		server_type_icon: "Server Type Icon",
		server_type_heading: "Server Type",
		server_type: "Server type",
		port_heading: "Port Number",
		port_label: "Port number:",
		server_name_heading: "Server Name",
		server_label: "Server name:",
		server_url_label: "Server URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Connected:",
		repository_label: "Repository",
		modified_label: "Modified by:",
		modified_date_label: "Modified on:",
		status_label: "Status:",
		last_modified_label: "Last modified by:",

		modifier: "Modified by",
		modified_date: "Modified on",

		/* Favorites */
		new_favorite_label: "Add to Favorites",
		edit_favorite_label: "Rename Favorite",
		remove_favorite_label: "Remove from Favorites",
		missing_alias_message: "You must specify a name.",
		sync_favorite_enable_hover: "This item is enabled for sync.",
		sync_favorite_disable_hover: "This item is not being synced.",
		sync_favorite_sync_unavailable_hover: "Sync is not available for this object type.",
		sync_enable_label: "Sync this item",
		sync_enable_label_hover: "This item will be synced to your devices.",
		delete_favorite_confirmation_question: "Do you want to remove this item from your favorites?",
		alias_label: "Name:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "The selected item is already in your favorites.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "This item cannot be added to your list of favorites.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "You can store only ${0} favorites.",
		add_favorite_max_reached_response: "If you want to add this item to your list of favorites, you must delete an existing favorite before you can add this item.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "The selected documents cannot be converted to PDF.",
		download_as_pdf_max_content_error_explanation: "You can convert only ${0} MB of data to PDF. However, the selected documents exceed ${0} MB.",
		download_as_pdf_max_content_error_response: "Select fewer documents or select smaller documents and download the documents as PDF files again.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "The selected documents cannot be converted to a single PDF file.",
		download_as_pdf_mimetype_check_error_explanation: "To convert a document with multiple parts to a single PDF file, each part must have the same MIME type.",
		download_as_pdf_mimetype_check_error_response: "Select a different document to convert to PDF.",

		/* Activity Stream */
		show_label: "Show:",
		all_filter: "All",
		notifications_filter: "Notifications",
		workitems_filter: "Work Items",
		documentes_filter: "Documents",
		all_favorites_filter: "All Favorites",
		folders_filter: "Folders",
		searches_filter: "Searches",
		teamspaces_filter: "Teamspaces",

		/* Repository */
		all_search_templates: "All Searches",
		all_od_searches: "All Search Templates",
		recent_searches: "Recent Searches",
		opened_searches: "Opened Searches",

		all_worklists: "All Inboxes",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "A list of every worklist",

		/* Teamspace */
		all_workspaces: "All Teamspaces",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "A list of every teamspace",
		workspace_title: "Teamspace",
		workspace_icon: "Teamspace Icon",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Available",
		workspace_stat_offline: "Unavailable",
		workspace_stat_validate: "Requires validation",
		workspace_stat_pendingDelete: "Deletion pending",
		workspace_stat_deleteError: "Deletion failed",

		undefined_value: "Not defined",
		undefined_reference_value: "No reference is defined.",

		/* Filter teamspaces in content list */
		more_results_on_server: "More results might be available on the server.",
		search_all_data: "Search all data.",
		search_all_teamspaces: "Search all teamspaces.",
		teamspace_filter_results: "Showing ${0} results. ",
		displaying_filtered_results: "Showing filtered results. ",
		displaying_recent_results: "Showing only teamspaces that were modified in the last ${0} days. To find other teamspaces, filter the list of teamspaces by the name or description. ",
		clear_filter: "Clear filter.",

		/* FolderTreeModel */
		move_item_task: "Move item",
		copy_item_task: "Copy item",
		add_item_task: "Add item",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "The following folder could not be found: ${0}. It might have been deleted, or the folder cannot be opened from this view. Click the More link from the tree view to navigate to the folder. If you cannot view the folder, refresh the content list view.",
		more_paging_link: "more ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Cancel",

		/* ErrorDialog */
		error_dialog_title: "Error",
		error_dialog_icon_tooltip: "Error",
		error_dialog_stack_trace_title: "Stack Trace",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Confirmation",

		close_browser_msg: "Close the browser window.",

		/* MessageDialog */
		message_dialog_title: "Information",
		warning_dialog_title: "Warning",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Welcome to ${0}",
		server: "Repository:",
		username: "User name:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "A user name is required to log in to the repository.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "A password is required to log in to the repository",
		password: "Password:",
		login: "Log In",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Your session expired. Log in again.",
		login_repository_connection_expired_message: "Your connection to the ${0} repository expired. Log in again.",
		login_site_connection_expired_message: "Your connection to the site expired. Log in again.",
		login_new_server_message: "Enter a user name and password for ${0}.",
		login_error_more_information_message: "More information",

		disconnect_box_account_user: "Disconnect Box Account: ${0}",
		disconnect_box_account: "Disconnect Box Account",
		disconnect_box_accounts: "Disconnect Box Accounts",

		// OAuth2/Box Login
		login_ssl_connection_required: "An SSL connection is required for Box repository access.",
		login_oauth_popup_blocked: "The pop-up window was blocked. You might have to unblock pop-ups in your browser to log in.",
		login_oauth_click_here: "If you aren't redirected in 5 seconds, click here.",
		login_oauth_title: "Log In",
		login_oauth_grant_intro: "Grant authentication for ${0}.",
		login_pane_oauth_click_here: "Click here to log in.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Do you want to log out of the web client?",
		logout_confirmation_button: "Log Out",

		/* ChangeLocaleDialog */
		change_locale: "Change Language and Locale Settings",
		change_locale_use_browser_language: "Use Browser Language Setting (Default)",
		change_locale_use_browser_locale: "Use Browser Language Setting (Default)",
		change_locale_description: "If you delete your browser cookies, you must reset your language and locale settings.",
		change_locale_language_locale: "Application language:",
		change_locale_language_locale_hover: "This setting changes the language of the text in the web client but does not change the language of the documents in the application.<br><br>The default setting uses the language that is specified in your web browser configuration options.",
		change_locale_value_format_locale: "Application locale:",
		change_locale_value_format_locale_hover: "The locale determines the format of dates, times, and numbers in the web client.<br><br>The default setting uses the formats that are associated with the language that is specified in your web browser configuration options.",
		change_locale_for_office: "Bidirectional text settings:",
		change_locale_bidi_support_flag: "Enable bidirectional support",
		change_locale_bidi_support_flag_hover: "When bidirectional support is enabled, the user can set the direction of the text used in the input fields.  The text entered for items such as folders, for example, would be displayed in the same direction as it was entered.",
		change_locale_base_text_direction: "Base text direction for content:",
		change_locale_base_text_direction_hover: "Set the direction of the text being entered into the input fields.  This also controls the display direction of labels that were entered by the user such as folder names.",
		change_locale_calendar_type: "Calendar type:",
		change_locale_calendar_type_hover: "Select the type of calendar that will be used for the user session.",
		change_locale_base_text_direction_default: "Default",
		change_locale_base_text_direction_ltr: "Left-to-right",
		change_locale_base_text_direction_rtl: "Right-to-left",
		change_locale_base_text_direction_contextual: "Contextual",
		change_locale_calendar_type_gregorian: "Gregorian",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebrew",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Change Password",
		change_password_title: "Change Password",
		change_password_expired_title: "Password Expired",
		change_password_message: "Enter a new password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Your password expired. Enter a new password.",
		change_password_password_rules: "Password rules",
		change_password_old_password: "Old password:",
		change_password_new_password: "New password:",
		change_password_confirm_password: "Confirm password:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "You must enter your old password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "You must enter a new password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "You must confirm your new password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "The passwords must match.",

		/* GlobalToolbar */
		actions: "Actions",
		actions_label: "Actions:",
		open_actions_label: "Open Actions:",

		/* About Dialog */
		about_dialog_title: "About",
		about_product_name_label: "Product Name: ",
		about_product_version_label: "Version: ",
		about_product_build_label: "Build: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM and IBM logo are registered trademarks of International Business Machine Corporation in the United States, other countries, or both. This Program is licensed under the terms of the license agreement accompanying the Program. This license agreement may be either located in a Program directory folder or library identified as \"License\" or \"Non_IBM_License\", if applicable, or provided as a printed license agreement. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Do you want to delete the selected item?",
		delete_single_folder_confirmation_question: "Do you want to delete the ${0} folder?",
		delete_multiple_confirmation_question: "Do you want to delete the selected items?<br>${0} items are selected.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Delete",
		search_template_delete_confirmation_question: "Do you want to delete the ${0} search?",
		search_template_opened_delete_confirmation_question: "The ${0} search is open. If you delete the search, it will close.<br>Do you want to delete this search?",
		delete_multiple_opened_search_template_confirmation_question: "The following searches are open: ${0}.<br>If you delete the searches, they will close. Do you want to delete these searches?",
		delete_large_number_items_confirmation_question: "You selected ${0} items to be deleted.<br/>Deleting a large number of items might take a long time.<br/>Do you want to continue?",
		delete_confirmation_entrytemplate: "If you delete this entry template, it will have the following impact on the documents or folders that are associated with the entry template:<ul><li>The items will no longer be associated with the entry template, and users might see a warning when they update an item.</li><li>Any properties that were controlled by the entry template, such as the name or order of the properties, will no longer apply to the items that are associated with the entry template.</li></ul>Do you want to delete this entry template?",
		delete_confirmation_entrytempalte_with_multi_items: "Entry templates must be deleted individually. The entry templates have been removed from the list of items to delete. If you want to delete the entry templates, you must delete each entry template separately.",

		/* Create/Apply/Remove Hold */
		hold: "Hold",
		createHold: "New Hold",
		applyHold: "Apply Hold",
		removeHold: "Remove Hold",
		showHolds_title: "Show Holds",
		applyHoldSelectText: "Select the holds that you want to apply to the selected items.",
		availableHolds: "Available holds:",
		removeHoldSelectText: "Select the holds that you want to remove from the selected items.",
		appliedHolds: "Applied holds:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Create a new hold to apply to selected items.",
		holdName: "Hold name:",
		holdDescription: "Description:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "You must specify a name for the hold.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "The specified hold name already exists.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "A hold name cannot contain any of the following characters : ' % [ ] \" \\ ,",
		
		/*Session expire warning dialog*/
		session_expire_warning: "Your session will expire in ${0} minutes.",
		session_expire: "Session expiring",
		logoff: "Log out",
		extend_session: "Extend session",
		admin_custom_settings: "Additional settings:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning is a boolean value indicating if session expire warning is enabled, default value is true. sessionExpireWarningTime is an integer between 2 to 5 to spicify session expire warning time.",
		admin_custom_setting_dialog_title_new: "New Setting",
		admin_custom_setting_dialog_title_edit: "Edit Setting",
		admin_custom_setting_dialog_hover_help: "Add other parameters by specifying the parameter name and value. For example, you can specify “enableSessionExpireWarning” and “true” if you want to enable session expire warning.",
		admin_custom_setting_dialog_field_hover_help: "For more information about parameter names and values, see the IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "This value is required. The value cannot contain blanks and cannot be a duplicate.",
		admin_custom_setting_dialog_bool_valueInvalid: "This value is required. The value must be a boolean.",
		admin_custom_setting_dialog_int_valueInvalid: "This value is required. The value must be an integer.",
		
		/* Add Document Dialog */
		add_document_dialog_title: "Add Document",
		add_documents_dialog_title: "Add Documents",
		add_document_general_label: "General",
		add_document_properties_label: "Properties",
		add_document_properties_with_ellipsis_label: "Properties...",
		add_document_security_label: "Security",
		add_document_location_label: "Save in:",
		add_document_type_label: "What do you want to save?",
		add_document_localfile_label: "Local document",
		add_document_metadata_label: "Information about a document",
		add_document_external_label: "Link to an external document",
		add_document_web_link_label: "Web Link",
		add_document_saved_content_label: "Use saved file:",
		add_document_saved_content_choice: "Saved file",
		add_document_file_name_label: "File name:",
		add_document_entry_template_label: "Entry template:",
		add_document_delete_file_label: "Delete local file",
		add_document_delete_file_disabled_label: "Files that are not in the file tracking directory will not be deleted.",
		add_document_major_version_label: "Major version",
		add_document_major_version_hover: "Sets the document status to Released. The document is added to the repository as version 1.0. If the option is not selected, the document is not ready to be released and is added as minor version 0.1.",
		add_document_save_document_as_unfiled_label: "Do not save the document in a folder",
		add_document_save_document_as_unfiled_hover: "If you select this option, you can find this document only by searching. You cannot browse for it.",
		add_document_create_new_version_label: "Create New Version",
		add_document_replace_existing_version_label: "Replace Existing Version",
		add_document_start_workflow_label: "Launch workflow",
		add_document_auto_classify_label: "Classify the content automatically",
		add_document_add_label: "Add",
		add_document_cancel_label: "Cancel",
		add_document_document_type_label: "Class",
		add_document_context_info: "The values that you enter for the document properties can be used to find the document later.",
		add_documents_context_info: "The values that you enter for the documents can be used to find the documents later. If you need to enter a different property value for a document, you must add it separately or edit the properties of the document after you add it.",
		add_document_url_label: "URL:",
		add_document_template_description: "Template Description:",
		add_document_select_entry_template: "Enter or select an entry template",
		add_document_no_permission_to_associations: "You do not have permissions to use an entry template",
		add_document_no_entry_template_to_use: "No entry template can be used for selected files",
		add_document_no_entry_template_itemtype_permission: "You cannot add items to this folder. An entry template must be selected and you do not have access to any of the entry templates associated with this folder. Contact your system administrator and ask them to grant you access to the entry templates associated with this folder.",
		add_document_appgroup_name_label: "Application Group Name:",
		add_document_app_name_label: "Application Name:",
		create_folder_dialog_title: "New Folder",
		create_folder_context_info: "The values that you enter for the folder properties can be used to find the folder later.",
		create_folder_folder_name_label: "Folder name",
		create_folder_save_folder_as_unfiled_label: "Do not save the folder in another folder",
		create_folder_save_folder_as_unfiled_hover: "If you select this option, you can find this folder only by searching. You cannot browse for it.",
		add_item_create_in_folder: "Create in folder:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "A folder name cannot contain any of the following characters: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "A folder name cannot contain any of the following characters: \\ / and cannot equal . or ..",
		invalid_box_file_name_message: "A file name cannot contain any of the following characters: \\ / and cannot equal . or ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "A file name cannot contain any of the following characters: \\ / : * ? \" < > |",
		external_document_placeholder: "Enter the URL of the document",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "The color must be entered as a 3- or 6-digit hexadecimal number, for example, #000 or #000000.",
		add_document_unfiled: "${0} unfiled",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Add Document by Using Entry Template",
		add_document_using_template_context_info: "When you add a document by using an entry template, the values that you enter for the document are consistent.",
		add_documents_using_template_dialog_title: "Add Documents by Using Entry Template",
		add_documents_document_name_is_file_name_hint: "The file name will be used for this property",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "New Folder by Using Entry Template",
		create_folder_using_template_context_info: "When you create a folder by using an entry template, the values that you enter for the folder are consistent.",

		add_documents_batch_results_dialog_title: "Documents Not Added to the Repository",
		add_documents_batch_results_dialog_context_info: "The following documents were not added to the repository. Select a document and click Details for more information about why the document was not added to the repository.",
		add_documents_batch_results_dialog_filename_col_hdr: "File name",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Message",
		add_documents_batch_results_status_error: "Error",
		add_documents_batch_results_status_cancelled: "Cancelled",
		add_documents_batch_results_status_cancelled_msg: "The document was not added because the request was cancelled.",

		add_documents_batch_status_title: "Adding Documents",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Adding file ${0} of ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Errors: ${0}",
		add_documents_batch_status_completing_msg: "The process will stop after this document is added.",

		add_documents_status_uploading_msg: "Uploading file ${0} of ${1}...",
		add_documents_status_adding_msg: "Adding file ${0} of ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "The entry template was configured in another application and is configured to always declare documents as records. However, this setting is ignored because the web client does not support declaring documents as records.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "The entry template was configured in another application and is configured to let you decide whether to declare this document as a record. However, this setting is ignored because the web client does not support declaring documents as records.",
		no_selection: "&lt;Select&gt;",

		batch_results_dialog_details_label: "Details",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "The value is not valid. The value must be a Globally Unique Identifier (GUID), for example, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "The value is not valid. The value must be a floating point number, for example, 1.2 or 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "The value is not valid. The value must be in the format ${0}, for example, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "The value is not valid. The value must be a decimal value, for example, 1.2 or 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "The value is not valid. The value must be an integer, for example, 5 or 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "The value is not valid. The value can contain only alphabetic characters, for example, a-z and A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "The value is not valid. The value can contain only alphanumeric characters, for example, a-z, A-Z, and 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "The value is not valid. The value can contain only numeric characters, for example, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "The value is not valid. The value can contain only the following characters: a-z, A-Z, 0-9, [space], and `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "The value is not valid. The value must be a date with the following format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "The value is not valid. The value must be a time with the following format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "The value is not valid. Select a value from the drop-down menu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "The value is not valid.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "The value is not valid. The value must have the following format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "This value is required.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "The value is too long. The property supports a maximum length of ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "The value is too short. The property supports a minimum length of ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "The value is out of range. The value must be a floating-point number between ${0} and ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "The value is out of range. The value must be a decimal value between ${0} and ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "The value is out of range. The value must be an integer between ${0} and ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "The value must be a date between ${0} and ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "The value is out of range. The value must be a date between ${0} and ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "The value is out of range. The value must be a time between ${0} and ${1}.",
		property_and: "and",

		property_invalidValueOrRequired: "The following value is invalid or is required: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Properties",
		edit_properties_dialog_info: "You can view or edit the properties of this item. If you have the appropriate permissions, you can also modify the security of the item. However, you cannot change the system properties.",
		edit_properties_od_dialog_info: "You can view or edit the properties of this item. However, you cannot change the system properties.",
		system_properties_title: "System Properties",
		custom_properties_title: "Properties",
		
		/* Folder collaboration tab */
		box_permission_permission: "Permission",
		box_permission_permissions: "Permissions",
		box_permission_editor: "Editor",
		box_permission_owner: "Owner",
		box_permission_co_owner: "Co-owner",
		box_permission_viewer_uploader: "Viewer Uploader",
		box_permission_previewer_uploader: "Previewer Uploader",
		box_permission_viewer: "Viewer",
		box_permission_previewer: "Previewer",
		box_permission_uploader: "Uploader",
		box_permission_add: "Add",
		
		box_permission_upload: "Upload",
		box_permission_download: "Download",
		box_permission_preview: "Preview",
		box_permission_view: "View",
		box_permission_send_links: "Send View-Only Links",
		box_permission_create_subfolders: "Create Subfolders",
		box_permission_create_tasks: "Create Tasks",
		box_permission_add_comments: "Add Comments",
		
		box_collaboration_invite_placeholder: "Enter a name, email, or group to invite",
		box_collaboration_invite_placeholder_non_admin: "Enter an email to invite",
		box_collaboration_invalid_email: "Enter a valid email address",
		box_collaboration_user_already_present: "This user is already a collaborator on the folder",
		box_collaboration_user_name: "Name",
		box_collaboration_email_address: "Email Address",
		box_collaboration_date_added: "Date Added",
		box_collaboration_remove_collaboration: "Remove",
		box_collaboration_remove_collaboration_title: "Delete",
		box_collaboration_no_collaborators: "There are no collaborators",
		
		box_collaboration_change_owner_title: "Change Item Owner",
		box_collaboration_change_owner_prompt: "By making this collaborator the Folder Owner you become an Editor and no longer own the folder. Any collaborators who have been added directly to this folder will see it in their root folders. Any collaborators who have been added at the parent-folder level or above will no longer be collaborators. Do you want to continue?",
		
		box_collaboration_remove_self_title: "Remove Self",
		box_collaboration_remove_self_prompt: "Are you sure you want to remove yourself as a collaborator? You will no longer have access to this folder.",
		
		box_collaboration_user: "User",
		box_collaboration_group: "Group",
		
		box_managing_users_not_configured: "You cannot search for users and groups because the Box application is not configured correctly. To use this feature, contact your administrator and request that the Box application be configured for managing users and groups.",
		
		duplicate_value_error: "Each value in this property must be unique.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Any changes that you make in the following fields are applied to all of the selected items. If you need to enter a different property value for a particular item or edit the security of an item, you must edit the properties of the item individually.",
		multi_edit_properties_class_label: "Class:",
		multi_edit_properties_items_label: "Item names:",
		multi_edit_properties_properties_label: "Properties:",
		multi_edit_batch_status_title: "Updating Properties",
		multi_edit_batch_status_adding_msg: "Updating item ${0} of ${1}...",
		multi_edit_batch_status_verifying_msg: "Verifying item ${0} of ${1}...",
		multi_edit_batch_status_completing_msg: "The process will stop after this item is updated.",
		multi_edit_batch_status_validation_completing_msg: "The process will stop after this item is verified.",
		multi_edit_batch_results_status_error: "Error",
		multi_edit_batch_results_status_cancelled: "Cancelled",
		multi_edit_batch_results_status_cancelled_msg: "The item was not updated because the request was cancelled.",
		multi_edit_batch_results_dialog_title: "Items Not Updated",
		multi_edit_batch_results_dialog_context_info: "The following items were not updated. Select an item name and click Details for more information about why the item was not updated.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Item name",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Message",
		multi_edit_batch_status_errors_msg: "Errors: ${0}",
		multi_edit_batch_permission_error_text: "The changes to the properties cannot be saved.",
		multi_edit_invalid_value_error: "This value is dependent on another property value and is not valid for all of the items you selected.",
		multi_edit_batch_permission_error_explanation: "You cannot modify the properties of this item because you do not have sufficient privileges.",
		multi_edit_no_modifiable_properties: "The properties of the selected items cannot be modified. This can occur when an item includes only read-only properties or when only the name or title of the item is editable. When multiple items are selected, you cannot modify the name or title of the items.",
		multi_edit_mult_classes_dialog_info: "The selected items are on different repositories or belong to different classes. You can edit only items that are in the same class or on the same repository. Select the subset of items that you want to edit.",
		multi_edit_class_selector_class_heading: "Class",
		multi_edit_class_selector_entry_template_heading: "Entry Template",
		multi_edit_class_selector_repository_heading: "Repository",
		multi_edit_class_selector_items_heading: "Items",
		multi_edit_some_classes_not_displayed: "Some of the selected items are not included in this list because the items contain only read-only properties or because the items are on repositories that do not support editing properties.",
		multi_edit_properties_invalid_msg: "Some of the property values are not valid for all of the selected items.",
		multi_edit_properties_readonly_tooltip_text: "${0}: This property is read only and cannot be modified.",
		multi_edit_append_checkbox_label: "Append",
		multi_edit_append_checkbox_tooltip: "Select this option if you want to append new property values to the existing values rather than replacing them.",
		multi_edit_properties_invalid_childcomponent_msg: "Some values in the ${0} property of the ${1} child component are dependent on other properties and are no longer valid with the selections you made. Clear values in the ${1} child component or make property changes to the items you selected individually.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Export Properties",
		export_properties_dialog_info: "Select the properties that you want to export and specify the order that they will be displayed.",
		export_properties_dialog_export_button_label: "Export",
		export_properties_dialog_export_raw_values: "Export raw values",

		/* Properties */
		filter_clear_tooltip: "Clear the filter",
		properties_new_row: "New",
		properties_requiredClass_document_tooltip: "Select a document. The document must belong to the ${0} class.",
		properties_requiredClass_folder_tooltip: "Select a folder. The folder must belong to the ${0} class.",
		properties_dataType_tooltip: "Data type: ${0}",
		properties_maxLength_tooltip: "Maximum length: ",
		properties_minLength_tooltip: "Minimum length: ",
		properties_minValue_tooltip: "Minimum value: ",
		properties_maxValue_tooltip: "Maximum value: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Description: ",

		properties_type_boolean_tooltip: "Boolean",
		properties_type_date_tooltip: "Date",
		properties_type_time_tooltip: "Time",
		properties_type_timestamp_tooltip: "Time stamp",
		properties_type_decimal_tooltip: "Decimal value",
		properties_type_double_tooltip: "Floating-point number",
		properties_type_short_tooltip: "Integer",
		properties_type_integer_tooltip: "Integer",
		properties_type_long_tooltip: "Integer",
		properties_type_string_tooltip: "Text string",
		properties_type_string_alpha_tooltip: "Alphabetic string",
		properties_type_string_alphanum_tooltip: "Alphanumeric string",
		properties_type_string_ext_tooltip: "Extended alphanumeric string",
		properties_type_string_num_tooltip: "Numeric string",
		properties_type_binary_tooltip: "Binary",
		properties_type_object_tooltip: "Object",
		properties_type_reference_tooltip: "This property references another item in the repository.",
		properties_type_guid_tooltip: "Globally Unique Identifier",
		properties_type_group_tooltip: "Users and Groups",
		properties_type_user_tooltip: "Users",
		properties_type_childComponent_tooltip: "Child Component",

		properties_childComponent_minCardinalityOnly_tooltip: "This property must have at least ${0} values.",
		properties_childComponent_maxCardinalityOnly_tooltip: "This property can have no more than ${0} values.",
		properties_childComponent_minMaxCardinality_tooltip: "This property must have at least ${0} values and no more than ${1} values.",
		properties_childComponent_noCardinality_tooltip: "This property can have any number of values.",

		properties_type_guid_example_tooltip: ", for example {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Select a value from the list.",
		properties_single_select_choice_tooltip: "Select a value.",
		properties_multiple_select_typein_tooltip: "Enter one or more values.",
		properties_multiple_select_choice_tooltip: "Select one or more values.",
		properties_not_selectable_tooltip: "The category cannot be selected.",
		properties_none: "None",
		properties_none_tooltip: "Select <i>None</i> to clear the current value for this property.",
		properties_value_empty: "No value",
		properties_value_read_only: "Read only",
		properties_clear_label: "Clear",
		properties_clear_tooltip: "Clearing the value in this field clears the value in the repository after you click <b>Save</b>.",
		
		properties_box_custom_properties: "Custom Properties",
		properties_box_metadata_name_in_use: "This name is already used. Enter another name for the custom property.",

		properties_templates: "Templates",
		properties_add_template: "Add Template",
		properties_remove_template: "Remove",
		
		/* Checkin Document Dialog */
		checkin_dialog_title: "Check In",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Check In",
		checkin_cancel_label: "Cancel",
		checkin_file_name_label: "File name",
		checkin_document_status_title: "Check In Document",
		checkin_document_status_uploading_msg: "Uploading file...",
		checkin_document_status_checkingin_msg: "Checking in file...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Select Redaction Mode",
		viewer_redaction_new_document_confirmation_question: "Do you want to save the redaction as a new document or local file?",
		viewer_redaction_new_version_confirmation_question: "Do you want to save the redaction as a new version?",
		viewer_redaction_new_version_confirmation_question_never: "Do you want to save the redaction as a new content?",		
		viewer_redaction_new_document_button: "Yes",
		viewer_redaction_new_document_cancel_button: "No",
		viewer_redaction_add_document_confirmation_question: "Do you want to save the redaction as a new document, new version, or local file?",
		viewer_redaction_add_document_confirmation_question_version_never: "Do you want to save the redaction as a new document, new content, or local file?",
		viewer_redaction_add_document_button: "New Document",
		viewer_redaction_add_new_version_button: "New Version",
		viewer_redaction_add_new_version_button_version_never: "New Content",
		viewer_redaction_add_local_file_button: "Local File",
		
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Select redaction reason",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "The entry template that was used to add this document to the repository cannot be found. The document will be checked into the repository without using the entry template.",
		property_entry_template_not_retrieved_warning: "The entry template that was used to add this document to the repository cannot be found. The document properties will be displayed without using the entry template.",
		multi_edit_entry_template_not_found_name: "[Not Found]",
		multi_edit_entry_template_not_retrieved_warning: "The entry template that was used to add these items to the repository cannot be found. The item properties will be modified without using the entry template.",
		checkin_major_version_hover: "Increments the document version number by one and sets the document status to Released. If the option is not selected, the document is not ready to be released and it is checked in as a minor version.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "The document cannot be checked in because it is not checked out.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "The user ID or password is not valid for the server.",
		error_bad_userid_password_userResponse: "Ensure that you entered your user ID and password correctly.",
		error_bad_userid_password_adminResponse: "The following error was returned: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "A connection to the web client cannot be established by using the following URL: ${0}.",
		http_send_error_explanation: "This error can be caused by a configuration problem on the web application server or by a problem with the web client application.",
		http_send_error_userResponse: "Try to log in again. If the problem persists, report this error to your system administrator.",
		http_send_error_adminResponse: "The following HTTP error was returned: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "A connection to the web client cannot be established by using the following URL: ${0}.",
		http_error_explanation: "You might need to authenticate to a firewall, or the web application server might not be running or cannot be reached because of network problems.",
		http_error_userResponse: "If you need to authenticate to a firewall, authenticate and try to log in again. If the problem persists, report this error to your system administrator.",
		http_error_adminResponse: "The following HTTP error was returned: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "A connection to the web client cannot be established by using the following URL: ${0}.",
		http_response_bad_explanation: "This error can be caused by a configuration problem on the web application server or by a problem with the web client.",
		http_response_bad_userResponse: "Try to log in again. If the problem persists, report this error to your system administrator.",
		http_response_bad_adminResponse: "The following error was returned: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Untitled",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "The email applet cannot be started.",
		email_applet_init_failed_explanation: "This problem can occur when your email client is not properly installed and configured or when a supported version of the Java Runtime Environment (JRE) is not installed on your workstation.",
		email_applet_init_failed_userResponse: "To resolve the problem:<ul><li>Ensure that your email application is installed and is set up as the default email client on your workstation.</li><li>Check that a supported version of JRE is installed on your workstation by entering the following command in a command prompt: java -version</li></ul><p>A list of the supported versions of JRE is included in the <i>Hardware and software prerequisites for IBM Content Navigator</i> document on the IBM Software Support site.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "The email application could not be started because a required DLL file cannot be loaded.",
		email_applet_JNI_LOAD_FAILED_explanation: "The required WCEmailAppletJNI.dll file cannot be loaded because the temporary directory on your workstation might be full.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Ensure that the temporary directory has enough space. Then, try to send the document from the web client again. By default, the WCEmailAppletJNI.dll file loads in the temporary directory that is specified in your web browser settings.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "The email application could not be started because the email applet cannot create a temporary file.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "The temporary directory on your workstation might be full.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Ensure that the temporary directory has enough space. Then, try to send the document from the web client again.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "The email application cannot be started because the email applet cannot access the temporary directory.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "The temporary directory on your workstation might be full, or you might not have the appropriate access to write to the temporary directory.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Ensure that the temporary directory has enough space and ensure that you have write permissions to the temporary directory. Then, try to send the document from the web client again. If the problem persists, contact the system administrator.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "The email applet cannot delete a temporary file.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Another application might be using the file, or the file might not exist on your workstation.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "If the file is being used by another application, close the application. If the file is on your local file system, remove the following file from the temporary directory on your workstation: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "The link to the document cannot be created.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "The repository returned the URL in an invalid format.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Close your web browser including all tabs and sessions and log in again. Try to send the document from the web client again. If this problem persists, contact IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "The email applet cannot attach the file to an email.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "The repository returned the URL to the document in an invalid format.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Close your web browser including all tabs and sessions and log in again. Try to send the document from the web client again. If this problem persists, contact IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "The attachment cannot be created.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "The email applet cannot read the URL to the document.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Close your web browser including all tabs and sessions and log in again. Try to send the document from the web client again. If this problem persists, contact IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "The document could not be retrieved from the repository.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Your session might have timed out, the repository or web application server might not be running, or there might be a problem with the web client configuration.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Log in and try to send the document by email again. If the problem persists, ask your system administrator to check the repository error logs.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "If you configured the web client to convert AFP documents to another format, such as PDF, before sending the documents as attachments, ensure that the conversion is configured correctly.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "The document could not be converted to PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "The tool that is used to transform documents to PDF does not support the file type.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Close this page and try to email the document again without converting it to PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "The email was not created.",
		email_applet_MAPI_USER_ABORT_explanation: "Open your email application and ensure that it is working properly. Then, try to send the document from the web client again. If the problem persists, contact your system administrator to review your operating system event logs.",
		email_applet_MAPI_USER_ABORT_userResponse: "If you intended to close the email application, no further action is required. To send the email, log in to your email application and try to send the document from the web client again.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "The email cannot be created.",
		email_applet_MAPI_FAILURE_explanation: "Your email client might not be open or you might not be logged in.",
		email_applet_MAPI_FAILURE_userResponse: "Open your email application and ensure that it is working properly. Then, try to send the document from the web client again. If the problem persists, contact your system administrator to review your operating system event logs.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "The email cannot be created.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "You are not logged in to your email client. Your email client must be open and you must be logged in to send a message from the web client.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Open your email client and log in. Then, try to send the document from the web client again.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "The email cannot be created because the temporary file cannot be created on your workstation.",
		email_applet_MAPI_DISK_FULL_explanation: "The temporary directory on your workstation might be full.",
		email_applet_MAPI_DISK_FULL_userResponse: "Ensure that the temporary directory has enough space. Then, try to send the document from the web client again.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "The email cannot be created because there is not enough system memory.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "You might have too many applications open.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Close any unused applications and then, try to send the document from the web client again.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI access is denied.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Messaging Application Programming Interface (MAPI) access might not be enabled or supported for your email application. MAPI is the messaging protocol that is used to enable communication between the web client and your email application.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Contact your system administrator.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Ensure that the email application has MAPI access set up and is configured correctly. If the problem persists, contact IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "The attachment or the link to the item cannot be created.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "You might have too many web browser sessions open.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Close any unused web browser sessions. Then, try to send the document from the web client again. If the problem persists, contact your system administrator.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "The email cannot be sent.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "You might be trying to send too many attachments.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Select fewer files. Then, try to send the documents from the web client again.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "The email cannot be sent.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "You might be sending the email to too many recipients.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Send the email to fewer recipients.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "The attachment cannot be created.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Some required temporary files might have been deleted before the attachment could be created. This error can happen if the browser cache is cleared before the email is sent.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "The attachment cannot be created.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Some required temporary files might have been deleted before the attachment could be created. This error can happen if the browser cache is cleared before the email is sent.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "The attachment cannot be created by the email application.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "The email cannot be sent to the specified recipient.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "The recipient might not exist in the address book.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Check the name of the recipient and try to send the document again.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "The email cannot be sent to the specified recipient.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "The email address might be incorrectly formatted.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Ensure that you entered a valid email address and try to send the document again.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "The email might not be composed correctly.",
		email_applet_MAPI_NO_MESSAGES_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "The email might not be composed correctly.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "The email cannot be sent.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "The email might be too long.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Shorten the text of the email and try to send the email again.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "The email cannot be created.",
		email_applet_MAPI_INVALID_SESSION_explanation: "The email client might have failed when it tried to create the email.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Restart your email client and try to send the document from the web client again.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "The email might not be composed correctly.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "The email might not be composed correctly.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "The email might not be composed correctly.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "The email might not be composed correctly.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "The email might not be composed correctly.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "The email cannot be sent to the specified recipient.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "The email address might be incorrectly formatted.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Ensure that you entered a valid email address and send the document again.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "The email client cannot perform the requested action.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "The email application returned an unexpected error.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Try to send the document from the web client again.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "One of the properties is missing the required number of values.",
		error_property_cardinality_explanation: "Some properties have a minimum and maximum number of values.",
		error_property_cardinality_userResponse: "Use the hover help to determine which property requires a minimum number of values. Then, specify the minimum number of values and try again.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "A file name is required.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Specify a file name and try again.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "The ${0} plug-in contains errors.",
		plugin_error_explanation: "An error occurred when evaluating the JavaScript for the ${0} plug-in. If you continue to use the web client, you might encounter additional errors.",
		plugin_error_userResponse: "Contact your system administrator.",
		plugin_error_adminResponse: "There is a problem with the plug-in that needs to be resolved by the plug-in provider. It is recommended that you remove the plug-in from your web client configuration until the problem with the plug-in is resolved.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "The entry template cannot be opened.",
		open_old_format_entry_template_error_explanation: "The entry template uses an older format that is not supported in the web client.",
		open_old_format_entry_template_error_userResponse: "Ask your system administrator to update the entry template.",
		open_old_format_entry_template_error_adminResponse: "Use the Application Engine or Workplace XT Entry Template Designer to save an updated version of the entry template.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "The entry template cannot be opened.",
		open_custom_object_entry_template_error_explanation: "The web client does not support the following entry template type: Custom Object entry templates.",
		open_custom_object_entry_template_error_userResponse: "Open a different entry template.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "The eforms object cannot be opened.",
		open_forms_object_error_explanation: "The web client does not support the following eforms object types: form template, form data, document policy and workflow policy.",
		open_forms_object_error_userResponse: "Open a different document.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "You cannot use the ${0} entry template.",
		entry_template_folder_restricted_error_explanation: "The entry template adds items to the ${1} folder, and you do not have the appropriate permissions to add items to that folder.",
		entry_template_folder_restricted_error_userResponse: "Select a different entry template or ask your system administrator to give you the appropriate permissions to add items to the ${1} folder.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "The entry template cannot be opened.",
		open_records_entry_template_error_explanation: "The web client does not support the following entry template type: Declare as Record entry templates.",
		open_records_entry_template_error_userResponse: "Open a different entry template.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "The workflow cannot be opened.",
		open_workflow_error_explanation: "The web client does not support opening workflows.",
		open_workflow_error_userResponse: "Open a different document.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "The document cannot be opened.",
		viewer_unable_to_view_error_explanation: "No viewer is configured for documents of this type, or the configured viewer is not compatible with your system.",
		viewer_unable_to_view_error_userResponse: "Ask your system administrator to configure a viewer for documents of this type, and make sure the configured viewer works with the user's system.",
		viewer_unable_to_view_error_adminResponse: "Use the administration tool to configure a viewer for this type of document.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "The search cannot not be opened.",
		search_cannot_open_error_explanation: "The search feature is not configured for this desktop.",
		search_cannot_open_error_userResponse: "Ask your system administrator if you can have access to a desktop that includes the search feature or if this desktop can be updated to include the search feature.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "The document was not loaded.",
		viewer_document_load_failed_error_explanation: "The Daeja ViewONE Professional viewer could not open the document.",
		viewer_document_load_failed_error_userResponse: "For more information, see the error message that is displayed in the viewer.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "The document cannot be viewed.",
		viewer_session_expired_explanation: "The document content cannot be retrieved.",
		viewer_session_expired_userResponse: "Try logging in again. If the problem persists, the application server might not be running. Ask your system administrator to check the IBM Content Navigator error logs or restart the server.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "The document cannot be viewed.",
		ajaxViewer_getPage_failed_explanation: "The AJAX Viewer received an error response while retrieving page content. The application server might not be running.",
		ajaxViewer_getPage_failed_userResponse: "Close your web browser and log in again. If the problem persists, ask your system administrator to review the web application server log files or to restart the server.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "The Java Runtime Environment (JRE) was not found on your workstation.",
		viewer_java_plugin_not_found_explanation: "Either the plug-in was not found, or the correct version of the JRE is not installed.",
		viewer_java_plugin_not_found_userResponse: "Check whether the JRE is installed. For example, in a command prompt, enter the following command: Java -version. If the JRE is not installed or is installed at the wrong version level, install the appropriate version of the JRE. A list of the supported versions is included in the <i>Hardware and software prerequisites for IBM Content Navigator</i> document on the IBM Software Support site.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "The document cannot be displayed in your web browser.",
		viewer_pdf_plugin_not_found_explanation: "The plug-in that is used to display PDF documents in the web browser was not found.",
		viewer_pdf_plugin_not_found_userResponse: "The PDF file will be downloaded to your workstation instead of being displayed in the viewer window.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "The following item cannot be added to the repository: ${0}.",
		add_document_single_item_error_explanation: "This error can occur for one of the following reasons:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>You are trying to add a document that was moved or deleted.</li>" + "<li>You are trying to add a document that was renamed.</li>" + "<li>You are trying to add a document that is corrupted.</li>" + "<li>You are trying to add a document that is open in another application.</li>" + "<li>You are trying to add a folder to the repository.</li>" + "<li>You do not have the appropriate permissions on the operating system to access the document.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Take the appropriate action to resolve the problem:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>If the document was moved or renamed, find the document on your file system and try to add it again.</li>" + "<li>If the document is open in another application, close it and try to add it again.</li>" + "</ul>" + "<br>You cannot add folders to the repository.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "The following ${0} items cannot be added to the repository: ${1}",
		add_document_multiple_items_error_explanation: "A problem with one of the items prevents any of the items from being added to the repository. This error can occur for one of the following reasons:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>You are trying to add a document that was moved or deleted.</li>" + "<li>You are trying to add a document that was renamed.</li>" + "<li>You are trying to add a document that is corrupted.</li>" + "<li>You are trying to add a document that is open in another application.</li>" + "<li>You are trying to add a folder to the repository.</li>" + "<li>You do not have the appropriate permissions on the operating system to access the document.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Take the appropriate action to resolve the problem:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>If a document was moved or renamed, find the document on your file system and try to add the items again.</li>" + "<li>If a document is open in another application, close it and try to add the items again.</li>" + "<li>If a document was deleted or is corrupted deselect the item and try to add the remaining items again.</li>" + "</ul>" + "<br>You cannot add folders to the repository.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "You cannot drag and drop items from this location.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "The eforms object cannot be opened.",
		open_forms_work_object_error_explanation: "The web client does not support the following eforms object type: workflow policy.",
		open_forms_work_object_error_userResponse: "Open a different document.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "The document cannot be opened.",
		viewer_privilege_to_view_error_explanation: "You do not have the appropriate privileges to view the document.",
		viewer_privilege_to_view_error_userResponse: "Ask the owner of the document or your system administrator to give you the appropriate permissions to view the document.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "The items cannot be added to the repository.",
		add_document_too_many_items_error_explanation: "You can add up to ${0} items at a time. You are trying to add ${1} items.",
		add_document_too_many_items_error_userResponse: "Remove some of the items from your list and try to add the items again. You can also contact your system administrator to increase the maximum number of documents that you can add at one time to this desktop.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "A connection to the web client cannot be established by using the following URL: ${0}.",
		http_ltpa_expired_explanation: "The LTPA key that is associated with your browsing session expired.",
		http_ltpa_expired_userResponse: "Restart your web browser and try to log in again. If the problem persists, report the following error to your system administrator: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "The document cannot be added to the ${0} folder.",
		dnd_no_privilege_error_explanation: "The permissions on the folder prevent any documents from being added to the folder.",
		dnd_no_privilege_error_userResponse: "Add the document to a different folder.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "The items cannot be modified.",
		modify_document_too_many_items_error_explanation: "You can modify up to ${0} items at a time. You are trying to modify ${1} items.",
		modify_document_too_many_items_error_userResponse: "Select fewer items and try to modify the items again. You can also contact your system administrator to increase the maximum number of items that you can modify at one time from this desktop.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "You cannot use the ${0} class.",
		add_document_multiple_unique_values_error_explanation: "The ${0} class contains one or more properties that require a unique value for each document. When you add multiple documents, all of the documents use the same values.",
		add_document_multiple_unique_values_error_userResponse: "Select a different class or add the documents separately.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "You cannot use the ${0} entry template.",
		add_document_multiple_unique_values_entry_template_error_explanation: "The ${0} entry template requires you to add documents to the ${1} class. However, the ${1} class contains one or more properties that require a unique value for each document. When you add multiple documents, all of the documents use the same values.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Select a different entry template or add the documents separately.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "You cannot use the ${0} entry template.",
		entry_template_class_restricted_error_explanation: "The entry template adds items by using the ${1} class, and you do not have the appropriate permissions to add items by using that class.",
		entry_template_class_restricted_error_userResponse: "Select a different entry template or ask your system administrator to give you the appropriate permissions to add items by using the ${1} class.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "The work item cannot be reassigned to another user.",
		process_reassign_error_explanation: "This action is prohibited by the workflow.",
		process_reassign_error_userResponse: "You can open the work item and complete the current step in the work item.  For more information about this issue, ask the owner of the item to verify that the work item can be reassigned.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "The following custom action cannot be loaded: ${0}.",
		customaction_loadurl_error_explanation: "The custom action is not in an accessible location. The current URL of the custom action is ${1}.",
		customaction_loadurl_error_userResponse: "Ask your administrator to move the custom action to an accessible location.",
		customaction_loadurl_error_adminResponse: "The JSP file that defines the custom action must be provided as part of the eClient web application or the IBM Content Navigator web application.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "The following feature cannot be found: ${0}.",
		feature_invalid_explanation: "This problem can occur if the feature is not available on the specified desktop or the feature name is spelled incorrectly.",
		feature_invalid_userResponse: "When you click OK, you will be redirected to the default feature for this desktop. Contact your system administrator to report this problem.",
		feature_invalid_adminResponse: "If the feature should be available on the desktop, update the desktop configuration in the administration tool. If the feature should not be included in the desktop or is spelled incorrectly, work with the application developer who created the URL to this feature to update the URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "The ${0} search cannot be opened.",
		search_unsupportedTeamspaceSearch_error_explanation: "You must be in a teamspace to open this search.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Select a different search.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "The following file cannot be imported: ${0}.",
		wrong_import_file_type_error_explanation: "The file must be a properties file.",
		wrong_import_file_type_error_userResponse: "Select the properties file that you exported from the administration tool.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "The ${0} repository could not be found on the ${1} desktop.",
		browse_repository_not_found_error_explanation: "The repository must be present on the desktop and enabled for the browse feature when it is specfied in a URL parameter.",
		browse_repository_not_found_error_userResponse: "Ensure the repository id specified in the URL is correct, the repository has been added to the ${1} desktop, and the browse feature is enabled for the repository.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "The ${0} repository is not enabled for the browse feature in the ${1} desktop.",
		browse_repository_not_enabled_error_explanation: "The repository must be enabled for the browse feature when it is specfied in a URL parameter.",
		browse_repository_not_enabled_error_userResponse: "Enable the browse feature for the ${0} repository in the ${1} desktop.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "The search cannot be completed because the link includes invalid criteria.",
		invalid_xt_stored_search_criteria_error_explanation: "The following value is not valid: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Ask your system administrator to provide an updated link.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Edit the appropriate name-value pair in the URL. If you do not know which values are valid for the property, open the stored search in the FileNet Workplace XT search designer to determine a valid value.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "The cross-repository search cannot be opened.",
		unified_search_invalid_fixed_value_error_explanation: "The cross-repository search includes invalid criteria. This problem can occur when a criterion has fixed value that is not compatible with the other properties in a mapping. For example, this problem can occur if the fixed value is a string but the other properties in the mapping are integers.",
		unified_search_invalid_fixed_value_error_userResponse: "If you have the appropriate permissions to edit the search, remove the invalid criteria and save the search again. If you do not have the appropriate permissions to edit the search, ask the owner of the search or your system administrator to save the search again.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Your request cannot be completed.",
		launch_action_invalid_json_error_explanation: "The data that was passed to the web client is not valid.",
		launch_action_invalid_json_error_userResponse: "Tell your system administrator what application you were using when this problem occurred.",
		launch_action_invalid_json_error_adminResponse: "The client application did not send a valid JSON object to the web client. Contact IBM Software Support for additional assistance.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Your request cannot be completed.",
		launch_action_not_found_error_explanation: "The ${0} action is not configured for any menus on the ${1} desktop.",
		launch_action_not_found_error_userResponse: "Ask your system administrator to configure the ${1} desktop to use a menu that contains the ${0} action or to assign you to a desktop that includes the ${0} action.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Your request cannot be completed.",
		launch_action_repository_not_found_error_explanation: "The ${0} repository is not associated with the ${1} desktop.",
		launch_action_repository_not_found_error_userResponse: "Ask your system administrator to associate the ${0} repository with the ${1} desktop or to assign you to a desktop that includes the ${0} repository.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "The teamspace cannot not be opened.",
		teamspace_cannot_open_error_explanation: "The teamspace feature is not configured for this desktop.",
		teamspace_cannot_open_error_userResponse: "Ask your system administrator if you can have access to a desktop that includes the teamspace feature or if this desktop can be updated to include the teamspace feature.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "An error occurred when checking in the redacted content.",
		viewer_redaction_checkin_failed_explanation: "The viewer received an error response while checking in redacted content.",
		viewer_redaction_checkin_failed_userResponse: "Ask your system administrator to review the web application server log files.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "You cannot add documents to this repository.",
		add_document_odserver_odwek_version_od_error_explanation: "The current version of the IBM Content Manager OnDemand server or ODWEK is not at the minimum level that is required to support adding documents to a Content Manager OnDemand repository.",
		add_document_odserver_odwek_version_od_error_userResponse: "Ask your administrator to check which versions of Content Manager OnDemand Server and ODWEK are required to support adding documents to Content Manager OnDemand repositories.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "The items cannot be added to the repository.",
		add_document_too_many_items_od_error_explanation: "For IBM Content Manager OnDemand repositories, you can add only one item at a time.",
		add_document_too_many_items_od_error_userResponse: "Remove some of the items from your list and try to add the items again one item at a time.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "The item cannot be added to the repository.",
		add_document_filesize_empty_od_error_explanation: "You cannot add empty files to an IBM Content Manager OnDemand repository.",
		add_document_filesize_empty_od_error_userResponse: "Add content to the file and try to add the file again, or add a different item.",
		add_document_filesize_empty_od_error_number: 2105,
		
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "The cross-repository search cannot be opened.",
		unified_search_repository_not_found_error_explanation: "The cross-repository search includes one or more invalid repositories. This problem can occur when repositories that are included in the search are deleted from the application or removed from the current desktop.",
		unified_search_repository_not_found_error_userResponse: "If you have the appropriate permissions to edit the search, save the search again. When you save the search, the web client removes the invalid repositories from the search. If you do not have the appropriate permissions to edit the search, ask the owner of the search or your system administrator to save the search again.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "A new document cannot be created.",
		edit_document_using_office_online_error: "The document cannot be opened.",
		edit_document_using_office_online_error_explanation: "The Microsoft Office Online Server URL isn't configured.",
		edit_document_using_office_online_error_userResponse: "Before you can use  Office Online, your administrator must first enable Office Online Server on a repository and specify the Microsoft Office Online Server URL.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "The document cannot be opened in Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Ask your administrator to update the MS Office Online Server Integration.<br><br> If the user needs to access this document from Microsoft Office Online, go to the Edit Integration page for the repository and update the MS Office Online Server Integration to include the class in the list of classes to modify for office online support. ",		
		
		browser_not_support_this_viewer: "The configured viewer is not compatible with your browser.",
		browser_not_support_this_viewer_explanation: "The ${0} is not supported by the broswer.",
		browser_not_support_this_viewer_userResponse: "Use another viewer to open the document. A list of the supported browsers is included in the <i>Hardware and software prerequisites for IBM Content Navigator</i> document on the IBM Software Support site.",
		browser_not_support_this_viewer_number: 2653,
		
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Workflow Information",
		process_information_info_text: "The selected item is currently running on the following workflows.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Equals",
		operator_NOTEQUAL: "Not Equal",
		operator_LIKE: "Like",
		operator_STARTSWITH: "Starts With",
		operator_ENDSWITH: "Ends With",
		operator_NOTLIKE: "Not Like",
		operator_NULL: "Is Empty",
		operator_NOTNULL: "Is Not Empty",
		operator_LESS: "Less Than",
		operator_LESSOREQUAL: "Less Than or Equal",
		operator_GREATER: "Greater Than",
		operator_GREATEROREQUAL: "Greater Than or Equal",
		operator_BETWEEN: "Between",
		operator_NOTBETWEEN: "Not Between",
		operator_IN: "Include All",
		operator_INANY: "Include Any",
		operator_NOTIN: "Exclude All",
		operator_CONTAINS: "Contains",

		/* SearchForm widget */
		search_button_tooltip: "Search for documents that match your criteria.",
		reset_button_tooltip: "Resets the search to the default values set by your administrator.",
		clear_button_tooltip: "Removes all values you entered for the search.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Select Search",
		append_to_search: "Append to Search",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "New Search",
		new_unified_search: "New Cross-Repository Search",
		searh_name_contains: "Search name contains",
		keep_search_criteria_expanded: "Keep search criteria open",
		showing_results: "Showing results for:",
		open_in_new_window: "Open in New Window",
		open_in_new_tab: "Open in a New Tab",
		close_tab: "Close Tab",
		add_repository: "Add Repository",
		edit_repository: "Edit Repository",
		remove_repository: "Remove",
		search_scope: "Search Scope",
		search_class_template: "Class",
		object_type_version: "Object Type and Version",
		not_applicable: "Not applicable",
		unified_search_including_subfolders: " (Including subfolders)",
		unified_search_dialog_intro_text: "Select the repository and the search or the classes that you want to include in the search.",
		unified_search_class_or_template: "Class or Template",

		select_object_fieldset_legend: "How do you want to find items to attach:",
		select_object_create_new_search: "New search",
		select_object_search_template: "Existing search",

		search_criteria: "Search Criteria:",
		search_criteria_no_colon: "Search Criteria",
		search_in_multiple: "Search in (${0}):",
		search_location_including_subfolders: "${0} including subfolders",
		search_class: "Class:",
		search_class_multiple: "Class (${0}):",
		search_class_including_subclasses: "${0} including subclasses",
		search_class_all_pseudo: "All",
		search_results: "Search Results",
		select_operator: "Select an operator",
		ending_value: "The ending value for the ${0} property is:",
		search_options: "Search options:",
		search_version: "Version:",
		search_released_version: "Released version",
		search_current_version: "Current version",
		search_all_versions: "All versions",
		search_file_type_filter: "File type filter:",
		search_one_file_type: "1 file type",
		search_many_file_types: "${0} file types",
		search_action_filter: "Action filter:",
		search_action_filter_hover_help: "Narrow results to include only files that users have taken a specific action on.<br/>For example, you can search for only documents that you added on September 20, 2012.",
		search_action_filter_enabled: "Action filter is enabled",
		search_enable: "Enable",
		search_disable: "Disable",
		search_by: "by",
		search_added: "Added",
		search_modified: "Modified",
		search_checked_out: "Checked out",
		search_date_operator_on: "On",
		search_date_operator_not_on: "Not on",
		search_date_operator_before: "Before",
		search_date_operator_after: "After",
		search_version_hover_help_p8: "A released version is available to all users. A document that is a current version means one or more users are editing that document.",
		search_version_hover_help_cm: "A current version is the latest version of the item.",
		search_using: "Search for items that match:",
		search_property_and_text_criteria: "Both the property values and text criteria",
		search_property_or_text_criteria: "Either the property values or text criteria",
		search_property_and_text: "Both property and text criteria",
		search_property_or_text: "Either property or text criteria",
		search_property_options: "Property options:",
		search_property_option_match_all: "All of the properties",
		search_property_option_match_any: "Any of the properties",
		search_property_option_match_all_summary: "Match all",
		search_property_option_match_any_summary: "Match any",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "At least",
		search_content_size_filter: "Content size filter:",
		search_content_size_filter_any: "Any content size",

		/* Search work options */
		search_work_filter: "Work item filter:",
		search_work_filter_hover_help: "Narrow results to include only items that are in a workflow. For example, you can narrow the results to include only work items that are active.<br /><br />This option does not apply if you want to see all versions of the items that are returned by the search.",
		search_work_filter_enabled: "Work item filter is enabled",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Step:",
		search_work_filter_owner: "Owner:",
		search_work_filter_status_all: "All items",
		search_work_filter_status_active: "Active items",
		search_work_filter_status_suspended: "Suspended items",
		search_work_filter_process_all: "All workflows",
		search_work_filter_step_all: "All steps",
		search_work_filter_owner_all: "All users",
		search_work_filter_step_error: "The step name does not exist.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "The search cannot be completed without additional information. Enter a value for at least one condition.",
		search_insufficient_input_box: "The search cannot be completed without additional information. Enter text search criteria or select a metadata template.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "The search cannot be configured to run when opened without additional information. Enter a value for at least one condition.",
		search_member_required: "To share this search with specific users and groups, select at least one user or group to share this search with.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Do you want to close without saving your changes?",
		search_prompt_close_all_without_save: "Do you want to close all tabs without saving your changes?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "One of the following types of search criteria are not valid for this repository: ${0}. To run the search in the web client, the invalid criteria must be removed. If you save the search, the invalid criteria will be removed. If you do not want to change the search, close the search.",
		search_invalid_repository: "One or more repositories",
		search_invalid_class: "One or more classes",
		search_invalid_folder: "One or more folders",
		search_invalid_file_type: "One or more file types",
		search_invalid_property: "One or more properties",
		search_invalid_text_search: "Text search criteria",
		search_invalid_work: "Work item filter criteria",

		search_operator_pulldown_missing: "An operator is required. Select an operator from the drop-down menu. If you do not see any operators, ask your system administrator to check the <b>Search</b> tab in the administration tool to see if all of the operators are hidden. If this is a cross-repository search, the drop-down menu might not contain any operators if the properties that are mapped to each other do not have any common operators.",

		/*SearchBuilder */
		open_search_builder: "New Search",
		document_type: "Class",
		show_all_properties: "Show All Properties",
		text_search_label: "Find items with the following terms:",
		text_search_place_holder: "Use a combination of terms and operators: * ? or \"exact match phrases\"",
		text_search_place_holder_box: "Use a combination of terms and operators: AND, OR, NOT, and \"exact match phrases\"",
		text_search_place_holder_cascade_proximity: "Use a combination of terms and operators: * or ?",
		text_search_place_holder_common: "Use a combination of terms and \"exact match phrases\"",
		text_search_hover_help_p8: "Use the asterisk (*) or the question mark (?) as a wildcard character. Use double quotation marks (\"\") for exact matches.",
		text_search_hover_help_p8_only_crs: "Use the asterisk (*) or the question mark (?) as a wildcard character. Use double quotation marks (\"\") for exact matches. When you specify multiple terms, a cross-repository search returns items that contain any of the terms.",
		text_search_hover_help_cm: "Use the asterisk (*) or the question mark (?) as a wildcard character. Use double quotation marks (\"\") for exact matches. Use the minus sign (-) to precede terms to exclude, and the plus sign (+) to precede terms to include.",
		text_search_hover_help_box: "Use AND between terms to match all of the terms. Use OR between terms to match any of the terms. Use double quotation marks (\"\") for exact matches. Precede a term with NOT to exclude it.",
		text_search_hover_help_common: "Use double quotation marks (\"\") for exact matches. When you specify multiple terms, a cross-repository search returns items that contain all of the terms.",
		text_search_options: "Text options:",
		text_search_options_hover_help: "If you use any operators other than wildcard characters, select Advanced operators.",
		text_search_option_any: "Any of the terms",
		text_search_option_all: "All of the terms",
		text_search_option_proximity: "Within proximity of words:",
		text_search_option_none: "Advanced operators",
		text_search_option_authoring: "Text search is:",
		text_search_option_authoring_hover_help: "Choose an option that determines how you want to make the text search criteria available to users. If you don't want to include any text search criteria in the search, hide the option. Otherwise, you can allow the text search criteria to be edited or required by users or made read only to users.",
		text_search_option_hide: "Hide criteria",
		text_search_option_hide_hover_help: "Select this option if you do not want to include any text search criteria in the search or allow other users to specify text search criteria.",
		text_search_option_in: "In the HTML/XML tag ${0}",
		text_search_option_paragraph: "In the same paragraph",
		text_search_option_sentence: "In the same sentence",
		text_search_option_vql: "VQL query",
		text_search_option_none_hover_help: "Use - to precede terms to exclude.",
		text_search_option_cascade_proximity_hover_help: "Restricts the search results to terms that appear in a range of words that do not include exact phrases.",

		box_search_metadata: "Metadata:",
		box_search_select_template: "Select template",
		box_search_no_templates: "No templates are available",
		box_text_search_options_search_within: "Search scope:",
		box_text_search_options_search_within_everything: "Everything",
		box_text_search_options_search_within_file_content: "Document Content",
		box_text_search_options_search_within_tags: "Tags",
		box_text_search_options_limit_to: "Only search:",

		add_property: "Add Property",
		edit_template: "Edit Search",
		save_search: "Save Search",
		search_template_name: "Name:",
		search_template_desc: "Description:",
		auto_run: "Run the search when opened",
		show_in_tree: "Show the search in the folder structure",
		show_in_tree_hover_help: "If a search is saved in a folder, it is displayed only in the content list by default. If you select this option, the search is also displayed in the folder tree in the Browse view.  However, the search is shown in the folder tree only if you save the search in a folder.",
		share_search_with: "Share search with:",
		remove_member: "Remove ${0}",
		ok_button_label: "OK",
		save_template: "Save",
		save_template_title: "If you frequently need to search for specific items, save your search criteria.",
		remove_criterion: "Remove",
		apply_button_label: "Apply",
		empty_search_results_pane: "Run a search to see results.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Entire Repository",

		repository_already_selected: "The ${0} repository cannot be added to the cross-repository search because it is already included in the search. <br/> A repository can be included in the cross-repository search only one time. <br/>Select a different repository to include in the cross-repository search.",

		repository_limit_reached: "The ${0} repository cannot be added to the cross-repository search. You can add a maximum of ${1} repositories to the search.",

		nomore_criteria_toappend: "All of the mapped properties are already included in the search criteria. No properties were added to the search criteria.",
		nomore_criteria_toappend_regular: "All of the properties are already included in the search criteria. No properties were added to the search criteria.",

		/* OD Save Search dialog */
		reload_label: "Reload",
		od_save_search_help_text: "Type a name for the search or select an existing search to replace",
		public_access_label: "Allow others to use this search",
		od_delete_search_help_text: "Select one or more searches to delete",
		delete_save_searches: "Delete Saved Searches",

		/* Unified Search */
		unified_search_enable_text_search: "Include text search criteria",
		unified_search_text_search_enabled: "Text Search Included",
		unified_search_mapping: "Mapping",
		unified_search_new_mapping: "New Mapping",
		unified_search_mapping_name: "Mapping Name",
		unified_search_mapping_dialog_instructions: "Select the properties that you want to map. Some properties can be mapped to properties with a different data type. For example, you can map a string property to an integer property. When you map a property to another property, the properties are treated as a single property in the cross-repository search.",
		unified_search_filter_available_properties: "Filter available properties",
		unified_search_available_properties: "Available Properties",
		unified_search_mapped_properties: "Mapped Properties",
		unified_search_single_values: "single values",
		unified_search_multiple_values: "multiple values",
		unified_search_add_mapping: "Add Mapping",
		unified_search_warn_remove_repository: "The selected repository is used in the search criteria.\nIf you remove the repository, any mappings and search criteria that include the repository will be deleted.\n\nDo you want to remove the repository?",
		unified_search_warn_update_repository_mappings: "Changing the property selection for this repository affects the search criteria.\n\nThe search criteria includes one or more mappings that include one or more properties that you are removing. Any mappings that include properties that you are removing must be deleted. Any search criteria that includes these mappings must be deleted in order to run the search.\n\nDo you want to update the repository options and delete the mappings and search criteria?",
		unified_search_warn_update_repository_mappings_reset: "Including text search criteria for this repository affects the cross-repository search criteria.\n\nAny property search criteria that includes a mapping with properties for this repository must be cleared in order to run the search.\n\nDo you want to update the repository options and clear the search criteria?",
		unified_search_warn_update_repository_text_criteria: "Removing the text search criteria for this repository affects the cross-repository search criteria.\n\nThe text search criteria must be deleted from the cross-repository search criteria in order to run the search.\n\nDo you want to update the repository option and delete the text search criteria?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Removing the text search criteria and changing the property selection for this repository affects the cross-repository search criteria.\n\nThe text search criteria must be deleted from the cross-repository search criteria in order to run the search. Also, the property search criteria includes one or more mappings that include one or more properties that you are removing. Any mappings that include properties that you are removing must be deleted. Any property search criteria that includes these mappings must be deleted in order to run the search.\n\nDo you want to update the repository options and delete the text search criteria, mappings, and property search criteria?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Excluding text search criteria for this repository affects the cross-repository search criteria.\n\nAny property search criteria that includes a mapping with properties for this repository must be cleared in order to run the search. The text search criteria might be deleted from the cross-repository search criteria in order to run the search.\n\nDo you want to update the repository options and clear the search criteria?",
		unified_search_warn_remove_mapping: "Removing this mapping affects the search criteria.\n\nThe search criteria that uses the mapping must be deleted in order to run the search.\n\nDo you want to update the mapping and delete the search criteria?",
		unified_search_warn_update_mapping: "Changes to this mapping affect the search criteria.\n\nThe search criteria that uses the mapping must be cleared to ensure that the search does not include invalid operators or invalid values.\n\nDo you want to update the mapping and clear the search criteria?",
		unified_search_warn_update_mapping_not_searchable: "Changes to this mapping affect the search criteria.\n\nWhen the mapped properties are all display-only, you cannot use the mapping in the search criteria. The search criteria that uses the mapping must be deleted in order to run the search.\n\nDo you want to update the mapping and delete the search criteria?",
		unified_search_warn_update_mapping_box_searchable: "Changes to this mapping affect the search criteria.\n\nThe search criteria already includes this mapping more than once, and if you add the ${0} property from the ${1} repository, the search criteria includes the ${0} property too many times. The search criteria that uses the mapping must be deleted in order to run the search.\n\nDo you want to update the mapping and delete the search criteria?",
		unified_search_details: "Cross-repository search details",
		unified_search_fixed_value_property: "Fixed value property",
		unified_search_required_property: "Required property",
		unified_search_display_only_property: "Display-only property",
		unified_search_missing_required_properities: "The search cannot be saved or run.<br/>The following properties are required properties:${0}You must include the properties in a mapping and add the properties with values to the search criteria.",
		unified_search_property_repostory: "${0} (Repository: ${1})",
		unified_search_builder_no_mappings: "The search cannot be run.<br/>You must create a property mapping, and include it in the <b>Results Display</b> so that the search can display your results.",
		unified_search_builder_insufficient_criteria_to_run: "The search cannot be run.<br/>The search criteria does not include text search criteria or property values for following repositories:${0}For every repository that is included in the search, you must either enter text search criteria, or create a property mapping, include it in the property criteria, and specify a property value.",
		unified_search_builder_insufficient_criteria_to_save: "The search cannot be saved.<br/>The search does not include search criteria for the following repositories:${0}For every repository that is included in the search, you must do one of the following options:<ol><li>Create a property mapping, and include it in the property criteria.</li><li>Modify the repository to include text search criteria, and create a property mapping and include it in the <b>Results Display</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "The search cannot be run.<br/>For every repository that is included in the search, you must specify at least one property value. For example, you can specify values for the following properties: ${0}",
		unified_search_runtime_insufficient_criteria_text: "The search cannot be run.<br/>Text search criteria is required.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "The search cannot be run.<br/>For every repository that is included in the search, you must specify at least one property value, or enter text search criteria. For example, you can specify values for the following properties: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "The search cannot be run.<br/>Text search criteria is required. For every repository that is included in the search, you must specify at least one property value, or enter text search criteria. For example, you can specify values for the following properties: ${0}",
		unified_search_invalid_criteria: "The search contains invalid criteria that prevent the search from running.<br/>The invalid criteria have been removed. However, you must save the changes to the search before you can run the search. If you do not want to save the changes, close the search.<br/><br/>The following items were removed or modified:${0}",
		unified_search_invalid_fixed_values: "The search cannot be saved or run.<br/>The following search criteria have fixed values that are not valid:${0}Take one of the following actions to resolve the problem:<ul><li>Remove the search criteria that contain invalid values</li><li>Edit the mappings that include the IBM Content Manager OnDemand property with the fixed value to remove the property.</li><li>Edit the mappings that include the IBM Content Manager OnDemand property with the fixed value to make all of the properties compatible. For more information about which properties can be mapped, see the Learn more link in the introductory text at the top of the property mapping window.</li></ul>",
		unified_search_cannot_add_properties: "You cannot add properties to this search.<br/>All of your available mapped properties are already in the search criteria, and each property can be added to the search only once.",
		unified_search_mapping_not_viewable: "Box template properties can't be displayed in the search results. If you want to add this mapping as a column, you must map at least one property that isn't a Box template property. For example, you can select a property from another repository.",

		unified_search_returned_more: "At least one repository exceeded the maximum allowed results.",
		unified_search_partial_failure: "An error occurred on at least one repository.",
		unified_search_partial_failure_and_returned_more: "An error occurred on at least one repository, and at least one repository exceeded the maximum allowed results.",
		unified_search_see_analysis: "See the results analysis.",
		unified_search_analysis_intro_returned_more: "For each repository that exceeded the maximum allowed results, try to refine your search criteria to return fewer results. Or, you could run a single repository search to return more results than the maximum allowed for a cross-repository search.",
		unified_search_analysis_intro_partial_failure: "Review the error information that was returned by the repository or repositories. If appropriate, resolve the errors and run the cross-repository search again.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "For each repository where an error occurred, try to resolve the problem and run the search again.<br/><br/>For each repository that exceeded the maximum allowed results, try to refine your search criteria to return fewer results. Or, you could run a single repository search to return more results than the maximum allowed for a cross-repository search.",
		unified_search_results_found: "Results Found",
		unified_search_maximum_allowed: "Maximum Allowed",
		unified_search_maximum_exceeded: "Maximum exceeded",

		unified_search_mapping_rule_box: "This property cannot be added to the mapping.<p>The ${0} property from the ${1} repository is already in another mapping, and searchable properties from this repository can be included in only one mapping per search.<br/>Select a different property to add to the mapping.</p>",
		unified_search_mapping_rule_repository: "The property cannot be added to the mapping.<br/>The mapping already includes a property from the ${0} repository. A mapping can include only one property from a repository.<br/>Select a different repository from which to add a property, or create a new mapping for the selected property.",
		unified_search_mapping_rule_data_type: "The property cannot be added to the mapping.<br/>A ${0} property cannot be mapped to a ${1} property. Select a different property to map, or create a new mapping for the selected property.<br/>For more information about which properties can be mapped, see the Learn more link in the introductory text at the top of this window.",
		unified_search_mapping_rule_cardinality: "The property cannot be added to the mapping.<br/>All of the properties in the mapping must support either single values or multiple values. The selected property supports ${0}, and the properties in the mapping support ${1}.<br/>Select a different property to add to the mapping, or create a new mapping for the selected property.",
		unified_search_mapping_rule_fixed_value: "The property cannot be added to the mapping.<br/>The mapping already includes a property with a fixed value. A mapping can include only one property with a fixed value.<br/>Select a different property to add to the mapping, or create a new mapping for the selected property.",
		unified_search_mapping_rule_child_component: "The property cannot be added to the mapping.<br/>A property with a child component cannot be mapped to other properties. If you want to be able to search on this property, create a new mapping for the selected property.",
		unified_search_mapping_rule_operator_intersection: "The property cannot be added to the mapping.<br/>All of the properties in the mapping must have one or more operators in common. However, the ${0} property does not have any operators in common with the other properties in the mapping.<br/>If appropriate, select a different property. If you must include the selected property, work with your system administrator to edit the operators that are associated with the property.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Advanced Settings",
		advanced_search_options_intro: "Set advanced criterion options.",
		advanced_search_options_editable: "Editable",
		advanced_search_options_readonly: "Read only",
		advanced_search_options_required: "Required",
		advanced_search_options_hidden: "Hidden",
		advanced_search_options_property_editable:"Property is:",
		advanced_search_options_operators:"Operators:",
		advanced_search_options_use_all:"Use all",
		advanced_search_options_use_selected:"Use selected",
		advanced_search_options_operators_filtered: "Operators filtered",
		
		// Data types in lowercase
		data_type_boolean: "boolean",
		data_type_date: "date",
		data_type_time: "time",
		data_type_timestamp: "time stamp",
		data_type_decimal: "decimal value",
		data_type_double: "floating-point number",
		data_type_short: "integer",
		data_type_integer: "integer",
		data_type_long: "integer",
		data_type_string: "text string",
		data_type_string_alpha: "alphabetic string",
		data_type_string_alphanum: "alphanumeric string",
		data_type_string_ext: "extended alphanumeric string",
		data_type_string_num: "numeric string",
		data_type_binary: "binary",
		data_type_object: "object",
		data_type_guid: "globally unique identifier",
		data_type_user: "users",
		data_type_child_component: "child component",

		/* Print Dialog */
		print_title: "Print",
		print_message: "Printing: ${0}",
		print_print_button: "Print",
		print_clean_margins_button: "Set All to 0",
		print_type: "Printer Type:",
		print_printer_server_options: "Server Print Options",
		print_printer_properties: "Printer Properties",
		print_printer_fax_properties: "Fax Properties",
		print_printer_name: "Printer Name:",
		print_fax_recipient: "Recipient",
		print_fax_sender: "Sender",
		print_copies: "Copies:",
		print_local_orientation: "Orientation",
		print_local_orientation_landscape: "Landscape",
		print_local_orientation_portrait: "Portrait",
		print_local_margins: "Margins",
		print_local_margins_top: "Top",
		print_local_margins_bottom: "Bottom",
		print_local_margins_left: "Left",
		print_local_margins_right: "Right",
		print_printer_server: "Server",
		print_printer_local: "Local",
		print_property_class: "Class:",
		print_property_routing: "Routing:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Node:",
		print_property_writer: "Writer:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Dest:",
		print_property_forms: "Forms:",
		print_property_faxnotes: "Notes:",
		print_property_faxcompany: "Company:",
		print_property_faxnumber: "Fax Number:",
		print_property_faxname: "Name:",
		print_property_faxsendertelnumber: "Phone Number:",
		print_property_faxcoverpage: "Cover Page:",
		print_property_faxsubject: "Subject:",
		print_saveoptions: "Save Print Options",
		print_property_bannerpage: "Use banner page",
		print_print_with_info_fields: "Print with Info Fields",
		print_field_from: "From",
		print_field_to: "To",
		print_invalid_value_class: "Valid characters are A-Z or 0-9",
		print_invalid_value_pagedef: "Valid characters are alphabetic or numeric characters, or the characters @, #, or $",
		print_invalid_value_writer: "Valid characters are alphabetic or numeric characters, or the characters @, #, or $",
		print_invalid_value_formdef: "Valid characters are alphabetic or numeric characters, or the characters @, #, or $",
		print_invalid_value_forms: "Valid characters are alphabetic or numeric characters, or the characters @, #, or $",
		print_invalid_value_margin: "Valid numbers are between ${0} and ${1}",
		print_status_message: "${0} documents were sent to the ${1} printer.",

		print_applet_init_error: "The print applet cannot be started.",
		print_applet_init_error_explanation: "This problem can occur for the following reasons: <br/><br/><ul><li>The Java Runtime Environment (JRE) is not installed on your workstation.</li><li>The Java plug-in is not enabled in your web browser.</li><li>The JRE version on your workstation is not compatible with the IBM Content Navigator version.</li><li>The browser timed out waiting for the print applet to start.</li></ul>",
		print_applet_init_error_userResponse: "You can complete the following steps to resolve the issue with the JRE:<br/><br/><ol><li>Ensure that the JRE is installed on your workstation.</li><li>Ensure that the Java plug-in is enabled in your web browser.</li><li>Ensure that the JRE version on your workstation is compatible with IBM Content Navigator and try again. A list of the supported versions is included in the <i>Hardware and software prerequisites for IBM Content Navigator</i> document on the IBM Software Support site.</li></ol>",
		print_applet_init_error_number: 2085,
		
		/* Daeja print dialog */
		daeja_print_cover_page: "Cover Page",
		daeja_print_OD_cover_page: "Cover Page (only applies to local printers)",		  
		daeja_print_selected_documents_title: "Selected Documents",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Match all of the search criteria",
		match_any_criteria: "Match any of the search criteria",
		include_subfolders_summary: "${0} (include subfolders)",
		browse_button: "Browse&hellip;",
		search_for: "Search for:",
		object_type_documents: "Documents",
		object_type_folders: "Folders",
		object_type_documents_folders: "Documents and Folders",
		object_type_web_links: "Web Links",
		object_type_documents_folders_web_links: "Documents, Folders, and Web Links",

		/* SelectSearchFolderDialog */
		search_in: "Search in:",
		include_subfolders: "Include subfolders",

		/* ContentList widget */

		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		folder_char: "&loz;",
		document_char: "&Xi;",

		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		checked_out_icon_char: "&theta;",
		hold_icon_char: "&otimes;",
		has_notes_icon_char: "&thetasym;",
		suspended_icon_char: "&Phi;",
		has_bookmark_icon_char: "&Dagger;",
		major_minor_version_icon_char: "&plusmn;",
		process_info_overdue_char: "!",
		process_info_reminder_sent_char: "&rarr;",
		record_icon_char: "&Omega;",
		offlineTemplate_icon_char: "&Omega;",
		defaultTemplate_icon_char: "&Omega;",
		read_only_icon_char: "&oslash;",
		docRecommendation_icon_char: "&hearts;",
		docRecommendationUnlike_icon_char: "\u2661",
		docDownload_icon_char: "&darr;",
		docTag_icon_char: "\u0023",
		is_shared_char: "&sigmaf;",
		is_share_pending_char: "&sigma;",
		warning_char: "w",

		// used for state icon title in Contentlist
		locked_item_icon_title: "Locked by ${0}",
		checked_out_icon_title: "Checked out by ${0}",
		major_minor_version_icon_title: "Major version with minor versions",
		suspended_icon_title: "The workflow is suspended",
		on_hold_icon_title: "On hold",
		has_notes_icon_title: "Has notes",
		record_icon_title: "Declared as a record",
		compound_document_icon_title: "Compound document",
		validateTemplate_icon_title: "Teamspace template needs validation",
		offlineTemplate_icon_title: "Teamspace template is offline",
		offlineTeamspace_icon_title: "Teamspace is offline",
		pending_delete_icon_title: "Teamspace is pending deletion",
		delete_error_icon_title: "The teamspace could not be deleted",
		defaultTemplate_icon_title: "Default teamspace template",
		teamspace_icon_title: "Teamspace",
		teamspace_template_icon_title: "Teamspace template",
		has_bookmark_icon_title: "Has a bookmark",
		read_only_icon_title: "Read only",
		no_results_were_found: "No results were found.",
		folder_is_empty: "The folder is empty.",
		no_checked_out_items: "You do not have any items checked out.",
		inbasket_is_empty: "The in-basket is empty.",
		worklist_is_empty: "The worklist is empty.",
		tracker_milestone_completed: "Completed",
		stepprocessor_attachments_title: "Contents",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Lock items",
		unlock_items: "Unlock items",
		checkin_item: "Check in item",

		/* Help */
		learn_more: "Learn more",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Open Teamspace",
		repository_tab_createWorkspace: "New Teamspace",
		repository_tab_createWorkspaceTemplate: "New Teamspace Template",
		repository_tab_DefaultTemplate: "Default",

		/* Cross repository document copy */
		documentCopyTaskDescription: "This task copies documents.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "You do not have edit privileges for the selected teamspace template.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Are you sure that you want to delete the ${0} teamspace? <br><br>Only the document that are filed in other folders in the repository remain on the repository. Any documents that are filed only in the teamspace will be deleted.",
		teamspaceDecommissionLabel: "Delete:",
		teamspaceDecommissionDescription: "Deleting the teamspace will remove this teamspace from the server: Indicate how the teamspace artifacts are handled.",
		teamspaceDecommissionOptions: "Delete teamspace options",
		teamspaceDecommissionDeleteAll: "Delete all teamspace artifacts",
		teamspaceDecommissionReFileAll: "Refile all teamspace artificts",
		teamspaceDecommissionReFileDestination: "Move to:",
		teamspaceDecommissionReFileIn: "Refile In",
		teamspaceDecommissionTaskName: "Teamspace deletion task",
		teamspaceDecommissionTaskDescription: "This task deletes a teamspace from the repository.",
		teamspaceDecommissionDeletionStarted: "The teamspace has been scheduled for deletion",
		teamspaceDecommissionDeletionConnectionFailed: "The task to delete a teamspace could not run because it could not connect to the repository. Ensure that the credentials of the repository administrator are correct.",

		teamspace_edit_properties_notsupported: "You can edit the properties of teamspaces only from the Teamspaces view.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "The teamspace is offline and can only be opened by owners of the teamspace",

		/* Teamspace Builder widget */
		workspace_validation_document: "Document:",
		workspace_validation_folder: "Folder:",
		workspace_validation_ets: "The following entry templates are not available in this repository and were removed from the list of selected entry templates:",
		workspace_validation_classes: "The following classes are not available in this repository and were removed from the list of selected classes:",
		workspace_validation_searches: "The following searches are not available in this repository and were removed from the list of selected searches:",
		workspace_validation_docs_folders: "The following documents and folders are not available in this repository and were removed from the list of included items:",
		workspace_change_template_confirmation_question: "If you select a different template, all of your changes will be lost. Do you want to continue?\n",
		workspace_delete_item_confirmation_question: "Do you want to remove the ${0} item?\n",
		workspace_delete_role_confirmation_question: "Do you want to remove the ${0} role?\n",
		workspace_delete_confirmation_question: "If you delete a teamspace, only the teamspace container is deleted. The folders and documents in the teamspace remain on the repository, and you can find them by doing a search. To delete the contents of the teamspace, delete the items in the teamspace first and then delete the teamspace.<br><br>Do you want to delete the ${0} teamspace?",
		workspacebuilder_instance_template_name_header: "Teamspace Template Name",
		workspacebuilder_instance_template_description_header: "Description",

		workspacebuilder_template_tooltip_name: "The template name cannot contain any of the following characters: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "The teamspace name cannot contain any of the following characters: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Provide a description that will enable users to make the correct selection from the list of templates. For example, you might include information about the intended users or use of the template.",
		workspacebuilder_instance_tooltip_description: "Provide a description that will enable users to distinguish between this teamspace and the other teamspaces.",

		workspacebuilder_template_edit_properties_pane: "Edit Teamspace Template",
		workspacebuilder_instance_properties_pane: "Define Teamspace",
		workspacebuilder_template_properties_pane: "Define Teamspace Template",

		workspacebuilder_instance_security_pane: "Set Teamspace Security",
		workspacebuilder_template_security_pane: "Set Template Security",

		workspacebuilder_layout_pane: "Select Layout",
		workspacebuilder_search_templates_pane: "Select Searches",
		workspacebuilder_document_folders_pane: "Include Folders and Documents",
		workspacebuilder_doctypes_entryTemplates_pane: "Select Classes or Entry Templates",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Select Classes",
		workspacebuilder_security: "Teamspace Security",

		workspacebuilder_roles_pane: "Select Roles",
		workspacebuilder_security: "Security",

		workspacebuilder_properties_templates: "Available templates:",
		workspacebuilder_available_templates: "Available searches:",
		workspacebuilder_selected_templates: "Selected searches:",
		workspacebuilder_templates_name: "Search Name",

		workspacebuilder_available_entryTemplates: "Available entry templates:",
		workspacebuilder_selected_entryTemplates: "Selected entry templates:",

		workspacebuilder_item_classes: "Available classes:",
		workspacebuilder_item_classes_selected: "Selected classes:",
		workspacebuilder_properties_select_template: "Select a template to use for this teamspace.",
		workspacebuilder_template_properties: "Define Teamspace Template",
		workspacebuilder_instance_properties: "Define Teamspace",
		workspacebuilder_template_introText: "Specify the common components that you want to include in every teamspace that is created from this template by using the selections in the navigation. When you are done, click <b>Finish</b> to make the template available to other users, who can use it to create new teamspaces.",
		workspacebuilder_instance_introText: "Teams use teamspaces to share and work with specific sets of documents. Provide a meaningful name and description for this teamspace to enable users to distinguish this teamspace from other teamspaces. You can customize the teamspace by including additional searches, classes or entry templates, documents, and folders.",

		workspacebuilder_template_search_template_introText: "Select the default searches that you want to include in every teamspace that is created from this template. If no searches are selected, teamspace user see all of the searches to which they have access. With the appropriate permissions, users can share and add searches in the teamspace.",
		workspacebuilder_instance_search_template_introText: "Include searches that will enable teamspace users to complete tasks more efficiently. If no searches are included, teamspace users will see all of the searches to which they have permission. Users can also add and share searches in the teamspace with the appropriate permissions.",

		workspacebuilder_template_roles_introText: "Teamspace users are assigned to roles. Roles specify the tasks that users are allowed to perform. Click the icons next to each role to see allowed tasks. Choose the roles that are appropriate for the teamspace.",
		workspacebuilder_template_roles_modify_introText: "You can modify the permissions that are associated with each role in this teamspace. You should notify teamspace members when their permissions change.",

		workspacebuilder_template_roles_header_name: "Role Name",

		workspacebuilder_template_folders_introText: "Select the default documents and folders to include in every teamspace that is created from this template. You can add documents as either links or copies. Use links to point to documents that you do not want multiple copies of, such as policies or procedures. Create copies of documents that users will modify, such as templates and forms.",
		workspacebuilder_instance_folders_introText: "Select the default documents and folders to include in the teamspace. You can add documents as either links or copies. Use links to point to documents that you do not want multiple copies of, such as policies or procedures. Create copies of documents that users will modify, such as templates and forms.",

		workspacebuilder_template_roles_introText: "Specify the roles that will be included in every teamspace that is created from this template. You can also create new roles, which you can use when you create other teamspace templates.",
		workspacebuilder_instance_users_introText: "In a teamspace, each user is assigned to one or more roles that specify the tasks that the user can complete. Add users to the teamspace and assign roles to the users.",

		workspacebuilder_instance_navigation_pane_title: "Teamspace Builder",
		workspacebuilder_template_navigation_pane_title: "Teamspace Template Builder",

		workspacebuilder_roles_roles_nopermissions: "No permissions are selected for the {0} role.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Selected roles:",
		workspacebuilder_roles_available_roles: "Available roles:",
		workspacebuilder_roles_privilege_header: "Permission",
		workspacebuilder_roles_select_role: "Select Role",
		workspacebuilder_roles_select_permission: "Select Permission",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "A role named {0} already exists. You must specify a unique name for the role. ",
		workspacebuilder_roles_edit_dialog_role_name: "Role name:",
		workspacebuilder_roles_edit_dialog_role_description: "Role description:",
		workspacebuilder_roles_edit_dialog_title_new: "New Role",
		workspacebuilder_roles_edit_dialog_title_edit: "Edit Role",

		workspacebuilder_roles_privileges_header: "Permissions for the {0} role:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Document permissions:",
		workspacebuilder_roles_priv_group_folder: "Folder permissions:",
		workspacebuilder_roles_priv_group_teamspace: "Teamspace permissions:",
		workspacebuilder_roles_priv_group_item: "Document and Folder permissions:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Manage permissions",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Users with this permission can manage access to documents and folders in the teamspace. This permission includes allowing other users to delete, edit properties, create subfolders, and so on.",

		workspacebuilder_roles_priv_deleteItems: "Delete",
		workspacebuilder_roles_plbl_deleteItems: "Users with this permission can delete documents and folders in the teamspace.",

		workspacebuilder_roles_priv_createItems: "Create",
		workspacebuilder_roles_plbl_createItems: "Users with this permission can create documents and folders in the teamspace.",

		workspacebuilder_roles_priv_viewItemProperties: "View properties",
		workspacebuilder_roles_plbl_viewItemProperties: "Users with this permission can view the properties of the documents and folders in the teamspace, which includes the system properties.",

		workspacebuilder_roles_priv_modifyItemProperties: "Edit properties",
		workspacebuilder_roles_plbl_modifyItemProperties: "Users with this permission can edit the properties of documents and folders in the teamspace.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Manage folder permissions",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Users with this permission can manage access to folders in the teamspace. This permission includes allowing other users to delete folders, edit folder properties, create subfolders, and so on.",

		workspacebuilder_roles_priv_deleteFolders: "Delete folders",
		workspacebuilder_roles_plbl_deleteFolders: "Users with this permission can delete folders in the teamspace.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Edit folder properties",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Users with this permission can edit the properties of folders in the teamspace.",

		workspacebuilder_roles_priv_createSubfolders: "Create subfolders",
		workspacebuilder_roles_plbl_createSubfolders: "Users with this permission can create folders in the teamspace.",

		workspacebuilder_roles_priv_fileInFolders: "Add to folders",
		workspacebuilder_roles_plbl_fileInFolders: "Users with this permission can add a link from folders in the teamspace to documents.",

		workspacebuilder_roles_priv_viewFolderProperties: "View folder properties",
		workspacebuilder_roles_plbl_viewFolderProperties: "Users with this permission can view the properties of the folders in the teamspace, which includes the system properties.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Manage document permissions",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Users with this permission can manage access to documents in the teamspace. This permission includes allowing other users to delete documents, edit document properties, and so on.",

		workspacebuilder_roles_priv_deleteDocuments: "Delete documents",
		workspacebuilder_roles_plbl_deleteDocuments: "Users with this permission can delete documents in the teamspace.",

		workspacebuilder_roles_priv_promoteVersions: "Promote versions",
		workspacebuilder_roles_plbl_promoteVersions: "Users with this permission can assign a new version number to documents in the teamspace.",

		workspacebuilder_roles_priv_modifyContent: "Edit documents",
		workspacebuilder_roles_plbl_modifyContent: "Users with this permission can edit the content of documents in the teamspace.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Edit document properties",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Users with this permission can edit the properties of documents in the teamspace.",

		workspacebuilder_roles_priv_viewContent: "View documents",
		workspacebuilder_roles_plbl_viewContent: "Users with this permission can view documents in the teamspace.",

		workspacebuilder_roles_priv_viewDocumentProperties: "View document properties",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Users with this permission can view the properties of the documents in the teamspace, including the system properties.",

		workspacebuilder_roles_priv_addNewSearches: "Add searches",
		workspacebuilder_roles_plbl_addNewSearches: "Users with this permission can add searches to the teamspace. By default, the search is not available to other users.",

		workspacebuilder_roles_priv_createNewSearches: "Create searches",
		workspacebuilder_roles_plbl_createNewSearches: "Users with this permission can create new searches but cannot save the searches. If users do not have this permission, they cannot add documents that are already on the repository to the teamspace.",

		workspacebuilder_roles_priv_shareSearches: "Share searches",
		workspacebuilder_roles_plbl_shareSearches: "Users with this permission can share searches that they create with other users of the teamspace.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Manage classes or entry templates",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Users with this permission can add and remove classes or entry templates from the teamspace.",

		workspacebuilder_roles_priv_addRemoveClasses: "Manage classes",
		workspacebuilder_roles_plbl_addRemoveClasses: "Users with this permission can add and remove classes from the teamspace.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Manage teamspace users",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Users with this permission can add and remove users and groups from the teamspace. In addition, they can manage which roles users are assigned to.",

		workspacebuilder_roles_priv_modifyRoles: "Modify roles",
		workspacebuilder_roles_plbl_modifyRoles: "Owners with this permission can modify role permissions for the teamspace. This permission is only available for owners.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Select Users",
		workspacebuilder_users_add_users_and_groups_button: "Add Users and Groups...",
		workspacebuilder_users_users_or_group_header: "User and Group",
		workspacebuilder_users_roles_header: "Roles",

		workspacebuilder_users_role_header: "Role",
		workspacebuilder_users_role_no_permissions: "This role has no permissions",
		workspacebuilder_users_available_roles_label: "Available roles:",
		workspacebuilder_users_selected_users_and_groups_label: "Selected users and groups:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "The teamspace cannot be saved. You must specify at least one owner for this teamspace.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "The teamspace cannot be saved. All users must be assigned a role.",
		// end of select users

		workspacebuilder_search_templates: "Select Searches",
		workspacebuilder_search_add: "Add Search",
		workspacebuilder_properties_workspaceName: "Teamspace name:",
		workspacebuilder_properties_templateName: "Template name:",
		workspacebuilder_properties_workspaceDescription: "Teamspace description:",
		workspacebuilder_properties_templateDescription: "Template description:",
		workspacebuilder_properties_workspaceTemplate: "Selected template:",
		workspacebuilder_properties_security: "Share template with:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Move from Teamspace:",
		moveTeamspaceDocuments_security: "Share document with:",
		moveTeamspaceDocuments_security_change: "Specify custom security for the selected items",
		moveTeamspaceDocuments_item_type_level: "You cannot select Override the security of the selected items because the class of the selected item is configured to use only class-level security",
		moveTeamspaceDocuments_security_inherit: "Inherit security from destination folder",
		moveTeamspaceDocuments_file_info_text: "You can move items from one teamspace to another teamspace or folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "You do not have the appropriate permissons to move the items to the selected folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "You do not have the appropriate permissons to move the items from the teamspace.",
		moveTeamspaceDocuments_move_mixed_items: "You cannot override the security of the selected items. Some of the items are not managed by the teamspace. You can override only the security of items that are managed by the teamspace.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "You must specify a name for the teamspace.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "You must specify a name for the teamspace template.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "The teamspace name cannot contain any of the following characters: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "The template name cannot contain any of the following characters: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link to Document",
		workspacebuilder_folders_makeDocCopy: "Copy Document",
		workspacebuilder_folders_newfolder: "New Folder",
		workspacebuilder_folders_local_drive: "From Local Directory",
		workspacebuilder_folders_from_repo: "From Repository",
		workspacebuilder_folders_add_doc: "Add Document",
		workspacebuilder_folders_grid_name: "Name",
		workspacebuilder_folders_props: "Properties",
		workspacebuilder_folders_remove: "Remove",
		workspacebuilder_folders_delete: "Delete",
		workspacebuilder_folders_adddoc_local: "Add Document from Local Drive",
		workspacebuilder_folders_adddoc_repo: "Add Document from Repository",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "The specified folder name already exists. Specify a different folder name.",

		workspacebuilder_classes_title: "Select Classes or Entry Templates",
		workspacebuilder_classes_title_cm: "Select Classes",
		workspacebuilder_classes_template_introText: "Specify whether the teamspaces that are created from this template will use classes or entry templates to add documents to the repository. If no classes are selected, teamspaces will see all of the classes to which they have access.  User can modify the list of classes or entry templates in the teamspace if they have the appropriate permission.",
		workspacebuilder_classes_template_introText_cm: "Select the classes that users can use to add documents to the repository. If no classes are selected, teamspace users will see all the classes to which they have access. Users can modify the list of classes in the teamspace if they have the appropriate permissions.",
		workspacebuilder_classes_instance_introText: "Select the classes or entry templates that users can use to add documents to the repository. When no classes are selected, teamspace users will see all of the classes to which they have permission. Users can modify the list of classes or entry templates in the teamspace if they have the appropriate permissions.",
		workspacebuilder_classes_instance_introText_cm: "Select the classes that users can use to add documents to the repository. When no classes are selected, teamspace users will see all of the classes to which they have permission. Users can modify the list of classes in the teamspace if they have the appropriate permissions.",
		workspacebuilder_classes_selection: "Select Classes:",
		workspacebuilder_classes_list: "Available Classes:",
		workspacebuilder_classes_columns_default: "Default",
		workspacebuilder_classes_columns_className: "Class Name",
		workspacebuilder_classes_type_classes: "Use classes to add documents",
		workspacebuilder_classes_type_classes_tooltip: "Classes include associated properties so that documents can be located for later use.",
		workspacebuilder_classes_type_entryTemplates: "Use entry templates to add documents",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Entry templates ensure that the information that is provided for each document is consistent and uses predefined values.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Entry Template Name",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Description",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "You must add at least one entry template to the teamspace.",

		workspacebuilder_classes_new: "New Class",
		workspacebuilder_classes_add: "Add Class",
		workspacebuilder_entryTemplate_add: "Add Entry Template",
		workspacebuilder_add_list: "Add",
		workspacebuilder_makeDefault_list: "Make Default",
		workspacebuilder_removeDefault_list: "Remove Default",

		workspacebuilder_roles_title: "Select Roles",
		workspacebuilder_roles_title_modify: "Modify Roles",

		workspacebuilder_selection_moveup: "Move Up",
		workspacebuilder_selection_movedown: "Move Down",
		workspacebuilder_selection_remove: "Remove",
		workspacebuilder_selection_add: "Add",
		workspacebuilder_selection_create_new_search: "New Search...",
		workspacebuilder_selection_create_new_role: "New Role...",
		workspacebuilder_selection_make_role_available: "Make Available",
		workspacebuilder_selection_make_role_available_tooltip: "Shares the select role with other templates. You must assign at least one permission to the role to share it.",

		workspacebuilder_navigation_next: "Next",
		workspacebuilder_navigation_finish: "Finish",
		workspacebuilder_navigation_validate: "Validate",
		workspacebuilder_navigation_previous: "Previous",
		workspacebuilder_navigation_cancel: "Cancel",
		workspacebuilder_navigation_customize: "Customize",

		workspacebuilder_search_dialog_title: "Search",
		workspacebuilder_dialog_close: "Close",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Template availability:",
		workspace_properties_templateState_tooltip: "Make the template unavailable to prevent users from creating teamspaces that use this template.",
		workspace_properties_dialog_title: "Template Properties",
		workspace_properties_online_radio_option_label: "Make Available",
		workspace_properties_offline_radio_option_label: "Make Unavailable",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Do you want to cancel without saving your changes?",
		workspacebuilder_cancel_confirmation_button: "Yes",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Any invalid items will be removed from the template and the template is made available to users.  Do you want to validate this teamspace template?",
		workspacebuilder_validate_confirmation_button: "Yes",
		workspacebuilder_validate_confirmation_title: "Validate",

		/* Entry templates builder */
		entry_templates: "Entry Template Manager",
		no_entry_templates_were_found: "There are no entry templates",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Roles:",

		/* User Group picker widget */
		directory_label: "Directory:",
		scope_label: "Search for:",
		name_starts_with_label: "Name starts with",
		name_contains_label: "Name contains",
		display_name_contains_label: "Display name contains",
		starts_with_label: "Starts with:",
		available_label: "Available:",
		available_heading: "Available",
		selected_label: "Selected:",
		selected_heading: "Selected",
		available_repositories_label: "Available Repositories",
		selected_repositories_label: "Selected Repositories",
		default_repository: "Default repository:",
		default_repository_placeholder: "Select a repository",
		default_role_placeholder: "Select a role",
		menu_label_placeholder: "Select or enter a label",
		default_repository_hover: "Specify the repository that is selected by default when users log into the web client from this desktop.<br><br><b>Important:</b> You must add repositories to the selected repository list desktop before you can specify the default repository.",
		default_repository_workflow_hover: "<b>Remember:</b> You can configure the application spaces only for the repositories that are configured for this desktop.",
		remove_label: "Remove",
		users_label: "Users",
		groups_label: "Groups",
		user_or_group_name_label: "User or group name:",
		user_or_group_name_hover: "Enter the name of a user or group that is valid on the repository.  The name is not validated.",
		user: "User",
		group: "Group",
		name: "Name:",
		displayName: "Display Name",
		display_name: "Display name:",
		shortName: "Short Name:",
		distinguishedName: "Distinguished Name:",
		search_tooltip: "Search",
		add_tooltip: "Add",
		add_selected_tooltip: "Add to the selected list",
		remove_tooltip: "Remove",
		remove_selected_tooltip: "Remove from the selected list",
		add_to_selected_tooltip: "Add",
		remove_from_selected_tooltip: "Remove",
		move_up_selected_tooltip: "Move up",
		move_down_selected_tooltip: "Move down",
		advanced_search_options_tooltip: "Advanced settings",
		move_right_selected_tooltip: "Move into submenu",
		move_left_selected_tooltip: "Move out of submenu",
		add_separator: "Add Separator",
		menu_item_label: "Menu item label:",
		add_menu_label: "Add Submenu",
		menu_label: "Submenu label:",
		menu_label_info: "<b>Important:</b> You must add at least one menu item to this submenu before you can save this menu.",
		menu_dropdown_label: "Dropdown button label:",
		menu_dropdown_label_info: "<b>Important:</b> You must add at least one menu item to this dropdown button before you can save this toolbar.",
		no_item_found: "No results were found.",
		me: "Me",
		anyone: "Anyone",
		specific_users: "Specific users",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "The search returned more than {0} results. Change your criteria to narrow your search.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "The search results contain items that were already selected. Those items will not be displayed in the search results.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "More than {0} results were returned. Use the filter to narrow the results",

		user_already_selected: "The specified user is already selected.  Specify a different user.",
		group_already_selected: "The specified group is already selected.  Specify a different group.",
		user_cannot_select_self: "You cannot add yourself. Specify a different user.",

		/* Select User Group dialog */
		select_user_group_add_label: "Add",
		select_user_group_cancel_label: "Cancel",
		add_users_groups_label: "Add Users and Groups",
		add_user_group_label: "Add User and Group",
		add_users_label: "Add Users",
		add_user_label: "Add User",
		add_label: "Add:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "The following documents have unsaved annotation changes:",
		viewer_confirm_to_proceed: "Do you want to continue and lose the changes?",
		viewer_warn_has_changes: "Your unsaved changes will be discarded.",
		viewer_warn_is_printing: "Printing that is in progress might not complete.",
		viewer_warn_confirm_exit: "Do you want to exit?",
		viewer_prompt_save_changes: "The following document has unsaved annotation changes that will be lost:<br>${0}<br><br>Do you want to save the changes?",
		viewer_prompt_mergesplit_changes: "The following documents have unsaved changes:<br>${0}<br><br>Do you want to continue and lose the changes?",
		viewer_prompt_mergesplit_tab_changes: "The following document has unsaved changes:<br>${0}<br><br>Do you want to continue and lose the changes?",
		viewer_new_item_name: "New Document",
		viewer_top_frame: "Top frame:",
		viewer_bottom_frame: "Bottom frame:",
		viewer_left_frame: "Left frame:",
		viewer_right_frame: "Right frame:",
		viewer_viewer_frame: "Viewer frame:",
		viewer_properties_frame: "Properties frame:",
		viewer_comment_frame: "Comment frame:",
		viewer_mergesplit_on: "View",
		viewer_mergesplit_off: "Merge and Split",
		viewer_mergesplit_context_menu_move: "Move",
		viewer_mergesplit_context_menu_rename: "Rename",
		viewer_mergesplit_context_menu_delete: "Delete",
		
		//move to new window
		viewer_move_to_new_window:"Move to new window",
		viewer_continue:"Discard Changes",
		viewer_return_to_original_window:"Return to original window",
		viewer_switch_window:"Switch Window",
		viewer_prompt_lost_changes:"The document ${0} is currently open in another window. That document has unsaved changes.<br><br>Would you like to switch to that window to save the changes, or discard the changes and open it in this window?",
			
		viewer_mergesplit_fallback_info: "You can only complete the Merge and Split action on documents that are in the same repository.",
		viewer_tabbed_layout: "View as Tabs",
		viewer_tabbed_layout_highcontrast: "Tabs",
		viewer_split_vertical_layout: "Split panes top and bottom",
		viewer_split_vertical_layout_highcontrast: "Top and bottom",
		viewer_split_horizontal_layout: "Split panes left and right",
		viewer_split_horizontal_layout_highcontrast: "Left and right",
		viewer_add_vertical_layout: "New tab on bottom",
		viewer_add_vertical_layout_highcontrast: "Bottom tab",
		viewer_add_horizontal_layout: "New tab on right",
		viewer_add_horizontal_layout_highcontrast: "Right tab",
		viewer_add_horizontal_layout_rtl: "New tab on left",
		viewer_add_horizontal_layout_rtl_highcontrast: "Left tab",
		viewer_split_properties_layout: "View Properties",
		viewer_split_comment_layout: "View Comments",
		viewer_split_notelog_layout: "View Notelog",
		viewer_window_title: "${0} Viewer",
		viewer_next_hit: "View the next document in the list",
		viewer_prev_hit: "View the previous document in the list",
		viewer_confrim_more_search_results: "The search results contain no more viewable documents.  Do you want to retrieve more search results?",
		viewer_confirm_get_next_page: "The list of results contains no more viewable items.  Do you want to retrieve more search results?",
		viewer_confirm_get_next_item: "The list of results contains more viewable items.  Do you want to view the next item?",
		viewer_fn_annotation_tooltip: " Created By: ${0},  Created On: ${1}",
		viewer_box_note_limitation: "You can only open and view Box Notes in a separate window.",
		viewer_click_to_open_box_note: "Click here to open the Box Note.",
		viewer_box_view_expiring: "The maximum amount of time you can view your Box document is 60 minutes. Your current session will expire in ${0} minutes. If you want to continue working on the document, you must reload it now. Do you want to reload the document?",
		viewer_add_dialog_save_as_type: "Save as type:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Checkout conflict",
		viewer_checkout_conflict: "The document is checked out by another user.",
		viewer_checkout_confirm: "A newer version of the document is available. Do you want to continue to check out the document or do you want to reload the viewer with the newer version? If you choose to reload the viewer, any unsaved changes will be lost.",
		viewer_checkout_continue: "Continue with checkout",
		viewer_checkout_reload: "Reload",
		viewer_status_building: "Building document...",
		viewer_status_adding: "Adding document...",
		viewer_status_checking_in: "Checking in document...",

		/* Class Selector Widget */
		include_subclasses_label: "Include subclasses",
		include_subclasses_label2: "Also search in subclasses",
		include_subclasses_note: "(Including subclasses)",
		available_classes_col_header: "Available Classes",
		single_class_label: "Search in a single class",
		multiple_classes_label: "Search in multiple classes",
		multiple_classes_hover_help: "Select this option to search in more than one class. The classes can be parent classes or subclasses. If you select this option, you will see only the properties and values that are common to the selected classes.",
		selected_classes_col_header: "Selected Classes",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Including subfolders)",
		favorites_pseudo_node: "\\Favorites\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "You must select a folder in the repository to add the document to.",
		no_permission_add_folder: "You do not have the appropriate permissions to add folders to this folder.",
		no_permission_add_document: "You do not have the appropriate permissions to add documents to this folder.",
		document_already_in_folder: "The document is already in this folder.",
		cant_move_folder_onto_parent: "The folder is already in this folder.",
		cant_move_folder_onto_self: "You cannot move a folder into itself or its subfolders.",

		/* Workflow Widgets */
		process_application_space: "Process Application Space",
		process_role: "Process Role",
		process_inbasket: "Process In-basket",
		process_worklist: "Worklist",
		process_step_processor: "Process Work Item",
		process_tracker: "Track Work Item",
		process_info_subject: "Subject",
		process_info_stepname: "Step",
		process_info_is_locked: "Locked",
		process_info_no_access: "No access",
		process_info_received_on: "Received on",
		process_info_overdue: "Overdue",
		process_info_reminder_sent: "Reminder sent",
		process_info_locked_by_user: "Locked by",
		process_work_object_number: "Work object number",
		process_deadline: "Due date:",
		process_launchedby: "Started by:",
		process_receivedon: "Received on:",
		process_step: "Step:",
		process_properties: "Properties",
		process_attachments: "Attachments",
		process_attachments_select: "Select an Attachment",
		process_finish_button_label: "Stop Tracking",
		process_tracker_history: "History",
		process_tracker_milestones: "Milestones",
		process_tracker_milestone: "Milestone",
		process_tracker_milestone_level: "Level",
		process_tracker_milestones_empty: "There are no milestones to display.",
		process_tracker_level_selector_label: "Show milestone levels up to:",
		process_tracker_map_selector_label: "Filter by map:",
		process_tracker_message: "Message",
		process_tracker_datereached: "Date Reached",
		process_tracker_stepname: "Step",
		process_tracker_cycle: "Cycle",
		process_tracker_review_cycle: "Review Cycle",
		process_tracker_participant: "Participant",
		process_tracker_completed: "Completed",
		process_tracker_response: "Response",
		process_tracker_comments: "Comments",
		process_tracker_delete_confirmation: "Do you want to stop tracking the following workflow: ${0}?",
		process_tracker_history_allmaps: "All maps",
		process_tracker_history_workflow: "Workflow",
		process_tracker_history_terminate: "Terminate",
		process_tracker_history_malfunction: "Malfunction",
		process_filter_label: "Filter",
		process_no_filter_summary: "No filters applied",
		process_filter_summary: "${0} applied",
		process_filter_reset_tooltip: "Reset clears the filter and refreshes the in-basket.",
		process_attachments_add_folder: "Add Folder",
		process_attachments_add_doc: "Add Document",
		process_complete_button_label: "Complete",
		process_save_button_label: "Save",
		process_launch_button_label: "Launch Workflow",
		process_open_button_label: "Open",
		process_movetoinbox_button_label: "Move to In-basket",
		process_return_button_label: "Return",
		process_return_to_sender_tooltip: "Return the work item to the originating in-basket",
		process_move_to_inbasket_tooltip: "Move the work item to your personal in-basket",
		process_reassign_tooltip: "Reassign the work item to another owner",
		process_reassign_button_label: "Reassign",
		process_preferences_button_label: "Preferences",
		process_manageroles_button_label: "Manage Roles",
		process_manageroles_no_members: "There are no members.",
		process_responses_button_label: "More Responses",
		process_morecustomaction_button_label: "More Actions",
		process_show_instructions: "View Instructions",
		process_hide_instructions: "Hide Instructions",
		process_remove_attachment: "Remove",
		process_close_window: "The work item was processed.",
		process_delegate_flag: "Require the current owner to approve the work item before routing it to the next step in the workflow.",
		process_paticipant_voting: "Number of participants required for voting approval:",
		process_get_next_label: "Get next work item",
		process_no_more_items: "There are no more items in the in-basket to process.",
		process_workflow_name: "Workflow name:",
		process_pattern_process_name: "Review for ${0}",
		process_instuctions: "Instructions for reviewers:",
		process_pattern_deadline: "Due date:",
		process_reviewers: "Reviewers:",
		process_approvals_required: "Approvals required:",
		process_on_reject: "If the work item is rejected:",
		process_return_to_originator: "Return to me",
		process_return_to_previous_reviewer: "Return to the previous reviewer",
		process_additional_settings: "Additional settings:",
		process_allow_reassign: "Allow reviewers to reassign this review",
		process_complete_notification: "Notify me when the review is complete",
		process_workflow_name_hover_help: "The name that you specify for the work item should make it easy for reviewers to distinguish between this work item and other work items in their in-basket.",
		process_approvals_required_hover_help: "If the work item is reviewed by multiple people concurrently, you can specify how many approvals are needed for the work item to be successfully completed.",
		process_approval_options: "Approval options",
		process_all: "All",
		process_at_least: "At least",
		process_at_least_by_count: "At least ${0} number of reviewers",
		process_at_least_by_percentage: "At least ${0}% of reviewers",
		process_comments: "Comments:",
		process_review_step_comments_hover_help: "If you reject the work item, you must provide information about why you rejected it. This information enables the originator of the work item or the previous reviewer to address your concerns.",
		process_rework_step_comments_hover_help: "You must provide information about how you addressed the comments. If you disagree with the comments, provide the rationale for your decision.",
		process_rejection_reason: "Reason for rejection:",
		process_summary: "Summary",
		process_sequential_review: "Sequential review",
		process_sequential_review_description: "The work item will be reviewed by each reviewer in order.",
		process_parallel_review: "Parallel review",
		process_parallel_review_description: "The work item will be reviewed by all reviewers at the same time",
		process_parallel_approvals_required_error: "The number of approvals required is too high. Only ${0} reviewers are specified.",
		process_parallel_invalid_required_approvals_count: "The value is not valid. The value must be ${0}.",
		process_subject_prompt: "Enter the Subject",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Work Item:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "View properties",
		view_permissions_level: "View permissions",
		view_content_level: "View document",
		link_level: "Link",
		modify_properties_level: "Edit properties",
		modify_content_level: "Edit document",
		minor_version_level: "Edit minor version",
		major_version_level: "Edit major version",
		create_instance_level: "Create instance",
		delete_document_level: "Delete document",
		delete_item_level: "Delete item",
		modify_document_permissions_level: "Manage permissions",
		modify_folder_permissions_level: "Manage permissions",
		modify_owner_level: "Modify owner",
		delete_folder_level: "Delete folder",
		file_in_folder_level: "Add to folders",
		create_subfolder_level: "Create subfolders",
		link_item_level: "Annotate document, Add to folder", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Document-only: Add an annotation to the document or remove an annotation from the document</li><li>Folder-only: Add items to the folder or remove items from the folder</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Delete",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Owner",
		/* previously \"Full control\" */
		edit_privilege: "Author",
		/* previously \"Edit\" */
		read_only_privilege: "Reader",
		/* previously \"Read only\" */
		no_access_privilege: "No access",
		share_with_label: "Share with:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Only me",
		public_label: "Everyone",
		members_label: "Specific users and groups",
		select_members_label: "Select...",
		select_user_group_label: "Select Users...",
		select_users_groups_label: "Select Users and Groups...",
		select_user_label: "Select User...",
		propagation_label: "Propagation:",
		access_label: "Permissions:",
		add_permission_add_label: "Add",
		security_policy_label: "Security policy:",
		includes_inherited_access: "Includes inherited access",
		customize_access_for_label: "Customize Access for:",
		customize: "Customize",
		direct: "This Item",
		singleLevelInheritance: "One Level",
		infiniteLevelInheritance: "All Levels",
		inherited: "Inherited",
		direct_hover_help: "Security settings apply to the selected item",
		
		singleLevelInheritance_hover_help: "These permissions apply to this item and to those immediate children that are configured to inherit security from this item.",
		infiniteLevelInheritance_hover_help: "These permissions apply to this item and to all descendants that are configured to inherit security from this item.",
		inherited_hover_help: "These permissions are inherited from the parent.",
		
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "These permissions for ${0} apply to this item and to those immediate children that are configured to inherit security from this item.",
		infiniteLevelInheritance_member_hover_help: "These permissions for ${0} apply to this item and to all descendants that are configured to inherit security from this item.",
		inherited_member_hover_help: "These permissions for ${0} are inherited from the parent.",
		
		partial_hover_help: "Item security settings were changed by a user",
		allow: "Allow",
		deny: "Deny",
		basic: "Basic",
		advanced: "Advanced",
		permission_type: "Set access for:",
		share_with_hover_help: "The item is currently shared with the following users and groups.",
		direct_security_policy_hover_help: "The settings of this security policy allow you to change the security of this item.",
		security_policy_hover_help: "The security of this item is read-only because the settings of this security policy prevent you from changing the security of this item.",
		security_remove: "No permissions",
		pseudo_group_label: "Alias Accounts",
		marking_hover_help: "The security of this item is controlled by a marking set, which can affect the security of the item.",
		note_label: "Important:",
		marking_text: "This item is marked as: ${0}. The item might have additional security restrictions.",
		authenticated_users: "Authenticated users",
		realm_users: "${0} users",
		denyAll: "Deny all",
		allowAll: "Allow all",
		
		remove_direct_text: "When you save your changes, the permissions for this member will be removed from the item.",
		remove_single_inheritance_text: "When you save your changes, the permissions for this member will be removed from the item and from <br>those immediate children that are configured to inherit security from the item.<p>Do you want to continue?",
		remove_infinite_inheritance_text: "When you save your changes, the permissions for this member will be removed from the item and from <br>all descendants that are configured to inherit security from the item.<p>Do you want to continue?",
		remove_inheritance_text: "When you save your changes, the permissions for this member will be removed from the item and from <br>all descendants that are configured to inherit security from the item. Only those permissions that <br>are inherited by this item will remain.<p>Do you want to continue?",
		
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Remove these permissions for ${0}",

		security_proxy_text: "The security of this item is read-only.",
		security_proxy_declared_text: "The security of this item is read-only because it is defined by a security proxy.",
		security_proxy_hover_help: "The security of this item is controlled by the security that is set on another object in the repository.",
		add_permissions_label: "Add permissions",
		permission_propagation_direct: "This folder only",
		permission_propagation_onelevel: "This folder and one level below",
		permission_propagation_alllevels: "This folder and all levels below",
		document_propagation_label: "Set access for:",
		document_propagation_FOLDER: "Folder",
		document_propagation_DOCUMENT: "Document",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Authentication source:",

		/* Versions Widget */
		object_versions_selector_label: "Versions:",
		object_versions_label: "Versions",
		object_type_document_label: "Document:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Folders Filed In",
		folders_filed_in_folder_col_hdr: "Folder",
		folders_filed_in_path_col_hdr: "Path",
		folders_filed_in_containment_name_col_hdr: "Containment Name",
		folders_filed_in_creator_col_hdr: "Created By",
		folders_filed_in_date_created_col_hdr: "Created On",

		/* Parent Documents */
		properties_parent_documents_label: "Parent Documents",

		/* Select object dialog */
		select_object_title: "Select Item",
		select_object_breadCrumb_version_prefix: "Versions for: ",
		show_versions_label: "Show Versions",
		use_current_version_label: "Use Current Version",
		use_released_version_label: "Use Released Version",

		/* Select content class dialog */
		select_class: "Select Class",
		/* Select Search dialog */
		select_search: "Select Search",

		/* Show hyperlink dialog */
		show_hyperlink_title: "View Link",
		show_hyperlink_intro: "You can copy and paste the link into emails, chats, and web pages. If there are multiple versions of the item, specify which version you want to link to.",
		show_hyperlink_intro_no_version_select: "You can copy and paste the link into emails, chats, and web pages.",
		show_text_label: "Version:",
		released_button_label: "Released",
		current_button_label: "Current",
		select_button_label: "Specific Version",
		show_hyperlink_no_released_version_msg: "No released version of this document exist.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Launch Workflow",
		edit_workflow_title: "Work Item Properties",
		start_workflow_intro: "Launch a workflow to process the selected items. If you want to assign the work items to a specific user, specify an owner.",
		edit_workflow_intro: "You can edit the properties of the selected work items. If you want to reassign the work item to another user, specify an owner.",
		workflow_field_label: "Workflow:",
		priority_field_label: "Priority:",
		owner_field_label: "Owner:",
		start_button_label: "Start",
		save_button_label: "Save",
		owner_value_hint: "Enter an alphanumeric string with a maximum of 32 characters. The string can contain only spaces or the following characters: a-z, A-Z, 0-9, and ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Content Elements",
		
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "The value is not valid. The value can contain only spaces or the following characters: a-z, A-Z, 0-9, and ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Enter a value from 1 to 32000 to indicate the importance of the work item.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "The value is not valid. The priority must be a value from 1 to 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "The workflow name does not exist.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Suspend from Workflow",
		suspend_workitems_intro: "When you suspend a work item from the workflow, the work item connot be processed until it is resumed",
		suspend_workitems_options_label: "Suspend the selected work items:",
		suspend_until_resume_label: "Until manually resumed",
		suspend_until_date_label: "Until",
		suspend_for_duration_label: "For",
		suspend_for_duration_hours: "Hours",
		suspend_for_duration_days: "Days",
		suspend_for_duration_weeks: "Weeks",
		suspend_for_duration_months: "Months",
		suspend_for_duration_years: "Years",
		suspend_button_label: "Suspend",
		suspend_duration_value_hint: "Enter a value in the range 1 - 99 for the duration.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "The value is not valid. The value must be in the range 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Remove from Workflow",
		remove_workflow_confirmation: "Do you want to remove the selected items from the workflow?<br>${0} items are selected.",
		remove_workflow_button_label: "Remove",

		/* Unfile dialog */
		unfile_dialog_title: "Remove From Folder",
		unfile_dialog_remove_from_folder_label: "Remove from:",
		unfile_dialog_info_text: "You can remove items from folders. However, removing an item from all folders does not remove the item from the repository. You can still retrieve the item by running a search. Only the folders that you have view privileges for are shown in this list.",
		unfile_dialog_select_all: "Select All",
		unfile_dialog_deselect_all: "Clear All",
		unfile_dialog_remove_button_label: "Remove",
		unfile_dialog_select_folder_col_hdr: "Select Folder",
		unfile_dialog_folder_col_hdr: "Folder",
		unfile_dialog_path_col_hdr: "Path",
		unfile_dialog_not_filed_msg: "This item is not in any folders.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "You do not have the appropriate permissons to remove this item from any of the folders that this item is in.",
		unfile_dialog_folder_not_selectable_tooltip: "You do not have the appropriate permissions to remove this item from this folder.",
		unfile_multi_prompt: "Do you want to remove the selected items from the ${0} folder?",
		unfile_large_number_items_confirmation_question: "You selected ${0} items to be removed from the ${1} folder.<br/>Removing a large number of items from a folder might take a long time.<br/>Do you want to continue?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Open",
		move_to_folder_title: "Move to Folder",
		move_to_folder_button_caption: "Move",
		move_to_folder_label: "Move to:",
		add_to_folder_title: "Add to Folder",
		add_to_folder_button_caption: "Add",
		add_to_folder_label: "Add to:",
		copy_to_folder_title: "Copy to Folder",
		copy_to_folder_button_caption: "Copy",
		copy_to_folder_label: "Copy to:",
		copy_to_folder_delete_label: "After the copy completes, delete the selected items(s) from Box.",
		move_from_folder_label: "Move from:",
		move_file_info_text: "You can move items from one folder to another.",
		move_folder_info_text: "You can move folders from one parent folder to another.",
		add_doc_to_folder_info_text: "You can add items to one or more folders. If an item is already in a folder, it remains in that folder and is added to any additional folders that you specify.",
		copy_doc_to_folder_info_text: "You can copy items to a folder.",
		box_copy: "Box Copy",
		box_copy__button_caption: "Copy",
		box_copy_to_info_text: "Select the repository and folder where you want to copy your selected items from Box.",
		box_copy_from_info_text: "Select the repository and folder where you want to copy your selected items from Box.",
		box_copy_version_info_text: "To add a new document, select the repository and folder. To check in a new version, select the repository and document.",
		admin_box_copy: "Box copy",
		admin_box_copy_hover: "This option allows users to copy documents to Box.",

		no_permission_to_copy_version_msg: "You cannot copy the document from Box as a new version of the selected document. Either you do not have the appropriate permissions to edit the selected document, or the selected document is checked out by someone else.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "You do not have the appropriate permissons to remove this item from any of the folders that this item is in.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "You do not have the appropriate permissions to remove this item from this folder.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "This item cannot be moved because it is not filed in any folders. Choose another item.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Launch Workflow",
		subscriptions_dialog_available_items_label: "Available items:",
		subscriptions_dialog_info_text: "Specify which workflow to launch.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Name",
		subscriptions_dialog_desc_col_hdr: "Description",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Manage Roles",
		manageroles_dialog_info_text: "You can modify the list of users for each role that is associated with this process application space.",
		manageroles_dialog_members_label: "Members",
		manageroles_dialog_roles_label: "Roles",
		manageroles_dialog_add_button_label: "Add Users and Groups",
		manageroles_dialog_remove_button_label: "Remove",
		manageroles_dialog_save_button_label: "Save",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "No workflows are associated with this item.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Workflow Preferences",
		workflow_pref_dialog_info_text: "Specify the workflow events for which you want to receive email notifications. You can also enable the option to route your work to another person by selecting a user to delegate work to.",

		workflow_pref_general: "General",
		workflow_pref_email_address: "Email address",
		workflow_pref_email_address_hover: "Specify the email address where you want to receive workflow notifications.",
		workflow_pref_preferred_locale: "Language",
		workflow_pref_preferred_locale_hover: "Specifies the language in which email notifications are displayed.",

		workflow_pref_work_item_notice: "Work Item Notifications",
		workflow_pref_step_new_assignment: "A new work item is assigned to me",
		workflow_pref_step_new_assignment_hover: "Notify me when I receive a new work item.",
		workflow_pref_step_expired_deadline: "Work item deadline is passed",
		workflow_pref_step_expired_deadline_hover: "Notify me when I miss a work item deadline.",
		workflow_pref_step_reminders: "Near a work item deadline",
		workflow_pref_step_reminders_hover: "Remind me about a work item when it is near the deadline.",

		workflow_pref_originator_notice: "Originator Notifications",
		workflow_pref_milestone_reached: "Milestone is reached",
		workflow_pref_milestone_reached_hover: "Notify me when a milestone is reached on a workflow that I started.",

		workflow_pref_tracker_notice: "Workflow Tracker Notifications",
		workflow_pref_tracker_new_assignment: "A new tracker item is assigned to me",
		workflow_pref_tracker_new_assignment_hover: "Notify me when a workflow that I am tracking is launched.",
		workflow_pref_tracker_deadline_reminders: "Workflow deadline near",
		workflow_pref_tracker_deadline_reminders_hover: "Remind me about a workflow when it is near the workflow deadline.",
		workflow_pref_tracker_deadline_expired: "Workflow deadline is passed",
		workflow_pref_tracker_deadline_expired_hover: "Notify me when a workflow deadline has passed.",
		workflow_pref_tracker_exception: "Workflow error occurred",
		workflow_pref_tracker_exception_hover: "Notify me when a workflow exception or error occurs.",
		workflow_pref_tracker_expired_deadline: "Step deadline is passed",
		workflow_pref_tracker_expired_deadline_hover: "Notify me when a step deadline has passed on a workflow that I am tracking.",
		workflow_pref_tracker_milestone_reached: "Milestone is reached",
		workflow_pref_tracker_milestone_reached_hover: "Notify me when a milestone is reached on a workflow that I am tracking.",

		workflow_pref_out_notice: "Out of Office",
		workflow_pref_proxy_user: "Delegate work to",
		workflow_pref_proxy_user_hover: "Use this option to automatically route your work to another user, for example, when you are away from the office or on vacation.",
		workflow_pref_workflow: "Workflow",
		workflow_pref_on: "On",
		workflow_pref_off: "Off",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Launch Workflow",
		transfered_workflows_dialog_info_text: "Select a workflow to launch.",
		transfered_workflows_dialog_available_items_label: "Available items:",
		transfered_workflows_dialog_select_button_label: "Launch",
		transfered_workflows_dialog_name_col_hdr: "Name",
		transfered_workflows_dialog_no_item_found: "No transfered workflows were found.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transfer Workflow",
		transfer_workflow_dialog_info_text: "Select a workflow to transfer into the workflow system.",
		transfer_workflow_dialog_use: "Use this workflow name",
		transfer_workflow_dialog_use_another: "Use another workflow name",
		transfer_workflow_dialog_in_use: "The workflow name is: ",
		transfer_workflow_dialog_transfer_button_label: "Transfer",
		transfer_workflow_dialog_no_items_found: "No transfered workflows were found.",
		transfer_workflow_dialog_use_hover: "Specify the current workflow name from the workflow definition.",
		transfer_workflow_dialog_another_hover: "Specify a different workflow name or reuse an existing transfered workflow name.",

		/*Search In control*/
		search_in_title: "Search in:",
		search_in_teamspaces: "Teamspaces",
		search_in_repositories: "Repositories",
		search_in_thisteamspaces: "This teamspace",

		ajaxViewer_save: "Save Annotations",
		ajaxViewer_print: "Print Preview",
		ajaxViewer_firstPage: "First Page",
		ajaxViewer_previousPage: "Previous Page",
		ajaxViewer_nextPage: "Next Page",
		ajaxViewer_lastPage: "Last Page",
		ajaxViewer_unknownPageCount: "1 of ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} of ${1}",
		ajaxViewer_zoomOut: "Zoom Out",
		ajaxViewer_zoomIn: "Zoom In",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Fit Width",
		ajaxViewer_fitHeight: "Fit Height",
		ajaxViewer_fitPage: "Fit Page",
		ajaxViewer_rotate270: "Rotate 270 Degrees",
		ajaxViewer_rotate90: "Rotate 90 Degrees",
		ajaxViewer_rotate180: "Rotate 180 Degrees",
		ajaxViewer_darken: "Darken",
		ajaxViewer_lighten: "Lighten",
		ajaxViewer_lessContrast: "Less Contrast",
		ajaxViewer_moreContrast: "More Contrast",
		ajaxViewer_invert: "Invert",
		ajaxViewer_createHighlight: "Highlight",
		ajaxViewer_createNote: "Annotate",
		ajaxViewer_editAnnotation: "Edit Annotation Properties",
		ajaxViewer_deleteAnnotation: "Delete Annotation",
		ajaxViewer_editAnnotationTitle: "Edit Annotation Properties",
		printableView_print: "Print",
		printableView_close: "Close",

		search_results_dropdown_button: "Results Display",
		search_results_columns_label: "Search Results Display",
		search_results_columns_description: "Select the properties that you want displayed in the search results.",
		search_results_sortby_label: "Sort by:",
		search_results_order_label: "Sort order:",
		search_results_accending_label: "Ascending",
		search_results_descending_label: "Descending",
		search_results_available_properties: "Available",
		search_results_selected_properties: "Selected",
		search_rank_property: "Rank (Text search only)",
		search_name_attribute: "Name (${0})",
		search_results_summary_enabled_label: "Enable content summaries (Text search only)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Searches",
		manage_teamspace_classes_tab_title: "Classes",
		manage_teamspace_entry_templates_tab_title: "Entry Templates",
		manage_teamspace_team_tab_title: "Team",
		manage_teamspace_roles_tab_title: "Roles",
		manage_teamspace_dialog_title: "Modify Teamspace",
		manage_teamspace_button_label: "Modify Teamspace",
		manage_teamspace_team_pane_heading: "Select Team",
		manage_teamspace_classes_pane_heading: "Select Classes",
		manage_teamspace_entry_templates_pane_heading: "Select Entry Templates",
		manage_teamspace_no_rights_message: "You do not have the appropriate permissons to modify this teamspace.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Teamspace Properties",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Specify the properties that are displayed for documents and folders in the content list when users are browsing in the teamspace. You can also specify the order in which the properties are displayed.",
		teamspace_props_sel_cols_use_default_label: "Use the <b>Browse</b> settings for this repository",
		teamspace_props_sel_cols_use_default_tooltip: "Use the settings that are specified on the Browse page for this repository in administration tool.",
		teamspace_props_general_tab_label: "General",
		teamspace_props_column_props_tab_label: "Displayed Properties",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Choose file for import",
		teamspace_import_template_instruction: "You can select a teamspace template export file to import.",
		teamspace_import_template_button_label: "Import",
		teamspace_import_template_dialog_label: "Import Teamspace Template",

		/* Annotation Dialog */
		annotationDlg_title: "Annotations",
		annotationDlg_description: "The selected document has the following annotations:",
		annotationDlg_msg_noAnnotations: "No annotations exists. Click Add to create an annotation.",
		annotationDlg_pageLabel: "Page: ${pageNum}",
		annotationDlg_accLabel: "ACCESS: ${accType}",
		annotationDlg_accLabel_public: "Public",
		annotationDlg_accLabel_private: "Private",
		annotationDlg_accLabel_privateGroup: "Private(${groupName})",
		annotationDlg_copiable: "Can be copied to another server",
		annotationDlg_cannotCopy: "Cannot be copied to another server",
		annotationDlg_addButtonLabel: "Add",

		/* Share Dialog */
		is_shared: "Shared",
		is_share_pending: "Share pending",
		share_title: "Box Share",
		share_instructions_new: "Send email that includes a link for the shared file. Anyone with the link can access the file.",
		share_instructions_existing: "Send email that includes a link for the shared file. Anyone with the link can access the file. Other people might have the link because someone already shared this file.",
		share_instructions_another_version_shared: "Send email that includes the link for the shared file. Anyone with the link can access the file. Other people might have the link because someone already shared another version of this file.",
		share_buttonLabel_share: "Share",
		share_email_addresses: "Send to:",
		share_email_addresses_hover: "When the share completes, a link is sent to these email addresses. If you don't enter anything, the link is sent to your own email address.",
		share_email_addresses_reshare_hover: "When the share completes, a link is sent to these email addresses. If you don't enter anything, no email is sent.",
		share_password: "Set password:",
		share_password_placeholder: "Optional",
		share_comments: "Message:",
		share_comments_default: "I'd like to share my file with you on Box.",
		share_myEmail: "Send from:",
		share_expiration: "Set link expiration:",
		share_expire: "Access expires:",
		share_expire_none: "Never expires",
		share_allowDownload: "Allow download",
		share_add: "Add",
		share_advanced_instructions: "The download, expiration, and password settings apply to the shared file in Box.",
		share_advanced_existing_instructions: "The download, expiration, and password settings apply to the shared file in Box.",
		share_options_edit_warning: "Important: Any changes to these settings affect anyone with the link, including the people who already have the link.",
		share_link: "Link:",
		share_email_addresses_placeholder: "Email addresses",
		share_email_address_placeholder: "Email address",
		share_email_address_invalid: "Enter a valid email address.",
		share_cannot_share_with_self: "You cannot share files with yourself. Specify a different user.",
		share_selected_version_with_minor_warning_hover: "Version ${0} of the document is shared. You selected version ${1}.<br><br><b>Warning</b>: If you share version ${1}, no one can share version ${2} unless you delete the share for version ${1}.",
		share_selected_version_hover: "Version ${0} of the document is shared. You selected version ${1}.",
		share_selected_version_message: "Important: Version ${0} of the document is shared. You selected version ${1}.",
		share_different_version_message: "Important: You selected version ${1}, but version ${0} of the document is already shared.  You can't share version ${1} unless you first delete the share, but you can share the link to version ${0} instead.",
		share_version_message: "Important: Version ${0} of the document is shared. Select which version you want to share.",
		share_version_new: "Share version ${0}",
		share_version_new_p8_hover: "Sharing this document creates a specific version link to the selected version only.<br><br>When a document is already shared:<ul><li>You can share a later version, and the link redirects to the later version.</li><li>You can’t share an earlier version unless you first delete the share.</li></ul>",
		share_version_new_cm_hover: "Sharing this document creates a specific version link to the selected version only.<br><br>When a document is already shared:<ul><li>You can share a later version, and the link redirects to the later version.</li><li>You can’t share an earlier version.</li></ul>",
		share_version_update: "Share version ${0} (Update the share options).",
		share_version_update_p8_hover: "Sharing this document maintains the link to the specific version only.<br><br>When a document is already shared:<ul><li>You can share a later version, and the link redirects to the later version.</li><li>You can’t share an earlier version unless you first delete the share.</li></ul>",
		share_version_update_cm_hover: "Sharing this document maintains the link to the specific version only.<br><br>When a document is already shared:<ul><li>You can share a later version, and the link redirects to the later version.</li><li>You can’t share an earlier version.</li></ul>",
		share_version_change_to_current: "Share version ${0} (Update the share with the selected version).",
		share_version_change_to_current_p8_hover: "Sharing this document updates the link to point to the selected version only.<br><br>When a document is already shared:<ul><li>You can share a later version, and the link redirects to the later version.</li><li>You can’t share an earlier version unless you first delete the share.</li></ul>",
		share_version_change_to_current_cm_hover: "Sharing this document updates the link to point to the selected version only.<br><br>When a document is already shared:<ul><li>You can share a later version, and the link redirects to the later version.</li><li>You can’t share an earlier version.</li></ul>",
		share_repository: "Repository for shared files",
		share_repository_hover: "If you don’t see the Box repository you want to use, you can add a new Box repository on the Repositories page.",
		share_options: "Share Options",
		unshare_confirm: "If you delete the share, all share links are broken, including share links previously sent by other users. Any other users who want to share the document must select the original document and share it again.<br><br>Are you sure you want to delete the share?",
		unshare_button: "Delete Box Share",
		admin_share: "Box share services:",
		admin_share_hover: "Allow users to share a document from any repository that has Box share enabled. Sharing a document includes copying the file to Box, creating a link, and sending the link in email.",
		admin_my_email_modifiable: "Allow users to modify the Send from email address",
		admin_my_email_modifiable_hover: "By default, for Box Share, the user’s email address is read-only and is obtained from a mapping of users and email addresses that represent Box user accounts.<br><br>Select this option to allow users to edit their email address when they share; however, the validity of the email address is not verified.",
		admin_repos_admin_user: "Share administrator:",
		admin_repos_admin_user_hover: "Set the share administrator if you have a desktop with Box share services enabled and this Box repository selected as the repository for shared files.<br><br>Click Set and log in to Box by using a valid Box administrator account.<br><br>The share administrator must be a Box administrator user who is configured to have unlimited storage in Box.",
		admin_repos_admin_user_not_set_warning: "The Box administrator is not configured for the selected repository.<br><br>Box share services are disabled until you set the Box administrator for the selected repository, or select another Box repository where the Box administrator is configured.<br><br>You can set the Box administrator in the Box share services section on the General page for the repository.",
		admin_share_not_configured_warning: "Before you can use Box share services, you must first add and select a Box repository with server authentication.",
			
		/* Office Online Server settings */
		admin_office_online_title: "Office Online Configuration",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Specify whether you want users who access this desktop to be able to edit their Office documents using Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Allow collaborative editing",
		admin_office_online_allow_collaborative_editing_hover: "Allow more than one user to work on the same document. Clear the option if you want to restrict editing documents to one user.",
		admin_office_online_repository_not_set_warning: "Before you can enable the Office Online service, you must first enable the service on a repository and specify the Microsoft Office Online Server URL. Click <b>Repositories</b>, select a repository, and then on the <b>Edit Integration</b> tab, enable the service. Click <b>Settings > General</b> and enter the Microsoft Office Online Server URL.",
						
		admin_settings_office_online_server_enable_hover: "Specify whether you want to use Office Online Server to work with Office documents.",
		admin_office_online_server_url: "Microsoft Office Online Server URL",
		admin_office_online_server_url_hover: "Specify the URL by which other applications can communicate with Office Online Server. The URL has the format http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Verified",
	    admin_office_online_server_Failed: "<b>Failed</b>",

		admin_repcfg_office_online_service_p8_hover: "To initialize the repository to use Office Online Server, you can add the initial template file for each Office application. If a template is not specified, the default template will be used.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server Integration",
		admin_repcfg_office_online_service_url_not_set_warning: "Before you can enable Office Online Server, you must first specify the Microsoft Office Online Server URL. Click Settings > General and enter the URL",
		admin_repcfg_office_online_word_template_name: "Default Word template",
		admin_repcfg_office_online_excel_template_name: "Default Excel template",
		admin_repcfg_office_online_powerpoint_template_name: "Default PowerPoint  template",
		admin_repcfg_office_online_blank_template_description: "This is the default template that is used if you don't add your own template.",
		
		
		/* Edit Service settings */
		admin_icn_edit_title: "Edit Configuration",	
	    admin_icn_edit_files_cleanup_interval: "Temporary files cleanup interval (in days):",
	    admin_icn_edit_files_cleanup_interval_hover: "You can set the amount of time that temporary files are kept in the ICN Edit client.  The default time is 20 days. The maximum time is 20 days.The minimum time is 1 day.",
	    
	    admin_icn_edit_service_integration: "Edit Service Integration",
	    admin_icn_edit_service_integration_intro: "The edit service enables users to easily add or edit files in the native apps installed on their computers.<br><br><b>Important:</b> If you enable the edit service, you must save your repository configuration before you can edit the predefined categories.",
		admin_icn_edit_service: "Edit service:",
		admin_icn_edit_enable_hover: "To use the edit service, you must:<ul><li>Enable the service on the repository</li><li>Enable the service on the desktops in your environment</li><li>Install the IBM Content Navigator Edit client on user workstations</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Enable",
		admin_icn_edit_disable: "Disable",
	
		admin_icn_edit_create_new_category: "New Category",
		admin_icn_edit_delete_category: "Delete Category",
		admin_icn_edit_edit_category: "Edit Category",
		admin_icn_edit_disable_category: "Disable Category",
		admin_icn_edit_enable_category: "Enable Category",
		admin_icn_edit_new_category_dialog_title: "New Category",
		admin_icn_edit_edit_category_dialog_title:"Edit Category",
		admin_icn_edit_new_category_dialog_instructions: "A document category lets you associate templates with specific MIME types for the edit service. For example, you can associate a set of templates with PDF files so that users can apply templates when they add or edit files from the IBM Content Navigator Edit client. <br><br><b>Important:</b> You must save your repository configuration before you can add templates to the category you create. ",
		admin_icn_edit_edit_category_dialog_instructions: "You must save your repository configuration before you can add templates to this category. ",
		admin_icn_edit_delete_category_dialog_instructions: "Do you want to delete this category and any templates that are associated with the category?<br><br><b>Important:</b> Your changes will not be permanent until you save your changes to the repository. ",
		admin_icn_edit_category_label: "Category: ",
		admin_icn_edit_category_discription_label:"Description: ",
		admin_icn_edit_template_column_head:"Template Name",
		admin_icn_edit_category_duplicate_error_message: "A category with this ID already exists. ",
		
		admin_icn_edit_word_category_description: "This category defines the available templates for Microsoft Word documents in the edit service. ",
		admin_icn_edit_excel_category_description: "This category defines the available templates for Microsoft Excel documents in the edit service. ",
		admin_icn_edit_powerpoint_category_description: "This category defines the available templates for Microsoft PowerPoint documents in the edit service. ",

		icn_edit_add_template_dialog_title:"Add a ${0} Template",
		icn_edit_add_template_only_one_file_error: "You can select only one file.",
		icn_edit_add_template_file_type_error: "You must specify a valid ${0} template file.<br><br>The selected document has a MIME type of ${1}.<br><br>Valid MIME types: ${2}.",
		
		icn_edit_change_template_dialog_title: "Edit ${0} Template",
		
		icn_edit_action_in_new_menu_name:"${0} Document",
		icn_edit_action_in_new_menu_submenu_oo_name: "with Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "with Desktop apps",
		icn_edit_new_document_dialog_title: "New ${0} Document",
		icn_edit_new_document_dialog_intro: "Create a new ${0} document and add it to the repository. The document will be created with the selected edit service template.", 
		icn_edit_select_edit_service_template: "Select a template",
		icn_edit_edit_service_template: "Edit service template:",
		icn_edit_new_document_category_no_templates_message:"There are no templates in this category.Please contact your administrator to add templates in this category.",
		
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		
		admin_icn_cm_classes_and_roles_settings: "Class and Role Settings",
		admin_repcfg_classes_and_roles_warning: "To specify classes and users or user groups that have permission to create, edit, and use templates or create drafts of documents that work with Office Online Service and Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "click here.",
		/* Edit Service settings END */
		
		share_no_my_email_error: "There was a problem identifying the email address that is required to share the document.",
		share_no_my_email_error_explanation: "You logged in with the user ID ${0}, but the user ID is not mapped to an email address.",
		share_no_my_email_error_userResponse: "Try to log in again, or log in by using a different user ID. If the problem persists, report this error to your system administrator.",
		share_no_my_email_error_adminResponse: "The user ID ${0} is not mapped to an email address, and the desktop ${1} does not allow users to edit the email address for Box share services.<br><br>Try one of the following solutions:<br>Ensure the Email Mapping plug-in is registered.<br>Ensure the emailMappingPlugin.json file includes the user ID ${0} and user email address, and then build, configure, and register the Email Mapping plug-in.<br>If you don't want to use the Email Mapping plug-in or FileNet P8 email address directory, but instead you want to allow users to enter their own email address when they share a document, you can modify the desktop settings for Box share services to allow users to send the link from another email address.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "A later version of this document is shared, so you cannot share the selected version of this document.",
		share_later_version_shared_error_explanation: "You cannot share an earlier version of a document that was previously shared.",
		share_later_version_shared_error_userResponse: "To send the link to the later version of the document, you must first select the later version, and then use the Share action.<br><br>To share the selected version of the document, you must first delete the share for the later version of the document.",
		share_later_version_shared_error_number: 2104,
		
		/* Email Dialog */
		email_new_message: "New Message",
		email_from: "From:",
		email_to: "To:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Enter a valid email address.",
		email_subject: "Subject:",
		email_message: "Message:",
		email_message_placeholder: "Add a message",
		email_attachments: "Attachments:",
		email_links: "Links:",
		email_send: "Send",
		email_dont_send: "Don't Send",
		email_subject_reminder: "Subject reminder",
		email_subject_reminder_confirm: "Do you want to send this message without a subject?",
		
		email_missing_from_error: "There was a problem identifying the From email address that is required to send the email.",
		email_missing_from_error_explanation: "You logged in with the user ID ${0}, but the user ID is not mapped to an email address.",
		email_missing_from_error_userResponse: "Try to log in again, or log in by using a different user ID. If the problem persists, report this error to your system administrator.",
		email_missing_from_error_adminResponse: "The user ID ${0} is not mapped to an email address, and the desktop ${1} does not allow users to edit the From email address.<br><br>Try one of the following solutions:<br>Ensure the Email Mapping plug-in is registered.<br>Ensure the emailMappingPlugin.json file includes the user ID ${0} and user email address, and then build, configure, and register the Email Mapping plug-in.<br>If you don't want to use the Email Mapping plug-in or FileNet P8 email address directory, but instead you want to allow users to enter their own email address when they send an email, you can modify the Email settings for desktops to allow users to modify the From email address.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		
		open_edit_document_with_native_application_error: "The document cannot be opened.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator cannot connect to the IBM Content Navigator Edit client.",
		open_edit_document_with_native_application_error_userResponse: "Install and start the IBM Content Navigator Edit client on your workstation. Then try to open the document again.",
		open_edit_document_with_native_application_error_number: 2107,
		
		connect_to_the_streamline_service_error: "The document cannot be opened.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator cannot connect to the IBM Content Navigator Edit client.",
		connect_to_the_streamline_service_error_userResponse: "Install and start the IBM Content Navigator Edit client on your workstation. Then try to open the document again.",
		connect_to_the_streamline_service_error_number: 2108,
		
		share_not_configured_error: "IBM Content Navigator is not configured correctly for sharing documents.",
		share_not_configured_error_explanation: "The Box share feature must be configured properly before you can share documents.",
		share_not_configured_error_userResponse: "Contact your administrator and request that they configure the Box share feature.",
		share_not_configured_error_adminResponse: "The following items must be configured before sharing documents:<ul><li>The task manager service must be enabled in the administration tool settings.</li><li>The task manager connection ID must be configured in the repository.</li><li>Sharing must be enabled in the repository.</li><li>A Box repository must be selected for sharing in the desktop.</li></ul>",
		share_not_configured_error_number: 2109,
		
		checkin_cors_save_attributes_error: "The property changes were not saved for the new version",
		checkin_cors_save_attributes_error_explanation: "The version was created, but property changes were not saved. The document may still be checked out.",
		checkin_cors_save_attributes_error_userResponse: "Unlock the document and update properties using the Properties context menu item.",
		checkin_cors_save_attributes_error_number: 2110,
		
		add_cors_save_attributes_error: "The property changes were not saved for the new document",
		add_cors_save_attributes_error_explanation: "The document was created, but property changes were not saved.",
		add_cors_save_attributes_error_userResponse: "Update properties using the Properties context menu item.",
		add_cors_save_attributes_error_number: 2111,
		
		edit_document_using_edit_service_error: "The document cannot be opened.",		
		edit_document_using_edit_service_error_explanation: "The document cannot be opened in Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Ask your administrator to update the Edit Service Integration.<br><br> If the user needs to access this document from Edit Service, go to the Edit Integration page for the repository and update the Edit Service Integration to include the class in the list of classes to modify for Edit Service support.",		
		edit_document_using_edit_service_error_number: 2112,
		
		edit_document_is_editing_by_oos_error: "The document cannot be opened.",		
		edit_document_is_editing_by_oos_error_explanation: "The document is in use by the Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "You must save and close the document in the Office Online Service before you can open it in the Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		
		admin_enable_cors: "Enable Cross-Origin Resource Sharing (CORS) uploads",

		/* Email Settings */
		admin_email_settings: "Email settings:",
		admin_email_settings_hover: "Specify the type of email service that you want users to use. When you enable the HTML-based email service, you have the option to allow users to modify their From email address. If you want to enable the Java-based email service, you must have a browser that supports Java.",
		admin_email_use_service: "Use the HTML-based email service",
		admin_email_use_applet: "Use the Java-based email service",
		admin_email_can_modify_from: "Allow users to modify the From email address",
		admin_email_can_modify_from_hover: "By default, the From email address cannot be modified and is obtained from a mapping of users and email addresses that represent user accounts.<br><br>Select this option to allow users to edit their email address when they send an email; however, the validity of the email address is not verified.",
		admin_email_use_from_as_sender: "Use the From email address as the sender of the email",
		admin_email_use_from_as_sender_hover: "By default, a valid From email address is used in a user's email. That email address is defined by the CNMailSession mail session on the application server. Select this option to specify that the user's email address be used in the email.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "New Annotations",
		addAnnotationDlg_labelContents: "Contents:",
		addAnnotationDlg_labelAccess: "Access:",
		addAnnotationDlg_labelPublic: "Public",
		addAnnotationDlg_labelPrivate: "Private",
		addAnnotationDlg_labelPrivateGroup: "Private for group",
		addAnnotationDlg_labelGroup: "Group",
		addAnnotationDlg_labelCopiable: "This annotation can be copied to another server.",
		addAnnotationDlg_buttonLabel_save: "Save",

		/* Skip navigation */
		skipNavigation_title_main: "Skip to main content",
		skipNavigation_title_menu: "Skip to navigation buttons",
		skipNavigation_label_main: "Skip to main content",
		skipNavigation_label_menu: "Skip to navigation buttons",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Manage Teamspaces",
		manage_teamspace_pane_instance_hdr: "Teamspaces",
		manage_teamspace_pane_template_hdr: "Templates",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Scroll forward",
		scroll_back: "Scroll back",

		breadcrumb_separator_open: "Open node",
		breadcrumb_separator_close: "Close node",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "No item is selected.",

		/* eds */
		eds_url: "External Data Service URL:",
		eds_request_timeout: "Service Request Timeout (seconds):",
		eds_is_required: "Prevent users from taking actions that change the values of properties when EDS is unavailable",

		/* eforms */
		eform_signing_pane_welcome: "Sign the Form",
		eform_signing_button_label: "Sign",
		eform_signing_pane_delete: "Delete the Signature",
		eform_signing_button_label_delete: "Delete",

		xtplugin_server_label: "IBM FileNet Workplace XT server URL",
		xtplugin_server_hover: "Enter the URL of the server where IBM FileNet Workplace XT is deployed, for example, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "IBM eClient server URL",
		ecplugin_server_hover: "Enter the URL of the server where IBM eClient is deployed, for example, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Actions on a large number of items might take a long time. Do you want to continue?",
		large_number_actions_continue_button: "Continue",

		large_items_actions_confirmation_question: "Actions on large items might take a long time. Do you want to continue?",

		viewer_editproperties_title: "Confirmation",
		viewer_editproperties_title_warning: "Warning",
		viewer_editproperties_save: "Save",
		viewer_editproperties_next: "Next",
		viewer_editproperties_reset: "Reset",
		viewer_editproperties_reset_hover: "Any unsaved data will be reset to the previously saved values",
		viewer_editproperties_saveandgetnext: "Save then get next",
		viewer_editproperties_saveandgetnext_hover: "Automatically get the next document after I save my changes",
		viewer_editproperties_prompt_save_changes: "You changed the properties of the following document<br>${0}<br><br>Do you want to save your changes?",
		viewer_editproperties_prompt_discard_changes: "You changed the properties of the following document<br>${0}<br><br>However, one or more of the properties has an invalid value, so the changes cannot be saved. You can either correct the invalid values, or discard your changes.<br>Do you want to correct the invalid values shown on the properties pane?",
		viewer_comments_prompt_discard_changes: "You modified the comments. Do you want to save your changes?",
		viewer_notelogs_prompt_discard_changes: "You modified the notelogs. Do you want to save your changes?",
		
		social_collaborated_version: "Version: ${0}",
		social_link_label: "Who...",

		// social comments
		comments: "Comments",
		comments_add_hint: "Press Enter to add your comments.",
		comments_hint: "Enter your comments.",
		comments_label: "Press Enter or Tab to save your comments. Press Esc to cancel.",
		comments_delete_confirmation: "Do you want to delete the selected comment?",
		comments_number: "Comments: ${0}",
		comments_save_new: "You modified the comments. Do you want to close the window without saving your changes?",

		notelogs: "Notelogs",
		notelogs_download: "Download",
		notelog_modify: "Save Changes",
		notelog_edit: "Edit Notelog",
		notelog_create_newVersion: "Create a New Notelog Version",
		notelog_add_hint: "Enter your comments and press Enter to add.",
		notelog_hint: "Press Shift+Enter for line feed",
		notelog_add_placeholder: "Press Enter to add comment to notelog.",
		notelog_save_new: "You modified the notelog. Do you want to close the window without saving your changes?",

		// P8 markings related
		cannot_remove_markings: "You do not have permission to remove the marking value(s): {0}",

		// download count
		downloadcount: "Downloads: {0}",
		downloadcount_single: "1 download",
		downloadcount_multiple: "{0} downloads",
		downloadcount_none: "No one has downloaded this yet",

		// recommendations
		recommendations: "Likes: {0}",
		recommendations_recommend: "Like this",
		recommendations_unrecommend: "Unlike this",
		recommendations_you: "You like this",
		recommendations_you_and_another: "You and 1 other person like this",
		recommendations_you_and_others: "You and {0} others like this",
		recommendations_another: "1 person likes this",
		recommendations_others: "{0} people like this",
		recommendations_none: "No one has liked this yet",

		// tags
		tags: "Tags: ${0}",
		tags_delete: "Delete ${0}",
		tags_none: "There are no tags to display.",
		tags_add: "Add tags:",
		tags_hint: "Press Enter to add your tags.",
		tags_hover_help: "Specify a tag or a list of tags that can be used to search for documents with the same tag. You can use a comma (,), a semicolon (;), or a space to separate the tags.",
		tags_hover_help_box: "Specify a tag or a comma-separated list of tags that can be used to search for documents with the same tag.",
		tags_no_access: "You do not have the appropriate permissions to add tags.",

		//task scheduler pane
		taskPane_tooltip: "Open Asynchronous Tasks View",
		taskPane_tree: "Task Pane Navigation Tree",
		taskPane_allTasks: "All Tasks",
		taskPane_scheduledTasks: "Scheduled Tasks",
		taskPane_recurringTasks: "Recurring Tasks",
		taskPane_inProgressTasks: "In-Progress Tasks",
		taskPane_completedTasks: "Completed Tasks",
		taskPane_failedTasks: "Failed Tasks",
		taskPane_disabledTasks: "Disabled Tasks",
		taskPane_statusScheduled: "Scheduled",
		taskPane_statusInProgress: "In-Progess",
		taskPane_statusCompleted: "Completed",
		taskPane_statusFailed: "Failed",
		taskPane_statusPaused: "Paused",
		taskPane_noItemSelected: "No item selected",
		taskSchedulerPane_scheduleInformation: "Schedule Information",
		taskSchedulerPane_loginInformation: "Login Information",
		taskSchedulerPane_startImmediately: "Start immediately",
		taskSchedulerPane_recurrence: "Recurrence",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Schedule report",
		taskSchedulerPane_nameHoverHelp: "Enter the name of the task.",
		taskSchedulerPane_descriptionHoverHelp: "Enter a description for the task. The description should help you distinguish between tasks.",
		taskSchedulerPane_startTimeHoverHelp: "Specify when you want the task to run. To run the task now, select Start Immediately.",
		taskSchedulerPane_recurrenceHoverHelp: "You can schedule the task to run on an recurring basis.",
		taskSchedulerPane_endTimeHoverHelp: "Specify when you want the task to stop running. The task runs from the scheduled start time to the scheduled end time.",
		taskSchedulerPane_usernameHoverHelp: "For recurring tasks, you must enter a user name to enable the service to authenticate when the task runs.",
		taskSchedulerPane_passwordHoverHelp: "For recurring tasks, you must enter the password of the specified user to enable the service to authenticate when the task runs.",
		taskSchedulerPane_notification: "Notification",
		taskSchedulerPane_emailAddress: "Email address",
		taskSchedulerPane_emailAddressHoverHelp: "Enter the email address where you want to receive notifications about the status of the task.",
		taskSchedulerPane_intervalHoverHelp: "Specify the length of time over which the recurring task will run. You can set the interval in hours, days, weeks, or months.",
		taskSchedulerPane_scheduledStartTime: "Scheduled start time",
		taskSchedulerPane_startTime: "Start time",
		taskSchedulerPane_title: "Schedule",
		taskSchedulerPane_runNow: "Run now",
		taskSchedulerPane_runOnce: "Run once",
		taskSchedulerPane_runAtSchedule: "Run on a schedule",
		taskSchedulerPane_repeats: "Repeats",
		taskSchedulerPane_repeatsEvery: "Repeats every",
		taskSchedulerPane_hourly: "Hourly",
		taskSchedulerPane_daily: "Daily",
		taskSchedulerPane_weekly: "Weekly",
		taskSchedulerPane_monthly: "Monthly",
		taskSchedulerPane_yearly: "Yearly",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Start date",
		taskSchedulerPane_after: "After",
		taskSchedulerPane_ending: "End date",
		taskSchedulerPane_times: "time(s)",
		taskSchedulerPane_days: "day(s)",
		taskSchedulerPane_hours: "hour(s) within the day",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Ending (in days)",
		taskSchedulerPane_never: "Never",
		taskSchedulerPane_categorization: "Categorization",
		taskSchedulerPane_scheduleTask: "Schedule Task",
		taskInformationPane_details: "Details",
		taskInformationPane_errors: "Errors",
		taskInformationPane_taskInstances: "Task Instances",
		taskInformationPane_audits: "Audits",
		taskInformationPane_results: "Results",
		asyncTasks: "Asynchronous Tasks",

		//entry template pane
		search_all_entry_templates: "Search all entry templates.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "View Full Site",
		mobilesite: "View Mobile Site",
		profile: "Manage Profile",
		
		office_template: "Office template:",
		select_office_template: "Select an office template",
		
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "The selected documents cannot be opened in the viewer with the Merge and Split action.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "The viewer configured for PDF and TIFF documents does not support the Merge and Split action.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Ask your administrator to configure a viewer for PDF and TIFF documents that supports the Merge and Split action such as the Daeja ViewONE Virtual viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "The selected PDF documents cannot be opened in the viewer with the Merge and Split action.",
		document_builder_pdf_unsupported_viewer_error_explanation: "The viewer configured for PDF documents does not support the Merge and Split action.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Ask your administrator to configure a viewer for PDF documents that supports the Merge and Split action such as the Daeja ViewONE Virtual viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "The selected TIFF documents cannot be opened in the viewer with the Merge and Split action.",
		document_builder_tiff_unsupported_viewer_error_explanation: "The viewer configured for TIFF documents does not support the Merge and Split action.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Ask your administrator to configure a viewer for TIFF documents that supports the Merge and Split action such as the Daeja ViewONE Virtual viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "The selected documents cannot be opened in the viewer with the Merge and Split action.",
		document_builder_unsupported_documents_error_explanation: "The Merge and Split action works only with PDF and TIFF documents.",
		document_builder_unsupported_documents_error_userResponse: "Select supported documents and try again.",
		document_builder_unsupported_documents_error_number: 3003,		
		
		document_builder_some_unsupported_documents_error: "Some of the selected documents cannot be opened in the viewer with the Merge and Split action.",
		document_builder_some_unsupported_documents_error_explanation: "The Merge and Split action works only with PDF and TIFF documents opened from the same repository.",
		document_builder_some_unsupported_documents_error_userResponse: "The supported documents will be opened in the viewer.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "An error occurred when checking in the modified content.",
		document_builder_checkin_failed_explanation: "The viewer received an error response while checking in the modified content.",
		document_builder_checkin_failed_userResponse: "Ask your system administrator to review the web application server log files.",
		document_builder_checkin_failed_number: 3005,
		
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "The document cannot be opened.",
		no_viewer_to_view_error_explanation: "The system administrator has blocked viewing for this document. If you need to access this document, you can download it.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "The content could not be built.",
		document_build_failed_userResponse: "Ask your system administrator to review the viewer log files.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "The document could not be opened in Merge and Split mode.",
		document_builder_open_failed_userResponse: "Ask your system administrator to review the viewer log files.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "The system could not switch to Merge and Split mode.",
		document_builder_switch_failed_userResponse: "Ask your system administrator to review the viewer log files.",
		document_builder_switch_failed_number: 3009,		
		
		// print service
		print_service_document_options_tab_title: "Documents",
		print_service_page_setup_tab_title: "Page Setup",
		print_service_OD_print_tab_title: "Printer Options",
		print_service_status_merging: "Merging documents...",
		print_service_status_converting: "Converting documents...",
		print_service_status_formatting: "Formatting document for printing...",
		admin_print_service_maximum_number_to_print: "Maximum number of documents allowed for print:",
		admin_print_service_maximum_number_to_print_hover_text: "Specify the maximum number of documents that users can print at a time. The default maximum is 10.",
		
		// error printing
		print_service_error_printing: "An error ocurred during printing.",
		print_service_error_printing_userResponse: "Ask your system administrator to review the print service log files.",
		print_service_error_printing_number: 3100,

		// print too many selected error
		print_service_max_number_selected_error: "The items cannot be printed.",
		print_service_max_number_selected_error_explanation: "You can print up to ${0} items at a time. You are trying to print ${1} items.",
		print_service_max_number_selected_error_userResponse: "Select fewer items and try to print the items again. You can also contact your system administrator to increase the maximum number of items that you can print at one time from this desktop.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		
		/*do not remove this line*/nop: null
	}),
	"ar": true,
	"bg": true,
	"ca": true,
	"cs": true,
	"da": true,
	"de": true,
	"el": true,
	"es": true,
	"fi": true,
	"fr": true,
	"he": true,
	"hr": true,
	"hu": true,
	"it": true,
	"iw": true,
	"ja": true,
	"kk": true,
	"ko": true,
	"nb-no": true,
	"nl": true,
	"no": true,
	"pl": true,
	"pt": true,
	"pt-br": true,
	"ru": true,
	"sk": true,
	"sl": true,
	"sv": true,
	"th": true,
	"tr": true,
	"zh": true,
	"zh-tw": true,
	"ro": true,
	"vi": true
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define({


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
		welcome_user: "שלום, ",
		about: "אודות",
		all: "הכל",
		help: "עזרה",
		user_session: "מהלך עבודה של משתמש",
		user_session_for: "הפעלת משתמש עבור ${0}",
		user_session_for_with_container: "הפעלת משתמש עבור ${0} (${1})",
		tools: "כלים",
		login: "התחברות",
		logout: "התנתקות",
		search: "חיפוש",
		saved_searches: "חיפושים שנשמרו",
		content_analytics: "ניתוח תוכן",
		reset: "איפוס",
		reset_hover: "נתונים שלא נשמרו בכל הלשוניות יוחזרו לערכים השמורים הקודמים שלהם.",
		reset_default: "ניקוי הכל",
		reset_default_hover: "ניקוי שדות התווית הנוכחיים בכל הלשוניות.",
		locale: "אזור:",
		up: "למעלה",
		down: "למטה",
		restore: "שחזור",
		maximize: "הגדלה",
		values_label: "ערכים",
		value_label: "ערך:",
		path_label: "נתיב:",
		new_label: "חדש:",
		back_label: "אחורה",
		clear: "ניקוי",
		set: "הגדרה",
		browse: "עיון",
		work: "עבודה",
		connect: "חיבור",
		documents: "מסמכים:",
		copyright: "‎(c) Copyright 2012, 2016 IBM Corp. IBM and the IBM logo are trademarks of IBM Corporation, registered in many jurisdictions worldwide.‎ Java and all Java-based trademarks and logos are trademarks or registered trademarks of Oracle and/or its affiliates. The Oracle Outside In Technology included herein is subject to a restricted use license and can only be used in conjunction with this application.‎ תוכנית זו ברשיון תחת תנאי הסכם הרשיון המצורף לתוכנית.  הסכם הרשיון נמצא במדריך תוכניות או בספריית תוכנית ומזוהה בשם \"License\" או \"Non IBM License\", אם רלוונטי, או מסופק כהסכם רשיון מודפס. קראו הסכם זה במלואו לפני השימוש בתוכנית. על-ידי שימוש בתוכנית אתם מסכימים לתנאים אלה. ",
		edit: "עריכה",
		cancel: "ביטול",
		close: "סגירה",
		close_all: "סגירת כל הלשוניות",
		close_others: "סגירת לשוניות אחרות",
		ok: "אישור",
		yes: "כן",
		no: "לא",
		open: "פתיחה",
		refresh: "רענון",
		refresh_cabinets: "רענון כל קובצי CAB",
		delete_text: "מחיקה",
		export_config: "יצוא תצורה",
		description: "תיאור",
		true_label: "True",
		false_label: "False",
		error: "שגיאה",
		error_reference_hover: "למידע נוסף בנוגע לשגיאה זו ניתן לחפש בwww.ibm.com.",
		url_label: "URL",
		default_label: "ברירת מחדל",
		ibm_label: "IBM",
		light_label: "בהיר",
		dark_label: "כהה",
		save: "שמירה",
		saveAs: "שמירה בשם...",
		save_and_close: "שמירה וסגירה",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "ללא",
		Name: "שם",
		"${NAME}": "שם",
		mime_type: "סוג MIME",
		mime_type_contains_label: "סוג MIME מכיל",
		mime_type_header: "סוג MIME",
		mime_type_icon: "איקון סוג MIME",
		casesearch: "מקרה",
		item: "פריט",
		no_mime_type: "הפריט אינו מכיל תוכן.",
		items_selected: "${0} פריטים נבחרו.",
		requestor: "התבקש על ידי",
		scheduledStartTime: "שעת התחלה מתוזמנת",
		isRecurring: "האם חוזר",
		weeks: "שבועות",
		days: "ימים",
		hours: "שעות",
		endTime: "שעת סיום",
		username: "שם משתמש",
		password: "סיסמה",
		serverURL: "URL שרת",
		enable: "הפעלה",
		disable: "השבתה",
		finish: "סיום",
		previous: "הקודם",
		next: "הבא",
		schedule: "תזמון",
		removeFromThisList: "סילוק מרשימה זו",
		status: "מצב",
		scheduledEndTime: "שעת סיום מתוזמנת",
		type: "סוג",
		mode: "מצב",
		startTime: "מועד התחלה",
		createdBy: "נוצר על ידי",
		nextScheduledTime: "השעה המתוזמנת הבאה",
		id: "זיהוי",
		duration: "משך",
		repeatCycle: "תדירות",
		taskTypeName: "סוג משימה",
		to: "עד",
		filter: "מסנן:",
		error_message: "הודעת שגיאה",

        file_type: "סוג מסמך",
        word_template_name: "שם תבנית Word",
        excel_template_name: "שם תבנית Excel",
        powerpoint_template_name: "שם תבנית PowerPoint",
        template_description: "תיאור תבנית",
        action_add_template: "הוספה",
        action_change_template: "עריכה",      
        action_edit_template_properties: "תכונות",
        add_presentation_template: "הוספת תבנית מצגת",
    	add_spreadsheet_template: "הוספת תבנית גליון אלקטרוני",
    	add_doc_template: "הוספת תבנית מסמך",    	
    	file_type_doc_hover: "יש לציין קובץ תבנית חוקי של מסמך עיבוד תמלילים.<br><br>סוגי MIME חוקיים: ${0}",
    	file_type_doc_error: "יש לציין קובץ תבנית חוקי של מסמך עיבוד תמלילים.<br><br>סוג mime של המסמך שנבחר: ${0}<br><br>סוגי MIME חוקיים: ${1}",
    	file_type_presentation_hover: "יש לציין קובץ תבנית חוקי של מסמך מצגת.<br><br>סוגי MIME חוקיים: ${0}",
    	file_type_presentation_error: "יש לציין קובץ תבנית חוקי של מסמך מצגת.<br><br>סוג mime של המסמך שנבחר: ${0}<br><br>סוגי MIME חוקיים: ${1}",
    	file_type_spreadsheet_hover: "יש לציין קובץ תבנית חוקי של מסמך גליון אלקטרוני.<br><br>סוגי MIME חוקיים: ${0}",
    	file_type_spreadsheet_error: "יש לציין קובץ תבנית חוקי של מסמך גליון אלקטרוני.<br><br>סוג mime של המסמך שנבחר: ${0}<br><br>סוגי MIME חוקיים: ${1}",
    	office_online_only_one_template_error: "באפשרותכם לבחור רק בקובץ אחד.",
    	change_presentation_template: "עריכת תבנית מצגת",
    	change_spreadsheet_template: "עריכת תבנית גיליון נתונים",
    	change_doc_template: "עריכת תבנית מסמך",
    	change_button: "עריכה",
	    new_document_dialog_doc_title: "מסמך חדש",
	    new_document_dialog_presentation_title: "מצגת חדשה",
	    new_document_dialog_spreadsheet_title: "גליון אלקטרוני חדש",
	    new_document_dialog_title_label: "כותרת:",
	    new_document_dialog_title_hover: "ציינו כותרת עבור מסמך זה.",
	    new_document_dialog_title_missing_message: "יש לציין כותרת.",
	    office_online_save_before_adding_templates_title: "שמרו את השינויים במאגר",
	    office_online_save_before_adding_templates_error: "לא ניתן להוסיף תבניות Office עד שתשמרו את השינויים שביצעתם במאגר. לחצו על <b>שמירה וסגירה</b>, ואז פתחו מחדש את המאגר והוסיפו תבניות Office.",
	    copy_to_OOS_dialog_doc_title: "מסמך חדש",
	    office_online_checkin_cancelcheckout_message: "מסמך זה נמצא בעריכה ב-Microsoft Office Online. אין באפשרותכם להפקיד מסמך זה או לבטל את המשיכה כל עוד הוא פתוח ב-Microsoft Office Online.",
	    new_document_classification: "סיווג:",
	    new_document_classification_help: "מאפס את המחלקה, התכונות ותיקיית האב, אם ישנה תיקיית אב, של מסמך המקור. בעת הוספת מסמך באמצעות תבנית רשומה, תבנית הרשומה של מסמך המקור תיבחר באופן אוטומטי אם יש כזו. תכונות מסמך המקור משמשות כערכי ברירת המחדל, אך התיקייה והמחלקה המצוינות בתבנית הרשומה נשמרות.",
		new_document_classification_use_source_document: "שימוש במסמך מקור",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "איקון מסוג ${0}",
		repository_name_and_type: "${0} שם וסוג",
		select_class_label: "בחירת ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "תצוגת פרטים",
		detail_view_button: "פרטים",
		magazine_view_button_tooltip: "תצוגת מחסנית",
		magazine_view_button: "מחסנית",
		filmstrip_view_button_tooltip: "תצוגת סרט צלולואיד",
		filmstrip_view_button: "סרט צלולואיד",

		magazine_view_show: "הצגה בתצוגת מגזין",
		detail_view_show: "הצגה בתצוגת פרטים",

		total_count_item: "פריט",
		total_count_items: "פריטים",
		total_count_more_items: "יותר מ-${0} פריטים",

		extension_changed: "הרחבת הקובץ הנבחר אינה תואמת להרחבת המקור.  יש לבחור קובץ אחר.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "המציג הנבחר לא תומך בכל סוגי הקבצים. אם תשמרו מיפוי מציג זה, יתכן שתיתקלו בבעיות בזמן הצגת מסמכים. מומלץ לבחור מציג התומך בכל סוגי הקבצים כשנבחרת האפשרות 'כל סוגי הקבצים'.‏<br><br><b>עצה:</b> המציגים הבאים תומכים בכל סוגי הקבצים:<ul><li>מציג יישומונים</li><li>מציג AJAX</li><li>המרת HTML</li><li>המרת PDF</li><li>דפדפן</li></ul>",
		file_type_any: "כל סוגי הקבצים",
		file_type_any_hover: "בחרו אפשרות זו אם ברצונכם להשתמש במציג שנבחר להצגת כל המסמכים, ללא תלות בסוג קבצים. אפשרות זו נתמכת עבור המציגים האלה:<br><br><ul><li>מציג יישומונים</li><li>מציג AJAX</li><li>המרת HTML</li><li>המרת PDF</li><li>דפדפן</li></ul><br><br><b>זכרו:</b> אם ברצונכם להשתמש במציגים ספציפיים רוב הזמן, העבירו מיפויים המשתמשים באפשרות זו לסוף מפת המציג שלכם. ",
		file_type_input: "סוג קובץ חדש:",

		mime_type_input: "סוג MIME חדש:",
		mime_type_input_invalid: "סוג MIME החדש אינו יכול לכלול תו כלשהו מהתווים האלה: ,",
		mime_type_available: "סוגי MIME זמינים",
		mime_type_selected: "סוגי MIME שנבחרו",
		file_type_input: "סוג קובץ חדש:",
		file_type_input_invalid: "סוג הקובץ החדש אינו יכול לכלול תו כלשהו מהתווים האלה: ,",
		file_type_available: "סוגי קבצים זמינים",
		file_type_selected: "סוגי קבצים שנבחרו",
		file_type_header: "סוג קובץ",
		viewer: "מציג:",
		viewer_viewer: "מציג",
		viewer_view: "הצגה",
		viewer_preview: "תצוגה מקדימה",
		viewer_merge_and_split: "מיזוג ופיצול",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "תצוגה מקדימה בלבד",
		preview_only_label: "(מקדימה בלבד)",
		preview_only_hover: "ייעשה שימוש במיפוי מציג זה רק כשמשתמש ילחץ על <b>תצוגה מקדימה</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "מאגר זה אינו תומך בעיון. נא לבחור מאגר אחר.",

		repository_community_teamspace_message: "מאגר אחר כבר הוקצה כמאגר הספריה של הקהילה. אם ברצונכם להמשיך להשתמש במאגר הקיים כמאגר הספריה של הקהילה, בחרו <b>לא</b> לפני שמירת השינויים כדי למנוע החלפה של המאגר הקיים במאגר זה.",

		favorites_empty: "לא הגדרתם מועדפים.",
		syncItems_empty: "אין לכם קבצים מסונכרנים עדיין.",

		root_folder_id: "זיהוי תיקיית יסוד",
		unified_searches: "חיפושים חוצי-מאגרים:",
		max_results: "מספר תוצאות:",
		direct_retrieve_enabled: "אחזור ישיר:",
		itemTypesToDisplay: "סוגי פריטים להצגה:",
		allItemTypes: "כל סוגי הפריטים",
		include_attr_group_name: "תיאורי קבוצת מאפיינים בשמות להצגה של מאפיינים:",
		admin_repcfg_include_attr_group_name_hover: "כברירת מחדל, תיאור קבוצת המאפיינים כלול בשמות של מאפיינים בקבוצת המאפיינים. הדבר מסייע למשתמשים לראות לאיזו קבוצת מאפיינים שייך המאפיין כשהם עובדים עם מאפיינים.<br>לדוגמה, יתכן שמשתמשו יראו את השם שלהלן עבור מאפיין בקבוצת מאפיינים: Document Settings.Document Type.<br><br>אם תשביתו אפשרות זו, רק תיאור המאפיין כיכלל בשם של מאפיין בקבוצת מאפיינים.<br>לדוגמה, משתמשים יראו שם זה: Document Type.‏<br><br>ללא תיאור קבוצת המאפיינים, יתכן שמשתמשים לא יידעו אם Document Type הוא המאפיין הפשוט או מאפיין מקבוצת מאפיינים.",
		documentItemTypesOnly: "סוגי פריטים של מודל מסמך בלבד",
		object_store: "שם סימבולי של מאגר אובייקטים:",
		object_store_display_name: "שם להצגה של מאגר אובייקטים:",
		teamspaceUpgradeMsg: "מרחב הצוות שלכם יעודכן כשתשמרו את תצורת המאגר. אם יש לכם מרחבי צוות רבים, יתכן שהעדכון יארך כמה דקות.",
		synchUpgradeMsg: "מודול הסינכרון במאגר זה יעודכן כשתשמרו את תצורת המאגר.",
		protocol: "פרוטוקול:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "זיהוי מאגר CMIS:‏",
		cmis_url: "URL מסמך שירות קשירה של של CMIS AtomPub",
		trace_level: "רמת מעקב",
		trace_dir: "מדריך מעקב",
		temp_dir: "מדריך זמני",
		show_document_location: "הצגת מיקום מסמך",
		max_folders: "מספר מרבי של תיקיות",
		afp_conversion: "המרת AFP",
		line_conversion: "המרת נתוני שורה",
		max_hits: "מספר פגיעות מרבי",
		folder_search_expresssion: "ביטוי לחיפוש תיקיות",
		max_item_types: "מספר מרבי של סוגי פריטים",
		max_worklists: "מספר מרבי של רשימות עבודה",
		update_storage_collection: "עדון אוסף אחסון",
		include_mime_types_in_search_results: "הכללת סוגי MIME בתוצאות החיפוש",
		object_type: "סוג אובייקט",
		object_type_document: "מסמכים",
		object_type_folder: "תיקיות",
		file_label: "קובץ:",
		plugin_jarfile_path_label: "נתיב קובץ JAR:‏",
		plugin_classfolder_path_label: "נתיב קובץ מחלקות:",
		plugin_classname_label: "שם מחלקה:",
		plugin_id_label: "זיהוי תוסף:",
		class_label: "מחלקה",
		configuration: "תצורה",
		connect_repository: "התחברות...‏",
		server_type: "סוג שרת",
		timeout_in_seconds: "מגבלת זמן (בשניות):",
		default_search_template: "חיפוש ברירת מחדל",
		search_filtered_properties: "תכונות המאפשרות חיפוש",
		property_contains_label: "התכונה מכילה",
		class_contains_label: "המחלקה מכילה",
		search_filtered_operators: "אופרטורים של חיפוש",
		default_search_results: "תוצאות חיפוש",
		data_type: "סוג נתונים",
		status_bar: "סרגל מצב",
		operators_for: "אופרטורים עבור:",
		currentUser: "משתמש נוכחי",
		nameContains: "השם מכיל",
		searchFor: "חיפוש",
		server_autentication: "אימות בשרת (פרוטוקול OAuth 2.0 עם JWT)",
		standard_authentication: "אימות תקן (פרוטוקול 2.0 בעל 3 רגליים)",
		developer_authentication: "אימות מפתח",
		enterprise_id: "זיהוי ארגון:",
		public_key_id: "מפתח זיהוי ציבורי:",
		private_key_path: "נתיב קובץ מפתח פרטי:",
		server_user_email: "דואל משתמש שרת",

		filter_builder_tooltip: "הגדרת מסנן",

		// Launch bar
		launchbar_home: "פתיחת דף הבית",
		launchbar_favorites: "פתיחת מועדפים",
		launchbar_browse: "פתיחת תצוגת העיון",
		launchbar_browse_popup: "פתיחת הרשימה הצצה 'עיון'",
		launchbar_search: "פתיחת תצוגת החיפוש",
		launchbar_search_popup: "פתיחת הרשימה הצצה 'חיפוש'",
		launchbar_teamspaces: "פתיחת תצוגת מרחבי הצוות",
		launchbar_teamspaces_popup: "פתיחת הרשימה הצצה 'מרחבי צוות'",
		launchbar_work: "פתיחת תצוגת העבודה",
		launchbar_work_popup: "פתיחת הרשימה הצצה 'עבודה'",
		launchbar_entry_templates: "פתיחת תצוגת תבניות הקלט",
		launchbar_entry_templates_popup: "פתיחת רשימה צצה של תבניות קלט",
		launchbar_admin: "פתיחת תצוגת המנהלה",

		admin_sync_server: "שירותי סינכרון",
		admin_settings: "הגדרות",
		admin_interface_text: "תוויות",
		admin_interface_text_desktop: "שולחן עבודה:",
		admin_desktops: "שולחנות עבודה",
		admin_repositories: "מאגרים",
		admin_mobile: "התקנים ניידים",
		admin_menus: "תפריטים",
		admin_reason_codes: "סיבה לעריכה",
		admin_plugins: "תוספים",
		admin_plugins_state_enabled: "התוסף מופעל",
		admin_plugins_state_disabled: "התוסף מושבת",
		admin_plugins_version: "גרסה:",
		admin_plugins_version_heading: "גירסה",
		admin_plugins_icon: "איקון של התוסף",
		admin_viewer_mapping_icon: "איקון מיפוי מציג",
		admin_viewer_defs: "מפות מציגים",
		admin_viewer_dialog_title: "מיפוי",
		admin_viewer_dialog_new_title: "מיפוי חדש",
		admin_viewer_dialog_instructions: "מיפוי מציין איזה מציג ישמש עבור הקבצים במאגר. תוכלו ליצור מיפויים מרובים לציון מציגים שונים עבור סוגי קבצים שונים. ניתן להשתמש בסוג MIME או בסיומת קובץ כדי להגדיר מיפוי. מיפויים עם סיומות קבצים ימופו לשמות מסמכים. לדוגמה, מיפוי שסוג הקובץ הוגדר בו כ-gif ימופה לשמות מסמכים שמסתיימים בסיומת ‎.gif",
		admin_desktop_viewer_defs: "מפת מציגים:",
		admin_desktop_viewer_defs_hover: "מפת המציגים מציינת איזה מציג ישמש לפתיחת סוגי מסמכים שונים במאגר.<br><br>תוכלו לציין תצורות מציגים חדשות בחלק <b>מפות מציגים</b> של כלי המנהלה.",
		admin_desktops_used: "בשימוש בשולחנות עבודה",
		admin_desktop_additional_settings: "הגדרות נוספות:",
		admin_default_desktop: "הגדרה כשולחן עבודה מחדלי",
		admin_default_desktop_header: "שולחן עבודה מחדלי",
		admin_layout_tab_title: "מתכונת",
		admin_desktop_icon: "איקון שולחן עבודה",

		// Themes
		admin_themes: "ערכות",
		admin_theme_list_instructions: "תוכלו ליצור ערכה כדי להקל על התאמת לקוח הדפדפן עבור הארגון שלכם. תוכלו ליצור ערכות מרובות אם ברצונכם להשתמש בצבעים, גופנים או סמלילים מרובים עבור שולחנות עבודה שונים בסביבה שלכם.<br><br>לאחר שתיצרו ערכה, תוכלו להחיל אותה על שולחן עבודה. לשם כך, הגדירו את הערכה בלשונית <b>מראה</b> של שולחן העבודה.",
		admin_theme_instructions: "צרו ערכה כדי לשלוט בצבעים וגופנים המוצגים בלקוח הדפדפן. בנוסף, תוכלו להשתמש בערכה כדי לשנות את הלוגו, שם היישום ותמליל זכויות היוצרים המוצגים בדף ההתחברות ובכרזה.",
		admin_theme_heading: "ערכה: <b>${0}</b>",
		admin_new_theme: "ערכה חדשה",
		admin_text_theme: "ערכה",
		admin_delete_confirmation_themes: "האם ברצונכם למחוק את הערכות שנבחרו?\n${0} ערכות נבחרו.",
		admin_theme_color: "צבע",
		admin_theme_text: "תמליל",
		admin_theme_solid: "מלא",
		admin_theme_gradient: "מדורג",
		admin_theme_box: "Box",
		admin_theme_color_label: "צבע ${0}:",
		admin_theme_name_invalid: "שם הערכה אינו יכול לכלול את התווים האלה: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "זיהוי הערכה חייב להיות ייחודי, ולא ניתן לשנותו לאחר שמירת הערכה.<br><br>הזיהוי יכול להכיל רק תווים אלפאנומריים.",
		admin_theme_name_hover: "השם אינו יכול לכלול את התווים האלה:  * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "אוטומטי",
		admin_theme_logo_url_hover: "ציינו את ה-URL של קובץ הלוגו. אם הלוגו נמצא בשרת היישומים של לקוח הדפדפן, ציינו URL יחסי. לדוגמה: ‎/mycustomizations/plug-in.png<br><br>מומלץ שללוגו יהיה רקע שקוף.",
		admin_theme_color_palette_title_heading: "ערכת צבעים",
		admin_theme_color_palette_help_text: "צרו את ערכת הצבעים עבור הערכה שלכם באמצעות הערך ההקסדצימלי או בורר הצבעים. תוכלו להוסיף צבעים רבים ככל שתרצו.",
		admin_theme_color_add_button_label: "הוספת צבע",
		admin_theme_color_remove_button_label: "סילוק צבע",
		admin_theme_global_title_heading: "מרכיבים בכל חלקי היישום",
		admin_theme_global_font: "משפחת גופנים:",
		admin_theme_global_font_hover: "בחרו את הגופן לשימוש בלקוח הדפדפן. הגופנים רשומים לפי סדר קדימות; ייעשה שימוש בגופן הבא ברשימה רק אם הגופן הקודם אינו מותקן במחשב הלקוח.",
		admin_theme_global_framework_color_label: "צבע מסגרת:",
		admin_theme_global_framework_color_hover: "בחרו את הצבע לשימוש עבור המרכיבים שלהלן:<ul><li>פס כותרת בתיבות דו-שיח</li><li>צבע ההבלטה בראש הלשונית הנבחרת</li><li>איקוני תצוגות של רשימות תוכן (תצוגת פרטים, תצוגת מגזין, תצוגת סרט צלולואיד)</li></ul><br>צבע זה אינו משמש עבור המפרידים בין החלקים בלקוח הדפדפן. אם ברצונכם לשנות את צבע המפריד, תצטרכו ליצור תוסף שיספק קובץ CSS מותאם.",
		admin_theme_color_global_toolbar: "צבע סרגל כלים גלובלי:",
		admin_theme_color_global_toolbar_hover: "אם אתם כוללים את סרגל הכלים הגלובלי בלקוח הדפדפן, בחרו את הצבע של סרגל הכלים.<br><br><b>עצה:</b> סרגל הכלים מוצג בכרזה בראש לקוח הדפדפן, כך שצבע סרגל הכלים צריך להתאים לצבע הכרזה.",
		admin_theme_global_selected_color: "צבע פריט נבחר:",
		admin_theme_global_selected_color_hover: "בחרו את הצבע לשימוש כאשר פריטים נבחרים בעץ העיון, בעץ החיפוש וברשימת התוכן.<br><br>צבע הריחוף (הצבע המשמש כאשר משתמש מרחף מעל פריט) נגזר מצבע זה.",
		admin_theme_global_link_color: "צבע קישור:",
		admin_theme_global_link_color_hover: "בחרו את הצבע לשימוש עבור כל כתובות ה-URL שניתן ללחוץ עליהן בלקוח הדפדפן. לדוגמה, צבע זה משמש בקישורי 'מידע נוסף' המוצגים בכל חלקי לקוח הדפדפן.",
		admin_theme_login_title_heading: "מרכיבים בדף התחברות",
		admin_theme_page_background_label: "צבע רקע של דף התחברות:",
		admin_theme_login_page_background_hover: "בחרו את הצבע שיוצג מאחורי חלונית ההתחברות.",
		admin_theme_login_pane_background_label: "צבע רקע של חלונית התחברות:",
		admin_theme_login_pane_background_hover: "בחרו את הצבע שיוצג בחלונית ההתחברות. צבע זה צריך להתאים לצבע הרקע של דף ההתחברות.",
		admin_theme_text_color: "צבע תמליל:",
		admin_theme_login_pane_text_color_hover: "בחרו את הצבע לשימוש עבור התמליל בחלונית ההתחברות. צבע זה משמש עבור תמליל הפתיחה ותוויות שדות. צבע זה צריך להיות קריא על צבע הרקע של חלונית ההתחברות.",
		admin_theme_copyright_text: "תמליל זכויות יוצרים:",
		admin_theme_copyright_text_hover: "ציינו אם תמליל זכויות יוצרים יוצג בדף ההתחברות.",
		admin_theme_copyright_selection_IBM: "זכויות יוצרים של IBM",
		admin_theme_copyright_selection_none: "ללא תמליל זכויות יוצרים",
		admin_theme_banner_title_heading: "מרכיבי כרזה",
		admin_theme_text_icons_color: "צבע תמליל ואיקונים:",
		admin_theme_icon_color_label: "צבע איקונים:",
		admin_theme_shadow_label: "צללית:",
		admin_theme_banner_text_icons_hover: "בחרו את הצבע לשימוש עבור תמליל ואיקונים בכרזה. צבע זה צריך להיות קריא על צבע הרקע של הכרזה.",
		admin_theme_banner_product_name_label: "שם מוצר:",
		admin_theme_banner_product_name_hover: "כשתיצרו שולחן עבודה, תוכלו לציין שם מותאם שיוצג עבור היישום. אם לא תציינו שם מותאם, IBM Content Navigator ישמש כשם המוצר. ציינו אם להשתמש בשם היישום המוגדר בשולחן העבודה או בתמונה במקום שם.",
		admin_theme_banner_product_name_desktop_defined_label: "שימוש בשם משולחן העבודה",
		admin_theme_banner_product_name_image: "שימוש בלוגו מותאם (URL)",
		admin_theme_background_color_label: "צבע רקע:",
		admin_theme_style_label: "סגנון:",
		admin_theme_banner_color_hover: "בחרו את הצבע לשימוש עבור הכרזה בראש היישום.<br><br><b>עצה:</b>ודאו שצבע התמליל קריא על צבע הרקע של הכרזה.",
		admin_theme_buttons_title_heading: "לחצנים",
		admin_theme_navigation_title_heading: "מרכיבי ניווט",
		admin_theme_navigation_icon_selected_label: "צבע איקון שנבחר:",
		admin_theme_navigation_background_hover: "בחרו את הצבע לשימוש עבור הרקע של סרגל הניווט במאפיינים.",
		admin_theme_navigation_icon_color_hover: "בחרו את הצבע לשימוש עבור איקונים בסרגל הניווט במאפיינים. בעת שימוש בפריסת ברירת המחדל בשולחן העבודה, צבע זה צריך להיות מנוגד לרקע של התפריט הנפתח של המאפיין. בעת שימוש בפריסה הקלאסית בשולחן העבודה, צבע זה צריך להיות מנוגד לרקע של סרגל הניווט של המאפיין. ",
		admin_theme_navigation_icon_selected_hover: "בחרו את הצבע לשימוש עבור המאפיין שנבחר בסרגל הניווט במאפיינים. הצבע צריך להתאים לצבע האיקונים ולצבע הרקע של סרגל הניווט במאפיינים.<br><br>בעת שימוש בפריסה הקלאסית בשולחן העבודה, צבע זה משמש כצבע הריחוף בסרגל הניווט של המאפיין. ",
		admin_theme_button_background_color_hover: "בחרו את הצבע לשימוש עבור רקע הלחצנים.",
		admin_theme_button_style_hover: "בחרו סגנון לחצנים.",
		admin_theme_button_text_icon_color_hover: "בחרו את הצבע לשימוש עבור תמליל ותמונות על לחצנים.",
		admin_theme_no_logo_label: "ללא לוגו",
		admin_theme_custom_logo_label: "לוגו מותאם (URL)",
		admin_theme_banner_type: "סגנון מילוי כרזה:",
		admin_theme_banner_type_hover: "ציינו אם הכרזה תהיה בצבע אחיד או מדורג. אם תציינו כרזה עם צבע מדורג, הצבע שתציינו כצבע הכרזה יהיה הצבע הכהה ביותר בכרזה.<br><br><b>עצה:</b>ודאו שצבע התמליל קריא על צבע הרקע של הכרזה.",
		admin_theme_icon: "איקון ערכת נושא",
		admin_theme_buttons_and_links_title_heading: "לחצנים, שדות וקישורים",
		admin_theme_button_style_label: "סגנון לחצן:",
		admin_theme_theme_style_label: "סגנון ערכה:",
		admin_theme_theme_style_hover: "בחרו את הסגנון שעליו תבוסס הערכה. ניתן לשנות את הסגנון בכל עת במהלך יציר או עריכה של ערכה. בעת השינוי מסגנון אחד לסגנון אחר הגדרות הערכה יאופסו לערכי ברירת המחדל.",
		admin_theme_accent_color_label: "צבע הדגשה:",
		admin_theme_accent_color_hover: "בחרו את הצבע לשימוש עבור הסרגל בחלק העליון של הדו-שיח ועבור פקד גלגל של טעינה.",
		admin_theme_global_toolbar_text_color_label: "צבע התמליל של סרגל הכלים הגלובלי:",
		admin_theme_global_toolbar_text_color_hover: "אם אתם כוללים את סרגל הכלים הגלובלי בלקוח הדפדפן, בחרו את הצבע עבור התמליל של סרגל הכלים.",
		admin_theme_banner_text_color_hover: "בחרו את הצבע לשימוש עבור התמליל בכרזה. ",
		admin_theme_banner_icon_color_hover: "בחרו את הצבע לשימוש עבור האיקונים בכרזה. ",
		admin_theme_button_color_label: "צבע:",
		admin_theme_button_color_hover: "בחרו את הצבע לשימוש עבור המרכיבים שלהלן:<ul><li>פס כותרת בתיבות דו-שיח</li><li>צבע ההבלטה בראש הלשונית הנבחרת</li><li>איקוני תצוגות של רשימות תוכן (תצוגת פרטים, תצוגת מגזין, תצוגת סרט צלולואיד)</li><li>לחצנים, שדות וקישורים</li></ul>הצבע המשמש כשמשתמש מרחף מעל לחצן נובע מצבע זה. צבע זה אינו משמש עבור המפרידים בין החלקים בלקוח הדפדפן. אם ברצונכם לשנות את צבע המפריד, תצטרכו ליצור תוסף שיספק קובץ CSS מותאם.",
		admin_theme_theme_style_col_header: "סגנון נושא",

		admin_syncserver_consistency_checker: "בודק העקביות:",
		admin_syncserver_consistency_checker_hover: "הריצו את בודק העקביות כדי לוודא שלמסד הנתונים של שירות הסינכרון יש מידע עדכני על המצב של כל פריט הנמצא בשרת. לדוגמה, הריצו את בודק העקביות אחרי השבתה של מסד הנתונים של שירות הסינכרון כדי לקבל מידע על מסמכים שעודכנו במאגר בזמן ההשבתה.",
		admin_syncserver_consistency_checker_button: "הרצת בודק העקביות",
		admin_syncserver_consistency_checker_started: "התחלה:",
		admin_syncserver_consistency_checker_ended: "סיום:",
		admin_syncserver_consistency_checker_duration: "משך:",
		admin_syncserver_consistency_checker_items_processed: "פריטי סינכרון שעובדו:",
		admin_syncserver_consistency_checker_items_processed_success: "פריטי סינכרון שעובדו בהצלחה:",
		admin_syncserver_consistency_checker_items_discovered: "פריטי מאגר חדשים שהתגלו:",
		admin_syncserver_consistency_checker_change_updates: "סך הכל עדכונים:",
		admin_syncserver_consistency_checker_state: "מצב:",
		admin_syncserver_consistency_checker_state_done: "סיום",
		admin_syncserver_consistency_checker_state_running: "בהרצה",
		admin_syncserver_consistency_checker_user: "הוגש על ידי:",
		admin_syncserver_consistency_checker_scheduled: "מתוזמן:",

		admin_syncserver_dbcleanup: "ניקוי מסד נתונים",
		admin_syncserver_dbcleanup_hover: "הריצו את כלי ניקוי מסד הנתונים כדי לסלק התקנים שאינם בשימוש ופריטים שכבר אינם מסונכרנים ממסד הנתונים.",
		admin_syncserver_dbcleanup_button: "ניקוי מסד נתונים",
		admin_syncserver_dbcleanup_state_done: "סיום",
		admin_syncserver_dbcleanup_state_running: "בהרצה",
		admin_syncserver_dbcleanup_started: "התחלה:",
		admin_syncserver_dbcleanup_ended: "סיום:",
		admin_syncserver_dbcleanup_state: "מצב:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "מאגרים שנמחקו:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "פריטים מסונכרנים שנמחקו:",
		admin_syncserver_dbcleanup_devicedeleted_count: "התקנים שנמחקו:",
		admin_syncserver_dbcleanup_deviceexpired_count: "התקנים שפג תוקפם:",

		admin_syncserver_publicSyncUrl: "URL ציבורי של שירותי הסינכרון:",
		admin_syncserver_publicSyncUrl_hover: "ציינו את ה-URL שבאמצעותו מאגרים יכולים לתקשר עם שירותי הסינכרון של IBM Content Navigator.‏ המבנה המחדלי של ה-URL הוא http://sync_URL:port_number/sync/notify.‏",

		admin_syncserver_managed: "הגדרות לקוח סינכרון:",
		admin_syncserver_managed_hover: "משתמשים אינם יכולים לשנות הגדרו אלה בלקוח הסינכרון של IBM Content Navigator.‏",
		admin_syncserver_managed_subfolder: "רמות תיקיות לסינכרון",
		admin_syncserver_managed_subfolder_hover: "אם משתמש מסנכרן תיקיה, ציון המספר המרבי של תיקיות שיסונכרנו. לדוגמה, אם משתמש מציין 3 רמות תיקיה, התיקיה שהוא מסנכרן ו-2 רמות של תת-תיקיות יסונכרנו.<br><br>ודאו שהסביבה שלכם מסוגלת לתמוך בכמות תעבורת הסינכרון הנוצרת על ידי הגדרה זו.",
		admin_syncserver_managed_subfolder_all: "כל התת-תיקיות",
		admin_syncserver_managed_subfolder_none: "ללא תת-תיקיות",
		admin_syncserver_managed_subfolder_no_more: "רמות מוגבלות",
		admin_syncserver_managed_subfolder_levels: "תיקיות",
		admin_syncserver_managed_schedule: "תזמון סינכרון",
		admin_syncserver_managed_schedule_hover: "ודאו שהסביבה שלכם מסוגלת לתמוך בכמות תעבורת הסינכרון הנוצרת על ידי תזמון הסינכרון.<br><br>המרווח המרבי הוא 24 שעות או 1440 דקות.<br><br>משתמשים יכולים לעקוף תזמון הסינכרון בלחיצה על <b>סינכרון עכשיו</b> בלקוח.",
		admin_syncserver_managed_schedule_manual: "סינכרון ידני",
		admin_syncserver_managed_schedule_continuous: "סינכרון רציף",
		admin_syncserver_managed_schedule_every: "סינכרון במרווחי זמן שצוינו",
		admin_syncserver_managed_schedule_minutes: "דקות",
		admin_syncserver_managed_schedule_hours: "שעות",

		// redaction codes
		admin_new_reason_code: "סיבת עריכה חדשה",		
		admin_reason_code_name_invalid: "שם סיבת העריכה אינו יכול לכלול את התווים האלה‏: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "התיאור אינו יכול לכלול את התווים האלה‏: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "התיאור אינו יכול לכלול את התווים האלה‏: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "השם אינו יכול לכלול את התווים האלה‏:  * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "תיאור:",
		admin_reason_code_applications_hover: "רשימת יישומי Datacap המפנים לסיבת עריכה זו.",
		admin_reason_code_applications: "יישומי Datacap",
		admin_delete_confirmation_reason_codes: "האם ברצונכם למחוק את הסיבות לעריכה שנבחרו?",
		admin_delete_confirmation_reason_code: "האם ברצונכם למחוק את הסיבה לעריכה שנבחרה?",
		admin_reason_code_heading: "סיבת עריכה: <b>${0}</b>",
		admin_reason_code_list_instructions: "סיבות עריכה מציינות מדוע נתונים רגישים מוגנים על ידי הסתרתם. כל סיבה מזה סוג של נתונים רגישים המוסתרים ממשתמשים כלליים.",
		admin_reason_code_instructions: "ניתן ליצור סיבת עריכה לכל סוג של נתונים רגישים. לאחר מכן ניתן להשתמש במדיניות עריכה כדי להגדיר מי יוכל לראות את הנתונים ומי יוכל ליצור עריכות ולערוך אותן.",
		admin_reason_code_applications_label: "יישומי Datacap",
		admin_reason_code_repositories: "מאגרים",
		admin_reason_code_repositories_label: "מאגרים",
		admin_reason_code_repositories_hover: "הרשימה של מאגרי ICN שמתייחסים לסיבת עריכה זו.",
		admin_reason_code_repositories_default_value: "לא מוגדר",
		admin_reason_code_description_label: "תיאור",
		admin_reason_code_applications_default_value: "לא מוגדר",
		admin_redaction_reasons: "סיבה לעריכה",
		admin_redactions: "עריכות על בסיס תפקיד",
		admin_redactions_policies_roles: "מדיניות ותפקידים",
		admin_reasons: "סיבות",
		admin_reason_code_id: "זיהוי",
		admin_reason_code_id_hover: "לא ניתן לערוך את הזיהוי.  ניתן להעתיקו ללוח הגזירים",
		// Role based administration
		admin_rba: "ניהול שולחן עבודה מבוסס תפקידים",
		admin_rba_mobile_access_enabled: "שולחן עבודה זה מאפשר גישה ניידת.",
		admin_rba_mobile_access_disabled: "שולחן עבודה זה אינו מאפשר גישה ניידת.",
		admin_rba_confirm_delete_multiple: "האם ברצונכם למחוק את תפקידי הניהול הנבחרים?",
		admin_rba_confirm_delete_single: "האם ברצונכם למחוק את תפקיד הניהול הנבחר?",
		admin_rba_delete_multi_role_desktop: "תפקיד אחד או יותר שבחרתם מוקצה לשולחן עבודה. עליכם לסלק תפקידים משולחנות עבודה לפני שתוכלו למחוק אותם.",
		admin_rba_delete_single_role_desktop: "התפקיד הנבחר משויך לשולחן העבודה ${0}. עליכם למחוק את התפקיד משולחן העבודה לפני שתוכלו למחוק אותו.",
		admin_desktop: "שולחן עבודה",
		admin_rba_instructions: "אתם יכולים ליצור ולנהל תפקידי מנהלת שולחן עבודה שמשייכים הרשאות שניתנו למנהלני שולחנות העבודה.",
		admin_rba_not_used: "${0} אינו משמש באף שולחן עבודה.",
		admin_rba_desktops: "<b>${0} משמש בשולחנות העבודה הבאים:</b>",
		admin_rba_new_role: "תפקיד חדש",
		admin_rba_name_invalid: "תפקידי הניהול לא יכולים להכיל אף אחד מהתווים הבאים: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "התיאור אינו יכול לכלול את התווים האלה‏: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "התיאור אינו יכול לכלול את התווים האלה‏: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "השם אינו יכול לכלול את התווים האלה‏:  * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>תיאור: </b> ${0}",
		admin_rba_membership: "חברות",
		admin_rba_general_priv: "כללי",
		admin_rba_appearance_priv: "מראה",
		admin_rba_desktop_config_priv: "תצורת שולחן עבודה",
		admin_rba_app_name_priv: "שם יישום",
		admin_rba_theme_priv: "ערכה",
		admin_rba_viewer_map_priv: "מפת מציג",
		admin_rba_merge_split_priv: "מיזוג ופיצול",
		admin_rba_sync_svc_priv: "שירותי סינכרון",
		admin_rba_menus_priv: "תפריטים",
		admin_rba_edit_svc_priv: "שירותי עריכה",
		admin_rba_toolbars_priv: "סרגלי כלים",
		admin_rba_ctx_menus_priv: "תפריטי הקשר",
		admin_rba_office_ribbon_priv: "פקדות בסרגל הרצוטעה של MS Office",
		admin_rba_office_menues_priv: "תפריטי הקשר של MS Office",
		admin_rba_addl_settings_priv: "הגדרות נוספות",
		admin_rba_mobile_priv: "התקנים ניידים",
		admin_rba_add_doc_dlg_priv: "דו-שיח הוספת מסמך",
		admin_rba_doc_mgmt_priv: "ניהול מסמכים",
		admin_rba_def_redaction_priv: "אופציית עריכה שהיא ברירת המחדל",
		admin_rba_add_photos_priv: "הוספת תצלומים מהמצלמה ומספריית התצלומים",
		admin_rba_time_stamp_priv: "חותמת זמן",
		admin_rba_add_docs_folders_priv: "הוספת מסמכים ויצירת תיקיות במאגר",
		admin_rba_open_docs_priv: "פתיחת מסמכים ביישומים אחרים",
		admin_rba_office_config_priv: "תצורת Office",
		admin_rba_tab_label_priv: "תווית הלשונית IBM ECM",
		admin_rba_feature_sel_priv: "בחירת מאפיין",
		admin_rba_general_config_priv: "תצורה כללית",
		admin_rba_favorites_priv: "מועדפים",
		admin_rba_add_options_priv: "הוספת אפשרויות בקבוצה 'עריכה'",
		admin_rba_browse_priv: "עיון",
		admin_rba_outlook_int_priv: "שילוב Outlook",
		admin_rba_search_priv: "חיפוש",
		admin_rba_layout_priv: "מתכונת",
		admin_rba_case_priv: "מקרה",
		admin_rba_desktop_feat_priv: "מאפייני שולחן עבודה",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "מאפיינים מוצגים",
		admin_rba_branding_priv: "מיתוג",
		admin_rba_home_priv: "דף הבית",
		admin_rba_main_color_priv: "צבע ראשי",
		admin_rba_sec_color_priv: "צבע משני",
		admin_rba_teamspaces_priv: "מרחבי צוות",
		admin_rba_rbr_priv: "עריכה על בסיס תפקיד",
		admin_rba_et_mgr_priv: "מנהל תבניות הקלט",
		admin_rba_policies_roles_priv: "מדיניות ותפקידים מנוהלים",
		admin_rba_work_priv: "עבודה",
		admin_rba_reasons_priv: "קודי סיבה",
		admin_rba_tasks_priv: "משימות אסינכרוניות",
		admin_rba_auth_priv: "אימות",
		admin_rba_all_privs: "כל ההרשאות",
		admin_rba_some_privs: "חלק מההרשאות",
		admin_rba_no_privs: "אך הרשאה",
		admin_add_users_groups_priv: "הוספת משתמשים וקבוצות",
		admin_url_features_priv: "ניהול מאפייני כתובות URL",
		admin_plugin_features_priv: "ניהול מאפייני תוסף",
		admin_addl_components_priv: "מרכיבים נוספים",
		admin_global_toolbar_priv: "סרגל כלים גלובלי",
		admin_status_bar_priv: "סרגל מצב",
		
		
		admin_refresh_message: "עליכם לרענן את הדפדפן כדי להשתמש בנתונים המעודכנים.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "עליכם לרענן את הדפדפן כדי להשתמש בשולחן העבודה המחדלי המעודכן.",
		admin_desktop_refresh_message: "עליכם לרענן את הדפדפן כדי להשתמש בשולחן העבודה המעודכן.",
		admin_action_open: "פתיחה",
		admin_action_edit: "עריכה",
		admin_action_copy: "העתקה",
		admin_action_delete: "מחיקה",
		admin_action_copy: "העתקה",
		admin_action_new: "יצירת חדש",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "זיהוי זה כבר בשימוש. יש לציין זיהוי ייחודי.",

		admin_searchable_properties_for: "תכונות המאפשרות חיפוש עבור:",
		admin_repository_new: "מאגר חדש",
		admin_desktop_new: "שולחן עבודה חדש",
		admin_desktop_file_documents: "לחייב משתמשים לשמור מסמכים ותיקיות חדשים בתיקיה",
		admin_desktop_file_documents_hover: "בחרו אפשרות זו כדי לחייב משתמשים לבחור תיקיה כשהם מוסיפים פריטים למאגר. אם לא תבחרו אפשרות זו, משתמשים יוכלו להוסיף מסמכים (IBM FileNet P8) או מסמכים ותיקיות (IBM Content Manager) מבלי לתייק אותם בתיקיה.",
		admin_desktop_show_security_tab: "הצגת הגדרות אבטחה בזמן פעולות הוספה והפקדה",
		admin_desktop_show_security_hover: "<b>משתמשי IBM FileNet P8 בלבד.</b>  בחרו אפשרות זו כדי לאפשר למשתמשים לערוך את האבטחה של מסמכים ותיקיות בזמן הוספה והפקדה של פריטים לשולחן עבודה זה.",
		admin_desktop_configure_security_inheritance: "לאפשר למשתמשים להגדיר את הורשת האבטחה של תיקיות",
		admin_desktop_configure_security_inheritance_hover: "<b>משתמשי IBM FileNet P8 בלבד.</b>  בחרו אפשרות זו כדי לאפשר למשתמשים להתאים את הגישה לפריטים בתיקיה באמצעות שליטה בירושת האבטחה של תיקיות. אם תבחרו אפשרות זו, משתמשים יוכלו לציין אם משתמשים או קבוצות יוכלו לרשת את האבטחה מתוך:<ul><li>תיקיה</li><li>תיקיה עם התת-תיקיות הישירות שלה</li><li>תיקיה עם כל התת-תיקיות שלה</li></ul>",
		admin_desktop_appearance: "מראה",
		admin_desktop_appearance_instruction: "תוכלו להתאים את מראה שולחן העבודה באמצעות שינוי דף ההתחברות והכרזה המוצגים עבור שולחן העבודה.",
		admin_desktop_layout: "מתכונת:",
		admin_desktop_layout_hover: "המתכונת מציינת אילו מאפיינים אפשר להציג בלקוח הדפדפן ואיך תוכן לקוח הדפדפן יסודר.<br><br><b>עצה:</b> תוכלו להגדיר מתכונות מותאמות באמצעות יצירת תוספים. עליכם לרשום את התוסף בכלי המנהלה כדי שתוכלו לבחור מתכונת מותאמת.",
		admin_desktop_layout_default: "ברירת מחדל",
		admin_desktop_layout_custom: "מותאם",
		admin_desktop_enable_workflow_email: "הפעלת שולחן עבודה זה לדיווח בדואל של FileNet P8 Workflow",
		admin_desktop_enable_workflow_email_hover: "משתמשי FileNet P8 בלבד. בחרו אפשרות זו כדי לאפשר למשתמשים לפתוח את לקוח הדפדפן מכתובות ה-URL הכלולות בדיווחי דואל המופקים על ידי Process Engine.‏<br /><br />אם לא תבחרו אפשרות זו, משתמשים לא יוכלו להתחבר ללקוח הדפדפן מכתובות ה-URL הכלולות בדיווחים.<br /><br />אם תפעילו אפשרות זו בשולחנות עבודה מרובים ויותר משולחן עבודה אחד יענה על הקריטריונים המצוינים ב-URL בדיווח, לקוח הדפדפן ישתמש בשולחן העבודה הראשון המתאים לקריטריונים. ",
		admin_desktop_prevent_create_new_search: "מניעת יצירת חיפושים על ידי משתמשים",
		admin_desktop_prevent_create_new_search_hover: "אפשרות זו מגבילה משתמשים לחיפושים קיימים בלבד ומונעת מהם ליצור חיפוש פתוח שאולי אינו ממוטב.</br></br>הגדרה זו אינה משפיעה על מרחבי צוות. ההרשאה ליצור חיפושים במרחב צוות נקבעת על ידי תפקידו של המשתמש במרחב צוות נתון.",
		admin_desktop_prevent_create_new_unified_search: "מניעת יצירת חיפושים חוצי-מאגרים על ידי משתמשים",
		admin_desktop_prevent_create_new_unified_search_hover: "אפשרות זו מגבילה משתמשים לחיפושים חוצי-מאגרים קיימים בלבד ומונעת מהם ליצור חיפושים חוצי-מאגרים פתוחים שאולי אינו ממוטבים.",
		admin_desktop_hide_entry_template_not_found_warning: "יש להסתיר את האזהרה המוצגת כאשר לא ניתן למצוא את תבנית הקלט",
		admin_desktop_hide_entry_template_not_found_warning_hover: "בחרו באפשרות זו אם ברצונכם להסתיר את הודעת האזהרה המוצגת כאשר מתבצעת עריכה של תכונות הפריט וכאשר לא ניתן למצוא את תבנית הקלט המשויכת לפריט.",
		admin_desktop_show_class_role_security_selection: "לאפשר למשתמשים להגדיר את אבטחה על בסיס תפקידים בתבניות רשומות",
		admin_desktop_show_class_role_security_selection_hover:	"<b>משתמשי IBM FileNet P8 בלבד.</b>  בחרו אפשרות זו כדי לאפשר למשתמשים לקבוע את התצורה של תבניות רשומה כדי להשתמש באבטחה על בסיס תפקידים בעת הגדרת האבטחה במסמכים ו/או תיקיות באמצעות תבניות רשומות. אם תבחרו באפשרות זו, עורכי תבניות רשומות יוכלו לציין אם אובייקטי אבטחת תפקידים מוחלים על הגדרת תבנית רשומה.",
		admin_desktop_show_primary_multi_part: "פתיחה רק של המסמף הראשי במציג",
		admin_desktop_show_primary_multi_part_hover: "<b>משתמשי IBM FileNet P8 בלבד.</b>  בחרו באפשרות זו אם ברצונכם לפתוח רק את קובץ המסמך הראשי במציג.  יכולים להיות למסמכים כמה קבצים המשויכים אליהם.  אפשרות זו תפתח רק את הקובץ הראשי המשויך למסמך.",
		admin_desktop_redaction_save_mode: "אופציית עריכה שהיא ברירת המחדל",
		admin_desktop_redaction_save_mode_hover: "בחרו אופן שמירת עריכה במציג ViewONE שישמש כברירת המחדל:</br>* עליכם תמיד לבקש מהמשתמש לבחור: הפעולה תביא להצגתה של תיבת דיאלוג עם הכניסה למצב עריכה כדי לשאול את המשתמש אם הוא רוצה להכניס כגרסה חדשה, ליצור מסמך חדש או להוריד תכנים.</br>* הכנסה כגרסה חדשה: הבחירה באפשרות זאת תביא לשמירת התכנים שנערכו בחזרה אל גרסה חדשה של המסמך.</br>* שמירה כמסמך חדש לחלוטין: בחירה באפשרות זאת תביא לכך שהתוכן שנערך תמיד יישמר כמסמך חדש לחלוטין.</br>* הורדה ושמירה אצל הלקוח: בחירה באפשרות זאת תביא להורדת התוכן שנערך ושמירתו במערכת הלקוח.",
		admin_desktop_redaction_save_mode_user_select: "בקשו תמיד מהמשתמש לבחור",
		admin_desktop_redaction_save_mode_new_version: "הכנסה כגרסה חדשה",
		admin_desktop_redaction_save_mode_new_document: "שמירה כמסמך חדש לחלוטין",
		admin_desktop_redaction_save_mode_local_content: "הורדה ושמירה אצל הלקוח",

		admin_desktop_document_add_mode: "דו-שיח להוספת מסמך",
		admin_desktop_document_add_mode_hover: "ציינו את דו-שיח ההוספה לשימוש בעת הוספת משמכים שנוצרו על ידי IBM Content Navigator:<ul><li>מסמך ערוך לצמיתות חדש</li><li>מסמך מיזוג ופיצול חדש</li><li>מסמך Microsoft Office חדש</li><li>מסמך שירות עריכה חדש</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "הוספת מסמך",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "הוספת מסמך באמצעות תבנית קלט",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "מיזוג ופיצול:",
		admin_desktop_merge_and_split_enable_hover: "ציינו אם ברצונכם שמשתמשים הניגשים לשולחן העבודה הזה יוכלו למזג ולפצל מסמכים באמצעות מציג תומך.",

		admin_desktop_merge_and_split_show_checkin: "הצגת הנחיה למשתמשים לציין ערכי תכונות כשהם מפקידים שינויים במסמך.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "אם תבחרו אפשרות זו, דו-שיח ההפקדה יוצג כשמשתמשים יפקידו שינויים למסמך במצב מיזוג ופיצול.",

		admin_desktop_available_categories: "מאפיינים זמינים",
		admin_desktop_selected_categories: "מאפיינים שנבחרו",

		admin_layout_banner_title: "כרזה ודף והתחברות",
		admin_layout_title: "מתכונת",

		admin_desktop_application_name: "שם יישום:",
		admin_desktop_application_name_hover: "ציינו את שם היישום שיוצג בכרזה.<br><br>עצה: הגדירו שם יישום עבור שפות אחרות בלשונית תוויות / תוויות שולחן עבודה.",
		admin_desktop_theme: "ערכה:",
		admin_desktop_theme_hover: "ציינו אם להשתמש בערכה המחדלית של IBM Content Navigator או להשתמש בערכה מותאמת עבור שולחן עבודה זה. כדי להשתמש בערכה מותאמת, עליכם ליצור את הערכה בחלק <b>ערכות</b> של כלי המנהלה.",
		admin_desktop_login_logo: "לוגו של דף התחברות:",
		admin_desktop_login_logo_hover: "אם ברצונכם לשנות את הלוגו המוצג בדף ההתחברות, תוכלו לציין את ה-URL של קובץ לוגו. עם זאת, מומלץ להשתמש בערכה מותאמת לשינוי הלוגו.",
		admin_desktop_login_logo_url_hover: "ציינו את ה-URL של קובץ הלוגו. אם הלוגו נמצא בשרת היישומים של לקוח הדפדפן, ציינו URL יחסי. לדוגמה: ‎/mycustomizations/plug-in.png<br><br>גודל הלוגו מוגבל לרוחב של 200 פיסקלים וגובה של 150 פיקסלים.<br><br>מומלץ שללוגו יהיה רקע שקוף.",
		admin_desktop_banner_logo: "לוגו כרזה:",
		admin_desktop_banner_logo_hover: "אם ברצונכם לשנות את הלוגו המוצג בכרזה, תוכלו לציין את ה-URL של קובץ לוגו. עם זאת, מומלץ להשתמש בערכה מותאמת לשינוי הלוגו.",
		admin_desktop_banner_logo_url_hover: "ציינו את ה-URL של קובץ הלוגו. אם הלוגו נמצא בשרת היישומים של לקוח הדפדפן, ציינו URL יחסי. לדוגמה: ‎/mycustomizations/plug-in.png<br><br>גודל הלוגו מוגבל לרוחב של 72 פיסקלים וגובה של 36 פיקסלים.<br><br>מומלץ שללוגו יהיה רקע שקוף.",
		admin_desktop_banner_background_color: "צבע רקע של כרזה:",
		admin_desktop_banner_background_color_hover: "אם ברצונכם לשנות את צבע הרקע של הכרזה, תוכלו לציין צבע מותאם. עם זאת, מומלץ להשתמש בערכה מותאמת לשינוי צבע הכרזה.",
		admin_desktop_banner_background_color_custom_hover: "ציינו את הצבע של כרזת היישום כצבע הקסדצימלי.",
		admin_desktop_banner_application_name_color: "צבע תמליל של שם היישום:",
		admin_desktop_banner_application_name_color_hover: "אם ברצונכם לשנות את הצבע של שם היישום, תוכלו לציין צבע מותאם. עם זאת, מומלץ להשתמש בערכה מותאמת לשינוי הצבע של שם היישום.",
		admin_desktop_banner_application_name_color_custom_hover: "ציינו את הצבע של שם היישום כצבע הקסדצימלי.",
		admin_desktop_banner_menu_color: "צבע איקוני כרזה:",
		admin_desktop_banner_menu_color_hover: "אם תשנו את צבע הרקע של הכרזה, יתכן שתצטרכו לשנות את ערכת הצבעים של האיקונים בכרזה כדי שייראו. ציינו אם להציג את הגרסה הבהירה או הכהה של איקוני הכרזה.<br><br>עם זאת, מומלץ להשתמש בערכה מותאמת לשינוי צבע האיקונים.",
		admin_desktop_login_page_content: "תוכן דף התחברות:",
		admin_desktop_login_page_content_hover: "אם ברצונכם להציג מידע נוסף בדף ההתחברות, כגון הכרזה על השבתות של המערכת או מוקד לסיוע למשתמשים בענייני שמות משתמש וסיסמאות, תוכלו לציין את ה-URL של התוכן להצגה.",
		admin_desktop_login_page_content_url_hover: "ציינו את ה-URL של תוכן דף ההתחברות. אם התוכן נמצא בשרת היישומים של לקוח הדפדפן, ציינו URL יחסי. לדוגמה: ‎/mycustomizations/login_notices.html",
		admin_desktop_password_rules: "כללי סיסמאות:",
		admin_desktop_password_rules_hover: "אם ברצונכם לספק למשתמשים הנחיות ליצירת סיסמאות, כגון תווים מוגבלים או מספר תווים מרבי, תוכלו לציין את ה-URL של דף המכיל את כללי הסיסמאות.",
		admin_desktop_password_rules_url_hover: "ציינו את ה-URL של תוכן כללי הסיסמאות. אם התוכן נמצא בשרת היישומים של לקוח הדפדפן, ציינו URL יחסי. לדוגמה: ‎/mycustomizations/passwords.html",
		admin_desktop_help_url: "URL של עזרה למשתמש הקצה:",
		admin_desktop_help_url_hover: "תוכלו להשתמש בעזרה המסופקת עם IBM Content Navigator,‏ או לנתב משתמשים לתוכן עזרה באמצעות ביצוע אחת הפעולות האלה:<br><br><ul><li>ניתוב למערכת עזרה מותאמת</li><li>הוספת עזרה למופע של IBM Knowledge Center המוצב ביחד עם IBM Content Navigator.‏</li></ul>",
		admin_desktop_help_url_url_hover: "ציינו את ה-URL של מערכת העזרה המותאמת. IBM Content Navigator מצרף את index.jsp?content=/com.ibm.usingeuc.doc/‎ ושם קובץ ל-URL שתציינו.  כדי שקישורי \"מידע נוסף\" בממשק יפעלו, מערכת העזרה חייבת להשתמש באותם שמות קבצים שבהם משתמשת מערכת העזרה המשולבת למשתמש הקצה. ",
		admin_desktop_deprecated_appearance_title: "הגדרות שהוצאו משימוש",
		admin_desktop_deprecated_appearance_instructions: "אם אתם משתמשים בערכה מותאמת, הגדרות אלה נעקפות על ידי הערכה המותאמת. יש לבצע הגירה של הגדרות אלה לערכה מותאמת, המספקת סגנונות מפורטים יותר מההגדרות בחלק זה. כמו כן, אפשר להשתמש בערכה מותאמת בשולחנות עבודה מרובים.",

		admin_desktop_plugins_title: "הפעלה או השבתה של תוספים עבור שולחן עבודה זה.",
		admin_desktop_plugins_enable_all_plugins: "הפעילו את כל התוספים הפרוסים לשימוש עם שולחן עבודה זה",
		admin_desktop_plugins_select_plugins: "בחרו את התוספים הפרוסים כדי להפעילם עבור שימוש בשולחן עבודה זה",
		admin_desktop_plugins_select_plugin: "בחרו בתוסף",

		admin_desktop_layout_features: "מאפיינים מוצגים:",
		admin_desktop_layout_features_hover: "בחרו את המאפיינים שלמשתמשים תהיה גישה אליהם משולחן עבודה זה. המאפיינים מוצגים בסדר שבו הם רשומים.<br><br>כשתבחרו מאפיין, תוכלו להתאים חלק מההתנהגות של המאפיין בתוך שולחן העבודה, כגון המאגר המחדלי הנבחר עבור המאפיין.",
		admin_desktop_layout_default_repository: "מאגר מחדלי:",
		admin_desktop_layout_default_repository_layout_hover: "ציינו איזה מאגר יבחר כברירת מחדל כשמשתמשים יפתחו מאפיין זה.",
		admin_desktop_layout_document_thumbnails: "תמונות ממוזערות של מסמכים:",
		admin_desktop_layout_document_thumbnails_hover: "ציינו אם להציג תמונות ממוזערות של מסמכים בחלונית 'פרטי מסמך'.<br><br>הצגת תמונות ממוזערות יכולה להאט את הביצועים של לקוח הדפדפן.",
		admin_desktop_layout_show_filmstrip_view: "תצוגת צלולויד:",
		admin_desktop_layout_show_filmstrip_view_hover: "ציינו אם לאפשר למשתמשים לשנות את תצוגת רשימת התוכן ולעבור לתצוגת הצלולויד.<br><br>תצוגת הצלולויד מפיקה תצוגה מקדימה של כל מסמך שהמשתמש בוחר. עם זאת, שימוש בתצוגה הצלולואיד עלול להאט את הביצועים של לקוח הדפדפן. כמו כן, עליכם להגדיר את מציג המרות ה-HTML כדי לראות תצוגות מקדימות של מסמכים.",
		admin_enabled: "הפעלה",
		admin_disabled: "השבתה",
		admin_include: "הכללה",
		admin_exclude: "סינון",
		admin_layout_teamspaces_default_repository: "מרחבי צוות:",
		admin_layout_entry_templates_default_repository: "תבניות קלט:",
		admin_layout_other_features_default_repository: "חיפוש ועיון:",
		admin_layout_work_default_repository: "עבודה:",
		admin_layout_default_feature: "מאפיין ברירת מחדל:",
		admin_default_category_placeholder: "בחירת מאפיין",
		admin_layout_default_feature_hover: "ציינו איזה מאפיין יוצג כשמשתמשים יתחברו לשולחן עבודה זה.",
		admin_layout_default_feature_warning: "שינוי מאפיין ברירת המחדל עשוי להשפיע על הזמן הנחוץ לטעינת היישום.",
		admin_layout_feature_list_header: "מאפיין",
		admin_layout_show_statusbar: "סרגל מצב:",
		admin_layout_show_statusbar_hover: "ציינו אם סרגל המצב יוצג בתחתית שולחן העבודה.<br><br>אם תסתירו את סרגל המצב, משתמשים לא יוכלו לראות מידע על אירועים שאינם שגיאות, כגון:<ul><li>המסמך נוסף למאגר.</li><li>החיפוש החזיר 59 מסמכים.</li></ul>",
		admin_layout_show_magazineview: "תצוגת מגזין:",
		admin_layout_show_magazineview_hover: "ציינו אם לאפשר למשתמשים לשנות את תצוגת רשימת התוכן ולעבור לתצוגת המגזין.<br><br>תצוגת המגזין מגדילה את הגובה של כל רשומת ברשימת התוכן, כך שמספר הפריטים שניתן להציג ברשימת התוכן בכל פעם קטן.",
		admin_layout_show_detailsview: "תצוגת פרטים:",
		admin_layout_show_detailsview_hover: "ציינו אם לאפשר למשתמשים לשנות את תצוגת רשימת התוכן ולעבור לתצוגת הפרטים.<br><br>תצוגת הפרטים מציגה את מספר השורות המרבי ברשימת התוכן.",
		admin_feature_config_docinfopane_label: "חלונית פרטי מסמך:",
		admin_feature_config_docinfopane_hoverhelp: "ציינו אם משתמשים יוכלו לגשת לחלונית פרטי המסמך במאפיין זה.",
		admin_feature_config_docinfopane_default_label: "התנהגות מחדלית:",
		admin_feature_config_docinfopane_expanded: "מורחב",
		admin_feature_config_docinfopane_collapsed: "מכווץ",
		admin_feature_config_docinfopane_expand_on_select: "הרחבה כשהפריט נבחר",
		admin_layout_features_title: "מאפייני שולחן עבודה",
		admin_layout_features_instructions: "ציינו את המאפיינים שמשתמשים יוכלו לגשת אליהם משולחן עבודה זה.  כמו כן, תוכלו להתאים את ההתנהגות של כל מאפיין הכלול בשולחן העבודה.",
		admin_layout_components_title: "מרכיבי שולחן עבודה נוספים",
		admin_layout_components_instructions: "תוכלו להשבית חלק מהרכיבים של שולחן העבודה כדי שממשק המשתמש יהיה פחות עמוס או כדי לשפר את הביצועים של לקוח הדפדפן.",
		admin_layout_featureconfig_instructions: "בחרו מאפיין להגדרה",
		admin_layout_featureconfig_no_configuration: "תצורת מאפיינים אינה זמינה.",
		admin_layout_featureconfig_label: "תצורה עבור המאפיין ${0}",
		admin_layout_featureconfig_title: "תצורת מאפיין",
		admin_layout_featureconfig_taskManagerURL: "כדי להשתמש במאפיין זה, עליכם להפעיל ולהגדיר את IBM Content Navigator להתחבר לשירות מנהל המשימות. הפעילו את שירות מנהל המשימות בחלק <b>הגדרות</b> בכלי מנהלה זה.",
		admin_feature_config_show_my_checkouts_label: "חלונית 'המשיכות שלי'",
		admin_feature_config_show_my_checkouts_hoverhelp: "החלונית 'המשיכות שלי' מאפשרת למשתמשים להריץ חיפוש לאיתור כל הפריטים שמשכו ממאגר מסוים. ציינו אם משתמשים יוכלו לגשת לחלונית 'המשיכות שלי' ממאפיין דף הבית.<br/><br/><b>מגבלות:</b> מאפיין זה דורש שיהיה לפחות מאגר אחד של  IBM Content Manager,‎ IBM FileNet P8 או OASIS CMIS המשויך לשולחן עבודה זה.",

		admin_feature_config_default_repository_icon_text: "מאגר מחדלי",
		admin_show: "הצגה",
		admin_hide: "הסתרה",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "אינכם יכולים לסלק את המאפיין 'מנהלה' משולחן העבודה 'מנהלה'.",
		admin_warning_label: "אזהרה:",
		admin_layout_show_globaltoolbar: "סרגל כלים גלובלי:",
		admin_layout_show_globaltoolbar_hover: "ציינו אם סרגל הכלים יוצג בכרזה בראש שולחן העבודה.<br><br>סרגל הכלים הגלובלי כולל פעולות המאפשרות למשתמש להוסיף מסמכים, תיקיות או השהיות למאגר. הפעולות הזמינות תלויות במאגר שהמשתמש מחובר אליו.",
		admin_interface_text_name_label: "סוג תווית",

		admin_interface_text_label_description: "תוכלו להתאים את התמליל המוצג באזורים מסוימים של לקוח הדפדפן. התוויות מוצגות עבור כל המאגרים ושולחנות העבודה בתצורה שלכם. ציינו את התמליל שיוצג בממשק בשדה 'תווית נוכחית'.<br><br><b>חשוב:</b> שינויים שתבצעו בתוויות לא יוצגו בכלי המנהלה.",
		admin_interface_text_label_action: "תוויות פעולות",
		admin_interface_text_label_action_description: "תוויות פעולה מופיעות על לחצנים ובתפריטים בכל חלקי לקוח הדפדפן. תוכלו להגדיר תוויות פעולה שונות לכל סוג של מאגר.",
		admin_interface_text_label_application: "תוויות יישום",
		admin_interface_text_label_application_description: "תוויות יישום מוצגות בכל חלקי לקוח הדפדפן.",
		admin_interface_text_label_system: "תוויות תכונות מערכת",
		admin_interface_text_label_system_description: "תכונות המערכת המוצגות משתנות לפי המאגר. תוכלו להתאים את התוויות המוצגות עבור תכונות מערכת המשויכות אל המסמכים והתיקיות במאגרים שלכם.",
		admin_interface_text_label_desktop: "תוויות שולחן עבודה",
		admin_interface_text_label_desktop_description: "אם התאמתם את שם היישום בשולחן עבודה, תוכלו להתאים את השם בשפות שונות מאנגלית. תוכלו גם להתאים את השמות של מרחבי היישומים של IBM FileNet P8 בשולחן עבודה.",

		admin_interface_text_system_label: "תווית מערכת",
		admin_interface_text_current_label: "תווית נוכחית",
		admin_interface_text_default_label_heading: "תווית ברירת מחדל",
		admin_interface_text_default_label: "תווית ברירת מחדל:",
		admin_interface_text_displayed_in_label: "מוצג עבור",
		admin_interface_text_displayed_in_document_folder: "מסמכים ותיקיות",
		admin_interface_text_displayed_in_document: "מסמכים",
		admin_interface_text_displayed_in_folder: "תיקיות",
		admin_interface_text_displayed_in_admin_application_space: "תווית מרחב יישומים",
		admin_interface_text_displayed_in_desktop: "תווית מאפיין להתקנים ניידים",
		admin_interface_text_displayed_in_admin_application_name: "שם יישום",

		admin_new_desktop: "שולחן עבודה חדש",
		admin_new_repository: "מאגר חדש",
		admin_new_menu: "תפריט חדש",
		admin_new_viewer_mapping: "מפת מציגים חדשה",
		admin_new_mapping_label: "מיפוי חדש",
		admin_new_icon_mapping: "מיפוי איקון חדש",
		admin_viewer_mapping_list_instructions: "תוכלו להגדיר את המציגים שבהם ישתמש לקוח הדפדפן להצגת סוגי תוכן שונים. מפת מציגים מגדירה את סוגי MIME המשויכים לכל מציג שבו תשתמשו. תוכלו ליצור מפות מציגים מרובות אם ברצונכם להשתמש במציגים שונים עבור שולחנות עבודה שונים.",
		admin_viewer_mapping_instructions: "ציינו את המציגים שישמשו לפתיחת קבצים. אם ברצונכם להשתמש במציג מותאם, עליכם לשלב את המציג כתוסף כדי להוסיף אותו למפת המציג.<br><br><b>חשוב:</b> כשמשתמש פותח מסמך, לקוח הדפדפן מחפש ברשימה של מיפויי המציג כדי למצוא את המציג הראשון היכול לפתוח את המסמך בהתאם למערכת ההפעלה שבה עובד המשתמש והמאגר שאליו מחובר המשתמש. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "תוסף חדש",
		admin_menu_list_instructions: "תוכלו ליצור סרגלי כלים ותפריטי הקשר מותאמים כדי לקבוע אילו פעולות יהיו זמינות למשתמשים. לא תוכלו לערוך את תפריטי ברירת המחדל, אך תוכלו ליצור עותקים של תפריטים קיימים כדי להגביל את הפעולות הזמינות או להוסיף פעולות מותאמות המוגדרות בתוספים.<br><br>אם ברצונכם ליצור סוג חדש של תפריט, עליכם להגדיר את התפריט בתוסף.",
		admin_menu_id_hover: "הזיהוי חייב להיות ייחודי, ולא ניתן לשנותו לאחר שמירת התפריט.<br><br>הזיהוי יכול להכיל רק תווים אלפאנומריים והוא רגיש לרישיות.",
		admin_menu_id_disabled_hover: "לא ניתן לשנות את זיהוי התפריט. אם ברצונכם להשתמש בזיהוי שונה, עליכם ליצור תפריט חדש.",
		admin_menu_default_instructions: "אינכם יכולים לערוך תפריט זה מפני שהוא תפריט ברירת המחדל. אם ברצונכם לערוך את התפריט, עליכם ליצור עותק של התפריט.",
		admin_menu_toolbar_instructions: "תוכלו להגביל את הפעולות שיהיו זמינות למשתמשים בסרגל כלים זה או להוסיף פעולות מותאמות המוגדרות בתוסף. תוכלו גם להוסיף מפרידים לסרגל הכלים כדי לסדר את הפעולות.",
		admin_menu_toolbar_custom_instructions: "סרגל כלים זה מוגדר על ידי תוסף. אם ברצונכם לערוך את סרגל הכלים, עליכם לעדכן את התוסף או ליצור עותק של סרגל הכלים.",
		admin_menu_context_menu_instructions: "תוכלו להגביל את הפעולות שיהיו זמינות למשתמשים בתפריט הקשר זה או להוסיף פעולות מותאמות המוגדרות בתוסף. תוכלו גם להוסיף מפרידים לסרגל ההקשר כדי לסדר את הפעולות.",
		admin_menu_context_menu_custom_instructions: "תפריט הקשר זה מוגדר על ידי תוסף. אם ברצונכם לערוך את תפריט ההקשר, עליכם ליצור עותק של תפריט ההקשר.",
		admin_desktop_list_instructions: "תוכלו ליצור שולחנות עבודה מרובים כדי לתת למשתמשים שונים גישה לתוכן הדרוש להם. לדוגמה, תוכלו ליצור שולחן עבודה המאפשר למשתמשים רק לחפש תוכן, או שולחן עבודה הנותן למשתמשים גישה למאגר יחיד. ",
		admin_plugin_updated: "התצורה של התוסף שנבחר השתנתה. עליכם לרענן את הדפדפן כדי שהשינויים ייכנסו לתוקף.",
		admin_repository_ci_heading: "מאגר Content Integrator:‏ <b>${0}</b>",
		admin_repository_p8_heading: "מאגר FileNet Content Manager:‏ <b>${0}</b>",
		admin_repository_cm_heading: "מאגר Content Manager:‏ <b>${0}</b>",
		admin_repository_od_heading: "מאגר Content Manager OnDemand:‏ <b>${0}</b>",
		admin_repository_cmis_heading: "מאגר CMIS:‏ <b>${0}</b>",
		admin_repository_box_heading: "מאגר Box:‏ <b>${0}</b>",
		admin_repository_generic_heading: "מאגר‏: <b>${0}</b>",

		admin_delete_confirmation_desktops: "האם ברצונכם למחוק את שולחנות העבודה שנבחרו?\n${0} שולחנות עבודה נבחרו.",
		admin_delete_confirmation_menus: "האם ברצונכם למחוק את התפריטים שנבחרו? \n${0} תפריטים נבחרו.",
		admin_delete_confirmation_repositories: "האם ברצונכם למחוק את המאגרים שנבחרו?\n${0} מאגרים נבחרו.",
		admin_delete_confirmation_viewer_mappings: "האם ברצונכם למחוק את מפות המציגים שנבחרו?  ${0} מפות נבחרו.",
		admin_delete_confirmation_icon_mappings: "האם ברצונכם למחוק את תצורות האיקונים שנבחרו? \n${0} תצורות איקונים נבחרו.",
		admin_delete_confirmation_plugins: "האם ברצונכם למחוק את התוספים שנבחרו?\n${0} תוספים נבחרו.",
		admin_delete_confirmation: "האם ברצונכם למחוק את הפריטים שנבחרו? \n${0} פריטים נבחרו.",

		admin_viewer_mapping_id_hover: "הזיהוי חייב להיות ייחודי, ולא ניתן לשנותו לאחר שמירת מפת המציג.<br><br>הזיהוי יכול להכיל רק תווים אלפאנומריים והוא רגיש לרישיות.",
		admin_viewer_mapping_id_disabled_hover: "לא ניתן לשנות את זיהוי מפת המציג. אם ברצונכם להשתמש בזיהוי שונה, עליכם ליצור מפת מציגים חדשה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "לא ניתן למחוק את שולחן העבודה המוגדר כברירת מחדל.",

		admin_desktop_heading: "שולחן עבודה: <b>${0}</b>",
		admin_menu_toolbar_heading: "סרגל כלים: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "סרגל כלים מותאם: <b>${0}</b>",
		admin_menu_context_menu_heading: "תפריט הקשר: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "תפריט הקשר מותאם: <b>${0}</b>",
		admin_plugin_heading: "תוסף: <b>${0}</b>",
		admin_plugin_instructions: "תוסף יכול להיות קובץ JAR או קובץ מחלקות מהודר.<br/><br/><b>חשוב:</b> שרת היישומים של IBM Content Navigator חייב להיות מסוגל לגשת לקובץ התוסף במערכת הקבצים המקומית או דרך URL.‏",
		admin_plugin_list_instructions: "יש להשתמש בכלי המנהלה כדי לרשום תוספים עבור לקוח הדפדפן. אם תוסף דורש תצורה נוספת, פרמטרי התצורה יוצגו לאחר שתרשמו את התוסף.<br /><br /><b>חשוב:</b> אם תערכו תוסף המאוזכר באזור אחר של כלי המנהלה, כגון תפריט, יתכן שתתקלו בבעיות בהתנהגות התוסף. בנוסף, התוספים מופעלים בסדר שבו הם מופיעים. אם יש להריץ תוסף לפני תוסף אחר, ודאו שהתוספים רשומים בסדר שבו יש להריץ אותם.",
		admin_plugin_cannot_delete: "לא ניתן למחוק את התוספים שנבחרו מפני שיש תוספים התלויים בהם.<br/>תוספים שנבחרו: ${0}<br/>תוספים תלויים: ${1}",
		admin_plugin_cannot_disable: "לא ניתן להשבית את התוספים שנבחרו מפני שיש תוספים התלויים בהם.<br/>תוספים שנבחרו: ${0}<br/>תוספים תלויים: ${1}",
		admin_plugin_cannot_add: "אי אפשר להוסיף את התוסף כיוון שכמה תוספים שהוא תלוי בהם חסרים או מושבתים. תוספים חסרים או מושבתים: ${0}",
		admin_plugin_cannot_enable: "אי אפשר להוסיף את התוספים שנבחרו כיוון שכמה תוספים שהם תלויים בהם חסרים או מושבתים.<br/>תוספים שנבחרו: ${0}<br/>תוספים חסרים או מושבתים: ${1}",
		admin_plugin_save_order: "סדר שמירה",
		admin_plugin_load: "טעינה",
		admin_plugin_load_hover: "ציינו את ה-URL של התוסף.",
		admin_plugin_file_hover: "אם קובץ ה-JAR של התוסף נמצא במערכת הקבצים המקומית, תוכלו לציין נתיב מלא או URL של קובץ התוסף. אם קובץ ה-JAR של התוסף נמצא בשרת מרוחק, עליכם לציין את ה-URL של קובץ התוסף.",
		admin_plugin_classfolderpath_hover: "קובץ המחלקות המהודר חייב להמצא בשרת היישומים של IBM Content Navigator.‏<br/><br/>ציינו את הנתיב המלא של התיקיה שבה מחלקות התוסף מהודרות ומופקות.<br/><br/>הנתיב אינו יכול לכלול את שם המארז של מחלקות התוסף. לדוגמה, הנתיב המחדלי של מחלקת התוסף לדוגמה במערכת Windows הוא C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "ציינו את השם המלא של מחלקת Java בתוך קובץ המחלקות שיש לטעון ולהפעיל כמחלקת התוסף.<br/>לדוגמה, שם המחלקה עבור התוסף לדוגמה הוא com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "קובץ ה-JAR של התוסף לא נמצא ב-URL שצוין. ודאו שקובץ ה-JAR נמצא בשרת היישומים ושה-URL ושם הקובץ נכונים.",
		admin_plugin_for_repository_not_loaded: "אינכם יכולים לערוך מאגר זה.‏ התוסף המגדיר ותומך בסוג מאגר זה לא נטען. בלשונית התוספים, ערכו את התוסף כדי לוודא שהוא מוגדר כהלכה וטעון.",
		admin_plugin_repository_types: "סוגי מאגר:",
		admin_plugin_viewers: "מציגים:",
		admin_plugin_features: "מאפיינים:",
		admin_plugin_layouts: "מתכונות:",
		admin_plugin_not_available: "לא זמין",
		admin_plugin_config_params: "פרמטרים של תצורה:",
		admin_viewer_def_heading: "מפת מציגים: <b>${0}</b>",
		admin_users_and_groups: "משתמשים וקבוצות",
		admin_general: "כללי",
		admin_logging: "רישום ביומן",
		admin_authentication: "אימות",		
		admin_rolebase_role: "תפקיד:",
		admin_settings_logging_instructions: "תוכלו להשתמש ברישום ביומן לאבחון בעיות בלקוח הדפדפן. תוכלו לחדד את הרישום אם ידוע לכם שהבעיה מתרחשת בתוך מחלקת Java מסוימת או עבור משתמש מסוים. פרטי השגיאה נכתבים לקובצי יומן השגיאות של שרת היישומים.",
		admin_settings_logging_instructions2: "<b>הגדרות רישום ניפוי</b><br />אם ידוע לכם שהבעיה אירעה עבור מחשב לקוח או משתמש מסוים, תוכלו לכוון את רישום הניפוי למחשב או משתמש אלה. תוכלו ללכוד מידע ניפוי בסביבת ייצור ללא השפעה משמעותית על ביצועי המערכת.<br /><br /><b>חשוב:</b> אם תציינו מחשב לקוח או משתמש, הגדרה זו עוקפת הגדרות רישום אחרות. לאחר לכידת המידע הדרוש, הגדירו אפשרות זו עם הערך <b>ללא</b> כדי לחזור לרישום סטנדרטי עבור הסביבה שלכם.",
		admin_settings_export_config_hover: "יצוא הפרטים של תצורת המערכת הנוכחית לקובץ, לשימוש עם IBM Support Assistant Data Collector.‏ הקובץ נשמר במיקום המוגדר באמצעות תכונת Java‏ user.home.‏",
		admin_logging_level: "רישום ברמת היישום:",
		admin_logging_level_hover: "רמות הרישום קובעות כמה מידע יאוחסן בשרת. האפשרות <b>שגיאה</b> רושמת כמות מזערית של מידע רישום. האפשרות <b>ניפוי</b>  לוכדת את כמות המידע המרבית.<br /><br />אל תציינו <b>ניפוי</b> בסביבת ייצור אלא אם הונחיתם לעשות זאת על ידי תמיכת התוכנה של IBM.‏",
		admin_logging_level_0: "ללא רישום",
		admin_logging_level_1: "שגיאה",
		admin_logging_level_2: "אזהרה",
		admin_logging_level_3: "מידע",
		admin_logging_level_4: "ניפוי",
		admin_logging_classes: "רישום ברמת מחלקת Java:‏",
		admin_logging_classes_hover: "כברירת מחדל, כל מחלקות Java כלולות ביומני השגיאות של שרת היישומים. עם זאת, תוכלו לציין אילו מחלקות או מארזים לכלול או לא לכלול ברישום. תוכלו להשתמש ביומני השגיאות של שרת היישומים כדי לברר אילו מחלקות לכלול או לא לכלול.<br><br>אם ידוע לכם שהבעיה מתרחשת בתוך מחלקה מסוימת, תוכלו לכלול אותה במפורש בקובצי היומן. כשכוללים מחלקה ביומני השגיאות, כל המחלקות האחרות מסוננות מקובץ היומן.<br><br>אם אתם יודעים שבעיה אינה מתרחשת במחלקה מסוימת וברצונכם להקטין את גודלו של קובץ היומן, תוכלו לסנן מחלקה זו מקובצי היומן.",
		admin_logging_classes_include: "הכללה",
		admin_logging_classes_include_all: "כל המחלקות",
		admin_logging_classes_include_specified: "מחלקות מסוימות",
		admin_logging_classes_include_specified_msg: "ציינו את המחלקות שייכללו.",
		admin_logging_classes_exclude: "סינון",
		admin_logging_classes_exclude_none: "ללא",
		admin_logging_classes_exclude_specified: "מחלקות מסוימות",
		admin_logging_classes_exclude_specified_msg: "ציינו את המחלקות שלא ייכללו.",
		admin_logging_debug: "רישום ניפוי עבור:",
		admin_logging_debug_hover: "<b>חשוב:</b> סקרו את קובצי היומן של שרת היישומים לפני שתציינו כתובת IP של מחשב לקוח או משתמש. הערך שתציינו חייב להיות זהה לערך המוצג בקובץ היומן.",
		admin_logging_debug_none: "ללא (ברירת מחדל)",
		admin_logging_debug_host: "מחשבי לקוח (כתובות IP)",
		admin_logging_debug_host_msg: "ציינו כתובת IP של מחשב לקוח אחד או יותר שברצונכם לרשום עבורם מידע ניפוי. השתמשו בפסיקים להפרדת הכתובות.<br /><br /><b>חשוב:</b> סקרו את קובצי היומן של שרת היישומים לפני שתציינו כתובת IP.‏ הערך שתציינו חייב להיות זהה לערך המוצג בקובץ היומן.",
		admin_logging_debug_user: "משתמשים",
		admin_logging_debug_user_msg: "ציינו את שם המשתמש של משתמש אחד או יותר שברצונכם לרשום עבורם מידע ניפוי. השתמשו בפסיקים להפרדת שמות משתמשים.<br /><br /><b>חשוב:</b> סקרו את קובצי היומן של שרת היישומים לפני שתציינו שם משתמש. הערך שתציינו חייב להיות זהה לערך המוצג בקובץ היומן.",

		admin_office_settings_logging_instructions: "תוכלו להשתמש ברישום ביומן לאבחון בעיות של IBM Content Navigator for Microsoft Office.‏ תוכלו לחדד את הרישום אם ידוע לכם שהבעיה מתרחשת בתוך מחלקה מסוימת או עבור משתמש מסוים. פרטי שגיאות נכתבים לקובצי היומן של היישום במחשבי הלקוח של IBM Content Navigator for Microsoft Office.‏ ",
		admin_office_settings_logging_instructions2: "<b>הגדרות רישום ניפוי</b><br />אם ידוע לכם שהבעיה אירעה עבור מחשב לקוח או משתמש IBM Content Navigator for Microsoft Office מסוים, תוכלו לכוון את רישום הניפוי למחשב או משתמש אלה. תוכלו ללכוד מידע ניפוי בסביבת ייצור ללא השפעה משמעותית על ביצועי המערכת. <br /><br /><b>חשוב:</b> אם תציינו מחשב לקוח או משתמש, הגדרה זו עוקפת הגדרות רישום אחרות. לאחר לכידת המידע הדרוש, הגדירו אפשרות זו עם הערך <b>ללא</b> כדי לחזור לרישום סטנדרטי עבור סביבת IBM Content Navigator for Microsoft Office שלכם. ",
		admin_office_logging_debug_hover: "<b>חשוב:</b> סקרו את קובצי היומן של מחשב הלקוח לפני שתציינו כתובת IP של מחשב לקוח או משתמש. הערך שתציינו חייב להיות זהה לערך המוצג בקובץ היומן. ",
		admin_office_logging: "רישום ביומן Office",
		admin_office_logging_classes: "רישום ברמת המחלקה:",
		admin_office_logging_classes_hover: "כברירת מחדל, כל המחלקות והמארזים כלולים ביומני השגיאות של IBM Content Navigator for Microsoft Office.‏ עם זאת, תוכלו לציין אילו מחלקות או מארזים לכלול או לא לכלול ברישום. תוכלו להשתמש ביומני השגיאות של מחשבי הלקוח כדי לקבוע אילו מחלקות לכלול או לא לכלול.<br /><br />אם ידוע לכם שהבעיה מתרחשת בתוך מחלקה מסוימת, תוכלו לכלול אותה במפורש בקובצי היומן. כשכוללים מחלקה ביומני השגיאות, כל המחלקות האחרות מסוננות מקובצי היומן. <br /><br />אם אתם יודעים שבעיה אינה מתרחשת במחלקה מסוימת וברצונכם להקטין את גודלו של קובץ היומן, תוכלו לסנן מחלקה זו מקובצי היומן. ",
		admin_office_logging_debug_hover: "<b>חשוב:</b> סקרו את קובצי היומן של מחשב הלקוח לפני שתציינו כתובת IP של מחשב לקוח או משתמש. הערך שתציינו חייב להיות זהה לערך המוצג בקובץ היומן.",
		admin_office_logging_additional_settings: "הגדרות נוספות:",
		admin_office_logging_additional_settings_hover: "ציון ההגדרות הנוספות",
		admin_office_logging_file_size: "גודל קובץ יומן",
		admin_office_logging_file_size_hover: "ציינו את הגודל שבו IBM Content Navigator for Microsoft Office ייצור קובץ יומן חדש. כשקובץ יומן מגיע לגודל המרבי, שם היומן הנוכחי מוחלף כך שיכלול את התאריך (במבנה YYYYMMdd) ומספר קידום (לדוגמה ICNExcelAddin-20121116-5.log),‏ ונוצר קובץ יומן חדש. ",
		admin_office_logging_show_stacktrace_on_dialogs: "הצגת stack trace של תיבות דו-שיח",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "כאופציה, תוכלו להציג פרטי stack trace של תיבות דו-שיח כדי להקל על פתרון בעיות. גם אם לא תפעילו אפשרות זו, מידע stack trace מפורט תמיד כלול ביומני השגיאות של IBM Content Navigator for Microsoft Office.‏ ",

		admin_icon_state_twisty: "איקוני מצב",
		admin_icon_state_icon: "איקון מצב",
		admin_icon_state: "מצב",
		state_contains_label: "המצב מכיל",
		admin_icon_state_instructions: "תוכלו להתאים את האיקונים המוצגים ליד מסמכים, תיקיות ופריטי עבודה במאגרים.<br><br><b>עצה:</b> תוכלו לציין אם יוצגו איקוני מצב עבור כל מאגר בסביבה שלכם.",
		admin_icon_state_dialog_title: "מיפוי איקוני מצב",
		admin_icon_state_dialog_instructions: "תוכלו למפות את המצב הנבחר לאיקון מוגדר מראש המסופק עם לקוח הדפדפן או לאיקון מותאם.",

		admin_icon_mapping_twisty: "איקוני סוג MIME",
		admin_icon_mapping_dialog_title: "מיפוי איקונים",
		admin_icon_mapping: "מיפוי איקונים",
		admin_icon_mapping_instructions: "תוכלו למפות רשימה של סוגי MIME לאיקון מוגדר מראש המסופק עם לקוח הדפדפן או לאיקון מותאם.",
		admin_icon_mapping_list_instructions: "תוכלו להתאים את האיקונים המוצגים ליד סוגי MIME שונים המאוחסנים במאגר. לקוח הדפדפן משתמש באיקונים בסדר שבו הם מופיעים. אם סוג MIME מופיע יותר מפעם אחת, ייעשה שימוש באיקון הראשון המשויך לאותו סוג MIME.‏",
		admin_icon_mapping_icon_label: "באיזה איקון ברצונכם להשתמש?",
		admin_icon_mapping_file_name: "איקון מותאם:",
		admin_icon_mapping_file_name_heading: "איקון מותאם",
		admin_icon_mapping_file_name_placeholder: "ציינו את ה-URL של האיקון",
		admin_icon_mapping_file_name_hover: "ציינו את ה-URL של האיקון. אם האיקון נמצא בשרת היישומים של לקוח הדפדפן, ציינו URL יחסי. לדוגמה: ‎/mycustomizations/icon.png",
		admin_icon_mapping_class_name: "איקון מוגדר מראש:",
		admin_icon_mapping_class_name_heading: "איקון מוגדר מראש",
		admin_icon_mapping_class_name_hover: "בחרו איקון המסופק עם לקוח הדפדפן.",
		admin_icon_mapping_class_name_placeholder: "בחירת איקון",

		admin_p8_instructions: "מידע זה משותף לכל מאגרי FileNet Content Manager המוגדרים עבור לקוח הדפדפן.",
		admin_p8_collaboration_config: "תצורה אופציונלית של FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "תוכלו להגדיר פרמטרים אלה אם ברצונכם לכוונן את שירותי FileNet Collaboration עבור סביבת IBM FileNet P8 שלכם.",
		admin_p8_use_url_incoming: "שימוש ב-URL בבקשות נכנסות להפקת URL תגובה:",
		admin_p8_use_url_incoming_hover: "ברוב סביבות FileNet Collaboration Services,‏ תוכלו להשתמש ב-URL של בקשה נכנסת כדי ליצור את ה-URL בתגובה. בחרו <b>כן</b> אלא אם אחד המצבים שלהלן חל על הסביבה שלכם:<ul><li>ברצונכם לאכוף יישומי לקוח לגשת אל  FileNet Collaboration Services דרך URL ספציפי.<li>הגדרות שרת proxy שלכם גורמות ל-FileNet Collaboration להפיק כתובות URL לא חוקיות.</ul>",

		admin_p8_use_url_incoming_http: "URL של FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "ציינו את ה-URL שבאמצעותו יישומים יכולים לגשת אל  FileNet Collaboration Services במבנה http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "URL HTTPS של FileNet Collaboration Services:‏",
		admin_p8_use_url_incoming_https_hover: "אם FileNet Collaboration Services מוגדר להשתמש ב-SSL, ציינו את URL HTTPS שבאמצעותו יישומי לקוח יכולים לגשת אל FileNet Collaboration Services במבנה https://FNCSserver:port_number.",
		admin_p8_hide_email_addresses: "הסתרת כתובת הדואל של המשתמש בתגובות שרת:",
		admin_p8_hide_email_addresses_hover: "תוכלו להסתיר את כתובות הדואל של משתמשים בתגובות שרת אם עליכם לעמוד בדרישות של מדיניויות פרטיות. לדוגמה, תוכלו להסתיר כתובות דואל של משתמשים כשהשרת מחזיר רשימה של מסמכים ומידע על המשתמשים שיצרו או ערכו את המסמכים.",

		admin_p8_mask_user_ids: "מיסוך זיהויי משתמש בקובצי יומן:",
		admin_p8_mask_user_ids_hover: "תוכלו להסתיר את שמות המשתמשים בקובצי יומן של FileNet Collaboration Services אם עליכם לעמוד בדרישות של מדיניויות פרטיות. אם תפעילו אפשרות זו, שמות משתמשים יוחלפו בערכי גיבוב. כך תוכלו לספק קובצי יומן לחברות חיצוניות, כגון IBM, למטרות מיכה מבלי לחשוף את שמות המשתמשים או רשומות הפעילות שלהם.",

		admin_p8_soft_delete: "העברת קבצים שנמחקו לסל שחזור:",
		admin_p8_soft_delete_hover: "כשמשתמשים מוחקים פריטים, העברת הפריטים לסל שחזור, במקום למחוק את הפריטים מהמאגר. הפריטים נשארים בסל השחזור עד שהם נמחקים לצמיתות. המערכת מתעלמת מהגדרה זו עם מאגר היעד אינו תומך בסלי שחזור.<br><br><b>מגבלה:</b> סלי שחזור נתמכים על ידי IBM FileNet P8 גרסה 5.2 ומעלה ודורשים את התוסף Social Collaboration Base Extensions.‏",

		admin_p8_download: "תצורת מטמון HTPP להורדת תוכן",
		admin_p8_download_instructions: "אם מאגרי IBM FileNet Content Manager כוללים הרבה קבצים גדולים, תוכלו להגדיר תצורת מטמון HTPP להורדת תוכן (CDHC)., כדי ש-FileNet Collaboration Services יוכל לנתב בקשות תוכן לקבצים גדולים באופן מאובטח לשרת רשת ייעודי.<br/><br/>מאפיין זה דורש את IBM HTTP Server.‏ בנוסף, עליכם לעדכן את קובץ httpd.conf של IBM HTTP Server.‏",
		admin_p8_download_cache: "מטמון HTPP להורדת תוכן:",
		admin_p8_download_cache_hover: "ציינו אם ברצונכם להפעיל מטמון HTPP להורדת תוכן (CDHC) עבור כל מאגרי IBM FileNet Content Manager בסביבה שלכם. תוכלו לציין גודל קובץ מזערי שבו קבצים מוטמנים.",
		admin_p8_download_cache_folder: "מדריך מטמון מלא:",
		admin_p8_download_cache_folder_hover: "ציינו את הנתיב המשויך המלא של המדריך שבו יאוחסנו קבצים מוטמנים. המדריך יכול להיות בכל מערכת הפעלה או התקן, כגון מדריך רשת משותף, בתנאי שהוא גלוי כמערכת קבצים עבור FileNet Collaboration Services ועבור IBM HTTP Server.‏",
		admin_p8_download_cache_url: "כינוי עבור מיקום המטמון:",
		admin_p8_download_cache_url_hover: "ציינו את הכינוי המצביע אל מדריך המטמון מ-הURL של FileNet Collaboration Services.‏ ציינו את הכינוי במבנה ‎/alias,‏ לדוגמה, ‎/cdhc.‏<br/><br/>כאשר ‎/cdhc כלול ב- URL, היישום מנותב למדריך המלא של המטמון.",
		admin_p8_download_cache_max_files: "מספר מרבי מותר קובצי מטמון:",
		admin_p8_download_cache_max_files_hover: "כשאר מספר הקבצים מגיע למספר המרבי, הקובץ הישן ביותר מסולק מהמטמון.<br><br>אם תציינו את מספר הקבצים המרבי להטמנה ואת הגובל המרבי של המטמון, הקובץ הישן ביותר מסולק מהמטמון כשהנמוך מבין שני התנאים מתמלא.",
		admin_p8_download_cache_max_size: "גודל מטמון מרבי (GB):",
		admin_p8_download_cache_max_size_hover: "כאשר הגודל מגיע לגודל המטמון המרבי, הקובץ הישן ביותר מסולק מהמטמון.<br/><br/>אם תציינו את מספר הקבצים המרבי להטמנה ואת הגובל המרבי של המטמון, הקובץ הישן ביותר מסולק מהמטמון כשהנמוך מבין שני התנאים מתמלא.",
		admin_p8_download_cache_cleanup_duration: "משך ניקוי מרבי (בשניות):",
		admin_p8_download_cache_cleanup_duration_hover: "ציינו את המשך המרבי המותר של פעולת הניקוי. המשך המחדלי הוא 5 שניות.<br><br>קבצים המועמדים למחיקה אך נשארים במטמון אחרי פעולת הניקוי יסולקו בפעולות ניקוי עתידיות.",
		admin_p8_download_cache_cleanup_min: "מרווח מזערי בין פעולות ניקוי מטמון (בשניות):",
		admin_p8_download_cache_cleanup_min_hover: "ציינו את משך הזמן המרבי שצריך לחלוף בין פעולות ניקוי מטמון. המשך המחדלי הוא 3,600 שניות (1 שעה).<br><br>פעולות ניקוי מטמון מתרחשות רק כשיש בקש פעילה להוריד תוכן מהמטמון. אם נכנסות בקשות מדי דקה, פעולת הניקוי תתרחש מדי שעה. עם זאת, אם חולפות שלוש שעות בין בקשות הורדה, פעולת הניקוי תתרחש רק כשתתקבל בקשת ההורדה הבאה.",
		admin_p8_download_cache_min_lifetime: "זמן מזערי במטמון (בשניות):",
		admin_p8_download_cache_min_lifetime_hover: "ציינו את משך הזמן המזערי להחזקת קובץ במטמון לפני שאפשר לסלקו. המשך המחדלי הוא 3,600 שניות (1 שעה).<br><br>גם אם המטמון מגיע לגודלו המרבי או מכיל את מספר הקבצים המרבי, אפשר יהיה למחוק את הקובץ הישן ביותר במטמון רק שהקובץ לאחר שהקובץ נמצא במטמון למשך הזמן שצוין.",
		admin_p8_download_cache_size_threshold: "גודל קובץ מזערי להטמנה (KB):",
		admin_p8_download_cache_size_threshold_hover: "ציינו את הגודל המזערי שבו CDHC ישמש להטמנת קבצים. אם הקובץ קטן מהגודל שצוין, הקובץ מנותב דרך שרת יישומי הרשת שבו מוצב FileNet Collaboration Services.‏ גודל הקובץ המחדלי הוא 1,000 KB.‏",
		admin_p8_download_guard_header: "HTTP header for gatekeeping:‎",
		admin_p8_download_guard_header_hover: "If a client application does not route a request through IBM HTTP Server, the cached content cannot be downloaded.‎ You can specify that only incoming requests with a specific HTTP header (which is added to requests from IBM HTTP Server) can access the cached content to prevent download failures.‎<br><br>The HTTP header is configured in IBM HTTP Server and is present on all incoming requests that are routed through IBM HTTP Server.‎ If a request does not have the HTTP header, the content is routed through the web application server rather than IBM HTTP server.‎",
		admin_p8_download_generate_config: "הפקת תצורה",
		admin_p8_download_generate_config_label: "תצורת IBM HTTP Server:‏",
		admin_p8_download_generate_config_label_hover: "כדי שתצורת CHDC תפעל, עליכם לעדכן את קובץ httpd.conf של IBM HTTP Server.‏ לחצו על 'הפקת תצורה' כדי להפיק את המשפטים שיש להוסיף לקובץ httpd.conf.‏",

		admin_logging_viewone_pro: "רישום ביומן של ViewONE Professional:‏",
		admin_logging_viewone_virtual: "רישום ביומן של ViewONE Virtual:‏",
		admin_logging_viewone_streamer: "רישום ביומן של Document Streaming Server Module:‏",
		admin_logging_viewone_streamer_hover: "אפשרויות הרישום ביומן של Document Streaming Server Module חלות רק אם הפעלתם הזרמה עבור קובצי PDF או TIFF בחלק <b>Daeja ViewONE</b> של כלי המנהלה.",
		admin_logging_viewone_redaction: "רישום ביומן של Permanent Redaction Server Module:‏",
		admin_logging_viewone_redaction_hover: "אפשרויות הרישום ביומן של Permanent Redaction Server Module חלות רק אם אתם זכרים להשתמש במודול העריכה של Daeja ViewONE Professional.‏",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "הזרמת קובצי PDF:‏",
		admin_daeja_viewonepro_stream_pdf_hover_help: "אם יש מסמכי PDF גדולים במאגר שלכם, תוכלו להגדיר את המציג להזרמת תוכן מסמכים כדי שמשתמשים יוכלו להציג מסמכים אלה במהירות רבה יותר. עם זאת, אם הזרמה אינה עובדת בסביבה שלכם, תוכלו להשבית את ההזרמה.",
		admin_daeja_viewonepro_stream_tiff_documents: "הזרמת קובצי TIFF:‏",
		admin_daeja_viewonepro_stream_tiff_hover_help: "אם יש מסמכי TIFF גדולים במאגר שלכם, תוכלו להגדיר את המציג להזרמת תוכן מסמכים כדי שמשתמשים יוכלו להציג מסמכים אלה במהירות רבה יותר. עם זאת, אם הזרמה אינה עובדת בסביבה שלכם, תוכלו להשבית את ההזרמה.",
		admin_daeja_viewonepro_show_file_buttons: "לחצני קבצים",
		admin_daeja_viewonepro_show_file_menus: "תפריטי קבצים",
		admin_daeja_viewonepro_enable_file_keys: "מקשי קיצור לקבצים",
		admin_daeja_viewonepro_file_keys_hover_help: "ציינו אם משתמשים יוכלו להשתמש במקשי קיצור במקלדת לעבודה עם קבצים, לדוגמה, כדי לפתוח או לשמור קובץ. כדי לקבל מידע נוסף על מקשי קיצור מסוימים, ראו את תיאור הפרמטר FileKeys בספר ההדרכה IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "לחצני הדפסה",
		admin_daeja_viewonepro_show_print_menus: "תפריטי הדפסה",
		admin_daeja_viewonepro_enable_print_keys: "מקשי קיצור להדפסה",
		admin_daeja_viewonepro_print_keys_hover_help: "ציינו אם משתמשים יוכלו להשתמש במקשי קיצור במקלדת להדפסת קבצים, לדוגמה, כדי להדפיס דף או מסמך. כדי לקבל מידע נוסף על מקשי קיצור מסוימים, ראו את תיאור הפרמטר PrintKeys בספר ההדרכה IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "לחצני היפוך",
		admin_daeja_viewonepro_annotation_tooltip: "תיאור כלי בברירת מחדל לביאור מותאם:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "ציינו את התמליל שיוצג כשלא מצוין תיאור כלי עבור ביאור מותאם. התמליל יכול לכלול אסימונים ניתנים להחלפה. לדוגמה, &quot;&lt;creator&gt; יצר ביאור זה בתאריך &lt;createdateonly&gt;.&quot; כדי לקבל מידע נוסף על אסימונים ניתנים להחלפה, ראו את תיאור הפרמטר customAnnotationsToolTip בספר ההדרכה IBM Daeja ViewONE Parameters Reference Manual.‏",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "השתמשו בתיאור כלי מותאם אישית שהוגדר מראש",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "השתמשו בתיאור כלי מותאם אישית שהוגדר על-ידי המערכת המופיע בתיבת התמליל להלן.",
		admin_daeja_viewonepro_help_url: "URL עזרה:",
		admin_daeja_viewonepro_help_url_hover_help: "ציינו את ה-URL של דף הרשת המכיל תיעוד עזרה עבור המציג. לחצן העזרה בסרגל הכלים של המציג ופעולת התפריט 'עזרה' פותחים את דף הרשת. אם לא תציינו URL, לחצן העזרה ופעולת העזרה בתפריט אינם מוצגים.",
		admin_daeja_viewonepro_image_stamp_resource_context: "הקשר משאב של חותמת תמונה:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "משימה",
		admin_daeja_viewonepro_route_docs: "ניתוב תוכן לא נתמך לדפדפן:",
		admin_daeja_viewonepro_route_docs_hover_help: "משתמשים יכולים להציג קובצי תמונה לא נתמכים באמצעות ניתובם לדפדפן, הפותח את היישום המתאים להצגת הקובץ. לדוגמה, כדי לפתוח מסמך של Microsoft Word,‏ הדפדפן משתמש במציג Microsoft Word.‏",
		admin_daeja_viewonepro_scale: "התאמה אוטומטית של תמונה:",
		admin_daeja_viewonepro_scale_best: "התאמה מיטבית",
		admin_daeja_viewonepro_scale_ftow: "התאמה לרוחב",
		admin_daeja_viewonepro_scale_ftoh: "התאמה לגובה",
		admin_daeja_viewonepro_enable_hotkeys: "הפעלת מקשי קיצור:",
		admin_daeja_viewonepro_show_features: "הצגת לחצנים ותפריטים:",
		admin_daeja_custom_settings: "הגדרות נוספות:",
		admin_daeja_custom_settings_hover_help: "כדי להוסיף פרמטרים אחרים, ציינו את שם הפרמטר וערכו. לדוגמה, תוכלו לציין &quot;scrollbars&quot; ואת הערך &quot;true&quot; אם ברצונכם להציג סרגלי גלילה כשגודל התמונה משתנה לגודל החורג מאזור התצוגה. כדי לקבל מידע נוסף על שמות פרמטרים וערכיהם, ראו IBM Daeja ViewONE Parameters Reference Manual.‏",
		admin_daeja_virtual: "וירטואלי",
		admin_daeja_virtual_annotation_tooltip: "תיאור כלי בברירת מחדל לביאור מותאם:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "ציינו את התמליל שיוצג כשלא מצוין תיאור כלי עבור ביאור מותאם. התמליל יכול לכלול אסימונים ניתנים להחלפה. לדוגמה, &quot;&lt;creator&gt; יצר ביאור זה בתאריך &lt;createdateonly&gt;.&quot; כדי לקבל מידע נוסף על אסימונים ניתנים להחלפה, ראו את תיאור הפרמטר customAnnotationsToolTip בספר ההדרכה IBM Daeja ViewONE Parameters Reference Manual.‏",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "השתמשו בתיאור כלי מותאם אישית שהוגדר מראש",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "השתמשו בתיאור כלי מותאם אישית שהוגדר על-ידי המערכת המופיע בתיבת התמליל להלן.",
		admin_daeja_virtual_image_stamp_resource_context: "הקשר משאב של חותמת תמונה:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "משימה",
		admin_daeja_virtual_license_path:"נתיב קובצי רישיון:",
		admin_daeja_virtual_license_path_hover_help:"ציינו את הנתיב המלא של המדריך שמכיל את קובצי הרישיון lic-server-virtual.v1 ו-lic-server.v1.",
		admin_default_license_path:"שימוש בנתיב ברירת המחדל לקובצי רישיון",
		admin_license_path_specified:"שימוש בנתיב מותאם אישית לקובצי רישיון",

		admin_daeja_streamer: "שרת",
		admin_daeja_streamer_cache_root: "מדריך מטמון:",
		admin_daeja_streamer_cache_root_hover_help: "ציינו את הנתיב המלא של המדריך שבו תרצו לאחסן קבצים מוטמנים לגישה מהירה יותר. המדריך יכול להיות בכל מערכת הפעלה או התקן, כגון מדריך רשת משותף, אם הוא גלוי כמערכת קבצים עבור IBM Content Navigator ועבור IBM HTTP Server.‏השתמשו במדריך מקומי לשיפור הביצועים.",
		admin_daeja_streamer_settings: "הגדרות נוספות:",
		admin_daeja_streamer_settings_hover_help: "כדי להוסיף פרמטרים אחרים, ציינו את שם הפרמטר וערכו. לדוגמה, תוכלו לציין “cookieAllowedDomainList” עם רשימה מופרדת בפסיקים של שרתים מארחים.  כדי לקבל מידע נוסף על שמות פרמטרים וערכיהם, ראו IBM Daeja ViewONE Parameters Reference Manual.‏",

		admin_daeja_redaction: "עריכה קבועה",
		admin_daeja_redaction_settings: "הגדרות:",
		admin_daeja_redaction_settings_hover_help: "כדי להוסיף פרמטרים אחרים, ציינו את שם הפרמטר וערכו. לדוגמה, תוכלו לציין “burnIncrementalAnnotations” עם הערך ”true”.‏ כדי לקבל מידע נוסף על שמות פרמטרים וערכיהם, ראו IBM Daeja ViewONE Parameters Reference Manual.‏",

		admin_daeja_setting_dialog_title_new: "הגדרה חדשה",
		admin_daeja_setting_dialog_title_edit: "עריכת הגדרה",
		admin_daeja_setting_dialog_hover_help: "כדי להוסיף פרמטרים אחרים, ציינו את שם הפרמטר וערכו. לדוגמה, תוכלו לציין “scrollbars” ואת הערך “true” אם ברצונכם להציג סרגלי גלילה כשגודל התמונה משתנה לגודל החורג מאזור התצוגה.",
		admin_daeja_setting_dialog_field_hover_help: "כדי לקבל מידע נוסף על שמות פרמטרים וערכיהם, ראו Daeja ViewONE Parameter Reference Manual.‏",

		admin_daeja_logging: "רישום Daeja ViewONE",
		admin_daeja_logging_trace: "הפעלת רישום מעקב",
		admin_daeja_logging_trace_net: "הפעלת רישום רשת",
		admin_daeja_logging_trace_annotations: "הפעלת רישום ביאורים",
		admin_daeja_logging_log_file: "קובץ יומן:",
		admin_daeja_logging_instructions: "תוכלו להשתמש ברישום ביומן לאבחון בעיות של  Daeja ViewONE Professional ושל Daeja ViewONE Virtual.‏ אם ידוע לכם שהבעיה אירעה במאפיין מסוים, תוכלו לכוון את הרישום לאותו מאפיין.",

		admin_v1pro_logging_trace_hover: "השתמשו בהגדרה זו לאבחון בעיות כלליות במציג.<br><br>פרטי הרישום נכתבים לקונסול Java במחשב הלקוח. תוכלו לגשת לקונסול Java מלוח הבקרה (Windows) או מהעדפות המערכת (Mac) של מערכת ההפעלה.",
		admin_v1pro_logging_trace_net_hover: "השתמשו בהגדרה זו לאבחון הבעיות שלהלן:<ul><li>בעיות עם חיבורים לשרת</li><li>בעיות עם סוגי MIME</li><li>בעיות עם קבצים גדולים מדי</li></ul>בנוסף, תוכלו להשתמש ברישום מעקב רשת כדי לברר היכן יש עיכובים בזמן השימוש ב-Daeja ViewONE Professional.‏<br><br>פרטי הרישום נכתבים לקונסול Java במחשב הלקוח. תוכלו לגשת לקונסול Java מלוח הבקרה (Windows) או מהעדפות המערכת (Mac) של מערכת ההפעלה.",
		admin_v1pro_logging_trace_annotations_hover: "השתמשו בהגדרה זו לאבחון בעיות ביצירה, שמירה או טעינה של ביאורים.<br><br>פרטי הרישום נכתבים לקונסול Java במחשב הלקוח. תוכלו לגשת לקונסול Java מלוח הבקרה (Windows) או מהעדפות המערכת (Mac) של מערכת ההפעלה.",

		admin_virtual_logging_trace_hover: "השתמשו בהגדרה זו לאבחון בעיות כלליות במציג.<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ  virtual.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_virtual_logging_trace_net_hover: "השתמשו בהגדרה זו לאבחון הבעיות שלהלן:<ul><li>בעיות עם חיבורים לשרת</li><li>בעיות עם סוגי MIME</li><li>בעיות עם קבצים גדולים מדי</li></ul>בנוסף, תוכלו להשתמש ברישום מעקב רשת כדי לברר היכן יש עיכובים בזמן השימוש ב-Daeja ViewONE Virtual.‏<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ  virtual.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_virtual_logging_trace_annotations_hover: "השתמשו בהגדרה זו לאבחון בעיות ביצירה, שמירה או טעינה של ביאורים.<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ  virtual.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_virtual_logging_log_file_hover: "אם אתם מפעילים רישום עבור היומן, עליכם לציין נתיב משויך מלא ושם של קובץ היומן שבו יאוחסן מידע הרישום.  מומלץ ששם הקובץ יהיה virtual.log.‏",

		admin_streamer_logging_trace_hover: "השתמשו בהגדרה זו לאבחון בעיות כלליות של Document Streaming Server Module.‏<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ streamer.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_streamer_logging_trace_net_hover: "השתמשו בהגדרה זו לאבחון הבעיות שלהלן:<ul><li>בעיות עם חיבורים לשרת</li><li>בעיות עם סוגי MIME מסוימים</li><li>בעיות עם קבצים גדולים מדי</li></ul>בנוסף, תוכלו להשתמש ברישום מעקב רשת כדי לברר היכן יש עיכובים בזמן השימוש ב-Document Streaming Server Module.‏<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ streamer.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_streamer_logging_log_file_hover: "אם אתם מפעילים רישום עבור Document Streaming Server Module,‏ עליכם לציין נתיב משויך מלא ושם של קובץ היומן שבו יאוחסן מידע הרישום.  מומלץ ששם הקובץ יהיה streamer.log.‏",

		admin_redaction_logging_trace_hover: "השתמשו בהגדרה זו לאבחון בעיות כלליות של Permanent Redaction Server Module.‏<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ redacttofile.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_redaction_logging_trace_net_hover: "השתמשו בהגדרה זו לאבחון הבעיות שלהלן:<ul><li>בעיות עם חיבורים לשרת</li><li>בעיות עם סוגי MIME מסוימים</li><li>בעיות עם קבצים גדולים מדי</li></ul>בנוסף, תוכלו להשתמש ברישום מעקב רשת כדי לברר היכן יש עיכובים בזמן השימוש ב-Permanent Redaction Server Module.‏<br><br>כברירת מחדל, מידע הרישום נכתב לקובץ redacttofile.log בתת-מדריך config של מדריך ההתקנה של IBM Content Navigator.‏",
		admin_redaction_logging_log_file_hover: "אם אתם מפעילים רישום עבור Permanent Redaction Server Module, עליכם לציין נתיב משויך מלא ושם של קובץ היומן שבו יאוחסן מידע הרישום.  מומלץ ששם הקובץ יהיה redacttofile.log.‏",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "הגדרת מאפיינים עבור המציגים והשירותים שלכם.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "אם אתם משתמשים בלקוח הדפדפן כדי להתחבר אל מאגרים של Content Manager OnDemand,‏ עליכם לציין מידע הדרוש לפעולה תקינה של OnDemand Web Enablement Kit.‏ מידע זה משותף לכל מאגרי Content Manager OnDemand המוגדרים עבור לקוח הדפדפן.",
		admin_ondemand_language: "שפה:",
		admin_ondemand_tempdir: "מדריך זמני של ODWEK:",
		admin_ondemand_tracegrp: "מעקב ODWEK",
		admin_ondemand_tracedir: "מדריך מעקב:",
		admin_ondemand_tracelevel: "רמת מעקב:",
		admin_ondemand_tracelevel_0: "0 - ללא רישום",
		admin_ondemand_tracelevel_1: "1 - רישום הודעות שגיאה",
		admin_ondemand_tracelevel_2: "2 - רישום הודעות שגיאה ואזהרה",
		admin_ondemand_tracelevel_3: "3 - רישום הודעות שגיאה, אזהרה ומידע",
		admin_ondemand_tracelevel_4: "4 - כל ההודעות נלכדות, כולל מעקב פונקציות",
		admin_ondemand_max_trace_filesize: "גודל מרבי של קובץ מעקב:",
		admin_ondemand_max_trace_filesize_unlimited: "ללא הגבלה",
		admin_ondemand_max_trace_filesize_limited: "מוגבל (מומלץ)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "הערך מחוץ לטווח. הערך חייב להיות מספר שלם בטווח 1 עד 1,000,000.",
		admin_ondemand_afp2pdf_installdir: "מדריך התקנה של AFP2PDF:",
		admin_ondemand_language_hover: "ציינו את השפה שבה ODWEK יחזיר הודעות.",
		admin_ondemand_tempdir_hover: "ציינו את המדריך שבו OnDemand Web Enablement Kit מאחסן קבצים זמניים במהלך העיבוד. עליכם לציין את הנתיב המלא של מדריך קיים בשרת היישומים.",
		admin_ondemand_tracedir_hover: "ציינו את המדריך שבו ברצונכם לאחסן את קובץ המעקב ODWEK,‏ arswww.trace. עליכם לציין את הנתיב המלא של מדריך קיים בשרת היישומים.",
		admin_ondemand_tracelevel_hover: "ציינו את רמת מידע הרישום שייכתב לקובץ arswww.trace. האפשרות <b>רישום הודעות שגיאה</b> לוכדת כמות מזערית של מידע רישום. האפשרות <b>כל ההודעות נלכדות, כולל מעקב פונקציות </b>  לוכדת את כמות המידע המרבית.<br /><br />אל תציינו <b>כל ההודעות נלכדות, כולל מעקב פונקציות </b> בסביבת ייצור אלא אם הונחיתם לעשות זאת על ידי תמיכת התוכנה של IBM.‏",
		admin_ondemand_max_trace_filesize_hover: "ציינו אם לאפשר לקובץ המעקב של ODWEK לגדול לגודל לא מוגבל, או אם לקוח הדפדפן ייצור קובצי יומן חדשים כשהקובץ מגיע לגודל מסוים. ברירת המחדל היא לאפשר לקובץ המעקב לגדול עד שהיישום נעצר בשרת היישומים.",
		admin_ondemand_max_trace_unlimited_hover: "בחרו אפשרות זו כדי שמידע מעקב של ODWEK ייכתב לקובץ יומן יחיד. אם תבחרו את האפשרות, יתכן שקובץ היומן יהיה גדול מכדי לאפשר פתיחה במציג קבצים סטנדרטי.",
		admin_ondemand_max_trace_limited_hover: "בחרו אפשרות זו כדי שמידע מעקב של ODWEK ייכתב לקובצי יומן קטנים יותר. כשקובץ יומן מגיע לגודל המרבי, שמו מוחלף כך שיכלול את התאריך (arswww.trace.YYYYMMDD.HHMMSS) ונוצר קובץ יומן חדש.",
		admin_ondemand_afp2pdf_installdir_hover: "כדי להשתמש בשירות ההתמרה AFP2PDF להמרת מסמכי AFP למסמכי PDF לצורך הצגה והדפסה, ציינו את המדריך שבו מותקן שירות ההתמרה של AFP2PDF בשרת היישומים. לדוגמה: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.‏",

		admin_adminusers: "מנהלנים",
		admin_adminusers_heading_text_multi: "עליכם לציין את המשתמשים שיש להם הרשאות מנהלן בלקוח הדפדפן. רק מנהלנים יכולים להתחבר לשולחן העבודה 'מנהלה'.<br /><br /><b>חשוב:</b> זיהוי המשתמש של מנהלני IBM Content Navigator חייבים להיות:<ul><li>זיהויי משתמש שקיימים בשרת היישומים. זיהויי המשתמש אינם חייבים להיות מנהלנים בשרת היישומים.</li><li>זיהויי משתמש הקיימים במאגר ברירת המחדל המוגדר עבור כל שולחן עבודה הכולל את מאפיין המנהלה.</li></ul>",
		admin_adminusers_heading_text_single: "עליכם לציין את המשתמשים שיש להם הרשאות מנהלן בלקוח הדפדפן. רק מנהלנים יכולים להתחבר לשולחן העבודה 'מנהלה'.<br /><br /><b>חשוב:</b> זיהויי המשתמש של מנהלני IBM Content Navigator חייבים להיות זיהויי משתמש שקיימים בשרת היישומים. זיהויי המשתמש אינם חייבים להיות מנהלנים בשרת היישומים. זיהויי המשתמש אינם חייבים להיות מנהלנים בשרת היישומים.",
		admin_adminusers_newuser: "מנהלן חדש:",
		admin_adminusers_add: "הוספה",
		admin_adminusers_remove: "סילוק",
		admin_adminusers_listheading: "מנהלנים",
		admin_adminusers_nameInvalid: "הערך חייב להיות ייחודי.",

		admin_sync_server_instructions: "<b>משתמשי FileNet P8 בלבד:</b> אם בכוונתכם להפעיל שירותי סינכרון עבור מאגר אחד או יותר, עליכם להגדיר את לקוח הרשת להשתמש בשירותי הסינכרון. תצורת שירותי הסינכרון משותפת לכל המאגרים בסביבה שלכם.",
		admin_settings_instructions: "הערכים שתציינו בלשונית 'הגדרות' חלים על כל שולחנות העבודה בתצורה שלכם.",
		admin_autocomplete: "אכלוס אוטומטי של שמות משתמשים:",
		admin_autocomplete_hover: "ציינו אם רצונכם שלקוח הדפדפן יאחסן שמות משתמשים בקובצי cookie של הדפדפן לצורך אכלוס אוטומטי של שמות משתמשים בלקוח הדפדפן בזמן ההתחברות.<br><br>אם תפעילו אפשרות זאת, שם המשתמש של המשתמש האחרון שהתחבר ללקוח הדפדפן מוצג אוטומטית בדף ההתחברות כשמשתמש פותח את לקוח הדפדפן.<br><br>השביתו אפשרות זו אם הגישה ליישומים מתבצעת מתחנות עבודה משותפות, או אם אינכם מעוניינים ששמות משתמשים יאוחסנו בקובצי cookie של הדפדפן.<br /><br />אפשרות זו אינה חלה על יישומים ניידים או מותאמים.",
		admin_autocomplete_enable: "הפעלה",
		admin_autocomplete_disable: "השבתה",
		admin_cultural_collation: "שימוש במיון תלוי-אזור:",
		admin_cultural_collation_hover: "אם תפעילו מיון תלוי-אזור, המיון יבוצע בשרת המאגר. יתכן שהביצועים של לקוח הדפדפן יואטו כתוצאה מכך.<br><br>השבתת מיון תלוי-אזור יכולה לשפר את הביצועים של לקוח הדפדפן.",
		admin_cultural_collation_enable: "הפעלה",
		admin_cultural_collation_disable: "השבתה",
		admin_base_ui_style: "סגנון ערכה",
		admin_base_ui_style_hover: "ציינו את סגנון ערכת ברירת המחדל המשמשת בלקוח האינטרנט. סגנון זה משמש רק בשולחנות עבודה המשתמשים בערכת <b>ברירת המחדל</b> (כפי שמצוין בלשונית <b>מראה</b> בתצורת שולחן העבודה).<br/></br><b>הגבלה:</b> אם תצורות שולחן העבודה שלכם משתמשות בערכות מותאמות אישית, הערכות המותאמות אישית מבוססות על הסגנון הקלאסי, בלי קשר לסגנון שבחרתם.",
		admin_base_ui_style_classic: "קלאסי",
		admin_access_control_access: "הגבלת הגישה לקבוצות ולמשתמשים שצוינו:",
		admin_access_control_access_show: "הצגת נתוני בקרת גישה",
		admin_access_control_access_enable: "כן",
		admin_access_control_access_disable: "לא",
		admin_mobile_access: "לאפשר גישה מיישומים ניידים",
		admin_mobile_access_hover: "כברירת מחדל, משתמשים יכולים לגשת ללקוח הדפדפן מיישום IBM Content Navigator iOS.‏<br /><br /><b>חשוב:</b> אם תמנעו ממשתמשים לגשת ללקוח הדפדפן מיישום iOS,‏ משתמשים עדיין יוכלו לגשת ללקוח הדפדפן מדפדפנים בהתקנים הניידים שלהם ומיישומים מותאמים שנכתבו באמצעות ממשקי API של IBM Content Navigator ופועלים בהתקנים ניידים.",
		admin_mobile_access_enable: "כן",
		admin_mobile_access_disable: "לא",
		admin_error: "פרטי הודעת שגיאה:",
		admin_error_custom: "חיפוש בתוכן תמיכה מותאם",
		admin_error_default: "חיפוש בתוכן תמיה של IBM <BDO DIR='RLL'>(</BDO>ברירת מחדל<BDO DIR='RTL'>)</BDO>",
		admin_error_hover: "ציינו לאן ברצונכם להפנות משתמשים לקבלת מידע נוסף כשהם נתקלים בהודעת שגיאה. תוכלו להפנות משתמשים למידע בפורטל התמיכה של IBM, או להפנות משתמשים למשאבים פנימיים, כגון מוקד תמיכה.",
		admin_error_URL: "קידומת URL:",
		admin_error_URL_hover: "ציינו את ה-URL של המשאב שאליו יופנו משתמשים כשהם נתקלים בשגיאה, כגון מוקד תמיכה. לדוגמה: http://localhost:port_number.‏ לקוח הדפדפן מצרף את מספר הודעת השגיאה אל ה-URL.‏",
		admin_prompt_close_without_save: "האם ברצונכם לסגור בלי לשמור את השינויים?‏",
		admin_object_expiration_time: "מרווח רענון מטמון (בדקות)",
		admin_object_expiration_time_hover: "תוכלו להגדיר כמה זמן אובייקטי תצורה, כגון שולחנות עבודה, יישמרו במטמון כדי לשפר את הביצועים של לקוח הדפדפן.  המשך המחדלי הוא 10 דקות. המשך המרבי הוא 1440 דקות (יום אחד).<br /><br />עליכם להפעיל את יישום הרשת מחדש כדי שהשינויים ייכנסו לתוקף.<br /><br />אם IBM Content Navigator מוצב בסביבת אשכול בעלת זמינות גבוהה, כל שינוי באובייקטי התצורה יפעפע אל הצמתים באשכול רק לאחר שהמטמון ירוענן.",
		admin_temp_file_cleanup_interval: "מרווח סריקה לניקוי זיכרון המטמון של המציג (בשעות)",
		admin_temp_file_cleanup_interval_hover: "תזמנו את התדירות שבה הספרייה הזמנית תיסרק כדי למצוא קבצים זמניים שתוקפם פג ולמחוק אותם. ברירת המחדל היא שהספרייה נסרקת בכל שש שעות. באפשרותכם לקבוע פרק זמן אחר, מ-6 עד 48 שעות",
		admin_temp_file_expiration_interval: "ניקוי זיכרון המטמון של המציג (בשעות):",
		admin_temp_file_expiration_interval_hover: "קבעו את משך הזמן שבו הקבצים הקשורים לפעילויות במציג יישארו בזיכרון המטמון של הדפדפן. ברירת המחדל היא שהקבצים הזמניים יימחקו לאחר 24 שעות. ניתן לציין בין 12  ל-48 שעות",
		admin_encryption_key_hover: "מפתח המשמש עבור פונקציות הצפנה של Navigator",
		admin_encryption_key: "מפתח הצפנה:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "מיתוג",
		admin_mobile_branding_main_color: "צבע עיקרי:",
		admin_mobile_branding_secondary_color: "צבע משני:",
		admin_mobile_device_title: "ניהול MaaS360",
		admin_mobile_device_enable_maas360: "הפעלת MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "הפעלת עזרת ריחוף של MaaS360 ממוקמת כאן",
		admin_mobile_device_maas360_developer_id: "זיהוי מפתח של MaaS360:",
		admin_mobile_device_maas360_license_key: "מפתח רישיון של MaaS360:",
		admin_mobile_settings_title: "הגדרות",
		admin_mobile_email_address_hover_help: "נעשה שימוש בכתובת הדואל ביישום הנייד כאשר המשתמש לוחץ על \"שליחת דוח שגיאות.\"",
		admin_mobile_email_address: "כתובת דואל:",
		admin_invalid_email_address_message: "פורמט כתובת הדואל שצוינה שגוי. ציינו את הכתובת הנכונה ונסו שוב.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "חלק מהנתונים אינם חוקיים.",
		admin_configuration_parameters: "פרמטרי תצורה",
		admin_configuration_optional_features: "מאפיינים אופציונליים",
		admin_configuration_optional_features_p8_instructions: "בחרו את המאפיינים שברצונכם להפעיל במאגר זה.<p><b>חשוב:</b> אם תפעילו מאפיין המתקין תוספים במאגר, עליכם להיות מחוברים למאגר כמנהלני Content Platform Engine או Content Engine.‏</p>",
		admin_configuration_optional_features_cm_instructions: "בחרו את המאפיינים שברצונכם להפעיל במאגר זה.<p><b>חשוב:</b> מאפיינים אלה משנים את מודל הנתונים של המאגר. כדי להפעיל אותם, עליכם להיות מחוברים למאגר כמנהלני שרת ספריה.</p>",
		admin_system_properties: "תכונות מערכת",
		admin_system_properties_for: "תכונות מערכת עבור:‏",
		admin_available_properties: "תכונות זמינות",
		admin_displayed_properties: "תכונות מוצגות",
		admin_selected_properties: "תכונות שנבחרו",
		admin_selected_filtered_properties: "תכונות מוסתרות",
		admin_available_operators: "אופרטורים מוצגים",
		admin_selected_filtered_operators: "אופרטורים מוסתרים",
		admin_system_properties_shown: "אופרטורים מוצגים",
		admin_system_properties_hidden: "תכונות מוסתרות",
		admin_available_menu_items: "פעולות זמינות:",
		admin_selected_menu_items: "פעולות שנבחרו:",
		admin_menu_global: "חל אם לא נבחרו פריטים:",
		admin_menu_multiple_document: "חל אם נבחרו פריטים מרובים:",
		admin_menu_privileges: "הרשאות דרושות:",
		admin_menu_plugin: "תוסף:",
		admin_menu_repository_types: "סוגי מאגר:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "מפריד",
		admin_browse: "עיון",
		admin_search: "חיפוש",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "עריכה על בסיס תפקיד",
		admin_connections_library_enabled: "IBM Connections מופעל",
		admin_office_conf: "עריכת שילוב",
		admin_desktop_conf_label: "תצורת שולחן עבודה",
		admin_ms_office_conf_label: "תצורת Office",
		admin_workflows: "תזרימי-עבודה",
		admin_file_types: "סוגי קבצים",
		admin_file_type_contains_label: "סוג הקובץ מכיל",
		admin_name_propepty: "שם",
		admin_cm_name_property_default: "שימוש בשם המחדלי",
		admin_cm_name_property_default_hover: "כברירת מחדל, תכונת השם ההיררכי של ICM ‏(ICM$NAME) משמשת כשם הפריט, אם התכונה מוגדרת עבור הפריט.  אם תכונת השם ההיררכי של ICM ‏(ICM$NAME) אינה זמינה, התכונה הראשונה המסומנת בתור \"represents\" משמשת כשם הפריט.",
		admin_cm_name_property: "ציון תכונת השם של פריט",
		admin_cm_name_property_hover: "ציינו את התכונה שתשמש כשם עבור מסמכים ותיקיות.",
		admin_name_property: "תכונת שם:",
		admin_doc_name_property: "תכונת שם מסמך:",
		admin_doc_name_property_hover: "ציינו את המחלקה שתשמש כשם המסמך.",
		admin_folder_name_property: "תכונת שם תיקיה:",
		admin_folder_name_property_hover: "ציינו את המחלקה שתשמש כשם התיקיה.",
		admin_all_searches_label: "מספר החיפושים להצגה:",
		admin_unlimited: "ללא הגבלה",
		admin_limit: "הגבלה לערך",
		admin_repository: "מאגר:",
		admin_application_space: "מרחב יישומים",
		admin_available_application_spaces: "מרחבי יישומים זמינים:",
		admin_selected_application_spaces: "מרחבי יישומים שנבחרו:",
		admin_label: "תווית",
		admin_repository_box_placeholder: "יש לבחור במאגר Box",
		admin_repository_placeholder: "בחירת מאגר",
		admin_search_match: "התאמה:",
		admin_search_match_all: "התאמת כל הקריטריונים לחיפוש",
		admin_search_match_any: "התאמת קריטריון כלשהו מהקריטריונים לחיפוש",
		admin_search_match_hover: "ציינו איזו אפשרות תיבחר כברירת מחדל בתפריט <b>אפשרויות תכונות</b>.",

		admin_repository_redactions_instructions: "ניתן להגדיר עריות על בסיס תפקיד עבור מאגר זה.",
		admin_repository_redaction_policies_description: "ניתן ליצור ולנהל מדיניות עריכה, המשייכת סיבות עריכה למשתמשים וקבוצות שיכולים לקרוא נתונים רגישים ולערוך ביאורים המגנים על נתונים רגישים אלה בהסתרתם.",
		admin_repository_redaction_roles_instruction: "ניתן ליצור חוק עריכה כדי לשייך את הלקוחות והקבוצות שציינתם ליכולת לקרוא את הנתונים הרגישים או ליכולת לערוך את הביאורים המגנים על נתונים רגישים אלה בהסתרתם. תפקיד העריכה חייב להיות משוייך לסיבת עריכה במדיניות עריכה כדי שמשתמשים וקבוצות אלה יוכלו לקרוא את הנתונים או לערוך את הביאורים.",
		admin_repository_redaction_reasons_instruction: "ניתן להגדיר סיבות עריכה עבור המאגר שלכם.",
		admin_repository_redaction_policies: "תצורת מדיניות עריכה",
		admin_repository_redaction_roles: "תצורת תפקידי עריכה",
		admin_repository_redaction_reasons: "תצורת סיבות עריכה",
		admin_repository_redaction_roles_type: "סוג",
		admin_repository_redaction_roles_type_hover: "עורך יכול ליצור, לשנות או למחוק סוגים מסוימים של עריכות על בסיס תפקיד; צופה יכול לצפות בסוגים מסוימים של נתונים רגישים.",
		admin_repository_redaction_roles_type_editor: "עורך",
		admin_repository_redaction_roles_type_viewer: "מציג",
		admin_repository_redaction_roles_membership: "חברות",
		admin_repository_redaction_roles_membership_hover: "בחרו את העורכים שאתם רוצים שיהיה להם תפקיד זה.",
		admin_repository_redaction_roles_user_group_hover: "חפשו את המשתמשים והקבוצות או בחרו בעורכים שאתם רוצים שיהיה להם תפקיד זה.",
		admin_repository_redaction_roles_description: "ניתן ליצור ולנהל תפקידי עריכה, המשייכים משתמשים וקבוצות ליכולת לקרוא נתונים רגישים ולערוך ביאורים המגנים על נתונים רגישים בהסתרתם.",
		admin_repository_redaction_new: "תפקיד עריכה חדש",
		admin_repository_redaction_role_avail_editors: "עורכי עריכה זמינים",
		admin_repository_redaction_role_avail_users: "משתמשים זמינים",
		admin_repository_redaction_role_avail_groups: "קבוצות זמינות",
		admin_repository_redaction_role_selected_editors: "עורכי העריכה הנבחרים",
		admin_repository_redaction_role_selected_users_groups: "משתמשים וקבוצות שנבחרו",
		admin_repository_redaction_role_add_editor: "עורכים חדשים...",
		admin_repository_redaction_role_access_type: "גישה",
		admin_repository_redaction_role_access_type_access: "התרה",
		admin_repository_redaction_role_access_type_no_access: "שלילה",
		admin_repository_redaction_role_users: "משתמשים",
		admin_repository_redaction_role_groups: "קבוצות",
		admin_repository_redaction_role_editors: "עורכים",
		admin_delete_confirmation_redaction_roles: "האם ברצונכם למחוק את תפקידי העריכה שנבחרו?",
		admin_repository_edit_redaction_role: "סיבות עריכה: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "גישת ברירת-מחדל",
		// RBA
		desktop_user_group_acl: "מנהלני שולחן עבודה",
		desktop_user_group_remove: "סילוק",
		desktop_rba_membership: "חברות:",
		desktop_rba_membership_list_label: "שם",
		admin_repository_redaction_policy_hover: "ספקו תיאור שיאפשר למשתמשים להבדיל בין מדיניות זו למדיניות אחרת.",
		admin_repository_new_redaction_policy: "מדיניות עריכה חדשה",
		admin_repository_policy_name: "שם מדיניות",
		admin_repository_reason_redactions: "סיבות עריכה:",
		admin_repository_role_editors: "עורכים",
		admin_repository_role_viewers: "מציגים",
		admin_repository_redaction_policy_instruction: "ניתן ליצור מדיניות עריכה לשיוך סיבות העריכה הנבחרות גם לעורכי עריכה וגם לצופי עריכה.",
		admin_repository_redaction_reasons_hover: "בחרו סוג אחד או יותר של נתונים רגישים שאינכם רוצים שרוב המשתמשים יוכלו לראות, לדוגמה, מידע שניתן לזהות ממנו אישיות, סודות מסחר או מידע חסוי או פרטי לחברה שלכם.",
		admin_repository_readaction_available_reasons: "סיבות זמינות",
		admin_repository_readaction_selected_reasons: "סיבות שנבחרו",
		admin_repository_readaction_new_reason: "סיבה חדשה...",
		admin_repository_redeaction_reasons: "סיבות עריכה:",
		admin_repository_readaction_editor_permmission: "עורכי עריכה:",
		admin_repository_redaction_editors_hover: "בחרו את התפקידים שיוכלו ליצור ולשנות את העריכה בסיבות שנבחרו.",
		admin_repository_readaction_new_editor_role: "תפקיד עורך חדש...",
		admin_repository_readaction_available_editors: "תפקידי עורך זמינים",
		admin_repository_readaction_selected_editors: "תפקידי עורך שנבחרו",
		admin_repository_readaction_viewer_permmission: "צופי עריכה:",
		admin_repository_redaction_viewers_hover: "בחרו את התפקידים שיוכלו לצפות בנתונים הרגישים בסיבות שנבחרו. העריכה אינה חלה על משתמשים וקבוצות בתפקידים אלה.",
		admin_repository_readaction_new_viewer_role: "תפקיד צופה חדש...",
		admin_repository_readaction_available_viewers: "תפקידי צופה זמינים",
		admin_repository_readaction_selected_viewers: "תפקידי צופה שנבחרו",
		admin_repository_reason_redactions_header: "סיבה לעריכה",
		admin_delete_confirmation_redaction_policy: "האם ברצונכם למחוק את מדיניות העריכה שנבחרה?",
		admin_role_type_repository: "מאגר",
		admin_role_type_administrator: "מנהלן",
		admin_role_type_template: "תבנית",
		admin_role_type_teamspace: "מרחב צוות",
		admin_role_type_author: "עורך",
		admin_role_type_user: "מציג",
		admin_collaboration_services_instructions: "אם יש לכם IBM Connections ויישום רשת של FileNet Collaboration Services,‏ תוכלו להגדיר מרחבי צוות של קהילות וזרמי פעילויות עבור המאגר.",
		admin_collaboration_services: "FileNet Collaboration Services:‏",
		admin_collaboration_community: "תצורת ספריות קהילה",
		admin_collaboration_community_instruction: "תוכלו להגדיר מאגר אחד במיתחם IBM FileNet P8 לאחסן ספריות קהילה של IBM Connections (נקראות גם מרחבי צוות). כשמשתמשים יוצרים קהילה באמצעות IBM Connections,‏ היא מאוחסנת במאגר המוגדר כמאגר ספריות הקהילה.",
		admin_collaboration_community_teamspaces: "שימוש במאגר זה עבור ספריות קהילה:",
		admin_collaboration_community_teamspaces_hover: "תוכלו להשתמש רק במאגר אחד במיתחם IBM FileNet P8 שלכם לאחסון ספריות קהילה חדשות. אם תפעילו מאגר זה ויש לכם מאגר קיים, המאגר הקיים יושבת. עם זאת, ספריות קיימות יישארו במאגר הנוכחי.",
		admin_collaboration_connections_anonymous: "לאפשר גישה אנונימית לתוכן ציבורי:",
		admin_collaboration_connections_anonymous_hover: "אם שרת IBM Connections מכיל קהילות ציבוריות או קהילות בפיקוח, תוכלו להגדיר את שירותי FileNet Collaboration כך שיאפשרו למשתמשים לעיין ולהוריד תוכן מספריות בקהילות אלה מבלי להתחבר תחילה.<br><br>משתמשים הניגשים לספריות קהילה באופן אנונימי אינם יכולים ליצור, לשנות או למחוק תוכן.<br><br><b>חשוב:</b> עליכם להגדיר משתמש של IBM FileNet P8 LDAP כמשתמש האנונימי ולהגדיר משתמש זה עם התפקיד <b>Anonymous</b> בתוך WebSphere Application Server.‏",
		admin_collaboration_connections_url: "URL של IBM Connections:‏",
		admin_collaboration_connections_url_hover: "ציינו את ה-URL של שרת IBM Connections במבנה http://IBMConnectionsServer:port_number.‏  אם IBM Connections מוגדר להשתמש בשרת BM HTTP,‏ תוכלו להשמיט את מספר היציאה מה-URL.‏<br><br>ה-URL חייב להיות נגיש למשתמשי IBM Connections מאחר שזהו הקישרו שבו משתמש FileNet Collaboration Services ליצירת קישורים לדפי נחיתה בתוך IBM Connections.‏",
		admin_collaboration_connections_url_http_use: "שימוש ב-URL של IBM Connections‏",
		admin_collaboration_connections_url_https_use: "שימוש ב-URL HTTPS של IBM Connections‏",
		admin_collaboration_connections_url_specify: "ציינו את ה-URL",
		admin_collaboration_connections_url_https: "URL HTTPS של IBM Connections:‏",
		admin_collaboration_connections_url_https_hover: "אם IBM Connections מוגדר להשתמש ב-SSL,‏ ציינו את URL HTTPS של שרת IBM במבנה https://IBMConnectionsServer:port_number.‏  אם IBM Connections מוגדר להשתמש בשרת BM HTTP,‏ תוכלו להשמיט את מספר היציאה מה-URL.‏",

		admin_collaboration_connections_gadget_url: "URL אבזר של IBM Connections:‏",
		admin_collaboration_connections_retrieval_url: "URL אחזור של IBM Connections:‏",
		admin_collaboration_connections_security: "מנהלני קהילה:",
		admin_collaboration_connections_security_hover: "ציינו את המשתמשים והקבוצות היכולים לנהל תוכן בספריות קהילה.<br><br>מנהלנים גלובליים יכולים ליצור, לשנות, למחוק ולספק גישה לספריות קהילה ולתוכן של ספריות קהילה. כשתציינו משתמש כמנהלן גלובלי, משתמש זה יקבל הרשאות  ClbGlobalAdministrator במאגר.<br><br>מנהלני סקירה גלובליים יכולים לאשר ולפסול תוכן הנמצא בסקירה לקראת פרסום בספריית קהילה. כשתציינו משתמש כמנהלן סקירה גלובלי, משתמש זה יקבל הרשאות  ClbGloablReviewAdministrator במאגר.",

		admin_collaboration_connections_admins: "מנהלנים גלובליים",
		admin_collaboration_connections_admins_review: "מנהלני סקירה גלובליים",
		admin_collaboration_connections_seedlist: "מפתוח תוכן ספריית הקהילה:",
		admin_collaboration_connections_seedlist_hover: "ציינו אם IBM Connections יבצע נבירה בספריות הקהילה במאגר זה כדי ליצור אינדקס חיפוש. יצירת אינדקס יכולה להשפיע על ביצועי המאגר.<br><br>אם הרחבות Social Collaboration Search Indexing מותקנות במאגר, אפשרות זו מופעלת כברירת מחדל. אם הרחבות Social Collaboration Search Indexing אינן מותקנות במאגר, התוסף מותקן במאגר עם הפעלת אפשרות זו",
		admin_collaboration_activity_stream: "תצורת אירועים בזרם הפעילויות",
		admin_collaboration_activity_stream_label: "דחיפת פרטי אירועים אל IBM Connections:‏",
		admin_collaboration_activity_stream_label_hover: "ציינו אם פרטי אירועים, כגון יצירת מסמכים, משיכות, הפקדות, הערות, תגים ושיתופים, יידחפו אל IBM Connections.‏<br><br><b>חשוב</b> דחיפת דיווים אל IBM Connections יכולה להשפיע על ביצועי המאגר.",

		admin_collaboration_activity_stream_instruction: "תוכלו להגדיר מאגר זה לדחיפת פרטי אירועים, כגון הערות ואישורי מסמכים, אל IBM Connections.‏ אירועים מוצגים בדף <b>עדכונים אחרונים</b> בקהילות IBM Connections.‏ ",
		admin_collaboration_activity_stream_ignored_ids: "התעלמות מפרטי אירועים עבור משתמשים וקבוצות מסוימים:",
		admin_collaboration_activity_stream_ignored_ids_hover: "תוכלו להתעלם מאירועים המופקים על ידי משתמשים או קבוצות מסוימים, כגון מנהלנים או חשבונות מערכת, כדי לצמצם את מספר הדיווחים שהמשתמשים רואים. לדוגמה, אם אתם מבצעים הגירה של תוכן, אולי תרצו לציין שיש להתעלם אירועים המופקים על ידי החשבון המשמש להגירה.",
		admin_collaboration_activity_stream_userid: "שם משתמש של IBM Connections:‏",
		admin_collaboration_activity_stream_userid_hover: "ציינו את חשבון המערכת שבו ישתמש Content Platform Engine לאימות ולמשלוח פרטי אירועים אל IBM Connections.‏ המשתמש חייב להיות בתפקיד <b>trustedExternalApplication</b> ביישום Widget Container בתוך IBM Connections.‏<br><br><b>עצה:</b> כברירת מחדל, למנהלן IBM Connections יש ההרשאות המתאימות. תוכלו להשתמש בזיהוי המנהלן כשם המשתמש",
		admin_collaboration_activity_stream_password: "סיסמת משתמש של IBM Connections:‏",

		admin_help_url: "URL של עזרה למשתמש הקצה:",
		admin_help_url_hover: "<b>הערה חשובה:</b> IBM Knowledge Center Customer Installed לא יתעדכן החל מ-IBM Content Navigator, גרסה 3.0.0. צרו קשר עם שירות הלקוח לקבלת מידע נוסף על שימוש בעזרה מותאמת אישית.<br><br>החל מ-IBM Content Navigator, גרסה 3.0.0, כתובת ה-URL של עזרת משתמש הקצה מובילה ל-IBM Knowledge Center. כתובת ה-URL של IBM Knowledge Center היא: http://www.ibm.com/support/knowledgecenter.<br><br>אם ברצונכם להמשיך להשתמש בגרסה הקודמת של IBM Knowledge Center Customer Installed, ציינו את ה-URL של מופע IBM Knowledge Center Customer Installed שהוצב על ידי IBM Content Navigator Configuration and Deployment Tool.‏ ה-URL חייב להיות נגיש למחשבי לקוח. ה-URL הוא במבנה http://server_name:port_number/kc.<br><br>תוכלו לקבל את שם השרת ומספר היציאה מהקובץ console.log file בתת-מדריך KnowledgeCenter/logs במדריך ההתקנה של IBM Content Navigator.‏",

		admin_help_default: "שימוש בעזרה המחדלית המסופקת על ידי IBM",
		admin_custom_help: "שימוש במערכת עזרה מותאמת",
		admin_help_kc: "שימוש בעזרה מותאמת בתוך IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>הערה חשובה:</b> IBM Knowledge Center Customer Installed לא יתעדכן החל מ-IBM Content Navigator, גרסה 3.0.0. צרו קשר עם שירות הלקוח לקבלת מידע נוסף על שימוש בעזרה מותאמת אישית.<br><br>אם ברצונכם להמשיך להשתמש בגרסה הקודמת של IBM Knowledge Center Customer Installed, בחרו באפשרות זו כדי להמשיך להוסיף תוכן למופע IBM Knowledge Center Customer Installed שפרסתם בעבר.",
		admin_help_taxonomy: "קוד טקסונומיה:",
		admin_help_taxonomy_hover: "ציינו את קוד הטקסונומיה עבור העזרה המותאמת.<br><br>קוד הטקסונומיה עבור IBM Content Navigator הוא SSEUEX.‏ אם ברצונכם להציג עזרה תחת שם מוצר שונה בתוך IBM Knowledge Center Customer Installed,‏ עליכם להוסיף קוד טקסונומיה ייחודי לקובץ KC_taxonomy.ditamap במדריך KnowledgeCenter/usr/taxonomy תחת מדריך ההתקנה של IBM Content Navigator.‏",
		admin_help_context: "הקשר עזרה:",
		admin_help_context_hover: "ציינו את ההקשר עבור העזרה המותאמת.<br><br>העזרה עבור IBM Content Navigator נמצאת במדריך KnowledgeCenter/usr/content/com.ibm.usingeuc.doc תחת מדריך ההתקנה של IBM Content Navigator.‏ ההקשר של העזרה המחדלית הוא com.ibm.usingeuc.doc.‏ אם ברצונכם לספק עזרה מותאמת, הוסיפו את התוכן לתת-מדריך חדש במדריך  KnowledgeCenter/usr/content/‎.‏",
		admin_help_welcome: "דף נחיתה:",
		admin_help_welcome_hover: "ציינו את שם הנושא שישמש כדף הנחיתה כשמשתמשים ניגשים לעזרה. עליכם ליצור קובץ תוכן המציין את המיקום של דף הנחיתה ולהוסיף את קובץ התכונות למדריך KnowledgeCenter/usr/conf directory תחת מדריך ההתקנה של IBM Content Navigator.‏",

		admin_settings_mimetype_extensions_jsonfile: "קובץ JSON של הרחבות סוגי MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "אימות השם והנתיב המלא של קובץ ה-JSON. הקובץ יכול להיות קובץ כללי ממערכת הקבצים או כתובת URL המפנה לקובץ ה-JSON.  <br><br>התוכן של קובץ ה-JSON הוא מערך של הגדרות סוגי MIME. <br><br>הגדרת סוג MIME כוללת ארבעה מפתחות: \"mimeTypes\", ‏\"extensions\", ‏\"fileType\", ‏\"iconName\". שני המפתחות הראשונים, \"mimeTypes\", ‏\"extensions\", נדרשים, והם יכולים להיות מערכים של מחרוזות המופרדים ב-\",\". שני המפתחות האחרונים, \"fileType\", ‏\"iconName\", הם אופציונליים. <br><br>לדוגמה: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "תצורת מנהל המשימות",
		admin_taskmanager_service: "שירות מנהל המשימות:",
		admin_taskmanager_service_hover: "ציינו אם ברצונכם להשתמש בשירות מנהל המשימות ליצירה והרצה של משימות אסינכרוניות. <br><br>אם תשנו הגדרה זו, תצטרכו להפעיל את מחדשל את יישום הרשת של IBM Content Navigator כדי שהשינויים ייכנסו לתוקף.",
		admin_taskmanager_url: "URL של שירות מנהל המשימות:",
		admin_taskmanager_url_hover: "ציינו את ה-URL שבאמצעותו יישומים אחרים יכולים לתקשר עם שירות מנהל המשימות. ה-URL הוא במבנה http://server_name:port_number/taskManagerWeb/api/v1‎.‏",
		admin_taskmanager_logdirectory: "מדריך היומנים של מנהל המשימות:",
		admin_taskmanager_logdirectory_hover: "כברירת מחדל, קובצי היומן עבור שירות מנהל המשימות נכתבים באותו מדריך שבו נמצאים קובצי היומן של שרת יישומי הרשת. <br><br>כדי שמידע הרישום ייכתב במיקום שונה בשרת IBM Content Navigator,‏ ציינו נתיב משויך מלא של המדריך שבו ברצונכם לאחסן קובצי יומן הנוצרים על ידי רכיב מנהל המשימות. <br><br>אם תשנו הגדרה זו, תצטרכו להפעיל את מחדשל את יישום הרשת של IBM Content Navigator כדי שהשינויים ייכנסו לתוקף.",
		admin_taskmanager_heartBeatMonitor: "ניטור פעימת-לב של אשכולות",
		admin_taskmanager_heartBeatMonitor_hover: "סביבות אשכול בזמינות גבוהה בלבד. אם תפעילו אפשרות זו, שירות מנהל המשימות מנתב משימות מצמתים שאינם פעילים כרגע לצמתים פעילים. <br><br>אם תשנו הגדרה זו, תצטרכו להפעיל את מחדשל את יישום הרשת של IBM Content Navigator כדי שהשינויים ייכנסו לתוקף.",

		admin_syncserver_title: "תצורת שרת סינכרון",
		admin_syncserver_enable: "שירותי סינכרון:",
		admin_syncserver_enable_hover: "ציינו אם רצונכם לאפשר למשתמשים הניגשים לשולחן עבודה זה לסנכרן את הפריטים שלהם בין תחנות העבודה וההתקנים הניידים שלהם.<br><br><b>חשוב:</b> כדי להשתמש במאפיין זה, יש להשלים גם את המשימות האלה:<ul><li>ציינו <b>URL ציבורי של שירותי הסינכרון</b> בחלק <b>שירותי סינכרון</b> של כלי המנהלה.</li><li>הוסיפו מאגר ששירותי הסינכרון הופעלו עבורו לשולחן עבודה זה.</li></ul>אם תשביתו אפשרות זו אך תוסיפו מאגר שעבורו הופעלו שירותי סינכרון לשולחן עבודה זה, המערכת תתעלם מההגדרה במאגר.",
		admin_mobileqr_enable: "הצגת קוד Quick Response ‏(QR) של IBM Navigator בדף ההתחברות:",
		admin_mobileqr_enable_hover: "הפעילו אפשרות זו אם ברצונכם להציג את קוד ה-Quick Response ‏(QR) ליישום הנייד של IBM Navigator בדף ההתחברות של לקוח האינטרנט. <br><br>כשלקוח סורק את קוד ה-Quick Response ‏(QR), הוא מועבר לחנות היישומים הרלוונטית למכשירו, שם הוא יכול להוריד את היישום הנייד של IBM Navigator.",

		admin_streamlineservice_enable: "עריכת שירות:",
		admin_streamlineservice_enable_hover: "משתמשי FileNet P8 בלבד. הפעילו אפשרות זו אם ברצונכם שמשתמשים בשולחנות עבודה יוכלו להוסיף ולערוך מסמכים בקלות מיישומים מקוריים בתחנות העבודה שלהם. <br><br>כדי להשתמש בהגדרה זו, עליכם גם: <ul><li>הפעילו את שירות העריכה במאגר אחד או יותר שברצונכם לשייך לשולחן עבודה זה.</li><li>התקינו את לקוח IBM Content Navigator Edit בתחנות העבודה של המשתמשים</li></ul>",

		admin_repository_general_instructions: "עליכם להתחבר למאגר כדי שתוכלו להגדיר פרמטרים, תכונות מערכת, תיקיות וכן הלאה.",
		admin_repository_system_instructions: "ציינו אילו תכונות מערכת יוצגו עבור המסמכים והתיקיות במאגר זה.",

		admin_desktop_general_create_instructions: "שולחן עבודה קובע מה המשתמש יראה ויוכל לעשות כשיתחבר ללקוח הדפדפן. לאחר שתיצרו שולחן עבודה, תוכלו לשלוח את ה-URL של שולחן העבודה למשתמשים כדי שיוכלו לגשת לשולחן העבודה.",
		admin_desktop_admin_instructions: "שולחן העבודה המנהלתי מסופק עם לקוח הדפדפן כדי לאפשר למשתמשים מנהלנים להגדיר את לקוח הדפדפן. לשולחן עבודה זה יש גישה לכל המאגרים המוגדרים עבור לקוח הדפדפן.",
		admin_desktop_repositories_instructions: "ציינו את המאגרים שלמשתמשים תהיה גישה אליהם משולחן עבודה זה. עליכם להגדיר את המאגרים לפני הוספתם לשולחן העבודה.<br><br><b>עצה:</b> תוכלו להגביל את המאגרים שיהיו זמינים עבור כל מאפיין בזמן הגדרת מתכונת שולחן העבודה.",
		admin_desktop_menus_instructions: "ציינו את התפריטים שלמשתמשים תהיה גישה אליהם משולחן עבודה זה. התפריטים מציינים אלו פעולות זמינות בהתאם למה שנבחר בממשק.<br><br><b>עצה:</b> תוכלו להתאים את תוכן התפריטים בחלק <b>תפריטים</b> של כלי המנהלה, או ליצור סוגים חדשים של תפריטים באמצעות יצירת תוספים.",

		admin_desktop_no_repositories: "לא מוגדרים מאגרים.",

		admin_desktop_id_hover: "זיהוי שולחן העבודה כלול ב-URL של לקוח הדפדפן ומציין איזה שולחן עבודה ייפתח כשמשתמש מתחבר ללקוח הדפדפן. הזיהוי חייב להיות ייחודי, ולא ניתן לשנותו לאחר שמירת שולחן העבודה.<br><br>הזיהוי יכול להכיל רק תווים אלפאנומריים והוא רגיש לרישיות.",
		admin_desktop_id_disabled_hover: "לא ניתן לשנות את זיהוי שולחן העבודה. אם ברצונכם להשתמש בזיהוי שונה, עליכם ליצור שולחן עבודה חדש.",
		admin_desktop_name_hover: "שם שולחן העבודה אינו יכול לכלול את התווים האלה: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "התצורה שלכם יכולה להכיל רק שולחן עבודה מחדלי אחד.",

		admin_repository_id_disabled_hover: "לא ניתן לשנות את זיהוי המאגר. אם ברצונכם להשתמש בזיהוי שונה, עליכם ליצור חיבור מאגר חדש.",
		admin_printService_enable: "הדפסה באמצעות שירות ההדפסה IBM Daeja ViewONE:",
		admin_printService_enable_hover: "אם בחרתם להפעיל את שירות ההדפסה IBM Daeja ViewONE, מסמכים יומרו לפורמט PDF וההדפסה תושלם תוך שימוש בכל דפדפן אינטרנט.<br><br>אם בחרתם להשבית את שירות ההדפסה IBM Daeja ViewONE, תוכלו להדפיס מסמכים רק בדפדפני אינטרנט שתומכים ביישומוני Java. דפדפני אינטרנט מסוימים לא תומכים ביישומוני Java ולכן לא תומכים בהדפסת יישומונים.<br><br>ראו את תיעוד של דפדפנים נתמכים.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "מדריך הבית של המשתמש",
		admin_file_tracking_doc_directory_my_documents: "מדריך המסמכים של המשתמש",
		admin_file_tracking_doc_directory_qp: "נתיב מלא",
		admin_file_tracking_section_tile: "תצורת מעקב קבצים",
		admin_file_tracking_home_path: "נתיב הבית",
		admin_file_tracking_my_documents: "המסמכים שלי",
		admin_file_tracking_exact_path: "נתיב מלא:",
		admin_file_tracking_qp: "נתיב מלא",
		admin_file_tracking_ev: "משתנה סביבה",
		admin_file_tracking_ev_us: "משתנה סביבה מותאם ",
		admin_file_tracking_del_local_copy: "מחיקת עותק מקומי:",
		admin_file_tracking_yes: "כן",
		admin_file_tracking_no: "לא",
		admin_file_tracking_del_local_copy_rt_state_editable: "לאפשר למשתמשים לעקוף הגדרה זו",
		admin_file_tracking_del_local_copy_rt_state1: "כן",
		admin_file_tracking_del_local_copy_rt_state2: "לא",
		admin_file_Tracking_label: "מעקב קבצים:",
		admin_file_Tracking_disable: "השבתה",
		admin_file_Tracking_enable: "הפעלה",
		admin_file_tracking_label_hover_help: "מעקב קבצים משתמש ביישומון למשיכה ולהורדה של מסמכים למדריך מסוים במחשבי המשתמשים. יישומון זה גם מאפשר ל-IBM Content Navigator לאתר מסמכים במחשבים של משתמשים כאשר משתמשים מפקידים מסמכים.",
		admin_file_tracking_doc_directory: "מיקום אחסון:",
		admin_file_tracking_open_file: "פתיחת קובץ אוטומטית",
		admin_file_Tracking_append_qualified_path: "צירוף מדריך",
		admin_file_Tracking_append_qualified_path_hover_help: "תוכלו לצרף מדריך לסופו של משתנה הסביבה כדי שמסמכים יישמרו בתת-מדריך מסוים. <br/><br/>לדוגמה, תוכלו לציין שמסמכים יורדו למדריך <i>EnterpriseDocuments</i> בתוך מדריך הבית של המשתמש.",
		admin_file_Tracking_append_ev: "צירוף משתנה סביבה",
		admin_file_Tracking_append_ev_hover_help: "תוכלו לצרף משתנה סביבה כדי שמסמכים יישמרו במדריך המצוין דינמית, כגון מדריך משתמש.<br/><br/>לדוגמה, תוכלו לציין שמסמכים יאוחסנים בתת-מדריך <i>user_name</i> במדריך רשת משותף. ",
		admin_file_tracking_doc_directory_hover_help: "ציינו היכן יאוחסנו מסמכים כשהם נמשכים או מורדים.<br/><br/> <b>עצה</b>: אם ברצונכם לאחסן מסמכים במדריך הבית של משתמש או במדריך מסמכים מחדלי, בחרו את האפשרות <b>משתנה סביבה</b>, הכוללת משתנים מוגדרים מראש המצביעים אל מיקומים אלה.",
		admin_file_tracking_qualified_path_hover_help: "השתמשו במבנה המדריכים המתאים עבור מערכת ההפעלה Windows או Mac כדי לציין את המדריך או מדריך הרשת שבו יאוחסנו מסמכים. <ul><li>עבור Windows,‏ יש לכלול אות כונן בנתיב, לדוגמה C:\\Enterprise Documents.‏</li><li>עבור מדריך רשת משותף, ציינו את הנתיב במבנה ‎\\\\servername\\directory</li></ul><br/><b>חשוב:</b> כדי להשתמש באפשרות זו, חייבת להיות אפשרות ליצור את מבנה המדריכים שתציינו בכל תחנות העבודה הלקוחות בסביבה שלכם.",
		admin_file_tracking_environment_variable_path_hover_help: "השתמשו במשתני הסביבה המתאימים עבור מערכת ההפעלה Windows או Mac כדי לציין את המדריך או מדריך הרשת שבו יאוחסנו מסמכים. <br/><br/>האפשרות <b>מדריך הבית של המשתמש</b> מאחסנת מסמכים במדריך שלהלן:<br/><ul><li>Windows:‏ C:\\Users\\User_name</li><li>Mac:‏ /Users/User_name</li></ul><br/>האפשרות <b>מדריך המסמכים של המשתמש</b> מאחסנת מסמכים במדריך שלהלן:<br/><ul><li>Windows:‏ C:\\Users\\User_name\\Documents</li><li>Mac:‏ /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "ציינו אם העותק המקומי של המסמך יימחק כאשר משתמשים מוסיפים מפקידים מסמכים למאגר.<br/><br/>מחיקת העותק המקומי מאפשרת לכם:<br/><ul><li>לאכוף עמידה בתנאי מדיניויות IT</li><li>לוודא שמשתמשים עובדים עם גרסאות המסמכים האחרונות</li></ul><br/><b>מגבלה:</b> לא נעשה שימוש בהגדרה זו כשמשתמשים מוסיפים מסמכים באמצעות גרירה ושחרור.<br/><br/>עבור IBM Content Navigator for Microsoft Office, עליכם לבחור <b>מחיקת קבצים מקומיים כאשר משתמשים מוסיפים או מפקידים מסמך או מבטלים משיכה</b> בחלק <b>תצורת Office</b> של שולחן העבודה.",
		admin_file_tracking_open_file_hover_help: "הגדרה זו עוקפת העדפות טיפול במסמכים המוגדרות בדפדפני המשתמשים. </br></br><b>מגבלה:</b> לא נעשה שימוש בהגדרה זו עבור IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "דריסת עותק מקומי:",
		admin_file_tracking_over_write_file_hover_help: "ציינו אם העותק המקומי של המסמך יידרס כאשר משתמשים מפקידים מסמכים למאגר. <br/><br/>דריסת העותק המקומי מאפשרת לכם:<br/><ul><li>לוודא שמשתמשים עובדים עם גרסאות המסמכים האחרונות</li><li>למנוע הצגת הנחיה למשתמשים כשקיים עותק מקומי</li></ul> </br></br><b>מגבלה:</b> לא נעשה שימוש בהגדרה זו עבור IBM Content Navigator for Microsoft Office אם תבחרו <b>לאפשר למשתמשים לעקוף הגדרה זו</b>.",
		admin_file_tracking_over_write_file_state_editable: "לאפשר למשתמשים לעקוף הגדרה זו",
		admin_file_tracking_inline_help: "מעקב קבצים מייעל את תהליך המשיכה וההפקדה של מסמכים במאגר. הוא גם מאפשר לכם לקבוע איך מסמכים יאוחסנו במחשבי המשתמשים. <br/><br/>בנוסף, מעקב קבצים מאפשר מעקב אחר מסמכים ברכיבי IBM Content Navigator מרובים, כגון לקוח הדפדפן ו-IBM Content Navigator for Microsoft Office.‏",

		// Box repository admin...
		admin_box_instructions: "יש לאפשר אימות תקן או אימות שרת לפני חיבור למאגר.",
		admin_box_use_oauth: "סוג אימות זהות:",
		admin_box_use_oauth_hover: "בחרו אימות תקן או אימות שרת בסביבת ייצור כשאתם מספקים גישה למסמכי Box מ-IBM Content Navigator. יש לציין את ערכי הclient_id ו-client_secret של OAuth2 המשוייכות להצבות IBM Content Navigator. ניתן לקבל ערכים אלה מהBox לאחר יצירת תוסף Box עבור שרת ה IBM Content Navigator שלכם.<br/><br/>בחרו אימות מפתחים בסביבת פיתוח. מפתחים יכולים להתחבר ל-Box בשימוש בחשבון המפתח שלהם ולהפיק אסימון מפתח בתוקף של 60 דקות. אסימוני מפתחים מאפשר התחברות לBox על ידי שימוש באסימון המפתח כססמה עבור כל שם משתמש.",
		admin_box_oauth_client_id: "client_id",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "תת מתחם Box של חשבון חברה:",
		admin_box_share: "זיהוי חיבור מנהל המשימות:",
		admin_box_share_hover: "עבור העתקת Box או שיתוף Boxת מנהל המשימות משתמש בזיהוי וססמה של משתמש מנהלן בכדי להריץ משימות רקע המשנות את המאגר.<br/><br/>יש ללחוץ על 'הגדרה' ולהתחבר לBox על ידי שימוש בחשבון מנהלן Box תקף.<br/><br/>אם אתם מגדירים את שולחן העבודה על ידי בחירה בBox מאגר זה כמאגר לשיתוף קבצים, עליכם לציין משתמש מנהלן Box מסויים שהינו בעל שטח אחסון בלתי מוגבל בBoxx.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "פתיחת קובץ אוטומטית",
		file_tracking_runtime_overwrite_hover_help: "אם לא בחרתם אפשרות זו ויש לכם מסמך באותו שם במערכת הקבצים המקומית, המסמך יימשך אך לא יורד אלא אם תבצעו אחת הפעולות האלה:<br/><ul><li> תורידו את המסמך לתת-מדריך של המדריך המחדלי. אם תבחרו תת-מדריך, יישום הרשת יוכל לעקוב אחר מיקומו של המסמך.</li><li>תשנו את שם המסמך שאתם מורידים. שינוי שם המסמך מונע סתירת שם קובץ.</li></ul>",
		open_file: "פתיחת קובץ אוטומטית",
		over_write_file: "דריסת עותק מקומי",
		checkout_and_download_file: "משיכה והורדה של מסמכים",
		download_to_local_directory: "הורדה אל:",
		checkout_and_download_button_title: "משיכה והורדה",
		checkout_without_java_confirmation_dialog: "מאפיין הקבצים אינו יכול להוריד את הקובץ ולעקוב אחריו.",
		browse_for_directory: "עיון",
		selected_documents: "מסמכים נבחרים",

		checkout_without_java_confirmation_text: "סיבות אפשריות לבעיה זו:<br/><ul><li>לא מותקן JRE בתחנת העבודה שלכם.</li><li>תוסף Java לא הופעל בדפדפן שלכם.</li><li>הדפדפן שלכם אינו תומך ב-Java.‏</li></ul><br/><br/>כדי לפתור בעיה זו, בצעו את הפעולה המתאימה:<br/><br/><ul><li>אם ברצונכם להמשיך להוריד את הקובץ מבלי להפעיל מעקב קבצים, לחצו על 'אישור'.</li><li>אם ברצונכם להוריד את הקובץ ולהפעיל מעקב קבצים, בטלו את ההורדה וודאו כי JRE מותקן בתחנת העבודה, ותוסף Java מופעל בדפדפן.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "המסמך נמשך והורד, אך לא ניתן לפתוח את המסמך.",
		runtime_file_tracking_open_error_explanation: "מערכת ההפעלה המותקנת בתחנת העבודה שלכם אינה תומכת בקבצים מסוג זה.",
		runtime_file_tracking_open_error_userResponse: "כדי לפתור את הבעיה,  בצעו אחת מהפעולות האלה:<br/><br/><ul><li>אם עליכם לעבוד עם המסמך, פתחו את לקוח הדפדפן מתחנת עבודה אחרת שיש בה מערכת הפעלה שונה.</li><li>אם עליכם להציג את המסמך בלבד, לחצו עם לחצן העכבר הימני על המסמך בלקוח הדפדפן ולחצו על 'פתיחה'.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "המסמך נמשך אך לא הורד.",
		runtime_file_tracking_save_file_error_explanation: "מסמך באותו שם קיים במערכת הקבצים המקומית, אך הוא לא נדרס. ",
		runtime_file_tracking_save_file_error_userResponse: "אם ברצונכם להוריד את הקובץ מהמאגר, עליכם לדרוס את העותק המקומי של הקבוץ בזמן הורדת המסמך מהמאגר.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "המסמך נמשך, אך לא ניתן להוריד או לפתוח את המסמך.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "מסמך באותו שם קיים במערכת הקבצים המקומית. עם זאת, המסמך לא נדרס, והדבר מונע את ההורדה והפתיחה של המסמך מהמאגר.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "אם ברצונכם להוריד את הקובץ מהמאגר, עליכם לדרוס את העותק המקומי של הקבוץ בזמן הורדת המסמך מהמאגר.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "לא ניתן להוריד את המסמך.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "משתנה הסביבה ${0}, הדרוש לצורך מעקב אחר קבצים, אינו מוגדר במחשב לקוח זה.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "כדי לפתור את הבעיה:<br/><br/><ul><li>הוסיפו את משתנה הסביבה ${0} למשתני הסביבה של מערכת ההפעלה.</li><li>התנתקו מלקוח הדפדפן וסגרו את הדפדפן. לאחר מכן, התחברו שוב.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "יישומון מעקב הקבצים אינו יכול להוריד את הקובץ ולעקוב אחריו.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "המדריך ${0},  הדרוש לצורך מעקב אחר קבצים, אינו מוגדר ולא ניתן ליצור אותו.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "כדי לפתור בעיה זו, בצעו את הפעולה המתאימה:<br/><br/><ul><li>לחצו על 'עיון' ובחרו מדריך אחר במחשב הלקוח. אם תבחרו אפשרות זו, לא יתבצע מעקב אחר הקובץ.</li><li>פנו למנהלן המערכת ובקשו ממנו לציין מדריך שונה לשימוש עבור מעקב קבצים. לדוגמה, יתכן שיהיה צורך בכך אם המדריך שצוין הוא עבור מערכת ההפעלה Windows אך אתם עובדים במערכת Mac OS.‏ </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "אם מתבצעת גישה לשולחן העבודה מהתקנים עם מערכות הפעלה שונות, תוכלו לבצע אחת הפעולות שלהלן כדי להקטין את הסבירות שיתעוררו בעיות:<br/><br/><ul><li>השתמשו במשתני סביבה כדי לציין את מיקום האחסון במחשבי לקוח.</li><li>צרו שולחנות עבודה שונים עבור המשתמשים בכל סוג התקן. לדוגמה, צרו שולחן עבודה עבור משתמשים עם מערכת ההפעלה Windows ושלחן עבודה עבור משתמשים עם מערכת ההפעלה Mac OS.‏</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "לא ניתן לעבד את בקשתכם.",
		runtime_file_tracking_generic_error_explanation: "אירעה שגיאה ביישומון מעקב הקבצים.",
		runtime_file_tracking_generic_error_userResponse: "נא לפנות למנהלן המערכת כדי לקבל סיוע.‏",
		runtime_file_tracking_generic_error_adminResponse: "פתחו את קונסול Java ונסו להגיש את הבקשה שוב. פרטי השגיאה מוצגים בקונסול Java.‏<br/><br/>תוכלו לגשת לקונסול Java מלוח הבקרה (Windows) או מהעדפות המערכת (Macintosh) של מערכת ההפעלה.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "לא ניתן לעבד את בקשתכם",
		runtime_file_tracking_cannot_delete_file_error_explanation: "הקבצים שלהלן נוספו למאגר אך לא נמחקו מהמערכת המקומית: ${0}.בדרך כלל מצב זה נוצר כשהקבצים פתוחים או נמצאים בשימוש של יישום אחר. במידת הצורך, תוכלו למחוק את הקבצים ידנית.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "לא ניתן להוריד את המסמך.",
		runtime_file_tracking_ioexception_error_explanation: "לא ניתן להוריד את המסמך.",
		runtime_file_tracking_ioexception_userResponse: "יתכן שאין לכם הרשאות לכתוב למדריך שלהלן: ‎${0}‎.‏",
		runtime_file_tracking_ioexception_adminResponse: "ודאו שיש לכם הרשאות כתיבה למדריך שצוין. אם אין לכם הרשאות כתיבה למדריך שצוין, פנו למנהלן המערכת.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "לא ניתן לעבד את בקשתכם.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "סיבות אפשריות לשגיאה זו:<br/><br/><ul><li>אתם משתמשים בדפדפן Safari במערכת Mac OS ו-Java פועל במצב safe mode.‏</li><li>אין לכם הרשאות קריאה/כתיבה עבור המדריך המצוין בתצורת מעקב הקבצים של שולחן העבודה שלכם.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "תוכלו להמשיך לעבוד עם IBM Content Navigator ללא מעקב קבצים, או לבצע את הצעדים שלהלן כדי לפתור את הבעיה:<br/><br/><ol><li>הפעילו מצב unsafe של Java בדפדפן Safari.‏</li><li>אם מוצגת הנחיה השואלת אם לבטוח באתר IBM Content Navigator,‏ לחצו על <b>Trust</b> כדי לטעון את הדף ואז הפעילו מצב unsafe של Java בדפדפן Safari.‏</li></ol><br/><br/>אם Safari מוגדר כהלכה, בצעו את הצעדים שלהלן כדי לפתור את הבעיה:<br/><br/><ol><li>ודאו שיש לכם הרשאות קריאה/כתיבה עבור המדריך המצוין בתצורת מעקב הקבצים של שולחן העבודה שלכם.</li><li>אם אין לכם הרשאות קריאה/כתיבה למדריך, ערכו את הרשאות המדריך.</li><li>אם אינכם יכולים לערוך את הרשאות המדריך, המנהלן חייב לשנות את המדריך המוגדר למעקב קבצים או לתת לכם גישה לשולחן עבודה שמוגדר בו מדריך שונה למעקב קבצים.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "לא ניתן לעבד את בקשתכם.",
		runtime_file_tracking_java__notfound_error_explanation: "שגיאה שו מתרחשת בדרך כלל במצבים האלה:<br/><br/><ul><li>The Java Runtime Environment (JRE) is not present or enabled on your workstation.</li><li>גרסת JRE בתחנת העבודה אינה תואמת לגרסת IBM Content Navigator.‏</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "תוכלו להמשיך לעבוד עם IBM Content Navigator ללא מעקב קבצים, או לבצע את הצעדים שלהלן כדי לפתור את בעיית ה-JRE:‏<br/><br/><ol><li>ודאו שה-JRE מותקן בתחנת העבודה שלכם.</li><li>ודאו שגרסת ה-JRE בתחנת העבודה תואמת עבור IBM Content Navigator.‏ רשימת גרסאות JRE הנתמכות כלולה במסמך <i>Hardware and software prerequisites for IBM Web Interface for Content Management</i> באתר תמיכת התוכנה של IBM.‏</li><li>ודאו שה-JRE מופעל בתחנת העבודה שלכם.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "לא ניתן לעבד את בקשתכם.",
		runtime_file_tracking_security_error_explanation: "אין לכם הרשאות קריאה/כתיבה עבור המדריך המצוין בתצורת מעקב הקבצים של שולחן העבודה שלכם.",
		runtime_file_tracking_security_error_userResponse: "תוכלו להמשיך לעבוד עם IBM Content Navigator ללא מעקב קבצים, או לפנות למנהלן המערכת כדי לבצע את הצעדים שלהלן:<ol><li>ודאו שיש לכם הרשאות קריאה/כתיבה עבור המדריך המצוין בתצורת מעקב הקבצים של שולחן העבודה שלכם. </li><li>אם אין לכם הרשאות קריאה/כתיבה למדריך, ערכו את הרשאות המדריך.</li><li>אם אינכם יכולים לערוך את הרשאות המדריך, המנהלן חייב לשנות את המדריך המוגדר למעקב קבצים או לתת לכם גישה לשולחן עבודה שמוגדר בו מדריך שונה למעקב קבצים.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "לא ניתן להוריד את המסמכים שלהלן: ${0}.",

		admin_file_tracking_inline_help: "מעקב קבצים מייעל את תהליך המשיכה וההפקדה של מסמכים במאגר. הוא גם מאפשר לכם לקבוע איך מסמכים יאוחסנו במחשבי המשתמשים.<br/><br/>בנוסף, מעקב קבצים מאפשר מעקב אחר מסמכים ברכיבי IBM Content Navigator מרובים, כגון לקוח הדפדפן ו-IBM Content Navigator for Microsoft Office.‏",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "זיהוי התפריט אינו יכול להתחיל עם \"Default\".‏  \"Default\" היא קידומת שמורה לזיהויי תפריטים.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "הזיהוי יכול להכיל רק תווים אלפאנומריים והוא רגיש לרישיות.",
		admin_repository_id_hover: "זיהוי המאגר כלול בכתובות URL של לקוח הדפדפן, במועדפים ובקישורי דואל המציינים את המאגר שאליו יתחבר המשתמש. הזיהוי חייב להיות ייחודי, ולא ניתן לשנותו לאחר שמירת המאגר.<br><br>הזיהוי יכול להכיל רק תווים אלפאנומריים והוא רגיש לרישיות.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "השם אינו יכול לכלול את התווים האלה‏:  * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "זיהוי שולחן העבודה אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "שם שולחן העבודה אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "השם להצגה אינו יכול לכלול רווחים או את התווים האלה:  * \\ / : ? \" < > |",
		admin_repository_name_hover: "ציינו את שם המאגר שיוצג למשתמשים בלקוח הדפדפן.<br><br>השם אינו יכול לכלול את התווים האלה:  * \\ / : ? \" < > |",
		admin_server_od_name_hover: "ציינו את שם המארח או כתובת ה-IP של שרת Content Manager OnDemand שברצונכם להתחבר אליו, לדוגמה server.id.com.",
		admin_server_p8_name_hover: "ציינו את ה-URL של שרת Content Engine או Content Platform Engine.‏ ה-URL רגיש לרישיות ויש לו המבנה הזה:<br><br><ul><li>עבור WebSphere Application Server,‏ iiop://host_name:port_number/FileNet/Engine.‏ בהצבות בסיסיות, מספר היציאה המחדלי הוא 2809.‏</li><li>עבור WebLogic Server,‏ t3://host_name:port_number/FileNet/Engine.‏ מספר היציאה המחדלי הוא 7001.‏</li></ul><br><br>עבור תצורות בזמינות גבוהה של Content Engine ושל Content Platform Engine,‏ השתמשו ב-URL EJB transport בזמינות גבוהה ללא הקידומת cemp:‎.‏ ",
		admin_server_p8_protocol_hover: "ציינו את הפרוטוקול לשימוש ליצירת תקשורת עם Content Engine.",
		admin_server_cm_name_hover: "ציינו את שם הקטלוג המקומי של מסד הנתונים של Content Manager או את שם החיבור לשרת הספריה. השם הוא הערך המצוין במשתנה ICMSERVER.‏",
		admin_repository_cmis_hover: "ציינו את זיהוי המאגר שברצונכם להתחבר אליו.  הזיהויים של כל המאגרים בסביבת CMIS שלכם מפורטים במסמך השירות של AtomPub binding.‏  <br/><br/><b>עצה:</b>תוכלו גם לציין כוכבית (*) כדי להתחבר למאגר הראשון או היחיד המוגדר במסמך השירות של AtomPub binding.‏",
		admin_url_cmis_hover: "מבנה ה-URL משתנה לפי ספק השירות. עיינו בתיעוד CMIS א פנו אל מנהלן שרת CMIS כדי לקבל את ה-URL.‏",
		admin_repcfg_cmis_status_columns_hover: "ציינו את מצבי הפריטים שעבורם יוצגו איקונים. איקוני המצב מוצגים ליד מסמכים ברשימת התוכן.",
		admin_port_hover: "ציינו את מספר יציאת TCP/IP שבה מאזין שרת Content Manager OnDemand. הערך המחדלי הוא 1445.",
		admin_unified_searches_hover: "ציינו אם רצונכם לאפשר למשתמשים לשמור חיפושים חוצי-מאגרים במאגר זה.<br/><br/>אם לא תפעילו אפשרות זו, משתמשים עדיין יוכלו ליצור חיפושים חוצי-מאגרים ולהריץ אותם מול מאגר זה. תוכלו למנוע ממשתמשים ליצור חיפושים חוצי-מאגרים ברמת שולחן העבודה.<br/><br/>אם תפעילו חיפושים חוצי-מאגרים, IBM Content Navigator ייצור את מודל הנתונים של החיפושים חוצי-המאגרים במאגר.<br/><br/>עבור IBM FileNet Content Manager,‏ עליכם להתחבר למאגר כמנהלן Content Engine לפני הפעלת אפשרות זו.",
		admin_unified_searches_cm_hover: "ציינו אם רצונכם לאפשר למשתמשים לשמור חיפושים חוצי-מאגרים במאגר זה.<br/><br/>אם לא תפעילו אפשרות זו, משתמשים עדיין יוכלו ליצור חיפושים חוצי-מאגרים ולהריץ אותם מול מאגר זה. תוכלו למנוע ממשתמשים ליצור חיפושים חוצי-מאגרים ברמת שולחן העבודה.<br/><br/>אם תפעילו חיפושים חוצי-מאגרים, IBM Content Navigator ייצור את מודל הנתונים של החיפושים חוצי-המאגרים במאגר.",
		admin_max_results_hover: "ציינו אם להגביל את מספר התוצאות המוחזרות על ידי חיפוש. אם לא תגבילו את מספר תוצאות החיפוש, יתכן שתתקלו בבעיות ביצועים אם החיפוש מחזיר מספר גדול של תוצאות.",
		admin_timeout_hover: "ציינו כמה זמן, בשניות, חיפוש יכול לרוץ במאגר. אם החיפוש אינו מושלם בפרק הזמן שצוין,  לקוח הדפדפן יבטל את הבקשה. מגבלת הזמן המומלצת היא 60 שניות.",
		admin_object_store_hover: "ציינו את מאגר האובייקטים שאליו ברצונכם להתחבר בשרת Content Engine.‏ תוכלו לקבל את השם הסימבולי מקונסול המנהלה של Content Platform Engine.‏",
		admin_object_store_display_name_hover: "השם להצגה של מאגר האובייקטים דרוש אם ברצונכם להשתמש בתזרימי-עבודה של IBM FileNet P8.‏ תוכלו לקבל את השם להצגה של מאגר האובייקטים מקונסול המנהלה של Content Platform Engine.‏",
		admin_all_searches_hover: "ציינו אם להגביל את מספר החיפושים המוצגים תחת <b>כל החיפושים</b> כאשר משתמשים מחפשים במאגר. אם לא תגבילו את מספר החיפושים, יתכן שתתקלו בבעיות ביצועים אם המאגר מכיל מספר גדול של חיפושים שמורים.",

		admin_text_desktop: "שולחן עבודה",
		admin_text_repository: "מאגר",
		admin_text_plugin: "תוסף",
		admin_text_theme: "ערכה",
		admin_text_menu: "תפריט",
		admin_text_reason_code: "סיבת עריכה",
		admin_text_redactions: "עריכות",
		admin_text_viewer_mapping: "מיפוי מציג",
		admin_text_mobile_feature: "מאפיין התקן נייד",
		admin_test_interface_text: "תמליל ממשק",
		admin_text_interface_text_locale: "תמליל ממשק בהתאמה אזורית",
		admin_text_icon_status: "איקון מצב",
		admin_text_icon: "איקונים",
		admin_text_file_type: "סוג קובץ",
		admin_text_viewer: "מציג",
		admin_text_desktop_access: "גישה לשולחן עבודה",
		admin_text_mapped_properties_for_office: "תכונות ממופות עבור Microsoft Office",
		admin_text_desktop_features: "מאפייני שולחן עבודה",
		admin_text_unknown: "לא ידוע",
		admin_folder_instruction: "ציינו את התכונות שיוצגו עבור מסמכים ותיקיות ברשימת התוכן כשמשתמשים נמצאים במצב 'עיון'. תוכלו גם לציין את הסדר שבו מוצגות התכונות.",
		admin_search_instruction: "ציינו את האפשרויות שייבחרו כברירת מחדל כשמשתמשים יוצרים חיפוש.",
		admin_repository_office_conf_class_instruction: "אם IBM Content Navigator for Microsoft Office מותקן במחשבי לקוח בסביבה שלכם, תוכלו לציין איך מסמכים יטופלו כשהם נוספים או מופקדים במאגר זה.",
		admin_repository_office_conf_instruction: "תוכלו למפות תכונות מסמך של Microsoft Office לתכונות המוגדרות במאגר זה.<br/><br/>כשמיפוי תכונות מופעל עבור שולחן עבודה שמאגר זה משויך אליו, התכונות המוגדרות במסמכי Microsoft Office משמשות לאכלוס התכונות במאגר כשהמשתמש מוסיף מסמך מתוך IBM Content Navigator for Microsoft Office.‏",
		admin_repository_office_conf_prop_mapping_title: "מיפוי תכונות",
		admin_repository_office_conf_prop_mapping_title1: "שילוב MS Office",
		admin_office_conf_instruction: "תוכלו לקבוע איך IBM Content Navigator ישתלב עם יישומי Microsoft Office כאשר IBM Content Navigator for Microsoft Office מותקן במחשבי לקוח<br /><br /><b>חשוב:</b> אם תבחרו <b>מיפוי תכונות Office…,‏</b> עליכם להגדיר גם את מיפוי התכונות עבור כל מאגר המשויך לשולחן עבודה זה. תוכלו להגדיר מיפויי תכונות בלשונית <b>תכונות Office</b> עבור כל מאגר בסביבה שלכם.",
		admin_desktop_workflows_instruction: "<b>מערכות IBM FileNet P8 בלבד: </b> ציינו את מרחבי היישומים שיוצגו בשולחן עבודה זה. הסדר של מרחבי היישומים שנבחרים קובע את הסדר שבו הם מוצגים בלקוח הדפדפן.<br><br><b>עצה</b> תוכלו לשנות את השם להצגה של מרחבי היישומים. לשם כך, ציינו שמות חדשים בחלק <b>תוויות</b> בכלי המנהלה.",
		admin_search_filtered_properties_instruction: "ציינו את התכונות שמשתמשים יוכלו לחפש לפיהן. תוכלו להסתיר כל תכונה שאינכם רוצים לאפשר למשתמשים לחפש לפיה.",
		admin_search_filtered_operators_instruction: "ציינו את האופרטורים שיהיו זמינים כשמשתמשים יחפשו סוג נתונים מסוים, כגון תאריך או מספר שלם. תוכלו להסתיר כל אופרטור שאינכם רוצים לאפשר למשתמשים לבחור.",
		admin_search_default_search_results_instruction: "ציינו את התכונות שיוצגו עבור מסמכים ותיקיות בתוצאות החיפוש. תוכלו להסתיר כל תכונה שאינכם רוצים להציג בתוצאות החיפוש.",
		admin_search_default_search_results_p8_cmis_instruction: "ציינו את התכונות שיוצגו עבור מסמכים בתוצאות החיפוש. תוכלו להסתיר כל תכונה שאינכם רוצים להציג בתוצאות.",

		admin_datetimeOp: "תאריך שעה",
		admin_floatOp: "מספר נקודה צפה",
		admin_integerOp: "מספר שלם",
		admin_stringOp: "מחרוזת",
		admin_binaryOp: "בינארי",
		admin_objectOp: "אובייקט",
		admin_idOp: "זיהוי",
		admin_userOp: "משתמש",
		admin_booleanOp: "בוליאני",

		admin_string: "מחרוזת",
		admin_long: "ארוך",
		admin_date: "תאריך",
		admin_double: "כפול",
		admin_object: "אובייקט",
		admin_guid: "GUID",
		admin_boolean: "בוליאני",

		admin_repcfg_heading: "תוכלו לעקוף את התנהגות ברירת המחדל של מאגר זה, באמצעות הגדרת פרמטרים של תצורה.",
		admin_repcfg_heading_od: "תוכלו לעקוף את התנהגות ברירת המחדל של מאגר זה, באמצעות הגדרת פרמטרים של תצורה.<br /><br /><b>חשוב:</b> כדי להשתמש בלקוח הדפדפן עם Content Manager OnDemand,‏ עליכם גם לציין ערכים ופרמטרים הכלולים בלשונית <b>Content Manager OnDemand</b> תחת <b>הגדרות</b>, שיחולו על כל מאגרי Content Manager OnDemand שאתם מתחברים אליהם.",
		admin_repcfg_teamspaces: "ניהול מרחב צוות:",
		admin_repcfg_enable: "הפעלה",
		admin_repcfg_disable: "השבתה",

		admin_repcfg_deliver_redacted_pdf_files_as: "קובצי PDF ערוכים ישלחו בתור:",
		admin_repcfg_burn_pdf_to_pdf: "קובצי PDF",
		admin_repcfg_burn_pdf_to_tiff: "קובצי TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "אם קובץ ה-PDF נערך באמצעות הוספת עריכות מבוססות תפקיד, אפשר לשלוח אותו ללקוח בכמה פורמטי קובץ. כאשר פורמט הקובץ משתנה, סיומת הקובץ וסוג MIME שלו משתנים גם הם.<br><br>לדוגמה, כאשר קובץ PDF נשלח כקובץ TIFF, סיומת הקובץ משתנה לסיומת .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "אפשרו למשתמשים למזג ולפצל דפים שיש בהם עריכות על בסיס תפקיד",
		admin_repcfg_redaction_allow_merge_and_split_hover: "בחרו באפשרות זו כדי לאפשר למשתמשים למזג ולפצל דפים שיש בהם עריכות על בסיס תפקיד. משתמשים שאינם עורכי עריכה לא יוכלו לערוך עריכות על בסיס תפקיד והם לא יקבלו גישה לנתונים רגישים המשויכים לעריכות על בסיס תפקיד, אפילו אם אפשרות זו מופעלת.",
		admin_repcfg_modify_teamspace_roles: "לאפשר לבעלים לשנות את התפקידים של מרחבי צוות קיימים",
		admin_repcfg_tm_delete_teamspace: "לאפשר לבעלים למחוק מרחבי צוות, כולל תוכן",
		admin_repcfg_tm_delete_teamspace_id_missing: "עליכם לציין את שם המשתמש של מנהלן מאגר.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "עליכם לציין את הסיסמה של מנהלן מאגר.",
		admin_repcfg_teamspace_display_Recent: "הצגת מרחבי צוות שהשתנו לאחרונה בלבד ",
		admin_repcfg_teamspace_display_Recent_value: "ימים מאז השינוי האחרון:",

		admin_repcfg_folder_selector: "תיקיית יסוד:",
		admin_repcfg_enable_folder_selector: "הפעלה",
		admin_repcfg_disable_folder_selector: "השבתה",
		admin_repcfg_SSO: "התחברות בזהות יחידה (SSO):‏",
		admin_repcfg_teamspace_template_permission_text: "הקצאת יוצרי תבנית מרחב צוות:",
		admin_repcfg_teamspace_template_permission_hover_p8: "ציינו את הקבוצות או המשתמשים היכולים ליצור תבניות מרחב צוות. המשתמשים והקבוצות יקבלו את הגדרות האבטחה המתאימות במחלקות ובתיקיות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>מידע נוסף</a><br/><br/><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול מרחבי הצוות.",
		admin_repcfg_teamspace_template_permission_hover_cm: "ציינו את הקבוצות או המשתמשים היכולים ליצור תבניות מרחב צוות. המשתמשים נוספים לרשימות ACL המתאימות ומקבלים את ההרשאות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>מידע נוסף</a><br/><br/><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול מרחבי הצוות.",
		admin_repcfg_teamspace_permission_text: "הקצאת תפקידים עבור מרחבי צוות:",
		admin_repcfg_teamspace_permission_hover_p8: "ציינו את הקבוצות או המשתמשים היכולים ליצור מרחבי צוות ולהשתמש במרחבי צוות. המשתמשים יקבלו את הגדרות האבטחה המתאימות במחלקות ובתיקיות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>מידע נוסף</a><br/><br/><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול מרחבי הצוות.",
		admin_repcfg_teamspace_permission_hover_cm: "ציינו את הקבוצות או המשתמשים היכולים ליצור מרחבי צוות ולהשתמש במרחבי צוות. המשתמשים נוספים לרשימות ACL המתאימות ומקבלים את ההרשאות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>מידע נוסף</a><br/><br/><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול מרחבי הצוות.",
		admin_repcfg_entry_template_permission_text: "הקצאת תפקידים עבור תבניות קלט:",
		admin_repcfg_entry_template_permission_hover_p8: "ציינו את הקבוצות או המשתמשים היכולים ליצור תבניות קלט ולהשתמש בתבניות קלט. המשתמשים יקבלו את הגדרות האבטחה המתאימות במחלקת המסמך 'תבנית קלט'. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>מידע נוסף</a><br/><br/><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול תבניות הקלט.",
		admin_repcfg_entry_template_permission_hover_cm: "ציינו את הקבוצות או המשתמשים היכולים ליצור תבניות קלט ולהשתמש בתבניות קלט. המשתמשים נוספים לרשימות ACL המתאימות ומקבלים את ההרשאות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>מידע נוסף</a><br /><br /><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול תבניות הקלט.",
		admin_repcfg_office_template_permission_text: "הקצאת תפקידים עבור תבניות:",
		admin_repcfg_office_template_permission_hover_cm: "ציינו את הקבוצות או המשתמשים שיוכלו ליצור, לערוך ולהשתמש בתבניות של Microsoft Office Online ושל שירות העריכה. המשתמשים נוספים לרשימות ACL המתאימות ומקבלים את ההרשאות הדרושות.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a><br /><br /><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול תבניות של Microsoft Office Online או של שירות העריכה.",
		admin_repcfg_draft_permission_text: "הקצאת תפקידי טיוטה:",
		admin_repcfg_draft_permission_hover_cm: "ציינו את הקבוצות או המשתמשים שיוכלו ליצור טיוטות למסמכים של Microsoft Office Online או של שירות עריכה במהלך עריכה בשיתוף פעולה. כל משתמש שצריך לערוך מסמכים בשיתוף פעולה ב-Microsoft Office Online או בשירות העריכה חייב להחזיק בהרשאות המתאימות ליצירת טיוטות. המשתמשים נוספים לרשימות ACL המתאימות ומקבלים את ההרשאות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a><br /><br /><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול הטיוטות.",
		admin_repcfg_search_permission_text: "הקצאת תפקידים עבור חיפוש:",
		admin_repcfg_search_permission_hover_p8: "ציינו את הקבוצות או המשתמשים היכולים ליצור חיפושים או חיפושים חוצי-מאגרים שמורים ולהשתמש בהם. המשתמשים יקבלו את הגדרות האבטחה המתאימות במחלקות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>מידע נוסף</a><br /><br /><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול החיפוש.",
		admin_repcfg_search_permission_hover_cm: "ציינו את הקבוצות או המשתמשים היכולים ליצור, לערוך או להשתמש בחיפושים או חיפושים חוצי-מאגרים שמורים. המשתמשים נוספים לרשימות ACL המתאימות ומקבלים את ההרשאות הדרושות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>מידע נוסף</a><br /><br /><b>המלצה:</b> השתמשו בקבוצות כדי לפשט את ניהול החיפוש.",
		admin_repcfg_search_permission_title: "תפקידי חיפוש",
		admin_repcfg_search_permission_intro_text: "ודאו שלמשתמשים יש גישה לשולחן עבודה התומך בתפקיד שלהם. לדוגמה, ודאו שליוצרי חיפוש יש גישה לשולחן עבודה המאפשר להם ליצור חיפושים וחיפושים חוצי-מאגרים.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "מנהלני תבניות מרחב צוות הם משתמשים שיש להם הרשאת <b>בקרה מלאה</b> במאגר (מאגר האובייקטים). אינכם יכולים לשנות את רשימת מנהלני תבניות מרחב הצוות מכלי המנהלה. <p>מנהלני תבניות מרחב צוות יכולים למחוק או לשנות כל תבנית מרחב צוות. המשתמש היוצר תבנית מרחב צוות אינו צריך לשתף את התבנית עם מנהלני תבניות מרחבי צוות.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "כשתגדירו משתמש או קבוצה כיוצר תבניות מרחב צוות, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר ליצירת תבניות מרחב צוות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>מידע נוסף</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "משתמשים וקבוצות שלהם מוקצות הרשאות שאינן הרשאות המשויכות למנהלנים וליוצרים.<p>אתם יכולים להעביר משתמשים וקבוצות אלו לתפקיד יוצרים של תבנית מרחב צוות באמצעות הסרה שלהם מתפקיד אחרים והקצאתם כיוצרים של תבנית מרחב צוות.<p>אתם יכולים לסקור את ההרשאות שהוענקו כעת למשתמשים ולקבוצות אלו באמצעות IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "מנהלני מרחבי צוות הם משתמשים שיש להם הרשאת <b>בקרה מלאה</b> במאגר (מאגר האובייקטים). אינכם יכולים לשנות את רשימת מנהלני מרחבי הצוות מכלי המנהלה.<p>מנהלני מרחבי צוות יכולים למחוק או לשנות כל מרחב צוות. המשתמש היוצר מרחב צוות אינו צריך לשתף את מרחב הצוות עם מנהלני מרחבי הצוות.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "כשתגדירו משתמש או קבוצה כיוצר מרחבי צוות, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר ליצירת מרחבי צוות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>מידע נוסף</a>",
		admin_repcfg_teamspace_user_hover_p8: "כשתגדירו משתמש או קבוצה כמשתמש במרחבי צוות, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר לשימוש במרחבי צוות. עם זאת, משתמש חייב להיות חבר במרחב צוות כדי לגשת אל מרחב הצוות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>מידע נוסף</a><p><b>עצה:</b> כדי שכל המשתמשים בסביבה שלכם יוכלו לראות מרחבי צוות, תוכלו להוסיף את חשבון הדמה ‎#AUTHENTICATED-USERS לתפקיד 'משתמש מרחב צוות'.</p>",
		admin_repcfg_teamspace_others_hover_p8: "משתמשים וקבוצות שלהם מוקצות הרשאות שאינן הרשאות המשויכות למנהלנים, ליוצרים ולמשתמשים.<p>אתם יכולים להעביר משתמשים וקבוצות אלו לתפקידים מוגדרים מראש באמצעות הסרה שלהם מתפקיד אחרים והקצאת תפקידי תבנית מרחב צוות.<p>אתם יכולים לסקור את ההרשאות שהוענקו כעת למשתמשים ולקבוצות אלו באמצעות IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "מנהלני תבניות קלט הם משתמשים שיש להם הרשאת <b>בקרה מלאה</b> במאגר (מאגר האובייקטים). אינכם יכולים לשנות את רשימת מנהלני תבניות הקלט מכלי המנהלה. <p>מנהלני תבניות קלט יכולים למחוק או לשנות כל תבנית קלט. המשתמש היוצר תבנית קלט אינו צריך לשתף את תבנית הקלט עם מנהלני תבניות קלט.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "כשתגדירו משתמש או קבוצה כיוצר תבניות קלט, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר ליצירת תבניות קלט. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>מידע נוסף</a>",
		admin_repcfg_entry_template_user_hover_p8: "כשתגדירו משתמש או קבוצה כמשתמש בתבניות קלט, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר לשימוש בתבניות קלט. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>מידע נוסף</a><p><b>עצה:</b> כדי שכל המשתמשים בסביבה שלכם יוכלו להשתמש בתבניות קלט, תוכלו להוסיף את חשבון הדמה ‎#AUTHENTICATED-USERS לתפקיד 'משתמש בתבנית קלט'.</p>",
		admin_repcfg_entry_template_others_hover_p8: "משתמשים וקבוצות שלהם מוקצות הרשאות שאינן הרשאות המשויכות למנהלנים, ליוצרים ולמשתמשים.<p>אתם יכולים להעביר משתמשים וקבוצות אלו לתפקידים מוגדרים מראש באמצעות הסרה שלהם מתפקיד אחרים והקצאת תפקידי תבנית.<p>אתם יכולים לסקור את ההרשאות שהוענקו כעת למשתמשים ולקבוצות אלו באמצעות IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "כשתגדירו משתמש או קבוצה כיוצר תבניות מרחב צוות, המשתמש או הקבוצה יקבלו הרשאות מתאימות ליצירת תבניות מרחב צוות במאגר. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>מידע נוסף</a>",
		admin_repcfg_teamspace_creators_hover_cm: "כשתגדירו משתמש או קבוצה כיוצר מרחבי צוות, המשתמש או הקבוצה יקבלו הרשאות מתאימות ליצירת מרחבי צוות במאגר. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>מידע נוסף</a>",
		admin_repcfg_teamspace_user_hover_cm: "כשתגדירו משתמש או קבוצה כמשתמש במרחבי צוות, המשתמש או הקבוצה יקבלו הרשאות מתאימות לשימוש במרחבי צוות במאגר. עם זאת, משתמש חייב להיות חבר במרחב צוות כדי לגשת אל מרחב הצוות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>מידע נוסף</a>",
		admin_repcfg_entry_template_creators_hover_cm: "כשתגדירו משתמש או קבוצה כיוצר תבניות קלט, המשתמש או הקבוצה יקבלו הרשאות מתאימות ליצירת תבניות קלט במאגר. <br/><br/>עם זאת, הגדרות האבטחה עבור תבנית קלט ספציפית קובעות את ההרשאות שיהיו למשתמש או לקבוצה עבור תבנית הקלט. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>מידע נוסף</a>",
		admin_repcfg_entry_template_editors_hover_cm: "כשתגדירו משתמש או קבוצה כעורך תבניות קלט, המשתמש או הקבוצה יקבלו הרשאות מתאימות לעריכת תבניות קלט במאגר. <br/><br/>עם זאת, הגדרות האבטחה עבור תבנית קלט ספציפית קובעות את ההרשאות שיהיו למשתמש או לקבוצה עבור תבנית הקלט. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>מידע נוסף</a>",
		admin_repcfg_entry_user_hover_cm: "כשתגדירו משתמש או קבוצה כמשתמש תבניות קלט, המשתמש או הקבוצה יקבלו הרשאות מתאימות לשימוש בתבניות קלט במאגר. <br/><br/>עם זאת, הגדרות האבטחה עבור תבנית קלט ספציפית קובעות את ההרשאות שיהיו למשתמש או לקבוצה עבור תבנית הקלט. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>מידע נוסף</a>",
		admin_repcfg_office_template_creators_hover_cm: "כשתגדירו משתמש או קבוצה כיוצר תבניות של Microsoft Office Online או של שירות העריכה, המשתמש או הקבוצה יקבלו הרשאות מתאימות ליצירת קבצי התבניות במאגר. <br/><br/>עם זאת, הגדרות האבטחה עבור תבנית קובץ ספציפית קובעות את ההרשאות שיהיו למשתמש או לקבוצה עבור התבנית.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a>",
		admin_repcfg_office_template_editors_hover_cm: "כשתגדירו משתמש או קבוצה כעורך תבניות של Microsoft Office Online או של שירות העריכה, המשתמש או הקבוצה יקבלו הרשאות מתאימות לעריכת קבצי התבניות במאגר.  <br/><br/>עם זאת, הגדרות האבטחה עבור תבנית קובץ ספציפית קובעות את ההרשאות שיהיו למשתמש או לקבוצה עבור התבנית.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a>",
		admin_repcfg_office_template_user_hover_cm: "כשאתם מקצים משתמש או קבוצה כמשתמש תבנית של Microsoft Office Online או של שירות העריכה, המשתמש או התבנית מקבלים את ההרשאות המתאימות להחיל תבנית כשהם יוצרים מסמך חדש של Office Online מלקוח האינטרנט.  <br/><br/>עם זאת, הגדרות האבטחה עבור תבנית קובץ ספציפית קובעות את ההרשאות שיהיו למשתמש או לקבוצה עבור התבנית.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a>",
		admin_repcfg_draft_creators_hover_cm: "כל משתמש שצריך לערוך מסמכים בשיתוף פעולה ב-Microsoft Office Online או שירות עריכה צריך לקבל הקצאה לתפקיד זה. אל תקצו משתמשים לתפקידי העורך או המשתמש. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a>",
		admin_repcfg_draft_editors_hover_cm: "כל משתמש שצריך לערוך מסמכים בשיתוף פעולה ב-Microsoft Office Online או שירות עריכה צריך לקבל הקצאה לתפקיד <b>יוצר</b>. אם משתמש מוקצה לתפקיד עורך, הוא לא יכול ליצור טיוטות, הנדרשות לעריכה בשיתוף פעולה.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a>",
		admin_repcfg_draft_user_hover_cm: "כל משתמש שצריך לערוך מסמכים בשיתוף פעולה ב-Microsoft Office Online או שירות עריכה צריך לקבל הקצאה לתפקיד <b>יוצר</b>. אם משתמש מוקצה לתפקיד משתמש, הוא לא יכול ליצור טיוטות, הנדרשות לעריכה בשיתוף פעולה.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>למדו פרטים נוספים</a>",		
		admin_repcfg_search_others_hover_p8: "משתמשים וקבוצות שלהם מוקצות הרשאות שאינן הרשאות המשויכות למנהלנים, ליוצרים ולמשתמשים.<p>אתם יכולים להעביר משתמשים וקבוצות אלו לתפקידים מוגדרים מראש באמצעות הסרה שלהם מתפקיד אחרים והקצאת תפקידי חיפוש.<p>אתם יכולים לסקור את ההרשאות שהוענקו כעת למשתמשים ולקבוצות אלו באמצעות IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "מנהלני חיפוש הם משתמשים שיש להם הרשאת <b>בקרה מלאה</b> במאגר (מאגר האובייקטים). אינכם יכולים לשנות את רשימת מנהלני החיפוש מכלי המנהלה. <br /><br />מנהלני חיפוש יכולים למחוק או לשנות כל חיפוש. המשתמש היוצר חיפוש אינו צריך לשתף את החיפוש עם מנהלני החיפוש.",
		admin_repcfg_search_creators_hover_p8: "כשתגדירו משתמש או קבוצה כיוצר חיפוש, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר ליצירת חיפושים. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>מידע נוסף</a>",
		admin_repcfg_search_user_hover_p8: "כשתגדירו משתמש או קבוצה כמשתמש בחיפוש, המשתמש או הקבוצה יקבלו הרשאות אבטחה מתאימות במאגר לשימוש בחיפושים <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>מידע נוסף</a>.<br /><br /><b>עצה:</b> כדי שכל המשתמשים בסביבה שלכם יוכלו להשתמש בחיפושים, תוכלו להוסיף את חשבון הדמה ‎#AUTHENTICATED-USERS לתפקיד 'משתמש חיפוש'.<br/><br />כברירת מחדל, משתמשי חיפוש יכולים ליצור חיפושים וחיפושים חוצי-מאגרים אך אינם יכולים לשמור את החיפושים. כדי למנוע ממשתמשי חיפוש לייצור חיפושים, תנו להם להשתמש בשולחן עבודה שעבורו נבחרו האפשרויות האלה:<ul><li><b>מניעת יצירת חיפושים על ידי משתמשים</b></li><li><b>מניעת יצירת חיפושים חוצי-מאגרים על ידי משתמשים</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "כשתגדירו משתמש או קבוצה כיוצר חיפוש, המשתמש או הקבוצה יקבלו הרשאות מתאימות ליצירה ושמירה של חיפושים וחיפושים חוצי-מאגרים במאגר. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>מידע נוסף</a><br /><br /><b>חשוב:</b> ודאו שיוצרי חיפוש ישתמשו בשולחן עבודה שעבורו לא נבחרו האפשרויות האלה:<ul><li><b>מניעת יצירת חיפושים על ידי משתמשים</b></li><li><b>מניעת יצירת חיפושים חוצי-מאגרים על ידי משתמשים</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "כשתגדירו משתמש או קבוצה כעורך חיפוש, המשתמש או הקבוצה יקבלו הרשאות מתאימות לשינוי של חיפושים וחיפושים חוצי-מאגרים קיימים במאגר. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>מידע נוסף</a><br /><br /><b>עצה:</b> כברירת מחדל, עורכי חיפוש יכולים ליצור חיפושים וחיפושים חוצי-מאגרים אך אינם יכולים לשמור את החיפושים. כדי למנוע מעורכי חיפוש לייצור חיפושים, תנו להם להשתמש בשולחן עבודה שעבורו נבחרו האפשרויות האלה:<ul><li><b>מניעת יצירת חיפושים על ידי משתמשים</b></li><li><b>מניעת יצירת חיפושים חוצי-מאגרים על ידי משתמשים</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "כשתגדירו משתמש או קבוצה כמשתמש חיפוש, המשתמש או הקבוצה יקבלו הרשאות מתאימות לפתיחה והרצה של חיפושים וחיפושים חוצי-מאגרים שנשמרו במאגר. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>מידע נוסף</a><br /><br /><b>עצה:</b> כברירת מחדל, משתמשי חיפוש יכולים ליצור חיפושים וחיפושים חוצי-מאגרים אך אינם יכולים לשמור את החיפושים. כדי למנוע ממשתמשי חיפוש לייצור חיפושים, תנו להם להשתמש בשולחן עבודה שעבורו נבחרו האפשרויות האלה:<ul><li><b>מניעת יצירת חיפושים על ידי משתמשים</b></li><li><b>מניעת יצירת חיפושים חוצי-מאגרים על ידי משתמשים</b></li></ul>",
		admin_repcfg_db_encoding: "קידוד תווים במסד הנתונים של השרת:",
		admin_repcfg_db_encoding_hover: "קידוד התווים המחדלי עבור מסד נתונים של IBM Content Manager הוא UTF-8.",
		admin_repcfg_db_encoding_specify: "ציינו את קידוד התווים במסד הנתונים",
		admin_repcfg_db_encoding_utf8: "קידוד UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "ציינו אפשרות זו אם קידוד UTF-8 משמש במסד הנתונים. IBM Content Navigator ישתמש בקידוד UTF-8 כדי לבדוק את אורכן של מחרוזות ערכי תכונות של פריטים.",
		admin_repcfg_db_encoding_other: "קידוד אחר",
		admin_repcfg_db_encoding_other_hover: "ציינו אפשרות זו אם קידוד שאינו UTF-8 משמש במסד הנתונים. IBM Content Navigator ישתמש בספירת התווים כדי לבדוק את אורכן של מחרוזות ערכי תכונות של פריטים.",
		admin_repcfg_language_codes: "קודי שפה של השרת:",
		admin_repcfg_language_codes_avail: "זמין",
		admin_repcfg_language_codes_sel: "נבחר",
		admin_repcfg_pdf_conversion: "סוגי MIME להמרה למסמכי PDF בצרופות:",
		admin_repcfg_pdf_conversion_avail: "זמין",
		admin_repcfg_pdf_conversion_sel: "נבחר",

		admin_repcfg_box_share_enable_classes_label: "מחלקות לשינוי לשם תמיכת שיתוף Box:",
		admin_repcfg_box_share_enable_classes_hover: "ניתן לשנות את המחלקה כך שזיהוי הקובץ יאוחסן בBox כשהפריט משותף",
		admin_repcfg_box_share_enable_classes_warning: "חשוב: כל מחלקה שתציינו תשונה לתומכת שיתוף Box. לאחר שתשמרו את השינויים, לא תוכלו לסלק את השינויים מהמחלקות.<br><br>עליכם להיות מחוברים למאגר כמנהלני שרת ספריה כדי לשנות מחלקות.",
		admin_repcfg_box_share_enable_classes_available: "מחלקות זמינות",
		admin_repcfg_box_share_enable_classes_selected: "מחלקות שנבחרו",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Store Box Share ID",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "מחלקה זו כבר שונתה למחלקה המכילה את זיהוי שיתוף הBox. אינכם יכולים לסלק אפשרות זו.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "יש לשנות מחלקה זו כדי שהיא תאחסן את זיהוי הקבצים בBox כאשר הפריט משותף.",

		admin_repcfg_redaction: "עריכות על בסיס תפקיד:",
		admin_repcfg_enable_redaction_hover: "ציינו אם ברצונכם להשתמש בעריכות על בסיס תפקיד במסמכים שבמאגר זה.<br/><br/>עריכות על בסיס תפקיד מוחלות כשהמסמך מורד, מודפס, מעובד בידי צופה או מוצג כתמונה ממוזערת. מה שמשתמשים רואים בצפייה במסמך תלוי בתפקידם ובכל מדיניות עריכה ישימה.",

		admin_repcfg_redaction_policy_permission_text: "הקצאת עורכי מדיניות:",
		admin_repcfg_redaction_policy_editors_hover: "בחרו את המשתמשים והקבוצות שייצרו, יערכו וימחקו כל מדיניות עריכה וכל תפקיד עריכה.",
		admin_repcfg_redaction_policy_editors_select_hover: "עורכי מדיניות עריכה יכולים ליצור, לערוך ולמחוק כל מדיניות עריכה וכל תפקיד עריכה.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "מנהלני מדיניות עריכה יכולים להקצות עורכי מדיניות עריכה.<br/><br/>ניתן לשנות את רשימת מנהלני מדיניות העריכה באמצעות IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "מנהלני מדיניות עריכה יכולים להקצות עורכי מדיניות עריכה.<br/><br/>ניתן לשנות את רשימת מנהלני מדיניות העריכה באמצעות לקוח מנהלן המערכת של IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "הקצעת עורכי עריכה:",
		admin_repcfg_redaction_editors_hover: "בחרו את המשתמשים והקבוצות שייצרו, יערכו וימחקו עריכות על בסיס תפקיד. לאחר הבחירה במשתמשים וקבוצות כעורכים, יש להגדירם כעורכים במדיניות עריכה כדי שיוכלו לערוך עריכות על בסיס תפקיד.",
   		admin_repcfg_redaction_editors_select_hover: "עורכי עריכה יכולים ליצור, לערוך ולמחוק כל עריכה על בסיס תפקיד כשהם גם מוגדרים כעורכים במדיניות עריכה.",
   		admin_repcfg_redaction_administrators_hover_p8: "מנהלני עריכה יכולים להקצות עורכי עריכה.<br/><br/>ניתן לשנות את רשימת מנהלני העריכה באמצעות IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "מנהלני עריכה יכולים להקצות עורכי עריכה.<br/><br/>ניתן לשנות את רשימת מנהלני העריכה באמצעות לקוח מנהלן המערכת של IBM Content Manager.",
		admin_repcfg_entry_template: "ניהול תבניות קלט:",
		admin_repcfg_entry_template_enable_classes_label: "מחלקות לשינוי עבור תמיכה בתבניות קלט:",
		admin_repcfg_oos_reference_attribute_label: "מאפייני הפניה עבור Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "חשוב: מחלקות שתציינו ישונו לתמיכה בתבניות קלט. לאחר שתשמרו את השינויים, לא תוכלו לסלק את השינויים מהמחלקות.<br><br>תוכלו לשנות את המחלקה לאחת המטרות האלה או שתיהן:<br><ul><li>כדי לאחסן את זיהוי תבנית הקלט שנעשה בו שימוש להוספת פריט כך שהגדרות תבנית הקלט יוחלו כשהפריט משתנה</li><li>מחלקות תיקיות היררכיות בלבד: לתמיכה בשיוכי תיקיות של תבניות קלט</li></ul>עליכם להיות מחוברים למאגר כמנהלני שרת ספריה כדי לשנות מחלקות.",
		admin_repcfg_entry_template_enable_classes_warning: "חשוב: מחלקות שתציינו ישונו לתמיכה בתבניות קלט. לאחר שתשמרו את השינויים, לא תוכלו לסלק את השינויים מהמחלקות.<br><br>עליכם להיות מחוברים למאגר כמנהלני שרת ספריה כדי לשנות מחלקות.",
		admin_repcfg_entry_template_enable_classes_available: "מחלקות זמינות",
		admin_repcfg_entry_template_enable_classes_selected: "מחלקות שנבחרו",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "אחסון זיהוי תבנית קלט",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "שנו מחלקה זו כך שתאחסן את זיהוי תבנית הקלט שנעשה בו שימוש להוספת פריט, כדי שהגדרות תבנית הקלט יוחלו כשהפריט משתנה.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "אחסון שיוכי תיקיות",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "שנו מחלקה זו כדי שתתמוך בשיוכי תיקיות של תבניות קלט. אפשרות זו זמינה רק עבור מחלקות תיקיות היררכיות.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "מחלקה זו כבר שונתה כדי לאחסן את זיהוי תבנית הקלט. אינכם יכולים לסלק אפשרות זו.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "מחלקה זו כבר שונתה כדי לאחסן שיוכי תיקיות. אינכם יכולים לסלק אפשרות זו.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "רק מחלקות תיקיות היררכיות ומחלקות תיקיות שאינן היררכיות יכולות לשמש לאחסון שיוכי תיקיות.",
		admin_repcfg_entry_template_root_folder_association_title: "תבניות קלט המשויכות אל תיקיית היסוד:",
		admin_repcfg_entry_template_root_folder_association_hover: "ציינו אילו תבניות קלט ברצונכם לשייך אל תיקיית היסוד במאגר IBM Content Manager.‏<br /><br />אם תשייכו תבניות קלט אל תיקיית היסוד ומשתמשים יוסיפו פריטים לתיקיה היררכית, ייעשה שימוש בתבנית קלט להוספת הפריטים.",
		admin_repcfg_entry_template_root_folder_association_button: "הגדרת שיוכים",
		admin_repcfg_oos_enable_classes_label: "מחלקות לשינוי עבור תמיכה ב-Office Online ובשירות העריכה:",
		admin_repcfg_oos_enable_classes_warning: "חשוב: מחלקות שתציינו ישונו לתמיכה ב-Microsoft Office Online ובשירות העריכה. לאחר שתשמרו את השינויים שלכם, מאפיין ההפניה שנוסף באופן אוטומטי לכל מחלקה לא ניתן לסילוק.<br><br>עליכם להיות מחוברים למאגר כמנהלני שרת ספריה כדי לשנות מחלקות.",
		admin_repcfg_oos_enable_classes_available: "מחלקות זמינות",
		admin_repcfg_oos_enable_classes_selected: "מחלקות שנבחרו",
		admin_repcfg_oos_enable_classes_note: "חשוב:",
		admin_repcfg_oos_enable_classes_selected_not_support: "מחלקה זו אינה נתמכת ב-Microsoft Office Online או בשירות העריכה.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "מדיניות הגרסאות של המחלקה היא תמיד ליצור גרסאות – דבר ש-Microsoft Office Online או שירות העריכה לא תומכים בו. יש לבחור מחלקה אחרת.",
		admin_repcfg_download_recording: "מעקב הורדות:",
		admin_repcfg_download_recording_hover: "מעקב אחר הורדות מתבצע כברירת מחדל כאשר תוסף Social Collaboration Base Extensions מותקן במאגר. עם זאת, השבתת אפשרות זו יכולה לשפר את ביצועי המאגר.<br><br>אם תשביתו אפשרות זו, משתמשים יראו ספירה של ההורדות שהתבצעו לפני שהאפשרות הושבתה.",
		admin_repcfg_sync_service: "שירותי סינכרון:",
		admin_repcfg_download_ignored: "התעלמות מהורדות עבור משתמשים מסוימים:",
		admin_repcfg_download_ignored_hover: "אפשר להתעלם מהורדות שביקשו משתמשים מסוימים, כגון מנהלנים או חשבונות מערכת, כדי לשקף באופן מדויק יותר את מספר המשתמשים שהורידו מסמך. לדוגמה, אם יש לכם חשבון מסוים המשמש להורדת תוכן להפקת דוח חודש, תוכלו להתעלם מהורדות שהתבקשו על ידי חשבון זה.<br><br><b>מגבלה:</b> לא ניתן לציין קבוצות.",

		admin_repcfg_add_as_major_version: "הוספה כגרסה ראשית:",
		admin_repcfg_enable_add_as_major_version: "כן",
		admin_repcfg_disable_add_as_major_version: "לא",
		admin_repcfg_checkin_as_major_version: "הפקדה כגרסה ראשית:",
		admin_repcfg_enable_checkin_as_major_version: "כן",
		admin_repcfg_disable_checkin_as_major_version: "לא",
		admin_repcfg_annotation_security: "אבטחת ביאורים:",
		admin_repcfg_inherit_annotation_security: "שכפול האבטחה של המסמך המכיל",
		admin_repcfg_default_annotation_security: "שימוש באבטחת הביאורים המחדלית",
		admin_repcfg_connection_point: "נקודת חיבור של תזרים-עבודה:",
		admin_repcfg_include_workflow_definition: "הצגת מחלקה של הגדרת תזרים-עבודה:",
		admin_repcfg_include_form_template: "הצגת מחלקה של תבנית טופס:",
		admin_repcfg_enable_include_workflow_definition: "כן",
		admin_repcfg_disable_include_workflow_definition: "לא",

		admin_repcfg_status_columns: "איקוני מצב:",
		admin_repcfg_status_columns_hover: "ציינו את המצבים שעבורם יוצגו איקונים. איקוני המצב מוצגים ליד מסמכים, תיקיות ופריטי עבודה ברשימת התוכן.",
		admin_repcfg_status_columns_documents_or_folders: "הצגת איקון למסמכים או תיקיות כאשר:",
		admin_repcfg_status_columns_documents: "הצגת איקון למסמכים כאשר:",
		admin_repcfg_status_columns_documents_checked_out: "הם נמשכים",
		admin_repcfg_status_columns_documents_declared_records: "הם מוכרזים כרשומות",
		admin_repcfg_status_columns_documents_minor_versions: "יש להם גרסאות משניות",
		admin_repcfg_status_columns_documents_compound_document: "הם מסמכים מרוכבים",
		admin_repcfg_status_columns_documents_bookmarks: "יש להם סימניות",
		admin_repcfg_status_columns_documents_hold: "הם מושהים",
		admin_repcfg_status_columns_documents_notes: "יש להם הערות",
		admin_repcfg_status_columns_work_items: "הצגת איקון לפריטי עבודה כאשר:",
		admin_repcfg_status_columns_work_items_locked: "הם ננעלים",
		admin_repcfg_status_columns_work_items_checked_out: "הם נמשכים",
		admin_repcfg_status_columns_work_items_deadline: "יש להם תאריך יעד",
		admin_repcfg_status_columns_work_items_suspended: "הם מושעים מעיבוד",

		admin_repcfg_afp2pdf_config_file: "קובץ תצורת AFP2PDF:",
		admin_repcfg_transform_xml_file: "קובץ התמרה מותאם:",
		admin_repcfg_ssl: "SSL:‏",
		admin_repcfg_enable_ssl: "הפעלה",
		admin_repcfg_disable_ssl: "השבתה",
		admin_repcfg_keyringdb_file: "קובץ מסד נתונים של מחזיק מפתחות:",
		admin_repcfg_keyringstash_file: "קובץ אחסון של מחזיק מפתחות:",
		admin_repcfg_od_sso: "התחברות בזהות יחידה",
		admin_repcfg_od_enable_sso: "הפעלה",
		admin_repcfg_od_disable_sso: "השבתה",
		admin_repcfg_od_sso_password: "סיסמה",
		admin_repcfg_advanced_label: "מתקדם",
		admin_repcfg_custom_properties_label: "תכונות מותאמות:‏",
		admin_repcfg_new_button_label: "חדש",
		admin_repcfg_edit_button_label: "עריכה",
		admin_repcfg_delete_button_label: "מחיקה",
		admin_repcfg_custom_head1: "שם",
		admin_repcfg_custom_head2: "ערך",
		admin_repcfg_ecpdialog_title_new: "תכונה מותאמת חדשה",
		admin_repcfg_ecpdialog_title_edit: "עריכת תכונה מותאמת",
		admin_repcfg_ecpdialog_name: "שם:",
		admin_repcfg_ecpdialog_value: "ערך:",
		admin_repcfg_ecpdialog_save: "שמירה",
		admin_repcfg_ecpdialog_create: "יצירה",
		admin_repcfg_ecpdialog_cancel: "ביטול",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "זהו ערך דרוש. הערך אינו יכול להכיל רווחים ואינו יכול להיות זהה לערך אחר.",

		admin_repcfg_cmis_use_gzip_encoding: "שימוש בקידוד GZIP:",

		admin_repcfg_task_mgr_proxy: "זיהוי חיבור מנהל המשימות:",
		admin_repcfg_task_mgr_proxy_hover: "כדי לשתף את Box או למחוק מרחב צוות, מנהל המשימות משתמש בשם משתמש וסיסמה של מנהלן כדי להפעיל משימות רקע שמבצעות שינויים במאגר.<br><br>יש ללחוץ על 'הגדרה' ולהתחבר למאגר על ידי שימוש בזיהוי משתמש וסיסמה תקפים של מנהלן מאגר.",
		admin_task_manager_not_enabled_warning: "אפשרות זו דורשת את שירות ניהול המשימות, אבל שירות ניהול המשימות אינו מופעל. ניתן להפעיל את שירות מנהל המשימות עבור כל שולחנות העבודה בעמות ההגדרות הכללי.",
		admin_task_manager_not_enabled_and_user_warning: "אפשרות זו דורשת את שירות ניהול המשימות, אבל שירות ניהול המשימות אינו מופעל. בעמוד זה, קיבעו את זיהוי חיבור מנהל המשימות, ואז בעמוד ההגדרות הכללי הפעילו את שירות ניהול המשימות עבור כל שולחנות העבודה.",
		admin_task_manager_user_id_pw_not_set_warning: "אפשרות זו דורשת את שירות ניהול המשימות וכן זיהוי משתמש וססמה של מנהלן. בעמוד זה קבעו את זיהוי החיבור של מנהל המשימות.",
		admin_repcfg_teamspaces_delete_task_id: "מנהלן מאגר:",
		admin_repcfg_teamspaces_delete_task_password: "סיסמה:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "עליכם לציין זיהוי מנהלן שרת ספריה כדי לאפשר לשירות מנהל המשימות למחוק מרחב צוות במאגר.",
		admin_repcfg_teamspaces_delete_task_hover: "כברירת מחדל, כשמשתמש מוחק מרחב צוות, מרחב הצוות מוסתר. כל התיקיות והמסמכים במרחב הצוות נשארים במאגר. <br /> <br />כשמפעילים אפשרות זו, רק המסמכים המתויקים בתיקיות אחרות במאגר נשארים במאגר.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "אם יש בסביבה שלכם מספר גדול של מרחבי צוות, יתכן שהצגת כל מרחבי הצוות בלשונית <b>מרחבי צוות</b> תדרוש זמן רב. תוכלו לבחור אפשרות זו כדי לצמצם את משך הזמן הדרוש לאכלוס הרשימה.<br /><br />אם משתמש צריך לעבוד עם מרחב צוות הנמצא מחוץ לטווח שציינתם, המשתמש יכול להשתמש בשדה <b>מסנן</b> לאיתור מרחב הצוות.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "אם תבחרו אפשרות זו, משתמשים שיש להם תפקיד 'בעלים' במרחב הצוות יוכלו לשנות את התפקידים המשויכים למרחבי צוות שנוצרו לפני גרסה 2.0.2. של IBM Content Navigator.‏<br /><br />אפשרות זו אינה משפיעה על מרחבי צוות שנוצרו עם IBM Content Navigator גרסה 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "ציינו אם רצונכם לאפשר למשתמשים ליצור מרחבי צוות ותבניות מרחב צוות במאגר זה.<br /><br /><b>חשוב:</b> המאגר חייב לתמוך בתיקיות היררכיות.<br /><br />אם תפעילו מרחבי צוות, IBM Content Navigator ייצור את מודל הנתונים של מרחב הצוות במאגר. מודל הנתונים כולל אובייקטי ACL,‏ הרשאות, מערכי הרשאות ושני סוגי פריטים חדשים.",
		admin_repcfg_folder_selector_hover: "בחרו את התיקיה שתשמש כתייקית יסוד כשמשתמשים מעיינים לאיתור מסמכים. אם לא מוגדרות תיקיות היררכיות במאגר שלכם, הגדרה זו מאפשרת לכם לתמוך בעיון באמצעות הגדרת תיקיית יסוד. אם מוגדרות תיקיות היררכיות במאגר שלכם, הגדרה זו דורסת את תיקיית היסוד המוגדרת במאגר.",
		admin_repcfg_cm_use_sso_hover: "ציינו אם לאפשר התחברות בזהות יחידה (SSO) למשתמשים שהוגדרה עבורם 'התחברות מהימנה'.<br /><br /><b>חשוב:</b> SSO חייב להיות מופעל בשרת Content Manager,‏ ויש להגדיר את  WebSphere Application Server עבור LTPA כדי שפרמטר תצורה זה יפעל.",
		admin_repcfg_cm_direct_retrieve_hover: "אחזור ישיר מופעל כברירת מחדל מפני שהוא מאפשר ללקוח הדפדפן לאחזר במהירות תוכן ממנהל המשאבים. <br /><br />תוכלו להשבית אפשרות זו אם אינכם רוצים שיישום הלקוח ייגש למנהל המשאבים ישירות, או אם יש לכם קיר אש או שרת proxy המונעים מלקוח הדפדפן לגשת למנהל המשאבים דרך כתובות URL.‏ לדוגמה, קיר אש יכול למנוע ממשתמשים להציג מסמכים במציג היישומונים כאשר אחזור ישיר מופעל.",
		admin_repcfg_cmItemTypesToDisplay: "אם אינכם רוצים שמשתמשים יראו את סוגי הפריט של משאבים ושל פריטים בשרת IBM Content Manager,‏ תוכלו להציג רק את סוגי הפריטים של מודל המסמך. סוגי הפריטים מוצגים כאשר משתמשים יוצרים חיפושים, מוסיפים מסמכים ויוצרים תיקיות.",
		admin_repcfg_cm_language_codes_hover: "ציינו את השפות בהן יוחזרו נתונים משרת Content Manager.‏ רשימת השפות הזמינות נשלטת על ידי רשימת הגדרות השפות בשרת.<br /><br /><b>זכרו:</b> נתונים בלקוח הדפדפן מוצגים בשפה המוגדרת בדפדפן של המשתמש.",
		admin_repcfg_cm_pdf_conversion_hover: "ציינו את סוגי המסמכים שיומרו למבנה PDF כאשר משתמש שולח מסמך עם חלקים מרובים כצרופת דואל. כל החלקים ישולבו למסמך PDF יחיד.‏",
		admin_repcfg_use_teamspaces_p8_hover: "ציינו אם רצונכם לאפשר למשתמשים ליצור מרחבי צוות ותבניות מרחב צוות במאגר זה.<br /><br />אם תפעילו מרחבי צוות, IBM Content Navigator ייצור את מודל הנתונים של מרחב הצוות במאגר. מודל הנתונים כולל תבניות תכונות, אובייקטים מותאמים, אובייקט תיקיה וכמה תיקיות.",
		admin_repcfg_use_entry_template_p8_hover: "ציינו אם רצונכם לאפשר למשתמשים ליצור ולנהל תבניות קלט במאגר זה מתוך IBM Content Navigator.‏ אם לא תפעילו אפשרות זו, משתמשים יוכלו לחפש ולהשתמש בתבניות קלט שכבר ננצאות במאגר.<br /><br />אם תפעילו ניהול תבניות קלט, IBM Content Navigator יעדכן את מודל הנתונים של תבניות הקלט במאגר. העדכון כולל תכונות חדשות. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>מידע נוסף</a>",
		admin_repcfg_use_entry_template_cm_hover: "ציינו אם רצונכם לאפשר למשתמשים ליצור ולנהל תבניות קלט במאגר זה מתוך IBM Content Navigator.‏<br /><br />אם תפעילו ניהול תבניות קלט, IBM Content Navigator ייצור את מודל הנתונים של תבניות הקלט במאגר. מודל הנתונים כולל אובייקט  חדש, תכונות חדשות וסוג פריט חדש. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>מידע נוסף</a>",
		admin_repcfg_sync_service_p8_hover: "ציינו אם רצונכם לאפשר למשתמשים לסנכרן את המועדפים שלהם בין תחנות העבודה וההתקנים הניידים שלהם.<br><br><b>חשוב:</b> כדי להשתמש במאפיין זה, יש להשלים גם את המשימות האלה:<br><ul><li>ציינו <b>URL ציבורי של שירותי הסינכרון</b> בחלק <b>שירותי סינכרון</b> של כלי המנהלה.</li><li>הוסיפו מאגר זה לשולחן עבודה ששירותי הסינכרון הופעלו עבורו.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "ציינו אם אפשרות הגרסה הראשית תיבחר כברירת מחדל כאשר משתמשים מוסיפים מסמכים למאגר.<br /><br />למשתמשים יש אפשרות לנקות אפשרות זו אם ברצונם להוסיף את המסמך כגרסה משנית.",
		admin_repcfg_p8_checkin_as_major_version_hover: "ציינו אם אפשרות הגרסה הראשית תיבחר כברירת מחדל כאשר משתמשים מפקידים מסמכים למאגר.<br /><br />למשתמשים יש אפשרות לנקות אפשרות זו אם ברצונם להפקיד את המסמך כגרסה ראשית.",
		admin_repcfg_p8_annotation_security_hover: "ציינו את סוג האבטחה שיוחל כברירת מחדל על ביאורים.<br /><br />למשתמשים יש האפשרות לשנות את אבטחת הביאורים.",
		admin_repcfg_p8_connection_point_hover: "אם ברצונכם להשתמש בתזרימי-עבודה של BM FileNet P8,‏ בחרו נקודת חיבור של Process Engine.‏ נקודת החיבור שתבחרו קובעת אילו תזרימי-עבודה יהיו זמינים לשמתמשים הניגשים למאגר זה.",
		admin_repcfg_p8_include_workflow_definition_hover: "אם אתם מציגים את מחלקת המסמך של הגדרת תזרים-העבודה של IBM FileNet P8 בלקוח הדפדפן, משתמשים יוכלו לחפש ולהוסיף הגדרות תזרים-עבודה למאגר.",
		admin_repcfg_p8_include_form_template_hover: "אם אתם מציגים את מחלקת המסמך של תבנית הטופס של IBM FileNet P8 בלקוח הדפדפן, משתמשים יוכלו לחפש ולהוסיף תבניות טופס למאגר.",
		admin_repcfg_od_afp2pdf_config_file_hover: "ציינו את הנתיב המלא של קובץ התצורה של AFP2PDF עבור מאגר זה בשרת היישומים. התמרת AFP2PDF דרושה להצגה והדפסה של נתוני AFP.‏<br /><br /><b>זכרו:</b> התמרת AFP2PDF חייבת להיות מותקנת כדי להשתמש בפרמטר זה.",
		admin_repcfg_od_transform_xml_file_hover: " אם ברצונכם להשתמש בהתמרה מותאמת להמרת תוכן של Content Manager OnDemand content, ציינו את הנתיב המלא של קובץ ה-XML המשמש להגדרת ההתמרה. קובץ ה-XML חייב להימצא בשרת היישומים.",
		admin_repcfg_od_ssl_hover: "ציינו אם SSL ישמש להצפנת התקשורת בין שרת היישומים של IBM Content Navigator לבין שרת הספריה של Content Manager OnDemand ושרתי אובייקטים.<br /><br /><b>חשוב:</b> כשמפעילים את SSL עבור Content Manager OnDemand,‏ ההפעלה אינה כוללת את התקשורת עם שרת היישומים של IBM Content Navigator,‏ שרת הרשת או תחנות העבודה של המשתמשים.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "ציינו את הנתיב המלא של קובץ מסד הנתונים של מחזיק המפתחות עבור מאגר זה בשרת היישומים. לדוגמה, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.‏<br /><br />קובץ מסד הנתונים של מחזיק המפתחות מכיל את אישורי היסוד המהימנים שלכם. יש להשתמש בהגנה חזקה של מערכת הקבצים כדי למנוע גישה לא מורשית לקובץ זה.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "ציינו את הנתיב המלא של קובץ האחסון של מחזיק המפתחות עבור מאגר זה בשרת היישומים. לדוגמה, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.‏<br /><br />קובץ האחסון מכיל את הסיסמה עבור קובץ מסד הנתונים של מחזיק המפתחות. יש להשתמש בהגנה חזקה של מערכת הקבצים כדי למנוע גישה לא מורשית לקובץ זה.",
		admin_repcfg_od_sso_password_hover: "ציינו את הסיסמה לשימוש לצורך התחברות בזהות יחידה (SSO) אל שרת OnDemand.‏ Specify the password to use for single sign-on with the OnDemand server.",
		admin_repcfg_od_custom_properties_hover: "Java API של ODWEK תומך בתכונות מותאמות. אם ברצונכם להשתמש בתכונות מותאמות בזמן התחברות למאגר דרך לקוח הדפדפן, ציינו את השמות והערכים של התכונות המותאמות.<br /><br />כדי לקבל מידע נוסף על תכונות מותאמות נתמכות, ראו את מסמכי Javadoc של ODWEK Java API,‏ בתת-מדריך ‎/api במדריך ההתקנה של ODWEK.‏",
		admin_repcfg_od_custom_properties_name_hover: "ציינו את שם התכונה.",
		admin_repcfg_od_custom_properties_value_hover: "ציינו את ערך התכונה.",
		admin_repcfg_od_use_sso_hover: "ציינו אם לאפשר למשתמשים התחברות בזהות יחידה (SSO) עבור משתמשים.<br /><br /><b>חשוב:</b> SSO חייב להיות מופעל בשרת Content Manager OnDemand כדי שפרמטר תצורה זה יפעל.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "שימוש בקידוד GZIP עבור משאב CMIS זה.",
		admin_repcfg_cm_use_part_file_name: "שם לקובץ לשימוש בזמן הורדת מסמכים:",
		admin_repcfg_cm_use_part_file_name_help: "ציינו איך שמות הקבצים של מסמכים ייקבעו כשמשתמשים יורידו מסמכים.",
		admin_repcfg_cm_use_part_file_name_enable: "שימוש בשם הקובץ",
		admin_repcfg_cm_use_part_file_name_disable: "שימוש בשם הפריט במאגר",
		admin_repcfg_add_doc_name: "שם מחדלי למסמך שנוסף:",
		admin_repcfg_add_doc_name_hover: "משתמשים יכולים לשנות את השם לפני הוספת המסמך.",
		admin_repcfg_add_doc_name_empty: "None (blank)",
		admin_repcfg_add_doc_name_file_name: "שם הקובץ של המסמך הבחור",

		admin_repcfg_compound_documents: "מאפייני מסמכים מרוכבים:",
		admin_repcfg_compound_documents_hover: "הפעלת מאפייני מסמכים מרוכבים של P8,‏ כגון ניווט.",
		admin_repcfg_cm_action_list_config_enabled: "רשימת הפעולות של פריטי העבודה:",
		admin_repcfg_cm_action_list_config_hover: "כשאתם קובעים תצורה של ניתוב בלקוח ניהול המערכת של Content Manager, באפשרותכם לציין רשימה של פעולות שמשתמש יכול לבצע בפריט עבודה.<br /><br />הפעילו אפשרות זו אם ברצונכם להשתמש ברשימת הפעולות משרת Content Manager. הגדרות אלה משתמשות בתפריט תלוי ההקשר ובחלון עריכת התכונות עבור פריט העבודה.<br /><br /><b>חשוב:</b> ההגדרות ברשימת הפעולות עוקפות כל תפריט מותאם אישית שקבעתם את תצורתם בכלי הניהול של Content Navigator. אם אין הגדרות ברשימת הפעולות, המשתמש לא יוכל לבצע אף פעולה על פריטי עבודה.",

		admin_repcfg_box_share: "שיתוף Box",
		admin_repcfg_box_share_p8_hover: "מאפשר למשתמשים לשתף מסמך מתוך המאגר. שיתוף מסמך כולל את העתקת קובץ לBox, יצירת הקישור ושליחת הקישור בדואל.<br /><br />אם אתם מפעילים את שיתוף הBox, IBM Content Navigator מייצר את מודל הנתונים של שיתוף הBox במאגר. כדי להתקין את תוסף השיתוף של הIBM Content Navigator Box, עליכם להיות מחוברים למאגר כמנהלן ספריית שרת.",

		admin_menu_type_icon: "איקון סוג Menu",
		admin_menu_toolbar_hover: "סרגל הכלים",
		admin_menu_toolbar_custom_hover: "סרגל כלים מותאם",
		admin_menu_contextMenu_hover: "תפריט הקשר",
		admin_menu_contextMenu_custom_hover: "תפריט הקשר מותאם",

		admin_menu_contextMenu_custom_empty: "לא מוגדרים תפריטי הקשר מותאים בתוספים המוגדרים.",
		admin_menu_toolbar_custom_empty: "לא מוגדרים סרגלי כלים מותאים בתוספים המוגדרים.",

		admin_file_type_category_filters: "מסנני סוג קובץ:",
		admin_file_type_category_filters_hover_help: "ציינו רשימה של סוגי קבצים שמשתמשים יכולים להשתמש בהם במצבים האלה:<ul><li>לצמצום רשימת התוצאות בזמן חיפוש או עיון בתוך IBM Content Navigator for Microsoft Office<li>לצמצום רשימת התוצאות בזמן חיפוש במאגר IBM FileNet P8 בלקוח הדפדפן<li>להגבת סוגי הקבצים שמשתמשים יכולים להוסיף למאגר כשהם משתמשים בתבנית קלט</ul>",
		admin_file_type_only_use_in_et_folder_association: "להציג רק בשיוכי תיקיות של תבנית קלט",
		admin_office_config_properties_label: "תכונות Office",
		admin_office_config_type_label: "סוג נתונים",
		admin_office_config_mapped_property_label: "תכונת מאגר",
		admin_office_config_properties_hover_help: "ציינו אז הוסיפו את השם של כל תכונת Microsoft Office שברצונכם למפות לתכונת מאגר. סוג הנתונים של כל התכונות חייב להיות תואם",
		admin_office_config_mapped_property_hover_help: "אם ברצונכם למפות את תכונות Office ליותר מתכונת מאגר אחת, עליכם ליצור מיפוי תכונה חדש",
		admin_new_property_mapping_title: "מיפוי תכונה חדש",
		admin_property_mapping_title: "עריכת מיפוי תכונה",
		admin_property_mapping_instruction: "ציינו את תכונות Microsoft Office שימופו לתכונה במאגר. סוג הנתונים של תכונות Office חייב להיות זהה לסוג הנתונים של התכונה במאגר. <br /><br />אם למסמך Office יש יותר מתכונה אחת מהמיפוי, IBM Content Navigator ישתמש בתכונה הראשונה ברשימה לאכלוס התכונה במאגר.",
		admin_ms_general_settings: "תצורה כללית:",
		admin_ms_delete_local_settings: "מחיקת קובץ כאשר משתמשים מבצעים:",
		admin_ms_outlook_options: "שילוב Outlook:",
		admin_ms_enable_props_mapping: "מיפוי תכונות Office לתכונות מאגר כאשר משתמשים מבצעים:",
		admin_ms_open_doc_when_checkout: "משיכה אוטומטית של מסמך כשהוא נפתח",
		admin_ms_open_doc_when_checkout_hover_help: "בחירה באפשרות זו מונעת מהמשתמש לדרוס את הקובץ במאגר בגרסה ישנה יותר של הקובץ.",
		admin_ms_prompt_close_office: "הצגת הנחיה למשתמשים להפקיד מסמכים כשהם סוגרים יישומי Office.‏",
		admin_ms_prompt_close_office_hover_help: "בחירה באפשרות זו מונעת מהמשתמש לשכוח להפקיד את העבודה שלו.",
		admin_ms_add_with_entry_template_only: "להציג רק את הפעולה 'הוספה באמצעות תבנית'",
		admin_ms_delete_local_on_add: "מחיקת קבצים מקומיים כאשר משתמשים מוסיפים מסמכים",
		admin_ms_delete_local_on_checkin: "מחיקת קבצים מקומיים כאשר משתמשים מפקידים מסמכים או מבטלים משיכה של מסמכים",
		admin_ms_delete_local_on_add_hover_help: "כאשר משתמש מוסיף מסמך ב-IBM Content Navigator for Microsoft Office, המסמך נוסף למאגר והעותק המקומי של המסמך נשאר פתוח כדי שמשתמשים יוכלו למשוך את המסמך באופן מיידי כדי לבצע בו שינויים.<br /><br />בחרו באפשרות זו כדי לסגור ולמחוק את העותק המקומי של המסמך באופן אוטומטי לאחר הוספת המסמך למאגר.",
		admin_ms_delete_local_on_checkin_hover_help: "כאשר משתמש מפקיד מסמך ב-IBM Content Navigator for Microsoft Office, המסמך מופקד במאגר והעותק המקומי של המסמך נשאר פתוח. כמו כן, לאחר השימוש בפעולת ביטול המשיכה העותק המקומי של המסמך יישאר פתוח. כאשר העותק המקומי פתוח המשתמשים יכולים למשוך את המסמך שוב באופן מיידי כדי לבצע בו שינויים.<br /><br />בחרו באפשרות זו כדי לסגור ולמחוק את העותק המקומי של המסמך באופן אוטומטי לאחר הפקדת מסמך או לאחר שימוש בפעולת ביטול המשיכה.",
		admin_ms_delete_local_on_save: "שמירת מסמך",
		admin_ms_prompt_for_props_on_add: "הצגת הנחיה למשתמשים לציין ערכי תכונות כשהם מוסיפים הודעות דואל למאגר",
		admin_ms_prompt_for_props_on_add_hover_help: "אם לא תבחרו אפשרות זו, לקוח הדפדפן משתמש במיפוי של תכונת Outlook המוגדר עבור המאגר.<br /><br />אם יש תבניות קלט המשויכות לתיקיה שאליה נוספות הודעות הדואל, יתכן שהמשתמש לא יקבל הנחיה לציון תכונות.",
		admin_ms_delete_email_on_add: "מחיקת דואל משרת הדואל כשהדואל נוסף למאגר",
		admin_ms_send_email_as_link_only: "מניעת משלוח מסמכים כצרופות על ידי משתמשים",
		admin_ms_send_email_as_link_only_hover_help: "אם תבחרו אפשרות זו, משתמשים יוכלו לשלוח מסמכים רק רק כקישורים מתוך Outlook.‏ אפשרות זו מבטיחה שרק משתמשים בעלי הרשאות מתאימות במאגר יוכלו להציג מסמכים.",
		admin_ms_enable_prop_mapping_for_add: "מיפוי תכונות Office לתכונות מאגר כאשר משתמשים מוסיפים או מפקידים מסמכים",
		admin_ms_checkout_document_after_add: "משיכת מסמכים אוטומטית לאחר הוספתם למאגר",
		admin_no_default_document_type_filtering: "החזרת כל סוגי המסמכים כברירת מחדל כשמשתמשים מריצים חיפושים",
		admin_no_default_document_type_filtering_hover_help: "בתוך IBM Content Navigator for Microsoft Office,‏ ההתנהגות המחדלית היא שמשתמשים רואים רק את סוג המסמך עבור היישום הנוכחי כשהם מריצים חיפושים. לדוגמה, סוג המסמך Word נבחר כברירת מחדל כשמתבצע חיפוש מתוך Microsoft Word.‏<br/><br/>עם זאת, בחירת אפשרות זו מנקה את תיבות הסימון של סוגי המסמכים, כך שמשתמשים רואים את כל המסמכים המוחזרים על ידי החיפוש. משתמשים יכולים לעקוף הגדרה זו באמצעות בחירת סוג מסמך אחד או יותר לפני הרצת החיפוש.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "ציינו אם למפות את תכונות המסמך המוגדרות עבור Microsoft Office לתכונות המוגדרות במאגר.<br /></br /> <b>חשוב:</b> אם תפעילו מאפיין זה, עליכם להגדיר את תכונות Office עבור כל מאגר בסביבה שלכם. אם לא תמפו את תכונות Office לתכונות המאגר, מאפיין זה לא יפעל.<br /><br />הגדרה זו אינה חלה על Microsoft Outlook.‏",
		admin_ms_checkout_document_after_add_hover_help: "בחרו באפשרות זו כדי להפחית את מספר הצעדים שעל המשתמשים לבצע כדי לעבוד עם מסמכים לאחר שמסמכים אלה נוספו למאגר.<br /></br /><b>עצה:</b> כדי לוודא שהמשתמשים יפקידו את הקבצים בחזרה במאגר, בחרו <b>בקשו ממשתמשים להפקיד מסמכים בעת סגירת יישומי Office</b>.",
		admin_ms_show_details_recently_used: "הצגת פרטים של פריט <b>שנעשה בו שימוש לאחרונה</b>",
		admin_ms_show_details_recently_used_hover_help: "כברירת מחדל, כאשר אתם מציגים את רשימת הפריטים שנעשה בהם שימוש לאחרונה, הפרטים של הפריטים מוסתרים, כך שאפשר להציג יותר פריטים. כאשר בוחרים באפשרות זו, ברשימת הפריטים שנעשה בהם שימוש לאחרונה, מוצגים הפרטים של המסמך הראשון בחלונית הפרטים כברירת מחדל.",
		admin_ms_show_no_permissions_warning: "הציגו אזהרות בעת עריכת תכונות על-ידי המשתמשים או בעת הפקדת מסמך שאין למשתמשים הרשאה להצגת תבנית הקלט שלו",
		admin_ms_show_no_permissions_warning_hover_help: "אם מסמך במאגר נוצר תוך שימוש בתבנית קלט אך אין למשתמש הרשאה להצגת תבנית הקלט של המסמך, תבנית הקלט לא תאוחזר.<br /><br/>לכן, כאשר המשתמש עורך את תכונות המסמך התכונות יוצגו בלי לייעשה שימוש בתבנית הקלט. וכאשר משתמש מפקיד מסמך המסמך יופקד בלי שייעשה שימוש בתבנית הקלט.<br /><br />כברירת מחדל פעולות אלה מתרחשות בלי ליידע את המשתמש על כך שלא נעשה שימוש בתבנית הקלט. אזהרה נרשמת בקובץ היומן בלבד.<br /><br />בחרו אפשרות זו כדי להציג אזהרות שמיידעות את המשתמש באופן מיידי כאשר לא נעשה שימוש בתבנית הקלט.",
		admin_ms_hide_search_actions: "צמצום מקטע של מסנני חיפוש",
		admin_ms_hide_search_actions_hover_help: "כברירת מחדל, משתמשים יכולים להחיל את מסנן הפעולות כדי לציין פעולה, משתמש או קבוצת משתמשים, ולבחור תאריך או טווח תאריכים שבו בוצעה הפעולה. לדוגמה, תוכלו לחפש רק מסמכים שהוספתם בחודש האחרון.<br /><br />אם אין ברצונכם לאפשר למשתמשים להחיל מסנני חיפוש, בחרו באפשרות זו כדי להסתיר את מסנני החיפוש ולהפחית את מספר השדות המוצגים בעת הגדרת קריטריוני בחירה.",
		admin_ms_hide_save_document: "הסתרת השדה <b>שמירה</b> בסרגל הרצועה",
		admin_ms_hide_save_document_hover_help: "באמצעות האפשרות <b>שמירה</b>, משתמשים יכולים לשמור שינויים במסמך במאגר מבלי להפקיד את המסמך.",
		admin_ms_indicate_managed_email_on_add: "ציון אם דואל כבר נוסף למאגר",
		admin_ms_indicate_managed_email_on_add_hover_help: "בחירת אפשרות זו מאפשרת למשתמשים לראות שדואל כבר נמצא במאגר, מה שיכול להקטין את מספר ההוספות של הדואל למאגר.  כשאפשרות זו נבחרת, סיווג צבע חדש בשם IBM ECM נוצר בתוך Microsoft Outlook.‏ כל דואל שנוסף למאגר נוסף אוטומטית לסיווג 'מנוהל בתוך IBM ECM'.‏",
		admin_ms_edit_group_add_command_configuration: "הוספת אפשרויות בקבוצה 'עריכה':",
		admin_ms_edit_group_add_command_configuration_hover_help: "ציינו אילו אפשרויות <b>הוספה</b> יהיו זמינה בקבוצה <b>עריכה</b> בסרגל הרצועה:<ul><li>בחרו <b>הצגת כל האפשרויות</b> כדי להצג את הלחצן 'הוספה' ואת כל פעולות ההוספה הזמינות מקבוצות העריכה.</li><li>בחרו <b>הסתרת כל אפשרויות ההוספה</b> כדי למנוע ממשתמשים להוסיף מסמכים למאגר או לאפשר להם להוסיף מסמכים רק מתוך מרחב צוות.</li><li>בחרו <b>הסתרת הפעולה 'הוספה באמצעות תבנית'</b> כדי לאכוף שיוכים של תבניות קלט ולמנוע ממשתמשים לבחור תבנית קלט שונה.</li><li>בחרו <b>הצגת הפעולה 'הוספה באמצעות תבנית' בלבד</b> כדי לחייב משתמשים להוסיף מסמכים באמצעות תבנית קלט.</li></ul>",
		admin_ms_show_edit_group_add_button: "הצגת כל אפשרויות ההוספה (ברירת מחדל)",
		admin_ms_hide_edit_group_add_button: "הסתרת כל אפשרויות ההוספה",
		admin_ms_hide_add_with_entry_template: "הסתרת הפעולה 'הוספה באמצעות תבנית'",
		admin_ms_managed_in_ecm: "מנוהל בתוך IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "אם משתמשים מציגים קטגוריות בתוך Microsoft Outlook,‏ תווית זו מוצגת עבור דואל שנוסף למאגר IBM Content Manager או IBM FileNet Content Manager.‏",
		admin_ms_managed_in_ibm_ecm_input_invalid: "שם הקטגוריה 'מנוהל בתוך IBM ECM' אינו יכול להכיל פסיק (,) או נקודה-פסיק (;).",
		admin_delete_open_docs_after_close: "מחיקה אוטומטית של מסמכים פתוחים כשמשתמשים סוגרים את המסמכים",
		admin_admin_delete_open_docs_after_close_hover_help: "כשמשתמש פותח מסמך בתוך IBM Content Navigator for Microsoft Office,‏ המסמך מורד למדריך המסמכים של המשתמש או למיקום שצוין בהגדרת מעקב הקבצים עבור שולחן העבודה.<br><br>בחרו אפשרות זו כדי למחוק קבצים שנפתחו אך לא נמשכו כשמשתמשים סוגרים את המסמכים. בחירת אפשרות זו תאפשר לכם:<ul><li>לאכוף עמידה בתנאי מדיניויות IT</li><li>לוודא שמשתמשים עובדים עם גרסאות המסמכים האחרונות</li><li>לצמצם את שטח הדיסק המשמש לאחסון מסמכים</li><ul>",
		admin_ms_custom_command_configuration: "פקודות מותאמות:",
		admin_ms_custom_command_configuration_hover_help: "תוכלו להוסיף עד ארבע פקודות לסרגל הכלים של IBM Content Navigator for Microsoft Office ביישומי Microsoft Office.‏ הפקודות יכולות לשמש לפתיחת כתובות URL.‏ לדוגמה, תוכלו להוסיף פקודה לפתיחת שירות היכול לשמש לחיפוש משתמשים וקבוצות.",
		admin_ms_custom_command_dialog_title: "עריכת פקודה מותאמת",
		admin_ms_custom_command_dialog_intro_text: "תוכלו להגדיר פקודה היכולה לשמש לפתיחת URL מסרגל הכלים של IBM Content Navigator for Microsoft Office ביישומי Microsoft Office.‏",
		admin_ms_custom_command_id: "פקודה ${0}",
		admin_ms_custom_command_available_label: "זמין",
		admin_ms_custom_command_available_hover_help: "אם יש להעביר את ה-URL המוגדר עבור הפקודה למצב לא מקוון לצורך תחזוקה, תוכלו לנקות את יבת הסימון עבור הפקודה כדי שהפקודה לא תוצג בתוך Microsoft Office.‏<br/><br/><b>חשוב: </b> משתמשים חייבים להתנתק משולחן העבודה כדי שהשינויים ישתקפו בתוך IBM Content Navigator for Microsoft Office.‏",
		admin_ms_custom_command_command_id_label: "זיהוי פקודה",
		admin_ms_custom_command_id_label: "זיהוי",
		admin_ms_custom_command_label_label: "תווית",
		admin_ms_custom_command_label_hover_help: "ציינו את התווית שתוצג עבור הפקודה בתוך Microsoft Office.‏",
		admin_ms_custom_command_description_label: "תיאור",
		admin_ms_custom_command_description_hover_help: "ציינו את התיאור שיוצג עבור הפקודה בתוך Microsoft Office.‏",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "ציינו URL מלא לפתיחה מתוך Microsoft Office.‏ ה-URL יכול להיות דף רשת או שירות.",
		admin_ms_custom_command_icon_label: "איקונים",
		admin_ms_custom_command_icon_hover_help: "ציינו את שם הקובץ של האיקון להצגה, לדוגמה CommandIcon.png.‏<br/><br/><b>חשוב: </b> עליכם להוסיף את קובץ האיקון לתת-מדריך Plugins של מדריך ההתקנה של  IBM Content Navigator for Microsoft Office בכל מחשב לקוח.<br/><br/>אם קובץ האיקון לא נמצא במדריך Plugins,‏ או אם לא תציינו איקון, יוצג האיקון המחדלי customButtonIcon_38.gif.‏",
		admin_ms_custom_command_group_name: "תווית קבוצה:",
		admin_ms_custom_command_group_name_hover_help: "תוכלו לציין תווית קבוצה שתוצג מתחת לפקודות מותאמות בסרגל הרצועה.<br/><br/>אם לא תציינו תווית, תווית הקבוצה היא <b>פקודות מותאמות</b>.",
		admin_ms_ribbon_tab_label: "תווית הלשונית IBM ECM:‏",
		admin_ms_ribbon_tab_hover_help: "ציינו את השם שיוצג עבור לשונית IBM Content Navigator for Microsoft Office בסרגל הרצועה של Microsoft Office.‏ אם לא תציינו שם, שם התווית יהיה \“IBM ECM\".‏",
		admin_ms_close_task_pane_on_open: "סגירת חלונית המשימות כשמשתמשים פותחים מסמכים",
		admin_ms_close_task_pane_on_open_hover_help: "בחרו אפשרות זו אם ברצונכם להגדיל את השטח שבו משתמשים יכולים לראות מסמכים בתוך Microsoft Office.‏<br/><br/>משתמשי Microsoft Office 2010:‏ כדי להבטיח שחלונית המשימות תיסגר עבור כל המסמכים, הפעילו את מצב MDI (ממשק מסמכים מרובים) בלחיצה על <b>אפשרויות</b> &gt; <b>מתקדם</b> ונקו את האפשרות <b>הצגת כל החלונות בסרגל המשימות</b>.",
		admin_ms_open_document_options: "אפשרויות פתיחת מסמך:",
		admin_ms_delete_local_file_options: "אפשרויות מחיקת קובץ מקומי:",
		admin_ms_add_and_checkin_options: "אפשרות הוספה והפקדה:",
		admin_ms_search_options: "אפשרויות חיפוש:",
		admin_ms_display_options: "אפשרויות תצוגה:",
		admin_ms_bidirection_enable_label: "הפעלת תמיכה בתמליל דו-כיווני",
		admin_ms_bidirection_enable_hover_help: "בחרו אפשרות זו כדי לאפשר למשתמשים להקליד או להציג תמליל בתוך IBM Content Navigator for Microsoft Office בכיוון שאינו שמאל-לימין.",
		admin_ms_text_direction_label: "כיוון תמליל בסיסי עבור תוכן:",
		admin_ms_text_direction_hover_help: "ציינו את הכיוון שבו תמליל מוזן בשדות קלט בתוך IBM Content Navigator for Microsoft Office.‏ הגדרה זו גם קובעת איך מוצגים פריטים, כגון שמות תיקיות או ערכי תכונות.",
		admin_ms_control_threshold_label: "מספר הפריטים המינימלי לשם look ahead:",
		admin_ms_control_threshold_hover_help: "כברירת מחדל, look ahead מופעל כאשר מספר הפריטים גדול או שווה 50, עבור חיפוש או הגדרת הגדרות בעלות ערכים מוגדרים מראש ברשימה נפתחת. ניתן לשנות את הערך המינימלי.",

		admin_ms_default_email_class: "המחלקה לשימוש בהוספת דואל",
		admin_ms_default_email_class_hover_help: "כל דואל הנוסף למאגר מתוך Microsoft Outlook יתווסף למחלקה שתציינו. משתמשים אינם יכולים לשנות את המחלקה.",
		admin_ms_default_folder_class: "המחלקה לשימוש ביצירת תיקיות",
		admin_ms_default_folder_class_hover_help: "כל תיקיה הנוצרת במאגר מתוך יישום Microsoft Office תתווסף למחלקה שתציינו.  משתמשים אינם יכולים לשנות את המחלקה.",
		admin_ms_default_folder_warn_title: "אינכם יכולים להשתמש במחלקה ${0} בתור המחלקה לשימוש בזמן יצירת תיקיות.",
		admin_ms_default_folder_warn_name_prop_invalid: "תכונת השם של המחלקה אינה מחרוזת, ושם התיקיה חייב להיות מחרוזת.<br />בחרו מחלקה שונה לשימוש בזמן יצירת תיקיות או פנו למנהלן IBM Content Manager כדי לשנות את תכונת השם של המחלקה למחרוזת.",
		admin_ms_default_folder_warn_req_props: "המחלקה כוללת תכונות דרושות שאין להן ערכים. עם זאת, משתמשים אינם יכולים לציין ערכים עבור התכונות הדרושות כשהם יוצרים תיקיות מתוך IBM Content Navigator for Microsoft Office.‏<br />בחרו מחלקה שונה לשימוש בזמן יצירת תיקיות או פנו למנהלן IBM Content Manager כדי להגדיר את התכונות הדרושות כאופציונליות או למלא ערכים בתכונות הדרושות מראש.",
		admin_ms_delimiter_for_office_properties: "תוחם עבור שרשרת הגדרות רבת ערכים",
		admin_ms_delimiter_for_office_properties_hover_help: "יש לציין את המאפיין אשר ישמש כתוחם שרשרת ההגדרות אשר אתם ממפים כשרשרת הגדרות רבת ערכים. כברירת מחדל, ניתן לשייך קבוצת ערכים לשרשרת הגדרות רבת ערכיםעל ידי שימוש באתנח(;) כתוחם המפריד בין הערכים. אבל אם אחד מערכי השרשרת כוללים אתנח, לא ניתן יהיה להוסיפו אלא אם התוחם מומר לתו אחר. לדוגמה, ניתן לשנות את התוחם לפסיק (,)",
		admin_ms_outlookPropertyRemembrance : "זכרו את ההגדרות בהוספת הודעות וצרופות",
		admin_ms_outlookPropertyRemembrance_hover_help : "ערכי התכונה, המיקום, המחלקה, והאבטחה המוקצים להודעות והקבצים מצורפים נשמרים בזיכרון וישמשו כהגדרות ברירת מחדל בהוספת פריטים עתידיים.",

		admin_file_type_name_hover_help: "עזרה מרחפת עבור 'שם'",
		admin_file_type_description_hover_help: "עזרה מרחפת עבור 'תיאור'",
		admin_file_type_dialog_title: "עריכת מסנן סוגי קבצים",
		admin_new_file_type_dialog_title: "מסנן סוגי קבצים חדש",
		admin_mobile_feature_dialog_title: "מאפיין",
		admin_mobile_feature_dialog_new_title: "מאפיין חדש",
		admin_file_type_instructions: "יצירת מסנן שמשתמשים יכולים להשתמש בו לצמצום רשימת תוצאות החיפוש שלכם. תוכלו למפות סוגי MIME מרובים למסנן.",
		admin_file_type_filter_place_holder: "סינון סוגי MIME",
		admin_new_button_label: "חדש",
		admin_edit_button_label: "עריכה",
		admin_delete_button_label: "מחיקה",
		admin_copy_button_label: "העתקה",
		admin_verify_button_label: "אימות",
		admin_availabe_filters_label: "מסננים זמינים",
		admin_selected_filters_label: "מסננים שנבחרו",

		admin_mobile_access: "גישת יישומים ניידים:",
		admin_mobile_access_hover_help: "אם ברצונכם לעבוד עם IBM Content Navigator מהתקן נייד, מומלץ שתאפשרו למשתמשים לגשת לשולחן עבודה זה מיישומים ניידים.<br /><br />אם תשביתו גישה לשולחן עבודה זה מיישומים נידיים, המשתמשים עדיין יוכלו לגשת ללקוח הדפדפן מדפדפנים בהתקנים הניידים שלהם. עם זאת, לקוח הדפדפן אינו מיועד לגישה מהתקנים ניידים.",

		admin_mobile_access_allow_label: "לאפשר למשתמשים לבצע:",
		admin_mobile_allow_add_photos: "הוספת תצלומים מהמצלמה ומספריית התצלומים",
		admin_mobile_allow_add_docs: "הוספת מסמכים ויצירת תיקיות במאגר",
		admin_mobile_allow_open_docs: "פתיחת מסמכים ביישומים אחרים",
		admin_mobile_allow_add_docs_hover_help: "משתמשים יכולים ליצור תיקיות או להוסיף מסמכים מיישומים ניידים אחרים, כגון מסמך המצורף לדואל.",
		admin_mobile_allow_open_docs_hover_help: "למשתמשים מוצגת הנחיה לבחור את היישומים שישמשו להצגת המסמך שנבחר. אם זמין רק יישום אחד, נעשה שימוש ביישום זה.",
		admin_mobile_features: "מאפיינים:",
		admin_mobile_features_hover_help: "ציינו אילו מאפייינים של שולחן עבודה זה יוצגו ביישום הנייד של IBM Content Navigator.‏",
		admin_mobile_new_feature_button_label: "מאפיין חדש",
		admin_mobile_move_up_button_label: "הזזה למעלה",
		admin_mobile_move_down_button_label: "הזזה למטה",
		admin_desktop_mobile_instructions: "הוראות להגדרות התקנים ניידים",
		admin_desktop_max_number_of_docs_to_add: "מספר מרבי של מסמכים להוספה:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "ציינו את מספר המסמכים המרבי שמשתמשים יכולים להוסיף למאגר בבת אחת. ברירת המחדל היא 50.‏ עם זאת, תוכלו להגדיל את המספר המרבי עד 300.‏",
		admin_desktop_max_number_of_docs_to_modify: "מספר מרבי של פריטים לשינוי:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "ציינו את מספר הפריטים המרבי שמשתמשים יכולים לשנות בבת אחת. ברירת המחדל היא 50.‏ עם זאת, תוכלו להגדיל את המספר המרבי עד 300.‏",
		admin_desktop_max_conversion_size: "גודל נתונים מרבי עבור המרות PDF ‏(מ''ב):",
		admin_desktop_max_conversion_size_hover_help: "<b>מגבלה: </b> הגדרה זו אינו נתמכת במערכות IBM Content Manager OnDemand.‏<br/><br/>ציינו את כמות הנתונים המרבים שניתן להמיר למבנה PDF.‏ מגבלה זו מוחלת כשמשתמשים מורידים פריטים כקובצי PDF או שולחים פריטים בדואל כקובצי PDF.‏<br /><br />אם לא ניתן לברר את הגודל של כל מסמך, המסמכים עדיין מומרים למבנה PDF.‏<br/><br/>המגבלה המחדלית היא 200 MB.‏ הגדרת מגבלה גדולה מ-200 MB עלולה להשפיע על הביצועים.",
		admin_desktop_timeProperties: "חותמת זמן:",
		admin_desktop_time_properties_hover_help: "<b>משתמשי IBM FileNet P8 בלבד:</b> הגדרה זו חלה על תכונות מותאמות ואינה חלה על תכונות המערכת. לדוגמה, התכונה 'שונה על ידי' עדיין תציג את חלק השעה של חותמת הזמן אם תחבור <b>הצגת חלק התאריך של חותמת הזמן בלבד</b>.<br/><br/>הגדרה זו אינה משנה את חותמת הזמן במאגר.",
		admin_desktop_disable_time_stamp: "הצגת חותמת הזמן המלאה",
		admin_desktop_enable_time_stamp: "הצגת חלק התאריך של חותמת הזמן בלבד",
		admin_desktop_timezone: "אזור זמן:",
		admin_desktop_timezone_localuser: "הצגת אזור הזמן המקומי של המשתמש",
		admin_desktop_timezone_alluser: "הצגת אותו אזור זמן עבור כל המשתמשים",
		admin_desktop_timezone_hover_help: "תוכלו לציין אם משתמשים יוכלו לראות חותמת זמן המבוססת על אזור הזמן המקומי שלהם, או אם כל המשתמשים יראו אותה חותמת זמן.<br/><br/>הגדרה זו אינה משנה את חותמת הזמן במאגר. עם זאת, ההגדרה שתבחרו קובעת את אזור הזמן שישמש ליצירת חותמת זמן במאגר כשמשתמשים מוסיפים או משנים פרטים.",
		admin_desktop_mobile_feature_display_label: "הצגה",
		admin_desktop_mobile_feature_icon_file_label: "קובץ איקונים",
		admin_mobile_feature_dialog_icon_file_label: "קובץ איקונים:",
		admin_mobile_feature_dialog_url_label: "URL:‏",
		admin_desktop_mobile_feature_name_label: "שם",
		admin_desktop_mobile_select_feature_label: "בחירת מאפיין",
		admin_desktop_mobile_feature_icon_label: "איקון תכונה",
		admin_desktop_share_admin_none: "מנהלן לא מוגדר.",
		admin_desktop_share_admin_edit_label: "הגדרת מנהלן...",
		admin_browse_icon: "איקון עיון",
		admin_search_icon: "איקון חיפוש",
		admin_favorites_icon: "איקון מועדפים",
		admin_casesearch_icon: "איקון מקרה",
		admin_datacap_icon: "איקון Datacap",
		admin_system_defined: "מוגדר מערכת",
		admin_icon_file_placeholder_text: "מיקום קובץ (לדוגמה http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://‎",
		admin_folder_root: "יסוד",
		admin_folder_default: "ברירת מחדל",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "סרגלי כלים",
		admin_menu_context_menus: "תפריטי הקשר",
		admin_menu_office_toolbars: "פקודות בסרגל הרצועה של Microsoft Office",
		admin_menu_office_menus: "תפריטי הקשר של Microsoft Office",

		admin_file_name_label: "שם קובץ:",
		admin_exportconfiguration_security_label: "הכללת משתמשים וקבוצות המורשים להשתמש בשולחן עבודה זה",
		admin_exportconfiguration_instruction: "תוכלו ליצא את שולחנות העבודה שלכם, כולל תצורות המאגר ותצורות התוספים המשויכות לשולחנות העבודה שנבחרו, לקובץ שאפשר ליבא למופע אחר של IBM Content Navigator.‏",
		admin_exportconfiguration_dialog_label: "יצוא שולחן עבודה",
		admin_exportconfiguration_button_label: "ייצוא",
		admin_dialog_select_all: "בחירת הכל",
		admin_dialog_deselect_all: "ניקוי הכל",

		admin_importconfiguration_instruction: "הפריטים בקובץ התצורה שנבחר ייובאו למערכת זו. עם זאת, אם פריט עם אותו זיהוי כבר קיים במערכת, תצטרכו להחליט אם לשמור או לדרוס את הפריט.",
		admin_importconfiguration_dialog_label: "יבוא שולחן עבודה",
		admin_importconfiguration_reason_dialog_label: "ייבוא סיבות עריכה",
		admin_importconfiguration_button_label: "יבוא",
		admin_to_be_imported: "פריט תצורה ליבוא",
		admin_on_target_system: "פריט קיים במערכת היעד",
		admin_import_short_warning_message: "הפריטים שלהלן כבר קיימים במערכת. בחרו את הפריטים שברצונכם להחליף במערכת זו:",
		admin_import_warning_message: "לפריטי התצורה שלהלן יש אותם זיהויים שיש לפריטים הקיימים במערכת היעד. בחרו רק פריטים שברצונכם ליבא ולדרוס במערכת היעד.<br /><br />אם אינכם רוצים לדרוס פריט תצורה, צרו עותק של הפריט במופע שממנו ייצאתם את שולחן העבודה, תנו לו זיהוי שונה ושייכו אותו לשולחן העבודה. יצאו את שולחן העבודה שוב, ויבאו את שולחן העבודה במופע זה.",
		admin_choose_file_to_import_label: "בחירת קובץ ליבוא:",
		admin_download_imported_log: "דוח הורדות",
		admin_desktop_import_summary: "סיכום יבוא שולחן עבודה",
		admin_reason_import_summary: "סיכום ייבוא סיבות עריכה",
		admin_rba_import_summary: "סיכום יבוא תפקיד ניהול",
		admin_import_open_tabs_checking: "כדי שתוכלו ליבא שולחנות עבודה, עליכם לסגור את כל הלשוניות מלבד הלשונית <bold>שולחנות עבודה</bold> בכלי המנהלה.",
		admin_import_no_conflict: "ייבאו הפריטים שלהלן:",
		admin_desktop_invalid: "שולחן עבודה לא חוקי",
		admin_desktop_warning: "שולחן העבודה נשמר עם אזהרות.",
		admin_repos_warning: "המאגר נשמר עם אזהרות.",
		admin_config_type_icon: "איקון סוג פריט תצורה",

		admin_approval_workflow: "תזרים עבודה של אישור",
		admin_approval_workflow_hover: "מאפשר למשתמשים להפעיל תזרים עבודה לאישור שהוגדר מראש. תוכלו להשבית את תזרים-העבודה של פעולת האישור כדי לאפשר למשתמש להפעיל תזרים-עבודה לאישור מותאם אישית שהוגדר באמצעות מינוי. ברירת המחדל היא שתזרים-העבודה לאישור הוא מופעל.<br><br><b>חשוב:</b> אם תזרים העבודה של אישור מופעל, עליכם לוודא שלפחות הגדרה אחת של תזרים עבודה שהוגדרו מראש, או שתיהן (ICNParallelDocumentApproval.pep ו-ICNSequentialDocumentApproval.pep) יתווספו למאגר ויועברו אל מנוע תהליך התכנים.",

		admin_cannot_add_desktop_members_error: "אינכם יכולים לציין את המשתמשים והקבוצות שיש להם גישה לשולחן העבודה.",
		admin_cannot_add_desktop_members_error_explanation: "אין לכם הרשאות מתאימות לאחזור פרטי משתמשים וקבוצות.",
		admin_cannot_add_desktop_members_error_userResponse: "התחברו עם שם משתמש שונה או בקשו ממנהלן המערכת של IBM Content Manager לתת לכם את ההרשאה UserACLOwner,‏ הדרושה לאחזור פרטי משתמשים וקבוצות.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "אינכם יכולים לבחור משתמשים וקבוות.",
		admin_cannot_select_users_groups_error_explanation: "אין לכם הרשאות מתאימות לאחזור פרטי משתמשים וקבוצות.",
		admin_cannot_select_users_groups_error_userResponse: "התחברו עם שם משתמש שונה או בקשו ממנהלן המערכת של IBM Content Manager לתת לכם את ההרשאה UserACLOwner,‏ הדרושה לאחזור פרטי משתמשים וקבוצות.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "לקוח הOAuth2 לא אותר.",
		oauth_client_not_found_error_explanation: "זיהוי לקוח הOAuth2 ${0} לא אותר.",
		oauth_client_not_found_error_userResponse: "יש ליצור קשר עם מנהלן המערכת ולעדכן אותו שזיהוי לקוח הOAuth2 לא אותר.",
		oauth_client_not_found_error_adminResponse: "יש לבחון את הגדרות המאגר ולוודא שזיהוי לקוח הOAuth2 שהוא מכיל הוא נכון",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "ההתחברות למאגר נכשלה.",
		oauth_login_failed_error_explanation: "נסיון להתחבר למאגר ${0} נכשל.",
		oauth_login_failed_error_userResponse: "יש לוודא שזיהוי המשתמש והססמה נכונים ולנסות להתחבר בשנית.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "חלה שגיאה במהלך נסיון התחברות ל${0}.",
		oauth_error_return_error_explanation: "ה${0} נסיון לאישור נכשל.",
		oauth_error_return_error_userResponse: "יש ליצור קשר עם מנהלן המערכת ולתת לו את המידע הבא:ה${0}נסיון לאישור נכשל והציף את הודעת השגיאה הבאה: <br>${1}<br><b>שגיאה:</b> ${2}.<br><b>תיאור:</b> ${3}.",
		oauth_error_return_error_adminResponse: "מידע נוסף על השגיאה נמצא בקובצי היומן של שרת היישומים.  למידע נוסף על קובצי היומן, ראו &quot;IBM Content Navigator קבצי יומן&quot;בIBM Knowledge Center. בעזרת מידע לגבי ${0} הנסיון לאישור, נסו לתקן את הבעיה לוודא שOAuth2 מופעל.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "יישום יעד OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "שגיאה",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "הודעת שגיאה לא מזוהה של OAuth.",

		delete_share_permission_error: "השיתוף לא נמחק.",
		delete_share_permission_error_explanation: "אין ברשותכם את הרשות הנדרשת לשם מחיקת שיתוף.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "לא ניתן לשתף פריט זה.",
		class_not_support_share_error_explanation: "המחלקה ${0} לא הוגדרה לתמוך בשיתוף.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "לא ניתן לשתף פריט זה.",
		rbr_not_support_share_error_explanation: "תוכן רגיש נוסף לפריט.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "המכשיר ממנו מנסה המשתמש להתחבר לא מורשה כניסה לחשבונות משתמשים.",
		box_oauth_error_invalid_request: "הבקשה חסרה פרמטר נדרש, היא מכילה ערך פרמטר לא תקף, היא מכילה את אותו פרמטר יותר מפעם אחת, היא משובשת באופן אחר.",
		box_oauth_error_unsupported_response_type: "שרת האישורים אינו תומך בקבלת קוד אישור בדרך זו.  יש לבדוק את ערך קוד הפרמטר בבקשתכם.",
		box_oauth_error_access_denied: "בעל המשאב או שרת האישורים סרב לבקשה.",
		box_oauth_error_temporarily_unavailable: "המכשיר שלכם מוגבל מבחינת קצב, עליכם להפחית את קצב בקשות האישור או להמתין קצת.",
		box_oauth_error_unknown: "הודעת שגיאת Box לא מזוהה.",

		admin_default_search_type: "סוג חיפוש בברירת מחדל",
		admin_default_search_type_hover: "ציינו איזו אפשרות תיבחר כברירת מחדל בשדה <b>חיפוש</b> בתפריט <b>אפשרויות חיפוש</b>.",
		admin_default_search_type_documents: "מסמכים",
		admin_default_search_type_folders: "תיקיות",
		admin_default_search_type_folders_and_documents: "מסמכים ותיקיות",

		admin_restricted_search_type: "יש לאפשר חיפוש ב",
		admin_restricted_search_type_hover: "כברירת מחדל, משתמשים יכולים לחפש במסמכים וגם בתיקיות. אם אתם רוצים להסתיר את ה'חיפוש' כבחירה ולהגביל חיפושים למסמכים בלבד בחרו ב'מסמכים' ובטלו את הבחירה ב'תיקיות'.</br>,</br> If you allow search on both documents and folders, select the default option to display when the search pane is opened.",
		admin_restricted_search_type_documents: "מסמכים",
		admin_restricted_search_type_folders: "תיקיות",
		admin_restricted_search_type_folders_and_documents: "מסמכים ותיקיות",

		admin_default_search_version: "גרסת חיפוש בברירת מחדל",
		admin_default_search_version_hover: "ציינו איזו אפשרות תיבחר כברירת מחדל בשדה <b>גרסה</b> בתפריט <b>אפשרויות חיפוש</b>.",

		admin_all_classes_search: "חיפוש בכל המחלקות",
		admin_all_classes_search_hover: "יש לציין האם מותר למשתמשים לחפש בכל המחלקות, ואם כן מה צריך להכלל בחיפוש המסמכים.",
		admin_all_classes_search_removed_hover: "אפשרויות החיפוש בכל המחלקות אינן זמינות כיוון שפרמטר ההקשר allPseudoClassHidden parameter בNavigator application web.xml קבוע על אמת.",
		admin_all_classes_search_hide: "יש להסיר את הבחירה בחיפוש בכל המחלקות",
		admin_all_classes_search_documents_only_documents: "חיפוש במסמכים כולל מסמכים בלבד, חיפושים שמורים ותבניות קלט",
		admin_all_classes_search_documents_non_folders: "חיפוש במסמכים כולל את כל הפריטים שאינם תיקיות",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "תצוגת עץ:",
		admin_feature_config_tree_view_hoverhelp: "ציינו אם משתמשים יוכלו לגשת לרשימת התיקיות במאגר דרך החלונית 'עיון'. אם תסתירו את החלונית 'עיון', משתמשים יצטרכו להשתמש ברשימת התוכן כדי לנווט לתיקיות במאגר.",
		admin_feature_config_selected_repositories_label: "מאגרים:",
		admin_feature_config_selected_repositories_hoverhelp: "בחרו את המאגרים שמשתמשים יוכלו לגשת אליהם במאפיין זה.",
		admin_feature_config_selected_repositories_select_state_hdr: "בחירת מאגר",
		admin_feature_config_selected_repositories_name_hdr: "שם מאגר",
		admin_feature_config_selected_repositories_show_hdr: "הצגה",
		admin_feature_config_invalid_icon_title: "במאפיין חסרות כמה הגדרות דרושות",
		admin_feature_config_view_select_hdr: "בחירת תצוגה",
		admin_feature_config_view_hdr: "הצגה",
		admin_feature_config_view: "הצגה",
		admin_feature_config_views: "תצוגות:",
		admin_feature_config_views_hoverhelp: "ציינו את התצוגות שמשתמשים יוכלו להחיל על רשימת התוכן. התצוגות מוצגות בסדר שבו הן רשומות. התצוגה הנבחרת הראשונה היא התצוגה המחדלית עבור המאפיין.<br><br><b>חשוב:</b> אם תפעילו את תצוגת הצלולואיד, עליכם להגדיר את מציג המרות ה-HTML כדי לראות תצוגות מקדימות של מסמכים.",

		admin_custom_dialog_name: "שם:",
		admin_custom_dialog_value: "ערך:",
		admin_custom_setting_name_hover: "ציינו את השם של הגדרת Daeja ViewONE שתתווסף לתצורה שלכם. עיינו בתיעוד Daeja ViewONE כדי לראות מידע נוסף על הגדרות תצורה.",
		admin_custom_setting_value_hover: "ציינו את הערך שישמש עבור הגדרת התצורה של  Daeja ViewONE.‏ עיינו בתיעוד Daeja ViewONE כדי לראות מידע נוסף על ערכים חוקיים עבור הגדרות תצורה.",

		entry_template_name_required_message: "שדה השם עבור 'הגדרות תבנית קלט' דרוש.",
		entry_template_name_invalid_message: "שדה השם עבור 'הגדרות תבנית קלט' אינו יכול לכלול את התווים האלה:  * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "כשהאפשרות 'משתמשים וקבוצות מסוימים' נבחרת עבור השדה 'שיתוף עם' בהגדרות תבנית הקלט, עליכם לציין לפחות משתמש אחד או קבוצה אחת.",
		entry_template_no_permission_to_save_to_teamspace_message: "אין לכם הרשאה להוסיף תבניות קלט למרחב הצוות (${0}) שנבחר 'שמירה בתוך' בהגדרות תבנית הקלט.",
		entry_template_save_in_destination_required_message: "עליכם לציין מיקום 'שמירה בתוך' מחדלי בחלק <b>הגדרת מיקום האחסון של הפריט</b>.",
		entry_template_save_in_destination_must_select_folder: "אם תסתירו את השדה <b>שמירה בתוך</b> ותדרשו ממשתמשים להוסיף פריטים חדשים לתיקיה, עליכם לבחור תיקיה בחלק <b>מיקום שמירה מחדלי</b> בחלק <b>הגדרת מיקום האחסון של הפריט</b>.",
		entry_template_what_to_save_required_message: "בחרו לפחות אפשרות אחד עבור 'מה ברצונכם לשמור' במסך 'הגדרת אפשרויות'.",
		entry_template_custom_workflow_empty_message: "אם תבחרו <b>תזרים-עבודה מותאם...</b>, עליכם לחפש ולבחור את תשרים-העבודה לשימוש.",

		entry_template_new: "תבנית קלט חדשה",
		entry_template_name_hover: "שם תבנית הקלט אינו יכול לכלול את התווים האלה: * \\ / : ? \" < > |",
		entry_template_name_invalid: "שם תבנית הקלט אינו יכול לכלול רווחים או את התווים האלה:  * \\ / : ? \" < > |",
		entry_template_description_hover: "ספקו תיאור שיאפשר למשתמשים להבדיל בין תבנית קלט זו לתבניות קלט אחרות.",
		entry_tempalte_save_in_hover: "ציינו היכן תישמר תבנית הקלט.<br><br><b>מגבלה:</b> אם תשמרו תבנית קלט במרחב צוות, תוכלו להשתמש בתבנית הקלט רק בתוך מרחב הצוות.",
		entry_template_inherit_hover: "אם תבחרו אפשרות זו, הגדרות האבטחה של תיקיית האב נוספות לרשימת המשתמשים והקבוצות שאתם תבנית הקלט משותפת.",
		entry_template_builder_aria_label: "בונה תבניות הקלט",
		entry_template_builder_layout_aria_label: "בונה תכונות תבניות הקלט",

		entry_template_settings_document: "הגדרת תבנית הקלט",
		entry_template_settings_folder: "הגדרת המיקום לאחסון פריטים",
		entry_template_settings_folder_intro: "ציינו היכן יאוחסנו הפריטים הנוספים באמצעות תבנית קלט זו.",
		entry_template_settings_properties: "הגדרת תכונות הפריט",
		entry_template_settings_properties_intro: "תוכלו לציין ערכים מחדליים או מוגדרים מראש עבור הפריטים הנוספים באמצעות תבנית קלט זו. כמו כן, תוכלו לשנות את מתכונת התכונות כדי לקבוע את התכונות שיוצגו והסדר שבו יוצגו.",
		entry_template_settings_workflow: "הגדרת תזרים-עבודה עבור הפריט",
		entty_template_settings_workflow_intro: "תוכלו לציין אם תזרים-עבודה ישוגר כאשר פריטים נוספים באמצעות תבנית קלט זו.",
		entry_template_settings_security: "הגדרת אבטחת הפריט",
		entry_template_settings_security_intro: "תוכלו לציין אבטחה מחדלית  או מוגדרת מראש עבור הפריטים הנוספים באמצעות תבנית קלט זו. יתכן שמשתמשים עם הרשאות מתאימות יוכלו לשנות את האבטחה של הפריט לאחר שהוא נוסף.",
		entry_template_settings_options: "הגדרת אפשרויות עבור הפריט",
		entry_template_xt_warning: "שמירת שינויים בתבנית קלט זו תמיר אותה מתבנית קלט של IBM Workplace XT לתבנית קלט של IBM Content Navigator.‏ IBM Workplace XT אינו תומך בתבניות קלט של IBM Content Navigator.‏",

		entry_template_properties_edit_layout: "עריכת מתכונת...‏",
		entry_template_properties_read_only: "קריאה בלבד",
		entry_template_properties_hidden: "מוסתר",

		entry_template_destination_show: "הצגת השדה <b>שמירה בתוך</b>",
		entry_template_destination_show_hover: "אם אתם מציגים את השדה <b>שמירה בתוך</b>, משתמשים יוכלו לשנות את המיקום שבו מאוחסנים פריטים.",
		entry_template_destination_hide: "הסתרת השדה <b>שמירה בתוך</b>",
		entry_template_destination_hide_hover: "אם אתם מסתירים את השדה <b>שמירה בתוך</b>, משתמשים לא יוכלו לשנות את המיקום שבו מאוחסנים פריטים.",
		entry_template_folder_save_in_default: "מיקום מחדלי של <b>שמירה בתוך</b>:",
		entry_template_folder_save_in_default_hover: "ציינו את המיקום המחדלי שבו פריטים נוספים באמצעות תבנית קלט זו.<br><br>המיקום המחדלי שתבחרו כופה הגבלות על התנהגות זמן-הריצה של תבנית הקלט:<ul><li>משתמשים אינם יכולים לבחור מאגר שונה.</li><li>אם המיקום המחדלי הוא מרחב צוות, משתמשים אינם יכולים לבחור מרחב צוות שונה.</li></ul>עם זאת, אם משתמשים ישייכו תבנית קלט זו לתיקיה, הם יוכלו לעקוף את מיקום האחסון המוגדר עבור תבנית קלט זו.",
		entry_template_folder_restrict_choice: "לחייב משתמשים להוסיף פריטים למיקום המחדלי או לתיקיית בן של המיקום המחדלי",
		entry_template_folder_file_in_required: "לחייב משתמשים להוסיף פריטים חדשים לתיקיה",
		entry_template_folder_file_in_required_hover: "אם לא תבחרו אפשרות זו, משתמשים יוכלו להוסיף מסמכים לתיקיית היסוד של המאגר.<br><br><b>מגבלה:</b> יתכן שתצורת המאגר תחייב משתמשים לבחור תיקיה.",

		entry_template_document_type_show: "הצגת השדה <b>מה ברצונכם לשמור?</b>",
		entry_template_document_type_show_hover: "אם תציגו את השדה <b>מה ברצונכם לשמור?</b>, הפריטים שתבחרו יוצגו כאפשרויות בשדה <b>מה ברצונכם לשמור</b>.",
		entry_template_document_type_hide: "הסתרת השדה <b>מה ברצונכם לשמור?</b>",
		entry_template_document_type_hide_hover: "אם תסתירו את השדה <b>מה ברצונכם לשמור?</b>, תמיד ייעשה שימוש בסוג המסמך שתבחרו כשמשתמשים יוסיפו מסמכים באמצעות תבנית קלט זו.",
		entry_template_document_type: "אפשר להשתמש בתבנית קלט זו להוספת הפריטים שלהלן:",
		entry_template_document_type_hover: "אם תציגו את השדה <b>מה ברצונכם לשמור?</b>, הפריטים שתבחרו יוצגו כאפשרויות בשדה <b>מה ברצונכם לשמור</b>.<br><br>אם תסתירו את השדה <b>מה ברצונכם לשמור?</b>, תמיד ייעשה שימוש בסוג המסמך שתבחרו כשמשתמשים יוסיפו מסמכים באמצעות תבנית קלט זו.",

		entry_template_misc: "אפשרויות נוספות:",
		entry_template_auto_classify_show: "סיווג אוטומטי של תוכן המסמך",
		entry_template_auto_classify_show_hover: "כשמסמך מסווג על ידי FileNet Content Manager,‏ תוכן המסמך נבדק כדי לברר את המחלקה וערכי התכונות המתאימים עבור המסמך.<br><br>פנו למנהלן כדי לברר אם סיווג תוכן מופעל עבור Content Platform Engine.‏<br><br>אם תפעילו אפשרות זו, יתכן שהמחלקה והתכונות של המסמך ישתנו אחרי שהמשתמש יוסיף את המסמך למאגר.",
		entry_template_allow_duplicate_file_names: "לאפשר מסמכים עם שמות קבצים כפולים",
		entry_template_allow_duplicate_file_names_hover: "כברירת מחדל, תוכלו להוסיף מסמכים באותו שם לתיקיה של בתוך FileNet Content Manager.‏ תוכלו לנקות אפשרות זו כדי שלכל קובץ במיקום האחסון שנבחר יהיה שם ייחודי.",
		entry_template_allow_compound_documents: "לאפשר למסמך זה להיות אב של מסמך מרוכב.",
		entry_template_version_show: "הצגת אפשרויות גרסה עבור הוספה והפקדה",
		entry_template_version_hide: "הסתרת אפשרויות גרסה עבור הוספה והפקדה",
		entry_template_version_to_add_as: "גרסה מחדלית להוספה:",
		entry_template_version_default: "אפשרות גרסה מחדלית:",
		entry_template_version_default_checked: "גרסה ראשית",
		entry_template_version_default_unchecked: "גרסה משנית",
		entry_template_version_display: "גרסת מסמך:",
		entry_template_version_display_show: "הצגה",
		entry_template_version_display_hide: "הסתרה",
		entry_template_version_default_add: "גרסה מחדלית להוספה:",

		entry_template_checkin_version_show: "הצגת אפשרויות גרסה עבור הפקדה",
		entry_template_checkin_version_hide: "הסתרת אפשרויות גרסה עבור הפקדה",

		entry_template_checkin_version_message_no_versions: "מדיניות הגרסאות של המחלקה שנבחרה מונעת ממשתמשים להפקיד גרסה חדשה של המסמך.",
		entry_template_checkin_version_message_always_version: "מדיניות הגרסאות של המחלקה שנבחרה מונעת ממשתמשים להחליף את הגרסה הנוכחית של המסמך.",

		entry_template_applied: "שימוש בתבנית קלט זה כאשר משתמשים מבצעים:",
		entry_template_applied_add: "הוספת מסמכים (דרוש)",
		entry_template_applied_add_folder: "יצירת תיקיות (דרוש)",
		entry_template_applied_checkin: "הפקדה",
		entry_template_applied_properties_group: "הצגה או עריכה של תכונות:",
		entry_template_applied_properties: "בחלון התכונות",
		entry_template_applied_viewer: "במציג היישומון",
		entry_template_applied_docinfo: "בחלונית הפרטים של המסמך",
		entry_template_applied_no_class_support: "אפשר להשתמש בתבנית קלט זו להוספת פריטים אך לא ניתן להשתמש בה להפקדת מסמכים או להצגה או עריכה של תכונות. יש לשנות את המחלקה שנבחרה כדי לתמוך במצבים אלה. אם עליכם להשתמש בתבנית הקלט במצבים אלה, בקשו מהמנהלן להשתמש בכלי המנהלה ולשנות את המחלקה כדי שתוכלו לאחסן זיהויי תבניות קלט.",
		entry_template_applied_no_child_component_support: "למחלקה שנבחרה יש רכיבים בנים ומוגדרת מתכונת תכונות. מתכונות תכונות אינן תומכות ברכיבים בנים. הרכיבים הבנים לא יוצגו למשתמש.",
		entry_template_applied_child_component: "למחלקה שנבחרה יש רכיבים בנים. הם יוצגו למשתמש, אך לא תוכלו להגדיר את הרכיבים הבנים בתבנית הקלט.",

		entry_template_properties_show: "הצגת החלק <b>תכונות</b>",
		entry_tempalte_properties_show_hover: "אם תציגו את החלק <b>תכונות</b>, משתמשים יוכלו לשנות ערכי תכונות המוצגים בתבנית הקלט שאינם מוגדרים לקריאה בלבד.",
		entry_template_properties_hide: "הסתרת החלק <b>תכונות</b>",
		entry_template_properties_hide_hover: "אם תסתירו את החלק <b>תכונות</b>, משתמשים לא יוכלו לשנות ערכי תכונות. תבנית הקלט חייבת להגדיר את כל הערכים שברצונכם להשתמש בהם כשפריטים נוספים באמצעות תבנית קלט זו.",

		entry_template_security_show: "הצגת החלק <b>אבטחה</b>",
		entry_template_security_show_hover: "אם תציגו את החלק <b>אבטחה</b>, משתמשים שיש להם הרשאות מתאימות יוכלו לשנות את האבטחה של הפריט.",
		entry_template_security_hide: "הסתרת החלק <b>אבטחה</b>",
		entry_template_security_hide_hover: "אם תסתירו את החלק <b>אבטחה</b>, משתמשים לא יוכלו לשנות את האבטחה של פריטים. תבנית הקלט חייבת להגדיר את כל הגדרות האבטחה שברצונכם להשתמש בהן כשפריטים נוספים או נערכים.",
		entry_template_security_policy: "מדיניות אבטחה:",
		entry_template_security_policy_hover: "בהתאם למדיניות האבטחה שתבחרו, מדיניות האבטחה יכולה:<br><ul><li>לעקוף את ההרשאות המצוינות תחת <b>הגדרת אבטחת הפריט</b>.</li><li>להוסיף להרשאות המצוינות תחת <b>הגדרת אבטחת הפריט</b>.</li></ul>",
		entry_template_security_policy_none: "לא נבחרה מדיניות אבטחה",
		entry_template_security_inherit: "קבלת הגדרות האבטחה בירושה מתיקיית האב",
		entry_tempalte_save_in_hover: "ציינו היכן תישמר תבנית הקלט.<br><br><b>מגבלה:</b> אם תשמרו תבנית קלט במרחב צוות, תוכלו להשתמש בתבנית הקלט רק בתוך מרחב הצוות.",
		entry_template_security_inherit_item_security_hover: "אם תבחרו אפשרות זו, הגדרות האבטחה של תיקיית האב נוספות להגדרות האבטחה המוגדרות על ידי אחד הפריטים האלה:<ul><li>המחלקה המצוינת בחלק <b>הגדרת תכונות הפריט</b></li><li>האבטחה המותאמת שציינתם בחלק <b>הגדרת אבטחת הפריט</b></li></ul>",
		entry_template_security_change: "עקיפת האבטחה המוגדרת על ידי המחלקה שנבחרה",
		entry_template_security_change_hover: "אם תבחרו אפשרות זו, הגדרות האבטחה המוגדרות עבור המחלקה יוצגו כברירת מחדל. תוכלו לשנות את הגדרות האבטחה עבור תבנית הקלט.<br><br>אם תציגו את החלק <b>אבטחה</b>, משתמשים שיש להם הרשאות מתאימות יוכלו לשנות את האבטחה של הפריט.<br><br>אם תבחרו אפשרות זו ותבחרו לקבל את הגדרות האבטחה בירושה מתיקיית האב, הרשאות הניתנות להורשה נוספות לאבטחה שתציינו.",
		entry_template_security_default_item_security: "עקיפת אבטחת הפריט המחדלית של המשתמש המוסיף את הפריט",
		entry_template_security_policy_message_override: "מדיניות האבטחה שנבחרה מוגדרת לעקוף את ההרשאות המצוינות תחת 'הגדרת אבטחה'.",
		entry_template_security_policy_message_add: "מדיניות האבטחה שנבחרה מוגדרת להוסיף להרשאות המצוינות תחת 'הגדרת אבטחה'.",
		entry_template_security_policy_preserve_true_hover: "משמר הרשאה ישירה",
		entry_template_security_policy_preserve_false_hover: "אינו משמר הרשאה ישירה",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "תפקידים ספציפיים",
		entry_template_security_class_role_search_title: "חיפוש תפקידים:",
		entry_template_secuirty_class_member_title: "רשימת חברים עבור ${0}",
		entry_template_secuirty_class_folder_only: "הרשאות אלה חלות על תיקיה זו בלבד",
		entry_template_secuirty_class_folder_and_immediate_children: "הרשאות אלו חלות על תיקיה זו ועל הבנים הישירים שמוגדרים לרשת אבטחה מתיקיה זו.",
		entry_template_secuirty_class_folder_and_all_children: "הרשאות אלו חלות על תיקיה זו ועל כל הבנים שמוגדרים לרשת אבטחה מתיקיה זו.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"הרשאות אלו חלות על הבנים הישירים שמוגדרים לרשת אבטחה מתיקיה זו",
		entry_template_secuirty_class_folder_all_children_not_folder: "הרשאות אלו חלות על כל הצאצאים שמוגדרים לרשת אבטחה מתיקיה זו",

		entry_template_class_security_message_no_override: "האבטחה של המחלקה שנבחרה מונעת ממשתמשים לעקוף את האבטחה.",
		entry_template_class_security_required_privileges: "<b>חשוב</b>: כשעוקפים את האבטחה של המחלקה שנבחרה, למשתמשים המוסיפים פריטים באמצעות תבנית קלט זו חייבת להיות ההרשאה ItemSetACL וההרשאה UserACLOwner.‏",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "תזרים-עבודה עבודה בתבנית רצף",
		entry_template_workflow_type_ICNParallelDocumentApproval: "תזרים-עבודה עבודה בתבנית מקבילית",
		entry_template_workflow_type_existing: "תזרים-עבודה מותאם...‏",
		entry_template_workflow_launch_prompt: "לשאול משתמשים אם לשגר את תזרים-העבודה",
		entry_template_workflow_launch_auto: "שיגור אוטומטי של תזרים-העבודה",
		entry_template_workflow_modify_launch: "לאפשר למשתמשים לשנות את צעד השיגור",
		entry_template_workflow_modify_launch_hover: "בחרו אפשרות זו כדי לאפשר למשתמשים לשנות את אופן השיגור של תזרים-העבודה.",

		entry_template_optionsButton_title: "שינוי",
		entry_template_optionsButton_readonly_title: "הצגת שיוכים",
		entry_template_optionsDialog_title: "הגדרות שיוכי תיקיה",
		entry_template_removeButton_title: "סילוק",
		entry_template_addButton_title: "הוספה",
		entry_template_selected_entry_templates: "תבניות קלט שנבחרו",
		entry_template_docs_added_to_template_destination: "מסמכים נוספים ליעד המצוין בתבנית הקלט.",
		entry_template_docs_added_to_other_object_store: "תבנית קלט זה מוסיפה פריטים למאגר האובייקטים ${0}.‏",
		entry_template_inherited_entry_templates_label: "ברצוני: ",
		entry_template_inherited_entry_templates: "לקבל שיוכי תבנית קלט בירושה מהתיקיה: ",
		entry_template_inherited_entry_templates_not: "ליצור שיוך חדש עבור תיקיה זו",
		entry_template_inherited_folder_path: "תבניות הקלט ברשימת תבניות הקלט שנבחרו משויכות לתיקיה שלהלן: ${0}. <br> נתיב התיקיה הוא ‎${1}‎.‏",
		entry_template_folder_associations_title: "שיוך תבניות קלט",
		entry_template_folder_associations_intro: "כשמשייכים תבנית קלט לתיקיה, משתמשים חייבים להשתמש בתבנית הקלט כדי להוסיף פריטים לתיקיה. אם תשייכו תבניות קלט מרובות לתיקיה, משתמשים יוכלו לבחור את תבנית הקלט לשימוש.",
		entry_tempalte_folder_associations_entrytemplate: "תבנית קלט: ",
		entry_template_avaliable_entry_templates: "תבניות קלט זמינות",
		entry_template_fileTypes_intro_title: "סוגי קבצים מותרים:",
		entry_template_fileTypes_intro: "כברירת מחדל, אפשר להשתמש בתבנית קלט להוספת כל סוג של מסמך למאגר. עם זאת, אם תבחרו סוג קובץ אחד או יותר, תבניות הקלט יהיו זמינות רק כשמשתמשים יוסיפו מסמכים התואמים לאחד מסוגי הקבצים שנבחרו.",
		entry_template_fileTypes: "סוגי קבצים",
		entry_template_fileType_error: "סוגי קבצים לא חוקיים נבחרו עבור שיוך או שיוכי תבניות קלט. יש לסלק את סוגי הקבצים הלא חוקיים כדי שאפשר יהיה לשמור את שיוכי תבניות הקלט.",
		entry_template_fileTypes_any_type_of_file: " כל סוג קובץ",
		entry_template_description_label: "תיאור",
		entry_template_ItemInfoPrefix: "שיוך אל: ",
		entry_template_TargetObjectStoreName: "מאגר אובייקטים המשמש כיעד",
		entry_template_class: "מחלקה",
		entry_template_current_folder_as_parent: "שימוש בתיקיה כיעד",
		entry_template_view_minetypes: "הצגת סוגי MIME",
		entry_template_avaliable_MIME_types: "סוגי קבצים זמינים",
		entry_template_selected_MIME_types: "סוגי קבצים שנבחרו",
		entry_template_MIME_type_column: "שם סיווג של סוג קובץ",
		entry_template_file_type_not_existing: "נא לסלק את סוגי הקבצים הלא חוקיים.",
		entry_template_MIME_types: "סוגי MIME:",
		entry_template_MIME_types_info_dialog_title: "סוגי MIME עבור",
		entry_template_destination_label: "הוספת מסמכים אל: ",
		entry_template_destination_help: "ציינו אם מסמכים יאוחסנו במאגר כשמשתמשים יוסיפו מסמכים לתיקיה זו באמצעות תבנית הקלט שנבחרה.",
		entry_template_radioButton_folder_destination: "תיקיה שנבחרה",
		entry_template_radioButton_template_destination: "היעד המצוין בתבנית הקלט",
		entry_tempalte_teamspace_default: "תבנית הקלט המחדלית",
		entry_template_folder_associations_save_new: "שיניתם שיוכים של תבנית הקלט. האם ברצונכם לסגור חלון זה בלי לשמור את השינויים?‏",
		entry_template_mode_binding_label: "תכונות",
		entry_template_columns_className: "שם מחלקה",
		entry_template_columns_type: "סוג תבנית",
		entry_template_columns_workflow: "שם תזרים-עבודה",
		entry_template_columns_destination: "יעד",
		entry_template_association_less_than_record: "יש ${0} תבניות קלט שאינן רשומות תחת 'תבניות קלט שנבחרו'. אין לכם הרשאה לראות אותן, או שהן נמחקו. פנו אל מנהלן המערכת כדי לקבל מידע נוסף.‏",
		/* Request */

		progress_message_general: "בביצוע...‏",
		cancel_message_general: "הפעולה בוטלה.",
		ie8_not_supported_browser: "IE8 אינו דפדפן נתמך.",
		progress_message_getDesktop: "שולחן העבודה נטען...‏",
		progress_message_getActions: "הפעולות נטענות...‏",
		progress_message_getViewers: "שולחן העבודה נטען...‏",
		progress_message_logon: "התחברות...‏",
		progress_message_logoff: "התנתקות...‏",
		progress_message_getContentClasses: "המחלקות מאוחזרות...‏",
		progress_message_openContentClass: "פרטי המחלקות מאוחזרים...‏",
		progress_message_od_getCabinets: "קובצי CAB מאוחזרים...‏",
		progress_message_getSearchTemplates: "החיפושים מאוחזרים...‏",
		progress_message_od_getTemplates: "התיקיות מאוחזרות...‏",
		progress_message_od_openCabinet: "התיקיות מאוחזרות...‏",
		progress_message_openSearchTemplate: "החיפוש נפתח כעת...‏",
		progress_message_od_openTemplate: "התיקיה נפתחת כעת...‏",

		progress_message_getWorklists: "אחזור רשימות עבודה...‏",
		progress_message_getWorkItems: "אחזור פריטי עבודה...‏",
		progress_message_getNextWorkItems: "אחזור פריטי עבודה...‏",
		progress_message_getStepParameters: "פרטי פריטי העבודה מאוחזרים...‏",
		progress_message_getStepAttachmentItems: "פרטי הצרופות מאוחזרים...‏",
		progress_message_getDependentParameters: "פרטי התכונות מאוחזרים...‏",

		progress_message_p8_getProcessApplicationSpaces: "אחזור מרחבי יישומים...‏",
		progress_message_p8_getProcessRoles: "תפקידי התהליכים מאוחזרים...‏",
		progress_message_p8_getProcessInbaskets: "מגירות הדואר הנכנס מאוחזרות...",
		progress_message_p8_getProcessorInformation: "אחזור פרטי תהליכים...‏",
		progress_message_p8_getFilterCriteria: "מסנן מגירות הדואר הנכנס מאוחזר...‏",
		progress_message_p8_getLaunchParameters: "פרטי פריטי העבודה מאוחזרים...‏",
		progress_message_p8_getStepAttachments: "צרופות פריטי העבודה מאוחזרות...‏",
		progress_message_p8_getSubscriptions: "מינויי תזרים-העבודה מאוחזרים...‏",
		progress_message_p8_getTrackerParameters: "פרטי פריטי העבודה מאוחזרים...‏",
		progress_message_p8_getTrackerHistory: "היסטוריית פריטי העבודה מאוחזרת...‏",
		progress_message_p8_getTrackerMilestones: "אבני הדרך של פריטי העבודה מאוחזרים...‏",
		progress_message_p8_completeStep: "השלמת פריט עבודה...‏",
		progress_message_p8_moveToInbox: "העברת פריט למגירת דואר נכנס...‏",
		progress_message_p8_returnToSender: "החזרת פריט עבודה...‏",
		progress_message_p8_reassign: "הקצאה מחדש של פריט עבודה...‏",
		progress_message_p8_launchWorkflow: "הפעלת תזרים-העבודה...‏",
		progress_message_p8_getTransferedWorkflows: "פרטי תזרים-העבודה מאוחזרים...‏",

		progress_message_cm_getProcesses: "פרטי תזרים-העבודה מאוחזרים...‏",
		progress_message_cm_completeStep: "המשכת פריט עבודה...‏",
		progress_message_cm_getItemProcessInformation: "פרטי תזרים-העבודה מאוחזרים...‏",

		progress_message_search: "חיפוש מתבצע...‏",
		cancel_message_search: "החיפוש בוטל.",
		progress_message_getContentItems: "אחזור פרטי הפריט...‏",
		progress_message_openFolder: "התיקיה נפתחת כעת...‏",
		progress_message_addItem: "יצירת פריט...‏",
		progress_message_checkIn: "הפקדת פריט...‏",
		progress_message_changePassword: "שינו סיסמה...",
		progress_message_getDefaultInstancePermissions: "אחזור הרשאות מחדליות...‏",
		progress_message_openItem: "אחזור פרטי הפריט...‏",
		progress_message_saveItem: "שמירת פרטי הפריט...‏",
		progress_message_getPermissions: "אחזור הרשאות...‏",
		progress_message_getEntryTemplates: "אחזור תבניות קלט...‏",
		progress_message_openEntryTemplate: "פתיחת תבנית קלט...‏",
		progress_message_getFavorites: "אחזור מועדפים...‏",
		progress_message_getFoldersFiledIn: "התיקיות מאוחזרות...‏",
		progress_message_getDocumentVersions: "הגרסאות מאוחזרות...‏",
		progress_message_getDependentAttributeInfo: "אחזור פרטי מאפיינים...‏",
		progress_message_packageForDownload: "אריזה להורדה...‏",
		progress_message_convertDocument: "המרת תוכן...‏",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "סוג התוכן מאוחזר...‏",
		progress_message_SharePointPlugin_SharePointAddDocument: "הוספת מסמך...‏",

		progress_message_desktop_reload: "הלקוח טוען מחדש את שולחן העבודה.<br>ייתכן שתתבקשו להיכנס שוב.",
		progress_message_email: "שולח הודעות דואל...",
		cancel_message_email: "הדואל בוטל.",

		progress_message_p8_getOfficeOnlineTemplates: "מאחזר תבניות Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "עץ מועדפים",
		favorites_content_list_label: "רשימת תוכן מועדפים",
		syncItems_tree_label: "עץ 'הקבצים המסונכרנים שלי'",
		syncItems_content_list_label: "רשימת התוכן 'הקבצים המסונכרנים שלי'",
		my_checkouts_content_list_label: "רשימת התוכן 'המשיכות שלי'",
		browse_tree_label: "עיון בעץ",
		browse_content_list_label: "עיון ברשימת תוכן",
		repository_selector_label: "בורר מאגרים",
		teamspaces_content_list_label: "רשימת תוכן של מרחבי צוות",
		templates_content_list_label: "רשימת תוכן של תבניות",
		work_content_list_label: "רשימת תוכן עבודה",
		work_tree_label: "עץ עבודה",
		admin_tree_label: "עץ מנהלה",
		admin_tabs_label: "לשוניות מנהלה",
		search_tabs_label: "לשוניות חיפוש",
		search_selector_label: "בורר חיפוש",
		teamspace_browse_content_list_label: "רשימת עיון בתוכן של מרחבי צוות",
		teamspace_search_tabs_label: "לשוניות חיפוש של מרחבי צוות",

		/* Desktop */
		undo_description: "ביטול פעולה ${0}",
		redo_description: "שחזור פעולה ${0}",

		/* Application Tabs */
		home: "דף הבית",
		repository: "מאגר",
		repository_type: "סוג מאגר:",
		repository_type_header: "סוג מאגר",
		repository_type_any: "כל המאגרים",
		repository_type_contains_label: "סוג המאגר מכיל:",
		document_info: "פרטי מסמך",
		team: "צוות",
		administration: "מנהלה",

		/* Home Page */
		recent_activity: "פעילות אחרונה",
		repos_and_wrksp: "מאגרים ומרחבי צוות",
		workspaces: "מרחבי צוות",
		repositories: "מאגרים",
		templates: "תבניות",
		favorites: "מועדפים",
		my_checkouts: "המשיכות שלי",
		mySyncedFiles: "הקבצים המסונכרנים שלי",
		links: "קישורים",
		name_label: "שם",
		description_label: "תיאור:",
		type_label: "סוג:",
		type_heading: "סוג",
		type_id_label: "זיהוי סוג",
		server_type_icon: "איקון סוג שרת",
		server_type_heading: "סוג שרת",
		server_type: "סוג שרת",
		port_heading: "מספר יציאה",
		port_label: "מספר יציאה:",
		server_name_heading: "שם שרת",
		server_label: "שם שרת:",
		server_url_label: "URL שרת:",
		id_label: "זיהוי:",
		id_heading: "זיהוי",
		connected_label: "מחובר:",
		repository_label: "מאגר",
		modified_label: "שונה על ידי:",
		modified_date_label: "שונה בתאריך:",
		status_label: "מצב:",
		last_modified_label: "שונה לאחרונה על ידי:",

		modifier: "השתנה על-ידי",
		modified_date: "שונה בתאריך",

		/* Favorites */
		new_favorite_label: "הוספה למועדפים",
		edit_favorite_label: "שינוי שם של מועדף",
		remove_favorite_label: "סילוק ממועדפים",
		missing_alias_message: "יש לציין שם.",
		sync_favorite_enable_hover: "פריט זה מופעל לסינכרון.",
		sync_favorite_disable_hover: "פריט זה אינו מסונכרן.",
		sync_favorite_sync_unavailable_hover: "סינכרון אינו זמין עבור סוג אובייקט זה.",
		sync_enable_label: "סינכרון פריט זה",
		sync_enable_label_hover: "פריט זה יסונכרן להתקנים שלכם.",
		delete_favorite_confirmation_question: "האם ברצונכם לסלק פריט זה מהמועדפים?",
		alias_label: "שם:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "הפריט שנבחר כבר קיים במועדפים שלכם.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "לא ניתן להוסיף פריט זה לרשימת המועדפים שלכם.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "באפשרותכם לאחסן רק ${0} מועדפים.",
		add_favorite_max_reached_response: "אם ברצונכם להוסיף פריט זה לרשימת המועדפים, עליכם למחוק מועדף קיים כדי להוסיף פריט זה.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "לא ניתן להמיר את המסמכים שנבחרו למבנה PDF.‏",
		download_as_pdf_max_content_error_explanation: "אפשר להמיר רק ${0} MB של נתונים למבנה PDF.‏ אולם גודל המסמכים שנבחרו חורג מ-${0} MB.‏",
		download_as_pdf_max_content_error_response: "בחרו פחות מסמכים או מסמכים קטנים יותר, והורידו את המסמכים כקובצי PDF שוב.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "לא ניתן להמיר את המסמכים שנבחרו לקובץ PDF יחיד.‏",
		download_as_pdf_mimetype_check_error_explanation: "כדי להמיר מסמכים עם חלקים מרובים לקובץ PDF יחיד, לכל חלק חייב להיות אותו סוג MIME.‏",
		download_as_pdf_mimetype_check_error_response: "בחרו מסמך שונה להמרה למבנה PDF.‏",

		/* Activity Stream */
		show_label: "הצגה:",
		all_filter: "הכל",
		notifications_filter: "דיווחים",
		workitems_filter: "פריטי עבודה",
		documentes_filter: "מסמכים",
		all_favorites_filter: "כל המועדפים",
		folders_filter: "תיקיות",
		searches_filter: "חיפושים",
		teamspaces_filter: "מרחבי צוות",

		/* Repository */
		all_search_templates: "כל החיפושים",
		all_od_searches: "כל תבניות החיפוש",
		recent_searches: "חיפושים אחרונים",
		opened_searches: "חיפושים פתוחים",

		all_worklists: "כל תיבות הדואר הנכנס",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "רשימה של כל רשימות העבודה",

		/* Teamspace */
		all_workspaces: "כל מרחבי הצוות",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "רשימה של כל מרחבי הצוות",
		workspace_title: "מרחב צוות",
		workspace_icon: "איקון מרחב צוות",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "זמין",
		workspace_stat_offline: "לא זמין",
		workspace_stat_validate: "דורש אימות",
		workspace_stat_pendingDelete: "מחיקה צפויה",
		workspace_stat_deleteError: "המחיקה נכשלה",

		undefined_value: "לא מוגדר",
		undefined_reference_value: "לא הוגדרו אסמכתאות.",

		/* Filter teamspaces in content list */
		more_results_on_server: "יתכן שתוצאות נוספות זמינות בשרת.",
		search_all_data: "חיפוש בכל הנתונים.",
		search_all_teamspaces: "חיפוש בכל מרחבי הצוות.‏",
		teamspace_filter_results: "מוצגות ${0} תוצאות. ",
		displaying_filtered_results: "מוצגות תוצאות מסוננות. ",
		displaying_recent_results: "מוצגים רק מרחבי צוות ששונו ב-${0} הימים האחרונים. כדי לאתר עוד מרחבי צוות, סננו את רשימת מרחבי הצוות לפי שם או תיאור. ",
		clear_filter: "ניקוי מסנן.",

		/* FolderTreeModel */
		move_item_task: "העברת פריט",
		copy_item_task: "העתקת פריט",
		add_item_task: "הוספת פריט",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "התיקיה שלהלן לא נמצאה: ‎${0}‎.‏ יתכן שהיא נמחקה, או שלא ניתן לגשת אליה מתצוגה זו. לחצו על הקישור 'עוד' מתצוגת העץ כדי לנווט אל התיקיה. אם אינכם יכולים להציג את התיקיה, רעננו את התצוגה של רשימת התוכן.",
		more_paging_link: "עוד ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "מצב",
		status_dialog_cancel_label: "ביטול",

		/* ErrorDialog */
		error_dialog_title: "שגיאה",
		error_dialog_icon_tooltip: "שגיאה",
		error_dialog_stack_trace_title: "Stack Trace",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "אישור",

		close_browser_msg: "סגירת חלון הדפדפן.",

		/* MessageDialog */
		message_dialog_title: "מידע",
		warning_dialog_title: "אזהרה",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "ברוכים הבאים אל ${0}",
		server: "מאגר:",
		username: "שם משתמש:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "דרוש שם משתמש להתחברות אל המאגר.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "דרושה סיסמה להתחברות אל המאגר.",
		password: "סיסמה:",
		login: "התחברות",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "תוקף מהלך העבודה שלכם פג. התחברו שוב.",
		login_repository_connection_expired_message: "תוקף החיבור שלכם למאגר ${0} פג. התחברו שוב.",
		login_site_connection_expired_message: "תוקף החיבור שלכם לאתר פג. התחברו שוב.",
		login_new_server_message: "ציינו שם משתמש וסיסמה עבור ${0}.",
		login_error_more_information_message: "מידע נוסף",

		disconnect_box_account_user: "ניתוק חשבון Box: ${0}",
		disconnect_box_account: "ניתוק חשבון Box",
		disconnect_box_accounts: "ניתוק חשבונות Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "נדרש חיבור SSL לצורך גישה למאגר Box.",
		login_oauth_popup_blocked: "חלונית ההצצה נחסמה. יתכן שיהיה עליכם לבטל את חסימת חלוניות ההצצה בדפדפן שלכם בכדי להתחבר.",
		login_oauth_click_here: "אם לא תנותבו מחדש תוך 5 שניות, לחצו כאן.",
		login_oauth_title: "התחברות",
		login_oauth_grant_intro: "הוענק אימות עבור ${0}.",
		login_pane_oauth_click_here: "יש ללחוץ כאן כדי להתחבר",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "האם ברצונכם להתנתק מלקוח הדפדפן?",
		logout_confirmation_button: "התנתקות",

		/* ChangeLocaleDialog */
		change_locale: "שינוי הגדרות שפה ואזור",
		change_locale_use_browser_language: "שימוש בהגדרות השפה של הדפדפן (ברירת מחדל)",
		change_locale_use_browser_locale: "שימוש בהגדרות השפה של הדפדפן (ברירת מחדל)",
		change_locale_description: "אם מחקתם קובצי cookie מהדפדפן, עליכם לאפס את הגדרות השפה והאזור שלכם.",
		change_locale_language_locale: "שפת יישום:",
		change_locale_language_locale_hover: "הגדרה זו משנה את שפת התמליל בלקוח הדפדפן אך אינה משנה את השפה של מסמכים ביישום.<br><br>ההגדרה המחדלית משתמשת בשפה שצוינה באפשרויות התצורה של הדפדפן.",
		change_locale_value_format_locale: "אזור היישום:",
		change_locale_value_format_locale_hover: "האזור קובע את המבנה של תאריכים, שעות ומספרים בלקוח הדפדפן.<br><br>ההגדרה המחדלית משתמשת במבנים המשויכים לשפה שצוינה באפשרויות התצורה של הדפדפן.",
		change_locale_for_office: "הגדרות תמליל דו-כיווני:",
		change_locale_bidi_support_flag: "הפעלת תמיכה דו-כיוונית",
		change_locale_bidi_support_flag_hover: "כשתמיכה דו-כיוונית מופעלת, המשתמש יכול להגדיר את כיוון התמליל המשמש בשדות קלט.  התמליל המוזן עבור פריטים כגון תיקיות, לדוגמה, יוצג באותו כיוון שבו הוקלד.",
		change_locale_base_text_direction: "כיוון תמליל בסיסי עבור תוכן:",
		change_locale_base_text_direction_hover: "הגדירו את כיוון התמליל המוזן בשדות קלט.  אפשרות זו שולטת גם בכיוון התצוגה של תוויות שצוינו על ידי המשתמש, כגון שמות תיקיות.",
		change_locale_calendar_type: "סוג יומן:",
		change_locale_calendar_type_hover: "בחרו את סוג היומן שישמש עבור מהלך העבודה של המשתמש",
		change_locale_base_text_direction_default: "ברירת מחדל",
		change_locale_base_text_direction_ltr: "משמאל לימין",
		change_locale_base_text_direction_rtl: "מימין לשמאל",
		change_locale_base_text_direction_contextual: "תלוי הקשר",
		change_locale_calendar_type_gregorian: "גרגוריאני",
		change_locale_calendar_type_hijri: "היג'רי",
		change_locale_calendar_type_hebrew: "עברי",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "שינוי סיסמה",
		change_password_title: "שינוי סיסמה",
		change_password_expired_title: "תוקף הסיסמה פג.",
		change_password_message: "ציינו סיסמה חדשה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "תוקף הסיסמה שלכם פג. ציינו סיסמה חדשה.",
		change_password_password_rules: "כללי סיסמאות",
		change_password_old_password: "סיסמה ישנה:",
		change_password_new_password: "סיסמה חדשה:",
		change_password_confirm_password: "אישור סיסמה:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "יש לציין את הסיסמה הישנה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "יש לציין את הסיסמה החדשה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "יש לאשר את הסיסמה החדשה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "הסיסמאות חייבות להיות זהות.",

		/* GlobalToolbar */
		actions: "פעולות",
		actions_label: "פעולות:",
		open_actions_label: "פעולות פתיחה:",

		/* About Dialog */
		about_dialog_title: "אודות",
		about_product_name_label: "שם מוצר: ",
		about_product_version_label: "גרסה: ",
		about_product_build_label: "בנייה: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved.‎ US Government Users Restricted Rights.‎ Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation.‎ IBM and IBM logo are registered trademarks of International Business Machine Corporation in the United States, other countries, or both.‎ תוכנית זו ברשיון תחת תנאי הסכם הרשיון המצורף לתוכנית.  הסכם הרשיון נמצא במדריך תוכניות או בספריית תוכנית ומזוהה בשם \"License\" או \"Non IBM License\", אם רלוונטי, או מסופק כהסכם רשיון מודפס. קראו הסכם זה במלואו לפני השימוש בתוכנית. על-ידי שימוש בתוכנית אתם מסכימים לתנאים אלה. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "האם ברצונכם למחוק את הפריט שנבחר?",
		delete_single_folder_confirmation_question: "האם ברצונכם למחוק את התיקיה ‎${0}‎?‏",
		delete_multiple_confirmation_question: "האם ברצונכם למחוק את הפריטים הנבחרים?‏<br>${0} פריטים נבחרו.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "מחיקה",
		search_template_delete_confirmation_question: "האם ברצונכם למחוק את החיפוש ${0}?‏",
		search_template_opened_delete_confirmation_question: "החיפוש ${0} פתוח. אם תמחקו את החיפוש, הוא ייסגר.<br>האם ברצונכם למחוק חיפוש זה?",
		delete_multiple_opened_search_template_confirmation_question: "החיפושים שלהלן פתוחים: ${0}.<br>אם תמחקו את החיפושים, הם ייסגרו. האם ברצונכם למחוק חיפושים אלה?",
		delete_large_number_items_confirmation_question: "בחרתם ${0} פריטים למחיקה.<br/>מחיקת מספר גדול של פריטים עשויה להימשך זמן רב.<br/>האם ברצונכם להמשיך?",
		delete_confirmation_entrytemplate: "אם תמחקו תבנית קלט זו, תהיה לכך השפעה על המסמכים או התיקיות המשויכים לתבנית הקלט:<ul><li>הפריטים כבר לא יהיו משויכים לתבנית קלט, ויתכן שמשתמשים יראו אזהרה כשיעדכנו פריט.</li><li>תכונות שנשלטו באמצעות תבנית הקלט, כגון השם או הסדר של התכונות, כבר לא יחולו על פריטים המשויכים לתבנית הקלט.</li></ul>האם ברצונכם למחוק תבנית קלט זו?",
		delete_confirmation_entrytempalte_with_multi_items: "יש למחוק תבניות קלט באופן יחדיני. תבניות הקלט סולקו מרשימת הפריטים למחיקה. אם ברצונכם למחוק את תבניות הקלט, עליכם למחוק כל אחת מהן בנפרד.",

		/* Create/Apply/Remove Hold */
		hold: "השהיה",
		createHold: "השהיה חדשה",
		applyHold: "החלת השהיה",
		removeHold: "סילוק השהיה",
		showHolds_title: "הצגת השהיות",
		applyHoldSelectText: "בחרו את ההשהיות שברצונכם להחיל על הפריטים שנבחרו.",
		availableHolds: "השהיות זמינות:",
		removeHoldSelectText: "בחרו את ההשהיות שברצונכם לסלק מהפריטים שנבחרו.",
		appliedHolds: "השהיות מוחלות:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "יצירת השהיה חדשה להחלה על הפריטים הנבחרים.",
		holdName: "שם השהיה:",
		holdDescription: "תיאור:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "יש לציין שם עבור ההשהיה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "שם ההשהיה שצוין כבר קיים.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "שם השהיה אינו יכול לכלול תו כלשהו מהתווים האלה:   ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "מהלך העבודה שלכם יפוג בעוד ${0} דקות.",
		session_expire: "תוקף מהלך העבודה עומד לפוג",
		logoff: "התנתקות",
		extend_session: "הרחבת מהלך עבודה",
		admin_custom_settings: "הגדרות נוספות:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning הוא ערך בוליאני המציין אם אזהרת תפוגת מהלך העבודה מופעלת. ערך ברירת המחדל הוא True. sessionExpireWarningTime הוא מספר שלם בין 2 ו-5 המציין את זמן אזהרת תפוגת מהלך העבודה.",
		admin_custom_setting_dialog_title_new: "הגדרה חדשה",
		admin_custom_setting_dialog_title_edit: "עריכת הגדרה",
		admin_custom_setting_dialog_hover_help: "כדי להוסיף פרמטרים אחרים, ציינו את שם הפרמטר וערכו. לדוגמה, באפשרותכם לציין את \"enableSessionExpireWarning\" ו-\"True\" אם ברצונכם להפעיל את אזהרת תפוגת מהלך העבודה.",
		admin_custom_setting_dialog_field_hover_help: "לקבלת מידע נוסף על שמות פרמטרים וערכיהם, עיינו ב-IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "זהו ערך דרוש. הערך אינו יכול להכיל רווחים ואינו יכול להיות זהה לערך אחר.",
		admin_custom_setting_dialog_bool_valueInvalid: "זהו ערך דרוש. הערך חייב להיות בוליאני.",
		admin_custom_setting_dialog_int_valueInvalid: "זהו ערך דרוש. הערך חייב להיות מספר שלם.",
		/* Add Document Dialog */
		add_document_dialog_title: "הוספת מסמך",
		add_documents_dialog_title: "הוספת מסמכים",
		add_document_general_label: "כללי",
		add_document_properties_label: "תכונות",
		add_document_properties_with_ellipsis_label: "תכונות...‏",
		add_document_security_label: "אבטחה",
		add_document_location_label: "שמירה בתוך:",
		add_document_type_label: "מה ברצונכם לשמור?",
		add_document_localfile_label: "מסמך מקומי",
		add_document_metadata_label: "מידע על מסמך",
		add_document_external_label: "קישור למסמך חיצוני",
		add_document_web_link_label: "קישור אינטרנט",
		add_document_saved_content_label: "שימוש בקובץ השמור:",
		add_document_saved_content_choice: "הקובץ השמור",
		add_document_file_name_label: "שם קובץ:",
		add_document_entry_template_label: "תבנית קלט:",
		add_document_delete_file_label: "מחיקת קובץ מקומי",
		add_document_delete_file_disabled_label: "קבצים שאינם בתיקיית המעקב אחר קבצים לא יימחקו.",
		add_document_major_version_label: "גרסה ראשית",
		add_document_major_version_hover: "הגדרת מצב המסמך בתור 'מופץ'. המסמך נוסף למאגר כגרסה 1.0. אם האפשרות אינה נבחרת, המסמך אינו מוכן להפצה והוא נוסף כגרסה משנית 0.1.",
		add_document_save_document_as_unfiled_label: "לא לשמור את המסמך בתיקיה",
		add_document_save_document_as_unfiled_hover: "אם תבחרו אפשרות זו, תוכלו לאתר את המסמך רק באמצעות חיפוש. לא תוכלו לאתר אותו בעיון.",
		add_document_create_new_version_label: "יצירת גרסה חדשה",
		add_document_replace_existing_version_label: "החלפת גרסה קיימת",
		add_document_start_workflow_label: "שיגור תזרים-עבודה",
		add_document_auto_classify_label: "סיווג אוטומטי של התוכן",
		add_document_add_label: "הוספה",
		add_document_cancel_label: "ביטול",
		add_document_document_type_label: "מחלקה",
		add_document_context_info: "הערכים שתציינו עבור תכונות המסמך יכולים לשמש לאיתור המסמך בהמשך.",
		add_documents_context_info: "הערכים שתציינו עבור המסמכים יכולים לשמש לאיתור המסמכים בהמשך. אם עליכם לציין ערך תכונה שונה עבור מסמך, עליכם להוסיף אותו בנפרד או לערוך את תכונות המסמך אחרי שתוסיפו אותו.",
		add_document_url_label: "URL:‏",
		add_document_template_description: "תיאור תבנית:",
		add_document_select_entry_template: "ציינו או בחרו תבנית קלט",
		add_document_no_permission_to_associations: "אין לכם הרשאות להשתמש בתבנית הקלט.",
		add_document_no_entry_template_to_use: "אין תבנית קלט שאפשר להשתמש בה עבור הקבצים שנבחרו",
		add_document_no_entry_template_itemtype_permission: "אינכם יכולים להוסיף מסמכים לתיקיה זו. יש לבחור תבנית קלט ואין לכם גישה לאף אחת מתבניות הקלט המשויכות לתיקיה זו. פנו למנהלן המערכת ובקשו ממנו לתת לכם גישה לתבניות הקלט המשויכות לתיקיה זו.",
		add_document_appgroup_name_label: "Application Group Name:",
		add_document_app_name_label: "Application Name:",
		create_folder_dialog_title: "תיקיה חדשה",
		create_folder_context_info: "הערכים שתציינו עבור תכונות התיקיה יכולים לשמש לאיתור התיקיה בהמשך.",
		create_folder_folder_name_label: "שם תיקייה",
		create_folder_save_folder_as_unfiled_label: "לא לשמור את התיקיה בתיקיה אחרת.",
		create_folder_save_folder_as_unfiled_hover: "אם תבחרו אפשרות זו, תוכלו לאתר את המסמך רק באמצעות חיפוש. לא תוכלו לאתר אותו בעיון.",
		add_item_create_in_folder: "יצירה בתיקיה:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "שם תיקיה אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",

		invalid_box_folder_name_message: "שם תיקיה לא יכול להכיל תו כלשהו מהתווים האלה: \\ / ולא יכול להיות . או ..",
		invalid_box_file_name_message: "שם קובץ לא יכול להכיל תו כלשהו מהתווים האלה: \\ / ולא יכול להיות . או ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "שם קובץ אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",
		external_document_placeholder: "ציינו את ה-URL של המסמך.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "יש לציין את הצבע כמספר הקסדצימלי בן 3 או 6 ספרות, לדוגמה ‎#000 או ‎#000000.‏",
		add_document_unfiled: "${0} לא מתויק",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "הוספת מסמך באמצעות תבנית קלט",
		add_document_using_template_context_info: "כשתוסיפו מסמך באמצעות תבנית קלט, הערכים שתציינו עבור המסמך יהיו עקביים.",
		add_documents_using_template_dialog_title: "הוספת מסמכים באמצעות תבנית קלט",
		add_documents_document_name_is_file_name_hint: "שם הקובץ ישמש עבור תכונה זו",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "תיקיה חדשה באמצעות תבנית קלט",
		create_folder_using_template_context_info: "כשתוסיפו תיקיה למאגר באמצעות תבנית קלט, הערכים שתציינו עבור התיקיה יהיו עקביים.",

		add_documents_batch_results_dialog_title: "המסמכים לא נוספו למאגר",
		add_documents_batch_results_dialog_context_info: "המסמכים שלהלן לא נוספו למאגר. בחרו מסמך ולחצו על 'פרטים' כדי לראות מידע נוסף על הסיבה לכך שהמסמך לא נוסף למאגר.",
		add_documents_batch_results_dialog_filename_col_hdr: "שם קובץ",
		add_documents_batch_results_dialog_status_col_hdr: "מצב",
		add_documents_batch_results_dialog_message_col_hdr: "הודעה",
		add_documents_batch_results_status_error: "שגיאה",
		add_documents_batch_results_status_cancelled: "בוטל",
		add_documents_batch_results_status_cancelled_msg: "המסמך לא נוסף מפני שהבקשה בוטלה.‏",

		add_documents_batch_status_title: "הוספת מסמכים",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "הוספת קובץ ${0} מתוך ${1}...‏",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "שגיאות: ${0}",
		add_documents_batch_status_completing_msg: "התהליך יופסק לאחר שמסמך זה יתווסף.",

		add_documents_status_uploading_msg: "העלאת קובץ ${0} מתוך ${1}...‏",
		add_documents_status_adding_msg: "הוספת קובץ ${0} מתוך ${1}...‏",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "תבנית הקלט הוגדרה ביישום אחר, ומוגדרת להכריז תמיד מסמכים כרשומות. עם זאת, לא נעשה שימוש בהגדרה זו מפני שלקוח הדפדפן אינו תומך בהכרזת מסמכים כרשומות.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "תבנית הקלט הוגדרה ביישום אחר, ומוגדרת לאפשר לכם להחליט אם להכריז על מסמך זה כרשומה. עם זאת, לא נעשה שימוש בהגדרה זו מפני שלקוח הדפדפן אינו תומך בהכרזת מסמכים כרשומות.",
		no_selection: "&lt;בחירה&gt;",

		batch_results_dialog_details_label: "פרטים",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "הערך אינו חוקי. הערך חייב להיות זיהוי GUID, לדוגמה, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "הערך אינו חוקי. הערך חייב להיות מספר נקודה צפה, לדוגמה, 1.2 או 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "הערך אינו חוקי. הערך חייב להיות במבנה ${0}, לדוגמה ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "הערך אינו חוקי. הערך חייב להיות ערך עשרוני, לדוגמה, 1.2 או 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "הערך אינו חוקי. הערך חייב להיות מספר שלם, לדוגמה, 5 או 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "הערך אינו חוקי. הערך יכול להכיל רק תווים אלפבתיים, לדוגמה a-z או A-Z.‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "הערך אינו חוקי. הערך יכול להכיל רק תווים אלפנומריים, לדוגמה a-z,‏ A-Z, 0-9.‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "הערך אינו חוקי. הערך יכול להכיל רק תווים נומריים, לדוגמה 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "הערך אינו חוקי. הערך יכול להכיל רק את התווים האלה: a-z, A-Z, 0-9, [רווח], וכן `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "הערך אינו חוקי. הערך חייב להיות תאריך במבנה זה: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "הערך אינו חוקי. הערך חייב להיות שעה במבנה זה: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "הערך אינו חוקי. בחרו ערך מהתפריט הנפתח.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "הערך אינו חוקי.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "הערך אינו חוקי. הערך חייב להיות במבנה זה: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "ערך זה דרוש.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "הערך ארוך מדי. התכונה תומכת באורך מרבי של ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "הערך קצר מדי. התכונה תומכת באורך מזערי של ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "הערך מחוץ לטווח. הערך חייב להיות מספר נקודה צפה בטווח ${0} עד ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "הערך מחוץ לטווח. הערך חייב להיות מספר עשרוני בטווח ${0} עד ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "הערך מחוץ לטווח. הערך חייב להיות מספר שלם בטווח ${0} עד ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "הערך חייב להיות תאריך בטווח ${0} עד ${1}.‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "הערך מחוץ לטווח. הערך חייב להיות תאריך בטווח ${0} עד ${1}.‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "הערך מחוץ לטווח. הערך חייב להיות שעה בטווח ${0} עד ${1}.",
		property_and: "וכן",

		property_invalidValueOrRequired: "הערך שלהלן אינו חוקי או דרוש: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "תכונות",
		edit_properties_dialog_info: "תוכלו להציג או לערוך את התכונות של פריט זה. אם יש לכם הרשאות מתאימות, תוכלו גם לשנות את האבטחה של הפריט. עם זאת, לא תוכלו לשנות את תכונות המערכת.",
		edit_properties_od_dialog_info: "תוכלו להציג או לערוך את התכונות של פריט זה. עם זאת, לא תוכלו לשנות את תכונות המערכת.",
		system_properties_title: "תכונות מערכת",
		custom_properties_title: "תכונות",
		/* Folder collaboration tab */
		box_permission_permission: "הרשאה",
		box_permission_permissions: "הרשאות",
		box_permission_editor: "עורך",
		box_permission_owner: "בעלים",
		box_permission_co_owner: "בעלים משותפים",
		box_permission_viewer_uploader: "Viewer Uploader",
		box_permission_previewer_uploader: "Previewer Uploader",
		box_permission_viewer: "מציג",
		box_permission_previewer: "Previewer",
		box_permission_uploader: "Uploader",
		box_permission_add: "הוספה",
		box_permission_upload: "טעינה",
		box_permission_download: "הורדה",
		box_permission_preview: "תצוגה מקדימה",
		box_permission_view: "הצגה",
		box_permission_send_links: "שליחת קישורים לעיון בלבד",
		box_permission_create_subfolders: "יצירת תת-תיקיות",
		box_permission_create_tasks: "יצירת משימות",
		box_permission_add_comments: "הוספת הערות",
		box_collaboration_invite_placeholder: "הזינו שם, דואל או קבוצה להזמנה",
		box_collaboration_invite_placeholder_non_admin: "הזינו כתובת דואל להזמנה",
		box_collaboration_invalid_email: "הזינו כתובת דואל תקפה",
		box_collaboration_user_already_present: "משתמש זה הוא כבר משתתף בתיקייה זו",
		box_collaboration_user_name: "שם",
		box_collaboration_email_address: "כתובת דואל",
		box_collaboration_date_added: "תאריך הוספה",
		box_collaboration_remove_collaboration: "סילוק",
		box_collaboration_remove_collaboration_title: "מחיקה",
		box_collaboration_no_collaborators: "אין משתתפים",
		box_collaboration_change_owner_title: "שינוי בעלים פריט",
		box_collaboration_change_owner_prompt: "בכך שאתם מגדירים משתתף זה כבעלים של התיקיה, אתם הפכים לעורכים והתיקייה כבר אינה בבעלותכם. כל משתתף שנוסף ישירות לתיקייה זו ייראה אותה בתיקיות היסוד שלו. כל משתתף שנוסף ברמת תיקיית האב או ברמה גבוהה יותר כבר לא יהיו משתתפים. האם ברצונכם להמשיך?",
		box_collaboration_remove_self_title: "סילוק עצמי",
		box_collaboration_remove_self_prompt: "האם אתם בטוחים שברצונכם לסלק את עצמכם כמשתתף? כבר לא תהיה לכם גישה לתיקייה זו.",
		box_collaboration_user: "משתמש",
		box_collaboration_group: "קבוצה",
		box_managing_users_not_configured: "אי אפשר לחפש משתמשים וקבוצות כיוון שתצורת היישום Box אינה מוגדרת כראוי. כדי להשתמש בתכונה זו, פנו למנהלן המערכת ובקשו ממנו להגדיר את תצורת יישום Box לניהול משתמשים וקבוצות.",
		duplicate_value_error: "כל ערך של תכונה זו חייב להיות ייחודי.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "השינויים שתבצעו בשדות שלהלן יוחלו על כל הפריטים שנבחרו. אם עליכם לציין ערך תכונה שונה עבור פריט מסוים או לערוך את האבטחה של פריט, עליכם לערוך את תכונות המסמך בנפרד.",
		multi_edit_properties_class_label: "מחלקה:",
		multi_edit_properties_items_label: "שמות פריטים:",
		multi_edit_properties_properties_label: "תכונות:",
		multi_edit_batch_status_title: "עדכון תכונות",
		multi_edit_batch_status_adding_msg: "עדכון פריט ${0} מתוך ${1}...‏",
		multi_edit_batch_status_verifying_msg: "אימות פריט ${0} מתוך ${1}...‏",
		multi_edit_batch_status_completing_msg: "התהליך יופסק לאחר שפריט זה יעודכן.",
		multi_edit_batch_status_validation_completing_msg: "התהליך יופסק לאחר שפריט זה יאומת.",
		multi_edit_batch_results_status_error: "שגיאה",
		multi_edit_batch_results_status_cancelled: "בוטל",
		multi_edit_batch_results_status_cancelled_msg: "הפריט לא עודכן מפני שהבקשה בוטלה.‏",
		multi_edit_batch_results_dialog_title: "הפריטים לא עודכנו",
		multi_edit_batch_results_dialog_context_info: "הפריטים שלהלן לא עודכנו. בחרו שם פריט ולחצו על 'פרטים' כדי לראות מידע נוסף על הסיבה לכך שהפריט לא עודכן.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "שם פריט",
		multi_edit_batch_results_dialog_status_col_hdr: "מצב",
		multi_edit_batch_results_dialog_message_col_hdr: "הודעה",
		multi_edit_batch_status_errors_msg: "שגיאות: ${0}",
		multi_edit_batch_permission_error_text: "לא ניתן לשמור את השינויים בתכונות.",
		multi_edit_invalid_value_error: "ערך זה תלוי בערך של תכונה אחרת ואינו חוקי עבור כל הפריטים שבחרתם.",
		multi_edit_batch_permission_error_explanation: "אינכם יכולים לשנות את התכונות של פריט זה מפני שאין לכם הרשאות מספיקות.",
		multi_edit_no_modifiable_properties: "לא ניתן לשנות את התכונות של הפריטים שנבחרו. מצב זה יכול להתרחש כאשר פריט כולל רק תכונות לקריאה בלבד, או כאשר רק השם או הכותרת של הפריט מאפשרים עריכה. כשנבחרים פריטים מרובים, לא ניתן לשנות את השם או הכותרת של פריטים.",
		multi_edit_mult_classes_dialog_info: "הפריטים שנבחרו נמצאים במאגרים שונים או שייכים למחלקות שונות. תוכלו לערוך רק פריטים השייכים לאותה מחלקה או נמצאים באותו מאגר. בחרו קבוצת פריטים שברצונכם לערוך.",
		multi_edit_class_selector_class_heading: "מחלקה",
		multi_edit_class_selector_entry_template_heading: "תבנית קלט",
		multi_edit_class_selector_repository_heading: "מאגר",
		multi_edit_class_selector_items_heading: "פריטים",
		multi_edit_some_classes_not_displayed: "חלק מהפריטים שנבחרו אינם כלולים ברשימה זו מפני שהפריטים כוללים רק תכונות לקריאה בלבד או מפני שהפריטים נמצאים במאגרים שאינם תומכים בעריכת תכונות.",
		multi_edit_properties_invalid_msg: "חלק מערכי התכונות אינם חוקיים עבור כל הפריטים שנבחרו.",
		multi_edit_properties_readonly_tooltip_text: "${0}: תכונה זו מוגדרת לקריאה בלבד ולא ניתן לשנותה.",
		multi_edit_append_checkbox_label: "צירוף",
		multi_edit_append_checkbox_tooltip: "בחרו אפשרות זו אם ברצונכם לצרף ערכי תכונות חדשים לערכים קיימים במקום להחליף אותם.",
		multi_edit_properties_invalid_childcomponent_msg: "חלק מהערכים בתכונה ${0} של רכיב הבן ${1} תלויים בתכונות אחרות וכבר אינם חוקיים עם האפשרויות שבחרתם. נקו את הערכים ברכיב הבן ${1} או בצעו שינויי תכונות בפריטים שבחרתם באופן יחידני.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "יצוא תכונות",
		export_properties_dialog_info: "בחרו את התכונות ליצוא וציינו את הסדר שבו יוצגו.",
		export_properties_dialog_export_button_label: "ייצוא",
		export_properties_dialog_export_raw_values: "יצוא ערכים גולמיים",

		/* Properties */
		filter_clear_tooltip: "ניקוי המסנן",
		properties_new_row: "חדש",
		properties_requiredClass_document_tooltip: "נא לבחור מסמך. המסמך חייב להיות שייך למחלקה ${0}.‏",
		properties_requiredClass_folder_tooltip: "נא לבחור תיקיה. התיקיה חייבת להיות שייכת למחלקה ${0}.‏",
		properties_dataType_tooltip: "סוג תאריך: ${0}",
		properties_maxLength_tooltip: "אורך מרבי: ",
		properties_minLength_tooltip: "אורך מזערי: ",
		properties_minValue_tooltip: "ערך מינימום: ",
		properties_maxValue_tooltip: "ערך מקסימום: ",
		properties_format_tooltip: "מבנה: ",
		properties_description_tooltip: "תיאור: ",

		properties_type_boolean_tooltip: "בוליאני",
		properties_type_date_tooltip: "תאריך",
		properties_type_time_tooltip: "שעה",
		properties_type_timestamp_tooltip: "חותמת זמן",
		properties_type_decimal_tooltip: "ערך עשרוני",
		properties_type_double_tooltip: "מספר נקודה צפה",
		properties_type_short_tooltip: "מספר שלם",
		properties_type_integer_tooltip: "מספר שלם",
		properties_type_long_tooltip: "מספר שלם",
		properties_type_string_tooltip: "מחרוזת תמליל",
		properties_type_string_alpha_tooltip: "מחרוזת אלפביתית",
		properties_type_string_alphanum_tooltip: "מחרוזת אלפאנומרית",
		properties_type_string_ext_tooltip: "מחרוזת אלפאנומרית מורחבת",
		properties_type_string_num_tooltip: "מחרוזת נומרית",
		properties_type_binary_tooltip: "בינארי",
		properties_type_object_tooltip: "אובייקט",
		properties_type_reference_tooltip: "תכונה זו מאזכרת פריט אחר במאגר.",
		properties_type_guid_tooltip: "זיהוי GUID",
		properties_type_group_tooltip: "משתמשים וקבוצות",
		properties_type_user_tooltip: "משתמשים",
		properties_type_childComponent_tooltip: "רכיב בן",

		properties_childComponent_minCardinalityOnly_tooltip: "לתכונה זו חייבים להיות לפחות ${0} ערכים.",
		properties_childComponent_maxCardinalityOnly_tooltip: "לתכונה זו לא יכולים להיות יותר מ-${0} ערכים.",
		properties_childComponent_minMaxCardinality_tooltip: "לתכונה זו חייבים להיות לפחות ${0} ערכים ולא יותר מ-${1} ערכים.",
		properties_childComponent_noCardinality_tooltip: "לתכונה זו יכול להיות כל מספר של ערכים.",

		properties_type_guid_example_tooltip: ", לדוגמה {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "בחרו ערך מהרשימה.",
		properties_single_select_choice_tooltip: "בחרו ערך.",
		properties_multiple_select_typein_tooltip: "ציינו ערך אחד או יותר.",
		properties_multiple_select_choice_tooltip: "בחרו ערך אחד או יותר.",
		properties_not_selectable_tooltip: "לא ניתן לבחור את הסיווג.",
		properties_none: "ללא",
		properties_none_tooltip: "בחרו <i>ללא</i> כדי לנקות את הערך הנוכחי של תכונה זו.",
		properties_value_empty: "ללא ערך",
		properties_value_read_only: "קריאה בלבד",
		properties_clear_label: "ניקוי",
		properties_clear_tooltip: "ניקוי הערך בשדה זה ינקה את הערך במאגר לאחר שתלחצו על <b>שמירה</b>.",
		properties_box_custom_properties: "תכונות מותאמות",
		properties_box_metadata_name_in_use: "שם זה כבר נמצא בשימוש. הזינו שם אחר לתכונה המותאמת.",

		properties_templates: "תבניות",
		properties_add_template: "הוספת תבנית",
		properties_remove_template: "סילוק",
		/* Checkin Document Dialog */
		checkin_dialog_title: "הכנסה",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "הכנסה",
		checkin_cancel_label: "ביטול",
		checkin_file_name_label: "שם קובץ",
		checkin_document_status_title: "הפקדת מסמך",
		checkin_document_status_uploading_msg: "הקובץ נטען...‏",
		checkin_document_status_checkingin_msg: "מבוצעת הפקדת קובץ...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "בחירת מצב עריכה",
		viewer_redaction_new_document_confirmation_question: "האם ברצונכם לשמור את העריכה כמסמך חדש או כקובץ מקומי?",
		viewer_redaction_new_version_confirmation_question: "האם ברצונכם לשמור את העריכה כגרסה חדשה?",
		viewer_redaction_new_version_confirmation_question_never: "האם ברצונכם לשמור את העריכה כתוכן חדש?",		
		viewer_redaction_new_document_button: "כן",
		viewer_redaction_new_document_cancel_button: "לא",
		viewer_redaction_add_document_confirmation_question: "האם ברצונכם לשמור את העריכה כמסמך חדש, כגרסה חדשה או כקובץ מקומי?",
		viewer_redaction_add_document_confirmation_question_version_never: "האם ברצונכם לשמור את העריכה כמסמך חדש, כתוכן חדש או כקובץ מקומי?",
		viewer_redaction_add_document_button: "מסמך חדש",
		viewer_redaction_add_new_version_button: "גירסה חדשה",
		viewer_redaction_add_new_version_button_version_never: "תוכן חדש",
		viewer_redaction_add_local_file_button: "קובץ מקומי",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "בחר סיבת עריכה",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "תבנית הקלט ששימשה להוספת מסמך זה למאגר לא נמצאה. המסמך יופקד למאגר ללא שימוש בתבנית קלט.",
		property_entry_template_not_retrieved_warning: "תבנית הקלט ששימשה להוספת מסמך זה למאגר לא נמצאה. תכונות המסמך יוצגו ללא שימוש בתבנית קלט.",
		multi_edit_entry_template_not_found_name: "[לא נמצא]",
		multi_edit_entry_template_not_retrieved_warning: "תבנית הקלט ששימשה להוספת פריטים אלו למאגר לא נמצאה. תכונות הפריט ישונו ללא שימוש בתבנית הקלט.",
		checkin_major_version_hover: "קידום גרסת המסמך באחת והגדרת מצב המסמך בתור 'מופץ'. אם האפשרות אינה נבחרת, המסמך אינו מוכן להפצה ומופקד כגרסה משנית.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "לא ניתן להפקיד את המסמך מפני שהוא נמשך.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "זיהוי המשתמש או הסיסמה אינם חוקיים עבור השרת.",
		error_bad_userid_password_userResponse: "ודאו שציינתם את זיהוי המשתמש והסיסמה נכון.",
		error_bad_userid_password_adminResponse: "הוחזרה השגיאה שלהלן: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "לא ניתן להקים חיבור ללקוח הדפדפן באמצעות URL זה: ‎${0}‎.‏",
		http_send_error_explanation: "גורם אפשרי לשגיאה זו הוא בעיית תצורה בשרת היישומים בשרת או בעייה ביישום לקוח הדפדפן.",
		http_send_error_userResponse: "נסו להתחבר שוב. אם הבעיה נמשכת, דווחו על הבעיה למנהלן המערכת.",
		http_send_error_adminResponse: "הוחזרה שגיאת HTTP שלהלן: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "לא ניתן להקים חיבור ללקוח הדפדפן באמצעות URL זה: ‎${0}‎.‏",
		http_error_explanation: "יתכן שתצטרכו לבצע אימות מול קיר-אש, או ששרת היישומים אינו פעיל או אינו נגיש בגלל בעיות רשת.",
		http_error_userResponse: "אם עליכם לבצע אימות מול קיר-אש, בצעו את האימות ונסו להתחבר שוב. אם הבעיה נמשכת, דווחו על הבעיה למנהלן המערכת.",
		http_error_adminResponse: "הוחזרה שגיאת HTTP שלהלן: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "לא ניתן להקים חיבור ללקוח הדפדפן באמצעות URL זה: ‎${0}‎.‏",
		http_response_bad_explanation: "גורם אפשרי לשגיאה זו הוא בעיית תצורה בשרת היישומים בשרת או בעייה בלקוח הדפדפן.",
		http_response_bad_userResponse: "נסו להתחבר שוב. אם הבעיה נמשכת, דווחו על הבעיה למנהלן המערכת.",
		http_response_bad_adminResponse: "הוחזרה השגיאה שלהלן: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "ללא כותרת",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "לא ניתן להפעיל את יישומון הדואל.",
		email_applet_init_failed_explanation: "בעיה זו יכולה להתעורר אם לקוח הדואל אינו מוגדר כהלכה או אם לא מותקנת גרסת JRE נתמכת בתחנת העבודה שלכם.",
		email_applet_init_failed_userResponse: "כדי לפתור את הבעיה:<ul><li>ודאו שיישום הדואל מותקן ומוגדר כלקוח הדואל המחדלי בתחנת העבודה שלכם.</li><li>ודאו שגרסה נתמכת של  JRE מותקנת בתחנת העבודה שלכם. לשם כך, הקלידו את הפקודה שלהלן בשורת פקודה: java ‎-version</li></ul><p>רשימת גרסאות JRE הנתמכות כלולה במסמך <i>Hardware and software prerequisites for IBM Web Interface for Content Management</i> באתר תמיכת התוכנה של IBM.‏</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "לא ניתן להפעיל את יישום הדואל מפני שלא ניתן לטעון קובץ DLL דרוש.",
		email_applet_JNI_LOAD_FAILED_explanation: "לא ניתן לטעון את הקובץ הדרוש WCEmailAppletJNI.dll מפני שהמדריך הזמני בתחנת העבדוה שלכם עשוי להיות מלא.",
		email_applet_JNI_LOAD_FAILED_userResponse: "ודאו שיש מספיק מקום במדריך הזמני. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב. כברירת מחדל, הקובץ WCEmailAppletJNI.dll נטען למדריך הזמני המצוין בהגדרות הדפדפן.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "לא ניתן להפעיל את יישום הדואל מפני שיישומון הדואל אינו יכול ליצור קובץ זמני.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "יתכן שהמדריך הזמני בתחנת העבודה שלכם מלא.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "ודאו שיש מספיק מקום במדריך הזמני. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "לא ניתן להפעיל את יישום הדואל מפני שיישומון הדואל אינו יכול לגשת למדריך הזמני.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "יתכן שהמדריך הזמני בתחנת העבודה שלכם מלא, או שאין לכם הרשאות גישה מתאימות לכתיבה במדריך הזמני.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "ודאו שבמדריך הזמני יש מספיק מקום ושיש לכם הרשאות גישה מתאימות לכתיבה במדריך הזמני. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל מנהלן המערכת.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "יישומון הדואל אינו יכול למחוק קובץ זמני.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "יתכן שיישום אחר משתמש בקובץ, או שהקובץ אינו קיים בתחנת העבודה שלכם.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "אם הקובץ נמצא בשימוש של יישום אחר, סגרו את היישום. אם הקובץ נמצא במערכת הקבצים המקומית, סלקו את הקובץ שלהלן מהמדריך הזמני בתחנת העבודה שלכם: ‎${0}‎.‏",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "לא ניתן ליצור הקישור למסמך.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "המאגר החזיר URL במבנה לא חוקי.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "סגרו את הדפדפן כולל כל הלשוניות והתחברו שוב. נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל תמיכת התוכנה של IBM.‏",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "יישומון הדואל אינו יכול לצרף את הקובץ להודעת דואל.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "המאגר החזיר את ה-URL אל המסמך במבנה לא חוקי.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "סגרו את הדפדפן כולל כל הלשוניות והתחברו שוב. נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל תמיכת התוכנה של IBM.‏",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "לא ניתן ליצור את הצרופה.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "יישומון הדואל אינו יכול לקרוא את ה-URL של המסמך.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "סגרו את הדפדפן כולל כל הלשוניות והתחברו שוב. נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל תמיכת התוכנה של IBM.‏",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "לא ניתן לאחזר את המסמך מהמאגר.‏",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "יתכן שמהלך העבודה שלכם חרג ממגבלת הזמן, או שהמאגר או שרת היישומים אינם פעילים, או שיש בעיה בתצורת לקוח הדפדפן.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "התחברו ונסו לשלוח את המסמך בדואל  שוב. אם הבעיה נמשכת, בקשו ממנהלן המערכת לבדוק את יומני השגיאות של המאגר.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "אם הגדרתם את לקוח הדפדפן להמיר מסמכי AFP למבנה אחר, כגון PDF,‏ לפני משלוח המסמכים כצרופות, בדקו את תצורת המרת המסמכים של AFP.‏ אם המסמך הוא מסמך AFP שהומר למבנה אחר,‏ ודאו שההמרה מוגדרת כהלכה.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "לא ניתן להמיר את המסמך למבנה PDF.‏",
		email_applet_CONVERT_DOC_FAILED_explanation: "הכלי המשמש להמרת מסמכים למבנה PDF אינו תומך בסוג הקובץ.‏",
		email_applet_CONVERT_DOC_FAILED_userResponse: "סגרו דף זה ונסו לשלוח את המסמך בדואל שוב בלי להמיר אותו למבנה PDF.‏",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "הדואל לא נוצר.",
		email_applet_MAPI_USER_ABORT_explanation: "פתחו את יישום הדואל כדי לוודא שהוא עובד. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל מנהלן המערכת ובקשו שיבדוק את יומני האירועים של מערכת ההפעלה.",
		email_applet_MAPI_USER_ABORT_userResponse: "אם התכוונתם לסגור את יישום הדואל, אין צורך בפעולה נוספת. כדי לשלוח את הדואל, התחברו אל יישום הדואל ונסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "לא ניתן ליצור את הדואל.",
		email_applet_MAPI_FAILURE_explanation: "יתכן שלקוח הדואל שלכם אינו פתוח או שאינכם מחוברים.",
		email_applet_MAPI_FAILURE_userResponse: "פתחו את יישום הדואל כדי לוודא שהוא עובד. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל מנהלן המערכת ובקשו שיבדוק את יומני האירועים של מערכת ההפעלה.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "לא ניתן ליצור את הדואל.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "אינכם מחוברים אל לקוח הדואל שלכם. לקוח הדואל חייב להיות פתוח ועליכם להיות מחוברים כדי לשלוח הודעה מלקוח הדפדפן.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "פתחו את לקוח הדואל והתחברו. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "לא ניתן ליצור את הדואל מפני שלא ניתן ליצור את הקובץ הזמני בתחנת העבודה שלכם.",
		email_applet_MAPI_DISK_FULL_explanation: "יתכן שהמדריך הזמני בתחנת העבודה שלכם מלא.",
		email_applet_MAPI_DISK_FULL_userResponse: "ודאו שיש מספיק מקום במדריך הזמני. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "לא ניתן ליצור את הדואל מפני שאין מספיק זכרון מערכת.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "יתכן שיש יותר מדי יישומים פתוחים.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "סגרו יישומים שאינם בשימוש. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "הגישה אל MAPI חסומה.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "יתכן שגישת MAPI אינה מופעלת לתמוך ביישום הדואל שלכם. MAPI הוא פרוטוקול הדואר וההודעות המשמש להפעלת תקשורת בין לקוח הדפדפן ויישום הדואל.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "פנו אל מנהלן המערכת.‏",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "ודאו שגישת MAPI מוגדרת נכון ביישום הדואל. אם הבעיה נמשכת, פנו אל תמיכת התוכנה של IBM.‏",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "לא ניתן ליצור את הצרופה או הקישור לפריט.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "יתכן שיש לכם יותר מהלכי דפדפן פתוחים.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "סגרו מהלכי דפדפן שאינם בשימוש. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב. אם הבעיה נמשכת, פנו אל מנהלן המערכת.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "לא ניתן לשלוח את הדואל.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "יתכן שאתם שולחים צרופות רבות מדי.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "בחרו פחות קבצים. לאחר מכן נסו לשלוח את המסמכים מלקוח הדפדפן שוב.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "לא ניתן לשלוח את הדואל.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "יתכן שאתם שולחים את הודעת הדואל לנמענים רבים מדי.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "שלחו את ההודעה לפחות נמענים.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "לא ניתן ליצור את הצרופה.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "יתכן שקבצים זמניים דרושים נמחקו לפני שהיה ניתן ליצור את הצרופה. שגיאה זו יכולה להתרחש אם מטמון הדפדפן מנוקה לפני שהדואל נשלח.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "לא ניתן ליצור את הצרופה.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "יתכן שקבצים זמניים דרושים נמחקו לפני שהיה ניתן ליצור את הצרופה. שגיאה זו יכולה להתרחש אם מטמון הדפדפן מנוקה לפני שהדואל נשלח.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "יישום הדואל אינו יכול ליצור את הצרופה.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "לקוח הדואל אינו יכול לשלוח לנמען שצוין.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "יתכן שהנמען אינו קיים בפנקס הכתובות.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "בדקו את שם הנמען ונסו לשלוח את המסמך שוב.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "לקוח הדואל אינו יכול לשלוח לנמען שצוין.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "יתכן שמבנה כתובת הדואל אינו תקין.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "ודאו שציינתם כתובת דואל חוקית ונסו לשלוח את המסמך שוב.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_NO_MESSAGES_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "לא ניתן לשלוח את הדואל.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "יתכן שהודעת הדואל ארוכה מדי.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "קצרו את תמליל הדואל ושלחו אותו שוב.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "לא ניתן ליצור את הדואל.",
		email_applet_MAPI_INVALID_SESSION_explanation: "יתכן שהיה כשל בלקוח הדואל בנסיון ליצור את הדואל.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "הפעילו מחדש את לקוח הדואל. לאחר מכן נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "ייתכן שמבנה הודעת הדואל אינו תקין.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "לקוח הדואל אינו יכול לשלוח לנמען שצוין.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "יתכן שמבנה כתובת הדואל אינו תקין.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "ודאו שציינתם כתובת דואל חוקית ושלחו את המסמך שוב.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "לקוח הדואל אינו יכול לבצע את הפעולה המבוקשת.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "יישום הדואל החזיר שגיאה לא צפויה.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "נסו לשלוח את המסמך מלקוח הדפדפן שוב.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "באחת התכונות חסר מספר הערכים הדרוש.",
		error_property_cardinality_explanation: "לתכונות מסוימות יש מספר ערכים מזערי ומרבי דרוש.",
		error_property_cardinality_userResponse: "השתמשו בעזרה המרחפת כדי לברר איזו תכונה דורשת מספר ערכים מזערי. ציינו את מספר הערכים המזערי ונסו שוב.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "דרוש שם קובץ.‏",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "ציינו שם קובץ ונסו שוב.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "התוסף ${0} מכיל שגיאות.",
		plugin_error_explanation: "אירעה שגיאה בבדיקת קוד JavaScript עבור התוסף ${0}. אם תמשיכו להשתמש בלקוח הדפדפן, יתכן שתתקלו בשגיאות נוספות.",
		plugin_error_userResponse: "פנו אל מנהלן המערכת.‏",
		plugin_error_adminResponse: "יש בעיה בתוסף שספק התוסף צריך לפתור אותה. מומלץ לסלק את התוסף מתצורת לקוח הדפדפן עד שהבעיה בתוסף תיפתר.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "לא ניתן לפתוח את תבנית הקלט.",
		open_old_format_entry_template_error_explanation: "תבנית הקלט משתמש במבנה ישן יותר שאינו נתמך בלקוח הדפדפן.",
		open_old_format_entry_template_error_userResponse: "בקשו ממנהלן המערכת לעדכן את תבנית הקלט.",
		open_old_format_entry_template_error_adminResponse: "שמרו גרסה מעודכנת של תבנית הקלט באמצעות Application Engine או Workplace XT Entry Template Designer.‏",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "לא ניתן לפתוח את תבנית הקלט.",
		open_custom_object_entry_template_error_explanation: "לקוח הדפדפן אינו תומך בסוגים אלה של קלט: תבנית קלט מותאמת לאובייקטים.",
		open_custom_object_entry_template_error_userResponse: "פתיחת תבנית קלט שונה.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "לא ניתן לפתוח את אובייקט eforms.‏",
		open_forms_object_error_explanation: "לקוח הדפדפן אינו תומך בסוגים אלה של אובייקט eforms:‏ תבנית טופס, נתוני טופס, מדיניות ומסמך ומדיניות תזרים-עבודה.",
		open_forms_object_error_userResponse: "פתחו מסמך שונה.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "לא ניתן להשתמש בתבנית הקלט ${0}",
		entry_template_folder_restricted_error_explanation: "תבנית הקלט מוסיפה פריטים לתיקיה ‎${1}‎,‏ ואין לכם הרשאות מתאימות להוספת פריטים לתיקיה זו.",
		entry_template_folder_restricted_error_userResponse: "בחרו תבנית קלט שונה או בקשו ממנהלן המערכת לתת לכם הרשאות מתאימות לתיקיה ‎${1}‎.‏",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "לא ניתן לפתוח את תבנית הקלט.",
		open_records_entry_template_error_explanation: "לקוח הדפדפן אינו תומך בסוגים אלה של קלט: תבנית קלט להכרזה כרשומה.",
		open_records_entry_template_error_userResponse: "פתיחת תבנית קלט שונה.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "לא ניתן לפתוח את תזרים-העבודה.",
		open_workflow_error_explanation: "לקוח הדפדפן אינו תומך בפתיחת תזרימי-עבודה.",
		open_workflow_error_userResponse: "פתחו מסמך שונה.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "לא ניתן לפתוח את המסמך.",
		viewer_unable_to_view_error_explanation: "לא מוגדר מציג עבור מסמכים מסוג זה, או שהמציג שהוגדר אינו תואם למערכת שלכם.",
		viewer_unable_to_view_error_userResponse: "בקשו מהמנהלן להגדיר מציג להצגת מסמכים מסוג זה וודאו שהמציג שהוגדר פועל כראוי במערכת של המשתמש.",
		viewer_unable_to_view_error_adminResponse: "השתמשו בכלי המנהלה כדי להגדיר מציג להצגת סוג מסמך זה.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "לא ניתן לפתוח את החיפוש.",
		search_cannot_open_error_explanation: "מאפיין החיפוש אינו מוגדר עבור שולחן עבודה זה.",
		search_cannot_open_error_userResponse: "בררו אצל המנהלן אם יש לכם גישה לשולחן עבודה הכולל את מאפיין החיפוש או אם אפשר לעדכן שולחן עבודה זה כך שיכלול את מאפיין החיפוש.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "המסמך לא נטען.",
		viewer_document_load_failed_error_explanation: "מציג Daeja ViewONE Professional לא הצליח לפתוח את המסמך.",
		viewer_document_load_failed_error_userResponse: "כדי לקבל מידע נוסף, ראו את הודעת השגיאה המוצגת במציג.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "לא ניתן להציג את המסמך.",
		viewer_session_expired_explanation: "לא ניתן לאחזר את תוכן המסמך.",
		viewer_session_expired_userResponse: "נסו להתחבר שוב. אם הבעיה נמשכת, יתכן ששרת היישומים אינו פעיל. בקשו ממנהלן המערכת לבדוק את יומני השגיאות של IBM Content Navigator או להפעיל את השרת מחדש.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "לא ניתן להציג את המסמך.",
		ajaxViewer_getPage_failed_explanation: "מציג AJAX קיבל תגובת שגיאה בזמן אחזור תוכן הדף. יתכן ששרת היישומים אינו פעיל.",
		ajaxViewer_getPage_failed_userResponse: "סגרו את הדפדפן והתחברו שוב. אם הבעיה נמשכת, בקשו ממנהלן המערכת לבדוק את יומני השגיאות של שרת היישומים או להפעיל את השרת מחדש.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "לא נמצא JRE בתחנת העבודה שלכם.",
		viewer_java_plugin_not_found_explanation: "התוסף לא נמצא, או שלא מותקנת גרסת JRE נכונה.",
		viewer_java_plugin_not_found_userResponse: "בדקו אם ה-JRE מותקן. לדוגמה, בשורת פקודה, הקלידו את הפקודה שלהלן:  Java ‎-version.‏ אם ה-JRE אינו מותקן או מותקן בגרסה לא נכונה, התקינו את הגרסה הנכונה של ה-JRE. רשימת גרסאות JRE הנתמכות כלולה במסמך <i>Hardware and software prerequisites for IBM Web Interface for Content Management</i> באתר תמיכת התוכנה של IBM.‏",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "לא ניתן להציג את המסמך בדפדפן שלכם.",
		viewer_pdf_plugin_not_found_explanation: "התוסף המשמש להצגת מסמכי PDF בדפדפן לא נמצא.",
		viewer_pdf_plugin_not_found_userResponse: "קובץ ה-PDF יורד לתחנת העבודה שלכם במקום שיוצג בחלון המציג.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "לא ניתן להוסיף את הפריט שלהלן למאגר: ${0}.",
		add_document_single_item_error_explanation: "סיבות אפשריות לשגיאה:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>אתם מנסים להוסיף מסמך שהועבר או נמחק.</li>" + "<li>אתם מנסים להוסיף מסמך ששמו שונה.</li>" + "<li>אתם מנסים להוסיף מסמך פגום.</li>" + "<li>אתם מנסים להוסיף מסמך הפתוח ביישום אחר.</li>" + "<li>אתם מנסים להוסיף תיקיה למאגר.</li>" + "<li>אין לכם הרשאות מתאימות במערכת ההפעלה לגישה אל המסמך.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "בצעו את הפעולה המתאימה כדי לפתור את הבעיה:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>אם המסמך הועבר או ששמו שונה, אתרו את המסמך במערכת הקבצים ונסו להוסיף אותו שוב.</li>" + "<li>אם המסמך פתוח ביישום אחר, סגרו אותו ונסו להוסיף אותו שוב.</li>" + "</ul>" + "<br>אינכם יכולים להוסיף תיקיות למאגר.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "לא ניתן להוסיף את ${0} הפריטים שלהלן למאגר: ${1}.",
		add_document_multiple_items_error_explanation: "בעיה באחד הפריטים מונעת את הוספת הפריטים למאגר. סיבות אפשריות לשגיאה:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>אתם מנסים להוסיף מסמך שהועבר או נמחק.</li>" + "<li>אתם מנסים להוסיף מסמך ששמו שונה.</li>" + "<li>אתם מנסים להוסיף מסמך פגום.</li>" + "<li>אתם מנסים להוסיף מסמך הפתוח ביישום אחר.</li>" + "<li>אתם מנסים להוסיף תיקיה למאגר.</li>" + "<li>אין לכם הרשאות מתאימות במערכת ההפעלה לגישה אל המסמך.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "בצעו את הפעולה המתאימה כדי לפתור את הבעיה:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>אם המסמך הועבר או ששמו שונה, אתרו את המסמך במערכת הקבצים ונסו להוסיף את הפריט שוב.</li>" + "<li>אם המסמך פתוח ביישום אחר, סגרו אותו ונסו להוסיף את הפריטים שוב.</li>" + "<li>אם מסמך נמחק או נפגם, בטלו את הבחירה בפריט ונסו להוסיף את שאר הפריטים שוב.</li>" + "</ul>" + "<br>אינכם יכולים להוסיף תיקיות למאגר.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "אינכם יכולים לגרור ולשחרר פריטים ממיקום זה.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "לא ניתן לפתוח את אובייקט eforms.‏",
		open_forms_work_object_error_explanation: "לקוח הדפדפן אינו תומך בסוג זה של אובייקט eforms:‏ מדיניות תזרים-עבודה",
		open_forms_work_object_error_userResponse: "פתחו מסמך שונה.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "לא ניתן לפתוח את המסמך.",
		viewer_privilege_to_view_error_explanation: "אין לכם הרשאות מתאימות להצגת המסמך.",
		viewer_privilege_to_view_error_userResponse: "בקשו מהבעלים של המסמך או ממנהלן המערכת לספק לכם את ההרשאות המתאימות להצגת המסמך.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "לא ניתן להוסיף את הפריטים למאגר.",
		add_document_too_many_items_error_explanation: "תוכלו להוסיף עד ${0} פריטים בכל פעם. אתם מנסים להוסיף ${1} פריטים.",
		add_document_too_many_items_error_userResponse: "סלקו חלק מהפריטים מהרשימה ונסו להוסיף את הפריטים שוב. תוכלו גם לפנות למנהלן המערכת כדי להגדיל את מספר המסמכים המרבי שתוכלו להוסיף בבת אחת לשולחן עבודה זו.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "לא ניתן להקים חיבור ללקוח הדפדפן באמצעות URL זה: ‎${0}‎.‏",
		http_ltpa_expired_explanation: "מפתח LTPA המשויך למהלך הדפדפן שלכם כבר אינו בתוקף.",
		http_ltpa_expired_userResponse: "הפעילו את הדפדפן מחדש ונסו להתחבר שוב. אם הבעיה נמשכת, דווחו על הבעיה שלהלן למנהלן המערכת: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "לא ניתן להוסיף את המסמך לתיקיה ‎${0}‎.‏",
		dnd_no_privilege_error_explanation: "הרשאות התיקיה מונעות הוספת מסמכים לתיקיה.",
		dnd_no_privilege_error_userResponse: "הוסיפו את המסמך לתיקיה אחרת.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "לא ניתן לשנות את הפריטים.",
		modify_document_too_many_items_error_explanation: "תוכלו לשנות עד ${0} פריטים בכל פעם. אתם מנסים לשנות ${1} פריטים.",
		modify_document_too_many_items_error_userResponse: "בחרו פחות פריטים ונסו לשנות את הפריטים שוב. תוכלו גם לפנות למנהלן המערכת כדי להגדיל את מספר הפריטים המרבי שתוכלו לשנות בבת אחת לשולחן עבודה זו.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "לא ניתן להשתמש במחלקה ${0}",
		add_document_multiple_unique_values_error_explanation: "המחלקה ${0} מכילה תכונה אחת או יותר הדורשות ערך ייחודי עבור כל מסמך. כשאתם מוסיפים מסמכים מרובים, כל המסמכים משתמשים באותם ערכים.",
		add_document_multiple_unique_values_error_userResponse: "בחרו מחלקה שונה או הוסיפו את המסמכים בנפרד.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "לא ניתן להשתמש בתבנית הקלט ${0}",
		add_document_multiple_unique_values_entry_template_error_explanation: "תבנית הקלט ${0} דורשת שתוסיפו מסמכים למחלקה ${1}.‏ אולם המחלקה ${1} מכילה תכונה אחת או יותר הדורשות ערך ייחודי עבור כל מסמך. כשאתם מוסיפים מסמכים מרובים, כל המסמכים משתמשים באותם ערכים.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "בחרו תבנית קלט שונה או הוסיפו את המסמכים בנפרד.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "לא ניתן להשתמש בתבנית הקלט ${0}",
		entry_template_class_restricted_error_explanation: "תבנית הקלט מוסיפה פריטים באמצעות המחלקה ${1},‏ ואין לכם הרשאות מתאימות להוספת פריטים באמצעות מחלקה זו.",
		entry_template_class_restricted_error_userResponse: "בחרו תבנית קלט שונה או בקשו ממנהלן המערכת לתת לכם הרשאות מתאימות להוספת פריטים באמצעות המחלקה ${1}.‏",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "לא ניתן להקצות את פריט העבודה מחדש למשתמש אחר.",
		process_reassign_error_explanation: "תזרים-העבודה אוסר על פעולה זו.",
		process_reassign_error_userResponse: "תוכלו לפתוח את פריט העבודה ולהשלים את הצעד הנוכחי בפריט העבודה.  כדי לקבל מידע נוסף על בעיה זו, בקשו מהבעלים של הפריט לוודא שאפשר להקצות את פריט העבודה מחדש.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "לא ניתן לטעון את הפעולה המותאמת שלהלן: ${0}",
		customaction_loadurl_error_explanation: "הפעולה המותאמת אינה נמצאת במיקום נגיש. ה-URL הנוכחי של הפעולה המותאמת הוא ‎${1}‎.‏",
		customaction_loadurl_error_userResponse: "בקשו מהמנהלן להעביר את הפעולה המותאמת למיקום נגיש.",
		customaction_loadurl_error_adminResponse: "יש לספק את קובץ ה-JSP המגדיר את הפעולה המותאמת כחלק מיישום הרשת eClient או יישום הרשת IBM Content Navigator.‏",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "המאפיין שלהלן לא נמצא: ${0}.",
		feature_invalid_explanation: "בעיה זו עלולה להתרחש עם המאפיין אינו זמין בשולחן העבודה שצוין או ששם המאפיין אינו מאוית נכון.",
		feature_invalid_userResponse: "כשתלחצו על 'אישור', תנותבו אל המאפיין המחדלי עבור שולחן עבודה זה. פנו אל מנהלן המערכת כדי לדווח על בעיה זו.",
		feature_invalid_adminResponse: "אם המאפיין אמור להיות זמין בשולחן העבודה, עדכנו את תצורת שולחן העבודה בכלי המנהלה. אם המאפיין אינו אמור להיות כלול בשולחן העבודה או אינו מאוית נכון, פנו למפתח היישום שיצר את ה-URL למאפיין זה כדי לעדכן את ה-URL.‏",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "לא ניתן לפתוח את החיפוש ${0}.‏",
		search_unsupportedTeamspaceSearch_error_explanation: "עליכם להיות במרחב צוות כדי לפתוח חיפוש זה.",
		search_unsupportedTeamspaceSearch_error_userResponse: "בחרו חיפוש שונה.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "לא ניתן ליבא את הקובץ שלהלן: ${0}",
		wrong_import_file_type_error_explanation: "הקובץ חייב להיות קובץ תכונות.",
		wrong_import_file_type_error_userResponse: "בחרו את קובץ התכונות שיצאתם מכלי המנהלה.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "המאגר ${0} לא נמצא בשולחן העבודה ${1}.‏",
		browse_repository_not_found_error_explanation: "המאגר חייב להימצא בשולחן העבודה ומאפיין העיון חייב להיות מופעל עבורו כשהוא מצוין בפרמטר URL.‏",
		browse_repository_not_found_error_userResponse: "ודאו שזיהוי המאגר שצוין ב-URL נכון, שהמאגר נוסף אל שולחן העבודה ${1},‏ ושמאפיין העיון מופעל עבור המאגר.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "מאפיין העיון אינו מופעל עבור המאגר ${0} בשולחן העבודה ${1}.‏",
		browse_repository_not_enabled_error_explanation: "מאפיין העיון חייב להיות מופעל במאגר כשהוא מצוין בפרמטר URL.‏",
		browse_repository_not_enabled_error_userResponse: "הפעילו את מאפיין העיון עבור המאגר ${0} בשולחן העבדוה ${1}.‏",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "לא ניתן להשלים את החיפוש מפני שהקישור כולל קריטריונים לא חוקיים.",
		invalid_xt_stored_search_criteria_error_explanation: "הערך שלהלן אינו חוקי: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "בקשו מהמנהלן לספק קישור מעודכן.",
		invalid_xt_stored_search_criteria_error_adminResponse: "ערכו את זוג שם-ערך המתאים ב-URL.‏ אם אינכם יודעים את הערכים החוקיים עבור התכונה, פתחו את החיפוש המאוחסן בתוך FileNet Workplace XT search designer כדי לברר את הערכים החקייים.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "לא ניתן לפתוח את החיפוש חוצה-המאגרים.",
		unified_search_invalid_fixed_value_error_explanation: "החיפוש חוצה-המאגרים כולל קריטריונים חוקיים.‏ בעיה זו יכולה להתעורר כשלקריטריון יש ערך קבוע שאינו תואם לתכונות האחרות במיפוי. לדוגמה, בעיה זו יכולה להתרחש אם הערך הקבוע הוא מחרוזת אך התכונות האחרות במיפוי הן מספרים שלמים.",
		unified_search_invalid_fixed_value_error_userResponse: "אם יש לכם הרשאות מתאימות לעריכת החיפוש, סלקו את הקריטריונים הלא חוקיים ושמרו את החיפוש שוב. אם אין לכם הרשאות מתאימות לעריכת החיפוש, בקשו מהבעלים של החיפוש או ממנהלן המערכת לשמור את החיפוש עבורכם.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "לא ניתן להשלים את בקשתכם.",
		launch_action_invalid_json_error_explanation: "הנתונים שהועברו ללקוח הדפדפן אינם חוקיים.",
		launch_action_invalid_json_error_userResponse: "דווחו למנהלן המערכת באיזה יישום השתמשתם כשהבעיה אירע.",
		launch_action_invalid_json_error_adminResponse: "יישום הלקוח לא שלוח אובייקט JSON חוקי ללקוח הדפדפן. פנו אל תמיכת התוכנה של IBM כדי לקבל סיוע נוסף.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "לא ניתן להשלים את בקשתכם.",
		launch_action_not_found_error_explanation: "הפעולה ${0} אינה מוגדרת עבור תפריטים כלשהם בשולחן העבודה של ${1}.‏",
		launch_action_not_found_error_userResponse: "בקשו ממנהלן המערכת להגדיר את שולחן העבודה של ${1} כך שישתמש בתפריט המכיל את הפעולה ${0},‏ או להקצות לכם שולחן עבודה הכולל את הפעולה ${0}.‏",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "לא ניתן להשלים את בקשתכם.",
		launch_action_repository_not_found_error_explanation: "המאגר ${0} אינו משויך לשולחן העבודה ${1}.‏",
		launch_action_repository_not_found_error_userResponse: "בקשו ממנהלן המערכת לשייך את המאגר ${0} לשולחן העבודה של ${1},‏ או להקצות לכם שולחן עבודה הכולל את המאגר ${0}.‏",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "לא ניתן לפתוח את מרחב הצוות.",
		teamspace_cannot_open_error_explanation: "מאפיין מרחבי הצוות אינו מוגדר עבור שולחן עבודה זה.",
		teamspace_cannot_open_error_userResponse: "בררו אצל המנהלן אם תוכלו לקבל גישה לשולחן עבודה הכולל את מאפיין מרחבי הצוות או אם אפשר לעדכן שולחן עבודה זה כך שיכלול את מאפיין מרחבי הצוות.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "אירעה שגיאה במהלך הפקדת התוכן שנערך.",
		viewer_redaction_checkin_failed_explanation: "המציג קיבל תגובת שגיאה במהלך הפקדת התוכן שנערך.",
		viewer_redaction_checkin_failed_userResponse: "בקשו ממנהלן המערכת לבדוק את קובצי היומן של שרת היישומים.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "אינכם יכולים להוסיף מסמכים למאגר זה.",
		add_document_odserver_odwek_version_od_error_explanation: "הOaגירסה הנוכחית של שרת  IBM Content Manager OnDemand או של  ODWEK אינה ברמה המינימלית הנדרשת לשם תמיכה בהוספת מסמכים למאגר של  Content Manager OnDemand",
		add_document_odserver_odwek_version_od_error_userResponse: "בקשו מהמנהלן שלכם לבדוק איזה גירסאות של שרת  Content Manager OnDemand Server ושל  ODWEK נדרשות לשם הוספת מסמכים למאגר של Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "לא ניתן להוסיף את הפריטים למאגר.",
		add_document_too_many_items_od_error_explanation: "למאגרים של Content Manager OnDemand של IBM אפשר להוסיף פריט אחד בלבד בכל פעם.",
		add_document_too_many_items_od_error_userResponse: "סלקו חלק מהפריטים מהרשימה ונסו להוסיף את הפריטים שוב, פריט אחד בכל פעם.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "לא ניתן להוסיף את הפריט למאגר.",
		add_document_filesize_empty_od_error_explanation: "אין אפשרות להוסיף קבצים ריקים למאגר של Content Manager OnDemand של IBM.",
		add_document_filesize_empty_od_error_userResponse: "הוסיפו תכנים לקובץ ונסו שוב להוסיף את הקובץ, או הוסיפו פריט שונה.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "לא ניתן לפתוח את החיפוש חוצה-המאגרים.",
		unified_search_repository_not_found_error_explanation: "החיפוש חוצה-המאגרים מכיל מאגר לא חוקי אחד או יותר. בעיה זו יכולה להופיע אם מאגר או מאגרים הכלולים בחיפוש נמחקו מהיישום או סולקו משולחן העבודה הנוכחי.",
		unified_search_repository_not_found_error_userResponse: "אם יש לכם הרשאות מתאימות לעריכת החיפוש, שמרו את החיפוש שוב. כשתשמרו את החיפוש, לקוח הדפדפן יסלק את המאגרים הלא חוקיים מהחיפוש. אם אין לכם הרשאות מתאימות לעריכת החיפוש, בקשו מהבעלים של החיפוש או ממנהלן המערכת לשמור את החיפוש עבורכם.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "לא ניתן ליצור מסמך חדש.",
		edit_document_using_office_online_error: "לא ניתן לפתוח את המסמך.",
		edit_document_using_office_online_error_explanation: "כתובת ה-URL של שרת Microsoft Office Online לא מוגדרת.",
		edit_document_using_office_online_error_userResponse: "לפני שתוכלו להשתמש ב-Office Online, על המנהלן לאפשר שרת Office Online במאגר ולציין את כתובת ה-URL של שרת Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "לא ניתן לפתוח את המסמך ב-Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "בקשו מהמנהלן שלכם לעדכן את שילוב שרת MS Office Online.<br><br> אם המשתמש זקוק לגישה למסמך זה מ-Microsoft Office Online, עברו לדף שילוב העריכה עבור המאגר ועדכנו את שילוב השרת של MS Office Online כדי שיכלול את המחלקה ברשימת המחלקות שניתן לשנות על מנת להוסיף תמיכה ב-Office Online. ",		
		browser_not_support_this_viewer: "המציג שנקבעה תצורתו לא תואם לדפדפן שלכם.",
		browser_not_support_this_viewer_explanation: "הדפדפן לא תומך ב${0}.",
		browser_not_support_this_viewer_userResponse: "השתמשו במציג אחר כדי לפתוח את המסמך. רשימת הדפדפים הנתמכים כלולה במסמך <i>Hardware and software prerequisites for IBM Web Interface for Content Management</i> באתר תמיכת התוכנה של IBM.‏",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "פרטי תזרים-עבודה",
		process_information_info_text: "הפריט שנבחר פתוח רץ כרגע בתזרימי-העבודה שלהלן.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "שווה",
		operator_NOTEQUAL: "לא שווה",
		operator_LIKE: "כמו",
		operator_STARTSWITH: "מתחיל עם",
		operator_ENDSWITH: "מסתיים עם",
		operator_NOTLIKE: "לא כמו",
		operator_NULL: "ריק",
		operator_NOTNULL: "אינו ריק",
		operator_LESS: "קטן מ-",
		operator_LESSOREQUAL: "קטן או שווה",
		operator_GREATER: "גדול מ-",
		operator_GREATEROREQUAL: "גדול או שווה",
		operator_BETWEEN: "בין",
		operator_NOTBETWEEN: "לא בין",
		operator_IN: "הכללת הכל",
		operator_INANY: "הכללת כלשהו",
		operator_NOTIN: "סינון הכל",
		operator_CONTAINS: "מכיל",

		/* SearchForm widget */
		search_button_tooltip: "חיפוש מסמכים התואמים לקריטריונים שלכם.",
		reset_button_tooltip: "החזרת החיפוש לערכי ברירת המחדל שקבע המנהלן.",
		clear_button_tooltip: "סילוק כל הערכים שצוינו עבור החיפוש.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "בחירת חיפוש",
		append_to_search: "צירוף לחיפוש",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "חיפוש חדש",
		new_unified_search: "חיפוש חוצה-מאגרים חדש",
		searh_name_contains: "שם החיפוש מכיל",
		keep_search_criteria_expanded: "השארת הקריטריונים לחיפוש פתוחים",
		showing_results: "מוצגות תוצאות עבור:",
		open_in_new_window: "פתיחה בחלון חדש",
		open_in_new_tab: "פתיחה בלשונית חדשה",
		close_tab: "סגירת לשונית",
		add_repository: "הוספת מאגר",
		edit_repository: "עריכת מאגר",
		remove_repository: "סילוק",
		search_scope: "היקף חיפוש",
		search_class_template: "מחלקה",
		object_type_version: "סוג אובייקט וגרסה",
		not_applicable: "לא ישים",
		unified_search_including_subfolders: " (כולל תת-תיקיות)",
		unified_search_dialog_intro_text: "בחרו את המאגר ואת החיפוש או המחלקות שייכלו בחיפוש.",
		unified_search_class_or_template: "מחלקה או תבנית",

		select_object_fieldset_legend: "איך ברצונכם לאתר פריטים לצירוף:",
		select_object_create_new_search: "חיפוש חדש",
		select_object_search_template: "חיפוש קיים",

		search_criteria: "קריטריונים לחיפוש:",
		search_criteria_no_colon: "קריטריונים לחיפוש",
		search_in_multiple: "חיפוש בתוך (${0}):",
		search_location_including_subfolders: "${0} כולל תת-תיקיות",
		search_class: "מחלקה:",
		search_class_multiple: "מחלקה (${0}):",
		search_class_including_subclasses: "${0} כולל תת-מחלקות",
		search_class_all_pseudo: "הכל",
		search_results: "תוצאות חיפוש",
		select_operator: "בחירת אופרטור",
		ending_value: "ערך הסיום של התכונה ${0} הוא:",
		search_options: "אפשרויות חיפוש:",
		search_version: "גרסה:",
		search_released_version: "גרסה מופצת",
		search_current_version: "גרסה נוכחית",
		search_all_versions: "כל הגרסאות",
		search_file_type_filter: "מסנן סוג קובץ:",
		search_one_file_type: "1 סוג קובץ",
		search_many_file_types: "${0} סוגי קבצים",
		search_action_filter: "מסנן פעולות:",
		search_action_filter_hover_help: "צמצום התוצאות כך שיכללו רק קבצים שמשתמשים ביצעו עליהם פעולה מסוימת.<br/>לדוגמה, תוכלו לחפש רק מסמכים שהוספתם ב-20 בספטמבר 2012.",
		search_action_filter_enabled: "מסנן הפעולות מופעל",
		search_enable: "הפעלה",
		search_disable: "השבתה",
		search_by: "על ידי",
		search_added: "נוסף",
		search_modified: "שונה",
		search_checked_out: "נמשך",
		search_date_operator_on: "מופעל",
		search_date_operator_not_on: "לא בתאריך",
		search_date_operator_before: "לפני",
		search_date_operator_after: "אחרי",
		search_version_hover_help_p8: "גרסה מופצת זמינה לכל המשתמשים. אם מסמך הוא 'גרסה נוכחית' פירוש הדבר הוא שמשתמש או משתמשים עורכים את המסמך.",
		search_version_hover_help_cm: "גרסה נוכחית היא הגרסה האחרונה של הפריט.",
		search_using: "חיפוש פריטים התואמים:",
		search_property_and_text_criteria: "הן ערכי תכונות והן קריטריוני תמליל",
		search_property_or_text_criteria: "או ערכי תכונות או קריטריוני תמליל",
		search_property_and_text: "הן קריטריוני תכונות והן קריטריוני תמליל",
		search_property_or_text: "או קריטריוני תכונות או קריטריוני תמליל",
		search_property_options: "אפשרויות תכונות:",
		search_property_option_match_all: "כל התכונות",
		search_property_option_match_any: "תכונה כלשהי מהתכונות",
		search_property_option_match_all_summary: "התאמת הכל",
		search_property_option_match_any_summary: "התאמת כלשהו",
		search_total_count_type_total: "סך הכל",
		search_total_count_type_atleast: "לפחות",
		search_content_size_filter: "מסנן גודל של תוכן:",
		search_content_size_filter_any: "תוכן מכל גודל",

		/* Search work options */
		search_work_filter: "מסנן פריטי עבודה:",
		search_work_filter_hover_help: "צמצום התוצאות כך שיכללו רק פריטים הנמצאים בתזרים-עבודה. לדוגמה, תוכלו לצמצם את התוצאות כך שיכללו רק פריטים עבודה במצב פעיל.<br /><br />אפשרות זו אינה רלוונטית אם ברצונכם לראות את כל הגרסאות של הפריטים המוחזרים על ידי החיפוש.",
		search_work_filter_enabled: "מסנן פריטי העבודה מופעל",
		search_work_filter_status: "מצב:",
		search_work_filter_step: "צעד:",
		search_work_filter_owner: "בעלים:",
		search_work_filter_status_all: "כל הפריטים",
		search_work_filter_status_active: "פריטים פעילים",
		search_work_filter_status_suspended: "פריטים מושעים",
		search_work_filter_process_all: "כל תזרימי-העבודה",
		search_work_filter_step_all: "כל הצעדים",
		search_work_filter_owner_all: "כל המשתמשים",
		search_work_filter_step_error: "שם הצעד אינו קיים.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "לא ניתן להשלים את החיפוש ללא מידע נוסף. ציינו ערך עבור תנאי אחד לפחות.",
		search_insufficient_input_box: "לא ניתן להשלים את החיפוש ללא מידע נוסף. הזינו קריטריונים לחיפוש תמליל או בחרו בתבנית מטא-נתונים.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "לא ניתן להגדיר את החיפוש להרצה עם הפתיחה ללא מידע נוסף. ציינו ערך עבור תנאי אחד לפחות.",
		search_member_required: "כדי לשתף חיפוש זה עם משתמשים וקבוצות ספציפיים, בחרו לפחות משתמש אחד או קבוצה אחת שאתם ישותף החיפוש.",
		search_criteria_layout_and: "וגם",
		search_criteria_layout_or: "או",
		search_prompt_close_without_save: "האם ברצונכם לסגור בלי לשמור את השינויים?‏",
		search_prompt_close_all_without_save: "האם ברצונכם לסגור את כל הלשוניות בלי לשמור את השינויים?‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "אחד מהסוגים שלהלן של קריטריוני חיפוש אינו חוקי עבור מאגר זה: ${0}. כדי להריץ את החיפוש בלקוח הדפדפן, יש לסלק את הקריטריונים הלא חוקיים. אם שמרתם את החיפוש, הקריטריונים הלא חוקיים יסולקו. אם אינכם רוצים לשנות את החיפוש, סגרו את החיפוש.",
		search_invalid_repository: "מאגר אחד או יותר",
		search_invalid_class: "מחלקה אחת או יותר",
		search_invalid_folder: "תיקיה אחת או יותר",
		search_invalid_file_type: "סוג קובץ אחד או יותר",
		search_invalid_property: "תכונה אחת או יותר",
		search_invalid_text_search: "קריטריונים לחיפוש תמליל",
		search_invalid_work: "קריטריונים לסינון פריטי עבודה",

		search_operator_pulldown_missing: "דרוש אופרטור. בחרו אופרטור מהתפריט הנפתח. אם אינכם רואים אופרטורים, בקשו ממנהלן המערכת לבדוק את הלשונית <b>חיפוש</b> בכלי המנהלה כדי לראות אם כל האופרטורים מוסתרים. אם זהו חיפוש חוצה-מאגרים, יתכן שהתפריט הנפתח לא יכיל אופרטורים אם לתכונות הממופות זו לזו אין אופרטורים משותפים.",

		/*SearchBuilder */
		open_search_builder: "חיפוש חדש",
		document_type: "מחלקה",
		show_all_properties: "הצגת כל התכונות",
		text_search_label: "איתור פריטים עם המונחים האלה:",
		text_search_place_holder: "השתמשו בשילוב של מונחים ואופרטורים: * או ? or \"ביטויים זהים\"",
		text_search_place_holder_box: "יש להשתמש  בשילוב של מונחים ואופרטוריםs: וגם, או, לא, ו \"ביטויים זהים\"",
		text_search_place_holder_cascade_proximity: "השתמשו בשילוב של מונחים ואופרטורים: * או ?",
		text_search_place_holder_common: "השתמשו בשילוב של מונחים \"ביטויים זהים\"",
		text_search_hover_help_p8: "השתמשו בכוכבית (*) או בסימן שאלה (?) כתו ג'וקר. השתמשו במרכאות כפולות (\"\") להתאמות מדויקות.",
		text_search_hover_help_p8_only_crs: "השתמשו בכוכבית (*) או בסימן שאלה (?) כתו ג'וקר. השתמשו במרכאות כפולות (\"\") להתאמות מדויקות. כאשר מגדירים מספר מונחים, חיפוש חוצה מאגרים משיב פריטים המכילים לפחות אחד מהמונחים.",
		text_search_hover_help_cm: "השתמשו בכוכבית (*) או בסימן שאלה (?) כתו ג'וקר. השתמשו במרכאות כפולות (\"\") להתאמות מדויקות. סימן מינוס (-) משמש כקידומת לציון מונחים לסינון, וסימן פלוס (+) כקידומת לציון מונחים להכללה.",
		text_search_hover_help_box: "השתמשו באופרטור AND בין המונחים כדי לקבל התאמה של כל המונחים. השתמשו באופרטור OR בין המונחים כדי לקבל התאמה של כל אחד מהמונחים. השתמשו במרכאות כפולות (\"\") להתאמות מדויקות. הציבו את האופרטור NOT לפני מונח כדי שלא יכלל בחיפוש.",
		text_search_hover_help_common: "השתמשו במרכאות כפולות (\"\") להתאמות מדויקות. כאשר מגדירים מספר מונחים, חיפוש חוצה מאגרים משיב פריטים המכילים את כל המונחים.",
		text_search_options: "אפשרויות תמליל:",
		text_search_options_hover_help: "אם אתם משתמשים באופרטורים מלבד תווי ג'וקר, בחרו אופרטורים מתקדמים.",
		text_search_option_any: "מונח כלשהו מהמונחים",
		text_search_option_all: "כל המונחים",
		text_search_option_proximity: "בקירבה למילים:",
		text_search_option_none: "אופרטורים מתקדמים",
		text_search_option_authoring: "חיפוש התמליל הוא:",
		text_search_option_authoring_hover_help: "בחרו אפשרות שקובעת כיצד קריטריוני חיפוש הטקסט יהיו זמינים למשתמשים. אם אינכם רוצים לכלול קריטריוני חיפוש בחיפוש, הסתירו את האפשרות. לחלופין, תוכלו להתיר עריכה של קריטריוני חיפוש או הפיכתם לנדרשים על-ידי משתמשים וכן להפוך אותם לקריטריונים לקריאה בלבד.",
		text_search_option_hide: "הסתרת קריטריונים",
		text_search_option_hide_hover_help: "בחרו אפשרות זו אם אינכם רוצים לכלול קריטריונים לחיפוש תמליל בחיפוש או לאפשר למשתמשים אחרים לציין קריטריונים לחיפוש תמליל.",
		text_search_option_in: "בתג HTML/XML ${0}",
		text_search_option_paragraph: "באותה פיסקה",
		text_search_option_sentence: "באותו משפט",
		text_search_option_vql: "שאילתת VQL",
		text_search_option_none_hover_help: "- משמש כקידומת לציון מונחים לסינון.",
		text_search_option_cascade_proximity_hover_help: "הגבלת תוצאות החיפוש למונחים המופיעים בטווח של מילים שאינן כוללות התאמות מדויקות.",

		box_search_metadata: "מטה-נתונים:",
		box_search_select_template: "בחירת תבנית",
		box_search_no_templates: "אין תבניות זמינות",
		box_text_search_options_search_within: "היקף חיפוש:",
		box_text_search_options_search_within_everything: "הכול",
		box_text_search_options_search_within_file_content: "תוכן מסמך",
		box_text_search_options_search_within_tags: "תגים",
		box_text_search_options_limit_to: "חיפוש מונח זה בלבד:",

		add_property: "הוספת תכונה",
		edit_template: "עריכת חיפוש",
		save_search: "שמירת חיפוש",
		search_template_name: "שם:",
		search_template_desc: "תיאור:",
		auto_run: "הרצת החיפוש עם פתיחתו",
		show_in_tree: "הצגת החיפוש במבנה התיקיות",
		show_in_tree_hover_help: "אם חיפוש נשמר בתיקיה, הוא מוצג רק ברשימת התוכן כברירת מחדל. אם תבחרו אפשרות זו, החיפוש יוצג גם בעץ התיקיות בתצוגה 'עיון'.  עם זאת, החיפוש מוצג בעץ התיקיות רק אם שמרתם את החיפוש בתיקיה.",
		share_search_with: "שיתוף החיפוש עם:",
		remove_member: "סילוק ${0}",
		ok_button_label: "אישור",
		save_template: "שמירה",
		save_template_title: "אם אתם מחפשים מונחים מסוימים לעתים קרובות, שמרו את הקריטריונים לחיפוש.",
		remove_criterion: "סילוק",
		apply_button_label: "החלה",
		empty_search_results_pane: "הריצו חיפוש כדי לראות את התוצאות.",

		/*Search_in control   */
		folder_tree_repository_root_name: "המאגר כולו",

		repository_already_selected: "לא ניתן להוסיף את המאגר ${0} לחיפוש חוצה-המאגרים מפני שהוא כבר כלול בחיפוש. <br/> אפשר לכלול מאגר בחיפוש חוצה-מאגרים רק פעם אחת. <br/>בחרו מאגר שונה בחיפוש חוצה-המאגרים.",

		repository_limit_reached: "לא ניתן להוסיף את המאגר ${0} לחיפוש חוצה-המאגרים. אפשר להוסיף עד ${1} מאגרים לחיפוש.",

		nomore_criteria_toappend: "כל התכונות הממופות כבר כלולות בקריטריונים לחיפוש. לא נוספו תכונות לקריטריונים לחיפוש.",
		nomore_criteria_toappend_regular: "כל התכונות כבר כלולות בקריטריונים לחיפוש. לא נוספו תכונות לקריטריונים לחיפוש.",

		/* OD Save Search dialog */
		reload_label: "טעינה חוזרת",
		od_save_search_help_text: "הקלידו שם עבור החיפוש או בחרו חיפוש קיים להחלפה",
		public_access_label: "לאפשר לאחרים להשתמש בחיפוש זה",
		od_delete_search_help_text: "בחרו חיפוש או חיפושים למחיקה",
		delete_save_searches: "מחיקת חיפושים שמורים",

		/* Unified Search */
		unified_search_enable_text_search: "יש להכניס קריטריונים לחיפוש בטקסט",
		unified_search_text_search_enabled: "Text Search Included",
		unified_search_mapping: "מיפוי",
		unified_search_new_mapping: "מיפוי חדש",
		unified_search_mapping_name: "שם מיפוי",
		unified_search_mapping_dialog_instructions: "בחרו את התכונות שברצונכם למפות. אפשר למפות חלק מהתכונות לתכונות מסוג נתונים שונה. לדוגמה, תוכלו למפות תכונת מחרוזת לתכונת מספר שלם. כשממפים תכונה לתכונה אחרת, התכונות נחשבות לתכונה אחת בחיפוש חוצה-המאגרים.",
		unified_search_filter_available_properties: "סינון תכונות זמינות",
		unified_search_available_properties: "תכונות זמינות",
		unified_search_mapped_properties: "תכונות ממוזגות",
		unified_search_single_values: "ערכים יחידים",
		unified_search_multiple_values: "ערכים מרובים",
		unified_search_add_mapping: "הוספת מיפוי",
		unified_search_warn_remove_repository: "המאגר שנבחר נמצא בשימוש בקריטריונים לחיפוש.\nאם תסלקו את המאגר, מיפויים וקריטריונים לחיפוש הכוללים את המאגר יימחקו.\n\nהאם ברצונכם לסלק את המאגר?",
		unified_search_warn_update_repository_mappings: "שינוי הבחירה בהגדרות של מאגר זה משפיע על קריטריוני החיפוש.\n\nקריטריוני החיפוש כוללים מיפוי אחד או יותר הכוללים הגדרה אחת או יותר אותם אתם מסירים. כל מיפוי המכיל הגדרות שאתם מסירים צריך להמחק. כל קריטריון חיפוש הכולל מיפויים אלה צריך להמחק בכדי להריץ את החיפוש.\n\nהאם אתם רוצים לעדכן את אפשרויות המאגר ולמחוק את המיפויים וקריטריוני החיפוש?",
		unified_search_warn_update_repository_mappings_reset: "הכללת קריטריוני חיפוש תמליל עבור מאגר זה משפיעה על קריטריוני החיפוש החוצה מאגרים.\n\nיש לנקות כל קריטריון חיפוש תכונות הכולל מיפוי עם תכונות עבור מאגר זה בכדי להריץ את החיפוש.\n\nהאם אתם רוצים לעדכן את אפשרויות המאגר ולנקות את קריטריוני החיפוש?",
		unified_search_warn_update_repository_text_criteria: "הסרת קריטריוני החיפוש בטקסט עבור מאגר זה משפיעה על קריטריוני החיפוש הרב מאגרי.\n\nקריטריון החיפוש בטקסט צריך להמחק מקריטריוני החיפוש הרב מאגרי בכדי להריץ את החיפוש.\n\nהאם תרצו לעדכן את אפשרויות המאגר ולמחוק את קריטריוני החיפוש בטקסט?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "הסרת קריטריוני החיפוש בטקסט ושינוי בחירת ההגדרות עבור מאגר זה משפיעה  על קריטריוני החיפוש הרב מאגריים.\n\nקריטריוני החיפוש בטקסט צריכים להמחק מקריטריוני החיפוש הרב מאגריים על מנת להריץ חיפוש. בנוסף, קריטריוני חיפוש ההגדרות כוללים מיפוי אחד או יותר הכוללים הגדרה אחת או יותר אותן אתם מסירים. כל מיפוי המכיל הגדרות שאתם מסירים צריך להמחק. כל קריטריוני חיפוש הגדרות המכילים מיפויים אלה צריכים להמחק בכדי להריץ את החיפוש.\n\nהאם אתם רוצים לעדכן את אפשרויות המאגר ולמחוק את מאפייני חיפוש הטקסט, המיפויים את קריטריוני חיפוש ההגדרות?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "אי הכללת קריטריוני חיפוש תמליל עבור מאגר זה משפיעה על קריטריוני החיפוש החוצה מאגרים.\n\nיש לנקות כל קריטריון חיפוש תכונות הכולל מיפוי עם תכונות עבור מאגר זה בכדי להריץ חיפוש. יתכן שקריטריוני חיפוש התמליל ימחקו מקריטריוני החיפוש החוצה מאגרים בכדי לאפשר את הרצת החיפוש.\n\nהאם אתם רוצים לעדכן את אפשרויות המאגר ולנקות את קריטריוני החיפוש?",
		unified_search_warn_remove_mapping: "הסרת מיפוי זה משפיעה על קריטריוני החיפוש.\n\nקריטריוני החיפוש המשתמשים במיפוי צריכים להמחק בכדי להריץ חיפוש.\n\nהאם אתם רוצים לעדכן את המיפוי ולמחוק את קריטריוני החיפוש?",
		unified_search_warn_update_mapping: "עריכת שינויים במיפוי זה משפיעה על קריטריוני החיפוש.\n\nיש לסלק את קריטריוני החיפוש המשתמשים במיפוי זה בכדי להבטיח שהחיפוש אינו כולל מפעילים לא תקפים או ערכים לא תקפים.\n\nהאם אתם רוצים לעדכן את המיפויולסלק את קריטריוני החיפוש?",
		unified_search_warn_update_mapping_not_searchable: "עריכת שינויים למיפוי זה משפיעה על קריטריוני החיפוש.\n\nכאשר ההגדרות הממופות הן לצפייה בלבד, אין באפשרותכם להשתמש במיפוי בקריטריוני החיפוש. יש למחוק את קריטריוני החיפוש שעושים שימוש במיפוי בכדי להריץ חיפוש.\n\nאתם רוצים לעדכן את המיפוי ולמחוק את קריטריוני החיפוש?",
		unified_search_warn_update_mapping_box_searchable: "עריכת שינויים למיפוי זה משפיעה על קריטריוני החיפוש\n\nקריטריוני החיפוש כבר כוללים מיפוי זה יותר מפעם אחת, הוספת הגדרת ה ${0} ממאגר ${1} תביא להופעת הגדרת ה ${0} יותר מידי פעמים. יש למחוק את קריטריוני החיפוש שעושים שימוש במיפוי בכדי להריץ חיפוש.\n\nאתם רוצים לעדכן את המיפוי ולמחוק את קריטריוני החיפוש?",
		unified_search_details: "פרטי חיפוש חוצה-מאגרים",
		unified_search_fixed_value_property: "תכונה עם ערך קבוע",
		unified_search_required_property: "תכונה דרושה",
		unified_search_display_only_property: "הגדרות לתצוגה בלבד",
		unified_search_missing_required_properities: "לא ניתן לשמור או להריץ את החיפוש.‏<br/>התכונות שלהלן הן תכונות דרושות:${0}עליכם לכלול את התכונות במיפוי ולהוסיף את התכונות עם ערכים לקריטריונים לחיפוש.",
		unified_search_property_repostory: "${0} (מאגר: ${1})",
		unified_search_builder_no_mappings: "לא ניתן להריץ את החיפוש.<br/>יש ליצור מיפוי תכונות, ולכלול אותו ב <b>תצוגת תוצאות</b>על מנת שהחיפוש יציג את תוצאותיכם.",
		unified_search_builder_insufficient_criteria_to_run: "לא ניתן להריץ את החיפוש.<br/>קריטריוני החיפוש אינם כוללים קריטריוני חיפוש תמליל או ערכי תכונות למאגרים הבאים:${0}עבור כל מאגר הכלול בחיפוש, עליכם להזין קריטריוני חיפוש תמליל, או ליצור מיפוי תכונות, עליכם לכלול אותו בקריטריוני התכונות ולהגדיר ערכי תכונה.",
		unified_search_builder_insufficient_criteria_to_save: "לא ניתן לשמור את החיפוש.<br/>החיפוש אינו כולל קריטריוני חיפוש עבור המאגרים הבאים:${0}עבור כל מאגר הכלול בחיפוש, עליכם לעשות אחד מהדברים הבאים:<ol><li>צרו מיפוי תכונות, ותכללו אותו בקריטריוני התכונות.</li><li>שנו את המאגר כך שיכלול קריטריוני חיפוש תמליל, וצרו מיפוי תכונות ותכללו אותו ב <b>תצוגת התוצאות</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "לא ניתן להריץ את החיפוש.<br/>עבור כל מאגר הכלול בחיפוש, יש לציין לפחות ערך תכונה אחד. לדוגמה, ניתן לציין ערכים עבור התכונות הבאות: ${0}",
		unified_search_runtime_insufficient_criteria_text: "לא ניתן להריץ את החיפוש.<br/>נדרשים קריטריוני חיפוש בטקסט.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "לא ניתן להריץ את החיפוש.<br/>עבור כל מאגר הכלול בחיפוש, יש לציין ערך תכונה אחד לפחות, או להזין קרטריוני חיפוש בטקסט. לדוגמה, ניתן לציין ערכים עבור התכונות הבאות: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "לא ניתן להריץ את החיפוש.<br/>נדרשים קרטריוני חיפוש בטקסט. עבור כל מאגר הכלול בחיפוש, יש לציין ערך תכונה אחד לפחות, או להזין קרטריוני חיפוש בטקסט. לדוגמה, ניתן לציין ערכים עבור התכונות הבאות: ${0}",
		unified_search_invalid_criteria: "החיפוש כולל קריטריונים לא חוקיים המונעים את הרצת החיפוש.<br/>הקריטריונים הלא חוקיים סולקו. עם זאת, עליכם לשמור את השינויים בחיפוש לפני שתוכלו להריץ את החיפוש. אם אינכם רוצים לשמור את השינויים, סגרו את החיפוש.<br/><br/>הפריטים שלהלן סולקו או שונו:${0}",
		unified_search_invalid_fixed_values: "לא ניתן לשמור או להריץ את החיפוש.‏<br/>לקריטריוני החיפוש שלהלן יש ערכים קבועים שאינם חוקיים:${0}בצעו אחת הפעולות שלהלן כדי לפתור את הבעיה:<ul><li>סלקו את קריטריון החיפוש המכיל ערכים לא חוקיים</li><li>ערכו את המיפוי הכולל את תכונת IBM Content Manager OnDemand עם הערך הקבוע כדי לסלק את התכונה.</li><li>ערכו את המיפוי הכולל את תכונת IBM Content Manager OnDemand עם הערך הקבוע כך שכל התכונות יהיו תואמות. כדי לקבל מידע נוסף על התכונות שאפשר למפות, ראו את הקישור 'מידע נוסף' בתמליל המבוא בראש חלון מיפוי התכונות.</li></ul>",
		unified_search_cannot_add_properties: "לא ניתן להוסיף תכונות לחיפוש זה.<br/>כל התכונות הממופות הזמינות כבר נמצאות בקריטריוני החיפוש וניתן להוסיף כל תכונה לחיפוש פעם אחת בלבד.",
		unified_search_mapping_not_viewable: "תכונות תבנית Box לא יכולות להיות מוצגות בתוצאות חיפוש. אם ברצונכם להוסיף את המיפוי הזה כעמודה, יש למפות לפחות תכונה אחת שאינה תכונת תבנית Box. לדוגמה, ניתן לבחור תכונה ממאגר אחר.",

		unified_search_returned_more: "מאגר אחד לכל הפחות חרג ממקסימום התוצאות המותרות.",
		unified_search_partial_failure: "אירעה שגיאה במאגר אחד לפחות.",
		unified_search_partial_failure_and_returned_more: "ארעה שגיאה במאגר אחד לפחות ולפחות מאגר אחד חרג ממקסימום התוצאות המותרות.",
		unified_search_see_analysis: "ראו את ניתוח התוצאות.",
		unified_search_analysis_intro_returned_more: "עבור כל מאגר החורג ממכסת התוצאות המאושרת, יש לנסות לדייק את קריטריוני החיפוש בכדי להניב תוצאות מעטות יותר. או, ניתן גם להריץ חיפוש מאגר יחיד בכדי להניב תוצאות מרובות יותר מהמכסה המותרת בחיפוש רב מאגרי.",
		unified_search_analysis_intro_partial_failure: "עיינו בפרטי השגיאה שהוחזרה על ידי המאגר או המאגרים. במידת האפשר, פתרו את השגיאות והריצו את החיפוש חוצה-המאגרים שוב.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "עבור כל מאגר בו ארעה שגיאה יש לנסות לפתור את הבעיה ולהריץ את החיפוש בשנית.<br/><br/>עבור כל מאגר החורג ממכסת התוצאות המאושרת, יש לנסות לדייק את קריטריוני החיפוש בכדי להניב תוצאות מעטות יותר. או, ניתן גם להריץ חיפוש מאגר יחיד בכדי להניב תוצאות מרובות יותר מהמכסה המותרת בחיפוש רב מאגרי.",
		unified_search_results_found: "תוצאות שנמצאו",
		unified_search_maximum_allowed: "המקסימום המותר",
		unified_search_maximum_exceeded: "חריגה מהמקסימום",

		unified_search_mapping_rule_box: "לא ניתן להוסיף תכונה זו למיפוי.<p>ה ${0} תכונה מה ${1} מאגר כבר קיימת במיפוי אחר ותכונות ברות חיפוש ממאגר זה יכולות להכלל במיפוי אחד בלבד עבור כל חיפוש.<br/>יש לבחור תכונה אחרת ולהוסיפה למיפוי.</p>",
		unified_search_mapping_rule_repository: "לא ניתן להוסיף את ההתכונה למיפוי.<br/>המיפוי כבר כולל תכונה מהמאגר ${0}. מיפוי יכול לכלול רק תכונה אחת ממאגר מסוים.<br/>בחרו מאגר שונה שממנו תתווסף התכונה, או צרו מיפוי חדש עבור התכונה שנבחרה.",
		unified_search_mapping_rule_data_type: "לא ניתן להוסיף את ההתכונה למיפוי.<br/>לא ניתן לפחות תכונת ${0} לתכונת ${1}.‏ בחרו תכונה שונה למיפוי, או צרו מיפוי חדש עבור התכונה שנבחרה.<br/>כדי לקבל מידע נוסף על התכונות שאפשר למפות, ראו את הקישור 'מידע נוסף' בתמליל המבוא בראש חלון זה.",
		unified_search_mapping_rule_cardinality: "לא ניתן להוסיף את ההתכונה למיפוי.<br/>כל התכונות במיפוי חייבות לתמוך בערכים יחידים או בערכים מרובים. התכונה שנבחרה תומכת ב${0},‏ והתכונות במיפוי תומכות ב${1}.‏<br/>בחרו מאגר שונה להוספה למיפוי, או צרו מיפוי חדש עבור התכונה שנבחרה.",
		unified_search_mapping_rule_fixed_value: "לא ניתן להוסיף את ההתכונה למיפוי.<br/>המיפוי כבר כולל תכונה עם ערך קבוע. מיפוי יכול לכלול רק תכונה אחת עם ערך קבוע.<br/>בחרו מאגר שונה להוספה למיפוי, או צרו מיפוי חדש עבור התכונה שנבחרה.",
		unified_search_mapping_rule_child_component: "לא ניתן להוסיף את ההתכונה למיפוי.<br/>לא ניתן למפות תכונה עם רכיב בן לתכונות אחרות. אם ברצונכם לאפשר חיפוש לפי תכונה זו, צרו מיפוי חדש עבור התכונה שנבחרה.",
		unified_search_mapping_rule_operator_intersection: "לא ניתן להוסיף את ההתכונה למיפוי.<br/>לכל התכונות במיפוי חייב להיות אופרטור משותף אחד או יותר. אולם לתכונה ${0} אין אופרטורים משותפים עם התכונות האחרות במיפוי.<br/>בתנאים המתאימים, בחרו תכונה אחרת. אם אתם חייבים לכלול את התכונה שנבחרה, פנו אל המנהלן כדי לערוך את האופרטורים המשויכים לתכונה.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "הגדרות מתקדמות",
		advanced_search_options_intro: "הגדרת אפשרויות קריטריון מתקדמות.",
		advanced_search_options_editable: "ניתן לעריכה",
		advanced_search_options_readonly: "קריאה בלבד",
		advanced_search_options_required: "דרוש",
		advanced_search_options_hidden: "מוסתר",
		advanced_search_options_property_editable:"התכונה היא:",
		advanced_search_options_operators:"אופרטורים:",
		advanced_search_options_use_all:"השתמשו בהכל",
		advanced_search_options_use_selected:"שימוש בנבחר",
		advanced_search_options_operators_filtered: "האופרטורים סוננו",
		// Data types in lowercase
		data_type_boolean: "בוליאני",
		data_type_date: "תאריך",
		data_type_time: "שעה",
		data_type_timestamp: "חותמת זמן",
		data_type_decimal: "ערך עשרוני",
		data_type_double: "מספר נקודה צפה",
		data_type_short: "מספר שלם",
		data_type_integer: "מספר שלם",
		data_type_long: "מספר שלם",
		data_type_string: "מחרוזת תמליל",
		data_type_string_alpha: "מחרוזת אלפביתית",
		data_type_string_alphanum: "מחרוזת אלפאנומרית",
		data_type_string_ext: "מחרוזת אלפאנומרית מורחבת",
		data_type_string_num: "מחרוזת נומרית",
		data_type_binary: "בינארי",
		data_type_object: "אובייקט",
		data_type_guid: "GUID",
		data_type_user: "משתמשים",
		data_type_child_component: "רכיב בן",

		/* Print Dialog */
		print_title: "הדפסה",
		print_message: "הדפסה: ${0}",
		print_print_button: "הדפסה",
		print_clean_margins_button: "הגדרת הכל בתור 0",
		print_type: "סוג מדפסת:",
		print_printer_server_options: "אפשרויות הדפסה בשרת",
		print_printer_properties: "תכונות מדפסת",
		print_printer_fax_properties: "תכונות פקס",
		print_printer_name: "שם מדפסת:",
		print_fax_recipient: "מקבל",
		print_fax_sender: "שולח",
		print_copies: "עותקים:",
		print_local_orientation: "כיווניות",
		print_local_orientation_landscape: "לרוחב",
		print_local_orientation_portrait: "לאורך",
		print_local_margins: "שוליים",
		print_local_margins_top: "קצה עליון",
		print_local_margins_bottom: "קצה תחתון",
		print_local_margins_left: "ימין",
		print_local_margins_right: "שמאל",
		print_printer_server: "שרת",
		print_printer_local: "מקומי",
		print_property_class: "מחלקה:",
		print_property_routing: "ניתוב:",
		print_property_pagedef: "PageDef:",
		print_property_node: "צומת:",
		print_property_writer: "כותב:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "יעד:",
		print_property_forms: "טפסים:",
		print_property_faxnotes: "הערות:",
		print_property_faxcompany: "חברה:",
		print_property_faxnumber: "מספר פקס:",
		print_property_faxname: "שם:",
		print_property_faxsendertelnumber: "מספר טלפון:",
		print_property_faxcoverpage: "דף שער:",
		print_property_faxsubject: "נושא:",
		print_saveoptions: "שמירת אפשרויות הדפסה",
		print_property_bannerpage: "שימוש בדף כרזה",
		print_print_with_info_fields: "הדפסה עם שדות מידע",
		print_field_from: "מאת",
		print_field_to: "אל",
		print_invalid_value_class: "תווים חוקיים הם A-Z או 0-9",
		print_invalid_value_pagedef: "תווים חוקיים הם תווים אלפבתיים או נומריים, או התווים @, #, $",
		print_invalid_value_writer: "תווים חוקיים הם תווים אלפבתיים או נומריים, או התווים @, #, $",
		print_invalid_value_formdef: "תווים חוקיים הם תווים אלפבתיים או נומריים, או התווים @, #, $",
		print_invalid_value_forms: "תווים חוקיים הם תווים אלפבתיים או נומריים, או התווים @, #, $",
		print_invalid_value_margin: "מספרים חוקיים הם בטווח ${0} עד ${1}",
		print_status_message: "${0} מסמכים נשלחו למדפסת ${1}.‏",

		print_applet_init_error: "לא ניתן לאתחל את יישומון ההדפסה.",
		print_applet_init_error_explanation: "סיבות אפשריות לבעיה זו: <br/><br/><ul><li>לא מותקן JRE בתחנת העבודה שלכם.</li><li>תוסף Java לא הופעל בדפדפן שלכם.</li><li>גרסת JRE בתחנת העבודה אינה תואמת לגרסת IBM Content Navigator.‏</li><li>פג תוקפו של הדפדפן שלכם בעת ההמתנה ליישומון ההדפסה.</li></ul>",
		print_applet_init_error_userResponse: "ניתן לבצע את הפעולות הבאות בכדי לפתור את הבעיה עם הJRE:<br/><br/><ol><li>ודאו שה-JRE מותקן בתחנת העבודה שלכם.</li><li>יש לוודא שתוסף הJava מופעל בדפדפן שלכם.</li><li>יש לוודא שגרסת הJRE בתחנת העבודה שלכם מותאמת לIBM Content Navigator ואז לנסות שנית. רשימת גרסאות JRE הנתמכות כלולה במסמך <i>Hardware and software prerequisites for IBM Web Interface for Content Management</i> באתר תמיכת התוכנה של IBM.‏</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "עמוד שער",
		daeja_print_selected_documents_title: "מסמכים נבחרים",

		/* change the caps to em for emphasis*/
		match_all_criteria: "התאמת כל הקריטריונים לחיפוש",
		match_any_criteria: "התאמת קריטריון כלשהו מהקריטריונים לחיפוש",
		include_subfolders_summary: "${0} (הכללת תת-תיקיות)",
		browse_button: "עיון&hellip;",
		search_for: "לחפש:",
		object_type_documents: "מסמכים",
		object_type_folders: "תיקיות",
		object_type_documents_folders: "מסמכים ותיקיות",
		object_type_web_links: "קישורי אינטרנט",
		object_type_documents_folders_web_links: "מסמכים, תיקיות וקישורי אינטרנט",

		/* SelectSearchFolderDialog */
		search_in: "לחפש בתוך:",
		include_subfolders: "הכללת תת-תיקיות",

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
		locked_item_icon_title: "נעול על ידי ${0}",
		checked_out_icon_title: "נמשך על ידי ${0}.",
		major_minor_version_icon_title: "גרסה ראשית עם גרסאות משניות",
		suspended_icon_title: "תזרים-העבודה הושעה",
		on_hold_icon_title: "בהשהיה",
		has_notes_icon_title: "יש הערות",
		record_icon_title: "מוכרז כרשומה",
		compound_document_icon_title: "מסמך מרוכב",
		validateTemplate_icon_title: "תבנית מרחב הצוות דורשת אימות",
		offlineTemplate_icon_title: "תבנית מרחב הצוות אינה מקוונת",
		offlineTeamspace_icon_title: "מרחב הצוות נמצא במצב לא מקוון",
		pending_delete_icon_title: "מרחב הצוות ממתין למחיקה",
		delete_error_icon_title: "לא ניתן למחוק את מרחב הצוות",
		defaultTemplate_icon_title: "תבנית מרחב צוות מחדלית",
		teamspace_icon_title: "מרחב צוות",
		teamspace_template_icon_title: "תבנית מרחב צוות",
		has_bookmark_icon_title: "יש סימניה",
		read_only_icon_title: "קריאה בלבד",
		no_results_were_found: "לא נמצאו תוצאות.",
		folder_is_empty: "התיקיה ריקה.",
		no_checked_out_items: "אין לכם פריטים משוכים.",
		inbasket_is_empty: "מגירת הדואר הנכנס ריקה.",
		worklist_is_empty: "רשימת העבודה ריקה.",
		tracker_milestone_completed: "הושלם",
		stepprocessor_attachments_title: "תוכן",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "נעילת פריטים",
		unlock_items: "שחרור נעילת פריטים",
		checkin_item: "הפקדת פריט",

		/* Help */
		learn_more: "מידע נוסף",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "פתיחת מרחב צוות",
		repository_tab_createWorkspace: "מרחב צוות חדש",
		repository_tab_createWorkspaceTemplate: "תבנית מרחב צוות חדשה",
		repository_tab_DefaultTemplate: "ברירת מחדל",

		/* Cross repository document copy */
		documentCopyTaskDescription: "משימה זו מעתיקה מסמכים.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "אין לכם הרשאות עריכה עבור תבנית מרחב הצוות שנבחרה.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "האם אתם בטוחים שברצונכם למחוק את מרחב הצוות ${0}? <br><br>רק המסמכים המתויקים בתיקיות אחרות במאגר יישארו במאגר. מסמכים המתויקים רק במרחב הצוות יימחקו.",
		teamspaceDecommissionLabel: "מחיקה:",
		teamspaceDecommissionDescription: "מחיקת מרחב הצוות תסלק מרחב צוות זה מהשרת: ציינו איך יטופלו תוצרו מרחב הצוות.",
		teamspaceDecommissionOptions: "אפשרויות מחיקת מרחב צוות",
		teamspaceDecommissionDeleteAll: "מחיקת כל תוצרי מרחב הצוות",
		teamspaceDecommissionReFileAll: "תיוק מחדש של כל תוצרי מרחב הצוות",
		teamspaceDecommissionReFileDestination: "העברה אל:",
		teamspaceDecommissionReFileIn: "תיוק מחדש בתוך",
		teamspaceDecommissionTaskName: "משימת מחיקת מרחב צוות",
		teamspaceDecommissionTaskDescription: "משימה זו מוחקת מרחב צוות מהמאגר.",
		teamspaceDecommissionDeletionStarted: "מרחב הצוות תוזמן למחיקה",
		teamspaceDecommissionDeletionConnectionFailed: "לא ניתן להריץ את המשימה למחיקת מרחב צוות מפני שהמשימה לא הצליחה להתחבר למאגר. ודאו שההסמכות של מנהלן המאגר נכונות.",

		teamspace_edit_properties_notsupported: "תוכלו לערוך את התכונות של מרחב העבודה רק מתצוגת מרחבי העבודה.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "מרחב הצוות אינו מקוון ורק בעלים של מרחב הצוות יכולים לפתוח אותו",

		/* Teamspace Builder widget */
		workspace_validation_document: "מסמך:",
		workspace_validation_folder: "תיקיה:",
		workspace_validation_ets: "תבניות הקלט שלהלן אינן זמינות במאגר זה וסולקו מרשימת תבניות הקלט שנבחרו:",
		workspace_validation_classes: "המחלקות שלהלן אינן זמינות במאגר זה וסולקו מרשימת המחלקות שנבחרו:",
		workspace_validation_searches: "החיפושים שלהלן אינם זמינים במאגר זה וסולקו מרשימת החיפושים שנבחרו:",
		workspace_validation_docs_folders: "המסמכים והתיקיות שלהלן אינם זמינים במאגר זה וסולקו מרשימת הפריטים הכלולים:",
		workspace_change_template_confirmation_question: "אם תבחרו תבנית שונה, כל השינויים שלכם יאבדו. האם ברצונכם להמשיך?‏\n",
		workspace_delete_item_confirmation_question: "האם ברצונכם למחוק את הפריט ${0}?\n",
		workspace_delete_role_confirmation_question: "האם ברצונכם למחוק את התפקיד ${0}?\n",
		workspace_delete_confirmation_question: "אם תמחקו מרחב צוות, רק מכולת מרחב הצוות תימחק. התיקיה והמסמכים במרחב הצוות נשארים במאגר, ותוכלו לאתר אותם באמצעות חיפוש. כדי למחוק את התוכן של מרחב הצוות, מחקו את הפריטים ממרחב הצוות תחילה, ואז מחקו את מרחב הצוות.<br><br>האם ברצונכם למחוק את מרחב הצוות ${0}?‏",
		workspacebuilder_instance_template_name_header: "שם תבנית מרחב צוות",
		workspacebuilder_instance_template_description_header: "תיאור",

		workspacebuilder_template_tooltip_name: "שם התבנית אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",
		workspacebuilder_instance_tooltip_name: "שם מרחב הצוות אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",

		workspacebuilder_template_tooltip_description: "ספקו תיאור שיאפשר למשתמשים לבחור את התבנית הנכונה מרשימת התבניות. לדוגמה, תוכלו לכלול מידע על המשתמשים או השימושים המיועדים של התבנית.",
		workspacebuilder_instance_tooltip_description: "ספקו תיאור שיאפשר למשתמשים להבדיל בין מרחב צוות זה למרחבי צוות אחרים.",

		workspacebuilder_template_edit_properties_pane: "עריכת תבנית מרחב צוות",
		workspacebuilder_instance_properties_pane: "הגדרת מרחב צוות",
		workspacebuilder_template_properties_pane: "הגדרת תבנית מרחב צוות",

		workspacebuilder_instance_security_pane: "הגדרת אבטחת מרחב צוות",
		workspacebuilder_template_security_pane: "הגדרת אבטחת תבנית",

		workspacebuilder_layout_pane: "בחירת מתכונת",
		workspacebuilder_search_templates_pane: "בחירת חיפושים",
		workspacebuilder_document_folders_pane: "הכללת תיקיות ומסמכים",
		workspacebuilder_doctypes_entryTemplates_pane: "בחירת מחלקות או תבניות קלט",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "בחירת מחלקות",
		workspacebuilder_security: "אבטחת מרחב צוות",

		workspacebuilder_roles_pane: "בחירת תפקידים",
		workspacebuilder_security: "אבטחה",

		workspacebuilder_properties_templates: "תבניות זמינות:",
		workspacebuilder_available_templates: "חיפושים זמינים:",
		workspacebuilder_selected_templates: "חיפושים שנבחרו:",
		workspacebuilder_templates_name: "שם חיפוש",

		workspacebuilder_available_entryTemplates: "תבניות קלט זמינות:",
		workspacebuilder_selected_entryTemplates: "תבניות קלט שנבחרו:",

		workspacebuilder_item_classes: "מחלקות זמינות:",
		workspacebuilder_item_classes_selected: "מחלקות שנבחרו:",
		workspacebuilder_properties_select_template: "בחרו תבנית לשימוש עבור מרחב צוות זה.",
		workspacebuilder_template_properties: "הגדרת תבנית מרחב צוות",
		workspacebuilder_instance_properties: "הגדרת מרחב צוות",
		workspacebuilder_template_introText: "ציינו את הרכיבים המשותפים שייכללו בכל מרחב צוות הנוצר מתבנית זו באמצעות האפשרויות ברכיב הניווט. כשתסיימו, לחצו על <b>סיום</b> כדי להגדיר את התבנית כזמינה למשתמשים אחרים, שיוכלו להשתמש בה ליצירות מרחבי צוות חדשים.",
		workspacebuilder_instance_introText: "צוותים משתמשים במרחבי צוות כדי לשתף ולעבוד עם קבוצות מסמכים מסוימות. תנו למרחב הצוות שם ותיאור בעלי משמעות כדי שהמשתמשים יוכלו להבדיל בין מרחב צוות זה למרחבי צוות אחרים. תוכלו להתאים את מרחב הצוות ולכלול בו עוד חיפושים, מחלקות או תבניות קלט, מסמכים ותיקיות.",

		workspacebuilder_template_search_template_introText: "בחרו את חיפושי ברירת המחדל שברצונכם לכלול בכל מרחב צוות הנוצר מתבנית זו. אם לא תבחרו חיפושים, משתמשים יוכלו לראות את כל החיפושים שיש להם גישה אליהם. עם הרשאות מתאימות, משתמשים יכולים להוסיף ולשתף חיפושים במרחב הצוות.",
		workspacebuilder_instance_search_template_introText: "כללו חיפושים שיאפשרו למשתמש מרחב הצוות להשלים משימות ביעילות רבה יותר. אם לא תכללו חיפושים, משתמשים יוכלו לראות את כל החיפושים שיש להם הרשאות עבורכם. משתמשים יכולים גם להוסיף ולשתף חיפושים במרחב הצוות אם יש להם הרשאות מתאימות.",

		workspacebuilder_template_roles_introText: "למשתמשי מרחב צוות מוקצים תפקידים. תפקידים מציינים את המשימות שהמשתמשים רשאים לבצע. לחצו על האיקונים ליד כל תפקיד כדי לראות את המשימות המותרות. בחרו את התפקידים המתאימים למרחב הצוות.",
		workspacebuilder_template_roles_modify_introText: "תוכלו לשנות תפקידים המשויכים לכל תפקיד במרחב צוות זה. עליכם לדווח לחברי מרחב הצוות כאשר ההרשאות שלהם משתנות.",

		workspacebuilder_template_roles_header_name: "שם תפקיד",

		workspacebuilder_template_folders_introText: "בחרו המסמכים והתיקיות המחדליים שברצונכם לכלול בכל מרחב צוות הנוצר מתבנית זו. תוכלו להוסיף מסמכים כקישורים או כעותקים. השתמשו בקישורים כדי להצביע אל מסמכים שאינכם רוצים ליצור עותקים מרובים שלהם, כגון מדיניויות או נהלים. צרו עותקים של מסמכים שהמשתמשים ישנו, כגון תבנית וטפסים.",
		workspacebuilder_instance_folders_introText: "בחרו המסמכים והתיקיות המחדליים שברצונכם לכלול במרחב הצוות. תוכלו להוסיף מסמכים כקישורים או כעותקים. השתמשו בקישורים כדי להצביע אל מסמכים שאינכם רוצים ליצור עותקים מרובים שלהם, כגון מדיניויות או נהלים. צרו עותקים של מסמכים שהמשתמשים ישנו, כגון תבנית וטפסים.",

		workspacebuilder_template_roles_introText: "ציינו את התפקידים שייכללו בכל מרחב צוות הנוצר מתבנית זו. תוכלו גם ליצור תפקידים חדשים, ולהשתמש בהם כשתיצרו תבניות מרחבי צוות אחרות.",
		workspacebuilder_instance_users_introText: "במרחב צוות, לכל משתמש מוקצה תפקיד או תפקידים המציינים את המשימות שהמשתמש רשאי לבצע. הוסיפו משתמשים למרחב הצוות והקצו להם תפקידים.",

		workspacebuilder_instance_navigation_pane_title: "בונה מרחבי הצוות",
		workspacebuilder_template_navigation_pane_title: "בונה תבניות מרחבי הצוות",

		workspacebuilder_roles_roles_nopermissions: "לא נבחרו הרשאות עבור התפקיד {0}.‏",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "תפקידים שנבחרו:",
		workspacebuilder_roles_available_roles: "תפקידים זמינים:",
		workspacebuilder_roles_privilege_header: "הרשאה",
		workspacebuilder_roles_select_role: "בחירת תפקיד",
		workspacebuilder_roles_select_permission: "בחירת הרשאה",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "תפקיד בשם {0} כבר קיים. יש לציין שם ייחודי עבור התפקיד. ",
		workspacebuilder_roles_edit_dialog_role_name: "שם תפקיד:",
		workspacebuilder_roles_edit_dialog_role_description: "תיאור תפקיד:",
		workspacebuilder_roles_edit_dialog_title_new: "תפקיד חדש",
		workspacebuilder_roles_edit_dialog_title_edit: "עריכת תפקיד",

		workspacebuilder_roles_privileges_header: "הרשאות עבור התפקיד {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "הרשאות מסמך:",
		workspacebuilder_roles_priv_group_folder: "הרשאות תיקיה:",
		workspacebuilder_roles_priv_group_teamspace: "הרשאות מרחב צוות:",
		workspacebuilder_roles_priv_group_item: "הרשאות מסמכים ותיקיות:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "ניהול הרשאות",
		workspacebuilder_roles_plbl_modifyItemPermissions: "משתמשים עם הרשאה זו יכולים לנהל את הגישה למסמכים ותיקיות במרחב הצוות. הרשאה זו כוללת מתן הרשאה למשתמשים אחרים למחוק תיקיות, לערוך תכונות תיקיה, ליצור תת-תיקיות וכן הלאה.",

		workspacebuilder_roles_priv_deleteItems: "מחיקה",
		workspacebuilder_roles_plbl_deleteItems: "משתמשים עם הרשאה זו יכולים למחוק מסמכים ותיקיות במרחב הצוות.",

		workspacebuilder_roles_priv_createItems: "יצירה",
		workspacebuilder_roles_plbl_createItems: "משתמשים עם הרשאה זו יכולים ליצור מסמכים ותיקיות במרחב הצוות.",

		workspacebuilder_roles_priv_viewItemProperties: "הצגת תכונות",
		workspacebuilder_roles_plbl_viewItemProperties: "משתמשים עם הרשאה זו יכולים להציג תכונות של תיקיות במרחב הצוות, כולל תכונות המערכת.",

		workspacebuilder_roles_priv_modifyItemProperties: "עריכת תכונות",
		workspacebuilder_roles_plbl_modifyItemProperties: "משתמשים עם הרשאה זו יכולים לערוך תכונות של מסמכים ותיקיות במרחב הצוות.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "ניהול הרשאות תיקיה",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "משתמשים עם הרשאה זו יכולים לנהל את הגישה לתיקיות במרחב הצוות. הרשאה זו כוללת מתן הרשאה למשתמשים אחרים למחוק תיקיות, לערוך תכונות תיקיה, ליצור תת-תיקיות וכן הלאה.",

		workspacebuilder_roles_priv_deleteFolders: "מחיקת תיקיות",
		workspacebuilder_roles_plbl_deleteFolders: "משתמשים עם הרשאה זו יכולים למחוק תיקיות במרחב הצוות.",

		workspacebuilder_roles_priv_modifyFolderProperties: "עריכת תכונות תיקיה",
		workspacebuilder_roles_plbl_modifyFolderProperties: "משתמשים עם הרשאה זו יכולים לערוך תכונות של תיקיות במרחב הצוות.",

		workspacebuilder_roles_priv_createSubfolders: "יצירת תת-תיקיות",
		workspacebuilder_roles_plbl_createSubfolders: "משתמשים עם הרשאה זו יכולים ליצור תת-תיקיות במרחב הצוות.",

		workspacebuilder_roles_priv_fileInFolders: "הוספה לתיקיות",
		workspacebuilder_roles_plbl_fileInFolders: "משתמשים עם הרשאה זו יכולים להוסיף קישור מתיקיות במרחב הצוות למסמכים.",

		workspacebuilder_roles_priv_viewFolderProperties: "הצגת תכונות תיקיה",
		workspacebuilder_roles_plbl_viewFolderProperties: "משתמשים עם הרשאה זו יכולים להציג תכונות של תיקיות במרחב הצוות, כולל תכונות המערכת.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "ניהול הרשאות מסמך",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "משתמשים עם הרשאה זו יכולים לנהל את הגישה למסמכים במרחב הצוות. הרשאה זו כוללת מתן הרשאה למשתמשים אחרים למחוק מסמכים, לערוך תכונות מסמכים וכן הלאה.",

		workspacebuilder_roles_priv_deleteDocuments: "מחיקת מסמכים",
		workspacebuilder_roles_plbl_deleteDocuments: "משתמשים עם הרשאה זו יכולים למחוק מסמכים במרחב הצוות.",

		workspacebuilder_roles_priv_promoteVersions: "קידום גרסאות",
		workspacebuilder_roles_plbl_promoteVersions: "משתמשים עם הרשאה זו יכולים להקצות מספר גרסה חדש למסמכים במרחב הצוות.",

		workspacebuilder_roles_priv_modifyContent: "עריכת מסמכים",
		workspacebuilder_roles_plbl_modifyContent: "משתמשים עם הרשאה זו יכולים לערוך תוכן של מסמכים במרחב הצוות.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "עריכת תכונות מסמך",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "משתמשים עם הרשאה זו יכולים לערוך תכונות של מסמכים במרחב הצוות.",

		workspacebuilder_roles_priv_viewContent: "הצגת מסמכים",
		workspacebuilder_roles_plbl_viewContent: "משתמשים עם הרשאה זו יכולים להציג מסמכים במרחב הצוות.",

		workspacebuilder_roles_priv_viewDocumentProperties: "הצגת תכונות מסמך",
		workspacebuilder_roles_plbl_viewDocumentProperties: "משתמשים עם הרשאה זו יכולים להציג תכונות של מסמכים במרחב הצוות, כולל תכונות המערכת.",

		workspacebuilder_roles_priv_addNewSearches: "הוספת חיפושים",
		workspacebuilder_roles_plbl_addNewSearches: "משתמשים עם הרשאה זו יכולים להוסיף חיפושים למרחב הצוות. כברירת מחדל, החיפוש אינו זמין למשתמשים אחרים.",

		workspacebuilder_roles_priv_createNewSearches: "יצירת חיפושים",
		workspacebuilder_roles_plbl_createNewSearches: "משתמשים עם הרשאה זו יכולים ליצור חיפושים חדשים אך אינם יכולים לשמור את החיפושים. אם משתמשים אינם בעלי הרשאה זו, הם אינם יכולים להוסיף מסמכים שכבר נמצאים במאגר למרחב הצוות.",

		workspacebuilder_roles_priv_shareSearches: "שיתוף חיפושים",
		workspacebuilder_roles_plbl_shareSearches: "משתמשים עם הרשאה זו יכולים לשתף חיפושים שיצרו עם משתמשים אחרים במרחב הצוות.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "ניהול מחלקות או תבניות קלט",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "משתמשים עם הרשאה זו יכולים להוסיף ולסלק מחלקות או תבניות קלט במרחב הצוות.",

		workspacebuilder_roles_priv_addRemoveClasses: "ניהול מחלקות",
		workspacebuilder_roles_plbl_addRemoveClasses: "משתמשים עם הרשאה זו יכולים להוסיף ולסלק מחלקות במרחב הצוות.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "ניהול משתמשי מרחב צוות",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "משתמשים עם הרשאה זו יכולים להוסיף ולסלק משתמשים וקבוצות ממרחב הצוות. כמו כן, הם יכולים לנהל את התפקידים המוקצים למשתמשים.",

		workspacebuilder_roles_priv_modifyRoles: "שינוי תפקידים",
		workspacebuilder_roles_plbl_modifyRoles: "בעלים עם הרשאה זו יכולים לשנות הרשאות תפקידים עבור מרחב הצוות. הרשאה זו זמינה רק עבור בעלים.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "בחירת משתמשים",
		workspacebuilder_users_add_users_and_groups_button: "הוספת משתמשים וקבוצות...",
		workspacebuilder_users_users_or_group_header: "משתמש וקבוצה",
		workspacebuilder_users_roles_header: "תפקידים",

		workspacebuilder_users_role_header: "תפקיד",
		workspacebuilder_users_role_no_permissions: "לתפקיד זה אין הרשאות",
		workspacebuilder_users_available_roles_label: "תפקידים זמינים:",
		workspacebuilder_users_selected_users_and_groups_label: "משתמשים וקבוצות שנבחרו:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "לא ניתן לשמור את מרחב הצוות. עליכם לציין לפחות בעלים אחד עבור מרחב הצוות.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "לא ניתן לשמור את מרחב הצוות. יש להקצות תפקיד לכל המשתמשים.",
		// end of select users

		workspacebuilder_search_templates: "בחירת חיפושים",
		workspacebuilder_search_add: "הוספת חיפוש",
		workspacebuilder_properties_workspaceName: "שם מרחב צוות:",
		workspacebuilder_properties_templateName: "שם תבנית:",
		workspacebuilder_properties_workspaceDescription: "תיאור מרחב צוות:",
		workspacebuilder_properties_templateDescription: "תיאור תבנית:",
		workspacebuilder_properties_workspaceTemplate: "תבנית שנבחרה:",
		workspacebuilder_properties_security: "שיתוף תבנית עם:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "העברה ממרחב צוות:",
		moveTeamspaceDocuments_security: "שיתוף מסמכים עם:",
		moveTeamspaceDocuments_security_change: "ציון אבטחה מותאמת עבור הפריטים שנבחרו",
		moveTeamspaceDocuments_item_type_level: "אינכם יכולים לבחור 'עקיפת האבטחה של הפריטים שנבחרו' מפני שהמחלקה של הפריט שנבחר מוגדרת להשתמש באבטחה ברמת המחלקה בלבד.",
		moveTeamspaceDocuments_security_inherit: "קבלת אבטחה בירושה מתיקיית היעד",
		moveTeamspaceDocuments_file_info_text: "תוכלו להעביר פריטים ממרחב צוות למרחב צוות אחר או לתיקיה.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "אין לכם הרשאות מתאימות להעברת הפריטים אל התיקיה שנבחרה.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "אין לכם הרשאות מתאימות להעברת הפריטים ממרחב הצוות.",
		moveTeamspaceDocuments_move_mixed_items: "אינכם יכולים לעקוף את האבטחה של הפריטים שנבחרו. חלק מהפריטים אינם מנוהלים על ידי מרחב הצוות. תוכלו לעקוף רק אבטחה של פריטים המנוהלים על ידי מרחב הצוות.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "יש לציין שם עבור מרחב הצוות.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "יש לציין שם עבור תבנית מרחב הצוות.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "שם מרחב הצוות אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "שם התבנית אינו יכול לכלול רווחים או תו כלשהו מהתווים האלה: * \\ / : ? \" < > |",

		workspacebuilder_folders_makeDocLink: "קישור למסמך",
		workspacebuilder_folders_makeDocCopy: "העתקת מסמך",
		workspacebuilder_folders_newfolder: "תיקיה חדשה",
		workspacebuilder_folders_local_drive: "ממדריך מקומי",
		workspacebuilder_folders_from_repo: "ממאגר",
		workspacebuilder_folders_add_doc: "הוספת מסמך",
		workspacebuilder_folders_grid_name: "שם",
		workspacebuilder_folders_props: "תכונות",
		workspacebuilder_folders_remove: "סילוק",
		workspacebuilder_folders_delete: "מחיקה",
		workspacebuilder_folders_adddoc_local: "הוספת מסמך מכונן מקומי",
		workspacebuilder_folders_adddoc_repo: "הוספת מסמך ממאגר",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "שם התיקיה שצוין כבר קיים. נא לציין שם תיקיה שונה.",

		workspacebuilder_classes_title: "בחירת מחלקות או תבניות קלט",
		workspacebuilder_classes_title_cm: "בחירת מחלקות",
		workspacebuilder_classes_template_introText: "ציינו אם מרחבי הצוות הנוצרים מתבנית זו ישתמשו במחלקות או בתבניות קלט להוספת מסמכים למאגר. אם לא תציינו מחלקות, משתמשים יראו את כל המחלקות שיש להם גישה אליהן.  משתמשים יכולים לשנות את רשימת המחלקות או תבניות הקלט במרחב הצוות אם יש להם הרשאה מתאימה.",
		workspacebuilder_classes_template_introText_cm: "בחרו את המחלקות שמשתמשים יוכלו להשתמש בהן להוספת מסמכים למאגר. אם לא תבחרו מחלקות, משתמשים יראו את כל המחלקות שיש להם גישה אליהן. משתמשים יכולים לשנות את רשימת המחלקות או במרחב הצוות אם יש להם הרשאות מתאימות.",
		workspacebuilder_classes_instance_introText: "בחרו את המחלקות שמשתמשים יוכלו להשתמש בהן להוספת מסמכים למאגר. אם לא תבחרו מחלקות, משתמשים במרחב הצוות יראו את כל המחלקות שיש להם גישה אליהן. משתמשים יכולים לשנות את רשימת המחלקות או תבניות הקלט במרחב הצוות אם יש להם הרשאה מתאימה.",
		workspacebuilder_classes_instance_introText_cm: "בחרו את המחלקות שמשתמשים יוכלו להשתמש בהן להוספת מסמכים למאגר. אם לא תבחרו מחלקות, משתמשים במרחב הצוות יראו את כל המחלקות שיש להם גישה אליהן. משתמשים יכולים לשנות את רשימת המחלקות או במרחב הצוות אם יש להם הרשאות מתאימות.",
		workspacebuilder_classes_selection: "בחירת מחלקות:",
		workspacebuilder_classes_list: "מחלקות זמינות:",
		workspacebuilder_classes_columns_default: "ברירת מחדל",
		workspacebuilder_classes_columns_className: "שם מחלקה",
		workspacebuilder_classes_type_classes: "שימוש במחלקות להוספת מסמכים",
		workspacebuilder_classes_type_classes_tooltip: "מחלקות כוללות תכונות משויכות כדי לאפשר איתור מסמכים לשימוש בהמשך.",
		workspacebuilder_classes_type_entryTemplates: "שימוש בתבניות קלט להוספת מסמכים",
		workspacebuilder_classes_type_entryTemplates_tooltip: "תבניות קלט מבטיחות שהפרטים המסופקים עבור כל מסמך עקביים ומשתמשים בערכים מוגדרים מראש.",
		workspacebuilder_classes_type_entryTemplates_columnName: "שם תבנית הקלט",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "תיאור",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "עליכם להוסיף לפחות תבנית קלט אחת למרחב הצוות.",

		workspacebuilder_classes_new: "מחלקה חדשה",
		workspacebuilder_classes_add: "הוספת מחלקה",
		workspacebuilder_entryTemplate_add: "הוספת תבנית קלט",
		workspacebuilder_add_list: "הוספה",
		workspacebuilder_makeDefault_list: "הגדרה כברירת מחדל",
		workspacebuilder_removeDefault_list: "סילוק ברירת מחדל",

		workspacebuilder_roles_title: "בחירת תפקידים",
		workspacebuilder_roles_title_modify: "שינוי תפקידים",

		workspacebuilder_selection_moveup: "הזזה למעלה",
		workspacebuilder_selection_movedown: "הזזה למטה",
		workspacebuilder_selection_remove: "סילוק",
		workspacebuilder_selection_add: "הוספה",
		workspacebuilder_selection_create_new_search: "חיפוש חדש...‏",
		workspacebuilder_selection_create_new_role: "תפקיד חדש...‏",
		workspacebuilder_selection_make_role_available: "הגדרה כזמין",
		workspacebuilder_selection_make_role_available_tooltip: "שיתוף התפקיד שנבחר עם תבניות אחרות. עליכם להקצות לפחות הרשאה אחת לתפקיד כדי לשתף אותו.",

		workspacebuilder_navigation_next: "הבא",
		workspacebuilder_navigation_finish: "סיום",
		workspacebuilder_navigation_validate: "אימות",
		workspacebuilder_navigation_previous: "הקודם",
		workspacebuilder_navigation_cancel: "ביטול",
		workspacebuilder_navigation_customize: "התאמה",

		workspacebuilder_search_dialog_title: "חיפוש",
		workspacebuilder_dialog_close: "סגירה",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "זמינות תבנית:",
		workspace_properties_templateState_tooltip: "הגדרת התבנית כלא-זמינה כדי למנוע ממשתמשים ליצור מרחבי צוות המשתמשים בתבנית זו.",
		workspace_properties_dialog_title: "תכונות תבנית",
		workspace_properties_online_radio_option_label: "הגדרה כזמין",
		workspace_properties_offline_radio_option_label: "הגדרה כלא-זמין",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "האם ברצונכם לבטל בלי לשמור את השינויים שלכם?‏",
		workspacebuilder_cancel_confirmation_button: "כן",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "פריטים לא חוקיים יסולקו מהתבנית והתבנית תהפוך זמינה למשתמשים.  האם ברצונכם לאמת תבנית מרחב צוות זו?",
		workspacebuilder_validate_confirmation_button: "כן",
		workspacebuilder_validate_confirmation_title: "אימות",

		/* Entry templates builder */
		entry_templates: "מנהל תבניות הקלט",
		no_entry_templates_were_found: "אין תבניות קלט",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "מסנן",

		/* Roleselector widget */
		role_selector_name: "תפקידים:",

		/* User Group picker widget */
		directory_label: "מדריך:",
		scope_label: "לחפש:",
		name_starts_with_label: "השם מתחיל עם",
		name_contains_label: "השם מכיל",
		display_name_contains_label: "השם להצגה מכיל:",
		starts_with_label: "מתחיל עם:",
		available_label: "זמין:",
		available_heading: "זמין",
		selected_label: "נבחר:",
		selected_heading: "נבחר",
		available_repositories_label: "מאגרים זמינים",
		selected_repositories_label: "מאגרים שנבחרו",
		default_repository: "מאגר מחדלי:",
		default_repository_placeholder: "בחירת מאגר",
		default_role_placeholder: "בחירת תפקיד",
		menu_label_placeholder: "בחרו או ציינו תווית",
		default_repository_hover: "ציינו את המאגר שייבחר כברירת מחדל כשמשתמשים מתחברים ללקוח הדפדפן משולחן עבודה זה.<br><br><b>חשוב:</b> עליכם להוסיף מאגרים לשולחן העבודה 'רשימת מאגרים נבחרים' כדי שתוכלו לציין את מאגר ברירת המחדל.",
		default_repository_workflow_hover: "<b>זכרו:</b> תוכלו להגדיר את מרחביי היישומים רק עבור מאגרים המוגדרים עבור שולחן עבודה זה.",
		remove_label: "סילוק",
		users_label: "משתמשים",
		groups_label: "קבוצות",
		user_or_group_name_label: "שם משתמש או קבוצה:",
		user_or_group_name_hover: "ציינו שם משתמש או קבוצה חוקי במאגר.  השם אינו מאומת.",
		user: "משתמש",
		group: "קבוצה",
		name: "שם:",
		displayName: "שם להצגה",
		display_name: "שם להצגה:",
		shortName: "שם קצר:",
		distinguishedName: "שם DN:",
		search_tooltip: "חיפוש",
		add_tooltip: "הוספה",
		add_selected_tooltip: "הוספה לרשימה שנבחרה",
		remove_tooltip: "סילוק",
		remove_selected_tooltip: "סילוק מהרשימה שנבחרה",
		add_to_selected_tooltip: "הוספה",
		remove_from_selected_tooltip: "סילוק",
		move_up_selected_tooltip: "העברה למעלה",
		move_down_selected_tooltip: "העברה למטה",
		advanced_search_options_tooltip: "הגדרות מתקדמות",
		move_right_selected_tooltip: "העברה לתת-תפריט",
		move_left_selected_tooltip: "העברה מחוץ לתת-תפריט",
		add_separator: "הוספת מפריד",
		menu_item_label: "תווית פריט תפריט:",
		add_menu_label: "הוספת תת-תפריט",
		menu_label: "תווית תת-תפריט:",
		menu_label_info: "<b>חשוב:</b> עליכם להוסיף לפחות פריט תפריט אחד לתת-תפריט זה כדי שתוכלו לשמור את התפריט.",
		menu_dropdown_label: "תווית לחצן נפתח:",
		menu_dropdown_label_info: "<b>חשוב:</b> עליכם להוסיף לפחות פריט תפריט אחד ללחצן נפתח זה כדי שתוכלו לשמור את סרגל הכלים.",
		no_item_found: "לא נמצאו תוצאות.",
		me: "אני",
		anyone: "כל אחד",
		specific_users: "משתמש מסוים",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "החיפוש החזיר יותר מ-{0} תוצאות. שנו את הקריטריונים כדי לצמצם את החיפוש.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "תוצאות החיפוש כוללות פריטים שכבר נבחרו. פריטים אלה לא יוצגו בתוצאות החיפוש.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "הוחזרו יותר מ-{0} תוצאות. השתמשו במסנן לצמצום התוצאות",

		user_already_selected: "המשתמש שצוין כבר נבחר.  ציינו משתמש שונה.",
		group_already_selected: "הקבוצה שצוינה כבר נבחרה.‏  ציינו קבוצה שונה.",
		user_cannot_select_self: "אינכם יכולים להוסיף את עצמכם. ציינו משתמש שונה.",

		/* Select User Group dialog */
		select_user_group_add_label: "הוספה",
		select_user_group_cancel_label: "ביטול",
		add_users_groups_label: "הוספת משתמשים וקבוצות",
		add_user_group_label: "הוספת משתמש וקבוצה",
		add_users_label: "הוספת משתמשים",
		add_user_label: "הוספת משתמש",
		add_label: "הוספה:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "במסמכים שלהלן יש שינויי ביאורים לא שמורים:",
		viewer_confirm_to_proceed: "האם ברצונכם להמשיך או לאבד את השינויים?",
		viewer_warn_has_changes: "שינויים שלא נשמרו ייזנחו.",
		viewer_warn_is_printing: "יתכן שההדפסה המתבצעת לא הושלמה.",
		viewer_warn_confirm_exit: "האם ברצונכם לצאת?",
		viewer_prompt_save_changes: "במסמך שלהלן יש שינויי ביאורים לא שמורים שיאבדו:<br>${0}<br><br>האם ברצונכם לשמור את השינויים?",
		viewer_prompt_mergesplit_changes: "במסמכים שלהלן יש שינויים לא שמורים:<br>${0}<br><br>האם ברצונכם להמשיך או לאבד את השינויים?",
		viewer_prompt_mergesplit_tab_changes: "במסמך שלהלן יש שינויים לא שמורים:<br>${0}<br><br>האם ברצונכם להמשיך או לאבד את השינויים?",
		viewer_new_item_name: "מסמך חדש",
		viewer_top_frame: "מסגרת עליונה:",
		viewer_bottom_frame: "מסגרת תחתונה:",
		viewer_left_frame: "מסגרת ימנית:",
		viewer_right_frame: "מסגרת שמאלית:",
		viewer_viewer_frame: "מסגרת מציג:",
		viewer_properties_frame: "מסגרת תכונות:",
		viewer_comment_frame: "מסגרת הערות:",
		viewer_mergesplit_on: "הצגה",
		viewer_mergesplit_off: "מיזוג ופיצול",
		viewer_mergesplit_context_menu_move: "הזזה",
		viewer_mergesplit_context_menu_rename: "שינוי שם",
		viewer_mergesplit_context_menu_delete: "מחיקה",
		//move to new window
		viewer_move_to_new_window:"עברו לחלון חדש",
		viewer_continue:"ביטול שינויים",
		viewer_return_to_original_window:"חזרה לחלון המקורי",
		viewer_switch_window:"החלפת חלון",
		viewer_prompt_lost_changes:"המסמך ${0} פתוח כעת בחלון אחר. קיימים במסמך שינויים שלא נשמרו.<br><br>האם ברצונכם לעבור לחלון כדי לשמור את השינויים, או לבטל את השינויים ולפתוח אותם בחלון זה?",
		viewer_mergesplit_fallback_info: "באפשרותכם להשלים את פעולת המיזוג והפיצול רק במסמכים שנמצאים באותו מאגר.",
		viewer_tabbed_layout: "הצגה כלשוניות",
		viewer_tabbed_layout_highcontrast: "לשוניות",
		viewer_split_vertical_layout: "פיצול החלוניות לראש ותחתית",
		viewer_split_vertical_layout_highcontrast: "ראש ותחתית",
		viewer_split_horizontal_layout: "פיצול החלוניות לימין ושמאל",
		viewer_split_horizontal_layout_highcontrast: "שמאל וימין",
		viewer_add_vertical_layout: "לשונית חדשה בתחתית",
		viewer_add_vertical_layout_highcontrast: "לשונית תחתונה",
		viewer_add_horizontal_layout: "לשונית חדשה מימין",
		viewer_add_horizontal_layout_highcontrast: "לשונית ימנית",
		viewer_add_horizontal_layout_rtl: "לשונית חדשה משמאל",
		viewer_add_horizontal_layout_rtl_highcontrast: "לשונית שמאלית",
		viewer_split_properties_layout: "הצגת תכונות",
		viewer_split_comment_layout: "הצגת הערות",
		viewer_split_notelog_layout: "הצגת Notelog",
		viewer_window_title: "${0} Viewer",
		viewer_next_hit: "הצגת המסמך הבא ברשימה",
		viewer_prev_hit: "הצגת המסמך הקודם ברשימה",
		viewer_confrim_more_search_results: "תוצאות החיפוש אינן כוללות עוד מסמכים שניתן להציג.  האם ברצונכם לאחזר עוד תוצאות חיפוש?",
		viewer_confirm_get_next_page: "רשימת התוצאות אינה כוללת עוד מסמכים שניתן להציג.  האם ברצונכם לאחזר עוד תוצאות חיפוש?",
		viewer_confirm_get_next_item: "רשימת התוצאות כוללת עוד פריטים שניתן להציג.  האם ברצונכם להציג את הפריט הבא?",
		viewer_fn_annotation_tooltip: " נוצר על ידי: ${0},  נוצר בתאריך: ${1}",
		viewer_box_note_limitation: "ניתן לפתוח Box Notes ולהציג אותן בחלון נפרד בלבד.",
		viewer_click_to_open_box_note: "לחצו כאן כדי לפתוח את Box Note.",
		viewer_box_view_expiring: "כמות הזמן המרבית שניתן להציג את מסמך Box שלכם הוא 60 דקות. מהלך העבודה הנוכחי שלכם יפוג בעוד ${0} דקות. אם ברצונכם להמשיך לעבוד על המסמך, עליכם לטעון אותו מחדש עכשיו. האם ברצונכם לטעון מחדש את המסמך?",
		viewer_add_dialog_save_as_type: "שמירה כסוג:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "התנגשות משיכה",
		viewer_checkout_conflict: "משתמש אחר מוציא את המסמך.",
		viewer_checkout_confirm: "גרסה חדשה של המסמך זמינה. האם ברצונכם להמשיך למשוך את המסמך או שמא ברצונכם לטעון מחדש את הגרסה החדשה יותר במציג? אם תבחרו לטעון מחדש את המציג, כל השינויים שלא נשמרו יאבדו.",
		viewer_checkout_continue: "המשך תשלום בקופה",
		viewer_checkout_reload: "טעינה חוזרת",
		viewer_status_building: "בונה מסמך...",
		viewer_status_adding: "הוספת מסמך...‏",
		viewer_status_checking_in: "מפקיד מסמך...",

		/* Class Selector Widget */
		include_subclasses_label: "הכללת תת-מחלקות",
		include_subclasses_label2: "לחפש גם בתת-מחלקות",
		include_subclasses_note: "(כולל תת-מחלקות)",
		available_classes_col_header: "מחלקות זמינות",
		single_class_label: "חיפוש במחלקה יחידה",
		multiple_classes_label: "חיפוש במחלקות מרובות",
		multiple_classes_hover_help: "בחרו אפשרות זו כדי לחפש ביותר ממחלקה אחת. המחלקות יכולות להיות מחלקות אב או תת-מחלקות. אם תבחרו אפשרות זו, תראו את התכונות והערכים המשותפים למחלקות שנבחרו.",
		selected_classes_col_header: "מחלקות שנבחרו",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(כולל תת-תיקיות)",
		favorites_pseudo_node: "\\מועדפים\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "יש לבחור תיקיה במאגר שאליה יתווסף המסמך.",
		no_permission_add_folder: "אין לכם הרשאות מתאימות להוספת תיקיות לתיקיה זו.",
		no_permission_add_document: "אין לכם הרשאות מתאימות להוספת מסמכים לתיקיה זו.",
		document_already_in_folder: "המסמך כבר נמצא בתיקיה זו.",
		cant_move_folder_onto_parent: "התיקיה כבר נמצאת בתיקיה זו.",
		cant_move_folder_onto_self: "לא ניתן להעביר תיקיה לתוך עצמה או לתוך התת-תיקיות שלה",

		/* Workflow Widgets */
		process_application_space: "מרחב יישומים של התהליך",
		process_role: "תפקיד תהליך",
		process_inbasket: "מגירת דואר נכנס של תהליך",
		process_worklist: "רשימת עבודה",
		process_step_processor: "פריט עבודה של תהליך",
		process_tracker: "מעקב אחר פריט עבודה",
		process_info_subject: "נושא",
		process_info_stepname: "צעד",
		process_info_is_locked: "נעול",
		process_info_no_access: "ללא גישה",
		process_info_received_on: "תאריך קבלה",
		process_info_overdue: "באיחור",
		process_info_reminder_sent: "תזכורת נשלחה",
		process_info_locked_by_user: "נעול על ידי",
		process_work_object_number: "מספר אובייקט עבודה",
		process_deadline: "תאריך יעד:",
		process_launchedby: "הופעל על ידי:",
		process_receivedon: "התקבל בתאריך:",
		process_step: "צעד:",
		process_properties: "תכונות",
		process_attachments: "קבצים מצורפים",
		process_attachments_select: "בחירת צרופה",
		process_finish_button_label: "הפסקת מעקב",
		process_tracker_history: "היסטוריה",
		process_tracker_milestones: "אבני דרך",
		process_tracker_milestone: "אבן דרך",
		process_tracker_milestone_level: "רמה",
		process_tracker_milestones_empty: "אין אבני דרך להצגה.",
		process_tracker_level_selector_label: "הצגת רמות אבני דרך עד:",
		process_tracker_map_selector_label: "סינון לפי מפה:",
		process_tracker_message: "הודעה",
		process_tracker_datereached: "התאריך הגיע",
		process_tracker_stepname: "צעד",
		process_tracker_cycle: "מחזור",
		process_tracker_review_cycle: "מחזור סקירה",
		process_tracker_participant: "משתתף",
		process_tracker_completed: "הושלם",
		process_tracker_response: "תגובה",
		process_tracker_comments: "הערות",
		process_tracker_delete_confirmation: "האם ברצונכם להפסיק את המעקב אחר תזרים-העבודה: ${0}?",
		process_tracker_history_allmaps: "כל המפות",
		process_tracker_history_workflow: "תזרים-עבודה",
		process_tracker_history_terminate: "הפסקה",
		process_tracker_history_malfunction: "תקלה",
		process_filter_label: "מסנן",
		process_no_filter_summary: "לא הוחלו מסננים",
		process_filter_summary: "${0} הוחלו",
		process_filter_reset_tooltip: "האיפוס מנקה את המסנן ומרענן את מגירת הדואר הנכנס.",
		process_attachments_add_folder: "הוספת תיקיה",
		process_attachments_add_doc: "הוספת מסמך",
		process_complete_button_label: "שלמה",
		process_save_button_label: "שמירה",
		process_launch_button_label: "שיגור תזרים-עבודה",
		process_open_button_label: "פתיחה",
		process_movetoinbox_button_label: "העברה למגירת דואר נכנס",
		process_return_button_label: "חזרה",
		process_return_to_sender_tooltip: "החזרת פריט העבודה למגירת הדואר הנכנס המקורית שלו",
		process_move_to_inbasket_tooltip: "העברת פריט העבודה למגירת הדואר הנכנס האישית שלכם",
		process_reassign_tooltip: "הקצאת פריט העבודה לבעלים שונים",
		process_reassign_button_label: "הקצאה מחדש",
		process_preferences_button_label: "העדפות",
		process_manageroles_button_label: "ניהול תפקידים",
		process_manageroles_no_members: "אין חברים.",
		process_responses_button_label: "תגובות נוספות",
		process_morecustomaction_button_label: "פעולות נוספות",
		process_show_instructions: "הצגת הוראות",
		process_hide_instructions: "הסתרת הוראות",
		process_remove_attachment: "סילוק",
		process_close_window: "פריט העבודה עובד.",
		process_delegate_flag: "לדרוש מהבעלים הנוכחיים לאשר את פריט העבודה לפני ניתובו אל הצעד הבא בתזרים-העבודה.",
		process_paticipant_voting: "מספר המשתתפים הדרוש לאישור הצבעה:",
		process_get_next_label: "קבלת פריט העבודה הבא",
		process_no_more_items: "אין עוד פריטים לעיבוד במגירת הדואר הנכנס.",
		process_workflow_name: "שם תזרים עבודה:",
		process_pattern_process_name: "סקירה עבור ${0}",
		process_instuctions: "הוראות לסוקרים:",
		process_pattern_deadline: "תאריך יעד:",
		process_reviewers: "סוקרים:",
		process_approvals_required: "אישורים דרושים:",
		process_on_reject: "אם פריט העבודה נפסל:",
		process_return_to_originator: "להחזיר אלי",
		process_return_to_previous_reviewer: "להחזיר לסוקר הקודם",
		process_additional_settings: "הגדרות נוספות:",
		process_allow_reassign: "לאפשר לסוקרים להקצות מחדש סקירה זו",
		process_complete_notification: "להודיע לי כאשר הסקירה תושלם",
		process_workflow_name_hover_help: "השם שתציינו עבור פריט העבודה צריך להקל על הסוקרים להבדיל בין פריט עבודה זה לפריטים עבודה אחרים במגירת הדואר הנכנס שלהם.",
		process_approvals_required_hover_help: "אם אנשים רבים סוקרים את פריט העבודה באותו הזמן, תוכלו לציין כמה אישורים דרושים להשלמה מוצלחת של פריט העבודה.",
		process_approval_options: "אפשרויות אישור",
		process_all: "הכל",
		process_at_least: "לפחות",
		process_at_least_by_count: "לפחות ${0} סוקרים",
		process_at_least_by_percentage: "לפחות ${0}% מהסוקרים",
		process_comments: "הערות:",
		process_review_step_comments_hover_help: "אם תפסלו את פריט העבודה, עליכם לספק מידע על סיבת הפסילה. מידע זה מאפשר ליוזם פריט העבודה או לסוקר הקודם לטפל בבעיות שמצאתם.",
		process_rework_step_comments_hover_help: "עליכם לספק מידע על טיפולכם בהערות. אם אינכם מסכימים עם ההערות, ציינו את הסיבה להחלטתכם.",
		process_rejection_reason: "סיבה לפסילה:",
		process_summary: "סיכום",
		process_sequential_review: "סקירה סדרתית",
		process_sequential_review_description: "פריט העבודה ייסקר על ידי כל סוקר לפי הסדר.",
		process_parallel_review: "סקירה מקבילית",
		process_parallel_review_description: "פריט העבודה ייסקר על ידי כל הסוקרים באותו הזמן",
		process_parallel_approvals_required_error: "מספר האישורים הדרושים גדול מדי. צוינו רק ${0} סוקרים.",
		process_parallel_invalid_required_approvals_count: "הערך אינו חוקי. הערך חייב להיות ${0}.",
		process_subject_prompt: "ציינו את הנושא",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "פריט עבודה:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "הצגת תכונות",
		view_permissions_level: "הצגת הרשאות",
		view_content_level: "הצגת מסמך",
		link_level: "קישור",
		modify_properties_level: "עריכת תכונות",
		modify_content_level: "עריכת מסמך",
		minor_version_level: "עריכת גירסה משנית",
		major_version_level: "עריכת גירסה ראשית",
		create_instance_level: "צור מופע",
		delete_document_level: "מחיקת מסמך",
		delete_item_level: "מחיקת פריט",
		modify_document_permissions_level: "ניהול הרשאות",
		modify_folder_permissions_level: "ניהול הרשאות",
		modify_owner_level: "שינוי בעלים",
		delete_folder_level: "מחיקת תיקיה",
		file_in_folder_level: "הוספה לתיקיות",
		create_subfolder_level: "יצירת תת-תיקיות",
		link_item_level: "סימון מסמך, הוספה לתיקיה", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>מסמך-בלבד: הוסף סימון להמסך או הסר סימון ממסמך</li><li>תיקיה-בלבד: הוסף פריטים לתיקיה או הסר פריטים מהתיקיה</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "מחיקה",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "בעלים",
		/* previously \"Full control\" */
		edit_privilege: "מחבר",
		/* previously \"Edit\" */
		read_only_privilege: "קורא",
		/* previously \"Read only\" */
		no_access_privilege: "ללא גישה",
		share_with_label: "שיתוף עם:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "רק איתי",
		public_label: "כולם",
		members_label: "משתמשים וקבוצות מסוימים",
		select_members_label: "בחירה...‏",
		select_user_group_label: "בחירת משתמשים...‏",
		select_users_groups_label: "בחירת משתמשים וקבוצות...‏",
		select_user_label: "בחירת משתמש...‏",
		propagation_label: "פעפוע:",
		access_label: "הרשאות:",
		add_permission_add_label: "הוספה",
		security_policy_label: "מדיניות אבטחה:",
		includes_inherited_access: "כולל גישה המתקבלת בירושה",
		customize_access_for_label: "התאמת גישה עבור:",
		customize: "התאמה",
		direct: "פריט זה",
		singleLevelInheritance: "רמה אחת",
		infiniteLevelInheritance: "כל הרמות",
		inherited: "מתקבל בירושה",
		direct_hover_help: "הגדרות אבטחה חלות על הפריט שנבחר",
		singleLevelInheritance_hover_help: "הרשאות אלו חלות על פריט זה ועל הבנים הישירים שמוגדרים לרשת אבטחה מפריט זה.",
		infiniteLevelInheritance_hover_help: "הרשאות אלו חלות על פריט זה ועל כל הבנים שמוגדרים לרשת אבטחה מפריט זה.",
		inherited_hover_help: "הרשאות אלו מתקבלות בירושה מהאב.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "הרשאות אלו ל-${0} חלות על פריט זה ועל הבנים הישירים שמוגדרים לרשת אבטחה מפריט זה.",
		infiniteLevelInheritance_member_hover_help: "הרשאות אלו ל-${0} חלות על פריט זה ועל כל הבנים שמוגדרים לרשת אבטחה מפריט זה.",
		inherited_member_hover_help: "הרשאות אלו ל-${0} מתקבלות בירושה מהאב.",
		partial_hover_help: "הגדרות אבטחת הפריטים שונו על ידי משתמש",
		allow: "התרה",
		deny: "שלילה",
		basic: "בסיסי",
		advanced: "מתקדם",
		permission_type: "הגדרת גישה עבור:",
		share_with_hover_help: "הפריט משותף כרגע עם המשתמשים והקבוצות האלה.",
		direct_security_policy_hover_help: "ההגדרות של מדיניות אבטחה זו מאפשרות לכם לשנות את אבטחת הפריט.",
		security_policy_hover_help: "האבטחה של פריט זה היא 'קריאה בלבד' מפני שההגדרות של מדיניות אבטחה זו מונעות מכם לשנות את אבטחת הפריט.",
		security_remove: "אין הרשאות",
		pseudo_group_label: "חשבונות עם כינויים",
		marking_hover_help: "האבטחה של פריט זה נשלטת על ידי קבוצת סימון, היכולה להשפיע על אבטחת הפריט.",
		note_label: "חשוב:",
		marking_text: "פריט זה מסומן בתור: ${0}. יתכן שלפריט יש הגבלות אבטחה נוספות.",
		authenticated_users: "משתמשים מאומתים",
		realm_users: "משתמשי ${0}",
		denyAll: "שלילה להכל",
		allowAll: "התרת הכל",
		remove_direct_text: "לאחר שתשמרו את השינויים, ההרשאות של חבר זה יוסרו מהפריט.",
		remove_single_inheritance_text: "לאחר שתשמרו את השינויים, ההרשאות של חבר זה יוסרו מהפריט ומ- <br>בנים הישירים שמוגדרים לרשת אבטחה מפריט זה.<p>האם ברצונכם להמשיך?",
		remove_infinite_inheritance_text: "לאחר שתשמרו את השינויים, ההרשאות של חבר זה יוסרו מהפריט ומ- <br>כל הבנים שמוגדרים לרשת אבטחה מפריט זה.<p>האם ברצונכם להמשיך?",
		remove_inheritance_text: "לאחר שתשמרו את השינויים, ההרשאות של חבר זה יוסרו מהפריט ומ- <br>כל הבנים שמוגדרים לרשת אבטחה מפריט זה. רק הרשאות אשר <br>מתקבלות בירושה מפריט זה יישמרו.<p>האם ברצונכם להמשיך?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "הסר הרשאות אלו ל-${0}",

		security_proxy_text: "האבטחה של פריט זה היא 'קריאה בלבד'.",
		security_proxy_declared_text: "האבטחה של פריט זה היא 'קריאה בלבד' מפני שהיא מוגדרת על ידי proxy אבטחה.",
		security_proxy_hover_help: "האבטחה של פריט זה נשלטת על ידי האבטחה המוגדרת עבור אובייקט אחר במאגר.",
		add_permissions_label: "הוספת הרשאות",
		permission_propagation_direct: "תיקיה זו בלבד",
		permission_propagation_onelevel: "תיקיה זו ורמה אחת מתחתיה",
		permission_propagation_alllevels: "תיקיה זו וכל הרמות מתחתיה",
		document_propagation_label: "הגדרת גישה עבור:",
		document_propagation_FOLDER: "תיקייה",
		document_propagation_DOCUMENT: "מסמך",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "מקור אימות:",

		/* Versions Widget */
		object_versions_selector_label: "גרסאות:",
		object_versions_label: "גרסאות",
		object_type_document_label: "מסמך:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "תיקיות שבהן תויק",
		folders_filed_in_folder_col_hdr: "תיקייה",
		folders_filed_in_path_col_hdr: "נתיב",
		folders_filed_in_containment_name_col_hdr: "שם הכלה",
		folders_filed_in_creator_col_hdr: "נוצר על-ידי",
		folders_filed_in_date_created_col_hdr: "נוצר בתאריך",

		/* Parent Documents */
		properties_parent_documents_label: "מסמכי אב",

		/* Select object dialog */
		select_object_title: "בחירת פריט",
		select_object_breadCrumb_version_prefix: "גרסה עבור: ",
		show_versions_label: "הצגת גרסאות",
		use_current_version_label: "שימוש בגרסה הנוכחית",
		use_released_version_label: "שימוש בגרסה המופצת",

		/* Select content class dialog */
		select_class: "בחירת מחלקה",
		/* Select Search dialog */
		select_search: "בחירת חיפוש",

		/* Show hyperlink dialog */
		show_hyperlink_title: "הצגת קישור",
		show_hyperlink_intro: "תוכלו להעתיק ולהדביק קישור זה בהודעות דואל, צ'אט ודפי רשת. אם יש גרסאות רבות של הפריט, ציינו לאיזו גרסה ברצונכם לקשר.",
		show_hyperlink_intro_no_version_select: "תוכלו להעתיק ולהדביק קישור זה בהודעות דואל, צ'אט ודפי רשת.",
		show_text_label: "גרסה:",
		released_button_label: "מופצת",
		current_button_label: "הנוכחית",
		select_button_label: "גירסה ספציפית",
		show_hyperlink_no_released_version_msg: "לא קיימת גרסה מופצת של מסמך זה.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "שיגור תזרים-עבודה",
		edit_workflow_title: "תכונות פריט עבודה",
		start_workflow_intro: "שיגור תזרים-עבודה לעיבוד הפריטים שנבחרו. אם ברצונכם להקצות פריטי עבודה למשתמש מסוים, ציינו בעלים.",
		edit_workflow_intro: "תוכלו לערוך את התכונות של פריטי העבודה שנבחרו. אם ברצונכם להקצות את פריט העבודה למשתמש אחר, ציינו בעלים.",
		workflow_field_label: "תזרים-עבודה:",
		priority_field_label: "קדימות:",
		owner_field_label: "בעלים:",
		start_button_label: "התחלה",
		save_button_label: "שמירה",
		owner_value_hint: "ציינו מחרוזת אלפנומרית באורך מרבי של 32 תווים. המחרוזת יכולה להכיל רק רווחים ואת את התווים האלה: a-z,‏ A-Z, 0-9, רווח וכן `. , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "מרכיבי תוכן",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "הערך אינו חוקי. הערך יכול להכיל רק רווחים ואת את התווים האלה: a-z,‏ A-Z, 0-9, רווח וכן `. , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "ציינו ערך בטווח 1 עד 32000 כדי לציין את חשיבותו של פריט העבודה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "הערך אינו חוקי. הקדימות חייבת להיות ערך בטווח 1 - 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "שם תזרים-עבודה זה אינו קיים.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "השעיה מתזרים-עבודה",
		suspend_workitems_intro: "כשמשעים פריט עבודה מתזרים-עבודה, לא ניתן לעבד את פריט העבודה עד שהוא מחודש.",
		suspend_workitems_options_label: "השעיה פריטי העבודה שנבחרו:",
		suspend_until_resume_label: "עד לחידוש ידני",
		suspend_until_date_label: "עד",
		suspend_for_duration_label: "במשך",
		suspend_for_duration_hours: "שעות",
		suspend_for_duration_days: "ימים",
		suspend_for_duration_weeks: "שבועות",
		suspend_for_duration_months: "חודשים",
		suspend_for_duration_years: "שנים",
		suspend_button_label: "השעיה",
		suspend_duration_value_hint: "ציינו ערך בטווח 1 - 99 עבור המשך.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "הערך אינו חוקי. הערך חייב להיות בטווח 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "סילוק מתזרים-עבודה",
		remove_workflow_confirmation: "האם ברצונכם לסלק את הפריטים שנבחרו מתזרים-העבודה?‏<br>${0} פריטים נבחרו.",
		remove_workflow_button_label: "סילוק",

		/* Unfile dialog */
		unfile_dialog_title: "סילוק מתיקיה",
		unfile_dialog_remove_from_folder_label: "סילוק מתוך:",
		unfile_dialog_info_text: "תוכלו לסלק פריטים מתיקיות. עם זאת, סילוק פריט מכל התיקיות אינו מסלק את הפריט מהמאגר. עדיין תוכלו לאחזר את הפריט באמצעות הרצת חיפוש. רק התיקיות שיש לכן הרשאות עבורן מוצגות ברשימה זו.",
		unfile_dialog_select_all: "בחירת הכל",
		unfile_dialog_deselect_all: "ניקוי הכל",
		unfile_dialog_remove_button_label: "סילוק",
		unfile_dialog_select_folder_col_hdr: "בחירת תיקיה",
		unfile_dialog_folder_col_hdr: "תיקייה",
		unfile_dialog_path_col_hdr: "נתיב",
		unfile_dialog_not_filed_msg: "פריט זה אינו כלול בתיקיות כלשהן.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "אין לכם הרשאות מתאימות לסילוק פריט זה מאף אחת מהתיקיות שבהן נמצא פריט זה.",
		unfile_dialog_folder_not_selectable_tooltip: "אין לכם הרשאות מתאימות לסילוק פריט זה מתיקיה זו.",
		unfile_multi_prompt: "האם ברצונכם לסלק את הפריטים שנבחרו מהתיקיה ‎${0}‎?‏",
		unfile_large_number_items_confirmation_question: "לא ניתן לסלק את הפריטים ${0} שנבחרו מהתיקיה ${1}.<br/>סילוק מספר גדול של פריטים מתיקיה עשוי להימשך זמן רב.<br/>האם ברצונכם להמשיך?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "פתיחה",
		move_to_folder_title: "העברה לתיקיה",
		move_to_folder_button_caption: "הזזה",
		move_to_folder_label: "העברה אל:",
		add_to_folder_title: "הוספה לתיקיה",
		add_to_folder_button_caption: "הוספה",
		add_to_folder_label: "הוספה אל:",
		copy_to_folder_title: "העתקה לתיקיה",
		copy_to_folder_button_caption: "העתקה",
		copy_to_folder_label: "העתקה אל:",
		copy_to_folder_delete_label: "לאחר השלמת ההעתקה, יש למחוק את הפריט/פריטים הבחורים מהBox.",
		move_from_folder_label: "העברה מתוך:",
		move_file_info_text: "תוכלו להעביר פריטים מתיקיה אחת לתיקיה אחרת.",
		move_folder_info_text: "תוכלו להעביר תיקיות מתיקיית אב אחת לתיקיה אחרת.",
		add_doc_to_folder_info_text: "תוכלו להוסיף פריטים לתיקיה אחת או יותר. אם פריט כבר נמצא בתיקיה, הוא נשאר באותה תיקיה ונוסף לתיקיות נוספות שתציינו.",
		copy_doc_to_folder_info_text: "אפשר להעתיק מסמכים לתיקיה.",
		box_copy: "העתקת BOX",
		box_copy__button_caption: "העתקה",
		box_copy_to_info_text: "סמנו את המאגר והתיקייה ממנה תרצו להעתיק את הפריטים הבחורים מהBox.",
		box_copy_from_info_text: "סמנו את המאגר והתיקייה ממנה תרצו להעתיק את הפריטים הבחורים מהBox.",
		box_copy_version_info_text: "בכדי להוסיף מסמך חדש יש לבחור במאגר ובתיקייה. בכדי להפקד גרסה חדשה יש לבחור במאגר ובמסמך.",
		admin_box_copy: "העתקת Box",
		admin_box_copy_hover: "אפשרות זו מאפשרת למשתמשים להעתיק מסמכים לBox.",

		no_permission_to_copy_version_msg: "לא ניתן להעתיק את המסמך מהBox כגרסה חדשה של המסמך הבחור. או שאין לכם את ההרשאות ההכרחיות לשם עריכת המסמך הבחור, או שהמסמך הבחור נמשך על ידי מישהו אחר.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "אין לכם הרשאות מתאימות לסילוק פריט זה מאף אחת מהתיקיות שבהן נמצא פריט זה.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "אין לכם הרשאות מתאימות לסילוק פריט זה מתיקיה זו.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "לא ניתן להעביר פריט זה או מפני שהוא אינו מתויק בתיקיה כלשהי. בחרו פריט אחר.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "שיגור תזרים-עבודה",
		subscriptions_dialog_available_items_label: "פריטים זמינים:",
		subscriptions_dialog_info_text: "ציינו את תזרים-העבודה שיופעל.",
		subscriptions_dialog_select_button_label: "אישור",
		subscriptions_dialog_name_col_hdr: "שם",
		subscriptions_dialog_desc_col_hdr: "תיאור",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "ניהול תפקידים",
		manageroles_dialog_info_text: "תוכלו לשנות את רשימת המשתמשים עבור כל תפקיד המשויך למרחב היישומים של תהליך זה.",
		manageroles_dialog_members_label: "חברים",
		manageroles_dialog_roles_label: "תפקידים",
		manageroles_dialog_add_button_label: "הוספת משתמשים וקבוצות",
		manageroles_dialog_remove_button_label: "סילוק",
		manageroles_dialog_save_button_label: "שמירה",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "אין תזרימי-עבודה המשויכים לפריט זה.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "העדפות תזרים-עבודה",
		workflow_pref_dialog_info_text: "ציינו את אירועי תזרים-העבודה שעבורם ברצונכם לקבל דיווחים. תוכלו גם להפעיל את האפשרות לנתב את עבודתכם לאדם אחר. לשם כך, בחרו משתמש שאליו תועבר העבודה.",

		workflow_pref_general: "כללי",
		workflow_pref_email_address: "כתובת דואל",
		workflow_pref_email_address_hover: "ציינו את כתובת הדואל שבה תקבלו דיווחי תזרים-עבודה.",
		workflow_pref_preferred_locale: "שפה",
		workflow_pref_preferred_locale_hover: "ציינו את השפה שבה יוצגו דיווחי דואל.",

		workflow_pref_work_item_notice: "דיווחי פריט עבודה",
		workflow_pref_step_new_assignment: "פריט עבודה מוקצה לי",
		workflow_pref_step_new_assignment_hover: "להודיע לי כשאקבל פריט עבודה חדש.",
		workflow_pref_step_expired_deadline: "תאריך היעד של פריט עבודה חלף",
		workflow_pref_step_expired_deadline_hover: "להודיע לי אם החמצתי תאריך יעד של פריט עבודה.",
		workflow_pref_step_reminders: "תאריך היעד של פריט עבודה מתקרב",
		workflow_pref_step_reminders_hover: "להזכיר לי שפריט עבודה מתקרב לתאריך היעד שלו.",

		workflow_pref_originator_notice: "דיווחי מאתחל",
		workflow_pref_milestone_reached: "הגעה לאבן דרך",
		workflow_pref_milestone_reached_hover: "להודיע לי על הגעה לאבן דרך בתזרים-עבודה שאתחלתי.‏",

		workflow_pref_tracker_notice: "דיווחי במעקב תזרים-עבודה",
		workflow_pref_tracker_new_assignment: "פריט מעקב חדש מוקצה לי",
		workflow_pref_tracker_new_assignment_hover: "להודיע לי כשתזרים-עבודה במעקב שלי משוגר.",
		workflow_pref_tracker_deadline_reminders: "תאריך היעד של תזרים-עבודה מתקרב",
		workflow_pref_tracker_deadline_reminders_hover: "להזכיר לי שתזרים-עבודה מתקרב לתאריך היעד שלו.",
		workflow_pref_tracker_deadline_expired: "תאריך היעד של תזרים-עבודה חלף",
		workflow_pref_tracker_deadline_expired_hover: "להודיע לי כאשר תאריך היעד של תזרים-עבודה חלף.",
		workflow_pref_tracker_exception: "אירעה שגיאת תזרים-עבודה",
		workflow_pref_tracker_exception_hover: "להודיע לי כאשר מתרחשת שגיאת תזרים-עבודה.‏",
		workflow_pref_tracker_expired_deadline: "תאריך היעד של הצעד חלף",
		workflow_pref_tracker_expired_deadline_hover: "להודיע לי כאשר תאריך היעד של הצעד חלף בתזרים-עבודה הנמצא במעקב שלי.",
		workflow_pref_tracker_milestone_reached: "הגעה לאבן דרך",
		workflow_pref_tracker_milestone_reached_hover: "להודיע לי על הגעה לאבן דרך בתזרים-עבודה הנמצא במעקב שלי.",

		workflow_pref_out_notice: "היעדרות מהמשרד",
		workflow_pref_proxy_user: "האצלת העבודה למשתמש",
		workflow_pref_proxy_user_hover: "השתמשו באפשרות זו כדי לנתב אוטומטית את עבודכתם למשתמש אחר, כשאתם נעדרים מהמשרד או נמצאים בחופשה.",
		workflow_pref_workflow: "תזרים-עבודה",
		workflow_pref_on: "מופעל",
		workflow_pref_off: "מושבת",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "שיגור תזרים-עבודה",
		transfered_workflows_dialog_info_text: "בחרו תזרים-עבודה לשיגור.",
		transfered_workflows_dialog_available_items_label: "פריטים זמינים:",
		transfered_workflows_dialog_select_button_label: "שיגור",
		transfered_workflows_dialog_name_col_hdr: "שם",
		transfered_workflows_dialog_no_item_found: "לא נמצאו תזרימי-עבודה מועברים.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "העברת תזרים-עבודה",
		transfer_workflow_dialog_info_text: "בחרו תזרים-עבודה שיועבר למערכת תזרימי-העבודה.",
		transfer_workflow_dialog_use: "שימוש בשם תזרים-עבודה זה",
		transfer_workflow_dialog_use_another: "שימוש בשם תזרים-עבודה אחר",
		transfer_workflow_dialog_in_use: "שם תזרים-העבודה הוא: ",
		transfer_workflow_dialog_transfer_button_label: "העברה",
		transfer_workflow_dialog_no_items_found: "לא נמצאו תזרימי-עבודה מועברים.",
		transfer_workflow_dialog_use_hover: "ציינו את שם תזרים-העבודה הנוכחי מהגדרת תזרים-העבודה.",
		transfer_workflow_dialog_another_hover: "ציינו שם תזרים-עבודה שונה או השתמשו שוב בשם תזרים-העבודה המועבר.",

		/*Search In control*/
		search_in_title: "לחפש בתוך:",
		search_in_teamspaces: "מרחבי צוות",
		search_in_repositories: "מאגרים",
		search_in_thisteamspaces: "מרחב צוות זה",

		ajaxViewer_save: "שמירת ביאורים",
		ajaxViewer_print: "הצגה לפני הדפסה",
		ajaxViewer_firstPage: "דף ראשון",
		ajaxViewer_previousPage: "הדף הקודם",
		ajaxViewer_nextPage: "הדף הבא",
		ajaxViewer_lastPage: "הדף האחרון",
		ajaxViewer_unknownPageCount: "1 מתוך ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} מתוך ${1}",
		ajaxViewer_zoomOut: "הרחקה",
		ajaxViewer_zoomIn: "קירוב",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "התאמה לרוחב",
		ajaxViewer_fitHeight: "התאמה לגובה",
		ajaxViewer_fitPage: "התאמה לדף",
		ajaxViewer_rotate270: "סיבוב 270 מעלות",
		ajaxViewer_rotate90: "סיבוב 90 מעלות",
		ajaxViewer_rotate180: "סיבוב 180 מעלות",
		ajaxViewer_darken: "הכהיה",
		ajaxViewer_lighten: "הבהרה",
		ajaxViewer_lessContrast: "פחות ניגודיות",
		ajaxViewer_moreContrast: "יותר ניגודיות",
		ajaxViewer_invert: "תשליל",
		ajaxViewer_createHighlight: "הדגשה",
		ajaxViewer_createNote: "ביאורים",
		ajaxViewer_editAnnotation: "עריכת תכונות ביאור",
		ajaxViewer_deleteAnnotation: "מחיקת ביאור",
		ajaxViewer_editAnnotationTitle: "עריכת תכונות ביאור",
		printableView_print: "הדפסה",
		printableView_close: "סגירה",

		search_results_dropdown_button: "תצוגת תוצאות",
		search_results_columns_label: "תצוגת תוצאות חיפוש",
		search_results_columns_description: "בחרו את התכונות שיוצגו בתוצאות החיפוש.",
		search_results_sortby_label: "מיון לפי:",
		search_results_order_label: "סדר מיון:",
		search_results_accending_label: "עולה",
		search_results_descending_label: "יורד",
		search_results_available_properties: "זמין",
		search_results_selected_properties: "נבחר",
		search_rank_property: "דירוג (חיפוש תמליל בלבד)",
		search_name_attribute: "שם (${0})",
		search_results_summary_enabled_label: "הפעלת סיכומי תוכן (חיפוש תמליל בלבד)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "חיפושים",
		manage_teamspace_classes_tab_title: "מחלקות",
		manage_teamspace_entry_templates_tab_title: "תבניות קלט",
		manage_teamspace_team_tab_title: "צוות",
		manage_teamspace_roles_tab_title: "תפקידים",
		manage_teamspace_dialog_title: "שינוי מרחב צוות",
		manage_teamspace_button_label: "שינוי מרחב צוות",
		manage_teamspace_team_pane_heading: "בחירת צוות",
		manage_teamspace_classes_pane_heading: "בחירת מחלקות",
		manage_teamspace_entry_templates_pane_heading: "בחירת תבניות קלט",
		manage_teamspace_no_rights_message: "אין לכם הרשאה מתאימה לשינוי מרחב צוות זה.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "תכונות מרחב צוות",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "ציינו את התכונות שיוצגו עבור מסמכים ברשימת התוכן כשמשתמשים מעיינים במרחב הצוות. תוכלו גם לציין את הסדר שבו מוצגות התכונות.",
		teamspace_props_sel_cols_use_default_label: "שימוש בהגדרות <b>עיון</b> עבור מאגר זה",
		teamspace_props_sel_cols_use_default_tooltip: "שימוש בהגדרות המצוינות בדף 'עיון' עבור מאגר זה בכלי המנהלה.",
		teamspace_props_general_tab_label: "כללי",
		teamspace_props_column_props_tab_label: "תכונות מוצגות",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "בחירת קובץ ליבוא",
		teamspace_import_template_instruction: "תוכלו לבחור קובץ יצוא של תבנית מרחב צוות ליבוא.",
		teamspace_import_template_button_label: "יבוא",
		teamspace_import_template_dialog_label: "יבוא תבנית מרחב צוות",

		/* Annotation Dialog */
		annotationDlg_title: "ביאורים",
		annotationDlg_description: "למסמך שנבחר יש הביאורים האלה:",
		annotationDlg_msg_noAnnotations: "לא קיימים ביאורים. לחצו על 'הוספה' כדי ליצור ביאור.",
		annotationDlg_pageLabel: "דף: ${pageNum}",
		annotationDlg_accLabel: "גישה: ${accType}",
		annotationDlg_accLabel_public: "ציבורי",
		annotationDlg_accLabel_private: "פרטי",
		annotationDlg_accLabel_privateGroup: "פרטי (${groupName})",
		annotationDlg_copiable: "אפשר להעתיק לשרת אחר",
		annotationDlg_cannotCopy: "אי אפשר להעתיק לשרת אחר",
		annotationDlg_addButtonLabel: "הוספה",

		/* Share Dialog */
		is_shared: "שותף",
		is_share_pending: "שיתוף בהמתנה",
		share_title: "שיתוף Box",
		share_instructions_new: "יש לשלוח דואל הכולל קישור לקובץ המשותף. כל אחד שיש ברשותו קישור יכול לגשת לקובץ",
		share_instructions_existing: "יש לשלוח דואל הכולל קישור לקובץ המשותף. כל אחד שיש ברשותו קישור יכול לגשת לקובץ. יתכן שלאחרים יש את הקישור מכיוון שמישהו אחר כבר שיתף את הקובץ.",
		share_instructions_another_version_shared: "יש לשלוח דואל הכולל קישור לקובץ המשותף. כל אחד שיש ברשותו קישור יכול לגשת לקובץ. יתכן שלאנשים אחרים יש את הקישור מכיוון שמישהו כבר שיתף גרסה אחרת של קובץ זה.",
		share_buttonLabel_share: "שיתוף",
		share_email_addresses: "משלוח אל:",
		share_email_addresses_hover: "כאשר השיתוף מושלם נשלח קישור לכתובות הדואל הבאות. אם לא תזינו דבר, הקישור ישלח לכתובת הדואל שלכם.",
		share_email_addresses_reshare_hover: "כאשר השיתוף מושלם נשלח קישור לכתובות הדואל הבאות. אם לא תזינו דבר, לא ישלח אף דואל.",
		share_password: "קביעת ססמה:",
		share_password_placeholder: "אופציונלי",
		share_comments: "הודעה:",
		share_comments_default: "אני רוצה לשתף איתך את הקובץ שלי בBox.",
		share_myEmail: "לשלוח מ:",
		share_expiration: "קביעת תוקף הקישור:",
		share_expire: "תפוגת תוקף הגישה:",
		share_expire_none: "ללא תפוגה",
		share_allowDownload: "אישור הורדה",
		share_add: "הוספה",
		share_advanced_instructions: "הגדות ההורדה, התפוגה, והססמה חלים על הקובץ המשותף בBox.",
		share_advanced_existing_instructions: "הגדות ההורדה, התפוגה, והססמה חלים על הקובץ המשותף בBox.",
		share_options_edit_warning: "חשוב: כל שינוי להגדרות אלה משפיע על כל בעלי הקישור, כולל האנשים שכבר קיבלו את הקישור.",
		share_link: "קישור:",
		share_email_addresses_placeholder: "כתובות דואל",
		share_email_address_placeholder: "כתובת דואל",
		share_email_address_invalid: "הזינו כתובת דואל תקפה.",
		share_cannot_share_with_self: "אינכם יכולים לשתף קבצים עם עצמכם. ציינו משתמש שונה.",
		share_selected_version_with_minor_warning_hover: "גרסה ${0} של המסמך משותפת. בחרתם בגרסה ${1}.<br><br><b>אזהרה</b>: אם תשתפו את גרסה ${1}, לא יהיה ניתן לשתף את גרסה${2} אלא אם תמחקו את שיתוף גרסה ${1}.",
		share_selected_version_hover: "גרסה ${0} של המסמך משותפת. בחרתם בגרסה ${1}.",
		share_selected_version_message: "חשוב: גרסה ${0} של המסמך משותפת. בחרתם בגרסה ${1}.",
		share_different_version_message: "חשוב: בחרתם בגרסה ${1}, אבל גרסה ${0} של המסמך כבר משותפת.  לא ניתן לשתף את גרסה ${1} אלא אם תמחקו קודם את השיתוף, אך ניתן לשתף קישור לגרסה ${0} במקום זאת",
		share_version_message: "חשוב: גרסה ${0} של המסמך משותפת. בחרו איזו גרסה ברצונכם לשתף.",
		share_version_new: "שתפו גרסה ${0}",
		share_version_new_p8_hover: "שיתוף מסמך זה יוצר קישור ייחודי לגרסה שנבחרה בלבד.<br><br>כאשר מסמך כבר משותף:<ul><li>תוכלו לשתף גרסה מאוחרת יותר, והקישור יפנה מחדש לגרסה המאוחרת.</li><li>לא ניתן לשתף גרסה מוקדמת יותר אלא אם מוחקים קודם את השיתוף.</li></ul>",
		share_version_new_cm_hover: "שיתוף מסמך זה יוצר קישור ייחודי לגרסה שנבחרה בלבד.<br><br>כאשר מסמך כבר משותף:<ul><li>תוכלו לשתף גרסה מאוחרת יותר, והקישור יפנה מחדש לגרסה המאוחרת.</li><li>לא ניתן לשתף גרסה מוקדמת יותר.</li></ul>",
		share_version_update: "שתפו את גרסה ${0} (עדכנו את אפשרויות השיתוף).",
		share_version_update_p8_hover: "שיתוף מסמך זה משמר את הקישור לגרסה המסויימת בלבד.<br><br>כאשר מסמך כבר משותף:<ul><li>תוכלו לשתף גרסה מאוחרת יותר, והקישור יפנה מחדש לגרסה המאוחרת.</li><li>לא ניתן לשתף גרסה מוקדמת יותר אלא אם מוחקים קודם את השיתוף.</li></ul>",
		share_version_update_cm_hover: "שיתוף מסמך זה משמר את הקישור לגרסה המסויימת בלבד.<br><br>כאשר מסמך כבר משותף:<ul><li>תוכלו לשתף גרסה מאוחרת יותר, והקישור יפנה מחדש לגרסה המאוחרת.</li><li>לא ניתן לשתף גרסה מוקדמת יותר.</li></ul>",
		share_version_change_to_current: "שתפו את גרסה ${0} (עדכנו את השיתוף עם הגרסה שנבחרה).",
		share_version_change_to_current_p8_hover: "שיתוף מסמך זה מעדכן את הקישור כך שיוביל לגרסה שנבחרה בלבד.<br><br>כאשר מסמך כבר משותף:<ul><li>תוכלו לשתף גרסה מאוחרת יותר, והקישור יפנה מחדש לגרסה המאוחרת.</li><li>לא ניתן לשתף גרסה מוקדמת יותר אלא אם מוחקים קודם את השיתוף.</li></ul>",
		share_version_change_to_current_cm_hover: "שיתוף מסמך זה מעדכן את הקישור כך שיוביל לגרסה שנבחרה בלבד.<br><br>כאשר מסמך כבר משותף:<ul><li>תוכלו לשתף גרסה מאוחרת יותר, והקישור יפנה מחדש לגרסה המאוחרת.</li><li>לא ניתן לשתף גרסה מוקדמת יותר.</li></ul>",
		share_repository: "מאגר לקבצים משותפים",
		share_repository_hover: "אם אינכם רואים את מאגר הBox בו אתם רוצים להשתמש, ניתן להוסיף מאגר Box חדש בעמוד המאגרים.",
		share_options: "אפשרויות שיתוף:",
		unshare_confirm: "אם אתם מוחקים את השיתוף, כל קישורי השיתוף נשברים, כולל קישורי שיתוף שנשלחו בעבר על ידי אחרים. משתמשים אחרים אשר ירצו לשתף את המסמך יצטרכו לבחור את הקובץ המקורי ולשתפו שוב.<br><br>האם אתם בטוחים שאתם רוצים למחוק שיתוף זה?",
		unshare_button: "מחיקת שיתוף Box",
		admin_share: "שירותי שיתוף Box:",
		admin_share_hover: "יש לאפשר למשתמשים לשתף מסמך מכל מאגר בו מופעל שיתוף הBox. שיתוף מסמך כולל את העתקת קובץ לBox, יצירת הקישור ושליחת הקישור בדואל.",
		admin_my_email_modifiable: "יש לאפשר למשתמשים לשנות את כתובת השולח",
		admin_my_email_modifiable_hover: "כברירת מחדל, עבור שיתוף Box, כתובת הדואל של המשתמש היא לקריאה בלבד ונמשכת ממיפוי המשתמשים וכתובות הדואל המייצגים חשבונות של משתמשי Box.<br><br>יש לבחור באפשרות זו כדי לאפשר למשתמשים לערוך את כתובת הדואל שלהם בעת שיתוף; עם זאת, התקפות של כתובת הדואל לא מאומתת.",
		admin_repos_admin_user: "מנהלן שיתוף:",
		admin_repos_admin_user_hover: "יש להגדיר את מנהלן השיתוף אם יש לכם שולחן עבודה עם שירותי  שיתוף Box מופעלים ומאגר Box זה מסומן כמאגר קבצים משותפים.<br><br>יש ללחוץ על 'הגדרה' ולהתחבר לBox על ידי שימוש בחשבון מנהלן Box תקף.<br><br>על מנהלן השיתוף להיות משתמש מנהלן Box המוגדר כבעל שטח אחסון ללא הגבלה בBox.",
		admin_repos_admin_user_not_set_warning: "מנהלן הBox אינו מוגדר עבור המאגר המסומן.<br><br>שירותי שיתוף Box מנוטרלים עד שיוגדר מנהלן הBox עבור המאגר המסומן, או עד שיסומן מאגר Box אחר בו מנהלן הBox הינו מוגדר.<br><br>ניתן לקבוע את מנהלן הBox באגף שירותי שיתוף הBox בעמוד המאגר הכללי.",
		admin_share_not_configured_warning: "לפני שתוכלו להשתמש בשירותי שיתוף של Box, עליכם קודם כל להוסיף ולבחור מאגר Box עם אימות שרת.",
		/* Office Online Server settings */
		admin_office_online_title: "תצורת Office Online",
		admin_office_online_server_enable: "שרת Office Online:",
		admin_office_online_server_enable_hover: "ציינו אם ברצונכם שמשתמשים הניגשים לשולחן העבודה הזה יוכלו לערוך את מסמכי Office שלהם באמצעות שרת Office Online.",		
		admin_office_online_allow_collaborative_editing: "אפשרו עריכה בשיתוף פעולה",
		admin_office_online_allow_collaborative_editing_hover: "אפשרו ליותר ממשתמש אחד לעבוד על אותו מסמך. נקו את האפשרות אם ברצונכם להגביל עריכת מסמכים למשתמש אחד.",
		admin_office_online_repository_not_set_warning: "לפני שתוכלו לאפשר את שירות Office Online, עליכם קודם כל לאפשר את השירות במאגר ולציין את כתובת ה-URL של שרת Office Online. לחצו על <b>מאגרים</b>, בחרו מאגר ולאחר מכן בלשונית <b>עריכת שילוב</b>, אפשרו את השירות. לחצו על <b>הגדרות > כללי</b> ואז הזינו את כתובת URL של שרת Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "ציינו אם ברצונכם להשתמש בשרת Office Online לעבודה במסמכי Office.",
		admin_office_online_server_url: "כתובת URL של שרת Microsoft Office Online",
		admin_office_online_server_url_hover: "ציינו את ה-URL שבאמצעותו יישומים אחרים יכולים לתקשר עם שרת Office Online. ה-URL הוא במבנה http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "אומת",
	    admin_office_online_server_Failed: "<b>נכשל</b>",

		admin_repcfg_office_online_service_p8_hover: "כדי לאתחל את המאגר לשימוש בשרת Office Online, ביכולתכם להוסיף את תבנית הקובץ ההתחלתית לכל יישום Office. אם לא צוינה תבנית, תשמש תבנית ברירת המחדל.",	
		admin_repcfg_office_online_server_integration: "שילוב  שרת MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "לפני שתוכלו לאפשר את שרת Office Online, עליכם קודם כל לציין את כתובת ה-URL של שרת Microsoft Office Online. לחצו על הגדרות > כללי ואז הזינו את כתובת ה-URL",
		admin_repcfg_office_online_word_template_name: "תבנית ברירת מחדל של Word",
		admin_repcfg_office_online_excel_template_name: "תבנית ברירת מחדל של Excel",
		admin_repcfg_office_online_powerpoint_template_name: "תבנית ברירת מחדל של PowerPoint",
		admin_repcfg_office_online_blank_template_description: "זו תבנית ברירת המחדל המשמשת אם אינכם מוסיפים תבנית משלכם.",
		/* Edit Service settings */
		admin_icn_edit_title: "עריכת תצורה",	
	    admin_icn_edit_files_cleanup_interval: "מרווח זמן לניקוי קבצים זמניים (בימים):",
	    admin_icn_edit_files_cleanup_interval_hover: "באפשרותכם להגדיר את מספר הפעמים שקבצים זמניים יישמרו בלקוח עריכת ה-ICN.  ברירת המחדל היא 20 ימים. הערך המרבי הוא 20 ימים. הערך המינימלי הוא יום אחד.",
	    admin_icn_edit_service_integration: "עריכת שילוב שירות",
	    admin_icn_edit_service_integration_intro: "שירות העריכה מאפשר למשתמשים להוסיף ולערוך קבצים בקלות ביישומים המקוריים המותקנים במחשבים שלהם.<br><br><b>חשוב:</b> אם תפעילו את שירות העריכה, יהיה עליכם לשמור את תצורת המאגר שלכם לפני שתוכלו לערוך את הקטגוריות המוגדרות מראש.",
		admin_icn_edit_service: "עריכת שירות:",
		admin_icn_edit_enable_hover: "כדי להשתמש בשירות העריכה, עליכם:<ul><li>הפעלת השירות במאגר</li><li>הפעלת השירות בשולחנות עבודה בסביבתכם</li><li>התקינו את לקוח IBM Content Navigator Edit בתחנות העבודה של המשתמשים</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "הפעלה",
		admin_icn_edit_disable: "השבתה",
		admin_icn_edit_create_new_category: "סיווג חדש",
		admin_icn_edit_delete_category: "מחיקת סיווג",
		admin_icn_edit_edit_category: "עריכת סיווג",
		admin_icn_edit_disable_category: "השבתת קטגוריה",
		admin_icn_edit_enable_category: "הפעלת קטגוריה",
		admin_icn_edit_new_category_dialog_title: "סיווג חדש",
		admin_icn_edit_edit_category_dialog_title:"עריכת סיווג",
		admin_icn_edit_new_category_dialog_instructions: "קטגוריית מסמכים מאפשרת לכם לשייך תבניות לסוגי MIME ספציפיים עבור שירות העריכה. לדוגמה, באפשרותך לשייך קבוצת תבניות לקבצי PDF כדי שמשתמשים יוכלו להחיל תבניות כשהם מוסיפים או משנים קבצים מלקוח IBM Content Navigator Edit. <br><br><b>חשוב:</b> עליכם לשמור את תצורת המאגר שלכם לפני שתוכלו להוסיף תבניות לקטגוריה שאתם יוצרים. ",
		admin_icn_edit_edit_category_dialog_instructions: "עליכם לשמור את תצורת המאגר שלכם לפני שתוכלו להוסיף תבניות לקטגוריה זו. ",
		admin_icn_edit_delete_category_dialog_instructions: "האם ברצונכם למחוק קטגוריה זו וכל תבנית המשויכת לקטגוריה?<br><br><b>חשוב:</b> השינויים שלכם לא יהיו לצמיתות עד שתשמרו את השינויים במאגר. ",
		admin_icn_edit_category_label: "סיווג: ",
		admin_icn_edit_category_discription_label:"תיאור: ",
		admin_icn_edit_template_column_head:"שם תבנית",
		admin_icn_edit_category_duplicate_error_message: "כבר קיימת קטגוריה עם זיהוי זה. ",
		admin_icn_edit_word_category_description: "קטגוריה זו מגדירה את התבניות הזמינות עבור מסמכי Microsoft Word בשירות העריכה. ",
		admin_icn_edit_excel_category_description: "קטגוריה זו מגדירה את התבניות הזמינות עבור מסמכי Microsoft Excel בשירות העריכה. ",
		admin_icn_edit_powerpoint_category_description: "קטגוריה זו מגדירה את התבניות הזמינות עבור מסמכי Microsoft PowerPoint בשירות העריכה. ",

		icn_edit_add_template_dialog_title:"הוספת תבנית ${0}",
		icn_edit_add_template_only_one_file_error: "באפשרותכם לבחור רק בקובץ אחד.",
		icn_edit_add_template_file_type_error: "יש לציין קובץ תבנית חוקי של ${0}.<br><br>לסוג המסמך שנבחר יש סוג MIME של ${1}.<br><br>סוגי MIME חוקיים: ${2}.",
		icn_edit_change_template_dialog_title: "עריכת תבנית ${0}",
		icn_edit_action_in_new_menu_name:"מסמך ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "עם Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "עם יישומי שולחן עבודה",
		icn_edit_new_document_dialog_title: "מסמך ${0} חדש",
		icn_edit_new_document_dialog_intro: "צרו מסמך ${0} חדש והוסיפו אותו למאגר. המסמך ייווצר עם תבנית שירות העריכה הנבחרת.", 
		icn_edit_select_edit_service_template: "בחירת תבנית",
		icn_edit_edit_service_template: "תבנית עריכת שירות:",
		icn_edit_new_document_category_no_templates_message:"אין תבניות בקטגוריה זו. אנא צרו קשר עם המנהלן שלכם כדי להוסיף תבניות לקטגוריה זו.",
		icn_edit_installer: "התקנת IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "הגדרות מחלקה ותפקיד",
		admin_repcfg_classes_and_roles_warning: "לציון מחלקות ומשתמשים או קבוצות משתמשים שיש להם הרשאה ליצירה, עריכה ושימוש בתבניות או ליצירת טיוטות מסמכים שעובדות עם שירות Office Online ושירות עריכה.",
		admin_repcfg_classes_and_roles_click_warning: "לחצו כאן.",
		/* Edit Service settings END */
		share_no_my_email_error: "ארעה בעיה בזיהוי כתובת הדואל הנדרשת לשם שיתוף המסמך.",
		share_no_my_email_error_explanation: "התחברתם בעזרת זיהוי המשתמש ${0}, אך זיהוי המשתמש אינו ממופה לכתובת דואל.",
		share_no_my_email_error_userResponse: "יש לנסות להתחבר שוב, או להתחבר בעזרת זיהוי משתמש אחר. אם הבעיה נמשכת, דווחו על הבעיה למנהלן המערכת.",
		share_no_my_email_error_adminResponse: "זיהוי המשתמש${0} אינו ממופה לכתובת דואל ושולחן העבודה ${1} אינו מאפשר למשתמשים לערוך את כתובת הדואל עבור שירותי שיתוף Box<br><br>יש לנסות את אחד הפתרונות הבאים:<br>וודאו שתוסף מיפוי הדואל רשום.<br>ודאו שקובץ הemailMappingPlugin.json כולל את זיהוי המשתמש ${0} ואת כתובת הדואל של המשתמש, ואז בנו, הגדירו ורישמו את תוסף מיפוי הדואל.<br>אם אינכם רוצים להשתמש בתוסף מיפוי הדואל או במדריך הדואלFileNet P8, ובמקום מעדיפים לאפשר למשתמשים להזין את כתובת הדואל של עצמם כאשר הם משתפים מסמך, ביכולתכם לשנות את הגדרות שולחן העבודה של שירותי שיתוף הBox כך שיאפשרו למשתמשים לשלוח את הקישור מכתובת דואל חלופית.",
		share_no_my_email_error_0: "זיהוי_משתמש",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "שותפה גרסה מאוחרת יותר של מסמך זה, אז אין באפשרותכם לשתף את הגרסה המסומנת של המסמך.",
		share_later_version_shared_error_explanation: "אין אפשרות לשתף גרסה מוקדמת של מסמך אשר שותף בעבר.",
		share_later_version_shared_error_userResponse: "בכדי לשלוח קישור לגרסה מאוחרת יותר של הקובץ יש לבחור את הגרסה המאוחרת ואז להשתמש בפעולת השיתוף.<br><br>בכדי לשתף את הגרסה המסומנת של המסמך יש למחוק את השיתוף של הגרסה המאוחרת יותר של המסמך.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "הודעה חדשה",
		email_from: "מ:",
		email_to: "עד:",
		email_cc_link: "עותק",
		email_bcc_link: "עותק סמוי",
		email_cc: "עותק:",
		email_bcc: "עותק סמוי:",
		email_address_invalid: "הזינו כתובת דואל תקפה.",
		email_subject: "נושא:",
		email_message: "הודעה:",
		email_message_placeholder: "הוספת הודעה",
		email_attachments: "צרופות:",
		email_links: "קישורים:",
		email_send: "משלוח",
		email_dont_send: "לא לשלוח",
		email_subject_reminder: "תזכורת נושא",
		email_subject_reminder_confirm: "האם ברצונכם לשלוח את ההודעה ללא נושא?",
		email_missing_from_error: "אירעה בעיה בזיהוי כתובת השולח הנדרשת לשליחת המסמך.",
		email_missing_from_error_explanation: "התחברתם בעזרת זיהוי המשתמש ${0}, אך זיהוי המשתמש אינו ממופה לכתובת דואל.",
		email_missing_from_error_userResponse: "יש לנסות להתחבר שוב, או להתחבר בעזרת זיהוי משתמש אחר. אם הבעיה נמשכת, דווחו על הבעיה למנהלן המערכת.",
		email_missing_from_error_adminResponse: "זיהוי המשתמש${0} אינו ממופה לכתובת דואל ושולחן העבודה ${1} אינו מאפשר למשתמשים לערוך את כתובת השולח.<br><br>יש לנסות את אחד הפתרונות הבאים:<br>וודאו שתוסף מיפוי הדואל רשום.<br>ודאו שקובץ הemailMappingPlugin.json כולל את זיהוי המשתמש ${0} ואת כתובת הדואל של המשתמש, ואז בנו, הגדירו ורישמו את תוסף מיפוי הדואל.<br>אם אינכם רוצים להשתמש בתוסף מיפוי דואל או במדריך הדואל FileNet P8, ומעדיפים, במקום זאת, לאפשר למשתמשים להזין את כתובת הדואל של עצמם כאשר הם שולחים דואל, ביכולתכם לשנות את הגדרות הדואל של שולחנות העבודה כדי לאפשר למשתמשים לשנות את כתובת השולח.",
		email_missing_from_error_0: "זיהוי_משתמש",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "לא ניתן לפתוח את המסמך.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator לא יכול להתחבר ללקוח IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "התקינו והחילו את לקוח IBM Content Navigator Edit בתחנת העבודה שלכם. לאחר מכן, נסו לפתוח שוב את המסמך.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "לא ניתן לפתוח את המסמך.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator לא יכול להתחבר ללקוח IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "התקינו והחילו את לקוח IBM Content Navigator Edit בתחנת העבודה שלכם. לאחר מכן, נסו לפתוח שוב את המסמך.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator אינו מוגדר כראוי לשיתוף מסמכים.",
		share_not_configured_error_explanation: "מאפיין שיתוף Box חייב להיות מוגדר כראוי לפני שייתאפשר לשתף מסמכים.",
		share_not_configured_error_userResponse: "צרו קשר עם המנהלן שלכם ובקשו שיגדיר את תצורת מאפיין שיתוף Box.",
		share_not_configured_error_adminResponse: "יש להגדיר את תצורת ההפריטים הבאים לפני שיתוף מסמכים:<ul><li>מנהל המשימות צריך להיות מופעל בהגדרות כלי הניהול.</li><li>זיהוי חיבור מנהל המשימות חייב להיות מוגדר במאגר.</li><li>שיתוף חייב להיות מופעל במאגר.</li><li>יש לבחור במאגר Box לשם שיתוף על שולחן העבודה.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "השינויים לתכונה לא נשמרו עבור הגרסה החדשה",
		checkin_cors_save_attributes_error_explanation: "הגרסה נוצרה, אך השינויים לתכונה לא נשמרו. עדיין ניתן למשוך את המסמך.",
		checkin_cors_save_attributes_error_userResponse: "שחררו את נעילת המסמך ועדכנו את התכונות באמצעות תפריט התכונות תלוי ההקשר.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "השינויים לתכונה לא נשמרו עבור המסמך החדש",
		add_cors_save_attributes_error_explanation: "המסמך נוצר, אך השינויים לתכונה לא נשמרו.",
		add_cors_save_attributes_error_userResponse: "עדכנו את התכונות באמצעות תפריט התכונות תלוי ההקשר.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "לא ניתן לפתוח את המסמך.",		
		edit_document_using_edit_service_error_explanation: "לא ניתן לפתוח את המסמך בשירות העריכה.",
		edit_document_using_edit_service_error_userResponse: "בקשו מהמנהלן שלכם לעדכן את שילוב שירת עריכה.<br><br> אם המשתמש זקוק לגישה למסמך זה משירות העריכה, עברו לדף עריכת השילוב של המאגר ועדכנו את שילוב שירות העריכה כדי שיכלול את המחלקה ברשימת המחלקות שניתן לשנות על מנת להוסיף תמיכה בשירות העריכה.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "לא ניתן לפתוח את המסמך.",		
		edit_document_is_editing_by_oos_error_explanation: "המסמך משמש את שירות Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "עליכם לשמור את המסמך ולסגור אותו בשירות Office Online לפני שתוכלו לפתוח אותו בשירות העריכה.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "הפעלת טעינת שיתוף משאבים ממקורות שונים (CORS)",

		/* Email Settings */
		admin_email_settings: "הגדרות דואל:",
		admin_email_settings_hover: "ציינו את סוג שירות הדואל שבו תרצו להשתמש. כאשר תאפשרו שירות דואל מבוסס HTML, תהיה לכם האפשרות לאפשר למשתמשים לשנות את כתובת השולח שלהם. אם תרצו לאפשר שירות דואל מבוסס Java, עליכם להשתמש בדפדפן תומך Java.",
		admin_email_use_service: "שימוש בשירות דואל מבוסס HTML",
		admin_email_use_applet: "שימוש בשירות דואל מבוסס Java",
		admin_email_can_modify_from: "יש לאפשר למשתמשים לשנות את כתובת השולח",
		admin_email_can_modify_from_hover: "כברירת מחדל, אי אפשר לשנות את כתובת השולח והיא מושגת באמצעות מיפוי של משתמשים וכתובות דואל שמייצגות חשבונות משתמשים.<br><br>יש לבחור באפשרות זו כדי לאפשר למשתמשים לערוך את כתובת הדואל שלהם בעת שליחת דואר; עם זאת, התקפות של כתובת הדואל לא מאומתת.",
		admin_email_use_from_as_sender: "שימוש בכתובת השולח כשולח הדואל",
		admin_email_use_from_as_sender_hover: "כברירת מחדל, כתובת שולח תקפה משמשת כדואל של המשתמש. כתובת דואל זו מוגדרת על-ידי מהלך עבודה של הדואר CNMailSession בשרת היישומים. בחרו באפשרות זו כדי לשציין שכתובת הדואל של המשתמש תשמש בדואל.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "ביאורים חדשים",
		addAnnotationDlg_labelContents: "תוכן:",
		addAnnotationDlg_labelAccess: "גישה:",
		addAnnotationDlg_labelPublic: "ציבורי",
		addAnnotationDlg_labelPrivate: "פרטי",
		addAnnotationDlg_labelPrivateGroup: "פרטי עבור קבוצה",
		addAnnotationDlg_labelGroup: "קבוצה",
		addAnnotationDlg_labelCopiable: "אפשר להעתיק ביאור זה לשרת אחר.",
		addAnnotationDlg_buttonLabel_save: "שמירה",

		/* Skip navigation */
		skipNavigation_title_main: "דילוג לתוכן עיקרי",
		skipNavigation_title_menu: "דילוג ללחצני הניווט",
		skipNavigation_label_main: "דילוג לתוכן עיקרי",
		skipNavigation_label_menu: "דילוג ללחצני הניווט",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "ניהול מרחבי צוות",
		manage_teamspace_pane_instance_hdr: "מרחבי צוות",
		manage_teamspace_pane_template_hdr: "תבניות",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "גלילה קדימה",
		scroll_back: "גלילה אחורה",

		breadcrumb_separator_open: "פתיחת צומת",
		breadcrumb_separator_close: "סגירת צומת",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "לא נבחר פריט.",

		/* eds */
		eds_url: "URL של שירות נתונים חיצוני:",
		eds_request_timeout: "מגבלת זמן לבקשת שירות (בשניות):",
		eds_is_required: "מניעת פעולות משתמשים המשנות ערכי תכונות כאשר EDS אינו זמין",

		/* eforms */
		eform_signing_pane_welcome: "חתימה על הטופס",
		eform_signing_button_label: "חתימה",
		eform_signing_pane_delete: "מחיקת החתימה",
		eform_signing_button_label_delete: "מחיקה",

		xtplugin_server_label: "URL של שרת IBM FileNet Workplace XT",
		xtplugin_server_hover: "ציינו את URL השרת שבו מוצב IBM FileNet Workplace XT,‏ לדוגמה http://localhost:8080/WorkplaceXT.‏",

		ecplugin_server_label: "URL של שרת IBM eClient",
		ecplugin_server_hover: "ציינו את URL השרת שבו מוצב IBM eClient,‏ לדוגמה http://localhost:9080/eClient/s.‏",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "פעולות על מספר גדול של פריטים עשויות להימשך זמן רב. האם ברצונכם להמשיך?",
		large_number_actions_continue_button: "המשך",

		large_items_actions_confirmation_question: "פעולות הקשורות בפריטים גדולים עשויות לקחת זמן רב. האם ברצונכם להמשיך?",

		viewer_editproperties_title: "אישור",
		viewer_editproperties_title_warning: "אזהרה",
		viewer_editproperties_save: "שמירה",
		viewer_editproperties_next: "הבא",
		viewer_editproperties_reset: "איפוס",
		viewer_editproperties_reset_hover: "נתונים שלא נשמרו יוחזרו לערכים השמורים הקודמים שלהם.",
		viewer_editproperties_saveandgetnext: "שמירה ולאחר מכן הבאת הבא",
		viewer_editproperties_saveandgetnext_hover: "הבאת המסמך הבא אוטומטית לאחר שאשמור את השינויים שלי",
		viewer_editproperties_prompt_save_changes: "שיניתם את התכונות של המסמך שלהלן<br>${0}<br><br>האם ברצונכם לשמור את השינויים?",
		viewer_editproperties_prompt_discard_changes: "שיניתם את התכונות של המסמך שלהלן<br>${0}<br><br>עם זאת, לתכונה אחת או יותר יש ערך לא חוקי, ולכן לא ניתן לשמור את השינויים. תוכלו לתקן את הערכים הלא חוקיים, או לזנוח את השינויים.<br>האם ברצונכם לתקן את הערכים הלא חוקיים המוצגים בחלונית התכונות?",
		viewer_comments_prompt_discard_changes: "שיניתם את ההערות. האם ברצונכם לשמור את השינויים?",
		viewer_notelogs_prompt_discard_changes: "שיניתם את יומני ההערות. האם ברצונכם לשמור את השינויים?",
		social_collaborated_version: "גרסה: ${0}",
		social_link_label: "מי...",

		// social comments
		comments: "הערות",
		comments_add_hint: "לחצו על Enter כדי להוסיף את ההערות שלכם.",
		comments_hint: "הקלידו את ההערות שלכם.",
		comments_label: "לחצו על Enter או Tab כדי לשמור את ההערות שלכם. לחצו על Esc כדי לבטל.",
		comments_delete_confirmation: "האם ברצונכם למחוק את ההערה שנבחרה?‏",
		comments_number: "הערות: ${0}",
		comments_save_new: "שיניתם את ההערות. האם ברצונכם לסגור את החלון בלי לשמור את השינויים?‏",

		notelogs: "יומני הערות",
		notelogs_download: "הורדה",
		notelog_modify: "שמירת שינויים",
		notelog_edit: "עריכת יומן הערות",
		notelog_create_newVersion: "יצירת גרסה חדשה של יומן ההערות",
		notelog_add_hint: "הקלידו את ההערות שלכם ולחצו על Enter כדי להוסיף.",
		notelog_hint: "לחצו על Shift+Enter כדי לעבור לשורה חדשה",
		notelog_add_placeholder: "לחצו על Enter כדי להוסיף הערה ליומן ההערכות.",
		notelog_save_new: "שיניתם את יומן ההערות. האם ברצונכם לסגור את החלון בלי לשמור את השינויים?‏",

		// P8 markings related
		cannot_remove_markings: "אין לכם הרשאה לסלק את ערכי הסימון: {0}",

		// download count
		downloadcount: "הורדות: {0}",
		downloadcount_single: "1 הורדה",
		downloadcount_multiple: "{0} הורדות",
		downloadcount_none: "איש לא הוריד פריט זה עדיין",

		// recommendations
		recommendations: "סימוני 'אהבתי': {0}",
		recommendations_recommend: "סימון 'אהבתי' לפריט זה",
		recommendations_unrecommend: "הסרת סימון 'אהבתי' מפריט זה",
		recommendations_you: "אהבתם פריט זה",
		recommendations_you_and_another: "אתם ועוד אדם אחד אהבתם פריט זה",
		recommendations_you_and_others: "אתם ו-{0} אחרים אהבתם פריט זה",
		recommendations_another: "1 אדם אהב פריט זה",
		recommendations_others: "{0} אנשים אהבו פריט זה",
		recommendations_none: "איש לא אהב פריט זה",

		// tags
		tags: "תגים: ${0}",
		tags_delete: "מחיקת ${0}",
		tags_none: "אין תגים להצגה.‏",
		tags_add: "הוספת תגים:",
		tags_hint: "לחצו על Enter כדי להוסיף את התגים שלכם.",
		tags_hover_help: "ציינו תג או רשימת תגים שבהם אפשר להשתמש לצורך חיפוש מסמכים עם תג זהה. אפשר להפריד תגים באמצעות פסיק (,), נקודה פסיק (;) או רווח.",
		tags_hover_help_box: "ציינו תג או רשימת תגים המופרדים באמצעות פסיקים שבהם אפשר להשתמש לצורך חיפוש מסמכים עם תג זהה.",
		tags_no_access: "אין לכם הרשאות מתאימות להוספת תגים.",

		//task scheduler pane
		taskPane_tooltip: "פתיחת תצוגת המשימות האסינכרוניות",
		taskPane_tree: "עץ ניווט בחלונית המשימות",
		taskPane_allTasks: "כל המשימות",
		taskPane_scheduledTasks: "משימות מתוזמנות",
		taskPane_recurringTasks: "מזימות חוזרות",
		taskPane_inProgressTasks: "משימות בביצוע",
		taskPane_completedTasks: "משימות שהושלמו",
		taskPane_failedTasks: "משימות שנכשלו",
		taskPane_disabledTasks: "משימות מושבתות",
		taskPane_statusScheduled: "מתוזמן",
		taskPane_statusInProgress: "בביצוע",
		taskPane_statusCompleted: "הושלם",
		taskPane_statusFailed: "נכשל",
		taskPane_statusPaused: "הושהה",
		taskPane_noItemSelected: "לא נבחרו פריטים",
		taskSchedulerPane_scheduleInformation: "פרטי תזמון",
		taskSchedulerPane_loginInformation: "פרטי התחברות",
		taskSchedulerPane_startImmediately: "התחלה מיד",
		taskSchedulerPane_recurrence: "חזרה",
		taskSchedulerPane_interval: "מרווח",
		taskSchedulerPane_scheduleReport: "תזמון דוח",
		taskSchedulerPane_nameHoverHelp: "ציינו את שם המשימה.",
		taskSchedulerPane_descriptionHoverHelp: "ציינו תיאור עבור המשימה. התיאור יסייע לכם להבדיל בין משימות.",
		taskSchedulerPane_startTimeHoverHelp: "ציינו מתי המשימה תורץ. כדי להריץ את המשימה עכשיו, בחרו 'התחלה מיד'.",
		taskSchedulerPane_recurrenceHoverHelp: "תוכלו לתזמן את המשימה להרצה חוזרת.",
		taskSchedulerPane_endTimeHoverHelp: "ציינו מתי הרצת המשימה תופסק. המשימה רצה ממועד ההתחלה המתוזמן עד מועד הסיום המתוזמן.",
		taskSchedulerPane_usernameHoverHelp: "עבור משימות חוזרות, עליכם לציין שם משתמש כדי שהשירות יוכל לבצע אימות כשהמשימה מורצת.",
		taskSchedulerPane_passwordHoverHelp: "עבור משימות חוזרות, עליכם לציין את הסיסמה של שם המשתמש שצוין כדי שהשירות יוכל לבצע אימות כשהמשימה מורצת.",
		taskSchedulerPane_notification: "דיווח",
		taskSchedulerPane_emailAddress: "כתובת דואל",
		taskSchedulerPane_emailAddressHoverHelp: "ציינו את כתובת הדואל שבה תוכלו לקבל הודעות דיווח על מצב המשימה.",
		taskSchedulerPane_intervalHoverHelp: "ציינו את משך הזמן להרצת המשימה החוזרת. תוכלו להגדיר את המרווח בימים, שבועות או חודשים.",
		taskSchedulerPane_scheduledStartTime: "שעת התחלה מתוזמנת",
		taskSchedulerPane_startTime: "מועד התחלה",
		taskSchedulerPane_title: "תזמון",
		taskSchedulerPane_runNow: "הרצה עכשיו",
		taskSchedulerPane_runOnce: "הרצה פעם אחת",
		taskSchedulerPane_runAtSchedule: "הרצה לפי תזמון",
		taskSchedulerPane_repeats: "חוזר",
		taskSchedulerPane_repeatsEvery: "חזרה מדי",
		taskSchedulerPane_hourly: "כל שעה",
		taskSchedulerPane_daily: "יומי",
		taskSchedulerPane_weekly: "שבועי",
		taskSchedulerPane_monthly: "חודשי",
		taskSchedulerPane_yearly: "שנתי",
		taskSchedulerPane_sunday: "א",
		taskSchedulerPane_monday: "ב",
		taskSchedulerPane_tuesday: "ה",
		taskSchedulerPane_wednesday: "ד",
		taskSchedulerPane_thursday: "ה",
		taskSchedulerPane_friday: "ו",
		taskSchedulerPane_saturday: "א",
		taskSchedulerPane_starting: "שעת התחלה",
		taskSchedulerPane_after: "אחרי",
		taskSchedulerPane_ending: "תאריך סיום",
		taskSchedulerPane_times: "פעמים",
		taskSchedulerPane_days: "ימים",
		taskSchedulerPane_hours: "שעות בתוך היום",
		taskSchedulerPane_interval: "מרווח",
		taskSchedulerPane_endingDays: "סיום (בימים)",
		taskSchedulerPane_never: "לעולם לא",
		taskSchedulerPane_categorization: "סיווג",
		taskSchedulerPane_scheduleTask: "תזמון משימה",
		taskInformationPane_details: "פרטים",
		taskInformationPane_errors: "שגיאות",
		taskInformationPane_taskInstances: "מופעי משימה",
		taskInformationPane_audits: "ביקורות",
		taskInformationPane_results: "תוצאות",
		asyncTasks: "משימות אסינכרוניות",

		//entry template pane
		search_all_entry_templates: "חיפוש בכל תבניות הקלט.‏",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "הצגת האתר המלא",
		mobilesite: "הצגת האתר להתקנים ניידים",
		profile: "ניהול פרופיל",
		office_template: "תבנית Office:",
		select_office_template: "בחרו תבנית Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "המסמכים שנבחרו לא יכולים להיפתח במציג עם פעולת המיזוג והפיצול.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "המציג המוגדר למסמכי PDF ו-TIFF לא תומך בפעולת המיזוג והפיצול.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "בקשו מהמנהלן שלכם להגדיר תצורה של מציג עבור מסמכי PDF ו-TIFF התומך בפעולת מיזוג ופיצול, כגון Daeja ViewONE Virtual viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "מסמכי ה-PDF שנבחרו לא יכולים להיפתח במציג עם פעולת המיזוג והפיצול.",
		document_builder_pdf_unsupported_viewer_error_explanation: "המציג המוגדר למסמכי PDF לא תומך בפעולת המיזוג והפיצול.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "בקשו מהמנהלן שלכם להגדיר תצורה של מציג עבור מסמכי PDF התומך בפעולת מיזוג ופיצול, כגון Daeja ViewONE Virtual viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "מסמכי ה-TIFF שנבחרו לא יכולים להיפתח במציג עם פעולת המיזוג והפיצול.",
		document_builder_tiff_unsupported_viewer_error_explanation: "המציג המוגדר למסמכי TIFF לא תומך בפעולת המיזוג והפיצול.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "בקשו מהמנהלן שלכם להגדיר תצורה של מציג עבור מסמכי TIFF התומך בפעולת מיזוג ופיצול, כגון Daeja ViewONE Virtual viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "המסמכים שנבחרו לא יכולים להיפתח במציג עם פעולת המיזוג והפיצול.",
		document_builder_unsupported_documents_error_explanation: "פעולת המיזוג והפיצול פועלת רק במסמכי PDF ו-TIFF.",
		document_builder_unsupported_documents_error_userResponse: "בחרו במסמכים נתמכים ונסו שוב.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "חלק מהמסמכים שנבחרו לא יכולים להיפתח במציג עם פעולת המיזוג והפיצול.",
		document_builder_some_unsupported_documents_error_explanation: "פעולת המיזוג והפיצול פועלת רק במסמכי PDF ו-TIFF שנפתחו מאותו מאגר.",
		document_builder_some_unsupported_documents_error_userResponse: "המסמכים הנתמכים ייפתחו במציג.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "אירעה שגיאה במהלך הפקדת התוכן ששונה.",
		document_builder_checkin_failed_explanation: "המציג קיבל תגובת שגיאה במהלך הפקדת התוכן ששונה.",
		document_builder_checkin_failed_userResponse: "בקשו ממנהלן המערכת לבדוק את קובצי היומן של שרת היישומים.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "לא ניתן לפתוח את המסמך.",
		no_viewer_to_view_error_explanation: "מנהלן המערכת חסם את הצגת מסמך זה. אם אתם צריכים לגשת למסמך זה, באפשרותכם להוריד אותו.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "לא ניתן לבנות את התוכן.",
		document_build_failed_userResponse: "בקשו ממנהלן המערכת לבדוק את קובצי היומן של המציג.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "לא ניתן היה לפתוח את המסמך במצב מיזוג ופיצול.",
		document_builder_open_failed_userResponse: "בקשו ממנהלן המערכת לבדוק את קובצי היומן של המציג.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "המערכת לא הצליחה לעבור למצב מיזוג ופיצול.",
		document_builder_switch_failed_userResponse: "בקשו ממנהלן המערכת לבדוק את קובצי היומן של המציג.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "מסמכים",
		print_service_page_setup_tab_title: "הגדרות עמוד",
		print_service_OD_print_tab_title: "אפשרויות הדפסה",
		print_service_status_merging: "ממזג מסמכים...",
		print_service_status_converting: "ממיר מסמכים...",
		print_service_status_formatting: "מעצב מסמך להדפסה...",
		admin_print_service_maximum_number_to_print: "מספר מרבי של מסמכים המותרים להדפסה:",
		admin_print_service_maximum_size_to_print: "גודל נתונים מרבי המותר להדפסה (ב-MB):",
		admin_print_service_maximum_number_to_print_hover_help: "ציינו את מספר המסמכים המרבי שמשתמשים יכולים להדפיס בבת אחת. ברירת המחדל היא 50.‏ אם אינכם רוצים להגביל את ההדפסה לפי מספר המסמכים, הגדירו מגבלה זו ל-0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>מגבלה: </b> הגדרה זו אינו נתמכת במערכות IBM Content Manager OnDemand.‏<br/><br/>ציינו את כמות הנתונים המרבים שניתן להמיר לקובץ PDF <br /><br />המספר הכולל של כל מסמך שנבחר לא יכול להיות גבוה מכמות זו.<br/><br/>המגבלה המחדלית היא 200 MB.‏ הגדרת מגבלה גדולה מ-200 MB עלולה להשפיע על הביצועים.אם אינכם רוצים להגביל את ההדפסה לפי גודל המסמך, הגדירו מגבלה זו ל-0",
		// error printing
		print_service_error_printing: "אירעה שגיאה במהלך ההדפסה.",
		print_service_error_printing_userResponse: "בקשו ממנהלן המערכת לבדוק את קובצי היומן של שירות ההדפסה.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "המסמכים הנבחרים גדולים מדי להדפסה.",
		print_service_max_content_error_explanation: "המסמכים הנבחרים חורגים מהמגבלה של ${0} מגהבתים של נתונים.",
		print_service_max_content_error_userResponse: "בחרו פחות מסמכים או מסמכים קטנים יותר והדפיסו שוב.תוכלו גם לפנות למנהלן המערכת כדי להגדיל את גודל הפריטים המרבי שתוכלו להדפיס בבת אחת משולחן עבודה זה.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "לא ניתן להדפיס את הפריטים.",
		print_service_max_number_selected_error_explanation: "ניתן לשתף עד ${0} פריטים בכל פעם. אתם מנסים להדפיס ${1} פריטים.",
		print_service_max_number_selected_error_userResponse: "בחרו פחות פריטים ונסו להדפיס את הפריטים שוב. ניתן גם לפנות למנהלן המערכת כדי להגדיל את מספר הפריטים המרבי שניתן להדפיס בבת אחת משולחן עבודה זה.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


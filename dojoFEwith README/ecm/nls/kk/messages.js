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
		welcome_user: "Қош келдіңіз, ",
		about: "Туралы",
		all: "Барлық",
		help: "Анықтама",
		user_session: "Пайдаланушы сценарийі",
		user_session_for: "${0} үшін пайдаланушы сеансы",
		user_session_for_with_container: "${0} (${1}) үшін пайдаланушы сеансы",
		tools: "Құралдар",
		login: "Кіру",
		logout: "Шығу",
		search: "Іздеу",
		saved_searches: "Сақталған іздеулер",
		content_analytics: "Мазмұн талдауы",
		reset: "Қайта орнату",
		reset_hover: "Барлық қойындылардағы кез келген сақталмаған дерек алдыңғы сақталған мәндерге қайта орнатылады.",
		reset_default: "Барлығын тазалау",
		reset_default_hover: "Барлық қойындылардағы Ағысдағы белгі өрісін жояды.",
		locale: "Тіл:",
		up: "Жоғары",
		down: "Төмен",
		restore: "Қалпына келтіру",
		maximize: "Үлкейту",
		values_label: "Мәндер",
		value_label: "Мән:",
		path_label: "Жол:",
		new_label: "Жаңа:",
		back_label: "Артқа",
		clear: "Тазалау",
		set: "Орнату...",
		browse: "Шолу",
		work: "Жұмыс",
		connect: "Қосылу",
		documents: "Құжаттар:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM және IBM логотипі әлемдегі көптеген юрисдикцияларда тіркелген IBM корпорациясының сауда белгілері. Java және барлық Java негізіндегі сауда белгілері мен логотиптер Oracle және/немесе оның серіктестерінің сауда белгілер не тіркелген сауда белгілер. Осында қамтылған Oracle Outside In Technology өнімі шектелген қолданыс лицензиясының нысаны болып табылады және оны тек осы қолданбамен бірге пайдалануға болады. Мына бағдарлама сүйемелдеуші лицензиялық келісімнің шарттары бойынша лицензияланған.  Лицензия келісімі Бағдарлама каталогының қалтасында немесе бар болса, \"License\" немесе\"Non_IBM_License\" деп белгіленген кітапханада болуы немесе басылған күйінде берілуі мүмкін. Бағдарламаны пайдаланбай тұрып, осы келісімді оқыңыз. Бағдарламаны пайдалану осы шарттарға келіскеніңізді білдіреді. ",
		edit: "Өңдеу",
		cancel: "Болдырмау",
		close: "Жабу",
		close_all: "Барлық қойындыларды жабу",
		close_others: "Басқа қойындыларды жабу",
		ok: "OK",
		yes: "Иә",
		no: "Жоқ",
		open: "Ашу",
		refresh: "Жаңарту",
		refresh_cabinets: "Барлық файлдарды жаңарту",
		delete_text: "Жою",
		export_config: "Теңшелімді шығару",
		description: "Сипаттама",
		true_label: "дұрыс",
		false_label: "False",
		error: "Қате",
		error_reference_hover: "Осы қате туралы ақпарат алу үшін, www.ibm.com мекен-жайын іздеңіз.",
		url_label: "URL мекен-жайы",
		default_label: "Әдепкі",
		ibm_label: "IBM",
		light_label: "Ашық",
		dark_label: "Қара",
		save: "Сақтау",
		saveAs: "Басқаша сақтау...",
		save_and_close: "Сақтау және Жабу",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ешбір",
		Name: "Аты",
		"${NAME}": "Аты",
		mime_type: "MIME түрі",
		mime_type_contains_label: "MIME түрі қамтиды",
		mime_type_header: "MIME түрі",
		mime_type_icon: "MIME түрі белгішесі",
		casesearch: "Іс",
		item: "Элемент",
		no_mime_type: "Бұл элементтің құрамында мазмұн жоқ.",
		items_selected: "${0} элементтер таңдалды.",
		requestor: "Келесімен талап етілді",
		scheduledStartTime: "Жоспарланған бастау уақыты",
		isRecurring: "Қайталануда",
		weeks: "апта",
		days: "күн",
		hours: "сағат",
		endTime: "Аяқталу уақыты",
		username: "Пайдаланушы аты",
		password: "Құпия сөз",
		serverURL: "Сервер URL мекен-жайы",
		enable: "Іске қосу",
		disable: "Ажырату",
		finish: "Аяқтау",
		previous: "Алдыңғы",
		next: "Келесі",
		schedule: "Жоспар",
		removeFromThisList: "Осы тізімнен жою",
		status: "Күй",
		scheduledEndTime: "Жоспарланған аяқтау уақыты",
		type: "Түр",
		mode: "Режим",
		startTime: "Басталу уақыты",
		createdBy: "Жасаған",
		nextScheduledTime: "Келесі жоспарланған уақыт",
		id: "Идентификатор",
		duration: "ұзақтық",
		repeatCycle: "Жиілік",
		taskTypeName: "Тапсырма түрі",
		to: "келесіге",
		filter: "Сүзгі:",
		error_message: "Қате туралы хабар",

        file_type: "Құжат түрі",
        word_template_name: "Word үлгісінің аты",
        excel_template_name: "Excel үлгісінің аты",
        powerpoint_template_name: "PowerPoint үлгісінің аты",
        template_description: "Үлгі сипаттамасы",
        action_add_template: "Қосу",
        action_change_template: "Өңдеу",      
        action_edit_template_properties: "Сипаттар",
        add_presentation_template: "Көрсетілім үлгісін қосу",
    	add_spreadsheet_template: "Электрондық кесте үлгісін қосу",
    	add_doc_template: "Құжаттың үлгісін қосу",    	
    	file_type_doc_hover: "Жарамды сөзді өңдейтін құжаттың үлгі файлын көрсетуіңіз керек.<br><br>Жарамды MIME түрлері: ${0}",
    	file_type_doc_error: "Жарамды сөзді өңдейтін құжаттың үлгі файлын көрсетуіңіз керек.<br><br>Таңдалған құжаттың mime түрі: ${0}<br><br>Жарамды MIME түрлері: ${1}",
    	file_type_presentation_hover: "Жарамды көрсетілім үлгісінің файлын көрсетуіңіз керек.<br><br>Жарамды MIME түрлері: ${0}",
    	file_type_presentation_error: "Жарамды көрсетілім үлгісінің файлын көрсетуіңіз керек.<br><br>Таңдалған құжаттың mime түрі: ${0}<br><br>Жарамды MIME түрлері: ${1}",
    	file_type_spreadsheet_hover: "Жарамды электрондық кесте үлгісінің файлын көрсетуіңіз керек.<br><br>Жарамды MIME түрлері: ${0}",
    	file_type_spreadsheet_error: "Жарамды электрондық кесте үлгісінің файлын көрсетуіңіз керек.<br><br>Таңдалған құжаттың mime түрі: ${0}<br><br>Жарамды MIME түрлері: ${1}",
    	office_online_only_one_template_error: "Тек бір файлды таңдай аласыз.",
    	change_presentation_template: "Көрсетілім үлгісін өңдеу",
    	change_spreadsheet_template: "Электрондық кесте үлгісін өңдеу",
    	change_doc_template: "Құжат үлгісін өңдеу",
    	change_button: "Өңдеу",
	    new_document_dialog_doc_title: "Жаңа құжат",
	    new_document_dialog_presentation_title: "Жаңа көрме",
	    new_document_dialog_spreadsheet_title: "Жаңа электрондық кесте",
	    new_document_dialog_title_label: "Тақырып:",
	    new_document_dialog_title_hover: "Осы құжатқа арналған тақырыпты енгізіңіз.",
	    new_document_dialog_title_missing_message: "Тақырыпты көрсетуіңіз керек.",
	    office_online_save_before_adding_templates_title: "Өзгертулерді репозиторийге сақтау",
	    office_online_save_before_adding_templates_error: "Репозиторийге жасаған өзгертулерді сақтағанға дейін Office үлгілерін қоса аласыз. <b>Сақтау және жабу</b> түймешігін басыңыз, сосын репозиторийды Office үлгілеріне қосу үшін қайта ашыңыз.",
	    copy_to_OOS_dialog_doc_title: "Жаңа құжат",
	    office_online_checkin_cancelcheckout_message: "Бұл құжат Microsoft Office Online қызметінде өңделуде. Құжатты ішінде тексере алмайсыз немесе тексеруден ол Microsoft Office Online құжатында ашылған кезде болдырмаңыз.",
	    new_document_classification: "Жіктеу:",
	    new_document_classification_help: "Қайнар көз құжатының класс, сипаттар және бастапқы қалтасының бірі бар болса қайта орнатыңыз. Енгізу үлгісін қолданатын құжатты қосу кезінде қайнар көз құжатының енгізу үлгісі егер бірі болатын болса, автоматты түрде таңдалады. Түпнұсқалық құжат сипаттары әдепкі мәндер ретінде қолданылады, алайда енгізу үлгісінде ерекшеленген қалта және сынып сақталынады.",
		new_document_classification_use_source_document: "Дереккөз құжатын пайдаланыңыз:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} Түрі белгішесі",
		repository_name_and_type: "${0} Аты және түрі",
		select_class_label: "${0} таңдаңыз",

		// View toggle buttons
		detail_view_button_tooltip: "Мәліметтер көрінісі",
		detail_view_button: "Мәліметтер",
		magazine_view_button_tooltip: "Журнал көрінісі",
		magazine_view_button: "Журнал",
		filmstrip_view_button_tooltip: "Диафильм көрінісі",
		filmstrip_view_button: "Диафильм",

		magazine_view_show: "Журнал көрінісінде көрсету",
		detail_view_show: "Мәліметтер көрінісінде көрсету",

		total_count_item: "элемент",
		total_count_items: "элементтер",
		total_count_more_items: "${0} астам элемент",

		extension_changed: "Таңдаған файлдың кеңейтімі бастапқыға сәйкес болмайды.  Басқа файлды таңдаңыз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Таңдалған көрсетуші барлық файл түрлерін қолдамайды. Егер осы қарау құралы салыстыруын сақтасаңыз, құжаттарды көру кезінде қиындықтарға кездесуіңіз мүмкін. Барлық файл түрлерінің опциясы таңдалатын кезде барлық файл түрлерін қолдайтын көрсетушіні таңдауды ұсынған.<br><br><b>Кеңес:</b> Төменде көрсетілген көрсетушілер барлық файл түрлерін қолдайды:<ul><li>Бағдарламашықты қарау құралы</li><li>AJAX қарау құралы</li><li>HTML түрлендіру</li><li>PDF түрлендіру</li><li>Веб шолғыш</li></ul>",
		file_type_any: "Барлық файл түрлері",
		file_type_any_hover: "Файл түріне қарамастан барлық құжаттарды көрсету үшін таңдалған көрсетушіні пайдаланғыңыз келсе мына опцияны таңдаңыз. Бұл опция келесі қарау құралдар үшін қолдауға ие болған:<br><br><ul><li>Бағдарламашықты қарау құралы</li><li>AJAX қарау құралы</li><li>HTML түрлендіру</li><li>PDF түрлендіру</li><li>Веб шолғыш</li></ul><br><br><b>Есіңізде болсын:</b> Егер көбіне арнайы қарау құралдарын қолданғыңыз келсе, осы опцияны қолданатын сіз құрған кез келген салыстырулар сіздің көру салыстырымыңыздың соңына көшуі тиіс. ",
		file_type_input: "Жаңа файл түрі:",

		mime_type_input: "Жаңа MIME түрі:",
		mime_type_input_invalid: "Жаңа MIME түрі келесі сипаттардың кез келгенін қамти алмайды: ,",
		mime_type_available: "Қол жетімді MIME түрлері",
		mime_type_selected: "Таңдалған MIME түрлері",
		file_type_input: "Жаңа файл түрі:",
		file_type_input_invalid: "Жаңа файл түрі келесі сипаттардың кез келгенін қамти алмайды: ,",
		file_type_available: "Қолжетімді файл түрлері",
		file_type_selected: "Таңдалған файл түрлері",
		file_type_header: "Файл түрі",
		viewer: "Қарау құралы:",
		viewer_viewer: "Қарау құралы",
		viewer_view: "Көрініс",
		viewer_preview: "Алдын ала қарау",
		viewer_merge_and_split: "Біріктіру және бөлу",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Тек алдын ала қарау",
		preview_only_label: "(алдын ала қарап алу)",
		preview_only_hover: "Бұл қарап шығу құралын салыстыру, пайдаланушы <b>Алдын ала қарап алу</b> түймешігін басқан кезде ғана қолданылады.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Бұл репозиторий шолғышты қолдамайды. Басқа репозиторийді таңдаңыз.",

		repository_community_teamspace_message: "Бақса репозиторий бірлестік кітапхана репозиторийі ретінде бұрыннан анықталған. Бар репозниторийді бірлестік кітапхана репозиторийі ретінде қолдануды жалғастырғыңыз келсе, <b>Жоқ</b> жауабын озиторийді бар репозиториймен алмасудан алдын алатын өзгертулерді сақтау үшін таңдаңыз.",

		favorites_empty: "Сіз әлі ешқандай қалаулыларыңыз жоқ.",
		syncItems_empty: "Сізде әлі ешқандай үндестірілген файлдар жоқ.",

		root_folder_id: "Түбір қалтасының идентификаторы",
		unified_searches: "Айқас-репозиторий іздеулері:",
		max_results: "Нәтижелер саны:",
		direct_retrieve_enabled: "Тікелей шығару:",
		itemTypesToDisplay: "Көрсетуге арналған элемент түрлері:",
		allItemTypes: "Барлық элемент түрлері",
		include_attr_group_name: "Төлсипатты көрсететін аттардағы төлсипаттың топ сипаттамалары:",
		admin_repcfg_include_attr_group_name_hover: "Әдепкіде, төлсипат тобының сипаттамасы, төлсипат тобының төлсипаттарына арналған аттарда қосылады. Бұл пайдаланушыларға төлсипаттармен жұмыс жасайтын кезде, төлсипат тобының төлсипаты қай төлсипат тобына тиесілі екенін көруге көмектеседі.<br>Мысалы, пайдаланушылар төлсипат тобының төлсипатына арналған келесі атты көре алады: Document Settings.Document Type.<br><br>Егер осы опцияны ажырататын болсаңыз, тек қана төлсипат сипаттамасы төлсипат тобының төлсипат атына қолданылады.<br>Мысалы, пайдаланушылар осы атты көретін болады: Құжаттың түрі.<br><br>Төлсипат тобының сипатынсыз, пайдаланушылар құжат түрінің не қарапайым төлсипат немесе төлсипат тобының төлсипаты екенін айтуға мүмкіндігі болмайды.",
		documentItemTypesOnly: "Құжат үлгісі элементінің түрлері ғана",
		object_store: "Нысанды сақтау сивмол аты:",
		object_store_display_name: "Нысанды сақтау көрінісінің аты:",
		teamspaceUpgradeMsg: "Топ аумақтары, репозиторий конфигурацияларын сақтайтын кезде, жаңартылады. Егер көптеген топ аумақтарын қамтитын болсаңыз, жаңарту бірнеше минуттарды алуы мүмкін.",
		synchUpgradeMsg: "Осы репозиторийдегі үндестіру модулі өзіңіздің репозиторий теңшеліміңізді сақтаған кезде жаңартылады.",
		protocol: "Протоколы:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS репозиторийінің идентификаторы:",
		cmis_url: "CMIS AtomPub байланыстыру қызметі құжатының URL мекен-жайы:",
		trace_level: "Тасымалдау дәрежесі",
		trace_dir: "Тасымалдау каталогы",
		temp_dir: "Уақытша каталог",
		show_document_location: "Құжат орналасымын көрсету",
		max_folders: "Ең көп қалталар",
		afp_conversion: "AFP түрленіру",
		line_conversion: "Сызықтық дерек түрлендіруі",
		max_hits: "Ең көп байланыстар",
		folder_search_expresssion: "Қалтаны іздеу өрнегі",
		max_item_types: "Ең көп элемент түрлері",
		max_worklists: "Ең көп жұмыс парақтары",
		update_storage_collection: "Қойма жинағын жаңарту",
		include_mime_types_in_search_results: "Іздеу нәтижелерінде MIME түрлерін кірістіру",
		object_type: "Нысан түрі",
		object_type_document: "Құжаттар",
		object_type_folder: "Қалталар",
		file_label: "Файл:",
		plugin_jarfile_path_label: "JAR файл жолы:",
		plugin_classfolder_path_label: "Класс файл өрісі:",
		plugin_classname_label: "Класс аты:",
		plugin_id_label: "Қосылым идентификаторы:",
		class_label: "Сынып",
		configuration: "Теңшелім",
		connect_repository: "Қосылу...",
		server_type: "Сервер түрі",
		timeout_in_seconds: "Күту уақыты (секундпен):",
		default_search_template: "Әдепкі іздеу",
		search_filtered_properties: "Іздеуге болатын сипаттар",
		property_contains_label: "Сипат құрамы",
		class_contains_label: "Сынып құрамы",
		search_filtered_operators: "Іздеу операторлары",
		default_search_results: "Іздеу Нәтижелері",
		data_type: "Деректер түрі",
		status_bar: "Күй жолағы",
		operators_for: "Амалдағыштар үшін:",
		currentUser: "Ағымдағы пайдаланушы",
		nameContains: "Аттың құрамы",
		searchFor: "Іздеу",
		server_autentication: "Сервер түпнұсқалығын растама (OAuth 2.0 with JWT)",
		standard_authentication: "Стандарт түпнұсқалығын растама (3-legged OAuth2.0)",
		developer_authentication: "Дамытушы түпнұсқалық растама",
		enterprise_id: "Кәсіпорынның идентификаторы:",
		public_key_id: "Жалпы кілт идентификаторы:",
		private_key_path: "Жеке кілт файлының жолы:",
		server_user_email: "Сервер пайдаланушысының электрондық поштасы",

		filter_builder_tooltip: "Сүзгіні анықтау",

		// Launch bar
		launchbar_home: "Басты бетті ашу",
		launchbar_favorites: "Қалаулыларды ашу",
		launchbar_browse: "Шолғыш көрінісін ашу",
		launchbar_browse_popup: "Шолғыштың қалқымалы тізімін ашу",
		launchbar_search: "Іздеу құралын ашу",
		launchbar_search_popup: "Әздеу қалқымалы тізімін ашу",
		launchbar_teamspaces: "Топ аймақтарының қарау құралын ашу",
		launchbar_teamspaces_popup: "Топ аймақтарының қалқымалы тізімін ашу",
		launchbar_work: "Жұмысты қарау құралын ашу",
		launchbar_work_popup: "Жұмыстың қалқымалы тізімін ашу",
		launchbar_entry_templates: "Енгізу үлгілерінің қарау құралын ашу",
		launchbar_entry_templates_popup: "Енгізу үлгілерінің қалқымалы тізімін ашу",
		launchbar_admin: "Әкімші қарау құралын ашу",

		admin_sync_server: "Синхрондау қызметтері",
		admin_settings: "Параметрлер",
		admin_interface_text: "Жапсырмалар",
		admin_interface_text_desktop: "Жұмыс үстелі:",
		admin_desktops: "Жұмыс үстелдері",
		admin_repositories: "Репозиторийлер",
		admin_mobile: "Мобильді бағдарламалар",
		admin_menus: "Мәзірлер",
		admin_reason_codes: "Редакция себептері",
		admin_plugins: "Қосылатын модульдер",
		admin_plugins_state_enabled: "Қосылатын модуль қосулы",
		admin_plugins_state_disabled: "Қосылатын модуль ажыратылған",
		admin_plugins_version: "Нұсқа:",
		admin_plugins_version_heading: "Нұсқа",
		admin_plugins_icon: "Қосылатын модуль белгішесі",
		admin_viewer_mapping_icon: "Қарау құралы салғастыру белгішесі",
		admin_viewer_defs: "Қарау құралының карталары",
		admin_viewer_dialog_title: "Салыстыру",
		admin_viewer_dialog_new_title: "Жаңа салыстыру",
		admin_viewer_dialog_instructions: "Салыстыру репозиторийдегі файлдар үшін қай қарау құралын қолдану керек екенін көрсетеді. файлдардың әр түрлі түрлері үшін әр түрлі қарау құралдарын көрсету үшін бірнеше салыстыруларды құра аласыз. Салыстыруды анықтау үшін файл кеңейтімін немесе MIME түрі екеуінің біреуін пайдалана аласыз. Құжат атына салыстырылатын файл кеңейтімдерімен салыстырады. Мысалы, .gif кеңейтімімен аяқталатын құжаттар аттары үшін салыстырылатын gif кеңейтңмңне арналған файл түрінің орнатуымен салыстыру.",
		admin_desktop_viewer_defs: "Қарау құралы картасы:",
		admin_desktop_viewer_defs_hover: "Қарау құралы картасы репозиторийдегі құжаттардың әр түрлерін ашу үшін қолданылатын қарау құралын көрсетеді.<br><br>Әкімші құралының <b>Қарау құралы карталары</b> бөліміндегі жаңа құрау құралын құра аласыз.",
		admin_desktops_used: "Жұмыс үстелдерінде қолданылған",
		admin_desktop_additional_settings: "Қосымша параметрлер:",
		admin_default_desktop: "Әдепкі жұмыс үстелі ретінде орнату",
		admin_default_desktop_header: "Әдепкі жұмыс үстелі",
		admin_layout_tab_title: "Орналасу",
		admin_desktop_icon: "Жұмыс үстелі Белгішесі",

		// Themes
		admin_themes: "Тақырыптар",
		admin_theme_list_instructions: "Ұйымыңыз үшін веб-клиентті теңшеуді оңайырақ ету үшін тақырыпты жасауға болады. Ортада әртүрлі жұмыс үстелдерді үшін әртүрлі түстерді, қаріптерді немесе логотиптерді қолдану қажет болса, бірнеше тақырыптарды жасауға болады.<br><br>Тақырыпты жасағаннан кейін жұмыс үстелінің <b>Көрініс</b> қойындысында тақырыпты теңшеу арқылы жұмыс үстеліне оны қолдануға болады.",
		admin_theme_instructions: "Веб-клиентте көрсетілетін түстер мен қаріптерді басқару үшін тақырыпты жасаңыз. Қосымша, беттегі және баннердегі журналда көрсетілетін логотипті, бағдарлама атын және авторлық құқық мәтінін өзгерту үшін тақырыпты пайдалануға болады.",
		admin_theme_heading: "Тақырып: <b>${0}</b>",
		admin_new_theme: "Жаңа тақырып",
		admin_text_theme: "Тақырып",
		admin_delete_confirmation_themes: "Таңдалған тақырыптарды жойғыңыз келеді ме?\n${0} тақырыптар таңдалды.",
		admin_theme_color: "Түс",
		admin_theme_text: "Мәтін",
		admin_theme_solid: "Тұтас",
		admin_theme_gradient: "Градиент",
		admin_theme_box: "Қорап",
		admin_theme_color_label: "Түс ${0}:",
		admin_theme_name_invalid: "Тақырып аты кез келген келесі сипаттардың бірін қамти алмайды: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Тақырып идентификаторы бірегей болуы тиіс және тақырыпты сақтағаннан кейін идентификаторды өзгерте алмайсыз.<br><br>Идентификатор тек әліпбилік сипаттарды ғана қамти алады.",
		admin_theme_name_hover: "Ат келесі сипаттарды қамти алмайды: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Автоматты",
		admin_theme_logo_url_hover: "Журнал файлының URL мекен-жайын енгізіңіз. Егер журнал веб тұтынушысы секілді бірдей веб бағдарлама серверінде болса, қатысты URL мекен-жайын енгізіңіз, мысалы: /mycustomizations/banner_logo.png<br><br>Журналдың мөлдір өңдік түсті қамтуы ұсынылады.",
		admin_theme_color_palette_title_heading: "Түсті бояғыш",
		admin_theme_color_palette_help_text: "Он алтылық мәнді немесе түсті таңдау құралын пайдалану арқылы тақырыпқа арналған түс бояғыштарын жасаңыз. Қалағаныңызша түстер санын қосуға болады.",
		admin_theme_color_add_button_label: "Түсті қосу",
		admin_theme_color_remove_button_label: "Түсті жою",
		admin_theme_global_title_heading: "Бағдарламадағы кең элементтер",
		admin_theme_global_font: "Қаріптер тобы:",
		admin_theme_global_font_hover: "Веб-клиентте қолдану үшін қаріпті таңдаңыз. Қаріптер ретімен тізімделген; алдыңғы қаріп клиенттік құрылғыда орнатылмаса, тізімдегі келесі қаріп қана қолданылады.",
		admin_theme_global_framework_color_label: "Арқаулық жүйе түсі:",
		admin_theme_global_framework_color_hover: "Келесі элементтерді қолдану үшін түсті пайдаланыңыз:<ul><li>Тілқатысу терезелеріндегі тақырыптар жолақтары</li><li>Таңдалған қойындының жоғарғы жағындағы түсті бөлектеу</li><li>Мазмұн тізімі көрінісінің белгішелері (Толық деректер көрінісі, Журнал көрінісі, Кинотаспа көрінісі)</li></ul><br>Осы түс веб-клиенттің бөлімдері арасындағы бөлгіштер үшін қолданылмайды. Бөлгіштердің түсін өзгертуді қаласаңыз, теңшелетін CSS файлын беру үшін қосымша модульді жасау керек.",
		admin_theme_color_global_toolbar: "Жаһандық құралдар тақтасы түсі:",
		admin_theme_color_global_toolbar_hover: "Веб-клиентте жаһандық құралдар тақтасы қамтылса, құралдартақтасының түсін таңдаңыз.<br><br><b>Кеңес:</b> Құралдар тақтасы веб-клиенттің жоғарғы жағындағы баннерде көрсетілген, сондықтан құралдар тақтасының түсі баннердің түсіне сай болу керек.",
		admin_theme_global_selected_color: "Таңдалған элемент түсі:",
		admin_theme_global_selected_color_hover: "Шолғыш тармағында, іздеу тармағында және мазмұн тізімінде элементтер таңдалған кезде қолдану үшін түсті таңдаңыз.<br><br>Меңзер түсі (пайдаланушы элементке меңзерді апарған кезде қолданылатын түс) осы түстен алынады.",
		admin_theme_global_link_color: "Сілтеме түсі:",
		admin_theme_global_link_color_hover: "Веб-клиенттің барлық басылатын URL мекен-жайы үшін қолданылатын түсті таңдаңыз. Мысалы, бұл түс веб-клиент арқылы көрсетілетін Қосымша сілтемелерді үйрену пәрменінде қолданылады.",
		admin_theme_login_title_heading: "Кіру Бетінің Элементтері",
		admin_theme_page_background_label: "Кіру бетінің өң түсі:",
		admin_theme_login_page_background_hover: "Кіру аумағының артында көрсетілетін түсті таңдаңыз.",
		admin_theme_login_pane_background_label: "Кіру аумағының өң түсі:",
		admin_theme_login_pane_background_hover: "Кіру ауқымы үшін көрсетілетін түсті таңдаңыз. Бұл түс кіру бетінің өң түсіне сай болу қажет.",
		admin_theme_text_color: "Мәтін түсі:",
		admin_theme_login_pane_text_color_hover: "Кіру ауқымы мәтіні үшін қолданылатын түсті таңдаңыз. Бұл түс бастапқы мәтін мен өріс белгілері үшін қолданылады. Бұл түс логин аумағының өң түсіне қатынысты түсінікті болу керек.",
		admin_theme_copyright_text: "Авторлық құқықтар мәтіні:",
		admin_theme_copyright_text_hover: "Кіру бетінде мәтінмән мәтінін көрсету қажеттігін көрсетіңіз.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Авторлық құқықтар мәтіні жоқ",
		admin_theme_banner_title_heading: "Баннер элементтері",
		admin_theme_text_icons_color: "Мәтін және элемент түсі:",
		admin_theme_icon_color_label: "Белгі түсі:",
		admin_theme_shadow_label: "Көлеңке:",
		admin_theme_banner_text_icons_hover: "Баннердегі мәтін мен белгішелер үшін қолданылатын түсті таңдаңыз. Бұл түс баннердің өң түсіне қатысты түсінікті болу керек.",
		admin_theme_banner_product_name_label: "Өнім аты:",
		admin_theme_banner_product_name_hover: "Жұмыс үстелін жасаған кезде, бағдарлама үшін көрсетілетін теңшелетін атауды көрсетуге болады. Теңшелетін атауды көрсетпесеңіз, IBM Content Navigator өнім аты ретінде қолданылады. Жұмыс үстелінде анықталған бағдарлама атын немесе атаудың орнына суретті пайдалану қажеттігін көрсетіңіз.",
		admin_theme_banner_product_name_desktop_defined_label: "Жұмыс үстелінен атауды пайдалану",
		admin_theme_banner_product_name_image: "Өзгертпелі Логотипті қолдану (URL мекен-жайы)",
		admin_theme_background_color_label: "Өң түсі:",
		admin_theme_style_label: "Мәнер:",
		admin_theme_banner_color_hover: "Бағдарламаның жоғарғы жағындағы баннерді пайдалану үшін түсті таңдаңыз.<br><br><b>Кеңес:</b>Баннердегі мазмұнның түсі, баннердің өңдік түсіне анық қарсы болады.",
		admin_theme_buttons_title_heading: "Түймешіктер",
		admin_theme_navigation_title_heading: "Шарлау элементтері",
		admin_theme_navigation_icon_selected_label: "Таңдалған белгіше түсі:",
		admin_theme_navigation_background_hover: "Мүмкіндікті шарлау тақтасының өңі үшін қолданылатын түсті таңдаңыз.",
		admin_theme_navigation_icon_color_hover: "Мүмкіндікті шарлау тақтасының белгішелері үшін қолданылатын түсті таңдаңыз. Жұмыс үстеліндегі әдепкі орналасуды пайдаланған кезде, бұл түс ашылмалы мәзір өң түсінің функциясымен ерекшеленуі керек. Жұмыс үстелінде классикалық орналасуды пайдаланған кезде, бұл түс көрнекі шарлау тақтасы қызметінің өңімен ерекшеленуі керек. ",
		admin_theme_navigation_icon_selected_hover: "Мүмкіндікті шарлау тақтасындағы таңдалған мүмкіндіктерге қолдану үшін түсті таңдаңыз. Түс белгішелердің түсіне және мүмкіндікті шарлау тақтасының өң түсіне сай болу керек.<br><br>Жұмыс үстелінде классикалық орналасуды пайдаланған кезде, бұл түс көрнекі шарлау тақтасы қызметіндегі айналдыру түстері ретінде пайдаланылады.",
		admin_theme_button_background_color_hover: "Түймешік өңдік түстері үшін қолданылатын түсті таңдаңыз.",
		admin_theme_button_style_hover: "Түймешік мәнерін таңдау.",
		admin_theme_button_text_icon_color_hover: "Мәтін мен түймешіктер үшін қолданылатын түсті таңдаңыз.",
		admin_theme_no_logo_label: "Логотип жоқ",
		admin_theme_custom_logo_label: "Өзгертпелі логотип (URL мекен-жайы)",
		admin_theme_banner_type: "Баннердің бояу мәнері:",
		admin_theme_banner_type_hover: "Баннердің не тұтас түсті немесе градиент түсті болуын көрсетіңіз. Егер градиент баннерді көрсеткен болсаңыз, онда баннердің түсіне көрсеткен түс, баннердегі ең қоюы болады.<br><br><b>Кеңес:</b>Баннердегі мазмұнның түсі, баннердің өңдік түсіне анық қарсы болады.",
		admin_theme_icon: "Тақырып Белгішесі",
		admin_theme_buttons_and_links_title_heading: "Түймешіктер, өрістер және сілтемелер",
		admin_theme_button_style_label: "Түймешік мәнері:",
		admin_theme_theme_style_label: "Тақырып мәнері:",
		admin_theme_theme_style_hover: "Тақырыпқа негізделетін мәнерді таңдаңыз. Тақырыпты жасау немесе өңдеуде кез келген уақытта мәнерді өзгерте аласыз. Бір стильден екіншісіне ауысқанда, тақырып параметрлері әдепкі мәндерге қайта орнатылады.",
		admin_theme_accent_color_label: "Епкін түсі:",
		admin_theme_accent_color_hover: "Тілқатысу терезесінің жоғарғы жағындағы жолақ үшін және санағышты жүктеуге арналған түстерді таңдаңыз.",
		admin_theme_global_toolbar_text_color_label: "Жаһандық құралдар тақтасының мәтін түсі:",
		admin_theme_global_toolbar_text_color_hover: "Веб-клиенттегі жаһандық құралдар тақтасын қоссаңыз, құралдар тақтасындағы мәтін үшін пайдаланылатын түсті таңдаңыз.",
		admin_theme_banner_text_color_hover: "Баннердегі мәтін үшін қолданылатын түсті таңдаңыз.",
		admin_theme_banner_icon_color_hover: "Баннердегі белгішелер үшін қолданылатын түсті таңдаңыз.",
		admin_theme_button_color_label: "Түсі:",
		admin_theme_button_color_hover: "Келесі элементтерді қолдану үшін түсті пайдаланыңыз:<ul><li>Тілқатысу терезелеріндегі тақырыптар жолақтары</li><li>Таңдалған қойындының жоғарғы жағындағы түсті бөлектеу</li><li>Мазмұн тізімі көрінісінің белгішелері (Толық деректер көрінісі, Журнал көрінісі, Кинотаспа көрінісі)</li><li>Түймешіктер, өрістер және сілтемелер</li></ul>Бұл түс осы түстен алынатын түймешікке көрсеткішті апаратын кезде пайдаланылады. Осы түс веб-клиенттің бөлімдері арасындағы бөлгіштер үшін қолданылмайды. Бөлгіштердің түсін өзгертуді қаласаңыз, теңшелетін CSS файлын беру үшін қосымша модульді жасау керек.",
		admin_theme_theme_style_col_header: "Тақырып мәнері",

		admin_syncserver_consistency_checker: "Үйлесімдікті тексеру құралы:",
		admin_syncserver_consistency_checker_hover: "Үйлесімдікті тексеру құралын, синхрондау қызметінің дерекқорларында, сервердегі әрбір элементтің күйі туралы ағымдағы мәліметі бар екеніне көз жеткізу үшін іске қосыңыз. Мысалы, үйлесімдікті тексеру құралын, ажырату барысындағы репозиторийдегі жаңартылған құжаттар туралы мәліметті алу үшін, синхрондау қызметтерінің дерекқоры ажыратылғаннан кейін іске қосыңыз.",
		admin_syncserver_consistency_checker_button: "Үйлесімдікті тексеру құралын Іске қосу",
		admin_syncserver_consistency_checker_started: "Басталды:",
		admin_syncserver_consistency_checker_ended: "Аяқталды:",
		admin_syncserver_consistency_checker_duration: "Ұзақтығы:",
		admin_syncserver_consistency_checker_items_processed: "Синхрондау элементтерді орындалды:",
		admin_syncserver_consistency_checker_items_processed_success: "Синхрондау элементтері сәтті орындалды:",
		admin_syncserver_consistency_checker_items_discovered: "Жаңа репозиторий элементтері ашылды:",
		admin_syncserver_consistency_checker_change_updates: "Жалпы жаңартулар:",
		admin_syncserver_consistency_checker_state: "Күй:",
		admin_syncserver_consistency_checker_state_done: "Дайын",
		admin_syncserver_consistency_checker_state_running: "Жұмыс істеуде",
		admin_syncserver_consistency_checker_user: "Жіберген:",
		admin_syncserver_consistency_checker_scheduled: "Жоспарланған:",

		admin_syncserver_dbcleanup: "Дерекқорды тазалау",
		admin_syncserver_dbcleanup_hover: "Дерекқорды тазалау құралын, дерекқордан көп ұзамай синхрондалатын, қолданылмайтын әрбір құрылғыларды және элементтерді жойыңыз.",
		admin_syncserver_dbcleanup_button: "Дерекқорды тазалау",
		admin_syncserver_dbcleanup_state_done: "Дайын",
		admin_syncserver_dbcleanup_state_running: "Жұмыс істеуде",
		admin_syncserver_dbcleanup_started: "Басталды:",
		admin_syncserver_dbcleanup_ended: "Аяқталды:",
		admin_syncserver_dbcleanup_state: "Күй:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Репозиторийлер жойылды:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Синхрондалған элемент жойылды:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Жойылған құрылғылар:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Мерзімі өткен құрылғылар:",

		admin_syncserver_publicSyncUrl: "Қызметтердің жалпы URL мекен-жайын синхрондау:",
		admin_syncserver_publicSyncUrl_hover: "IBM Content Navigator бағдарламасының синхрондау қызметтерімен қай репозиторийлер арқылы байланысатын URL мекен-жайын көрсетіңіз. URL мекен-жайының әдепкі пішімі http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Клиент параметрлерін синхрондау:",
		admin_syncserver_managed_hover: "Пайдаланушылар осы параметрлерді IBM Content Navigator Sync клиентінде өзгерте алмайды.",
		admin_syncserver_managed_subfolder: "Синхрондауға арналған қалта деңгейлері",
		admin_syncserver_managed_subfolder_hover: "Егер пайдаланушы қалтаны синхрондайтын болса, синхрондалатын қалтаның ең көп санын көрсетіңіз. Мысалы, егер пайдаланушы 3 қалтаның дңгейін көрсететін болса, пайдаланушы синхрондайтын қалта және ішкі қалталардың 2 деңгейлері синхрондалады.<br><br>Орта, осы параметр арқылы құрылатын синхрондау қозғалысының санын қолдау үшін кеңейтілгеніне көз жеткізіңіз.",
		admin_syncserver_managed_subfolder_all: "Барлық ішкі қалталар",
		admin_syncserver_managed_subfolder_none: "Ішкі қалталар жоқ",
		admin_syncserver_managed_subfolder_no_more: "Шектеулі деңгейлер",
		admin_syncserver_managed_subfolder_levels: "қалталар",
		admin_syncserver_managed_schedule: "Синхрондау кестесі",
		admin_syncserver_managed_schedule_hover: "Орта, осы синхрондау кестесі арқылы құрылатын синхрондау қозғалысының санын қолдау үшін кеңейтілгеніне көз жеткізіңіз.<br><br>Ең көп аралық 24 сағат немесе 1440 минтут.<br><br>Пайдаланушылар клиенттегі <b>Қазір синхрондау</b> түймешігін басу арқылы синхрондау кестесін алдын ала анықтай алады.",
		admin_syncserver_managed_schedule_manual: "Қолмен синхрондау",
		admin_syncserver_managed_schedule_continuous: "Үздіксіз синхрондау",
		admin_syncserver_managed_schedule_every: "Көрсетілген аралықтарда синхрондау",
		admin_syncserver_managed_schedule_minutes: "минут",
		admin_syncserver_managed_schedule_hours: "сағат",

		// redaction codes
		admin_new_reason_code: "Жаңа редакция себебі",		
		admin_reason_code_name_invalid: "Редакция себебінің аты келесі сипаттардың ешқайсысын қамтымайды: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Анықтама келесі сипаттардың ешқайсысын қамтымайды: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Анықтама келесі сипаттардың ешқайсысын қамтымайды: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Ат келесі таңбалардың ешқайсысын қамти алмайды: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Сипаттама:",
		admin_reason_code_applications_hover: "Осы редакция себеінен сілтенетін Datacap бағдарламалары.",
		admin_reason_code_applications: "Datacap бағдарламалары",
		admin_delete_confirmation_reason_codes: "Таңдалған редакция себептерін жойғыңыз келеді ма?",
		admin_delete_confirmation_reason_code: "Таңдалған редакция себебін жойғыңыз келеді ма?",
		admin_reason_code_heading: "Редакция себебі: <b>${0}</b>",
		admin_reason_code_list_instructions: "Редакция себептері сезімтал деректің көріністен көмескілеу арқылы неге қорғалғанын көрсетеді. Әр бір себеп жалпы қолданушылардан жасырын болатын сезімтал деректің түрін анықтайды.",
		admin_reason_code_instructions: "Редакция себебін сезімтал деректің кез келген түрі үшін құра аласыз. Содан кейін сол себепті редакция саясатында сол деректі кім көре алатынын және кімнің редакцияларды құрып немесе өңдей алатынын қолдана аласыз.",
		admin_reason_code_applications_label: "Datacap бағдарламалары",
		admin_reason_code_repositories: "Репозиторийлер",
		admin_reason_code_repositories_label: "Репозиторийлер",
		admin_reason_code_repositories_hover: "Осы редакция себебін сілтейтін ICN репозиторийлерінің тізімі.",
		admin_reason_code_repositories_default_value: "Орнатылмаған",
		admin_reason_code_description_label: "Сипаттама",
		admin_reason_code_applications_default_value: "Орнатылмаған",
		admin_redaction_reasons: "Редакция себептері",
		admin_redactions: "Рөлге негізделген редакциялар",
		admin_redactions_policies_roles: "Саясаттар мен рөлдер",
		admin_reasons: "Себептер",
		admin_reason_code_id: "Идентификатор",
		admin_reason_code_id_hover: "Идентификатор өңделмейді.  Бұл пернетақтаға көшіріле алады",
		// Role based administration
		admin_rba: "Рөлге негізделген Жұмыс үстелі әкімшісі",
		admin_rba_mobile_access_enabled: "Бұл жұмыс үстелі мобильді қатынасқа қосылады.",
		admin_rba_mobile_access_disabled: "Бұл жұмыс үстелі мобильді қатынасқа қосылмайды.",
		admin_rba_confirm_delete_multiple: "Таңдалған әкімші рөлдерін жоюды қалайсыз ба?",
		admin_rba_confirm_delete_single: "Таңдалған әкімші рөлін жоюды қалайсыз ба?",
		admin_rba_delete_multi_role_desktop: "Сіз таңдаған рөлдердің бір немесе бірнешеуі жұмыс үстеліне тағайындалады. Оларды жоймас бұрын жұмыс үстелдерінен рөлдерді жою керек.",
		admin_rba_delete_single_role_desktop: "Таңдаған рөл ${0} жұмыс үстеліне тағайындалады. Оны өшірердің алдында жұмыс үстелінен рөлді жою керек.",
		admin_desktop: "Жұмыс үстелі",
		admin_rba_instructions: "Жұмыс үстелі әкімшіліктеріне берілген артықшылықтарды байланыстыратын жұмыс үстелі басқару рөлдерін жасауға және басқаруға болады. ",
		admin_rba_not_used: "${0} - кез келген жұмыс үстелдерінде пайдаланбайды.",
		admin_rba_desktops: "<b>${0} - келесідегі жұмыс үстелдерінде пайдаланылады:</b>",
		admin_rba_new_role: "Жаңа рөл",
		admin_rba_name_invalid: "Әкімші рөл аты келесідегі таңбалардың кез келгенін қамтымайды: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Анықтама келесі сипаттардың ешқайсысын қамтымайды: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Анықтама келесі сипаттардың ешқайсысын қамтымайды: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Ат келесі таңбалардың ешқайсысын қамти алмайды: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Сипаттама:</b> ${0}",
		admin_rba_membership: "Мүшелік",
		admin_rba_general_priv: "Жалпы",
		admin_rba_appearance_priv: "Сыртқы түрі",
		admin_rba_desktop_config_priv: "Жұмыс үстелі конфигурациясы",
		admin_rba_app_name_priv: "Бағдарлама аты",
		admin_rba_theme_priv: "Тақырып",
		admin_rba_viewer_map_priv: "Қараушы картасы",
		admin_rba_merge_split_priv: "Біріктіру және бөлу",
		admin_rba_sync_svc_priv: "Синхрондау қызметтері",
		admin_rba_menus_priv: "Мәзірлер",
		admin_rba_edit_svc_priv: "Қызметтерді өңдеу",
		admin_rba_toolbars_priv: "Құралдар тақталары",
		admin_rba_ctx_menus_priv: "Мәтінмән мәзірлері",
		admin_rba_office_ribbon_priv: "MS Office Ribbon Bar пәрмендері",
		admin_rba_office_menues_priv: "MS Office мәтінмән мәзірлері",
		admin_rba_addl_settings_priv: "Қосымша параметрлер",
		admin_rba_mobile_priv: "Мобильді бағдарламалар",
		admin_rba_add_doc_dlg_priv: "Құжат диалогын қосу",
		admin_rba_doc_mgmt_priv: "Құжат басқаруы",
		admin_rba_def_redaction_priv: "Әдепкі редакция опциясы",
		admin_rba_add_photos_priv: "Камера және сурет галлереясынан суреттерді қосу",
		admin_rba_time_stamp_priv: "Уақыт белдеуі",
		admin_rba_add_docs_folders_priv: "Репозиторийге құжаттарды қосып және қалталарды құру",
		admin_rba_open_docs_priv: "Құжаттарды басқа бағдарламаларда ашу",
		admin_rba_office_config_priv: "Office конфигурациясы",
		admin_rba_tab_label_priv: "IBM ECM қойынды белгішесі",
		admin_rba_feature_sel_priv: "Мүмкіндік таңдауы",
		admin_rba_general_config_priv: "Жалпы конфиурация",
		admin_rba_favorites_priv: "Таңдаулылар",
		admin_rba_add_options_priv: "Өңдеу тобына опциялар қосу",
		admin_rba_browse_priv: "Шолу",
		admin_rba_outlook_int_priv: "Outlook біріктіруі",
		admin_rba_search_priv: "Іздеу",
		admin_rba_layout_priv: "Орналасу",
		admin_rba_case_priv: "Іс",
		admin_rba_desktop_feat_priv: "Жұмыс үстелі мүмкіндіктері",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Көрсетілген мүмкіндіктер",
		admin_rba_branding_priv: "Жарнама",
		admin_rba_home_priv: "Басты",
		admin_rba_main_color_priv: "Негізгі түс",
		admin_rba_sec_color_priv: "Қосымша түс",
		admin_rba_teamspaces_priv: "Топ аймақтары",
		admin_rba_rbr_priv: "Рөлге негізделген редакция",
		admin_rba_et_mgr_priv: "Үлгі Басқару жазбасы",
		admin_rba_policies_roles_priv: "Саяаттарды және рөлдерді басқару",
		admin_rba_work_priv: "Жұмыс",
		admin_rba_reasons_priv: "Кодтардың негіздері",
		admin_rba_tasks_priv: "Үндестірілмеген Тапсырмалар",
		admin_rba_auth_priv: "Түпнұсқалық растама",
		admin_rba_all_privs: "Барлық артықшылықтар",
		admin_rba_some_privs: "Бірнеше артықшылықтар",
		admin_rba_no_privs: "Ешқандай артықшылығы жоқ",
		admin_add_users_groups_priv: "Пайдаланушылар мен топтарды қосу",
		admin_url_features_priv: "URL-мекенжай мүмкіндіктерін басқару",
		admin_plugin_features_priv: "Қосылатын модуль мүмкіндіктерін басқару",
		admin_addl_components_priv: "Қосымша құрамдастар",
		admin_global_toolbar_priv: "Глобалдық құралтақта",
		admin_status_bar_priv: "Күй жолағы",
		admin_refresh_message: "Жаңартылған деректі қолдану үшін шолғышыңызды жаңартуыңыз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Жаңартылған әдепкі жұмыс үстелін қолдану үшін шолғышыңызды жаңартуыңыз керек.",
		admin_desktop_refresh_message: "Жаңартылған жұмыс үстелін қолдану үшін шолғышыңызды жаңартуыңыз керек.",
		admin_action_open: "Ашу",
		admin_action_edit: "Өңдеу",
		admin_action_copy: "Көшіру",
		admin_action_delete: "Жою",
		admin_action_copy: "Көшіру",
		admin_action_new: "Жаңа құру",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Бұл идентификатор бұрыннан қолдануда. Бірегей идентификаторды көрсетуіңіз керек.",

		admin_searchable_properties_for: "Келесіге арналған іздеу сипаттары:",
		admin_repository_new: "Жаңа репозиторий",
		admin_desktop_new: "Жаңа жұмыс үстелі",
		admin_desktop_file_documents: "Пайдаланушыларға жаңа құжаттарды және қалталарды, қалтада сақтауға ұсынады",
		admin_desktop_file_documents_hover: "Егер пайдаланушыға, репозиторийге элементтерді қосу кезінде, қалтаны таңдауды ұсынсаңыз, осы опцияны таңдаңыз. Егер бұл опцияны таңдамаған болсаңыз, онда пайдаланушылар құжатттарды (IBM FileNet P8) немесе құжаттар мен қалталарды (IBM Content Manager) қалтаға тіркемей-ақ қоса алады.",
		admin_desktop_show_security_tab: "Әрекеттерге қосу және тексеру кезінде қауіпсіздік параметрлерін көрсетіңіз",
		admin_desktop_show_security_hover: "<b>IBM FileNet P8 пайдаланушылары ғана.</b>  Егер пайдаланушыларға құжаттар мен қалталардың қауіпсіздігін өңдеу үшін элементтерді осы жұмыс үстеліне қосу не тексеру кезінде рұқсат беру үшін осы опцияны таңдаңыз.",
		admin_desktop_configure_security_inheritance: "Пайдаланушыларға қалталардың қауіпсіздік мұрасын теңшеуге рұқсат ету",
		admin_desktop_configure_security_inheritance_hover: "<b>IBM FileNet P8 пайдаланушылары ғана.</b>  Егер пайдаланушылардың, қалталардың қауіпсіздік мұрасын қадағалауыңыз арқылы қалтадағы элементтерге қатысуды реттеуге қол жетімді болуын қаласаңыз, осы опцияны таңдаңыз. Егер осы опцияны таңдаған болсаңыз, пайдаланушылар не пайдаланушылар немесе топтардың қауіпсіздікті бір жерден мұра етуін көрсете алады:<ul><li>Қалта</li><li>Қалта және оның тексеру ішкі қалталары</li><li>Қалта және оның барлық ішкі қалталары</li></ul>",
		admin_desktop_appearance: "Сыртқы түрі",
		admin_desktop_appearance_instruction: "Жұмыс үстелі үшін көрсетілген кіру беті мен жарияламаны өзгерту арқылы жұмыс үстелінің көрінісін теңшей аласыз.",
		admin_desktop_layout: "Орналасу:",
		admin_desktop_layout_hover: "Орналасым қай мүмкіндіктердің веб тұтынушыда көрсетілуі тиіс екенін және веб тұтынушысының мазмұндары қалай тағайындалғанын көрсетеді.<br><br><b>Кеңес:</b> YoҚосылым модульдерін құру арқылы тұтынушы орналасымдарын анықтай аласыз. Қосылым модулін әкімші құралында тұтынушы орналасымын таңдамас бұрын тіркеуіңіз тиіс.",
		admin_desktop_layout_default: "Әдепкі",
		admin_desktop_layout_custom: "Тұтынушы",
		admin_desktop_enable_workflow_email: "Осы жұмыс үстелін FileNet P8 жұмыс ағымының элекрондық пошта хабарламалары үшін іске қосады",
		admin_desktop_enable_workflow_email_hover: "FileNet P8 пайдаланушылары ғана. Осы опцияны егер пайдаланушыларды веб тұтынушысын Process Engine бағдарламасы арқылы құрылған электрондық хабарламаларда қамтылған URL мекен-жайларынан ашуды іске қосу үшін таңдаңыз.<br /><br />Осы опцияны кез келген жұмыс үстелдері үшін іске қоспасаңыз, пайдаланушылар веб тұтынушысына хабарламалардағы URL мекен-жайларынан қосыла алмайсыз.<br /><br />Егер осы опцияны бірнеше жұмыс үстелдеріне іске қоссаңыз, және бір жұмыс үстелінен көбі хабарламалардағы URL мекен-жайында көрсетілген шарттардың біріне кезіксе, веб тұтынушы шартқа сай болатын жұмыс үстелін бірінші қолданады. ",
		admin_desktop_prevent_create_new_search: "Пайдаланушыларды іздеулерді құрудан қорғау",
		admin_desktop_prevent_create_new_search_hover: "Бұл опция пайдаланушыларға тек қана бар іздеулерді қолдануға және оңтайландырылмаған ашық соңғы іздеуді жасаудан шектейді.</br></br>Бұл параметр топ аумақтарына әсер етпейді. Топ аумақтарында іздеулерді құру құқығы берілген топ аумағындағы пайдаланушының рөлі арқылы қадағаланады.",
		admin_desktop_prevent_create_new_unified_search: "Пайдаланушыларды айқас репозиторийлі іздеулерді құрудан алдын алу",
		admin_desktop_prevent_create_new_unified_search_hover: "Бұл опция пайдаланушыларға тек бар айқас репозиторийлі іздеулерді ғана қолдауға және оңтайланылмайтын ашық айқас репозиторийлі іздеулерді құрудан шектейді.",
		admin_desktop_hide_entry_template_not_found_warning: "Байланыстырылған енгізілім үлгісі табылмаған кезде көрсетілген ескертуді жасырыңыз",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Элемент сипаттары өңделіп және элементпен байланыстырылған енгізілім үлгісі табылмаса көрсетілген ескерту хабарламасын жасырғыңыз келсе осы параметрді таңдаңыз.",
		admin_desktop_show_class_role_security_selection: "Пайдаланушыларға кіру үлгісіндегі рөлге негізделген қауіпсіздікті теңшеуге рұқсат етіледі",
		admin_desktop_show_class_role_security_selection_hover:	"<b>IBM FileNet P8 пайдаланушылары ғана.</b> Пайдаланушыларға құжаттардағы қауіпсіздікті орнату кезінде немесе тіркеу пішімдерін пайдаланып қалталарды орнатқанда, рөлге негізделген қауіпсіздікті пайдалану үшін енгізу үлгілерін конфигурациялауды қаласаңыз, осы параметрді таңдаңыз. Бұл опцияны таңдасаңыз, жазба үлгісінің редакторлары кіріс үлгісі анықтамасына рөл қауіпсіздігі нысандары қолданылатынын көрсете алады. ",
		admin_desktop_show_primary_multi_part: "Көрерменде негізгі құжатты ғана ашыңыз",
		admin_desktop_show_primary_multi_part_hover: "<b>IBM FileNet P8 пайдаланушылары ғана.</b> Бастапқы құжат файлын тек қарау құралында ашқыңыз келсе, осы параметрді таңдаңыз. Құжаттарда онымен байланысты бірнеше файл болуы мүмкін. Бұл параметр құжатпен байланысты негізгі файлды ғана ашады.",
		admin_desktop_redaction_save_mode: "Әдепкі редакция опциясы:",
		admin_desktop_redaction_save_mode_hover: "Әдепкі ViewONE Виртуалды қарау құралы редакцияны сақтау режимін таңдаңыз:</br>* Әрдайым пайдаланушы таңдауын сұраңыз: редакция режиміне кіруде тілқатысу көрсетілуіне себепші болады, пайдаланушы жаңа нұсқа ретінде тіркелу, жаңа құжат жасау, немесе мазмұнды жүктеуді қалайтынын сұраңыз.</br>* Жаңа құжат ретінде тіркеңіз: әрдайым редакциядан өткен мазмұнды бар құжаттың жаңа нұсқасында сақтайды.</br>* Толық жаңа құжат ретінде сақтаңыз: әрдайым редакциядан өткен мазмұнды толық жаңа құжат ретінде сақтаңыз.</br>* Клиентте жүктеңіз және сақтаңыз: редакциядан өткен мазмұнды клиент жүйесіне жүктейді.",
		admin_desktop_redaction_save_mode_user_select: "Пайдаланушыдан таңдауды әрдайым сұраңыз",
		admin_desktop_redaction_save_mode_new_version: "Жаңа нұсқа ретінде тіркеңіз",
		admin_desktop_redaction_save_mode_new_document: "Толық жаңа құжат ретінде сақтаңыз",
		admin_desktop_redaction_save_mode_local_content: "Клиентте жүктеңіз және сақтаңыз",

		admin_desktop_document_add_mode: "Құжат тілқатысуын қосу:",
		admin_desktop_document_add_mode_hover: "IBM Content Navigator арқылы құрылған құжаттарды қосу кезінде қолдану үшін қосылған тілқатысуды көрсетіңіз:<ul><li>Жаңадан тұрақты редакцияланған құжат</li><li>Жаңа біріктірілген және бөлінген құжат</li><li>Жаңа Microsoft Office құжаты</li><li>Жаңа өңдеу қызметінің құжаты</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Құжат қосу",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Енгізу Топ аймағын пайдалана отыра Құжатты қосу",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Біріктіру және бөлу:",
		admin_desktop_merge_and_split_enable_hover: "Осы жұмыс үстеліне қатынасатын пайдаланушыларға өздерінің қолдаушы қарау құралын пайдалану арқылы құжаттарды өңдеу және салыстыру мүмкіндігін көрсетіңіз.",

		admin_desktop_merge_and_split_show_checkin: "Пайдаланушылар құжатқа жасалған өзгерістерді тексеру кезінде сипат мәндерін қамтамасыз етуге шақырады.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Осы опцияны таңдайтын болсаңыз, тіркеу диалогы пайдаланушылар Біріктіру және Бөлу режиміндегі құжатқа арналған өзгертулерді тіркейтін кезде көрсетіледі.",

		admin_desktop_available_categories: "Қол жетімді мүмкіндіктер",
		admin_desktop_selected_categories: "Таңдалған мүмкіндіктер",

		admin_layout_banner_title: "Жариялама және кіру беті",
		admin_layout_title: "Орналасу",

		admin_desktop_application_name: "Бағдарлама аты:",
		admin_desktop_application_name_hover: "Баннерде көрсету үшін бағдарлама атын көрсетіңіз.<br><br>Кеңес: Белгілер / Жұмыс үстел белгілері қойындысында басқа тілдер үшін бағдарлама атын анықтаңыз.",
		admin_desktop_theme: "Тақырып:",
		admin_desktop_theme_hover: "Әдепкі IBM Content Navigator тақырыбын қолдану немесе осы жұмыс үстелі үшін теңшелетін тақырыпты қолдану қажеттігін көрсетіңіз. Теңшелетін тақырыпты қолдану үшін, әкімшілік құралының <b>Тақырыптар</b> бөлімінде тақырыпты жасау керек.",
		admin_desktop_login_logo: "Кіру бетінің белгісі:",
		admin_desktop_login_logo_hover: "Кіру бетінде көрсетілген белгіні өзгерткіңіз келсе, кіру файлының URL мекен-жайын көрсете аласыз. Дегенмен, логотипті өзгерту үшін теңшелетін тақырып қолдану ұсынылады.",
		admin_desktop_login_logo_url_hover: "Журнал файлының URL мекен-жайын енгізіңіз. Егер журнал веб тұтынушысы секілді бірдей веб бағдарлама серверінде болса, қатысты URL мекен-жайын енгізіңіз, мысалы: /mycustomizations/login_logo.png<br><br>Белгі ені бойынша 200 пиксельден және биіктігі бойынша 150 пиксельден аспауы тиіс.<br><br>Журналдың мөлдір өңдік түсті қамтуы ұсынылады.",
		admin_desktop_banner_logo: "Жариялама белгісі:",
		admin_desktop_banner_logo_hover: "Жарияламада көрсетілген белгіні өзгерткіңіз келсе, кіру файлының URL мекен-жайын көрсете аласыз. Дегенмен, логотипті өзгерту үшін теңшелетін тақырып қолдану ұсынылады.",
		admin_desktop_banner_logo_url_hover: "Журнал файлының URL мекен-жайын енгізіңіз. Егер журнал веб тұтынушысы секілді бірдей веб бағдарлама серверінде болса, қатысты URL мекен-жайын енгізіңіз, мысалы: /mycustomizations/banner_logo.png<br><br>Белгі ені бойынша 72 пиксельден және биіктігі бойынша 36 пиксельден аспауы тиіс.<br><br>Журналдың мөлдір өңдік түсті қамтуы ұсынылады.",
		admin_desktop_banner_background_color: "Жарияламаның өңдік түсі:",
		admin_desktop_banner_background_color_hover: "Жарияламаның өңдік түсін өзгерткіңіз келсе, тұтынушы түсті көрсете аласыз. Дегенмен, баннердің түсін өзгерту үшін теңшелетін тақырып қолдану ұсынылады.",
		admin_desktop_banner_background_color_custom_hover: "Бағдарлама жарияламасының түсін он алтылық түс реінде көрсетіңіз.",
		admin_desktop_banner_application_name_color: "Бағдарлама аты мәтінінің түсі:",
		admin_desktop_banner_application_name_color_hover: "Егер бағдарлама атының түсін өзгерткіңіз келсе, тұтынушы түсті көрсете аласыз. Дегенмен, бағдарлама атының түсін өзгерту үшін теңшелетін тақырыпты қолдану ұсынылады.",
		admin_desktop_banner_application_name_color_custom_hover: "Бағдарлама атының түсін он алтылық түс ретінде көрсетіңіз.",
		admin_desktop_banner_menu_color: "Жариялама белгісінің түсі:",
		admin_desktop_banner_menu_color_hover: "Жарияламаның өңдік түсін өзгертсеңіз, жарияламадағы белгілердің түс сызбасын көрнекті ету үшін өзгертуді қажет етуіңіз мүмкін. Жариялама белгілерінің ашық және күңгірт түс нұсқасын қайда көрсету керек екенін көрсетіңіз.<br><br>Дегенмен, белгішелердің түсін өзгерту үшін теңшелетін тақырып қолдану ұсынылады.",
		admin_desktop_login_page_content: "Кіру бетінің мазмұны:",
		admin_desktop_login_page_content_hover: "Кіру бетінде жүйе іркілістері туралы немесе пайдаланушылар пайдаланушы аты мен құпия сөзін жайлы көмекті өайдан алуға болатыны жайлы қосымша ақпарат көрсеткіңіз келсе, көрсеткіңіз келген мазмұнның URL мекен-жайын көрсете аласыз.",
		admin_desktop_login_page_content_url_hover: "Кіру беті мазмұнының URL мекен-жайын енгізіңіз. Егер мазмұн веб тұтынушысы секілді бірдей веб бағдарлама серверінде болса, қатысты URL мекен-жайын енгізіңіз, мысалы: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Құпия сөз ережелері:",
		admin_desktop_password_rules_hover: "Егер пайдаланушыларды құпия сөздер құру туралы, мысалы шектелген таңбалар немесе таңбалардың ең аз саны сияқты көмек бергіңіз келсе, онда сіздің құпия сөз ережелеріңізді қамтитын беттің URL мекен-жайын көрсете аласыз.",
		admin_desktop_password_rules_url_hover: "Құпия сөз ережелері мазмұнының URL мекен-жайын енгізіңіз. Егер мазмұн веб тұтынушысы секілді бірдей веб бағдарлама серверінде болса, қатысты URL мекен-жайын енгізіңіз, мысалы: /mycustomizations/passwords.html",
		admin_desktop_help_url: "Пайдаланушы көмегі URL мекен-жайын аяқтаңыз:",
		admin_desktop_help_url_hover: "IBM Content Navigator бағдарламасымен жеткізілген көмекті қолдана аласыз немесе келесі бір әрекетті алу арқылы пайдаланушыларды өзгертпелі көмек мазмұнына бағытын өзгерте аласыз:<br><br><ul><li>Өзгертпелі көмек жүйесіне бағытын өзгерту</li><li>IBM Content Navigator бағдарламасымен орналастырылған IBM Білім Орталығының Тұтұнушысының данасына көмекті қосу.</li></ul>",
		admin_desktop_help_url_url_hover: "Тұтынушы көмегі жүйесінің URL мекен-жайын енгізіңіз. IBM Content Navigator бағдарламасы index.jsp?content=/com.ibm.usingeuc.doc/ қабылдайды және сіз көрсеткен URL мекен-жайының файл аты соңына қабылдайды.  Жұмысқа арналған \"Learn more\" байланыстар үшін көмек жүйесі біріктірілген және пайдаланушы көмегі ретінде бәрдей файл аттарын қолдануы тиіс. ",
		admin_desktop_deprecated_appearance_title: "Ескірген параметрлер",
		admin_desktop_deprecated_appearance_instructions: "Егер өзгермелі тақырыпты пайдалансаңыз, бұл параметрлердің үстіне өзгермелі тақырып жазылады. Сіз осы бөлімдегі параметрлерге қарағанда анағұрлым толығырақ мәнерді беретін өзгермелі тақырыпқа көшіруіңіз керек. Сонымен қатар, өзгермелі тақырыпты бірнеше жұмыс үстелдері пайдалана алады.",

		admin_desktop_plugins_title: "Бұл жұмыс үстелі үшін қосылатын модульдерді қосыңыз немесе ажыратыңыз.",
		admin_desktop_plugins_enable_all_plugins: "Бұл жұмыс үстелімен қолдану үшін барлық орналастырылған қосылатын модульдерді қосыңыз",
		admin_desktop_plugins_select_plugins: "Бұл жұмыс үстелі қолдануы үшін қосуға орналастырылған қосылатын модульдерді таңдаңыз",
		admin_desktop_plugins_select_plugin: "Қосылатын модульді Таңдау",

		admin_desktop_layout_features: "Көрсетілген мүмкіндіктер:",
		admin_desktop_layout_features_hover: "Осы жұмыс үстелінен пайдаланушылардың осыған рұқсаты болатындай мүмкіндіктерді таңдаңыз. Мүмкіндіктер тізімделген реті бойынша көрсетіледі.<br><br>Мүмкіндікті таңдаған кезде, мүмкіндіктің кейбір әрекеттерін жұмыс үстелі арқылы теңшей аласыз, мысалы келешекке таңдалған әдепкі репозиторий.",
		admin_desktop_layout_default_repository: "Әдепкі репозиторий:",
		admin_desktop_layout_default_repository_layout_hover: "Пайдаланушылар осы мүмкіндікті ашқан кезде әдепкі бойынша таңдалған репозиторийні көрсетеді.",
		admin_desktop_layout_document_thumbnails: "Құжат нобайлары:",
		admin_desktop_layout_document_thumbnails_hover: "Құжат ақпараты қойындысында құжаттар үшін нобайларды қайда орналастыру керек екенін көрсету.<br><br>Нобайларды көрсету веб тұтынушысының көрсетілімін баяулатады.",
		admin_desktop_layout_show_filmstrip_view: "Диафильм көрінісі:",
		admin_desktop_layout_show_filmstrip_view_hover: "Пайдаланушыларға мазмұн тізімі көрінісін диафильм көрінісінде ауыстыруға рұқсат етуді көрсету.<br><br>Диафильм көірінісі пайдаланушы таңдайтын әр бір құжаттың аддын ала көрінісін жасайды. Алайда, диафильм көірінісін қолдану веб тұтынушысының көрсетілімін баяулатады. Сонымен қатар, HTML түрлендіру көрінісін құжаттың алдын ала көрулерін теңшеуі тиіс.",
		admin_enabled: "Іске қосу",
		admin_disabled: "Ажырату",
		admin_include: "Қосу",
		admin_exclude: "Шығарып тастау",
		admin_layout_teamspaces_default_repository: "Топ аймақтары:",
		admin_layout_entry_templates_default_repository: "Үлгілерді енгізу:",
		admin_layout_other_features_default_repository: "Іздеу және шолу:",
		admin_layout_work_default_repository: "Жұмыс:",
		admin_layout_default_feature: "Әдепкі мүмкіндік:",
		admin_default_category_placeholder: "Мүмкіндікті таңдау",
		admin_layout_default_feature_hover: "Пайдаланушылар осы жұмыс үстеліне кірген кезде қай мүмкіндікті қолдану керек екенін көрсету.",
		admin_layout_default_feature_warning: "Әдепкі мүмкіндікті өзгерту бағдарламаны жүктеуге қажетті уақытқа әсер етуі мүмкін.",
		admin_layout_feature_list_header: "Мүмкіндік",
		admin_layout_show_statusbar: "Күй тақтасы:",
		admin_layout_show_statusbar_hover: "Күй тақтасын жұмыс үстелінің төменгі өай жерінде көрсету керек екенін көрсетіңіз.<br><br>Егер сіз күй тақтасын жасырсаңыз, пайдаланушылар қате емес оқиғалар туралы ақпаратты көре алмайды, мысалы:<ul><li>Құжат репозиторийге қосылды.</li><li>Іздеу 59 құжатты қайтарды.</li></ul>",
		admin_layout_show_magazineview: "Журнал көрінісі:",
		admin_layout_show_magazineview_hover: "Пайдаланушыларға мазмұн тізімі көрінісін журнал көрінісінде ауыстыруға рұқсат етуді көрсету.<br><br>Журнал көрінісі мазмұн тізіміндегі әр бір жазбаңын биіктігін ұлғайтады, ол мазмұн тізімінде бір уақытта көрсетілетін элементтер санын кемітеді.",
		admin_layout_show_detailsview: "Егжей-тегжейлі көрінісі:",
		admin_layout_show_detailsview_hover: "Пайдаланушыларға мазмұн тізімінің көрсетілуін, егжей-тегжейлі көрініске ауысуға рұқсат беру керектігін көрсетіңіз.<br><br>Егжей-тегжейлі көрініс, мазмұн тізімінде көрінетін жолдардың санын барынша үлкейтеді.",
		admin_feature_config_docinfopane_label: "Құжат ақпараты қойындысы:",
		admin_feature_config_docinfopane_hoverhelp: "Пайдаланушылардың осы орайда құжа ақпараты қойындысын қабылдай алатынын көрсетіңіз.",
		admin_feature_config_docinfopane_default_label: "Әдепкі әрекет:",
		admin_feature_config_docinfopane_expanded: "Кеңейтілген",
		admin_feature_config_docinfopane_collapsed: "Тасаланған",
		admin_feature_config_docinfopane_expand_on_select: "Элемент таңдалған кезде шығару",
		admin_layout_features_title: "Жұмыс үстелі мүмкіндіктері",
		admin_layout_features_instructions: "Пайдаланушылардың осы жұмыс үстелінен қай мүмкіндіктерді пайдаланатынын көрсетіңіз.  Сонымен қатар, жұмыс үстелінде қамтылған әр бір мүмкіндіктің әрекетін теңшей аласыз.",
		admin_layout_components_title: "Қосымша Жұмыс үстелінің Құрамдастары",
		admin_layout_components_instructions: "Көбірек жеңілдетілген теңшелімді немесе веб тұтынушысының көрсетілімін жетілдіргіңіз келсе, жұмыс үстелінің кейбір құрамдастарын ажырата аласыз.",
		admin_layout_featureconfig_instructions: "Теңшеу үшін мүмкіндікті таңдаңыз",
		admin_layout_featureconfig_no_configuration: "Ешқандай мүмкіндік теңшелімі қол жетімді емес.",
		admin_layout_featureconfig_label: "${0} мүмкіндігіне арналған теңшелім",
		admin_layout_featureconfig_title: "Мүмкіндік теңщелімі",
		admin_layout_featureconfig_taskManagerURL: "Осы мүмкіндікті қолдану үшін, тапсырма менеджері қызметіне қосылу үшін IBM Content Navigator бағдарламасын теңшеуіңіз және іске қосуыңыз керек. Осы әкімші құралының <b>Параметрлер</b> бөліміндегі тапсырма реттеушісінің қызметін іске қосыңыз.",
		admin_feature_config_show_my_checkouts_label: "Менің Рәсімдеулерімнің тақтасы:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Менің Рәсімдеулерімнің тақтасы, пайдаланушыларға көрсетілген репозиторийде тексерген, барлық элементтерді іздеуді орындауға іске қосады. Пайдаланушылардың Басты мүмкіндіктерден, Менің Рәсімдеулерімнің тақтасына қатынаса алатынын көрсетіңіз.<br/><br/><b>Шектеу:</b> Бұл мүмкіндік осы жұмыс үстелінмен байланысқан кем дегенде бір IBM Content Manager, IBM FileNet P8 немесе OASIS CMIS репозиторийін ұсынады.",

		admin_feature_config_default_repository_icon_text: "Әдепкі репозиторий",
		admin_show: "Көрсету",
		admin_hide: "Жасыру",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Әкімші жұмыс үстелінен әкімші мүмкіндікті жоя алмайсыз",
		admin_warning_label: "Ескерту:",
		admin_layout_show_globaltoolbar: "Жаһандық құралдар тақтасы:",
		admin_layout_show_globaltoolbar_hover: "Құралдар тақтасын жұмыс үстелінің жоғарғы жағындағы жарияламаның қай жерінде көрсету керек екенін көрсетіңіз.<br><br>Жаһандық құралдар тақтасы пайдаланушыларды құжаттар, қалталарды қосуға және репозиторийге сақтау үшін іске қосатын әрекеттерді қамтиды. Қол жетімді әрекеттер пайдаланушы қосылған репозиторийге байланысты болады.",
		admin_interface_text_name_label: "Белгі түрі",

		admin_interface_text_label_description: "Веб тұтынушысының арнайы аймақтарында көрсетілген мәтінді теңшей аласыз. Белгілер сіздің теңшеліміңіздегі барлық репозиторийлер мен жұмыс үстелдері үшін көрсетіледі. Ағымдағы белгі өрісіндегі теңшелімде көргіңіз келген мәтінді енгізіңіз.<br><br><b>Маңызды:</b> Белгілерге жасаған кез келген өзгертулер әкімші құралында көрсетілмейді.",
		admin_interface_text_label_action: "Әрекет белгілері",
		admin_interface_text_label_action_description: "Әрекет белгілері веб тұтынушысы арқылы түймешіктер мен мәзірлерде көрсетілген. Репозиторийдің әр бір түрі үшін әр түрлі әрекет белгілерін анықтай аласыз.",
		admin_interface_text_label_application: "Бағдарлама белгілері",
		admin_interface_text_label_application_description: "Бағдарлама белгілері веб тұтынушысы арқылы көрсетілген.",
		admin_interface_text_label_system: "Жүйе сипатының белгілері",
		admin_interface_text_label_system_description: "Көрсетілген жүйе сипаттар репозиторий арқылы әр түрлі болады. Репозиторийлеріңіздегі құжаттар мен қалталармен байланыстырылған жүйе сипаттарына арналып көрсетілген белгілерді теңшей аласыз.",
		admin_interface_text_label_desktop: "Жұмыс үстелі белгілері",
		admin_interface_text_label_desktop_description: "Егер сіз бағдарлама атын жұмыс үстелінде теңшесеңіз, онда сол атты Ағылшын тілінен басқа ьілдерде теңшей аласыз. Сіз сонымен қатар жұмыс үстеліндегі IBM FileNet P8 бағдарламасының аттары н теңшей аласызү",

		admin_interface_text_system_label: "Жүйе белгілері",
		admin_interface_text_current_label: "Ағымдағы белгі",
		admin_interface_text_default_label_heading: "Әдепкі белгі",
		admin_interface_text_default_label: "Әдепкі белгі:",
		admin_interface_text_displayed_in_label: "Келесі үшін көрсетілген",
		admin_interface_text_displayed_in_document_folder: "Құжаттар мен қалталар",
		admin_interface_text_displayed_in_document: "Құжаттар",
		admin_interface_text_displayed_in_folder: "Қалталар",
		admin_interface_text_displayed_in_admin_application_space: "Бағдарламаның бос орын белгісі",
		admin_interface_text_displayed_in_desktop: "Ұялы құрылғыға арналған мүмкіндік белгісі",
		admin_interface_text_displayed_in_admin_application_name: "Бағдарлама аты",

		admin_new_desktop: "Жаңа жұмыс үстелі",
		admin_new_repository: "Жаңа репозиторий",
		admin_new_menu: "Жаңа мәзір",
		admin_new_viewer_mapping: "Жаңа қарау құралы картасы",
		admin_new_mapping_label: "Жаңа салыстыру",
		admin_new_icon_mapping: "Жаңа белгі салыстырмасы",
		admin_viewer_mapping_list_instructions: "Мазмұндардың әр түрлі түрлерін көрсету үшін веб тұтынушысы қолданатын құралдар тақтасын теңшей аласыз. Қарау құралы картасы қай MIME түрлерінің сіз қолданғыңыз келген әр бір қарау құралымен байланыстырылған. Әр түрлі қарау құралын әр түрлі жұмыс үстелдері үшін қолданғыңыз келсе, бірнеше қарау құралы карталарын құра аласыз.",
		admin_viewer_mapping_instructions: "Файлдарды ашу үшін қолданғыңыз келген қарау құралдарын көрсетіңіз. Тұтынушы қарау құралын қолданғыңыз келсе, оны қарау құралы картасына қоспастан бұрын қосылу модулі ретінде қарау құралын біріктіре аласыз.<br><br><b>Маңызды:</b> Пайдаланушы құжатты ашқан кезде, веб тұтынушы пайдаланушы қолданып жатқан амалдық жүйеге негізделген құжатты аша алатын бірінші қарау құралын табу үшін және пайдаланушы байланысқан репозиторийді іздейді. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Жаңа қосылу модулі",
		admin_menu_list_instructions: "Пайдаланушыларға қай әрекеттердің қол жетімді екенін басқару үшін теңшелген құралдар тақтасы мен мазмұн мәзірлерін құра аласыз. Әдепкі мәзірлерді өзгерте алмайсыз, бірақ бар мәзірлердің көшірмесін қол жетімді әрекеттерді шектеу үшін немесе қосылу модулінде анықталған тұтынушы әрекеттерін қосу үшін құра аласыз.<br><br>Мәзірлің жаңа түрін құрғыңыз келсе, мәзірді қосылу модулінде анықтауыңыз керек.",
		admin_menu_id_hover: "Идентификатор бірегей болуы тиіс және мәзірді сақтағаннан кейін идентификаторды өзгерте алмайсыз.<br><br>Идентификатор тек әліпбилік сипаттарды ғана қамти алады және үлкен кішілігін ескереді.",
		admin_menu_id_disabled_hover: "Мәзір идентификаторы өзгермейді. Әр түрлі идентификаторды қолданғыңыз келсе, жаңа мәзірді құруыңыз керек.",
		admin_menu_default_instructions: "Осы мәзірді өзгерте алмайсыз, себебі бұл әдепкі мәзір. Егер осы мәзірді өзгерткіңіз келсе, мәзірдің көшірмесін жасауыңыз керек.",
		admin_menu_toolbar_instructions: "Осы құралдар тақтасы үшін қол жетімді әрекеттерді шектей аласыз немесе қосылу модулінде анықталған тұтынушы әрекеттерін қоса аласыз. Сонымен қатар әрекеттерді құралдар тақтасына ажыратқыштарды қосу арқылы ұйымдастыра аласыз.",
		admin_menu_toolbar_custom_instructions: "Бұл құралдар тақтасы қосылу модулі арқылы анықталған. Осы құралдар тақтасын өзгерткіңіз келсе, қосылу модулін жаңартып немесе құралдар тақтасының көшірмесін құрыңыз.",
		admin_menu_context_menu_instructions: "Осы мазмұн мәзірі үшін қол жетімді әрекеттерді шектей аласыз немесе қосылу модулінде анықталған тұтынушы әрекеттерін қоса аласыз. Сонымен қатар әрекеттерді мазмұн мәзіріне ажыратқыштар мен ішкі мәзірлерді қосу арқылы ұйымдастыра аласыз",
		admin_menu_context_menu_custom_instructions: "Бұл мазмұн мәзірі қосылу модулі арқылы анықталған. Осы мазмұн мәзірін өзгерткіңіз келсе, қосылу модулін жаңартып немесе мазмұн мәзірінің көшірмесін құрыңыз.",
		admin_desktop_list_instructions: "Бірнеше жұмыс үстелдерін әр түрлі пайдаланушыларға қажетті мазмұнға қатынасу үшін арналған рұқсатты беру үшін құрыңыз. Мысалы, пайдаланушыларға мазмұнды іздеуге немесе пайдаланушыларға жалғыз репозиторийге қосылу үшін жұмыс үстелін құра аласыз. ",
		admin_plugin_updated: "Таңдалған қосылатын модульдің теңшелімі өзгертілген. Өзгертулеріңіз нәтиже алу үшін, шолғышты жаңартуыңыз керек.",
		admin_repository_ci_heading: "Мазмұн біріктірушісінің репозиторийі: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager репозиторийі: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager репозиторийі: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand репозиторийі: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) репозиторийі: <b>${0}</b>",
		admin_repository_box_heading: "Box репозиторийі: <b>${0}</b>",
		admin_repository_generic_heading: "Репозиторий: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Таңдалған жұмыс үстелін жойғыңыз келеді ме?\n${0} жұмыс үстелдері таңдалды.",
		admin_delete_confirmation_menus: "Таңдалған мәзірлерді жойғыңыз келеді ме?\n${0} мәзірлер таңдалды.",
		admin_delete_confirmation_repositories: "Таңдалған репозиторийлерді жойғыңыз келеді ме?\n${0} репозиторийлер таңдалды.",
		admin_delete_confirmation_viewer_mappings: "Таңдалған қарау құралы карталарын жойғыңыз келеді ме?  ${0} карталар таңдалды.",
		admin_delete_confirmation_icon_mappings: "Таңдалған элемент теңшелімін жойғыңыз келеді ме?\n${0} элемент теңшелімдері таңдалды.",
		admin_delete_confirmation_plugins: "Таңдалған қосылу модульдерін жойғыңыз келеді ме?\n${0} қосылу модульдері таңдалды.",
		admin_delete_confirmation: "Таңдалған элементтерді жойғыңыз келеді ме?\n${0} элементтер таңдалды.",

		admin_viewer_mapping_id_hover: "Идентификатор бірегей болуы тиіс және қарау құралы картасын сақтағаннан кейін идентификаторды өзгерте алмайсыз.<br><br>Идентификатор тек әліпбилік сипаттарды ғана қамти алады және үлкен кішілігін ескереді.",
		admin_viewer_mapping_id_disabled_hover: "Қарау құралы картасының идентификаторы өзгермейді. Егер әр түрлі идентификаторды қолданғыңыз келсе, жаңа қарау құралы картасын құруыңыз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Әдепкі жұмыс үстелі жойыла алмайды.",

		admin_desktop_heading: "Жұмыс үстелі: <b>${0}</b>",
		admin_menu_toolbar_heading: "Құралдар тақтасы: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Тұтынушы құралдар тақтасы: <b>${0}</b>",
		admin_menu_context_menu_heading: "Мазмұн мәзірі: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Тұтынушы мазмұн мәзірі: <b>${0}</b>",
		admin_plugin_heading: "Қосылу модулі: <b>${0}</b>",
		admin_plugin_instructions: "Қосылу модулі не JAR файлы не құрастырылған класс файлы бола алады.<br/><br/><b>Маңызды:</b> IBM Content Navigator веб бағдарламасының сервері қосылу модулі файлын жергілікті файл жүйесінде немесе URL мекен-жайы арқылы қабылдауға қабілетті болуы тиіс.",
		admin_plugin_list_instructions: "Әкімші құралын қосылу модулін веб тұтынушысына тіркеу үшін қолданылуы тиіс. Егер қосылу модулі қосымша теңшелімді қажет етсе, теңшеу параметрлері қосылу модулін тіркегеннен кейін көрсетіледі.<br /><br /><b>Маңызды:</b> Әкімші құралының басқа аумағында, мысалы мәзір, сілтеленген қосылу модулін өңдегіңіз келсе, мәселелерді қосылу модулінің әрекетімен сәйкестендіруіңіз керек. Қосымша, қосылу модульдері тізімделген реті бойынша шақырылады. Егер қосымша модуль басқа қосымша модульден бұрын орындалатын болса, онда қосымша модульдердің орындалу реті бойынша тізімделгеніне көз жеткізіңіз.",
		admin_plugin_cannot_delete: "Таңдалдған қосылатын модульдерді жою мүмкін емес өйткені кейбір қосылатын модульдер оларға тәуелді.<br/>Таңдалған қосылатын модульдер: ${0}<br/>Тәуелді қосылатын модульдер: ${1}",
		admin_plugin_cannot_disable: "Таңдалған қосылатын модульдерді ажырату мүмкін емес өйткені кейбір қосылатын модульдер оларға тәуелді.<br/>Таңдалған қосылатын модульдер: ${0}<br/>Тәуелді қосылатын модульдер: ${1}",
		admin_plugin_cannot_add: "Қосылатын модуль қосылмайды, себебі оған байланысты болатын кейбір қосылатын модульдер жоқ немесе ажыратылған. Жоқ немесе ажыратылған қосылу модульдері: ${0}",
		admin_plugin_cannot_enable: "Таңдалған қосылатын модульдер іске қосылмайды, себебі оған байланысты болатын кейбір қосылатын модульдер жоқ немесе ажыратылған.<br/>Таңдалған қосылатын модульдер: ${0}<br/>Missing or disabled plugins: ${1}",
		admin_plugin_save_order: "Ретті Сақтау",
		admin_plugin_load: "Қотару",
		admin_plugin_load_hover: "Қосылу модулінің URL мекен-жайын көрсетіңіз",
		admin_plugin_file_hover: "Егер қосылу модулі JAR файлы сіздің жергілікті файл жүйеңізде болса, толық жарамды жолды немесе қосылу модулі файлының URL мекен-жайын енгізе аласыз. Егер қосылу модулі JAR файлы қашықтағы серверде болса, онда қосылу модулінің URL мекен-жайын енгізуіңіз керек.",
		admin_plugin_classfolderpath_hover: "Қысылған сынып файлы IBM Content Navigator веб бағдарламасының серверінде болуы тиіс.<br/><br/>Қосылу модулі класстары құрастырылған және жасалған қалтаның толық жарамды жолын енгізіңіз.<br/><br/>Жол қосылу модулі классының бума атын қамтымауы тиіс. Мысалы, әдепкі жол Windows C жүйесіндегі қосылу модулі классының үлгісі үшін арналған:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Java классының толық атын қосылу модулі классы деп аталып және жүктелетін класс файлының ішіне енгізіңіз.<br/>Мысалы, қосылу модулінің үлгісі үшін класс аты мынадай com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Қосылу модулінің JAR файлы көрсетілген URL мекен-жайында табылмады. JAR файлының веб бағарламасы серверінде болуын және URL мекен-жайы мен файл атының дұрыс болуын тексеріңіз.",
		admin_plugin_for_repository_not_loaded: "Бұл репозиторийді жоя алмайсыз. Репозиторийдің осы түрін қолдайтын және анықтайтын қосылу модулі жүктелген жоқ. Қосылу модулі қойындысында қосылу модульдің дұрыс теңшелгенін және жүктелгенін тексеріңіз.",
		admin_plugin_repository_types: "Репозиторий түрлері:",
		admin_plugin_viewers: "Қарау құралдары:",
		admin_plugin_features: "Мүмкіндіктер:",
		admin_plugin_layouts: "Орналасулар:",
		admin_plugin_not_available: "Қол жетімді емес",
		admin_plugin_config_params: "Теңшеу Параметрлері:",
		admin_viewer_def_heading: "Қарау құралы картасы: <b>${0}</b>",
		admin_users_and_groups: "Пайдаланушылар және топтар",
		admin_general: "Жалпы",
		admin_logging: "Кіруде",
		admin_authentication: "Түпнұсқалық растама",		
		admin_rolebase_role: "Рөл:",
		admin_settings_logging_instructions: "Кіруді веб тұтынушысымен бірге мәселелер ақаулықтарын жою үшін қолдана аласыз. Егер мәселенің Java class немесе арнайы пайдаланушы үшін пайда болғанын білсеңіз, логиніңізді нақтылаңыз. Қателік ақпараты сіздің веб бағдарлама серверіңіздің қателік журнал файлдарына жазылған.",
		admin_settings_logging_instructions2: "<b>Кіру параметрлерінің күйін келтіру</b><br />Егер мәселенің арнайы пайдаланушы немесе тұтынушы хостының компьютерінде пайда болғанын білсеңіз, онда күйін келтіру логиніңізді сол компьютерге немесе пайдаланушыға мақсатты ете аласыз. Күйін келтіру ақпаратын жүйеге арнайы әсер етпей өнім ортаңыздан ала аласыз.<br /><br /><b>Маңызды:</b> Егер сіз тұтынушы зост компьютерін немесе пайдаланушыны көрсетсеңіз, осы параметр кез келген кіру параметрлерін қайта жазады. Қажет еткен ақпаратыңызды алғаннан кейін осы опцияны <b>Ешбір</b> түріне ортаңыз үшін қалыпты кіруді шолу үшін енгізіңіз.",
		admin_settings_export_config_hover: "Ағымдағы жүйенің теңшелім ақпаратын файл үшін IBM Support Assistant Data Collector бағдарламасымен бірге қолдану үшін шығарыңыз. Файл user.home Java жүйе сипаты арқылы анықталған орналасымға сақталды.",
		admin_logging_level: "Бағдарлама деңгейінің кіруі:",
		admin_logging_level_hover: "Кіру деңгейлері қанша ақпараттың сіздің серверіңізде сақталғанына әсер етеді. <b>Қате</b> түрін таңдау кіру ақпаратының көлемін алады. <b>Күйін келтіру</b> тthe mүрін таңдау ең соңғы ақпаратты алады.<br /><br /><b>Күйін келтіру</b> түрін өнім ортасында солай орындауға IBM Software Support бағдарламасы арқылы нұсқаулық алмайынша көрсетпеңіз.",
		admin_logging_level_0: "Журналға тіркелу жоқ",
		admin_logging_level_1: "Қате",
		admin_logging_level_2: "Ескерту",
		admin_logging_level_3: "Ақпарат",
		admin_logging_level_4: "Күйін келтіру",
		admin_logging_classes: "Java класс деңгейінің кіруі:",
		admin_logging_classes_hover: "Әдепкі бойынша барлық Java класстар және бумалар веб бағдарлама серверінің қателік журналдарында қамтылған. Алайда, журналыңыздан қай класстар немесе бумаларды кіргізу не шығару керек екенін көрсете аласыз. Веб бағдарлама серверінің қателік журналдарын қай класстарды енгізіп немесе шығару керек екенін анықтау үшін қолдана аласыз.<br><br>Егер мәселенің арнайы класста пайда болғанын білсеңіз, онда сол классты журнал файлдарында қамти аласыз. Классты қателік журналдарыңызда қамтысаңыз, басқа класстардың барлығы журнал файлынан шығарылады.<br><br>Егер мәселенің класста пайда болмайтынын білсеңіз және журнал файлының өлшемін кішірейткіңіз келсе, онда сол классты журнал файлдарынан шығарыңыз.",
		admin_logging_classes_include: "Қосу",
		admin_logging_classes_include_all: "Барлық класстар",
		admin_logging_classes_include_specified: "Арнайы класстар",
		admin_logging_classes_include_specified_msg: "Қай классты кірістіру керек екенін көрсетіңіз.",
		admin_logging_classes_exclude: "Шығарып тастау",
		admin_logging_classes_exclude_none: "Ешбір",
		admin_logging_classes_exclude_specified: "Арнайы класстар",
		admin_logging_classes_exclude_specified_msg: "Өай класстарды шығару керек екенін көрсетіңіз.",
		admin_logging_debug: "Келесіге арналған қалпына келтіру кіруі:",
		admin_logging_debug_hover: "<b>Маңызды:</b> Тұтынушы хост компьютерінің ІР мекен-жайын немесе пайдаланушыны көрсетпестен бұрын веб бағдарлама серверінің журнал файлдарын шолыңыз. Сіз қамтамасыз ететін мән журналда көрсетілген мәнге сәйкес болуы тиіс.",
		admin_logging_debug_none: "Ешбірі (әдепкі)",
		admin_logging_debug_host: "Тұтынушы хост компьютерлері (IP мекен-жайлары)",
		admin_logging_debug_host_msg: "Қалпына келтіру ақпаратын тіркегіңіз келген бір немесе бірнеше тұтынушы компьютерлерінің ІР мекен-жайларын көрсетіңіз. IP мекен-жайларды ажырату үшін үтір таңбасын қолданыңыз.<br /><br /><b>Маңызды:</b> ІР мекен-жайын көрсетпестен бұрын веб бағдарлама серверінің журнал файлдарын шолыңыз. Сіз қамтамасыз ететін мән журналда көрсетілген мәнге сәйкес болуы тиіс.",
		admin_logging_debug_user: "Пайдаланушылар",
		admin_logging_debug_user_msg: "Қалпына келтіру ақпаратын тіркегіңіз келген бір немесе бірнеше тұтынушылардың пайдаланушы атын көрсетіңіз. Пайдаланушы аттарын ажырату үшін үтір таңбасын қолданыңыз.<br /><br /><b>Маңызды:</b> Пайдаланушы атын көрсетпестен бұрын веб бағдарлама серверінің журнал файлдарын шолыңыз. Сіз қамтамасыз ететін мән журналда көрсетілген мәнге сәйкес болуы тиіс.",

		admin_office_settings_logging_instructions: "Кіруді IBM Content Navigator for Microsoft Office бағдарламасымен бірге мәселелердің ақаулықтарын жою үшін қолдана аласыз. Егер мәселенің арнайы класс немесе арнайы пайдаланушы үшін пайда болғанын білсеңіз, логиніңізді нақтылаңыз. Қателік ақпараты IBM Content Navigator бағдарламасының Microsoft Office тұтынушы хост компьютерлеріндегі бағдарлама кіру файлдарына жазылған. ",
		admin_office_settings_logging_instructions2: "<b>Кіру параметрлерінің күйін келтіру</b><br />Егер мәселенің IBM Content Navigator for Microsoft Office пайдаланушы немесе тұтынушы хостының компьютерінде пайда болғанын білсеңіз, онда күйін келтіру логиніңізді сол компьютерге немесе пайдаланушыға мақсатты ете аласыз. Күйін келтіру ақпаратын жүйеге арнайы әсер етпей өнім ортаңыздан ала аласыз. <br /><br /><b>Маңызды:</b> Егер сіз тұтынушы зост компьютерін немесе пайдаланушыны көрсетсеңіз, осы параметр кез келген кіру параметрлерін қайта жазады. Қажет еткен ақпаратыңызды алғаннан кейін осы опцияны <b>Ешбір</b> түріне IBM Content Navigator for Microsoft Office ортаңыз үшін қалыпты кіруді шолу үшін енгізіңіз. ",
		admin_office_logging_debug_hover: "<b>Маңызды:</b> Тұтынушы хост компьютерінің ІР мекен-жайын немесе пайдаланушыны көрсетпестен бұрын тұтынушы компьютерінің журнал файлдарын шолыңыз. Сіз қамтамасыз ететін мән журналда көрсетілген мәнге сәйкес болуы тиіс. ",
		admin_office_logging: "Кеңсе Журналын түзу",
		admin_office_logging_classes: "Класс деңгейінің журналы:",
		admin_office_logging_classes_hover: "Әдепкі бойынша барлық класстар және бумалар IBM Content Navigator for Microsoft Office серверінің қателік журналдарында қамтылған. Алайда, журналыңыздан қай класстар немесе бумаларды кіргізу не шығару керек екенін көрсете аласыз. Тұтынушы компьютері журналдарын қай класстарды енгізіп немесе шығару керек екенін анықтау үшін қолдана аласыз.<br /><br />Егер мәселенің арнайы класста пайда болғанын білсеңіз, онда сол классты журнал файлдарында қамти аласыз. Классты қателік журналдарыңызда қамтысаңыз, басқа класстардың барлығы журнал файлдарынан шығарылады. <br /><br />Егер мәселенің класста пайда болмайтынын білсеңіз және журнал файлының өлшемін кішірейткіңіз келсе, онда сол классты журнал файлдарынан шығарыңыз. ",
		admin_office_logging_debug_hover: "<b>Маңызды:</b> Тұтынушы хост компьютерінің ІР мекен-жайын немесе пайдаланушыны көрсетпестен бұрын тұтынушы компьютерінің журнал файлдарын шолыңыз. Сіз қамтамасыз ететін мән журналда көрсетілген мәнге сәйкес болуы тиіс.",
		admin_office_logging_additional_settings: "Қосымша параметрлер:",
		admin_office_logging_additional_settings_hover: "Қосымша параметрлерді көрсетіңіз",
		admin_office_logging_file_size: "Журнал файлының өлшемі",
		admin_office_logging_file_size_hover: "IBM Content Navigator for Microsoft Office бағдарламасы жаңа журнал файлын құратын өлшемді көрсетіңіз. Журнал файлы ең үлкен өлшемде болғанда, ағымдағы журнал күнді (ЖЖЖЖААкк пішімінде) енгізу үшін аты өзгереді және файлдың арту саны (мысалы, ICNExcelAddin-20121116-5.log) және жаңа журнал файлы құрылады. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Тілқатысулардағы қабаттар жолын көрсету",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Мәселе шешімдерін жасау үшін хабарлама тілқатысуларындағы қабаттасу жолы ақпаратын міндетті емес түрде көрсете аласыз. Тіпті сіз бұл опцияны іске қоспасаңызы да, мәліметтелген қабаттасу жолы ақпараты әрдайым IBM Content Navigator for Microsoft Office қателік журналдарында қамтылады. ",

		admin_icon_state_twisty: "Белгілерді көрсету",
		admin_icon_state_icon: "Күй Белгішесі",
		admin_icon_state: "Күй",
		state_contains_label: "Күй қамтиды",
		admin_icon_state_instructions: "Құжаттар, қалталар және сіздің репозиторийіңіздегі жұмыс элементтерінде көрсетілген элементтерді теңшей аласыз.<br><br><b>Кеңес:</b> Күй белгілерін ортаңыздың әр бір репозиторийі үшін қай жерде көрсету керек екенін көрсете аласыз.",
		admin_icon_state_dialog_title: "Күй белгісінің салыстырмасы",
		admin_icon_state_dialog_instructions: "Веб тұтынушымен немесе тұтынушы белгісімен қамтамасыз етілгеналдын ала анықталғанэлементке таңдалған күйді салыстыра аласыз.",

		admin_icon_mapping_twisty: "MIME түрінің элементтері",
		admin_icon_mapping_dialog_title: "Элемент салыстырмасы",
		admin_icon_mapping: "Элемент салыстырмасы",
		admin_icon_mapping_instructions: "Веб тұтынушымен немесе тұтынушы белгісімен қамтамасыз етілген алдын ала анықталған элементке MIME түрлерінің тізімінсалыстыра аласыз.",
		admin_icon_mapping_list_instructions: "Сіздің репозиторийіңізде сақталған әр түрлі MIME түрлері үшін көрсетілген элементтерді теңшей аласыз. Веб тұтынушы элементтерді тізімделген рет бойынша қолданады. Егер MIME түрі бір реттен көп көрсетілсе, сол MIME түрімен байланысқан бірінші элемент қолданылады.",
		admin_icon_mapping_icon_label: "Қай элементті қолданғыңыз келеді?",
		admin_icon_mapping_file_name: "Тұтынушы элементі:",
		admin_icon_mapping_file_name_heading: "Тұтынушы элементі",
		admin_icon_mapping_file_name_placeholder: "Элементтің URL мекен-жайын көрсетіңіз",
		admin_icon_mapping_file_name_hover: "Элементтің URL мекен-жайын енгізіңіз. Егер элемент веб тұтынушысы секілді бірдей веб бағдарлама серверінде болса, қатысты URL мекен-жайын енгізіңіз. Мысалы: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Алдын ала анықталған элемент:",
		admin_icon_mapping_class_name_heading: "Алдын ала анықталған элемент",
		admin_icon_mapping_class_name_hover: "Веб тұтынушымен қамтамасыз етілген элементті таңдау.",
		admin_icon_mapping_class_name_placeholder: "Белгішені таңдау",

		admin_p8_instructions: "Бұл ақпарат веб тұтынушысына теңшелген барлық FileNet Content Manager репозиторийлері арқылы ортақ.",
		admin_p8_collaboration_config: "Міндетті емес FileNet Бірлескен Қызметтерінің Теңшелімі",
		admin_p8_collaboration_config_instructions: "Осы параметрлерді FileNet Collaboration қызметтерін өзіңіздің IBM FileNet P8 ортаңыз үшін қосқыңыз келсе теңшей аласыз.",
		admin_p8_use_url_incoming: "Кіру талаптарындағы URL мекен-жайды жауап URL мекен-жайларын жасау үшін қолданыңыз:",
		admin_p8_use_url_incoming_hover: "Көптеген FileNet Collaboration Services орталарында кіру талабының URL мекен-жайын жауапта URL мекен-жайын жасау үшін қолдана аласыз. <b>Иә</b> жауабын келесі жағдайлардың ортаңызға қабылдамайынша таңдаңыз:<ul><li>Тұтынушы бағдарламаларынFileNet Collaboration қызметтерін арнайы URL мекен-жайы арқылы қабылдамайынша күштегіңіз келеді.<li>Сіздің прокси сервер параметрлеріңіз FileNet Collaboration Services қызметін жарамсыз URL мекен-жайларын өндіруге себеп болады.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL мекен-жайы:",
		admin_p8_use_url_incoming_http_hover: "Тұтынушы бағдарламалары FileNet Collaboration Services қызметін келесі пішімде қабылдай алатындай етіп URL мекен-жайын көрсетіңіз http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL мекен-жайы:",
		admin_p8_use_url_incoming_https_hover: "Егер FileNet Collaboration Services қызметі SSL элементін қолдану үшін теңшелсе, Тұтынушы бағдарламалары FileNet Collaboration Services қызметін келесі пішімде қабылдай алатындай етіп HTTPS URL мекен-жайын көрсетіңіз https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Сервер жауаптарындағы пайдаланушы электрондық мекен-жайларын жасыру:",
		admin_p8_hide_email_addresses_hover: "Пайдаланушылардың электрондық мекен-жайларын сервер жауаптарында құпиялылық саясаттарымен сәйкес болуды қажет етсеңіз жасыра аласыз. Мысалы, пайдаланушылардың электрондық пошта мекен-жайларының тізімін сервер құжаттарды құрған немесе өзгерткен пайдаланушылар туралы құжаттар мен ақпараттар тізімін қайтарған кезде жасыра аласыз.",

		admin_p8_mask_user_ids: "Пайдаланушы идентификаторларын журнал файлдарында жасыру:",
		admin_p8_mask_user_ids_hover: "Пайдаланушы аттарын FileNet Collaboration Services журнал файлдарында құпиялылық саясатқа сай болуды қажет етсеңіз жасыра аласыз. Осы опцияны іске қосқан кезде, пайдаланушы аттары хэш аттарымен алмастырылған. Бұл сізді журнал файлдарын сыртқы ұйымдарға қамтамасыз ету үшін, сіздің пайдаланушылар аттары немесе белсенді жазбаларын бәсекелестірмей қолдау мақсаттарында іске қосады.",

		admin_p8_soft_delete: "Жойылған файлдарды себетке көшіру:",
		admin_p8_soft_delete_hover: "Пайдаланушылар элементтерді жойған кезде, элементтерлі репозиторийден жойғанша элементтерді себетке апарыңыз. Элементтер тазартылғанша себетте қалады. Егер мақсатты репозиторий себеттерге қолдау көрсетпейінше бұл параметр еленбейді.<br><br><b>Шектеу:</b> Себеттер IBM FileNet P8 бағдарламасының 5.2 немесе одан кейінгі нұсқаларында қолдауға ие болады және Social Collaboration Base Extensions қосылымын талап етеді.",

		admin_p8_download: "Мазмұнды Жүктеу HTTP Кэшінің Теңшелімі",
		admin_p8_download_instructions: "Егер сіздің IBM FileNet Content Manager репозиторийлеріңіз көптеген үлкен файлдарды қамтыса,Content Download HTTP Cache (CDHC) бағдарламасын FileNet Collaboration Services қызметін анықталған веб серверіне үлкен файлдар үшін мазмұн талаптарын қайта бағыттау үшін іске қосу үшін теңшей аласыз.<br/><br/>Бұл мүмкіндік IBM HTTP Server серверін талап етеді. Сонымен қатар, сіз IBM HTTP Server httpd.conf файлын жаңартуыңыз тиіс.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Content Download HTTP Cache (CDHC) бағдарламасын ортаңыздағы барлық IBM FileNet Content Manager репозиторийлері үшін іске қосқыңыз келгенде көрсетіңіз. Файлдар кэштелген жерде ең кіші файл өлшемін көрсете аласыз.",
		admin_p8_download_cache_folder: "Толық жарамды кэш каталогы:",
		admin_p8_download_cache_folder_hover: "Кэштелген файлдарды сақтағыңыз келген каталогтың толық жарамды жолын көрсетііңіз. Каталог кез келген амалдық жүйеде немесе құралда болуы мүмкін, мысалы ортақ желі каталогы, ол FileNet Collaboration Services және IBM HTTP Server бағдарламаларына файл жүйесі ретінде барынша көрнекі болады.",
		admin_p8_download_cache_url: "Кэш орналасымына арналған лақап аттар:",
		admin_p8_download_cache_url_hover: "FileNet Collaboration Services URL мекен-жайынан кэштелген каталогқа меңзеу үшін қолданылатын лақап аттарды көрсетіңіз. /alias сияқты пішімдегі лақап аттарды көрсетіңіз, мысалы /cdhc.<br/><br/>/cdhc түрі URL мекен-жайында қамтылған кезде, бағдарлама толық жарамды кэш каталогына қайта бағытталады.",
		admin_p8_download_cache_max_files: "Кэштелген файлдардың ең көп саны:",
		admin_p8_download_cache_max_files_hover: "Файлдардың ең үлкен санына жеткен кезде, ең ескі файл кэштен жойылады.<br><br>Кэшке және кэштің ең көп санына арналған ең көп файлдарды көрсетсеңіз, ең ескі файл екі жағдайлардың төменгісі кездескен кезде кэштен жойылады.",
		admin_p8_download_cache_max_size: "Ең үлкен кэш өлшемі (ҰБ):",
		admin_p8_download_cache_max_size_hover: "Файлдардың ең үлкен кэш өлшеміне жеткен кезде, ең ескі файл кэштен жойылады.<br/><br/>Кэшке және кэштің ең көп санына арналған ең көп файлдарды көрсетсеңіз, ең ескі файл екі жағдайлардың төменгісі кездескен кезде кэштен жойылады.",
		admin_p8_download_cache_cleanup_duration: "Максималды тазалау уақыты (секундта):",
		admin_p8_download_cache_cleanup_duration_hover: "Тазалау әрекеті ала алатын уақыттың ең үлкен көлемін көрсетіңіз. Әдепкі ұзақтық 5 секунд.<br><br>Жою нысаны болып табылатын кез келген файлдар тазалау әрекетінен кейін кэште сақталатын болса, онда ол келешектегі тазалау әрекетінде жойылады.",
		admin_p8_download_cache_cleanup_min: "Кэшті тазалау әрекеттері арасындағы ең аз интервал (секундта):",
		admin_p8_download_cache_cleanup_min_hover: "Кэшті тазалау әрекеттері арасында өту керек ең аз уақытты көрсетіңіз. Әдепкі уақыт – 3600 секунд (1 сағат).<br><br>Кэштен мазмұнды жүктеп алу белсенді сұрау болса ғана кэшті тазалау әрекеттері туындайды. Сұраулар әрбір минутта туындайтын болса, тазалау әрекеті әрбір сағатта туындайды. Дегенмен, сұрауларды жүктеп алу арасында үш сағат өтетін болса, тазалау әрекетті келесі жүктеп алу сұрау алынғанша туындамайды.",
		admin_p8_download_cache_min_lifetime: "Кэштегі ең аз уақыт (секундта):",
		admin_p8_download_cache_min_lifetime_hover: "Жойылмас бұрын, файлдың кэште сақталуының ең аз уақыт өлшемін көрсетіңіз. Әдепкі уақыт – 3600 секунд (1 сағат).<br><br>Егер кэш ең үлкен көлемге жетсе де немесе файлдардың ең көп санын қамтыса, файл көрсетілген уақыт өлшемінің кэшінде болған кезде, кэштегі ескі файлды жою мүмкін емес.",
		admin_p8_download_cache_size_threshold: "Кэштеуге арналған ең кіші файл өлшемі (Кб):",
		admin_p8_download_cache_size_threshold_hover: "CDHC элементі файлдарды кэштеу үшін қолданылуы тиіс ең кіші өлшемді көрсетіңіз. Егер файл көрсетілген өлшемнен кіші болса, онда файл FileNet Collaboration Services бағдарламасы орналасқан веб бағдарламасы арқылы қайта бағытталуы тиіс. Әдепкі өлшем 1,000 KB.",
		admin_p8_download_guard_header: "Шлюзді сақтауға арналған HTTP тақырыбы:",
		admin_p8_download_guard_header_hover: "Егер тұтынушы бағдарламасы сұрауды IBM HTTP Server сервері арқылы тасымалдамаса, кэштелген мазмұн жүктелмейді. Оны кіріс сұраулары ретінде арнайыHTTP тақырыбымен (IBM HTTP Server серверінен талапқа қосылған) кэштелген мазмұнды жүктеу сәтсіздіктерін болдырмас үшін көрсете аласыз.<br><br>HTTP тақырыбы IBM HTTP Server серверінде теңшелген және IBM HTTP Server сервері арқылы тасымалданған барлық кіріс талаптарында болады. Егер сұрау HTTP тақырыбын иеленбесе, мазмұн IBM HTTP серверінен гөрі веб бағдарлама сервері арқылы тасымалданған.",
		admin_p8_download_generate_config: "Теңшелімді жасау",
		admin_p8_download_generate_config_label: "IBM HTTP Server теңшелімі:",
		admin_p8_download_generate_config_label_hover: "CHDC теңшеліміне жұмыс істеу үшін IBM HTTP Server httpd.conf файлын теңшеуіңіз керек. httpd.conf файлына қосылуы тиіс нұсқаулықтарды жасау үшін Теңшелімді жасау түрін басыңыз.",

		admin_logging_viewone_pro: "ViewONE Professional деңгейінің кіруі:",
		admin_logging_viewone_virtual: "ViewONE Virtual деңгейінің кіруі:",
		admin_logging_viewone_streamer: "Document Streaming Server Module деңгейінің кіруі:",
		admin_logging_viewone_streamer_hover: "Егер әкімші құралдың <b>Daeja ViewONE</b> бөліміндегі PDF немесе TIFF файлдары үшін ағынмен тасымалдауды іске қоссаңыз ғана, Document Streaming Server Module деңгейінің кіру опциясы жарамды болады.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module деңгейінің кіруі:",
		admin_logging_viewone_redaction_hover: "Егер Daeja ViewONE Professional Redaction модулін қолдану үшін құқығы болса, Permanent Redaction Server Module кіру опциясы жарамды болады.",

		admin_daeja_viewonepro: "Кәсіби",
		admin_daeja_viewonepro_stream_pdf_documents: "Ағын PDF файлдары:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Егер репозиторийде үлкен PDF құжаттары болса, осы құжаттарды көруге пайдаланушыларға тезірек жасау үшін, құжат мазмұнын көрсету үшін қарап шығу құралын іске қоса аласыз. Дегенмен, егер тасымалдау ортаңызда жұмыс істемесе, тасымалдауды ажыратыңыз.",
		admin_daeja_viewonepro_stream_tiff_documents: "Ағын TIFF файлдары:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Егер репозиторийде үлкен TIFF құжаттары болса, осы құжаттарды көруге пайдаланушыларға тезірек жасау үшін, құжат мазмұнын тасымалдау үшін қарап шығу құралын іске қоса аласыз. Дегенмен, егер тасымалдау ортаңызда жұмыс істемесе, тасымалдауды ажыратыңыз.",
		admin_daeja_viewonepro_show_file_buttons: "Файл Түймешіктері",
		admin_daeja_viewonepro_show_file_menus: "Файл мәзірлері",
		admin_daeja_viewonepro_enable_file_keys: "Файлдың жылдамдату пернесі",
		admin_daeja_viewonepro_file_keys_hover_help: "Файлдармен жұмыс жасау үшін пайдаланушылардың пернетақта лақаптарын қолдануды қалайтыныңызды көрсетіңіз, мысалы, файлды ашу немесе сақтау. Көрсетілген жылдамдату пернесі туралы көбірек мәліметті, IBM Daeja ViewONE Параметрлер Сілтемесінің Қолмен қолдануындағы файлдар Кілтін қараңыз.",
		admin_daeja_viewonepro_show_print_buttons: "Басып шығару түймешіктері",
		admin_daeja_viewonepro_show_print_menus: "Басып шығару мәзірлері",
		admin_daeja_viewonepro_enable_print_keys: "Басып шығару жылдамдату пернесі",
		admin_daeja_viewonepro_print_keys_hover_help: "Файлдарды басып шығару үшін пайдаланушылардың пернетақта лақаптарын қолдануды қалайтыныңызды көрсетіңіз, мысалы, бетті басып шығарыңыз немесе құжатты басып шығарыңыз. Көрсетілген жылдамдату пернесі туралы көбірек мәліметті, IBM Daeja ViewONE Параметрлер Сілтемесінің Қолмен қолдануындағы Басып шығару параметрінің сипаттамасынан қараңыз.",
		admin_daeja_viewonepro_show_invert_buttons: "Оралту түймешіктері",
		admin_daeja_viewonepro_annotation_tooltip: "Әдепкі өзгертпелі аңдатпаның қалқыма сөзкөмегі:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Өзгертпелі аңдатпа үшін ешқандай қалқыма сөзкөмегі көрсетілмеген кезде, көрсету үшін мәтінді енгізіңіз. Мәтіннің құрамында орын ауыстыратын таңбалаушылары болады. Мысалы, &quot;&lt;жасаушы&gt; мына аннотацияны жасады: &lt;createdateonly&gt;.&quot; Ауыстыруға болатын белгілер туралы қосымша ақпаратты IBM Daeja ViewONE параметрлердің сілтемелік материалдарындағы customAnnotationsToolTip параметрінен көріңіз.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Алын ала анықталған теңшелмелі қалқымалы сөзкөмекті қолданыңыз",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Жүйе анықталған төменде көрсетілген теңшелмелі қалқымалы сөзкөмекті қолданыңыз",
		admin_daeja_viewonepro_help_url: "Анықтаманың URL мекен-жайы:",
		admin_daeja_viewonepro_help_url_hover_help: "Қарап шығу құралы үшін көмек құжаттамасын қамтитын желі бетінің URL мекен-жайы. Қарап шығу құралының тақтасындағы көмек түймешігі және көмек мәзірінің әрекеті, желі бетін ашады. Егер URL мекен-жайын көрсетпеген болсаңыз, көмек түймешігі және мәзір әрекеті көрсетілмейді.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Сурет штампының ресурс мазмұны:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Қолданылмайтын мазмұнды, шолғышқа жолдау:",
		admin_daeja_viewonepro_route_docs_hover_help: "Пайдаланушылар файлды көру үшін тиісті бағдарламаны ашатын шолғышқа оларды бағыттау арқылы, қолданылмайтын кескін файлдарын көре алады. Мысалы, Microsoft Word құжатын ашу үшін, шолғыш Microsoft Word қарап шығу құралын қолданады.",
		admin_daeja_viewonepro_scale: "Өзіріктеу кескіні:",
		admin_daeja_viewonepro_scale_best: "Ең қолайлы сәйкестендіру",
		admin_daeja_viewonepro_scale_ftow: "Еніне сәйкестендіру",
		admin_daeja_viewonepro_scale_ftoh: "Биіктігіне сәйкестендіру",
		admin_daeja_viewonepro_enable_hotkeys: "Жылдамдату пернелерін іске қосу:",
		admin_daeja_viewonepro_show_features: "Түймешіктер мен мәзірлерді көру:",
		admin_daeja_custom_settings: "Қосымша параметрлер:",
		admin_daeja_custom_settings_hover_help: "Параметр атын және мәнін көрсету арқылы, басқа параметрлерді қоса аласыз. Мысалы, &quot;scrollbars&quot; және &quot;true&quot; мәндерін кескін аймағы дисплей ауқымынан үлкен болған кезде жылжу жолақтарын көрінетін еткіңіз келген кезде көрсете аласыз. Параметрлердің аты мен мәндері туралы көбірек мәліметті, IBM Daeja ViewONE Параметрлер Сілтемесінің Қолмен қолдануынан қараңыз.",
		admin_daeja_virtual: "Виртуалды",
		admin_daeja_virtual_annotation_tooltip: "Әдепкі өзгертпелі аңдатпаның қалқыма сөзкөмегі:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Өзгертпелі аңдатпа үшін ешқандай қалқыма сөзкөмегі көрсетілмеген кезде, көрсету үшін мәтінді енгізіңіз. Мәтіннің құрамында орын ауыстыратын таңбалаушылары болады. Мысалы, &quot;&lt;жасаушы&gt; мына аннотацияны жасады: &lt;createdateonly&gt;.&quot; Ауыстыруға болатын белгілер туралы қосымша ақпаратты IBM Daeja ViewONE параметрлердің сілтемелік материалдарындағы customAnnotationsToolTip параметрінен көріңіз.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Алын ала анықталған теңшелмелі қалқымалы сөзкөмекті қолданыңыз",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Жүйе анықталған төменде көрсетілген теңшелмелі қалқымалы сөзкөмекті қолданыңыз",
		admin_daeja_virtual_image_stamp_resource_context: "Сурет штампының ресурс мазмұны:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Лицензия файлдарының жолы:",
		admin_daeja_virtual_license_path_hover_help:"Lic-server-virtual.v1 және lic-server.v1 лицензия файлдары бар каталогтың толығымен жарамды жолын көрсетіңіз. ",
		admin_default_license_path:"Әдепкі лицензия файлдарының жолын пайдаланыңыз",
		admin_license_path_specified:"Тұтыну лицензия файлдарының жолын пайдаланыңыз",

		admin_daeja_streamer: "Сервер",
		admin_daeja_streamer_cache_root: "Кэш каталогы:",
		admin_daeja_streamer_cache_root_hover_help: "Тезірек қатынасу үшін, қайда кэштелген файлдарды сақтауды қалайтыныңызды, каталогтың толық жарамды жолында көрсетіңіз. Желі Каталог желі каталогы сияқты кез келген амалдық жүйеде немесе құралда болуы мүмкін, егер ол BM Content Navigator және IBM HTTP Серверіне файл жүйесі сияқты барынша көрнекі болады. Жергілікті каталогты, өнімділікті жетілдіру үшін қолданыңыз.",
		admin_daeja_streamer_settings: "Қосымша параметрлер:",
		admin_daeja_streamer_settings_hover_help: "Параметр атын және мәнін көрсету арқылы, басқа параметрлерді қоса аласыз. Мысалы, “cookieAllowedDomainList” және хост серверлерінің бөлгіш үтірінің тізімін көрсете аласыз.  Параметрлердің аты мен мәндері туралы көбірек мәліметті, IBM Daeja ViewONE Параметрлер Сілтемесінің Қолмен қолдануынан қараңыз.",

		admin_daeja_redaction: "Тұрақты редакция",
		admin_daeja_redaction_settings: "Параметрлер:",
		admin_daeja_redaction_settings_hover_help: "Параметр атын және мәнін көрсету арқылы, басқа параметрлерді қоса аласыз. Мысалы, “burnIncrementalAnnotations” және”дұрысты” көрсете аласыз. Параметрлердің аты мен мәндері туралы көбірек мәліметті, IBM Daeja ViewONE Параметрлер Сілтемесінің Қолмен қолдануынан қараңыз.",

		admin_daeja_setting_dialog_title_new: "Жаңа параметр",
		admin_daeja_setting_dialog_title_edit: "Өңдеу параметрі",
		admin_daeja_setting_dialog_hover_help: "Параметр атын және мәнін көрсету арқылы басқа параметрлерді қосыңыз. Мысалы, егер көрсету аумағына қарағанда үлкен көлемге кескін кеңейтілген кезде, айналым жолақтарының көрсетілгенін қаласаңыз, “айналым жолақтарын” және “дұрысты” көрсетуіңіз керек.",
		admin_daeja_setting_dialog_field_hover_help: "Параметр аттары мен мәндері туралы көбірек мәліметті, Daeja ViewONE Параметр Сілтемесінің Қолмен қолдануынан қараңыз.",

		admin_daeja_logging: "Daeja ViewONE Журналын жүргізу",
		admin_daeja_logging_trace: "Трассирлеу журналын іске қосу",
		admin_daeja_logging_trace_net: "Желі кіруін іске қосу",
		admin_daeja_logging_trace_annotations: "Аңғартпалар кіруін іске қосу",
		admin_daeja_logging_log_file: "Журнал файлы:",
		admin_daeja_logging_instructions: "Кіруді, Daeja ViewONE Professional және Daeja ViewONE Virtual құралдарындағы ақауларды жою үшін қолдана аласыз. Егер мәселенің көрсетілген мүмкіндікте пайда болғанын білсеңіз, онда кіруді сол мүмкіндікке мақсаттық ете аласыз.",

		admin_v1pro_logging_trace_hover: "Бұл параметрді, қарап шығу құралымен жалпы мәселелердің ақауларын жою үшін қолданыңыз.<br><br>Жұрнал жүргізу мәліметі, клиенттің компьютеріндегі Java консолінде жазылады. Java консоліне, операциялық жүйенің Басқару тақтасынан (Windows) немесе Жүйенің Параметрлерінен (Mac) қатынаса аласыз.",
		admin_v1pro_logging_trace_net_hover: "Бұл параметрлерді, келесі мәселелердің ақауларын жою үшін қолданыңыз:<ul><li>Сервердің қосылымымен мәселелері</li><li>MIME түрлерімен мәселелер</li><li>Тым ұзын болатын файлдардың мәселелері</li></ul>Қосымша, желі жолының кіруін, Daeja ViewONE Professional құралын қолданатын кезде, қай жерден кідірістер пайда болғанын анықтау үшін қолданыңыз.<br><br>Жұрнал жүргізу мәліметі, клиенттің компьютеріндегі Java консолінде жазылады. Java консоліне, операциялық жүйенің Басқару тақтасынан (Windows) немесе Жүйенің Параметрлерінен (Mac) қатынаса аласыз.",
		admin_v1pro_logging_trace_annotations_hover: "Бұл параметрді, аңғартпаларды құру, сақту немесе жүктеу мәселелерінің ақауын жою үшін қолданыңыз.<br><br>Жұрнал жүргізу мәліметі, клиенттің компьютеріндегі Java консолінде жазылады. Java консоліне, операциялық жүйенің Басқару тақтасынан (Windows) немесе Жүйенің Параметрлерінен (Mac) қатынаса аласыз.",

		admin_virtual_logging_trace_hover: "Бұл параметрді, қарап шығу құралымен жалпы мәселелердің ақауларын жою үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатым каталогы теңшелімінің ішкі каталогындағы virtual.log файлында жазылады.",
		admin_virtual_logging_trace_net_hover: "Бұл параметрлерді, келесі мәселелердің ақауларын жою үшін қолданыңыз:<ul><li>Сервердің қосылымымен мәселелері</li><li>MIME түрлерімен мәселелер</li><li>Тым ұзын болатын файлдардың мәселелері</li></ul>Қосымша, желі жолының кіруін, Daeja ViewONE Virtual құралын қолданатын кезде, қайдан кідірістер пайда болатынын анықтау үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатым каталогы теңшелімінің ішкі каталогындағы virtual.log файлында жазылады.",
		admin_virtual_logging_trace_annotations_hover: "Бұл параметрді, аңғартпаларды құру, сақту немесе жүктеу мәселелерінің ақауын жою үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатым каталогы теңшелімінің ішкі каталогындағы virtual.log файлында жазылады.",
		admin_virtual_logging_log_file_hover: "Егер қарап шығу құралы үшін кіруді іске қосқан болсаңыз, толық жарамды жолды және кіру мәліметін сақтағыңыз келген жердің кіру файлының атын көрсетуіңіз керек.  Бұл virtual.log кіру файлын атағаныңызды ұсынады.",

		admin_streamer_logging_trace_hover: "Бұл параметрді, Document Streaming Server Module құралындағы жалпы мәселелердің ақауын жою үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатылым каталогының теңшелім ішкі каталогындағы streamer.log файлына жазылады.",
		admin_streamer_logging_trace_net_hover: "Бұл параметрлерді, келесі мәселелердің ақауларын жою үшін қолданыңыз:<ul><li>Сервердің қосылымымен мәселелері</li><li>Көрсетілген MIME түрімен мәселелер</li><li>Тым ұзын болатын файлдардың мәселелері</li></ul>Қосымша, желі жолының жұрнал жүргізуін, Document Streaming Server Module құралын қолданатын кезде кідірістер қайда пайда болатынын анықтау үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатылым каталогының теңшелім ішкі каталогындағы streamer.log файлына жазылады.",
		admin_streamer_logging_log_file_hover: "Егер Document Streaming Server Module қызметі үшін кіруді іске қосқан болсаңыз, толық жарамды жолды және кіру мәліметін сақтағыңыз келген жердің кіру файлының атын көрсетуіңіз керек.  Бұл streamer.log кіру файлын атағаныңызды ұсынады.",

		admin_redaction_logging_trace_hover: "Бұл параметрді, Permanent Redaction Server Module құралымен жалпы мәселелердің ақауын жою үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатылымының каталогы теңшелімінің ішкі каталогындағы redacttofile.log файлына жазылады.",
		admin_redaction_logging_trace_net_hover: "Бұл параметрлерді, келесі мәселелердің ақауларын жою үшін қолданыңыз:<ul><li>Сервердің қосылымымен мәселелері</li><li>Көрсетілген MIME түрімен мәселелер</li><li>Тым ұзын болатын файлдардың мәселелері</li></ul>Қосымша, желі жолының жұрнал жүргізуін, Permanent Redaction Server Module құралын қолдану кезінде кідірістің қайда пайда болатынын анықтау үшін қолданыңыз.<br><br>Әдепкіде, жұрнал жүргізу мәліметі, IBM Content Navigator орнатылымының каталогы теңшелімінің ішкі каталогындағы redacttofile.log файлына жазылады.",
		admin_redaction_logging_log_file_hover: "Егер Permanent Redaction Server Module қызметі үшін кіруді іске қосқан болсаңыз, толық жарамды жолды және кіру мәліметін сақтағыңыз келген жердің кіру файлының атын көрсетуіңіз керек.  Бұл redacttofile.log кіру файлын атағаныңызды ұсынады.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Қарап шығу құралдары мен қызметтеріне мүмкіндіктерді теңшеңіз.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Егер сіз веб тұтынушысын бір немесе бірнеше Content Manager OnDemand репозиторийлеріңізге қосылу үшін қолдансаңыз, OnDemand Web Enablement Kit бағдарламасы дұрыс әрекет ету үшін талап ететін ақпаратты көрсетуіңіз керек. Бұл ақпарат веб тұтынушысына теңшелген барлық Content Manager OnDemand репозиторийлері арқылы ортақ.",
		admin_ondemand_language: "Тіл:",
		admin_ondemand_tempdir: "ODWEK үлгі каталогы:",
		admin_ondemand_tracegrp: "ODWEK белгілеу",
		admin_ondemand_tracedir: "Белгілеу каталогы:",
		admin_ondemand_tracelevel: "Белгілеу деңгейі:",
		admin_ondemand_tracelevel_0: "0 - Кіру жоқ",
		admin_ondemand_tracelevel_1: "1 - Қателік хабарламасын тіркеу",
		admin_ondemand_tracelevel_2: "2 - Қателік және ескерту хабарламасын тіркеу",
		admin_ondemand_tracelevel_3: "3 - Қателік, ескерту және ақпарат хабарламасын тіркеу",
		admin_ondemand_tracelevel_4: "4 - Барлық хабарламалар алында, сонымен қатар функция тіркеуі",
		admin_ondemand_max_trace_filesize: "Ең үлкен тасымалдау файлының өлшемі:",
		admin_ondemand_max_trace_filesize_unlimited: "Шектелмеген",
		admin_ondemand_max_trace_filesize_limited: "Шектелген (Ұсынылады)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Бұл мән ауқымнан тыс. Мән 1 және 1,000,000 арасындағы бүтін сан болу керек.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF орнатылым каталогы:",
		admin_ondemand_language_hover: "ODWEK қызметі хабарламаларды қайтаратын тілді көрсетіңіз.",
		admin_ondemand_tempdir_hover: "OnDemand Web Enablement Kit қызметі уақытша файлдарды орындау кезінде сақтайтын каталогты енгізіңіз. Веб бағдарламасы серверіндегі бар каталогтың толық жарамды жолын енгізуіңіз керек.",
		admin_ondemand_tracedir_hover: "ODWEK тасымал arswww.trace файлын сақтағыңыз келген каталогты енгізіңіз. Веб бағдарламасы серверіндегі бар каталогтың толық жарамды жолын енгізуіңіз керек.",
		admin_ondemand_tracelevel_hover: "arswww.trace файлына жазылған кіру ақпаратының деңгейін көрсетіңіз. <b>Хабарламаны тіркеу қатесі</b> параметрі тіркеу ақпаратының оңғы ауқымын алады. <b>Барлық хабарламалар алынды, сонымен қатар қызмет жолы да алынды</b> көп ақпаратты қамтиды.<br /><br /><b>Барлық хабарламалар алынды, қызмет жолын қосқанда</b> параметрін өнім ортасында IBM Software Support бағдарламасы арқылы орындау үшін нұсқау алғанша көрсетпеңіз.",
		admin_ondemand_max_trace_filesize_hover: "ODWEK трассалау файлын шексіз өлшемге жеткеніне рұқсат бергіңіз келеді ме, әлде веб тұтынушының тіркеу файлы белгілі бір өлшемге жеткенде жаңа журналды құруын қалайтыныңызды көрсетіңіз. Әдепкі тіркеу файлына веб тұтынушы веб бағдарлама серверінде тоқтағанға дейін трассирлей тіркеу файлына ұлғаюға рұқсат береді.",
		admin_ondemand_max_trace_unlimited_hover: "Осы опцияны ODWEK трассирлеу ақпараты жалғыз тіркеу файлына жазылуын қаласаңыз көрсетіңіз. Егер осы опцияны таңдасаңыз, қалыпты файлды қарау құралымен бірге ашу үшін тым үлкен болатын тіркеу файлын иеленуіңіз мүмкін.",
		admin_ondemand_max_trace_limited_hover: "Осы опцияны ODWEK трассирлеу ақпараты кішірек журнал файлдарына жазылуын қаласаңыз таңдаңыз. Журнал файлы ең үлкен өлшемде болғанда, ағымдағы журнал күні (arswww.trace.YYYYMMDD.HHMMSS) және жаңа журнал файлы құрылады.",
		admin_ondemand_afp2pdf_installdir_hover: "AFP2PDF Transform қызметтік бағдарламасын AFP құжаттарын PDF құжаттарына қарау және басып шығару үшін түрлендіруді қаласаңыз, AFP2PDF Transform қызметтік бағдарламасы веб бағдарлама серверінде орнатылған каталогты көрсетіңіз. Мысалы: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Әкімшілер",
		admin_adminusers_heading_text_multi: "Қай пайдаланушылардың веб тұтынушыда әкімші артықшылықтарын иеленуіңіз керек екенін көрсетуіңіз қажет. Әкімші жұмыс үстеліне тек әкімшілер ғана тіркелуі тиіс.<br /><br /><b>Маңызды:</b> IBM Content Navigator әкімшіліктерінің пайдаланушы идентификаторла ры салыстыруы тиіс:<ul><li>Сіздің веб бағдарлама серверіңіздегі бар пайдаланушы идентификаторлары. Пайдаланушы идентификаторлары веб бағдарламасы серверіндегі әкімшілер болуы тиіс.</li><li>Әкімші мүмкіндігін иеленетін әр бір жұмыс үстеліне арналып теңшелген әдепкі репозиторийдегі бар пайдаланушы идентификаторлары.</li></ul>",
		admin_adminusers_heading_text_single: "Қай пайдаланушылардың веб тұтынушыда әкімші артықшылықтарын иеленуіңіз керек екенін көрсетуіңіз қажет. Әкімші жұмыс үстеліне тек әкімшілер ғана тіркелуі тиіс.<br /><br /><b>Маңызды:</b> IBM Content Navigator әкімшіліктерінің пайдаланушы сіздің веб бағдарлама серверіңіздегі бар пайдаланушы идентификаторларын салыстыруы тиіс. Пайдаланушы идентификаторлары веб бағдарламасы серверіндегі әкімшілер болуы тиіс.",
		admin_adminusers_newuser: "Жаңа әкімші:",
		admin_adminusers_add: "Қосу",
		admin_adminusers_remove: "Жою",
		admin_adminusers_listheading: "Әкімшілер",
		admin_adminusers_nameInvalid: "Мән көшірме болуы мүмкін емес.",

		admin_sync_server_instructions: "<b>FileNet P8 пайдаланушылар ғана:</b> Егер бір немесе бірнеше репозиторийлерге синхрондау қызметін іске қосқыңыз келсе, синхрондау қызметін қолдану үшін желі клиентін теңшеуіңіз керек. Синхрондау қызметінің теңшелімі, ортаңыздағы барлық репозиторийлер арқылы бөлінеді.",
		admin_settings_instructions: "Параметрлер қойындысындағы мәндер сіздің теңшеліміңіздегі барлық жұмыс үстелдеріне қабылдануы тиіс.",
		admin_autocomplete: "Пайдаланушы аттарын автоматты түрде жасаңыз:",
		admin_autocomplete_hover: "Тіркелу кезінде веб тұтынушыдағы пайдаланушы аттарын автоматты түрде жасау үшін шолғышты қосуда шолғыш кукиіндегі пайдаланушы аттарын сақтау үшін веб тұтынушысын қалайтыныңызды көрсетіңіз.<br><br>Егер осы опцияны іске қоссаңыз, соңғы пайдаланушының пайдаланушы аты веб тұтынушысында тіркелу үшін шолғыш кукилерінде сақталады және пайдаланушы веб тұтынушыны ашқан кезде Тіркеу бетінде автоматты түрде көрсетіледі.<br><br>Осы опцияны егер бағдарлама ортақ жұмыс орындарынан қабылданған болса немесе пайдаланушы аттарын шолғыш кукилерінде сақтау туралы ақпарат алған болсаңыз ажыратуыңыз керек.<br /><br />Бұл опция мобильді немесе тұтынушы бағдарламаларына қабылданбайды.",
		admin_autocomplete_enable: "Іске қосу",
		admin_autocomplete_disable: "Ажырату",
		admin_cultural_collation: "Арнайы тіл сұрыптауын қолданыңыз:",
		admin_cultural_collation_hover: "Егер арнайы тіл сұрыпатауын іске қоссаңыз, сұрыптау репозиторий серверінде орындалады. Бұл веб тұтынушының көрсетілімін кішірейтеді.<br><br>Арнайы тілдік сұрыптауды ажырату веб тұтынушының теңшелімін жақсартады.",
		admin_cultural_collation_enable: "Іске қосу",
		admin_cultural_collation_disable: "Ажырату",
		admin_base_ui_style: "Тақырып мәнері",
		admin_base_ui_style_hover: "Веб-клиент ішінде қолданылатын әдепкі тақырыптың мәнерін ерекшелеңіз. Бұл мәнер <b>Әдепкі</b> тақырыпқа (экран конфигурациясы <b>Көрініс</b> қойындысы ретінде ерекшеленген) қолданылатын экрандарға ғана қолданылады.<br/></br><b>Шектеу:</b> Егер экран конфигурациялары таңдалған мәнерді ескерместен теңшелетін тақырыптары қолданатын болса, теңшелетін тақырыптар классикалық мәнерге негізделеді.",
		admin_base_ui_style_classic: "Классикалық",
		admin_access_control_access: "Арнайы пайдаланушылар мен топтарға арналған шектеу қатынасы",
		admin_access_control_access_show: "Қатынас бақылау дерегін көрсету",
		admin_access_control_access_enable: "Иә",
		admin_access_control_access_disable: "Жоқ",
		admin_mobile_access: "Мобильді бағдарламалармен қатынасуға рұқсат беру",
		admin_mobile_access_hover: "Әдепкі бойынша пайдаланушылар веб тұтынушысын IBM Content Navigator iOS бағдарламасынан қабылдай алады.<br /><br /><b>Маңызды:</b> Егер пайдаланушыларды iOS бағдарламасынан веб тұтынушыны қабылдаудың алдын алсаңыз, пайдаланушылар әлі де веб тұтынушысын веб шолғыштардан олардың мобильді құралдарында қабылдай алады және IBM Content Navigator APIs бағдарламасын қолдану арқылы жазылған кез келген тұтынушы бағдарламаларынан қабылдап және мобильді құралдарда қолдана алады.",
		admin_mobile_access_enable: "Иә",
		admin_mobile_access_disable: "Жоқ",
		admin_error: "Қателік хабарламасы ақпараты:",
		admin_error_custom: "Тұтынушы қолдау мазмұнын іздеу",
		admin_error_default: "IBM Support мазмұнын іздеу <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Пайдаланушылар қателік хабарламасын алған кезде қосымша ақпарат үшін қайда бағыттайтыныңызды көрсетіңіз. Пайдаланушыларды ақпарат үшін IBM Support Portal серверіне жібере аласыз немесе пайдаланушыларды ішкі ресурстарға, мысалы көмекші тақтаға жібере аласыз.",
		admin_error_URL: "URL мекен-жайы префиксі:",
		admin_error_URL_hover: "Ресурстың URL мекен-жайын пайдаланушылар қетелік хабарламасын алған кезде көмекші тақтасы сияқты жерге бағыттау үшін енгізіңіз. Мысалы: http://localhost:port_number. Веб тұтынушы хабарламалар санын URL мекен-жайына қабылдайды.",
		admin_prompt_close_without_save: "Өзгертулеріңізді сақтамай жапқыңыз келеді ме?",
		admin_object_expiration_time: "Кэшті жаңарту интервалы (минутпен):",
		admin_object_expiration_time_hover: "Жұмыс үстелдері сияқты веб тұтынушының теңшелімін жетілдіру үшін кэште сақталған теңшеу нысандарының уақыт көлемін ұлғайта аласыз. Әдепкі уақыт 10 минут. Ең көп уақыт 1440 минут (1 күн).<br /><br />Өзгертулеріңіз нәтиже алу үшін веб бағдарламаңызды қайта бастауыңыз тиіс.<br /><br />Егер IBM Content Navigator бағдарламасы жоғары қол жетімді кластерленген ортада орналастырылса, теңшелім нысандарына жасалған кез келген өзгертулер кэш жаңартылғанша таралмайды.",
		admin_temp_file_cleanup_interval: "Қарау құралы жадын тазалау үшін тексеру интервалы (сағатпен):",
		admin_temp_file_cleanup_interval_hover: "Уақытша каталог мерзімі шыққан уақытша файлдарды табу және жою үшін тексеру жиілігін жоспарлаңыз. Әдепкі бойынша, уақытша каталог әрбір алты сағат сайын тексерледі. 6-48 сағат арасын ерекшелей аласыз.",
		admin_temp_file_expiration_interval: "Қарау құралы жады мерзімі өтуі (сағатпен):",
		admin_temp_file_expiration_interval_hover: "Шолушы жады ішінде қарау құралында әрекеттерге байланысты уақытша файлдар сақтау уақытын анықтаңыз. Әдепкі бойынша, бұл уақытша файлдар мерзімі 24 сағаттан кейін өтеді. 12-48 сағат арасын ерекшелей аласыз.",
		admin_encryption_key_hover: "Кілт, Навигатордың шифрлау функциялары үшін қолданылды.",
		admin_encryption_key: "Шифрлау кілті:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Жарнама",
		admin_mobile_branding_main_color: "Негізгі түс:",
		admin_mobile_branding_secondary_color: "Екінші түс:",
		admin_mobile_device_title: "MaaS360 басқармасы",
		admin_mobile_device_enable_maas360: "MaaS360 іске қосу:",
		admin_mobile_device_enable_maas360_hover_help: "MaaS360 көрсеткішті апаруды іске қосу келесіге өтуге көмек береді",
		admin_mobile_device_maas360_developer_id: "MaaS360 әзірлеуші идентификатор:",
		admin_mobile_device_maas360_license_key: "MaaS360 лицензия кілті:",
		admin_mobile_settings_title: "Параметрлер",
		admin_mobile_email_address_hover_help: "Электрондық пошта мекен-жайы ұшқыр бағдарламада пайдаланушы келесіні басқан кезде қолданылады \"Қателік есебін жіберу.\"",
		admin_mobile_email_address: "Электрондық пошта мекен-жайы:",
		admin_invalid_email_address_message: "Сіз енгізген электрондық мекен-жай дұрыс пішімде емес. Дұрыс мекен-жайды енгізіп және қайтадан әрекет етіп көріңіз.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Кейбір деректер жарамсыз.",
		admin_configuration_parameters: "Теңшеу параметрлері",
		admin_configuration_optional_features: "Міндетті емес Мүмкіндіктер",
		admin_configuration_optional_features_p8_instructions: "Осы репозиторийде іске қосқыңыз келген мүмкіндіктерді таңдаңыз.<p><b>Маңызды:</b> Егер репозиторийге қосымша құрылғыны орнататын мүмкіндіктерді іске қосқан болсаңыз, онда репозиторийге Content Platform Engine немесе Content Engine әкімшісі сияқты қосылуыңыз керек.</p>",
		admin_configuration_optional_features_cm_instructions: "Осы репозиторийде іске қосқыңыз келген мүмкіндіктерді таңдаңыз.<p><b>Маңызды:</b> Бұл мүмкіндіктер, репозиторийдегі дерек модулін жаңартады. Оларды іске қосу үшін, репозиторийге кітапхана серверінің әкімшісі сияқты қосылуыңыз керек.</p>",
		admin_system_properties: "Жүйе сипаттары",
		admin_system_properties_for: "Келесіге арналған жүйе сипаттары:",
		admin_available_properties: "Қол жетімді сипаттар",
		admin_displayed_properties: "Көрсетілген сипаттар",
		admin_selected_properties: "Таңдалған сипаттар",
		admin_selected_filtered_properties: "Жасырын сипаттар",
		admin_available_operators: "Көрсетілген амалдауыштар",
		admin_selected_filtered_operators: "Жасырын амалдағыштар",
		admin_system_properties_shown: "Көрсетілген сипаттар",
		admin_system_properties_hidden: "Жасырын сипаттар",
		admin_available_menu_items: "Қол жетімді әрекеттер:",
		admin_selected_menu_items: "Таңдалған әрекеттер:",
		admin_menu_global: "Ешқандай элементтер таңдалмаған кезде қабылданады:",
		admin_menu_multiple_document: "Бірнеше элементтер таңдалған кезде қабылданады:",
		admin_menu_privileges: "Сұралған артықшылықтар:",
		admin_menu_plugin: "Қосылу модулі:",
		admin_menu_repository_types: "Репозиторий түрлері:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Бөлгіш",
		admin_browse: "Шолу",
		admin_search: "Іздеу",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Рөлге негізделген редакция",
		admin_connections_library_enabled: "IBM Connections бағдарламасы іске қосылды",
		admin_office_conf: "Біріктіруді өңдеу",
		admin_desktop_conf_label: "Жұмыс үстелі конфигурациясы",
		admin_ms_office_conf_label: "Office конфигурациясы",
		admin_workflows: "Жұмыс процестері",
		admin_file_types: "Файл түрлері",
		admin_file_type_contains_label: "Файл түрі мазмұны",
		admin_name_propepty: "Аты",
		admin_cm_name_property_default: "Әдепкі атты қолдану",
		admin_cm_name_property_default_hover: "Әдепкі бойынша ICM иерархия атының (ICM$NAME) сипаты егер сипат элемнт үшін анықталса, элемент аты ретінде қолданылады.  Егер ICM иерархия атының (ICM$NAME) сипаты қол жетімсіз болса, \"represents\" деп белгіленген бірінші сипат элемент аты ретінде қолданылады.",
		admin_cm_name_property: "Элемент аты сипатын көрсету",
		admin_cm_name_property_hover: "Құжаттар мен қалталар үшін қай сипаттың ат ретінде қолданылғанын көрсетіңіз.",
		admin_name_property: "Ат сипаты:",
		admin_doc_name_property: "Құжат атының сипаты:",
		admin_doc_name_property_hover: "Құжат аты ретінде қай сипаттың қолданылғанын көрсетіңіз.",
		admin_folder_name_property: "Қалта аты сипаты:",
		admin_folder_name_property_hover: "Қай сипаттың қалта аты ретінде қолданылғанын көрсетіңіз.",
		admin_all_searches_label: "Көрсетілетін іздеулер саны:",
		admin_unlimited: "Шек жоқ",
		admin_limit: "Шектеу",
		admin_repository: "Репозиторий:",
		admin_application_space: "Бағдарлама бос орны",
		admin_available_application_spaces: "Қол жетімді бағдарлама бос орындары:",
		admin_selected_application_spaces: "Таңдалған бағдарлама бос орындары:",
		admin_label: "Белгі",
		admin_repository_box_placeholder: "Box репозиториін таңдау",
		admin_repository_placeholder: "Репозиторийді таңдау",
		admin_search_match: "Салыстыру:",
		admin_search_match_all: "Барлық іздеу шартын салыстыру",
		admin_search_match_any: "Кез келген іздеу шартын салыстыру",
		admin_search_match_hover: "<b>Сипат опциялары</b> мәзірінде, әдепкі бойынша қай опция таңдалғанын көрсетіңіз.",

		admin_repository_redactions_instructions: "Осы репозиторий үшін рөлге негізделген редакцияларды теңшей аласыз.",
		admin_repository_redaction_policies_description: "Редакция саясаттарын құрып және басқара аласыз, ол редакция себептерін сезімтал дерекпен оқып және сол сезімтал деректі көріністен қорғайтын аннотацияларды өңдей алатын пайдаланушылар мен топтармен байланыстырады.",
		admin_repository_redaction_roles_instruction: "Редакция рөлін көрсетілген пайдаланушылар мен топтарды сезімтал деректі оқу үшін арналған қабылеттілікті, не сезімтал деректі көріністен қорғайтын аннотацияларды өңдеу қабылеттіліктерін байланыстыру үшін құра аласыз. Редакция рөлі редакция себебімен редакция саясатында сол пайдаланушылар мен топтар аннотацияларды өңдеп немесе деректі оқи алудан бұрын байланыстыра аласыз.",
		admin_repository_redaction_reasons_instruction: "Репозиторийіңіз үшін редакция себептерін теңшей аласыз.",
		admin_repository_redaction_policies: "Редакция саясаты теңшелімі",
		admin_repository_redaction_roles: "Редакция рөлдерінің теңшелімі",
		admin_repository_redaction_reasons: "Редакция себептерінің теңшелімі",
		admin_repository_redaction_roles_type: "Түр",
		admin_repository_redaction_roles_type_hover: "Көруші сезімтал деректің арнайы түрлерін көру кезінде өңдеуші рөлге негізделген редакциялардың арнайы түрлерін құрып, өңдеп және жоя алады.",
		admin_repository_redaction_roles_type_editor: "Өңдегіш",
		admin_repository_redaction_roles_type_viewer: "Қарау құралы",
		admin_repository_redaction_roles_membership: "Мүшелік",
		admin_repository_redaction_roles_membership_hover: "Осы рөлді иеленгіңіз келетін өңеушілерді таңдаңыз.",
		admin_repository_redaction_roles_user_group_hover: "Пайдаланушылар мен топтар үшін іздеңіз немесе осы рөлді иеленгіңіз келетін өңдеушілерді таңдаңыз.",
		admin_repository_redaction_roles_description: "Пайдаланушылар мен топтарды сезімтал деректі көріністен қорғайтын сезімтал деректі оқу мен аннотацияларды өңдеу үшін қабылеттілікпен байланыстыратын редакция рөлдерді құрып және басқара аласыз.",
		admin_repository_redaction_new: "Жаңа редакция рөлі",
		admin_repository_redaction_role_avail_editors: "Қол жетімді редакция өңдеушілері",
		admin_repository_redaction_role_avail_users: "Қол жетімді пайдаланушылар",
		admin_repository_redaction_role_avail_groups: "Қол жетімді топтар",
		admin_repository_redaction_role_selected_editors: "Таңдалған редакция өңдеушілері",
		admin_repository_redaction_role_selected_users_groups: "Таңдалған пайдаланушылар мен топтар",
		admin_repository_redaction_role_add_editor: "Жаңа өңдеушілер...",
		admin_repository_redaction_role_access_type: "Қатынас",
		admin_repository_redaction_role_access_type_access: "Рұқсат беру",
		admin_repository_redaction_role_access_type_no_access: "Тыйым салу",
		admin_repository_redaction_role_users: "Пайдаланушылар",
		admin_repository_redaction_role_groups: "Топтар",
		admin_repository_redaction_role_editors: "Өңдеушілер",
		admin_delete_confirmation_redaction_roles: "Таңдалған редакция рөлін жойғыңыз келеді ма?",
		admin_repository_edit_redaction_role: "Редакция рөлі: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Әдепкі қатынас",
		// RBA
		desktop_user_group_acl: "Жұмыс үстелі әкімшілері",
		desktop_user_group_remove: "Жою",
		desktop_rba_membership: "Мүшелік:",
		desktop_rba_membership_list_label: "Аты",
		admin_repository_redaction_policy_hover: "Осы топ саясаты мен басқа топ саясаттары арасында анықтауды іске қосатын сипаттаманы қамтамасыз етіңіз.",
		admin_repository_new_redaction_policy: "Жаңа редакция саясаты",
		admin_repository_policy_name: "Саясат аты",
		admin_repository_reason_redactions: "Редакция себептері:",
		admin_repository_role_editors: "Өңдеушілер",
		admin_repository_role_viewers: "Көрушілер",
		admin_repository_redaction_policy_instruction: "Таңдалған редакция себептерін редакция өңдеушілері мен редакция қараушылары екеуімен де байланыстыру үшін редакция саясатын құра аласыз.",
		admin_repository_redaction_reasons_hover: "Көптеген пайдаланушылар көруге қабылетсіз болуын қаламайтын сезімтал деректердің бір немесе бірнеше түрлерін таңдаңыз, мысалы жеке анықталатын ақпарат, сауда құпиялары немесе кәсіпорныңызға құпия немесе жекеше болатын ақпарат.",
		admin_repository_readaction_available_reasons: "Қол жетімді себептер",
		admin_repository_readaction_selected_reasons: "Таңдалған себептер",
		admin_repository_readaction_new_reason: "Жаңа себеп...",
		admin_repository_redeaction_reasons: "Редакция себептері:",
		admin_repository_readaction_editor_permmission: "Редакция өңдеушілері:",
		admin_repository_redaction_editors_hover: "Таңдалған себептер үшін редакцияны құрып және өңдей алатын рөлдерді таңдаңыз.",
		admin_repository_readaction_new_editor_role: "Жаңа өңдеуші рөлі...",
		admin_repository_readaction_available_editors: "Қол жетімді өңдеуші рөлдері",
		admin_repository_readaction_selected_editors: "Таңдалған өңдеуші рөлдері",
		admin_repository_readaction_viewer_permmission: "Редакцияны қараушылар:",
		admin_repository_redaction_viewers_hover: "Таңдалған себептер үшін сезімтал деректі көре алатын рөлдерді таңдаңыз. Редакция пайдаланушылар мен топтар үшін осы рөлдермен қабылданбайды.",
		admin_repository_readaction_new_viewer_role: "Жаңа қараушы рөл...",
		admin_repository_readaction_available_viewers: "Қол жетімді қараушы рөлдері",
		admin_repository_readaction_selected_viewers: "Таңдалған қараушы рөлдер",
		admin_repository_reason_redactions_header: "Редакция себептері",
		admin_delete_confirmation_redaction_policy: "Таңдалған редакция саясатын жойғыңыз келеді ма?",
		admin_role_type_repository: "Репозиторий",
		admin_role_type_administrator: "Әкімші",
		admin_role_type_template: "Үлгі",
		admin_role_type_teamspace: "Топ бос орны",
		admin_role_type_author: "Өңдегіш",
		admin_role_type_user: "Қарау құралы",
		admin_collaboration_services_instructions: "Егер IBM Connections және FileNet Collaboration Services веб бағдарламасын алсаңыз, репозиторий үшін қауымдастық топ орындарын және әрекет жолдарын репозиторий үшін теңшей аласыз.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Бірлестік Кітапханасының Теңшелімі",
		admin_collaboration_community_instruction: "IBM FileNet P8 доменіңіздегі бір репозиторийді IBM Connections бірлестік кітапханаларын (топ орындары деп те аталады) сақтау үшін теңшей аласыз. Пайдаланушылар бірлестік кітапханасын IBM Connections арқылы құрған кезде, ол бірлестік кітапханасы репозиторийі ретінде анықталатын репозиторийде сақталады.",
		admin_collaboration_community_teamspaces: "Бірлестік кітапханалары үшін осы репозиторийді қолданыңыз:",
		admin_collaboration_community_teamspaces_hover: "IBM FileNet P8 доменіңізде тек бір ғана репозиторийді жаңа бірлестік кітапханаларын сақтау үшін қолдана аласыз. Егер осы репозиторийді іске қоссаңыз, бар репозиторий ажыратылады. Алайда, кез келген бар кітапханалар ағымдағы репозиторийде қалады.",
		admin_collaboration_connections_anonymous: "Жалпы мазмұн үшін анонимді қатынасты рұқсат ету:",
		admin_collaboration_connections_anonymous_hover: "Егер IBM Connections серверіңіз жалпы немесе өңделген бірлестіктерді қамтыса, FileNet Collaboration Services қызметін пайдаланушыларға мазмұнды сол бірлестіктерге кірмей мазмұнды шолып және жүктеуге рұқсат беру үшін теңшей аласыз.<br><br>Бірлестік кітапханаларын анонимді қабылдаған пайдаланушылар мазмұнды құрып, өңдеп не жоя алмайды.<br><br><b>Маңызды:</b> IBM FileNet P8 LDAP пайдаланушысын анонимді пайдаланушы ретінде танып және сол пайдаланушыны <b>Анонимдік</b> рөлмен WebSphere Application Серверінде теңшейсіз.",
		admin_collaboration_connections_url: "IBM Қосылымдарының URL мекен-жайы:",
		admin_collaboration_connections_url_hover: "URL мекен-жайын IBM Connections серверіңізге келесі пішіммен көрсетіңізhttp://IBMConnectionsServer:port_number.  Егер IBM Connections бағдарламасы IBM HTTP Server серверін қолдануға теңшелсе, порт санын URL мекен-жайынан түсіре аласыз.<br><br>URL мекен-жайы IBM Connections пайдаланушыларына қол жетімді болуы тиіс, себебі бұл FileNet Collaboration Services қызметі IBM Connections бағдарламаларындағы құжат беттеріне байланыстарды құру үшін қолданатын байланыс болып табылады.",
		admin_collaboration_connections_url_http_use: "IBM Connections URL мекен-жайын пайдалану",
		admin_collaboration_connections_url_https_use: "IBM Connections HTTPS URL мекен-жайын пайдалану",
		admin_collaboration_connections_url_specify: "URL мекен-жайын көрсету",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "Егер IBM Connections бағдарламасы SSL элементіне теңшелсе, HTTPS URL мекен-жайын IBM Connections серверіңізге келесі пішіммен көрсетіңіз https://IBMConnectionsServer:port_number.  Егер IBM Connections бағдарламасы IBM HTTP Server серверін қолдануға теңшелсе, порт санын URL мекен-жайынан түсіре аласыз.",

		admin_collaboration_connections_gadget_url: "IBM Connections gadget URL:",
		admin_collaboration_connections_retrieval_url: "IBM Connections шығару URL:",
		admin_collaboration_connections_security: "Бірлестік әкімшілері:",
		admin_collaboration_connections_security_hover: "Бірлестік кітапханаларында мазмұнды әкімшілей алатын пайдаланушылар мен топтарды көрсетіңіз.<br><br>Жаһандықәкімшілер бірлестік кітапханаларын және мазмұнның бірлестік кітапханаларын құрып, өңдеп, жойып және қамтамасыз ете алады. Пайдаланушыны жаһандық әкімші ретінде көрсеткенде, пайдаланушыға репозиторийде ClbGlobalAdministrator артықшылықтары беріледі.<br><br>Жаһандық шолу әкімшілері бірлестік кітапханасындағы жариялымдар үшін шолудың астында қабылдап және мазмұннан бас тарта алады. Пайдаланушыны жаһандық шолу әкімшісі ретінде көрсеткенде, пайдаланушыға репозиторийде ClbGloablReviewAdministrator артықшылықтары беріледі.",

		admin_collaboration_connections_admins: "Жаһандық әкімшілер",
		admin_collaboration_connections_admins_review: "Жаһандық шолу әкімшілері",
		admin_collaboration_connections_seedlist: "Бірлестік кітапхана мазмұндарының индексі:",
		admin_collaboration_connections_seedlist_hover: "Specify whether you want IBM Connections бағдарламаларының бірлестік кітапханаларын осы репозиторийде іздеу индексін құру үшін мазмұнды қайда тексеретінін көрсетіңіз. Индексті құру репозиторий теңшеліміне әсер ете алады.<br><br>ЕгерSocial Collaboration Search Indexing Extensions бағдарламалары репозиторийде орнатылса, бұл опция әдепкі бойынша іске қосылады. Егер Social Collaboration Search Indexing Extensions бағдарламалары репозиторийде орнатылмаса, қосылу модулі осы опцияны іске қосқан кезде репозиторийде орнатылады",
		admin_collaboration_activity_stream: "Белсенді Ағынның Оқиға Теңшелімі",
		admin_collaboration_activity_stream_label: "Оқиға ақпаратын ІBM Connections бағдарламаларына жіберіңіз:",
		admin_collaboration_activity_stream_label_hover: "Құжатты құру, сыртқы тексерулер, ішкі тексерулер, аңғартпалар, тегтер және ортақ файлдар сияқты оқиға ақпаратынIBM Connections бағдарламаларына жібергіңіз келетінін көрсетіңіз.<br><br><b>Маңызды:</b> IBM Connections бағдарламаларына хабарламаларды жіберу репозиторий көрінісіне сер етеді.",

		admin_collaboration_activity_stream_instruction: "Осы репозиторийді IBM Connections бағдарламаларына оқиға ақпаратын жіберуге теңшей аласыз, мысалы аңғартпалар және құжат бекітулері. Оқиғалар <b>Кейінгі жаңартулар</b> бетінде IBM Connections бірлестіктерінде көрсетілген. ",
		admin_collaboration_activity_stream_ignored_ids: "Арнайы пайдаланушылар мен топтар үшін оқиға ақпаратын елемеу:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Пайдаланушылар көретін хабарландырулар санын кеміту үшін әкімшілер немесе жүйе есептері ретінде анайы пайдаланушылар мен топтар арқылы жасалған оқиғаларды елемеуіңізге болады. Мысалы, егер тіс мазмұнды көшіріп жатсаңыз, онда еленбеген көшіру үшін қолданылған есеп бойынша жасалған оқиғаларды қалауыңыз мүмкін.",
		admin_collaboration_activity_stream_userid: "IBM Connections пайдаланушы аты:",
		admin_collaboration_activity_stream_userid_hover: "Content Platform Engine бағдарламасы түпнұсқалық растау үшін және оқиға ақпаратын IBM Connections бағдарламасына жіберу үшін қолданылатын жүйе есебін көрсетіңіз. Пайдаланушы <b>trustedExternalApplication</b> рөлінде Widget Container бағдарламасының IBM Қосылымдарының түрінде болуы керек.<br><br><b>Кеңес:</b> Әдепкі бойынша IBM Connections әкімшісі сәйкес артықшылықтарды иеленеді. Әкімші идентификаторын пайдаланушы аты ретінде қолдана аласыз",
		admin_collaboration_activity_stream_password: "IBM Connections пайдаланушы құпия сөзі:",

		admin_help_url: "Пайдаланушы көмегі URL мекен-жайын аяқтаңыз:",
		admin_help_url_hover: "<b>Маңызды ескерім:</b> Қолданушы орнатқан IBM Knowledge Center қызметі IBM Content Navigator қызметінің 3.0.0 нұсқасы ретінде жаңартылмайды. Тұтынушы көмегін қолдану туралы қосымша ақпарат алу үшін клиенттерге қызмет көрсету орталығына хабарласыңыз.<br><br>IBM Content Navigator 3.0.0 нұсқасы ретінде соңғы пайдаланушы көмегіне арналған URL мекен-жайы IBM Knowledge Center қызметіне сәйкес. IBM Knowledge Center қызметіне арналған URL мекен-жайы мынадай: http://www.ibm.com/support/knowledgecenter.<br><br>Егер тұтынушы орнатқан IBM Knowledge Center қызметінің алдыңғы нұсқасын қолдануды жалғастырғыңыз келсе, онда IBM Content Navigator Configuration және Deployment Tool арқылы орналастырылған тұтынушы орнатқан IBM Knowledge Center данасының URL мекен-жайын көрсетіңіз. URL мекен-жайының, клиент компьютерлеріне қатынасы болуы керек. URL мекен-жайының пішімі http://server_name:port_number/kc.<br><br>Сервер атын және порт санын, IBM Content Navigator орнату каталогының KnowledgeCenter/logs ішкі каталогындағы console.log файлынан ала аласыз.",

		admin_help_default: "IBM арқылы ұсынылған әдепкі көмекті қолданыңыз",
		admin_custom_help: "Өзгертпелі көмек жүйесін қолдану",
		admin_help_kc: "орнатылған IBM Білім Орталығының Тұтынушысындағы өзгертпелі көмекті қолдану",
		admin_help_kc_hover: "<b>Маңызды ескерім:</b> Қолданушы орнатқан IBM Knowledge Center қызметі IBM Content Navigator қызметінің 3.0.0 нұсқасы ретінде жаңартылмайды. Тұтынушы көмегін қолдану туралы қосымша ақпарат алу үшін клиенттерге қызмет көрсету орталығына хабарласыңыз.<br><br>Егер тұтынушы орнатқан IBM Knowledge Center қызметінің алдыңғы нұсқасын қолдануды жалғастырғыңыз келсе, онда осы параметрді алдында орналастырған тұтынушымен орнатылған IBM Knowledge Center данасына мазмұн қосуды жалғастыру үшін таңдаңыз.",
		admin_help_taxonomy: "Таксономия коды:",
		admin_help_taxonomy_hover: "Өзгертпелі көмек үшін, таксономия кодын таңдаңыз.<br><br>IBM Content Navigator бағдарламасының таксономия коды SSEUEX мәні болып табылады. Егер Орнатылған IBM Білім Орталығының Тұтынушысы бағдарламасында әртүрлі өнім атымен көмекті көрсеткіңіз келсе, IBM Content NavigatorIBM Content Navigator орнату каталогының KnowledgeCenter/usr/таксономия каталогындағы KC_taxonomy.ditamap файлына бірегей таксономия кодын қосуыңыз керек.",
		admin_help_context: "Көмек мәтінмәні:",
		admin_help_context_hover: "Өзгертпелі көмек үшін мәтінмәнді көрсетіңіз.<br><br>IBM Content Navigator бағдарламасы үшін көмек, IBM Content Navigator орналылымы каталогының KnowledgeCenter/usr/content/com.ibm.usingeuc.doc каталогында болып табылады. Әдепкі көмектің мәтінмәні, com.ibm.usingeuc.doc құжаты болып табылады. Егер өзгертпелі көмекті ұсынғыңыз келсе, KnowledgeCenter/usr/content/ каталогындағы жаңа ішкі каталогқа мазмұнды қосыңыз.",
		admin_help_welcome: "Байланыс беті:",
		admin_help_welcome_hover: "Пайдаланушылар көмекке қатысқан кезде байланыс беті сияқты қолданғыңыз келген тақырыптың атын көрсетіңіз. Байланыс бетінің орналасуын көрсететін сипаттардың файлын құруыңыз керек және сипаттар файлын IBM Content Navigator орнатылым каталогының KnowledgeCenter/usr/conf каталогына қосыңыз.",

		admin_settings_mimetype_extensions_jsonfile: "Mime түрі кеңейтімдері JSON файлы:",
		admin_settings_mimetype_extensions_jsonfile_hover: "JSON файлының атын және файлға толық жолды тексеріңіз. Бұл файл JSON файлына нұсқайтын URL-мекен-жайынан немесе файл жүйесінен жалпы файл болуы мүмкін.  <br><br>JSON файлының мазмұны - mime түрі анықтамалары үшін жиым. <br><br>Mime түрі анықтамасы \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\" төрт кілт сөзін қосады. Алғашқы \"mimeTypes\", \"extensions\" екі кілті қажет, және \",\" арқылы бөлінген жол жиымдары болуы мүмкін. Соңғы \"fileType\", \"iconName\" екі кілті міндетті емес. <br><br>Мысалы: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Task Manager Configuration",
		admin_taskmanager_service: "Тапсырма реттеушісінің қызметі:",
		admin_taskmanager_service_hover: "Тапсырма реттеушісінің қызметін, үндестірілмеген тапсырмаларды құру және орындау үшін қолданғыңыз келетінін көрсетіңіз. <br><br>Егер бұл параметрді өзгертсеңіз, өзгертулер әсер алуы үшін, IBM Content Navigator желі бағдарламасын қайта бастауыңыз керек.",
		admin_taskmanager_url: "Тапсырма реттеушісі қызметінің URL мекен-жайы:",
		admin_taskmanager_url_hover: "Басқа бағдарламалар, тапсырма реттеушісінің қызметімен байланыса алатын URL мекен-жайын көрсетіңіз. URL мекен-жайының пішімі http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Тапсырма реттеушісі журналының каталогы:",
		admin_taskmanager_logdirectory_hover: "Әдепкіде, тапсырма реттеушісінің қызметі үшін журнал файлдары, желі бағдарламасы серверінің журнал файлдары сияқты бірдей каталогқа жазылады. <br><br>Егер жұрнал жүргізу мәліметі IBM Content Navigator серверінде әртүрлі каталогқа жазылғанын қаласаңыз, тапсырма реттеушісінің құрамдасы арқылы жасалған журнал файлдарын сақтағыңыз келген жерге каталогтың толық жарамды жолын көрсетіңіз. <br><br>Егер бұл параметрді өзгертсеңіз, өзгертулер әсер алуы үшін, IBM Content Navigator желі бағдарламасын қайта бастауыңыз керек.",
		admin_taskmanager_heartBeatMonitor: "Кластердің жүрек соғысын бақылау",
		admin_taskmanager_heartBeatMonitor_hover: "Тек қана жоғарғы қол жетімді кластердің орталары. Егер осы опцияны іске қоссаңыз, тапсырма реттеушісінің қызметі, ағымдағы орындалып жатқан түйінге, ағымдағы төменгі түйіндерден тапсырмаларды қайта бағыттайды. <br><br>Егер бұл параметрді өзгертсеңіз, өзгертулер әсер алуы үшін, IBM Content Navigator желі бағдарламасын қайта бастауыңыз керек.",

		admin_syncserver_title: "Синхрондау серверінің теңшелімі",
		admin_syncserver_enable: "Синхрондау қызметтері:",
		admin_syncserver_enable_hover: "Экранға қатынасы бар пайдаланушылардың элементтерін, жұмыс бекеттеріне және мобильді құрылғыларына синхрондау үшін қол жетімді болғанын қалайтыныңызды көрсетіңіз.<br><br><b>Маңызды:</b> Бұл мүмкіндікті қолдану үшін, келесі тапсырмаларды аяқтауыңыз керек:<ul><li><b>Синхрондау қызметтерінің жалпы URL мекен-жайын</b> әкімші құралдың <b>Синхрондау Қызметтері</b> бөлімінде көрсетіңіз.</li><li>Осы жұмыс үстеліне синхрондау қызметтері іске қосылған репозиторийді қосыңыз.</li></ul>Егер бұл опцияны ажыратсаңыз бірақ осы жұмыс үстелі үшін синхрондау қызметтері іске қосылған репозиторийді қосыңыз, репозиторийдегі параметр еленбеген.",
		admin_mobileqr_enable: "IBM Navigator QR кодын қосылу бетінде көрсетіңіз:",
		admin_mobileqr_enable_hover: "Веб тұтынушы кіру бетінде IBM Navigator мобильді бағдарламасы үшін QR кодын көрсеткіңіз келсе осы параметрді іске қосыңыз.<br><br>Пайдаланушы QR кодын сканерлеген кезде, олар ІBM Navigator мобильді бағдарламасын жүктей алатын кезде өз құралы үшін сәйкес бағдарлама қоймасына алынады.",

		admin_streamlineservice_enable: "Қызметті өңдеу:",
		admin_streamlineservice_enable_hover: "FileNet P8 пайдаланушылары ғана. Осы опцияны егер жұмыс үстелі пайдаланушылары өздерінің жұмыс орындарындағы жергілікті бағдарламалардан құжаттарды жеңід қосу немесе өңдеуге қабылетті болуын қалаған кезде іске қосыңыз. <br><br>Осы параметрді қолдану үшін, сонымен қатар: <ul><li>Осы жұмыс үстелімен байланысқан бір немесе одан көп репозиторийлеріндегі қызметті өңдеңіз</li><li>IBM Content Navigator Edit тұтынушы қызметін пайдаланушы жұмыс орнына орнатыңыз</li></ul>",

		admin_repository_general_instructions: "Параметрлерді, жүйе сипаттарын, қалталар мен т.с.с. теңшемес бұрын репозиторийге қосылуыңыз керек.",
		admin_repository_system_instructions: "Осы репозиторийдегі құжаттар мен қалталар үшін жүйе сипаттарын көрсетіңіз.",

		admin_desktop_general_create_instructions: "Жұмыс үстелі пайдаланушы веб тұтынушысына қосылған кезде нені көріп және орындай алатынын анықтайды. Жұмыс үстелін құрғаннан кейін, жұмыс үстелі URL мекен-жайын пайдаланушыларға жұмыс үстелін қабылдау үшін жібере аласыз.",
		admin_desktop_admin_instructions: "Әкімші жұмыс үстелі веб тұтынушымен бірге веб тұтынушысын орнату үшін әкімші пайдаланушыларды іске қосу үшін қамтамасыз етілген. Бұл жұмыс үстелі веб тұтынушысына арналып теңшелген барлық репозиторийлер үшін қатынасты иеленеді.",
		admin_desktop_repositories_instructions: "Осы жұмыс үстелінен пайдаланушылардың осыған рұқсаты болатындай репозитооийлерді көрсетіңіз. Репозиторийлеріңізді жұмыс үстеліне қоспас бұрын теңшеуіңіз керек.<br><br><b>Кеңес:</b> Жұмыс үстелі орналасымын иеңшеу кезінде әр бір мүмкіндік үшін қай репозиторийлердің қол жетімді болатынын шектей аласыз.",
		admin_desktop_menus_instructions: "Осы жұмыс үстелінен пайдаланушылардың қай мәзірлерге рұқсат болатынын көрсетіңіз. Теңшелімде ненің таңдалғанына байланысты қай әрекеттердің қол жетімді болатынын мәзір көрсетеді.<br><br><b>Кеңес:</b> Әкімші құралының<b>Мәзірлер</b> бөліміндегі мәзірлердің мазмұнын теңшеп немесе қосылу модульдерін құру арқылы мәзірлердің жаңа түрлерін құра аласыз.",

		admin_desktop_no_repositories: "Мұнда теңшелген репозиторийлер жоқ.",

		admin_desktop_id_hover: "Жұмыс үстелі идентификаторы веб тұтынушы URL мекен-жайына қамтылған және пайдаланушылар веб тұтынушыға кірген кезде қай жұмыс үстелінің ашылатынын көрсетеді. Идентификатор бірегей болуы тиіс және сіз жұмыс үстелін сақтағаннан кейін идентификаторды өзгерте алмайсыз.<br><br>Идентификатор тек әліпбилік сипаттарды ғана қамти алады және үлкен кішілікті ескереді.",
		admin_desktop_id_disabled_hover: "Жұмыс үстелі идентификаторы өзгертілмейді. Әр түрлі идентификаторды қолданғыңыз келсе, жаңа жұмыс үстелін құру керек.",
		admin_desktop_name_hover: "Жұмыс үстелі аты келесі таңбаларды қамти алмайды: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Сіздің теңшеліміңіз тек бір ғана әдепкі жұмыс үстелін қамти алмайды.",

		admin_repository_id_disabled_hover: "Репозиторий идентификаторы өзгертілмейді. Егер әр түрлі идентификаторды қолданғыңыз келсе, жаңа репозиторий байланысын құруыңыз керек.",
		admin_printService_enable: "IBM Daeja Viewone басып шығару қызметін пайдалану арқылы басып шығарыңыз:",
		admin_printService_enable_hover: "IBM Daeja Viewone басып шығару қызметін қосуды таңдасаңыз, құжаттар PDF форматына түрлендіріледі және басып шығару кез келген веб-браузері арқылы аяқталуы мүмкін.<br><br>IBM Daeja Viewone басып шығару қызметін өшіруді таңдасаңыз, Java қосымшаларын қолдайтын веб-шолғыштарда ғана құжаттарды басып шығаруға болады.  Кейбір веб-шолғыштар Java апплеттерін қолдамайды және апплетті басып шығаруды қолдамайды.<br><br>Қолдау көрсетілетін браузерлердің құжаттамасын қараңыз.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Пайдаланушының бастапқы каталогы",
		admin_file_tracking_doc_directory_my_documents: "Пайдаланушының құжат каталогы",
		admin_file_tracking_doc_directory_qp: "Жарамды жол",
		admin_file_tracking_section_tile: "Файлды тасымалдау теңшелімі",
		admin_file_tracking_home_path: "Бастапқы жол",
		admin_file_tracking_my_documents: "Менің құжаттарым",
		admin_file_tracking_exact_path: "Толық жарамды жол:",
		admin_file_tracking_qp: "Жарамды жол",
		admin_file_tracking_ev: "Орта айнымалысы",
		admin_file_tracking_ev_us: "Тұтынушы орта айнымалысы ",
		admin_file_tracking_del_local_copy: "Жергілікті көшірмені жою:",
		admin_file_tracking_yes: "Иә",
		admin_file_tracking_no: "Жоқ",
		admin_file_tracking_del_local_copy_rt_state_editable: "Пайдаланушыға осы параметрді алдын ала анықтауға рұқсат беру",
		admin_file_tracking_del_local_copy_rt_state1: "Иә",
		admin_file_tracking_del_local_copy_rt_state2: "Жоқ",
		admin_file_Tracking_label: "Файлды тамысалдау:",
		admin_file_Tracking_disable: "Ажырату",
		admin_file_Tracking_enable: "Іске қосу",
		admin_file_tracking_label_hover_help: "Файлды тамысалдау пайдаланушылардың компьютерлеріндегі құджаттарды арнайы каталогқа бағдарламаны тексеру және жүктеу үшін қолданады. Бағдарлама сонымен қатар IBM Content Navigator бағдарламасын пайдаланушылар құжаттарда тексерген кезде пайдаланушы компьюьерлеріндегі құжаттарды тбу үшін іске қосады.",
		admin_file_tracking_doc_directory: "Сақтау орны:",
		admin_file_tracking_open_file: "Файлды автоматты түрде ашу",
		admin_file_Tracking_append_qualified_path: "Каталогты қолдану",
		admin_file_Tracking_append_qualified_path_hover_help: "Құжаттардың арнайы ішкі каталогқа сақталғанын қаласаңыз, каталогты орта айнымалысының соңына қабылдай аласыз. <br/><br/>Мысалы, сол құжаттардың <i>EnterpriseDocuments</i> каталогына пайдаланушының бастапқы каталогы арқылы жүктелгенін көрсете аласыз.",
		admin_file_Tracking_append_ev: "Үстеу ортасының айнымалысы",
		admin_file_Tracking_append_ev_hover_help: "Құжаттардың динамикалы көрсетілген каталогта, мысалы пайдаланушы каталогында сақталғанын қаласаңыз орта айнымалысын қабылдай аласыз.<br/><br/>Мысалы, сортақ желі каталогындағы <i>user_name</i> ішкі каталогта сақталған құжаттарды көрсете аласыз. ",
		admin_file_tracking_doc_directory_hover_help: "Құжаттар тексеріліп немесе жүктелгеннен кейін қайда сақталатынын көрсетіңіз.<br/><br/> <b>Кеңес</b>: Құжаттарды пайдаланушының бастапқы каталогында немесе әдепкі құжат каталогында сақтағыңыз келсе, сол орналасымдарға меңзейтін алдын ала анықьалған айнымалыларды қамтитын <b>Орта айнымалысы</b> түрін таңдаңыз.",
		admin_file_tracking_qualified_path_hover_help: "Тиісті каталогтың құрылымын, Windows немесе Mac операциялық жүйесі үшін, құжаттарды сақтағыңыз келген каталогты немесе желі каталогын көрсетіңіз. <ul><li>Windows үшін жолдағы диск әрпін қамтыңыз, мысалы C:\\Enterprise Documents.</li><li>Ортақ желі каталогы үшін \\\\servername\\directory пішіміндегі жолды енгізіңіз</li></ul><br/><b>Маңызды:</b> Бұл опцияны қолдану үшін, көрсеткен каталогтың құрылымы, ортадағы барлық клиенттің жұмыс бекетінде құруға қол жетімді болуы керек.",
		admin_file_tracking_environment_variable_path_hover_help: "Тиісті ортаның айнымалыларын, Windows немесе Mac операциялық жүйесі үшін, құжаттарды сақтағыңыз келген каталогты немесе желі каталогын көрсету үшін қолданыңыз. <br/><br/><b>Пайдаланушы Бастапқы Каталогы</b> опциясы құжаттарды келесі каталогқа сақтайды:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/><b>Пайдаланушы Құжаты Каталогы</b> опциясы құжаттарды келесі каталогта сақтайды:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Пайдаланушылар құжаттарды репозиторийге қосу немесе тексеру кезінде, құжаттың жергілікті көшірмесінің жойылғанын көрсетеді.<br/><br/>Жергілікті көшірмені жою сізді келесіге мәжбүрлейді:<br/><ul><li>Сыйымдылықты келесі ІТ саясаттармен іске қосыңыз</li><li>Пайдаланушылардың құжаттардың соңғы нұсқаларымен жұмыс істеуін тексеріңіз</li></ul><br/><b>Шектеу:</b> Бұл параметр, пайдаланушылар құжаттарды апару немесе жою арқылы қосқан кезде қолданылмайды.<br/><br/>Microsoft Office IBM Content Navigator бағдарламасы үшін, <b>Пайдаланушылар құжатты тексеру немесе қосу немесе есептеуді болдырмайтын кезде, жергілікті файлды жоюды</b> жұмыс үсетіліндегі <b>Кеңсе Теңшелімі</b> бөлімінде таңдауыңыз керек.",
		admin_file_tracking_open_file_hover_help: "Бұл опция пайдаланушылардың веб шолғыштарында теңшелген кез келген өқжатты теңшелімдерін қайта жазады. </br></br><b>Шектеу:</b> Бұл параметр, Microsoft Office үшін IBM Content Navigator бағдарламасы арқылы қолданылмайды.",
		admin_file_tracking_over_write_file: "Жергілікті көшірмені қайта жазыңыз:",
		admin_file_tracking_over_write_file_hover_help: "Пайдаланушылар құжаттарды репозитоийден тыс тексерген кезде құжаттың жергілікті көшірмесін өайта жазу үшін көрсетіңіз. <br/><br/>Жергілікті көшірмені қайта жазу сізді келесіге мәжбүрлейді:<br/><ul><li>Пайдаланушылардың құжаттардың соңғы нұсқаларымен жұмыс істеуін тексеріңіз</li><li>Жергілікті көшірме болған кезде пайдаланушыларды шақыруды көруден алдын алу</li></ul> </br></br><b>Шектеу:</b> Бұл параметр, IBM Content Navigator бағдарламасы арқылы Microsoft Office үшін қолданылмайды, егер <b>Пайдаланушыларға осы параметрді алдын ала анықтауға рұқсат беру</b> батырмасын таңдасаңыз.",
		admin_file_tracking_over_write_file_state_editable: "Пайдаланушыға осы параметрді алдын ала анықтауға рұқсат беру",
		admin_file_tracking_inline_help: "Файлды тасымалдау құжаттарды тексеруді репозиторийден тыс және репозиторий ішінде орындайды. Бұл сонымен қатар сізді құжаттардың пайдаланушылар компьютерлерінде сақталғанын басқару ды іске қосады. <br/><br/>Сонымен қатар, файлды тасымалдау құжаттарды бірнеше IBM Content Navigator құрамдастарда тасымалдануына міндет етеді, мысалы веб тұтынушысы және IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Репозиторийге байланыспас бұрын Стандарт немесе Сервер түпнұсқалық растамасын қосу керек.",
		admin_box_use_oauth: "Түпнұсқалық растама түрі:",
		admin_box_use_oauth_hover: "IBM Content Navigator ішінен Жәшік құжаттарына қатынасуды ұйымдастратын кезде өнім ортасындағы Стандарт немесе Сервер түпнұсқалық растамасын таңдаңыз. IBM Content Navigator орналастыруымен біріктірілетін client_id және OAuth2 client_secret мәндерін көрсетіңіз. IBM Content Navigator серверіне арналған Box бағдарламасының жасағаннан кейін, осы мәндерді Box бағдарламасыдан аласыз.<br/><br/>Орналастыру ортасындағы Дамытушы түпнұсқалық растамасын таңдаңыз. Дамытушылар Жәшікке өздерінің дамытушы тіркелгілерін пайдалану арқылы және 60 минут бойы жарамды әзірлеуші таңбалауышын жасау арқылы кіре алады. Әзірлеушілердің таңбалауыштары кез келген пайдаланушы идентификаторына арналған құпия сөз ретінде әзірлеуші таңбалауышын пайдаланып, Box бағдарламасына кіруге рұқсат береді.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Box кәсіпорынының тіркелгі ішкі домені:",
		admin_box_share: "Тапсырманы басқару қосылым идентификаторы:",
		admin_box_share_hover: "Box көшірмесіне немесе Box бөлісусына репозиториді өзгертетін өңдік тапсырмаларды іске қосу үшін, тапсырманы басқару әкімші пайдаланушысы идентификаторын және құпия сөзді пайдаланады.<br/><br/>Орнату түймесін басыңыз және жарамды Box әкімшілік тіркелгісін пайдаланып, Box бағдарламасына кіріңіз.<br/><br/>Бөліскен файлдарға арналған репозиторий ретінде осы Box репозиториін таңдау арқылы жұмыс үстелін теңшесеңіз, Box бағдарламасында шектелмеген қоймасы бар Box әкімшісін таңдаңыз.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Файлды автоматты түрде ашу",
		file_tracking_runtime_overwrite_hover_help: "Егер бұл опцияны таңдамаған болсаңыз және бірдей атпен жергілікті файл жүйесінде құжатыңыз болса, құжат тексеріледі бірақ келесі бір әрекетті алмасаңыз жүктелмейді:<br/><ul><li> Құжатты, әдепкі каталогтың ішкі аталогына жүктеңіз. Егер ішкі каталогты таңдаған болсаңыз, құжаттың орны желі бағдарламасы арқылы түзетіледі.</li><li>Жүктеп алынатын құжатты қайта атаңыз. Құжатты қайта атау файл аты қайшылығының алдын алады.</li></ul>",
		open_file: "Файлды автоматты түрде ашу",
		over_write_file: "Жергілікті көшірмені қайта жазу",
		checkout_and_download_file: "Құжаттарды тексеру және жүктеу",
		download_to_local_directory: "Жүктеп алу:",
		checkout_and_download_button_title: "Тексеру және жүктеу",
		checkout_without_java_confirmation_dialog: "Файлды жүктеп алу және файлды қадағалау мүмкіндігімен қадағалау мүмкін емес.",
		browse_for_directory: "Шолу",
		selected_documents: "Таңдалған құжаттар",

		checkout_without_java_confirmation_text: "Файлды жүктеп алу және файлды қадағалау мүмкіндігімен қадағалау мүмкін емес:<br/><ul><li>Java Runtime Environment (JRE) жұмыс станциясында орнатылмайды.</li><li>Java қосылатын модулі веб-шоғышқа қосылмайды.</li><li>Веб-шолғыш Java мүмкіндігіне қолдау көрсетпейді.</li></ul><br/><br/>Ақаулықты шешу үшін, сәйкес әрекетті орындаңыз:<br/><br/><ul><li>Файлды қадағалауды қоспай файлды қотарып алуды жалғастырсаңыз, ОК түймешігін басыңыз.</li><li>Қадағалауды қосумен файлды жүктеп алғыңыз келсе, жүктеп алуды болдырмай, JRE жұмыс станциясында орнатылуын және Java қосылатын модулінің веб-шолғышта қосылуын қамтамасыз етіңіз.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Құжат тексерілді және жүктеп алынды, бірақ құжатты ашу мүмкін емес.",
		runtime_file_tracking_open_error_explanation: "Жұмыс бекетіне орнатылған амалдық жүйе, осы түрдегі файлдарды қолдамайды.",
		runtime_file_tracking_open_error_userResponse: "Ақаулықты шешу үшін, келесі әрекеттердің бірін орындаңыз:<br/><br/><ul><li>Құжатпен жұмыс істеу қажет болса, басқа амалдық жүйесі бар басқа жұмыс станциясында веб-клиенті ашыңыз.</li><li>Тек қана құжатты қарау керек болса, веб-клиентте құжатты тінтуірдің оң жақ түймешігімен нұқып, Ашу түймешігін басыңыз.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Құжат тексерілді, бірақ жүктеп алынбады.",
		runtime_file_tracking_save_file_error_explanation: "Бірдей атауы бар құжат жергілікті файл жүйесінде бар, бірақ ол қайта жазылмайды. ",
		runtime_file_tracking_save_file_error_userResponse: "Файлды репозиторийден жүктеп алуды қаласаңыз, құжатты репозиторийден жүктеп алған кезде, құжаттың жергілікті көшірмесін қайта жазу керек.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Құжат тексеріледі, бірақ құжатты қотару немесе ашу мүмкін емес.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Бірдей атауы бар құжат жергілікті файл жүйесінде бар. Дегенмен, файлдың үстіне жазылмайды, ол құжаттың репозиторийде жүктеп алынуын және ашылуын болдырмайды.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Файлды репозиторийден жүктеп алуды қаласаңыз, құжатты репозиторийден жүктеп алған кезде, құжаттың жергілікті көшірмесін қайта жазу керек.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Құжатты жүктеп алу мүмкін емес.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Файлды қадағалау үшін қажетті ${0} ортаның айнымалы мәні осы клиенттік машинада анықталмады.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Мәселені шешу үшін:<br/><br/><ul><li>${0} мәні ортасының айнымалысын, амалдық жүйе ортасының айнымалыларына қосыңыз.</li><li>Веб-клиенттен шығыңыз және веб-шолғышты жабыңыз. Одан кейін, қайтадан кіріңіз.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Құжатты жүктеп алу және файлды қадағалау бағдарламашығы көмегімен қадағалау мүмкін емес.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Файлды қадағалау үшін қажетті ${0} каталогы анықталмады және оны жасау мүмкін емес.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Бұл мәселені шешу үшін, тиісті әрекетті алыңыз:<br/><br/><ul><li>Шолу түймешігін басыңыз және клиенттік машинада басқа каталогты таңдаңыз. Осы параметрді таңдасаңыз, файл қадағаланбайды.</li><li>Жүйе әкімшісіне байланысыңыз және олардан файлдарды қадағалау үшін қолданылатын әртүрлі каталогты көрсетуді сұраңыз. Мысалы, көрсетілген каталог Windows амалдық жүйесі болса, бірақ сіз Mac OS амалдық жүйесін іске қосқан болсаңыз, мұның қажетті болуы мүмкін. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Егер бұл жұмыс үстелі, әртүрлі амалдық жүйесі бар құрылғылардан қатынасатын болса, онда келесі әрекеттерді алу арқылы мәселелердің ықтималдығын азайтасыз:<br/><br/><ul><li>Клиенттік машинадағы сақтау орнын көрсету үшін ортаның айнымалы мәндерін пайдаланыңыз.</li><li>Құрылғының әрбір түрінің пайдаланушылары үшін әртүрлі жұмыс үстелдерін жасаңыз. Мысалы, Windows амалдық жүйесі бар пайдаланушылар үшін жұмыс үстелін және Mac OS амалдық жүйесін бар пайдаланушылар үшін жұмыс үстелін жасаңыз.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Сіздің сұранысыңызды өңдеу мүмкін емес.",
		runtime_file_tracking_generic_error_explanation: "Файлды қадағалау бағдарламашығында қате туындады.",
		runtime_file_tracking_generic_error_userResponse: "Көмек алу үшін жүйе әкімшісімен байланысыңыз.",
		runtime_file_tracking_generic_error_adminResponse: "Java консолін ашыңыз және сұрауды қайтадан жіберіп көріңіз. Қатенің толық деректері Java консолінде көрсетіледі.<br/><br/>Java консоліне, амалдық жүйе үшін Басқару Тақтасынан (Windows) немесе Жүйенің Параметрлерінен (Macintosh) қатынаса аласыз.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Сұрауыңызды өңдеу мүмкін емес",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Келесі файлдар репозиторийге қосылды бірақ жергілікті файл жүйесінен жойылмады: ${0}.Бұл әдетте файлдар ашық немесе басқа бағдарлама арқылы қолданылатын кезде пайда болады. Егер қажет болса, файлдарды қолмен жоя аласыз.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Құжатты жүктеп алу мүмкін емес.",
		runtime_file_tracking_ioexception_error_explanation: "Құжатты жүктеп алу мүмкін емес.",
		runtime_file_tracking_ioexception_userResponse: "Келесі каталогқа жазу үшін сәйкес рұқсаттардың жоқ болуы мүмкін: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Көрсетілген каталог үшін сізде жазу рұқсаттарының болуын қамтамасыз етіңіз. Көрсетілген каталог үшін жазу рұқсаттары болмаса, жүйе әкімшісімен байланысыңыз.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Сіздің сұранысыңызды өңдеу мүмкін емес.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Бұл қате келесі себептерден пайда болуы мүмкін:<br/><br/><ul><li>Сақтау режимінде орындалып жатқан Safari on Mac OS және Java бағдарламасын қолданудасыз.</li><li>Жұмыс үстеліне арналған файлдың бақылау конфигурациясында көрсетілетін каталогқа арналған оқу/жазу рұқсаттарыңыз жоқ.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "IBM Content Navigator бағдарламасын файл бақылауынсыз қолдануды жалғастыра аласыз немесе келесі қадамдарды мәселені шешу үшін аяқтай аласыз:<br/><br/><ol><li>Safari қызметіндегі Java бағдарламасын сақтық емес режімінде іске қосыңыз.</li><li>Егер IBM Content Navigator желі торабын сенімді ету үшін шақырған болсаңыз, бетті жүктеу үшін <b>Сенім</b> үймешігін басыңыз және Safari қызметіндегі сақтық емес режимінде Java бағдарламасын іске қосыңыз.</li></ol><br/><br/>Егер Safari қызметі дұрыс конфигурацияланған болса, мәселені шешу үшін келесі қадамдарды аяқтаңыз:<br/><br/><ol><li>Жұмыс үстеліне арналған файлдың бақылау конфигурациясында көрсетілетін каталогқа арналған оқу/жазу рұқсаттарыңыз бар екеніне көз жеткізіңіз.</li><li>Егер каталогте оқу/жазу рұқсаттарыңыз болмаса, каталогтегі рұқсаттарыңызды өңдеңіз.</li><li>Егер каталогтегі рұқсаттарыңызды өңдей алмасаңыз, әкімші файлдың бақылауына арналып конфигурацияланған каталогты өзгертуі керек немесе конфигурацияланған әртүрлі файл бақылауының каталогын қамтитын жұмыс үстеліне қатынасуды беруі керек.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Сіздің сұранысыңызды өңдеу мүмкін емес.",
		runtime_file_tracking_java__notfound_error_explanation: "Бұл мәселе қатесі әдетте келесі жағдайларда пайда болады:<br/><br/><ul><li>Java Runtime Environment (JRE) ортасы берілмеген немесе жұмыс станциясында іске қосылған.</li><li>Жұмыс бекетіндегі JRE нұсқасы IBM Content Navigator нұсқасымен сыйысымды емес.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "IBM Content Navigator бағдарламасын файлды бақылаусыз пайдалануды жалғастыра аласыз немесе төмендегі қадамдарды мәселені JRE арқылы шешу үшін орындай аласыз:<br/><br/><ol><li>Жұмыс бекетіңізде JRE орнатылғанына көз жеткізіңіз.</li><li>Жұмыс бекетіңіздегі JRE нұсқасы IBM Content Navigator бағдарламасымен аяқталғанына көз жеткізіңіз. Қолдауға ие болған нұсқалардың тізімі <i>IBM Content Navigator бағдарламасына арналған аппараттық құралдар мен бағдарламалық жасақтама алғышарттары</i> құжатында IBM Software Support торабында қамтылған.</li><li>Жұмыс бекетіңізде JRE іске қосылғанына көз жеткізіңіз.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Сіздің сұранысыңызды өңдеу мүмкін емес.",
		runtime_file_tracking_security_error_explanation: "Жұмыс үстеліне арналған файлдың бақылау конфигурациясында көрсетілетін каталогқа арналған оқу/жазу рұқсаттарыңыз жоқ.",
		runtime_file_tracking_security_error_userResponse: "IBM Content Navigator бағдарламасын файл бақылауынсыз қолдануды жалғастыра аласыз немесе келесі қадамдарды аяқтау үшін жүйе әкімшісімен жұмыс жасай аласыз:<ol><li>Жұмыс үстеліне арналған файлдың бақылау конфигурациясында көрсетілетін каталогқа арналған оқу/жазу рұқсаттарыңыз бар екеніне көз жеткізіңіз. </li><li>Егер каталогте оқу/жазу рұқсаттарыңыз болмаса, каталогтегі рұқсаттарыңызды өңдеңіз.</li><li>Егер каталогтегі рұқсаттарыңызды өңдей алмасаңыз, әкімші файлдың бақылауына арналып конфигурацияланған каталогты өзгертуі керек немесе конфигурацияланған әртүрлі файл бақылауының каталогын қамтитын жұмыс үстеліне қатынасуды беруі керек.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Келесі құжаттар жүктеп алынды: ${0}.",

		admin_file_tracking_inline_help: "Файлды бақылау, репозиторийге құжаттардың қосуын және құжаттардың тексерілуін жеңілдетеді. Бұл сонымен қатар, пайдаланушылардың компьютеріндегі құжаттардың қалай сақталып жатқанын басқаруға мүмкіндік береді.<br/><br/>Сонымен қатар, файлды тасымалдау құжаттарды бірнеше IBM Content Navigator құрамдастарда тасымалдануына міндет етеді, мысалы веб тұтынушысы және IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Мәзір идентификаторы келесімен басталмайды \"Default\".  \"Default\" элементі мәзір идентификаторларына арналған алдын ала сақталған префикс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Идентификатор тек әліпбилік сипаттарды ғана қамти алады және үлкен кішілікті ескереді.",
		admin_repository_id_hover: "Репозиторий идентификаторы веб тұтынушы URL мекен-жайларында, мүмкіндіктерінде және электрондық пошта байланыстарында қай репозиторийге кіру керек екенін көрсету үшін қамтылған. Идентификатор бірегей болуы тиіс және репозиторийді сақтағаннан кейін идентификаторды өзгерте алмайсыз.<br><br>Идентификатор тек әліпбилік сипаттарды ғана қамти алады және үлкен кішілікті ескереді.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Ат келесі таңбалардың ешқайсысын қамти алмайды: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Жұмыс үстелі идентификаторы бос орындарды немесе келесі таңбалардың ешқайсысын қамти алмайды: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Жұмыс үстелі аты келесі таңбалардығ ешқайсысын қамти алмайды: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Көрініс аты келесі таңбалардың ешқайсысын қамти алмайды: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Веб тұтынушыдағы пайдаланушыларға көрсету үшін репозиторий атын көрсетіңіз.<br><br>Ат келесі сипаттарды қамти алмайды: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Қосылғыңыз келген Content Manager OnDemand серверінің хост атауын немесе ІР мекен-жайын көрсетіңіз, мысалыserver.id.com.",
		admin_server_p8_name_hover: "Content Engine немесе Content Platform Engine серверінің URL мекен-жайын көрсетіңіз. URL мекен-жайы әріптің үлкен кішілігін ескереді және келесі пішімді иеленеді:<br><br><ul><li>WebSphere Application Server серверінде iiop://host_name:port_number/FileNet/Engine. Негіз орналасымында әдепкі порт саны 2809.</li><li>WebLogic Server серверінде t3://host_name:port_number/FileNet/Engine. Әдепкі порт саны 7001.</li></ul><br><br>Content Engine және Content Platform Engine серверлеріндегі жоғары қол жетімді теңшелімдер үшін cemp: префиксісіз URL мекен-жайының қол жетімді EJB тасымалын қолданыңыз. ",
		admin_server_p8_protocol_hover: "Мазмұн құралымен байланысуды қолдану үшін протоколды көрсетіңіз.",
		admin_server_cm_name_hover: "Content Manager дерекқорының немесе кітапхана сервері байланысы атының жергілікті каталог атын көрсетіңіз. Бұл ICMSERVER айнымасылысы үшін көрсетілген мән аты.",
		admin_repository_cmis_hover: "Қосылғыңыз келетін репозиторийдің идентификаторын көрсетіңіз.  CMIS ортаңыздағы әр бір репозиторийдің идентификаторы AtomPub байланыс қызметі құжатында тізімделген.  <br/><br/><b>Кеңес:</b>Сонымен қатар (*) жұлдызша беогісін бірінші немесе Atompub байланыс қызметі құжатының жалғыз репозиторийіне қосылу үшін енгізе аласыз.",
		admin_url_cmis_hover: "URL мекен-жайының пішімі қызмет провайдері арқылы әр түрлі болады. CMIS құжатыңызды қараңыз немесе URL мекен-жайы үшін әкімшіңізбен хабарласыңыз.",
		admin_repcfg_cmis_status_columns_hover: "Белгілерді көргіңіз келген элемент күйлерін көріңіз. Мазмұн тізіміндегі құжаттардың жанында көрсетілген күй элементтері.",
		admin_port_hover: "Content Manager OnDemand сервері тындайтын TCP/IP порт санын көрсетіңіз. Әдепкі мән 1445.",
		admin_unified_searches_hover: "Осы репозиторийдегі айқас репозиторий іздеулерін сақтау үшін қабілетті болатын пайдаланушыларды көрсетіңіз.<br/><br/>Егер осы опцияны іске қоспасаңыз, пайдаланушылар осы репозиторийге қарсы орындалатын айқас репозиторий іздеулерін әлі де құра алады. Пайдаланушылардыжұмыс үстелі деңгейіндегі айқас репозиторийлі іздеулерді құрудан алдын ала аласыз.<br/><br/>Егер айқас репозиторий іздеулерін іске қоссаңыз, IBM Content Navigator бағдарламасы репозитоийдегі айқас репозиторий іздеуінің дерек үлгісін құрады.<br/><br/>IBM FileNet Content Manager бағдарламасы үшін репозиторийге Content Еngine әкімшісі ретінде осы опцияны іске қоспас бұрын қосылуыңыз тиіс.",
		admin_unified_searches_cm_hover: "Осы репозиторийдегі айқас репозиторий іздеулерін сақтау үшін қабілетті болатын пайдаланушыларды көрсетіңіз.<br/><br/>Егер осы опцияны іске қоспасаңыз, пайдаланушылар осы репозиторийге қарсы орындалатын айқас репозиторий іздеулерін әлі де құра алады. Пайдаланушылардыжұмыс үстелі деңгейіндегі айқас репозиторийлі іздеулерді құрудан алдын ала аласыз.<br/><br/>Егер айқас репозиторий іздеулерін іске қоссаңыз, IBM Content Navigator бағдарламасы репозитоийдегі айқас репозиторий іздеуінің дерек үлгісін құрады.",
		admin_max_results_hover: "Іздеу арқылы қайтарылған нәтижелердің санын шектеуді көрсетіңіз. Егер сіз іздеу нәтижелерінің санын шектемесеңіз, онда егер іздеу нәтижелердің үлкен санын қайтарсы, теңшелім мәселелеріне жолығуыңыз мүмкін.",
		admin_timeout_hover: "Секунд бойынша іздеу репозиторийда қаншалықты ұзақ орындалатынын көрсетіңіз. Егер іздеу көрсетілген уақытта аяқтамаса, веб тұтынушы талаптан бас тартады. Ұсынылған ең көп уақыт – 60 секунд.",
		admin_object_store_hover: "Content Engine серверінде қосылғыңыз келген нысан сақатуын көрсетіңіз. Content Platform Engine әкімші консолінен таңба атын ала аласыз.",
		admin_object_store_display_name_hover: "Нысан қоймасының көрсетілім аты егер сіз IBM FileNet P8 жұмыс ағымдарын қолданғыңыз келсе талап етіледі. Content Platform Engine әкімші консолінен нысан қоймасының көрініс атын ала аласыз.",
		admin_all_searches_hover: "<b>Барлық іздеулер</b> астында көрсетілген іздеулердің санын пайдаланушылар репозиторийде іздеген кезде шектеу үшін көрсетіңіз. Егер іздеулердің санын шектемесеңіз, репозиторий сақталған іздеулердің үлкен санын қамтыған кезде теңшелім мәселелеріне жолығасыз.",

		admin_text_desktop: "Жұмыс үстелі",
		admin_text_repository: "Репозиторий",
		admin_text_plugin: "Қосылатын модуль",
		admin_text_theme: "Тақырып",
		admin_text_menu: "Мәзір",
		admin_text_reason_code: "Редакция себебі",
		admin_text_redactions: "Редакциялар",
		admin_text_viewer_mapping: "Қарау құралы салыстырмасы",
		admin_text_mobile_feature: "Мобильді мүмкіндік",
		admin_test_interface_text: "Теңшелім мәтіні",
		admin_text_interface_text_locale: "Жергіліктендірілген теңшелім мәтіні",
		admin_text_icon_status: "Күй белгісі",
		admin_text_icon: "Белгіше",
		admin_text_file_type: "Файл түрі",
		admin_text_viewer: "Қарау құралы",
		admin_text_desktop_access: "Жұмыс үстелі қатынасы",
		admin_text_mapped_properties_for_office: "Microsoft Office бағдарламасына арналған салыстырылған сипаттар",
		admin_text_desktop_features: "Жұмыс үстелі мүмкіндіктері",
		admin_text_unknown: "Белгісіз",
		admin_folder_instruction: "Пайдаланушылар шарлау кезінде мазмұн тізіміндегі құжаттар мен қалталар үшін көрсетілген сипаттарды көрсетіңіз. Сіз сонымен қатар сипаттар көрсетілген ретті көрсете аласыз.",
		admin_search_instruction: "Пайдаланушылар іздеуді құратын кезде, қандай опциялар әдепкі арқылы таңдалғанын көрсетіңіз.",
		admin_repository_office_conf_class_instruction: "IBM Content Navigator for Microsoft Office бағдарламасын ортаңыздағы тұтынушы компьютеріңізде орнатсаңыз, онда құжаттардың осы репозиторийге қосылған не тексерілген кезде қалай орындалатынын көрсете аласыз.",
		admin_repository_office_conf_instruction: "Microsoft Office құжат сипаттарын осы репозиторийде анықталған сипаттарымен салыстырыңыз.<br/><br/>Сипаттарды салыстыру осы репозиторий байланыстырылған жұмыс үстеліне қосылған кезде, Microsoft Office бағдарламасына орнатылған сипаттар пайдаланушы құжатты IBM Content Navigator for Microsoft Office бағдарламасынан қосқан кезде репозиторийдегі сипаттарды жасау үшін қолданылады.",
		admin_repository_office_conf_prop_mapping_title: "Сипатты салыстыру",
		admin_repository_office_conf_prop_mapping_title1: "MS Office біріктірілімі",
		admin_office_conf_instruction: "IBM Content Navigator бағдарламасы Microsoft Office бағдарламаларын IBM Content Navigator for Microsoft Office түрі тұтынушы компьютерлерінде орнатылған кезде қалай біріктіретіретінін бақылайды<br /><br /><b>Маңызды:</b> Егер <b>Office сипаттарын салыстыру…</b> таңдасаңыз, сіз сонымен қатар сипат салыстырмасын осы жұмыс үстелімен байланыстырылған әр бір репозиторий үшін теңшей аласыз. <b>Office сипаттары</b> қойындысыныдағы сипат салыстырмасын ортаңыздағы әр бір репозиторий үшін теңшей аласыз.",
		admin_desktop_workflows_instruction: "<b>IBM FileNet P8 жүйелері ғана:</b> Қай бағдарлама бос орындарының осы жұмыс үстелінде көрсетілгенін көрсетіңіз. Таңдалған бағдарламалар бос орынларының реті бағдарлама бос орындары веб тұтынушыдағы ретте анықтайды.<br><br><b>Кеңес:</b> Бағдарлама бос орындарының көрініс атын әкімші құралының <b>Белгілер</b> бөліміндегі жаңа аттарды көрсету арқылы өзгерте алады.",
		admin_search_filtered_properties_instruction: "Пайдаланушылар іздей алатын сипаттарды көрсетіңіз. Пайдаланушылардың іздеуін қаламайтын кез келген сипаттарды жасыра аласыз.",
		admin_search_filtered_operators_instruction: "Пайдаланушылар арнайы дерек түрінде іздейтін қол жетімді болатын амалдағыштарды көрсетеді, мысалы дерек немесе біріктіруші. Пайдаланушылардың таңдауын қаламайтын кез келген амалдағыштарды жасыруға болады.",
		admin_search_default_search_results_instruction: "Іздей нәтижелеріндегі құжаттар мен қалталар үшін көрсетілген сипаттарды көрсету. Іздеу нәтижелерінде пайда болуын қаламайтын кез келген сипаттарды жасыра аласыз.",
		admin_search_default_search_results_p8_cmis_instruction: "Іздеу нәтижелерінде құжаттар үшін көрсетілетін сипаттарды көрсетіңіз. Нәтижелерде пайда болуын қаламайтын кез келген сипаттарды жасыра аласыз.",

		admin_datetimeOp: "Күн уақыты",
		admin_floatOp: "Қалқымалы нүкте саны",
		admin_integerOp: "Бүтін сан",
		admin_stringOp: "Жол",
		admin_binaryOp: "Екілік",
		admin_objectOp: "Нысан",
		admin_idOp: "Идентификатор",
		admin_userOp: "Пайдаланушы",
		admin_booleanOp: "Логикалық өрнек",

		admin_string: "Жол",
		admin_long: "Ұзын",
		admin_date: "Күн",
		admin_double: "Қос",
		admin_object: "Нысан",
		admin_guid: "GUID",
		admin_boolean: "Логикалық өрнек",

		admin_repcfg_heading: "Осы репозиторийдің әдепкі тәртібін теңшеу параметрлерін орнату арқылы қайта жаза аласыз.",
		admin_repcfg_heading_od: "Осы репозиторийдің әдепкі тәртібін теңшеу параметрлерін орнату арқылы қайта жаза аласыз.<br /><br /><b>Маңызды:</b> Веб тұтынушыны Content Manager OnDemand бағдарламасымен қолдану үшін, <b>Content Manager OnDemand</b> қойындысында <b>Параметрлер</b> астында қамтылған параметрлер үшін мәндерді көрсете аласыз, ол сіз қосылған барлық Content Manager OnDemand репозиторийлер үшін қабылданады.",
		admin_repcfg_teamspaces: "Топ аймағын басқару:",
		admin_repcfg_enable: "Іске қосу",
		admin_repcfg_disable: "Ажырату",

		admin_repcfg_deliver_redacted_pdf_files_as: "Редакцияланған PDF файлдары келесідегіндей жеткізіледі:",
		admin_repcfg_burn_pdf_to_pdf: "PDF файлдары",
		admin_repcfg_burn_pdf_to_tiff: "TIFF файлдары",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Рөл негізіндегі редакцияларды пайдалану арқылы редакцияланатын PDF файлы әртүрлі файл піішіміне клиентке жеткізіледі. Файл пішімі өзгертілетін кезде, файл кеңейтімі және MIME түрі де өзгереді.<br><br>Мысалы, PDF файлы TIFF файлы сияқты жеткізілетін кезде, файл кеңейтімі .tiff түріне өзгереді.",
		admin_repcfg_redaction_allow_merge_and_split: "Рөлдерге негізделген редакцияларға ие беттерді біріктіру және бөлшектеуге пайдаланушыларға рұқсат ету",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Рөлдерге негізделген редакцияларға ие беттерді біріктіру және бөлшектеуге пайдаланушыларға рұқсат ету үшін бұл опцияны таңдаңыз. Редация өңдеушілері емес пайдаланушылар рөлдерге негізделген редацияларын өңдеу және егер бұл опция қосылған жағдайда да біріктірілген құпия деректерге қатынас орнатылмаған.",
		admin_repcfg_modify_teamspace_roles: "Иеленушылерге бар топ бос орындарының рөлдерін өндеуге рұқсат береді",
		admin_repcfg_tm_delete_teamspace: "Мазмұнды қоса отыра, иелеріне топ аймағын жоюды іске қосады",
		admin_repcfg_tm_delete_teamspace_id_missing: "Репозиторий әкімшісінің пайдаланушы атын көрсетуіңіз керек.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Репозиторий әкімшісінің құпия сөзін көрсетуіңіз керек.",
		admin_repcfg_teamspace_display_Recent: "Тек қана жуырда өзгертілген топ аймақтарын көрсету ",
		admin_repcfg_teamspace_display_Recent_value: "Соңғы өзгертілгеннен кейінгі күндер:",

		admin_repcfg_folder_selector: "Түбір қалтасы:",
		admin_repcfg_enable_folder_selector: "Іске қосу",
		admin_repcfg_disable_folder_selector: "Ажырату",
		admin_repcfg_SSO: "Жалғыз қосылу модулі:",
		admin_repcfg_teamspace_template_permission_text: "Топ аймағының үлгі құрушыларын тағайындаңыз:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Топ аймағының үлгісін құратын топтар мен пайдаланушыларды көрсетіңіз. Пайдаланушылар мен топтарға, ұсынылған сыныптар мен қалталарда тиісті қауіпсіздік параметрлері берілген. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Көбірек біліңіз</a><br/><br/><b>Ұсыныс:</b> Топтарды, топ аймағының басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Топ аймағының үлгісін құратын топтар мен пайдаланушыларды көрсетіңіз. Пайдаланушылар тиісті ACLs тізіміне қосылды және ұсынылған артықшылықтар берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Көбірек біліңіз</a><br/><br/><b>Ұсыныс:</b> Топтарды, топ аймағының басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_teamspace_permission_text: "Топ аймағының рөлдерін тағайындаңыз:",
		admin_repcfg_teamspace_permission_hover_p8: "Топ аймақтарын құратын және топ аймақтарын қолданатын, топтарды немесе пайдаланушыларды көрсетіңіз. Пайдаланушыларға ұсынылған сыныптар мен қалталарда тиісті қауіпсіздік параметрлері берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Көбірек біліңіз</a><br/><br/><b>Ұсыныс:</b> Топтарды, топ аймағының басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_teamspace_permission_hover_cm: "Топ аймақтарын құратын және топ аймақтарын қолданатын, топтарды немесе пайдаланушыларды көрсетіңіз. Пайдаланушылар тиісті ACLs тізіміне қосылды және ұсынылған артықшылықтар берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Көбірек біліңіз</a><br/><br/><b>Ұсыныс:</b> Топтарды, топ аймағының басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_entry_template_permission_text: "Енгізу үлгісінің рөлдерін тағайындаңыз:",
		admin_repcfg_entry_template_permission_hover_p8: "Енгізу үлгілерін құратын және енгізу үлгілерін қолданатын, топтар мен пайдаланушыларды көрсетіңіз. Енгізу Үлгісі құжатының сыныбында, пайдаланушыларға тиісті қауіпсіздік параметрлері берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Көбірек біліңіз</a><br/><br/><b>Ұсыныс:</b> Топтарды, енгізу үлгісінің басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_entry_template_permission_hover_cm: "Енгізу үлгілерін құратын және енгізу үлгілерін қолданатын, топтар мен пайдаланушыларды көрсетіңіз. Пайдаланушылар тиісті ACLs тізіміне қосылды және ұсынылған артықшылықтар берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Көбірек біліңіз</a><br /><br /><b>Ұсыныс:</b> Топтарды, енгізу үлгісінің басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_office_template_permission_text: "Үлгі рөлдерін тағайындау:",
		admin_repcfg_office_template_permission_hover_cm: "Microsoft Office Online немесе Edit Service қызметтерінін үлгілерін жасауға, өңдеуге және пайдалануға болатын топтарды немесе пайдаланушыларды көрсетіңіз. Пайдаланушылар тиісті ACLs тізіміне қосылды және ұсынылған артықшылықтар берілді.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a><br /><br /><b>Ұсыныс:</b> Microsoft Office Online немесе Edit Service қызметтерінің үлгісін басқаруын оңайлату үшін топтарды пайдаланыңыз.",
		admin_repcfg_draft_permission_text: "Жоба рөлдерін тағайындау:",
		admin_repcfg_draft_permission_hover_cm: "Бірлескен өңдеу кезінде Microsoft Office Online немесе Edit Service қызметінін құжаттар жобаларын жасайтын топтарды немесе пайдаланушыларды көрсетіңіз. Microsoft Office Online немесе Edit Service қызметінін құжаттарын бірлесіп өңдеуге қажет болған пайдаланушы жобаларды жасау үшін тиісті артықшылықтарға ие болуы керек. Пайдаланушылар тиісті ACLs тізіміне қосылды және ұсынылған артықшылықтар берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a><br /><br /><b>Ұсыныс:</b> Жоба басқармасын оңайлату үшін топтарды қолданыңыз.",
		admin_repcfg_search_permission_text: "Іздеу рөлдерін тағайындаңыз:",
		admin_repcfg_search_permission_hover_p8: "Сақталған іздеулерді немесе репозиторий аралық іздеулерді құратын және қолданатын, топтар мен пайдаланушыларды көрсетіңіз. Пайдаланушыларға ұсынылған сыныптарда тиісті қауіпсіздік параметрлері берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Көбірек біліңіз</a><br /><br /><b>Ұсыныс:</b> Топтарды, іздеу басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_search_permission_hover_cm: "Сақталған іздеулерді және репозиторий аралық іздеулерді құратын, өңдейтін немесе қолданатын топтар мен пайдаланушыларды көрсетіңіз. Пайдаланушылар тиісті ACLs тізіміне қосылды және ұсынылған артықшылықтар берілді. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Көбірек біліңіз</a><br /><br /><b>Ұсыныс:</b> Топтарды, іздеу басқаруын оңайлату үшін қолданыңыз.",
		admin_repcfg_search_permission_title: "Рөлдерді Іздеу",
		admin_repcfg_search_permission_intro_text: "Пайдаланушыларда, рөлдерді қолдайтын жұмыс үстеліне қатынасы бар екеніне көз жеткізіңіз. Мысалы, жасаушыларда іздеулерді және репозиторий аралық іздеулерді құруға рұқсат ететін жұмыс үстеліне қатынасы бар екеніне көз жеткізіңіз.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Топ аймағы үлгісінің әкімшісі, репозиторийдегі (нысан қоймасы) <b>Толық Қадағалауға</b> рұқсаттары бар пайдаланушылар болып табылады. Әкімші құралынан топ аймағы үлгісінің әкімшілер тізімін өзгерте алмайсыз. <p>Топ аймағы үлгісінің әкімшілері, әрбір топ аймағының үлгісін жояды және өзгерте алады. Топ аймағының үлгісін құратын пайдаланушылар, үлгіні топ аймағы үлгісінің әкімшісімен бөлісуді қажет етпейді.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Пайдаланушыны немесе топтарды, топ аймағы үлгісінің жасаушысы сияқты тағайындаған кезде, репозиторийде тиісті қауіпсіздігі берілген пайдаланушылар мен топтар, топ аймағының үлгілерін құрады. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Көбірек біліңіз</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Әкімшілер мен құрушылармен байланыстырылған артықшылықтардан басқа байланыстырылған пайдаланушылар мен топтар.<p>Осы пайдаланушылар мен топтарды топ аймағы үлгісін құрушыларына Басқалар рөлінен жою арқылы және содан кейін оларды топ аймағы үлгісін құрушылар ретінде байланыстырудан кейін жылжыта аласыз.<p>IBM Administration Console for Content Engine бағдарламасын пайдалану арқылы осы пайдаланушылар мен топтар үшін ағымда берілген артықшылықтарды қайта қарай аласыз.",
		admin_repcfg_teamspace_administrators_hover_p8: "Топ аймағының әкімшілері, репозиторийде (нысан қоймасы) <b>Толық Қадағалауға</b> рұқсаттары бар пайдаланушылар болып табылады. Әкімші құралынан, топ аймағы әкімшілерінің тізімін өзгерте алмайсыз.<p>Топ аймағының әкімшілері, әрбір топ аймағын жояды және өзгерте алады. Топ аймағын құратын пайдаланушылар, үлгіні топ аймағының әкімшілерімен бөлісуді қажет етпейді.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Пайдаланушыны немесе топты топ аймағының жасаушысы сияқты тағайындасаңыз, топ аймағын құру үшін, репозиторийде тиісті қауіпсіздік пайдаланушыға немесе топқа беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Көбірек біліңіз</a>",
		admin_repcfg_teamspace_user_hover_p8: "Пайдаланушыны немесе топты топ аймағының пайдаланушысы сияқты тағайындасаңыз, топ аймағын қолдану үшін, пайдаланушы немесе топқа репозиторийде тиісті қауіпсіздік беріледі. Дегенмен, пайдаланушы топ аймағына қатынасу үшін топ аймағының мүшесі болуы керек. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Көбірек біліңіз</a><p><b>Кеңес:</b> Егер ортаңыздағы барлық пайдаланушылар топ аймағын көруге қол жетімді болғанын қаласаңыз, топ аймағы пайдаланушысының рөліне #ТІРКЕЛГЕН-ПАЙДАЛАНУШЫЛАРДЫҢ жалған-тіркелгісін қоса аласыз.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Әкімшілер, құрушылар мен пайдаланушылармен байланыстырылған артықшылықтардан басқа байланыстырылған пайдаланушылар мен топтар.<p>Осы пайдаланушылар мен топтарды алдын ала анықталған рөлдерде Басқалар рөлінен жою арқылы және содан кейін оларды топ аймағы үлгісін құрушылар ретінде байланыстырудан кейін жылжыта аласыз.<p>IBM Administration Console for Content Engine бағдарламасын пайдалану арқылы осы пайдаланушылар мен топтар үшін ағымда берілген артықшылықтарды қайта қарай аласыз.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Енгізу үлгісінің әкімшісі, репозиторийдегі (нысан қоймасы) <b>Толық Қадағалауға</b> рұқсаттары бар пайдаланушылар болып табылады. Енізу үлгісі әкімшілерінің тізімін, әкімші құралынан өзгерте аласыз. <p>Енгізу үлгісі әкімшілері, әрбір енгізу үлгісін жояды және өзгерте алады. Енгізу үлгісін құратын пайдаланушы, үлгіні енгізу үлгісінің әкімшілерімен бөлісуді қажет етпейді.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Пайдаланушыны немесе топты енгізу үлгісінің жасаушысы сияқты тағайындаған кезде, енгізу үлгілерін құру үшін, пайдаланушы мен топқа репозиторийде тиісті қауіпсіздік беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Көбірек біліңіз</a>",
		admin_repcfg_entry_template_user_hover_p8: "Пайдаланушыны немесе топты енгізу үлгісінің пайдаланушысы сияқты тағайындаған кезде, енгізу үлгісін қолдану үшін, пайдаланушы мен топқа репозиторийде тиісті қауіпсіздік беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Көбірек біліңіз</a><p><b>Кеңес:</b> Егер ортаңыздағы барлық пайдаланушылар енгізу үлгісін қолдануға қол жетімді болғанын қаласаңыз, енгізу үлгісінің пайдаланушы рөліне #ТІРКЕЛГЕН-ПАЙДАЛАНУШЫЛАРДЫҢ жалған-тіркелгісін қоса аласыз.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Әкімшілер, құрушылар мен пайдаланушылармен байланыстырылған артықшылықтардан басқа байланыстырылған пайдаланушылар мен топтар.<p>Осы пайдаланушылар мен топтарды алдын ала анықталған рөлдерде Басқалар рөлінен жою арқылы және содан кейін оларды енгізілім үлгісі рөлдерін құрушылар ретінде байланыстырудан кейін жылжыта аласыз.<p>IBM Administration Console for Content Engine бағдарламасын пайдалану арқылы осы пайдаланушылар мен топтар үшін ағымда берілген артықшылықтарды қайта қарай аласыз.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Пайдаланушыны немесе топты топ аймағы үлгісінің жасаушысы сияқты тағайындаған кезде, репозиторийде топ аймағының үлгісін құру үшін пайдаланушы немесе топқа тиісті артықшылықтар беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Көбірек біліңіз</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Пайдаланушыны немесе топты топ аймағының жасаушысы сияқты тағайындаған кезде, репозиторийде топ аймағын құру үшін, пайдаланушыға немесе топқа тиісті артықшылықтар беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Көбірек біліңіз</a>",
		admin_repcfg_teamspace_user_hover_cm: "Пайдаланушыны немесе топты топ аймағының пайдаланушысы сияқты тағайындаған кезде, репозиторийде топ аймағын қолдану үшін, пайдаланушы мен топқа тиісті артықшылықтар беріледі. Дегенмен, пайдаланушы топ аймағына қатынасу үшін топ аймағының мүшесі болуы керек. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Көбірек біліңіз</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Пайдаланушы немесе топ енгізу үлгісінің жасаушысы сияқты тағайындалған кезде, репозиторийде енгізу үлгілерін құру үшін, пайдаланушыға немесе топқа тиісті артықшылықтар беріледі. <br/><br/>Дегенмен, көрсетілген енгізу үлгісі үшін қауіпсіздік параметрлері, пайдаланушы немесе топтың енгізу үлгісінде ие болатын артықшылықтарын анықтайды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Көбірек біліңіз</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Пайдаланушыны немесе топты енгізу үлгісінің өңдегіші сияқты тағайындаған кезде, репозиторийде енгізу үлгілерін өзгерту үшін пайдаланушыға немесе топқа артықшылықтар беріледі. <br/><br/>Дегенмен, көрсетілген енгізу үлгісі үшін қауіпсіздік параметрлері, пайдаланушы немесе топтың енгізу үлгісінде ие болатын артықшылықтарын анықтайды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Көбірек біліңіз</a>",
		admin_repcfg_entry_user_hover_cm: "Пайдаланушыны немесе топты енгізу үлгісінің пайдаланушысы сияқты тағайындаған кезде, репозиторийде енгізу үлгілерін қолдану үшін, пайдаланушыға немесе топқа тиісті артықшылықтар беріледі. <br/><br/>Дегенмен, көрсетілген енгізу үлгісі үшін қауіпсіздік параметрлері, пайдаланушы немесе топтың енгізу үлгісінде ие болатын артықшылықтарын анықтайды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Көбірек біліңіз</a>",
		admin_repcfg_office_template_creators_hover_cm: "Пайдаланушыны немесе топты Microsoft Office Online немесе Edit Service қызметінін үлгілерін жасаушы ретінде тағайындаған кезде пайдаланушы немесе топқа репозиторийде үлгі файлдарын жасау үшін тиісті артықшылықтар беріледі. <br/><br/>Дегенмен, көрсетілген үлгі файлы үшін қауіпсіздік параметрлері, пайдаланушы немесе топтың үлгісінде ие болатын артықшылықтарын анықтайды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a>",
		admin_repcfg_office_template_editors_hover_cm: "Пайдаланушыны немесе топты Microsoft Office Online немесе Edit Service қызметінің үлгісін өңдегіші ретінде тағайындағанда, пайдаланушы немесе топқа репозиторийде үлгі файлдарын өзгертуге тиісті артықшылықтар беріледі.  <br/><br/>Дегенмен, көрсетілген үлгі файлы үшін қауіпсіздік параметрлері, пайдаланушы немесе топтың үлгісінде ие болатын артықшылықтарын анықтайды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a>",
		admin_repcfg_office_template_user_hover_cm: "Пайдаланушыны немесе топты Microsoft Office Online немесе Edit Service үлгісін пайдаланушы ретінде тағайындағанда, пайдаланушыға немесе топқа веб-клиенттен жаңа Office Online немесе Edit Service қызметті өңдеу құжатын жасаған кезде үлгіні қолдану үшін тиісті артықшылықтар беріледі.  <br/><br/>Дегенмен, көрсетілген үлгі файлы үшін қауіпсіздік параметрлері, пайдаланушы немесе топтың үлгісінде ие болатын артықшылықтарын анықтайды.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a>",
		admin_repcfg_draft_creators_hover_cm: "Microsoft Office Online немесе Өңдеу қызметінде құжаттарды бірлесіп өңдеу қажет болған кез келген пайдаланушыларға осы рөл тағайындалады. Пайдаланушыларды өңдеуші немесе пайдаланушы рөлдеріне тағайындамаңыз. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a>",
		admin_repcfg_draft_editors_hover_cm: "Microsoft Office Online немесе өңдеу қызметін құжаттарды бірлесіп өңдеу қажет болған кез келген пайдаланушылар <b>жасаушы</b> рөліне тағайындалуы керек. Егер пайдаланушы өңдеуші рөліне тағайындалған болса, онда олар біріктіруші өңдеуі үшін сұралған жобаларды құра алмайды.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a>",
		admin_repcfg_draft_user_hover_cm: "Microsoft Office Online немесе өңдеу қызметін құжаттарды бірлесіп өңдеу қажет болған кез келген пайдаланушылар <b>жасаушы</b> рөліне тағайындалуы керек. Егер пайдаланушы рөліне тағайындалған болса, онда олар біріктіруші өңдеуі үшін сұралған жобаларды құра алмайды.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Көбірек біліңіз</a>",		
		admin_repcfg_search_others_hover_p8: "Әкімшілер, құрушылар мен пайдаланушылармен байланыстырылған артықшылықтардан басқа байланыстырылған пайдаланушылар мен топтар.<p>Осы пайдаланушылар мен топтарды алдын ала анықталған рөлдерде Басқалар рөлінен жою арқылы және содан кейін оларды іздеу рөлдерін құрушылар ретінде байланыстырудан кейін жылжыта аласыз.<p>IBM Administration Console for Content Engine бағдарламасын пайдалану арқылы осы пайдаланушылар мен топтар үшін ағымда берілген артықшылықтарды қайта қарай аласыз.",		
		admin_repcfg_search_admins_hover_p8: "Іздеу әкімшілері, репозиторийде (нысан қоймасы) <b>Толық Қадағалауға</b> рұқсаттары бар пайдаланушылар болып табылады. Іздеу әкімшілерінің тізімін, әкімші құралынан өзгерте алмайсыз. <br /><br />Іздеу әкімшілері, әрбір іздеуді жояды және өзгерте алады. Іздеуді құратын пайдаланушы іздеуді, іздеу әкімшілерімен бөлісуді қажет етпейді.",
		admin_repcfg_search_creators_hover_p8: "Пайдаланушыны немесе топты іздеу жасаушысы сияқты тағайындаған кезде, репозиторийде іздеулерді құру үшін, пайдаланушы мен топқа тиісті қауіпсіздік беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Көбірек біліңіз</a>",
		admin_repcfg_search_user_hover_p8: "Пайдаланушыны немесе топты іздеу пайдаланушысы сияқты тағайындаған кезде, репозиторийде <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Көбірек Білу</a> іздеулерін қолдану үшін, пайдаланушы мен топқа тиісті қауіпсіздікті береді<br /><br /><b>Кеңес:</b> Егер ортаңыздағы барлық пайдаланушылар іздеулерді қолдануға қол жетімді болғанын қаласаңыз, іздеу пайдаланушысының рөліне #ТІРКЕЛГЕН-ПАЙДАЛАНУШЫЛАРДЫҢ жалған-тіркелгісін қоса аласыз.<br/><br />Әдепкіде, іздеу пайдаланушысы іздеулер мен репозиторий аралық іздеулерді құра алады бірақ іздеулерді сақтамайды. Келесі опциялар, таңдалатын жұмыс үстелін қолдану арқылы іздеуді құрудан, іздеудің пайдаланушыларына тыйым салады:<ul><li><b>Пайдаланушыларды іздеулерді құрудан қорғау</b></li><li><b>Пайдаланушыларды айқас репозиторийлі іздеулерді құрудан алдын алу</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Пайдаланушы немесе топты іздеу жасаушысы сияқты тағайындаған кезде, репозиторийде іздеулерді және репозиторий аралық іздеулерді құру және сақтау үшін, пайдаланушыға немесе топқа тиісті артықшылықтар беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Көбірек біліңіз</a><br /><br /><b>Маңызды:</b> Іздеу жасаушыларының, келесі опциялар таңдалмайтын жұмыс үстелін қоланатынына көз жеткізіңіз:<ul><li><b>Пайдаланушыларды іздеулерді құрудан қорғау</b></li><li><b>Пайдаланушыларды айқас репозиторийлі іздеулерді құрудан алдын алу</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Пайдаланушыны немесе топты іздеу өңдегіші сияқты тағайындаған кезде, пайдаланушы мен топқа бар іздеулерді және репозиторий аралық іздеулерді өзгерту үшін, тиісті артықшылықтар беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Көбірек біліңіз</a><br /><br /><b>Кеңес:</b> Әдепкіде, іздеу өңдегіші іздеулерді және репозиторий аралық іздеулерді құрады бірақ іздеулерді сақтамайды. Келесі опциялар таңдалатын жұмыс үстелін қолдану арқылы іздеуді құрудан, іздеудің өңдегішіне тыйым салады:<ul><li><b>Пайдаланушыларды іздеулерді құрудан қорғау</b></li><li><b>Пайдаланушыларды айқас репозиторийлі іздеулерді құрудан алдын алу</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Пайдаланушыны немесе топты іздеу пайдаланушы сияқты тағайындаған кезде, сақталған іздеулер мен репозиторий аралық іздеулерді орындау және ашу үшін, пайдаланушы мен топқа тиісті артықшылықтар беріледі. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Көбірек біліңіз</a><br /><br /><b>Кеңес:</b> Әдепкіде, іздеу пайдаланушысы іздеулер мен репозиторий аралық іздеулерді құрады бірақ іздеулерді сақтамайды. Келесі опциялар, таңдалатын жұмыс үстелін қолдану арқылы іздеуді құрудан, іздеудің пайдаланушыларына тыйым салады:<ul><li><b>Пайдаланушыларды іздеулерді құрудан қорғау</b></li><li><b>Пайдаланушыларды айқас репозиторийлі іздеулерді құрудан алдын алу</b></li></ul>",
		admin_repcfg_db_encoding: "Сервер дерекқоры таңбасын шифрлау:",
		admin_repcfg_db_encoding_hover: "IBM Content Manager Сервер дерекқоры таңбасын шифрлау - UTF-8.",
		admin_repcfg_db_encoding_specify: "Дерекқор таңбасын шифрлауды көрсету",
		admin_repcfg_db_encoding_utf8: "UTF-8 шифрлау",
		admin_repcfg_db_encoding_utf8_hover: "UTF-8 шифрланған дерекқорын қолдансаңыз, осы параметрді көрсетіңіз. IBM Content Navigator элемент сипаты мәнінің жолдарының ұзындығын тексеру үшін UTF-8 шифрлауын қолданады.",
		admin_repcfg_db_encoding_other: "Басқа шифрлау",
		admin_repcfg_db_encoding_other_hover: "UTF-8 емес шифрлау бар дерекқорды қолдансаңыз, осы параметрді көрсетіңіз. IBM Content Navigator элемент сипаты мәні жолдарының ұзындығын тексеру үшін таңба есебін қолданады.",
		admin_repcfg_language_codes: "Сервердің тіл кодтары:",
		admin_repcfg_language_codes_avail: "Қол жетімді",
		admin_repcfg_language_codes_sel: "Таңдалған",
		admin_repcfg_pdf_conversion: "MIME түрлері PDF құжаттарын тіркемелерде түрлендіру үшін арналған:",
		admin_repcfg_pdf_conversion_avail: "Қол жетімді",
		admin_repcfg_pdf_conversion_sel: "Таңдалған",

		admin_repcfg_box_share_enable_classes_label: "Box бағдарламасын бөлісу қолдауын өзгертуге арналған сыныптар:",
		admin_repcfg_box_share_enable_classes_hover: "Элемент ортақ пайдаланылатын кезде Box ішіндегі файлдың Идентификаторын сақтауға арналған класты өзгерте аласыз.",
		admin_repcfg_box_share_enable_classes_warning: "Маңызды: Сіз көрсеткен кез келген сыныптар Box бағдарламасына бөлісуді қолдау үшін өзгертіледі. Өзгертулерді сақтағаннан кейін, өзгертулерді сыныптардан жою мүмкін емес.<br><br>Сыныптарды өзгерту үшін, кітапхана серверінің әкімшісі сияқты репозиторийге қосылуыңыз керек.",
		admin_repcfg_box_share_enable_classes_available: "Қол жетімді класстар",
		admin_repcfg_box_share_enable_classes_selected: "Таңдалған класстар",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Қойма Box бағдарламасын бөлісу идентификаторы",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Бұл сынып Box бағдарламасын бөлісу идентификаторын сақтау үшін әлдеқашан өзгертілген. Бұл параметрді жою мүмкін емес.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Осы сыныпты өзгертіңіз, осылайша ол элемент бөліскен кезде, Box бағдарламасындаға файлдың идентификаторын сақтайды.",

		admin_repcfg_redaction: "Рөлге негізделген редакциялар:",
		admin_repcfg_enable_redaction_hover: "Осы репозиторийдегі құжаттарға рөлге негізделген редакцияларды қолдануды қалаған кезде көрсетіңіз.<br/><br/>Рөлге негізделген редакциялар құжат жүктеліп, басылып, қараушы арқылы шығарылып немесе нобай ретінде көрсетілген кезде қабылданады. Құжаттың өз рөлдеріне және бағдарлама редакциясының саясаттарына тәуелді болған кезде пайдаланушылар нені көреді.",

		admin_repcfg_redaction_policy_permission_text: "Саясат өңдеушілерін тағайындаңыз:",
		admin_repcfg_redaction_policy_editors_hover: "Редакция саясаттары мен редакция рөлдерін құрып, өңдеп және жоя алатынын пайдаланушылар мен топтарын таңдаңыз.",
		admin_repcfg_redaction_policy_editors_select_hover: "Редакцияның саясат өңдеушілері Редакция саясаттары мен редакция рөлдерін құрып, өңдеп және жоя алады.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Редакция саясатының әкімшілері редакция саясаты өңдеушілерін тағайындай алады.<br/><br/>ІBM Administration Console бағдарламасын Content Engine қызметі үшін қолдану арқылы редакцияның саясат әкімшілері тізімін өзгерте аласыз.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Редакция саясатының әкімшілері редакция саясаты өңдеушілерін тағайындай алады.<br/><br/>IBM Content Manager жүйе әкімшісінің тұтынушысын қолдану арқылы редакцияның саясат әкімшілері тізімін өзгерте аласыз.",

		admin_repcfg_redaction_permission_text: "Редакция өңдеушілерін тағайындаңыз:",
		admin_repcfg_redaction_editors_hover: "Рөлге негізделген редакцияларды құрып, өңдеп және жоя алатынын пайдаланушылар мен топтарын таңдаңыз. Пайдаланушылар мен топтарды өңдеушілер ретінде таңдағаннан кейін оларды рөлге негізделген редакцияларды өңдемес бұрын редакция саясаттарында өңдеушілер ретінде көрсетуіңіз керек.",
   		admin_repcfg_redaction_editors_select_hover: "Редакция өңдеушілері рөлге негізделген редакцияларды олар редакция сипаттарында өңдеушілер ретінде көрсетілген кезде құрып, өңдеп және жоя аласыз.",
   		admin_repcfg_redaction_administrators_hover_p8: "Редакция әкімшілері редакция өңдеушілерін тағайындай алады.<br/><br/>ІBM Administration Console бағдарламасын Content Engine қызметі үшін қолдану арқылы редакцияның әкімшілері тізімін өзгерте аласыз.",
   		admin_repcfg_redaction_administrators_hover_cm: "Редакция әкімшілері редакция өңдеушілерін тағайындай алады.<br/><br/>IBM Content Manager жүйе әкімшісінің тұтынушысын қолдану арқылы редакцияның әкімшілері тізімін өзгерте аласыз",
		admin_repcfg_entry_template: "Енгізілім үлгісін басқару:",
		admin_repcfg_entry_template_enable_classes_label: "Енгізу үлгісінің қолдауы үшін сыныптарды өзгерту:",
		admin_repcfg_oos_reference_attribute_label: "Төлсипаттарды онлайн office үшін сілтеңіз:",
		admin_repcfg_entry_template_enable_classes_hover: "Маңызды: Көрсетілген кез келген сыныптар жазба үлгілеріне қолдау көрсету үшін өзгертіледі. Өзгертулерді сақтағаннан кейін, өзгертулерді сыныптардан жою мүмкін емес.<br><br>Келесі мақсаттарды бірі немесе екеуі үшін де сыныпты өзгертуге болады:<br><ul><li>Элемент өзгертілген кезде енгізу үлгісі параметрлері қолданатындай, элементті қосу үшін қолданылатын енгізу үлгісінің идентификаторын сақтау үшін</li><li>Тек қана иерархиялық қалта: Енігзу үлгісі қалтасының байланыстарына қолдау көрсету үшін</li></ul>Сыныптарды өзгерту үшін, кітапхана серверінің әкімшісі сияқты репозиторийге қосылуыңыз керек.",
		admin_repcfg_entry_template_enable_classes_warning: "Маңызды: Көрсетілген кез келген сыныптар жазба үлгілеріне қолдау көрсету үшін өзгертіледі. Өзгертулерді сақтағаннан кейін, өзгертулерді сыныптардан жою мүмкін емес.<br><br>Сыныптарды өзгерту үшін, кітапхана серверінің әкімшісі сияқты репозиторийге қосылуыңыз керек.",
		admin_repcfg_entry_template_enable_classes_available: "Қол жетімді класстар",
		admin_repcfg_entry_template_enable_classes_selected: "Таңдалған класстар",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Енгізу үлгісі идентификаторын сақтау",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Элемент өзгертілген кезде енгізу үлгісі параметрлері қолданатындай, элементті қосу үшін қолданылатын енгізу үлгісінің идентификаторын сақтайтын осы сыныпты өзгертіңіз.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Қалта байланыстарын сақтау",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Ол енгізу үлгісі қалтасы байланыстарына қолдау көрсете алатындай осы сыныпты өзгертіңіз. Бұл параметр тек иерархиялық қалта сыныптары үшін қол жетімді.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Бұл сынып енгізу үлгісі идентификаторын сақтайтындай әлдеқашан өзгетілген. Бұл параметрді жою мүмкін емес.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Бұл сынып қалта байланыстарын сақтау үшін әлдеқашан өзгертілген. Бұл параметрді жою мүмкін емес.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Тек иерархиялық қалта кластары және иерархиялық емес кластар қалта біріктірулерін сақтау үшін пайдалана алады.",
		admin_repcfg_entry_template_root_folder_association_title: "Түбір қалтамен байланысқан жазба үлгілері:",
		admin_repcfg_entry_template_root_folder_association_hover: "IBM Content Manager репозиторийіндегі түбір қалтамен байланыстырғыңыз келген жазба үлгілерін көрсетіңіз.<br /><br />Егер жазба үлгілерін түбір қалтамен байланыстырғыңыз келсе және пайдаланушылар иерархиялық қалтаға элементтер қосса, элементтерді қосу үшін жазба үлгілері әрқашан пайдаланылатын болады.",
		admin_repcfg_entry_template_root_folder_association_button: "Байланыстарды орнату",
		admin_repcfg_oos_enable_classes_label: "Офисті онлайн режимінде және Edit Service қызметін қоллдау үшін өзгертуге арналған сыныптар:",
		admin_repcfg_oos_enable_classes_warning: "Маңызды: Сіз көрсеткен кез келген сыныптар Microsoft Office Online немесе Edit Service қызметімен жұмыс істеу үшін өзгертіледі. Өзгертулерді сақтағаннан кейін әр бір классқа автоматты түрде қосылған сілтеме төлсипаты жойылмайды.<br><br>Сыныптарды өзгерту үшін, кітапхана серверінің әкімшісі сияқты репозиторийге қосылуыңыз керек.",
		admin_repcfg_oos_enable_classes_available: "Қол жетімді класстар",
		admin_repcfg_oos_enable_classes_selected: "Таңдалған класстар",
		admin_repcfg_oos_enable_classes_note: "Маңызды:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Бұл сынып Microsoft Office Online немесе Edit Service қызметін қолдамайды.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Cынып үшін нұсқа саясатында әрқашан Microsoft Office Online немесе Edit Service қызметі қолдамайтын нұсқаға орнатылады. Басқа классты таңдаңыз.",
		admin_repcfg_download_recording: "Жолшық жүктейді:",
		admin_repcfg_download_recording_hover: "Social Collaboration Base Extensions қосылымы репозитоийде орнатылған кезде әдепкі бойынша жүктемелер тасымалданады. Алайда, осы опцияны ажырату репозиторийдің теңшелімін жетілдіре алады.<br><br>Егер осы опцияны ажыратсаңыз, пайдаланушылар опция ажыратылмас бұрын пайда болған жүктемелер санын көреді.",
		admin_repcfg_sync_service: "Синхрондау қызметтері:",
		admin_repcfg_download_ignored: "Арнайы пайдаланушылар үшін жүктемелерді елемеу:",
		admin_repcfg_download_ignored_hover: "Арнайы пайдаланушылар арқылы сұралған жүктемелерді елемей аласыз, мысалы әкімшілер немесе жүйе есептері құжатты жүктеген пайдаланушылардың санын шығарады. Мысалы, айлық есепті жасау үшін мазмұнды жүктеу үшін қолданылатын арнайы есепті иеленсеңіз, сол есеп арқылы сұралған жүктемелерді елемеуіңізге болады.<br><br><b>Шектеу:</b> Топтарды көрсете алмайсыз.",

		admin_repcfg_add_as_major_version: "Көптеген нұсқа ретінде қосады:",
		admin_repcfg_enable_add_as_major_version: "Иә",
		admin_repcfg_disable_add_as_major_version: "Жоқ",
		admin_repcfg_checkin_as_major_version: "Негізгі нұсқа ретінде тексеру:",
		admin_repcfg_enable_checkin_as_major_version: "Иә",
		admin_repcfg_disable_checkin_as_major_version: "Жоқ",
		admin_repcfg_annotation_security: "Түсініктеме қауіпсіздігі:",
		admin_repcfg_inherit_annotation_security: "Құжаттарды қамтушының қауіпсіздігін еселеу",
		admin_repcfg_default_annotation_security: "Әдепкі түсініктеме қауіпсіздігін қолдану",
		admin_repcfg_connection_point: "Жұмыс ағымы байланысының нүктесі:",
		admin_repcfg_include_workflow_definition: "Жұмыс ағымы анықтамасының классын көрсету:",
		admin_repcfg_include_form_template: "Пішім үлгісі классын көрсету:",
		admin_repcfg_enable_include_workflow_definition: "Иә",
		admin_repcfg_disable_include_workflow_definition: "Жоқ",

		admin_repcfg_status_columns: "Күй элементтері:",
		admin_repcfg_status_columns_hover: "Белгілерді көргіңіз келген күйлерді көріңіз. Мазмұн тізіміндегі құжаттар, қалталар және жұмы элементтері жанында көрсетілген күй элементтері",
		admin_repcfg_status_columns_documents_or_folders: "Құжаттар немесе қалталар кезінде элементті көрсету:",
		admin_repcfg_status_columns_documents: "Құжаттар кезінде элементті көрсету:",
		admin_repcfg_status_columns_documents_checked_out: "Тексерілген",
		admin_repcfg_status_columns_documents_declared_records: "Есептер ретінде көрсетілген",
		admin_repcfg_status_columns_documents_minor_versions: "Бірнеше нұсқаларды иеленеді",
		admin_repcfg_status_columns_documents_compound_document: "Біріктірілген құжаттар",
		admin_repcfg_status_columns_documents_bookmarks: "Бетбелгілерді иеленеді",
		admin_repcfg_status_columns_documents_hold: "Ұсталған",
		admin_repcfg_status_columns_documents_notes: "Ескерімдерді иеленеді",
		admin_repcfg_status_columns_work_items: "Жұмыс элементтері кезінде көрсетіледі:",
		admin_repcfg_status_columns_work_items_locked: "Құлыпталған",
		admin_repcfg_status_columns_work_items_checked_out: "Тексерілген",
		admin_repcfg_status_columns_work_items_deadline: "Соңғы мерзімді иеленеді",
		admin_repcfg_status_columns_work_items_suspended: "Орындаудан алынған",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF теңшеу файлы:",
		admin_repcfg_transform_xml_file: "Тұтынушы тасымал файлы:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Іске қосу",
		admin_repcfg_disable_ssl: "Ажырату",
		admin_repcfg_keyringdb_file: "Кілтті дерекқор файлы:",
		admin_repcfg_keyringstash_file: "Кілтті файл:",
		admin_repcfg_od_sso: "Жалғыз қосылым",
		admin_repcfg_od_enable_sso: "Іске қосу",
		admin_repcfg_od_disable_sso: "Ажырату",
		admin_repcfg_od_sso_password: "Құпия сөз",
		admin_repcfg_advanced_label: "Кеңейтілген",
		admin_repcfg_custom_properties_label: "Тұтынушы сипаттар:",
		admin_repcfg_new_button_label: "Жаңа",
		admin_repcfg_edit_button_label: "Өңдеу",
		admin_repcfg_delete_button_label: "Жою",
		admin_repcfg_custom_head1: "Аты",
		admin_repcfg_custom_head2: "Мән",
		admin_repcfg_ecpdialog_title_new: "Жаңа тұтынушы сипаты",
		admin_repcfg_ecpdialog_title_edit: "Тұтынушы сипатын өңдеу",
		admin_repcfg_ecpdialog_name: "Аты:",
		admin_repcfg_ecpdialog_value: "Мән:",
		admin_repcfg_ecpdialog_save: "Сақтау",
		admin_repcfg_ecpdialog_create: "Құру",
		admin_repcfg_ecpdialog_cancel: "Болдырмау",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Бұл мән талап етілген. Мән бос орынды қамти алмайды және көшірме болуы мүмкін емес.",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP жазбасын қолданыңыз:",

		admin_repcfg_task_mgr_proxy: "Тапсырманы басқару қосылым идентификаторы:",
		admin_repcfg_task_mgr_proxy_hover: "Қораппен бөлісу немесе Топ орнын жою үшін, тапсырма әкімшісі репозиторийді өзгертетін өңдік тапсырмаларды іске қосуға басқарушы пайлаланушы идентификаторы және құпия сөзін қолданады.<br><br>Орнату түймесін басыңыз және жарамды репозиторий әкімші пайдаланушысының идентификаторы және құпия сөзді пайдаланып, репозиториге кіріңіз.",
		admin_task_manager_not_enabled_warning: "Осы опция тапсырманы басқару қызметін талап етеді, бірақ тапсырманы басқару қызметі іске қосылмаған.  Параметрлер үшін бастапқы беттегі барлық жұмыс үстелдері үшін тапсырманы басқару қызметін іске қоса аласыз.",
		admin_task_manager_not_enabled_and_user_warning: "Осы опция тапсырманы басқару қызметін талап етеді, бірақ тапсырманы басқару қызметі іске қосылмаған. Осы бетте тапсырманы басқауры қосылым идентификаторын орнатыңыз және сосын параметрлерге арналған бастапқы бетте барлық жұмыс үстелдеріне арналған тапсырманы басқару қызметін іске қосыңыз.",
		admin_task_manager_user_id_pw_not_set_warning: "Осы опция тапсырманы басқару қызметін және әкімшінің пайдаланушы идентификаторы мен құпия сөзін талап етеді. Осы бетте тапсырманы басқару қосылым идентификаторын орнатыңыз.",
		admin_repcfg_teamspaces_delete_task_id: "Репозиторий әкімшісі:",
		admin_repcfg_teamspaces_delete_task_password: "Құпия сөз:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Репозиторийдегі топ аймағын жою үшін тапсырманың реттеуші қызметін іске қосу үшін кітапхана серверінің әкімшісін көрсетуіңіз керек.",
		admin_repcfg_teamspaces_delete_task_hover: "Әдепкіде, пайдаланушы топ аймағын жойған кезде, топ аймағы жасырын болады. Топ аймағындағы барлық қалталар мен құжаттар репозиторийде қалады. <br /> <br />Осы опцияны іске қосқан кезде, репозиторийдегі басқа қалталарда тіркелген құжаттар ғана репозиторийде қалады.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Егер ортада топ аймақтарының саны көп болса, бұл барлық топ аймақтарын <b>Топ аймақтарының</b> қойындысында көрсетуге көп уақытты алуы мүмкін. Сіз тізімді таратуға жұмсалатын уақыт көлемін азайту үшін осы параметрді таңдай аласыз.<br /><br />Пайдаланушы көрсетілген ауқымнан тыс топ аймағымен жұмыс істеуді қажет етсе, пайдалану топ аймағын табу үшін<b>Сүзгі</b> өрісін қолдана алады.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Егер осы опцияны таңдасаңыз, топ бос орындарыннда иеленуші рөлі бар пайдаланушылар IBM Content Navigator бағдарламасының 2.0.2 нұсқасынан бұрын құрылған топ бос орындарымен байланыстырылған рөлдерді өзгерте алады.<br /><br />Бұл опция ІBM Content Navigator бағдарламасының 2.0.2 нұсқасымен құрылған топ бос орынларына әсер етпейді.",
		admin_repcfg_use_teamspaces_cm_hover: "Пайдаланушылардың топ бос орындары мен топ бос орындары үлгілерін осы репозиторийде құру үшін қабілетті болуын көрсетіңіз.<br /><br /><b>Маңызды:</b> Репозиторий иерархиялық қалталарды қолдауы тиіс.<br /><br />Егер топ бос орындарын іске қоссаңыз, IBM Content Navigator бағдарламасы репозитоийдегі топ бос орындары дерек үлгісін құрады. Дерек үлгісі The data model includes ACL нысандарын, артықшылықтар параметрлерін және екі жаңа элемент түрлерін қамтиды.",
		admin_repcfg_folder_selector_hover: "Пайдаланушылар құжаттарды шарлау кезінде түбір қалтасы ретінде қолдану үшін қалайтын қалтаны таңдаңыз. Репозиторийіңізде теңшелген иерархиялық қалталарды иеленбесеңіз, бұл параметр сізді түбір қалтасын анықтау арқылы қолдауды іске қосады. Репозитоийіңізде теңшелген иерархиялық қалталарды иеленсеңіз, осы параметр репозиторийде теңшелген түбір қалтасын қайта жазады.",
		admin_repcfg_cm_use_sso_hover: "Trusted Logon артықшылық параметрі бар пайдаланушылар үшін жалғыз қосылымға рұқсат беруіңізді көрсетіңіз.<br /><br /><b>Маңызды:</b> Жалғыз қосылым Content Manager серверінде қосылуы тиіс және WebSphere Application Server сервері LTPA үшін осы теңшелім параметріне жұмыс істеу үшін теңшелуі тиіс.",
		admin_repcfg_cm_direct_retrieve_hover: "Тікелей шығарылым әдепкі бойынша іске қосылған, себебі ол веб тұтынушысына мазмұнды ресурс басқармасынан жылдам шығару үшін рұқсат етеді. <br /><br />Егер тұтынушы бағдарламасының ресурс басқармасына тікелей қосылуын қаламасаңыз немесе веб тұтынушыны ресурс басқармасын URL мекен-жайлары арқылы қабылдауынан алдын алуды қаласаңыз осы опцияны ажырата аласыз. Мысалы,брандмауер пайдаланушыларды құжаттарды тікелей шығару іске қосылған кезде қарау құралында көруден алдын ала алады.",
		admin_repcfg_cmItemTypesToDisplay: "Егер пайдаланушыларды ресурс элементі түрлерін көруін және элемент түрлерін IBM Content Manager серверінде көруін қаламасаңыз, сіз тек құжат үлгісі элементінің түрлерін ғана көрсете аласыз. Элемент түрлері пайдаланушылар іздеулерді құрып, құжаттарды қосып және қалталарды құрған кезде көрсетіледі.",
		admin_repcfg_cm_language_codes_hover: "Деректі Сontent Manager серверінен шығару үшін тілдерді көрсетіңіз. Қол жетімді тілдердің тізімі сервердегі тіл анықтамаларының тізімі арқылы басқарылады.<br /><br /><b>Есіңізде болсын:</b> Веб тұтынушыдағы дерек пацдаланушылардың веб шолғышында орнатылған тілде көрсетіледі.",
		admin_repcfg_cm_pdf_conversion_hover: "Құжат түрлерін пайдаланушы құжатты бірнеше бөліктермен электрондық пошта ретінде жіберген кезде PDF пішіміне түпрленуін көрсетеді. Барлық бөліктер жалғыз PDF құжатына біріктіріледі.",
		admin_repcfg_use_teamspaces_p8_hover: "Пайдаланушылардың топ бос орындары мен топ бос орындары үлгілерін осы репозиторийде құру үшін қабілетті болуын көрсетіңіз.<br /><br />Егер топ бос орындарын іске қоссаңыз, IBM Content Navigator бағдарламасы репозитоийдегі топ бос орындары дерек үлгісін құрады. Дерек үлгісі сипат үлгілерін, тұтынушы нысандарын, қалта нысанын және бірнеше қалталарды қамтиды.",
		admin_repcfg_use_entry_template_p8_hover: "Пайдаланушылардың IBM Content Navigator бағдарламасынан осы репозиторийдегі жазба үлгілерді құру және басқаруға қабілетті болуын көрсетіңіз. Егер осы мүмкіндікті іске қоспасаңыз, пайдаланушылар репозиторийдегі жазба үлгілерін іздеп және қолдана алады.<br /><br />Егер сіх жазба үлгісі басқармасын іске қоссаңыз, IBM Content Navigator бағдарламасы репозиторийдегі жазба үлгісінің дерек үлгісін жаңартады. Жаңарту жаңа сипаттарды қамтиды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Көбірек біліңіз</a>",
		admin_repcfg_use_entry_template_cm_hover: "Пайдаланушылардың IBM Content Navigator бағдарламасынан осы репозиторийдегі жазба үлгілерді құру және басқаруға қабілетті болуын көрсетіңіз.<br /><br />Егер сіз жазба енгізілімі үлгі басқармасын іске қоссаңыз, IBM Content Navigator бағдарламасы репозитоийдегі жазба үлгісінің дерек үлгісін құрады. Дерек үлгісі жаңа АCL нысанын, жаңа сипаттарды және жаңа элемен түрін қамтиды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Көбірек біліңіз</a>",
		admin_repcfg_sync_service_p8_hover: "Пайдаланушылардың таңдамалы элементтерін, жұмыс бекеттеріне және мобильді құрылғыларына синхрондау үшін қол жетімді болғанын қалайтыныңызды көрсетіңіз.<br><br><b>Маңызды:</b> Бұл мүмкіндікті қолдану үшін, келесі тапсырмаларды аяқтауыңыз керек:<br><ul><li><b>Синхрондау қызметтерінің жалпы URL мекен-жайын</b> әкімші құралдың <b>Синхрондау Қызметтері</b> бөлімінде көрсетіңіз.</li><li>Бұл репозиторийді синхрондау қызметтері іске қосылған жұмыс үстеліне қосыңыз.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Негізгі нұсқа опциясы әдепкі бойынша пайдаланушылар құжаттарды репозиторийге қосқан кезде таңдалады.<br /><br />Егер пайдаланушылар құжатты азырақ нұсқа ретінде қосқысы келген кезде олар осы опцияны жою рұқсатын иеленеді.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Пайдаланушылар құжатты репозитоийде тексерген кезде көптеген нұсқа опциясы әдепкі бойынша таңдалады.<br /><br />Егер пайдаланушылар құжатты азырақ нұсқа ретінде тексергісі келген кезде олар осы опцияны жою рұқсатын иеленеді.",
		admin_repcfg_p8_annotation_security_hover: "Қауіпсіздіктің қай түрін әдепкі бойынша түсініктемеге қабылдатыныңызды көрсетіңіз.<br /><br />Пайдаланушылардың түсініктемелер қауіпсіздігін тексеру үшін параметрді иеленеді.",
		admin_repcfg_p8_connection_point_hover: "Егер IBM FileNet P8 жұмыс ағымдарын қолданғыңыз келсе, Process Engine байланыс нүктесін таңдаңыз. Сіз таңдаған байланыс нүктесі қай жұмыс ағымдарының осы репозитоийді қабылдау үшін пайдаланушыларға қол жетімді болатынын анықтайды.",
		admin_repcfg_p8_include_workflow_definition_hover: "Егер IBM FileNet P8 жұмыс ағымы анықтамасы құжат классын веб тұтынушыда көрсетсеңіз, пайдаланушылар жұмыс ағымы анықтамаларын репозиторийде іздеп және қоса алады.",
		admin_repcfg_p8_include_form_template_hover: "Егер IBM FileNet P8 пішім үлгісі анықтамасы құжат классын веб тұтынушыда көрсетсеңіз, пайдаланушылар пішім үлгісі репозиторийде іздеп және қоса алады.",
		admin_repcfg_od_afp2pdf_config_file_hover: "AFP2PDF теңшелім файлының толық жарамды жолын осы репозиторий үшін веб бағдарламасы серверінде көрсетіңіз. AFP2PDF Transform элементі AFP дерегін көру және басып шығару үшін талап етіледі.<br /><br /><b>Есіңізде болсын:</b> AFP2PDF Transform элементі осы параметрді қолдану үшін орнатылуы тиіс.",
		admin_repcfg_od_transform_xml_file_hover: " Content Manager OnDemand мазмұнын түрлендіру үшін тұтынушы тасымалын қолдануды қаласаңыз, тасымалды анықтауда қолданылатын XML файлының толық жарамды жолын көрсетіңіз. XML файлы веб бағдарлама серверінде орнатылуы тиіс.",
		admin_repcfg_od_ssl_hover: "SSL элементін IBM Content Navigator бағдарлама сервері мен Content Manager OnDemand кітапхана сервері және нысан серверлері арасында байланысты жазу үшін қолдануды көрсетіңіз.<br /><br /><b>Маңызды:</b> SSL элементін Content Manager OnDemand бағдарламасы үшін қосқан кезде, ол IBM Content Navigator бағдарлама сервері, веб сервері немесе пайдаланушылар жұмыс орындары арасында қамтымайды.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Веб бағдарлама серверіндегі осы репозиторий үшін арналған кілтті дерекқор файлының толық жарамды жолын көрсетіңіз. Мысалы, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Кілтті дерекқор файлы сіздің сенімді түбір куәліктеріңізді қамтиды. Осы файл үшін расталмаған қатынастың алдын алу үшін қатал файл жүйесінің қорғауын қолдануыңыз керек.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Веб бағдарлама серверіндегі осы репозиторий үшін арналған кілтті файлдың толық жарамды жолын көрсетіңіз. Мысалы, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Кілтті файл кілт жинағы дерекқор файлы үшін құпия сөзді қамтиды. Осы файл үшін расталмаған қатынастың алдын алу үшін қатал файл жүйесінің қорғауын қолдануыңыз керек.",
		admin_repcfg_od_sso_password_hover: "OnDemand серверімен бірге жалғыз қосылым үшін қолданылатын құпия сөзді көрсетіңіз.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API бағдарламасы тұтынушы сипаттарын қамтиды. Веб тұтынушы арқылы репозиторийге қосылу кезінде кез келген тұтынушы сипаттарын қолдануды қаласаңыз, тұтынушы сипаттарының аттары мен мәндерін көрсетіңіз.<br /><br />Қолдау көрсетілген тұтынушы сипаттары туралы қосымша ақпарат үшін ODWEK Java API Javadocs бөлімін қараңыз, олар ODWEK орнатылым каталогының /api ішкі каталогында орналасқан.",
		admin_repcfg_od_custom_properties_name_hover: "Сипат атын енгізіңіз.",
		admin_repcfg_od_custom_properties_value_hover: "Сипат мәнін енгізіңіз.",
		admin_repcfg_od_use_sso_hover: "Пайдаланушылар үшін жалғыз қосылымды рұқсат беруіңізді көрсетіңіз.<br /><br /><b>Маңызды:</b> Жалғыз қослыым осы теңшелім параметрінің жұмысы үшін Content Manager OnDemand серверінде іске қосылу тиіс.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "GZIP жазбасын осы CMIS қайнар көз үшін қолданыңыз.",
		admin_repcfg_cm_use_part_file_name: "Құжаттарды жүктеген кезде қолдану үшін файл аты:",
		admin_repcfg_cm_use_part_file_name_help: "Пайдаланушылар құжаттарды жүктеген кезде құжаттардың файл аттары қалай анықталатынын көрсетіңіз.",
		admin_repcfg_cm_use_part_file_name_enable: "Файл атын пайдалану",
		admin_repcfg_cm_use_part_file_name_disable: "Репозиторийдегі элементтің атын қолдану",
		admin_repcfg_add_doc_name: "Қосылған құжатқа арналған әдепкі атау:",
		admin_repcfg_add_doc_name_hover: "Құжатты қоспас бұрын, пайдаланушылар атты өзгерте алады.",
		admin_repcfg_add_doc_name_empty: "Ешқандай (бос)",
		admin_repcfg_add_doc_name_file_name: "Таңдалған құжаттың файл атауы",

		admin_repcfg_compound_documents: "Біріктірілген құжат мүмкіндіктері:",
		admin_repcfg_compound_documents_hover: "P8 біріктірілген құжат мүмкініктерін іске қосу, мысалы шарлау.",
		admin_repcfg_cm_action_list_config_enabled: "Жұмыс элементі әрекет тізімі:",
		admin_repcfg_cm_action_list_config_hover: "Мазмұнды басқарушы жүйелік әкімшілік клиенті ішінде құжатты бағыттау теңшелген кезде, жұмыс элементінде пайдаланушы орындауы мүмкін әрекеттер тізімін ерекшелей аласыз.<br /><br />Мазмұнды басқарушы серверінен егер әрекет тізімін қолдану үшін бұл опцияны іске қосыңыз. Бұл параметрлер мәтінмән мәзірінде және жұмыс элементі үшін өңдеу сипаттары терезесі ішінде қолданылады.<br /><br /><b>Маңызды:</b> Мазмұн шарлаушысы әкімшілік құралы ішінде теңшелген кез келген теңшелген мәзірлерін әрекет тізімі ішіндегі параметрлер қайта жазады. Егер әрекет тізімі ішінді еш параметрлер болмаса, пайдаланушы жұмыс элементтерінде кез келген әрекеттер жасауы мүмкін емес.",

		admin_repcfg_box_share: "Box бағдарламасын бөлісу",
		admin_repcfg_box_share_p8_hover: "Пайдаланушыларға осы репозиториден құжатты бөлісуге рұқсат береді. Құжатты бөлісу файлды Box бағдарламасына көшіру, сілтемені жасау және электрондық поштаға сілтемені жіберуді қамтиды.<br /><br />Box бағдарламасын бөлісуді іске қоссаңыз, IBM Content Navigator шолғышы репозиториде Box бағдарламасыны бөлісетін деректер үлгісін жасайды. IBM Content Navigator Box бөлісетін қосымша құрылғысын орнату үшін, кітапхана серверінің әкімшісі сияқты репозиторийге қосылуыңыз керек.",

		admin_menu_type_icon: "Мәзір Түрі Белгішесі",
		admin_menu_toolbar_hover: "Құралдар тақтасы",
		admin_menu_toolbar_custom_hover: "Тұтынушы құралдар тақтасы",
		admin_menu_contextMenu_hover: "Мазмұн мәзірі",
		admin_menu_contextMenu_custom_hover: "Тұтынушы мазмұн мәзірі",

		admin_menu_contextMenu_custom_empty: "Теңшелген қосылым модулінде анықьалған тұтынушы мазмұн мәзірі жоқ.",
		admin_menu_toolbar_custom_empty: "Теңшелім қосылу модулінде анықталған тұтынушы құралдар тақтасы жоқ.",

		admin_file_type_category_filters: "Файл түрінің сүзгілері:",
		admin_file_type_category_filters_hover_help: "Келесі жағдайларда пайдаланушылар қолдана алатын файл түрлерінің тізімін көрсетіңіз:<ul><li>IBM Content Navigator for Microsoft Office бағдарламасында іздеу не шарлау кезіндегі нәтижелердің тізімінің енін кішірейту үшін<li>Веб тұтынушыдағы IBM FileNet P8 репозиторийді іздеу кезінде нәтижелердің тізімінің енін кішірейту үшін<li>Пайдаланушылар жазба үлгісін қолдану кезінде репозиторийге қоса алатын файлдар түрлерін шектеу үшін</ul>",
		admin_file_type_only_use_in_et_folder_association: "Тек Жазба Үлгісі Қалтасының байланыстарында көрсету",
		admin_office_config_properties_label: "Office Сипаттары",
		admin_office_config_type_label: "Деректер түрі",
		admin_office_config_mapped_property_label: "Репозиторий сипаты",
		admin_office_config_properties_hover_help: "Репозиторий сипатына салыстырғыңыз келген әр бір Microsoft Office сипатының атын енгізіп және қосыңыз. Барлық репозиторийлердің дерек түрін салыстыруыңыз керек",
		admin_office_config_mapped_property_hover_help: "Office Сиапттарын біреуден көп репозиторий сипатына салыстырғыңыз келсе, жаңа сипат салыстырмасын құруыңыз керек",
		admin_new_property_mapping_title: "Жаңа сипат салыстырмасы",
		admin_property_mapping_title: "Сипат салыстырмасын өзгерту",
		admin_property_mapping_instruction: "Репозиторийдегі сипат үшін салыстырғыңыз келсе, қай Microsoft Office сипаттарын салыстыратыныңызды көрсетіңіз. Office сипаттарының дерек түрі репозитоийдегі сипаттың дерек түріне сай болуы тиіс. <br /><br />Егер Office құжаты салыстырудан бірден көп сипатты иеленсе, IBM Content Navigator бағдарламасы репозиторийдегі сипатты жасау үшінбірінші сипатты қолданады.",
		admin_ms_general_settings: "Жалпы теңшелім:",
		admin_ms_delete_local_settings: "Жергілікті файлдарды жою ол кезде пайдаланушылар:",
		admin_ms_outlook_options: "Outlook біріктіруі:",
		admin_ms_enable_props_mapping: "Office сипаттарын репозиторий сипаттарына салыстыру ол кезде пайдаланушылар:",
		admin_ms_open_doc_when_checkout: "Құжат ашық болған кезде автоматты түрде тексеру",
		admin_ms_open_doc_when_checkout_hover_help: "Осы опцияны таңдау пайдаланушыларды репозиторийдегі файлды файлдың алдыңғы нұсқасымен қайта жазудан сақтайды.",
		admin_ms_prompt_close_office: "Пайдаланушыларды Office бағдарламаларын жапқан кезде құжаттарды тексеруге шақырады",
		admin_ms_prompt_close_office_hover_help: "Осы опцияны таңдау пайдаланушыларды жұмысиарын тексеруді ұмытудан қорғайды.",
		admin_ms_add_with_entry_template_only: "әТек Add With Template рекетін көрсету",
		admin_ms_delete_local_on_add: "Пайдаланушылар құжаттарды қосқан кезде жергілікті файлдарды жойыңыз",
		admin_ms_delete_local_on_checkin: "Пайдаланушылар құжаттарды тексергенде немесе тексеруден бас тартқан кезде жергілікті файлдарды жойыңыз",
		admin_ms_delete_local_on_add_hover_help: "Пайдаланушы құжатты IBM Content Navigator for Microsoft Office қызметіне қосқан кезде құжат репозиторийге қосылады және құжаттың жергілікті көшірмесі пайдаланушы өзгертулер енгізу үшін құжатты жылдам тексере алатындай етіп ашық тұрады.<br /><br />Осы параметрді құжат репозиторийге қосылғаннан кейін құжаттың жергілікті көшірмесін автоматты түрде жабу және жою үшін таңдаңыз.",
		admin_ms_delete_local_on_checkin_hover_help: "Пайдаланушы құжатты IBM Content Navigator for Microsoft Office қызметіне тексерген кезде құжат репозиторийге тексеріледі және құжаттың жергілікті көшірмесі ашық тұрады. Сонымен қатар тексеру әрекетін болдырмауды қолданғаннан кейін құжаттың жергілікті көшірмесі ашық қалады. Ашық жергілікті көшірмемен бірге пайдаланушылар қайтадан өзгертулер жасау үшін құжатты жылдам тексеріп шыға алады.<br /><br />Құжатта тексеруден кейін не тексеру әрекетін болдырмауды қолданғаннан кейін құжаттың жергілікті көшірмесін автоматты түрде жабу немесе жою үшін осы параметрді таңдаңыз.",
		admin_ms_delete_local_on_save: "Құжатты сақтау",
		admin_ms_prompt_for_props_on_add: "Пайдаланушылар электрондық пошталарын репозиторийге қосқан кезде сипат мәндерін қамтамасыз етуге шақырады",
		admin_ms_prompt_for_props_on_add_hover_help: "Егер осы опцияны таңдамасаңыз, веб тұтынушы репозиторий үшін анықталған Outlook сипаты салыстырмасын қолданады.<br /><br />Электрондық пошталар қосылған қалтамен бірге жазба үлгілерін байланыстырсаңыз, пайдаланушы кез келген сипат үшін шақырылмауы мүмкін.",
		admin_ms_delete_email_on_add: "Электрондық хабарлама серверінен электрондық хабарлама репозиторийге қосылған кезде жойыңыз.",
		admin_ms_send_email_as_link_only: "Пайдаланушыларды құжаттарды жіберулен қорғайды",
		admin_ms_send_email_as_link_only_hover_help: "Егер осы опцияны таңдасаңыз, пайдаланушылар ғана құжаттарды Outlook бағдарламасынан алынған байланыстар ретінде жібере алады. Бұл опция репозиториийде арнайы артықшылықтары бар пайдаланушылар ғана құжаттарды көре алатынын тексереді.",
		admin_ms_enable_prop_mapping_for_add: "Office сипаттарын репозиторий сипаттарына салыстыру ол кезде пайдаланушылар құжаттарды тексереді немесе қосады",
		admin_ms_checkout_document_after_add: "Құжаттар репозиторийге қосылғаннан кейін оларды автоматты түрде тексеріңіз",
		admin_no_default_document_type_filtering: "Пайдаланушылар іздеу жүргізген кезде әдепкі бойынша барлық құжат түрлерін қайтарады",
		admin_no_default_document_type_filtering_hover_help: "IBM Content Navigator for Microsoft Office бағдарламасында әдепкі тәртіп пайдаланушылар іздеу жүргізген кезде құжаттарды тек ағымдағы бағдарламаға ғана көреді. Мысалы, Word құжат түрі әдепкі бойынша олар Microsoft Word бағдарламасынан іздеген кезде таңдалады.<br/><br/>Алайда, бұл опцияны таңдау пайдаланушылар іздеу арқылы қайтарылған құжаттардың барлығын көретіндіктен Document түрлерінің тексеру қораптарын тазалайды. Пайдаланшылар бұл параметрді іздеуден бұрын бір немесе бірнеше құжат түрлерін таңдау арқылы қайта жаза алады.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Репозиторийде анықталған сипаттар үшін Microsoft Office құжаттарына арналып анықталған құжат сипаттарын салыстыру үшін көрсетіңіз.<br /></br /><b>Маңызды:</b> Егер осы мүмкіндікті іске қоссаңыз, Office сипаттарын ортаңыздағы әр бір репозиторий үшін теңшеуіңіз керек. Егер сіз Office сипаттарын репозитори сипаттарыңызға салыстырмасаңыз, бұл мүмкіндік жұмыс істемейді.<br /><br />Бұл параметр Microsoft Outlook бағдарламасына қабылданбайды.",
		admin_ms_checkout_document_after_add_hover_help: "Құжаттар репозиторийге қосылғаннан кейін құжаттармен бірге жұмыс істеу үшін қажетті қадамдардың санын кеміту үшін осы параметрді таңдаңыз.<br /></br /><b>Кеңес</b> Пайдаланушылар файлдарды репозиторийге қайтадан тексеретініне көз жеткізу үшін келесіні таңдаңыз <b>Office бағдарламаларын жапқан кезде құжаттарда тексеру үшін пайдаланушыларды шақыру</b>.",
		admin_ms_show_details_recently_used: "<b>Жуырда қолданылған</b> элементінің мәліметтерін көрсету",
		admin_ms_show_details_recently_used_hover_help: "Әдепкі бойынша, Жуырда қолданылған элементтердің тізімін көрген кезде элементтер үшін мәліметтер элементтердің көрсетілуіне рұқсат болу үшін жасырын болады. Жуырда қолданылған элементтер тізімінде осы параметрді таңдаған кезде, мәліметтер әдепкі бойынша мәліметтер қойындысындағы бірінші құжат үшін көрсетіледі.",
		admin_ms_show_no_permissions_warning: "Пайдаланушылар сипаттарды енгізген кезде немесе құжатта тексерген кезде ескертулерді көрсетіңіз, бірақ құжат енгізілімінің үлгісін көру үшін рұқсатыңыз жоқ",
		admin_ms_show_no_permissions_warning_hover_help: "Репозиторийдегі құжат енгізу үлгісін қолдану арқылы құрылған болса, бірақ пайдаланушы құжаттың енгізу үлгісін көру үшін рұқсатты иеленбесе, онда енгізу үлгісі шығарылмайды.<br /><br/>Сондықтан пайдаланушы құжат сипаттарын өңдеген кезде, сипаттар енгізу үлгісін қолданусыз көрсетілген. Сонымен қатар пайдаланушы құжатта тексерсе, құжат енгізу үлгісін қолданусыз тексеріледі.<br /><br />Әдепкі бойынша бұл әрекеттер пайдаланушыны енгізілім үлгісінің қолданылмай жатқанын ескертпей-ақ пайда болады. Ескерту тек журнал файлында тіркелген.<br /><br />Енгізілім үлгісі қолданылмай жатқан кезде пайдаланушыны жылдам мәлімдейтін ескертулерді көрсеткіңіз келсе осы параметрді таңдаңыз.",
		admin_ms_hide_search_actions: "Іздеу сүзгілерінің бөлігін тасалау",
		admin_ms_hide_search_actions_hover_help: "Әдепкі бойынша пайдаланушылар әрекетті, пайдаланушыны немесе пайдаланушылардың тобын көрсету үшін әрекет сүзгісін қабылдай аласыз және әрекет пайда болған кезде күнді таңдап және күн ретін таңдайсыз. Мысалы, соңғы айда тек қана сіз қосқан құжаттарды іздей аласыз.<br /><br />Егер пайдаланушыларды әрекет сүзгілерін қабылдау үшін рұқсат беруді қаламасаңыз, онда осы параметрді әрекет сүзгісін жасыруды және іздеу критериясын анықтау кезінде көрсетілген өрістердің санын кеміту үшін таңдаңыз.",
		admin_ms_hide_save_document: "Таспа тақтасындағы <b>Сақтау</b> опциясын жасырыңыз",
		admin_ms_hide_save_document_hover_help: "<b>Сақтау</b> опциясын қолдану арқылы, пайдаланушылар құжатты тексермей-ақ репозиторийге құжаттың өзгертулерін сақтай алады.",
		admin_ms_indicate_managed_email_on_add: "Электрондық хабарламаның репозиторийге қосылуын көріңіз",
		admin_ms_indicate_managed_email_on_add_hover_help: "Осы опцияны таңдау пайдаланушыларға электрондық поштаныңы бұрыннан репозиторийде екенін көрсетеді, ол электрондыө поштаның репозиторийге қосылу санын кемітеді.  Осы опция таңдалған кезде IBM ECM деп аталатын жаңа түс категориясы Microsoft Outlook бағдарламасында құрылады. Репозиторийге қосылған кез келген электрондық пошта ІBM ECM категориясындағы баасқарылған жерінде автоматты түрде қосылады.",
		admin_ms_edit_group_add_command_configuration: "Өңдеу тобында опциялар қосу:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Таспа жолағында <b>Өңдеу</b> тобынан қайсы <b>Қосу</b> параметрлері қол жетімді болатынын көрсетіңіз:<ul><li>Қосу түймешігін және Өңдеу тобынан қол жетімді барлық Қосу әрекеттерінің барлығын көрсету үшін <b>Барлық қосу параметрлерін көрсету</b> пәрменін таңдаңыз.</li><li>Пайдаланушылардың репозиторийге құжаттарды қосуын болдырмау үшін немесе пайдаланушылардың тек қана топ аймағында құжаттарды қосуын қаласаңыз, <b> Барлық қосу параметрлерін жасыру</b> параметрін таңдаңыз.</li><li>Енгізу үлгісі қалтасының байланыстарын күштеу және пайдаланушылардың әртүрлі енгізу үлгісінен таңдауын болдырмау үшін <b>Үлгі әрекеті бар қосуды жасыру</b> түймешігін басыңыз.</li><li>Пайдаланушылардың бос үлгілерді қолданып құжаттарды қосуын қажет етсеңіз, <b>Үлгі әрекеті бар қосуды ғана көрсету</b> пәрменін таңдаңыз.</li></ul>",
		admin_ms_show_edit_group_add_button: "Барлық Қосу опцияларын көрсету (әдепкі)",
		admin_ms_hide_edit_group_add_button: "Барлық Қосу опцияларын жасыру",
		admin_ms_hide_add_with_entry_template: "Қосуды Үдгі әрекетімен жасыру",
		admin_ms_managed_in_ecm: "IBM ECM бағдарламасында басқарылған",
		admin_ms_managed_in_ecm_hover_help: "Егер пайдаланушылар санаттарын Microsoft Outlook бағдарламасында көрсететін болса, бұл жазу белгісі IBM Content Manager немесе IBM FileNet Content Manager репозиторийіне қосылған электрондық поштаға көрсетіледі.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Басқарылатын IBM ECM санат атында үтір (,) немесе үтірлі нүкте (;) болмау керек.",
		admin_delete_open_docs_after_close: "Пайдаланушылар құжаттарды жапқан кезде ашық құжаттарды автоматты түрде жою",
		admin_admin_delete_open_docs_after_close_hover_help: "Пайдаланушы IBM Content Navigator for Microsoft Office бағдарламасында құжатты ашқан кезде, құжат пайдаланушының каталогына немесе жұмыс үтеліне арналған файлды қадағалау параметрлері арқылы көрсетілген орынға жүктеп алынады.<br><br>Пайдаланушылар құжатты жапқан кезде жүктелмеген, бірақ ашық файлдарды жою үшін осы параметрді таңдаңыз. Осы параметрді таңдау келесі әрекеттерді орындауға мүмкіндік береді:<ul><li>Сыйымдылықты келесі ІТ саясаттармен іске қосыңыз</li><li>Пайдаланушылардың құжаттардың соңғы нұсқаларымен жұмыс істеуін тексеріңіз</li><li>Құжаттарды сақтау үшін қолданылатын дисктің бос орны көлемін азайтыңыз</li><ul>",
		admin_ms_custom_command_configuration: "Теңшелетін пәрмендер:",
		admin_ms_custom_command_configuration_hover_help: "Microsoft Office бағдарламаларындағы IBM Content Navigator for Microsoft Office құралдар тақтасы үшін төрт пәрменге дейін қосуға болады. Пәрмендерді URL мекен-жайларын ашу үшін ашу үшін қолдануға болады. Мысалы, пайдаланушыларды және топтарды іздеу үшін қолдануға болатын қызметті ашу үшін пәрменді қосуға болады.",
		admin_ms_custom_command_dialog_title: "Теңшелетін пәрменді өңдеу",
		admin_ms_custom_command_dialog_intro_text: "Microsoft Office бағдарламаларындағы IBM Content Navigator for Microsoft Office құралдар тақтасынан URL ашу үшін қолдануға болатын пәрменді анықтаңыз.",
		admin_ms_custom_command_id: "Пәрмен ${0}",
		admin_ms_custom_command_available_label: "Қол жетімді",
		admin_ms_custom_command_available_hover_help: "Пәрмен үшін анықталған URL мекен-жайының техникалық қызмет көрсету үшін енжар болу қажет болса, пәрмен үшін құсбелгіні алып тастауға болады, сонда пәрмен Microsoft Office бағдарламасында көрсетілмейді.<br/><br/><b>Маңызды:</b> IBM Content Navigator for Microsoft Office бағдарламасында көрсетілетін өзгертулер үшін пайдаланушылар жұмыс үстелінен шығу керек.",
		admin_ms_custom_command_command_id_label: "Пәрмен идентификаторы",
		admin_ms_custom_command_id_label: "Идентификатор",
		admin_ms_custom_command_label_label: "Белгі",
		admin_ms_custom_command_label_hover_help: "Microsoft Office бағдарламасындағы пәрмен үшін көрсетілетін белгіні көрсетіңіз.",
		admin_ms_custom_command_description_label: "Сипаттама",
		admin_ms_custom_command_description_hover_help: "Microsoft Office бағдарламасындағы пәрмен үшін көрсетілетін сипаттаманы көрсетіңіз.",
		admin_ms_custom_command_url_label: "URL мекен-жайы",
		admin_ms_custom_command_url_hover_help: "Microsoft Office бағдарламасынан ашу үшін толығымен кәсіби URL мекен-жайын көрсетіңіз. URL мекен-жайының веб-бет немесе қызмет болуы мүмкін.",
		admin_ms_custom_command_icon_label: "Белгіше",
		admin_ms_custom_command_icon_hover_help: "Көрсетілетін белгішенің файл атын көрсетіңіз, мысалы, CommandIcon.png.<br/><br/><b>Маңызды:</b> Әрбір құрылғыда IBM Content Navigator for Microsoft Office орнатылымының каталогының қосылатын модульдері ішкі каталогы белгіше файлын қосу керек.<br/><br/>Белгіше файлы қосылатын модуль каталогында болмаса немесе белгішені көрсетпесеңіз, әдепкі customButtonIcon_38.gif белгішесі көрсетіледі.",
		admin_ms_custom_command_group_name: "Топ белгісі:",
		admin_ms_custom_command_group_name_hover_help: "Таспа жолағында тешелетін пәрмендерді төменде көрсету үшін топ белгісін көрсетуге болады.<br/><br/>Белгіні көрсетсеңіз, топ белгісі <b>Теңшелетін пәрмендер</b> болып табылады.",
		admin_ms_ribbon_tab_label: "IBM ECM қойынды белгісі:",
		admin_ms_ribbon_tab_hover_help: "Microsoft Office таспа жолағында IBM Content Navigator for Microsoft Office қойындысы үшін көрсетілетін атауды енгізіңіз. Атауды көрсетпесеңіз, қойынды \“IBM ECM\" деп аталады.",
		admin_ms_close_task_pane_on_open: "Пайдаланушылар құжаттарды ашқан кезде тапсырма аймағын жабыңыз",
		admin_ms_close_task_pane_on_open_hover_help: "Пайдаланушылардың Microsoft Office бағдарламасында құжаттарды көре алатын орнын азайту үшін осы параметрді таңдаңыз.<br/><br/>Microsoft Office 2010 пайдаланушылары: Тапсырма тақтасы барлық құжаттарға жабылғанына көз жеткізіңіз, бірнеше құжаттың интерфейсінің (MDI) режимін <b>Опциялар</b> &gt; <b>Кеңейтілген</b> және тазалау үшін тазалау үшін <b>Тапсырмалар тақтасындағы барлық терезелерді көрсету</b> опциясының батырмасын басу арқылы іске қосыңыз.",
		admin_ms_open_document_options: "Құжат параметрлерін ашу:",
		admin_ms_delete_local_file_options: "Жергілікті файл параметрлерін жою:",
		admin_ms_add_and_checkin_options: "Параметрлерді қосу және тексеру:",
		admin_ms_search_options: "Іздеу опциялары:",
		admin_ms_display_options: "Параметрерді көрсету:",
		admin_ms_bidirection_enable_label: "Қос бағытты мәтін үшін қолдауды іске қосу",
		admin_ms_bidirection_enable_hover_help: "Егер соңынан-оңға қарай басқа бағытына қарағандағы Microsoft Office үшін IBM Content Navigator бағдарламасындағы мәтінді енгізу немесе көруге, пайдаланушылардың қол жетімді болдғанын қаласаңыз, осы опцияны таңдаңыз.",
		admin_ms_text_direction_label: "Мазмұнға арналған негізгі мәтін бағыты:",
		admin_ms_text_direction_hover_help: "Microsoft Office үшін IBM Content Navigator бағдарламасында мәтін кірістіру өрістеріне енгізілетін бағытты көрсетіңіз. Бұл параметр сонымен қатар, қалта аттары немесе сипаттың мәндері сияқты, қандай элементтер көрсетілетінін қадағалайды.",
		admin_ms_control_threshold_label: "Алдымен қарауға арналған элементтердің ең аз саны:",
		admin_ms_control_threshold_hover_help: "Әдепкі параметр бойынша, ашылмалы мәзірде алдын ала анықталған мәндері бар сипаттарды іздеуге немесе орнатуға арналған элементтердің саны 50 санына тең немесе артық болса, алдымен қарау іске қосылады. Ең кіші мәнді өзгерте аласыз.",

		admin_ms_default_email_class: "Электрондық поштаны қосу кезінде қолдану үшін арналған класс",
		admin_ms_default_email_class_hover_help: "Осы репозиторийге қосылған Microsoft Outlook бағдарламасынан алынған кез келген электрондық пошта сіз көрсеткен классқа қосылады. Пайдаланушылар осы классты өзгерте алмайды.",
		admin_ms_default_folder_class: "Қалталарды құру кезінде пайдалануға арналған класс",
		admin_ms_default_folder_class_hover_help: "Осы репозиторийде құрылған Мicrosoft Office бағдарламасынан алынған кез келген қалта сіз көрсеткен классқа қосылады.  Пайдаланушылар осы классты өзгерте алмайды.",
		admin_ms_default_folder_warn_title: "${0} классын қалталарды құру кезінде қолданылатын класс ретінде қолдана алмайсыз.",
		admin_ms_default_folder_warn_name_prop_invalid: "Класстың ат сипаты жол емес, және қалтаның аты жол болуы тиіс.<br />IBM Content Manager әкімшісімен класстың ат сипатын жолға өзгерту үшін жұмыс істеген кезде таңдаңыз.",
		admin_ms_default_folder_warn_req_props: "Класс мәндерді иеленбейтін сұралған сипаттарды қамтиды. Алайда, пайдаланушылар қалталарды IBM Content Navigator for Microsoft Office бағдарламасынан құрған кезде сұралған сипаттар үшін мәндерді көрсете алмайды.<br />Сұралған сипаттарды міндетті емес немесе сұралған сипаттарды алдын ала мәнмен толтыру үшін әр түрлі классты қалталарды құру немесе IBM Content Manager әкімшілігімен жұмыс істеу кезінде таңдаңыз.",
		admin_ms_delimiter_for_office_properties: "Бірнеше мәнді жол сипаттарына арналған бөлгіш",
		admin_ms_delimiter_for_office_properties_hover_help: "Бірнеше мәнді жол сипаттарымен салыстыратын жол сипаттары үшін бөлгіш ретінде қолданылатын таңбаны көрсетіңіз. Әдепкі параметр бойынша, мәндерді бөлуге арналған бөлгіш ретінде үтірлі нүктені (;) пайдалану арқылы мәндер жиынын бірнеше мәнді жол сипатына тағайындай аласыз. Дегенмен, мәндер жолдарының бірі үтірлі нүктені қамтыса, бөлгіш әр түрлі таңбаға өзгертілгенге дейін, мәндер жолын қоса алмайсыз. Мысалы, бөлгішті үтірге (,) өзгерте аласыз",
		admin_ms_outlookPropertyRemembrance : "Хабарламалар мен тіркелгілерді қосу кезінде параметрлерді есте ұстаңыз",
		admin_ms_outlookPropertyRemembrance_hover_help : "Хабарламалар мен тіркемелерге тағайындалған сипат мәндері, орналасымы, клесс таңдауы және қауіпсіздігі есте сақталған және болашақтағы элементтер қосылған кезде әдепкі параметрлер ретінде қолданылады.",

		admin_file_type_name_hover_help: "Атты меңзеу көмегі",
		admin_file_type_description_hover_help: "Сипатты меңзеу көмегі",
		admin_file_type_dialog_title: "Файл түрі сүзгісін өзгерту",
		admin_new_file_type_dialog_title: "Жаңа файл түрі сүзгісі",
		admin_mobile_feature_dialog_title: "Мүмкіндік",
		admin_mobile_feature_dialog_new_title: "Жаңа мүмкіндік",
		admin_file_type_instructions: "Пайдаланушылар іздеу нәтижелерінің тізімін кеміту үшін қолдана алатын сүзгіні құру. Бірнеше MIME түрлерін сүзу үшін салыстыра аласыз.",
		admin_file_type_filter_place_holder: "MIME түрлерін сүзу",
		admin_new_button_label: "Жаңа",
		admin_edit_button_label: "Өңдеу",
		admin_delete_button_label: "Жою",
		admin_copy_button_label: "Көшіру",
		admin_verify_button_label: "Тексеру",
		admin_availabe_filters_label: "Қол жетімді сүзгілер",
		admin_selected_filters_label: "Таңдалған сүзгілер",

		admin_mobile_access: "Мобильді бағдарлама қатынасы:",
		admin_mobile_access_hover_help: "IBM Content Navigator бағдарламасын мобильді құралдан қолданғыңыз келсе, пайдаланушыларды осы жұмыс үстелін мобильді бағдарламадан қабылдау үшін іске қосу ұсынылады.<br /><br />Осы жұмыс үстеліне қатынасты мобильді құралдан ажыратсаңыз, пайдаланушылар веб тұтынушыны өздерінің мобильді шарлауынан қабылдай алады. Алайда, веб тұтынушы мобильді құралдан қатынау үшін әзірленбеген.",

		admin_mobile_access_allow_label: "Пайдаланушыларға рұқсат беру:",
		admin_mobile_allow_add_photos: "Камера және сурет галлереясынан суреттерді қосу",
		admin_mobile_allow_add_docs: "Репозиторийге құжаттарды қосып және қалталарды құру",
		admin_mobile_allow_open_docs: "Құжаттарды басқа бағдарламаларда ашу",
		admin_mobile_allow_add_docs_hover_help: "Электрондық роштаға қосылған құжат ретінде пайдаланушылар қалталарды құрып немесе басқа мобильді бағдарламалардан құжаттарды қоса алады.",
		admin_mobile_allow_open_docs_hover_help: "Пайдаланушылар таңдалған құжатты көру үшін қолданылатын бағдарламаны таңдауға шақырылады. Егер тек бі бағдарлама ғанан қол жетімді болса, онда сол бағдарлама қолданылады.",
		admin_mobile_features: "Мүмкіндіктер:",
		admin_mobile_features_hover_help: "Осы жұмыс үстелінің қай мүмкіндіктері IBM Content Navigator мобильді бағдарламасында көрсетілгенін көрсетіңіз.",
		admin_mobile_new_feature_button_label: "Жаңа мүмкіндік",
		admin_mobile_move_up_button_label: "Жоғары жылжыту",
		admin_mobile_move_down_button_label: "Төмен жылжыту",
		admin_desktop_mobile_instructions: "Мобиль параметрлердің нұсқаулығы осында",
		admin_desktop_max_number_of_docs_to_add: "Қосуға арналған құжаттардың ең үлкен саны:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Пайдаланушылар бір уақытта қоса алатын құжаттардың ең үлкен санын көрсетіңіз. Әдепкі ең үлкен сан 50. Алайда, ең үлкен санды 300 санына дейін көтере аласыз.",
		admin_desktop_max_number_of_docs_to_modify: "Элементтерді өңдеуге арналған ең үлкен сан:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Пайдаланушылар бір уақытта өзгерте алатын элементтердің ең үлкен санын көрсетіңіз. Әдепкі ең үлкен сан 50. Алайда, ең үлкен санды 300 санына дейін көтере аласыз.",
		admin_desktop_max_conversion_size: "PDF түрлендірулерінің (MB-та)деректің ең көп мөлшері:",
		admin_desktop_max_conversion_size_hover_help: "<b>Шектеу:</b> Бұл параметр, IBM Content Manager OnDemand бағдарламасында қолданылмайды.<br/><br/>PDF құрылғысына түрленетін деректің ең көп мөлшерін көрсетіңіз. Бұл шектеу, пайдаланушылар элементтерді PDF файлдары сияқты жүктеген кезде немесе элементтерді электрондық поштаға PDF файлы сияқты жіберген кезде қолданылады.<br /><br />Егер әрбір құжаттың көлемі анықталмаса, құжаттар әлі де PDF файлына түрленеді.<br/><br/>Әдепкі шектеу - 200 MB. Шектеудің 200 MB-тан жоғары орнатылымы, жүйе өнімділігіне әсерін тигізеді.",
		admin_desktop_timeProperties: "Уақыт белгісі:",
		admin_desktop_time_properties_hover_help: "<b>IBM FileNet P8 пайдаланушылары үшін:</b> Бұл параметр, өзгертпелі сипаттарға қолданылады және жүйе сипаттарына қолданылмайды. Мысалы, сипат арқылы өзгертілген, уақыт белгісінің уақыт өрісін әлі де көрсетеді, егер <b>Уақыт белгісінің тек қана күн өрісін көрсетуді</b> таңдасаңыз.<br/><br/>Бұл параметр, репозиторийдегі уақыт белгісін өзгертпейді.",
		admin_desktop_disable_time_stamp: "Толық уақыт белгісін көрсету",
		admin_desktop_enable_time_stamp: "Уақыт белгісінің тек қана уақыт өрісін көрсету",
		admin_desktop_timezone: "Уақыт белдеуі:",
		admin_desktop_timezone_localuser: "Пайдаланушының жергілікті уақыт белдеуін көрсету",
		admin_desktop_timezone_alluser: "Барлық пайдаланушыларға бірдеу уақыт белдеуін көрсету",
		admin_desktop_timezone_hover_help: "Пайдаланушылардың не жергілікті уақыт белдеуіне негізделген уақыт белгісін немесе барлық пайдаланушылар бірдей уақыт белгісін көретінін көрсетіңіз.<br/><br/>Бұл параметр, репозиторийдегі уақыт белгісін өзгертпейді. Дегенмен, таңдаған параметріңіз, пайдаланушылар элементтерді қосқан немесе өзгерткен кезде, репозиторйдегі уақыт белгісін құру үшін қолданылатын уақыт белдеуін анықтайды.",
		admin_desktop_mobile_feature_display_label: "Көрсету",
		admin_desktop_mobile_feature_icon_file_label: "Элемент файлы",
		admin_mobile_feature_dialog_icon_file_label: "Элемент файлы:",
		admin_mobile_feature_dialog_url_label: "URL мекен-жайы:",
		admin_desktop_mobile_feature_name_label: "Аты",
		admin_desktop_mobile_select_feature_label: "Мүмкіндікті Таңдау",
		admin_desktop_mobile_feature_icon_label: "Мүмкіндік Белгішесі",
		admin_desktop_share_admin_none: "Әкімші орнатылмаған.",
		admin_desktop_share_admin_edit_label: "Әкәмшіні орнату...",
		admin_browse_icon: "Элементті шарлау",
		admin_search_icon: "Элементті іздеу",
		admin_favorites_icon: "Элементті қалаулы ету",
		admin_casesearch_icon: "Іс белгішесі",
		admin_datacap_icon: "Дерек элементі",
		admin_system_defined: "Анықталған жүйе",
		admin_icon_file_placeholder_text: "Файл орналасымы (i.e. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Түбір",
		admin_folder_default: "Әдепкі",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Құралдар тақталары",
		admin_menu_context_menus: "Мәтінмән мәзірлері",
		admin_menu_office_toolbars: "Microsoft Office Ribbon Bar пәрмендері",
		admin_menu_office_menus: "Microsoft Office Context мәзірлері",

		admin_file_name_label: "Файл аты:",
		admin_exportconfiguration_security_label: "Осы жұмыс үстелін қолдану үшін расталған пайдаланушылар мен топтарды қамтиды",
		admin_exportconfiguration_instruction: "Жұмыс үстелдеріңізді, онымен қоса таңдалған жұмыс үстелдерімен байланыстырылған қосылу модулі теңшелімдері және репозиторий теңшелімдерін IBM Content Navigator бағдарламасының басқа данасына енгізе алатын файлға шығара аласыз.",
		admin_exportconfiguration_dialog_label: "Жұмыс үстелін шығару",
		admin_exportconfiguration_button_label: "Экспорттау",
		admin_dialog_select_all: "БАРЛЫҒЫН таңдау",
		admin_dialog_deselect_all: "Барлығын Тазалау",

		admin_importconfiguration_instruction: "Таңдалған теңшелім файлындағы элементтер осы жүйеге импортталады. Алайда, егер бірдей идентификаторлы элемент жүйеде бар болса, элементті сақтау не қайта жазуды шешіңіз.",
		admin_importconfiguration_dialog_label: "Жұмыс үстелін импорттау",
		admin_importconfiguration_reason_dialog_label: "Редакция себептерін импорттау",
		admin_importconfiguration_button_label: "Импорттау",
		admin_to_be_imported: "Импортталатын теңшелім элементі",
		admin_on_target_system: "Мақсатты жүйедегі бар элемент",
		admin_import_short_warning_message: "Келесі элементтер осы жүйеде бұрыннан бар. Осы жүйеде алмастырғыңыз келген элементтерді таңдаңыз:",
		admin_import_warning_message: "Келесі теңшелім элементтері мақсатты жүеде бар элементтер ретінде бірдей идентификаторларды иеленеді. Мақсатты жүйеде енгізіп не қайта жазғыңыз келген сол элементтерді ғана таңдаңыз.<br /><br />Егер теңшеу элементін қайта жазуды қаламасаңыз, жұмыс үстелін шығарған данадан элементтің көшірмесін құрып, оған әр түрлі идентификаторды беріп және жұмыс үстелімен байланыстырыңыз. Жұмыс үстелін қайтадан шығарып және содан кейін жұмыс үстелін осы данаға қайта енгізіңіз.",
		admin_choose_file_to_import_label: "Енгізуге арналған файлды таңдаңыз:",
		admin_download_imported_log: "Есепті жүктеп алу",
		admin_desktop_import_summary: "Жұмыс үстелін импорттау қорытындысы",
		admin_reason_import_summary: "Редакция себебінің импорт жиынтығы",
		admin_rba_import_summary: "Әкімшілік рөлдерді импорттау түйіні",
		admin_import_open_tabs_checking: "Жұмыс үстелдерін импорттаудан бұрын әкімші құралындағы <bold>Жұмыс үстелдері</bold> қойындысынан басқа барлық қойындыларды жабуыңыз керек.",
		admin_import_no_conflict: "Келесі элементтер импортталады:",
		admin_desktop_invalid: "Жарамсыз жұмыс үстелі",
		admin_desktop_warning: "Жұмыс үстелі ескертулермен сақталған.",
		admin_repos_warning: "Репозиторий ескертулермен сақталған.",
		admin_config_type_icon: "Теңшелім Элементі Түрі Белгішесі",

		admin_approval_workflow: "Бекіту Жұмыс ағыны",
		admin_approval_workflow_hover: "Алдын ала анықталған бекіту жұмыс ағынын бастауға пайдаланушыларға рұқсат етеді. Бекіту жұмыс ағынын ажырату арқылы жазылым арқылы анықталған теңшелмелі бекіту жұмыс ағынын пайдаланушыларға рұқсат етеді. Әдепкі бойынша, бекіту жұмыс ағыны қосылған.<br><br><b>Маңызды:</b> Егер де бекіту жұмыс ағынын қосатын болсаңыз, алдын ала анықталған жұмыс ағыны анықтамаларының бірі немесе екеуі де (ICNParallelDocumentApproval.pep және ICNSequentialDocumentApproval.pep) репозиторийге қосылғанын және Content Process EngineМазмұн Өңдеу Механизм бағдарламасына тасымалдауға көзіңізді жеткізіңіз.",

		admin_cannot_add_desktop_members_error: "Осы жұмыс үстеліне қатынасы бар пайдаланушылар мен топтарды көрсете алмайсыз.",
		admin_cannot_add_desktop_members_error_explanation: "Пайдаланушы мен топ ақпаратын шығару үшін сәйкес рұқсаттарды иелене алмайсыз.",
		admin_cannot_add_desktop_members_error_userResponse: "Әр түрлі пайдаланушы атымен кіру немесе IBM Content Manager жүйе әкімшіңізді сізге UserACLOwner артықшылығын беруді сұраңыз, ол пайдаланушы мен топ ақпаратын шығару үшін талап етеді.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Пайдаланушылар мен топтарды таңдай алмайсыз.",
		admin_cannot_select_users_groups_error_explanation: "Пайдаланушы мен топ ақпаратын шығару үшін сәйкес рұқсаттарды иелене алмайсыз.",
		admin_cannot_select_users_groups_error_userResponse: "Әр түрлі пайдаланушы атымен кіру немесе IBM Content Manager жүйе әкімшіңізді сізге UserACLOwner артықшылығын беруді сұраңыз, ол пайдаланушы мен топ ақпаратын шығару үшін талап етеді.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2 клиенті табылмады.",
		oauth_client_not_found_error_explanation: "OAuth2 ${0} клиенті идентификаторы табылмады.",
		oauth_client_not_found_error_userResponse: "Жүйе әкімшісімен хабарласыңыз және оларға OAuth2 клиенті идентификаторы табылмағанын айтыңыз.",
		oauth_client_not_found_error_adminResponse: "Репозиторий теңшелімін алдын ала қараңыз және ол дұрыс OAuth2 клиенті идентификаторын қамтитынын тексеріңіз.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Репозиторидің қосылатын модулі орындалмады.",
		oauth_login_failed_error_explanation: "${0} репозиториіне кіру әрекеті орындалмады.",
		oauth_login_failed_error_userResponse: "Пайдаланушы идентификаторы және құпия сөз дұрыс екенін тексеріңіз және жүйеге кіруді қайталаңыз.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "${0} жүйесіне кіру әрекеті кезінде қате орын алды.",
		oauth_error_return_error_explanation: "${0} өкілеттігін растау әрекеті орындалмады.",
		oauth_error_return_error_userResponse: "Келесі мәселе бойынша жүйе басқарушысына хабарласыңыз: ${0} өкілеттігін растау әрекеті орындалмады және келесі қате туралы хабарды қайтарды: <br>${1}<br><b>қате:</b> ${2}.<br><b>сипаттама:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Веб-бағдарлама сервері журнал файлының жұмыс идентификаторындағы қателік туралы қосымша мәлімет.  Журнал файлдары туралы қосымша ақпаратты IBM білім орталығындағы &quot;IBM Content Navigator журнал файлдары&quot; бөлімінен көріңіз. ${0} өкілеттігін растау әрекеті туралы ақпаратты пайдаланып, мәселені түзеп көріңіз және OAuth2 іске қосылғанын тексеріңіз.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth мақсатты бағдарлама",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "қате",
		oauth_error_return_error_3: "қате сипаттамасы",

		oauth_error_unknown: "Танылмаған OAuth қате туралы хабары.",

		delete_share_permission_error: "Бөлісу жойылмады.",
		delete_share_permission_error_explanation: "Бөлісуді жоюға қажетті рұқсаттарыңыз жоқ.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Бұл элементті ортақ пайдалана алмайсыз.",
		class_not_support_share_error_explanation: "${0} класы ортақ пайдалануды қолдау үшін орнатылмаған.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Бұл элементті ортақ пайдалана алмайсыз.",
		rbr_not_support_share_error_explanation: "Құпия мазмұн элементке қосылған.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Пайдаланушы кіргісі келетін құрылғы пайдаланушының тіркелгісінен кіруге өкілеттігі анықталмаған.",
		box_oauth_error_invalid_request: "Сұрау қажетті параметрді жоғалтады, жарамсыз параметр мәнін қамтиды, параметрді бірден артық рет қамтиды немесе кері жағдайда, бұзылған болады.",
		box_oauth_error_unsupported_response_type: "Өкілетті сервер осы әдісті пайдаланып, өкілетті кодты алуды қолдамайды.  Сұрауыңыздағы код параметрінің мәнін тексеріңіз.",
		box_oauth_error_access_denied: "Ресурс иесі немесе өкілетті сервер сұрауды қажет етеді.",
		box_oauth_error_temporarily_unavailable: "Құрылғыңыздың жиілігі шектелген, өкілеттік сұрауларыңыздың жиілігін азайтыңыз немесе кішкене күтіңіз.",
		box_oauth_error_unknown: "Танылмаған Box қатесі туралы хабары.",

		admin_default_search_type: "Әдепкі іздеу түрі",
		admin_default_search_type_hover: "<b>Іздеу</b> өрісіндегі <b>Іздеу опциялары</b> мәзіріндегі әдепкі арқылы таңдалған опцияны көрсетіңіз.",
		admin_default_search_type_documents: "Құжаттар",
		admin_default_search_type_folders: "Қалталар",
		admin_default_search_type_folders_and_documents: "Құжаттар мен қалталар",

		admin_restricted_search_type: "Іздеуді қосуға рұқсат беру",
		admin_restricted_search_type_hover: "Әдепкі параметр бойынша, пайдаланушылар құжаттар мен қалталардың екеуін де іздей алады. Іздеу опциясын жасырғыңыз және тек құжаттарды іздеуге шектеу үшін, құжаттарды таңдаңыз және қалталарды таңдауды алып тастаңыз.</br>,</br>Іздеуді құжаттар мен қалталардың екеуінде де рұқсат етсеңіз, іздеу тақтасы қашан ашылғанын көрсетуге әдепкі опцияны таңдаңыз.",
		admin_restricted_search_type_documents: "Құжаттар",
		admin_restricted_search_type_folders: "Қалталар",
		admin_restricted_search_type_folders_and_documents: "Құжаттар мен қалталар",

		admin_default_search_version: "Әдепкі іздеу нұсқасы",
		admin_default_search_version_hover: "<b>Нұсқа</b> өрісіндегі <b>Іздеу опциялары</b> мәзіріндегі әдепкі арқылы қандай опция таңдалғанын көрсетіңіз.",

		admin_all_classes_search: "Барлық сыныптарды іздеу",
		admin_all_classes_search_hover: "Пайдаланушыларға барлық сыныптарда іздеуге рұқсат берілгендігін тексеріңіз және солай болса, құжатты іздеулерге не қосылуы керектігін көрсетіңіз.",
		admin_all_classes_search_removed_hover: "Барлық сыныптарды іздеу опциялары қол жетімді емес, себебі context-param allPseudoClassHidden параметрі шарлағыш бағдарламасында web.xml шын мәніне орнатылған.",
		admin_all_classes_search_hide: "Барлық сыныптарды іздеу таңдауын жою",
		admin_all_classes_search_documents_only_documents: "Құжаттарды іздеу тек құжаттарды, сақталған іздеулерді және жазба үлгілерін қамтиды",
		admin_all_classes_search_documents_non_folders: "Құжаттарды іздеу қалталар болмайтын кез келген элементтерді қамтиды",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Тармақ көрінісі:",
		admin_feature_config_tree_view_hoverhelp: "Шарлау қойындысы арқылы репозиторийдегі қалталар тізімін қабылдай алуын көрсетіңіз. Еге Шарлау қойындысын жасырсаңыз, пайдаланушылар мазмұн тізімін репозиторийдегі қалталарға шарлау үшін қолдануы тиіс.",
		admin_feature_config_selected_repositories_label: "Репозиторийлер:",
		admin_feature_config_selected_repositories_hoverhelp: "Осы мүмкіндікте пайдаланушылар қабылдай алатын репозиторийлерді таңдаңыз.",
		admin_feature_config_selected_repositories_select_state_hdr: "Репозиторий Таңдау",
		admin_feature_config_selected_repositories_name_hdr: "Репозиторий аты",
		admin_feature_config_selected_repositories_show_hdr: "Көрсету",
		admin_feature_config_invalid_icon_title: "Мүмкіндік кейбір талап етілген параметлерді иеленбеген",
		admin_feature_config_view_select_hdr: "Көріністі таңдау",
		admin_feature_config_view_hdr: "Көрініс",
		admin_feature_config_view: "Көрініс",
		admin_feature_config_views: "Көріністер:",
		admin_feature_config_views_hoverhelp: "Пайдаланушылардың мазмұн тізіміне қандай көріністі қолдана алатынын көрсетіңіз. Көріністер тізімделген реті бойынша көрсетіледі. Бірінші таңдалған көрініс, мүмкіндік үшін әдепкі көрініс болып табылады.<br><br><b>Маңызды:</b> Егер Filmstrip көрінісін іске қосқан болсаңыз, онда құжатты қарап алуды көру үшін HTML түрлендіруінің қарап шығу құралын теңшеңіз.",

		admin_custom_dialog_name: "Аты:",
		admin_custom_dialog_value: "Мән:",
		admin_custom_setting_name_hover: "Теңшеліміңізге қосқыңыз келген Daeja ViewONE параметрінің атын енгізіңіз. Теңшелім параметрлері туралы көбірек мәліметті Daeja ViewONE құжаттамасынан қараңыз.",
		admin_custom_setting_value_hover: "Daeja ViewONE теңшелімінің параметрлері үшін қолданғыңыз келген мәнді енгізіңіз. Теңшелім параметрлері үшін жарамды мәндер туралы көбірек мәліметті Daeja ViewONE құжаттамасынан қараңыз.",

		entry_template_name_required_message: "Entry Template Settings бағдарламасындағы өріс аты талап етіледі.",
		entry_template_name_invalid_message: "Entry Template Settings бағдарламасындағы өріс аты келесі таңбаларды иеленеді: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Арнайы пайдаланушылар мен топтар Entry Template Settings бағдарламасында өріспен бірге ортақтасу үшін таңдалса, онда сіз кем дегенде бір пайдаланушы немесе топты көрсетуіңіз керек.",
		entry_template_no_permission_to_save_to_teamspace_message: "Енгізу үлгісі параметрлеріндегі Сақтау пәрменінен таңдалған (${0}) уақыт белдеуіне енгізу үлгілерін қосу үшін рұқсат жоқ.",
		entry_template_save_in_destination_required_message: "<b>Элементті Сақтау Орнын орнату</b> бөліміндегі орынға әдепкі сақтауды көрсетуіңіз керек.",
		entry_template_save_in_destination_must_select_folder: "Егер <b>Сақтау</b> өрісін жасырған болсаңыз және пайдаланушылардан қалтаға жаңа элементтерді қосуды ұсынсаңыз, <b>Орындағы Әдепкі Сақтау</b> өрісінде, <b>Элементтің Сақтау Орнын орнату</b> бөлімінде қалтаны таңдауыңыз керек.",
		entry_template_what_to_save_required_message: "Set Options өызметінде нені сақтағыңыз келетініңізге бір таңдау жасаңыз.",
		entry_template_custom_workflow_empty_message: "Егер <b>Өзгертпелі Жұмыс ағымын...</b> таңдасаңыз, қолданғыңыз келген жұмыс ағымын іздеуіңіз және таңдауыңыз керек.",

		entry_template_new: "Жаңа Енгізу үлгісі",
		entry_template_name_hover: "Енгізу үлгісінің аты келесі таңбаларды иелене алмайды: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Енгізу үлгісінің аты келесі таңбалардың ешқайсысын иелене алмайды: * \\ / : ? \" < > |",
		entry_template_description_hover: "Бұл енгізу үлгісі мен басқа енгізу үлгілерінің арасын анықтауға, пайдаланушыларды қол жетімді ететін сипаттаманы ұсыныңыз.",
		entry_tempalte_save_in_hover: "Енгізу үлгісін қайда сақтауды көрсетіңіз.<br><br><b>Шектеу:</b> Егер енгізу үлгісін топ аймағына сақтаған болсаңыз, онда енгізу үлгісін тек қана топ аймағында қолдана аласыз.",
		entry_template_inherit_hover: "Егер осы опцияны таңдаған болсаңыз, тектік қалта үшін қауіпсіздік параметрлері, енгізу үлгілерімен бөлісетін топтар мен пайдаланушылардың тізіміне қосылады.",
		entry_template_builder_aria_label: "Енгізу үлгісін құрушы",
		entry_template_builder_layout_aria_label: "Енгізу үлгісі сипаттарын құрушы",

		entry_template_settings_document: "Енгізу үлгісін анықтау",
		entry_template_settings_folder: "Элементті сақтау орнын орнату",
		entry_template_settings_folder_intro: "Осы енгізу үлгісі арқылы қосылған элементтердің қайда сақталғанын көрсетіңіз.",
		entry_template_settings_properties: "Элемент сипаттарын орнату",
		entry_template_settings_properties_intro: "Осы енгізу үлгісін қолдану арқылы қосылған элементтерге, әдепкі немесе алдын ала анықталған мәндерді көрсете аласыз. Қосымша, қандай сипаттардың көрсетіліп тұрғанын және олардың қандай ретте көрсетіліп тұрғанын қадағалау үшін сипаттардың орналасуын өзгерте аласыз.",
		entry_template_settings_workflow: "Элемент үшін жұмыс үрдісін теңшеу",
		entty_template_settings_workflow_intro: "Енгізу үлгісін қолдану арқылы элементтерді қосқан кезде жұмыс ағымының іске қосылғанын көрсете аласыз.",
		entry_template_settings_security: "Элемент қауіпсіздігін орнату",
		entry_template_settings_security_intro: "Бұл енгізу үлгісін қолдану арқылы қосылған элементтер үшін әдепкі немесе алдын ала анықтайтын қауіпсіздікті көрсетіңіз. Тиісті рұқсаты бар пайдаланушылар, қосылғаннан кейін элементтің қауіпсіздігін өзгертуге қол жетімді болады.",
		entry_template_settings_options: "Элемент үшін параметрлерді орнату",
		entry_template_xt_warning: "Осы енгізу үлгісіне өзгерістерді сақтау, оны IBM Workplace XT енгізу үлгісінен IBM Content Navigator енгізу үлгісіне түрлендіреді. IBM Workplace XT бағдарламасы, IBM Content Navigator енгізу үлгісін қолдамайды.",

		entry_template_properties_edit_layout: "Орналасымды өзгерту...",
		entry_template_properties_read_only: "Тек оқуға арналған",
		entry_template_properties_hidden: "Жасырын",

		entry_template_destination_show: "<b>Ішінде сақтау</b> өрісін көрсету",
		entry_template_destination_show_hover: "Егер <b>Сақтау</b> өрісін көрсеткен болсаңыз, пайдаланушылар элементтердің қайда сақталатынын өзгерте алады.",
		entry_template_destination_hide: "<b>Ішінде сақтау</b> өрісін жасыру",
		entry_template_destination_hide_hover: "Егер <b>Сақтау</b> өрісін жасырсаңыз, пайдаланушылар элементтерді қайда сақтауды өзгерте алмайды.",
		entry_template_folder_save_in_default: "Әдепкі <b>ішінде сақтау</b> орны:",
		entry_template_folder_save_in_default_hover: "Осы енгізу үлгісін қолдану арқылы элементтердің қайда қосылатын әдепкі орнын көрсетіңіз.<br><br>Таңдаған әдепкі орын, енгізу үлгісінің орындау уақыты қасиеттерінде шектеулерді міндеттейді:<ul><li>Пайдаланушылар әртүрлі репозиторийлерді таңдай алады.</li><li>Егер әдепкі орын топ аймағы болса, пайдаланушылар әртүрлі топ аймағын таңдай алмайды.</li></ul>Дегенмен, егер пайдаланушылар осы енгізу үлгісін қалтамен байланыстырса, пайдаланушылар осы енгізу үлгісіне теңшелген сақтау орнын алдын ала анықтау алады.",
		entry_template_folder_restrict_choice: "Пайдаланушыларға әдепкі орынға элементтерді немесе әдепкі орынның еншілес қалтасын қосуды ұсыну",
		entry_template_folder_file_in_required: "Пайдаланушыларға жаңа элементтерді қалтаға қосуды ұсыну",
		entry_template_folder_file_in_required_hover: "Егер бұл опцияны таңдамаған болсаңыз, пайдаланушылар репозиторийдің түбір қалтасына элементтерді қосады.<br><br><b>Шектеу:</b> жұмыс үстелі теңшелімі, пайдаланушыларға қалтаны таңдауды ұсынуы керек.",

		entry_template_document_type_show: "<b>Не қосылады</b> өрісін көрсету",
		entry_template_document_type_show_hover: "Егер <b>Нені сақтағыңыз келеді</b> өрісін көрсетсеңіз, таңдаған элементтер опциялар сияқты <b>Нені сақтағыңыз келеді</b> өрісінде көрсетіледі.",
		entry_template_document_type_hide: "<b>Не сақталады</b> өрісін жасыру",
		entry_template_document_type_hide_hover: "Егер <b>Нені сақтағыңыз келеді</b> өрісін жасырған болсаңыз, таңдаған құжаттың түрі әрқашан осы енгізу үлгісін қолдану арқылы пайдаланушылар құжатты қосқан кезде қолданады.",
		entry_template_document_type: "Осы енгізу үлгісі келесі элементтерді қосу үшін қолданыла алады:",
		entry_template_document_type_hover: "Егер <b>Нені сақтағыңыз келеді</b> өрісін көрсетсеңіз, таңдаған элементтер опциялар сияқты <b>Нені сақтағыңыз келеді</b> өрісінде көрсетіледі.<br><br>Егер <b>Нені сақтағыңыз келеді</b> өрісін жасырған болсаңыз, таңдаған құжаттың түрі әрқашан осы енгізу үлгісін қолдану арқылы пайдаланушылар құжатты қосқан кезде қолданады.",

		entry_template_misc: "Қосымша опциялар:",
		entry_template_auto_classify_show: "Құжаттың мазмұнын автоматты түрде сыныптау",
		entry_template_auto_classify_show_hover: "Құжат FileNet Content Manager бағдарламасында сыныпталған кезде, құжаттың мазмұндары құжат үшін тиісті сынып пен сипаттың мәндерін анықтау үшін тексеріледі.<br><br>Жүйе әкімшісіне мазмұнды сыныптау Content Platform Engine бағдарламасында іске қосылғанын анықтауды айтыңыз.<br><br>Егер осы опцияны іске қосқан болсаңыз, құжаттың сыныбы мен сипаттарын, пайдаланушылар репозиторийге құжатты қосқан кезде өзгерте алады.",
		entry_template_allow_duplicate_file_names: "Көшірме файлының аттарымен құжаттарға рұқсат ету",
		entry_template_allow_duplicate_file_names_hover: "Әдепкіде, FileNet Content Manager бағдарламасындағы қалтаға бірдей атпен құжаттарды қоса аласыз. Егер таңдалған сақтаудағы әрбір файл бірегей атқа ие болғанын қаласаңыз, осы опцияны тазалай аласыз.",
		entry_template_allow_compound_documents: "Бұл құжатқа, құрамдас құжаттың тектігі болуға рұқсат ету",
		entry_template_version_show: "Қосу және тексеру үшін нұсқа параметрлерін көрсету",
		entry_template_version_hide: "Қосу және тексеру үшін нұсқа параметрлерін жасыру",
		entry_template_version_to_add_as: "Әдепкі нұсқаны қосу:",
		entry_template_version_default: "Әдепкі нұсқа параметрі:",
		entry_template_version_default_checked: "Негізгі нұсқа",
		entry_template_version_default_unchecked: "Қосымша нұсқа",
		entry_template_version_display: "Құжаттың нұсқасы:",
		entry_template_version_display_show: "Көрсету",
		entry_template_version_display_hide: "Жасыру",
		entry_template_version_default_add: "Әдепкі нұсқаны қосу:",

		entry_template_checkin_version_show: "Тіркелу үшін нұсқа параметрлерін көрсету",
		entry_template_checkin_version_hide: "Тіркелу үшін нұсқа параметрлерін жасыру",

		entry_template_checkin_version_message_no_versions: "Таңдалған сыныптың нұсқа саясаты пайдаланушылардың құжаттың жаңа нұсқасында тексеруінің алдын алады.",
		entry_template_checkin_version_message_always_version: "Таңдалған сыныптың нұсқа саясаты пайдаланушылардың құжаттың ағымдағы нұсқасын ауыстыруының алдын алады.",

		entry_template_applied: "Бұл енгізу үлгісін қолданыңыз, пайдаланушылар:",
		entry_template_applied_add: "құжаттарды қосу (ұсынылады)",
		entry_template_applied_add_folder: "Қалталар жасау (міндетті)",
		entry_template_applied_checkin: "Тіркелу",
		entry_template_applied_properties_group: "Сипаттарды көру немесе өңдеу:",
		entry_template_applied_properties: "Сипаттар терезесінде",
		entry_template_applied_viewer: "Бағдарламашық қарап шығу құралында",
		entry_template_applied_docinfo: "Құжаттың мәліметтік тақтасында",
		entry_template_applied_no_class_support: "Бұл енгізу үлгісі, элементтерді қосу үшін қолданылады бірақ құжаттарды тексеру немесе көру және сипаттарды өңдеу үшін қолданылмайды. Таңдалған сынып осы жағдайларды қолдау үшін өзгертілуі керек. Егер енгізу үлгісін осы жағдайларда қолданғыңыз келсе, әкімшіден енгізу үлгісінің Идентификаторларын сақтай алатындай ету үшін сыныпты өзгертуге, әкімші құралын қолдануды сұраңыз.",
		entry_template_applied_no_child_component_support: "Таңдалған сынып еншілес құрамдастарды және анықталған, сипаттың орнын қамтиды. Сипаттың орындары еншілес құрамдастарды қолдамайды. Еншілес құрамдастары пайдаланушыларда көрсетілмейді.",
		entry_template_applied_child_component: "Таңдалған сыныптың құрамында еншілес құрамдастар бар. Олар пайдаланушыда көрсетілетін болады бірақ осы енгізу үлгісіндегі еншілес құрамдастарды теңшей алмайсыз.",

		entry_template_properties_show: "<b>Сипаттар</b> бөлігін көрсету",
		entry_tempalte_properties_show_hover: "Егер <b>Сипаттар</b> бөлімін көрсетсеңіз, пайдаланушылар енгізу үлгісінде көрсетілген әрбір сипат мәндерін және тек қана оқу үшін емес сипаттарын өзгерте алады.",
		entry_template_properties_hide: "<b>Сипаттар</b> бөлімін жасыру",
		entry_template_properties_hide_hover: "Егер <b>Сипаттар</b> бөлімін жасырған болсаңыз, пайдаланушылар кез келген сипат мәндерін өзгерте алмайды. Енгізу үлгісі, осы енгізу үлгісін қолдану арқылы элементтерді қосқан кезде, қолданғыңыз келген барлық мәндерді анықтауы керек.",

		entry_template_security_show: "<b>Қауіпсіздік</b> бөлімін көрсету",
		entry_template_security_show_hover: "Егер <b>Қауіпсіздік</b> бөлімін көрсеткен болсаңыз, тиісті рұқсаты бар пайдаланушылар, элементтің қауіпсіздігін өзгерте алады.",
		entry_template_security_hide: "<b>Қауіпсіздік</b> бөлімін жасыру",
		entry_template_security_hide_hover: "Егер <b>Қауіпсіздік</b> бөлімін жасырсаңыз, пайдаланушылар элементтердің қауіпсіздігін өзгерте алмайды. Енгізу үлгісі, элементтер қосылған және өңделген кезде қолданғыңыз келетін барлық қауіпсіздік параметрлерін анықтауы керек.",
		entry_template_security_policy: "Қауіпсіздік саясаты:",
		entry_template_security_policy_hover: "Таңдаған қауіпсіздік саясатына байланысты, қауіпсіздік саясаты келесіні жасай алады:<br><ul><li><b>Элемент Қауіпсіздігін Орнату</b> арқылы көрсетілген рұқсаттарды алдын ала анықтайды.</li><li><b>Элемент Қауіпсіздігін Орнату</b> арқылы көрсетілген рұқсаттарды қосады.</li></ul>",
		entry_template_security_policy_none: "ешқандай қауіпсіздік саясаты таңдалмады",
		entry_template_security_inherit: "Қауіпсіздік параметрлерін, тектік қалтадан мұралау",
		entry_tempalte_save_in_hover: "Енгізу үлгісін қайда сақтауды көрсетіңіз.<br><br><b>Шектеу:</b> Егер енгізу үлгісін топ аймағына сақтаған болсаңыз, онда енгізу үлгісін тек қана топ аймағында қолдана аласыз.",
		entry_template_security_inherit_item_security_hover: "Егер осы опцияны таңдаған болсаңыз, тектік қалта үшін қауіпсіздік параметрлері, келесі бір элементтер арқылы анықталатын қауіпсіздік параметрлеріне қосылады:<ul><li><b>Элемент Сипаттарын Орнату</b> бөлімінде көрсетілген сынып</li><li><b>Элемент Қауіпсіздігін Орнату</b> бөлімінде көрсеткен өзгертпелі қауіпсіздік</li></ul>",
		entry_template_security_change: "Таңдалған сынып арқылы анықталған қауіпсіздіктің үстіне жазыңыз",
		entry_template_security_change_hover: "Егер осы опцияны таңдасаңыз, сынып үшін анықталған қауіпсіздік параметрлері, әдепкі арқылы көрсетіледі. Енгізу үлгісі үшін қауіпсіздік параметрлерін өзгерте аласыз.<br><br>Егер <b>Қауіпсіздік</b> бөлімін көрсеткен болсаңыз, тиісті рұқсаты бар пайдаланушылар, элементтің қауіпсіздігін өзгерте алады.<br><br>Егер осы опцияны таңдасаңыз және тектік қалтадан мұралау үшін қауіпсіздік параметрлерін таңдасаңыз, кез келген мұраланған рұқсаттар, көрсеткен қауіпсіздікке қосылады.",
		entry_template_security_default_item_security: "Элементті қосатын пайдаланушының әдепкі элемент қауіпсіздігінің үстіне жазыңыз",
		entry_template_security_policy_message_override: "Таңдалған қауіпсіздік саясаты Қауіпсіздікті орнату астында көрсетілген рұқсаттарды қайта жазу үшін теңшелген.",
		entry_template_security_policy_message_add: "Таңдалған қауіпсіздік саясаты Қауіпсіздікті орнату астында көрсетілген рұқсаттарды қосу үшін теңшелген.",
		entry_template_security_policy_preserve_true_hover: "Тікелей рұқсаттарды сақтайды",
		entry_template_security_policy_preserve_false_hover: "Тікелей рұқсатты сақтамайды",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Арнайы рөлдер",
		entry_template_security_class_role_search_title: "Рөлді іздеу:",
		entry_template_secuirty_class_member_title: "${0} үшін қатысушылардың тізімі",
		entry_template_secuirty_class_folder_only: "Бұл рұқсаттар осы қалтаға ғана қолданылады",
		entry_template_secuirty_class_folder_and_immediate_children: "Бұл рұқсаттар осы қалтаға қабылданады және осы қалтадан қауіпсіздікті иелену үшін теңшелген сол жылдам еншілеске қабылдау. ",
		entry_template_secuirty_class_folder_and_all_children: "Бұл рұқсаттар осы қалтаға қабылданады және осы қалтадан қауіпсіздікті иелену үшін теңшелген барлық еншілестерді қабылдау. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Бұл рұқсаттар осы қауіпсіздікті иелену үшін теңшелген сол жылдам еншілеске қабылдау",
		entry_template_secuirty_class_folder_all_children_not_folder: "Бұл рұқсаттар осы қалтаның қауіпсіздігін иеленуге теңшелген барлық ұрпақтарға қолданылады",

		entry_template_class_security_message_no_override: "Қауіпсіздіктің үстіне жазуынан пайдаланушылардың алдын алатын таңдалған сынып қауіпсіздігі.",
		entry_template_class_security_required_privileges: "<b>Маңызды</b>: Таңдалған сыныптың қауіпсіздігінің үстіне жазу үшін, осы енгізу үлгісін пайдаланып элементтерді қосатын пайдаланушыларда ItemSetACL және UserACLOwner басымдықтары болу керек.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Тізбекті үлгі жұмыс ағымы",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Параллельді үлгі жұмыс ағымы",
		entry_template_workflow_type_existing: "Тұтынушы жұмыс ағымы...",
		entry_template_workflow_launch_prompt: "Пайдаланушылардан жұмыс ағымын іске қосуды сұрау",
		entry_template_workflow_launch_auto: "Автоматты түрде жұмыс ағымын іске қосу",
		entry_template_workflow_modify_launch: "Пайдаланушыларға іске қосу қадамын өзгертуге рұқсат беру",
		entry_template_workflow_modify_launch_hover: "Жұмыс ағынын іске қосу жолын пайдаланушыларға өзгерткіңіз келсе, осы опцияны таңдаңыз.",

		entry_template_optionsButton_title: "Өзгерту",
		entry_template_optionsButton_readonly_title: "Байланысты көру",
		entry_template_optionsDialog_title: "Қалтаны байланыстыру параметрлері",
		entry_template_removeButton_title: "Жою",
		entry_template_addButton_title: "Қосу",
		entry_template_selected_entry_templates: "Таңдалған енгізу үлгілері",
		entry_template_docs_added_to_template_destination: "Енгізу үлгісінде көрсетілген орналасымға құжаттар қосылды.",
		entry_template_docs_added_to_other_object_store: "Бұл енгізу үлгісі, элементтерді ${0} нысан қоймасына қосады.",
		entry_template_inherited_entry_templates_label: "Мен қалаймын: ",
		entry_template_inherited_entry_templates: "Енгізу үлгісі байланысын қалтадан иелену: ",
		entry_template_inherited_entry_templates_not: "Осы қалта үшін жаңа байланыстарды құру",
		entry_template_inherited_folder_path: "Таңдалған енгізу үлгілері тізіміндегі енгізу үлгілері келесі қалтамен байланыстырылған: ${0}. <br> Қалтаға арналған жол мынадай ${1}.",
		entry_template_folder_associations_title: "Енгізу үлгілерін байланыстыру",
		entry_template_folder_associations_intro: "Енгізу үлгісін қалтамен байланыстырған кезде пайдаланушылар енгізу үлгісін элементтерді қалтаға қосу үшін қолдануы тиіс. Егер сіз бірнеше енгізу үлгілерін қалтамен байланыстырсаңыз, пайдаланушылар қай енгізу үлгісін қолдану керек екендігін таңдай алады.",
		entry_tempalte_folder_associations_entrytemplate: "Енгізу үлгісі: ",
		entry_template_avaliable_entry_templates: "Қол жетімді енгізу үлгілеріtes",
		entry_template_fileTypes_intro_title: "Рұқсат етілген файл түрлері:",
		entry_template_fileTypes_intro: "Әдепкі бойынша енгізу үлгілері құжаттың кез келген түрін репозиторийге қосу үшін қолданыла алады. Алайда, егер сіз бір немесе бірнеше файл түрлерін таңдасаңыз, енгізу үлгілері тек пайдаланушылар көрсетілген файл түріне сәйкес болатын құжаттарды қосқан кезде қол жетімді болады.",
		entry_template_fileTypes: "Файл түрлері",
		entry_template_fileType_error: "Жарамсыз файл түрлері бір немесе бірнеше енгізу үлгісі байланыстарына таңдалады. Жарамсыз файл түрлерін осы енгізу үлгісі байланыстары сақталған кезде жойылуы тиіс.",
		entry_template_fileTypes_any_type_of_file: " Файлдың кез келген түрі",
		entry_template_description_label: "Сипаттама",
		entry_template_ItemInfoPrefix: "Келесімен байланыстыру: ",
		entry_template_TargetObjectStoreName: "Мақсатты нысан қоймасы",
		entry_template_class: "Сынып",
		entry_template_current_folder_as_parent: "Қалтаны алушы ретінде қолдану",
		entry_template_view_minetypes: "MIME түрлерін көру",
		entry_template_avaliable_MIME_types: "Қолжетімді файл түрлері",
		entry_template_selected_MIME_types: "Таңдалған файл түрлері",
		entry_template_MIME_type_column: "файл түрінің санат аты",
		entry_template_file_type_not_existing: "Жарамсыз файл түрлерін жойыңыз.",
		entry_template_MIME_types: "MIME түрлері:",
		entry_template_MIME_types_info_dialog_title: "MIME түрлері келесіге арналған",
		entry_template_destination_label: "Құжаттарды келесіге қосу: ",
		entry_template_destination_help: "Пайдаланушылар құжаттарды осы қалтаға таңдалған енгізу үлгілерін қолдану арқылы қосқан кезде құжаттардың қайда сақталғанын көрсетіңіз.",
		entry_template_radioButton_folder_destination: "Таңдалған қалта",
		entry_template_radioButton_template_destination: "Алушы енгізу үлгісінде көрсетілген",
		entry_tempalte_teamspace_default: "Әдепкі енгізу үлгісі",
		entry_template_folder_associations_save_new: "Кейбір енгізу үлгісінің байланысын өзгерттіңіз. Өзгертулеріңізді сақтамай, осы терезені жапқыңыз келеді ме?",
		entry_template_mode_binding_label: "Сипаттар",
		entry_template_columns_className: "Сынып атауы",
		entry_template_columns_type: "Үлгі түрі",
		entry_template_columns_workflow: "Жұмыс процесінің аты",
		entry_template_columns_destination: "Жеткізу орны",
		entry_template_association_less_than_record: "Мұнда Таңдалған Енгізу Үлгісінде тізімделмеген ${0} мәнінің енгізу үлгісі бар. Оларды көруге рұқсатыңыз жоқ. Немесе олар жойылған. Көбірек мәлімет алу үшін, жүйе әкімшісіне хабарласыңыз.",
		/* Request */

		progress_message_general: "Жұмыс істеуде..",
		cancel_message_general: "Әрекеттен бас тартылды.",
		ie8_not_supported_browser: "IE8 қызметі, қолданылмайтын браузер.",
		progress_message_getDesktop: "Жұмыс үстелін жүктеп алуда...",
		progress_message_getActions: "Әрекеттерді жүктеп алуда...",
		progress_message_getViewers: "Жұмыс үстелін жүктеп алуда...",
		progress_message_logon: "Кіруде...",
		progress_message_logoff: "Шығуда...",
		progress_message_getContentClasses: "Класстарды шығаруда...",
		progress_message_openContentClass: "Класс мәліметтерін шығаруда...",
		progress_message_od_getCabinets: "Файлдарды шығаруда...",
		progress_message_getSearchTemplates: "Іздеулерді шығаруда...",
		progress_message_od_getTemplates: "Қалталарды шығаруда...",
		progress_message_od_openCabinet: "Қалталарды шығаруда...",
		progress_message_openSearchTemplate: "Іздеуді ашуда...",
		progress_message_od_openTemplate: "Қалтаны ашуда...",

		progress_message_getWorklists: "Жұмыс тізімдерін шығаруда...",
		progress_message_getWorkItems: "Жұмыс элементтерін шығаруда...",
		progress_message_getNextWorkItems: "Жұмыс элементтерін шығаруда...",
		progress_message_getStepParameters: "Жұмыс элементі ақпаратын шығаруда...",
		progress_message_getStepAttachmentItems: "Тіркеме aқпаратты шығаруда...",
		progress_message_getDependentParameters: "Сипат ақпаратын шығаруда...",

		progress_message_p8_getProcessApplicationSpaces: "Бағдарлама бос орындарын шығару...",
		progress_message_p8_getProcessRoles: "Үрдіс рөлдерін шығаруда...",
		progress_message_p8_getProcessInbaskets: "Себет ішінлегілерін шығаруда...",
		progress_message_p8_getProcessorInformation: "Үрдіс ақпаратын шығаруда...",
		progress_message_p8_getFilterCriteria: "Себеттегі сүзгіні шығаруда...",
		progress_message_p8_getLaunchParameters: "Жұмыс элементі ақпаратын шығаруда...",
		progress_message_p8_getStepAttachments: "Жұмыс элементі тіркемесіг шығаруда...",
		progress_message_p8_getSubscriptions: "Жұмыс ағымы ішкі сценарийлерін шығаруда...",
		progress_message_p8_getTrackerParameters: "Жұмыс элементі ақпаратын шығаруда...",
		progress_message_p8_getTrackerHistory: "Жұмыс элементі тарихын шығаруда...",
		progress_message_p8_getTrackerMilestones: "Жұмыс элементі бақыылауын шығаруда...",
		progress_message_p8_completeStep: "Жұмыс элементін аяқтауда...",
		progress_message_p8_moveToInbox: "Элементті себетке көшіруде...",
		progress_message_p8_returnToSender: "Жұмыс элементін қайтаруда...",
		progress_message_p8_reassign: "Жұмыс элементін қайта тағайындауда...",
		progress_message_p8_launchWorkflow: "Жұмыс ағымын орналастыруда...",
		progress_message_p8_getTransferedWorkflows: "Жұмыс ағымы ақпаратын шығаруда...",

		progress_message_cm_getProcesses: "Жұмыс ағымы ақпаратын шығаруда...",
		progress_message_cm_completeStep: "Жұмыс элементін шығаруда...",
		progress_message_cm_getItemProcessInformation: "Жұмыс ағымы ақпаратын шығаруда...",

		progress_message_search: "Іздеу...",
		cancel_message_search: "Іздеуден бас тартылды.",
		progress_message_getContentItems: "Элемент ақпаратын шығаруда...",
		progress_message_openFolder: "Қалтаны ашуда...",
		progress_message_addItem: "Элементті құруда...",
		progress_message_checkIn: "Элементті тексеруде...",
		progress_message_changePassword: "Құпия сөзді өзгертуде...",
		progress_message_getDefaultInstancePermissions: "Әдепкі рұқсаттарды шығаруда...",
		progress_message_openItem: "Элемент ақпаратын шығаруда...",
		progress_message_saveItem: "Элемент ақпаратын сақтауда...",
		progress_message_getPermissions: "Рұқсаттарды шығаруда...",
		progress_message_getEntryTemplates: "Енгізу үлгілерін шығаруда...",
		progress_message_openEntryTemplate: "Енгізу үлгісін ашуда...",
		progress_message_getFavorites: "Қалаулыларды шығаруда...",
		progress_message_getFoldersFiledIn: "Қалталарды шығаруда...",
		progress_message_getDocumentVersions: "Нұсқаларды шығаруда...",
		progress_message_getDependentAttributeInfo: "Төлсипат ақпаратын шығаруда...",
		progress_message_packageForDownload: "Жүктеу үшін буу...",
		progress_message_convertDocument: "Мазмұнды түрлендіру...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Мазмұн түрін шығарып алу...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Құжатты қосу...",

		progress_message_desktop_reload: "Клиент жұмыс үстелін қайта жүктеп жатыр.<br>Сізден жүйеге қайта кіру сұралуы мүмкін.",
		progress_message_email: "Хабарлама жіберу...",
		cancel_message_email: "Хабарламадан бас тартылды.",

		progress_message_p8_getOfficeOnlineTemplates: "Office үлгісін шығаруда...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Қалаулылар тармағы",
		favorites_content_list_label: "Қалаулылар мазмұн тізімі",
		syncItems_tree_label: "Менің үндестірілген файлдар тармағым",
		syncItems_content_list_label: "Менің үндестірілген файлдарымның мазмұн тізімі",
		my_checkouts_content_list_label: "Менің Рәсімдеулерімнің Мазмұн Тізімі",
		browse_tree_label: "Шарлау тармағы",
		browse_content_list_label: "Мазмұн тізімін шарлау",
		repository_selector_label: "Репозиторийні таңдаушы",
		teamspaces_content_list_label: "Топ бос орны мазмұн тізімі",
		templates_content_list_label: "Үлгілер мазмұн тізімі",
		work_content_list_label: "Жұмыс мазмұнының тізімі",
		work_tree_label: "Жұмыс тармағы",
		admin_tree_label: "Әкімші тармағы",
		admin_tabs_label: "Әкімші қойындылары",
		search_tabs_label: "Іздеу қойындылары",
		search_selector_label: "Таңдаушыны іздеу",
		teamspace_browse_content_list_label: "Топ бос орнының шарлау мазмұны тізімі",
		teamspace_search_tabs_label: "Топ бос орнының іздеу қойындылары",

		/* Desktop */
		undo_description: "Болдырмау ${0}",
		redo_description: "Қайтару ${0}",

		/* Application Tabs */
		home: "Басты",
		repository: "Репозиторий",
		repository_type: "Репозиторий Түрі:",
		repository_type_header: "Репозиторий түрі",
		repository_type_any: "Барлық репозиторийлер",
		repository_type_contains_label: "Репозиторий түрі қамтиды",
		document_info: "Құжат ақпараты",
		team: "Топ",
		administration: "Әкімші",

		/* Home Page */
		recent_activity: "Соңғы әрекеттер",
		repos_and_wrksp: "Репозиторийлер және топ бос орындары",
		workspaces: "Топ аймақтары",
		repositories: "Репозиторийлер",
		templates: "Үлгілер",
		favorites: "Таңдаулылар",
		my_checkouts: "Менің тексерулерім",
		mySyncedFiles: "Менің үндестірілген файлдарым",
		links: "Байланыстар",
		name_label: "Аты",
		description_label: "Сипаттама:",
		type_label: "Түр:",
		type_heading: "Түр",
		type_id_label: "Түр идентификаторы",
		server_type_icon: "Сервер Түрі Белгішесі",
		server_type_heading: "Сервер түрі",
		server_type: "Сервер Түрі",
		port_heading: "Порт саны",
		port_label: "Порт нөмірі:",
		server_name_heading: "Сервер аты",
		server_label: "Сервер атауы:",
		server_url_label: "Сервердің URL мекен-жайы:",
		id_label: "Идентификаторы:",
		id_heading: "Идентификатор",
		connected_label: "Қосылған:",
		repository_label: "Репозиторий",
		modified_label: "Өзгерткен:",
		modified_date_label: "Келесіде өзгертілген:",
		status_label: "Күй:",
		last_modified_label: "Соңғы өзгерткен:",

		modifier: "Арқылы өзгертілген",
		modified_date: "Келесіге өзгертілген",

		/* Favorites */
		new_favorite_label: "Таңдаулыларға қосу",
		edit_favorite_label: "Таңдаулының атын өзгерту",
		remove_favorite_label: "Таңдаулылардан жою",
		missing_alias_message: "Атауды көрсету қажет.",
		sync_favorite_enable_hover: "Бұл элемент түрленліру үшін іске қосылған.",
		sync_favorite_disable_hover: "Бұл элемент түрлендірілмеуде",
		sync_favorite_sync_unavailable_hover: "Түрлендіру осы нысан түру үшін қол жетімсіз.",
		sync_enable_label: "Элементті синхрондау",
		sync_enable_label_hover: "Бұл элемент құрылғыларға үндестіріледі.",
		delete_favorite_confirmation_question: "Осы элементті таңдаулыларыңыздан жойғыңыз келеді ме?",
		alias_label: "Аты:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Таңдалған элемент әлдеқашаннан сіздің таңдаулыларыңызда орналасқан.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Бұл элемент таңдаулылар тізміңізге қосылуы мүмкін емес.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Сіз тек ${0} таңдаулыларын ғана сақтай аласыз.",
		add_favorite_max_reached_response: "Егер берілген элементті таңдамалылар тізіміне қосқыңыз келсе, берілген элементті қоспастан алдын бар таңдамалыны жоюыңыз керек.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Таңдалған құжаттарды PDF файлына түрлендіру мүмкін болмады.",
		download_as_pdf_max_content_error_explanation: "Деректің тек қана ${0} MB-тын, PDF файлына түрлендіре аласыз. Дегенмен, таңдалған құжаттар ${0} MB-тан асады.",
		download_as_pdf_max_content_error_response: "Бірнеше құжаттарды таңдаңыз немесе кішірек құжаттарды таңдаңыз және құжаттарды қайтадан PDF файлдары сияқты жүктеңіз.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Таңдалған құжаттар жеке PDF файлына түрлене алмайды.",
		download_as_pdf_mimetype_check_error_explanation: "Бірнеше бөлімді құжаттарды жеке PDF файлына түрлендіру үшін, әрбір бөлімде бірдей MIME түрі болуы керек.",
		download_as_pdf_mimetype_check_error_response: "PDF файлына түрлендіру үшін, әртүрлі құжатты таңдаңыз.",

		/* Activity Stream */
		show_label: "Көрсету:",
		all_filter: "Барлық",
		notifications_filter: "Хабарландырулар",
		workitems_filter: "Жұмыс элементтері",
		documentes_filter: "Құжаттар",
		all_favorites_filter: "Барлық қалаулар",
		folders_filter: "Қалталар",
		searches_filter: "Іздеулер",
		teamspaces_filter: "Топ аймақтары",

		/* Repository */
		all_search_templates: "Барлық іздеулер",
		all_od_searches: "Барлық іздеу үлгілері",
		recent_searches: "Кейінгі іздеулер",
		opened_searches: "Ашылған іздеулер",

		all_worklists: "Барлық кірістер",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Әр бір жұмыс тізімінің тізімі",

		/* Teamspace */
		all_workspaces: "Барлық топ бос орындары",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Әр бір топ бос орнының тізімі",
		workspace_title: "Топ бос орны",
		workspace_icon: "Топ бос орны Белгішесі",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Қол жетімді",
		workspace_stat_offline: "Қол жетімсіз",
		workspace_stat_validate: "Тексеруді талап етеді",
		workspace_stat_pendingDelete: "Жою бөгелісі",
		workspace_stat_deleteError: "Жою сәтсіз болды",

		undefined_value: "Анықталмаған",
		undefined_reference_value: "Анықталған сілтеме жоқ.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Көптеген нәтижелер серверде қол жетімді болуы мүмкін.",
		search_all_data: "Барлық деректі іздеу.",
		search_all_teamspaces: "Барлық топ бос орындарын іздеу.",
		teamspace_filter_results: "${0} нәтижелерді көрсету. ",
		displaying_filtered_results: "Сүзілген нәтижелерді көрсету. ",
		displaying_recent_results: "Соңғы ${0} күнде өзгертілген топ аймақтарын ғана көрсетіңіз. Басқа топ аймақтарын табу үшін, сипаттама немесе атау арқылы топ аймақтарының тізімін сүзіңіз. ",
		clear_filter: "Сүзгіні тазалау.",

		/* FolderTreeModel */
		move_item_task: "Элементті жылжыту",
		copy_item_task: "Элементті көшіру",
		add_item_task: "Элементті қосу",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Келесі қалта табылмады: ${0}. Ол жойылған болуы мүмкін немесе қалта осы көріністен ашыла алмайды. Қалтаға шарлау үшін тармақ көрінісінен Қосымша байланысты басыңыз. Егер сіз қалтаны көре алмасаңыз, мазмұн көірнісі тізімін жаңартыңыз.",
		more_paging_link: "көбірек ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Күй",
		status_dialog_cancel_label: "Болдырмау",

		/* ErrorDialog */
		error_dialog_title: "Қате",
		error_dialog_icon_tooltip: "Қате",
		error_dialog_stack_trace_title: "Тізбекті трассирлеу",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Растау",

		close_browser_msg: "Шолғыш терезесін жабыңыз.",

		/* MessageDialog */
		message_dialog_title: "Ақпарат",
		warning_dialog_title: "Ескерту",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Қош келдіңіз ${0}",
		server: "Репозиторий:",
		username: "Пайдаланушы аты:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Пайдаланушы аты репозиторийге кіру үшін талап етіледі.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Құпия сөз репозиторийге кіру үшін талап етіледі",
		password: "Құпия сөз:",
		login: "Кіру",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Сеанстың мерзімі аяқталды. Қайтадан кіріңіз.",
		login_repository_connection_expired_message: "${0} репозиторийге қосылымның мерзімі аяқталды. Қайтадан кіріңіз.",
		login_site_connection_expired_message: "Торапқа қосылу мерзімінің уақыты өткен. Қайтадан кіріңіз.",
		login_new_server_message: "${0} үшін пайдаланушы аты мен құпия сөзін енгізіңіз.",
		login_error_more_information_message: "Қосымша ақпарат",

		disconnect_box_account_user: "Box есебін ажырату: ${0}",
		disconnect_box_account: "Box есебін ажырату",
		disconnect_box_accounts: "Box есептерін ажырату",

		// OAuth2/Box Login
		login_ssl_connection_required: "SSL қосылым Box репозиторийінің қатынасы үшін талап етіледі.",
		login_oauth_popup_blocked: "Қалқымалы терезе құрсауланады. Жүйеге кіру үшін, шолғышыңыздағы қалқымалы терезелерді ұрсаудан шығаруыңыз керек.",
		login_oauth_click_here: "Егер 5 секундтың ішінде қайта бағытталмасаңыз, келесіні басыңыз.",
		login_oauth_title: "Кіру",
		login_oauth_grant_intro: "${0} элементі үшін түпнұсқалық растаманы белгілеу.",
		login_pane_oauth_click_here: "Жүйеге кіру үшін осы жерді басыңыз.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Веб тұтынушыдан шыққыңыз келеді ма?",
		logout_confirmation_button: "Шығу",

		/* ChangeLocaleDialog */
		change_locale: "Тілді және тұрақты параметрді өзгерту",
		change_locale_use_browser_language: "Шолғыш тіл параметрін (Әдепкі) қолдану",
		change_locale_use_browser_locale: "Шолғыш тіл параметрін (Әдепкі) қолдану",
		change_locale_description: "Егер сіз шолғыщ кукилеріңізді жойсаңыз, онда тіліңізді және тіл параметрлеріңізді қайта орнатуыңыз керек.",
		change_locale_language_locale: "Бағдарлама тілі:",
		change_locale_language_locale_hover: "Бұл параметр веб тұтынушыдағы мәтіннің тілін өзгертеді, бірақ бағдарламадағы құжаттың тілін өзгертпейді.<br><br>Әдепкі параметр сіздің веб шолғыш теңшелімі параметрлеріңізде көрсетілген тілді қолданады.",
		change_locale_value_format_locale: "Бағдарлама тілі:",
		change_locale_value_format_locale_hover: "Тіл веб тұтынушыдағы күндер, уақыттар және сандардың пішімін анықтайды.<br><br>Әдепкі параметр сіздің веб шолғыш теңшелімі параметрлеріңізде көрсетілген тілмен байланыстырылған пішімдерді қолданады.",
		change_locale_for_office: "Қос бағытты мәтін параметрлері:",
		change_locale_bidi_support_flag: "Екі бағытты қолдауды іске қосу",
		change_locale_bidi_support_flag_hover: "Екі бағытты қолдау іске қосылған кезде, пайдаланушы кіріс өрістерінде қолданылған мәтіннің бағытын орната алады.  Қалталар, сияқты элементтерге енгізілген мәтін енгізілген сияқты бірдей бағытта көрсетілуі мүмкін.",
		change_locale_base_text_direction: "Мазмұнға арналған негізгі мәтін бағыты:",
		change_locale_base_text_direction_hover: "кіріс өрістеріне енгізіліп жатқан мәтіннің бағытын орнатыңыз.  Бұл сонымен қатар қалта аттары сияқты пайдаланушы енгізген белгілердің бағытын көрсетуді бақылайды.",
		change_locale_calendar_type: "Күнтізбе түрі:",
		change_locale_calendar_type_hover: "Пайдаланушы сценарий үшін қолданылатын күнтізбенің түрін таңдаңыз.",
		change_locale_base_text_direction_default: "Әдепкі",
		change_locale_base_text_direction_ltr: "Солдан оңға",
		change_locale_base_text_direction_rtl: "Оңнан солға",
		change_locale_base_text_direction_contextual: "Мәтінмәндік",
		change_locale_calendar_type_gregorian: "Григориан",
		change_locale_calendar_type_hijri: "Хиджра",
		change_locale_calendar_type_hebrew: "Иврит",
		change_locale_calendar_type_Umm_al_Qura: "Умм Аль-Кура",

		/* ChangePasswordDialog */
		change_password: "Құпия сөзді өзгерту",
		change_password_title: "Құпия сөзді өзгерту",
		change_password_expired_title: "Құпия сөздің уақыты жарамсыз",
		change_password_message: "Жаңа құпия сөзді енгізу.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Сіздің құпия сөзіңіздің мерзімі аяқталған. Жаңа құпия сөзді енгізу.",
		change_password_password_rules: "Құпия сөз ережелері",
		change_password_old_password: "Ескі құпия сөз:",
		change_password_new_password: "Жаңа құпия сөз:",
		change_password_confirm_password: "Құпия сөзді растау:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Сіз ескі құпия сөзіңізді енгізуіңіз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Жаңа құпия сөзіңізді енгізуіңіз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Жаңа құпия сөзіңізді растаңыз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Құпия сөздер сәйкес болуы керек.",

		/* GlobalToolbar */
		actions: "Әрекеттер",
		actions_label: "Әрекеттер:",
		open_actions_label: "Ашық әрекеттер:",

		/* About Dialog */
		about_dialog_title: "Туралы",
		about_product_name_label: "Өнім аты: ",
		about_product_version_label: "Нұсқа: ",
		about_product_build_label: "Құрастыру: ",
		about_product_license: "Лицензияланған материалдар - IBM Corp. жеке меншігі &copy; Copyright IBM Corp. 2012, 2016. Барлық құқықтары қорғалған. US Government Users Restricted Rights. GSA ADP компаниясы мен IBM Корпорациясының арасындағы келісім шарт бойынша пайдалануға, көшіруге және құрамын алуға тыйым салынды. IBM және IBM белгілері International Business Machine Corporation Корпорациясының Америка Құрама Штаттарында және басқа мемлекеттеріндегі сауда белгісі болып табылады. Мына бағдарлама сүйемелдеуші лицензиялық келісімнің шарттары бойынша лицензияланған. Лицензия келісімі Бағдарлама каталогының қалтасында немесе бар болса, \"License\" немесе\"Non_IBM_License\" деп белгіленген кітапханада болуы немесе басылған күйінде берілуі мүмкін. Бағдарламаны пайдаланбай тұрып, осы келісімді оқыңыз. Бағдарламаны пайдалану осы шарттарға келіскеніңізді білдіреді. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Таңдалған элементті жойғыңыз келеді ме?",
		delete_single_folder_confirmation_question: "${0} қалтасын жойғыңыз келеді ме?",
		delete_multiple_confirmation_question: "Таңдалған элементтерді жою керек пе?<br>${0} элементтер таңдалды.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Жою",
		search_template_delete_confirmation_question: "${0} іздеуді жойғыңыз келеді ме?",
		search_template_opened_delete_confirmation_question: "${0} іздеу ашық. Іздеуді жойсаңыз, ол жабылады.<br>Осы іздеуді жойғыңыз келеді ме?",
		delete_multiple_opened_search_template_confirmation_question: "Келесі іздеулер ашық: ${0}.<br>Іздеулерді жойғыңыз келсе, олар жабылады. Осы іздеулерді жойғыңыз келеді ме?",
		delete_large_number_items_confirmation_question: "Жойылатын ${0} элементтерді таңдадыңыз.<br/>Элементтердің үлкен көлемін жою ұзақ уақыт алуы мүмкін.<br/>Жалғастырғыңыз келеді ме?",
		delete_confirmation_entrytemplate: "Егер осы енгізу үлгісін жойсаңыз, онда бұл енгізу үлгісімен байланысқан қалталар мен құжаттарда келесі әсерге ие болады:<ul><li>Элементтер көп ұзамай енгізу үлгісімен байланысатын болады және пайдаланушылар элементті жаңартқан кезде, ескертуді көре алады.</li><li>Сипаттардың аты немесе реті сияқты енгізу үлгісі арқылы бақыланған әрбір сипаттар, көп ұзамай енгізу үлгісімен байланысқан элементтерге қолданылады.</li></ul>Осы енгізу үлгісін жойғыңыз келеді ме?",
		delete_confirmation_entrytempalte_with_multi_items: "Енгізу үлгілері жеке жойылуы керек. Енгізу үлгілері жойылу үшін, элементтер тізімінен жойылды. Егер енгізу үлгілерін жойғыңыз келсе, онда әр енгізу үлгісін бөлек жоюыңыз керек.",

		/* Create/Apply/Remove Hold */
		hold: "Ұстау",
		createHold: "Жаңа ұстау",
		applyHold: "Ұстауды қабылдау",
		removeHold: "Ұстауды жою",
		showHolds_title: "Ұстауларды көрсету",
		applyHoldSelectText: "Таңдалған элементтерді қабылдау үшін ұстауларды таңдаңыз.",
		availableHolds: "Қол жетімді ұстаулар:",
		removeHoldSelectText: "Таңдалған элементтерден жойғыңыз келген ұстауларды таңдаңыз.",
		appliedHolds: "Қабылданған ұстаулар:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Элементтерді таңдау үшін қабылдайтын жаңа ұстауды құрыңыз.",
		holdName: "Ұстау аты:",
		holdDescription: "Сипаттама:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Ұстау үшін атты көрсетуіңіз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Көрсетілген ұстау аты әлдеқашаннан бар.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Ұстау аты келесі таңбалардың ешқайсысын қамтымауы тиіс : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Сеансыңыздың мерзімі ${0} минут ішінде бітеді.",
		session_expire: "Сеанс мерзімі өту",
		logoff: "Шығу",
		extend_session: "Сеансты ұзарту",
		admin_custom_settings: "Қосымша параметрлер:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning - мерзімі аяқталу ескертуі қосылуын көрсететін логикалық мәні, әдепкі мәні - шын. sessionExpireWarningTime - мерзім аяқталуы ескерту уақытын ерекшелейтін сеанста 2 және 5 арасындағы бүтін сан.",
		admin_custom_setting_dialog_title_new: "Жаңа параметр",
		admin_custom_setting_dialog_title_edit: "Өңдеу параметрі",
		admin_custom_setting_dialog_hover_help: "Параметр атын және мәнін көрсету арқылы басқа параметрлерді қосыңыз. Мысалы, сеанс мерзімі өту ескертуі қосуды қалайтын болсаңыз “enableSessionExpireWarning” және “true” мәнін еркешелей аласыз.",
		admin_custom_setting_dialog_field_hover_help: "Параметр аттары мен мәндері туралы көбірек мәліметті IBM шарлаушы параметрін қолмен анықтауда қосыңыз.",
		admin_custom_setting_dialog_nameInvalid: "Бұл мән талап етілген. Мән бос орынды қамти алмайды және көшірме болуы мүмкін емес.",
		admin_custom_setting_dialog_bool_valueInvalid: "Бұл мән талап етілген. Бұл мән логикалық болуы тиіс.",
		admin_custom_setting_dialog_int_valueInvalid: "Бұл мән талап етілген. Мән бүтін сан болуы керек.",
		/* Add Document Dialog */
		add_document_dialog_title: "Құжат қосу",
		add_documents_dialog_title: "Құжаттарды қосу",
		add_document_general_label: "Жалпы",
		add_document_properties_label: "Сипаттар",
		add_document_properties_with_ellipsis_label: "Сипаттар...",
		add_document_security_label: "Қауіпсіздік",
		add_document_location_label: "Ішіне сақтау:",
		add_document_type_label: "Нені сақтағыңыз келеді?",
		add_document_localfile_label: "Жергілікті құжат",
		add_document_metadata_label: "Құжат туралы ақпарат",
		add_document_external_label: "Сыртқы құжатқа байланысу",
		add_document_web_link_label: "Веб байланысы",
		add_document_saved_content_label: "Сақталған файлды қолданыңыз:",
		add_document_saved_content_choice: "Сақталған файл",
		add_document_file_name_label: "Файл аты:",
		add_document_entry_template_label: "Енгізу үлгісі:",
		add_document_delete_file_label: "Жергілікті файлды жою",
		add_document_delete_file_disabled_label: "Файлды тасымалдау каталогында жоқ файлдар жойылмайды.",
		add_document_major_version_label: "Негізгі нұсқа",
		add_document_major_version_hover: "Құжат күйін Босатылған күйіне орнатады. Құжат репозиторийге 1.0 нұсқа ретінде қосылады. Егер опция таңдалмаса, құжат шығарылуға дайын болмайды және қосымша 0.1 нұсқа ретінде қосылады.",
		add_document_save_document_as_unfiled_label: "Құжатты қалтада сақтамаңыз",
		add_document_save_document_as_unfiled_hover: "Егер осы опцияны таңдасаңыз, осы құжатты тек іздеу арқылы ғана таба аласыз. Ол үшін шарламауыңыз керек.",
		add_document_create_new_version_label: "Жаңа нұсқаны жасау",
		add_document_replace_existing_version_label: "Бар нұсқаны ауыстыру",
		add_document_start_workflow_label: "Жұмыс ағымын орналастыру",
		add_document_auto_classify_label: "Мазмұнды автоматты түрде санаттаңыз",
		add_document_add_label: "Қосу",
		add_document_cancel_label: "Болдырмау",
		add_document_document_type_label: "Сынып",
		add_document_context_info: "Құжат сипаттары үшін енгізілген мәндерді кейінірек құжатты табу үшін қолдануға болады.",
		add_documents_context_info: "Құжаттар үшін енгізген мәндер құжаттарды кейінірек табу үшін қолданылуы мүмкін. Құжат үшін әр түрлі сипат мәнін енгізуді қажет етсеңіз, оны бөлек қосып немесе қосқаннан кейін құжаттың сипаттарын өңдеуіңіз керек.",
		add_document_url_label: "URL мекен-жайы:",
		add_document_template_description: "Үлгі сипаттамасы:",
		add_document_select_entry_template: "Енгізу үлгісін енгізіңіз немесе таңдаңыз",
		add_document_no_permission_to_associations: "Енгізу үлгісін пайдалану үшін сізде рұқсаттар жоқ",
		add_document_no_entry_template_to_use: "Таңдалған файлдар үшін қолданылатын енгізу үлгісі жоқ",
		add_document_no_entry_template_itemtype_permission: "Бұл қалтаға элементтерді қоса алмайсыз. Енгізу үлгісін таңдалуы керек және осы қалтамен байланысқан кез келген енгізу үлгілеріне қатынасыңыз жоқ. Жүйе әкімшісіне хабарласыңыз және олардан осы қалтамен байланысқан енгізу үлгісіне қатынасуға рұқсат беруді сұраңыз.",
		add_document_appgroup_name_label: "Бағдарлама тобының атауы:",
		add_document_app_name_label: "Бағдарлама аты:",
		create_folder_dialog_title: "Жаңа Қалта",
		create_folder_context_info: "Қалта сипаттары үшін енгізген мәндер қалтаны кейінірек табу үшін қолданыла алады",
		create_folder_folder_name_label: "Қалта аты",
		create_folder_save_folder_as_unfiled_label: "Қалтаны басқа қалтада сақтамаңыз",
		create_folder_save_folder_as_unfiled_hover: "Егер осы опцияны таңдасаңыз, осы қалтаны тек іздеу арқылы ғана таба аласыз. Ол үшін шарламауыңыз керек.",
		add_item_create_in_folder: "Қалтада құрыңыз:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Қалта атауы төмендегі таңбалардың ешқайсысын қамтымауы керек: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Қалта атауы келесі сипаттардың ешқайсысын қамти алмайды: \\ / және бірдей бола алмайды. немесе..",
		invalid_box_file_name_message: "Файл атауы келесі сипаттардың ешқайсысын қамти алмайды: \\ / және бірдей бола алмайды. немесе..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Файл атауы төмендегі таңбалардың ешқайсысын қамтымауы керек: \\ / : * ? \" < > |",
		external_document_placeholder: "Құжаттың URL мекен-жайын енгізіңіз",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Түс 3- немесе 6-сандық оналтылық сан ретінде енгізілуі тиіс, мысалы #000 немесе #000000.",
		add_document_unfiled: "${0} толтырылмаған",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Енгізу Үлгісін қолдану арқылы құжатты қосыңыз",
		add_document_using_template_context_info: "Құжатты енгізу үлгісін қолдану арқылы қосу кезінде құжат үшін сіз енгізген мәндер үйлесімді.",
		add_documents_using_template_dialog_title: "Енгізу үлгісін қолдану арқылы құжаттарды қосу",
		add_documents_document_name_is_file_name_hint: "Файл аты осы сипат үшін қолданылады",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Енгізу үлгісін қолдану арқылы жаңа қалта",
		create_folder_using_template_context_info: "Қалтаны енгізу үлгісін қолдану арқылы құру кезінде қалта үшін сіз енгізген мәндер үйлесімді.",

		add_documents_batch_results_dialog_title: "Құжаттар репозиторийге қосылған жоқ",
		add_documents_batch_results_dialog_context_info: "Келесі құжаттар репозитоийге қосылған жоқ. Құжаттың неге репозиторийге неге қосылмағаны туралы көбірек ақпарат үшін Мәліметтерді басып және құжатты таңдаңыз.",
		add_documents_batch_results_dialog_filename_col_hdr: "Файл аты",
		add_documents_batch_results_dialog_status_col_hdr: "Күй",
		add_documents_batch_results_dialog_message_col_hdr: "Хабарлама",
		add_documents_batch_results_status_error: "Қате",
		add_documents_batch_results_status_cancelled: "Бас тартылды",
		add_documents_batch_results_status_cancelled_msg: "Сұраудан бас тартылғаннан кейін құжат қосылмады.",

		add_documents_batch_status_title: "Құжаттарды қосу",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "${0} элементінің ${1} файлын қосу...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Қателер: ${0}",
		add_documents_batch_status_completing_msg: "Осы құжат қосылғаннан кейін әрекет тоқтатылады.",

		add_documents_status_uploading_msg: "${0} элементінің ${1} жүктеп алу...",
		add_documents_status_adding_msg: "${0} элементінің ${1} файлын қосу...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Енгізу үлгісі басқа бағдарламада теңшелген және құжаттарды әрдайым есептер ретінде көрсету үшін теңшелген. Алайда, бұл параметр еленбеді, себебі веб тұтынушы құжаттарды есептер ретінде қолдамайды.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Енгізу үлгісі басқа бағдарламада теңшелген және осы құжатты есеп ретінде көрсету үшін рұқсат беру үшін теңшелген. Алайда, бұл параметр еленбеді, себебі веб тұтынушы құжаттарды есептер ретінде қолдамайды.",
		no_selection: "&lt;Таңдау&gt;",

		batch_results_dialog_details_label: "Мәліметтер",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Мән жарамсыз. Мән Жаһандық Бірегей Анықтаушы (GUID) болуы тиіс, мысалы, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Мән жарамсыз. Мән қалқымалы нүкте саны болуы тиіс, мысалы, 1.2 or 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "н",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Мән жарамсыз. Мән ${0} пішімінде болуы тиіс, мысалы, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Мән жарамсыз. Мән ондық мән болуы тиіс, мысалы, 1.2 немесе 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Мән жарамсыз. Мән бүтін сан болуы тиіс, мысалы, 5 немесе 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Мән жарамсыз. Мән тек әліпбилік таңбаларды ғана қамти алады, мысалы, a-z жәнеA-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Мән жарамсыз. Мән тек әліпбилік және сандық таңбаларды ғана қамти алады, мысалы, a-z, A-Z және 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Мән жарамсыз. Мән тек сандық таңбаларды ғана қамти алады, мысалы 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Мән жарамсыз. Мән тек келесі таңбаларды ғана қамти алады: a-z, A-Z, 0-9, [space],және `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Мән жарамсыз. Мән келесі пішімдегі күн болуы тиіс: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Мән жарамсыз. Мән келесі пішімдегі уақыт болуы тиіс: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Мән жарамсыз. Мәнді апарып тастау мәзірінен таңдаңыз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Мән жарамсыз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Мән жарамсыз. Мән келесі пішімді иеленуі тиіс: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Бұл мән талап етілген.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Мән тым ұзын болып табылады. Сипат ${0} элементінің ең үлкен ұзындығын қолдайды.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Мән тым қысқа болып табылады. Сипат ${0} элементінің ең кіші ұзындығын қолдайды.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Мән ауқымнан тыс. Мән ${0} және ${1} арасындағы қалқымалы нүкте саны болуы тиіс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Мән ауқымнан тыс. Мән ${0} және ${1} арасындағы ондық мән болуы тиіс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Мән ауқымнан тыс. Мән ${0} және ${1} арасындағы бүтін сан болуы тиіс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Мән ${0} және ${1} арасындағы күн болуы тиіс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Мән ауқымнан тыс. Мән ${0} және ${1} арасындағы күн болуы тиіс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Мән ауқымнан тыс. Мән ${0} және ${1} арасындағы уақыт болуы тиіс.",
		property_and: "және",

		property_invalidValueOrRequired: "келесі мән жарамсыз немесе талап етілген: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Сипаттар",
		edit_properties_dialog_info: "Осы элементтің сипаттарын көріп және өңдеуіңіз керек. Егер сіздің сәйкес рұқсаттарыңыз болса, сіз сонымен қатар элементтің қауіпсіздігін өңдей аласыз. Алайда, жүйе сипаттарын өзгерте алмайсыз.",
		edit_properties_od_dialog_info: "Осы элементтің сипаттарын көріп және өңдеуіңіз керек. Алайда, жүйе сипаттарын өзгерте алмайсыз.",
		system_properties_title: "Жүйе сипаттары",
		custom_properties_title: "Сипаттар",
		/* Folder collaboration tab */
		box_permission_permission: "Рұқсат",
		box_permission_permissions: "Рұқсаттар",
		box_permission_editor: "Өңдегіш",
		box_permission_owner: "Иесі",
		box_permission_co_owner: "Ортақ иеленуші",
		box_permission_viewer_uploader: "Қарау құралы Жүктеуші",
		box_permission_previewer_uploader: "Алдын ала қарау құралы Жүктеуші",
		box_permission_viewer: "Қарау құралы",
		box_permission_previewer: "Алдын ала қарау құралы",
		box_permission_uploader: "Жүктеуші",
		box_permission_add: "Қосу",
		box_permission_upload: "Жүктеп салу",
		box_permission_download: "Жүктеу",
		box_permission_preview: "Алдын ала қарау",
		box_permission_view: "Көрініс",
		box_permission_send_links: "Көруге арналған сілтемелерді жіберу",
		box_permission_create_subfolders: "Ішкі қалталарды құру",
		box_permission_create_tasks: "Тапсырмалар жасау",
		box_permission_add_comments: "Пікірлер қосу",
		box_collaboration_invite_placeholder: "Шақыру үшін топты, электрондық поштпнв, атты енгізу",
		box_collaboration_invite_placeholder_non_admin: "Шақыру үшін электрондық поштаны енгізіңіз",
		box_collaboration_invalid_email: "Жарамды электрондық пошта мекен-жайын енгізіңіз",
		box_collaboration_user_already_present: "Бұл пайдаланушы бұрыннан қалтада бірлесіп жұмыс істеуші болып табылады",
		box_collaboration_user_name: "Аты",
		box_collaboration_email_address: "Электрондық пошта мекен-жайы",
		box_collaboration_date_added: "Қосылған күн",
		box_collaboration_remove_collaboration: "Жою",
		box_collaboration_remove_collaboration_title: "Жою",
		box_collaboration_no_collaborators: "Бірлесіп жұмыс істеушілер жоқ",
		box_collaboration_change_owner_title: "Элемент иеленушісін өзгерту",
		box_collaboration_change_owner_prompt: "Осы бірлесіп жұмыс істеушіні жасау арқылы Өңдеуші болатын Қалта иеленушісі қалтаға иелік етпейді. Осы қалтаға тікелей қосылған кез келген бірлесіп жұмыс істеушілер өздерінің түбір қалталарының ішінде көреді. Тектік қалта деңгейіне немесе жоғарғы жағына қосылған кез келген бірлесіп жұмыс істеушілер бірлесіп жұмыс істеушілер бола алмайды. Жалғастырғыңыз келеді ме?",
		box_collaboration_remove_self_title: "Өзін жою",
		box_collaboration_remove_self_prompt: "Өзіңізді бірлесіп жұмыс істеуші сияқты жоясыз ба? Осы қалтаға арналған қатынасу рұқсатыңыз жоқ.",
		box_collaboration_user: "Пайдаланушы",
		box_collaboration_group: "Топ",
		box_managing_users_not_configured: "Пайдаланушыларға және топтарға арналған пайдаланушыларды іздей алмайсыз, себебі Box бағдарламасы дұрыс теңшелмейді. Бұл мүмкіндікті пайдалану үшін, әкімшіге хабарласып, топтар мен пайдаланушыларды басқару үшін теңшелетін Жәшік бағдарламасын сұраңыз.",
		duplicate_value_error: "Осы сипаттағы әр бір мән бірегей болуы тиіс.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Келесі өрістерде жасаған кез келген өзгертулер барлық таңдалған элементтерге қабылданады. Егер әр түрлі сипат мәнін арнайы элемент үшін енгізу немесе элемент қауіпсіздігін өзгерту қажет болса, онда элементтің сипаттарын жеке өңдеуіңіз қажет.",
		multi_edit_properties_class_label: "Сыныбы:",
		multi_edit_properties_items_label: "Элемент аттары:",
		multi_edit_properties_properties_label: "Сипаттар:",
		multi_edit_batch_status_title: "Сипаттарды жаңарту",
		multi_edit_batch_status_adding_msg: "${0} элементінің ${1} элементін жаңарту...",
		multi_edit_batch_status_verifying_msg: "${0} элементінің ${1} элементін тексеру...",
		multi_edit_batch_status_completing_msg: "Үрдіс осы элемент жаңартылғаннан кейін тоқтатылады.",
		multi_edit_batch_status_validation_completing_msg: "Үрдіс осы элемент тексерілгеннен кейін тоқтатылады.",
		multi_edit_batch_results_status_error: "Қате",
		multi_edit_batch_results_status_cancelled: "Бас тартылды",
		multi_edit_batch_results_status_cancelled_msg: "Элемент талаптан бас тартылығаннан кейін жаңартылмады.",
		multi_edit_batch_results_dialog_title: "Элементтер жаңартылған жоқ",
		multi_edit_batch_results_dialog_context_info: "Келесі элементтер жаңартылмады. Элементтің неге жаңартылмағаны туралы көбірек ақпарат үшін Мәліметтерді басып және элемент атын таңдаңыз.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Элемент атауы",
		multi_edit_batch_results_dialog_status_col_hdr: "Күй",
		multi_edit_batch_results_dialog_message_col_hdr: "Хабарлама",
		multi_edit_batch_status_errors_msg: "Қателер: ${0}",
		multi_edit_batch_permission_error_text: "Сипаттағы өзгерістерді сақтау мүмкін емес.",
		multi_edit_invalid_value_error: "Бұл мән басқа сипат мәніне байланысты болады және сіз таңдаған барлық элементтер үшін жарамсыз.",
		multi_edit_batch_permission_error_explanation: "Осы элементтің сипаттарын өзгерте алмайсыз, себебі сіздің жеткілікті рұқсатыңыз жоқ.",
		multi_edit_no_modifiable_properties: "Таңдалған элементтердің сипаттары өзгертілмейді. Бұл элемент тек оқуға арналған сипаттарды қамтыған кезде немесе өңделмелі элементтің атын немесе тақырыбын ғана қамтыған кезде пайда бола алады. Бірнеше элементтер таңдалған кезде, элементтердің атын немесе тақырыбын өзгерте алмайсыз.",
		multi_edit_mult_classes_dialog_info: "Таңдалған элементтер әр түрлі репозиторийде немесе әр түрлі класстарға жатады. Сіз тек бірдей класстағы немесе бірдей репозиторийдегі элементтерді ғана өзгерте аласыз. Өңдегіңіз келетін элементтердің ішкі жиынын таңдаңыз.",
		multi_edit_class_selector_class_heading: "Сынып",
		multi_edit_class_selector_entry_template_heading: "Жазба үлгісі",
		multi_edit_class_selector_repository_heading: "Репозиторий",
		multi_edit_class_selector_items_heading: "Элементтер",
		multi_edit_some_classes_not_displayed: "Кейбір таңдалған элементтер бұл тізімде қамтылмаған, себебі элементтер тек оқуға арналған сипаттарды қамти алады немесе репозитоийлердегі элементтер өңдеу сипаттарын қолдамайды.",
		multi_edit_properties_invalid_msg: "Кейбір сипат мәндері барлық таңдалған элементтер үшін жарамсыз.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Бұл сипат тек оқуға арналған және өзгертілмейді.",
		multi_edit_append_checkbox_label: "Үстеу",
		multi_edit_append_checkbox_tooltip: "Осы опцияны егер сіз жаңа сипат мәндерді алмастырғаннан гөрі бар мәндерге қабылдауды қаласаңыз таңдаңыз.",
		multi_edit_properties_invalid_childcomponent_msg: "${0} сипатындағы ${1} еншілес құрамдастың кейбір мәндері, басқа сипаттарға тәуелді болады және жасаған таңдауыңызға көп ұзамай жарамды болмайды. ${1} еншілес құрамдасындағы мәндерді тазалаңыз немесе жеке таңдаған элементтерге сипаттақ өзгерістер жасаңыз.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Сипаттарды экспорттау",
		export_properties_dialog_info: "Экспорттағыңыз келген сипаттарды таңдаңыз және олар көрсетілетін ретті көрсетіңіз.",
		export_properties_dialog_export_button_label: "Экспорттау",
		export_properties_dialog_export_raw_values: "Жол мәндерін шығару",

		/* Properties */
		filter_clear_tooltip: "Сүзгіні тазалау",
		properties_new_row: "Жаңа",
		properties_requiredClass_document_tooltip: "Құжатты таңдау. Құжат ${0} классына жатуы тиіс.",
		properties_requiredClass_folder_tooltip: "Қалтаны таңдау. Қалта ${0} классына жатуы тиіс.",
		properties_dataType_tooltip: "Дерек түрі: ${0}",
		properties_maxLength_tooltip: "Ең ұзын ұзындық: ",
		properties_minLength_tooltip: "Ең қысқа ұзындық: ",
		properties_minValue_tooltip: "Ең аз мән: ",
		properties_maxValue_tooltip: "Ең көп мән: ",
		properties_format_tooltip: "Пішімі: ",
		properties_description_tooltip: "Сипаттама: ",

		properties_type_boolean_tooltip: "Логикалық өрнек",
		properties_type_date_tooltip: "Күн",
		properties_type_time_tooltip: "Уақыт",
		properties_type_timestamp_tooltip: "Уақыт белдеуі",
		properties_type_decimal_tooltip: "Ондық мән",
		properties_type_double_tooltip: "Қалқымалы нүкте саны",
		properties_type_short_tooltip: "Бүтін сан",
		properties_type_integer_tooltip: "Бүтін сан",
		properties_type_long_tooltip: "Бүтін сан",
		properties_type_string_tooltip: "Мәтін жолы",
		properties_type_string_alpha_tooltip: "Әліпбилік жол",
		properties_type_string_alphanum_tooltip: "Әріптер мен сандар жолы",
		properties_type_string_ext_tooltip: "Кеңейтілген әліпбилік-сандық жол",
		properties_type_string_num_tooltip: "Сандық жол",
		properties_type_binary_tooltip: "Екілік",
		properties_type_object_tooltip: "Нысан",
		properties_type_reference_tooltip: "Бұл сипат репозиторийдегі басқа элементті сілтейді.",
		properties_type_guid_tooltip: "Жаһандық Бірегей Анықтауыш",
		properties_type_group_tooltip: "Пайдаланушылар және топтар",
		properties_type_user_tooltip: "Пайдаланушылар",
		properties_type_childComponent_tooltip: "Еншілес құрамдас",

		properties_childComponent_minCardinalityOnly_tooltip: "Бұл сипат кем дегенде ${0} мәндерді иеленуі тиіс.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Бұл сипат ${0} мәндерден басқаны иелене алмайды.",
		properties_childComponent_minMaxCardinality_tooltip: "Бұл сипат кем дегенде ${0} мәндерді иеленіп және ${1} мәндерінен көп болмауы тиіс.",
		properties_childComponent_noCardinality_tooltip: "Бұл сипат мәндердің кез келген санын иелене алады.",

		properties_type_guid_example_tooltip: ", мысалы {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Мәнді тізімнен таңдаңыз.",
		properties_single_select_choice_tooltip: "Мәнді таңдаңыз.",
		properties_multiple_select_typein_tooltip: "Бір немесе бірнеше мәндерді енгізіңіз.",
		properties_multiple_select_choice_tooltip: "Бір немесе бірнеше мәндерді таңдаңыз.",
		properties_not_selectable_tooltip: "Санат таңдалмайды.",
		properties_none: "Ешбір",
		properties_none_tooltip: "<i>Ешбір</i> түрін осы репозиторий үшін ағымдағы мәнді жою үшін таңдаңыз.",
		properties_value_empty: "Мәнсіз",
		properties_value_read_only: "Тек оқуға арналған",
		properties_clear_label: "Тазалау",
		properties_clear_tooltip: "Осы өрістегі мәндерді жою <b>Сақтау</b> түймешігін басқаннан кейін репозиторийдегі мәнді жояды.",
		properties_box_custom_properties: "Тұтынушы сипаттары",
		properties_box_metadata_name_in_use: "Бұл ат қолданыста. Реттелетін сипат үшін өзге атын енгізіңіз.",

		properties_templates: "Үлгілер",
		properties_add_template: "Үлгіні қосу",
		properties_remove_template: "Жою",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Тіркелу",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Тіркелу",
		checkin_cancel_label: "Болдырмау",
		checkin_file_name_label: "Файл аты",
		checkin_document_status_title: "Құжатты Тіркеу",
		checkin_document_status_uploading_msg: "Файлды жүктеп алу...",
		checkin_document_status_checkingin_msg: "Файлда тексеру...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Редакция күйін таңдаңыз",
		viewer_redaction_new_document_confirmation_question: "Өңдеуді жаңа құжат немесе жергілікті файл ретінде сақтағыңыз келе ме?",
		viewer_redaction_new_version_confirmation_question: "Өңдеуді жаңа нұсқа ретінде сақтағыңыз келе ме?",
		viewer_redaction_new_version_confirmation_question_never: "Жаңартуды жаңа мазмұн ретінде сақтағыңыз келе ме?",		
		viewer_redaction_new_document_button: "Иә",
		viewer_redaction_new_document_cancel_button: "Жоқ",
		viewer_redaction_add_document_confirmation_question: "Өңдеуді жаңа құжат, жаңа нұсқа немесе жергілікті файл ретінде сақтағыңыз келе ме?",
		viewer_redaction_add_document_confirmation_question_version_never: "Қайта өңдеуді жаңа құжат, жаңа мазмұн немесе жергілікті файл ретінде сақтағыңыз келе ме?",
		viewer_redaction_add_document_button: "Жаңа құжат",
		viewer_redaction_add_new_version_button: "Жаңа нұсқа",
		viewer_redaction_add_new_version_button_version_never: "Жаңа мазмұн",
		viewer_redaction_add_local_file_button: "Жергілікті Файл",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Редакия себебін таңдаңыз",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Осы құжатты репозиторийге қосу үшін қолданылған енгізу үлгісі табылмайды. Құжат енгізу үлгісін қолданусыз репозиторийге тексерілуі тиіс.",
		property_entry_template_not_retrieved_warning: "Осы құжатты репозиторийге қосу үшін қолданылған енгізу үлгісі табылмайды. Құжат сипаттары енгізу үлгісін қолданусыз көрсетіледі.",
		multi_edit_entry_template_not_found_name: "[Табылмады]",
		multi_edit_entry_template_not_retrieved_warning: "Осы элементтерді репозиторийге қосу үшін қолданылған енгізу үлгісі табылмайды. Элемент сипаттары енгізілім үлгісін қолданусыз өңделуі тиіс.",
		checkin_major_version_hover: "Құжат нұсқасы санын бір бірден арттырып және құжат күйін Шығарылған күйіне орнатады. Егер опция таңдалмаса, құжат шығарылуға дайын болмайды және қосымша нұсқа ретінде тексеріледі.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Құжат тіркелмейді, себебі ол шығарып алынбаған.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Пайдаланушы идентификаторы немесе құпия сөзі серверге жарамды емес.",
		error_bad_userid_password_userResponse: "Пайдалнушы идентификаторын немесе құпия сөзді дұрыс енгізгеніңізге көз жеткізіңіз.",
		error_bad_userid_password_adminResponse: "Келесі қателік қайтарылды: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Веб тұтынушыға қосылу келесі URL мекен-жайын қолдану арқылы орнатылмайды: ${0}.",
		http_send_error_explanation: "Бұл қателік веб бағдарлама ттсерверіндег теңшеу мәселесі арқылы немесе ыеб тұтынушысы бағдарламасының мәселесімен пайда болуы мүмкін.",
		http_send_error_userResponse: "Қайта кіру әрекетін жасаңыз. Егер мәселе шешілмесе, бұл қателікті жүйе әкімшіңізге хабарлаңыз.",
		http_send_error_adminResponse: "Келесі HTTP қателігі қайтарылды: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Веб тұтынушыға қосылу келесі URL мекен-жайын қолдану арқылы орнатылмайды: ${0}.",
		http_error_explanation: "Брандмауерге растауды қажет етуіңіз мүмкін немесе веб бағдарлама сервері орындалмауы мүмкін немесе желі мәселелері себебінен орындалмайды.",
		http_error_userResponse: "Егер брандмауерге растауды қажет етсеңіз, қайта кіруге және растауға әрекет етіңіз. Егер мәселе шешілмесе, бұл қателікті жүйе әкімшіңізге хабарлаңыз.",
		http_error_adminResponse: "Келесі HTTP қателігі қайтарылды: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Веб тұтынушыға қосылу келесі URL мекен-жайын қолдану арқылы орнатылмайды: ${0}.",
		http_response_bad_explanation: "Бұл қателік веб бағдарлама серверіндегі теңшеу мәселесі арқылы немесе веб тұтынушысының мәселесімен пайда болуы мүмкін.",
		http_response_bad_userResponse: "Қайта кіру әрекетін жасаңыз. Егер мәселе шешілмесе, бұл қателікті жүйе әкімшіңізге хабарлаңыз.",
		http_response_bad_adminResponse: "Келесі қателік қайтарылды: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Тақырыпсыз",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Электрондық пошта бағдарламасы басталмайды.",
		email_applet_init_failed_explanation: "Бұл мәселе сіздің электрондық пошта тұтынушыңыз дұрыс орнатылмаған кезде және теңшелмеген кезде немесеJava Runtime Environment (JRE) бағдарламасының қолдауға ие болған нұсқасы сіздің жұмыс орныңызда орнатылмаған кезде пайда болады.",
		email_applet_init_failed_userResponse: "Мәселені шешу үшін:<ul><li>Сіздің электрондық пошта бағдарламаңыз орнатылғанын және сіздің жұмыс орныңызда әдепкі электрондық пошта тұтынушысы ретінде орнатылғанын тексеріңіз.</li><li>JRE элементінің қолдауға ие болған нұсқасы сіздің жұмысүстеліңізде келесі пәрменді пәрмен шақыруында: java -version енгізу арқылы орнатылғанын тексеріңіз</li></ul><p>JRE элементінің қолдауға ие болған нұсқаларының тізімі <i>IBM Content Navigator бағдарламасына арналған аппараттық құралдар мен бағдарламалық жасақтама алғышарттары</i> құжатында IBM Software Support торабында қамтылған.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Электрондық пошта бағдарламасы басталмайды, себебі талап етілген DLL файл жүктелмейді.",
		email_applet_JNI_LOAD_FAILED_explanation: "Талап етілген WCEmailAppletJNI.dll файл жүктелмейді, себебі сіздің жұмыс орныңыздағы уақытша каталог толық болуы мүмкін.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Уақытша катлогтың жеткілікті бос орынды иеленетінін тексеріңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Әдепкі бойынша, the WCEmailAppletJNI.dll файлы сіздің веб шолғыш параметрлеріңізде көрсетілген уақытша каталогта жүктеледі.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Электрондық пошта бағдарламасы басталмайды, себебі электрондық пошта бағдарламасы уақытша файлды құра алмайды.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Сіздің жұмыс орныңыздағы уақытша каталог толық болуы мүмкін.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Уақытша катлогтың жеткілікті бос орынды иеленетінін тексеріңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Электрондық пошта бағдарламасы басталмайды, себебі электрондық пошта бағдарламасы уақытша каталогты қабылдай алмайды.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Сіздің жұмыс орныңыздағы уақытша каталог толық болуы мүмкін немесе уақытша каталогқа жазуға сәйкес рұқсатыңыз болмауы мүмкін.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Уақытша катлогтың жеткілікті бос орынды иеленетінін және уақытша каталогқа жазу рұқсатыңыздың болуын тексеріңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер мәселе шешілмесе, жүйе әкімшіңізге хабарласыңыз.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Электрондық пошта бағдарламасы уақытша каталогты жоя алмайды.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Басқа бағдарлама файлды қолданып жатуы мүмкін немесе файл сіздің жұмыс орныңызда жоқ.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Егер файл басқа бағдарлама арқылы қолданылып жатса, бағдарламаны жабыңыз. Егер файл сіздің жергілікті файл жүйеңізде болса, келесі файлды сіздің жұмыс орныңыздағы уақытша каталогтан жойыңыз: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Құжатқа арналған байланыс құрылмайды.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Репозиторий URL мекен-жайын жарамсыз пішімде қайтарды.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Веб шолғышыңыз бен барлық қойындылар мен сценарийлеріңізді жауып, қайтадан кіріңіз. Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер осы мәселе шешілмесе, IBM Software Support бөлімін қараңыз.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Электрондық пошта бағдарламасы файлды электрондық поштаға жібере алмайды.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Репозиторй URL мекен-жайын құжатқа жарамсыз пішімде қайтарды.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Веб шолғышыңыз бен барлық қойындылар мен сценарийлеріңізді жауып, қайтадан кіріңіз. Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер осы мәселе шешілмесе, IBM Software Support бөлімін қараңыз.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Тізбек құрылмайды.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Электрондық пошта бағдарламасы URL мекен-жайын құжатта оқи алмайды.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Веб шолғышыңыз бен барлық қойындылар мен сценарийлеріңізді жауып, қайтадан кіріңіз. Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер осы мәселе шешілмесе, IBM Software Support бөлімін қараңыз.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Құжат репозиторийден шығарылмайды.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Сіздің сценарийіңіздің уақыты аяқталуы мүмкін, репозиторий немесе веб бағдарлама сервері орындалмауы мүмкін немесе мұнда веб тұтынушы теңшелімінен мәселе туындауы мүмкін.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Жүйеге кіріп және құжатты электрондық пошта арқылы жіберуге тырысыңыз. Егер проблема шешілмесе, жүйелік әкімшіңізді репозиторий қателік журналын тексеруді сұраңыз.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Веб тұтынушыны AFP құжаттарын басқа пішімге түрлендіру үшін теңшесеңіз, мысалы PDF пішімі, құжаттарды тізбектер ретінде жібермес бұрын түрлендірудің дұрыс теңшелгенін тексеріңіз.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Құжат PDF пішіміне түрлене алмайды.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Құжаттарды PDF пішіміне тасымалдау үшін қолданылған құрал файл түрін қолдамайды.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Осы бетті жауып және құжатты PDF пішіміне түрлендірмей қайтадан электрондық пошта арқылы жіберуге тырысыңыз.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Электрондық пошта құрылмаған.",
		email_applet_MAPI_USER_ABORT_explanation: "Электрондық пошта бағдарламаңызды ашып және оның дұрыс жұмыс істеп жатқанына көз жеткізіңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер мәселе шешілмесе, жүйе әкімшіңізді сіздің жүйе оқиғасы журанлыңызды тексеруді сұраңыз.",
		email_applet_MAPI_USER_ABORT_userResponse: "Электрондық пошта бағдарламаңызды жабуға әрекет етсеңіз, әры қарай ешқандай әрекет талап етілмейді. Электрондық хабарлама жіберу үшін электрондық пошта бағдарламаңызға кіріп және құжатты веб тұтынушыдан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Электрондық пошта құрылмайды.",
		email_applet_MAPI_FAILURE_explanation: "Сіздің электрондық пошта тұтынушыңыз ашық болмауы мүмкін немесе тіркелмеген болуы мүмкін.",
		email_applet_MAPI_FAILURE_userResponse: "Электрондық пошта бағдарламаңызды ашып және оның дұрыс жұмыс істеп жатқанына көз жеткізіңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер мәселе шешілмесе, жүйе әкімшіңізді сіздің жүйе оқиғасы журанлыңызды тексеруді сұраңыз.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Электрондық пошта құрылмайды.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Сіз электрондық пошта тұтынушысына тіркелген жоқсыз. Сіздің электрондық пошта тұтынушыңыз ашық болуы тиіс және сіз веб тұтынушыдан хабарлама жіберу үшін тіркелуіңіз керек.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Электрондық пошта тұтынушыңызды ашып және кіріңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Электрондық пошта құрылмайды, себебі уақытша файл сіздің жұмыс орныңызда құрыла алмайды.",
		email_applet_MAPI_DISK_FULL_explanation: "Сіздің жұмыс орныңыздағы уақытша каталог толық болуы мүмкін.",
		email_applet_MAPI_DISK_FULL_userResponse: "Уақытша катлогтың жеткілікті бос орынды иеленетінін тексеріңіз. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Электрондық пошта құрылмайды, себебі мұнда жеткілікті жүйе жадысы жоқ.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Сізде тым көп бағдарлама ашық болуы мүмкін.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Кез келген қолданылмайтын бағдарламаларды жауып және содан кейін құжатты веб тұтынушыдан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI қатынасынан бас тартылды.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Messaging Application Programming Interface (MAPI) қатынасы іске қосылмаған болуы мүмкін немесе сіздің электрондық пошта бағдарламаңызға қолдау көрсетпейді. MAPI дегеніміз веб тұтынушы мен сіздің электрондық пошта бағдарламаңыз арасында байланысты іске қосу үшін қолданылатын хабарлама протоколы болып табылады.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Жүйелік әкімшіңізбен хабарласыңыз.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Электрондық пошта бағдарламасының орнатылған MAPI қатынасы бар екенін және дұрыс теңшелгенін тексеріңіз. Егер мәселе шешілмесе, IBM Software Support бөлімін қараңыз.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Элементке арналған тізбек немесе байланыс құрыла алмайды.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Ашық тұрған шолғыш сеанстары тым көп болуы мүмкін.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Сізде тым көп қолданылмайтын веб шолғыш сценарийлері ашық болуы мүмкін. Содан кейін, құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз. Егер проблема шешілмесе, жүйелік әкімшіңізге хабарласыңыз.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Электрондық хабарлама жіберілмейді.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Сіз тым көп тізбектерді жіберуге тырысып жатқан боларсыз.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Кішкене файлдарды таңдаңыз. Содан кейін, құжаттарды веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Электрондық хабарлама жіберілмейді.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Электрондық хабарламаны тым көп алушыларға жіберіп жатқан боларсыз.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Электрондық хабарламаны аз алушыларға жіберіңіз.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Тізбек құрылмайды.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "кейбір сұралған уақытша файлдар тізбек құрылмас бұрын жойылуы мүмкін. Бұл қателік шолғыш кэші электрондық хабарлама жіберілмес бұрын жойылуы мүмкін.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Тізбек құрылмайды.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "кейбір сұралған уақытша файлдар тізбек құрылмас бұрын жойылуы мүмкін. Бұл қателік шолғыш кэші электрондық хабарлама жіберілмес бұрын жойылуы мүмкін.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Тізбек электрондық пошта бағдарламасы арқылы құрыла алмайды.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Электрондық хабарлама көрсетілген алушыға жіберіле алмайды.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Алушы мекен-жай кітабында болмауы мүмкін.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Алушы атын тексеріп және құжатты қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Электрондық хабарлама көрсетілген алушыға жіберіле алмайды.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Электрондық мекен-жай дұрыс пішімде болмауы мүмкін.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Жарамды электрондық пошта мекен-жайын енгізгеніңізді тексеріп және құжатты қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Электрондық хабарлама жіберілмейді.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Электрондық хабарлама тым ұзын болуы мүмкін.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Электрондық хабарлама мәтінін қысқартып және электрондық хабарламаны қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Электрондық пошта құрылмайды.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Электрондық пошта тұтынушысы электрондық поштаны құру кезінде сәтсіз әрекет етуі мүмкін.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Электрондық пошта тұтынушыңызды қайта бастап және құжатты веб тұтынушыдан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Электрондық пошта дұрыс қосылмауы мүмкін.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Электрондық хабарлама көрсетілген алушыға жіберіле алмайды.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Электрондық мекен-жай дұрыс пішімде болмауы мүмкін.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Жарамды электрондық пошта мекен-жайын енгізгеніңізді тексеріп және құжатты қайтадан жіберіңіз.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Электрондық пошта тұтынушысы сұралған әрекетті орындай алмайды.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Электрондық пошта хабарламасы күтпеген қиыс жағдайды шығарды.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Құжатты веб тұтынушысынан қайтадан жіберуге тырысыңыз.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Сипаттардың бірінде сұралған мәндер саны жоқ.",
		error_property_cardinality_explanation: "Кейбір сипаттар мәндердің ең кіші және ең үлкен санын иеленеді.",
		error_property_cardinality_userResponse: "Қай сипаттың мәндердің ең кіші санын талап ететінін анықтау үшін меңзеу көмегін қолданыңыз. Содан кейін мәндердің ең кіші санын көрсетіп және қайтадан әрекет етіңіз.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Файл аты сұралады.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Файл атын көрсетіп және қайтадан әрекет етіңіз.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} қосылу модулі қателіктерді қамтиды.",
		plugin_error_explanation: "JavaScript бағдарламасын ${0} қосылу модулі үшін бағалау кезінде қателік орын алды. Егер веб тұтынушыны қолдануды жалғастырсаңыз, қосымша қателіктерді кездестіруіңіз мүмкін.",
		plugin_error_userResponse: "Жүйелік әкімшіңізбен хабарласыңыз.",
		plugin_error_adminResponse: "Қосылу модулі провайдері арқылы шешілуі тиіс қосылу модулінің мәселелері бар. Қосылу модулін веб тұтынушы теңшелімінен мәселе қосылу модулімен бірге шешілгенше жойылуы ұсынылады.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Енгізу үлгісі ашылмайды.",
		open_old_format_entry_template_error_explanation: "Енгізу үлгісі веб тұтынушыда қолдауға ие болмайтын бұрынғы пішімді қолданады.",
		open_old_format_entry_template_error_userResponse: "Жүйе әкімшіңізден енгізу үлгісін жаңартуды сұраңыз.",
		open_old_format_entry_template_error_adminResponse: "Application Engine немесе Workplace XT Entry Template Designer бағдарламаларын енгізу үлгісінің жаңартылған нұсқасын сақтау үшін қолданыңыз.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Енгізу үлгісі ашылмайды.",
		open_custom_object_entry_template_error_explanation: "Веб тқтынушы келесі енгізу үлгі түрлерін қолдамайды: Custom Object енгізу үлгілері.",
		open_custom_object_entry_template_error_userResponse: "Әр түрлі енгізу үлгісін ашыңыз.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Пішіндер нысаны ашылмайды.",
		open_forms_object_error_explanation: "Веб тұтынушы келесі пішімдер нысаны түрлерін қолдамайды: пішін үлгісі, пішін дерегі, құжат саясаты және жұмыс ағымы саясаты.",
		open_forms_object_error_userResponse: "Басқа құжатты ашыңыз.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "${0} енгізу үлгісін қолдана алмайсыз.",
		entry_template_folder_restricted_error_explanation: "Енгізу үлгісі элементтерді ${1} қалтасына қосады және сіздің элементтерді сол қалтаға қосуға сәйкес рұқсатыңыз жоқ.",
		entry_template_folder_restricted_error_userResponse: "Әр түрлі енгізу үлгісін таңдаңыз немесе жүйе әкімшіңізден сізге элементтерді ${1} қалтасына қосуға сәйкес рұқсаттарды беруін сұраңыз.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Енгізу үлгісі ашылмайды.",
		open_records_entry_template_error_explanation: "Веб тұтынушы келесі енгізу үлгі түрлерін қолдамайды: Есеп ретінде жариялау енгізу үлгілері.",
		open_records_entry_template_error_userResponse: "Әр түрлі енгізу үлгісін ашыңыз.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Жұмыс ағымы ашылмайды.",
		open_workflow_error_explanation: "Веб тұтынушы ашылатын жұмыс ағымдарын қолдамайды.",
		open_workflow_error_userResponse: "Басқа құжатты ашыңыз.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Құжат ашылмайды.",
		viewer_unable_to_view_error_explanation: "Еш қарау құралы бұл түр құжаттары үшін теңшелмеген, немесе теңшелген қарау құралы жүйеңізбен үйлесімді емес.",
		viewer_unable_to_view_error_userResponse: "Бұл түр құжаттары үшін қарау құралын теңшеуді жеке жүйе әкімшісінен сұраңыз, және теңшелген қарау құралы пайдаланушы жүйесімен жұмысына көзіңізді жеткізіңіз.",
		viewer_unable_to_view_error_adminResponse: "Осы тектес құжатта бақылаушы құралды конфигурациялау үшін әкімшілік құрал бағдарламасын пайдаланыңыз.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Іздеу ашылмайды.",
		search_cannot_open_error_explanation: "Іздеу мүмкіндігі осы жұмыс үстелі үшін теңшелмеген.",
		search_cannot_open_error_userResponse: "Жүйе әкімшіңізден іздеу мүмкіндігін қамтитын жұмыс үстеліне қосылуды немесе іздеу мүмкіндігін қамтитын жұмыс үстелінің жаңартылуын сұраңыз.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Құжат жүктелмеді.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional қарап шығу құралы, құжатты ашпайды.",
		viewer_document_load_failed_error_userResponse: "Қосымша ақпарат үшін қарау құралында көрсетілген қателік хабарламасын қараңыз.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Құжатты көру мүмкін емес.",
		viewer_session_expired_explanation: "Құжат мазмұнын шығарып алу мүмкін емес.",
		viewer_session_expired_userResponse: "Қайта кіріп көріңіз. Егер мәселе шешілмесе, бағдарлама сервері орындалмауы мүмкін. Жүйе әкімшіңізден IBM Content Navigator қателік журналдарын тексеріп және серверді қайта бастауынн сұраңыз.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Құжатты көру мүмкін емес.",
		ajaxViewer_getPage_failed_explanation: "AJAX Viewer құралы бет мазмұнын шығару кезінде қате жауапты қабылдады. Бағдарлама сервері орындалмауы мүмкін.",
		ajaxViewer_getPage_failed_userResponse: "Веб шолғышыңызды жауып және қайтадан кіріңіз. Егер мәселе шешілмесе, жүйелік әкімшіңізді веб бағдарлама серверінің журнал файлдарын шолып және серверді қайта бастауын сұраңыз.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) құралы сіздің жұмыс орныңызда табылмады.",
		viewer_java_plugin_not_found_explanation: "Не қосылу модулі табылмады не JRE элементінің дұрыс нұсқасы орнатылмады.",
		viewer_java_plugin_not_found_userResponse: "JRE элементінің орнатылуын тексеріңіз. Мысалы, пәрмен шақыруында келесі пәрменді енгізіңіз: Java -version. Егер JRE файлы орнатылмаса немесе қате нұсқа деңгейінде орнатылса, онда JRE файлының дұрыс нұсқасын орнатыңыз. Қолдауға ие болған нұсқалардың тізімі <i>IBM Content Navigator бағдарламасына арналған аппараттық құралдар мен бағдарламалық жасақтама алғышарттары</i> құжатында IBM Software Support торабында қамтылған.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Құжат веб шолғышыңызда көрсетіле алмайды.",
		viewer_pdf_plugin_not_found_explanation: "PDF құжаттарын веб шолғышта көрсету үшін қолданылатын қосылу модулі табылмады.",
		viewer_pdf_plugin_not_found_userResponse: "PDF файлы қарау құралы терезесінде көрсетілгеннен гөрі сіздің жұмыс орныңызда жүктелуі тиіс.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Келесі элемент репозиторийге қосылмайды: ${0}.",
		add_document_single_item_error_explanation: "Бұл қателік келесі себептердің бірінен пайда болмайды:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Көшірілген не жойылған құжатты қосуға әрекет етудесіз.</li>" + "<li>Аты өзгерген құжатты қосу үшін әрекет етудесіз.</li>" + "<li>Бұзылған құжатты қосу үшін әрекет етудесіз.</li>" + "<li>Басқа бағдарламада ашылған құжатты қосуға әрекет етудесіз.</li>" + "<li>Қалтаны репозиторийге қосу үшін әрекет етудесіз.</li>" + "<li>Құжатты қабылдау үшін амалдық жүйе үшін қажетті рұқсаттарыңыз жоқ.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Мәселені шешу үшін сәйкес әрекетті алыңыз:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Егер құжат көшірілсе не аты өзгерсе, сіздің файл жүйеңіздегі құжатты тауып және оны қайтадан қосу үшін әрекет етіңіз.</li>" + "<li>Егер құжат басқа бағдарламада ашылса, оны жауып және оны қайтадан қосуға тырысыңыз.</li>" + "</ul>" + "<br>Қалталарды репозиторийге қоса алмайсыз.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Келесі ${0} элементтер репозиторийге қосыла алмайды: ${1}",
		add_document_multiple_items_error_explanation: "Келесі элементтердің бірі бар мәселе кез келген элементтің репозиторийге қосылуынан сақтайды. Бұл қателік келесі себептердің бірінен пайда болмайды:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Көшірілген не жойылған құжатты қосуға әрекет етудесіз.</li>" + "<li>Аты өзгерген құжатты қосу үшін әрекет етудесіз.</li>" + "<li>Бұзылған құжатты қосу үшін әрекет етудесіз.</li>" + "<li>Басқа бағдарламада ашылған құжатты қосуға әрекет етудесіз.</li>" + "<li>Қалтаны репозиторийге қосу үшін әрекет етудесіз.</li>" + "<li>Құжатты қабылдау үшін амалдық жүйе үшін қажетті рұқсаттарыңыз жоқ.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Мәселені шешу үшін сәйкес әрекетті алыңыз:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Егер құжат көшірілсе не аты өзгерсе, сіздің файл жүйеңіздегі құжатты тауып және әрекеттерді қайтадан қосу үшін әрекет етіңіз.</li>" + "<li>Егер құжат басқа бағдарламада ашылса, оны жауып және элементтерді қайтадан қосуға тырысыңыз.</li>" + "<li>Егер құжат жойылса немесе бұзылса, элементті қайтадан таңдап және қалған элементтерді қайтадан қосуға тырсыңыз.</li>" + "</ul>" + "<br>Қалталарды репозиторийге қоса алмайсыз.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Элементтерді осы орыннан сүйреп апару мүмкін емес.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Пішіндер нысаны ашылмайды.",
		open_forms_work_object_error_explanation: "Веб тұтынушы келесі пішімдердегі нысан түрлеріне қолдау көрсетпейді: жұмыс ағымы саясаты.",
		open_forms_work_object_error_userResponse: "Басқа құжатты ашыңыз.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Құжат ашылмайды.",
		viewer_privilege_to_view_error_explanation: "Құжатты көру үшін арнайы артықшылықтарыңыз жоқ.",
		viewer_privilege_to_view_error_userResponse: "Құжат иесінен немесе сіздің жүйе әкімшіңізден сізге құжатты көру үшін сәйкес артықшылықтарды беруді сұраңыз.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Элементтер репозиторийге қосыла алмайды.",
		add_document_too_many_items_error_explanation: "Сіз бір уақытта ${0} элементке дейін қоса аласыз. ${1} элементтерді қосуға тырысыңыз.",
		add_document_too_many_items_error_userResponse: "Кейбір элементтерді тізімнен жойып және элементтерді қайтадан қосуға тырысыңыз. Сіз сонымен қатар әкімші жүйеңізге жұмыс үстеліңізге бір уақытта қоса алатын құжаттардың ең үлкен санын ұлғайтуды сұрай аласыз.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Веб тұтынушыға қосылу келесі URL мекен-жайын қолдану арқылы орнатылмайды: ${0}.",
		http_ltpa_expired_explanation: "Шолғыш сценарийіңізбен байланыстырылған LTPA кілтінің мерзімі аяқталған.",
		http_ltpa_expired_userResponse: "Веб шолғышыңызды қайтадан бастап және жүйеге қайтадан кіріңіз. Егер мәселе шешілмесе, келесі қателікті жүйе әкімшіңізге хабарлаңыз: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Құжат ${0} қалтасына қосыла алмайды.",
		dnd_no_privilege_error_explanation: "Қалтадағы рұқсаттар кез келген құжаттарды қалтаға қосылудан сақтайды.",
		dnd_no_privilege_error_userResponse: "Құжатты әр түрлі қалтаға қосыңыз.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Элементтер өзгертіле алмайды.",
		modify_document_too_many_items_error_explanation: "Сіз бір уақытта ${0} элементке дейін өзгерте аласыз. ${1} элементтерді өзгертуге тырысудасыз.",
		modify_document_too_many_items_error_userResponse: "Бірнеше элементтерді таңдап және элементтерді қайтадан өзгертуге тырысыңыз. Сіз сонымен қатар әкімші жүйеңізге жұмыс үстеліңізге бір уақытта өзгерте алатын элементтердің ең үлкен санын ұлғайтуды сұрай аласыз.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "${0} классын қолдана алмайсыз.",
		add_document_multiple_unique_values_error_explanation: "${0} классы әр бір құжат үшін бірегей мәнді талап ететін бір немесе бірнеше сипаттарды қамтиды. Бірнеше құжаттарды қосқан кезде, барлық құжаттар бірдей мәндерді қолданады.",
		add_document_multiple_unique_values_error_userResponse: "Әр түрлі классты таңдап немесе құжаттарды жеке қосыңыз.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "${0} енгізу үлгісін қолдана алмайсыз.",
		add_document_multiple_unique_values_entry_template_error_explanation: "${0} енгізу үлгісі құжаттарды ${1} классына қосу үшін талап етеді. Алайда ${1} классы әр бір құжат үшін бірегей мәнді талап ететін бір немесе бірнеше сипаттарды қамтиды. Бірнеше құжаттарды қосқан кезде, барлық құжаттар бірдей мәндерді қолданады.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Әр түрлі енгізілім үлгісін таңдап немесе құжаттарды жеке-жеке қосыңыз.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "${0} енгізу үлгісін қолдана алмайсыз.",
		entry_template_class_restricted_error_explanation: "Енгізу үлгісі ${1} сыныбын қолдану арқылы элементтерді қосады және сол сыныпты қолдану арқылы элементтерді қосуға тиісті рұқсатыңыз жоқ.",
		entry_template_class_restricted_error_userResponse: "Әртүрлі енгізу үлгісін таңдаңыз немесе жүйе әкімшісінен ${1} сыныбын қолдану арқылы элементтерді қосу үшін тиісті рұқсаттарды беруді сұраңыз.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Жұмыс элементі өзге пайдаланушыға қайта белгіленуі мүмкін емес.",
		process_reassign_error_explanation: "Жұмыс процессі әрекетке тыйым салды.",
		process_reassign_error_userResponse: "Жұмыс элементін ашып және ағымдағы қадамды жұмыс элементінде аяқтай аласыз.  Осы туралы қосымша ақпарат алу үшін элемент иесінен жұмыс элементі қайта тағайындала алатынын тексеру үшін сұраңыз.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Келесі тұтынушы әрекеті жүктелмейді: ${0}.",
		customaction_loadurl_error_explanation: "Тұтынушы әрекеті қол жетімді орналасымда емес. Ағымдағы тұтынкшының URL мекен-жайы мынадай ${1}.",
		customaction_loadurl_error_userResponse: "Әкімшіңізден тұтынушы әрекетін қол жетімді орналасымға көшіруді сұраңыз.",
		customaction_loadurl_error_adminResponse: "Тұтынушы әрекетін анықтайтын JSP файлы eClient веб бағдарламасының бөлігі ретінде немесе IBM Content Navigator веб бағдарламасы ретінде қамтамасыз етілуі тиіс.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Келесі мүмкіндік табылмайды: ${0}.",
		feature_invalid_explanation: "Бұл мәселе егер мүмкіндік көрсетілген жұмыс үстелінде қол жетімді болса немесе мүмкіндік аты дұрыс аталмаған жағдайда пайда болады.",
		feature_invalid_userResponse: "OK түймешігін басқан кезде осы жұмыс үстелі үшін әдепкі мүмкіндікке қайта бағытталады. Жүйе әкімшіңізбен осы мәселені жіберу үшін хабарласыңыз.",
		feature_invalid_adminResponse: "Егер мүмкндік жұмыс үстелінде қол жетімді болса, жұмыс үстелі теңшелімін әкімші құралында жаңартыңыз. Егер мүмкіндік жұмыс үстелінде қамтылмаса немесе дұрыс айтылмаса, URL мекен-жайын жаңарту үшін осы мүмкіндік үшін URL мекен-жайын құрған бағдарлама әзірлеушісімен жұмыс істеңіз.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "${0} іздеуі ашылмайды.",
		search_unsupportedTeamspaceSearch_error_explanation: "Осы іздеуді ашу үшін топ бос орнында болуыңыз керек.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Әр түрлі іздеуді таңдаңыз.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Келесі файл енгізілмейді: ${0}.",
		wrong_import_file_type_error_explanation: "Файл сипаттар файлы болуы тиіс.",
		wrong_import_file_type_error_userResponse: "Әкімші құралынан экспорттаған сипаттар файлын таңдаңыз.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "${0} репозиторийі ${1} жұмыс үстелінде табылмайды.",
		browse_repository_not_found_error_explanation: "Репозиторий жұмыс үстелінде болуы тиіс және URL параметрінде көрсетілген кезде шарлау мүмкіндігі үшін қосылуы тиіс.",
		browse_repository_not_found_error_userResponse: "URL мекен-жайында көрсетілген репозиторий идентификаторының дұрыс болуын тексеріңіз, репозиторий${1} жұмыс үстеліне қосылған және шарлау мүмкіндігі репозиторий үшін іске қосылған.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "${0} репозиторийі ${1} жұмыс үстеліндегі шарлау мүмкіндігіне қосылған жоқ.",
		browse_repository_not_enabled_error_explanation: "Репозиторий URL параметрінде көрсетілген кезде шарлау мүмкіндігі үшін іске қосылуы тиіс.",
		browse_repository_not_enabled_error_userResponse: "Шарлау мүмкіндігін ${0} репозиторийі үшін ${1} жұмыс үстелінде іске қосыңыз.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Іздеу аяқталмайды себебі байланыс жарамсыз шартты қамтиды.",
		invalid_xt_stored_search_criteria_error_explanation: "Келесі мән жарамсыз: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Жүйе әкімшіңізден жаңартылған байланысты қамтамасыз ету үшін сұраңыз.",
		invalid_xt_stored_search_criteria_error_adminResponse: "URL мекен-жайындағы сәйкес ат-мән жұбын өңдеңіз. Сипат үшін қай мәндердің жарамды екенін білмесеңіз,FileNet Workplace XT іздеу жасаушысындағы сақьалған іздеуді жарамды мәнді анықтау үшін ашыңыз.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Репозиторийаралық Іздеуді орындау мүмкін емес.",
		unified_search_invalid_fixed_value_error_explanation: "Айқас репозиторий іздеуі жарамсыз шартты қамтиды. Бұл мәселе шарт салыстырудағы басқа сипаттармен сыйысымсыз мәнді түзеткен кезде пайда бола алады. Мысалы, бұл мәселе егер түзетілген мән жол болған кезде, бірақ салыстырудағы басқа сипаттар бүтін сандар болған кезде пайда бола алады.",
		unified_search_invalid_fixed_value_error_userResponse: "Іздеуді өңдеуге сәйкес рұқсатыңыз болса, жарамсыз шартты жойып және іздеуді қайтадан сақтаңыз. Егер іздеуді өңдеуге тиісті рұқсатыңыз болмаса, іздеу иесінен немесе жүйе әкімшесінен іздеуді қайта сақтауға рұқсат сұраңыз.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Өтініш орындалмады.",
		launch_action_invalid_json_error_explanation: "Желі клиентіне жіберілген дерек жарамды емес.",
		launch_action_invalid_json_error_userResponse: "Осы мәселе пайда болған кезде қандай бағдарламаны қолданғаныңыз туралы жүйе әкімшісіне хабарлаңыз.",
		launch_action_invalid_json_error_adminResponse: "Клиент бағдарламасы жарамды JSON нысанын желі клиентіне жібермеді. Contact IBM Software Support қолдау бағдарламасы қосымша көмекке арналған.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Өтініш орындалмады.",
		launch_action_not_found_error_explanation: "${0} әрекеті ${1} жұмыс үстеліндегі кез келген мәзірлерге арналып конфигурацияланбаған.",
		launch_action_not_found_error_userResponse: "Жүйе әкімшісінен ${1} жұмыс үстелін ${0} әрекетін қамтитын мәзірді қолдану үшін конфигурациялауды немесе ${0} әрекетін қосатын жұмыс үстелін тағайындауды сұраңыз.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Өтініш орындалмады.",
		launch_action_repository_not_found_error_explanation: "${0} репозиторийі ${1} жұмыс үстелімен байланыспайды.",
		launch_action_repository_not_found_error_userResponse: "Жүйе әкімшісінен ${0} репозиторийін ${1} жұмыс үстелімен байланыстыруды немесе сізді ${0} репозиторийін қосатын жұмыс үстеліне тағайындауды сұраңыз.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Топ бос орны ашылмайды.",
		teamspace_cannot_open_error_explanation: "Топ бос орны осы жұмыс үстелі үшін теңшелмеген.",
		teamspace_cannot_open_error_userResponse: "Топ бос орны мүмкіндігін қамтитын немесе бұл жұмыс үстелі топ бос орнының мүмкіндігін қамту үшін жаңартылатын болса жұмыс үстеліне қатысыңыз болуын әкімшіңізден сұраңыз.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Кемітілген мазмұнда тексеру кезінде қателік пайда болды.",
		viewer_redaction_checkin_failed_explanation: "Қараушы өңделген мазмұн ішінде тексеру кезінде қате жауабы алынды.",
		viewer_redaction_checkin_failed_userResponse: "Жүйе әкімшіңізді веб бағдарламасы серверінің журнал файлдарын қарауды сұраңыз.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Бұл репозиторийге құжаттарды қоса алмайсыз.",
		add_document_odserver_odwek_version_od_error_explanation: "IBM Content Manager OnDemand сервері немесе ODWEK ағымдағы нұсқасы Content Manager OnDemand репозиторийіне құжаттарды қосуға қолдау көрсететін минималды деңгейде де емес.",
		add_document_odserver_odwek_version_od_error_userResponse: "Content Manager OnDemand Server және ODWEK қайбір нұсқасы Content Manager OnDemand репозиторийлеріне құжаттарды қосуға қажет екенін әкімшіңізден сұраңыз.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Элементтер репозиторийге қосыла алмайды.",
		add_document_too_many_items_od_error_explanation: "IBM Content Manager OnDemand репозиторийлері үшін, бір уақыт мезігілінде тек бір элемент қоса аласыз.",
		add_document_too_many_items_od_error_userResponse: "Тізімнен кей элементтерді алып тастаңыз және бір уақытта біреуден сынап көріңіз.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Элементті репозиторийге қосу мүмкін емес.",
		add_document_filesize_empty_od_error_explanation: "IBM Content Manager OnDemand репозиторийіне бос файлдарды қоса алмайсыз.",
		add_document_filesize_empty_od_error_userResponse: "Файлға мазмұн қосыңыз және файлды қайта қосып көріңіз, немесе өзге элемент қосыңыз.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Репозиторийаралық Іздеуді орындау мүмкін емес.",
		unified_search_repository_not_found_error_explanation: "Айқас репозиторий іздеуі бір немесе бірнеше жарамсыз репозиторийді қамтиды. Бұл қателік іздеуде бар репозиторийлерді бағдарламадан жойған кезде немесе ағымдық жұмыс үстелінен жылжытқанда пайда болады.",
		unified_search_repository_not_found_error_userResponse: "Егер іздеуді өңдейге рұқсатыңыз болса, іздеуді қайта сақтаңыз. Іздеуді сақтаған кезде, веб тұтынушы жарамсыз репозиторийлерді іздеуден жояды. Егер іздеуді өңдеуге тиісті рұқсатыңыз болмаса, іздеу иесінен немесе жүйе әкімшесінен іздеуді қайта сақтауға рұқсат сұраңыз.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Жаңа құжат жасалмайды.",
		edit_document_using_office_online_error: "Құжат ашылмайды.",
		edit_document_using_office_online_error_explanation: "Microsoft Office онлайн серверінің URL мекен-жайы теңшелмейді.",
		edit_document_using_office_online_error_userResponse: "Office бағдарламасын онлайн күйде пайдаланар алдында, әкімшіңіз бірінші Office онлайн серверін репозиторийге бірінші қосу керек және Microsoft Office онлайн серверінің URL мекен-жайын көрсету керек.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Құжат Microsoft Office Online қызметінде ашылмайды.",
		edit_document_using_office_online_error_userResponse1: "Жүйе әкімшіңізден MS Office Online сервер біріктіруінің жаңартылуын сұраңыз.<br><br> Егер пайдаланушы осы құжатты Microsoft Office Online қызметінен қабылдауды қажет етсе, онда репозиторий үшін Өңдеуді біріктіру бетіне өтіп және MS Office Online сервер біріктіруін office online қолдауына өңдеу үшін класттардың тізіміндегі классты қамту үшін жаңартыңыз. ",		
		browser_not_support_this_viewer: "Теңшелген қарау құралы шолғышыңызбен үйлесімді емес.",
		browser_not_support_this_viewer_explanation: "Бұл ${0} мәнге шолғыш арқылы қолдау көрсетпейді.",
		browser_not_support_this_viewer_userResponse: "Құжатты ашуға арналған басқа бір қараушыны пайдаланыңыз. Қолдау көрсетілген шолғыштардың тізімі <i>IBM Content Navigator үшін жабдық пен бағдарламалық жасақтаманың алғышарттары</i> құжатына IBM Бағдарламалық қамтамасыз етуді қолдау торабында қосылады.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Жұмыс ағымы ақпараты",
		process_information_info_text: "Таңдалған элемент келесі жұмыс ағымдарында орындалуда.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Тең",
		operator_NOTEQUAL: "Тең Емес",
		operator_LIKE: "Сияқты",
		operator_STARTSWITH: "Келесімен басталады",
		operator_ENDSWITH: "Келесімен аяқталады",
		operator_NOTLIKE: "Ұқсас емес",
		operator_NULL: "Бос",
		operator_NOTNULL: "Бос емес",
		operator_LESS: "Келесідегіден кішірек",
		operator_LESSOREQUAL: "Келесіден аз немесе тең",
		operator_GREATER: "Келесідегіден үлкенірек",
		operator_GREATEROREQUAL: "Келесіден үлкенірек немесе тең",
		operator_BETWEEN: "Арасында",
		operator_NOTBETWEEN: "Арасында емес",
		operator_IN: "Барлығын кірістіру",
		operator_INANY: "Кез келгенін қамту",
		operator_NOTIN: "Барлығын шығару",
		operator_CONTAINS: "Қамтиды",

		/* SearchForm widget */
		search_button_tooltip: "Сіздің шартыңызға сәйкес болатын құжаттарды іздеу.",
		reset_button_tooltip: "Әкімшіңіз арқылы орнатылған іздеуді әдепкі мәндерге орнатады.",
		clear_button_tooltip: "Іздеу үшін сіз енгізген барлық мәндерді жояды.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Іздеуді таңдау",
		append_to_search: "Іздеуге қабылданды",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Жаңа іздеу",
		new_unified_search: "Жаңа айқас репозиторий іздеуі",
		searh_name_contains: "Атты іздеу келесідегіні қамтиды",
		keep_search_criteria_expanded: "Іздеу шартын ашық сақтаңыз",
		showing_results: "Келесі үшін нәтижелерді көрсету:",
		open_in_new_window: "Жаңа терезеде ашу",
		open_in_new_tab: "Жаңа Қойындыда ашу",
		close_tab: "Қойындыны жабу",
		add_repository: "Репозиторий қосу",
		edit_repository: "Репозиторийді өзгерту",
		remove_repository: "Жою",
		search_scope: "Іздеу аймағы",
		search_class_template: "Сынып",
		object_type_version: "Нысан түрі және нұсқасы",
		not_applicable: "Жарамсыз",
		unified_search_including_subfolders: " (Ішкі қалталарды қосқанда)",
		unified_search_dialog_intro_text: "Репозиторийді және қамтығыңыз келген іздеудегі іздеу немесе класстарды таңдаңыз.",
		unified_search_class_or_template: "Класс немесе Үлгі",

		select_object_fieldset_legend: "Тіркеу үшін, элементтерді қалай тапқыңыз келеді:",
		select_object_create_new_search: "Жаңа іздеу",
		select_object_search_template: "Бар іздеу",

		search_criteria: "Іздеу шарты:",
		search_criteria_no_colon: "Іздеу шарты",
		search_in_multiple: "Келесіде іздеу (${0}):",
		search_location_including_subfolders: "${0} ішкі қалталарды қосқанда",
		search_class: "Сыныбы:",
		search_class_multiple: "Класс (${0}):",
		search_class_including_subclasses: "${0} ішкі класстарды қосқанда",
		search_class_all_pseudo: "Барлық",
		search_results: "Іздеу Нәтижелері",
		select_operator: "Амалдағышты таңдау",
		ending_value: "${0} сипаты үшін аяқталатын мән мынадай:",
		search_options: "Іздеу опциялары:",
		search_version: "Нұсқа:",
		search_released_version: "Шығарылған нұсқа",
		search_current_version: "Ағымдағы нұсқа",
		search_all_versions: "Барлық нұсқалар",
		search_file_type_filter: "Файл түрінің сүзгісі:",
		search_one_file_type: "1 файл түрі",
		search_many_file_types: "${0} файл түрлері",
		search_action_filter: "Әрекет сүзгісі:",
		search_action_filter_hover_help: "Пайдаланушылар ғана алған арнайы әрекеттегі фалдарды ғана қамту үшін нәтижелерді азайтыңыз.<br/>Мысалы, Қыркүйектің 20, 2012 күнінде қосқан құжаттарды ғана іздей аласыз.",
		search_action_filter_enabled: "Әрекет сүзгісі іске қосылды",
		search_enable: "Іске қосу",
		search_disable: "Ажырату",
		search_by: "арқылы",
		search_added: "Қосылған",
		search_modified: "Өзгертілген",
		search_checked_out: "Бөліп алынған:",
		search_date_operator_on: "Келесіге",
		search_date_operator_not_on: "ішінде емес",
		search_date_operator_before: "Дейін",
		search_date_operator_after: "Кейін",
		search_version_hover_help_p8: "Шығарылған нұсқа барлық пайдаланушылар үшін қол жетімді. Бір немесе бірнеше пайдаланушыларды білдіретін ағымдағы нұсқа болатын құжатты өзгертуде.",
		search_version_hover_help_cm: "Ағымдағы нұсқа элементтің ең соңғы нұсқасы.",
		search_using: "Сай болатын элементтерді іздеу:",
		search_property_and_text_criteria: "Сипат мәндері мен мәтін шартының екеуі де",
		search_property_or_text_criteria: "Не сипат мәндері не мәтін шарты",
		search_property_and_text: "Сипат және мәтін шартының екеуі де",
		search_property_or_text: "Не сипат не мәтін шарты",
		search_property_options: "Сипат опциялары:",
		search_property_option_match_all: "Сипаттардың барлығы",
		search_property_option_match_any: "Сипаттардың кез келгені",
		search_property_option_match_all_summary: "Барлығын салыстыру",
		search_property_option_match_any_summary: "Кез келгенін салыстыру",
		search_total_count_type_total: "Жалпы",
		search_total_count_type_atleast: "Кем дегенде",
		search_content_size_filter: "Мазмұн ауқымының сүзгісі:",
		search_content_size_filter_any: "Кез келген мазмұн өлшемі",

		/* Search work options */
		search_work_filter: "Жұмыс элементі сүзгісі:",
		search_work_filter_hover_help: "Жұмыс ағымындағы элементтерді ғана қамту үшін нәтижелердің ауқымын кеміту. Мысалы, нәтижелерді тек белсенді болатын жұмыс элементтерін ғана қамту үшін азайта аласыз.<br /><br />Бұл опция егер іздеу арқылы қайтарылған элементтердің барлық нұсқаларын көргіңіз келсе қабылданбайды.",
		search_work_filter_enabled: "Жұмыс элементі сүзгісі іске қосылған",
		search_work_filter_status: "Күй:",
		search_work_filter_step: "Қадам:",
		search_work_filter_owner: "Иесі:",
		search_work_filter_status_all: "Барлық элементтер",
		search_work_filter_status_active: "Белсенді элементтер",
		search_work_filter_status_suspended: "Күдікті элементтер",
		search_work_filter_process_all: "Барлық жұмыс ағымдары",
		search_work_filter_step_all: "Барлық қадамдар",
		search_work_filter_owner_all: "Барлық пайдаланушылар",
		search_work_filter_step_error: "Қадам аты жоқ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Іздеу қосымша ақпаратсыз аяқталмайды. Кем дегенде бір шарт үшін мәнді енгізіңіз.",
		search_insufficient_input_box: "Іздеу қосымша ақпаратсыз аяқталмайды. Мәтін іздеу шарттарын енгізіңіз немесе метадеректер үлгісін таңдаңыз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Іздеу қосымша ақпаратсыз ашық болған кезде орындау үшін теңшеле алмайды. Кем дегенде бір шарт үшін мәнді енгізіңіз.",
		search_member_required: "Осы іздеуді арнайы пайдаланушылар және топтармен бөлісу үшін, бұл іздеуді бөлісуде кем дегенде арнайы пайдаланушылар мен топтарды таңдаңыз.",
		search_criteria_layout_and: "ЖӘНЕ",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Өзгертулеріңізді сақтамай жапқыңыз келеді ме?",
		search_prompt_close_all_without_save: "Өзгертулеріңізді сақтамай барлық қойындыларыңызды жапқыңыз келеді ме?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Іздеу шартының келесі түрлерінің бірі осы репозиторий үшін жарамсыз: ${0}. Іздеуді веб тұтынушыда орындау үшін жарамсыз шарт жойылуы тиіс. Іздеуді сақтасаңыз, жарамсыз шарт жойылады. Іздеуді өзгерткіңіз келмесе, іздеуді жабыңыз.",
		search_invalid_repository: "Бір немесе бірнеше репозиторийлер",
		search_invalid_class: "Бір немесе бірнеше класстар",
		search_invalid_folder: "Бір немесе бірнеше қалталар",
		search_invalid_file_type: "Бір немесе бірнеше файл түрлері",
		search_invalid_property: "Бір немесе бірнеше сипаттар",
		search_invalid_text_search: "Мәтінді іздеу шарты",
		search_invalid_work: "Жұмыс элементінің сүзгі шарты",

		search_operator_pulldown_missing: "Амалдағыш талап етіледі. Амалдағышты апарып тастау мәзірінен таңдаңыз. Егер ешқандай амалдағышты көрмесеңіз, жүйе әкімшіңізден <b>Іздеу</b> қойындысын әкімші құралында барлық амалдағыштардың жасырын болуын тексеруді сұраңыз. Егер бұл айқас репозиторий іздеуі болса, апарып тастау мәзірі егер салыстырылған сипаттар ешқандай ортақ амалдағыштарды қамтымаса ешқандай амалдағыштарды қамти алмайды.",

		/*SearchBuilder */
		open_search_builder: "Жаңа іздеу",
		document_type: "Сынып",
		show_all_properties: "Барлық сипаттарды көрсету",
		text_search_label: "Элементтерді келесі терминдермен табыңыз:",
		text_search_place_holder: "Терминдер мен амалдағыштар тіркесімін қолданыңыз: * ? немесе \"exact match phrases\"",
		text_search_place_holder_box: "Терминдер мен амалдағыштарын тіркесімін қолданыңыз: AND, OR, NOT және \"exact match phrases\"",
		text_search_place_holder_cascade_proximity: "Терминдер мен амалдағыштар тіркесімін қолданыңыз: * немесе ?",
		text_search_place_holder_common: "Терминдер мен \"exact match phrases\" тіркесімін пайдалану",
		text_search_hover_help_p8: "(*) жұлдызша немесе (?) сұрақ белгісін қойылмалы таңба ретінде қолданыңыз. Тырнақша (\"\") белгілерін нақты сәйкестіктер үшін қолданыңыз.",
		text_search_hover_help_p8_only_crs: "(*) жұлдызша немесе (?) сұрақ белгісін қойылмалы таңба ретінде қолданыңыз. Тырнақша (\"\") белгілерін нақты сәйкестіктер үшін қолданыңыз. Бірнеше термин көрсетілген кезде, айқас репозиторий іздеу мүмкіндігі сол терминнің кез келгенін қамтитын элементтерді береді.",
		text_search_hover_help_cm: "(*) жұлдызша немесе (?) сұрақ белгісін қойылмалы таңба ретінде қолданыңыз. Тырнақша (\"\") белгілерін нақты сәйкестіктер үшін қолданыңыз. (-) алу белгісін шеттеу үшін терминдер алдында қолдану және (+) қосу белгісі терминдердің алдында кірістіру үшін қолданады.",
		text_search_hover_help_box: "Барлық терминдерді сәйкестендіру үшін терминдер арасында AND элементін қолданыңыз. Кез келген терминдерді сәйкестендіру үшін терминдер арасында OR элементін қолданыңыз. Тырнақша (\"\") белгілерін нақты сәйкестіктер үшін қолданыңыз. Шеттету үшін NOT элементімен терминді жалғастырыңыз.",
		text_search_hover_help_common: "Тырнақша (\"\") белгілерін нақты сәйкестіктер үшін қолданыңыз. Бірнеше термин көрсетілген кезде, айқас репозиторий іздеу мүмкіндігі сол терминнің барлығын қамтитын элементтерді береді.",
		text_search_options: "Мәтін опциялары:",
		text_search_options_hover_help: "Егер қойылмалы таңбалардан басқа кез келген амалдағыштарды қолдансаңыз, Жетілдірілген амалдағыштарды таңдаңыз.",
		text_search_option_any: "Терминдердің кез келгені",
		text_search_option_all: "Барлық терминдер",
		text_search_option_proximity: "Сөздердің жақындығы арқылы:",
		text_search_option_none: "Жетілдірілген амалдағыштар",
		text_search_option_authoring: "Мәтін іздеу:",
		text_search_option_authoring_hover_help: "Пайдаланушыларға қолжетімді мәтінді іздеу шарттарын жасау жолын анықтайтын опцияны таңдаңыз. Кез келген мәтінді іздеу шарттарын іздеуге қосқыңыз келмесе, опцияны жасырыңыз. Сонымен қатар, мәтінді іздеу шарттарына өңделуге немесе пайдаланушылар арқылы сұралуға немесе пайдаланушылар ғана оқи алатындай рұқсат бере аласыз.",
		text_search_option_hide: "Шартты жасыру",
		text_search_option_hide_hover_help: "Іздеудегі кез келген мәтін іздеу шартын қамтығыңыз келмесе осы опцияны таңдаңыз немесе басқа пайдаланушыларға мәтін іздеу шартын көрсетуге рұқсат етіңіз.",
		text_search_option_in: "HTML/XML қойындысында ${0}",
		text_search_option_paragraph: "Бірдей параграфта",
		text_search_option_sentence: "Бірдей сөйлемде",
		text_search_option_vql: "VQL сұрауы",
		text_search_option_none_hover_help: "- шығару үшін терминдердің алдында қолдану.",
		text_search_option_cascade_proximity_hover_help: "Нақты сөйлемдерді қамтымайтын сөздердің ауқымында пайда болатын терминдерге іздеу нәтижелерін шектеу.",

		box_search_metadata: "Метадеректер:",
		box_search_select_template: "Үлгіні таңдау",
		box_search_no_templates: "Үлгілер қолжетімді емес",
		box_text_search_options_search_within: "Іздеу ауқымы:",
		box_text_search_options_search_within_everything: "Барлығы",
		box_text_search_options_search_within_file_content: "Құжат мазмұны",
		box_text_search_options_search_within_tags: "Тегтер",
		box_text_search_options_limit_to: "Тек іздеу:",

		add_property: "Сипатты Қосу",
		edit_template: "Іздеуді өзгерту",
		save_search: "Іздеуді сақтау",
		search_template_name: "Аты:",
		search_template_desc: "Сипаттама:",
		auto_run: "Іздеу ашық болған кезде орындау",
		show_in_tree: "Қалта құрылымындағы іздеуді көрсету",
		show_in_tree_hover_help: "Егер іздеу қалтада сақталса, ол тек әдепкі бойынша мазмұн тізімінде ғана көрсетіледі. Егер осы параметрді таңдасаңыз, іздеу де Шарлау көрінісінің қалта тармағында көрсетіледі.  Алайда, іздеуді қалтада сақтаған болсаңыз ғана іздеу қалта тармағында көрсетіледі.",
		share_search_with: "Іздеуді келесімен бөлісу:",
		remove_member: "Жою ${0}",
		ok_button_label: "OK",
		save_template: "Сақтау",
		save_template_title: "Арнайы элементтерді іздеуді жиі қажет етсеңіз, іздеу шартыңызды сақтаңыз.",
		remove_criterion: "Жою",
		apply_button_label: "Қолдану",
		empty_search_results_pane: "Нәтижелерді көру үшін іздеуді орындау",

		/*Search_in control   */
		folder_tree_repository_root_name: "Толық репозиторий",

		repository_already_selected: "${0} репозиторий айқас репозитрий іздеуіне қосыла алмайды, себебі ол әлдеқашан іздеуде орналасқан. <br/> Репозиторий айқас репозиторий іздеуінде бір рет қана кірістіріле алады. <br/>айқас репозиторий іздеуінде қамту үшін әр түрлі репозиторийді таңдаңыз.",

		repository_limit_reached: "${0} репозиторий айқас репозиторий іздеуіне қосыла алмайды. ${1} репозиторийдің көп санын іздеуге қоса аласыз.",

		nomore_criteria_toappend: "Барлық салыстырылған сипаттар іздеу шартына әлдеқашан қосылған. Іздеу шартына ешқандай сипаттар қослыған жоқ.",
		nomore_criteria_toappend_regular: "Барлық сипаттар іздеу шартына әлдеқашан қосылған. Іздеу шартына ешқандай сипаттар қослыған жоқ.",

		/* OD Save Search dialog */
		reload_label: "Қайта қотару",
		od_save_search_help_text: "Іздеу үшін атты теріңіз немесе бар іздеуді алмастыру үшін таңдаңыз",
		public_access_label: "Басқаларға осы іздеуді қолдану үшін рұқсат етіңіз",
		od_delete_search_help_text: "Жою үшін бір немесе бірнеше іздеулерді таңдаңыз",
		delete_save_searches: "Сақталған іздеулерді жою",

		/* Unified Search */
		unified_search_enable_text_search: "Мәтінді іздеу шартын қосу",
		unified_search_text_search_enabled: "Мәтінді іздеу қосылған",
		unified_search_mapping: "Салыстыру",
		unified_search_new_mapping: "Жаңа салыстыру",
		unified_search_mapping_name: "Салыстыру аты",
		unified_search_mapping_dialog_instructions: "Салыстырғыңыз келген сипаттарды таңдаңыз. Кейбір сипаттар әр түрлі дерек түрімен сипатқа салыстырыла алады. Мысалы, жол сипатын бүтін сан сипатына салыстыра аласыз. Сипатты басқа сипатқа салыстырған кезде, сипаттар айқас репозиторий іздеуінде жалғыз сипат ретінде орындалады.",
		unified_search_filter_available_properties: "Қол жетімді сипаттарды сүзу",
		unified_search_available_properties: "Қол жетімді сипаттар",
		unified_search_mapped_properties: "Салыстырылған сипаттар",
		unified_search_single_values: "жалғыз мәндер",
		unified_search_multiple_values: "бірнеше мәндер",
		unified_search_add_mapping: "салыстыруды қосу",
		unified_search_warn_remove_repository: "Таңдалған репозиторий іздеу шартында қолданылады.\nегер репозиторийді жойсаңыз, репозиторийді қамтитын кез келген салыстырулар және іздеу шарты жойылады.\n\nРепозиторийді жойғыңыз келеді ме?",
		unified_search_warn_update_repository_mappings: "Осы репозиторидің сипатын таңдауды өзгерту іздеу шартына әсер етеді.\n\n Іздеу шарты сіз жоятын бір немесе бірнеше сипаттары бар бір немесе бірнеше салыстыруды қамтиды. Сіз жоятын сипаттарды қамтитын кез келген салыстырулар жойылуы керек. Осы салыстыруларды қамтитын кез келген іздеу шарты іздеуді іске қосу үшін жойылуы керек.\n\nРепозиторий опцияларын жаңартқыңыз және салыстырулар мен іздеу шартын жойғыңыз келеді ме?",
		unified_search_warn_update_repository_mappings_reset: "Мәтінді іздеу шартын осы репозиториде қосу айқас репозиторидің іздеу шартына әсер етеді.\n\n Іздеуді іске қосатын реттегі тазалануы керек репозиторийге арналған сипаттармен салыстыруын қамтитын критерияны кез келген сипат іздейді.\n\n Репозиторий опцияларын жаңартқыңыз және іздеу критериясын тазалағыңыз келе ме?",
		unified_search_warn_update_repository_text_criteria: "Мәтінді іздеу шартын осы репозиториде жою айқас репозиторидің іздеу шартына әсер етеді.\n\nМәтінді іздеу шарты айқас репозиториден іздеуді іске қосу үшін жойылуы керек.\n\nРепозиторий опциясын жаңартқыңыз және мәтінді іздеу шартын жойғыңыз келеді ме?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Мәтінді іздеу шартын осы репозиториде жою және сипатта таңдауды өзгерту айқас репозиторидің іздеу шартына әсер етеді.\n\nМәтінді іздеу шарты айқас репозиториден іздеуді іске қосу үшін жойылуы керек. Сонымен қатар, сипатты іздеу шарты сіз жоятын бір немесе бірнеше сипаттары бар бір немесе бірнеше салыстыруды қамтиды. Сіз жоятын сипаттарды қамтитын кез келген салыстырулар жойылуы керек. Осы салыстыруларды қамтитын кез келген сипатты іздеу шарты іздеуді іске қосу үшін жойылуы керек.\n\nРепозиторий опцияларын жаңартқыңыз және мәтінді іздеу шартын, салыстыруларды және сипатты іздеу шартын жойғыңыз келеді ме?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Мәтінді іздеу шартын осы репозиториде шығару айқас репозиторидің іздеу шартына әсер етеді.\n\n Іздеуді іске қосатын реттегі тазалануы керек репозиторийге арналған сипаттармен салыстыруын қамтитын критерияны кез келген сипат іздейді. Мәтін іздеу критериясы іздеуді іске қосатын реттегі айқас репозиторий іздеу критериясынан жойылуы мүмкін.\n\n Репозиторий опцияларын жаңартқыңыз және іздеу критериясын тазалағыңыз келе ме?",
		unified_search_warn_remove_mapping: "Осы салыстыруды өшіру іздеу шартына әсер етеді.\n\nСалыстыруды пайдаланатын іздеу шарты іздеуді қосу үшін, жойылуы керек.\n\nСалыстыруды жаңартқыңыз және іздеу шартын жоғыңыз келеді ме?",
		unified_search_warn_update_mapping: "Осы салыстыруды өзгерту іздеу шартына әсер етеді.\n\nСалыстыруды пайдаланатын іздеу шарты іздеудің жарамсыз операторлар мен жарамсыз мәндерді қамтымайтынына көз жеткізу үшін, тазалануы керек.\n\n Салыстыруды жаңартқыңыз және іздеу шартын тазалағыңыз келеді ме?",
		unified_search_warn_update_mapping_not_searchable: "Осы салыстыруды өзгерту іздеу шартына әсер етеді.\n\nСалыстырылған сипаттар тек көрсетуге арналғанда іздеу шартында салыстыруды қолдана алмайсыз. Салыстыруды қамтитын іздеу шарты іздеуді қосу үшін, жойылуы керек.\n\nСалыстыруды жаңартқыңыз және іздеу шартын жойғыңыз келеді ме?",
		unified_search_warn_update_mapping_box_searchable: "Осы салыстыруды өзгерту іздеу шартына әсер етеді.\n\nІздеу шарты бұрыннан осы салыстыруды бірнеше рет қамтиды және ${0} сипатын ${1} репозиториінен қоссаңыз, іздеу шарты ${0} сипатын көп рет қамтиды. Салыстыруды қамтитын іздеу шарты іздеуді қосу үшін, жойылуы керек.\n\nСалыстыруды жаңартқыңыз және іздеу шартын жойғыңыз келеді ме?",
		unified_search_details: "Айқас репозиторий іздеу мәліметтері",
		unified_search_fixed_value_property: "Түзетілген мән сипаты",
		unified_search_required_property: "Талап етілген сипат",
		unified_search_display_only_property: "Тек көрсетуге арналған сипат",
		unified_search_missing_required_properities: "Іздеу сақталмайды не орындалмайды.<br/>Келесі сипаттар сұралған сипаттар:${0}Сипаттарды салыстыруда қамтуыңыз керек және сипаттарды мәндермен бірге іздеу шартына қосыңыз.",
		unified_search_property_repostory: "${0} (Репозиторий: ${1})",
		unified_search_builder_no_mappings: "Іздеуді орындау мүмкін емес.<br/>Сипат салыструын жасап, оны <b>Нәтижелер дисплейі</b> ішіне іздеу мүмкіндігі сіздің нәтижелеріңізді көрсете алуы үшін енгізіңіз.",
		unified_search_builder_insufficient_criteria_to_run: "Іздеуді орындау мүмкін емес.<br/>Іздеу шарты мына репозиторийлерге арналған мәтін іздеу шартын немесе сипат мәндерін қамтымайды: ${0}Іздеуге қосылған әрбір репозиторий үшін сіз мәтін іздеу шартын енгізуіңіз немесе сипат салыстыруын жасауыңыз керек, сосын оларды сипат шартына қосып, сипат мәнін көрсетуіңіз керек.",
		unified_search_builder_insufficient_criteria_to_save: "Іздеу сақталмайды.<br/>Іздеу шарты мына репозиторийлерге арналған мәтін іздеу шартын қамтымайды:${0}Іздеуге қосылған әрбір репозиторий үшін сіз мына опциялардың бірін орындауыңыз керек:<ol><li>Сипат салыстыруын жасап,оны сипат шартына қосу.</li><li>Мәтін іздеу шартына қосылатын репозиторийді өзгертіп, сипат салыстыруын жасаңыз да, оны <b>Нәтижелер дисплейіне</b> қосыңыз.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Іздеуді орындау мүмкін емес.<br/>Іздеуге қосылған әрбір репозиторий үшін, кем дегенде бір сипат мәнін көрсетуіңіз керек. Мысалы, келесі сипаттарға арналған мәндерді көрсете аласыз: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Іздеуді орындау мүмкін емес.<br/>Мәтінді іздеу шарты қажет болады.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Іздеуді орындау мүмкін емес.<br/>Іздеуге қосылған әрбір репозиторий үшін, кем дегенде бір сипат мәнін көрсетуіңіз керек немесе мәтінді іздеу шартын енгізіңіз. Мысалы, келесі сипаттарға арналған мәндерді көрсете аласыз: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Іздеуді орындау мүмкін емес.<br/>Мәтінді іздеу шарты қажет болады. Іздеуге қосылған әрбір репозиторий үшін, кем дегенде бір сипат мәнін көрсетуіңіз керек немесе мәтінді іздеу шартын енгізіңіз. Мысалы, келесі сипаттарға арналған мәндерді көрсете аласыз: ${0}",
		unified_search_invalid_criteria: "Іздеу жарамсыз шарты иеленеді, ол іздеудің орындалуына бөгет жасайды.<br/>Жарамсыз шарт жойылды. Алайда, өзгертулерді іздеуге іздеуді орындамас бұрын сақтауыңыз керек. Өзгерістерді сақтағыңыз келмесе, іздеуді жабыңыз.<br/><br/>Келесі элементтер жойылған немесе өңделген:${0}",
		unified_search_invalid_fixed_values: "Іздеу сақталмайды не орындалмайды.<br/>Келесі іздеу шарты жарамсыз мәндерді түзетті:${0}Мәселені шешу үшін келесі әрекеттердің бірін орындаңыз:<ul><li>Жарамсыз мәндерді қамтитын іздеу шартын жойыңыз</li><li>IBM Content Manager OnDemand сипатын сипатты жоюға арналған түзеьілген мәнмен бірге қамтитын салыстыруларды өзгертіңіз.</li><li>IBM Content Manager OnDemand сипатын барлық сыйысымды сипаттарды жасау үшін арналған түзетілген мәнмен бірге қамтитын салыстыруларды өзгертіңіз. Қай сипаттар салыстырылатыны туралы қосымша ақпарат үшін сипатты салыстыру терезесінің жоғарғы жағындағы кіріспе мәтіндегі Көбірек біліңіз жолын қараңыз.</li></ul>",
		unified_search_cannot_add_properties: "Осы іздеуге сипаттарды қоса алмайсыз.<br/>Барлық қол жетімді салыстырылатын сипаттар іздеу шартында бұрыннан бар және әрбір сипат іздеуге тек бір рет қосылады.",
		unified_search_mapping_not_viewable: "Жәшік үлгісінің сипаттары іздеу нәтижелерінде көрсетілмейді. Осы салыстыруды баған сияқты қосқыңыз келсе, Жәшік үлгісінің сипаты емес кем дегенде бір сипатты салыстыру керексіз. Мысалы, сипатты басқа репозиторийден таңдай аласыз.",

		unified_search_returned_more: "Кем дегенде бір репозиторий рұқсат етілген ең үлкен нәтижелер санынан асады.",
		unified_search_partial_failure: "Кем дегенде бір репозиторийде қателік пайда болды.",
		unified_search_partial_failure_and_returned_more: "Кем дегенде бір репозиториде қате орын алады және кем дегенде бір репозиторий рұқсат етілген ең үлкен нәтижелер санынан асады.",
		unified_search_see_analysis: "Нәтижелер талдауларын көріңіз.",
		unified_search_analysis_intro_returned_more: "Ең үлкен рұқсат етілген нәтижелер санынан асатын әрбір репозиторий үшін, алдыңғы нәтижелерді қайтаруға іздеу шартын нақтылап көріңіз. Немесе айқас репозиторий іздеуіне рұқсат етілген ең үлкен санынан асатын қосымша нәтижелерді қайтар үшін жеке репозиторий іздеуін іске қосуыңыз керек.",
		unified_search_analysis_intro_partial_failure: "Репозиторий немесе репозиторийлер арқылы қайтарылған қателік мәліметтерін қараңыз. Егер қажет болса, қателерді шешіңіз және репозиторий аралық іздеуді қайта орындаңыз.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Қате орын алған әрбір репозитрий үшін, мәселені шешіп көріңіз және іздеуді қайта іске қосыңыз.<br/><br/>Ең үлкен рұқсат етілген нәтижелер санынан асатын әрбір репозиторий үшін, алдыңғы нәтижелерді қайтаруға іздеу шартын нақтылап көріңіз. Немесе айқас репозиторий іздеуіне рұқсат етілген ең үлкен санынан асатын қосымша нәтижелерді қайтар үшін жеке репозиторий іздеуін іске қосуыңыз керек.",
		unified_search_results_found: "Нәтижелер табылды",
		unified_search_maximum_allowed: "Максимум рұқсат етілген",
		unified_search_maximum_exceeded: "Максимум шамадан асқан",

		unified_search_mapping_rule_box: "Осы сипат салыстыруға қосылмайды.<p>${0} сипаты ${1} репозиториінен бұрыннан басқа салыстыруда болады және осы репозиториден ізделетін сипаттар әр іздеуге тек бір салыстыруда қосылады.<br/>Салыстыруға қосатын әр түрлі сипатты таңдаңыз.</p>",
		unified_search_mapping_rule_repository: "Сипат салыстыруға қосыла алмайды.<br/>Салыстыру ${0} репозиторийден сипатты әлдеқашаннан қамтиды. Салыстыру тек бір сипатты репозиторийден қамти алады.<br/>Әр түрлі репозиторийді сипатты қосу үшін таңдаңыз немесе жаңа салыстырылымды таңдалған сипат үшін құрыңыз.",
		unified_search_mapping_rule_data_type: "Сипат салыстыруға қосыла алмайды.<br/>${0} сипат ${1} сипатына ғана салыстырыла алады. Әр түрлі сипатты салыстыру үшін таңдаңыз немесе жаңа салыстырылымды таңдалған сипат үшін құрыңыз.<br/>Қай сипаттар салыстырылатыны туралы қосымша ақпарат үшін осы терезенің жоғарғы жағындағы кіріспе мәтіндегі Көбірек біліңіз жолын қараңыз.",
		unified_search_mapping_rule_cardinality: "Сипат салыстыруға қосыла алмайды.<br/>Салыстырудағы барлық сипаттарне жалғыз мәндерді не бірнеше мәндерді қолдауы тиіс. Таңдалған салыстыру ${0} элементін қолдайды және салыстырудағы сипаттар${1} элементін қолдайды.<br/>Әр түрлі сипатты салыстыруға қосу үшін таңдаңыз немесе жаңа салыстырылымды таңдалған сипат үшін құрыңыз.",
		unified_search_mapping_rule_fixed_value: "Сипат салыстыруға қосыла алмайды.<br/>Салыстыру әлдеқашан сипатты түзетілген мәнмен бірге қамтиды. Салыстыру тек бір сипатты түзетілген мәнмен бірге қамти алады.<br/>Әр түрлі сипатты салыстыруға қосу үшін таңдаңыз немесе жаңа салыстырылымды таңдалған сипат үшін құрыңыз.",
		unified_search_mapping_rule_child_component: "Сипат салыстыруға қосыла алмайды.<br/>Сипат еншілес құрамдаспен бірге басқа сипаттарға салыстыра алмайды. Осы сипатта іздеуге қабілетті болғыңыз келсе, таңдалған сипат үшін жаңа салыстыруды құрыңыз.",
		unified_search_mapping_rule_operator_intersection: "Сипат салыстыруға қосыла алмайды.<br/>Салыстырудағы барлық сипаттар жалпы бір немес бірнеше амалдағыштарды иеленуі тиіс. Алайда, ${0} сипаты жалпы ешқандай амалдағыштарды басқа сипаттармен бірге салыстыруда иеленбейді.<br/>Егер сәйккес болса, әр түрлі сипатты таңдаңыз. Егер таңдалған сипатты кірістіру қажет болса, жүйе әкімшіңізбен бірге сипатпен байланыстырылған амалдағыштарды өңдеу үшін жұмыс істеңіз.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Жетілдірілген параметрлер",
		advanced_search_options_intro: "Кеңейтілген шартты опцияларды орнатыңыз.",
		advanced_search_options_editable: "Өңделетін",
		advanced_search_options_readonly: "Тек оқуға арналған",
		advanced_search_options_required: "Қажетті",
		advanced_search_options_hidden: "Жасырын",
		advanced_search_options_property_editable:"Сипат:",
		advanced_search_options_operators:"Операторлар:",
		advanced_search_options_use_all:"Барлығын пайдалану",
		advanced_search_options_use_selected:"Таңдалғанды пайдалану",
		advanced_search_options_operators_filtered: "Операторлар сүзгіленген",
		// Data types in lowercase
		data_type_boolean: "логикалық өрнек",
		data_type_date: "күн",
		data_type_time: "уақыт",
		data_type_timestamp: "уақыт белдеуі",
		data_type_decimal: "ондық мән",
		data_type_double: "қалқымалы нүкте саны",
		data_type_short: "бүтін сан",
		data_type_integer: "бүтін сан",
		data_type_long: "бүтін сан",
		data_type_string: "мәтін жолы",
		data_type_string_alpha: "әліпбилік жол",
		data_type_string_alphanum: "әріптер мен сандар жолы",
		data_type_string_ext: "кеңейтілген әліпбилік-сандық жол",
		data_type_string_num: "сандық жол",
		data_type_binary: "екілік",
		data_type_object: "нысан",
		data_type_guid: "жаһандық бірегей анықтауыш",
		data_type_user: "пайдаланушылар",
		data_type_child_component: "еншілес құрамдас",

		/* Print Dialog */
		print_title: "Басып шығару",
		print_message: "Басып шығару: ${0}",
		print_print_button: "Басып шығару",
		print_clean_margins_button: "Барлығын 0 мәніне орнату",
		print_type: "Басып шығару түрі:",
		print_printer_server_options: "Серверді басып шығару опциялары",
		print_printer_properties: "Басып шығару сипаттары",
		print_printer_fax_properties: "Факс сипаттары",
		print_printer_name: "Басып шығарғыш аты:",
		print_fax_recipient: "Алушы",
		print_fax_sender: "Жіберуші",
		print_copies: "Көшірмелер:",
		print_local_orientation: "Бағдар",
		print_local_orientation_landscape: "Альбомдық",
		print_local_orientation_portrait: "Кітаптық",
		print_local_margins: "Шеттер",
		print_local_margins_top: "Жоғарғы",
		print_local_margins_bottom: "Төменгі",
		print_local_margins_left: "Сол",
		print_local_margins_right: "Оң",
		print_printer_server: "Сервер",
		print_printer_local: "Жергілікті",
		print_property_class: "Сыныбы:",
		print_property_routing: "Бағыттау:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Түйін:",
		print_property_writer: "Жазушы:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Dest:",
		print_property_forms: "Пішімдер:",
		print_property_faxnotes: "Ескерімдер:",
		print_property_faxcompany: "Компания:",
		print_property_faxnumber: "Факс нөмірі:",
		print_property_faxname: "Аты:",
		print_property_faxsendertelnumber: "Телефон нөмірі:",
		print_property_faxcoverpage: "Мұқаба бет:",
		print_property_faxsubject: "Тақырыбы:",
		print_saveoptions: "Басып шығару опцияларын сақтау",
		print_property_bannerpage: "Жариялама бетін қолдану",
		print_print_with_info_fields: "Ақпарат өрістерімен бірге басып шығару",
		print_field_from: "Кімнен",
		print_field_to: "Келесіге",
		print_invalid_value_class: "Жарамды таңбалар мыналар A-Z немесе 0-9",
		print_invalid_value_pagedef: "Жарамды таңбалар әліпбилік немесе сандық таңбалар немесе белгілер @, #, немесе $",
		print_invalid_value_writer: "Жарамды таңбалар әліпбилік немесе сандық таңбалар немесе белгілер @, #, немесе $",
		print_invalid_value_formdef: "Жарамды таңбалар әліпбилік немесе сандық таңбалар немесе белгілер @, #, немесе $",
		print_invalid_value_forms: "Жарамды таңбалар әліпбилік немесе сандық таңбалар немесе белгілер @, #, немесе $",
		print_invalid_value_margin: "Жарамды сандар ${0} және ${1} арасындағы сандар",
		print_status_message: "${0} құжаттар ${1} басып шығарушыға жіберілді.",

		print_applet_init_error: "Баспаға шығару бағдарламашығы іске қосылмайды.",
		print_applet_init_error_explanation: "Файлды жүктеп алу және файлды қадағалау мүмкіндігімен қадағалау мүмкін емес: <br/><br/><ul><li>Java Runtime Environment (JRE) жұмыс станциясында орнатылмайды.</li><li>Java қосылатын модулі веб-шоғышқа қосылмайды.</li><li>Жұмыс бекетіндегі JRE нұсқасы IBM Content Navigator нұсқасымен сыйысымды емес.</li><li>Баспаға шығару бағдарламашығын күтіп, шолғыштың уақыты аяқталды.</li></ul>",
		print_applet_init_error_userResponse: "Мәселені JRE бірге шешу үшін, келесі қадамдарды орындауыңыз керек:<br/><br/><ol><li>Жұмыс бекетіңізде JRE орнатылғанына көз жеткізіңіз.</li><li>Java қосылатын модулі веб-шолғышыңызда іске қосылғанына көз жеткізіңіз.</li><li>Жұмыс станцияңыздың JRE нұсқасы IBM Content Navigator шарлағышымен сыйысымды екеніне көз жеткізіңіз және әрекетті қайталаңыз. Қолдауға ие болған нұсқалардың тізімі <i>IBM Content Navigator бағдарламасына арналған аппараттық құралдар мен бағдарламалық жасақтама алғышарттары</i> құжатында IBM Software Support торабында қамтылған.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Мұқаба бет",
		daeja_print_selected_documents_title: "Таңдалған құжаттар",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Барлық іздеу шартын салыстыру",
		match_any_criteria: "Кез келген іздеу шартын салыстыру",
		include_subfolders_summary: "${0} (Ішкі қалталарды қосқанда)",
		browse_button: "Шарлау&hellip;",
		search_for: "Іздеу:",
		object_type_documents: "Құжаттар",
		object_type_folders: "Қалталар",
		object_type_documents_folders: "Құжаттар мен қалталар",
		object_type_web_links: "Веб байланыстар",
		object_type_documents_folders_web_links: "Құжаттар, қалталар және веб байланыстар",

		/* SelectSearchFolderDialog */
		search_in: "Іздеу:",
		include_subfolders: "Ішкі қалталарды қамтиды",

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
		locked_item_icon_title: "Келесімен құрсауланған ${0}",
		checked_out_icon_title: "${0} элементімен тексерілген",
		major_minor_version_icon_title: "Қосымша нұсқалары бар негізгі нұсқа",
		suspended_icon_title: "Жұмыс ағымы ажыратылған",
		on_hold_icon_title: "Ұсталып Тяұрған",
		has_notes_icon_title: "Түйіндерді иеленеді",
		record_icon_title: "Есеп ретінде жарияланған",
		compound_document_icon_title: "Біріккен құжат",
		validateTemplate_icon_title: "Топ бос орны үлгілері тексерісті қажет етеді",
		offlineTemplate_icon_title: "Топ аймағы үлгісі желіден тыс",
		offlineTeamspace_icon_title: "Топ бос орны желіден тыс",
		pending_delete_icon_title: "Топ аймағы жоюды күтуде",
		delete_error_icon_title: "Топ аймағын жою мүмкін болмады",
		defaultTemplate_icon_title: "Әдепкі топ бос орнының үлгісі",
		teamspace_icon_title: "Топ бос орны",
		teamspace_template_icon_title: "Топ аймағы үлгісі",
		has_bookmark_icon_title: "Бетбелгіні қамтиды",
		read_only_icon_title: "Тек оқуға арналған",
		no_results_were_found: "Ешқандай нәтиже табылмады.",
		folder_is_empty: "Қалта бос.",
		no_checked_out_items: "Тексерілген элементтер жоқ.",
		inbasket_is_empty: "Себет іші бос",
		worklist_is_empty: "Жұмыс тізімі бос",
		tracker_milestone_completed: "Аяқталды",
		stepprocessor_attachments_title: "Мазмұндар",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Элементтерді құрсаулау",
		unlock_items: "Элементтерді құрсаудан шығару",
		checkin_item: "Элементте тексеру",

		/* Help */
		learn_more: "Көбірек біліңіз",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Топ бос орнын ашу",
		repository_tab_createWorkspace: "Жаңа топ бос орны",
		repository_tab_createWorkspaceTemplate: "Жаңа топ бос орнының үлгісі",
		repository_tab_DefaultTemplate: "Әдепкі",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Осы тапсырма құжаттарды көшіреді.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Таңдалған топ бос орны үлгісі үшін өңдеу рұқсатыңыз жоқ.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "${0} топ аймағын жоятыныңызға сенімдісіз бе? <br><br>Репозиторийдегі басқа қалталарда тіркелген құжаттар ғана репозиторийде қалады. Топ аймағында тіркелген кез келген құжаттар ғана жойылады.",
		teamspaceDecommissionLabel: "Жою:",
		teamspaceDecommissionDescription: "Топ аймағын сервердегі осы топ аймағынан жою: топ аймағы артефакттарын сақтау жолын көрсетіңіз.",
		teamspaceDecommissionOptions: "Топ аймағы параметрлерін жою",
		teamspaceDecommissionDeleteAll: "Барлық топ бос орны артефактілерін жою",
		teamspaceDecommissionReFileAll: "Барлық топ бос орны артефактілерін қайта толтыру",
		teamspaceDecommissionReFileDestination: "Келесіге жылжыту:",
		teamspaceDecommissionReFileIn: "Келесіде қайта файл құру",
		teamspaceDecommissionTaskName: "Топ аймағын жою тапсырмасы",
		teamspaceDecommissionTaskDescription: "Бұл тапсырма репозиторийден топ аймағын жояды.",
		teamspaceDecommissionDeletionStarted: "Топ аймағы жою үшін жоспарланғн",
		teamspaceDecommissionDeletionConnectionFailed: "Топ аймағын жою тапсырмасын орындау мүмкін болмады өйткені оны репозиторийге қосу мүмкін емес. Репозиторий әкімшісінің тіркелгі деректерінің дұрыс екеніне көз жеткізіңіз.",

		teamspace_edit_properties_notsupported: "Топ аймағының сипаттарын, тек қана Топ аймағының көрінісінен өңдей аласыз.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Топ аймағы енжар және оны топ аймағының ие ғана аша алады",

		/* Teamspace Builder widget */
		workspace_validation_document: "Құжат:",
		workspace_validation_folder: "Қалта:",
		workspace_validation_ets: "Келесі енгізілім үлгілері осы репозиторийде қол жетімсіз және таңдалған енгізілім үлгілерінен жойылған:",
		workspace_validation_classes: "Келесі класстар осы репозиторийде қол жетімсіз және таңдалған класстардан жойылған:",
		workspace_validation_searches: "Келесі іздеулер осы репозиторийде қол жетімсіз және таңдалған іздеулерден жойылған:",
		workspace_validation_docs_folders: "Келесі құжаттар мен қалталар осы репозиторийде қол жетімсіз және таңдалған құжаттар мен қалталардан жойылған:",
		workspace_change_template_confirmation_question: "Егер әр түрлі үлгіні таңдасаңыз, барлық өзгертулеріңіз жоғалады. Жалғастырғыңыз келеді ме?\n",
		workspace_delete_item_confirmation_question: "${0} элементін жойғыңыз келе ме?\n",
		workspace_delete_role_confirmation_question: "${0} рөлін жойғыңыз келеді ме?\n",
		workspace_delete_confirmation_question: "Топ бос орнын жойсаңыз, тек топ бос орны контейнері ғана жойылады. Топ бос орнындағы қалталар мен құжаттар репозиторийде қалады және сіз оларды іздеу арқылы таба аласыз. Топ аймақтарының мазмұндарын жою үшін бірінші топ аймақтарындағы элементтерді жойып және содан кейін топ аймағын жойыңыз.<br><br>${0} топ бос орнын жойғыңыз келе ме?",
		workspacebuilder_instance_template_name_header: "Топ аймағы үлгісінің аты",
		workspacebuilder_instance_template_description_header: "Сипаттама",

		workspacebuilder_template_tooltip_name: "Үлгі аты келесі таңбалардың ешқайсысын иелене алмайды: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Топ бос орны аты келесі таңбалардың ешқайсысын иелене алмайды: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Пайдаланушыларды үлгілер тізімінен дұрыс таңдау жасау үшін іске қосатын сипаттаманы қамтамасыз етіңіз. Мысалы, пайдаланушылар немесе үлгінің қолданысы туралы ақпаратты қамти аласыз.",
		workspacebuilder_instance_tooltip_description: "Осы топ бос орны мен басқа топ бос орындары арасында анықтауды іске қосатын сипаттаманы қамтамасыз етіңіз.",

		workspacebuilder_template_edit_properties_pane: "Топ аймағы үлгісін өңдеңіз",
		workspacebuilder_instance_properties_pane: "топ бос орнын анықтау",
		workspacebuilder_template_properties_pane: "Топ аймағы үлгісін анықтау",

		workspacebuilder_instance_security_pane: "Топ бос орны қауіпсіздігін орнату",
		workspacebuilder_template_security_pane: "Үлгі қауіпсіздігін орнату",

		workspacebuilder_layout_pane: "Орналасымды таңдау",
		workspacebuilder_search_templates_pane: "Іздеулерді таңдау",
		workspacebuilder_document_folders_pane: "Қалталар мен құжаттарды қамту",
		workspacebuilder_doctypes_entryTemplates_pane: "Класстар немесе енгізу үлгілерін таңдау",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Класстарды таңдау",
		workspacebuilder_security: "Топ бос орнының қауіпсіздігі",

		workspacebuilder_roles_pane: "Рөлдерді таңдау",
		workspacebuilder_security: "Қауіпсіздік",

		workspacebuilder_properties_templates: "Қол жетімді үлгілер:",
		workspacebuilder_available_templates: "Қол жетімді іздеулер:",
		workspacebuilder_selected_templates: "Таңдалған іздеулер:",
		workspacebuilder_templates_name: "Іздеу аты",

		workspacebuilder_available_entryTemplates: "Қол жетімді енгізу үлгілері:",
		workspacebuilder_selected_entryTemplates: "Таңдалған енгізу үлгілері:",

		workspacebuilder_item_classes: "Қол жетімді класстар:",
		workspacebuilder_item_classes_selected: "Таңдалған класс:",
		workspacebuilder_properties_select_template: "Осы топ бос орны үшін қолдануға арналған үлгіні таңдау.",
		workspacebuilder_template_properties: "Топ аймағы үлгісін анықтау",
		workspacebuilder_instance_properties: "топ бос орнын анықтау",
		workspacebuilder_template_introText: "Шарлаудағы таңдауларды қолдану арқылы осы үлгіден құрылған әр бір топ бос орнында қамтылған жалпы құрамдастарды көрсетіңіз. Аяқтаған кезде <b>Аяқтау</b> пернесін үлгіні жаңа топ бос орындарын ұүру үшін қолдана алатын басқа пайдаланушыларға қол жетімді ету үшін басыңыз.",
		workspacebuilder_instance_introText: "Топтар топ бос орынларын арнайы құжаттар жиынтығымен бөлісіп және жұмыс істеу үшін қолданады. Осы топ бос орынлары үшін пайдаланушыларды осы топ бос орнын басқа топ бос орындарынан анықтау үшін іске қосуда мағыналы ат пен сипаттамманы қамтамасыз етіңіз. Қосымша іздеулер, класстар немесе енгізу үлгілерін, құжаттар және қалталарды қосу арқылы топ бос орнын теңшей аласыз.",

		workspacebuilder_template_search_template_introText: "Осы үлгіден құрылған әр бір топ бос орнына қосуды қалаған әдепкі іздеулерді таңдаңыз. Егер ешқандай іздеулер таңдалмаса, топ бос орны пайдаланушысы қатынасты иеленетін барлық іздеулерді көреді. Арнайы рұқсаттармен бірге пайдаланушылар топ бос орнындағы іздеулерді бөлісіп және қоса алады.",
		workspacebuilder_instance_search_template_introText: "Топ бос орны пайдаланушыларын тапсырамаларды нәтижелірек аяқтау үшін іске қосатын іздеулерді қамтиды. Егер ешқандай іздеулер қосылмаса, топ бос орны пайдаланушылары рұқсаттарды иеленетін барлық іздеулерді көреді. Пайдаланушылар сонымен қатар іздеулерді топ бос орнында сәйкес рұқсаттарымен бірге қосып және бөлісе алады.",

		workspacebuilder_template_roles_introText: "Топ бос орны пайдаланушыларына рөлдер тағайындалған. Рөлдер орындауға рұқсат берілген пайдаланушыларға арналғантапсырмаларды көрсетеді. Элементтерді әр бір рөл жанына рұқсат еттілген тапсырмаларды көру үшін басыңыз. Топ аймақтарына сәйкес болатын рөлдерді таңдаңыз.",
		workspacebuilder_template_roles_modify_introText: "Осы топ бос орнында әр бір рөлмен байланыстырылған рұқсаттарды өзгерте аласыз. Топ бос орны мүшелерін рұқсаттары өзгерген кезде ескертуіңіз керек.",

		workspacebuilder_template_roles_header_name: "Рөл аты",

		workspacebuilder_template_folders_introText: "Осы үлгіден құрылған әр бір топ бос орнына қосу үшін әдепкі құжаттар мен қалталарды таңдаңыз. Құжаттарды не байланыстар, не көшірмелер ретінде қоса аласыз. Байланыстарды құжаттарға меңзеу үшін қолданыңыз, бірнеше көшірмелерді қалайсыз ба, мысалы саясаттар мен үрдістер. Пайдаланушылар өңдейтін құжаттардың көшірмелерін құрыңыз, мысалы үлгілер мен пішімдер.",
		workspacebuilder_instance_folders_introText: "Топ бос орнында қамту үшін әдепкі құжаттар мен қалталарды таңдаңыз. Құжаттарды не байланыстар, не көшірмелер ретінде қоса аласыз. Байланыстарды құжаттарға меңзеу үшін қолданыңыз, бірнеше көшірмелерді қалайсыз ба, мысалы саясаттар мен үрдістер. Пайдаланушылар өңдейтін құжаттардың көшірмелерін құрыңыз, мысалы үлгілер мен пішімдер.",

		workspacebuilder_template_roles_introText: "Осы үлгіден құрылған әр бір топ бос орнына қамтылған рөлдерді көрсетіңіз. Сіз сонымен қатар басқа топ бос орны үлгілерні құру кезінде қолдана алатын жаңа рөлдерді құра аласыз.",
		workspacebuilder_instance_users_introText: "Топ бос орнында әр бір пайдаланушы бір немесе бірнеше рөлдерді пайдаланушы аяқтай алатын тапсырмаларды көрсету үшін тағайындайды. Пайдаланушыларды топ бос орнына қосып және рөлдерді пайдаланушыларға тағайындаңыз.",

		workspacebuilder_instance_navigation_pane_title: "Топ бос орнын құрушы",
		workspacebuilder_template_navigation_pane_title: "Топ аймағы үлгісін құрушы",

		workspacebuilder_roles_roles_nopermissions: "{0} рөлі үшін рұқсаттар таңдалған жоқ.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Таңдалған рөлдер:",
		workspacebuilder_roles_available_roles: "Қол жетімді рөлдер:",
		workspacebuilder_roles_privilege_header: "Рұқсат",
		workspacebuilder_roles_select_role: "Рөлді Таңдау",
		workspacebuilder_roles_select_permission: "Рұқсатты Таңдау",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "{0} деп аталатын рөл бар. Рөл үшін бірегей атты көрсетуіңіз керек. ",
		workspacebuilder_roles_edit_dialog_role_name: "Рөл аты:",
		workspacebuilder_roles_edit_dialog_role_description: "Рөл сипаттамасы:",
		workspacebuilder_roles_edit_dialog_title_new: "Жаңа рөл",
		workspacebuilder_roles_edit_dialog_title_edit: "Рөлді өңдеу",

		workspacebuilder_roles_privileges_header: "{0} рөліне арналған рұқсаттар:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "құжат рұқсаттары:",
		workspacebuilder_roles_priv_group_folder: "Қалта рұқсаттары:",
		workspacebuilder_roles_priv_group_teamspace: "Топ бос орны рұқсаттары:",
		workspacebuilder_roles_priv_group_item: "Құжат және Қалта рұқсаттары:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Рұқсаттарды басқару",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар мен қалталар үшін қатынасты басқара алады. Бұл рұқсат басқа пайдаланушыларға жоюға, сипаттарды өзгертуге, ішкі қалталарды құруға және т.с.с. қамтиды.",

		workspacebuilder_roles_priv_deleteItems: "Жою",
		workspacebuilder_roles_plbl_deleteItems: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар мен қалталарды жоя алады.",

		workspacebuilder_roles_priv_createItems: "Құру",
		workspacebuilder_roles_plbl_createItems: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар мен қалталарды құра алады.",

		workspacebuilder_roles_priv_viewItemProperties: "Сипаттарды көру",
		workspacebuilder_roles_plbl_viewItemProperties: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар мен қалталардың сипаттарын көре алады.",

		workspacebuilder_roles_priv_modifyItemProperties: "Сипаттамаларды өңдеу",
		workspacebuilder_roles_plbl_modifyItemProperties: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар мен қалталардың сипаттарын өңдей алады.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Қалта рұқсаттарын басқару",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы қалталар үшін қатынасты басқара алады. Бұл рұқсат басқа пайдаланушыларға қалталарды жоюға, қалта сипаттарын өзгертуге, ішкі қалталарды құруға және т.с.с. қамтиды.",

		workspacebuilder_roles_priv_deleteFolders: "Қалталарды жою",
		workspacebuilder_roles_plbl_deleteFolders: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы қалталарды жоя алады.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Қалта сипаттарын өңдеу",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы қалталардың сипаттарын өңдей алады",

		workspacebuilder_roles_priv_createSubfolders: "Ішкі қалталарды құру",
		workspacebuilder_roles_plbl_createSubfolders: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы қалталарды құра алады.",

		workspacebuilder_roles_priv_fileInFolders: "Қалталарға қосу",
		workspacebuilder_roles_plbl_fileInFolders: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы қалталардан байланысты құжаттарға қоса алады.",

		workspacebuilder_roles_priv_viewFolderProperties: "Қалта сипаттарын көру",
		workspacebuilder_roles_plbl_viewFolderProperties: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы қалталардың сипаттарын көре алады.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Құжат рұқсаттарын басқару",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар үшін қатынасты басқара алады. Бұл рұқсат басқа пайдаланушыларға құжаттарды жоюға, құжат сипаттарын өзгертуге, ішкі қалталарды құруға және т.с.с. қамтиды.",

		workspacebuilder_roles_priv_deleteDocuments: "Құжаттарды жою",
		workspacebuilder_roles_plbl_deleteDocuments: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттарды жоя алады.",

		workspacebuilder_roles_priv_promoteVersions: "Нұсқаларды орындау",
		workspacebuilder_roles_plbl_promoteVersions: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар үшін жаңа нұсқа санын тағайындай алады.",

		workspacebuilder_roles_priv_modifyContent: "Құжаттарды өңдеу",
		workspacebuilder_roles_plbl_modifyContent: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттар мазмұны өңдей алады.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Құжат сипаттарын өңдеу",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттардың сипаттарын өңдей алады.",

		workspacebuilder_roles_priv_viewContent: "Құжаттарды көру",
		workspacebuilder_roles_plbl_viewContent: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттарды көре алады",

		workspacebuilder_roles_priv_viewDocumentProperties: "Құжат сипаттарын көру",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы құжаттардың сипаттарын көре алады.",

		workspacebuilder_roles_priv_addNewSearches: "Іздеулерді қосу",
		workspacebuilder_roles_plbl_addNewSearches: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы іздеулерді қоса алады. Әдепкі бойынша, іздеу басқа пайдаланушыларға қол жетімсіз.",

		workspacebuilder_roles_priv_createNewSearches: "Іздеулерді құру",
		workspacebuilder_roles_plbl_createNewSearches: "Осы рұқсаты бар пайдаланушылар жаңа іздеулерді құра алады, бірақ іздеулерді сақтай алмайды. Егер пайдаланушылар осы рұқсатты иеленбесе, олар топ бос орнындағы репозиторийдегі құжаттарды қоса алмайды.",

		workspacebuilder_roles_priv_shareSearches: "Іздеулерді бөлісу",
		workspacebuilder_roles_plbl_shareSearches: "Осы рұқсаттары бар пайдаланушылар топ бос орнының басқа пайдаланушыларымен құрған іздеулерді бөлісе алады.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Класстарды немесе енгізу үлгілерін басқару",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы класстар мен енгізу үлгілерін қосып немесе жоя алады.",

		workspacebuilder_roles_priv_addRemoveClasses: "Класстарды басқару",
		workspacebuilder_roles_plbl_addRemoveClasses: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы класстарын қосып немесе жоя алады.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Топ бос орны пайдаланушыларын басқару",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Осы рұқсаты бар пайдаланушылар топ бос орнындағы пайдаланушылар мен топтарды қосып немесе жоя алады. Сонымен қатар, олар пайдаланушыларға қандай рөлдерді тағайындау керек екенін басқарады.",

		workspacebuilder_roles_priv_modifyRoles: "Рөлдерді өзгерту",
		workspacebuilder_roles_plbl_modifyRoles: "Осы рұқсаттары бар иелер рөл рұқсаттарын топ бос орындары үшін өңдей алады. Бұл рұқса тек иелерге ғана қол жетімді.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Пайдаланушыларды таңдау",
		workspacebuilder_users_add_users_and_groups_button: "Пайдаланушылар мен топтарды қосу...",
		workspacebuilder_users_users_or_group_header: "Пайдаланушы және топ",
		workspacebuilder_users_roles_header: "Рөлдер",

		workspacebuilder_users_role_header: "Рөл",
		workspacebuilder_users_role_no_permissions: "Бұл рөлдің рұқсаты жоқ",
		workspacebuilder_users_available_roles_label: "Қол жетімді рөлдер:",
		workspacebuilder_users_selected_users_and_groups_label: "Таңдалған пайдаланушылар мен топтар:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Топ бос орны сақталмайды. Осы топ бос орны үшін кем дегенде бір иені көрсетуіңіз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Топ бос орны сақталмайды. Барлық пайдаланушыларға рөл тағайындалуы тиіс.",
		// end of select users

		workspacebuilder_search_templates: "Іздеулерді таңдау",
		workspacebuilder_search_add: "Іздеуді қосу",
		workspacebuilder_properties_workspaceName: "Топ бос орны аты:",
		workspacebuilder_properties_templateName: "Үлгі аты:",
		workspacebuilder_properties_workspaceDescription: "Топ бос орны сипаттамасы:",
		workspacebuilder_properties_templateDescription: "Үлгі сипаттамасы:",
		workspacebuilder_properties_workspaceTemplate: "Таңдалған үлгі:",
		workspacebuilder_properties_security: "Үлгіні келесімен бөлісу:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Топ аймағын жылжыту:",
		moveTeamspaceDocuments_security: "Құжатты келесімен бөлісу:",
		moveTeamspaceDocuments_security_change: "Таңдалған элементтер үшін теңшелетін қауіпсіздікті көрсту",
		moveTeamspaceDocuments_item_type_level: "Таңдалған элементтердің қауіпсіздігінің үстіне жазуды таңдау мүмкін емес, себебі таңдалған элементтің сыныбы тек қана сынып деңгейіндегі қауіпсіздікті пайдалану үшін теңшеледі",
		moveTeamspaceDocuments_security_inherit: "Тағайындау қалтасынан қауіпсіздікті иелену",
		moveTeamspaceDocuments_file_info_text: "Элементтерді бір топ аймағынан екінші топ аймағына немесе қалтаға жылжыту мүмкін емес.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Элементтерді таңдалған қалтаға көшіру үшін сәйкес рұқсатыңыз жоқ.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Элементтері тор бос орынларынан жоюға жеткілікті рұқсатыңыз жоқ.",
		moveTeamspaceDocuments_move_mixed_items: "Таңдалған элементтердің қауіпсіздігінің үстіне жазу мүмкін емес. Кейбір элементтер тоа аймағы бойынша басқарылмайды. Топ аймағы бойынша басқарылатын элементтердің қауіпсіздігін ғана алдын ала анықтай аласыз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Топ бос орны үшін атты көрсетуіңіз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Топ бос орнының үлгісі үшін атты көрсетуіңіз керек.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Топ бос орны аты келесі таңбалардың ешқайсысын иелене алмайды: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Үлгі аты келесі таңбалардың ешқайсысын иелене алмайды: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Құжатқа арналған байланыс",
		workspacebuilder_folders_makeDocCopy: "Құжатты көшіру",
		workspacebuilder_folders_newfolder: "Жаңа Қалта",
		workspacebuilder_folders_local_drive: "Жергілікті каталогтан",
		workspacebuilder_folders_from_repo: "Репозиторийден",
		workspacebuilder_folders_add_doc: "Құжат қосу",
		workspacebuilder_folders_grid_name: "Аты",
		workspacebuilder_folders_props: "Сипаттар",
		workspacebuilder_folders_remove: "Жою",
		workspacebuilder_folders_delete: "Жою",
		workspacebuilder_folders_adddoc_local: "Құжатты жергілікті құралдан қосу",
		workspacebuilder_folders_adddoc_repo: "Құжатты репозиторийден қосу",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Көрсетілген қалта аты бұрыннан бар. Әр түрлі қалта атын көрсетіңіз.",

		workspacebuilder_classes_title: "Класстар немесе енгізу үлгілерін таңдау",
		workspacebuilder_classes_title_cm: "Класстарды таңдау",
		workspacebuilder_classes_template_introText: "Осы үлгіден құрылған топ бос орындарының класстар немесе енгізу үлгілерін репозиторийдегі құжатқа қосу үшін қолданады. Егер ешқандай класстар таңдалмаса, топ бос орындары қатынасты иеленетін барлық класстарды көреді.  Пайдаланушы класстар тізімін немесе енгізу үлгілерін егер олар сәйкес рұқсатты иеленсе өңдей алады.",
		workspacebuilder_classes_template_introText_cm: "Құжаттарды репозиторийге қосу үшін қолданатын пайдаланушылар классын таңдаңыз. Егер ешқандай класстар таңдалмаса, топ бос орны қатынасты иеленетін барлық класстарды көреді. Пайдаланушылар класстар тізімін егер олар сәйкес рұқсаттарды иеленсе өңдей алады.",
		workspacebuilder_classes_instance_introText: "Құжаттарды репозиторийге қосу үшін қолданатын пайдаланушылар классын немесе енгізу үлгілерін таңдаңыз. Егер ешқандай класстар таңдалмаса, топ бос орны рұқсатты иеленетін барлық класстарды көреді. Пайдаланушылар класстар тізімін немесе енгізу үлгілерін егер олар сәйкес рұқсаттарды иеленсе өңдей алады.",
		workspacebuilder_classes_instance_introText_cm: "Құжаттарды репозиторийге қосу үшін қолданатын пайдаланушылар классын таңдаңыз. Егер ешқандай класстар таңдалмаса, топ бос орны рұқсатты иеленетін барлық класстарды көреді. Пайдаланушылар класстар тізімін егер олар сәйкес рұқсаттарды иеленсе өңдей алады.",
		workspacebuilder_classes_selection: "Класстарды таңдау:",
		workspacebuilder_classes_list: "Қол жетімді Класстар:",
		workspacebuilder_classes_columns_default: "Әдепкі",
		workspacebuilder_classes_columns_className: "Сынып атауы",
		workspacebuilder_classes_type_classes: "Құжаттарға қосу үшін класстарды қолланыңыз",
		workspacebuilder_classes_type_classes_tooltip: "Класстар байланыстырылған сипаттарға қамтылады, сол арқылы құжаттар кейін қолдану үшін орналастырылуы керек.",
		workspacebuilder_classes_type_entryTemplates: "Құжаттарды қосу үшін енгізу үлгілерін қолдану",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Енгізу үлгілері әр бір құжат үшін қамтамасыз етілген ақпарат тұраұты және алдын ала анықталған мәндерді қолданады.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Үлгі атын енгізу",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Сипаттама",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Топ бос орнына ке дегенде бір енгізу үлгісін қосуыңыз керек.",

		workspacebuilder_classes_new: "Жаңа класс",
		workspacebuilder_classes_add: "Класс қосу",
		workspacebuilder_entryTemplate_add: "Енгізу үлгісін қосу",
		workspacebuilder_add_list: "Қосу",
		workspacebuilder_makeDefault_list: "Әдепкі ету",
		workspacebuilder_removeDefault_list: "Әдепкіні жою",

		workspacebuilder_roles_title: "Рөлдерді таңдау",
		workspacebuilder_roles_title_modify: "Рөлдерді Өзгерту",

		workspacebuilder_selection_moveup: "Жоғары жылжыту",
		workspacebuilder_selection_movedown: "Төмен жылжыту",
		workspacebuilder_selection_remove: "Жою",
		workspacebuilder_selection_add: "Қосу",
		workspacebuilder_selection_create_new_search: "Жаңа іздеу...",
		workspacebuilder_selection_create_new_role: "Жаңа рөл...",
		workspacebuilder_selection_make_role_available: "Қол жетімді ету",
		workspacebuilder_selection_make_role_available_tooltip: "Рөл таңдауын басқа үлгілермен бөлісу. Рөлді бөлісу үшін кем дегенде бір рұқсатты тағайындауығыз керек.",

		workspacebuilder_navigation_next: "Келесі",
		workspacebuilder_navigation_finish: "Аяқтау",
		workspacebuilder_navigation_validate: "Тексеру",
		workspacebuilder_navigation_previous: "Алдыңғы",
		workspacebuilder_navigation_cancel: "Болдырмау",
		workspacebuilder_navigation_customize: "Теңшеу",

		workspacebuilder_search_dialog_title: "Іздеу",
		workspacebuilder_dialog_close: "Жабу",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Үлгі қол жетімділігі:",
		workspace_properties_templateState_tooltip: "Пайдаланушыларды осы үлгіні қолданатын топ бос орындарын құрудан алдын алу үшін үлгіні қол жетімсіз етіңіз.",
		workspace_properties_dialog_title: "Үлгі сипаттары",
		workspace_properties_online_radio_option_label: "Қол жетімді ету",
		workspace_properties_offline_radio_option_label: "Қол жетімді емес ету",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Өзгертулеріңізді сақтамай бас тартқыңыз келеді ме?",
		workspacebuilder_cancel_confirmation_button: "Иә",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Кез келген жарамсыз элементтер үлгіден жойылады және үлгі пайдаланушыларға қол жетімді болуы үшін жасалған.  Осы топ бос орны үлгісін тексергіңіз келеді ме?",
		workspacebuilder_validate_confirmation_button: "Иә",
		workspacebuilder_validate_confirmation_title: "Тексеру",

		/* Entry templates builder */
		entry_templates: "Үлгі Басқару жазбасы",
		no_entry_templates_were_found: "Мұнда енгізу жазба жоқ",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Сүзгі",

		/* Roleselector widget */
		role_selector_name: "Рөлдер:",

		/* User Group picker widget */
		directory_label: "Каталог:",
		scope_label: "Іздеу:",
		name_starts_with_label: "Ат келесімен басталады",
		name_contains_label: "Аттың құрамы",
		display_name_contains_label: "ат мазмұндарын көрсету",
		starts_with_label: "Келесімен бірге бастау:",
		available_label: "Қол жетімді:",
		available_heading: "Қол жетімді",
		selected_label: "Таңдалған :",
		selected_heading: "Таңдалған",
		available_repositories_label: "Қол жетімді репозиторийлер",
		selected_repositories_label: "Таңдалған репозиториийлер",
		default_repository: "Әдепкі репозиторий:",
		default_repository_placeholder: "Репозиторийді таңдау",
		default_role_placeholder: "Рөлді таңдаңыз",
		menu_label_placeholder: "Белгіні таңдаңыз немесе енгізіңіз",
		default_repository_hover: "Пайдаланушылар осы жұмыс үстелінен веб тұтыншысан кірген кезде әдепкі бойынша таңдалатын репозиториді енгізіңіз<br><br><b>Маңызды:</b> Репозиторийлерді таңдалған репозиторий тізіміне әдепкі репозиторийді көрсету алдында көресете аласыз.",
		default_repository_workflow_hover: "<b>ReЕсіңізде болсын:</b> Осы жұмыс үстелі үшін теңшелген рпеозитрийлер үшін бағдарламаны теңшей аласыз.",
		remove_label: "Жою",
		users_label: "Пайдаланушылар",
		groups_label: "Топтар",
		user_or_group_name_label: "Пайдаланушы немесе топ аты:",
		user_or_group_name_hover: "Репозиторийде жарамды пайдаланушы немесе топ атын енгізіңіз.  Ат тексерілмеген.",
		user: "Пайдаланушы",
		group: "Топ",
		name: "Аты:",
		displayName: "Атты көрсету",
		display_name: "Дисплей аты:",
		shortName: "Қысқа ат:",
		distinguishedName: "Анықталған ат:",
		search_tooltip: "Іздеу",
		add_tooltip: "Қосу",
		add_selected_tooltip: "Таңдалған тізімге қосу",
		remove_tooltip: "Жою",
		remove_selected_tooltip: "Таңдалған тізімнен жою",
		add_to_selected_tooltip: "Қосу",
		remove_from_selected_tooltip: "Жою",
		move_up_selected_tooltip: "Жоғары жылжыту",
		move_down_selected_tooltip: "Төмен жылжыту",
		advanced_search_options_tooltip: "Жетілдірілген параметрлер",
		move_right_selected_tooltip: "Ішкі мәзірге көшіру",
		move_left_selected_tooltip: "Ішкі мәзірден тыс көшіру",
		add_separator: "Ажыратқышты қосу",
		menu_item_label: "Мәзір элементінің белгісі:",
		add_menu_label: "Ішкі мәзір қосу",
		menu_label: "Ішкі мәзір белгісі:",
		menu_label_info: "<b>Маңызды:</b> Осы мәзірді сақтамас бұрын ішкі мәзіргке кем дегенде бір мәзір элементін қосуыңыз керек.",
		menu_dropdown_label: "Ашылмалы түймешігік белгісі:",
		menu_dropdown_label_info: "<b>Маңызды:</b> Осы құралдар тақтасына сақтай алмас бұрын, кемінде бір мәзір элементін осы ашылмалы түймешікке қосу керек.",
		no_item_found: "Ешқандай нәтиже табылмады.",
		me: "Me",
		anyone: "Кез келгені",
		specific_users: "Арнайы пайдаланушылар",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Іздеу {0} нәтижелерінен көбін қайтарады. Іздеуді азайту үшіншартыңызды өзгертіңіз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Бұрын таңдалған элементтерді қамтитын іздеу нәтижелері. Бұл элементтер іздеу нәтижелерінде көрсетілген.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "{0} нәтижелерінен көбі қайтарылды. Нәтижелерді азайту үшін сүзгіні қолданыңыз",

		user_already_selected: "Көрсетілген пайдаланушы бұрыннан таңдалған.  Әр түрлі пайдаланушыны көрсету.",
		group_already_selected: "Көрсетілген топ бұрыннан таңдалған.  Әр түрлі топты көрсетіңіз.",
		user_cannot_select_self: "Өзіңізді қоса алмайсыз. Әр түрлі пайдаланушыны көрсету.",

		/* Select User Group dialog */
		select_user_group_add_label: "Қосу",
		select_user_group_cancel_label: "Болдырмау",
		add_users_groups_label: "Пайдаланушылар мен топтарды қосу",
		add_user_group_label: "Пайдаланушы мен топты қосу",
		add_users_label: "Пайдаланушылар қосу",
		add_user_label: "Пайдаланушыны Қосу",
		add_label: "Қосу:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Келесі құжаттар сақталмаған аннотация өзгерістеріне ие:",
		viewer_confirm_to_proceed: "Жалғастыру және өзгертулерді жоғалтуды қалайсыз ба?",
		viewer_warn_has_changes: "Сіздің сақталмаған өзгертулеріңіз жойылады.",
		viewer_warn_is_printing: "Ағымдағы басып шығару аяқталмауы тиіс.",
		viewer_warn_confirm_exit: "Шыққыңыз келе ме?",
		viewer_prompt_save_changes: "Келесі құжат жоғалатын сақталмаған аннотация өзгерістерін қамтиды:<br>${0}<br><br>Өзгертулер сақталсын ба?",
		viewer_prompt_mergesplit_changes: "Келесі құжаттар сақталмаған өзгерістерге ие:<br>${0}<br><br>Жалғастыру және өзгертулерді жоғалтуды қалайсыз ба?",
		viewer_prompt_mergesplit_tab_changes: "Келесі құжат сақталмаған өзгерістерге ие:<br>${0}<br><br>Жалғастыру және өзгертулерді жоғалтуды қалайсыз ба?",
		viewer_new_item_name: "Жаңа құжат",
		viewer_top_frame: "Жоғарғы жақтау:",
		viewer_bottom_frame: "Төменгі жақтау:",
		viewer_left_frame: "Сол жақ жақтау:",
		viewer_right_frame: "Оң жақ жақтау:",
		viewer_viewer_frame: "Қарау құралының жақтауы:",
		viewer_properties_frame: "Сипаттар жақтауы:",
		viewer_comment_frame: "Аңғартпа жақтауы:",
		viewer_mergesplit_on: "Көрініс",
		viewer_mergesplit_off: "Біріктіру және бөлу",
		viewer_mergesplit_context_menu_move: "Жылжыту",
		viewer_mergesplit_context_menu_rename: "Қайта атау",
		viewer_mergesplit_context_menu_delete: "Жою",
		//move to new window
		viewer_move_to_new_window:"Жаңа терезеге жылжу",
		viewer_continue:"Өзгертулерді болдырмау",
		viewer_return_to_original_window:"Бастапқы терезеге оралу",
		viewer_switch_window:"Терезені ауыстыру",
		viewer_prompt_lost_changes:"${0} құжаты басқа терезеде ашық. Бұл құжатта сақталмаған өзгертулер бар.<br><br>Өзгертулерді сақтау үшін осы терезеге ауысқыңыз немесе өзгертулерді алып тастап, оны осы терезеде ашасыз ба?",
		viewer_mergesplit_fallback_info: "Бірдей репозиторийдегі құжаттардағы Біріктіру және бөлу әрекетін ғана аяқтай аласыз.",
		viewer_tabbed_layout: "Қойындылар ретінде көру",
		viewer_tabbed_layout_highcontrast: "Қойындылар",
		viewer_split_vertical_layout: "Бөліктер төбесі мен төменін бөлу",
		viewer_split_vertical_layout_highcontrast: "Жоғарғы және төменгі",
		viewer_split_horizontal_layout: "Бөліктерді оңға және олға бөлу",
		viewer_split_horizontal_layout_highcontrast: "Сол және оң",
		viewer_add_vertical_layout: "Төменгі жаңа қойынды",
		viewer_add_vertical_layout_highcontrast: "Төменгі қойынды",
		viewer_add_horizontal_layout: "Оң жағындағы жаңа қойынды",
		viewer_add_horizontal_layout_highcontrast: "Оң жақ қойынды",
		viewer_add_horizontal_layout_rtl: "Сол жағындағы жаңа қойынды",
		viewer_add_horizontal_layout_rtl_highcontrast: "Сол жақ қойынды",
		viewer_split_properties_layout: "Сипаттарды көру",
		viewer_split_comment_layout: "Пікірлерді қарау",
		viewer_split_notelog_layout: "Жазу журналын қарау",
		viewer_window_title: "${0} Қарап шығу құралы",
		viewer_next_hit: "Тізімдегі келесі құжатты көру",
		viewer_prev_hit: "Тізімдегі алдыңғы құжатты көру",
		viewer_confrim_more_search_results: "Іздеу нәтижелері енді көрінбейтін құжаттарды қамтиды.  Көбірек іздеу нәтижелерін шығарғыңыз келеді ме?",
		viewer_confirm_get_next_page: "Нәтижелер тізімі енді көрінбейтін элементтерді қамтиды.  Көбірек іздеу нәтижелерін шығарғыңыз келеді ме?",
		viewer_confirm_get_next_item: "Нәтижелер тізімі көптеген көрінетін элементтерді қамтиды.  Келесі элементті көргіңіз келеді ме?",
		viewer_fn_annotation_tooltip: " Құрған: ${0},  Құрылды: ${1}",
		viewer_box_note_limitation: "Бөлек терезедегі Жәшік ескертпелерін қарай және аша аласыз.",
		viewer_click_to_open_box_note: "Жәшік ескертпесін ашу үшін мына жерді басыңыз.",
		viewer_box_view_expiring: "Сіз қарай алатын Жәшік құжаты уақыттың ең үлкен саны 60 минут. Ағымдағы сеансыңыз ${0} минуттан кейін аяқталады. Егер құжатта жұмыс істеуді жалғастырғыңыз келсе, оны қазір қайтадан жүктеуіңіз керек. Құжатты қайта жүктегіңіз келе ме?",
		viewer_add_dialog_save_as_type: "Түрі ретінде сақталған:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Тексеру қақтығыстары",
		viewer_checkout_conflict: "Құжат басқа пайдаланушы арқылы тексерілген.",
		viewer_checkout_confirm: "Құжаттың жаңарақ нұсқасы қол жетімді. Құжатты тексеруді жалғастырғыңыз келеді ме әлде, қарау құралын жаңарақ нұсқамен қайт жүктегіңіз келеді ме? Егер қарау құралын қайта жүктеуді таңдасаңыз, онда кез келген сақталмаған өзгерістер жоғалады.",
		viewer_checkout_continue: "Бөліп алумен жалғастыру",
		viewer_checkout_reload: "Қайта қотару",
		viewer_status_building: "Құжатты құрастыру...",
		viewer_status_adding: "Құжатты қосу...",
		viewer_status_checking_in: "Құжат ішінде тексеру...",

		/* Class Selector Widget */
		include_subclasses_label: "Ішкі класстарды қамту",
		include_subclasses_label2: "Сонымен қатар ішкі класста іздеу",
		include_subclasses_note: "(Ішкі класстарды қосқанда)",
		available_classes_col_header: "Қол жетімді класстар",
		single_class_label: "Жалғыз класста іздеу",
		multiple_classes_label: "Бірнеше класстарда іздеу",
		multiple_classes_hover_help: "Бірден көп класста іздеу үшін осы опцияны таңдаңыз. Класстар бастапқы класстар немесе ішкі класстар болуы мүмкін. Егер осы опцияны таңдасаңыз, сіз тек таңдалған класстарға жалпы болатын сипаттар мен мәндерді ғана көресіз.",
		selected_classes_col_header: "Таңдалған класстар",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Ішкі қалталарды қосқанда)",
		favorites_pseudo_node: "\\Таңдаулылар\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Құжатты қосу үшін репозиторийдегі қалтаны таңдауыңыз керек.",
		no_permission_add_folder: "Қалталарды осы қалтаға қосу үшін сәйкес рұқсаттарды иеленбейсіз.",
		no_permission_add_document: "Құжаттарды осы қалтаға қосу үшін сәйкес рұқсаттарды иеленбейсіз.",
		document_already_in_folder: "Құжат әлдеқашаннан бері осы қалтада.",
		cant_move_folder_onto_parent: "Қалта бұрыннан осы қалтада.",
		cant_move_folder_onto_self: "Қалтаны өзінің ішіне не өзінің ішкі қалталарына көшіре алмайсыз.",

		/* Workflow Widgets */
		process_application_space: "Үрдіс бағдарламасының бос орны",
		process_role: "Үрдіс рөлі",
		process_inbasket: "Себеттегі үрдіс",
		process_worklist: "Жұмыс тізімі",
		process_step_processor: "Үрдіс жұмысының элементі",
		process_tracker: "Жұмыс элементін тасымалдау",
		process_info_subject: "Тақырып",
		process_info_stepname: "Қадам",
		process_info_is_locked: "Құлыптанған",
		process_info_no_access: "Кіруге болмайды",
		process_info_received_on: "Алынған",
		process_info_overdue: "Кешіктірілген",
		process_info_reminder_sent: "Еске салғыш жіберілді",
		process_info_locked_by_user: "Келесімен құрсауланған",
		process_work_object_number: "Жұмыс нысанының саны",
		process_deadline: "Күнге байланысты:",
		process_launchedby: "Келесімен басталған:",
		process_receivedon: "Келесіде алынған:",
		process_step: "Қадам:",
		process_properties: "Сипаттар",
		process_attachments: "Тіркемелер",
		process_attachments_select: "Тізбекті таңдау",
		process_finish_button_label: "Тасымалдауды тоқтату",
		process_tracker_history: "Журнал",
		process_tracker_milestones: "Бақылау нүктелері",
		process_tracker_milestone: "Бақылау нүктесі",
		process_tracker_milestone_level: "Деңгей",
		process_tracker_milestones_empty: "Мұнда көрсететін бақылау нүктелері жоқ",
		process_tracker_level_selector_label: "Бақылау нүктесі деңгейін келесіге дейін көрсету:",
		process_tracker_map_selector_label: "Салыстыру арқылы сүзу:",
		process_tracker_message: "Хабарлама",
		process_tracker_datereached: "Жеткен күн",
		process_tracker_stepname: "Қадам",
		process_tracker_cycle: "Айналым",
		process_tracker_review_cycle: "Айналымды қарау",
		process_tracker_participant: "Қатысушы",
		process_tracker_completed: "Аяқталды",
		process_tracker_response: "Жауап беру",
		process_tracker_comments: "Аңғартпалар",
		process_tracker_delete_confirmation: "Келесі жұмыс ағымын тасымалдауды тоқтатқыңыз келеді ма: ${0}?",
		process_tracker_history_allmaps: "Барлық салыстырулар",
		process_tracker_history_workflow: "Жұмыс үрдісі",
		process_tracker_history_terminate: "Аяқтау",
		process_tracker_history_malfunction: "Бұзылған",
		process_filter_label: "Сүзгі",
		process_no_filter_summary: "Сүзгілер қолданылмайды",
		process_filter_summary: "${0} қолданылды",
		process_filter_reset_tooltip: "Қайта орнату сүзгіні тазалап және себетті жаңартады.",
		process_attachments_add_folder: "Қалтаны қосу",
		process_attachments_add_doc: "Құжат қосу",
		process_complete_button_label: "Аяқтау",
		process_save_button_label: "Сақтау",
		process_launch_button_label: "Жұмыс Ағымын орналастыру",
		process_open_button_label: "Ашу",
		process_movetoinbox_button_label: "Себетке көшу",
		process_return_button_label: "Қайтару",
		process_return_to_sender_tooltip: "Жұмыс элементін себеттегі түпнұсқалануға қайтару",
		process_move_to_inbasket_tooltip: "Жұмыс элементін бастапқы себет күйіне көшіру",
		process_reassign_tooltip: "Жұмыс элементін басқа иеге қайта тағайындау",
		process_reassign_button_label: "Қайта тағайындау",
		process_preferences_button_label: "Теңшелімдер",
		process_manageroles_button_label: "Рөлдерді басқару",
		process_manageroles_no_members: "Мұнда мүшелер жоқ.",
		process_responses_button_label: "Көбірек жауапкершіліктер",
		process_morecustomaction_button_label: "Қосымша әрекеттер",
		process_show_instructions: "Нұсқаулырды көру",
		process_hide_instructions: "Нұсқауларды жасыру",
		process_remove_attachment: "Жою",
		process_close_window: "Жұмыс элементі орындалуда",
		process_delegate_flag: "Ағымдағы иені жұмыс элементін оны жұмыс ағымынлағы келесі қадамға бағыттау алдында бекітуді талап етіңіз.",
		process_paticipant_voting: "Қабылдауды бекіту үшін талап етілген қатысушылар саны:",
		process_get_next_label: "Келесі жұмыс элементін алу",
		process_no_more_items: "Себетте орындалатын басқа элементтер жоқ.",
		process_workflow_name: "Жұмыс ағымы аты:",
		process_pattern_process_name: "${0} үшін шолу",
		process_instuctions: "Қайта көрушілерге арналған нұсқаулар:",
		process_pattern_deadline: "Күнге байланысты:",
		process_reviewers: "Қайта көрушілер:",
		process_approvals_required: "Растаулар талап етілді:",
		process_on_reject: "Егер жұмыс элементінен бас тартылса:",
		process_return_to_originator: "Маған қайтару",
		process_return_to_previous_reviewer: "Алдыңғы көрушіге қайтару",
		process_additional_settings: "Қосымша параметрлер:",
		process_allow_reassign: "Қайта көрушілерге осы шолуды қайта тағайынлауды тапсырдық",
		process_complete_notification: "Қарап шығу аяқталғанда, маған ескертіңіз",
		process_workflow_name_hover_help: "Жұмы элементі үшін көрсеткен ат шолушыларға осы жұмыс элементі мен басқа жұмыс элементтері арасында анықталу үшін жеңілдетуі тиіс.",
		process_approvals_required_hover_help: "Егер жұмыс жэлементі бірнеше адам арқылы қаралса, сәтті ақталу үшін жұмыс элементі үшін қажетті бекітулерді көрсете аласыз.",
		process_approval_options: "Бекіту параметрлері",
		process_all: "Барлық",
		process_at_least: "Кем дегенде",
		process_at_least_by_count: "Қараушылардың кем дегендегі ${0} саны",
		process_at_least_by_percentage: "Қараушылардың ${0}% кем дегенде",
		process_comments: "Аңғартпалар:",
		process_review_step_comments_hover_help: "Егер жұмыс элементінен бас тартсаңыз, одан неге бас тартқаныңыз туралы ақпаратты беруіңіз керек. Бұл ақпарат жұмыс элементінің әзірлеушісін іске қосады немесе алдыңғы қараушыны сіздің ойларыңызды растау үшін іске қосады.",
		process_rework_step_comments_hover_help: "Пікірлерді қалай жібергеніңіз туралы ақпаратты ақмтуығыз мүмкін. Егер сіз аңғартпалармен қамтамасыз етесіз, шешіміңіз үшін растауды орындау.",
		process_rejection_reason: "Қабылдамаудың себебі:",
		process_summary: "Жиынтық",
		process_sequential_review: "Тізбекті шолу",
		process_sequential_review_description: "Жұмыс элементі реттегі әр бір қарау құралы арқылы қаралады.",
		process_parallel_review: "Параллельді шолу",
		process_parallel_review_description: "Жұмыс элементі бірдей уақыттағы барлық шығарушылар қаралады",
		process_parallel_approvals_required_error: "Талап етілген бекітулер саны тым ұзын. Тек ${0} қараушылар көрсетілген.",
		process_parallel_invalid_required_approvals_count: "Мән жарамсыз. Мән келесідей болуы тиіс ${0}.",
		process_subject_prompt: "Тақырыпты енгізу",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Жұмыс элементі:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Сипаттарды көру",
		view_permissions_level: "Рұқсаттарды көру",
		view_content_level: "Құжатты көру",
		link_level: "Сілтеме",
		modify_properties_level: "Сипаттамаларды өңдеу",
		modify_content_level: "Құжатты өңдеу",
		minor_version_level: "Қосымша нұсқаны өңдеңіз",
		major_version_level: "Негізгі нұсқаны өңдеңіз",
		create_instance_level: "Дананы құру",
		delete_document_level: "Құжатты жою",
		delete_item_level: "Элементті жою",
		modify_document_permissions_level: "Рұқсаттарды басқару",
		modify_folder_permissions_level: "Рұқсаттарды басқару",
		modify_owner_level: "иені өңдеу",
		delete_folder_level: "Қалтаны жою",
		file_in_folder_level: "Қалталарға қосу",
		create_subfolder_level: "Ішкі қалталарды құру",
		link_item_level: "құжатқа аңғартпа қосу, қалтаға қосу", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Құжат қана: құжатқа аңғартпа қосу немесе аңғартпаны құжаттан жойыңыз</li><li>Қалта ғана: Элементтерді қалтаға қосыңыз немесе элементтерді қалтадан жойыңыз</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Жою",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Иесі",
		/* previously \"Full control\" */
		edit_privilege: "Автор",
		/* previously \"Edit\" */
		read_only_privilege: "Оқығыш",
		/* previously \"Read only\" */
		no_access_privilege: "Кіруге болмайды",
		share_with_label: "Келесімен бөлісу:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Тек қана мен",
		public_label: "Әркім",
		members_label: "Пайдаланушылар мен топтрады көрсету",
		select_members_label: "Таңдау...",
		select_user_group_label: "Пайдаланушыларды таңдау...",
		select_users_groups_label: "Пайдаланушылар мен топтарды таңдау...",
		select_user_label: "Пайдаланушыны таңдау...",
		propagation_label: "Орындау:",
		access_label: "Рұқсаттар:",
		add_permission_add_label: "Қосу",
		security_policy_label: "Қауіпсіздік саясаты:",
		includes_inherited_access: "иеленген қатынасты қамтиды",
		customize_access_for_label: "Келесі ұшін қатынасты теңшеу:",
		customize: "Теңшеу",
		direct: "Бұл элемент",
		singleLevelInheritance: "Бір деңгей",
		infiniteLevelInheritance: "Барлық деңгейлер",
		inherited: "Мұраланған",
		direct_hover_help: "Қауіпсіздік параметрлері таңдалған элменетке қабылданады",
		singleLevelInheritance_hover_help: "Бұл рұқсаттар осы элементке қабылданады және осы элементтен қауіпсіздікті иелену үшін теңшелген сол жылдам еншілеске қабылдау.",
		infiniteLevelInheritance_hover_help: "Бұл рұқсаттар осы элементке қабылданады және осы элементтен қауіпсіздікті иелену үшін теңшелген барлық еншілестерді қабылдау.",
		inherited_hover_help: "Бұл рұқсаттар бастапқыдан алынған.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0} элементтеріне арналған рұқсаттар осы элементке қабылданады және осы элементтен қауіпсіздікті иелену үшін теңшелген сол жылдам еншілеске қабылдау.",
		infiniteLevelInheritance_member_hover_help: "${0} элементтеріне арналған рұқсаттар осы элементке қабылданады және осы элементтен қауіпсіздікті иелену үшін теңшелген барлық еншілестерді қабылдау.",
		inherited_member_hover_help: "${0} элементтеріне арналған рұқсаттар бастапқыдан алынған.",
		partial_hover_help: "Элемент қауіпсіздігі параметрлері пайдаланушы арқылыы өзгертілген",
		allow: "Рұқсат беру",
		deny: "Тыйым салу",
		basic: "Негізгі",
		advanced: "Кеңейтілген",
		permission_type: "Келесі үшін қатынасты орнату:",
		share_with_hover_help: "Элемент ағымда пайдаланушылар мен топтармен бірге ортақ.",
		direct_security_policy_hover_help: "Осы өауіпсіздік саясатының параметрлері сізге осы элементтің қауіпсіздігін өзгертуге рұқсат береді.",
		security_policy_hover_help: "Осы элементтің қауіпсіздігі тек оқуға арналған, себебі осы қауіпсіздіктің параметрлері сізді осы элементтің қауіпсіздігін өзгертуден алдын алу үшін қолданылады.",
		security_remove: "Рұқсаттар жоқ",
		pseudo_group_label: "Лақап ат есептері",
		marking_hover_help: "Осы элементтің қауіпсіздігі белгілеу параметрі арқылы басқарылады, ол элементтің қауіпсіздігіне әсер етеді.",
		note_label: "Маңызды:",
		marking_text: "Бұл элемент келесіде белгіленген: ${0}. Элемент қосымша қауіпсіздік шектерін иеленуі мүмкін.",
		authenticated_users: "Тіркелген пайдаланушылар",
		realm_users: "${0} пайдаланушылар",
		denyAll: "Барлығына тыйым салу",
		allowAll: "Барлығын рұқсат ету",
		remove_direct_text: "Өзгертулеріңізді сақтаған кезде осы мүшеге арналған рұқсаттар элементтен жойылады.",
		remove_single_inheritance_text: "Өзгертулеріңізді сақтаған кезде осы мүшеге арналған рұқсаттар элементінен жойылады <br>осы элементтен қауіпсіздікті иелену үшін теңшелген сол жылдам еншілеске қабылдау.<p>Жалғастырғыңыз келеді ме?",
		remove_infinite_inheritance_text: "Өзгертулеріңізді сақтаған кезде осы мүшеге арналған рұқсаттар элементінен жойылады <br>Элементтен қауіпсіздікті иелену үшін теңшелген барлық еншілестерді қабылдау.<p>Жалғастырғыңыз келеді ме?",
		remove_inheritance_text: "Өзгертулеріңізді сақтаған кезде осы мүшеге арналған рұқсаттар элементінен жойылады <br>Элементтен қауіпсіздікті иелену үшін теңшелген барлық еншілестерді қабылдау. Тек сол рұқсаттар ғана <br>осы элемент арқылы алынып және сақталынады.<p>Жалғастырғыңыз келеді ме?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Бұл рұқсаттарды ${0} үшін жою",

		security_proxy_text: "Осы элементтің қауіпсіздігі оқуға ғана.",
		security_proxy_declared_text: "Осы элементтің қауіпсіздігі оқу үшін ғана себебі ол қауіпсіздік проксиі арқылы анықталған.",
		security_proxy_hover_help: "Осы элементтің қауіпсіздігі репозиторийдегі басқа нысанда орнатылған қауіпсіздік арқылы басқарылады.",
		add_permissions_label: "Рұқсаттар қосу",
		permission_propagation_direct: "Тек осы қалта",
		permission_propagation_onelevel: "Бұл қалта және бір деңгей төмен",
		permission_propagation_alllevels: "Осы қалта және төмендегі барлық деңгейлер",
		document_propagation_label: "Келесі үшін қатынасты орнату:",
		document_propagation_FOLDER: "Қалта",
		document_propagation_DOCUMENT: "Құжат",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Түпнұсқалық расатама қайнар көзі:",

		/* Versions Widget */
		object_versions_selector_label: "Нұсқалар:",
		object_versions_label: "Нұсқалар",
		object_type_document_label: "Құжат:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Қалталар келесіде толтырылған",
		folders_filed_in_folder_col_hdr: "Қалта",
		folders_filed_in_path_col_hdr: "Жол",
		folders_filed_in_containment_name_col_hdr: "Қатыстылық атауы",
		folders_filed_in_creator_col_hdr: "Жасаған",
		folders_filed_in_date_created_col_hdr: "Келесіде құрылған",

		/* Parent Documents */
		properties_parent_documents_label: "Тектік Құжаттар",

		/* Select object dialog */
		select_object_title: "Элементті таңдау",
		select_object_breadCrumb_version_prefix: "Келесіге арналған нұсқалар: ",
		show_versions_label: "Нұсқаларды көрсету",
		use_current_version_label: "Ағымдағы нұсқаны қолдану",
		use_released_version_label: "Шығарылған нұсқаны қолдану",

		/* Select content class dialog */
		select_class: "Классты таңдау",
		/* Select Search dialog */
		select_search: "Іздеуді таңдау",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Байланысты көру",
		show_hyperlink_intro: "Байланысты электрондық поштаға, тілқатысуларға және веб беттеріне көшіріп және қоя саласыз. Егер мұнда элементтің бірнеше нұсқалары болса, қай нұсқаны байланыстырғыңыз келетінін көрсетіңіз.",
		show_hyperlink_intro_no_version_select: "Байланысты электрондық поштаға, тілқатысуларға және веб беттеріне көшіріп және қоя саласыз.",
		show_text_label: "Нұсқа:",
		released_button_label: "Шығарылды",
		current_button_label: "Ағымдағы",
		select_button_label: "Белгілі бір нұсқа",
		show_hyperlink_no_released_version_msg: "Осы құжаттын шығарылған нұсқасы жо.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Жұмыс Ағымын орналастыру",
		edit_workflow_title: "Жұмыс элементі сипаттары",
		start_workflow_intro: "Таңадалған элементтерді орындау үшін жұмыс ағымын орналастыру. Егер жұмыс элеметтерін арнайы пайдаланушыға тағайыныдағыңыз келсе, иені көрсеттіңіз.",
		edit_workflow_intro: "Таңдалған жұмыс элементтерінің сипаттарын өзгерте аласыз. Жұмыс элементін басқа пайдаланушылға қайта тағайындағыңыз келсе, иені көрсетіңіз.",
		workflow_field_label: "Жұмыс үрдісі:",
		priority_field_label: "Артықшылық:",
		owner_field_label: "Иесі:",
		start_button_label: "Бастау",
		save_button_label: "Сақтау",
		owner_value_hint: "Ең көп дегенде 32 таңбадан тұратын әліпби және сандық жолд енгізіңіз. Жол тек бос орындарды немесе келесі таңбалардан тұру керек: a-z, A-Z, 0-9, және ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Мазмұн элементтері",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Мән жарамсыз. Мән тек бос орындарды немесе келесі таңбалардан тұру керек: a-z, A-Z, 0-9, және ` , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "1 мен 32000 арасынлағы мәнді жұмыс элементінің маңыздылығын көрсету үшін енгізіңіз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Мән жарамсыз. Артықшылық 1 мен 32000 арасында жарамды болуы тиіс.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Жұмыс ағымы аты жоқ.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Жұмыс ағымынан күдіктену",
		suspend_workitems_intro: "Жұмыс ағымынан жұмыс элементін күдіктенген кезде, жұмыс элементі ол қолданылмайынша орындала алмайды",
		suspend_workitems_options_label: "Таңдалған жұмыс элементтерін күдіктену:",
		suspend_until_resume_label: "Қолмен қаралмайынша",
		suspend_until_date_label: "Дейін",
		suspend_for_duration_label: "Үшін",
		suspend_for_duration_hours: "сағат",
		suspend_for_duration_days: "күн",
		suspend_for_duration_weeks: "апта",
		suspend_for_duration_months: "ай",
		suspend_for_duration_years: "жыл",
		suspend_button_label: "Кідірту",
		suspend_duration_value_hint: "Жиілік үшін 1 - 99 ауқымындағы мәнді енгізіңіз.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Мән жарамсыз. Мән 1 - 99 ауқымында болуы тиіс.",

		/* Remove from workflow */
		remove_workflow_title: "Жұмыс ағымынан жою",
		remove_workflow_confirmation: "Таңдалған элементтерді жұмыс ағымынан жойғыңыз келеді ме?<br>${0} элементтер таңдалды.",
		remove_workflow_button_label: "Жою",

		/* Unfile dialog */
		unfile_dialog_title: "Қалтадан жою",
		unfile_dialog_remove_from_folder_label: "Келесіден жою:",
		unfile_dialog_info_text: "Элементтерді қалталардан жоя аласыз. Дегенмен, барлық қалталардан элементтерді жою, репозиторийден элементті жоймайды. Элементті әлі де іздеуді орындау арқылы шығара аласыз. Осы тізімде көрсетілетін артықшылықтарды иеленетін қалталар ғана.",
		unfile_dialog_select_all: "БАРЛЫҒЫН таңдау",
		unfile_dialog_deselect_all: "Барлығын Тазалау",
		unfile_dialog_remove_button_label: "Жою",
		unfile_dialog_select_folder_col_hdr: "Қалтаны таңдау",
		unfile_dialog_folder_col_hdr: "Қалта",
		unfile_dialog_path_col_hdr: "Жол",
		unfile_dialog_not_filed_msg: "Бұл элемент кез келген қалтада жоқ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Осы элементті өзі орналасқан кез келген қалталардан жою үшін сәйкес рұқсаттарды жою үшін рұқсатыңыз жоқ.",
		unfile_dialog_folder_not_selectable_tooltip: "Осы элементті осы қалтадан жоюға арнайы рұқсатыңыз жоқ.",
		unfile_multi_prompt: "Таңдалған элементтерді ${0} қалтасынан жойғыңыз келе ме?",
		unfile_large_number_items_confirmation_question: "${0} элементтерін ${1} қалтасынан жою үшін таңдайсыз.<br/>Элементтердің үлкен көлемін қалтадан жою ұзақ уақыт алуы мүмкін.<br/>Жалғастырғыңыз келеді ме?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Ашу",
		move_to_folder_title: "Қалтаға жылжу",
		move_to_folder_button_caption: "Жылжыту",
		move_to_folder_label: "Келесіге жылжыту:",
		add_to_folder_title: "Қалтаға қосу",
		add_to_folder_button_caption: "Қосу",
		add_to_folder_label: "Келесіге қосу:",
		copy_to_folder_title: "Қалтаға көшіру",
		copy_to_folder_button_caption: "Көшіру",
		copy_to_folder_label: "Келесіге көшіру:",
		copy_to_folder_delete_label: "Көшіру аяқталған соң, таңдалған элементті (элементтерді) Box бағдарламасынан жойыңыз.",
		move_from_folder_label: "Келесіден жылжыту:",
		move_file_info_text: "Элементтерді бір қалтадан екіншісінен жылжыта аласыз.",
		move_folder_info_text: "Қалталарды бастапқы қалтадан басқасына жылжыта аласыз.",
		add_doc_to_folder_info_text: "Элементтерді бір немесе бірнеше қалталарға қоса аласыз. Егер элемент бұрыннан қалтада болса, ол сол қалтада қалады және сіз көрсеткен кез келген қосымша қалталарға қосылады.",
		copy_doc_to_folder_info_text: "Элементтерді қалтаға көшіре аласыз.",
		box_copy: "Box көшірмесі",
		box_copy__button_caption: "Көшіру",
		box_copy_to_info_text: "Box бағдарламасынан таңдалған элементтерді көшіретін репозиториін және қалтасын таңдаңыз.",
		box_copy_from_info_text: "Box бағдарламасынан таңдалған элементтерді көшіретін репозиториін және қалтасын таңдаңыз.",
		box_copy_version_info_text: "Жаңа құжатты қосу үшін, репозиторийді және қалтаны таңдаңыз. Жаңа нұсқада тексеру үшін, репозиторийді және құжатты таңдаңыз.",
		admin_box_copy: "Box көшірмесі",
		admin_box_copy_hover: "Осы опция пайдаланушыларға құжаттарды Box бағдарламасына көшіруге рұқсат береді.",

		no_permission_to_copy_version_msg: "Құжатты таңдалған құжаттың жаңа нұсқасы ретінде Box бағдарламасынан көшіре алмайсыз. Сондай-ақ, таңдалған құжатты өңдеу үшін сәйкес рұқсаттарыңыз жоқ немесе таңдалған құжатты басқа біреу тіркеп қойған.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Осы элементті өзі орналасқан кез келген қалталардан жою үшін сәйкес рұқсаттарды жою үшін рұқсатыңыз жоқ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Осы элементті осы қалтадан жоюға арнайы рұқсатыңыз жоқ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Бұл элемент көшірілмейді, себебі ол ешқандай қалталарда орналаспаған. Басқа элементті таңдаңыз.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Жұмыс Ағымын орналастыру",
		subscriptions_dialog_available_items_label: "Қол жетімді элементтер:",
		subscriptions_dialog_info_text: "Іске қосу үшін жұмыс ағымын көрсету.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Аты",
		subscriptions_dialog_desc_col_hdr: "Сипаттама",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Рөлдерді басқару",
		manageroles_dialog_info_text: "Осы бағдарлама бос орнымен байланыстырылған әр бір рөл үшін пайдаланушылардың тізімін өзгерте аласыз.",
		manageroles_dialog_members_label: "Мүшелер",
		manageroles_dialog_roles_label: "Рөлдер",
		manageroles_dialog_add_button_label: "Пайдаланушылар мен топтарды қосу",
		manageroles_dialog_remove_button_label: "Жою",
		manageroles_dialog_save_button_label: "Сақтау",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Бұл элементпен байланысқан джұмыс ағымдары жоқ.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Жұмыс ағымы қалаулылары",
		workflow_pref_dialog_info_text: "Электрондық хабарлама есркертуін қабылдау үшін жұмыс ағымы оқиғаларын көрсетіңіз. Жұмысыңызды басқа адамға жұмыс істеу үшін пайдаланушыны таңдау арқылы бағыттау үшін опцияны іске қосуыңыз керек.",

		workflow_pref_general: "Жалпы",
		workflow_pref_email_address: "Электрондық Пошта мекен-жайы",
		workflow_pref_email_address_hover: "Жұмыс ағымы ескертулерн қабылдағыңыз келген электрондық пошта мекен-жайын көрсетіңіз.",
		workflow_pref_preferred_locale: "Тіл",
		workflow_pref_preferred_locale_hover: "Электрондық хабарлама ескертулері көрсетілген тілді көрсетіңіз.",

		workflow_pref_work_item_notice: "Жұмыс элементі ескертулері",
		workflow_pref_step_new_assignment: "Жаңа жұмыс элементі маған тағайындалды",
		workflow_pref_step_new_assignment_hover: "Жаңа жұмыс элементін алған кезде маған ескертіңіз.",
		workflow_pref_step_expired_deadline: "Жұмыс элементінің аяқталу уақыты жіберілді",
		workflow_pref_step_expired_deadline_hover: "Жұмыс элементінің аяқталу уаытын жіберген кезде маған ескертіңіз.",
		workflow_pref_step_reminders: "Жанында жұмыс элементінің аяқталу уақыты бар",
		workflow_pref_step_reminders_hover: "Бұл аяқталу уақыты жанында болған кезде маған жұмыс туралы ескертіңіз.",

		workflow_pref_originator_notice: "Бастаушы Ескертулері",
		workflow_pref_milestone_reached: "Бақылау нүктесіне жетті",
		workflow_pref_milestone_reached_hover: "Бақылау нүктесі мен бастаған жұмыс ағымына жеткен кезде мені ескертіңіз.",

		workflow_pref_tracker_notice: "Жұмыс ағымын тасымалдаушы ескертпелер",
		workflow_pref_tracker_new_assignment: "Жаңа тасымалдаушы элемент маған тағайындалды",
		workflow_pref_tracker_new_assignment_hover: "Мен тасымалдап жатқан жұмыс ағымы орналасқан кезде маған ексертіңіз.",
		workflow_pref_tracker_deadline_reminders: "Жұмыс ағымы аяқталу уақыты жанында",
		workflow_pref_tracker_deadline_reminders_hover: "Жұмыс ағымы аяқталу уақыты жанынажа болған кезде мені ескертіңіз.",
		workflow_pref_tracker_deadline_expired: "Жұмыс ағымы аяқталу уақыты жіберілді",
		workflow_pref_tracker_deadline_expired_hover: "Жұмыс ағымының аяқталу уаытын жіберген кезде маған ескертіңіз.",
		workflow_pref_tracker_exception: "Жұмыс ағымы қателігі пайда болады",
		workflow_pref_tracker_exception_hover: "Жұмыс ағымы қиыс жағдайы не қателігі пайда болған кезде мені ескерту.",
		workflow_pref_tracker_expired_deadline: "аяқталу уақыты қадамы жіберілді",
		workflow_pref_tracker_expired_deadline_hover: "Қадам аяқталу уақыты мен тасымалдап жатқан жұмыс ағымында жіберілді.",
		workflow_pref_tracker_milestone_reached: "Бақылау нүктесіне жетті",
		workflow_pref_tracker_milestone_reached_hover: "Бақылау нүктесі мен тасымалдап жатқан жұмыс ағымына жеткен кезде мені ескертіңіз.",

		workflow_pref_out_notice: "Office бағдарламасынан тыс",
		workflow_pref_proxy_user: "Жұмысты келесіге көшіру",
		workflow_pref_proxy_user_hover: "Осы опцияны жұмысыңызды басқа пайдаланушыға автоматты түрде бағыттау үшін қолдану, мысалы, сіз кеңседен не демалыстан алыс болсаңыз.",
		workflow_pref_workflow: "Жұмыс үрдісі",
		workflow_pref_on: "Келесіге",
		workflow_pref_off: "шығу",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Жұмыс Ағымын орналастыру",
		transfered_workflows_dialog_info_text: "Іске қосу үшін жұмыс ағымын таңдау.",
		transfered_workflows_dialog_available_items_label: "Қол жетімді элементтер:",
		transfered_workflows_dialog_select_button_label: "Іске қосу",
		transfered_workflows_dialog_name_col_hdr: "Аты",
		transfered_workflows_dialog_no_item_found: "Тасымалданатын жұмыс ағымдары табылмады.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Жұмыс ағымын тасымалдау",
		transfer_workflow_dialog_info_text: "Жұмыс ағымы жүйесіне тасымалдау үшін жұмыс ағымын таңдау.",
		transfer_workflow_dialog_use: "Осы жұмыс ағымы ағымын қолдану",
		transfer_workflow_dialog_use_another: "Басқа жұмыс ағымы атын қолданыңыз",
		transfer_workflow_dialog_in_use: "Жұмыс ағымы аты мынадай: ",
		transfer_workflow_dialog_transfer_button_label: "Тасымал",
		transfer_workflow_dialog_no_items_found: "Тасымалданатын жұмыс ағымдары табылмады.",
		transfer_workflow_dialog_use_hover: "Жұмыс ағымы анықтамасынан ағымдағы жұмыс ағымын көрсету",
		transfer_workflow_dialog_another_hover: "Әр түрлі жұмыс ағымы атын көрсетіңі немесе бар тасымал жұмыса ағымының атын қайта қолдану.",

		/*Search In control*/
		search_in_title: "Іздеу:",
		search_in_teamspaces: "Топ аймақтары",
		search_in_repositories: "Репозиторийлер",
		search_in_thisteamspaces: "Осы топ бос орындары",

		ajaxViewer_save: "Аннотацияларды сақтау",
		ajaxViewer_print: "Алдын ала басып шығаруды қарау",
		ajaxViewer_firstPage: "Бірінші бет",
		ajaxViewer_previousPage: "Алдыңғы бет",
		ajaxViewer_nextPage: "Келесі бет",
		ajaxViewer_lastPage: "Соңғы бет",
		ajaxViewer_unknownPageCount: "1 ме?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} элементінің ${1} элементі",
		ajaxViewer_zoomOut: "Кішірейту",
		ajaxViewer_zoomIn: "Ірілеу",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Енін сәйкестендіру",
		ajaxViewer_fitHeight: "Биіктігін сәйкестендіру",
		ajaxViewer_fitPage: "Қиыстыру беті",
		ajaxViewer_rotate270: "270 градусқа бұру",
		ajaxViewer_rotate90: "90 градусқа бұру",
		ajaxViewer_rotate180: "180 градусқа айналдыру",
		ajaxViewer_darken: "Қаараңғы",
		ajaxViewer_lighten: "Жарық",
		ajaxViewer_lessContrast: "Аз контраст",
		ajaxViewer_moreContrast: "Көбірек контраст",
		ajaxViewer_invert: "Оралту",
		ajaxViewer_createHighlight: "Бөлектеу",
		ajaxViewer_createNote: "Түсініктеме беру",
		ajaxViewer_editAnnotation: "Аннотация Сипаттарын өңдеу",
		ajaxViewer_deleteAnnotation: "Аннотацияны жою",
		ajaxViewer_editAnnotationTitle: "Аннотация Сипаттарын өңдеу",
		printableView_print: "Басып шығару",
		printableView_close: "Жабу",

		search_results_dropdown_button: "Нәтижелерді көрсету",
		search_results_columns_label: "Нәтижелер көрінісін іздеу",
		search_results_columns_description: "Іздеу нәтижелерінде көрінуін қалайтын сипаттарды таңдау.",
		search_results_sortby_label: "Келесі бойынша сұрыптау:",
		search_results_order_label: "Сұрыптау реті:",
		search_results_accending_label: "Артуы бойынша",
		search_results_descending_label: "Кемуі бойынша",
		search_results_available_properties: "Қол жетімді",
		search_results_selected_properties: "Таңдалған",
		search_rank_property: "Ранг (Мәтінді іздеу ғана)",
		search_name_attribute: "Аты (${0})",
		search_results_summary_enabled_label: "Мазмұн қорытындыларын іске қосу (Мәтін іздеуі ғана)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Іздеулер",
		manage_teamspace_classes_tab_title: "Сыныптар",
		manage_teamspace_entry_templates_tab_title: "Енгізу үлгілері",
		manage_teamspace_team_tab_title: "Топ",
		manage_teamspace_roles_tab_title: "Рөлдер",
		manage_teamspace_dialog_title: "Топ аймағын өзгерту",
		manage_teamspace_button_label: "Топ аймағын өзгерту",
		manage_teamspace_team_pane_heading: "Топты таңдау",
		manage_teamspace_classes_pane_heading: "Класстарды таңдау",
		manage_teamspace_entry_templates_pane_heading: "Енгізу үлгілерін таңдау",
		manage_teamspace_no_rights_message: "Осы топ бос орнын өңдеу үшін сіздің сәйкес рұқсатыңыз жоқ.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "То бос орны сипаттары",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Пайдаланушылар шарлау кезінде мазмұн тізіміндегі құжаттар мен қалталар үшін топ бос орындарында көрсетілген сипаттарды көрсетіңіз. Сіз сонымен қатар сипаттар көрсетілген ретті көрсете аласыз.",
		teamspace_props_sel_cols_use_default_label: "<b>Шарлау</b> параметрлерін осы репозиторий үшін қолданыңыз",
		teamspace_props_sel_cols_use_default_tooltip: "Әкімші құралынжа осы репозиторий үшін Шралу бетінде көрсетілген параметрлерді қолданыңыз.",
		teamspace_props_general_tab_label: "Жалпы",
		teamspace_props_column_props_tab_label: "Көрсетілген сипаттар",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "импорттау үшін файлды таңдаңыз",
		teamspace_import_template_instruction: "импорттау үшін топ бос орны үлгісінң экспорттау файлын таңдай аласыз.",
		teamspace_import_template_button_label: "Импорттау",
		teamspace_import_template_dialog_label: "Топ аймағы үлгісін импорттау",

		/* Annotation Dialog */
		annotationDlg_title: "аннотациялар",
		annotationDlg_description: "Таңдалған құжат келесі аннотацияларды иеленеді:",
		annotationDlg_msg_noAnnotations: "Ешқандай аннотация жоқ. Аннотация құру үшін Қосу пәрменін басыңыз.",
		annotationDlg_pageLabel: "Бет: ${pageNum}",
		annotationDlg_accLabel: "ACCESS: ${accType}",
		annotationDlg_accLabel_public: "Жалпы",
		annotationDlg_accLabel_private: "Жеке",
		annotationDlg_accLabel_privateGroup: "Жеке(${groupName})",
		annotationDlg_copiable: "Басқа серверге көшіріле алады",
		annotationDlg_cannotCopy: "Басқа серверге көшіріле алмайды",
		annotationDlg_addButtonLabel: "Қосу",

		/* Share Dialog */
		is_shared: "Ортақтандырылған",
		is_share_pending: "Бөлісу күтуде",
		share_title: "Box бағдарламасын бөлісу",
		share_instructions_new: "Бөліскен файлға арналған сілтемені қамтитын электрондық пошта хабарын жіберіңіз. Сілтемесі бар кез келген пайдаланушы файлға кіре алады.",
		share_instructions_existing: "Бөліскен файлға арналған сілтемені қамтитын электрондық пошта хабарын жіберіңіз. Сілтемесі бар кез келген пайдаланушы файлға кіре алады. Басқа адамдар сілтемеге ие болады, себебі біреу осы файлды бұрыннан бөліскен.",
		share_instructions_another_version_shared: "Бөліскен файлға арналған сілтемені қамтитын электрондық поштаның хабарын жіберіңіз. Сілтемесі бар кез келген пайдаланушы файлға кіре алады. Басқа адамдар сілтемеге ие болады, себебі біреу осы файлдың басқа нұсқасымен бұрыннан бөліскен.",
		share_buttonLabel_share: "Ортақ пайдалану",
		share_email_addresses: "Жіберу:",
		share_email_addresses_hover: "Бөлісу аяқталғаннан кейін, сілтеме осы электрондық пошта мекен-жайларына жіберіледі. Ештеңені енгізбесеңіз, сілтеме өз электрондық пошта мекен-жайларыңызға жіберіледі.",
		share_email_addresses_reshare_hover: "Бөлісу аяқталғаннан кейін, сілтеме осы электрондық пошта мекен-жайларына жіберіледі. Ештеңені енгізбесеңіз, ешқандай электрондық пошта жіберілмейді.",
		share_password: "Құпия сөзді орнату:",
		share_password_placeholder: "Міндетті",
		share_comments: "Хабар:",
		share_comments_default: "Файлымды сізбен Box бағдарламасында бөліскім келеді.",
		share_myEmail: "Ішінен жіберу:",
		share_expiration: "Сілтеменің жарамдылық мерзімін орнату:",
		share_expire: "Қатынасудың мерзімі аяқталады:",
		share_expire_none: "Ешқашан мерзімі өтпейді",
		share_allowDownload: "Жүктеп алуға рұқсат беру",
		share_add: "Қосу",
		share_advanced_instructions: "Жүктеп алу, жарамдылық мерзімі және құпия сөз параметрлері Box бағдарламасындаға бөліскен файлға қолданылады.",
		share_advanced_existing_instructions: "Жүктеп алу, жарамдылық мерзімі және құпия сөз параметрлері Box бағдарламасындаға бөліскен файлға қолданылады.",
		share_options_edit_warning: "Маңызды: Осы параметрлерге енгізілген кез келген өзгерістер сілтемесі бра кез келген пайдаланушыға, сілтемесі бұрыннан бар адамдарды қоса алғанда әсер етеді.",
		share_link: "Сілтеме:",
		share_email_addresses_placeholder: "Электрондық пошта мекен-жайы",
		share_email_address_placeholder: "Электрондық Пошта мекен-жайы",
		share_email_address_invalid: "Жарамды электрондық пошта мекен-жайын енгізіңіз.",
		share_cannot_share_with_self: "Файлдарды өзіңізбен өзіңіз ортақ пайдалана алмайсыз. Әр түрлі пайдаланушыны көрсету.",
		share_selected_version_with_minor_warning_hover: "Құжат ${0} нұсқасы ортақ пайдаланылады. Сіз ${1} нұсқасын таңдадыңыз.<br><br><b>Ескерту</b>: ${1} нұсқасы ортақ пайдаланылса, ${2} нұсқасын ${1} нұсқасы үшін нұсқасы ортақ пайдаланылуды жойсаңыз ешбірін нұсқасы ортақ пайдалана алмайсыз.",
		share_selected_version_hover: "Құжат ${0} нұсқасы ортақ пайдаланылады. Сіз ${1} нұсқасын таңдадыңыз.",
		share_selected_version_message: "Маңызды: құжаттың ${0} нұсқасы ортақ пайдаланылған. Сіз ${1} нұсқасын таңдадыңыз.",
		share_different_version_message: "Маңызды: сіз ${1} нұсқасын таңдадыңыз, бірақ құжаттың ${0} нұсқасы әлдеқашан ортақ пайдаланылды.  Алдымен ортақ пайдалануды жоймас бұрын, ${1} нұсқасын ортақ пайдалану мүмкін емес, бірақ оның орнына ${0} нұсқасына сілтемені ортақ пайдалануға болады.",
		share_version_message: "Маңызды: құжаттың ${0} нұсқасы ортақ пайдаланылған. Қайсы нұсқаны ортақ пайдаланатыныңызды таңдаңыз.",
		share_version_new: "${0} нұсқасын ортақ пайдалану",
		share_version_new_p8_hover: "Осы құжатты ортақ пайдалану тек таңдалған нұсқа үшін белгілі нұсқаны жасайды.<br><br>Құжат әлдеқашан ортақ пайдаланылған кезде:<ul><li>Кейінгі нұсқасын ортақ пайдалануға болады және сілтеме кейінгі нұсқаға жібереді.</li><li>Алдымен ортақ пайдалануды жоймас бұрын, ертерек нұсқасын ортақ пайдалана алмайсыз.</li></ul>",
		share_version_new_cm_hover: "Осы құжатты ортақ пайдалану тек таңдалған нұсқа үшін белгілі нұсқаны жасайды.<br><br>Құжат әлдеқашан ортақ пайдаланылған кезде:<ul><li>Кейінгі нұсқасын ортақ пайдалануға болады және сілтеме кейінгі нұсқаға жібереді.</li><li>Алдыңғы нұсқасын ортақ пайдалана алмайсыз.</li></ul>",
		share_version_update: "${0} нұсқасын ортақ пайдаланыңыз (Ортақ пайдалану параметрлерін жаңарту).",
		share_version_update_p8_hover: "Осы құжатты ортақ пайдалану тек белгілі нұсқамен байланыс орнатады.<br><br>Құжат әлдеқашан ортақ пайдаланылған кезде:<ul><li>Кейінгі нұсқасын ортақ пайдалануға болады және сілтеме кейінгі нұсқаға жібереді.</li><li>Алдымен ортақ пайдалануды жоймас бұрын, ертерек нұсқасын ортақ пайдалана алмайсыз.</li></ul>",
		share_version_update_cm_hover: "Осы құжатты ортақ пайдалану тек белгілі нұсқамен байланыс орнатады.<br><br>Құжат әлдеқашан ортақ пайдаланылған кезде:<ul><li>Кейінгі нұсқасын ортақ пайдалануға болады және сілтеме кейінгі нұсқаға жібереді.</li><li>Алдыңғы нұсқасын ортақ пайдалана алмайсыз.</li></ul>",
		share_version_change_to_current: "${0} нұқсасын ортақ пайдалану (Таңдалған нұсқамен ортақ пайдалануды жаңарту).",
		share_version_change_to_current_p8_hover: "Осы құжатты ортақ пайдалану тек таңдалған нұсқаны көрсету үшін байланысты жаңартады.<br><br>Құжат әлдеқашан ортақ пайдаланылған кезде:<ul><li>Кейінгі нұсқасын ортақ пайдалануға болады және сілтеме кейінгі нұсқаға жібереді.</li><li>Алдымен ортақ пайдалануды жоймас бұрын, ертерек нұсқасын ортақ пайдалана алмайсыз.</li></ul>",
		share_version_change_to_current_cm_hover: "Осы құжатты ортақ пайдалану тек таңдалған нұсқаны көрсету үшін байланысты жаңартады.<br><br>Құжат әлдеқашан ортақ пайдаланылған кезде:<ul><li>Кейінгі нұсқасын ортақ пайдалануға болады және сілтеме кейінгі нұсқаға жібереді.</li><li>Алдыңғы нұсқасын ортақ пайдалана алмайсыз.</li></ul>",
		share_repository: "Бөліскен файлдарға арналған репозиторий",
		share_repository_hover: "Пайдаланатын Box репозиториін көрмесеңіз, жаңа Box репозиториін репозиторилер бетіне қосасыз.",
		share_options: "Бөлісу опциялары",
		unshare_confirm: "Бөлісуді жойсаңыз, басқа пайдаланушылармен алдында жіберілген бөлісу сілтемелерін қоса алғанда, барлық бөлісу сілтемелері бұзылады. Құжатты бөліскісі келетін кез келген басқа пайдаланушы бастапқы құжатта таңдап, оны қайта бөлісуі керек.<br><br>Бөлісуді жойғыңыз келетініне сенімдісіз бе?",
		unshare_button: "Box бағдарламасын бөлісуді жою",
		admin_share: "Box бағдарламасын бөлісу қызметтері:",
		admin_share_hover: "Пайдаланушыларға Box бағдарламасын бөлісу іске қосылған кез келген репозиториден құжатты бөлісуге рұқсат береді. Құжатты бөлісу файлды Box бағдарламасына көшіру, сілтемені жасау және электрондық поштаға сілтемені жіберуді қамтиды.",
		admin_my_email_modifiable: "Пайдаланушыларға электрондық мекен-жайдан жіберілгенді өңдеуге рұқсат беру",
		admin_my_email_modifiable_hover: "Әдепкі параметр бойынша, Box бағдарламасыны бөлісу үшін, пайдаланушының электрондық пошта мекен-жайы тек оқу үшін арналған және Box бағдарламасының пайдаланушысы тіркелгісін білдіретін электрондық пошта мекен-жайлары мен пайдаланушыларды салыстыру арқылы алынады.<br><br>Осы опция пайдаланушыларға бөлісу кезінде электрондық пошта мекен-жайларын өңдеуге рұқсат беруге таңдаңыз; алайда, электрондық мекен-жайдың жарамдылығы жарамды емес.",
		admin_repos_admin_user: "Әкімшіні бөлісу:",
		admin_repos_admin_user_hover: "Box бағдарламасын бөлісу қызметтері іске қосылған жұмыс үстеліңіз бар болса, бөлісу әкімшісін орнатыңыз және осы Box репозиториі бөлісетін файлдарға арналған репозиторий ретінде таңдалады.<br><br>Орнату түймесін басыңыз және жарамды Box әкімшілік тіркелгісін пайдаланып, Box бағдарламасына кіріңіз.<br><br>Бөлісу әкімшісі Box бағдарламасында шектелмеген қоймасы болуға теңшелген Box әкімші пайдаланушы болуы керек.",
		admin_repos_admin_user_not_set_warning: "Box әкімшісі таңдаған репозиторий үшін теңшелмеген.<br><br>Таңдалған репозиториге Box әкімшісін орнатқанға дейін Box бағдарламасын бөлісу қызметтері істен шығарылады немесе Box әкімшісі теңшелген жерде басқа Box репозиториін таңдаңыз.<br><br>Репозиторидің бастапқы бетіндегі Box бағдарламасын бөлісу қызметтерінің бөлімінде Box әкімшісін орната аласыз.",
		admin_share_not_configured_warning: "Жәшікті бөлісу қызметтерін пайдаланар алдында, Жәшік репозиторийін сервер түпнұсқалық растамасымен таңдаңыз және бірінші қосыңыз.",
		/* Office Online Server settings */
		admin_office_online_title: "Office онлайн конфигурациясы",
		admin_office_online_server_enable: "Office онлайн сервері:",
		admin_office_online_server_enable_hover: "Осы жұмыс үстеліне қатынасатын пайдаланушыларға өздерінің Office онлайн серверін пайдалану арқылы Office құжаттарын өңдеу мүмкіндігін көрсетіңіз.",		
		admin_office_online_allow_collaborative_editing: "Бірлесіп өңдеунге мүмкіндік беру",
		admin_office_online_allow_collaborative_editing_hover: "Ұқсас құжатта жұмыс істеу үшін бірден көп пайдаланушыларға рұқсат етіңіз. Бір пайдаланушыға құжаттарды өңдеуге шектеу қойғыңыз келсе, осы опцияны тазалаңыз.",
		admin_office_online_repository_not_set_warning: "Office онлайн қызметтерін қосар алдында, бірінші қызметті репозиторийге қосыңыз және Microsoft Office онлайн серверінің URL мекен-жайын көрсетіңіз. <b>Репозиторийлер</b> түймешігін басып, репозиторийді таңдаңыз, сосын <b>біріктіруді өңдеу</b> қойындысына қызметті қосыңыз. <b>Параметрлер > Жалпы</b> түймешігін басып, Microsoft Office онлайн серверінің URL мекен-жайын енгізіңіз.",
		admin_settings_office_online_server_enable_hover: "Office құжаттарымен жұмыс істеу үшін Office онлайн серверін пайдаланғыңыз келетіндігін көрсетіңіз.",
		admin_office_online_server_url: "Microsoft Office онлайн серверінің URL мекен-жайы",
		admin_office_online_server_url_hover: "URL мекен-жайын Office онлайн серверімен қатынаса алатын басқа бағдарламалар арқылы көрсетіңіз. URL мекен-жайының пішімі http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Тексерілген",
	    admin_office_online_server_Failed: "<b>Сәтсіз</b>",

		admin_repcfg_office_online_service_p8_hover: "Office онлайн серверінің пайдалануға арналған репозиторийін іске қосу үшін, әрбір Office бағдарламасына арналған ішкі үлгі файлын қоса аласыз. Үлгі көрсетілмесе әдепкі үлгі пайдаланылады.",	
		admin_repcfg_office_online_server_integration: "MS Office онлайн серверінің біріктірілімі",
		admin_repcfg_office_online_service_url_not_set_warning: "Office онлайн серверін қосар алдында, бірінші Microsoft Office онлайн серверінің URL мекен-жайын көрсетуіңіз керек. Параметрлер > Жалпы түймешгін басып, URL мекен-жайын енгізіңіз",
		admin_repcfg_office_online_word_template_name: "Әдепкі сөз үлгісі",
		admin_repcfg_office_online_excel_template_name: "Әдепкі Excel үлгісі",
		admin_repcfg_office_online_powerpoint_template_name: "Әдепкі PowerPoint үлгісі",
		admin_repcfg_office_online_blank_template_description: "Бұл әдепкі үлгі үлгіңізді қоспасаңыз пайдаланылады.",
		/* Edit Service settings */
		admin_icn_edit_title: "Теңшелімді өңдеу",	
	    admin_icn_edit_files_cleanup_interval: "Уақытша файлдарды тазалау интервалы (күн есебімен):",
	    admin_icn_edit_files_cleanup_interval_hover: "ICN Edit клиенты ішінде уақытша файлдарды сақтау уақыт көлемін орната аласыз.  Әдепкі уақыт көлемі - 20 күн. Ең үлкен уақыт көлемі - 20 күн. Ең кіші уақыт көлемі - 1 күн.",
	    admin_icn_edit_service_integration: "Қызмет біріктіруін өңдеу",
	    admin_icn_edit_service_integration_intro: "Өңдеу қызметі пайдаланушыларды файлдарды өздерінің компьютерлерінде орнатылған жергілікті бағдарламаларына оңай қосу немесе өңдеу үшін іске қосады.<br><br><b>Маңызды:</b> Егер өңдеу қызметін іске қоссаңыз, онда репозиторий теңшеліміңізді алдын ала анықталған санаттарды өңдемес бұрын сақтауыңыз керек.",
		admin_icn_edit_service: "Қызметті өңдеу:",
		admin_icn_edit_enable_hover: "Өңдеу қызметін қолдану үшін, сіз:<ul><li>Репозиторийдегі қызметті іске қосу</li><li>Ортаңыздағы жұмыс үстелдеріңіздегі қызметті іске қосу</li><li>IBM Content Navigator Edit тұтынушы қызметін пайдаланушы жұмыс орнына орнатыңыз</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Іске қосу",
		admin_icn_edit_disable: "Ажырату",
		admin_icn_edit_create_new_category: "Жаңа Санат",
		admin_icn_edit_delete_category: "Санатты жою",
		admin_icn_edit_edit_category: "Санатты өңдеу",
		admin_icn_edit_disable_category: "Санатты ажырату",
		admin_icn_edit_enable_category: "Санатты қосу",
		admin_icn_edit_new_category_dialog_title: "Жаңа Санат",
		admin_icn_edit_edit_category_dialog_title:"Санатты өңдеу",
		admin_icn_edit_new_category_dialog_instructions: "Құжат санаты сізге үлгілерді арнайы MIME түрлерімен өңдеу қызметі үшін байланыстыруға рұқсат береді. Мысалы, үлгілердің жиынын PDF файлдарымен бірге пайдаланушылар файлдарды IBM Content Navigator Edit тұтынушысынан қосып немесе өңдеген кезде олар қолдана алатындай етіп байланыстыра аласыз. <br><br><b>Маңызды:</b> Репозиторий теңшеліміңізді үлгілерді сіз құрған санатқа қосудың алдында сақтауыңыз керек. ",
		admin_icn_edit_edit_category_dialog_instructions: "Репозиторий теңшеліміңізді үлгілерді осы санатқа қосудың алдында сақтауыңыз керек. ",
		admin_icn_edit_delete_category_dialog_instructions: "Санатпен байланысқан осы санатты және үлгілерді жоюды қалайсыз ба?<br><br><b>Маңызды:</b> Сіздің өзгертулеріңізді репозиторийге сақтағанға дейін өзгертулеріңіз тұрақты болмайды. ",
		admin_icn_edit_category_label: "Санат: ",
		admin_icn_edit_category_discription_label:"Сипаттама: ",
		admin_icn_edit_template_column_head:"Үлгі атауы",
		admin_icn_edit_category_duplicate_error_message: "Осы идентификаторы бар санат әлдеқашан бар. ",
		admin_icn_edit_word_category_description: "Бұл санат өңдеу қызметіндегі Microsoft Word құжаттары үшін қол жетімді үлгілерді анықтайды. ",
		admin_icn_edit_excel_category_description: "Бұл санат өңдеу қызметіндегі Microsoft Excel құжаттары үшін қол жетімді үлгілерді анықтайды. ",
		admin_icn_edit_powerpoint_category_description: "Бұл санат өңдеу қызметіндегі Microsoft PowerPoint құжаттары үшін қол жетімді үлгілерді анықтайды. ",

		icn_edit_add_template_dialog_title:"${0} үлгіні қосыңыз",
		icn_edit_add_template_only_one_file_error: "Тек бір файлды таңдай аласыз.",
		icn_edit_add_template_file_type_error: "Жарамды ${0} үлгілік файлын ерекшелеуіңіз тиіс.<br><br>Таңдалған құжат ${1} MIME түрін иеленеді.<br><br>Жарамды MIME түрлері: ${2}.",
		icn_edit_change_template_dialog_title: "${0} үлгісін өңдеу",
		icn_edit_action_in_new_menu_name:"${0} Құжат",
		icn_edit_action_in_new_menu_submenu_oo_name: "Office Online бірге",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "Жұмыс үстелі бағдарламаларымен бірге",
		icn_edit_new_document_dialog_title: "Жаңа ${0} құжат",
		icn_edit_new_document_dialog_intro: "Жаңа ${0} құжатты жасаңыз және оны репозиторийге қосыңыз. Құжат таңдалған өңдеу қызметі үлгісімен жасалады.", 
		icn_edit_select_edit_service_template: "Үлгі таңдау",
		icn_edit_edit_service_template: "Қызмет үлгісін өңдеу:",
		icn_edit_new_document_category_no_templates_message:"Бұл санатта үлгілер жоқ. Осы санатқа үлгілерді қосу үшін әкімшіңізбен хабарласыңыз.",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "Класс және Рөл параметрлері",
		admin_repcfg_classes_and_roles_warning: "Үлгілерді пайдаланатын, өңдейтін және құратын рұқсаты бар пайдаланушы топтарын немесе пайдаланушыларды және кластарды көрсету үшін немесе Office қосулы қызметімен және Өңдеу қызметімен жұмыс істейтін құжаттардың жазбаларын жасаңыз.",
		admin_repcfg_classes_and_roles_click_warning: "мында басыңыз.",
		/* Edit Service settings END */
		share_no_my_email_error: "Құжатты бөлісуге қажетті электрондық пошта мекен-жайын анықтау кезінде қате орын алды.",
		share_no_my_email_error_explanation: "Жүйеге ${0} пайдаланушы идентификаторымен кірдіңіз, бірақ пайдаланушы идентификаторы электрондық пошта мекен-жайымен салыстырылмаған.",
		share_no_my_email_error_userResponse: "Жүйеге қайта кіріп көріңіз немесе басқа пайдаланушы идентификаторын пайдаланып, жүйеге кіріңіз. Егер мәселе шешілмесе, бұл қателікті жүйе әкімшіңізге хабарлаңыз.",
		share_no_my_email_error_adminResponse: "${0} пайдаланушы идентификаторы электрондық пошта мекен-жайымен салыстырылмады және ${1} жұмыс үстелі пайдаланушыларға Box бағдарламасын бөлісу қызметтеріне арналған электрондық пошта мекен-жайларын өңдеуге рұқсат бермейді.<br><br>Келесі шешімдердің бірін көріңіз:<br>Электрондық поштаны салыстыру қосылатын модулі тіркелгеніне көз жеткізіңіз.<br>emailMappingPlugin.json файлы ${0} пайдаланушы идентификаторын және пайдаланушының электрондық пошта мекен-жайын және құрастыру, теңшеу және электрондық поштаны салыстыратын қосылатын модулін тіркеуді қамтитынына көз жеткізіңіз.<br>Электрондық поштаның салыстыруы қосылатын модулін немесе FileNet P8 электрондық пошта мекен-жайының каталогын пайдаланғыңыз келмесе, бірақ оның орнына пайдаланушыларға құжатты бөліскен кезде өздерінің электрондық пошта мекен-жайларына кіруге рұқсат бергіңіз келсе, пайдаланушыларға сілтемені басқа электрондық пошта мекен-жайынан жіберуге рұқсат ету үшін, жұмыс үстелі параметрлерін өзгерте аласыз.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "жұмыс үстелінің аты",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Осы құжаттың соңғы нұсқасы бөліскен, осылайша осы құжаттың таңдалған нұсқасын бөлісе алмайсыз.",
		share_later_version_shared_error_explanation: "Алдында бөліскен құжаттың ертерек нұсқасымен бөлісе алмайсыз.",
		share_later_version_shared_error_userResponse: "Құжаттың соңғы нұсқасына сілтемені жіберу үшін, соңғы нұсқаны таңдаңыз және сосын бөлісу әрекетін пайдаланыңыз.<br><br>Құжаттың таңдалған нұқсасымен бөлісу үшін, біріншіден, құжаттың соңғы нұсқасымен бөлісуді жоюыңыз керек.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Жаңа хабарлама",
		email_from: "Келесіден:",
		email_to: "Келесіге:",
		email_cc_link: "Көшірмесі",
		email_bcc_link: "Жасырын көшірме",
		email_cc: "Көшірме:",
		email_bcc: "Жасырын көшірме:",
		email_address_invalid: "Жарамды электрондық пошта мекен-жайын енгізіңіз.",
		email_subject: "Тақырыбы:",
		email_message: "Хабар:",
		email_message_placeholder: "Хабарлама қосу",
		email_attachments: "Тіркемелер:",
		email_links: "Байланыстар:",
		email_send: "Жіберу",
		email_dont_send: "Жібермеңіз",
		email_subject_reminder: "Пәнді еске түсіруші",
		email_subject_reminder_confirm: "Бұл хабарламаны нысансыз жібергіңіз келеді ме?",
		email_missing_from_error: "электрондық хабарламаны жіберу үшін талап етілетін электрондық мекен-жайдан анықтайтын мәселе бар.",
		email_missing_from_error_explanation: "Жүйеге ${0} пайдаланушы идентификаторымен кірдіңіз, бірақ пайдаланушы идентификаторы электрондық пошта мекен-жайымен салыстырылмаған.",
		email_missing_from_error_userResponse: "Жүйеге қайта кіріп көріңіз немесе басқа пайдаланушы идентификаторын пайдаланып, жүйеге кіріңіз. Егер мәселе шешілмесе, бұл қателікті жүйе әкімшіңізге хабарлаңыз.",
		email_missing_from_error_adminResponse: "${0} пайдаланушы идентификаторы электрондық пошта мекен-жайымен салыстырылмады және ${1} жұмыс үстелі пайдаланушыларға электрондық пошта мекен-жайларын өңдеуге рұқсат бермейді.<br><br>Келесі шешімдердің бірін көріңіз:<br>Электрондық поштаны салыстыру қосылатын модулі тіркелгеніне көз жеткізіңіз.<br>emailMappingPlugin.json файлы ${0} пайдаланушы идентификаторын және пайдаланушының электрондық пошта мекен-жайын және құрастыру, теңшеу және электрондық поштаны салыстыратын қосылатын модулін тіркеуді қамтитынына көз жеткізіңіз.<br>Электрондық поштаның салыстыруы қосылатын модулін немесе FileNet P8 электрондық пошта мекен-жайының каталогын пайдаланғыңыз келмесе, бірақ оның орнына пайдаланушыларға хабараманы жіберген кезде өздерінің электрондық пошта мекен-жайларына кіруге рұқсат бергіңіз келсе, пайдаланушыларға электрондық мекен-жайды өңдеу үшін рұқсат ету үшін, электрондық пошта параметрлерін өзгерте аласыз.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "жұмыс үстелінің аты",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Құжат ашылмайды.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator қызметі IBM Content Navigator Edit тұтынушысына қосыла алмайды.",
		open_edit_document_with_native_application_error_userResponse: "IBM Content Navigator Edit тұтынушысын жұмыс үстеліңізге орнатып және бастаңыз. Содан кейін құжатты қайтадан ашуға тырысыңыз.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Құжат ашылмайды.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator қызметі IBM Content Navigator Edit тұтынушысына қосыла алмайды.",
		connect_to_the_streamline_service_error_userResponse: "IBM Content Navigator Edit тұтынушысын жұмыс үстеліңізге орнатып және бастаңыз. Содан кейін құжатты қайтадан ашуға тырысыңыз.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator бағдарламасы құжаттарды ортақ пайдалану үшін дұрыс теңшелмейді.",
		share_not_configured_error_explanation: "Жәшіктің ортақ пайдаланатын мүмкіндігі құжаттарды бөліспей тұрып дұрыс теңшелу керек.",
		share_not_configured_error_userResponse: "Әкімшіңізбен байланысып, олардан Жәшіктің ортақ пайдалану мүмкіндігін теңшеу туралы сұраңыз.",
		share_not_configured_error_adminResponse: "Төменде көрсетілген элементтер құжаттарды ортақ пайдалану алдында теңшелу керек.<ul><li>Тапсырма басқарушы қызметі әкімші құралының параметрлеріне қосылуы керек.</li><li>Тапсырма басқарушы байланысының идентификаторы репозиторийге теңшелу керек.</li><li>Ортақ пайдалану репозиторийге қосылу керек.</li><li>Жәшік репозиторийі жұмыс үстелінде ортақ пайдалану үшін таңдалу керек.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Жаңа нұсқа үшін сипат өзгерістері сақталмаған",
		checkin_cors_save_attributes_error_explanation: "Бұл нұсқа жасалған, алайда сипат өзгерістері сақталмаған. Құжат әлі де тексерілуі мүмкін.",
		checkin_cors_save_attributes_error_userResponse: "Сипаттар мәтінмәндік мәзір элементін қолдану арқылы құжат және жаңарту сипаттарын құрсаудан босатыңыз.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Жаңа құжат үшін сипат өзгерістері сақталмаған",
		add_cors_save_attributes_error_explanation: "Бұл құжат жасалған, алайда сипат өзгерістері сақталмаған.",
		add_cors_save_attributes_error_userResponse: "Сипаттар мәтінмәндік мәзір элементін қолдану арқылы сипаттарды жаңартыңыз.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Құжат ашылмайды.",		
		edit_document_using_edit_service_error_explanation: "Edit Service қызметінде құжатты ашуға мүмкін емес.",
		edit_document_using_edit_service_error_userResponse: "Әкімшіңізден Edit Service Integration қызметін жаңартуды сұраңыз.<br><br> Пайдаланушы осы құжатты өңдеу қызметінен алу керек болса, репозиторийге арналған Интеграцияны өңдеу бетіне өтіп, Қызметті өңдеу қызметін өзгерту үшін кластар тізіміне класты қосу үшін Қызмет интеграциясын өңдеуді жаңартыңыз.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Құжат ашылмайды.",		
		edit_document_is_editing_by_oos_error_explanation: "Құжат Office Online Service қызметі арқылы қолданылады.",
		edit_document_is_editing_by_oos_error_userResponse: "Office Online қызметінде құжатты редакциялау қызметінде ашпас бұрын сақтап, жабуыңыз керек.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Ресурстарды әр түрлі дереккөздер арасында ортақ пайдалану (CORS) жаңартулары",

		/* Email Settings */
		admin_email_settings: "Электрондық пошта параметрлері:",
		admin_email_settings_hover: "Пайдаланушылардың қолдануын қалайтын электрондық қызметтердің түрін көрсетіңіз. HTML-негізделген электрондық қызметті іске қосқан кезде, пайдаланушыларға электрондық мекен-жайдан өңдеу үшін рұқсат беру үшін параметрді иеленесіз. Java-негізделген электрондық қызметті іске қосуды қаласаңыз, Java қызметін қолдайтын шолғышты иеленуіңіз керек.",
		admin_email_use_service: "HTML-негізделген электрондық қызметті қолданыңыз",
		admin_email_use_applet: "Java-негізделген электрондық қызметты қолдану",
		admin_email_can_modify_from: "Электрондық мекен-жайдан өңдеу үшін пайдаланушыларға рұқсат беріңіз",
		admin_email_can_modify_from_hover: "Әдепкі параметр бойынша, электрондық пошта мекен-жайынан өңделмейді және пайдаланушысы тіркелгісін білдіретін электрондық пошта мекен-жайлары мен пайдаланушыларды салыстыру арқылы алынады.<br><br>Осы опция пайдаланушыларға электрондық хабарламаны жіберу кезінде электрондық пошта мекен-жайларын өңдеуге рұқсат беруге таңдаңыз; алайда, электрондық мекен-жайдың жарамдылығы жарамды емес.",
		admin_email_use_from_as_sender: "Электрондық хабарламаның жіберушісі ретінде электрондық мекен-жайдан қолданыңыз",
		admin_email_use_from_as_sender_hover: "Әдепкі бойынша, электрондық мекен-жайдан жарамды болатын пайдаланушының электрондық поштасы қолданылады. Сол электерондық пошта мекен-жайы бағдарлама серверіндегі CNMailSession хабарлама сценарийі арқылы анықталған. Бұл параметрді пайдаланушының электрондық поштада қолданылатын электрондық мекен-жайынан көрсету үшін таңдаңыз.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Жаңа аннотациялар",
		addAnnotationDlg_labelContents: "Мазмұндар:",
		addAnnotationDlg_labelAccess: "Қатынас:",
		addAnnotationDlg_labelPublic: "Жалпы",
		addAnnotationDlg_labelPrivate: "Жеке",
		addAnnotationDlg_labelPrivateGroup: "Топ үшін жеке",
		addAnnotationDlg_labelGroup: "Топ",
		addAnnotationDlg_labelCopiable: "Бұл аннотация басқа серверге көшіріле алады.",
		addAnnotationDlg_buttonLabel_save: "Сақтау",

		/* Skip navigation */
		skipNavigation_title_main: "Басты мазмұнға өту",
		skipNavigation_title_menu: "Шарлау түймешіктерін өткізу",
		skipNavigation_label_main: "Басты мазмұнға өту",
		skipNavigation_label_menu: "Шарлау түймешіктерін өткізу",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Топ бос орынларын басқару",
		manage_teamspace_pane_instance_hdr: "Топ аймақтары",
		manage_teamspace_pane_template_hdr: "Үлгілер",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Алдыға айналдыру",
		scroll_back: "Артқа айналдыру",

		breadcrumb_separator_open: "Түйінді ашу",
		breadcrumb_separator_close: "Түйінді жабу",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Таңдалған элемент жоқ.",

		/* eds */
		eds_url: "Сыртқы дерек қызметі URL:",
		eds_request_timeout: "Қызметтің Ұсыну Күту уақыты (секундтар):",
		eds_is_required: "EDS қол жетімді болмаған кезде, пайдаланушылардың сипаттардың мәндерін өзгертетін шараларды орындауларына жол бермеңіз",

		/* eforms */
		eform_signing_pane_welcome: "Пішімді белгілеу",
		eform_signing_button_label: "Белгі",
		eform_signing_pane_delete: "Қолды жою",
		eform_signing_button_label_delete: "Жою",

		xtplugin_server_label: "IBM FileNet Workplace XT сервер URL мекен-жайы",
		xtplugin_server_hover: "IBM FileNet Workplace XT бағдарламасы орналасқан сервердің URL мекен-жайын енгізіңіз, мысалыhttp://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "IBM eClient сервер URL мекен-жайы",
		ecplugin_server_hover: "IBM eClient бағдарламасы орналасқан сервердің URL мекен-жайын енгізіңізhttp://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Элементтердің үлкен санындағы әрекеттер ұзақ уақыт алуы мүмкінү Жалғастырғыңыз келеді ме?",
		large_number_actions_continue_button: "Жалғастыру",

		large_items_actions_confirmation_question: "Үлкен элементтердегі әрекеттер ұзақ уақыт алуы мүмкін. Жалғастырғыңыз келеді ме?",

		viewer_editproperties_title: "Растау",
		viewer_editproperties_title_warning: "Ескерту",
		viewer_editproperties_save: "Сақтау",
		viewer_editproperties_next: "Келесі",
		viewer_editproperties_reset: "Қайта орнату",
		viewer_editproperties_reset_hover: "Кез келген сақталмаған дерек алдыңғы сақталған мәндерге қайта орнатылады",
		viewer_editproperties_saveandgetnext: "Сақтап және келесісін алыңыз",
		viewer_editproperties_saveandgetnext_hover: "Өзгертулерімді сақтағаннан кейін келесі құжатты автоматты түрде алу",
		viewer_editproperties_prompt_save_changes: "Келесі құжаттың сипаттарын өзгерттіңіз<br>${0}<br><br>Өзгертулеріңізді сақтағыңыз келеді ме?",
		viewer_editproperties_prompt_discard_changes: "Келесі құжаттың сипаттарын өзгерттіңіз<br>${0}<br><br>Алайда, сипаттардың бірі немесе бірнешеуі жарамсыз мәнді иеленеді, сондықтан өзгертулер сақталмайды. Сіз не жарамсыз мәндерді түзетесіз, не өзгертулеріңізді жоясыз.<br>Сипаттар қойындысында көрсетілген жарамсыз мәндерді түзеткіңіз келеді ме?",
		viewer_comments_prompt_discard_changes: "Құжаттарды өзгертіңіз. Өзгертулеріңізді сақтағыңыз келеді ме?",
		viewer_notelogs_prompt_discard_changes: "Ескерту журналдарын өзгерттіңіз. Өзгертулеріңізді сақтағыңыз келеді ме?",
		social_collaborated_version: "Нұсқа: ${0}",
		social_link_label: "Кім...",

		// social comments
		comments: "Аңғартпалар",
		comments_add_hint: "Аңғартпаларыңызды қосу үшін Еnter түймешігін басыңыз.",
		comments_hint: "Аңғартпаларыңызды енгізіңіз.",
		comments_label: "Аңғартпаларыңызды сақтау үшін Enter немесе Tab түймешіктерін басыңыз. Бас тарту үшін Esc түймешігін басыңыз.",
		comments_delete_confirmation: "Таңадалған аңғартпаны жойғыңыз келеді ме?",
		comments_number: "Аңғартпалар: ${0}",
		comments_save_new: "Құжаттарды өзгертіңіз. Өзгертулерді сақтамай, терезені жапқыңыз келеді ме?",

		notelogs: "Ескертпелер журналы",
		notelogs_download: "Жүктеу",
		notelog_modify: "Өзгертулерді Сақтау",
		notelog_edit: "Түйін журналын өңдеу",
		notelog_create_newVersion: "Жаңа түйін журналы нұсқасын құрыңыз",
		notelog_add_hint: "Аңғартпаларыңызды енгізіп және қосу үшін Enter түймешігін басыңыз.",
		notelog_hint: "Жол аралығы үшін Shift+Enter пәрменін басыңыз",
		notelog_add_placeholder: "Аңғартпаны түйін журналына қосу үшін Enter түймешігін басыңыз.",
		notelog_save_new: "Жазба журналын өзгерттіңіз. Өзгертулерді сақтамай, терезені жапқыңыз келеді ме?",

		// P8 markings related
		cannot_remove_markings: "Белгілеу мәнін(дерін) жою үшін рұқсатыңыз жоқ: {0}",

		// download count
		downloadcount: "Жүктеулер: {0}",
		downloadcount_single: "1 жүктеп алу",
		downloadcount_multiple: "{0} жүктеп алулар",
		downloadcount_none: "Ешкім мұны әлі жүктеген жоқ",

		// recommendations
		recommendations: "Ұқсастар: {0}",
		recommendations_recommend: "Осы сияқты",
		recommendations_unrecommend: "Оған ұқсамайтын",
		recommendations_you: "Сіз осыны ұнаттыңыз",
		recommendations_you_and_another: "Сіз және 1 басқа адам осыны ұнатты",
		recommendations_you_and_others: "Сіз және {0} басқалары осыны ұнатты",
		recommendations_another: "1 адам осыны ұнатты",
		recommendations_others: "{0} адам осыны ұнатты",
		recommendations_none: "Мұны әлі ешкім ұнатқан жоқ",

		// tags
		tags: "Тегтер: ${0}",
		tags_delete: "${0} жою",
		tags_none: "Көрсету үшін тегтер жоқ.",
		tags_add: "Тегтерді қосу:",
		tags_hint: "Тегтерді қосу үшін Enter пернесін басыңыз.",
		tags_hover_help: "Бірдей тегі бар құжаттар үшін іздеуде қолданылатын тегтер тізімін немесе тегті көрсетіңіз. Сіз үтір (,), нүктелі үтір (;) немесе тегтерді ажырату үшін бос орынды қолдана аласыз.",
		tags_hover_help_box: "Бірдей тегі бар құжаттар үшін іздеуде қолданылатын үтірмен ажыратылған тегтер тізімін немесе тегті көрсетіңіз.",
		tags_no_access: "Тегтерді қосу үшін тиісті рұқсатыңыз жоқ.",

		//task scheduler pane
		taskPane_tooltip: "Үндестірілмеген Тапсырмалардың Көрінісін ашу",
		taskPane_tree: "Тапсырма қойындысының шарлау тармағы",
		taskPane_allTasks: "Барлық тапсырмалар",
		taskPane_scheduledTasks: "Жоспарланған тапсырмалар",
		taskPane_recurringTasks: "Қайталанатын тапсырмалар",
		taskPane_inProgressTasks: "Орындалудағы тапсырмалар",
		taskPane_completedTasks: "Аяқталған тапсырмалар",
		taskPane_failedTasks: "Сәтсіз тапсырмалар",
		taskPane_disabledTasks: "Ажыратылған Тапсырмалар",
		taskPane_statusScheduled: "Жоспарланған",
		taskPane_statusInProgress: "Орындалуда",
		taskPane_statusCompleted: "Аяқталды",
		taskPane_statusFailed: "Сәтсіз",
		taskPane_statusPaused: "Тоқтатылған",
		taskPane_noItemSelected: "Таңдалған элемент жоқ",
		taskSchedulerPane_scheduleInformation: "Кестенің мәліметі",
		taskSchedulerPane_loginInformation: "Кіру мәліметі",
		taskSchedulerPane_startImmediately: "Жылдам бастау",
		taskSchedulerPane_recurrence: "Қайталау",
		taskSchedulerPane_interval: "Аралық",
		taskSchedulerPane_scheduleReport: "Жоспар есебі",
		taskSchedulerPane_nameHoverHelp: "Тапсырма атын енгізу",
		taskSchedulerPane_descriptionHoverHelp: "Тапсырмаға сипаттаманы енгізіңіз. Сипаттама тапсырмаларды ажыратуға көмектеседі.",
		taskSchedulerPane_startTimeHoverHelp: "Тапсырманың орындалуын қалаған кезде көрсетіңіз. Тапсырманы қазір орындау үшін, Тездетіп Бастауды таңдаңыз.",
		taskSchedulerPane_recurrenceHoverHelp: "Тапсырманы қайталау негізінде орныдалуын жоспарлай аласыз.",
		taskSchedulerPane_endTimeHoverHelp: "Тапсырманың орындалуын тоқтатқыңыз келгенде көрсетіңіз. Тапсырма жоспарланған бастау уақытында жоспарланған аяқтау уақытына орындалады.",
		taskSchedulerPane_usernameHoverHelp: "Тапсырмаларды қайталау үшін пайдаланушы атын қызметті растау үшін тапсырманың орындалуы кезінде енгізіңіз.",
		taskSchedulerPane_passwordHoverHelp: "Тапсырмаларды қайталау үшін көрсетілген пайдаланушының құпия сөзін қызметті растау үшін тапсырманың орындалуы кезінде енгізіңіз",
		taskSchedulerPane_notification: "Хабарландыру",
		taskSchedulerPane_emailAddress: "Электрондық Пошта мекен-жайы",
		taskSchedulerPane_emailAddressHoverHelp: "Тапсырманың күйі туралы хабарландыруларды алғыңыз келген электрондық поштаның ммекен-жайын енгізіңіз.",
		taskSchedulerPane_intervalHoverHelp: "Қайталау тапсырмасы орындалатын уақыт ұзындығын көрсетіңіз. Аралықты сағаттар, күндер, апталар немесе айлар ретінде орната аласыз.",
		taskSchedulerPane_scheduledStartTime: "Жоспарланған бастау уақыты",
		taskSchedulerPane_startTime: "Басталу уақыты",
		taskSchedulerPane_title: "Жоспар",
		taskSchedulerPane_runNow: "Қазір іске қосу",
		taskSchedulerPane_runOnce: "Бір рет іске қосу",
		taskSchedulerPane_runAtSchedule: "Кестеде орындау",
		taskSchedulerPane_repeats: "Қайталайды",
		taskSchedulerPane_repeatsEvery: "Әр біреуін қайталайды",
		taskSchedulerPane_hourly: "Сағат сайын",
		taskSchedulerPane_daily: "Күн сайын",
		taskSchedulerPane_weekly: "Апта сайын",
		taskSchedulerPane_monthly: "Ай сайын",
		taskSchedulerPane_yearly: "Жыл сайын",
		taskSchedulerPane_sunday: "Сб",
		taskSchedulerPane_monday: "Дс",
		taskSchedulerPane_tuesday: "Бс",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "Бс",
		taskSchedulerPane_friday: "Жм",
		taskSchedulerPane_saturday: "Сб",
		taskSchedulerPane_starting: "Басталу күні",
		taskSchedulerPane_after: "Кейін",
		taskSchedulerPane_ending: "Аяқталу күні",
		taskSchedulerPane_times: "Уақыт(с)",
		taskSchedulerPane_days: "күн(дер)",
		taskSchedulerPane_hours: "күндегі сағат(тар)",
		taskSchedulerPane_interval: "Аралық",
		taskSchedulerPane_endingDays: "Аяқтау (күндерде)",
		taskSchedulerPane_never: "Ешқашан",
		taskSchedulerPane_categorization: "Санаттау",
		taskSchedulerPane_scheduleTask: "Жоспар тапсырмасы",
		taskInformationPane_details: "Мәліметтер",
		taskInformationPane_errors: "Қателер",
		taskInformationPane_taskInstances: "Тапсырма даналары",
		taskInformationPane_audits: "Тексерулер",
		taskInformationPane_results: "Нәтижелер",
		asyncTasks: "Үндестірілмеген Тапсырмалар",

		//entry template pane
		search_all_entry_templates: "Барлық енгізу үлгілерін іздеу.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Толық торапты көрі",
		mobilesite: "Мобильді торапты көру",
		profile: "Профильді басқару",
		office_template: "Office үлгісі:",
		select_office_template: "Офис үлгісін таңдау",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Таңдалған құжаттар қарау құралы ішінде біріктіру және бөлу әрекеттерімен ашылуы мүмкін емес.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "PDF және TIFF құжаттарына теңшелген қарау құралы біріктіру және бөлу әрекеттеріне қолдау көрсетпейді.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Әкімшіңізді Daeja ViewONE Virtual қарау құралы сияқты, біріктіру және бөлу әрекетіне қолдау көрсететін PDF және TIFF құжаттарын қарау құралын теңшеуді сұраңыз.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Таңдалған PDF құжаттары қарау құралы ішінде біріктіру және бөлу әрекеттерімен ашылуы мүмкін емес.",
		document_builder_pdf_unsupported_viewer_error_explanation: "PDF құжаттарына теңшелген қарау құралы біріктіру және бөлу әрекеттеріне қолдау көрсетпейді.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Әкімшіңізді Daeja ViewONE Virtual қарау құралы сияқты, біріктіру және бөлу әрекетіне қолдау көрсететін PDF құжаттарын қарау құралын теңшеуді сұраңыз.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Таңдалған TIFF құжаттары қарау құралы ішінде біріктіру және бөлу әрекеттерімен ашылуы мүмкін емес.",
		document_builder_tiff_unsupported_viewer_error_explanation: "TIFF құжаттарына теңшелген қарау құралы біріктіру және бөлу әрекеттеріне қолдау көрсетпейді.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Әкімшіңізді Daeja ViewONE Virtual қарау құралы сияқты, біріктіру және бөлу әрекетіне қолдау көрсететін TIFF құжаттарын қарау құралын теңшеуді сұраңыз.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Таңдалған құжаттар қарау құралы ішінде біріктіру және бөлу әрекеттерімен ашылуы мүмкін емес.",
		document_builder_unsupported_documents_error_explanation: "Біріктіру және бөлу әрекеттері тек PDF және TIFF құжаттарымен ғана істейді.",
		document_builder_unsupported_documents_error_userResponse: "Қолдау көрсетілетін құжаттарды таңдаңыз және әрекеттті қайталаңыз.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Таңдалған құжаттардың кейбірі қарау құралы ішінде біріктіру және бөлу әрекеттерімен ашылуы мүмкін емес.",
		document_builder_some_unsupported_documents_error_explanation: "Біріктіру және бөлу әрекеттері тек осы репозиторийден ашылған PDF және TIFF құжаттарымен ғана істейді.",
		document_builder_some_unsupported_documents_error_userResponse: "Қолдау көрсетілетін құжаттар қарау құралында ашылады.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Өзгертілген мазмұн ішінде тексеру кезінде қателік орын алды.",
		document_builder_checkin_failed_explanation: "Қараушы өзгертілген мазмұн ішінде тексеру кезінде қате жауабын алды.",
		document_builder_checkin_failed_userResponse: "Жүйе әкімшіңізді веб бағдарламасы серверінің журнал файлдарын қарауды сұраңыз.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Құжат ашылмайды.",
		no_viewer_to_view_error_explanation: "Жүйелік әкімші бұл құжат үшін көруді құрсаулады. Егер бұл құжатқа қатынас орнату қажет болса, оны жүктей аласыз.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Мазмұнды жасау мүмкін болмады.",
		document_build_failed_userResponse: "Қараушы журнал файлдарын сараптауды жүйе әкімшіңізден сұраңыз.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Құжатты Біріктіру және Бөлу режимінде ашу мүмкін болмады.",
		document_builder_open_failed_userResponse: "Қараушы журнал файлдарын сараптауды жүйе әкімшіңізден сұраңыз.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Жүйе Біріктіру және Бөлу режиміне ауыса алмады.",
		document_builder_switch_failed_userResponse: "Қараушы журнал файлдарын сараптауды жүйе әкімшіңізден сұраңыз.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Құжаттар",
		print_service_page_setup_tab_title: "Бет параметрлері",
		print_service_OD_print_tab_title: "Принтер параметрлері",
		print_service_status_merging: "Құжаттар біріктірілуде...",
		print_service_status_converting: "Құжаттар түрленуде...",
		print_service_status_formatting: "Басып шығаруға арналған құжат пішімделуде...",
		admin_print_service_maximum_number_to_print: "Басып шығаруға рұқсат етілген ең көп құжаттар саны:",
		admin_print_service_maximum_size_to_print: "Басып шығаруға рұқсат етілген деректердің ең үлкен саны (МБ):",
		admin_print_service_maximum_number_to_print_hover_help: "Пайдаланушылар бір уақытта басып шығара алатын құжаттардың ең үлкен санын көрсетіңіз. Әдепкі ең үлкен сан 50. Егер сіз басып шығаруды құжаттардың саны бойынша шектеуді қаламасаңыз, осы шекті 0 мәніне орнатыңыз",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Шектеу:</b> Бұл параметр, IBM Content Manager OnDemand бағдарламасында қолданылмайды.<br/><br/>IBM Daeja ViewONE басып шығару қызметін пайдаланып басып шығаруға болатын деректердің ең үлкен мөлшерін көрсетіңіз.<br /><br />Таңдалған әрбір құжаттың жалпы мөлшері осы сомадан артық болмауы керек. <br/><br/>Әдепкі шектеу - 200 MB. Шектеудің 200 MB-тан жоғары орнатылымы, жүйе өнімділігіне әсерін тигізеді. Егер құжаттың өлшемі бойынша басып шығаруды шектегіңіз келмесе, осы шегін 0 мәніне орнатыңыз ",
		// error printing
		print_service_error_printing: "Басып шығару кезінде қате пайда болды.",
		print_service_error_printing_userResponse: "Жүйе әкімшісінен басып шығару қызметінің журнал файлдарын қарап шығуын сұраңыз.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Таңдалған құжаттар басып шығару үшін тым үлкен",
		print_service_max_content_error_explanation: "Таңдалған құжаттар ${0} МБ деректерінің шегінен асады.",
		print_service_max_content_error_userResponse: "Аз құжаттарын таңдаңыз немесе кішірек құжаттарды таңдап, қайта басып шығарыңыз. Сондай-ақ, осы жұмыс үстелінен бір уақытта басып шығаруға болатын элементтердің барынша көп мөлшерін арттыру үшін жүйе әкімшісіне хабарласуға болады.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Бөлшектерді басып шығару мүмкін емес.",
		print_service_max_number_selected_error_explanation: "Сіз бір уақытта ${0} элементке дейін басып шығара аласыз. Сіз ${1} элементтерін басып шығарғыңыз келеді.",
		print_service_max_number_selected_error_userResponse: "Бірнеше элементтерді таңдап және элементтерді қайтадан басып шығаруға тырысыңыз. Сіз сонымен қатар әкімші жүйеңізге жұмыс үстеліңізге бір уақытта басып шығара алатын элементтердің ең үлкен санын ұлғайтуды сұрай аласыз. ",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


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
		welcome_user: "Добре дошли, ",
		about: "Относно",
		all: "Всички",
		help: "Помощ",
		user_session: "Потребителска сесия",
		user_session_for: "Потребителска сесия за ${0}",
		user_session_for_with_container: "Потребителска сесия за ${0} (${1})",
		tools: "Инструменти",
		login: "Вход",
		logout: "Изход",
		search: "Търсене",
		saved_searches: "Записани търсения",
		content_analytics: "Анализиране на съдържание",
		reset: "Възстановяване",
		reset_hover: "Всички незаписани данни във всички раздели ще бъдат нулирани до предходно записаните стойности.",
		reset_default: "Изчистване на всички",
		reset_default_hover: "Изчиства полето за текущ етикет на всички раздели.",
		locale: "Езикова променлива:",
		up: "Нагоре",
		down: "Надолу",
		restore: "Възстановяване",
		maximize: "Увеличаване",
		values_label: "Стойности",
		value_label: "Стойност:",
		path_label: "Път:",
		new_label: "Ново:",
		back_label: "Назад",
		clear: "Изчистване",
		set: "Набор...",
		browse: "Преглед",
		work: "Работа",
		connect: "Свързване",
		documents: "Документи:",
		copyright: "Copyright 2012, 2016 IBM Corp. IBM, и логото на IBM са търговски марки на IBM Corporation, регистрирани в много юрисдикции по света. Java и всички базирани на Java търговски марки и лога са търговски марки или регистрирани търговски марки на Oracle и/или нейните филиали. Технологията Oracle Outside In, включена тук, е предмет на лиценз за ограничена употреба и може да бъде използвана само във връзка с това приложение. Тази програма е лицензирана според условията на лицензното споразумение, придружаващо програмата.  Това лицензно споразумение може да се намира в програмна директория или библиотека, идентифицирана като \"License\" или \"Non_IBM_License\", ако това е приложимо, или предоставено като отпечатано лицензионно споразумение. Моля, прочетете внимателно това споразумение, преди да използвате програмата. Като използвате програмата, Вие приемате тези условия. ",
		edit: "Редактиране",
		cancel: "Отказ",
		close: "Затваряне",
		close_all: "Затваряне на всички раздели",
		close_others: "Затваряне на другите раздели",
		ok: "OK",
		yes: "Да",
		no: "Не",
		open: "Отворен",
		refresh: "Обновяване",
		refresh_cabinets: "Обновяване на всички кабинетни файлове",
		delete_text: "Изтриване",
		export_config: "Експортиране на конфигурация",
		description: "Описание",
		true_label: "Вярно",
		false_label: "False",
		error: "Грешка",
		error_reference_hover: "Потърсете повече информация за тази грешка на адрес www.ibm.com.",
		url_label: "URL адрес",
		default_label: "По подразбиране",
		ibm_label: "IBM",
		light_label: "Светло",
		dark_label: "Тъмно",
		save: "Запазване",
		saveAs: "Запазване като...",
		save_and_close: "Запазване и затваряне",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Няма",
		Name: "Име",
		"${NAME}": "Име",
		mime_type: "MIME тип",
		mime_type_contains_label: "MIME типът съдържа",
		mime_type_header: "MIME тип",
		mime_type_icon: "Икона за MIME тип",
		casesearch: "Казус",
		item: "Елемент",
		no_mime_type: "Този елемент не съдържа съдържание.",
		items_selected: "${0} избрани елемента.",
		requestor: "Заявено от",
		scheduledStartTime: "Насрочен начален час",
		isRecurring: "Се повтаря",
		weeks: "Седмици",
		days: "Дни",
		hours: "Часа",
		endTime: "Краен час",
		username: "Потребителско име",
		password: "Парола",
		serverURL: "URL адрес на сървър",
		enable: "Активиране",
		disable: "Деактивиране",
		finish: "Готово",
		previous: "Назад",
		next: "Напред",
		schedule: "График",
		removeFromThisList: "Премахване от този списък",
		status: "Състояние",
		scheduledEndTime: "Насрочен краен час",
		type: "Тип",
		mode: "Режим",
		startTime: "Начален час",
		createdBy: "Създадено от",
		nextScheduledTime: "Следващ насрочен час",
		id: "Идентификатор",
		duration: "Продължителност",
		repeatCycle: "Честота",
		taskTypeName: "Тип на задачата",
		to: "към",
		filter: "Филтър:",
		error_message: "Съобщение за грешка",

        file_type: "Тип документ",
        word_template_name: "Име на шаблон в Word",
        excel_template_name: "Име на шаблон в Excel",
        powerpoint_template_name: "Име на шаблон в PowerPoint",
        template_description: "Описание на шаблон",
        action_add_template: "Добавяне",
        action_change_template: "Редактиране",      
        action_edit_template_properties: "Свойства",
        add_presentation_template: "Добавяне на шаблон на презентация",
    	add_spreadsheet_template: "Добавяне на шаблон на електронна таблица",
    	add_doc_template: "Добавяне на шаблон на документ",    	
    	file_type_doc_hover: "Трябва да посочите валиден файл на шаблон на документ за обработка на текст.<br><br>Валидни видове MIME: ${0}",
    	file_type_doc_error: "Трябва да посочите валиден файл на шаблон на документ за обработка на текст.<br><br>Вид MIME на избрания документ: ${0}<br><br>Валидни видове MIME: ${1}",
    	file_type_presentation_hover: "Трябва да посочите валиден файл на шаблон за презентация.<br><br>Валидни видове MIME: ${0}",
    	file_type_presentation_error: "Трябва да посочите валиден файл на шаблон за презентация.<br><br>Вид MIME на избрания документ: ${0}<br><br>Валидни видове MIME: ${1}",
    	file_type_spreadsheet_hover: "Трябва да посочите валиден файл на шаблон за електронна таблица.<br><br>Валидни видове MIME: ${0}",
    	file_type_spreadsheet_error: "Трябва да посочите валиден файл на шаблон за електронна таблица.<br><br>Вид MIME на избрания документ: ${0}<br><br>Валидни видове MIME: ${1}",
    	office_online_only_one_template_error: "Можете да изберете само един файл.",
    	change_presentation_template: "Редактиране на шаблон на презентация",
    	change_spreadsheet_template: "Редактиране на шаблон на електронна таблица",
    	change_doc_template: "Редактиране на шаблон на документ",
    	change_button: "Редактиране",
	    new_document_dialog_doc_title: "Нов документ",
	    new_document_dialog_presentation_title: "Нова презентация",
	    new_document_dialog_spreadsheet_title: "Нова електронна таблица",
	    new_document_dialog_title_label: "Заглавие:",
	    new_document_dialog_title_hover: "Въведете заглавие за този документ.",
	    new_document_dialog_title_missing_message: "Трябва да посочите заглавие.",
	    office_online_save_before_adding_templates_title: "Запазване на промените в хранилището",
	    office_online_save_before_adding_templates_error: "Не можете да добавите шаблони за Office докато не запазите промените, които сте направили в хранилището. Щракнете върху <b>Запазване и затваряне</b> и след това отворете повторно хранилището, за да добавите шаблоните за Office.",
	    copy_to_OOS_dialog_doc_title: "Нов документ",
	    office_online_checkin_cancelcheckout_message: "Този документ се редактира в Microsoft Office Online. Можете да влезете в документа или да отмените вписването, докато той е отворен в Microsoft Office Online.",
	    new_document_classification: "Класификация:",
	    new_document_classification_help: "Възстановете класа, свойствата и папката на родител, ако тя съществува, на документа източник. Когато добавяте документ чрез шаблон за въвеждане, шаблонът за въвеждане на документ източник ще бъде избран автоматично, ако той съществува. Свойствата на документа източник се използват като стойностите по подразбиране на документа източник, но папката и класът, указани в шаблона за въвеждане, се запазват.",
		new_document_classification_use_source_document: "Използвайте документ източник:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Тип икона ${0}",
		repository_name_and_type: "Име и тип ${0}",
		select_class_label: "Избор на ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Подробен изглед",
		detail_view_button: "Подробности",
		magazine_view_button_tooltip: "Изглед на списание",
		magazine_view_button: "Списание",
		filmstrip_view_button_tooltip: "Изглед на филмова лента",
		filmstrip_view_button: "Филмова лента",

		magazine_view_show: "Покажи в изглед на списание",
		detail_view_show: "Покажи в подробен изглед",

		total_count_item: "елемент",
		total_count_items: "елементи",
		total_count_more_items: "Повече от ${0} елемента",

		extension_changed: "Разширението на избрания файл не съответства на това на оригинала.  Изберете различен файл.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Избраният визуализатор не поддържа всички типове файлове. Ако запазите това съпоставяне на визуализатора, е възможно да се натъкнете на проблеми при преглеждането на документите. Препоръчва се да изберете визуализатор, който поддържа всички типове файлове, когато е избрана опцията Всички типове файлове.<br><br><b>Съвет:</b> Посочените по-долу визуализатори поддържат всички типове файлове:<ul><li>Applet viewer</li><li>AJAX viewer</li><li>HTML конвертиране</li><li>PDF конвертиране</li><li>Уеб браузър</li></ul>",
		file_type_any: "Всички типове файлове",
		file_type_any_hover: "Изберете тази опция, ако желаете да използвате избрания визуализатор, за да преглеждате всички документи, независимо от типа файл. Тази опция се поддържа за следните визуализатори:<br><br><ul><li>Applet viewer</li><li>AJAX viewer</li><li>HTML конвертиране</li><li>PDF конвертиране</li><li>Уеб браузър</li></ul><br><br><b>Забележка:</b> ако желаете да използвате конкретни визуализатори през повечето време, всички съпоставяния, които сте създали и които използват тази опция, трябва да се преместят в края на картата на визуализатора. ",
		file_type_input: "Нов тип файл:",

		mime_type_input: "Нов MIME тип:",
		mime_type_input_invalid: "Новият MIME тип не може да съдържа следните символи: ,",
		mime_type_available: "Налични MIME типове",
		mime_type_selected: "Избрани MIME типове",
		file_type_input: "Нов тип файл:",
		file_type_input_invalid: "Новият тип файл не може да съдържа следните символи: ,",
		file_type_available: "Налични типове файлове",
		file_type_selected: "Избрани типове файлове",
		file_type_header: "Файлов тип",
		viewer: "Визуализатор:",
		viewer_viewer: "Визуализатор",
		viewer_view: "Изглед",
		viewer_preview: "Визуализация",
		viewer_merge_and_split: "Сливане и разделяне",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Само за предварителен преглед",
		preview_only_label: "(предварителен преглед)",
		preview_only_hover: "Съпоставянето на този визуализатор ще се използва само когато потребителят щракне върху <b>Предварителен преглед</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Това хранилище не поддържа преглеждане. Изберете друго хранилище.",

		repository_community_teamspace_message: "Вече има друго хранилище, което е обозначено като библиотечно хранилище на общността. Ако желаете да продължите да използвате съществуващото хранилище като библиотечно хранилище на общността, изберете <b>Не</b>, преди да запишете промените, за да не допуснете съществуващото хранилище да бъде заменено от настоящото хранилище.",

		favorites_empty: "Все още нямате предпочитани елементи.",
		syncItems_empty: "Все още нямате синхронизирани файлове.",

		root_folder_id: "Идентификатор на главна папка",
		unified_searches: "Търсения в множество хранилища:",
		max_results: "Брой резултати:",
		direct_retrieve_enabled: "Директно извличане:",
		itemTypesToDisplay: "Типове елементи за показване:",
		allItemTypes: "Всички типове елементи",
		include_attr_group_name: "Описания на група атрибути в имената за показване на атрибутите:",
		admin_repcfg_include_attr_group_name_hover: "По подразбиране описанието на групата атрибути се включва в имената на атрибутите в групата. Това помага на потребителите да виждат към коя група атрибути принадлежи даден атрибут, когато работят с атрибути.<br>Например потребителите може да видят следното име за атрибут от група атрибути: Настройки на документи. Тип документ.<br><br>Ако деактивирате тази опция, само описанието на атрибута ще бъде използвано като име на атрибута от групата.<br>Например потребителите ще видят следното име: Тип документ.<br><br>Без описанието на група атрибути потребителите може да не могат да разберат дали Тип документ е отделният атрибут или атрибут от група атрибути.",
		documentItemTypesOnly: "Само типове елементи за модели на документи",
		object_store: "Символично име на хранилище за обекти:",
		object_store_display_name: "Показвано име на хранилище за обекти:",
		teamspaceUpgradeMsg: "Вашите екипни пространства ще се актуализират, когато запишете конфигурацията на хранилището. Ако имате множество екипни пространства, актуализацията може да отнеме няколко минути.",
		synchUpgradeMsg: "Модулът за синхронизиране на това хранилище ще се актуализира, когато запишете конфигурацията на хранилището.",
		protocol: "Протокол:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "Идентификатор на CMIS хранилище:",
		cmis_url: "URL адрес на документ за услуга за обвързване CMIS AtomPub:",
		trace_level: "Проследяване на ниво",
		trace_dir: "Проследяване на директория",
		temp_dir: "Временна директория",
		show_document_location: "Показване на местоположението на документа",
		max_folders: "Максимум папки",
		afp_conversion: "AFP конвертиране",
		line_conversion: "Конвертиране на ред данни",
		max_hits: "Максимум попадения",
		folder_search_expresssion: "Израз за търсене в папка",
		max_item_types: "Максимум типове елементи",
		max_worklists: "Максимум работни списъци",
		update_storage_collection: "Актуализиране на събирането за хранилище",
		include_mime_types_in_search_results: "Включване на MIME типове в резултати от търсене",
		object_type: "Тип обект",
		object_type_document: "Документи",
		object_type_folder: "Папки",
		file_label: "Файл:",
		plugin_jarfile_path_label: "Път на JAR файл:",
		plugin_classfolder_path_label: "Път на класов файл:",
		plugin_classname_label: "Име на клас:",
		plugin_id_label: "Идентификатор на плъгин:",
		class_label: "Клас",
		configuration: "Конфигурация",
		connect_repository: "Свързване...",
		server_type: "Тип сървър",
		timeout_in_seconds: "Време на изчакване (в секунди):",
		default_search_template: "Търсене по подразбиране",
		search_filtered_properties: "Подлежащи на търсене свойства",
		property_contains_label: "Свойството съдържа",
		class_contains_label: "Класът съдържа",
		search_filtered_operators: "Оператори за търсене",
		default_search_results: "Резултати от търсене",
		data_type: "Тип данни",
		status_bar: "Лента на състоянието",
		operators_for: "Оператори за:",
		currentUser: "Текущ потребител",
		nameContains: "Името съдържа",
		searchFor: "Търсене на",
		server_autentication: "Сървърно удостоверяване (OAuth 2.0 с JWT)",
		standard_authentication: "Стандартно удостоверяване (3-странно OAuth2.0)",
		developer_authentication: "Удостоверяване на разработчик",
		enterprise_id: "Идентификатор на предприятие:",
		public_key_id: "Идентификатор с публичен ключ:",
		private_key_path: "Пътека към файл с личен ключ:",
		server_user_email: "Имейл на потребител на сървър",

		filter_builder_tooltip: "Определяне на филтър",

		// Launch bar
		launchbar_home: "Отваряне на Начало",
		launchbar_favorites: "Отваряне на Предпочитания",
		launchbar_browse: "Отваряне на изглед за преглеждане",
		launchbar_browse_popup: "Отваряне на изскачащ списък за преглеждане",
		launchbar_search: "Отваряне на изглед за търсене",
		launchbar_search_popup: "Отваряне на изскачащ списък за търсене",
		launchbar_teamspaces: "Отваряне на изглед за екипни пространства",
		launchbar_teamspaces_popup: "Отваряне на изскачащ списък за екипни пространства",
		launchbar_work: "Отваряне на работен изглед",
		launchbar_work_popup: "Отваряне на изскачащ списък за работа",
		launchbar_entry_templates: "Отваряне на изглед за входни шаблони",
		launchbar_entry_templates_popup: "Отваряне на изскачащ списък за входни шаблони",
		launchbar_admin: "Отваряне на изглед за администриране",

		admin_sync_server: "Услуги за синхронизиране",
		admin_settings: "Настройки",
		admin_interface_text: "Етикети",
		admin_interface_text_desktop: "Работен плот:",
		admin_desktops: "Работни плотове",
		admin_repositories: "Хранилища",
		admin_mobile: "Мобилни",
		admin_menus: "Менюта",
		admin_reason_codes: "Причини за редакция",
		admin_plugins: "Плъгини",
		admin_plugins_state_enabled: "Активиран плъгин",
		admin_plugins_state_disabled: "Деактивиран плъгин",
		admin_plugins_version: "Версия:",
		admin_plugins_version_heading: "Версия",
		admin_plugins_icon: "Икона на плъгин",
		admin_viewer_mapping_icon: "Икона за съпоставяне на визуализатор",
		admin_viewer_defs: "Карти на визуализатор",
		admin_viewer_dialog_title: "Съпоставяне",
		admin_viewer_dialog_new_title: "Ново съпоставяне",
		admin_viewer_dialog_instructions: "Съпоставянето указва кой визуализатор да се използва за файловете в хранилището. Можете да създадете множество съпоставяния, за да укажете различни визуализатори за различни типове файлове. Можете да използвате или MIME тип, или файлово разширение, за да определите преобразуване. Преобразуванията с файлови разширения ще бъдат преобразувани на имена на документи. Например, преобразуване с файлов тип, зададен на gif, ще бъде преобразувано на имена на документи, които завършват с разширение .gif",
		admin_desktop_viewer_defs: "Карта на визуализатор:",
		admin_desktop_viewer_defs_hover: "Картата на визуализатора указва кой визуализатор да се използва, за да се отварят различните типове документи в хранилището.<br><br>Можете да създавате нови карти на визуализатори в раздела <b>Карти на визуализатори</b> на инструмента за администриране.",
		admin_desktops_used: "Използвано в работни плотове",
		admin_desktop_additional_settings: "Допълнителни настройки:",
		admin_default_desktop: "Задаване като работен плот по подразбиране",
		admin_default_desktop_header: "Работен плот по подразбиране",
		admin_layout_tab_title: "Оформление",
		admin_desktop_icon: "Икона на работен плот",

		// Themes
		admin_themes: "Теми",
		admin_theme_list_instructions: "Можете да създадете тема, за да направите персонализирането на уеб клиента по-лесно за своята организация. Можете да създадете множество теми, ако трябва да използвате различни цветове, шрифтове или логота за различните работни плотове в своята среда.<br><br>След като създадете тема, можете да я приложите към работния плот, като конфигурирате темата в раздела <b>Облик</b> на работния плот.",
		admin_theme_instructions: "Можете да създадете тема, за да контролирате цветовете и шрифтовете, които се показват в уеб клиента. Освен това можете да използвате темата, за да промените логото, името на приложението и текста за авторски права, които се показват в регистъра в страницата и в банера.",
		admin_theme_heading: "Тема: <b>${0}</b>",
		admin_new_theme: "Нова тема",
		admin_text_theme: "Тема",
		admin_delete_confirmation_themes: "Желаете ли да изтриете избраните теми?\n Избрани са ${0} теми.",
		admin_theme_color: "Цвят",
		admin_theme_text: "Текст",
		admin_theme_solid: "Плътен",
		admin_theme_gradient: "Преливащ",
		admin_theme_box: "Кутия",
		admin_theme_color_label: "Цвят ${0}:",
		admin_theme_name_invalid: "Името на темата не може да съдържа следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Идентификаторът на темата трябва да е уникален и не можете да го променяте, след като запазите темата.<br><br>Идентификаторът може да съдържа само буквено-цифрови знаци.",
		admin_theme_name_hover: "Името не може да съдържа следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Автоматично",
		admin_theme_logo_url_hover: "Въведете URL адреса на файла с логото. Ако логото се намира на един и същ сървър за уеб приложения като уеб клиента, въведете относителен URL адрес, например: /mycustomizations/banner_logo.png<br><br>Препоръчва се логото да има прозрачен фон.",
		admin_theme_color_palette_title_heading: "Цветова палитра",
		admin_theme_color_palette_help_text: "Създайте цветовата палитра за Вашата тема, като използвате шестнадесетичната стойност или пипетата за цвят. Можете да добавяте толкова цветове, колкото желаете.",
		admin_theme_color_add_button_label: "Добавяне на цвят",
		admin_theme_color_remove_button_label: "Премахване на цвят",
		admin_theme_global_title_heading: "Обхващащи цялото приложение елементи",
		admin_theme_global_font: "Семейство шрифтове:",
		admin_theme_global_font_hover: "Изберете шрифта, който да се използва в уеб клиента. Шрифтовете са изброени по важност; всеки следващ шрифт в списъка се използва само ако предходният не е инсталиран на клиентската машина.",
		admin_theme_global_framework_color_label: "Цвят на рамка:",
		admin_theme_global_framework_color_hover: "Изберете цвета, който да се използва за следните елементи:<ul><li>Заглавни ленти на диалогови прозорци</li><li>Маркиращият цвят в горната част на избрания раздел</li><li>Иконите за преглед в списъка със съдържание (подробен изглед, изглед на списание, изглед на филмова лента)</li></ul><br>Този цвят няма да се използва за разделителите между разделите на уеб клиента. Ако желаете да промените цвета на разделите, трябва да създадете плъгин, за да посочите персонализиран CSS файл.",
		admin_theme_color_global_toolbar: "Цвят на глобалната лента с инструменти:",
		admin_theme_color_global_toolbar_hover: "Ако сте включили в уеб клиента глобалната лента с инструменти, изберете нейния цвят.<br><br><b>Съвет:</b> лентата с инструменти се показва в банера в горната част на уеб клиента, така че нейният цвят трябва да допълва цвета на банера.",
		admin_theme_global_selected_color: "Цвят на избран елемент:",
		admin_theme_global_selected_color_hover: "Изберете цвета, който да се използва при избор на елементи в дървото за преглед, дървото за търсене и списъка със съдържание.<br><br>Цветът на посочване (цветът, който се използва, когато потребителят посочи елемент с мишката) се извлича от този цвят.",
		admin_theme_global_link_color: "Цвят на връзка:",
		admin_theme_global_link_color_hover: "Изберете цвета, който да се използва за всички URL адреси в уеб клиента, върху които може да се щраква. Например този цвят се използва във връзките Научете повече, които се показват на различни места в уеб клиента.",
		admin_theme_login_title_heading: "Елементи на страница за вход",
		admin_theme_page_background_label: "Фонов цвят на страница за вход:",
		admin_theme_login_page_background_hover: "Изберете цвета, който да се показва зад прозореца за вход.",
		admin_theme_login_pane_background_label: "Фонов цвят на прозорец за вход:",
		admin_theme_login_pane_background_hover: "Изберете цвета, който да се показва за прозореца за вход. Този цвят трябва да допълва фоновия цвят на страницата за вход.",
		admin_theme_text_color: "Цвят за текст:",
		admin_theme_login_pane_text_color_hover: "Изберете цвета, който да се използва за текста на прозореца за вход. Този цвят се използва за приветстващия текст и етикетите на полета. Този цвят трябва да може да се различава от фоновия цвят на прозореца за вход.",
		admin_theme_copyright_text: "Текст за авторски права:",
		admin_theme_copyright_text_hover: "Укажете дали на страницата за вход да се показва текст за авторски права.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Без текст за авторски права",
		admin_theme_banner_title_heading: "Елементи на банери",
		admin_theme_text_icons_color: "Цвят на текст и икони:",
		admin_theme_icon_color_label: "Цвят на икони:",
		admin_theme_shadow_label: "Сянка:",
		admin_theme_banner_text_icons_hover: "Изберете цвят, който да се използва за текста и иконите в банера. Този цвят трябва да може да се различава от фоновия цвят на банера.",
		admin_theme_banner_product_name_label: "Име на продукт:",
		admin_theme_banner_product_name_hover: "Когато създадете работен плот, можете да укажете персонализирано име, което да се показва за приложението. Ако не укажете персонализирано име, като име на продукта ще се използва IBM Content Navigator. Укажете дали да използвате името на приложението, което е определено в работния плот, или изображение вместо име.",
		admin_theme_banner_product_name_desktop_defined_label: "Използване на име от работен плот",
		admin_theme_banner_product_name_image: "Използване на персонализирано лого (URL адрес)",
		admin_theme_background_color_label: "Фонов цвят:",
		admin_theme_style_label: "Стил:",
		admin_theme_banner_color_hover: "Изберете цвят, който да се използва за банера в горната част на приложението.<br><br><b>Съвет:</b> уверете се, че цветът на текста на банера може да се различава от фоновия цвят на банера.",
		admin_theme_buttons_title_heading: "Бутони",
		admin_theme_navigation_title_heading: "Навигационни елементи",
		admin_theme_navigation_icon_selected_label: "Избран цвят за икони:",
		admin_theme_navigation_background_hover: "Изберете цвят, който да се използва за фона на лентата за функционално навигиране.",
		admin_theme_navigation_icon_color_hover: "Изберете цвят, който да се използва за иконите в лентата за функционално навигиране. Когато използвате разположението по подразбиране на работния плот, този цвят трябва да контрастира с фона на падащото меню на функцията. Когато използвате класическото разположение на работния плот, този цвят трябва да контрастира с фона на лентата за функционално навигиране.",
		admin_theme_navigation_icon_selected_hover: "Изберете цвят, който да се използва за избраната функция в лентата за функционално навигиране. Цветът трябва да допълва цвета на иконите и фоновия цвят на лентата за функционално навигиране.<br><br>Когато използвате класическото разположение на работния плот, този цвят се използва като цвят при посочване в лентата за функционално навигиране.",
		admin_theme_button_background_color_hover: "Изберете цвят, който да се използва за фоновете на бутоните.",
		admin_theme_button_style_hover: "Изберете стил за бутоните.",
		admin_theme_button_text_icon_color_hover: "Изберете цвят, който да се използва за текст и изображения в бутоните.",
		admin_theme_no_logo_label: "Без лого",
		admin_theme_custom_logo_label: "Потребителско лого (URL адрес)",
		admin_theme_banner_type: "Стил за запълване на банер:",
		admin_theme_banner_type_hover: "Укажете дали банерът трябва да е в плътен цвят, или в преливащ цвят. Ако зададете преливащ цвят, цветът, който посочите за цвят на банера, ще бъде най-тъмният цвят в банера.<br><br><b>Съвет:</b> уверете се, че цветът на текста на банера може да се различава от фоновия цвят на банера.",
		admin_theme_icon: "Икона на тема",
		admin_theme_buttons_and_links_title_heading: "Бутони, полета и връзки",
		admin_theme_button_style_label: "Стил на бутоните:",
		admin_theme_theme_style_label: "Стил на темата:",
		admin_theme_theme_style_hover: "Изберете стила, на който да се основава темата. Можете да промените стила по всяко време, когато създавате или редактирате тема. Когато променяте от един стил към друг, настройките на темата се възстановяват до стойностите по подразбиране.",
		admin_theme_accent_color_label: "Акцентиращ цвят:",
		admin_theme_accent_color_hover: "Изберете цвета, който ще използвате за лентата в горната част на диалоговия прозорец и за брояча на зареждането.",
		admin_theme_global_toolbar_text_color_label: "Цвят на текста на глобалната лента с инструменти:",
		admin_theme_global_toolbar_text_color_hover: "Ако включите глобалната лента с инструменти в уеб клиента, изберете цвета, който ще използвате за текста в лентата с инструменти.",
		admin_theme_banner_text_color_hover: "Изберете цвета, който ще използвате за текста в банера.",
		admin_theme_banner_icon_color_hover: "Изберете цвета, който ще използвате за иконите в банера.",
		admin_theme_button_color_label: "Цвят:",
		admin_theme_button_color_hover: "Изберете цвета, който да се използва за следните елементи:<ul><li>Заглавни ленти на диалогови прозорци</li><li>Маркиращият цвят в горната част на избрания раздел</li><li>Иконите за преглед в списъка със съдържание (подробен изглед, изглед на списание, изглед на филмова лента)</li><li>Бутони, полета и връзки</li></ul>Цветът, който се използва, когато потребителят посочва бутон, се извлича от този цвят. Този цвят няма да се използва за разделителите между разделите на уеб клиента. Ако желаете да промените цвета на разделите, трябва да създадете плъгин, за да посочите персонализиран CSS файл.",
		admin_theme_theme_style_col_header: "Стил на темата",

		admin_syncserver_consistency_checker: "Инструмент за проверка за последователност:",
		admin_syncserver_consistency_checker_hover: "Използвайте инструмента за проверка за последователност, за да се уверите, че базите данни за синхронизиране на услуги разполагат с актуална информация относно състоянието на всеки елемент, който се намира на сървъра. Например изпълнете инструмента за проверка за последователност, след като се е получило прекъсване на работата на базата данни за синхронизиране на услугите, за да получите информация относно документите, които са актуализирани в хранилището по време на прекъсването.",
		admin_syncserver_consistency_checker_button: "Изпълнение на инструмент за проверка за последователност",
		admin_syncserver_consistency_checker_started: "Стартирано:",
		admin_syncserver_consistency_checker_ended: "Приключено:",
		admin_syncserver_consistency_checker_duration: "Продължителност:",
		admin_syncserver_consistency_checker_items_processed: "Обработени синхронизационни елемента:",
		admin_syncserver_consistency_checker_items_processed_success: "Успешно обработени синхронизационни елемента:",
		admin_syncserver_consistency_checker_items_discovered: "Открити нови елементи в хранилището:",
		admin_syncserver_consistency_checker_change_updates: "Общо актуализации:",
		admin_syncserver_consistency_checker_state: "Състояние:",
		admin_syncserver_consistency_checker_state_done: "Готово",
		admin_syncserver_consistency_checker_state_running: "Изпълнява се",
		admin_syncserver_consistency_checker_user: "Подадено от:",
		admin_syncserver_consistency_checker_scheduled: "Насрочено:",

		admin_syncserver_dbcleanup: "Изчистване на база данни",
		admin_syncserver_dbcleanup_hover: "Изпълнете инструмента за изчистване на база данни, за да премахнете всички неизползвани устройства и елементи, които повече не са синхронизирани от базата данни.",
		admin_syncserver_dbcleanup_button: "Изчистване на база данни",
		admin_syncserver_dbcleanup_state_done: "Готово",
		admin_syncserver_dbcleanup_state_running: "Изпълнява се",
		admin_syncserver_dbcleanup_started: "Стартирано:",
		admin_syncserver_dbcleanup_ended: "Приключено:",
		admin_syncserver_dbcleanup_state: "Състояние:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Изтрити хранилища:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Изтрити синхронизирани елементи:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Изтрити устройства:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Изтекли устройства:",

		admin_syncserver_publicSyncUrl: "Публичен URL адрес на услуги за синхронизиране:",
		admin_syncserver_publicSyncUrl_hover: "Укажете URL адреса, чрез който хранилищата могат да комуникират с услугите за синхронизиране на IBM Content Navigator. Форматът по подразбиране на URL адреса е: http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Настройки на клиент за синхронизиране:",
		admin_syncserver_managed_hover: "Потребителите не могат да променят тези настройки в клиента за синхронизиране на IBM Content Navigator.",
		admin_syncserver_managed_subfolder: "Нива на папки за синхронизиране",
		admin_syncserver_managed_subfolder_hover: "Ако потребителят синхронизира папка, укажете максималния брой папки, които ще бъдат синхронизирани. Например ако потребителят укаже 3 нива на папки, ще се синхронизират папката, която потребителят синхронизира, и 2 нива подпапки.<br><br>Уверете се, че средата е мащабирана да поддържа количеството синхронизационен трафик, който се създава от тази настройка.",
		admin_syncserver_managed_subfolder_all: "Всички подпапки",
		admin_syncserver_managed_subfolder_none: "Без подпапки",
		admin_syncserver_managed_subfolder_no_more: "Ограничени нива",
		admin_syncserver_managed_subfolder_levels: "папки",
		admin_syncserver_managed_schedule: "График за синхронизиране",
		admin_syncserver_managed_schedule_hover: "Уверете се, че средата е мащабирана да поддържа количеството синхронизационен трафик, който се създава от графика за синхронизиране.<br><br>Максималният интервал е 24 часа или 1440 минути.<br><br>Потребителите могат да презапишат графика за синхронизиране, като щракнат върху <b>Синхронизирай сега</b> в клиента.",
		admin_syncserver_managed_schedule_manual: "Ръчно синхронизиране",
		admin_syncserver_managed_schedule_continuous: "Непрекъснато синхронизиране",
		admin_syncserver_managed_schedule_every: "Синхронизиране в посочени интервали",
		admin_syncserver_managed_schedule_minutes: "Минути",
		admin_syncserver_managed_schedule_hours: "Часа",

		// redaction codes
		admin_new_reason_code: "Причина за нова редакция",		
		admin_reason_code_name_invalid: "Името на причината за редакция не може да съдържа някой от следните символи: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Описанието не може да съдържа някой от следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Описанието не може да съдържа някой от следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Името не може да съдържа никой от следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Описание:",
		admin_reason_code_applications_hover: "Списъкът с приложения Datacap, които препращат към тази причина за редакция.",
		admin_reason_code_applications: "Приложения Datacap",
		admin_delete_confirmation_reason_codes: "Желаете ли да изтриете избраните причини за редакция?",
		admin_delete_confirmation_reason_code: "Желаете ли да изтриете избраната причина за редакция?",
		admin_reason_code_heading: "Причина за редакция: <b>${0}</b>",
		admin_reason_code_list_instructions: "Причините за редакция указват защо чувствителните данни се защитават чрез скриването им за преглед. Всяка причина указва тип чувствителни данни, които са скрити от общите потребители.",
		admin_reason_code_instructions: "Можете да създадете причина за редакция за всеки тип чувствителни данни. След това можете да използвате тази причина в политика за редакция, за да определите кой може да вижда данните и кой може да създава или променя редакции.",
		admin_reason_code_applications_label: "Приложения Datacap",
		admin_reason_code_repositories: "Хранилища",
		admin_reason_code_repositories_label: "Хранилища",
		admin_reason_code_repositories_hover: "Списък с ICN хранилища, които препращат към тази причина за редакция.",
		admin_reason_code_repositories_default_value: "Не е зададено",
		admin_reason_code_description_label: "Описание",
		admin_reason_code_applications_default_value: "Не е зададено",
		admin_redaction_reasons: "Причини за редакция",
		admin_redactions: "Базирани на роли редакции",
		admin_redactions_policies_roles: "Политики и роли",
		admin_reasons: "Причини",
		admin_reason_code_id: "Идентификатор",
		admin_reason_code_id_hover: "Идентификаторът не може да бъде редактиран.  Той може да бъде копиран в буферната памет",
		// Role based administration
		admin_rba: "Администриране на работни плотове, базирани на роли",
		admin_rba_mobile_access_enabled: "Този работен плот е активиран за мобилен достъп.",
		admin_rba_mobile_access_disabled: "Този работен плот не е активиран за мобилен достъп.",
		admin_rba_confirm_delete_multiple: "Желаете ли да изтриете избраните административни роли?",
		admin_rba_confirm_delete_single: "Желаете ли да изтриете избраната административна роля?",
		admin_rba_delete_multi_role_desktop: "Една или повече от ролите, които сте избрали, е приписана на работен плот. Трябва да премахнете ролите от работните плотове преди да можете да ги изтриете.",
		admin_rba_delete_single_role_desktop: "Ролята, която сте избрали, е зададена на работния плот ${0}. Трябва да премахнете ролята от работния плот, преди да можете да я изтриете.",
		admin_desktop: "Работен плот",
		admin_rba_instructions: "Можете да създавате и управлявате административни роли на работни плотове, които свързват привилегиите, предоставени на администраторите на работни плотове.",
		admin_rba_not_used: "${0} не се използва в никакви работни плотове.",
		admin_rba_desktops: "<b>${0} се използва в следните работни плотове:</b>",
		admin_rba_new_role: "Нова роля",
		admin_rba_name_invalid: "Името на административната роля не може да съдържа нито един от следните символи: * \\  / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Описанието не може да съдържа някой от следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Описанието не може да съдържа някой от следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Името не може да съдържа никой от следните символи: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Описание:</b> ${0}",
		admin_rba_membership: "Членство",
		admin_rba_general_priv: "Общи",
		admin_rba_appearance_priv: "Облик",
		admin_rba_desktop_config_priv: "Конфигуриране на работен плот",
		admin_rba_app_name_priv: "Име на приложение",
		admin_rba_theme_priv: "Тема",
		admin_rba_viewer_map_priv: "Схема за преглед",
		admin_rba_merge_split_priv: "Сливане и разделяне",
		admin_rba_sync_svc_priv: "Услуги за синхронизиране",
		admin_rba_menus_priv: "Менюта",
		admin_rba_edit_svc_priv: "Услуги за редактиране",
		admin_rba_toolbars_priv: "Ленти с инструменти",
		admin_rba_ctx_menus_priv: "Контекстни менюта",
		admin_rba_office_ribbon_priv: "Команди на лентата с допълнения на MS Office",
		admin_rba_office_menues_priv: "Контекстни менюта на MS Office",
		admin_rba_addl_settings_priv: "Допълнителни настройки",
		admin_rba_mobile_priv: "Мобилни",
		admin_rba_add_doc_dlg_priv: "Добавяне на диалогов прозорец за документи",
		admin_rba_doc_mgmt_priv: "Управление на документи",
		admin_rba_def_redaction_priv: "Опция за редакция по подразбиране",
		admin_rba_add_photos_priv: "Качват снимки от камерата и библиотеката със снимки",
		admin_rba_time_stamp_priv: "Печат на часа",
		admin_rba_add_docs_folders_priv: "Добавят документи и създават папки в хранилището",
		admin_rba_open_docs_priv: "Отварят документи в други приложения",
		admin_rba_office_config_priv: "Конфигуриране на Office",
		admin_rba_tab_label_priv: "Етикет за раздела IBM ECM",
		admin_rba_feature_sel_priv: "Избор на функции",
		admin_rba_general_config_priv: "Обща конфигурация",
		admin_rba_favorites_priv: "Предпочитания",
		admin_rba_add_options_priv: "Добавяне на опции в групата Редактиране",
		admin_rba_browse_priv: "Преглед",
		admin_rba_outlook_int_priv: "Интегриране на Outlook",
		admin_rba_search_priv: "Търсене",
		admin_rba_layout_priv: "Оформление",
		admin_rba_case_priv: "Казус",
		admin_rba_desktop_feat_priv: "Функции на работен плот",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Показвани функции",
		admin_rba_branding_priv: "Брандиране",
		admin_rba_home_priv: "Начало",
		admin_rba_main_color_priv: "Основен цвят",
		admin_rba_sec_color_priv: "Вторичен цвят",
		admin_rba_teamspaces_priv: "Екипни пространства",
		admin_rba_rbr_priv: "Базирана на роля редакция",
		admin_rba_et_mgr_priv: "Диспечер за шаблон за запис",
		admin_rba_policies_roles_priv: "Управление на политики и роли",
		admin_rba_work_priv: "Работа",
		admin_rba_reasons_priv: "Кодове за причина",
		admin_rba_tasks_priv: "Асинхронни задачи",
		admin_rba_auth_priv: "Удостоверяване",
		admin_rba_all_privs: "Всички привилегии",
		admin_rba_some_privs: "Някои привилегии",
		admin_rba_no_privs: "Без привилегии",
		admin_add_users_groups_priv: "Добавяне на потребители и групи",
		admin_url_features_priv: "Управление на функциите на URL адресите",
		admin_plugin_features_priv: "Управление на функциите на плъгина",
		admin_addl_components_priv: "Допълнителни компоненти",
		admin_global_toolbar_priv: "Глобална лента с инструменти",
		admin_status_bar_priv: "Лента на състоянието",
		admin_refresh_message: "Трябва да обновите браузъра си, за да използвате актуализираните данни.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Трябва да обновите браузъра си, за да използвате актуализирания работен плот по подразбиране.",
		admin_desktop_refresh_message: "Трябва да обновите браузъра си, за да използвате актуализирания работен плот.",
		admin_action_open: "Отворен",
		admin_action_edit: "Редактиране",
		admin_action_copy: "Копиране",
		admin_action_delete: "Изтриване",
		admin_action_copy: "Копиране",
		admin_action_new: "Създаване на нов",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Този идентификатор вече се използва. Трябва да посочите уникален идентификатор.",

		admin_searchable_properties_for: "Свойства за търсене на:",
		admin_repository_new: "Ново хранилище",
		admin_desktop_new: "Нов работен плот",
		admin_desktop_file_documents: "Изисква потребителите да записват новите документи и папки в папка",
		admin_desktop_file_documents_hover: "Изберете тази опция, ако желаете да изисквате потребителите да избират папка, когато добавят елементи към хранилището. Ако не изберете тази опция, потребителите ще могат да добавят документи (IBM FileNet P8) или документи и папки (IBM Content Manager), без да трябва да ги завеждат в папка.",
		admin_desktop_show_security_tab: "Покажи настройките за защита по време на добавяне и вписване",
		admin_desktop_show_security_hover: "<b>Само за потребители на IBM FileNet P8.</b>  Изберете тази опция, ако желаете да позволите на потребителите да редактират защитата на документите и папките, когато добавят или вписват елементи към този работен плот.",
		admin_desktop_configure_security_inheritance: "Позволи потребителите да конфигурират наследяването на защита на папките",
		admin_desktop_configure_security_inheritance_hover: "<b>Само за потребители на IBM FileNet P8.</b>  Изберете тази опция, ако искате потребителите да могат да персонализират достъпа до елементи в папката, като управляват наследяването на сигурност на папките. Ако изберете тази опция, потребителите могат да указват дали потребителите или групите могат да наследяват защитата от:<ul><li>Папка</li><li>Папка и нейните непосредствени подпапки</li><li>Папка и всички нейни подпапки</li></ul>",
		admin_desktop_appearance: "Облик",
		admin_desktop_appearance_instruction: "Можете да персонализирате облика на работния плот, като промените страницата за вход и банера, които се показват за работния плот.",
		admin_desktop_layout: "Оформление:",
		admin_desktop_layout_hover: "Оформлението указва кои функции могат да се показват в уеб клиента и как е подредено съдържанието на уеб клиента.<br><br><b>Съвет:</b> можете да определяте персонализирани оформления, като създавате плъгини. Трябва да регистрирате плъгина в инструмента за администриране, преди да можете да изберете персонализирано оформление.",
		admin_desktop_layout_default: "По подразбиране",
		admin_desktop_layout_custom: "Потребителско",
		admin_desktop_enable_workflow_email: "Активирай този работен плот за имейл известия за работен поток на FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Само за потребители на FileNet P8. Изберете тази опция, ако желаете да позволите на потребителите да отварят уеб клиента от URL адресите, които са включени в имейл известията, генерирани от Process Engine.<br /><br />Ако не активирате тази опция за работните плотове, потребителите няма да могат да влизат в уеб клиента чрез URL адресите в известията.<br /><br />Ако активирате тази опция на няколко работни плота и повече от един работен плот покрива критериите, които са указани в URL адреса в известието, уеб клиентът използва първия работен плот, който отговаря на критериите. ",
		admin_desktop_prevent_create_new_search: "Не позволявай на потребителите да създават търсения",
		admin_desktop_prevent_create_new_search_hover: "Тази опция ограничава потребителите да могат да използват само съществуващите търсения и да не могат да създават отворени търсения, които не са оптимизирани.</br></br>Тази настройка не засяга екипните пространства. Правото за създаване на търсения в екипно пространство се контролира от ролята, която потребителят притежава за съответното екипно пространство.",
		admin_desktop_prevent_create_new_unified_search: "Не позволявай на потребителите да създават търсения в множество хранилища",
		admin_desktop_prevent_create_new_unified_search_hover: "Тази опция ограничава потребителите да могат да използват само съществуващи търсения в множество хранилища и да не могат да създават отворени търсения в множество хранилища, които не са оптимизирани.",
		admin_desktop_hide_entry_template_not_found_warning: "Скрий предупреждението, което се показва, когато асоциираният входен шаблон не бъде намерен",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Изберете тази опция, ако желаете да скриете предупредителното съобщение, което се показва, когато свойствата на елемента са редактирани и входният шаблон, който е асоцииран с елемента, не бъде намерен.",
		admin_desktop_show_class_role_security_selection: "Позволете на потребителите да конфигурират защита, на базата на роли в шаблоните за въвеждане",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Само за потребители на IBM FileNet P8.</b> Изберете тази опция, ако искате потребителите да конфигурират шаблоните за въвеждане, за да използват защитата на базата на роли, когато задават защита на документи и/или папки, като използват шаблони за въвеждане.  Ако изберете тази опция, редакторите на шаблоните за въвеждане могат да посочат дали обектите за защита на роли се прилагат към определението на шаблона за въвеждане.",
		admin_desktop_show_primary_multi_part: "Отворете само първичния документ във визуализатора",
		admin_desktop_show_primary_multi_part_hover: "<b>Само за потребители на IBM FileNet P8.</b> Изберете тази опция, ако искате във визуализатора да се отвори само първичния файл с документи.  Документите могат да имат няколко свързани с тях файла.  Тази опция ще отвори само първичния файл, свързан с документа.",
		admin_desktop_redaction_save_mode: "Опция за редакция по подразбиране:",
		admin_desktop_redaction_save_mode_hover: "Избор на режим за запазване на редакция на визуализатора по подразбиране ViewONE Virtual:</br>* винаги питане на потребителя да избере: ще предизвика показване на диалоговия прозорец в записа в режим на редакция, с цел питане на потребителя дали желае вписване като нова версия, създаване на нов документ или изтеглено съдържание.</br>* вписване като нова версия: винаги ще запазва редактираното съдържание обратно в нова версия на съществуващ документ.</br>* запазване като изцяло нов документ: винаги ще запазва редактираното съдържание изцяло като нов документ.</br>* изтегляне и запазване в клиент: винаги ще изтегля редактираното съдържание в клиентската система.",
		admin_desktop_redaction_save_mode_user_select: "Винаги питане на потребителя да избере",
		admin_desktop_redaction_save_mode_new_version: "Вписване като нова версия",
		admin_desktop_redaction_save_mode_new_document: "Запазване като изцяло нов документ",
		admin_desktop_redaction_save_mode_local_content: "Изтегляне и запазване в клиент",

		admin_desktop_document_add_mode: "Добавяне на диалог за документ:",
		admin_desktop_document_add_mode_hover: "Укажете добавения диалог, който ще се използва, когато добавяте документи, които са създадени с IBM Content Navigator:<ul><li>Нов постоянно редактиран документ</li><li>Нов слят и разделен документ</li><li>Нов документ на Microsoft Office</li><li>Нов документ с услуга по редактиране</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Добавяне на документ",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Добавяне на документ с помощта на шаблон за запис",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Сливане и разделяне:",
		admin_desktop_merge_and_split_enable_hover: "Укажете дали желаете потребителите, които имат достъп до този десктоп, да могат да сливат и разделят документи, като използват поддържащ преглед.",

		admin_desktop_merge_and_split_show_checkin: "Подканете потребителите да осигурят стойности за свойствата, когато вписват промени в документ.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Ако изберете тази опция, диалоговият прозорец за вписване се показва когато потребителите вписват промени в документ в режим на Сливане и разделяне.",

		admin_desktop_available_categories: "Налични функции",
		admin_desktop_selected_categories: "Избрани функции",

		admin_layout_banner_title: "Банер и страница за вход",
		admin_layout_title: "Оформление",

		admin_desktop_application_name: "Име на приложение:",
		admin_desktop_application_name_hover: "Укажете име на приложение, което да се изобрази в банера.<br><br>Съвет: определете името на приложението за други езици в раздел Етикети/Етикети на работна площ.",
		admin_desktop_theme: "Тема:",
		admin_desktop_theme_hover: "Укажете дали за този работен плот да се използва темата по подразбиране на IBM Content Navigator или да се използва персонализирана тема. За да използвате персонализирана тема, трябва да създадете такава в раздела <b>Теми</b> на инструмента за администриране.",
		admin_desktop_login_logo: "Лого на страница за вход:",
		admin_desktop_login_logo_hover: "Ако желаете да промените логото, което се показва на страницата за вход, можете да укажете URL адрес на файл с лого. Препоръчва се да използвате персонализирана тема, за да промените логото.",
		admin_desktop_login_logo_url_hover: "Въведете URL адреса на файла с логото. ако логото е на същия адрес за уеб приложения като уеб клиента, въведете относителен URL адрес, например: /mycustomizations/login_logo.png<br><br>Логото не трябва да бъде по-голямо от 200 пиксела на ширина и 150 пиксела на височина.<br><br>Препоръчва се логото да има прозрачен фон.",
		admin_desktop_banner_logo: "Лого на банер:",
		admin_desktop_banner_logo_hover: "Ако желаете да промените логото, което се показва на банера, можете да укажете URL адрес на файл с лого. Препоръчва се да използвате персонализирана тема, за да промените логото.",
		admin_desktop_banner_logo_url_hover: "Въведете URL адреса на файла с логото. Ако логото се намира на един и същ сървър за уеб приложения като уеб клиента, въведете относителен URL адрес, например: /mycustomizations/banner_logo.png<br><br>Логото не трябва да бъде по-голямо от 72 пиксела на ширина и 36 пиксела на височина.<br><br>Препоръчва се логото да има прозрачен фон.",
		admin_desktop_banner_background_color: "Фонов цвят на банер:",
		admin_desktop_banner_background_color_hover: "Ако желаете да промените фоновия цвят на банера, можете да зададете персонализиран цвят. Препоръчва се да използвате персонализирана тема, за да промените цвета на банера.",
		admin_desktop_banner_background_color_custom_hover: "Укажете цвета на банера на приложението като шестнадесетичен цвят.",
		admin_desktop_banner_application_name_color: "Цвят на текст на името на приложението:",
		admin_desktop_banner_application_name_color_hover: "Ако желаете да промените цвета на името на приложението, можете да зададете персонализиран цвят. Препоръчва се да използвате персонализирана тема, за да промените цвета на името на приложението.",
		admin_desktop_banner_application_name_color_custom_hover: "Укажете цвета на името на приложението като шестнадесетичен цвят.",
		admin_desktop_banner_menu_color: "Цвят на иконите на банера:",
		admin_desktop_banner_menu_color_hover: "Ако промените фоновия цвят на банера, може да се наложи да смените цветовата схема на иконите в банера, за да ги направите по-ясно видими. Укажете дали да се показва светлата или тъмната версия на иконите на банера.<br><br>Препоръчва се да използвате персонализирана тема, за да промените цвета на иконите.",
		admin_desktop_login_page_content: "Съдържание на страница за вход:",
		admin_desktop_login_page_content_hover: "Ако желаете на страницата за вход да се показва допълнителна информация, например известия относно прекъсвания на работата на системата или места, където потребителите могат да получат помощ по отношение на своите данни, можете да укажете URL адреса на съдържанието, което желаете да се показва.",
		admin_desktop_login_page_content_url_hover: "Въведете URL адреса на съдържанието на страницата за вход. Ако съдържанието се намира на един и същ сървър за уеб приложения като уеб клиента, въведете относителен URL адрес, например: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Правила за пароли:",
		admin_desktop_password_rules_hover: "Ако желаете да посочите на потребителите конкретни правила относно създаването на пароли, например ограничени символи или минимален брой символи, можете да зададете URL адреса на страницата, която съдържа тези правила.",
		admin_desktop_password_rules_url_hover: "Въведете URL адреса на съдържанието с правилата за пароли. Ако съдържанието се намира на един и същ сървър за уеб приложения като уеб клиента, въведете относителен URL адрес, например: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL адрес за помощ за крайни потребители:",
		admin_desktop_help_url_hover: "Можете да използвате помощта, която е предоставена заедно с IBM Content Navigator, или да пренасочите потребителите към персонализирано помощно съдържание, като изпълните едно от следните неща:<br><br><ul><li>Пренасочване към персонализирана помощна система</li><li>Добавяне на помощ към екземпляра на IBM Knowledge Center, който е внедрен с IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Въведете URL адреса на персонализираната помощна система. IBM Content Navigator добавя index.jsp?content=/com.ibm.usingeuc.doc/ и файлово име в края на посочения URL адрес.  За да могат връзките от тип \"Научете повече\" в интерфейса да работят, помощната система трябва да използва едни и същи файлови имена с интегрираната помощ за крайни потребители. ",
		admin_desktop_deprecated_appearance_title: "Отхвърлени настройки",
		admin_desktop_deprecated_appearance_instructions: "Ако използвате персонализирана тема, тези настройки се презаписват от персонализираната тема. Трябва да пренесете тези настройки до персонализирана тема, която осигурява по-детайлно стилово оформление от настройките в този раздел. Имайте предвид, че една персонализирана тема може да се използва от множество работни плотове.",

		admin_desktop_plugins_title: "Активиране или деактивиране на плъгини за този работен плот.",
		admin_desktop_plugins_enable_all_plugins: "Разрешаване на всички интегрирани плъгини да бъдат използвани с този работен плот",
		admin_desktop_plugins_select_plugins: "Изберете интегрираните плъгини, за да позволите да бъдат използвани с този работен плот",
		admin_desktop_plugins_select_plugin: "Избор на плъгин",

		admin_desktop_layout_features: "Показани функции:",
		admin_desktop_layout_features_hover: "Изберете функциите, до които желаете потребителите да имат достъп от този работен плот. Функциите се показват в реда, по който са изброени.<br><br>Когато изберете дадена функция, можете да персонализирате някои от нейните поведения в рамките на работния плот, като например хранилището по подразбиране, което е избрано за нея.",
		admin_desktop_layout_default_repository: "Хранилище по подразбиране:",
		admin_desktop_layout_default_repository_layout_hover: "Укажете кое хранилище да се избере по подразбиране, когато потребителите отворят тази функция.",
		admin_desktop_layout_document_thumbnails: "Миниатюри на документи:",
		admin_desktop_layout_document_thumbnails_hover: "Укажете дали да се показват миниатюри за документите в прозореца за информация.<br><br>Показването на миниатюри може да забави работата на уеб клиента.",
		admin_desktop_layout_show_filmstrip_view: "Изглед на филмова лента:",
		admin_desktop_layout_show_filmstrip_view_hover: "Укажете дали желаете потребителите да могат да превключват режима на показване на списъка със съдържание към изглед на филмова лента.<br><br>Изгледът на филмова лента генерира предварителен преглед на всеки документ, който потребителят избере. Имайте предвид, че използването на този изглед може да забави работата на уеб клиента. Освен това трябва да конфигурирате визуализатора за HTML конвертиране, за да виждате прегледите на документите.",
		admin_enabled: "Активиране",
		admin_disabled: "Деактивиране",
		admin_include: "Включване",
		admin_exclude: "Изключване",
		admin_layout_teamspaces_default_repository: "Екипни пространства:",
		admin_layout_entry_templates_default_repository: "Входни шаблони:",
		admin_layout_other_features_default_repository: "Търсене и преглеждане:",
		admin_layout_work_default_repository: "Работа:",
		admin_layout_default_feature: "Функция по подразбиране:",
		admin_default_category_placeholder: "Изберете функция",
		admin_layout_default_feature_hover: "Укажете коя функция да се показва, когато потребителите влязат в този работен плот.",
		admin_layout_default_feature_warning: "Промяната на функцията по подразбиране може да повлияе на времето, необходимо за зареждането на приложението.",
		admin_layout_feature_list_header: "Функция",
		admin_layout_show_statusbar: "Лента на състоянието:",
		admin_layout_show_statusbar_hover: "Укажете дали да се показва лентата на състоянието в долната част на работния плот.<br><br>Ако скриете лентата на състоянието, потребителите няма да могат да виждат информацията относно събития, които не са свързани с грешки, като например:<ul><li>Документът беше добавен в хранилището.</li><li>Търсенето върна 59 документа.</li></ul>",
		admin_layout_show_magazineview: "Изглед на списание:",
		admin_layout_show_magazineview_hover: "Укажете дали желаете потребителите да могат да превключват режима на показване на списъка със съдържание към изглед на списание.<br><br>Изгледът на списание увеличава височината на всеки запис в списъка със съдържание, което намалява броя елементи, които могат да се показват в списъка едновременно.",
		admin_layout_show_detailsview: "Подробен изглед:",
		admin_layout_show_detailsview_hover: "Укажете дали желаете потребителите да могат да превключват режима на показване на списъка със съдържание към подробен изглед.<br><br>Подробният изглед увеличава до максимум броя видими в списъка със съдържание редове.",
		admin_feature_config_docinfopane_label: "Прозорец за информация за документи:",
		admin_feature_config_docinfopane_hoverhelp: "Укажете дали потребителите да разполагат с достъп до прозореца за информация за документи в тази функция.",
		admin_feature_config_docinfopane_default_label: "Поведение по подразбиране:",
		admin_feature_config_docinfopane_expanded: "Ръзгънато",
		admin_feature_config_docinfopane_collapsed: "Сгънато",
		admin_feature_config_docinfopane_expand_on_select: "Разгъване при избор на елемент",
		admin_layout_features_title: "Функции на работен плот",
		admin_layout_features_instructions: "Укажете до кои функции потребителите да имат достъп от този работен плот.  Освен това можете да персонализирате поведението на всяка функция, която е включена в работния плот.",
		admin_layout_components_title: "Допълнителни компоненти на работен плот",
		admin_layout_components_instructions: "Можете да деактивирате някои от компонентите на работния плот, ако желаете да постигнете по-изчистен интерфейс или ако желаете да ускорите работата на уеб клиента.",
		admin_layout_featureconfig_instructions: "Изберете функция за конфигуриране",
		admin_layout_featureconfig_no_configuration: "Няма налична конфигурация на функция.",
		admin_layout_featureconfig_label: "Конфигурация за функция ${0}",
		admin_layout_featureconfig_title: "Конфигурация на функция",
		admin_layout_featureconfig_taskManagerURL: "За да използвате тази функция, трябва да активирате и конфигурирате IBM Content Navigator да се свързва към услугата за диспечер на задачите. Активирайте услугата за диспечер на задачите в раздела <b>Настройки</b> на инструмента за администриране.",
		admin_feature_config_show_my_checkouts_label: "Прозорец Моите изписани елементи:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Прозорецът Моите изписани елементи позволява на потребителите да изпълняват търсения за всички елементи, които са изписали от конкретно хранилище. Укажете дали потребителите да имат достъп до прозореца Моите изписани елементи от функцията Начало.<br/><br/><b>Ограничение:</b> тази функция изисква да разполагате с поне едно IBM Content Manager, IBM FileNet P8 или OASIS CMIS хранилище, асоциирано с този работен плот.",

		admin_feature_config_default_repository_icon_text: "Хранилище по подразбиране",
		admin_show: "Показване",
		admin_hide: "Скриване",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Не можете да махнете административната функция от администраторския работен плот",
		admin_warning_label: "Предупреждение:",
		admin_layout_show_globaltoolbar: "Глобална лента с инструменти:",
		admin_layout_show_globaltoolbar_hover: "Укажете дали да се показва лентата с инструменти в горната част на работния плот.<br><br>Глобалната лента с инструменти включва действия, които позволяват на потребителите да добавят документи, папки и задържания към хранилището. Наличните действия зависят от хранилището, към което е свързан даденият потребител.",
		admin_interface_text_name_label: "Тип етикет",

		admin_interface_text_label_description: "Можете да персонализирате текста, който се показва в определени области на уеб клиента. Етикетите се показват за всички хранилища и работни плотове в конфигурацията ви. Въведете текста, който желаете да видите в интерфейса, в полето Текущ етикет.<br><br><b>Важно:</b> всички промени, които правите по етикетите, няма да се покажат в инструмента за администриране.",
		admin_interface_text_label_action: "Етикети за действия",
		admin_interface_text_label_action_description: "Етикетите за действия се показват на бутони и менюта в уеб клиента. Можете да определите етикети за действия за всеки тип хранилище.",
		admin_interface_text_label_application: "Етикети за приложения",
		admin_interface_text_label_application_description: "Етикетите за приложения се показват в уеб клиента.",
		admin_interface_text_label_system: "Етикети за системни свойства",
		admin_interface_text_label_system_description: "Показваните системни свойства варират при различните хранилища. Можете да персонализирате етикетите, които се показват за системните свойства, които са асоциирани с документите и папките във Вашите хранилища.",
		admin_interface_text_label_desktop: "Етикети за работен плот",
		admin_interface_text_label_desktop_description: "Ако сте персонализирали името на приложението в работния плот, можете да персонализирате името на езици, различни от английски. Можете също така да персонализирате имената на IBM FileNet P8 приложните пространства в работния плот.",

		admin_interface_text_system_label: "Системен етикет",
		admin_interface_text_current_label: "Текущ етикет",
		admin_interface_text_default_label_heading: "Етикет по подразбиране",
		admin_interface_text_default_label: "Етикет по подразбиране:",
		admin_interface_text_displayed_in_label: "Показван за",
		admin_interface_text_displayed_in_document_folder: "Документи и папки",
		admin_interface_text_displayed_in_document: "Документи",
		admin_interface_text_displayed_in_folder: "Папки",
		admin_interface_text_displayed_in_admin_application_space: "Етикет за приложно пространство",
		admin_interface_text_displayed_in_desktop: "Функционален етикет за мобилни устройства",
		admin_interface_text_displayed_in_admin_application_name: "Име на приложение",

		admin_new_desktop: "Нов работен плот",
		admin_new_repository: "Ново хранилище",
		admin_new_menu: "Ново меню",
		admin_new_viewer_mapping: "Нова карта на визуализатор",
		admin_new_mapping_label: "Ново съпоставяне",
		admin_new_icon_mapping: "Ново съпоставяне на икони",
		admin_viewer_mapping_list_instructions: "Можете да конфигурирате кои визуализатори да използва уеб клиентът, за да показва различни типове съдържание. Картата на визуализатор определя кои MIME типове са асоциирани с всеки визуализатор, който желаете да използвате. Можете да създадете множество карти на визуализатори, ако желаете да използвате различни визуализатори за различните работни плотове.",
		admin_viewer_mapping_instructions: "Укажете визуализаторите, които желаете да използвате за отваряне на файлове. Ако желаете да използвате персонализиран визуализатор, трябва да го интегрирате като плъгин, преди да можете да го добавите към картата на визуализатора.<br><br><b>Важно:</b> когато потребителят отвори документ, уеб клиентът търси списъка със съпоставяния на визуализатори, за да намери първия визуализатор, който може да отвори документа въз основа на операционната система, която потребителят използва, и хранилището, към което потребителят е свързан. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Нов плъгин",
		admin_menu_list_instructions: "Можете да създавате персонализирани ленти с инструменти и контекстни менюта, за да контролирате кои действия да бъдат достъпни за потребителите. Не можете да редактирате менютата по подразбиране, но можете да създавате копия на съществуващите менюта, за да ограничите действията, които са достъпни, или за да добавите персонализирани действия, които са определени в плъгините.<br><br>Ако желаете да създадете нов тип меню, трябва да определите менюто в плъгин.",
		admin_menu_id_hover: "Идентификаторът трябва да е уникален и не можете да го променяте, след като запазите менюто.<br><br>Идентификаторът може да съдържа само буквено-цифрови знаци и е с различаване на малките и големите символи.",
		admin_menu_id_disabled_hover: "Идентификаторът на менюто не може да се променя. Ако желаете да използвате различен идентификатор, трябва да създадете ново меню.",
		admin_menu_default_instructions: "Не можете да редактирате това меню, тъй като то е меню по подразбиране. Ако желаете да редактирате това меню, трябва да създадете негово копие.",
		admin_menu_toolbar_instructions: "Можете да ограничите действията, които са налични за тази лента с инструменти, или да добавите персонализирани действия, които са определени в плъгин. Можете също така да организирате действията, като добавите разделители към лентата с инструменти.",
		admin_menu_toolbar_custom_instructions: "Тази лента с инструменти се определя от плъгин. Ако желаете да редактирате лентата с инструменти, ще трябва да актуализирате плъгина или да създадете копие на лентата.",
		admin_menu_context_menu_instructions: "Можете да ограничите действията, които са налични за това контекстно меню, или да добавите персонализирани действия, които са определени в плъгин. Можете също така да организирате действията, като добавите разделители и подменюта към контекстното меню.",
		admin_menu_context_menu_custom_instructions: "Това контекстно меню се определя от плъгин. Ако желаете да редактирате това контекстно меню, трябва да актуализирате плъгина или да създадете негово копие.",
		admin_desktop_list_instructions: "Можете да създавате множество работни плотове, за да давате на различните потребители достъп до съдържанието, което им трябва. Например можете да създадете работен плот, който позволява на потребителите единствено да търсят съдържание, или такъв, който им дава достъп до само едно хранилище. ",
		admin_plugin_updated: "Конфигурацията на избрания плъгин беше променена. Трябва да обновите браузъра си, за да може промените да влязат в сила.",
		admin_repository_ci_heading: "Content Integrator хранилище: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager хранилище: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager хранилище: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand хранилище: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) хранилище: <b>${0}</b>",
		admin_repository_box_heading: "Box хранилище: <b>${0}</b>",
		admin_repository_generic_heading: "Хранилище: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Желаете ли да изтриете избраните работни плотове?\nИзбрани са ${0} работни плота.",
		admin_delete_confirmation_menus: "Желаете ли да изтриете избраните менюта?\nИзбрани са ${0} менюта.",
		admin_delete_confirmation_repositories: "Желаете ли да изтриете избраните хранилища?\nИзбрани са ${0} хранилища.",
		admin_delete_confirmation_viewer_mappings: "Желаете ли да изтриете избраните карти на визуализатори?  Избрани са ${0} карти.",
		admin_delete_confirmation_icon_mappings: "Желаете ли да изтриете избраните конфигурации на икони?\nИзбрани са ${0} конфигурации на икони.",
		admin_delete_confirmation_plugins: "Желаете ли да изтриете избраните плъгини?\nИзбрани са ${0} плъгини.",
		admin_delete_confirmation: "Желаете ли да изтриете избраните елементи?\nИзбрани са ${0} елемента.",

		admin_viewer_mapping_id_hover: "Идентификаторът трябва да е уникален и не можете да го променяте, след като запазите картата на визуализатора.<br><br>Идентификаторът може да съдържа само буквено-цифрови знаци и е с различаване на малките и големите символи.",
		admin_viewer_mapping_id_disabled_hover: "Идентификаторът на картата на визуализатора не може да се променя. Ако желаете да използвате различен идентификатор, трябва да създадете нова карта на визуализатор.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Работният плот по подразбиране не може да се изтрива.",

		admin_desktop_heading: "Работен плот: <b>${0}</b>",
		admin_menu_toolbar_heading: "Лента с инструменти: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Персонализирана лента с инструменти: <b>${0}</b>",
		admin_menu_context_menu_heading: "Контекстно меню: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Потребителско контекстно меню: <b>${0}</b>",
		admin_plugin_heading: "Плъгин: <b>${0}</b>",
		admin_plugin_instructions: "Плъгинът може да бъде JAR файл или компилиран класов файл.<br/><br/><b>Важно:</b> сървърът за уеб приложения IBM Content Navigator трябва да може да осъществи достъп до файла с плъгина на локалната файлова система или чрез URL адрес.",
		admin_plugin_list_instructions: "Трябва да използвате инструмента за администриране, за да регистрирате плъгините за уеб клиента. Ако даден плъгин се нуждае от допълнително конфигуриране, параметрите за конфигуриране се показват след като го регистрирате.<br /><br /><b>Важно:</b> ако редактирате плъгин, към който има референция в друга област на инструмента за администриране, например някое меню, е възможно да се натъкнете на проблеми с поведението на плъгина. Освен това плъгините се извикват по реда на изброяването си. Ако даден плъгин трябва да се изпълни преди друг плъгин, се уверете, че те са изброени в реда, по който трябва да се изпълнят.",
		admin_plugin_cannot_delete: "Избраните плъгини не могат да бъдат изтрити, тъй като някои плъгини зависят от тях.<br/>Избрани плъгини: ${0}<br/>Зависими плъгини: ${1}",
		admin_plugin_cannot_disable: "Избраните плъгини не могат да се деактивират, тъй като някои плъгини зависят от тях.<br/>Избрани плъгини: ${0}<br/>Зависими плъгини: ${1}",
		admin_plugin_cannot_add: "Плъгинът не може да се добави, защото някои плъгини, от които той зависи, липсват или са деактивирани. Липсващи или деактивирани плъгини: ${0}",
		admin_plugin_cannot_enable: "Избраните плъгини не могат да се активират, защото някои плъгини, от които те зависят, липсват или са деактивирани.<br/>Избрани плъгини: ${0}<br/>Липсващи или деактивирани плъгини: ${1}",
		admin_plugin_save_order: "Запазване на реда",
		admin_plugin_load: "Зареждане",
		admin_plugin_load_hover: "Укажете URL адреса на плъгина",
		admin_plugin_file_hover: "Ако JAR файлът на плъгина се намира на Вашата локална файлова система, можете да въведете напълно квалифицирания път или URL адрес на файла на плъгина. Ако JAR файлът на плъгина се намира на дистанционен сървър, трябва да въведете URL адреса на файла на плъгина.",
		admin_plugin_classfolderpath_hover: "Компилираният класов файл трябва да се намира на сървъра за уеб приложения IBM Content Navigator.<br/><br/>Въведете напълно квалифицирания път на папката, където се компилират и създават класовете на плъгина.<br/><br/>Пътят не трябва да съдържа името на пакета на класа на плъгина. Например пътят по подразбиране за примерния клас на плъгин на Windows е C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Въведете пълното име на Java класа във класовия файл, който трябва да се зареди и извика като клас на плъгина.<br/>Например името на класа за примерния плъгин е com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "JAR файлът на плъгина не беше намерен на указания URL адрес. Уверете се, че JAR файлът се намира на сървъра за уеб приложения и че URL адресът и файловото име са правилни.",
		admin_plugin_for_repository_not_loaded: "Не можете да редактирате това хранилище. Плъгинът, който определя и поддържа този тип хранилище, не е зареден. От раздела за плъгини редактирайте плъгина, за да се уверите, че той е правилно конфигуриран и зареден.",
		admin_plugin_repository_types: "Типове хранилища:",
		admin_plugin_viewers: "Визуализатори:",
		admin_plugin_features: "Функции:",
		admin_plugin_layouts: "Оформления:",
		admin_plugin_not_available: "Не е налично",
		admin_plugin_config_params: "Конфигурационни параметри:",
		admin_viewer_def_heading: "Карта на визуализатор: <b>${0}</b>",
		admin_users_and_groups: "Потребители и групи",
		admin_general: "Общи",
		admin_logging: "Регистриране",
		admin_authentication: "Удостоверяване",		
		admin_rolebase_role: "Роля:",
		admin_settings_logging_instructions: "Можете да използвате регистрирането, за да отстранявате неизправности с уеб клиента. Можете да прецизирате регистрирането, ако знаете, че конкретен проблем възниква в рамките на даден Java клас или за определен потребител. Информацията за грешките се записва в журналните файлове на сървъра за уеб приложения.",
		admin_settings_logging_instructions2: "<b>Настройки за отстраняване на грешки чрез регистриране</b><br />Ако сте наясно, че даден проблем възниква за конкретна клиентска хост машина или потребител, можете да насочите регистрирането за отстраняване на грешки към тази машина или потребител. Можете да получите информация за отстраняване на грешки в производствена среда, без това да окаже значително влияние върху работата на Вашата система.<br /><br /><b>Важно:</b> ако укажете клиентска хост машина или потребител, тази настройка презаписва всички други настройки за регистриране. След като получите необходимата Ви информация, задайте опцията на <b>Няма</b>, за да възобновите стандартното регистриране за Вашата среда.",
		admin_settings_export_config_hover: "Експортирайте текущата информация за системната конфигурация във файл за използване с IBM Support Assistant Data Collector. Файлът се запазва в местоположението, което е определено от Java системното свойство user.home.",
		admin_logging_level: "Регистриране на ниво на приложение:",
		admin_logging_level_hover: "Нивата на регистриране засягат това колко информация се съхранява на Вашия сървър. Ако изберете <b>Грешка</b>, това ще събира най-малкото възможно количество регистрационна информация. Ако изберете <b>Отстраняване на грешки</b>, това ще събира възможно най-много информация.<br /><br />Не указвайте <b>Отстраняване на грешки</b> в производствена среда, освен ако не сте получили подобни указания от софтуерната поддръжка на IBM.",
		admin_logging_level_0: "Без регистриране",
		admin_logging_level_1: "Грешка",
		admin_logging_level_2: "Предупреждение",
		admin_logging_level_3: "Информация",
		admin_logging_level_4: "Отстраняване на грешки",
		admin_logging_classes: "Регистриране на ниво на Java клас:",
		admin_logging_classes_hover: "По подразбиране всички Java класове и пакети са включени в регистрите за грешки на сървъра за уеб приложения. Въпреки това можете да укажете кои класове или пакети да се включват или изключват от регистъра. Можете да използвате регистрите за грешки на сървъра за уеб приложения, за да определите кои класове да се включват или изключват.<br><br>Ако сте наясно, че в конкретен клас възниква проблем, можете изрично да включите този клас в журналните файлове. Когато включите клас в регистрите за грешки, всички други класове се изключват от журналния файл.<br><br>Ако сте наясно, че даден проблем не възниква в някой клас, и желаете да намалите размера на журналния файл, можете да изключите този клас от журналните файлове.",
		admin_logging_classes_include: "Включване",
		admin_logging_classes_include_all: "Всички класове",
		admin_logging_classes_include_specified: "Конкретни класове",
		admin_logging_classes_include_specified_msg: "Укажете кои класове да се включват.",
		admin_logging_classes_exclude: "Изключване",
		admin_logging_classes_exclude_none: "Няма",
		admin_logging_classes_exclude_specified: "Конкретни класове",
		admin_logging_classes_exclude_specified_msg: "Укажете кои класове да се изключват.",
		admin_logging_debug: "Регистриране за отстраняване на грешки за:",
		admin_logging_debug_hover: "<b>Важно:</b> прегледайте журналните файлове на сървъра за уеб приложения, преди да укажете IP адрес на клиентска хост машина или потребител. Стойността, която посочите, трябва да съответства на стойността, която е показана в журналния файл.",
		admin_logging_debug_none: "Няма (по подразбиране)",
		admin_logging_debug_host: "Клиентска хост машина (IP адреси)",
		admin_logging_debug_host_msg: "Укажете IP адреса на една или повече клиентски машини, за които желаете да регистрирате информация за отстраняване на грешки. Разделяйте отделните IP адреси със запетаи.<br /><br /><b>Важно: </b> прегледайте журналните файлове на сървъра за уеб приложения, преди да укажете IP адрес. Стойността, която посочите, трябва да съответства на стойността, която е показана в журналния файл.",
		admin_logging_debug_user: "Потребители",
		admin_logging_debug_user_msg: "Укажете потребителското име на един или повече потребители, за които желаете да регистрирате информация за отстраняване на грешки. Разделяйте отделните потребителски имена със запетаи.<br /><br /><b>Важно:</b> прегледайте журналните файлове на сървъра за уеб приложения, преди да укажете потребителско име. Стойността, която посочите, трябва да съответства на стойността, която е показана в журналния файл.",

		admin_office_settings_logging_instructions: "Можете да използвате регистрирането, за да отстранявате проблеми с IBM Content Navigator за Microsoft Office. Можете да прецизирате регистрирането, ако знаете, че конкретен проблем възниква в рамките на даден клас или за определен потребител. Информацията за грешката се записва в журналните файлове на приложението на клиентските хост машини на IBM Content Navigator за Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Настройки за отстраняване на грешки чрез регистриране</b><br />Ако сте наясно, че даден проблем възниква за конкретна клиентска хост машина или потребител на IBM Content Navigator за Microsoft Office, можете да насочите регистрирането за отстраняване на грешки към тази машина или потребител. Можете да получите информация за отстраняване на грешки в производствена среда, без това да окаже значително влияние върху работата на Вашата система. <br /><br /><b>Важно:</b> ако укажете клиентска хост машина или потребител, тази настройка презаписва всички други настройки за регистриране. След като получите необходимата Ви информация, задайте тази опция на <b>Няма</b>, за да възобновите стандартното регистриране за Вашата среда IBM Content Navigator за Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Важно:</b> прегледайте журналните файлове на клиентската машина, преди да укажете IP адрес на клиентска хост машина или потребител. Стойността, която посочите, трябва да съответства на стойността, която е показана в журналния файл. ",
		admin_office_logging: "Регистриране в Office",
		admin_office_logging_classes: "Регистриране на ниво на клас:",
		admin_office_logging_classes_hover: "По подразбиране всички класове и пакети са включени в регистрирате за грешки на IBM Content Navigator за Microsoft Office. Въпреки това можете да укажете кои класове или пакети да се включват или изключват от регистъра. Можете да използвате регистрите на клиентската машина, за да определите кои класове да се включват или изключват.<br /><br />Ако сте наясно, че в конкретен клас възниква проблем, можете изрично да включите този клас в журналните файлове. Когато включите клас в регистрите за грешки, всички други класове се изключват от журналните файлове. <br /><br />Ако сте наясно, че даден проблем не възниква в някой клас, и желаете да намалите размера на журналния файл, можете да изключите този клас от журналните файлове. ",
		admin_office_logging_debug_hover: "<b>Важно:</b> прегледайте журналните файлове на клиентската машина, преди да укажете IP адрес на клиентска хост машина или потребител. Стойността, която посочите, трябва да съответства на стойността, която е показана в журналния файл.",
		admin_office_logging_additional_settings: "Допълнителни настройки:",
		admin_office_logging_additional_settings_hover: "Задайте допълнителните настройки",
		admin_office_logging_file_size: "Размер на журнален файл",
		admin_office_logging_file_size_hover: "Укажете размера, при който IBM Content Navigator за Microsoft Office създава нов журнален файл. Когато даден журнален файл достигне максималния размер, текущият регистър се преименува така, че да включва датата (във формат ГГГГММдд) и файлов постъпков номер (например ICNExcelAddin-20121116-5.log), след което се създава нов журнален файл. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Показване на стеково проследяване на диалогови прозорци",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Можете по избор да показвате информация за стековото проследяване в прозорците за съобщения, за да улесните разрешаването на проблемите. Дори ако не сте активирали тази опция, в регистрите за грешки на IBM Content Navigator за Microsoft Office винаги се включва подробна информация за стеково проследяване. ",

		admin_icon_state_twisty: "Икони за състояние",
		admin_icon_state_icon: "Икона за състояние",
		admin_icon_state: "Състояние",
		state_contains_label: "Състоянието съдържа",
		admin_icon_state_instructions: "Можете да персонализирате иконите, които се показват до документи, папки и работни елементи в хранилищата.<br><br><b>Съвет:</b> можете да посочите дали да се показват икони за състояние за всяко хранилище във Вашата среда.",
		admin_icon_state_dialog_title: "Съпоставяне на икони за състояние",
		admin_icon_state_dialog_instructions: "Можете да съпоставите избраното състояние към предварително определена икона, която се предоставя заедно с уеб клиента, или към персонализирана икона.",

		admin_icon_mapping_twisty: "Икони за MIME тип",
		admin_icon_mapping_dialog_title: "Съпоставяне на икони",
		admin_icon_mapping: "Съпоставяне на икони",
		admin_icon_mapping_instructions: "Можете да съпоставите списък с MIME типове към предварително определена икона, която се предоставя заедно с уеб клиента, или към персонализирана икона.",
		admin_icon_mapping_list_instructions: "Можете да персонализирате иконите, които се показват за различните MIME типове, които се съхраняват в хранилището. Уеб клиентът използва иконите по реда, в който са изброени. Ако даден MIME тип е изброен повече от веднъж, се използва първата асоциирана с него икона.",
		admin_icon_mapping_icon_label: "Каква икона желаете да използвате?",
		admin_icon_mapping_file_name: "Персонализирана икона:",
		admin_icon_mapping_file_name_heading: "Персонализирана икона",
		admin_icon_mapping_file_name_placeholder: "Посочете URL адреса на иконата",
		admin_icon_mapping_file_name_hover: "Въведете URL адреса на иконата. Ако иконата се намира на един и същ сървър за уеб приложения като уеб клиента, въведете относителен URL адрес. Например: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Предварително определена икона:",
		admin_icon_mapping_class_name_heading: "Предварително определена икона",
		admin_icon_mapping_class_name_hover: "Изберете икона, която е предоставена с уеб клиента.",
		admin_icon_mapping_class_name_placeholder: "Изберете икона",

		admin_p8_instructions: "Тази информация се споделя от всички хранилища на FileNet Content Manager, които са конфигурирани за уеб клиента.",
		admin_p8_collaboration_config: "Опционална конфигурация на FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Можете да конфигурират тези параметри, ако желаете да настроите FileNet Collaboration Services за Вашата IBM FileNet P8 среда.",
		admin_p8_use_url_incoming: "Използвайте URL адреса на входящите заявки, за да генерирате URL адреси за отговор:",
		admin_p8_use_url_incoming_hover: "В повечето среди FileNet Collaboration Services можете да използвате URL адреса на входяща заявка, за да генерирате URL адрес в отговор. Изберете <b>Да</b>, освен ако някоя от следните ситуации не важи за Вашата среда:<ul><li>желаете да принудите клиентските приложения да осъществят достъп до FileNet Collaboration Services чрез конкретен URL адрес.<li>Вашите настройки за прокси сървър карат FileNet Collaboration Services да генерират невалидни URL адреси.</ul>",

		admin_p8_use_url_incoming_http: "URL адрес на FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Укажете URL адреса, чрез който клиентските приложения могат да осъществяват достъп до FileNet Collaboration Services, с формата http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "HTTPS URL адрес на FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Ако FileNet Collaboration Services е конфигурирано да използва SSL, укажете HTTPS URL адреса, чрез който клиентските приложения могат да осъществяват достъп до FileNet Collaboration Services, с формата https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Скриване на потребителските имейл адреси в сървърните отговори:",
		admin_p8_hide_email_addresses_hover: "Можете да скриете имейл адресите на потребителите в сървърните отговори, ако желаете да спазвате определени политики на поверителност. Например можете да скриете списъка с потребителски имейл адреси, когато сървърът върне списък с документи и информация относно потребителите, които са създали или редактирали документите.",

		admin_p8_mask_user_ids: "Маскиране на потребителските идентификатори в журналните файлове:",
		admin_p8_mask_user_ids_hover: "Можете да скриете потребителските имена в журналните файлове на FileNet Collaboration Services, ако желаете да спазвате определени политики за поверителност. Когато активирате тази опция, потребителските имена се заместват с хеш стойности. Това Ви позволява да предоставяте журналните файлове на външните компании, например на IBM, за да получите поддръжка, без да компрометирате имената на Вашите потребители или записите за тяхната дейност.",

		admin_p8_soft_delete: "Преместване на изтритите файлове към кошчето:",
		admin_p8_soft_delete_hover: "Когато потребителите изтриват елементи, елементите да се преместват в кошчето, вместо да се изтриват от хранилището. Елементите остават в кошчето, докато не бъдат изчистени. Тази настройка се игнорира, ако целевото хранилище не поддържа кошчета.<br><br><b>Ограничение:</b> кошчетата се поддържат на IBM FileNet P8 версия 5.2 или по-нови версии и изискват добавка Social Collaboration Base Extensions.",

		admin_p8_download: "Конфигуриране на HTTP кеш за изтегляне на съдържание",
		admin_p8_download_instructions: "Ако Вашите хранилища на IBM FileNet Content Manager съдържат множество големи файлове, можете да конфигурирате HTTP кеш за изтегляне на съдържание (CDHC), за да позволите на FileNet Collaboration Services надеждно да пренасочва заявките за съдържание за големи файлове към специализиран уеб сървър.<br/><br/>Тази функция изисква IBM HTTP Server. Освен това трябва да актуализирате файла httpd.conf на IBM HTTP Server.",
		admin_p8_download_cache: "HTTP кеш за изтегляне на съдържание:",
		admin_p8_download_cache_hover: "Укажете дали желаете да активирате HTTP кеша за изтегляне на съдържание (CDHC) за всички хранилища на IBM FileNet Content Manager във Вашата среда. Можете да укажете минимален файлов размер, при който всички файлове се кешират.",
		admin_p8_download_cache_folder: "Напълно квалифицирана кеш директория:",
		admin_p8_download_cache_folder_hover: "Укажете напълно квалифицирания път на директорията, където желаете да съхранявате кешираните файлове. Директорията може да се намира на която и да е операционна система или устройство, например като споделена мрежова директория, стига да е видима като файлова система за FileNet Collaboration Services и IBM HTTP Server.",
		admin_p8_download_cache_url: "Псевдоними за местоположението на кеша:",
		admin_p8_download_cache_url_hover: "Укажете псевдонима, който се използва за насочване към кеш директорията от URL адреса на FileNet Collaboration Services. Укажете псевдонима във формата /псевдоним, например /cdhc.<br/><br/>Когато /cdhc се включи в URL адрес, приложението се пренасочва до напълно квалифицираната кеш директория.",
		admin_p8_download_cache_max_files: "Максимален брой кеширани файлове:",
		admin_p8_download_cache_max_files_hover: "Когато максималният брой файлове бъде достигнат, най-старият файл ще бъде премахнат от кеша.<br><br>Ако зададете максималния брой файлове за кеширане и максималния размер на кеша, най-старият файл се премахва от кеша, когато по-ниската от двете граници бъде достигната.",
		admin_p8_download_cache_max_size: "Максимален размер на кеш (в GB):",
		admin_p8_download_cache_max_size_hover: "Когато максималният размер на кеша бъде достигнат, най-старият файл ще бъде премахнат от кеша.<br/><br/>Ако зададете максималния брой файлове за кеширане и максималния размер на кеша, най-старият файл се премахва от кеша, когато по-ниската от двете граници бъде достигната.",
		admin_p8_download_cache_cleanup_duration: "Максимална продължителност на почистване (в секунди):",
		admin_p8_download_cache_cleanup_duration_hover: "Укажете максималния времеви период, който операцията по почистване да можете да отнеме. Стойността по подразбиране е 5 секунди.<br><br>Всички файлове, които подлежат на изтриване, но остават в кеша след почистването, ще бъдат премахнати по време на бъдеща операция по почистване.",
		admin_p8_download_cache_cleanup_min: "Минимален интервал между операциите за почистване (в секунди):",
		admin_p8_download_cache_cleanup_min_hover: "Укажете минималния времеви период, който да изминава между операциите за почистване на кеша. Стойността по подразбиране е 3600 секунди (1 час).<br><br>Операциите за почистване на кеша се изпълняват само когато има активна заявка за изтегляне на съдържание от кеша. Ако на всяка минута пристигат заявки, то операцията по почистване ще се изпълнява на всеки час. Ако обаче между заявките за изтегляне минат три часа, операцията по почистване няма да се изпълни, докато не се получи следващата заявка за изтегляне.",
		admin_p8_download_cache_min_lifetime: "Минимално време в кеша (в секунди):",
		admin_p8_download_cache_min_lifetime_hover: "Укажете минималния времеви период, през който файлът да се запази в кеша, преди да може да бъде премахнат. Стойността по подразбиране е 3600 секунди (1 час).<br><br>Дори ако кешът достигне максималния размер или съдържа максималния брой файлове, най-старият файл в него не може да бъде изтрит, докато не е бил в кеша за указания период от време.",
		admin_p8_download_cache_size_threshold: "Минимален файлов размер за кеширане (в KB):",
		admin_p8_download_cache_size_threshold_hover: "Укажете минималния размер, при който CDHC трябва да се използва за кеширане на файлове. Ако даден файл е по-малък от указания размер, файлът се насочва през сървъра за уеб приложения, на който е внедрен FileNet Collaboration Services. Размерът по подразбиране е 1000 KB.",
		admin_p8_download_guard_header: "HTTP заглавка за контрол на достъпа:",
		admin_p8_download_guard_header_hover: "Ако дадено клиентско приложение не може да маршрутизира заявка през IBM HTTP Server, кешираното съдържание не може да бъде изтеглено. Можете да зададете само входящи заявки с конкретна HTTP заглавка (която се добавя към заявките от IBM HTTP Server) да имат достъп до кешираното съдържание, за да се избегнат неизправности с изтеглянето.<br><br>HTTP заглавката се конфигурира в IBM HTTP Server и присъства във всички входящи заявки, които са маршрутизирани през IBM HTTP Server. Ако дадена заявка не разполага с HTTP заглавката, съдържанието се маршрутизира през сървъра за уеб приложения, вместо през IBM HTTP Server.",
		admin_p8_download_generate_config: "Генериране на конфигурация",
		admin_p8_download_generate_config_label: "Конфигурация на IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "За да може да работи CHDC конфигурацията, трябва да актуализирате файла httpd.conf на IBM HTTP Server. Щракнете върху Генериране на конфигурация, за да генерирате командите, които трябва да се добавят към файла httpd.conf.",

		admin_logging_viewone_pro: "Регистриране във ViewONE Professional:",
		admin_logging_viewone_virtual: "Регистриране във ViewONE Virtual:",
		admin_logging_viewone_streamer: "Регистриране в сървърния модул за поточно предаване на документи:",
		admin_logging_viewone_streamer_hover: "Опциите за регистриране в сървърния модул за поточно предаване на документи са приложими само ако сте активирали поточното предаване за PDF или TIFF файлове в раздела <b>Daeja ViewONE</b> на инструмента за администриране.",
		admin_logging_viewone_redaction: "Регистриране в сървърния модул за постоянна редакция:",
		admin_logging_viewone_redaction_hover: "Опциите за регистриране в сървърния модул за постоянна редакция са приложими само ако имате право да използвате модула Redaction на Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Поточно предаване на PDF файлове:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Ако имате големи PDF документи в хранилището, можете да позволите на визуализатора да предава поточно документното съдържание, за да могат потребителите да го преглеждат по-бързо. Ако обаче поточното предаване не работи във Вашата среда, можете да го деактивирате.",
		admin_daeja_viewonepro_stream_tiff_documents: "Поточно предаване на TIFF файлове:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Ако имате големи TIFF документи в хранилището, можете да позволите на визуализатора да предава поточно документното съдържание, за да могат потребителите да го преглеждат по-бързо. Ако обаче поточното предаване не работи във Вашата среда, можете да го деактивирате.",
		admin_daeja_viewonepro_show_file_buttons: "Бутони за файлове",
		admin_daeja_viewonepro_show_file_menus: "Менюта за файлове",
		admin_daeja_viewonepro_enable_file_keys: "Бързи клавиши за файлове",
		admin_daeja_viewonepro_file_keys_hover_help: "Укажете дали желаете потребителите да използват клавишни комбинации за работа с файлове, например за отварянето или затварянето им. За повече информация относно конкретните бързи клавиши вижте описанието на параметъра FileKeys в справочното ръководство за параметрите на IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Бутони за печат",
		admin_daeja_viewonepro_show_print_menus: "Менюта за печат",
		admin_daeja_viewonepro_enable_print_keys: "Бързи клавиши за печат",
		admin_daeja_viewonepro_print_keys_hover_help: "Укажете дали желаете потребителите да използват клавишни комбинации за печат на файлове, например за печат на страници или документи. За повече информация относно конкретните бързи клавиши вижте описанието на параметъра PrintKeys в справочното ръководство за параметрите на IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Бутони за инвертиране",
		admin_daeja_viewonepro_annotation_tooltip: "Пояснение за персонализирана анотация по подразбиране:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Въведете текста, който да се показва, когато за дадена персонализирана анотация няма посочено пояснение. Текстът може да включва заменяеми маркери. Например &quot;&lt;creater&gt; създаде тази анотация на &lt;createdateonly&gt;.&quot; За повече информация относно заменимите маркери вижте параметъра customAnnotationsToolTip в справочното ръководство за параметрите на IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Използване на предварително дефинирано потребителско пояснение",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Използване на системно дефинирано потребителско пояснение, което да се показва в текстовото поле по-долу",
		admin_daeja_viewonepro_help_url: "URL адрес за помощ:",
		admin_daeja_viewonepro_help_url_hover_help: "Укажете URL адреса на уеб страницата, която съдържа помощната документация за визуализатора. Помощният бутон на лентата с инструменти на визуализатора и действието за помощ на менюто отварят тази уеб страница. Ако не посочите URL адрес, помощният бутон и съответното действие на менюто няма да бъдат показани.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Ресурсен контекст на маркер на изображение:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "за изпълнение",
		admin_daeja_viewonepro_route_docs: "Маршрутизиране на неподдържано съдържание към браузъра:",
		admin_daeja_viewonepro_route_docs_hover_help: "Потребителите могат да преглеждат неподдържаните файлове с изображения, като ги маршрутизират към браузъра, което отваря съответното приложение за преглед на файла. Например за да отвори документ на Microsoft Word, браузърът използва визуализатора Microsoft Word.",
		admin_daeja_viewonepro_scale: "Автопобиране на изображение:",
		admin_daeja_viewonepro_scale_best: "Най-добро побиране",
		admin_daeja_viewonepro_scale_ftow: "Вместване на ширина",
		admin_daeja_viewonepro_scale_ftoh: "Вместване на височина",
		admin_daeja_viewonepro_enable_hotkeys: "Активиране на бързи клавиши:",
		admin_daeja_viewonepro_show_features: "Покажи бутоните и менютата:",
		admin_daeja_custom_settings: "Допълнителни настройки:",
		admin_daeja_custom_settings_hover_help: "Можете да добавяте други параметри, като посочвате името и стойността на параметъра. Например можете да зададете &quot;scrollbars&quot; и &quot;true&quot;, ако желаете плъзгачите да се показват, когато изображението се мащабира до размер, който е по-голям от зоната за показване. За повече информация относно имената и стойностите на параметрите вижте справочното ръководство за параметрите на IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Пояснение за персонализирана анотация по подразбиране:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Въведете текста, който да се показва, когато за дадена персонализирана анотация няма посочено пояснение. Текстът може да включва заменяеми маркери. Например &quot;&lt;creater&gt; създаде тази анотация на &lt;createdateonly&gt;.&quot; За повече информация относно заменимите маркери вижте параметъра customAnnotationsToolTip в справочното ръководство за параметрите на IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Използване на предварително дефинирано потребителско пояснение",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Използване на системно дефинирано потребителско пояснение, което да се показва в текстовото поле по-долу",
		admin_daeja_virtual_image_stamp_resource_context: "Ресурсен контекст на маркер на изображение:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "за изпълнение",
		admin_daeja_virtual_license_path:"Път на лицензни(те) файлове License files path:",
		admin_daeja_virtual_license_path_hover_help:"Укажете напълно клавилифицирания път на директорията, съдържаща / която съдържа Specify the fully qualified path of the directory containing the lic-server-virtual.v1 и lic-server.v1 лицензни файлове.",
		admin_default_license_path:"Използвайте пътя по подразбиране за/ на лицензни файлове Use the default license files path",
		admin_license_path_specified:"Използвайте потребителския път за/ на лицензни файлове. Use the custom license files path",

		admin_daeja_streamer: "Сървър",
		admin_daeja_streamer_cache_root: "Кеш директория:",
		admin_daeja_streamer_cache_root_hover_help: "Укажете напълно квалифицирания път на директорията, където желаете да съхранявате кешираните файлове за по-бърз достъп. Директорията може да се намира на която и да е операционна система или устройство, например като мрежова директория, ако е видима като файлова система за IBM Content Navigator и IBM HTTP Server.  Използвайте локална директория, за да подобрите бързината на работата.",
		admin_daeja_streamer_settings: "Допълнителни настройки:",
		admin_daeja_streamer_settings_hover_help: "Можете да добавяте други параметри, като посочвате името и стойността на параметъра. Например можете да зададете “cookieAllowedDomainList”  и разделен със запетаи списък с хост сървъри.  За повече информация относно имената и стойностите на параметрите вижте справочното ръководство за параметрите на IBM Daeja ViewONE.",

		admin_daeja_redaction: "Постоянна редакция",
		admin_daeja_redaction_settings: "Настройки:",
		admin_daeja_redaction_settings_hover_help: "Можете да добавяте други параметри, като посочвате името и стойността на параметъра. Например можете да зададете \"burnIncrementalAnnotations\" и \"true\". За повече информация относно имената и стойностите на параметрите вижте справочното ръководство за параметрите на IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Нова настройка",
		admin_daeja_setting_dialog_title_edit: "Редактиране на настройка",
		admin_daeja_setting_dialog_hover_help: "Добавяйте други параметри, като посочвате името и стойността на параметъра. Например можете да зададете \"scrollbars\" и \"true\", ако желаете плъзгачите да се показват, когато изображението се мащабира до размер, който е по-голям от зоната за показване.",
		admin_daeja_setting_dialog_field_hover_help: "За повече информация относно имената и стойностите на параметрите вижте справочното ръководство за параметрите на Daeja ViewONE.",

		admin_daeja_logging: "Регистриране в Daeja ViewONE",
		admin_daeja_logging_trace: "Активиране на проследяващо регистриране",
		admin_daeja_logging_trace_net: "Активиране на мрежово регистриране",
		admin_daeja_logging_trace_annotations: "Активиране на регистриране на анотации",
		admin_daeja_logging_log_file: "Журнален файл:",
		admin_daeja_logging_instructions: "Можете да използвате регистрирането, за да отстранявате неизправности с Daeja ViewONE Professional и Daeja ViewONE Virtual. Ако сте наясно, че даден проблем възниква за конкретна функция, можете да насочите регистрирането към тази функция.",

		admin_v1pro_logging_trace_hover: "Използвайте тази настройка, за да отстранявате общи неизправности с визуализатора.<br><br>Информацията за регистрирането се вписва в Java конзолата на клиентската машина. Можете да осъществите достъп до Java конзолата от контролния панел (за Windows) или системните предпочитания (за Mac) на операционната система.",
		admin_v1pro_logging_trace_net_hover: "Използвайте тази настройка, за да отстраните следните неизправности:<ul><li>Проблеми с връзката със сървъра</li><li>Проблеми с MIME типове</li><li>Проблеми с прекалено дълги файлове</li></ul>Освен това можете да използвате мрежовото проследяващо регистриране, за да определите дали възникват забавяния при използването на Daeja ViewONE Professional.<br><br>Информацията за регистрирането се вписва в Java конзолата на клиентската машина. Можете да осъществите достъп до Java конзолата от контролния панел (за Windows) или системните предпочитания (за Mac) на операционната система.",
		admin_v1pro_logging_trace_annotations_hover: "Използвайте тази настройка, за да отстранявате неизправности със създаването, запазването или зареждането на анотации.<br><br>Информацията за регистрирането се вписва в Java конзолата на клиентската машина. Можете да осъществите достъп до Java конзолата от контролния панел (за Windows) или системните предпочитания (за Mac) на операционната система.",

		admin_virtual_logging_trace_hover: "Използвайте тази настройка, за да отстранявате общи неизправности с визуализатора.<br><br>По подразбиране информацията за регистрирането се вписва във файла virtual.log в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Използвайте тази настройка, за да отстраните следните неизправности:<ul><li>Проблеми с връзката със сървъра</li><li>Проблеми с MIME типове</li><li>Проблеми с прекалено дълги файлове</li></ul>Освен това можете да използвате мрежовото проследяващо регистриране, за да определите дали възникват забавяния при използването на Daeja ViewONE Virtual.<br><br>По подразбиране информацията за регистрирането се вписва във файла virtual.log в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Използвайте тази настройка, за да отстранявате неизправности със създаването, запазването или зареждането на анотации.<br><br>По подразбиране информацията за регистрирането се вписва във файла virtual.log в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Ако активирате регистрирането за визуализатора, трябва да укажете пълния квалифициран път и името на журналния файл, където желаете да съхранявате информацията от регистрирането.  Препоръчва се да наименувате журналния файл с името virtual.log.",

		admin_streamer_logging_trace_hover: "Използвайте тази настройка, за да отстранявате общи неизправности със сървърния модул за поточно предаване на документи.<br><br>По подразбиране информацията за регистрирането се вписва във файла streamer.log, който се намира в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Използвайте тази настройка, за да отстраните следните неизправности:<ul><li>Проблеми с връзката със сървъра</li><li>Проблеми с конкретни MIME типове</li><li>Проблеми с прекалено дълги файлове</li></ul>Освен това можете да използвате мрежовото проследяващо регистриране, за да определите къде възникват забавяния при използването на сървърния модул за поточно предаване на документи.<br><br>По подразбиране информацията за регистрирането се вписва във файла streamer.log, който се намира в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Ако активирате регистрирането за сървърния модул за поточно предаване на документи, трябва да укажете пълния квалифициран път и името на журналния файл, където желаете да съхранявате информацията от регистрирането.  Препоръчва се да наименувате журналния файл с името streamer.log.",

		admin_redaction_logging_trace_hover: "Използвайте тази настройка, за да отстранявате общи неизправности със сървърния модул за постоянна редакция.<br><br>По подразбиране информацията за регистрирането се вписва във файла redacttofile.log, който се намира в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Използвайте тази настройка, за да отстраните следните неизправности:<ul><li>Проблеми с връзката със сървъра</li><li>Проблеми с конкретни MIME типове</li><li>Проблеми с прекалено дълги файлове</li></ul>Освен това можете да използвате мрежовото проследяващо регистриране, за да определите къде възникват забавяния при използването на сървърния модул за постоянна редакция.<br><br>По подразбиране информацията за регистрирането се вписва във файла redacttofile.log, който се намира в конфигурационната поддиректория на инсталационната директория на IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Ако активирате регистрирането за сървърния модул за постоянна редакция, трябва да укажете пълния квалифициран път и името на журналния файл, където желаете да съхранявате информацията от регистрирането.  Препоръчва се да наименувате журналния файл с името redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Конфигуриране на функции за Вашите визуализатори и услуги.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Ако използвате уеб клиента, за да се свързвате към едно или повече хранилища на Content Manager OnDemand, трябва да посочите информацията, която е нужна на OnDemand Web Enablement Kit за правилното му функциониране. Тази информация се споделя от всички хранилища на Content Manager OnDemand, които са конфигурирани за уеб клиента.",
		admin_ondemand_language: "Език:",
		admin_ondemand_tempdir: "ODWEK временна директория:",
		admin_ondemand_tracegrp: "ODWEK проследяване",
		admin_ondemand_tracedir: "Проследяване на директория:",
		admin_ondemand_tracelevel: "Ниво на проследяване:",
		admin_ondemand_tracelevel_0: "0 - Без регистриране",
		admin_ondemand_tracelevel_1: "1 - Регистриране на съобщения за грешки",
		admin_ondemand_tracelevel_2: "2 - Регистриране на съобщения за грешки и предупреждения",
		admin_ondemand_tracelevel_3: "3 - Регистриране на съобщения за грешки, предупреждения и информационни съобщения",
		admin_ondemand_tracelevel_4: "4 - Регистрират се всички съобщения, в т.ч. функционалното проследяване",
		admin_ondemand_max_trace_filesize: "Максимален размер на файла за проследяване:",
		admin_ondemand_max_trace_filesize_unlimited: "Неограничен",
		admin_ondemand_max_trace_filesize_limited: "Ограничен (препоръчано)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Тази стойност е извън диапазона. Стойността трябва да е цяло число между 1 и 1 000 000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF инсталационна директория:",
		admin_ondemand_language_hover: "Укажете езика, на който ODWEK връща съобщения.",
		admin_ondemand_tempdir_hover: "Въведете директорията, където OnDemand Web Enablement Kit съхранява временните файлове по време на обработването. Трябва да въведете пълния квалифициран път на съществуваща директория на сървъра за уеб приложения.",
		admin_ondemand_tracedir_hover: "Въведете директорията, където желаете да съхранявате ODWEK проследяващия файл arswww.trace. Трябва да въведете пълния квалифициран път на съществуваща директория на сървъра за уеб приложения.",
		admin_ondemand_tracelevel_hover: "Укажете нивото на информация за регистриране, която се вписва във файла arswww.trace. <b>Регистриране на съобщения за грешка</b> записва най-малкото количество информация за регистрирането. <b>Регистрират се всички съобщения, в т.ч. функционалното проследяване</b> записва възможно най-много информация.<br /><br />Не указвайте <b>Регистрират се всички съобщения, в т.ч. функционалното проследяване</b> в производствена среда, освен ако не сте получили подобни указания от софтуерната поддръжка на IBM.",
		admin_ondemand_max_trace_filesize_hover: "Укажете дали желаете да позволите ODWEK проследяващият файл да нарасне до неограничен размер или дали желаете уеб клиентът да създава нови журнални файлове, когато журналният файл достигне определен размер. По подразбиране е зададено да се позволи проследяващият журнален файл да расте, докато уеб приложението не бъде спряно на сървъра за уеб приложения.",
		admin_ondemand_max_trace_unlimited_hover: "Изберете тази опция, ако желаете ODWEK проследяващата информация да се вписва в един журнален файл. Ако изберете тази опция, може да се стигне до това да имате журнален файл, който е прекалено голям, за да бъде отворен със стандартен файлов визуализатор.",
		admin_ondemand_max_trace_limited_hover: "Изберете тази опция, ако желаете ODWEK проследяващата информация да се вписва по-малки журнални файлове. Когато даден журнален файл достигне максималния размер, текущият файл се преименува така, че да включва датата (arswww.trace.ГГГГММДД.ЧЧММСС) и се създава нов журнален файл.",
		admin_ondemand_afp2pdf_installdir_hover: "Ако желаете да използвате помощната програма AFP2PDF Transform, за да конвертирате AFP документи в PDF документи, за да можете да ги преглеждате и отпечатвате, укажете директорията, където е инсталирана помощната програма AFP2PDF Transform на сървъра за уеб приложения. Например: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Администратори",
		admin_adminusers_heading_text_multi: "Трябва да укажете кои потребители имат административни права в уеб клиента. Само администраторите могат да влизат в административния работен плот.<br /><br /><b>Важно:</b> потребителските идентификатори на администраторите на IBM Content Navigator трябва да съвпадат с:<ul><li>Потребителските идентификатори, които съществуват на сървъра за уеб приложения. Потребителските идентификатори не трябва задължително да бъдат администратори на сървъра за уеб приложения.</li><li>Потребителските идентификатори, които съществуват в хранилището по подразбиране, което е конфигурирано за всеки работен плот, който включва функционалността за администриране.</li></ul>",
		admin_adminusers_heading_text_single: "Трябва да укажете кои потребители имат административни права в уеб клиента. Само администраторите могат да влизат в административния работен плот.<br /><br /><b>Важно:</b> потребителските идентификатори на администраторите на IBM Content Navigator трябва да съвпадат с потребителските идентификатори, които съществуват на сървъра за уеб приложения. Потребителските идентификатори не трябва задължително да бъдат администратори на сървъра за уеб приложения.",
		admin_adminusers_newuser: "Нов администратор:",
		admin_adminusers_add: "Добавяне",
		admin_adminusers_remove: "Премахване",
		admin_adminusers_listheading: "Администратори",
		admin_adminusers_nameInvalid: "Стойността не може да се дублира.",

		admin_sync_server_instructions: "<b>Само за потребители на FileNet P8:</b> ако планирате да активирате услугите за синхронизиране за едно или повече хранилища, трябва да конфигурирате уеб клиента да ги използва. Конфигурацията на услугите за синхронизиране се споделя от всички хранилища във Вашата среда.",
		admin_settings_instructions: "Стойностите, които зададете в раздела за настройки, се прилагат за всички работни плотове в конфигурацията.",
		admin_autocomplete: "Автоматично попълване на потребителските имена:",
		admin_autocomplete_hover: "Укажете дали желаете уеб клиента да съхранява потребителските имена в бисквитки, за да може браузърът автоматично да ги попълва в уеб клиента по време на вход.<br><br>Ако активирате тази опция, потребителското име на последният вписал се в уеб клиента потребител се съхранява в бисквитките на браузъра и автоматично се показва на страницата за вход, когато потребителят отвори уеб клиента.<br><br>Трябва да деактивирате тази опция, ако до приложението се осъществява достъп от споделени работни станции или ако изпитвате опасения относно съхраняването на потребителски имена в бисквитки на браузъра.<br /><br />Тази опция не важи за мобилни или персонализирани приложения.",
		admin_autocomplete_enable: "Активиране",
		admin_autocomplete_disable: "Деактивиране",
		admin_cultural_collation: "Използване на специфично за езиковата променлива сортиране:",
		admin_cultural_collation_hover: "Ако активирате специфичното за езиковата променлива сортиране, то се извършва на сървъра на хранилището. Това може да забави работата на уеб клиента.<br><br>Деактивирането на специфичното за езиковата променлива сортиране може да подобри работата на уеб клиента.",
		admin_cultural_collation_enable: "Активиране",
		admin_cultural_collation_disable: "Деактивиране",
		admin_base_ui_style: "Стил на тема",
		admin_base_ui_style_hover: "Посочете стила на темата по подразбиране, която се използва в уеб клиента. Този стил се използва само на десктопи, които използват темата <b>Default</b> (както е показано в раздела <b>Appearance</b> на конфигурацията на десктопа).<br/></br><b>Ограничение:</b> Ако конфигурациите на десктопа ви използват потребителски теми, потребителските теми се базират на класическия стил, без значение кой стил изберете.",
		admin_base_ui_style_classic: "Класически",
		admin_access_control_access: "Ограничаване на достъпа до определени потребители и групи",
		admin_access_control_access_show: "Показване на данни за контрол на достъпа",
		admin_access_control_access_enable: "Да",
		admin_access_control_access_disable: "Не",
		admin_mobile_access: "Позволяване на достъп от мобилни приложения",
		admin_mobile_access_hover: "По подразбиране потребителите могат да осъществяват достъп до уеб клиента от приложението IBM Content Navigator iOS.<br /><br /><b>Важно: </b> ако забраните достъпа на потребителите до уеб клиента от приложението iOS, те все още ще имат достъп до него от уеб браузърите на своите мобилни устройства, както и от всички персонализирани приложения, които са написани с помощта на API на IBM Content Navigator и които работят на мобилни устройства.",
		admin_mobile_access_enable: "Да",
		admin_mobile_access_disable: "Не",
		admin_error: "Информация за съобщения за грешки:",
		admin_error_custom: "Търсене в съдържанието за потребителска поддръжка",
		admin_error_default: "Търсене в цялото съдържание на поддръжката на IBM <BDO DIR='LTR'>(</BDO>по подразбиране<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Укажете дали желаете да насочите потребителите за повече информация, когато се натъкнат на съобщение за грешка. Можете да насочвате потребителите към информация на портала за поддръжка на IBM или към външни ресурси, например помощни центрове.",
		admin_error_URL: "Префикс на URL адрес:",
		admin_error_URL_hover: "Въведете URL адреса на ресурса, към който желаете да насочите потребителите, когато се натъкнат на грешка; например помощен център. Например: http://localhost:номер_на_порт. Уеб клиентът добавя номера на съобщението към URL адреса.",
		admin_prompt_close_without_save: "Желаете ли да затворите, без да запазите Вашите промени?",
		admin_object_expiration_time: "Интервал за обновяване на кеша (в минути):",
		admin_object_expiration_time_hover: "Можете да увеличите времевия период, за който обектите на конфигурацията, например работни плотове, се съхраняват в кеша, за да подобрите работата на уеб клиента.  Стойността по подразбиране е 10 минути. Максималната продължителност е 1440 минути (1 ден).<br /><br />Трябва да рестартирате уеб приложението, за да може промените да влязат в сила.<br /><br />Ако IBM Content Navigator е разположен във високодостъпна клъстеризирана среда, всички промени по обектите на конфигурацията няма да бъдат разпространени към възлите в клъстера, докато кешът не бъде обновен.",
		admin_temp_file_cleanup_interval: "Интервал на сканиране за изчистване на кеша на визуализатора (в часове):",
		admin_temp_file_cleanup_interval_hover: "Планиране колко често временната директория да бъде сканирана за откриване и изтриване на изтекли временни файлове. По подразбиране, временната директория се сканира на всеки шест часа. Можете да укажете 6-48 часа.",
		admin_temp_file_expiration_interval: "Изтичане на кеш на визуализатор (в часа):",
		admin_temp_file_expiration_interval_hover: "Указване на период от време, през което временните файлове, свързани с дейностите във визуализатора, остават в кеша на браузъра. По подразбиране тези временни файлове изтичат след 24 часа. Можете да укажете 12-48 часа.",
		admin_encryption_key_hover: "Ключ, използван за функциите за шифроване на Navigator.",
		admin_encryption_key: "Ключ за шифроване:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Брандиране",
		admin_mobile_branding_main_color: "Основен цвят:",
		admin_mobile_branding_secondary_color: "Вторичен цвят:",
		admin_mobile_device_title: "Управление на MaaS360",
		admin_mobile_device_enable_maas360: "Активиране на MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Активиране на помощта при посочване на MaaS360",
		admin_mobile_device_maas360_developer_id: "Идентификатор на разработчик на MaaS360:",
		admin_mobile_device_maas360_license_key: "Ключ за лиценз на MaaS360:",
		admin_mobile_settings_title: "Настройки",
		admin_mobile_email_address_hover_help: "Имейл адресът се използва в мобилното приложение, когато потребителят щракне върху \"Изпращане на отчет за грешка.\"",
		admin_mobile_email_address: "Имейл адрес:",
		admin_invalid_email_address_message: "Имейл адресът, който въведохте, не е в правилния формат. Въведете правилния адрес и опитайте отново.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Има невалидни данни.",
		admin_configuration_parameters: "Конфигурационни параметри",
		admin_configuration_optional_features: "Опционални функции",
		admin_configuration_optional_features_p8_instructions: "Изберете функциите, които желаете да активирате на това хранилище.<p><b>Важно:</b> ако активирате дадена функция, която инсталира добавка в хранилището, трябва да сте свързани към хранилището като администратор на Content Platform Engine или Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Изберете функциите, които желаете да активирате на това хранилище.<p><b>Важно:</b> тези функции променят модела на данните на Вашето хранилище. За да ги активирате, трябва да сте свързани към хранилището като администратор на библиотечния сървър.</p>",
		admin_system_properties: "Системни свойства",
		admin_system_properties_for: "Системни свойства за:",
		admin_available_properties: "Налични свойства",
		admin_displayed_properties: "Показани свойства",
		admin_selected_properties: "Избрани свойства",
		admin_selected_filtered_properties: "Скрити свойства",
		admin_available_operators: "Показани оператори",
		admin_selected_filtered_operators: "Скрити оператори",
		admin_system_properties_shown: "Показани свойства",
		admin_system_properties_hidden: "Скрити свойства",
		admin_available_menu_items: "Налични действия:",
		admin_selected_menu_items: "Избрани действия:",
		admin_menu_global: "Прилага се, когато няма избрани елементи:",
		admin_menu_multiple_document: "Прилага се, когато са избрани няколко елемента:",
		admin_menu_privileges: "Необходими права:",
		admin_menu_plugin: "Плъгин:",
		admin_menu_repository_types: "Типове хранилища:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Разделител",
		admin_browse: "Преглед",
		admin_search: "Търсене",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Базирана на роля редакция",
		admin_connections_library_enabled: "IBM Connections е активирано",
		admin_office_conf: "Редактиране на интегриране",
		admin_desktop_conf_label: "Конфигуриране на работен плот",
		admin_ms_office_conf_label: "Конфигуриране на Office",
		admin_workflows: "Работни процеси",
		admin_file_types: "Типове файлове",
		admin_file_type_contains_label: "Файловият тип съдържа",
		admin_name_propepty: "Име",
		admin_cm_name_property_default: "Използване на име по подразбиране",
		admin_cm_name_property_default_hover: "По подразбиране свойството за ICM йерархическо име (ICM$NAME) се използва като име на елемента, ако свойството е определено за него.  Ако свойството за ICM йерархическо име (ICM$NAME) не е налично, като име на елемента се използва първото свойство, което е маркирано като \"represents\".",
		admin_cm_name_property: "Укажете свойство за име на елемента",
		admin_cm_name_property_hover: "Укажете кое свойство се използва като име за документите и папките.",
		admin_name_property: "Свойство за име:",
		admin_doc_name_property: "Свойство за име на документ:",
		admin_doc_name_property_hover: "Укажете кое свойство се използва като име за документа.",
		admin_folder_name_property: "Свойство за име на папка:",
		admin_folder_name_property_hover: "Укажете кое свойство се използва като име за папката.",
		admin_all_searches_label: "Брой търсения за показване:",
		admin_unlimited: "Без ограничение",
		admin_limit: "Ограничение до",
		admin_repository: "Хранилище:",
		admin_application_space: "Приложно пространство",
		admin_available_application_spaces: "Налични приложни пространства:",
		admin_selected_application_spaces: "Избрани приложни пространства:",
		admin_label: "Етикет",
		admin_repository_box_placeholder: "Изберете Box хранилище",
		admin_repository_placeholder: "Избор на хранилище",
		admin_search_match: "Съответствие:",
		admin_search_match_all: "Съответствие с всички критерии за търсене",
		admin_search_match_any: "Съответствие с който и да е от критериите за търсене",
		admin_search_match_hover: "Укажете коя опция е избрана по подразбиране в менюто <b>Опции за свойство</b>.",

		admin_repository_redactions_instructions: "Можете да конфигурирате базирани на роли редакции за това хранилище.",
		admin_repository_redaction_policies_description: "Можете да създадете и управлявате политики за редакция, които са свързани с причини за редакция с потребители и групи, които могат да четат чувствителни данни и могат да редактират анотации, които защитават тези чувствителни данни от преглед.",
		admin_repository_redaction_roles_instruction: "Можете да създадете роля за редакция, за да асоциирате указаните потребители и групи с всяка от възможностите за четене на чувствителни данни или с възможността за редактиране на анотации, които защитават чувствителните данни от преглед. Ролята за редакция трябва да бъде асоциирана с причина за редакция в политиката за редакция, преди тези потребители и групи да могат да четат данни или да редактират анотации.",
		admin_repository_redaction_reasons_instruction: "Можете да конфигурирате причини за редакция за Вашето хранилище.",
		admin_repository_redaction_policies: "Конфигуриране на политика за редакция",
		admin_repository_redaction_roles: "Конфигуриране на роли за редакция",
		admin_repository_redaction_reasons: "Конфигуриране на причини за редакция",
		admin_repository_redaction_roles_type: "Тип",
		admin_repository_redaction_roles_type_hover: "Редакторът може да създава, променя или изтрива специфични типове базирани на роли редакции, докато преглеждащото лице може да вижда специфични типове чувствителни данни.",
		admin_repository_redaction_roles_type_editor: "Редактор",
		admin_repository_redaction_roles_type_viewer: "Визуализатор",
		admin_repository_redaction_roles_membership: "Членство",
		admin_repository_redaction_roles_membership_hover: "Изберете редакторите, които желаете да имате за тази роля.",
		admin_repository_redaction_roles_user_group_hover: "Търсете потребители и групи или изберете редакторите, които желаете за тази роля.",
		admin_repository_redaction_roles_description: "Можете да създадете или управлявате роли за редакция, които асоциират потребители и групи с възможността за четене на чувствителни данни и редактиране на анотации, които защитават чувствителни данни от преглед.",
		admin_repository_redaction_new: "Роля за нова редакция",
		admin_repository_redaction_role_avail_editors: "Достъпни редактори за редакция",
		admin_repository_redaction_role_avail_users: "Достъпни потребители",
		admin_repository_redaction_role_avail_groups: "Достъпни групи",
		admin_repository_redaction_role_selected_editors: "Избрани редактори за редакция",
		admin_repository_redaction_role_selected_users_groups: "Избрани потребители и групи",
		admin_repository_redaction_role_add_editor: "Нови редактори...",
		admin_repository_redaction_role_access_type: "Достъп",
		admin_repository_redaction_role_access_type_access: "Разрешаване",
		admin_repository_redaction_role_access_type_no_access: "Отхвърляне",
		admin_repository_redaction_role_users: "Потребители",
		admin_repository_redaction_role_groups: "Групи",
		admin_repository_redaction_role_editors: "Редактори",
		admin_delete_confirmation_redaction_roles: "Желаете ли да изтриете избраната роля за редакция?",
		admin_repository_edit_redaction_role: "Роля за редакция: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Достъп по подразбиране",
		// RBA
		desktop_user_group_acl: "Администратори на работния плот",
		desktop_user_group_remove: "Премахване",
		desktop_rba_membership: "Членство:",
		desktop_rba_membership_list_label: "Име",
		admin_repository_redaction_policy_hover: "Представете описание, което ще позволи на потребителите да различават между тази политика и други политики.",
		admin_repository_new_redaction_policy: "Политика за нова редакция",
		admin_repository_policy_name: "Име на политика",
		admin_repository_reason_redactions: "Причини за редакция:",
		admin_repository_role_editors: "Редактори",
		admin_repository_role_viewers: "Визуализатори",
		admin_repository_redaction_policy_instruction: "Можете да създадете политика за редакция, за да асоциирате избраните причини за редакция както с редакторите на редакция, така и преглеждащите лица на редакция.",
		admin_repository_redaction_reasons_hover: "Изберете един или повече типове чувствителни данни, които не желаете повечето потребители да виждат, например, лична идентификационна информация, търговски тайни или информация, която е поверителна или частна за Вашата компания.",
		admin_repository_readaction_available_reasons: "Налични причини",
		admin_repository_readaction_selected_reasons: "Избрани причини",
		admin_repository_readaction_new_reason: "Нова причина...",
		admin_repository_redeaction_reasons: "Причини за редакция:",
		admin_repository_readaction_editor_permmission: "Редактори на редакция:",
		admin_repository_redaction_editors_hover: "Изберете ролите, които могат да създават и изменят редакцията за избраните причини.",
		admin_repository_readaction_new_editor_role: "Роля на нов редактор...",
		admin_repository_readaction_available_editors: "Налични роли на редактор",
		admin_repository_readaction_selected_editors: "Избрани роли на редактор",
		admin_repository_readaction_viewer_permmission: "Преглеждащи лица на редакция:",
		admin_repository_redaction_viewers_hover: "Изберете ролите, които могат да виждат чувствителните данни за избраните причини. Редакцията не се прилага за потребители и групи с тези роли.",
		admin_repository_readaction_new_viewer_role: "Роля на ново преглеждащо лице...",
		admin_repository_readaction_available_viewers: "Налични роли на преглеждащо лице",
		admin_repository_readaction_selected_viewers: "Избрани роли на преглеждащо лице",
		admin_repository_reason_redactions_header: "Причини за редакция",
		admin_delete_confirmation_redaction_policy: "Желаете ли да изтриете избраната политика на редакция?",
		admin_role_type_repository: "Хранилище",
		admin_role_type_administrator: "Администратор",
		admin_role_type_template: "Шаблон",
		admin_role_type_teamspace: "Екипно пространство",
		admin_role_type_author: "Редактор",
		admin_role_type_user: "Визуализатор",
		admin_collaboration_services_instructions: "Ако имате уеб приложението IBM Connections и FileNet Collaboration Services, можете да конфигурирате общностните екипни пространства и потоците на дейности за хранилището.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Конфигуриране на общностна библиотека",
		admin_collaboration_community_instruction: "Можете да конфигурирате едно хранилище във Вашия IBM FileNet P8 домейн за съхранение на общностните библиотеки на IBM Connections (също така наричани екипни пространства). Когато потребителите създадат общностна библиотека през IBM Connections, тя се съхранява в хранилището, което е обозначено като хранилището за общностни библиотеки.",
		admin_collaboration_community_teamspaces: "Използвай това хранилище за общностните библиотеки:",
		admin_collaboration_community_teamspaces_hover: "Можете да използвате само едно хранилище във Вашия IBM FileNet P8 домейн, за да съхранявате нови общностни библиотеки. Ако активирате това хранилище и имате съществуващо хранилище, съществуващото хранилище ще бъде деактивирано. Всички съществуващи библиотеки ще останат на текущото хранилище.",
		admin_collaboration_connections_anonymous: "Позволи анонимен достъп до публично съдържание:",
		admin_collaboration_connections_anonymous_hover: "Ако Вашият сървър на IBM Connections съдържа публични или модерирани общности, можете да конфигурирате FileNet Collaboration Services да позволява на потребителите да преглеждат и изтеглят съдържание от библиотеките в тези общности, без да трябва преди това да влизат в системата.<br><br>Потребителите, които осъществяват достъп до общностните библиотеки по анонимен път, не могат да създават, променят или изтриват съдържанието.<br><br><b>Важно:</b> трябва да обозначите потребител на IBM FileNet P8 LDAP като анонимен потребител и да го конфигурирате с ролята <b>Анонимен</b> в WebSphere Application Server.",
		admin_collaboration_connections_url: "URL адрес на IBM Connections:",
		admin_collaboration_connections_url_hover: "Укажете URL адреса за Вашия сървър на IBM Connections с формат http://IBMConnectionsServer:port_number.  Ако IBM Connections е конфигуриран да използва IBM HTTP Server, Вие можете да пропуснете номера на порта от URL адреса.<br><br>URL адресът трябва да е достъпен за потребителите на IBM Connections, тъй като това е връзката, която FileNet Collaboration Services използва, за да създава връзки към целеви страници на документи в IBM Connections.",
		admin_collaboration_connections_url_http_use: "Използвайте URL адреса на IBM Connections",
		admin_collaboration_connections_url_https_use: "Използвайте HTTPS URL адреса на IBM Connections",
		admin_collaboration_connections_url_specify: "Укажете URL адреса",
		admin_collaboration_connections_url_https: "HTTPS URL адрес на IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Ако IBM Connections е конфигуриран да използва SSL, укажете HTTPS URL адрес за Вашия сървър на IBM Connections с формат https://IBMConnectionsServer:port_number.  Ако IBM Connections е конфигуриран да използва IBM HTTP Server, Вие можете да пропуснете номера на порта от URL адреса.",

		admin_collaboration_connections_gadget_url: "URL адрес на притурка на IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL адрес за извличане на IBM Connections:",
		admin_collaboration_connections_security: "Администратори на общността:",
		admin_collaboration_connections_security_hover: "Укажете потребителите и групите, които могат да администрират съдържанието в общностните библиотеки.<br><br>Глобалните администратори могат да създават, променят, изтриват и предоставят достъп до общностните библиотеки и тяхното съдържание. Когато укажете потребител като глобален администратор, той получава правата ClbGlobalAdministrator в хранилището.<br><br>Глобалните рецензиращи администратори могат да одобряват и отхвърлят съдържание, което е в процес на разглеждане за публикуване в общностна библиотека. Когато укажете потребител като глобален рецензиращ администратор, той получава правата ClbGloablReviewAdministrator в хранилището.",

		admin_collaboration_connections_admins: "Глобални администратори",
		admin_collaboration_connections_admins_review: "Глобални рецензиращи администратори",
		admin_collaboration_connections_seedlist: "Индексиране на съдържанието на общностната библиотека:",
		admin_collaboration_connections_seedlist_hover: "Укажете дали желаете IBM Connections да обходи общностните библиотеки в това хранилище, за да създаде индекс на търсене. Създаването на такъв индекс може да окаже влияние върху работата на хранилището.<br><br>Ако Social Collaboration Search Indexing Extensions са инсталирани на хранилището, тази опция е активирана по подразбиране. Ако Social Collaboration Search Indexing Extensions не са инсталирани на хранилището, добавката се инсталира на хранилището, когато активирате тази опция",
		admin_collaboration_activity_stream: "Конфигуриране на събитие от поток за активност",
		admin_collaboration_activity_stream_label: "Насочване на информация за събития към IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Укажете дали желаете да насочите информацията за събитието, например създаване на документи, изписани елементи, вписани елементи, коментари, етикети и споделяния, към IBM Connections.<br><br><b>Важно:</b> насочването на известия към IBM Connections може да окаже влияние върху работата на хранилището.",

		admin_collaboration_activity_stream_instruction: "Можете да конфигурирате това хранилище да насочва информация за събития, като например одобрявания на коментари и документи, към IBM Connections. Събитията се показват на страницата <b>Скорошни актуализации</b> в общностите на IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Игнориране на информацията за събития за конкретни потребители и групи:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Можете да игнорирате събития, които се генерират от конкретни потребители или групи, например администратори или системни акаунти, за да намалите броя на известията, които потребителите виждат. Например ако извършвате мигриране на съдържание, може да укажете събитията, които се генерират от акаунта, използван за мигрирането, да бъдат игнорирани.",
		admin_collaboration_activity_stream_userid: "Потребителско име за IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Укажете системния акаунт, който Content Platform Engine ще използва за оторизиране и за изпращане на информация за събития към IBM Connections. Потребителят трябва да е в ролята <b>trustedExternalApplication</b> в приложението Widget Container в IBM Connections.<br><br><b>Съвет:</b> по подразбиране администраторът на IBM Connections има съответните права. Можете да използвате администраторският идентификатор като потребителското име",
		admin_collaboration_activity_stream_password: "Потребителска парола за IBM Connections:",

		admin_help_url: "URL адрес за помощ за крайни потребители:",
		admin_help_url_hover: "<b>Важна бележка:</b> IBM Knowledge Center Customer Installed няма да се актуализира, считано от IBM Content Navigator версия 3.0.0. Свържете се с клиентско обслужване за повече информация относно използването на персонализирана помощ.<br><br>Считано от IBM Content Navigator версия 3.0.0, URL адресът за помощ за краен потребител препраща към IBM Knowledge Center. URL адресът за IBM Knowledge Center е: http://www.ibm.com/support/knowledgecenter.<br><br>Ако желаете да продължите да използвате предходна версия на IBM Knowledge Center Customer Installed, укажете URL адреса на потребителския модел на IBM Knowledge Center Customer Installed, който е бил разположен от IBM Content Navigator Инструмент за конфигуриране и разгръщане. URL адресът трябва да е приемлив за клиентските машини. URL адресът има следния формат: http://име_на_сървър:номер_на_порт/kc.<br><br>Можете да получите името на сървъра и номера на порта от файла console.log в поддиректорията KnowledgeCenter/logs на инсталационната директория на IBM Content Navigator.",

		admin_help_default: "Използване на помощта по подразбиране, предоставена от IBM",
		admin_custom_help: "Използване на персонализирана помощна система",
		admin_help_kc: "Използване на персонализирана помощна система в IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Важна бележка:</b> IBM Knowledge Center Customer Installed няма да се актуализира, считано от IBM Content Navigator версия 3.0.0. Свържете се с клиентско обслужване за повече информация относно използването на персонализирана помощ.<br><br>Ако желаете да продължите да използвате предходна версия на IBM Knowledge Center Customer Installed, изберете тази опция, за да продължите да добавяте съдържание към потребителския модел на IBM Knowledge Center Customer Installed, който сте разгърнали по-рано.",
		admin_help_taxonomy: "Класификационен код:",
		admin_help_taxonomy_hover: "Укажете класификационния код за персонализираната помощна система.<br><br>Класификационният код за IBM Content Navigator е SSEUEX. Ако желаете помощта да се показва под различно продуктово име в IBM Knowledge Center Customer Installed, трябва да добавите уникален класификационен код към файла KC_taxonomy.ditamap в директорията KnowledgeCenter/usr/taxonomy на инсталационната директория на IBM Content Navigator.",
		admin_help_context: "Помощен контекст:",
		admin_help_context_hover: "Укажете контекста на персонализираната помощ.<br><br>Помощта за IBM Content Navigator се намира в директорията KnowledgeCenter/usr/content/com.ibm.usingeuc.doc на инсталационната директория на IBM Content Navigator. Контекстът на помощта по подразбиране е com.ibm.usingeuc.doc. Ако желаете да предоставите персонализирана помощ, добавете съдържанието към нова поддиректория в директорията KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Целева страница:",
		admin_help_welcome_hover: "Укажете името на темата, която желаете да използвате като целева страница, когато потребителите осъществяват достъп до помощта. Трябва да създадете файл със свойства, който указва местоположението на целевата страница, и да добавите този файл в директорията KnowledgeCenter/usr/conf в инсталационната директория на IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "JSON файл с разширения за тип Mime:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Проверете името на JSON файла и пълната пътека до файла. Файлът може да е общ файл от файловата система или URL, което сочи към JSON файла.  <br><br>Съдържанието на JSON файла е масив с дефиниции за тип Mime. <br><br>Дефиницията за тип Mime включва четири ключа: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Първите два ключа \"mimeTypes\" и \"extensions\" са задължителни и могат да бъдат масиви от низове, разделени с \",\". Последните два ключа \"fileType\", \"iconName\" са по желание. <br><br>Например: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Конфигуриране на диспечера на задачите",
		admin_taskmanager_service: "Услуга за диспечер на задачи:",
		admin_taskmanager_service_hover: "Укажете дали желаете да използвате услугата за диспечер на задачите, за да създавате и изпълнявате асинхронни задачи. <br><br>Ако промените тази настройка, трябва да рестартирате уеб приложението IBM Content Navigator, за да могат промените да влязат в сила.",
		admin_taskmanager_url: "URL адрес на услугата за диспечер на задачите:",
		admin_taskmanager_url_hover: "Укажете URL адреса, чрез който другите приложения могат да комуникират с услугата за диспечер на задачи. URL адресът има следния формат: http://име_на_сървър:номер_на_порт/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Регистрационна директория на диспечера за задачи:",
		admin_taskmanager_logdirectory_hover: "По подразбиране журналните файлове за услугата за диспечер за задачи се вписват в същата директория, като тези на сървъра за уеб приложения. <br><br>Ако желаете регистрационната информация да се вписва в различна директория на сървъра на IBM Content Navigator, укажете пълния квалифициран път на директорията, където желаете да се съхраняват генерираните от компонента за диспечер на задачите журнални файлове. <br><br>Ако промените тази настройка, трябва да рестартирате уеб приложението IBM Content Navigator, за да могат промените да влязат в сила.",
		admin_taskmanager_heartBeatMonitor: "Наблюдение на пулсация на клъстер",
		admin_taskmanager_heartBeatMonitor_hover: "Само за високо достъпни среди на клъстер. Ако активирате тази опция, услугата за диспечер на задачите ще пренасочи задачите от възлите, които в момента не работят, към работещите такива. <br><br>Ако промените тази настройка, трябва да рестартирате уеб приложението IBM Content Navigator, за да могат промените да влязат в сила.",

		admin_syncserver_title: "Конфигуриране на сървъра за синхронизиране",
		admin_syncserver_enable: "Услуги за синхронизиране:",
		admin_syncserver_enable_hover: "Укажете дали желаете потребителите, които осъществяват достъп до тази работна площ, да могат да синхронизират техните елементи между работните си станции и мобилните си устройства.<br><br><b>Важно:</b> за да използвате тази функция, трябва също така да изпълните следните задачи:<ul><li>Укажете <b>публичния URL адрес на услугите за синхронизиране</b> в раздела <b>Услуги за синхронизиране</b> на инструмента за администриране.</li><li>Добавете хранилище, за което услугите за синхронизиране да бъдат активирани за този работен плот.</li></ul>Ако деактивирате тази опция, но добавите хранилище, за което услугите за синхронизиране да бъдат активни за този работен плот, настройката на хранилището се игнорира.",
		admin_mobileqr_enable: "Покажете двумерния баркод на IBM Navigator на страницата за влизане:",
		admin_mobileqr_enable_hover: "Активирайте тази опция, ако желаете да покажете двумерния баркод за мобилното приложение IBM Navigator на страницата за влизане на уеб клиента.<br><br>Когато потребител сканира двумерния баркод, потребителят бива отведен към съответния магазин за приложения за неговото устройство, където той може да изтегли мобилното приложение IBM Navigator.",

		admin_streamlineservice_enable: "Услуга за редактиране:",
		admin_streamlineservice_enable_hover: "Само за потребители на FileNet P8. Активирайте тази опция, ако желаете потребителите на работната площ лесно да могат да добавят и редактират документи от собствени приложения или техните работни станции. <br><br>За да използвате тази настройки, вие трябва също така да: <ul><li>Активирате услугата за редактиране на едно или повече хранилища, свързани с тази работна плош</li><li>Инсталирате Клиента за редактиране или потребителските работни станции на IBM Content Navigator</li></ul>",

		admin_repository_general_instructions: "Трябва да се свържете с хранилището, преди да можете да конфигурирате параметри, системни свойства, папки и др.",
		admin_repository_system_instructions: "Укажете кои системни свойства да се показват за документите и папките в това хранилище.",

		admin_desktop_general_create_instructions: "Работният плот определя какво потребителят може да види и какво може да прави, когато влезе в уеб клиента. След като създадете работен плот, можете да изпратите неговия URL адрес на потребителите, така че те да могат да влязат в него.",
		admin_desktop_admin_instructions: "Работният плот за администриране се предоставя заедно с уеб клиента, за да могат административните потребители да настроят уеб клиента. Този работен плот има достъп до всички хранилища, които са конфигурирани за уеб клиента.",
		admin_desktop_repositories_instructions: "Укажете до кои хранилища желаете потребителите да имат достъп от този работен плот. Трябва да конфигурирате хранилищата, преди да можете да ги добавите към работния плот.<br><br><b>Съвет:</b> можете да ограничите кои хранилища са достъпни за всяка функция, когато конфигурирате оформлението на работния плот.",
		admin_desktop_menus_instructions: "Укажете до кои менюта желаете потребителите да имат достъп от този работен плот. Менютата указват кои действия са достъпни в зависимост от това какво е избрано в интерфейса.<br><br><b>Съвет:</b> можете да персонализирате съдържанието на менютата в раздела <b>Менюта</b> на инструмента за администриране или можете да създавате нови типове менюта, като създавате плъгини.",

		admin_desktop_no_repositories: "Няма конфигурирани хранилища.",

		admin_desktop_id_hover: "Идентификаторът на работния плот е включен в URL адреса на уеб клиента и указва кой работен плот е отворен, когато потребител влезе в уеб клиента. Идентификаторът трябва да е уникален и не можете да го променяте, след като запазите работния плот.<br><br>Идентификаторът може да съдържа само буквено-цифрени знаци и е с различаване на малките и големите символи.",
		admin_desktop_id_disabled_hover: "Идентификаторът на работния плот не може да се променя. Ако желаете да използвате различен идентификатор, трябва да създадете нов работен плот.",
		admin_desktop_name_hover: "Името на работния плот не може да съдържа следните символи: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Вашата конфигурация може да съдържа само един работен плот по подразбиране.",

		admin_repository_id_disabled_hover: "Идентификаторът на хранилището не може да се променя. Ако желаете да използвате различен идентификатор, трябва да създадете нова връзка с хранилище.",
		admin_printService_enable: "Отпечатвайте като използвате услугата за отпечатване на IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Ако изберете да активирате услугата за отпечатване на IBM Daeja ViewONE, документите се конвертират в PDF format и отпечатването може да бъде извършено чрез всеки уеб браузер.<br><br>Ако изберете да деактивирате услугата за отпечатване на IBM Daeja ViewONE, Вие се ограничавате до отпечатването на документи само в уеб браузъри, които поддържат Java аплети.  Някои уеб браузъри не поддържат Java аплети и следователно не поддържат отпечатване на аплети.<br><br>Вижте документацията за поддържаните браузъри.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Начална директория на потребител",
		admin_file_tracking_doc_directory_my_documents: "Директория за документи на потребител",
		admin_file_tracking_doc_directory_qp: "Определен път",
		admin_file_tracking_section_tile: "Конфигурация за проследяване на файлове",
		admin_file_tracking_home_path: "Начален път",
		admin_file_tracking_my_documents: "Моите документи",
		admin_file_tracking_exact_path: "Напълно определен път:",
		admin_file_tracking_qp: "Определен път",
		admin_file_tracking_ev: "Променлива на средата",
		admin_file_tracking_ev_us: "Променлива на персонализирана среда ",
		admin_file_tracking_del_local_copy: "Изтриване на локално копие:",
		admin_file_tracking_yes: "Да",
		admin_file_tracking_no: "Не",
		admin_file_tracking_del_local_copy_rt_state_editable: "Позволи потребителите да презаписват тази настройка",
		admin_file_tracking_del_local_copy_rt_state1: "Да",
		admin_file_tracking_del_local_copy_rt_state2: "Не",
		admin_file_Tracking_label: "Проследяване на файлове:",
		admin_file_Tracking_disable: "Деактивиране",
		admin_file_Tracking_enable: "Активиране",
		admin_file_tracking_label_hover_help: "Проследяването на файловете използва аплет, чрез който изписва и изтегля документи в конкретна директория на потребителските машини. Аплетът също така позволява на IBM Content Navigator да намира документи на потребителските машини, когато потребителите вписват документи.",
		admin_file_tracking_doc_directory: "Местоположение за съхранение:",
		admin_file_tracking_open_file: "Автоматично отваряне на файла",
		admin_file_Tracking_append_qualified_path: "Добавяне на директория",
		admin_file_Tracking_append_qualified_path_hover_help: "Можете да добавите директория в края на променливата на средата, ако желаете документите да се запазват в определена поддиректория. <br/><br/>Например можете да посочите документите да се изтеглят в директорията <i>EnterpriseDocuments</i> в началната директория на потребителя.",
		admin_file_Tracking_append_ev: "Добавяне на променлива на средата",
		admin_file_Tracking_append_ev_hover_help: "Можете да добавите променлива на средата, ако желаете документите да се запазват в динамично определена директория, например потребителска директория.<br/><br/>Например можете да посочите документите да се съхраняват в поддиректорията <i>потребителско_име</i> на споделена мрежова директория. ",
		admin_file_tracking_doc_directory_hover_help: "Укажете къде документите трябва да се съхраняват, когато се изписват и изтеглят.<br/><br/> <b>Съвет</b>: ако желаете да съхранявате документи в потребителска начална директория или в директория за документи по подразбиране, изберете <b>Променлива на средата</b>, което включва предварително определени променливи, които насочват към тези местоположения.",
		admin_file_tracking_qualified_path_hover_help: "Използвайте съответната структура на директория за Вашата операционна система Windows или Mac, за да укажете директорията или мрежовата директория, в която желаете да съхранявате документите. <ul><li>За Windows включете буква на дял в пътя, например C:\\Enterprise Documents.</li><li>За споделена мрежова директория въведете пътя във формата: \\\\име на сървър\\директория</li></ul><br/><b>Важно:</b> за да използвате тази опция, структурата на директорията, която посочвате, трябва да може да бъде създадена на всички клиентски работни станции във Вашата среда.",
		admin_file_tracking_environment_variable_path_hover_help: "Използвайте съответните променливи на средата за Вашата операционна система Windows или Mac, за да укажете директорията или мрежовата директория, в която желаете да съхранявате документи. <br/><br/>Опцията <b>Начална директория на потребител</b> съхранява документите в следната директория:<br/><ul><li>Windows: C:\\Users\\Име_на_потребителя</li><li>Mac: /Users/Име_на_потребителя</li></ul><br/>Опцията <b>Директория за документи на потребителя</b> съхранява документите в следната директория:<br/><ul><li>Windows: C:\\Users\\Име_на_потребителя\\Documents</li><li>Mac: /Users/Име_на_потребителя/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Укажете дали локалното копие на документа да бъде изтрито, когато потребителите го добавят или вписват в хранилището.<br/><br/>Изтриването на локалното копие Ви позволява да:<br/><ul><li>Гарантирате съвместимост с ИТ политики</li><li>Гарантирате, че потребителите работят с най-новите версии на документите</li></ul><br/><b>Ограничение:</b> тази настройка не се използва, когато потребителите добавят документи чрез плъзгане и пускане.<br/><br/>За IBM Content Navigator за Microsoft Office трябва да изберете <b>Изтриване на локалните файлове, когато потребителите добавят или вписват документ или отменят изписване</b> в раздела <b>Конфигуриране на Office</b> на работния плот.",
		admin_file_tracking_open_file_hover_help: "Тази настройка презаписва всички предпочитания за работа с документи, които са конфигурирани в уеб браузърите на потребителите. </br></br><b>Ограничение:</b> Тази настройка не се използва от IBM Content Navigator за Microsoft Office.",
		admin_file_tracking_over_write_file: "Презаписване на локално копие:",
		admin_file_tracking_over_write_file_hover_help: "Укажете дали да се презапише локалното копие на документа, когато потребителите го изпишат от хранилището. <br/><br/>Презаписването на локалното копие Ви позволява да:<br/><ul><li>Гарантирате, че потребителите работят с най-новите версии на документите</li><li>Предотвратявате това потребителите да виждат съобщение, когато съществува локално копие</li></ul> </br></br><b>Ограничение:</b> тази настройка не се използва от IBM Content Navigator за Microsoft Office, ако сте избрали <b>Позволи потребителите да презаписват тази настройка</b>.",
		admin_file_tracking_over_write_file_state_editable: "Позволи потребителите да презаписват тази настройка",
		admin_file_tracking_inline_help: "Проследяването на файловете опростява процеса по вписването и изписването на документи в/от хранилището. То също така Ви позволява да управлявате начина, по който документите се съхраняват на потребителските машини. <br/><br/>Освен това проследяването на файловете позволява документите да бъдат следени в няколко компонента на IBM Content Navigator components, например в уеб клиента и в IBM Content Navigator за Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Трябва да активирате Стандартно или Сървърно удостоверяване, преди да се свържете с хранилището.",
		admin_box_use_oauth: "Тип удостоверяване:",
		admin_box_use_oauth_hover: "Изберете Стандартно или Сървърно удостоверяване в производствената среда, когато предоставяте достъп до документи в Box от IBM Content Navigator. Укажете стойностите client_id и OAuth2 client_secret, които са асоциирани с това разгръщане на IBM Content Navigator. Можете да получите тези стойности от Box, след като създадете приложението Box за Вашия сървър на IBM Content Navigator.<br/><br/>Изберете Удостоверяване на разработчик в средата на разработване. Разработчиците могат да влязат в Box, като използват своите акаунти на разработчици и генерират маркер за разработчици, който е валиден за 60 минути. Маркерите за разработчици им позволяват да влизат в Box, като използват маркера като паролата за всеки потребителски идентификатор.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Поддомейн на корпоративен акаунт за Box:",
		admin_box_share: "Идентификатор на връзка с диспечера на задачите:",
		admin_box_share_hover: "За копиране в Box или споделяне в Box диспечерът на задачите използва администраторски потребителски идентификатор и парола, за да изпълни фонови задачи, които модифицират хранилището.<br/><br/>Щракнете върху Задаване и влезте в Box, като използвате валиден администраторски акаунт за Box.<br/><br/>Ако конфигурирате работен плот, като изберете това хранилище на Box като хранилището за споделени файлове, трябва да посочите администратор на Box, който има неограничено пространство за съхранение в Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Автоматично отваряне на файла",
		file_tracking_runtime_overwrite_hover_help: "Ако не изберете тази опция и имате документ на локалната файлова система със същото име, документът ще бъде изписан, но няма да се изтегли, освен ако не предприемете някое от следните действия:<br/><ul><li> Изтеглите документа в поддиректория на директорията по подразбиране. Ако изберете поддиректория, местоположението на документа може да се проследи от уеб приложението.</li><li>Преименувате документа, който изтегляте. Преименуването на документа предотвратява конфликти с именуването на файловете.</li></ul>",
		open_file: "Автоматично отваряне на файла",
		over_write_file: "Презаписване на локално копие",
		checkout_and_download_file: "Изписване и изтегляне на документи",
		download_to_local_directory: "Изтегли в:",
		checkout_and_download_button_title: "Изписване и изтегляне",
		checkout_without_java_confirmation_dialog: "Файлът не може да се изтегли и проследи от функцията за проследяване на файлове.",
		browse_for_directory: "Преглед",
		selected_documents: "Избрани документи",

		checkout_without_java_confirmation_text: "Този проблем може да възникне поради следните причини:<br/><ul><li>Java Runtime Environment (JRE) не е инсталирана на работната станция.</li><li>Java плъгинът не е активиран в уеб браузъра.</li><li>Уеб браузърът не поддържа Java.</li></ul><br/><br/>За да отстраните проблема, извършете необходимото действие:<br/><br/><ul><li>Ако желаете да продължите с изтеглянето на файла, без да активирате проследяването на файловете, щракнете върху OK.</li><li>Ако желаете да изтеглите файла с активирано проследяване на файловете, отменете изтеглянето и се уверете, че JRE е инсталирана на работната станция и че Java плъгинът е активиран в уеб браузъра.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Документът беше изписан и изтеглен, но не може да се отвори.",
		runtime_file_tracking_open_error_explanation: "Операционната система, която е инсталирана на работната станция, не поддържа файлове от този тип.",
		runtime_file_tracking_open_error_userResponse: "За да отстраните проблема, предприемете едно от следните действия:<br/><br/><ul><li>Ако трябва да работите с документа, отворете уеб клиента от друга работна станция, която има различна операционна система.</li><li>Ако трябва само да прегледате документа, щракнете с десния бутон на мишката върху него в уеб клиента и щракнете върху Отваряне.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Документът беше изписан, но не и изтеглен.",
		runtime_file_tracking_save_file_error_explanation: "Документ със същото има вече съществува на локалната файлова система, но не е бил презаписан. ",
		runtime_file_tracking_save_file_error_userResponse: "Ако желаете да изтеглите файла от хранилището, трябва да презапишете локалното копие на документа, когато го изтеглите от хранилището.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Документът беше изписан, но не може да се изтегли или отвори.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Документ със същото име вече съществува на локалната файлова система. Файлът не е бил презаписан, което пречи на това документът на хранилището да бъде изтеглен и отворен.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Ако желаете да изтеглите файла от хранилището, трябва да презапишете локалното копие на документа, когато го изтеглите от хранилището.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Документът не може да бъде изтеглен.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Променливата на средата ${0}, която е необходима за проследяването на файлове, не е определена на тази клиентска машина.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "За да отстраните проблема:<br/><br/><ul><li>Добавете променливата на средата ${0} към променливите на средата на операционната система.</li><li>Излезте от уеб клиента и затворете уеб браузъра. След това влезте отново.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Документът не може да се изтегли и проследи от аплета за проследяване на файлове.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Директорията ${0}, която е необходима за проследяването на файлове, не е определена и не може да бъде създадена.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "За да отстраните този проблем, извършете необходимото действие:<br/><br/><ul><li>Щракнете върху Преглед и изберете друга директория на клиентската машина. Ако изберете тази опция, файлът няма да бъде проследен.</li><li>Свържете се с Вашия системен администратор и го помолете да зададе различна директория, която да се използва за проследяването на файлове. Това може да е необходимо, ако например указаната директория е за операционна система Windows, а Вие използвате Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Ако до този работен плот бъде осъществен достъп от устройства с различни операционни системи, можете да намалите вероятността от възникване на проблеми, като предприемете някое от следните действия:<br/><br/><ul><li>Използвайте променливите на средата, за да укажете местоположението за съхранение на клиентските машини.</li><li>Създайте различни работни плотове за потребителите на всеки тип устройство. Например създайте работен плот за потребители с операционна система Windows и работен плот за потребители с операционна система Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Вашата заявка не може да бъде обработена.",
		runtime_file_tracking_generic_error_explanation: "Възникна грешка в аплета за проследяване на файлове.",
		runtime_file_tracking_generic_error_userResponse: "За помощ се свържете със системния администратор.",
		runtime_file_tracking_generic_error_adminResponse: "Отворете Java конзолата и опитайте да подадете заявката отново. Данните за грешката са показани в Java конзолата.<br/><br/>Можете да осъществите достъп до Java конзолата от контролния панел (за Windows) или системните предпочитания (за Macintosh) на операционната система.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Вашата заявка не може да бъде обработена",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Следните файлове бяха добавени към хранилището, но не бяха изтрити от локалната файлова система: ${0}. Това обикновено възниква, когато файловете са отворени или се използват от друго приложение. При нужда можете ръчно да изтриете файловете.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Документът не може да бъде изтеглен.",
		runtime_file_tracking_ioexception_error_explanation: "Документът не може да бъде изтеглен.",
		runtime_file_tracking_ioexception_userResponse: "Възможно е да нямате необходимите позволения да записвате в следната директория: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Уверете се, че имате позволения за записване в посочената директория. Ако нямате позволения за записване в посочената директория, се свържете със системния администратор.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Вашата заявка не може да бъде обработена.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Тази грешка може да възникне поради следните причини:<br/><br/><ul><li>Използвате Safari на Mac OS и Java се изпълнява в безопасен режим.</li><li>Нямате позволения за четене/записване за директорията, която е посочена в конфигурацията за проследяване на файлове за Вашия работен плот.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Можете да продължите да използвате IBM Content Navigator без проследяване на файловете или да изпълните следните стъпки, за да отстраните проблема:<br/><br/><ol><li>Активирайте небезопасния режим на Java в Safari.</li><li>Ако бъдете попитани дали желаете да се доверите на уеб сайта на IBM Content Navigator, щракнете върху <b>Доверявам се</b>, за да заредите страницата, след което активирайте небезопасния режим на Java в Safari.</li></ol><br/><br/>Ако Safari е конфигуриран правилно, изпълнете следните стъпки, за да отстраните проблема:<br/><br/><ol><li>Уверете се, че имате позволения за четене/записване за директорията, която е посочена в конфигурацията за проследяване на файлове за Вашия работен плот.</li><li>Ако нямате позволения за четене/записване за директорията, редактирайте разрешенията на директорията.</li><li>Ако не можете да редактирате разрешенията за тази директория, администраторът трябва да промени директорията, която е конфигурирана за файловото проследяване, или да Ви даде достъп до работен плот, за който има конфигурирана различна директория за файлово проследяване.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Вашата заявка не може да бъде обработена.",
		runtime_file_tracking_java__notfound_error_explanation: "Този проблем обикновено възниква в следните ситуации<br/><br/><ul><li>Java Runtime Environment (JRE) не е инсталирана или активирана на работната станция.</li><li>Версията на JRE на работната станция не е съвместима с версията на IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Можете да продължите да използвате IBM Content Navigator без проследяване на файловете или да изпълните следните стъпки, за да отстраните проблема с JRE:<br/><br/><ol><li>Уверете се, че JRE е инсталирана на работната станция.</li><li>Уверете се, че версията на JRE на работната станция е съвместима с IBM Content Navigator. Можете да намерите списък с поддържаните версии в документа <i>Хардуерни и софтуерни изисквания за IBM Content Navigator</i> на сайта за софтуерна поддръжка на IBM.</li><li>Уверете се, че JRE е активирана на работната станция.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Вашата заявка не може да бъде обработена.",
		runtime_file_tracking_security_error_explanation: "Нямате позволения за четене/записване за директорията, която е посочена в конфигурацията за проследяване на файлове за Вашия работен плот.",
		runtime_file_tracking_security_error_userResponse: "Можете да продължите да използвате IBM Content Navigator без проследяване на файловете или да работите съвместно със системния администратор, за да изпълните следните стъпки:<ol><li>Уверете се, че имате позволения за четене/записване за директорията, която е посочена в конфигурацията за проследяване на файлове за Вашия работен плот. </li><li>Ако нямате позволения за четене/записване за директорията, редактирайте разрешенията на директорията.</li><li>Ако не можете да редактирате разрешенията за тази директория, администраторът трябва да промени директорията, която е конфигурирана за файловото проследяване, или да Ви даде достъп до работен плот, за който има конфигурирана различна директория за файлово проследяване.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Бяха изтеглени следните документи: ${0}.",

		admin_file_tracking_inline_help: "Проследяването на файловете опростява процеса по добавянето на документи, както и вписването и изписването им в/от хранилището. То също така Ви позволява да управлявате начина, по който документите се съхраняват на потребителските машини.<br/><br/>Освен това проследяването на файловете позволява документите да бъдат следени в няколко компонента на IBM Content Navigator components, например в уеб клиента и в IBM Content Navigator за Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Идентификаторът на менюто не може да започва с \"Default\".  \"Default\" е запазен префикс за идентификатори на менюта.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Идентификаторът може да съдържа само буквено-цифрени знаци и е с различаване на малките и големите символи.",
		admin_repository_id_hover: "Идентификаторът на хранилището е включен в URL адресите на уеб клиента, в предпочитаните елементи и във връзките в имейли, за да укаже в кое хранилище трябва да се влезе. Идентификаторът трябва да е уникален и не можете да го променяте, след като запазите хранилището.<br><br>Идентификаторът може да съдържа само буквено-цифрени знаци и е с различаване на малките и големите символи.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Името не може да съдържа никой от следните символи: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Идентификаторът на работния плот не може да съдържа интервали или следните символи: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Името на работния плот не може да съдържа никой от следните символи: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Показваното име не може да съдържа следните символи: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Укажете името на хранилището, което да се показва на потребителите в уеб клиента.<br><br>Името не може да съдържа следните символи: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Укажете името на хоста или IP адреса на сървъра на Content Manager OnDemand, към който желаете да се свържете, например server.id.com.",
		admin_server_p8_name_hover: "Укажете URL адреса на сървъра на Content Engine или Content Platform Engine. URL адресът е с различаване на главните и малките букви и има следния формат:<br><br><ul><li>На WebSphere Application Server: iiop://host_name:port_number/FileNet/Engine. На базови разполагания номерът на порта по подразбиране е 2809.</li><li>На WebLogic Server: t3://host_name:port_number/FileNet/Engine. Номерът на порта по подразбиране е 7001.</li></ul><br><br>За високодостъпни конфигурации на Content Engine и Content Platform Engine използвайте високодостъпния EJB транспортен URL адрес без префикса cemp:. ",
		admin_server_p8_protocol_hover: "Укажете протокола, който да се използва за комуникацията с Content Engine.",
		admin_server_cm_name_hover: "Укажете локалното каталожно име на базата данни на Content Manager или името на връзката с библиотечния сървър. Това име е стойността, която е посочена за променливата ICMSERVER.",
		admin_repository_cmis_hover: "Укажете идентификатора на хранилището, към което желаете да се свържете.  Идентификаторът на всички хранилища в CMIS средата се изброява в документа за AtomPub обвързваща услуга.  <br/><br/><b>Съвет:</b> можете също така да въведете звездичка (*), за да се свържете с първото или единственото хранилище, което е определено в документа за Atompub обвързваща услуга.",
		admin_url_cmis_hover: "Форматът на URL адреса варира при различните доставчици. Вижте CMIS документацията или се свържете с администратора на CMIS сървъра, за да разберете какъв е URL адресът.",
		admin_repcfg_cmis_status_columns_hover: "Укажете състоянието на елементите, за които желаете да видите икони. Иконите за състояние се показват до документите в списъка със съдържание.",
		admin_port_hover: "Укажете TCP/IP номера на порт, който се слуша от Content Manager OnDemand сървъра. Стойността по подразбиране е 1445.",
		admin_unified_searches_hover: "Укажете дали желаете потребителите да могат да запазват търсения в множество хранилища на това хранилище.<br/><br/>Ако не активирате тази опция, потребителите все още могат да създават търсения в множество хранилища, които се изпълняват спрямо това хранилище. Можете да не позволите на потребителите да създават търсения в множество хранилища на нивото на работен плот.<br/><br/>Ако активирате търсенията в множество хранилища, IBM Content Navigator създава модела на данни за търсене в множество хранилища на хранилището.<br/><br/>За IBM FileNet Content Manager трябва да се свържете с хранилището като администратор на Content Engine, преди да активирате тази опция.",
		admin_unified_searches_cm_hover: "Укажете дали желаете потребителите да могат да запазват търсения в множество хранилища на това хранилище.<br/><br/>Ако не активирате тази опция, потребителите все още могат да създават търсения в множество хранилища, които се изпълняват спрямо това хранилище. Можете да не позволите на потребителите да създават търсения в множество хранилища на нивото на работен плот.<br/><br/>Ако активирате търсенията в множество хранилища, IBM Content Navigator създава модела на данни за търсене в множество хранилища на хранилището.",
		admin_max_results_hover: "Укажете дали да ограничите броя на резултатите, които се връщат от търсене. Ако не ограничите броя на резултатите от търсенето, е възможно да се сблъскате с проблеми с работата на системата, ако търсенето върне голям брой резултати.",
		admin_timeout_hover: "Укажете колко дълго (в секунди) може да се изпълнява едно търсене на хранилището. Ако търсенето не завърши в рамките на указания времеви период, уеб клиентът отменя заявката. Препоръчаното максимално време за изчакване е 60 секунди.",
		admin_object_store_hover: "Укажете обектното хранилище, с което желаете да свържете през сървъра на Content Engine. Можете да получите символичното име от административната конзола на Content Platform Engine.",
		admin_object_store_display_name_hover: "Показваното име на обектното хранилище е задължително, ако желаете да използвате работните потоци на IBM FileNet P8. Можете да получите показваното име на обектното хранилище от административната конзола на Content Platform Engine.",
		admin_all_searches_hover: "Укажете дали да ограничите броя на търсенията, които се показват под <b>Всички търсения</b>, когато потребителите изпълняват търсения в хранилището. Ако не ограничите броя на търсенията, е възможно да се сблъскате с проблеми с работата на системата, ако хранилището включва голям брой запазени търсения.",

		admin_text_desktop: "Работен плот",
		admin_text_repository: "Хранилище",
		admin_text_plugin: "Плъгин",
		admin_text_theme: "Тема",
		admin_text_menu: "Меню",
		admin_text_reason_code: "Причина за редакция",
		admin_text_redactions: "Редакции",
		admin_text_viewer_mapping: "Съпоставяне на визуализатор",
		admin_text_mobile_feature: "Мобилна функция",
		admin_test_interface_text: "Текст на интерфейс",
		admin_text_interface_text_locale: "Локализиран текст на интерфейс",
		admin_text_icon_status: "Икона за състояние",
		admin_text_icon: "Икона",
		admin_text_file_type: "Файлов тип",
		admin_text_viewer: "Визуализатор",
		admin_text_desktop_access: "Достъп до работен плот",
		admin_text_mapped_properties_for_office: "Съпоставени свойства за Microsoft Office",
		admin_text_desktop_features: "Функции на работен плот",
		admin_text_unknown: "Неизвестно",
		admin_folder_instruction: "Укажете свойствата, които се показват за документи и папки в списъка със съдържание при преглед от потребителите. Можете също така да укажете реда, в който ще се покажат свойствата.",
		admin_search_instruction: "Укажете кои опции се избират по подразбиране, когато потребителите създадат търсене.",
		admin_repository_office_conf_class_instruction: "Ако имате инсталиран IBM Content Navigator за Microsoft Office на клиентските машини във Вашата среда, можете да укажете начина, по който документите ще бъдат обработвани, когато се добавят или вписват в хранилището.",
		admin_repository_office_conf_instruction: "Съпоставете свойствата на документа на Microsoft Office към свойствата, които са определени на това хранилище.<br/><br/>Когато съпоставянето на свойствата е активирано за работен плот, с който е асоциирано това хранилище, свойствата, които са зададени на документите на Microsoft Office, се използват за попълване на свойствата на хранилището, когато потребителят добави документ от IBM Content Navigator за Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Съпоставяне на свойства",
		admin_repository_office_conf_prop_mapping_title1: "Интегриране на MS Office",
		admin_office_conf_instruction: "Можете да контролирате как IBM Content Navigator се интегрира с приложенията на Microsoft Office, когато IBM Content Navigator за Microsoft Office е инсталиран на клиентските машини<br /><br /><b>Важно:</b> ако изберете <b>Съпоставяне на свойства на Office...</b>, трябва също така да конфигурирате съпоставянето на свойствата за всички хранилища, които са асоциирани с този работен плот. Можете да конфигурирате съпоставянето на свойствата в раздела <b>Свойства на Office</b> за всички хранилища във Вашата среда.",
		admin_desktop_workflows_instruction: "<b>Само за IBM FileNet P8 системи:</b> укажете кои приложни пространства се показват в този работен плот. Редът на избраните приложни пространства определя реда, в който приложните пространства се показват в уеб клиента.<br><br><b>Съвет:</b> можете да промените показваното име на приложните пространства, като укажете нови имена в раздела <b>Етикети</b> на инструмента за администриране.",
		admin_search_filtered_properties_instruction: "Укажете свойствата, по които потребителите могат да търсят. Можете да скриете всички свойства, по които не желаете потребителите да могат да търсят.",
		admin_search_filtered_operators_instruction: "Укажете операторите, които са достъпни, когато потребителите търсят конкретен тип данни, като например дата или цяло число. Можете да скриете всички оператори, които не желаете потребителите да могат да избират.",
		admin_search_default_search_results_instruction: "Укажете свойствата, които се показват за документи и папки в резултатите от търсенето. Можете да скриете всички свойства, които не желаете да се показват в резултатите от търсенето.",
		admin_search_default_search_results_p8_cmis_instruction: "Укажете свойствата, които се показват за документи в резултатите от търсенето. Можете да скриете всички свойства, които не желаете да се показват в резултатите.",

		admin_datetimeOp: "Дата Час",
		admin_floatOp: "Число с плаваща запетая",
		admin_integerOp: "Цяло число",
		admin_stringOp: "Низ",
		admin_binaryOp: "Двоично число",
		admin_objectOp: "Обект",
		admin_idOp: "Идентификатор",
		admin_userOp: "Потребител",
		admin_booleanOp: "Булеви",

		admin_string: "Низ",
		admin_long: "Дълга",
		admin_date: "Дата",
		admin_double: "Двойно",
		admin_object: "Обект",
		admin_guid: "GUID",
		admin_boolean: "Булеви",

		admin_repcfg_heading: "Можете да презапишете поведението по подразбиране на това хранилище, като зададете конфигурационните параметри.",
		admin_repcfg_heading_od: "Можете да презапишете поведението по подразбиране на това хранилище, като зададете конфигурационните параметри.<br /><br /><b>Важно:</b> за да използвате уеб клиента с Content Manager OnDemand, трябва също така да укажете стойности за параметрите, които са включени в раздела <b>Content Manager OnDemand</b> под <b>Настройки</b>, които се прилагат към всички хранилища на Content Manager OnDemand, към които сте свързани.",
		admin_repcfg_teamspaces: "Управление на екипни пространства:",
		admin_repcfg_enable: "Активиране",
		admin_repcfg_disable: "Деактивиране",

		admin_repcfg_deliver_redacted_pdf_files_as: "Редактираните PDF файлове ще бъдат доставени като:",
		admin_repcfg_burn_pdf_to_pdf: "PDF файлове",
		admin_repcfg_burn_pdf_to_tiff: "TIFF файлове",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "PDF файл, който е редактиран чрез прилагане на базирани на роля редакции, може да бъде доставен на клиента в различен формат на файл. Когато форматът на файла се промени, файловото разширение и MIME типът също се променят.<br><br>Например, когато PDF файл е доставен като TIFF файл, файловото разширение се променя на .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Позволява на потребителите да сливат и разделят страници, които имат редакции, базирани на роли",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Изберете тази опция, за да позволявате на потребителите да сливат и разделят страници, които имат редакции на базата на роли. Потребителите, които не са редактори, няма да могат да правят редакции на базата на роли и няма да имат достъп до чувствителните данни, свързани с редакциите на базата на роли, дори ако тази опция е позволена.",
		admin_repcfg_modify_teamspace_roles: "Позволи собствениците да модифицират ролите на съществуващите екипни пространства",
		admin_repcfg_tm_delete_teamspace: "Позволи собствениците да изтриват екипни пространства, включително и съдържанието",
		admin_repcfg_tm_delete_teamspace_id_missing: "Трябва да укажете потребителското име на администратора на хранилището.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Трябва да укажете паролата на администратора на хранилището.",
		admin_repcfg_teamspace_display_Recent: "Показване само на наскоро модифицираните екипни пространства ",
		admin_repcfg_teamspace_display_Recent_value: "Дни от последната модификация:",

		admin_repcfg_folder_selector: "Главна папка:",
		admin_repcfg_enable_folder_selector: "Активиране",
		admin_repcfg_disable_folder_selector: "Деактивиране",
		admin_repcfg_SSO: "Единен вход:",
		admin_repcfg_teamspace_template_permission_text: "Приписване на създатели на шаблони за екипно пространство:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Укажете групите или потребителите, които могат да създават шаблони за екипни пространства. Потребителите и групите получават съответните настройки за защитата на необходимите класове и папки. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Научете повече</a><br/><br/><b>Препоръка:</b> използвайте групи, за да опростите управлението на екипното пространство.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Укажете групите или потребителите, които могат да създават шаблони за екипни пространства. Потребителите се добавят към съответните ACL и получават необходимите права. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Научете повече</a><br/><br/><b>Препоръка:</b> използвайте групи, за да опростите управлението на екипното пространство.",
		admin_repcfg_teamspace_permission_text: "Задаване на роли на екипни пространства:",
		admin_repcfg_teamspace_permission_hover_p8: "Укажете групите или потребителите, които могат да създават и използват екипни пространства. Потребителите получават съответните настройки за защитата на необходимите класове и папки. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Научете повече</a><br/><br/><b>Препоръка:</b> използвайте групи, за да опростите управлението на екипното пространство.",
		admin_repcfg_teamspace_permission_hover_cm: "Укажете групите или потребителите, които могат да създават и използват екипни пространства. Потребителите се добавят към съответните ACL и получават необходимите права. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Научете повече</a><br/><br/><b>Препоръка:</b> използвайте групи, за да опростите управлението на екипното пространство.",
		admin_repcfg_entry_template_permission_text: "Задаване на роли на шаблони за запис:",
		admin_repcfg_entry_template_permission_hover_p8: "Укажете групите или потребителите, които могат да създават и използват шаблони за запис. Потребителите получават съответните настройки за защитата на документния клас за шаблон за запис. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Научете повече</a><br/><br/><b>Препоръка:</b> използвайте групи, за да опростите управлението на шаблоните за запис.",
		admin_repcfg_entry_template_permission_hover_cm: "Укажете групите или потребителите, които могат да създават и използват шаблони за запис. Потребителите се добавят към съответните ACL и получават необходимите права. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Научете повече</a><br /><br /><b>Препоръка:</b> използвайте групи, за да опростите управлението на шаблоните за запис.",
		admin_repcfg_office_template_permission_text: "Задаване на роли на шаблони:",
		admin_repcfg_office_template_permission_hover_cm: "Укажете групите или потребителите, които могат да създават, регистрират или използват шаблони на Microsoft Office Online или Edit Service. Потребителите се добавят към съответните ACL и получават необходимите права.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a><br /><br /><b>Препоръка:</b> използвайте групи, за да опростите управлението на шаблоните на Microsoft Office Online или Edit Service.",
		admin_repcfg_draft_permission_text: "Приписване на роли за чернови:",
		admin_repcfg_draft_permission_hover_cm: "Укажете групите или потребителите, които могат да създават чернови на документи на Microsoft Office Online или Edit Service при съвместно редактиране. Всеки потребител, който трябва съвместно да редактира документи в Microsoft Office Online или Edit Service, трябва да има съответните права за създаване на чернови. Потребителите се добавят към съответните ACL и получават необходимите права. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a><br /><br /><b>Препоръка:</b> Използвайте групи, за да опростите управлението на черновите.",
		admin_repcfg_search_permission_text: "Задаване на роли за търсене:",
		admin_repcfg_search_permission_hover_p8: "Укажете групите или потребителите, които могат да създават или използват запазени търсения и търсения в множество хранилища. Потребителите получават съответните настройки за защитата на необходимите класове. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Научете повече</a><br /><br /><b>Препоръка:</b> използвайте групи, за да опростите управлението на търсенията.",
		admin_repcfg_search_permission_hover_cm: "Укажете групите или потребителите, които могат да създават, редактират или използват запазени търсения и търсения в множество хранилища. Потребителите се добавят към съответните ACL и получават необходимите права. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Научете повече</a><br /><br /><b>Препоръка:</b> използвайте групи, за да опростите управлението на търсенията.",
		admin_repcfg_search_permission_title: "Роли за търсене",
		admin_repcfg_search_permission_intro_text: "Уверете се, че потребителите имат достъп до работен плот, който поддържа тяхната роля. Например се уверете, че създателите на търсенето имат достъп до работен плот, който им позволява да създават търсения и търсения в множество хранилища.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Администраторите на шаблони за екипни пространства са потребители, които имат позволения за <b>пълен контрол</b> на хранилището (хранилището за обекти). Не можете да променяте списъка с администратори на шаблони за екипни пространства от инструмента за администриране. <p>Администраторите на шаблони за екипни пространства могат да изтриват или променят всички шаблони за екипни пространства. Не е нужно потребителят, който създаде даден шаблон за екипно пространство, да го споделя с администраторите на шаблоните за екипни пространства.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Когато обозначите потребител или група като създател на шаблон за екипно пространство, потребителят или групата получава съответното ниво на защита за хранилището, за да създаде шаблоните за екипно пространство. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Научете повече</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Потребители и групи, на които са дадени привилегии, различни от привилегиите, асоциирани с Администратори и Създатели.<p>Можете да преместите тези потребители и групи до роля на създатели на шаблон на екипно пространство, като ги премахнете от ролята Други и ги определите като създатели на шаблон на екипно пространство.<p>Можете да прегледате привилегиите, които понастоящем са дадени на тези потребители и групи, като използвате IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Администраторите на екипни пространства са потребители, които имат позволения за <b>пълен контрол</b> на хранилището (хранилището за обекти). Не можете да променяте списъка с администратори на екипни пространства от инструмента за администриране.<p>Администраторите на екипни пространства могат да изтриват или променят всички екипни пространства. Не е нужно потребителят, който създава екипно пространство, да го споделя с администраторите на екипни пространства.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Когато обозначите потребител или група като създател на екипно пространство, потребителят или групата получава съответното ниво на защита за хранилището, за да създаде екипните пространства. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Научете повече</a>",
		admin_repcfg_teamspace_user_hover_p8: "Когато обозначите потребител или група като потребител на екипно пространство, потребителят или групата получава съответното ниво на защита за хранилището, за да използва екипни пространства. Въпреки това потребителят трябва да е член на екипното пространство, за да има достъп до него. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Научете повече</a><p><b>Съвет:</b> ако желаете всички потребители във Вашата среда да могат да виждат екипните пространства, можете да добавите псевдо акаунта #AUTHENTICATED-USERS към ролята за потребител на екипното пространство.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Потребители и групи, на които са предоставени привилегии, различни от привилегиите, асоциирани с Администратори, Създатели и Потребители.<p>Можете да преместите тези потребители и групи до предварително определени роли, като ги премахнете от ролята Други и след това им възложите роли за екипно пространство.<p>Можете да прегледате привилегиите, които понастоящем са дадени на тези потребители и групи, като използвате IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Администраторите на шаблони за запис са потребители, които имат позволения за <b>пълен контрол</b> на хранилището (хранилището за обекти). Не можете да променяте списъка с администратори на шаблони за запис от инструмента за администриране. <p>Администраторите на шаблони за запис могат да изтриват или променят всички шаблони за запис. Не е нужно потребителят, който създаде даден шаблон за запис, да го споделя с администраторите на шаблоните за запис.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Когато обозначите потребител или група като създател на шаблон за запис, потребителят или групата получава съответното ниво на защита за хранилището, за да създаде шаблони за запис. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Научете повече</a>",
		admin_repcfg_entry_template_user_hover_p8: "Когато обозначите потребител или група като потребител на шаблон за запис, потребителят или групата получава съответното ниво на защита за хранилището, за да използва шаблони за запис. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Научете повече</a><p><b>Съвет:</b> ако желаете всички потребители във Вашата среда да могат да използват шаблони за запис, можете да добавите псевдо акаунта #AUTHENTICATED-USERS към ролята за потребител на входен шаблон.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Потребители и групи, на които са предоставени привилегии, различни от привилегиите, асоциирани с Администратори, Създатели и Потребители.<p>Можете да преместите тези потребители и групи до предварително определени роли, като ги премахнете от ролята Други и след това им възложите роли за шаблон за запис.<p>Можете да прегледате привилегиите, които понастоящем са дадени на тези потребители и групи, като използвате IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Когато обозначите потребител или група като създател на шаблон за екипно пространство, потребителят или групата получава съответните права, за да създава шаблони за екипни пространства в хранилището. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Научете повече</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Когато обозначите потребител или група като създател на екипно пространство, потребителят или групата получава съответните права, за да създава екипни пространства в хранилището. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Научете повече</a>",
		admin_repcfg_teamspace_user_hover_cm: "Когато обозначите потребител или група като потребител на екипно пространство, потребителят ли групата получава съответните права, за да използва екипни пространства в хранилището. Въпреки това потребителят трябва да е член на екипното пространство, за да има достъп до него. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Научете повече</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Когато обозначите потребител или група като създател на шаблон за запис, потребителят или групата получава съответните права, за да създава шаблони за запис в хранилището. <br/><br/>Въпреки това, настройките за защита за конкретния шаблон за запис определят права, които потребителят или групата имат относно входния шаблон. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Научете повече</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Когато обозначите потребител или група като редактор на шаблон за запис, потребителят или групата получава съответните права, за да променя шаблоните за запис в хранилището. <br/><br/>Въпреки това, настройките за защита за конкретния шаблон за запис определят права, които потребителят или групата имат относно входния шаблон. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Научете повече</a>",
		admin_repcfg_entry_user_hover_cm: "Когато обозначите потребител или група като потребител на шаблон за запис, потребителят или групата получава съответните права, за да използва шаблони за запис в хранилището. <br/><br/>Въпреки това, настройките за защита за конкретния шаблон за запис определят права, които потребителят или групата имат относно входния шаблон. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Научете повече</a>",
		admin_repcfg_office_template_creators_hover_cm: "Когато обозначите потребител или група като създател на шаблон за Microsoft Office Online или Edit Service, потребителят или групата получава съответните права, за да създава файлове с шаблони в хранилището. <br/><br/>Въпреки това, настройките за защита за конкретен файл с шаблон определят привилегиите, които потребителят или групата има за шаблона. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a>",
		admin_repcfg_office_template_editors_hover_cm: "Когато обозначите потребител или група като редактор на шаблон за Microsoft Office Online или Edit Service, потребителят или групата получава съответните права, за да променя файлове с шаблони в хранилището.  <br/><br/>Въпреки това, настройките за защита за конкретен файл с шаблон определят привилегиите, които потребителят или групата има за шаблона. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a>",
		admin_repcfg_office_template_user_hover_cm: "Когато обозначите потребител или група като потребител на шаблон за Microsoft Office Online или Edit Service, потребителят или групата получава съответните права да прилага шаблон, когато създава нов Office Online или Edit Service документ от уеб клиента.  <br/><br/>Въпреки това, настройките за защита за конкретен файл с шаблон определят привилегиите, които потребителят или групата има за шаблона.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a>",
		admin_repcfg_draft_creators_hover_cm: "На всеки потребител, който трябва съвместно да редактира документи в Microsoft Office Online или Edit Service, трябва да бъде приписана такава роля. Не задавайте на потребители роля на редактор или потребителска роля. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a>",
		admin_repcfg_draft_editors_hover_cm: "На всеки потребител, който трябва съвместно да редактира документи в Microsoft Office Online или Edit  Service, трябва да бъде приписана ролята <b>създател</b>. Ако на даден потребител е зададена ролята на редактор, той не може да създава чернови, които са необходими за съвместно редактиране.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a>",
		admin_repcfg_draft_user_hover_cm: "На всеки потребител, който трябва съвместно да редактира документи в Microsoft Office Online или Edit  Service, трябва да бъде приписана ролята <b>създател</b>. Ако на даден потребител е зададена потребителска роля, той не може да създава чернови, които са необходими за съвместно редактиране.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Научете повече</a>",		
		admin_repcfg_search_others_hover_p8: "Потребители и групи, на които са предоставени привилегии, различни от привилегиите, асоциирани с Администратори, Създатели и Потребители.<p>Можете да преместите тези потребители и групи до предварително определени роли, като ги премахнете от ролята Други и след това им възложите роли за търсене.<p>Можете да прегледате привилегиите, които понастоящем са дадени на тези потребители и групи, като използвате IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Администраторите на търсения са потребители, които имат позволения за <b>пълен контрол</b> на хранилището (хранилището за обекти). Не можете да променяте списъка с администратори на търсения от инструмента за администриране. <br /><br />Администраторите на търсения могат да изтриват или променят всички търсения. Не е нужно потребителят, който създава дадено търсене, да го споделя с администраторите на търсения.",
		admin_repcfg_search_creators_hover_p8: "Когато обозначите потребител или група като създател на търсене, потребителят или групата получава съответното ниво на защита за хранилището, за да създава търсения. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Научете повече</a>",
		admin_repcfg_search_user_hover_p8: "Когато обозначите потребител или група като потребител на търсене, потребителят или групата получава съответното ниво на защита за хранилището, за да използва търсения <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Научете повече</a><br /><br /><b>Съвет:</b> ако желаете всички потребители във Вашата среда да могат да използват търсенията, можете да добавите псевдо акаунта #AUTHENTICATED-USERS към ролята за потребител на търсене.<br/><br />По подразбиране потребителят на търсене може да създава търсения и търсения в множество хранилища, но не може да ги запазва. Можете да забраните на потребителите на търсения да създават търсения, като ги накарате да използват работен плот, за който са избрани следните опции:<ul><li><b>Не позволявай на потребителите да създават търсения</b></li><li><b>Не позволявай на потребителите да създават търсения в множество хранилища</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Когато обозначите потребител или група като създател на търсене, потребителят или групата получава съответните права, за да създава и запазва в хранилището търсения и търсения в множество хранилища. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Научете повече</a><br /><br /><b>Важно:</b> уверете се, че създателите на търсения използват работен плот, за който не са избрани следните опции:<ul><li><b>Не позволявай на потребителите да създават търсения</b></li><li><b>Не позволявай на потребителите да създават търсения в множество хранилища</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Когато обозначите потребител или група като редактор на търсене, потребителят или групата получава съответните права, за да променя съществуващите търсения и търсения в множество хранилища. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Научете повече</a><br /><br /><b>Съвет:</b> по подразбиране редакторът на търсене може да създава търсения и търсения в множество хранилища, но не може да ги запазва. Можете да забраните на редакторите на търсения да създават търсения, като ги накарате да използват работен плот, за който са избрани следните опции:<ul><li><b>Не позволявай на потребителите да създават търсения</b></li><li><b>Не позволявай на потребителите да създават търсения в множество хранилища</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Когато обозначите потребител или група като потребител на търсене, потребителят или групата получава съответните права, за да отваря и изпълнява запазени търсения и търсения в множество хранилища. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Научете повече</a><br /><br /><b>Съвет:</b> по подразбиране потребителят на търсене може да създава търсения и търсения в множество хранилища, но не може да ги запазва. Можете да забраните на потребителите на търсения да създават търсения, като ги накарате да използват работен плот, за който са избрани следните опции:<ul><li><b>Не позволявай на потребителите да създават търсения</b></li><li><b>Не позволявай на потребителите да създават търсения в множество хранилища</b></li></ul>",
		admin_repcfg_db_encoding: "Знаково кодиране на базата данни на сървъра:",
		admin_repcfg_db_encoding_hover: "Знаковото кодиране по подразбиране за базата данни на IBM Content Manager е UTF-8.",
		admin_repcfg_db_encoding_specify: "Укажете знаковото кодиране на базата данни",
		admin_repcfg_db_encoding_utf8: "Кодиране UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Укажете тази опция, ако използвате база данни с кодиране UTF-8. IBM Content Navigator ще използва кодиране UTF-8, за да проверява дължината на низовете за стойност на свойства на елементи.",
		admin_repcfg_db_encoding_other: "Друго кодиране",
		admin_repcfg_db_encoding_other_hover: "Укажете тази опция, ако използвате база данни с кодиране, различно от UTF-8. IBM Content Navigator ще използва броя символи, за да провери дължината на низовете за стойност на свойства на елементи.",
		admin_repcfg_language_codes: "Кодове за език на сървъра:",
		admin_repcfg_language_codes_avail: "Достъпно",
		admin_repcfg_language_codes_sel: "Избрано",
		admin_repcfg_pdf_conversion: "MIME типове за конвертиране в PDF документи в прикачени файлове:",
		admin_repcfg_pdf_conversion_avail: "Достъпно",
		admin_repcfg_pdf_conversion_sel: "Избрано",

		admin_repcfg_box_share_enable_classes_label: "Класове за модифициране за поддръжка за споделяне в Box:",
		admin_repcfg_box_share_enable_classes_hover: "Можете да промените класа за съхранение на идентификатора на файла в Box, когато елементът бъде споделен.",
		admin_repcfg_box_share_enable_classes_warning: "Важно: всички класове, които задавате, ще бъдат променени така, че да поддържат споделяне в Box. След като запазите промените, те не могат да бъдат отстранени от класовете.<br><br>Трябва да сте свързани към хранилището като администратор на библиотечен сървър, за да модифицирате класовете.",
		admin_repcfg_box_share_enable_classes_available: "Налични класове",
		admin_repcfg_box_share_enable_classes_selected: "Избрани класове",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Съхранение на идентификатор на споделяне в Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Този клас вече е бил модифициран за съхранение на идентификатора на споделяне в Box. Не можете да премахнете тази опция.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Модифицирайте този клас, така че да съхранява идентификатора на файла в Box, когато елементът бъде споделен.",

		admin_repcfg_redaction: "Базирани на роли редакции:",
		admin_repcfg_enable_redaction_hover: "Укажете дали желаете да използвате базираните на роли редакции в документи в това хранилище.<br/><br/>Базираните на роли редакции се прилагат, когато даден документ се изтегля, отпечатва, предава от преглеждащо лице или се изобразява като миниатюрно изображение. Какво потребителите виждат, когато преглеждат документа, зависи от тяхната роля и от приложимите политики за редакция.",

		admin_repcfg_redaction_policy_permission_text: "Приписване на редактори на политика:",
		admin_repcfg_redaction_policy_editors_hover: "Изберете потребителите и групите, които ще създават, променят и изтриват политики на редакция и роли на редакция.",
		admin_repcfg_redaction_policy_editors_select_hover: "Редакторите на политики по редакция могат да създават, променят и изтриват политиките на редакция и ролите на редакция.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Администраторите на политиките за редакция могат да приписват редактори на политики за редакция.<br/><br/>Можете да промените списъка с администратори на политики за редакция като използвате IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Администраторите на политиките за редакция могат да приписват редактори на политики за редакция.<br/><br/>Можете да промените списъка с администраторите на политики за редакция като използвате клиента за системно администриране на IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Приписване на редактори на редакция:",
		admin_repcfg_redaction_editors_hover: "Изберете потребителите и групите, които ще създават, променят и изтриват базираните на роли редакции. След като изберете потребителите и групите като редактори, трябва да ги укажете като редактори в политики за редакция, преди те да могат да редактират базирани на роли редакции.",
   		admin_repcfg_redaction_editors_select_hover: "Редакторите на редакции могат да създават, променят и изтриват базирани на роли редакции, когато те също са указани като редактори в политиките за редакция.",
   		admin_repcfg_redaction_administrators_hover_p8: "Администраторите на редакция могат да приписват редактори за редакция.<br/><br/>Можете да промените списъка с администратори на редакция като използвате IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Администраторите на редакция могат да приписват редактори за редакция.<br/><br/>Можете да промените списъка с администраторите на редакция като използвате клиента за системно администриране IBM Content Manager.",
		admin_repcfg_entry_template: "Управление на шаблони за запис:",
		admin_repcfg_entry_template_enable_classes_label: "Класове за модифициране за поддръжка на шаблони за запис:",
		admin_repcfg_oos_reference_attribute_label: "Референция към атрибути за Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Важно: всички класове, които задавате, ще бъдат променени така, че да поддържат шаблони за запис. След като запазите промените, те не могат да бъдат отстранени от класовете.<br><br>Можете да модифицирате класа поради някоя от следните причини (или поради и двете):<br><ul><li>За да съхраните идентификатора на шаблона за запис, който е бил използван за добавяне на елемент, така че настройките на шаблона за запис да се приложат, когато елементът бъде модифициран</li><li>Само за класове за йерархически папки: за поддръжка на асоциации на папки за шаблони за запис</li></ul>Трябва да сте свързани към хранилището като администратор на библиотечен сървър, за да модифицирате класовете.",
		admin_repcfg_entry_template_enable_classes_warning: "Важно: всички класове, които задавате, ще бъдат променени така, че да поддържат шаблони за запис. След като запазите промените, те не могат да бъдат отстранени от класовете.<br><br>Трябва да сте свързани към хранилището като администратор на библиотечен сървър, за да модифицирате класовете.",
		admin_repcfg_entry_template_enable_classes_available: "Налични класове",
		admin_repcfg_entry_template_enable_classes_selected: "Избрани класове",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Съхраняване на идентификатор на шаблон за запис",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Модифицирайте този клас, така че да съхранява идентификатора на шаблона за запис, който е бил използван за добавяне на елемент, така че настройките на шаблона за запис да се приложат, когато елементът бъде модифициран.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Съхраняване на асоциации на папки",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Модифицирайте този клас, така че да може да поддържа асоциации за папки за шаблони за запис. Тази опция е налична само за класове за йерархически папки.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Този клас вече е бил модифициран за съхранение на идентификатор на шаблона за запис. Не можете да премахнете тази опция.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Този клас вече е бил модифициран за съхранение на асоциациите на папки. Не можете да премахнете тази опция.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Само класовете за йерархически папки и нейерархическите класове могат да се използват за съхранение на асоциации на папки.",
		admin_repcfg_entry_template_root_folder_association_title: "Шаблони за запис, които са асоциирани с главната папка:",
		admin_repcfg_entry_template_root_folder_association_hover: "Укажете кои шаблони за запис желаете да асоциирате с главната папка на хранилището на IBM Content Manager.<br /><br />Ако асоциирате шаблони за запис с главната папка и потребителите добавят елементи към йерархическа папка, даденият шаблон за запис винаги ще бъде използван за добавянето на елементите.",
		admin_repcfg_entry_template_root_folder_association_button: "Задаване на асоциации",
		admin_repcfg_oos_enable_classes_label: "Класове за модифициране за поддръжка на office online или Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "Важно: Всички класове, които задавате, ще бъдат променени така, че да работят с Microsoft Office Online или Edit Service. След като запазите промените си, референтният атрибут, който е автоматично добавен към всеки клас, не може да бъде премахнат.<br><br>Трябва да сте свързани към хранилището като администратор на библиотечен сървър, за да модифицирате класовете.",
		admin_repcfg_oos_enable_classes_available: "Налични класове",
		admin_repcfg_oos_enable_classes_selected: "Избрани класове",
		admin_repcfg_oos_enable_classes_note: "Важно:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Този клас не се поддържа в Microsoft Office Online или Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Правилата за версия за класа са настроени на постоянна версия, която Microsoft Office Online или Edit Service не поддържа. Изберете различен клас.",
		admin_repcfg_download_recording: "Проследяване на изтегляния:",
		admin_repcfg_download_recording_hover: "Изтеглянията се проследяват по подразбиране, когато добавка Social Collaboration Base Extensions е инсталирана в хранилището. Ако обаче деактивирате тази опция, това може да подобри работата на хранилището.<br><br>Ако деактивирате тази опция, потребителите ще виждат броя на изтеглянията, които са се осъществили, преди опцията да е била деактивирана.",
		admin_repcfg_sync_service: "Услуги за синхронизиране:",
		admin_repcfg_download_ignored: "Игнориране на изтегляния за конкретни потребители:",
		admin_repcfg_download_ignored_hover: "Можете да игнорирате изтеглянията, които са заявени от определени потребители, например администратори или системни акаунти, за да постигнете по-точно отразяване на броя на потребителите, които са изтеглили даден документ. Например ако имате конкретен акаунт, който се използва за изтегляне на съдържание за генериране на месечен отчет, можете да игнорирате изтеглянията, които са заявени от този акаунт.<br><br><b>Ограничение:</b> не можете да указвате групи.",

		admin_repcfg_add_as_major_version: "Добавяне като основана версия:",
		admin_repcfg_enable_add_as_major_version: "Да",
		admin_repcfg_disable_add_as_major_version: "Не",
		admin_repcfg_checkin_as_major_version: "Вписване като основна версия:",
		admin_repcfg_enable_checkin_as_major_version: "Да",
		admin_repcfg_disable_checkin_as_major_version: "Не",
		admin_repcfg_annotation_security: "Защита на анотация:",
		admin_repcfg_inherit_annotation_security: "Дублиране на защитата на съдържащият документ",
		admin_repcfg_default_annotation_security: "Използвай защитата на анотации по подразбиране",
		admin_repcfg_connection_point: "Точка на свързване на работен поток:",
		admin_repcfg_include_workflow_definition: "Покажи определителния клас за работния поток:",
		admin_repcfg_include_form_template: "Покажи шаблонния клас за формуляра:",
		admin_repcfg_enable_include_workflow_definition: "Да",
		admin_repcfg_disable_include_workflow_definition: "Не",

		admin_repcfg_status_columns: "Икони за състояние:",
		admin_repcfg_status_columns_hover: "Укажете състоянията, за които желаете да виждате икони. Иконите за състояние се показват до документите, папките и работните елементи в списъка със съдържание.",
		admin_repcfg_status_columns_documents_or_folders: "Покажи икона, когато документите или папките:",
		admin_repcfg_status_columns_documents: "Покажи икона, когато документите:",
		admin_repcfg_status_columns_documents_checked_out: "Са изписани",
		admin_repcfg_status_columns_documents_declared_records: "Са декларирани като отчети",
		admin_repcfg_status_columns_documents_minor_versions: "Имат второстепенни версии",
		admin_repcfg_status_columns_documents_compound_document: "Са съставни документи",
		admin_repcfg_status_columns_documents_bookmarks: "Имат показалци",
		admin_repcfg_status_columns_documents_hold: "Са поставени под задържане",
		admin_repcfg_status_columns_documents_notes: "Имат бележки",
		admin_repcfg_status_columns_work_items: "Покажи икона, когато работните елементи:",
		admin_repcfg_status_columns_work_items_locked: "Са заключени",
		admin_repcfg_status_columns_work_items_checked_out: "Са изписани",
		admin_repcfg_status_columns_work_items_deadline: "Имат краен срок",
		admin_repcfg_status_columns_work_items_suspended: "Са преустановени от обработка",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF конфигурационен файл:",
		admin_repcfg_transform_xml_file: "Потребителско трансформиране на файл:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Активиране",
		admin_repcfg_disable_ssl: "Деактивиране",
		admin_repcfg_keyringdb_file: "Файл за база данни с идентификационен ключ:",
		admin_repcfg_keyringstash_file: "Файл за тайно хранилище с идентификационен ключ:",
		admin_repcfg_od_sso: "Единичен вход",
		admin_repcfg_od_enable_sso: "Активиране",
		admin_repcfg_od_disable_sso: "Деактивиране",
		admin_repcfg_od_sso_password: "Парола",
		admin_repcfg_advanced_label: "Разширено",
		admin_repcfg_custom_properties_label: "Персонализирани свойства:",
		admin_repcfg_new_button_label: "Нов",
		admin_repcfg_edit_button_label: "Редактиране",
		admin_repcfg_delete_button_label: "Изтриване",
		admin_repcfg_custom_head1: "Име",
		admin_repcfg_custom_head2: "Стойност",
		admin_repcfg_ecpdialog_title_new: "Ново персонализирано свойство",
		admin_repcfg_ecpdialog_title_edit: "Редактиране на персонализирано свойство",
		admin_repcfg_ecpdialog_name: "Име:",
		admin_repcfg_ecpdialog_value: "Стойност:",
		admin_repcfg_ecpdialog_save: "Запазване",
		admin_repcfg_ecpdialog_create: "Създаване",
		admin_repcfg_ecpdialog_cancel: "Отказ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Стойността е задължителна. Стойността не може да съдържа празни места и да се дублира.",

		admin_repcfg_cmis_use_gzip_encoding: "Използване на GZIP кодиране:",

		admin_repcfg_task_mgr_proxy: "Идентификатор на връзка с диспечера на задачите:",
		admin_repcfg_task_mgr_proxy_hover: "За споделяне Box или изтриване Teamspace, мениджърът на задачи използва потребителски идентификатор и парола на администратор, за да стартира фонови задачи за промяна на хранилището.<br><br>Щракнете върху Задаване и влезте в хранилището, като използвате валидни административни потребителски идентификатор и парола.",
		admin_task_manager_not_enabled_warning: "Тази опция изисква услугата за диспечер на задачите, но тази услуга не е активирана.  Можете да активирате услугата за диспечер на задачите за всички работни плотове от страницата Общи в Настройки.",
		admin_task_manager_not_enabled_and_user_warning: "Тази опция изисква услугата за диспечер на задачите, но тази услуга не е активирана. На тази страница задайте идентификатора за връзка на диспечера на задачите, след което от страницата Общи в Настройки активирайте услугата за диспечер на задачите за всички работни плотове.",
		admin_task_manager_user_id_pw_not_set_warning: "Тази опция изисква услугата за диспечер на задачите, както и административни потребителски идентификатор и парола. На тази страница задайте идентификатора за връзка на диспечера на задачите.",
		admin_repcfg_teamspaces_delete_task_id: "Администратор на хранилището:",
		admin_repcfg_teamspaces_delete_task_password: "Парола:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Трябва да укажете администратор на библиотечен сървър, за да активирате услугата за диспечер на задачите, за да изтриете екипно пространство на хранилището.",
		admin_repcfg_teamspaces_delete_task_hover: "По подразбиране, когато даден потребител изтрие екипно пространство, екипното пространство се скрива. Всички папки и документи в екипното пространство остават в хранилището. <br /> <br />Когато активирате тази опция, само документите, които са заведени в други папки в хранилището, остават в хранилището.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Ако във Вашата среда има голям брой екипни пространства, може да отнеме дълго време, за да се покажат всички те в раздела <b>Екипни пространства</b>. Можете да изберете тази опция, за да намалите времето, необходимо за попълване на списъка.<br /><br />Ако някой потребител трябва да работи с екипно пространство, което е извън зададения от Вас диапазон, потребителят може да използва полето <b>Филтър</b>, за да намери екипното пространство.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Ако изберете тази опция, потребителите, които имат роля на собственик в екипното пространство, могат да променят ролите, които са асоциирани с екипните пространства, които са създадени преди IBM Content Navigator версия 2.0.2.<br /><br />Тази опция не засяга екипните пространства, които са създадени с IBM Content Navigator версия 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Укажете дали желаете потребителите да могат да създават екипни пространства и шаблони за екипни пространства в това хранилище.<br /><br /><b>Важно:</b> хранилището трябва да поддържа йерархически папки.<br /><br />Ако активирате екипните пространства, IBM Content Navigator създава модела на данни за екипно пространство в хранилището. Моделът на данни включва ACL обекти, права, набори права, както и два нови типа елементи.",
		admin_repcfg_folder_selector_hover: "Изберете папката, която желаете да използвате като главна папка, когато потребителите търсят документи. Ако нямате конфигурирани в хранилището йерархични папки, тази настройка Ви позволява да поддържате преглеждането, като определите главна папка. Ако имате конфигурирани в хранилището йерархични папки, тази настройка презаписва главната папка, която е конфигурирана в хранилището.",
		admin_repcfg_cm_use_sso_hover: "Укажете дали да се позволи единен вход за потребителите с набора права за надежден вход.<br /><br /><b>Важно:</b> единният вход трябва да е активиран на сървъра на Content Manager и WebSphere Application Server трябва да е конфигуриран за LTPA, за да може този параметър на конфигурацията да работи.",
		admin_repcfg_cm_direct_retrieve_hover: "Директното извличане е активирано по подразбиране, тъй като позволява на уеб клиента бързо да извлича съдържание от диспечера на ресурси. <br /><br />Можете да деактивирате тази опция, ако не желаете клиентското приложение да има директен достъп до диспечера на ресурси или ако имате защитна стена или прокси сървър, който/която пречи на уеб клиента да осъществява достъп до диспечера на ресурси през URL адреси. Например защитната стена може да попречи на потребителите да виждат документи във визуализатора на аплета, когато директното извличане е активирано.",
		admin_repcfg_cmItemTypesToDisplay: "Ако не желаете потребителите да виждат типовете ресурсни елементи на сървъра на IBM Content Manager, можете да показвате само типовете елементи на модели документи. Типовете елементи се показват, когато потребителите създават търсения, добавят документи и създават папки.",
		admin_repcfg_cm_language_codes_hover: "Укажете езика, на който да се върнат данните от сървъра на Content Manager. Списъкът с налични езици се контролира от списъка с езикови определения на сървъра.<br /><br /><b>Не забравяйте:</b> данните в уеб клиента се показват на езика, който е зададен в уеб браузъра на потребителя.",
		admin_repcfg_cm_pdf_conversion_hover: "Укажете типовете документи, които да се конвертират в PDF файлове, когато потребителят изпрати документ от множество части като прикачен файл в имейл. Всички части се комбинират в един PDF документ.",
		admin_repcfg_use_teamspaces_p8_hover: "Укажете дали желаете потребителите да могат да създават екипни пространства и шаблони за екипни пространства в това хранилище.<br /><br />Ако активирате екипните пространства, IBM Content Navigator създава модела на данни за екипно пространство в хранилището. Моделът на данните включва шаблони за свойства, персонализирани обекти, обект за папки, както и няколко папки.",
		admin_repcfg_use_entry_template_p8_hover: "Укажете дали желаете потребителите да могат да създават и управляват шаблони за запис в това хранилище от IBM Content Navigator. Ако не активирате тази опция, потребителите могат да търсят и използват шаблони за запис, които вече съществуват в хранилището.<br /><br />Ако активирате управлението на шаблоните за запис, IBM Content Navigator актуализира модела на данните за шаблони за запис в хранилището. Актуализацията включва нови свойства. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Научете повече</a>",
		admin_repcfg_use_entry_template_cm_hover: "Укажете дали желаете потребителите да могат да създават и управляват шаблони за запис в това хранилище от IBM Content Navigator.<br /><br />Ако активирате управлението на шаблони за запис, IBM Content Navigator създава модела на данните за шаблони за запис в хранилището. Моделът на данните включва нов ACL обект, нови свойства и нов тип елементи. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Научете повече</a>",
		admin_repcfg_sync_service_p8_hover: "Укажете дали желаете потребителите да могат да синхронизират предпочитаните си елементи между работните си станции и мобилните си устройства.<br><br><b>Важно:</b> за да използвате тази функция, трябва също така да изпълните следните задачи:<br><ul><li>Укажете <b>публичния URL адрес на услугите за синхронизиране</b> в раздела <b>Услуги за синхронизиране</b> на инструмента за администриране.</li><li>Добавите това хранилище като работен плот, за който са активирани услугите за синхронизиране.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Укажете дали опцията за основна версия е избрана по подразбиране, когато потребителите добавят документи в хранилището.<br /><br />Потребителите могат да изчистят тази опция, ако искат да добавят документа като второстепенна версия.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Укажете дали опцията за основна версия е избрана по подразбиране, когато потребителите вписват документи в хранилището.<br /><br />Потребителите могат да изчистят тази опция, ако искат да впишат документа като второстепенна версия.",
		admin_repcfg_p8_annotation_security_hover: "Укажете кой тип защита да се прилага към анотациите по подразбиране.<br /><br />Потребителите могат да променят защитата на анотациите.",
		admin_repcfg_p8_connection_point_hover: "Ако желаете да използвате работните потоци на IBM FileNet P8, изберете точка на свързване на Process Engine. Точката на свързване, която изберете, определя кои работни процеси ще бъдат достъпни за потребителите, които имат достъп до хранилището.",
		admin_repcfg_p8_include_workflow_definition_hover: "Ако изведете документния клас за определение на работен поток на IBM FileNet P8 в уеб клиента, потребителите могат да търсят и да добавят определения на работни процеси в хранилището.",
		admin_repcfg_p8_include_form_template_hover: "Ако изведете документния клас за шаблон за формуляр на IBM FileNet P8 в уеб клиента, потребителите могат да търсят и добавят шаблони за формуляри в хранилището.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Укажете пълния път на AFP2PDF конфигурационния файл за хранилището на сървъра за уеб приложения. За да можете да преглеждате и отпечатвате AFP данни, ще Ви е необходим AFP2PDF Transform.<br /><br /><b>Не забравяйте:</b> AFP2PDF Transform трябва да бъде инсталиран, за да използвате този параметър.",
		admin_repcfg_od_transform_xml_file_hover: " Ако желаете да използвате персонализирано трансформиране, за да конвертирате съдържание на Content Manager OnDemand, укажете пълния път на XML файлът, който е използван за определяне на трансформирането. XML файлът трябва да се намира на сървъра за уеб приложения.",
		admin_repcfg_od_ssl_hover: "Укажете дали да се използва SSL за шифроване на комуникацията между сървъра за приложения на IBM Content Navigator, библиотечния сървър на Content Manager OnDemand и обектните сървъри.<br /><br /><b>Важно:</b> когато активирате SSL за Content Manager OnDemand, това не включва комуникацията е между сървъра за приложения на IBM Content Navigator, уеб сървъра или потребителските работни станции.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Укажете пълния път на файла за база данни с идентификационен ключ за това хранилище на сървъра за уеб приложения. Например C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Файлът за база данни с идентификационен ключ съдържа Вашите надеждни главни сертификати. Трябва да използва надеждна защита на файловата система, за да предотвратите неупълномощен достъп до този файл.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Укажете пълния път на файла за тайно хранилище с идентификационен ключ за това хранилище на сървъра за уеб приложения. Например C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Файлът за тайно хранилище с идентификационен ключ съдържа паролата за файла за база данни с идентификационен ключ. Трябва да използва надеждна защита на файловата система, за да предотвратите неупълномощен достъп до този файл.",
		admin_repcfg_od_sso_password_hover: "Укажете паролата, която да се използва за единен вход със сървъра на OnDemand.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API поддържа персонализирани свойства. Ако желаете да използвате персонализирани свойства, когато се свързвате към хранилището през уеб клиента, укажете имената и стойностите на персонализираните свойства.<br /><br />За повече информация относно поддържаните персонализирани свойства вижте ODWEK Java API Javadocs, които се намират в поддиректорията /api на инсталационната директория на ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Въведете името на свойството.",
		admin_repcfg_od_custom_properties_value_hover: "Въведете стойността на свойството.",
		admin_repcfg_od_use_sso_hover: "Укажете дали да се позволи единен вход за потребителите.<br /><br /><b>Важно:</b> единният вход трябва да бъде активиран на сървъра на Content Manager OnDemand, за да може този параметър на конфигурацията да работи.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Използвайте GZIP кодиране за този CMIS източник.",
		admin_repcfg_cm_use_part_file_name: "Файлово име, което да се използва при изтегляне на документите:",
		admin_repcfg_cm_use_part_file_name_help: "Укажете как се определят файловите имена на документите, когато потребителят изтегля такива.",
		admin_repcfg_cm_use_part_file_name_enable: "Използвай файловото име",
		admin_repcfg_cm_use_part_file_name_disable: "Използвай името на елемента в хранилището",
		admin_repcfg_add_doc_name: "Име по подразбиране за добавен документ:",
		admin_repcfg_add_doc_name_hover: "Потребителите могат да променят името, преди да добавят документа.",
		admin_repcfg_add_doc_name_empty: "Няма (празно)",
		admin_repcfg_add_doc_name_file_name: "Файловото име на избрания документ",

		admin_repcfg_compound_documents: "Функции на съставни документи:",
		admin_repcfg_compound_documents_hover: "Активирайте функциите на P8 съставни документи, например навигиране.",
		admin_repcfg_cm_action_list_config_enabled: "Списък с действия за работни елементи:",
		admin_repcfg_cm_action_list_config_hover: "Когато конфигурирате маршрутизирането на документи в клиента за администриране на системата на Мениджъра за съдържание, можете да посочите списък от действия, които потребителят може да извършва върху даден работен елемент.<br /><br />Активирайте тази опция, ако искате да използвате списъка с действия от сървъра на Мениджъра на съдържание. Тези настройки се използват в контекстното меню и в прозореца \"Редакция на свойства\" за работния елемент.<br /><br /><b>Важно:</b> Настройките в списъка с действия имат превес над всички персонализирани менюта, които сте конфигурирали в инструмента за администриране на навигатора за съдържание. Ако в списъка с действия няма настройки, потребителят няма да може да предприема никакви действия върху работните елементи.",

		admin_repcfg_box_share: "Споделяне в Box",
		admin_repcfg_box_share_p8_hover: "Позволява на потребителите да споделят документ от това хранилище. Споделянето на документа включва копирането на файла в Box, създаването на връзка и нейното изпращане в имейл.<br /><br />Ако активирате споделянето в Box, IBM Content Navigator създава модела за споделяне на данни в Box на хранилището. За да инсталирате добавката за споделяне IBM Content Navigator Box, трябва да сте свързани към хранилището като администратор на библиотечен сървър.",

		admin_menu_type_icon: "Икона за тип меню",
		admin_menu_toolbar_hover: "Лента с инструменти",
		admin_menu_toolbar_custom_hover: "Персонализирана лента с инструменти",
		admin_menu_contextMenu_hover: "Контекстно меню",
		admin_menu_contextMenu_custom_hover: "Потребителско контекстно меню",

		admin_menu_contextMenu_custom_empty: "В конфигурираните плъгини няма дефинирани персонализирани контекстни менюта.",
		admin_menu_toolbar_custom_empty: "В конфигурираните плъгини няма дефинирани персонализирани ленти с инструменти.",

		admin_file_type_category_filters: "Филтри за типове файлове:",
		admin_file_type_category_filters_hover_help: "Укажете списъка с типове файлове, които потребителите могат да използват в следните ситуации:<ul><li>За стесняване на списъка с резултати, когато търсят или преглеждат в IBM Content Navigator за Microsoft Office<li>За стесняване на списъка с резултати, когато търсят IBM FileNet P8 хранилище в уеб клиента<li>За ограничаване типовете файлове, които потребителите могат да добавят в хранилището, когато използват шаблон за запис</ul>",
		admin_file_type_only_use_in_et_folder_association: "Показвай само в асоциациите за папката с шаблони за запис",
		admin_office_config_properties_label: "Свойства на Office",
		admin_office_config_type_label: "Тип данни",
		admin_office_config_mapped_property_label: "Свойство на хранилище",
		admin_office_config_properties_hover_help: "Въведете и след това добавете името на всяко свойство на Microsoft Office, което желаете да съпоставите със свойство на хранилище. Типът на данните на всички свойства трябва да съвпада",
		admin_office_config_mapped_property_hover_help: "Ако желаете да съпоставите свойства на Office към повече от едно свойство на хранилище, трябва да създадете ново съпоставяне на свойство",
		admin_new_property_mapping_title: "Ново съпоставяне на свойство",
		admin_property_mapping_title: "Редактиране на съпоставяне на свойство",
		admin_property_mapping_instruction: "Укажете кои свойства на Microsoft Office желаете да съпоставите към свойство на хранилището. Типът на данните на свойствата на Office трябва да съвпада с типа на данните на свойството на хранилището. <br /><br />Ако даден документ на Office има повече от едно свойство от съпоставянето, IBM Content Navigator използва първото свойство в списъка, за да попълни свойството на хранилището.",
		admin_ms_general_settings: "Обща конфигурация:",
		admin_ms_delete_local_settings: "Изтриване на локалните файлове, когато потребителите:",
		admin_ms_outlook_options: "Интеграция на Outlook:",
		admin_ms_enable_props_mapping: "Съпоставяне на свойствата на Office към свойствата на хранилището, когато потребителите:",
		admin_ms_open_doc_when_checkout: "Автоматично изписват документ, когато той е отворен",
		admin_ms_open_doc_when_checkout_hover_help: "Изборът на тази опция не позволява на потребителя да презапише файла на хранилището с по-стара версия на файла.",
		admin_ms_prompt_close_office: "Подкана към потребителите да впишат документите, когато затварят приложенията на Office",
		admin_ms_prompt_close_office_hover_help: "Изборът на тази опция не позволява на потребителите да забравят да впишат своята работа.",
		admin_ms_add_with_entry_template_only: "Показване само действието Добавяне с шаблон",
		admin_ms_delete_local_on_add: "Изтриване на локалните файлове, когато потребителите добавят документи",
		admin_ms_delete_local_on_checkin: "Изтриване на локалните файлове, когато потребителите вписват документи или отменят изписвания",
		admin_ms_delete_local_on_add_hover_help: "Когато потребител добави документ в IBM Content Navigator за Microsoft Office, документът се добавя в хранилището и локалното му копие остава отворено, така че потребителите да могат незабавно да изпишат документа, за да правят промени.<br /><br />Изберете тази опция, за да може локалното копие на документа автоматично да се затваря и изтрива след добавянето на документа в хранилището.",
		admin_ms_delete_local_on_checkin_hover_help: "Когато потребител впише документ в IBM Content Navigator за Microsoft Office, документът се вписва в хранилището и локалното му копие остава отворено. Също така, след използването на действието за отмяна на изписване, локалното копие на документа остава отворено. Когато локалното копие е отворено, потребителите могат незабавно да изпишат документа отново, за да правят промени.<br /><br />Изберете тази опция, за да може локалното копие на документа автоматично да се затваря и изтрива след вписването на документа или използването на действието за отмяна на изписване.",
		admin_ms_delete_local_on_save: "Запазване на документ",
		admin_ms_prompt_for_props_on_add: "Подкана към потребителите да посочат стойности за свойства, когато добавят имейли в хранилището",
		admin_ms_prompt_for_props_on_add_hover_help: "Ако не изберете тази опция, уеб клиентът използва съпоставянето на свойства на Outlook, което е определено за хранилището.<br /><br />Ако имате шаблони за запис, които са асоциирани с папката, в която се добавят имейлите, потребителят може да не бъде подканен за свойствата.",
		admin_ms_delete_email_on_add: "Изтриване на имейла от имейл сървъра, когато имейлът се добави в хранилището",
		admin_ms_send_email_as_link_only: "Да не се позволява на потребителите да изпращат документи като прикачени файлове",
		admin_ms_send_email_as_link_only_hover_help: "Ако изберете тази опция, потребителите могат да изпращат документи само като връзки от Outlook. Тази опция гарантира, че само потребителите, които имат съответните права на хранилището, могат да преглеждат документи.",
		admin_ms_enable_prop_mapping_for_add: "Съпоставяне на свойствата на Office към свойствата на хранилището, когато потребителите добавят или вписват документи",
		admin_ms_checkout_document_after_add: "Автоматично изписване на документите, след като те бъдат добавени в хранилището",
		admin_no_default_document_type_filtering: "Връщане на всички типове документи по подразбиране, когато потребителите изпълняват търсения",
		admin_no_default_document_type_filtering_hover_help: "В IBM Content Navigator за Microsoft Office поведението по подразбиране е потребителите да виждат само типа документи за текущото приложение, когато изпълняват търсения. Например типът за документи на Word се избира по подразбиране, когато потребителите търсят от Microsoft Word.<br/><br/>Имайте предвид, че изборът на тази опция изчиства полетата за типове документи, така че потребителите да виждат всички документи, които се връщат от търсенето. Потребителите могат да презапишат тази настройка, като изберат един или повече типа документи, преди да изпълнят търсенето.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Указване дали да се съпоставят свойствата на документите, определени за документи на Microsoft Office, към свойствата, определени на хранилището.<br /></br /><b>Важно:</b> ако активирате тази функция, трябва да конфигурирате свойствата на Office за всяко хранилище във Вашата среда. Ако не съпоставите свойствата на Office към тези на хранилището, тази функция няма да работи.<br /><br />Тази настройка не важи за Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Изберете тази опция, за да намалите броя на стъпките, които потребителите трябва да изпълнят, за да работят с документи, след като документите са били добавени в хранилището.<br /></br /><b>Съвет:</b> за да гарантирате, че потребителите отново вписват файловете в хранилището, изберете <b>Подканяй потребителите да вписват документите, когато затварят приложенията на Office</b>.",
		admin_ms_show_details_recently_used: "Покажи детайлите на елемента <b>Последноизползвани</b>",
		admin_ms_show_details_recently_used_hover_help: "По подразбиране, когато преглеждате списъка с Последно използвани елементи, подробностите за елементите са скрити, което позволява показването на повече елементи. Когато изберете тази опция, в списъка с Последно използвани елементи, подробностите се показват за първия документ в прозореца за подробности по подразбиране.",
		admin_ms_show_no_permissions_warning: "Покажи предупреждения, когато потребителите редактират свойства или вписват документ, но нямат разрешение да виждат шаблона за запис на документа",
		admin_ms_show_no_permissions_warning_hover_help: "Ако документ в хранилището е използван чрез шаблон за вход, но потребителят няма разрешение да прегледа шаблона за вход на документа, тогава шаблонът за вход не се извлича.<br /><br/>Когато потребителят редактира свойствата на документа, свойствата се показват, без да се използва шаблонът за запис. И когато потребителят впише документа, той се вписва, без да се използва шаблонът за запис.<br /><br />По подразбиране тези действия възникват, без потребителят да бъде информиран, че шаблонът за запис не се използва. Единствено в журналния файл се записва предупреждение.<br /><br />Изберете тази опция, ако желаете да покажете предупреждения, които незабавно информират потребителя, че не се използва шаблон за запис.",
		admin_ms_hide_search_actions: "Свиване на раздела за филтри на търсенето",
		admin_ms_hide_search_actions_hover_help: "По подразбиране потребителите могат да прилагат филтри за действия, за да укажат действие, потребител или група потребители, както и за да изберат дата или диапазон от дати, когато е възникнало действието. Например можете да търсите документи, които са добавени през последния месец само от Вас.<br /><br />Ако не желаете да позволявате на потребителите да прилагат филтри за действия, изберете тази опция, за да скриете филтрите за действия и да намалите броя на полетата, които се показват при определянето на критериите за търсене.",
		admin_ms_hide_save_document: "Скрий опцията <b>Запазване</b> в лентата",
		admin_ms_hide_save_document_hover_help: "Като използват опцията <b>Запазване</b>, потребителите могат да запазват промените в документите в хранилището, без да трябва да вписват документите.",
		admin_ms_indicate_managed_email_on_add: "Посочвай дали имейлът вече е бил добавен в хранилището",
		admin_ms_indicate_managed_email_on_add_hover_help: "Изборът на тази опция позволява на потребителите да разберат, когато даден имейл вече е в хранилището, което може да намали броя пъти на добавяне на имейл в хранилището.  Когато тази опция е избрана, нова цветова категория, наречена IBM ECM, ще бъде създадена в Microsoft Outlook. Всички имейли, които се добавят в хранилището, автоматично се добавят към Управлявани в категорията IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Добавяне на опции в групата Редактиране:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Укажете кои опции от типа <b>Добавяне</b> са достъпни от групата <b>Редактиране</b> в лентата:<ul><li>Изберете <b>Покажи всички опции за добавяне</b>, за да изведете бутона за добавяне и всички действия за добавяне, които са налични от групата за редактиране.</li><li>Изберете <b>Скрий всички опции за добавяне</b>, за да не позволите на потребителите да добавят документи в хранилището или ако желаете потребителите да добавят документи само от екипно пространство.</li><li>Изберете <b>Скрий действието за добавяне с шаблон</b>, ако желаете да наложите асоциациите за папката с шаблони за запис и да не позволите на потребителите да избират различен шаблон за запис.</li><li>Изберете <b>Покажи само действието за добавяне с шаблон</b>, ако желаете да изискате потребителите да добавят документи чрез шаблоните за запис.</li></ul>",
		admin_ms_show_edit_group_add_button: "Покажи всички опции за добавяне (по подразбиране)",
		admin_ms_hide_edit_group_add_button: "Скрий всички опции за добавяне",
		admin_ms_hide_add_with_entry_template: "Скрий действието Добавяне с шаблон",
		admin_ms_managed_in_ecm: "Управлявани в IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Ако потребителите извеждат категории в Microsoft Outlook, този етикет се показва за имейли, които са добавени към хранилище на IBM Content Manager или IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Името на категорията Управлявани в IBM ECM не може да съдържа запетаи (,) или точки и запетаи (;).",
		admin_delete_open_docs_after_close: "Автоматично изтривай отворени документи, когато потребителите ги затворят",
		admin_admin_delete_open_docs_after_close_hover_help: "Когато потребител отвори документ в IBM Content Navigator за Microsoft Office, документът се изтегля в категорията за документи на потребителя или в местоположението, указано от настройките за проследяване на файлове за работния плот.<br><br>Изберете тази опция, за да изтриете файловете, които са отворени, но не са изписани, когато потребителите затварят документите. Изборът на тази опция Ви позволява да:<ul><li>Гарантирате съвместимост с ИТ политики</li><li>Гарантирате, че потребителите работят с най-новите версии на документите</li><li>Намалите обема на дисково пространство, необходимо за съхраняване на документите</li><ul>",
		admin_ms_custom_command_configuration: "Потребителски команди:",
		admin_ms_custom_command_configuration_hover_help: "Можете да добавите до четири команди в лентата с инструменти на IBM Content Navigator за Microsoft Office в приложенията на Microsoft Office. Командите могат да се използват за отваряне на URL адреси. Например можете да добавите команда, за да отворите дадена услуга, която може да се използва за търсене на потребители и групи.",
		admin_ms_custom_command_dialog_title: "Редактиране на потребителска команда",
		admin_ms_custom_command_dialog_intro_text: "Определете команда, която може да се използва за отваряне на URL адрес от лентата с инструменти на IBM Content Navigator за Microsoft Office в приложенията на Microsoft Office.",
		admin_ms_custom_command_id: "Команда ${0}",
		admin_ms_custom_command_available_label: "Достъпно",
		admin_ms_custom_command_available_hover_help: "Ако URL адресът, който е определен за дадена команда, трябва да бъде свален офлайн за поддръжка, можете да махнете отметката от полето за командата, така че тя да не се показва в Microsoft Office.<br/><br/><b>Важно:</b> потребителите трябва да излязат от работния плот, за да може промените да бъдат отразени в IBM Content Navigator за Microsoft Office.",
		admin_ms_custom_command_command_id_label: "Идентификатор на команда",
		admin_ms_custom_command_id_label: "Идентификатор",
		admin_ms_custom_command_label_label: "Етикет",
		admin_ms_custom_command_label_hover_help: "Укажете етикета, който да се показва за командата в Microsoft Office.",
		admin_ms_custom_command_description_label: "Описание",
		admin_ms_custom_command_description_hover_help: "Укажете описанието, което да се показва за командата в Microsoft Office.",
		admin_ms_custom_command_url_label: "URL адрес",
		admin_ms_custom_command_url_hover_help: "Укажете пълния URL адрес за отваряне от Microsoft Office. URL адресът можете да бъде уеб страница или услуга.",
		admin_ms_custom_command_icon_label: "Икона",
		admin_ms_custom_command_icon_hover_help: "Укажете файловото име на иконата за показване, например CommandIcon.png.<br/><br/><b>Важно:</b> трябва да добавите файла с иконата към поддиректорията за плъгини на инсталационната директория на IBM Content Navigator за Microsoft Office за всяка клиентска машина.<br/><br/>Ако файлът с иконата не се намира в поддиректорията за плъгини или ако не укажете икона, ще се покаже иконата по подразбиране, customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Групов етикет:",
		admin_ms_custom_command_group_name_hover_help: "Можете да укажете групов етикет, който да се показва под персонализираните команди в лентата.<br/><br/>Ако не укажете етикет, груповият етикет е <b>Потребителски команди</b>.",
		admin_ms_ribbon_tab_label: "Етикет за раздела IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Въведете името, което желаете да се показва за раздела на IBM Content Navigator за Microsoft Office в лентата на Microsoft Office. Ако не укажете име, етикетът ще бъде кръстен \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Затвори прозореца за задачи, когато потребителите отварят документи",
		admin_ms_close_task_pane_on_open_hover_help: "Изберете тази опция, ако желаете да увеличите максимално пространството, в което потребителите могат да виждат документите в Microsoft Office.<br/><br/>За потребители на Microsoft Office 2010: за да гарантирате, че прозорецът за задачи се затваря за всички документи, активирайте режима за интерфейс за множество документи (MDI), като щракнете върху <b>Опции</b> &gt; <b>Разширени</b> и махнете отметката от опцията <b>Покажи всички прозорци в лентата на задачите</b>.",
		admin_ms_open_document_options: "Опции за отваряне на документа:",
		admin_ms_delete_local_file_options: "Опции за изтриване на локален файл:",
		admin_ms_add_and_checkin_options: "Опции за добавяне и вписване:",
		admin_ms_search_options: "Опции за търсене:",
		admin_ms_display_options: "Опции за показване:",
		admin_ms_bidirection_enable_label: "Активиране на поддръжката за двупосочен текст",
		admin_ms_bidirection_enable_hover_help: "Изберете тази опция, ако желаете да позволите на потребителите да въвеждат или преглеждат текст в IBM Content Navigator за Microsoft Office в посока, различна от Ляво надясно.",
		admin_ms_text_direction_label: "Основна посока за текст за съдържание:",
		admin_ms_text_direction_hover_help: "Укажете посоката, в която текстът се въвежда в полетата в IBM Content Navigator за Microsoft Office. Тази настройка също така контролира начина, по който елементите, например имената на папки или стойности на свойства, се показват.",
		admin_ms_control_threshold_label: "Минимален брой елементи за позволяване на предвиждането:",
		admin_ms_control_threshold_hover_help: "По подразбиране предвиждането е активирано, когато броят на елементите е по-голям или равен на 50, за търсене или за задаване на свойства, които имат предварително зададени опции в падащия списък. Можете да промените минималната стойност.",

		admin_ms_default_email_class: "Клас за използване при добавяне на имейл",
		admin_ms_default_email_class_hover_help: "Всички имейли, които се добавят в това хранилище от Microsoft Outlook, ще бъдат добавени към класа, който укажете. Потребителите не могат да променят класа.",
		admin_ms_default_folder_class: "Клас за използване при създаване на папки",
		admin_ms_default_folder_class_hover_help: "Всички папки, които се създават в това хранилище от приложения на Microsoft Office, ще бъдат добавени към класа, който укажете.  Потребителите не могат да променят класа.",
		admin_ms_default_folder_warn_title: "Не можете да използвате класа ${0} като клас за използване при създаване на папки.",
		admin_ms_default_folder_warn_name_prop_invalid: "Свойството за име на класа не е низ, а името на папката трябва да бъде низ.<br />Изберете различен клас за използване при създаване на папки или се свържете с администратора на IBM Content Manager, за да промените свойството за име на класа на низ.",
		admin_ms_default_folder_warn_req_props: "Класът включва задължителните свойства, които нямат стойности. Въпреки това потребителите не могат да задават стойности за задължителните свойства, когато създават папки от IBM Content Navigator за Microsoft Office.<br />Изберете различен клас за използване при създаване на папки или се свържете с администратора на IBM Content Manager, за да превърнете задължителните свойства в опционални или за да попълните предварително задължителните свойства със стойност.",
		admin_ms_delimiter_for_office_properties: "Разделител за многостойностни низови свойства",
		admin_ms_delimiter_for_office_properties_hover_help: "Укажете символа за използване като разделител за низови свойства, които съпоставяте към многостойностни низови свойства. По подразбиране можете да зададете набор стойности към многостойностно низово свойство, като използвате точка и запетая (;) като разделител, за да разделите стойностите. Ако обаче някоя от низовите стойности включва точка и запетая, не можете да промените тази низова стойност, освен ако разделителят не бъде променен на различен символ. Например може да промените разделите на запетая (,)",
		admin_ms_outlookPropertyRemembrance : "Не забравяйте настройките, когато добавяте съобщения и прикачени файлове",
		admin_ms_outlookPropertyRemembrance_hover_help : "Стойностите на свойствата, местоположението, изборът на клас и защита, които са приписани към съобщенията и прикачените файлове, се запомнят и ще бъдат използвани като настройки по подразбиране, когато се добавят бъдещи елементи.",

		admin_file_type_name_hover_help: "Помощ при посочване на име",
		admin_file_type_description_hover_help: "Помощ при посочване на описание",
		admin_file_type_dialog_title: "Редактиране на филтър за тип файл",
		admin_new_file_type_dialog_title: "Нов филтър за тип файл",
		admin_mobile_feature_dialog_title: "Функция",
		admin_mobile_feature_dialog_new_title: "Нова функция",
		admin_file_type_instructions: "Създайте филтър, който потребителите могат да използват, за да стеснят списъците с резултатите от търсенето. Можете да съпоставите множество MIME типове към филтъра.",
		admin_file_type_filter_place_holder: "Филтриране на MIME типове",
		admin_new_button_label: "Нов",
		admin_edit_button_label: "Редактиране",
		admin_delete_button_label: "Изтриване",
		admin_copy_button_label: "Копиране",
		admin_verify_button_label: "Проверяване",
		admin_availabe_filters_label: "Налични филтри",
		admin_selected_filters_label: "Избрани филтри",

		admin_mobile_access: "Достъп до мобилно приложение:",
		admin_mobile_access_hover_help: "Ако желаете да използвате IBM Content Navigator от мобилно устройство, препоръчва се да позволите на потребителите достъп до този работен плот от мобилното приложение.<br /><br />Ако деактивирате достъпа до този работен плот от мобилното приложение, потребителите все още ще имат достъп до уеб клиента от мобилните си браузъри. Имайте предвид обаче, че уеб клиентът не е проектиран за достъп от мобилни устройства.",

		admin_mobile_access_allow_label: "Позволи на потребителите да:",
		admin_mobile_allow_add_photos: "Качват снимки от камерата и библиотеката със снимки",
		admin_mobile_allow_add_docs: "Добавят документи и създават папки в хранилището",
		admin_mobile_allow_open_docs: "Отварят документи в други приложения",
		admin_mobile_allow_add_docs_hover_help: "Потребителите могат да създават папки или да добавят документи от други мобилни приложения, като например документи, които са прикачени към имейл.",
		admin_mobile_allow_open_docs_hover_help: "Потребителите получават подкани да изберат приложението, което да използват за преглед на избрания документ. Ако е налично само едно приложение, то тогава се използва то.",
		admin_mobile_features: "Функции:",
		admin_mobile_features_hover_help: "Укажете кои функции на този работен плот се показват в мобилното приложение IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Нова функция",
		admin_mobile_move_up_button_label: "Преместване нагоре",
		admin_mobile_move_down_button_label: "Преместване надолу",
		admin_desktop_mobile_instructions: "Тук се помества инструкцията за мобилни настройки",
		admin_desktop_max_number_of_docs_to_add: "Максимален брой документи за редактиране:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Укажете максималния брой документи, които потребителите могат да добавят към даден момент. Максималната стойност по подразбиране е 50. Вие можете да зададете максимална стойност до 300.",
		admin_desktop_max_number_of_docs_to_modify: "Максимален брой елементи за модифициране:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Укажете максималния брой елементи, които потребителите могат да променят към даден момент. Максималната стойност по подразбиране е 50. Вие можете да зададете максимална стойност до 300.",
		admin_desktop_max_conversion_size: "Максимално количество данни за PDF конвертиране (в MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Ограничение:</b> тази настройка не се поддържа на IBM Content Manager OnDemand.<br/><br/>Укажете максималното количество данни, които могат да се конвертират в PDF. Това ограничение се прилага, когато потребителите изтеглят елементи като PDF файлове или изпращат елементи по имейл като PDF файлове.<br /><br />Ако размерът на документа не може да се определи, документите въпреки това се конвертират в PDF.<br/><br/>Ограничението по подразбиране е 200 MB. Задаването на това ограничение над 200 MB може да засегне работата на системата.",
		admin_desktop_timeProperties: "Времеви маркер:",
		admin_desktop_time_properties_hover_help: "<b>Само за потребители на IBM FileNet P8:</b> тази настройка важи за персонализирани свойства и не важи за системните свойства. Например свойството Модифицирано по все още ще показва частта за час от времевия маркер, ако изберете <b>Показвай само частта за дата от времевия маркер</b>.<br/><br/>Тази настройка не променя времевия маркер в хранилището.",
		admin_desktop_disable_time_stamp: "Показвай пълен времеви маркер",
		admin_desktop_enable_time_stamp: "Показвай само частта за дата от времевия маркер",
		admin_desktop_timezone: "Часова зона:",
		admin_desktop_timezone_localuser: "Показвай локалната часова зона на потребителя",
		admin_desktop_timezone_alluser: "Показвай една и съща часова зона за всички потребители",
		admin_desktop_timezone_hover_help: "Можете да укажете дали потребителите да виждат времеви маркер, което се базира на локалната им часова зона, или всички потребители да виждат едно и също времеви маркер.<br/><br/>Тази настройка не променя времевия маркер в хранилището. Настройката, която изберете, определя часовата зона, която се използва, за да се създаде времевия маркер в хранилището, когато потребителите добавят или модифицират елементи.",
		admin_desktop_mobile_feature_display_label: "Показване",
		admin_desktop_mobile_feature_icon_file_label: "Файл на икона",
		admin_mobile_feature_dialog_icon_file_label: "Файл на икона:",
		admin_mobile_feature_dialog_url_label: "URL адрес:",
		admin_desktop_mobile_feature_name_label: "Име",
		admin_desktop_mobile_select_feature_label: "Избор на характеристика",
		admin_desktop_mobile_feature_icon_label: "Икона на характеристика",
		admin_desktop_share_admin_none: "Няма зададен администратор.",
		admin_desktop_share_admin_edit_label: "Задаване на администратор...",
		admin_browse_icon: "Икона за преглед",
		admin_search_icon: "Икона за търсене",
		admin_favorites_icon: "Икона за предпочитания",
		admin_casesearch_icon: "Икона за казус",
		admin_datacap_icon: "Икона за запис на данни",
		admin_system_defined: "Определена система",
		admin_icon_file_placeholder_text: "Файлово местоположение (например http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Корен",
		admin_folder_default: "По подразбиране",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Ленти с инструменти",
		admin_menu_context_menus: "Контекстни менюта",
		admin_menu_office_toolbars: "Команди на лентата на Microsoft Office",
		admin_menu_office_menus: "Контекстни менюта на Microsoft Office",

		admin_file_name_label: "Файлово име:",
		admin_exportconfiguration_security_label: "Включване на потребителите и групите, които са упълномощени да използват този работен плот",
		admin_exportconfiguration_instruction: "Можете да експортирате работните си плотове, включително конфигурацията на хранилището и конфигурациите на плъгините, които са асоциирани с избраните работни плотове, във файл, който можете да импортирате в друг екземпляр на IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Експортиране на работен плот",
		admin_exportconfiguration_button_label: "Експортиране",
		admin_dialog_select_all: "Избор на всички",
		admin_dialog_deselect_all: "Изчистване на всички",

		admin_importconfiguration_instruction: "Елементите в избрания конфигурационен файл ще бъдат импортирани в тази система. Ако даден елемент със същия идентификатор вече съществува в системата, трябва да решите дали да го запазите, или да го презапишете.",
		admin_importconfiguration_dialog_label: "Импортиране на работен плот",
		admin_importconfiguration_reason_dialog_label: "Причини за редактиране на импортиране",
		admin_importconfiguration_button_label: "Импортиране",
		admin_to_be_imported: "Конфигурационен елемент за импортиране",
		admin_on_target_system: "Съществуващ елемент на целевата система",
		admin_import_short_warning_message: "Следните елементи вече съществуват на тази система. Изберете елементите, които желаете да замените на тази система:",
		admin_import_warning_message: "Следните конфигурационни елементи имат същите идентификатори, като елементите, които съществуват на целевата система. Изберете само онези елементи, които желаете да импортирате и презапишете на целевата система.<br /><br />Ако не желаете да презапишете конфигурационен елемент, създайте копие на елемента на потребителския модел, от който сте експортирали работния плот, дайте му различен идентификатор и го асоциирайте с работния плот. Експортирайте работния плот отново, след което го импортирайте на този потребителски модел.",
		admin_choose_file_to_import_label: "Изберете файл за импортиране:",
		admin_download_imported_log: "Изтегляне на отчет",
		admin_desktop_import_summary: "Резюме за импортиране на работен плот",
		admin_reason_import_summary: "Резюме за импортиране на причина за редактиране",
		admin_rba_import_summary: "Резюме за импортиране на административна роля",
		admin_import_open_tabs_checking: "Преди да можете да импортирате работни плотове, трябва да затворите всички раздели с изключение на раздела <bold>Работни плотове</bold> в инструмента за администриране.",
		admin_import_no_conflict: "Следните елементи ще бъдат импортирани:",
		admin_desktop_invalid: "Невалиден работен плот",
		admin_desktop_warning: "Работният плот беше запазен с предупреждения.",
		admin_repos_warning: "Хранилището беше запазени с предупреждения.",
		admin_config_type_icon: "Икона за конфигуриране на тип елемент",

		admin_approval_workflow: "Работен поток за одобрение",
		admin_approval_workflow_hover: "Позволява на потребителите да стартират предварително определен работен поток за одобрение. Можете да деактивирате работния поток за одобрение, за да позволите на потребителите да стартират потребителски работен поток за одобрение, който е определен от даден абонамент. По подразбиране работният поток за одобрение е активиран.<br><br><b>Важно:</b> Ако активирате работен поток за одобрение, трябва също така да се уверите, че едната или и двете предварително определени дефиниции на работния поток (ICNParallelDocumentApproval.pep и ICNSequentialDocumentApproval.pep) са добавени към хранилището и са прехвърлени към Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Не можете да зададете потребителите и групите, които имат достъп до този работен плот.",
		admin_cannot_add_desktop_members_error_explanation: "Нямате необходимите позволения за извличане на информация за потребители и групи.",
		admin_cannot_add_desktop_members_error_userResponse: "Влезте с различно потребителско име или помолете системния администратор на IBM Content Manager да Ви даде правото UserACLOwner, което е необходимо за извличане на информация за потребители и групи.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Не можете да избирате потребители и групи.",
		admin_cannot_select_users_groups_error_explanation: "Нямате необходимите позволения за извличане на информация за потребители и групи.",
		admin_cannot_select_users_groups_error_userResponse: "Влезте с различно потребителско име или помолете системния администратор на IBM Content Manager да Ви даде правото UserACLOwner, което е необходимо за извличане на информация за потребители и групи.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2 клиентът не беше намерен.",
		oauth_client_not_found_error_explanation: "Идентификаторът ${0} на OAuth2 клиентът не беше намерен.",
		oauth_client_not_found_error_userResponse: "Свържете се с Вашия системен администратор и го уведомете, че идентификаторът на OAuth2 клиентът не беше намерен.",
		oauth_client_not_found_error_adminResponse: "Прегледайте конфигурацията на хранилището и се уверете, че тя съдържа правилния идентификатор на OAuth2 клиент.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Неуспешен вход в хранилището.",
		oauth_login_failed_error_explanation: "Опитът за вход в хранилището ${0} беше неуспешен.",
		oauth_login_failed_error_userResponse: "Уверете се, че потребителският идентификатор и паролата са правилни, и отново опитайте да влезете.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Възникна грешка при опит за вход в ${0}.",
		oauth_error_return_error_explanation: "Опитът ${0} за оторизиране беше неуспешен.",
		oauth_error_return_error_userResponse: "Свържете се с Вашия системен администратор и му предайте следната информация: опитът ${0} за оторизация беше неуспешен и върна следното съобщение за грешка: <br>${1}<br><b>грешка:</b> ${2}.<br><b>описание:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Допълнителна информация относно грешката има в журналните файлове на сървъра на уеб приложението.  За повече информация относно журналните файлове вижте &quot;Журнални файлове на IBM Content Navigator&quot; в IBM Knowledge Center. Като използвате информация относно опита ${0} за оторизация, опитайте да коригирате проблема и се уверете, че OAuth2 е активирано.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth целево приложение",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "грешка",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Съобщение за неразпозната OAuth грешка.",

		delete_share_permission_error: "Споделянето не беше изтрито.",
		delete_share_permission_error_explanation: "Нямате необходимите позволения за изтриване на споделянето.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Не можете да споделите този елемент.",
		class_not_support_share_error_explanation: "Класът ${0} не е настроен да поддържа споделяне.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Не можете да споделите този елемент.",
		rbr_not_support_share_error_explanation: "Към елемента е добавено чувствително съдържание.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Устройството, от което потребителят се опитва да влезе, не е упълномощено за достъп до акаунта на потребителя.",
		box_oauth_error_invalid_request: "Заявката няма задължителен параметър, включва невалидна стойност за параметър, включва параметър повече от един път или е по друг начин погрешна.",
		box_oauth_error_unsupported_response_type: "Сървърът за упълномощаване не поддържа получаване на упълномощаващ код по този метод.  Проверете стойността на параметъра за код в заявката.",
		box_oauth_error_access_denied: "Собственикът на ресурса или сървърът за упълномощаване отказа заявката.",
		box_oauth_error_temporarily_unavailable: "Вашето устройство е степенувано ограничено, трябва да намалите степента си на заявки за упълномощаване или да изчакате известно време.",
		box_oauth_error_unknown: "Съобщение за неразпозната грешка в Box.",

		admin_default_search_type: "Тип търсене по подразбиране",
		admin_default_search_type_hover: "Укажете коя опция е избрана по подразбиране в полето <b>Търсене на</b> в менюто <b>Опции за търсене</b>.",
		admin_default_search_type_documents: "Документи",
		admin_default_search_type_folders: "Папки",
		admin_default_search_type_folders_and_documents: "Документи и папки",

		admin_restricted_search_type: "Позволи търсенето на",
		admin_restricted_search_type_hover: "По подразбиране потребителите могат да търсят както документи, така и папки. Ако желаете да скриете опцията Търсене на и да ограничите да може да се търсят само документи, изберете Документи и махнете избора на Папки.</br>,</br> Ако позволите търсенето както документи, така и на папки, изберете опцията по подразбиране да се показва, когато се отвори прозорецът за търсенето.",
		admin_restricted_search_type_documents: "Документи",
		admin_restricted_search_type_folders: "Папки",
		admin_restricted_search_type_folders_and_documents: "Документи и папки",

		admin_default_search_version: "Версия на търсене по подразбиране",
		admin_default_search_version_hover: "Укажете коя опция е избрана по подразбиране в полето <b>Версия</b> в менюто <b>Опции за търсене</b>.",

		admin_all_classes_search: "Търсене на всички класове",
		admin_all_classes_search_hover: "Укажете дали потребителите да могат да търсят във всички класове, и ако да - какво трябва да бъде включено в търсенията на документи.",
		admin_all_classes_search_removed_hover: "Опцията за търсене във всички класове не са достъпни, докато контекстният параметър allPseudoClassHidden в web.xml на приложението Navigator не бъде зададен на Вярно.",
		admin_all_classes_search_hide: "Премахване на избора за търсене на всички класове",
		admin_all_classes_search_documents_only_documents: "Търсенето на документи включва само документи, запазени търсения и шаблони за въвеждания",
		admin_all_classes_search_documents_non_folders: "Търсенето на документи включва всички елементи, които не са папки",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Дървовиден изглед:",
		admin_feature_config_tree_view_hoverhelp: "Укажете дали потребителите да имат достъп до списък с папки в хранилището през прозореца за преглед. Ако скриете прозореца за преглед, потребителите трябва да използват списъка със съдържание, за да навигират до папки в хранилището.",
		admin_feature_config_selected_repositories_label: "Хранилища:",
		admin_feature_config_selected_repositories_hoverhelp: "Изберете хранилищата, до които потребителите могат да имат достъп в тази функция.",
		admin_feature_config_selected_repositories_select_state_hdr: "Избор на хранилище",
		admin_feature_config_selected_repositories_name_hdr: "Име на хранилище",
		admin_feature_config_selected_repositories_show_hdr: "Показване",
		admin_feature_config_invalid_icon_title: "На функцията липсват някои задължителни настройки",
		admin_feature_config_view_select_hdr: "Избор на преглед",
		admin_feature_config_view_hdr: "Изглед",
		admin_feature_config_view: "Изглед",
		admin_feature_config_views: "Изгледи:",
		admin_feature_config_views_hoverhelp: "Укажете кои изгледи потребителите могат да прилагат към списъка със съдържание. Изгледите са показани в реда, в който са изброени. Първият избран изглед е изгледът по подразбиране за функцията.<br><br><b>Важно:</b> ако активирате изгледа на филмова лента, трябва да конфигурирате визуализатора за HTML конвертиране, за да виждате предварителните прегледи на документите.",

		admin_custom_dialog_name: "Име:",
		admin_custom_dialog_value: "Стойност:",
		admin_custom_setting_name_hover: "Въведете името на настройката на Daeja ViewONE, която желаете да добавите към конфигурацията. Вижте документацията на Daeja ViewONE за повече информация относно настройките на конфигурацията.",
		admin_custom_setting_value_hover: "Въведете стойността, която желаете да използвате за настройката на конфигурацията на Daeja ViewONE. Вижте документацията на Daeja ViewONE за повече информация относно валидните стойности за настройката на конфигурацията.",

		entry_template_name_required_message: "Полето за име в настройките за шаблон за запис е задължително поле.",
		entry_template_name_invalid_message: "Полето за име в настройките на шаблон за запис не може да съдържа следните символи: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Когато определени потребители и групи бъдат избрани за полето Споделяне с в настройките на шаблон за запис, трябва да укажете поне един потребител или една група.",
		entry_template_no_permission_to_save_to_teamspace_message: "Нямате разрешение да добавяте шаблони за запис към екипното пространство (${0}), което е избрано от Запазване в настройките на шаблона за запис.",
		entry_template_save_in_destination_required_message: "Трябва да укажете местоположение за запазване по подразбиране в раздела <b>Задаване на местоположението за съхранение на елемента</b>.",
		entry_template_save_in_destination_must_select_folder: "Ако скриете полето <b>Запази в</b> и изискате потребителите да добавят нови предмети в папка, трябва да изберете папка в полето <b>Местоположение за запазване по подразбиране</b> в раздела <b>Задаване на местоположението за съхранение на елемента</b>.",
		entry_template_what_to_save_required_message: "Изберете поне един избор за това, което желаете да запазите в опциите за задаване.",
		entry_template_custom_workflow_empty_message: "Ако изберете <b>Персонализиран работен поток...</b>, трябва да намерите и изберете работния поток, който желаете да използвате.",

		entry_template_new: "Нов шаблон за запис",
		entry_template_name_hover: "Името на новия шаблон за запис не може да съдържа следните символи: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Името на шаблона за запис не може да съдържа следните символи: * \\ / : ? \" < > |",
		entry_template_description_hover: "Посочете описание, което ще позволи на потребителите да различават този шаблон за запис от останалите шаблони.",
		entry_tempalte_save_in_hover: "Укажете къде да се запази шаблонът за запис.<br><br><b>Ограничение:</b> ако запазите шаблона за запис в екипно пространство, можете да го използвате само в рамките на това екипно пространство.",
		entry_template_inherit_hover: "Ако изберете тази опция, настройките за защита за родителската папка се добавят към списъка с потребители и групи, с които е споделен шаблонът за запис.",
		entry_template_builder_aria_label: "Конструктор за шаблони за запис",
		entry_template_builder_layout_aria_label: "Конструктор за свойства на шаблони за запис",

		entry_template_settings_document: "Определете шаблона за запис",
		entry_template_settings_folder: "Задайте местоположението за съхранение на елементи",
		entry_template_settings_folder_intro: "Укажете къде да се съхраняват елементите, които се добавят чрез този шаблон за запис.",
		entry_template_settings_properties: "Задайте свойствата на елементите",
		entry_template_settings_properties_intro: "Можете да укажете подразбиращи се или предварително определени стойности за елементите, които се добавят чрез този шаблон за запис. Освен това можете да промените оформлението на свойствата, за да контролирате кои свойства се показват, както и реда, в който се показват.",
		entry_template_settings_workflow: "Конфигуриране на работен поток за елемента",
		entty_template_settings_workflow_intro: "Можете да укажете дали даден работен поток да се стартира, когато бъдат добавени елементи чрез шаблона за запис.",
		entry_template_settings_security: "Задаване на защитата на елементите",
		entry_template_settings_security_intro: "Можете да укажете подразбираща се или предварително определена защита за елементите, които се добавят чрез този шаблон за запис. Потребителите с подходящите позволения могат да променят защитата на елемента след неговото добавяне.",
		entry_template_settings_options: "Задаване на опции за елементите",
		entry_template_xt_warning: "Запазването на промените в този шаблон за запис ще го конвертира от IBM Workplace XT шаблон за запис в IBM Content Navigator шаблон за запис. IBM Workplace XT не поддържа IBM Content Navigator шаблони за запис.",

		entry_template_properties_edit_layout: "Редактиране на оформление...",
		entry_template_properties_read_only: "Само за четене",
		entry_template_properties_hidden: "Скрито",

		entry_template_destination_show: "Покажи полето <b>Запази в</b>",
		entry_template_destination_show_hover: "Ако покажете полето <b>Запази в</b>, потребителите могат да променят местоположението за съхранение на елементите.",
		entry_template_destination_hide: "Скрий полето <b>Запази в</b>",
		entry_template_destination_hide_hover: "Ако скриете полето <b>Запази в</b>, потребите не могат да променят местоположението за съхранение на елементите.",
		entry_template_folder_save_in_default: "Местоположение за <b>Запази в</b> по подразбиране:",
		entry_template_folder_save_in_default_hover: "Укажете местоположението по подразбиране, в което елементите ще се добавят чрез този шаблон за запис.<br><br>Местоположението по подразбиране, което изберете, ще наложи ограничения на поведението за време на изпълнение на шаблона за запис:<ul><li>Потребителите не могат да избират различно хранилище.</li><li>Ако местоположението по подразбиране е екипно пространство, потребителите няма да могат да избират различно екипно пространство.</li></ul>Ако потребителите асоциират този шаблон за запис с папка, те могат да презапишат местоположението за съхранение, което е конфигурирано за шаблона за запис.",
		entry_template_folder_restrict_choice: "Изисквай потребителите да добавят елементите в местоположението по подразбиране или в дъщерна папка на местоположението по подразбиране",
		entry_template_folder_file_in_required: "Изисквай потребителите да добавят новите елементи в папка",
		entry_template_folder_file_in_required_hover: "Ако не изберете тази опция, потребителите могат да добавят елементите в главната папка на хранилището.<br><br><b>Ограничение:</b> конфигурацията на работния плод може да изисква потребителите да изберат папка.",

		entry_template_document_type_show: "Покажи полето <b>Какво желаете да запазите</b>",
		entry_template_document_type_show_hover: "Ако покажете полето <b>Какво желаете да запазите</b>, елементите, които изберете, се показват като опции в полето <b>Какво желаете да запазите</b>.",
		entry_template_document_type_hide: "Скрий полето <b>Какво желаете да запазите</b>",
		entry_template_document_type_hide_hover: "Ако скриете полето <b>Какво желаете да запазите</b>, типът документи, който изберете, се използва винаги, когато потребителите добавят документи чрез този шаблон за запис.",
		entry_template_document_type: "Този шаблон за запис може да се използва за добавяне на следните елементи:",
		entry_template_document_type_hover: "Ако покажете полето <b>Какво желаете да запазите</b>, елементите, които изберете, се показват като опции в полето <b>Какво желаете да запазите</b>.<br><br>Ако скриете полето <b>Какво желаете да запазите</b>, типът документи, който изберете, се използва винаги, когато потребителите добавят документи чрез този шаблон за запис.",

		entry_template_misc: "Допълнителни опции:",
		entry_template_auto_classify_show: "Автоматично класифициране на съдържанието на документа",
		entry_template_auto_classify_show_hover: "Когато един документ се класифицира в FileNet Content Manager, съдържанието му се проучва, за да се определят подходящия клас и стойностите за свойства за документа.<br><br>Обърнете се към системния администратор, за да определите дали класифицирането на съдържанието е активирано в Content Platform Engine.<br><br>Ако активирате тази опция, класът и свойствата на документа може да се променят, когато потребител добави документа в хранилището.",
		entry_template_allow_duplicate_file_names: "Позволяван на документи с дублиращи се файлови имена",
		entry_template_allow_duplicate_file_names_hover: "По подразбиране можете да добавяте документи с едно и също име в папка във FileNet Content Manager. Можете да изчистите тази опция, ако желаете всеки файл в избраното местоположение за съхранение да има уникално име.",
		entry_template_allow_compound_documents: "Позволи този документ да бъде родителски за съставен документ",
		entry_template_version_show: "Покажи опциите за версии за добавяне и вписване",
		entry_template_version_hide: "Скрий опциите за версии за добавяне и вписване",
		entry_template_version_to_add_as: "Версия по подразбиране за добавяне като:",
		entry_template_version_default: "Опция за версия по подразбиране:",
		entry_template_version_default_checked: "Основна версия",
		entry_template_version_default_unchecked: "Второстепенна версия",
		entry_template_version_display: "Версия на документа:",
		entry_template_version_display_show: "Показване",
		entry_template_version_display_hide: "Скриване",
		entry_template_version_default_add: "Версия по подразбиране за добавяне като:",

		entry_template_checkin_version_show: "Покажи опциите за версии за вписване",
		entry_template_checkin_version_hide: "Скрий опциите за версии за вписване",

		entry_template_checkin_version_message_no_versions: "Политиката за версии на избрания клас не позволява на потребителите да вписват нови версии на документа.",
		entry_template_checkin_version_message_always_version: "Политиката за версии на избрания клас не позволява на потребителите да заменят текущата версия на документа.",

		entry_template_applied: "Използвай този шаблон за запис, когато потребителите:",
		entry_template_applied_add: "Добавят документи (задължително)",
		entry_template_applied_add_folder: "Създават папки (задължително)",
		entry_template_applied_checkin: "Вписване",
		entry_template_applied_properties_group: "Преглед или редактиране на свойства:",
		entry_template_applied_properties: "В прозореца Свойства",
		entry_template_applied_viewer: "Във визуализатора на аплета",
		entry_template_applied_docinfo: "В прозореца за информация за документа",
		entry_template_applied_no_class_support: "Този шаблон за запис може да се използва за добавяне на елементи, но не и за вписването на документи или преглеждане и редактиране на свойства. Избраният клас трябва да бъде модифициран, за да поддържа тези ситуации. Ако трябва да използвате шаблона за запис в такива ситуации, помолете администратора да използва инструмента за администриране, за да модифицира класа по такъв начин, че да може да съхранява идентификатори на шаблона за запис.",
		entry_template_applied_no_child_component_support: "Избраният клас има дъщерни компоненти и е зададено оформление за свойства. Оформленията на свойства не поддържат дъщерни компоненти. Дъщерните компоненти няма да се покажат на потребителя.",
		entry_template_applied_child_component: "Избраният клас има дъщерни компоненти. Те ще бъдат показани на потребителя, но не можете да конфигурирате дъщерните компоненти в този шаблон за запис.",

		entry_template_properties_show: "Покажи раздела <b>Свойства</b>",
		entry_tempalte_properties_show_hover: "Ако изведете раздела <b>Свойства</b>, потребителите могат да модифицират всички стойности на свойства, които се показват в шаблона за запис и които не са свойства само за четене.",
		entry_template_properties_hide: "Скрий раздела <b>Свойства</b>",
		entry_template_properties_hide_hover: "Ако скриете раздела <b>Свойства</b>, потребителите не могат да модифицират никакви стойности на свойства. Шаблонът за запис трябва да дефинира всички стойности, които искате да използвате, когато чрез него се добавят елементи.",

		entry_template_security_show: "Покажи раздела <b>Защита</b>",
		entry_template_security_show_hover: "Ако изведете раздела <b>Защита</b>, потребителите, които имат необходимите позволения, ще могат да модифицират защитата на елемента.",
		entry_template_security_hide: "Скрий раздела <b>Защита</b>",
		entry_template_security_hide_hover: "Ако скриете раздела <b>Защита</b>, потребителите няма да могат да променят защитата на елементите. Шаблонът за запис трябва да определя дефинира всички настройки за защита, които желаете да използвате при добавянето или редактирането на елементи.",
		entry_template_security_policy: "Правила за зашита:",
		entry_template_security_policy_hover: "В зависимост от политиката за защита, която сте избрали, тя може да:<br><ul><li>Презаписва разрешенията, които са указани под <b>Задаване на защитата на елемента</b>.</li><li>Добавя към разрешенията, които са указани под <b>Задаване на защитата на елемента</b>.</li></ul>",
		entry_template_security_policy_none: "Няма избрана политика за защита",
		entry_template_security_inherit: "Наследяване на настройките за защита от родителската папка",
		entry_tempalte_save_in_hover: "Укажете къде да се запази шаблонът за запис.<br><br><b>Ограничение:</b> ако запазите шаблона за запис в екипно пространство, можете да го използвате само в рамките на това екипно пространство.",
		entry_template_security_inherit_item_security_hover: "Ако изберете тази опция, настройките за защита за главната папка ще бъдат добавени към настройките за защита, които се дефинират от един от следните елементи:<ul><li>Посоченият клас в раздела <b>Задаване на свойствата на елемент</b></li><li>Потребителската защита, която сте указали в раздела <b>Задаване на защитата на елемент</b></li></ul>",
		entry_template_security_change: "Презаписване на защитата, определена от избрания клас",
		entry_template_security_change_hover: "Ако изберете тази опция, настройките за защита, които са определени за класа, се показват по подразбиране. След това можете да модифицирате настройките за защита за шаблона за запис.<br><br>Ако изведете раздела <b>Защита</b>, потребителите, които имат необходимите позволения, ще могат да модифицират защитата на елемента.<br><br>Ако изберете тази опция и изберете да има наследяване на настройките за защита от родителската папка, всички наследяеми позволения ще бъдат добавени към защитата, която укажете.",
		entry_template_security_default_item_security: "Презаписване на защитата по подразбиране на елемента за потребителя, който добавя елемента",
		entry_template_security_policy_message_override: "Избраната политика за защита е конфигурирана да презаписва разрешенията, които са указани под Задаване на защита.",
		entry_template_security_policy_message_add: "Избраната политика за защита е конфигурирана да добавя към разрешенията, които са указани под Задаване на защита.",
		entry_template_security_policy_preserve_true_hover: "Запазва директното разрешение",
		entry_template_security_policy_preserve_false_hover: "Не запазва директното разрешение",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Специфични роли",
		entry_template_security_class_role_search_title: "Търсене на роли:",
		entry_template_secuirty_class_member_title: "Списък с членове за ${0}",
		entry_template_secuirty_class_folder_only: "Тези позволения се прилагат само за тази папка",
		entry_template_secuirty_class_folder_and_immediate_children: "Тези позволения се прилагат за тази папка и за тези незабавни дъщерни елементи, които са конфигурирани да наследят защитата от тази папка.",
		entry_template_secuirty_class_folder_and_all_children: "Тези позволения се прилагат за тази папка и за всички произхождащи елементи, които са конфигурирани да наследят защитата от тази папка. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Тези позволения се прилагат за тези незабавни дъщерни елементи, които са конфигурирани да наследят защитата от тази папка",
		entry_template_secuirty_class_folder_all_children_not_folder: "Тези позволения се прилагат за всички произхождащи елементи, които са конфигурирани да наследят защитата от тази папка",

		entry_template_class_security_message_no_override: "Защитата на избрания клас не позволява на потребителите да презаписват сигурността.",
		entry_template_class_security_required_privileges: "<b>Важно:</b>: когато презапишете защитата на избрания клас, потребителите, които добавят елементи чрез този шаблон за запис, трябва да имат правата ItemSetACL и UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Последователен моделен работен поток",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Паралелен моделен работен поток",
		entry_template_workflow_type_existing: "Персонален работен поток...",
		entry_template_workflow_launch_prompt: "Питай потребителите дали да се стартира работният процес",
		entry_template_workflow_launch_auto: "Автоматично стартирай работния поток",
		entry_template_workflow_modify_launch: "Позволи на потребители да модифицират стъпката за стартиране",
		entry_template_workflow_modify_launch_hover: "Изберете тази опция, ако желаете да позволите на потребителите да променят начина, по който се стартира работният процес.",

		entry_template_optionsButton_title: "Промяна",
		entry_template_optionsButton_readonly_title: "Преглед на асоциации",
		entry_template_optionsDialog_title: "Настройки за асоциации на папка",
		entry_template_removeButton_title: "Премахване",
		entry_template_addButton_title: "Добавяне",
		entry_template_selected_entry_templates: "Избрани шаблони за запис",
		entry_template_docs_added_to_template_destination: "Документите се добавят към местоположението, указано в шаблона за запис.",
		entry_template_docs_added_to_other_object_store: "Този шаблон за запис добавя елементи към хранилището за обекти ${0}.",
		entry_template_inherited_entry_templates_label: "Искам да: ",
		entry_template_inherited_entry_templates: "Наследяване на асоциации за шаблон за запис от папка: ",
		entry_template_inherited_entry_templates_not: "Създаване на нови асоциации за тази папка",
		entry_template_inherited_folder_path: "Шаблоните за запис в списъка с избрани шаблони за запис са асоциирани със следната папка: ${0}. <br> Пътят до папката е ${1}.",
		entry_template_folder_associations_title: "Асоцииране на шаблони за запис",
		entry_template_folder_associations_intro: "Когато асоциирате шаблон за запис с дадена папка, потребителите трябва да използват шаблона, за да добавят елементи в папката. Ако асоциирате няколко шаблона за запис с една папка, потребителите могат да избират кой от тях да използват.",
		entry_tempalte_folder_associations_entrytemplate: "Шаблон за запис: ",
		entry_template_avaliable_entry_templates: "Налични шаблони за запис",
		entry_template_fileTypes_intro_title: "Позволени типове файлове:",
		entry_template_fileTypes_intro: "По подразбиране един шаблон за запис може да се използва за добавяне на всички типове документи в хранилището. Ако обаче изберете един или повече типове файлове, шаблоните за запис са достъпни само когато потребителите добавят документи, които покриват някой от посочените типове файлове.",
		entry_template_fileTypes: "Типове файлове",
		entry_template_fileType_error: "За една или повече асоциации с шаблон за запис са избрани невалидни типове файлове. Трябва да отстраните невалидните типове файлове, преди тези асоциации с шаблони за запис да могат да бъдат използвани.",
		entry_template_fileTypes_any_type_of_file: " Всички типове файлове",
		entry_template_description_label: "Описание",
		entry_template_ItemInfoPrefix: "Асоцииране с: ",
		entry_template_TargetObjectStoreName: "Целево хранилище за обекти",
		entry_template_class: "Клас",
		entry_template_current_folder_as_parent: "Използване на папка като местоназначение",
		entry_template_view_minetypes: "Преглед на MIME типове",
		entry_template_avaliable_MIME_types: "Налични типове файлове",
		entry_template_selected_MIME_types: "Избрани типове файлове",
		entry_template_MIME_type_column: "име на категория за файлов тип",
		entry_template_file_type_not_existing: "Моля, отстранете невалидните типове файлове.",
		entry_template_MIME_types: "MIME типове:",
		entry_template_MIME_types_info_dialog_title: "MIME типовете за",
		entry_template_destination_label: "Добавяне на документи към: ",
		entry_template_destination_help: "Укажете къде да се съхранят документите в хранилището, когато потребителите добавят документи в тази папка чрез избрания шаблон за запис.",
		entry_template_radioButton_folder_destination: "Избрана папка",
		entry_template_radioButton_template_destination: "Местоположение, указано в шаблона за запис",
		entry_tempalte_teamspace_default: "Шаблон за запис по подразбиране",
		entry_template_folder_associations_save_new: "Модифицирахте някои асоциации с шаблони за запис. Желаете ли да затворите този прозорец, без да запазите промените?",
		entry_template_mode_binding_label: "Свойства",
		entry_template_columns_className: "Име на клас",
		entry_template_columns_type: "Тип шаблон",
		entry_template_columns_workflow: "Име на работен поток",
		entry_template_columns_destination: "Местоназначение",
		entry_template_association_less_than_record: "Има ${0} шаблона за запис, които не са изброени в избраните шаблони за запис. Нямате разрешение да ги виждате. Или пък те са изтрити. За повече информация се свържете със системния администратор.",
		/* Request */

		progress_message_general: "В процес на работа...",
		cancel_message_general: "Действието беше отменено.",
		ie8_not_supported_browser: "IE8 не е поддържан браузър.",
		progress_message_getDesktop: "Зареждане на работен плот...",
		progress_message_getActions: "Зареждане на действия...",
		progress_message_getViewers: "Зареждане на работен плот...",
		progress_message_logon: "Вход...",
		progress_message_logoff: "Изход...",
		progress_message_getContentClasses: "Извличане на класове...",
		progress_message_openContentClass: "Извличане на данни за класове...",
		progress_message_od_getCabinets: "Извличане на кабинетни файлове...",
		progress_message_getSearchTemplates: "Извличане на търсения...",
		progress_message_od_getTemplates: "Извличане на папки...",
		progress_message_od_openCabinet: "Извличане на папки...",
		progress_message_openSearchTemplate: "Отваряне на търсене...",
		progress_message_od_openTemplate: "Отваряне на папка...",

		progress_message_getWorklists: "Извличане на работни списъци...",
		progress_message_getWorkItems: "Извличане на работни елементи...",
		progress_message_getNextWorkItems: "Извличане на работни елементи...",
		progress_message_getStepParameters: "Извличане на информация за работен елемент...",
		progress_message_getStepAttachmentItems: "Извличане на информация за прикачен файл...",
		progress_message_getDependentParameters: "Извличане на информация за свойство...",

		progress_message_p8_getProcessApplicationSpaces: "Извличане на пространства за приложения...",
		progress_message_p8_getProcessRoles: "Извличане на роли за процес...",
		progress_message_p8_getProcessInbaskets: "Извличане на входящи кошници...",
		progress_message_p8_getProcessorInformation: "Извличане на информация за процес...",
		progress_message_p8_getFilterCriteria: "Извличане на филтър за входяща кошница...",
		progress_message_p8_getLaunchParameters: "Извличане на информация за работен елемент...",
		progress_message_p8_getStepAttachments: "Извличане на прикачени файлове към работен елемент...",
		progress_message_p8_getSubscriptions: "Извличане на абонаменти за работен поток...",
		progress_message_p8_getTrackerParameters: "Извличане на информация за работен елемент...",
		progress_message_p8_getTrackerHistory: "Извличане на хронология за работен елемент...",
		progress_message_p8_getTrackerMilestones: "Извличане на контролни точки за работен елемент...",
		progress_message_p8_completeStep: "Приключване на работен елемент...",
		progress_message_p8_moveToInbox: "Преместване на елемент във входяща кошница...",
		progress_message_p8_returnToSender: "Връщане на работен елемент...",
		progress_message_p8_reassign: "Повторно задаване на работен елемент...",
		progress_message_p8_launchWorkflow: "Стартиране на работен поток...",
		progress_message_p8_getTransferedWorkflows: "Извличане на информация за работен поток...",

		progress_message_cm_getProcesses: "Извличане на информация за работен поток...",
		progress_message_cm_completeStep: "Продължаване на работен елемент...",
		progress_message_cm_getItemProcessInformation: "Извличане на информация за работен поток...",

		progress_message_search: "Търсене...",
		cancel_message_search: "Търсенето беше отменено.",
		progress_message_getContentItems: "Извличане на информация за елемент...",
		progress_message_openFolder: "Отваряне на папка...",
		progress_message_addItem: "Създаване на елемент...",
		progress_message_checkIn: "Вписване на елемент...",
		progress_message_changePassword: "Промяна на парола...",
		progress_message_getDefaultInstancePermissions: "Извличане на позволения по подразбиране...",
		progress_message_openItem: "Извличане на информация за елемент...",
		progress_message_saveItem: "Запазване на информация за елемент...",
		progress_message_getPermissions: "Извличане на позволения...",
		progress_message_getEntryTemplates: "Извличане на шаблони за запис...",
		progress_message_openEntryTemplate: "Отваряне на шаблон за запис...",
		progress_message_getFavorites: "Извличане на предпочитания...",
		progress_message_getFoldersFiledIn: "Извличане на папки...",
		progress_message_getDocumentVersions: "Извличане на версии...",
		progress_message_getDependentAttributeInfo: "Извличане на информация за атрибут...",
		progress_message_packageForDownload: "Опаковане за изтегляне...",
		progress_message_convertDocument: "Конвертиране на съдържание...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Извличане на тип съдържание...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Добавяне на документ...",

		progress_message_desktop_reload: "Клиентът презарежда работния Ви плот.<br>Възможно е да получите подкана да влезете в системата наново.",
		progress_message_email: "Изпращане на имейл...",
		cancel_message_email: "Имейлът е отменен.",

		progress_message_p8_getOfficeOnlineTemplates: "Извличане на шаблони за Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Дърво за предпочитания",
		favorites_content_list_label: "Списък с предпочитано съдържание",
		syncItems_tree_label: "Дърво с моите синхронизирани файлове",
		syncItems_content_list_label: "Списък със съдържанието на моите синхронизирани файлове",
		my_checkouts_content_list_label: "Списък със съдържание на Моите изписани елементи",
		browse_tree_label: "Преглед на дърво",
		browse_content_list_label: "Преглед на списък със съдържание",
		repository_selector_label: "Селектор на хранилище",
		teamspaces_content_list_label: "Списък със съдържание на екипно пространство",
		templates_content_list_label: "Списък със съдържание на шаблони",
		work_content_list_label: "Списък с работно съдържание",
		work_tree_label: "Дърво за работа",
		admin_tree_label: "Дърво за администриране",
		admin_tabs_label: "Раздели за администриране",
		search_tabs_label: "Раздели за търсене",
		search_selector_label: "Селектор за търсене",
		teamspace_browse_content_list_label: "Списък със съдържание за преглед на екипно пространство",
		teamspace_search_tabs_label: "Раздели за търсене в екипно пространство",

		/* Desktop */
		undo_description: "Отмени ${0}",
		redo_description: "Върни ${0}",

		/* Application Tabs */
		home: "Начало",
		repository: "Хранилище",
		repository_type: "Тип хранилище:",
		repository_type_header: "Тип хранилище",
		repository_type_any: "Всички хранилища",
		repository_type_contains_label: "Типът хранилище съдържа",
		document_info: "Информация за документ",
		team: "Екип",
		administration: "Администриране",

		/* Home Page */
		recent_activity: "Скорошна дейност",
		repos_and_wrksp: "Хранилища и екипни пространства",
		workspaces: "Екипни пространства",
		repositories: "Хранилища",
		templates: "Шаблони",
		favorites: "Предпочитания",
		my_checkouts: "Моите отписвания",
		mySyncedFiles: "Моите синхронизирани файлове",
		links: "Връзки",
		name_label: "Име",
		description_label: "Описание:",
		type_label: "Тип:",
		type_heading: "Тип",
		type_id_label: "Идентификатор на тип",
		server_type_icon: "Икона за тип сървър",
		server_type_heading: "Тип сървър",
		server_type: "Тип сървър",
		port_heading: "Номер на порт",
		port_label: "Номер на порт:",
		server_name_heading: "Име на сървър",
		server_label: "Име на сървър:",
		server_url_label: "URL адрес на сървър:",
		id_label: "Идентификатор:",
		id_heading: "Идентификатор",
		connected_label: "Свързан:",
		repository_label: "Хранилище",
		modified_label: "Променен от:",
		modified_date_label: "Променен на:",
		status_label: "Състояние:",
		last_modified_label: "Последна промяна от:",

		modifier: "Променен по",
		modified_date: "Променен на",

		/* Favorites */
		new_favorite_label: "Добавяне към предпочитания",
		edit_favorite_label: "Преименуване на предпочитан",
		remove_favorite_label: "Премахване от предпочитания",
		missing_alias_message: "Трябва да посочите име.",
		sync_favorite_enable_hover: "Този елемент може да се синхронизира.",
		sync_favorite_disable_hover: "Този елемент не се синхронизира.",
		sync_favorite_sync_unavailable_hover: "Синхронизирането не е достъпно за този тип обект.",
		sync_enable_label: "Синхронизирай елемента",
		sync_enable_label_hover: "Този елемент ще се синхронизира с устройствата Ви.",
		delete_favorite_confirmation_question: "Желаете ли да премахнете елемента от предпочитанията?",
		alias_label: "Име:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Избраният елемент вече се намира в предпочитанията.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Този елемент не може да се добави към списъка с предпочитания.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Можете да съхранявате само ${0} предпочитания.",
		add_favorite_max_reached_response: "Ако желаете да добавите този елемент към списъка си с предпочитания, преди това трябва да изтриете съществуващ предпочитан елемент.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Избраният документ не може да се конвертира в PDF.",
		download_as_pdf_max_content_error_explanation: "Можете да конвертирате само ${0} MB данни в PDF. Избраните документи надвишават ${0} MB.",
		download_as_pdf_max_content_error_response: "Изберете по-малко като брой или по-малки като размер документи и отново ги изтеглете като PDF файлове.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Избраните документи не могат да се конвертират в един PDF файл.",
		download_as_pdf_mimetype_check_error_explanation: "За да конвертирате документ от няколко части в един PDF файл, всяка част трябва да има един и същ MIME тип.",
		download_as_pdf_mimetype_check_error_response: "Изберете различен документ за конвертиране в PDF.",

		/* Activity Stream */
		show_label: "Покажи:",
		all_filter: "Всички",
		notifications_filter: "Известия",
		workitems_filter: "Работни елементи",
		documentes_filter: "Документи",
		all_favorites_filter: "Всички предпочитания",
		folders_filter: "Папки",
		searches_filter: "Търсения",
		teamspaces_filter: "Екипни пространства",

		/* Repository */
		all_search_templates: "Всички търсения",
		all_od_searches: "Всички шаблони за търсене",
		recent_searches: "Скорошни търсения",
		opened_searches: "Отворени търсения",

		all_worklists: "Всички входящи кутии",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Списък с всички работни списъци",

		/* Teamspace */
		all_workspaces: "Всички екипни пространства",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Списък с всички екипни пространства",
		workspace_title: "Екипно пространство",
		workspace_icon: "Икона Teamspace",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Достъпно",
		workspace_stat_offline: "Недостъпни",
		workspace_stat_validate: "Изисква валидиране",
		workspace_stat_pendingDelete: "Чакащо изтриване",
		workspace_stat_deleteError: "Неуспешно изтриване",

		undefined_value: "Не е дефинирано",
		undefined_reference_value: "Няма дефинирана референция.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Възможно е на сървъра да са налични повече резултати.",
		search_all_data: "Търсене на всички данни.",
		search_all_teamspaces: "Търсене на всички екипни пространства.",
		teamspace_filter_results: "Показване на ${0} резултата. ",
		displaying_filtered_results: "Показване на филтрирани резултати. ",
		displaying_recent_results: "Показване само на екипни пространства, които са били променени през последните ${0} дни. За да намерите други екипни пространства, филтрирайте списъка по име или по описание. ",
		clear_filter: "Изчистване на филтъра.",

		/* FolderTreeModel */
		move_item_task: "Преместване на елемент",
		copy_item_task: "Копиране на елемент",
		add_item_task: "Добавяне на елемент",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Следната папка не можа да бъде намерена: ${0}. Възможно е да е била изтрита или да не може да се отвори от този изглед. Щракнете върху връзката Още от дървовидния изглед, за да се придвижите до папката. Ако не можете да видите папката, обновете списъка със съдържанието.",
		more_paging_link: "още ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Състояние",
		status_dialog_cancel_label: "Отказ",

		/* ErrorDialog */
		error_dialog_title: "Грешка",
		error_dialog_icon_tooltip: "Грешка",
		error_dialog_stack_trace_title: "Проследяване на стек",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Потвърждение",

		close_browser_msg: "Затворете прозореца на браузъра.",

		/* MessageDialog */
		message_dialog_title: "Информация",
		warning_dialog_title: "Предупреждение",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Добре дошли в ${0}",
		server: "Хранилище:",
		username: "Потребителско име:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "За вход в хранилището е необходимо потребителско име.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "За вход в хранилището е необходима парола",
		password: "Парола:",
		login: "Вход",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Сесията Ви изтече. Влезте отново.",
		login_repository_connection_expired_message: "Връзката Ви с хранилището ${0} изтече. Влезте отново.",
		login_site_connection_expired_message: "Връзката Ви със сайта изтече. Влезте отново.",
		login_new_server_message: "Въведете потребителско име и парола за ${0}.",
		login_error_more_information_message: "Още информация",

		disconnect_box_account_user: "Прекъсване на връзката с акаунт в Box: ${0}",
		disconnect_box_account: "Прекъсване на връзката с акаунт в Box",
		disconnect_box_accounts: "Прекъсване на връзката с акаунти в Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "За достъп до Box хранилището се иска SSL връзка.",
		login_oauth_popup_blocked: "Изскачащият прозорец беше блокиран. Може да трябва да деблокирате изскачащите прозорци от настройките на браузъра.",
		login_oauth_click_here: "Ако не бъдете пренасочени до 5 секунди, щракнете тук.",
		login_oauth_title: "Вход",
		login_oauth_grant_intro: "Предоставяне на удостоверяване за ${0}.",
		login_pane_oauth_click_here: "Щракнете тук, за да влезете.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Желаете ли да излезете от уеб клиента?",
		logout_confirmation_button: "Изход",

		/* ChangeLocaleDialog */
		change_locale: "Промяна на настройки за език и езикова променлива",
		change_locale_use_browser_language: "Използвай настройките за език на браузъра (по подразбиране)",
		change_locale_use_browser_locale: "Използвай настройките за език на браузъра (по подразбиране)",
		change_locale_description: "Ако изтриете бисквитките на браузъра, трябва да нулирате настройките за език и езикова променлива.",
		change_locale_language_locale: "Език на приложение:",
		change_locale_language_locale_hover: "Тази настройка променя езика на текста в уеб клиента, но не променя езика на документите в приложението.<br><br>Настройката по подразбиране използва езика, който е посочен в конфигурационните опции на Вашия уеб браузър.",
		change_locale_value_format_locale: "Езикова променлива на приложение:",
		change_locale_value_format_locale_hover: "Езиковата променлива определя формата на датите, часовете и числата в уеб клиента.<br><br>Настройката по подразбиране използва форматите, които са асоциирани с езика, който е посочен в конфигурационните опции на Вашия уеб браузър.",
		change_locale_for_office: "Настройки за двупосочен текст:",
		change_locale_bidi_support_flag: "Активиране на двупосочна поддръжка",
		change_locale_bidi_support_flag_hover: "Когато двупосочната поддръжка е активирана, потребителят може да задава посоката на текста, използван в полетата за въвеждане.  Текстът, който е въведен за елементи, например папки, ще се покаже в същата посока, в която е бил въведен.",
		change_locale_base_text_direction: "Основна посока за текст за съдържание:",
		change_locale_base_text_direction_hover: "Задайте посоката на текста, който се въвежда в полетата.  Това също така контролира посоката за показване на етикетите, които са били въведени от потребителя, например имена на папки.",
		change_locale_calendar_type: "Тип календар:",
		change_locale_calendar_type_hover: "Изберете типа календар, който ще се използва за потребителската сесия.",
		change_locale_base_text_direction_default: "По подразбиране",
		change_locale_base_text_direction_ltr: "От ляво надясно",
		change_locale_base_text_direction_rtl: "От дясно наляво",
		change_locale_base_text_direction_contextual: "Контекстен",
		change_locale_calendar_type_gregorian: "Григориански",
		change_locale_calendar_type_hijri: "Хижри",
		change_locale_calendar_type_hebrew: "Иврит",
		change_locale_calendar_type_Umm_al_Qura: "Ум ал-кюра",

		/* ChangePasswordDialog */
		change_password: "Промяна на парола",
		change_password_title: "Промяна на парола",
		change_password_expired_title: "Паролата е изтекла",
		change_password_message: "Въведете нова парола.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Вашата парола е изтекла. Въведете нова парола.",
		change_password_password_rules: "Правила за паролите",
		change_password_old_password: "Стара парола:",
		change_password_new_password: "Нова парола:",
		change_password_confirm_password: "Потвърждение на паролата:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Трябва да въведете старата си парола.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Трябва да въведете нова парола.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Трябва да потвърдите новата си парола.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Паролите трябва да съвпадат.",

		/* GlobalToolbar */
		actions: "Действия",
		actions_label: "Действия:",
		open_actions_label: "Отворени действия:",

		/* About Dialog */
		about_dialog_title: "Относно",
		about_product_name_label: "Име на продукт: ",
		about_product_version_label: "Версия: ",
		about_product_build_label: "Компилация: ",
		about_product_license: "Лицензирани материали - собственост на IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Всички права запазени. Ограничени права за държавни служители на САЩ. Използването, дублирането или разкриването е ограничено от GSA ADP срочен договор с IBM Corporation. IBM и логото на IBM са регистрирани търговски марки на International Business Machine Corporation в САЩ, в други държави или и в двете. Тази програма е лицензирана според условията на лицензното споразумение, придружаващо програмата. Това лицензно споразумение може да се намира в програмна директория или библиотека, идентифицирана като \"License\" или \"Non_IBM_License\", ако това е приложимо, или предоставено като отпечатано лицензионно споразумение. Моля, прочетете внимателно това споразумение, преди да използвате програмата. Като използвате програмата, Вие приемате тези условия. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Желаете ли да изтриете избрания елемент?",
		delete_single_folder_confirmation_question: "Желаете ли да изтриете папката ${0}?",
		delete_multiple_confirmation_question: "Желаете ли да изтриете избраните елементи?<br>Избрани са ${0} елемента.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Изтриване",
		search_template_delete_confirmation_question: "Желаете ли да изтриете търсенето ${0}?",
		search_template_opened_delete_confirmation_question: "Търсенето ${0} е отворено. Ако изтриете търсенето, то ще се затвори.<br>Желаете ли да изтриете това търсене?",
		delete_multiple_opened_search_template_confirmation_question: "Следните търсения са отворени: ${0}.<br>Ако изтриете търсенията, те ще се затворят. Желаете ли да изтриете тези търсения?",
		delete_large_number_items_confirmation_question: "Избрали сте ${0} елемента за изтриване.<br/>Изтриването на голям брой елементи може да отнеме дълго време.<br/>Желаете ли да продължите?",
		delete_confirmation_entrytemplate: "Ако изтриете този шаблон за запис, това ще окаже следното въздействие върху документите или папките, които са асоциирани с него:<ul><li>Елементите повече няма да бъдат асоциирани с шаблона за запис и е възможно потребителите да виждат предупреждение, когато актуализират даден елемент.</li><li>Всички свойства, които са контролирани от шаблона за запис, например името или реда на свойствата, повече няма да се прилагат към елементите, които са асоциирани с шаблона за запис.</li></ul>Желаете ли да изтриете този шаблон за запис?",
		delete_confirmation_entrytempalte_with_multi_items: "Шаблоните за запис трябва да се изтриват индивидуално. Шаблоните за запис бяха премахнати от списъка с елементи за изтриване. Ако желаете да изтриете шаблоните за запис, трябва да ги изтриете поотделно.",

		/* Create/Apply/Remove Hold */
		hold: "Задържане",
		createHold: "Ново задържане",
		applyHold: "Прилагане на задържане",
		removeHold: "Премахване на задържане",
		showHolds_title: "Показване на задържанията",
		applyHoldSelectText: "Изберете задържанията, които желаете да приложите към избраните елементи.",
		availableHolds: "Налични задържания:",
		removeHoldSelectText: "Изберете задържанията, които желаете да премахнете от избраните елементи.",
		appliedHolds: "Приложени задържания:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Създайте ново задържане, което да се прилага към избраните елементи.",
		holdName: "Име на задържане:",
		holdDescription: "Описание:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Трябва да посочите име за задържането.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Посоченото име за задържане вече съществува.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Името на задържането не може да съдържа следните символи: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Вашата сесия ще изтече след ${0} минути.",
		session_expire: "Сесията изтича",
		logoff: "Изход",
		extend_session: "Удължаване на сесия",
		admin_custom_settings: "Допълнителни настройки:",
		admin_custom_settings_hover_help: "EnableSessionExpireWarning е булева стойност, която показва дали е активирано предупреждение за изтичане на сесията, стандартната стойност е true. sessionExpireWarningTime е цяло число между 2 и 5, и показва предупреждение за изтичане на времето на сесията.",
		admin_custom_setting_dialog_title_new: "Нова настройка",
		admin_custom_setting_dialog_title_edit: "Редактиране на настройка",
		admin_custom_setting_dialog_hover_help: "Добавяйте други параметри, като посочвате името и стойността на параметъра. Например можете да зададете “enableSessionExpireWarning” и “true”, ако желаете да получавате предупреждение при изтичане на сесията.",
		admin_custom_setting_dialog_field_hover_help: "За повече информация относно имената и стойностите на параметрите вижте справочното ръководство за параметрите на IBM navigator.",
		admin_custom_setting_dialog_nameInvalid: "Стойността е задължителна. Стойността не може да съдържа празни места и да се дублира.",
		admin_custom_setting_dialog_bool_valueInvalid: "Стойността е задължителна. Стойността трябва да бъде булева.",
		admin_custom_setting_dialog_int_valueInvalid: "Стойността е задължителна. Стойността трябва да бъде цяло число.",
		/* Add Document Dialog */
		add_document_dialog_title: "Добавяне на документ",
		add_documents_dialog_title: "Добавяне на документи",
		add_document_general_label: "Общи",
		add_document_properties_label: "Свойства",
		add_document_properties_with_ellipsis_label: "Свойства...",
		add_document_security_label: "Защита",
		add_document_location_label: "Запази в:",
		add_document_type_label: "Какво желаете да запазите?",
		add_document_localfile_label: "Локален документ",
		add_document_metadata_label: "Информация за документ",
		add_document_external_label: "Връзка към външен документ",
		add_document_web_link_label: "Уеб връзка",
		add_document_saved_content_label: "Използване на запаметен файл:",
		add_document_saved_content_choice: "Запаметен файл:",
		add_document_file_name_label: "Файлово име:",
		add_document_entry_template_label: "Шаблон за запис:",
		add_document_delete_file_label: "Изтриване на локален файл",
		add_document_delete_file_disabled_label: "Файлове, които не са в директорията за проследяване на файлове, няма да бъдат изтрити.",
		add_document_major_version_label: "Основна версия",
		add_document_major_version_hover: "Задава състоянието на документа на Публикуван. Документът се добавя в хранилището като версия 1.0. Ако опцията не е избрана, документът не е готов за публикуване и се добавя като второстепенна версия 0.1.",
		add_document_save_document_as_unfiled_label: "Не запазвай документа в папка",
		add_document_save_document_as_unfiled_hover: "Ако изберете тази опция, ще можете да намерите този документ само чрез търсене. Няма да го виждате при прегледите.",
		add_document_create_new_version_label: "Създаване на нова версия",
		add_document_replace_existing_version_label: "Замяна на съществуваща версия",
		add_document_start_workflow_label: "Стартиране на работен поток",
		add_document_auto_classify_label: "Автоматично класифициране на съдържанието",
		add_document_add_label: "Добавяне",
		add_document_cancel_label: "Отказ",
		add_document_document_type_label: "Клас",
		add_document_context_info: "Стойностите, които въвеждате за свойствата на документа, могат да се използват за неговото намиране по-късно.",
		add_documents_context_info: "Стойностите, които въвеждате за документите, могат да се използват за тяхното намиране по-късно. Ако трябва да въведете различна стойност на свойство за даден документ, трябва да я добавите отделно или да редактирате свойствата на документа, след като я добавите.",
		add_document_url_label: "URL адрес:",
		add_document_template_description: "Описание на шаблон:",
		add_document_select_entry_template: "Въведете или изберете шаблон за запис",
		add_document_no_permission_to_associations: "Нямате позволения да използвате шаблон за запис",
		add_document_no_entry_template_to_use: "За избраните файлове не може да се използва шаблон за запис",
		add_document_no_entry_template_itemtype_permission: "Не можете да добавяте елементи в тази папка. Трябва да има избран шаблон за запис, а Вие нямате достъп до нито един такъв, който да е асоцииран с тази папка. Свържете се с Вашия системен администратор и го помолете да Ви даде достъп до шаблоните за запис, които са асоциирани с папката.",
		add_document_appgroup_name_label: "Име на група приложения:",
		add_document_app_name_label: "Име на приложение:",
		create_folder_dialog_title: "Нова папка",
		create_folder_context_info: "Стойностите, които въвеждате за свойствата на папката, могат да се използват за нейното намиране по-късно.",
		create_folder_folder_name_label: "Име на папка",
		create_folder_save_folder_as_unfiled_label: "Не запазвай папката в друга папка",
		create_folder_save_folder_as_unfiled_hover: "Ако изберете тази опция, ще можете да намерите тази папка единствено чрез търсене. Няма да го виждате при прегледите.",
		add_item_create_in_folder: "Създаване в папка:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Името на папката не може да съдържа следните символи: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Името на папката не може да съдържа следните символи: \\ / и не може да се равнява на . или ..",
		invalid_box_file_name_message: "Името на файла не може да съдържа следните символи: \\ / и не може да се равнява на . или ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Името на файла не може да съдържа следните символи: \\ / : * ? \" < > |",
		external_document_placeholder: "Въведете URL адреса на документа",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Цветът трябва да бъде въведен като 3- или 6-цифрено шестнадесетично число, например #000 или #000000.",
		add_document_unfiled: "${0} неподадени",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Добавяне на документ чрез шаблон за запис",
		add_document_using_template_context_info: "Когато добавите документ с помощта на шаблон за запис, стойностите, които въвеждате за документа, са съгласувани.",
		add_documents_using_template_dialog_title: "Добавяне на документи чрез шаблон за запис",
		add_documents_document_name_is_file_name_hint: "За това свойство ще се използва файловото име",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Нова папка чрез шаблон за запис",
		create_folder_using_template_context_info: "Когато създавате папка с помощта на шаблон за запис, стойностите, които въвеждате за папката, са съгласувани.",

		add_documents_batch_results_dialog_title: "Документите не са добавени в хранилището",
		add_documents_batch_results_dialog_context_info: "Следните документи не бяха добавени в хранилището. Изберете документ и щракнете върху Подробности за повече информация защо документът не е бил добавен в хранилището.",
		add_documents_batch_results_dialog_filename_col_hdr: "Име на файла",
		add_documents_batch_results_dialog_status_col_hdr: "Състояние",
		add_documents_batch_results_dialog_message_col_hdr: "Съобщение",
		add_documents_batch_results_status_error: "Грешка",
		add_documents_batch_results_status_cancelled: "Отменено",
		add_documents_batch_results_status_cancelled_msg: "Документът не беше добавен, тъй като заявката беше отменена.",

		add_documents_batch_status_title: "Добавяне на документи",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Добавяне на файл ${0} от ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Грешки: ${0}",
		add_documents_batch_status_completing_msg: "Процесът ще спре, след като този документ бъде добавен.",

		add_documents_status_uploading_msg: "Качване на файл ${0} от ${1}...",
		add_documents_status_adding_msg: "Добавяне на файл ${0} от ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Шаблонът за запис беше конфигуриран в друго приложение и е конфигуриран винаги да декларира документите като записи. Обаче тази настройка се игнорира, тъй като уеб клиентът не поддържа декларирането на документи като записи.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Шаблонът за запис беше конфигуриран в друго приложение и е конфигуриран да Ви позволява да избирате дали да декларирате документа като запис. Обаче тази настройка се игнорира, тъй като уеб клиентът не поддържа декларирането на документи като записи.",
		no_selection: "&lt;Избор&gt;",

		batch_results_dialog_details_label: "Подробности",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Стойността не е валидна. Стойността трябва да е глобален уникален идентификатор (GUID), например {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Стойността не е валидна. Стойността трябва да е число с плаваща запетая, например 1.2 или 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Стойността не е валидна. Стойността трябва да е във формата ${0}, например ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Стойността не е валидна. Стойността трябва да е десетична, например 1,2 или 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Стойността не е валидна. Стойността трябва да е цяло число, например 5 или 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Стойността не е валидна. Стойността може да съдържа само букви, например a-z и A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Стойността не е валидна. Стойността може да съдържа само букви, например a-z, A-Z, както и 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Стойността не е валидна. Стойността може да съдържа само цифри, например 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Стойността не е валидна. Стойността може да съдържа само следните символи a-z, A-Z, 0-9, [интервал] и `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Стойността не е валидна. Стойността трябва да е дата в следния формат: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Стойността не е валидна. Стойността трябва да е час в следния формат: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Стойността не е валидна. Изберете стойност от падащото меню.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Стойността не е валидна.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Стойността не е валидна. Стойността трябва да е в следния формат: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Стойността е задължителна.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Стойността е прекалено дълга. Свойството поддържа максимална дължина от ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Стойността е прекалено къса. Свойството поддържа минимална дължина от ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Стойността е извън обхвата. Стойността трябва да е число с плаваща запетая между ${0} и ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Стойността е извън обхвата. Стойността трябва да е десетична стойност между ${0} и ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Стойността е извън обхвата. Стойността трябва да е цяло число между ${0} и ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Стойността трябва да е дата между ${0} и ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Стойността е извън обхвата. Стойността трябва да е дата между ${0} и ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Стойността е извън обхвата. Стойността трябва да е час между ${0} и ${1}.",
		property_and: "и",

		property_invalidValueOrRequired: "Следната стойност е невалидна или е задължителна: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Свойства",
		edit_properties_dialog_info: "Можете да преглеждате или редактирате свойствата на този елемент. Ако имате необходимите позволения, можете също така да модифицирате защитата на елемента. Имайте предвид, че не можете да променяте системните свойства.",
		edit_properties_od_dialog_info: "Можете да преглеждате или редактирате свойствата на този елемент. Имайте предвид, че не можете да променяте системните свойства.",
		system_properties_title: "Системни свойства",
		custom_properties_title: "Свойства",
		/* Folder collaboration tab */
		box_permission_permission: "Позволение",
		box_permission_permissions: "Позволения",
		box_permission_editor: "Редактор",
		box_permission_owner: "Собственик",
		box_permission_co_owner: "Съсобственик",
		box_permission_viewer_uploader: "Програма за качване на визуализатор",
		box_permission_previewer_uploader: "Програма за качване на предварителна визуализация",
		box_permission_viewer: "Визуализатор",
		box_permission_previewer: "Предварителна визуализация",
		box_permission_uploader: "Програма за качване",
		box_permission_add: "Добавяне",
		box_permission_upload: "Качване",
		box_permission_download: "Изтегляне",
		box_permission_preview: "Визуализация",
		box_permission_view: "Изглед",
		box_permission_send_links: "Изпращане на връзки само за преглед",
		box_permission_create_subfolders: "Създаване на подпапки",
		box_permission_create_tasks: "Създаване на задачи",
		box_permission_add_comments: "Добавяне на коментари",
		box_collaboration_invite_placeholder: "Въведете име, имейл или група за поканване",
		box_collaboration_invite_placeholder_non_admin: "Въведете имейл за покана",
		box_collaboration_invalid_email: "Въведете валиден имейл адрес",
		box_collaboration_user_already_present: "Този потребител вече е сътрудник в папката",
		box_collaboration_user_name: "Име",
		box_collaboration_email_address: "Имейл адрес",
		box_collaboration_date_added: "Дата на добавяне",
		box_collaboration_remove_collaboration: "Премахване",
		box_collaboration_remove_collaboration_title: "Изтриване",
		box_collaboration_no_collaborators: "Няма сътрудници",
		box_collaboration_change_owner_title: "Промяна на собственик на елемент",
		box_collaboration_change_owner_prompt: "След като направите този сътрудник Собственик на папка, Вие ставате Редактор и вече не притежавате папката. Всички сътрудници, които са добавени директно към тази папка, ще я виждат в своите основни папки. Всички сътрудници, които са добавени на ниво родителска папка, повече няма да бъдат сътрудници. Желаете ли да продължите?",
		box_collaboration_remove_self_title: "Премахване на себе си",
		box_collaboration_remove_self_prompt: "Сигурни ли сте, че желаете да премахнете себе си като сътрудник? Повече няма да имате достъп до тази папка.",
		box_collaboration_user: "Потребител",
		box_collaboration_group: "Група",
		box_managing_users_not_configured: "Не можете да търсите потребители и групи, защото приложението Box не е конфигурирано правилно. За да използвате тази характеристика, свържете се с Вашия администратор и изискайте приложението Box да бъде конфигурирано за управление на потребители и групи.",
		duplicate_value_error: "Всяка стойност в това свойство трябва да е уникална.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Всички промени, които направите в следните полета, се прилагат за всички избрани елементи. Ако трябва да въведете различна стойност на свойство за определен предмет или да редактирате защитата на елемента, трябва да редактирате свойствата на елемента индивидуално.",
		multi_edit_properties_class_label: "Клас:",
		multi_edit_properties_items_label: "Имена на елементи:",
		multi_edit_properties_properties_label: "Свойства:",
		multi_edit_batch_status_title: "Актуализиране на свойства",
		multi_edit_batch_status_adding_msg: "Актуализиране на елемент ${0} от ${1}...",
		multi_edit_batch_status_verifying_msg: "Проверяване на елемент ${0} от ${1}...",
		multi_edit_batch_status_completing_msg: "Процесът ще спре, след като този елемент бъде актуализиран.",
		multi_edit_batch_status_validation_completing_msg: "Процесът ще спре, след като този елемент бъде проверен.",
		multi_edit_batch_results_status_error: "Грешка",
		multi_edit_batch_results_status_cancelled: "Отменено",
		multi_edit_batch_results_status_cancelled_msg: "Елементът не беше актуализиран, тъй като заявката беше отменена.",
		multi_edit_batch_results_dialog_title: "Елементите не бяха актуализирани",
		multi_edit_batch_results_dialog_context_info: "Следните елементи не бяха актуализирани. Изберете име на елемент и щракнете върху Подробности за повече информация защо елементът не е бил актуализиран.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Име на елемент",
		multi_edit_batch_results_dialog_status_col_hdr: "Състояние",
		multi_edit_batch_results_dialog_message_col_hdr: "Съобщение",
		multi_edit_batch_status_errors_msg: "Грешки: ${0}",
		multi_edit_batch_permission_error_text: "Промените на свойствата не могат да бъдат запазени.",
		multi_edit_invalid_value_error: "Тази стойност зависи от друга стойност на свойство и не е валидна за всички елементи, които сте избрали.",
		multi_edit_batch_permission_error_explanation: "Не можете да модифицирате свойствата на този елемент, тъй като нямате достатъчни права.",
		multi_edit_no_modifiable_properties: "Свойствата на избраните елементи не могат да бъдат модифицирани. Това може да се случи, когато даден елемент включва свойства, които са само за четене, или когато може да се редактира само името или заглавието на елемента. Когато са избрани няколко елемента, не можете да модифицирате името или заглавието на елементите.",
		multi_edit_mult_classes_dialog_info: "Избраните елементи се намират на различни хранилища или принадлежат към различни класове. Можете да редактирате само елементи, които са в един и същ клас или се намират на едно и също хранилище. Изберете поднабора елементи, който желаете да редактирате.",
		multi_edit_class_selector_class_heading: "Клас",
		multi_edit_class_selector_entry_template_heading: "Шаблон за запис",
		multi_edit_class_selector_repository_heading: "Хранилище",
		multi_edit_class_selector_items_heading: "Елементи",
		multi_edit_some_classes_not_displayed: "Някои от избраните елементи не са включени в този списък, тъй като елементите съдържат свойства, които са само за четене, или понеже елементите се намират на хранилища, които не поддържат редактирането на свойства.",
		multi_edit_properties_invalid_msg: "Някои от стойностите на свойствата не са валидни за всички избрани елементи.",
		multi_edit_properties_readonly_tooltip_text: "${0}: това свойство е само за четене и не може да се модифицира.",
		multi_edit_append_checkbox_label: "Добавяне",
		multi_edit_append_checkbox_tooltip: "Изберете тази опция, ако желаете да добавите нови стойности за свойства към съществуващите стойности, вместо да ги заменяте.",
		multi_edit_properties_invalid_childcomponent_msg: "Някои стойности в свойството ${0} на дъщерния компонент ${1} са зависими от други свойства и вече не са валидни с изборите, които сте направили. Изчистете стойностите в дъщерния компонент ${1} или индивидуално променете свойствата за елементите, които сте избрали.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Експортиране на свойства",
		export_properties_dialog_info: "Изберете свойствата, които желаете да експортирате, и укажете реда, в който ще бъдат показани.",
		export_properties_dialog_export_button_label: "Експортиране",
		export_properties_dialog_export_raw_values: "Експортиране на необработени стойности",

		/* Properties */
		filter_clear_tooltip: "Изчистване на филтъра",
		properties_new_row: "Нов",
		properties_requiredClass_document_tooltip: "Изберете документ. Документът трябва да принадлежи към класа ${0}.",
		properties_requiredClass_folder_tooltip: "Изберете папка. Папката трябва да принадлежи към класа ${0}.",
		properties_dataType_tooltip: "Тип данни: ${0}",
		properties_maxLength_tooltip: "Максимална дължина: ",
		properties_minLength_tooltip: "Минимална дължина: ",
		properties_minValue_tooltip: "Минимална стойност: ",
		properties_maxValue_tooltip: "Максимална стойност: ",
		properties_format_tooltip: "Формат: ",
		properties_description_tooltip: "Описание: ",

		properties_type_boolean_tooltip: "Булеви",
		properties_type_date_tooltip: "Дата",
		properties_type_time_tooltip: "Час",
		properties_type_timestamp_tooltip: "Времеви маркер",
		properties_type_decimal_tooltip: "Десетична стойност",
		properties_type_double_tooltip: "Число с плаваща запетая",
		properties_type_short_tooltip: "Цяло число",
		properties_type_integer_tooltip: "Цяло число",
		properties_type_long_tooltip: "Цяло число",
		properties_type_string_tooltip: "Текстов низ",
		properties_type_string_alpha_tooltip: "Буквен низ",
		properties_type_string_alphanum_tooltip: "Буквено-цифров низ",
		properties_type_string_ext_tooltip: "Разширен буквено-цифров низ",
		properties_type_string_num_tooltip: "Числов низ",
		properties_type_binary_tooltip: "Двоично число",
		properties_type_object_tooltip: "Обект",
		properties_type_reference_tooltip: "Това свойство препраща към друг елемент в хранилището.",
		properties_type_guid_tooltip: "Глобален уникален идентификатор",
		properties_type_group_tooltip: "Потребители и групи",
		properties_type_user_tooltip: "Потребители",
		properties_type_childComponent_tooltip: "Дъщерен компонент",

		properties_childComponent_minCardinalityOnly_tooltip: "Това свойство трябва да има поне ${0} стойности.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Това свойство не може да има повече от ${0} стойности.",
		properties_childComponent_minMaxCardinality_tooltip: "Това свойство трябва да има поне ${0} стойности и не повече от ${1} стойности.",
		properties_childComponent_noCardinality_tooltip: "Това свойство може да има колкото и да е стойности.",

		properties_type_guid_example_tooltip: ", например {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Изберете стойност от списъка.",
		properties_single_select_choice_tooltip: "Изберете стойност.",
		properties_multiple_select_typein_tooltip: "Въведете една или повече стойности.",
		properties_multiple_select_choice_tooltip: "Изберете една или повече стойности.",
		properties_not_selectable_tooltip: "Категорията не може да бъде избрана.",
		properties_none: "Няма",
		properties_none_tooltip: "Изберете <i>Няма</i>, за да изчистите текущата стойност за това свойство.",
		properties_value_empty: "Няма стойност",
		properties_value_read_only: "Само за четене",
		properties_clear_label: "Изчистване",
		properties_clear_tooltip: "Изчистването на стойността в това поле изчиства стойността в хранилището, след като щракнете върху <b>Запазване</b>.",
		properties_box_custom_properties: "Персонализирани свойства",
		properties_box_metadata_name_in_use: "Този име вече се използва . Въведете друго име за потребителско свойство .",

		properties_templates: "Шаблони",
		properties_add_template: "Добавяне на шаблон",
		properties_remove_template: "Премахване",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Вписване",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Вписване",
		checkin_cancel_label: "Отказ",
		checkin_file_name_label: "Име на файла",
		checkin_document_status_title: "Вписване на документ",
		checkin_document_status_uploading_msg: "Качване на файл...",
		checkin_document_status_checkingin_msg: "Вписване на файл...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Избор на режим за редакция",
		viewer_redaction_new_document_confirmation_question: "Желаете ли да запазите редакцията като нов документ или локален файл?",
		viewer_redaction_new_version_confirmation_question: "Желаете ли да запазите редакцията като нова версия?",
		viewer_redaction_new_version_confirmation_question_never: "Желаете ли да запазите редакцията като ново съдържание?",		
		viewer_redaction_new_document_button: "Да",
		viewer_redaction_new_document_cancel_button: "Не",
		viewer_redaction_add_document_confirmation_question: "Желаете ли да запазите редакцията като нов документ, нова версия или локален файл?",
		viewer_redaction_add_document_confirmation_question_version_never: "Желаете ли да запазите редакцията като нов документ, ново съдържание или локален файл?",
		viewer_redaction_add_document_button: "Нов документ",
		viewer_redaction_add_new_version_button: "Нова версия",
		viewer_redaction_add_new_version_button_version_never: "Ново съдържание",
		viewer_redaction_add_local_file_button: "Локален файл",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Изберете причина за редакция",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Шаблонът за запис, който е използван за добавяне на този документ в хранилището, не може да бъде намерен. Документът ще бъде вписан в хранилището, без да се използва шаблонът за запис.",
		property_entry_template_not_retrieved_warning: "Шаблонът за запис, който е използван за добавяне на този документ в хранилището, не може да бъде намерен. Свойствата на документа ще бъдат показани, без да се използва шаблонът за запис.",
		multi_edit_entry_template_not_found_name: "[Не е намерен]",
		multi_edit_entry_template_not_retrieved_warning: "Шаблонът за запис, който е използван за добавяне на тези елементи в хранилището, не може да бъде намерен. Свойствата на елемента ще бъдат модифицирани, без да се използва шаблон за запис.",
		checkin_major_version_hover: "Номерът на версията на документа ще се увеличи с едно, а състоянието на документа ще се зададе на Публикуван. Ако опцията не е избрана, документът не е готов за публикуване и ще бъде вписан като второстепенна версия.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Документът не може да бъде вписан, тъй като не е изписан.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Идентификаторът или паролата на потребителя не са валидни за сървъра.",
		error_bad_userid_password_userResponse: "Уверете се, че сте въвели правилни идентификатор на потребител и парола.",
		error_bad_userid_password_adminResponse: "Беше върната следната грешка: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Не може да се установи връзка с уеб клиента чрез следния URL адрес: ${0}.",
		http_send_error_explanation: "Тази грешка може да е причинена от проблем с конфигурацията на сървъра за уеб приложения или от проблем с приложението на уеб клиента.",
		http_send_error_userResponse: "Опитайте да влезете отново. Ако проблемът не изчезне, докладвайте за грешката на системния администратор.",
		http_send_error_adminResponse: "Беше върната следната HTTP грешка: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Не може да се установи връзка с уеб клиента чрез следния URL адрес: ${0}.",
		http_error_explanation: "Възможно е да трябва да изпълните удостоверяване в защитна стена или сървърът за уеб приложения може да не работи или да не може да бъде достигнат поради проблеми с мрежата.",
		http_error_userResponse: "Ако трябва да изпълните удостоверяване в защитна стена, направете го и опитайте да влезете отново. Ако проблемът не изчезне, докладвайте за грешката на системния администратор.",
		http_error_adminResponse: "Беше върната следната HTTP грешка: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Не може да се установи връзка с уеб клиента чрез следния URL адрес: ${0}.",
		http_response_bad_explanation: "Тази грешка може да се дължи на проблем с конфигурацията на сървъра за уеб приложения или на проблем с уеб клиента.",
		http_response_bad_userResponse: "Опитайте да влезете отново. Ако проблемът не изчезне, докладвайте за грешката на системния администратор.",
		http_response_bad_adminResponse: "Беше върната следната грешка: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Неозаглавен",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Имейл аплетът не може да бъде стартиран.",
		email_applet_init_failed_explanation: "Този проблем може да възникне, когато имейл клиентът не е правилно инсталиран и конфигуриран или когато на работната станция няма инсталирана поддържана версия на Java Runtime Environment (JRE).",
		email_applet_init_failed_userResponse: "За да отстраните проблема:<ul><li>Уверете се, че имейл приложението е инсталирано и настроено като имейл клиентът по подразбиране на работната станция.</li><li>Проверете дали на работната станция има инсталирана поддържана версия на JRE, като въведете следната команда в командния прозорец: java -version</li></ul><p>Можете да намерите списък с поддържаните версии на JRE в документа <i>Хардуерни и софтуерни изисквания за IBM Content Navigator</i> на сайта за софтуерна поддръжка на IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Имейл приложението не можа да се стартира, тъй като не може да се зареди изискван DLL файл.",
		email_applet_JNI_LOAD_FAILED_explanation: "Изискваният файл WCEmailAppletJNI.dll не може да се зареди, тъй като временната директория на работната станция може да е пълна.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Уверете се, че във временната директория има достатъчно пространство. След това отново опитайте да изпратите документа от уеб клиента. По подразбиране файлът WCEmailAppletJNI.dll се зарежда във временната директория, която е зададена в настройките на уеб браузъра.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Имейл приложението не можа да се стартира, тъй като имейл аплетът не може да създаде временен файл.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Временната директория на работната станция може да е пълна.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Уверете се, че във временната директория има достатъчно пространство. След това отново опитайте да изпратите документа от уеб клиента.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Имейл приложението не можа да се стартира, тъй като имейл аплетът не може да осъществи достъп до временната директория.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Временната директория на работната станция може да е пълна или е възможно да нямате необходимия достъп за записване в нея.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Уверете се, че във временната директория има достатъчно пространство и че разполагате с разрешение за запис в нея. След това отново опитайте да изпратите документа от уеб клиента. Ако проблемът не изчезне, се свържете със системния администратор.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Имейл аплетът не може да изтрие временен файл.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Възможно е друго приложение да използва файлът или той да не съществува на работната станция.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Ако файлът се използва от друго приложение, то трябва да затворите съответното приложение. Ако файлът се намира на локалната файлова система, премахнете следния файл от временната директория на работната станция: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Връзката към документа не може да бъде създадена.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Хранилището върна URL адреса в невалиден формат.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Затворете уеб браузъра, включително всички раздели и сесии, и след това влезте отново. Опитайте отново да изпратите документа от уеб клиента. Ако проблемът не изчезне, се свържете със софтуерната поддръжка на IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Имейл аплетът не може да прикрепи файла към имейл.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Хранилището върна URL адреса към документа в невалиден формат.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Затворете уеб браузъра, включително всички раздели и сесии, и след това влезте отново. Опитайте отново да изпратите документа от уеб клиента. Ако проблемът не изчезне, се свържете със софтуерната поддръжка на IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Прикаченият файл не може да бъде създаден.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Имейл аплетът не може да разчете URL адреса към документа.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Затворете уеб браузъра, включително всички раздели и сесии, и след това влезте отново. Опитайте отново да изпратите документа от уеб клиента. Ако проблемът не изчезне, се свържете със софтуерната поддръжка на IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Документът не може да бъде извлечен от хранилището.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Възможно е сесията Ви да е изтекла, хранилището или сървъра за уеб приложения да не работят или да е възникнал проблем с конфигурацията на уеб клиента.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Влезте в системата и отново се опитайте да изпратите документа по имейл. Ако проблемът не изчезне, помолете системния администратор да провери регистрите за грешки на хранилището.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Ако сте конфигурирали уеб клиента да конвертира AFP документи в друг формат, например PDF, преди да изпратите документите като прикачени файлове трябва да се уверите, че конвертирането е конфигурирано по правилен начин.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Документът не можа да бъде конвертиран в PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Инструментът, който се използва за трансформирането на документи в PDF файлове, не поддържа файловия тип.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Затворете тази страница и опитайте да изпратите документа по имейл, без да го конвертирате в PDF файл.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Имейлът не беше създаден.",
		email_applet_MAPI_USER_ABORT_explanation: "Отворете имейл приложението и се уверете, че то работи правилно. След това отново опитайте да изпратите документа от уеб клиента. Ако проблемът не изчезне, помолете системния администратор да прегледа регистрите за събития на операционната система.",
		email_applet_MAPI_USER_ABORT_userResponse: "Ако възнамерявате да затворите имейл приложението, не е необходимо друго действие. За да изпратите имейла, влезте в имейл приложението и отново опитайте да изпратите документа от уеб клиента.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Имейлът не може да бъде създаден.",
		email_applet_MAPI_FAILURE_explanation: "Възможно е имейл клиентът Ви да не е отворен или да не сте влезли в него.",
		email_applet_MAPI_FAILURE_userResponse: "Отворете имейл приложението и се уверете, че то работи правилно. След това отново опитайте да изпратите документа от уеб клиента. Ако проблемът не изчезне, помолете системния администратор да прегледа регистрите за събития на операционната система.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Имейлът не може да бъде създаден.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Не сте влезли в имейл клиента. Имейл клиентът трябва да е отворен и трябва да сте влезли в него, за да можете да изпратите съобщение от уеб клиента.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Отворете имейл клиента и влезте в него. След това отново опитайте да изпратите документа от уеб клиента.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Имейлът не може да бъде създаден, тъй като временният файл не може да се създаде на работната станция.",
		email_applet_MAPI_DISK_FULL_explanation: "Временната директория на работната станция може да е пълна.",
		email_applet_MAPI_DISK_FULL_userResponse: "Уверете се, че във временната директория има достатъчно пространство. След това отново опитайте да изпратите документа от уеб клиента.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Имейлът не може да бъде създаден, тъй като няма достатъчно системна памет.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Възможно е да сте отворили прекалено много приложения.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Затворете приложенията, които не използвате, след което отново опитайте да изпратите документа от уеб клиента.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Достъпът до MAPI е отказан.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Възможно е достъпът до програмния интерфейс за съобщения (MAPI) да не е активиран или да не се поддържа за имейл приложението. MAPI е протоколът за съобщения, който се използва, за да се позволи комуникацията между уеб клиента и имейл приложението.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Свържете се с Вашия системен администратор.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Уверете се, че имейл приложението има достъп до MAPI и че е конфигурирано правилно. Ако проблемът не изчезне, се свържете със софтуерната поддръжка на IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Прикаченият файл или връзката към елемента не могат да бъдат създадени.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Възможно е да сте отворили прекалено много сесии на уеб браузъра.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Затворете сесиите на уеб браузъра, които не използвате. След това отново опитайте да изпратите документа от уеб клиента. Ако проблемът не изчезне, се свържете със системния администратор.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Имейлът не може да бъде изпратен.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Възможно е да се опитвате да изпратите прекалено много прикачени файлове.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Изберете по-малко файлове. След това отново опитайте да изпратите документите от уеб клиента.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Имейлът не може да бъде изпратен.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Възможно е да се опитвате да изпратите имейл до прекалено много получатели.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Изпратете имейл до по-малко получатели.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Прикаченият файл не може да бъде създаден.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Възможно е някои необходими временни файлове да са били изтрити, преди прикаченият файл да може да бъде създаден. Тази грешка може да възникне, ако кешът на браузъра бъде изчистен преди изпращането на имейла.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Прикаченият файл не може да бъде създаден.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Възможно е някои необходими временни файлове да са били изтрити, преди прикаченият файл да може да бъде създаден. Тази грешка може да възникне, ако кешът на браузъра бъде изчистен преди изпращането на имейла.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Прикаченият файл не може да бъде създаден от имейл приложението.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Имейлът не може да бъде изпратен до указания получател.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Възможно е получателят да не съществува в адресната книга.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Проверете името на получателя и отново опитайте да изпратите документа.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Имейлът не може да бъде изпратен до указания получател.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Възможно е имейл адресът да е форматиран неправилно.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Уверете се, че сте въвели валиден имейл адрес, и отново опитайте да изпратите документа.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Имейлът не може да бъде изпратен.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Възможно е имейлът да е прекалено дълъг.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Съкратете текста на имейла и се опитайте да го изпратите отново.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Имейлът не може да бъде създаден.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Възможно е имейл клиентът да се е сринал при опита за създаване на имейла.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Рестартирайте имейл клиента и отново опитайте да изпратите документа от уеб клиента.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Възможно е имейлът да не е съставен правилно.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Имейлът не може да бъде изпратен до указания получател.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Възможно е имейл адресът да е форматиран неправилно.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Уверете се, че сте въвели валиден имейл адрес, и отново изпратете документа.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Имейл клиентът не може да изпълни заявеното действие.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Имейл приложението върна неочаквана грешка.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Опитайте отново да изпратите документа от уеб клиента.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "За едно от свойствата липсва задължителният брой стойности.",
		error_property_cardinality_explanation: "Някои свойства имат минимален и максимален брой стойности.",
		error_property_cardinality_userResponse: "Използвайте помощта при посочване, за да определите кое свойство изисква минимален брой стойности. След това задайте минималния брой стойности и опитайте отново.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Изисква се име на файла.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Посочете име на файла и опитайте отново.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Плъгин ${0} съдържа грешки.",
		plugin_error_explanation: "Възникна грешка при оценяването на JavaScript за плъгин ${0}. Ако продължите да използвате уеб клиента, е възможно да се натъкнете на допълнителни грешки.",
		plugin_error_userResponse: "Свържете се с Вашия системен администратор.",
		plugin_error_adminResponse: "Възникна проблем с плъгина, който трябва да бъде отстранен от нейния доставчик. Препоръчва се да премахнете плъгина от конфигурацията на уеб клиента, докато проблемът с нея не бъде разрешен.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Шаблонът за запис не може да бъде отворен.",
		open_old_format_entry_template_error_explanation: "Шаблонът за запис използва по-стар формат, който не се поддържа в уеб клиента.",
		open_old_format_entry_template_error_userResponse: "Помолете системния администратор да актуализира шаблона за запис.",
		open_old_format_entry_template_error_adminResponse: "Използвайте Application Engine или Workplace XT Entry Template Designer, за да запазите актуализирана версия на шаблона за запис.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Шаблонът за запис не може да бъде отворен.",
		open_custom_object_entry_template_error_explanation: "Уеб клиентът не поддържа следните типове шаблони за запис: шаблони за запис за персонализирани обекти.",
		open_custom_object_entry_template_error_userResponse: "Отворете различен шаблон за запис.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Обектът за електронни формуляри не може да бъде отворен.",
		open_forms_object_error_explanation: "Уеб клиентът не поддържа следните типове обекти за електронни формуляри: шаблони за формуляри, данни за формуляри, политики за документи и политики за работни процеси.",
		open_forms_object_error_userResponse: "Отворете различен документ.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Не можете да използвате шаблона за запис ${0}.",
		entry_template_folder_restricted_error_explanation: "Шаблонът за запис добавя елементи в папката ${1}, а Вие нямате необходимите позволения за добавяне на елементи в тази папка.",
		entry_template_folder_restricted_error_userResponse: "Изберете различен шаблон за запис или помолете системния администратор да Ви даде необходимите позволения, за да можете да добавяте елементи в папката ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Шаблонът за запис не може да бъде отворен.",
		open_records_entry_template_error_explanation: "Уеб клиентът не поддържа следните типове шаблони за запис: шаблони за запис за деклариране като запис.",
		open_records_entry_template_error_userResponse: "Отворете различен шаблон за запис.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Работният процес не може да бъде отворен.",
		open_workflow_error_explanation: "Уеб клиентът не поддържа отварянето на работни процеси.",
		open_workflow_error_userResponse: "Отворете различен документ.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Документът не може да бъде отворен.",
		viewer_unable_to_view_error_explanation: "Не е конфигуриран визуализатор за документи от този тип или конфигурираният визуализатор не е съвместим с Вашата система.",
		viewer_unable_to_view_error_userResponse: "Накарайте Вашия системен администратор да конфигурира визуализатор за документи от този тип и се уверете, че конфигурираният визуализатор работи с потребителската система.",
		viewer_unable_to_view_error_adminResponse: "Използвайте инструмента за администриране, за да конфигурирате визуализатор за този тип документи.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Търсенето не може да бъде отворено.",
		search_cannot_open_error_explanation: "Функцията за търсене не е конфигурирана за този работен плот.",
		search_cannot_open_error_userResponse: "Попитайте системния администратор дали имате достъп до работен плот, който включва функцията за търсене, или дали този работен плот може да се актуализира по такъв начин, че да я включва.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Документът не беше зареден.",
		viewer_document_load_failed_error_explanation: "Визуализаторът Daeja ViewONE Professional не можа да отвори документа.",
		viewer_document_load_failed_error_userResponse: "За повече информация вижте съобщението за грешка, което се показва във визуализатора.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Документът не може да бъде прегледан.",
		viewer_session_expired_explanation: "Съдържанието на документа не може да бъде извлечено.",
		viewer_session_expired_userResponse: "Опитайте да влезете отново. Ако проблемът не изчезне, е възможно сървърът за приложения да не работи. Помолете системния администратор да провери регистрите за грешки на IBM Content Navigator или да рестартира сървъра.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Документът не може да бъде прегледан.",
		ajaxViewer_getPage_failed_explanation: "Визуализаторът AJAX получи грешен отговор при извличането на съдържанието на страницата. Възможно е сървърът за приложения да не работи.",
		ajaxViewer_getPage_failed_userResponse: "Затворете уеб браузъра и влезте отново. Ако проблемът не изчезне, помолете системния администратор да прегледа регистрите на сървъра за уеб приложения или да рестартира сървъра.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) не беше намерена на работната станция.",
		viewer_java_plugin_not_found_explanation: "Плъгинът не е бил намерен или правилната версия на JRE не е инсталирана.",
		viewer_java_plugin_not_found_userResponse: "Проверете дали JRE е инсталирана. Например въведете следната команда в командния прозорец: Java -version. Ако JRE не е инсталирана или е инсталирана с погрешно ниво на версия, инсталирайте необходимата версия на JRE. Можете да намерите списък с поддържаните версии в документа <i>Хардуерни и софтуерни изисквания за IBM Content Navigator</i> на сайта за софтуерна поддръжка на IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Документът не може да бъде показан в уеб браузъра.",
		viewer_pdf_plugin_not_found_explanation: "Плъгинът, който се използва за показване на PDF документи в уеб браузъра, не беше намерен.",
		viewer_pdf_plugin_not_found_userResponse: "PDF файлът ще бъде изтеглен на работната станция, вместо да се покаже в прозореца на визуализатора.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Следният елемент не може да бъде добавен в хранилището: ${0}.",
		add_document_single_item_error_explanation: "Тази грешка може да възникне поради една от следните причини:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Опитвате се да добавите документ, който е бил преместен или изтрит.</li>" + "<li>Опитвате се да добавите документ, който е бил преименуван.</li>" + "<li>Опитвате се да добавите документ, който е повреден.</li>" + "<li>Опитвате се да добавите документ, който е отворен в друго приложение.</li>" + "<li>Опитвате се да добавите папка в хранилището.</li>" + "<li>Нямате необходимите позволения на операционната система за достъп до документа.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Изпълнете необходимото действие, за да отстраните проблема:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ако документът е бил преместен или преименуван, го намерете на файловата система и отново опитайте да го добавите.</li>" + "<li>Ако документът е отворен в други приложения, ги затворете и отново опитайте да го добавите.</li>" + "</ul>" + "<br>Не можете да добавяте папки в хранилището.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Следните ${0} елемента не могат да бъдат добавени в хранилището: ${1}",
		add_document_multiple_items_error_explanation: "Има проблем с един или повече от елементите, който пречи на тяхното добавяне в хранилището. Тази грешка може да възникне поради една от следните причини:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Опитвате се да добавите документ, който е бил преместен или изтрит.</li>" + "<li>Опитвате се да добавите документ, който е бил преименуван.</li>" + "<li>Опитвате се да добавите документ, който е повреден.</li>" + "<li>Опитвате се да добавите документ, който е отворен в друго приложение.</li>" + "<li>Опитвате се да добавите папка в хранилището.</li>" + "<li>Нямате необходимите позволения на операционната система за достъп до документа.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Изпълнете необходимото действие, за да отстраните проблема:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ако документът е бил преместен или преименуван, го намерете на файловата система и отново опитайте да добавите елементите.</li>" + "<li>Ако документът е отворен в друго приложение, го затворете и отново опитайте да добавите елементите.</li>" + "<li>Ако документът е бил изтрит или е повреден, отменете избора на елемента и отново опитайте да добавите останалите елементи.</li>" + "</ul>" + "<br>Не можете да добавяте папки в хранилището.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Не можете да плъзгате и пускате елементи от това местоположение.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Обектът за електронни формуляри не може да бъде отворен.",
		open_forms_work_object_error_explanation: "Уеб клиентът не поддържа следните типове обекти за електронни формуляри: политики за работен поток.",
		open_forms_work_object_error_userResponse: "Отворете различен документ.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Документът не може да бъде отворен.",
		viewer_privilege_to_view_error_explanation: "Нямате необходимите позволения за преглед на документа.",
		viewer_privilege_to_view_error_userResponse: "Помолете собственика на документа или системния администратор да Ви дадат необходимите позволения за преглед на документа.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Елементите не могат да бъдат добавени в хранилището.",
		add_document_too_many_items_error_explanation: "Можете да добавяте до ${0} елемента едновременно. Опитвате се да добавите ${1} елемента.",
		add_document_too_many_items_error_userResponse: "Премахнете някои от елементите от списъка и опитайте отново да добавите елементите. Можете също да се свържете с Вашия системен администратор, за да увеличи максималния брой документи, които могат да се добавят едновременно към този работен плот.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Не може да се установи връзка с уеб клиента чрез следния URL адрес: ${0}.",
		http_ltpa_expired_explanation: "LTPA ключът, който е асоцииран със сесията на браузъра, е изтекъл.",
		http_ltpa_expired_userResponse: "Рестартирайте уеб браузъра и опитайте да влезете отново. Ако проблемът не изчезне, докладвайте за следната грешка на системния администратор: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Документът не може да бъде добавен в папката ${0}.",
		dnd_no_privilege_error_explanation: "Разрешенията за папката не позволяват в нея да се добавят документи.",
		dnd_no_privilege_error_userResponse: "Добавете документа в различна папка.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Елементите не могат да бъдат модифицирани.",
		modify_document_too_many_items_error_explanation: "Можете да модифицирате до ${0} елемента едновременно. Опитвате се да модифицирате ${1} елемента.",
		modify_document_too_many_items_error_userResponse: "Изберете по-малко елементи и отново се опитайте да ги модифицирате. Можете също да се свържете с Вашия системен администратор, за да увеличи максималния брой документи, които могат да се модифицират едновременно от този работен плот.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Не можете да използвате класа ${0}.",
		add_document_multiple_unique_values_error_explanation: "Класът ${0} съдържа едно или повече свойства, които изискват уникална стойност за всеки документ. Когато добавяте множество документи, всички те използват едни и същи стойности.",
		add_document_multiple_unique_values_error_userResponse: "Изберете различни документи или ги добавете поотделно.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Не можете да използвате шаблона за запис ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Шаблонът за запис ${0} изисква да добавите документи в класа ${1}. Класът ${1} съдържа едно или повече свойства, които изискват уникална стойност за всеки документ. Когато добавяте множество документи, всички те използват едни и същи стойности.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Изберете различен шаблон за запис или добавете документите поотделно.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Не можете да използвате шаблона за запис ${0}.",
		entry_template_class_restricted_error_explanation: "Шаблонът за запис добавя елементи чрез класа ${1}, Вие нямате необходимите позволения за добавяне на елементи чрез този клас.",
		entry_template_class_restricted_error_userResponse: "Изберете различен шаблон за запис или помолете системния администратор да Ви даде необходимите позволения, за да можете да добавяте елементи чрез класа ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Работният елемент не може да бъде повторно възложен на друг потребител.",
		process_reassign_error_explanation: "Това действие е забранено от работния поток.",
		process_reassign_error_userResponse: "Можете да отворите работния елемент и да изпълните текущата стъпка в него.  За повече информация относно този проблем помолете собственика на елемента да провери дали елементът може да бъде превъзложен.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Следното персонализирано действие не може да бъде заредено: ${0}.",
		customaction_loadurl_error_explanation: "Потребителско действие не се намира в достъпно местоположение. Текущият URL адрес на персонализираното действие е ${1}.",
		customaction_loadurl_error_userResponse: "Помолете администратора да премести персонализираното действие на достъпно местоположение.",
		customaction_loadurl_error_adminResponse: "JSP файлът, който определя персонализираните действия, трябва да се предостави като част от уеб приложението eClient или уеб приложението IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Следната функция не може да бъде намерена: ${0}.",
		feature_invalid_explanation: "Този проблем може да възникне, ако функцията не е достъпна на указания работен плот или ако нейното име е изписано погрешно.",
		feature_invalid_userResponse: "Когато щракнете върху OK, ще бъдете пренасочени към функцията по подразбиране за този работен плот. Свържете се с Вашия системен администратор, за да докладвате за този проблем.",
		feature_invalid_adminResponse: "Ако функцията трябва да бъде достъпна на работния плот, актуализирайте конфигурацията му в инструмента за администриране. Ако функцията не трябва да бъде включена в работния плот или е изписана погрешно, се обърнете към разработчика на приложението, който е създал URL адреса към функцията, за да актуализира адреса.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Търсенето ${0} не може да бъде отворено.",
		search_unsupportedTeamspaceSearch_error_explanation: "Трябва да сте в екипно пространство, за да отворите това търсене.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Изберете друго търсене.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Следният файл не може да бъде импортиран: ${0}.",
		wrong_import_file_type_error_explanation: "Файлът трябва да е файл със свойства.",
		wrong_import_file_type_error_userResponse: "Изберете файла със свойства, който сте експортирали от инструмента за администриране.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Хранилището ${0} не можа да бъде намерено на работния плот ${1}.",
		browse_repository_not_found_error_explanation: "Хранилището трябва да бъде налично на работния плот и да е активирано за функцията за преглеждане, когато е посочено в URL параметър.",
		browse_repository_not_found_error_userResponse: "Уверете се, че идентификаторът на хранилището, който е указан в URL адреса, е правилен, че хранилището е добавено към работния плот ${1} и че функцията за преглед е активирана за хранилището.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Хранилището ${0} не е активирано за функцията за преглед в работния плот ${1}.",
		browse_repository_not_enabled_error_explanation: "Хранилището трябва да бъде активирано за функцията за преглед, когато е посочено в URL параметър.",
		browse_repository_not_enabled_error_userResponse: "Активирайте функцията за преглед за хранилището ${0} в работния плот ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Търсенето не може да бъде изпълнено, тъй като връзката включва невалидни критерии.",
		invalid_xt_stored_search_criteria_error_explanation: "Следната стойност не е валидна: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Помолете системния администратор да предостави актуализирана връзка.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Редактирайте съответната двойка от име и стойност в URL адреса. Ако не знаете кои стойности са валидни за свойството, отворете съхраненото търсене в конструктора за търсения FileNet Workplace XT, за да определите валидна стойност.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Търсенето в множество хранилища не може да бъде отворено.",
		unified_search_invalid_fixed_value_error_explanation: "Търсенето в множество хранилища включва невалидни критерии. Този проблем може да възникне, когато даден критерий има фиксирана стойност, която не е съвместима с другите свойства в едно съпоставяне. Например този проблем може да възникне, ако фиксираната стойност е низ, но другите свойства в съпоставянето са цели числа.",
		unified_search_invalid_fixed_value_error_userResponse: "Ако имате необходимите позволения за редактиране на търсенето, премахнете невалидните критерии и отново запазете търсенето. Ако нямате подходящите позволения за редактиране на търсенето, поискайте от собственика на търсенето или от системния си администратор да запази отново търсенето.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Вашата заявка не може да бъде изпълнена.",
		launch_action_invalid_json_error_explanation: "Данните, които бяха предадени на уеб клиента, не са валидни.",
		launch_action_invalid_json_error_userResponse: "Кажете на системния администратор какво приложение сте използвали по време на възникването на проблема.",
		launch_action_invalid_json_error_adminResponse: "Клиентското приложение не изпрати валиден JSON обект към уеб клиента. За допълнителна помощ се свържете със софтуерната поддръжка на IBM.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Вашата заявка не може да бъде изпълнена.",
		launch_action_not_found_error_explanation: "Действието ${0} не е конфигурирано за менютата на работния плот ${1}.",
		launch_action_not_found_error_userResponse: "Помолете системния администратор да конфигурира работния плот ${1} за използване на меню, което съдържа действието ${0}, или да Ви прехвърли към работен плот, който включва действието ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Вашата заявка не може да бъде изпълнена.",
		launch_action_repository_not_found_error_explanation: "Хранилището ${0} не е асоциирано с работния плот ${1}.",
		launch_action_repository_not_found_error_userResponse: "Помолете системния администратор да асоциира хранилището ${0} с работния плот ${1} или да Ви прехвърли към работен плот, който включва хранилището ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Екипното пространство не може да бъде отворено.",
		teamspace_cannot_open_error_explanation: "Функцията за екипно пространство не е конфигурирана за този работен плот.",
		teamspace_cannot_open_error_userResponse: "Помолете системния администратор дали може да Ви предостави достъп до работен плот, който включва функцията за екипно пространство, или дали настоящият работен плот може да се актуализира, за да включва тази функция.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Възникна грешка при вписване на редактираното съдържание.",
		viewer_redaction_checkin_failed_explanation: "Четецът получи отговор с грешка, докато вписваше редактираното съдържание.",
		viewer_redaction_checkin_failed_userResponse: "Помолете системния администратор да прегледа журналните файлове на сървъра за уеб приложения.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Не можете да добавите документи към това хранилище.",
		add_document_odserver_odwek_version_od_error_explanation: "Текущата версия на сървъра IBM Content Manager OnDemand или ODWEK не е на минимално изискваното ниво, за да поддържа добавянето на документи в хранилището Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Накарайте Вашия администратор да провери кои версии на Content Manager OnDemand Server и ODWEK се изискват за поддържане на добавяне на документ в хранилищата Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Елементите не могат да бъдат добавени в хранилището.",
		add_document_too_many_items_od_error_explanation: "За хранилища IBM Content Manager OnDemand можете да добавяте само по един елемент в даден момент.",
		add_document_too_many_items_od_error_userResponse: "Премахнете някои от елементите от Вашия списък и опитайте да добавите елементите отново един по един.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Елементът не може да бъде добавен към хранилището.",
		add_document_filesize_empty_od_error_explanation: "Не можете да добавяте празни файлове в хранилище IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Добавете съдържане във файла и опитайте да добавите файла отново или добавете друг елемент.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Търсенето в множество хранилища не може да бъде отворено.",
		unified_search_repository_not_found_error_explanation: "Търсенето измежду хранилища включва едно или повече невалидни хранилища. Този проблем може да възникне, когато хранилищата, които са включени в търсенето, са изтрити от приложението или са премахнати от текущия работен плот.",
		unified_search_repository_not_found_error_userResponse: "Ако имате подходящите позволения за редактиране на търсенето, запазете го отново. Когато запазвате търсенето, уеб клиентът премахва невалидните хранилища от него. Ако нямате подходящите позволения за редактиране на търсенето, поискайте от собственика на търсенето или от системния си администратор да запази отново търсенето.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Не може да се създаде нов документ.",
		edit_document_using_office_online_error: "Документът не може да бъде отворен.",
		edit_document_using_office_online_error_explanation: "URL адресът на Microsoft Office Online Server не е конфигуриран.",
		edit_document_using_office_online_error_userResponse: "Преди да можете да използвате Office Online, Вашият администратор трябва първо да активира Office Online Server в хранилище и да укаже URL адрес на Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Документът не може да бъде отворен в Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Помолете вашия администратор да актуализира MS Office Online Server Integration.<br><br> Ако потребителят трябва да осъществи достъп до този документ от Microsoft Office Online, отидете на страницата Edit Integration за хранилището и обновете MS Office Online Server Integration, за да включите класа в списъка класове за модифициране на онлайн офис поддръжката. ",		
		browser_not_support_this_viewer: "Конфигурираният визуализатор не е съвместим с вашия браузър.",
		browser_not_support_this_viewer_explanation: "${0} не се поддържа от браузъра.",
		browser_not_support_this_viewer_userResponse: "Използвайте друг визуализатор, за да отворите документа. Можете да намерите списък с поддържаните версии в документа <i>Хардуерни и софтуерни изисквания за IBM Content Navigator</i> на сайта за софтуерна поддръжка на IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Информация за работен поток",
		process_information_info_text: "Избраният елемент в момента се изпълнява в следните работни процеси.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Равно",
		operator_NOTEQUAL: "Не е равно",
		operator_LIKE: "Подобно",
		operator_STARTSWITH: "Започва с",
		operator_ENDSWITH: "Свършва с",
		operator_NOTLIKE: "Не е подобно",
		operator_NULL: "Празно",
		operator_NOTNULL: "Не е празно",
		operator_LESS: "По-малко от",
		operator_LESSOREQUAL: "По-малко или равно",
		operator_GREATER: "По-голямо от",
		operator_GREATEROREQUAL: "По-голямо или равно",
		operator_BETWEEN: "Между",
		operator_NOTBETWEEN: "Не е между",
		operator_IN: "Включване на всички",
		operator_INANY: "Включване на които и да е",
		operator_NOTIN: "Изключване на всички",
		operator_CONTAINS: "Съдържа",

		/* SearchForm widget */
		search_button_tooltip: "Търсене на документи, които съответстват на критериите.",
		reset_button_tooltip: "Нулира търсенето до стойностите по подразбиране, които са зададени от администратора.",
		clear_button_tooltip: "Премахва всички стойности, които сте въвели за търсенето.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Избор на търсене",
		append_to_search: "Добавяне към търсене",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Ново търсене",
		new_unified_search: "Ново търсене в множество хранилища",
		searh_name_contains: "Името на търсене съдържа",
		keep_search_criteria_expanded: "Дръж критериите за търсене отворени",
		showing_results: "Показване на резултатите за:",
		open_in_new_window: "Отваряне в нов прозорец",
		open_in_new_tab: "Отваряне в нов раздел",
		close_tab: "Затваряне на раздела",
		add_repository: "Добавяне на хранилище",
		edit_repository: "Редактиране на хранилище",
		remove_repository: "Премахване",
		search_scope: "Обхват на търсене",
		search_class_template: "Клас",
		object_type_version: "Тип и версия на обект",
		not_applicable: "Не е приложимо",
		unified_search_including_subfolders: " (включително и подпапки)",
		unified_search_dialog_intro_text: "Изберете хранилището и търсенето или класовете, които желаете да включите в търсенето.",
		unified_search_class_or_template: "Клас или Шаблон",

		select_object_fieldset_legend: "Как желаете да намирате елементите за прикачване:",
		select_object_create_new_search: "Ново търсене",
		select_object_search_template: "Съществуващо търсене",

		search_criteria: "Критерии за търсене:",
		search_criteria_no_colon: "Критерии за търсене",
		search_in_multiple: "Търсене в (${0}):",
		search_location_including_subfolders: "${0} включително подпапки",
		search_class: "Клас:",
		search_class_multiple: "Клас (${0}):",
		search_class_including_subclasses: "${0} включително подкласове",
		search_class_all_pseudo: "Всички",
		search_results: "Резултати от търсене",
		select_operator: "Изберете оператор",
		ending_value: "Крайната стойност за свойството ${0} е:",
		search_options: "Опции за търсене:",
		search_version: "Версия:",
		search_released_version: "Публикувана версия",
		search_current_version: "Текуща версия",
		search_all_versions: "Всички версии",
		search_file_type_filter: "Филтър за тип на файл:",
		search_one_file_type: "1 файлов тип",
		search_many_file_types: "${0} типове файлове",
		search_action_filter: "Филтър за действия:",
		search_action_filter_hover_help: "Стеснете резултатите, за да включите само файлове, за които потребителите са предприели конкретно действие.<br/>Например можете да търсите само документи, които сте добавили на 20 септември 2012 г.",
		search_action_filter_enabled: "Филтърът за действия е активиран",
		search_enable: "Активиране",
		search_disable: "Деактивиране",
		search_by: "от",
		search_added: "Добавено",
		search_modified: "Модифицирано",
		search_checked_out: "Изписано",
		search_date_operator_on: "Вкл.",
		search_date_operator_not_on: "Не на",
		search_date_operator_before: "Преди",
		search_date_operator_after: "След",
		search_version_hover_help_p8: "Има достъпна за всички потребители публикувана версия. Ако документът е в текуща версия, това означава, че той се редактира от един или повече потребители.",
		search_version_hover_help_cm: "Текущата версия е най-новата версия на елемента.",
		search_using: "Търсене на елементи, които съответстват на:",
		search_property_and_text_criteria: "Стойностите на свойствата и текстовите критерии",
		search_property_or_text_criteria: "Стойностите на свойствата или текстовите критерии",
		search_property_and_text: "Критериите за свойства и текстовите критерии",
		search_property_or_text: "Критериите за свойства или текстовите критерии",
		search_property_options: "Опции за свойства:",
		search_property_option_match_all: "Всички свойства",
		search_property_option_match_any: "Което и да е свойство",
		search_property_option_match_all_summary: "Съответствие на всички",
		search_property_option_match_any_summary: "Съответствие на което и да е",
		search_total_count_type_total: "Общо",
		search_total_count_type_atleast: "Поне",
		search_content_size_filter: "Филтър за размер на съдържанието:",
		search_content_size_filter_any: "Какъвто и да е размер на съдържанието",

		/* Search work options */
		search_work_filter: "Филтър за работни елементи:",
		search_work_filter_hover_help: "Стеснете резултатите, за да включите само елементи, които са в работен поток. Например можете да стесните резултатите, за да включите само работни елементи, които са активни.<br /><br />Тази опция не се прилага, ако желаете да виждате всички версии на елементите, които са върнати от търсенето.",
		search_work_filter_enabled: "Филтърът за работни елементи е активиран",
		search_work_filter_status: "Състояние:",
		search_work_filter_step: "Стъпка:",
		search_work_filter_owner: "Собственик:",
		search_work_filter_status_all: "Всички елементи",
		search_work_filter_status_active: "Активни елементи",
		search_work_filter_status_suspended: "Преустановени елементи",
		search_work_filter_process_all: "Всички работни процеси",
		search_work_filter_step_all: "Всички стъпки",
		search_work_filter_owner_all: "Всички потребители",
		search_work_filter_step_error: "Името на стъпката не съществува.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Търсенето не може да бъде изпълнено без допълнителна информация. Въведете стойност за поне едно условие.",
		search_insufficient_input_box: "Търсенето не може да бъде изпълнено без допълнителна информация. Въведете критерии за търсене на текст или изберете шаблон за мета данни.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Търсенето не може да бъде конфигурирано да се изпълнява, когато е отворено без допълнителна информация. Въведете стойност за поне едно условие.",
		search_member_required: "За да споделите това търсене с конкретни потребители и групи, изберете поне един потребител или група, с когото/която да споделите търсенето.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Желаете ли да затворите, без да запазите Вашите промени?",
		search_prompt_close_all_without_save: "Желаете ли да затворите всички раздели, без да запазите промените?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Един от следните типове критерии за търсене не е валиден за това хранилище: ${0}. За да извършите търсенето в уеб клиента, невалидният критерий трябва да бъде отстранен. Ако запазите търсенето, невалидните критерии ще бъдат премахнати. Ако не желаете да промените търсенето, го затворете.",
		search_invalid_repository: "Едно или повече хранилища",
		search_invalid_class: "Един или повече класове",
		search_invalid_folder: "Една или повече папки",
		search_invalid_file_type: "Един или повече типове файлове",
		search_invalid_property: "Едно или повече свойства",
		search_invalid_text_search: "Текстови критерии за търсене",
		search_invalid_work: "Критерии за филтър за работни елементи",

		search_operator_pulldown_missing: "Изисква се оператор. Изберете оператор от падащото меню. Ако не виждате никакви оператори, помолете системния администратор да провери раздела <b>Търсене</b> в инструмента за администриране, за да прегледа дали операторите не са скрити. Ако става дума за търсене в множество хранилища, е възможно падащото меню да не съдържа оператори, ако свойствата, които са съпоставени едно с друго, нямат общи оператори.",

		/*SearchBuilder */
		open_search_builder: "Ново търсене",
		document_type: "Клас",
		show_all_properties: "Показване на всички свойства",
		text_search_label: "Търсене на елементи със следните термини:",
		text_search_place_holder: "Използвайте комбинация от термини и оператори: * ? или \"фрази с точно съвпадение\"",
		text_search_place_holder_box: "Използвайте комбинация от термини и оператори: AND, OR, NOT и \"фрази с точно съвпадение\"",
		text_search_place_holder_cascade_proximity: "Използвайте комбинация от термини и оператори: * or ?",
		text_search_place_holder_common: "Използвайте комбинация от термини и \"фрази с точно съвпадение\"",
		text_search_hover_help_p8: "Използвайте звездичката (*) или въпросителния знак (?) като заместващ символ. Използвайте двойните кавички (\"\") за точни съвпадения.",
		text_search_hover_help_p8_only_crs: "Използвайте звездичката (*) или въпросителния знак (?) като заместващ символ. Използвайте двойните кавички (\"\") за точни съвпадения. Когато зададете няколко термина, търсенето в множество хранилища връща елементи, които съдържат поне един от термините.",
		text_search_hover_help_cm: "Използвайте звездичката (*) или въпросителния знак (?) като заместващ символ. Използвайте двойните кавички (\"\") за точни съвпадения. Използвайте знака минус (-) пред термините за изключване и знака плюс (+) пред термините за включване.",
		text_search_hover_help_box: "Използвайте AND между термините, за да се върне съответствие с всички термини. Използвайте OR между термините, за да се върне съответствие с който и да е от тях. Използвайте двойните кавички (\"\") за точни съвпадения. Напишете пред даден термини NOT, за да го изключите.",
		text_search_hover_help_common: "Използвайте двойните кавички (\"\") за точни съвпадения. Когато зададете няколко термина, търсенето в множество хранилища връща елементи, които съдържат всички термини.",
		text_search_options: "Текстови опции:",
		text_search_options_hover_help: "Ако използвате оператори, различни от заместващите символи, изберете разширени оператори.",
		text_search_option_any: "Който и да е от термините",
		text_search_option_all: "Всички термини",
		text_search_option_proximity: "В близост от думи:",
		text_search_option_none: "Разширени оператори",
		text_search_option_authoring: "Търсене на текст е:",
		text_search_option_authoring_hover_help: "Изберете опция, която определя как желаете да направите критериите за търсене на текст достъпни за потребителите. Ако не желаете да включвате критерии за търсене на текст в търсенето, скрийте опцията. В противен случай, можете да позволите критериите за търсене на текст да бъдат редактирани или изисквани от потребителите или да бъдат направени само за четене за потребителите.",
		text_search_option_hide: "Скриване на критериите",
		text_search_option_hide_hover_help: "Изберете тази опция, ако не желаете да включвате текстови критерии за търсене или да позволявате на други потребители да задават текстови критерии за търсене.",
		text_search_option_in: "В HTML/XML тага ${0}",
		text_search_option_paragraph: "В същия параграф",
		text_search_option_sentence: "В същото изречение",
		text_search_option_vql: "VQL заявка",
		text_search_option_none_hover_help: "Използвайте - пред термините за изключване.",
		text_search_option_cascade_proximity_hover_help: "Ограничава резултатите от търсенето до термините, които присъстват в даден диапазон от думи, които не включват точни фрази.",

		box_search_metadata: "Мета данни:",
		box_search_select_template: "Изберете шаблон",
		box_search_no_templates: "Няма достъпни шаблони",
		box_text_search_options_search_within: "Обхват на търсенето:",
		box_text_search_options_search_within_everything: "Всичко",
		box_text_search_options_search_within_file_content: "Съдържание на документи",
		box_text_search_options_search_within_tags: "Етикети",
		box_text_search_options_limit_to: "Само търсене:",

		add_property: "Добавяне на свойство",
		edit_template: "Редактиране на търсене",
		save_search: "Запазване на търсене",
		search_template_name: "Име:",
		search_template_desc: "Описание:",
		auto_run: "Изпълняване на търсенето при отваряне",
		show_in_tree: "Показване на търсенето в структурата на папките",
		show_in_tree_hover_help: "Ако търсенето е запазено в папка, то по подразбиране се показва само в списъка със съдържание. Ако изберете тази опция, търсенето също така се показва в дървото на папките в изгледа за преглед.  Имайте предвид обаче, че търсенето се показва в дървото на папките само ако го запазите в папка.",
		share_search_with: "Споделяне на търсенето с:",
		remove_member: "Премахване на ${0}",
		ok_button_label: "OK",
		save_template: "Запазване",
		save_template_title: "Ако често трябва да търсите определени елементи, запазете критериите за търсене.",
		remove_criterion: "Премахване",
		apply_button_label: "Прилагане",
		empty_search_results_pane: "Изпълнете търсене, за да видите резултатите.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Цялото хранилище",

		repository_already_selected: "Хранилището ${0} не може да се добави към търсенето в множество хранилища, тъй като вече е включено в него. <br/> Едно хранилище може да се включва в търсенето в множество хранилища само един път. <br/>Изберете различно хранилище, което да включите в търсенето в множество хранилища.",

		repository_limit_reached: "Хранилището ${0} не може да бъде добавено към търсенето измежду хранилища. Можете да добавите максимум ${1} хранилища към търсенето.",

		nomore_criteria_toappend: "Всички от съпоставените свойства вече са включени в критериите за търсене. Не бяха добавени свойства към критериите за търсене.",
		nomore_criteria_toappend_regular: "Всички свойства вече са включени в критериите за търсене. Не бяха добавени свойства към критериите за търсене.",

		/* OD Save Search dialog */
		reload_label: "Презареждане",
		od_save_search_help_text: "Въведете име за търсенето или изберете съществуващо търсене за замяна",
		public_access_label: "Разрешете на останалите да използват това търсене",
		od_delete_search_help_text: "Изберете едно или повече търсения за изтриване",
		delete_save_searches: "Изтрийте запазените търсения",

		/* Unified Search */
		unified_search_enable_text_search: "Включете критерии за търсене на текст",
		unified_search_text_search_enabled: "Търсенето на текст е включено",
		unified_search_mapping: "Съпоставяне",
		unified_search_new_mapping: "Ново съпоставяне",
		unified_search_mapping_name: "Име на съпоставянето",
		unified_search_mapping_dialog_instructions: "Изберете свойствата, които желаете да съпоставите. Някои свойства могат да бъдат съпоставени спрямо свойства с различен тип данни. Можете например да съпоставите свойство на низ спрямо целочислено свойство. Когато съпоставяте едно свойство към друго, те се третират като едно свойство при търсенето в множество хранилища.",
		unified_search_filter_available_properties: "Филтрирайте наличните свойства",
		unified_search_available_properties: "Налични свойства",
		unified_search_mapped_properties: "Съпоставени свойства",
		unified_search_single_values: "единични стойности",
		unified_search_multiple_values: "множество стойности",
		unified_search_add_mapping: "Добавяне на съпоставяне",
		unified_search_warn_remove_repository: "Избраното хранилище се използва в критериите за търсене.\nАко премахнете хранилището, всички съпоставяния и критерии за търсене, които го включват ще бъдат изтрити.\n\nИскате ли да премахнете хранилището?",
		unified_search_warn_update_repository_mappings: "Промяната на избора на свойства за това хранилище се отразява на критериите за търсене.\n\nКритериите за търсене включват едно или повече съпоставяния, които включват едно или повече свойства, които премахвате. Всякакви съпоставяния, които включват свойства, които премахвате, трябва да бъдат изтрити. Всякакви критерии за търсене, които включват тези съпоставяния, трябва да бъдат изтрити, за да извършите търсенето.\n\nИскате ли да актуализирате опциите на хранилището и да изтриете съпоставянията и критериите за търсене?",
		unified_search_warn_update_repository_mappings_reset: "Включването на критерии за търсене на текст за това хранилище ще се отрази на критериите за търсене измежду хранилища.\n\nВсякакви критерии за търсене на свойства, които включват съпоставяне със свойства за това хранилище, трябва да бъдат изчистени, за да извършите търсенето.\n\nИскате ли да актуализирате опциите на хранилището и да изчистите критериите за търсене?",
		unified_search_warn_update_repository_text_criteria: "Премахването на критериите за търсене на текст за това хранилище ще се отрази на критериите за търсене измежду хранилища.\n\nКритериите за търсене на текст трябва да бъдат изтрити от критериите за търсене измежду хранилища, за да извършите търсенето.\n\nИскате ли да актуализирате опцията на хранилището и да изтриете критериите за търсене на текст?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Премахването на критериите за търсене на текст и промяната на избора на свойства за това хранилище ще се отрази на критериите за търсене измежду хранилища.\n\nКритериите за търсене на текст трябва да бъдат изтрити от критериите за търсене измежду хранилища, за да извършите търсенето. Освен това критериите за търсене на свойства включват едно или повече съпоставяния, които включват едно или повече свойства, които премахвате. Всякакви съпоставяния, които включват свойства, които премахвате, трябва да бъдат изтрити. Всякакви критерии за търсене на свойства, които включват тези съпоставяния, трябва да бъдат изтрити, за да извършите търсенето.\n\nИскате ли да актуализирате опциите на хранилището и да изтриете критериите за търсене на текст, съпоставянията и критериите за търсене на свойства?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Изключването на критериите за търсене на текст за това хранилище ще се отразят на критериите за търсене измежду хранилища.\n\nВсякакви критерии за търсене на свойства, които включват съпоставяне със свойства за това хранилище, трябва да бъдат изчистени, за да извършите търсенето. Критериите за търсене на текст може да бъдат изтрити от критериите за търсене измежду хранилища, за да извършите търсенето.\n\nИскате ли да актуализирате опциите на хранилището и да изчистите критериите за търсене?",
		unified_search_warn_remove_mapping: "Премахването на това съпоставяне ще се отрази на критериите за търсене.\n\nКритериите за търсене, които използват съпоставянето, трябва да бъдат изтрити, за да извършите търсенето.\n\nИскате ли да актуализирате съпоставянето и да изтриете критериите за търсене?",
		unified_search_warn_update_mapping: "Промените на това съпоставяне ще се отразят на критериите за търсене.\n\nКритериите за търсене, които използват съпоставянето, трябва да бъдат изчистени, за да се осигури това, че търсенето няма да включва невалидни оператори или стойности.\n\nИскате ли да актуализирате съпоставянето и да изчистите критериите за търсене?",
		unified_search_warn_update_mapping_not_searchable: "Промените на това съпоставяне ще се отразят на критериите за търсене.\n\nКогато всички съпоставени свойства са само за показване, не можете да използвате съпоставянето в критериите за търсене. Критериите за търсене, които използват съпоставянето, трябва да бъдат изтрити, за да извършите търсенето.\n\nИскате ли да актуализирате съпоставянето и да изтриете критериите за търсене?",
		unified_search_warn_update_mapping_box_searchable: "Промените на това съпоставяне ще се отразят на критериите за търсене.\n\nКритериите за търсене вече включват това съпоставяне повече от веднъж и ако добавите свойството ${0} от хранилището ${1}, критериите за търсене ще включват свойството ${0} твърде много пъти. Критериите за търсене, които използват съпоставянето, трябва да бъдат изтрити, за да извършите търсенето.\n\nИскате ли да актуализирате съпоставянето и да изтриете критериите за търсене?",
		unified_search_details: "Подробности за търсене измежду хранилища",
		unified_search_fixed_value_property: "Свойство с фиксирана стойност",
		unified_search_required_property: "Задължително свойство",
		unified_search_display_only_property: "Свойство само за показване",
		unified_search_missing_required_properities: "Търсенето не може да бъде запазено или извършено.<br/>Следните свойства са задължителни свойства:${0}Трябва да включите свойствата в съпоставяне и да добавите свойствата със стойности към критериите за търсене.",
		unified_search_property_repostory: "${0} (Хранилище: ${1})",
		unified_search_builder_no_mappings: "Търсенето не може да бъде извършено.<br/>Трябва да създадете съпоставяне на свойство и да го включите в <b>Показване на резултати</b>, за да може търсенето да покаже резултатите Ви.",
		unified_search_builder_insufficient_criteria_to_run: "Търсенето не може да бъде извършено.<br/>Критериите за търсене не включват критерии за търсене на текст или стойности на свойства за следните хранилища:${0}За всяко включено в търсенето хранилище трябва или да въведете критерии за търсене на текст, или да създадете съпоставяне на свойство, да го включите в критериите на свойства и да укажете стойност на свойството.",
		unified_search_builder_insufficient_criteria_to_save: "Търсенето не може да бъде запазено.<br/>Търсенето не включва критерии за търсене на следните хранилища:${0}За всяко включено в търсенето хранилище трябва да изпълните една от следните опции:<ol><li>Да създадете съпоставяне на свойство и да го включите в критериите за свойства.</li><li>Да промените хранилището,за да включите критерии за търсене на текст и да създадете съпоставяне на свойство и да го включите в <b>Показване на резултати</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Търсенето не може да бъде извършено.<br/>За всяко включено в търсенето хранилище трябва да укажете поне една стойност на свойство. Можете например да укажете стойности за следните свойства: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Търсенето не може да бъде извършено.<br/>Изискват се критерии за търсене на текст.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Търсенето не може да бъде извършено.<br/>За всяко включено в търсенето хранилище трябва да укажете поне една стойност на свойство или да въведете критерии за търсене на текст. Можете например да укажете стойности за следните свойства: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Търсенето не може да бъде извършено.<br/>Изискват се критерии за търсене на текст. За всяко включено в търсенето хранилище трябва да укажете поне една стойност на свойство или да въведете критерии за търсене на текст. Можете например да укажете стойности за следните свойства: ${0}",
		unified_search_invalid_criteria: "Търсенето съдържа невалидни критерии, които не му позволяват да се изпълни.<br/>Невалидните критерии бяха премахнати. Въпреки това трябва да запазите промените на търсенето, преди да можете да го изпълните. Ако не желаете да запазите промените, затворете търсенето.<br/><br/>Следните елементи бяха премахнати или променени:${0}",
		unified_search_invalid_fixed_values: "Търсенето не може да бъде запазено или извършено.<br/>Следните критерии за търсене имат фиксирани стойности, които не са валидни:${0}Предприемете едно от следните действия, за да решите проблема:<ul><li>Премахнете критериите за търсене, които съдържат невалидни стойности</li><li>Редактирайте съпоставянията, които включват свойството IBM Content Manager OnDemand с фиксираната стойност, за да премахнете свойството.</li><li>Редактирайте съпоставянията, които включват свойството IBM Content Manager OnDemand с фиксираната стойност, за да направите всички свойства съвместими. За повече информация относно това кои стойности могат да бъдат съпоставени, вижте връзката Научете повече във въвеждащия текст в горната част на прозореца за съпоставяне на свойства.</li></ul>",
		unified_search_cannot_add_properties: "Не можете да добавяте свойства към това търсене.<br/>Всичките Ви налични съпоставени свойства вече са в критериите за търсене, а всяко свойство може да бъде добавено към търсенето само по веднъж.",
		unified_search_mapping_not_viewable: "Свойствата на шаблон на Box не могат да се покажат в резултатите от търсенето. Ако желаете да добавите това съпоставяне като колона, трябва да съпоставите поне едно свойство, което не е свойство на шаблон на Box. Например, можете да изберете свойство от друго хранилище.",

		unified_search_returned_more: "Поне едно хранилище надвишава максимално разрешените резултати.",
		unified_search_partial_failure: "Възникна грешка в поне едно хранилище.",
		unified_search_partial_failure_and_returned_more: "Възникна грешка в поне едно хранилище и поне едно хранилище надвиши максимално разрешените резултати.",
		unified_search_see_analysis: "Вижте анализа на резултатите.",
		unified_search_analysis_intro_returned_more: "За всяко хранилище, което е надвишило максимално разрешените резултати, опитайте да прецизирате критериите си за търсене, за да се върнат по-малко резултати. Или можете да извършите търсене в едно хранилище, за да върнете повече резултати от максимално разрешените за търсене измежду хранилища.",
		unified_search_analysis_intro_partial_failure: "Прегледайте информацията за грешка, която беше върната от хранилището или хранилищата. Ако е подходящо, поправете грешките и извършете отново търсене измежду хранилища.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "За всяко хранилище, където е възникнала грешка, опитайте да решите проблема и да извършите търсенето отново.<br/><br/>За всяко хранилище, което е надвишило максимално разрешените резултати, опитайте да прецизирате критериите си за търсене, за да се върнат по-малко резултати. Или можете да извършите търсене в едно хранилище, за да върнете повече резултати от максимално разрешените за търсене измежду хранилища.",
		unified_search_results_found: "Намерени резултати",
		unified_search_maximum_allowed: "Максимално разрешени",
		unified_search_maximum_exceeded: "Максимумът е надвишен",

		unified_search_mapping_rule_box: "Това свойство не може да бъде добавено към съпоставянето.<p>Свойството ${0} от хранилището ${1} вече присъства в друго съпоставяне, а възможни за търсене свойства от това хранилище могат да бъдат включени само в едно съпоставяне на дадено търсене.<br/>Изберете различно свойство за добавяне към съпоставянето.</p>",
		unified_search_mapping_rule_repository: "Свойството не може да бъде добавено към съпоставянето.<br/>Съпоставянето вече включва свойство от хранилището ${0}. Дадено съпоставяне може да включва само едно свойство от дадено хранилище.<br/>Изберете различно хранилище, от което да добавите свойство, или създайте ново съпоставяне за избраното свойство.",
		unified_search_mapping_rule_data_type: "Свойството не може да бъде добавено към съпоставянето.<br/>Свойство ${0} не може да бъде съпоставено към свойство ${1}. Изберете различно свойство за съпоставяне или създайте ново съпоставяне за избраното свойство.<br/>За повече информация относно това кои свойства могат да бъдат съпоставени, вижте връзката Научете повече във въвеждащия текст в горната част на прозореца за съпоставяне на свойства.",
		unified_search_mapping_rule_cardinality: "Свойството не може да бъде добавено към съпоставянето.<br/>Всички свойства в съпоставянето трябва да поддържат или единични стойности, или множествени. Избраното свойство поддържа ${0}, а свойствата в съпоставянето поддържат ${1}.<br/>Изберете различно свойство за добавяне към съпоставянето или създайте ново съпоставяне за избраното свойство.",
		unified_search_mapping_rule_fixed_value: "Свойството не може да бъде добавено към съпоставянето.<br/>Съпоставянето вече включва свойство с фиксирана стойност. Дадено съпоставяне може да включва само едно свойство с фиксирана стойност.<br/>Изберете различно свойство за добавяне към съпоставянето или създайте ново съпоставяне за избраното свойство.",
		unified_search_mapping_rule_child_component: "Свойството не може да бъде добавено към съпоставянето.<br/>Свойство с дъщерен компонент не може да бъде съпоставено към други свойства. Ако желаете да можете да търсите по това свойство, създайте ново съпоставяне за избраното свойство.",
		unified_search_mapping_rule_operator_intersection: "Свойството не може да бъде добавено към съпоставянето.<br/>Всички свойства в съпоставянето трябва да имат един или повече общи оператори. Но свойството ${0} няма никакви оператори, които да са общи с останалите свойства в съпоставянето.<br/>Ако е подходящо, изберете различно свойство. Ако трябва да включите избраното свойство, работете със системния си администратор, за да редактирате операторите, които са свързани със свойството.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Разширени настройки",
		advanced_search_options_intro: "Задаване на опции за разширени критерии.",
		advanced_search_options_editable: "Редактируем",
		advanced_search_options_readonly: "Само за четене",
		advanced_search_options_required: "Изискван",
		advanced_search_options_hidden: "Скрито",
		advanced_search_options_property_editable:"Свойството е:",
		advanced_search_options_operators:"Оператори:",
		advanced_search_options_use_all:"Използване на всички",
		advanced_search_options_use_selected:"Използване на избрани",
		advanced_search_options_operators_filtered: "Филтрирани оператори",
		// Data types in lowercase
		data_type_boolean: "булеви",
		data_type_date: "дата",
		data_type_time: "час",
		data_type_timestamp: "времеви маркер",
		data_type_decimal: "десетична стойност",
		data_type_double: "число с плаваща запетая",
		data_type_short: "цяло число",
		data_type_integer: "цяло число",
		data_type_long: "цяло число",
		data_type_string: "текстов низ",
		data_type_string_alpha: "буквен низ",
		data_type_string_alphanum: "буквено-цифров низ",
		data_type_string_ext: "разширен буквено-цифров низ",
		data_type_string_num: "числов низ",
		data_type_binary: "двоично число",
		data_type_object: "обект",
		data_type_guid: "глобален уникален идентификатор",
		data_type_user: "потребители",
		data_type_child_component: "дъщерен компонент",

		/* Print Dialog */
		print_title: "Отпечатване",
		print_message: "Отпечатва се: ${0}",
		print_print_button: "Отпечатване",
		print_clean_margins_button: "Задаване на всички на 0",
		print_type: "Тип принтер:",
		print_printer_server_options: "Опции за отпечатване на сървър",
		print_printer_properties: "Свойства на принтер",
		print_printer_fax_properties: "Свойства на факс",
		print_printer_name: "име на принтер:",
		print_fax_recipient: "Получател",
		print_fax_sender: "Изпращач",
		print_copies: "Копия:",
		print_local_orientation: "Ориентация",
		print_local_orientation_landscape: "Пейзаж",
		print_local_orientation_portrait: "Портрет",
		print_local_margins: "полета",
		print_local_margins_top: "Горе",
		print_local_margins_bottom: "Долу",
		print_local_margins_left: "Ляво",
		print_local_margins_right: "Дясно",
		print_printer_server: "Сървър",
		print_printer_local: "Локален",
		print_property_class: "Клас:",
		print_property_routing: "Насочване:",
		print_property_pagedef: "Дефин. на страница:",
		print_property_node: "Възел:",
		print_property_writer: "Писател:",
		print_property_formdef: "Дефин. на формуляр:",
		print_property_printerid: "Дест.:",
		print_property_forms: "Формуляри:",
		print_property_faxnotes: "Забележки:",
		print_property_faxcompany: "Компания:",
		print_property_faxnumber: "Номер на факс:",
		print_property_faxname: "Име:",
		print_property_faxsendertelnumber: "Телефонен номер:",
		print_property_faxcoverpage: "Заглавна страница:",
		print_property_faxsubject: "Тема:",
		print_saveoptions: "Запазване на опции за отпечатване",
		print_property_bannerpage: "Използване на страница с банер",
		print_print_with_info_fields: "Отпечатване с полета с информация",
		print_field_from: "От",
		print_field_to: "До",
		print_invalid_value_class: "Валидни знаци са A-Z или 0-9",
		print_invalid_value_pagedef: "Валидни знаци са букви или цифри или знаците @, # или $",
		print_invalid_value_writer: "Валидни знаци са букви или цифри или знаците @, # или $",
		print_invalid_value_formdef: "Валидни знаци са букви или цифри или знаците @, # или $",
		print_invalid_value_forms: "Валидни знаци са букви или цифри или знаците @, # или $",
		print_invalid_value_margin: "Валидни числа са тези между ${0} и ${1}",
		print_status_message: "${0} документа бяха изпратени към принтера ${1}.",

		print_applet_init_error: "Аплетът за отпечатване не може да бъде стартиран.",
		print_applet_init_error_explanation: "Този проблем може да възникне поради следните причини: <br/><br/><ul><li>Java Runtime Environment (JRE) не е инсталирана на работната станция.</li><li>Java плъгинът не е активиран в уеб браузъра.</li><li>Версията на JRE на работната станция не е съвместима с версията на IBM Content Navigator.</li><li>Времето на браузъра изтече в очакване на аплета за отпечатване да стартира.</li></ul>",
		print_applet_init_error_userResponse: "Можете да изпълните следните стъпки, за да разрешите проблема с JRE:<br/><br/><ol><li>Уверете се, че JRE е инсталирана на работната станция.</li><li>Уверете се, че Java плъгинът в активиран в уеб браузъра Ви.</li><li>Уверете се, че версията на JRE на работната станция е съвместима с IBM Content Navigator, и опитайте отново. Можете да намерите списък с поддържаните версии в документа <i>Хардуерни и софтуерни изисквания за IBM Content Navigator</i> на сайта за софтуерна поддръжка на IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Заглавна страница",
		daeja_print_selected_documents_title: "Избрани документи",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Съответствие с всички критерии за търсене",
		match_any_criteria: "Съответствие с който и да е от критериите за търсене",
		include_subfolders_summary: "${0} (включително подпапки)",
		browse_button: "Преглед&hellip;",
		search_for: "Търсене на:",
		object_type_documents: "Документи",
		object_type_folders: "Папки",
		object_type_documents_folders: "Документи и папки",
		object_type_web_links: "Уеб връзки",
		object_type_documents_folders_web_links: "Документи, папки и уеб връзки",

		/* SelectSearchFolderDialog */
		search_in: "Търсене във:",
		include_subfolders: "Включване на подпапки",

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
		locked_item_icon_title: "Заключено от ${0}",
		checked_out_icon_title: "Изписано от ${0}",
		major_minor_version_icon_title: "Големи версии с малки версии",
		suspended_icon_title: "Работният процес е преустановен",
		on_hold_icon_title: "Задържано",
		has_notes_icon_title: "Има забележки",
		record_icon_title: "Декларирано като запис",
		compound_document_icon_title: "Обединен документ",
		validateTemplate_icon_title: "Шаблонът на екипно пространство има нужда от валидиране",
		offlineTemplate_icon_title: "Шаблонът на екипно пространство е офлайн",
		offlineTeamspace_icon_title: "Екипното пространство е офлайн",
		pending_delete_icon_title: "Екипното пространство очаква изтриване",
		delete_error_icon_title: "Екипното пространство не може да бъде изтрито",
		defaultTemplate_icon_title: "Шаблон за екипно пространство по подразбиране",
		teamspace_icon_title: "Екипно пространство",
		teamspace_template_icon_title: "Шаблон за екипно пространство",
		has_bookmark_icon_title: "Има показалец",
		read_only_icon_title: "Само за четене",
		no_results_were_found: "Няма намерени резултати.",
		folder_is_empty: "Папката е празна.",
		no_checked_out_items: "Нямате никакви изписани елементи.",
		inbasket_is_empty: "Входящата кошница е празна.",
		worklist_is_empty: "Работният списък е празен.",
		tracker_milestone_completed: "Завършен",
		stepprocessor_attachments_title: "Съдържание",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Заключване на елементи",
		unlock_items: "Отключване на елементи",
		checkin_item: "Вписване на елемент",

		/* Help */
		learn_more: "Научете повече",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Отваряне на екипно пространство",
		repository_tab_createWorkspace: "Ново екипно пространство",
		repository_tab_createWorkspaceTemplate: "Нов шаблон за екипно пространство",
		repository_tab_DefaultTemplate: "По подразбиране",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Тази задача копира документи.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "нямате привилегии за редактиране за избрания шаблон на екипно пространство.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Сигурни ли сте, че желаете да изтриете екипното пространство ${0}? <br><br>Само документи, които са подадени в други папки в хранилището остават в него. Всички документи, които са били подадени само към екипното пространство ще бъдат изтрити.",
		teamspaceDecommissionLabel: "Изтриване:",
		teamspaceDecommissionDescription: "Изтриването на екипното пространство ще премахне това екипно пространство от сървъра: Укажете как да бъдат решени артефактите на екипното пространство.",
		teamspaceDecommissionOptions: "Опции за изтриване на екипно пространство",
		teamspaceDecommissionDeleteAll: "Изтриване на всички артефакти на екипното пространство",
		teamspaceDecommissionReFileAll: "Повторно подаване на всички артефакти на екипното пространство",
		teamspaceDecommissionReFileDestination: "Преместване във:",
		teamspaceDecommissionReFileIn: "Повторно подаване във",
		teamspaceDecommissionTaskName: "Задача за изтриване на екипно пространство",
		teamspaceDecommissionTaskDescription: "Тази задача изтрива екипното пространство от хранилището.",
		teamspaceDecommissionDeletionStarted: "Екипното пространство е планирано за изтриване",
		teamspaceDecommissionDeletionConnectionFailed: "Задачата за изтриване на екипното пространство не може да бъде изпълнена, защото не може да се свърже с хранилището. Уверете се, че идентификационните данни на администратора на хранилището са правилни.",

		teamspace_edit_properties_notsupported: "Можете да редактирате свойствата на екипните пространства само от изгледа на екипно пространство.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Екипното пространство е офлайн и може да бъде отворено само от собствениците на екипното пространство",

		/* Teamspace Builder widget */
		workspace_validation_document: "Документ:",
		workspace_validation_folder: "Папка:",
		workspace_validation_ets: "Следните шаблони за запис не са налични в това хранилище и бяха премахнати от списъка с избрани шаблони за запис:",
		workspace_validation_classes: "Следните класове не са налични в това хранилище и бяха премахнати от списъка с избрани класове:",
		workspace_validation_searches: "Следните търсения не са налични в това хранилище и бяха премахнати от списъка с избрани търсения:",
		workspace_validation_docs_folders: "Следните документи и папки класове не са налични в това хранилище и бяха премахнати от списъка с включени елементи:",
		workspace_change_template_confirmation_question: "Ако изберете различен шаблон, всичките Ви промени ще бъдат загубени. Желаете ли да продължите?\n",
		workspace_delete_item_confirmation_question: "Желаете ли да премахнете елемента ${0}?\n",
		workspace_delete_role_confirmation_question: "Желаете ли да премахнете ролята ${0}?\n",
		workspace_delete_confirmation_question: "Ако изтриете екипно пространство, се изтрива само съдържателят на екипното пространство. Папките и документите в екипното пространство остават в хранилището и можете да ги намерите чрез извършване на търсене. За да изтриете съдържанието на екипното пространство, първо изтрийте елементите в екипното пространство и след това самото екипно пространство.<br><br>Желаете ли да изтриете екипното пространство ${0}?",
		workspacebuilder_instance_template_name_header: "Има на шаблон на екипно пространство",
		workspacebuilder_instance_template_description_header: "Описание",

		workspacebuilder_template_tooltip_name: "Името на шаблона не може да съдържа никой от следните знаци: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Името на екипното пространство не може да съдържа никой от следните знаци: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Предоставете описание, което ще позволи на потребителите да направят правилната селекция от списъка с шаблони. Можете например да включите информация относно предназначените потребители или да използвате шаблона.",
		workspacebuilder_instance_tooltip_description: "Предоставете описание, което ще позволи на потребителите да направят разлика между това екипно пространство и други екипни пространства.",

		workspacebuilder_template_edit_properties_pane: "Редактиране на шаблон на екипно пространство",
		workspacebuilder_instance_properties_pane: "Определяне на екипно пространство",
		workspacebuilder_template_properties_pane: "Определяне на шаблон на екипно пространство",

		workspacebuilder_instance_security_pane: "Задаване на защита на екипно пространство",
		workspacebuilder_template_security_pane: "Задаване на защита на шаблон",

		workspacebuilder_layout_pane: "Избор на оформление",
		workspacebuilder_search_templates_pane: "Избор на търсения",
		workspacebuilder_document_folders_pane: "Включване на папки и документи",
		workspacebuilder_doctypes_entryTemplates_pane: "Избор на класове или шаблони за запис",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Избор на класове",
		workspacebuilder_security: "Защита на екипно пространство",

		workspacebuilder_roles_pane: "Избор на роли",
		workspacebuilder_security: "Защита",

		workspacebuilder_properties_templates: "Налични шаблони:",
		workspacebuilder_available_templates: "Налични търсения:",
		workspacebuilder_selected_templates: "Избрани търсения:",
		workspacebuilder_templates_name: "Търсене на име",

		workspacebuilder_available_entryTemplates: "Налични шаблони за запис:",
		workspacebuilder_selected_entryTemplates: "Избрани шаблони за запис:",

		workspacebuilder_item_classes: "Налични класове:",
		workspacebuilder_item_classes_selected: "Избрани класове:",
		workspacebuilder_properties_select_template: "Изберете шаблон за използване с това екипно пространство.",
		workspacebuilder_template_properties: "Определяне на шаблон на екипно пространство",
		workspacebuilder_instance_properties: "Определяне на екипно пространство",
		workspacebuilder_template_introText: "Укажете общите компоненти, които желаете да включите във всяко екипно пространство, което е създадено от този шаблон, с помощта на селекции в навигацията. Когато приключите щракнете върху <b>Готово</b>, за да направите шаблона наличен за други потребители, които могат да го използват за създаването на други екипни пространства.",
		workspacebuilder_instance_introText: "Екипите използват екипните пространства за споделяне и работа със специфични комплекти от документи. Предоставете смислено име и описание за това екипно пространство, за да позволите на потребителите да направят разлика между това екипно пространство и други екипни пространства. Можете да персонализирате екипното пространство, като включите допълнителни търсения, класове или шаблони за екипни пространства, документи и папки.",

		workspacebuilder_template_search_template_introText: "Изберете търсенията по подразбиране, които желаете да включите във всяко екипно пространство, което е създадено от този шаблон. Ако няма избрани търсения, потребителят на екипното пространство вижда всички търсения, до които има достъп. Чрез подходящите позволения потребителите могат да споделят и добавят търсения в екипното пространство.",
		workspacebuilder_instance_search_template_introText: "Включете търсения, които ще позволят на потребителите на екипното пространство да изпълняват задачите си по-ефективно. Ако няма включени търсения, потребителите на екипното пространство ще виждат всички търсения, за които имат разрешение. Потребителите могат и да добавят и споделят търсения в екипното пространство с помощта на подходящите позволения.",

		workspacebuilder_template_roles_introText: "На потребителите на екипното пространство се възлагат роли. Ролите определят задачите, които са разрешени за изпълнение на потребителите. Щракнете върху иконата до всяка роля, за да видите разрешените задачи. Изберете ролите, които са подходящи за екипното пространство.",
		workspacebuilder_template_roles_modify_introText: "Можете да променяте разрешенията, които са свързани с всяка роля в това екипно пространство. Трябва да уведомите членовете на екипното пространство, когато се променят разрешенията им.",

		workspacebuilder_template_roles_header_name: "Име на роля",

		workspacebuilder_template_folders_introText: "Изберете документите и папките по подразбиране за включване във всяко екипно пространство, което е създадено от този шаблон. Можете да добавяте документи или като връзки, или като копия. Използвайте връзките, за да посочите документи, на които не желаете да правите много копия, например правила и процедури. Създайте копия на документи, които потребителите ще променят, например шаблони и формуляри.",
		workspacebuilder_instance_folders_introText: "Изберете документите и папките по подразбиране за включване в екипното пространство. Можете да добавяте документи или като връзки, или като копия. Използвайте връзките, за да посочите документи, на които не желаете да правите много копия, например правила и процедури. Създайте копия на документи, които потребителите ще променят, например шаблони и формуляри.",

		workspacebuilder_template_roles_introText: "Определете ролите, които ще бъдат включени във всяко екипно пространство, което е създадено от този шаблон. Можете да създавате и нови роли, които можете да използвате, когато създавате други шаблони за екипни пространства.",
		workspacebuilder_instance_users_introText: "В дадено екипно пространство на всеки потребител се възлагат една или повече роли, които определят задачите, които могат да бъдат изпълнявани от потребителите. Добавете потребители към екипното пространство и възложете роли на потребителите.",

		workspacebuilder_instance_navigation_pane_title: "Конструктор за екипно пространство",
		workspacebuilder_template_navigation_pane_title: "Конструктор за шаблон на екипно пространство",

		workspacebuilder_roles_roles_nopermissions: "Няма избрани позволения за ролята {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Избрани роли:",
		workspacebuilder_roles_available_roles: "Налични роли:",
		workspacebuilder_roles_privilege_header: "Позволение",
		workspacebuilder_roles_select_role: "Избор на роля",
		workspacebuilder_roles_select_permission: "Избор на позволение",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Роля с име {0} вече съществува. Трябва да определите уникално име за ролята. ",
		workspacebuilder_roles_edit_dialog_role_name: "Име на роля:",
		workspacebuilder_roles_edit_dialog_role_description: "Описание на роля:",
		workspacebuilder_roles_edit_dialog_title_new: "Нова роля",
		workspacebuilder_roles_edit_dialog_title_edit: "Редактиране на роля",

		workspacebuilder_roles_privileges_header: "Позволения за ролята {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Позволения за документ:",
		workspacebuilder_roles_priv_group_folder: "Позволения за папки:",
		workspacebuilder_roles_priv_group_teamspace: "Позволения за екипно пространство:",
		workspacebuilder_roles_priv_group_item: "Позволения за документи и папки:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Управление на разрешенията",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Потребители с това разрешение могат да управляват достъпа до документи и папки в екипното пространство. Това разрешение включва позволяването на други потребители да изтриват, редактират свойства, създават подпапки и т.н.",

		workspacebuilder_roles_priv_deleteItems: "Изтриване",
		workspacebuilder_roles_plbl_deleteItems: "Потребители с това разрешение могат да изтриват документи и папки в екипното пространство.",

		workspacebuilder_roles_priv_createItems: "Създаване",
		workspacebuilder_roles_plbl_createItems: "Потребители с това разрешение могат да създават документи и папки в екипното пространство.",

		workspacebuilder_roles_priv_viewItemProperties: "Преглед на свойства",
		workspacebuilder_roles_plbl_viewItemProperties: "Потребители с това разрешение могат да виждат свойствата на документите и папките в екипното пространство, което включва системните свойства.",

		workspacebuilder_roles_priv_modifyItemProperties: "Редактиране на свойства",
		workspacebuilder_roles_plbl_modifyItemProperties: "Потребители с това разрешение могат да редактират свойствата на документи и папки в екипното пространство.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Управление на позволенията за папка",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Потребители с това разрешение могат да управляват достъпа до папки в екипното пространство. Това разрешение включва позволяване на другите потребители да изтриват папки, редактират свойства на папка, създават подпапки и т.н.",

		workspacebuilder_roles_priv_deleteFolders: "Изтриване на папки",
		workspacebuilder_roles_plbl_deleteFolders: "Потребители с това разрешение могат да изтриват папки в екипното пространство.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Редактиране на свойства на папка",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Потребители с това разрешение могат да редактират свойствата на папки в екипното пространство.",

		workspacebuilder_roles_priv_createSubfolders: "Създаване на подпапки",
		workspacebuilder_roles_plbl_createSubfolders: "Потребители с това разрешение могат да създават папки в екипното пространство.",

		workspacebuilder_roles_priv_fileInFolders: "Добавяне към папки",
		workspacebuilder_roles_plbl_fileInFolders: "Потребители с това разрешение могат да добавят връзка от папки към документи в екипното пространство.",

		workspacebuilder_roles_priv_viewFolderProperties: "Преглед на свойства на папки",
		workspacebuilder_roles_plbl_viewFolderProperties: "Потребители с това разрешение могат да виждат свойствата на папките в екипното пространство, което включва системните свойства.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Позволения за управление на документ",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Потребители с това разрешение могат да управляват достъпа до документи в екипното пространство. Това разрешение включва позволяването на други потребители да изтриват документи, редактират свойства на документи и т.н.",

		workspacebuilder_roles_priv_deleteDocuments: "Изтриване на документи",
		workspacebuilder_roles_plbl_deleteDocuments: "Потребители с това разрешение могат да изтриват документи в екипното пространство.",

		workspacebuilder_roles_priv_promoteVersions: "Повишаване на версии",
		workspacebuilder_roles_plbl_promoteVersions: "Потребители с това разрешение могат да възлагат нов номер на версия на документи в екипното пространство.",

		workspacebuilder_roles_priv_modifyContent: "Редактиране на документи",
		workspacebuilder_roles_plbl_modifyContent: "Потребители с това разрешение могат да редактират съдържанието на документи в екипното пространство.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Редактиране на свойства на документи",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Потребители с това разрешение могат да редактират свойствата на документи в екипното пространство.",

		workspacebuilder_roles_priv_viewContent: "Преглед на документи",
		workspacebuilder_roles_plbl_viewContent: "Потребители с това разрешение могат да преглеждат документи в екипното пространство.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Преглед на свойства на документи",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Потребители с това разрешение могат да виждат свойствата на папките в екипното пространство, включително системните свойства.",

		workspacebuilder_roles_priv_addNewSearches: "Добавяне на търсения",
		workspacebuilder_roles_plbl_addNewSearches: "Потребители с това разрешение могат да добавят търсения в екипното пространство. По подразбиране търсенето не е налично за други потребители.",

		workspacebuilder_roles_priv_createNewSearches: "Създаване на търсения",
		workspacebuilder_roles_plbl_createNewSearches: "Потребители с това разрешение могат да създават нови търсения, но не могат да ги запазват. Ако потребителите нямат това разрешение, те не могат да добавят документи, които вече се намират в хранилището, в екипното пространство.",

		workspacebuilder_roles_priv_shareSearches: "Споделяне на търсения",
		workspacebuilder_roles_plbl_shareSearches: "Потребители с това разрешение могат да споделят търсения, които са създали, с други потребители в екипното пространство.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Управление на класове или шаблони за запис",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Потребители с това разрешение могат да добавят и премахват класове или шаблони за запис от екипното пространство.",

		workspacebuilder_roles_priv_addRemoveClasses: "Управление на класове",
		workspacebuilder_roles_plbl_addRemoveClasses: "Потребители с това разрешение могат да добавят и премахват класове от екипното пространство.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Управление на потребителите на екипно пространство",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Потребители с това разрешение могат да добавят и премахват потребители и групи от екипното пространство. В допълнение те могат да управляват кои роли да бъдат възложени на потребителите.",

		workspacebuilder_roles_priv_modifyRoles: "Промяна на роли",
		workspacebuilder_roles_plbl_modifyRoles: "Собственици с това разрешение могат да управляват позволения за роли в екипното пространство. Това разрешение е налично само за собственици.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Избор на потребители",
		workspacebuilder_users_add_users_and_groups_button: "Добавяне на потребители и групи...",
		workspacebuilder_users_users_or_group_header: "Потребители и група",
		workspacebuilder_users_roles_header: "Роли",

		workspacebuilder_users_role_header: "Роля",
		workspacebuilder_users_role_no_permissions: "Тази роля няма позволения",
		workspacebuilder_users_available_roles_label: "Налични роли:",
		workspacebuilder_users_selected_users_and_groups_label: "Избрани потребители и групи:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Екипното пространство не може да бъде запазено. Трябва да укажете поне един собственик за това екипно пространство.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Екипното пространство не може да бъде запазено. Всеки потребител трябва да има възложена роля.",
		// end of select users

		workspacebuilder_search_templates: "Избор на търсения",
		workspacebuilder_search_add: "Добавяне на търсене",
		workspacebuilder_properties_workspaceName: "Име на екипното пространство:",
		workspacebuilder_properties_templateName: "Име на шаблон:",
		workspacebuilder_properties_workspaceDescription: "Описание на екипно пространство:",
		workspacebuilder_properties_templateDescription: "Описание на шаблон:",
		workspacebuilder_properties_workspaceTemplate: "Избрано екипно пространство:",
		workspacebuilder_properties_security: "Споделяне на шаблон със:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Преместване от екипно пространство:",
		moveTeamspaceDocuments_security: "Споделяне на документ със:",
		moveTeamspaceDocuments_security_change: "Укажете персонализирана защита за избраните елементи",
		moveTeamspaceDocuments_item_type_level: "Не можете да изберете пренебрегване на защитата на избраните елементи, защото класа на избрания елемент е конфигуриран да използва само защита на ниво клас",
		moveTeamspaceDocuments_security_inherit: "Наследяване на защита от целева папка",
		moveTeamspaceDocuments_file_info_text: "Можете да премествате елементи от едно екипно пространство в друго такова или папка.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Нямате подходящите позволения за преместване на елементите в избраната папка.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Нямате подходящите позволения за преместване на елементите от екипното пространство.",
		moveTeamspaceDocuments_move_mixed_items: "Не можете да пренебрегнете защитата на избраните елементи. Някои от елементите не се управляват от екипното пространство. Можете да пренебрегнете защитата само на елементи, които се управляват от екипното пространство.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Трябва да укажете име за екипното пространство.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Трябва да укажете име за шаблона на екипното пространство.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Името на екипното пространство не може да съдържа никой от следните знаци: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Името на шаблона не може да съдържа никой от следните знаци: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Връзка към документ",
		workspacebuilder_folders_makeDocCopy: "Копиране на документ",
		workspacebuilder_folders_newfolder: "Нова папка",
		workspacebuilder_folders_local_drive: "От локална директория",
		workspacebuilder_folders_from_repo: "От хранилище",
		workspacebuilder_folders_add_doc: "Добавяне на документ",
		workspacebuilder_folders_grid_name: "Име",
		workspacebuilder_folders_props: "Свойства",
		workspacebuilder_folders_remove: "Премахване",
		workspacebuilder_folders_delete: "Изтриване",
		workspacebuilder_folders_adddoc_local: "Добавяне на документ от локално устройство",
		workspacebuilder_folders_adddoc_repo: "Добавяне на документ от хранилище",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Указаното име на папка вече съществува. Укажете различно име на папка.",

		workspacebuilder_classes_title: "Избор на класове или шаблони за запис",
		workspacebuilder_classes_title_cm: "Избор на класове",
		workspacebuilder_classes_template_introText: "Укажете дали екипните пространства, създадени от този шаблон, ще използват класове или шаблони за запис за добавяне на документи към хранилище. Ако няма избрани класове, екипните пространства ще виждат всички класове, до които имат достъп.  Потребителят може да променя списъка с класове или шаблони в екипното пространство, ако има подходящите позволения.",
		workspacebuilder_classes_template_introText_cm: "Изберете класовете, които потребителите могат да използват за добавяне на документи към хранилището. Ако няма избрани класове, потребителите на екипните пространства ще виждат всички класове, до които имат достъп. Потребителите могат да променят списъка с класове в екипното пространство, ако имат подходящите позволения.",
		workspacebuilder_classes_instance_introText: "Изберете класовете или шаблоните за запис, които потребителите могат да използват за добавяне на документи към хранилището. Когато няма избрани класове, потребителите на екипното пространство ще виждат всички класове, за които имат разрешение. Потребителите могат да променят списъка с класове или шаблони за запис в екипното пространство, ако имат подходящите позволения.",
		workspacebuilder_classes_instance_introText_cm: "Изберете класовете, които потребителите могат да използват за добавяне на документи към хранилището. Когато няма избрани класове, потребителите на екипното пространство ще виждат всички класове, за които имат разрешение. Потребителите могат да променят списъка с класове в екипното пространство, ако имат подходящите позволения.",
		workspacebuilder_classes_selection: "Избор на класове:",
		workspacebuilder_classes_list: "Налични класове:",
		workspacebuilder_classes_columns_default: "По подразбиране",
		workspacebuilder_classes_columns_className: "Име на клас",
		workspacebuilder_classes_type_classes: "Използване на клас за добавяне на документ",
		workspacebuilder_classes_type_classes_tooltip: "Класовете включват свързани свойства, така че документите да могат да бъдат намерени за употреба по-късно.",
		workspacebuilder_classes_type_entryTemplates: "Използване на шаблон за запис за добавяне на документ",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Шаблоните за запис осигуряват това, че информацията, предоставена за всеки документ, е консистентна и използва предварително определени стойности.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Име на шаблон за запис",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Описание",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Трябва да добавите поне един шаблон за запис към екипното пространство.",

		workspacebuilder_classes_new: "Нов клас",
		workspacebuilder_classes_add: "Добавяне на клас",
		workspacebuilder_entryTemplate_add: "Добавяне на шаблон за запис",
		workspacebuilder_add_list: "Добавяне",
		workspacebuilder_makeDefault_list: "Задаване по подразбиране",
		workspacebuilder_removeDefault_list: "Премахване на настройката по подразбиране",

		workspacebuilder_roles_title: "Избор на роли",
		workspacebuilder_roles_title_modify: "Промяна на роли",

		workspacebuilder_selection_moveup: "Преместване нагоре",
		workspacebuilder_selection_movedown: "Преместване надолу",
		workspacebuilder_selection_remove: "Премахване",
		workspacebuilder_selection_add: "Добавяне",
		workspacebuilder_selection_create_new_search: "Ново търсене...",
		workspacebuilder_selection_create_new_role: "Нова роля...",
		workspacebuilder_selection_make_role_available: "Задаване като достъпно",
		workspacebuilder_selection_make_role_available_tooltip: "Споделя избраната роля с други шаблони. Трябва да възложите поне едно разрешение на роля, за да я споделите.",

		workspacebuilder_navigation_next: "Напред",
		workspacebuilder_navigation_finish: "Готово",
		workspacebuilder_navigation_validate: "Валидиране",
		workspacebuilder_navigation_previous: "Назад",
		workspacebuilder_navigation_cancel: "Отказ",
		workspacebuilder_navigation_customize: "Персонализиране",

		workspacebuilder_search_dialog_title: "Търсене",
		workspacebuilder_dialog_close: "Затваряне",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Наличност на шаблон:",
		workspace_properties_templateState_tooltip: "Направете шаблона недостъпен, за да предотвратите създаването на екипни пространства от потребители, които използват този шаблон.",
		workspace_properties_dialog_title: "Свойства на шаблон",
		workspace_properties_online_radio_option_label: "Задаване като достъпно",
		workspace_properties_offline_radio_option_label: "Задаване като недостъпно",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Желаете ли да отмените, без да запазвате промените си?",
		workspacebuilder_cancel_confirmation_button: "Да",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Всички невалидни елементи ще бъдат премахнати от шаблона и той ще стане достъпен за потребители.  Желаете ли да валидирате този шаблон за екипно пространство?",
		workspacebuilder_validate_confirmation_button: "Да",
		workspacebuilder_validate_confirmation_title: "Валидиране",

		/* Entry templates builder */
		entry_templates: "Диспечер за шаблон за запис",
		no_entry_templates_were_found: "Няма шаблони за запис",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Филтър",

		/* Roleselector widget */
		role_selector_name: "Роли:",

		/* User Group picker widget */
		directory_label: "Директория:",
		scope_label: "Търсене на:",
		name_starts_with_label: "Името започва със",
		name_contains_label: "Името съдържа",
		display_name_contains_label: "Показваното име съдържа",
		starts_with_label: "Започва със:",
		available_label: "Достъпно:",
		available_heading: "Достъпно",
		selected_label: "Избрано:",
		selected_heading: "Избрано",
		available_repositories_label: "Достъпни хранилища",
		selected_repositories_label: "Избрани хранилища",
		default_repository: "Хранилище по подразбиране:",
		default_repository_placeholder: "Избор на хранилище",
		default_role_placeholder: "Избор на роля",
		menu_label_placeholder: "Избор или въвеждане на етикет",
		default_repository_hover: "Укажете хранилището, което е избрано по подразбиране, когато потребителите влизат в уеб клиента от този работен плот.<br><br><b>Важно:</b> Трябва да добавите хранилища към избрания работен плот на списък с хранилища, преди да можете да укажете хранилището по подразбиране.",
		default_repository_workflow_hover: "<b>Не забравяйте:</b> Можете да конфигурирате пространствата на приложението само за хранилищата, които са конфигурирани за този работен плот.",
		remove_label: "Премахване",
		users_label: "Потребители",
		groups_label: "Групи",
		user_or_group_name_label: "Име на група или потребител:",
		user_or_group_name_hover: "Въведете име на потребители или група, което е валидно за хранилището.  Името не е валидирано.",
		user: "Потребител",
		group: "Група",
		name: "Име:",
		displayName: "Показвано име",
		display_name: "Показвано име:",
		shortName: "Късо име:",
		distinguishedName: "Изтъкнато име:",
		search_tooltip: "Търсене",
		add_tooltip: "Добавяне",
		add_selected_tooltip: "Добавяне към избрания списък",
		remove_tooltip: "Премахване",
		remove_selected_tooltip: "Премахване от избрания списък",
		add_to_selected_tooltip: "Добавяне",
		remove_from_selected_tooltip: "Премахване",
		move_up_selected_tooltip: "Преместване нагоре",
		move_down_selected_tooltip: "Преместване надолу",
		advanced_search_options_tooltip: "Разширени настройки",
		move_right_selected_tooltip: "Преместване в подменю",
		move_left_selected_tooltip: "Преместване извън подменю",
		add_separator: "Добавяне на разделител",
		menu_item_label: "Етикет на елемент от менюто:",
		add_menu_label: "Добавяне на подменю",
		menu_label: "Етикет на подменю:",
		menu_label_info: "<b>Важно:</b> Трябва да добавите поне един елемент от менюто към това подменю, преди да можете да запазите това меню.",
		menu_dropdown_label: "Етикет на падащ бутон:",
		menu_dropdown_label_info: "<b>Важно:</b> Трябва да добавите поне един елемент от менюто към този падащ бутон, преди да можете да запазите тази лента с инструменти.",
		no_item_found: "Няма намерени резултати.",
		me: "Аз",
		anyone: "Всеки",
		specific_users: "Определени потребители",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Търсенето върна повече от {0} резултата. Променете критериите си, за да стесните търсенето си.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Резултатите от търсенето съдържат елементи, които вече са били избрани. Тези елементи няма да бъдат показани в резултатите от търсенето.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Бяха върнати повече от {0} резултата. Използвайте филтър, за да стесните резултатите",

		user_already_selected: "Указаният потребител вече е избран.  Укажете различен потребител.",
		group_already_selected: "Указаната група вече е избрана.  Укажете различна група.",
		user_cannot_select_self: "Не можете да добавите себе си. Укажете различен потребител.",

		/* Select User Group dialog */
		select_user_group_add_label: "Добавяне",
		select_user_group_cancel_label: "Отказ",
		add_users_groups_label: "Добавяне на потребители и групи",
		add_user_group_label: "Добавяне на потребител и група",
		add_users_label: "Добавяне на потребители",
		add_user_label: "Добавяне на потребител",
		add_label: "Добавяне:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Следните документи имат незапазени промени с анотации:",
		viewer_confirm_to_proceed: "Искате ли да продължите и да изгубите промените?",
		viewer_warn_has_changes: "Незапазените Ви промени ще бъдат пренебрегнати.",
		viewer_warn_is_printing: "Отпечатва, което е в ход, може да не приключи.",
		viewer_warn_confirm_exit: "Желаете ли да излезете?",
		viewer_prompt_save_changes: "Следният документ има незапазени промени по анотацията, които ще бъдат изгубени:<br>${0}<br><br>Желаете ли да запазите промените?",
		viewer_prompt_mergesplit_changes: "Следните документи имат незапазени промени:<br>${0}<br><br>Искате ли да продължите и да изгубите промените?",
		viewer_prompt_mergesplit_tab_changes: "Следният документ има незапазени промени:<br>${0}<br><br>Искате ли да продължите и да изгубите промените?",
		viewer_new_item_name: "Нов документ",
		viewer_top_frame: "Горна рамка:",
		viewer_bottom_frame: "Долна рамка:",
		viewer_left_frame: "Лява рамка:",
		viewer_right_frame: "Дясна рамка:",
		viewer_viewer_frame: "Рамка на визуализатор:",
		viewer_properties_frame: "Рамка на свойства:",
		viewer_comment_frame: "Рамка за коментари:",
		viewer_mergesplit_on: "Изглед",
		viewer_mergesplit_off: "Сливане и разделяне",
		viewer_mergesplit_context_menu_move: "Преместване",
		viewer_mergesplit_context_menu_rename: "Преименуване",
		viewer_mergesplit_context_menu_delete: "Изтриване",
		//move to new window
		viewer_move_to_new_window:"Преместване в нов прозорец",
		viewer_continue:"Откажи промените",
		viewer_return_to_original_window:"Връщане към първоначалния прозорец",
		viewer_switch_window:"Превключи прозореца",
		viewer_prompt_lost_changes:"Документът ${0} в момента е отворен в друг прозорец. Този документ има незапазени промени.<br><br>Желаете ли да превключите към този прозорец, за да запазите промените, или да отмените промените и да го отворите в този прозорец?",
		viewer_mergesplit_fallback_info: "Можете да завършите действието по сливане и разделяне само за документи, които са в същото хранилище.",
		viewer_tabbed_layout: "Изглед като раздели",
		viewer_tabbed_layout_highcontrast: "Раздели",
		viewer_split_vertical_layout: "Разделени прозорци отгоре и отдолу",
		viewer_split_vertical_layout_highcontrast: "Отгоре и отдолу",
		viewer_split_horizontal_layout: "Разделени прозорци",
		viewer_split_horizontal_layout_highcontrast: "Отляво и отдясно",
		viewer_add_vertical_layout: "Нов раздел в долната част",
		viewer_add_vertical_layout_highcontrast: "Долен раздел",
		viewer_add_horizontal_layout: "Нов раздел в дясната част",
		viewer_add_horizontal_layout_highcontrast: "Десен раздел",
		viewer_add_horizontal_layout_rtl: "Нов раздел в лявата част",
		viewer_add_horizontal_layout_rtl_highcontrast: "Ляв раздел",
		viewer_split_properties_layout: "Преглед на свойства",
		viewer_split_comment_layout: "Преглед на коментари",
		viewer_split_notelog_layout: "Преглед на Notelog",
		viewer_window_title: "${0} Визуализатор",
		viewer_next_hit: "Преглед на следващия документ в списъка",
		viewer_prev_hit: "Преглед на предишния документ в списъка",
		viewer_confrim_more_search_results: "Резултатите от търсенето не съдържат повече документи, които могат да бъдат прегледани.  Желаете ли да извлечете още резултати от търсенето?",
		viewer_confirm_get_next_page: "Списъкът с резултати не съдържа повече елементи, които могат да бъдат прегледани.  Желаете ли да извлечете още резултати от търсенето?",
		viewer_confirm_get_next_item: "Списъкът с резултати съдържа още елементи, които могат да бъдат прегледани.  Желаете ли да прегледате следващия елемент?",
		viewer_fn_annotation_tooltip: " Създаден от: ${0}, създаден на: ${1}",
		viewer_box_note_limitation: "Можете само да отваряте и преглеждате бележки в Box в отделен прозорец.",
		viewer_click_to_open_box_note: "Щракнете тук, за да отворите бележка в Box.",
		viewer_box_view_expiring: "Максималното време, за което можете да преглеждате документ в Box е 60 минути. Вашата текуща сесия ще изтече след ${0} минути. Ако желаете да продължите да работите по документа, трябва да го презаредите сега. Желаете ли да презаредите документа?",
		viewer_add_dialog_save_as_type: "Запазване като тип::",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Конфликт на изписване",
		viewer_checkout_conflict: "Документът е изписан от друг потребител.",
		viewer_checkout_confirm: "Достъпна е по-нова версия на документа. Желаете ли да продължите да изписвате документа, или желаете да презаредите прегледа с по-новата версия? Ако изберете да презаредите прегледа, всички незапазени промени ще бъдат изгубени.",
		viewer_checkout_continue: "Продължи с изписване",
		viewer_checkout_reload: "Презареждане",
		viewer_status_building: "Изграждане на документ...",
		viewer_status_adding: "Добавяне на документ...",
		viewer_status_checking_in: "Вписване на документ...",

		/* Class Selector Widget */
		include_subclasses_label: "Включване на подкласове",
		include_subclasses_label2: "Търсене и в подкласове",
		include_subclasses_note: "(Включително подкласове)",
		available_classes_col_header: "Налични класове",
		single_class_label: "Търсене в един клас",
		multiple_classes_label: "Търсене в няколко класа",
		multiple_classes_hover_help: "Изберете тази опция, за да търсите в повече от един клас. Класовете могат да бъдат родителски класове или подкласове. Ако изберете тази опция, ще виждате само свойствата и стойностите, които са общи за избраните класове.",
		selected_classes_col_header: "Избрани класове",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Включително подпапки)",
		favorites_pseudo_node: "\\Предпочитания\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Трябва да изберете папка в хранилището, за да добавите документ към нея.",
		no_permission_add_folder: "Нямате подходящите позволения за добавяне на папки в тази папка.",
		no_permission_add_document: "Нямате подходящите позволения за добавяне на документи в тази папка.",
		document_already_in_folder: "Документът вече е в тази папка.",
		cant_move_folder_onto_parent: "Папката вече е в тази папка.",
		cant_move_folder_onto_self: "Не можете да преместите папка в самата нея или нейните подпапки.",

		/* Workflow Widgets */
		process_application_space: "Обработка на пространство на приложението",
		process_role: "Обработване на роля",
		process_inbasket: "Обработка на входяща кошница",
		process_worklist: "Работен списък",
		process_step_processor: "Обработка на работен елемент",
		process_tracker: "Проследяване на работен елемент",
		process_info_subject: "Тема",
		process_info_stepname: "Стъпка",
		process_info_is_locked: "Заключено",
		process_info_no_access: "Без достъп",
		process_info_received_on: "Получено на",
		process_info_overdue: "Просрочено",
		process_info_reminder_sent: "Изпратено е напомняне",
		process_info_locked_by_user: "Заключено от",
		process_work_object_number: "Номер на работен обект",
		process_deadline: "Крайна дата:",
		process_launchedby: "Стартирано от:",
		process_receivedon: "Получено на:",
		process_step: "Стъпка:",
		process_properties: "Свойства",
		process_attachments: "Прикачени файлове",
		process_attachments_select: "Избор на прикачен файл",
		process_finish_button_label: "Спиране на проследяване",
		process_tracker_history: "Хронология",
		process_tracker_milestones: "Междинни положения",
		process_tracker_milestone: "Междинно положение",
		process_tracker_milestone_level: "Ниво",
		process_tracker_milestones_empty: "Няма междинни положения за показване.",
		process_tracker_level_selector_label: "Показване на нива на междинни положения до:",
		process_tracker_map_selector_label: "Филтриране чрез карта:",
		process_tracker_message: "Съобщение",
		process_tracker_datereached: "Дата на достигане",
		process_tracker_stepname: "Стъпка",
		process_tracker_cycle: "Цикъл",
		process_tracker_review_cycle: "Преглед на цикъл",
		process_tracker_participant: "Участник",
		process_tracker_completed: "Завършен",
		process_tracker_response: "Отговор",
		process_tracker_comments: "Коментари",
		process_tracker_delete_confirmation: "Желаете ли да спрете проследяването на следния работен поток: ${0}?",
		process_tracker_history_allmaps: "Всички карти",
		process_tracker_history_workflow: "Работен поток",
		process_tracker_history_terminate: "Прекъсване",
		process_tracker_history_malfunction: "Неизправност",
		process_filter_label: "Филтър",
		process_no_filter_summary: "няма приложени филтри",
		process_filter_summary: "Приложено е ${0}",
		process_filter_reset_tooltip: "Нулирането изчиства филтъра и обновява входящата кошница.",
		process_attachments_add_folder: "Добавяне на папка",
		process_attachments_add_doc: "Добавяне на документ",
		process_complete_button_label: "Завършен",
		process_save_button_label: "Запазване",
		process_launch_button_label: "Стартиране на работен поток",
		process_open_button_label: "Отворен",
		process_movetoinbox_button_label: "Преместване във входяща кошница",
		process_return_button_label: "Връщане",
		process_return_to_sender_tooltip: "Връщане на работния елемент в първоначалната входяща кошница",
		process_move_to_inbasket_tooltip: "Преместване на работния елемент в личната Ви входяща кошница",
		process_reassign_tooltip: "Повторно възлагане на работния елемент на друг собственик",
		process_reassign_button_label: "Повторно възлагане",
		process_preferences_button_label: "Предпочитания",
		process_manageroles_button_label: "Управление на роли",
		process_manageroles_no_members: "Няма членове.",
		process_responses_button_label: "Още отговори",
		process_morecustomaction_button_label: "Още действия",
		process_show_instructions: "Преглед на инструкции",
		process_hide_instructions: "Скриване на инструкции",
		process_remove_attachment: "Премахване",
		process_close_window: "Работният елемент беше обработен.",
		process_delegate_flag: "Поискайте от текущия собственик да одобри работния елемент, преди да го насочите към следващата стъпка в работния поток.",
		process_paticipant_voting: "Брой участници, нужни за одобрение за гласуване:",
		process_get_next_label: "Получаване на следващ работен елемент",
		process_no_more_items: "Няма повече елементи за обработка във входящата кошница.",
		process_workflow_name: "Име на работен поток:",
		process_pattern_process_name: "Преглед за ${0}",
		process_instuctions: "Инструкции за преглеждащи:",
		process_pattern_deadline: "Крайна дата:",
		process_reviewers: "Преглеждащи:",
		process_approvals_required: "Необходими одобрения:",
		process_on_reject: "При отхвърляне на работния елемент:",
		process_return_to_originator: "Връщане на мен",
		process_return_to_previous_reviewer: "Връщане на предишния преглеждащ",
		process_additional_settings: "Допълнителни настройки:",
		process_allow_reassign: "Позволяване на преглеждащите да възлагат повторно този преглед",
		process_complete_notification: "Известяване при приключване на прегледа",
		process_workflow_name_hover_help: "Името, което указвате за работния елемент, трябва да улеснява преглеждащите да правят разлика между този работен елемент и други работни елементи в техните входящи кошници.",
		process_approvals_required_hover_help: "Ако работният елемент бива прегледат едновременно от няколко човека, можете да укажете колко одобрения са нужни за работния елемент, за да бъде успешно завършен.",
		process_approval_options: "Опции за одобрение",
		process_all: "Всички",
		process_at_least: "Поне",
		process_at_least_by_count: "Поне ${0} на брой преглеждащи",
		process_at_least_by_percentage: "Поне ${0}% преглеждащи",
		process_comments: "Коментари:",
		process_review_step_comments_hover_help: "Ако отхвърлите работния елемент, трябва да предоставите информация за това защо сте го отхвърлили. Тази информация позволява на създателя на работния елемент или не предишния преглеждащ да разбере притесненията Ви.",
		process_rework_step_comments_hover_help: "Трябва да предоставите информация за това как се отнасяте към коментарите. Ако не сте съгласни с коментарите, предоставете основание за решението си.",
		process_rejection_reason: "Причина за отхвърлянето:",
		process_summary: "Обобщение",
		process_sequential_review: "Последващ преглед",
		process_sequential_review_description: "Работните елементи ще бъдат прегледани от всеки преглеждащ подред.",
		process_parallel_review: "Паралелен преглед",
		process_parallel_review_description: "Работният елемент ще бъде прегледан от всички преглеждащи едновременно",
		process_parallel_approvals_required_error: "Броят изисквани одобрения е твърде висок. Само ${0} преглеждащи са указани.",
		process_parallel_invalid_required_approvals_count: "Стойността не е валидна. Стойността трябва да е ${0}.",
		process_subject_prompt: "Въведете темата",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Работен елемент:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Преглед на свойства",
		view_permissions_level: "Преглед на позволения",
		view_content_level: "Преглед на документ",
		link_level: "Връзка",
		modify_properties_level: "Редактиране на свойства",
		modify_content_level: "Редактиране на документ",
		minor_version_level: "Редактиране на второстепенна версия",
		major_version_level: "Редактиране на главна версия",
		create_instance_level: "Създаване на потребителски модел",
		delete_document_level: "Изтриване на документ",
		delete_item_level: "Изтриване на елемент",
		modify_document_permissions_level: "Управление на разрешенията",
		modify_folder_permissions_level: "Управление на разрешенията",
		modify_owner_level: "Модифициране на собственик",
		delete_folder_level: "Изтриване на папка",
		file_in_folder_level: "Добавяне към папки",
		create_subfolder_level: "Създаване на подпапки",
		link_item_level: "Анотиране на документ, Добавяне към папка", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Само за документ: Добавяне на анотация към документа или премахване на анотация от документа</li><li>Само за папка: Добавяне на елементи към папката или премахване на елементи от папката</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Изтриване",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Собственик",
		/* previously \"Full control\" */
		edit_privilege: "Автор",
		/* previously \"Edit\" */
		read_only_privilege: "Читател",
		/* previously \"Read only\" */
		no_access_privilege: "Без достъп",
		share_with_label: "Споделяне със:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Само аз",
		public_label: "Всеки",
		members_label: "Определени потребители и групи",
		select_members_label: "Изберете...",
		select_user_group_label: "Изберете потребители...",
		select_users_groups_label: "Изберете потребители и групи...",
		select_user_label: "Изберете потребител...",
		propagation_label: "Разпространение:",
		access_label: "Позволения:",
		add_permission_add_label: "Добавяне",
		security_policy_label: "Правила за зашита:",
		includes_inherited_access: "Включва наследен достъп",
		customize_access_for_label: "Персонализиране на достъп за:",
		customize: "Персонализиране",
		direct: "Този елемент",
		singleLevelInheritance: "Едно ниво",
		infiniteLevelInheritance: "Всички нива",
		inherited: "Наследено",
		direct_hover_help: "Настройките за защита се прилагат за избрания елемент",
		singleLevelInheritance_hover_help: "Тези позволения се прилагат за този елемент и за тези незабавни дъщерни елементи, които са конфигурирани да наследят защитата от този елемент.",
		infiniteLevelInheritance_hover_help: "Тези позволения се прилагат за този елемент и за всички произхождащи елементи, които са конфигурирани да наследят защитата от този елемент.",
		inherited_hover_help: "Тези позволения са наследени от родителския елемент.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Тези позволения за ${0} се прилагат за този елемент и за тези незабавни дъщерни елементи, които са конфигурирани да наследят защитата от този елемент.",
		infiniteLevelInheritance_member_hover_help: "Тези позволения за ${0} се прилагат за този елемент и за всички произхождащи елементи, които са конфигурирани да наследят защитата от този елемент.",
		inherited_member_hover_help: "Тези позволения за ${0} са наследени от родителския елемент.",
		partial_hover_help: "Настройките за защита на елемента бяха променени от потребител",
		allow: "Разрешаване",
		deny: "Отхвърляне",
		basic: "Основно",
		advanced: "Разширено",
		permission_type: "Задаване на достъп за:",
		share_with_hover_help: "Елементът към момента се споделя със следните потребители и групи.",
		direct_security_policy_hover_help: "Настройките на тези правила за защита Ви позволяват да промените защитата на този елемент.",
		security_policy_hover_help: "Защитата на този елемент е само за четене, защото настройките на тези правила за защита не Ви позволяват да променяте защитата на този елемент.",
		security_remove: "няма позволения",
		pseudo_group_label: "Акаунти с псевдоними",
		marking_hover_help: "Защитата на този елемент се управлява от зададено обозначение, което може да се отрази на защитата на елемента.",
		note_label: "Важно:",
		marking_text: "Този елемент е обозначен като: ${0}. Този елемент може да има допълнителни ограничения за защита.",
		authenticated_users: "Удостоверени потребители",
		realm_users: "${0} потребители",
		denyAll: "Отказ на всички",
		allowAll: "Разрешаване на всички",
		remove_direct_text: "Когато запазите промените си, позволенията за този член ще бъдат премахнати от елемента.",
		remove_single_inheritance_text: "Когато запазите Вашите промени, позволенията за този член ще бъдат премахнати от елемента и от <br>тези незабавни дъщерни елементи, които са конфигурирани да наследят защитата от елемента.<p>Желаете ли да продължите?",
		remove_infinite_inheritance_text: "Когато запазите Вашите промени, позволенията за този член ще бъдат премахнати от елемента и от <br>всички произхождащи елементи, които са конфигурирани да наследят защитата от елемента.<p>Желаете ли да продължите?",
		remove_inheritance_text: "Когато запазите Вашите промени, позволенията за този член ще бъдат премахнати от елемента и от <br>всички произхождащи елементи, които са конфигурирани да наследят защитата от елемента. Само тези позволения, които <br>са наследени от този елемент, ще останат.<p>Желаете ли да продължите?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Премахване на тези позволения за ${0}",

		security_proxy_text: "Защитата на този елемент е само за четене.",
		security_proxy_declared_text: "Защитата на този елемент е само за четене, защото е определена от пълномощник за защита.",
		security_proxy_hover_help: "Защитата на този елемент се управлява от защитата, която е зададена от друг обект в хранилището.",
		add_permissions_label: "Добавяне на позволения",
		permission_propagation_direct: "Само за тази папка",
		permission_propagation_onelevel: "Тази папка и едно ниво под нея",
		permission_propagation_alllevels: "Тази папка и всички нива под нея",
		document_propagation_label: "Задаване на достъп за:",
		document_propagation_FOLDER: "Папка",
		document_propagation_DOCUMENT: "Документ",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Източник на удостоверяване:",

		/* Versions Widget */
		object_versions_selector_label: "Версии:",
		object_versions_label: "Версии",
		object_type_document_label: "Документ:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Подадени папки",
		folders_filed_in_folder_col_hdr: "Папка",
		folders_filed_in_path_col_hdr: "Път",
		folders_filed_in_containment_name_col_hdr: "Име на ограничение",
		folders_filed_in_creator_col_hdr: "Създаден от",
		folders_filed_in_date_created_col_hdr: "Създаден на",

		/* Parent Documents */
		properties_parent_documents_label: "Родителски документи",

		/* Select object dialog */
		select_object_title: "Избор на елемент",
		select_object_breadCrumb_version_prefix: "Версии за: ",
		show_versions_label: "Показване на версии",
		use_current_version_label: "Използване на текущата версия",
		use_released_version_label: "Използване на публикуваната версия",

		/* Select content class dialog */
		select_class: "Избор на клас",
		/* Select Search dialog */
		select_search: "Избор на търсене",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Преглед на връзка",
		show_hyperlink_intro: "Можете да копирате и поставите връзката в имейл съобщения, чатове и уеб страници. Ако има няколко версии на елемента, укажете към коя версия желаете да е връзката.",
		show_hyperlink_intro_no_version_select: "Можете да копирате и поставите връзката в имейл съобщения, чатове и уеб страници.",
		show_text_label: "Версия:",
		released_button_label: "Публикувана",
		current_button_label: "Текущ",
		select_button_label: "Специфична версия",
		show_hyperlink_no_released_version_msg: "Не съществуват издадени версии на този документ.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Стартиране на работен поток",
		edit_workflow_title: "Свойства на работен елемент",
		start_workflow_intro: "Стартирайте работен поток, за да обработите избраните елементи. Ако желаете да възложите работните елементи на определен потребител, укажете собственик.",
		edit_workflow_intro: "Можете да редактирате свойствата на избраните работни елементи. Ако желаете да възложите повторно работния елемент на друг потребител, укажете собственик.",
		workflow_field_label: "Работен поток:",
		priority_field_label: "Приоритет:",
		owner_field_label: "Собственик:",
		start_button_label: "Стартиране",
		save_button_label: "Запазване",
		owner_value_hint: "Въведете буквено-цифров низ с максимум 32 знака. Низът може да съдържа само интервали или следните знаци: a-z, A-Z, 0-9 и ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Елементи на съдържание",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Стойността не е валидна. Стойността може да съдържа само интервали или следните знаци: a-z, A-Z, 0-9 и ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Въведете стойност от 1 до 32 000, за да укажете важността на работния елемент.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Стойността не е валидна. Приоритетът трябва да бъде стойност от 1 до 32 000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Името на работния поток не съществува.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Преустановяване от работния поток",
		suspend_workitems_intro: "Когато преустановите работен елемент от работния поток, той не може да бъде обработван, докато не бъде възобновен",
		suspend_workitems_options_label: "Преустановете избраните работни елементи:",
		suspend_until_resume_label: "До ръчно възобновяване",
		suspend_until_date_label: "До",
		suspend_for_duration_label: "За",
		suspend_for_duration_hours: "Часа",
		suspend_for_duration_days: "Дни",
		suspend_for_duration_weeks: "Седмици",
		suspend_for_duration_months: "Месеца",
		suspend_for_duration_years: "Години",
		suspend_button_label: "Преустановяване",
		suspend_duration_value_hint: "Въведете стойност в диапазон 1 - 99 за продължителността.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Стойността не е валидна. Стойността трябва да бъде в диапазон 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Премахване от работния поток",
		remove_workflow_confirmation: "Желаете ли да премахнете избраните елементи от работния поток?<br>Избрани са ${0} елемента.",
		remove_workflow_button_label: "Премахване",

		/* Unfile dialog */
		unfile_dialog_title: "Премахване от папка",
		unfile_dialog_remove_from_folder_label: "Премахване от:",
		unfile_dialog_info_text: "Можете да премахнете елементи от папки. Но премахването на елемент от всички папки не го премахва от хранилището. Все още можете да извлечете елемента, като стартирате търсене. Само папките, за които имате привилегии за преглед, се показва в този списък.",
		unfile_dialog_select_all: "Избор на всички",
		unfile_dialog_deselect_all: "Изчистване на всички",
		unfile_dialog_remove_button_label: "Премахване",
		unfile_dialog_select_folder_col_hdr: "Избор на папка",
		unfile_dialog_folder_col_hdr: "Папка",
		unfile_dialog_path_col_hdr: "Път",
		unfile_dialog_not_filed_msg: "Този елемент не се намира в никоя папка.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Нямате подходящите позволения за премахване на този елемент от която и да е от папките, в които се намира.",
		unfile_dialog_folder_not_selectable_tooltip: "Нямате подходящите позволения за премахване на този елемент от тази папка.",
		unfile_multi_prompt: "Желаете ли да премахнете избраните елементи от папката ${0}?",
		unfile_large_number_items_confirmation_question: "Избрахте ${0} елемента да бъдат премахнати от папката ${1}.<br/>Премахването на голям брой елементи от дадена папка може да отнеме дълго време.<br/>Желаете ли да продължите?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Отворен",
		move_to_folder_title: "Преместване в папка",
		move_to_folder_button_caption: "Преместване",
		move_to_folder_label: "Преместване във:",
		add_to_folder_title: "Добавяне към папка",
		add_to_folder_button_caption: "Добавяне",
		add_to_folder_label: "Добавяне към:",
		copy_to_folder_title: "Копиране в папка",
		copy_to_folder_button_caption: "Копиране",
		copy_to_folder_label: "Копиране във:",
		copy_to_folder_delete_label: "След приключването на копирането, изтрийте избрания елемент(и) от Box.",
		move_from_folder_label: "Преместване от:",
		move_file_info_text: "Можете да премествате елементи от една папка в друга.",
		move_folder_info_text: "Можете да премествате папки от една родителска папка в друга.",
		add_doc_to_folder_info_text: "Можете да добавяте елементи към една или повече папки. Ако даден елемент вече се намира в папка, той остава в нея и се добавя към всяка указана от Вас допълнителна папка.",
		copy_doc_to_folder_info_text: "Можете да копирате елементи в папка.",
		box_copy: "Копие в Box",
		box_copy__button_caption: "Копиране",
		box_copy_to_info_text: "Изберете хранилището и папката, където желаете да копирате избраните си елементи от Box.",
		box_copy_from_info_text: "Изберете хранилището и папката, където желаете да копирате избраните си елементи от Box.",
		box_copy_version_info_text: "За да добавите нов документ, изберете хранилището и папката. За да впишете нова версия, изберете хранилището и документа.",
		admin_box_copy: "Копие в Box",
		admin_box_copy_hover: "Тази опция позволява на потребителите да копират документи в Box.",

		no_permission_to_copy_version_msg: "Не можете да копирате документа от Box като нова версия на избрания документ. Или нямате подходящите позволения за редактиране на избрания документ, или избраният документ е изписан от някой друг.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Нямате подходящите позволения за премахване на този елемент от която и да е от папките, в които се намира.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Нямате подходящите позволения за премахване на този елемент от тази папка.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Този елемент не може да бъде преместен, защото не е подаден в никоя папка. Изберете друг елемент.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Стартиране на работен поток",
		subscriptions_dialog_available_items_label: "Налични елементи:",
		subscriptions_dialog_info_text: "Укажете работен поток за стартиране.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Име",
		subscriptions_dialog_desc_col_hdr: "Описание",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Управление на роли",
		manageroles_dialog_info_text: "Можете да промените списъка с потребители за всяка роля, която е свързана с това пространство на приложение за обработка.",
		manageroles_dialog_members_label: "Членове",
		manageroles_dialog_roles_label: "Роли",
		manageroles_dialog_add_button_label: "Добавяне на потребители и групи",
		manageroles_dialog_remove_button_label: "Премахване",
		manageroles_dialog_save_button_label: "Запазване",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Няма работни процеси, свързани с този елемент.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Свойства на работен поток",
		workflow_pref_dialog_info_text: "Укажете събитията на работния поток, за който желаете да получавате уведомления по имейл. Можете също да активирате опцията за насочване на работата си към друго лице, като изберете потребител, на който да я делегирате.",

		workflow_pref_general: "Общи",
		workflow_pref_email_address: "Имейл адрес",
		workflow_pref_email_address_hover: "Укажете имейл адреса, където желаете да получавате уведомления за работния поток.",
		workflow_pref_preferred_locale: "Език",
		workflow_pref_preferred_locale_hover: "Указва езика, на който ще се показват уведомленията по имейл.",

		workflow_pref_work_item_notice: "Уведомления за работен елемент",
		workflow_pref_step_new_assignment: "Нов работен елемент е възложен на мен",
		workflow_pref_step_new_assignment_hover: "Уведомявай ме, когато получавам нов работен елемент.",
		workflow_pref_step_expired_deadline: "Крайният срок на работен елемент изтече",
		workflow_pref_step_expired_deadline_hover: "Уведомявай ме, когато пропусна краен срок на работен елемент.",
		workflow_pref_step_reminders: "Крайният срок на работен елемент почти е достигнат",
		workflow_pref_step_reminders_hover: "Напомняй ми за работен елемент, когато крайният му срок е наближил.",

		workflow_pref_originator_notice: "Уведомления на източник",
		workflow_pref_milestone_reached: "Достигнато е междинно положение",
		workflow_pref_milestone_reached_hover: "Уведомявай ме, когато е достигнато междинно положение в работен поток, започнат от мен.",

		workflow_pref_tracker_notice: "Уведомления от тракера заработен процес",
		workflow_pref_tracker_new_assignment: "Възложен ми е нов елемент от тракер",
		workflow_pref_tracker_new_assignment_hover: "Уведомявай ме, когато започне работен поток, който проследявам.",
		workflow_pref_tracker_deadline_reminders: "Наближава крайният срок на работен поток",
		workflow_pref_tracker_deadline_reminders_hover: "Напомняй ми за работен поток, когато крайният му срок наближава.",
		workflow_pref_tracker_deadline_expired: "Крайният срок на работен поток премина",
		workflow_pref_tracker_deadline_expired_hover: "Уведомявай ме, когато крайният срок на работен поток е преминал.",
		workflow_pref_tracker_exception: "Възникна грешка в работния поток",
		workflow_pref_tracker_exception_hover: "Уведомявай ме, когато възникне изключение или грешка в работния поток.",
		workflow_pref_tracker_expired_deadline: "Крайният срок на стъпка премина",
		workflow_pref_tracker_expired_deadline_hover: "Уведомявай ме, когато премине крайният срок на стъпка от работен поток, който проследявам.",
		workflow_pref_tracker_milestone_reached: "Достигнато е междинно положение",
		workflow_pref_tracker_milestone_reached_hover: "Уведомявай ме, когато е достигнато междинно положение в работен поток, който проследявам.",

		workflow_pref_out_notice: "Извън офиса",
		workflow_pref_proxy_user: "Делегиране на работа на",
		workflow_pref_proxy_user_hover: "Използвайте тази опция, за да пренасочите автоматично работата си на друг потребител, когато например сте далеч от офиса или почивате.",
		workflow_pref_workflow: "Работен поток",
		workflow_pref_on: "Вкл.",
		workflow_pref_off: "Изкл.",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Стартиране на работен поток",
		transfered_workflows_dialog_info_text: "Изберете работен поток за стартиране.",
		transfered_workflows_dialog_available_items_label: "Налични елементи:",
		transfered_workflows_dialog_select_button_label: "Стартиране",
		transfered_workflows_dialog_name_col_hdr: "Име",
		transfered_workflows_dialog_no_item_found: "Няма намерени прехвърлени работни потоци.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Прехвърляне на работен поток",
		transfer_workflow_dialog_info_text: "Изберете работен поток за прехвърляне в системата с работни потоци.",
		transfer_workflow_dialog_use: "Използвайте това Име на работен поток",
		transfer_workflow_dialog_use_another: "Използвайте друго Име на работен поток",
		transfer_workflow_dialog_in_use: "Името на работния поток е: ",
		transfer_workflow_dialog_transfer_button_label: "Прехвърляне",
		transfer_workflow_dialog_no_items_found: "Няма намерени прехвърлени работни потоци.",
		transfer_workflow_dialog_use_hover: "Укажете името на текущия работен поток от дефиницията на работния поток.",
		transfer_workflow_dialog_another_hover: "Укажете различно Име на работен поток или използвайте повторно съществуващо име на прехвърлен работен поток.",

		/*Search In control*/
		search_in_title: "Търсене във:",
		search_in_teamspaces: "Екипни пространства",
		search_in_repositories: "Хранилища",
		search_in_thisteamspaces: "Това екипно пространство",

		ajaxViewer_save: "Запазване на анотации",
		ajaxViewer_print: "Визуализация на печата",
		ajaxViewer_firstPage: "Първа страница",
		ajaxViewer_previousPage: "Предишна страница",
		ajaxViewer_nextPage: "Следваща страница",
		ajaxViewer_lastPage: "Последна страница",
		ajaxViewer_unknownPageCount: "1 от ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} от ${1}",
		ajaxViewer_zoomOut: "Намаляване",
		ajaxViewer_zoomIn: "Увеличаване",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Вместване на ширина",
		ajaxViewer_fitHeight: "Побиране по дължина",
		ajaxViewer_fitPage: "Побиране на страницата",
		ajaxViewer_rotate270: "Завъртане на 270 градуса",
		ajaxViewer_rotate90: "Завъртане на 90 градуса",
		ajaxViewer_rotate180: "Завъртане на 180 градуса",
		ajaxViewer_darken: "Потъмняване",
		ajaxViewer_lighten: "Изсветляване",
		ajaxViewer_lessContrast: "По-малък контраст",
		ajaxViewer_moreContrast: "По-голям контраст",
		ajaxViewer_invert: "Инвертиране",
		ajaxViewer_createHighlight: "Подчертаване",
		ajaxViewer_createNote: "Поставяне на анотация",
		ajaxViewer_editAnnotation: "Редактиране на свойства на анотация",
		ajaxViewer_deleteAnnotation: "Изтриване на анотация",
		ajaxViewer_editAnnotationTitle: "Редактиране на свойства на анотация",
		printableView_print: "Отпечатване",
		printableView_close: "Затваряне",

		search_results_dropdown_button: "Показване на резултати",
		search_results_columns_label: "Показване на резултати от търсенето",
		search_results_columns_description: "изберете свойствата, които желаете да бъдат показани в резултатите от търсенето.",
		search_results_sortby_label: "Сортиране по:",
		search_results_order_label: "Ред на сортиране:",
		search_results_accending_label: "Във възходящ ред",
		search_results_descending_label: "В низходящ ред",
		search_results_available_properties: "Достъпно",
		search_results_selected_properties: "Избрано",
		search_rank_property: "Ранг (само за търсене на текст)",
		search_name_attribute: "Име (${0})",
		search_results_summary_enabled_label: "Активиране на обобщения на съдържание (само за търсене на текст)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Търсения",
		manage_teamspace_classes_tab_title: "Класове",
		manage_teamspace_entry_templates_tab_title: "Шаблони за запис",
		manage_teamspace_team_tab_title: "Екип",
		manage_teamspace_roles_tab_title: "Роли",
		manage_teamspace_dialog_title: "Промяна на екипно пространство",
		manage_teamspace_button_label: "Промяна на екипно пространство",
		manage_teamspace_team_pane_heading: "Избор на екип",
		manage_teamspace_classes_pane_heading: "Избор на класове",
		manage_teamspace_entry_templates_pane_heading: "Избор на шаблон за запис",
		manage_teamspace_no_rights_message: "Нямате подходящите позволения за промяна на това екипно пространство.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Свойства на екипното пространство",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Укажете свойствата, които се показват за документи и папки в списъка със съдържание, когато потребителите преглеждат екипното пространство. Можете също така да укажете реда, в който ще се покажат свойствата.",
		teamspace_props_sel_cols_use_default_label: "Използвайте настройките <b>Преглед</b> за това хранилище",
		teamspace_props_sel_cols_use_default_tooltip: "Използвайте настройките, указани на страницата Преглед за това хранилище в инструмента за администрация.",
		teamspace_props_general_tab_label: "Общи",
		teamspace_props_column_props_tab_label: "Показани свойства",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Избор на файл за импортиране",
		teamspace_import_template_instruction: "Можете да изберете файл за експортиране на шаблон на екипно пространство за импортиране.",
		teamspace_import_template_button_label: "Импортиране",
		teamspace_import_template_dialog_label: "Импортиране на шаблон за екипно пространство",

		/* Annotation Dialog */
		annotationDlg_title: "Анотации",
		annotationDlg_description: "избраният документ има следните анотации:",
		annotationDlg_msg_noAnnotations: "Не съществуват анотации. Щракнете върху Добавяне, за да създадете анотация.",
		annotationDlg_pageLabel: "Страница: ${pageNum}",
		annotationDlg_accLabel: "ДОСТЪП: ${accType}",
		annotationDlg_accLabel_public: "Публичен",
		annotationDlg_accLabel_private: "Личен",
		annotationDlg_accLabel_privateGroup: "Личен(${groupName})",
		annotationDlg_copiable: "Може да се копира на друг сървър",
		annotationDlg_cannotCopy: "Не може да се копира на друг сървър",
		annotationDlg_addButtonLabel: "Добавяне",

		/* Share Dialog */
		is_shared: "Споделено",
		is_share_pending: "Очаква споделяне",
		share_title: "Споделяне в Box",
		share_instructions_new: "Изпратете имейл, който съдържа връзка за споделения файл. Всеки, който има връзката, ще има достъп до файла.",
		share_instructions_existing: "Изпратете имейл, който съдържа връзка за споделения файл. Всеки, който има връзката, ще има достъп до файла. Други хора може да разполагат с връзката, защото друг вече е споделил файла.",
		share_instructions_another_version_shared: "Изпратете имейл, който включва връзката за споделения файл. Всеки, който има връзката, ще има достъп до файла. Други хора може да разполагат с връзката, защото някой вече е споделил друга версия на файла.",
		share_buttonLabel_share: "Споделяне",
		share_email_addresses: "Изпращане на:",
		share_email_addresses_hover: "Когато споделянето завърши, връзка ще бъде изпратена на тези имейл адреси. Ако не въведете нищо, връзката ще бъде изпратена на Вашия собствен адрес.",
		share_email_addresses_reshare_hover: "Когато споделянето завърши, връзка ще бъде изпратена на тези имейл адреси. Ако не въведете нищо, няма да бъде изпратен имейл.",
		share_password: "Задаване на парола:",
		share_password_placeholder: "Опционално",
		share_comments: "Съобщение:",
		share_comments_default: "Желая да споделя файла си с Вас в Box.",
		share_myEmail: "Изпратено от:",
		share_expiration: "Задаване на изтичане на срока на връзката:",
		share_expire: "Изтичане при достъп:",
		share_expire_none: "Не изтича никога",
		share_allowDownload: "Позволяване на изтегляне",
		share_add: "Добавяне",
		share_advanced_instructions: "Настройките за изтегляне, изтичане и парола се прилагат за споделения файл в Box.",
		share_advanced_existing_instructions: "Настройките за изтегляне, изтичане и парола се прилагат за споделения файл в Box.",
		share_options_edit_warning: "Важно: Всякакви промени на тези настройки ще се отразят на всеки с връзката включително хората, които вече я имат.",
		share_link: "Връзка:",
		share_email_addresses_placeholder: "Имейл адреси",
		share_email_address_placeholder: "Имейл адрес",
		share_email_address_invalid: "Въведете валиден имейл адрес.",
		share_cannot_share_with_self: "Не можете да споделяте файлове със себе си. Укажете различен потребител.",
		share_selected_version_with_minor_warning_hover: "Версия ${0} на документа е споделена. Избрахте версия ${1}.<br><br><b>Предупреждение</b>: Ако споделите версия ${1}, никой няма да може да сподели версия ${2}, освен ако не изтриете споделянето на версия ${1}.",
		share_selected_version_hover: "Версия ${0} на документа е споделена. Избрахте версия ${1}.",
		share_selected_version_message: "Важно: Версия ${0} на документа е споделена. Избрахте версия ${1}.",
		share_different_version_message: "Важно: Избрахте версия ${1}, но версия ${0} на документа вече е споделена.  Не можете да споделите версия ${1}, освен ако първо не изтриете споделянето, но можете вместо това да споделите връзката към версия ${0}.",
		share_version_message: "Важно: Версия ${0} на документа е споделена. Изберете версията, която желаете да споделите.",
		share_version_new: "Споделяне на версия ${0}",
		share_version_new_p8_hover: "Споделянето на този документ създава връзка за специфична версия само към избраната версия.<br><br>Когато даден документ вече е споделен:<ul><li>Можете да споделите по-късна версия и връзката се пренасочва към по-късната версия.</li><li>Не можете да споделите по-ранна версия, освен ако първо не изтриете споделянето.</li></ul>",
		share_version_new_cm_hover: "Споделянето на този документ създава връзка за специфична версия само към избраната версия.<br><br>Когато даден документ вече е споделен:<ul><li>Можете да споделите по-късна версия и връзката се пренасочва към по-късната версия.</li><li>Не можете да споделите по-ранна версия.</li></ul>",
		share_version_update: "Споделяне на версия ${0} (Актуализирайте опциите за споделяне).",
		share_version_update_p8_hover: "Споделянето на този документ поддържа връзка само към определената версия.<br><br>Когато даден документ вече е споделен:<ul><li>Можете да споделите по-късна версия и връзката се пренасочва към по-късната версия.</li><li>Не можете да споделите по-ранна версия, освен ако първо не изтриете споделянето.</li></ul>",
		share_version_update_cm_hover: "Споделянето на този документ поддържа връзка само към определената версия.<br><br>Когато даден документ вече е споделен:<ul><li>Можете да споделите по-късна версия и връзката се пренасочва към по-късната версия.</li><li>Не можете да споделите по-ранна версия.</li></ul>",
		share_version_change_to_current: "Споделяне на версия ${0} (Актуализирайте споделянето с избраната версия).",
		share_version_change_to_current_p8_hover: "Споделянето на този документ актуализира връзката да сочи само към избраната версия.<br><br>Когато даден документ вече е споделен:<ul><li>Можете да споделите по-късна версия и връзката се пренасочва към по-късната версия.</li><li>Не можете да споделите по-ранна версия, освен ако първо не изтриете споделянето.</li></ul>",
		share_version_change_to_current_cm_hover: "Споделянето на този документ актуализира връзката да сочи само към избраната версия.<br><br>Когато даден документ вече е споделен:<ul><li>Можете да споделите по-късна версия и връзката се пренасочва към по-късната версия.</li><li>Не можете да споделите по-ранна версия.</li></ul>",
		share_repository: "Хранилище за споделени файлове",
		share_repository_hover: "Ако не виждате хранилището в Box, което желаете да използвате, можете да добавите ново хранилище в Box от страницата Хранилища.",
		share_options: "Опции за споделяне",
		unshare_confirm: "Ако изтриете споделянето, всички връзки за споделяне ще бъдат прекъснати включително тези, предварително изпратени от други потребители. Всички останали потребители, които искат да споделят документа трябва да изберат оригиналния документ и да го споделят отново.<br><br>Сигурни ли сте, че желаете да изтриете споделянето?",
		unshare_button: "Изтриване на споделяне в Box",
		admin_share: "Услуги за споделяне в Box:",
		admin_share_hover: "Позволява на потребителите да споделят документ от всяко хранилище, което е с активирано споделяне в Box. Споделянето на документа включва копирането на файла в Box, създаването на връзка и нейното изпращане в имейл.",
		admin_my_email_modifiable: "Позволяване на потребителите да модифицират имейл адреса Изпратено от",
		admin_my_email_modifiable_hover: "По подразбиране за споделяне в Box потребителския имейл адрес е само за четене и се получава от съпоставяне на потребители и имейл адреси, които представляват потребителски акаунти в Box.<br><br>Изберете тази опция, за да позволите на потребителите да редактират своя имейл адрес, когато споделят; въпреки това, валидността на имейл адреса не е проверена.",
		admin_repos_admin_user: "Администратор на споделяне:",
		admin_repos_admin_user_hover: "Задайте администратор на споделяне, ако имате работен плот с активирани услуги за споделяне в Box и това хранилище в Box, избрано като хранилище за споделени файлове.<br><br>Щракнете върху Задаване и влезте в Box, като използвате валиден администраторски акаунт за Box.<br><br>Администраторът на споделяне трябва да е потребител администратор в Box, който е конфигуриран да има неограничено хранилище в Box.",
		admin_repos_admin_user_not_set_warning: "Администраторът в Box не е конфигуриран за избраното хранилище.<br><br>Услугите за споделяне в Box са деактивирани, докато не зададете администратор в Box за избраното хранилище или изберете друго хранилище в Box, където администраторът в Box е конфигуриран.<br><br>Можете да зададете администратор в Box в раздела за услуги за споделяне на Box на страницата Общи за хранилището.",
		admin_share_not_configured_warning: "Преди да можете да използвате услуги за споделяне на Box, трябва първо да добавите и да изберете хранилище на Box със сървърно удостоверяване.",
		/* Office Online Server settings */
		admin_office_online_title: "Конфигурация Office Online",
		admin_office_online_server_enable: "Сървър Office Online:",
		admin_office_online_server_enable_hover: "Укажете дали желаете потребителите, които осъществяват достъп до тази работна площ, да могат да редактират техните Office документи посредством сървър Office Online.",		
		admin_office_online_allow_collaborative_editing: "Позволяване на съвместно редактиране",
		admin_office_online_allow_collaborative_editing_hover: "Позволете на повече от един потребител да работи по същия документ. Изчистете тази опция, ако желаете да ограничите редактирането на документи до един потребител.",
		admin_office_online_repository_not_set_warning: "Преди да можете да активирате услугата Office Online, трябва първо да активирате услугата в хранилище и да укажете URL адрес на Microsoft Office Online Server. Щракнете върху <b>Хранилища</b>, изберете хранилище, след което разрешете услугата в раздел <b>Редактиране на интегриране</b> . Щракнете върху <b>Настройки > Общи</b> и въведете URL адреса на Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Укажете дали желаете да използвате Office Online Server, за да работите с Office документи.",
		admin_office_online_server_url: "URL адрес на Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Укажете URL адреса, чрез който другите приложения могат да комуникират с Office Online Server. URL адресът има следния формат http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Проверен",
	    admin_office_online_server_Failed: "<b>Неуспешен</b>",

		admin_repcfg_office_online_service_p8_hover: "За да инициализирате хранилището да използва Office Online Server, можете да добавите началния файл с шаблон за всяко Office приложение. Ако не е указан шаблон, ще бъде използван шаблон по подразбиране.",	
		admin_repcfg_office_online_server_integration: "Интегриране на MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Преди да можете да активирате Office Online Server, трябва първо да укажете URL адреса на Microsoft Office Online Server. Щракнете върху Настройки > Общи и въведете URL адреса",
		admin_repcfg_office_online_word_template_name: "Шаблон по подразбиране за Word",
		admin_repcfg_office_online_excel_template_name: "Шаблон по подразбиране за Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Шаблон по подразбиране за PowerPoint",
		admin_repcfg_office_online_blank_template_description: "Това е шаблонът по подразбиране, който се използва, ако не добавите Ваш собствен шаблон.",
		/* Edit Service settings */
		admin_icn_edit_title: "Редактиране на конфигурация",	
	    admin_icn_edit_files_cleanup_interval: "Интервал за почистване на временни файлове (в дни):",
	    admin_icn_edit_files_cleanup_interval_hover: "Можете да зададете период от време, за който временните файлове да се запазват в ICN редактиране на клиента.  Стандартната стойност за време е 20 дни. Максималната стойност за време е 20 дни. Минималната стойност за време е 1 ден.",
	    admin_icn_edit_service_integration: "Редактиране интегриране на услуга",
	    admin_icn_edit_service_integration_intro: "Услугата за редактиране позволява на потребителите да добавят или редактират файлове в локалните приложения, инсталирани на техните компютри.<br><br><b>Важно:</b> Ако активирате услугата за редактиране, трябва да запазите конфигурацията на вашето хранилище преди да можете да редактирате предварително определените категории.",
		admin_icn_edit_service: "Услуга за редактиране:",
		admin_icn_edit_enable_hover: "За да използвате тази настройки, вие трябва да:<ul><li>Активирате услугата в хранилището</li><li>Активирате услугата на работната площ във вашата среда</li><li>Инсталирате Клиента за редактиране или потребителските работни станции на IBM Content Navigator</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Активиране",
		admin_icn_edit_disable: "Деактивиране",
		admin_icn_edit_create_new_category: "Нова категория",
		admin_icn_edit_delete_category: "Изтриване на категория",
		admin_icn_edit_edit_category: "Редактиране на категория",
		admin_icn_edit_disable_category: "Деактивиране на категория",
		admin_icn_edit_enable_category: "Активиране на категория",
		admin_icn_edit_new_category_dialog_title: "Нова категория",
		admin_icn_edit_edit_category_dialog_title:"Редактиране на категория",
		admin_icn_edit_new_category_dialog_instructions: "Категорията на документа ви позволява да асоциирате шаблони със специфични MIME типове за услугата за редактиране. Например можете да асоциирате набор на шаблони с PDF файлове, така че потребителите да могат да прилагат шаблони, когато добавят или редактират файлове от Клиента за редактиране на IBM Content Navigator . <br><br><b>Важно:</b> Вие трябва да запазите вашето хранилище преди да можете да добавяте шаблони към категорията, която създавате. ",
		admin_icn_edit_edit_category_dialog_instructions: "Вие трябва да запазите конфигурацията на вашето хранилище преди да можете да добавяте шаблони към тази категория. ",
		admin_icn_edit_delete_category_dialog_instructions: "Желаете ли да изтриете тази категория и всички шаблони, асоциирани с нея?<br><br><b> Важно : </b> Вашите промени няма да бъдат постоянни, докато не ги запазите в хранилището. ",
		admin_icn_edit_category_label: "Категория: ",
		admin_icn_edit_category_discription_label:"Описание: ",
		admin_icn_edit_template_column_head:"Име на шаблон",
		admin_icn_edit_category_duplicate_error_message: "Вече съществува категория с този идентификатор. ",
		admin_icn_edit_word_category_description: "Тази категория определя наличните шаблони за Microsoft Word документи в услугата за редактиране. ",
		admin_icn_edit_excel_category_description: "Тази категория определя наличните шаблони за Microsoft Excel документи в услугата за редактиране. ",
		admin_icn_edit_powerpoint_category_description: "Тази категория определя наличните шаблони за Microsoft PowerPoint документи в услугата за редактиране. ",

		icn_edit_add_template_dialog_title:"Добавете ${0} шаблон",
		icn_edit_add_template_only_one_file_error: "Можете да изберете само един файл.",
		icn_edit_add_template_file_type_error: "Трябва да посочите валиден файл на шаблон ${0} .<br><br>Избраният документ има MIME тип ${1}<br><br>Валидни MIME типове: ${2}.",
		icn_edit_change_template_dialog_title: "Редактиране ${0} на шаблон",
		icn_edit_action_in_new_menu_name:"${0} Документ",
		icn_edit_action_in_new_menu_submenu_oo_name: "с Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "с приложения на работната площ",
		icn_edit_new_document_dialog_title: "Нов ${0} документ",
		icn_edit_new_document_dialog_intro: "Създайте нов ${0} документ и го добавете в хранилището. Документът ще бъде създаден с избрания шаблон на услуга за редактиране.", 
		icn_edit_select_edit_service_template: "Изберете шаблон",
		icn_edit_edit_service_template: "Шаблон на услугата за редактиране:",
		icn_edit_new_document_category_no_templates_message:"Няма шаблони в тази категория. Моля, свържете се с вашия администратор, за да добавите шаблони в тази категория.",
		icn_edit_installer: "Инсталатор за редактиране на IBM Content Navigator",
		admin_icn_cm_classes_and_roles_settings: "Настройки за клас и роля",
		admin_repcfg_classes_and_roles_warning: "За да укажете класове и потребители или потребителски групи, които имат позволение да създават, редактират или използват шаблони или да създават чернови на документи, които работят с Office Online Service или Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "щракнете тук.",
		/* Edit Service settings END */
		share_no_my_email_error: "Възникна проблем при идентифицирането на имейл адреса, нужен за споделянето на този документ.",
		share_no_my_email_error_explanation: "Влязохте с потребителски идентификатор ${0}, но потребителският идентификатор не е съпоставен с имейл адрес.",
		share_no_my_email_error_userResponse: "Опитайте да влезете пак или влезте, като използвате различен потребителски идентификатор. Ако проблемът не изчезне, докладвайте за грешката на системния администратор.",
		share_no_my_email_error_adminResponse: "Потребителският идентификатор ${0} не е съпоставен с имейл адрес, а работният плот ${1} не позволява потребителите да редактират имейл адреса за споделяне в Box.<br><br>Опитайте едно от следните решения:<br>Уверете се, че плъгинът за съпоставяне на имейл е регистриран.<br>Уверете се, че файлът emailMappingPlugin.json включва потребителския идентификатор ${0} и потребителския имейл адрес, след което конструирайте, конфигурирайте и регистрирайте плъгина за съпоставяне на имейл адрес.<br>Ако не желаете да използвате плъгина за съпоставяне на имейл адрес или директорията за имейл адрес във FileNet P8, но желаете вместо това да позволите на потребителите да въведат свой собствен имейл адрес, когато споделят документ, можете да промените настройките на работния плот за услугите за споделяне в Box, за да позволите на потребителите да изпращат връзка от друг имейл адрес.",
		share_no_my_email_error_0: "идентификатор на потребител",
		share_no_my_email_error_1: "име на работния плот",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "По-късна версия на документа е споделена, така че не можете да споделите избраната версия на този документ.",
		share_later_version_shared_error_explanation: "Не можете да споделите по-ранна версия на документ, който е бил споделен преди това.",
		share_later_version_shared_error_userResponse: "За да изпратите връзка за по-късна версия на документа, трябва първо да изберете по-късна версия и след това да използвате действието Споделяне.<br><br>За да споделите избраната версия на документа, трябва първо да изтриете споделянето за по-късната версия на документа.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Ново съобщение",
		email_from: "От:",
		email_to: "До:",
		email_cc_link: "Копие до",
		email_bcc_link: "Скрито копие до",
		email_cc: "Копие до:",
		email_bcc: "Скрито копие до:",
		email_address_invalid: "Въведете валиден имейл адрес.",
		email_subject: "Тема:",
		email_message: "Съобщение:",
		email_message_placeholder: "Добавяне на съобщение",
		email_attachments: "Прикачени файлове:",
		email_links: "Връзки:",
		email_send: "Изпращане",
		email_dont_send: "Да не се изпраща",
		email_subject_reminder: "Напомняне за тема",
		email_subject_reminder_confirm: "Желаете ли да изпратите това съобщение без тема?",
		email_missing_from_error: "Възникна проблем при идентифицирането на имейл адреса От, който се изисква за изпращането на имейл.",
		email_missing_from_error_explanation: "Влязохте с потребителски идентификатор ${0}, но потребителският идентификатор не е съпоставен с имейл адрес.",
		email_missing_from_error_userResponse: "Опитайте да влезете пак или влезте, като използвате различен потребителски идентификатор. Ако проблемът не изчезне, докладвайте за грешката на системния администратор.",
		email_missing_from_error_adminResponse: "Потребителският идентификатор ${0} не е съпоставен с имейл адрес, а работният плот ${1} не позволява на потребителите да редактират имейл адреса От.<br><br>Опитайте едно от следните решения:<br>Уверете се, че плъгинът за съпоставяне на имейл е регистриран.<br>Уверете се, че файлът emailMappingPlugin.json включва потребителския идентификатор ${0} и потребителския имейл адрес, след което конструирайте, конфигурирайте и регистрирайте плъгина за съпоставяне на имейл адрес.<br>Ако не желаете да използвате плъгина за съпоставяне на имейл адрес или директорията за имейл адрес във FileNet P8, но желаете вместо това да позволите на потребителите да въведат свой собствен имейл адрес, когато изпращат имейл, можете да промените настройките на Имейла за работни плотове, за да позволите на потребителите да променят имейл адреса От.",
		email_missing_from_error_0: "идентификатор на потребител",
		email_missing_from_error_1: "име на работния плот",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Документът не може да бъде отворен.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator не може да се свърже с Клиента за редактиране на IBM Content Navigator.",
		open_edit_document_with_native_application_error_userResponse: "Инсталирайте и стартирайте Клиента за редактиране на IBM Content Navigator на вашата работна станция. След това се опитайте да отворите документа отново.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Документът не може да бъде отворен.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator не може да се свърже с Клиента за редактиране на IBM Content Navigator.",
		connect_to_the_streamline_service_error_userResponse: "Инсталирайте и стартирайте Клиента за редактиране на IBM Content Navigator на вашата работна станция. След това се опитайте да отворите документа отново.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator не е конфигуриран правилно за споделяне на документи.",
		share_not_configured_error_explanation: "Характеристиката за споделяне в Box трябва да бъде конфигурирана правилно, преди да можете да споделяте документи.",
		share_not_configured_error_userResponse: "Свържете се с Вашия администратор и поискайте те да конфигурират характеристиката за споделяне в Box.",
		share_not_configured_error_adminResponse: "Следните елементи трябва да бъдат конфигурирани преди споделянето на документи:<ul><li>Услугата на мениджъра на задачи трябва да бъде активирана в настройките на административния инструмент.</li><li>Идентификаторът за свързване на мениджъра на задачи трябва да бъде конфигуриран в хранилището.</li><li>Споделянето трябва да бъде активирано в хранилището.</li><li>Хранилище в Box трябва да бъде избрано за споделяне в работната площ.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Промените в свойствата не бяха запазени в новата версия.",
		checkin_cors_save_attributes_error_explanation: "Версията беше създадена, но промените в свойствата не бяха запазени. Избраният документ може все още да бъде изписан.",
		checkin_cors_save_attributes_error_userResponse: "Отключете документа и актуализирайте свойствата с помощта на елемент от контекстното меню на свойството.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Промените в свойствата не бяха запазени за новия документ.",
		add_cors_save_attributes_error_explanation: "Документът беше създаден, но промените в свойствата не бяха запаметени.",
		add_cors_save_attributes_error_userResponse: "Актуализирайте свойствата с помощта на елемент от контекстното меню на свойствата.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Документът не може да бъде отворен.",		
		edit_document_using_edit_service_error_explanation: "Документът не може да бъде отворен в Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Помолете Вашия администратор да актуализира Edit Service Integration.<br><br> Ако потребителят трябва да осъществи достъп до този документ от Edit Service, отидете на страницата Edit Integration за хранилището и обновете Edit Service Integration, за да включите класа в списъка класове за модифициране на Edit Service поддръжката.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Документът не може да бъде отворен.",		
		edit_document_is_editing_by_oos_error_explanation: "Документът се използва от Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Трябва да запазите и затворите документа в Office Online Service, преди да можете да го отворите в Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Активиране на качване на Cross-Origin Resource Sharing (CORS)",

		/* Email Settings */
		admin_email_settings: "Настройки на имейл:",
		admin_email_settings_hover: "Укажете типа на имейл услуга, който желаете да бъде използван от потребителите. Когато активирате базирана на HTML имейл услуга, Вие имате опцията да позволите на потребителите да променят техния имейл адрес От. Ако желаете да активирате базирана на Java имейл услуга, трябва да имате браузър, който поддържа Java.",
		admin_email_use_service: "Използвайте базирана на HTML имейл услуга",
		admin_email_use_applet: "Използвайте базирана на Java имейл услуга",
		admin_email_can_modify_from: "Позволяване на потребителите да модифицират имейл адреса От",
		admin_email_can_modify_from_hover: "По подразбиране , имейл адресът От не може да се променя и се получава от съпоставяне на потребители и имейл адреси, които представляват потребителски акаунти.<br><br>Изберете тази опция, за да позволите на потребителите да редактират своя имейл адрес, когато изпращат имейл; въпреки това, валидността на имейл адреса не е проверена.",
		admin_email_use_from_as_sender: "Използвайте имейл адреса От като изпращач на имейла",
		admin_email_use_from_as_sender_hover: "По подразбиране, валиден имейл адрес От се използва в имейла на потребителя. Този имейл адрес се определя от имейл сесията CNMailSession в сървъра на приложения. Изберете тази опция, за да укажете, че имейл адресът на потребителя ще се използва в имейла.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Нови анотации",
		addAnnotationDlg_labelContents: "Съдържание:",
		addAnnotationDlg_labelAccess: "Достъп:",
		addAnnotationDlg_labelPublic: "Публичен",
		addAnnotationDlg_labelPrivate: "Личен",
		addAnnotationDlg_labelPrivateGroup: "Личен за групата",
		addAnnotationDlg_labelGroup: "Група",
		addAnnotationDlg_labelCopiable: "Тази анотация може да бъде копирана на друг сървър.",
		addAnnotationDlg_buttonLabel_save: "Запазване",

		/* Skip navigation */
		skipNavigation_title_main: "Пропускане към основното съдържание",
		skipNavigation_title_menu: "Пропускане към бутоните за навигация",
		skipNavigation_label_main: "Пропускане към основното съдържание",
		skipNavigation_label_menu: "Пропускане към бутоните за навигация",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Управление на екипните пространства",
		manage_teamspace_pane_instance_hdr: "Екипни пространства",
		manage_teamspace_pane_template_hdr: "Шаблони",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Превъртане напред",
		scroll_back: "Превъртане назад",

		breadcrumb_separator_open: "Отваряне на възел",
		breadcrumb_separator_close: "Затваряне на възел",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Няма избран елемент.",

		/* eds */
		eds_url: "URL адрес за услуги за външни данни:",
		eds_request_timeout: "Времетраене за заявка за услуга (секунди):",
		eds_is_required: "Не позволява на потребителите да предприемат действия, които променят стойностите на свойствата, когато няма достъп до EDS",

		/* eforms */
		eform_signing_pane_welcome: "Подписване на формуляра",
		eform_signing_button_label: "Подпис",
		eform_signing_pane_delete: "Изтриване на подписа",
		eform_signing_button_label_delete: "Изтриване",

		xtplugin_server_label: "URL адрес на сървър за на IBM FileNet Workplace XT",
		xtplugin_server_hover: "Въведете URL адреса на сървъра, където е разположен IBM FileNet Workplace XT, например: http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL адрес на сървър на IBM eClient",
		ecplugin_server_hover: "Въведете URL адреса на сървъра, където е разположен IBM eClient, например http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Действия върху голям брой елементи могат да отнемат дълго време. Желаете ли да продължите?",
		large_number_actions_continue_button: "Напред",

		large_items_actions_confirmation_question: "Действия върху големи елементи могат да отнемат дълго време. Желаете ли да продължите?",

		viewer_editproperties_title: "Потвърждение",
		viewer_editproperties_title_warning: "Предупреждение",
		viewer_editproperties_save: "Запазване",
		viewer_editproperties_next: "Напред",
		viewer_editproperties_reset: "Възстановяване",
		viewer_editproperties_reset_hover: "Всички незаписани данни ще бъдат нулирани до предходно записаните стойности.",
		viewer_editproperties_saveandgetnext: "Запазване и продължаване със следващия",
		viewer_editproperties_saveandgetnext_hover: "Автоматично премини към следващия документ, след като запазя промените си",
		viewer_editproperties_prompt_save_changes: "Променихте свойствата на следния документ<br>${0}<br><br>Желаете ли да запазите промените си?",
		viewer_editproperties_prompt_discard_changes: "Променихте свойствата на следния документ<br>${0}<br><br>Но едно или повече от свойствата има невалидна стойност, така че промените не могат да бъдат запазени. Можете или да коригирате невалидните стойности, или да отхвърлите промените си.<br>Желаете ли да коригирате невалидните стойности, показани в прозореца за свойства?",
		viewer_comments_prompt_discard_changes: "Променихте коментарите. Желаете ли да запазите промените си?",
		viewer_notelogs_prompt_discard_changes: "Променихте бележките. Желаете ли да запазите промените си?",
		social_collaborated_version: "Версия: ${0}",
		social_link_label: "Кой...",

		// social comments
		comments: "Коментари",
		comments_add_hint: "Натиснете Enter, за да добавите коментарите си.",
		comments_hint: "Въведете коментарите си.",
		comments_label: "Натиснете Enter или Tab, за да запазите коментарите си. Натиснете Esc, за да отмените.",
		comments_delete_confirmation: "Желаете ли да изтриете избрания коментар?",
		comments_number: "Коментари: ${0}",
		comments_save_new: "Променихте коментарите. Желаете ли да затворите прозореца, без да запазите промените си?",

		notelogs: "Бележки",
		notelogs_download: "Изтегляне",
		notelog_modify: "Запазване на промените",
		notelog_edit: "Редактиране на бележка",
		notelog_create_newVersion: "Създаване на нова версия на бележка",
		notelog_add_hint: "Въведете коментарите си и натиснете Enter, за да добавите.",
		notelog_hint: "Натиснете Shift+Enter за линейна емисия",
		notelog_add_placeholder: "Натиснете Enter, за да добавите коментар към бележка.",
		notelog_save_new: "Променихте бележката. Желаете ли да затворите прозореца, без да запазите промените си?",

		// P8 markings related
		cannot_remove_markings: "Нямате право да премахвате маркиращите стойности: {0}",

		// download count
		downloadcount: "Изтегляния: {0}",
		downloadcount_single: "1 изтегляне",
		downloadcount_multiple: "{0} изтегляния",
		downloadcount_none: "Все още никой не е изтеглял това",

		// recommendations
		recommendations: "Харесвания: {0}",
		recommendations_recommend: "Харесване на това",
		recommendations_unrecommend: "Нехаресване на това",
		recommendations_you: "Вие харесвате това",
		recommendations_you_and_another: "Вие и 1 друго лице харесвате това",
		recommendations_you_and_others: "Вие и {0} други харесвате това",
		recommendations_another: "1 лице харесва това",
		recommendations_others: "{0} хора харесват това",
		recommendations_none: "Все още никой не е харесал това",

		// tags
		tags: "Маркери: ${0}",
		tags_delete: "Изтриване ${0}",
		tags_none: "Няма маркери за показване.",
		tags_add: "Добавяне на маркери:",
		tags_hint: "Натиснете Enter, за да добавите маркерите си.",
		tags_hover_help: "Укажете маркер или списък с маркери, които могат да бъдат използвани за търсене на документи с еднакъв маркер. Можете да използвате запетая (,), точка и запетая (;) или интервал за разделяне на маркерите.",
		tags_hover_help_box: "Укажете маркер или разделен със запетаи списък с маркери, които могат да бъдат използвани за търсене на документ с еднакъв маркер.",
		tags_no_access: "Нямате подходящите позволения да добавяте маркери.",

		//task scheduler pane
		taskPane_tooltip: "Отваряне на изгледа за асинхронни задачи",
		taskPane_tree: "Дървовидна структура за навигация на прозореца за задачи",
		taskPane_allTasks: "Всички задачи",
		taskPane_scheduledTasks: "Планирани задачи",
		taskPane_recurringTasks: "Повтарящи се задачи",
		taskPane_inProgressTasks: "Задачи в ход",
		taskPane_completedTasks: "Завършени задачи",
		taskPane_failedTasks: "Неуспешни задачи",
		taskPane_disabledTasks: "Деактивирани задачи",
		taskPane_statusScheduled: "Планиран",
		taskPane_statusInProgress: "В ход",
		taskPane_statusCompleted: "Завършен",
		taskPane_statusFailed: "Неуспешен",
		taskPane_statusPaused: "Временно преустановен",
		taskPane_noItemSelected: "няма избран елемент",
		taskSchedulerPane_scheduleInformation: "Информация за планиране",
		taskSchedulerPane_loginInformation: "Информация за вход",
		taskSchedulerPane_startImmediately: "Стартиране незабавно",
		taskSchedulerPane_recurrence: "Повторно появяване",
		taskSchedulerPane_interval: "Интервал",
		taskSchedulerPane_scheduleReport: "Планиране на отчет",
		taskSchedulerPane_nameHoverHelp: "Въведете името на задачата.",
		taskSchedulerPane_descriptionHoverHelp: "Въведете описание на задачата. Описанието трябва да Ви помогне да правите разлика между задачите.",
		taskSchedulerPane_startTimeHoverHelp: "Укажете кога желаете да се изпълни задачата. За да изпълните задачата сега, изберете Стартиране незабавно.",
		taskSchedulerPane_recurrenceHoverHelp: "Можете да планирате задачата да се изпълнява с повтаряне.",
		taskSchedulerPane_endTimeHoverHelp: "Укажете кога желаете задачата да спре да се изпълнява. Задачата се изпълнява от планираното начално време до планираното крайно време.",
		taskSchedulerPane_usernameHoverHelp: "За повтарящи се задачи трябва да въведете потребителско има, за да активирате услугата за удостоверяване, когато се изпълнява задачата.",
		taskSchedulerPane_passwordHoverHelp: "За повтарящи се задачи, трябва да въведете паролата на указания потребител, за да активирате услугата за удостоверяване, когато задачата се изпълнява.",
		taskSchedulerPane_notification: "Уведомление",
		taskSchedulerPane_emailAddress: "Имейл адрес",
		taskSchedulerPane_emailAddressHoverHelp: "Въведете имейл адреса, където желаете да получавате уведомления относно състоянието на задачата.",
		taskSchedulerPane_intervalHoverHelp: "Укажете периода от време, през което повтарящата се задача ще се изпълнява. Можете да зададете интервал в часове, дни седмици или месеци.",
		taskSchedulerPane_scheduledStartTime: "Насрочен начален час",
		taskSchedulerPane_startTime: "Начален час",
		taskSchedulerPane_title: "График",
		taskSchedulerPane_runNow: "Изпълнение сега",
		taskSchedulerPane_runOnce: "Изпълнение веднъж",
		taskSchedulerPane_runAtSchedule: "Изпълнение по график",
		taskSchedulerPane_repeats: "Повторения",
		taskSchedulerPane_repeatsEvery: "Повтаря се на всеки",
		taskSchedulerPane_hourly: "Ежечасно",
		taskSchedulerPane_daily: "Ежедневно",
		taskSchedulerPane_weekly: "Ежеседмично",
		taskSchedulerPane_monthly: "Ежемесечно",
		taskSchedulerPane_yearly: "Ежегодно",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Начална дата",
		taskSchedulerPane_after: "След",
		taskSchedulerPane_ending: "Крайна дата",
		taskSchedulerPane_times: "път(и)",
		taskSchedulerPane_days: "ден(дни)",
		taskSchedulerPane_hours: "час(а) в рамките на деня",
		taskSchedulerPane_interval: "Интервал",
		taskSchedulerPane_endingDays: "Край (в дни)",
		taskSchedulerPane_never: "Никога",
		taskSchedulerPane_categorization: "Категоризация",
		taskSchedulerPane_scheduleTask: "Планирана задача",
		taskInformationPane_details: "Подробности",
		taskInformationPane_errors: "Грешки",
		taskInformationPane_taskInstances: "Копия на задача",
		taskInformationPane_audits: "Одити",
		taskInformationPane_results: "Резултати",
		asyncTasks: "Асинхронни задачи",

		//entry template pane
		search_all_entry_templates: "Търсене на всички шаблони за запис.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Преглед на целия сайт",
		mobilesite: "Преглед на мобилния сайт",
		profile: "Управление на профил",
		office_template: "Шаблон за Office:",
		select_office_template: "Изберете шаблон за Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Избраният документ не може да бъде отворен във визуализатора с действие сливане и разделяне.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Конфигурираният визуализатор за документи PDF и TIFF не поддържа действие за сливане и разделяне.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Помолете вашия администратор да конфигурира визуализатор за PDF или TIFF документи, който поддържа действие сливане и разделяне, като например визуализатор Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Избраният PDF документ не може да бъде отворен във визуализатора с Merge и действие за разделяне .",
		document_builder_pdf_unsupported_viewer_error_explanation: "Конфигурираният визуализатор за документи PDF не поддържа действие за сливане и разделяне.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Помолете вашия администратор да конфигурира визуализатор за PDF документи, който поддържа действие сливане и разделяне, като например визуализатор Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Избраният TIFF документ не може да бъде отворен във визуализатора с действие за сливане и разделяне.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Конфигурираният визуализатор за документи TIFF не поддържа действие за сливане и разделяне.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Помолете вашия администратор да конфигурира визуализатор за TIFF документи, който поддържа действие сливане и разделяне, като например визуализатор Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Избраният документ не може да бъде отворен във визуализатора с действие сливане и разделяне.",
		document_builder_unsupported_documents_error_explanation: "Действието сливане и разделяне работи само за документи PDF и TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Изберете поддържаните документи и опитайте отново.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Някои от избраните документи не могат да бъдат отворени във визуализатора с действие сливане и разделяне.",
		document_builder_some_unsupported_documents_error_explanation: "Действието сливане и разделяне работи само за документи PDF и TIFF, отворени от същото хранилище.",
		document_builder_some_unsupported_documents_error_userResponse: "Поддържаните документи ще бъдат отворени във визуализатора.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Възникна грешка при проверката на модифицираното съдържание.",
		document_builder_checkin_failed_explanation: "Четецът получи отговор с грешка при вписване на модифицираното съдържание .",
		document_builder_checkin_failed_userResponse: "Помолете системния администратор да прегледа журналните файлове на сървъра за уеб приложения.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Документът не може да бъде отворен.",
		no_viewer_to_view_error_explanation: "Системният администратор ви е блокирал от разглеждане на този документ. Ако ви трябва достъп до този документ, можете да го изтеглите.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Съдържанието не може да бъде изградено.",
		document_build_failed_userResponse: "Поискайте от системния администратор да прегледа журналните файлове на четеца.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Документът не може да бъде отворен в режим на сливане и разделяне.",
		document_builder_open_failed_userResponse: "Поискайте от системния администратор да прегледа журналните файлове на четеца.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Системата не може да премине към режим на сливане и разделяне.",
		document_builder_switch_failed_userResponse: "Поискайте от системния администратор да прегледа журналните файлове на четеца.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Документи",
		print_service_page_setup_tab_title: "Настройки на страница",
		print_service_OD_print_tab_title: "Опции за принтера",
		print_service_status_merging: "Сливане на документи...",
		print_service_status_converting: "Конвертиране на документи...",
		print_service_status_formatting: "Форматиране на документ за отпечатване...",
		admin_print_service_maximum_number_to_print: "Максимален брой документи, разрешени за отпечатване:",
		admin_print_service_maximum_size_to_print: "Максимално количество данни, разрешени за отпечатване (в MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Посочете максималния брой документи, които потребителите могат да отпечатват едновременно. Максималната стойност по подразбиране е 50. Ако не желаете да ограничите печатането по брой документи, задайте това ограничение на 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Ограничение:</b> тази настройка не се поддържа на IBM Content Manager OnDemand.<br/><br/>Посочете максималното количество данни, които могат да бъдат отпечатани чрез услугата за печат на IBM Daeja ViewONE.<br /><br />Общият размер на всеки избран документ не може да надвишава това количество.<br/><br/>Ограничението по подразбиране е 200 MB. Задаването на това ограничение над 200 MB може да засегне работата на системата. Ако не желаете да ограничите печатането по брой документи, задайте това ограничение на 0",
		// error printing
		print_service_error_printing: "Възникна грешка при печат.",
		print_service_error_printing_userResponse: "Помолете системния администратор да прегледа журналните файлове на услугата за печат.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Избраните документи са твърде големи, за да се отпечатат",
		print_service_max_content_error_explanation: "Избраните документи надхвърлят ограничението от ${0} MB данни.",
		print_service_max_content_error_userResponse: "Изберете по-малко като брой или по-малки като размер документи и ги отпечатайте отново. Можете също да се свържете с Вашия системен администратор, за да увеличи максималния размер на елементите, които могат да се отпечатват едновременно от този работен плот.",
		print_service_max_content_error_0: "максимален размер на елементите",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Елементите не могат да бъдат отпечатани.",
		print_service_max_number_selected_error_explanation: "Можете да отпечатвате до ${0} елемента едновременно. Опитвате се да отпечатате ${1} елемента.",
		print_service_max_number_selected_error_userResponse: "Изберете по-малко елементи и се опитайте да ги отпечатате отново. Можете също да се свържете с Вашия системен администратор, за да увеличи максималния брой елементи, които могат да се отпечатват едновременно от този работен плот.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


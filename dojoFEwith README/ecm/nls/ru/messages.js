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
		welcome_user: "Приветствуем вас, ",
		about: "Информация",
		all: "Все",
		help: "Помощь",
		user_session: "Сеанс пользователя",
		user_session_for: "Сеанс пользователя для ${0}",
		user_session_for_with_container: "Сеанс пользователя для ${0} (${1})",
		tools: "Инструментарий",
		login: "Вход в систему",
		logout: "Выход",
		search: "Поиск",
		saved_searches: "Сохраненные условия поиска",
		content_analytics: "Анализировать содержимое",
		reset: "Сбросить",
		reset_hover: "Для всех несохраненных данных на всех вкладках будут восстановлены ранее сохраненные значения.",
		reset_default: "Очистить все",
		reset_default_hover: "Очистить поле текущей метки на всех вкладках.",
		locale: "Локаль:",
		up: "Включено",
		down: "Отключено",
		restore: "Восстановить",
		maximize: "Увеличить",
		values_label: "Значения",
		value_label: "Значение:",
		path_label: "Путь:",
		new_label: "Создать:",
		back_label: "Назад",
		clear: "Очистить",
		set: "Задать...",
		browse: "Обзор",
		work: "Работа",
		connect: "Соединиться",
		documents: "Документы:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM и логотип IBM - товарные знаки IBM Corporation, зарегистрированные во многих странах мира. Java и все товарные знаки и логотипы на основе Java - товарные знаки или зарегистрированные товарные знаки Oracle и/или его филиалов. Технология Oracle Outside In включена сюда на условиях лицензии ограниченного использования и может использоваться только в сочетании с данной программой. Эта программа лицензирована в соответствии с условиями лицензионного соглашения, которое прилагается к программе.  Это лицензионное соглашение может находиться в папке или библиотеке каталога Программы, обозначенных как \"License\" или \"Non_IBM_License\", если это применимо, или предоставляться в виде печатного лицензионного соглашения. Перед использованием данной программы следует внимательно ознакомиться с этим соглашением. Использование программы означает согласие с этими условиями. ",
		edit: "Изменить",
		cancel: "Отмена",
		close: "Закрыть",
		close_all: "Закрыть все вкладки",
		close_others: "Закрыть другие вкладки",
		ok: "OK",
		yes: "Да",
		no: "Нет",
		open: "Открыть",
		refresh: "Обновление",
		refresh_cabinets: "Обновить все шкафы",
		delete_text: "Удалить",
		export_config: "Экспорт конфигурации",
		description: "Описание",
		true_label: "True",
		false_label: "False",
		error: "Ошибка",
		error_reference_hover: "Более подробную информацию об этой ошибке ищите по адресу www.ibm.com.",
		url_label: "URL",
		default_label: "По умолчанию",
		ibm_label: "IBM",
		light_label: "Светлый",
		dark_label: "Темный",
		save: "Сохранить",
		saveAs: "Сохранить как...",
		save_and_close: "Сохранить и закрыть",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Нет",
		Name: "Имя",
		"${NAME}": "Имя",
		mime_type: "Тип MIME",
		mime_type_contains_label: "Тип MIME содержит",
		mime_type_header: "Тип MIME",
		mime_type_icon: "Значок типа MIME",
		casesearch: "Дело",
		item: "Элемент",
		no_mime_type: "В этом элементе нет содержимого.",
		items_selected: "${0} элементов выбрано.",
		requestor: "Кем затребовано",
		scheduledStartTime: "Плановое время начала",
		isRecurring: "Периодический",
		weeks: "нед.",
		days: "дн.",
		hours: "ч.",
		endTime: "Время окончания",
		username: "Имя пользователя",
		password: "Пароль",
		serverURL: "URL сервера",
		enable: "Включить",
		disable: "Выключить",
		finish: "Готово",
		previous: "Назад",
		next: "Далее",
		schedule: "Расписание",
		removeFromThisList: "Удалить из этого списка",
		status: "Статус",
		scheduledEndTime: "Плановое время окончания",
		type: "Тип",
		mode: "Режим",
		startTime: "Время начала",
		createdBy: "Создатель:",
		nextScheduledTime: "Следующее запланированное время",
		id: "ID",
		duration: "Длительность",
		repeatCycle: "Частота",
		taskTypeName: "Тип операции",
		to: "до",
		filter: "Фильтр:",
		error_message: "Сообщение об ошибке",

        file_type: "Тип документа",
        word_template_name: "Имя шаблона Word",
        excel_template_name: "Имя шаблона Excel",
        powerpoint_template_name: "Имя шаблона PowerPoint",
        template_description: "Описание шаблона",
        action_add_template: "Добавить",
        action_change_template: "Изменить",      
        action_edit_template_properties: "Свойства",
        add_presentation_template: "Добавить шаблон презентации",
    	add_spreadsheet_template: "Добавить шаблон электронной таблицы",
    	add_doc_template: "Добавить шаблон документов",    	
    	file_type_doc_hover: "Нужно задать действительный файл шаблона документов текстового редактора.<br><br>Допустимые типы MIME: ${0}",
    	file_type_doc_error: "Нужно задать действительный файл шаблона документов текстового редактора.<br><br>Выбранный тип mime документа: ${0}<br><br>Допустимые типы MIME: ${1}",
    	file_type_presentation_hover: "Нужно задать действительный файл шаблона презентации.<br><br>Допустимые типы MIME: ${0}",
    	file_type_presentation_error: "Нужно задать действительный файл шаблона презентации.<br><br>Выбранный тип mime документа: ${0}<br><br>Допустимые типы MIME: ${1}",
    	file_type_spreadsheet_hover: "Нужно задать действительный файл шаблона электронной таблицы.<br><br>Допустимые типы MIME: ${0}",
    	file_type_spreadsheet_error: "Нужно задать действительный файл шаблона электронной таблицы.<br><br>Выбранный тип mime документа: ${0}<br><br>Допустимые типы MIME: ${1}",
    	office_online_only_one_template_error: "Можно выбрать только один файл.",
    	change_presentation_template: "Изменить шаблон презентации",
    	change_spreadsheet_template: "Изменить шаблон электронной таблицы",
    	change_doc_template: "Изменить шаблон документа",
    	change_button: "Изменить",
	    new_document_dialog_doc_title: "Новый документ",
	    new_document_dialog_presentation_title: "Новая презентация",
	    new_document_dialog_spreadsheet_title: "Новая электронная таблица",
	    new_document_dialog_title_label: "Заголовок:",
	    new_document_dialog_title_hover: "Введите заголовок для этого документа.",
	    new_document_dialog_title_missing_message: "Вы обязательно должны задать заголовок.",
	    office_online_save_before_adding_templates_title: "Сохраните изменения в репозитории.",
	    office_online_save_before_adding_templates_error: "Вы не можете добавлять шаблоны Office, пока не сохраните изменения, сделанные вами в репозитории. Нажмите кнопку <b>Сохранить и закрыть</b>, а затем снова откройте репозиторий, чтобы добавить шаблоны Office.",
	    copy_to_OOS_dialog_doc_title: "Новый документ",
	    office_online_checkin_cancelcheckout_message: "Этот документ изменяют в Microsoft Office Online. Вы не можете ни активировать документ, ни отменить его резервирование, пока он открыт в Microsoft Office Online.",
	    new_document_classification: "Классификация:",
	    new_document_classification_help: "Позволяет сбросить класс, свойства и родительскую папку (если она существует) исходного документа. При добавлении документа с использованием шаблона ввода шаблон ввода исходного документа будет выбран автоматически (если он существует). Свойства исходного документа используются как значения по умолчанию, но папка и класс, заданные в шаблоне ввода, сохраняются.",
		new_document_classification_use_source_document: "Использовать исходный документ:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Значок типа ${0}",
		repository_name_and_type: "Имя и тип ${0}",
		select_class_label: "Выбрать ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Просмотр сведений",
		detail_view_button: "Подробности",
		magazine_view_button_tooltip: "Представление в виде журнала",
		magazine_view_button: "Журнал",
		filmstrip_view_button_tooltip: "Представление в виде диафильма",
		filmstrip_view_button: "Диафильм",

		magazine_view_show: "Показать в журнальном виде",
		detail_view_show: "Показать в подробном виде",

		total_count_item: "элемент",
		total_count_items: "элементы",
		total_count_more_items: "Число элементов превышает ${0}",

		extension_changed: "Расширение выбранного вами файла не совпадает с расширением исходного файла.  Выберите другой файл.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Выбранное средство просмотра не поддерживает все типы файлов. Если вы сохраните это отображение средства просмотра, у вас могут возникнуть проблемы при просмотре документов. Рекомендуется выбрать средство просмотра, поддерживающее все типы файлов, если выбрана опция Все типы файлов.<br><br><b>Подсказка:</b> Все типы файлов поддерживаются следующими средствами просмотра:<ul><li>Программа просмотра апплетов</li><li>Программа просмотра AJAX</li><li>Преобразование в HTML</li><li>Преобразование в PDF</li><li>Браузер</li></ul>",
		file_type_any: "Все типы файлов",
		file_type_any_hover: "Выберите эту опцию, чтобы использовать выбранное средство просмотра для просмотра всех документов независимо от типа файлов. Эта опция поддерживается следующими средствами просмотра:<br><br><ul><li>Программа просмотра апплетов</li><li>Программа просмотра AJAX</li><li>Преобразование в HTML</li><li>Преобразование в PDF</li><li>Браузер</li></ul><br><br><b>Помните:</b> если вы хотите большую часть времени использовать какие-то конкретные средства просмотра, все созданные вами отображения, которые используют эту опцию, следует переместить в конец карты средств просмотра. ",
		file_type_input: "Новый тип файлов:",

		mime_type_input: "Новый тип MIME:",
		mime_type_input_invalid: "Новый тип MIME не должен содержать следующих символов:",
		mime_type_available: "Доступные типы MIME",
		mime_type_selected: "Выбранные типы MIME",
		file_type_input: "Новый тип файлов:",
		file_type_input_invalid: "Новый тип файлов не должен содержать следующих символов:",
		file_type_available: "Доступные типы файлов",
		file_type_selected: "Выбранные типы файлов",
		file_type_header: "Тип файла",
		viewer: "Средство просмотра:",
		viewer_viewer: "Средство просмотра",
		viewer_view: "Представление",
		viewer_preview: "Предварительный просмотр",
		viewer_merge_and_split: "Объединить и разбить",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Только предварительный просмотр",
		preview_only_label: "(предварительный просмотр)",
		preview_only_hover: "Это отображение просмотра будет использоваться, только если пользователь щелкнет по <b>Предварительный просмотр</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Этот репозиторий не поддерживает просмотр. Выберите другой репозиторий.",

		repository_community_teamspace_message: "Другой репозиторий уже назначен репозиторием библиотек сообщества. Если вы хотите продолжить использовать существующий репозиторий как репозиторий библиотек сообщества, выберите <b>Нет</b>, прежде чем сохранять свои изменения, чтобы не позволить заменить существующий репозиторий данным репозиторием.",

		favorites_empty: "У вас еще нет никакого избранного.",
		syncItems_empty: "У вас еще нет никаких синхронизированных файлов.",

		root_folder_id: "ID корневой папки",
		unified_searches: "Поиски в нескольких репозиториях:",
		max_results: "Число результатов:",
		direct_retrieve_enabled: "Прямое получение:",
		itemTypesToDisplay: "Типы элементов для показа:",
		allItemTypes: "Все типы элементов",
		include_attr_group_name: "Описания групп атрибутов в выводимых именах атрибутов:",
		admin_repcfg_include_attr_group_name_hover: "По умолчанию описание группы атрибутов включается в имена для атрибутов групп атрибутов. Это поможет пользователям увидеть, к какой группе атрибутов принадлежит атрибут группы атрибутов, когда они работают с атрибутами.<br>Например, пользователи могут увидеть следующее имя для атрибута группы атрибутов: Document Settings.Document Type.<br><br>Если вы выключите эту опцию, для имени атрибута группы атрибутов будет использоваться только описание атрибута.<br>Например, пользователи увидят следующее имя: Document Type.<br><br>Без описания группы атрибутов пользователям, возможно, не удастся сделать заключение о том, является ли Document Type простым атрибутом, или атрибутом группы атрибутов.",
		documentItemTypesOnly: "Только типы элементов моделей документов",
		object_store: "Символьное имя склада объектов:",
		object_store_display_name: "Имя для вывода склада объектов:",
		teamspaceUpgradeMsg: "При сохранении конфигурации репозитория ваши пространства команд будут обновлены. Если у вас много пространств команд, обновление может занять несколько минут.",
		synchUpgradeMsg: "При сохранении конфигурации репозитория модуль синхронизации для этого репозитория будет обновлен.",
		protocol: "Протокол:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID репозитория CMIS:",
		cmis_url: "URL документа службы привязки CMIS AtomPub:",
		trace_level: "Уровень трассировки",
		trace_dir: "Каталог трассировки",
		temp_dir: "Временный каталог",
		show_document_location: "Показать расположение документа",
		max_folders: "Максимальное число папок",
		afp_conversion: "Преобразование AFP",
		line_conversion: "Линейное преобразование данных",
		max_hits: "Максимальное число совпадений",
		folder_search_expresssion: "Выражение для поиска папки",
		max_item_types: "Максимальное число типов элементов",
		max_worklists: "Максимальное число рабочих списков",
		update_storage_collection: "Обновить собрание хранения",
		include_mime_types_in_search_results: "Включить типы MIME в результаты поиска",
		object_type: "Тип объектов",
		object_type_document: "Документы",
		object_type_folder: "Папки",
		file_label: "Файл:",
		plugin_jarfile_path_label: "Путь файла JAR:",
		plugin_classfolder_path_label: "Путь файла классов:",
		plugin_classname_label: "Имя класса:",
		plugin_id_label: "ID подключаемого модуля:",
		class_label: "Класс",
		configuration: "Конфигурация",
		connect_repository: "Соединиться...",
		server_type: "Тип сервера",
		timeout_in_seconds: "Срок ожидания (в секундах):",
		default_search_template: "Поиск по умолчанию",
		search_filtered_properties: "Доступные для поиска свойства",
		property_contains_label: "Свойство содержит",
		class_contains_label: "Класс содержит",
		search_filtered_operators: "Операторы поиска",
		default_search_results: "Результаты поиска",
		data_type: "Тип данных",
		status_bar: "Строка состояния",
		operators_for: "Операторы для:",
		currentUser: "Текущий пользователь",
		nameContains: "Имя содержит",
		searchFor: "Искать",
		server_autentication: "Аутентификация на сервере (OAuth 2.0 с JWT)",
		standard_authentication: "Стандартная аутентификация (3-legged OAuth2.0)",
		developer_authentication: "Аутентификация разработчика",
		enterprise_id: "ID предприятия:",
		public_key_id: "ID общедоступного ключа:",
		private_key_path: "Путь к файлу секретных ключей:",
		server_user_email: "Электронная почта пользователя сервера",

		filter_builder_tooltip: "Определить фильтр",

		// Launch bar
		launchbar_home: "Открыть домашнюю страницу",
		launchbar_favorites: "Открыть избранное",
		launchbar_browse: "Открыть представление обзора",
		launchbar_browse_popup: "Открыть всплывающий список обзора",
		launchbar_search: "Открыть представление поиска",
		launchbar_search_popup: "Открыть всплывающий список поиска",
		launchbar_teamspaces: "Открыть представление пространства команды",
		launchbar_teamspaces_popup: "Открыть всплывающий список пространств команд",
		launchbar_work: "Открыть представление работ",
		launchbar_work_popup: "Открыть всплывающий список работ",
		launchbar_entry_templates: "Открыть представление шаблонов ввода",
		launchbar_entry_templates_popup: "Открыть всплывающий список шаблонов ввода",
		launchbar_admin: "Открыть административное представление",

		admin_sync_server: "Службы синхронизации",
		admin_settings: "Параметры",
		admin_interface_text: "Подписи",
		admin_interface_text_desktop: "Рабочий стол:",
		admin_desktops: "Рабочие столы",
		admin_repositories: "Репозитории",
		admin_mobile: "Мобильные программы",
		admin_menus: "Меню",
		admin_reason_codes: "Причины редакции",
		admin_plugins: "Подключаемые модули",
		admin_plugins_state_enabled: "Подключаемый модуль включен",
		admin_plugins_state_disabled: "Подключаемый модуль выключен",
		admin_plugins_version: "Версия:",
		admin_plugins_version_heading: "Версия",
		admin_plugins_icon: "Значок подключаемого модуля",
		admin_viewer_mapping_icon: "Значок отображения средства просмотра",
		admin_viewer_defs: "Карты средств просмотра",
		admin_viewer_dialog_title: "Отображение",
		admin_viewer_dialog_new_title: "Новое отображение",
		admin_viewer_dialog_instructions: "Отображение указывает, какое средство просмотра следует использовать для файлов в репозитории. Можно создать несколько отображений, чтобы задать разные средства просмотра для разных типов файлов. Для определения отображения можно использовать либо тип MIME, либо расширение файла. Отображения с расширениями файлов будут отображены на имена документов. Например, отображение с установленным для типа файлов gif будет отображено на имена документов, заканчивающиеся расширением .gif",
		admin_desktop_viewer_defs: "Карта средство просмотра:",
		admin_desktop_viewer_defs_hover: "Карта средств просмотра указывает, какое средство просмотра следует использовать для открытия разных типов документов в репозитории.<br><br>Вы можете создать новые карты средств просмотра в разделе <b>Карты средств просмотра</b> в утилите администрирования.",
		admin_desktops_used: "Используется в рабочих столах",
		admin_desktop_additional_settings: "Дополнительные параметры:",
		admin_default_desktop: "Задать как рабочий стол по умолчанию",
		admin_default_desktop_header: "Рабочий стол по умолчанию",
		admin_layout_tab_title: "Схема",
		admin_desktop_icon: "Значок рабочего стола",

		// Themes
		admin_themes: "Темы",
		admin_theme_list_instructions: "Вы можете создать тему, чтобы упростить настройку веб-клиента для вашей организации. Можно создать несколько тем, если вы хотите использовать разные цвета, шрифты или логотипы для разных рабочих столов в вашей среде.<br><br>После создания темы ее можно применить к рабочему столу, сконфигурировав тему на вкладке <b>Вид</b> на рабочем столе.",
		admin_theme_instructions: "Создайте тему, чтобы управлять цветами и шрифтами, показанными в веб-клиенте. Кроме того, можно использовать тему, чтобы изменить логотип, имя приложения и текст авторского права, показанные на странице входа в систему и в баннере.",
		admin_theme_heading: "Тема: <b>${0}</b>",
		admin_new_theme: "Новая тема",
		admin_text_theme: "Тема",
		admin_delete_confirmation_themes: "Удалить выбранные темы?\nВыбрано ${0} тем.",
		admin_theme_color: "Цвет",
		admin_theme_text: "Текст",
		admin_theme_solid: "Сплошная",
		admin_theme_gradient: "Градиент",
		admin_theme_box: "Поле",
		admin_theme_color_label: "Цвет ${0}:",
		admin_theme_name_invalid: "Имя темы не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID темы должен быть уникальным, и после сохранения темы изменить ID будет нельзя.<br><br>ID может содержать только алфавитно-цифровые символы.",
		admin_theme_name_hover: "Имя не должно содержать следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Автоматически",
		admin_theme_logo_url_hover: "Введите URL файла логотипа. Если логотип находится на том же сервере веб-программ, что и веб-клиент, введите относительный URL, например: /mycustomizations/banner_logo.png<br><br>Рекомендуется, чтобы у логотипа был прозрачный фон.",
		admin_theme_color_palette_title_heading: "Цветовая палитра",
		admin_theme_color_palette_help_text: "Создайте цветовую палитру для вашей темы, используя шестнадцатеричное значение или селектор цветов. Можно добавить столько цветов, сколько вам нужно.",
		admin_theme_color_add_button_label: "Добавить цвет",
		admin_theme_color_remove_button_label: "Удалить цвет",
		admin_theme_global_title_heading: "Элементы на уровне приложения",
		admin_theme_global_font: "Семейство шрифтов:",
		admin_theme_global_font_hover: "Выберите шрифт, который следует использовать в веб-клиенте. Шрифты перечислены в порядке приоритета; следующий шрифт в списке используется, только если предыдущий шрифт не установлен на компьютере-клиенте.",
		admin_theme_global_framework_color_label: "Цвет каркаса:",
		admin_theme_global_framework_color_hover: "Выберите цвет, который следует использовать для следующих элементов:<ul><li>Строки заголовков в диалоговых окнах</li><li>Цвет выделения в верхней части выбранной вкладки</li><li>Значки представлений списка содержимого (представление подробностей, представление журнала, представление диафильма)</li></ul><br>Этот цвет не используется для разделителей между разделами веб-клиента. Если вы хотите изменить цвет разделителей, вы должны создать подключаемый модуль, чтобы обеспечить пользовательский файл CSS.",
		admin_theme_color_global_toolbar: "Цвет глобальной панели инструментов:",
		admin_theme_color_global_toolbar_hover: "Если вы включите в веб-клиент глобальную панель инструментов, выберите цвет панели инструментов.<br><br><b>Совет:</b> Панель инструментов появляется в баннере в верхней части веб-клиента, поэтому цвет панели инструментов должен являться дополнительным по отношению к цвету баннера.",
		admin_theme_global_selected_color: "Выбранный цвет элемента:",
		admin_theme_global_selected_color_hover: "Выберите цвет, который следует использовать, когда элементы выбраны в дереве обзора,  дереве поиска и списке содержимого.<br><br>Цвет при наведении указателя мыши (когда пользователь наводит указатель мыши на элемент) берется из этого цвета.",
		admin_theme_global_link_color: "Цвет ссылок:",
		admin_theme_global_link_color_hover: "Выберите цвет, который следует использовать для всех доступных для щелчка URL в веб-клиенте. Например, этот цвет используется в ссылках Узнать подробнее, которые появляются в разных местах в веб-клиенте.",
		admin_theme_login_title_heading: "Элементы страницы входа в систему",
		admin_theme_page_background_label: "Цвет фона страницы входа в систему:",
		admin_theme_login_page_background_hover: "Выберите цвет, который следует показать позади панели входа в систему.",
		admin_theme_login_pane_background_label: "Цвет фона панели входа в систему:",
		admin_theme_login_pane_background_hover: "Выберите цвет, который следует показать для панели входа в систему. Этот цвет должен дополнять цвет фона панели входа в систему.",
		admin_theme_text_color: "Цвет текста:",
		admin_theme_login_pane_text_color_hover: "Выберите цвет, который следует использовать для текста в панели входа в систему. Этот цвет используется для текста приветствия и меток полей. Этот цвет должен отличаться от цвета фона панели входа в систему.",
		admin_theme_copyright_text: "Текст авторского права:",
		admin_theme_copyright_text_hover: "Укажите, нужно ли показывать текст авторского права на странице входа в систему.",
		admin_theme_copyright_selection_IBM: "Авторские права IBM",
		admin_theme_copyright_selection_none: "Нет текста авторских прав",
		admin_theme_banner_title_heading: "Элементы баннера",
		admin_theme_text_icons_color: "Цвет текста и значков:",
		admin_theme_icon_color_label: "Цвет значка:",
		admin_theme_shadow_label: "Тень:",
		admin_theme_banner_text_icons_hover: "Выберите цвет, который следует использовать для текста и значков в баннере. Этот цвет должен отличаться от цвета фона баннера.",
		admin_theme_banner_product_name_label: "Имя продукта:",
		admin_theme_banner_product_name_hover: "При создании рабочего стола можно задать пользовательское имя, которое появится для приложения. Если вы не зададите пользовательское имя, в качестве имени продукта будет использоваться IBM Content Navigator. Укажите, следует ли использовать имя приложения, заданное на рабочем столе, или изображение вместо имени.",
		admin_theme_banner_product_name_desktop_defined_label: "Использовать имя с рабочего стола",
		admin_theme_banner_product_name_image: "Использовать пользовательский логотип (URL)",
		admin_theme_background_color_label: "Цвет фона:",
		admin_theme_style_label: "Стиль:",
		admin_theme_banner_color_hover: "Выберите цвет, который следует использовать для баннера вверху приложения.<br><br><b>Совет:</b>Убедитесь, что цвет текста в баннере отличается от цвета фона баннера.",
		admin_theme_buttons_title_heading: "Кнопки",
		admin_theme_navigation_title_heading: "Элементы навигации",
		admin_theme_navigation_icon_selected_label: "Выбранный цвет значка:",
		admin_theme_navigation_background_hover: "Выберите цвет, который следует использовать для фона строки навигации функции.",
		admin_theme_navigation_icon_color_hover: "Выберите цвет, который следует использовать для значков в строке навигации функции. При использовании на рабочем столе схемы по умолчанию этот цвет должен контрастировать с фоном раскрывающегося меню функций. При использовании на рабочем столе классической схемы этот цвет должен контрастировать с фоном строки навигации функций. ",
		admin_theme_navigation_icon_selected_hover: "Выберите цвет, который следует использовать для выбранной функции в строке навигации функции. Цвет должен дополнять цвет значков и цвет фона строки навигации функции.<br><br>При использовании на рабочем столе классической схемы этот цвет используется как цвет при наведении указателя мыши в строке навигации функции.",
		admin_theme_button_background_color_hover: "Выберите цвет, который следует использовать для фона кнопок.",
		admin_theme_button_style_hover: "Выберите стиль кнопки.",
		admin_theme_button_text_icon_color_hover: "Выберите цвет, который следует использовать для текста и изображений на кнопках.",
		admin_theme_no_logo_label: "Без логотипа",
		admin_theme_custom_logo_label: "Пользовательский логотип (URL)",
		admin_theme_banner_type: "Стиль заполнения баннера:",
		admin_theme_banner_type_hover: "Укажите, должен ли баннер быть сплошного цвета или цвета в виде градиента. Если вы зададите баннер с градиентом, заданный вами для баннера цвет будет самым темным цветом в баннере.<br><br><b>Совет:</b>Убедитесь, что цвет текста в баннере отличается от цвета фона баннера.",
		admin_theme_icon: "Значок темы",
		admin_theme_buttons_and_links_title_heading: "Кнопки, поля и ссылки",
		admin_theme_button_style_label: "Стиль кнопки:",
		admin_theme_theme_style_label: "Стиль темы:",
		admin_theme_theme_style_hover: "Выберите стиль, на котором будет основана тема. Стиль можно изменить в любой момент при создании или изменении темы. При переходе от одного стиля к другому для параметров темы переустанавливаются значения по умолчанию.",
		admin_theme_accent_color_label: "Цвет выделения:",
		admin_theme_accent_color_hover: "Выберите цвет, который следует использовать для полосы в верхней части диалогового окна и для загружающегося счетчика.",
		admin_theme_global_toolbar_text_color_label: "Цвет текста глобальной панели инструментов:",
		admin_theme_global_toolbar_text_color_hover: "Если вы включите в веб-клиент глобальную панель инструментов, выберите цвет, который следует использовать для текста в панели инструментов.",
		admin_theme_banner_text_color_hover: "Выберите цвет, который следует использовать для текста в баннере.",
		admin_theme_banner_icon_color_hover: "Выберите цвет, который следует использовать для значков в баннере.",
		admin_theme_button_color_label: "Цвет:",
		admin_theme_button_color_hover: "Выберите цвет, который следует использовать для следующих элементов:<ul><li>Строки заголовков в диалоговых окнах</li><li>Цвет выделения в верхней части выбранной вкладки</li><li>Значки представлений списка содержимого (представление подробностей, представление журнала, представление диафильма)</li><li>Кнопки, поля и ссылки</li></ul>Из этого цвета берется цвет, который используется, когда пользователь наводит указатель мыши на кнопку. Этот цвет не используется для разделителей между разделами веб-клиента. Если вы хотите изменить цвет разделителей, вы должны создать подключаемый модуль, чтобы обеспечить пользовательский файл CSS.",
		admin_theme_theme_style_col_header: "Стиль темы",

		admin_syncserver_consistency_checker: "Программа проверки непротиворечивости:",
		admin_syncserver_consistency_checker_hover: "Запустите программу проверки непротиворечивости, чтобы у баз данных службы синхронизации была текущая информация о состоянии каждого элемента, находящегося на сервере. Например, запустите программу проверки непротиворечивости после отключения базы данных служб синхронизации, чтобы получить информацию о документах, которые были обновлены в репозитории во время отключения.",
		admin_syncserver_consistency_checker_button: "Запустить программу проверки непротиворечивости",
		admin_syncserver_consistency_checker_started: "Запущено:",
		admin_syncserver_consistency_checker_ended: "Завершено:",
		admin_syncserver_consistency_checker_duration: "Длительность:",
		admin_syncserver_consistency_checker_items_processed: "Число обработанных элементов синхронизации:",
		admin_syncserver_consistency_checker_items_processed_success: "Число успешно обработанных элементов синхронизации:",
		admin_syncserver_consistency_checker_items_discovered: "Число новых обнаруженных элементов репозитория:",
		admin_syncserver_consistency_checker_change_updates: "Общее число обновлений:",
		admin_syncserver_consistency_checker_state: "Штат:",
		admin_syncserver_consistency_checker_state_done: "Готово",
		admin_syncserver_consistency_checker_state_running: "Выполняется",
		admin_syncserver_consistency_checker_user: "Кем передано:",
		admin_syncserver_consistency_checker_scheduled: "Запланировано:",

		admin_syncserver_dbcleanup: "Очистка базы данных",
		admin_syncserver_dbcleanup_hover: "Запустите утилиту очистки базы данных, чтобы удалить все неиспользуемые устройства и элементы, которые больше не синхронизируются из базы данных.",
		admin_syncserver_dbcleanup_button: "Очистка базы данных",
		admin_syncserver_dbcleanup_state_done: "Готово",
		admin_syncserver_dbcleanup_state_running: "Выполняется",
		admin_syncserver_dbcleanup_started: "Запущено:",
		admin_syncserver_dbcleanup_ended: "Завершено:",
		admin_syncserver_dbcleanup_state: "Штат:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Удаленные репозитории:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Синхронизированный элемент удален:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Удаленные устройства:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Устройства с истекшим сроком действия:",

		admin_syncserver_publicSyncUrl: "Общедоступный URL служб синхронизации:",
		admin_syncserver_publicSyncUrl_hover: "Задайте URL, используя который, репозитории смогут взаимодействовать со службами синхронизации IBM Content Navigator. Формат URL по умолчанию: http://общедоступный_URL_синхронизации:номер_порта/sync/notify.",

		admin_syncserver_managed: "Параметры клиента синхронизации:",
		admin_syncserver_managed_hover: "Пользователи не могут изменить эти параметры на клиенте синхронизации IBM Content Navigator.",
		admin_syncserver_managed_subfolder: "Уровни папок для синхронизации",
		admin_syncserver_managed_subfolder_hover: "Если пользователь синхронизирует папку, задайте максимальное число папок, которые будут синхронизироваться. Например, если пользователь задаст три уровня папок, будет синхронизироваться папка, которую синхронизирует пользователь, и два уровня подпапок.<br><br>Убедитесь, что ваша среда масштабирована для поддержки объема трафика синхронизации, созданного этим параметром.",
		admin_syncserver_managed_subfolder_all: "Все подпапки",
		admin_syncserver_managed_subfolder_none: "Нет подпапок",
		admin_syncserver_managed_subfolder_no_more: "Ограниченные уровни",
		admin_syncserver_managed_subfolder_levels: "папки",
		admin_syncserver_managed_schedule: "Расписание синхронизации",
		admin_syncserver_managed_schedule_hover: "Убедитесь, что ваша среда масштабирована для поддержки объема трафика синхронизации, созданного расписанием синхронизации.<br><br>Максимальный интервал равен 24 часам или 1440 минутам.<br><br>Пользователи могут переопределить расписание синхронизации, щелкнув по <b>Синхронизировать сейчас</b> на клиенте.",
		admin_syncserver_managed_schedule_manual: "Синхронизировать вручную",
		admin_syncserver_managed_schedule_continuous: "Синхронизировать постоянно",
		admin_syncserver_managed_schedule_every: "Синхронизировать с заданными интервалами",
		admin_syncserver_managed_schedule_minutes: "мин.",
		admin_syncserver_managed_schedule_hours: "ч.",

		// redaction codes
		admin_new_reason_code: "Новая причина редакции",		
		admin_reason_code_name_invalid: "Имя причины редакции не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Описание не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Описание не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Имя не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Описание",
		admin_reason_code_applications_hover: "Список приложений Datacap, ссылающихся на эту причину редакции.",
		admin_reason_code_applications: "Приложения Datacap",
		admin_delete_confirmation_reason_codes: "Удалить выбранные причины редакции?",
		admin_delete_confirmation_reason_code: "Удалить выбранную причину редакции?",
		admin_reason_code_heading: "Причина редакции: <b>${0}</b>",
		admin_reason_code_list_instructions: "Причины редакции указывают на причины, по которым конфиденциальные данные защищены от просмотра. Каждая причина указывает на тип конфиденциальных данных, которые скрыты от главных пользователей.",
		admin_reason_code_instructions: "Вы можете создать причину редакции для каждого типа конфиденциальных данных. Вы можете затем использовать эту причину в политике редакции для того, чтобы определить, кто может просматривать данные, а кто может создавать или исправлять редакции.",
		admin_reason_code_applications_label: "Приложения Datacap",
		admin_reason_code_repositories: "Репозитории",
		admin_reason_code_repositories_label: "Репозитории",
		admin_reason_code_repositories_hover: "Список репозиториев ICN, ссылающихся на эту причину редакции.",
		admin_reason_code_repositories_default_value: "Не задано",
		admin_reason_code_description_label: "Описание",
		admin_reason_code_applications_default_value: "Не задано",
		admin_redaction_reasons: "Причины редакции",
		admin_redactions: "Редакции на основе ролей",
		admin_redactions_policies_roles: "Политика и роли",
		admin_reasons: "Причины",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID нельзя изменить. Его можно скопировать в буфер обмена.",
		// Role based administration
		admin_rba: "Администрирование рабочего стола на основе ролей",
		admin_rba_mobile_access_enabled: "Этот рабочий стол включен для мобильного доступа.",
		admin_rba_mobile_access_disabled: "Этот рабочий стол не включен для мобильного доступа.",
		admin_rba_confirm_delete_multiple: "Хотите удалить выбранные административные роли?",
		admin_rba_confirm_delete_single: "Хотите удалить выбранную административную роль?",
		admin_rba_delete_multi_role_desktop: "Одна или несколько выбранных вами ролей назначены для рабочего стола. Прежде чем вы сможете удалить роли, вы должны удалить роли из рабочих столов.",
		admin_rba_delete_single_role_desktop: "Выбранная вами роль назначена для рабочего стола ${0}. Прежде чем вы сможете удалить роль, вы должны удалить ее из рабочего стола.",
		admin_desktop: "Рабочий стол",
		admin_rba_instructions: "Вы можете создавать административные роли рабочего стола и управлять этими ролями, с которыми связаны полномочия, предоставленные администраторам рабочего стола.",
		admin_rba_not_used: "${0} не используется ни на каких рабочих столах.",
		admin_rba_desktops: "<b>${0} используется на следующих рабочих столах:</b>",
		admin_rba_new_role: "Новая роль",
		admin_rba_name_invalid: "Имя административной роли не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Описание не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Описание не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Имя не должно содержать ни одного из следующих символов: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Описание:</b> ${0}",
		admin_rba_membership: "Членство",
		admin_rba_general_priv: "Общие",
		admin_rba_appearance_priv: "Вид",
		admin_rba_desktop_config_priv: "Конфигурация рабочего стола",
		admin_rba_app_name_priv: "Имя приложения",
		admin_rba_theme_priv: "Тема",
		admin_rba_viewer_map_priv: "Карта просмотра",
		admin_rba_merge_split_priv: "Объединить и разбить",
		admin_rba_sync_svc_priv: "Службы синхронизации",
		admin_rba_menus_priv: "Меню",
		admin_rba_edit_svc_priv: "Службы редактирования",
		admin_rba_toolbars_priv: "Панели инструментов",
		admin_rba_ctx_menus_priv: "Контекстные меню",
		admin_rba_office_ribbon_priv: "Команды ленточной панели MS Office",
		admin_rba_office_menues_priv: "Контекстные меню MS Office",
		admin_rba_addl_settings_priv: "Дополнительные параметры",
		admin_rba_mobile_priv: "Мобильные программы",
		admin_rba_add_doc_dlg_priv: "Диалоговое окно Добавить документ",
		admin_rba_doc_mgmt_priv: "Управление документами",
		admin_rba_def_redaction_priv: "Опция цензурирования по умолчанию",
		admin_rba_add_photos_priv: "Добавить фотографии с камеры и из библиотеки фотографий",
		admin_rba_time_stamp_priv: "Отметка времени",
		admin_rba_add_docs_folders_priv: "Добавить документы и создать папки в репозитории",
		admin_rba_open_docs_priv: "Открывать документы в других программах",
		admin_rba_office_config_priv: "Конфигурация Office",
		admin_rba_tab_label_priv: "Метка вкладки IBM ECM",
		admin_rba_feature_sel_priv: "Выбор функций",
		admin_rba_general_config_priv: "Общая конфигурация",
		admin_rba_favorites_priv: "Избранное",
		admin_rba_add_options_priv: "Добавить опции в группу изменений",
		admin_rba_browse_priv: "Обзор",
		admin_rba_outlook_int_priv: "Интеграция Outlook",
		admin_rba_search_priv: "Поиск",
		admin_rba_layout_priv: "Схема",
		admin_rba_case_priv: "Дело",
		admin_rba_desktop_feat_priv: "Функции рабочего стола",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Показанные функции",
		admin_rba_branding_priv: "Брендинг",
		admin_rba_home_priv: "Домой",
		admin_rba_main_color_priv: "Основной цвет",
		admin_rba_sec_color_priv: "Вторичный цвет",
		admin_rba_teamspaces_priv: "Пространства команд",
		admin_rba_rbr_priv: "Редакция на основе ролей",
		admin_rba_et_mgr_priv: "Менеджер шаблонов ввода",
		admin_rba_policies_roles_priv: "Управление политиками и ролями",
		admin_rba_work_priv: "Работа",
		admin_rba_reasons_priv: "Коды причин",
		admin_rba_tasks_priv: "Асинхронные операции",
		admin_rba_auth_priv: "Аутентификация",
		admin_rba_all_privs: "Все полномочия",
		admin_rba_some_privs: "Некоторые полномочия",
		admin_rba_no_privs: "Нет полномочий",
		admin_add_users_groups_priv: "Добавить пользователей и группы",
		admin_url_features_priv: "Управление функциями URL",
		admin_plugin_features_priv: "Управление функциями plugin",
		admin_addl_components_priv: "Дополнительные компоненты",
		admin_global_toolbar_priv: "Глобальная панель инструментов",
		admin_status_bar_priv: "Строка состояния",
		admin_refresh_message: "Чтобы использовать обновленные данные, нужно обновить браузер.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Для использования обновленного рабочего стола по умолчанию необходимо обновить браузер.",
		admin_desktop_refresh_message: "Для использования обновленного рабочего стола необходимо обновить браузер.",
		admin_action_open: "Открыть",
		admin_action_edit: "Изменить",
		admin_action_copy: "Копировать",
		admin_action_delete: "Удалить",
		admin_action_copy: "Копировать",
		admin_action_new: "Создать новый",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Этот ID уже используется. Укажите уникальный ID.",

		admin_searchable_properties_for: "Свойства, доступные для поиска, для:",
		admin_repository_new: "Новый репозиторий",
		admin_desktop_new: "Новый рабочий стол",
		admin_desktop_file_documents: "Потребовать от пользователей сохранять новые документы и папки в папке",
		admin_desktop_file_documents_hover: "Выберите эту опцию, если хотите потребовать, чтобы пользователи выбирали папку при добавлении элементов в репозиторий. Если вы не выберете эту опцию, пользователи смогут добавить документы (IBM FileNet P8) или документы и папки (IBM Content Manager), не помещая их в папку.",
		admin_desktop_show_security_tab: "Показать параметры защиты при выполнении действий добавления и активации",
		admin_desktop_show_security_hover: "<b>Только для пользователей IBM FileNet P8.</b>  Выберите эту опцию, если вы хотите разрешить пользователям изменять защиту документов и папок при их добавлении или активации на этом рабочем столе.",
		admin_desktop_configure_security_inheritance: "Разрешить пользователям конфигурировать наследование защиты для папок",
		admin_desktop_configure_security_inheritance_hover: "<b>Только для пользователей IBM FileNet P8.</b>  Выберите эту опцию, если хотите, чтобы пользователи могли настраивать доступ к элементами в папке, управляя наследованием защиты папок. Если вы выберете эту опцию, пользователи смогут указывать, смогут ли пользователи или группы наследовать защиту от:<ul><li>Папки</li><li>Папки и ее непосредственных подпапок</li><li>Папки и всех ее подпапок</li></ul>",
		admin_desktop_appearance: "Вид",
		admin_desktop_appearance_instruction: "Можно настроить внешний вид рабочего стола, изменив страницу входа в систему и баннер, которые  будут показаны для рабочего стола.",
		admin_desktop_layout: "Схема:",
		admin_desktop_layout_hover: "Схема указывает, какие функции могут появиться в веб-клиенте и как будет расположено содержимое в веб-клиенте.<br><br><b>Совет:</b> Вы можете задать пользовательские схемы, создав подключаемые модули. Прежде чем вы сможете выбрать пользовательскую схему, вы должны зарегистрировать подключаемый модуль в утилите администрирования.",
		admin_desktop_layout_default: "По умолчанию",
		admin_desktop_layout_custom: "Пользовательская",
		admin_desktop_enable_workflow_email: "Включить этот рабочий стол для электронных уведомлений рабочего потока FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Только для пользователей FileNet P8. Выберите эту опцию, если вы хотите разрешить пользователям открывать веб-клиент с использованием адресов URL, включенных в электронные уведомления, которые генерирует механизм процессов.<br /><br />Если вы не включите эту опцию ни для каких рабочих столов, пользователи не смогут входить в систему веб-клиента, используя URL в уведомлениях.<br /><br />Если вы включите эту опцию на нескольких рабочих столах, и окажется, что более одного рабочего стола соответствует критериям, заданным в URL в уведомлении, веб-клиент будет использовать первый рабочий стол, соответствующий критериям. ",
		admin_desktop_prevent_create_new_search: "Запретить пользователям создавать поиски",
		admin_desktop_prevent_create_new_search_hover: "Эта опция ограничивает пользователей использованием только существующих поисков без возможности создавать неограниченные поиски, которые не могут быть оптимизированы.</br></br>Этот параметр не влияет на пространства команд. Право на создание поисков в пространстве команды управляется ролью, которая есть у пользователя для данного пространства команды.",
		admin_desktop_prevent_create_new_unified_search: "Запретить пользователям создавать поиски в нескольких репозиториях",
		admin_desktop_prevent_create_new_unified_search_hover: "Эта опция ограничивает пользователей использованием только существующих поисков в нескольких репозиториях без возможности создавать неограниченные поиски в нескольких репозиториях, которые не могут быть оптимизированы.",
		admin_desktop_hide_entry_template_not_found_warning: "Скройте предупреждение, которое появилось, когда не был найден связанный шаблон ввода",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Выберите эту опцию, если хотите скрыть сообщение с предупреждением, которое появляется, когда вносятся изменения в свойства элемента, а шаблон ввода, связанный с этим элементам не найден.",
		admin_desktop_show_class_role_security_selection: "Разрешить пользователям конфигурировать защиту на основе ролей в шаблонах ввода",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Только для пользователей IBM FileNet P8.</b> Выберите эту опцию, если хотите, чтобы пользователи конфигурировали шаблоны ввода для использования защиты на основе ролей при настройке защиты для документов и папок с использованием шаблонов ввода. Если вы выберете эту опцию, редакторы шаблонов ввода смогут указать, применяются ли объекты ролей защиты к определению шаблона ввода.",
		admin_desktop_show_primary_multi_part: "Открыть в средстве просмотра только основной документ",
		admin_desktop_show_primary_multi_part_hover: "<b>Только для пользователей IBM FileNet P8.</b> Выберите эту опцию, если вы хотите открывать в средстве просмотра только основной файл документа. С документами может быть связано несколько файлов. Эта опция позволит открыть только основной файл, связанных с документом.",
		admin_desktop_redaction_save_mode: "Опция цензурирования по умолчанию:",
		admin_desktop_redaction_save_mode_hover: "Выберите режим сохранения цензурированного материала виртуальной программы просмотра ViewONE:</br>* Всегда просить пользователя выбрать: диалоговое окно будет показано при переходе в режим цензурирования, чтобы спросить пользователя, хотят ли они активировать элемент как новую версию, создать новый документ или загрузить содержимое.</br>* Активировать как новую версию: цензурированное содержимое всегда будет сохраняться в виде новой версии существующего документа.</br>* Сохранить как совершенно новый документ: цензурированное содержимое всегда будет сохраняться как совершенно новый документ.</br>* Загрузить и сохранить на клиенте: цензурированное содержимое будет загружено в систему клиента.",
		admin_desktop_redaction_save_mode_user_select: "Всегда просить пользователя выбрать",
		admin_desktop_redaction_save_mode_new_version: "Активировать как новую версию",
		admin_desktop_redaction_save_mode_new_document: "Сохранить как совершенно новый документ",
		admin_desktop_redaction_save_mode_local_content: "Загрузить и сохранить на клиенте",

		admin_desktop_document_add_mode: "Диалоговое окно добавления документа:",
		admin_desktop_document_add_mode_hover: "Задайте диалоговое окно, которое нужно использовать при добавлении документов, созданных программой IBM Content Navigator:<ul><li>Новый документ с постоянным цензурированием</li><li>Новый объединенный и разбитый документ</li><li>Новый документ Microsoft Office</li><li>Новый документ службы редактирования</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Добавить документ",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Добавить документ с использованием шаблона ввода",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Объединить и разбить:",
		admin_desktop_merge_and_split_enable_hover: "Укажите, хотите ли вы, чтобы пользователи, которые получают доступ к этому рабочему столу, могли объединять и разбивать документы, используя поддерживаемую программу просмотра.",

		admin_desktop_merge_and_split_show_checkin: "Предложить пользователям ввести значения свойств при активации изменений в документе.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Если вы выберете эту опцию, диалоговое окно активации появится, когда пользователи будут активировать в документе изменения объединения и разбиения.",

		admin_desktop_available_categories: "Доступные функции",
		admin_desktop_selected_categories: "Выбранные функции",

		admin_layout_banner_title: "Баннер и страница входа в систему",
		admin_layout_title: "Схема",

		admin_desktop_application_name: "Имя программы:",
		admin_desktop_application_name_hover: "Введите имя приложения, которое должно появиться в баннере.<br><br>Совет: Определить имя приложения для других языков на вкладке Метки / Метки рабочего стола.",
		admin_desktop_theme: "Тема:",
		admin_desktop_theme_hover: "Укажите, следует ли использовать тему IBM Content Navigator по умолчанию, или пользовательскую тему для этого рабочего стола. Чтобы использовать пользовательскую тему, нужно создать тему в разделе <b>Темы</b> в утилите администрирования.",
		admin_desktop_login_logo: "Логотип на странице входа в систему:",
		admin_desktop_login_logo_hover: "Если вы хотите изменить логотип, появляющийся на странице входа в систему, вы можете указать URL файла логотипа. Однако  для изменения логотипа рекомендуется использовать пользовательскую тему.",
		admin_desktop_login_logo_url_hover: "Введите URL файла логотипа. Если логотип находится на том же сервере веб-программ, что и веб-клиент, введите относительный URL, например: /mycustomizations/login_logo.png<br><br>Размер логотипа не должен превышать 200 пиксел в ширину и 150 пиксел в высоту.<br><br>Рекомендуется, чтобы у логотипа был прозрачный фон.",
		admin_desktop_banner_logo: "Логотип в баннере:",
		admin_desktop_banner_logo_hover: "Если вы хотите изменить логотип, появляющийся в баннере, вы можете указать URL файла логотипа. Однако  для изменения логотипа рекомендуется использовать пользовательскую тему.",
		admin_desktop_banner_logo_url_hover: "Введите URL файла логотипа. Если логотип находится на том же сервере веб-программ, что и веб-клиент, введите относительный URL, например: /mycustomizations/banner_logo.png<br><br>Размер логотипа не должен превышать 72 пиксела в ширину и 36 пиксел в высоту.<br><br>Рекомендуется, чтобы у логотипа был прозрачный фон.",
		admin_desktop_banner_background_color: "Цвет фона баннера:",
		admin_desktop_banner_background_color_hover: "Если вы хотите изменить цвет фона баннера, вы можете задать пользовательский цвет. Однако  для изменения цвета баннера рекомендуется использовать пользовательскую тему.",
		admin_desktop_banner_background_color_custom_hover: "Задайте цвет баннера программы в виде шестнадцатеричного цвета.",
		admin_desktop_banner_application_name_color: "Цвет текста имени программы:",
		admin_desktop_banner_application_name_color_hover: "Если вы хотите изменить цвет имени программы, вы можете задать пользовательский цвет. Однако  для изменения цвета имени приложения рекомендуется использовать пользовательскую тему.",
		admin_desktop_banner_application_name_color_custom_hover: "Задайте цвет имени программы в виде шестнадцатеричного цвета.",
		admin_desktop_banner_menu_color: "Цвет значка баннера:",
		admin_desktop_banner_menu_color_hover: "Если вы измените цвет фона баннера, вам, возможно, потребуется изменить цветовую схему значков в баннере, чтобы их было лучше видно. Укажите, нужно ли показывать светлую или темную версию значков баннера.<br><br>Однако  для изменения цвета значков рекомендуется использовать пользовательскую тему.",
		admin_desktop_login_page_content: "Содержимое страницы входа в систему:",
		admin_desktop_login_page_content_hover: "Если вы хотите, чтобы на странице входа в систему была показана дополнительная информация, например, объявления об отключении систем или о том, где пользователи смогут получить справку, указав свои имена пользователей и пароли, вы можете указать URL содержимого, которое должно появляться на экране.",
		admin_desktop_login_page_content_url_hover: "Введите URL содержимого страницы входа в систему. Если это содержимое находится на том же сервере веб-программ, что и веб-клиент, введите относительный URL, например: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Правила паролей:",
		admin_desktop_password_rules_hover: "Если вы хотите представить пользователям руководство по созданию паролей, например, ограничение числа символов или минимальное число символов, вы можете указать URL страницы, содержащей эти правила составления паролей.",
		admin_desktop_password_rules_url_hover: "Введите URL страницы с правилами составления паролей. Если эти правила находятся на том же сервере веб-программ, что и веб-клиент, введите относительный URL, например: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL справки для конечного пользователя:",
		admin_desktop_help_url_hover: "Вы можете использовать справку, поставляемую вместе с IBM Content Navigator, или можете перенаправить пользователей в пользовательское содержимое справки, выполнив одно из следующих действий:<br><br><ul><li>Направив их в пользовательскую систему справки</li><li>Добавив справку в экземпляр центра знаний IBM, внедренного вместе с IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Введите URL пользовательской системы справки. IBM Content Navigator присоединит index.jsp?content=/com.ibm.usingeuc.doc/ и имя файла в конец указанного вами URL.  Чтобы в интерфейсе работали ссылки \"Узнать подробнее\", система справки должна использовать те же имена файлов, что и интегрированная справка для конечного пользователя. ",
		admin_desktop_deprecated_appearance_title: "Устаревшие параметры",
		admin_desktop_deprecated_appearance_instructions: "Если вы используете пользовательскую тему, эти параметры переопределяются пользовательской темой. Вы должны перенастроить эти параметры в пользовательскую тему, что обеспечит более детализированный стайлинг, чем параметры в этом разделе. Кроме того, пользовательская тема может использоваться несколькими рабочими столами.",

		admin_desktop_plugins_title: "Включите или выключите подключаемые модули для этого рабочего стола.",
		admin_desktop_plugins_enable_all_plugins: "Включить все внедренные подключаемые модули для использования вместе с этим рабочим столом",
		admin_desktop_plugins_select_plugins: "Выберите внедренные подключаемые модули, чтобы включить их использования вместе с этим рабочим столом",
		admin_desktop_plugins_select_plugin: "Выбрать подключаемый модуль",

		admin_desktop_layout_features: "Показанные функции:",
		admin_desktop_layout_features_hover: "Выберите функции, доступ к которым пользователи смогут получать с этого рабочего стола. Функции будут показаны в том порядке, в каком они перечислены.<br><br>Когда вы выберете функцию, вы сможете настроить отдельные характеристики поведения функции на рабочем столе, например, репозиторий по умолчанию, который выбирается для функции.",
		admin_desktop_layout_default_repository: "Репозиторий по умолчанию:",
		admin_desktop_layout_default_repository_layout_hover: "Укажите, какой репозиторий будет выбираться по умолчанию, когда пользователи откроют эту функцию.",
		admin_desktop_layout_document_thumbnails: "Миниизображения документов:",
		admin_desktop_layout_document_thumbnails_hover: "Укажите, следует ли выводить на экран миниизображения для документов в панели Информация о документах.<br><br>Вывод на экран миниизображений может снизить производительность работы веб-клиента.",
		admin_desktop_layout_show_filmstrip_view: "Представление в виде диафильма:",
		admin_desktop_layout_show_filmstrip_view_hover: "Укажите, следует ли разрешать пользователям переключать вывод на экран списка содержимого на представление в виде диафильма.<br><br>Представление в виде диафильма генерирует изображение каждого выбранного пользователем документа для предварительного просмотра. Однако при использовании представления в виде диафильма снижается производительность веб-клиента. Кроме того, чтобы увидеть предварительные просмотры документов, необходимо сконфигурировать программу просмотра преобразования в HTML.",
		admin_enabled: "Включить",
		admin_disabled: "Выключить",
		admin_include: "Включить",
		admin_exclude: "Исключить",
		admin_layout_teamspaces_default_repository: "Пространства команд:",
		admin_layout_entry_templates_default_repository: "Шаблоны ввода:",
		admin_layout_other_features_default_repository: "Поиск и обзор:",
		admin_layout_work_default_repository: "Работа:",
		admin_layout_default_feature: "Функция по умолчанию:",
		admin_default_category_placeholder: "Выбрать функцию",
		admin_layout_default_feature_hover: "Укажите, какая функция появится, когда пользователи войдут на этот рабочий стол.",
		admin_layout_default_feature_warning: "Изменение функции по умолчанию может повлиять на время, которое требуется, чтобы загрузить приложение.",
		admin_layout_feature_list_header: "Функция",
		admin_layout_show_statusbar: "Строка состояния:",
		admin_layout_show_statusbar_hover: "Укажите, будет ли показана строка состояния в нижней части рабочего стола.<br><br>Если вы скроете строку состояния, пользователи не смогут увидеть информацию о событиях, не связанных с ошибками, например:<ul><li>Документ добавлен в репозиторий.</li><li>Поиск возвратил 59 документов.</li></ul>",
		admin_layout_show_magazineview: "Представление в виде журнала:",
		admin_layout_show_magazineview_hover: "Укажите, следует ли разрешать пользователям переключать вывод на экран списка содержимого на представление в виде журнала.<br><br>В представлении журнала повышается высота каждой записи в списке содержимого, за счет чего сокращается число элементов, которые можно одновременно показать в списке содержимого.",
		admin_layout_show_detailsview: "Детальное представление:",
		admin_layout_show_detailsview_hover: "Укажите, следует ли разрешать пользователям переключать вывод на экран списка содержимого на детальное представление.<br><br>В представлении сведений доведено до максимума число строк, которые видны в списке содержимого.",
		admin_feature_config_docinfopane_label: "Панель информации о документе:",
		admin_feature_config_docinfopane_hoverhelp: "Укажите, смогут ли пользователи получить доступ к панели информации о документах в этой функции.",
		admin_feature_config_docinfopane_default_label: "Поведение по умолчанию",
		admin_feature_config_docinfopane_expanded: "Развернуто",
		admin_feature_config_docinfopane_collapsed: "Свернуто",
		admin_feature_config_docinfopane_expand_on_select: "Развернуть, когда элемент выбран",
		admin_layout_features_title: "Функции рабочего стола",
		admin_layout_features_instructions: "Укажите, доступ к каким функциям пользователи смогут получить с этого рабочего стола.  Кроме того, вы можете настроить поведение каждой функции, включенной на рабочий стол.",
		admin_layout_components_title: "Дополнительные компоненты рабочего стола",
		admin_layout_components_instructions: "Вы можете отключить некоторые компоненты рабочего стола, если хотите получить более четко организованный интерфейс или повысить производительность веб-клиента.",
		admin_layout_featureconfig_instructions: "Выберите функцию, которую нужно сконфигурировать",
		admin_layout_featureconfig_no_configuration: "Конфигурация функции недоступна.",
		admin_layout_featureconfig_label: "Конфигурация функции ${0}",
		admin_layout_featureconfig_title: "Конфигурация функции",
		admin_layout_featureconfig_taskManagerURL: "Чтобы воспользоваться этой функцией, нужно включить и сконфигурировать IBM Content Navigator для соединения со службой менеджера операций. Включите службу менеджера операций в разделе <b>Параметры</b> этой утилиты администрирования.",
		admin_feature_config_show_my_checkouts_label: "Панель Мои резервирования:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Панель Мои резервирования позволяет пользователям запустить поиск для всех элементов, которые они зарезервировали в отдельном репозитории. Укажите, смогут ли пользователи получить доступ к панели Мои резервирования при помощи функции Домашняя страница.<br/><br/><b>Ограничение:</b> Эта функция требует, чтобы у вас был, как минимум, один репозиторий IBM Content Manager, IBM FileNet P8 или OASIS CMIS, связанный с этим рабочим столом.",

		admin_feature_config_default_repository_icon_text: "Репозиторий по умолчанию",
		admin_show: "Показать",
		admin_hide: "Скрыть",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Удалить функцию Администрирование с рабочего стола администратора нельзя.",
		admin_warning_label: "Предупреждение:",
		admin_layout_show_globaltoolbar: "Глобальная панель инструментов:",
		admin_layout_show_globaltoolbar_hover: "Укажите, нужно ли показывать панель инструментов в баннере в верхней части рабочего стола.<br><br>В глобальной панели инструментов находятся действия, позволяющие пользователям добавлять в репозиторий документы, папки и блокировки. Доступные действия зависят от того, с каким репозиторием соединяется пользователь.",
		admin_interface_text_name_label: "Тип метки",

		admin_interface_text_label_description: "Вы можете настроить текст, появляющийся в отдельных областях веб-клиента. Метки будут показаны для всех репозиториев и рабочих столов в вашей конфигурации. Введите текст, который вы хотите видеть в интерфейсе, в поле Текущая метка.<br><br><b>Важно:</b> Никакие изменения, внесенные вами в метки, не будут показаны в утилите администрирования.",
		admin_interface_text_label_action: "Метки действий",
		admin_interface_text_label_action_description: "Метки действий появляются на кнопках и в меню в веб-клиенте. Вы можете задать разные метки действий для каждого типа репозитория.",
		admin_interface_text_label_application: "Метки программы",
		admin_interface_text_label_application_description: "Метки программы появляются во всем веб-клиенте.",
		admin_interface_text_label_system: "Метки системных свойств",
		admin_interface_text_label_system_description: "То, какие системные свойства вы увидите, зависит от репозитория. Вы можете настроить метки, которые будут показаны для системных свойств, связанных с документами и папками в репозиториях.",
		admin_interface_text_label_desktop: "Метки рабочего стола",
		admin_interface_text_label_desktop_description: "Если вы настроили имя приложения на рабочем столе, вы можете настроить это имя на других языках (помимо английского). Вы также можете настроить имена пространств приложений IBM FileNet P8 на рабочем столе.",

		admin_interface_text_system_label: "Системная метка",
		admin_interface_text_current_label: "Текущая метка",
		admin_interface_text_default_label_heading: "Метка по умолчанию",
		admin_interface_text_default_label: "Метка по умолчанию:",
		admin_interface_text_displayed_in_label: "Показать для",
		admin_interface_text_displayed_in_document_folder: "Документы и папки",
		admin_interface_text_displayed_in_document: "Документы",
		admin_interface_text_displayed_in_folder: "Папки",
		admin_interface_text_displayed_in_admin_application_space: "Метка пространства программы",
		admin_interface_text_displayed_in_desktop: "Метка функции для мобильного устройства",
		admin_interface_text_displayed_in_admin_application_name: "Имя приложения",

		admin_new_desktop: "Новый рабочий стол",
		admin_new_repository: "Новый репозиторий",
		admin_new_menu: "Новое меню",
		admin_new_viewer_mapping: "Новая карта средств просмотра",
		admin_new_mapping_label: "Новое отображение",
		admin_new_icon_mapping: "Новое отображение значка",
		admin_viewer_mapping_list_instructions: "Вы можете сконфигурировать средства просмотра, которые веб-клиент будет использовать для просмотра разных типов содержимого. В карте средств просмотра указано, какие типы MIME связаны с каждым средством просмотра, которое вы хотите использовать. Если вы хотите использовать разные средства просмотра для разных рабочих столов, можно создать несколько карт средств просмотра.",
		admin_viewer_mapping_instructions: "Укажите средства просмотра, которые вы хотите использовать для открытия файлов. Если вы хотите использовать пользовательское средство просмотра, то, прежде чем вы сможете добавить средство просмотра в карту средств просмотра, вы должны интегрировать его в виде подключаемого модуля.<br><br><b>Важно:</b> Когда пользователь открывает документ, веб-клиент ищет список отображений просмотра, чтобы найти первую программу просмотра, которая может открыть документ на основе операционной системы пользователя, и репозиторий, с которым пользователь соединен. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Новый подключаемый модуль",
		admin_menu_list_instructions: "Вы можете создавать настроенные панели инструментов и контекстные меню, чтобы управлять тем, какие действия будут доступны пользователям. Меню, заданные по умолчанию, изменять нельзя, но вы можете создавать копии существующих меню, чтобы ограничивать доступные действия или добавлять пользовательские действия, заданные в подключаемых модулях.<br><br>Если вы хотите создать новый тип меню, вы должны задать меню в подключаемом модуле.",
		admin_menu_id_hover: "ID должен быть уникальным, и после сохранения меню изменить ID будет нельзя.<br><br>ID может содержать только алфавитно-цифровые символы, и в нем учитывается регистр.",
		admin_menu_id_disabled_hover: "Изменить ID меню нельзя. Если вы хотите использовать другой ID, вы должны создать новое меню.",
		admin_menu_default_instructions: "Вы не можете изменить это меню, так как это - меню по умолчанию. Если вы хотите изменить это меню, вы должны будете создать копию меню.",
		admin_menu_toolbar_instructions: "Вы можете ограничить действия, доступные для этой панели инструментов, или можете добавить пользовательские действия, заданные в подключаемом модуле. Вы также можете организовать действия, добавив разделители в панель инструментов.",
		admin_menu_toolbar_custom_instructions: "Эта панель инструментов задана подключаемым модулем. Если вы хотите изменить эту панель инструментов, вы должны обновить подключаемый модуль или создать копию панели инструментов.",
		admin_menu_context_menu_instructions: "Вы можете ограничить действия, доступные для этого контекстного меню, или можете добавить пользовательские действия, заданные в подключаемом модуле. Вы также можете организовать действия, добавив разделители и подменю в контекстное меню.",
		admin_menu_context_menu_custom_instructions: "Это контекстное меню задано подключаемым модулем. Если вы хотите изменить это контекстное меню, вы должны обновить подключаемый модуль или создать копию контекстного меню.",
		admin_desktop_list_instructions: "Вы можете создать несколько рабочих столов, чтобы предоставить разным пользователям доступ к нужному им содержимому. Например, можно создать рабочий стол, который позволит пользователям только искать содержимое, или рабочий стол, предоставляющий пользователям доступ только к одному репозиторию. ",
		admin_plugin_updated: "Конфигурация выбранного подключаемого модуля изменилась. Чтобы изменения вступили в силу, вы должны обновить браузер.",
		admin_repository_ci_heading: "Репозиторий Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Репозиторий FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Репозиторий Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Репозиторий Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Репозиторий Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Репозиторий Box: <b>${0}</b>",
		admin_repository_generic_heading: "Репозиторий: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Удалить выбранные рабочие столы?\nЧисло выбранных рабочих столов равно ${0}.",
		admin_delete_confirmation_menus: "Удалить выбранные меню?\nВыбрано ${0} меню.",
		admin_delete_confirmation_repositories: "Хотите удалить выбранные репозитории?\nЧисло выбранных репозиториев равно ${0}.",
		admin_delete_confirmation_viewer_mappings: "Хотите удалить выбранные карты средств просмотра? Число выбранных карт равно ${0}.",
		admin_delete_confirmation_icon_mappings: "Хотите удалить выбранные конфигурации значков?\nЧисло выбранных конфигураций значков равно ${0}.",
		admin_delete_confirmation_plugins: "Удалить выбранные подключаемые модули?\nВыбрано ${0} подключаемых модулей.",
		admin_delete_confirmation: "Удалить выбранные элементы?\nЧисло выбранных элементов равно ${0}.",

		admin_viewer_mapping_id_hover: "ID должен быть уникальным, и после сохранения карты средств просмотра изменить ID будет нельзя.<br><br>ID может содержать только алфавитно-цифровые символы, и в нем учитывается регистр.",
		admin_viewer_mapping_id_disabled_hover: "Изменить ID карты средств просмотра нельзя. Если вы хотите использовать другой ID, вы должны создать новую карту средств просмотра.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Нельзя удалить рабочий стол по умолчанию.",

		admin_desktop_heading: "Рабочий стол: <b>${0}</b>",
		admin_menu_toolbar_heading: "Панель инструментов: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Пользовательская панель инструментов: <b>${0}</b>",
		admin_menu_context_menu_heading: "Контекстное меню: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Пользовательское контекстное меню: <b>${0}</b>",
		admin_plugin_heading: "Подключаемый модуль: <b>${0}</b>",
		admin_plugin_instructions: "Подключаемый модуль может быть или файлом JAR, или скомпилированным файлом классов.<br/><br/><b>Важно:</b> У сервера прикладных программ IBM Content Navigator должна быть возможность доступа к файлу подключаемого модуля в локальной файловой системе или через URL.",
		admin_plugin_list_instructions: "Вы должны зарегистрировать подключаемые модули для веб-клиента при помощи утилиты администрирования. Если требуется дополнительное конфигурирование подключаемого модуля, параметры конфигурации появятся после того, как вы зарегистрируете подключаемый модуль.<br /><br /><b>Важно:</b> Если вы измените подключаемый модуль, ссылка на который есть в другой области утилиты администрирования, например, в меню, вы можете столкнуться с неправильным поведением подключаемого модуля. Кроме того, вызов подключаемых модулей будет осуществляться в том порядке, в каком они указаны в списке. Если подключаемый модуль нужно запускать до другого подключаемого модуля, убедитесь, что подключаемые модули перечислены в том порядке, в каком они должны запускаться.",
		admin_plugin_cannot_delete: "Выбранные подключаемые модули нельзя удалить, так как от них зависят некоторые другие подключаемые модули.<br/>Выбранные подключаемые модули: ${0}<br/>Зависимые подключаемые модули: ${1}",
		admin_plugin_cannot_disable: "Выбранные подключаемые модули нельзя отключить, так как от них зависят некоторые другие подключаемые модули.<br/>Выбранные подключаемые модули: ${0}<br/>Зависимые подключаемые модули: ${1}",
		admin_plugin_cannot_add: "Невозможно добавить подключаемый модуль, поскольку некоторые подключаемые модули, от которых он зависит, отсутствуют или отключены. Отсутствующие или отключенные подключаемые модули: ${0}",
		admin_plugin_cannot_enable: "Невозможно включить выбранные подключаемые модули, поскольку некоторые модули, от которых они зависят, отсутствуют или отключены.<br/>Выбранные подключаемые модули: ${0}<br/>Отсутствующие или отключенные подключаемые модули: ${1}",
		admin_plugin_save_order: "Сохранить порядок",
		admin_plugin_load: "Загрузить",
		admin_plugin_load_hover: "Задать URL подключаемого модуля",
		admin_plugin_file_hover: "Если файл JAR подключаемого модуля находится в вашей локальной файловой системе, для него можно ввести полный путь или URL. Если файл JAR подключаемого модуля находится на удаленном сервере, для него нужно ввести URL.",
		admin_plugin_classfolderpath_hover: "Скомпилированный файл класса должен находится на сервере веб-приложений IBM Content Navigator.<br/><br/>Введите полный путь к папке, где компилируются и генерируются классы подключаемого модуля.<br/><br/>Этот путь не должен содержать имени пакета класса подключаемого модуля. Например, путь по умолчанию для образца класса подключаемого модуля в Windows: C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Введите полное имя класса Java в файл класса, который должен быть загружен и назван классом подключаемого модуля.<br/>Например, имя класса для образца подключаемого модуля - это com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Файл JAR подключаемого модуля не найден по указанному адресу URL. Убедитесь, что файл JAR находится на сервере веб-программ и что URL и имя файла правильны.",
		admin_plugin_for_repository_not_loaded: "Изменить этот репозиторий нельзя. Подключаемый модуль, который задает и поддерживает этот тип  репозитория, не загружен. На вкладке Подключаемые модули измените подключаемый модуль, чтобы убедиться, что он правильно сконфигурирован и загружен.",
		admin_plugin_repository_types: "Тип репозиториев:",
		admin_plugin_viewers: "Программы просмотра:",
		admin_plugin_features: "Функции:",
		admin_plugin_layouts: "Схемы:",
		admin_plugin_not_available: "Недоступны",
		admin_plugin_config_params: "Параметры конфигурации:",
		admin_viewer_def_heading: "Карта средств просмотра: <b>${0}</b>",
		admin_users_and_groups: "Пользователи и группы",
		admin_general: "Общие",
		admin_logging: "Запись в журнал",
		admin_authentication: "Аутентификация",		
		admin_rolebase_role: "Роль:",
		admin_settings_logging_instructions: "Запись в журнал можно использовать для выявления ошибок на веб-клиенте. Вы можете уточнить запись в журнал, если знаете, что ошибка связана с каким-то определенным классом Java или пользователем. Информация об ошибках записывается в файлы журнала ошибок сервера веб-приложения.",
		admin_settings_logging_instructions2: "<b>Параметры записи в журнал отладки</b><br />Если вы знаете, что ошибка происходит для  конкретного хост-компьютера клиента или пользователя, вы можете произвести запись информации отладки в журнал для этого компьютера или пользователя. Информацию отладки можно записывать в производственной среде, не влияя существенным образом на производительность системы.<br /><br /><b>Важно:</b> Если вы зададите хост-компьютер клиента или пользователя, этот параметр переопределит все прочие параметры записи в журнал. После того как вы запишете информацию, которая вам нужна, задайте для этой опции значение <b>Нет</b>, чтобы возобновить стандартную запись в журнал для вашей среды.",
		admin_settings_export_config_hover: "Экспортируйте текущую информацию о конфигурации системы в файл для использования в сочетании со сборщиком данных IBM Support Assistant. Этот файл будет сохранен в расположении, заданном системным свойством Java user.home.",
		admin_logging_level: "Запись в журнал на уровне программы:",
		admin_logging_level_hover: "Уровни записи в журнал влияют на то, какой объем информации сохраняется на сервере. Если выбрать <b>Ошибка</b>, будет записываться минимальный объем информации журнала. Если выбрать <b>Отладка</b>, будет записываться наибольший  объем информации<br /><br />Не выбирайте уровень <b>Отладка</b> в производственной среде, если вы не получали таких указаний от службы поддержки программ IBM.",
		admin_logging_level_0: "Без записи в журнал",
		admin_logging_level_1: "Ошибка",
		admin_logging_level_2: "Предупреждение",
		admin_logging_level_3: "Информация",
		admin_logging_level_4: "Отладка",
		admin_logging_classes: "Запись в журнал на уровне классов Java:",
		admin_logging_classes_hover: "По умолчанию в журналы ошибок сервера веб-приложений включаются все классы и пакеты Java. Однако вы можете указать, какие классы или пакеты следует включить в журнал или исключить из него. Можно использовать журналы ошибок сервера приложений, чтобы определить, какие классы нужно включить или исключить.<br><br>Если вы знаете, что проблема связана с конкретным классом, вы можете включить этот класс в файлы журнала. Если включить класс в файлы журнала, все другие классы будут исключены из файла журнала.<br><br>Если вы знаете, что проблема не происходит в классе и хотите уменьшить размер файла журнала, вы можете исключить этот класс из файлов журнала.",
		admin_logging_classes_include: "Включить",
		admin_logging_classes_include_all: "Все классы",
		admin_logging_classes_include_specified: "Отдельные классы",
		admin_logging_classes_include_specified_msg: "Укажите, какие классы следует включить.",
		admin_logging_classes_exclude: "Исключить",
		admin_logging_classes_exclude_none: "Нет",
		admin_logging_classes_exclude_specified: "Отдельные классы",
		admin_logging_classes_exclude_specified_msg: "Укажите, какие классы следует исключить.",
		admin_logging_debug: "Отладочная запись в журнал для:",
		admin_logging_debug_hover: "<b>Важно:</b> Прежде чем указывать IP-адрес хост-компьютера клиента или пользователя, проверьте файлы журнала сервера веб-приложений. Заданное вами значение должно совпадать со значением, которое появляется в файле журнала.",
		admin_logging_debug_none: "Нет (по умолчанию)",
		admin_logging_debug_host: "Хост-компьютеры клиентов (IP-адреса)",
		admin_logging_debug_host_msg: "Укажите IP-адрес одного или нескольких компьютеров-клиентов, для которых вы хотите записывать в журнал отладочную информацию. Чтобы указать несколько IP-адресов, разделяйте их запятой.<br /><br /><b>Важно:</b> Прежде чем указывать IP-адрес, проверьте файлы журнала сервера веб-приложений. Заданное вами значение должно совпадать со значением, которое появляется в файле журнала.",
		admin_logging_debug_user: "Пользователи",
		admin_logging_debug_user_msg: "Укажите имя пользователя для одного или нескольких пользователей, для которых вы хотите записывать в журнал отладочную информацию. Чтобы разделить имена пользователей, используйте запятые.<br /><br /><b>Важно:</b> Прежде чем указывать имя пользователя, проверьте файлы журнала сервера веб-приложений. Заданное вами значение должно совпадать со значением, которое появляется в файле журнала.",

		admin_office_settings_logging_instructions: "Запись в журнал можно использовать для выявления ошибок в IBM Content Navigator for Microsoft Office. Вы можете уточнить запись в журнал, если знаете, что ошибка связана с каким-то определенным классом или пользователем. Информация об ошибках записывается в файлы журналов приложений на хост-компьютерах клиентов IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Параметры записи в журнал отладки</b><br />Если вы знаете, что ошибка происходит для  конкретного хост-компьютера клиента или пользователя IBM Content Navigator for Microsoft Office, вы можете произвести запись информации отладки в журнал для этого компьютера или пользователя. Информацию отладки можно записывать в производственной среде, не влияя существенным образом на производительность системы. <br /><br /><b>Важно:</b> Если вы зададите хост-компьютер клиента или пользователя, этот параметр переопределит все прочие параметры записи в журнал. После того как вы запишете информацию, которая вам нужна, задайте для этой опции значение <b>Нет</b>, чтобы возобновить стандартную запись в журнал для вашей среды IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Важно:</b> Прежде чем указывать IP-адрес хост-компьютера клиента или пользователя, проверьте файлы журнала клиентского компьютера. Заданное вами значение должно совпадать со значением, которое появляется в файле журнала. ",
		admin_office_logging: "Запись в журнал Office",
		admin_office_logging_classes: "Запись в журнал на уровне классов:",
		admin_office_logging_classes_hover: "По умолчанию в журналы ошибок IBM Content Navigator for Microsoft Office включаются все классы и пакеты. Однако вы можете указать, какие классы или пакеты следует включить в журнал или исключить из него. Можно использовать журналы компьютеров-клиентов, чтобы определить, какие классы нужно включить или исключить.<br /><br />Если вы знаете, что проблема связана с конкретным классом, вы можете включить этот класс в файлы журнала. Если включить класс в файлы журнала, все другие классы будут исключены из файлов журнала. <br /><br />Если вы знаете, что проблема не происходит в классе и хотите уменьшить размер файла журнала, вы можете исключить этот класс из файлов журнала. ",
		admin_office_logging_debug_hover: "<b>Важно:</b> Прежде чем указывать IP-адрес хост-компьютера клиента или пользователя, проверьте файлы журнала клиентского компьютера. Заданное вами значение должно совпадать со значением, которое появляется в файле журнала.",
		admin_office_logging_additional_settings: "Дополнительные параметры:",
		admin_office_logging_additional_settings_hover: "Задать дополнительные параметры",
		admin_office_logging_file_size: "Размер файла журнала",
		admin_office_logging_file_size_hover: "Задайте размер файла, который IBM Content Navigator for Microsoft Office будет использовать при создании нового файла журнала. Когда файл журнала достигнет максимального размера, текущий журнал будет переименован путем присоединения даты к его имени (с использованием формата ГГГГММдд) и номера приращения для файла (например, ICNExcelAddin-20121116-5.log) и будет создан новый файл журнала. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Показать трассировку стека в диалоговых окнах",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Можно дополнительно показать информацию трассировки стека в диалоговых окнах сообщений, чтобы способствовать устранению ошибок. Даже если вы не включите эту опцию, подробная информация трассировки стека всегда включается в журналы ошибок IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Значки состояния",
		admin_icon_state_icon: "Значок состояния",
		admin_icon_state: "Состояние",
		state_contains_label: "Состояние содержит",
		admin_icon_state_instructions: "Вы можете настроить значки, появляющиеся рядом с документами, папками и рабочими элементами в репозиториях.<br><br><b>Совет:</b> Вы можете указать, следует ли показывать значки состояния для каждого репозитория в вашей среде.",
		admin_icon_state_dialog_title: "Отображение значков состояния",
		admin_icon_state_dialog_instructions: "Вы можете отобразить выбранное состояние в заранее заданный значок, прилагаемый к веб-клиенту, или в пользовательский значок.",

		admin_icon_mapping_twisty: "Значки типов MIME",
		admin_icon_mapping_dialog_title: "Отображение значков",
		admin_icon_mapping: "Отображение значков",
		admin_icon_mapping_instructions: "Вы можете отобразить список типов MIME в заранее заданный значок, прилагаемый к веб-клиенту, или в пользовательский значок.",
		admin_icon_mapping_list_instructions: "Вы можете настроить значки, появляющиеся для различных типов MIME, хранящихся в вашем репозитории. Веб-клиент использует значки в том же порядке, в каком они перечислены. Если тип MIME встречается в списке более одного раза, будет использоваться первый значок, связанный с этим типом MIME.",
		admin_icon_mapping_icon_label: "Какой значок вы хотите использовать?",
		admin_icon_mapping_file_name: "Пользовательский значок:",
		admin_icon_mapping_file_name_heading: "Пользовательский значок",
		admin_icon_mapping_file_name_placeholder: "Укажите URL значка",
		admin_icon_mapping_file_name_hover: "Введите URL значка. Если значок находится на том же сервере веб-приложений, что и веб-клиент, введите относительный URL. Например: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Заранее заданный значок:",
		admin_icon_mapping_class_name_heading: "Заранее заданный значок",
		admin_icon_mapping_class_name_hover: "Выберите значок, прилагаемый к веб-клиенту.",
		admin_icon_mapping_class_name_placeholder: "Выбрать значок",

		admin_p8_instructions: "Эта информация совместно  используется всеми репозиториями FileNet Content Manager, сконфигурированными для веб-клиента.",
		admin_p8_collaboration_config: "Необязательное конфигурирование FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Вы можете сконфигурировать эти параметры, если хотите настроить FileNet Collaboration Services для вашей среды IBM FileNet P8.",
		admin_p8_use_url_incoming: "Использовать URL во входящих требованиях для генерирования URL ответов:",
		admin_p8_use_url_incoming_hover: "В большинстве сред FileNet Collaboration Services можно использовать URL входящего требования для генерирования URL в ответе. Выберите <b>Да</b>, если к вашей среде неприменима ни одна из следующих ситуаций:<ul><li>Вы хотите принудительно заставить программы-клиенты получить доступ к FileNet Collaboration Services через конкретный URL.<li>Параметры вашего прокси-сервера заставляют FileNet Collaboration Services генерировать недопустимые URL.</ul>",

		admin_p8_use_url_incoming_http: "URL для FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Задайте URL, на основе которого приложения-клиенты смогут получать доступ к FileNet Collaboration Services, используя формат: http://сервер_FNCS:номер_порта.",
		admin_p8_use_url_incoming_https: "HTTPS URL для FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Если служба FileNet Collaboration Services сконфигурирована для использования SSL, задайте URL HTTPS, на основе которого приложения-клиенты смогут получать доступ к FileNet Collaboration Services, используя формат: https://сервер_FNCS:номер_порта.",
		admin_p8_hide_email_addresses: "Скрыть адреса электронной почты пользователей в ответах сервера:",
		admin_p8_hide_email_addresses_hover: "Вы можете скрыть адреса электронной почты пользователей в ответах сервера, если вам нужно обеспечить соответствие правилам политики конфиденциальности. Например, можно скрыть список адресов электронной почты пользователей, когда сервер возвращает список документов и информацию о пользователях, которые создали или изменили документы.",

		admin_p8_mask_user_ids: "Замаскировать ID пользователей в файлах журналов:",
		admin_p8_mask_user_ids_hover: "Вы можете скрыть имена пользователей в файлах журналов FileNet Collaboration Services, если вам нужно обеспечить соответствие правилам политики конфиденциальности. Если вы включите эту опцию, имена пользователей будет заменены хэш-значениями. Это позволяет предоставлять файлы журналов внешним компаниям (например, в IBM) для получения поддержки, не нарушая конфиденциальность имен пользователей или записей действий.",

		admin_p8_soft_delete: "Переместить удаленные файлы в мусорную корзину:",
		admin_p8_soft_delete_hover: "Когда пользователи удаляют элементы, перемещать элементы в мусорную корзину, а не удалять их из репозитория. Элементы остаются в мусорной корзине, пока не будут стерты. Если репозиторий назначения не поддерживает мусорные корзины, этот параметр игнорируется.<br><br><b>Ограничение:</b> Мусорные корзины поддерживаются в IBM FileNet P8 версии 5.2 или новее и требуют надстройки Social Collaboration Base Extensions.",

		admin_p8_download: "Конфигурация кэша HTTP загрузки содержимого",
		admin_p8_download_instructions: "Если ваши репозитории IBM FileNet Content Manager содержат много больших файлов, вы можете сконфигурировать кэш HTTP скачивания содержимого (Content Download HTTP Cache, CDHC), так чтобы включить FileNet Collaboration Services для защищенного перенаправления требований содержимого для больших файлов на выделенный веб-сервер.<br/><br/>Для этой функции требуется IBM HTTP Server. Кроме того, вы должны обновить файл httpd.conf для IBM HTTP Server.",
		admin_p8_download_cache: "Кэш HTTP скачивания содержимого:",
		admin_p8_download_cache_hover: "Укажите, хотите ли вы включить кэш HTTP скачивания содержимого (Content Download HTTP Cache, CDHC) для всех репозиториев IBM FileNet Content Manager в вашей среде. Можно указать минимальный размер файлов, при котором файлы будут кэшироваться.",
		admin_p8_download_cache_folder: "Полный каталог кэша:",
		admin_p8_download_cache_folder_hover: "Укажите полный путь каталога, в котором вы хотите сохранять кэшированные файлы. Каталог может находиться в любой операционной системе или на любом устройстве, например, в совместно используемом сетевом каталоге, при условии, что он будет виден как файловая система службе FileNet Collaboration Services и серверу IBM HTTP Server.",
		admin_p8_download_cache_url: "Алиас для расположения кэша:",
		admin_p8_download_cache_url_hover: "Задайте алиас, используемый, чтобы указать на каталог кэша из URL FileNet Collaboration Services. Задайте алиас в формате /алиас, например, /cdhc.<br/><br/>Если алиас /cdhc включен в URL, программа будет перенаправлена в полный каталог кэша.",
		admin_p8_download_cache_max_files: "Максимальное число кэшированных файлов:",
		admin_p8_download_cache_max_files_hover: "При достижении максимального числа файлов самый старый файл удаляется из кэша.<br><br>Если вы зададите максимальное число кэшированных файлов и максимальный размер кэша, при достижении наименьшего из двух условий самый старый файл удаляется из кэша.",
		admin_p8_download_cache_max_size: "Максимальный размер кэша (ГБ):",
		admin_p8_download_cache_max_size_hover: "При достижении максимального размера кэша самый старый файл удаляется из кэша.<br/><br/>Если вы зададите максимальное число кэшированных файлов и максимальный размер кэша, при достижении наименьшего из двух условий самый старый файл удаляется из кэша.",
		admin_p8_download_cache_cleanup_duration: "Максимальная длительность очистки (в секундах):",
		admin_p8_download_cache_cleanup_duration_hover: "Задайте максимальное время, в течение которого может выполняться операция очистки. Длительность по умолчанию - 5 секунд.<br><br>Все файлы, которые подлежат удалению, но остаются в кэше после операции очистки, будут удалены при последующей операции очистки.",
		admin_p8_download_cache_cleanup_min: "Минимальный интервал между операциями очистки кэша (в секундах):",
		admin_p8_download_cache_cleanup_min_hover: "Укажите минимальное время, которое должно проходить между операциями очистки кэша. Время по умолчанию: 3600 сек. (1 час).<br><br>Операции очистки происходят, только если существует активное требование по скачиванию содержимого из кэша. Если требования поступают каждую минуту, операция очистки будет происходить каждый час. Однако, если пройдет три часа между требованиями скачивания, операция очистки не произойдет, пока не поступит следующее требование скачивания.",
		admin_p8_download_cache_min_lifetime: "Минимальное время в кэше (в секундах):",
		admin_p8_download_cache_min_lifetime_hover: "Задайте минимальное время, в течение которого файл хранится в кэше, прежде чем его можно будет удалить. Время по умолчанию: 3600 сек. (1 час).<br><br>Даже если кэш достиг максимального размера или содержит максимальное число файлов, самый старый файл в кэше нельзя удалить, если файл не находился в кэше в течение заданного времени.",
		admin_p8_download_cache_size_threshold: "Минимальный размер файла для кэширования (КБ):",
		admin_p8_download_cache_size_threshold_hover: "Задайте минимальный размер, при котором следует использовать CDHC для кэширования файлов. Если размер файла меньше заданного, файл будет направлен через сервер веб-программ, на котором внедрена служба FileNet Collaboration Services. Размер по умолчанию - 1000 КБ.",
		admin_p8_download_guard_header: "Заголовок HTTP для контроля:",
		admin_p8_download_guard_header_hover: "Если программа-клиент не маршрутизирует требование через IBM HTTP Server, скачать кэшированное содержимое нельзя. Чтобы не допустить ошибок скачивания, вы можете указать, что доступ к кэшированному содержимому могут получить только входящие требования с конкретным заголовком HTTP (добавляемым в требования с сервера IBM HTTP Server).<br><br>Заголовок HTTP конфигурируется на сервере IBM HTTP Server и присутствует во всех входящих требованиях, маршрутизируемых через IBM HTTP Server. Если в требовании нет заголовка HTTP, содержимое маршрутизируется не через IBM HTTP Server, а через сервер веб-приложений.",
		admin_p8_download_generate_config: "Сгенерировать конфигурацию",
		admin_p8_download_generate_config_label: "Конфигурация IBM HTTP Server",
		admin_p8_download_generate_config_label_hover: "Чтобы конфигурация CHDC работала, нужно обновить файл httpd.conf для IBM HTTP Server. Щелкните по Сгенерировать конфигурацию, чтобы сгенерировать операторы, которые нужно добавить в файл httpd.conf.",

		admin_logging_viewone_pro: "Запись в журнал ViewONE Professional:",
		admin_logging_viewone_virtual: "Запись в журнал ViewONE Virtual:",
		admin_logging_viewone_streamer: "Запись в журнал модуля сервера Document Streaming:",
		admin_logging_viewone_streamer_hover: "Опции записи в журнал для модуля сервера Document Streaming применимы, только если вы включили поддержку потоков для файлов PDF или TIFF в разделе <b>Daeja ViewONE</b> утилиты администрирования.",
		admin_logging_viewone_redaction: "Запись в журнал модуля сервера Permanent Redaction:",
		admin_logging_viewone_redaction_hover: "Опции записи в журнал для модуля сервера Permanent Redaction применимы, только если вам предоставлены права на использование модуля Redaction в Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Поточные файлы PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Если в вашем репозитории есть большие документы PDF, вы можете включить программу просмотра для поточной обработки содержимого документов, чтобы пользователи смогли быстрее увидеть эти документы. Однако, если поточная обработка не действует в вашей среде, вы можете отключить поточную обработку.",
		admin_daeja_viewonepro_stream_tiff_documents: "Поточные файлы TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Если в вашем репозитории есть большие документы TIFF, вы можете включить программу просмотра для поточной обработки содержимого документов, чтобы пользователи смогли быстрее увидеть эти документы. Однако, если поточная обработка не действует в вашей среде, вы можете отключить поточную обработку.",
		admin_daeja_viewonepro_show_file_buttons: "Кнопки файлов",
		admin_daeja_viewonepro_show_file_menus: "Меню файлов",
		admin_daeja_viewonepro_enable_file_keys: "Горячие клавиши файлов",
		admin_daeja_viewonepro_file_keys_hover_help: "Укажите, хотите ли вы, чтобы пользователи использовали горячие комбинации клавиш для работы с файлами, например, чтобы открыть или сохранить файл. Более подробную информацию об отдельных горячих клавишах смотрите в описании параметра FileKeys в справочном руководстве по параметрам IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Кнопки печати",
		admin_daeja_viewonepro_show_print_menus: "Меню печати",
		admin_daeja_viewonepro_enable_print_keys: "Горячие клавиши печати",
		admin_daeja_viewonepro_print_keys_hover_help: "Укажите, хотите ли вы, чтобы пользователи использовали горячие комбинации клавиш для печати файлов, например, чтобы напечатать страницу или напечатать документ. Более подробную информацию об отдельных горячих клавишах смотрите в описании параметра PrintKeys в справочном руководстве по параметрам IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Кнопки обращения",
		admin_daeja_viewonepro_annotation_tooltip: "Экранная подсказка пользовательской аннотации по умолчанию:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Введите текст, который будет появляться, если для пользовательской аннотации не задано никакой экранной подсказки. Текст может включать в себя заменяемые маркеры. Например, &quot;&lt;creator&gt; создал эту аннотацию &lt;createdateonly&gt;.&quot; Более подробную информацию о заменяемых маркерах смотрите в описании параметра customAnnotationsToolTip в справочном руководстве по параметрам IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Использовать заранее заданную пользовательскую экранную подсказку",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Использовать заданную системой пользовательскую экранную подсказку, которая показана ниже в текстовом поле",
		admin_daeja_viewonepro_help_url: "URL справки:",
		admin_daeja_viewonepro_help_url_hover_help: "Задайте URL веб-страницы, содержащей справочную документацию для программы просмотра. Кнопка справки в панели инструментов средства просмотра и действие меню справки позволяют открыть веб-страницу. Если вы не укажете URL, кнопка справки и действия меню не будут показаны.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Контекст ресурса отметки изображения:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Маршрутизировать неподдерживаемое содержимое в браузер:",
		admin_daeja_viewonepro_route_docs_hover_help: "Пользователи могут просматривать неподдерживаемые файлы изображений, маршрутизируя их в браузер; при этом открывается соответствующее приложение для просмотра файла. Например, чтобы открыть документ Microsoft Word, браузер использует программу просмотра Microsoft Word.",
		admin_daeja_viewonepro_scale: "Автоматически уместить изображение:",
		admin_daeja_viewonepro_scale_best: "Уместить",
		admin_daeja_viewonepro_scale_ftow: "Подогнать к ширине",
		admin_daeja_viewonepro_scale_ftoh: "Подогнать к высоте",
		admin_daeja_viewonepro_enable_hotkeys: "Включить горячие клавиши:",
		admin_daeja_viewonepro_show_features: "Показать кнопки и меню:",
		admin_daeja_custom_settings: "Дополнительные параметры:",
		admin_daeja_custom_settings_hover_help: "Вы можете добавить другие параметры, задав имя и значение параметра. Например, вы можете указать &quot;scrollbars&quot; и &quot;true&quot;, если вы хотите, чтобы полосы прокрутки появлялись при масштабировании изображения до размера, превышающего область просмотра. Более подробную информацию об именах и значениях параметров смотрите в справочном руководстве по параметрам IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Экранная подсказка пользовательской аннотации по умолчанию:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Введите текст, который будет появляться, если для пользовательской аннотации не задано никакой экранной подсказки. Текст может включать в себя заменяемые маркеры. Например, &quot;&lt;creator&gt; создал эту аннотацию &lt;createdateonly&gt;.&quot; Более подробную информацию о заменяемых маркерах смотрите в описании параметра customAnnotationsToolTip в справочном руководстве по параметрам IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Использовать заранее заданную пользовательскую экранную подсказку",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Использовать заданную системой пользовательскую экранную подсказку, которая показана ниже в текстовом поле",
		admin_daeja_virtual_image_stamp_resource_context: "Контекст ресурса отметки изображения:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Путь файлов лицензии:",
		admin_daeja_virtual_license_path_hover_help:"Укажите полный путь каталога, содержащего файлы лицензии lic-server-virtual.v1 и lic-server.v1.",
		admin_default_license_path:"Использовать путь файлов лицензии по умолчанию",
		admin_license_path_specified:"Использовать пользовательский путь файлов лицензии",

		admin_daeja_streamer: "Сервер",
		admin_daeja_streamer_cache_root: "Каталог кэша:",
		admin_daeja_streamer_cache_root_hover_help: "Укажите полный путь каталога, в котором вы хотите сохранять кэшированные файлы для более быстрого доступа. Каталог может находиться в любой операционной системе или на любом устройстве, если он виден как файловая система продукту IBM Content Navigator и серверу IBM HTTP Server. Чтобы повысить производительность, используйте локальный каталог.",
		admin_daeja_streamer_settings: "Дополнительные параметры:",
		admin_daeja_streamer_settings_hover_help: "Вы можете добавить другие параметры, задав имя и значение параметра. Например, можно задать “cookieAllowedDomainList” и разделенный запятыми список серверов хостов.  Более подробную информацию об именах и значениях параметров смотрите в справочном руководстве по параметрам IBM Daeja ViewONE.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Параметры:",
		admin_daeja_redaction_settings_hover_help: "Вы можете добавить другие параметры, задав имя и значение параметра. Например, вы можете указать “burnIncrementalAnnotations” и ”true”. Более подробную информацию об именах и значениях параметров смотрите в справочном руководстве по параметрам IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Новый параметр",
		admin_daeja_setting_dialog_title_edit: "Изменить параметр",
		admin_daeja_setting_dialog_hover_help: "Добавьте другие параметры, задав имя и значение параметра. Например, вы можете указать “scrollbars” и “true”, если вы хотите, чтобы полосы прокрутки появлялись при масштабировании изображения до размера, превышающего область просмотра.",
		admin_daeja_setting_dialog_field_hover_help: "Более подробную информацию об именах и значениях параметров смотрите в справочном руководстве по параметрам Daeja ViewONE.",

		admin_daeja_logging: "Ведение журнала Daeja ViewONE",
		admin_daeja_logging_trace: "Включить ведение журнала трассировки",
		admin_daeja_logging_trace_net: "Включить ведение журнала сети",
		admin_daeja_logging_trace_annotations: "Включить ведение журнала аннотаций",
		admin_daeja_logging_log_file: "Файл журнала:",
		admin_daeja_logging_instructions: "Запись в журнал можно использовать для выявления ошибок в Daeja ViewONE Professional и Daeja ViewONE Virtual. Если вы знаете, что ошибка происходит для конкретной функции, вы можете производить запись в журнал для этой функции.",

		admin_v1pro_logging_trace_hover: "Используйте этот параметр для устранения общих проблем с программой просмотра.<br><br>Информация журнала записывается на Java-консоль на компьютере-клиенте. Доступ к Java-консоли можно получить из панели управления (Windows) или системных предпочтений (Mac) для вашей операционной системы.",
		admin_v1pro_logging_trace_net_hover: "Используйте этот параметр для устранения следующих проблем:<ul><li>Проблемы соединения с сервером</li><li>Проблемы с типами MIME</li><li>Проблемы со слишком большими файлами</li></ul>Кроме того, можно использовать запись в журнал трассировки сети, чтобы определить, где происходят задержки при использовании Daeja ViewONE Professional.<br><br>Информация журнала записывается на Java-консоль на компьютере-клиенте. Доступ к Java-консоли можно получить из панели управления (Windows) или системных предпочтений (Mac) для вашей операционной системы.",
		admin_v1pro_logging_trace_annotations_hover: "Используйте этот параметр для устранения проблем при создании, сохранении или загрузке аннотаций.<br><br>Информация журнала записывается на Java-консоль на компьютере-клиенте. Доступ к Java-консоли можно получить из панели управления (Windows) или системных предпочтений (Mac) для вашей операционной системы.",

		admin_virtual_logging_trace_hover: "Используйте этот параметр для устранения общих проблем с программой просмотра.<br><br>По умолчанию информация журнала записывается в файл virtual.log в подкаталоге config каталога установки IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Используйте этот параметр для устранения следующих проблем:<ul><li>Проблемы соединения с сервером</li><li>Проблемы с типами MIME</li><li>Проблемы со слишком большими файлами</li></ul>Кроме того, можно использовать запись в журнал трассировки сети, чтобы определить, где происходят задержки при использовании Daeja ViewONE Virtual.<br><br>По умолчанию информация журнала записывается в файл virtual.log в подкаталоге config каталога установки IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Используйте этот параметр для устранения проблем при создании, сохранении или загрузке аннотаций.<br><br>По умолчанию информация журнала записывается в файл virtual.log в подкаталоге config каталога установки IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Если вы включите запись в журнал для этого средства просмотра, необходимо указать полный путь и имя файла, в котором вы  будете хранить информацию журнала.  Рекомендуется дать файлу журнала имя virtual.log.",

		admin_streamer_logging_trace_hover: "Используйте этот параметр для устранения общих проблем с модулем сервера Document Streaming.<br><br>По умолчанию информация журнала записывается в файл streamer.log, который находится в подкаталоге config каталога установки IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Используйте этот параметр для устранения следующих проблем:<ul><li>Проблемы соединения с сервером</li><li>Проблемы с отдельными типами MIME</li><li>Проблемы со слишком большими файлами</li></ul>Кроме того, можно использовать запись в журнал трассировки сети, чтобы определить, где происходят задержки при использовании модуля сервера Document Streaming.<br><br>По умолчанию информация журнала записывается в файл streamer.log, который находится в подкаталоге config каталога установки IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Если вы включите запись в журнал для Document Streaming Server Module, необходимо указать полный путь и имя файла, в котором вы  будете хранить информацию журнала.  Рекомендуется дать файлу журнала имя streamer.log.",

		admin_redaction_logging_trace_hover: "Используйте этот параметр для устранения общих проблем с модулем сервера Permanent Redaction.<br><br>По умолчанию информация журнала записывается в файл redacttofile.log, который находится в подкаталоге config каталога установки IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Используйте этот параметр для устранения следующих проблем:<ul><li>Проблемы соединения с сервером</li><li>Проблемы с отдельными типами MIME</li><li>Проблемы со слишком большими файлами</li></ul>Кроме того, можно использовать запись в журнал трассировки сети, чтобы определить, где происходят задержки при использовании модуля сервера Permanent Redaction.<br><br>По умолчанию информация журнала записывается в файл redacttofile.log, который находится в подкаталоге config каталога установки IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Если вы включите запись в журнал для Permanent Redaction Server Module, необходимо указать полный путь и имя файла, в котором вы  будете хранить информацию журнала.  Рекомендуется дать файлу журнала имя redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Сконфигурируйте функции для программ просмотра и служб.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Если вы используете веб-клиент для соединения с одним или несколькими репозиториями Content Manager OnDemand, вы должны задать информацию, которая требуется для правильной работы OnDemand Web Enablement Kit. Эта информация совместно  используется всеми репозиториями Content Manager OnDemand, которые сконфигурированы для веб-клиента.",
		admin_ondemand_language: "Язык:",
		admin_ondemand_tempdir: "Временный каталог ODWEK:",
		admin_ondemand_tracegrp: "Трассировка ODWEK",
		admin_ondemand_tracedir: "Каталог трассировки:",
		admin_ondemand_tracelevel: "Уровень трассировки:",
		admin_ondemand_tracelevel_0: "0 - Без записи в журнал",
		admin_ondemand_tracelevel_1: "1 - Запись в журнал сообщений об ошибках",
		admin_ondemand_tracelevel_2: "2 - Запись в журнал сообщений с предупреждениями",
		admin_ondemand_tracelevel_3: "3 - Запись в журнал сообщений об ошибках, предупреждений и информации",
		admin_ondemand_tracelevel_4: "4 - Записываются все сообщения, включая трассировку функций",
		admin_ondemand_max_trace_filesize: "Максимальный размер файла трассировки:",
		admin_ondemand_max_trace_filesize_unlimited: "Без ограничения",
		admin_ondemand_max_trace_filesize_limited: "Ограниченный (рекомендуется)",
		admin_ondemand_max_trace_filesize_meg: "МБ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Это значение вне диапазона. Значение должно быть целым числом от 1 до 1000000.",
		admin_ondemand_afp2pdf_installdir: "Каталог установки AFP2PDF:",
		admin_ondemand_language_hover: "Укажите, на каком языке следует возвращать сообщения ODWEK.",
		admin_ondemand_tempdir_hover: "Введите каталог, в котором OnDemand Web Enablement Kit сохраняет временные файлы при обработке. Нужно ввести полный путь существующего каталога на сервере веб-программ.",
		admin_ondemand_tracedir_hover: "Введите каталог, в котором вы хотите сохранять файл трассировки ODWEK, arswww.trace. Нужно ввести полный путь существующего каталога на сервере веб-программ.",
		admin_ondemand_tracelevel_hover: "Укажите уровень информации, записываемой в файл журнала arswww.trace. Опция <b>Запись сообщений об ошибках в журнал</b> позволяет записывать минимальный объем информации журнала. Опция <b>Записываются все сообщения, включая трассировку функций</b> позволяет записывать максимальный объем информации.<br /><br />Не выбирайте опцию <b>Записываются все сообщения, включая трассировку функций</b> в производственной среде, если вы не получали таких указаний от службы поддержки программ IBM.",
		admin_ondemand_max_trace_filesize_hover: "Укажите, хотите ли вы разрешить файлу трассировки ODWEK неограниченно увеличиваться в размере, или вы хотите, чтобы веб-клиент создавал новые файлы журнала, когда файл журнала достигает определенного размера. По умолчанию разрешается, чтобы файл журнала трассировки рос до момента остановки веб-приложения на сервере веб-приложений.",
		admin_ondemand_max_trace_unlimited_hover: "Выберите эту опцию, если вы хотите, чтобы информация трассировки ODWEK записывалась в один файл журнала. Если вы выберете эту опцию, у вас может оказаться файл журнала, размер которого не позволяет открывать его при помощи стандартного средства просмотра файлов.",
		admin_ondemand_max_trace_limited_hover: "Выберите эту опцию, если вы хотите, чтобы информация трассировки ODWEK записывалась в файлы журнала меньшего размера. когда размер файла журнала достигнет максимального размера, текущий журнал будет переименован путем присоединения даты к его имени (arswww.trace.ГГГГММДД.ЧЧММСС), и будет создан новый файл журнала.",
		admin_ondemand_afp2pdf_installdir_hover: "Если вы хотите использовать утилиту преобразования AFP2PDF для преобразования документов AFP в документы PDF для просмотра и печати, укажите, в каком каталоге установлена утилита преобразования AFP2PDF на сервере веб-приложений. Например: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Администраторы",
		admin_adminusers_heading_text_multi: "Вы должны указать, у кого из пользователей есть административные полномочия на веб-клиенте. На рабочий стол администрирования могут входить только администраторы.<br /><br /><b>Важно:</b> ID пользователей у администраторов IBM Content Navigator должны совпадать с:<ul><li>ID пользователей, существующими на вашем сервере веб-программ. Эти ID пользователей не должны быть администраторами на сервере веб-приложений.</li><li>ID пользователей, существующими в репозитории по умолчанию, сконфигурированном для каждого рабочего стола, на котором есть функция администрирования.</li></ul>",
		admin_adminusers_heading_text_single: "Вы должны указать, у кого из пользователей есть административные полномочия на веб-клиенте. На рабочий стол администрирования могут входить только администраторы.<br /><br /><b>Важно:</b> ID пользователей у администраторов IBM Content Navigator должны совпадать с ID пользователей, существующими на вашем сервере веб-приложений. Эти ID пользователей не должны быть администраторами на сервере веб-приложений.",
		admin_adminusers_newuser: "Новый администратор:",
		admin_adminusers_add: "Добавить",
		admin_adminusers_remove: "Удаление",
		admin_adminusers_listheading: "Администраторы",
		admin_adminusers_nameInvalid: "Значение не должно быть дубликатом.",

		admin_sync_server_instructions: "<b>Только для пользователей FileNet P8:</b> Если вы собираетесь включить службы синхронизации для одного или нескольких репозиториев, вы должны сконфигурировать веб-клиент для использования служб синхронизации. Конфигурация служб синхронизации совместно используется всеми репозиториями в вашей среде.",
		admin_settings_instructions: "Значения, заданные вами на вкладке Параметры, применяются ко всем рабочим столам в вашей конфигурации.",
		admin_autocomplete: "Автоматически подставлять имена пользователей",
		admin_autocomplete_hover: "Укажите, должен ли веб-клиент сохранять имена пользователей в компонентах cookie браузера, чтобы подставлять имена пользователей в веб-клиент при входе в систему.<br><br>Если вы включите эту опцию, имя пользователя, который был последним, кто входил в систему веб-клиента, будет сохранено в компонентах cookie браузера и автоматически появится на странице Вход в систему, когда пользователь откроет веб-клиент.<br><br>Если доступ к приложению осуществляется с совместно используемой рабочей станции или если вы не считаете безопасным сохранять имена пользователей в компонентах cookie браузера, эту опцию следует выключить.<br /><br />Эта опция неприменима к мобильным или пользовательским приложениям.",
		admin_autocomplete_enable: "Включить",
		admin_autocomplete_disable: "Выключить",
		admin_cultural_collation: "Использовать сортировку, связанную с локалью",
		admin_cultural_collation_hover: "Если вы включите сортировку, связанную с локалью, сортировка будет выполняться на сервере репозитория. Это может привести к снижению производительности веб-клиента.<br><br>Отключение сортировки, связанной с локалью, может повысить производительность веб-клиента.",
		admin_cultural_collation_enable: "Включить",
		admin_cultural_collation_disable: "Выключить",
		admin_base_ui_style: "Стиль темы",
		admin_base_ui_style_hover: "Задайте стиль темы по умолчанию, используемой в веб-клиенте. Этот стиль используется только на рабочих столах, для которых задана тема <b>По умолчанию</b> (в том виде, в каком она задана на вкладке <b>Вид</b> в конфигурации рабочего стола).<br/></br><b>Ограничение:</b> Если в конфигурации рабочего стола используются пользовательские темы, они будут основаны на классическом стиле независимо от того, какой стиль вы выберете.",
		admin_base_ui_style_classic: "Классический",
		admin_access_control_access: "Ограничить доступ для конкретных пользователей и групп",
		admin_access_control_access_show: "Показать данные управления доступом",
		admin_access_control_access_enable: "Да",
		admin_access_control_access_disable: "Нет",
		admin_mobile_access: "Разрешить доступ из мобильных программ",
		admin_mobile_access_hover: "По умолчанию пользователи могут получить доступ к веб-клиенту из приложения IBM Content Navigator iOS.<br /><br /><b>Важно:</b> Если вы запретите пользователям доступ к веб-клиенту из приложения iOS, они все равно смогут получать доступ к веб-клиенту из веб-браузеров на своих мобильных устройствах и из всех пользовательских приложений, написанных с использованием API IBM Content Navigator, которые работают на мобильном устройстве.",
		admin_mobile_access_enable: "Да",
		admin_mobile_access_disable: "Нет",
		admin_error: "Информация сообщения об ошибке:",
		admin_error_custom: "Поиск пользовательского содержимого поддержки",
		admin_error_default: "Поиск содержимого поддержки IBM <BDO DIR='LTR'>(</BDO>по умолчанию<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Укажите, хотите ли вы направить пользователей для получения более подробной информации, если они получат сообщение об ошибке. Вы можете направить пользователей к информации в портале поддержки IBM или можете направить пользователей во внутренний ресурс, например, в консультативно-справочный стол.",
		admin_error_URL: "Префикс URL:",
		admin_error_URL_hover: "Введите URL ресурса  (например, справочного стола), в который вы хотите направлять пользователей, если они обнаружат ошибку. Например: http://localhost:номер_порта. Веб-клиент присоединит к URL номер сообщения.",
		admin_prompt_close_without_save: "Хотите закрыть окно, не сохраняя изменения?",
		admin_object_expiration_time: "Интервал обновления кэша (в минутах):",
		admin_object_expiration_time_hover: "Для повышения производительности веб-клиента можно увеличить интервал времени сохранения объектов конфигурации в кэше, таких как рабочие столы. Время по умолчанию - 10 минут. Максимальное возможное время - 1440 минут (одни сутки).<br /><br />Чтобы изменения вступили в силу, нужно перезапустить веб-программу.<br /><br />Если IBM Content Navigator внедрен в кластеризованной среде высокой доступности, любые изменения объектов конфигурации будут распространяться на узлы в кластере только после обновления кэша.",
		admin_temp_file_cleanup_interval: "Интервал сканирования для очистки кэша просмотра (в часах):",
		admin_temp_file_cleanup_interval_hover: "Запланируйте, как часто производится сканирование временного каталога, чтобы найти и удалить истекшие временные файлы. По умолчанию временный каталог сканируется каждые шесть часов. Можно задать от 6 до 48 часов.",
		admin_temp_file_expiration_interval: "Срок действия кэша просмотра (в часах):",
		admin_temp_file_expiration_interval_hover: "Задайте время, в течение которого временные файлы, связанные с операциями в программе просмотра, остаются в кэше браузера. По умолчанию срок действия этих временных файлов заканчивается через 24 часа. Можно задать от 12 до 48 часов.",
		admin_encryption_key_hover: "Ключ, используемый для функций шифрования Navigator.",
		admin_encryption_key: "Ключ шифрования:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Брендинг",
		admin_mobile_branding_main_color: "Основной цвет:",
		admin_mobile_branding_secondary_color: "Второй цвет:",
		admin_mobile_device_title: "Управление MaaS360",
		admin_mobile_device_enable_maas360: "Включить MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Здесь находится всплывающая справка по включению MaaS360",
		admin_mobile_device_maas360_developer_id: "ID разработчика MaaS360:",
		admin_mobile_device_maas360_license_key: "Лицензионный ключ MaaS360:",
		admin_mobile_settings_title: "Параметры",
		admin_mobile_email_address_hover_help: "Адрес электронной почты используется в мобильном приложении, когда пользователь щелкает по \"Отправит отчет об ошибках\".",
		admin_mobile_email_address: "Адрес электронной почты:",
		admin_invalid_email_address_message: "Введенный вами адрес электронной почты представлен в неправильном формате. Введите правильный адрес и повторите попытку.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Часть данных являются недопустимыми.",
		admin_configuration_parameters: "Параметры конфигурации",
		admin_configuration_optional_features: "Дополнительные функции",
		admin_configuration_optional_features_p8_instructions: "Выберите функции, которые вы хотите включить в этом репозитории.<p><b>Важно:</b> Если вы включите функцию, которая устанавливает надстройку в репозиторий, у вас должно быть установлено соединение с репозиторием от имени администратора Content Platform Engine или Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Выберите функции, которые вы хотите включить в этом репозитории.<p><b>Важно:</b> Эти функции изменяют модель данных в репозитории. Чтобы их включить, у вас должно быть установлено соединение с репозиторием от имени администратора библиотечного сервера.</p>",
		admin_system_properties: "Системные свойства",
		admin_system_properties_for: "Системные свойства для:",
		admin_available_properties: "Доступные свойства",
		admin_displayed_properties: "Показанные свойства",
		admin_selected_properties: "Выбранные свойства",
		admin_selected_filtered_properties: "Скрытые свойства",
		admin_available_operators: "Показанные операторы",
		admin_selected_filtered_operators: "Скрытые операторы",
		admin_system_properties_shown: "Показанные свойства",
		admin_system_properties_hidden: "Скрытые свойства",
		admin_available_menu_items: "Доступные действия:",
		admin_selected_menu_items: "Выбранные действия:",
		admin_menu_global: "Применяется, если не выбрано никаких элементов:",
		admin_menu_multiple_document: "Применяется, если выбрано несколько элементов:",
		admin_menu_privileges: "Необходимые полномочия:",
		admin_menu_plugin: "Подключаемый модуль:",
		admin_menu_repository_types: "Тип репозиториев:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Разделитель",
		admin_browse: "Обзор",
		admin_search: "Поиск",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Редакция на основе ролей",
		admin_connections_library_enabled: "Компонент IBM Connections включен",
		admin_office_conf: "Изменить интеграцию",
		admin_desktop_conf_label: "Конфигурация рабочего стола",
		admin_ms_office_conf_label: "Конфигурация Office",
		admin_workflows: "Рабочие потоки",
		admin_file_types: "Типы файлов",
		admin_file_type_contains_label: "Тип файла содержит",
		admin_name_propepty: "Имя",
		admin_cm_name_property_default: "Использовать имя по умолчанию",
		admin_cm_name_property_default_hover: "По умолчанию свойство иерархического имени ICM (ICM$NAME) используется как имя элемента, если это свойство определено для этого элемента.  Если свойство иерархического имени ICM (ICM$NAME) недоступно, в качестве имени элемента используется первое свойство, помеченное флагом как \"represents\".",
		admin_cm_name_property: "Задайте свойство имени элемента",
		admin_cm_name_property_hover: "Укажите, какое свойство используется как имя для документов и папок.",
		admin_name_property: "Свойство имени:",
		admin_doc_name_property: "Свойство имени документа:",
		admin_doc_name_property_hover: "Укажите, какое свойство используется в качестве имени документа.",
		admin_folder_name_property: "Свойство имени папки:",
		admin_folder_name_property_hover: "Укажите, какое свойство используется в качестве имени папки.",
		admin_all_searches_label: "Сколько поисков следует показать.",
		admin_unlimited: "Нет ограничений",
		admin_limit: "Ограничения",
		admin_repository: "Репозиторий",
		admin_application_space: "Пространство программы",
		admin_available_application_spaces: "Доступные пространства программ:",
		admin_selected_application_spaces: "Выбранные пространства программ:",
		admin_label: "Метка",
		admin_repository_box_placeholder: "Выберите репозиторий Box",
		admin_repository_placeholder: "Выберите репозиторий",
		admin_search_match: "Соответствие:",
		admin_search_match_all: "Соответствие всем критериям поиска",
		admin_search_match_any: "Соответствие любому из критериев поиска",
		admin_search_match_hover: "Укажите, какая опция должна быть выбрана по умолчанию в меню <b>Опции свойств</b>.",

		admin_repository_redactions_instructions: "Можно сконфигурировать редакции на основе ролей для этого репозитория.",
		admin_repository_redaction_policies_description: "Можно создать и управлять политикой редакции, которая связывает причины редакции с пользователями и группами, которые могут читать конфиденциальные данные и могут исправлять аннотации, защищающие эти конфиденциальные данные от просмотра.",
		admin_repository_redaction_roles_instruction: "Можно создать роль редакции для того, чтобы связать заданные группы или пользователей с возможностью читать конфиденциальные данные или возможностью исправлять аннотации, защищающие конфиденциальные данные от просмотра. Роль редакции должна быть связана с причиной редакции в политике редакции перед тем, как пользователи и группы получили возможность читать данные или исправлять аннотации.",
		admin_repository_redaction_reasons_instruction: "Можно сконфигурировать причины редакции для вашего репозитория.",
		admin_repository_redaction_policies: "Конфигурация политики редакции",
		admin_repository_redaction_roles: "Конфигурация ролей редакции",
		admin_repository_redaction_reasons: "Конфигурация причин редакции",
		admin_repository_redaction_roles_type: "Тип",
		admin_repository_redaction_roles_type_hover: "Редактор может создавать, исправлять или удалять конкретные типы редакций на основе ролей, в то время как программа просмотра может просматривать конкретные типы конфиденциальных данных.",
		admin_repository_redaction_roles_type_editor: "Редактор",
		admin_repository_redaction_roles_type_viewer: "Средство просмотра",
		admin_repository_redaction_roles_membership: "Членство",
		admin_repository_redaction_roles_membership_hover: "Выберите редактора, которого необходимо для этой роли.",
		admin_repository_redaction_roles_user_group_hover: "Найдите пользователей и группы, или выберите редактора, необходимого для этой роли.",
		admin_repository_redaction_roles_description: "Можно создать и управлять ролями редакции, которые связывают пользователей или группы с возможностью читать конфиденциальные данные и исправлять аннотации, защищающие эти конфиденциальные данные от просмотра.",
		admin_repository_redaction_new: "Новая роль редакции",
		admin_repository_redaction_role_avail_editors: "Доступные редакторы редакции",
		admin_repository_redaction_role_avail_users: "Доступные пользователи",
		admin_repository_redaction_role_avail_groups: "Доступные группы",
		admin_repository_redaction_role_selected_editors: "Выбранные редакторы редакции",
		admin_repository_redaction_role_selected_users_groups: "Выбранные пользователи и группы",
		admin_repository_redaction_role_add_editor: "Новые редакторы...",
		admin_repository_redaction_role_access_type: "Доступ",
		admin_repository_redaction_role_access_type_access: "Разрешить",
		admin_repository_redaction_role_access_type_no_access: "Отказать",
		admin_repository_redaction_role_users: "Пользователи",
		admin_repository_redaction_role_groups: "Группы",
		admin_repository_redaction_role_editors: "Редакторы",
		admin_delete_confirmation_redaction_roles: "Хотите удалить выбранную роль редакции?",
		admin_repository_edit_redaction_role: "Роль редакции: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Доступ по умолчанию",
		// RBA
		desktop_user_group_acl: "Администраторы рабочего стола",
		desktop_user_group_remove: "Удаление",
		desktop_rba_membership: "Членство:",
		desktop_rba_membership_list_label: "Имя",
		admin_repository_redaction_policy_hover: "Введите описание, которое позволит пользователям отличить данную политику от других политик.",
		admin_repository_new_redaction_policy: "Новая политика редакции",
		admin_repository_policy_name: "Имя политики",
		admin_repository_reason_redactions: "Причины редакции:",
		admin_repository_role_editors: "Редакторы",
		admin_repository_role_viewers: "Программы просмотра",
		admin_repository_redaction_policy_instruction: "Вы можете создать политику редакции для связи выбранных причин редакции с редакторами редакции и программами просмотра редакции.",
		admin_repository_redaction_reasons_hover: "Выберите один или более типов конфиденциальных данных, к которым вы хотите ограничить доступ для большинства пользователей, например, персонально-идентифицирующая информация, коммерческая тайна, или информация, которая является конфиденциальной или собственностью вашей компании.",
		admin_repository_readaction_available_reasons: "Доступные причины",
		admin_repository_readaction_selected_reasons: "Выбранные причины",
		admin_repository_readaction_new_reason: "Новая причина...",
		admin_repository_redeaction_reasons: "Причины редакции:",
		admin_repository_readaction_editor_permmission: "Редакторы редакции:",
		admin_repository_redaction_editors_hover: "Выберите роли, которые могут создавать и исправлять редакцию для выбранных причин.",
		admin_repository_readaction_new_editor_role: "Новая роль редактора...",
		admin_repository_readaction_available_editors: "Доступные роли редактора",
		admin_repository_readaction_selected_editors: "Выбранные роли редактора",
		admin_repository_readaction_viewer_permmission: "Программы просмотра редакции:",
		admin_repository_redaction_viewers_hover: "Выберите роли, которые могут просматривать конфиденциальные данные для выбранных причин. Редакция не применяется для пользователей и групп с этими ролями.",
		admin_repository_readaction_new_viewer_role: "Новая роль программы просмотра...",
		admin_repository_readaction_available_viewers: "Доступные роли программы просмотра",
		admin_repository_readaction_selected_viewers: "Выбранные роли программы просмотра",
		admin_repository_reason_redactions_header: "Причины редакции",
		admin_delete_confirmation_redaction_policy: "Хотите удалить выбранную политику редакции?",
		admin_role_type_repository: "Репозиторий",
		admin_role_type_administrator: "Администратор",
		admin_role_type_template: "Шаблон",
		admin_role_type_teamspace: "Пространство команды",
		admin_role_type_author: "Редактор",
		admin_role_type_user: "Средство просмотра",
		admin_collaboration_services_instructions: "Если у вас есть IBM Connections и веб-программа FileNet Collaboration Services, вы можете сконфигурировать пространства команд сообщества и потоки активности для репозитория.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Конфигурация библиотеки сообщества",
		admin_collaboration_community_instruction: "Вы можете сконфигурировать один репозиторий в вашем домене IBM FileNet P8, чтобы хранить библиотеки сообщества IBM Connections (также именуемые пространствами команд). Когда пользователи создают библиотеку сообщества при помощи IBM Connections, она сохраняется в репозитории, назначенном в качестве репозитория библиотеки сообщества.",
		admin_collaboration_community_teamspaces: "Использовать этот репозиторий для библиотек сообщества:",
		admin_collaboration_community_teamspaces_hover: "Для сохранения новых библиотек сообщества можно использовать только один репозиторий в вашем домене IBM FileNet P8. Если вы включите этот репозиторий и у вас есть существующий репозиторий, существующий репозиторий будет отключен. Однако все существующие библиотеки останутся в текущем репозитории.",
		admin_collaboration_connections_anonymous: "Разрешить анонимный доступ к общедоступному содержимому:",
		admin_collaboration_connections_anonymous_hover: "Если на сервере IBM Connections есть общедоступные или модерируемые сообщества, вы можете сконфигурировать FileNet Collaboration Services, так чтобы разрешить пользователям производить обзор и скачивание содержимого из библиотек в этих сообществах, не входя предварительно в систему.<br><br>Пользователи, которые анонимно получают доступ к библиотекам сообщества, не могут ни создавать, ни изменять, ни удалять содержимое.<br><br><b>Важно:</b> Вы должны указать пользователя LDAP IBM FileNet P8 как анонимного пользователя и сконфигурировать этого пользователя с использованием роли <b>Anonymous</b> на сервере WebSphere Application Server.",
		admin_collaboration_connections_url: "URL IBM Connections:",
		admin_collaboration_connections_url_hover: "Задайте URL для сервера IBM Connections, используя формат http://сервер_IBM_Connections:номер_порта.  Если компонент IBM Connections сконфигурирован для использования IBM HTTP Server, вы можете пропустить номер порта в URL.<br><br>URL должен быть доступен пользователям IBM Connections, та как это ссылка, которую FileNet Collaboration Services использует для создания ссылок на целевые страницы документов в IBM Connections.",
		admin_collaboration_connections_url_http_use: "Использовать URL IBM Connections",
		admin_collaboration_connections_url_https_use: "Использовать URL HTTPS IBM Connections",
		admin_collaboration_connections_url_specify: "Выберите URL",
		admin_collaboration_connections_url_https: "URL HTTPS IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Если компонент IBM Connections сконфигурирован для использования SSL, задайте URL HTTPS для сервера IBM Connections, используя формат https://сервер_IBM_Connections:номер_порта.  Если компонент IBM Connections сконфигурирован для использования IBM HTTP Server, вы можете пропустить номер порта в URL.",

		admin_collaboration_connections_gadget_url: "URL гаджета IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL получения IBM Connections:",
		admin_collaboration_connections_security: "Администраторы сообщества:",
		admin_collaboration_connections_security_hover: "Укажите пользователей и группы, которые могут производить администрирование содержимого в библиотеках сообщества.<br><br>Глобальные администраторы могут создавать, изменять, удалять и предоставлять права на доступ к библиотекам сообщества и содержимому библиотек сообщества. Когда вы задаете пользователя как глобального администратора, этому пользователю предоставляются полномочия ClbGlobalAdministrator в репозитории.<br><br>Глобальные администраторы проверки могут утверждать и отклонять содержимое, находящееся в состоянии проверки для опубликования в библиотеке сообщества. Когда вы задаете пользователя как глобального администратора проверки, этому пользователю предоставляются полномочия ClbGloablReviewAdministrator в репозитории.",

		admin_collaboration_connections_admins: "Глобальные администраторы",
		admin_collaboration_connections_admins_review: "Глобальные администраторы проверки",
		admin_collaboration_connections_seedlist: "Проиндексировать содержимое библиотеки сообщества:",
		admin_collaboration_connections_seedlist_hover: "Укажите, должен ли компонент IBM Connections производить просмотр библиотек сообщества в этом репозитории для создания индекса поиска. Создание индекса может повлиять на производительность репозитория.<br><br>Если в репозитории установлены расширения индексации поиска Social Collaboration, эта опция, по умолчанию, будет включена. Если в репозитории не установлены расширения индексации поиска Social Collaboration, надстройка будет установлена в репозитории, когда вы включите эту опцию.",
		admin_collaboration_activity_stream: "Конфигурирование события потока операций",
		admin_collaboration_activity_stream_label: "Переносить информацию о событиях в IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Укажите, хотите ли вы переносить информацию о событиях, например, о создании документов, резервированиях, активациях, комментариях, тегах и совместно используемых ресурсах, в IBM Connections.<br><br><b>Важно:</b> Перенос уведомлений в IBM Connections может повлиять на производительность репозитория.",

		admin_collaboration_activity_stream_instruction: "Вы можете сконфигурировать этот репозиторий для переноса информации о событиях, например, комментариях и утверждениях документов, в IBM Connections. События появляются на странице <b>Последние обновления</b> в сообществах IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Игнорировать информацию о событиях для отдельных пользователей и групп:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Вы можете игнорировать события, генерируемые отдельными пользователями или группами, например, администраторами или системными учетными записями, чтобы сократить число уведомлений, которые видят пользователи. Например, если вы перенастраиваете содержимое, вы можете счесть целесообразным указать, что события, генерируемые учетной записью, используемой для перенастройки, игнорируются.",
		admin_collaboration_activity_stream_userid: "Имя пользователя IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Укажите системную учетную запись, которую Content Platform Engine будет использовать для аутентификации и отправки информации о событиях в IBM Connections. Пользователь должен быть членом роли <b>trustedExternalApplication</b> в программе Widget Container в IBM Connections.<br><br><b>Совет:</b> По умолчанию у администратора IBM Connections есть соответствующие полномочия. Можно использовать ID администратора в качестве имени пользователя.",
		admin_collaboration_activity_stream_password: "Пароль пользователя IBM Connections:",

		admin_help_url: "URL справки для конечного пользователя:",
		admin_help_url_hover: "<b>Важное замечание:</b> Устанавливаемый пользователем IBM Knowledge Center не будет обновляться с IBM Content Navigator версии 3.0.0. За дополнительной информацией об использовании пользовательской справки обращайтесь в службу поддержки.<br><br>Для IBM Content Navigator версии 3.0.0 URL справки конечного пользователя соответствует IBM Knowledge Center. Этот URL для IBM Knowledge Center следующий: http://www.ibm.com/support/knowledgecenter.<br><br>Если вы хотите продолжать использовать предыдущую версию устанавливаемого пользователем IBM Knowledge Center, укажите URL экземпляра устанавливаемого пользователем IBM Knowledge Center, внедренного IBM Content Navigator Configuration and Deployment Tool. Этот URL должен быть доступен компьютерам-клиентам. Формат URL: http://имя_сервера:номер_порта/kc.<br><br>Имя сервера и номер порта можно получить из файла console.log, находящегося в подкаталоге KnowledgeCenter/logs каталога установки IBM Content Navigator.",

		admin_help_default: "Использовать справку по умолчанию, предоставленную IBM",
		admin_custom_help: "Использовать пользовательскую систему справки",
		admin_help_kc: "Использовать пользовательскую справку в установленном заказчике центре знаний IBM",
		admin_help_kc_hover: "<b>Важное замечание:</b> Устанавливаемый пользователем IBM Knowledge Center не будет обновляться с IBM Content Navigator версии 3.0.0. За дополнительной информацией об использовании пользовательской справки обращайтесь в службу поддержки.<br><br>Если вы хотите продолжать использовать предыдущую версию устанавливаемого пользователем IBM Knowledge Center, включите эту опцию, чтобы продолжать добавлять содержимое к ранее внедренному экземпляру устанавливаемого пользователем IBM Knowledge Center.",
		admin_help_taxonomy: "Код таксономии:",
		admin_help_taxonomy_hover: "Задайте код таксономии для пользовательской справки.<br><br>Код таксономии для IBM Content Navigator - SSEUEX. Если вы хотите увидеть справку под другим именем продукта в установленном заказчиком центре знаний IBM, вы должны добавить уникальный код таксономии в файл KC_taxonomy.ditamap в каталоге KnowledgeCenter/usr/taxonomy в каталоге установки IBM Content Navigator.",
		admin_help_context: "Контекст справки:",
		admin_help_context_hover: "Задайте контекст справки для пользовательской справки.<br><br>Справка для IBM Content Navigator находится в каталоге KnowledgeCenter/usr/content/com.ibm.usingeuc.doc в каталоге установки IBM Content Navigator. Контекст справки по умолчанию - это com.ibm.usingeuc.doc. Если вы хотите задать пользовательскую справку, добавьте содержимое в новый подкаталог в каталоге KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Целевая страница:",
		admin_help_welcome_hover: "Задайте имя раздела, которое вы хотите использовать в качестве целевой страницы, когда пользователи получают доступ к справке. Вы должны создать файл свойств, который задает расположение целевой страницы, и добавить файл свойств в каталог KnowledgeCenter/usr/conf каталога установки IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Файл JSON расширений типов Mime:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Проверьте имя файла JSON и полный путь файла. Файл может быть общим файлом из файловой системы или URL, указывающим на файл JSON.  <br><br>Содержимое файла JSON - это массив определений типов Mime. <br><br>Определение типа Mime содержит четыре ключа: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Первые два ключа, \"mimeTypes\" и \"extensions\", являются обязательными, и они могут представлять собой строчные массивы, разделенные символом \",\". Последние два ключа, \"fileType\" и \"iconName\", являются необязательными. <br><br>Например: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Конфигурирование менеджера операций",
		admin_taskmanager_service: "Служба менеджера операций:",
		admin_taskmanager_service_hover: "Укажите, хотите ли вы использовать службу менеджера операций для создания и запуска асинхронных операций. <br><br>Если вы измените этот параметр, вы должны перезапустить веб-приложение IBM Content Navigator, чтобы изменения вступили в силу.",
		admin_taskmanager_url: "URL службы менеджера операций:",
		admin_taskmanager_url_hover: "Задайте URL, используя который, другие приложения смогут взаимодействовать со службой менеджера операций. Формат URL: http://имя_сервера:номер_порта/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Каталог журнала менеджера операций:",
		admin_taskmanager_logdirectory_hover: "По умолчанию файлы журналов для службы менеджера операций записываются в тот же каталог, что и файлы журналов сервера веб-приложений. <br><br>Если вы хотите, чтобы информация журнала записывалась в другой каталог на сервере IBM Content Navigator, задайте полный путь каталога, в котором вы хотите хранить файлы журнала, сгенерированные компонентом менеджера операций. <br><br>Если вы измените этот параметр, вы должны перезапустить веб-приложение IBM Content Navigator, чтобы изменения вступили в силу.",
		admin_taskmanager_heartBeatMonitor: "Мониторинг контрольного сигнала кластера",
		admin_taskmanager_heartBeatMonitor_hover: "Только для высокодоступных кластерных сред. Если включить эту опцию, служба менеджера операций перенаправит задачи с узлов, которые в настоящий момент выключены, на узлы, которые сейчас работают. <br><br>Если вы измените этот параметр, вы должны перезапустить веб-приложение IBM Content Navigator, чтобы изменения вступили в силу.",

		admin_syncserver_title: "Конфигурация сервера синхронизации",
		admin_syncserver_enable: "Службы синхронизации:",
		admin_syncserver_enable_hover: "Укажите, хотите ли вы, чтобы пользователи, которые получают доступ к этому рабочему столу, смогли синхронизировать свои элементы на рабочих станциях и мобильных устройствах.<br><br><b>Важно:</b> Чтобы использовать эту опцию, вы также должны выполнить следующие операции:<ul><li>Задайте <b>Общедоступный URL служб синхронизации</b> в разделе <b>Службы синхронизации</b> в утилите администрирования.</li><li>Добавьте репозиторий, для которого службы синхронизации включены для этого рабочего стола.</li></ul>Если вы выключите эту опцию, но добавите репозиторий, для которого службы синхронизации включены для этого рабочего стола, параметры репозитория будут игнорироваться.",
		admin_mobileqr_enable: "Показать код QR IBM Navigator на странице входа в систему:",
		admin_mobileqr_enable_hover: "Включите эту опцию, если хотите, чтобы на экране появлялся код QR для мобильного приложения IBM Navigator на странице входа в веб-клиент. <br><br>Когда пользователь сканирует код QR, он переходит в соответствующий склад приложений для своего устройства, где он может скачать мобильное приложение IBM Navigator.",

		admin_streamlineservice_enable: "Изменить службу:",
		admin_streamlineservice_enable_hover: "Только для пользователей FileNet P8. Включите эту опцию, если хотите, чтобы пользователям рабочего стола было легко добавлять и изменять документы из собственных приложений на своих рабочих станциях. <br><br>Чтобы использовать этот параметр, нужно также: <ul><li>Включить службу редактирования в одном или нескольких репозиториях, связанных с этим рабочим столом</li><li>Установить клиент редактирования IBM Content Navigator на рабочих станциях пользователей</li></ul>",

		admin_repository_general_instructions: "Прежде чем конфигурировать параметры, системные свойства, папки и т.д., вы должны соединиться с репозиторием.",
		admin_repository_system_instructions: "Укажите, какие системные свойства должны быть показаны для документов и папок в этом репозитории.",

		admin_desktop_general_create_instructions: "Рабочий стол определяет, что сможет увидеть пользователь и как он входит в систему веб-клиента. После создания рабочего стола вы можете отправить URL рабочего стола пользователям, чтобы они смогли получить доступ к этому рабочему столу.",
		admin_desktop_admin_instructions: "Рабочий стол администрирования прилагается к веб-клиенту, чтобы дать пользователям-администраторам возможность настраивать веб-клиент. У этого рабочего стола есть доступ ко всем репозиториям, которые сконфигурированы для веб-клиента.",
		admin_desktop_repositories_instructions: "Укажите, доступ к каким репозиториям пользователи смогут получать с этого рабочего стола. Прежде чем вы сможете добавить репозитории на рабочий стол, вы должны их сконфигурировать.<br><br><b>Совет:</b> Вы можете ограничить то, какие репозитории будут доступны для каждой функции, когда будете конфигурировать схему рабочего стола.",
		admin_desktop_menus_instructions: "Укажите, доступ к каким меню пользователи смогут получать на этом рабочем столе. Меню задают действия, которые будут доступны в зависимости от того, что выбрано в интерфейсе.<br><br><b>Совет:</b> Вы можете настроить содержимое меню в разделе <b>Меню</b> в утилите администрирования или можете создать новые типы меню путем создания подключаемых модулей.",

		admin_desktop_no_repositories: "Нет сконфигурированных репозиториев.",

		admin_desktop_id_hover: "ID рабочего стола включается в URL веб-клиента и указывает, какой рабочий стол откроется, когда пользователь войдет в систему веб-клиента. ID должен быть уникальным, и после сохранения рабочего стола изменить ID будет нельзя.<br><br>ID может содержать только алфавитно-цифровые символы, и в нем учитывается регистр символов.",
		admin_desktop_id_disabled_hover: "Изменить ID рабочего стола нельзя. Если вы хотите использовать другой ID, вы должны создать новый рабочий стол.",
		admin_desktop_name_hover: "Имя рабочего стола не должно содержать следующих символов: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Ваша конфигурация может содержать только один рабочий стол по умолчанию.",

		admin_repository_id_disabled_hover: "Изменить ID репозитория нельзя. Если вы хотите использовать другой ID, вы должны создать новое соединение с репозиторием.",
		admin_printService_enable: "Напечатать с использованием службы печати IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Если вы решите включить службу печати IBM Daeja ViewONE, документы будут преобразованы в формат PDF и печать можно будет выполнить с использованием любого веб-браузера.<br><br>Если вы решите выключить службу печати IBM Daeja ViewONE, вы будете ограничены печатью документов только в веб-браузерах, которые поддерживают Java-апплеты.  Некоторые веб-браузеры не поддерживают Java-апплеты, поэтому они не поддерживают печать апплета.<br><br>Смотрите документацию для поддерживаемых браузеров.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Домашний каталог пользователя",
		admin_file_tracking_doc_directory_my_documents: "Каталог документов пользователя",
		admin_file_tracking_doc_directory_qp: "Полный путь",
		admin_file_tracking_section_tile: "Конфигурация отслеживания файлов",
		admin_file_tracking_home_path: "Путь к домашнему каталогу",
		admin_file_tracking_my_documents: "Мои документы",
		admin_file_tracking_exact_path: "Полное имя каталога:",
		admin_file_tracking_qp: "Полный путь",
		admin_file_tracking_ev: "Переменная среды",
		admin_file_tracking_ev_us: "Пользовательская переменная среды ",
		admin_file_tracking_del_local_copy: "Удалить локальную копию:",
		admin_file_tracking_yes: "Да",
		admin_file_tracking_no: "Нет",
		admin_file_tracking_del_local_copy_rt_state_editable: "Разрешить пользователям переопределять этот параметр",
		admin_file_tracking_del_local_copy_rt_state1: "Да",
		admin_file_tracking_del_local_copy_rt_state2: "Нет",
		admin_file_Tracking_label: "Отслеживание файлов:",
		admin_file_Tracking_disable: "Выключить",
		admin_file_Tracking_enable: "Включить",
		admin_file_tracking_label_hover_help: "Отслеживание файлов использует апплет для резервирования и скачивания документов в конкретный каталог на компьютерах пользователей. Апплет также позволяет компоненту IBM Content Navigator находить документы на компьютерах пользователей, когда пользователи активируют документы.",
		admin_file_tracking_doc_directory: "Положение хранения:",
		admin_file_tracking_open_file: "Автоматически открывать файл",
		admin_file_Tracking_append_qualified_path: "Присоединить каталог",
		admin_file_Tracking_append_qualified_path_hover_help: "Вы можете присоединить каталог в конец переменной среды, если вы хотите, чтобы документы были сохранены в конкретном подкаталоге. <br/><br/>Например, можно указать, что документы скачиваются в каталог <i>EnterpriseDocuments</i> в домашнем каталоге пользователя.",
		admin_file_Tracking_append_ev: "Присоединить переменную среды",
		admin_file_Tracking_append_ev_hover_help: "Вы можете присоединить переменную среды, если хотите, чтобы документы были сохранены в динамически указанном каталоге, например, в каталоге пользователя.<br/><br/>Например, можно указать, что документы хранятся в подкаталоге <i>имя_пользователя</i> в совместно используемом сетевом каталоге. ",
		admin_file_tracking_doc_directory_hover_help: "Укажите, где следует сохранять документы при их резервировании и загрузке.<br/><br/> <b>Совет</b>: Если вы хотите сохранить документы в домашнем каталоге пользователя или в каталоге документов по умолчанию, выберите <b>Переменная среды</b>, что включает в себя заранее заданные переменные, указывающие на эти положения.",
		admin_file_tracking_qualified_path_hover_help: "Используйте соответствующую структуру каталогов для операционной системы Windows или Mac, чтобы задать каталог или сетевой каталог, в котором вы хотите хранить документы. <ul><li>В Windows включите в путь букву диска, например, C:\\Enterprise Documents.</li><li>В случае совместно используемого сетевого каталога введите путь в формате \\\\имя_сервера\\каталог</li></ul><br/><b>Важно:</b> Чтобы использовать эту опцию, заданная вами структура каталога должна позволять создавать себя на всех рабочих станциях клиентов в вашей среде.",
		admin_file_tracking_environment_variable_path_hover_help: "Используйте соответствующие переменные среды для операционной системы Windows или Mac, чтобы задать каталог или сетевой каталог, в котором вы хотите хранить документы. <br/><br/>Опция <b>Домашний каталог пользователя</b> позволяет сохранить документы в следующем каталоге:<br/><ul><li>Windows: C:\\Users\\имя_пользователя</li><li>Mac: /Users/имя_пользователя</li></ul><br/>Опция <b>Каталог документов пользователя</b> позволяет сохранить документы в следующем каталоге:<br/><ul><li>Windows: C:\\Users\\имя_пользователя\\Documents</li><li>Mac: /Users/имя_пользователя/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Укажите, удаляется ли локальная копия документа, когда пользователи добавляют или активируют документы в репозитории.<br/><br/>Удаление локальной копии позволяет вам:<br/><ul><li>Принудительно применить соответствие политикам ИТ</li><li>Гарантировать, что пользователи работают с последними версиями документов</li></ul><br/><b>Ограничение:</b> Этот параметр не используется, когда пользователи добавляют документы, перетаскивая их.<br/><br/>В случае IBM Content Navigator для Microsoft Office вы должны выбрать <b>Удалять локальные файлы, когда пользователи добавляют или активируют документ или отменяют его резервирование</b> в разделе <b>Конфигурация офиса</b> на рабочем столе.",
		admin_file_tracking_open_file_hover_help: "Этот параметр переопределяет все предпочтения обработки документов, сконфигурированные в веб-браузерах пользователей. </br></br><b>Ограничение:</b> Этот параметр не используется продуктом IBM Content Navigator для Microsoft Office.",
		admin_file_tracking_over_write_file: "Перезаписывать локальную копию:",
		admin_file_tracking_over_write_file_hover_help: "Укажите, следует ли перезаписывать локальную копию документа, когда пользователи резервируют документы из репозитория. <br/><br/>Перезапись локальной копии позволяет вам:<br/><ul><li>Гарантировать, что пользователи работают с последними версиями документов</li><li>Запретить пользователям видеть приглашение, если существует локальная копия</li></ul> </br></br><b>Ограничение:</b> Этот параметр не используется продуктом IBM Content Navigator для Microsoft Office, если вы выберете <b>Разрешить пользователям переопределять этот параметр</b>.",
		admin_file_tracking_over_write_file_state_editable: "Разрешить пользователям переопределять этот параметр",
		admin_file_tracking_inline_help: "Отслеживание файлов улучшает организацию процесса резервирования и активации документов в репозитории. Это также позволяет вам управлять тем, как документы хранятся на компьютерах пользователей. <br/><br/>Кроме того, отслеживание файлов позволяет отслеживать документы в нескольких компонентах IBM Content Navigator, например, в веб-клиенте и в IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Прежде чем соединиться с репозиторием, вы должны включить аутентификацию Стандартная или Сервер.",
		admin_box_use_oauth: "Тип аутентификации:",
		admin_box_use_oauth_hover: "Выберите в производственной среде Стандартная аутентификация или Аутентификация на сервере, предоставляя доступ к документам Box из IBM Content Navigator. Задайте значения client_id и client_secret OAuth2, связанные с этим внедрением IBM Content Navigator. Вы сможете получить эти значения из Box после создания приложения Box для сервера IBM Content Navigator.<br/><br/>В среде разработки выберите Аутентификация разработчика. Разработчики смогут войти в систему Box, используя свою учетную запись разработчика, и смогут сгенерировать маркер разработчика, который будет действовать 60 минут. Маркеры разработчиков дают возможность разработчикам входить в систему Box, используя маркер разработчика в качестве пароля для любого ID пользователя.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Поддомен учетной записи предприятия Box:",
		admin_box_share: "ID соединения менеджера задач:",
		admin_box_share_hover: "При копировании Box или совместном использовании Box менеджер задач использует ID пользователя-администратора и пароль для выполнения фоновых задач, которые изменяют репозиторий.<br/><br/>Щелкните по Задать и войдите в систему Box, используя действительную учетную запись администратора Box.<br/><br/>Если вы сконфигурируете рабочий стол, выбрав этот репозиторий Box в качестве репозитория для совместно используемых файлов, вы должны задать пользователя-администратора Box, у которого есть неограниченное пространство хранения в Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Автоматически открывать файл",
		file_tracking_runtime_overwrite_hover_help: "Если вы не выберете эту опцию и у вас в локальной файловой системе есть документ с таким же именем, документ будет зарезервирован, но не скачан, пока вы не выполните одно из следующих действий:<br/><ul><li> Загрузите документ в подкаталог каталога по умолчанию. Если вы выберете подкаталог, расположение документа сможет отслеживать веб-приложение.</li><li>Переименуйте документ, который вы скачиваете. Переименование документа предупреждает конфликт имен файлов.</li></ul>",
		open_file: "Автоматически открывать файл",
		over_write_file: "Перезаписывать локальную копию",
		checkout_and_download_file: "Зарезервировать и скачать документы",
		download_to_local_directory: "Скачать в:",
		checkout_and_download_button_title: "Зарезервировать и скачать",
		checkout_without_java_confirmation_dialog: "Файл нельзя скачать и отслеживать функцией отслеживания файлов.",
		browse_for_directory: "Обзор",
		selected_documents: "Выбранные документы",

		checkout_without_java_confirmation_text: "Эта проблема может быть вызвана следующими причинами:<br/><ul><li>На этой рабочей станции не установлена Java Runtime Environment (JRE).</li><li>Подключаемый модуль Java не включен в вашем веб-браузере.</li><li>Ваш веб-браузер не поддерживает Java.</li></ul><br/><br/>Чтобы устранить эту проблему, выполните следующее действие:<br/><br/><ul><li>Если вы хотите продолжить скачивание файла без включенного отслеживания файла, нажмите OK.</li><li>Если вы хотите скачать файл при включенном отслеживании файлов, отмените скачивание и убедитесь, что на рабочей станции установлена JRE и подключаемый модуль Java включен в веб-браузере.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Документ зарезервирован и скачан, но открыть документ нельзя.",
		runtime_file_tracking_open_error_explanation: "Операционная система, установленная на вашей рабочей станции, не поддерживает файлы этого типа.",
		runtime_file_tracking_open_error_userResponse: "Для устранения этой проблемы выполните одно из следующих действий:<br/><br/><ul><li>Если вам нужно работать с документом, откройте веб-клиент с другой рабочей станции, на которой используется другая операционная система.</li><li>Если вам нужно только просмотреть документ, щелкните правой кнопкой мыши по документу в веб-клиенте и выберите Открыть.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Документ зарезервирован, но не скачан.",
		runtime_file_tracking_save_file_error_explanation: "Документ с таким же именем существует в вашей локальной файловой системе, но он не перезаписан. ",
		runtime_file_tracking_save_file_error_userResponse: "Если вы хотите скачать файл из репозитория, вы должны перезаписать локальную копию документа при скачивании документа из репозитория.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Документ зарезервирован, но его нельзя ни скачать, ни открыть.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Документ с таким же именем существует в вашей локальной файловой системе. Однако файл не был перезаписан, что не позволяет скачать и открыть документ в репозитории.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Если вы хотите скачать файл из репозитория, вы должны перезаписать локальную копию документа при скачивании документа из репозитория.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Скачать документ невозможно.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Переменная среды ${0}, которая требуется для отслеживания файлов, не задана на этом компьютере клиента.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Чтобы устранить проблему:<br/><br/><ul><li>Добавьте переменную среды ${0} в переменные среды операционной системы.</li><li>Выйдите из веб-клиента и закройте веб-браузер. Затем снова войдите в систему.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Документ нельзя скачать и отслеживать апплетом отслеживания файлов.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Каталог ${0}, который требуется для отслеживания файлов, не задан, и его невозможно создать.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Чтобы устранить эту проблему, выполните следующее действие:<br/><br/><ul><li>Щелкните по Обзор и выберите другой каталог на компьютере-клиенте. Если выбрать эту опцию, файл не будет отслеживаться.</li><li>Обратитесь к своему системному администратору и попросите его задать другой каталог, который будет использоваться для отслеживания файлов. Например, это может потребоваться, если указанный каталог предназначен для операционной системы Windows, а вы работаете в Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Если доступ к этому рабочему столу осуществляется с устройств с разными операционными системами, вы можете сократить вероятность проблем, выполнив одно из следующих действий:<br/><br/><ul><li>Используйте переменные среды, чтобы задать положение хранения на компьютерах-клиентах.</li><li>Создайте другие рабочие столы для пользователей каждого типа устройств. Например, создайте рабочий стол для пользователей с операционной системой Windows и рабочий стол для пользователей с Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Невозможно обработать требование.",
		runtime_file_tracking_generic_error_explanation: "Произошла ошибка в апплете отслеживания файлов.",
		runtime_file_tracking_generic_error_userResponse: "Обратитесь к системному администратору за помощью.",
		runtime_file_tracking_generic_error_adminResponse: "Откройте Java-консоль и попробуйте снова передать ваше требование. Подробная информация об ошибке показана на Java-консоли.<br/><br/>Доступ к Java-консоли можно получить из панели управления (Windows) или системных предпочтений (Macintosh) для вашей операционной системы.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Невозможно обработать требование",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Перечисленные ниже файлы были добавлены в репозиторий, но не были удалены из вашей локальной файловой системы: ${0}. Обычно это происходит, если файлы открыты или используются другим приложением. Если потребуется, вы можете вручную удалить файлы.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Скачать документ невозможно.",
		runtime_file_tracking_ioexception_error_explanation: "Скачать документ невозможно.",
		runtime_file_tracking_ioexception_userResponse: "Возможно, у вас нет необходимых разрешений на запись в следующий каталог: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Убедитесь, что у вас есть разрешения на запись в указанный каталог. Если у вас нет разрешений на запись в указанный каталог, обратитесь к системному администратору.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Невозможно обработать требование.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Эта ошибка может быть вызвана следующими причинами:<br/><br/><ul><li>Вы используете Safari в Mac OS, и Java работает в безопасном режиме.</li><li>У вас нет разрешений на чтение/запись для каталога, указанного в конфигурации отслеживания файлов для вашего рабочего стола.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Вы можете продолжить использовать IBM Content Navigator без отслеживания файлов или можете выполнить описанные ниже шаги, чтобы устранить проблему:<br/><br/><ol><li>Включите незащищенный режим Java в Safari.</li><li>Если вас спросят, хотите ли вы считать надежным веб-сайт IBM Content Navigator, щелкните по <b>Доверять</b>, чтобы загрузить страницу, а затем включите незащищенный режим Java в Safari.</li></ol><br/><br/>Если браузер Safari сконфигурирован правильно, выполните следующие шаги, чтобы устранить проблему:<br/><br/><ol><li>Убедитесь, что у вас есть разрешения на чтение/запись для каталога, указанного в конфигурации отслеживания файлов для вашего рабочего стола.</li><li>Если у вас нет разрешений на чтение/запись для каталога, измените разрешения на доступ к каталогу.</li><li>Если вы не можете изменить разрешения на доступ к каталогу, ваш администратор должен изменить каталог, сконфигурированный для отслеживания файлов, или должен предоставить вам доступ к рабочему столу, для которого сконфигурирован другой каталог отслеживания файлов.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Невозможно обработать требование.",
		runtime_file_tracking_java__notfound_error_explanation: "Обычно эта ошибка происходит в следующих ситуациях:<br/><br/><ul><li>На вашей рабочей станции нет Java Runtime Environment (JRE), или этот компонент не включен.</li><li>Версия JRE на вашей рабочей станции несовместима с версией IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Вы можете продолжить использовать IBM Content Navigator без отслеживания файлов или можете выполнить описанные ниже шаги, чтобы устранить проблему с JRE:<br/><br/><ol><li>Убедитесь, что на вашей рабочей станции установлена JRE.</li><li>Убедитесь, что версия JRE на вашей рабочей станции совместима с IBM Content Navigator. Список поддерживаемых версий приводится в документе <i>Требования к аппаратному и программному обеспечению для IBM Content Navigator</i> на сайте поддержки программ IBM.</li><li>Убедитесь, что работа JRE разрешена на вашей рабочей станции.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Невозможно обработать требование.",
		runtime_file_tracking_security_error_explanation: "У вас нет разрешений на чтение/запись для каталога, указанного в конфигурации отслеживания файлов для вашего рабочего стола.",
		runtime_file_tracking_security_error_userResponse: "Вы можете продолжить использовать IBM Content Navigator без отслеживания файлов или можете обратиться к своему системному администратору, чтобы выполнить описанные ниже шаги:<ol><li>Убедитесь, что у вас есть разрешения на чтение/запись для каталога, указанного в конфигурации отслеживания файлов для вашего рабочего стола. </li><li>Если у вас нет разрешений на чтение/запись для каталога, измените разрешения на доступ к каталогу.</li><li>Если вы не можете изменить разрешения на доступ к каталогу, ваш администратор должен изменить каталог, сконфигурированный для отслеживания файлов, или должен предоставить вам доступ к рабочему столу, для которого сконфигурирован другой каталог отслеживания файлов.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Следующие документы скачаны: ${0}.",

		admin_file_tracking_inline_help: "Отслеживание файлов улучшает организацию процесса добавления или резервирования и активации документов в репозитории. Это также позволяет вам управлять тем, как документы хранятся на компьютерах пользователей.<br/><br/>Кроме того, отслеживание файлов позволяет отслеживать документы в нескольких компонентах IBM Content Navigator, например, в веб-клиенте и в IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID меню не должен начинаться с сочетаний символов \"Default\".  \"Default\" - это зарезервированный префикс для ID меню.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID может содержать только алфавитно-цифровые символы, и в нем учитывается регистр символов.",
		admin_repository_id_hover: "ID репозитория включается в URL веб-клиентов, в элементы избранного и ссылки электронной почты, чтобы указать, в какой репозиторий нужно входить. ID должен быть уникальным, и после сохранения репозитория изменить ID будет нельзя.<br><br>ID может содержать только алфавитно-цифровые символы, и в нем учитывается регистр символов.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Имя не должно содержать ни одного из следующих символов: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID рабочего стола не должен содержать ни пробелов, ни одного из следующих символов: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Имя рабочего стола не должно содержать ни одного из следующих символов: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Выводимое на экран имя не должно содержать ни одного из следующих символов: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Укажите имя репозитория, которое увидят пользователи в веб-клиенте.<br><br>Имя не должно содержать следующих символов: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Укажите имя хоста или IP-адрес сервера Content Manager OnDemand, с которым вы хотите соединяться, например, server.id.com.",
		admin_server_p8_name_hover: "Укажите URL сервера Content Engine или Content Platform Engine. В URL учитывается регистр символов, и он должен быть представлен в следующем формате:<br><br><ul><li>На сервере WebSphere Application Server: iiop://имя_хоста:номер_порта/FileNet/Engine. При базовых внедрениях номер порта по умолчанию - 2809.</li><li>На сервере WebLogic: t3://имя_хоста:номер_порта/FileNet/Engine. Номер порта по умолчанию: 7001.</li></ul><br><br>Чтобы обеспечить высокодоступные конфигурации Content Engine и Content Platform Engine, используйте URL высокодоступного транспорта EJB без префикса cemp:. ",
		admin_server_p8_protocol_hover: "Задайте протокол, который нужно использовать для взаимодействия с Content Engine.",
		admin_server_cm_name_hover: "Укажите имя локального каталога базы данных Content Manager или имя соединения с библиотечным сервером. Это имя - значение, заданное для переменной ICMSERVER.",
		admin_repository_cmis_hover: "Укажите ID репозитория, с которым вы хотите соединиться.  ID каждого репозитория в вашей среде CMIS указан в документе по службе привязок AtomPub.  <br/><br/><b>Совет:</b> Вы также можете ввести звездочку (*), чтобы соединиться с первым или единственным репозиторием, заданным в документе по службе привязок AtomPub.",
		admin_url_cmis_hover: "Формат URL зависит от провайдера услуг. Смотрите документацию CMIS или обратитесь за URL к администратору сервера CMIS.",
		admin_repcfg_cmis_status_columns_hover: "Укажите состояния элементов, для которых вы хотите видеть значки. Значки состояния появляются рядом с документами в списке содержимого.",
		admin_port_hover: "Задайте номер порта TCP/IP, на котором сервер Content Manager OnDemand осуществляет прием. Значение по умолчанию - 1445.",
		admin_unified_searches_hover: "Укажите, будет ли предоставляться возможность пользователям сохранять поиски в нескольких репозиториях в этом репозитории.<br/><br/>Если эта опция не будет включена, пользователи все равно смогут создать поиски в нескольких репозиториях, выполняющиеся для этого репозитория. Запретить пользователям создание поисков в нескольких репозиториях можно на уровне рабочего стола.<br/><br/>Если опция поисков в нескольких репозиториях включается, IBM Content Navigator создает в репозитории модель данных поисков в нескольких репозиториях.<br/><br/>Чтобы задействовать эту опцию в IBM FileNet Content Manager, необходимо сначала связаться с репозиторием в качестве администратора Content Engine.",
		admin_unified_searches_cm_hover: "Укажите, будет ли предоставляться возможность пользователям сохранять поиски в нескольких репозиториях в этом репозитории.<br/><br/>Если эта опция не будет включена, пользователи все равно смогут создать поиски в нескольких репозиториях, выполняющиеся для этого репозитория. Запретить пользователям создание поисков в нескольких репозиториях можно на уровне рабочего стола.<br/><br/>Если опция поисков в нескольких репозиториях включается, IBM Content Navigator создает в репозитории модель данных поисков в нескольких репозиториях.",
		admin_max_results_hover: "Укажите, нужно ли ограничивать число результатов, возвращаемых при поиске. Если вы не ограничите число результатов поиска, вы можете столкнуться со снижением производительности при возврате большого числа результатов поиска.",
		admin_timeout_hover: "Задайте время (в секундах), в течение которого может выполняться поиск в репозитории. Если поиск не завершится за заданное время, веб-клиент отменит требование. Рекомендуемый максимальный тайм-аут - 60 секунд.",
		admin_object_store_hover: "Укажите хранилище объектов, с которым вы хотите соединяться на сервере Content Engine. Символьное имя можно получить с консоли администрирования Content Platform Engine.",
		admin_object_store_display_name_hover: "Выводимое на экран имя хранилища объектов требуется, если вы хотите использовать рабочие потоки IBM FileNet P8. Выводимое на экран имя хранилища объектов можно получить с консоли администрирования Content Platform Engine.",
		admin_all_searches_hover: "Укажите, нужно ли ограничивать число поисков, показанных под заголовком <b>Все поиски</b>, когда пользователи производят поиск в репозитории. Если вы не ограничите число поисков, вы можете столкнуться со снижением производительности, если в репозитории существует много сохраненных поисков.",

		admin_text_desktop: "Рабочий стол",
		admin_text_repository: "Репозиторий",
		admin_text_plugin: "Модуль",
		admin_text_theme: "Тема",
		admin_text_menu: "Меню",
		admin_text_reason_code: "Причина редакции",
		admin_text_redactions: "Редакции",
		admin_text_viewer_mapping: "Отображение средства просмотра",
		admin_text_mobile_feature: "Мобильная функция",
		admin_test_interface_text: "Текст интерфейса",
		admin_text_interface_text_locale: "Локализованный текст интерфейса",
		admin_text_icon_status: "Значок Состояние",
		admin_text_icon: "Значок",
		admin_text_file_type: "Тип файла",
		admin_text_viewer: "Средство просмотра",
		admin_text_desktop_access: "Доступ к рабочему столу",
		admin_text_mapped_properties_for_office: "Отображенные свойства для Microsoft Office",
		admin_text_desktop_features: "Функции рабочего стола",
		admin_text_unknown: "Неизвестный",
		admin_folder_instruction: "Задайте свойства, которые будут показаны для документов и папок в списке содержимого, когда пользователи находятся в режиме обзора. Также можно задать порядок расположения свойств.",
		admin_search_instruction: "Укажите, какие опции должны быть выбраны по умолчанию, когда пользователи откроют поиск.",
		admin_repository_office_conf_class_instruction: "Если на клиентских компьютерах в вашей среде установлен IBM Content Navigator для Microsoft Office, можно задать, как будут обрабатываться документы при добавлении в репозиторий или при активировании в репозитории.",
		admin_repository_office_conf_instruction: "Отобразите свойства документов Microsoft Office на свойства, определенные в этом репозитории.<br/><br/>Если отображение свойств включено для рабочего стола, с которым связан данный репозиторий, заданные для документов Microsoft Office свойства будут использоваться для заполнения свойств в репозитории при добавлении пользователем документа из IBM Content Navigator для Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Отображение свойств",
		admin_repository_office_conf_prop_mapping_title1: "Интеграция MS Office",
		admin_office_conf_instruction: "Вы можете управлять тем, как IBM Content Navigator интегрируется с программами Microsoft Office при установке IBM Content Navigator for Microsoft Office на компьютерах-клиентах.<br /><br /><b>Важно:</b> При выборе опции <b>Отобразить свойства Office …</b> вы должны сконфигурировать отображение свойств также для каждого репозитория, связанного с этим рабочим столом. Вы можете сконфигурировать отображения свойств на вкладке <b>Свойства Office</b> для каждого репозитория в вашей среде.",
		admin_desktop_workflows_instruction: "<b>Только в системах IBM FileNet P8:</b> Укажите, какие пространства приложений будут показаны на этом рабочем столе. Порядок выбранных пространств приложений определяет порядок расположения пространств приложений в веб-клиенте.<br><br><b>Совет</b> Вы можете изменить выводимые на экран имена пространств программ, задав новые имена в разделе <b>Метки</b> в утилите администрирования.",
		admin_search_filtered_properties_instruction: "Укажите свойства, на основе которых пользователи могут производить поиск. Если вы не хотите, чтобы пользователи производили поиск на основе каких-либо свойств, вы можете их скрыть.",
		admin_search_filtered_operators_instruction: "Укажите операторы, которые будут доступны, когда пользователи производят поиск на основе конкретного типа данных, например, даты или целого числа. Если вы не хотите, чтобы пользователи выбирали какие-либо операторы, вы можете их скрыть.",
		admin_search_default_search_results_instruction: "Укажите свойства, которые будут показываться в результатах поиска для документов и папок. Если вы не хотите, чтобы какие-либо свойства появлялись в результатах поиска, их можно скрыть.",
		admin_search_default_search_results_p8_cmis_instruction: "Укажите свойства, которые будут показываться в результатах поиска для документов. Если вы не хотите, чтобы какие-либо свойства появлялись в результатах поиска, их можно скрыть.",

		admin_datetimeOp: "Дата и время",
		admin_floatOp: "Число с плавающей запятой",
		admin_integerOp: "Целое число",
		admin_stringOp: "Строка символов",
		admin_binaryOp: "Двоичное число",
		admin_objectOp: "Объект",
		admin_idOp: "ID",
		admin_userOp: "Пользователь",
		admin_booleanOp: "Логическое значение",

		admin_string: "Строка символов",
		admin_long: "Long (Длинное число)",
		admin_date: "Дата",
		admin_double: "Double (Двойной точности)",
		admin_object: "Объект",
		admin_guid: "GUID",
		admin_boolean: "Логическое значение",

		admin_repcfg_heading: "Вы можете переопределить поведение по умолчанию для данного репозитория, задав параметры конфигурации.",
		admin_repcfg_heading_od: "Вы можете переопределить поведение по умолчанию для данного репозитория, задав параметры конфигурации.<br /><br /><b>Важно:</b> Чтобы использовать веб-клиент в сочетании с Content Manager OnDemand, нужно также задать значения для параметров, содержащихся на вкладке <b>Content Manager OnDemand</b> в разделе <b>Параметры</b>; эти параметры будут применяться ко всем репозиториям Content Manager OnDemand, с которыми вы соединяетесь.",
		admin_repcfg_teamspaces: "Управление пространствами команд:",
		admin_repcfg_enable: "Включить",
		admin_repcfg_disable: "Выключить",

		admin_repcfg_deliver_redacted_pdf_files_as: "Отредактированные файлы PDF будут доставлены, как:",
		admin_repcfg_burn_pdf_to_pdf: "Файлы PDF",
		admin_repcfg_burn_pdf_to_tiff: "Файлы TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Файл PDF, отредактированный с применением реедактирований на основе ролей иожет быть доставлен клиентам в файлах различных форматов. При изменении формата файла также изменяются расширение файла и тип MIME.<br><br>Например, когда файл PDF доставляется в виде файла TIFF, расширение файла изменяется на .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Разрешить пользователям объединять и разбивать страницы, в которых есть цензурирование на основе ролей",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Выберите эту опцию, чтобы разрешить пользователям объединять и разбивать страницы, в которых есть цензурирование на основе ролей. Пользователи, которые не являются редакторами цензурирования, не смогут изменять цензурирование на основе ролей, и им не предоставляется доступ к конфиденциальным данным, связанным с цензурированием на основе ролей, даже если эта опция включена.",
		admin_repcfg_modify_teamspace_roles: "Разрешить владельцам изменять роли существующих пространств команд.",
		admin_repcfg_tm_delete_teamspace: "Разрешить владельцам удалять пространство команды, включая содержимое",
		admin_repcfg_tm_delete_teamspace_id_missing: "Вы должны задать имя пользователя для администратора репозитория.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Вы должны задать пароль для администратора репозитория.",
		admin_repcfg_teamspace_display_Recent: "Показать только недавно измененные пространства команд ",
		admin_repcfg_teamspace_display_Recent_value: "Число дней после последнего изменения:",

		admin_repcfg_folder_selector: "Корневая папка:",
		admin_repcfg_enable_folder_selector: "Включить",
		admin_repcfg_disable_folder_selector: "Выключить",
		admin_repcfg_SSO: "Единая регистрация:",
		admin_repcfg_teamspace_template_permission_text: "Назначить создателей пространств команд:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Задайте группы или пользователей, которые смогут создавать шаблоны пространств команд. Пользователям или группам присваиваются соответствующие параметры защиты для необходимых классов и папок. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Дополнительная информация</a><br/><br/><b>Рекомендация:</b> Используйте группы, чтобы упростить управление пространством команды.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Задайте группы или пользователей, которые смогут создавать шаблоны пространств команд. Пользователи добавляются в соответствующие ACL и им присваиваются необходимые полномочия. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Дополнительная информация</a><br/><br/><b>Рекомендация:</b> Используйте группы, чтобы упростить управление пространством команды.",
		admin_repcfg_teamspace_permission_text: "Назначить роли пространств команд:",
		admin_repcfg_teamspace_permission_hover_p8: "Задайте группы или пользователей, которые смогут создавать пространства команд и использовать пространства команд. Пользователям присваиваются соответствующие параметры защиты для необходимых классов и папок. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Дополнительная информация</a><br/><br/><b>Рекомендация:</b> Используйте группы, чтобы упростить управление пространством команды.",
		admin_repcfg_teamspace_permission_hover_cm: "Задайте группы или пользователей, которые смогут создавать пространства команд и использовать пространства команд. Пользователи добавляются в соответствующие ACL и им присваиваются необходимые полномочия. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Дополнительная информация</a><br/><br/><b>Рекомендация:</b> Используйте группы, чтобы упростить управление пространством команды.",
		admin_repcfg_entry_template_permission_text: "Назначить роли шаблонов ввода:",
		admin_repcfg_entry_template_permission_hover_p8: "Задайте группы или пользователей, которые смогут создавать шаблоны ввода и использовать шаблоны ввода. Пользователям присваиваются соответствующие параметры защиты для класса документов Шаблон ввода. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Дополнительная информация</a><br/><br/><b>Рекомендация:</b> Используйте группы, чтобы упростить управление шаблонами ввода.",
		admin_repcfg_entry_template_permission_hover_cm: "Задайте группы или пользователей, которые смогут создавать шаблоны ввода и использовать шаблоны ввода. Пользователи добавляются в соответствующие ACL и им присваиваются необходимые полномочия. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Дополнительная информация</a><br /><br /><b>Рекомендация:</b> Используйте группы, чтобы упростить управление шаблонами ввода.",
		admin_repcfg_office_template_permission_text: "Назначить роли шаблонов:",
		admin_repcfg_office_template_permission_hover_cm: "Задайте группы или пользователей, которые смогут создавать, изменять и использовать шаблоны Microsoft Office Online или службы редактирования. Пользователи добавляются в соответствующие ACL и им присваиваются необходимые полномочия.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a><br /><br /><b>Рекомендация:</b> Используйте группы, чтобы упростить управление шаблонами Microsoft Office Online или службы редактирования.",
		admin_repcfg_draft_permission_text: "Назначить роли для черновиков:",
		admin_repcfg_draft_permission_hover_cm: "Задайте группы или пользователей, которые смогут создавать черновики документов Microsoft Office Online или службы редактирования при совместном редактировании. У любого пользователя, которому нужно совместно редактировать документы в Microsoft Office Online или в службе редактирования, должны быть соответствующие полномочия на создание черновиков. Пользователи добавляются в соответствующие ACL и им присваиваются необходимые полномочия. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a><br /><br /><b>Рекомендация:</b> Используйте группы, чтобы упростить управление черновиками.",
		admin_repcfg_search_permission_text: "Назначить роли поиска:",
		admin_repcfg_search_permission_hover_p8: "Задайте группы или пользователей, которые смогут создавать или использовать сохраненные поиски и поиски в разных репозиториях. Пользователям присваиваются соответствующие параметры защиты для необходимых классов. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Дополнительная информация</a><br /><br /><b>Рекомендация:</b> Используйте группы, чтобы упростить управление поиском.",
		admin_repcfg_search_permission_hover_cm: "Задайте группы или пользователей, которые смогут создавать, изменять или использовать сохраненные поиски и поиски в разных репозиториях. Пользователи добавляются в соответствующие ACL и им присваиваются необходимые полномочия. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Дополнительная информация</a><br /><br /><b>Рекомендация:</b> Используйте группы, чтобы упростить управление поиском.",
		admin_repcfg_search_permission_title: "Роли поиска",
		admin_repcfg_search_permission_intro_text: "Убедитесь, что у пользователей есть доступ к рабочему столу, который поддерживает их роль. Например, убедитесь, что у создателей поиска есть доступ к рабочему столу, который позволяет им создавать поиски и перекрестные поиски в разных репозиториях.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Администраторы шаблонов пространств команд - это пользователи, у которых есть разрешения на <b>полное управление</b> в репозитории (хранилище объектов). Изменить список администраторов шаблонов пространств команд при помощи утилиты администрирования нельзя. <p>Администраторы шаблонов пространств команд могут удалять или изменять любой шаблон пространств команд. Пользователю, который создает шаблон пространства команды, не требуется использовать шаблон совместно с администраторами шаблонов пространств команд.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "При назначении пользователя или группы создателем шаблонов пространств команд пользователю или группе присваиваются соответствующие параметры защиты в репозитории для создания шаблонов пространств команд. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Дополнительная информация</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Пользователи и группы, которым назначены полномочия, отличные от полномочий, связанных с администраторами и создателями.<p>Этих пользователей и группы можно переместить в роль создателей шаблонов пространств команд, удалив их из роли Другие и затем определив их как создателей пространств команд.<p>Можно просмотреть текущие полномочия, предоставленные этим пользователям и группам, при помощи консоли IBM Administration для Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Администраторы пространств команд - это пользователи, у которых есть разрешения на <b>полное управление</b> в репозитории (хранилище объектов). Изменить список администраторов пространств команд при помощи утилиты администрирования нельзя.<p>Администраторы пространств команд могут удалять или изменять любое пространство команды. Пользователю, который создает пространство команды, не требуется использовать пространство команды совместно с администраторами пространств команд.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "При назначении пользователя или группы создателем пространств команд пользователю или группе присваиваются соответствующие параметры защиты в репозитории для создания пространств команд. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Дополнительная информация</a>",
		admin_repcfg_teamspace_user_hover_p8: "При назначении пользователя или группы пользователем пространств команд пользователю или группе присваиваются соответствующие параметры защиты в репозитории для использования пространств команд. Однако для получения доступа к пространству команды пользователь должен быть членом пространства команды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Дополнительная информация</a><p><b>Совет:</b> Если вы хотите. чтобы все пользователи в вашей среде могли видеть пространства команд, вы можете добавить псевдоучетную запись #AUTHENTICATED-USERS в роль пользователя пространства команды.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Пользователи и группы, которым назначены полномочия, отличные от полномочий, связанных с администраторами, создателями и пользователями.<p>Этих пользователей и группы можно переместить в заранее заданные роли, удалив их из роли Другие и затем назначив им роли пространств команд.<p>Можно просмотреть текущие полномочия, предоставленные этим пользователям и группам, при помощи консоли IBM Administration для Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Администраторы шаблонов ввода - это пользователи, у которых есть разрешения на <b>полное управление</b> в репозитории (хранилище объектов). Изменить список администраторов шаблонов ввода при помощи утилиты администрирования нельзя. <p>Администраторы шаблонов ввода команд могут удалять или изменять любой шаблон ввода. Пользователю, который создает шаблон ввода, не требуется использовать шаблон ввода совместно с администраторами шаблонов ввода.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "При назначении пользователя или группы создателем шаблонов ввода пользователю или группе присваиваются соответствующие параметры защиты в репозитории для создания шаблонов ввода. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Дополнительная информация</a>",
		admin_repcfg_entry_template_user_hover_p8: "При назначении пользователя или группы пользователем шаблонов ввода пользователю или группе присваиваются соответствующие параметры защиты в репозитории для использования шаблонов ввода. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Дополнительная информация</a><p><b>Совет:</b> Если вы хотите. чтобы все пользователи в вашей среде могли использовать шаблоны ввода, вы можете добавить псевдоучетную запись #AUTHENTICATED-USERS в роль пользователя шаблонов ввода.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Пользователи и группы, которым назначены полномочия, отличные от полномочий, связанных с администраторами, создателями и пользователями.<p>Этих пользователей и группы можно переместить в заранее заданные роли, удалив их из роли Другие и затем назначив им роли шаблонов ввода.<p>Можно просмотреть текущие полномочия, предоставленные этим пользователям и группам, при помощи консоли IBM Administration для Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "При назначении пользователя или группы создателем шаблона пространств команд пользователю или группе присваиваются соответствующие полномочия на создание шаблонов пространств команд в репозитории. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Дополнительная информация</a>",
		admin_repcfg_teamspace_creators_hover_cm: "При назначении пользователя или группы создателем пространств команд пользователю или группе присваиваются соответствующие полномочия на создание пространств команд в репозитории. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Дополнительная информация</a>",
		admin_repcfg_teamspace_user_hover_cm: "При назначении пользователя или группы пользователем пространства команды пользователю или группе присваиваются соответствующие полномочия на использование пространства команды в репозитории. Однако для получения доступа к пространству команды пользователь должен быть членом пространства команды. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Дополнительная информация</a>",
		admin_repcfg_entry_template_creators_hover_cm: "При назначении пользователя или группы создателем шаблонов ввода пользователю или группе присваиваются соответствующие полномочия на создание шаблонов ввода в репозитории. <br/><br/>Однако параметры защиты для конкретного шаблона ввода определяют то, какие полномочия будут у пользователя или группы по отношению к шаблону ввода. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Дополнительная информация</a>",
		admin_repcfg_entry_template_editors_hover_cm: "При назначении пользователя или группы редактором шаблонов ввода пользователю или группе присваиваются соответствующие полномочия на изменение шаблонов ввода в репозитории. <br/><br/>Однако параметры защиты для конкретного шаблона ввода определяют то, какие полномочия будут у пользователя или группы по отношению к шаблону ввода. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Дополнительная информация</a>",
		admin_repcfg_entry_user_hover_cm: "При назначении пользователя или группы пользователем шаблонов ввода пользователю или группе присваиваются соответствующие полномочия на использование шаблонов ввода в репозитории. <br/><br/>Однако параметры защиты для конкретного шаблона ввода определяют то, какие полномочия будут у пользователя или группы по отношению к шаблону ввода. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Дополнительная информация</a>",
		admin_repcfg_office_template_creators_hover_cm: "При назначении пользователя или группы создателем шаблонов Microsoft Office Online или службы редактирования пользователю или группе присваиваются соответствующие полномочия на создание файлов шаблонов в репозитории. <br/><br/>Однако параметры защиты для конкретного файла шаблона определяют, какие полномочия будут у пользователя или группы по отношению к шаблону. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a>",
		admin_repcfg_office_template_editors_hover_cm: "При назначении пользователя или группы редактором шаблонов Microsoft Office Online или службы редактирования пользователю или группе присваиваются соответствующие полномочия на изменение файлов шаблонов в репозитории.  <br/><br/>Однако параметры защиты для конкретного файла шаблона определяют, какие полномочия будут у пользователя или группы по отношению к шаблону. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a>",
		admin_repcfg_office_template_user_hover_cm: "При назначении пользователя или группы пользователем шаблонов Microsoft Office Online или службы редактирования пользователю или группе присваиваются соответствующие полномочия на применение шаблона, когда они будут создавать новый документ Office Online или службы редактирования с веб-клиента.  <br/><br/>Однако параметры защиты для конкретного файла шаблона определяют, какие полномочия будут у пользователя или группы по отношению к шаблону.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a>",
		admin_repcfg_draft_creators_hover_cm: "Эта роль должна быть назначена всем пользователям, которым нужно совместно редактировать документы в Microsoft Office Online или в службе редактирования. Не назначайте пользователям роли редактора или пользователя. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a>",
		admin_repcfg_draft_editors_hover_cm: "Роль <b>создающего</b> должна быть назначена всем пользователям, которым нужно совместно редактировать документы в Microsoft Office Online или в службе редактирования. Если пользователю назначена роль редактора, он не сможет создавать черновики, что требуется при совместном редактировании.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a>",
		admin_repcfg_draft_user_hover_cm: "Роль <b>создающего</b> должна быть назначена всем пользователям, которым нужно совместно редактировать документы в Microsoft Office Online или в службе редактирования. Если пользователю назначена роль пользователя, он не сможет создавать черновики, что требуется при совместном редактировании.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Дополнительная информация</a>",		
		admin_repcfg_search_others_hover_p8: "Пользователи и группы, которым назначены полномочия, отличные от полномочий, связанных с администраторами, создателями и пользователями.<p>Этих пользователей и группы можно переместить в заранее заданные роли, удалив их из роли Другие и затем назначив им роли поиска.<p>Можно просмотреть текущие полномочия, предоставленные этим пользователям и группам, при помощи консоли IBM Administration для Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Администраторы поиска - это пользователи, у которых есть разрешения на <b>полное управление</b> в репозитории (хранилище объектов). Изменить список администраторов поиска при помощи утилиты администрирования нельзя. <br /><br />Администраторы поиска могут удалять или изменять любой поиск. Пользователю, который создает поиск, не требуется использовать поиск совместно с администраторами поиска.",
		admin_repcfg_search_creators_hover_p8: "При назначении пользователя или группы создателем поиска пользователю или группе присваиваются соответствующие параметры защиты в репозитории для создания поиска. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Дополнительная информация</a>",
		admin_repcfg_search_user_hover_p8: "При назначении пользователя или группы пользователем поиска пользователю или группе присваиваются соответствующие параметры защиты в репозитории для использования поиска. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Дополнительная информация</a><br /><br /><b>Совет:</b> Если вы хотите. чтобы все пользователи в вашей среде могли использовать поиски, вы можете добавить псевдоучетную запись #AUTHENTICATED-USERS в роль пользователя поиска.<br/><br />По умолчанию пользователь поиска может создавать поиски и перекрестные поиски в разных репозиториях, но не может сохранять поиски. Вы можете запретить пользователям поиска создавать поиски, сделав так, чтобы они использовали рабочий стол, для которого выбраны следующие опции:<ul><li><b>Запретить пользователям создавать поиски</b></li><li><b>Запретить пользователям создавать поиски в нескольких репозиториях</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "При назначении пользователя или группы создателем поиска пользователю или группе присваиваются соответствующие полномочия на создание поисков в репозитории. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Дополнительная информация</a><br /><br /><b>Важно:</b> Убедитесь, что создатели поиска используют рабочий стол, для которого не выбраны следующие опции:<ul><li><b>Запретить пользователям создавать поиски</b></li><li><b>Запретить пользователям создавать поиски в нескольких репозиториях</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "При назначении пользователя или группы редактором поиска пользователю или группе присваиваются соответствующие полномочия на изменение существующих поисков и перекрестных поисков в разных репозиториях. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Дополнительная информация</a><br /><br /><b>Совет:</b> По умолчанию редактор поиска может создавать поиски и перекрестные поиски в разных репозиториях, но не может сохранять поиски. Вы можете запретить редакторам поиска создавать поиски, сделав так, чтобы они использовали рабочий стол, для которого выбраны следующие опции:<ul><li><b>Запретить пользователям создавать поиски</b></li><li><b>Запретить пользователям создавать поиски в нескольких репозиториях</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "При назначении пользователя или группы пользователем поиска пользователю или группе присваиваются соответствующие полномочия на открытие и запуск сохраненных поисков и перекрестных поисков в разных репозиториях. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Дополнительная информация</a><br /><br /><b>Совет:</b> По умолчанию пользователь поиска может создавать поиски и перекрестные поиски в разных репозиториях, но не может сохранять поиски. Вы можете запретить пользователям поиска создавать поиски, сделав так, чтобы они использовали рабочий стол, для которого выбраны следующие опции:<ul><li><b>Запретить пользователям создавать поиски</b></li><li><b>Запретить пользователям создавать поиски в нескольких репозиториях</b></li></ul>",
		admin_repcfg_db_encoding: "Символьная кодировка базы данных сервера:",
		admin_repcfg_db_encoding_hover: "Символьной кодировкой по умолчанию для базы данных IBM Content Manager является UTF-8.",
		admin_repcfg_db_encoding_specify: "Укажите символьную кодировку базы данных.",
		admin_repcfg_db_encoding_utf8: "Кодировка UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Задайте эту опцию, если вы используете базу данных с кодировкой UTF-8. IBM Content Navigator будет использовать кодировку UTF-8, чтобы проверять длину строк значений свойств элементов.",
		admin_repcfg_db_encoding_other: "Другая кодировка",
		admin_repcfg_db_encoding_other_hover: "Задайте эту опцию, если вы используете базу данных с кодировкой, отличающейся от UTF-8. IBM Content Navigator будет использовать число символов, чтобы проверять длину строк значений свойств элементов.",
		admin_repcfg_language_codes: "Коды языков на сервере:",
		admin_repcfg_language_codes_avail: "Доступные",
		admin_repcfg_language_codes_sel: "Выбрано",
		admin_repcfg_pdf_conversion: "Типы MIME для преобразования в документах PDF во вложениях:",
		admin_repcfg_pdf_conversion_avail: "Доступные",
		admin_repcfg_pdf_conversion_sel: "Выбрано",

		admin_repcfg_box_share_enable_classes_label: "Классы, которые нужно изменить для поддержки совместно используемого ресурса Box:",
		admin_repcfg_box_share_enable_classes_hover: "Вы можете изменить этот класс, чтобы сохранить ID файла в Box, когда элемент будет использоваться совместно.",
		admin_repcfg_box_share_enable_classes_warning: "Важно: Все классы, которые вы укажете, будут изменены, так чтобы они поддерживали совместно используемый ресурс Box. После сохранения изменений их нельзя удалить из классов.<br><br>Чтобы изменять классы, у вас должно быть установлено соединение с репозиторием от имени администратора библиотечного сервера.",
		admin_repcfg_box_share_enable_classes_available: "Доступные классы",
		admin_repcfg_box_share_enable_classes_selected: "Выбранные классы",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Сохранить ID совместно используемого ресурса Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Этот класс уже изменен для сохранения ID совместно используемого ресурса Box. Удалить эту опцию нельзя.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Измените этот класс, чтобы в нем хранился ID файла в Box, когда элемент будет использоваться совместно.",

		admin_repcfg_redaction: "Редакции на основе ролей:",
		admin_repcfg_enable_redaction_hover: "Укажите, если необходимо использовать редакцию на основе ролей в документе в данном ропозитории.<br/><br/>Редакция на основе ролей применяется тогда, когда документ скачен, напечатан, воспроизведен программой просмотра, или отображен на миниизображении. Что пользователи видят при просмотре документа, который зависит от их роли и политики применяемых редакций.",

		admin_repcfg_redaction_policy_permission_text: "Назначить редакторов политики:",
		admin_repcfg_redaction_policy_editors_hover: "Выберите пользователей и группы, которые будут создавать, исправлять и удалять политику редакции и роли редакции.",
		admin_repcfg_redaction_policy_editors_select_hover: "Редакторы политики редакции могут создавать, исправлять и удалять политику редакции и роли редакции.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Администраторы политики редакции могут назначать редакторов политики редакции.<br/><br/>Вы можете поменять список администраторов политики редакции с помощью консоли IBM Administration для Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Администраторы политики редакции могут назначать редакторов политики редакции.<br/><br/>Вы можете поменять список администраторов политики редакции с помощью клиента администрации системы IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Назначить редакторов редакции:",
		admin_repcfg_redaction_editors_hover: "Выберите пользователей и группы, которые будут создавать, исправлять и удалять редакции на основе ролей. После того, как вы выберете пользователей и группы в качестве редакторов, необходимо указать их статус редакторов в политике редакции перед тем, как у них появится доступ к изменению редакций на основе ролей.",
   		admin_repcfg_redaction_editors_select_hover: "Редакторы редакции могут создавать, исправлять и удалять редакции на основе ролей, когда для них указан статус редакторов в политике редакции.",
   		admin_repcfg_redaction_administrators_hover_p8: "Администраторы редакции могут назначать редакторов редакции.<br/><br/>Вы можете поменять список администраторов редакции с помощью консоли IBM Administration для Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Администраторы редакции могут назначать редакторов редакции.<br/><br/>Вы можете поменять список администраторов редакции с помощью клиента администрации системы IBM Content Manager.",
		admin_repcfg_entry_template: "Управление шаблонами ввода",
		admin_repcfg_entry_template_enable_classes_label: "Классы, которые нужно изменить для поддержки шаблонов ввода:",
		admin_repcfg_oos_reference_attribute_label: "Ссылочные атрибуты для Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Важно: Все классы, которые вы укажете, будут изменены, так чтобы они поддерживали шаблоны ввода. После сохранения изменений их нельзя удалить из классов.<br><br>Вы можете изменить класс, чтобы достичь одной или обеих следующих целей:<br><ul><li>Чтобы сохранить ID шаблона ввода, который использовался для добавления элемента, чтобы параметры шаблона ввода применялись при изменении элемента</li><li>Только иерархические классы папок: Чтобы поддерживать связи с папкой шаблонов ввода</li></ul>Чтобы изменять классы, у вас должно быть установлено соединение с репозиторием от имени администратора библиотечного сервера.",
		admin_repcfg_entry_template_enable_classes_warning: "Важно: Все классы, которые вы укажете, будут изменены, так чтобы они поддерживали шаблоны ввода. После сохранения изменений их нельзя удалить из классов.<br><br>Чтобы изменять классы, у вас должно быть установлено соединение с репозиторием от имени администратора библиотечного сервера.",
		admin_repcfg_entry_template_enable_classes_available: "Доступные классы",
		admin_repcfg_entry_template_enable_classes_selected: "Выбранные классы",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Сохранить ID шаблона ввода",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Измените этот класс, чтобы в нем хранился ID шаблона ввода, который использовался для добавления элемента, чтобы параметры шаблона ввода применялись при изменении элемента.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Сохранить связи с папкой",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Измените этот класс, чтобы он мог поддерживать связи с папкой шаблонов ввода. Эта опция доступна только для иерархических классов папок.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Этот класс уже изменен для сохранения ID шаблона ввода. Удалить эту опцию нельзя.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Этот класс уже изменен для сохранения связей папок. Удалить эту опцию нельзя.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Для сохранения связей с папками можно использовать только иерархические классы папок и неиерархические классы.",
		admin_repcfg_entry_template_root_folder_association_title: "Шаблоны ввода, связанные с корневой папкой:",
		admin_repcfg_entry_template_root_folder_association_hover: "Укажите, какие шаблоны ввода вы хотите связать с корневой папкой в вашем репозитории IBM Content Manager.<br /><br />Если вы свяжете шаблоны ввода с корневой папкой и пользователи добавят элементы в иерархическую папку, для добавления элементов всегда будет использоваться шаблон ввода.",
		admin_repcfg_entry_template_root_folder_association_button: "Задать связи",
		admin_repcfg_oos_enable_classes_label: "Классы, которые нужно изменить для поддержки Office Online или службы редактирования:",
		admin_repcfg_oos_enable_classes_warning: "Важно: Все классы, которые вы укажете, будут изменены для работы с Microsoft Office Online или службы редактирования. После сохранения изменений удалить ссылочный атрибут, автоматически добавленный в каждый класс, будет нельзя.<br><br>Чтобы изменять классы, у вас должно быть установлено соединение с репозиторием от имени администратора библиотечного сервера.",
		admin_repcfg_oos_enable_classes_available: "Доступные классы",
		admin_repcfg_oos_enable_classes_selected: "Выбранные классы",
		admin_repcfg_oos_enable_classes_note: "Важно:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Этот класс не поддерживается при использовании Microsoft Office Online или службы редактирования.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Политика версий для класса задана так, чтобы версия всегда была версией, которую не поддерживает Microsoft Office Online или службы редактирования. Выберите другой класс.",
		admin_repcfg_download_recording: "Отслеживать скачивание:",
		admin_repcfg_download_recording_hover: "Скачивание по умолчанию отслеживается, если в репозитории установлена надстройка Social Collaboration Base Extensions. Однако при отключении этой опции может повыситься производительность репозитория.<br><br>Если вы выключите эту опцию, пользователи увидят число скачиваний, которые произошли до отключения опции.",
		admin_repcfg_sync_service: "Службы синхронизации:",
		admin_repcfg_download_ignored: "Игнорировать скачивания для отдельных пользователей:",
		admin_repcfg_download_ignored_hover: "Вы можете игнорировать скачивания, затребованные отдельными пользователями, например, администраторами или системными учетными записями, чтобы более точно отразить число пользователей, которые скачивали документ. Например, если у вас есть учетная запись, которая используется для скачивания содержимого, чтобы сгенерировать ежемесячный отчет, вы можете игнорировать скачивания, затребованные этой учетной записью.<br><br><b>Ограничение:</b> Указывать группы нельзя.",

		admin_repcfg_add_as_major_version: "Добавить как старшую версию:",
		admin_repcfg_enable_add_as_major_version: "Да",
		admin_repcfg_disable_add_as_major_version: "Нет",
		admin_repcfg_checkin_as_major_version: "Активировать как старшую версию:",
		admin_repcfg_enable_checkin_as_major_version: "Да",
		admin_repcfg_disable_checkin_as_major_version: "Нет",
		admin_repcfg_annotation_security: "Защита аннотаций:",
		admin_repcfg_inherit_annotation_security: "Дублировать защиту документа, содержащего данный",
		admin_repcfg_default_annotation_security: "Применять кодировку GZIP",
		admin_repcfg_connection_point: "Точка связи с рабочим потоком:",
		admin_repcfg_include_workflow_definition: "Показывать класс определения рабочего потока:",
		admin_repcfg_include_form_template: "Показывать класс шаблона формы:",
		admin_repcfg_enable_include_workflow_definition: "Да",
		admin_repcfg_disable_include_workflow_definition: "Нет",

		admin_repcfg_status_columns: "Значки состояния:",
		admin_repcfg_status_columns_hover: "Укажите состояния, для которых вы хотите видеть значки. Значки состояния появляются рядом с документами, папками и рабочими элементами в списке содержимого.",
		admin_repcfg_status_columns_documents_or_folders: "Показать значок, если документы или папки:",
		admin_repcfg_status_columns_documents: "Показать значок, если документы:",
		admin_repcfg_status_columns_documents_checked_out: "Зарезервированы",
		admin_repcfg_status_columns_documents_declared_records: "Объявлены записями",
		admin_repcfg_status_columns_documents_minor_versions: "Обладают младшими версиями",
		admin_repcfg_status_columns_documents_compound_document: "Являются составными документами",
		admin_repcfg_status_columns_documents_bookmarks: "Снабжены закладками",
		admin_repcfg_status_columns_documents_hold: "Задержаны",
		admin_repcfg_status_columns_documents_notes: "Снабжены примечаниями",
		admin_repcfg_status_columns_work_items: "Показать значок, если рабочие элементы:",
		admin_repcfg_status_columns_work_items_locked: "Заблокированы",
		admin_repcfg_status_columns_work_items_checked_out: "Зарезервированы",
		admin_repcfg_status_columns_work_items_deadline: "Обладают крайним сроком",
		admin_repcfg_status_columns_work_items_suspended: "Их обработка приостановлена",

		admin_repcfg_afp2pdf_config_file: "Файл конфигурации AFP2PDF:",
		admin_repcfg_transform_xml_file: "Пользовательский файл преобразования:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Включить",
		admin_repcfg_disable_ssl: "Выключить",
		admin_repcfg_keyringdb_file: "Файл базы данных цепи ключей:",
		admin_repcfg_keyringstash_file: "Файл паролей цепи ключей:",
		admin_repcfg_od_sso: "Единая регистрация",
		admin_repcfg_od_enable_sso: "Включить",
		admin_repcfg_od_disable_sso: "Выключить",
		admin_repcfg_od_sso_password: "Пароль",
		admin_repcfg_advanced_label: "Дополнительно",
		admin_repcfg_custom_properties_label: "Пользовательские свойства:",
		admin_repcfg_new_button_label: "Создать",
		admin_repcfg_edit_button_label: "Изменить",
		admin_repcfg_delete_button_label: "Удалить",
		admin_repcfg_custom_head1: "Имя",
		admin_repcfg_custom_head2: "Значение",
		admin_repcfg_ecpdialog_title_new: "Новое пользовательское свойство",
		admin_repcfg_ecpdialog_title_edit: "Изменить пользовательское свойство",
		admin_repcfg_ecpdialog_name: "Имя:",
		admin_repcfg_ecpdialog_value: "Значение:",
		admin_repcfg_ecpdialog_save: "Сохранить",
		admin_repcfg_ecpdialog_create: "Создать",
		admin_repcfg_ecpdialog_cancel: "Отмена",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Это значение является обязательным. Значение не должно содержать пробелы и должно быть уникальным.",

		admin_repcfg_cmis_use_gzip_encoding: "Использовать кодировку GZIP:",

		admin_repcfg_task_mgr_proxy: "ID соединения менеджера задач:",
		admin_repcfg_task_mgr_proxy_hover: "При совместном использовании Box или при удалении пространства команды менеджер задач использует ID пользователя-администратора и пароль для выполнения фоновых задач, которые изменяют репозиторий.<br><br>Щелкните по Задать и войдите в репозиторий, используя действительный ID пользователя-администратора репозитория и пароль.",
		admin_task_manager_not_enabled_warning: "Этой опции требуется служба менеджера задач, но служба менеджера задач не включена.  Вы можете включить службу менеджера задач для всех рабочих столов на странице Общие для параметров.",
		admin_task_manager_not_enabled_and_user_warning: "Этой опции требуется служба менеджера задач, но служба менеджера задач не включена. Задайте на этой странице ID соединения с менеджером задач, а затем на странице Общие для параметров включите службу менеджера задач для всех рабочих столов.",
		admin_task_manager_user_id_pw_not_set_warning: "Этой опции требуется служба менеджера задач, а также ID пользователя-администратора и пароль. Задайте на этой странице ID соединения с менеджером задач.",
		admin_repcfg_teamspaces_delete_task_id: "Администратор репозиториев:",
		admin_repcfg_teamspaces_delete_task_password: "Пароль:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Вы должны указать администратора библиотечного сервера, чтобы разрешить службе менеджера операций удалять пространство команды в репозитории.",
		admin_repcfg_teamspaces_delete_task_hover: "По умолчанию когда пользователь удаляет пространство команды, пространство команды будет скрыто. Все папки и документы в пространстве команды останутся в репозитории. <br /> <br />Если включить эту опцию, в репозитории остаются только документы, помещенные в другие папки в репозитории.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "При большом числе пространств команд в вашей среде вывод всех пространств команд на вкладку <b>Пространства команд</b> может занять много времени. Вы можете выбрать эту опцию, чтобы уменьшить время, необходимое для заполнения списка.<br /><br />Если пользователю нужно работать с пространством команды, которое находится вне заданного вами диапазона, пользователь может использовать поле <b>Фильтр</b>, чтобы найти пространство команды.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Если вы выберете эту опцию, пользователи, у которых есть роль владельца в пространстве команды, смогут изменять роли, связанные с пространствами команд, созданными до IBM Content Navigator версии 2.0.2.<br /><br />Эта опция не влияет на пространства команд, созданные при помощи IBM Content Navigator версии 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Укажите, хотите ли вы, чтобы пользователи могли создавать пространства команд и шаблоны пространств команд для этого репозитория.<br /><br /><b>Важно:</b> Репозиторий должен поддерживать иерархические папки.<br /><br />Если вы включите поддержку пространств команд, IBM Content Navigator создаст модель данных пространств команд для репозитория. Модель данных содержит объекты ACL, полномочия, наборы полномочий и два новых типа элементов.",
		admin_repcfg_folder_selector_hover: "Выберите папку, которую следует использовать в качестве корневой папки, когда пользователи производят обзор документов. Если у вас нет иерархических папок, сконфигурированных в репозитории, этот параметр позволит вам обеспечить поддержку обзора, задав корневую папку. Если у вас есть иерархические папки, сконфигурированные в репозитории, этот параметр переопределит корневую папку, сконфигурированную в репозитории.",
		admin_repcfg_cm_use_sso_hover: "Укажите, следует ли разрешить единую регистрацию пользователям с набором полномочий Доверенный вход в систему.<br /><br /><b>Важно:</b> Чтобы этот параметр действовал, единая регистрация должна быть включена на сервере Content Manager, и сервер WebSphere Application Server должен быть сконфигурирован для использования LTPA.",
		admin_repcfg_cm_direct_retrieve_hover: "По умолчанию включено прямое получение, так как это позволяет веб-клиенту быстро получать содержимое от менеджера ресурсов. <br /><br />Вы можете выключить эту опцию, если не хотите, чтобы приложение-клиент получало доступ к менеджеру ресурсов напрямую, или если у вас есть брандмауэр или прокси-сервер, не позволяющий веб-клиенту получать доступ к менеджеру ресурсов с использованием URL. Например, если включено прямое получение, брандмауэр может запретить пользователям просматривать документы в средстве просмотре апплетов.",
		admin_repcfg_cmItemTypesToDisplay: "Если вы не хотите, чтобы пользователи видели типы элементов ресурсов и типы элементов на сервере IBM Content Manager, вы можете выводить только типы элементов моделей документов. Типы элементов будут показаны, когда пользователи будут создавать поиски, добавлять документы и создавать папки.",
		admin_repcfg_cm_language_codes_hover: "Укажите, на каких языках должен возвращать данные сервер Content Manager. Список доступных  языков управляется списком определений языков на сервере.<br /><br /><b>Помните:</b> Данные на веб-клиенте появляются на том языке, который задан в веб-браузере пользователя.",
		admin_repcfg_cm_pdf_conversion_hover: "Укажите типы документов, которые нужно преобразовывать в PDF, когда пользователь отправляет  документ с несколькими частями в виде вложения сообщения электронной почты. Все части объединяются в один документ PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Укажите, хотите ли вы, чтобы пользователи могли создавать пространства команд и шаблоны пространств команд для этого репозитория.<br /><br />Если вы включите поддержку пространств команд, IBM Content Navigator создаст модель данных пространств команд для репозитория. Модель данных содержит шаблоны свойств, пользовательские объекты, объект папки и несколько папок.",
		admin_repcfg_use_entry_template_p8_hover: "Укажите, смогут ли пользователи сохранять шаблоны ввода в этом репозитории и управлять ими из IBM Content Navigator. Если эта функция не будет включена, пользователи смогут искать и использовать шаблоны ввода, которые уже есть в репозитории.<br /><br />Если вы включите управление шаблонами ввода, IBM Content Navigator обновит в репозитории модель данных шаблонов ввода. Обновление включает в себя новые свойства. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Дополнительная информация</a>",
		admin_repcfg_use_entry_template_cm_hover: "Укажите, смогут ли пользователи сохранять шаблоны ввода в этом репозитории и управлять ими из IBM Content Navigator.<br /><br />Если вы включите управление шаблонами ввода, IBM Content Navigator создаст в репозитории модель данных шаблонов ввода. Модель данных включает в себя новый объект ACL, новые свойства и новый тип элементов. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Дополнительная информация</a>",
		admin_repcfg_sync_service_p8_hover: "Укажите, хотите ли вы, чтобы пользователи смогли синхронизировать свои избранные элементы на рабочих станциях и мобильных устройствах.<br><br><b>Важно:</b> Чтобы использовать эту опцию, вы также должны выполнить следующие операции:<br><ul><li>Задайте <b>Общедоступный URL служб синхронизации</b> в разделе <b>Службы синхронизации</b> в утилите администрирования.</li><li>Добавьте этот репозиторий на рабочий стол, для которого включены службы синхронизации.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Укажите, будет ли опция старшей версии выбираться по умолчанию при добавлении пользователями документов в репозиторий.<br /><br />Пользователи смогут отменить выбор этой опции, если захотят добавить документ, как младшую версию.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Укажите, будет ли опция старшей версии выбираться по умолчанию при активации пользователями документов в репозитории.<br /><br />Пользователи смогут отменить выбор этой опции, если захотят активировать документ, как младшую версию.",
		admin_repcfg_p8_annotation_security_hover: "Укажите, какой тип безопасности следует применять к аннотациям по умолчанию.<br /><br />Пользователям предоставляется возможность изменить безопасность аннотаций.",
		admin_repcfg_p8_connection_point_hover: "Если вы хотите использовать рабочие потоки IBM FileNet P8, выберите точку связывания с механизмом процессов. Выбранная вами точка связывания определит, какие рабочие потоки будут доступны пользователям, обращающимся к данному репозиторию.",
		admin_repcfg_p8_include_workflow_definition_hover: "Если в веб-клиенте вы выводите класс документа определений рабочего потока IBM FileNet P8, пользователи смогут искать определения рабочего потока или добавлять их в репозиторий.",
		admin_repcfg_p8_include_form_template_hover: "Если в веб-клиенте вы выводите класс документа шаблонов формы IBM FileNet P8, пользователи смогут искать шаблоны формы или добавлять их в репозиторий.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Укажите полный путь файла конфигурации AFP2PDF для данного репозитория на сервере веб-приложений. Чтобы можно было просматривать и печатать данные AFP, у вас должна быть установлена утилита преобразования AFP2PDF.<br /><br /><b>Помните:</b> Чтобы можно было воспользоваться этим параметром, у вас должна быть установлена утилита преобразования AFP2PDF.",
		admin_repcfg_od_transform_xml_file_hover: " Если вы хотите использовать пользовательское преобразование для преобразования содержимого Content Manager OnDemand, укажите полный путь XML-файла, в котором задано преобразование. Этот XML-файл должен находиться на сервере веб-приложений.",
		admin_repcfg_od_ssl_hover: "Укажите, нужно ли использовать SSL для защиты соединения между сервером приложений IBM Content Navigator и библиотечным сервером Content Manager OnDemand и серверами объектов.<br /><br /><b>Важно:</b> При включении SSL для Content Manager OnDemand это не затрагивает соединение между сервером приложений IBM Content Navigator, веб-сервером и рабочими станциями пользователей.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Укажите полный путь файла базы данных цепи ключей для данного репозитория на сервере веб-приложений. Например, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Файл базы данных цепи ключей содержит доверенные корневые сертификаты. Чтобы воспрепятствовать несанкционированному доступу к файлу, нужно использовать строгую защиту файловой системы.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Укажите полный путь файла паролей цепи ключей для данного репозитория на сервере веб-приложений. Например, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Файл накопления паролей цепи ключей содержит пароль для файла базы данных цепи ключей. Чтобы воспрепятствовать несанкционированному доступу к файлу, нужно использовать строгую защиту файловой системы.",
		admin_repcfg_od_sso_password_hover: "Введите пароль, который следует использовать для единой регистрации на сервере OnDemand.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API поддерживает пользовательские свойства. Если вы хотите использовать любые пользовательские свойства при соединении с репозиторием через веб-клиент, укажите имена и значения пользовательских свойств.<br /><br />Дополнительную информацию о поддерживаемых пользовательских свойствам смотрите в документации Javadoc по ODWEK Java API, которая находится в подкаталоге /api каталога установки ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Введите имя свойства.",
		admin_repcfg_od_custom_properties_value_hover: "Введите значение свойства.",
		admin_repcfg_od_use_sso_hover: "Укажите, нужно ли разрешить единую регистрацию для пользователей.<br /><br /><b>Важно:</b> Чтобы этот параметр действовал, на сервере Content Manager OnDemand должна быть включена единая регистрация.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Использовать кодировку GZIP для этого источника CMIS.",
		admin_repcfg_cm_use_part_file_name: "Имя файла, используемое при скачивании документов:",
		admin_repcfg_cm_use_part_file_name_help: "Укажите, как имена файлов документов определяются при скачивании документов.",
		admin_repcfg_cm_use_part_file_name_enable: "Использовать имя файла",
		admin_repcfg_cm_use_part_file_name_disable: "Использовать имя элемента в репозитории",
		admin_repcfg_add_doc_name: "Имя по умолчанию для добавленного документа:",
		admin_repcfg_add_doc_name_hover: "Пользователи могут изменить имя перед добавлением документа.",
		admin_repcfg_add_doc_name_empty: "Нет (пустое)",
		admin_repcfg_add_doc_name_file_name: "Имя файла выбранного документа",

		admin_repcfg_compound_documents: "Функции составного документа:",
		admin_repcfg_compound_documents_hover: "Включите функции составного документа P8, например, навигацию.",
		admin_repcfg_cm_action_list_config_enabled: "Список действий для рабочих элементов:",
		admin_repcfg_cm_action_list_config_hover: "При конфигурировании маршрутизации документов на клиент администрирования системы Content Manager можно задать список действий, которые пользователь может выполнить с рабочим элементом.<br /><br />Включите эту опцию, если вы хотите использовать список действий с сервера Content Manager. Эти параметры используются в контекстном меню и в окне Изменить свойства для рабочего элемента.<br /><br /><b>Важно:</b> Параметры в списке действий переопределяют все настроенные меню, которые вы конфигурируете в инструменте администрирования Content Navigator. Если в списке действий нет никаких параметров, пользователь не сможет выполнить никаких действий с рабочими элементами.",

		admin_repcfg_box_share: "Совместно используемый ресурс Box",
		admin_repcfg_box_share_p8_hover: "Позволяет пользователям совместно использовать документ из этого репозитория. Совместное использование документа включает в себя копирование файла в Box, создание ссылки и отправку ссылки по электронной почте.<br /><br />Если вы включите совместное использование Box, IBM Content Navigator создаст в репозитории модель данных совместного использования Box. Чтобы установить совместно используемую надстройку Box для IBM Content Navigator, у вас должно быть установлено соединение с репозиторием от имени администратора библиотечного сервера.",

		admin_menu_type_icon: "Значок типа меню",
		admin_menu_toolbar_hover: "Панель инструментов",
		admin_menu_toolbar_custom_hover: "Пользовательская панель инструментов",
		admin_menu_contextMenu_hover: "Контекстное меню",
		admin_menu_contextMenu_custom_hover: "Пользовательское контекстное меню",

		admin_menu_contextMenu_custom_empty: "В сконфигурированных подключаемых модулях не задано никаких пользовательских контекстных меню.",
		admin_menu_toolbar_custom_empty: "В сконфигурированных подключаемых модулях не задано никаких пользовательских панелей инструментов.",

		admin_file_type_category_filters: "Фильтры типов файлов:",
		admin_file_type_category_filters_hover_help: "Задайте список типов файлов, которые пользователи могут использовать в следующих ситуациях:<ul><li>Чтобы сузить список результатов при поиске или обзоре в IBM Content Navigator for Microsoft Office<li>Чтобы сузить список результатов при поиске в репозитории IBM FileNet P8 на веб-клиенте<li>Чтобы ограничить типы файлов, которые пользователи могут добавить в репозиторий при использовании шаблона ввода</ul>",
		admin_file_type_only_use_in_et_folder_association: "Показать только в связях с папкой шаблонов ввода",
		admin_office_config_properties_label: "Свойства Office",
		admin_office_config_type_label: "Тип данных",
		admin_office_config_mapped_property_label: "Свойство репозитория",
		admin_office_config_properties_hover_help: "Введите, а затем добавьте имя каждого свойства Microsoft Office, которое вы хотите отобразить в свойство репозитория. Тип данных для всех свойств должен совпадать.",
		admin_office_config_mapped_property_hover_help: "Если вы хотите отобразить свойства Office более чем в одно свойство репозитория, вы должны создать новое отображение свойства",
		admin_new_property_mapping_title: "Новое отображение свойства",
		admin_property_mapping_title: "Изменить отображение свойства",
		admin_property_mapping_instruction: "Укажите, какие свойства Microsoft Office вы хотите отобразить в свойство в репозитории. Тип данных у свойств Office должен совпадать с типом данных свойства в репозитории. <br /><br />Если у документа Office есть более одного свойства из отображения, IBM Content Navigator будет использовать первое свойство в списке, чтобы подставить значение для свойства в репозитории.",
		admin_ms_general_settings: "Общая конфигурация:",
		admin_ms_delete_local_settings: "Удалить локальные файлы, когда пользователи:",
		admin_ms_outlook_options: "Интеграция с Outlook:",
		admin_ms_enable_props_mapping: "Отобразить свойства Office в свойства репозитория, когда пользователи:",
		admin_ms_open_doc_when_checkout: "Автоматически резервировать документ при его открытии",
		admin_ms_open_doc_when_checkout_hover_help: "Если выбрать эту опцию, пользователь не сможет перезаписать файл в репозитории более старой версией файла.",
		admin_ms_prompt_close_office: "Предложить пользователям активировать документы, когда они закрывают прикладные программы Office",
		admin_ms_prompt_close_office_hover_help: "Если выбрать эту опцию, пользователям не позволят забыть активировать их работу.",
		admin_ms_add_with_entry_template_only: "Показать только действие Добавить с шаблоном",
		admin_ms_delete_local_on_add: "Удалить локальные файлы, когда пользователи добавляют документы",
		admin_ms_delete_local_on_checkin: "Удалить локальные файлы, когда пользователи активируют документы или отменяют резервирование",
		admin_ms_delete_local_on_add_hover_help: "Когда пользователь добавляет документ в IBM Content Navigator for Microsoft Office, документ добавляется в репозиторий, а локальная копия документа остается открытой, чтобы пользователи могли сразу же зарезервировать документ для внесения изменений.<br /><br />Выберите эту опцию, чтобы автоматически закрывать и удалять локальную копию документа после добавления документа в репозиторий.",
		admin_ms_delete_local_on_checkin_hover_help: "Когда пользователь активирует документ в IBM Content Navigator for Microsoft Office, документ активируется в репозитории, а локальная копия документа остается открытой. Локальная копия также остается открытой после использования действия по отмене резервирования. При открытой локальной копии пользователи могут сразу же снова зарезервировать документ, чтобы внести изменения.<br /><br />Выберите эту опцию, чтобы автоматически закрывать и удалять локальную копию документа как после активации документа, так и после использования действия по отмене резервирования.",
		admin_ms_delete_local_on_save: "Сохранить документ",
		admin_ms_prompt_for_props_on_add: "Предложить пользователям ввести значения свойств при добавлении электронной почты в репозиторий",
		admin_ms_prompt_for_props_on_add_hover_help: "Если эта опция не выбрана, веб-клиент будет использовать отображение свойства Outlook,  заданное для репозитория.<br /><br />Если есть шаблоны ввода, связанные с папкой, в которую добавляются сообщения электронной почты, у пользователя могут не запрашивать никаких свойств.",
		admin_ms_delete_email_on_add: "Удалить сообщение электронной почты с сервера электронной почты при добавлении этого сообщения электронной почты в репозиторий",
		admin_ms_send_email_as_link_only: "Запретить пользователям отправлять документы в виде вложений",
		admin_ms_send_email_as_link_only_hover_help: "Если вы выберете эту опцию, пользователи смогут отправлять документы только в виде ссылок из Outlook. Эта опция гарантирует, что увидеть документы смогут только пользователи, у которых есть соответствующие полномочия на доступ к репозиторию.",
		admin_ms_enable_prop_mapping_for_add: "Отобразить свойства Office в свойства репозитория, когда пользователи добавляют или активируют документы",
		admin_ms_checkout_document_after_add: "Автоматически резервировать документы после их добавления в репозиторий",
		admin_no_default_document_type_filtering: "Возвращать все типы документов по умолчанию, когда пользователи выполняют поиски",
		admin_no_default_document_type_filtering_hover_help: "В IBM Content Navigator for Microsoft Office поведение по умолчанию заключается в том, что пользователи, когда запускают поиски, видят только тип документов для текущей программы. Например, тип документов Word выбирается по умолчанию, когда поиск производится из Microsoft Word.<br/><br/>Однако при выборе этой опции отменяется выбор переключателей типов документов, поэтому пользователи увидят все документы, возвращенные при поиске. Пользователи могут переопределить этот параметр, выбрав один или несколько типов документов, прежде чем они запустят поиски.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Укажите, нужно ли отображать свойства документа, заданные для документов Microsoft Office, в свойства, заданные в репозитории.<br /></br /><b>Важно:</b> Если вы включите эту функцию, вы должны сконфигурировать свойства Office для каждого репозитория в вашей среде. Если вы не отобразите свойства Office в свойства вашего репозитория, эта функция не будет работать.<br /><br />Этот параметр не применяется к Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Выберите эту опцию, чтобы сократить число шагов, которые должны выполнить пользователи, чтобы работать с документами после добавления документов в репозиторий.<br /></br /><b>Совет:</b> Чтобы убедиться, что пользователи будут активировать файлы обратно в репозиторий, выберите <b>Предлагать пользователям активировать документы, когда они закрывают приложения Office</b>.",
		admin_ms_show_details_recently_used: "Показать сведения о <b>недавно использованном</b> элементе",
		admin_ms_show_details_recently_used_hover_help: "По умолчанию, когда вы просматриваете список недавно использованных элементов, подробные сведения для этих элементов скрыты, что позволяет показать больше элементов. При выборе этой опции в списке Недавно использованные будут по умолчанию выводиться сведения для первого документа на панели подробностей.",
		admin_ms_show_no_permissions_warning: "Показывать предупреждения, когда пользователи изменяют свойства или активируют документ, но у них нет разрешений на просмотр шаблона ввода документа",
		admin_ms_show_no_permissions_warning_hover_help: "Если документ в репозитории был создан с использованием шаблона ввода, но у пользователя нет разрешения на просмотр шаблона ввода документа, шаблон ввода не будет получен.<br /><br/>Поэтому, когда пользователь изменяет свойства документа, свойства будут показаны без использования шаблона ввода. И, когда пользователь активирует документ, он будет активирован без использования шаблона ввода.<br /><br />По умолчанию при выполнении этих действий пользователя не информируют о том, что шаблон ввода не используется. При этом только записывается предупреждение в файл журнала.<br /><br />Выберите эту опцию, если хотите выводить на экран предупреждения, которые сразу же проинформируют пользователя, если шаблон ввода не используется.",
		admin_ms_hide_search_actions: "Свернуть раздел фильтров поиска",
		admin_ms_hide_search_actions_hover_help: "По умолчанию пользователи могут применить фильтр действий, чтобы указать действие, пользователя или группу пользователей и выбрать дату или диапазон дат, указывающие, когда выполнялось действие. Например, можно искать документы, добавленные только вами за последний месяц.<br /><br />Если вы не хотите разрешить пользователям применять фильтры действий, выберите эту опцию, чтобы скрыть фильтры действий и сократить число полей, которые появляются на экране при создании определения критериев поиска.",
		admin_ms_hide_save_document: "Скрыть опцию <b>Сохранить</b> в ленточной панели",
		admin_ms_hide_save_document_hover_help: "Используя опцию <b>Сохранить</b>, пользователи могут сохранять изменения документов в репозитории, не активируя документ.",
		admin_ms_indicate_managed_email_on_add: "Укажите, было ли сообщение электронной почты уже добавлено в репозиторий",
		admin_ms_indicate_managed_email_on_add_hover_help: "Если выбрать эту опцию, пользователи смогут узнать, что электронная почта уже находится в репозитории, что может сократить число добавлений электронной почты в репозиторий.  При выборе этой опции в Microsoft Outlook создается новая категория цветов под именем IBM ECM. Любое сообщение электронной почты, добавляемое в репозиторий, автоматически добавляется в категорию Под управлением IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Опции Добавить в группе Изменить:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Укажите, какие опции <b>Добавить</b> будут доступны в группе <b>Изменить</b> в ленте меню:<ul><li>Выберите <b>Показать все опции Добавить</b>, чтобы была показана кнопка Добавить в все действия Добавить, доступные в группе Изменить.</li><li>Выберите <b>Скрыть все опции Добавить</b>, чтобы запретить пользователям добавлять документы в репозиторий, или если вы хотите, чтобы пользователи могли добавлять документы только из пространства команды.</li><li>Выберите <b>Скрыть действие Добавить с шаблоном</b>, если вы хотите применить связи с папкой шаблонов ввода и запретить пользователям выбирать другой шаблон ввода.</li><li>Выберите <b>Показать только действие Добавить с шаблоном</b>, если вы хотите потребовать от пользователей, чтобы они добавляли документы с использованием шаблонов ввода.</li></ul>",
		admin_ms_show_edit_group_add_button: "Показать все опции Добавить (по умолчанию)",
		admin_ms_hide_edit_group_add_button: "Скрыть все опции Добавить",
		admin_ms_hide_add_with_entry_template: "Скрыть действие Добавить с шаблоном",
		admin_ms_managed_in_ecm: "Под управлением IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Если пользователи просматривают категории в Microsoft Outlook, эта метка появляется для электронной почты, которая была добавлена в репозиторий IBM Content Manager или IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Имя категории Под управлением IBM ECM не должно содержать запятых (,) и точек с запятыми (;).",
		admin_delete_open_docs_after_close: "Автоматически удалять открытые документы, когда пользователи закрывают документы",
		admin_admin_delete_open_docs_after_close_hover_help: "Когда пользователь открывает документ в IBM Content Navigator for Microsoft Office, документ скачивается в каталог документов пользователя или в положение, заданное параметрами отслеживания файлов для рабочего стола.<br><br>Выберите эту опцию, чтобы удалять открытые, но не зарезервированные файлы, когда пользователи закрывают документы. При выборе этой опции вы сможете:<ul><li>Принудительно применить соответствие политикам ИТ</li><li>Гарантировать, что пользователи работают с последними версиями документов</li><li>Сократить объем дискового пространства, используемый для сохранения документов</li><ul>",
		admin_ms_custom_command_configuration: "Пользовательские команды:",
		admin_ms_custom_command_configuration_hover_help: "В панель инструментов IBM Content Navigator for Microsoft Office в программах Microsoft Office можно добавить до четырех команд. Команды можно использовать, чтобы открывать URL. Например, можно добавить команду, чтобы открывать службу, которую можно использовать для поиска пользователей и групп.",
		admin_ms_custom_command_dialog_title: "Изменить пользовательскую команду",
		admin_ms_custom_command_dialog_intro_text: "Задайте команду, которую можно использовать, чтобы открывать URL из панели инструментов IBM Content Navigator for Microsoft Office в программах Microsoft Office.",
		admin_ms_custom_command_id: "Команда ${0}",
		admin_ms_custom_command_available_label: "Доступные",
		admin_ms_custom_command_available_hover_help: "Если URL, заданный для команду, нужно отключить от системы для обслуживания, вы можете отменить выбор переключателя команды, чтобы команда не появлялась в Microsoft Office.<br/><br/><b>Важно:</b> Пользователи должны отключиться от рабочего стола, чтобы изменения были отражены в IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID команды",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Метка",
		admin_ms_custom_command_label_hover_help: "Задайте метку, которая появится для команды в Microsoft Office.",
		admin_ms_custom_command_description_label: "Описание",
		admin_ms_custom_command_description_hover_help: "Задайте описание, которое появится для команды в Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Укажите полный URL, который нужно открыть из Microsoft Office. URL может соответствовать веб-странице или службе.",
		admin_ms_custom_command_icon_label: "Значок",
		admin_ms_custom_command_icon_hover_help: "Задайте имя файла значка, который нужно показать на экране, например, CommandIcon.png.<br/><br/><b>Важно:</b> Вы должны добавить файл значка в подкаталог Plugins в каталоге установки IBM Content Navigator for Microsoft Office на каждом компьютере-клиенте.<br/><br/>Если файла значка нет в каталоге Plugins или если вы не зададите значок, будет показан значок по умолчанию, customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Метка группы:",
		admin_ms_custom_command_group_name_hover_help: "Вы можете задать метку группы, которая появится под пользовательскими командами в ленте меню.<br/><br/>Если вы не зададите метку, меткой группы будет <b>Пользовательские команды</b>.",
		admin_ms_ribbon_tab_label: "Метка вкладки IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Введите имя, которое должно появляться для вкладки IBM Content Navigator for Microsoft Office в ленте Microsoft Office. Если не указать имя, именем вкладки будет \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Закрывать панель операций, когда пользователи открывают документы",
		admin_ms_close_task_pane_on_open_hover_help: "Выберите эту опцию, если вы хотите увеличить до максимума пространство, в котором пользователи могут видеть документы в Microsoft Office.<br/><br/>Пользователи Microsoft Office 2010: Чтобы убедиться, что панель задач закрыта для всех документов, включите режим нескольких интерфейсов документов (multiple document interface, MDI), выбрав <b>Опции</b> &gt; <b>Дополнительно</b> и отменив выбор опции <b>Показывать все окна в панели задач</b>.",
		admin_ms_open_document_options: "Опции открытия документов:",
		admin_ms_delete_local_file_options: "Удалить опции локального файла:",
		admin_ms_add_and_checkin_options: "Добавить и активировать опции:",
		admin_ms_search_options: "Опции поиска:",
		admin_ms_display_options: "Опции вывода:",
		admin_ms_bidirection_enable_label: "Включить поддержку для текста с двумя направлениями письма",
		admin_ms_bidirection_enable_hover_help: "Выберите эту опцию, если вы хотите разрешить пользователям вводить или просматривать текст в IBM Content Navigator для Microsoft Office в направлении, отличающемся от направления слева направо.",
		admin_ms_text_direction_label: "Базовое направление текста для содержимого:",
		admin_ms_text_direction_hover_help: "Задайте направление, в котором текст вводится в поля ввода в IBM Content Navigator для Microsoft Office. Этот параметр также управляет тем, как будут показаны элементы, например, имена папок или значения свойств.",
		admin_ms_control_threshold_label: "Минимальное число элементов, чтобы включить упреждающий поиск:",
		admin_ms_control_threshold_hover_help: "По умолчанию упреждающий поиск включается, если число элементов больше или равно 50, для поиска или назначения свойств, у которых есть заранее заданные значения в раскрывающемся списке. Минимальное значение можно изменить.",

		admin_ms_default_email_class: "Класс для использования при добавлении сообщения электронной почты",
		admin_ms_default_email_class_hover_help: "Любое сообщение электронной почты, добавляемое в этот репозиторий из Microsoft Outlook, будет добавлено к заданному вами классу. Пользователи не смогут изменить этот класс.",
		admin_ms_default_folder_class: "Класс для использования при создании папок",
		admin_ms_default_folder_class_hover_help: "Любая папка, созданная в этом репозитории из прикладной программы Microsoft Office, будет добавлена к заданному вами классу.  Пользователи не смогут изменить этот класс.",
		admin_ms_default_folder_warn_title: "Вы не можете использовать класс ${0}, как класс для использования при создании папок.",
		admin_ms_default_folder_warn_name_prop_invalid: "Свойство имени класса не является строкой, а имя папки должно быть строкой.<br />Выберите другой класс, который нужно использовать при создании папок, или обратитесь к администратору IBM Content Manager, чтобы изменить имя свойства класса на строку.",
		admin_ms_default_folder_warn_req_props: "Класс содержит свойства, у которых нет значений. Однако пользователи не могут задать значения для необходимых свойств при создании папок в IBM Content Navigator для Microsoft Office.<br />Выберите другой класс, который нужно использовать при создании папок, или обратитесь к администратору IBM Content Manager, чтобы сделать необходимые свойства необязательными или заранее подставить значение в нужные свойства.",
		admin_ms_delimiter_for_office_properties: "Разделитель для строчных свойств с несколькими значениями",
		admin_ms_delimiter_for_office_properties_hover_help: "Задайте символ, который следует использовать в качестве разделителя для строчных свойств, которые вы отображаете в строчные свойства с несколькими значениями. По умолчанию вы можете назначить набор значений для строчного свойства с несколькими значениями, используя точку с запятой (;) в качестве разделителя значения. Однако, если одно из ваших строчных значений содержит точку с запятой, вы не сможете добавить это строчное значение, если не измените разделитель на другой символ. Например, вы можете изменить разделитель на запятую (,).",
		admin_ms_outlookPropertyRemembrance : "Запомнить настройки при добавлении сообщений и вложений",
		admin_ms_outlookPropertyRemembrance_hover_help : "Значения свойств, расположение, выбор класса и безопасность, назначаемые для сообщений и вложений, запоминаются и будут использованы в качестве настроек по умолчанию, когда добавляются элементы.",

		admin_file_type_name_hover_help: "Всплывающая справка для имени",
		admin_file_type_description_hover_help: "Всплывающая справка для описания",
		admin_file_type_dialog_title: "Изменить фильтр типов файлов",
		admin_new_file_type_dialog_title: "Новый фильтр типов файлов",
		admin_mobile_feature_dialog_title: "Функция",
		admin_mobile_feature_dialog_new_title: "Новая функция",
		admin_file_type_instructions: "Создайте фильтр, который пользователи смогут применить, чтобы сузить список результатов поиска. В фильтр можно отобразить несколько типов MIME.",
		admin_file_type_filter_place_holder: "Применить фильтр к типам MIME",
		admin_new_button_label: "Создать",
		admin_edit_button_label: "Изменить",
		admin_delete_button_label: "Удалить",
		admin_copy_button_label: "Копировать",
		admin_verify_button_label: "Проверить",
		admin_availabe_filters_label: "Доступные фильтры",
		admin_selected_filters_label: "Выбранные фильтры",

		admin_mobile_access: "Доступ к мобильным программам:",
		admin_mobile_access_hover_help: "Если вы хотите использовать IBM Content Navigator с мобильного устройства, рекомендуется, чтобы вы разрешили пользователям получать доступ к этому рабочему столу из мобильной программы.<br /><br />Если вы отключите доступ к этому рабочему столу из мобильной программы, пользователи все равно смогут получить доступ к веб-клиенту из своих мобильных браузеров. Однако веб-клиент не предназначен для доступа с мобильных устройств.",

		admin_mobile_access_allow_label: "Разрешить пользователям:",
		admin_mobile_allow_add_photos: "Добавить фотографии с камеры и из библиотеки фотографий",
		admin_mobile_allow_add_docs: "Добавить документы и создать папки в репозитории",
		admin_mobile_allow_open_docs: "Открывать документы в других программах",
		admin_mobile_allow_add_docs_hover_help: "Пользователи могут создавать папки или добавлять документы из других мобильных программ, например, документ, вложенный в сообщение электронной почты.",
		admin_mobile_allow_open_docs_hover_help: "Пользователям предлагается выбрать программу, которую нужно использовать для просмотра выбранного документа. Если доступна только одна программа, она и будет использоваться.",
		admin_mobile_features: "Функции:",
		admin_mobile_features_hover_help: "Укажите, какие функции рабочего стола появятся в мобильной программе IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Новая функция",
		admin_mobile_move_up_button_label: "Переместить вверх",
		admin_mobile_move_down_button_label: "Переместить вниз",
		admin_desktop_mobile_instructions: "Здесь будут находиться инструкции по настройке мобильной среды",
		admin_desktop_max_number_of_docs_to_add: "Максимальное число документов для добавления:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Укажите максимальное число документов, которые пользователи смогут одновременно добавить. Максимум по умолчанию - 50. Однако вы можете задать максимум до 300.",
		admin_desktop_max_number_of_docs_to_modify: "Максимальное число элементов для изменения:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Укажите максимальное число элементов, которые пользователи могут одновременно изменять. Максимум по умолчанию - 50. Однако вы можете задать максимум до 300.",
		admin_desktop_max_conversion_size: "Максимальный объем данных при преобразованиях PDF (в МБ):",
		admin_desktop_max_conversion_size_hover_help: "<b>Ограничение:</b> Этот параметр не поддерживается продуктом IBM Content Manager OnDemand.<br/><br/>Задайте максимальный объем данных, который можно преобразовать в PDF. Этот предел применяется, когда пользователи загружают элементы как файлы PDF или отправляют элементы по электронной почте как файлы PDF.<br /><br />Если определить размер документа не удается, документы все равно преобразуются в PDF.<br/><br/>Предел по умолчанию - 200 МБ. Если задать предел свыше 200 МБ, это может отрицательно повлиять на производительность системы.",
		admin_desktop_timeProperties: "Временная отметка:",
		admin_desktop_time_properties_hover_help: "<b>Только для пользователей IBM FileNet P8:</b> Этот параметр применяется к пользовательским свойствам и не применяется к системным свойствам. Например, если вы выберете <b>Показывать только часть временной отметки, относящуюся к дате</b>, в свойстве Изменен будет все равно показана часть временной отметки, относящаяся ко времени.<br/><br/>Этот параметр не изменяет временную отметку в репозитории.",
		admin_desktop_disable_time_stamp: "Показывать полную временную отметку",
		admin_desktop_enable_time_stamp: "Показывать только часть временной отметки, относящуюся к дате",
		admin_desktop_timezone: "Часовой пояс:",
		admin_desktop_timezone_localuser: "Показывать местный часовой пояс пользователя",
		admin_desktop_timezone_alluser: "Показывать один и тот же часовой пояс для всех пользователей",
		admin_desktop_timezone_hover_help: "Вы можете указать, увидят ли пользователи временную отметку, основанную на их местном часовом поясе, или все пользователи увидят одну и ту же временную отметку.<br/><br/>Этот параметр не изменяет временную отметку в репозитории. Однако выбранный вами параметр определяет часовой пояс, используемый для создания временной отметки в репозитории, когда пользователи добавляют или изменяют элементы.",
		admin_desktop_mobile_feature_display_label: "Показать",
		admin_desktop_mobile_feature_icon_file_label: "Файл значка",
		admin_mobile_feature_dialog_icon_file_label: "Файл значка:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Имя",
		admin_desktop_mobile_select_feature_label: "Выбрать функцию",
		admin_desktop_mobile_feature_icon_label: "Значок функции",
		admin_desktop_share_admin_none: "Администратор не задан.",
		admin_desktop_share_admin_edit_label: "Задать администратора...",
		admin_browse_icon: "Значок Обзор",
		admin_search_icon: "Значок Поиск",
		admin_favorites_icon: "Значок Избранное",
		admin_casesearch_icon: "Значок Дело",
		admin_datacap_icon: "Значок Datacap",
		admin_system_defined: "Задан системой",
		admin_icon_file_placeholder_text: "Положение файла (например, http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Корневая",
		admin_folder_default: "По умолчанию",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Панели инструментов",
		admin_menu_context_menus: "Контекстные меню",
		admin_menu_office_toolbars: "Команды строки меню Microsoft Office",
		admin_menu_office_menus: "Контекстные меню Microsoft Office",

		admin_file_name_label: "Имя файла:",
		admin_exportconfiguration_security_label: "Включить пользователей и группы, авторизованных для использования рабочего стола",
		admin_exportconfiguration_instruction: "Вы можете экспортировать свои рабочие столы, включая конфигурации репозитория и конфигурации подключаемых модулей, связанные с выбранными рабочими столами, в файл, который можно импортировать в другой экземпляр IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Экспортировать рабочий стол",
		admin_exportconfiguration_button_label: "Экспорт",
		admin_dialog_select_all: "Выбрать все",
		admin_dialog_deselect_all: "Очистить все",

		admin_importconfiguration_instruction: "Элементы в выбранном файле конфигурации, будут импортированы в эту систему. Однако, если элемент с таким же ID уже существует в системе, вы должны решить, нужно ли сохранить или перезаписать элемент.",
		admin_importconfiguration_dialog_label: "Импортировать рабочий стол",
		admin_importconfiguration_reason_dialog_label: "Импортировать причины редакции",
		admin_importconfiguration_button_label: "Импорт",
		admin_to_be_imported: "Конфигурационный элемент для импорта",
		admin_on_target_system: "Существующий элемент в системе назначения",
		admin_import_short_warning_message: "Перечисленные ниже элементы уже существуют в этой системе. Выберите элементы, которые вы хотите заменить в этой системе:",
		admin_import_warning_message: "У следующих конфигурационных элементов такие же ID, как у элементов, существующих в системе назначения. Выберите только те элементы, которые вы хотите импортировать и перезаписать в системе назначения.<br /><br />Если вы не хотите перезаписывать конфигурационный элемент, создайте копию этого элемента в экземпляре, из которого был экспортирован рабочий стол, присвойте этому элементу другой ID и свяжите его с рабочим столом. Снова экспортируйте рабочий стол, а затем импортируйте его для данного экземпляра.",
		admin_choose_file_to_import_label: "Выбрать файл для импорта:",
		admin_download_imported_log: "Скачать отчет",
		admin_desktop_import_summary: "Сводка импорта рабочего стола",
		admin_reason_import_summary: "Сводка импорта причин редакции",
		admin_rba_import_summary: "Сводка импорта административных ролей",
		admin_import_open_tabs_checking: "Прежде чем вы сможете импортировать рабочие столы, вы должны закрыть все вкладки, кроме вкладки <bold>Рабочие столы</bold> в утилите администрирования.",
		admin_import_no_conflict: "Указанные ниже элементы будут импортированы:",
		admin_desktop_invalid: "Недопустимый рабочий стол",
		admin_desktop_warning: "Рабочий стол сохранен с предупреждениями.",
		admin_repos_warning: "Репозиторий сохранен с предупреждениями.",
		admin_config_type_icon: "Значок типа элемента конфигурации",

		admin_approval_workflow: "Рабочий поток утверждений",
		admin_approval_workflow_hover: "Позволяет пользователям запустить заранее заданный рабочий поток утверждений. Вы можете отключить рабочий поток утверждений, чтобы дать пользователям возможность запустить пользовательский рабочий поток утверждений, заданный подпиской. По умолчанию рабочий поток утверждений включен.<br><br><b>Важно:</b> Если вы включите рабочий поток утверждений, вы также должны убедиться, что одно или оба заранее заданных определения рабочих потоков (ICNParallelDocumentApproval.pep и ICNSequentialDocumentApproval.pep) добавлены в репозиторий и переданы механизму обработки содержимого.",

		admin_cannot_add_desktop_members_error: "Вы не можете задать пользователей и группы, у которых есть доступ к этому рабочему столу.",
		admin_cannot_add_desktop_members_error_explanation: "У вас нет необходимых разрешений на получение информации о пользователях и группах.",
		admin_cannot_add_desktop_members_error_userResponse: "Войдите в систему, используя другое имя пользователя, или попросите системного администратора IBM Content Manager предоставить вам полномочия UserACLOwner, которые требуются, чтобы получить информацию о пользователях и группах.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Нельзя выбирать пользователей и группы.",
		admin_cannot_select_users_groups_error_explanation: "У вас нет необходимых разрешений на получение информации о пользователях и группах.",
		admin_cannot_select_users_groups_error_userResponse: "Войдите в систему, используя другое имя пользователя, или попросите системного администратора IBM Content Manager предоставить вам полномочия UserACLOwner, которые требуются, чтобы получить информацию о пользователях и группах.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Клиент OAuth2 не найден.",
		oauth_client_not_found_error_explanation: "ID клиента OAuth2 ${0} не найден.",
		oauth_client_not_found_error_userResponse: "Обратитесь к системному администратору и сообщите ему, что ID клиента OAuth2 не найден.",
		oauth_client_not_found_error_adminResponse: "Проверьте конфигурацию репозитория и убедитесь, что он содержит правильный ID клиента OAuth2.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Вход в систему репозитория завершился неудачно.",
		oauth_login_failed_error_explanation: "Попытка войти в репозиторий ${0} завершилась неудачно.",
		oauth_login_failed_error_userResponse: "Убедитесь, что ID пользователя и пароль - правильные, и снова попробуйте войти в систему.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Произошла ошибка при попытке войти в систему ${0}.",
		oauth_error_return_error_explanation: "Попытка авторизации ${0} завершилась неудачно.",
		oauth_error_return_error_userResponse: "Обратитесь к системному администратору, предоставив ему следующую информацию: Попытка авторизации ${0} завершилась неудачно и возвратила следующее сообщение об ошибке: <br>${1}<br><b>ошибка:</b> ${2}.<br><b>описание:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Дополнительную информацию об ошибке можно найти в файлах журнала сервера веб-программ.  Более подробную информацию о файлах журнала смотрите в разделе &quot;Файлы журнала IBM Content Navigator&quot; в Центре знаний IBM. Используя информацию о попытке авторизации ${0}, попробуйте устранить ошибку и проверьте, включена ли функция OAuth2.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Приложение назначения OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "error",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Нераспознанное сообщение об ошибке OAuth.",

		delete_share_permission_error: "Совместно используемый ресурс не удален.",
		delete_share_permission_error_explanation: "У вас нет соответствующих разрешений на удаление совместно используемого ресурса.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Вы не можете совместно использовать этот элемент.",
		class_not_support_share_error_explanation: "Класс ${0} не настроен для поддержки совместного использования.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Вы не можете совместно использовать этот элемент.",
		rbr_not_support_share_error_explanation: "К элементу было добавлено конфиденциальное содержимое.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Устройство, с которого пользователь пытается войти в систему, не авторизовано для доступа к учетной записи пользователя.",
		box_oauth_error_invalid_request: "В требовании отсутствует обязательный параметр, в нем содержится недопустимое значение параметра, параметр встречается в нем более одного раза или там есть иные ошибки форматирования.",
		box_oauth_error_unsupported_response_type: "Сервер авторизации не поддерживает получение кода авторизации с использованием этого метода.  Проверьте значение параметра кода в вашем требовании.",
		box_oauth_error_access_denied: "Владелец ресурса или сервер авторизации отклонил требование.",
		box_oauth_error_temporarily_unavailable: "На вашем устройстве ограничена скорость; вы должны либо уменьшить скорость требований авторизации, либо немного подождать.",
		box_oauth_error_unknown: "Нераспознанное сообщение об ошибке Box.",

		admin_default_search_type: "Тип поиска по умолчанию",
		admin_default_search_type_hover: "Укажите, какая опция должна быть выбрана по умолчанию в поле <b>Поиск для</b> в меню <b>Опции свойств</b>.",
		admin_default_search_type_documents: "Документы",
		admin_default_search_type_folders: "Папки",
		admin_default_search_type_folders_and_documents: "Документы и папки",

		admin_restricted_search_type: "Разрешить поиск по",
		admin_restricted_search_type_hover: "По умолчанию пользователи могут производить поиск и документов, и папок. Если вы хотите скрыть опцию Поиск и ограничить поиск только документами, выберите Документы и отмените выбор элемента Папки.</br>,</br> Если вы разрешите поиск и документов, и папок, выберите вывод на экран опции по умолчанию, когда появится панель поиска.",
		admin_restricted_search_type_documents: "Документы",
		admin_restricted_search_type_folders: "Папки",
		admin_restricted_search_type_folders_and_documents: "Документы и папки",

		admin_default_search_version: "Версия поиска по умолчанию",
		admin_default_search_version_hover: "Укажите, какая опция должна быть выбрана по умолчанию в поле <b>Версия</b> в меню <b>Опции свойств</b>.",

		admin_all_classes_search: "Поиск во всех классах",
		admin_all_classes_search_hover: "Укажите, разрешен ли пользователям поиск во всех классах и, если да, что следует включить в поиск документов.",
		admin_all_classes_search_removed_hover: "Опции для поиска во всех классах недоступны, так как для параметра context-param allPseudoClassHidden в приложении Navigator web.xml задано значение true.",
		admin_all_classes_search_hide: "Удалите вариант для поиска во всех классах.",
		admin_all_classes_search_documents_only_documents: "Поиск документов включает в себя только документы, сохраненные поиски и шаблоны ввода.",
		admin_all_classes_search_documents_non_folders: "Поиск документов включает в себя любые элементы, не являющиеся папками.",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Представление в виде дерева:",
		admin_feature_config_tree_view_hoverhelp: "Укажите, смогут ли пользователи получить доступ к списку папок в репозитории через панель Обзор. Если вы скроете панель Обзор, пользователи должны будут использовать список содержимого для перемещения по папкам в репозитории.",
		admin_feature_config_selected_repositories_label: "Репозитории:",
		admin_feature_config_selected_repositories_hoverhelp: "Выберите репозитории, доступ к которым пользователи смогут получать в этой функции.",
		admin_feature_config_selected_repositories_select_state_hdr: "Выбрать репозиторий",
		admin_feature_config_selected_repositories_name_hdr: "Имя репозитория",
		admin_feature_config_selected_repositories_show_hdr: "Показать",
		admin_feature_config_invalid_icon_title: "У функции отсутствует ряд обязательных параметров",
		admin_feature_config_view_select_hdr: "Выбрать представление",
		admin_feature_config_view_hdr: "Представление",
		admin_feature_config_view: "Представление",
		admin_feature_config_views: "Представления:",
		admin_feature_config_views_hoverhelp: "Укажите, какие представления пользователи смогут применить к списку содержимого. Представления показаны в том порядке, в каком они перечислены. Первым выбранным представлением является представление по умолчанию для функции.<br><br><b>Важно:</b> Если вы включите представление диафильма, вы должны сконфигурировать программу просмотра преобразований HTML, чтобы увидеть предварительные просмотры документов.",

		admin_custom_dialog_name: "Имя:",
		admin_custom_dialog_value: "Значение:",
		admin_custom_setting_name_hover: "Введите имя параметра Daeja ViewONE, который вы хотите добавить в конфигурацию. Более подробную информацию о параметрах конфигурации смотрите в документации по Daeja ViewONE.",
		admin_custom_setting_value_hover: "Введите значение, которое вы хотите использовать для параметра конфигурации Daeja ViewONE. Более подробную информацию о допустимых значениях параметра конфигурации смотрите в документации по Daeja ViewONE.",

		entry_template_name_required_message: "Поле имени в параметрах шаблона ввода является обязательным.",
		entry_template_name_invalid_message: "Поле имени в параметрах шаблона ввода не должно содержать следующих символов: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Если отдельные пользователи и группы выбраны для поля Совместно использовать вместе с в параметрах шаблонов ввода, вы должны задать хотя бы одного пользователя или группу",
		entry_template_no_permission_to_save_to_teamspace_message: "У вас нет разрешения на добавление шаблонов ввода в пространство команды (${0}), выбранное при сохранении в параметрах шаблона ввода.",
		entry_template_save_in_destination_required_message: "Вы должны задать расположение для сохранения по умолчанию в разделе <b>Задать место хранения элементов</b>.",
		entry_template_save_in_destination_must_select_folder: "Если вы скроете поле <b>Сохранить в</b> и потребуете, чтобы пользователи добавляли новые элементы в папку, вы должны выбрать папку в поле <b>Место хранения по умолчанию</b> в разделе <b>Задать место хранения элементов</b>.",
		entry_template_what_to_save_required_message: "Выберите хотя бы один вариант для того, чтоб вы хотите сохранить в окне Задать опции.",
		entry_template_custom_workflow_empty_message: "Если вы выберете <b>Пользовательский рабочий поток...</b>, вы должны найти и выбрать рабочий поток, который вы хотите использовать.",

		entry_template_new: "Новый шаблон ввода",
		entry_template_name_hover: "Имя шаблона ввода не должно содержать следующие символы: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Имя шаблона ввода не должно содержать ни одного из следующих символов: * \\ / : ? \" < > |",
		entry_template_description_hover: "Введите описание, которое позволит пользователям отличить данный шаблон ввода от других шаблонов ввода.",
		entry_tempalte_save_in_hover: "Укажите, где следует сохранить шаблон ввода.<br><br><b>Ограничение:</b> Если вы сохраните шаблон ввода в пространстве команды, вы можете использовать шаблон ввода только в пространстве команды.",
		entry_template_inherit_hover: "Если вы выберете эту опцию, параметры защиты родительской папки будут добавлены в список пользователей и групп, совместно с которыми используется шаблон ввода.",
		entry_template_builder_aria_label: "Построитель шаблонов ввода",
		entry_template_builder_layout_aria_label: "Построитель свойств шаблонов ввода",

		entry_template_settings_document: "Задать шаблон ввода",
		entry_template_settings_folder: "Задать место хранения элементов",
		entry_template_settings_folder_intro: "Укажите, где будут храниться элементы, добавленные с использованием этого шаблона ввода.",
		entry_template_settings_properties: "Задать свойства элемента",
		entry_template_settings_properties_intro: "Вы можете задать значения по умолчанию или предварительно заданные значения для элементов, добавленных с использованием этого шаблона ввода. Кроме того, вы можете изменить схему свойств, чтобы управлять тем, какие свойства будут показаны и в каком порядке.",
		entry_template_settings_workflow: "Сконфигурировать рабочий поток для элемента",
		entty_template_settings_workflow_intro: "Вы можете указать, запускается ли рабочий поток при добавлении элементов, используя шаблон ввода.",
		entry_template_settings_security: "Задать защиту элементов",
		entry_template_settings_security_intro: "Вы можете задать защиту по умолчанию или предварительно заданную защиту для элементов, добавленных с использованием этого шаблона ввода. Возможно, пользователям с соответствующими разрешениями удастся изменять защиту элемента после его добавления.",
		entry_template_settings_options: "Задать опции для элемента",
		entry_template_xt_warning: "При сохранении изменений для этого шаблона ввода он будет преобразован из шаблона ввода Workplace XT в шаблон ввода Navigator. IBM Workplace XT не поддерживает шаблоны ввода IBM Content Navigator.",

		entry_template_properties_edit_layout: "Изменить схему...",
		entry_template_properties_read_only: "Только чтение",
		entry_template_properties_hidden: "Скрытые",

		entry_template_destination_show: "Показать поле <b>Сохранить в</b>",
		entry_template_destination_show_hover: "Если вы выведете на экран поле <b>Сохранить в</b>, пользователи смогут изменять расположение, где будут храниться элементы.",
		entry_template_destination_hide: "Скрыть поле <b>Сохранить в</b>",
		entry_template_destination_hide_hover: "Если вы скроете поле <b>Сохранить в</b>, пользователи не смогут изменять расположение, где будут храниться элементы.",
		entry_template_folder_save_in_default: "Положение <b>Сохранить в</b> по умолчанию:",
		entry_template_folder_save_in_default_hover: "Задайте расположение по умолчанию куда добавляются элементы, добавленные с использованием этого шаблона ввода.<br><br>Выбранное вами расположение по умолчанию накладывает ограничения на поведение среды выполнения шаблона ввода:<ul><li>Пользователи не могут выбрать другой репозиторий.</li><li>Если расположение по умолчанию является пространством команды, пользователи не смогут выбрать другое пространство команды.</li></ul>Однако, если пользователи свяжут этот шаблон ввода с папкой, пользователи смогут переопределить расположение хранения, сконфигурированное для этого шаблона ввода.",
		entry_template_folder_restrict_choice: "Потребовать от пользователей добавлять элементы в расположение по умолчанию или в дочернюю папку расположения по умолчанию",
		entry_template_folder_file_in_required: "Потребовать от пользователей, чтобы они добавляли новые элементы в папку",
		entry_template_folder_file_in_required_hover: "Если вы не выберете эту опцию, пользователи смогут добавлять элементы в корневую папку репозитория.<br><br><b>Ограничение:</b> Конфигурация рабочего стола может потребовать от пользователей, чтобы они выбирали папку.",

		entry_template_document_type_show: "Показать поле <b>Что вы хотите сохранить</b>",
		entry_template_document_type_show_hover: "Если вы выведете на экран поле <b>Что вы хотите сохранить</b>, выбранные вами элементы будут показаны как опции в поле <b>Что вы хотите сохранить?</b>",
		entry_template_document_type_hide: "Скрыть поле <b>Что вы хотите сохранить</b>",
		entry_template_document_type_hide_hover: "Если вы скроете поле <b>Что вы хотите сохранить?</b>, тип документа, который вы выберете, будет всегда использоваться, когда пользователи будут добавлять документы с использованием этого шаблона ввода.",
		entry_template_document_type: "Этот шаблон ввода можно использовать для добавления следующих элементов:",
		entry_template_document_type_hover: "Если вы выведете на экран поле <b>Что вы хотите сохранить</b>, выбранные вами элементы будут показаны как опции в поле <b>Что вы хотите сохранить?</b><br><br>Если вы скроете поле <b>Что вы хотите сохранить?</b>, тип документа, который вы выберете, будет всегда использоваться, когда пользователи будут добавлять документы с использованием этого шаблона ввода.",

		entry_template_misc: "Дополнительные опции:",
		entry_template_auto_classify_show: "Автоматически классифицировать содержимое документа",
		entry_template_auto_classify_show_hover: "Когда документ классифицируется в FileNet Content Manager, содержимое документа изучается, чтобы определить соответствующий класс и значения свойств для документа.<br><br>Обратитесь к системному администратору, чтобы определить, включена ли классификация содержимого в Content Platform Engine.<br><br>Если включить эту опцию, класс и свойства документа могут измениться, когда пользователь будет добавлять документ в репозиторий.",
		entry_template_allow_duplicate_file_names: "Разрешить документы с дубликатами имен файлов",
		entry_template_allow_duplicate_file_names_hover: "По умолчанию вы можете добавить документы с одним и тем же именем в папку в FileNet Content Manager. Если вы хотите, чтобы у каждого файла в выбранном расположении хранения было уникальное имя, вы можете отменить выбор этой опции.",
		entry_template_allow_compound_documents: "Разрешить этому документу быть родителем составного документа",
		entry_template_version_show: "Показать опции версий для добавления и активации",
		entry_template_version_hide: "Скрыть опции версий для добавления и активации",
		entry_template_version_to_add_as: "Версия по умолчанию, чтобы добавить как:",
		entry_template_version_default: "Опция версии по умолчанию:",
		entry_template_version_default_checked: "Старшая версия",
		entry_template_version_default_unchecked: "Младшая версия",
		entry_template_version_display: "Версия документа:",
		entry_template_version_display_show: "Показать",
		entry_template_version_display_hide: "Скрыть",
		entry_template_version_default_add: "Версия по умолчанию, чтобы добавить как:",

		entry_template_checkin_version_show: "Показать опции версий для активации",
		entry_template_checkin_version_hide: "Скрыть опции версий для активации",

		entry_template_checkin_version_message_no_versions: "Политика версий выбранного класса запрещает пользователям активировать новую версию документа.",
		entry_template_checkin_version_message_always_version: "Политика версий выбранного класса запрещает пользователям заменять текущую версию документа.",

		entry_template_applied: "Использовать этот шаблон ввода, когда пользователи:",
		entry_template_applied_add: "Добавляют документы (обязательно)",
		entry_template_applied_add_folder: "Создают папки (обязательно)",
		entry_template_applied_checkin: "Активировать",
		entry_template_applied_properties_group: "Просмотреть или изменить свойства:",
		entry_template_applied_properties: "В окне Свойства",
		entry_template_applied_viewer: "В просмотре апплетов",
		entry_template_applied_docinfo: "В панели информации о документе",
		entry_template_applied_no_class_support: "Этот шаблон ввода можно использовать для добавления элементов, но нельзя использовать для активации документов или просмотра и изменения свойств. Выбранный класс нужно изменить для поддержки таких ситуаций. Если вам потребуется использовать шаблон ввода в этих ситуациях, попросите администратора использовать утилиту администрирования для изменения класса, чтобы в нем могли храниться ID шаблонов ввода.",
		entry_template_applied_no_child_component_support: "У выбранного класса есть дочерние компоненты и и определена схема свойства. Схемы свойств не поддерживают дочерние компоненты. Дочерние компоненты не будут показываться пользователю.",
		entry_template_applied_child_component: "У выбранного класса есть дочерние компоненты. Они будут показываться пользователю, но вы не сможете сконфигурировать дочерние компоненты в этом шаблоне ввода.",

		entry_template_properties_show: "Показать раздел <b>Свойства</b>",
		entry_tempalte_properties_show_hover: "Если вы выводите на экран раздел <b>Свойства</b>, пользователи смогут изменить все значения свойств, показанные в шаблоне свойства и не являющиеся свойствами, доступными только для чтения.",
		entry_template_properties_hide: "Скрыть раздел <b>Свойства</b>",
		entry_template_properties_hide_hover: "Если вы скроете раздел <b>Свойства</b>, пользователи не смогут изменить никакие значения свойств. При добавлении элементов с использованием этого шаблона ввода шаблон ввода должен задавать все значения, которые вы хотите использовать.",

		entry_template_security_show: "Показать раздел <b>Защита</b>",
		entry_template_security_show_hover: "Если вы выводите на экран раздел <b>Защита</b>, пользователи, у которых есть соответствующие разрешения, смогут изменять защиту элемента.",
		entry_template_security_hide: "Скрыть раздел <b>Защита</b>",
		entry_template_security_hide_hover: "Если вы скроете раздел <b>Защита</b>, пользователи не смогут изменить защиту элементов. При добавлении или изменении элементов шаблон ввода должен задавать все параметры защиты, которые вы хотите использовать.",
		entry_template_security_policy: "Политика защиты",
		entry_template_security_policy_hover: "В зависимости от выбранной вами политики защиты она может заключаться в следующем:<br><ul><li>Переопределять разрешения, заданные в окне <b>Задать защиту элемента</b>.</li><li>Добавить в разрешения, заданные в окне <b>Задать защиту элемента</b>.</li></ul>",
		entry_template_security_policy_none: "Политика защиты не выбрана",
		entry_template_security_inherit: "Наследовать параметры защиты от родительской папки",
		entry_tempalte_save_in_hover: "Укажите, где следует сохранить шаблон ввода.<br><br><b>Ограничение:</b> Если вы сохраните шаблон ввода в пространстве команды, вы можете использовать шаблон ввода только в пространстве команды.",
		entry_template_security_inherit_item_security_hover: "Если вы выберете эту опцию, параметры защиты родительской папки будут добавлены в параметры защиты, заданные одним из следующих элементов:<ul><li>Классом, заданным в разделе <b>Задать свойства элемента</b></li><li>Пользовательской защитой, заданной в разделе <b>Задать защиту элемента</b></li></ul>",
		entry_template_security_change: "Переопределить защиту, заданную выбранным классом",
		entry_template_security_change_hover: "Если вы выберете эту опцию, параметры защиты, заданные для класса, будут показаны по умолчанию. Вы сможете потом изменить параметры защиты для шаблона ввода.<br><br>Если вы выводите на экран раздел <b>Защита</b>, пользователи, у которых есть соответствующие разрешения, смогут изменять защиту элемента.<br><br>Если вы выберете эту опцию и укажете, что нужно наследовать параметры защиты от родительской папки, все наследуемые разрешения будут добавлены в указанную вами защиту.",
		entry_template_security_default_item_security: "Переопределить защиту элемента по умолчанию для пользователя, который добавляет элемент",
		entry_template_security_policy_message_override: "Выбранная политика защиты сконфигурирована для переопределения разрешений, заданных в окне Задать защиту.",
		entry_template_security_policy_message_add: "Выбранная политика защиты сконфигурирована для добавления в разрешения, заданные в окне Задать защиту.",
		entry_template_security_policy_preserve_true_hover: "Сохранить прямое разрешение",
		entry_template_security_policy_preserve_false_hover: "Не сохранять прямое разрешение",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Определенные роли",
		entry_template_security_class_role_search_title: "Поиск ролей:",
		entry_template_secuirty_class_member_title: "Список членов для ${0}",
		entry_template_secuirty_class_folder_only: "Эти разрешения применяются только к данной папке",
		entry_template_secuirty_class_folder_and_immediate_children: "Эти разрешения применяются к данной папке и к тем ее непосредственным потомкам, которые сконфигурированы как наследующие защиту от этой папки.",
		entry_template_secuirty_class_folder_and_all_children: "Эти разрешения применяются к данной папке и ко всем ее потомкам, которые сконфигурированы как наследующие защиту от этой папки.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Эти разрешения применяются к тем непосредственным потомкам, которые сконфигурированы для наследования защиты от этой папки",
		entry_template_secuirty_class_folder_all_children_not_folder: "Эти разрешения применяются ко всем потомкам, сконфигурированным для наследования защиты от этой папки",

		entry_template_class_security_message_no_override: "Защита выбранного класса запрещает пользователям переопределять защиту.",
		entry_template_class_security_required_privileges: "<b>Важно</b>: Когда вы переопределяете защиту выбранного класса, у пользователей, которые добавляют элементы с использованием этого шаблона ввода, должны быть полномочия ItemSetACL и UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Рабочий поток с последовательным шаблоном",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Рабочий поток с параллельным шаблоном",
		entry_template_workflow_type_existing: "Пользовательский рабочий поток...",
		entry_template_workflow_launch_prompt: "Спросить у пользователей, нужно ли запускать рабочий поток",
		entry_template_workflow_launch_auto: "Автоматически запускать рабочий поток",
		entry_template_workflow_modify_launch: "Разрешить пользователям изменять шаг запуска",
		entry_template_workflow_modify_launch_hover: "Выберите эту опцию, если вы хотите разрешить пользователям изменять то, как запускается рабочий поток.",

		entry_template_optionsButton_title: "Изменить",
		entry_template_optionsButton_readonly_title: "Просмотр связи",
		entry_template_optionsDialog_title: "Параметры связи с папкой",
		entry_template_removeButton_title: "Удаление",
		entry_template_addButton_title: "Добавить",
		entry_template_selected_entry_templates: "Выбранные шаблоны ввода",
		entry_template_docs_added_to_template_destination: "Документы добавляются в назначение, указанное в шаблоне ввода.",
		entry_template_docs_added_to_other_object_store: "Этот шаблон ввода добавляет элементы в хранилище объектов ${0}.",
		entry_template_inherited_entry_templates_label: "Мне надо: ",
		entry_template_inherited_entry_templates: "Наследовать связи с шаблонами ввода от папки: ",
		entry_template_inherited_entry_templates_not: "Создать новые связи для этой папки",
		entry_template_inherited_folder_path: "Шаблоны ввода в списке выбранных шаблонов ввода связаны со следующей папкой: ${0}. <br> Путь папки: ${1}.",
		entry_template_folder_associations_title: "Связать шаблоны ввода",
		entry_template_folder_associations_intro: "Когда вы связываете шаблон ввода с папкой, пользователи должны использовать шаблон ввода для добавления элементов в папку. Если вы свяжете с папкой несколько шаблонов ввода, пользователи смогут выбрать, какой шаблон ввода следует использовать.",
		entry_tempalte_folder_associations_entrytemplate: "Шаблон ввода: ",
		entry_template_avaliable_entry_templates: "Доступные шаблоны ввода",
		entry_template_fileTypes_intro_title: "Разрешенные типы файлов:",
		entry_template_fileTypes_intro: "По умолчанию шаблон ввода можно использовать для добавления в репозиторий любого типа документов. Однако, если вы выберете один или несколько типов файлов, шаблоны ввода будут доступны, только когда пользователи будут добавлять документы, соответствующие одному из заданных типов файлов.",
		entry_template_fileTypes: "Типы файлов",
		entry_template_fileType_error: "Для одной или нескольких связей с шаблонами ввода выбраны недопустимые типы файлов. Прежде чем можно будет сохранить эти связи с шаблонами ввода, нужно удалить недопустимые типы файлов.",
		entry_template_fileTypes_any_type_of_file: " Любой тип файлов",
		entry_template_description_label: "Описание",
		entry_template_ItemInfoPrefix: "Связать с: ",
		entry_template_TargetObjectStoreName: "Целевой склад объектов",
		entry_template_class: "Класс",
		entry_template_current_folder_as_parent: "Использовать папку как назначение",
		entry_template_view_minetypes: "Показать типы MIME",
		entry_template_avaliable_MIME_types: "Доступные типы файлов",
		entry_template_selected_MIME_types: "Выбранные типы файлов",
		entry_template_MIME_type_column: "имя категории типа файлов",
		entry_template_file_type_not_existing: "Удалите недопустимые типы файлов.",
		entry_template_MIME_types: "Типы MIME:",
		entry_template_MIME_types_info_dialog_title: "Тип MIME для",
		entry_template_destination_label: "Добавить документы в: ",
		entry_template_destination_help: "Укажите, где документы сохраняются в репозитории, когда пользователи добавляют документы в эту папку, используя выбранный шаблон ввода.",
		entry_template_radioButton_folder_destination: "Выбранная папка",
		entry_template_radioButton_template_destination: "Назначение задано в шаблоне ввода",
		entry_tempalte_teamspace_default: "Шаблон ввода по умолчанию",
		entry_template_folder_associations_save_new: "Вы изменили некоторые связи шаблонов ввода. Хотите закрыть это окно, не сохраняя своих изменений?",
		entry_template_mode_binding_label: "Свойства",
		entry_template_columns_className: "Имя класса",
		entry_template_columns_type: "Тип шаблона",
		entry_template_columns_workflow: "Имя рабочего потока",
		entry_template_columns_destination: "Назначение",
		entry_template_association_less_than_record: "Существуют шаблоны ввода в количестве ${0}, не перечисленные в выбранных шаблонах ввода. У вас нет разрешения на то, чтобы их увидеть. Или они удалены. За дополнительной информацией обратитесь к системному администратору.",
		/* Request */

		progress_message_general: "Выполняется работа...",
		cancel_message_general: "Действие отменено.",
		ie8_not_supported_browser: "IE8 не является поддерживаемым браузером.",
		progress_message_getDesktop: "Загрузка рабочего стола...",
		progress_message_getActions: "Загрузка действий...",
		progress_message_getViewers: "Загрузка рабочего стола...",
		progress_message_logon: "Вход в систему...",
		progress_message_logoff: "Выход из системы...",
		progress_message_getContentClasses: "Получение классов...",
		progress_message_openContentClass: "Получение сведений о классе...",
		progress_message_od_getCabinets: "Получение кабинетов...",
		progress_message_getSearchTemplates: "Получение поисков...",
		progress_message_od_getTemplates: "Идет получение папок...",
		progress_message_od_openCabinet: "Идет получение папок...",
		progress_message_openSearchTemplate: "Открытие поиска...",
		progress_message_od_openTemplate: "Открытие папки...",

		progress_message_getWorklists: "Получение рабочих списков...",
		progress_message_getWorkItems: "Получение рабочих элементов...",
		progress_message_getNextWorkItems: "Получение рабочих элементов...",
		progress_message_getStepParameters: "Получение информации о рабочем элементе...",
		progress_message_getStepAttachmentItems: "Получение информации о вложении...",
		progress_message_getDependentParameters: "Получение информации о свойстве...",

		progress_message_p8_getProcessApplicationSpaces: "Получение пространств программы...",
		progress_message_p8_getProcessRoles: "Получение ролей процесса...",
		progress_message_p8_getProcessInbaskets: "Получение корзин входящих...",
		progress_message_p8_getProcessorInformation: "Получение информации о процессе...",
		progress_message_p8_getFilterCriteria: "Получение фильтра корзины входящих...",
		progress_message_p8_getLaunchParameters: "Получение информации о рабочем элементе...",
		progress_message_p8_getStepAttachments: "Получение вложений рабочего элемента...",
		progress_message_p8_getSubscriptions: "Получение подписок на рабочий поток...",
		progress_message_p8_getTrackerParameters: "Получение информации о рабочем элементе...",
		progress_message_p8_getTrackerHistory: "Получение хронологии рабочего элемента...",
		progress_message_p8_getTrackerMilestones: "Получение контрольных точек рабочего элемента...",
		progress_message_p8_completeStep: "Выполнение рабочего элемента...",
		progress_message_p8_moveToInbox: "Перемещение элемента в корзину входящих...",
		progress_message_p8_returnToSender: "Возвращение рабочего элемента...",
		progress_message_p8_reassign: "Переназначение рабочего элемента...",
		progress_message_p8_launchWorkflow: "Запускается рабочий поток...",
		progress_message_p8_getTransferedWorkflows: "Получение информации о рабочем потоке...",

		progress_message_cm_getProcesses: "Получение информации о рабочем потоке...",
		progress_message_cm_completeStep: "Продолжается обработка рабочего элемента...",
		progress_message_cm_getItemProcessInformation: "Получение информации о рабочем потоке...",

		progress_message_search: "Выполняется поиск...",
		cancel_message_search: "Поиск отменен.",
		progress_message_getContentItems: "Получение информации об элементе...",
		progress_message_openFolder: "Открытие папки...",
		progress_message_addItem: "Создается элемент...",
		progress_message_checkIn: "Активируется элемент...",
		progress_message_changePassword: "Изменение пароля...",
		progress_message_getDefaultInstancePermissions: "Получение разрешений по умолчанию...",
		progress_message_openItem: "Получение информации об элементе...",
		progress_message_saveItem: "Сохранение информации об элементе...",
		progress_message_getPermissions: "Получение разрешений...",
		progress_message_getEntryTemplates: "Получение шаблонов ввода...",
		progress_message_openEntryTemplate: "Открытие шаблона ввода...",
		progress_message_getFavorites: "Получение избранного...",
		progress_message_getFoldersFiledIn: "Идет получение папок...",
		progress_message_getDocumentVersions: "Получение версий...",
		progress_message_getDependentAttributeInfo: "Получение информации об атрибутах...",
		progress_message_packageForDownload: "Упаковывание для скачивания...",
		progress_message_convertDocument: "Преобразование содержимого...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Получение типа содержимого...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Добавляется документ...",

		progress_message_desktop_reload: "Клиент заново загружает ваш рабочий стол.<br>Вам могут предложить снова войти в систему.",
		progress_message_email: "Отправка электронного сообщения...",
		cancel_message_email: "Электронное сообщение отменено.",

		progress_message_p8_getOfficeOnlineTemplates: "Получение шаблонов Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Дерево избранного",
		favorites_content_list_label: "Список содержимого избранного",
		syncItems_tree_label: "Дерево моих синхронизированных файлов",
		syncItems_content_list_label: "Список содержимого моих синхронизированных файлов",
		my_checkouts_content_list_label: "Список содержимого моих резервирований",
		browse_tree_label: "Просмотреть дерево",
		browse_content_list_label: "Просмотреть список содержимого",
		repository_selector_label: "Селектор репозиториев",
		teamspaces_content_list_label: "Список содержимого пространства команды",
		templates_content_list_label: "Список содержимого шаблона",
		work_content_list_label: "Список содержимого работ",
		work_tree_label: "Дерево работ",
		admin_tree_label: "Дерево управления",
		admin_tabs_label: "Вкладки управления",
		search_tabs_label: "Вкладки поиска",
		search_selector_label: "Селектор поиска",
		teamspace_browse_content_list_label: "Список содержимого просмотра пространства команды",
		teamspace_search_tabs_label: "Вкладки поиска пространства команды",

		/* Desktop */
		undo_description: "Откат ${0}",
		redo_description: "Повтор ${0}",

		/* Application Tabs */
		home: "Домой",
		repository: "Репозиторий",
		repository_type: "Тип репозитория:",
		repository_type_header: "Тип репозитория",
		repository_type_any: "Все репозитории",
		repository_type_contains_label: "Тип репозитория содержит",
		document_info: "Информация о документе",
		team: "Совместная работа",
		administration: "Управление",

		/* Home Page */
		recent_activity: "Последнее действие",
		repos_and_wrksp: "Репозитории и пространства команд",
		workspaces: "Пространства команд",
		repositories: "Репозитории",
		templates: "Шаблоны",
		favorites: "Избранное",
		my_checkouts: "Мои резервирования",
		mySyncedFiles: "Мои синхронизированные файлы",
		links: "Ссылки",
		name_label: "Имя",
		description_label: "Описание",
		type_label: "Тип:",
		type_heading: "Тип",
		type_id_label: "ID типа",
		server_type_icon: "Значок типа сервера",
		server_type_heading: "Тип сервера",
		server_type: "Тип сервера",
		port_heading: "Номер порта",
		port_label: "Номер порта:",
		server_name_heading: "Имя сервера",
		server_label: "Имя сервера:",
		server_url_label: "URL сервера:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Соединено:",
		repository_label: "Репозиторий",
		modified_label: "Кем изменено:",
		modified_date_label: "Изменено в:",
		status_label: "Состояние:",
		last_modified_label: "Кем в последний раз изменено:",

		modifier: "Изменено",
		modified_date: "Дата изменения",

		/* Favorites */
		new_favorite_label: "Добавить в закладки",
		edit_favorite_label: "Переименовать элемент избранного",
		remove_favorite_label: "Удалить из избранного",
		missing_alias_message: "Необходимо задать имя.",
		sync_favorite_enable_hover: "Этот элемент включен для синхронизации.",
		sync_favorite_disable_hover: "Этот элемент не синхронизируется.",
		sync_favorite_sync_unavailable_hover: "Синхронизация недоступна для этого типа объектов.",
		sync_enable_label: "Синхронизировать этот элемент",
		sync_enable_label_hover: "Этот элемент будет синхронизирован с вашими устройствами.",
		delete_favorite_confirmation_question: "Хотите удалить этот элемент из избранного?",
		alias_label: "Имя:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Выбранный элемент уже находится в вашем списке избранного.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Этот элемент нельзя добавить в ваш список избранного.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Можно сохранить только элементы избранного в количестве ${0}.",
		add_favorite_max_reached_response: "Если вы хотите добавить этот элемент в список избранного, то пере этим вы должны удалить существующий элемент избранного.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Не удается преобразовать выбранные документы в PDF.",
		download_as_pdf_max_content_error_explanation: "В PDF можно преобразовать только ${0} МБ данных. Однако размер выбранных документов превышает ${0} МБ.",
		download_as_pdf_max_content_error_response: "Выберите меньшее число документов или выберите документы меньшего размера и снова загрузите документы как файлы PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Выбранные документы не могут быть преобразованы в один файл PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Чтобы преобразовать документ из нескольких частей в один файл PDF, у каждой из частей должен быть один и тот же тип MIME.",
		download_as_pdf_mimetype_check_error_response: "выберите другой документ для преобразования в PDF.",

		/* Activity Stream */
		show_label: "Показать:",
		all_filter: "Все",
		notifications_filter: "Уведомления",
		workitems_filter: "Рабочие элементы",
		documentes_filter: "Документы",
		all_favorites_filter: "Все избранное",
		folders_filter: "Папки",
		searches_filter: "Поиски",
		teamspaces_filter: "Пространства команд",

		/* Repository */
		all_search_templates: "Все поиски",
		all_od_searches: "Все шаблоны поиска",
		recent_searches: "Последние поиски",
		opened_searches: "Открытые поиски",

		all_worklists: "Все корзины входящих",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Список всех корзин входящих",

		/* Teamspace */
		all_workspaces: "Все пространства команд",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Список всех пространств команд",
		workspace_title: "Пространство команды",
		workspace_icon: "Значок пространства команды",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Доступные",
		workspace_stat_offline: "Недоступные",
		workspace_stat_validate: "Требует проверки",
		workspace_stat_pendingDelete: "Удаление отложено",
		workspace_stat_deleteError: "Удаление завершилось неудачно",

		undefined_value: "Не задано",
		undefined_reference_value: "Ссылка не задана.",

		/* Filter teamspaces in content list */
		more_results_on_server: "На сервере может быть доступно больше результатов.",
		search_all_data: "Поиск по всем данным.",
		search_all_teamspaces: "Искать во всех пространствах команд.",
		teamspace_filter_results: "Выводится ${0} результатов. ",
		displaying_filtered_results: "Выводятся отфильтрованные результаты. ",
		displaying_recent_results: "Показаны только пространства команд, которые были изменены за последний/последние ${0} день/дня/дней. Чтобы найти другие пространства команд, примените фильтр к списку пространств команд на основе имени или описания. ",
		clear_filter: "Очистить фильтр.",

		/* FolderTreeModel */
		move_item_task: "Переместить элемент",
		copy_item_task: "Копировать элемент",
		add_item_task: "Добавить элемент",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Не удалось найти следующую папку: ${0}. Возможно, она была удалена, или папку не удается открыть из данного представления. Щелкните по ссылке Еще в представлении дерева, чтобы перейти к папке. Если вам не удается просмотреть папку, обновите данные в представлении списка содержимого.",
		more_paging_link: "еще ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Статус",
		status_dialog_cancel_label: "Отмена",

		/* ErrorDialog */
		error_dialog_title: "Ошибка",
		error_dialog_icon_tooltip: "Ошибка",
		error_dialog_stack_trace_title: "Трассировка стека.",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Подтверждение",

		close_browser_msg: "Закройте окно браузера.",

		/* MessageDialog */
		message_dialog_title: "Информация",
		warning_dialog_title: "Предупреждение",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Вас приветствует ${0}",
		server: "Репозиторий",
		username: "Имя пользователя:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Имя пользователя является обязательным для входа в репозиторий.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Пароль является обязательным для входа в репозиторий.",
		password: "Пароль:",
		login: "Вход в систему",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Время вашего сеанса истекло. Войдите в систему снова.",
		login_repository_connection_expired_message: "Срок действия вашего соединения с репозиторием ${0} истек. Войдите в систему снова.",
		login_site_connection_expired_message: "Срок действия вашего соединения с этим сайтом истек. Войдите в систему снова.",
		login_new_server_message: "Введите имя пользователя и пароль для ${0}.",
		login_error_more_information_message: "Дополнительная информация",

		disconnect_box_account_user: "Отсоединить учетную запись Box: ${0}",
		disconnect_box_account: "Отсоединить учетную запись Box",
		disconnect_box_accounts: "Отсоединить учетные записи Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Для доступа к репозиторию Box требуется соединение SSL.",
		login_oauth_popup_blocked: "Всплывающее окно заблокировано. Возможно, вам следует разблокировать всплывающие меню в вашем браузере, чтобы войти в систему.",
		login_oauth_click_here: "Если вас не перенаправят в течение 5 секунд, щелкните здесь.",
		login_oauth_title: "Вход в систему",
		login_oauth_grant_intro: "Предоставить аутентификацию для ${0}.",
		login_pane_oauth_click_here: "Щелкните здесь, чтобы войти в систему.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Хотите выйти из веб-клиента?",
		logout_confirmation_button: "Выход",

		/* ChangeLocaleDialog */
		change_locale: "Изменить параметры языка и локали",
		change_locale_use_browser_language: "Использовать параметры языка браузера (по умолчанию)",
		change_locale_use_browser_locale: "Использовать параметры языка браузера (по умолчанию)",
		change_locale_description: "Если опознавательные файлы (cookies) браузера удалены, надо перезадать параметры языка и локали.",
		change_locale_language_locale: "Язык программ:",
		change_locale_language_locale_hover: "Задание этого параметра изменяет язык текста для веб-клиента, но не изменяет язык документов в прикладной программе.<br><br>Значение по умолчанию использует язык, заданный в опциях конфигурации вашего браузера.",
		change_locale_value_format_locale: "Локаль программ:",
		change_locale_value_format_locale_hover: "Локаль определяет формат представления дат, времени и чисел для веб-клиента.<br><br>Значение по умолчанию использует форматы, связанные с языком, заданным в опциях конфигурации вашего браузера.",
		change_locale_for_office: "Настройки текста с двумя направлениями письма.",
		change_locale_bidi_support_flag: "Включить поддержку двух направлений письма",
		change_locale_bidi_support_flag_hover: "Если включена поддержка двух направлений письма, пользователь может задать направление текста, используемое в полях ввода.  Текст, введенный для таких элементов, как, например, папки, появится в том же направлении, в каком он вводился.",
		change_locale_base_text_direction: "Базовое направление текста для содержимого:",
		change_locale_base_text_direction_hover: "Задайте направление текста, вводимого в поля ввода.  Оно управляет направлением вывода меток, введенных пользователем, например, в именах папок.",
		change_locale_calendar_type: "Тип календаря:",
		change_locale_calendar_type_hover: "Выберите тип календаря, который будет использоваться в сеансе пользователя.",
		change_locale_base_text_direction_default: "По умолчанию",
		change_locale_base_text_direction_ltr: "Слева направо",
		change_locale_base_text_direction_rtl: "Справа налево",
		change_locale_base_text_direction_contextual: "Контекстный",
		change_locale_calendar_type_gregorian: "Григорианский стиль",
		change_locale_calendar_type_hijri: "Исламский стиль",
		change_locale_calendar_type_hebrew: "Иврит",
		change_locale_calendar_type_Umm_al_Qura: "Умм Аль-Кура",

		/* ChangePasswordDialog */
		change_password: "Изменить пароль",
		change_password_title: "Изменить пароль",
		change_password_expired_title: "Срок действия пароля истек",
		change_password_message: "Введите новый пароль.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Срок действия пароля истек. Введите новый пароль.",
		change_password_password_rules: "Правила задания паролей",
		change_password_old_password: "Прежний пароль:",
		change_password_new_password: "Новый пароль:",
		change_password_confirm_password: "Подтверждение пароля:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Вы должны ввести свой прежний пароль.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Вы должны ввести новый пароль.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Вы должны подтвердить новый пароль.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Пароли должны совпадать.",

		/* GlobalToolbar */
		actions: "Действия",
		actions_label: "Действия:",
		open_actions_label: "Открыть действия:",

		/* About Dialog */
		about_dialog_title: "Информация",
		about_product_name_label: "Имя продукта: ",
		about_product_version_label: "Версия: ",
		about_product_build_label: "Компоновка: ",
		about_product_license: "Лицензированные материалы - Собственность IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Все права защищены. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM и логотип IBM являются зарегистрированными товарными знаками International Business Machine Corporation в США и/или других странах. Эта программа лицензирована в соответствии с условиями лицензионного соглашения, которое прилагается к программе. Это лицензионное соглашение может находиться в папке или библиотеке каталога Программы, обозначенных как \"License\" или \"Non_IBM_License\", если это применимо, или предоставляться в виде печатного лицензионного соглашения. Перед использованием данной программы следует внимательно ознакомиться с этим соглашением. Использование программы означает согласие с этими условиями. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Хотите удалить выбранный элемент?",
		delete_single_folder_confirmation_question: "Хотите удалить папку ${0}?",
		delete_multiple_confirmation_question: "Хотите удалить выбранные элементы?<br>Число выбранных элементов: ${0}.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Удалить",
		search_template_delete_confirmation_question: "Хотите удалить поиск ${0}?",
		search_template_opened_delete_confirmation_question: "Поиск ${0} открыт. Если вы удалите поиск, он закроется.<br>Хотите удалить этот поиск?",
		delete_multiple_opened_search_template_confirmation_question: "Открыты следующие поиски: ${0}.<br>Если вы удалите поиски, они закроются. Хотите удалить эти поиски?",
		delete_large_number_items_confirmation_question: "Выбранные элементы ${0} будут удалены.<br/>Удаление большого количества элементов может занять продолжительное время.<br/>Продолжить?",
		delete_confirmation_entrytemplate: "Если вы удалите этот шаблон ввода, это окажет указанное ниже влияние на документы или папки, связанные с шаблоном ввода:<ul><li>Элементы больше не будут связаны с шаблоном ввода, и пользователи могут увидеть предупреждение, когда будут обновлять элемент.</li><li>Все свойства, которые управлялись шаблоном ввода, например, имя или порядок свойств, больше не будут применяться к элементам, связанным с шаблоном ввода.</li></ul>Хотите удалить этот шаблон ввода?",
		delete_confirmation_entrytempalte_with_multi_items: "Шаблоны ввода должны удаляться по отдельности. Шаблоны ввода удалены из списка элементов для удаления. Если вы хотите удалить шаблоны ввода, вы должны удалить каждый шаблон ввода по отдельности.",

		/* Create/Apply/Remove Hold */
		hold: "Удержание",
		createHold: "Новая блокировка",
		applyHold: "Применить блокировку",
		removeHold: "Снять блокировку",
		showHolds_title: "Показать удержания",
		applyHoldSelectText: "Выберите блокировки, которые вы хотите применить к выбранным элементам.",
		availableHolds: "Доступные блокировки:",
		removeHoldSelectText: "Выберите блокировки, которые вы хотите снять с выбранных элементов.",
		appliedHolds: "Примененные блокировки:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Создать новую блокировку для применения к выбранным элементам.",
		holdName: "Имя блокировки:",
		holdDescription: "Описание",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Вы обязательно должны задать имя блокировки.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Указанное имя блокировки уже существует.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Имя блокировки не должно содержать ни одного из следующих символов: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Время вашего сеанса истечет через ${0} мин.",
		session_expire: "Время сеанса истекает",
		logoff: "Закончить сеанс",
		extend_session: "Продлить сеанс",
		admin_custom_settings: "Дополнительные параметры:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning - это логическое значение, указывающее, включено ли предупреждение об окончании действия сеанса; значение по умолчанию - true. sessionExpireWarningTime - это целочисленное значение в интервале от 2 до 5, позволяющее задать время предупреждения об окончании действия сеанса.",
		admin_custom_setting_dialog_title_new: "Новый параметр",
		admin_custom_setting_dialog_title_edit: "Изменить параметр",
		admin_custom_setting_dialog_hover_help: "Добавьте другие параметры, задав имя и значение параметра. Например, можно указать “enableSessionExpireWarning” и “true”, если вы хотите включить предупреждение об окончании действия сеанса.",
		admin_custom_setting_dialog_field_hover_help: "Более подробную информацию об именах и значениях параметров смотрите в публикации IBM Navigator: Справочное руководство по параметрам.",
		admin_custom_setting_dialog_nameInvalid: "Это значение является обязательным. Значение не должно содержать пробелы и должно быть уникальным.",
		admin_custom_setting_dialog_bool_valueInvalid: "Это значение является обязательным. Это значение должно быть логическим.",
		admin_custom_setting_dialog_int_valueInvalid: "Это значение является обязательным. Это значение должно быть целым числом.",
		/* Add Document Dialog */
		add_document_dialog_title: "Добавить документ",
		add_documents_dialog_title: "Добавить документы",
		add_document_general_label: "Общие",
		add_document_properties_label: "Свойства",
		add_document_properties_with_ellipsis_label: "Свойства...",
		add_document_security_label: "Защита",
		add_document_location_label: "Сохранить в:",
		add_document_type_label: "Что вы хотите сохранить?",
		add_document_localfile_label: "Локальный документ",
		add_document_metadata_label: "Информация о документе",
		add_document_external_label: "Связать с внешним документом",
		add_document_web_link_label: "Веб-ссылка",
		add_document_saved_content_label: "Использовать сохраненный файл:",
		add_document_saved_content_choice: "Сохраненный файл",
		add_document_file_name_label: "Имя файла:",
		add_document_entry_template_label: "Шаблон ввода:",
		add_document_delete_file_label: "Удалить локальный файл",
		add_document_delete_file_disabled_label: "Файлы, которые не содержатся в директории отслеживания файлов, не будут удаляться.",
		add_document_major_version_label: "Старшая версия",
		add_document_major_version_hover: "Позволяет назначить для документа состояние Выпущен. Документ добавляется в репозиторий как версия 1.0. Если эта опция не выбрана, документ будет считаться не готовым к выпуску и будет добавлен как младшая версия 0.1.",
		add_document_save_document_as_unfiled_label: "Не сохранять документ в папке",
		add_document_save_document_as_unfiled_hover: "Если выбрать эту опцию, вы сможете найти этот документ только путем поиска. Найти его путем обзора будет нельзя.",
		add_document_create_new_version_label: "Создать новую версию",
		add_document_replace_existing_version_label: "Заменить существующую версию",
		add_document_start_workflow_label: "Запустить рабочий поток",
		add_document_auto_classify_label: "Автоматически классифицировать содержимое",
		add_document_add_label: "Добавить",
		add_document_cancel_label: "Отмена",
		add_document_document_type_label: "Класс",
		add_document_context_info: "Значения, которые вы вводите для свойств документа, можно будет потом использовать для поиска этого документа.",
		add_documents_context_info: "Значения, которые вы вводите для документов, можно будет потом использовать для поиска документов. Если вам нужно ввести другое значение свойства для документа, вы должны добавить его отдельно или изменить свойства документа после его добавления.",
		add_document_url_label: "URL:",
		add_document_template_description: "Описание шаблона:",
		add_document_select_entry_template: "Введите или выберите шаблон ввода:",
		add_document_no_permission_to_associations: "У вам нет разрешений на использование шаблона ввода",
		add_document_no_entry_template_to_use: "Для выбранных файлов нельзя использовать никакие шаблоны ввода",
		add_document_no_entry_template_itemtype_permission: "Добавлять в эту папку элементы вы не можете. Нужно выбрать шаблон ввода, а у вас нет доступа ни к каким шаблонам ввода, связанным с этой папкой. Обратитесь к своему системному администратору и попросите его предоставить вам доступ к шаблонам ввода, связанным с этой папкой.",
		add_document_appgroup_name_label: "Имя группы приложения:",
		add_document_app_name_label: "Имя приложения:",
		create_folder_dialog_title: "Создать папку",
		create_folder_context_info: "Значения, которые вы вводите для свойств папки, можно будет потом использовать для поиска этой папки.",
		create_folder_folder_name_label: "Имя папки",
		create_folder_save_folder_as_unfiled_label: "Не сохранять папку в другой папке",
		create_folder_save_folder_as_unfiled_hover: "Если выбрать эту опцию, вы сможете найти эту папку только путем поиска. Найти ее путем обзора будет нельзя.",
		add_item_create_in_folder: "Создать в папке:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Имя папки не должно содержать ни одного из следующих символов: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Имя папки не должно содержать ни одного из следующих символов: \\ / и не должно равняться . или ..",
		invalid_box_file_name_message: "Имя файла не должно содержать ни одного из следующих символов: \\ / и не должно равняться . или ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Имя файла не должно содержать ни одного из следующих символов: \\ / : * ? \" < > |",
		external_document_placeholder: "Введите URL документа",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Цвет следует вводить в виде 3- или 6-разрядного шестнадцатеричного числа, например, #000 или #000000.",
		add_document_unfiled: "${0} без размещения в папке",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Добавить документ с использованием шаблона ввода",
		add_document_using_template_context_info: "Если вы добавляете документ с использованием шаблона, значения, которые вы вводите для документа, будут непротиворечивыми.",
		add_documents_using_template_dialog_title: "Добавить документы с использованием шаблона ввода",
		add_documents_document_name_is_file_name_hint: "Имя файла будет использоваться для этого свойства",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Создать папку с использованием шаблона ввода",
		create_folder_using_template_context_info: "Если вы создаете папку с использованием шаблона, значения, которые вы вводите для папки, будут непротиворечивыми.",

		add_documents_batch_results_dialog_title: "Документы не добавлены в репозиторий",
		add_documents_batch_results_dialog_context_info: "Перечисленные документы не были добавлены в репозиторий. Выберите документ и щелкните по Подробности, чтобы получить дополнительную информацию о том, почему он не был добавлен в репозиторий.",
		add_documents_batch_results_dialog_filename_col_hdr: "Имя файла",
		add_documents_batch_results_dialog_status_col_hdr: "Статус",
		add_documents_batch_results_dialog_message_col_hdr: "Сообщение",
		add_documents_batch_results_status_error: "Ошибка",
		add_documents_batch_results_status_cancelled: "Отменено",
		add_documents_batch_results_status_cancelled_msg: "Документ не добавлен, потому что требование отменено.",

		add_documents_batch_status_title: "Добавление документов",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Добавление файла (${0} из ${1})...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Ошибки: ${0}",
		add_documents_batch_status_completing_msg: "Процесс остановится после добавления этого документа.",

		add_documents_status_uploading_msg: "Выгружается файл ${0} из ${1}...",
		add_documents_status_adding_msg: "Добавление файла (${0} из ${1})...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Шаблон ввода сконфигурирован в другой программе и сконфигурирован так, чтобы всегда объявлять документы записями. Однако этот параметр игнорируется, так как веб-клиент не поддерживает объявления документов записями.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Шаблон ввода сконфигурирован в другой программе и сконфигурирован так, чтобы вы смогли решить, объявлять ли этот документ записью. Однако этот параметр игнорируется, так как веб-клиент не поддерживает объявления документов записями.",
		no_selection: "&lt;Выбрать&gt;",

		batch_results_dialog_details_label: "Подробности",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Недопустимое значение. Значение должно представлять собой глобальный уникальный идентификатор (Globally Unique Identifier, GUID), например: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Недопустимое значение. Значение должно представлять собой число с плавающей запятой, например, 1,2 или 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Недопустимое значение. Значение должно быть в формате ${0}, например, ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Недопустимое значение. Значение должно представлять собой десятичное значение, например, 1,2 или 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Недопустимое значение. Значение должно быть целым числом, например, 5 или 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Недопустимое значение. Значение должно содержать только буквенные символы, например, a-z и A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Недопустимое значение. Значение должно содержать только алфавитно-цифровые символы, например, a-z, A-Z и 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Недопустимое значение. Значение должно содержать только цифровые символы, например, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Недопустимое значение. Значение должно содержать только следующие символы: a-z, A-Z, 0-9, [пробел] и `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Недопустимое значение. Значение должно представлять собой дату в следующем формате: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Недопустимое значение. Значение должно представлять собой время в следующем формате: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Недопустимое значение. Выберите значение из раскрывающегося меню.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Недопустимое значение.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Недопустимое значение. Значение должно быть представлено в следующем формате: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Это значение является обязательным.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Слишком длинное значение. Свойство поддерживает максимальную длину, равную ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Слишком короткое значение. Свойство поддерживает минимальную длину, равную ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Значение вне допустимого диапазона. Значение должно представлять собой число с плавающей запятой в диапазоне от ${0} до ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Значение вне допустимого диапазона. Значение должно представлять собой десятичное значение в диапазоне от ${0} до ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Значение вне допустимого диапазона. Значение должно представлять собой целое число в диапазоне от ${0} до ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Значение должно представлять собой дату в интервале с ${0} по ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Значение вне допустимого диапазона. Значение должно представлять собой дату в интервале с ${0} по ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Значение вне допустимого диапазона. Значение должно представлять собой время в интервале с ${0} по ${1}.",
		property_and: "и",

		property_invalidValueOrRequired: "Указанное ниже значение - недопустимое или является обязательным: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Свойства",
		edit_properties_dialog_info: "Вы можете просмотреть или изменить свойства этого элемента. При наличии соответствующих разрешений вы также можете изменить параметры безопасности для элемента. Однако изменять системные свойства вы не можете.",
		edit_properties_od_dialog_info: "Вы можете просмотреть или изменить свойства этого элемента. Однако изменять системные свойства вы не можете.",
		system_properties_title: "Системные свойства",
		custom_properties_title: "Свойства",
		/* Folder collaboration tab */
		box_permission_permission: "Разрешение",
		box_permission_permissions: "Разрешения",
		box_permission_editor: "Редактор",
		box_permission_owner: "Владелец",
		box_permission_co_owner: "Совладелец",
		box_permission_viewer_uploader: "Программа закачивания средства просмотра",
		box_permission_previewer_uploader: "Программа закачивания средства предварительного просмотра",
		box_permission_viewer: "Средство просмотра",
		box_permission_previewer: "Средство предварительного просмотра",
		box_permission_uploader: "Программа закачивания",
		box_permission_add: "Добавить",
		box_permission_upload: "Закачать",
		box_permission_download: "Скачать",
		box_permission_preview: "Предварительный просмотр",
		box_permission_view: "Представление",
		box_permission_send_links: "Отправить ссылки Только для просмотра",
		box_permission_create_subfolders: "Создать подпапки",
		box_permission_create_tasks: "Создать задачи",
		box_permission_add_comments: "Добавить комментарии",
		box_collaboration_invite_placeholder: "Введите имя, электронный адрес или группу для приглашения",
		box_collaboration_invite_placeholder_non_admin: "Введите адрес электронной почты для приглашения",
		box_collaboration_invalid_email: "Введите действительный адрес электронной почты",
		box_collaboration_user_already_present: "Этот пользователь уже является участником совместной работы для этой папки",
		box_collaboration_user_name: "Имя",
		box_collaboration_email_address: "Адрес электронной почты",
		box_collaboration_date_added: "Дата добавления",
		box_collaboration_remove_collaboration: "Удаление",
		box_collaboration_remove_collaboration_title: "Удалить",
		box_collaboration_no_collaborators: "Нет участников совместной работы",
		box_collaboration_change_owner_title: "Изменить владельца элемента",
		box_collaboration_change_owner_prompt: "Сделав этого участника совместной работы владельцем папки, вы превратитесь в редактора и больше не будете владеть этой папкой. Любой участник совместной работы, добавленный к этой папке напрямую, будет видеть ее в своей корневой папке. Любой участник совместной работы, добавленный на родительский уровень или выше, больше не будет участником совместной работы. Продолжить?",
		box_collaboration_remove_self_title: "Удалить самого себя",
		box_collaboration_remove_self_prompt: "Вы уверены, что хотите удалить самого себя из участников совместной работы? У вас больше не будет доступа к этой папке.",
		box_collaboration_user: "Пользователь",
		box_collaboration_group: "Группа",
		box_managing_users_not_configured: "Вы не можете искать пользователей и группы, так как программа Box не сконфигурирована правильно. Чтобы использовать эту функцию, свяжитесь свяжитесь с вашим администратороом и попросите его сконфигурировать программу Box для управления пользователями и группами.",
		duplicate_value_error: "Каждое значение в этом свойстве должно быть уникальным.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Любые изменения, внесенные в следующих полях, будут применены ко всем выбранным элементам. Если нужно ввести другое значение свойства для конкретного элемента или изменить защиту элемента, необходимо отдельно изменить свойства этого элемента.",
		multi_edit_properties_class_label: "Класс:",
		multi_edit_properties_items_label: "Имена элементов:",
		multi_edit_properties_properties_label: "Свойства:",
		multi_edit_batch_status_title: "Изменение свойств",
		multi_edit_batch_status_adding_msg: "Изменяется элемент ${0} из ${1}...",
		multi_edit_batch_status_verifying_msg: "Проверяется элемент ${0} из ${1}...",
		multi_edit_batch_status_completing_msg: "Процесс остановится после изменения этого элемента.",
		multi_edit_batch_status_validation_completing_msg: "Процесс остановится после проверки этого элемента.",
		multi_edit_batch_results_status_error: "Ошибка",
		multi_edit_batch_results_status_cancelled: "Отменено",
		multi_edit_batch_results_status_cancelled_msg: "Элемент не изменен, потому что требование отменено.",
		multi_edit_batch_results_dialog_title: "Неизмененные элементы",
		multi_edit_batch_results_dialog_context_info: "Следующие элементы не были изменены. Выберите имя элемента и щелкните по Подробности, чтобы получить дополнительную информацию о том, почему он не был изменен.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Имя элемента",
		multi_edit_batch_results_dialog_status_col_hdr: "Статус",
		multi_edit_batch_results_dialog_message_col_hdr: "Сообщение",
		multi_edit_batch_status_errors_msg: "Ошибки: ${0}",
		multi_edit_batch_permission_error_text: "Невозможно сохранить изменения свойств.",
		multi_edit_invalid_value_error: "Это значение зависит от значения другого свойства и не для всех выбранных вами элементов допустимо.",
		multi_edit_batch_permission_error_explanation: "Нельзя изменить свойства этого элемента, так как у вас нет достаточных привилегий.",
		multi_edit_no_modifiable_properties: "Не удается изменить свойства выбранных элементов. Это может происходить, когда элемент содержит свойства только для чтения или для изменения разрешены только имя или заголовок. Если выбрано несколько элементов, изменять их имя или заголовок нельзя.",
		multi_edit_mult_classes_dialog_info: "Выбранные элементы находятся в других репозиториях или принадлежат другим классам. Вы можете изменять только элементы, находящиеся в том же классе или в том же репозитории. Выберите подмножество элементов, которые вы хотите изменить.",
		multi_edit_class_selector_class_heading: "Класс",
		multi_edit_class_selector_entry_template_heading: "Шаблон ввода",
		multi_edit_class_selector_repository_heading: "Репозиторий",
		multi_edit_class_selector_items_heading: "Элементы",
		multi_edit_some_classes_not_displayed: "Некоторые из выбранных элементов не включены в этот список, так как эти элементы содержат свойства только для чтения или находятся в репозиториях, не поддерживающих изменение свойств.",
		multi_edit_properties_invalid_msg: "Некоторые из значений свойств допустимы не для всех выбранных элементов.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Это свойство только для чтения, его нельзя изменить.",
		multi_edit_append_checkbox_label: "Добавить",
		multi_edit_append_checkbox_tooltip: "Выберите эту опцию, если хотите добавить новые значения свойств к существующим значениям, а не заменить их.",
		multi_edit_properties_invalid_childcomponent_msg: "Некоторые значения в свойстве ${0} дочернего компонента ${1} зависят от других свойств и больше не являются действительными при сделанном вами выборе. Очистите значения в дочернем компоненте ${1} или по отдельности внесите изменения свойств в выбранные вами элементы.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Свойства экспорта",
		export_properties_dialog_info: "Выберите свойства, которые вы хотите экспортировать, и укажите, в каком порядке они будут показаны.",
		export_properties_dialog_export_button_label: "Экспорт",
		export_properties_dialog_export_raw_values: "Экспорт значений строк",

		/* Properties */
		filter_clear_tooltip: "Очистить фильтр",
		properties_new_row: "Создать",
		properties_requiredClass_document_tooltip: "Выберите документ. Документ должен принадлежать к классу ${0}.",
		properties_requiredClass_folder_tooltip: "Выберите папку. Папка должна принадлежать к классу ${0}.",
		properties_dataType_tooltip: "Тип даты: ${0}",
		properties_maxLength_tooltip: "Максимальная длина: ",
		properties_minLength_tooltip: "Минимальная длина: ",
		properties_minValue_tooltip: "Минимальное значение: ",
		properties_maxValue_tooltip: "Максимальное значение: ",
		properties_format_tooltip: "Формат: ",
		properties_description_tooltip: "Описание ",

		properties_type_boolean_tooltip: "Логическое значение",
		properties_type_date_tooltip: "Дата",
		properties_type_time_tooltip: "Время",
		properties_type_timestamp_tooltip: "Отметка времени",
		properties_type_decimal_tooltip: "Десятичное значение",
		properties_type_double_tooltip: "Число с плавающей запятой",
		properties_type_short_tooltip: "Целое число",
		properties_type_integer_tooltip: "Целое число",
		properties_type_long_tooltip: "Целое число",
		properties_type_string_tooltip: "Текстовая строка",
		properties_type_string_alpha_tooltip: "Буквенная строка",
		properties_type_string_alphanum_tooltip: "Алфавитно-цифровая строка",
		properties_type_string_ext_tooltip: "Расширенная алфавитно-цифровая строка",
		properties_type_string_num_tooltip: "Цифровая строка",
		properties_type_binary_tooltip: "Двоичное число",
		properties_type_object_tooltip: "Объект",
		properties_type_reference_tooltip: "Это свойство ссылается на другой элемент в репозитории.",
		properties_type_guid_tooltip: "Уникальный глобальный идентификатор (Globally Unique Identifier)",
		properties_type_group_tooltip: "Пользователи и группы",
		properties_type_user_tooltip: "Пользователи",
		properties_type_childComponent_tooltip: "Дочерний компонент",

		properties_childComponent_minCardinalityOnly_tooltip: "У этого свойства должно быть как минимум ${0} значений.",
		properties_childComponent_maxCardinalityOnly_tooltip: "У этого свойства должно быть не более ${0} значений.",
		properties_childComponent_minMaxCardinality_tooltip: "У этого свойства должно быть как минимум ${0} значений, но не более ${1} значений.",
		properties_childComponent_noCardinality_tooltip: "У этого свойства может быть любое количество значений.",

		properties_type_guid_example_tooltip: ", например, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Выберите значение из списка.",
		properties_single_select_choice_tooltip: "Выберите значение.",
		properties_multiple_select_typein_tooltip: "Введите одно или несколько значений.",
		properties_multiple_select_choice_tooltip: "Выберите одно или несколько значений.",
		properties_not_selectable_tooltip: "Категорию выбрать нельзя.",
		properties_none: "Нет",
		properties_none_tooltip: "Выберите <i>Нет</i>, чтобы очистить текущее значение этого свойства.",
		properties_value_empty: "Нет значения",
		properties_value_read_only: "Только чтение",
		properties_clear_label: "Очистить",
		properties_clear_tooltip: "При очистке значения в этом поле после нажатия кнопки <b>Сохранить</b> это значение будет очищено и в репозитории.",
		properties_box_custom_properties: "Пользовательские свойства",
		properties_box_metadata_name_in_use: "Это имя уже используется. Введите для пользовательского свойства другое имя.",

		properties_templates: "Шаблоны",
		properties_add_template: "Добавить шаблон",
		properties_remove_template: "Удаление",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Активировать",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Активировать",
		checkin_cancel_label: "Отмена",
		checkin_file_name_label: "Имя файла",
		checkin_document_status_title: "Активировать документ",
		checkin_document_status_uploading_msg: "Выгружается файл...",
		checkin_document_status_checkingin_msg: "Активируется файл...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Выбрать режим цензурирования",
		viewer_redaction_new_document_confirmation_question: "Сохранить цензурированный материал как новый документ или как локальный файл?",
		viewer_redaction_new_version_confirmation_question: "Сохранить цензурированный материал как новую версию?",
		viewer_redaction_new_version_confirmation_question_never: "Сохранить цензурированный материал как новое содержание?",		
		viewer_redaction_new_document_button: "Да",
		viewer_redaction_new_document_cancel_button: "Нет",
		viewer_redaction_add_document_confirmation_question: "Сохранить цензурированный материал как новый документ, новую версию или локальный файл?",
		viewer_redaction_add_document_confirmation_question_version_never: "Сохранить цензурированный материал как новый документ, новое содержимое или локальный файл?",
		viewer_redaction_add_document_button: "Новый документ",
		viewer_redaction_add_new_version_button: "Новая версия",
		viewer_redaction_add_new_version_button_version_never: "Новое содержимое",
		viewer_redaction_add_local_file_button: "Локальный файл",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Выберите причину редактирования",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Не удается найти шаблон ввода, который использовался для добавления этого документа в репозиторий. Документ будет активирован в репозитории без использования шаблона ввода.",
		property_entry_template_not_retrieved_warning: "Не удается найти шаблон ввода, который использовался для добавления этого документа в репозиторий. Свойства документа будут показаны без использования шаблона ввода.",
		multi_edit_entry_template_not_found_name: "[Не найдено]",
		multi_edit_entry_template_not_retrieved_warning: "Не удается найти шаблон ввода, который использовался для добавления этих элементов в репозиторий. Свойства элемента будут изменены без использования шаблона ввода.",
		checkin_major_version_hover: "Увеличивает номер версии документа на единицу и назначает для документа состояние Выпущен. Если эта опция не выбрана, документ будет считаться не готовым к выпуску и будет активирован как младшая версия.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Невозможно активировать документ, поскольку он не зарезервирован.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID пользователя или пароль являются неправильными для сервера.",
		error_bad_userid_password_userResponse: "Убедитесь, что вы правильно ввели свои ID пользователя и пароль.",
		error_bad_userid_password_adminResponse: "Возвращена следующая ошибка: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Нельзя установить соединение с веб-клиентом, используя следующий URL: ${0}.",
		http_send_error_explanation: "Эта ошибка может быть вызвана ошибкой конфигурации на сервере веб-программ или ошибкой в программе веб-клиента.",
		http_send_error_userResponse: "Попробуйте снова войти в систему. Если проблема сохранится, сообщите об этой ошибке вашему системному администратору.",
		http_send_error_adminResponse: "Возвращена следующая ошибка HTTP: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Нельзя установить соединение с веб-клиентом, используя следующий URL: ${0}.",
		http_error_explanation: "Возможно, вам нужно пройти аутентификацию в брандмауэре, либо не работает сервер веб-программ, либо к нему невозможно получить доступ из-за ошибок в сети.",
		http_error_userResponse: "Если вам нужно пройти аутентификацию в брандмауэре, пройдите ее и снова попробуйте войти в систему. Если проблема сохранится, сообщите об этой ошибке вашему системному администратору.",
		http_error_adminResponse: "Возвращена следующая ошибка HTTP: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Нельзя установить соединение с веб-клиентом, используя следующий URL: ${0}.",
		http_response_bad_explanation: "Эта ошибка может быть вызвана ошибкой конфигурации на сервере веб-программ или ошибкой в веб-клиенте.",
		http_response_bad_userResponse: "Попробуйте снова войти в систему. Если проблема сохранится, сообщите об этой ошибке вашему системному администратору.",
		http_response_bad_adminResponse: "Возвращена следующая ошибка: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Без заголовка",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Не удается запустить апплет электронной почты.",
		email_applet_init_failed_explanation: "Эта проблема может происходить, если клиент электронной почты неправильно установлен и сконфигурирован или если поддерживаемая версия Java Runtime Environment (JRE) не установлена на вашей рабочей станции.",
		email_applet_init_failed_userResponse: "Чтобы устранить проблему:<ul><li>Убедитесь, что программа электронной почты установлена и настроена как клиент электронной почты по умолчанию на вашей рабочей станции.</li><li>Убедитесь, что на вашей рабочей станции установлена поддерживаемая версия JRE, введя в командной строке следующую команду: java -version</li></ul><p>Список поддерживаемых версий JRE приводится в документе <i>Требования к аппаратному и программному обеспечению для IBM Content Navigator</i> на сайте поддержки программ IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Не удалось запустить программу электронной почты, так как невозможно загрузить необходимый файл DLL.",
		email_applet_JNI_LOAD_FAILED_explanation: "Не удается загрузить необходимый файл WCEmailAppletJNI.dll, так как, возможно, что временный каталог на рабочей станции переполнен.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Убедитесь, что во временном каталоге достаточно места. Затем снова попробуйте отправить документ из веб-клиента. По умолчанию файл WCEmailAppletJNI.dll загружается во временный каталог, заданный в параметрах веб-браузера.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Не удалось запустить программу электронной почты, так как апплет электронной почты не может создать временный файл.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Возможно, временный каталог на вашей рабочей станции переполнен.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Убедитесь, что во временном каталоге достаточно места. Затем снова попробуйте отправить документ из веб-клиента.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Не удается запустить программу электронной почты, так как апплет электронной почты не может получить доступ ко временному каталогу.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Возможно, временный каталог на вашей рабочей станции переполнен или у вас нет соответствующего права доступа для записи во временный каталог.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Убедитесь, что во временном каталоге достаточно места и что у вас есть разрешения на запись во временный каталог. Затем снова попробуйте отправить документ из веб-клиента. Если ошибка повторится, обратитесь к системному администратору.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Апплет электронной почты не может удалить временный файл.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Возможно, файлом пользуется другая программа, а может быть, файла нет на вашей рабочей станции.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Если файл используется другой программой, надо ее закрыть. Если файл находится в локальной файловой системе, удалите из временного каталога на вашей рабочей станции следующий файл: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Не удается создать ссылку на документ.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Репозиторий возвратил URL в неправильном формате.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Закройте веб-браузер, включая все вкладки и сеансы, и снова войдите в систему. Попробуйте повторно отправить документ из веб-клиента. Если эта ошибка повторится, обратитесь в службу программной поддержки IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Апплет электронной почты не может вложить файл в электронное сообщение.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Репозиторий возвратил URL в документ в неправильном формате.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Закройте веб-браузер, включая все вкладки и сеансы, и снова войдите в систему. Попробуйте повторно отправить документ из веб-клиента. Если эта ошибка повторится, обратитесь в службу программной поддержки IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Не удается создать вложение.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Апплет электронной почты не может прочитать URL для документа.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Закройте веб-браузер, включая все вкладки и сеансы, и снова войдите в систему. Попробуйте повторно отправить документ из веб-клиента. Если эта ошибка повторится, обратитесь в службу программной поддержки IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Не удалось получить документ из репозитория.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Возможно, истек срок бездействия вашего сеанса, не работает репозиторий или сервер веб-программ или произошла ошибка конфигурации веб-клиента.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Войдите в систему и снова попробуйте отправить документ по электронной почте. Если ошибка повторится, попросите системного администратора проверить журналы ошибок репозитория.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Если вы сконфигурировали веб-клиент для преобразования документов AFP в другой формат, например, в PDF, то, перед отправкой документов в качестве вложений, убедитесь, что преобразование сконфигурировано правильно.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Не удалось преобразовать документ в PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Средство, используемое для преобразования документов в PDF, не поддерживает тип файлов .",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Закройте эту страницу и попробуйте снова отправить документ по электронной почте, не преобразуя его в PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Электронное сообщение не создано.",
		email_applet_MAPI_USER_ABORT_explanation: "Откройте программу электронной почты и убедитесь, что она работает правильно. Затем снова попробуйте отправить документ из веб-клиента. Если ошибка повторится, попросите системного администратора проверить журналы событий операционной системы.",
		email_applet_MAPI_USER_ABORT_userResponse: "Если вы собирались закрыть программу электронной почты, то никаких дополнительных действий не требуется. Чтобы отправить электронное сообщение, войдите в программу электронной почты и снова попробуйте отправить документ из веб-клиента.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Не удается создать сообщение электронной почты.",
		email_applet_MAPI_FAILURE_explanation: "Возможно, клиент электронной почты не открыт, или вы не вошли в систему.",
		email_applet_MAPI_FAILURE_userResponse: "Откройте программу электронной почты и убедитесь, что она работает правильно. Затем снова попробуйте отправить документ из веб-клиента. Если ошибка повторится, попросите системного администратора проверить журналы событий операционной системы.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Не удается создать сообщение электронной почты.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Вы не вошли в клиент электронной почты. Чтобы отправить сообщение с веб-клиента, у вас должен быть открыт клиент электронной почты и вы должны уже быть зарегистрированы в системе.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Откройте клиент электронной почты и войдите в систему. Затем снова попробуйте отправить документ из веб-клиента.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Не удается создать электронное сообщение, так как не удается создать временный файл на рабочей станции.",
		email_applet_MAPI_DISK_FULL_explanation: "Возможно, временный каталог на вашей рабочей станции переполнен.",
		email_applet_MAPI_DISK_FULL_userResponse: "Убедитесь, что во временном каталоге достаточно места. Затем снова попробуйте отправить документ из веб-клиента.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Не удается создать электронное сообщение, так как не хватает системной памяти.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Возможно, у вас открыто слишком много программ.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Закройте все неиспользуемые программы, а затем попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Отказано в доступе к MAPI.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Возможно, доступ к Messaging Application Programming Interface (MAPI) не включен или не поддерживается для вашего приложения электронной почты. MAPI - это протокол службы сообщений, который используется для обеспечения взаимодействия между веб-клиентом и вашим приложением электронной почты.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Обратитесь к системному администратору.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Убедитесь, что для программы электронной почты настроен доступ MAPI и что оно сконфигурировано правильно. Если ошибка повторится, обратитесь в службу поддержки ПО IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Не удается создать сложение или ссылку на элемент.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Возможно, у вас открыто слишком много сеансов веб-браузера.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Закройте все неиспользуемые сеансы веб-браузера. Затем снова попробуйте отправить документ из веб-клиента. Если неполадка не будет устранена, обратитесь к системному администратору.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Не удалось отправить электронную почту.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Возможно, вы пытаетесь отправить слишком много вложений.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Выберите меньшее число файлов. Затем попробуйте снова отправить документы из веб-клиента.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Не удалось отправить электронную почту.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Возможно, у вашего электронного сообщения слишком много получателей.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Отправьте электронное сообщение меньшему числу получателей.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Не удается создать вложение.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Возможно, некоторые необходимые временные файлы были удалены до того, как удалось создать вложение. Эта ошибка может происходить, если кэш браузера очистили до отправки электронной почты.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Не удается создать вложение.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Возможно, некоторые необходимые временные файлы были удалены до того, как удалось создать вложение. Эта ошибка может происходить, если кэш браузера очистили до отправки электронной почты.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Программе электронной почты не удается создать вложение.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Не удалось отправить электронную почту указанному получателю.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Возможно, получателя нет в адресной книге.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Проверьте имя получателя и снова попробуйте отправить документ.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Не удалось отправить электронную почту указанному получателю.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Возможно, адрес электронной почты имеет неверный формат.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Убедитесь, что введен правильный электронный адрес, и снова попробуйте отправить документ.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Не удалось отправить электронную почту.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Возможно, электронное сообщение слишком длинное.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Сократите текст электронного сообщения и снова попробуйте отправить электронное сообщение.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Не удается создать сообщение электронной почты.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Возможно, клиенту электронной почты не удалось создать электронное сообщение.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Перезапустите клиент электронной почты и попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Возможно, электронное сообщение неверно составлено.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Не удалось отправить электронную почту указанному получателю.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Возможно, адрес электронной почты имеет неверный формат.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Убедитесь, что введен правильный электронный адрес и снова отправьте документ.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Клиент электронной почты не может выполнить затребованное действие.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Программа электронной почты возвратила неожиданную ошибка.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Попробуйте снова отправить документ из веб-клиента.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "У одного из свойств нет необходимого числа значений.",
		error_property_cardinality_explanation: "У некоторых свойств есть минимальное и максимальное число значений.",
		error_property_cardinality_userResponse: "Используйте всплывающую справку, чтобы определить, для какого свойства требуется минимальное число значений. Затем задайте минимальное число значений и повторите попытку.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Требуется имя файла.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Укажите имя файла и повторите попытку.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Подключаемый модуль ${0} содержит ошибки.",
		plugin_error_explanation: "Произошла ошибка при оценке JavaScript для подключаемого модуля ${0}. Если вы продолжите пользоваться веб-клиентом, вы можете столкнуться с дополнительными ошибками.",
		plugin_error_userResponse: "Обратитесь к системному администратору.",
		plugin_error_adminResponse: "Существует ошибка подключаемого модуля, которую должен устранить поставщик подключаемого модуля. Рекомендуется удалить подключаемый модуль из конфигурации веб-клиента, пока не будет устранена ошибка подключаемого модуля.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Невозможно открыть шаблон ввода.",
		open_old_format_entry_template_error_explanation: "Для шаблона ввода используется старый формат, который не поддерживается веб-клиентом.",
		open_old_format_entry_template_error_userResponse: "Попросите системного администратора обновить шаблон ввода.",
		open_old_format_entry_template_error_adminResponse: "Используйте механизм программ или дизайнер шаблонов ввода Workplace XT, чтобы сохранить обновленную версию шаблона ввода.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Невозможно открыть шаблон ввода.",
		open_custom_object_entry_template_error_explanation: "Веб-клиент не поддерживает следующий тип шаблонов ввода: Шаблоны ввода пользовательских объектов.",
		open_custom_object_entry_template_error_userResponse: "Открыть другой шаблон ввода.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Не удается открыть объект eforms.",
		open_forms_object_error_explanation: "Веб-клиент не поддерживает следующие типы объектов eforms: шаблон формы, данные формы, политика документа и политика рабочего потока.",
		open_forms_object_error_userResponse: "Откройте другой документ.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Нельзя использовать шаблон ввода ${0}.",
		entry_template_folder_restricted_error_explanation: "Шаблон ввода добавляет элементы в папку ${1}, но у вас нет соответствующих разрешений на добавление элементов в эту папку.",
		entry_template_folder_restricted_error_userResponse: "Выберите другой шаблон ввода или попросите системного администратора предоставить вам соответствующие разрешения на добавление элементов в папку ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Невозможно открыть шаблон ввода.",
		open_records_entry_template_error_explanation: "Веб-клиент не поддерживает следующий тип шаблонов ввода: Шаблоны ввода с объявлением записями.",
		open_records_entry_template_error_userResponse: "Открыть другой шаблон ввода.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Не удается открыть рабочий поток.",
		open_workflow_error_explanation: "Веб-клиент не поддерживает открытие рабочих потоков.",
		open_workflow_error_userResponse: "Откройте другой документ.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Не удается открыть документ.",
		viewer_unable_to_view_error_explanation: "Для документов этого типа не сконфигурировано никаких средств просмотра, или сконфигурированное средство просмотра несовместимо с вашей системой.",
		viewer_unable_to_view_error_userResponse: "Попросите системного администратора сконфигурировать средство просмотра для документов этого типа и убедитесь, что сконфигурированное средство просмотра работает в системе пользователя.",
		viewer_unable_to_view_error_adminResponse: "Сконфигурируйте средство просмотра для этого типа документов, используя утилиту администрирования.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Не удается открыть поиск.",
		search_cannot_open_error_explanation: "Для этого рабочего стола не сконфигурирована функция поиска.",
		search_cannot_open_error_userResponse: "Узнайте у системного администратора, есть ли у вас доступ к рабочему столу с функцией поиска, или можно обновить данный рабочий стол, включив в него функцию поиска.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Документ не загружен.",
		viewer_document_load_failed_error_explanation: "Программа просмотра Daeja ViewONE Professional не смогла открыть документ.",
		viewer_document_load_failed_error_userResponse: "Дополнительную информацию смотрите в сообщении об ошибке, показанном в средстве просмотра.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Просмотр документа невозможен.",
		viewer_session_expired_explanation: "Невозможно получить содержимое документа.",
		viewer_session_expired_userResponse: "Попробуйте снова войти в систему. Если решить проблему не удается, возможно, не работает сервер приложений. Попросите администратора системы проверить журналы ошибок IBM Content Navigator или перезапустить соответствующий сервер.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Просмотр документа невозможен.",
		ajaxViewer_getPage_failed_explanation: "Программа просмотра AJAX столкнулась с ошибкой при извлечении содержимого страницы. Возможно, не запущен сервер приложений.",
		ajaxViewer_getPage_failed_userResponse: "Закройте веб-браузер и снова войдите в систему. Если проблема сохранится, обратитесь к системному администратору, чтобы он проверил журналы ошибок веб-сервера приложений или перезапустил сервер.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "На этой рабочей станции не найдена версия Java Runtime Environment (JRE).",
		viewer_java_plugin_not_found_explanation: "Либо подключаемый модуль не найден, либо не установлена правильная версия JRE.",
		viewer_java_plugin_not_found_userResponse: "Проверьте, установлена ли среда JRE. Например, введите в командной строке следующую команду: Java -version. Если среда JRE не установлена или установлен неподходящей уровень версии, установите нужную версию JRE. Список поддерживаемых версий приводится в документе <i>Требования к аппаратному и программному обеспечению для IBM Content Navigator</i> на сайте поддержки программ IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Документ невозможно показать в вашем веб-браузере.",
		viewer_pdf_plugin_not_found_explanation: "Не найден подключаемый модуль, используемый для вывода на экран документов PDF в веб-браузере.",
		viewer_pdf_plugin_not_found_userResponse: "PDF-файл будет скачан на ваш компьютер вместо его вывода в окне программы просмотра.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Не удается добавить в репозиторий следующий элемент: ${0}.",
		add_document_single_item_error_explanation: "Ошибка может происходить по одной из следующих причин:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Вы пытаетесь добавить перемещенный или удаленный документ.</li>" + "<li>Вы пытаетесь добавить переименованный документ.</li>" + "<li>Вы пытаетесь добавить поврежденный документ.</li>" + "<li>Вы пытаетесь добавить документ, который открыт в другой программе.</li>" + "<li>Вы пытаетесь добавить папку в репозиторий.</li>" + "<li>У вас нет соответствующих разрешений в операционной системе, чтобы получить доступ к документу.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Предпримите соответствующее действие, чтобы устранить проблему:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Если документ был перемещен или переименован, найдите документ в вашей файловой системе и снова попробуйте его добавить.</li>" + "<li>Если документ открыт в другой программе, закройте его и снова попробуйте его добавить.</li>" + "</ul>" + "<br>Добавлять папки в репозиторий нельзя.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Перечисленные ниже элементы ${0} не удается добавить в репозиторий: ${1}",
		add_document_multiple_items_error_explanation: "Проблема с одним или несколькими элементами не позволяет добавить в репозиторий никакие элементы. Ошибка может происходить по одной из следующих причин:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Вы пытаетесь добавить перемещенный или удаленный документ.</li>" + "<li>Вы пытаетесь добавить переименованный документ.</li>" + "<li>Вы пытаетесь добавить поврежденный документ.</li>" + "<li>Вы пытаетесь добавить документ, который открыт в другой программе.</li>" + "<li>Вы пытаетесь добавить папку в репозиторий.</li>" + "<li>У вас нет соответствующих разрешений в операционной системе, чтобы получить доступ к документу.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Предпримите соответствующее действие, чтобы устранить проблему:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Если документ был перемещен или переименован, найдите документ в вашей файловой системе и снова попробуйте добавить элементы.</li>" + "<li>Если документ открыт в другой программе, закройте его и снова попробуйте добавить элементы.</li>" + "<li>Если документ был удален или поврежден, отмените выбор элемента и снова попробуйте добавить остальные элементы.</li>" + "</ul>" + "<br>Добавлять папки в репозиторий нельзя.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Вы не можете перетаскивать мышью объекты из этого положения.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Не удается открыть объект eforms.",
		open_forms_work_object_error_explanation: "Веб-клиент не поддерживает следующий тип объектов eform: политика рабочего потока.",
		open_forms_work_object_error_userResponse: "Откройте другой документ.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Не удается открыть документ.",
		viewer_privilege_to_view_error_explanation: "У вас нет необходимых полномочий для просмотра документа.",
		viewer_privilege_to_view_error_userResponse: "Попросите владельца документа или вашего системного администратора предоставить вам соответствующие разрешения на просмотр документа.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Не удается добавить элементы в репозиторий.",
		add_document_too_many_items_error_explanation: "Можно добавить элементы в количестве до ${0}. Вы пытаетесь добавить элементы в количестве ${1}.",
		add_document_too_many_items_error_userResponse: "Удалите часть элементов из своего списка и попробуйте снова добавить элементы. Вы также можете обратиться к системному администратору, чтобы увеличить максимальное число документов, которые вы можете одновременно добавить на этот рабочий стол.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Нельзя установить соединение с веб-клиентом, используя следующий URL: ${0}.",
		http_ltpa_expired_explanation: "Ключ LTPA, связанный с вашим сеансом браузера, истек.",
		http_ltpa_expired_userResponse: "Перезапустите веб-браузер и попробуйте снова войти в систему. Если проблема повторится, сообщите системному администратору о следующей ошибке: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Невозможно добавить документ в папку ${0}.",
		dnd_no_privilege_error_explanation: "Разрешения в папке запрещают добавление любых документов в папку.",
		dnd_no_privilege_error_userResponse: "Добавьте документ в другую папку.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Эти элементы нельзя изменить.",
		modify_document_too_many_items_error_explanation: "Можно изменить до ${0} элементов за раз. Вы пытаетесь изменить ${1} элементов.",
		modify_document_too_many_items_error_userResponse: "Выберите меньшее количество элементов и попытайтесь изменить их снова. Вы также можете обратиться к системному администратору, чтобы увеличить максимальное число элементов, которые можно одновременно изменить с этого рабочего стола.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Нельзя использовать класс ${0}.",
		add_document_multiple_unique_values_error_explanation: "Класс ${0} содержит одно или несколько свойств, которым требуется уникальное значение для каждого документа. При добавлении вами нескольких документов все они используют одинаковые значения.",
		add_document_multiple_unique_values_error_userResponse: "Выберите другой класс или добавляйте документы по отдельности.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Нельзя использовать шаблон ввода ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Для шаблона ввода ${0} требуется, чтобы вы добавляли документы в класс ${1}. Однако класс ${1} содержит одно или несколько свойств, требующих уникального значения для каждого документа. При добавлении вами нескольких документов все они используют одинаковые значения.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Выберите другой шаблон ввода или добавляйте документы по одному.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Нельзя использовать шаблон ввода ${0}.",
		entry_template_class_restricted_error_explanation: "Шаблон ввода добавляет элементы, используя класс ${1}, но у вас нет соответствующих разрешений на добавление элементов с использованием этого класса.",
		entry_template_class_restricted_error_userResponse: "Выберите другой шаблон ввода или попросите системного администратора предоставить вам соответствующие разрешения на добавление элементов с использованием класса ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Невозможно переназначить рабочий элемент другому пользователю.",
		process_reassign_error_explanation: "Это действие запрещено рабочим потоком.",
		process_reassign_error_userResponse: "Вы можете открыть рабочий элемент и выполнить текущий шаг в рабочем элементе.  Для получения дополнительной информации по этой проблеме попросите владельца проверить, можно ли переназначить этот рабочий элемент.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Указанное ниже пользовательское действие нельзя загрузить: ${0}.",
		customaction_loadurl_error_explanation: "Пользовательское действие не находится в доступном расположении. Текущий URL пользовательского действия: ${1}.",
		customaction_loadurl_error_userResponse: "Попросите администратора переместить пользовательское действие в доступное расположение.",
		customaction_loadurl_error_adminResponse: "Файл JSP, который задает пользовательское действие, нужно задать как часть веб-приложения eClient или как веб-приложение IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Не удается найти следующую возможность: ${0}.",
		feature_invalid_explanation: "Такая проблема может возникнуть, если эта возможность недоступна на заданном рабочем столе или имя возможности содержит ошибку.",
		feature_invalid_userResponse: "После нажатия кнопки OK вы будете перенаправлены на возможность по умолчанию для этого рабочего стола. Обратитесь к вашему системному администратору и сообщите ему об этой проблеме.",
		feature_invalid_adminResponse: "Если эта возможность должна быть доступна на рабочем столе, измените конфигурацию рабочего стола в утилите администрирования. Если эта возможность не должна присутствовать на рабочем столе или содержит ошибку написания в имени, совместно с разработчиком прикладной программы, создавшим URL для этой возможности, измените этот URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Не удается открыть поиск ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "Чтобы открыть этот поиск, вы должны находиться в пространстве команды.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Выберите другой поиск.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Невозможно импортировать следующий файл: ${0}.",
		wrong_import_file_type_error_explanation: "Этот файл должен быть файлом свойств.",
		wrong_import_file_type_error_userResponse: "Выберите файл свойств, который вы экспортировали из инструмента администрирования.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Не удалось найти репозиторий ${0} на рабочем столе ${1}.",
		browse_repository_not_found_error_explanation: "Если репозиторий задан в параметре URL, он должен присутствовать на рабочем столе и для него должна быть включена функция обзора.",
		browse_repository_not_found_error_userResponse: "Убедитесь, что ID репозитория, заданный в URL, является правильным, что репозиторий добавлен на рабочий стол ${1} и что функция обзора включена для репозитория.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Для репозитория ${0} не включена функция обзора на рабочем столе ${1}.",
		browse_repository_not_enabled_error_explanation: "Если репозиторий задан в параметре URL, для него должна быть включена функция обзора.",
		browse_repository_not_enabled_error_userResponse: "Включите функцию обзора для репозитория ${0} на рабочем столе ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Невозможно выполнить поиск, так как ссылка содержит недопустимые критерии.",
		invalid_xt_stored_search_criteria_error_explanation: "Следующее значение недопустимо:  ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Попросите своего системного администратора представить обновленную ссылку.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Измените соответствующую пару имя-значение в URL. Если вы не знаете, какие значения являются допустимыми для свойства, откройте сохраненный поиск в дизайнере поиска FileNet Workplace XT, чтобы определить допустимое значение.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Не удается открыть поиск в нескольких репозиториях.",
		unified_search_invalid_fixed_value_error_explanation: "В поиск в нескольких репозиториях включены недопустимые критерии. Эта проблема может происходить, если у критерия фиксированное значение, несовместимое с другими свойствами в отображении. Например, эта проблема может происходить, если фиксированное значение является строкой, но другие свойства в отображении являются целыми числами.",
		unified_search_invalid_fixed_value_error_userResponse: "Если у вас есть необходимые разрешения на изменение поиска, удалите недопустимые критерии и снова сохраните поиск. Если у вас нет необходимых разрешений на изменение поиска, попросите владельца поиска или системного администратора снова сохранить поиск.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Невозможно выполнить ваше требование.",
		launch_action_invalid_json_error_explanation: "Данные, переданные веб-клиенту, являются недействительными.",
		launch_action_invalid_json_error_userResponse: "Сообщите вашему системному администратору, какое приложение вы использовали, когда произошла эта ошибка.",
		launch_action_invalid_json_error_adminResponse: "Приложение-клиент не отправило веб-клиенту действительный объект JSON. Обратитесь за дополнительной помощью в службу поддержки программ IBM.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Невозможно выполнить ваше требование.",
		launch_action_not_found_error_explanation: "Действие ${0} не сконфигурировано ни для каких меню на рабочем столе ${1}.",
		launch_action_not_found_error_userResponse: "Попросите системного администратора сконфигурировать рабочий стол ${1} для использования меню, содержащего действие ${0}, или назначить вам рабочий стол, на котором есть действие ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Невозможно выполнить ваше требование.",
		launch_action_repository_not_found_error_explanation: "Репозиторий ${0} не связан с рабочим столом ${1}.",
		launch_action_repository_not_found_error_userResponse: "Попросите системного администратора связать репозиторий ${0} с рабочим столом ${1} или назначить для вас рабочий стол, содержащий репозиторий ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Не удается открыть пространство команды.",
		teamspace_cannot_open_error_explanation: "Для этого рабочего стола не сконфигурирована функция пространства команд.",
		teamspace_cannot_open_error_userResponse: "Узнайте у системного администратора, есть ли у вас доступ к рабочему столу с функцией пространств команд, или можно обновить данный рабочий стол, включив в него функцию пространств команд.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Произошла ошибка при активации цензурированного содержимого.",
		viewer_redaction_checkin_failed_explanation: "Программа просмотра столкнулась с ошибкой при активации цензурированного содержимого.",
		viewer_redaction_checkin_failed_userResponse: "Попросите системного администратора проверить журналы ошибок сервера веб-приложения.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Добавить документы в этот репозиторий нельзя.",
		add_document_odserver_odwek_version_od_error_explanation: "Текущая версия сервера IBM Content Manager OnDemand или ODWEK не относится к минимальному уровню, который требуется для поддержки добавления документов в репозиторий Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Попросите своего администратора проверить, какие версии сервера Content Manager OnDemand и ODWEK требуются для поддержки добавления документов в репозитории Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Не удается добавить элементы в репозиторий.",
		add_document_too_many_items_od_error_explanation: "В репозитории IBM Content Manager OnDemand можно добавлять только по одному элементу одновременно.",
		add_document_too_many_items_od_error_userResponse: "Удалите часть элементов из своего списка и попробуйте снова добавить элементы по одному.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Не удается добавить элемент в репозиторий.",
		add_document_filesize_empty_od_error_explanation: "В репозиторий IBM Content Manager OnDemand нельзя добавлять пустые файлы.",
		add_document_filesize_empty_od_error_userResponse: "Добавьте в файл содержимое и попробуйте снова добавить файл либо добавьте другой элемент.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Не удается открыть поиск в нескольких репозиториях.",
		unified_search_repository_not_found_error_explanation: "В поиск в нескольких репозиториях включены один или несколько недопустимых репозиториев. Эта ошибка может происходить, если репозитории, включенные в поиск, были удалены из программы или с текущего рабочего стола.",
		unified_search_repository_not_found_error_userResponse: "Если у вас есть необходимые разрешения на изменение поиска, снова сохраните поиск. При сохранении поиска веб-клиент удалит неправильные репозитории из поиска. Если у вас нет необходимых разрешений на изменение поиска, попросите владельца поиска или системного администратора снова сохранить поиск.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Новый документ не может быть создан.",
		edit_document_using_office_online_error: "Не удается открыть документ.",
		edit_document_using_office_online_error_explanation: "URL сервера Microsoft Office Online не сконфигурирован.",
		edit_document_using_office_online_error_userResponse: "Чтобы можно было использовать Office Online, ваш администратор сначала должен включить для репозитория сервер Office Online и указать URL этого сервера Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Не удается открыть документ в Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Попросите своего администратора обновить интеграцию с сервером MS Office Online.<br><br> Если пользователю нужно получить доступ к этому документу из Microsoft Office Online, перейдите на страницу Изменить интеграцию для репозитория и обновите интеграцию с сервером MS Office Online, включив класс в список классов, которые нужно изменить для поддержки Office Online. ",		
		browser_not_support_this_viewer: "Сконфигурированное средство просмотра несовместимо с вашим браузером.",
		browser_not_support_this_viewer_explanation: "${0} не поддерживается браузером.",
		browser_not_support_this_viewer_userResponse: "Используйте другое средство просмотра, чтобы открыть этот документ. Список поддерживаемых браузеров включен в документ <i>Требования к аппаратному и программному обеспечению для IBM Content Navigator</i> на сайте поддержки программ IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Информация о рабочем потоке",
		process_information_info_text: "Выбранный элемент в настоящий момент выполняется в следующих рабочих потоках.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Равно",
		operator_NOTEQUAL: "Не равно",
		operator_LIKE: "Подобно",
		operator_STARTSWITH: "Начинается на",
		operator_ENDSWITH: "Заканчивается на",
		operator_NOTLIKE: "Не подобно",
		operator_NULL: "Является пустым",
		operator_NOTNULL: "Не является пустым",
		operator_LESS: "Меньше",
		operator_LESSOREQUAL: "Меньше или равно",
		operator_GREATER: "Больше",
		operator_GREATEROREQUAL: "Больше или равно",
		operator_BETWEEN: "Между",
		operator_NOTBETWEEN: "Не между",
		operator_IN: "Включить все",
		operator_INANY: "Включить любой",
		operator_NOTIN: "Исключить все",
		operator_CONTAINS: "Содержит",

		/* SearchForm widget */
		search_button_tooltip: "Искать документы, соответствующие заданным критериям.",
		reset_button_tooltip: "Позволяет восстановить для поиска значения по умолчанию, заданные вашим администратором.",
		clear_button_tooltip: "Позволяет удалить все значения, введенные вами для поиска.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Выбрать поиск",
		append_to_search: "Присоединить к поиску",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Новый поиск",
		new_unified_search: "Новый поиск в нескольких репозиториях",
		searh_name_contains: "Имя поиска содержит",
		keep_search_criteria_expanded: "Оставить критерии поиска открытыми",
		showing_results: "Показать результаты для:",
		open_in_new_window: "Открыть в новом окне",
		open_in_new_tab: "Открыть на новой вкладке",
		close_tab: "Закрыть вкладку",
		add_repository: "Добавить репозиторий",
		edit_repository: "Изменить репозиторий",
		remove_repository: "Удаление",
		search_scope: "Область поиска",
		search_class_template: "Класс",
		object_type_version: "Тип и версия объекта",
		not_applicable: "Неприменимо",
		unified_search_including_subfolders: " (Включая подпапки)",
		unified_search_dialog_intro_text: "Выберите репозиторий и поиск или классы, которые вы хотите включить в поиск.",
		unified_search_class_or_template: "Класс шаблона",

		select_object_fieldset_legend: "Как вы хотите находить элементы для вложения:",
		select_object_create_new_search: "Новый поиск",
		select_object_search_template: "Существующий поиск",

		search_criteria: "Критерии поиска:",
		search_criteria_no_colon: "Критерии поиска",
		search_in_multiple: "Поиск в (${0}):",
		search_location_including_subfolders: "${0}, включая подпапки",
		search_class: "Класс:",
		search_class_multiple: "Класс (${0}):",
		search_class_including_subclasses: "${0}, включая подклассы",
		search_class_all_pseudo: "Все",
		search_results: "Результаты поиска",
		select_operator: "Выберите оператор",
		ending_value: "Конечное значение для свойства ${0}:",
		search_options: "Опции поиска:",
		search_version: "Версия:",
		search_released_version: "Выпущенная версия",
		search_current_version: "Текущая версия",
		search_all_versions: "Все версии",
		search_file_type_filter: "Фильтр типов файлов:",
		search_one_file_type: "1 тип файлов",
		search_many_file_types: "${0} типа/типов файлов",
		search_action_filter: "Фильтр действий:",
		search_action_filter_hover_help: "Сузьте круг результатов, чтобы в него входили только файлы, с которыми пользователи выполняли конкретное действие.<br/>Например, можно искать только документы, добавленные 20 сентября 2012 г.",
		search_action_filter_enabled: "Фильтр действий включен",
		search_enable: "Включить",
		search_disable: "Выключить",
		search_by: "кем",
		search_added: "Добавлено",
		search_modified: "Модифицированное объявление",
		search_checked_out: "Зарезервированные",
		search_date_operator_on: "Включить",
		search_date_operator_not_on: "Не на",
		search_date_operator_before: "До",
		search_date_operator_after: "После",
		search_version_hover_help_p8: "Выпущенная версия доступна всем пользователям. Документ, который является текущей версией, означает, что один или несколько пользователей изменяют этот документ.",
		search_version_hover_help_cm: "Текущая версия является последней версией элемента.",
		search_using: "Искать элементы, которые соответствуют:",
		search_property_and_text_criteria: "И значениям свойств, и текстовым критериям",
		search_property_or_text_criteria: "Либо значениям свойств, либо текстовым критериям",
		search_property_and_text: "И свойство, и текстовые критерии",
		search_property_or_text: "Либо свойство, либо текстовые критерии",
		search_property_options: "Опции свойств:",
		search_property_option_match_all: "Всем свойствам",
		search_property_option_match_any: "Любому из свойств",
		search_property_option_match_all_summary: "Соответствие всем",
		search_property_option_match_any_summary: "Соответствие любому",
		search_total_count_type_total: "Всего",
		search_total_count_type_atleast: "Хотя бы",
		search_content_size_filter: "Фильтр размера содержимого:",
		search_content_size_filter_any: "Любой размер содержимого",

		/* Search work options */
		search_work_filter: "Фильтр рабочих элементов:",
		search_work_filter_hover_help: "Сузьте результаты, чтобы включить только элементы, которые есть в рабочем потоке. Например, можно сузить результаты, чтобы включить только активные рабочие элементы.<br /><br />Эта опция неприменима, если вы хотите увидеть все версии элементов, возвращенные поиском.",
		search_work_filter_enabled: "Фильтр рабочих элементов включен",
		search_work_filter_status: "Состояние:",
		search_work_filter_step: "Шаг:",
		search_work_filter_owner: "Владелец:",
		search_work_filter_status_all: "Все элементы",
		search_work_filter_status_active: "Активные элементы",
		search_work_filter_status_suspended: "Приостановленные элементы",
		search_work_filter_process_all: "Все рабочие потоки",
		search_work_filter_step_all: "Все шаги",
		search_work_filter_owner_all: "Все пользователи",
		search_work_filter_step_error: "Имя шага не существует.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Поиск невозможно выполнить без дополнительной информации. Введите значение хотя бы для одного условия.",
		search_insufficient_input_box: "Поиск невозможно выполнить без дополнительной информации. Введите критерии поиска или выберите шаблон метаданных.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Поиск невозможно сконфигурировать без дополнительной информации. Введите значение хотя бы для одного условия.",
		search_member_required: "Чтобы совместно использовать этот поиск с конкретными пользователями и группами, выберите хотя бы одного пользователя или группу, совместно с которыми нужно использовать этот поиск.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Хотите закрыть окно, не сохраняя изменения?",
		search_prompt_close_all_without_save: "Хотите закрыть все вкладки, не сохраняя изменения?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Один из следующих типов критериев поиска недопустим для этого репозитория: ${0}. Для запуска поиска в веб-клиенте недопустимые критерии нужно удалить. Если вы сохраните этот поиск, недопустимые критерии будут удалены. Если вы не хотите изменять этот поиск, закройте его.",
		search_invalid_repository: "Один или несколько репозиториев",
		search_invalid_class: "Один или несколько классов",
		search_invalid_folder: "Одна или несколько папок",
		search_invalid_file_type: "Один или несколько типов файлов",
		search_invalid_property: "Одно или несколько свойств",
		search_invalid_text_search: "Критерии текстового поиска",
		search_invalid_work: "Критерии фильтра рабочих элементов",

		search_operator_pulldown_missing: "Требуется оператор. Выберите оператор в раскрывающемся меню. Если вы не видите никаких операторов, попросите системного администратора проверить вкладку <b>Поиск</b> в инструменте администрирования, чтобы узнать, не являются ли все операторы скрытыми. При поиске в нескольких репозиториях в раскрывающемся меню может не быть никаких операторов, если у отображаемых друг на друга свойств нет общих операторов.",

		/*SearchBuilder */
		open_search_builder: "Новый поиск",
		document_type: "Класс",
		show_all_properties: "Показать все свойства",
		text_search_label: "Найти элементы со следующими терминами:",
		text_search_place_holder: "Использовать комбинацию терминов и операторов: * ?, или \"точно соответствующие словосочетания\"",
		text_search_place_holder_box: "Использовать комбинацию терминов и операторов: AND, OR, NOT, и \"точно соответствующие словосочетания\"",
		text_search_place_holder_cascade_proximity: "Использовать комбинацию терминов и операторов: * или ?",
		text_search_place_holder_common: "Использовать комбинацию терминов и \"точно соответствующие словосочетания\"",
		text_search_hover_help_p8: "Используйте в качестве символа подстановки звездочку (*) или вопросительный знак (?). Используйте двойные кавычки  (\"\") для поиска точных вхождений.",
		text_search_hover_help_p8_only_crs: "Используйте в качестве символа подстановки звездочку (*) или вопросительный знак (?). Используйте двойные кавычки  (\"\") для поиска точных вхождений. Если вы зададите несколько терминов, перекрестный поиск в разных репозиториях возвратит элементы, содержащие любой из терминов.",
		text_search_hover_help_cm: "Используйте в качестве символа подстановки звездочку (*) или вопросительный знак (?). Используйте двойные кавычки  (\"\") для поиска точных вхождений. Чтобы исключить термин, поставьте перед ним знак минус (-), а чтобы включить термин, поставьте перед ним знак плюс (+).",
		text_search_hover_help_box: "Используйте AND между условиями, чтобы производить сопоставление со всеми условиями. Используйте OR между условиями, чтобы производить сопоставление с любыми из условий. Используйте двойные кавычки  (\"\") для поиска точных вхождений. Чтобы исключить условие, поставьте перед ним NOT.",
		text_search_hover_help_common: "Используйте двойные кавычки  (\"\") для поиска точных вхождений. Если вы зададите несколько терминов, перекрестный поиск в разных репозиториях возвратит элементы, содержащие все термины.",
		text_search_options: "Опции текста:",
		text_search_options_hover_help: "Если вы используете какие-либо операторы помимо символов подстановки, включите опцию Дополнительные операторы.",
		text_search_option_any: "Любой из терминов",
		text_search_option_all: "Все термины",
		text_search_option_proximity: "Рядом со словами:",
		text_search_option_none: "Дополнительные операторы",
		text_search_option_authoring: "Текстовый поиск:",
		text_search_option_authoring_hover_help: "включите опцию, которая определяет, как вы хотите сделать критерии поиска доступными пользователям. Если вы не хотите включать в поиск какие-либо критерии поиска, скройте эту опцию. В противном случае вы можете разрешить вносить изменения в критерии поиска текста, либо сделать их обязательными для пользователей, либо доступными пользователям только для чтения.",
		text_search_option_hide: "Скрыть критерии",
		text_search_option_hide_hover_help: "Выберите эту опцию, если вы не хотите включать в поиск никакие текстовые критерии поиска или хотите разрешить другим пользователям задавать текстовые критерии поиска.",
		text_search_option_in: "В теге HTML/XML ${0}",
		text_search_option_paragraph: "В том же абзаце",
		text_search_option_sentence: "В одном и том же предложении",
		text_search_option_vql: "Запрос VQL",
		text_search_option_none_hover_help: "Ставьте символ - перед терминами, которые нужно исключить.",
		text_search_option_cascade_proximity_hover_help: "Позволяет ограничить результаты поиска терминами, которые расположены друг от друга на расстоянии заданного числа слов, но не входят в точные словосочетания.",

		box_search_metadata: "Метаданные:",
		box_search_select_template: "Выберите шаблон",
		box_search_no_templates: "Нет доступных шаблонов",
		box_text_search_options_search_within: "Область поиска:",
		box_text_search_options_search_within_everything: "Все",
		box_text_search_options_search_within_file_content: "Содержимое документа",
		box_text_search_options_search_within_tags: "Теги",
		box_text_search_options_limit_to: "Только поиск:",

		add_property: "Добавить свойство",
		edit_template: "Изменить поиск",
		save_search: "Сохранить поиск",
		search_template_name: "Имя:",
		search_template_desc: "Описание",
		auto_run: "Запустить поиск при открытии",
		show_in_tree: "Показать поиск в структуре папок",
		show_in_tree_hover_help: "Если поиск сохранен в папке, он, по умолчанию, появится только в списке содержимого. Если вы выберете эту опцию, поиск также появится в дереве папок в представлении Обзор.  Однако поиск будет показан в дереве папок, только если вы сохранили поиск в папке.",
		share_search_with: "Предоставить совместный доступ к поиску:",
		remove_member: "Убрать ${0}",
		ok_button_label: "OK",
		save_template: "Сохранить",
		save_template_title: "Если вам часто нужно искать те или иные элементы, сохраните критерии поиска.",
		remove_criterion: "Удаление",
		apply_button_label: "Применить",
		empty_search_results_pane: "Запустите поиск, чтобы увидеть результаты.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Весь репозиторий",

		repository_already_selected: "Репозиторий ${0} нельзя добавить к поиску в нескольких репозиториях, так как он уже включен в этот поиск. <br/> Репозиторий можно включить в поиск в нескольких репозиториях только один раз. <br/>Выберите другой репозиторий для включения в поиск в нескольких репозиториях.",

		repository_limit_reached: "Репозиторий ${0} нельзя добавить к поиску в нескольких репозиториях. Максимально к поиску можно добавить ${1} репозиториев.",

		nomore_criteria_toappend: "Все отображенные свойства уже включены в критерии поиска. В критерии поиска не добавлено никаких свойств.",
		nomore_criteria_toappend_regular: "Все свойства уже включены в критерии поиска. В критерии поиска не добавлено никаких свойств.",

		/* OD Save Search dialog */
		reload_label: "Загрузить заново",
		od_save_search_help_text: "Введите имя условия поиска или выберите существующее условие для замены",
		public_access_label: "Разрешить другим пользователям использовать это условие поиска",
		od_delete_search_help_text: "Выберите один или несколько поисков, которые нужно удалить",
		delete_save_searches: "Удалить сохраненные поиски",

		/* Unified Search */
		unified_search_enable_text_search: "Включить текстовые критерии поиска",
		unified_search_text_search_enabled: "Текстовый поиск включен",
		unified_search_mapping: "Отображение",
		unified_search_new_mapping: "Новое отображение",
		unified_search_mapping_name: "Имя отображения",
		unified_search_mapping_dialog_instructions: "Выберите свойства, которые вы хотите отобразить. Некоторые свойства можно отобразить в свойства с другим типом данных. Например, можно отобразить строчное свойство в целочисленное свойство. При отображении свойства в другое свойство в поиске в нескольких репозиториях они рассматриваются как одно свойство.",
		unified_search_filter_available_properties: "Фильтровать доступные свойства",
		unified_search_available_properties: "Доступные свойства",
		unified_search_mapped_properties: "Отображенные свойства",
		unified_search_single_values: "единственные значения",
		unified_search_multiple_values: "множественные значения",
		unified_search_add_mapping: "Добавить отображение",
		unified_search_warn_remove_repository: "Выбранный репозиторий используется в критериях поиска.\nЕсли удалить этот репозиторий, все включающие его отображения и критерии будут также удалены.\n\nХотите удалить этот репозиторий?",
		unified_search_warn_update_repository_mappings: "Изменение выбора свойств для этого репозитория повлияет на критерии поиска.\n\nВ число критериев поиска входят одно или несколько отображений, в состав которых входят одно или несколько удаляемых свойств. Все отображения, в состав которых входят удаляемые свойства, нужно удалить. Для выполнения поиска нужно удалить все критерии поиска, в состав которых входят эти отображения.\n\nИзменить опции репозитория и удалить отображения и критерии поиска?",
		unified_search_warn_update_repository_mappings_reset: "Включение текстовых критериев поиска повлияет на критерии поиска в разных репозиториях.\n\nЧтобы выполнить поиск, нужно стереть все критерии поиска свойств, которые содержат отображение в свойства для данного репозитория.\n\nХотите обновить опции репозитория и очистить критерии поиска?",
		unified_search_warn_update_repository_text_criteria: "Удаление текстовых критериев поиска повлияет на критерии поиска в разных репозиториях.\n\nЧтобы выполнить поиск, нужно удалить текстовые критерии поиска из критериев поиска для разных репозиториев.\n\nХотите обновить опцию репозитория и удалить текстовые критерии поиска?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Удаление текстовых критериев поиска и изменение выбора свойств для этого репозитория повлияет на критерии поиска в разных репозиториях.\n\nЧтобы выполнить поиск, нужно удалить текстовые критерии поиска из критериев поиска для разных репозиториев. Кроме того, критерии поиска свойств включают в себя одно или несколько отображений, в состав которых входят одно или несколько удаляемых свойств. Все отображения, в состав которых входят удаляемые свойства, нужно удалить. Для выполнения поиска нужно удалить все критерии поиска свойств, в состав которых входят эти отображения.\n\nХотите обновить опции репозитория и удалить текстовые критерии поиска, отображения и критерии поиска свойств?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Исключение текстовых критериев поиска повлияет на критерии поиска в разных репозиториях.\n\nЧтобы выполнить поиск, нужно стереть все критерии поиска свойств, которые содержат отображение в свойства для данного репозитория. Чтобы выполнить поиск, возможно, придется удалить текстовые критерии поиска из критериев поиска для разных репозиториев.\n\nХотите обновить опции репозитория и очистить критерии поиска?",
		unified_search_warn_remove_mapping: "Удаление этого отображения повлияет на критерии поиска.\n\nЧтобы выполнить поиск, нужно удалить критерии поиска, которые используют отображение.\n\nХотите обновить отображение и удалить критерии поиска?",
		unified_search_warn_update_mapping: "Изменения этого отображения повлияют на критерии поиска.\n\nКритерии поиска, которые используют отображение, нужно стереть, чтобы поиск не включал в себя недопустимые операторы или недопустимые значения.\n\nХотите обновить отображение и стереть критерии поиска?",
		unified_search_warn_update_mapping_not_searchable: "Изменения этого отображения повлияют на критерии поиска.\n\nЕсли все отображенные свойства доступны только для просмотра, вы не можете использовать отображение в критериях поиска. Для выполнения поиска нужно удалить критерии поиска, использующие отображение.\n\nХотите обновить отображение и удалить критерии поиска?",
		unified_search_warn_update_mapping_box_searchable: "Изменения этого отображения повлияют на критерии поиска.\n\nКритерии поиска уже содержат это отображение более одного раза и, если вы добавите свойство ${0} из репозитория ${1}, критерии поиска будут содержать свойство ${0} слишком много раз. Для выполнения поиска нужно удалить критерии поиска, использующие отображение.\n\nХотите обновить отображение и удалить критерии поиска?",
		unified_search_details: "Подробности поиска в нескольких репозиториях",
		unified_search_fixed_value_property: "Свойство с фиксированным значением",
		unified_search_required_property: "Обязательное свойство",
		unified_search_display_only_property: "Свойство, доступное только для просмотра",
		unified_search_missing_required_properities: "Этот поиск нельзя сохранить или запустить.<br/>Перечисленные ниже свойства являются обязательными свойствами: ${0} Необходимо включить эти свойства в отображение и добавить их со своими значениями в критерии поиска.",
		unified_search_property_repostory: "${0} (Репозиторий: ${1})",
		unified_search_builder_no_mappings: "Не удается запустить поиск.<br/>Вы должны создать отображение свойства и включить его в <b>Представление результатов</b>, чтобы поиск смог показать ваши результаты.",
		unified_search_builder_insufficient_criteria_to_run: "Не удается запустить поиск.<br/>Критерии поиска не содержат текстовых критериев поиска или значений свойств для следующих репозиториев: ${0}. Для каждого репозитория, включенного в поиск, нужно либо ввести текстовые критерии поиска, либо создать отображение свойства, включить его в критерии свойства и задать значение свойства.",
		unified_search_builder_insufficient_criteria_to_save: "Не удается сохранить поиск.<br/>Поиск не содержит критериев поиска для следующих репозиториев: ${0}. Для каждого репозитория, включенного в поиск, нужно выполнить одно из следующих действий:<ol><li>Создайте отображение свойства и включите его в критерии свойства.</li><li>Измените репозиторий, включив текстовые критерии поиска, и создайте отображение свойства и включите его в <b>Представление результатов</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Не удается запустить поиск.<br/>Для каждого репозитория, включенного в поиск, нужно задать хотя бы одно значение свойства. Например, можно задать значения следующих свойств: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Не удается запустить поиск.<br/>Требуются текстовые критерии поиска.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Не удается запустить поиск.<br/>Для каждого репозитория, включенного в поиск, нужно задать хотя бы одно значение свойства или ввести текстовые критерии поиска. Например, можно задать значения следующих свойств: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Не удается запустить поиск.<br/>Требуются текстовые критерии поиска. Для каждого репозитория, включенного в поиск, нужно задать хотя бы одно значение свойства или ввести текстовые критерии поиска. Например, можно задать значения следующих свойств: ${0}",
		unified_search_invalid_criteria: "Поиск содержит недопустимые критерии, которые не позволяют запустить поиск.<br/>Недопустимые критерии были удалены. Однако вы должны сохранить изменения поиска, прежде чем поиск можно будет запустить. Если вы не хотите сохранять изменения, закройте поиск.<br/><br/>Были удалены или изменены следующие элементы: ${0}",
		unified_search_invalid_fixed_values: "Этот поиск нельзя сохранить или запустить.<br/>У перечисленных ниже критериев поиска фиксированные значения, которые являются недопустимыми: ${0} Чтобы устранить ошибку, выполните одно из следующих действий:<ul><li>Удалите критерии поиска, содержащие недопустимые значения</li><li>Измените отображения, содержащие свойство IBM Content Manager OnDemand с фиксированным значением, чтобы удалить свойство.</li><li>Измените отображения, содержащие свойство IBM Content Manager OnDemand с фиксированным значением, чтобы сделать все свойства совместимыми. Более подробную информацию о том, какие свойства можно отображать, смотрите в ссылке Узнать подробнее в тексте введения в верхней части окна отображения свойств.</li></ul>",
		unified_search_cannot_add_properties: "Вы не можете добавить свойства в этот поиск.<br/>Все доступные отображенные свойства уже есть в критериях поиска, и каждое свойство можно добавить в поиск только один раз.",
		unified_search_mapping_not_viewable: "Свойства шаблона Box не могут быть показаны в результатах поиска. Если вы хотите добавить это отображение в качестве столбца, необходимо отобразить, по крайней мере, одно свойство, не являющееся свойством шаблона Box. Например, можно выбрать свойство из другого репозитория.",

		unified_search_returned_more: "Как минимум, для одного репозитория превышено максимально допустимое число результатов.",
		unified_search_partial_failure: "Произошла ошибка, как минимум, в одном репозитории.",
		unified_search_partial_failure_and_returned_more: "Произошла ошибка, как минимум, в одном репозитории и, как минимум, для одного репозитория превышено максимально допустимое число результатов.",
		unified_search_see_analysis: "Смотрите анализ результатов.",
		unified_search_analysis_intro_returned_more: "Для каждого репозитория, для которого превышено максимально допустимое число результатов, попробуйте уточнить критерии поиска, чтобы было возвращено меньше результатов. Либо можно запустить поиск в одном репозитории, чтобы возвратить больше результатов, чем максимально допускается при поиске в разных репозиториях.",
		unified_search_analysis_intro_partial_failure: "Проверьте информацию об ошибке, возвращенную репозиторием или репозиториями. Если нужно, устраните ошибки и снова запустите перекрестный поиск в разных репозиториях.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Для каждого репозитория, в котором произошла ошибка, попробуйте устранить проблему и снова запустить поиск.<br/><br/>Для каждого репозитория, для которого превышено максимально допустимое число результатов, попробуйте уточнить критерии поиска, чтобы было возвращено меньше результатов. Либо можно запустить поиск в одном репозитории, чтобы возвратить больше результатов, чем максимально допускается при поиске в разных репозиториях.",
		unified_search_results_found: "Найденные результаты",
		unified_search_maximum_allowed: "Допустимый максимум",
		unified_search_maximum_exceeded: "Превышен максимум",

		unified_search_mapping_rule_box: "Это свойство нельзя добавить в отображение.<p>Свойство ${0} из репозитория ${1} уже есть в другом отображении, а доступные для поиска свойства из этого репозитория можно включить только в одно отображение на операцию поиска.<br/>Выберите другое свойство, чтобы добавить его в отображение.</p>",
		unified_search_mapping_rule_repository: "Это свойство нельзя добавить в отображение.<br/>Это отображение уже включает в себя свойство из репозитория ${0}. Отображение может включать в себя только одно свойство из репозитория.<br/>Выберите другой репозиторий, из которого можно добавить свойство, или создайте новое отображение для выбранного свойства.",
		unified_search_mapping_rule_data_type: "Это свойство нельзя добавить в отображение.<br/>Свойство ${0} нельзя отобразить в свойство ${1}. Выберите другое свойство для отображения или создайте новое отображение для выбранного свойства.<br/>Более подробную информацию о том, какие свойства можно отображать, смотрите в ссылке Узнать подробнее в тексте введения в верхней части этого окна.",
		unified_search_mapping_rule_cardinality: "Это свойство нельзя добавить в отображение.<br/>Все свойства в отображении должны поддерживать или единственные значения, или множественные значения. Выбранное свойство поддерживает ${0}, а свойства в отображении поддерживают ${1}.<br/>Выберите другое свойство, чтобы добавить в это отображение, или создайте новое отображение для выбранного свойства.",
		unified_search_mapping_rule_fixed_value: "Это свойство нельзя добавить в отображение.<br/>Это отображение уже включает в себя свойство с фиксированным значением. Отображение может включать в себя только одно свойство с фиксированным значением.<br/>Выберите другое свойство, чтобы добавить в это отображение, или создайте новое отображение для выбранного свойства.",
		unified_search_mapping_rule_child_component: "Это свойство нельзя добавить в отображение.<br/>Свойство с дочерним компонентом нельзя отображать на другие свойства. Если вы хотите использовать возможность поиска для этого свойства, создайте новое отображение для выбранного свойства.",
		unified_search_mapping_rule_operator_intersection: "Это свойство нельзя добавить в отображение.<br/>У всех свойств отображении должен быть один или несколько общих операторов. Однако у свойства ${0} нет общих с другими свойствами в этом отображении операторов.<br/>При возможности выберите другое свойство. Если вы должны включить выбранное свойство, совместно с администратором поработайте над изменением операторов, связанных с этим свойством.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Дополнительные параметры",
		advanced_search_options_intro: "Задать дополнительные опции критериев.",
		advanced_search_options_editable: "Изменяемые",
		advanced_search_options_readonly: "Только чтение",
		advanced_search_options_required: "Обязательные",
		advanced_search_options_hidden: "Скрытые",
		advanced_search_options_property_editable:"Свойство:",
		advanced_search_options_operators:"Операции:",
		advanced_search_options_use_all:"Использовать все",
		advanced_search_options_use_selected:"Использовать выбранные",
		advanced_search_options_operators_filtered: "Операторы отфильтрованы",
		// Data types in lowercase
		data_type_boolean: "логический",
		data_type_date: "дата",
		data_type_time: "время",
		data_type_timestamp: "отметка времени",
		data_type_decimal: "десятичное значение",
		data_type_double: "число с плавающей запятой",
		data_type_short: "целое",
		data_type_integer: "целое",
		data_type_long: "целое",
		data_type_string: "текстовая строка",
		data_type_string_alpha: "алфавитно-цифровая строка",
		data_type_string_alphanum: "алфавитно-цифровая строка",
		data_type_string_ext: "расширенная алфавитно-цифровая строка",
		data_type_string_num: "цифровая строка",
		data_type_binary: "двоичный",
		data_type_object: "объект",
		data_type_guid: "глобальный уникальный идентификатор",
		data_type_user: "пользователи",
		data_type_child_component: "дочерний компонент",

		/* Print Dialog */
		print_title: "Печать",
		print_message: "Печать: ${0}",
		print_print_button: "Печать",
		print_clean_margins_button: "Задать для всех 0",
		print_type: "Тип принтера:",
		print_printer_server_options: "Опции печати сервера",
		print_printer_properties: "Свойства принтера",
		print_printer_fax_properties: "Свойства факса",
		print_printer_name: "Имя принтера:",
		print_fax_recipient: "Получатель",
		print_fax_sender: "Отправитель",
		print_copies: "Число копий:",
		print_local_orientation: "Ориентация",
		print_local_orientation_landscape: "Альбомная",
		print_local_orientation_portrait: "Книжная",
		print_local_margins: "Поля",
		print_local_margins_top: "Лучшие",
		print_local_margins_bottom: "Внизу",
		print_local_margins_left: "Левое",
		print_local_margins_right: "Правое",
		print_printer_server: "Сервер",
		print_printer_local: "Локально",
		print_property_class: "Класс:",
		print_property_routing: "Маршрутизация:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Узел:",
		print_property_writer: "Автор:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Назначение:",
		print_property_forms: "Формы:",
		print_property_faxnotes: "Примечания.",
		print_property_faxcompany: "Компания:",
		print_property_faxnumber: "Номер факса:",
		print_property_faxname: "Имя:",
		print_property_faxsendertelnumber: "Номер телефона:",
		print_property_faxcoverpage: "Страница обложки:",
		print_property_faxsubject: "Тема:",
		print_saveoptions: "Сохранить параметры печати",
		print_property_bannerpage: "Использовать страницу баннера",
		print_print_with_info_fields: "Печатать с информационными полями",
		print_field_from: "От",
		print_field_to: "Куда",
		print_invalid_value_class: "Допустимые символы: A-Z и 0-9",
		print_invalid_value_pagedef: "Допустимыми символами являются буквенные или цифровые символы, а также символы @, #, и $",
		print_invalid_value_writer: "Допустимыми символами являются буквенные или цифровые символы, а также символы @, #, и $",
		print_invalid_value_formdef: "Допустимыми символами являются буквенные или цифровые символы, а также символы @, #, и $",
		print_invalid_value_forms: "Допустимыми символами являются буквенные или цифровые символы, а также символы @, #, и $",
		print_invalid_value_margin: "Допустимые числа - от ${0} до ${1}",
		print_status_message: "Число документов, отправленных на принтер ${1}, равно ${0}.",

		print_applet_init_error: "Невозможно запустить апплет печати.",
		print_applet_init_error_explanation: "Эта проблема может быть вызвана следующими причинами: <br/><br/><ul><li>На этой рабочей станции не установлена Java Runtime Environment (JRE).</li><li>Подключаемый модуль Java не включен в вашем веб-браузере.</li><li>Версия JRE на вашей рабочей станции несовместима с версией IBM Content Navigator.</li><li>Истек тайм-аут браузера при ожидании запуска апплета печати.</li></ul>",
		print_applet_init_error_userResponse: "Вы можете выполнить описанные ниже шаги, чтобы устранить проблему с JRE:<br/><br/><ol><li>Убедитесь, что на вашей рабочей станции установлена JRE.</li><li>Убедитесь, что подключаемый модуль Java включен в вашем веб-браузере.</li><li>Убедитесь, что версия JRE на вашей рабочей станции совместима с IBM Content Navigator, и повторите попытку. Список поддерживаемых версий приводится в документе <i>Требования к аппаратному и программному обеспечению для IBM Content Navigator</i> на сайте поддержки программ IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Страница обложки",
		daeja_print_selected_documents_title: "Выбранные документы",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Соответствие всем критериям поиска",
		match_any_criteria: "Соответствие любому из критериев поиска",
		include_subfolders_summary: "${0} (включить подпапки)",
		browse_button: "Обзор&hellip;",
		search_for: "Найти:",
		object_type_documents: "Документы",
		object_type_folders: "Папки",
		object_type_documents_folders: "Документы и папки",
		object_type_web_links: "Веб-ссылки",
		object_type_documents_folders_web_links: "Документы, папки и веб-ссылки",

		/* SelectSearchFolderDialog */
		search_in: "Поиск в:",
		include_subfolders: "Включить подпапки",

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
		locked_item_icon_title: "Кем заблокировано ${0}",
		checked_out_icon_title: "Зарезервировано: ${0}",
		major_minor_version_icon_title: "Старшая версия с младшими версиями",
		suspended_icon_title: "Рабочий поток приостановлен",
		on_hold_icon_title: "Приостановлен",
		has_notes_icon_title: "Есть примечания",
		record_icon_title: "Объявлен записью",
		compound_document_icon_title: "Составной документ",
		validateTemplate_icon_title: "Требуется проверка шаблона пространства команды",
		offlineTemplate_icon_title: "Шаблон пространства команды находится в автономном режиме",
		offlineTeamspace_icon_title: "Пространство команды находится в автономном режиме",
		pending_delete_icon_title: "Удаление пространства команды отложено",
		delete_error_icon_title: "Удалить пространство команды не удалось",
		defaultTemplate_icon_title: "Шаблон пространства команды по умолчанию",
		teamspace_icon_title: "Пространство команды",
		teamspace_template_icon_title: "Шаблон пространства команды",
		has_bookmark_icon_title: "Есть закладка",
		read_only_icon_title: "Только чтение",
		no_results_were_found: "Никаких результатов не найдено.",
		folder_is_empty: "Папка не содержит данных.",
		no_checked_out_items: "У вас нет никаких зарезервированных элементов.",
		inbasket_is_empty: "Корзина входящих - пустая.",
		worklist_is_empty: "Рабочий список пуст.",
		tracker_milestone_completed: "Выполнено",
		stepprocessor_attachments_title: "Контент",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Заблокировать элементы",
		unlock_items: "Разблокировать элементы",
		checkin_item: "Активировать элемент",

		/* Help */
		learn_more: "Дополнительная информация",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Открыть пространство команды",
		repository_tab_createWorkspace: "Новое пространство команды",
		repository_tab_createWorkspaceTemplate: "Новый шаблон пространств команд",
		repository_tab_DefaultTemplate: "По умолчанию",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Эта задача копирует документы.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "У вас нет полномочий на изменение выбранного шаблона пространств команд.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Вы действительно хотите удалить пространство команды ${0}? <br><br>В репозитории останутся только документы, помещенные в другие папки в репозитории. Любые документы, хранящиеся только в этом пространстве команды, будут удалены.",
		teamspaceDecommissionLabel: "Удалить:",
		teamspaceDecommissionDescription: "При удалении пространства команды это пространство команды будет удалено с сервера: Указывает, как обрабатываются артефакты пространства команды.",
		teamspaceDecommissionOptions: "Опции удаления пространства команды",
		teamspaceDecommissionDeleteAll: "Удалить все артефакты пространства команды",
		teamspaceDecommissionReFileAll: "Заново разместить все артефакты пространства команды",
		teamspaceDecommissionReFileDestination: "Переместить в:",
		teamspaceDecommissionReFileIn: "Заново разместить в",
		teamspaceDecommissionTaskName: "Операция удаления пространства команды",
		teamspaceDecommissionTaskDescription: "Эта операция удаляет пространство команды из репозитория.",
		teamspaceDecommissionDeletionStarted: "Запланировано удаление пространства команды",
		teamspaceDecommissionDeletionConnectionFailed: "Не удалось выполнить операцию по удалению пространства команды, так как она не смогла соединиться с репозиторием. Убедитесь, что учетные данные администратора репозитория являются правильными.",

		teamspace_edit_properties_notsupported: "Вы можете изменить свойства пространств команд только в представлении Пространства команд.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Пространство команды отключено, и его могут открыть только владельцы пространства команды",

		/* Teamspace Builder widget */
		workspace_validation_document: "Документ:",
		workspace_validation_folder: "Папка:",
		workspace_validation_ets: "Следующие шаблоны ввода недоступны в этом репозитории и были удалены из списка выбранных шаблонов ввода:",
		workspace_validation_classes: "Следующие классы недоступны в этом репозитории и были удалены из списка выбранных классов:",
		workspace_validation_searches: "Следующие поиски недоступны в этом репозитории и были удалены из списка выбранных поисков:",
		workspace_validation_docs_folders: "Следующие документы и папки недоступны в этом репозитории и были удалены из списка включенных элементов:",
		workspace_change_template_confirmation_question: "Если вы выберете другой шаблон, все ваши изменения будут утеряны. Продолжить?\n",
		workspace_delete_item_confirmation_question: "Хотите удалить элемент ${0}?\n",
		workspace_delete_role_confirmation_question: "Хотите удалить роль ${0}?\n",
		workspace_delete_confirmation_question: "При удалении пространства команды удаляется только контейнер пространства команды. Папки и документы пространства команды остаются в репозитории, и их можно найти при помощи поиска. Для удаления содержимого пространства команды сначала удалите элементы в этом пространстве, а затем уже и само пространство команды.<br><br>Хотите удалить пространство команды ${0}?",
		workspacebuilder_instance_template_name_header: "Имя шаблона пространств команд",
		workspacebuilder_instance_template_description_header: "Описание",

		workspacebuilder_template_tooltip_name: "Имя шаблона не должно содержать ни одного из следующих символов: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Имя пространства команды не должно содержать ни одного из следующих символов: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Введите описание, которое позволит пользователям сделать правильный выбор из списка шаблонов. Например, можно включить информацию о предполагаемых пользователях или об использовании шаблона.",
		workspacebuilder_instance_tooltip_description: "Введите описание, которое позволит пользователям отличить данное пространство команды от других пространств команд.",

		workspacebuilder_template_edit_properties_pane: "Изменить шаблон пространств команд",
		workspacebuilder_instance_properties_pane: "Задать пространство команды",
		workspacebuilder_template_properties_pane: "Задать шаблон пространств команд",

		workspacebuilder_instance_security_pane: "Задать защиту пространства команды",
		workspacebuilder_template_security_pane: "Задать защиту шаблона",

		workspacebuilder_layout_pane: "Выбрать схему",
		workspacebuilder_search_templates_pane: "Выбрать поиски",
		workspacebuilder_document_folders_pane: "Включить папки и документы",
		workspacebuilder_doctypes_entryTemplates_pane: "Выбрать классы или шаблоны ввода",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Выбрать классы",
		workspacebuilder_security: "Защита пространства команды",

		workspacebuilder_roles_pane: "Выбрать роли",
		workspacebuilder_security: "Защита",

		workspacebuilder_properties_templates: "Доступные шаблоны:",
		workspacebuilder_available_templates: "Доступные поиски:",
		workspacebuilder_selected_templates: "Выбранные поиски:",
		workspacebuilder_templates_name: "Имя поиска",

		workspacebuilder_available_entryTemplates: "Доступные шаблоны ввода:",
		workspacebuilder_selected_entryTemplates: "Выбранные шаблоны ввода:",

		workspacebuilder_item_classes: "Доступные классы:",
		workspacebuilder_item_classes_selected: "Выбранные классы:",
		workspacebuilder_properties_select_template: "Выберите шаблон, который следует использовать для данного пространства команды.",
		workspacebuilder_template_properties: "Задать шаблон пространств команд",
		workspacebuilder_instance_properties: "Задать пространство команды",
		workspacebuilder_template_introText: "Задайте общие компоненты, которые вы хотите включить в каждое пространство команды, создаваемое на основе данного шаблона, используя варианты выбора в панели навигации. Когда закончите, нажмите кнопку <b>Готово</b>, чтобы сделать шаблон доступным другим пользователям, которые смогут использовать его для создания новых пространств команд.",
		workspacebuilder_instance_introText: "Команды используют пространства команд для совместного доступа к определенным наборам документов и работы с ними. Введите понятное имя и описание для этого пространства команды, чтобы пользователи смогли отличить это пространство команды от других пространств команд. Вы можете настроить пространство команды, включив в него дополнительные поиски, классы или шаблоны ввода, документы и папки.",

		workspacebuilder_template_search_template_introText: "Выберите поиски по умолчанию, которые вы хотите включить в каждое пространство команды, создаваемое на основе данного шаблона. Если никаких поисков не выбрано, пользователи пространства команды увидят все поиски, доступ к которым у них есть. При наличии соответствующих разрешений пользователи смогут совместно использовать и добавлять поиски в пространстве команды.",
		workspacebuilder_instance_search_template_introText: "Включите поиски, которые позволят пользователям пространства команды более эффективно выполнять задачи. Если никакие поиски не включены, пользователи пространства команды увидят все поиски, разрешение на доступ к которым у них есть. При наличии соответствующих разрешений пользователи также смогут добавлять и совместно использовать поиски в пространстве команды.",

		workspacebuilder_template_roles_introText: "Пользователям пространства команды назначаются роли. Роли определяют то, какие задачи разрешено выполнять пользователям. Щелкните по значкам рядом с каждой ролью, чтобы увидеть разрешенные задачи. Выберите роли, подходящие для пространства команды.",
		workspacebuilder_template_roles_modify_introText: "Вы можете изменить разрешения, связанные с каждой ролью в этом пространстве команды. Необходимо оповещать участников пространства команды при изменении их разрешений.",

		workspacebuilder_template_roles_header_name: "Имя роли",

		workspacebuilder_template_folders_introText: "Выберите документы и папки по умолчанию, которые должны включаться в каждое пространство команды, создаваемое на основе данного шаблона. Документы можно добавлять в виде ссылок или копий. Используйте ссылки, чтобы указать на документы, копии которых не должны создаваться, например, политики или процедуры. Создавайте копии документов, которые будут изменять пользователи, например, шаблоны и формы.",
		workspacebuilder_instance_folders_introText: "Выберите документы и папки, которые по умолчанию будут включаться в пространство команды. Документы можно добавлять в виде ссылок или копий. Используйте ссылки, чтобы указать на документы, копии которых не должны создаваться, например, политики или процедуры. Создавайте копии документов, которые будут изменять пользователи, например, шаблоны и формы.",

		workspacebuilder_template_roles_introText: "Укажите роли, которые будут включены в каждое пространство команды, созданное на основе данного шаблона. Вы можете создать также новые роли, которые можно использовать при создании других шаблонов пространств команд.",
		workspacebuilder_instance_users_introText: "В пространстве команды каждому пользователю назначается одна или несколько ролей, определяющих, какие задачи может выполнять пользователь. Добавьте пользователей в пространств команды и назначьте роли этим пользователям.",

		workspacebuilder_instance_navigation_pane_title: "Построитель пространств команд",
		workspacebuilder_template_navigation_pane_title: "Построитель шаблонов пространств команд",

		workspacebuilder_roles_roles_nopermissions: "Для роли {0} не выбрано никаких разрешений.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Выбранные роли:",
		workspacebuilder_roles_available_roles: "Доступные роли:",
		workspacebuilder_roles_privilege_header: "Разрешение",
		workspacebuilder_roles_select_role: "Выбрать роль",
		workspacebuilder_roles_select_permission: "Выбрать разрешение",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Роль с именем {0} уже существует. Имя роли должно быть уникальным. ",
		workspacebuilder_roles_edit_dialog_role_name: "Имя роли:",
		workspacebuilder_roles_edit_dialog_role_description: "Описание роли:",
		workspacebuilder_roles_edit_dialog_title_new: "Новая роль",
		workspacebuilder_roles_edit_dialog_title_edit: "Изменить роль",

		workspacebuilder_roles_privileges_header: "Разрешения для роли {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Разрешения на доступ к документам:",
		workspacebuilder_roles_priv_group_folder: "Разрешения на доступ к папкам:",
		workspacebuilder_roles_priv_group_teamspace: "Разрешения на доступ к пространствам команд:",
		workspacebuilder_roles_priv_group_item: "Разрешения на доступ к документам и папкам:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Управление разрешениями",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Пользователи с этим разрешением могут управлять доступом к документам и папкам в пространстве команды. Это разрешение включает предоставление другим пользователям разрешений на удаление, изменение свойств, создание подпапок и т.д.",

		workspacebuilder_roles_priv_deleteItems: "Удалить",
		workspacebuilder_roles_plbl_deleteItems: "Пользователи с этим разрешением могут удалять документы и папки в пространстве команды.",

		workspacebuilder_roles_priv_createItems: "Создать",
		workspacebuilder_roles_plbl_createItems: "Пользователи с этим разрешением могут создавать документы и папки в пространстве команды.",

		workspacebuilder_roles_priv_viewItemProperties: "Просмотреть свойства",
		workspacebuilder_roles_plbl_viewItemProperties: "Пользователи с этим разрешением могут просматривать свойства документов и папок в пространстве команды, включая системные свойства.",

		workspacebuilder_roles_priv_modifyItemProperties: "Изменить свойства",
		workspacebuilder_roles_plbl_modifyItemProperties: "Пользователи с этим разрешением могут изменять свойства документов и папок в пространстве команды.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Управление разрешениями папок",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Пользователи с этим разрешением могут управлять доступом к папкам в пространстве команды. Это разрешение включает предоставление другим пользователям разрешений на удаление папок, изменение свойств папок, создание подпапок и т.д.",

		workspacebuilder_roles_priv_deleteFolders: "Удаление папок",
		workspacebuilder_roles_plbl_deleteFolders: "Пользователи с этим разрешением могут удалять папки в пространстве команды.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Изменение свойств папок",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Пользователи с этим разрешением могут изменять свойства папок в пространстве команды.",

		workspacebuilder_roles_priv_createSubfolders: "Создать подпапки",
		workspacebuilder_roles_plbl_createSubfolders: "Пользователи с этим разрешением могут создавать папки в пространстве команды.",

		workspacebuilder_roles_priv_fileInFolders: "Добавить в папки",
		workspacebuilder_roles_plbl_fileInFolders: "Пользователи с этим разрешением могут добавить ссылки от папок в пространстве команды на документы.",

		workspacebuilder_roles_priv_viewFolderProperties: "Просмотр свойств папок",
		workspacebuilder_roles_plbl_viewFolderProperties: "Пользователи с этим разрешением могут просматривать свойства папок в пространстве команды, включая системные свойства.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Управление разрешениями документов",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Пользователи с этим разрешением могут управлять доступом к документам в пространстве команды. Это разрешение включает предоставление другим пользователям разрешений на удаление документов, изменение свойств документов и т.д.",

		workspacebuilder_roles_priv_deleteDocuments: "Удаление документов",
		workspacebuilder_roles_plbl_deleteDocuments: "Пользователи с этим разрешением могут удалять документы в пространстве команды.",

		workspacebuilder_roles_priv_promoteVersions: "Повышение версий",
		workspacebuilder_roles_plbl_promoteVersions: "Пользователи с этим разрешением могут назначать новые номера версий для документов в пространстве команды.",

		workspacebuilder_roles_priv_modifyContent: "Изменение документов;",
		workspacebuilder_roles_plbl_modifyContent: "Пользователи с этим разрешением могут изменять содержимое документов в пространстве команды.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Изменение свойств документов;",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Пользователи с этим разрешением могут изменять свойства документов в пространстве команды.",

		workspacebuilder_roles_priv_viewContent: "Просмотр документа",
		workspacebuilder_roles_plbl_viewContent: "Пользователи с этим разрешением могут просматривать документы в пространстве команды.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Просмотр свойств документов",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Пользователи с этим разрешением могут просматривать свойства документов в пространстве команды, включая системные свойства.",

		workspacebuilder_roles_priv_addNewSearches: "Добавление поисков",
		workspacebuilder_roles_plbl_addNewSearches: "Пользователи с этим разрешением могут добавлять поиски в пространстве команды. По умолчанию для других пользователей поиск недоступен.",

		workspacebuilder_roles_priv_createNewSearches: "Создание поисков",
		workspacebuilder_roles_plbl_createNewSearches: "Пользователи с этим разрешением могут создавать новые поиски, но не могут их сохранять. Если у пользователей нет этого разрешения, они не могут добавить в пространство команды документы, уже содержащиеся в репозитории.",

		workspacebuilder_roles_priv_shareSearches: "Совместное использование поисков",
		workspacebuilder_roles_plbl_shareSearches: "Пользователи с этим разрешением могут использовать созданные ими поиски совместно с другими пользователями пространства команды.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Управление классами или шаблонами ввода",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Пользователи с этим разрешением могут добавлять и удалять классы или шаблоны ввода в пространстве команды.",

		workspacebuilder_roles_priv_addRemoveClasses: "Управление классами",
		workspacebuilder_roles_plbl_addRemoveClasses: "Пользователи с этим разрешением могут добавлять и удалять классы в пространстве команды.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Управление пользователями пространства команды",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Пользователи с этим разрешением могут добавлять и удалять пользователей и группы из пространства команды. Кроме того, они могут управлять тем, какие роли назначены пользователям.",

		workspacebuilder_roles_priv_modifyRoles: "Изменение ролей",
		workspacebuilder_roles_plbl_modifyRoles: "Владельцы с этим разрешением могут изменять разрешения ролей для пространства команды. Это разрешение доступно только для владельцев.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Выбрать пользователей",
		workspacebuilder_users_add_users_and_groups_button: "Добавить пользователей и группы...",
		workspacebuilder_users_users_or_group_header: "Пользователь и группа",
		workspacebuilder_users_roles_header: "Роли",

		workspacebuilder_users_role_header: "Роль",
		workspacebuilder_users_role_no_permissions: "У этой роли нет разрешений",
		workspacebuilder_users_available_roles_label: "Доступные роли:",
		workspacebuilder_users_selected_users_and_groups_label: "Выбранные пользователи и группы:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Не удается сохранить пространство команды. Нужно задать для этого пространства команды хотя бы одного владельца.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Не удается сохранить пространство команды. Всем пользователям надо назначить роль.",
		// end of select users

		workspacebuilder_search_templates: "Выбрать поиски",
		workspacebuilder_search_add: "Добавить поиск",
		workspacebuilder_properties_workspaceName: "Имя пространства команды:",
		workspacebuilder_properties_templateName: "Имя шаблона:",
		workspacebuilder_properties_workspaceDescription: "Описание пространства команды:",
		workspacebuilder_properties_templateDescription: "Описание шаблона:",
		workspacebuilder_properties_workspaceTemplate: "Выбранный шаблон:",
		workspacebuilder_properties_security: "Использовать шаблон совместно с:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Переместить из пространства команды^",
		moveTeamspaceDocuments_security: "Предоставить совместный доступ к документу:",
		moveTeamspaceDocuments_security_change: "Задать пользовательскую защиту для выбранных элементов",
		moveTeamspaceDocuments_item_type_level: "Вы не можете выбрать переопределение защиты выбранных элементов, так как класс выбранного элемента сконфигурирован для использования только защиты на уровне класса",
		moveTeamspaceDocuments_security_inherit: "Наследовать защиту от папки назначения",
		moveTeamspaceDocuments_file_info_text: "Вы можете переместить элементы из одного пространства команды в другое пространство команды или папку.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "У вас нет соответствующих разрешений на перемещение элементов в выбранную папку.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "У вас нет соответствующих разрешений на перемещение элементов из пространства команды.",
		moveTeamspaceDocuments_move_mixed_items: "Вы не можете переопределить защиту выбранных элементов. Некоторые элементы не управляются пространством команды. Вы можете переопределить только защиту тех элементов, которые управляются пространством команды.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Вы обязательно должны задать имя для пространства команды.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Вы обязательно должны задать имя для шаблона пространств команд.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Имя пространства команды не должно содержать ни одного из следующих символов: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Имя шаблона не должно содержать ни одного из следующих символов: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Связать с документом",
		workspacebuilder_folders_makeDocCopy: "Копировать документ",
		workspacebuilder_folders_newfolder: "Создать папку",
		workspacebuilder_folders_local_drive: "Из локального каталога",
		workspacebuilder_folders_from_repo: "Из репозитория",
		workspacebuilder_folders_add_doc: "Добавить документ",
		workspacebuilder_folders_grid_name: "Имя",
		workspacebuilder_folders_props: "Свойства",
		workspacebuilder_folders_remove: "Удаление",
		workspacebuilder_folders_delete: "Удалить",
		workspacebuilder_folders_adddoc_local: "Добавить документ с локального диска",
		workspacebuilder_folders_adddoc_repo: "Добавить документ из репозитория",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Папка с таким именем уже существует. Задайте другое имя папки.",

		workspacebuilder_classes_title: "Выбрать классы или шаблоны ввода",
		workspacebuilder_classes_title_cm: "Выбрать классы",
		workspacebuilder_classes_template_introText: "Укажите, будут ли пространства команд, созданные на основе этого шаблона, использовать классы или шаблоны ввода для добавления документов в репозиторий. Если классы не выбраны, пространства команд увидят все классы, доступ к которым у них есть. Пользователь может изменить список классов или шаблонов ввода в пространство команды, если у него есть соответствующие разрешения.",
		workspacebuilder_classes_template_introText_cm: "Выберите классы, которые пользователи смогут использовать для добавления документов в репозиторий. Если никаких классов не выбрано, пользователи пространства команды увидят все классы, доступ к которым у них есть. При наличии соответствующих разрешений пользователи могут изменить список классов в пространстве команды.",
		workspacebuilder_classes_instance_introText: "Выберите классы или шаблоны ввода, которые пользователи смогут использовать для добавления документов в репозиторий. Если никаких классов не выбрано, пользователи пространства команды увидят все классы, доступ к которым у них есть. При наличии соответствующих разрешений пользователи могут изменить список классов в пространстве команды.",
		workspacebuilder_classes_instance_introText_cm: "Выберите классы, которые пользователи смогут использовать для добавления документов в репозиторий. Если никаких классов не выбрано, пользователи пространства команды увидят все классы, доступ к которым у них есть. При наличии соответствующих разрешений пользователи могут изменить список классов в пространстве команды.",
		workspacebuilder_classes_selection: "Выбрать классы:",
		workspacebuilder_classes_list: "Доступные классы:",
		workspacebuilder_classes_columns_default: "По умолчанию",
		workspacebuilder_classes_columns_className: "Имя класса",
		workspacebuilder_classes_type_classes: "Использовать классы для добавления документов",
		workspacebuilder_classes_type_classes_tooltip: "У классов есть связанные свойства, чтобы можно было находить документы для последующего использования.",
		workspacebuilder_classes_type_entryTemplates: "Использовать шаблоны ввода для добавления документов",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Шаблоны ввода гарантируют, что информация, введенная для каждого документа, окажется непротиворечивой и что будут использоваться предварительно заданные значения.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Имя шаблона ввода",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Описание",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Необходимо добавить в пространство команды хотя бы один шаблон ввода.",

		workspacebuilder_classes_new: "Новый класс",
		workspacebuilder_classes_add: "Добавить класс",
		workspacebuilder_entryTemplate_add: "Добавить шаблон ввода",
		workspacebuilder_add_list: "Добавить",
		workspacebuilder_makeDefault_list: "Сделать по умолчанию",
		workspacebuilder_removeDefault_list: "Удалить значение по умолчанию",

		workspacebuilder_roles_title: "Выбрать роли",
		workspacebuilder_roles_title_modify: "Изменить роли",

		workspacebuilder_selection_moveup: "Переместить вверх",
		workspacebuilder_selection_movedown: "Переместить вниз",
		workspacebuilder_selection_remove: "Удаление",
		workspacebuilder_selection_add: "Добавить",
		workspacebuilder_selection_create_new_search: "Новый поиск...",
		workspacebuilder_selection_create_new_role: "Новая роль...",
		workspacebuilder_selection_make_role_available: "Сделать доступным",
		workspacebuilder_selection_make_role_available_tooltip: "Позволяет использовать выбранную роль совместно с другими шаблонами. Чтобы совместно использовать роль, нужно назначить для нее хотя бы одно разрешение.",

		workspacebuilder_navigation_next: "Далее",
		workspacebuilder_navigation_finish: "Готово",
		workspacebuilder_navigation_validate: "Проверить",
		workspacebuilder_navigation_previous: "Назад",
		workspacebuilder_navigation_cancel: "Отмена",
		workspacebuilder_navigation_customize: "Настроить",

		workspacebuilder_search_dialog_title: "Поиск",
		workspacebuilder_dialog_close: "Закрыть",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Доступность шаблона:",
		workspace_properties_templateState_tooltip: "Сделайте шаблон недоступным, чтобы запретить пользователям создавать пространства команд с использованием этого шаблона.",
		workspace_properties_dialog_title: "Свойства шаблона",
		workspace_properties_online_radio_option_label: "Сделать доступным",
		workspace_properties_offline_radio_option_label: "Сделать недоступным",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Хотите отменить операцию, не сохраняя изменения?",
		workspacebuilder_cancel_confirmation_button: "Да",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Все недопустимые элементы будут удалены из шаблона, и этот шаблон станет доступен пользователям.  Хотите проверить этот шаблон пространства команды?",
		workspacebuilder_validate_confirmation_button: "Да",
		workspacebuilder_validate_confirmation_title: "Проверить",

		/* Entry templates builder */
		entry_templates: "Менеджер шаблонов ввода",
		no_entry_templates_were_found: "Нет шаблонов ввода",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Отфильтровать",

		/* Roleselector widget */
		role_selector_name: "Роли:",

		/* User Group picker widget */
		directory_label: "Каталог:",
		scope_label: "Найти:",
		name_starts_with_label: "Имя начинается с",
		name_contains_label: "Имя содержит",
		display_name_contains_label: "Имя для вывода содержит",
		starts_with_label: "Начинается с:",
		available_label: "Доступные:",
		available_heading: "Доступные",
		selected_label: "Выбранные:",
		selected_heading: "Выбрано",
		available_repositories_label: "Доступные репозитории",
		selected_repositories_label: "Выбранные репозитории",
		default_repository: "Репозиторий по умолчанию:",
		default_repository_placeholder: "Выберите репозиторий",
		default_role_placeholder: "Выбрать роль",
		menu_label_placeholder: "Выбрать или ввести метку",
		default_repository_hover: "Укажите репозиторий, который будет выбираться по умолчанию, когда пользователи будут входить в систему веб- клиента с этого рабочего стола.<br><br><b>Важно:</b> Прежде чем вы сможете задать репозиторий по умолчанию, вы должны добавить репозитории на рабочий стол списка выбранных репозиториев.",
		default_repository_workflow_hover: "<b>Помните:</b> Вы сможете сконфигурировать пространства программ только для репозиториев, которые сконфигурированы для этого рабочего стола.",
		remove_label: "Удаление",
		users_label: "Пользователи",
		groups_label: "Группы",
		user_or_group_name_label: "Имя пользователя или группы:",
		user_or_group_name_hover: "Введите имя пользователя или группы, которое является действительным в репозитории.  Это имя не проверяется.",
		user: "Пользователь",
		group: "Группа",
		name: "Имя:",
		displayName: "Имя для вывода",
		display_name: "Имя для вывода:",
		shortName: "Краткое имя:",
		distinguishedName: "Отличительное имя:",
		search_tooltip: "Поиск",
		add_tooltip: "Добавить",
		add_selected_tooltip: "Добавить в список выбранного",
		remove_tooltip: "Удаление",
		remove_selected_tooltip: "Удалить из списка выбранного",
		add_to_selected_tooltip: "Добавить",
		remove_from_selected_tooltip: "Удаление",
		move_up_selected_tooltip: "Переместить вверх",
		move_down_selected_tooltip: "Переместить вниз",
		advanced_search_options_tooltip: "Дополнительные параметры",
		move_right_selected_tooltip: "Переместить в подменю",
		move_left_selected_tooltip: "Убрать из подменю",
		add_separator: "Добавить разделитель",
		menu_item_label: "Метка пункта меню:",
		add_menu_label: "Добавить подменю",
		menu_label: "Метка подменю:",
		menu_label_info: "<b>Важно:</b> Прежде чем вы сможете сохранить это меню, вы должны добавить в подменю хотя бы один пункт меню.",
		menu_dropdown_label: "Метка раскрывающейся кнопки:",
		menu_dropdown_label_info: "<b>Важно:</b> Прежде чем вы сможете сохранить эту панель инструментов, вы должны добавить в эту раскрывающуюся кнопку хотя бы один пункт меню.",
		no_item_found: "Никаких результатов не найдено.",
		me: "Я",
		anyone: "Кто угодно",
		specific_users: "Конкретные пользователи",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Поиск возвратил более {0} результатов. Измените критерии, чтобы сузить поиск.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Результаты поиска содержат уже выбранные элементы. Эти элементы не будут показаны в результатах поиска.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Возвращены результаты в количестве более {0}. Используйте фильтр, чтобы сократить число результатов.",

		user_already_selected: "Указанный пользователь уже выбран.  Укажите другого пользователя.",
		group_already_selected: "Указанная группа уже выбрана.  Укажите другую группу.",
		user_cannot_select_self: "Добавить самого себя нельзя. Укажите другого пользователя.",

		/* Select User Group dialog */
		select_user_group_add_label: "Добавить",
		select_user_group_cancel_label: "Отмена",
		add_users_groups_label: "Добавить пользователей и группы",
		add_user_group_label: "Добавить пользователя и группу",
		add_users_label: "Добавить пользователей",
		add_user_label: "Добавить пользователя",
		add_label: "Добавить:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "В следующих документах есть несохраненные изменения аннотаций:",
		viewer_confirm_to_proceed: "Хотите продолжить и потерять изменения?",
		viewer_warn_has_changes: "Ваши несохраненные изменения будут утеряны.",
		viewer_warn_is_printing: "Печать, которая сейчас выполняется, может не завершиться.",
		viewer_warn_confirm_exit: "Вы хотите завершить работу?",
		viewer_prompt_save_changes: "У указанного ниже документа есть несохраненные изменения аннотаций, которые будут потеряны:<br>${0}<br><br>Хотите сохранить изменения?",
		viewer_prompt_mergesplit_changes: "В следующих документах есть несохраненные изменения:<br>${0}<br><br>Хотите продолжить и потерять изменения?",
		viewer_prompt_mergesplit_tab_changes: "В следующем документе есть несохраненные изменения:<br>${0}<br><br>Хотите продолжить и потерять изменения?",
		viewer_new_item_name: "Новый документ",
		viewer_top_frame: "Верхний фрейм:",
		viewer_bottom_frame: "Нижний фрейм:",
		viewer_left_frame: "Левый фрейм:",
		viewer_right_frame: "Правый фрейм:",
		viewer_viewer_frame: "Фрейм программы просмотра:",
		viewer_properties_frame: "Фрейм свойств:",
		viewer_comment_frame: "Фрейм комментариев:",
		viewer_mergesplit_on: "Представление",
		viewer_mergesplit_off: "Объединить и разбить",
		viewer_mergesplit_context_menu_move: "Переместить",
		viewer_mergesplit_context_menu_rename: "Переименовать",
		viewer_mergesplit_context_menu_delete: "Удалить",
		//move to new window
		viewer_move_to_new_window:"Переместить в новое окно",
		viewer_continue:"Отбросить изменения",
		viewer_return_to_original_window:"Вернуться в исходное окно",
		viewer_switch_window:"Переключиться в другое окно",
		viewer_prompt_lost_changes:"Документ ${0} в настоящий момент открыт в другом окне. В этом документе есть несохраненные изменения.<br><br>Хотите переключиться в это окно, чтобы сохранить изменения, или хотите отбросить изменения и открыть документ в данном окне?",
		viewer_mergesplit_fallback_info: "Действие Объединить и разбить можно выполнить только для документов, находящихся в одном и том же репозитории.",
		viewer_tabbed_layout: "Показать в виде вкладок",
		viewer_tabbed_layout_highcontrast: "Вкладки",
		viewer_split_vertical_layout: "Разбить панели на верхнюю и нижнюю",
		viewer_split_vertical_layout_highcontrast: "Верхняя и нижняя",
		viewer_split_horizontal_layout: "Разбить панели на левую и правую",
		viewer_split_horizontal_layout_highcontrast: "Левая и правая",
		viewer_add_vertical_layout: "Новая вкладка снизу",
		viewer_add_vertical_layout_highcontrast: "Нижняя вкладка",
		viewer_add_horizontal_layout: "Новая вкладка справа",
		viewer_add_horizontal_layout_highcontrast: "Правая вкладка",
		viewer_add_horizontal_layout_rtl: "Новая вкладка слева",
		viewer_add_horizontal_layout_rtl_highcontrast: "Левая вкладка",
		viewer_split_properties_layout: "Просмотреть свойства",
		viewer_split_comment_layout: "Просмотр комментариев",
		viewer_split_notelog_layout: "Просмотр журнала примечаний",
		viewer_window_title: "Просмотр ${0}",
		viewer_next_hit: "Показать следующий документ в списке",
		viewer_prev_hit: "Показать предыдущий документ в списке",
		viewer_confrim_more_search_results: "В результатах поиска больше нет доступных для просмотра документов. Хотите получить больше результатов поиска?",
		viewer_confirm_get_next_page: "Список результатов больше не содержит доступных для просмотра элементов. Хотите получить больше результатов поиска?",
		viewer_confirm_get_next_item: "Список результатов содержит дополнительные доступные для просмотра элементы. Хотите просмотреть следующий элемент?",
		viewer_fn_annotation_tooltip: " Кем создано: ${0},  Дата создания: ${1}",
		viewer_box_note_limitation: "Примечания Box можно открывать и просматривать только в отдельном окне.",
		viewer_click_to_open_box_note: "Щелкните здесь, чтобы открыть примечание Box.",
		viewer_box_view_expiring: "Максимальное время, в течение которого вы можете просматривать документ Box, равно 60 минутам. Ваш текущий сеанс закончится через ${0} мин. Если вы хотите продолжить работу с этим документом, его надо сейчас перезагрузить. Хотите перезагрузить документ?",
		viewer_add_dialog_save_as_type: "Сохранить как тип:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Конфликт резервирования",
		viewer_checkout_conflict: "Документ зарезервирован другим пользователем.",
		viewer_checkout_confirm: "Доступна более новая версия документа. Хотите продолжить резервировать документ или хотите заново загрузить программу просмотра с новой версией? Если вы выберете перезагрузку программы просмотра, все несохраненные изменения будут утеряны.",
		viewer_checkout_continue: "Продолжить резервирование",
		viewer_checkout_reload: "Загрузить заново",
		viewer_status_building: "Строится документ...",
		viewer_status_adding: "Добавляется документ...",
		viewer_status_checking_in: "Активируется документ...",

		/* Class Selector Widget */
		include_subclasses_label: "Включить подклассы",
		include_subclasses_label2: "Также производить поиск в подклассах",
		include_subclasses_note: "(Включая подклассы)",
		available_classes_col_header: "Доступные классы",
		single_class_label: "Поиск в одном классе",
		multiple_classes_label: "Поиск в нескольких классах",
		multiple_classes_hover_help: "Выберите эту опцию, чтобы производить поиск более чем в одном классе. Классы могут быть родительскими классами или подклассами. Если вы выберете эту опцию, вы увидите только свойства и значения, которые являются общими для выбранных классов.",
		selected_classes_col_header: "Выбранные классы",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Включая подпапки)",
		favorites_pseudo_node: "\\Избранное\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Вы должны выбрать в репозитории папку, куда нужно добавить документ.",
		no_permission_add_folder: "У вас нет соответствующих разрешений на добавление папок в эту папку.",
		no_permission_add_document: "У вас нет соответствующих разрешений на добавление документов в эту папку.",
		document_already_in_folder: "Документ уже есть в этой папке.",
		cant_move_folder_onto_parent: "Папка уже есть в этой папке.",
		cant_move_folder_onto_self: "Нельзя переместить папку в саму себя или в ее подпапки.",

		/* Workflow Widgets */
		process_application_space: "Пространство программы процесса",
		process_role: "Роль процесса",
		process_inbasket: "Корзина входящих для процесса",
		process_worklist: "Рабочий список",
		process_step_processor: "Рабочий элемент процесса",
		process_tracker: "Отслеживаемый элемент процесса",
		process_info_subject: "Тема",
		process_info_stepname: "Шаг",
		process_info_is_locked: "Блокированный",
		process_info_no_access: "Нет доступа",
		process_info_received_on: "Получено на",
		process_info_overdue: "Просроченный",
		process_info_reminder_sent: "Напоминание отправлено",
		process_info_locked_by_user: "Кем заблокировано",
		process_work_object_number: "Номер рабочего объекта",
		process_deadline: "Срок:",
		process_launchedby: "Кем запущен:",
		process_receivedon: "Получен:",
		process_step: "Шаг:",
		process_properties: "Свойства",
		process_attachments: "Вложения",
		process_attachments_select: "Выберите вложение",
		process_finish_button_label: "Остановить отслеживание",
		process_tracker_history: "Хронология",
		process_tracker_milestones: "Контрольные точки",
		process_tracker_milestone: "Контрольные точки",
		process_tracker_milestone_level: "Уровень",
		process_tracker_milestones_empty: "Нет контрольных точек для вывода на экран.",
		process_tracker_level_selector_label: "Показать уровни контрольных точек вплоть до:",
		process_tracker_map_selector_label: "Фильтровать по карте:",
		process_tracker_message: "Сообщение",
		process_tracker_datereached: "Дата достижения",
		process_tracker_stepname: "Шаг",
		process_tracker_cycle: "Цикл",
		process_tracker_review_cycle: "Цикл пересмотра",
		process_tracker_participant: "Участник",
		process_tracker_completed: "Выполнено",
		process_tracker_response: "Ответ",
		process_tracker_comments: "Комментарии",
		process_tracker_delete_confirmation: "Хотите остановить отслеживание следующего рабочего потока: ${0}?",
		process_tracker_history_allmaps: "Все карты",
		process_tracker_history_workflow: "Рабочий поток",
		process_tracker_history_terminate: "Прервать",
		process_tracker_history_malfunction: "Неполадка",
		process_filter_label: "Отфильтровать",
		process_no_filter_summary: "Никакие фильтры не применяются",
		process_filter_summary: "${0} применены",
		process_filter_reset_tooltip: "При сбросе выбор фильтров отменяется, и корзина входящих обновляется.",
		process_attachments_add_folder: "Добавить папку",
		process_attachments_add_doc: "Добавить документ",
		process_complete_button_label: "Завершено",
		process_save_button_label: "Сохранить",
		process_launch_button_label: "Запустить рабочий поток",
		process_open_button_label: "Открыть",
		process_movetoinbox_button_label: "Переместить в корзину входящих",
		process_return_button_label: "Вернуться",
		process_return_to_sender_tooltip: "Возвратить рабочий элемент в исходную корзину входящих",
		process_move_to_inbasket_tooltip: "Переместить рабочий элемент в личную корзину входящих",
		process_reassign_tooltip: "Переназначить рабочий элемент другому владельцу",
		process_reassign_button_label: "Переназначить",
		process_preferences_button_label: "Предпочтения",
		process_manageroles_button_label: "Управление ролями",
		process_manageroles_no_members: "Нет участников.",
		process_responses_button_label: "Дополнительные ответы",
		process_morecustomaction_button_label: "Остальные действия",
		process_show_instructions: "Показать инструкции",
		process_hide_instructions: "Скрыть инструкции",
		process_remove_attachment: "Удаление",
		process_close_window: "Рабочий элемент обработан.",
		process_delegate_flag: "Потребовать, чтобы текущий владелец утвердил рабочий элемент перед его маршрутизацией на следующий шаг в рабочем потоке.",
		process_paticipant_voting: "Число участников, необходимое для утверждения:",
		process_get_next_label: "Получить следующий рабочий элемент",
		process_no_more_items: "В корзине входящих больше нет элементов для обработки.",
		process_workflow_name: "Имя рабочего потока:",
		process_pattern_process_name: "Пересмотр для ${0}",
		process_instuctions: "Инструкции для проверяющих:",
		process_pattern_deadline: "Срок:",
		process_reviewers: "Проверяющие:",
		process_approvals_required: "Требуются утверждения:",
		process_on_reject: "Этот рабочий элемент отклонен:",
		process_return_to_originator: "Вернуть мне",
		process_return_to_previous_reviewer: "Вернуть предыдущему проверяющему",
		process_additional_settings: "Дополнительные параметры:",
		process_allow_reassign: "Позволить проверяющим переназначать этот пересмотр",
		process_complete_notification: "Сообщить мне, когда пересмотр будет закончен",
		process_workflow_name_hover_help: "Имя, которое вы задаете для этого рабочего элемента, должно помочь проверяющим отличить этот рабочий элемент от других рабочих элементов в их корзинах входящих.",
		process_approvals_required_hover_help: "Если этот рабочий элемент проверяется несколькими сотрудниками одновременно, вы должны указать, сколько утверждений требуется для успешного завершения рабочего элемента.",
		process_approval_options: "Опции утверждения",
		process_all: "Все",
		process_at_least: "Хотя бы",
		process_at_least_by_count: "Хотя бы ${0} проверяющих",
		process_at_least_by_percentage: "Хотя бы ${0}% проверяющих",
		process_comments: "Комментарии:",
		process_review_step_comments_hover_help: "Если вы отклоняете этот рабочий элемент, нужно предоставить информацию, почему это произошло. Эта информация позволит сотруднику, создавшему этот рабочий элемент, или предыдущим проверяющим разрешить указанные вами проблемы.",
		process_rework_step_comments_hover_help: "Необходимо предоставить информацию с вашими ответами на комментарии. Если вы не согласны с комментариями, предоставьте обоснование своей позиции.",
		process_rejection_reason: "Причина отклонения:",
		process_summary: "Сводка",
		process_sequential_review: "Последовательная проверка",
		process_sequential_review_description: "Этот рабочий элемент будет исследоваться проверяющими по порядку.",
		process_parallel_review: "Параллельная проверка",
		process_parallel_review_description: "Этот рабочий элемент будет исследоваться несколькими проверяющими одновременно",
		process_parallel_approvals_required_error: "Слишком большое число требуемых утверждений. Проверяющие заданы только в количестве ${0}.",
		process_parallel_invalid_required_approvals_count: "Недопустимое значение. Значением должно быть ${0}.",
		process_subject_prompt: "Введите тему",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Рабочий элемент:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Просмотреть свойства",
		view_permissions_level: "Просмотреть разрешения",
		view_content_level: "Просмотреть документ",
		link_level: "Ссылка",
		modify_properties_level: "Изменить свойства",
		modify_content_level: "Изменить документ",
		minor_version_level: "Изменить младшую версию",
		major_version_level: "Изменить старшую версию",
		create_instance_level: "Создать экземпляр",
		delete_document_level: "Удалить документ",
		delete_item_level: "Удалить элемент",
		modify_document_permissions_level: "Управление разрешениями",
		modify_folder_permissions_level: "Управление разрешениями",
		modify_owner_level: "Изменить владельца",
		delete_folder_level: "Удалить папку",
		file_in_folder_level: "Добавить в папки",
		create_subfolder_level: "Создать подпапки",
		link_item_level: "Аннотировать документ, Добавить в папку", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Только для документов: Добавить аннотацию к документу или удалить аннотацию из документа</li><li>Только для папок: Добавить элементы в папку или удалить элементы из папки</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Удалить",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Владелец",
		/* previously \"Full control\" */
		edit_privilege: "Автор",
		/* previously \"Edit\" */
		read_only_privilege: "Чтение",
		/* previously \"Read only\" */
		no_access_privilege: "Нет доступа",
		share_with_label: "Совместный доступ вместе с:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Только я",
		public_label: "Все",
		members_label: "Указанные пользователи и группы",
		select_members_label: "Выбрать...",
		select_user_group_label: "Выбор пользователей...",
		select_users_groups_label: "Выбрать пользователей и группы...",
		select_user_label: "Выбрать пользователя...",
		propagation_label: "Распространение:",
		access_label: "Разрешения:",
		add_permission_add_label: "Добавить",
		security_policy_label: "Политика защиты",
		includes_inherited_access: "Включает наследуемое право доступа",
		customize_access_for_label: "Настроить доступ для:",
		customize: "Настроить",
		direct: "Этот элемент",
		singleLevelInheritance: "Один уровень",
		infiniteLevelInheritance: "Все уровни",
		inherited: "Унаследованный",
		direct_hover_help: "Параметры защиты применяются к выбранному элементу",
		singleLevelInheritance_hover_help: "Эти разрешения применяются к данному элементу и к тем его непосредственным потомкам, которые сконфигурированы как наследующие защиту от этого элемента.",
		infiniteLevelInheritance_hover_help: "Эти разрешения применяются к данному элементу и ко всем его потомкам, которые сконфигурированы как наследующие защиту от этого элемента.",
		inherited_hover_help: "Эти разрешения наследуются от родителя.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Эти разрешения для ${0} применяются к данному элементу и к тем его непосредственным потомкам, которые сконфигурированы как наследующие защиту от этого элемента.",
		infiniteLevelInheritance_member_hover_help: "Эти разрешения для ${0} применяются к данному элементу и ко всем его потомкам, которые сконфигурированы как наследующие защиту от этого элемента.",
		inherited_member_hover_help: "Эти разрешения для ${0} наследуются от родителя.",
		partial_hover_help: "Параметры защиты элемента были изменены пользователем",
		allow: "Разрешить",
		deny: "Отказать",
		basic: "Базовый",
		advanced: "Дополнительно",
		permission_type: "Задать доступ для:",
		share_with_hover_help: "Элемент в настоящее время используется совместно со следующими пользователями и группами:",
		direct_security_policy_hover_help: "Параметры этой политики защиты позволяют вам изменить защиту данного элемента.",
		security_policy_hover_help: "Защита этого элемента доступна только для чтения, так как параметры этой политики защиты не позволяют вам изменять защиту данного элемента.",
		security_remove: "Нет разрешений",
		pseudo_group_label: "Учетные записи алиаса",
		marking_hover_help: "Защита этого элемента управляется набором пометок, что может повлиять на защиту элемента.",
		note_label: "Важно:",
		marking_text: "Этот элемент помечен как ${0}. У этого элемента есть дополнительные ограничения безопасности.",
		authenticated_users: "Аутентифицированные пользователи",
		realm_users: "Пользователи в количестве ${0}",
		denyAll: "Отклонить все",
		allowAll: "Разрешить все",
		remove_direct_text: "При сохранении изменений разрешения для этого элемента будут удалены из него.",
		remove_single_inheritance_text: "При сохранении изменений разрешения для этого элемента будут удалены из этого элемента и из <br>его непосредственных потомков, которые сконфигурированы как наследующие защиту от этого элемента.<p>Продолжить?",
		remove_infinite_inheritance_text: "При сохранении изменений разрешения для этого элемента будут удалены из этого элемента и из <br>всех его потомков, которые сконфигурированы как наследующие защиту от этого элемента.<p>Продолжить?",
		remove_inheritance_text: "При сохранении изменений разрешения для этого элемента будут удалены из этого элемента и из <br>всех его потомков, которые сконфигурированы как наследующие защиту от этого элемента. Только те разрешения, которые <br>унаследованы данным элементом, будут сохранены.<p>Продолжить?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Удалить эти разрешения для ${0}",

		security_proxy_text: "Защита этого элемента - возможность доступа только для чтения.",
		security_proxy_declared_text: "Защита этого элемента - только для чтения, так как она была определена прокси защиты.",
		security_proxy_hover_help: "Защита этого элемента управляется параметрами защиты, заданными для другого объекта в репозитории.",
		add_permissions_label: "Добавить разрешения",
		permission_propagation_direct: "Только эта папка",
		permission_propagation_onelevel: "Эта папка и один уровень ниже",
		permission_propagation_alllevels: "Эта папка и все нижележащие уровни",
		document_propagation_label: "Задать доступ для:",
		document_propagation_FOLDER: "Папка",
		document_propagation_DOCUMENT: "Документ",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Источник идентификации:",

		/* Versions Widget */
		object_versions_selector_label: "Версии:",
		object_versions_label: "Версии",
		object_type_document_label: "Документ:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Папки размещения",
		folders_filed_in_folder_col_hdr: "Папка",
		folders_filed_in_path_col_hdr: "Каталог",
		folders_filed_in_containment_name_col_hdr: "Имя ограничения",
		folders_filed_in_creator_col_hdr: "Создатель:",
		folders_filed_in_date_created_col_hdr: "Время создания",

		/* Parent Documents */
		properties_parent_documents_label: "Родительские документы",

		/* Select object dialog */
		select_object_title: "Выбрать элемент",
		select_object_breadCrumb_version_prefix: "Версии для: ",
		show_versions_label: "Показать версии",
		use_current_version_label: "Использовать текущую версию",
		use_released_version_label: "Использовать выпущенную версию",

		/* Select content class dialog */
		select_class: "Выбрать класс",
		/* Select Search dialog */
		select_search: "Выбрать поиск",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Показать ссылку",
		show_hyperlink_intro: "Вы можете скопировать и вставить ссылку в электронные сообщения, чаты и веб-страницы. Если существует несколько версий элемента, укажите, на какую версию должна указывать ссылка.",
		show_hyperlink_intro_no_version_select: "Вы можете скопировать и вставить ссылку в электронные сообщения, чаты и веб-страницы.",
		show_text_label: "Версия:",
		released_button_label: "Выпущенный",
		current_button_label: "Текущая",
		select_button_label: "Указанная версия",
		show_hyperlink_no_released_version_msg: "Выпущенной версии этого документа не существует.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Запустить рабочий поток",
		edit_workflow_title: "Свойства рабочего элемента",
		start_workflow_intro: "Позволяет запустить рабочий поток для обработки выбранных элементов. Если вы хотите назначить рабочие элементы конкретному пользователю, укажите владельца.",
		edit_workflow_intro: "Вы можете изменять свойства выбранных рабочих элементов. Если вы хотите переназначить рабочий элемент другому пользователю, укажите владельца.",
		workflow_field_label: "Рабочий поток:",
		priority_field_label: "Приоритет:",
		owner_field_label: "Владелец:",
		start_button_label: "Запустить",
		save_button_label: "Сохранить",
		owner_value_hint: "Введите строку алфавитно-цифровых символов, содержащую не более 32 символов. Строка может содержать только пробелы или следующие символы: a-z, A-Z, 0-9 и ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Элементы содержимого",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Недопустимое значение. Значение может содержать только пробелы или следующие символы: a-z, A-Z, 0-9 и ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Введите значение от 1 до 32000, чтобы указать важность рабочего элемента.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Недопустимое значение. Приоритет должен представлять собой значение от 1 до 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Имя рабочего потока не существует.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Приостановить в рабочем потоке",
		suspend_workitems_intro: "При приостановке рабочего элемента в рабочем потоке рабочий элемент нельзя обработать, пока его обработку  не возобновят.",
		suspend_workitems_options_label: "Приостановить выбранные рабочие элементы:",
		suspend_until_resume_label: "До возобновления обработки вручную",
		suspend_until_date_label: "До",
		suspend_for_duration_label: "На",
		suspend_for_duration_hours: "ч.",
		suspend_for_duration_days: "дн.",
		suspend_for_duration_weeks: "нед.",
		suspend_for_duration_months: "мес.",
		suspend_for_duration_years: "гд.",
		suspend_button_label: "Приостановить",
		suspend_duration_value_hint: "Введите значение от 1 до 99 в качестве продолжительности.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Недопустимое значение. Значение должно находиться в диапазоне от 1 до 99.",

		/* Remove from workflow */
		remove_workflow_title: "Удалить из рабочего потока",
		remove_workflow_confirmation: "Хотите удалить выбранные элементы из рабочего потока?<br>Число выбранных элементов: ${0}.",
		remove_workflow_button_label: "Удаление",

		/* Unfile dialog */
		unfile_dialog_title: "Удалить из папки",
		unfile_dialog_remove_from_folder_label: "Удалить из:",
		unfile_dialog_info_text: "Вы можете удалять элементы из папок. Однако при удалении элемента из всех папок он не удаляется из репозитория. Вы все равно сможете получить элемент, выполнив поиск. В этом списке показаны только папки, на просмотр которых у вас есть разрешение.",
		unfile_dialog_select_all: "Выбрать все",
		unfile_dialog_deselect_all: "Очистить все",
		unfile_dialog_remove_button_label: "Удаление",
		unfile_dialog_select_folder_col_hdr: "Выбор папки",
		unfile_dialog_folder_col_hdr: "Папка",
		unfile_dialog_path_col_hdr: "Каталог",
		unfile_dialog_not_filed_msg: "Этого элемента нет ни в одной из папок.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "У вас нет необходимых разрешений на удаление этого элемента ни из каких папок, в которых этот элемент находится.",
		unfile_dialog_folder_not_selectable_tooltip: "У вас нет необходимых разрешений на удаление этого элемента из данной папки.",
		unfile_multi_prompt: "Хотите удалить выбранные элементы из папки ${0}?",
		unfile_large_number_items_confirmation_question: "Выбранные элементы ${0} будут удалены из папки ${1}.<br/>Удаление большого количества элементов из папки может занять продолжительное время.<br/>Продолжить?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Открыть",
		move_to_folder_title: "Переместить в папку",
		move_to_folder_button_caption: "Переместить",
		move_to_folder_label: "Переместить в:",
		add_to_folder_title: "Добавить в папку",
		add_to_folder_button_caption: "Добавить",
		add_to_folder_label: "Добавить в:",
		copy_to_folder_title: "Копировать в папку",
		copy_to_folder_button_caption: "Копировать",
		copy_to_folder_label: "Копировать в:",
		copy_to_folder_delete_label: "По завершении копирования удалите выбранные элементы из Box.",
		move_from_folder_label: "Переместить из:",
		move_file_info_text: "Вы можете перемещать элементы из одной папки в другую.",
		move_folder_info_text: "Вы можете перемещать папки из одной родительской папки в другую.",
		add_doc_to_folder_info_text: "Вы можете добавить элементы в одну или несколько папок. Если элемент уже есть в папке, он останется в этой папке и будет добавлен во все дополнительные папки, которые вы указали.",
		copy_doc_to_folder_info_text: "Вы можете скопировать элементы в папку.",
		box_copy: "Копия Box",
		box_copy__button_caption: "Копировать",
		box_copy_to_info_text: "Выберите репозиторий и папку, куда вы хотите скопировать выбранные элементы из Box.",
		box_copy_from_info_text: "Выберите репозиторий и папку, куда вы хотите скопировать выбранные элементы из Box.",
		box_copy_version_info_text: "Чтобы добавить новый документ, выберите репозиторий и папку. Чтобы активировать новую версию, выберите репозиторий и документ.",
		admin_box_copy: "Копия Box",
		admin_box_copy_hover: "Эта опция позволяет пользователям скопировать документы в Box.",

		no_permission_to_copy_version_msg: "Вы не можете скопировать документ из Box как новую версию выбранного документа. Либо у вас нет необходимых разрешений на изменение выбранного документа, либо выбранный документ зарезервирован кем-либо еще.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "У вас нет необходимых разрешений на удаление этого элемента ни из каких папок, в которых этот элемент находится.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "У вас нет необходимых разрешений на удаление этого элемента из данной папки.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Этот элемент нельзя переместить, так как он не помещен ни в какие папки. Выберите другой элемент.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Запустить рабочий поток",
		subscriptions_dialog_available_items_label: "Доступные элементы:",
		subscriptions_dialog_info_text: "Укажите, какой рабочий поток нужно запустить.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Имя",
		subscriptions_dialog_desc_col_hdr: "Описание",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Управление ролями",
		manageroles_dialog_info_text: "Вы можете изменить список пользователей для каждой роли, связанной с пространством прикладных программ этого процесса.",
		manageroles_dialog_members_label: "Члены группы",
		manageroles_dialog_roles_label: "Роли",
		manageroles_dialog_add_button_label: "Добавить пользователей и группы",
		manageroles_dialog_remove_button_label: "Удаление",
		manageroles_dialog_save_button_label: "Сохранить",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "С этим элементом не связаны никакие рабочие потоки.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Свойства рабочего потока",
		workflow_pref_dialog_info_text: "Укажите события рабочего потока, для которых вы хотите получать уведомления по электронной почте. Вы также можете включить опцию маршрутизации вашей работы другому сотруднику, выбрав пользователя, которому следует делегировать работу.",

		workflow_pref_general: "Общие",
		workflow_pref_email_address: "Адрес электронной почты",
		workflow_pref_email_address_hover: "Укажите адрес электронной почты, по которому вы хотите получать уведомления рабочего потока.",
		workflow_pref_preferred_locale: "Язык",
		workflow_pref_preferred_locale_hover: "Задает язык, на котором будут показаны уведомления электронной почты.",

		workflow_pref_work_item_notice: "Уведомления рабочего элемента",
		workflow_pref_step_new_assignment: "Мне назначен новый рабочий элемент",
		workflow_pref_step_new_assignment_hover: "Уведомить меня, когда я получу новый рабочий элемент.",
		workflow_pref_step_expired_deadline: "Предельный срок рабочего элемента прошел",
		workflow_pref_step_expired_deadline_hover: "Уведомить меня, если я пропустил предельный срок рабочего элемента.",
		workflow_pref_step_reminders: "Приближается предельный срок рабочего элемента",
		workflow_pref_step_reminders_hover: "Напомнить мне о рабочем элементе при приближении его предельного срока.",

		workflow_pref_originator_notice: "Уведомления для инициатора",
		workflow_pref_milestone_reached: "Достигнут этап",
		workflow_pref_milestone_reached_hover: "Уведомить меня о достижении этапа для рабочего потока, который я запустил.",

		workflow_pref_tracker_notice: "Уведомление отслеживания рабочего потока",
		workflow_pref_tracker_new_assignment: "Мне назначен новый элемент отслеживания",
		workflow_pref_tracker_new_assignment_hover: "Уведомить меня при запуске рабочего потока, который я отслеживаю.",
		workflow_pref_tracker_deadline_reminders: "Приближается предельный срок рабочего потока",
		workflow_pref_tracker_deadline_reminders_hover: "Напомнить мне о рабочем потоке при приближении предельного срока рабочего потока.",
		workflow_pref_tracker_deadline_expired: "Предельный срок рабочего потока прошел",
		workflow_pref_tracker_deadline_expired_hover: "Уведомить меня, если пройдет предельный срок рабочего потока.",
		workflow_pref_tracker_exception: "Произошла ошибка рабочего потока",
		workflow_pref_tracker_exception_hover: "Уведомить меня, если произойдет исключение рабочего потока или ошибка.",
		workflow_pref_tracker_expired_deadline: "Предельный срок шага прошел",
		workflow_pref_tracker_expired_deadline_hover: "Уведомить меня, если пройдет предельный срок для шага рабочего потока, который я отслеживаю.",
		workflow_pref_tracker_milestone_reached: "Достигнут этап",
		workflow_pref_tracker_milestone_reached_hover: "Уведомить меня о достижении этапа для рабочего потока, который я отслеживаю.",

		workflow_pref_out_notice: "Не на работе",
		workflow_pref_proxy_user: "Делегировать работу",
		workflow_pref_proxy_user_hover: "Используйте эту опцию, чтобы автоматически направлять вашу работу другому пользователю, например, если вас нет в офисе или если вы находитесь в отпуске.",
		workflow_pref_workflow: "Рабочий поток",
		workflow_pref_on: "Включить",
		workflow_pref_off: "Отключить",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Запустить рабочий поток",
		transfered_workflows_dialog_info_text: "Выберите рабочий поток для запуска.",
		transfered_workflows_dialog_available_items_label: "Доступные элементы:",
		transfered_workflows_dialog_select_button_label: "Запуск",
		transfered_workflows_dialog_name_col_hdr: "Имя",
		transfered_workflows_dialog_no_item_found: "Никаких переданных рабочих потоков не найдено.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Передача рабочего потока",
		transfer_workflow_dialog_info_text: "Выберите рабочий поток для передачи в систему рабочих потоков.",
		transfer_workflow_dialog_use: "Использовать это имя рабочего потока",
		transfer_workflow_dialog_use_another: "Использовать другое имя рабочего потока",
		transfer_workflow_dialog_in_use: "Имя рабочего потока: ",
		transfer_workflow_dialog_transfer_button_label: "Передача",
		transfer_workflow_dialog_no_items_found: "Никаких переданных рабочих потоков не найдено.",
		transfer_workflow_dialog_use_hover: "Задайте имя текущего рабочего потока из определения рабочего потока.",
		transfer_workflow_dialog_another_hover: "Задайте другое имя рабочего потока или для повторного использования существующего переданного имени рабочего потока.",

		/*Search In control*/
		search_in_title: "Поиск в:",
		search_in_teamspaces: "Пространства команд",
		search_in_repositories: "Репозитории",
		search_in_thisteamspaces: "Данное пространство команды",

		ajaxViewer_save: "Сохранить комментарии",
		ajaxViewer_print: "Предварительный просмотр печати",
		ajaxViewer_firstPage: "Первая страница",
		ajaxViewer_previousPage: "Предыдущая страница",
		ajaxViewer_nextPage: "Следующая страница",
		ajaxViewer_lastPage: "Последняя страница",
		ajaxViewer_unknownPageCount: "1 из ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} из ${1}",
		ajaxViewer_zoomOut: "Уменьшить масштаб",
		ajaxViewer_zoomIn: "Увеличить масштаб",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "По ширине",
		ajaxViewer_fitHeight: "По высоте",
		ajaxViewer_fitPage: "На всю страницу",
		ajaxViewer_rotate270: "Повернуть на 270 градусов",
		ajaxViewer_rotate90: "Повернуть на 90 градусов",
		ajaxViewer_rotate180: "Перевернуть",
		ajaxViewer_darken: "Уменьшить яркость",
		ajaxViewer_lighten: "Увеличить яркость",
		ajaxViewer_lessContrast: "Уменьшить контрастность",
		ajaxViewer_moreContrast: "Увеличить контрастность",
		ajaxViewer_invert: "Инвертирование",
		ajaxViewer_createHighlight: "Выделение",
		ajaxViewer_createNote: "Аннотировать",
		ajaxViewer_editAnnotation: "Изменить свойства комментария",
		ajaxViewer_deleteAnnotation: "Удалить комментарий",
		ajaxViewer_editAnnotationTitle: "Изменить свойства комментария",
		printableView_print: "Печать",
		printableView_close: "Закрыть",

		search_results_dropdown_button: "Представление результатов",
		search_results_columns_label: "Представление результатов поиска",
		search_results_columns_description: "Выберите свойства, которые должны быть показаны в результатах поиска.",
		search_results_sortby_label: "Сортировать по:",
		search_results_order_label: "Порядок сортировки:",
		search_results_accending_label: "В возрастающем порядке",
		search_results_descending_label: "В убывающем порядке",
		search_results_available_properties: "Доступные",
		search_results_selected_properties: "Выбрано",
		search_rank_property: "Ранг (только текстовый поиск)",
		search_name_attribute: "Имя (${0})",
		search_results_summary_enabled_label: "Включить сводки содержимого (только текстовый поиск)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Поиски",
		manage_teamspace_classes_tab_title: "Классы",
		manage_teamspace_entry_templates_tab_title: "Шаблоны ввода",
		manage_teamspace_team_tab_title: "Совместная работа",
		manage_teamspace_roles_tab_title: "Роли",
		manage_teamspace_dialog_title: "Изменить пространство команды",
		manage_teamspace_button_label: "Изменить пространство команды",
		manage_teamspace_team_pane_heading: "Выбрать команду",
		manage_teamspace_classes_pane_heading: "Выбрать классы",
		manage_teamspace_entry_templates_pane_heading: "Выбрать шаблоны ввода",
		manage_teamspace_no_rights_message: "У вас нет соответствующих разрешений на изменение этого пространства команды.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Свойства пространство команды",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Задайте свойства, которые будут показаны для документов папок в списке содержимого, когда пользователи производят обзор пространства команды. Также можно задать порядок расположения свойств.",
		teamspace_props_sel_cols_use_default_label: "Используйте параметры на странице <b>Обзор</b> для этого репозитория.",
		teamspace_props_sel_cols_use_default_tooltip: "Используйте параметры, заданные на странице Обзор для данного репозитория в утилите администрирования.",
		teamspace_props_general_tab_label: "Общие",
		teamspace_props_column_props_tab_label: "Показанные свойства",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Выберите файл для импорта",
		teamspace_import_template_instruction: "Вы можете выбрать для импорта файл экспорта шаблона пространства команды.",
		teamspace_import_template_button_label: "Импорт",
		teamspace_import_template_dialog_label: "Импорт шаблона пространства команды",

		/* Annotation Dialog */
		annotationDlg_title: "Аннотации",
		annotationDlg_description: "У выбранного документа есть следующие аннотации.",
		annotationDlg_msg_noAnnotations: "Никаких аннотаций не существует. Нажмите Добавить, чтобы добавить аннотацию.",
		annotationDlg_pageLabel: "Страница: ${pageNum}",
		annotationDlg_accLabel: "ДОСТУП: ${accType}",
		annotationDlg_accLabel_public: "Общедоступный",
		annotationDlg_accLabel_private: "Частный",
		annotationDlg_accLabel_privateGroup: "Частный (${groupName})",
		annotationDlg_copiable: "Можно скопировать на другой сервер",
		annotationDlg_cannotCopy: "Нельзя скопировать на другой сервер",
		annotationDlg_addButtonLabel: "Добавить",

		/* Share Dialog */
		is_shared: "Используется совместно",
		is_share_pending: "Совместное использование отложено",
		share_title: "Совместное использование Box",
		share_instructions_new: "Отправьте электронную почту, содержащую ссылку на совместно используемый файл. Доступ к файлу сможет получить кто угодно, у кого будет эта ссылка.",
		share_instructions_existing: "Отправьте электронную почту, содержащую ссылку на совместно используемый файл. Доступ к файлу сможет получить кто угодно, у кого будет эта ссылка. Эта ссылка может оказаться у других физических лиц, так как кто-то уже предоставил совместный доступ к этому файлу.",
		share_instructions_another_version_shared: "Отправьте электронную почту, содержащую ссылку на совместно используемый файл. Доступ к файлу сможет получить кто угодно, у кого будет эта ссылка. Эта ссылка может оказаться у других физических лиц, так как кто-то уже предоставил совместный доступ к другой версии этого файла.",
		share_buttonLabel_share: "Совместное использование",
		share_email_addresses: "Отправить в:",
		share_email_addresses_hover: "По завершении совместного использования ссылка отправляется по этим адресам электронной почты. Если вы ничего не введете, ссылка будет отправлена по вашему собственному адресу электронной почты.",
		share_email_addresses_reshare_hover: "По завершении совместного использования ссылка отправляется по этим адресам электронной почты. Если вы ничего не введете, никакой электронной почты отправлено не будет.",
		share_password: "Задать пароль:",
		share_password_placeholder: "Необязат.",
		share_comments: "Сообщение:",
		share_comments_default: "Я бы хотел использовать мой файл совместно с вами в Box.",
		share_myEmail: "Отправить из:",
		share_expiration: "Задать срок окончания действия ссылки:",
		share_expire: "Срок доступа истекает:",
		share_expire_none: "Никогда не истекает",
		share_allowDownload: "Разрешить загрузку",
		share_add: "Добавить",
		share_advanced_instructions: "Параметры загрузки, окончания действия и пароля применяются к совместно используемому файлу в Box.",
		share_advanced_existing_instructions: "Параметры загрузки, окончания действия и пароля применяются к совместно используемому файлу в Box.",
		share_options_edit_warning: "Важно: Любые изменения этих параметров влияют на всех, у кого есть ссылка, включая тех, у кого она уже есть.",
		share_link: "Ссылка:",
		share_email_addresses_placeholder: "Адреса электронной почты",
		share_email_address_placeholder: "Адрес электронной почты",
		share_email_address_invalid: "Введите действительный адрес электронной почты.",
		share_cannot_share_with_self: "Вы не можете использовать файлы совместно сами с собой. Укажите другого пользователя.",
		share_selected_version_with_minor_warning_hover: "Версия ${0} документа является совместно используемой. Вы выбрали версию ${1}.<br><br><b>Предупреждение</b>: Если вы совместно используете версию ${1}, никто не сможет совместно использовать версию ${2}, если вы не удалите совместное использование для версии ${1}.",
		share_selected_version_hover: "Версия ${0} документа является совместно используемой. Вы выбрали версию ${1}.",
		share_selected_version_message: "Важно: Версия ${0} документа является совместно используемой. Вы выбрали версию ${1}.",
		share_different_version_message: "Важно: Вы выбрали версию ${1}, но версия ${0} документа уже используется совместно.  Вы не можете совместно использовать версию ${1}, если не удалите сначала совместное использование, но вместо этого вы можете совместно использовать ссылку на версию ${0}.",
		share_version_message: "Важно: Версия ${0} документа является совместно используемой. Выберите версию, которую вы хотите совместно использовать.",
		share_version_new: "Совместно использовать версию ${0}",
		share_version_new_p8_hover: "При совместном использовании этого документа создается ссылка на определенную версию только для выбранной версии.<br><br>Если документ уже используется совместно:<ul><li>Вы можете совместно использовать более новую версию, и ссылка перенаправит к более новой версии.</li><li>Вы не сможете совместно использовать более раннюю версию, если не удалите сначала совместное использование.</li></ul>",
		share_version_new_cm_hover: "При совместном использовании этого документа создается ссылка на определенную версию только для выбранной версии.<br><br>Если документ уже используется совместно:<ul><li>Вы можете совместно использовать более новую версию, и ссылка перенаправит к более новой версии.</li><li>Вы не сможете совместно использовать более раннюю версию.</li></ul>",
		share_version_update: "Совместно использовать версию ${0} (обновить опции совместного использования).",
		share_version_update_p8_hover: "При совместном использовании этого документа сохраняется ссылка только на определенную версию.<br><br>Если документ уже используется совместно:<ul><li>Вы можете совместно использовать более новую версию, и ссылка перенаправит к более новой версии.</li><li>Вы не сможете совместно использовать более раннюю версию, если не удалите сначала совместное использование.</li></ul>",
		share_version_update_cm_hover: "При совместном использовании этого документа сохраняется ссылка только на определенную версию.<br><br>Если документ уже используется совместно:<ul><li>Вы можете совместно использовать более новую версию, и ссылка перенаправит к более новой версии.</li><li>Вы не сможете совместно использовать более раннюю версию.</li></ul>",
		share_version_change_to_current: "Совместно использовать версию ${0} (обновить совместное использование с учетом выбранной версии).",
		share_version_change_to_current_p8_hover: "При совместном использовании этого документа обновляется ссылка только на выбранную версию.<br><br>Если документ уже используется совместно:<ul><li>Вы можете совместно использовать более новую версию, и ссылка перенаправит к более новой версии.</li><li>Вы не сможете совместно использовать более раннюю версию, если не удалите сначала совместное использование.</li></ul>",
		share_version_change_to_current_cm_hover: "При совместном использовании этого документа обновляется ссылка только на выбранную версию.<br><br>Если документ уже используется совместно:<ul><li>Вы можете совместно использовать более новую версию, и ссылка перенаправит к более новой версии.</li><li>Вы не сможете совместно использовать более раннюю версию.</li></ul>",
		share_repository: "Репозиторий для совместно используемых файлов",
		share_repository_hover: "Если вы не видите репозиторий Box, который вы хотите использовать, вы можете добавить новый репозиторий Box на страницу Репозитории.",
		share_options: "Опции совместного использования",
		unshare_confirm: "Если вы удалите совместное использование, все ссылки на совместное использование будут нарушены, включая ссылки на совместное использования, которые ранее были отправлены другими пользователями. Любые другие пользователи, которые хотят использовать документ совместно, должны будут выбрать исходный документ и снова задать его совместное использование.<br><br>Вы действительно хотите удалить совместное использование?",
		unshare_button: "Удалить совместное использование Box",
		admin_share: "Службы совместного использования Box:",
		admin_share_hover: "Разрешить пользователям совместно использовать документ из любого репозитория, в котором включен совместно используемый ресурс Box. Совместное использование документа включает в себя копирование файла в Box, создание ссылки и отправку ссылки по электронной почте.",
		admin_my_email_modifiable: "Разрешить пользователям изменять исходящий адрес электронной почты",
		admin_my_email_modifiable_hover: "По умолчанию в случае совместного использования Box адрес электронной почты пользователя доступен только для чтения и его получают из отображения адресов пользователей и электронной почты, соответствующих учетным записям пользователей Box.<br><br>Выберите эту опцию, чтобы разрешить пользователям изменять их адреса электронной почты при совместном использовании; однако действительность этих адресов не будет проверена.",
		admin_repos_admin_user: "Администратор совместного использования:",
		admin_repos_admin_user_hover: "Задайте администратора совместного использования, если у вас включен рабочий стол со службами совместного использования Box и этот репозиторий Box выбран в качестве репозитория для совместно используемых файлов.<br><br>Щелкните по Задать и войдите в систему Box, используя действительную учетную запись администратора Box.<br><br>Администратор совместного использования должен быть пользователем-администратором Box, сконфигурированным для неограниченного хранения в Box.",
		admin_repos_admin_user_not_set_warning: "Администратор Box не сконфигурирован для выбранного репозитория.<br><br>Службы совместного использования Box будут выключены, пока вы не зададите администратора Box для выбранного репозитория или не выберете другой репозиторий Box, в котором сконфигурирован администратор Box.<br><br>Вы можете задать администратора Box в службах совместного использования Box на странице Общие для репозитория.",
		admin_share_not_configured_warning: "Чтобы использовать службы Box, необходимо сначала добавить и выбрать репозиторий Box с аутентификацией на сервере.",
		/* Office Online Server settings */
		admin_office_online_title: "Конфигурация Office Online",
		admin_office_online_server_enable: "Сервер Office Online",
		admin_office_online_server_enable_hover: "Укажите, хотите ли вы, чтобы пользователи, которые получают доступ к этому рабочему столу, могли изменять свои документы Office с использованием сервера Office Online.",		
		admin_office_online_allow_collaborative_editing: "Разрешить совместное редактирование",
		admin_office_online_allow_collaborative_editing_hover: "Разрешить нескольким пользователям работать с одним и тем же документом. Отключите эту опцию, если вы хотите ограничить число редактирующих документы одним пользователем.",
		admin_office_online_repository_not_set_warning: "Чтобы можно было включить службу Office Online, вы сначала должны включить эту службу в репозитории и указать URL сервера Microsoft Office Online. Щелкните по <b>Репозитории</b>, выберите репозиторий, а затем включите эту службу на вкладке <b>Изменить интеграцию</b>. Щелкните по <b>Параметры > Общие</b> и введите URL сервера Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Укажите, хотите ли вы использовать сервер Office Online для работы с документами Office.",
		admin_office_online_server_url: "URL сервера Microsoft Office Online",
		admin_office_online_server_url_hover: "Задайте URL, используя который, другие приложения смогут взаимодействовать с сервером Office Online. Формат URL http://имя_сервера:номер_порта/hosting/discovery.",
		admin_office_online_server_Verified: "Проверено",
	    admin_office_online_server_Failed: "<b>Завершено неудачно</b>",

		admin_repcfg_office_online_service_p8_hover: "Чтобы инициализировать репозиторий для использования сервера Office Online, можно добавить начальный файл шаблона для каждой из программ Office. Если шаблон не задан, будет использоваться шаблон по умолчанию.",	
		admin_repcfg_office_online_server_integration: "Интеграция сервера MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Чтобы можно было включить сервер Office Online, вы сначала должны указать URL сервера Microsoft Office Online. Щелкните по Параметры > Общие и введите URL",
		admin_repcfg_office_online_word_template_name: "Шаблон Word по умолчанию",
		admin_repcfg_office_online_excel_template_name: "Шаблон Excel по умолчанию",
		admin_repcfg_office_online_powerpoint_template_name: "Шаблон PowerPoint по умолчанию",
		admin_repcfg_office_online_blank_template_description: "Это шаблон по умолчанию, который используется, если вы не добавили свой собственный шаблон.",
		/* Edit Service settings */
		admin_icn_edit_title: "Изменить конфигурацию",	
	    admin_icn_edit_files_cleanup_interval: "Интервал очистки временных файлов (в днях):",
	    admin_icn_edit_files_cleanup_interval_hover: "Вы можете задать время, в течение которого временные файлы хранятся на клиенте ICN Edit. Время по умолчанию - 20 дней. Максимальное время равно 20 дням. Минимальное время - 1 день.",
	    admin_icn_edit_service_integration: "Изменить интеграцию служб",
	    admin_icn_edit_service_integration_intro: "Служба редактирования упрощает пользователям добавление и изменение файлов в собственных приложениях, установленных на их компьютерах.<br><br><b>Важно:</b> Если вы включите службу службы редактирования, вы должны сохранить конфигурацию репозитория до изменения заранее заданных категорий.",
		admin_icn_edit_service: "Служба редактирования:",
		admin_icn_edit_enable_hover: "Чтобы использовать службу редактирования, вы должны:<ul><li>Включить службу для репозитория</li><li>Включить службу на рабочих столах в вашей среде</li><li>Установить клиент редактирования IBM Content Navigator на рабочих станциях пользователей</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Включить",
		admin_icn_edit_disable: "Выключить",
		admin_icn_edit_create_new_category: "Новая категория",
		admin_icn_edit_delete_category: "Удалить категорию",
		admin_icn_edit_edit_category: "Изменить категорию",
		admin_icn_edit_disable_category: "Выключить категорию",
		admin_icn_edit_enable_category: "Включить категорию",
		admin_icn_edit_new_category_dialog_title: "Новая категория",
		admin_icn_edit_edit_category_dialog_title:"Изменить категорию",
		admin_icn_edit_new_category_dialog_instructions: "Категория документов позволяет связывать шаблоны с определенными типами MIME для службы редактирования. Например, можно связать набор шаблонов с файлами PDF, чтобы пользователи могли применять шаблоны при добавлении или изменении файлов с клиента изменений IBM Content Navigator. <br><br><b>Важно:</b> Прежде чем вы сможете добавлять шаблоны в созданную вами категорию, вы должны сохранить конфигурацию репозитория. ",
		admin_icn_edit_edit_category_dialog_instructions: "Прежде чем вы сможете добавлять шаблоны в эту категорию, вы должны сохранить конфигурацию репозитория. ",
		admin_icn_edit_delete_category_dialog_instructions: "Хотите удалить эту категорию и все шаблоны, связанные с категорией?<br><br><b>Важно:</b> Ваши изменения не будут постоянными, если вы не сохраните изменения в репозитории. ",
		admin_icn_edit_category_label: "Категория: ",
		admin_icn_edit_category_discription_label:"Описание ",
		admin_icn_edit_template_column_head:"Имя шаблона",
		admin_icn_edit_category_duplicate_error_message: "Категория с этим ID уже существует. ",
		admin_icn_edit_word_category_description: "Эта категория задает доступные шаблоны для документов Microsoft Word в службе изменений. ",
		admin_icn_edit_excel_category_description: "Эта категория задает доступные шаблоны для документов Microsoft Excel в службе изменений. ",
		admin_icn_edit_powerpoint_category_description: "Эта категория задает доступные шаблоны для документов Microsoft PowerPoint в службе изменений. ",

		icn_edit_add_template_dialog_title:"Добавить шаблон ${0}",
		icn_edit_add_template_only_one_file_error: "Можно выбрать только один файл.",
		icn_edit_add_template_file_type_error: "Нужно задать действительный файл шаблона ${0}.<br><br>У выбранного документа тип MIME - ${1}.<br><br>Допустимые типы MIME: ${2}.",
		icn_edit_change_template_dialog_title: "Изменить шаблон ${0}",
		icn_edit_action_in_new_menu_name:"Документ ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "с Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "с приложениями рабочего стола",
		icn_edit_new_document_dialog_title: "Новый документ ${0}",
		icn_edit_new_document_dialog_intro: "Создайте новый документ ${0} и добавьте его в репозиторий. Документ будет создан с использованием выбранного шаблона службы изменений.", 
		icn_edit_select_edit_service_template: "Выбрать шаблон",
		icn_edit_edit_service_template: "Шаблон службы редактирования:",
		icn_edit_new_document_category_no_templates_message:"В этой категории нет никаких шаблонов. Чтобы добавить шаблоны в эту категорию, обратитесь к своему администратору.",
		icn_edit_installer: "Программа установки изменений IBM Content Navigator",
		admin_icn_cm_classes_and_roles_settings: "Параметры классов и ролей",
		admin_repcfg_classes_and_roles_warning: "Позволяет указать классы и пользователей или группы пользователей, у которых есть разрешение на создание, изменение и использование шаблонов либо на создание черновиков документов, работающих с Office Online Service и службы редактирования.",
		admin_repcfg_classes_and_roles_click_warning: "щелкните здесь.",
		/* Edit Service settings END */
		share_no_my_email_error: "Произошла ошибка при определении адреса электронной почты, который требуется для совместного использования документа.",
		share_no_my_email_error_explanation: "Вы вошли в систему, указав ID пользователя ${0}, но ID пользователя не отображен в адрес электронной почты.",
		share_no_my_email_error_userResponse: "Попробуйте снова войти в систему или войти в систему, используя другой ID пользователя. Если проблема сохранится, сообщите об этой ошибке вашему системному администратору.",
		share_no_my_email_error_adminResponse: "ID пользователя ${0} не отображен в адрес электронной почты, а рабочий стол ${1} не позволяет пользователям изменять адрес электронной почты для служб совместного использования Box.<br><br>Попробуйте использовать одно из следующих решений:<br>Убедитесь, что подключаемый модуль отображения электронной почты зарегистрирован.<br>Убедитесь, что файл emailMappingPlugin.json содержит ID пользователя ${0} и адрес электронной почты пользователя, а затем постройте, сконфигурируйте и зарегистрируйте подключаемый модуль отображения электронной почты.<br>Если вы не хотите использовать подключаемый модуль отображения электронной почты или каталог адресов электронной почты FileNet P8, а хотите разрешить пользователям вводить свой адрес электронной почты, когда они совместно используют документ, вы можете изменить параметры рабочего стола для служб совместного использования Box, чтобы разрешить пользователям отправлять ссылку с другого адреса электронной почты.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Более новая версия этого документа используется совместно, поэтому вы не можете совместно использовать выбранную версию этого документа.",
		share_later_version_shared_error_explanation: "Вы не можете совместно использовать более раннюю версию документа, которая раньше использовалась совместно.",
		share_later_version_shared_error_userResponse: "Чтобы отправить ссылку на более новую версию документа, сначала нужно выбрать более новую версию, а затем применить действие Использовать совместно.<br><br>Чтобы совместно использовать выбранную версию документа, вы сначала должны удалить совместное использование для более новой версии документа.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Новое сообщение",
		email_from: "От:",
		email_to: "До:",
		email_cc_link: "Копия",
		email_bcc_link: "Скрытая копия",
		email_cc: "Копия:",
		email_bcc: "Скрытая копия:",
		email_address_invalid: "Введите действительный адрес электронной почты.",
		email_subject: "Тема:",
		email_message: "Сообщение:",
		email_message_placeholder: "Добавить сообщение",
		email_attachments: "Вложенные файлы:",
		email_links: "Ссылки:",
		email_send: "Отправить",
		email_dont_send: "Не высылать",
		email_subject_reminder: "Напоминание темы",
		email_subject_reminder_confirm: "Хотите выслать это сообщение без темы?",
		email_missing_from_error: "Произошла ошибка при определении адреса отправителя электронной почты, который требуется для отправки электронного сообщения.",
		email_missing_from_error_explanation: "Вы вошли в систему, указав ID пользователя ${0}, но ID пользователя не отображен в адрес электронной почты.",
		email_missing_from_error_userResponse: "Попробуйте снова войти в систему или войти в систему, используя другой ID пользователя. Если проблема сохранится, сообщите об этой ошибке вашему системному администратору.",
		email_missing_from_error_adminResponse: "ID пользователя ${0} не отображен в адрес электронной почты, а рабочий стол ${1} не позволяет пользователям изменять исходящий адрес электронной почты.<br><br>Попробуйте использовать одно из следующих решений:<br>Убедитесь, что подключаемый модуль отображения электронной почты зарегистрирован.<br>Убедитесь, что файл emailMappingPlugin.json содержит ID пользователя ${0} и адрес электронной почты пользователя, а затем постройте, сконфигурируйте и зарегистрируйте подключаемый модуль отображения электронной почты.<br>Если вы не хотите использовать подключаемый модуль Отображения электронной почты или каталог адресов электронной почты FileNet P8, а хотите разрешить пользователям вводить при отправке свои адреса электронной почты, вы можете изменить параметры электронной почты для рабочих столов, чтобы разрешить пользователям изменять исходящий адрес электронной почты.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Не удается открыть документ.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator не может соединиться с клиентом изменений IBM Content Navigator.",
		open_edit_document_with_native_application_error_userResponse: "Установите и запустите на своей рабочей станции клиент изменений IBM Content Navigator. Затем снова попробуйте открыть документ.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Не удается открыть документ.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator не может соединиться с клиентом изменений IBM Content Navigator.",
		connect_to_the_streamline_service_error_userResponse: "Установите и запустите на своей рабочей станции клиент изменений IBM Content Navigator. Затем снова попробуйте открыть документ.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator не сконфигурирован надлежащим образом для совместного использования документов.",
		share_not_configured_error_explanation: "Для совместного использования документов сначала необходимо надлежащим образом сконфигурировать функцию совместного использования Box.",
		share_not_configured_error_userResponse: "Обратитесь к вашему администратору и попросите сконфигурировать функцию совместного использования Box.",
		share_not_configured_error_adminResponse: "Для совместного использования документов должно быть сконфигурировано следующее:<ul><li>В настройках инструментов администрирования должна быть сконфигурирована служба менеджера задач.</li><li>В репозитории должен быть сконфигурирован ID соединения менеджера задач.</li><li>В репозитории должно быть разрешено совместное использование.</li><li>Для совместного использования на рабочем столе должен быть выбран репозиторий Box.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Изменения свойств не сохранены для новой версии",
		checkin_cors_save_attributes_error_explanation: "Версия создана, но изменения свойств не сохранены. Возможно, документ все еге зарезервирован.",
		checkin_cors_save_attributes_error_userResponse: "Разблокируйте документ и обновите свойства, используя элемент контекстного меню Свойства.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Изменения свойств не сохранены для нового документа",
		add_cors_save_attributes_error_explanation: "Документ создан, но изменения свойств не сохранены",
		add_cors_save_attributes_error_userResponse: "Обновите свойства, используя элемент контекстного меню Свойства.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Не удается открыть документ.",		
		edit_document_using_edit_service_error_explanation: "Документ невозможно открыть в службе редактирования.",
		edit_document_using_edit_service_error_userResponse: "Попросите своего администратора обновить интеграцию со службой редактирования.<br><br> Если пользователю нужно получить доступ к этому документу из службы редактирования, перейдите на страницу Изменить интеграцию для репозитория и обновите интеграцию службы редактирования, включив класс в список классов, которые нужно изменить для поддержки службы редактирования.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Не удается открыть документ.",		
		edit_document_is_editing_by_oos_error_explanation: "Этот документ используется компонентом Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Вы должны сохранить и закрыть документ в Office Online Service, прежде чем сможете открыть его в службе редактирования.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Включить закачивание Cross-Origin Resource Sharing (CORS)",

		/* Email Settings */
		admin_email_settings: "Параметры электронной почты:",
		admin_email_settings_hover: "Задайте тип службы электронной почты, которую должны использовать пользователи. При включении службы электронной почты на основе HTML можно выбрать опцию разрешить пользователям изменять свой электронный исходящий адрес. Если требуется включить службу электронной почты на основе Java, ваш браузер должен поддерживать Java.",
		admin_email_use_service: "Использовать службу электронной почты на основе HTML",
		admin_email_use_applet: "Использовать службу электронной почты на основе Java",
		admin_email_can_modify_from: "Разрешить пользователям изменять электронный исходящий адрес",
		admin_email_can_modify_from_hover: "По умолчанию исходящий адрес электронной почты нельзя изменить, и его получают из отображения пользователей и адресов электронной почты, соответствующих учетным записям пользователей.<br><br>Выберите эту опцию, чтобы разрешить пользователям изменять их адреса электронной почты при отправке сообщений; однако действительность этих адресов не будет проверена.",
		admin_email_use_from_as_sender: "Использовать исходящий адрес электронной почты в качестве отправителя электронного сообщения",
		admin_email_use_from_as_sender_hover: "По умолчанию допустимый исходящий адрес электронной почты используется в электронных сообщениях пользователя. Этот адрес определяется почтовым сеансом CNMailSession на сервере прикладных программ. Выберите эту опцию, чтобы задать, что в электронном сообщении будет использоваться пользовательский электронный адрес.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Новые аннотации",
		addAnnotationDlg_labelContents: "Содержимое:",
		addAnnotationDlg_labelAccess: "Права доступа:",
		addAnnotationDlg_labelPublic: "Общедоступный",
		addAnnotationDlg_labelPrivate: "Частный",
		addAnnotationDlg_labelPrivateGroup: "Частный для группы",
		addAnnotationDlg_labelGroup: "Группа",
		addAnnotationDlg_labelCopiable: "Эту аннотацию можно скопировать на другой сервер.",
		addAnnotationDlg_buttonLabel_save: "Сохранить",

		/* Skip navigation */
		skipNavigation_title_main: "Перейти к основному содержимому",
		skipNavigation_title_menu: "Перейти к кнопкам навигации",
		skipNavigation_label_main: "Перейти к основному содержимому",
		skipNavigation_label_menu: "Перейти к кнопкам навигации",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Управление пространствами команд",
		manage_teamspace_pane_instance_hdr: "Пространства команд",
		manage_teamspace_pane_template_hdr: "Шаблоны",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Прокрутить вперед",
		scroll_back: "Прокрутить назад",

		breadcrumb_separator_open: "Открыть узел",
		breadcrumb_separator_close: "Закрыть узел",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Не выбран элемент.",

		/* eds */
		eds_url: "URL внешнего источника данных:",
		eds_request_timeout: "Тайм-аут требования службы (в секундах):",
		eds_is_required: "Запретить пользователям выполнять действия, которые изменяют значения свойств, когда EDS недоступна.",

		/* eforms */
		eform_signing_pane_welcome: "Подписать форму",
		eform_signing_button_label: "Подписать",
		eform_signing_pane_delete: "Удалить подпись",
		eform_signing_button_label_delete: "Удалить",

		xtplugin_server_label: "URL сервера IBM FileNet Workplace XT",
		xtplugin_server_hover: "Введите URL сервера, на котором внедрен продукт IBM FileNet Workplace XT, например, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL сервера IBM eClient",
		ecplugin_server_hover: "Введите URL сервера, на котором внедрен компонент IBM eClient, например, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Выполнение действий с большим числом элементов может занять много времени. Продолжить?",
		large_number_actions_continue_button: "Продолжить",

		large_items_actions_confirmation_question: "Действия с большим числом элементов могут занять много времени. Продолжить?",

		viewer_editproperties_title: "Подтверждение",
		viewer_editproperties_title_warning: "Предупреждение",
		viewer_editproperties_save: "Сохранить",
		viewer_editproperties_next: "Далее",
		viewer_editproperties_reset: "Сбросить",
		viewer_editproperties_reset_hover: "Для всех несохраненных данных будут восстановлены ранее сохраненные значения.",
		viewer_editproperties_saveandgetnext: "Сохранить, а затем получить следующий",
		viewer_editproperties_saveandgetnext_hover: "Автоматически получать следующий документ после того, как я сохраню мои изменения",
		viewer_editproperties_prompt_save_changes: "Вы изменили свойства следующего документа<br>${0}<br><br>Хотите сохранить свои изменения?",
		viewer_editproperties_prompt_discard_changes: "Вы изменили свойства следующего документа<br>${0}<br><br>Однако у одного или нескольких свойств недопустимые значения, поэтому сохранить изменения нельзя. Вы можете либо исправить недопустимые значения, либо отбросить ваши изменения.<br>Хотите исправить недопустимые значения, показанные в панели свойств?",
		viewer_comments_prompt_discard_changes: "Вы изменили комментарии. Хотите сохранить свои изменения?",
		viewer_notelogs_prompt_discard_changes: "Вы изменили журналы примечаний. Хотите сохранить свои изменения?",
		social_collaborated_version: "Версия: ${0}",
		social_link_label: "Кто...",

		// social comments
		comments: "Комментарии",
		comments_add_hint: "Чтобы добавить ваши комментарии, нажмите клавишу Enter.",
		comments_hint: "Введите свои комментарии.",
		comments_label: "Для сохранения комментариев нажмите клавишу Enter или Tab. Нажмите клавишу Esc, чтобы отменить их.",
		comments_delete_confirmation: "Хотите удалить выбранный комментарий?",
		comments_number: "Комментарии: ${0}",
		comments_save_new: "Вы изменили комментарии. Хотите закрыть окно, не сохраняя своих изменений?",

		notelogs: "Журналы замечаний",
		notelogs_download: "Скачать",
		notelog_modify: "Сохранить изменения",
		notelog_edit: "Изменить журнал замечаний",
		notelog_create_newVersion: "Создать новую версию журнала замечаний",
		notelog_add_hint: "Введите свои комментарии и нажмите клавишу Enter для их добавления.",
		notelog_hint: "Нажмите клавиши Shift+Enter для перевода строки",
		notelog_add_placeholder: "Чтобы добавить комментарий в журнал примечаний, нажмите клавишу Enter.",
		notelog_save_new: "Вы изменили журнал примечаний. Хотите закрыть окно, не сохраняя своих изменений?",

		// P8 markings related
		cannot_remove_markings: "У вас нет разрешения на удаление значений пометок: {0}",

		// download count
		downloadcount: "Скачивания: {0}",
		downloadcount_single: "1 скачивание",
		downloadcount_multiple: "Скачивания в количестве {0}",
		downloadcount_none: "Это еще никто не скачивал",

		// recommendations
		recommendations: "Лайки: {0}",
		recommendations_recommend: "Мне это нравится",
		recommendations_unrecommend: "Мне это не нравится",
		recommendations_you: "Вам это нравится",
		recommendations_you_and_another: "Вам и 1 другому лицу это нравится",
		recommendations_you_and_others: "Вам и другим лицам в количестве {0} это нравится",
		recommendations_another: "1 лицу это нравится",
		recommendations_others: "Это нравится людям в количестве {0}",
		recommendations_none: "Это еще никому не понравилось",

		// tags
		tags: "Теги: ${0}",
		tags_delete: "Удалить${0}",
		tags_none: "Нет тегов для показа.",
		tags_add: "Добавить теги:",
		tags_hint: "Чтобы добавить ваши теги, нажмите клавишу Enter.",
		tags_hover_help: "Задайте тег или список тегов, которые можно использовать для поиска документов с одинаковыми тегами. Чтобы разделить теги, можно использовать запятую (,), точку с запятой (;) или пробел.",
		tags_hover_help_box: "Задайте тег или список разделенных запятыми тегов, которые можно использовать для поиска документов с одинаковыми тегами.",
		tags_no_access: "У вас нет соответствующих разрешений, чтобы добавлять теги.",

		//task scheduler pane
		taskPane_tooltip: "Открыть представление асинхронных операций",
		taskPane_tree: "Дерево навигации панели операций",
		taskPane_allTasks: "Все операции",
		taskPane_scheduledTasks: "Запланированные операции",
		taskPane_recurringTasks: "Повторяющиеся операции",
		taskPane_inProgressTasks: "Выполняющиеся операции",
		taskPane_completedTasks: "Завершенные операции",
		taskPane_failedTasks: "Неудачно завершившиеся операции",
		taskPane_disabledTasks: "Отключенные операции",
		taskPane_statusScheduled: "Добавлен в расписание",
		taskPane_statusInProgress: "Выполняется",
		taskPane_statusCompleted: "Выполнено",
		taskPane_statusFailed: "Завершено неудачно",
		taskPane_statusPaused: "Приостановлено",
		taskPane_noItemSelected: "Не выбрано ни одного элемента",
		taskSchedulerPane_scheduleInformation: "Информация расписания",
		taskSchedulerPane_loginInformation: "Информация регистрации в системе",
		taskSchedulerPane_startImmediately: "Запустить сейчас",
		taskSchedulerPane_recurrence: "Повторение",
		taskSchedulerPane_interval: "Интервал",
		taskSchedulerPane_scheduleReport: "Отчет о расписании",
		taskSchedulerPane_nameHoverHelp: "Введите имя операции.",
		taskSchedulerPane_descriptionHoverHelp: "Введите описание операции. Описание должно помогать вам различать операции.",
		taskSchedulerPane_startTimeHoverHelp: "Укажите, когда нужно выполнить операцию. Чтобы запустить операцию сейчас, включите опцию Запустить сейчас.",
		taskSchedulerPane_recurrenceHoverHelp: "Вы можете запланировать периодический запуск операции.",
		taskSchedulerPane_endTimeHoverHelp: "Укажите, когда должно прекратиться выполнение операции. Операция выполняется от запланированного времени начала до запланированного времени окончания.",
		taskSchedulerPane_usernameHoverHelp: "Для периодических операций нужно ввести имя пользователя, чтобы служба смогла пройти аутентификацию при запуске операции.",
		taskSchedulerPane_passwordHoverHelp: "Для периодических операций нужно ввести пароль указанного пользователя, чтобы служба смогла пройти аутентификацию при запуске операции.",
		taskSchedulerPane_notification: "Уведомление",
		taskSchedulerPane_emailAddress: "Адрес электронной почты",
		taskSchedulerPane_emailAddressHoverHelp: "Введите адрес электронной почты, по которому вы хотите получить уведомления о состоянии операции.",
		taskSchedulerPane_intervalHoverHelp: "Задайте время, через которое будет выполняться периодическая операция. Этот интервал можно задать в часах, днях, неделях или месяцах.",
		taskSchedulerPane_scheduledStartTime: "Плановое время начала",
		taskSchedulerPane_startTime: "Время начала",
		taskSchedulerPane_title: "Расписание",
		taskSchedulerPane_runNow: "Запустить сейчас",
		taskSchedulerPane_runOnce: "Выполнить однократно",
		taskSchedulerPane_runAtSchedule: "Запускать по расписанию",
		taskSchedulerPane_repeats: "Повторы",
		taskSchedulerPane_repeatsEvery: "Повторять каждые",
		taskSchedulerPane_hourly: "Ежечасно",
		taskSchedulerPane_daily: "Ежедневно",
		taskSchedulerPane_weekly: "Еженедельно",
		taskSchedulerPane_monthly: "Ежемесячно",
		taskSchedulerPane_yearly: "Ежегодно",
		taskSchedulerPane_sunday: "В",
		taskSchedulerPane_monday: "П",
		taskSchedulerPane_tuesday: "В",
		taskSchedulerPane_wednesday: "С",
		taskSchedulerPane_thursday: "В",
		taskSchedulerPane_friday: "П",
		taskSchedulerPane_saturday: "В",
		taskSchedulerPane_starting: "Дата начала",
		taskSchedulerPane_after: "После",
		taskSchedulerPane_ending: "Дата завершения",
		taskSchedulerPane_times: "раз(а)",
		taskSchedulerPane_days: "дн.",
		taskSchedulerPane_hours: "час. в течение дня",
		taskSchedulerPane_interval: "Интервал",
		taskSchedulerPane_endingDays: "Завершение (в днях)",
		taskSchedulerPane_never: "Никогда",
		taskSchedulerPane_categorization: "Категоризация",
		taskSchedulerPane_scheduleTask: "Операция расписания",
		taskInformationPane_details: "Подробности",
		taskInformationPane_errors: "Ошибки",
		taskInformationPane_taskInstances: "Экземпляры операций",
		taskInformationPane_audits: "Аудиты",
		taskInformationPane_results: "Результаты",
		asyncTasks: "Асинхронные операции",

		//entry template pane
		search_all_entry_templates: "Поиск по всем шаблонам ввода.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Просмотреть весь сайт",
		mobilesite: "Просмотреть мобильный сайт",
		profile: "Управление профилем",
		office_template: "Шаблон Office:",
		select_office_template: "Выберите шаблон Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Выбранные документы нельзя открыть в программе просмотра с помощью действия Объединить и разбить.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Программа просмотра, сконфигурированная для документов PDF и TIFF, не поддерживает действие Объединить и разбить.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Попросите администратора сконфигурировать для документов PDF и TIFF программу просмотра, которая поддерживает действие Объединить и разбить, например, программу просмотра Daeja ViewONE Virtual Viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Выбранные документы PDF нельзя открыть в программе просмотра с помощью действия Объединить и разбить.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Программа просмотра, сконфигурированная для документов PDF, не поддерживает действие Объединить и разбить.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Попросите администратора сконфигурировать для документов PDF программу просмотра, которая поддерживает действие Объединить и разбить, например, программу просмотра Daeja ViewONE Virtual Viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Выбранные документы TIFF нельзя открыть в программе просмотра с помощью действия Объединить и разбить.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Программа просмотра, сконфигурированная для документов TIFF, не поддерживает действие Объединить и разбить.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Попросите администратора сконфигурировать для документов TIFF программу просмотра, которая поддерживает действие Объединить и разбить, например, программу просмотра Daeja ViewONE Virtual Viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Выбранные документы нельзя открыть в программе просмотра с помощью действия Объединить и разбить.",
		document_builder_unsupported_documents_error_explanation: "Действие Объединить и разбить применимо только к документам PDF и TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Выберите поддерживаемые документы и повторите попытку.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Некоторые из выбранных документов нельзя открыть в программе просмотра с помощью действия Объединить и разбить.",
		document_builder_some_unsupported_documents_error_explanation: "Действие Объединить и разбить применимо только к документам PDF и TIFF, открытым из того же репозитория.",
		document_builder_some_unsupported_documents_error_userResponse: "Поддерживаемые документы будут открыты в программе просмотра.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Произошла ошибка при активации модифицированного содержимого.",
		document_builder_checkin_failed_explanation: "Программа просмотра получила ответ с ошибкой при активации модифицированного содержимого.",
		document_builder_checkin_failed_userResponse: "Попросите системного администратора проверить журналы ошибок сервера веб-приложения.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Не удается открыть документ.",
		no_viewer_to_view_error_explanation: "Системный администратор заблокировал просмотр этого документа. Если вам требуется доступ к этому документу, вы можете его скачать.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Не удалось построить содержимое.",
		document_build_failed_userResponse: "Попросите системного администратора проверить файлы журналов программы просмотра.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Не удалось открыть документ в режиме объединения и разбиения.",
		document_builder_open_failed_userResponse: "Попросите системного администратора проверить файлы журналов программы просмотра.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Система не смогла переключиться на режим объединения и разбиения.",
		document_builder_switch_failed_userResponse: "Попросите системного администратора проверить файлы журналов программы просмотра.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Документы",
		print_service_page_setup_tab_title: "Настройка страницы",
		print_service_OD_print_tab_title: "Опции принтера",
		print_service_status_merging: "Слияние документов...",
		print_service_status_converting: "Преобразование документов...",
		print_service_status_formatting: "Форматирование документа для печати...",
		admin_print_service_maximum_number_to_print: "Максимально допустимое число документов для печати:",
		admin_print_service_maximum_size_to_print: "Максимальный объем данных, допустимый для печати (в МБ):",
		admin_print_service_maximum_number_to_print_hover_help: "Укажите максимальное число документов, которые пользователи смогут одновременно напечатать. Максимум по умолчанию - 50. Если вы не хотите ограничивать печать числом документов, задайте в качестве этого предела значение 0.",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Ограничение:</b> Этот параметр не поддерживается продуктом IBM Content Manager OnDemand.<br/><br/>Задайте максимальный объем данных, которые можно напечатать с использованием службы печати IBM Daeja ViewONE.<br /><br />Общий размер каждого выбранного документа не должен превышать этот объем.<br/><br/>Предел по умолчанию - 200 МБ. Если задать предел свыше 200 МБ, это может отрицательно повлиять на производительность системы. Если вы не хотите ограничивать печать размером документов, задайте в качестве этого предела значение 0.",
		// error printing
		print_service_error_printing: "При печати произошла ошибка.",
		print_service_error_printing_userResponse: "Попросите системного администратора проверить файлы журналов службы печати.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Выбранные документы слишком велики для печати",
		print_service_max_content_error_explanation: "Выбранные документы превышают предел, равный ${0} МБ данных.",
		print_service_max_content_error_userResponse: "Выберите меньше документов или выберите документы меньшего размера и снова произведите печать. Также можно обратиться к системному администратору, чтобы увеличить общий максимальный размер элементов, которые можно одновременно напечатать с этого рабочего стола.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Невозможно напечатать элементы",
		print_service_max_number_selected_error_explanation: "За один раз можно напечатать элементы в количестве ${0}. Вы пытаетесь напечатать элементы в количестве ${1}. ",
		print_service_max_number_selected_error_userResponse: "Выберите меньшее число элементов и снова попробуйте напечатать элементы. Также можно обратиться к системному администратору, чтобы увеличить максимальное число элементов, которые можно одновременно напечатать с этого рабочего стола.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


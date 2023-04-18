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
		welcome_user: "مرحبا بك، ",
		about: "‏نبذة عن‏",
		all: "كل",
		help: "مساعدة",
		user_session: "جلسة المستخدم",
		user_session_for: "جلسة المستخدم الى ${0}",
		user_session_for_with_container: "جلسة المستخدم الى ${0} (${1})",
		tools: "الأدوات",
		login: "تسجيل الدخول",
		logout: "تسجيل الخروج",
		search: "‏بحث‏",
		saved_searches: "حفظ عمليات البحث",
		content_analytics: "تحليل المحتويات",
		reset: "‏ارجاع‏",
		reset_hover: "سيتم ارجاع كل البيانات التي لم يتم حفظها بكل علامات التبويب  الى القيم التي تم حفظها  من قبل.",
		reset_default: "محو الكل",
		reset_default_hover: "لمحو مجال التسمية المميزة الحالية بكل علامات  التبويب.",
		locale: "محددات اللغة:",
		up: "أعلى",
		down: "أسفل",
		restore: "استعادة",
		maximize: "تكبير",
		values_label: "قيم",
		value_label: "القيمة:",
		path_label: "مسار:",
		new_label: "جديد:",
		back_label: "للخلف",
		clear: "اخلاء",
		set: "تحديد...",
		browse: "استعراض",
		work: "العمل",
		connect: "اتصال",
		documents: "الوثائق:",
		copyright: "‏‎(c) Copyright 2012, 2016 IBM Corp.‎‏. ‏تعد IBM وشعار IBM علامات تجارية لشركة IBM Corporation، تم تسجيلها في العديد من الولايات القضائية حول العالم. تعد Java وكل العلامات التجارية والشعارات القائمة على Java علامات تجارية أو علامات مسجلة لشركة Oracle و/أو الشركات التابعة لها. Oracle Outside In Technology المتضمن هنا يخضع لترخيص الاستخدام المقيد ويمكن استخدامه فقط مع هذا التطبيق. هذا البرنامج مرخص بموجب شروط اتفاقية الترخيص  المتوفرة مع  البرنامج.  يمكن أن توجد اتفاقية الترخيص هذه في حافظة دليل البرنامج أو المكتبة  التي تعرف باسم \"License\" أو \"Non_IBM_License\"، ان وجدت، أو يمكن أن يتم  اتاحتها في صورة اتفاقية ترخيص مطبوعة. برجاء قراءة هذه الاتفاقية جيدا قبل استخدام البرنامج. استخدام البرنامج يعني أنك توافق على شروط هذه الاتفاقية. ",
		edit: "تحرير",
		cancel: "‏الغاء‏",
		close: "‏اغلاق‏",
		close_all: "اغلاق كل علامات التبويب",
		close_others: "اغلاق علامات التبويب الأخرى",
		ok: "‏حسنا‏",
		yes: "نعم",
		no: "لا",
		open: "فتح",
		refresh: "تجديد",
		refresh_cabinets: "تجديد كل حافظات الملفات",
		delete_text: "‏حذف ‏",
		export_config: "تصدير التوصيف",
		description: "‏الوصف‏",
		true_label: "صحيح",
		false_label: "خطأ",
		error: "خطأ",
		error_reference_hover: "ارجع الى www.ibm.com لمزيد من المعلومات عن هذا الخطأ.",
		url_label: "عنوان URL",
		default_label: "المفترض",
		ibm_label: "IBM",
		light_label: "فاتح",
		dark_label: "داكن",
		save: "‏حفظ‏",
		saveAs: "حفظ باسم...",
		save_and_close: "حفظ واغلاق",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "‏لا شيء‏",
		Name: "الاسم",
		"${NAME}": "الاسم",
		mime_type: "نوع MIME",
		mime_type_contains_label: "نوع MIME يتضمن",
		mime_type_header: "نوع MIME",
		mime_type_icon: "شارة النوع MIME",
		casesearch: "حالة",
		item: "البند",
		no_mime_type: "لا يتضمن هذا البند محتويات.",
		items_selected: "تم تحديد ${0} بند/بنود.",
		requestor: "مطلوب بواسطة",
		scheduledStartTime: "وقت البدء المجدول",
		isRecurring: "متكرر",
		weeks: "أسبوع/أسابيع",
		days: "يوم/أيام",
		hours: "‏ساعات‏",
		endTime: "وقت الانتهاء",
		username: "اسم المستخدم",
		password: "كلمة السرية",
		serverURL: "عنوان URL لوحدة الخدمة",
		enable: "‏اتاحة‏",
		disable: "الغاء-اتاحة",
		finish: "انتهاء",
		previous: "‏سابق‏",
		next: "تالي",
		schedule: "الجدول الزمني",
		removeFromThisList: "ازالة من هذا الكشف",
		status: "الحالة",
		scheduledEndTime: "وقت الانتهاء المجدول",
		type: "النوع",
		mode: "النمط",
		startTime: "وقت البدء",
		createdBy: "تم التكوين بواسطة",
		nextScheduledTime: "الوقت المجدول التالي",
		id: "الكود",
		duration: "الفترة",
		repeatCycle: "التكرارية",
		taskTypeName: "نوع المهمة",
		to: "الى",
		filter: "ترشيح البيانات:",
		error_message: "رسالة الخطأ",

        file_type: "‏نوع الوثيقة‏",
        word_template_name: "اسم قالب Word",
        excel_template_name: "اسم قالب Excel",
        powerpoint_template_name: "اسم قالب PowerPoint",
        template_description: "وصف القالب",
        action_add_template: "‏اضافة‏",
        action_change_template: "تحرير",      
        action_edit_template_properties: "الخصائص",
        add_presentation_template: "اضافة قالب العرض التقديمي",
    	add_spreadsheet_template: "اضافة قالب الجدول الحسابي",
    	add_doc_template: "اضافة قالب الوثيقة",    	
    	file_type_doc_hover: "يجب تحديد ملف قالب صحيح لوثيقة معالجة النصوص.<br><br>أنواع MIME الصحيحة: ${0}",
    	file_type_doc_error: "يجب تحديد ملف قالب صحيح لوثيقة معالجة النصوص.<br><br>نوع mime للوثيقة المحددة: ${0}<br><br>أنواع MIME الصحيحة: ${1}",
    	file_type_presentation_hover: "يجب تحديد ملف قالب عرض تقديمي صحيح.<br><br>أنواع MIME الصحيحة: ${0}",
    	file_type_presentation_error: "يجب تحديد ملف قالب عرض تقديمي صحيح.<br><br>نوع mime للوثيقة المحددة: ${0}<br><br>أنواع MIME الصحيحة: ${1}",
    	file_type_spreadsheet_hover: "يجب تحديد ملف قالب جدول حسابي صحيح.<br><br>أنواع MIME الصحيحة: ${0}",
    	file_type_spreadsheet_error: "يجب تحديد ملف قالب جدول حسابي صحيح.<br><br>نوع mime للوثيقة المحددة: ${0}<br><br>أنواع MIME الصحيحة: ${1}",
    	office_online_only_one_template_error: "يمكنك تحديد ملف واحد فقط.",
    	change_presentation_template: "تحرير قالب العرض التقديمي",
    	change_spreadsheet_template: "تحرير قالب الجداول الحسابية",
    	change_doc_template: "تحرير قالب الوثيقة",
    	change_button: "تحرير",
	    new_document_dialog_doc_title: "وثيقة جديدة",
	    new_document_dialog_presentation_title: "عرض تقديمي جديد",
	    new_document_dialog_spreadsheet_title: "جدول حسابي جديد",
	    new_document_dialog_title_label: "العنوان:",
	    new_document_dialog_title_hover: "أدخل عنوان لهذه الوثيقة.",
	    new_document_dialog_title_missing_message: "يجب تحديد عنوان.",
	    office_online_save_before_adding_templates_title: "حفظ التغييرات الى مستودع التخزين",
	    office_online_save_before_adding_templates_error: "لا يمكنك اضافة قوالب Office حتى تقوم بحفظ التغييرات التي قمت باجرائها على مستودع التخزين. اضغط <b>حفظ واغلاق</b>، ثم أعد فتح مستودع التخزين لاضافة قوالب Office.",
	    copy_to_OOS_dialog_doc_title: "وثيقة جديدة",
	    office_online_checkin_cancelcheckout_message: "يتم تحرير هذه الوثيقة في Microsoft Office Online. لا يمكنك انهاء تخصيص الوثيقة أو الغاء تخصيصها بينما تكون مفتوحة في Microsoft Office Online.",
	    new_document_classification: "التصنيف:",
	    new_document_classification_help: "يتم ارجاع الفئة والخصائص والحافظة الرئيسية، ان وجدت، لوثيقة المصدر. عند اضافة وثيقة باستخدام قالب الادخال، فانه سيتم تحديد قالب الادخال لوثيقة المصدر آليا اذا كان موجودا. يتم استخدام خصائص وثيقة المصدر على أنها القيم المفترضة، لكنه يتم الاحتفاظ بالحافظة والوثيقة المحددة في قالب الادخال.",
		new_document_classification_use_source_document: "استخدام وثيقة المصدر:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "شارة النوع ${0}",
		repository_name_and_type: "اسم ونوع ${0}",
		select_class_label: "حدد ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "مشاهدة التفاصيل",
		detail_view_button: "التفاصيل",
		magazine_view_button_tooltip: "مشاهدة المجلة",
		magazine_view_button: "مجلة",
		filmstrip_view_button_tooltip: "مشاهدة شريط الصور",
		filmstrip_view_button: "شريط العرض",

		magazine_view_show: "عرض في مشاهدة المجلة",
		detail_view_show: "عرض في مشاهدة التفاصيل",

		total_count_item: "البند",
		total_count_items: "البنود",
		total_count_more_items: "أكثر من ${0} بند/بنود",

		extension_changed: "امتداد الملف الذي قمت بتحديده لا يطابق الأصلي.  قم بتحديد ملف مختلف.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "برنامج المشاهدة المحدد لا يدعم كل أنواع الملفات. اذا قمت بحفظ مناظرة برنامج المشاهدة هذه، قد تواجهك مشاكل عند مشاهدة الوثائق. يفضل أن تقوم بتحديد برنامج مشاهدة يدعم كل أنواع الملفات عند تحديد اختيار كل أنواع الملفات.<br><br><b>ملحوظة:</b> تدعم برامج المشاهدة التالية كل أنواع الملفات:<ul><li>برنامج مشاهدة  البرامج المصغرة</li><li>برنامج  مشاهدة AJAX</li><li>تحويل HTML</li><li>تحويل PDF</li><li>برنامج استعراض الانترنت</li></ul>",
		file_type_any: "كل أنواع الملفات",
		file_type_any_hover: "حدد هذا الاختيار اذا كنت تريد استخدام برنامج المشاهدة المحدد لمشاهدة كل الوثائق، بصرف النظر عن نوع الملف. يتم دعم هذا الاختيار لبرامج المشاهدة التالية:<br><br><ul><li>برنامج مشاهدة  البرامج المصغرة</li><li>برنامج  مشاهدة AJAX</li><li>تحويل HTML</li><li>تحويل PDF</li><li>برنامج استعراض الانترنت</li></ul><br><br><b>تذكر:</b> اذا كنت تريد استخدام برامج مشاهدة معينة معظم الوقت، يجب نقل أي مناظرات  قمت بتكوينها وتستخدم هذا الاختيار الى نهاية مناظرة برنامج المشاهدة الخاص بك. ",
		file_type_input: "نوع ملف جديد:",

		mime_type_input: "نوع MIME جديد:",
		mime_type_input_invalid: "لا يمكن أن يحتوي نوع MIME على أي من الحروف التالية: ,",
		mime_type_available: "أنواع MIME المتاحة",
		mime_type_selected: "أنواع MIME المحددة",
		file_type_input: "نوع ملف جديد:",
		file_type_input_invalid: "لا يمكن أن يحتوي نوع الملف الجديد على أي من الحروف التالية: ,",
		file_type_available: "أنواع الملفات المتاحة",
		file_type_selected: "أنواع الملفات المحددة",
		file_type_header: "نوع الملف",
		viewer: "برنامج المشاهدة:",
		viewer_viewer: "برنامج المشاهدة",
		viewer_view: "‏مشاهدة‏",
		viewer_preview: "معاينة",
		viewer_merge_and_split: "الدمج والتقسيم",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "معاينة فقط",
		preview_only_label: "(معاينة)",
		preview_only_hover: "سيتم استخدام مناظرة برنامج المشاهدة هذه عند قيام المستخدم بالضغط على <b>معاينة</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "مستودع التخزين هذا لا يدعم خاصية التصفح. حدد مستودع تخزين آخر.",

		repository_community_teamspace_message: "يوجد مستودع تخزين آخر محدد بالفعل كمستودع تخزين مكتبة  المجموعة. اذا كنت تريد الاستمرار باستخدام مستودع التخزين الموجود كمستودع تخزين مكتبة المجموعة، حدد <b>لا</b> قبل القيام بحفظ التغييرات الخاصة بك لمنع مستودع التخزين الحالي من أن يتم استبداله بمستودع التخزين هذا.",

		favorites_empty: "ليس لديك أي تفضيلات بعد.",
		syncItems_empty: "ليس لديك ملفات متزامنة بعد.",

		root_folder_id: "كود تعريف الحافظة الرئيسية",
		unified_searches: "عمليات البحث عبر-مستودعات التخزين:",
		max_results: "عدد النتائج:",
		direct_retrieve_enabled: "الاسترجاع المباشر:",
		itemTypesToDisplay: "أنواع البنود التي سيتم عرضها:",
		allItemTypes: "كل أنواع البنود",
		include_attr_group_name: "وصف مجموعة الخاصية المميزة في اسم عرض الخاصية المميزة:",
		admin_repcfg_include_attr_group_name_hover: "افتراضيا، يتم تضمين وصف مجموعة الخاصية المميزة في أسماء الخصائص المميزة لمجموعة الخاصية المميزة. يساعد هذا المستخدمين على معرفة مجموعة الخاصية المميزة التي تنتمي الخاصية المميزة لمجموعة الخاصية المميزة لها عند التعامل مع الخصائص المميزة.<br>على سبيل المثال، قد يرى المستخدمين الاسم التالي للخاصية المميزة لمجموعة الخاصية المميزة: Document Settings.Document Type.<br><br>اذا قمت بالغاء اتاحة هذا الاختيار، يتم استخدام وصف الخاصية المميزة فقط لاسم الخاصية المميزة لمجموعة الخاصية المميزة.<br>على سبيل المثال، سيتم عرض هذا الاسم للمستخدمين:  Document Type.<br><br>بدون وصف مجموعة الخاصية المميزة، قد لا يمكن أخبار المستخدمين مما اذا كان Document Type هو خاصية مميزة بسيطة أو خاصية مميزة لمجموعة الخاصية المميزة.",
		documentItemTypesOnly: "أنواع بنود نموذج الوثيقة فقط",
		object_store: "الاسم الرمزي لملف تخزين العناصر:",
		object_store_display_name: "اسم العرض لملف تخزين العناصر:",
		teamspaceUpgradeMsg: "سيتم تحديث مساحات الفريق الخاصة بك عند حفظ توصيف مستودع التخزين الخاص بك. اذا كان لديك عدة مساحات فريق، قد تستغرق عملية التحديث عدة دقائق.",
		synchUpgradeMsg: "سيتم تحديث وحدة برامج التزامن بمستودع التخزين هذا عند حفظ توصيف مستودع التخزين الخاص بك.",
		protocol: "البروتوكول:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "كود مستودع تخزين CMIS:",
		cmis_url: "عنوان URL لوثيقة خدمة CMIS AtomPub للربط:",
		trace_level: "مستوى التتبع",
		trace_dir: "دليل التتبع",
		temp_dir: "دليل مؤقت",
		show_document_location: "عرض مكان الوثيقة",
		max_folders: "الحد الأقصى للحافظات",
		afp_conversion: "تحويل AFP",
		line_conversion: "تحويل بيانات السطر",
		max_hits: "الحد الأقصى للملاحظات",
		folder_search_expresssion: "تعبير البحث للحافظة",
		max_item_types: "الحد الأقصى لأنواع البنود",
		max_worklists: "الحد الأقصى لقوائم العمل",
		update_storage_collection: "تعديل مجموعة التخزين",
		include_mime_types_in_search_results: "تضمين أنواع MIME في نتائج البحث",
		object_type: "نوع عنصر",
		object_type_document: "الوثائق",
		object_type_folder: "الحافظات",
		file_label: "الملف:",
		plugin_jarfile_path_label: "مسار ملف JAR:",
		plugin_classfolder_path_label: "مسار ملف الفئة:",
		plugin_classname_label: "اسم الفئة:",
		plugin_id_label: "كود البرنامج المساعد:",
		class_label: "الفئة",
		configuration: "توصيف",
		connect_repository: "اتصال...",
		server_type: "نوع وحدة الخدمة",
		timeout_in_seconds: "وقت الانتهاء (بالثواني):",
		default_search_template: "البحث المفترض",
		search_filtered_properties: "خصائص قابلة للبحث",
		property_contains_label: "الخاصية تتضمن",
		class_contains_label: "تحتوي الفئة",
		search_filtered_operators: "معاملات البحث",
		default_search_results: "نتائج البحث",
		data_type: "نوع البيانات",
		status_bar: "MFT_SEPARATOR",
		operators_for: "المعاملات الى:",
		currentUser: "المستخدم الحالي",
		nameContains: "يحتوي الاسم على",
		searchFor: "بحث عن",
		server_autentication: "توثيق وحدة الخدمة (OAuth 2.0 ذو JWT)",
		standard_authentication: "توثيق قياسي (OAuth2.0 ثلاثي الأطراف)",
		developer_authentication: "توثيق المطور",
		enterprise_id: "كود المشروع:",
		public_key_id: "كود المفتاح العام:",
		private_key_path: "مسار ملف المفتاح الخاص:",
		server_user_email: "البريد الالكتروني لمستخدم وحدة الخدمة",

		filter_builder_tooltip: "تعريف مرشح البيانات",

		// Launch bar
		launchbar_home: "فتح الصفحة الرئيسية",
		launchbar_favorites: "فتح التفضيلات",
		launchbar_browse: "فتح مشاهدة الاستعراض",
		launchbar_browse_popup: "فتح الكشف المنبثق للاستعراض",
		launchbar_search: "فتح مشاهدة البحث",
		launchbar_search_popup: "فتح الكشف المنبثق للبحث",
		launchbar_teamspaces: "فتح مشاهدة مساحات الفريق",
		launchbar_teamspaces_popup: "فتح الكشف المنبثق لمساحات الفريق",
		launchbar_work: "فتح مشاهدة العمل",
		launchbar_work_popup: "فتح الكشف المنبثق للعمل",
		launchbar_entry_templates: "فتح مشاهدة قوالب الادخال",
		launchbar_entry_templates_popup: "فتح الكشف المنبثق لقوالب الادخال",
		launchbar_admin: "فتح مشاهدة الادارة",

		admin_sync_server: "خدمات التزامن",
		admin_settings: "‏المحددات‏",
		admin_interface_text: "التسميات المميزة ",
		admin_interface_text_desktop: "سطح المكتب:",
		admin_desktops: "سطح المكتب",
		admin_repositories: "مستودعات التخزين",
		admin_mobile: "التليفون المحمول",
		admin_menus: "القوائم",
		admin_reason_codes: "أسباب التنقيح",
		admin_plugins: "البرامج المساعدة",
		admin_plugins_state_enabled: "تم اتاحة البرنامج المساعد",
		admin_plugins_state_disabled: "تم الغاء اتاحة البرنامج المساعد",
		admin_plugins_version: "النسخة:",
		admin_plugins_version_heading: "النسخة",
		admin_plugins_icon: "شارة البرنامج المساعد",
		admin_viewer_mapping_icon: "شارة مناظرة برنامج المشاهدة",
		admin_viewer_defs: "مناظرات برنامج المشاهدة",
		admin_viewer_dialog_title: "مناظرة",
		admin_viewer_dialog_new_title: "مناظرة جديدة",
		admin_viewer_dialog_instructions: "تحدد المناظرة برنامج المشاهدة الذي يجب استخدامه  للملفات التي توجد بمستودع تخزين. يمكنك تكوين مناظرات متعددة لتحديد برامج مشاهدة مختلفة  لأنواع الملفات المختلفة. يمكنك استخدام نوع MIME أو لاحقة الملف لتعريف مناظرة. المناظرات ذات لاحقات ملف سيتم مناظرتها لأسماء الوثائق. على سبيل المثال، المناظرة ذات نوع ملف محدد باللاحقة gif سيتم مناظرتها الى أسماء الوثائق التي تنتهي باللاحقة ‎.gif",
		admin_desktop_viewer_defs: "مخطط برنامج المشاهدة:",
		admin_desktop_viewer_defs_hover: "يقوم مخطط برنامج المشاهدة بتحديد برنامج المشاهدة  الذي يتم استخدامه لفتح الأنواع المختلفة من الوثائق في مستودع التخزين.<br><br>يمكنك  تكوين مخططات برنامج المشاهدة الجديد في قسم <b>مناظرات برنامج المشاهدة</b> في أداة  الادارة.",
		admin_desktops_used: "يستخدم في سطح المكتب",
		admin_desktop_additional_settings: "المحددات الاضافية:",
		admin_default_desktop: "تحديد كسطح المكتب المفترض",
		admin_default_desktop_header: "سطح المكتب المفترض",
		admin_layout_tab_title: "الشكل العام",
		admin_desktop_icon: "شارة سطح المكتبة",

		// Themes
		admin_themes: "النسق الرئيسية",
		admin_theme_list_instructions: "يمكنك تكوين نسق رئيسي لتسهيل تهيئة الوحدة التابعة للانترنت للمؤسسة الخاصة بك. يمكنك تكوين عدة نسق رئيسية اذا كنت تريد استخدام ألوان أو أطقم طباعة أو شعارات مختلفة لأسطح المكتب المختلفة في بيئة التشغيل الخاصة بك.<br><br>بعد القيام بتكوين نسق رئيسي، يمكنك تطبيقه على سطح مكتب من خلال توصيف النسق الرئيسي في علامة تبويب <b>المظهر العام</b> لسطح المكتب.",
		admin_theme_instructions: "يمكنك تكوين نسق رئيسي للتحكم في الألوان وأطقم الطباعة التي يتم عرضها في الوحدة التابعة للانترنت. بالاضافة الى ذلك، يمكنك استخدام النسق الرئيسي لتغيير الشعار واسم التطبيق ونص حقوق النشر الذي يتم عرضه في صفحة تسجيل الدخول وفي خط العنوان.",
		admin_theme_heading: "النسق الرئيسي: <b>${0}</b>",
		admin_new_theme: "نسق رئيسي جديد",
		admin_text_theme: "النسق الرئيسي",
		admin_delete_confirmation_themes: "هل تريد حذف النسق الرئيسي المحدد؟\n تم تحديد ${0} نسق رئيسي.",
		admin_theme_color: "اللون",
		admin_theme_text: "نص",
		admin_theme_solid: "مصمت",
		admin_theme_gradient: "متدرج",
		admin_theme_box: "صندوق",
		admin_theme_color_label: "اللون ${0}:",
		admin_theme_name_invalid: "لا يمكن أن يحتوي اسم النسق الرئيسي على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "يجب أن يكون كود النسق الرئيسي متفرد، ولا يمكنك تغيير الكود بعد حفظ النسق  الرئيسي.<br><br>يمكن أن يحتوي الكود على حروف أبجدية عددية فقط.",
		admin_theme_name_hover: "لا يمكن أن يحتوي الاسم على الحروف التالية: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "آلي",
		admin_theme_logo_url_hover: "أدخل عنوان URL لملف الشعار. اذا كان  الشعار موجود بنفس وحدة خدمة  تطبيق الانترنت كالوحدة التابعة للانترنت، أدخل   عنوان URL المتعلق, على سبيل المثال: ‏‎/mycustomizations/banner.png‎‏<br><br>ومن المفضل أن يكون للشعار خلفية شفافة.",
		admin_theme_color_palette_title_heading: "لوحة الألوان",
		admin_theme_color_palette_help_text: "قم بتكوين لوحة الألوان للنسق الرئيسي الخاص بك باستخدام قيمة سداسي عشرية أو وحدة اختيار اللون. ويمكنك اضافة أي عدد من الألوان كما تريد.",
		admin_theme_color_add_button_label: "اضافة اللون",
		admin_theme_color_remove_button_label: "ازالة اللون",
		admin_theme_global_title_heading: "العناصر على مستوى التطبيق",
		admin_theme_global_font: "مجموعة طاقم الطباعة:",
		admin_theme_global_font_hover: "حدد طاقم الطباعة لاستخدامه في الوحدة التابعة للانترنت. يتم عرض  أطقم الطباعة وفقا للأسبقية؛ يتم استخدام طاقم الطباعة التالي في الكشف فقط اذا لم يكن قد تم تركيب طاقم الطباعة الأول على جهاز الوحدة التابعة.",
		admin_theme_global_framework_color_label: "لون اطار العمل:",
		admin_theme_global_framework_color_hover: "حدد اللون لاستخدامه للعناصر التالية:<ul><li>خطوط  العنوان في مربعات الحوار</li><li>لون الاظهار أعلى علامة التبويب المحددة</li><li>شارات مشاهدة كشف المحتوى (مشاهدة التفاصيل، مشاهدة المجلة، مشاهدة شريط الصور)</li></ul><br>لا يتم استخدام هذا اللون للفواصل بين أقسام الوحدة التابعة للانترنت. اذا كنت تريد تغيير اللون للفواصل، يجب تكوين برنامج مساعد لاتاحة ملف CSS مهيأ.",
		admin_theme_color_global_toolbar: "لون خط الأدوات الشامل:",
		admin_theme_color_global_toolbar_hover: "اذا قمت بتضمين خط الأدوات الشامل في الوحدة التابعة للانترنت، حدد اللون الخاص بخط الأدوات.<br><br><b>ملحوظة:</b> يتم عرض خط الأدوات في خط العنوان أعلى الوحدة التابعة للانترنت، لذلك يجب أن يكون لون خط الأدوات متكامل مع لون خط العنوان.",
		admin_theme_global_selected_color: "لون البند المحدد:",
		admin_theme_global_selected_color_hover: "حدد اللون لاستخدامه عند تحديد بنود في تسلسل الاستعراض وتسلسل البحث وكشف المحتوى.<br><br>يتم اشتقاق لون امرار المؤشر (اللون المستخدم عند قيام المستخدم بامرار المؤشر على بند) من هذا اللون.",
		admin_theme_global_link_color: "لون الرابط:",
		admin_theme_global_link_color_hover: "حدد اللون لاستخدامه لكل عناوين URL التي يمكن الضغط عليها في الوحدة التابعة للانترنت. على سبيل المثال، يتم استخدام هذا اللون في روابط معرفة المزيد التي يتم عرضها بالوحدة التابعة للانترنت.",
		admin_theme_login_title_heading: "عناصر صفحة تسجيل الدخول",
		admin_theme_page_background_label: "لون خلفية صفحة تسجيل الدخول:",
		admin_theme_login_page_background_hover: "حدد اللون المطلوب عرضه خلف نافذة تسجيل الدخول.",
		admin_theme_login_pane_background_label: "لون خلفية نافذة تسجيل الدخول:",
		admin_theme_login_pane_background_hover: "حدد لون لعرضه لنافذة تسجيل الدخول. يجب أن يكون هذا اللون مكملا للون الخلفية لصفحة تسجيل الدخول.",
		admin_theme_text_color: "لون النص:",
		admin_theme_login_pane_text_color_hover: "حدد لون لاستخدامه لنص نافذة تسجيل الدخول. يتم استخدام هذا اللون لنص الترحيب والتسميات المميزة للمجالات. يجب أن يكون هذا اللون واضحا في ظل ضوء لون خلفية تسجيل الدخول.",
		admin_theme_copyright_text: "نص حقوق النشر:",
		admin_theme_copyright_text_hover: "حدد ما اذا كان سيتم عرض نص حقوق النشر في صفحة تسجيل الدخول.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "لا يوجد نص لحقوق النشر",
		admin_theme_banner_title_heading: "عناصر خط العنوان",
		admin_theme_text_icons_color: "لون النص والشارة:",
		admin_theme_icon_color_label: "لون الشارة:",
		admin_theme_shadow_label: "الظل:",
		admin_theme_banner_text_icons_hover: "حدد لون لاستخدامه للنص والشارات في خط العنوان. يجب أن يكون هذا اللون واضحا بالنسبة للون الخلفية لخط العنوان.",
		admin_theme_banner_product_name_label: "اسم المنتج:",
		admin_theme_banner_product_name_hover: "عند تكوين سطح مكتب، يمكنك تحديد اسم مهيأ لعرضه للتطبيق. اذا لم تقم بتحديد اسم مهيأ، يتم استخدام IBM Content Navigator كاسم المنتج. حدد ما اذا كان سيتم استخدام اسم التطبيق الذي تم تعريفه في سطح المكتب أو سيتم استخدام صورة في مكان الاسم.",
		admin_theme_banner_product_name_desktop_defined_label: "استخدام اسم من سطح المكتب",
		admin_theme_banner_product_name_image: "استخدام شعار مهيأ (عنوان URL)",
		admin_theme_background_color_label: "لون الخلفية:",
		admin_theme_style_label: "الأسلوب:",
		admin_theme_banner_color_hover: "حدد لون لاستخدامه لخط العنوان أعلى التطبيق.<br><br><b>توضيح:</b> تأكد من أن لون النص بخط العنوان واضحا في ظل ضوء لون خلفية خط العنوان.",
		admin_theme_buttons_title_heading: "الاختيارات",
		admin_theme_navigation_title_heading: "عناصر التجول",
		admin_theme_navigation_icon_selected_label: "لون الشارة المحددة:",
		admin_theme_navigation_background_hover: "حدد لون لاستخدامه لخلفية خط تجول الخاصية.",
		admin_theme_navigation_icon_color_hover: "حدد لون لاستخدامه للشارات في خط تجول الخاصية. عند استخدام الشكل العام المفترض على سطح المكتب، يجب أن يكون هذا اللون على نقيض خلفية القائمة المسقطة للخاصية.  عند استخدام الشكل العام التقليدي على سطح المكتب، فان هذا اللون يجب أن يكون على نقيض خلفية خط تجول الخاصية. ",
		admin_theme_navigation_icon_selected_hover: "حدد لون لاستخدامه للخاصية المحددة في خط تجول الخاصية. يجب أن يكون اللون مكملا للون الشارات ولون الخلفية لخط تجول الخاصية.<br><br>عند استخدام الشكل العام التقليدي على سطح المكتب، فانه يتم استخدام هذا اللون كلون لامرار المؤشر في خط تجول الخاصية. ",
		admin_theme_button_background_color_hover: "حدد لون لاستخدامه لخلفيات الاختيارات.",
		admin_theme_button_style_hover: "حدد نمط الاختيار.",
		admin_theme_button_text_icon_color_hover: "حدد لون لاستخدامه للنص والصور بالاختيارات.",
		admin_theme_no_logo_label: "بدون شعار",
		admin_theme_custom_logo_label: "شعار مهيأ (عنوان URL)",
		admin_theme_banner_type: "نمط ملء خط العنوان:",
		admin_theme_banner_type_hover: "حدد ما اذا كان يجب أن يكون خط العنوان بلون مجسم أو لون متدرج. اذا قمت بتحديد لون متدرج، فان  اللون الذي تحدده للون خط العنوان يكون اللون الداكن في خط العنوان.<br><br><b>توضيح:</b> تأكد من أن لون النص بخط العنوان واضحا في ظل ضوء لون خلفية خط العنوان.",
		admin_theme_icon: "شارة النسق الرئيسي",
		admin_theme_buttons_and_links_title_heading: "المفاتيح والمجالات والوصلات",
		admin_theme_button_style_label: "نمط الاختيار:",
		admin_theme_theme_style_label: "نمط النسق الرئيسي:",
		admin_theme_theme_style_hover: "حدد الأسلوب الذي تريد أن تقوم عليه الفكرة الرئيسية. يمكنك تغيير الأسلوب في أي وقت عند تكوين أو تحرير الفكرة الرئيسية. عندما تقوم بالتغيير من أسلوب لآخر, يتم ارجاع محددات الفكرة الرئيسية الى القيم المفترضة.",
		admin_theme_accent_color_label: "لون التشكيل:",
		admin_theme_accent_color_hover: "حدد اللون لاستخدامه للخط الظاهر أعلى الحوار وعلامة التحميل الدوارة.",
		admin_theme_global_toolbar_text_color_label: "لون نص خط الأدوات الشامل:",
		admin_theme_global_toolbar_text_color_hover: "اذا قمت بتضمين خط الأدوات الشامل في الوحدة التابعة للانترنت، حدد اللون الذي تود استخدامه للنص داخل خط الأدوات.",
		admin_theme_banner_text_color_hover: "حدد اللون الذي تريد استخدامه للنص في الشريط الاعلاني.",
		admin_theme_banner_icon_color_hover: "حدد اللون الذي تريد استخدامه للشارات في الشريط الاعلاني.",
		admin_theme_button_color_label: "اللون:",
		admin_theme_button_color_hover: "حدد اللون لاستخدامه للعناصر التالية:<ul><li>خطوط  العنوان في مربعات الحوار</li><li>لون الاظهار أعلى علامة التبويب المحددة</li><li>شارات مشاهدة كشف المحتوى (مشاهدة التفاصيل، مشاهدة المجلة، مشاهدة شريط الصور)</li><li>المفاتيح والمجالات والروابط</li></ul>يتم استخدام اللون عند قيام المستخدم بامرار المؤشر على اختيار مشتق من هذا اللون. لا يتم استخدام هذا اللون للفواصل بين أقسام الوحدة التابعة للانترنت. اذا كنت تريد تغيير اللون للفواصل، يجب تكوين برنامج مساعد لاتاحة ملف CSS مهيأ.",
		admin_theme_theme_style_col_header: "نمط النسق الرئيسي",

		admin_syncserver_consistency_checker: "أداة التحقق من الاتساق:",
		admin_syncserver_consistency_checker_hover: "قم بتشغيل أداة التحقق من الاتساق للتأكد من أن قواعد بيانات خدمة التزامن تحتوي على المعلومات الحالية عن حالة كل بند يوجد بوحدة الخدمة. على سبيل المثال، قم بتشغيل أداة التحقق من الاتساق بعد توقف قاعدة بيانات خدمات التزامن للحصول على معلومات عن الوثائق التي تم تحديثها بمستودع التخزين أثناء التوقف.",
		admin_syncserver_consistency_checker_button: "تشغيل أداة التحقق من الاتساق",
		admin_syncserver_consistency_checker_started: "تم البدء في:",
		admin_syncserver_consistency_checker_ended: "تم الانتهاء في:",
		admin_syncserver_consistency_checker_duration: "المدة:",
		admin_syncserver_consistency_checker_items_processed: "بنود التزامن التي تم تشغيلها:",
		admin_syncserver_consistency_checker_items_processed_success: "بنود التزامن التي تم تشغيلها بنجاح:",
		admin_syncserver_consistency_checker_items_discovered: "بنود مستودع التخزين الجديدة التي تم اكتشافها:",
		admin_syncserver_consistency_checker_change_updates: "اجمالي التحديثات:",
		admin_syncserver_consistency_checker_state: "الحالة:",
		admin_syncserver_consistency_checker_state_done: "اتمام",
		admin_syncserver_consistency_checker_state_running: "تشغيل",
		admin_syncserver_consistency_checker_user: "تمت الاحالة بواسطة:",
		admin_syncserver_consistency_checker_scheduled: "مجدول:",

		admin_syncserver_dbcleanup: "اعادة تنظيم قاعدة البيانات",
		admin_syncserver_dbcleanup_hover: "قم بتشغيل أداة اعادة تنظيم قاعدة البيانات لازالة الأجهزة والبنود غير المستخدمة والتي لم تعد متزامنة من قاعدة البيانات.",
		admin_syncserver_dbcleanup_button: "اعادة تنظيم قاعدة البيانات",
		admin_syncserver_dbcleanup_state_done: "اتمام",
		admin_syncserver_dbcleanup_state_running: "تشغيل",
		admin_syncserver_dbcleanup_started: "تم البدء في:",
		admin_syncserver_dbcleanup_ended: "تم الانتهاء في:",
		admin_syncserver_dbcleanup_state: "الحالة:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "مستودعات التخزين التي تم حذفها:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "البند المتزامن الذي تم حذفه:",
		admin_syncserver_dbcleanup_devicedeleted_count: "الأجهزة التي تم حذفها:",
		admin_syncserver_dbcleanup_deviceexpired_count: "الأجهزة منتهية الصلاحية:",

		admin_syncserver_publicSyncUrl: "عنوان URL العام لخدمات التزامن:",
		admin_syncserver_publicSyncUrl_hover: "حدد عنوان URL الذي تستطيع من خلاله مستودعات التخزين الاتصال بخدمات تزامن IBM Content Navigator. النسق المفترض لعنوان URL هو http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "محددات مزامنة برنامج الوحدة التابعة:",
		admin_syncserver_managed_hover: "لا يستطيع المستخدمين تغيير هذه المحددات في برنامج الوحدة التابعة IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "مستويات الحافظة للتزامن",
		admin_syncserver_managed_subfolder_hover: "اذا قام مستخدم بمزامنة حافظة، حدد الحد الأقصى لعدد الحافظات التي سيتم مزامنتها. على سبيل المثال، اذا قام مستخدم بتحديد 3 مستويات للحافظة، سيتم مزامنة الحافظة التي يقوم المستخدم بمزامنتها مع مستويين الحافظات الفرعية.<br><br>تأكد من أنه تم توسيع نطاق بيئة التشغيل الخاصة بك لدعم مقدار حركة ارسال واستقبال البيانات المتزامنة التي تم تكوينها بواسطة هذه المحددات.",
		admin_syncserver_managed_subfolder_all: "كل الحافظات الفرعية",
		admin_syncserver_managed_subfolder_none: "لا توجد حافظات فرعية",
		admin_syncserver_managed_subfolder_no_more: "مستويات محدودة",
		admin_syncserver_managed_subfolder_levels: "حافظات",
		admin_syncserver_managed_schedule: "الجدول الزمني للتزامن",
		admin_syncserver_managed_schedule_hover: "تأكد من أنه تم توسيع نطاق بيئة التشغيل الخاصة بك لدعم مقدار حركة ارسال واستقبال البيانات المتزامنة التي تم تكوينها بواسطة الجدول الزمني للتزامن.<br><br>الحد الأقصى للفترة الزمنية هو 24 ساعة أو 1440 دقيقة.<br><br>يستطيع المستخدمين احلال الجدول الزمني للتزامن بالضغط على <b>مزامنة الآن</b> في برنامج الوحدة التابعة.",
		admin_syncserver_managed_schedule_manual: "تزامن يدويا",
		admin_syncserver_managed_schedule_continuous: "تزامن باستمرار",
		admin_syncserver_managed_schedule_every: "تزامن بفترات محددة",
		admin_syncserver_managed_schedule_minutes: "دقائق",
		admin_syncserver_managed_schedule_hours: "‏ساعات‏",

		// redaction codes
		admin_new_reason_code: "سبب تنقيح جديد",		
		admin_reason_code_name_invalid: "لا يمكن أن يحتوي اسم سبب التنقيح على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "لا يمكن أن يحتوي الوصف على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "لا يمكن أن يحتوي الوصف على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "ولا يمكن أن يتضمن الاسم أي من الحروف التالية: * \\ / : ? \"  &lt; &gt; |",
		admin_reason_code_description: "الوصف:",
		admin_reason_code_applications_hover: "كشف تطبيقات Datacap التي تشير الى سبب عملية التنقيح هذه.",
		admin_reason_code_applications: "تطبيقات Datacap",
		admin_delete_confirmation_reason_codes: "هل تريد حذف أسباب التنقيح المحددة؟",
		admin_delete_confirmation_reason_code: "هل تريد حذف سبب التنقيح المحدد؟",
		admin_reason_code_heading: "سبب التنقيح: <b>${0}</b>",
		admin_reason_code_list_instructions: "تشير أسباب التنقيح الى سبب حماية البيانات التي تلتزم بالسياق بحجبها من المشاهدة. يقوم كل سبب بتعريف نوع البيانات التي تلتزم بالسياق التي يتم اخفائها عن المستخدم العام.",
		admin_reason_code_instructions: "يمكنك تكوين سبب تنقيح لكل نوع للبيانات التي تلتزم بالسياق. يمكنك عندئذ استخدام هذا السبب في سياسة التنقيح لتعريف من الذي يمكنه مشاهدة هذه البيانات ومن يمكنه تكوين أو تعديل عمليات التنقيح.",
		admin_reason_code_applications_label: "تطبيقات Datacap",
		admin_reason_code_repositories: "مستودعات التخزين",
		admin_reason_code_repositories_label: "مستودعات التخزين",
		admin_reason_code_repositories_hover: "كشف مستودعات تخزين ICN التي تشير الى سبب عملية التنقيح هذه.",
		admin_reason_code_repositories_default_value: "لم يتم تحديده",
		admin_reason_code_description_label: "‏الوصف‏",
		admin_reason_code_applications_default_value: "لم يتم تحديده",
		admin_redaction_reasons: "أسباب التنقيح",
		admin_redactions: "التنقيحات على أساس الوظيفة",
		admin_redactions_policies_roles: "السياسات والوظائف",
		admin_reasons: "الأسباب",
		admin_reason_code_id: "الكود",
		admin_reason_code_id_hover: "لا يمكن تحرير الكود.  يمكن نسخه الى المسودة",
		// Role based administration
		admin_rba: "ادارة سطح المكتب على أساس الوظيفة",
		admin_rba_mobile_access_enabled: "يتم اتاحة سطح المكتب هذا للتوصل الى التليفون المحمول.",
		admin_rba_mobile_access_disabled: "لم يتم اتاحة سطح المكتب هذا للتوصل الى التليفون المحمول.",
		admin_rba_confirm_delete_multiple: "هل تريد حذف وظائف الادارة المحددة؟",
		admin_rba_confirm_delete_single: "هل تريد حذف وظيفة الادارة المحددة؟",
		admin_rba_delete_multi_role_desktop: "تم تخصيص وظيفة أو أكثر من الوظائف التي قمت بتحديدها الى سطح المكتب. يجب ازالة الوظائف من أسطح المكتب قبل حذفها.",
		admin_rba_delete_single_role_desktop: "تم تخصيص الوظيفة التي قمت بتحديدها الى سطح مكتب ${0}. يجب ازالة الوظيفة من سطح المكتب قبل حذفها.",
		admin_desktop: "سطح المكتب",
		admin_rba_instructions: "يمكنك تكوين وادارة وظائف ادارة سطح المكتب، المصاحبة للامتيازات التي تم منحها لمسؤولي نظام سطح المكتب. ",
		admin_rba_not_used: "${0} لا يتم استخدامه في أي من أسطح المكتب.",
		admin_rba_desktops: "<b>${0} يتم استخدامه في أسطح المكتب التالية: </b>",
		admin_rba_new_role: "وظيفة جديدة",
		admin_rba_name_invalid: "لا يمكن أن يحتوي اسم وظيفة الادارة على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "لا يمكن أن يحتوي الوصف على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "لا يمكن أن يحتوي الوصف على أي من الحروف التالية: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "ولا يمكن أن يتضمن الاسم أي من الحروف التالية: * \\ / : ? \"  &lt; &gt; |",
		admin_rba_description: "<b>الوصف:</b> ${0}",
		admin_rba_membership: "العضوية",
		admin_rba_general_priv: "‏عام‏",
		admin_rba_appearance_priv: "المظهر العام",
		admin_rba_desktop_config_priv: "توصيف سطح المكتب",
		admin_rba_app_name_priv: "اسم التطبيق",
		admin_rba_theme_priv: "النسق الرئيسي",
		admin_rba_viewer_map_priv: "مناظرة برنامج المشاهدة",
		admin_rba_merge_split_priv: "الدمج والتقسيم",
		admin_rba_sync_svc_priv: "خدمات التزامن",
		admin_rba_menus_priv: "القوائم",
		admin_rba_edit_svc_priv: "تحرير الخدمات",
		admin_rba_toolbars_priv: "خطوط الأدوات",
		admin_rba_ctx_menus_priv: "القوائم السياقية",
		admin_rba_office_ribbon_priv: "أوامر خط شريط MS Office",
		admin_rba_office_menues_priv: "قوائم MS Office السياقية",
		admin_rba_addl_settings_priv: "المحددات الاضافية",
		admin_rba_mobile_priv: "التليفون المحمول",
		admin_rba_add_doc_dlg_priv: "مربع الحوار اضافة وثيقة",
		admin_rba_doc_mgmt_priv: "ادارة الوثائق",
		admin_rba_def_redaction_priv: "اختيار التنقيح المفترض",
		admin_rba_add_photos_priv: "اضافة صور من الكاميرا ومكتبة الصور",
		admin_rba_time_stamp_priv: "خاتم الوقت",
		admin_rba_add_docs_folders_priv: "اضافة وثائق وتكوين حافظات الى مستودع التخزين",
		admin_rba_open_docs_priv: "فتح الوثائق في التطبيقات الأخرى",
		admin_rba_office_config_priv: "توصيف Office",
		admin_rba_tab_label_priv: "التسمية المميزة لعلامة تبويب IBM ECM",
		admin_rba_feature_sel_priv: "اختيار الخاصية",
		admin_rba_general_config_priv: "التوصيف العام",
		admin_rba_favorites_priv: "التفضيلات",
		admin_rba_add_options_priv: "اضافة اختيارات في مجموعة التحرير",
		admin_rba_browse_priv: "استعراض",
		admin_rba_outlook_int_priv: "تكامل Outlook",
		admin_rba_search_priv: "‏بحث‏",
		admin_rba_layout_priv: "الشكل العام",
		admin_rba_case_priv: "حالة",
		admin_rba_desktop_feat_priv: "خصائص سطح المكتب",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "الخصائص المعروضة",
		admin_rba_branding_priv: "وضع العلامة التجارية",
		admin_rba_home_priv: "الصفحة الرئيسية",
		admin_rba_main_color_priv: "اللون الرئيسي",
		admin_rba_sec_color_priv: "اللون الثانوي",
		admin_rba_teamspaces_priv: "مساحات الفريق",
		admin_rba_rbr_priv: "التنقيح على أساس الوظيفة",
		admin_rba_et_mgr_priv: "ادارة قالب الادخال",
		admin_rba_policies_roles_priv: "ادارة السياسات والوظائف",
		admin_rba_work_priv: "العمل",
		admin_rba_reasons_priv: "أكواد السبب",
		admin_rba_tasks_priv: "المهام غير المتزامنة",
		admin_rba_auth_priv: "التوثيق",
		admin_rba_all_privs: "كل الامتيازات",
		admin_rba_some_privs: "بعض الامتيازات",
		admin_rba_no_privs: "لا توجد امتيازات",
		admin_add_users_groups_priv: "اضافة مستخدمين ومجموعات",
		admin_url_features_priv: "ادارة خصائص عنوان URL",
		admin_plugin_features_priv: "ادارة خصائص البرنامج المساعد",
		admin_addl_components_priv: "المكونات الاضافية",
		admin_global_toolbar_priv: "خط الأدوات الشامل",
		admin_status_bar_priv: "خط الحالة",
		admin_refresh_message: "يجب أن تقوم بتجديد برنامج التصفح لاستخدام البيانات المحدثة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "يجب تجديد برنامج الاستعراض الخاص بك لاستخدام سطح المكتب المفترض الذي تم تحديثه.",
		admin_desktop_refresh_message: "يجب تجديد برنامج الاستعراض الخاص بك لاستخدام سطح المكتب الذي تم تحديثه.",
		admin_action_open: "فتح",
		admin_action_edit: "تحرير",
		admin_action_copy: "‏نسخ‏",
		admin_action_delete: "‏حذف ‏",
		admin_action_copy: "‏نسخ‏",
		admin_action_new: "تكوين جديد",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "يتم استخدام هذا الكود بالفعل. يجب تحديد كود متفرد.",

		admin_searchable_properties_for: "الخصائص القابلة للبحث الى:",
		admin_repository_new: "مستودع تخزين جديد",
		admin_desktop_new: "سطح مكتب جديد",
		admin_desktop_file_documents: "يتطلب قيام المستخدمين بحفظ الوثائق والحافظات الجديدة في حافظة",
		admin_desktop_file_documents_hover: "حدد هذا الاختيار اذا كنت تريد أن يقوم المستخدمين بتحديد حافظة عند اضافة بنود الى مستودع التخزين. اذا لم يتم تحديد هذا الاختيار، يستطيع المستخدمين اضافة الوثائق (IBM FileNet P8) أو الوثائق والحافظات (IBM Content Manager) بدون ملئهم في الحافظة.",
		admin_desktop_show_security_tab: "عرض محددات السرية خلال تصرفات الاضافة  وانهاء التخصيص",
		admin_desktop_show_security_hover: "<b>مستخدمي IBM FileNet P8 فقط.</b>  قم بتحديد هذا الاختيار اذا كنت تريد السماح للمستخدمين بتحرير سرية الوثائق والحافظات عند اضافة أو التحقق من بنود سطح المكتب هذا.",
		admin_desktop_configure_security_inheritance: "السماح للمستخدمين بتوصيف خاصية توارث السرية للحافظات",
		admin_desktop_configure_security_inheritance_hover: "<b>مستخدمي IBM FileNet P8 فقط.</b>  حدد هذا الاختيار اذا كنت تريد السماح للمستخدمين بتهيئة امكانية التوصل الى البنود في الحافظة بالتحكم في توارث السرية للحافظات. اذا قمت بتحديد هذا الاختيار، يمكنك تحديد ما اذا كان المستخدمين أو المجموعات يمكنهم توارث السرية من:<ul><li>حافظة</li><li>حافظة والحافظات الفرعية المباشرة لها</li><li>حافظة وكل الحافظات الفرعية لها</li></ul>",
		admin_desktop_appearance: "المظهر العام",
		admin_desktop_appearance_instruction: "يمكنك تهيئة المظهر العام لسطح المكتب بتغيير صفحة تسجيل الدخول وخط العنوان الذي يتم عرضه لسطح المكتب.",
		admin_desktop_layout: "الشكل العام:",
		admin_desktop_layout_hover: "يحد الشكل العام الخصائص التي يمكن عرضها في على الوحدة التابعة للانترنت وكيفية ترتيب محتويات الوحدة التابعة للانترنت.<br><br><b>ملحوظة:</b> يمكنك تعريف الأشكال العامة المهيأة بتكوين برامج مساعدة. يجب  تسجيل البرنامج المساعد في أداة الادارة قبل تحديد شكل عام مهيأ.",
		admin_desktop_layout_default: "المفترض",
		admin_desktop_layout_custom: "تهيئة",
		admin_desktop_enable_workflow_email: "اتاحة سطح المكتب هذا لاعلام البريد الالكتروني لمسار عمل FileNet P8",
		admin_desktop_enable_workflow_email_hover: "مستخدمي FileNet P8 فقط. حدد هذا الاختيار اذا كنت تريد السماح للمستخدمين بفتح برنامج الوحدة التابعة للانرتنت من عناوين URL المتضمنة في اعلامات البريد الالكتروني التي تم تكوينها بواسطة Process Engine.<br /><br />اذا لم تقم باتاحة هذا الاختيار أية أسطح مكتب، لن يستطيع المستخدمين تسجيل الدخول الى برنامج الوحدة التابعة للانترنت من عناوين URL في الاعلامات.<br /><br />اذا قمت باتاحة هذا الاختيار على عدة أسطح مكتب وحقق أكثر من سطح مكتب واحد المعيار المحدد في عنوان URL بالاعلام، سيقوم برنامج الوحدة التابعة للانترتن باستخدام أول سطح مكتب يطابق المعيار. ",
		admin_desktop_prevent_create_new_search: "منع المستخدمين من تكوين عمليات  بحث",
		admin_desktop_prevent_create_new_search_hover: "يقوم هذا الاختيار بتقييد المستخدمين لاستخدام عمليات البحث الحالية فقط وتقييد قيامهم بتكوين عملية بحث مفتوحة قد لا يمكن تشغيلها للأمثل. </br></br>لا تؤثر هذه المحددات على مساحات عمل الفريق. يتم التحكم في صلاحية تكوين عمليات البحث بواسطة الوظيفة المتوافرة لدى المستخدم بمساحة عمل الفريق المحددة.",
		admin_desktop_prevent_create_new_unified_search: "منع المستخدمين من تكوين  عمليات بحث عبر مستودعات التخزين",
		admin_desktop_prevent_create_new_unified_search_hover: "يقوم هذا الاختيار  بتقييد المستخدمين من استخدام عمليات البحث عبر مستودعات التخزين الموحدة الحالية فقط وتقييد قيامهم بتكوين عمليات بحث موحدة يتم فتحها وانهاؤها قد لا يمكن تشغيلها للأمثل.",
		admin_desktop_hide_entry_template_not_found_warning: "اخفاء التحذير الذي يتم عرضه عند عدم ايجاد قالب الادخال المتعلق",
		admin_desktop_hide_entry_template_not_found_warning_hover: "حدد هذا الاختيار اذا كنت تريد اخفاء ارسال التحذير الذي يتم عرضه عند تحرير خصائص البند وعدم ايجاد قالب الادخال المتعلق بالبند.",
		admin_desktop_show_class_role_security_selection: "السماح للمستخدمين بتوصيف السرية على أساس الوظيفة في قوالب الادخال ",
		admin_desktop_show_class_role_security_selection_hover:	"<b>مستخدمي IBM FileNet P8 فقط.</b> حدد هذا الاختيار اذا كنت تريد أن يقوم المستخدمين بتوصيف قوالب الادخال لاستخدام السرية على أساس الوظيفة عند تحديد السرية بالوثائق و/أو الحافظات باستخدام قوالب الادخال. اذا قمت بتحديد هذا الاختيار، يستطيع محرري القالب تحديد ما اذا كان قد تم تطبيق عناصر سرية الوظيفة على تعريف قالب الادخال. ",
		admin_desktop_show_primary_multi_part: "فتح الوثيقة الأولية ببرنامج المشاهدة فقط ",
		admin_desktop_show_primary_multi_part_hover: "<b>مستخدمي IBM FileNet P8 فقط.</b> حدد هذا الاختيار اذا كنت تريد فقط فتح ملف الوثيقة الأولية في برنامج المشاهدة. يمكن أن تحتوي الوثائق على عدة ملفات مصاحبة لها. سيقوم هذا الاختيار بفتح الملف الأولي فقط المصاحب للوثيقة. ",
		admin_desktop_redaction_save_mode: "اختيار التنقيح المفترض:",
		admin_desktop_redaction_save_mode_hover: "حدد نمط حفظ تنقيح برنامج مشاهدة ViewONE Virtual المفترض:</br>* سؤال المستخدم دائما للاختيار: سيؤدي الى عرض مربع الحوار بالادخال في نمط التنقيح، وذلك لسؤال المستخدم ما اذا كان يريد انهاء التخصيص كنسخة جديدة أو تكوين وثيقة جديدة أو تنزيل المحتوى. </br>* انهاء التخصيص كنسخة جديدة: سيؤدي دائما الى حفظ المحتوى المنقح في نسخة جديدة للوثيقة الحالية. </br>* حفظ كوثيقة جديدة بالكامل: سيؤدي دائما الى حفظ المحتوى المنقح كوثيقة جديدة كليا.</br>* تنزيل وحفظ على برنامج الوحدة التابعة: سيؤدي الى تنزيل المحتوى المنقح الى نظام الوحدة التابعة.",
		admin_desktop_redaction_save_mode_user_select: "سؤال المستخدم دائما للاختيار",
		admin_desktop_redaction_save_mode_new_version: "انهاء تخصيص كنسخة جديدة",
		admin_desktop_redaction_save_mode_new_document: "حفظ كوثيقة جديدة بالكامل",
		admin_desktop_redaction_save_mode_local_content: "تنزيل وحفظ على برنامج الوحدة التابعة",

		admin_desktop_document_add_mode: "اضافة مربع حوار الوثيقة:",
		admin_desktop_document_add_mode_hover: "حدد مربع الحوار اضافة لاستخدامه عند اضافة وثائق تم تكوينها بواسطة IBM Content Navigator:<ul><li>وثيقة جديدة منقحة بشكل دائم</li><li>عملية دمج وتقسيم جديدة للوثيقة</li><li>وثيقة Microsoft Office جديدة</li><li>وثيقة خدمة تحرير جديدة</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "اضافة وثيقة",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "اضافة وثيقة باستخدام قالب ادخال",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "دمج وتقسيم:",
		admin_desktop_merge_and_split_enable_hover: "حدد ما اذا كنت تريد منح المستخدمين الذين لديهم امكانية توصل الى سطح المكتب هذا امكانية دمج وتقسيم الوثائق باستخدام برنامج مشاهدة مدعم.",

		admin_desktop_merge_and_split_show_checkin: "عرض رسالة حث للمستخدمين لادخال قيم الخاصية عند قيامهم بانهاء تخصيص التغييرات بالوثيقة.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "اذا قمت بتحديد هذا الاختيار، سيتم عرض مربع الحوار انهاء تخصيص عند قيام المستخدمين بانهاء التغييرات بالوثيقة في نمط الدمج والتقسيم.",

		admin_desktop_available_categories: "الخصائص المتاحة",
		admin_desktop_selected_categories: "الخصائص المحددة",

		admin_layout_banner_title: "الشريط الاعلاني وصفحة تسجيل الدخول",
		admin_layout_title: "الشكل العام",

		admin_desktop_application_name: "اسم التطبيق:",
		admin_desktop_application_name_hover: "حدد اسم التطبيق لعرضه في خط العنوان.<br><br>ملحوظة: قم بتعريف اسم التطبيق للغات الأخرى في علامة تبويب التسميات المميزة / التسميات المميزة لسطح المكتب.",
		admin_desktop_theme: "النسق الرئيسي:",
		admin_desktop_theme_hover: "حدد ما اذا كان سيتم استخدام نسق IBM Content Navigator الرئيسي المفترض أو استخدام نسق مهيأ لسطح المكتب هذا. لاستخدام نسق رئيسي مهيأ، يجب أن تقوم بتكوين نسق رئيسي في قسم <b>النسق الرئيسي</b> بأداة الادارة.",
		admin_desktop_login_logo: "شعار صفحة تسجيل الدخول:",
		admin_desktop_login_logo_hover: "اذا كنت تريد تغيير الشعار الذي يتم عرضه في صفحة تسجيل الدخول، فيمكنك تحديد عنوان URL لملف الشعار. لكن، يفضل أن تقوم باستخدام نسق رئيسي مهيأ لتغيير الشعار.",
		admin_desktop_login_logo_url_hover: "أدخل عنوان URL لملف الشعار. اذا كان  الشعار موجود بنفس وحدة خدمة  تطبيق الانترنت كالوحدة التابعة للانترنت، أدخل عنوان URL المتعلق, على سبيل المثال: ‏‎/mycustomizations/login.png‎‏<br><br>يجب أن لا يزيد عرض الشعار عن 200 بكسل و 150 في الطول.<br><br>ومن المفضل أن يكون للشعار خلفية شفافة.",
		admin_desktop_banner_logo: "شعار خط العنوان:",
		admin_desktop_banner_logo_hover: "اذا كنت تريد تغيير الشعار الذي يتم عرضه  في خط العنوان، فيمكنك تحديد عنوان URL لملف الشعار. لكن، يفضل أن تقوم باستخدام نسق رئيسي مهيأ لتغيير الشعار.",
		admin_desktop_banner_logo_url_hover: "أدخل عنوان URL لملف الشعار. اذا كان  الشعار موجود بنفس وحدة خدمة  تطبيق الانترنت كالوحدة التابعة للانترنت، أدخل   عنوان URL المتعلق, على سبيل المثال: ‏‎/mycustomizations/banner.png‎‏<br><br>يجب أن لا يزيد عرض الشعار عن 72 بكسل و 36 في الطول.<br><br>ومن المفضل أن يكون للشعار خلفية شفافة.",
		admin_desktop_banner_background_color: "لون خلفية خط العنوان:",
		admin_desktop_banner_background_color_hover: "اذا كنت تريد تغيير لون  خلفية  خط العنوان، فيمكنك تحديد لون مهيأ. لكن، يفضل أن تقوم باستخدام نسق رئيسي مهيأ لتغيير لون خط العنوان.",
		admin_desktop_banner_background_color_custom_hover: "حدد اللون لشريط عنوان التطبيق كلون سداسي عشر.",
		admin_desktop_banner_application_name_color: "لون النص لاسم التطبيق:",
		admin_desktop_banner_application_name_color_hover: "اذا كنت تريد تغيير  لون  اسم التطبيق، فيمكنك تحديد لون مهيأ. لكن، يفضل أن تقوم باستخدام نسق رئيسي مهيأ لتغيير لون اسم التطبيق.",
		admin_desktop_banner_application_name_color_custom_hover: "حدد اللون الخاص باسم التطبيق كلون  سداسي عشر.",
		admin_desktop_banner_menu_color: "لون شارة خط العنوان:",
		admin_desktop_banner_menu_color_hover: "اذا قمت بتغيير لون خلفية شريط   العنوان، فانه قد يتطلب منك تغيير الوصف المنطقي للون الشارات التي توجد في   خط العنوان لجعلها مرئية. حدد ما اذا كان سيتم عرض النسخة الفاتحة أو الداكنة  لشارات خط العنوان.<br><br>لكن، يفضل أن تقوم باستخدام نسق رئيسي مهيأ لتغيير لون الشارات.",
		admin_desktop_login_page_content: "محتويات صفحة تسجيل الدخول:",
		admin_desktop_login_page_content_hover: "اذا كنت تريد عرض المزيد من   المعلومات عن صفحة تسجيل الدخول، مثل الاشعارات الخاصة بانقطاع التيار للنظام أو  التي يمكن للمستخدم الحصول على مساعدة عن أسماء المستخدمين وكلمات السرية،   فيمكنك تحديد عنوان URL للمحتويات التي تريد عرضها.",
		admin_desktop_login_page_content_url_hover: "أدخل عنوان URL لمحتويات صفحة  تسجيل الدخول. اذا كانت المحتويات موجودة بنفس وحدة خدمة  تطبيق الانترنت  كالحدة  التابعة للانترنت، أدخل عنوان URL المتعلق, على سبيل المثال:   ‏‎/mycustomizations/login.html‎‏",
		admin_desktop_password_rules: "قواعد كلمة السرية:",
		admin_desktop_password_rules_hover: "اذا كنت تريد امداد المستخدمين بالخطوات الارشادية الخاصة بتكوين كلمات السرية،  مثل الحروف المقصورة أو الحد الأدنى من الحروف، فيمكن للمستخدم تحديد عنوان URL للصفحة التي تتضمن قواعد كلمة السرية الخاصة بك.",
		admin_desktop_password_rules_url_hover: "أدخل عنوان URL لمحتويات قواعد   كلمة السرية. اذا كانت المحتويات موجودة بنفس وحدة خدمة  تطبيق الانترنت كوحدة   خدمة تطبيق  الانترنت، أدخل عنوان URL المتعلق, على سبيل المثال:   ‏‎/mycustomizations/passwords.html‎‏",
		admin_desktop_help_url: "عنوان URL لمساعدة المستخدم النهائي:",
		admin_desktop_help_url_hover: "يمكنك استخدام المساعدة التي يتم اتاحتها مع IBM Content Navigator، أو يمكنك اعادة توجيه المستخدمين الى محتويات المساعدة المهيأة بتنفيذ أحد التصرفات التالية:<br><br><ul><li>التوجه الى نظام المساعدة المهيأ</li><li>يتم اضافة مساعدة الى نسخة IBM Knowledge Center التي تم نشرها مع IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "أدخل عنوان URL لنظام المساعدة المهيأ. يقوم IBM Content Navigator بالحاق  ‏‎index.jsp?content=/com.ibm.usingeuc.doc/‎‏ واسم الملف الى نهاية عنوان URL الذي قمت بتحديده.  في روابط \"Learn more\" بواجهة التعامل للعمل، فيجب أن  يقوم نظام المساعدة باستخدام نفس أسماء ملفات  مساعدة المستخدم النهائي. ",
		admin_desktop_deprecated_appearance_title: "محددات متقادمة",
		admin_desktop_deprecated_appearance_instructions: "اذا كنت تقوم باستخدام نسق رئيسي مهيأ، سيتم احلال هذه المحددات بواسطة النسق الرئيسي المهيأ. يجب نقل هذه المحددات الى النسق الرئيسي المهيأ، والذي يقدم نمط تفصيلي بشكل أكثر من المحددات في هذا القسم. بالاضافة الى ذلك، يمكن استخدام النسق الرئيسي المهيأ بواسطة عدة أسطح مكتب.",

		admin_desktop_plugins_title: "اتاحة أو الغاء اتاحة البرامج المساعدة لسطح المكتب هذا.",
		admin_desktop_plugins_enable_all_plugins: "اتاحة كل البرامج المساعدة التي تم نشرها للاستخدام مع سطح المكتب هذا",
		admin_desktop_plugins_select_plugins: "حدد البرامج المساعدة التي تم نشرها لاتاحتها للاستخدام مع سطح المكتب هذا",
		admin_desktop_plugins_select_plugin: "تحديد البرنامج المساعد",

		admin_desktop_layout_features: "الخصائص التي يتم عرضها:",
		admin_desktop_layout_features_hover: "حدد الخصائص التي تريد منح المستخدمين امكانية توصل لها من سطح المكتب هذا. يتم عرض الخصائص بترتيب عرضها بالكشف.<br><br>عند القيام بتحديد خاصية، يمكنك تهيئة بعض التصرفات الخاصة بالخاصية في سطح المكتب، مثل مستودع التخزين المفترض الذي يتم تحديده للخاصية.",
		admin_desktop_layout_default_repository: "مستودع التخزين المفترض:",
		admin_desktop_layout_default_repository_layout_hover: "حدد مستودع التخزين الذي تم اختياره كالمستودع المفترض عند قيام المستخدمين بفتح هذه الخاصية.",
		admin_desktop_layout_document_thumbnails: "الصور المصغرة للوثيقة:",
		admin_desktop_layout_document_thumbnails_hover: "حدد ما اذا كان سيتم عرض   الصور  المصغرة للوثائق في جزء معلومات الوثيقة.<br><br>بعرض الصور المصغرة يمكن ابطاء أداء الوحدة التابعة للانترنت.",
		admin_desktop_layout_show_filmstrip_view: "مشاهدة شريط الصور:",
		admin_desktop_layout_show_filmstrip_view_hover: "حدد ما اذا كان سيتم   السماح للمستخدمين بتبديل عرض كشف المحتوى الى مشاهدة شريط الصور.<br><br>تقوم مشاهدة شريط الصور بتكوين معاينة لكل وثيقة قام المستخدم بتحديدها. لكن، باستخدام مشاهدة شريط الصور يمكن ابطاء أداء الوحدة التابعة للانترنت. بالاضافة لذلك، يجب أن تقوم بتوصيف برنامج مشاهدة تحويل HTML لمشاهدة الشكل النهائي للوثيقة.",
		admin_enabled: "‏اتاحة‏",
		admin_disabled: "الغاء-اتاحة",
		admin_include: "تضمين",
		admin_exclude: "استبعاد",
		admin_layout_teamspaces_default_repository: "مساحات الفريق:",
		admin_layout_entry_templates_default_repository: "قوالب الادخال:",
		admin_layout_other_features_default_repository: "بحث واستعرض:",
		admin_layout_work_default_repository: "العمل:",
		admin_layout_default_feature: "الخاصية المفترضة:",
		admin_default_category_placeholder: "حدد خاصية",
		admin_layout_default_feature_hover: "حدد الخاصية التي يتم عرضها عند قيام المستخدمين بتسجيل الدخول الى سطح  المكتب هذا.",
		admin_layout_default_feature_warning: "قد يؤثر تغيير الخاصية المفترضة على الوقت المطلوب لتحميل التطبيق.",
		admin_layout_feature_list_header: "الخاصية",
		admin_layout_show_statusbar: "خط الحالة:",
		admin_layout_show_statusbar_hover: "حدد ما اذا كان سيتم عرض خط الحالة في أسفل سطح المكتب.<br><br>اذا قمت باخفاء خط الحالة، يستطيع المستخدمين مشاهدة المعلومات الخاصة بالأحداث التي لا يوجد بها أخطاء، مثل:<ul><li>تم اضافة الوثيقة الى مستودع التخزين.</li><li>قامت عملية البحث بارجاع 59 وثيقة.</li></ul>",
		admin_layout_show_magazineview: "مشاهدة المجلة:",
		admin_layout_show_magazineview_hover: "حدد ما اذا كان سيتم السماح للمستخدمين بتبديل عرض كشف المحتوى الى مشاهدة المجلة.<br><br>تقوم مشاهدة المجلة بزيادة ارتفاع كل ادخال في كشف المحتوى، مما يقلل عدد البنود التي يمكن عرضها في كشف المحتوى في نفس الوقت.",
		admin_layout_show_detailsview: "مشاهدة التفاصيل:",
		admin_layout_show_detailsview_hover: "حدد ما اذا كنت تريد السماح للمستخدمين بتبديل عرض كشف المحتوى الى مشاهدة التفاصيل.<br><br>تقوم مشاهدة التفاصيل بتكبير رقم الصفوف المرئية في كشف المحتوى.",
		admin_feature_config_docinfopane_label: "نافذة معلومات الوثيقة:",
		admin_feature_config_docinfopane_hoverhelp: "حدد ما اذا كان المستخدمين يمكنهم التوصل الى نافذة معلومات الوثيقة في هذه الخاصية.",
		admin_feature_config_docinfopane_default_label: "التصرف المفترض:",
		admin_feature_config_docinfopane_expanded: "موسع",
		admin_feature_config_docinfopane_collapsed: "مطوي",
		admin_feature_config_docinfopane_expand_on_select: "عرض عن اختيار البند",
		admin_layout_features_title: "خصائص سطح المكتب",
		admin_layout_features_instructions: "حدد الخصائص التي يستطيع المستخدم التوصل لها من سطح المكتب هذا.  بالاضافة الى ذلك، يمكنك تهيئة التصرف الخاص بكل خاصية متضمنة في سطح المكتب.",
		admin_layout_components_title: "مكونات سطح المكتب الاضافية",
		admin_layout_components_instructions: "يمكنك الغاء اتاحة بعض مكونات سطح المكتب اذا كنت تريد واجهة تعامل مبسطة أو اذا كنت تريد تحسين أداء الوحدة التابعة للانترنت.",
		admin_layout_featureconfig_instructions: "حدد خاصية لتوصيفها",
		admin_layout_featureconfig_no_configuration: "لا يوجد توصيف خاصية متاح.",
		admin_layout_featureconfig_label: "توصيف الخاصية ${0}",
		admin_layout_featureconfig_title: "توصيف الخاصية",
		admin_layout_featureconfig_taskManagerURL: "لاستخدام هذه الخاصية، يجب اتاحة وتوصيف IBM Content Navigator للاتصال بخدمة ادارة المهام. قم باتاحة خدمة ادارة المهام في قسم <b>المحددات</b> لأداة الادارة هذه.",
		admin_feature_config_show_my_checkouts_label: "لوحة عمليات التخصيص الخاصة بي:",
		admin_feature_config_show_my_checkouts_hoverhelp: "تسمح لوحة عمليات التخصيص الخاصة بي للمستخدمين بتشغيل عملية البحث لكل البنود التي تم تخصيصها في مستودع تخزين خاص. حدد ما اذا كان المستخدمين يمكنهم التوصل الى لوحة عمليات التخصيص الخاصة بي من خاصية الصفحة الرئيسية.<br/><br/><b>قيد:</b> تتطلب هذه الخاصية الحصول على IBM Content Manager واحد على الأقل أو IBM FileNet P8 أو مستودع تخزين OASIS CMIS المرفق مع سطح المكتب هذا.",

		admin_feature_config_default_repository_icon_text: "مستودع التخزين المفترض",
		admin_show: "عرض",
		admin_hide: "اخفاء",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "لا يمكنك ازالة خاصية الادارة من سطح مكتب الاداري",
		admin_warning_label: "تحذير:",
		admin_layout_show_globaltoolbar: "خط الأدوات الشامل:",
		admin_layout_show_globaltoolbar_hover: "حدد ما اذا كان سيتم عرض خط الأدوات في خط العنوان أعلى سطح المكتب.<br><br>يتضمن خط الأدوات الشامل تصرفات تسمح للمستخدمين باضافة وثائق وحافظات والاحتفاظ بها بمستودع التخزين. تعتمد التصرفات المتاحة على مستودع التخزين الذي يقوم المستخدم بالتوصل اليه.",
		admin_interface_text_name_label: "نوع التسمية المميزة",

		admin_interface_text_label_description: "يمكنك تهيئة النص الذي سيتم عرضه   في مناطق  معينة من الوحدة التابعة للانترنت. سيتم عرض التسميات المميزة لكل   مستودعات التخزين وسطح  المكتب في التوصيف الخاص بك. قم بادخال النص الذي تريد   مشاهدته في واجهة التعامل في مجال  التسمية المميزة الحالية.<br><br><b>هام:</b> أي تغييرات تقوم باجرائها بالتسميات  المميزة لن يتم عرضها في أداة الادارة.",
		admin_interface_text_label_action: "التسميات المميزة للتصرفات",
		admin_interface_text_label_action_description: "سيتم عرض التسميات المميزة  للتصرفات  على الاختيارات وفي القوائم الموجودة في  الوحدة التابعة للانترنت.   ويمكنك تعريف تسميات  مختلفة للتصرفات وذلك لكل نوع من أنواع مستودعات التخزين.",
		admin_interface_text_label_application: "التسميات المميزة للتطبيق",
		admin_interface_text_label_application_description: "يتم عرض التسميات المميزة للتطبيق  في الوحدة التابعة للانترنت.",
		admin_interface_text_label_system: "التسميات المميزة لخصائص النظام",
		admin_interface_text_label_system_description: "تختلف خصائص النظام التي   يتم عرضها  طبقا لمستودع التخزين. ويمكنك تهيئة التسميات المميزة التي يتم   عرضها لخصائص النظام الخاصة  بالوثائق والحافظات في مستودع التخزين الخاص بك.",
		admin_interface_text_label_desktop: "التسميات المميزة لسطح المكتب",
		admin_interface_text_label_desktop_description: "اذا قمت بتهيئة اسم   التطبيق في سطح المكتب، فانه يمكنك تهيئة الاسم بلغات أخرى خلاف الانجليزية.   يمكنك أيضا تهيئة أسماء مساحات تطبيق IBM FileNet P8 على سطح المكتب.",

		admin_interface_text_system_label: "التسمية المميزة للنظام",
		admin_interface_text_current_label: "التسمية المميزة الحالية",
		admin_interface_text_default_label_heading: "التسمية المميزة المفترضة",
		admin_interface_text_default_label: "التسمية المميزة المفترضة:",
		admin_interface_text_displayed_in_label: "عرض الى",
		admin_interface_text_displayed_in_document_folder: "الوثائق والحافظات",
		admin_interface_text_displayed_in_document: "الوثائق",
		admin_interface_text_displayed_in_folder: "الحافظات",
		admin_interface_text_displayed_in_admin_application_space: "عنوان مساحة التطبيق",
		admin_interface_text_displayed_in_desktop: "التسمية المميزة للخاصية للتليفون المحمول",
		admin_interface_text_displayed_in_admin_application_name: "اسم التطبيق",

		admin_new_desktop: "سطح مكتب جديد",
		admin_new_repository: "مستودع تخزين جديد",
		admin_new_menu: "قائمة جديدة",
		admin_new_viewer_mapping: "مناظرة برنامج مشاهدة جديدة",
		admin_new_mapping_label: "مناظرة جديدة",
		admin_new_icon_mapping: "مناظرة الشارة الجديدة",
		admin_viewer_mapping_list_instructions: "يمكنك توصيف برامج المشاهدة التي   تقوم الوحدة  التابعة للانترنت باستخدامها لعرض الأنواع المختلفة من المحتويات.  تقوم مناظرة برنامج  المشاهدة بتعريف أنواع MIME التي تصاحب كل من برامج   المشاهدة التي تريد استخدامها. يمكنك  استخدام مناظرات متعددة لبرامج المشاهدة   اذا كنت تريد استخدام برامج مشاهدة مختلفة لأسطح  مكتب مختلفة.",
		admin_viewer_mapping_instructions: "حدد برامج المشاهدة التي تريد  استخدامها  لفتح  الملفات. اذا كنت تريد استخدام برنامج مشاهدة مهيأ، يجب أن  تقوم بتكامل  برنامج المشاهدة  كبرنامج مساعد قبل اضافته لمناظرة برنامج  المشاهدة.<br><br><b>هام:</b> عندما يقوم مستخدم بفتح وثيقة، تقوم الوحدة التابعة للانترنت بالبحث في كشف مناظرات برنامج المشاهدة الذي يستطيع فتح الوثيقة بناء على نظام التشغيل الذي يقوم المستخدم بتشغيله ومستودع التخزين الذي يتصل به المستخدم. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "برنامج مساعد جديد",
		admin_menu_list_instructions: "يمكنك تكوين خطوط أدوات وقوائم سياقية مهيأة  للتحكم في  التصرفات المتاحة للمستخدمين. لا يمكنك تحرير القوائم المفترضة،  لكن  يمكنك تكوين نسخ من  القوائم الحالية لقصر التصرفات المتاحة أو لاضافة  تصرفات  مهيأة يتم تعريفها في البرامج  المساعدة.<br><br>اذا كنت تريد تكوين نوع جديد للقائمة، يجب أن تقوم بتعريف القائمة في  برنامج مساعد.",
		admin_menu_id_hover: "يجب أن يكون الكود متفردا، ولا يمكنك تغيير الكود بعد حفظ القائمة.<br><br>يمكن أن يحتوي الكود على  حروف  أبجدية عددية فقط ويجب الالتزام بحالة الحروف.",
		admin_menu_id_disabled_hover: "لا يمكن تغيير كود القائمة. اذا كنت تريد استخدام كود  مختلف، يجب أن تقوم بتكوين قائمة جديدة.",
		admin_menu_default_instructions: "لا يمكنك تحرير هذه القائمة لأنها  القائمة  المفترضة. اذا كنت تريد تحرير هذه القائمة، يجب تكوين نسخة من  القائمة.",
		admin_menu_toolbar_instructions: "يمكنك قصر التصرفات المتاحة لخط الأدوات  هذا أو يمكنك  اضافة تصرفات مهيأة  تم تعريفها في برنامج مساعد. يمكنك أيضا  تنظيم التصرفات من خلال اضافة  فواصل  الى خط الأدوات.",
		admin_menu_toolbar_custom_instructions: "يتم تعريف خط الأدوات هذا بواسطة   برنامج  مساعد. اذا كنت تريد تحرير خط الأدوات هذا، يجب أن تقوم بتعديل   البرنامج المساعد أو تكوين  نسخة من خط الأدوات.",
		admin_menu_context_menu_instructions: "يمكنك قصر التصرفات المتاحة لهذه   القائمة  السياقية أو يمكنك اضافة تصرفات مهيأة تم تعريفها في برنامج مساعد.   يمكنك أيضا تنظيم  التصرفات من خلال اضافة فواصل وقوائم فرعية الى القائمة   السياقية.",
		admin_menu_context_menu_custom_instructions: "يتم تعريف القائمة السياقية   هذه بواسطة  برنامج مساعد. اذا كنت تريد تحرير هذه القائمة السياقية، يجب أن   تقوم بتعديل البرنامج  المساعد أو تكوين نسخة من القائمة السياقية.",
		admin_desktop_list_instructions: "يمكنك تكوين العديد من أسطح المكتب لمنح   المستخدمين  المختلفين امكانية توصل للمحتويات التي يتطلبونها. على سبيل   المثال، يمكنك تكوين سطح مكتب  يسمح للمستخدمين فقط بالبحث عن محتويات أو سطح   مكتب يمنح المستخدمين امكانية توصل الى  مستودع تخزين واحد. ",
		admin_plugin_updated: "تم تغيير التوصيف للبرنامج المساعد المحدد. يجب تجديد برنامج الاستعراض الخاص بك حتى يتم تطبيق التغييرات الخاصة بك.",
		admin_repository_ci_heading: "مستودع Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "مستودع FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "مستودع Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "مستودع Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "مستودع تخزين Content Management  Interoperability Services ‎(CMIS)‎: <b>${0}</b>",
		admin_repository_box_heading: "مستودع تخزين Box: <b>${0}</b>",
		admin_repository_generic_heading: "مستودع التخزين: <b>${0}</b>",

		admin_delete_confirmation_desktops: "هل تريد حذف أسطح المكتب المحددة؟\n${0} سطح مكتب تم تحديده.",
		admin_delete_confirmation_menus: "هل تريد حذف القوائم المحددة؟\n${0} قائمة تم  تحديدها.",
		admin_delete_confirmation_repositories: "هل تريد حذف مستودعات التخزين المحددة؟\n${0} مستودع تخزين تم تحديده.",
		admin_delete_confirmation_viewer_mappings: "هل تريد حذف مناظرات برنامج المشاهدة  المحددة؟ تم تحديد ${0} مناظرة.",
		admin_delete_confirmation_icon_mappings: "هل تريد حذف توصيفات الشارات المحددة؟\n${0}  شارة توصيف تم تحديدها.",
		admin_delete_confirmation_plugins: "هل تريد حذف البرامج المساعدة المحددة؟\n${0} برنامج مساعد تم تحديده.",
		admin_delete_confirmation: "هل تريد حذف البنود المحددة؟\n${0} بند تم تحديده.",

		admin_viewer_mapping_id_hover: "يجب أن يكون الكود متفردا، ولا يمكنك تغيير الكود بعد  حفظ مناظرة برنامج المشاهدة.<br><br>يمكن أن يحتوي الكود على  حروف  أبجدية عددية فقط ويجب الالتزام بحالة الحروف.",
		admin_viewer_mapping_id_disabled_hover: "لا يمكن تغيير كود مناظرة برنامج المشاهدة.  اذا كنت تريد استخدام كود مختلف، يجب أن تقوم بتكوين مناظرة برنامج مشاهدة جديدة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "لا يمكن حذف سطح المكتب المفترض.",

		admin_desktop_heading: "سطح المكتب: <b>${0}</b>",
		admin_menu_toolbar_heading: "خط الأدوات: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "خط الأدوات المهيأ: <b>${0}</b>",
		admin_menu_context_menu_heading: "القائمة السياقية: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "القائمة السياقية المهيأة: <b>${0}</b>",
		admin_plugin_heading: "البرنامج المساعد: <b>${0}</b>",
		admin_plugin_instructions: "يمكن أن يكون البرنامج المساعد ملف JAR أو ملف   فئة تم تحويله برمجيا.<br/><br/><b>هام: </b> يجب أن تكون وحدة خدمة تطبيق  IBM  Content Navigator قابلة للتوصل الى ملف البرنامج المساعد على نظام  الملفات  المحلي أو من خلال عنوان URL.",
		admin_plugin_list_instructions: "يجب استخدام أداة الادارة لتسجيل البرامج   المساعدة للوحدة التابعة للانترنت. اذا كان البرنامج المساعد يتطلب توصيف   اضافي، سيتم عرض معاملات التوصيف بعد تسجيل البرنامج المساعد.   <br /><br /><b>هام:</b> اذا قمت بتحرير البرنامج المساعد المشار اليه في مساحة  أخرى في أداة الادارة، مثل القائمة، فانه قد يتم مواجهة مشاكل في التصرف الخاص  بالبرنامج المساعد. بالاضافة الى ذلك، يتم استدعاء البرامج المساعدة بترتيب عرضها. اذا كان يجب تشغيل البرنامج المساعد قبل البرنامج مساعد آخر، تأكد من عرض البرامج المساعدة بالترتيب الذي يجب تشغيلها به.",
		admin_plugin_cannot_delete: "لا يمكن حذف البرامج المساعدة المحددة لأن بعض البرامج المساعدة تعتمد عليها.<br/>البرامج المساعدة المحددة: ${0}<br/>البرامج المساعدة التابعة: ${1}",
		admin_plugin_cannot_disable: "لا يمكن الغاء اتاحة البرامج المساعدة المتاحة لأن بعض برامج المساعدة تعتمد عليها.<br/>البرامج المساعدة المحددة: ${0}<br/>البرامج المساعدة التابعة: ${1}",
		admin_plugin_cannot_add: "لا يمكن اضافة البرنامج المساعد لأن بعض البرامج المساعدة التي يعتمد عليها غير موجودة أو تم الغاء اتاحتها. البرامج المساعدة غير الموجودة أو التي تم الغاء اتاحتها: ${0}",
		admin_plugin_cannot_enable: "لا يمكن اتاحة البرامج المساعدة المحددة لأن بعض البرامج المساعدة التي تعتمد عليها غير موجودة أو تم الغاء اتاحتها.<br/>البرامج المساعدة المحددة: ${0}<br/>البرامج المساعدة غير الموجودة أو التي تم الغاء اتاحتها: ${1}",
		admin_plugin_save_order: "حفظ الترتيب",
		admin_plugin_load: "تحميل",
		admin_plugin_load_hover: "حدد عنوان URL للبرنامج المساعد",
		admin_plugin_file_hover: "اذا كان ملف JAR للبرنامج المساعد على نظام   الملفات المحلي الخاص بك، فانه يمكنك ادخال المسار المصنف بالكامل أو عنوان URL  لملف البرنامج المساعد. اذا كان ملف JAR للبرنامج المساعد على وحدة خدمة عن   بعد، فانه يجب ادخال عنوان URL لملف البرنامج المساعد.",
		admin_plugin_classfolderpath_hover: "يجب أن يكون ملف الفئة الذي تم تحويله برمجيا على وحدة خدمة تطبيق الانترنت IBM Content Navigator.<br/><br/>أدخل المسار المصنف بالكامل  للحافظة  التي تم تكوين وتحويل فئات البرنامج المساعد برمجيا بها.<br/><br/>لا يجب أن  يحتوي  المسار على اسم مجموعة برامج فئة البرنامج المساعد. على سبيل  المثال،  المسار المفترض لفئة البرنامج المساعد النموذجي على نظام Windows هو   C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "أدخل الاسم بالكامل لفئة Java داخل  ملف  الفئة الذي يجب تحميله واستدعائه كفئة للبرنامج المساعد.<br/>على سبيل  المثال،  اسم فئة البرنامج المساعد النموذجي هو com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "لم يتم ايجاد ملف JAR للبرنامج المساعد في عنوان URL المحدد. تأكد من وجود ملف JAR على وحدة خدمة تطبيق الانترنت ومن صحة عنوان URL واسم الملف.",
		admin_plugin_for_repository_not_loaded: "لا يمكنك تحرير مستودع التخزين هذا. البرنامج المساعد الذي يقوم بتعريف ودعم نوع مستودع التخزين هذا لم يتم تحميله. في علامة تبويب البرامج المساعدة، يجب تحرير البرامج المساعدة  للتحقق من أنه تم توصيفها بطريقة صحيحة ومن أنه تم تحميلها.",
		admin_plugin_repository_types: "أنواع مستودعات التخزين:",
		admin_plugin_viewers: "برامج المشاهدة:",
		admin_plugin_features: "الخصائص:",
		admin_plugin_layouts: "الأشكال العامة:",
		admin_plugin_not_available: "غير متاح",
		admin_plugin_config_params: "معاملات التوصيف:",
		admin_viewer_def_heading: "مناظرة برنامج المشاهدة: <b>${0}</b>",
		admin_users_and_groups: "المستخدمين والمجموعات",
		admin_general: "‏عام‏",
		admin_logging: "سجل",
		admin_authentication: "التوثيق",		
		admin_rolebase_role: "الوظيفة:",
		admin_settings_logging_instructions: "يمكنك استخدام السجل لحل المشاكل الخاصة بالوحدة التابعة للانترنت. يمكنك تنقيح السجل اذا كنت تعلم أن المشكلة تحدث في فئة Java معينة أو لمستخدم معين. يتم كتابة معلومات الخطأ في ملفات سجلات الأخطاء لوحدة خدمة تطبيق الانترنت.",
		admin_settings_logging_instructions2: "<b>محدد سجل تصحيح الأخطاء</b><br />اذا كنت تعلم بحدوث مشكلة لمستخدم أو جهاز النظام الرئيسي لوحدة تابعة خاصة، يمكنك استخدام سجل تصحيح الأخطاء الخاص بك لهذا الجهاز أو المستخدم. يمكنك الحصول على معلومات تصحيح الأخطاء في بيئة الانتاج بدون التأثير بشكل ملحوظ على أداء النظام الخاص بك.<br /><br /><b>هام: </b> اذا قمت بتحديد مستخدم أو جهاز النظام الرئيسي للوحدة التابعة، ستقوم هذه المحددات باحلال أية محددات سجل أخرى. بعد الحصول على المعلومات التي تريدها، حدد هذا الاختيار بالقيمة <b>لا شئ</b> لاستئناف التسجيل القياسي لبيئة التشغيل الخاصة بك.",
		admin_settings_export_config_hover: "تصدير معلومات توصيف النظام الحالية الى ملف للاستخدام مع IBM Support Assistant Data Collector. يتم حفظ الملف بالمكان الذي تم تعريفه بواسطة خاصية النظام user.home Java.",
		admin_logging_level: "السجل على مستوى التطبيق:",
		admin_logging_level_hover: "تؤثر مستويات التسجيل على كمية المعلومات التي   يتم تخزينها  بوحدة الخدمة الخاصة بك. بتحديد <b>Error</b> يتم تخزين أقل كمية   من معلومات التسجيل.  بتحديد <b>Debug</b> يتم تخزين أكبر كمية من   المعلومات.<br /><br />لا تقم بتحديد  <b>Debug</b> في بيئة انتاج الا اذا طلب   منك القيام بذلك بواسطة دعم برامج IBM.",
		admin_logging_level_0: "بدون تسجيل",
		admin_logging_level_1: "خطأ",
		admin_logging_level_2: "تحذير",
		admin_logging_level_3: "معلومات",
		admin_logging_level_4: "تصحيح الأخطاء",
		admin_logging_classes: "التسجيل على مستوى فئة Java:",
		admin_logging_classes_hover: "افتراضيا، يتم تضمين كل فئات Java ومجموعات البرامج فى سجلات خطأ وحدة خدمة تطبيق الانترنت. لكن، يمكنك تحديد الفئات أو مجموعات البرامج التي سيتم تضمينها أو استبعادها من عملية التسجيل الخاصة بك. يمكنك استخدام سجلات خطأ وحدة خدمة تطبيق الانترنت لتحديد الفئات التي سيتم تضمينها أو استبعادها.<br><br>اذا كنت تعلم أن المشكلة تحدث في فئة معينة، يمكنك تضمين هذه الفئة في ملفات السجل. عند تضمين فئة في سجلات الخطأ الخاصة بك، سيتم استبعاد كل الفئات الأخرى من ملف السجل.<br><br>اذا كنت تعلم ان المشكلة لن تحدث في فئة وتريد تقليل حجم ملف السجل، يمكنك استبعاد هذه الفئة من ملفات السجلات.",
		admin_logging_classes_include: "تضمين",
		admin_logging_classes_include_all: "كل الفئات",
		admin_logging_classes_include_specified: "فئات معينة",
		admin_logging_classes_include_specified_msg: "حدد الفئات المطلوب تضمينها.",
		admin_logging_classes_exclude: "استبعاد",
		admin_logging_classes_exclude_none: "‏لا شيء‏",
		admin_logging_classes_exclude_specified: "فئات معينة",
		admin_logging_classes_exclude_specified_msg: "حدد الفئات المطلوب استبعادها.",
		admin_logging_debug: "تسجيل الأخطاء الى:",
		admin_logging_debug_hover: "<b>هام:</b> يجب مراجعة ملفات سجلات وحدة خدمة تطبيق الانترنت قبل تحديد مستخدم أو عنوان IP لجهاز النظام الرئيسي للوحدة التابعة. يجب أن تطابق القيمة التي تقوم باتاحتها القيمة التي يتم عرضها في ملف السجل.",
		admin_logging_debug_none: "لا شيء (المفترض)",
		admin_logging_debug_host: "أجهزة النظام الرئيسي للوحدة التابعة (عناوين IP)",
		admin_logging_debug_host_msg: "حدد عنوان IP لواحد أو أكثر من أجهزة الوحدة التابعة التي تريد تسجيل معلومات تصحيح الأخطاء لها. استخدم فاصلة لفصل عناوين IP.<br /><br /><b>هام:</b> ارجع الى ملفات سجل وحدة خدمة تطبيق الانترنت قبل تحديد عنوان IP. يجب أن تطابق القيمة التي تقوم باتاحتها القيمة التي يتم عرضها في ملف السجل.",
		admin_logging_debug_user: "المستخدمين",
		admin_logging_debug_user_msg: "حدد اسم المستخدم لواحد أو أكثر من المستخدمين الذين تريد تسجيل معلومات تصحيح الأخطاء لهم. استخدم فاصلة لفصل أسماء المستخدمين.<br /><br /><b>هام:</b> ارجع الى ملفات سجل وحدة خدمة تطبيق الانترنت قبل تحديد اسم المستخدم. يجب أن تطابق القيمة التي تقوم باتاحتها القيمة التي يتم عرضها في ملف السجل.",

		admin_office_settings_logging_instructions: "يمكنك استخدام التسجيل لحل مشاكل IBM Content Navigator for Microsoft Office. يمكنك تنقيح التسجيل اذا كنت تعلم أن المشكلة تحدث في فئة معينة أو لمستخدم معين. يتم كتابة معلومات الخطأ في ملفات سجل التطبيق في أجهزة النظام الرئيسي للوحدة التابعة الى IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>محدد سجل تصحيح الأخطاء</b><br />اذا كنت تعلم بحدوث مشكلة لجهاز النظام الرئيسي لوحدة تابعة معينة أو مستخدم IBM Content Navigator for Microsoft Office، فانه يمكنك استخدام سجل تصحيح الأخطاء الخاص بك لهذا الجهاز أو المستخدم. يمكنك الحصول على معلومات تصحيح الأخطاء في بيئة الانتاج بدون التأثير بشكل ملحوظ على أداء النظام الخاص بك. <br /><br /><b>هام: </b> اذا قمت بتحديد مستخدم أو جهاز النظام الرئيسي للوحدة التابعة، ستقوم هذه المحددات باحلال أية محددات سجل أخرى. بعد الحصول على المعلومات التي تريدها، حدد هذا الاختيار بالقيمة <b>لا شيء</b> لاستئناف السجل القياسي لبيئة تشغيل IBM Content Navigator for Microsoft Office الخاصة بك. ",
		admin_office_logging_debug_hover: "<b>هام:</b> ارجع الى ملفات السجل لجهاز الوحدة التابعة قبل تحديد المستخدم أو عنوان IP لجهاز النظام الرئيسي للوحدة التابعة. يجب أن تطابق القيمة التي تقوم باتاحتها القيمة التي يتم عرضها في ملف السجل. ",
		admin_office_logging: "سجل Office",
		admin_office_logging_classes: "التسجيل على مستوى الفئة:",
		admin_office_logging_classes_hover: "بصفة مفترضة، تم تضمين كل الفئات ومجموعات البرامج في سجلات أخطاء IBM Content Navigator for Microsoft Office. لكن، يمكنك تحديد الفئات أو مجموعات البرامج التي سيتم تضمينها أو استبعادها من عملية التسجيل الخاصة بك. يمكنك استخدام سجلات جهاز الوحدة التابعة لتحديد الفئات التي سيتم تضمينها أو استبعادها.<br /><br />اذا كنت تعلم أن المشكلة تحدث في فئة معينة، يمكنك تضمين هذه الفئة في ملفات السجل. عند تضمين فئة في سجلات الأخطاء الخاصة بك، سيتم استبعاد كل الفئات الأخرى من ملفات السجل. <br /><br />اذا كنت تعلم ان المشكلة لن تحدث في فئة وتريد تقليل حجم ملف السجل، يمكنك استبعاد هذه الفئة من ملفات السجلات. ",
		admin_office_logging_debug_hover: "<b>هام:</b> ارجع الى ملفات السجل لجهاز الوحدة التابعة قبل تحديد المستخدم أو عنوان IP لجهاز النظام الرئيسي للوحدة التابعة. يجب أن تطابق القيمة التي تقوم باتاحتها القيمة التي يتم عرضها في ملف السجل.",
		admin_office_logging_additional_settings: "المحددات الاضافية:",
		admin_office_logging_additional_settings_hover: "تحديد المحددات الاضافية",
		admin_office_logging_file_size: "حجم ملف السجل",
		admin_office_logging_file_size_hover: "حدد الحجم الذي سيقوم IBM Content Navigator for Microsoft Office به بتكوين ملف سجل جديد. عند وصول ملف السجل الى الحد الأقصى للحجم، سيتم اعادة تسمية السجل الحالي ليتضمن التاريخ (ذو النسق YYYYMMdd) والرقم المتزايد للملف (على سبيل المثال،  ICNExcelAddin-20121116-5.log) ويتم تكوين ملف سجل جديد. ",
		admin_office_logging_show_stacktrace_on_dialogs: "عرض تتبع الرصة بمربعات الحوار",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "يمكنك اختياريا عرض معلومات تتبع الرصة بمربعات حوار الرسالة لتسهيل عملية حل المشكلة. حتى اذا لم تقم باتاحة هذا الاختيار، فانه دائما ما يتم تضمين معلومات تتبع الرصة التفصيلية في سجلات أخطاء IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "شارات الحالة",
		admin_icon_state_icon: "شارة الحالة",
		admin_icon_state: "الحالة",
		state_contains_label: "الحالة تتضمن",
		admin_icon_state_instructions: "يمكنك تهيئة الشارات التي يتم عرضها بجانب الوثائق  والحافظات وبنود العمل في مستودعات التخزين الخاصة بك.<br><br><b>ملحوظة:</b> يمكنك  تحديد ما اذا كان سيتم عرض شارات الحالة لكل مستودع تخزين في بيئة التشغيل الخاصة بك.",
		admin_icon_state_dialog_title: "مناظرة شارة الحالة",
		admin_icon_state_dialog_instructions: "يمكنك مناظرة الحالة المحددة لشارة معرفة من قبل  يتم اتاحتها مع الوحدة التابعة للانترنت أو لشارة مهيأة.",

		admin_icon_mapping_twisty: "شارات النوع MIME",
		admin_icon_mapping_dialog_title: "مناظرة الشارة",
		admin_icon_mapping: "مناظرة الشارة",
		admin_icon_mapping_instructions: "يمكنك مناظرة كشف بأنواع MIME لشارة معرفة من قبل يتم  اتاحتها مع الوحدة التابعة للانترنت أو لشارة مهيأة.",
		admin_icon_mapping_list_instructions: "كما يمكن تهيئة الشارات التي يتم   عرضها لأنواع  MIME المختلفة التي يتم تخزينها في مستودع التخزين الخاص بك.   تقوم الوحدة التابعة للانترنت  باستخدام الشارات بالترتيب الذي يتم عرضهم به.   اذا تم عرض نوع MIME أكثر من مرة، سيتم  استخدام أول شارة مصاحبة للنوع MIME   هذا.",
		admin_icon_mapping_icon_label: "ما هي الشارة التي تريد استخدامها؟",
		admin_icon_mapping_file_name: "الشارة المهيأة:",
		admin_icon_mapping_file_name_heading: "الشارة المهيأة",
		admin_icon_mapping_file_name_placeholder: "حدد عنوان URL للشارة",
		admin_icon_mapping_file_name_hover: "أدخل عنوان URL للشارة. اذا كانت الشارة موجودة على نفس وحدة خدمة تطبيق الانترنت مثل الوحدة التابعة للانترنت، أدخل عنوان URL المتعلق. على سبيل المثال: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "شارة معرفة من قبل:",
		admin_icon_mapping_class_name_heading: "شارة معرفة من قبل",
		admin_icon_mapping_class_name_hover: "حدد الشارة التي يتم اتاحتها مع الوحدة التابعة  للانترنت.",
		admin_icon_mapping_class_name_placeholder: "حدد شارة",

		admin_p8_instructions: "يتم مشاركة هذه المعلومات بواسطة كل مستودعات تخزين FileNet Content Manager التي تم توصيفها للوحدة التابعة للانترنت.",
		admin_p8_collaboration_config: "توصيف FileNet Collaboration Services الاختياري",
		admin_p8_collaboration_config_instructions: "يمكنك توصيف هذه المعاملات اذا كنت تريد تهيئة FileNet Collaboration Services لبيئة تشغيل IBM FileNet P8 الخاص بك.",
		admin_p8_use_url_incoming: "استخدم عنوان URL بالطلبات الواردة لتكوين عناوين URL للاستجابة:",
		admin_p8_use_url_incoming_hover: "في معظم بيئات تشغيل FileNet Collaboration Services، يمكنك استخدام عنوان URL للطلب الوارد لتكوين عنوان URL في الاستجابة. حدد <b>نعم</b> الا اذا تم تطبيق أحد الحالات التالية على بيئة التشغيل الخاصة بك:<ul><li>تريد قيام تطبيقات الوحدة التابعة التوصل الى خدمات FileNet Collaboration Services من خلال عنوان URL معين.<li>تؤدي محددات وحدة خدمة proxy الخاصة بك الى قيام FileNet Collaboration Services بتقديم عناوين URL غير صحيحة.</ul>",

		admin_p8_use_url_incoming_http: "عنوان URL لخدمات FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "حدد عنوان URL الذي تستطيع من خلاله تطبيقات الوحدة التابعة التوصل الى FileNet Collaboration Services باستخدام النسق: http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "عنوان URL لخدمات FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "اذا كان قد تم توصيف FileNet Collaboration Services لاستخدام SSL، حدد عنوان URL الى HTTPS الذي تستطيع تطبيقات الوحدة التابعة من خلاله التوصل الى FileNet Collaboration Services بالنسق https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "اخفاء عناوين البريد الالكتروني للمستخدمين في استجابات وحدة الخدمة:",
		admin_p8_hide_email_addresses_hover: "يمكنك اخفاء عناوين البريد الالكتروني للمستخدمين في استجابات وحدة الخدمة اذا كنت تريد التوافق مع سياسات السرية. على سبيل المثال، يمكنك اخفاء كشف عناوين البريد الالكتروني للمستخدمين عند قيام وحدة الخدمة بارجاع كشف الوثائق ومعلومات عن المستخدمين الذي قاموا بتكوين أو تحرير الوثائق.",

		admin_p8_mask_user_ids: "حجب أكواد المستخدمين في ملفات السجل:",
		admin_p8_mask_user_ids_hover: "يمكنك اخفاء أسماء المستخدمين في ملفات سجل FileNet Collaboration Services اذا كنت تريد التوافق مع سياسات السرية. عند اتاحة هذا الاختيار، يتم استبدال أسماء المستخدمين بقيم مجزأة. وهذا يسمح لك بتقديم ملفات السجل لشركات خارجية، مثل IBM، لأغراض الدعم دون المساس بأسماء المستخدمين أو سجلات النشاط.",

		admin_p8_soft_delete: "نقل الملفات التي تم حذفها الى حاوية الاستعادة:",
		admin_p8_soft_delete_hover: "عند قيام المستخدمين بحذف بنود، يتم نقل البنود الى حاوية الاستعادة، بدلا من حذف البنود من مستودع التخزين. تظل البنود في حاوية الاستعادة حتى يتم ازالتها. يتم تجاهل هذه المحددات اذا لم يكن مستودع التخزين المستهدف يدعم حاويات الاستعادة.<br><br><b>قيد:</b> يتم دعم حاويات الاستعادة على IBM FileNet P8 النسخة 5.2 أو أحدث وتتطلب البرنامج الاضافي Social Collaboration Base Extensions.",

		admin_p8_download: "توصيف Content Download HTTP Cache",
		admin_p8_download_instructions: "اذا كانت مستودعات تخزين IBM FileNet Content Manager الخاصة بك تحتوي على عدة ملفات كبيرة، فانه يمكنك توصيف Content Download HTTP Cache (CDHC) للسماح الى FileNet Collaboration Services باعادة توجيه طلبات المحتويات بأمان للملفات الكبيرة الى وحدة خدمة الانترنت المخصصة.<br/><br/>تتطلب هذه الخاصية IBM HTTP Server. بالاضافة الى ذلك، يجب تحديث ملف httpd.conf الى IBM HTTP Server.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "حدد ما اذا كنت تريد اتاحة Content Download HTTP Cache (CDHC) لكل مستودعات تخزين IBM FileNet Content Manager repositories في بيئة التشغيل الخاصة بك. يمكنك تحديد الحد الأدنى لحجم الملف الذي يتم تخزين الملفات به بالذاكرة الوسيطة.",
		admin_p8_download_cache_folder: "دليل الذاكرة الوسيطة المصنف بالكامل:",
		admin_p8_download_cache_folder_hover: "حدد المسار المصنف بالكامل للدليل حيث تريد تخزين الملفات التي تم تخزينها بالذاكرة الوسيطة. يمكن أن يكون الدليل على أي نظام تشغيل أو جهاز، مثل دليل شبكة اتصال مشترك، طالما يتم عرضه كنظام ملفات الى  FileNet Collaboration Services و IBM HTTP Server.",
		admin_p8_download_cache_url: "الاسم البديل لمكان الذاكرة الوسيطة:",
		admin_p8_download_cache_url_hover: "حدد الاسم البديل الذي يتم استخدامه للاشارة الى دليل الذاكرة الوسيطة من عنوان URL الى FileNet Collaboration Services. حدد الاسم البديل بالنسق /alias، على سبيل المثال، /cdhc.<br/><br/>عند تضمين /cdhc في عنوان URL، سيتم اعادة توجيه التطبيق الى دليل الذاكرة الوسيطة المصنف بالكامل.",
		admin_p8_download_cache_max_files: "الحد الأقصى لعدد الملفات التي تم تخزينها بالذاكرة الوسيطة:",
		admin_p8_download_cache_max_files_hover: "عند الوصول الى الحد الأقصى لعدد الملفات، سيتم ازالة الملف القديم من الذاكرة الوسيطة.<br><br>اذا قمت بتحديد الحد الأقصى لعدد الملفات التي سيتم تخزينها بالذاكرة الوسيطة والحد الأقصى لحجم الذاكرة الوسيطة، سيتم ازالة أقدم ملف من الذاكرة الوسيطة عند تحقق الأدنى للشرطين.",
		admin_p8_download_cache_max_size: "الحد الأقصى لحجم الذاكرة الوسيطة (بالجيجابايت):",
		admin_p8_download_cache_max_size_hover: "عند الوصول الى الحد الأقصى لحجم الذاكرة الوسيطة، سيتم ازالة أقدم ملف من الذاكرة الوسيطة.<br/><br/>اذا قمت بتحديد الحد الأقصى لعدد الملفات التي سيتم تخزينها بالذاكرة الوسيطة والحد الأقصى لحجم الذاكرة الوسيطة، سيتم ازالة أقدم ملف من الذاكرة الوسيطة عند تحقق الأدنى للشرطين.",
		admin_p8_download_cache_cleanup_duration: "الحد الأقصى لمدة اعادة التنظيم (بالثواني):",
		admin_p8_download_cache_cleanup_duration_hover: "حدد الحد الأقصى لمقدار الوقت الذي يمكن أن تستغرقه عملية اعادة التنظيم. المدة المفترضة هي 5 ثواني.<br><br>سيتم ازالة أية ملفات عرضة للحذف لكن ما زالت في الذاكرة الوسيطة بعد عملية اعادة التنظيم، خلال عملية اعادة التنظيم المستقبلية.",
		admin_p8_download_cache_cleanup_min: "الحد الأدنى للفترة الزمنية بين عمليات اعادة تنظيم الذاكرة الوسيطة (بالثواني):",
		admin_p8_download_cache_cleanup_min_hover: "حدد الحد الأدنى لمقدار الوقت الذي يجب أن ينقضي بين عمليات اعادة تنظيم الذاكرة الوسيطة. الوقت المفترض هو 3,600 ثانية (ساعة).<br><br>تحدث عمليات اعادة تنظيم الذاكرة الوسيطة فقط عند وجود طلب فعال لتحميل المحتويات من الذاكرة الوسيطة. اذا كانت الطلبات تأتي في كل دقيقة، ستحدث عملية اعادة التنظيم كل ساعة. لكن، اذا انقضت ثلاثة ساعات بين طلبات التحميل، لن تحدث عملية اعادة التنظيم حتى يتم استلام طلب التحميل التالي.",
		admin_p8_download_cache_min_lifetime: "الحد الأدنى للوقت في الذاكرة الوسيطة (بالثواني):",
		admin_p8_download_cache_min_lifetime_hover: "حدد الحد الأدنى للوقت الذي يتم الاحتفاظ خلاله بالملف في الذاكرة الوسيطة قبل ازالته. الوقت المفترض هو 3,600 ثانية (ساعة).<br><br>حتى اذا وصلت الذاكرة الوسيطة الى الحد الأقصى للحجم أو كانت تحتوي على الحد الأقصى لعدد الملفات، لا يمكن حذف أقدم ملف في الذاكرة الوسيطة حتى تنقضي مدة بقاء الملف في الذاكرة الوسيطة لمقدار الوقت المحدد.",
		admin_p8_download_cache_size_threshold: "الحد الأدنى لحجم الملف بالذاكرة الوسيطة (بالكيلو بايت):",
		admin_p8_download_cache_size_threshold_hover: "حدد الحد الأدنى للحجم الذي يجب استخدام CDHC به لتخزين الملفات بالذاكرة الوسيطة. اذا كان الملف أصغر من الحجم المحدد، سيتم توجيه الملف خلال وحدة خدمة تطبيق الانترنت التي تم نشر FileNet Collaboration Services عليها. الحجم المفترض هو 1,000 كيلوبايت.",
		admin_p8_download_guard_header: "نص رأس HTTP للحماية:",
		admin_p8_download_guard_header_hover: "اذا لم يقم تطبيق الوحدة التابعة بتوجيه طلب من خلال IBM HTTP Server، فانه لا يمكن تحميل المحتويات التي تم تخزينها في الذاكرة الوسيطة. يمكنك تحديد أن الطلبات الواردة فقط ذات نص رأس HTTP معين (التي يتم اضافتها الى الطلبات من IBM HTTP Server) يمكنها التوصل الى المحتويات التي تم تخزينها بالذاكرة الوسيطة لمنع حالات الفشل في التحميل.<br><br>تم توصيف نص رأس HTTP في IBM HTTP Server وتقديمه بكل الطلبات الواردة التي يتم توجيهها من خلال IBM HTTP Server. اذا لم يحتوي الطلب على نص رأس HTTP، سيتم توجيه المحتويات خلال وحدة خدمة تطبيق الانترنت بدلا من وحدة خدمة IBM HTTP.",
		admin_p8_download_generate_config: "تكوين توصيف",
		admin_p8_download_generate_config_label: "توصيف IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "ليتم تشغيل توصيف CHDC، يجب تحديث ملف httpd.conf الى IBM HTTP Server. اضغط على تكوين توصيف لتكوين العبارات التي يجب اضافتها الى ملف httpd.conf. file.",

		admin_logging_viewone_pro: "سجل ViewONE Professional:",
		admin_logging_viewone_virtual: "سجل ViewONE Virtual:",
		admin_logging_viewone_streamer: "سجل وحدة برامج وحدة خدمة تدفق الوثيقة:",
		admin_logging_viewone_streamer_hover: "تكون اختيارات سجل وحدة برامج وحدة خدمة تدفق الوثيقة مناسبة عند اتاحة تسلسلات ملفات PDF أو TIFF في قسم <b>Daeja ViewONE</b> من أداة الادارة.",
		admin_logging_viewone_redaction: "سجل وحدة برامج وحدة خدمة التنقيح الدائم:",
		admin_logging_viewone_redaction_hover: "لن تكون اختيارات سجل وحدة برامج وحدة خدمة التنقيح الدائم مناسبة الا اذا كنت مخولا لاستخدام وحدة برامج التنقيح من Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "متخصص",
		admin_daeja_viewonepro_stream_pdf_documents: "تدفق ملفات PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "اذا كان لديك وثائق PDF كبيرة في مستودع التخزين الخاص بك، فانه يمكنك اتاحة برنامج المشاهدة لتدفق محتويات الوثيقة لجعل عملية مشاهدة هذه الوثائق أسرع للمستخدمين. لكن، اذا لم تعمل خاصية التدفق في بيئة التشغيل الخاصة بك، فانه يمكنك الغاء اتاحتها.",
		admin_daeja_viewonepro_stream_tiff_documents: "تدفق ملفات TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "اذا كان لديك وثائق TIFF كبيرة في مستودع التخزين الخاص بك، فانه يمكنك اتاحة برنامج المشاهدة لتدفق محتويات الوثيقة لجعل عملية مشاهدة هذه الوثائق أسرع للمستخدمين. لكن، اذا لم تعمل خاصية التدفق في بيئة التشغيل الخاصة بك، فانه يمكنك الغاء اتاحتها.",
		admin_daeja_viewonepro_show_file_buttons: "مفاتيح الملف",
		admin_daeja_viewonepro_show_file_menus: "قوائم الملف",
		admin_daeja_viewonepro_enable_file_keys: "مفاتيح التشغيل السريع للملف",
		admin_daeja_viewonepro_file_keys_hover_help: "حدد ما اذا كنت تريد أن يقوم المستخدمين باستخدام مفاتيح المسارات المختصرة للوحة المفاتيح للتعامل مع الملفات، على سبيل المثال، لفتح أو حفظ ملف. للحصول على المزيد من المعلومات عن مفاتيح تشغيل سريع معينة، ارجع الى وصف معامل FileKeys في دليل IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "مفاتيح الطباعة",
		admin_daeja_viewonepro_show_print_menus: "قوائم الطباعة",
		admin_daeja_viewonepro_enable_print_keys: "مفاتيح التشغيل السريع للطباعة",
		admin_daeja_viewonepro_print_keys_hover_help: "حدد ما اذا كنت تريد أن يقوم المستخدمين باستخدام مفاتيح المسارات المختصرة للوحة المفاتيح للتعامل مع ملفات الطباعة، على سبيل المثال، طباعة صفحة أو طباعة وثيقة. للحصول على المزيد من المعلومات عن مفاتيح تشغيل سريع معينة، ارجع الى وصف معامل PrintKeys في دليل IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "مفاتيح العكس",
		admin_daeja_viewonepro_annotation_tooltip: "النص التوضيحي للتعليق التوضيحي المهيأ والمفترض:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "أدخل النص الذي سيتم عرضه عند عدم تحديد أي نص توضيحي للتعليق التوضيحي المهيأ. يمكن أن يتضمن النص رموز مميزة يمكن استبدالها. على سبيل المثال، قام &quot;&lt;القائم بالتكوين&gt; بتكوين هذا التعليق التوضيحي على &lt;createdateonly&gt;.&quot; للحصول على المزيد من المعلومات عن الرموز المميزة التي يمكن استبدالها، ارجع الى المعامل customAnnotationsToolTip في IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "استخدام نص توضيحي مهيأ معرف مسبقا",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "استخدم نص توضيحي مهيأ معرف بواسطة النظام يتم عرضه في مربع النص بأسفل",
		admin_daeja_viewonepro_help_url: "عنوان URL للمساعدة:",
		admin_daeja_viewonepro_help_url_hover_help: "حدد عنوان URL لصفحة الانترنت التي تحتوي على المطبوعات الفنية للمساعدة لبرنامج المشاهدة. يقوم الاختيار مساعدة بخط أدوات برنامج المشاهدة وتصرف القائمة مساعدة بفتح صفحة الانترنت. اذا لم تقم بتحديد عنوان URL، لن يتم عرض اختيار المساعدة وتصرف القائمة.",
		admin_daeja_viewonepro_image_stamp_resource_context: "سياق المصدر لخاتم الصورة:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "المهام الواجبة",
		admin_daeja_viewonepro_route_docs: "توجيه المحتويات غير المدعمة الى برنامج الاستعراض:",
		admin_daeja_viewonepro_route_docs_hover_help: "يستطيع المستخدمين مشاهدة ملفات الصور غير المدعمة بتوجيهها الى برنامج الاستعراض، والذي يقوم بفتح التطبيق المناسب لمشاهدة الملف. على سبيل المثال، لفتح وثيقة Microsoft Word، يقوم ببرنامج الاستعراض باستخدام برنامج مشاهدة Microsoft Word.",
		admin_daeja_viewonepro_scale: "ملائمة آلية للصورة:",
		admin_daeja_viewonepro_scale_best: "أفضل ملائمة",
		admin_daeja_viewonepro_scale_ftow: "ملائمة للعرض",
		admin_daeja_viewonepro_scale_ftoh: "ملائمة للارتفاع",
		admin_daeja_viewonepro_enable_hotkeys: "اتاحة مفاتيح التشغيل السريع:",
		admin_daeja_viewonepro_show_features: "عرض المفاتيح والقوائم:",
		admin_daeja_custom_settings: "المحددات الاضافية:",
		admin_daeja_custom_settings_hover_help: "يمكنك اضافة معاملات أخرى بتحديد اسم وقيمة المعامل. على سبيل المثال، يمكنك تحديد &quot;خطوط تصفح&quot; والقيمة &quot;true&quot; اذا كنت تريد عرض خطوط التصفح عند تغيير حجم الصورة الى حجم أكبر من مساحة العرض. للحصول على المزيد من المعلومات عن أسماء وقيم المعاملات، ارجع الى IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "افتراضي",
		admin_daeja_virtual_annotation_tooltip: "النص التوضيحي للتعليق التوضيحي المهيأ والمفترض:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "أدخل النص الذي سيتم عرضه عند عدم تحديد أي نص توضيحي للتعليق التوضيحي المهيأ. يمكن أن يتضمن النص رموز مميزة يمكن استبدالها. على سبيل المثال، قام &quot;&lt;القائم بالتكوين&gt; بتكوين هذا التعليق التوضيحي على &lt;createdateonly&gt;.&quot; للحصول على المزيد من المعلومات عن الرموز المميزة التي يمكن استبدالها، ارجع الى المعامل customAnnotationsToolTip في IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "استخدام نص توضيحي مهيأ معرف مسبقا",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "استخدم نص توضيحي مهيأ معرف بواسطة النظام يتم عرضه في مربع النص بأسفل",
		admin_daeja_virtual_image_stamp_resource_context: "سياق المصدر لخاتم الصورة:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "المهام الواجبة",
		admin_daeja_virtual_license_path:"مسار ملفات الترخيص: ",
		admin_daeja_virtual_license_path_hover_help:"حدد المسار المصنف بالكامل للدليل الذي يحتوي على ملفات الترخيص lic-server-virtual.v1 و  lic-server.v1. ",
		admin_default_license_path:"استخدم مسار ملفات الترخيص المفترض ",
		admin_license_path_specified:"استخدم مسار ملفات الترخيص المهيأ ",

		admin_daeja_streamer: "وحدة خدمة",
		admin_daeja_streamer_cache_root: "دليل الذاكرة الوسيطة:",
		admin_daeja_streamer_cache_root_hover_help: "حدد المسار المصنف بالكامل للدليل حيث تريد تخزين الملفات التي تم تخزينها في الذاكرة الوسيطة للتوصل السريع. يمكن أن يكون الدليل أي نظام تشغيل أو جهاز، مثل دليل شبكة الاتصال، اذا كان يتم عرضه كنظام ملفات الى TIBM Content Navigator و IBM HTTP Server.  استخدم دليل محلي لتحسين الأداء.",
		admin_daeja_streamer_settings: "المحددات الاضافية:",
		admin_daeja_streamer_settings_hover_help: "يمكنك اضافة معاملات أخرى بتحديد اسم وقيمة المعامل. على سبيل المثال، يمكنك تحديد “cookieAllowedDomainList”  وكشف مفصول بفاصلات لوحدات خدمة النظام الرئيسي.  للحصول على المزيد من المعلومات عن أسماء وقيم المعاملات، ارجع الى IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "تنقيح دائم",
		admin_daeja_redaction_settings: "المحددات:",
		admin_daeja_redaction_settings_hover_help: "يمكنك اضافة معاملات أخرى بتحديد اسم وقيمة المعامل. على سبيل المثال، يمكنك تحديد “burnIncrementalAnnotations” و ”true”. للحصول على المزيد من المعلومات عن أسماء وقيم المعاملات، ارجع الى IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "محددات جديدة",
		admin_daeja_setting_dialog_title_edit: "تحرير المحددات",
		admin_daeja_setting_dialog_hover_help: "يمكنك اضافة معاملات أخرى بتحديد اسم وقيمة المعامل. على سبيل المثال، يمكنك تحديد “scrollbars” و “true” اذا كنت تريد عرض خطوط التصفح عند تغيير حجمها الى حجم أكبر من مساحة العرض.",
		admin_daeja_setting_dialog_field_hover_help: "للحصول على المزيد من المعلومات عن أسماء وقيم المعاملات، ارجع الى Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "سجل Daeja ViewONE",
		admin_daeja_logging_trace: "اتاحة سجل التتبع",
		admin_daeja_logging_trace_net: "اتاحة سجل شبكة الاتصال",
		admin_daeja_logging_trace_annotations: "اتاحة سجل التعليقات التوضيحية",
		admin_daeja_logging_log_file: "ملف السجل:",
		admin_daeja_logging_instructions: "يمكنك استخدام السجل لاكتشاف وحل المشاكل في Daeja ViewONE Professional و Daeja ViewONE Virtual. اذا كنت تعلم بحدوث مشكلة لخاصية معينة، يمكنك استخدام السجل الخاص بك لهذه الخاصية.",

		admin_v1pro_logging_trace_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل العامة ببرنامج المشاهدة.<br><br>يتم كتابة معلومات السجل في شاشة التحكم الرئيسية الى Java على جهاز الوحدة التابعة. يمكنك التوصل الى شاشة التحكم الرئيسية الى Java من لوحة التحكم (Windows) أو تفضيلات النظام (Mac) لنظام التشغيل الخاص بك.",
		admin_v1pro_logging_trace_net_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل التالية:<ul><li>المشاكل في وصلة وحدة الخدمة الخاصة بك</li><li>المشاكل في أنواع MIME</li><li>المشاكل في الملفات الطويلة جدا</li></ul>بالاضافة الى ذلك، يمكنك استخدام سجل تتبع شبكة الاتصال لتحديد مكان حدوث التأخير عند استخدام Daeja ViewONE Professional.<br><br>يتم كتابة معلومات السجل في شاشة التحكم الرئيسية الى Java على جهاز الوحدة التابعة. يمكنك التوصل الى شاشة التحكم الرئيسية الى Java من لوحة التحكم (Windows) أو تفضيلات النظام (Mac) لنظام التشغيل الخاص بك.",
		admin_v1pro_logging_trace_annotations_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل مع تكوين أو حفظ أو تحميل التعليقات التوضيحية.<br><br>يتم كتابة معلومات السجل في شاشة التحكم الرئيسية الى Java على جهاز الوحدة التابعة. يمكنك التوصل الى شاشة التحكم الرئيسية الى Java من لوحة التحكم (Windows) أو تفضيلات النظام (Mac) لنظام التشغيل الخاص بك.",

		admin_virtual_logging_trace_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل العامة ببرنامج المشاهدة.<br><br>بصفة مفترضة، يتم كتابة معلومات السجل في ملف virtual.log في الدليل الفرعي config لدليل تركيب IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل التالية:<ul><li>المشاكل في وصلة وحدة الخدمة الخاصة بك</li><li>المشاكل في أنواع MIME</li><li>المشاكل في الملفات الطويلة جدا</li></ul>بالاضافة الى ذلك، يمكنك استخدام سجل تتبع شبكة الاتصال  لتحديد مكان حدوث التأخير عند استخدام Daeja ViewONE Virtual.<br><br>بصفة مفترضة، يتم كتابة معلومات السجل في ملف virtual.log في الدليل الفرعي config لدليل تركيب IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل مع تكوين أو حفظ أو تحميل التعليقات التوضيحية.<br><br>بصفة مفترضة، يتم كتابة معلومات السجل في ملف virtual.log في الدليل الفرعي config لدليل تركيب IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "اذا قمت باتاحة التسجيل لبرنامج المشاهدة، يجب تحديد المسار المصنف بالكامل واسم ملف السجل الذي تريد تخزين معلومات السجل به.  يفضل أن تقوم بتسمية ملف السجل بالاسم virtual.log.",

		admin_streamer_logging_trace_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل العامة في Document Streaming Server Module.<br><br>بصفة مفترضة، يتم  كتابة معلومات السجل في ملف streamer.log، الذي يوجد في الدليل الفرعي للتوصيف لدليل تركيب IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل التالية:<ul><li>المشاكل في وصلة وحدة الخدمة الخاصة بك</li><li>حدوث مشاكل في أنواع MIME معينة</li><li>المشاكل في الملفات الطويلة جدا</li></ul>بالاضافة الى ذلك، يمكنك استخدام سجل تتبع شبكة الاتصال لتحديد مكان حدوث التأخير عند استخدام Document Streaming Server Module.<br><br>بصفة مفترضة، يتم  كتابة معلومات السجل في ملف streamer.log، الذي يوجد في الدليل الفرعي للتوصيف لدليل تركيب IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "اذا قمت باتاحة التسجيل لوحدة برامج وحدة خدمة تسلسل مخرجات الوثيقة، فانه يجب تحديد الاسم والمسار المصنف بالكامل لملف السجل الذي تريد تخزين معلومات التسجيل به.  يفضل أن تقوم بتسمية ملف السجل بالاسم streamer.log.",

		admin_redaction_logging_trace_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل العامة باستخدام Permanent Redaction Server Module.<br><br>بصفة مفترضة، يتم كتابة معلومات السجل في ملف redacttofile.log، الذي يوجد في الدليل الفرعي لتوصيف دليل تركيب IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "استخدم هذه المحددات لاكتشاف وحل المشاكل التالية:<ul><li>المشاكل في وصلة وحدة الخدمة الخاصة بك</li><li>حدوث مشاكل في أنواع MIME معينة</li><li>المشاكل في الملفات الطويلة جدا</li></ul>بالاضافة الى ذلك، يمكنك استخدام سجل تتبع شبكة الاتصال لتحديد مكان حدوث التأخير عند استخدام Permanent Redaction Server Module.<br><br>بصفة مفترضة، يتم كتابة معلومات السجل في ملف redacttofile.log، الذي يوجد في الدليل الفرعي لتوصيف دليل تركيب IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "اذا قمت باتاحة التسجيل لوحدة برامج وحدة خدمة التنقيح الدائم، فانه يجب تحديد الاسم والمسار المصنف بالكامل لملف السجل الذي تريد تخزين معلومات التسجيل به.  يفضل أن تقوم بتسمية ملف السجل بالاسم redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "توصيف الخصائص لبرامج المشاهدة والخدمات الخاصة بك",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "اذا كنت تستخدم الوحدة التابعة للانترنت   للاتصال بمستودع  تخزين Content Manager OnDemand واحد أو أكثر، يجب أن تحدد  المعلومات التي تتطلبها مجموعة  أدوات OnDemand Web Enablement Kit حتى تعمل   بطريقة صحيحة. يتم مشاركة هذه المعلومات  بواسطة كل مستودعات تخزين Content   Manager OnDemand التي تم توصيفها للوحدة التابعة  للانترنت.",
		admin_ondemand_language: "لغة:",
		admin_ondemand_tempdir: "دليل ODWEK المؤقت:",
		admin_ondemand_tracegrp: "تتبع ODWEK",
		admin_ondemand_tracedir: "دليل التتبع:",
		admin_ondemand_tracelevel: "مستوى التتبع:",
		admin_ondemand_tracelevel_0: "0 - بدون تسجيل",
		admin_ondemand_tracelevel_1: "1 - تسجيل رسائل الخطأ",
		admin_ondemand_tracelevel_2: "2 - تسجيل رسائل الخطأ والتحذير",
		admin_ondemand_tracelevel_3: "3 - تسجيل رسائل الخطأ والتحذير والرسائل الاعلامية",
		admin_ondemand_tracelevel_4: "4 - تسجيل كل الرسائل، متضمنة تتبع الوظائف",
		admin_ondemand_max_trace_filesize: "الحد الأقصى لحجم ملف التتبع:",
		admin_ondemand_max_trace_filesize_unlimited: "غير محدود",
		admin_ondemand_max_trace_filesize_limited: "محدود (يفضل)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "هذه القيمة خارج المدى, يحب أن تكون القيمة رقم صحيح بين 1 و 1,000,000.",
		admin_ondemand_afp2pdf_installdir: "دليل تركيب ‏‎AFP2PDF‎‏:",
		admin_ondemand_language_hover: "حدد اللغة التي يقوم ODWEK بارجاع الرسائل بها.",
		admin_ondemand_tempdir_hover: "أدخل الدليل الذي تم تخزين ملفات OnDemand Web Enablement Kit المؤقتة عليه أثناء التشغيل. يجب أن تقوم بادخال مسار مصنف بالكامل لأحد الأدلة الموجودة على وحدة خدمة تطبيق الانترنت.",
		admin_ondemand_tracedir_hover: "أدخل الدليل الذي تريد تخزين ملف تتبع ODWEK ذو الاسم arswww.trace به. يجب أن تقوم بادخال مسار مصنف بالكامل لأحد الأدلة الموجودة على وحدة خدمة تطبيق الانترنت.",
		admin_ondemand_tracelevel_hover: "حدد مستوى معلومات التسجيل التي يتم   كتابتها بالملف  arswww.trace. <b>تسجيل رسائل الخطأ</b> يتم تسجيل أقل كمية من  معلومات التسجيل. <b>تخزين  كل الرسائل، متضمنا تتبع الوظيفة</b> يتم تسجيل   أكبر كمية من المعلومات.<br /><br />عدم  التحديد<b>يتم تسجيل كل الرسائل،   متضمنا تتبع الوظيفة</b> في بيئة انتاج الا اذا طلب منك  القيام بذلك بواسطة   دعم برامج IBM.",
		admin_ondemand_max_trace_filesize_hover: "حدد ما اذا كنت تريد السماح   بزيادة حجم ملف تتبع ODWEK الى حجم غير محدود أو ما اذا كنت تريد أن تقوم   الوحدة التابعة للانترنت بتكوين ملفات سجل جديدة عند وصول ملف السجل الى حجم   معين. الاختيار المفترض هو السماح بزيادة حجم ملف سجل التتبع حتى يتم ايقاف   تطبيق الانترنت على وحدة خدمة تطبيق الانترنت.",
		admin_ondemand_max_trace_unlimited_hover: "حدد هذا الاختيار اذا كنت تريد   كتابة معلومات تتبع ODWEK في ملف سجل واحد. اذا قمت بتحديد هذا الاختيار، قد   يكون لديك ملف سجل كبير جدا لا يمكن فتحه باستخدام برنامج مشاهدة الملفات   القياسية.",
		admin_ondemand_max_trace_limited_hover: "حدد هذا الاختيار اذا كنت تريد   كتابة معلومات تتبع ODWEK في ملفات سجل أصغر. عند وصول ملف السجل الى الحد   الأقصى للحجم، سيتم اعادة تسمية السجل الحالي ليتضمن التاريخ   (arswww.trace.YYYYMMDD.HHMMSS) وسيتم تكوين ملف سجل جديد.",
		admin_ondemand_afp2pdf_installdir_hover: "اذا كنت تريد استخدام وظيفة   AFP2PDF Transform لتحويل وثائق AFP الى وثائق PDF للمشاهدة والطباعة، حدد   الدليل الذي تم تركيب وظيفة AFP2PDF Transform به على وحدة خدمة تطبيق   الانترنت.  على سبيل المثال: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "موجهي النظام",
		admin_adminusers_heading_text_multi: "يجب أن تحدد المستخدمين الذين يتوافر  لديهم  صلاحيات ادارية في الوحدة التابعة للانترنت. يستطيع موجهي النظام فقط   تسجيل الدخول لسطح  المكتب الاداري.<br /><br /><b>هام:</b> أكواد المستخدمين   الخاصة بموجهي نظام IBM Content  Navigator يجب أن تطابق:<ul><li>أكواد المستخدمين التي توجد بوحدة خدمة تطبيق الانترنت  الخاصة بك. لا يجب أن  تكون أكواد المستخدمين لموجهي نظام في وحدة خدمة تطبيق الانترنت.</li><li>أكواد المستخدمين الموجودة في مستودع التخزين المفترض الذي تم توصيفه لكل سطح مكتب يتضمن  الخاصية Administration.</li></ul>",
		admin_adminusers_heading_text_single: "يجب أن تحدد المستخدمين الذين  يتوافر  لديهم  صلاحيات ادارية في الوحدة التابعة للانترنت. يستطيع موجهي  النظام فقط  تسجيل الدخول لسطح المكتب الاداري.<br /><br /><b>هام:</b> أكواد  المستخدمين   الخاصة بموجهي نظام IBM Content  Navigator يجب أن تطابق أكواد  المستخدمين التي  توجد في وحدة خدمة تطبيق الانترنت. لا يجب  أن تكون أكواد  المستخدمين لموجهي  نظام بوحدة خدمة تطبيق  الانترنت.",
		admin_adminusers_newuser: "مسؤول النظام الجديد:",
		admin_adminusers_add: "‏اضافة‏",
		admin_adminusers_remove: "ازالة",
		admin_adminusers_listheading: "موجهي النظام",
		admin_adminusers_nameInvalid: "يجب أن تكون القيمة متكررة.",

		admin_sync_server_instructions: "<b>مستخدمي FileNet P8 فقط:</b> اذا كنت تخطط لاتاحة خدمات التزامن لواحدة أو أكثر من مستودعات التخزين، يجب توصيف برنامج الوحدة التابعة للانترنت لاستخدام خدمات التزامن. يتم مشاركة توصيف خدمات التزامن بواسطة كل مستودعات التخزين في بيئة التشغيل الخاصة بك.",
		admin_settings_instructions: "القيم التي تحددها في علامة تبويب المحددات تنطبق على سطح  المكتب في التوصيف الخاص بك.",
		admin_autocomplete: "ملء أسماء المستخدمين آليا:",
		admin_autocomplete_hover: "حدد ما اذا كنت تريد الوحدة التابعة للانترنت أن  تقوم بتخزين  أسماء المستخدمين في ملف  تعريف الارتباط لبرنامج الاستعراض   لتمكين برنامج الاستعراض من  ملء أسماء المستخدمين آليا في الوحدة التابعة   للانترنت أثناء تسجيل الدخول.<br><br>اذا  قمت باتاحة هذا الاختيار، سيتم  تخزين  اسم المستخدم الخاص بآخر مستخدم قام بتسجيل الدخول  للوحدة التابعة  للانترنت في  ملف تعريف الارتباط لبرنامج الاستعراض ويتم عرضه آليا في صفحة   تسجيل الدخول عند  قيام مستخدم بفتح الوحدة التابعة للانترنت.<br><br>يجب أن تقوم بالغاء اتاحة  هذا الاختيار اذا تم التوصل الى التطبيق من وحدات عمل مشتركة، أو اذا كنت تريد تخزين أسماء  المستخدمين في ملفات تعريف ارتباط برنامج الاستعراض.<br /><br />لا ينطبق هذا الاختيار على تطبيقات التليفون المحمول أو التطبيقات المهيأة.",
		admin_autocomplete_enable: "‏اتاحة‏",
		admin_autocomplete_disable: "الغاء-اتاحة",
		admin_cultural_collation: "استخدام الفرز وفقا لمحددات اللغة:",
		admin_cultural_collation_hover: "اذا قمت باتاحة الفرز وفقا لمحددات اللغة،  يتم اجراء  عملية الفرز بوحدة خدمة مستودع التخزين. يمكن أن يؤدي ذلك الى  تقليل  أداء الوحدة التابعة  للانترنت.<br><br>يمكن أن يؤدي الغاء اتاحة الفرز وفقا لمحددات اللغة الى تحسين أداء  الوحدة التابعة للانترنت.",
		admin_cultural_collation_enable: "‏اتاحة‏",
		admin_cultural_collation_disable: "الغاء-اتاحة",
		admin_base_ui_style: "نمط النسق الرئيسي",
		admin_base_ui_style_hover: "حدد نمط النسق الرئيسي المفترض المستخدم في برنامج الوحدة التابعة للانترنت. يتم استخدام هذا النمط فقط على أسطح المكتب التي تستخدم النسق الرئيسي <b>المفترض </b> (كما هو محدد في علامة التبويب <b>المظهر العام</b> لتوصيف سطح المكتب).<br/></br><b>القيود: </b> اذا كانت توصيفات سطح المكتب الخاصة بك تستخدم نسق رئيسية مهيأة، ستكون النسق الرئيسية المهيأة بناءا على النمط التقليدي بصرف النظر عن النمط الذي تقوم بتحديده.",
		admin_base_ui_style_classic: "تقليدي",
		admin_access_control_access: "تحديد امكانية التوصل الى مستخدمين ومجموعات   محددة",
		admin_access_control_access_show: "عرض بيانات التحكم في التوصل",
		admin_access_control_access_enable: "نعم",
		admin_access_control_access_disable: "لا",
		admin_mobile_access: "السماح بالتوصل من خلال تطبيقات التليفون المحمول",
		admin_mobile_access_hover: "بصفة مفترضة، يستطيع المستخدمين التوصل الى   الوحدة التابعة للانترنت من خلال تطبيق IBM Content Navigator iOS.   <br /><br /><b>هام:</b> اذا قمت بمنع المستخدمين من التوصل الى الوحدة التابعة  للانترنت من خلال تطبيق  iOS، فان المستخدمين مازال يمكنهم التوصل الى الوحدة   التابعة للانترنت من خلال برامج استعراض الانترنت على أجهزة التليفون المحمول   الخاصة بهم ومن خلال أية تطبيقات  مهيأة تم كتابتها باستخدام IBM Content   Navigator API وتعمل على أجهزة التليفونات المحمولة.",
		admin_mobile_access_enable: "نعم",
		admin_mobile_access_disable: "لا",
		admin_error: "معلومات رسالة الخطأ:",
		admin_error_custom: "بحث محتويات الدعم المهيأة",
		admin_error_default: "بحث محتوى IBM Support <BDO DIR='RTL'>(</BDO>المفترض<BDO DIR='RTL'>)</BDO>",
		admin_error_hover: "حدد المكان الذي تريد توجيه المستخدمين اليه للحصول على مزيد من المعلومات عند عرض رسالة خطأ. يمكنك توجيه المستخدمين الى المعلومات التي توجد في IBM Support portal، أو يمكنك توجيه المستخدمين لمصدر داخلي، مثل مكتب المساعدة.",
		admin_error_URL: "بادئة عنوان URL:",
		admin_error_URL_hover: "أدخل عنوان URL للمصدر الذي تريد توجيه المستخدمين   اليه عند حدوث  خطأ، مثل مكتب المساعدة. على سبيل المثال:   http://localhost:port_number. تقوم الوحدة  التابعة للانترنت بالحاق رقم   الرسالة الى عنوان URL.",
		admin_prompt_close_without_save: "هل تريد الاغلاق بدون حفظ التغييرات  التي  قمت بها؟",
		admin_object_expiration_time: "الفترة الزمنية لتجديد الذاكرة الوسيطة   (بالدقائق):",
		admin_object_expiration_time_hover: "يمكنك زيادة مقدار وقت الاحتفاظ  بعناصر  التوصيف، مثل سطح المكتب، في الذاكرة الوسيطة لتحسين أداء برنامج  الانترنت.  الوقت المفترض 10 دقائق. الحد الأقصى للوقت هو 1440 دقيقة (1 يوم).<br /><br />يجب اعادة بدء  تطبيق الانترنت ليتم تطبيق التغييرات الخاصة بك.<br /><br />اذا  تم نشر IBM Content Navigator في بيئة تشغيل مجمعة ذات اتاحة  عالية، لن يتم نشر  أية تغييرات لعناصر التوصيف في العقد في نظام المجموعة حتى  يتم تجديد الذاكرة  الوسيطة.",
		admin_temp_file_cleanup_interval: "الفترة الزمنية للمسح الضوئي لاعادة تنظيم الذاكرة الوسيطة لبرنامج المشاهدة (بالساعات):",
		admin_temp_file_cleanup_interval_hover: "يجب جدولة عدد مرات اجراء مسح للدليل المؤقت لايجاد وحذف والملفات المؤقتة المنتهية. افتراضيا، يتم اجراء مسح ضوئي لدليل المؤقت كل ستة ساعات. يمكنك تحديد 6-48 ساعة.",
		admin_temp_file_expiration_interval: "انتهاء صلاحية ذاكرة التخزين المؤقت لبرنامج المشاهدة (بالساعات):",
		admin_temp_file_expiration_interval_hover: "حدد مقدار الوقت الذي تظل فيه الملفات المؤقتة، المتعلقة بالأنشطة في برنامج المشاهدة، موجودة بذاكرة التخزين المؤقت لبرنامج الاستعراض. افتراضيا، تنتهي صلاحية هذه الملفات المؤقتة بعد 24 ساعة. يمكنك تحديد 12-48 ساعة.",
		admin_encryption_key_hover: "المفاتيح المستخدمة لوظائف تشفير لوحة التجول.",
		admin_encryption_key: "مفتاح التشفير:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "وضع العلامة التجارية",
		admin_mobile_branding_main_color: "اللون الرئيسي:",
		admin_mobile_branding_secondary_color: "اللون الثانوي:",
		admin_mobile_device_title: "ادارة MaaS360",
		admin_mobile_device_enable_maas360: "اتاحة MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "اتاحة المساعدة الخاصة بامرار المؤشر من MaaS360 هنا",
		admin_mobile_device_maas360_developer_id: "كود تعريف مطور MaaS360 :",
		admin_mobile_device_maas360_license_key: "مفتاح ترخيص MaaS360 :",
		admin_mobile_settings_title: "‏المحددات‏",
		admin_mobile_email_address_hover_help: "يتم استخدام عنوان البريد الالكتروني بتطبيق التليفون المحمول عند قيام المستخدم بالضغط على \"ارسال تقرير الخطأ.\"",
		admin_mobile_email_address: "عنوان البريد الالكترونى:",
		admin_invalid_email_address_message: "عنوان البريد الالكتروني الذي قمت بادخاله ليس بالنسق الصحيح. أدخل العنوان الصحيح وأعد المحاولة.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "بعض البيانات تعتبر غير صحيحة.",
		admin_configuration_parameters: "معاملات التوصيف",
		admin_configuration_optional_features: "الخصائص الاختيارية",
		admin_configuration_optional_features_p8_instructions: "حدد الخصائص التي تريد اتاحتها بمستودع التخزين هذا.<p><b>هام:</b> اذا تم اتاحة خاصية تقوم بتركيب البرنامج المساعد بمستودع التخزين، يجب الاتصال بمستودع التخزين كمسؤول نظام Content Platform Engine أو Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "حدد الخصائص التي تريد اتاحتها بمستودع التخزين هذا.<p><b>هام:</b> تقوم هذه الخصائص بتعديل نموذج البيانات بمستودع التخزين. لاتاحتها، يجب الاتصال بمستودع التخزين كمسؤول نظام لوحدة خدمة المكتبة.</p>",
		admin_system_properties: "خصائص النظام",
		admin_system_properties_for: "خصائص النظام الى:",
		admin_available_properties: "الخصائص المتاحة",
		admin_displayed_properties: "الخصائص المعروضة",
		admin_selected_properties: "الخصائص المحددة",
		admin_selected_filtered_properties: "الخصائص المخفية",
		admin_available_operators: "المعاملات المعروضة",
		admin_selected_filtered_operators: "المعاملات المخفية",
		admin_system_properties_shown: "الخصائص المعروضة",
		admin_system_properties_hidden: "الخصائص المخفية",
		admin_available_menu_items: "التصرفات المتاحة:",
		admin_selected_menu_items: "التصرفات المحددة:",
		admin_menu_global: "يتم تطبيق ذلك عند عدم تحديد بنود:",
		admin_menu_multiple_document: "يتم تطبيق ذلك عند تحديد بنود متعددة:",
		admin_menu_privileges: "الصلاحيات المطلوبة:",
		admin_menu_plugin: "برنامج مساعد:",
		admin_menu_repository_types: "أنواع مستودعات التخزين:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "فاصل",
		admin_browse: "استعراض",
		admin_search: "‏بحث‏",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "التنقيح على أساس الوظيفة",
		admin_connections_library_enabled: "تم اتاحة IBM Connections",
		admin_office_conf: "تحرير التكامل",
		admin_desktop_conf_label: "توصيف سطح المكتب",
		admin_ms_office_conf_label: "توصيف Office",
		admin_workflows: "مسارات العمل",
		admin_file_types: "أنواع الملفات",
		admin_file_type_contains_label: "يحتوي نوع الملف",
		admin_name_propepty: "الاسم",
		admin_cm_name_property_default: "استخدام الاسم المفترض",
		admin_cm_name_property_default_hover: "بصفة مفترضة، يتم استخدام خاصية   الاسم المتسلسل هرميا الى ICM ‏(ICM$NAME)‏ كاسم للبند، اذا كان قد تم تعريف   الخاصية للبند.  اذا لم تكن خاصية الاسم المتسلسل هرميا الى ICM ‏(ICM$NAME)‏   متاحة، سيتم استخدام الخاصية الأولى التي يتم تعليمها بالشارة \"represents\"   على أنها اسم البند.",
		admin_cm_name_property: "تحديد خاصية اسم البند",
		admin_cm_name_property_hover: "حدد الخاصية التي يتم استخدامها على أنها  اسم  الوثائق والحافظات.",
		admin_name_property: "خاصية الاسم:",
		admin_doc_name_property: "خاصية اسم الوثيقة:",
		admin_doc_name_property_hover: "حدد الخاصية التي تم استخدامها كاسم للوثيقة.",
		admin_folder_name_property: "خاصية اسم الحافظة:",
		admin_folder_name_property_hover: "حدد الخاصية التي تم استخدامها كاسم للحافظة.",
		admin_all_searches_label: "عدد عمليات البحث التي سيتم عرضها:",
		admin_unlimited: "بدون حد",
		admin_limit: "الحد الى",
		admin_repository: "مستودع التخزين:",
		admin_application_space: "مساحة التطبيق",
		admin_available_application_spaces: "مساحات التطبيق المتاحة:",
		admin_selected_application_spaces: "مساحات التطبيق المحددة:",
		admin_label: "التسمية المميزة",
		admin_repository_box_placeholder: "حدد مستودع تخزين Box",
		admin_repository_placeholder: "حدد مستودع تخزين",
		admin_search_match: "مطابقة:",
		admin_search_match_all: "مطابقة كل معايير البحث",
		admin_search_match_any: "مطابقة أي من معايير البحث",
		admin_search_match_hover: "حدد الاختيار الذي يتم تحديده بصفة مفترضة في القائمة <b>اختيارات الخاصية</b>.",

		admin_repository_redactions_instructions: "يمكنك توصيف التنقيحات على أساس الوظيفة لمستودع التخزين هذا.",
		admin_repository_redaction_policies_description: "يمكنك تكوين وادارة سياسات التنقيح، التي تقوم بمصاحبة أسباب التنقيح مع المستخدمين والمجموعات التي يمكنهم قراءة البيانات التي تلتزم بالسياق ويمكنها تحرير التعليقات التوضيحية التي تقوم بحماية هذه البيانات التي تلتزم بالسياق من المشاهدة.",
		admin_repository_redaction_roles_instruction: "يمكنك تكوين وظيفة تنقيح لارفاق المستخدمين والمجموعات المحددة مع امكانية قراءة البيانات التي تلتزم بالسياق أو امكانية تحرير التعليقات التوضيحية التي تقوم بحماية البيانات من المشاهدة. يجب ارفاق وظيفة التنقيح مع سبب التنقيح في سياسة التنقيح قبل أن يستطيع هؤلاء المستخدمين والمجموعات بقراءة البيانات أو تحرير التعليقات التوضيحية.",
		admin_repository_redaction_reasons_instruction: "يمكنك توصيف أسباب التنقيح لمستودع التخزين الخاص بك.",
		admin_repository_redaction_policies: "توصيف سياسة التنقيح",
		admin_repository_redaction_roles: "توصيف وظائف التنقيح",
		admin_repository_redaction_reasons: "توصيف أسباب التنقيح",
		admin_repository_redaction_roles_type: "النوع",
		admin_repository_redaction_roles_type_hover: "يستطيع المحرر تكوين أو تعديل أو حذف أنواع معينة من عمليات التنقيح على أساس الوظيفة بينما يستطيع القائم بالمشاهدة مشاهدة أنواع معينة من البيانات التي تلتزم بالسياق.",
		admin_repository_redaction_roles_type_editor: "برنامج التحرير",
		admin_repository_redaction_roles_type_viewer: "برنامج المشاهدة",
		admin_repository_redaction_roles_membership: "العضوية",
		admin_repository_redaction_roles_membership_hover: "حدد المحررين الذين تريد منحهم هذه الوظيفة.",
		admin_repository_redaction_roles_user_group_hover: "قم بالبحث عن المستخدمين والمجموعات، أو حدد المحررين، الذين تريد منحهم هذه الوظيفة.",
		admin_repository_redaction_roles_description: "يمكنك تكوين وادارة وظائف التنقيح، التي تقوم بارفاق المستخدمين والمجموعات مع امكانية قراءة البيانات التي تلتزم بالسياق وتحرير التعليقات التوضيحية التي تقوم بحماية البيانات التي تلتزم بالسياق من المشاهدة.",
		admin_repository_redaction_new: "وظيفة تنقيح جديدة",
		admin_repository_redaction_role_avail_editors: "محرري التنقيح المتاحين",
		admin_repository_redaction_role_avail_users: "المستخدمين المتاحين",
		admin_repository_redaction_role_avail_groups: "المجموعات المتاحة",
		admin_repository_redaction_role_selected_editors: "محرري التنقيح المحددين",
		admin_repository_redaction_role_selected_users_groups: "المجموعات والمستخدمين المحددين",
		admin_repository_redaction_role_add_editor: "محررين جدد...",
		admin_repository_redaction_role_access_type: "التوصل",
		admin_repository_redaction_role_access_type_access: "السماح",
		admin_repository_redaction_role_access_type_no_access: "رفض",
		admin_repository_redaction_role_users: "المستخدمين",
		admin_repository_redaction_role_groups: "المجموعات",
		admin_repository_redaction_role_editors: "المحررين",
		admin_delete_confirmation_redaction_roles: "هل تريد حذف وظيفة التنقيح المحددة؟",
		admin_repository_edit_redaction_role: "وظيفة التنقيح: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "امكانية التوصل المفترضة",
		// RBA
		desktop_user_group_acl: "مسؤولي نظام سطح المكتب",
		desktop_user_group_remove: "ازالة",
		desktop_rba_membership: "العضوية:",
		desktop_rba_membership_list_label: "الاسم",
		admin_repository_redaction_policy_hover: "أدخل وصف يسمح للمستخدمين بالتمييز بين هذه السياسة والسياسات الأخرى.",
		admin_repository_new_redaction_policy: "سياسة تنقيح جديدة",
		admin_repository_policy_name: "اسم السياسة",
		admin_repository_reason_redactions: "أسباب التنقيح:",
		admin_repository_role_editors: "المحررين",
		admin_repository_role_viewers: "برامج المشاهدة",
		admin_repository_redaction_policy_instruction: "يمكنك تكوين سياسة تنقيح لارفاق أسباب التنقيح المحددة مع كلا من محرري التنقيح ومشاهدي التنقيح.",
		admin_repository_redaction_reasons_hover: "حدد واحد أو أكثر من أنواع البيانات التي تلتزم بالسياق التي لا تريد أن يراها معظم المستخدمين، على سبيل المثال، المعلومات التي يتم تعريفها شخصيا، أو الأسرار التجارية، أو المعلومات السرية أو الخاصة بشركتك.",
		admin_repository_readaction_available_reasons: "الأسباب المتاحة",
		admin_repository_readaction_selected_reasons: "الأسباب المحددة",
		admin_repository_readaction_new_reason: "سبب جديد...",
		admin_repository_redeaction_reasons: "أسباب التنقيح:",
		admin_repository_readaction_editor_permmission: "محرري التنقيح:",
		admin_repository_redaction_editors_hover: "حدد الوظائف التي يمكنها تكوين وتعديل التنقيح للأسباب المحددة.",
		admin_repository_readaction_new_editor_role: "وظيفة محرر جديدة...",
		admin_repository_readaction_available_editors: "وظائف المحرر المتاحة",
		admin_repository_readaction_selected_editors: "وظائف المحدد المحددة",
		admin_repository_readaction_viewer_permmission: "القائمين بمشاهدة التنقيح:",
		admin_repository_redaction_viewers_hover: "حدد الوظائف التي يمكنها مشاهدة البيانات التي تلتزم بالسياق للأسباب المحددة. لا ينطبق التنقيح على المستخدمين والمجموعات بهذه الوظائف.",
		admin_repository_readaction_new_viewer_role: "وظيفة جديدة للقائم بالمشاهدة...",
		admin_repository_readaction_available_viewers: "وظائف القائم بالمشاهدة المتاحة",
		admin_repository_readaction_selected_viewers: "وظائف القائم بالمشاهدة المحددة",
		admin_repository_reason_redactions_header: "أسباب التنقيح",
		admin_delete_confirmation_redaction_policy: "هل تريد حذف سياسة التنقيح المحددة؟",
		admin_role_type_repository: "مستودع التخزين",
		admin_role_type_administrator: "مسؤول النظام",
		admin_role_type_template: "نموذج",
		admin_role_type_teamspace: "مساحة الفريق",
		admin_role_type_author: "برنامج التحرير",
		admin_role_type_user: "برنامج المشاهدة",
		admin_collaboration_services_instructions: "اذا كان لديك تطبيق الانترنت IBM Connections و FileNet Collaboration Services، فانه يمكنك توصيف مساحات فريق المجتمع وتسلسلات النشاط لمستودع التخزين.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "توصيف مكتبة المجتمع",
		admin_collaboration_community_instruction: "يمكنك توصيف مستودع تخزين واحد في نطاق IBM FileNet P8 الخاص بك لتخزين مكتبات مجتمع IBM Connections (تسمى أيضا مساحات الفريق). عند قيام المستخدمين بتكوين مكتبة مجتمع من خلال IBM Connections، فانه يتم تخزينها في مستودع تخزين تم تحديده كمستودع تخزين مكتبة المجتمع.",
		admin_collaboration_community_teamspaces: "استخدم مستودع التخزين هذا لمكتبات المجتمع:",
		admin_collaboration_community_teamspaces_hover: "يمكنك فقط استخدام مستودع تخزين واحد في نطاق IBM FileNet P8 الخاص بك لتخزين مكتبات المجتمع الجديدة. اذا قمت باتاحة مستودع التخزين هذا وكان لديك مستودع تخزين موجود، سيتم الغاء اتاحة مستودع التخزين الحالي. لكن، ستظل أية مكتبات موجودة في مستودع التخزين الحالي.",
		admin_collaboration_connections_anonymous: "السماح بالتوصل غير المعروف الى المحتويات العامة:",
		admin_collaboration_connections_anonymous_hover: "اذا كانت وحدة خدمة IBM Connections الخاصة بك تحتوي على مجتمعات عامة أو منسقة، فانه يمكنك توصيف FileNet Collaboration Services للسماح للمستخدمين باستعراض وتحميل المحتويات من المكتبات في هذه المجتمعات بدون الحاجة الى تسجيل الدخول أولا.<br><br>لا يستطيع المستخدمين الذين يقومون بالتوصل الى مكتبات المجتمع بطريقة غير معروفة، تكوين أو تعديل أو حذف المحتويات.<br><br><b>هام:</b> يجب تحديد مستخدم IBM FileNet P8 LDAP كمستخدم غير معروف وتوصيف هذا المستخدم بوظيفة <b>غير معروفة</b> في  WebSphere Application Server.",
		admin_collaboration_connections_url: "عنوان URL الى IBM Connections:",
		admin_collaboration_connections_url_hover: "حدد عنوان URL لوحدة خدمة IBM Connections الخاصة بك بالنسق http://IBMConnectionsServer:port_number.  اذا تم توصيف IBM Connections لاستخدام IBM HTTP Server، فانه يمكنك حذف رقم المنفذ من عنوان URL.<br><br>يجب أن يكون عنوان URL قابل للتوصل الى مستخدمي IBM Connections لأنه يعد الرابط الذي يقوم FileNet Collaboration Services باستخدامه لتكوين روابط للصفحات المقصودة للوثيقة في IBM Connections.",
		admin_collaboration_connections_url_http_use: "استخدام عنوان URL الى IBM Connections",
		admin_collaboration_connections_url_https_use: "استخدام عنوان URL الى IBM Connections HTTPS",
		admin_collaboration_connections_url_specify: "حدد عنوان URL",
		admin_collaboration_connections_url_https: "عنوان URL الى IBM Connections HTTPS:",
		admin_collaboration_connections_url_https_hover: "اذا كان قد تم توصيف IBM Connections لاستخدام SSL، حدد عنوان URL الى HTTPS لوحدة خدمة IBM Connections الخاصة بك بالنسق https://IBMConnectionsServer:port_number.  اذا تم توصيف IBM Connections لاستخدام IBM HTTP Server، فانه يمكنك حذف رقم المنفذ من عنوان URL.",

		admin_collaboration_connections_gadget_url: "عنوان URL لأدوات IBM Connections:",
		admin_collaboration_connections_retrieval_url: "عنوان URL لاسترجاع IBM Connections:",
		admin_collaboration_connections_security: "مسؤولي نظام المجتمع:",
		admin_collaboration_connections_security_hover: "حدد المستخدمين والمجموعات الذين يمكنهم ادارة المحتويات في مكتبات المجتمع.<br><br>يستطيع مسؤول النظام الشامل تكوين وتعديل وحذف واتاحة التوصل الى مكتبات المجتمع ومحتويات مكتبات المجتمع. عند تحديد مستخدم كمسؤول نظام شامل، يتم منح المستخدم امتيازات ClbGlobalAdministrator في مستودع التخزين.<br><br>يستطيع موجهي عملية المراجعة الشاملين الموافقة على ورفض المحتويات التي تكون تحت المراجعة للنشر في مكتبة المجتمع. عند تحديد مستخدم كموجه عملية مراجعة شامل، يتم منح المستخدم امتيازات ClbGloablReviewAdministrator في مستودع التخزين.",

		admin_collaboration_connections_admins: "موجهي نظام شاملين",
		admin_collaboration_connections_admins_review: "موجهي عملية المراجعة الشاملين",
		admin_collaboration_connections_seedlist: "فهرس محتويات مكتبة المجتمع:",
		admin_collaboration_connections_seedlist_hover: "حدد ما اذا كانت تريد أن يقوم IBM Connections باجراء تتبع لروابط مكتبات المجتمع في مستودع التخزين هذا لتكوين فهرس بحث. يمكن أن يؤثر تكوين فهرس على أداء مستودع التخزين.<br><br>اذا كان قد تم تركيب Social Collaboration Search Indexing Extensions على مستودع التخزين، سيتم اتاحة هذا الاختيار بصفة مفترضة. اذا لم يتم تركيب Social Collaboration Search Indexing Extensions على مستودع التخزين، سيتم تركيب البرنامج الاضافي على مستودع التخزين عند اتاحة هذا الاختيار.",
		admin_collaboration_activity_stream: "توصيف حدث تسلسل النشاط",
		admin_collaboration_activity_stream_label: "دفع معلومات الحدث الى IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "حدد ما اذا كنت تريد دفع معلومات الحدث، مثل تكوين وثيقة، عمليات التخصيص، عمليات انهاء التخصيص، التعقيبات، شارات التعليم، عمليات المشاركة، الى IBM Connections.<br><br><b>هام: </b> يمكن أن يؤثر دفع الاعلامات الى IBM Connections على أداء مستودع التخزين.",

		admin_collaboration_activity_stream_instruction: "يمكنك توصيف مستودع التخزين هذا لدفع معلومات الحدث، مثل التعقيبات والموافقات على الوثيقة، الى IBM Connections يتم عرض الأحداث في صفحة <b>أحدث التعديلات</b> في مجتمعات IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "تجاهل المعلومات لمستخدمين ومجموعات معينة:",
		admin_collaboration_activity_stream_ignored_ids_hover: "يمكنك تجاهل الأحداث التي يتم تكوينها بواسطة مستخدمين أو مجموعات معينة، مثل موجهي النظام أو حسابات النظام، لتقليل عدد الاعلامات التي تم عرضها للمستخدمين. على سبيل المثال، اذا كنت تقوم بنقل المحتويات، قد تريد تحديد تجاهل الأحداث التي تم تكوينها بواسطة الحساب المستخدم للنقل.",
		admin_collaboration_activity_stream_userid: "اسم مستخدم IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "حدد حساب النظام الذي سيقوم Content Platform Engine باستخدام للتوثيق الى وارسال معلومات الحدث الى IBM Connections. يجب أن يكون المستخدم بوظيفة <b>trustedExternalApplication</b> في تطبيق حاوية عنصر واجهة التعامل في IBM Connections.<br><br><b>ملحوظة: </b> بصفة مفترضة، يتوافر لدى مسؤول نظام IBM Connections الامتيازات المناسبة. يمكنك استخدام كود مسؤول النظام كاسم للنظام",
		admin_collaboration_activity_stream_password: "كلمة سرية مستخدم IBM Connections:",

		admin_help_url: "عنوان URL لمساعدة المستخدم النهائي:",
		admin_help_url_hover: "<b>ملحوظة هامة:</b> لن يتم تحديث IBM Knowledge Center Customer Installed كجزء من ‏‎IBM Content Navigator Version 3.0.0‎‏. اتصل بخدمة العملاء للحصول على المزيد من المعلومات عن استخدام المساعدة المهيأة.<br><br>كجزء من ‏‎IBM Content Navigator Version 3.0.0‎‏، يرجع عنوان URL الخاص بمساعدة المستخدم النهائي الى IBM Knowledge Center. عنوان URL IBM Knowledge Center هو: ‏‎http://www.ibm.com/support/knowledgecenter‎‏.<br><br>اذا كنت تريد الاستمرار باستخدام نسخة سابقة من IBM Knowledge Center Customer Installed، قم بتحديد عنوان URL الخاص بنسخة IBM Knowledge Center Customer Installed التي تم نشرها بواسطة أداة نشر وتوصيف IBM Content Navigator. يجب أن يقوم عنوان URL بالتوصل الى أجهزة الوحدة التابعة. يحتوي عنوان URL على النسق http://server_name:port_number/kc.<br><br>يمكنك الحصول على اسم ورقم منفذ وحدة الخدمة من ملف console.log في الدليل الفرعي KnowledgeCenter/logs لدليل تركيب IBM Content Navigator.",

		admin_help_default: "استخدام المساعدة المفترضة المتاحة بواسطة IBM",
		admin_custom_help: "استخدام نظام مساعدة مهيأ",
		admin_help_kc: "استخدم المساعدة المهيأة في IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>ملحوظة هامة:</b> لن يتم تحديث IBM Knowledge Center Customer Installed كجزء من ‏‎IBM Content Navigator Version 3.0.0‎‏. اتصل بخدمة العملاء للحصول على المزيد من المعلومات عن استخدام المساعدة المهيأة.<br><br>اذا كنت تريد الاستمرار باستخدام نسخة سابقة من IBM Knowledge Center Customer Installed، قم بتحديد هذا الاختيار للاستمرار في اضافة محتويات الى نسخة IBM Knowledge Center Customer Installed التي قمت بنشرها مسبقا.",
		admin_help_taxonomy: "كود التصنيف المنطقي:",
		admin_help_taxonomy_hover: "حدد كود التصنيف المنطقي للمساعدة المهيأة الخاصة بك.<br><br>كود التصنيف المنطقي الى IBM Content Navigator هو  SSEUEX. اذا كنت تريد عرض المساعدة الخاصة بك تحت اسم منتج مختلف في IBM Knowledge Center Customer Installed، يجب اضافة كود تصنيف متفرد الى ملف KC_taxonomy.ditamap في دليل  KnowledgeCenter/usr/taxonomy لدليل تركيب IBM Content Navigator.",
		admin_help_context: "سياق المساعدة:",
		admin_help_context_hover: "حدد السياق للمساعدة المهيأة الخاصة بك.<br><br>توجد مساعدة IBM Content Navigator في الدليل KnowledgeCenter/usr/content/com.ibm.usingeuc.doc لدليل تركيب IBM Content Navigator. سياق المساعدة المفترضة هو com.ibm.usingeuc.doc. اذا كنت تريد اتاحة المساعدة المهيأة، قم باضافة المحتويات الى دليل فرعي جديد في الدليل ‏‎KnowledgeCenter/usr/content/‎‏.",
		admin_help_welcome: "الصفحة المقصودة:",
		admin_help_welcome_hover: "حدد اسم الموضوع الذي تريد استخدامه على أنه الصفحة المقصودة عند قيام المستخدم بالتوصل الى المساعدة. يجب تكوين ملف الخصائص الذي يقوم بتحديد مكان الصفحة المقصودة واضافة ملف الخصائص الى دليل KnowledgeCenter/usr/conf لدليل تركيب IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "ملف JSON لامتدادات النوع Mime:",
		admin_settings_mimetype_extensions_jsonfile_hover: "تحقق من اسم ملف JSON والمسار الكامل الى الملف. يمكن أن يكون الملف عبارة عن ملف عام من نظام الملفات أو عنوان URL يشير الى ملف JSON.  <br><br>يعد محتوى ملف JSON مصفوفة لتعريفات أنواع  mime. <br><br>يتضمن تعريف Mime أربعة مفاتيح \"mimeTypes\" و  \"extensions\" و  \"fileType\" و \"iconName\". يكون أول مفتاحين \"mimeTypes\" و \"extensions\" مطلوبين، ويمكن أن يكونا عبارة عن مصفوفات من مجموعات حروف مفصولة بواسطة \",\". ويكون آخر مفتاحين \"fileType\" و \"iconName\" اختيارين. <br><br>على سبيل المثال: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\"‎، <br>‏\"extensions\": ‏‎\"demo,demotext\"‎‏، <br>\"fileType\": ‏‎\"file.type.text.document\"‎‏، ‏<br>\"iconName\": ‏‎\"icon.mime.msword\"‎‏<br>}]",
		admin_taskmanager_title: "توصيف ادارة المهام",
		admin_taskmanager_service: "خدمة ادارة المهام:",
		admin_taskmanager_service_hover: "حدد ما اذا كنت تريد استخدام خدمة ادارة المهام لتكوين وتشغيل المهام غير المتزامنة. <br><br>اذا قمت بتغيير هذه المحددات، يجب اعادة بدء تطبيق IBM Content Navigator لتطبيق هذه التغييرات.",
		admin_taskmanager_url: "عنوان URL لخدمة ادارة المهام:",
		admin_taskmanager_url_hover: "حدد عنوان URL الذي تستطيع التطبيقات الأخرى من خلاله الاتصال بخدمة ادارة المهام. يكون عنوان URL بالنسق http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "دليل سجل ادارة المهام:",
		admin_taskmanager_logdirectory_hover: "بصفة مفترضة، يتم كتابة ملفات السجل لخدمة ادارة المهام لنفس الدليل كملفات سجل وحدة خدمة تطبيق الانترنت. <br><br>اذا كنت تريد كتابة معلومات السجل على دليل مختلف على وحدة خدمة IBM Content Navigator، حدد المسار المصنف بالكامل للدليل الذي تريد تخزين ملفات السجل التي تم تكوينها بواسطة مكون ادارة المهام. <br><br>اذا قمت بتغيير هذه المحددات، يجب اعادة بدء تطبيق IBM Content Navigator لتطبيق هذه التغييرات.",
		admin_taskmanager_heartBeatMonitor: "مراقبة الاشارات الدورية لنظام المجموعة",
		admin_taskmanager_heartBeatMonitor_hover: "بيئات نظام المجموعة عالية الاتاحة فقط. اذا قمت باتاحة هذا الاختيار، تقوم خدمة ادارة المهام باعادة توجيه مسار المهام من العقد المتوقفة حاليا الى العقد التي يتم تشغيلها حاليا. <br><br>اذا قمت بتغيير هذه المحددات، يجب اعادة بدء تطبيق IBM Content Navigator لتطبيق هذه التغييرات.",

		admin_syncserver_title: "توصيف وحدة خدمة التزامن",
		admin_syncserver_enable: "خدمات التزامن:",
		admin_syncserver_enable_hover: "حدد ما اذا كنت تريد السماح للمستخدمين الذين يقومون بالتوصل الى سطح المكتب هذا بمزامنة البنود الخاصة بهم عبر وحدات العمل وأجهزة التليفون المحمول.<br><br><b>هام:</b> لاستخدام هذه الخاصية يجب أيضا استكمال المهام التالية:<ul><li>حدد <b>عنوان URL العام لخدمات التزامن</b> في قسم <b>خدمات التزامن</b> لأداة الادارة.</li><li>قم باضافة مستودع تخزين تم اتاحة خدمات التزامن له لسطح المكتب هذا.</li></ul>اذا قمت بالغاء اتاحة هذا الاختيار واضافة مستودع تخزين تم اتاحة خدمات التزامن له لسطح المكتب هذا، سيتم تجاهل المحددات بمستودع التخزين.",
		admin_mobileqr_enable: "عرض كود IBM Navigator QR في صفحة تسجيل الدخول:",
		admin_mobileqr_enable_hover: "قم باتاحة هذا الاختيار اذا كنت تريد عرض كود QR لتطبيق التليفون المحمول IBM Navigator على صفحة تسجيل الدخول لبرنامج الانترنت.<br><br>عند قيام مستخدم باجراء مسح ضوئي لكود QR، فانه يتم نقله الى متجر التطبيقات المناسب للجهاز الخاص به، حيث يمكنه تنزيل تطيق التليفون المحمول IBM Navigator.",

		admin_streamlineservice_enable: "خدمة التحرير:",
		admin_streamlineservice_enable_hover: "مستخدمي FileNet P8 فقط. قم باتاحة هذا الاختيار اذا كنت تريد منح مستخدمي سطح المكتب امكانية اضافة وتحرير الوثائق بسهولة من التطبيقات المحلية بوحدات العمل الخاصة بهم. <br><br>لاستخدام هذه المحددات، يجب أن تقوم أيضا بما يلي: <ul><li>اتاحة خدمة التحرير بواحدة أو أكثر من مستودعات التخزين المصاحبة لسطح المكتب هذا</li><li>تركيب برنامج تحرير IBM Content Navigator على وحدات عمل المستخدم</li></ul>",

		admin_repository_general_instructions: "يجب الاتصال بمستودع التخزين قبل توصيف المعاملات وخصائص النظام والحافظات وهكذا.",
		admin_repository_system_instructions: "حدد خصائص النظام التي سيتم عرضها للوثائق  والحافظات الموجودة بمستودع التخزين.",

		admin_desktop_general_create_instructions: "يقوم سطح المكتب بتحديد ما  الذي  يمكن أن  يقوم المستخدم بمشاهدته والقيام به عند تسجيل الدخول بالوحدة  التابعة  للانترنت. بعد أن تقوم بتكوين سطح المكتب، يمكنك ارسال عنوان URL لسطح المكتب  الى المستخدمين بحيث يمكنهم التوصل الى سطح المكتب.",
		admin_desktop_admin_instructions: "يتم تقديم سطح مكتب الادارة مع الوحدة   التابعة للانترنت للسماح للمستخدمين الاداريين باعداد الوحدة التابعة للانترنت.  يتوافر لسطح المكتب هذا امكانية التوصل الى كل مستودعات التخزين التي تم   توصيفها للوحدة التابعة للانترنت.",
		admin_desktop_repositories_instructions: "حدد مستودعات التخزين الذين تريد اتاحة امكانية توصل للمستخدمين لها من خلال سطح المكتب هذا.  ويجب أن تقوم بتوصيف مستودعات التخزين الخاصة بك لكي تتمكن من اضافتهم الى سطح المكتب.<br><br><b>ملحوظة:</b> يمكنك تحديد مستودعات التخزين المتاحة لكل خاصية عند القيام بتوصيف الشكل العام لسطح المكتب.",
		admin_desktop_menus_instructions: "حدد القوائم التي تريد أن يتوافر لدى   المستخدمين  امكانية توصل لها من سطح المكتب هذا. تحدد القوائم التصرفات   المتاحة وفقا لما تم تحديده في  واجهة التعامل.<br><br><b>ملحوظة:</b> يمكنك تهيئة محتويات القوائم في قسم <b>القوائم</b> لأداة الادارة أو يمكنك تكوين أنواع جديدة للقوائم بتكوين برامج مساعدة.",

		admin_desktop_no_repositories: "لا توجد مستودعات تخزين تم توصيفها.",

		admin_desktop_id_hover: "سيتم تضمين كود سطح المكتب في عنوان URL للوحدة التابعة للانترنت وتحديد سطح المكتب الذي سيتم فتحه عند قيام المستخدم بتسجيل الدخول الى برنامج الوحدة التابعة للانترنت. يجب أن يكون كود التعريف متفردا، ولا يمكنك تغيير الكود بعد حفظ سطح المكتب.<br><br>يمكن أن يحتوي  الكود  على حروف أبجدية عددية فقط ويجب الالتزام بحالة الحروف.",
		admin_desktop_id_disabled_hover: "لا يمكن تغيير كود تعريف سطح المكتب.  اذا كنت تريد  استخدام كود تعريف مختلف، فيجب أن تقوم بتكوين سطح مكتب جديد.",
		admin_desktop_name_hover: "ولا يمكن أن يتضمن اسم سطح المكتب على أي من الحروف التالية:  * \\ / : ? \" < > |",
		admin_desktop_default_hover: "يمكن أن يحتوي التوصيف الخاص بك على سطح مكتب مفترض واحد  فقط.",

		admin_repository_id_disabled_hover: "لا يمكن تغيير كود تعريف مستودع التخزين.  اذا كنت  تريد استخدام كود تعريف مختلف، فيجب أن تقوم بتكوين وصلة جديدة لمستودع التخزين.",
		admin_printService_enable: "الطباعة باستخدام خدمة طباعة IBM Daeja ViewONE:",
		admin_printService_enable_hover: "اذا اخترت اتاحة خدمة طباعة IBM Daeja ViewONE، يتم تحويل الوثائق الى نسق PDF ويمكن اتمام الطباعة باستخدام أي من برامج تصفح الانترنت.<br><br>اذا قمت باختيار الغاء اتاحة خدمة طباعة IBM Daeja ViewONE، فانه يتم الاقتصار على طباعة الوثائق فقط في برامج استعراض الانترنت التي تدعم برامج Java.  لا تدعم بعض برامج استعراض الانترنت برامج Java، ولذلك لا تدعم طباعة البرنامج.<br><br>ارجع الى المطبوعات الفنية لبرامج الاستعراض المدعمة.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "الدليل الرئيسي للمستخدم",
		admin_file_tracking_doc_directory_my_documents: "دليل وثيقة المستخدم",
		admin_file_tracking_doc_directory_qp: "المسار المصنف",
		admin_file_tracking_section_tile: "توصيف تتبع الملف",
		admin_file_tracking_home_path: "مسار الصفحة الرئيسية",
		admin_file_tracking_my_documents: "الوثائق الخاصة بي",
		admin_file_tracking_exact_path: "المسار المصنف بالكامل",
		admin_file_tracking_qp: "المسار المصنف",
		admin_file_tracking_ev: "متغير بيئة التشغيل",
		admin_file_tracking_ev_us: "متغير بيئة التشغيل المهيأ ",
		admin_file_tracking_del_local_copy: "حذف نسخة محلية:",
		admin_file_tracking_yes: "نعم",
		admin_file_tracking_no: "لا",
		admin_file_tracking_del_local_copy_rt_state_editable: "السماح للمستخدمين باحلال هذه المحددات",
		admin_file_tracking_del_local_copy_rt_state1: "نعم",
		admin_file_tracking_del_local_copy_rt_state2: "لا",
		admin_file_Tracking_label: "تتبع الملف:",
		admin_file_Tracking_disable: "الغاء-اتاحة",
		admin_file_Tracking_enable: "‏اتاحة‏",
		admin_file_tracking_label_hover_help: "تقوم خاصية تتبع الملف باستخدام برنامج صغير لتخصيص وتحميل الوثائق لدليل معين على أجهزة المستخدمين. ويقوم البرنامج الصغير أيضا باتاحة IBM Content Navigator لايجاد الوثائق على أجهزة المستخدمين عند قيام المستخدمين بانهاء تخصيص الوثائق.",
		admin_file_tracking_doc_directory: "مكان التخزين:",
		admin_file_tracking_open_file: "فتح ملف آليا",
		admin_file_Tracking_append_qualified_path: "الحاق دليل",
		admin_file_Tracking_append_qualified_path_hover_help: "يمكنك الحاق دليل الى نهاية متغير بيئة التشغيل اذا كنت تريد حفظ الوثائق في دليل فرعي معين. <br/><br/>على سبيل المثال، يمكنك تحديد تحميل الوثائق الى دليل <i>EnterpriseDocuments</i> في الدليل الرئيسي للمستخدم.",
		admin_file_Tracking_append_ev: "الحاق متغير بيئة التشغيل",
		admin_file_Tracking_append_ev_hover_help: "يمكنك الحاق متغير بيئة التشغيل اذا كنت تريد حفظ الوثائق في دليل محدد ديناميكيا، مثل دليل المستخدم.<br/><br/>على سبيل المثال، يمكنك تحديد تخزين الوثائق في الدليل الفرعي <i>اسم_المستخدم</i> على دليل شبكة الاتصال المشترك. ",
		admin_file_tracking_doc_directory_hover_help: "حدد المكان الذي يجب تخزين الوثائق به عند تخصيصها وتحميلها.<br/><br/> <b>ملحوظة</b>: اذا كنت تريد تخزين الوثائق في الدليل الرئيسي للمستخدم أو دليل الوثائق المفترض، حدد <b>متغير بيئة التشغيل</b>، الذي يتضمن المتغيرات المعرفة مسبقا التي تشير الى هذه الأماكن.",
		admin_file_tracking_qualified_path_hover_help: "استخدم هيكل الدليل المناسب لنظام تشغيل Windows أو Mac الخاص بك لتحديد الدليل أو دليل شبكة الاتصال  الذي تريد تخزين الوثائق به. <ul><li>بالنسبة الى Windows، قم بتضمين حرف المشغل في المسار، مثل C:\\Enterprise Documents.</li><li>بالنسبة لدليل شبكة الاتصال المشترك، أدخل المسار بالنسق \\\\servername\\directory</li></ul><br/><b>هام:</b> لاستخدام هذا الاختيار، يجب اتاحة تكوين هيكل الدليل الذي تقوم  بتحديده على كل وحدات عمل برنامج الوحدة التابعة في بيئة التشغيل الخاصة بك.",
		admin_file_tracking_environment_variable_path_hover_help: "استخدم متغيرات بيئة التشغيل المناسبة لنظام تشغيل Windows أو Mac الخاص بك لتحديد الدليل أو دليل شبكة الاتصال الذي تريد تخزين الوثائق به. <br/><br/>يقوم الاختيار <b>الدليل الرئيسي للمستخدم</b> بتخزين الوثائق في الدليل التالي:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>نظام Mac: /Users/User_name</li></ul><br/>يقوم الاختيار <b>دليل وثيقة المستخدم</b> بتخزين الوثائق في الدليل التالي:<br/><ul><li>نظام Windows: C:\\Users\\User_name\\Documents</li><li>نظام Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "حدد ما اذا كان قد تم حذف النسخة المحلية للوثيقة عند قيام المستخدمين باضافة أو انهاء تخصيص الوثائق في مستودع التخزين.<br/><br/>يسمح لك حذف النسخة المحلية بما يلي:<br/><ul><li>فرض التوافق مع سياسات IT</li><li>التأكد من قيام المستخدمين بالتعامل مع أحدث النسخ من الوثائق</li></ul><br/><b>قيد:</b> لا يتم استخدام هذه المحددات عند قيام المستخدمين باضافة الوثائق بسحبها ووضعها.<br/><br/>بالنسبة الى IBM Content Navigator for Microsoft Office، يجب تحديد <b>حذف الملفات المحلية عند قيام المستخدمين باضافة أو انهاء تخصيص وثيقة أو الغاء التخصيص </b> في القسم <b>توصيف Office</b> لسطح المكتب.",
		admin_file_tracking_open_file_hover_help: "تقوم هذه المحددات باحلال أية تفضيلات معالجة للوثيقة تم توصيفها في برامج استعراض الانترنت للمستخدمين. </br></br><b>قيد:</b> لا يتم استخدام هذه المحددات بواسطة IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "احلال النسخة المحلية:",
		admin_file_tracking_over_write_file_hover_help: "حدد ما اذا كان سيتم احلال النسخة المحلية لوثيقة عند قيام المستخدمين بتخصيص الوثائق لمستودع التخزين. <br/><br/>احلال النسخة المحلية يسمح لك بما يلي:<br/><ul><li>التأكد من قيام المستخدمين بالتعامل مع أحدث النسخ من الوثائق</li><li>منع عرض رسالة الحث للمستخدمين عند وجود نسخة محلية</li></ul> </br></br><b>قيد:</b> لا يتم استخدام هذه المحددات بواسطة IBM Content Navigator for Microsoft Office اذا قمت بتحديد <b>السماح للمستخدمين باحلال هذه المحددات</b>.",
		admin_file_tracking_over_write_file_state_editable: "السماح للمستخدمين باحلال هذه المحددات",
		admin_file_tracking_inline_help: "تعمل عملية تتبع مسار الملف على تبسيط عملية تخصيص وانهاء تخصيص الوثائق بمستودع التخزين. وتسمح لك أيضا بادارة كيفية تخزين الوثائق على أجهزة المستخدمين. <br/><br/>بالاضافة الى ذلك، تسمح عملية تتبع مسار الملف بتتبع مسار الوثائق في عدة مكونات IBM Content Navigator، مثل الوحدة التابعة للانترنت أو IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "يجب اتاحة التوثيق القياسي أو توثيق وحدة الخدمة قبل الاتصال بمستودع التخزين.",
		admin_box_use_oauth: "نوع التوثيق:",
		admin_box_use_oauth_hover: "حدد التوثيق القياسي أو توثيق وحدة الخدمة في بيئة الانتاج عند تقديم امكانية توصل الى وثائق Box من IBM Content Navigator. حدد كلا من قيم كود_العميل وكلمة سر_العميل OAuth2 المصاحبة لعملية نشر IBM Content Navigator هذه. يمكنك الحصول على هذه القيم من Box بعد القيام بتكوين تطبيق Box لوحدة خدمة IBM Content Navigator الخاصة بك.<br/><br/>حدد توثيق المطور في بيئة التطوير. يستطيع المطورين تسجيل الدخول الى Box باستخدام حساب المطور الخاص بهم وتكوين الرمز المميز للمطور الذي يكون صالحا لمدة 60 دقيقة. تسمح الرموز المميزة لمطوري البرامج أن يقوموا بتسجيل الدخول الى Box باستخدام الرمز المميز لمطور البرامج ككلمة السرية لأي كود مستخدم.",
		admin_box_oauth_client_id: "كود_العميل:",
		admin_box_oauth_client_secret: "كلمة سر_العميل:",
		admin_box_oauth_subdomain: "النطاق الفرعي لحساب مشروع Box:",
		admin_box_share: "كود وصلة ادارة المهام:",
		admin_box_share_hover: "بالنسبة لنسخة Box أو مشاركة Box، تقوم ادارة المهام باستخدام كلمة سرية وكود مستخدم مسئول النظام لتشغيل مهام الخلفية التي تقوم بتعديل مستودع التخزين.<br/><br/>اضغط تحديد وتسجيل الدخول الى Box باستخدام حساب مسئول نظام Box صحيح.<br/><br/>اذا قمت بتوصيف سطح مكتب من خلال تحديد مستودع تخزين  Box هذا كمستودع التخزين للملفات المشتركة، يجب أن تقوم بتحديد المستخدم المحدد كمسئول نظام Box الذي يتوافر لديه مساحة تخزين غير محدودة في Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "فتح ملف آليا",
		file_tracking_runtime_overwrite_hover_help: "اذا لم تقم بتحديد هذا الاختيار وكان لديك وثيقة بنظام الملفات المحلي الخاص بك بنفس الاسم، سيتم تخصيص الوثيقة ولكن لن يتم تحميلها الا اذا قمت باتخاذ أحد التصرفات التالية:<br/><ul><li> قم بتحميل الوثيقة الى الدليل الفرعي للدليل المفترض. اذا قمت بتحديد الدليل الفرعي، يمكن تتبع مسار مكان الوثيقة بواسطة تطبيق الانترنت.</li><li>اعادة تسمية الوثيقة التي تقوم بتحميلها. تؤدي اعادة تسمية الوثيقة الى منع حدوث تعارض في اسم الملف.</li></ul>",
		open_file: "فتح ملف آليا",
		over_write_file: "احلال نسخة محلية",
		checkout_and_download_file: "تخصيص وتحميل الوثائق",
		download_to_local_directory: "تحميل الى:",
		checkout_and_download_button_title: "تخصيص وتحميل",
		checkout_without_java_confirmation_dialog: "لا يمكن تحميل الملف وتتبع مساره بواسطة خاصية تتبع مسار الملف.",
		browse_for_directory: "استعراض",
		selected_documents: "الوثائق المحددة",

		checkout_without_java_confirmation_text: "يمكن أن تحدث هذه المشكلة للأسباب التالية:<br/><ul><li>لم يتم تركيب Java Runtime Environment (JRE) على وحدة العمل الخاصة بك.</li><li>لم يتم اتاحة البرنامج المساعد الى Java في برنامج استعراض الانترنت الخاص بك.</li><li>لا يقوم برنامج استعراض الانترنت الخاص بك بدعم Java.</li></ul><br/><br/>لحل هذه المشكلة، قم باتخاذ التصرف المناسب:<br/><br/><ul><li>اذا كنت تريد الاستمرار في تحميل الملف بدون اتاحة تتبع المسار، اضغط حسنا.</li><li>اذا كنت تريد تحميل الملف مع اتاحة تتبع مسار الملف، قم بالغاء عملية التحميل وتأكد من أنه تم تحميل JRE على وحدة العمل الخاصة بك التي تم اتاحة البرنامج المساعد الى Java بها في برنامج استعراض الانترنت الخاص بك.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "تم تخصيص وتحميل الوثيقة، لكن لا يمكن فتح الوثيقة.",
		runtime_file_tracking_open_error_explanation: "نظام التشغيل الذي تم تركيبه على وحدة العمل الخاصة بك لا يقوم بدعم الملفات بهذا النوع.",
		runtime_file_tracking_open_error_userResponse: "لحل المشكلة، يجب اتخاذ أحد التصرفات التالية:<br/><br/><ul><li>اذا كنت تريد التعامل مع الوثيقة، قم بفتح الوحدة التابعة للانترنت من وحدة عمل أخرى تحتوي على نظام تشغيل مختلف.</li><li>اذا كان يتطلب فقط مشاهدة الوثيقة، اضغط بمفتاح الفأرة الأيمن على الوثيقة في الوحدة التابعة للانترنت واضغط فتح.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "تم تخصيص الوثيقة لكن لم يتم تحميلها.",
		runtime_file_tracking_save_file_error_explanation: "توجد وثيقة بنفس الاسم على نظام الملفات المحلي الخاص بك، لكن لم يتم احلالها. ",
		runtime_file_tracking_save_file_error_userResponse: "اذا كنت تريد تحميل الملف من مستودع التخزين، فانه يجب احلال النسخة المحلية للوثيقة عند تحميل الوثيقة من مستودع التخزين.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "تم تخصيص الوثيقة لكن لا يمكن تحميل أو فتح الوثيقة.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "توجد وثيقة بنفس الاسم على نظام الملفات المحلي الخاص بك. لكن، لم يتم احلال الملف، مما يمنع تحميل وفتح الوثيقة بمستودع التخزين.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "اذا كنت تريد تحميل الملف من مستودع التخزين، فانه يجب احلال النسخة المحلية للوثيقة عند تحميل الوثيقة من مستودع التخزين.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "لا يمكن تحميل الوثيقة.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "متغير بيئة التشغيل ${0}، المطلوب لتتبع الملف، لم يتم تعريفه بجهاز الوحدة التابعة هذا.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "لحل المشكلة:<br/><br/><ul><li>قم باضافة متغير بيئة التشغيل ${0} الى متغيرات بيئة نظام التشغيل.</li><li>قم بتسجيل الخروج بالوحدة التابعة للانترنت واغلاق برنامج استعراض الانترنت الخاص بك. ثم، أعد تسجيل الدخول.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "لا يمكن تحميل وتتبع مسار الوثيقة بواسطة برنامج تتبع مسار الملف.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "لم يتم تعريف الدليل ${0}، المطلوب لتتبع مسار الملف، ولا يمكن تكوينه.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "لحل هذه المشكلة، قم بتحديد الاختيار المناسب:<br/><br/><ul><li>اضغط استعراض وحدد دليل آخر بجهاز الوحدة التابعة. اذا قمت بتحديد هذا الاختيار، لن يتم تتبع مسار الملف.</li><li>اتصل بمسؤول النظام وأطلب تحديد دليل مختلف لاستخدامه لتتبع مسار الملفات. على سبيل المثال، قد يكون هذا ضروري اذا كان الدليل المحدد لنظام تشغيل Windows لكن تقوم بتشغيل Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "اذا تم التوصل الى سطح المكتب من الأجهزة ذات أنظمة تشغيل مختلفة، يمكنك تقليل احتمالات المشاكل  باتخاذ أحد التصرفات التالية:<br/><br/><ul><li>استخدم متغيرات بيئة التشغيل لتحديد مكان التخزين على أجهزة الوحدة التابعة.</li><li>تكوين أسطح مكتب مختلفة للمستخدمين لكل نوع جهاز. على سبيل المثال، تكوين سطح مكتب لمستخدمين ذوي نظام التشغيل Windows وسطح مكتب للمستخدمين ذوي نظام التشغيل Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "لا يمكن تشغيل الطلب الخاص بك.",
		runtime_file_tracking_generic_error_explanation: "حدث خطأ في برنامج تتبع مسار الملف.",
		runtime_file_tracking_generic_error_userResponse: "اتصل بمسؤول النظام للمساعدة.",
		runtime_file_tracking_generic_error_adminResponse: "قم بفتح الشاشة الرئيسية الى Java وحاول احالة الطلب الخاص بك مرة أخرى. يتم عرض تفاصيل الخطأ في الشاشة الرئيسية الى Java.<br/><br/>يمكنك التوصل الى شاشة التحكم الرئيسية الى Java من لوحة التحكم (Windows) أو تفضيلات النظام (Macintosh) لنظام التشغيل الخاص بك.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "لا يمكن تشغيل الطلب الخاص بك",
		runtime_file_tracking_cannot_delete_file_error_explanation: "تم اضافة الملفات التالية الى مستودع التخزين لكن لم يتم حذفها من نظام الملفات المحلي الخاص بك: ${0}. يحدث هذا عادة عند فتح الملفات أو عند استخدامها بواسطة تطبيق آخر. اذا تطلب الأمر، يمكنك حذف الملفات يدويا.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "لا يمكن تحميل الوثيقة.",
		runtime_file_tracking_ioexception_error_explanation: "لا يمكن تحميل الوثيقة.",
		runtime_file_tracking_ioexception_userResponse: "قد لا يتوافر لديك التصاريح المناسبة للكتابة بالدليل التالي: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "تأكد من أنه يتوافر لديك تصاريح الكتابة للدليل المحدد. اذا لم يتوافر لديك تصاريح الكتابة للدليل المحدد، اتصل بمسؤول النظام.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "لا يمكن تشغيل الطلب الخاص بك.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "يمكن أن يحدث هذا الخطأ للأسباب التالية:<br/><br/><ul><li>تقوم باستخدام Safari على نظام تشغيل Mac ويتم تشغيل Java في نمط الأمان.</li><li>لا يتوافر لديك تصاريح القراءة/الكتابة للدليل المحدد في توصيف تتبع الملف لسطح المكتب الخاص بك.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "يمكنك الاستمرار في استخدام IBM Content Navigator بدون تتبع الملف، أو يمكنك استكمال الخطوات التالية لحل المشكلة:<br/><br/><ol><li>اتاحة النمط غير الآمن الى Java في Safari.</li><li>اذا تم عرض رسالة حث لك لتوثيق موقع IBM Content Navigator، اضغط <b>توثيق</b> لتحميل الصفحة ثم اتاحة النمط غير الآمن الى Java في Safari.</li></ol><br/><br/>اذا تم توصيف Safari بطريقة صحيحة، قم باستكمال الخطوات التالية لحل المشكلة:<br/><br/><ol><li>تأكد من أنه يتوافر لديك تصاريح القراءة/الكتابة للدليل المحدد في توصيف تتبع الملف لسطح المكتب الخاص بك.</li><li>اذا لم يكن يتوافر لديك تصاريح القراءة/الكتابة بالدليل، قم بتحرير التصاريح بالدليل.</li><li>اذا لم يمكنك تحرير التصاريح الخاصة بك بالدليل، يجب أن يقوم مسؤول النظام الخاص بك بتغيير الدليل الذي تم توصيفه لتتبع الملف أو منحك امكانية توصل الى سطح المكتب الذي يحتوي على دليل تتبع ملف مختلف تم توصيفه.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "لا يمكن تشغيل الطلب الخاص بك.",
		runtime_file_tracking_java__notfound_error_explanation: "تحدث هذه المشكلة عادة في الحالات التالية:<br/><br/><ul><li>Java Runtime Environment (JRE) غير موجود أو غير متاحة في وحدة العمل الخاصة بك.</li><li>نسخة JRE التي توجد بوحدة العمل الخاصة بك غير متوافقة مع نسخة IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "يمكنك الاستمرار في استخدام IBM Content Navigator بدون تتبع الملف، أو يمكنك استكمال الخطوات التالية لحل المشكلة مع JRE:<br/><br/><ol><li>تأكد من أنه تم تركيب JRE على وحدة العمل الخاصة بك.</li><li>تأكد من أن نسخة JRE على وحدة العمل الخاصة بك متوافقة مع IBM Content Navigator. يتم تضمين كشف النسخ المدعمة في وثيقة <i>Hardware and software prerequisites for IBM Content Navigator</i> بموقع IBM Software Support.</li><li>تأكد من أنه تم اتاحة JRE على وحدة العمل الخاصة بك.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "لا يمكن تشغيل الطلب الخاص بك.",
		runtime_file_tracking_security_error_explanation: "لا يتوافر لديك تصاريح القراءة/الكتابة للدليل المحدد في توصيف تتبع الملف لسطح المكتب الخاص بك.",
		runtime_file_tracking_security_error_userResponse: "يمكنك الاستمرار في استخدام IBM Content Navigator بدون تتبع الملف، أو يمكنك التعامل مع مسؤول النظام لاستكمال الخطوات التالية:<ol><li>تأكد من أنه يتوافر لديك تصاريح القراءة/الكتابة للدليل المحدد في توصيف تتبع الملف لسطح المكتب الخاص بك. </li><li>اذا لم يكن يتوافر لديك تصاريح القراءة/الكتابة بالدليل، قم بتحرير التصاريح بالدليل.</li><li>اذا لم يمكنك تحرير التصاريح الخاصة بك بالدليل، يجب أن يقوم مسؤول النظام الخاص بك بتغيير الدليل الذي تم توصيفه لتتبع الملف أو منحك امكانية توصل الى سطح المكتب الذي يحتوي على دليل تتبع ملف مختلف تم توصيفه.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "تم تحميل الوثائق التالية: ${0}.",

		admin_file_tracking_inline_help: "تعمل عملية تتبع مسار الملف على تبسيط عملية اضافة وتخصيص وانهاء تخصيص الوثائق بمستودع التخزين. تسمح لك أيضا بادارة كيفية تخزين الوثائق على أجهزة المستخدمين.<br/><br/>بالاضافة الى ذلك، تسمح عملية تتبع مسار الملف بتتبع مسار الوثائق في عدة مكونات IBM Content Navigator، مثل الوحدة التابعة للانترنت أو IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "لا يمكن أن يبدأ كود القائمة  بالحروف  \"Default\".  تعد الحروف \"Default\" بادئة محتجزة لأكواد القوائم.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "يمكن أن يحتوي  الكود  على حروف أبجدية عددية فقط ويجب الالتزام بحالة الحروف.",
		admin_repository_id_hover: "وسيتم تضمين كود تعريف مستودع التخزين في عناوين  URL،  والتفضيلات، وروابط  البريد الالكتروني لتحديد مستودع التخزين الذي سيتم  التوصل اليه. ويجب  أن  يكون متفرد، ولن يمكنك تغيير كود التعريف بعد أن تقوم  بحفظ مستودع التخزين.<br><br>يمكن أن يحتوي  الكود  على حروف أبجدية عددية فقط ويجب الالتزام بحالة الحروف.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "ولا يمكن أن يتضمن الاسم أي من الحروف التالية: * \\ / : ? \"  < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "لا يمكن أن يحتوي كود سطح المكتب على مسافات أو   أي من الحروف التالية:  * \\ / : ?  \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "ولا يمكن أن يتضمن اسم سطح المكتب أي من الحروف التالية: * \\ /  : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "ولا يمكن أن يتضمن اسم العرض أي من الحروف التالية: * \\ /  : ? \" < > |",
		admin_repository_name_hover: "حدد اسم مستودع التخزين الذي سيتم عرضه للمستخدمين في  الوحدة التابعة للانترنت.<br><br>لا يمكن أن يحتوي الاسم على الحروف التالية: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "حدد اسم النظام الرئيسي أو عنوان IP لوحدة خدمة Content  Manager OnDemand التي تريد الاتصال بها، على سبيل المثال، server.id.com.",
		admin_server_p8_name_hover: "حدد عنوان URL لوحدة خدمة Content Engine أو   Content Platform Engine. ويلتزم عنوان URL بحالة الحروف ويكون له النسق  التالي:<br><br><ul><li>على وحدة خدمة WebSphere Application Server، iiop://host_name:port_number/FileNet/Engine. في عمليات  النشر الأساسية،  يكون رقم  المنفذ المفترض هو 2809.</li><li>على WebLogic Server، ‏t3://host_name:port_number/FileNet/Engine. رقم منفذ الاتصال المفترض هو 7001.</li></ul><br><br>للوصول على اتاحة  عالية  لتوصيف Content Engine و Content Platform Engine، يمكنك استخدام عنوان  URL  لنقل EJB عالي الاتاحة للنقل بدون cemp: prefix. ",
		admin_server_p8_protocol_hover: "حدد البروتوكول الذي سيتم استخدامه في الاتصال مع Content Engine.",
		admin_server_cm_name_hover: "حدد اسم الكتالوج المحلي لقاعدة بيانات  Content  Manager أو  اسم اتصال وحدة خدمة المكتبة. هذا الاسم هو القيمة التي  يتم  تحديدها للمتغير ICMSERVER.",
		admin_repository_cmis_hover: "حدد الكود الخاص بمستودع التخزين الذي تريد الاتصال به.  يتم عرض الكود الخاص بكل مستودع تخزين في بيئة تشغيل CMIS الخاصة بك في وثيقة خدمة ربط AtomPub.  <br/><br/><b>  ملحوظة:</b>يمكنك أيضا ادخال   علامة (*) للاتصال بأول مستودع التخزين تم تعريفه في وثيقة خدمة ربط Atompub.",
		admin_url_cmis_hover: "يختلف نسق عنوان URL وفقا لجهة اتاحة الخدمة. ارجع الى وثائق CMIS الفنية أو قم بالاتصال بمسؤول نظام وحدة خدمة CMIS لمعرفة عنوان URL.",
		admin_repcfg_cmis_status_columns_hover: "حدد حالات البند التي تريد مشاهدة  شارات لها. يتم عرض شارات الحالة بجانب الوثائق في كشف المحتويات.",
		admin_port_hover: "حدد رقم منفذ TCP/IP الذي تقوم وحدة خدمة Content Manager OnDemand بالانصات من خلاله. القيمة المفترضة هي 1445.",
		admin_unified_searches_hover: "حدد ما اذا كنت تريد أن يتم السماح   للمستخدمين بحفظ عمليات البحث عبر-مستودع التخزين بمستودع التخزين هذا.<br/><br/>اذا لم تقم باتاحة هذا الاختيار، فان المستخدمين مازال يمكنهم تكوين عمليات بحث  عبر مستودع التخزين يتم تشغيلها لمستودع التخزين هذا. ويمكنك منع قيام  المستخدمين بتكوين عمليات بحث عبر مستودع التخزين على مستوى  سطح المكتب.<br/><br/>اذا قمت باتاحة عمليات البحث  عبر مستودعات التخزين، سيقوم IBM  Content  Navigator بتكوين نموذج بيانات البحث الموحد بمستودع التخزين.<br/><br/>بالنسبة الى IBM FileNet Content Manager، يجب الاتصال بمستودع التخزين كمسؤول نظام Content Engine قبل اتاحة هذا الاختيار.",
		admin_unified_searches_cm_hover: "حدد ما اذا كنت تريد أن يتم السماح   للمستخدمين بحفظ عمليات البحث عبر-مستودع التخزين بمستودع التخزين هذا.<br/><br/>اذا لم تقم باتاحة هذا الاختيار، فان المستخدمين مازال يمكنهم تكوين عمليات بحث  عبر مستودع التخزين يتم تشغيلها لمستودع التخزين هذا. ويمكنك منع قيام  المستخدمين بتكوين عمليات بحث عبر مستودع التخزين على مستوى  سطح المكتب.<br/><br/>اذا قمت باتاحة عمليات البحث  عبر مستودعات التخزين، سيقوم IBM  Content  Navigator بتكوين نموذج بيانات البحث الموحد بمستودع التخزين.",
		admin_max_results_hover: "حدد ما اذا كان سيتم وضع حد لعدد النتائج التي  يتم  ارجاعها  بواسطة البحث. اذا لم تقم بوضع حد لعدد نتائج البحث، قد تحدث  مشاكل  بالأداء اذا قام البحث  بارجاع عدد كبير من النتائج.",
		admin_timeout_hover: "حدد مدة تشغيل عملية البحث، بالثواني، بمستودع التخزين. اذا لم يتم استكمال عملية البحث في الوقت المحدد، سيقوم برنامج الوحدة التابعة للانترنت بالغاء الطلب. الحد الأقصى المفضل لانتهاء الوقت هو 60 ثانية.",
		admin_object_store_hover: "حدد ملف تخزين العناصر الذي تريد الاتصال به بوحدة خدمة Content Engine. يمكنك الحصول على الاسم الرمزي من الشاشة الرئيسية لادارة Content Platform Engine.",
		admin_object_store_display_name_hover: "يكون اسم العرض لملف تخزين العناصر مطلوبا اذا كنت تريد استخدام مسارات عمل IBM FileNet P8. يمكنك الحصول على اسم العرض لملف تخزين العناصر من الشاشة الرئيسية لادارة Content Platform Engine.",
		admin_all_searches_hover: "حدد ما اذا كان سيتم تحديد عدد عمليات البحث  التي  يتم عرضها تحت <b>كل عمليات البحث</b> عند قيام المستخدمين بالبحث في  مستودع  التخزين. اذا لم تقم بتحديد عدد عمليات البحث، قد يتم مواجهة مشاكل في  الأداء  اذا كان مستودع التخزين يتضمن عدد كبير من عمليات البحث التي تم حفظها.",

		admin_text_desktop: "سطح المكتب",
		admin_text_repository: "مستودع التخزين",
		admin_text_plugin: "برنامج مساعد",
		admin_text_theme: "النسق الرئيسي",
		admin_text_menu: "القائمة",
		admin_text_reason_code: "سبب التنقيح",
		admin_text_redactions: "عمليات التنقيح",
		admin_text_viewer_mapping: "مناظرة برنامج المشاهدة",
		admin_text_mobile_feature: "خاصية التنقل",
		admin_test_interface_text: "نص واجهة التعامل",
		admin_text_interface_text_locale: "نص واجهة تعامل مترجم",
		admin_text_icon_status: "شارة الحالة",
		admin_text_icon: "شارة",
		admin_text_file_type: "نوع ملف",
		admin_text_viewer: "برنامج المشاهدة",
		admin_text_desktop_access: "توصل سطح المكتب",
		admin_text_mapped_properties_for_office: "الخصائص المناظرة من Microsoft   Office",
		admin_text_desktop_features: "خصائص سطح المكتب",
		admin_text_unknown: "غير معروف",
		admin_folder_instruction: "حدد الخصائص التي يتم عرضها للوثائق والحافظات في كشف المحتويات عند قيام المستخدمين بالتجول. يمكنك أيضا تحديد ترتيب عرض الخصائص.",
		admin_search_instruction: "حدد الاختيارات التي تم تحديدها بصفة مفترضة عند قيام المستخدمين بتكوين عملية بحث.",
		admin_repository_office_conf_class_instruction: "اذا كان قد تم تركيب IBM   Content Navigator for Microsoft Office على أجهزة الوحدة التابعة في بيئة   التشغيل الخاصة بك، يمكنك تحديد كيفية معالجة الوثائق عند اضافتها أو عند انهاء  تخصيصها بمستودع التخزين هذا.",
		admin_repository_office_conf_instruction: "مناظرة خصائص وثيقة Microsoft Office الى الخصائص المعرفة على مستودع التخزين هذا.<br/><br/>عندما يتم اتاحة مناظرة الخاصية لسطح مكتب مرفق معه مستودع التخزين هذا، يتم استخدام الخصائص التي تم تحديدها على وثائق Microsoft Office لنشر الخصائص على مستودع التخزين عندما يقوم المستخدم باضافة وثيقة من IBM Content Navigator الى Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "مناظرة الخاصية",
		admin_repository_office_conf_prop_mapping_title1: "تكامل MS Office",
		admin_office_conf_instruction: "يمكنك التحكم في كيفية قيام IBM Content Navigator بالتكامل مع تطبيقات  Microsoft Office عند تركيب IBM Content Navigator for Microsoft Office بالوحدات التابعة.<br /><br /><b>هام:</b> اذا قمت بتحديد <b>مناظرة خصائص Office…</b>، يجب توصيف مناظرة   الخاصية أيضا لكل مستودع تخزين مرفق مع سطح المكتب. يمكنك توصيف مناظرات الخصائص في علامة تبويب <b>خصائص Office</b> لكل مستودع تخزين في بيئة التشغيل الخاصة بك.",
		admin_desktop_workflows_instruction: "<b>أنظمة IBM FileNet P8 فقط: </b> حدد مساحات التطبيق التي يتم عرضها على سطح المكتب هذا. يقوم الترتيب الخاص بمساحات التطبيق المحددة بتحديد الترتيب الذي سيتم عرض مساحات التطبيق  به في الوحدة التابعة للانترنت.<br><br><b>نصائح:</b> يمكنك تغيير اسم العرض لمساحات التطبيق من خلال تحديد أسماء جديدة في قسم <b>التسميات المميزة</b> لأداة الادارة.",
		admin_search_filtered_properties_instruction: "حدد الخصائص التي يستطيع   المستخدم البحث  بها. يمكنك اخفاء أي خصائص لا تريد أن يقوم المستخدم بالبحث   بها.",
		admin_search_filtered_operators_instruction: "حدد المعاملات المتاحة عند   قيام المستخدم  بالبحث عن نوع بيانات معين، مثل تاريخ أو رقم صحيح. يمكنك اخفاء  أي معاملات لا تريد أن  يقوم المستخدم باختيارها.",
		admin_search_default_search_results_instruction: "حدد الخصائص التي يتم   عرضها للوثائق والحافظات في نتائج البحث. يمكنك اخفاء أية خصائص لا تريد عرضها  في نتائج البحث.",
		admin_search_default_search_results_p8_cmis_instruction: "حدد الخصائص  التي  يتم عرضها للوثائق في نتائج البحث. يمكنك اخفاء أية خصائص لا تريد عرضها  في  النتائج.",

		admin_datetimeOp: "التاريخ والوقت",
		admin_floatOp: "رقم بنقطة متحركة",
		admin_integerOp: "رقم صحيح",
		admin_stringOp: "مجموعة حروف",
		admin_binaryOp: "ثنائي",
		admin_objectOp: "عنصر",
		admin_idOp: "الكود",
		admin_userOp: "مستخدم",
		admin_booleanOp: "بوولية",

		admin_string: "مجموعة حروف",
		admin_long: "طويل",
		admin_date: "التاريخ",
		admin_double: "مزدوج",
		admin_object: "عنصر",
		admin_guid: "GUID",
		admin_boolean: "بوولية",

		admin_repcfg_heading: "يمكنك احلال التصرف المفترض لمستودع التخزين هذا من خلال تحديد  معاملات التوصيف.",
		admin_repcfg_heading_od: "يمكنك احلال التصرف المفترض لمستودع التخزين هذا من خلال تحديد  معاملات التوصيف.<br /><br /><b>هام:</b> لاستخدام الوحدة   التابعة للانترنت مع Content Manager OnDemand، يجب أن تقوم أيضا بتحديد قيم   للمعاملات المتضمنة في علامة التبويب <b>Content Manager OnDemand</b> تحت   <b>المحددات</b>، والتي تنطبق على كل مستودعات تخزين Content Manager OnDemand   التي تقوم بالاتصال بها.",
		admin_repcfg_teamspaces: "ادارة مساحة الفريق:",
		admin_repcfg_enable: "‏اتاحة‏",
		admin_repcfg_disable: "الغاء-اتاحة",

		admin_repcfg_deliver_redacted_pdf_files_as: "سيتم تسليم ملفات PDF التي تم صياغتها بالنسق:",
		admin_repcfg_burn_pdf_to_pdf: "ملفات PDF",
		admin_repcfg_burn_pdf_to_tiff: "ملفات TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "يمكن تقديم ملف PDF الذي تم صياغته بتطبيق عمليات الصياغة على أساس الوظيفية الى العميل بنسق ملف مختلف. عند تغيير نسق الملف، يتم أيضا تغيير لاحقة الملف ونوع MIME.<br><br>على سبيل المثال، عند تقديم ملف PDF كملف TIFF، فانه يتم تغيير لاحقة الملف الى ‎.tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "يسمح للمستخدمين بدمج وتقسيم الصفحات التي تحتوي على عمليات تنقيح على أساس الوظيفة",
		admin_repcfg_redaction_allow_merge_and_split_hover: "حدد هذا الاختيار للسماح للمستخدمين بدمج وتقسيم الصفحات التي تحتوي على عمليات تقسيم على أساس الوظيفة. لن يستطيع المستخدمين الذين لا يعدون محررين لعملية التنقيح تحرير عمليات التنقيح على أساس الوظيفة ولن يتم منحهم امكانية توصل الى البيانات التي تلتزم بالسياق المصاحبة لعمليات التنقيح على أساس الوظيفة حتى اذا لم يتم اتاحة هذا الاختيار.",
		admin_repcfg_modify_teamspace_roles: "السماح للمالكين بتعديل الوظائف   لمساحات الفريق الموجودة",
		admin_repcfg_tm_delete_teamspace: "السماح للمالكين بحذف مساحة الفريق، متضمنة المحتويات",
		admin_repcfg_tm_delete_teamspace_id_missing: "يجب تحديد اسم المستخدم لمسؤول نظام مستودع التخزين.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "يجب تحديد كلمة السرية لمسؤول نظام مستودع التخزين.",
		admin_repcfg_teamspace_display_Recent: "عرض مساحات عمل الفريق التي تم تعديلها حديثا ",
		admin_repcfg_teamspace_display_Recent_value: "الأيام منذ آخر تعديل:",

		admin_repcfg_folder_selector: "الحافظة الرئيسية:",
		admin_repcfg_enable_folder_selector: "‏اتاحة‏",
		admin_repcfg_disable_folder_selector: "الغاء-اتاحة",
		admin_repcfg_SSO: "اتصال واحد:",
		admin_repcfg_teamspace_template_permission_text: "تخصيص القائمين بتكوين قالب مساحة الفريق:",
		admin_repcfg_teamspace_template_permission_hover_p8: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين قوالب مساحة الفريق. يتم منح المستخدمين والمجموعات محددات السرية المناسبة على الفئات والحافظات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>معرفة المزيد</a><br/><br/><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة مساحة الفريق.",
		admin_repcfg_teamspace_template_permission_hover_cm: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين قوالب مساحة الفريق. يتم اضافة المستخدمين الى ACLs المناسب ومنحهم الصلاحيات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>معرفة المزيد</a><br/><br/><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة مساحة الفريق.",
		admin_repcfg_teamspace_permission_text: "تخصيص وظائف مساحة الفريق:",
		admin_repcfg_teamspace_permission_hover_p8: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين مساحات الفريق واستخدامها. يتم منح المستخدمين محددات السرية المناسبة بالفئات والحافظات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>معرفة المزيد</a><br/><br/><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة مساحة الفريق.",
		admin_repcfg_teamspace_permission_hover_cm: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين مساحات الفريق واستخدامها. يتم اضافة المستخدمين الى ACLs المناسب ومنحهم الصلاحيات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>معرفة المزيد</a><br/><br/><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة مساحة الفريق.",
		admin_repcfg_entry_template_permission_text: "تخصيص وظائف قالب الادخال:",
		admin_repcfg_entry_template_permission_hover_p8: "حدد المجموعات أو المستخدمين الذي يمكنهم تكوين قوالب ادخال واستخدام قوالب الادخال. يتم منح المستخدمين محددات السرية المناسبة بفئة وثيقة قالب الادخال. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>معرفة المزيد</a><br/><br/><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة قالب الادخال.",
		admin_repcfg_entry_template_permission_hover_cm: "حدد المجموعات أو المستخدمين الذي يمكنهم تكوين قوالب ادخال واستخدام قوالب الادخال. يتم اضافة المستخدمين الى ACLs المناسب ومنحهم الصلاحيات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>معرفة المزيد</a><br /><br /><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة قالب الادخال.",
		admin_repcfg_office_template_permission_text: "تخصيص وظائف القالب:",
		admin_repcfg_office_template_permission_hover_cm: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين وتحرير واستخدام قوالب Microsoft Office Online أو خدمة التحرير. يتم اضافة المستخدمين الى ACLs المناسب ومنحهم الصلاحيات المطلوبة.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a><br /><br /><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة قوالب Microsoft Office Online أو خدمة التحرير.",
		admin_repcfg_draft_permission_text: "تخصيص وظائف المسودة:",
		admin_repcfg_draft_permission_hover_cm: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين مسودات وثائق Microsoft Office Online أو خدمة التحرير أثناء عملية التحرير المشتركة. أي مستخدم يريد تحرير الوثائق بشكل مشترك في Microsoft Office Online أو خدمة التحرير، يجب أن يتوافر لديه الامتيازات المناسبة لتكوين المسودات. يتم اضافة المستخدمين الى ACLs المناسب ومنحهم الصلاحيات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a><br /><br /><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة المسودة.",
		admin_repcfg_search_permission_text: "تخصيص وظائف البحث:",
		admin_repcfg_search_permission_hover_p8: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين أو استخدام عمليات البحث التي تم حفظها وعمليات البحث عبر مستودع التخزين. يتم منح المستخدمين محددات السرية المناسبة بالفئات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>معرفة المزيد</a><br /><br /><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة عملية البحث.",
		admin_repcfg_search_permission_hover_cm: "حدد المجموعات أو المستخدمين الذين يمكنهم تكوين أو تحرير أو استخدام عمليات البحث التي تم حفظها وعمليات البحث عبر مستودع التخزين. يتم اضافة المستخدمين الى ACLs المناسب ومنحهم الصلاحيات المطلوبة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>معرفة المزيد</a><br /><br /><b>التوصية:</b> استخدم المجموعات لتبسيط ادارة عملية البحث.",
		admin_repcfg_search_permission_title: "وظائف البحث",
		admin_repcfg_search_permission_intro_text: "تأكد من أنه يتوافر لدى المستخدمين امكانية توصل الى سطح المكتب تدعم الوظائف الخاصة بهم. على سبيل المثال، تأكد من أن القائمين بتكوين عمليات البحث لديهم امكانية توصل الى سطح المكتب تسمح لهم بتكوين عمليات البحث وعمليات البحث عبر مستودع التخزين.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "يعد موجهي نظام قالب مساحة الفريق المستخدمين الذين لديهم تصاريح <b>تحكم كامل</b> بمستودع التخزين (ملف تخزين العناصر). لا يمكنك تغيير كشف موجهي نظام قالب مساحة الفريق من أداة الادارة. <p>موجهي نظام قالب مساحة الفريق يمكنهم حذف أو تعديل أي قالب مساحة للفريق. المستخدم الذي يقوم بتكوين قالب مساحة الفريق لا يحتاج الى مشاركة القالب مع موجهي نظام قالب مساحة الفريق.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "عند تحديد مستخدم أو مجموعة كقائم بتكوين قالب مساحة الفريق، يتم منح المستخدم أو المجموعة السرية المناسبة في مستودع التخزين لتكوين قوالب مساحة الفريق. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>معرفة المزيد</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "المستخدمين والمجموعات الذين تم تخصيص امتيازات لهم خلاف الامتيازات الخاصة بمسؤول النظام والقائمين بالتكوين.<p>يمكنك نقل هؤلاء المستخدمين والمجموعات الى وظيفة القائمين بتكوين قالب مساحة الفريق بازالتهم من وظيفة الآخرين ثم تخصيصهم على أنهم قائمين بتكوين قالب مساحة الفريق.<p>يمكنك مراجعة الامتيازات التي تم منحها حاليا لهؤلاء المستخدمين والمجموعات باستخدام IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "يعد موجهي نظام مساحة الفريق هم المستخدمين الذين لديهم تصاريح <b>التحكم الكامل</b> بمستودع التخزين (ملف تخزين العناصر). لا يمكنك تغيير كشف موجهي نظام مساحة الفريق من أداة الادارة.<p>يستطيع موجهي نظام مساحة الفريق حذف أو تعديل أي مساحة فريق. المستخدم الذي قام بتكوين مساحة الفريق لا يحتاج الى مشاركة مساحة الفريق مع موجهي نظام مساحة الفريق.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "عند تحديد مستخدم أو مجموعة كقائم بتكوين مساحة الفريق، يتم منح المستخدم أو المجموعة السرية المناسبة في مستودع التخزين لتكوين مساحات الفريق. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>معرفة المزيد</a>",
		admin_repcfg_teamspace_user_hover_p8: "عند تحديد مستخدم أو مجموعة كمستخدم لمساحة الفريق، يتم منح المستخدم أو المجموعة السرية المناسبة في مستودع التخزين لاستخدام مساحات الفريق. لكن، يجب أن يكون المستخدم عضو في مساحة الفريق للتوصل الى مساحة الفريق. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>معرفة المزيد</a><p><b>ملحوظة:</b> اذا كنت تريد منح امكانية مشاهدة مساحات الفريق للمستخدمين الموجودين في بيئة التشغيل الخاصة بك، يمكنك اضافة #AUTHENTICATED-USERS pseudo-account الى وظيفة مستخدم مساحة الفريق.</p>",
		admin_repcfg_teamspace_others_hover_p8: "المستخدمين والمجموعات الذين تم تخصيص امتيازات لهم خلاف الامتيازات الخاصة بمسؤولي النظام والقائمين بالتكوين والمستخدمين.<p>يمكنك نقل هؤلاء المستخدمين والمجموعات الى وظائف معرفة مسبقا بازالتهم من وظيفة الآخرين ثم تخصيص وظائف مساحة الفريق لهم.<p>يمكنك مراجعة الامتيازات التي تم منحها حاليا لهؤلاء المستخدمين والمجموعات باستخدام IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "يعد موجهي نظام قالب الادخال هم المستخدمين الذين لديهم تصاريح <b>التحكم الكامل</b> في مستودع التخزين (ملف تخزين العناصر). لا يمكنك تغيير كشف موجهي نظام قالب الادخال من أداة الادارة. <p>يستطيع موجهي نظام قالب الادخال حذف أو تعديل أي قالب ادخال. المستخدم الذي يقوم بتكوين قالب الادخال لا يحتاج الى مشاركة قالب الادخال مع موجهي نظام قالب الادخال.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "عند تحديد مستخدم أو مجموعة كقائم بتكوين قالب الادخال، يتم منح المستخدم أو المجموعة السرية المناسبة في مستودع التخزين لتكوين قوالب الادخال. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>معرفة المزيد</a>",
		admin_repcfg_entry_template_user_hover_p8: "عند تحديد مستخدم أو مجموعة كمستخدم لقالب الادخال، يتم منح المستخدم أو المجموعة السرية المناسبة في مستودع التخزين لاستخدام قوالب الادخال. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>معرفة المزيد</a><p><b>ملحوظة:</b> اذا كنت تريد تمكين كل المستخدمين ببيئة التشغيل لديك من استخدام قوالب الادخال، فيمكنك اضافة #AUTHENTICATED-USERS pseudo-account الى وظيفة المستخدم لقالب الادخال.</p>",
		admin_repcfg_entry_template_others_hover_p8: "المستخدمين والمجموعات الذين تم تخصيص امتيازات لهم خلاف الامتيازات الخاصة بمسؤولي النظام والقائمين بالتكوين والمستخدمين.<p>يمكنك نقل هؤلاء المستخدمين والمجموعات في وظائف معرفة مسبقا بازالتهم من وظيفة الآخرين ثم تخصيص وظائف قالب الادخال لهم.<p>يمكنك مراجعة الامتيازات التي تم منحها حاليا لهؤلاء المستخدمين والمجموعات باستخدام IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "وعند تحديد مستخدم أو مجموعة كقائم بتكوين قالب مساحة الفريق، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لتكوين قوالب مساحة الفريق بمستودع التخزين. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>معرفة المزيد</a>",
		admin_repcfg_teamspace_creators_hover_cm: "عند تحديد مستخدم أو مجموعة كقائم بتكوين مساحة الفريق، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لتكوين مساحات الفريق بمستودع التخزين. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>معرفة المزيد</a>",
		admin_repcfg_teamspace_user_hover_cm: "عند تحديد مستخدم أو مجموعة كمستخدم لمساحة الفريق، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لاستخدام مساحات الفريق بمستودع التخزين. لكن، يجب أن يكون المستخدم عضو في مساحة الفريق للتوصل الى مساحة الفريق. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>معرفة المزيد</a>",
		admin_repcfg_entry_template_creators_hover_cm: "عند تحديد مستخدم أو مجموعة كقائم بتكوين قالب الادخال، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لتكوين قوالب الادخال بمستودع التخزين. <br/><br/>ولكن، تقوم محددات السرية لقالب ادخال محدد بتحديد صلاحيات المستخدم أو المجموعة لقالب الادخال. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>معرفة المزيد</a>",
		admin_repcfg_entry_template_editors_hover_cm: "عند تحديد مستخدم أو مجموعة كقائم بتكوين قالب الادخال، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لتعديل قوالب الادخال بمستودع التخزين. <br/><br/>ولكن، تقوم محددات السرية لقالب ادخال محدد بتحديد صلاحيات المستخدم أو المجموعة لقالب الادخال. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>معرفة المزيد</a>",
		admin_repcfg_entry_user_hover_cm: "عند تحديد مستخدم أو مجموعة كمستخدم لقالب الادخال، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لاستخدام قوالب الادخال بمستودع التخزين. <br/><br/>ولكن، تقوم محددات السرية لقالب ادخال محدد بتحديد صلاحيات المستخدم أو المجموعة لقالب الادخال. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>معرفة المزيد</a>",
		admin_repcfg_office_template_creators_hover_cm: "عند تحديد مستخدم أو مجموعة على أنه القائم بتكوين قالب Microsoft Office Online أو خدمة التحرير، فانه يتم منح المستخدم أو المجموعة الامتيازات المناسبة لتكوين ملفات القالب بمستودع التخزين. <br/><br/>لكن، محددات السرية لملف قالب معين تحدد الامتيازات التي تتوافر لدى المستخدم أو المجموعة للقالب. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a>",
		admin_repcfg_office_template_editors_hover_cm: "عند تحديد مستخدم أو مجموعة على أنه القائم بتحرير قالب Microsoft Office Online أو خدمة التحرير، فانه يتم منح المستخدم أو المجموعة الامتيازات المناسبة لتعديل ملفات القالب بمستودع التخزين.  <br/><br/>لكن، محددات السرية لملف قالب معين تحدد الامتيازات التي تتوافر لدى المستخدم أو المجموعة للقالب. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a>",
		admin_repcfg_office_template_user_hover_cm: "عند تحديد مستخدم أو مجموعة على أنه مستخدم قالب Microsoft Office Online أو خدمة التحرير، فانه يتم منح المستخدم أو المجموعة الامتيازات المناسبة لتطبيق القالب عند قيامهم بتكوين وثيقة Office Online أو خدمة تحرير جديدة من برنامج الانترنت.  <br/><br/>لكن، محددات السرية لملف قالب معين تحدد الامتيازات التي تتوافر لدى المستخدم أو المجموعة للقالب.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a>",
		admin_repcfg_draft_creators_hover_cm: "أي مستخدمين يريدون تحرير الوثائق بشكل مشترك في Microsoft Office Online أو خدمة التحرير، فانه يجب تخصيص هذه الوظيفة لهم. لا يجب تخصيص مستخدمين الى وظائف المحرر أو المستخدم. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a>",
		admin_repcfg_draft_editors_hover_cm: "أي مستخدمين يريدون تحرير الوثائق بشكل مشترك في Microsoft Office Online أو خدمة التحرير، فانه يجب تخصيص وظيفة <b>القائم بالتكوين</b> لهم. اذا تم تخصيص مستخدم الى وظيفة المحرر، فانه لا يمكنه تكوين مسودات، والتي تكون مطلوبة لعملية التحرير المشترك.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a>",
		admin_repcfg_draft_user_hover_cm: "أي مستخدمين يريدون تحرير الوثائق بشكل مشترك في Microsoft Office Online أو خدمة التحرير، فانه يجب تخصيص وظيفة <b>القائم بالتكوين</b> لهم. اذا تم تخصيص مستخدم الى وظيفة المستخدم، فانه لا يمكنه تكوين مسودات، والتي تكون مطلوبة لعملية التحرير المشترك.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>معرفة المزيد</a>",		
		admin_repcfg_search_others_hover_p8: "المستخدمين والمجموعات الذين تم تخصيص امتيازات لهم خلاف الامتيازات الخاصة بمسؤولي النظام والقائمين بالتكوين والمستخدمين.<p>يمكنك نقل هؤلاء المستخدمين والمجموعات الى وظائف معرفة مسبقا بازالتهم من وظيفة الآخرين ثم تخصيص وظائف البحث لهم.<p>يمكنك مراجعة الامتيازات التي تم منحها حاليا لهؤلاء المستخدمين والمجموعات باستخدام IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "موجهي النظام للبحث هم المستخدمين الذين لديهم تصاريح <b>التحكم الكامل</b> بمستودع التخزين (ملف تخزين العناصر). لن يمكنك تغيير كشف موجهي النظام للبحث من خلال أداة الادارة. <br /><br />يستطيع موجهي النظام للبحث حذف أو تعديل أي من عمليات البحث. المستخدم الذي قام بتكوين عملية البحث لن يحتاج الى مشاركة البحث مع موجهي النظام للبحث.",
		admin_repcfg_search_creators_hover_p8: "عند تحديد مستخدم أو مجموعة كقائم بتكوين عملية البحث، سيتم منح المستخدم أو المجموعة السرية المناسبة في مستودع التخزين لتكوين عمليات البحث. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>معرفة المزيد</a>",
		admin_repcfg_search_user_hover_p8: "عند تحديد مستخدم أو مجموعة كمستخدم للبحث، يتم منح المستخدم أو المجموعة حقوق السرية المناسبة في مستودع التخزين لاستخدام عمليات بحث<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>المعرفة المزيد</a><br /><br /><b>ملحوظة:</b> اذا كنت تريد منح امكانية استخدام عمليات البحث لكل المستخدمين ببيئة التشغيل لديك، يمكنك اضافة #AUTHENTICATED-USERS pseudo-account الى وظيفة مستخدم البحث.<br/><br />وبصفة مفترضة، يستطيع مستخدمي عمليات البحث تكوين عمليات بحث وعمليات البحث عبر مستودعات التخزين ولكن لا يمكنهم حفظ عمليات البحث. ويمكنك منع مستخدمي عمليات البحث من تكوين عمليات بحث جديد من خلال جعلهم يقوموا باستخدام سطح المكتب الذي يتم تحديد الاختيارات التالية له:<ul><li><b>منع المستخدمين من تكوين عمليات  بحث</b></li><li><b>منع المستخدمين من تكوين  عمليات بحث عبر مستودعات التخزين</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "عند تحديد مستخدم أو مجموعة كقائم بتكوين عمليات البحث، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لتكوين وحفظ عمليات البحث وعمليات البحث عبر-مستودعات التخزين بمستودع التخزين. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>معرفة المزيد</a><br /><br /><b>هام:</b> تأكد من قيام من يقوم بتكوين عمليات البحث باستخدام مساحة المكتب التي لا يتم تحديد الاختيارات التالية لها:<ul><li><b>منع المستخدمين من تكوين عمليات  بحث</b></li><li><b>منع المستخدمين من تكوين  عمليات بحث عبر مستودعات التخزين</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "عند تحديد مستخدم أو مجموعة كقائم بتحرير عمليات البحث، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لتعديل عمليات البحث وعمليات البحث عبر-مستودعات التخزين الموجودة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>معرفة المزيد</a><br /><br /><b>ملحوظة:</b> وبصفة مفترضة، يستطيع مستخدمي عمليات البحث تكوين عمليات بحث وعمليات البحث عبر مستودعات التخزين ولكن لا يمكنهم حفظ عمليات البحث. ويمكنك منع محرري عمليات البحث من تكوين عمليات بحث جديد من خلال جعلهم يقوموا باستخدام سطح المكتب الذي يتم تحديد الاختيارات التالية له:<ul><li><b>منع المستخدمين من تكوين عمليات  بحث</b></li><li><b>منع المستخدمين من تكوين  عمليات بحث عبر مستودعات التخزين</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "عند تحديد مستخدم أو مجموعة كمستخدم لعمليات البحث، فسيتم منح المستخدم أو المجموعة الصلاحيات المناسبة لفتح وتشغيل عمليات البحث وعمليات البحث عبر-مستودعات. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>معرفة المزيد</a><br /><br /><b>ملحوظة:</b> وبصفة مفترضة، يستطيع مستخدمي عمليات البحث تكوين عمليات بحث وعمليات البحث عبر مستودعات التخزين ولكن لن يمكنهم حفظ عمليات البحث. ويمكنك منع مستخدمي عمليات البحث من تكوين عمليات بحث جديد من خلال جعلهم يقوموا باستخدام سطح المكتب الذي يتم تحديد الاختيارات التالية له:<ul><li><b>منع المستخدمين من تكوين عمليات  بحث</b></li><li><b>منع المستخدمين من تكوين  عمليات بحث عبر مستودعات التخزين</b></li></ul>",
		admin_repcfg_db_encoding: "تكويد حروف قاعدة بيانات وحدة الخدمة:",
		admin_repcfg_db_encoding_hover: "تكويد الحروف المفترض لقاعدة بيانات IBM Content Manager هو UTF-8.",
		admin_repcfg_db_encoding_specify: "حدد تكويد حروف قاعدة البيانات",
		admin_repcfg_db_encoding_utf8: "تكويد UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "حدد هذا الاختيار اذا كنت تستخدم قاعدة بيانات ذات تكويد UTF-8. سيقوم IBM Content Navigator باستخدام تكويد UTF-8 للتحقق من طول مجموعات حروف قيمة خاصية البند.",
		admin_repcfg_db_encoding_other: "تكويد آخر",
		admin_repcfg_db_encoding_other_hover: "حدد هذا الاختيار اذا كنت تستخدم قاعدة بيانات ذات تكويد خلاف UTF-8. سيقوم IBM Content Navigator باستخدام عدد الحروف للتحقق من طول مجموعات حروف قيمة خاصية البند.",
		admin_repcfg_language_codes: "أكواد اللغات لوحدة الخدمة:",
		admin_repcfg_language_codes_avail: "المتاح",
		admin_repcfg_language_codes_sel: "المحدد",
		admin_repcfg_pdf_conversion: "أنواع MIME لتحويلها الى وثائق PDF في الملحقات:",
		admin_repcfg_pdf_conversion_avail: "المتاح",
		admin_repcfg_pdf_conversion_sel: "المحدد",

		admin_repcfg_box_share_enable_classes_label: "الفئات التي سيتم تعديلها لدعم مشاركة Box:",
		admin_repcfg_box_share_enable_classes_hover: "يمكنك تعديل هذه الفئة بحيث تقوم بتخزين كود الملف في Box عند مشاركة البند.",
		admin_repcfg_box_share_enable_classes_warning: "هام: أي فئات تقوم بتحديدها سيتم تعديلها لدعم مشاركة Box. بعد حفظ التغييرات الخاصة بك، لا يمكن ازالة التغييرات من الفئات.<br><br>يجب الاتصال بمستودع التخزين كمسؤول نظام لوحدة خدمة المكتبة لتعديل الفئات.",
		admin_repcfg_box_share_enable_classes_available: "الفئات المتاحة",
		admin_repcfg_box_share_enable_classes_selected: "الفئات المحددة",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "تخزين كود مشاركة Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "هذه الفئة تم تعديلها بالفعل لتخزين كود مشاركة Box. لا يمكنك ازالة هذا الاختيار.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "قم بتعديل هذه الفئة بحيث تقوم بتخزين كود الملف في Box عند مشاركة البند.",

		admin_repcfg_redaction: "عمليات التنقيح على أساس الوظيفة:",
		admin_repcfg_enable_redaction_hover: "حدد ما اذا كنت تريد استخدام عمليات التنقيح على أساس الوظيفة بالوثائق في مستودع التخزين هذا.<br/><br/>تنطبق التنقيحات على أساس الوظيفة عند تنزيل وثيقة وطباعتها وتحويلها بيانيا بواسطة القائم بالمشاهدة أو عرضها كصور مصغرة. تعتمد معرفة المستخدمين الذين قاموا بمشاهدة الوثيقة على وظيفتهم وسياسات التنقيح التي يتم تطبيقها.",

		admin_repcfg_redaction_policy_permission_text: "تخصيص محرري السياسة:",
		admin_repcfg_redaction_policy_editors_hover: "حدد المستخدمين والمجموعات التي ستقوم بتكوين وتعديل  وحذف سياسات التنقيح ووظائف التنقيح.",
		admin_repcfg_redaction_policy_editors_select_hover: "يستطيع محرري سياسة التنقيح تكوين وتعديل وحذف سياسات التنقيح ووظائف التنقيح.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "يستطيع مسؤولي سياسة التنقيح تخصيص محرري سياسة التنقيح.<br/><br/>يمكنك تغيير كشف مسؤولي سياسة التنقيح باستخدام IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "يستطيع مسؤولي سياسة التنقيح تخصيص محرري سياسة التنقيح.<br/><br/>يمكنك تغيير كشف مسؤولي سياسة التنقيح باستخدام برنامج الوحدة التابعة لادارة نظام IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "تخصيص محرري التنقيح:",
		admin_repcfg_redaction_editors_hover: "حدد المستخدمين والمجموعات التي ستقوم بتكوين وتعديل وحذف عمليات التنقيح على أساس الوظيفة. بعد تحديد المستخدمين والمجموعات كمحررين، يجب تحديدهم كمحررين في سياسات التنقيح قبل أن يمكنهم تحرير عمليات التنقيح على أساس الوظيفة.",
   		admin_repcfg_redaction_editors_select_hover: "يستطيع محرري عملية التنقيح تكوين وتعديل وحذف عمليات التنقيح على أساس الوظيفة عند تحديدهم أيضا كمحررين في سياسات التنقيح.",
   		admin_repcfg_redaction_administrators_hover_p8: "يستطيع مسؤولي عملية التنقيح تخصيص محرري التنقيح.<br/><br/>يمكنك تغيير كشف مسؤولي التنقيح باستخدام IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "يستطيع مسؤولي عملية التنقيح تخصيص محرري التنقيح.<br/><br/>يمكنك تغيير كشف مسؤولي عملية التنقيح باستخدام برنامج الوحدة التابعة لادارة نظام IBM Content Manager.",
		admin_repcfg_entry_template: "ادارة قالب الادخال:",
		admin_repcfg_entry_template_enable_classes_label: "الفئات التي سيتم تعديلها لدعم قالب الادخال:",
		admin_repcfg_oos_reference_attribute_label: "الخاصية المميزة للمرجع الى office online:",
		admin_repcfg_entry_template_enable_classes_hover: "هام: سيتم تعديل أية فئات تقوم بتحديدها لدعم قوالب الادخال. بعد حفظ التغييرات الخاصة بك، لا يمكن ازالة التغييرات من الفئات.<br><br>يمكنك تعديل الفئة لأحد أو كلا من الغرضين:<br><ul><li>تخزين كود بقالب الادخال الذي تم استخدامه لاضافة بند بحيث يتم تطبيق محددات قالب الادخال عند تعديل البند.</li><li>فئات الحافظات المتسلسلة فقط: لدعم مرفقات حافظة قالب الادخال.</li></ul>يجب الاتصال بمستودع التخزين كمسؤول نظام لوحدة خدمة المكتبة لتعديل الفئات.",
		admin_repcfg_entry_template_enable_classes_warning: "هام: سيتم تعديل أية فئات تقوم بتحديدها لدعم قوالب الادخال. بعد حفظ التغييرات الخاصة بك، لا يمكن ازالة التغييرات من الفئات.<br><br>يجب الاتصال بمستودع التخزين كمسؤول نظام لوحدة خدمة المكتبة لتعديل الفئات.",
		admin_repcfg_entry_template_enable_classes_available: "الفئات المتاحة",
		admin_repcfg_entry_template_enable_classes_selected: "الفئات المحددة",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "تخزين كود قالب الادخال",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "قم بتعديل هذه الفئة بحيث تقوم بتخزين كود قالب الادخال المستخدم لاضافة بند بحيث يتم تطبيق محددات قالب الادخال عند تعديل البند.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "تخزين مرفقات الحافظة",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "قم بتعديل هذه الفئة بحيث يمكن أن تدعم مرفقات حافظة قالب الادخال. يكون هذا القالب متاح فقط لفئات الحافظة المتسلسلة هرميا.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "تم تعديل هذه الفئة بالفعل لتخزين كود قالب الادخال. لا يمكنك ازالة هذا الاختيار.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "تم تعديل هذه الفئة  بالفعل لتخزين ترافقات الحافظة. لا يمكنك ازالة هذا الاختيار.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "يمكن استخدام فئات الحافظة المتسلسلة هرميا فقط والفئات غير المتسلسلة هرميا لتخزين ترافقات الحافظة.",
		admin_repcfg_entry_template_root_folder_association_title: "قوالب الادخال المرفقة مع الحافظة الرئيسية:",
		admin_repcfg_entry_template_root_folder_association_hover: "حدد قوالب الادخال التي تريد ارفاقها مع الحافظة الرئيسية بمستودع تخزين IBM Content Manager الخاص بك.<br /><br />اذا قمت بارفاق قوالب الادخال مع الحافظة الرئيسية وقام المستخدمين باضافة بنود الى الحافظة المتسلسلة هرميا، سيتم استخدام قالب الادخال دائما لاضافة بنود.",
		admin_repcfg_entry_template_root_folder_association_button: "تحديد المرفقات",
		admin_repcfg_oos_enable_classes_label: "الفئات التي سيتم تعديلها لدعم office online وخدمة التحرير:",
		admin_repcfg_oos_enable_classes_warning: "هام: سيتم تعديل أية فئات تقوم بتحديدها لتعمل مع Microsoft Office Online أو خدمة التحرير. بعد حفظ التغييرات الخاصة بك، فانه لا يمكن ازالة الخاصية المميزة للمرجع التي يتم اضافتها آليا الى كل فئة.<br><br>يجب الاتصال بمستودع التخزين كمسؤول نظام لوحدة خدمة المكتبة لتعديل الفئات.",
		admin_repcfg_oos_enable_classes_available: "الفئات المتاحة",
		admin_repcfg_oos_enable_classes_selected: "الفئات المحددة",
		admin_repcfg_oos_enable_classes_note: "هام:",
		admin_repcfg_oos_enable_classes_selected_not_support: "لا يتم دعم هذه الفئة من خلال Microsoft Office Online أو خدمة التحرير.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "سياسة النسخة لهذه الفئة تم تحديدها لتكون دائما النسخة التي لا يقوم Microsoft Office Online أو خدمة التحرير بدعمها. حدد فئة مختلفة.",
		admin_repcfg_download_recording: "تتبع مسار عمليات التحميل:",
		admin_repcfg_download_recording_hover: "يتم تتبع مسار عمليات التحميل بصفة مفترضة عند تركيب البرنامج الاضافي Social Collaboration Base Extensions بمستودع التخزين. لكن، يمكن أن يؤدي الغاء اتاحة  هذا الاختيار الى تحسين أداء مستودع التخزين.<br><br>اذا قمت بالغاء اتاحة هذا الاختيار، سيتم عرض عدد عمليات التحميل التي تم اجرائها للمستخدمين قبل الغاء اتاحة الاختيار.",
		admin_repcfg_sync_service: "خدمات التزامن:",
		admin_repcfg_download_ignored: "تجاهل عمليات التحميل لمستخدمين محددين:",
		admin_repcfg_download_ignored_hover: "يمكنك تجاهل عمليات التحميل المطلوبة بواسطة مستخدمين محددين، مثل موجهي النظام أو حسابات النظام لاظهار عدد المستخدمين بشكل أكثر دقة الذين قاموا بتحميل وثيقة. على سبيل المثال، اذا كان لديك حساب معين يتم استخدامه لتحميل المحتويات لتكوين تقرير شهري، فانه يمكنك تجاهل عمليات التحميل المطلوبة بواسطة هذا الحساب.<br><br><b>قيد: </b> لا يمكنك تحديد مجموعات.",

		admin_repcfg_add_as_major_version: "اضافة كنسخة رئيسية:",
		admin_repcfg_enable_add_as_major_version: "نعم",
		admin_repcfg_disable_add_as_major_version: "لا",
		admin_repcfg_checkin_as_major_version: "انهاء التخصيص على أنها النسخة   الرئيسية:",
		admin_repcfg_enable_checkin_as_major_version: "نعم",
		admin_repcfg_disable_checkin_as_major_version: "لا",
		admin_repcfg_annotation_security: "سرية التعليق التوضيحي:",
		admin_repcfg_inherit_annotation_security: "تكرار سرية الوثيقة المتضمنة",
		admin_repcfg_default_annotation_security: "استخدام سرية التعليق التوضيحي المفترضة",
		admin_repcfg_connection_point: "نقطة اتصال مسار العمل:",
		admin_repcfg_include_workflow_definition: "عرض فئة تعريف مسار العمل:",
		admin_repcfg_include_form_template: "عرض فئة قالب النموذج:",
		admin_repcfg_enable_include_workflow_definition: "نعم",
		admin_repcfg_disable_include_workflow_definition: "لا",

		admin_repcfg_status_columns: "شارات الحالة:",
		admin_repcfg_status_columns_hover: "حدد الحالات التي تريد مشاهدة شارات   لها. يتم عرض  شارات  الحالات  بجانب الوثائق والحافظات وبنود العمل في كشف المحتويات.",
		admin_repcfg_status_columns_documents_or_folders: "عرض شارة عندما تكون الوثائق أو  الحافظات:",
		admin_repcfg_status_columns_documents: "عرض شارة عندما تكون الوثائق بالحالة:",
		admin_repcfg_status_columns_documents_checked_out: "تم تخصيصها",
		admin_repcfg_status_columns_documents_declared_records: "تم توضيحها كسجلات",
		admin_repcfg_status_columns_documents_minor_versions: "لها نسخ ثانوية",
		admin_repcfg_status_columns_documents_compound_document: "تعد وثائق مركبة",
		admin_repcfg_status_columns_documents_bookmarks: "بها علامات توقف",
		admin_repcfg_status_columns_documents_hold: "تم ايقافها مؤقتا",
		admin_repcfg_status_columns_documents_notes: "بها ملاحظات",
		admin_repcfg_status_columns_work_items: "عرض شارة عندما تكون بنود العمل بالحالة:",
		admin_repcfg_status_columns_work_items_locked: "تم اقفالها",
		admin_repcfg_status_columns_work_items_checked_out: "تم تخصيصها",
		admin_repcfg_status_columns_work_items_deadline: "لها وقت انتهاء",
		admin_repcfg_status_columns_work_items_suspended: "تم تأجيلها من التشغيل",

		admin_repcfg_afp2pdf_config_file: "ملف توصيف AFP2PDF:",
		admin_repcfg_transform_xml_file: "ملف تحويل مهيأ:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "‏اتاحة‏",
		admin_repcfg_disable_ssl: "الغاء-اتاحة",
		admin_repcfg_keyringdb_file: "ملف قاعدة بيانات مفاتيح التشفير:",
		admin_repcfg_keyringstash_file: "ملف تخزين كلمات سرية مفاتيح التشفير:",
		admin_repcfg_od_sso: "بدء اتصال واحد",
		admin_repcfg_od_enable_sso: "‏اتاحة‏",
		admin_repcfg_od_disable_sso: "الغاء-اتاحة",
		admin_repcfg_od_sso_password: "كلمة السرية",
		admin_repcfg_advanced_label: "متقدمة",
		admin_repcfg_custom_properties_label: "الخصائص المهيأة:",
		admin_repcfg_new_button_label: "جديد",
		admin_repcfg_edit_button_label: "تحرير",
		admin_repcfg_delete_button_label: "‏حذف ‏",
		admin_repcfg_custom_head1: "الاسم",
		admin_repcfg_custom_head2: "القيمة",
		admin_repcfg_ecpdialog_title_new: "خاصية مهيأة جديدة",
		admin_repcfg_ecpdialog_title_edit: "تحرير خاصية مهيأة",
		admin_repcfg_ecpdialog_name: "الاسم:",
		admin_repcfg_ecpdialog_value: "القيمة:",
		admin_repcfg_ecpdialog_save: "‏حفظ‏",
		admin_repcfg_ecpdialog_create: "تكوين",
		admin_repcfg_ecpdialog_cancel: "‏الغاء‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "يجب ادخال هذه القيمة. لا يمكن أن تحتوي القيمة على فراغات ولا يمكن أن تكون مكررة.",

		admin_repcfg_cmis_use_gzip_encoding: "استخدام تكويد GZIP:",

		admin_repcfg_task_mgr_proxy: "كود وصلة ادارة المهام:",
		admin_repcfg_task_mgr_proxy_hover: "بالنسبة لحذف مساحة الفريق أو مشاركة Box، تقوم ادارة المهام باستخدام كلمة سرية لتشغيل المهام في الخلفية التي تقوم بتعريف مستودع التخزين.<br><br>اضغط تحديد وتسجيل الدخول الى مستودع التخزين باستخدام كلمة سرية وكود مستخدم صحيح لمسئول نظام مستودع التخزين.",
		admin_task_manager_not_enabled_warning: "يتطلب هذا الاختيار خدمة Task Manager، لكن خدمة ادارة المهام لا يتم اتاحتها.  يمكنك اتاحة خدمة ادارة المهام لكل أسطح المكتب في صفحة عام للمحددات.",
		admin_task_manager_not_enabled_and_user_warning: "يتطلب هذا الاختيار خدمة Task Manager، لكن خدمة ادارة المهام لا يتم اتاحتها. في هذه الصفحة، حدد كود وصلة Task Manager، ثم في صفحة عام للمحددات، قم باتاحة خدمة ادارة المهام لكل أسطح المكتب.",
		admin_task_manager_user_id_pw_not_set_warning: "يتطلب هذا الاختيار خدمة ادارة المهام، وكلمة سرية وكود مستخدم مسئول النظام. في هذه الصفحة، حدد كود وصلة ادارة المهام.",
		admin_repcfg_teamspaces_delete_task_id: "مسؤولي النظام لمستودع التخزين:",
		admin_repcfg_teamspaces_delete_task_password: "كلمة السرية:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "يجب تحديد مسؤول نظام وحدة خدمة المكتبة للسماح لخدمة ادارة المهام بحذف مساحة الفريق بمستودع التخزين.",
		admin_repcfg_teamspaces_delete_task_hover: "بصفة مفترضة، عند قيام مستخدم بحذف مساحة الفريق، يتم اخفاء مساحة الفريق. تظل كل الحافظات والوثائق في مساحة الفريق بمستودع التخزين. <br /> <br />عند اتاحة هذا الاختيار، تظل الوثائق فقط التي تم تخزينها في حافظات أخرى بمستودع التخزين.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "اذا كان لديك عدد كبير من مساحات الفريق في بيئة التشغيل الخاصة بك، فيمكن أن يستغرق الأمر وقت طويل لعرض كل مساحات الفريق في علامة التبويب <b>مساحات الفريق</b>. يمكنك تحديد هذا الاختيار لتقليل مقدار الوقت الذي تستغرقه لملء الكشف.<br /><br />اذا كان المستخدم يريد التعامل مع مساحة الفريق التي تعد خارج المدى الذي قمت بتحديده، يستطيع المستخدم استخدام مجال <b>ترشيح البيانات</b> لايجاد مساحة الفريق.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "اذا قمت بتحديد هذا   الاختيار، سيمكن للمستخدمين الذين تتوافر لديهم وظائف المالك بمساحة الفريق  تعديل الوظائف الخاصة بمساحات الفريق التي تم تكوينها قبل  IBM Content  Navigator، النسخة 2.0.2.<br /><br />هذا الاختيار لا يؤثر على مساحات الفريق  التي تم تكوينها باستخدام IBM Content  Navigator، النسخة 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "حدد ما اذا كنت تريد أن يكون   المستخدم قادرا على  تكوين مساحات فريق وقوالب مساحات فريق في مستودع التخزين   هذا.<br /><br /><b>هام:</b> يجب  أن يدعم مستودع التخزين الحافظات ذات تسلسل   هرمي.<br /><br />اذا قمت باتاحة مساحات  الفريق، سيقوم  IBM Content Navigator  بتكوين نموذج بيانات مساحة الفريق في مستودع  التخزين. يتضمن نموذج البيانات   عناصر ACL وصلاحيات وفئات صلاحية ونوعي بنود جديدين.",
		admin_repcfg_folder_selector_hover: "حدد الحافظة التي تريد استخدامها   كحافظة رئيسية عند قيام المستخدمين بالاستعراض لايجاد الوثائق. اذا لم يكن لديك  حافظات متسلسلة هرميا تم توصيفها بمستودع التخزين الخاص بك، ستسمح لك هذه   المحددات بدعم خاصية الاستعراض بتعريف الحافظة الرئيسية. اذا كان لديك حافظة   متسلسلة هرميا تم توصيفها بمستودع التخزين الخاص بك، ستقوم هذه المحددات باحلال  الحافظة الرئيسية التي تم توصيفها على مستودع التخزين.",
		admin_repcfg_cm_use_sso_hover: "حدد ما اذا كان سيتم اتاحة بدء اتصال واحد   للمستخدمين  ذوي صلاحية بدء اتصال موثوق به.<br /><br /><b>هام:</b> يجب اتاحة   بدء اتصال واحد في وحدة خدمة Content Manager، ويجب  توصيف وحدة خدمة WebSphere  Application Server الى LTPA حتى يعمل معامل التوصيف هذا.",
		admin_repcfg_cm_direct_retrieve_hover: "يتم اتاحة الاسترجاع المباشر بصفة   مفترضة لأنه يسمح للوحدة التابعة للانترنت باسترجاع المحتويات سريعا من   Resource Manager. <br /><br />يمكنك الغاء اتاحة هذا الاختيار اذا لم تكن تريد  أن يقوم تطبيق الوحدة التابعة بالتوصل الى Resource Manager مباشرة أو اذا كان  لديك جدار حماية أو وحدة خدمة proxy تمنع الوحدة التابعة للانترنت من التوصل   الى Resource Manager من خلال عناوين URL. على سبيل المثال، يستطيع جدار   الحماية منع المستخدمين من مشاهدة الوثائق في برنامج مشاهدة البرامج عند اتاحة   الاسترجاع المباشر.",
		admin_repcfg_cmItemTypesToDisplay: "واذا كنت لا تريد أن يقوم المستخدمين  بمشاهدة أنواع البنود وللمصدر وأنواع  البنود على وحدة خدمة IBM Content  Manager، فيمكنك عرض أنواع البنود لنموذج الوثيقة فقط. ويتم عرض أنواع البنود  عند قيام المستخدمين بتكوين عمليات البحث واضافة الوثائق  وتكوين الحافظات.",
		admin_repcfg_cm_language_codes_hover: "حدد اللغات التي سيتم ارجاع  البيانات  بها من وحدة  خدمة Content Manager. يتم التحكم في كشف اللغات المتاحة بواسطة  كشف تعريفات اللغات بوحدة  الخدمة.<br /><br /><b>تذكر:</b>  يتم عرض البيانات  في الوحدة التابعة للانترنت باللغة  المحددة في برنامج  استعراض الانترنت الخاص  بالمستخدم.",
		admin_repcfg_cm_pdf_conversion_hover: "حدد أنواع الوثائق التي سيتم  تحويلها  الى PDF عند  قيام مستخدم بارسال وثيقة ذات أجزاء متعددة كملحقات بريد  الكتروني. يتم دمج كل الأجزاء في  وثيقة PDF واحدة.",
		admin_repcfg_use_teamspaces_p8_hover: "حدد ما اذا كنت تريد أن يقوم   المستخدمين بتكوين  مساحات الفريق وقوالب مساحات الفريق في مستودع التخزين   هذا.<br /><br />اذا قمت باتاحة  مساحات الفريق، سيقوم IBM Content Navigator   بتكوين نموذج بيانات مساحة الفريق في مستودع  التخزين. يتضمن نموذج البيانات قوالب الخصائص والعناصر المهيأة وعناصر الحافظات وحافظات  متعددة.",
		admin_repcfg_use_entry_template_p8_hover: "حدد ما اذا كنت تريد أن يكون المستخدمين قادرين على تكوين وادارة قوالب الادخال بمستودع التخزين هذا من IBM Content Navigator. اذا لم تقوم باتاحة هذه الخاصية، يستطيع المستخدمين البحث عن واستخدام قوالب الادخال التي توجد بالفعل بمستودع التخزين.<br /><br />اذا قمت باتاحة ادارة قالب الادخال، سيقوم IBM Content Navigator بتعديل نموذج بيانات قالب الادخال في مستودع التخزين. يتضمن التعديل الخصائص الجديدة. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>معرفة المزيد</a>",
		admin_repcfg_use_entry_template_cm_hover: "حدد ما اذا كنت تريد أن يكون المستخدمين قادرين على تكوين وادارة قوالب الادخال بمستودع التخزين هذا من IBM Content Navigator.<br /><br />اذا قمت باتاحة ادارة قالب الادخال، سيقوم IBM Content Navigator بتكوين نموذج بيانات قالب الادخال في مستودع التخزين. يتضمن نموذج البيانات  عنصر ACL جديد وخصائص جديدة ونوع بند جديد. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>معرفة المزيد</a>",
		admin_repcfg_sync_service_p8_hover: "حدد ما اذا كنت تريد تمكين المستخدمين من مزامنة البنود المفضلة لديهم عبر وحدات العمل الخاصة بهم وأجهزة الهاتف المحمول.<br><br><b>هام:</b> لاستخدام هذه الخاصية يجب أيضا استكمال المهام التالية:<br><ul><li>حدد <b>عنوان URL العام لخدمات التزامن</b> في قسم <b>خدمات التزامن</b> لأداة الادارة.</li><li>قم باضافة مستودع التخزين هذا الى سطح المكتب الذي تم اتاحة خدمات التزمن له.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "حدد ما اذا كان اختيار النسخة  الرئيسية تم  تحديده كاختيار مفترض عند قيام المستخدمين باضافة وثائق الى   مستودع  التخزين.<br /><br />يتوافر لدى المستخدمين امكانية الغاء هذا الاختيار  اذا أرادوا اضافة  الوثيقة كنسخة ثانوية.",
		admin_repcfg_p8_checkin_as_major_version_hover: "حدد ما اذا كان اختيار   النسخة الرئيسية  تم  تحديده كاختيار مفترض عند قيام المستخدمين بانهاء تخصيص   الوثائق الى مستودع التخزين.<br /><br />يتوافر لدى المستخدمين امكانية الغاء   هذا الاختيار اذا أرادوا انهاء  تخصيص الوثيقة كنسخة ثانوية.",
		admin_repcfg_p8_annotation_security_hover: "حدد نوع السرية الذي تريد   تطبيقه على  التعليقات التوضيحية افتراضيا.<br /><br />يتوافر لدى المستخدمين   امكانية تغيير السرية  للتعليقات التوضيحية.",
		admin_repcfg_p8_connection_point_hover: "اذا كنت تريد استخدام مسارات عمل   IBM FileNet  P8، حدد نقطة اتصال  Process Engine. تقوم نقطة الاتصال المحددة   بتحديد مسارات العمل  المتاحة للمستخدمين الذين يقومون بالتوصل لمستودع التخزين  هذا.",
		admin_repcfg_p8_include_workflow_definition_hover: "اذا قمت بعرض فئة  وثيقة  تعريف مسار العمل IBM FileNet P8 في برنامج  الانترنت، يستطيع  المستخدمين البحث  عن واضافة تعريفات مسار العمل الى مستودع التخزين.",
		admin_repcfg_p8_include_form_template_hover: "اذا قمت بعرض فئة وثيقة قالب  نموذج IBM FileNet P8 في برنامج الانترنت، يستطيع المستخدمين البحث عن واضافة   قوالب النموذج الى مستودع التخزين.",
		admin_repcfg_od_afp2pdf_config_file_hover: "حدد المسار المصنف بالكامل  لملف  توصيف  AFP2PDF  لمستودع التخزين هذا بوحدة خدمة تطبيق الانترنت. ويعتبر  AFP2PDF  Transform ضروريا لمشاهدة وطباعة بيانات AFP.<br /><br /><b>تذكر:</b>  يجب   تركيب AFP2PDF Transform لاستخدام هذا المعامل.",
		admin_repcfg_od_transform_xml_file_hover: " اذا كنت تريد استخدام تحويل مهيأ لتحويل  محتويات Content Manager OnDemand، حدد المسار المصنف بالكامل لملف XML الذي يتم استخدامه  لتعريف عملية التحويل. يجب أن يوجد ملف XML في وحدة خدمة تطبيق الانترنت.",
		admin_repcfg_od_ssl_hover: "حدد ما اذا كان سيتم استخدام SSL في الاتصال  بين  وحدة خدمة  IBM Content Navigator application server و Content Manager   OnDemand library server ووحدات الخدمة للعناصر.<br /><br /><b>هام:</b> عند   اتاحة SSL الى Content Manager OnDemand، فانها لا تتضمن الاتصالات بين IBM   Content Navigator application server أو وحدات خدمة الانترنت أو وحدات العمل للمستخدم.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "حدد المسار المصنف بالكامل لملف  قاعدة بيانات  مفاتيح التشفير لمستودع التخزين هذا في وحدة خدمة تطبيق   الانترنت. على سبيل المثال، C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />يحتوي ملف قاعدة بيانات مفاتيح التشفير على شهادات الدليل الرئيسي الموثوق بها الخاصة بك. يجب استخدام نظام حماية قوي لنظام الملفات الخاص بك لمنع التوصل غير المصرح به لهذا الملف.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "حدد المسار المصنف بالكامل   لملف تخزين  كلمات سرية مفاتيح التشفير  لمستودع التخزين هذا في وحدة خدمة   تطبيق الانترنت. على سبيل المثال، C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />يحتوي ملف تخزين كلمات سرية مفاتيح التشفير على كلمة سرية ملف قاعدة بيانات ملفات التشفير. يجب استخدام نظام حماية قوي لنظام الملفات الخاص بك لمنع التوصل غير المصرح به لهذا الملف.",
		admin_repcfg_od_sso_password_hover: "حدد كلمة السرية لاستخدامها لبدء اتصال واحد مع  وحدة خدمة OnDemand.",
		admin_repcfg_od_custom_properties_hover: "يدعم ODWEK Java API الخصائص   المهيأة. اذا كنت  تريد استخدام أي من الخصائص المهيأة عند الاتصال بمستودع   التخزين من خلال الوحدة التابعة  للانترنت، حدد الأسماء والقيم للخصائص   المهيأة.<br /><br />للحصول على مزيد من المعلومات  عن الخصائص المهيأة التي يتم دعمها، أنظر  ODWEK Java API Javadocs، التي توجد في الدليل الفرعي /api   لدليل تركيب ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "أدخل اسم الخاصية.",
		admin_repcfg_od_custom_properties_value_hover: "أدخل قيمة الخاصية.",
		admin_repcfg_od_use_sso_hover: "حدد ما اذا كان سيتم السماح بالتوصل الواحد  للمستخدمين.<br /><br /><b>هام:</b> يجب اتاحة بدء الاتصال الواحد في وحدة خدمة Content Manager OnDemand ليتم تشغيل معامل التوصيف هذا.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "استخدم تكويد GZIP لمصدر CMIS هذا.",
		admin_repcfg_cm_use_part_file_name: "اسم الملف الذي سيتم استخدامه عند تحميل الوثائق:",
		admin_repcfg_cm_use_part_file_name_help: "حدد كيفية تحديد أسماء ملفاتلوثائق عند قيام المستخدمين بتحميل وثائق.",
		admin_repcfg_cm_use_part_file_name_enable: "استخدام اسم الملف",
		admin_repcfg_cm_use_part_file_name_disable: "استخدام اسم البند في مستودع التخزين",
		admin_repcfg_add_doc_name: "الاسم المفترض لوثيقة تم اضافتها:",
		admin_repcfg_add_doc_name_hover: "يستطيع المستخدمين تغيير الاسم قبل اضافة الوثيقة.",
		admin_repcfg_add_doc_name_empty: "لا شيء (خاليا)",
		admin_repcfg_add_doc_name_file_name: "اسم الملف للوثيقة المحددة",

		admin_repcfg_compound_documents: "خصائص الوثيقة المركبة:",
		admin_repcfg_compound_documents_hover: "اتاحة خصائص الوثيقة المركبة P8، مثل التجول.",
		admin_repcfg_cm_action_list_config_enabled: "كشف تصرفات بند العمل:",
		admin_repcfg_cm_action_list_config_hover: "عند توصيف عملية توجيه الوثيقة في برنامج الوحدة التابعة لادارة نظام Content Manager، يمكنك تحديد كشف التصرفات التي يستطيع المستخدم تنفيذها على بند العمل.<br /><br />قم باتاحة هذا الاختيار اذا كنت تريد استخدام كشف التصرفات من وحدة خدمة Content Manager. يتم استخدام هذه المحددات في القائمة السياقية في نافذة تحرير الخصائص لبند العمل.<br /><br /><b>هام: </b> تقوم المحددات التي توجد في كشف التصرفات باحلال أية قوائم مهيأة تقوم بتوصيفها في أداة ادارة لوحة تجول المحتوى. اذا لم يكن هناك أية محددات في كشف التصرفات، لن يستطيع المستخدم اتخاذ أية تصرفات على بنود العمل.",

		admin_repcfg_box_share: "مشاركة Box",
		admin_repcfg_box_share_p8_hover: "يسمح للمستخدمين بمشاركة وثيقة من مستودع التخزين هذا. تتضمن مشاركة وثيقة نسخ الملف الى Box وتكوين رابط وارسال الرابط في بريد الكتروني.<br /><br />اذا قمت باتاحة مشاركة  Box، سيقوم IBM Content Navigator بتكوين نموذج بيانات مشاركة Box في مستودع التخزين. لتركيب البرنامج المساعد لمشاركة IBM Content Navigator Box، يجب أن تكون متصلا لمستودع التخزين كمسئول نظام وحدة خدمة المكتبة.",

		admin_menu_type_icon: "شارة نوع القائمة",
		admin_menu_toolbar_hover: "خط الأدوات",
		admin_menu_toolbar_custom_hover: "خط أدوات مهيأة",
		admin_menu_contextMenu_hover: "قائمة سياقية",
		admin_menu_contextMenu_custom_hover: "قائمة سياقية تم تهيئتها",

		admin_menu_contextMenu_custom_empty: "لم يتم تعريف قوائم سياقية مهيأة في البرامج  المساعدة التي تم توصيفها.",
		admin_menu_toolbar_custom_empty: "لم يتم تعريف خطوط أدوات مهيأة في البرامج المساعدة  التي تم توصيفها.",

		admin_file_type_category_filters: "مرشحات بيانات نوع الملف:",
		admin_file_type_category_filters_hover_help: "حدد كشف أنواع الملفات التي يستطيع المستخدم استخدامها في الحالات التالية:<ul><li>لتقليل كشف النتائج عند البحث أو التصفح في IBM Content Navigator for Microsoft Office<li>لتقليل كشف النتائج عند بحث مستودع تخزين IBM FileNet P8 في الوحدة التابعة للانترنت<li>لتحديد أنواع الملفات التي يستطيع المستخدمين اضافتها الى مستودع التخزين عند استخدام قالب ادخال</ul>",
		admin_file_type_only_use_in_et_folder_association: "عرض فقط في ارفاقات حافظة قالب الادخال",
		admin_office_config_properties_label: "خصائص Office",
		admin_office_config_type_label: "نوع البيانات",
		admin_office_config_mapped_property_label: "خاصية مستودع التخزين",
		admin_office_config_properties_hover_help: "قم بالدخول ثم قم باضافة الاسم لكل خاصية من خصائص  Microsoft Office التي تريد مناظرتها لخاصية مستودع التخزين. يجب أن تتطابق أنواع البيانات لكل الخصائص",
		admin_office_config_mapped_property_hover_help: "اذا كنت تريد مناظرة خصائص  Office لأكثر من خاصية مستودع تخزين، يجب أن تقوم بتكوين مناظرة خاصية جديدة",
		admin_new_property_mapping_title: "مناظرة الخاصية الجديدة",
		admin_property_mapping_title: "تحرير مناظرة الخاصية",
		admin_property_mapping_instruction: "حدد خصائص Microsoft Office التي تريد مناظرتها لخاصية في مستودع التخزين. نوع البيانات لخصائص Office يجب أن يطابق نوع بيانات الخاصية في مستودع التخزين. <br /><br />اذا كانت وثيقة Office تحتوي على أكثر من خاصية واحدة من المناظرة، سيقوم IBM Content Navigator باستخدام الخاصية الأولى في الكشف لنشر الخاصية في مستودع التخزين.",
		admin_ms_general_settings: "التوصيف العام:",
		admin_ms_delete_local_settings: "حذف الملفات المحلية عند قيام المستخدمين بما يلي:",
		admin_ms_outlook_options: "تكامل Outlook:",
		admin_ms_enable_props_mapping: "مناظرة خصائص Office لخصائص مستودع التخزين عند قيام المستخدمين:",
		admin_ms_open_doc_when_checkout: "تخصيص وثيقة آليا عند فتحها",
		admin_ms_open_doc_when_checkout_hover_help: "بتحديد هذا الاختيار يتم منع المستخدم من احلال الملف في مستودع التخزين بنسخة أقدم من الملف.",
		admin_ms_prompt_close_office: "عرض رسالة للمستخدمين لانهاء تخصيص الوثائق عند اغلاق تطبيقات Office",
		admin_ms_prompt_close_office_hover_help: "بتحديد هذا الاختيار يتم منع المستخدمين من نسيان انهاء تخصيص العمل الخاص بهم.",
		admin_ms_add_with_entry_template_only: "عرض فقط تصرف اضافة مع قالب",
		admin_ms_delete_local_on_add: "حذف الملفات المحلية عند قيام المستخدمين باضافة الوثائق",
		admin_ms_delete_local_on_checkin: "حذف الملفات المحلية عند قيام المستخدمين بانهاء تخصيص أو الغاء الوثائق",
		admin_ms_delete_local_on_add_hover_help: "عند قيام المستخدم باضافة وثيقة في IBM Content Navigator for Microsoft Office، سيتم اضافة الوثيقة الى مستودع التخزين، وتبقى نسخة محلية من الوثيقة مفتوحة بحيث يتمكن للمستخدمين تخصيصها مباشرة لعمل تغييرات.<br /><br />حدد هذا الاختيار لاغلاق وحذف النسخة المحلية من الوثيقة آليا بعد اضافة الوثيقة الى مستودع التخزين.",
		admin_ms_delete_local_on_checkin_hover_help: "عند قيام المستخدم بانهاء تخصيص وثيقة في IBM Content Navigator for Microsoft Office، سيتم انهاء تخصيص الوثيقة بمستودع التخزين، وتبقى نسخة محلية من الوثيقة مفتوحة. أيضا، بعد استخدام اختيار الغاء انهاء التخصيص، تبقى النسخة المحلية من الوثيقة مفتوحة. وباستخدام النسخة المحلية المفتوحة، يمكن للمستخدمين انهاء تخصيص الوثيقة مباشرة مرة أخرى لعمل تغييرات.<br /><br />حدد هذا الاختيار لاغلاق وحذف نسخة الوثيقة آليا بعد انهاء التخصيص بالوثيقة، أو باستخدام اختيار الغاء التخصيص.",
		admin_ms_delete_local_on_save: "حفظ وثيقة",
		admin_ms_prompt_for_props_on_add: "عرض رسالة للمستخدمين لادخال قيم الخصائص عند قيامهم باضافة بريد الكتروني الى مستودع التخزين",
		admin_ms_prompt_for_props_on_add_hover_help: "اذا لم تحدد هذا الاختيار، ستقوم الوحدة التابعة للانترنت باستخدام مناظرة خاصية Outlook التي تم تعريفها لمستودع التخزين.<br /><br />اذا كان لديك قوالب ادخال مصاحبة للحافظة التي تم اضافة البريد الالكتروني اليها، قد لا يطلب من المستخدم أي خصائص.",
		admin_ms_delete_email_on_add: "حذف البريد الالكتروني من وحدة خدمة البريد الالكتروني عند اضافة هذا البريد الالكتروني الى مستودع التخزين",
		admin_ms_send_email_as_link_only: "منع المستخدمين من ارسال وثائق كملحقات",
		admin_ms_send_email_as_link_only_hover_help: "اذا قمت بتحديد هذا الاختيار، يستطيع المستخدمين ارسال وثائق فقط كروابط من Outlook. يقوم هذا الاختيار بتأكيد أن المستخدمين الذين يتوافر لديهم الصلاحيات المناسبة فقط بمستودع التخزين يستطيعون مشاهدة الوثائق.",
		admin_ms_enable_prop_mapping_for_add: "مناظرة خصائص Office لخصائص مستودع   التخزين عند قيام المستخدمين باضافة أو انهاء تخصيص الوثائق",
		admin_ms_checkout_document_after_add: "تخصيص الوثائق آليا بعد اضافتها الى مستودع التخزين",
		admin_no_default_document_type_filtering: "ارجاع كل أنواع الوثائق بصفة مفترضة عند قيام المستخدمين بتشغيل عمليات البحث",
		admin_no_default_document_type_filtering_hover_help: "في IBM Content Navigator for Microsoft Office، يكون التصرف المفترض هو أن يشاهد المستخدم فقط نوع الوثيقة للتطبيق الحالي عند تشغيل عمليات البحث. على سبيل المثال، يتم تحديد نوع الوثيقة Word افتراضيا عند القيام بالبحث من Microsoft Word.<br/><br/>لكن، بتحديد هذا الاختيار يتم اخلاء مربعات الاختيار لأنواع الوثائق بحيث يشاهد المستخدم كل الوثائق التي تم ارجاعها بواسطة عملية البحث. يستطيع المستخدم احلال هذه المحددات من خلال تحديد واحد أو أكثر من أنواع الوثائق قبل تشغيل عمليات البحث.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "حدد ما اذا كان سيتم مناظرة خصائص الوثيقة المعرفة لوثائق Microsoft Office للخصائص المعرفة بمستودع التخزين.<br /></br /><b>هام:</b> اذا قمت باتاحة هذه الخاصية، يجب أن تقوم بتوصيف خصائص Office لكل مستودع تخزين في بيئة التشغيل الخاصة بك. اذا لم تقم بمناظرة خصائص Office لخصائص مستودع التخزين الخاص بك، لن تعمل هذه الخاصية.<br /><br />لا تنطبق هذه المحددات بالنسبة الى Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "حدد هذا الاختيار لتقليل عدد الخطوات التي يجب أن يقوم بها المستخدم للتعامل مع الوثائق بعد اضافتها الى مستودع التخزين.<br /></br /><b>ملحوظة:</b> للتأكد من قيام المستخدمين بانهاء تخصيص الوثائق بمستودع التخزين، حدد <b>مطالبة المستخدمين بانهاء تخصيص الوثائق عند اغلاق تطبيقات Office </b>.",
		admin_ms_show_details_recently_used: "عرض تفاصيل البند <b>المستخدم حديثا</b>",
		admin_ms_show_details_recently_used_hover_help: "افتراضيا، عند مشاهدة كشف أحدث البنود المستخدمة، يتم اخفاء تفاصيل البنود مما يسمح بعرض المزيد من البنود. عند تحديد هذا الاختيار، في كشف أحدث البنود المستخدمة، فانه يتم عرض التفاصيل لأول وثيقة في لوحة التفاصيل افتراضيا.",
		admin_ms_show_no_permissions_warning: "عرض التحذيرات عند قيام المستخدمين بتحرير الخصائص أو انهاء تخصيص وثيقة ولكن عدم توافر ترخيص لمشاهدة قالب ادخال الوثيقة",
		admin_ms_show_no_permissions_warning_hover_help: "اذا كانت الوثيقة بمستودع التخزين قد تم تكوينها باستخدام أحد قوالب الادخال، ولكن المستخدم ليس لديه ترخيص لمشاهدة قالب ادخال الوثيقة، فلن يتم استرجاع قالب الادخال.<br /><br/>لذلك، فانه عند قيام المستخدم بتحرير خصائص الوثيقة، سيتم عرض الخصائص بدون استخدام قالب الادخال. وعند قيام المستخدم بانهاء تخصيص الوثيقة، سيتم انهاء تخصيص الوثيقة بدون استخدام قالب الادخال.<br /><br />وبصفة مفترضة، تتم هذه التصرفات بدون اعلام المستخدم بأنه يجري استخدام قالب الادخال. وسيتم تسجيل التحذير بملف السجل فقط.<br /><br />يجب تحديد هذا الاختيار اذا كنت تريد عرض التحذيرات التي تقوم باعلام المستخدم مباشرة عند عدم استخدام قالب الادخال.",
		admin_ms_hide_search_actions: "طي قسم مرشحات البحث",
		admin_ms_hide_search_actions_hover_help: "بصفة مفترضة، يمكن للمستخدمين تطبيق أحد مرشحات التصرف لتحديد أحد التصرفات، أو المستخدمين، أو مجموعات المستخدمين، وحدد تاريخ أو مدى من التواريخ لحدوث التصرف. على سبيل المثال، يمكنك البحث عن الوثائق التي قمت باضافتها خلال الشهر الماضي فقط.<br /><br />واذا كنت لا تريد السماح للمستخدمين بتطبيق مرشحات التصرف، فيجب تحديد هذا الاختيار لاخفاء مرشحات التصرف وتقليل عدد المجالات التي يتم عرضها عند تعريف معيار البحث.",
		admin_ms_hide_save_document: "اخفاء الاختيار <b>حفظ</b> في شريط العنوان",
		admin_ms_hide_save_document_hover_help: "باستخدام الاختيار <b>حفظ</b>، يستطيع المستخدمين حفظ تغييرات الوثيقة الى مستودع التخزين بدون انهاء تخصيص الوثيقة.",
		admin_ms_indicate_managed_email_on_add: "الاشارة الى ما اذا كان قد تم اضافة البريد الالكتروني الى مستودع التخزين بالفعل",
		admin_ms_indicate_managed_email_on_add_hover_help: "يسمح لك تحديد هذا الاختيار أن تعلم أن البريد الالكتروني يوجد بالفعل في مستودع التخزين، الذي يمكن أن يقلل عدد المرات التي يتم اضافة البريد الالكتروني بها الى مستودع التخزين.  عند تحديد هذا الاختيار، يتم تكوين تصنيف لون جديد يسمى IBM ECM في Microsoft Outlook. أي بريد الكتروني يتم اضافته الى مستودع التخزين يتم  اضافته آليا الى Managed في تصنيف IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "اختيارات الاضافة في مجموعة التحرير:",
		admin_ms_edit_group_add_command_configuration_hover_help: "حدد اختيارات <b>الاضافة</b> المتاحة من مجموعة <b>التحرير</b> في خط العنوان:<ul><li>حدد <b>عرض كل اختيارات الاضافة</b> لعرض اختيار الاضافة وكل تصرفات الاضافة المتاحة من مجموعة التحرير.</li><li>حدد <b>اخفاء كل اختيارات الاضافة</b> لمنع المستخدمين من اضافة وثائق الى مستودع التخزين أو اذا كنت تريد أن يقوم المستخدمين باضافة الوثائق فقط في مساحة عمل الفريق.</li><li>حدد <b>اخفاء تصرف اضافة مع قالب</b> اذا كنت تريد فرض ارفاقات حافظة قالب الادخال ومنع المستخدمين من اختيار قالب ادخال مختلف.</li><li>حدد <b>عرض تصرف اضافة مع قالب فقط</b> اذا كنت تريد أن يقوم المستخدمين باضافة الوثائق باستخدام قوالب الادخال.</li></ul>",
		admin_ms_show_edit_group_add_button: "عرض كل اختيارات الاضافة (المفترض)",
		admin_ms_hide_edit_group_add_button: "اخفاء كل اختيارات الاضافة",
		admin_ms_hide_add_with_entry_template: "اخفاء تصرف اضافة مع قالب",
		admin_ms_managed_in_ecm: "يتم ادراته في IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "اذا كانت تصنيفات عرض المستخدمين في   Microsoft Outlook، سيتم عرض هذه التسمية للبريد الالكتروني والتي تم اضافتها الى  مستودع تخزين IBM Content Manager أو IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "لا يمكن أن يحتوي Managed في اسم تصنيف IBM ECM على فاصلة (,) أو  فاصلة منقوطة (;).",
		admin_delete_open_docs_after_close: "حذف الوثائق المفتوحة آليا عند قيام المستخدمين باغلاق الوثائق",
		admin_admin_delete_open_docs_after_close_hover_help: "عند قيام مستخدم بفتح وثيقة في IBM Content Navigator for Microsoft Office، يتم تحميل الوثيقة الى دليل وثائق المستخدم أو المكان المحدد بواسطة محددات تتبع الملف الخاصة بسطح المكتب.<br><br>حدد هذا الاختيار لحذف الملفات المفتوحة ولكن لم يتم تخصيصها عند قيام المستخدمين باغلاق الوثائق. بتحديد هذا الاختيار يمكنك:<ul><li>فرض التوافق مع سياسات IT</li><li>التأكد من قيام المستخدمين بالتعامل مع أحدث النسخ من الوثائق</li><li>تقليل مساحة القرص التي يتم استخدامها لتخزين الوثائق</li><ul>",
		admin_ms_custom_command_configuration: "الأوامر المهيأة:",
		admin_ms_custom_command_configuration_hover_help: "يمكنك اضافة حتى أربعة أوامر الى خط أدوات IBM Content Navigator for Microsoft Office في تطبيقات Microsoft Office. يمكن استخدام الأوامر لفتح عناوين URL. على سبيل المثال، يمكنك اضافة أمر لفتح خدمة يمكن استخدامها للبحث عن المستخدمين والمجموعات.",
		admin_ms_custom_command_dialog_title: "تحرير أمر مهيأ",
		admin_ms_custom_command_dialog_intro_text: "قم بتعريف أمر يمكن استخدامه لفتح عنوان URL من IBM Content Navigator لخط أدوات Microsoft Office في تطبيقات Microsoft Office.",
		admin_ms_custom_command_id: "الأمر ${0}",
		admin_ms_custom_command_available_label: "المتاح",
		admin_ms_custom_command_available_hover_help: "اذا كان عنوان URL الذي تم تعريفه لأمر يحتاج أن يتم تنفيذه دون اتصال للصيانة، يمكنك اخلاء مربع الاختيار للأمر بحيث لا يتم عرض الأمر في Microsoft Office.<br/><br/><b>هام:</b> يجب أن يقوم المستخدم بتسجيل الخروج من سطح المكتب حتى تنعكس التغييرات في IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "كود الأمر",
		admin_ms_custom_command_id_label: "الكود",
		admin_ms_custom_command_label_label: "التسمية المميزة",
		admin_ms_custom_command_label_hover_help: "حدد التسمية المميزة لعرضها للأمر في Microsoft Office.",
		admin_ms_custom_command_description_label: "‏الوصف‏",
		admin_ms_custom_command_description_hover_help: "حدد الوصف لعرضه للأمر في Microsoft Office.",
		admin_ms_custom_command_url_label: "عنوان URL",
		admin_ms_custom_command_url_hover_help: "حدد عنوان URL المصنف بالكامل لفتحه من Microsoft Office. يمكن أن يكون عنوان URL صفحة انترنت أو خدمة.",
		admin_ms_custom_command_icon_label: "شارة",
		admin_ms_custom_command_icon_hover_help: "حدد اسم الملف للشارة للعرض، على سبيل المثال، CommandIcon.png.<br/><br/><b>هام:</b> يجب أن تقوم باضافة ملف الشارة للدليل الفرعي للبرامج المساعدة لدليل تركيب IBM Content Navigator for Microsoft Office بكل جهاز وحدة تابعة.<br/><br/>اذا كان ملف الشارة لا يوجد بدليل البرامج المساعدة، أو اذا لم تقم بتحديد شارة، سيتم عرض الشارة المفترضة customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "التسمية المميزة للمجموعة:",
		admin_ms_custom_command_group_name_hover_help: "يمكنك تحديد تسمية مميزة لمجموعة ليتم عرضها أسفل الأوامر المهيأة في خط العنوان.<br/><br/>اذا لم تقم بتحديد تسمية مميزة، ستكون التسمية المميزة للمجموعة هي <b>الأوامر المهيأة</b>.",
		admin_ms_ribbon_tab_label: "تسمية علامة التبويب IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "أدخل الاسم الذي تريد عرضه لعلامة تبويب IBM Content Navigator for Microsoft Office في خط عنوان Microsoft Office. اذا لم تحدد اسم، سيتم تسمية علامة التبويب \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "اغلاق نافذة المهام عند قيام المستخدمين بفتح الوثائق",
		admin_ms_close_task_pane_on_open_hover_help: "حدد هذا الاختيار اذا كنت تريد تكبير المساحة التي يستطيع المستخدمين مشاهدة وثائق في Microsoft Office بها.<br/><br/>بالنسبة لمستخدمي Microsoft Office 2010: للتأكد من اغلاق نافذة المهام لكل الوثائق، يجب اتاحة نمط واجهة التعامل متعددة الوثائق (MDI) بالضغط على <b>اختيارات</b> &gt; <b>متقدم</b> ومحو تحديد الاختيار <b>عرض كل النوافذ في خط المهام</b>.",
		admin_ms_open_document_options: "اختيارات فتح الوثائق:",
		admin_ms_delete_local_file_options: "اختيارات حذف الملف المحلي:",
		admin_ms_add_and_checkin_options: "اختيارات الاضافة وانهاء التخصيص:",
		admin_ms_search_options: "اختيارات البحث:",
		admin_ms_display_options: "اختيارات العرض:",
		admin_ms_bidirection_enable_label: "اتاحة الدعم للنص ثنائي الاتجاه",
		admin_ms_bidirection_enable_hover_help: "حدد هذا الاختيار اذا كنت تريد السماح للمستخدمين بادخال أو مشاهدة النص في IBM Content Navigator for Microsoft Office في اتجاه آخر خلاف يسار-الى-يمين.",
		admin_ms_text_direction_label: "اتجاه النص الأساسي للمحتويات:",
		admin_ms_text_direction_hover_help: "حدد الاتجاه الذي تم ادخال النص به في مجالات الادخال في IBM Content Navigator for Microsoft Office. تقوم هذه المحددات أيضا بالتحكم في كيفية عرض البنود، مثل أسماء الحافظات أو قيم الخصائص.",
		admin_ms_control_threshold_label: "الحد الأدنى لعدد البنود لاتاحة مجال النظر قدما:",
		admin_ms_control_threshold_hover_help: "افتراضيا، يتم اتاحة مجال النظر قدما عندما يكون عدد البنود أكبر من أو يساوي 50، لبحث أو تحديد الخصائص التي لها قيم معرفة مسبقا في كشف مسقط. يمكنك تغيير قيمة الحد الأدنى.",

		admin_ms_default_email_class: "الفئة التي سيتم استخدامها عند اضافة بريد   الكتروني",
		admin_ms_default_email_class_hover_help: "أي بريد الكتروني سيتم اضافته  الى  مستودع التخزين هذا من Microsoft Outlook سيتم اضافتها الى الفئة التي  تقوم  بتحديدها. لا يستطيع المستخدمين تغيير الفئة.",
		admin_ms_default_folder_class: "الفئة التي سيتم استخدامها عند تكوين  حافظات",
		admin_ms_default_folder_class_hover_help: "سيتم اضافة أية حافظة يتم  تكوينها في مستودع التخزين هذا من تطبيق Microsoft  Office الى الفئة التي تقوم  بتحديدها.  لا يستطيع المستخدمين تغيير الفئة.",
		admin_ms_default_folder_warn_title: "لا يمكنك استخدام فئة ${0} على أنها الفئة التي سيتم استخدامها عند تكوين حافظات.",
		admin_ms_default_folder_warn_name_prop_invalid: "خاصية الاسم للفئة لا تعد مجموعة حروف، ويجب أن يكون اسم الحافظة مجموعة حروف.<br />حدد فئة مختلفة لاستخدامها عند تكوين حافظات أو التعامل مع مسؤول نظام IBM Content Manager لتغيير خاصية الاسم للفئة الى مجموعة حروف.",
		admin_ms_default_folder_warn_req_props: "تتضمن الفئة الخصائص المطلوبة التي لا تحتوي على أية قيم. لكن، لا يستطيع المستخدمين تحديد قيم للخصائص المطلوبة عند تكوين حافظات من IBM Content Navigator for Microsoft Office.<br />حدد فئة مختلفة لاستخدامها عند تكوين حافظات أو عند التعامل مع مسؤول نظام IBM Content Manager لجعل الخصائص المطلوبة اختيارية أو ملء الخصائص المطلوبة بقيمة مسبقا.",
		admin_ms_delimiter_for_office_properties: "المحدد لخصائص مجموعة حروف متعددة القيم",
		admin_ms_delimiter_for_office_properties_hover_help: "حدد الحرف الذي سيتم استخدامه كمحدد لخصائص مجموعة الحروف التي تقوم بمناظرتها لخصائص مجموعة حروف متعددة القيم. افتراضيا، يمكنك تخصيص مجموعة من القيم لخاصية مجموعة حروف متعددة القيم باستخدام فاصلة منقوطة (;) كمحدد للقيم المنفصلة. لكن، اذا كانت أحد قيم مجموعة الحروف الخاصة بك تتضمن فاصلة منقوطة، لا يمكنك اضافة قيمة مجموعة الحروف هذه الا اذا تم تغيير المحدد الى حرف مختلف. على سبيل المثال، يمكنك تغيير المحدد الى فاصلة (,)",
		admin_ms_outlookPropertyRemembrance : "تذكر المحددات عند اضافة الرسائل والملحقات",
		admin_ms_outlookPropertyRemembrance_hover_help : "يتم تذكر قيم الخاصية والمكان واختيار الفئة والسرية المخصصة للرسائل والملحقات وسيتم استخدامها على أنها المحددات المفترضة عند اضافة البنود المستقبلية.",

		admin_file_type_name_hover_help: "المساعدة الخاصة بموضع المؤشر للاسم",
		admin_file_type_description_hover_help: "المساعدة الخاصة بموضع المؤشر للوصف",
		admin_file_type_dialog_title: "تحرير مرشح بيانات نوع الملف",
		admin_new_file_type_dialog_title: "مرشح بيانات نوع ملف جديد",
		admin_mobile_feature_dialog_title: "الخاصية",
		admin_mobile_feature_dialog_new_title: "خاصية جديدة",
		admin_file_type_instructions: "يجب تكوين مرشح بيانات يستطيع المستخدم استخدامه لتقليل كشف نتائج البحث الخاص به. يمكنك مناظرة أنواع MIME متعددة الى مرشح البيانات.",
		admin_file_type_filter_place_holder: "أنواع MIME لمرشح البيانات",
		admin_new_button_label: "جديد",
		admin_edit_button_label: "تحرير",
		admin_delete_button_label: "‏حذف ‏",
		admin_copy_button_label: "‏نسخ‏",
		admin_verify_button_label: "تحقق",
		admin_availabe_filters_label: "مرشحات البيانات المتاحة",
		admin_selected_filters_label: "مرشحات البيانات المحددة",

		admin_mobile_access: "التوصل لتطبيق التليفون المحمول:",
		admin_mobile_access_hover_help: "اذا كنت تريد استخدام IBM Content Navigator من جهاز محمول، يفضل اتاحة التوصل الى سطح المكتب هذا للمستخدمين من تطبيق التليفون المحمول.<br /><br />اذا قمت باتاحة التوصل الى سطح المكتب  هذا  من تطبيق التليفون المحمول، سيستطيع المستخدمين التوصل الى الوحدة التابعة  للانترنت من برامج استعراض التليفون المحمول الخاص بهم. لكن، لم يتم تصميم الوحدة التابعة للانترنت ليتم التوصل اليها من أجهزة التليفون المحمول.",

		admin_mobile_access_allow_label: "السماح للمستخدمين بما يلي:",
		admin_mobile_allow_add_photos: "اضافة صور من الكاميرا ومكتبة الصور",
		admin_mobile_allow_add_docs: "اضافة وثائق وتكوين حافظات الى مستودع التخزين",
		admin_mobile_allow_open_docs: "فتح الوثائق في التطبيقات الأخرى",
		admin_mobile_allow_add_docs_hover_help: "يستطيع المستخدمين تكوين حافظات  أو  اضافة وثائق من تطبيقات أخرى للتليفون المحمول، مثل وثيقة تم الحاقها ببريد  الكتروني.",
		admin_mobile_allow_open_docs_hover_help: "يطلب من المستخدمين تحديد التطبيق الذي سيتم استخدامه لمشاهدة الوثيقة المحددة. اذا كان هناك تطبيق واحد فقط متاحا، سيتم استخدام هذا التطبيق.",
		admin_mobile_features: "الخصائص:",
		admin_mobile_features_hover_help: "حدد خصائص سطح المكتب التي يتم عرضها في تطبيق IBM Content Navigator للتليفون المحمول.",
		admin_mobile_new_feature_button_label: "خاصية جديدة",
		admin_mobile_move_up_button_label: "نقل لأعلى",
		admin_mobile_move_down_button_label: "نقل لأسفل",
		admin_desktop_mobile_instructions: "يتم عرض تعليمات محددات التليفون المحمول هنا",
		admin_desktop_max_number_of_docs_to_add: "الحد الأقصى لعدد الوثائق التي سيتم اضافتها:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "حدد الحد الأقصى لعدد الوثائق التي يستطيع المستخدمين اضافتها في كل مرة. الحد الأقصى المفترض هو 50. لكن، يمكنك تحديد الحد الأقصى حتى 300.",
		admin_desktop_max_number_of_docs_to_modify: "الحد الأقصى لعدد البنود التي سيتم تعديلها:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "حدد الحد الأقصى   لعدد البنود التي يستطيع المستخدمين تعديلها في كل مرة. الحد الأقصى المفترض هو 50. لكن، يمكنك تحديد الحد الأقصى حتى 300.",
		admin_desktop_max_conversion_size: "الحد الأقصى لمقدار البيانات لتحويلات PDF ‏(بالميجابايت):",
		admin_desktop_max_conversion_size_hover_help: "<b>قيد:</b> لا يتم دعم هذه المحددات في IBM Content Manager OnDemand.<br/><br/>حدد الحد الأقصى لمقدار البيانات التي يمكن تحويلها الى PDF. يتم تطبيق هذا الحد عند قيام المستخدمين بتحميل بنود بنسق PDF أو بارسال بنود عبر البريد الالكتروني كملفات PDF.<br /><br />واذا كان لا يمكن تحديد حجم كل من الوثائق، سيتم الاستمرار في تحويل الوثائق الى PDF.<br/><br/>الحد المفترض هو 200 ميجابايت. وتحديد الحد الى ما هو أعلى من   200 ميجابايت قد يؤثر على أداء النظام.",
		admin_desktop_timeProperties: "خاتم الوقت:",
		admin_desktop_time_properties_hover_help: "<b>مستخدمي IBM FileNet P8 فقط:</b> يتم تطبيق هذه المحددات على الخصائص المهيأة ولا يتم تطبيقها على خصائص النظام. على سبيل المثال، ستستمر خاصية تعديل بواسطة في عرض جزء الوقت لخاتم الوقت اذا قمت بتحديد <b>عرض جزء الوقت فقط لخاتم الوقت</b>.<br/><br/>لا تقوم هذه المحددات بتغيير خاتم الوقت في مستودع التخزين.",
		admin_desktop_disable_time_stamp: "عرض خاتم الوقت بالكامل",
		admin_desktop_enable_time_stamp: "عرض جزء التاريخ فقط لخاتم الوقت",
		admin_desktop_timezone: "نطاق التوقيت:",
		admin_desktop_timezone_localuser: "عرض نطاق التوقيت المحلي للمستخدم",
		admin_desktop_timezone_alluser: "عرض نفس نطاق التوقيت لكل المستخدمين",
		admin_desktop_timezone_hover_help: "يمكنك تحديد ما اذا كان المستخدم سيمكنه مشاهدة خاتم الوقت على أساس نطاق التوقيت المحلي الخاص بهم أم ما اذا كان المستخدم يمكنه مشاهدة نفس نطاق التوقيت.<br/><br/>ولا تقوم هذه الخاصية بتغيير خاتم الوقت في مستودع التخزين. ولكن، المحددات التي تقوم بتحديدها تقوم بتعيين نطاق التوقيت الذي سيتم استخدامه في تكوين خاتم الوقت بمستودع التخزين عند قيام المستخدم باضافة أو تعديل البنود.",
		admin_desktop_mobile_feature_display_label: "عرض",
		admin_desktop_mobile_feature_icon_file_label: "ملف الشارات",
		admin_mobile_feature_dialog_icon_file_label: "ملف الشارات:",
		admin_mobile_feature_dialog_url_label: "عنوان URL:",
		admin_desktop_mobile_feature_name_label: "الاسم",
		admin_desktop_mobile_select_feature_label: "تحديد خاصية",
		admin_desktop_mobile_feature_icon_label: "شارة الخاصية",
		admin_desktop_share_admin_none: "لم يتم تحديد مسئول النظام.",
		admin_desktop_share_admin_edit_label: "تحديد مسئول النظام...",
		admin_browse_icon: "شارة الاستعراض",
		admin_search_icon: "شارة البحث",
		admin_favorites_icon: "شارة التفضيلات",
		admin_casesearch_icon: "شارة الحالة",
		admin_datacap_icon: "شارة Datacap",
		admin_system_defined: "معرف بواسطة النظام",
		admin_icon_file_placeholder_text: "مكان الملف (على سبيل المثال، http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "الدليل الرئيسي",
		admin_folder_default: "المفترض",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "خطوط الأدوات",
		admin_menu_context_menus: "القوائم السياقية",
		admin_menu_office_toolbars: "أوامر خط الشريط من Microsoft Office",
		admin_menu_office_menus: "القوائم السياقية من Microsoft Office",

		admin_file_name_label: "اسم الملف:",
		admin_exportconfiguration_security_label: "تضمين المستخدمين والمجموعات الذين لديهم صلاحيات لاستخدام سطح المكتب",
		admin_exportconfiguration_instruction: "يمكنك تصدير أسطح المكتب الخاصة بك،   بما يتضمن توصيف مستودع التخزين وتوصيف البرنامج المساعد الخاص بسطح المكتبة    المرافق له، الى ملف يمكنك استقباله على  نسخة أخرى من IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "تصدير سطح المكتب",
		admin_exportconfiguration_button_label: "تصدير",
		admin_dialog_select_all: "تحديد الكل",
		admin_dialog_deselect_all: "محو الكل",

		admin_importconfiguration_instruction: "سيتم تصدير البنود الموجودة بملف    التوصيف المحدد الى هذا النظام. ولكن، اذا كان هناك بند بنفس الكود موجود    بالفعل، فيجب أن تحدد ما اذا كان سيتم الاحتفاظ به أم سيتم احلاله.",
		admin_importconfiguration_dialog_label: "استقبال سطح المكتب",
		admin_importconfiguration_reason_dialog_label: "استقبال أسباب التنقيح",
		admin_importconfiguration_button_label: "‏استقبال‏",
		admin_to_be_imported: "بند التوصيف الذي سيتم استقباله",
		admin_on_target_system: "البند الحال بالنظام المستهدف",
		admin_import_short_warning_message: "البنود التالية موجودة بالفعل على هذا   النظام. حدد البنود التي تريد استبدالها على هذا النظام:",
		admin_import_warning_message: "تحتوي بنود التوصيف التالية على نفس الأكواد   كالبنود التي توجد على النظام المستهدف. حدد هذه البنود فقط التي تريد    استقبالها واحلالها على النظام المستهدف.<br /><br />اذا لم تكن تريد احلال   بند  توصيف، قم بتكوين نسخة من البند بالنسخة التي قمت بتصدير سطح المكتب منها،  وحدد  كود مختلف وقم بارفاقه مع سطح المكتب. قم بتصدير سطح المكتب مرة أخرى،   ثم  استقبال سطح المكتب بهذه النسخة.",
		admin_choose_file_to_import_label: "اختر ملف ليتم استقباله:",
		admin_download_imported_log: "تحميل التقرير",
		admin_desktop_import_summary: "ملخص استقبال سطح المكتب",
		admin_reason_import_summary: "ملخص استقبال سبب التنقيح",
		admin_rba_import_summary: "ملخص استقبال وظيفة الادارة",
		admin_import_open_tabs_checking: "قبل أن يمكنك استقبال سطح مكتب، يجب أن تقوم باغلاق كل علامات التبويب خلاف  علامة تبويب <bold>سطح المكتب</bold> في أداة الادارة.",
		admin_import_no_conflict: "سيتم استقبال البنود التالية:",
		admin_desktop_invalid: "سطح مكتب غير صحيح",
		admin_desktop_warning: "تم حفظ سطح المكتب مع عرض تحذيرات.",
		admin_repos_warning: "تم حفظ مستودع التخزين مع عرض تحذيرات.",
		admin_config_type_icon: "شارة نوع بند التوصيف",

		admin_approval_workflow: "مسار عمل الموافقة",
		admin_approval_workflow_hover: "يسمح للمستخدمين باستعراض مسار عمل الموافقة المعرف مسبقا. يمكنك الغاء اتاحة مسار عمل الموافقة للسماح للمستخدمين ببدء مسار عمل موافقة مهيأ تم تعريفه بواسطة الاشتراك. افتراضيا، يتم اتاحة مسار عمل الموافقة.<br><br><b>هام:</b> اذا قمت باتاحة مسار عمل الموافقة، فانه يجب أيضا ضمان اضافة واحد أو كلا من تعريفات مسار العمل المعرفة مسبقا (ICNParallelDocumentApproval.pep و  ICNSequentialDocumentApproval.pep) الى مستودع التخزين وتحويلها الى Content Process Engine.",

		admin_cannot_add_desktop_members_error: "لا يمكنك تحديد المستخدمين أو المجموعات التي يتوافر لديها امكانية توصل لسطح المكتب هذا.",
		admin_cannot_add_desktop_members_error_explanation: "لا يتوافر لديك التصاريح المناسبة لاسترجاع معلومات المستخدم والمجموعة.",
		admin_cannot_add_desktop_members_error_userResponse: "قم بتسجيل الدخول باستخدام اسم مستخدم مختلف أو أطلب من مسؤول نظام IBM Content Manager منحك امتياز UserACLOwner، المطلوب لاسترجاع معلومات المستخدم والمجموعة.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "لا يمكنك تحديد المستخدمين والمجموعات.",
		admin_cannot_select_users_groups_error_explanation: "لا يتوافر لديك التصاريح المناسبة لاسترجاع معلومات المستخدم والمجموعة.",
		admin_cannot_select_users_groups_error_userResponse: "قم بتسجيل الدخول باستخدام اسم مستخدم مختلف أو أطلب من مسؤول نظام IBM Content Manager منحك امتياز UserACLOwner، المطلوب لاسترجاع معلومات المستخدم والمجموعة.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "لم يتم ايجاد الوحدة التابعة OAuth2.",
		oauth_client_not_found_error_explanation: "لم يتم ايجاد كود الوحدة التابعة OAuth2 ${0}.",
		oauth_client_not_found_error_userResponse: "قم بالاتصال بالمسئول عن النظام، واعلامه بان كود الوحدة التابعة OAuth2 لم يتم ايجاده.",
		oauth_client_not_found_error_adminResponse: "قم بمراجعة توصيف مستودع التخزين، وتأكد من أنه يحتوي على كود الوحدة التابعة OAuth2 الصحيح.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "كود_العميل",

		oauth_login_failed_error: "فشل بدء الاتصال لمستودع التخزين.",
		oauth_login_failed_error_explanation: "فشلت محاولة تسجيل الدخول لمستودع التخزين ${0}.",
		oauth_login_failed_error_userResponse: "تأكد من صحة كلمة السرية وكود المستخدم، ثم حاول تسجيل الدخول مرة أخرى.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "حدث خطأ أثناء محاولة تسجيل الدخول الى ${0}.",
		oauth_error_return_error_explanation: "فشلت محاولة توثيق ${0}.",
		oauth_error_return_error_userResponse: "قم بالاتصال بمسؤول النظام مع تحديد المعلومات التالية:  فشلت محاولة توثيق ${0} وتم ارجاع رسالة الخطأ التالية: <br>${1}<br><b>خطأ:</b> ${2}.<br><b>الوصف:</b> ${3}.",
		oauth_error_return_error_adminResponse: "يمكنك التعرف على المزيد من المعلومات عن الخطأ في ملفات سجل الأخطاء لوحدة خدمة تطبيق الانترنت.  لمزيد من المعلومات عن ملفات السجلات، أنظر &quot;ملفات سجلات IBM Content Navigator&quot; في IBM Knowledge Center. باستخدام المعلومات عن محاولة توثيق ${0}، حاول تصحيح المشكلة وتأكد من اتاحة OAuth2.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "تطبيق OAuth المستهدف",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "خطأ",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "رسالة خطأ OAuth لم يتم التعرف عليها.",

		delete_share_permission_error: "لم يتم حذف المشاركة.",
		delete_share_permission_error_explanation: "لا يتوافر لديك التصاريح المناسبة لحذف المشاركة.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "لا يمكنك مشاركة هذا البند.",
		class_not_support_share_error_explanation: "لم يتم اعداد الفئة ${0} لدعم المشاركة.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "لا يمكنك مشاركة هذا البند.",
		rbr_not_support_share_error_explanation: "تم اضافة محتويات حساسة الى بند.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "الجهاز الذي يحاول المستخدم تسجيل الدخول منه غير مصرح له بالتوصل لحساب المستخدم.",
		box_oauth_error_invalid_request: "لا يحتوي الطلب على معامل مطلوب أو يتضمن قيمة معامل غير صحيحة أو يتضمن معامل أكثر من مرة أو هناك خطأ خلاف ذلك.",
		box_oauth_error_unsupported_response_type: "لا تقوم وحدة خدمة الصلاحية بدعم الحصول على كود صلاحية باستخدام هذه الطريقة.  تحقق من قيمة معامل الكود في الطلب الخاص بك.",
		box_oauth_error_access_denied: "قام مالك المصدر أو وحدة خدمة الصلاحية برفض الطلب.",
		box_oauth_error_temporarily_unavailable: "يتم تحديد معدل الجهاز الخاص بك، يجب أن تقوم بتقليل معدل طلبات الصلاحية الخاص بك أو الانتظار قليلا.",
		box_oauth_error_unknown: "رسالة خطأ Box لا يمكن التعرف عليها.",

		admin_default_search_type: "نوع البحث المفترض",
		admin_default_search_type_hover: "حدد الاختيار الذي سيتم تحديده بصفة مفترضة في مجال <b>بحث عن</b> بقائمة <b>اختيارات البحث</b>.",
		admin_default_search_type_documents: "الوثائق",
		admin_default_search_type_folders: "الحافظات",
		admin_default_search_type_folders_and_documents: "الوثائق والحافظات",

		admin_restricted_search_type: "السماح بالبحث",
		admin_restricted_search_type_hover: "افتراضيا، يستطيع المستخدمين البحث في كلا من الوثائق والحافظات. اذا كنت تريد اخفاء اختيار البحث وقصر عمليات البحث على الوثائق فقط، حدد الوثائق وقم بالغاء تحديد الحافظات.  </br>،</br> اذا قمت بالسماح بالبحث في كلا من الوثائق والحافظات، حدد الاختيار المفترض للعرض عند فتح نافذة البحث.",
		admin_restricted_search_type_documents: "الوثائق",
		admin_restricted_search_type_folders: "الحافظات",
		admin_restricted_search_type_folders_and_documents: "الوثائق والحافظات",

		admin_default_search_version: "نسخة البحث المفترضة",
		admin_default_search_version_hover: "حدد الاختيار الذي سيتم تحديده بصفة مفترضة في مجال <b>النسخة</b> بقائمة <b>اختيارات البحث</b>.",

		admin_all_classes_search: "بحث كل الفئات",
		admin_all_classes_search_hover: "تحديد ما اذا كان مسموح للمستخدمين البحث في كل الفئات، واذا كان كذلك ما الذي يجب أن يتم تضمينه في عمليات بحث الوثيقة.",
		admin_all_classes_search_removed_hover: "اختيارات البحث في كل الفئات غير متاحة لأن معامل context-param allPseudoClassHidden في في تطبيق التجول web.xml تم تحديده الى صحيح.",
		admin_all_classes_search_hide: "قم بازالة الاختيار للبحث في كل الفئات",
		admin_all_classes_search_documents_only_documents: "بحث الوثائق يتضمن الوثائق فقط، وعمليات البحث التي تم حفظها، وقوالب الادخال",
		admin_all_classes_search_documents_non_folders: "يتضمن بحث الوثائق أي بنود غير الحافظات",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "مشاهدة التسلسل:",
		admin_feature_config_tree_view_hoverhelp: "حدد ما اذا كان المستخدم يستطيع التوصل الى كشف الحافظات في مستودع التخزين من خلال نافذة الاستعراض. اذا قمت باخفاء نافذة الاستعراض، يجب أن يقوم المستخدم باستخدام كشف المحتويات للتجول الى الحافظات في مستودع التخزين.",
		admin_feature_config_selected_repositories_label: "مستودعات التخزين:",
		admin_feature_config_selected_repositories_hoverhelp: "حدد مستودعات التخزين التي يمكن للمستخدمين التوصل اليها في هذه الخاصية.",
		admin_feature_config_selected_repositories_select_state_hdr: "حدد مستودع تخزين",
		admin_feature_config_selected_repositories_name_hdr: "اسم مستودع التخزين",
		admin_feature_config_selected_repositories_show_hdr: "عرض",
		admin_feature_config_invalid_icon_title: "لا توجد بعض المحددات المطلوبة في الخاصية",
		admin_feature_config_view_select_hdr: "تحديد مشاهدة",
		admin_feature_config_view_hdr: "‏مشاهدة‏",
		admin_feature_config_view: "‏مشاهدة‏",
		admin_feature_config_views: "المشاهدات:",
		admin_feature_config_views_hoverhelp: "حدد المشاهدات التي يستطيع المستخدمين تطبيقها على كشف المحتويات. يتم عرض المشاهدات بترتيب عرضها بالكشف. المشاهدة المحددة أولا هي المشاهدة المفترضة للخاصية.<br><br><b>هام:</b> اذا قمت باتاحة مشاهدة شريط الصور، فانه يجب توصيف برنامج مشاهدة تحويل HTML لمشاهدة الشكل النهائي للوثيقة.",

		admin_custom_dialog_name: "الاسم:",
		admin_custom_dialog_value: "القيمة:",
		admin_custom_setting_name_hover: "أدخل اسم محددات Daeja ViewONE التي تريد اضافتها الى التوصيف الخاص بك. ويمكنك الرجوع الى مطبوعات Daeja ViewONE الفنية للتعرف على المزيد من المعلومات عن محددات التوصيف.",
		admin_custom_setting_value_hover: "أدخل القيمة التي تريد استخدامها لمحددات توصيف  Daeja ViewONE. ويمكنك الرجوع الى مطبوعات Daeja ViewONE الفنية للتعرف على المزيد من المعلومات عن القيم الصحيحة لمحددات التوصيف.",

		entry_template_name_required_message: "مجال الاسم في محددات قالب الادخال مطلوب.",
		entry_template_name_invalid_message: "لا يمكن أن يحتوي مجال الاسم في محددات قالب الادخال على الحروف التالية: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "عند تحديد مستخدمين ومجموعات معينة للمشاركة مع المجال في محددات قالب الادخال، عندئذ يجب أن تحدد مستخدم أو مجموعة واحدة على الأقل.",
		entry_template_no_permission_to_save_to_teamspace_message: "لا يتوافر لديك تصريح لاضافة قوالب ادخال الى مساحة عمل الفريق (${0}) التي تم تحديدها من الحفظ في بمحددات قالب الادخال.",
		entry_template_save_in_destination_required_message: "ويجب أن تقوم بتحديد عمليات الحفظ المفترضة في المكان بالقسم <b>تحديد مكان تخزين البند</b>.",
		entry_template_save_in_destination_must_select_folder: "واذا قمت باخفاء مجال <b>حفظ في</b> ويتطلب قيام المستخدمين باضافة بنود جديدة الى الحافظة، فيجب أن تقوم بتحديد حافظة في المجال   <b>الحفظ المفترض في المكان</b> في القسم <b>تحديد مكان تخزين البند</b>.",
		entry_template_what_to_save_required_message: "حدد اختيار واحد على الأقل لما تريد حفظه في تحديد الاختيارات.",
		entry_template_custom_workflow_empty_message: "اذا قمت بتحديد <b>مسار عمل مهيأ...</b>، يجب البحث عن وتحديد مسار العمل الذي تريد استخدامه.",

		entry_template_new: "قالب ادخال جديد",
		entry_template_name_hover: "لا يمكن أن يحتوي اسم قالب الادخال على الحروف التالية: * \\ / : ? \" < > |",
		entry_template_name_invalid: "لا يمكن أن يحتوي اسم قالب الادخال على أي من الحروف التالية: * \\ / : ? \" < > |",
		entry_template_description_hover: "أدخل وصف يسمح للمستخدمين بالتمييز بين قالب الادخال هذا وقوالب الادخال الأخرى.",
		entry_tempalte_save_in_hover: "حدد مكان حفظ قالب الادخال.<br><br><b>قيد:</b> اذا قمت بحفظ قالب الادخال في مساحة الفريق، فانه يمكنك استخدام قالب الادخال فقط في مساحة الفريق.",
		entry_template_inherit_hover: "اذا قمت بتحديد هذا الاختيار، سيتم اضافة محددات السرية للحافظة الرئيسية الى كشف المستخدمين والمجموعات الذي تم مشاركة قالب الادخال معه.",
		entry_template_builder_aria_label: "برنامج بناء قالب الادخال",
		entry_template_builder_layout_aria_label: "برنامج بناء خصائص قالب الادخال",

		entry_template_settings_document: "تعريف قالب الادخال",
		entry_template_settings_folder: "تحديد مكان تخزين البند",
		entry_template_settings_folder_intro: "حدد مكان تخزين البنود التي تم اضافتها باستخدام قالب الادخال هذا.",
		entry_template_settings_properties: "تحديد خصائص البند",
		entry_template_settings_properties_intro: "يمكنك تحديد القيم المفترضة أو المعرفة مسبقا للبنود التي تم اضافتها باستخدام قالب الادخال هذا. بالاضافة الى ذلك، يمكنك تغيير الشكل العام للخصائص للتحكم في الخصائص التي يتم عرضها وترتيب عرضها.",
		entry_template_settings_workflow: "توصيف مسار عمل للبند",
		entty_template_settings_workflow_intro: "يمكنك تحديد ما اذا كان قد تم بدء تشغيل مسار العمل عند اضافة البنود باستخدام قالب الادخال.",
		entry_template_settings_security: "تحديد سرية البند",
		entry_template_settings_security_intro: "يمكنك تحديد السرية المفترضة أو المعرفة مسبقا للبنود التي تم اضافتها باستخدام قالب الادخال هذا. قد يستطيع المستخدمين الذين يتوافر لديهم تصاريح مناسبة تغيير سرية  البند بعد اضافته.",
		entry_template_settings_options: "تحديد الاختيارات للبند",
		entry_template_xt_warning: "سيؤدي حفظ التغييرات بقالب الادخال هذا الى تحويلها من قالب ادخال IBM Workplace XT الى قالب الادخال IBM Content Navigator. لا يقوم IBM Workplace XT بدعم قوالب ادخال IBM Content Navigator.",

		entry_template_properties_edit_layout: "تحرير الشكل العام...",
		entry_template_properties_read_only: "للقراءة فقط",
		entry_template_properties_hidden: "مخفية",

		entry_template_destination_show: "عرض المجال <b>حفظ في</b>",
		entry_template_destination_show_hover: "اذا تم عرض المجال <b>حفظ في</b>، يستطيع المستخدمين تغيير مكان تخزين البنود.",
		entry_template_destination_hide: "اخفاء المجال <b>حفظ في</b>",
		entry_template_destination_hide_hover: "اذا قمت باخفاء المجال <b>حفظ في</b>، لن يستطيع المستخدمين تغيير مكان تخزين البنود.",
		entry_template_folder_save_in_default: "مكان <b>الحفظ في</b> المفترض:",
		entry_template_folder_save_in_default_hover: "حدد المكان المفترض حيث يتم اضافة البنود باستخدام قالب الادخال هذا.<br><br>المكان المفترض الذي تقوم بتحديده يفرض قيود على تصرف التشغيل لقالب الادخال:<ul><li>لا يستطيع المستخدمين تحديد مستودع تخزين مختللإ.</li><li>اذا كان المكان المفترض هو مساحة الفريق، لن يستطيع المستخدمين تحديد مساحة فريق مختلفة.</li></ul>لكن، اذا قام المستخدمين بارفاق قالب الادخال هذا مع حافظة، يستطيع المستخدمين احلال مكان التخزين الذي تم توصيفه لقالب الادخال هذا.",
		entry_template_folder_restrict_choice: "يتطلب قيام المستخدمين باضافة بنود الى المكان المفترض أو الحافظة الفرعية للمكان المفترض",
		entry_template_folder_file_in_required: "يتطلب قيام المستخدمين باضافة بنود جديدة الى الحافظة",
		entry_template_folder_file_in_required_hover: "اذا لم تقم بتحديد هذا الاختيار، يستطيع المستخدمين اضافة بنود الى الحافظة الرئيسية لمستودع التخزين.<br><br><b>قيد:</b> قد يتطلب توصيف سطح المكتب أن يقوم المستخدمين بتحديد حافظة.",

		entry_template_document_type_show: "عرض المجال <b>ما الذي تريد حفظه</b>",
		entry_template_document_type_show_hover: "اذا قمت بعرض المجال <b>ما الذي تريد حفظه</b>، يتم عرض البنود التي تقوم بتحديدها كاختيارات في المجال <b>ما الذي تريد حفظه</b>.",
		entry_template_document_type_hide: "اخفاء المجال <b>ما الذي تريد حفظه</b>",
		entry_template_document_type_hide_hover: "اذا قمت باخفاء المجال <b>ما الذي تريد حفظه</b>، يتم عادة عرض نوع الوثيقة الذي تقوم بتحديده عند قيام المستخدمين باضافة وثائق باستخدم قالب الادخال هذا.",
		entry_template_document_type: "يمكن استخدام قالب الادخال هذا لاضافة البنود التالية:",
		entry_template_document_type_hover: "اذا قمت بعرض المجال <b>ما الذي تريد حفظه</b>، يتم عرض البنود التي تقوم بتحديدها كاختيارات في المجال <b>ما الذي تريد حفظه</b>.<br><br>اذا قمت باخفاء المجال <b>ما الذي تريد حفظه</b>، يتم عادة عرض نوع الوثيقة الذي تقوم بتحديده عند قيام المستخدمين باضافة وثائق باستخدم قالب الادخال هذا.",

		entry_template_misc: "الاختيارات الاضافية:",
		entry_template_auto_classify_show: "تصنيف محتويات الوثيقة آليا",
		entry_template_auto_classify_show_hover: "عند تصنيف وثيقة على FileNet Content Manager، يتم فحص محتويات الوثيقة لتحديد قيم الخاصية والفئة المناسبة للوثيقة.<br><br>ارجع الى مسؤول النظام لتحديد ما اذا كان قد تم اتاحة تصنيف المحتويات على Content Platform Engine.<br><br>اذا قمت باتاحة هذا الاختيار، قد يتم تغيير فئة وخصائص الوثيقة عند قيام المستخدم باضافة الوثيقة الى مستودع التخزين.",
		entry_template_allow_duplicate_file_names: "السماح بالوثائق ذات أسماء ملفات مكررة",
		entry_template_allow_duplicate_file_names_hover: "بصفة مفترضة، يمكنك اضافة وثائق بنفس الاسم الى حافظة في FileNet Content Manager. يمكنك محو هذا الاختيار اذا كنت تريد أن يكون لكل ملف في مكان التخزين المحدد اسم متفرد.",
		entry_template_allow_compound_documents: "السماح لهذه الوثيقة بأن تكون العنصر الرئيسي لوثيقة مركبة",
		entry_template_version_show: "عرض اختيارات النسخة للاضافة وانهاء التخصيص",
		entry_template_version_hide: "اخفاء اختيارات النسخة للاضافة وانهاء التخصيص",
		entry_template_version_to_add_as: "النسخة المفترضة التي سيتم اضافتها على أنها:",
		entry_template_version_default: "اختيار النسخة المفترضة:",
		entry_template_version_default_checked: "النسخة الرئيسية",
		entry_template_version_default_unchecked: "النسخة الثانوية",
		entry_template_version_display: "نسخة الوثيقة:",
		entry_template_version_display_show: "عرض",
		entry_template_version_display_hide: "اخفاء",
		entry_template_version_default_add: "النسخة المفترضة التي سيتم اضافتها على أنها:",

		entry_template_checkin_version_show: "عرض اختيارات النسخة لانهاء التخصيص",
		entry_template_checkin_version_hide: "اخفاء اختيارات النسخة لانهاء التخصيص",

		entry_template_checkin_version_message_no_versions: "تمنع سياسة النسخة للفئة المحددة المستخدمين من انهاء تخصيص نسخة جديدة من الوثيقة.",
		entry_template_checkin_version_message_always_version: "تمنع سياسة النسخة للفئة المحددة المستخدمين من استبدال النسخة الحالية من الوثيقة.",

		entry_template_applied: "استخدم قالب الادخال هذا عند قيام المستخدمين بما يلي:",
		entry_template_applied_add: "اضافة وثائق (مطلوب)",
		entry_template_applied_add_folder: "تكوين حافظات (مطلوب)",
		entry_template_applied_checkin: "انهاء تخصيص",
		entry_template_applied_properties_group: "مشاهدة أو تحرير الخصائص:",
		entry_template_applied_properties: "في نافذة الخصائص",
		entry_template_applied_viewer: "في برنامج مشاهدة البرنامج",
		entry_template_applied_docinfo: "في نافذة معلومات الوثيقة",
		entry_template_applied_no_class_support: "يمكن استخدام قالب الادخال هذا لاضافة بنود ولكن لن يمكنك انهاء تخصيص الوثائق أو المشاهدات وتحرير الخصائص. ويجب تعديل الفئة المحددة لدعم هذه المواقف. واذا كنت تريد استخدام أحد قوالب الادخال بهذه المواقف، فيجب أن تقوم بمطالبة مسؤول النظام باستخدام أداة الادارة لتعديل الفئة بحيث تقوم بتخزين أكواد تعريف قوالب الادخال.",
		entry_template_applied_no_child_component_support: "تحتوي الفئة المحددة على مكونات فرعية وشكل عام للخاصية تم تعريفه. لا تدعم الأشكال العامة للخاصية المكونات الفرعية. لن يتم عرض المكونات الفرعية للمستخدم.",
		entry_template_applied_child_component: "تحتوي الفئة المحددة على مكونات فرعية. سيتم عرضها للمستخدم، لكن لا يمكنك توصيف المكونات الفرعية في قالب الادخال هذا.",

		entry_template_properties_show: "عرض قسم <b>الخصائص</b>",
		entry_tempalte_properties_show_hover: "اذا قمت بعرض القسم <b>الخصائص</b>، يستطيع المستخدمين تعديل أية قيم خصائص تم عرضها في قالب الادخال ولا تعد خصائص للقراءة-فقط.",
		entry_template_properties_hide: "اخفاء قسم <b>الخصائص</b>",
		entry_template_properties_hide_hover: "اذا قمت باخفاء قسم <b>الخصائص</b>، لن يستطيع المستخدمين تعديل أية قيم خصائًص. يجب أن يقوم قالب الادخال بتعريف كل القيم التي تريد استخدامها عند اضافة البنود باستخدام قالب الادخال هذا.",

		entry_template_security_show: "عرض قسم <b>السرية</b>",
		entry_template_security_show_hover: "اذا قمت بعرض قسم <b>السرية</b>، يستطيع المستخدمين الذي يتوافر لديهم تصاريح مناسبة تعديل سرية البند.",
		entry_template_security_hide: "اخفاء قسم <b>السرية</b>",
		entry_template_security_hide_hover: "اذا قمت باخفاء قسم <b>السرية</b>، لن يستطيع المستخدمين تعديل سرية البنود. يجب أن يقوم قالب الادخال بتعريف كل محددات السرية التي تريد استخدامها عند اضافة أو تحرير البنود.",
		entry_template_security_policy: "سياسة السرية:",
		entry_template_security_policy_hover: "بناءا على سياسة السرية التي تقوم بتحديدها، يمكن أن تقوم سياسة السرية بما يلي:<br><ul><li>احلال التصاريح المحددة تحت <b>تحديد سرية البند</b>.</li><li>اضافة الى التصاريح المحددة تحت <b>تحديد سرية البند</b>.</li></ul>",
		entry_template_security_policy_none: "لم يتم تحديد أية سياسة سرية",
		entry_template_security_inherit: "توارث محددات السرية من الحافظة الرئيسية",
		entry_tempalte_save_in_hover: "حدد مكان حفظ قالب الادخال.<br><br><b>قيد:</b> اذا قمت بحفظ قالب الادخال في مساحة الفريق، فانه يمكنك استخدام قالب الادخال فقط في مساحة الفريق.",
		entry_template_security_inherit_item_security_hover: "اذا قمت بتحديد هذا الاختيار، سيتم اضافة محددات السرية للحافظة الرئيسية الى محددات السرية التي تم تعريفها بواسطة أحد البنود التالية:<ul><li>الفئة المحددة في قسم <b>تحديد خصائص البند</b></li><li>السرية المهيأة التي قمت بتحديدها في قسم <b>تحديد سرية البند</b></li></ul>",
		entry_template_security_change: "احلال السرية المعرفة بواسطة الفئة المحددة",
		entry_template_security_change_hover: "اذا قمت بتحديد هذا الاختيار، يتم عرض محددات السرية التي تم تعريفها للفئة بصفة مفترضة. يمكنك عندئذ تعديل محددات السرية لقالب الادخال.<br><br>اذا قمت بعرض قسم <b>السرية</b>، يستطيع المستخدمين الذي يتوافر لديهم تصاريح مناسبة تعديل سرية البند.<br><br>اذا قمت بتحديد هذا الاختيار واختيار توارث محددات السرية من الحافظة الرئيسية، سيتم اضافة أية تصاريح قابلة للتوارث الى السرية التي تقوم بتحديدها.",
		entry_template_security_default_item_security: "احلال سرية البند المفترض للمستخدم الذي قام باضافة البند",
		entry_template_security_policy_message_override: "تم توصيف سياسة السرية المحددة لاحلال التصاريح التي تم تحديدها أسفل تحديد السرية.",
		entry_template_security_policy_message_add: "تم توصيف سياسة السرية المحددة لاضافتها الى التصاريح المحددة أسفل تحديد السرية.",
		entry_template_security_policy_preserve_true_hover: "الاحتفاظ بالتصريح المباشر",
		entry_template_security_policy_preserve_false_hover: "لا يتم الاحتفاظ بالتصريح المباشر",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "وظائف معينة ",
		entry_template_security_class_role_search_title: "بحث عن الوظائف: ",
		entry_template_secuirty_class_member_title: "كشف أعضاء ${0}",
		entry_template_secuirty_class_folder_only: "تنطبق هذه التصاريح على هذه الحافظة فقط ",
		entry_template_secuirty_class_folder_and_immediate_children: "تنطبق هذه التصاريح على هذه الحافظة وعلى الفروع المباشرة التي تم توصيف توارثها للسرية من هذه الحافظة. ",
		entry_template_secuirty_class_folder_and_all_children: "تنطبق هذه التصاريح على هذه الحافظة فقط وعلى كل الفروع التابعة التي تم توصيف توارثها للسرية من هذه الحافظة. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"تنطبق هذه التصاريح على الفروع المباشرة فقط التي تم توصيف توارثها للسرية من هذه الحافظة ",
		entry_template_secuirty_class_folder_all_children_not_folder: "تنطبق هذه التصاريح على كل الفروع التابعة التي تم توصيف توارثها للسرية من هذه الحافظة ",

		entry_template_class_security_message_no_override: "تمنع سرية الفئة المحددة المستخدمين من احلال السرية.",
		entry_template_class_security_required_privileges: "<b>هام</b>: عند القيام باحلال السرية للفئة المحددة، يجب أن يكون للمستخدمين الذين قاموا باضافة بنود باستخدام قالب الادخال هذا الصلاحيات ItemSetACL و UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "مسار عمل نموذج متعاقب",
		entry_template_workflow_type_ICNParallelDocumentApproval: "مسار عمل نموذج متوازي",
		entry_template_workflow_type_existing: "مسار العمل المهيأ...",
		entry_template_workflow_launch_prompt: "طلب قيام المستخدمين ببدء تشغيل مسار العمل",
		entry_template_workflow_launch_auto: "بدء تشغيل مسار العمل آليا",
		entry_template_workflow_modify_launch: "السماح للمستخدمين بتعديل خطوة بدء التشغيل",
		entry_template_workflow_modify_launch_hover: "حدد هذا الاختيار اذا كنت تريد السماح للمستخدمين بتغيير كيفية بدء تشغيل مسار العمل.",

		entry_template_optionsButton_title: "تعديل",
		entry_template_optionsButton_readonly_title: "مشاهدة الارفاق",
		entry_template_optionsDialog_title: "محددات ارفاق الحافظة",
		entry_template_removeButton_title: "ازالة",
		entry_template_addButton_title: "‏اضافة‏",
		entry_template_selected_entry_templates: "قوالب الادخال المحددة",
		entry_template_docs_added_to_template_destination: "يتم اضافة الوثائق الى الوجهة المستهدفة المحددة في قالب الادخال.",
		entry_template_docs_added_to_other_object_store: "يقوم قالب الادخال هذا باضافة بنود الى تخزين العنصر ${0}.",
		entry_template_inherited_entry_templates_label: "أريد: ",
		entry_template_inherited_entry_templates: "توارث مرفقات قالب الادخال من الحافظة: ",
		entry_template_inherited_entry_templates_not: "تكوين مرفقات جديدة لهذه الحافظة",
		entry_template_inherited_folder_path: "قوالب الادخال في كشف قوالب الادخال المحدد يتم ارفاقها مع الحافظة التالية: ${0}. <br> المسار الى الحافظة هو ${1}.",
		entry_template_folder_associations_title: "ارفاق قوالب الادخال",
		entry_template_folder_associations_intro: "عند ارفاق قالب ادخال مع حافظة، يجب أن يقوم المستخدمين باستخدام قالب الادخال لاضافة بنود الى الحافظة. اذا قمت بارفاق عدة قوالب ادخال مع حافظة، يستطيع المستخدمين تحديد قالب الادخال الذي سيتم استخدامه.",
		entry_tempalte_folder_associations_entrytemplate: "قالب الادخال: ",
		entry_template_avaliable_entry_templates: "قوالب الادخال المتاحة",
		entry_template_fileTypes_intro_title: "أنواع الملفات المسموح بها:",
		entry_template_fileTypes_intro: "افتراضيا، يمكن استخدام قالب الادخال لاضافة أي نوع من الوثائق الى مستودع التخزين. مع ذلك، اذا قمت بتحديد واحد أو أكثر من أنواع الملفات، سيتم اتاحة قوالب الادخال فقط عند قيام المستخدمين باضافة الوثائق التي تطابق أحد أنواع الملفات المحددة.",
		entry_template_fileTypes: "أنواع الملفات",
		entry_template_fileType_error: "تم تحديد أنواع ملفات غير صحيحة لواحد أو أكثر من ارفاقات قالب الادخال. يجب أن تقوم بازالة أنواع الملفات غير صحيحة قبل أن يتم حفظ ارفاقات قالب الادخال هذه.",
		entry_template_fileTypes_any_type_of_file: " أي نوع من الملفات",
		entry_template_description_label: "‏الوصف‏",
		entry_template_ItemInfoPrefix: "ارفاق مع: ",
		entry_template_TargetObjectStoreName: "ملف تخزين العناصر المستهدف",
		entry_template_class: "الفئة",
		entry_template_current_folder_as_parent: "استخدم الحافظة كوجهة مستهدفة",
		entry_template_view_minetypes: "مشاهدة أنواع MIME",
		entry_template_avaliable_MIME_types: "أنواع الملفات المتاحة",
		entry_template_selected_MIME_types: "أنواع الملفات المحددة",
		entry_template_MIME_type_column: "اسم تصنيف نوع الملف",
		entry_template_file_type_not_existing: "برجاء ازالة أنواع الملفات غير الصحيحة.",
		entry_template_MIME_types: "أنواع MIME:",
		entry_template_MIME_types_info_dialog_title: "أنواع MIME الى",
		entry_template_destination_label: "اضافة وثائق الى: ",
		entry_template_destination_help: "حدد مكان تخزين الوثائق في مستودع التخزين عند قيام المستخدمين باضافة وثائق الى هذه الحافظة باستخدام قالب الادخال المحدد.",
		entry_template_radioButton_folder_destination: "الحافظة المحددة",
		entry_template_radioButton_template_destination: "الوجهة المستهدفة المحددة في قالب الادخال",
		entry_tempalte_teamspace_default: "قالب الادخال المفترض",
		entry_template_folder_associations_save_new: "لقد قمت بتعديل بعض ترافقات قالب الادخال. هل تريد اغلاق هذه النافذة بدون حفظ التغييرات؟",
		entry_template_mode_binding_label: "الخصائص",
		entry_template_columns_className: "اسم الفئة",
		entry_template_columns_type: "نوع القالب",
		entry_template_columns_workflow: "اسم مسار العمل",
		entry_template_columns_destination: "الوجهة المستهدفة",
		entry_template_association_less_than_record: "يوجد ${0} قالب/قوالب ادخال لم يتم عرضها في قوالب الادخال المحددة. لا يتوافر لديك أي تصريح لمشاهدتها. أو تم حذفها. اتصل بمسؤول النظام للحصول على المزيد من المعلومات.",
		/* Request */

		progress_message_general: "جاري التشغيل...",
		cancel_message_general: "تم الغاء التصرف.",
		ie8_not_supported_browser: "لا يعد IE8 برنامج استعراض مدعم.",
		progress_message_getDesktop: "جاري تحميل سطح المكتب...",
		progress_message_getActions: "جاري تحميل التصرفات...",
		progress_message_getViewers: "جاري تحميل سطح المكتب...",
		progress_message_logon: "جاري تسجيل الدخول...",
		progress_message_logoff: "جاري ايقاف الاتصال...",
		progress_message_getContentClasses: "جاري استرجاع الفئات...",
		progress_message_openContentClass: "جاري استرجاع تفاصيل الفئة...",
		progress_message_od_getCabinets: "جاري استرجاع حافظة الملفات المضغوطة...",
		progress_message_getSearchTemplates: "جاري استرجاع عمليات البحث...",
		progress_message_od_getTemplates: "جاري استرجاع الحافظات...",
		progress_message_od_openCabinet: "جاري استرجاع الحافظات...",
		progress_message_openSearchTemplate: "جاري فتح البحث...",
		progress_message_od_openTemplate: "جاري فتح الحافظة...",

		progress_message_getWorklists: "جاري استرجاع كشوف العمل...",
		progress_message_getWorkItems: "جاري استرجاع بنود العمل...",
		progress_message_getNextWorkItems: "جاري استرجاع بنود العمل...",
		progress_message_getStepParameters: "جاري استرجاع معلومات بند العمل...",
		progress_message_getStepAttachmentItems: "جاري استرجاع معلومات الملحقات...",
		progress_message_getDependentParameters: "جاري استرجاع معلومات الخاصية...",

		progress_message_p8_getProcessApplicationSpaces: "جاري استرجاع مساحات التطبيق...",
		progress_message_p8_getProcessRoles: "جاري استرجاع وظائف العملية...",
		progress_message_p8_getProcessInbaskets: "جاري استرجاع الوارد...",
		progress_message_p8_getProcessorInformation: "جاري استرجاع معلومات التشغيل...",
		progress_message_p8_getFilterCriteria: "جاري استرجاع مرشح بيانات الوارد...",
		progress_message_p8_getLaunchParameters: "جاري استرجاع معلومات بند العمل...",
		progress_message_p8_getStepAttachments: "جاري استرجاع ملحقات بند العمل...",
		progress_message_p8_getSubscriptions: "جاري استرجاع اشتراكات مسار العمل...",
		progress_message_p8_getTrackerParameters: "جاري استرجاع معلومات بند العمل...",
		progress_message_p8_getTrackerHistory: "استرجاع السجل التاريخي لبند العمل...",
		progress_message_p8_getTrackerMilestones: "استرجاع الأحداث المميزة لبند العمل...",
		progress_message_p8_completeStep: "جاري اكمال بند العمل...",
		progress_message_p8_moveToInbox: "نقل بند الى سلة الوارد...",
		progress_message_p8_returnToSender: "ارجاع بند عمل...",
		progress_message_p8_reassign: "اعادة تخصيص بند العمل...",
		progress_message_p8_launchWorkflow: "بدء مسار العمل...",
		progress_message_p8_getTransferedWorkflows: "يتم استرجاع معلومات مسار    العمل...",

		progress_message_cm_getProcesses: "يتم استرجاع معلومات مسار    العمل...",
		progress_message_cm_completeStep: "توصيف بند العمل...",
		progress_message_cm_getItemProcessInformation: "يتم استرجاع معلومات مسار    العمل...",

		progress_message_search: "‏بحث...‏",
		cancel_message_search: "تم الغاء عملية البحث.",
		progress_message_getContentItems: "جاري استرجاع معلومات البند...",
		progress_message_openFolder: "جاري فتح الحافظة...",
		progress_message_addItem: "جاري تكوين بند...",
		progress_message_checkIn: "جاري الغاء تخصيص بند...",
		progress_message_changePassword: "جاري تغيير كلمة السرية...",
		progress_message_getDefaultInstancePermissions: "جاري استرجاع التصاريح المفترضة...",
		progress_message_openItem: "جاري استرجاع معلومات البند...",
		progress_message_saveItem: "جاري حفظ معلومات البند...",
		progress_message_getPermissions: "جاري استرجاع التصاريح...",
		progress_message_getEntryTemplates: "جاري استرجاع قوالب الادخال...",
		progress_message_openEntryTemplate: "جاري فتح قالب الادخال...",
		progress_message_getFavorites: "جاري استرجاع التفضيلات...",
		progress_message_getFoldersFiledIn: "جاري استرجاع الحافظات...",
		progress_message_getDocumentVersions: "جاري استرجاع النسخ...",
		progress_message_getDependentAttributeInfo: "جاري استرجاع معلومات الخاصية المميزة...",
		progress_message_packageForDownload: "وضع في حزمة للتنزيل...",
		progress_message_convertDocument: "تحويل المحتوى...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "جاري استرجاع نوع المحتويات...",
		progress_message_SharePointPlugin_SharePointAddDocument: "جاري اضافة وثيقة...",

		progress_message_desktop_reload: "يقوم برنامج الوحدة التابعة باعادة تحميل سطح المكتب الخاص بك.<br>قد يطلب منك تسجيل الدخول مرة أخرى.",
		progress_message_email: "ارسال بريد الكتروني...",
		cancel_message_email: "تم الغاء البريد الالكتروني.",

		progress_message_p8_getOfficeOnlineTemplates: "استرجاع قوالب Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "تسلسل التفضيلات",
		favorites_content_list_label: "كشف محتويات التفضيلات",
		syncItems_tree_label: "تسلسل الملفات المتزامنة الخاص بي",
		syncItems_content_list_label: "كشف محتوى الملفات المتزامنة الخاص بي",
		my_checkouts_content_list_label: "كشف محتويات عمليات التخصيص الخاصة بي",
		browse_tree_label: "استعراض التسلسل",
		browse_content_list_label: "استعراض كشف المحتويات",
		repository_selector_label: "محدد مستودع التخزين",
		teamspaces_content_list_label: "كشف محتويات مساحة الفريق",
		templates_content_list_label: "كشف محتويات مساحة الفريق",
		work_content_list_label: "كشف محتويات العمل",
		work_tree_label: "تسلسل العمل",
		admin_tree_label: "تسلسل الادارة",
		admin_tabs_label: "علامات تبويب الادارة",
		search_tabs_label: "علامات تبويب البحث",
		search_selector_label: "محدد البحث",
		teamspace_browse_content_list_label: "كشف محتويات عمليات استعراض مساحة    الفريق",
		teamspace_search_tabs_label: "علامات تبويب بحث مساحة الفريق",

		/* Desktop */
		undo_description: "تراجع ${0}",
		redo_description: "اعادة ${0}",

		/* Application Tabs */
		home: "الصفحة الرئيسية",
		repository: "مستودع التخزين",
		repository_type: "نوع مستودع التخزين:",
		repository_type_header: "نوع مستودع التخزين",
		repository_type_any: "كل مستودعات التخزين",
		repository_type_contains_label: "نوع مستودع التخزين يتضمن",
		document_info: "معلومات الوثيقة",
		team: "الفريق",
		administration: "ادارة",

		/* Home Page */
		recent_activity: "أحدث نشاط",
		repos_and_wrksp: "مستودعات التخزين ومساحات الفريق",
		workspaces: "مساحات الفريق",
		repositories: "مستودعات التخزين",
		templates: "قوالب",
		favorites: "التفضيلات",
		my_checkouts: "عمليات التخصيص الخاصة بي",
		mySyncedFiles: "الملفات المتزامنة الخاص بي",
		links: "الروابط",
		name_label: "الاسم",
		description_label: "الوصف:",
		type_label: "النوع:",
		type_heading: "النوع",
		type_id_label: "كود النوع",
		server_type_icon: "شارة نوع وحدة الخدمة",
		server_type_heading: "نوع وحدة الخدمة",
		server_type: "نوع وحدة الخدمة",
		port_heading: "رقم المنفذ",
		port_label: "رقم المنفذ:",
		server_name_heading: "اسم وحدة الخدمة",
		server_label: "اسم وحدة الخدمة:",
		server_url_label: "عنوان URL لوحدة الخدمة:",
		id_label: "كود التعريف:",
		id_heading: "الكود",
		connected_label: "متصل:",
		repository_label: "مستودع التخزين",
		modified_label: "تعديل بواسطة:",
		modified_date_label: "تعديل في:",
		status_label: "الحالة:",
		last_modified_label: "آخر تعديل بواسطة:",

		modifier: "تعديل بواسطة",
		modified_date: "تم التعديل في",

		/* Favorites */
		new_favorite_label: "اضافة الى التفضيلات",
		edit_favorite_label: "اعادة تسمية التفضيلات",
		remove_favorite_label: "ازالة من التفضيلات",
		missing_alias_message: "يجب أن تحدد اسم.",
		sync_favorite_enable_hover: "هذا البند متاح للتزامن.",
		sync_favorite_disable_hover: "هذا البند لا يتم تزامنه.",
		sync_favorite_sync_unavailable_hover: "التزامن غير متاح لنوع العنصر هذا.",
		sync_enable_label: "تزامن هذا البند",
		sync_enable_label_hover: "سيتم تزامن هذا البند للأجهزة الخاصة بك.",
		delete_favorite_confirmation_question: "هل تريد ازالة هذا البند من التفضيلات الخاصة  بك؟",
		alias_label: "الاسم:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "البند المحدد يوجد بالفعل في التفضيلات الخاصة بك.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "لا يمكن اضافة هذا البند لكشف التفضيلات الخاص بك.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "يمكنك تخزين ${0} تفضيلات فقط.",
		add_favorite_max_reached_response: "اذا كنت تريد اضافة هذا البند لكشف التفضيلات الخاص بك، يجب أن تقوم بحذف أحد التفضيلات الحالية قبل القيام باضافة هذا البند.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "الوثائق المحددة لا يمكن أن يتم تحويلها الى PDF.",
		download_as_pdf_max_content_error_explanation: "يمكنك تحويل ${0} ميجابايت من البيانات الى PDF. لكن، تتعدى الوثائق المحددة ${0} ميجابايت.",
		download_as_pdf_max_content_error_response: "حدد عدد أقل من الوثائق أو حدد وثائق أصغر وقم بتحميل الوثائق كملفات PDF مرة أخرى.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "لا يمكن تحويل الوثائق المحددة الى ملف PDF منفرد.",
		download_as_pdf_mimetype_check_error_explanation: "لتحويل وثيقة متعددة الأجزاء الى ملف PDF منفرد، يجب أن يحتوي كل جزء على نفس نوع MIME.",
		download_as_pdf_mimetype_check_error_response: "حدد وثيقة مختلفة لتحويلها الى PDF.",

		/* Activity Stream */
		show_label: "عرض:",
		all_filter: "كل",
		notifications_filter: "الاعلامات",
		workitems_filter: "بنود العمل",
		documentes_filter: "الوثائق",
		all_favorites_filter: "كل التفضيلات",
		folders_filter: "الحافظات",
		searches_filter: "عمليات البحث",
		teamspaces_filter: "مساحات الفريق",

		/* Repository */
		all_search_templates: "كل عمليات البحث",
		all_od_searches: "كل قوالب البحث",
		recent_searches: "عمليات البحث الحديثة",
		opened_searches: "عمليات البحث المفتوحة",

		all_worklists: "كل الوارد",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "كشف بكل كشوف العمل",

		/* Teamspace */
		all_workspaces: "كل مساحات الفريق",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "كشف بكل مساحات الفريق",
		workspace_title: "مساحة الفريق",
		workspace_icon: "شارة مساحة الفريق",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "المتاح",
		workspace_stat_offline: "غير متاح",
		workspace_stat_validate: "يتطلب التحقق من الصلاحية",
		workspace_stat_pendingDelete: "تعليق الحذف",
		workspace_stat_deleteError: "فشل الحذف",

		undefined_value: "غير معرف",
		undefined_reference_value: "لم يتم تعريف مرجع.",

		/* Filter teamspaces in content list */
		more_results_on_server: "قد يكون هناك من المزيد من النتائج المتاحة على   وحدة الخدمة.",
		search_all_data: "بحث كل البيانات.",
		search_all_teamspaces: "بحث في كل مساحات الفريق.",
		teamspace_filter_results: "عرض ${0} نتيجة/نتائج. ",
		displaying_filtered_results: "عرض النتائج التي تم ترشيحها. ",
		displaying_recent_results: "عرض مساحات عمل الفريق فقط التي تم تعديلها في آخر ${0} أيام. لايجاد مساحات عمل الفريق الأخرى، يمكنك ترشيح كشف مساحات عمل الفريق بواسطة الاسم أو الوصف. ",
		clear_filter: "محو مرشح البيانات.",

		/* FolderTreeModel */
		move_item_task: "نقل بند",
		copy_item_task: "نسخ بند",
		add_item_task: "اضافة بند",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "لا يمكن ايجاد الحافظة التالية: ${0}. قد يكون تم حذف الحافظة، أو لا يمكن فتح الحافظة من هذه المشاهدة. اضغط على رابط المزيد من مشاهدة التسلسل للتجول الى الحافظة. اذا لم تتمكن من مشاهدة الحافظة، قم بتجديد مشاهدة كشف  المحتويات.",
		more_paging_link: "المزيد ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "الحالة",
		status_dialog_cancel_label: "‏الغاء‏",

		/* ErrorDialog */
		error_dialog_title: "خطأ",
		error_dialog_icon_tooltip: "خطأ",
		error_dialog_stack_trace_title: "تتبع الرصة",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "تأكيد",

		close_browser_msg: "قم باغلاق نافذة برنامج الاستعراض.",

		/* MessageDialog */
		message_dialog_title: "معلومات",
		warning_dialog_title: "تحذير",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "مرحبا بك في ${0}",
		server: "مستودع التخزين:",
		username: "اسم المستخدم:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "يجب تحديد اسم مستخدم لتسجيل الدخول لمستودع  التخزين.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "يجب تحديد كلمة سرية لتسجيل الدخول لمستودع   التخزين",
		password: "كلمة السرية:",
		login: "تسجيل الدخول",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "انتهت صلاحية الجلسة الخاصة بك. قم بتسجيل الدخول مرة أخرى.",
		login_repository_connection_expired_message: "تم انتهاء صلاحية الوصلة الى مستودع التخزين ${0}. قم بتسجيل الدخول مرة أخرى.",
		login_site_connection_expired_message: "انتهت صلاحية الوصلة الى الموقع الخاصة بك. قم بتسجيل الدخول مرة أخرى.",
		login_new_server_message: "أدخل اسم المستخدم وكلمة السرية الى ${0}.",
		login_error_more_information_message: "المزيد من المعلومات",

		disconnect_box_account_user: "انهاء الاتصال مع حساب Box : ${0}",
		disconnect_box_account: "قطع الاتصال مع حساب Box",
		disconnect_box_accounts: "قطع الاتصال مع حسابات Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "يجب توافر وصلة SSL للتوصل لمستودع تخزين Box",
		login_oauth_popup_blocked: "تم حظر النافذة المنبثقة. يجب عليك الغاء حظر النوافذ المنبثقة في برنامج الاستعراض الخاص بك لتسجيل الدخول.",
		login_oauth_click_here: "اذا لم يتم اعادة توجيهك خلال 5 ثواني، اضغط هنا.",
		login_oauth_title: "تسجيل الدخول",
		login_oauth_grant_intro: "منح التوثيق الى ${0}.",
		login_pane_oauth_click_here: "اضغط هنا لتسجيل الدخول.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "هل تريد تسجيل الخروج بالوحدة التابعة  للانترنت؟",
		logout_confirmation_button: "تسجيل الخروج",

		/* ChangeLocaleDialog */
		change_locale: "تغيير اللغة ومحددات اللغة",
		change_locale_use_browser_language: "استخدام محددات لغة برنامج الاستعراض   (المفترض)",
		change_locale_use_browser_locale: "استخدام محددات لغة برنامج الاستعراض   (المفترض)",
		change_locale_description: "اذا قمت بحذف ملفات تعريف ارتباط برنامج   الاستعراض الخاص بك، يجب ارجاع اللغة ومحددات اللغة الخاصة بك.",
		change_locale_language_locale: "لغة التطبيق:",
		change_locale_language_locale_hover: "تقوم هذه اللغة بتغيير لغة النص في   برنامج الانترنت لكن لا تقوم بتغيير لغة الوثائق في التطبيق.<br><br>تقوم   المحددات المفترضة باستخدام اللغة المحددة في اختيارات توصيف برنامج استعراض   الانترنت الخاص بك.",
		change_locale_value_format_locale: "محددات لغة التطبيق:",
		change_locale_value_format_locale_hover: "تقوم محددات اللغة بتحديد نسق   التاريخ والوقت والرقم في برنامج الانترنت.<br><br>تقوم المحددات المفترضة   باستخدام النسق المرفقة مع اللغة المحددة في اختيارات توصيف برنامج استعراض   الانترنت الخاص بك.",
		change_locale_for_office: "محددات النص ثنائي الاتجاه:",
		change_locale_bidi_support_flag: "اتاحة دعم النص ثنائي الاتجاه",
		change_locale_bidi_support_flag_hover: "عند اتاحة دعم النص ثنائي الاتجاه، يستطيع المستخدم تحديد اتجاه النص الذي يتم استخدامه في مجالات المدخلات.  النص الذي تم ادخاله للبنود مثل الحافظات، على سبيل المثال، سيتم عرضه بنفس الاتجاه كما تم ادخاله.",
		change_locale_base_text_direction: "اتجاه النص الأساسي للمحتويات:",
		change_locale_base_text_direction_hover: "حدد اتجاه النص الذي يتم ادخاله في مجالات الادخال.  يقوم هذا أيضا بالتحكم في اتجاه العرض للتسميات المميزة التي تم ادخالها بواسطة المستخدم مثل أسماء الحافظات.",
		change_locale_calendar_type: "نوع التقويم:",
		change_locale_calendar_type_hover: "حدد نوع التقويم الذي سيتم استخدامه لجلسة المستخدم.",
		change_locale_base_text_direction_default: "المفترض",
		change_locale_base_text_direction_ltr: "يسار-الي-يمين",
		change_locale_base_text_direction_rtl: "يمين-الي-يسار",
		change_locale_base_text_direction_contextual: "سياقي",
		change_locale_calendar_type_gregorian: "قبطي",
		change_locale_calendar_type_hijri: "هجري",
		change_locale_calendar_type_hebrew: "عبري",
		change_locale_calendar_type_Umm_al_Qura: "أم القرى",

		/* ChangePasswordDialog */
		change_password: "تغيير كلمة السرية",
		change_password_title: "تغيير كلمة السرية",
		change_password_expired_title: "تم انتهاء صلاحية كلمة السرية",
		change_password_message: "أدخل كلمة سرية جديدة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "انتهت صلاحية كلمة السرية الخاصة بك. أدخل كلمة سرية جديدة.",
		change_password_password_rules: "قواعد كلمة السرية",
		change_password_old_password: "كلمة السرية القديمة:",
		change_password_new_password: "كلمة السرية الجديدة:",
		change_password_confirm_password: "تأكيد كلمة السرية:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "يجب أن تقوم بادخال كلمة السرية القديمة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "يجب أن تقوم بادخال كلمة سرية جديدة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "يجب أن تقوم بتأكيد كلمة السرية الجديدة  الخاصة بك.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "يجب أن تتطابق كلمات السرية.",

		/* GlobalToolbar */
		actions: "الوظائف",
		actions_label: "التصرفات:",
		open_actions_label: "التصرفات المفتوحة:",

		/* About Dialog */
		about_dialog_title: "‏نبذة عن‏",
		about_product_name_label: "اسم المنتج: ",
		about_product_version_label: "النسخة: ",
		about_product_build_label: "البناء: ",
		about_product_license: "‏‎Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016.‎‏ جميع الحقوق محفوظة. حقوق مقصورة على مستخدمي حكومة الولايات المتحدة. الاستخدام أو النسخ أو الكشف عن مقصور على  اتفاقية ‏GSA ADP Schedule Contract‏ مع شركة ‏IBM‏. تعد ‏IBM‏ وشعار ‏IBM‏ علامات تجارية مسجلة لشركة ‏International Business Machine‏ في الولايات المتحدة، أو الدول الأخرى، أو كلاهما. هذا البرنامج مرخص بموجب شروط اتفاقية الترخيص  المتوفرة مع  البرنامج. يمكن أن توجد اتفاقية الترخيص هذه في حافظة دليل البرنامج أو المكتبة  التي تعرف باسم \"License\" أو \"Non_IBM_License\"، ان وجدت، أو يمكن أن يتم  اتاحتها في صورة اتفاقية ترخيص مطبوعة. برجاء قراءة هذه الاتفاقية جيدا قبل استخدام البرنامج. استخدام البرنامج يعني أنك توافق على شروط هذه الاتفاقية. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "هل تريد حذف البند المحدد؟",
		delete_single_folder_confirmation_question: "هل تريد حذف الحافظة ${0}؟",
		delete_multiple_confirmation_question: "هل تريد حذف البنود المحددة؟<br>تم  تحديد  ${0} بند.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "‏حذف ‏",
		search_template_delete_confirmation_question: "هل تريد حذف عملية بحث ${0}؟",
		search_template_opened_delete_confirmation_question: "تم فتح عملية بحث  ${0}. اذا قمت  بحذف عملية بحث، سيتم اغلاقها.<br>هل تريد حذف هذا البحث؟",
		delete_multiple_opened_search_template_confirmation_question: "عمليات البحث التالية مفتوحة: ${0}.<br>اذا قمت بحذف عمليات البحث، سيتم اغلاقها. هل  تريد حذف عمليات البحث هذه؟",
		delete_large_number_items_confirmation_question: "قمت بتحديد ${0} بند/بنود للحذف.<br/>قد يستغرق حذف عدد كبير من البنود وقت طويل.<br/>هل تريد  الاستمرار؟",
		delete_confirmation_entrytemplate: "اذا قمت بحذف قالب الادخال هذا، سيكون له التأثير التالي على الوثائق أو الحافظات المرتبطة بقالب الادخال هذا:<ul><li>هذا البند لم يعد مرتبطا بقالب الادخال، وقد يشاهد المستخدم تحذير عند تحديث أحد البنود.</li><li>أي خصائص كان يتم التحكم فيها من خلال قالب الادخال، مثل الاسم أو ترتيب الخصائص، لم تعد تنطبق على البنود الخاصة بقالب الادخال.</li></ul>هل تريد حذف قالب الادخال هذا؟",
		delete_confirmation_entrytempalte_with_multi_items: "يجب أن يتم حذف قوالب الادخال كل على حدة. وقد تم ازالة قوالب الادخال من كشف البنود التي سيتم حذفها. واذا كنت تريد حذف قوالب الادخال، ويجب أن تقوم بحذف كل من قوالب الادخال بصفة منفصلة.",

		/* Create/Apply/Remove Hold */
		hold: "ايقاف مؤقت",
		createHold: "ايقاف مؤقت جديد",
		applyHold: "تطبيق الايقاف المؤقت",
		removeHold: "ازالة الايقاف المؤقت",
		showHolds_title: "عرض الايقاف المؤقت",
		applyHoldSelectText: "حدد الايقاف المؤقت الذي تريد تطبيقه على البنود المحددة.",
		availableHolds: "عمليات الايقاف المؤقت المتاحة:",
		removeHoldSelectText: "حدد عمليات الايقاف المؤقت التي تريد ازالتها من البنود المحددة.",
		appliedHolds: "عمليات الايقاف المؤقت المطبقة:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "تكوين ايقاف مؤقت جديد لتطبيقه على البنود المحددة.",
		holdName: "اسم الايقاف المؤقت:",
		holdDescription: "الوصف:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "يجب أن تحدد اسم للايقاف المؤقت.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "اسم الايقاف المؤقت المحدد موجود بالفعل.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "لا يمكن أن يحتوي اسم الايقاف المؤقت على أي من الحروف التالية  : ' %   [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "ستنتهي الجلسة الخاصة بك خلال ${0} دقيقة/دقائق.",
		session_expire: "انتهاء صلاحية الجلسة",
		logoff: "تسجيل الخروج",
		extend_session: "امتداد الجلسة",
		admin_custom_settings: "المحددات الاضافية:",
		admin_custom_settings_hover_help: "يعد enableSessionExpireWarning قيمة بوولية تشير الى ما اذا كان قد تم اتاحة تحذير انتهاء الجلسة، وأن القيمة المفترضة هي true. sessionExpireWarningTime هو رقم صحيح بين 2 الى 5 لتحديد وقت تحذير انتهاء الجلسة.",
		admin_custom_setting_dialog_title_new: "محددات جديدة",
		admin_custom_setting_dialog_title_edit: "تحرير المحددات",
		admin_custom_setting_dialog_hover_help: "يمكنك اضافة معاملات أخرى بتحديد اسم وقيمة المعامل. على سبيل المثال، يمكنك تحديد “enableSessionExpireWarning” و “true” اذا كنت تريد اتاحة تحذير انتهاء الجلسة.",
		admin_custom_setting_dialog_field_hover_help: "للحصول على المزيد من المعلومات عن أسماء وقيم المعاملات، ارجع الى IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "يجب ادخال هذه القيمة. لا يمكن أن تحتوي القيمة على فراغات ولا يمكن أن تكون مكررة.",
		admin_custom_setting_dialog_bool_valueInvalid: "يجب ادخال هذه القيمة. يجب أن تكون القيمة بوولية.",
		admin_custom_setting_dialog_int_valueInvalid: "يجب ادخال هذه القيمة. يجب أن تكون القيمة رقم صحيح.",
		/* Add Document Dialog */
		add_document_dialog_title: "اضافة وثيقة",
		add_documents_dialog_title: "اضافة وثائق",
		add_document_general_label: "‏عام‏",
		add_document_properties_label: "الخصائص",
		add_document_properties_with_ellipsis_label: "الخصائص...",
		add_document_security_label: "السرية",
		add_document_location_label: "حفظ في:",
		add_document_type_label: "ما الذي تريد حفظه؟",
		add_document_localfile_label: "وثيقة محلية",
		add_document_metadata_label: "معلومات عن وثيقة",
		add_document_external_label: "رابط لوثيقة خارجية",
		add_document_web_link_label: "رابط الانترنت",
		add_document_saved_content_label: "استخدام ملف تم حفظه:",
		add_document_saved_content_choice: "ملف تم حفظه",
		add_document_file_name_label: "اسم الملف:",
		add_document_entry_template_label: "قالب الادخال:",
		add_document_delete_file_label: "حذف ملف محلي",
		add_document_delete_file_disabled_label: "لن يتم حذف الملفات التي لا توجد في دليل تتبع مسار الملف.",
		add_document_major_version_label: "النسخة الرئيسية",
		add_document_major_version_hover: "تحدد حالة الوثيقة الى اصدار. ويتم  اضافة  الوثيقة الى مستودع التخزين كالنسخة 1.0. اذا لم يتم تحديد الاختيار،  فان  الوثيقة لن تكون جاهزة ليتم اصدارها  وسيتم اضافتها كنسخة ثانوية 0.1.",
		add_document_save_document_as_unfiled_label: "عدم حفظ الوثيقة في حافظة",
		add_document_save_document_as_unfiled_hover: "اذا تم تحديد هذا الاختيار،   فيمكنك ايجاد هذه الوثيقة من خلال البحث فقط. ولن يمكنك الاستعراض لايجادها.",
		add_document_create_new_version_label: "تكوين نسخة جديدة",
		add_document_replace_existing_version_label: "استبدال نسخة موجودة",
		add_document_start_workflow_label: "بدء مسار العمل",
		add_document_auto_classify_label: "تصنيف المحتويات آليا",
		add_document_add_label: "‏اضافة‏",
		add_document_cancel_label: "‏الغاء‏",
		add_document_document_type_label: "الفئة",
		add_document_context_info: "يمكن استخدام القيم التي تقوم بادخالها لخصائص الوثيقة  لايجاد الوثيقة فيما بعد.",
		add_documents_context_info: "يمكن استخدام القيم التي تقوم بادخالها للوثائق  لايجاد الوثائق فيما بعد. اذا كنت تريد ادخال قيمة خاصية مختلفة لوثيقة، يجب أن تقوم باضافتها بطريقة منفصلة أو تحرير خصائص الوثيقة بعد اضافتها.",
		add_document_url_label: "عنوان URL:",
		add_document_template_description: "وصف القالب:",
		add_document_select_entry_template: "أدخل أو حدد قالب ادخال.",
		add_document_no_permission_to_associations: "لا يتوافر لديك تصريح لاستخدام قالب الادخال",
		add_document_no_entry_template_to_use: "لا يوجد قالب ادخال يمكن استخدامه للملفات المحددة",
		add_document_no_entry_template_itemtype_permission: "لا يمكنك اضافة بنود الى هذه الحافظة. يجب تحديد قالب الادخال ولا يتوافر لديك امكانية توصل الى أي من قوالب الادخال المرفقة مع هذه الحافظة. اتصل بمسؤول النظام وأطلب منه منحك امكانية توصل الى قوالب الادخال المرفقة مع هذه الحافظة.",
		add_document_appgroup_name_label: "اسم مجموعة التطبيق:",
		add_document_app_name_label: "اسم التطبيق:",
		create_folder_dialog_title: "حافظة جديدة",
		create_folder_context_info: "يمكن استخدام القيم التي تقوم بادخالها لخصائص الحافظة  لايجاد الحافظة فيما بعد.",
		create_folder_folder_name_label: "اسم الحافظة",
		create_folder_save_folder_as_unfiled_label: "عدم حفظ الحافظة في حافظة أخرى",
		create_folder_save_folder_as_unfiled_hover: "اذا تم تحديد هذا الاختيار،  فيمكنك ايجاد هذه الحافظة من خلال البحث فقط. ولن  يمكنك الاستعراض لايجادها.",
		add_item_create_in_folder: "تكوين في الحافظة:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "لا يمكن أن يتضمن اسم الحافظة أي من الحروف   التالية:  \\ /  : * ? \" < > |",

		invalid_box_folder_name_message: "لا يمكن أن يتضمن اسم الحافظة أي من الحروف التالية: \\ / ولا يمكن أن يساوي . أو ..",
		invalid_box_file_name_message: "لا يمكن أن يتضمن اسم الملف أي من الحروف التالية: \\ / ولا يمكن أن يساوي . أو ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "لا يمكن أن يتضمن اسم الملف أي من الحروف   التالية:  \\ / : *  ? \" < > |",
		external_document_placeholder: "أدخل عنوان URL للوثيقة",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "يجب ادخال اللون كرقم سداسي عشر يتكون من 3 أو 6 أرقام، على سبيل  المثال، #000 أو #000000.",
		add_document_unfiled: "${0} لم يتم تخزينه",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "اضافة وثيقة باستخدام قالب ادخال",
		add_document_using_template_context_info: "عند اضافة وثيقة باستخدام قالب ادخال، تكون  القيم التي يتم ادخالها للوثيقة متسقة.",
		add_documents_using_template_dialog_title: "اضافة وثائق باستخدام قالب ادخال",
		add_documents_document_name_is_file_name_hint: "سيتم استخدام اسم الملف لهذه الخاصية",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "حافظة جديدة باستخدام قالب ادخال",
		create_folder_using_template_context_info: "عند تكوين حافظة باستخدام قالب ادخال، تكون  القيم التي يتم ادخالها للوثيقة متسقة.",

		add_documents_batch_results_dialog_title: "لم يتم اضافة الوثائق الى مستودع التخزين",
		add_documents_batch_results_dialog_context_info: "لم يتم اضافة الوثائق التالية الى مستودع التخزين. حدد وثيقة واضغط على التفاصيل للحصول على المزيد من المعلومات عن سبب عدم اضافة الوثيقة الى مستودع التخزين.",
		add_documents_batch_results_dialog_filename_col_hdr: "اسم الملف",
		add_documents_batch_results_dialog_status_col_hdr: "الحالة",
		add_documents_batch_results_dialog_message_col_hdr: "الرسالة",
		add_documents_batch_results_status_error: "خطأ",
		add_documents_batch_results_status_cancelled: "تم الالغاء",
		add_documents_batch_results_status_cancelled_msg: "لم يتم اضافة الوثيقة لأنه تم الغاء الطلب.",

		add_documents_batch_status_title: "اضافة الوثائق",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "اضافة الملف ${0} من ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "الأخطاء: ${0}",
		add_documents_batch_status_completing_msg: "سيتم ايقاف العملية بعد اضافة هذه الوثيقة.",

		add_documents_status_uploading_msg: "تحميل الملف ${0} من ${1}...",
		add_documents_status_adding_msg: "اضافة الملف ${0} من ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "تم توصيف قالب الادخال في تطبيق آخر وقد تم توصيفه بحيث يتم تحديد الوثائق كسجلات دائما. لكن، يتم تجاهل هذه المحددات لأن الوحدة التابعة للانترنت لا تدعم تحديد الوثائق كسجلات.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "تم توصيف قالب الادخال في تطبيق آخر وقد تم توصيفه بحيث يمكنك تحديد هذه الوثيقة كسجل. لكن، يتم تجاهل هذه المحددات لأن الوحدة التابعة للانترنت لا تدعم تحديد الوثائق كسجلات.",
		no_selection: "&lt;تحديد&gt;",

		batch_results_dialog_details_label: "التفاصيل",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "القيمة غير صحيحة. يجب أن تكون القيمة هي ‏‎Globally Unique Identifier ‎(GUID)‎‏، على سبيل المثال، {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "القيمة غير صحيحة. يجب أن تكون القيمة رقم عشري، على سبيل المثال، 1.2 أو 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "القيمة غير صحيحة. يجب أن تكون القيمة بالنسق ${0}، على سبيل المثال, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "القيمة غير صحيحة. يجب أن تكون القيمة قيمة عشرية، على سبيل المثال، 1.2 أو 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "القيمة غير صحيحة. يجب أن تكون القيمة رقم صحيح، على سبيل المثال، 5 أو 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "القيمة غير صحيحة. القيمة يمكن أن تحتوي على حروف أبجدية فقط، على سبيل المثال، a-z و A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "القيمة غير صحيحة. القيمة يمكن أن تحتوي على حروف أبجدية عددية فقط، على سبيل المثال، a-z و  A-Z و 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "القيمة غير صحيحة. القيمة يمكن أن تحتوي على حروف رقمية فقط، على سبيل المثال،  0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "القيمة غير صحيحة. يمكن أن تحتوي القيمة على الحروف التالية فقط: a-z، A-Z، 0-9، [مسافة]، `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "القيمة غير صحيحة. القيمة يجب أن تكون تاريخ بالنسق التالي: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "القيمة غير صحيحة. القيمة يجب أن تكون وقت بالنسق التالي: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "القيمة غير صحيحة. حدد قيمة من القائمة المسقطة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "القيمة غير صحيحة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "القيمة غير صحيحة. يجب أن تكون القيمة بالنسق التالي: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "يجب ادخال هذه القيمة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "القيمة طويلة جدا. الخاصية تدعم الحد الأقصى للطول ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "القيمة قصيرة جدا. تدعم الخاصية الحد الأدنى للطول وهو ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "القيمة ليس بالمدى الصحيح. يجب أن تكون القيمة رقم نقطة عائمة بين ${0} و ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "القيمة ليس بالمدى الصحيح. يجب أن تكون القيمة قيمة عشرية بين ${0} و ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "القيمة ليس بالمدى الصحيح. يجب أن تكون القيمة  رقم  صحيح بين ${0} و ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "يجب أن تكون القيمة تاريخ بين ${0} و ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "القيمة ليس بالمدى الصحيح. يجب أن تكون القيمة تاريخ بين ${0} و ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "القيمة ليس بالمدى الصحيح. يجب أن تكون القيمة وقت بين ${0} و ${1}.",
		property_and: "و",

		property_invalidValueOrRequired: "القيمة التالية غير صحيحة أو مطلوبة: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "الخصائص",
		edit_properties_dialog_info: "يمكنك مشاهدة أو تحرير خصائص هذا البند. اذا كان يتوافر لديك التصاريح المناسبة، يمكنك أيضا تعديل سرية البند. لكن، يمكنك تغيير خصائص النظام.",
		edit_properties_od_dialog_info: "يمكنك مشاهدة أو تحرير خصائص هذا البند. لكن، يمكنك تغيير خصائص النظام.",
		system_properties_title: "خصائص النظام",
		custom_properties_title: "الخصائص",
		/* Folder collaboration tab */
		box_permission_permission: "تصريح",
		box_permission_permissions: "التصاريح",
		box_permission_editor: "برنامج التحرير",
		box_permission_owner: "المالك",
		box_permission_co_owner: "شريك في الملكية",
		box_permission_viewer_uploader: "القائم بالمشاهدة-القائم بالتحميل",
		box_permission_previewer_uploader: "القائم بالمعاينة-القائم بالتحميل",
		box_permission_viewer: "برنامج المشاهدة",
		box_permission_previewer: "القائم بالمعاينة",
		box_permission_uploader: "القائم بالتحميل",
		box_permission_add: "‏اضافة‏",
		box_permission_upload: "تحميل",
		box_permission_download: "‏تحميل من‏",
		box_permission_preview: "معاينة",
		box_permission_view: "‏مشاهدة‏",
		box_permission_send_links: "روابط الارسال والمشاهدة فقط",
		box_permission_create_subfolders: "تكوين حافظات فرعية",
		box_permission_create_tasks: "تكوين مهام",
		box_permission_add_comments: "اضافة تعقيبات",
		box_collaboration_invite_placeholder: "أدخل اسم أو بريد الكتروني أو مجموعة لدعوتها",
		box_collaboration_invite_placeholder_non_admin: "أدخل البريد الالكتروني للشخص الذي سيتم دعوته",
		box_collaboration_invalid_email: "أدخل عنوان بريد الكتروني صحيح",
		box_collaboration_user_already_present: "هذا المستخدم هو مساعد بالحافظة بالفعل",
		box_collaboration_user_name: "الاسم",
		box_collaboration_email_address: "عنوان البريد الالكتروني",
		box_collaboration_date_added: "تاريخ الاضافة",
		box_collaboration_remove_collaboration: "ازالة",
		box_collaboration_remove_collaboration_title: "‏حذف ‏",
		box_collaboration_no_collaborators: "لا يوجد مساعدين",
		box_collaboration_change_owner_title: "تغيير مالك البند",
		box_collaboration_change_owner_prompt: "من خلال جعل هذا المساعد هو مالك الحافظة فانك تصبح محرر ولم تعد تملك الحافظة. وأي مساعدين تم اضافتهم مباشرة الى هذه الحافظة سيرونها في الحافظات الرئيسية الخاصة بهم. وأي مساعدين تم اضافتهم في مستوى الحافظة الرئيسية أو أعلى لن يعدوا مشاركين. هل تريد  الاستمرار؟",
		box_collaboration_remove_self_title: "ازالة ذاتية",
		box_collaboration_remove_self_prompt: "هل تريد بالفعل ازالة نفسك كمساعد؟ لن يعد يتوافر لديك امكانية توصل الى هذه الحافظة.",
		box_collaboration_user: "مستخدم",
		box_collaboration_group: "المجموعة",
		box_managing_users_not_configured: "لا يمكنك البحث عن المستخدمين والمجموعات لأنه لم يتم توصيف تطبيق Box بطريقة صحيحة. لاستخدام هذه الخاصية، اتصل بمسؤول النظام وقم بطلب توصيف تطبيق Box لادارة المستخدمين والمجموعات.",
		duplicate_value_error: "يجب أن تكون كل قيمة في هذه الخاصية متفردة.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "يتم تطبيق أية تغييرات تقوم باجرائها  في  المجالات التالية على كل البنود المحددة. اذا كنت تريد ادخال قيمة خاصية  مختلفة  لبند معين أو تحرير سرية بند، يجب تحرير خصائص البند بشكل مستقل.",
		multi_edit_properties_class_label: "الفئة:",
		multi_edit_properties_items_label: "أسماء البند:",
		multi_edit_properties_properties_label: "الخصائص:",
		multi_edit_batch_status_title: "تحديث الخصائص",
		multi_edit_batch_status_adding_msg: "تحديث بند ${0} من ${1}...",
		multi_edit_batch_status_verifying_msg: "التحقق من البند ${0} الى ${1}...",
		multi_edit_batch_status_completing_msg: "سيتم ايقاف العملية بعد تحديث هذا  البند.",
		multi_edit_batch_status_validation_completing_msg: "سيتم ايقاف العملية  بعد  التحقق من هذا البند.",
		multi_edit_batch_results_status_error: "خطأ",
		multi_edit_batch_results_status_cancelled: "تم الالغاء",
		multi_edit_batch_results_status_cancelled_msg: "لم يتم تحديث البند لأنه  تم  الغاء الطلب.",
		multi_edit_batch_results_dialog_title: "لم يتم تحديث البنود",
		multi_edit_batch_results_dialog_context_info: "لم يتم تحديث البنود   التالية. حدد اسم بند واضغط على التفاصيل للحصول على المزيد من المعلومات عن   سبب عدم تحديث البند.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "اسم البند",
		multi_edit_batch_results_dialog_status_col_hdr: "الحالة",
		multi_edit_batch_results_dialog_message_col_hdr: "الرسالة",
		multi_edit_batch_status_errors_msg: "الأخطاء: ${0}",
		multi_edit_batch_permission_error_text: "لا يمكن حفظ التغييرات للخصائص.",
		multi_edit_invalid_value_error: "تعتمد هذه القيمة على قيمة خاصية أخرى وهي  غير صحيحة لكل البنود التي قمت  بتحديدها.",
		multi_edit_batch_permission_error_explanation: "لن يمكنك تعديل خصائص هذا   البند لأنه لا يتوافر لديك الامتيازات الكافية.",
		multi_edit_no_modifiable_properties: "لا يمكن تعديل خصائص البنود المحددة. يمكن أن يحدث هذا عندما يتضمن البند خصائص للقراءة-فقط أو عندما يمكن تحرير اسم أو عنوان البند فقط. عند تحديد عدة بنود، لا يمكنك تعديل اسم أو عنوان البنود.",
		multi_edit_mult_classes_dialog_info: "توجد البنود المحددة على مستودعات   تخزين مختلفة أو تنتمي الى فئات مختلفة. يمكنك تحرير البنود فقط التي توجد  بنفس الفئة أو نفس مستودع التخزين. حدد الفئة الفرعية للبنود التي تريد  تحريرها.",
		multi_edit_class_selector_class_heading: "الفئة",
		multi_edit_class_selector_entry_template_heading: "قالب الادخال",
		multi_edit_class_selector_repository_heading: "مستودع التخزين",
		multi_edit_class_selector_items_heading: "البنود",
		multi_edit_some_classes_not_displayed: "لم يتم تضمين بعض البنود المحددة  في  هذا الكشف لأن البنود تحتوي على خصائص للقراءة-فقط أو لأن البنود توجد في   مستودعات تخزين لا تدعم خصائص التحرير.",
		multi_edit_properties_invalid_msg: "بعض قيم الخاصية غير صحيحة لكل البنود   المحددة.",
		multi_edit_properties_readonly_tooltip_text: "${0}: هذه الخاصية للقراءة   فقط ولا يمكن تعديلها.",
		multi_edit_append_checkbox_label: "الحاق",
		multi_edit_append_checkbox_tooltip: "حدد هذا الاختيار اذا كنت تريد الحاق   قيم خاصية جديدة الى القيم الحالية بدلا من استبدالها.",
		multi_edit_properties_invalid_childcomponent_msg: "بعض القيم في الخاصية ${0} من المكون الفرعي ${1} تعتمد على خصائص أخرى ولم تعد صالحة مع الاختيارات التي قمت بتحديدها. قم بمحو القيم بالمكون الفرعي   ${1} أو قم بعمل تغييرات الخاصية بالبنود التي قمت بتحديدها بصفة منفردة.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "تصدير الخصائص",
		export_properties_dialog_info: "حدد الخصائص التي تريد تصديرها وحدد الترتيب الذي سيتم عرضها به.",
		export_properties_dialog_export_button_label: "تصدير",
		export_properties_dialog_export_raw_values: "تصدير القيم الأصلية",

		/* Properties */
		filter_clear_tooltip: "اخلاء مرشح البيانات",
		properties_new_row: "جديد",
		properties_requiredClass_document_tooltip: "حدد وثيقة. يجب أن تنتمي الوثيقة الى الفئة ${0}.",
		properties_requiredClass_folder_tooltip: "حدد حافظة. الحافظة يجب أن تنتمي الى الفئة ${0}.",
		properties_dataType_tooltip: "نوع البيانات: ${0}",
		properties_maxLength_tooltip: "الحد الأقصى للطول: ",
		properties_minLength_tooltip: "الحد الأدنى للطول: ",
		properties_minValue_tooltip: "الحد الأدنى للقيمة: ",
		properties_maxValue_tooltip: "الحد الأقصى للقيمة: ",
		properties_format_tooltip: "النسق: ",
		properties_description_tooltip: "الوصف: ",

		properties_type_boolean_tooltip: "بوولية",
		properties_type_date_tooltip: "التاريخ",
		properties_type_time_tooltip: "الوقت",
		properties_type_timestamp_tooltip: "خاتم الوقت",
		properties_type_decimal_tooltip: "القيمة العشرية",
		properties_type_double_tooltip: "رقم بنقطة متحركة",
		properties_type_short_tooltip: "رقم صحيح",
		properties_type_integer_tooltip: "رقم صحيح",
		properties_type_long_tooltip: "رقم صحيح",
		properties_type_string_tooltip: "مجموعة حروف النص",
		properties_type_string_alpha_tooltip: "مجموعة حروف أبجدية",
		properties_type_string_alphanum_tooltip: "مجموعة حروف أبجدية عددية",
		properties_type_string_ext_tooltip: "مجموعة حروف أبجدية عددية ممتدة",
		properties_type_string_num_tooltip: "سلسلة حروف رقمية",
		properties_type_binary_tooltip: "ثنائي",
		properties_type_object_tooltip: "عنصر",
		properties_type_reference_tooltip: "تشير هذه الخاصية الى بند آخر في مستودع التخزين.",
		properties_type_guid_tooltip: "كود تعريف متفرد بصفة عامة",
		properties_type_group_tooltip: "المستخدمين والمجموعات",
		properties_type_user_tooltip: "المستخدمين",
		properties_type_childComponent_tooltip: "مكون فرعي",

		properties_childComponent_minCardinalityOnly_tooltip: "يجب أن يكون لهذه الخاصية ${0} قيمة على الأقل.",
		properties_childComponent_maxCardinalityOnly_tooltip: "لا يمكن أن يكون لهذه الخاصية أكثر من ${0} قيمة.",
		properties_childComponent_minMaxCardinality_tooltip: "يجب أن يكون لهذه الخاصية ${0} قيمة على الأقل ولا يمكن أن يكون لها أكثر من ${1} قيمة.",
		properties_childComponent_noCardinality_tooltip: "يمكن أن يكون لهذه الخاصية أي عدد من القيم.",

		properties_type_guid_example_tooltip: "،على سبيل المثال {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "حدد قيمة من الكشف.",
		properties_single_select_choice_tooltip: "حدد قيمة.",
		properties_multiple_select_typein_tooltip: "أدخل قيمة واحدة أو أكثر.",
		properties_multiple_select_choice_tooltip: "حدد قيمة واحدة أو أكثر.",
		properties_not_selectable_tooltip: "لا يمكن تحديد التصنيف.",
		properties_none: "‏لا شيء‏",
		properties_none_tooltip: "حدد <i>لا شيء</i> لمحو القيمة الحالية لهذه الخاصية.",
		properties_value_empty: "بدون قيمة",
		properties_value_read_only: "للقراءة فقط",
		properties_clear_label: "اخلاء",
		properties_clear_tooltip: "سيؤدي محو القيمة في هذا المجال الى محو القيمة   التي توجد في مستودع التخزين بعد الضغط على الاختيار <b>حفظ</b>.",
		properties_box_custom_properties: "خصائص مهيأة",
		properties_box_metadata_name_in_use: "تم بالفعل استخدام هذا الاسم. أدخل اسم أخر للخاصية المهيأة.",

		properties_templates: "قوالب",
		properties_add_template: "اضافة قالب",
		properties_remove_template: "ازالة",
		/* Checkin Document Dialog */
		checkin_dialog_title: "تخصيص",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "تخصيص",
		checkin_cancel_label: "‏الغاء‏",
		checkin_file_name_label: "اسم الملف",
		checkin_document_status_title: "انهاء تخصيص الوثيقة",
		checkin_document_status_uploading_msg: "تحميل الملف...",
		checkin_document_status_checkingin_msg: "انهاء تخصيص الملف...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "تحديد نمط التنقيح",
		viewer_redaction_new_document_confirmation_question: "هل تريد حفظ عملية التنقيح كوثيقة جديدة أو ملف محلي؟",
		viewer_redaction_new_version_confirmation_question: "هل تريد حفظ عملية التنقيح كنسخة جديدة؟",
		viewer_redaction_new_version_confirmation_question_never: "هل تريد حفظ عملية التنقيح كمحتوى جديد؟",		
		viewer_redaction_new_document_button: "نعم",
		viewer_redaction_new_document_cancel_button: "لا",
		viewer_redaction_add_document_confirmation_question: "هل تريد حفظ عملية التنقيح كوثيقة جديدة أو نسخة جديدة أو ملف محلي؟",
		viewer_redaction_add_document_confirmation_question_version_never: "هل تريد حفظ عملية التنقيح كوثيقة جديدة أو محتوى جديد أو ملف محلي؟",
		viewer_redaction_add_document_button: "وثيقة جديدة",
		viewer_redaction_add_new_version_button: "نسخة جديدة",
		viewer_redaction_add_new_version_button_version_never: "محتوى جديد",
		viewer_redaction_add_local_file_button: "الملف المحلى",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "حدد سبب التنقيح",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "قالب الادخال الذي تم استخدامه لاضافة هذه الوثيقة الى مستودع التخزين لا يمكن ايجاده. سيتم انهاء تخصيص الوثيقة في مستودع التخزين بدون استخدام قالب الادخال.",
		property_entry_template_not_retrieved_warning: "قالب الادخال الذي تم استخدامه لاضافة هذه الوثيقة الى مستودع التخزين لا يمكن ايجاده. سيتم عرض خصائص الوثيقة بدون استخدام قالب الادخال.",
		multi_edit_entry_template_not_found_name: "[غير موجود]",
		multi_edit_entry_template_not_retrieved_warning: "لا يمكن ايجاد قالب الادخال الذي تم استخدامه لاضافة هذه البنود الى مستودع التخزين. سيتم تعديل خصائص البند بدون استخدام قالب الادخال.",
		checkin_major_version_hover: "يتم زيادة رقم نسخة الوثيقة بمقدار واحد ويتم  تحديد حالة الوثيقة الى اصدار.  واذا لم يتم تحديد الاختيار،  فان الوثيقة لن   تكون جاهزة ليتم اصدارها  وسيتم اضافتها كنسخة ثانوية.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "لا يمكن انهاء تخصيص الوثيقة لأنها لم يتم تخصيصها.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "كود المستخدم أو كلمة السرية غير صحيحين لوحدة الخدمة.",
		error_bad_userid_password_userResponse: "تأكد من ادخال كود المستخدم وكلمة السرية بطريقة صحيحة.",
		error_bad_userid_password_adminResponse: "تم ارجاع الخطأ التالي: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "لا يمكن تكوين وصلة للوحدة التابعة للانترنت باستخدام عنوان URL التالي: ${0}.",
		http_send_error_explanation: "يمكن أن يكون هذا الخطأ بسبب مشكلة بتوصيف وحدة الخدمة لتطبيق الانترنت أو  بسبب مشكلة بتطبيق الوحدة التابعة للانترنت.",
		http_send_error_userResponse: "حاول تسجيل الدخول مرة أخرى. اذا استمرت المشكلة، قم بابلاغ مسؤول النظام  الخاص  بك عن هذا الخطأ.",
		http_send_error_adminResponse: "تم ارجاع خطأ HTTP التالي: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "لا يمكن تكوين وصلة للوحدة التابعة للانترنت باستخدام عنوان URL التالي: ${0}.",
		http_error_explanation: "قد يتطلب التوثيق لجدار الحماية أو قد لا يتم تشغيل وحدة خدمة تطبيق الانترنت أو لا يمكن الوصول اليها بسبب حدوث مشاكل في شبكة الاتصال.",
		http_error_userResponse: "اذا كنت تريد التوثيق بجدار الحماية، قم بالتوثيق  ومحاولة تسجيل الدخول مرة أخرى. اذا استمرت المشكلة، قم بابلاغ مسؤول النظام  الخاص  بك عن هذا الخطأ.",
		http_error_adminResponse: "تم ارجاع خطأ HTTP التالي: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "لا يمكن تكوين وصلة للوحدة التابعة للانترنت باستخدام عنوان URL التالي: ${0}.",
		http_response_bad_explanation: "يمكن أن يكون هذا الخطأ بسبب مشكلة بتوصيف وحدة الخدمة لتطبيق الانترنت أو  بسبب مشكلة بتطبيق الوحدة التابعة للانترنت.",
		http_response_bad_userResponse: "حاول تسجيل الدخول مرة أخرى. اذا استمرت المشكلة، قم بابلاغ مسؤول النظام  الخاص  بك عن هذا الخطأ.",
		http_response_bad_adminResponse: "تم ارجاع الخطأ التالي: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "بدون عنوان",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "لا يمكن بدء برنامج البريد الالكتروني.",
		email_applet_init_failed_explanation: "يمكن أن تحدث هذه المشكلة عندما تكون الوحدة التابعة للبريد الالكتروني لم يتم تركيبها وتوصيفها بطريقة صحيحة أو اذا لم يتم تركيب نسخة يتم دعمها من Java Runtime Environment ‏(JRE)‏ بوحدة العمل الخاصة بك.",
		email_applet_init_failed_userResponse: "لحل المشكلة:<ul><li>تأكد من تركيب تطبيق البريد الالكتروني الخاص بك ومن اعداده كالوحدة التابعة للبريد الالكتروني المفترضة بوحدة العمل الخاصة بك.</li><li>تأكد من أنه تم تركيب نسخة يتم دعمها من JRE بوحدة العمل الخاصة بك من خلال ادخال الأمر التالي في سطر الأمر: java -version</li></ul><p>يتم تضمين كشف بالنسخ التي يتم دعمها من JRE في وثيقة n <i>Hardware and software prerequisites for IBM Content Navigator</i> في موقع IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "لا يمكن بدء تطبيق البريد الالكتروني لأنه لا يمكن تحميل ملف DLL المطلوب.",
		email_applet_JNI_LOAD_FAILED_explanation: "لا يمكن تحميل الملف ‏‎WCEmailAppletJNI.dll‎‏ المطلوب لأن الدليل المؤقت على وحدة العمل يمكن أن يكون ممتلئا.",
		email_applet_JNI_LOAD_FAILED_userResponse: "تأكد من أن الدليل المؤقت يحتوي على مساحة كافية. عندئذ حاول ارسال الوثيقة من الوحدة التابعة للانترنت مرة أخرى. بصفة مفترضة، يتم تحميل ملف WCEmailAppletJNI.dll في الدليل المؤقت المحدد في محددات برنامج استعراض الانترنت الخاص بك.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "لا يمكن بدء تطبيق البريد الالكتروني لأن برنامج البريد الالكتروني لا يمكنه تكوين ملف مؤقت.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "يمكن أن يكون الدليل على وحدة العمل المؤقت ممتلئا.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "تأكد من أن الدليل المؤقت يحتوي  على مساحة كافية. عندئذ حاول ارسال الوثيقة من الوحدة التابعة للانترنت مرة   أخرى.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "لا يمكن بدء تطبيق البريد الالكتروني لأن برنامج البريد الالكتروني لا يمكنه التوصل الى الدليل مؤقت.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "يمكن أن يكون الدليل المؤقت على وحدة العمل الخاصة بك ممتلئا، أو قد تكون امكانية التوصل المطلوبة للكتابة بالدليل المؤقت غير متوافرة لديك.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "تأكد من أن الدليل   المؤقت يحتوي على مساحة كافية ومن توافر تصاريح الكتابة للدليل المؤقت لديك.   عندئذ حاول ارسال الوثيقة من الوحدة التابعة للانترنت مرة أخرى. اذا استمرت   المشكلة، قم بالاتصال بمسؤول النظام.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "لا يمكن أن يقوم البرنامج المصغر للبريد الالكتروني بحذف ملف مؤقت.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "قد يكوم هناك تطبيق آخر يقوم باستخدام الملف، أو قد يكون الملف غير موجود على وحدة العمل الخاصة بك.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "اذا كان يتم استخدام الملف من خلال تطبيق آخر، قم باغلاق التطبيق. اذا كان الملف في نظام الملفات المحلي الخاص بك، قم بازالة الملف التالي من الدليل المؤقت على وحدة العمل الخاصة بك: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "لا يمكن تكوين الرابط الى الوثيقة.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "قام مستودع التخزين بارجاع عنوان URL بنسق غير صحيح.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "قم باغلاق برنامج   استعراض الانترنت الخاص بك وكل علامات التبويب والجلسات وقم بتسجيل الدخول مرة   أخرى. حاول ارسال الوثيقة من برنامج الانترنت مرة أخرى. اذا استمرت هذه المشكلة، اتصل بالمسئول عن دعم برامج IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "لا يمكن أن يقوم البرنامج المصغر للبريد الالكتروني بالحاق ملف الى البريد الالكتروني.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "قام مستودع التخزين بارجاع عنوان URL للوثيقة بنسق غير صحيح.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "قم باغلاق برنامج   استعراض الانترنت الخاص بك وكل علامات التبويب والجلسات وقم بتسجيل الدخول مرة   أخرى. حاول ارسال الوثيقة من برنامج الانترنت مرة أخرى. اذا استمرت هذه المشكلة، اتصل بالمسئول عن دعم برامج IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "لا يمكن تكوين الملحقات.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "لا يستطيع برنامج البريد الالكتروني قراءة عنوان URL للوثيقة.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "قم باغلاق برنامج   استعراض الانترنت الخاص بك وكل علامات التبويب والجلسات وقم بتسجيل الدخول مرة   أخرى. حاول ارسال الوثيقة من برنامج الانترنت مرة أخرى. اذا استمرت هذه المشكلة، اتصل بالمسئول عن دعم برامج IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "لا يمكن استرجاع الوثيقة من مستودع التخزين.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "قد يكون تم انتهاء وقت الجلسة الخاصة بك، أو قد يكون مستودع التخزين أو وحدة خدمة تطبيق  الانترنت لا تعمل، أو قد تكون هناك مشكلة في توصيف برنامج الوحدة التابعة للانترنت.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "قم بتسجيل الدخول وحاول   ارسال الوثيقة بواسطة البريد الالكتروني مرة أخرى. اذا استمرت المشكلة، أطلب من  مسؤول النظام مراجعة سجلات أخطاء مستودع التخزين.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "اذا كان قد تم توصيف برنامج الوحدة التابعة للانترنت لتحويل وثائق  AFP الى نسق آخر، مثل PDF، فقبل ارسال الوثائق كملحقات، تأكد من أنه قد تم توصيف عملية التحويل بشكل صحيح.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "لا يمكن تحويل الوثيقة الى ملف PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "الأداة التي تم استخدامها لتحويل الوثائق الى PDF لا تدعم نوع الملف.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "قم باغلاق هذه الصفحة وحاول ارسال الوثيقة بالبريد الالكتروني مرة أخرى بدون تحويلها الى PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "لم يتم تكوين البريد الالكتروني.",
		email_applet_MAPI_USER_ABORT_explanation: "قم بفتح تطبيق البريد الالكتروني الخاص بك وتأكد من أنه يعمل بطريقة صحيحة. ثم، حاول ارسال الوثيقة من برنامج الانترنت مرة أخرى. اذا استمرت المشكلة، اتصل بمسؤول النظام لمراجعة سجلات أحداث  نظام التشغيل الخاصة بك.",
		email_applet_MAPI_USER_ABORT_userResponse: "اذا كنت تريد اغلاق تطبيق البريد الالكتروني، لا يوجد تصرف آخر مطلوب. لارسال البريد الالكتروني، قم بتسجيل الدخول بتطبيق البريد الالكتروني الخاص بك وحاول ارسال الوثيقة من برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "لا يمكن تكوين البريد الالكتروني.",
		email_applet_MAPI_FAILURE_explanation: "قد يكون لم يتم فتح برنامج البريد   الالكتروني الخاص بك أو قد تكون لم تقم بتسجيل الدخول.",
		email_applet_MAPI_FAILURE_userResponse: "قم بفتح تطبيق البريد الالكتروني الخاص بك وتأكد من أنه يعمل بطريقة صحيحة. ثم، حاول ارسال الوثيقة من برنامج الانترنت مرة أخرى. اذا استمرت المشكلة، اتصل بمسؤول النظام لمراجعة سجلات أحداث  نظام التشغيل الخاصة بك.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "لا يمكن تكوين البريد الالكتروني.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "لم يتم بدء اتصالك للوحدة التابعة للبريد الالكتروني. يجب فتح الوحدة التابعة للبريد الالكتروني الخاصة   بك ويجب أن تقوم بتسجيل الدخول لارسال رسالة من الوحدة التابعة للانترنت.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "قم بفتح برنامج البريد   الالكتروني الخاص بك وتسجيل الدخول. عندئذ، حاول ارسال الوثيقة من برنامج  الانترنت مرة أخرى.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "لا يمكن تكوين البريد الالكتروني لأن الملف المؤقت لا يمكن تكوينه بوحدة العمل الخاصة بك.",
		email_applet_MAPI_DISK_FULL_explanation: "يمكن أن يكون الدليل على وحدة العمل المؤقت ممتلئا.",
		email_applet_MAPI_DISK_FULL_userResponse: "تأكد من أن الدليل المؤقت يحتوي  على مساحة كافية. عندئذ حاول ارسال الوثيقة من الوحدة التابعة للانترنت مرة   أخرى.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "لا يمكن تكوين البريد الالكتروني، لأنه لا توجد  ذاكرة كافية بالنظام.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "قد يكون لديك تطبيقات متعددة مفتوحة.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "قم باغلاق أي تطبيقات غير مستخدمة، ثم حاول ارسال الوثيقة من الوحدة التابعة للانترنت مرة أخرى.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "تم رفض توصل MAPI.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "قد لا يكون تم اتاحة أو دعم   امكانية توصل ‏‎Messaging Application Programming Interface ‎(MAPI)‎‏ لتطبيق   البريد الالكتروني الخاص بك. MAPI هو بروتوكول الرسائل المستخدم لاتاحة   الاتصالات بين الوحدة التابعة للانترنت وتطبيق البريد الالكتروني الخاص بك.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "اتصل بمسؤول النظام الخاص بك.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "تأكد من أن تطبيق البريد الالكتروني يوجد به امكانية  توصل MAPI تم اعدادها وتوصيفها بطريقة صحيحة. اذا استمرت المشكلة، اتصل بدعم برامج IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "لا يمكن تكوين الملحقات أو الرابط للبند.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "قد يكون لديك جلسات متعددة مفتوحة لبرنامج استعراض الانترنت.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "rم باغلاق أي جلسات غير  مستخدمة لبرنامج استعراض الانترنت، ثم حاول ارسال الوثيقة من الوحدة التابعة   للانترنت مرة أخرى. اذا استمرت المشكلة، اتصل بمسؤول النظام الخاص بك.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "لا يمكن ارسال البريد الالكتروني.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "قد تكون تحاول ارسال ملحقات متعددة.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "حدد ملفات أقل. عندئذ،  حاول  ارسال الوثائق من الوحدة التابعة للانترنت مرة أخرى.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "لا يمكن ارسال البريد الالكتروني.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "قد تقوم بارسال بريد الكتروني الى العديد من المستلمين.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "قم بارسال البريد الالكتروني الى مستلمين أقل.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "لا يمكن تكوين الملحقات.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "قد يكون تم حذف  بعض  الملفات المؤقتة المطلوبة قبل تكوين الملحقات. هذا الخطأ يمكن أن يحدث اذا  كان  قد تم محو ذاكرة التخزين المؤقت لبرنامج الاستعراض قبل ارسال البريد   الالكتروني.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "لا يمكن تكوين الملحقات.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "قد يكون تم حذف  بعض  الملفات المؤقتة المطلوبة قبل تكوين الملحقات. هذا الخطأ يمكن أن يحدث اذا  كان  قد تم محو ذاكرة التخزين المؤقت لبرنامج الاستعراض قبل ارسال البريد   الالكتروني.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "لا يمكن تكوين الملحقات بواسطة تطبيق البريد الالكتروني.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "لا يمكن ارسال البريد الالكتروني الى المستلم المحدد.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "قد يكون المستلم غير موجود بدليل العناوين.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "قم بالتأكد من اسم المستلم ثم حاول ارسال الوثيقة مرة أخرى.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "لا يمكن ارسال البريد الالكتروني الى المستلم المحدد.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "قد يكون عنوان البريد الالكتروني بنسق غير صحيح.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "تأكد من ادخال عنوان البريد الالكتروني الصحيح وحاول ارسال الوثيقة مرة أخرى.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_NO_MESSAGES_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "لا يمكن ارسال البريد الالكتروني.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "قد يكون البريد الالكتروني طويل جدا.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "قم بتقليل نص البريد الالكتروني ثم حاول ارسال البريد الالكتروني مرة أخرى.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "لا يمكن تكوين البريد الالكتروني.",
		email_applet_MAPI_INVALID_SESSION_explanation: "قد يكون حدث فشل في برنامج البريد الالكتروني عند محاولة تكوين البريد الالكتروني.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "قم باعادة بدء الوحدة   التابعة للبريد الالكتروني الخاصة بك ثم حاول ارسال الوثيقة من الوحدة التابعة  للانترنت مرة أخرى.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "قد يكون لم يتم تنسيق عنوان البريد الالكتروني بطريقة صحيحة.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "لا يمكن ارسال البريد الالكتروني الى المستلم المحدد.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "قد يكون عنوان البريد الالكتروني بنسق غير صحيح.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "تأكد من أنك قمت بادخال عنوان البريد الالكتروني الصحيح وقم بارسال الوثيقة مرة أخرى.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "لا يمكن أن يقوم برنامج البريد الالكتروني بتنفيذ التصرف المطلوب.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "قام تطبيق البريد الالكتروني بارجاع خطأ غير متوقع.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "حاول ارسال الوثيقة  من  برنامج الانترنت مرة أخرى.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "لا يتوافر العدد المطلوب من القيم بخاصية من الخصائص.",
		error_property_cardinality_explanation: "يوجد لبعض الخصائص حد أدنى وحد أقصى لعدد القيم.",
		error_property_cardinality_userResponse: "استخدم المساعدة الخاصة بموضع المؤشر لتحديد الخاصية التي تتطلب الحد الأدنى لعدد القيم. عندئذ، حدد الحد الأدنى لعدد القيم ثم أعد المحاولة.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "يجب تحديد اسم ملف.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "حدد اسم ملف ثم حاول مرة أخرى.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "يحتوي البرنامج المساعد ${0} على أخطاء.",
		plugin_error_explanation: "حدث خطأ عند تقييم JavaScript للبرنامج المساعد   ${0}. اذا قمت بالاستمرار باستخدام الوحدة التابعة للانترنت، قد تواجه أخطاء   اضافية.",
		plugin_error_userResponse: "اتصل بمسؤول النظام الخاص بك.",
		plugin_error_adminResponse: "توجد مشكلة في البرنامج المساعد تتطلب أن يتم   حلها من خلال جهة توريد البرنامج المساعد. ومن المفضل أن تقوم بازالة البرنامج   المساعد من توصيف برنامج الانترنت حتى يتم حل المشكلة الموجودة بالبرنامج   المساعد.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "لا يمكن فتح قالب الادخال.",
		open_old_format_entry_template_error_explanation: "يقوم قالب الادخال باستخدام نسق قديم غير مدعم في الوحدة التابعة للانترنت.",
		open_old_format_entry_template_error_userResponse: "قم بطلب تعديل قالب   الادخال من مسؤول النظام.",
		open_old_format_entry_template_error_adminResponse: "استخدم Application Engine أو Workplace XT Entry Template Designer لحفظ نسخة تم تحديثها من قالب الادخال.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "لا يمكن فتح قالب الادخال.",
		open_custom_object_entry_template_error_explanation: "لا تدعم الوحدة التابعة للانترنت نوع قالب الادخال التالي: قوالب ادخال Custom Object.",
		open_custom_object_entry_template_error_userResponse: "قم بفتح قالب ادخال مختلف.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "لا يمكن فتح عنصر eForms.",
		open_forms_object_error_explanation: "برنامج الانترنت لا يدعم أنواع عنصر eForms التالية: قالب النموذج، بيانات النموذج، سياسة الوثيقة وسياسة مسار العمل.",
		open_forms_object_error_userResponse: "قم بفتح وثيقة أخرى.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "لا يمكنك استخدام قالب الادخال ${0}.",
		entry_template_folder_restricted_error_explanation: "يقوم قالب الادخال باضافة بنود الى الحافظة ${1}، ولا يتوافر لديك التصاريح المناسبة لاضافة بنود الى هذه الحافظة.",
		entry_template_folder_restricted_error_userResponse: "حدد قالب ادخال  مختلف  أو أطلب من مسؤول النظام منحك التصاريح المناسبة لاضافة بنود الى الحافظة ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "لا يمكن فتح قالب الادخال.",
		open_records_entry_template_error_explanation: "لا تدعم الوحدة التابعة للانترنت نوع قالب الادخال التالي: قوالب ادخال Declare as Record.",
		open_records_entry_template_error_userResponse: "قم بفتح قالب ادخال مختلف.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "لا يمكن فتح مسار العمل.",
		open_workflow_error_explanation: "الوحدة التابعة للانترنت لا تدعم مسارات العمل المفتوحة",
		open_workflow_error_userResponse: "قم بفتح وثيقة أخرى.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "لا يمكن فتح الوثيقة.",
		viewer_unable_to_view_error_explanation: "لم يتم توصيف برنامج مشاهدة للوثائق بهذا النوع، أو برنامج المشاهدة الذي تم توصيفه غير متوافق مع النظام الخاص بك.",
		viewer_unable_to_view_error_userResponse: "أطلب من مسؤول النظام توصيف برنامج مشاهدة للوثائق بهذا النوع، وتأكد من أن برنامج المشاهدة الذي تم توصيفه يعمل مع نظام المستخدم.",
		viewer_unable_to_view_error_adminResponse: "قم باستخدام أدوات الادارة لتوصيف برنامج المشاهدة لهذا النوع من الوثائق.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "لا يمكن فتح البحث.",
		search_cannot_open_error_explanation: "لم يتم توصيف خاصية البحث لسطح المكتب هذا.",
		search_cannot_open_error_userResponse: "أطلب من مسؤول النظام الخاص بك أن   يقوم بمنحك امكانية توصل لسطح المكتب تتضمن خاصية البحث أو أن يقوم بتحديث سطح  المكتب ليتضمن خاصية البحث.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "لم يتم تحميل الوثيقة.",
		viewer_document_load_failed_error_explanation: "لم يتمكن برنامج المشاهدة Daeja ViewONE Professional من فتح الوثائق.",
		viewer_document_load_failed_error_userResponse: "للحصول على المزيد من   التفاصيل، ارجع الى رسالة الخطأ المعروضة في برنامج المشاهدة.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "لا يمكن مشاهدة الوثيقة.",
		viewer_session_expired_explanation: "لا يمكن استرجاع محتويات الوثيقة.",
		viewer_session_expired_userResponse: "حاول تسجيل الدخول مرة أخرى. اذا استمرت المشكلة، قد لا يمكن تشغيل وحدة خدمة التطبيق. أطلب من مسؤول النظام   التحقق من سجلات أخطاء IBM Content Navigator أو اعادة بدء وحدة الخدمة.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "لا يمكن مشاهدة الوثيقة.",
		ajaxViewer_getPage_failed_explanation: "قام برنامج مشاهدة AJAX Viewer   باستلام استجابة غير صحيحة أثناء استرجاع محتويات الصفحة. قد لا يتم تشغيل  وحدة  خدمة التطبيق.",
		ajaxViewer_getPage_failed_userResponse: "قم باغلاق برنامج استعراض  الانترنت  الخاص بك وأعد تسجيل الدخول مرة أخرى. اذا استمرت المشكلة، أطلب من  مسؤول النظام  الرجوع الى ملفات سجلات أخطاء وحدة خدمة تطبيق الانترنت أو اعادة  بدء وحدة الخدمة.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "لم يتم ايجاد ‏‎Java Runtime Environment ‎(JRE)‎‏ على وحدة العمل الخاصة بك.",
		viewer_java_plugin_not_found_explanation: "اما البرنامج المساعد لم يتم ايجاده، أو لم يتم تركيب النسخة الصحيحة من JRE.",
		viewer_java_plugin_not_found_userResponse: "تحقق مما اذا كان قد تم تركيب JRE. على سبيل المثال، في موجه الأوامر، أدخل الأمر التالي: Java -version. اذا لم يكن قد تم تركيب JRE أو تم تركيبه بمستوى نسخة غير صحيح، قم بتركيب النسخة المناسبة الى JRE. يتم تضمين كشف النسخ المدعمة في وثيقة <i>Hardware and software prerequisites for IBM Content Navigator</i> بموقع IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "لا يمكن عرض الوثيقة ببرنامج الاستعراض   الانترنت هذا.",
		viewer_pdf_plugin_not_found_explanation: "البرنامج المساعد الذي يتم   استخدامه لعرض وثائق PDF في برنامج استعراض الانترنت غير موجود.",
		viewer_pdf_plugin_not_found_userResponse: "سيتم تحميل ملف PDF الى حاسب   العمل بدلا من عرضه في نافذة برنامج المشاهدة.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "لا يمكن اضافة البند التالي الى مستودع التخزين: ${0}.",
		add_document_single_item_error_explanation: "يمكن أن يحدث هذا الخطأ لأحد الأسباب التالية:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>تحاول اضافة وثيقة تم نقلها أو حذفها.</li>" + "<li>تحاول اضافة وثيقة تم اعادة تسميتها.</li>" + "<li>تحاول اضافة وثيقة تالفة.</li>" + "<li>تحاول اضافة وثيقة يتم فتحها في تطبيق آخر.</li>" + "<li>تحاول اضافة حافظة الى مستودع التخزين.</li>" + "<li>لا تتوافر لديك التصاريح المناسبة بنظام التشغيل للتوصل الى الوثيقة.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "يجب اجراء التصرف المناسب لحل المشكلة:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>اذا تم نقل أو اعادة تسمية الوثيقة، قم بايجاد الوثيقة بنظام الملفات الخاص بك ثم حاول اضافته  مرة أخرى.</li>" + "<li>اذا كانت الوثيقة مفتوحة في تطبيق آخر، قم باغلاقها ثم حاول اضافتها مرة أخرى.</li>" + "</ul>" + "<br>لا يمكنك اضافة حافظات الى مستودع التخزين.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "لا يمكن اضافة بنود ${0} التالية الى مستودع التخزين: ${1}",
		add_document_multiple_items_error_explanation: "توجد مشكلة بأحد البنود تمنع اضافة أي من البنود الى مستودع التخزين. يمكن أن يحدث هذا الخطأ لأحد الأسباب التالية:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>تحاول اضافة وثيقة تم نقلها أو حذفها.</li>" + "<li>تحاول اضافة وثيقة تم اعادة تسميتها.</li>" + "<li>تحاول اضافة وثيقة تالفة.</li>" + "<li>تحاول اضافة وثيقة يتم فتحها في تطبيق آخر.</li>" + "<li>تحاول اضافة حافظة الى مستودع التخزين.</li>" + "<li>لا تتوافر لديك التصاريح المناسبة بنظام التشغيل للتوصل الى الوثيقة.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "يجب اجراء التصرف المناسب لحل المشكلة:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>اذا تم نقل أو اعادة تسمية وثيقة، قم بايجاد الوثيقة بنظام الملفات الخاص بك ثم حاول اضافة البنود مرة أخرى.</li>" + "<li>اذا كانت الوثيقة مفتوحة في تطبيق آخر، قم باغلاقها ثم حاول اضافة البنود مرة أخرى.</li>" + "<li>اذا تم حذف وثيقة أو اذا كانت تالفة، قم بالغاء تحديد البند ثم حاول اضافة البنود المتبقية مرة أخرى.</li>" + "</ul>" + "<br>لا يمكنك اضافة حافظات الى مستودع التخزين.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "لا يمكنك سحب ووضع البنود من هذا المكان.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "لا يمكن فتح عنصر eForms.",
		open_forms_work_object_error_explanation: "لا تدعم الوحدة التابعة للانترنت نوع عنصر نماذج eForms التالي: سياسة مسار العمل.",
		open_forms_work_object_error_userResponse: "قم بفتح وثيقة أخرى.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "لا يمكن فتح الوثيقة.",
		viewer_privilege_to_view_error_explanation: "لا تتوافر لديك الصلاحيات المناسبة لمشاهدة الوثيقة.",
		viewer_privilege_to_view_error_userResponse: "أطلب من مالك الوثيقة أو مسؤول النظام الخاص بك أن يمنحك التصاريح المناسبة لمشاهدة الوثيقة.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "لا يمكن اضافة البنود الى مستودع التخزين.",
		add_document_too_many_items_error_explanation: "يمكنك اضافة حتى ${0} بند في المرة. تحاول اضافة ${1} بند.",
		add_document_too_many_items_error_userResponse: "قم بازالة بعض البنود من   الكشف الخاص بك ثم حاول اضافة البنود مرة أخرى. يمكنك أيضا الاتصال بموجه   النظام الخاص بك لزيادة الحد الأقصى لعدد الوثائق التي يمكنك اضافتها في المرة   الواحدة الى سطح المكتب هذا.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "لا يمكن تكوين وصلة للوحدة التابعة للانترنت باستخدام عنوان URL التالي: ${0}.",
		http_ltpa_expired_explanation: "انتهت صلاحية مفتاح LTPA المرفق مع جلسة التصفح الخاصة بك.",
		http_ltpa_expired_userResponse: "أعد بدء برنامج تصفح الانترنت الخاص بك وحاول تسجيل الدخول مرة أخرى. اذا استمرت المشكلة، قم بابلاغ مسؤول النظام الخاص بك عن هذا الخطأ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "لا يمكن اضافة الوثيقة الى الحافظة ${0}.",
		dnd_no_privilege_error_explanation: "التصاريح الخاصة بالوثيقة تمنع اضافة   أي وثائق الى الحافظة.",
		dnd_no_privilege_error_userResponse: "قم باضافة الوثيقة الى حافظة أخرى.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "لا يمكن تعديل البنود.",
		modify_document_too_many_items_error_explanation: "يمكنك تعديل حتى ${0}   بند/بنود في كل مرة. تحاول تعديل ${1} بند/بنود.",
		modify_document_too_many_items_error_userResponse: "حدد بنود أقل وحاول   تعديل البنود مرة أخرى. يمكنك أيضا الاتصال بمسؤول النظام لزيادة الحد الأقصى   لعدد البنود التي يمكنك تعديلها في المرة الوحدة من سطح المكتب هذا.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "لا يمكنك استخدام الفئة ${0}.",
		add_document_multiple_unique_values_error_explanation: "تحتوي الفئة ${0}  على واحدة أو أكثر من الخصائص التي تتطلب قيمة متفردة لكل  وثيقة. عند اضافة عدة  وثائق، ستقوم كل الوثائق باستخدام نفس القيم.",
		add_document_multiple_unique_values_error_userResponse: "قم بتحديد فئة   مختلفة أو اضافة الوثائق بطريقة منفصلة.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "لا يمكنك استخدام قالب الادخال ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "يتطلب قالب الادخال ${0} أن تقوم باضافة وثائق الى الفئة ${1}. لكن، تحتوي   الفئة ${1} على واحدة أو أكثر من الخصائص التي تتطلب قيمة متفردة لكل وثيقة. عند اضافة عدة  وثائق، ستقوم كل الوثائق باستخدام نفس القيم.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "قم  بتحديد قالب ادخال مختلف أو اضافة الوثائق بطريقة منفصلة.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "لا يمكنك استخدام قالب الادخال ${0}.",
		entry_template_class_restricted_error_explanation: "يقوم قالب الادخال باضافة البنود باستخدام الفئة ${1}، ولا يتوافر لديك التصاريح المناسبة لاضافة بنو د باستخدام هذه الفئة.",
		entry_template_class_restricted_error_userResponse: "حدد قالب ادخال مختلف أو أطلب من مسؤول النظام منحك التصاريح المناسبة لاضافة بنود باستخدام الفئة ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "لا يمكن اعادة تخصيص بند العمل الى مستخدم آخر.",
		process_reassign_error_explanation: "هذا التصرف يتم منعه بواسطة مسار   العمل.",
		process_reassign_error_userResponse: "يمكنك فتح بند العمل واستكمال الخطوة  الحالية في بند العمل.  للحصول على المزيد من المعلومات عن هذه المشكلة، أطلب  من مالك البند التحقق من أنه يمكن اعادة تخصيص بند العمل.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "لا يمكن تحميل التصرف المهيأ التالي: ${0}.",
		customaction_loadurl_error_explanation: "التصرف المهيأ ليس في مكان يمكن التوصل اليه. عنوان URL الحالي للتصرف المهيأ هو ${1}.",
		customaction_loadurl_error_userResponse: "أطلب من مسؤول النظام نقل التصرف المهيأ الى مكان يمكن التوصل اليه.",
		customaction_loadurl_error_adminResponse: "ملف JSP الذي يقوم بتعريف التصرف المهيأ يجب ادخاله كجزء من تطبيق الانترنت eClient أو تطبيق الانترنت IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "لا يمكن ايجاد الخاصية التالية: ${0}.",
		feature_invalid_explanation: "يمكن أن تحدث هذه المشكلة اذا لم تكن الخاصية  متاحة على سطح المكتب المحدد أو تم هجاء اسم الخاصية بطريقة غير صحيحة.",
		feature_invalid_userResponse: "عند الضغط على الاختيار حسنا، سيتم اعادة   توجيهك الى الخاصية المفترضة لسطح المكتب هذا. اتصل بمسؤول النظام للابلاغ عن   هذه المشكلة.",
		feature_invalid_adminResponse: "اذا كان يجب أن تكون الخاصية متاحة على سطح  المكتب، قم بتحديث توصيف سطح المكتب في أداة الادارة. اذا كان لا يجب تضمين   الخاصية في سطح المكتب أو تم هجائها بطريقة غير صحيحة، قم بالتعامل مع مطور   التطبيق الذي قام بتكوين عنوان URL لهذه الخاصية لتحديث عنوان URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "لا يمكن فتح عملية البحث ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "يجب أن تكون بمساحة فريق لفتح هذا البحث.",
		search_unsupportedTeamspaceSearch_error_userResponse: "حدد بحث مختلف.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "لا يمكن استقبال الملف التالي: ${0}.",
		wrong_import_file_type_error_explanation: "يجب أن يكون الملف هو ملف  خصائص.",
		wrong_import_file_type_error_userResponse: "حدد ملف الخصائص الذي قمت  بتصديره من أداة الادارة.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "لا يمكن ايجاد مستودع التخزين ${0} في سطح المكتب ${1}.",
		browse_repository_not_found_error_explanation: "يجب أن يكون مستودع التخزين موجود بسطح المكتب ومتاح لخاصية الاستعراض عند تحديده في معامل URL.",
		browse_repository_not_found_error_userResponse: "تأكد من أن كود مستودع التخزين المحدد في عنوان URL صحيح، ومن اضافة مستودع التخزين لسطح مكتب ${1}، واتاحة خاصية الاستعراض لمستودع التخزين.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "مستودع التخزين ${0} غير متاح لخاصية الاستعراض في سطح مكتب ${1}.",
		browse_repository_not_enabled_error_explanation: "يجب اتاحة مستودع التخزين لخاصية الاستعراض عند تحديده في معامل URL.",
		browse_repository_not_enabled_error_userResponse: "يجب اتاحة خاصية الاستعراض لمستودع التخزين ${0} في سطح مكتب ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "لا يمكن اتمام عملية البحث لأن الرابط يتضمن معيار غير صحيح.",
		invalid_xt_stored_search_criteria_error_explanation: "القيمة التالية غير صحيحة: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "أطلب من مسؤول النظام اتاحة رابط تم تحديثه.",
		invalid_xt_stored_search_criteria_error_adminResponse: "يجب تحرير الاسم والقيمة المناسبين في عنوان URL. اذا كنت لا تعرف القيم التي تعد صحيحة للخاصية، قم بفتح البحث الذي تم تخزينه في FileNet Workplace XT Search Designer لتحديد قيمة صحيحة.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "لا يمكن فتح عملية البحث   عبر-مستودع التخزين.",
		unified_search_invalid_fixed_value_error_explanation: "يتضمن البحث خلال مستودع التخزين معيار غير صحيح. يمكن أن تحدث هذه المشكلة عندما يكون للمعيار قيمة ثابتة غير متوافقة مع الخصائص الأخرى في المناظرة. على سبيل المثال، يمكن أن تحدث هذه المشكلة اذا اكنت القيمة الثابتة عبارة عن مجموعة حروف لكن الخصائص الأخرى في المناظرة أرقام صحيحة.",
		unified_search_invalid_fixed_value_error_userResponse: "اذا كان لديك التصاريح المناسبة لتحرير البحث، قم بازالة المعيار غير الصحيح وحفظ البحث مرة أخرى. واذا كان لديك التصاريح المناسبة لتحرير البحث، أطلب من مالك البحث أو من مسؤول النظام أن يقوم بحفظ عملية البحث مرة أخرى.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "لا يمكن اتمام الطلب الخاص بك.",
		launch_action_invalid_json_error_explanation: "البيانات التي تم امرارها الى الوحدة التابعة للانترنت غير صحيحة.",
		launch_action_invalid_json_error_userResponse: "قم باعلام مسؤول النظام بالتطبيق الذي تقوم باستخدامه عند حدوث هذه المشكلة.",
		launch_action_invalid_json_error_adminResponse: "لم يقم تطبيق الوحدة التابعة بارسال عنصر JSON صحيح الى الوحدة التابعة للانترنت. اتصل بالمسؤول عن دعم برامج IBM للحصو على المزيد من المساعدة.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "لا يمكن اتمام الطلب الخاص بك.",
		launch_action_not_found_error_explanation: "لم يتم توصيف تصرف ${0} لأية قوائم على سطح مكتب ${1}.",
		launch_action_not_found_error_userResponse: "أطلب من مسؤول النظام توصيف سطح مكتب ${1} لاستخدام القائمة التي تحتوي على التصرف ${0} أو لتخصيصك لسطح مكتب يتضمن التصرف ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "لا يمكن اتمام الطلب الخاص بك.",
		launch_action_repository_not_found_error_explanation: "لم يتم ارفاق مستودع التخزين ${0} مع سطح المكتب ${1}.",
		launch_action_repository_not_found_error_userResponse: "أطلب من مسؤول النظام ارفاق مستودع تخزين ${0} مع سطح مكتب ${1} أو تخصيصك لسطح مكتب يتضمن مستودع التخزين ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "لا يمكن فتح مساحة الفريق.",
		teamspace_cannot_open_error_explanation: "لم يتم توصيف خاصية مساحة الفريق لسطح المكتب هذا.",
		teamspace_cannot_open_error_userResponse: "أطلب من مسؤول النظام منحك امكانية توصل لسطح المكتب تتضمن خاصية مساحة الفريق أو  تحديث سطح المكتب ليتضمن خاصية مساحة الفريق.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "حدث خطأ عند انهاء تخصيص المحتوى المنقح.",
		viewer_redaction_checkin_failed_explanation: "قام المراجع باستلام استجابة خطأ أثناء تخصيص المحتوى المنقح.",
		viewer_redaction_checkin_failed_userResponse: "أطلب من مسؤول النظام مراجعة ملفات السجل لوحدة خدمة تطبيق الانترنت.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "لا يمكنك اضافة وثائق الى مستودع التخزين هذا.",
		add_document_odserver_odwek_version_od_error_explanation: "نسخة وحدة خدمة IBM Content Manager OnDemand أو ODWEK الحالية ليس بالحد الأدنى المطلوب لدعم اضافة الوثائق الى مستودع تخزين Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "أطلب من مسؤول النظام التحقق من نسخ Content Manager OnDemand Server و ODWEK المطلوبة لدعم اضافة الوثائق الى مستودعات تخزين Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "لا يمكن اضافة البنود الى مستودع التخزين.",
		add_document_too_many_items_od_error_explanation: "بالنسبة لمستودعات تخزين IBM Content Manager OnDemand، يمكنك اضافة بند واحد فقط في كل مرة.",
		add_document_too_many_items_od_error_userResponse: "قم بازالة بعض البنود من الكشف الخاص بك وحاول اضافة بنود مرة أخرى باضافة بند واحد في كل مرة.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "لا يمكن اضافة البند الى مستودع التخزين.",
		add_document_filesize_empty_od_error_explanation: "لا يمكنك اضافة ملفات خالية الى مستودع تخزين IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "قم باضافة محتوى الملف وحاول اضافة الملف مرة أخرى، أو قم باضافة بند مختلف.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "لا يمكن فتح عملية البحث   عبر-مستودع التخزين.",
		unified_search_repository_not_found_error_explanation: "عمليات البحث عبر   مستودع التخزين تتضمن واحد أو أكثر من مستودعات التخزين الغير صحيحة. يمكن أن تحدث هذه المشكلة عند حذف مستودعات التخزين المتضمنة في عملية البحث من التطبيق أو ازالتها من سطح المكتب الحالي.",
		unified_search_repository_not_found_error_userResponse: "اذا كان يتوافر لديك التصاريح اللازمة لتحرير البحث، قم بحفظ عملية البحث مرة أخرى. عند حفظ عملية البحث، ستقوم الوحدة التابعة للانترنت بازالة مستودعات التخزين غير الصحيحة من عملية البحث. واذا كان لديك التصاريح المناسبة لتحرير البحث، أطلب من مالك البحث أو من مسؤول النظام أن يقوم بحفظ عملية البحث مرة أخرى.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "لا يمكن تكوين وثيقة جديدة.",
		edit_document_using_office_online_error: "لا يمكن فتح الوثيقة.",
		edit_document_using_office_online_error_explanation: "لم يتم توصيف عنوان URL لوحدة خدمة Microsoft Office Online Server.",
		edit_document_using_office_online_error_userResponse: "قبل استخدام Office Online، يجب أن يقوم مسؤول النظام باتاحة Office Online Server أولا بمستودع التخزين وتحديد عنوان URL لوحدة خدمة Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "لا يمكن فتح الوثيقة في Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "أطلب من مسؤول النظام تحديث MS Office Online Server Integration.<br><br> اذا كان المستخدم يريد التوصل الى هذه الوثيقة من Microsoft Office Online، اذهب الى صفحة تحرير عملية التكامل لمستودع التخزين وقم بتحديث MS Office Online Server Integration ليتضمن الفئة في كشف الفئات التي سيتم تعديلها لدعم office online. ",		
		browser_not_support_this_viewer: "برنامج المشاهدة الذي تم توصيفه غير متوافق مع المتصفح الخاص بك.",
		browser_not_support_this_viewer_explanation: "لا يتم دعم ${0} بواسطة برنامج الاستعراض.",
		browser_not_support_this_viewer_userResponse: "استخدم برنامج مشاهدة آخر لفتح الوثيقة. يتم تضمين كشف برنامج الاستعراض المدعمة في وثيقة <i>المتطلبات الرئيسية لأجهزة وبرامج IBM Content Navigator</i> بموقع IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "معلومات مسار العمل",
		process_information_info_text: "البند المحدد يتم تشغيله حاليا على مسارات   العمل التالية.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "يساوي",
		operator_NOTEQUAL: "لا يساوي",
		operator_LIKE: "مثل",
		operator_STARTSWITH: "يبدأ بواسطة",
		operator_ENDSWITH: "ينتهي بواسطة",
		operator_NOTLIKE: "ليس مثل",
		operator_NULL: "خالي",
		operator_NOTNULL: "غير خالي",
		operator_LESS: "أقل من",
		operator_LESSOREQUAL: "أقل من أو يساوي",
		operator_GREATER: "أكبر من",
		operator_GREATEROREQUAL: "أكبر من أو يساوي",
		operator_BETWEEN: "بين",
		operator_NOTBETWEEN: "ليس بين",
		operator_IN: "يتضمن كل",
		operator_INANY: "يتضمن أي",
		operator_NOTIN: "يستبعد كل",
		operator_CONTAINS: "يتضمن",

		/* SearchForm widget */
		search_button_tooltip: "البحث عن الوثائق التي تطابق معيار البحث الخاص بك.",
		reset_button_tooltip: "يتم ارجاع البحث الى القيم المفترضة المحددة بواسطة مسؤول النظام الخاص بك.",
		clear_button_tooltip: "يتم ازالة كل القيم التي قمت بادخالها للبحث.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "حدد بحث",
		append_to_search: "الحاق الى البحث",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "بحث جديد",
		new_unified_search: "عملية بحث جديدة عبر مستودع التخزين",
		searh_name_contains: "يحتوي اسم البحث على",
		keep_search_criteria_expanded: "ابقاء معيار البحث مفتوح",
		showing_results: "عرض النتائج الى:",
		open_in_new_window: "فتح في نافذة جديدة",
		open_in_new_tab: "فتح في علامة تبويب جديدة",
		close_tab: "اغلاق علامة تبويب",
		add_repository: "اضافة مستودع تخزين",
		edit_repository: "تحرير مستودع التخزين",
		remove_repository: "ازالة",
		search_scope: "نطاق البحث",
		search_class_template: "الفئة",
		object_type_version: "نوع ونسخة العنصر",
		not_applicable: "غير مناسب",
		unified_search_including_subfolders: " (بما يتضمن الحافظات الفرعية)",
		unified_search_dialog_intro_text: "حدد مستودع التخزين وعملية البحث أو   الفئات التي تريد تضمينها في البحث.",
		unified_search_class_or_template: "الفئة أو القالب",

		select_object_fieldset_legend: "هل تريدايجاد البنود المراد الحاقها:",
		select_object_create_new_search: "بحث جديد",
		select_object_search_template: "بحث موجود",

		search_criteria: "معيار البحث:",
		search_criteria_no_colon: "معيار البحث",
		search_in_multiple: "بحث في (${0}):",
		search_location_including_subfolders: "${0} بما يتضمن الحافظات الفرعية",
		search_class: "الفئة:",
		search_class_multiple: "الفئة (${0}):",
		search_class_including_subclasses: "${0} بما يتضمن الفئات الفرعية",
		search_class_all_pseudo: "كل",
		search_results: "نتائج البحث",
		select_operator: "حدد معامل",
		ending_value: "قيمة النهاية للخاصية ${0} هي:",
		search_options: "اختيارات البحث:",
		search_version: "النسخة:",
		search_released_version: "النسخة التي تم اصدارها",
		search_current_version: "النسخة الحالية",
		search_all_versions: "كل النسخ",
		search_file_type_filter: "مرشح بيانات نوع الملف:",
		search_one_file_type: "1 نوع الملف",
		search_many_file_types: "${0} أنواع الملفات",
		search_action_filter: "مرشح بيانات التصرف:",
		search_action_filter_hover_help: "تقليل النتائج بحيث تتضمن الملفات التي قام المستخدمين باجراء تصرف بها فقط.<br/>على سبيل المثال، يمكنك البحث عن الوثائق التي قمت باضافتها في 20 سبتمبر, 2012 فقط.",
		search_action_filter_enabled: "يتم اتاحة مرشح بيانات التصرف",
		search_enable: "‏اتاحة‏",
		search_disable: "الغاء-اتاحة",
		search_by: "بواسطة",
		search_added: "اضافة",
		search_modified: "تعديل في",
		search_checked_out: "تخصيص للتغيير",
		search_date_operator_on: "تشغيل",
		search_date_operator_not_on: "ليس في",
		search_date_operator_before: "قبل",
		search_date_operator_after: "بعد",
		search_version_hover_help_p8: "النسخة التي تم اصدارها متاحة لكل   المستخدمين. وتعني الوثيقة التي تكون هي النسخة الحالية أن مستخدم أو أكثر   يمكنه تحرير هذه الوثيقة.",
		search_version_hover_help_cm: "النسخة الحالية هي أحدث نسخة للبند.",
		search_using: "البحث عن البنود المطابقة:",
		search_property_and_text_criteria: "كلا من قيم الخصائص ومعيار النص",
		search_property_or_text_criteria: "اما قيم الخصائص أو معيار النص",
		search_property_and_text: "كلا من الخاصية ومعيار النص",
		search_property_or_text: "اما الخاصية أو معيار النص",
		search_property_options: "اختيارات الخاصية:",
		search_property_option_match_all: "كل الخصائص",
		search_property_option_match_any: "أي من الخصائص",
		search_property_option_match_all_summary: "مطابقة كل",
		search_property_option_match_any_summary: "مطابقة أي",
		search_total_count_type_total: "الاجمالي",
		search_total_count_type_atleast: "على الأقل",
		search_content_size_filter: "مرشح حجم المحتوى:",
		search_content_size_filter_any: "أي حجم للمحتوى",

		/* Search work options */
		search_work_filter: "مرشح بيانات بند العمل:",
		search_work_filter_hover_help: "تقليل النتائج لكي تتضمن البنود التي توجد في مسار العمل فقط. على سبيل المثال، يمكنك تقليل النتائج بحيث تتضمن بنود العمل الفعالة فقط.<br /><br />لا ينطبق هذا الاختيار اذا كنت تريد مشاهدة كل النسخ للبنود التي يتم ارجاعها بواسطة البحث.",
		search_work_filter_enabled: "يتم اتاحة مرشح بيانات بند العمل",
		search_work_filter_status: "الحالة:",
		search_work_filter_step: "الخطوة:",
		search_work_filter_owner: "المالك:",
		search_work_filter_status_all: "كل البنود",
		search_work_filter_status_active: "البنود الفعالة",
		search_work_filter_status_suspended: "البنود المعلقة",
		search_work_filter_process_all: "كل مسارات العمل",
		search_work_filter_step_all: "كل الخطوات",
		search_work_filter_owner_all: "كل المستخدمين",
		search_work_filter_step_error: "اسم الخطوة غير موجود.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "لا يمكن اتمام البحث بدون تحديد المزيد من المعلومات. أدخل قيمة لشرط واحد على الأقل.",
		search_insufficient_input_box: "لا يمكن اتمام البحث بدون تحديد المزيد من المعلومات. أدخل معيار البحث عن النص أو حدد قالب بيانات التعريف.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "لا يمكن توصيف البحث للتشغيل عند الفتح بدون معلومات اضافية. أدخل قيمة لشرط واحد على الأقل.",
		search_member_required: "لمشاركة عملية البحث هذه مع مستخدمين ومجموعات معينة، حدد مستخدم أو مجموعة واحدة على الأقل لمشاركة عملية البحث هذه معها.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "هل تريد الاغلاق بدون حفظ التغييرات  التي  قمت بها؟",
		search_prompt_close_all_without_save: "هل تريد اغلاق كل علامات التبويب بدون حفظ التغييرات التي قمت بها؟",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "أحد أنواع معيار البحث التالية غير صحيحة   لمستودع التخزين هذا: ${0}. لتنفيذ عملية البحث في برنامج الانترنت، يجب ازالة  المعيار غير الصحيح. اذا قمت بحفظ عملية البحث، سيتم ازالة المعيار غير  الصحيح. اذا لم تكن تريد تغيير عملية البحث، قم باغلاق عملية البحث.",
		search_invalid_repository: "واحد أو أكثر من مستودعات التخزين",
		search_invalid_class: "واحد أو أكثر من الفئات",
		search_invalid_folder: "واحد أو أكثر من الحافظات",
		search_invalid_file_type: "واحد أو أكثر من أنواع الملفات",
		search_invalid_property: "واحد أو أكثر من مستودعات التخزين",
		search_invalid_text_search: "معيار بحث النص",
		search_invalid_work: "معيار مرشح بيانات بند العمل",

		search_operator_pulldown_missing: "يجب ادخال معامل. حدد معامل من القائمة المسقطة. اذا لم يتم عرض أية معاملات، أطلب من مسؤول النظام التحقق من علامة التبويب <b>بحث</b> في أداة الادارة لمعرفة ما اذا كان قد تم اخفاء كل المعاملات. اذا كانت هذه عملية بحث عبر مستودعات التخزين، قد لا تحتوي القائمة المسقطة على أية معاملات اذا كانت الخصائص التي تم مناظرتها لبعضها البعض لا تحتوي على أية معاملات مشتركة.",

		/*SearchBuilder */
		open_search_builder: "بحث جديد",
		document_type: "الفئة",
		show_all_properties: "عرض كل الخصائص",
		text_search_label: "ايجاد بنود بالمصطلحات التالية:",
		text_search_place_holder: "استخدم مجموعة المصطلحات والمعاملات: * ? أو \"عبارات التطابق التام\"",
		text_search_place_holder_box: "استخدم مجموعة المصطلحات والمعاملات: AND و OR و NOT و  \"عبارة التطابق التام\"",
		text_search_place_holder_cascade_proximity: "استخدام مجموعة من المصطلحات والمعاملات: * أو ?",
		text_search_place_holder_common: "استخدم مجموعة المصطلحات \"وعبارات التطابق التام\"",
		text_search_hover_help_p8: "استخدم علامة النجمة (*) أو علامة الاستفهام (?) كحرف ابدال. قم باستخدام علامات التنصيص المزدوجة (\"\") للمطابقة التامة.",
		text_search_hover_help_p8_only_crs: "استخدم علامة النجمة (*) أو علامة الاستفهام (?) كحرف ابدال. قم باستخدام علامات التنصيص المزدوجة (\"\") للمطابقة التامة. عند تحديد عدة مصطلحات، تقوم عملية البحث عبر-مستودعات التخزين بارجاع بنود تحتوي على أي من المصطلحات.",
		text_search_hover_help_cm: "استخدم علامة النجمة (*) أو علامة الاستفهام (?) كحرف ابدال. قم باستخدام علامات التنصيص المزدوجة (\"\") للمطابقة التامة. استخدم علامة الطرح (-) قبل الشروط المراد استبعادها، وعلامة الجمع (+) قبل الشروط المراد تضمينها.",
		text_search_hover_help_box: "قم باستخدام AND بين العبارات للمطابقة لكل العبارات. قم باستخدام OR بين العبارات لمطابقة أي من العبارات. قم باستخدام علامات التنصيص المزدوجة (\"\") للمطابقة التامة. ويمكن اسباق العبارة بالمعامل NOT لاستبعاده.",
		text_search_hover_help_common: "قم باستخدام علامات التنصيص المزدوجة (\"\") للمطابقة التامة. عند تحديد عدة مصطلحات، تقوم عملية البحث عبر-مستودعات التخزين بارجاع بنود تحتوي على كل المصطلحات.",
		text_search_options: "اختيارات النص:",
		text_search_options_hover_help: "اذا قمت باستخدام أي معاملات خلاف حروف الابدال، يجب تحديد المعاملات المتقدمة.",
		text_search_option_any: "أي من المصطلحات",
		text_search_option_all: "كل المصطلحات",
		text_search_option_proximity: "في نطاق تقارب الكلمات:",
		text_search_option_none: "المعاملات المتقدمة",
		text_search_option_authoring: "بحث النص هو:",
		text_search_option_authoring_hover_help: "حدد اختيار يحدد كيف تريد اتاحة معيار بحث النص للمستخدمين. اذا لم تكن تريد تضمين أي معيار بحث للنص في عملية البحث، قم باخفاء الاختيار. خلاف ذلك، يمكنك السماح بتحرير معيار بحث النص أو جعله مطلوبا بواسطة المستخدمين أو جعله للقراءة فقط للمستخدمين.",
		text_search_option_hide: "اخفاء المعايير",
		text_search_option_hide_hover_help: "يستخدم هذا الاختيار اذا كنت لا تريد   تضمين أي من معايير البحث للنص في عملية البحث أو للسماح للمستخدمين الآخرين   بتحديد معيار بحث النص.",
		text_search_option_in: "في شارة HTML/XML ‏${0}",
		text_search_option_paragraph: "في نفس الفقرة",
		text_search_option_sentence: "في نفس العبارة",
		text_search_option_vql: "استعلام VQL",
		text_search_option_none_hover_help: "استخدم - بحيث تسبق المصطلحات التي تريد استبعادها.",
		text_search_option_cascade_proximity_hover_help: "لقصر نتائج البحث على العبارات التي تظهر في مدى الكلمات التي لا تتضمن عبارات مطابقة تماما.",

		box_search_metadata: "بيانات التعريف:",
		box_search_select_template: "تحديد قالب",
		box_search_no_templates: "لا توجد قوالب متاحة",
		box_text_search_options_search_within: "نطاق البحث:",
		box_text_search_options_search_within_everything: "كل شيء",
		box_text_search_options_search_within_file_content: "محتوى الوثيقة",
		box_text_search_options_search_within_tags: "شارات التعليم",
		box_text_search_options_limit_to: "البحث فقط:",

		add_property: "اضافة خاصية",
		edit_template: "تحرير البحث",
		save_search: "حفظ بحث",
		search_template_name: "الاسم:",
		search_template_desc: "الوصف:",
		auto_run: "قم بتشغيل البحث عند فتحه",
		show_in_tree: "عرض عملية البحث في هيكل تسلسل الحافظة",
		show_in_tree_hover_help: "اذا تم حفظ عملية البحث في حافظة، يتم عرضها فقط في كشف المحتويات افتراضيا. اذا قمت بتحديد هذا الاختيار، سيتم عرض عملية البحث أيضا في تسلسل الحافظة في مشاهدة الاستعراض.  لكن، يتم عرض عملية البحث في تسلسل الحافظة فقط اذا قمت بحفظ عملية البحث في حافظة.",
		share_search_with: "مشاركة بحث مع:",
		remove_member: "ازالة ${0}",
		ok_button_label: "‏حسنا‏",
		save_template: "‏حفظ‏",
		save_template_title: "اذا كنت تريد البحث بصفة متكررة عن بنود معينة، قم بحفظ معيار البحث الخاص بك.",
		remove_criterion: "ازالة",
		apply_button_label: "تطبيق",
		empty_search_results_pane: "تشغيل بحث لمشاهدة النتائج.",

		/*Search_in control   */
		folder_tree_repository_root_name: "مستودع التخزين بالكامل",

		repository_already_selected: "لا يمكن اضافة مستودع التخزين ${0} الى عملية  البحث عبر مستودع التخزين لأنه متضمن بالفعل. <br/> يمكن تضمين مستودع تخزين  في عملية البحث عبر مستودع التخزين مرة واحدة فقط. <br/>حدد مستودع تخزين  مختلف لتضمينه في عملية البحث عبر مستودع التخزين.",

		repository_limit_reached: "لا يمكن اضافة مستودع التخزين ${0} الى عملية البحث عبر مستودعات التخزين. يمكنك اضافة ${1} مستودع/مستودعات تخزين بحد أقصى الى عملية البحث.",

		nomore_criteria_toappend: "كل الخصائص المناظرة متضمنة بالفعل في معيار   البحث. ولم يتم اضافة أي خصائص الى معيار البحث.",
		nomore_criteria_toappend_regular: "تم تضمين كل الخصائص في معيار البحث بالفعل. ولم يتم اضافة أي خصائص الى معيار البحث.",

		/* OD Save Search dialog */
		reload_label: "اعادة تحميل",
		od_save_search_help_text: "أدخل اسم للبحث أو حدد بحث موجود لاستبداله",
		public_access_label: "السماح للآخرين باستخدام هذا البحث",
		od_delete_search_help_text: "حدد بحث واحد أو أكثر لحذفه",
		delete_save_searches: "حذف عمليات البحث التي تم حفظها",

		/* Unified Search */
		unified_search_enable_text_search: "تضمين معيار بحث النص",
		unified_search_text_search_enabled: "تم تضمين بحث النص",
		unified_search_mapping: "مناظرة",
		unified_search_new_mapping: "مناظرة جديدة",
		unified_search_mapping_name: "مناظرة الاسم",
		unified_search_mapping_dialog_instructions: "حدد الخصائص التي تريد مناظرتها. بعض الخصائص يمكن مناظرتها للخصائص ذات نوع بيانات مختلف. على سبيل المثال، يمكنك مناظرة خاصية مجموعة حروف لخاصية رقم صحيح. عند مناظرة خاصية لخاصية أخرى، سيتم التعامل مع  الخصائص  على أنها خاصية واحدة في عملية البحث عبر مستودع التخزين.",
		unified_search_filter_available_properties: "ترشيح الخصائص المتاحة",
		unified_search_available_properties: "الخصائص المتاحة",
		unified_search_mapped_properties: "الخصائص التي تم مناظرتها",
		unified_search_single_values: "قيم منفردة",
		unified_search_multiple_values: "قيم متعددة",
		unified_search_add_mapping: "اضافة مناظرة",
		unified_search_warn_remove_repository: "يتم استخدام مستودع التخزين المحدد  في معيار البحث.\nاذا قمت بازالة مستودع التخزين، سيتم حذف أية مناظرات ومعيار  بحث يتضمن مستودع التخزين.\n\nهل تريد ازالة مستودع التخزين؟",
		unified_search_warn_update_repository_mappings: "بتغيير اختيار الخاصية لمستودع التخزين هذا يتم التأثير على معيار البحث.\n\nيتضمن معيار البحث واحدة أو أكثر من المناظرات التي تحتوي على خاصية أو أكثر تقوم بازالتها. يجب حذف أي مناظرات تحتوي على الخصائص التي تقوم بازالتها. يجب حذف أي معايير بحث تحتوي على هذه المناظرات حتى يمكن تشغيل البحث.\n\nهل تريد تعديل اختيارات مستودع التخزين وحذف المناظرات ومعايير البحث؟",
		unified_search_warn_update_repository_mappings_reset: "تضمين معايير بحث النص لمستودع التخزين هذا يؤثر على معيار البحث خلال مستودع التخزين.\n\nيجب محو معايير بحث النص من معايير البحث خلال مستودع التخزين حتى يمكن تشغيل البحث.\n\nهل تريد تعديل اختيار مستودع التخزين وحذف معايير بحث النص؟",
		unified_search_warn_update_repository_text_criteria: "بازالة معايير بحث النص لمستودع التخزين هذا يؤثر على معيار البحث خلال مستودع التخزين.\n\nيجب حذف معايير بحث النص من معايير البحث خلال مستودع التخزين حتى يمكن تشغيل البحث.\n\nهل تريد تعديل اختيار مستودع التخزين وحذف معايير بحث النص؟",
		unified_search_warn_update_repository_text_criteria_and_mappings: "بازالة معايير بحث النص وتغيير اختيار الخاصية لمستودع التخزين هذا يؤثر على معيار البحث خلال مستودع التخزين.\n\nيجب حذف معايير بحث النص من معايير البحث خلال مستودع التخزين حتى يمكن تشغيل البحث. أيضا، تتضمن معايير بحث الخاصية مناظرة واحدة أو أكثر تتضمن خاصية واحدة أو أكثر تقوم بازالتها. يجب حذف أي مناظرات تحتوي على الخصائص التي تقوم بازالتها. يجب حذف أي معايير بحث خاصية تحتوي على هذه المناظرات حتى يمكن تشغيل البحث.\n\nهل تريد تعديل اختيارات مستودع التخزين وحذف معايير بحث النص والمناظرات ومعايير بحث الخاصية؟",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "استبعاد معايير بحث النص لمستودع التخزين هذا يؤثر على معيار البحث خلال مستودع التخزين.\n\nيجب محو معايير بحث النص من معايير البحث خلال مستودع التخزين حتى يمكن تشغيل البحث. ربما تم حذف معايير بحث النص من معيار البحث خلال مستودع التخزين حتى يمكن تشغيل البحث.\n\nهل تريد تعديل اختيارات مستودع التخزين ومحو معايير البحث؟",
		unified_search_warn_remove_mapping: "بازالة هذه المناظرة سيتم التأثير على معايير البحث.\n\nيجب حذف معايير البحث التي تستخدم المناظرة حتى يمكن تشغيل البحث.\n\nهل تريد تعديل المناظرة وحذف معايير البحث؟",
		unified_search_warn_update_mapping: "تؤثر التغييرات بهذه المناظرة على معايير البحث.\n\nيجب محو معايير البحث التي تستخدم المناظرة للتأكد من أن البحث لا يتضمن معاملات غير صحيحة أو قيم غير صحيحة.\n\nهل تريد تعديل المناظرة ومحو معايير البحث؟",
		unified_search_warn_update_mapping_not_searchable: "تؤثر التغييرات بهذه المناظرة على معايير البحث.\n\nعندما تكون كل الخصائص التي يتم مناظرتها يتم عرضها فقط، لا يمكنك استخدام المناظرة في معايير البحث. يجب حذف معايير البحث التي تستخدم المناظرة حتى يمكن تشغيل البحث.\n\nهل تريد تعديل المناظرة وحذف معايير البحث؟",
		unified_search_warn_update_mapping_box_searchable: "تؤثر التغييرات بهذه المناظرة على معايير البحث.\n\nتتضمن معايير البحث بالفعل على هذه المناظرة أكثر من مرة واحدة، واذا قمت باضافة الخاصية ${0} من مستودع التخزين ${1}، ستتضمن معايير البحث الخاصية ${0} أكثر من مرة. يجب حذف معايير البحث التي تستخدم المناظرة حتى يمكن تشغيل البحث.\n\nهل تريد تعديل المناظرة وحذف معايير البحث؟",
		unified_search_details: "تفاصيل عملية البحث عبر مستودع التخزين",
		unified_search_fixed_value_property: "خاصية القيمة الثابتة",
		unified_search_required_property: "الخاصية المطلوبة",
		unified_search_display_only_property: "خاصية للعرض فقط",
		unified_search_missing_required_properities: "لا يمكن حفظ أو تنفيذ عملية   البحث.<br/>الخصائص التالية تعد خصائص مطلوبة:${0}ويجب أن تقوم بتضمين  الخصائص  في مناظرة واضافة الخصائص مع القيم الى معيار البحث.",
		unified_search_property_repostory: "${0} (الخاصية: ${1})",
		unified_search_builder_no_mappings: "لا يمكن تشغيل البحث.<br/>يجب تكوين مناظرة خاصية، وتضمينها في <b>عرض النتائج</b> بحيث تقوم عملية البحث بعرض النتائج الخاصة بك.",
		unified_search_builder_insufficient_criteria_to_run: "لا يمكن تشغيل البحث.<br/>لا يتضمن معيار البحث قيم معيار بحث النص أو الخاصية لمستودعات التخزين التالية: ${0}بالنسبة لكل مستودع تخزين يتم تضمينه في عملية البحث، يجب ادخال معيار بحث النص، أو تكوين مناظرة الخاصية، وتضمينه في معيار الخاصية وتحديد قيمة الخاصية.",
		unified_search_builder_insufficient_criteria_to_save: "لا يمكن حفظ البحث.<br/>لا تتضمن عملية البحث معيار البحث لمستودعات التخزين التالية: ${0}بالنسبة لكل مستودع تخزين يتم تضمينه في عملية البحث، يجب تنفيذ أحد الاختيارات التالية:<ol><li>تكوين مناظرة الخاصية، وتضمينها في معيار الخاصية.</li><li>تعديل مستودع التخزين ليتضمن معيار بحث النص، وتكوين مناظرة الخاصية وتضمينها في <b>عرض النتائج</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "لا يمكن تشغيل البحث.<br/>بالنسبة لكل مستودع تخزين متضمن في البحث، يجب أن تحدد قيمة خاصية واحدة على الأقل. على سبيل المثال، يمكنك تحديد قيم للخصائص التالية: ${0}",
		unified_search_runtime_insufficient_criteria_text: "لا يمكن تشغيل البحث.<br/>معيار بحث النص مطلوب.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "لا يمكن تشغيل البحث.<br/>بالنسبة لكل مستودع تخزين متضمن في البحث، يجب أن تحدد قيمة خاصية واحدة على الأقل أو أدخل معيار بحث النص. على سبيل المثال، يمكنك تحديد قيم للخصائص التالية: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "لا يمكن تشغيل البحث.<br/>معيار بحث النص مطلوب. بالنسبة لكل مستودع تخزين متضمن في البحث، يجب أن تحدد قيمة خاصية واحدة على الأقل أو أدخل معيار بحث النص. على سبيل المثال، يمكنك تحديد قيم للخصائص التالية: ${0}",
		unified_search_invalid_criteria: "عملية البحث تتضمن معيار غير صحيح يمنع  من  تشغيل البحث.<br/>تم ازالة المعيار الغير صيح. ولكن، يجب أن تقوم بحفظ  التغييرات في البحث قبل تشغيل عملية البحث. اذا لم تكن تريد  التغييرات، قم  باغلاق عملية البحث.<br/><br/>تم ازالة أو تعديل البنود  التالية:${0}",
		unified_search_invalid_fixed_values: "لا يمكن حفظ أو تنفيذ عملية   البحث.<br/>معيار البحث التالي يحتوي على قيم ثابتة غير صحيحة: ${0}قم باجراء أحد التصرفات التالية لحل المشكلة:<ul><li>قم بازالة معيار البحث الذي يحتوي على قيم غير صحيحة</li><li>تحرير المناظرات التي تتضمن خاصية IBM Content Manager OnDemand بالقيمة الثابتة لازالة الخاصية.</li><li>تحرير المناظرات التي تتضمن خاصية IBM Content Manager OnDemand بالقيمة الثابتة لجعل كل الخصائص متوافقة. لمزيد من المعلومات عن الخصائص التي يمكن مناظرتها، ارجع الى رابط التعرف على المزيد في نص المقدمة بأعلى نافذة مناظرة الخاصية.</li></ul>",
		unified_search_cannot_add_properties: "لا يمكنك اضافة خصائص لهذا البحث.<br/>كل الخصائص التي يتم مناظرتها المتاحة الخاصة بك توجد بالفعل في معيار البحث، ويمكن اضافة كل خاصية للبحث مرة واحدة فقط.",
		unified_search_mapping_not_viewable: "لا يمكن عرض خصائص قالب Box في نتائج البحث. اذا كنت تريد اضافة هذه المناظرة كعمود، فانه يجب مناظرة خاصية واحدة على الأقل ليست خاصية قالب Box. على سبيل المثال، يمكنك تحديد خاصية من مستودع تخزين آخر.",

		unified_search_returned_more: "على الأقل يوجد مستودع تخزين واحد يتعدى الحد الأقصى للنتائج المسموح بها.",
		unified_search_partial_failure: "حدث خطأ بأحد مستودعات التخزين على الأقل.",
		unified_search_partial_failure_and_returned_more: "حدث خطأ بواحد على الأقل من مستودعات التخزين، وتم تعدي  مستودع تخزين واحد على الأقل الحد الأقصى للنتائج المسموح بها.",
		unified_search_see_analysis: "أنظر تحليلات النتائج.",
		unified_search_analysis_intro_returned_more: "بالنسبة لكل مستودع تخزين يتعدى الحد الأقصى للنتائج المسموح بها، حاول تنقيح معيار البحث الخاص بك لارجاع عدد أقل من النتائج. أو يمكنك تشغيل بحث مستودع تخزين واحد لارجاع مزيد من النتائج أكثر من الحد الأقصى المسموح به للبحث خلال مستودعات التخزين.",
		unified_search_analysis_intro_partial_failure: "يجب مراجعة معلومات الخطأ التي تم ارجاعها من خلال مستودع أو مستودعات التخزين. واذا لزم الأمر، قم بحل الأخطاء وتشغيل عملية البحث عبر مستودع التخزين مرة أخرى.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "بالنسبة لكل مستودع تخزين حدث به خطأ، حاول حل المشكلة وتشغيل البحث مرة أخرى.<br/><br/>بالنسبة لكل مستودع تخزين يتعدى الحد الأقصى للنتائج المسموح بها، حاول تنقيح معيار البحث الخاص بك لارجاع عدد أقل من النتائج. أو يمكنك تشغيل بحث مستودع تخزين واحد لارجاع مزيد من النتائج أكثر من الحد الأقصى المسموح به للبحث خلال مستودعات التخزين.",
		unified_search_results_found: "النتائج التي تم ايجادها",
		unified_search_maximum_allowed: "الحد الأقٌصى المسموح به",
		unified_search_maximum_exceeded: "الحد الأٌصى الذي تم تعديه",

		unified_search_mapping_rule_box: "لا يمكن اضافة هذه الخاصية الى المناظرة.<p>الخاصية ${0} من مستودع التخزين ${1} توجد بالفعل في مناظرة أخرى، ويمكن تضمين الخصائص القابلة للبحث من هذه الخاصية في مناظرة واحدة فقط لكل بحث.<br/>حدد خاصية مختلفة لاضافتها الى المناظرة.</p>",
		unified_search_mapping_rule_repository: "لا يمكن اضافة الخاصية  الى المناظرة.<br/>تتضمن المناظرة خاصية من مستودع التخزين ${0} بالفعل. يمكن أن  تتضمن المناظرة خاصية واحدة فقط من مستودع التخزين.<br/>حدد مستودع تخزين  مختلف  لاضافة خاصية منه، أو قم بتكوين مناظرة جديدة للخاصية المحددة.",
		unified_search_mapping_rule_data_type: "لا يمكن اضافة الخاصية  الى المناظرة.<br/>لا يمكن مناظرة الخاصية ${0} الى الخاصية ${1}. حدد خاصية مختلفة للمناظرة، أو قم بتكوين مناظرة جديدة للخاصية المحددة.<br/>لمزيد من المعلومات عن الخصائص التي يمكن مناظرتها، ارجع الى رابط التعرف على المزيد في نص المقدمة في أعلى هذه النافذة.",
		unified_search_mapping_rule_cardinality: "لا يمكن اضافة الخاصية  الى المناظرة.<br/>كل الخصائص في المناظرة يجب أن تدعم القيم المنفردة أو القيم   المتعددة. تقوم الخاصية المحددة بدعم ${0}، وتقوم الخصائص في المناظرة بدعم   ${1}.<br/>حدد خاصية مختلفة لاضافتها الى   المناظرة، أو قم بتكوين مناظرة جديدة للخاصية المحددة.",
		unified_search_mapping_rule_fixed_value: "لا يمكن اضافة الخاصية  الى المناظرة.<br/>تتضمن المناظرة خاصية بقيمة ثابتة بالفعل. يمكن أن تتضمن   المناظرة خاصية واحدة فقط بقيمة ثابتة.<br/>حدد خاصية مختلفة لاضافتها الى   المناظرة، أو قم بتكوين مناظرة جديدة للخاصية المحددة.",
		unified_search_mapping_rule_child_component: "لا يمكن اضافة الخاصية  الى المناظرة.<br/>لا يمكن مناظرة الخاصية ذات مكون فرعي الى الخصائص الأخرى. اذا  كنت تريد أن يتم منحك امكانية البحث بهذه الخاصية، قم بتكوين مناظرة جديدة  للخاصية المحددة.",
		unified_search_mapping_rule_operator_intersection: "لا يمكن اضافة الخاصية  الى المناظرة.<br/>يجب أن تحتوي كل الخصائص في المناظرة على واحد أو أكثر من  المعاملات المشتركة. لكن، لا تحتوي الخاصية ${0} على أية معاملات مشتركة مع   الخصائص الأخرى في المناظرة.<br/>اذا أمكن، حدد خاصية مختلفة. اذا كان يجب   تضمين الخاصية المحددة، قم بالتعامل مع مسؤول النظام لتحرير المعاملات المرفقة   مع الخاصية.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "المحددات المتقدمة",
		advanced_search_options_intro: "حدد اختيارات المعيار المتقدمة.",
		advanced_search_options_editable: "قابل للتحرير",
		advanced_search_options_readonly: "للقراءة فقط",
		advanced_search_options_required: "مطلوبة",
		advanced_search_options_hidden: "مخفية",
		advanced_search_options_property_editable:"الخاصية هي:",
		advanced_search_options_operators:"المعاملات:",
		advanced_search_options_use_all:"استخدام كل",
		advanced_search_options_use_selected:"استخدام المحدد",
		advanced_search_options_operators_filtered: "تم ترشيح المشغلين",
		// Data types in lowercase
		data_type_boolean: "بوولي",
		data_type_date: "التاريخ",
		data_type_time: "الوقت",
		data_type_timestamp: "خاتم الوقت",
		data_type_decimal: "قيمة عشرية",
		data_type_double: "رقم النقطة العائمة",
		data_type_short: "رقم صحيح",
		data_type_integer: "رقم صحيح",
		data_type_long: "رقم صحيح",
		data_type_string: "مجموعة حروف نصية",
		data_type_string_alpha: "مجموعة حروف أبجدية",
		data_type_string_alphanum: "مجموعة حروف أبجدية عددية",
		data_type_string_ext: "مجموعة حروف أبجدية عددية ممتدة",
		data_type_string_num: "مجموعة حروف رقمية",
		data_type_binary: "ثنائي",
		data_type_object: "عنصر",
		data_type_guid: "كود تعريف متفرد شامل",
		data_type_user: "المستخدمين",
		data_type_child_component: "مكون فرعي",

		/* Print Dialog */
		print_title: "طباعة",
		print_message: "طباعة: ${0}",
		print_print_button: "طباعة",
		print_clean_margins_button: "تحديد الكل الى 0",
		print_type: "نوع وحدة الطباعة:",
		print_printer_server_options: "اختيارات طباعة وحدة الخدمة",
		print_printer_properties: "خصائص وحدة الطباعة",
		print_printer_fax_properties: "خصائص الفاكس",
		print_printer_name: "اسم وحدة الطباعة:",
		print_fax_recipient: "المستلم",
		print_fax_sender: "راسل",
		print_copies: "النسخ:",
		print_local_orientation: "التوجيه",
		print_local_orientation_landscape: "عرضية",
		print_local_orientation_portrait: "طولية",
		print_local_margins: "الهوامش",
		print_local_margins_top: "‏أعلى‏",
		print_local_margins_bottom: "أسفل",
		print_local_margins_left: "يسار",
		print_local_margins_right: "يمين",
		print_printer_server: "وحدة خدمة",
		print_printer_local: "محلي",
		print_property_class: "الفئة:",
		print_property_routing: "توجيه:",
		print_property_pagedef: "تعريف الصفحة:",
		print_property_node: "العقدة:",
		print_property_writer: "وحدة الكتابة:",
		print_property_formdef: "تعريف النموذج:",
		print_property_printerid: "الوجهة المستهدفة:",
		print_property_forms: "النماذج:",
		print_property_faxnotes: "الملاحظات:",
		print_property_faxcompany: "الشركة:",
		print_property_faxnumber: "رقم الفاكس:",
		print_property_faxname: "الاسم:",
		print_property_faxsendertelnumber: "رقم التليفون:",
		print_property_faxcoverpage: "صفحة الغلاف:",
		print_property_faxsubject: "الموضوع",
		print_saveoptions: "حفظ اختيارات الطباعة",
		print_property_bannerpage: "استخدام صفحة خط العنوان",
		print_print_with_info_fields: "طباعة مع مجالات المعلومات",
		print_field_from: "من",
		print_field_to: "الى",
		print_invalid_value_class: "الحروف الصحيحة هي A-Z أو 0-9",
		print_invalid_value_pagedef: "الحروف الصحيحة هي الحروف الأبجدية أو الرقمية، أو الحروف @، #, $",
		print_invalid_value_writer: "الحروف الصحيحة هي الحروف الأبجدية أو الرقمية، أو الحروف @، #, $",
		print_invalid_value_formdef: "الحروف الصحيحة هي الحروف الأبجدية أو الرقمية، أو الحروف @، #, $",
		print_invalid_value_forms: "الحروف الصحيحة هي الحروف الأبجدية أو الرقمية، أو الحروف @، #, $",
		print_invalid_value_margin: "الأرقام الصحيحة بين ${0} و ${1}",
		print_status_message: "تم ارسال ${0} وثيقة الى وحدة طباعة ${1}.",

		print_applet_init_error: "لا يمكن بدء برنامج الطباعة.",
		print_applet_init_error_explanation: "يمكن أن تحدث هذه المشكلة للأسباب التالية: <br/><br/><ul><li>لم يتم تركيب Java Runtime Environment (JRE) على وحدة العمل الخاصة بك.</li><li>لم يتم اتاحة البرنامج المساعد الى Java في برنامج استعراض الانترنت الخاص بك.</li><li>نسخة JRE التي توجد بوحدة العمل الخاصة بك غير متوافقة مع نسخة IBM Content Navigator.</li><li>تم انتهاء وقت برنامج الاستعراض أثناء انتظار بدء برنامج الطباعة.</li></ul>",
		print_applet_init_error_userResponse: "يمكنك اكمال الخطوات التالية لحل المشكلة مع JRE:<br/><br/><ol><li>تأكد من أنه تم تركيب JRE على وحدة العمل الخاصة بك.</li><li>تأكد من اتاحة البرنامج المساعد Java في برنامج استعراض الانترنت الخاص بك.</li><li>تأكد من أن نسخة JRE  بوحدة العمل الخاصة بك متوافقة مع IBM Content Navigator ثم أعد المحاولة. يتم تضمين كشف النسخ المدعمة في وثيقة <i>Hardware and software prerequisites for IBM Content Navigator</i> بموقع IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "صفحة الغلاف",
		daeja_print_selected_documents_title: "الوثائق المحددة",

		/* change the caps to em for emphasis*/
		match_all_criteria: "مطابقة كل معايير البحث",
		match_any_criteria: "مطابقة أي من معايير البحث",
		include_subfolders_summary: "${0} (تضمين الحافظات الفرعية)",
		browse_button: "استعراض &hellip;",
		search_for: "بحث عن:",
		object_type_documents: "الوثائق",
		object_type_folders: "الحافظات",
		object_type_documents_folders: "الوثائق والحافظات",
		object_type_web_links: "روابط الانترنت",
		object_type_documents_folders_web_links: "الوثائق، والحافظات، وروابط الانترنت",

		/* SelectSearchFolderDialog */
		search_in: "البحث في:",
		include_subfolders: "تضمين الحافظات الفرعية",

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
		locked_item_icon_title: "مقفل بواسطة ${0}",
		checked_out_icon_title: "تم التخصيص بواسطة ${0}",
		major_minor_version_icon_title: "نسخة رئيسية مع نسخ ثانوية",
		suspended_icon_title: "سيتم تأجيل مسار العمل",
		on_hold_icon_title: "ايقاف مؤقت",
		has_notes_icon_title: "يتضمن ملاحظات",
		record_icon_title: "توضيح كسجل",
		compound_document_icon_title: "وثيقة مركبة",
		validateTemplate_icon_title: "قالب مساحة العمل يتطلب التحقق من صلاحيته",
		offlineTemplate_icon_title: "قالب مساحة العمل دون اتصال",
		offlineTeamspace_icon_title: "مساحة الفريق دون اتصال",
		pending_delete_icon_title: "مساحة الفريق معلقة للحذف",
		delete_error_icon_title: "لا يمكن حذف مساحة الفريق",
		defaultTemplate_icon_title: "قالب مساحة الفريق المفترض",
		teamspace_icon_title: "مساحة الفريق",
		teamspace_template_icon_title: "قالب مساحة الفريق",
		has_bookmark_icon_title: "يتضمن علامة توقف",
		read_only_icon_title: "للقراءة فقط",
		no_results_were_found: "لم يتم ايجاد نتائج.",
		folder_is_empty: "الحافظة خالية.",
		no_checked_out_items: "ليس لديك أي بنود مخصصة.",
		inbasket_is_empty: "سلة الوارد خالية.",
		worklist_is_empty: "كشف العمل خالي.",
		tracker_milestone_completed: "منتهي",
		stepprocessor_attachments_title: "المحتويات",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "اقفال بنود",
		unlock_items: "الغاء اقفال بنود",
		checkin_item: "الغاء تخصيص بند",

		/* Help */
		learn_more: "تعرف على المزيد",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "فتح مساحة فريق",
		repository_tab_createWorkspace: "مساحة فريق جديدة",
		repository_tab_createWorkspaceTemplate: "قالب مساحة فريق جديدة",
		repository_tab_DefaultTemplate: "المفترض",

		/* Cross repository document copy */
		documentCopyTaskDescription: "تقوم هذه المهمة بنسخ الوثائق.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "لا يتوافر لديك صلاحيات التحرير لقالب مساحة الفريق المحدد.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "هل تريد حذف مساحة الفريق ${0} بالفعل؟ <br><br>الوثيقة التي تم حفظها في حافظات أخرى بمستودع التخزين تظل موجودة بمستودع التخزين. سيتم حذف أية وثائق تم حفظها فقط في مساحة الفريق.",
		teamspaceDecommissionLabel: "حذف:",
		teamspaceDecommissionDescription: "بحذف مساحة الفريق سيتم ازالة مساحة الفريق هذه من وحدة الخدمة: تشير الى كيفية التعامل مع  عناصر مساحة الفريق.",
		teamspaceDecommissionOptions: "حذف اختيارات مساحة الفريق",
		teamspaceDecommissionDeleteAll: "حذف كل عناصر مساحة الفريق",
		teamspaceDecommissionReFileAll: "اعادة تخزين كل عناصر مساحة الفريق",
		teamspaceDecommissionReFileDestination: "نقل الى:",
		teamspaceDecommissionReFileIn: "اعادة تخزين في",
		teamspaceDecommissionTaskName: "مهمة حذف مساحة الفريق",
		teamspaceDecommissionTaskDescription: "تقوم هذه المهمة بحذف مساحة فريق من مستودع التخزين.",
		teamspaceDecommissionDeletionStarted: "تم جدولة مساحة الفريق للحذف",
		teamspaceDecommissionDeletionConnectionFailed: "لم يمكن تشغيل مهمة حذف مساحة الفريق لأنه لا يمكن الاتصال بمستودع التخزين. تأكد من صحة معلومات الاعتماد لمسؤول مستودع التخزين.",

		teamspace_edit_properties_notsupported: "يمكنك تحرير الخصائص لمساحات الفريق من خلال مشاهدة مساحات الفريق فقط.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "مساحة الفريق غير متصلة ويمكن فتحها فقط بواسطة مالكي مساحة الفريق",

		/* Teamspace Builder widget */
		workspace_validation_document: "الوثيقة:",
		workspace_validation_folder: "الحافظة:",
		workspace_validation_ets: "قوالب الادخال التالية غير متاحة في مستودع   التخزين هذا وتم ازالتها من كشف قوالب الادخال المحدد:",
		workspace_validation_classes: "الفئات التالية غير متاحة في مستودع التخزين  هذا وتم ازالتها من كشف الفئات المحدد:",
		workspace_validation_searches: "عمليات البحث التالية غير متاحة في مستودع   التخزين هذا وتم ازالتها من كشف عمليات البحث المحدد:",
		workspace_validation_docs_folders: "الوثائق والحافظات التالية غير متاحة  في  مستودع التخزين هذا وتم ازالتها من كشف البنود المتضمنة:",
		workspace_change_template_confirmation_question: "اذا قمت بتحديد قالب مختلف، سيتم فقد كل التغييرات الخاصة بك. هل تريد الاستمرار؟\n",
		workspace_delete_item_confirmation_question: "هل تريد ازالة البند ${0}؟\n",
		workspace_delete_role_confirmation_question: "هل تريد ازالة الوظيفة ${0}؟\n",
		workspace_delete_confirmation_question: "اذا قمت بحذف مساحة فريق، سيتم  حذف  حاوية مساحة الفريق فقط. تظل الحافظات والوثائق التي توجد في مساحة  الفريق  بمستودع التخزين، ويمكنك ايجادها بتنفيذ عملية البحث. لحذف محتويات  مساحة عمل  الفريق، قم بحذف البنود التي توجد في مساحة الفريق أولا ثم حذف  مساحة الفريق.<br><br>هل تريد حذف مساحة الفريق ${0}؟",
		workspacebuilder_instance_template_name_header: "اسم قالب مساحة الفريق",
		workspacebuilder_instance_template_description_header: "‏الوصف‏",

		workspacebuilder_template_tooltip_name: "لا يمكن أن يتضمن اسم القالب أي من الحروف التالية:  \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "لا يمكن أن يتضمن اسم مساحة الفريق أي من الحروف التالية:  \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "أدخل وصف يسمح للمستخدمين   بتحديد الاختيار الصحيح من كشف القوالب. على سبيل المثال، يمكنك  تضمين معلومات  عن المستخدمين المطلوبين أو استخدام القالب.",
		workspacebuilder_instance_tooltip_description: "أدخل وصف يسمح للمستخدمين بالتمييز بين مساحة الفريق هذه ومساحات الفريق الأخرى.",

		workspacebuilder_template_edit_properties_pane: "تحرير قالب مساحة الفريق",
		workspacebuilder_instance_properties_pane: "تعريف مساحة فريق",
		workspacebuilder_template_properties_pane: "تعريف قالب مساحة الفريق",

		workspacebuilder_instance_security_pane: "تحديد سرية مساحة الفريق",
		workspacebuilder_template_security_pane: "تحديد سرية القالب",

		workspacebuilder_layout_pane: "تحديد الشكل العام",
		workspacebuilder_search_templates_pane: "تحديد عمليات بحث",
		workspacebuilder_document_folders_pane: "تضمين الحافظات والوثائق",
		workspacebuilder_doctypes_entryTemplates_pane: "تحديد الفئات أو قوالب الادخال",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "تحديد الفئات",
		workspacebuilder_security: "سرية مساحة الفريق",

		workspacebuilder_roles_pane: "تحديد وظائف",
		workspacebuilder_security: "السرية",

		workspacebuilder_properties_templates: "القوالب المتاحة:",
		workspacebuilder_available_templates: "عمليات البحث المتاحة:",
		workspacebuilder_selected_templates: "عمليات البحث المحددة:",
		workspacebuilder_templates_name: "اسم البحث",

		workspacebuilder_available_entryTemplates: "قوالب الادخال المتاحة:",
		workspacebuilder_selected_entryTemplates: "قوالب الادخال المحددة:",

		workspacebuilder_item_classes: "الفئات المتاحة:",
		workspacebuilder_item_classes_selected: "الفئات المحددة:",
		workspacebuilder_properties_select_template: "حدد قالب لاستخدامه لمساحة الفريق هذه.",
		workspacebuilder_template_properties: "تعريف قالب مساحة الفريق",
		workspacebuilder_instance_properties: "تعريف مساحة فريق",
		workspacebuilder_template_introText: "حدد المكونات العامة التي تريد   تضمينها في كل مساحة فريق تم تكوينها من هذا القالب باستخدام الاختيارات التي   توجد في لوحة التجول. عند الانتهاء، اضغط <b>انتهاء</b> لاتاحة القالب   للمستخدمين الآخرين، الذين يمكنهم استخدامه لتكوين مساحات فريق جديدة.",
		workspacebuilder_instance_introText: "تقوم الفرق باستخدام مساحات الفريق   لمشاركة والتعامل مع فئات وثائق معينة. أدخل اسم ذو معنى ووصف لمساحة الفريق   هذه للسماح للمستخدمين بتمييز مساحة الفريق عن مساحات الفريق الأخرى. يمكنك   تهيئة مساحة الفريق بتضمين عمليات بحث اضافية، فئات أو قوالب ادخال، وثائق،   وحافظات.",

		workspacebuilder_template_search_template_introText: "حدد عمليات البحث   المفترضة التي تريد تضمينها في كل مساحة فريق تم تكوينها من هذا القالب. اذا لم  يتم تحديد أية عمليات بحث، فان مستخدم مساحة الفريق سيمكنه مشاهدة كل عمليات   البحث التي يتوافر لديهم امكانية التوصل اليها. ومن خلال التصاريح المناسبة،   يستطيع المستخدمين مشاركة واضافة عمليات بحث في مساحة الفريق.",
		workspacebuilder_instance_search_template_introText: "قم بتضمين عمليات البحث التي ستسمح لمستخدمي مساحة الفريق باستكمال المهام بطريقة أكثر فعالية. اذا لم يتم تضمين أية عمليات بحث، سيتم عرض كل عمليات البحث لمستخدمي مساحة   الفريق التي يتوافر لديهم تصريح لها. يستطيع المستخدمين أيضا اضافة ومشاركة عمليات البحث في مساحة الفريق باستخدام التصاريح المناسبة.",

		workspacebuilder_template_roles_introText: "يتم تخصيص مستخدمي مساحة  الفريق  الى للوظائف. وتقوم الوظائف بتحديد المهام التي يسمح بها للمستخدمين  بتنفيذها.  اضغط على الشارات بجانب كل وظيفة لمشاهدة المهام المسموح بها. اختر  الوظائف  المناسبة لمساحة الفريق.",
		workspacebuilder_template_roles_modify_introText: "يمكنك تعديل التصاريح   المرافقة لكل من الوظائف في مساحة الفريق هذه. يجب اعلام أعضاء مساحة الفريق   عند تغيير التصاريح الخاصة بهم.",

		workspacebuilder_template_roles_header_name: "اسم الوظيفة",

		workspacebuilder_template_folders_introText: "حدد الوثائق والحافظات   المفترضة لتضمينها في كل مساحة فريق تم تكوينها من هذا القالب. يمكنك اضافة   وثائق كروابط أو نسخ. استخدم الروابط للاشارة الى الوثائق التي لا تريد عدة نسخ  منها، مثل السياسات أو الاجراءات. قم بتكوين نسخ للوثائق التي سيقوم  المستخدمين  بتعديلها، مثل القوالب والنماذج.",
		workspacebuilder_instance_folders_introText: "حدد الوثائق والحافظات   المفترضة لتضمينها في مساحة الفريق. يمكنك اضافة وثائق كروابط أو نسخ. استخدم   الروابط للاشارة الى الوثائق التي لا تريد عدة نسخ منها، مثل السياسات أو   الاجراءات. قم بتكوين نسخ للوثائق التي سيقوم المستخدمين بتعديلها، مثل القوالب  والنماذج.",

		workspacebuilder_template_roles_introText: "حدد الوظائف التي سيتم تضمينها  في كل مساحة فريق يتم تكوينها من هذا القالب. يمكنك أيضا تكوين وظائف جديدة،   والتي يمكنك استخدامها عند تكوين قوالب مساحة الفريق الأخرى.",
		workspacebuilder_instance_users_introText: "في مساحة الفريق، يتم تخصيص كل  مستخدم لوظيفة أو أكثر تحدد المهام التي يستطيع المستخدم استكمالها. قم باضافة  مستخدمين الى مساحة الفريق وتخصيص الوظائف الى المستخدمين.",

		workspacebuilder_instance_navigation_pane_title: "برنامج بناء مساحة الفريق",
		workspacebuilder_template_navigation_pane_title: "برنامج بناء قالب مساحة الفريق",

		workspacebuilder_roles_roles_nopermissions: "لم يتم تحديد تصاريح للوظيفة {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "الوظائف المحددة:",
		workspacebuilder_roles_available_roles: "الوظائف المتاحة:",
		workspacebuilder_roles_privilege_header: "تصريح",
		workspacebuilder_roles_select_role: "تحديد وظيفة",
		workspacebuilder_roles_select_permission: "تحديد تصريح",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "توجد وظيفة بالاسم {0} بالفعل. يجب أن تحدد اسم متفرد للوظيفة. ",
		workspacebuilder_roles_edit_dialog_role_name: "اسم الوظيفة:",
		workspacebuilder_roles_edit_dialog_role_description: "وصف الوظيفة:",
		workspacebuilder_roles_edit_dialog_title_new: "وظيفة جديدة",
		workspacebuilder_roles_edit_dialog_title_edit: "‏تعديل وظيفة‏",

		workspacebuilder_roles_privileges_header: "التصاريح للوظيفة {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "تصاريح الوثيقة:",
		workspacebuilder_roles_priv_group_folder: "تصاريح الحافظة:",
		workspacebuilder_roles_priv_group_teamspace: "تصاريح مساحة الفريق:",
		workspacebuilder_roles_priv_group_item: "تصاريح الوثيقة والحافظة:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "ادارة التصاريح",
		workspacebuilder_roles_plbl_modifyItemPermissions: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح التوصل الى الوثائق والحافظات في مساحة الفريق. يتضمن هذا التصريح السماح للمستخدمين بحذف وتحرير الخصائص وتكوين حافظات فرعية وهكذا.",

		workspacebuilder_roles_priv_deleteItems: "‏حذف ‏",
		workspacebuilder_roles_plbl_deleteItems: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح حذف الوثائق والحافظات التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_createItems: "تكوين",
		workspacebuilder_roles_plbl_createItems: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تكوين الوثائق والحافظات التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_viewItemProperties: "مشاهدة الخصائص",
		workspacebuilder_roles_plbl_viewItemProperties: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح مشاهدة خصائص الوثائق والحافظات في مساحة الفريق، والتي تتضمن خصائص النظام.",

		workspacebuilder_roles_priv_modifyItemProperties: "تحرير الخصائص",
		workspacebuilder_roles_plbl_modifyItemProperties: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تحرير خصائص الوثائق والحافظات في مساحة الفريق.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "ادارة تصاريح الحافظة",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "يستطيع المستخدمين  الذين يتوافر لديهم هذا التصريح ادارة امكانية التوصل الى  الحافظات التي توجد  في مساحة الفريق. يتضمن هذا التصريح السماح للمستخدمين  الآخرين بحذف الحافظات  وتحرير خصائص الحافظة وتكوين حافظات فرعية وهكذا.",

		workspacebuilder_roles_priv_deleteFolders: "حذف الحافظات",
		workspacebuilder_roles_plbl_deleteFolders: "يستطيع المستخدمين الذين  يتوافر  لديهم هذا التصريح حذف الحافظات التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_modifyFolderProperties: "تحرير خصائص الحافظة",
		workspacebuilder_roles_plbl_modifyFolderProperties: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تحرير الخصائص للحافظات التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_createSubfolders: "تكوين حافظات فرعية",
		workspacebuilder_roles_plbl_createSubfolders: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تكوين الحافظات التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_fileInFolders: "اضافة الى الحافظات",
		workspacebuilder_roles_plbl_fileInFolders: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح اضافة رابط من الحافظات التي توجد في مساحة الفريق الى الوثائق.",

		workspacebuilder_roles_priv_viewFolderProperties: "مشاهدة خصائص الحافظة",
		workspacebuilder_roles_plbl_viewFolderProperties: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح مشاهدة خصائص الحافظات التي توجد في مساحة الفريق، والتي تتضمن خصائص النظام.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "ادارة تصاريح الوثيقة",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "يستطيع المستخدمين  الذين يتوافر لديهم هذا التصريح ادارة امكانية التوصل الى الوثائق التي توجد  في  مساحة الفريق. يتضمن هذا التصريح السماح للمستخدمين الآخرين بحذف الوثائق   وتحرير خصائص الوثائق وهكذا.",

		workspacebuilder_roles_priv_deleteDocuments: "حذف الوثائق",
		workspacebuilder_roles_plbl_deleteDocuments: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح حذف الوثائق التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_promoteVersions: "تطوير النسخ",
		workspacebuilder_roles_plbl_promoteVersions: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تخصيص رقم نسخة جديد للوثائق التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_modifyContent: "تحرير الوثائق",
		workspacebuilder_roles_plbl_modifyContent: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تحرير محتويات الوثائق التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "تحرير خصائص الوثائق",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح تحرير الخصائص للوثائق التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_viewContent: "مشاهدة الوثائق",
		workspacebuilder_roles_plbl_viewContent: "يستطيع المستخدمين الذين يتوافر   لديهم هذا التصريح مشاهدة الوثائق التي توجد في مساحة الفريق.",

		workspacebuilder_roles_priv_viewDocumentProperties: "مشاهدة خصائص الوثيقة",
		workspacebuilder_roles_plbl_viewDocumentProperties: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح مشاهدة خصائص الوثائق التي توجد في مساحة الفريق، والتي تتضمن خصائص النظام.",

		workspacebuilder_roles_priv_addNewSearches: "اضافة عمليات بحث",
		workspacebuilder_roles_plbl_addNewSearches: "يستطيع المستخدمين الذين   يتوافر لديهم هذا التصريح اضافة عمليات بحث لمساحة الفريق. افتراضيا، يكون   البحث غير متاحا للمستخدمين الآخرين.",

		workspacebuilder_roles_priv_createNewSearches: "تكوين عمليات بحث",
		workspacebuilder_roles_plbl_createNewSearches: "يستطيع المستخدمين ذوي هذا  التصريح تكوين عمليات بحث جديدة لكن لا يمكنهم حفظ عمليات البحث. اذا كان لا   يتوافر لدى المستخدمين هذا التصريح، فانه لا يمكنهم اضافة الوثائق التي توجد   بمستودع التخزين بالفعل الى مساحة الفريق.",

		workspacebuilder_roles_priv_shareSearches: "مشاركة عمليات بحث",
		workspacebuilder_roles_plbl_shareSearches: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح مشاركة عمليات البحث مع مستخدمين مساحة الفريق الآخرين.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "ادارة الفئات أو قوالب الادخال",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح اضافة أو ازالة الفئات أو قوالب الادخال من مساحة الفريق.",

		workspacebuilder_roles_priv_addRemoveClasses: "ادارة الفئات",
		workspacebuilder_roles_plbl_addRemoveClasses: "يستطيع المستخدمين الذين يتوافر لديهم هذا التصريح اضافة وازالة الفئات من مساحة الفريق.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "ادارة مستخدمي مساحة الفريق",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "يستطيع المستخدمين  الذين يتوافر لديهم هذا التصريح اضافة أو ازالة مستخدمين ومجموعات من مساحة   الفريق. بالاضافة لذلك، يمكنهم ادارة الوظائف التي يتم تخصيص مستخدمين لها.",

		workspacebuilder_roles_priv_modifyRoles: "تعديل الوظائف",
		workspacebuilder_roles_plbl_modifyRoles: "يستطيع المالكين الذين يتوافر   لديهم هذا التصريح تعديل تصاريح الوظيفة لمساحة الفريق. يكون هذا التصريح  متاحا  فقط للمالكين.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "تحديد مستخدمين",
		workspacebuilder_users_add_users_and_groups_button: "اضافة مستخدمين ومجموعات...",
		workspacebuilder_users_users_or_group_header: "المستخدمين والمجموعات",
		workspacebuilder_users_roles_header: "الوظائف",

		workspacebuilder_users_role_header: "الوظيفة",
		workspacebuilder_users_role_no_permissions: "لا توجد تصاريح لهذه الوظيفة",
		workspacebuilder_users_available_roles_label: "الوظائف المتاحة:",
		workspacebuilder_users_selected_users_and_groups_label: "المستخدمين والمجموعات المحددة:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "لا يمكن حفظ مساحة الفريق. يجب تحديد مالك واحد على الأقل لمساحة الفريق هذه.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "لا يمكن حفظ مساحة الفريق. يجب تخصيص وظيفة لكل المستخدمين.",
		// end of select users

		workspacebuilder_search_templates: "تحديد عمليات بحث",
		workspacebuilder_search_add: "اضافة بحث",
		workspacebuilder_properties_workspaceName: "اسم مساحة الفريق:",
		workspacebuilder_properties_templateName: "اسم القالب:",
		workspacebuilder_properties_workspaceDescription: "وصف مساحة الفريق:",
		workspacebuilder_properties_templateDescription: "توصيف القالب:",
		workspacebuilder_properties_workspaceTemplate: "القالب المحدد:",
		workspacebuilder_properties_security: "مشاركة القالب مع:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "نقل من مساحة الفريق:",
		moveTeamspaceDocuments_security: "مشاركة الوثيقة مع:",
		moveTeamspaceDocuments_security_change: "تحديد سرية مهيأة للبنود المحددة",
		moveTeamspaceDocuments_item_type_level: "لا يمكنك تحديد احلال السرية للبنود المحددة لأن فئة البند المحدد تم توصيفها لاستخدام السرية على مستوى الفئة فقط",
		moveTeamspaceDocuments_security_inherit: "توارث السرية من حافظة الوجهة المستهدفة",
		moveTeamspaceDocuments_file_info_text: "يمكنك نقل بنود من مساحة فريق الى مساحة فريق أو حافظة أخرى.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "لا تتوافر لديك التصاريح المناسبة لنقل البنود الى الحافظة المحددة.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "لا تتوافر لديك التصاريح المناسبة لنقل البنود من مساحة الفريق.",
		moveTeamspaceDocuments_move_mixed_items: "لا يمكن احلال السرية للبنود المحددة. لا يتم ادارة بعض البنود بواسطة مساحة الفريق. يمكنك احلال سرية البنود فقط التي يتم ادارتها بواسطة مساحة الفريق.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "يجب أن تحدد اسم لمساحة الفريق.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "يجب أن تحدد اسم لقالب مساحة الفريق.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "لا يمكن أن يتضمن اسم مساحة الفريق أي من الحروف التالية:  \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "لا يمكن أن يتضمن اسم القالب أي من الحروف التالية:  \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "رابط للوثيقة",
		workspacebuilder_folders_makeDocCopy: "نسخ وثيقة",
		workspacebuilder_folders_newfolder: "حافظة جديدة",
		workspacebuilder_folders_local_drive: "من الدليل المحلي",
		workspacebuilder_folders_from_repo: "من مستودع التخزين",
		workspacebuilder_folders_add_doc: "اضافة وثيقة",
		workspacebuilder_folders_grid_name: "الاسم",
		workspacebuilder_folders_props: "الخصائص",
		workspacebuilder_folders_remove: "ازالة",
		workspacebuilder_folders_delete: "‏حذف ‏",
		workspacebuilder_folders_adddoc_local: "اضافة وثيقة من قرص التشغيل المحلي",
		workspacebuilder_folders_adddoc_repo: "اضافة وثيقة من مستودع التخزين",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "اسم الحافظة المحدد موجود بالفعل. حدد اسم حافظة مختلف.",

		workspacebuilder_classes_title: "تحديد الفئات أو قوالب الادخال",
		workspacebuilder_classes_title_cm: "تحديد الفئات",
		workspacebuilder_classes_template_introText: "حدد ما اذا كانت مساحات   الفريق التي تم تكوينها من هذا القالب ستقوم باستخدام الفئات أو قوالب الادخال   لاضافة وثائق الى مستودع التخزين. اذا لم يتم تحديد أية فئات، ستستطيع مساحات   الفريق مشاهدة كل الفئات التي يتوافر لديهم امكانية التوصل اليها. يستطيع   المستخدم تحديد كشف الفئات أو قوالب الادخال في مساحة الفريق اذا كان يتوافر   لديه التصريح المناسب.",
		workspacebuilder_classes_template_introText_cm: "حدد الفئات التي يستطيع المستخدمين استخدامها لاضافة وثائق الى مستودع التخزين. اذا لم يتم تحديد أية فئات، سيتم عرض كل الفئات لمستخدمي مساحة  الفريق  الذين يتوافر لديهم امكانية التوصل لها. يستطيع المستخدمين تعديل كشف الفئات في مساحة الفريق اذا كان يتوافر لديهم   التصاريح المناسبة.",
		workspacebuilder_classes_instance_introText: "حدد الفئات أو قوالب الادخال التي يستطيع المستخدمين استخدامها لاضافة وثائق الى مستودع التخزين. عند عدم تحديد أية   فئات، سيتم عرض كل الفئات لمستخدمي مساحة الفريق التي يتوافر لديهم تصريح لها. يستطيع المستخدمين تعديل كشف الفئات أو قوالب الادخال في مساحة   الفريق اذا كان يتوافر لديهم التصاريح المناسبة.",
		workspacebuilder_classes_instance_introText_cm: "حدد الفئات التي يستطيع المستخدمين استخدامها لاضافة وثائق الى مستودع التخزين. عند عدم تحديد أية   فئات، سيتم عرض كل الفئات لمستخدمي مساحة الفريق التي يتوافر لديهم تصريح لها. يستطيع المستخدمين تعديل كشف الفئات في مساحة الفريق اذا كان يتوافر لديهم   التصاريح المناسبة.",
		workspacebuilder_classes_selection: "حدد فئات:",
		workspacebuilder_classes_list: "الفئات المتاحة:",
		workspacebuilder_classes_columns_default: "المفترض",
		workspacebuilder_classes_columns_className: "اسم الفئة",
		workspacebuilder_classes_type_classes: "استخدم الفئات لاضافة وثائق",
		workspacebuilder_classes_type_classes_tooltip: "الفئات تتضمن الخصائص المرفقة، لذلك يمكن ايجاد الوثائق للاستخدام لاحقا.",
		workspacebuilder_classes_type_entryTemplates: "استخدم قوالب الادخال لاضافة وثائق",
		workspacebuilder_classes_type_entryTemplates_tooltip: "تضمن قوالب الادخال أن المعلومات المتاحة لكل وثيقة متسقة وتستخدم القيم المعرفة مسبقا.",
		workspacebuilder_classes_type_entryTemplates_columnName: "اسم قالب الادخال",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "‏الوصف‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "يجب اضافة قالب ادخال واحد على الأقل لمساحة الفريق.",

		workspacebuilder_classes_new: "فئة جديدة",
		workspacebuilder_classes_add: "اضافة فئة",
		workspacebuilder_entryTemplate_add: "اضافة قالب ادخال",
		workspacebuilder_add_list: "‏اضافة‏",
		workspacebuilder_makeDefault_list: "جعله المفترض",
		workspacebuilder_removeDefault_list: "ازالة المفترض",

		workspacebuilder_roles_title: "تحديد وظائف",
		workspacebuilder_roles_title_modify: "تعديل الوظائف",

		workspacebuilder_selection_moveup: "نقل لأعلى",
		workspacebuilder_selection_movedown: "نقل لأسفل",
		workspacebuilder_selection_remove: "ازالة",
		workspacebuilder_selection_add: "‏اضافة‏",
		workspacebuilder_selection_create_new_search: "بحث جديد...",
		workspacebuilder_selection_create_new_role: "وظيفة جديدة...",
		workspacebuilder_selection_make_role_available: "جعله متاحا",
		workspacebuilder_selection_make_role_available_tooltip: "يتم مشاركة وظيفة  الاختيار مع القوالب الأخرى. يجب تخصيص تصريح واحد على الأقل للوظيفة   لمشاركتها.",

		workspacebuilder_navigation_next: "تالي",
		workspacebuilder_navigation_finish: "انتهاء",
		workspacebuilder_navigation_validate: "التحقق من الصلاحية",
		workspacebuilder_navigation_previous: "‏سابق‏",
		workspacebuilder_navigation_cancel: "‏الغاء‏",
		workspacebuilder_navigation_customize: "تهيئة",

		workspacebuilder_search_dialog_title: "‏بحث‏",
		workspacebuilder_dialog_close: "‏اغلاق‏",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "اتاحة القالب:",
		workspace_properties_templateState_tooltip: "جعل القالب غير متاحا لمنع المستخدمين من تكوين مساحات فريق تستخدم هذا القالب.",
		workspace_properties_dialog_title: "خصائص القالب",
		workspace_properties_online_radio_option_label: "جعله متاحا",
		workspace_properties_offline_radio_option_label: "جعله غير متاحا",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "هل تريد الالغاء بدون حفظ التغييرات الخاصة بك؟",
		workspacebuilder_cancel_confirmation_button: "نعم",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "سيتم ازالة أية بنود غير  صحيحة من القالب وسيتم اتاحة القالب للمستخدمين.  هل تريد التحقق من صلاحية   قالب مساحة الفريق هذا؟",
		workspacebuilder_validate_confirmation_button: "نعم",
		workspacebuilder_validate_confirmation_title: "التحقق من الصلاحية",

		/* Entry templates builder */
		entry_templates: "ادارة قالب الادخال",
		no_entry_templates_were_found: "لا توجد قوالب ادخال",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "ترشيح",

		/* Roleselector widget */
		role_selector_name: "الوظائف:",

		/* User Group picker widget */
		directory_label: "الدليل:",
		scope_label: "بحث عن:",
		name_starts_with_label: "يبدأ الاسم بواسطة",
		name_contains_label: "يحتوي الاسم على",
		display_name_contains_label: "اسم العرض يتضمن",
		starts_with_label: "يبدأ بالحروف:",
		available_label: "المتاح:",
		available_heading: "المتاح",
		selected_label: "المحدد:",
		selected_heading: "المحدد",
		available_repositories_label: "مستودعات التخزين المتاحة",
		selected_repositories_label: "مستودعات التخزين المحددة",
		default_repository: "مستودع التخزين المفترض:",
		default_repository_placeholder: "حدد مستودع تخزين",
		default_role_placeholder: "تحديد وظيفة",
		menu_label_placeholder: "حدد أو أدخل علامة مميزة",
		default_repository_hover: "حدد مستودع التخزين الذي تم تحديده افتراضيا عند  قيام المستخدمين بتسجيل الدخول بالوحدة التابعة للانترنت من سطح المكتب هذا.<br><br><b>هام:</b> يجب اضافة مستودعات التخزين الى سطح مكتب كشف مستودعات التخزين المحدد قبل تحديد مستودع التخزين المفترض.",
		default_repository_workflow_hover: "<b>تذكر:</b> يمكنك توصيف مساحات التطبيق فقط لمستودعات التخزين التي تم توصيفها لسطح المكتب هذا.",
		remove_label: "ازالة",
		users_label: "المستخدمين",
		groups_label: "المجموعات",
		user_or_group_name_label: "اسم المستخدم أو المجموعة:",
		user_or_group_name_hover: "أدخل اسم المستخدم أو المجموعة الذي يعد صحيحا   لمستودع التخزين.  لم يتم التحقق من صلاحية الاسم.",
		user: "مستخدم",
		group: "المجموعة",
		name: "الاسم:",
		displayName: "اسم العرض",
		display_name: "اسم العرض:",
		shortName: "الاسم المختصر:",
		distinguishedName: "الاسم المميز:",
		search_tooltip: "‏بحث‏",
		add_tooltip: "‏اضافة‏",
		add_selected_tooltip: "اضافة الى الكشف المحدد",
		remove_tooltip: "ازالة",
		remove_selected_tooltip: "ازالة من الكشف المحدد",
		add_to_selected_tooltip: "‏اضافة‏",
		remove_from_selected_tooltip: "ازالة",
		move_up_selected_tooltip: "نقل لأعلى",
		move_down_selected_tooltip: "نقل لأسفل",
		advanced_search_options_tooltip: "المحددات المتقدمة",
		move_right_selected_tooltip: "نقل في قائمة فرعية",
		move_left_selected_tooltip: "نقل من قائمة فرعية",
		add_separator: "اضافة فاصل",
		menu_item_label: "التسمية المميزة لبند القائمة:",
		add_menu_label: "اضافة قائمة فرعية",
		menu_label: "التسمية المميزة للقائمة الفرعية:",
		menu_label_info: "<b>هام:</b> يجب أن تقوم باضافة بند قائمة واحد على الأقل الى هذه القائمة الفرعية قبل القيام بحفظ هذه القائمة.",
		menu_dropdown_label: "التسمية المميزة لاختيار الكشف المسقط:",
		menu_dropdown_label_info: "<b>هام:</b> يجب أن تقوم باضافة بند قائمة واحد على الأقل الى اختيار الكشف المسقط هذا قبل القيام بحفظ خط الأدوات هذا.",
		no_item_found: "لم يتم ايجاد نتائج.",
		me: "أنا",
		anyone: "أي أحد",
		specific_users: "مستخدمين محددين",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "قامت عملية البحث بارجاع أكثر من {0} نتيجة. قم بتغيير المعيار الخاص بك لتضييق نطاق عملية البحث الخاصة بك.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "تحتوي نتائج البحث على بنود تم تحديدها بالفعل. لن يتم عرض  هذه البنود في نتائج البحث.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "تم ارجاع أكثر من {0} نتيجة. استخدم مرشح البيانات لتقليل النتائج",

		user_already_selected: "تم تحديد المستخدم المحدد بالفعل.  حدد مستخدم مختلف.",
		group_already_selected: "تم تحديد المجموعة المحددة بالفعل.  حدد مجموعة مختلفة.",
		user_cannot_select_self: "لا يمكنك اضافة نفسك. حدد مستخدم مختلف.",

		/* Select User Group dialog */
		select_user_group_add_label: "‏اضافة‏",
		select_user_group_cancel_label: "‏الغاء‏",
		add_users_groups_label: "اضافة المستخدمين والمجموعات",
		add_user_group_label: "اضافة مستخدم ومجموعة",
		add_users_label: "اضافة مستخدمين",
		add_user_label: "اضافة مستخدم",
		add_label: "اضافة:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "تحتوي الوثائق التالية على تغييرات في التعليق التوضيحي لم يتم حفظها:",
		viewer_confirm_to_proceed: "هل تريد الاستمرار وفقد التغييرات؟",
		viewer_warn_has_changes: "سيتم الغاء التغييرات الخاصة بك التي لم يتم حفظها.",
		viewer_warn_is_printing: "قد لا يتم اكمال الطباعة الجاري تشغيلها.",
		viewer_warn_confirm_exit: "هل تريد الخروج؟",
		viewer_prompt_save_changes: "تحتوي الوثيقة التالية على تغييرات لم يتم حفظها للتعليق التوضيحي وسيتم فقدها:<br>${0}<br><br>هل تريد حفظ التغييرات؟",
		viewer_prompt_mergesplit_changes: "تحتوي الوثائق التالية على تغييرات لم يتم حفظها:<br>${0}<br><br>هل تريد الاستمرار وفقد التغييرات؟",
		viewer_prompt_mergesplit_tab_changes: "تحتوي الوثيقة التالية على تغييرات لم يتم حفظها:<br>${0}<br><br>هل تريد الاستمرار وفقد التغييرات؟",
		viewer_new_item_name: "وثيقة جديدة",
		viewer_top_frame: "الاطار الأعلى:",
		viewer_bottom_frame: "الاطار الأسفل:",
		viewer_left_frame: "الاطار الأيمن:",
		viewer_right_frame: "الاطار الأيسر:",
		viewer_viewer_frame: "اطار برنامج المشاهدة:",
		viewer_properties_frame: "اطار الخصائص:",
		viewer_comment_frame: "اطار التعقيب:",
		viewer_mergesplit_on: "‏مشاهدة‏",
		viewer_mergesplit_off: "الدمج والتقسيم",
		viewer_mergesplit_context_menu_move: "نقل",
		viewer_mergesplit_context_menu_rename: "اعادة تسمية",
		viewer_mergesplit_context_menu_delete: "‏حذف ‏",
		//move to new window
		viewer_move_to_new_window:"نقل الى نافذة جديدة",
		viewer_continue:"استبعاد التغييرات",
		viewer_return_to_original_window:"عودة الى النافذة الأصلية",
		viewer_switch_window:"تحويل النافذة",
		viewer_prompt_lost_changes:"الوثيقة ${0} مفتوحة حاليا في نافذة أخرى. توجد تغييرات لم يتم حفظها بالوثيقة.<br><br>هل تود التحول الى هذه النافذة لحفظ التغييرات، أو استبعاد التغييرات وفتحها في هذه النافذة؟",
		viewer_mergesplit_fallback_info: "يمكنك استكمال تصرف الدمج والتقسيم فقط بالوثائق التي توجد بنفس مستودع التخزين.",
		viewer_tabbed_layout: "مشاهدة كعلامات تبويب",
		viewer_tabbed_layout_highcontrast: "علامات التبويب",
		viewer_split_vertical_layout: "تقسيم النوافذ العلوية والسفلية",
		viewer_split_vertical_layout_highcontrast: "أعلى وأسفل",
		viewer_split_horizontal_layout: "تقسيم النوافذ اليسرى واليمنى",
		viewer_split_horizontal_layout_highcontrast: "يسار ويمين",
		viewer_add_vertical_layout: "علامة تبويب جديدة بالأسفل",
		viewer_add_vertical_layout_highcontrast: "علامة التبويب السفلية",
		viewer_add_horizontal_layout: "علامة تبويب جديدة على اليمين",
		viewer_add_horizontal_layout_highcontrast: "علامة التبويب اليمنى",
		viewer_add_horizontal_layout_rtl: "علامة تبويب جديد بالجانب الأيسر",
		viewer_add_horizontal_layout_rtl_highcontrast: "علامة التبويب اليسرى",
		viewer_split_properties_layout: "مشاهدة الخصائص",
		viewer_split_comment_layout: "مشاهدة التعقيبات",
		viewer_split_notelog_layout: "مشاهدة Notelog",
		viewer_window_title: "برنامج مشاهدة ${0}",
		viewer_next_hit: "مشاهدة الوثيقة التالية في الكشف",
		viewer_prev_hit: "مشاهدة الوثيقة السابقة في الكشف",
		viewer_confrim_more_search_results: "نتائج البحث لا تحتوي على المزيد من   الوثائق القابلة للمشاهدة. هل تريد استرجاع مزيد من نتائج البحث؟",
		viewer_confirm_get_next_page: "لا يحتوي كشف النتائج على المزيد من البنود   القابلة للمشاهدة. هل تريد استرجاع المزيد من نتائج البحث؟",
		viewer_confirm_get_next_item: "يحتوي كشف النتائج على المزيد من البنود القابلة للمشاهدة. هل تريد مشاهدة البند التالي؟",
		viewer_fn_annotation_tooltip: " تكوين بواسطة: ${0}، تكوين في: ${1}",
		viewer_box_note_limitation: "يمكنك فقط فتح ومشاهدة مذكرات Box في نافذة منفصلة.",
		viewer_click_to_open_box_note: "اضغط هنا لفتح مذكرة Box.",
		viewer_box_view_expiring: "الحد الأقصى لمقدار الوقت الذي يمكنك خلاله مشاهدة وثيقة Box هو 60 دقيقة. ستنتهي الجلسة الحالية الخاصة بك خلال ${0} دقيقة. اذا كنت تريد الاستمرار في التعامل مع الوثيقة، يجب أن تقوم باعادة تحميلها الآن. هل تريد اعادة تحميل الوثيقة؟",
		viewer_add_dialog_save_as_type: "نوع الحفظ باسم:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "تعارض في التخصيص",
		viewer_checkout_conflict: "تم تخصيص الوثيقة بواسطة مستخدم آخر.",
		viewer_checkout_confirm: "النسخة الأحدث لهذه الوثيقة متاحة. هل تريد الاستمرار في تخصيص الوثيقة أو تريد اعادة تحميل برنامج المشاهدة بالنسخة الأحدث؟ اذا قمت باختيار اعادة تحميل برنامج المشاهدة، سيتم فقد أية تغييرات لم يتم حفظها.",
		viewer_checkout_continue: "الاستمرار في عملية التخصيص",
		viewer_checkout_reload: "اعادة تحميل",
		viewer_status_building: "بناء وثيقة...",
		viewer_status_adding: "جاري اضافة وثيقة...",
		viewer_status_checking_in: "انهاء تخصيص وثيقة...",

		/* Class Selector Widget */
		include_subclasses_label: "تضمين الفئات الفرعية",
		include_subclasses_label2: "البحث في الفئات الفرعية أيضا",
		include_subclasses_note: "(تضمين الفئات الفرعية)",
		available_classes_col_header: "الفئات المتاحة",
		single_class_label: "البحث في فئة واحدة",
		multiple_classes_label: "البحث في فئات متعددة",
		multiple_classes_hover_help: "حدد هذا الاختيار للبحث في أكثر من فئة واحدة. يمكن أن تكون الفئات فئات رئيسية أو فئات فرعية. اذا قمت بتحديد هذا الاختيار، ستشاهد الخصائص والقيم المشتركة بالنسبة للفئات المحددة فقط.",
		selected_classes_col_header: "الفئات المحددة",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(بما يضمن الحافظات الفرعية)",
		favorites_pseudo_node: "\\التفضيلات\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "يجب أن تحدد حافظة في مستودع التخزين لاضافة الوثيقة لها.",
		no_permission_add_folder: "لا يتوافر لديك التصاريح اللازمة لاضافة حافظات الى هذه  الحافظة.",
		no_permission_add_document: "لا يتوافر لديك التصاريح اللازمة لاضافة وثائق الى هذه  الحافظة.",
		document_already_in_folder: "الوثيقة توجد في هذه الحافظة بالفعل.",
		cant_move_folder_onto_parent: "الحافظة توجد في هذه الحافظة بالفعل.",
		cant_move_folder_onto_self: "لا يمكنك نقل حافظة الى نفسها أو الحافظات الفرعية الخاصة  بها.",

		/* Workflow Widgets */
		process_application_space: "مساحة تطبيق العملية",
		process_role: "وظيفة العملية",
		process_inbasket: "سلة وارد العملية",
		process_worklist: "كشف العمل",
		process_step_processor: "بند عمل العملية",
		process_tracker: "تتبع بند العمل",
		process_info_subject: "الموضوع",
		process_info_stepname: "الخطوة",
		process_info_is_locked: "اقفال",
		process_info_no_access: "لا توجد امكانية توصل",
		process_info_received_on: "استلام في",
		process_info_overdue: "متأخر",
		process_info_reminder_sent: "تم ارسال مفكرة",
		process_info_locked_by_user: "تم الاقفال بواسطة",
		process_work_object_number: "رقم عنصر العمل",
		process_deadline: "تاريخ الاستحقاق:",
		process_launchedby: "تم البدء بواسطة:",
		process_receivedon: "تم الاستلام في:",
		process_step: "الخطوة:",
		process_properties: "الخصائص",
		process_attachments: "الملحقات",
		process_attachments_select: "تحديد الملحقات",
		process_finish_button_label: "ايقاف التتبع",
		process_tracker_history: "السجل التاريخي",
		process_tracker_milestones: "الأحداث المميزة",
		process_tracker_milestone: "حدث مميز",
		process_tracker_milestone_level: "المستوى",
		process_tracker_milestones_empty: "لا توجد أحداث مميزة ليتم عرضها.",
		process_tracker_level_selector_label: "عرض مستويات الحدث المميز حتى:",
		process_tracker_map_selector_label: "الترشيح وفقا للمناظرة:",
		process_tracker_message: "الرسالة",
		process_tracker_datereached: "التاريخ الذي تم الوصول اليه",
		process_tracker_stepname: "الخطوة",
		process_tracker_cycle: "دورة",
		process_tracker_review_cycle: "دورة المراجعة",
		process_tracker_participant: "مشارك",
		process_tracker_completed: "منتهي",
		process_tracker_response: "الاستجابة",
		process_tracker_comments: "التعقيبات",
		process_tracker_delete_confirmation: "هل تريد ايقاف تتبع مسار العمل التالي: ${0}؟",
		process_tracker_history_allmaps: "كل المخططات",
		process_tracker_history_workflow: "مسار العمل",
		process_tracker_history_terminate: "انهاء",
		process_tracker_history_malfunction: "خلل",
		process_filter_label: "ترشيح",
		process_no_filter_summary: "لا يتم تطبيق أي مرشح بيانات",
		process_filter_summary: "تم تطبيق ${0}",
		process_filter_reset_tooltip: "باستخدام ارجاع يتم الغاء مرشح البيانات وتجديد سلة الوارد.",
		process_attachments_add_folder: "اضافة حافظة",
		process_attachments_add_doc: "اضافة وثيقة",
		process_complete_button_label: "اتمام",
		process_save_button_label: "‏حفظ‏",
		process_launch_button_label: "بدء تشغيل مسار العمل",
		process_open_button_label: "فتح",
		process_movetoinbox_button_label: "نقل الى سلة الوارد",
		process_return_button_label: "رجوع",
		process_return_to_sender_tooltip: "ارجاع بند العمل الى سلة الوارد الأصلية",
		process_move_to_inbasket_tooltip: "نقل بند العمل الى سلة الوارد الشخصية",
		process_reassign_tooltip: "اعادة تخصيص بند العمل الى مالك آخر",
		process_reassign_button_label: "اعادة تخصيص",
		process_preferences_button_label: "التفضيلات",
		process_manageroles_button_label: "ادارة الوظائف",
		process_manageroles_no_members: "لا يوجد أعضاء.",
		process_responses_button_label: "المزيد من الاستجابات",
		process_morecustomaction_button_label: "‏تصرفات أخرى‏",
		process_show_instructions: "مشاهدة التعليمات",
		process_hide_instructions: "اخفاء التعليمات",
		process_remove_attachment: "ازالة",
		process_close_window: "تم تشغيل بند العمل.",
		process_delegate_flag: "يتطلب من المالك الحالي اعتماد بند العمل قبل توجيه المسار الخاص به الى الخطوة التالية في مسار العمل.",
		process_paticipant_voting: "عدد المشاركين المطلوبين لاعتماد التصويت:",
		process_get_next_label: "احضار بند العمل التالي",
		process_no_more_items: "لا يوجد المزيد من البنود في سلة الوارد ليتم   تشغيلها.",
		process_workflow_name: "اسم مسار العمل:",
		process_pattern_process_name: "مراجعة ${0}",
		process_instuctions: "تعليمات للقائمين بالمراجعة:",
		process_pattern_deadline: "تاريخ الاستحقاق:",
		process_reviewers: "القائمين بالمراجعة:",
		process_approvals_required: "الاعتمادات مطلوبة:",
		process_on_reject: "اذا تم رفض بند العمل:",
		process_return_to_originator: "العودة الي",
		process_return_to_previous_reviewer: "العودة الى القائم بالمراجعة السابق",
		process_additional_settings: "المحددات الاضافية:",
		process_allow_reassign: "السماح للمراجعين باعادة تخصيص هذه المراجعة",
		process_complete_notification: "اعلامي عند استكمال المراجعة",
		process_workflow_name_hover_help: "الاسم الذي تقوم بتحديده لبند العمل يجب  أن يكون سهل للقائمين بالمراجعة للتمييز بين بند المعل هذا وبنود العمل الأخرى  في سلة الوارد الخاصة بهم.",
		process_approvals_required_hover_help: "اذا تم مراجعة بند العمل بواسطة  عدة  أشخاص في نفس الوقت، يمكنك تحديد عدد الاعتمادات اللازمة لاستكمال بند  العمل بنجاح.",
		process_approval_options: "اختيارات الاعتماد",
		process_all: "كل",
		process_at_least: "على الأقل",
		process_at_least_by_count: "على الأقل ${0} من عدد القائمين بالمراجعة",
		process_at_least_by_percentage: "على الأقل ${0}% من عدد القائمين  بالمراجعة",
		process_comments: "تعقيبات:",
		process_review_step_comments_hover_help: "ذا قمت برفض بند العمل، يجب  ادخال  معلومات عن سبب رفضه. تقوم هذه المعلومات بالسماح لمنشئ بند العمل أو  القائم  بالمراجعة السابق بتحديد اهتماماتك.",
		process_rework_step_comments_hover_help: "يجب ادخال معلومات عن كيفية  تناول  التعقيبات. اذا كنت لا توافق على هذه التعقيبات، أدخل الأساس المنطقي  للقرار  الخاص بك.",
		process_rejection_reason: "سبب الرفض:",
		process_summary: "الملخص",
		process_sequential_review: "مراجعة متعاقبة",
		process_sequential_review_description: "سيتم مراجعة بند العمل بواسطة كل   قائم بالمراجعة بالترتيب.",
		process_parallel_review: "مراجعة متوازية",
		process_parallel_review_description: "سيتم مراجعة بند العمل بواسطة كل   القائمين بالمراجعة في نفس الوقت",
		process_parallel_approvals_required_error: "عدد الاعتمادات المطلوبة كبير   جدا. وقد تم تحديد ${0} فقط من المراجعين.",
		process_parallel_invalid_required_approvals_count: "القيمة غير صحيحة. ويجب  أن تكون القيمة ${0}.",
		process_subject_prompt: "أدخل الموضوع",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "بند العمل:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "مشاهدة الخصائص",
		view_permissions_level: "مشاهدة التصاريح",
		view_content_level: "مشاهدة الوثيقة",
		link_level: "رابط",
		modify_properties_level: "تحرير الخصائص",
		modify_content_level: "تحرير وثيقة",
		minor_version_level: "تحرير النسخة الثانوية",
		major_version_level: "تحرير النسخة الرئيسية",
		create_instance_level: "تكوين نسخة",
		delete_document_level: "حذف وثيقة",
		delete_item_level: "حذف بند",
		modify_document_permissions_level: "ادارة التصاريح",
		modify_folder_permissions_level: "ادارة التصاريح",
		modify_owner_level: "تعديل المالك",
		delete_folder_level: "حذف حافظة",
		file_in_folder_level: "اضافة الى الحافظات",
		create_subfolder_level: "تكوين حافظات فرعية",
		link_item_level: "اضافة تعليق توضيحي للوثيقة، اضافة الى الحافظة", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>وثيقة-فقط: يتم اضافة تعليق توضيحي الى الوثيقة أو ازالة تعليق توضيحي من الوثيقة</li><li>حافظة-فقط: يتم اضافة بنود الى الحافظة أو ازالة بنود من الحافظة</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "‏حذف ‏",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "المالك",
		/* previously \"Full control\" */
		edit_privilege: "المؤلف",
		/* previously \"Edit\" */
		read_only_privilege: "القارئ",
		/* previously \"Read only\" */
		no_access_privilege: "لا توجد امكانية توصل",
		share_with_label: "مشاركة مع:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "أنا فقط",
		public_label: "الجميع",
		members_label: "مستخدمين ومجموعات معينة",
		select_members_label: "تحديد...",
		select_user_group_label: "تحديد المستخدمين...",
		select_users_groups_label: "تحديد المستخدمين والمجموعات...",
		select_user_label: "تحديد مستخدم...",
		propagation_label: "النشر:",
		access_label: "التصاريح:",
		add_permission_add_label: "‏اضافة‏",
		security_policy_label: "سياسة السرية:",
		includes_inherited_access: "تضمين امكانية التوصل المتوارثة",
		customize_access_for_label: "تهيئة امكانية التوصل الى:",
		customize: "تهيئة",
		direct: "هذا البند",
		singleLevelInheritance: "مستوى واحد",
		infiniteLevelInheritance: "كل المستويات",
		inherited: "متوارث",
		direct_hover_help: "محددات السرية تنطبق على البند التالي",
		singleLevelInheritance_hover_help: "تنطبق هذه التصاريح على هذا البند وعلى التفرعات المباشرة التي تم توصيفها لتوارث السرية من هذا البند.",
		infiniteLevelInheritance_hover_help: "تنطبق هذه التصاريح على هذا البند وعلى كل الفروع التابعة التي تم توصيفها لتوارث السرية من هذا البند.",
		inherited_hover_help: "تم توارث هذه التصاريح من العنصر الرئيسي.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "تنطبق تصاريح ${0} هذه على هذا البند وعلى الفروع المباشرة التي تم توصيفها لتوارث السرية من هذا البند.",
		infiniteLevelInheritance_member_hover_help: "تنطبق تصاريح ${0} هذه على هذا البند وكل الفروع التابعة التي تم توصيفها لتوارث السرية من هذا البند.",
		inherited_member_hover_help: "تم توارث تصاريح ${0} هذه من المصدر الرئيسي.",
		partial_hover_help: "تم تغيير محددات سرية البند من خلال المستخدم",
		allow: "السماح",
		deny: "رفض",
		basic: "أساسي",
		advanced: "متقدمة",
		permission_type: "تحديد امكانية التوصل الى:",
		share_with_hover_help: "يتم مشاركة البند حاليا مع المستخدمين والمجموعات التالية.",
		direct_security_policy_hover_help: "محددات سياسة السرية هذه تسمح لك بتغيير سرية هذا البند.",
		security_policy_hover_help: "محددات سياسة السرية لهذا البند للقراءة فقط لأن محددات سياسة السرية تمنعك من تغيير سرية هذا البند.",
		security_remove: "لا توجد تصاريح",
		pseudo_group_label: "حسابات الأسماء البديلة",
		marking_hover_help: "يتم التحكم في سرية هذا البند بواسطة فئة التعليم، والتي يمكن أن تؤثر على سرية البند.",
		note_label: "هام:",
		marking_text: "تم تعليم هذا البند على أنه: ${0}. قد يحتوي على البند على قيود سرية اضافية.",
		authenticated_users: "مستخدمين موثقين",
		realm_users: "مستخدمي ${0}",
		denyAll: "رفض الكل",
		allowAll: "السماح بالكل",
		remove_direct_text: "عند حفظ التغييرات الخاصة بك، سيتم ازالة تصاريح هذا العضو من البند.",
		remove_single_inheritance_text: "عند حفظ التغييرات الخاصة بك، سيتم ازالة تصاريح هذا العضو من البند ومن <br>الفروع المباشرة التي تم توصيفها لتوارث السرية من البند.<p>هل تريد  الاستمرار؟",
		remove_infinite_inheritance_text: "عند حفظ التغييرات الخاصة بك، سيتم ازالة تصاريح هذا العضو من البند ومن <br>كل الفروع التابعة التي تم توصيفها لتوارث السرية من هذا البند.<p>هل تريد  الاستمرار؟",
		remove_inheritance_text: "عند حفظ التغييرات الخاصة بك، سيتم ازالة تصاريح هذا العضو من البند ومن <br>كل الفروع التابعة التي تم توصيفها لتوارث السرية من هذا البند. التصاريح فقط <br>التي تم توارثها بواسطة هذا البند ستظل موجودة.<p>هل تريد  الاستمرار؟",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "ازالة تصاريح ${0}",

		security_proxy_text: "سرية هذا البند للقراءة فقط.",
		security_proxy_declared_text: "تكون سرية هذا البند للقراءة فقط لأنه تم   تعريفها بواسطة proxy للسرية.",
		security_proxy_hover_help: "يتم التحكم في سرية هذا البند بواسطة السرية التي تم تحديدها في عنصر آخر في مستودع التخزين.",
		add_permissions_label: "اضافة تصاريح",
		permission_propagation_direct: "الحافظة هذه فقط",
		permission_propagation_onelevel: "هذه الحافظة ومستوى واحد لأسفل",
		permission_propagation_alllevels: "هذه الحافظة وكل المستويات التي تحتها",
		document_propagation_label: "تحديد امكانية التوصل الى:",
		document_propagation_FOLDER: "‏حافظة‏",
		document_propagation_DOCUMENT: "وثيقة",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "مصدر التوثيق:",

		/* Versions Widget */
		object_versions_selector_label: "النسخ:",
		object_versions_label: "النسخ",
		object_type_document_label: "الوثيقة:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "الحافظات التي تم الحفظ بها",
		folders_filed_in_folder_col_hdr: "‏حافظة‏",
		folders_filed_in_path_col_hdr: "المسار",
		folders_filed_in_containment_name_col_hdr: "اسم الاحتواء",
		folders_filed_in_creator_col_hdr: "تكوين بواسطة",
		folders_filed_in_date_created_col_hdr: "التكوين في",

		/* Parent Documents */
		properties_parent_documents_label: "الوثائق الرئيسية",

		/* Select object dialog */
		select_object_title: "تحديد بند",
		select_object_breadCrumb_version_prefix: "نسخ الى: ",
		show_versions_label: "عرض النسخ",
		use_current_version_label: "استخدام النسخة الحالية",
		use_released_version_label: "استخدام النسخة التي تم اصدارها",

		/* Select content class dialog */
		select_class: "تحديد فئة",
		/* Select Search dialog */
		select_search: "حدد بحث",

		/* Show hyperlink dialog */
		show_hyperlink_title: "مشاهدة الرابط",
		show_hyperlink_intro: "يمكنك نسخ ولصق الرابط في البريد الالكتروني والمحادثات وصفحات الانترنت. اذا كان هناك عدة نسخ للبند، حدد النسخة التي تريد الربط اليها.",
		show_hyperlink_intro_no_version_select: "يمكنك نسخ ولصق الرابط في البريد   الالكتروني والمحادثات وصفحات الانترنت.",
		show_text_label: "النسخة:",
		released_button_label: "تم الاصدار",
		current_button_label: "حالي",
		select_button_label: "نسخة محددة",
		show_hyperlink_no_released_version_msg: "لا توجد نسخة تم اصدارها من هذه   الوثيقة.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "بدء تشغيل مسار العمل",
		edit_workflow_title: "خصائص بند العمل",
		start_workflow_intro: "قم ببدء مسار العمل لتشغيل البنود المحددة. اذا كنت   تريد تخصيص بنود العمل الى مستخدم معين، حدد مالك.",
		edit_workflow_intro: "يمكنك تحرير الخصائص لبنود العمل المحددة. اذا كنت   تريد اعادة تخصيص بند العمل لمستخدم آخر، حدد مالك.",
		workflow_field_label: "مسار العمل:",
		priority_field_label: "الأولوية:",
		owner_field_label: "المالك:",
		start_button_label: "بدء",
		save_button_label: "‏حفظ‏",
		owner_value_hint: "قم بادخال مجموعة حروف أبجدية عددية بحد أقصى 32 حرف. يمكن أن تحتوي مجموعة الحروف على مسافات أو الحروف التالية فقط: a-z و  A-Z و 0-9 و ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "عناصر المحتوى",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "القيمة غير صحيحة. يمكن أن تحتوي القيمة على مسافات أو الحروف التالية فقط: a-z و  A-Z و 0-9 و ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "أدخل قيمة من 1 الى 32000 للاشارة الى أهمية بند العمل.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "القيمة غير صحيحة. يجب أن تكون الأولوية قيمة من 1 الى 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "اسم مسار العمل غير موجود.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "تأجيل من مسار العمل",
		suspend_workitems_intro: "عند تأجيل بند عمل من مسار العمل، فانه لا يمكن تشغيل بند العمل حتى يتم استئنافه.",
		suspend_workitems_options_label: "تأجيل بنود العمل المحددة:",
		suspend_until_resume_label: "حتى يتم استئنافه يدويا",
		suspend_until_date_label: "حتى",
		suspend_for_duration_label: "من أجل",
		suspend_for_duration_hours: "‏ساعات‏",
		suspend_for_duration_days: "يوم/أيام",
		suspend_for_duration_weeks: "أسبوع/أسابيع",
		suspend_for_duration_months: "أشهر",
		suspend_for_duration_years: "سنوات",
		suspend_button_label: "تأجيل",
		suspend_duration_value_hint: "أدخل قيمة بالمدى 1 - 99 للمدة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "القيمة غير صحيحة. يجب أن تكون القيمة في المدى 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "ازالة من مسار العمل",
		remove_workflow_confirmation: "هل تريد ازالة البنود المحددة من مسار العمل؟<br>تم  تحديد  ${0} بند.",
		remove_workflow_button_label: "ازالة",

		/* Unfile dialog */
		unfile_dialog_title: "ازالة من الحافظة",
		unfile_dialog_remove_from_folder_label: "ازالة من:",
		unfile_dialog_info_text: "يمكنك ازالة البنود من الحافظات. ولكن، بازالة أحد البنود من كل الحافظات لن يؤدي الى ازالة البند من مستودع التخزين. ومايزال من الممكن استرجاع البند من خلال تشغيل أحد عمليات البحث. وسيتم عرض الحافظات التي لديك صلاحيات مشاهدة لها فقط من هذا الكشف.",
		unfile_dialog_select_all: "تحديد الكل",
		unfile_dialog_deselect_all: "محو الكل",
		unfile_dialog_remove_button_label: "ازالة",
		unfile_dialog_select_folder_col_hdr: "تحديد حافظة",
		unfile_dialog_folder_col_hdr: "‏حافظة‏",
		unfile_dialog_path_col_hdr: "المسار",
		unfile_dialog_not_filed_msg: "هذا البند لا يوجد في أي من الحافظات.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "لا تتوافر لديك التصاريح اللازمة لازالة هذا البند من أي من الحافظات التي يوجد بها هذا البند.",
		unfile_dialog_folder_not_selectable_tooltip: "لا يتوافر لديك التصاريح اللازمة لازالة هذا البند من هذه الحافظة.",
		unfile_multi_prompt: "هل تريد ازالة البنود المحددة من الحافظة ${0}؟",
		unfile_large_number_items_confirmation_question: "قمت بتحديد ${0} بند/بنود لازالته من الحافظة ${1}.<br/>قد يستغرق ازالة عدد كبير من البنود من الحافظة وقت طويل.<br/>هل تريد  الاستمرار؟",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "فتح",
		move_to_folder_title: "نقل لحافظة",
		move_to_folder_button_caption: "نقل",
		move_to_folder_label: "نقل الى:",
		add_to_folder_title: "اضافة الى الحافظة",
		add_to_folder_button_caption: "‏اضافة‏",
		add_to_folder_label: "اضافة الى:",
		copy_to_folder_title: "نسخ الى حافظة",
		copy_to_folder_button_caption: "‏نسخ‏",
		copy_to_folder_label: "نسخ الى:",
		copy_to_folder_delete_label: "بعد اتمام عملية النسخ، قم بحذف البند (البنود) المحدد من Box.",
		move_from_folder_label: "نقل من:",
		move_file_info_text: "يمكنك نقل بنود من حافظة الى أخرى.",
		move_folder_info_text: "يمكنك نقل حافظات من حافظة رئيسية الى أخرى.",
		add_doc_to_folder_info_text: "يمكنك اضافة بنود الى حافظة واحدة أو أكثر.   اذا كان البند يوجد في حافظة بالفعل، سيظل بهذه الحافظة وسيتم اضافته الى أي   حافظة اضافية تقوم بتحديدها.",
		copy_doc_to_folder_info_text: "يمكنك نسخ البنود الى حافظة.",
		box_copy: "نسخ Box",
		box_copy__button_caption: "‏نسخ‏",
		box_copy_to_info_text: "حدد مستودع التخزين والحافظة حيث تريد نسخ البنود المحددة الخاصة بك من Box.",
		box_copy_from_info_text: "حدد مستودع التخزين والحافظة حيث تريد نسخ البنود المحددة الخاصة بك من Box.",
		box_copy_version_info_text: "لاضافة وثيقة جديدة، حدد مستودع التخزين والحافظة. لانهاء تخصيص نسخة جديدة، حدد مستودع التخزين والوثيقة.",
		admin_box_copy: "نسخ Box",
		admin_box_copy_hover: "يسمح هذا الاختيار للمستخدمين بنسخ الوثائق الى Box.",

		no_permission_to_copy_version_msg: "لا يمكنك نسخ الوثيقة من Box كنسخة جديدة للوثيقة المحددة. لا يتوافر لديك التصاريح المناسبة لتحرير الوثيقة المحددة، أو تم تخصيص الوثيقة المحددة بواسطة شخص آخر.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "لا تتوافر لديك التصاريح اللازمة لازالة هذا البند من أي من الحافظات التي يوجد بها هذا البند.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "لا يتوافر لديك التصاريح اللازمة لازالة هذا البند من هذه الحافظة.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "لا يمكن نقل هذا البند لأنه تم حفه بأي من الحافظات. قم بتحديد بند آخر.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "بدء تشغيل مسار العمل",
		subscriptions_dialog_available_items_label: "البنود المتاحة:",
		subscriptions_dialog_info_text: "حدد مسار المعل الذي سيتم بدئه.",
		subscriptions_dialog_select_button_label: "‏حسنا‏",
		subscriptions_dialog_name_col_hdr: "الاسم",
		subscriptions_dialog_desc_col_hdr: "‏الوصف‏",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "ادارة الوظائف",
		manageroles_dialog_info_text: "يمكنك تعديل كشف المستخدمين لكل وظيفية  مرفقة  مع مساحة تطبيق العملية هذه.",
		manageroles_dialog_members_label: "الأعضاء",
		manageroles_dialog_roles_label: "الوظائف",
		manageroles_dialog_add_button_label: "اضافة المستخدمين والمجموعات",
		manageroles_dialog_remove_button_label: "ازالة",
		manageroles_dialog_save_button_label: "‏حفظ‏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "لا توجد مسارات عمل مصاحبة لهذا البند.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "تفضيلات مسار العمل",
		workflow_pref_dialog_info_text: "حدد أحداث مسار العمل التي تريد استلام اعلامات بريد الكتروني لها. يمكنك أيضا اتاحة الاختيار لتوجيه العمل الخاص بك لشخص آخر من خلال تحديد مستخدم لتفويض العمل له.",

		workflow_pref_general: "‏عام‏",
		workflow_pref_email_address: "عنوان البريد الالكتروني",
		workflow_pref_email_address_hover: "حدد عنوان البريد الالكتروني حيث تريد استلام اعلامات مسار العمل.",
		workflow_pref_preferred_locale: "لغة",
		workflow_pref_preferred_locale_hover: "تحدد اللغات التي يتم عرض اعلامات البريد الالكتروني بها.",

		workflow_pref_work_item_notice: "اعلامات بنود العمل",
		workflow_pref_step_new_assignment: "تم تخصيص بند عمل جديد لي",
		workflow_pref_step_new_assignment_hover: "اعلامي عند استلام بند عمل جديد.",
		workflow_pref_step_expired_deadline: "تم مرور الموعد النهائي لبند العمل",
		workflow_pref_step_expired_deadline_hover: "اعلامي عند مرور الموعد النهائي لبند عمل.",
		workflow_pref_step_reminders: "عند اقتراب الموعد النهائي لبند عمل",
		workflow_pref_step_reminders_hover: "تذكيري ببند العمل عند اقتراب الموعد النهائي الخاص به.",

		workflow_pref_originator_notice: "اعلام القائم بالتكوين",
		workflow_pref_milestone_reached: "تم الوصول الى الحدث المميز",
		workflow_pref_milestone_reached_hover: "اعلامي عند الوصول الى حدث مميز في مسار العمل الذي قمت ببدئه.",

		workflow_pref_tracker_notice: "اعلامات القائم بالتتبع لمسار العمل",
		workflow_pref_tracker_new_assignment: "تم تخصيص بند تتبع جديد لي",
		workflow_pref_tracker_new_assignment_hover: "اعلامي عند بدء تشغيل مسار عمل أقوم بتتبعه.",
		workflow_pref_tracker_deadline_reminders: "اقتراب الموعد النهائي لمسار العمل",
		workflow_pref_tracker_deadline_reminders_hover: "تذكيري بمسار العمل عند اقتراب الموعد النهائي لمسار العمل.",
		workflow_pref_tracker_deadline_expired: "تم مرور الموعد النهائي لمسار العمل",
		workflow_pref_tracker_deadline_expired_hover: "اعلامي عند مرور الموعد النهائي لمسار عمل.",
		workflow_pref_tracker_exception: "حدث خطأ بمسار العمل",
		workflow_pref_tracker_exception_hover: "اعلامي عند حدوث خطأ أو استثناء بمسار عمل.",
		workflow_pref_tracker_expired_deadline: "مضى الموعد النهائي لاتمام الخطوة",
		workflow_pref_tracker_expired_deadline_hover: "اعلامي عند مرور الموعد النهائي للخطوة على مسار عمل أقوم بتتبعه.",
		workflow_pref_tracker_milestone_reached: "تم الوصول الى الحدث المميز",
		workflow_pref_tracker_milestone_reached_hover: "اعلامي عند الوصول الى حدث مميز في مسار العمل الذي قمت بتتبعه.",

		workflow_pref_out_notice: "خارج المكتب",
		workflow_pref_proxy_user: "تفويض العمل الى",
		workflow_pref_proxy_user_hover: "استخدم هذا الاختيار لتوجيه العمل الخاص بك آليا الى مستخدم آخر، على سبيل المثال، عندما تكون بعيدا عن المكتب أو في أجازة.",
		workflow_pref_workflow: "مسار العمل",
		workflow_pref_on: "تشغيل",
		workflow_pref_off: "الغاء اتاحة",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "بدء تشغيل مسار العمل",
		transfered_workflows_dialog_info_text: "حدد مسار عمل لبدء تشغيله.",
		transfered_workflows_dialog_available_items_label: "البنود المتاحة:",
		transfered_workflows_dialog_select_button_label: "بدء تشغيل",
		transfered_workflows_dialog_name_col_hdr: "الاسم",
		transfered_workflows_dialog_no_item_found: "لم يتم ايجاد مسارات عمل تم   نقلها.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "نقل مسار العمل",
		transfer_workflow_dialog_info_text: "حدد مسار عمل لنقله الى نظام مسار العمل.",
		transfer_workflow_dialog_use: "استخدام اسم مسار العمل هذا",
		transfer_workflow_dialog_use_another: "استخدام اسم مسار عمل آخر",
		transfer_workflow_dialog_in_use: "اسم مسار العمل هو: ",
		transfer_workflow_dialog_transfer_button_label: "تحويل",
		transfer_workflow_dialog_no_items_found: "لم يتم ايجاد مسارات عمل تم   نقلها.",
		transfer_workflow_dialog_use_hover: "حدد اسم مسار العمل الحالي من تعريف مسار العمل.",
		transfer_workflow_dialog_another_hover: "حدد اسم مسار عمل مختلف أو قم باعادة استخدام اسم مسار العمل الحالي الذي تم نقله.",

		/*Search In control*/
		search_in_title: "البحث في:",
		search_in_teamspaces: "مساحات الفريق",
		search_in_repositories: "مستودعات التخزين",
		search_in_thisteamspaces: "مساحة الفريق هذه",

		ajaxViewer_save: "حفظ التفسيرات",
		ajaxViewer_print: "معاينة الطباعة",
		ajaxViewer_firstPage: "الصفحة الأولى",
		ajaxViewer_previousPage: "الصفحة السابقة",
		ajaxViewer_nextPage: "الصفحة التالية",
		ajaxViewer_lastPage: "الصفحة الأخيرة",
		ajaxViewer_unknownPageCount: "1 من ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} من ${1}",
		ajaxViewer_zoomOut: "تصغير",
		ajaxViewer_zoomIn: "تكبير",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "ملائمة العرض",
		ajaxViewer_fitHeight: "ملائمة الارتفاع",
		ajaxViewer_fitPage: "ملائمة الصفحة",
		ajaxViewer_rotate270: "دوران 270 درجة",
		ajaxViewer_rotate90: "دوران 90 درجة",
		ajaxViewer_rotate180: "دوران 180 درجة",
		ajaxViewer_darken: "أدكن",
		ajaxViewer_lighten: "أفتح",
		ajaxViewer_lessContrast: "تباين أقل",
		ajaxViewer_moreContrast: "تباين أكثر",
		ajaxViewer_invert: "عكس",
		ajaxViewer_createHighlight: "اظهار",
		ajaxViewer_createNote: "تعليق توضيحي",
		ajaxViewer_editAnnotation: "تحرير خصائص التعليق التوضيحي",
		ajaxViewer_deleteAnnotation: "حذف تعليق توضيحي",
		ajaxViewer_editAnnotationTitle: "تحرير خصائص التعليق التوضيحي",
		printableView_print: "طباعة",
		printableView_close: "‏اغلاق‏",

		search_results_dropdown_button: "عرض النتائج",
		search_results_columns_label: "عرض نتائج البحث",
		search_results_columns_description: "حدد الخصائص التي تريد عرضها في نتائج البحث.",
		search_results_sortby_label: "الفرز بواسطة:",
		search_results_order_label: "ترتيب الفرز:",
		search_results_accending_label: "تصاعدي",
		search_results_descending_label: "تنازلي",
		search_results_available_properties: "المتاح",
		search_results_selected_properties: "المحدد",
		search_rank_property: "الرتبة (بحث النص فقط)",
		search_name_attribute: "الاسم (${0})",
		search_results_summary_enabled_label: "اتاحة ملخصات المحتويات (بحث النص فقط)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "عمليات البحث",
		manage_teamspace_classes_tab_title: "فئات",
		manage_teamspace_entry_templates_tab_title: "قوالب إدخال",
		manage_teamspace_team_tab_title: "الفريق",
		manage_teamspace_roles_tab_title: "الوظائف",
		manage_teamspace_dialog_title: "تعديل مساحة الفريق",
		manage_teamspace_button_label: "تعديل مساحة الفريق",
		manage_teamspace_team_pane_heading: "تحديد فريق",
		manage_teamspace_classes_pane_heading: "تحديد الفئات",
		manage_teamspace_entry_templates_pane_heading: "تحديد قوالب الادخال",
		manage_teamspace_no_rights_message: "لا يتوافر لديك التصاريح المناسبة لتعديل مساحة الفريق هذه.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "خصائص مساحة الفريق",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "حدد الخصائص التي يتم عرضها للوثائق والحافظات في كشف المحتويات عند قيام المستخدمين بالتجول. يمكنك أيضا تحديد ترتيب عرض الخصائص.",
		teamspace_props_sel_cols_use_default_label: "استخدام محددات <b>الاستعراض</b> لمستودع التخزين هذا",
		teamspace_props_sel_cols_use_default_tooltip: "تستخدم المحددات التي يتم ادخالها بصفة الاستعراض لمستودع التخزين هذا في أداة الادارة.",
		teamspace_props_general_tab_label: "‏عام‏",
		teamspace_props_column_props_tab_label: "الخصائص المعروضة",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "اختيار ملف لاستقباله",
		teamspace_import_template_instruction: "يمكنك تحديد ملف تصدير قالب مساحة   الفريق لاستقباله.",
		teamspace_import_template_button_label: "‏استقبال‏",
		teamspace_import_template_dialog_label: "استقبال قالب مساحة الفريق",

		/* Annotation Dialog */
		annotationDlg_title: "التعليقات التوضيحية",
		annotationDlg_description: "الوثيقة المحددة تحتوي على التعليقات التوضيحية التالية:",
		annotationDlg_msg_noAnnotations: "لا توجد تعليقات توضيحية. اضغط اضافة   لتكوين تعليق توضيحي.",
		annotationDlg_pageLabel: "الصفحة: ${pageNum}",
		annotationDlg_accLabel: "ACCESS: ${accType}",
		annotationDlg_accLabel_public: "عام",
		annotationDlg_accLabel_private: "خاص",
		annotationDlg_accLabel_privateGroup: "خاص (${groupName})",
		annotationDlg_copiable: "يمكن النسخ الى وحدة خدمة أخرى",
		annotationDlg_cannotCopy: "لا يمكن النسخ الى وحدة خدمة أخرى",
		annotationDlg_addButtonLabel: "‏اضافة‏",

		/* Share Dialog */
		is_shared: "مشترك",
		is_share_pending: "مشاركة معلقة",
		share_title: "مشاركة Box",
		share_instructions_new: "قم بارسال بريد الكتروني يتضمن رابط للملف الذي تتم مشاركته. يستطيع أي شخص يتوافر لديه الوصلة التوصل للملف.",
		share_instructions_existing: "قم بارسال بريد الكتروني يتضمن رابط للملف الذي تتم مشاركته. يستطيع أي شخص يتوافر لديه الرابط التوصل للملف. يمكن أن تتوافر الوصلة لدى الأشخاص الآخرين لقيام شخص ما بمشاركة هذا الملف بالفعل.",
		share_instructions_another_version_shared: "قم بارسال بريد الكتروني يتضمن الرابط للملف الذي تتم مشاركته. يستطيع أي شخص يتوافر لديه الرابط التوصل للملف. يمكن أن يتوافر الرابط لدى الأشخاص الآخرين لقيام شخص ما بمشاركة نسخة أخرى من هذا الملف بالفعل.",
		share_buttonLabel_share: "مشاركة",
		share_email_addresses: "ارسال الى:",
		share_email_addresses_hover: "عند اتمام المشاركة، يتم ارسال رابط لعناوين البريد الالكتروني هذه. اذا لم تقم بادخال أي شيء، سيتم ارسال الوصلة لعنوان البريد الالكتروني الخاص بك.",
		share_email_addresses_reshare_hover: "عند اتمام المشاركة، يتم ارسال رابط لعناوين البريد الالكتروني هذه. اذا لم تقم بادخال أي شيء، لن يتم ارسال بريد الكتروني.",
		share_password: "تحديد كلمة سرية:",
		share_password_placeholder: "اختيارى",
		share_comments: "الرسالة:",
		share_comments_default: "أريد مشاركة الملف الخاص بي معك في Box.",
		share_myEmail: "ارسال من:",
		share_expiration: "حدد تاريخ انتهاء الوصلة:",
		share_expire: "تنتهي امكانية التوصل في:",
		share_expire_none: "عدم انتهاء الصلاحية مطلقا",
		share_allowDownload: "السماح بالتحميل",
		share_add: "‏اضافة‏",
		share_advanced_instructions: "تنطبق محددات التحميل وانتهاء الصلاحية وكلمة السرية على الملف الذي يتم مشاركته في Box.",
		share_advanced_existing_instructions: "تنطبق محددات التحميل وانتهاء الصلاحية وكلمة السرية على الملف الذي يتم مشاركته في Box.",
		share_options_edit_warning: "هام: أي تغييرات بهذه المحددات تؤثر على أي شخص لديه الوصلة، متضمنة الأشخاص الذين تتوافر لديهم الوصلة بالفعل.",
		share_link: "الوصلة:",
		share_email_addresses_placeholder: "عناوين البريد الالكتروني",
		share_email_address_placeholder: "عنوان البريد الالكتروني",
		share_email_address_invalid: "أدخل عنوان بريد الكتروني صحيح.",
		share_cannot_share_with_self: "لا يمكنك مشاركة الملفات مع نفسك. حدد مستخدم مختلف.",
		share_selected_version_with_minor_warning_hover: "يتم مشاركة النسخة ${0} للوثيقة. قمت بتحديد النسخة ${1}.<br><br><b>تحذير</b>: اذا قمت بمشاركة النسخة ${1}، لا يمكن مشاركة النسخة${2} الا اذا تم حذف مشاركة النسخة ${1}.",
		share_selected_version_hover: "يتم مشاركة النسخة ${0} للوثيقة. قمت بتحديد النسخة ${1}.",
		share_selected_version_message: "هام: يتم مشاركة النسخة ${0} للوثيقة. قمت بتحديد النسخة ${1}.",
		share_different_version_message: "هام: قمت بتحديد النسخة ${1}، لكنه يتم مشاركة النسخة ${0} للوثيقة بالفعل.  لا يمكنك مشاركة النسخة ${1} الا اذا قمت بحذف عملية المشاركة، لكن يمكنك مشاركة الرابط الى النسخة ${0} بدلا من ذلك.",
		share_version_message: "هام: يتم مشاركة النسخة ${0} للوثيقة. حدد النسخة التي تريد مشاركتها.",
		share_version_new: "مشاركة النسخة ${0}",
		share_version_new_p8_hover: "سيؤدي مشاركة هذه الوثيقة الى تكوين رابط نسخة معين للنسخة المحددة فقط.<br><br>عند مشاركة وثيقة بالفعل:<ul><li>يمكنك مشاركة نسخة أحدث، ويتم اعادة توجيه الرابط الى النسخة الأحدث.</li><li>لا يمكنك مشاركة نسخة سابقة الا اذا قمت بحذف المشاركة أولا.</li></ul>",
		share_version_new_cm_hover: "سيؤدي مشاركة هذه الوثيقة الى تكوين رابط نسخة معين للنسخة المحددة فقط.<br><br>عند مشاركة وثيقة بالفعل:<ul><li>يمكنك مشاركة نسخة أحدث، ويتم اعادة توجيه الرابط الى النسخة الأحدث.</li><li>لا يمكنك مشاركة نسخة سابقة.</li></ul>",
		share_version_update: "مشاركة النسخة ${0} (تحديث اختيارات المشاركة).",
		share_version_update_p8_hover: "ستقوم عملية مشاركة هذه الوثيقة بالاحتفاظ بالرابط الى النسخة المحددة فقط.<br><br>عند مشاركة وثيقة بالفعل:<ul><li>يمكنك مشاركة نسخة أحدث، ويتم اعادة توجيه الرابط الى النسخة الأحدث.</li><li>لا يمكنك مشاركة نسخة سابقة الا اذا قمت بحذف المشاركة أولا.</li></ul>",
		share_version_update_cm_hover: "ستقوم عملية مشاركة هذه الوثيقة بالاحتفاظ بالرابط الى النسخة المحددة فقط.<br><br>عند مشاركة وثيقة بالفعل:<ul><li>يمكنك مشاركة نسخة أحدث، ويتم اعادة توجيه الرابط الى النسخة الأحدث.</li><li>لا يمكنك مشاركة نسخة سابقة.</li></ul>",
		share_version_change_to_current: "مشاركة النسخة ${0} (تحديث المشاركة مع النسخة المحددة).",
		share_version_change_to_current_p8_hover: "سيؤدي مشاركة هذه الوثيقة الى تحديث الرابط للاشارة الى النسخة المحددة فقط.<br><br>عند مشاركة وثيقة بالفعل:<ul><li>يمكنك مشاركة نسخة أحدث، ويتم اعادة توجيه الرابط الى النسخة الأحدث.</li><li>لا يمكنك مشاركة نسخة سابقة الا اذا قمت بحذف المشاركة أولا.</li></ul>",
		share_version_change_to_current_cm_hover: "سيؤدي مشاركة هذه الوثيقة الى تحديث الرابط للاشارة الى النسخة المحددة فقط.<br><br>عند مشاركة وثيقة بالفعل:<ul><li>يمكنك مشاركة نسخة أحدث، ويتم اعادة توجيه الرابط الى النسخة الأحدث.</li><li>لا يمكنك مشاركة نسخة سابقة.</li></ul>",
		share_repository: "مستودع التخزين للملفات التي يتم مشاركتها",
		share_repository_hover: "اذا لم تقم بمشاهدة خصائص Box التي تريد استخدامها، يمكنك اضافة مستودع تخزين Box جديد في صفحة مستودعات التخزين.",
		share_options: "اختيارات المشاركة",
		unshare_confirm: "اذا قمت بحذف المشاركة، سيتم اتلاف كل روابط المشاركة، متضمنة روابط المشاركة التي تم ارسالها مسبقا بواسطة مستخدمين آخرين. أي مستخدم آخر يريد مشاركة الوثيقة يجب أن يحدد الوثيقة الأصلية ومشاركتها مرة أخرى.<br><br>هل تريد حذف المشاركة بالفعل؟",
		unshare_button: "حذف مشاركة Box",
		admin_share: "خدمات مشاركة Box:",
		admin_share_hover: "السماح للمستخدمين بمشاركة وثيقة من أي مستودع تخزين تم اتاحة مشاركة Box به. تتضمن مشاركة وثيقة نسخ الملف الى Box وتكوين رابط وارسال الرابط في بريد الكتروني.",
		admin_my_email_modifiable: "السماح للمستخدمين بتعديل عنوان البريد الالكتروني للمجال ارسال من.",
		admin_my_email_modifiable_hover: "افتراضيا، بالنسبة لمشاركة Box، يكون عنوان البريد الالكتروني للمستخدم للقراءة فقط ويتم الحصول عليه من مناظرة للمستخدمين وعناوين البريد الالكتروني التي تمثل حسابات مستخدمي Box.<br><br>حدد هذا الاختيار للسماح للمستخدمين بتحرير عنوان البريد الالكتروني الخاص بهم عند قيامهم بالمشاركة؛ لكن، لا يتم التحقق من صلاحية عنوان البريد الالكتروني.",
		admin_repos_admin_user: "المسئول عن المشاركة:",
		admin_repos_admin_user_hover: "حدد المسئول عن المشاركة اذا كان لديك سطح مكتب تم اتاحة خدمات مشاركة  Box به وتم تحديد مستودع تخزين Box هذا كمستودع تخزين للملفات التي يتم مشاركتها.<br><br>اضغط تحديد وتسجيل الدخول الى Box باستخدام حساب مسئول نظام Box صحيح.<br><br>يجب أن يكون مسئول المشاركة هو مسئول نظام Box  الذي تم توصيفه بحيث يتوافر لديه مساحة تخزين غير محدودة في Box.",
		admin_repos_admin_user_not_set_warning: "لم يتم توصيف مسئول نظام Box لمستودع التخزين المحدد.<br><br>تم الغاء اتاحة خدمات مشاركة Box حتى تقوم بتحديد مسئول نظام Box لمستودع التخزين المحدد، أو حدد مستودع تخزين Box آخر حيث يكون مسئول نظام Box تم توصيفه.<br><br>يمكنك تحديد مسئول نظام Box في قسم خدمات مشاركة Box في صفحة عام الخاصة بمستودع التخزين.",
		admin_share_not_configured_warning: "قبل استخدام خدمات مشاركة Box، فانه يجب أولا اضافة وتحديد مستودع تخزين Box مع توثيق وحدة الخدمة.",
		/* Office Online Server settings */
		admin_office_online_title: "توصيف Office Online",
		admin_office_online_server_enable: "وحدة خدمة Office Online Server:",
		admin_office_online_server_enable_hover: "حدد ما اذا كنت تريد منح المستخدمين الذين لديهم امكانية توصل لسطح المكتب هذا امكانية تحرير وثائق Office الخاصة بهم باستخدام وحدة خدمة Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "السماح بالتحرير المشترك",
		admin_office_online_allow_collaborative_editing_hover: "السماح بأكثر من مستخدم واحد للتعامل مع نفس الوثيقة. قم بمحو الاختيار اذا كنت تريد تقييد تحرير الوثائق ليقتصر على مستخدم واحد.",
		admin_office_online_repository_not_set_warning: "قبل اتاحة خدمة Office Online، يجب اتاحة الخدمة أولا بمستودع التخزين وتحديد عنوان URL لوحدة خدمة Microsoft Office Online Server. اضغط <b>مستودعات التخزين</b>، وحدد مستودع تخزين، ثم في علامة تبويب <b>تحرير التكامل</b>، قم باتاحة الخدمة. اضغط <b>المحددات > عام</b> وأدخل عنوان URL لوحدة خدمة Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "حدد ما اذا كنت تريد استخدام Office Online Server للتعامل مع وثائق Office.",
		admin_office_online_server_url: "عنوان URL لوحدة خدمة Microsoft Office Online Server",
		admin_office_online_server_url_hover: "حدد عنوان URL الذي ستستطيع التطبيقات الأخرى من خلاله الاتصال بوحدة خدمة Office Online Server. يحتوي عنوان URL على النسق http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "تم التحقق",
	    admin_office_online_server_Failed: "<b>فشل</b>",

		admin_repcfg_office_online_service_p8_hover: "لاعداد مستودع التخزين ليقوم باستخدام Office Online Server، يمكنك اضافة ملف القالب المبدئي لكل تطبيق Office. اذا لم يتم تحديد قالب، سيتم استخدام القالب المفترض.",	
		admin_repcfg_office_online_server_integration: "تكامل MS Office Online Server Integration",
		admin_repcfg_office_online_service_url_not_set_warning: "قبل اتاحة Office Online Server، يجب تحديد عنوان URL لوحدة خدمة Microsoft Office Online Server أولا. اضغط المحددات > عام وأدخل عنوان URL",
		admin_repcfg_office_online_word_template_name: "قالب Word المفترض",
		admin_repcfg_office_online_excel_template_name: "قالب Excel المفترض",
		admin_repcfg_office_online_powerpoint_template_name: "قالب PowerPoint المفترض",
		admin_repcfg_office_online_blank_template_description: "يعد هذا القالب المفترض الذي يتم استخدامه اذا لم تقم باضافة القالب الخاص بك.",
		/* Edit Service settings */
		admin_icn_edit_title: "تحرير التوصيف",	
	    admin_icn_edit_files_cleanup_interval: "الفترة الزمنية لاعادة تنظيم الملف المؤقت (بالأيام):",
	    admin_icn_edit_files_cleanup_interval_hover: "يمكنك تحديد مقدار الوقت الذي سيتم خلاله الاحتفاظ بالملفات المؤقته في الوحدة التابعة ICN Edit.  الوقت المفترض هو 20 يوم. الحد الأقصى للوقت هو 20 يوم. والحد الأدنى للوقت هو 1 يوم.",
	    admin_icn_edit_service_integration: "تكامل خدمة التحرير",
	    admin_icn_edit_service_integration_intro: "تتيح خدمة التحرير للمستخدمين امكانية اضافة أو تحرير الملفات بسهولة في التطبيقات المحلية التي تم تركيبها على الحاسبات الخاصة بهم.<br><br><b>هام: </b> اذا قمت باتاحة خدمة التحرير، يجب أن تقوم بحفظ توصيف مستودع التخزين الخاص بك قبل تحرير التصنيفات المعرفة مسبقا.",
		admin_icn_edit_service: "خدمة التحرير:",
		admin_icn_edit_enable_hover: "لاستخدام خدمة التحرير، يجب أن تقوم بما يلي:<ul><li>اتاحة الخدمة بمستودع التخزين</li><li>اتاحة الخدمة على أسطح المكتب ببيئة التشغيل الخاصة بك</li><li>تركيب برنامج تحرير IBM Content Navigator على وحدات عمل المستخدم</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "‏اتاحة‏",
		admin_icn_edit_disable: "الغاء-اتاحة",
		admin_icn_edit_create_new_category: "تصنيف جديد",
		admin_icn_edit_delete_category: "حذف تصنيف",
		admin_icn_edit_edit_category: "تحرير تصنيف",
		admin_icn_edit_disable_category: "الغاء اتاحة تصنيف",
		admin_icn_edit_enable_category: "اتاحة تصنيف",
		admin_icn_edit_new_category_dialog_title: "تصنيف جديد",
		admin_icn_edit_edit_category_dialog_title:"تحرير تصنيف",
		admin_icn_edit_new_category_dialog_instructions: "يسمح لك تصنيف الوثيقة بارفاق القوالب مع أنواع MIME معينة لخدمة التحرير. على سبيل المثال، يمكنك ارفاق مجموعة قوالب مع ملفات PDF بحيث يستطيع المستخدمين تطبيق القوالب عند قيامهم باضافة أو تحرير ملفات من برنامج تحرير IBM Content Navigator. <br><br><b>هام: </b> يجب حفظ توصيف مستودع التخزين قبل اضافة قوالب الى التصنيف الذي تقوم بتكوينه. ",
		admin_icn_edit_edit_category_dialog_instructions: "يجب أن تقوم بحفظ توصيف مستودع التخزين الخاص بك قبل اضافة قوالب الى هذا التصنيف. ",
		admin_icn_edit_delete_category_dialog_instructions: "هل تريد حذف هذا التصنيف وأية قوالب مرفقة مع التصنيف؟<br><br><b>هام: </b> لم تكون التغييرات الخاصة بك نهائية حتى تقوم بحفظ التغييرات الخاصة بك بمستودع التخزين. ",
		admin_icn_edit_category_label: "التصنيف: ",
		admin_icn_edit_category_discription_label:"الوصف: ",
		admin_icn_edit_template_column_head:"اسم القالب",
		admin_icn_edit_category_duplicate_error_message: "يوجد تصنيف بهذا الكود بالفعل. ",
		admin_icn_edit_word_category_description: "يقوم هذا التصنيف بتعريف القوالب المتاحة لوثائق Microsoft Word في خدمة التحرير. ",
		admin_icn_edit_excel_category_description: "يقوم هذا التصنيف بتعريف القوالب المتاحة لوثائق Microsoft Excel في خدمة التحرير. ",
		admin_icn_edit_powerpoint_category_description: "يقوم هذا التصنيف بتعريف القوالب المتاحة لوثائق Microsoft PowerPoint في خدمة التحرير. ",

		icn_edit_add_template_dialog_title:"اضافة قالب ${0}",
		icn_edit_add_template_only_one_file_error: "يمكنك تحديد ملف واحد فقط.",
		icn_edit_add_template_file_type_error: "يجب تحديد ملف قالب ${0} صحيح.<br><br>تحتوي الوثيقة المحددة على نوع MIME، ‏${1}.<br><br>أنواع MIME الصحيحة هي: ${2}.",
		icn_edit_change_template_dialog_title: "تحرير القالب ${0}",
		icn_edit_action_in_new_menu_name:"وثيقة ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "مع Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "مع تطبيقات سطح المكتب",
		icn_edit_new_document_dialog_title: "وثيقة ${0} جديدة",
		icn_edit_new_document_dialog_intro: "قم بتكوين وثيقة ${0} جديدة واضافتها الى مستودع التخزين. سيتم تكوين الوثيقة بقالب خدمة التحرير المحدد.", 
		icn_edit_select_edit_service_template: "تحديد قالب",
		icn_edit_edit_service_template: "تحرير قالب الخدمة:",
		icn_edit_new_document_category_no_templates_message:"لا توجد قوالب في هذا التصنيف. برجاء الاتصال بمسؤول النظام لاضافة قوالب في هذا التصنيف.",
		icn_edit_installer: "برنامج IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "محددات الفئة والوظيفة",
		admin_repcfg_classes_and_roles_warning: "لتحديد الفئات والمستخدمين أو مجموعات المستخدمين الذين يتوافر لديهم تصريح لتكوين وتحرير واستخدام قوالب أو تكوين مسودات وثائق تقوم بالتعامل مع Office Online Service وخدمة التحرير.",
		admin_repcfg_classes_and_roles_click_warning: "اضغط هنا.",
		/* Edit Service settings END */
		share_no_my_email_error: "حدثت مشكلة أثناء تعريف عنوان البريد الالكتروني المطلوب لمشاركة الوثيقة.",
		share_no_my_email_error_explanation: "لقد قمت بتسجيل الدخول باستخدام كود المستخدم ${0}، لكن كود المستخدم لا  يتم مناظرته لعنوان بريد الكتروني.",
		share_no_my_email_error_userResponse: "حاول تسجيل الدخول مرة أخرى، أو قم بتسجيل الدخول باستخدام كود مستخدم مختلف. اذا استمرت المشكلة، قم بابلاغ مسؤول النظام  الخاص  بك عن هذا الخطأ.",
		share_no_my_email_error_adminResponse: "كود المستخدم ${0} لا يتم مناظرته لعنوان بريد الكتروني، وسطح المكتب ${1} لا يسمح للمستخدمين القيام بتحرير عنوان البريد الالكتروني لخدمات مشاركة Box.<br><br>حاول أحد الحلول التالية:<br>تأكد من أن البرنامج المساعد لمناظرة البريد الالكتروني تم تسجيله.<br>تأكد من أن الملف  emailMappingPlugin.json يحتوي على كود المستخدم ${0} وعنوان البريد الالكتروني للمستخدم، ثم قم بتكوين وتوصيف وتسجيل البرنامج المساعد لمناظرة البريد الالكتروني.<br>اذا لم ترد استخدام البرنامج المساعد لمناظرة البريد الالكتروني أو دليل عناوين البريد الالكتروني FileNet P8، لكن تريد السماح للمستخدمين بالقيام بادخال عناوين البريد الالكتروني الخاصة بهم عند القيام بمشاركة وثيقة، يمكنك تعديل محددات سطح المكتب لخدمات مشاركة Box للسماح للمستخدمين أن يقوموا بارسال الوصلة من عنوان بريد الكتروني آخر.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "يتم مشاركة نسخة لاحقة من هذه الوثيقة، لذلك لا يمكنك مشاركة النسخة المحددة من هذه الوثيقة.",
		share_later_version_shared_error_explanation: "لا يمكنك مشاركة نسخة سابقة من وثيقة تم مشاركتها مسبقا.",
		share_later_version_shared_error_userResponse: "لارسال الوصلة للنسخة اللاحقة من الوثيقة، يجب أن تقوم أولا باختيار النسخة اللاحقة، ثم استخدام تصرف المشاركة.<br><br>لمشاركة النسخة المحددة من الوثيقة، يجب أن تقوم أولا بحذف المشاركة للنسخة اللاحقة للوثيقة.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "رسالة جديدة",
		email_from: "من:",
		email_to: "الى:",
		email_cc_link: "نسخة طبق الأصل",
		email_bcc_link: "نسخة لمستخدم واحد",
		email_cc: "نسخة طبق الأصل:",
		email_bcc: "نسخة سرية:",
		email_address_invalid: "أدخل عنوان بريد الكتروني صحيح.",
		email_subject: "الموضوع",
		email_message: "الرسالة:",
		email_message_placeholder: "اضافة رسالة",
		email_attachments: "الملحقات:",
		email_links: "الروابط:",
		email_send: "ارسال",
		email_dont_send: "عدم الارسال",
		email_subject_reminder: "مفكرة الموضوع",
		email_subject_reminder_confirm: "هل تريد ارسال هذه الرسالة بدون موضوع؟",
		email_missing_from_error: "حدثت مشكلة أثناء تعريف عنوان البريد الالكتروني للمجال من المطلوب لارسال البريد الالكترني اليه.",
		email_missing_from_error_explanation: "لقد قمت بتسجيل الدخول باستخدام كود المستخدم ${0}، لكن كود المستخدم لا  يتم مناظرته لعنوان بريد الكتروني.",
		email_missing_from_error_userResponse: "حاول تسجيل الدخول مرة أخرى، أو قم بتسجيل الدخول باستخدام كود مستخدم مختلف. اذا استمرت المشكلة، قم بابلاغ مسؤول النظام  الخاص  بك عن هذا الخطأ.",
		email_missing_from_error_adminResponse: "لم يتم مناظرة كود المستخدم ${0} الى عنوان البريد الالكتروني، ولا يسمح سطح المكتب ${1} للمستخدمين بتحرير عنوان البريد الالكتروني للمجال من.<br><br>حاول أحد الحلول التالية:<br>تأكد من أن البرنامج المساعد لمناظرة البريد الالكتروني تم تسجيله.<br>تأكد من أن الملف  emailMappingPlugin.json يحتوي على كود المستخدم ${0} وعنوان البريد الالكتروني للمستخدم، ثم قم بتكوين وتوصيف وتسجيل البرنامج المساعد لمناظرة البريد الالكتروني.<br>اذا لم تكن تريد استخدام البرنامج المساعد Email Mapping أو دليل عنوان البريد الالكتروني FileNet P8 email، لكن بدلا من ذلك تريد السماح للمستخدمين بادخال عنوان البريد الالكتروني الخاص بهم عند قيامهم بارسال بريد الكتروني، فانه يمكنك تعديل محددات البريد الالكتروني لأسطح المكتب للسماح للمستخدمين بتعديل عنوان البريد الالكتروني للمجال من.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "لا يمكن فتح الوثيقة.",
		open_edit_document_with_native_application_error_explanation: "لا يستطيع IBM Content Navigator الاتصال ببرنامج IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "قم بتركيب وبدء برنامج IBM Content Navigator Edit على وحدة العمل الخاصة بك. ثم حاول فتح الوثيقة مرة أخرى.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "لا يمكن فتح الوثيقة.",
		connect_to_the_streamline_service_error_explanation: "لا يستطيع IBM Content Navigator الاتصال ببرنامج IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "قم بتركيب وبدء برنامج IBM Content Navigator Edit على وحدة العمل الخاصة بك. ثم حاول فتح الوثيقة مرة أخرى.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "لم يتم توصيف IBM Content Navigator بطريقة صحيحة لمشاركة الوثائق.",
		share_not_configured_error_explanation: "يجب توصيف خاصية مشاركة Box بطريقة صحيحة قبل مشاركة الوثائق.",
		share_not_configured_error_userResponse: "اتصل بمسؤول النظام وقم بطلب توصيف خاصية مشاركة Box.",
		share_not_configured_error_adminResponse: "يجب توصيف البنود التالية قبل مشاركة الوثائق:<ul><li>يجب اتاحة خدمة ادارة المهام في محددات أداة الادارة.</li><li>يجب توصيف كود وصلة ادارة المهام في مستودع التخزين.</li><li>يجب اتاحة المشاركة في مستودع التخزين.</li><li>يجب تحديد مستودع تخزين Box للمشاركة في سطح المكتب.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "لم يتم حفظ تغييرات الخاصية للنسخة الجديدة",
		checkin_cors_save_attributes_error_explanation: "تم تكوين النسخة، لكن لم يتم حفظ تغييرات الخاصية. قد لا يزال يتم تخصيص الوثيقة.",
		checkin_cors_save_attributes_error_userResponse: "قم بالغاء اقفال الوثيقة وتحديث الخصائص باستخدام بند القائمة السياقية للخصائص.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "لم يتم حفظ تغييرات الخاصية للوثيقة الجديدة",
		add_cors_save_attributes_error_explanation: "تم تكوين الوثيقة، لكن لم يتم حفظ تغييرات الخاصية.",
		add_cors_save_attributes_error_userResponse: "تحديث الخصائص باستخدام بند القائمة السياقية للخصائص.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "لا يمكن فتح الوثيقة.",		
		edit_document_using_edit_service_error_explanation: "لا يمكن فتح الوثيقة في خدمة التحرير.",
		edit_document_using_edit_service_error_userResponse: "أطلب من مسؤول النظام تحديث تكامل خدمة التحرير.<br><br> اذا كان المستخدم يريد التوصل الى هذه الوثيقة من خدمة التحرير، اذهب الى صفحة تكامل التحرير لمستودع التخزين وقم بتحديث تكامل خدمة التحرير لتضمين الفئة في كشف الفئات لتعديلها لدعم خدمة التحرير.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "لا يمكن فتح الوثيقة.",		
		edit_document_is_editing_by_oos_error_explanation: "يتم استخدام الوثيقة بواسطة Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "يجب حفظ واغلاق الوثيقة في Office Online Service قبل فتحها في خدمة التحرير.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "اتاحة عمليات تحميل مشاركة المصدر عبر الأصل ‏‎(CORS)‎‏",

		/* Email Settings */
		admin_email_settings: "محددات البريد الالكتروني:",
		admin_email_settings_hover: "حدد نوع خدمة البريد الالكتروني التي تريد أن يقوم المستخدمين باستخدامها. عند اتاحة خدمة بريد الكتروني على أساس HTML، فانه يتوافر لديك الاختيار للسماح للمستخدمين بتعديل عنوان البريد الالكتروني للمجال من. اذا كنت تريد اتاحة خدمة البريد الالكتروني على أساس Java، فانه يجب أن يتوافر لدي برنامج استعراض يدعم Java.",
		admin_email_use_service: "استخدام خدمة البريد الالكتروني على أساس HTML",
		admin_email_use_applet: "استخدام خدمة البريد الالكترني على أساس Java",
		admin_email_can_modify_from: "السماح للمستخدمين بتعديل عنوان البريد الالكتروني للمجال من",
		admin_email_can_modify_from_hover: "افتراضيا، لا يمكن تعديل عنوان البريد الالكتروني للمجال من ويتم الحصول عليه من خلال مناظرة المستخدمين وعناوين البريد الالكتروني التي تمثل حسابات المستخدمين.<br><br>حدد هذا الاختيار للسماح للمستخدمين بتعديل عناوين البريد الالكتروني الخاصة بهم عند قيامهم بارسال بريد الكتروني؛ لكن، لا يتم التحقق من صلاحية عنوان البريد الالكتروني.",
		admin_email_use_from_as_sender: "استخدم عنوان البريد الالكتروني للمجال من كمرسحل للبريد الالكتروني",
		admin_email_use_from_as_sender_hover: "افتراضيا، يتم استخدام عنوان البريد الالكتروني صحيح للمجال من في البريد الالكتروني للمستخدم. يتم تعريف عنوان البريد الالكتروني هذا بواسطة جلسة بريد CNMailSession على وحدة خدمة التطبيق. حدد هذا الاختيار لتحديد استخدام عنوان البريد الالكتروني للمستخدم في البريد الالكتروني.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "التعليقات التوضيحية الجديدة",
		addAnnotationDlg_labelContents: "المحتويات:",
		addAnnotationDlg_labelAccess: "امكانية التوصل:",
		addAnnotationDlg_labelPublic: "عام",
		addAnnotationDlg_labelPrivate: "خاص",
		addAnnotationDlg_labelPrivateGroup: "خاص للمجموعة",
		addAnnotationDlg_labelGroup: "المجموعة",
		addAnnotationDlg_labelCopiable: "يمكن نسخ هذا التعليق التوضيحي الى وحدة خدمة أخرى.",
		addAnnotationDlg_buttonLabel_save: "‏حفظ‏",

		/* Skip navigation */
		skipNavigation_title_main: "تخطي الى المحتويات الرئيسية",
		skipNavigation_title_menu: "التخطي الى اختيارات التجول",
		skipNavigation_label_main: "تخطي الى المحتويات الرئيسية",
		skipNavigation_label_menu: "التخطي الى اختيارات التجول",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "ادارة مساحات الفريق",
		manage_teamspace_pane_instance_hdr: "مساحات الفريق",
		manage_teamspace_pane_template_hdr: "قوالب",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "التصفح للأمام",
		scroll_back: "التصفح للخلف",

		breadcrumb_separator_open: "فتح عقدة",
		breadcrumb_separator_close: "اغلاق عقدة",

		/* DropDownLink */
		drop_down_link_summary: "${0}، ${1}",

		/* Properties display pane */
		no_item_selected: "لم يتم تحديد أي بند.",

		/* eds */
		eds_url: "عنوان URL لخدمة بيانات خارجية:",
		eds_request_timeout: "وقت انتهاء طلب الخدمة (بالثواني):",
		eds_is_required: "منع قيام المستخدمين من اتخاذ تصرفات تقوم بتغيير قيم الخصائص عندما يكون EDS غير متاح",

		/* eforms */
		eform_signing_pane_welcome: "توقيع النموذج",
		eform_signing_button_label: "توقيع",
		eform_signing_pane_delete: "حذف التوقيع",
		eform_signing_button_label_delete: "‏حذف ‏",

		xtplugin_server_label: "عنوان URL لوحدة خدمة IBM FileNet Workplace XT",
		xtplugin_server_hover: "أدخل عنوان URL لوحدة الخدمة التي تم نشر IBM   FileNet Workplace XT عليها، على سبيل المثال،   http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "عنوان URL لوحدة خدمة IBM eClient",
		ecplugin_server_hover: "أدخل عنوان URL لوحدة الخدمة التي تم نشر IBM   eClient عليها، على سبيل المثال، http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "قد تستغرق التصرفات على عدد كبير من البنود وقت طويل. هل تريد  الاستمرار؟",
		large_number_actions_continue_button: "استمرار",

		large_items_actions_confirmation_question: "قد تستغرق التصرفات على البنود الكبيرة وقت طويل. هل تريد  الاستمرار؟",

		viewer_editproperties_title: "تأكيد",
		viewer_editproperties_title_warning: "تحذير",
		viewer_editproperties_save: "‏حفظ‏",
		viewer_editproperties_next: "تالي",
		viewer_editproperties_reset: "‏ارجاع‏",
		viewer_editproperties_reset_hover: "سيتم ارجاع أي بيانات لم يتم حفظها الى القيم التي تم حفظها مسبقا",
		viewer_editproperties_saveandgetnext: "حفظ واحضار التالي",
		viewer_editproperties_saveandgetnext_hover: "يتم الحصول على الوثيقة التالية آليا بعد حفظ التغييرات الخاصة بي",
		viewer_editproperties_prompt_save_changes: "لقد قمت بتغيير الخصائص للوثيقة التالية<br>${0}<br><br>هل تريد حفظ التغييرات؟",
		viewer_editproperties_prompt_discard_changes: "لقد قمت بتغيير الخصائص للوثيقة التالية<br>${0}<br><br>لكن، تحتوي واحدة أو أكثر من الخصائص على قيمة غير صحيحة، لذلك لا يمكن حفظ التغييرات. يمكنك تصحيح القيم الغير صحيحة أو استبعاد التغييرات الخاصة بك.<br>هل تريد تصحيح القيم غير الصحيحة المعروضة في لوحة الخصائص؟",
		viewer_comments_prompt_discard_changes: "لقد قمت بتعديل التعقيبات. هل تريد حفظ التغييرات؟",
		viewer_notelogs_prompt_discard_changes: "قمت بتعديل سجل الملاحظات. هل تريد حفظ التغييرات؟",
		social_collaborated_version: "النسخة: ${0}",
		social_link_label: "من...",

		// social comments
		comments: "التعقيبات",
		comments_add_hint: "اضغط Enter لاضافة التعقيبات الخاصة بك.",
		comments_hint: "أدخل التعقيبات الخاصة بك.",
		comments_label: "اضغط Enter أو Tab لحفظ التعقيبات الخاصة بك. اضغط Esc   للالغاء.",
		comments_delete_confirmation: "هل تريد حذف التعقيب المحدد؟",
		comments_number: "التعقيبات: ${0}",
		comments_save_new: "لقد قمت بتعديل التعقيبات. هل تريد اغلاق النافذة بدون حفظ التغييرات التي قمت بها؟",

		notelogs: "سجلات الملاحظات",
		notelogs_download: "‏تحميل من‏",
		notelog_modify: "حفظ التغييرات",
		notelog_edit: "تحرير Notelog",
		notelog_create_newVersion: "تكوين نسخة Notelog جديدة",
		notelog_add_hint: "أدخل التعقيبات الخاصة بك واضغط Enter لاضافتها.",
		notelog_hint: "اضغط   Shift+Enter لكود التحرك للسطر التالي",
		notelog_add_placeholder: "اضغط Enter لاضافة التعقيبات الى notelog.",
		notelog_save_new: "هل تريج تعديل سجل الملاحظات notelog. هل تريد اغلاق النافذة بدون حفظ التغييرات التي قمت بها؟",

		// P8 markings related
		cannot_remove_markings: "لا يتوافر لديك تصريح لازالة قيم التعليم: {0}",

		// download count
		downloadcount: "عمليات التحميل: {0}",
		downloadcount_single: "1 عملية تنزيل ",
		downloadcount_multiple: "{0} عملية/عمليات تنزيل ",
		downloadcount_none: "لم يقم أحد بتنزيل هذا بعد",

		// recommendations
		recommendations: "اعجاب: {0}",
		recommendations_recommend: "اعجاب بهذا",
		recommendations_unrecommend: "عدم الاعجاب بهذا",
		recommendations_you: "أنت حددت الاعجاب بهذا",
		recommendations_you_and_another: "أنت وشخص آخر حددتم الاعجاب بهذا",
		recommendations_you_and_others: "أنت و{0} آخرين حددتم الاعجاب بهذا",
		recommendations_another: "1 شخص حدد الاعجاب بهذا",
		recommendations_others: "{0} شخص حدد الاعجاب بهذا",
		recommendations_none: "لم يتم تحديد أي اعجاب لهذا بعد",

		// tags
		tags: "شارات التعليم: ${0}",
		tags_delete: "حذف ${0}",
		tags_none: "ليست هناك شارات تعليم للعرض.",
		tags_add: "اضافة شارات تعليم:",
		tags_hint: "اضغط Enter لاضافة شارات التعليم الخاصة بك.",
		tags_hover_help: "حدد شارة أو كشف من الشارات التي يمكن استخدامها للبحث عن الوثائق بنفس الشارة. ويجب استخدام الفاصلة (,)، والفاصلة المنقوطة (;)، أو المسافة البينية للفصل بين الشارات.",
		tags_hover_help_box: "حدد شارة أو كشف مفصول بفاصلات من الشارات التي يمكن استخدامها للبحث عن الوثائق بنفس الشارة.",
		tags_no_access: "هل لديك الصلاحيات المناسبة لاضافة شارات التعليم.",

		//task scheduler pane
		taskPane_tooltip: "فتح مشاهدة المهام غير المتزامنة",
		taskPane_tree: "تسلسل تجول نافذة المهمة",
		taskPane_allTasks: "كل المهام",
		taskPane_scheduledTasks: "المهام المجدولة",
		taskPane_recurringTasks: "المهام المتكررة",
		taskPane_inProgressTasks: "المهام التي يتم تنفيذها",
		taskPane_completedTasks: "المهام التامة",
		taskPane_failedTasks: "المهام الفاشلة",
		taskPane_disabledTasks: "المهام غير-المتاحة",
		taskPane_statusScheduled: "مجدول",
		taskPane_statusInProgress: "جاري التنفيذ",
		taskPane_statusCompleted: "منتهي",
		taskPane_statusFailed: "فشل",
		taskPane_statusPaused: "ايقاف مؤقت",
		taskPane_noItemSelected: "لم يتم تحديد بند",
		taskSchedulerPane_scheduleInformation: "معلومات الجدو الزمني",
		taskSchedulerPane_loginInformation: "معلومات تسجيل الدخول",
		taskSchedulerPane_startImmediately: "بدء مباشرة",
		taskSchedulerPane_recurrence: "تكرار",
		taskSchedulerPane_interval: "فترة زمنية",
		taskSchedulerPane_scheduleReport: "تقرير مجدول",
		taskSchedulerPane_nameHoverHelp: "أدخل اسم للمهمة.",
		taskSchedulerPane_descriptionHoverHelp: "أدخل وصف للمهمة. يجب أن يساعدك الوصف في التمييز بين المهام.",
		taskSchedulerPane_startTimeHoverHelp: "حدد متى تريد تشغيل المهمة. لتشغيل المهمة الآن، حدد البدء فورا.",
		taskSchedulerPane_recurrenceHoverHelp: "يمكنك جدولة المهمة ليتم تشغيلها   على أساس متزامن.",
		taskSchedulerPane_endTimeHoverHelp: "حدد متى تريد ايقاف تشغيل المهمة. يتم  تشغيل المهمة من وقت البدء المجدول الى وقت الانتهاء المجدول.",
		taskSchedulerPane_usernameHoverHelp: "بالنسبة للمهام المتزامنة، يجب أن   تقوم بادخال اسم المستخدم لاتاحة الخدمة للتوثيق عند تشغيل المهمة.",
		taskSchedulerPane_passwordHoverHelp: "بالنسبة للمهام المتزامنة، يجب أن   تقوم بادخال كلمة سرية المستخدم المحدد لاتاحة الخدمة للتوثيق عند تشغيل   المهمة.",
		taskSchedulerPane_notification: "الاعلام",
		taskSchedulerPane_emailAddress: "عنوان البريد الالكتروني",
		taskSchedulerPane_emailAddressHoverHelp: "أدخل عنوان البريد الالكتروني حيث تريد استلام اعلامات عن حالة المهمة.",
		taskSchedulerPane_intervalHoverHelp: "حدد الفترة الزمنية التي سيتم تشغيل   المهمة المتزامنة عليها. يمكنك تحديد الفترة الزمنية بالساعات أو الأيام أو الأسابيع أو الشهور.",
		taskSchedulerPane_scheduledStartTime: "وقت البدء المجدول",
		taskSchedulerPane_startTime: "وقت البدء",
		taskSchedulerPane_title: "الجدول الزمني",
		taskSchedulerPane_runNow: "تشغيل الآن",
		taskSchedulerPane_runOnce: "تشغيل مرة واحدة",
		taskSchedulerPane_runAtSchedule: "تشغيل بناءا على جدول زمني",
		taskSchedulerPane_repeats: "تكرارات",
		taskSchedulerPane_repeatsEvery: "تكرار كل",
		taskSchedulerPane_hourly: "ساعة",
		taskSchedulerPane_daily: "يوميا",
		taskSchedulerPane_weekly: "أسبوعيا",
		taskSchedulerPane_monthly: "شهريا",
		taskSchedulerPane_yearly: "سنويا",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "خ",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "خ",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "تاريخ البدء",
		taskSchedulerPane_after: "بعد",
		taskSchedulerPane_ending: "تاريخ الانتهاء",
		taskSchedulerPane_times: "الوقت",
		taskSchedulerPane_days: "يوم(أيام)",
		taskSchedulerPane_hours: "ساعة(ساعات) خلال اليوم",
		taskSchedulerPane_interval: "فترة زمنية",
		taskSchedulerPane_endingDays: "انهاء (بالأيام)",
		taskSchedulerPane_never: "مطلقا",
		taskSchedulerPane_categorization: "تصنيف",
		taskSchedulerPane_scheduleTask: "جدولة مهمة",
		taskInformationPane_details: "التفاصيل",
		taskInformationPane_errors: "الأخطاء",
		taskInformationPane_taskInstances: "نسخ المهمة",
		taskInformationPane_audits: "المراجعات",
		taskInformationPane_results: "النتائج",
		asyncTasks: "المهام غير المتزامنة",

		//entry template pane
		search_all_entry_templates: "بحث كل قوالب الادخال",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "مشاهدة الموقع الكامل",
		mobilesite: "مشاهدة موقع التليفون المحمول",
		profile: "ادارة ملفات المواصفات",
		office_template: "قالب Office:",
		select_office_template: "حدد قالب Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "لا يمكن فتح الوثائق المحددة في برنامج المشاهدة باستخدام تصرف الدمج والتقسيم.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "برنامج المشاهدة الذي تم توصيفه من أجل وثائق PDF و TIFF لا يقوم بدعم تصرف الدمج والتقسيم.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "أطلب من مسؤول النظام الخاص بك أن يقوم بتوصيف برنامج المشاهدة للوثائق PDF و TIFF التي تقوم بدعم تصرف الدمج والتقسيم على سبيل المثال برنامج مشاهدة Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "لا يمكن فتح وثائق PDF المحددة في برنامج المشاهدة باستخدام تصرف الدمج والتقسيم.",
		document_builder_pdf_unsupported_viewer_error_explanation: "برنامج المشاهدة الذي تم توصيفه من أجل وثائق PDF لا يقوم بدعم تصرف الدمج والتقسيم.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "أطلب من مسؤول النظام الخاص بك أن يقوم بتوصيف برنامج المشاهدة للوثائق PDF التي تقوم بدعم تصرف الدمج والتقسيم على سبيل المثال برنامج مشاهدة Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "لا يمكن فتح وثائق TIFF المحددة في برنامج المشاهدة باستخدام تصرف الدمج والتقسيم.",
		document_builder_tiff_unsupported_viewer_error_explanation: "برنامج المشاهدة الذي تم توصيفه من أجل وثائق TIFF لا يقوم بدعم تصرف الدمج والتقسيم.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "أطلب من مسؤول النظام الخاص بك أن يقوم بتوصيف برنامج المشاهدة للوثائق TIFF التي تقوم بدعم تصرف الدمج والتقسيم على سبيل المثال برنامج مشاهدة Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "لا يمكن فتح الوثائق المحددة في برنامج المشاهدة باستخدام تصرف الدمج والتقسيم.",
		document_builder_unsupported_documents_error_explanation: "يعمل تصرف الدمج والتقسيم فقط مع وثائق PDF و TIFF.",
		document_builder_unsupported_documents_error_userResponse: "حدد الوثائق التي يتم دعمها وأعد المحاولة.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "لا يمكن فتح بعضا من الوثائق المحددة في برنامج المشاهدة باستخدام تصرف الدمج والتقسيم.",
		document_builder_some_unsupported_documents_error_explanation: "يعمل تصرف الدمج والتقسيم فقط مع وثائق PDF و TIFF التي تم فتحها من نفس مستودع التخزين.",
		document_builder_some_unsupported_documents_error_userResponse: "سيتم فتح الوثائق التي يتم دعمها في برنامج المشاهدة.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "حدث خطأ عند انهاء تخصيص المحتويات التي تم تعديلها.",
		document_builder_checkin_failed_explanation: "قام المراجع باستلام استجابة خطأ أثناء انهاء تخصيص المحتوى الذي تم تعديله.",
		document_builder_checkin_failed_userResponse: "أطلب من مسؤول النظام مراجعة ملفات السجل لوحدة خدمة تطبيق الانترنت.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "لا يمكن فتح الوثيقة.",
		no_viewer_to_view_error_explanation: "قام مسؤول النظام باقفال المشاهدة لهذه الوثيقة. اذا كنت تريد التوصل الى هذه الوثيقة، يمكنك تنزيلها.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "لا يمكن بناء المحتوى.",
		document_build_failed_userResponse: "أطلب من مسؤول النظام مراجعة ملفات سجل المراجع.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "لا يمكن فتح الوثيقة في نم الدمج والتقسيم.",
		document_builder_open_failed_userResponse: "أطلب من مسؤول النظام مراجعة ملفات سجل المراجع.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "لا يمكن تبديل النظام الى نمط الدمج والتقسيم.",
		document_builder_switch_failed_userResponse: "أطلب من مسؤول النظام مراجعة ملفات سجل المراجع.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "الوثائق",
		print_service_page_setup_tab_title: "محددات صفحة",
		print_service_OD_print_tab_title: "اختيارات وحدة الطباعة",
		print_service_status_merging: "دمج الوثائق...",
		print_service_status_converting: "تحويل الوثائق...",
		print_service_status_formatting: "تنسيق الوثيقة للطباعة...",
		admin_print_service_maximum_number_to_print: "الحد الأقصى لعدد الوثائق المسموح بها للطباعة:",
		admin_print_service_maximum_size_to_print: "الحد الأقصى لمقدار البيانات المسموح بها للطباعة (بالميجابايت):",
		admin_print_service_maximum_number_to_print_hover_help: "حدد الحد الأقصى لعدد الوثائق التي يستطيع المستخدمين طباعتها في كل مرة. الحد الأقصى المفترض هو 50. اذا لم تكن تريد تحديد الطباعة بعدد الوثائق، حدد هذا الحد بالقيمة 0 ",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>قيد:</b> لا يتم دعم هذه المحددات في IBM Content Manager OnDemand.<br/><br/>حدد الحد الأقصى لعدد البيانات التي يمكن طباعتها باستخدام خدمة الطباعة IBM Daeja ViewONE. <br /><br />لا يمكن أن يكون اجمالي حجم كل وثيقة يتم تحديدها أكثر من هذا المقدار. <br/><br/>الحد المفترض هو 200 ميجابايت. وتحديد الحد الى ما هو أعلى من   200 ميجابايت قد يؤثر على أداء النظام. اذا لم تكن تريد تحديد الطباعة وفقا لحجم الوثيقة، حدد هذا الحد بالقيمة 0. ",
		// error printing
		print_service_error_printing: "حدث خطأ أثناء الطباعة.",
		print_service_error_printing_userResponse: "أطلب من مسؤول النظام مراجعة ملفات طباعة سجل الخدمة.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "الوثائق المحددة كبيرة جدا ليتم طباعتها ",
		print_service_max_content_error_explanation: "الوثائق المحددة تتعدى حد ${0} ميجابايت من البيانات. ",
		print_service_max_content_error_userResponse: "حدد عدد أقل من الوثائق أو حدد عدد أصغر من الوثائق وقم بالطباعة مرة أخرى. يمكنك أيضا الاتصال بمسؤول النظام لزيادة الحد الأقصى لاجمالي حجم البنود التي يمكنك طباعتها في كل مرة من سطح المكتب هذا. ",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "لا يمكن طباعة البنود. ",
		print_service_max_number_selected_error_explanation: "يمكنك طباعة حتى ${0} بند/بنود في كل مرة. يمكنك محاولة طباعة ${1} بند/بنود. ",
		print_service_max_number_selected_error_userResponse: "حدد بنود أقل وحاول طباعة البنود مرة أخرى. يمكنك أيضا الاتصال بمسؤول النظام لزيادة الحد الأقصى لعدد البنود التي يمكنك طباعتها في المرة الواحدة من سطح المكتب هذا. ",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


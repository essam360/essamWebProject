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
		welcome_user: "Hoş Geldiniz ",
		about: "Hakkında",
		all: "Tümü",
		help: "Yardım",
		user_session: "Kullanıcı oturumu",
		user_session_for: "${0} için kullanıcı oturumu",
		user_session_for_with_container: "${0} (${1}) için kullanıcı oturumu",
		tools: "Araçlar",
		login: "Oturum Aç",
		logout: "Oturumu Kapat",
		search: "Arama",
		saved_searches: "Kayıtlı Aramalar",
		content_analytics: "İçeriği Analiz Et",
		reset: "Sıfırla",
		reset_hover: "Sekmelerde kaydedilmemiş veriler varsa, bunlar daha önce kaydedilmiş olan değerlerine getirilir.",
		reset_default: "Tümünü Temizle",
		reset_default_hover: "Tüm sekmelerde Yürürlükteki Etiket alanını temizler.",
		locale: "Ülke değeri:",
		up: "Yukarı",
		down: "Aşağı",
		restore: "Geri Yükle",
		maximize: "Ekran Boyutuna Getir",
		values_label: "Değerler",
		value_label: "Değer:",
		path_label: "Yol:",
		new_label: "Yeni:",
		back_label: "Geri",
		clear: "Temizle",
		set: "Ayarla...",
		browse: "Göz At",
		work: "İş",
		connect: "Bağlan",
		documents: "Belgeler:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM ve IBM logosu, IBM Corporation firmasının dünyanın birçok bölgesinde kayıtlı ticari markalarıdır. Java ve tüm Java tabanlı ticari markalar ve logolar, Oracle ve/ya da iştiraklerinin ticari markaları ya da tescilli ticari markalarıdır. Bu uygulamanın içerdiği Oracle Outside In Technology kullanımı kısıtlı bir lisansa tabidir ve yalnızca bu uygulamayla birlikte kullanılabilir. Bu Program, Program'a eşlik eden lisans sözleşmesinin koşulları altında lisanslanır.  Bu lisans sözleşmesi \"License\" ya da \"Non_IBM_License\" olarak belirtilen bir Program dizini klasöründe ya da kitaplıkta (geçerli olduğu durumlarda) bulunur ya da basılı bir lisans sözleşmesi olarak verilir. Program'ı kullanmadan önce lütfen bu sözleşmeyi dikkatle okuyun. Program'ı kullanmanız bu koşulları kabul ettiğiniz anlamına gelir. ",
		edit: "Düzenle",
		cancel: "İptal",
		close: "Kapat",
		close_all: "Tüm Sekmeleri Kapat",
		close_others: "Diğer Sekmeleri Kapat",
		ok: "Tamam",
		yes: "Evet",
		no: "Hayır",
		open: "Aç",
		refresh: "Yenile",
		refresh_cabinets: "Tüm Kabinleri Yenile",
		delete_text: "Sil",
		export_config: "Yapılandırmayı Dışa Aktar",
		description: "Tanım",
		true_label: "Doğru",
		false_label: "Yanlış",
		error: "Hata",
		error_reference_hover: "Bu hatayla ilgili daha fazla bilgi için www.ibm.com adresinde arama yapın.",
		url_label: "URL",
		default_label: "Varsayılan",
		ibm_label: "IBM",
		light_label: "Açık",
		dark_label: "Koyu",
		save: "Kaydet",
		saveAs: "Farklı Kaydet...",
		save_and_close: "Kaydet ve Kapat",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Yok",
		Name: "Ad",
		"${NAME}": "Ad",
		mime_type: "MIME tipi",
		mime_type_contains_label: "Bunu içeren MIME tipi:",
		mime_type_header: "MIME Tipi",
		mime_type_icon: "MIME Tipi Simgesi",
		casesearch: "Vaka",
		item: "Öğe",
		no_mime_type: "Bu öğenin içeriği yok.",
		items_selected: "${0} öğe seçildi.",
		requestor: "İsteyen",
		scheduledStartTime: "Zamanlanmış başlangıç saati",
		isRecurring: "Yinelemeli mi",
		weeks: "Hafta",
		days: "Gün",
		hours: "Saat",
		endTime: "Bitiş saati",
		username: "Kullanıcı adı",
		password: "Parola",
		serverURL: "Sunucu URL",
		enable: "Etkinleştir",
		disable: "Geçersiz Kıl",
		finish: "Son",
		previous: "Önceki",
		next: "Sonraki",
		schedule: "Zamanla",
		removeFromThisList: "Bu Listeden Kaldır",
		status: "Durum",
		scheduledEndTime: "Zamanlanmış bitiş saati",
		type: "Tip",
		mode: "Kip",
		startTime: "Başlangıç saati",
		createdBy: "Yaratan",
		nextScheduledTime: "Zamanlanmış sonraki saat",
		id: "Tanıtıcı",
		duration: "Süre",
		repeatCycle: "Sıklık",
		taskTypeName: "Görev tipi",
		to: "bitiş",
		filter: "Süzgeç:",
		error_message: "Hata İletisi",

        file_type: "Belge Tipi",
        word_template_name: "Word Şablonu Adı",
        excel_template_name: "Excel Şablonu Adı",
        powerpoint_template_name: "PowerPoint Şablonu Adı",
        template_description: "Şablon Tanımı",
        action_add_template: "Ekle",
        action_change_template: "Düzenle",      
        action_edit_template_properties: "Özellikler",
        add_presentation_template: "Sunum Şablonu Ekle",
    	add_spreadsheet_template: "Elektronik Sayfa Şablonu Ekle",
    	add_doc_template: "Belge Şablonu Ekle",    	
    	file_type_doc_hover: "Geçerli bir sözcük işlem belgesi şablonu dosyası belirtmelisiniz.<br><br>Geçerli MIME tipleri: ${0}",
    	file_type_doc_error: "Geçerli bir sözcük işlem belgesi şablonu dosyası belirtmelisiniz.<br><br>Seçilen belge mime tipi: ${0}<br><br>Geçerli MIME tipleri: ${1}",
    	file_type_presentation_hover: "Geçerli bir sunum şablonu dosyası belirtmelisiniz.<br><br>Geçerli MIME tipleri: ${0}",
    	file_type_presentation_error: "Geçerli bir sunum şablonu dosyası belirtmelisiniz.<br><br>Seçilen belge mime tipi: ${0}<br><br>Geçerli MIME tipleri: ${1}",
    	file_type_spreadsheet_hover: "Geçerli bir elektronik sayfa şablonu dosyası belirtmelisiniz.<br><br>Geçerli MIME tipleri: ${0}",
    	file_type_spreadsheet_error: "Geçerli bir elektronik sayfa şablonu dosyası belirtmelisiniz.<br><br>Seçilen belge mime tipi: ${0}<br><br>Geçerli MIME tipleri: ${1}",
    	office_online_only_one_template_error: "Tek bir dosya seçebilirsiniz.",
    	change_presentation_template: "Sunum Şablonunu Düzenle",
    	change_spreadsheet_template: "Elektronik Sayfa Şablonunu Düzenle",
    	change_doc_template: "Belge Şablonunu Düzenle",
    	change_button: "Düzenle",
	    new_document_dialog_doc_title: "Yeni Belge",
	    new_document_dialog_presentation_title: "Yeni Sunum",
	    new_document_dialog_spreadsheet_title: "Yeni Elektronik Sayfa",
	    new_document_dialog_title_label: "Başlık:",
	    new_document_dialog_title_hover: "Bu belge için bir başlık girin.",
	    new_document_dialog_title_missing_message: "Bir başlık belirtmelisiniz.",
	    office_online_save_before_adding_templates_title: "Havuzda yapılan değişiklikleri kaydet",
	    office_online_save_before_adding_templates_error: "Havuzda yaptığınız değişiklikleri kaydetmedikçe Office şablonları ekleyemezsiniz. <b>Kaydet ve Kapat</b>'ı tıklattıktan sonra, Office şablonlarını eklemek için havuzu yeniden açın.",
	    copy_to_OOS_dialog_doc_title: "Yeni Belge",
	    office_online_checkin_cancelcheckout_message: "Bu belge Microsoft Office Online'da düzenleniyor. Microsoft Office Online'da açıkken belgeyi içeri veremez ya da dışarı almayı iptal edemezsiniz.",
	    new_document_classification: "Sınıflandırma:",
	    new_document_classification_help: "Kaynak belgenin sınıfı, özellikleri ve üst klasörü (varsa) ayarlanır. Giriş şablonu kullanılarak belge eklenirken, kaynak belgenin giriş şablonu (varsa) otomatik olarak seçilir. Varsayılan değer olarak kaynak belgenin özellikleri kullanılır; ancak, giriş şablonunda belirtilen klasör ve sınıf korunur.",
		new_document_classification_use_source_document: "Kaynak belgeyi kullan:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} Tipi Simgesi",
		repository_name_and_type: "${0} Adı ve Tipi",
		select_class_label: "${0} Seç",

		// View toggle buttons
		detail_view_button_tooltip: "Ayrıntılar görünümü",
		detail_view_button: "Ayrıntılar",
		magazine_view_button_tooltip: "Dizilim görünümü",
		magazine_view_button: "Dizilim",
		filmstrip_view_button_tooltip: "Film şeridi görünümü",
		filmstrip_view_button: "Film şeridi",

		magazine_view_show: "Tanımlı Görünümde Göster",
		detail_view_show: "Ayrıntı Görünümünde Göster",

		total_count_item: "öğe",
		total_count_items: "öğe",
		total_count_more_items: "${0} öğeden fazla",

		extension_changed: "Seçtiğiniz dosyanın uzantısı özgün dosyanın uzantısıyla eşleşmiyor.  Farklı bir dosya seçin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Seçilen görüntüleyici tüm dosya tiplerini desteklemiyor. Bu görüntüleyici eşlemesini kaydederseniz, belgeleri görüntülerken sorunlarla karşılaşabilirsiniz. Tüm dosya tipleri seçeneği belirlendiğinde, tüm dosya tiplerini destekleyen bir görüntüleyici seçmeniz önerilir.<br><br><b>İpucu:</b> Şu görüntüleyiciler tüm dosya tiplerini destekler:<ul><li>Uygulamacık görüntüleyici</li><li>AJAX görüntüleyicisi</li><li>HTML dönüştürme</li><li>PDF dönüştürme</li><li>Web tarayıcısı</li></ul>",
		file_type_any: "Tüm dosya tipleri",
		file_type_any_hover: "Seçilen görüntüleyiciyi, dosya tipinden bağımsız olarak tüm belgeleri görüntülemek için kullanmak istiyorsanız bu seçeneği belirleyin. Bu seçenek şu görüntüleyiciler için desteklenir:<br><br><ul><li>Uygulamacık görüntüleyici</li><li>AJAX görüntüleyicisi</li><li>HTML dönüştürme</li><li>PDF dönüştürme</li><li>Web tarayıcısı</li></ul><br><br><b>Dikkat:</b> Çoğu zaman belirli görüntüleyicileri kullanmak istiyorsanız, yaratmış olduğunuz, bu seçeneği kullanan eşlemeler görüntüleyici eşlemenizin sonuna taşınmalıdır. ",
		file_type_input: "Yeni dosya tipi:",

		mime_type_input: "Yeni MIME tipi:",
		mime_type_input_invalid: "Yeni MIME tipi şu karakterlerin hiçbirini içeremez: ,",
		mime_type_available: "Kullanılabilecek MIME Tipleri",
		mime_type_selected: "Seçilen MIME Tipleri",
		file_type_input: "Yeni dosya tipi:",
		file_type_input_invalid: "Yeni dosya tipi şu karakterlerin hiçbirini içeremez: ,",
		file_type_available: "Kullanılabilecek dosya tipleri",
		file_type_selected: "Seçilen dosya tipleri",
		file_type_header: "Dosya Tipi",
		viewer: "Görüntüleyici:",
		viewer_viewer: "Görüntüleyici",
		viewer_view: "Görüntüleme",
		viewer_preview: "Önizleme",
		viewer_merge_and_split: "Birleştir ve Ayır",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Yalnızca önizleme",
		preview_only_label: "(önizleme)",
		preview_only_hover: "Bu görüntüleyici eşlemesi yalnızca, bir kullanıcı <b>Önizleme</b>'yi tıklatınca kullanılır.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Bu havuz göz atmayı desteklemiyor. Başka bir havuz seçin.",

		repository_community_teamspace_message: "Topluluk kitaplığı havuzu olarak belirlenmiş başka bir havuz var. Var olan havuzu topluluk kitaplığı havuzu olarak kullanmaya devam etmek istiyorsanız, var olan havuzun bu havuzla değiştirilmesini önlemek için, değişikliklerinizi kaydetmeden önce <b>Hayır</b>'ı seçin.",

		favorites_empty: "Henüz sık kullanılan öğeniz yok.",
		syncItems_empty: "Henüz eşitlenmiş dosyanız yok.",

		root_folder_id: "Kök klasör tanıtıcısı",
		unified_searches: "Havuzlar arası aramalar:",
		max_results: "Sonuçların sayısı:",
		direct_retrieve_enabled: "Doğrudan alma:",
		itemTypesToDisplay: "Görüntülenecek öğe tipleri:",
		allItemTypes: "Tüm Öğe Tipleri",
		include_attr_group_name: "Öznitelik görüntü adlarında öznitelik grubu tanımları:",
		admin_repcfg_include_attr_group_name_hover: "Varsayılan olarak, öznitelik grubu özniteliklerinin adları öznitelik grubu tanımını içerir. Bu, özniteliklerle çalışan kullanıcıların bir öznitelik grubu özniteliğinin hangi öznitelik grubuna ait olduğunu görmesine yardımcı olur.<br>Örneğin, kullanıcı bir öznitelik grubu özniteliği için şu adı görebilir: Belge Ayarları.Belge Tipi.<br><br>Bu seçeneği geçersiz kılarsanız, öznitelik grubu adı için yalnızca öznitelik tanımı kullanılır.<br>Örneğin, kullanıcı şu adı görür: Belge Tipi.<br><br>Öznitelik grubu tanımı olmadan, kullanıcı Belge Tipi'nin basit bir öznitelik mi, yoksa bir öznitelik grubu özniteliği mi olduğunu anlayamayabilir.",
		documentItemTypesOnly: "Yalnızca Belge Modeli Öğesi Tipleri",
		object_store: "Nesne deposu simgesel adı:",
		object_store_display_name: "Nesne deposu görüntü adı:",
		teamspaceUpgradeMsg: "Havuz yapılandırmanızı kaydettiğinizde ekip alanlarınız güncellenir. Birçok ekip alanınız varsa güncelleme birkaç dakika sürebilir.",
		synchUpgradeMsg: "Havuz yapılandırmanızı kaydettiğinizde bu havuzdaki eşitleme modülü güncellenir.",
		protocol: "Protokol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS Havuz Tanıtıcısı:",
		cmis_url: "CMIS AtomPub bağ tanımlama hizmet belgesi URL:",
		trace_level: "İzleme düzeyi",
		trace_dir: "İzleme dizini",
		temp_dir: "Geçici dizin",
		show_document_location: "Belge konumunu göster",
		max_folders: "Klasör sayısı üst sınırı",
		afp_conversion: "AFP dönüştürme",
		line_conversion: "Satır verisi dönüştürme",
		max_hits: "Rastlama sayısı üst sınırı",
		folder_search_expresssion: "Klasör arama ifadesi",
		max_item_types: "Öğe tipi sayısı üst sınırı",
		max_worklists: "İş listesi sayısı üst sınırı",
		update_storage_collection: "Depolama derlemini güncelle",
		include_mime_types_in_search_results: "Arama sonuçları MIME tiplerini içersin",
		object_type: "Nesne tipi",
		object_type_document: "Belgeler",
		object_type_folder: "Klasörler",
		file_label: "Dosya:",
		plugin_jarfile_path_label: "JAR dosyası yolu:",
		plugin_classfolder_path_label: "Sınıf dosyası yolu:",
		plugin_classname_label: "Sınıf adı:",
		plugin_id_label: "Eklenti Tanıtıcısı:",
		class_label: "Sınıf",
		configuration: "Yapılandırma",
		connect_repository: "Bağlan...",
		server_type: "Sunucu Tipi",
		timeout_in_seconds: "Zamanaşımı (saniye):",
		default_search_template: "Varsayılan arama",
		search_filtered_properties: "Aranabilir Özellikler",
		property_contains_label: "Bunu içeren özellik:",
		class_contains_label: "Bunu içeren sınıf:",
		search_filtered_operators: "Arama İşleçleri",
		default_search_results: "Arama Sonuçları",
		data_type: "Veri tipi",
		status_bar: "Durum Çubuğu",
		operators_for: "İlgili işleçler:",
		currentUser: "Yürürlükteki Kullanıcı",
		nameContains: "Adı bunu içeren:",
		searchFor: "Aranacak:",
		server_autentication: "Sunucu Kimlik Doğrulaması (JWT kullanan OAuth 2.0)",
		standard_authentication: "Standart Kimlik Doğrulaması (3 bacaklı OAuth2.0)",
		developer_authentication: "Geliştirici Kimlik Doğrulaması",
		enterprise_id: "Kurum Tanıtıcısı:",
		public_key_id: "Genel Anahtar Tanıtıcısı:",
		private_key_path: "Özel anahtar dosyası yolu:",
		server_user_email: "Sunucu kullanıcı epostası",

		filter_builder_tooltip: "Süzgeç Tanımla",

		// Launch bar
		launchbar_home: "Ana Sayfayı Aç",
		launchbar_favorites: "Sık Kullanılanları Aç",
		launchbar_browse: "Göz Atma Görünümünü Aç",
		launchbar_browse_popup: "Göz Atma Beliren Listesini Aç",
		launchbar_search: "Arama Görünümünü Aç",
		launchbar_search_popup: "Arama Beliren Listesini Aç",
		launchbar_teamspaces: "Ekip Alanları Görünümünü Aç",
		launchbar_teamspaces_popup: "Ekip Alanları Beliren Listesini Aç",
		launchbar_work: "Çalışma Görünümünü Aç",
		launchbar_work_popup: "Çalışma Beliren Listesini Aç",
		launchbar_entry_templates: "Giriş Şablonları Görünümünü Aç",
		launchbar_entry_templates_popup: "Giriş Şablonları Beliren Listesini Aç",
		launchbar_admin: "Yönetim Görünümünü Aç",

		admin_sync_server: "Sync Services",
		admin_settings: "Ayarlar",
		admin_interface_text: "Etiketler",
		admin_interface_text_desktop: "Masaüstü:",
		admin_desktops: "Masaüstleri",
		admin_repositories: "Havuzlar",
		admin_mobile: "Mobil",
		admin_menus: "Menüler",
		admin_reason_codes: "Düzelti Nedenleri",
		admin_plugins: "Eklentiler",
		admin_plugins_state_enabled: "Eklenti etkinleştirildi",
		admin_plugins_state_disabled: "Eklenti geçersiz kılındı",
		admin_plugins_version: "Sürüm:",
		admin_plugins_version_heading: "Sürüm",
		admin_plugins_icon: "Eklenti Simgesi",
		admin_viewer_mapping_icon: "Görüntüleyici Eşleme Simgesi",
		admin_viewer_defs: "Görüntüleyici Eşlemeleri",
		admin_viewer_dialog_title: "Eşleme",
		admin_viewer_dialog_new_title: "Yeni Eşleme",
		admin_viewer_dialog_instructions: "Eşleme, bir havuzdaki dosyalar için hangi görüntüleyicinin kullanılacağını belirler. Farklı dosya tipleri ilgili olarak farklı görüntüleyiciler belirlemek için birden çok eşleme yaratabilirsiniz. Eşleme tanımlamak için bir MIME tipi ya da dosya uzantısı kullanabilirsiniz. Dosya uzantıları kullanan eşlemeler belge adlarıyla eşlenir. Örneğin, dosya tipi gif olarak ayarlanmış bir eşleme, .gif uzantısıyla biten belge adlarıyla eşlenir.",
		admin_desktop_viewer_defs: "Görüntüleyici eşlemesi:",
		admin_desktop_viewer_defs_hover: "Görüntüleyici eşlemesi, havuzdaki farklı belge tiplerini açmak için hangi görüntüleyicinin kullanılacağını belirler.<br><br>Yönetim aracının <b>Görüntüleyici Eşlemeleri</b> kısmında yeni görüntüleyici eşlemeleri yaratabilirsiniz.",
		admin_desktops_used: "Masaüstlerinde kullanılır",
		admin_desktop_additional_settings: "Ek ayarlar:",
		admin_default_desktop: "Varsayılan masaüstü olarak belirle",
		admin_default_desktop_header: "Varsayılan Masaüstü",
		admin_layout_tab_title: "Yerleşim Düzeni",
		admin_desktop_icon: "Masaüstü Simgesi",

		// Themes
		admin_themes: "Temalar",
		admin_theme_list_instructions: "Bir tema yaratarak, web istemcisinin kuruluşunuz için özelleştirilmesini kolaylaştırabilirsiniz. Ortamınızdaki farklı masaüstleri için farklı renkler, yazı tipleri ya da logolar kullanmanız gerekiyorsa birden çok tema yaratabilirsiniz.<br><br>Tema yarattıktan sonra, masaüstünün <b>Görünüm</b> sekmesinde temayı yapılandırarak masaüstüne uygulayabilirsiniz.",
		admin_theme_instructions: "Web istemcisinde görüntülenen renkleri ve yazı tiplerini denetlemek için bir tema yaratın. Sayfadaki günlükte ve büyük başlıkta görüntülenen logoyu, uygulama adını ve yayın hakkı metnini değiştirmek için de temayı kullanabilirsiniz.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Yeni Tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Seçilen temaları silmek istiyor musunuz?\n${0} tema seçildi.",
		admin_theme_color: "Renk",
		admin_theme_text: "Metin",
		admin_theme_solid: "Düz",
		admin_theme_gradient: "Geçişli",
		admin_theme_box: "Box",
		admin_theme_color_label: "Renk ${0}:",
		admin_theme_name_invalid: "Tema adı şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Tema tanıtıcısı benzersiz olmalıdır ve temayı kaydettikten sonra tanıtıcıyı değiştiremezsiniz.<br><br>Tanıtıcı yalnızca alfasayısal karakterler içerebilir.",
		admin_theme_name_hover: "Ad şu karakterleri içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Otomatik",
		admin_theme_logo_url_hover: "Logo dosyasının URL adresini girin. Logo dosyası web istemcisiyle aynı web uygulama sunucusundaysa, göreli bir URL adresi girin, örneğin: /mycustomizations/banner_logo.png<br><br>Logo arka planının saydam olması önerilir.",
		admin_theme_color_palette_title_heading: "Renk Paleti",
		admin_theme_color_palette_help_text: "Renk seçicinin onaltılı değerini kullanarak, temanıza ilişkin renk paletini yaratın. İstediğiniz sayıda renk ekleyebilirsiniz.",
		admin_theme_color_add_button_label: "Renk Ekle",
		admin_theme_color_remove_button_label: "Rengi Kaldır",
		admin_theme_global_title_heading: "Uygulama Çapındaki Öğeler",
		admin_theme_global_font: "Yazı tipi ailesi:",
		admin_theme_global_font_hover: "Web istemcisinde kullanılacak yazı tipini seçin. Yazı tipleri öncelik sırasıyla listelenir; listede yer alan sonraki yazı tipi, istemci makinesinde önceki yazı tipi kurulu değilse kullanılır.",
		admin_theme_global_framework_color_label: "Çerçeve rengi:",
		admin_theme_global_framework_color_hover: "Şu öğeler için kullanılacak rengi seçin:<ul><li>İletişim kutularındaki başlık çubukları</li><li>Seçilen sekmenin tepesindeki vurgulama rengi</li><li>İçerik listesi görünümü simgeleri (Ayrıntılar görünümü, Tanımlı görünüm, Film Şeridi görünümü)</li></ul><br>Bu renk, web istemcisinin kısımları arasındaki ayırıcılar için kullanılmaz. Ayırıcıların rengini değiştirmek istiyorsanız, özel bir CSS dosyası sağlamak için bir eklenti yaratmalısınız.",
		admin_theme_color_global_toolbar: "Genel araç çubuğu rengi:",
		admin_theme_color_global_toolbar_hover: "Web istemcisine genel araç çubuğunu ekleyecekseniz, araç çubuğunun rengini seçin.<br><br><b>İpucu:</b> Araç çubuğu web istemcisinin üst kısmındaki büyük başlıkta görüntülenir; dolayısıyla, araç çubuğunun rengi büyük başlığın rengini tamamlayıcı bir renk olmalıdır.",
		admin_theme_global_selected_color: "Seçilen öğe rengi:",
		admin_theme_global_selected_color_hover: "Göz atma ağacında, arama ağacında ve içerik listesinde öğeler seçildiğinde kullanılacak rengi seçin.<br><br>Üzerinde gezinme rengi (kullanıcı imleci bir öğenin üzerinde gezdirdiğinde kullanılacak renk) bu renkten türetilir.",
		admin_theme_global_link_color: "Bağlantı rengi:",
		admin_theme_global_link_color_hover: "Web istemcisindeki tüm tıklatılabilir URL'ler için kullanılacak rengi seçin. Örneğin, web istemcisinin her yerinde görüntülenen Daha Fazla Bilgi bağlantıları için bu renk kullanılır.",
		admin_theme_login_title_heading: "Oturum Açma Sayfası Öğeleri",
		admin_theme_page_background_label: "Oturum açma sayfası arka plan rengi:",
		admin_theme_login_page_background_hover: "Oturum açma bölmesinin arkasında görüntülenecek rengi seçin.",
		admin_theme_login_pane_background_label: "Oturum açma bölmesi arka plan rengi:",
		admin_theme_login_pane_background_hover: "Oturum açma bölmesi için görüntülenecek rengi seçin. Bu renk, oturum açma bölmesinin arka plan rengini tamamlayıcı bir renk olmalıdır.",
		admin_theme_text_color: "Metin rengi:",
		admin_theme_login_pane_text_color_hover: "Oturum açma bölmesi metni için kullanılacak rengi seçin. Hoş geldiniz metni ve alan etiketleri için bu renk kullanılır. Bu renk, oturum açma bölmesinin arka plan renginden ayırt edilebilecek bir renk olmalıdır.",
		admin_theme_copyright_text: "Yayın hakkı metni:",
		admin_theme_copyright_text_hover: "Oturum açma bölmesinde yayın hakkı metni görüntülenip görüntülenmeyeceğini belirler.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Yayın hakkı metni yok",
		admin_theme_banner_title_heading: "Büyük Başlık Öğeleri",
		admin_theme_text_icons_color: "Metin ve simge rengi:",
		admin_theme_icon_color_label: "Simge rengi:",
		admin_theme_shadow_label: "Gölge:",
		admin_theme_banner_text_icons_hover: "Büyük başlıktaki metin ve simgeler için kullanılacak rengi seçin. Bu renk, büyük başlığın arka plan renginden ayırt edilebilecek bir renk olmalıdır.",
		admin_theme_banner_product_name_label: "Ürün adı:",
		admin_theme_banner_product_name_hover: "Masaüstü yarattığınızda, uygulama için görüntülenecek bir özel ad belirtebilirsiniz. Özel ad belirtmezseniz, ürün adı olarak IBM Content Navigator kullanılır. Masaüstünde tanımlı uygulama adının mı, yoksa ad yerine bir resim mi kullanılacağını belirleyin.",
		admin_theme_banner_product_name_desktop_defined_label: "Masaüstündeki Adı Kullan",
		admin_theme_banner_product_name_image: "Özel Logo Kullan (URL)",
		admin_theme_background_color_label: "Arka plan rengi:",
		admin_theme_style_label: "Stil:",
		admin_theme_banner_color_hover: "Uygulamanın üst kısmındaki büyük başlık için kullanılacak rengi seçin.<br><br><b>İpucu:</b> Bu rengin, büyük başlığın arka plan renginden ayırt edilebilecek bir renk olmasına dikkat edin.",
		admin_theme_buttons_title_heading: "Düğmeler",
		admin_theme_navigation_title_heading: "Dolaşma Öğeleri",
		admin_theme_navigation_icon_selected_label: "Seçilen simge rengi:",
		admin_theme_navigation_background_hover: "Özellik dolaşma çubuğunun arka planı için kullanılacak rengi seçin.",
		admin_theme_navigation_icon_color_hover: "Özellik dolaşma çubuğundaki simgeler için kullanılacak rengi seçin. Bir masaüstünde varsayılan yerleşim düzeni kullanıldığında, bu rengin, özellik açılan menüsünün arka planıyla karşıtlık oluşturması gerekir. Bir masaüstünde klasik yerleşim düzeni kullanıldığında, bu rengin, özellik dolaşma çubuğunun arka planıyla karşıtlık oluşturması gerekir.",
		admin_theme_navigation_icon_selected_hover: "Özellik dolaşma çubuğunda seçilen özellikler için kullanılacak rengi seçin. Bu renk, simgelerin rengini ve özellik dolaşma çubuğunun arka plan rengini tamamlayıcı bir renk olmalıdır.<br><br>Bir masaüstünde klasik yerleşim düzeni kullanıldığında, bu renk, özellik dolaşma çubuğunda üzerinde gezinme rengi olarak kullanılır.",
		admin_theme_button_background_color_hover: "Düğme arka planları için kullanılacak rengi seçin.",
		admin_theme_button_style_hover: "Düğme stili seçin.",
		admin_theme_button_text_icon_color_hover: "Düğmelerdeki metin ve resimler için kullanılacak rengi seçin.",
		admin_theme_no_logo_label: "Logo Yok",
		admin_theme_custom_logo_label: "Özel Logo (URL)",
		admin_theme_banner_type: "Büyük başlık doldurma stili:",
		admin_theme_banner_type_hover: "Büyük başlığın düz renk mi, yoksa tongeçişli mi olacağını belirleyin. Tongeçişli bir büyük başlık belirtirseniz, büyük başlık için belirttiğiniz renk, büyük başlıktaki en koyu renk olur.<br><br><b>İpucu:</b> Bu rengin, büyük başlığın arka plan renginden ayırt edilebilecek bir renk olmasına dikkat edin.",
		admin_theme_icon: "Tema Simgesi",
		admin_theme_buttons_and_links_title_heading: "Düğmeler, Alanlar ve Bağlantılar",
		admin_theme_button_style_label: "Düğme stili:",
		admin_theme_theme_style_label: "Tema stili:",
		admin_theme_theme_style_hover: "Temanın dayalı olacağı stili seçin. Tema yaratırken ya da düzenlerken stili istediğiniz zaman değiştirebilirsiniz. Bir stilden diğerine geçtiğinizde, tema ayarları varsayılan değerlerine geri çevrilir.",
		admin_theme_accent_color_label: "Vurgu rengi:",
		admin_theme_accent_color_hover: "İletişim kutusunun üst kısmındaki çubuk için ve değer değiştiriciyi yüklemek için kullanılacak rengi seçin.",
		admin_theme_global_toolbar_text_color_label: "Genel araç çubuğu metin rengi:",
		admin_theme_global_toolbar_text_color_hover: "Web istemcisine genel araç çubuğunu ekleyecekseniz, araç çubuğundaki metin için kullanılacak rengi seçin.",
		admin_theme_banner_text_color_hover: "Büyük başlıktaki metin için kullanılacak rengi seçin.",
		admin_theme_banner_icon_color_hover: "Büyük başlıktaki simgeler için kullanılacak rengi seçin.",
		admin_theme_button_color_label: "Renk:",
		admin_theme_button_color_hover: "Şu öğeler için kullanılacak rengi seçin:<ul><li>İletişim kutularındaki başlık çubukları</li><li>Seçilen sekmenin tepesindeki vurgulama rengi</li><li>İçerik listesi görünümü simgeleri (Ayrıntılar görünümü, Tanımlı görünüm, Film Şeridi görünümü)</li><li>Düğmeler, alanlar ve bağlantılar</li></ul>Kullanıcı imleci bir öğenin üzerinde gezdirdiğinde kullanılacak renk bu renkten türetilir. Bu renk, web istemcisinin kısımları arasındaki ayırıcılar için kullanılmaz. Ayırıcıların rengini değiştirmek istiyorsanız, özel bir CSS dosyası sağlamak için bir eklenti yaratmalısınız.",
		admin_theme_theme_style_col_header: "Tema Stili",

		admin_syncserver_consistency_checker: "Tutarlılık denetleyici:",
		admin_syncserver_consistency_checker_hover: "Sync Services veritabanlarının, sunucudaki her öğenin durumuyla ilgili güncel bilgilere sahip olmasını güvenceye almak için tutarlılık denetleyiciyi çalıştırın. Örneğin, bir Sync Services veritabanı kesintisinden sonra tutarlılık denetleyiciyi çalıştırarak, kesinti sırasında havuzda güncellenen belgelerle ilgili bilgileri alabilirsiniz.",
		admin_syncserver_consistency_checker_button: "Tutarlılık Denetleyiciyi Çalıştır",
		admin_syncserver_consistency_checker_started: "Başlama:",
		admin_syncserver_consistency_checker_ended: "Bitiş:",
		admin_syncserver_consistency_checker_duration: "Süre:",
		admin_syncserver_consistency_checker_items_processed: "İşlenen eşitleme öğeleri:",
		admin_syncserver_consistency_checker_items_processed_success: "Başarıyla işlenen eşitleme öğeleri:",
		admin_syncserver_consistency_checker_items_discovered: "Keşfedilen yeni havuz öğeleri:",
		admin_syncserver_consistency_checker_change_updates: "Toplam güncelleme:",
		admin_syncserver_consistency_checker_state: "Durum:",
		admin_syncserver_consistency_checker_state_done: "Bitti",
		admin_syncserver_consistency_checker_state_running: "Çalışıyor",
		admin_syncserver_consistency_checker_user: "Başlatan:",
		admin_syncserver_consistency_checker_scheduled: "Zamanlama:",

		admin_syncserver_dbcleanup: "Veritabanı Temizliği",
		admin_syncserver_dbcleanup_hover: "Artık veritabanından eşitlenmeyen, kullanılmayan aygıt ve öğeleri kaldırmak için veritabanı temizliği aracını çalıştırın.",
		admin_syncserver_dbcleanup_button: "Veritabanı Temizliği",
		admin_syncserver_dbcleanup_state_done: "Bitti",
		admin_syncserver_dbcleanup_state_running: "Çalışıyor",
		admin_syncserver_dbcleanup_started: "Başlama:",
		admin_syncserver_dbcleanup_ended: "Bitiş:",
		admin_syncserver_dbcleanup_state: "Durum:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Silinen havuzlar:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Silinen eşlenmiş öğeler:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Silinen aygıtlar:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Süresi dolan aygıtlar:",

		admin_syncserver_publicSyncUrl: "Sync Services genel URL adresi:",
		admin_syncserver_publicSyncUrl_hover: "Havuzların IBM Content Navigator Sync Services ile iletişim kurmak için kullanabileceği URL adresini belirtin. URL adresinin varsayılan biçimi şöyledir: http://sync_genel_URL:kapı_numarası/sync/notify.",

		admin_syncserver_managed: "Eşitleme istemcisi ayarları:",
		admin_syncserver_managed_hover: "Kullanıcılar IBM Content Navigator Sync istemcisinde bu ayarları değiştiremez.",
		admin_syncserver_managed_subfolder: "Eşitlenecek klasör düzeyleri",
		admin_syncserver_managed_subfolder_hover: "Bir kullanıcı bir klasörü eşitlerken eşitlenecek klasör sayısı üst sınırını belirtin. Örneğin, kullanıcı 3 klasör düzeyini belirtirse, eşitlenecek klasörle birlikte 2 düzey alt klasör de eşitlenir.<br><br>Ortamınızın, bu ayarın yaratacağı eşitleme trafiğini destekleyecek şekilde ölçeklendiğini doğrulayın.",
		admin_syncserver_managed_subfolder_all: "Tüm Alt Klasörler",
		admin_syncserver_managed_subfolder_none: "Alt Klasör Yok",
		admin_syncserver_managed_subfolder_no_more: "Sınırlı düzey sayısı",
		admin_syncserver_managed_subfolder_levels: "klasör",
		admin_syncserver_managed_schedule: "Eşitleme zaman çizelgesi",
		admin_syncserver_managed_schedule_hover: "Ortamınızın, bu eşitleme zaman çizelgesinin yaratacağı eşitleme trafiğini destekleyecek şekilde ölçeklendiğini doğrulayın.<br><br>Süre üst sınırı 24 saat ya da 1440 dakikadır.<br><br>Kullanıcılar istemcide <b>Şimdi Eşitle</b>'yi kullanarak eşitleme zaman çizelgesini geçersiz kılabilir.",
		admin_syncserver_managed_schedule_manual: "Elle eşitle",
		admin_syncserver_managed_schedule_continuous: "Sürekli olarak eşitle",
		admin_syncserver_managed_schedule_every: "Belirli aralıklarla eşitle",
		admin_syncserver_managed_schedule_minutes: "Dakika",
		admin_syncserver_managed_schedule_hours: "Saat",

		// redaction codes
		admin_new_reason_code: "Yeni Düzelti Nedeni",		
		admin_reason_code_name_invalid: "Düzelti nedeni adı şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Tanım şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Tanım şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Ad şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Tanım:",
		admin_reason_code_applications_hover: "Bu düzelti nedenine gönderme yapan Datacap uygulamalarının listesi.",
		admin_reason_code_applications: "Datacap uygulamaları",
		admin_delete_confirmation_reason_codes: "Seçilen düzelti nedenlerini silmek istiyor musunuz?",
		admin_delete_confirmation_reason_code: "Seçilen düzelti nedenini silmek istiyor musunuz?",
		admin_reason_code_heading: "Düzelti nedeni: <b>${0}</b>",
		admin_reason_code_list_instructions: "Düzelti nedenleri, duyarlı verilerin görüntülenmesini engellemek amacıyla karartılma nedenini gösterir. Her neden, genel kullanıcılardan gizlenen bir duyarlı veri tipini tanımlar.",
		admin_reason_code_instructions: "Her duyarlı veri tipi için bir düzelti nedeni yaratabilirsiniz. O veriyi kimlerin görebileceğini ve düzeltileri kimlerin yaratabileceğini ya da değiştirebileceğini tanımlamak için, bir düzelti ilkesinde o nedeni kullanabilirsiniz.",
		admin_reason_code_applications_label: "Datacap Uygulamaları",
		admin_reason_code_repositories: "Havuzlar",
		admin_reason_code_repositories_label: "Havuzlar",
		admin_reason_code_repositories_hover: "Bu düzelti nedenine gönderme yapan ICN havuzlarının listesi.",
		admin_reason_code_repositories_default_value: "Ayarlanmadı",
		admin_reason_code_description_label: "Tanım",
		admin_reason_code_applications_default_value: "Ayarlanmadı",
		admin_redaction_reasons: "Düzelti Nedenleri",
		admin_redactions: "Rol Tabanlı Düzeltiler",
		admin_redactions_policies_roles: "İlkeler ve Roller",
		admin_reasons: "Nedenler",
		admin_reason_code_id: "Tanıtıcı",
		admin_reason_code_id_hover: "Tanıtıcı düzenlenemez.  Panoya kopyalanabilir.",
		// Role based administration
		admin_rba: "Rol Tabanlı Masaüstü Yönetimi",
		admin_rba_mobile_access_enabled: "Bu masaüstü mobil erişim için etkinleştirildi.",
		admin_rba_mobile_access_disabled: "Bu masaüstü mobil erişim için etkinleştirilmedi.",
		admin_rba_confirm_delete_multiple: "Seçilen yönetim rollerini silmek istiyor musunuz?",
		admin_rba_confirm_delete_single: "Seçilen yönetim rolünü silmek istiyor musunuz?",
		admin_rba_delete_multi_role_desktop: "Seçtiğiniz rolerden biri ya da daha fazlası bir masaüstüne atanmış. Rolleri silebilmek için önce masaüstlerinden kaldırmalısınız.",
		admin_rba_delete_single_role_desktop: "Seçtiğiniz rol ${0} masaüstüne atanmış. Rolü silebilmek için önce masaüstünden silmelisiniz.",
		admin_desktop: "Masaüstü",
		admin_rba_instructions: "Masaüstü yöneticilerine verilen ayrıcalıkları ilişkilendiren masaüstü yönetimi rolleri yaratabilir ve bunları yönetebilirsiniz.",
		admin_rba_not_used: "${0} hiçbir masaüstünde kullanılmıyor.",
		admin_rba_desktops: "<b>${0} şu masaüstlerinde kullanılıyor:</b>",
		admin_rba_new_role: "Yeni Rol",
		admin_rba_name_invalid: "Yönetim rolü adı şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Tanım şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Tanım şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Ad şu karakterlerin hiçbirini içeremez: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Tanım: </b> ${0}",
		admin_rba_membership: "Üyelik",
		admin_rba_general_priv: "Genel",
		admin_rba_appearance_priv: "Görünüş",
		admin_rba_desktop_config_priv: "Masaüstü Yapılandırması",
		admin_rba_app_name_priv: "Uygulama adı",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Görüntüleyici Eşlemesi",
		admin_rba_merge_split_priv: "Birleştir ve Ayır",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Menüler",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Araç çubukları",
		admin_rba_ctx_menus_priv: "Bağlam Menüleri",
		admin_rba_office_ribbon_priv: "MS Office Şerit Çubuk Komutları",
		admin_rba_office_menues_priv: "MS Office Bağlam Menüleri",
		admin_rba_addl_settings_priv: "Ek Ayarlar",
		admin_rba_mobile_priv: "Mobil",
		admin_rba_add_doc_dlg_priv: "Belge Ekle İletişim Kutusu",
		admin_rba_doc_mgmt_priv: "Belge Yönetimi",
		admin_rba_def_redaction_priv: "Varsayılan Düzelti Seçeneği",
		admin_rba_add_photos_priv: "Fotoğraf makinesinden ve fotoğraf kitaplığından fotoğraf ekleme",
		admin_rba_time_stamp_priv: "Zaman Damgası",
		admin_rba_add_docs_folders_priv: "Havuza belge ekleme ve klasör yaratma",
		admin_rba_open_docs_priv: "Belgeleri başka uygulamalarda açma",
		admin_rba_office_config_priv: "Office Yapılandırması",
		admin_rba_tab_label_priv: "IBM ECM sekme etiketi",
		admin_rba_feature_sel_priv: "Özellik Seçimi",
		admin_rba_general_config_priv: "Genel Yapılandırma",
		admin_rba_favorites_priv: "Sık Kullanılanlar",
		admin_rba_add_options_priv: "Düzenle grubundaki Ekle seçenekleri",
		admin_rba_browse_priv: "Göz At",
		admin_rba_outlook_int_priv: "Outlook Bütünleşmesi",
		admin_rba_search_priv: "Arama",
		admin_rba_layout_priv: "Yerleşim Düzeni",
		admin_rba_case_priv: "Vaka",
		admin_rba_desktop_feat_priv: "Masaüstü Özellikleri",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Görüntülenen Özellikler",
		admin_rba_branding_priv: "Markalama",
		admin_rba_home_priv: "Ana Sayfa",
		admin_rba_main_color_priv: "Ana renk",
		admin_rba_sec_color_priv: "İkincil renk",
		admin_rba_teamspaces_priv: "Ekip alanları",
		admin_rba_rbr_priv: "Rol Tabanlı Düzelti",
		admin_rba_et_mgr_priv: "Giriş Şablonu Yöneticisi",
		admin_rba_policies_roles_priv: "İlkeleri ve Rolleri Yönet",
		admin_rba_work_priv: "İş",
		admin_rba_reasons_priv: "Neden Kodları",
		admin_rba_tasks_priv: "Zamanuyumsuz Görevler",
		admin_rba_auth_priv: "Kimlik Doğrulaması",
		admin_rba_all_privs: "Tüm ayrıcalıklar",
		admin_rba_some_privs: "Bazı ayrıcalıklar",
		admin_rba_no_privs: "Ayrıcalık yok",
		admin_add_users_groups_priv: "Kullanıcılar ve gruplar ekleme",
		admin_url_features_priv: "URL özelliklerini yönetme",
		admin_plugin_features_priv: "Eklenti özelliklerini yönetme",
		admin_addl_components_priv: "Ek Bileşenler",
		admin_global_toolbar_priv: "Genel araç çubuğu",
		admin_status_bar_priv: "Durum çubuğu",
		admin_refresh_message: "Güncellenen verileri kullanmak için tarayıcınızı yenilemelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Güncellenen varsayılan masaüstünü kullanmak için tarayıcınızı yenilemelisiniz.",
		admin_desktop_refresh_message: "Güncellenen masaüstünü kullanmak için tarayıcınızı yenilemelisiniz.",
		admin_action_open: "Aç",
		admin_action_edit: "Düzenle",
		admin_action_copy: "Kopyala",
		admin_action_delete: "Sil",
		admin_action_copy: "Kopyala",
		admin_action_new: "Yeni Yarat",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Bu tanıtıcı kullanımda. Benzersiz bir tanıtıcı belirtmelisiniz.",

		admin_searchable_properties_for: "Bu öğenin aranabilir özellikleri:",
		admin_repository_new: "Yeni Havuz",
		admin_desktop_new: "Yeni Masaüstü",
		admin_desktop_file_documents: "Kullanıcıların yeni belgeleri ve klasörleri klasöre kaydetmesini gerekli kıl",
		admin_desktop_file_documents_hover: "Kullanıcıların havuza öğe eklerken klasör seçmelerini gerekli kılmak istiyorsanız bu seçeneği belirleyin. Bu seçeneği belirlemezseniz, kullanıcılar belgeleri (IBM FileNet P8) ya da belgeleri ve klasörleri (IBM Content Manager) bir klasöre koymadan ekleyebilir.",
		admin_desktop_show_security_tab: "Ekleme ve içeri verme eylemleri sırasında güvenlik ayarlarını göster",
		admin_desktop_show_security_hover: "<b>Yalnızca IBM FileNet P8 kullanıcıları.</b>  Kullanıcıların bu masaüstüne öğe eklerken ya da öğeleri içeri verirken belgelerin ve klasörlerin güvenliğini düzenlemelerine izin vermek istiyorsanız bu seçeneği belirleyin.",
		admin_desktop_configure_security_inheritance: "Kullanıcıların klasörlere ilişkin güvenliği devralmayı yapılandırmasına izin ver",
		admin_desktop_configure_security_inheritance_hover: "<b>Yalnızca IBM FileNet P8 kullanıcıları.</b>  Kullanıcıların klasörlere ilişkin güvenliğin devralınmasını denetleyerek bir klasördeki öğelere erişimi özelleştirebilmesini istiyorsanız bu seçeneği belirleyin. Bu seçeneği belirlerseniz, kullanıcılar, kullanıcıların ya da grupların güvenliği şu öğelerden devralıp devralamayacağını belirtebilir:<ul><li>Bir klasör</li><li>Bir klasör ve doğrudan alt klasörleri</li><li>Bir klasör ve tüm alt klasörleri</li></ul>",
		admin_desktop_appearance: "Görünüş",
		admin_desktop_appearance_instruction: "Masaüstü için görüntülenen oturum açma sayfasını ve büyük başlığı değiştirerek, masaüstünün görünüşünü özelleştirebilirsiniz.",
		admin_desktop_layout: "Yerleşim düzeni:",
		admin_desktop_layout_hover: "Yerleşim düzeni, web istemcisinde hangi özelliklerin görüntülenebileceğini ve web istemcisi içeriğinin nasıl düzenleneceğini belirler.<br><br><b>İpucu:</b> Eklentiler yaratarak özel yerleşim düzenleri tanımlayabilirsiniz. Özel yerleşim düzeni seçebilmek için eklentiyi yönetim aracına kaydettirmeniz gerekir.",
		admin_desktop_layout_default: "Varsayılan",
		admin_desktop_layout_custom: "Özel",
		admin_desktop_enable_workflow_email: "Bu masaüstünü FileNet P8 iş akışı eposta bildirimi için etkinleştir",
		admin_desktop_enable_workflow_email_hover: "Yalnızca IBM FileNet P8 kullanıcıları. Kullanıcıların web istemcisini Process Engine tarafından üretilen eposta bildirimlerinin içerdiği URL'lerden açmalarına olanak sağlamak için bu seçeneği belirleyin.<br /><br />Bu seçeneği hiçbir masaüstü için etkinleştirmezseniz, kullanıcılar bildirimlerdeki URL'leri kullanarak web istemcisinde oturum açamaz.<br /><br />Bu seçeneği birden çok masaüstünde etkinleştirirseniz ve bildirimdeki URL adresinde belirtilen ölçütlere uygun birden çok masaüstü varsa, web istemcisi ölçütlere uyan ilk masaüstünü kullanır. ",
		admin_desktop_prevent_create_new_search: "Kullanıcıların arama yaratmasını engelle",
		admin_desktop_prevent_create_new_search_hover: "Bu seçenek kullanıcıları yalnızca var olan aramaları kullanabilecek şekilde sınırlar ve kullanıcıların eniyilenmemiş olabilecek açık uçlu aramalar yaratmasını engeller.</br></br>Bu ayar ekip alanlarını etkilemez. Bir ekip alanında arama yaratma hakkı, kullanıcının belirli bir ekip alanındaki rolüyle denetlenir.",
		admin_desktop_prevent_create_new_unified_search: "Kullanıcıların havuzlar arası aramalar yaratmasını engelle",
		admin_desktop_prevent_create_new_unified_search_hover: "Bu seçenek kullanıcıları yalnızca var olan havuzlar arası aramaları kullanabilecek şekilde sınırlar ve kullanıcıların eniyilenmemiş olabilecek açık uçlu havuzlar arası aramalar yaratmasını engeller.",
		admin_desktop_hide_entry_template_not_found_warning: "İlişkili giriş şablonu bulunamadığında görüntülenen uyarıyı gizle",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Öğe özellikleri düzenlenirken öğeyle ilişki giriş şablonu bulunamazsa görüntülenen uyarı iletisinin gizlenmesini istiyorsanız bu seçeneği belirleyin.",
		admin_desktop_show_class_role_security_selection: "Kullanıcıların giriş şablonlarında role dayalı güvenli yapılandırmasına izin ver",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Yalnızca IBM FileNet P8 kullanıcıları.</b> Kullanıcıların giriş şablonlarını kullanarak belgeler ve klasörler için güvenlik ayarlarken giriş şablonlarını rol tabanlı güvenliği kullanacak şekilde yapılandırmalarını istiyorsanız bu seçeneği belirleyin. Bu seçeneği belirlerseniz, giriş şablonu düzenleyicileri bir giriş şablonu tanımlamasına rol güvenliği nesneleri uygulanıp uygulanmayacağını belirtebilir.",
		admin_desktop_show_primary_multi_part: "Görüntüleyicide yalnızca birincil belgeyi aç",
		admin_desktop_show_primary_multi_part_hover: "<b>Yalnızca IBM FileNet P8 kullanıcıları.</b> Görüntüleyicide yalnızca birincil belge dosyasının açılmasını istiyorsanız bu seçeneği belirleyin. Belgelerle ilişkilendirilmiş birden fazla dosya olabilir. Bu seçenek yalnızca, belgeyle ilişkilendirilmiş birincil dosyayı açar.",
		admin_desktop_redaction_save_mode: "Varsayılan düzelti seçeneği:",
		admin_desktop_redaction_save_mode_hover: "Varsayılan ViewONE Virtual görüntüleyicisi düzelti kaydetme kipini seçin:</br>* Seçmesini her zaman kullanıcıdan iste seçeneği, düzelti kipine girildiğinde gösterilen iletişim kutusuyla içeriğin yeni bir sürüm olarak mı içeri verileceğinin, yeni belge mi yaratılacağının, yoksa içeriğin karşıdan mı yükleneceğinin kullanıcıya sorulmasını sağlar.</br>* Yeni bir sürüm olarak içeri ver seçeneği, düzeltilen içeriğin her zaman, var olan belgenin yeni bir sürümü olarak kaydedilmesini sağlar.</br>* Tümüyle yeni belge olarak kaydet seçeneği, düzeltilen içeriğin her zaman, tümüyle yeni bir belge olarak kaydedilmesini sağlar.</br>* Karşıdan yükle ve istemciye kaydet seçeneği, düzeltilen içeriğin istemci sistemine yüklenmesini sağlar.",
		admin_desktop_redaction_save_mode_user_select: "Seçmesini her zaman kullanıcıdan iste",
		admin_desktop_redaction_save_mode_new_version: "Yeni bir sürüm olarak içeri ver",
		admin_desktop_redaction_save_mode_new_document: "Tümüyle yeni belge olarak kaydet",
		admin_desktop_redaction_save_mode_local_content: "Karşıdan yükle ve istemciye kaydet",

		admin_desktop_document_add_mode: "Belge ekleme iletişim kutusu:",
		admin_desktop_document_add_mode_hover: "IBM Content Navigator tarafından yaratılan belgeleri eklerken kullanılacak ekleme iletişim kutusunu belirtin:<ul><li>Kalıcı olarak düzeltilmiş yeni belge</li><li>Birleştirilmiş ve ayrılmış yeni belge</li><li>Yeni Microsoft Office belgesi</li><li>Yeni Edit Service belgesi</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Belge Ekle",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Giriş Şablonu Kullanarak Belge Ekle",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Birleştir ve Ayır:",
		admin_desktop_merge_and_split_enable_hover: "Bu masaüstüne erişen kullanıcıların, destekleyen bir görüntüleyici kullanarak belgeleri birleştirmesini ve ayırmasını isteyip istemediğinizi belirleyin.",

		admin_desktop_merge_and_split_show_checkin: "Kullanıcılardan bir belgede yapılan değişiklikleri içeri verirken özellik değerleri belirtmelerini iste",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Bu seçeneği belirlerseniz, kullanıcılar birleştirme ve ayırma kipinde bir belgede yapılan değişiklikleri içeri verirken İçeri Ver iletişim kutusu görüntülenir.",

		admin_desktop_available_categories: "Kullanılabilecek Özellikler",
		admin_desktop_selected_categories: "Seçilen Özellikler",

		admin_layout_banner_title: "Büyük başlık ve oturum açma sayfası",
		admin_layout_title: "Yerleşim Düzeni",

		admin_desktop_application_name: "Uygulama adı:",
		admin_desktop_application_name_hover: "Büyük başlıkta görüntülenecek uygulama adını belirtin.<br><br>İpucu: Etiketler / Masaüstü Etiketleri sekmesinde uygulama adını diğer diller için tanımlayabilirsiniz.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Bu masaüstü için varsayılan IBM Content Navigator temasının mı, yoksa özel tema mı kullanılacağını belirleyin. Özel tema kullanmak için, yönetim aracının <b>Temalar</b> kısmında bir tema yaratmalısınız.",
		admin_desktop_login_logo: "Oturum açma sayfası logosu:",
		admin_desktop_login_logo_hover: "Oturum açma sayfasında görüntülenen logoyu değiştirmek istiyorsanız, bir logo dosyasının URL adresini belirtebilirsiniz. Ancak, logoyu değiştirmek için özel bir tema kullanmanız önerilir.",
		admin_desktop_login_logo_url_hover: "Logo dosyasının URL adresini girin. Logo dosyası web istemcisiyle aynı web uygulama sunucusundaysa, göreli bir URL adresi girin, örneğin: /mycustomizations/login_logo.png<br><br>Logonun genişliği 200 pikseli, yüksekliği 150 pikseli aşmamalıdır.<br><br>Logo arka planının saydam olması önerilir.",
		admin_desktop_banner_logo: "Büyük başlık logosu:",
		admin_desktop_banner_logo_hover: "Büyük başlıkta görüntülenen logoyu değiştirmek istiyorsanız, bir logo dosyasının URL adresini belirtebilirsiniz. Ancak, logoyu değiştirmek için özel bir tema kullanmanız önerilir.",
		admin_desktop_banner_logo_url_hover: "Logo dosyasının URL adresini girin. Logo dosyası web istemcisiyle aynı web uygulama sunucusundaysa, göreli bir URL adresi girin, örneğin: /mycustomizations/banner_logo.png<br><br>Logonun genişliği 72 pikseli, yüksekliği 36 pikseli aşmamalıdır.<br><br>Logo arka planının saydam olması önerilir.",
		admin_desktop_banner_background_color: "Büyük başlık arka plan rengi:",
		admin_desktop_banner_background_color_hover: "Büyük başlığın arka plan rengini değiştirmek istiyorsanız, özel bir renk belirtebilirsiniz. Ancak, büyük başlığın rengini değiştirmek için özel bir tema kullanmanız önerilir.",
		admin_desktop_banner_background_color_custom_hover: "Onaltılı renk olarak uygulama üst başlığının rengini belirtin.",
		admin_desktop_banner_application_name_color: "Uygulama adı metin rengi:",
		admin_desktop_banner_application_name_color_hover: "Uygulama adının rengini değiştirmek istiyorsanız, özel bir renk belirtebilirsiniz. Ancak, uygulama adının rengini değiştirmek için özel bir tema kullanmanız önerilir.",
		admin_desktop_banner_application_name_color_custom_hover: "Onaltılı renk olarak uygulama adının rengini belirtin.",
		admin_desktop_banner_menu_color: "Büyük başlık simgesi rengi:",
		admin_desktop_banner_menu_color_hover: "Büyük başlığın arka plan rengini değiştirirseniz, büyük başlıktaki simgelerin daha rahat görünmesi için bunların renk şemasını değiştirmeniz gerekebilir. Büyük başlık simgelerinin açık sürümünün mü, yoksa koyu sürümünün mü görüntüleneceğini belirleyin.<br><br>Ancak, simgelerin rengini değiştirmek için özel bir tema kullanmanız önerilir.",
		admin_desktop_login_page_content: "Oturum açma sayfası içeriği:",
		admin_desktop_login_page_content_hover: "Oturum açma sayfasında ek bilgi (sistem kesintileriyle ilgili bilgi ya da kullanıcıların kullanıcı adları ve parolalar ila ilgili bilgileri nerede bulacakları gibi) görüntülenmesini istiyorsanız, görüntülenmesini istediğiniz içeriğin URL adresini belirtebilirsiniz.",
		admin_desktop_login_page_content_url_hover: "Oturum açma sayfası içeriğinin URL adresini girin. İçerik web istemcisiyle aynı web uygulama sunucusundaysa, göreli bir URL adresi girin, örneğin: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Parola kuralları:",
		admin_desktop_password_rules_hover: "Kullanıcılara parola yaratılmasıyla ilgili kurallar (yasaklanan karakterler ya da karakter sayısı üst sınırı gibi) sağlamak istiyorsanız, parola kurallarınızı içeren sayfanın URL adresini belirtebilirsiniz.",
		admin_desktop_password_rules_url_hover: "Parola kuralları içeriğinin URL adresini girin. İçerik web istemcisiyle aynı web uygulama sunucusundaysa, göreli bir URL adresi girin, örneğin: /mycustomizations/passwords.html",
		admin_desktop_help_url: "Son kullanıcı yardımı URL adresi:",
		admin_desktop_help_url_hover: "IBM Content Navigator ile verilen yardımı kullanabilir ya da şu eylemlerden birini gerçekleştirerek, kullanıcıları özel bir yardım içeriğine yönlendirebilirsiniz:<br><br><ul><li>Özel bir yardım sistemine yönlendirme</li><li>Yardımı, IBM Content Navigator ile konuşlandırılan IBM Knowledge Center eşgörünümüne ekleme</li></ul>",
		admin_desktop_help_url_url_hover: "Özel yardım sisteminizin URL adresini girin. IBM Content Navigator, belirttiğiniz URL adresinin sonuna index.jsp?content=/com.ibm.usingeuc.doc/ dizgisi ve bir dosya adı ekler.  Arabirimdeki \"Daha fazla bilgi\" bağlantılarının çalışması için, yardım sisteminin bütünleşik son kullanıcı yardımıyla aynı dosya adlarını kullanması gerekir. ",
		admin_desktop_deprecated_appearance_title: "Kullanımdan Kaldırılan Ayarlar",
		admin_desktop_deprecated_appearance_instructions: "Özel tema kullanıyorsanız, özel tema bu ayarları geçersiz kılar. Bu ayarları, bu kısımdaki ayarlardan daha ayrıntılı bir stil sağlayan özel temaya geçirmelisiniz. Özel tema birden çok masaüstü tarafından da kullanılabilir.",

		admin_desktop_plugins_title: "Bu masaüstü için eklentileri etkinleştir ya da geçersiz kıl",
		admin_desktop_plugins_enable_all_plugins: "Konuşlandırılan tüm eklentileri bu masaüstüyle kullanılmak üzere etkinleştir",
		admin_desktop_plugins_select_plugins: "Bu masaüstüyle kullanılmak üzere etkinleştirilecek konuşlandırılan eklentileri seç",
		admin_desktop_plugins_select_plugin: "Eklenti Seç",

		admin_desktop_layout_features: "Görüntülenen özellikler:",
		admin_desktop_layout_features_hover: "Kullanıcıların bu masaüstünden erişmesini istediğiniz özellikleri seçin. Özellikler, listelendikleri sırayla görüntülenir.<br><br>Bir özelliği seçtiğinizde, masaüstü içinde özelliğin bazı davranışlarını (özellik için seçilen varsayılan havuz gibi) özelleştirebilirsiniz.",
		admin_desktop_layout_default_repository: "Varsayılan havuz:",
		admin_desktop_layout_default_repository_layout_hover: "Kullanıcılar bu özelliği açtığında varsayılan olarak hangi havuzun seçili olacağını belirtin.",
		admin_desktop_layout_document_thumbnails: "Belge küçük resimleri:",
		admin_desktop_layout_document_thumbnails_hover: "Belge Bilgileri bölmesindeki belgeler için küçük resimler görüntülenip görüntülenmeyeceğini belirleyin.<br><br>Küçük resimlerin görüntülenmesi, web istemcisinin performansını yavaşlatabilir.",
		admin_desktop_layout_show_filmstrip_view: "Film şeridi görünümü:",
		admin_desktop_layout_show_filmstrip_view_hover: "Kullanıcıların içerik listesi görünümünden film şeridi görünümüne geçmesine izin verilip verilmeyeceğini belirleyin.<br><br>Film şeridi görünümü, kullanıcının seçtiği her belgeye ilişkin bir önizleme oluşturur. Ancak, film şeridi görünümünün kullanılması web istemcisinin performansını yavaşlatabilir. Buna ek olarak, belge önizlemelerini görmek için HTML dönüştürme görüntüleyicisini yapılandırmanız gerekir.",
		admin_enabled: "Etkinleştir",
		admin_disabled: "Geçersiz Kıl",
		admin_include: "Ekle",
		admin_exclude: "Kapsam Dışı Bırak",
		admin_layout_teamspaces_default_repository: "Ekip Alanları:",
		admin_layout_entry_templates_default_repository: "Giriş Şablonları:",
		admin_layout_other_features_default_repository: "Ara ve Göz At:",
		admin_layout_work_default_repository: "Çalışma:",
		admin_layout_default_feature: "Varsayılan özellik:",
		admin_default_category_placeholder: "Bir özellik seçin",
		admin_layout_default_feature_hover: "Kullanıcılar bu masaüstünde oturum açtığında hangi özelliğin görüntüleneceğini belirtin.",
		admin_layout_default_feature_warning: "Varsayılan özelliğin değiştirilmesi, uygulamayı yüklemek içi gereken süreyi etkileyebilir.",
		admin_layout_feature_list_header: "Özellik",
		admin_layout_show_statusbar: "Durum çubuğu:",
		admin_layout_show_statusbar_hover: "Masaüstünün alt kısmında durum çubuğunun görüntülenip görüntülenmeyeceğini belirleyin.<br><br>Durum çubuğunu gizlerseniz, kullanıcılar hata dışındaki olaylarla ilgili bilgileri göremez; örneğin:<ul><li>Belge havuza eklendi.</li><li>Arama 59 belge döndürdü.</li></ul>",
		admin_layout_show_magazineview: "Tanımlı görünüm:",
		admin_layout_show_magazineview_hover: "Kullanıcıların içerik listesi görünümünden tanımlı görünüme geçmesine izin verilip verilmeyeceğini belirleyin.<br><br>Tanımlı görünüm, içerik listesindeki her girişin yüksekliğini artırarak, içerik listesinde aynı anda görüntülenebilecek öğe sayısını azaltır.",
		admin_layout_show_detailsview: "Ayrıntılar görünümü:",
		admin_layout_show_detailsview_hover: "Kullanıcıların içerik listesi görünümünden ayrıntılar görünümüne geçmesine izin verilip verilmeyeceğini belirleyin.<br><br>Ayrıntılar görünümü, içerik listesinde görünen satır sayısını en üst düzeye çıkarır.",
		admin_feature_config_docinfopane_label: "Belge bilgileri bölmesi:",
		admin_feature_config_docinfopane_hoverhelp: "Kullanıcıların bu özellikteki belge bilgileri bölmesine erişip erişemeyeceğini belirleyin.",
		admin_feature_config_docinfopane_default_label: "Varsayılan davranış:",
		admin_feature_config_docinfopane_expanded: "Genişletilmiş",
		admin_feature_config_docinfopane_collapsed: "Daraltılmış",
		admin_feature_config_docinfopane_expand_on_select: "Öğe seçildiğinde genişlet",
		admin_layout_features_title: "Masaüstü Özellikleri",
		admin_layout_features_instructions: "Kullanıcıların bu masaüstünden hangi özelliklere erişebileceğini belirtin.  Buna ek olarak, masaüstüne eklenen her özelliğin davranışını özelleştirebilirsiniz.",
		admin_layout_components_title: "Ek Masaüstü Bileşenleri",
		admin_layout_components_instructions: "Daha yalın bir arabirim istiyorsanız ya da web istemcisinin performasını yükseltmek istiyorsanız, masaüstünün bazı bileşenlerini geçersiz kılabilirsiniz.",
		admin_layout_featureconfig_instructions: "Yapılandırılacak özelliği seçin",
		admin_layout_featureconfig_no_configuration: "Kullanılabilecek herhangi bir özellik yapılandırması yok.",
		admin_layout_featureconfig_label: "${0} özelliğine ilişkin yapılandırma",
		admin_layout_featureconfig_title: "Özellik yapılandırması",
		admin_layout_featureconfig_taskManagerURL: "Bu özelliği kullanmak için, IBM Content Navigator olanağını Task Manager hizmetine bağlanacak şekilde etkinleştirmeli ve yapılandırmalısınız. Bu yönetim aracının <b>Ayarlar</b> kısmında Task Manager hizmetini etkinleştirin.",
		admin_feature_config_show_my_checkouts_label: "Dışarı Aldıklarım bölmesi:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Dışarı Aldıklarım bölmesi, kullanıcıların belirli bir havuzdan dışarı aldıkları tüm öğeler için arama yapmalarına olanak sağlar. Kullanıcıların Ana Sayfa özelliğinden Dışarı Aldıklarım bölmesine erişip erişemeyeceğini belirleyin.<br/><br/><b>Kısıtlama:</b> Bu özellik, bu masaüstüyle ilişkilendirilmiş en az bir IBM Content Manager, IBM FileNet P8 ya da OASIS CMIS havuzunuzun olmasını gerektirir.",

		admin_feature_config_default_repository_icon_text: "Varsayılan havuz",
		admin_show: "Göster",
		admin_hide: "Gizle",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Yönetim özelliğini Yönetim Masaüstü'nden kaldıramazsınız.",
		admin_warning_label: "Uyarı:",
		admin_layout_show_globaltoolbar: "Genel araç çubuğu:",
		admin_layout_show_globaltoolbar_hover: "Masaüstünün üst kısmındaki büyük başlıkta araç çubuğunun görüntülenip görüntülenmeyeceğini belirleyin.<br><br>Genel araç çubuğu kullanıcının havuza belge, klasör ve tutma eklemek için kullanabileceği eylemleri içerir. Kullanılabilecek eylemler, kullanıcının bağlandığı havuza bağlıdır.",
		admin_interface_text_name_label: "Etiket Tipi",

		admin_interface_text_label_description: "Web istemcisinin bazı bölgelerinde görüntülenen metni özelleştirebilirsiniz. Etiketler, yapılandırmanızdaki tüm havuzlar ve masaüstleri için görüntülenir. Yürürlükteki Etiket alanında, arabirimde görmek istediğiniz metni girin.<br><br><b>Önemli:</b> Etiketlerde yaptığınız değişiklikler yönetim aracında görüntülenmez.",
		admin_interface_text_label_action: "Eylem Etiketleri",
		admin_interface_text_label_action_description: "Eylem etiketleri, web istemcisinin genelinde düğmelerde ve menülerde görüntülenir. Her havuz tipi için farklı eylem etiketleri tanımlayabilirsiniz.",
		admin_interface_text_label_application: "Uygulama Etiketleri",
		admin_interface_text_label_application_description: "Uygulama etiketleri web istemcisinin genelinde görüntülenir.",
		admin_interface_text_label_system: "Sistem Özelliği Etiketleri",
		admin_interface_text_label_system_description: "Görüntülenen sistem etiketleri havuza göre değişir. Havuzlarınızdaki belgeler ve klasörlerle ilişkilendirilmiş sistem özellikleri için görüntülenen etiketleri özelleştirebilirsiniz.",
		admin_interface_text_label_desktop: "Masaüstü Etiketleri",
		admin_interface_text_label_desktop_description: "Bir uygulamanın bir masaüstündeki adını özelleştirdiyseniz, o adı İngilizce dışındaki dillerde de özelleştirebilirsiniz. Bir masaüstündeki IBM FileNet P8 uygulama alanlarının adlarını da özelleştirebilirsiniz.",

		admin_interface_text_system_label: "Sistem Etiketi",
		admin_interface_text_current_label: "Yürürlükteki Etiket",
		admin_interface_text_default_label_heading: "Varsayılan Etiket",
		admin_interface_text_default_label: "Varsayılan etiket:",
		admin_interface_text_displayed_in_label: "Görüntülendiği Öğeler",
		admin_interface_text_displayed_in_document_folder: "Belgeler ve klasörler",
		admin_interface_text_displayed_in_document: "Belgeler",
		admin_interface_text_displayed_in_folder: "Klasörler",
		admin_interface_text_displayed_in_admin_application_space: "Uygulama alanı etiketi",
		admin_interface_text_displayed_in_desktop: "Mobil için özellik etiketi",
		admin_interface_text_displayed_in_admin_application_name: "Uygulama Adı",

		admin_new_desktop: "Yeni Masaüstü",
		admin_new_repository: "Yeni Havuz",
		admin_new_menu: "Yeni Menü",
		admin_new_viewer_mapping: "Yeni Görüntüleyici Eşlemesi",
		admin_new_mapping_label: "Yeni Eşleme",
		admin_new_icon_mapping: "Yeni Simge Eşlemesi",
		admin_viewer_mapping_list_instructions: "Web istemcisinin farklı içerik tiplerini görüntülemek için kullanacağı görüntüleyicileri yapılandırabilirsiniz. Görüntüleyici eşlemesi, kullanmak istediğiniz her görüntüleyiciyle hangi MIME tiplerinin ilişkilendirildiğini tanımlar. Farklı masaüstleri için farklı görüntüleyiciler kullanmak istiyorsanız, birden çok görüntüleyici eşlemesi yaratabilirsiniz.",
		admin_viewer_mapping_instructions: "Dosyaları açmak için kullanmak istediğiniz görüntüleyicileri belirtin. Özel bir görüntüleyici kullanmak istiyorsanız, görüntüleyiciyi görüntüleyici eşlemesine eklemeden önce bir eklenti olarak bütünleştirmeniz gerekir.<br><br><b>Önemli:</b> Kullanıcı bir belgeyi açtığında, web istemcisi, kullanıcının çalıştırdığı işletim sistemine ve bağlı olduğu havuza dayalı olarak, belgeyi açabilecek ilk görüntüleyiciyi bulmak için görüntüleyici eşlemeleri listesinde arama yapar. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Yeni Eklenti",
		admin_menu_list_instructions: "Kullanıcıların hangi eylemleri kullanabileceğini denetlemek için, özelleştirilmiş araç çubukları ve bağlam menüleri yaratabilirsiniz. Varsayılan menüleri düzenleyemezsiniz; ancak, kullanılabilecek eylemleri kısıtlamak ya da eklentilerde tanımlı olan özel eylemleri eklemek için, var olan menülerin kopyalarını yaratabilirsiniz.<br><br>Yeni bir menü tipi yaratmak istiyorsanız, menüyü bir eklentide tanımlamalısınız.",
		admin_menu_id_hover: "Tanıtıcı benzersiz olmalıdır ve menüyü kaydettikten sonra tanıtıcıyı değiştiremezsiniz.<br><br>Tanıtıcı yalnızca alfasayısal karakterler içerebilir ve büyük ve küçük harfe duyarlıdır.",
		admin_menu_id_disabled_hover: "Menü tanıtıcısı değiştirilemez. Farklı bir tanıtıcı kullanmak istiyorsanız, yeni bir menü yaratmalısınız.",
		admin_menu_default_instructions: "Bu menüyü düzenleyemezsiniz; varsayılan bir menü. Bu menüyü düzenlemek istiyorsanız kopyasını yaratın.",
		admin_menu_toolbar_instructions: "Bu araç çubuğu için kullanılabilecek eylemleri kısıtlayabilir ya da bir eklentide tanımlanan özel eylemler ekleyebilirsiniz. Ayrıca, araç çubuğuna ayırıcılar ekleyerek eylemleri düzenleyebilirsiniz.",
		admin_menu_toolbar_custom_instructions: "Bu araç çubuğu bir eklentiyle tanımlandı. Bu araç çubuğunu düzenlemek istiyorsanız, eklentiyi güncellemeniz ya da araç çubuğunun bir kopyasını yaratmanız gerekir.",
		admin_menu_context_menu_instructions: "Bu bağlam menüsü için kullanılabilecek eylemleri kısıtlayabilir ya da bir eklentide tanımlanan özel eylemler ekleyebilirsiniz. Ayrıca, bağlam menüsüne ayırıcılar ve alt menüler ekleyerek eylemleri düzenleyebilirsiniz.",
		admin_menu_context_menu_custom_instructions: "Bu bağlam menüsü bir eklentiyle tanımlandı. Bu bağlam menüsünü düzenlemek istiyorsanız, eklentiyi güncellemeniz ya da bağlam menüsünün bir kopyasını yaratmanız gerekir.",
		admin_desktop_list_instructions: "Farklı kullanıcılara gerek duydukları içeriğe erişim vermek için birden çok masaüstü yaratabilirsiniz. Örneğin, kullanıcıların yalnızca içerik aramalarını sağlayacak bir masaüstü ya da kullanıcılara tek bir havuz için erişim veren bir masaüstü yaratabilirsiniz. ",
		admin_plugin_updated: "Seçilen eklentinin yapılandırması değiştirildi. Yaptığınız değişikliklerin yürürlüğe girmesi için tarayıcınızı yenilemelisiniz.",
		admin_repository_ci_heading: "Content Integrator havuzu: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager havuzu: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager havuzu: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand havuzu: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) havuzu: <b>${0}</b>",
		admin_repository_box_heading: "Box havuzu: <b>${0}</b>",
		admin_repository_generic_heading: "Havuz: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Seçilen masaüstlerini silmek istiyor musunuz?\n${0} masaüstü seçildi.",
		admin_delete_confirmation_menus: "Seçilen menüleri silmek istiyor musunuz?\n${0} menü seçildi.",
		admin_delete_confirmation_repositories: "Seçilen havuzları silmek istiyor musunuz?\n${0} havuz seçildi.",
		admin_delete_confirmation_viewer_mappings: "Seçilen görüntüleyici eşlemelerini silmek istiyor musunuz?  ${0} eşleme seçildi.",
		admin_delete_confirmation_icon_mappings: "Seçilen simge yapılandırmalarını silmek istiyor musunuz?\n${0} simge yapılandırması seçildi.",
		admin_delete_confirmation_plugins: "Seçilen eklentileri silmek istiyor musunuz?\n${0} eklenti seçildi.",
		admin_delete_confirmation: "Seçilen öğeleri silmek istiyor musunuz?\n${0} öğe seçildi.",

		admin_viewer_mapping_id_hover: "Tanıtıcı benzersiz olmalıdır ve görüntüleyici eşlemesini kaydettikten sonra tanıtıcıyı değiştiremezsiniz.<br><br>Tanıtıcı yalnızca alfasayısal karakterler içerebilir ve büyük ve küçük harfe duyarlıdır.",
		admin_viewer_mapping_id_disabled_hover: "Görüntüleyici eşlemesi tanıtıcısı değiştirilemez. Farklı bir tanıtıcı kullanmak istiyorsanız, yeni bir görüntüleyici eşlemesi yaratmalısınız.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Varsayılan masaüstü silinemez.",

		admin_desktop_heading: "Masaüstü: <b>${0}</b>",
		admin_menu_toolbar_heading: "Araç Çubuğu: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Özel Araç Çubuğu: <b>${0}</b>",
		admin_menu_context_menu_heading: "Bağlam Menüsü: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Özel Bağlam Menüsü: <b>${0}</b>",
		admin_plugin_heading: "Eklenti: <b>${0}</b>",
		admin_plugin_instructions: "Eklenti bir JAR dosyası ya da derlenmiş sınıf dosyası olabilir.<br/><br/><b>Önemli:</b> IBM Content Navigator web uygulama sunucusu eklenti dosyasına yerel dosya sisteminden ya da bir URL ile erişebilmelidir.",
		admin_plugin_list_instructions: "Web istemcisine ilişkin eklentileri kaydettirmek için yönetim aracını kullanabilirsiniz. Bir eklenti ek yapılandırma gerektiriyorsa, eklentiyi kaydettirmenizden sonra yapılandırma parametreleri görüntülenir.<br /><br /><b>Önemli:</b> Yönetim aracının başka bir yerinde gönderme yapılan bir eklentiyi (örneğin, bir menü) düzenlerseniz, eklentinin davranışında sorunlarla karşılaşabilirsiniz. Ayrıca, eklentiler listelendikleri sırayla çağrılır. Bir eklentinin başka bir eklentiden önce çalıştırılması gerekiyorsa, eklentilerin gereken sırayla listelenmesine dikkat edin.",
		admin_plugin_cannot_delete: "Seçilen eklentiler silinemiyor, o eklentilere bağımlı bazı eklentiler var.<br/>Seçilen eklentiler: ${0}<br/>Bağımlı eklentiler: ${1}",
		admin_plugin_cannot_disable: "Seçilen eklentiler geçersiz kılınamıyor bırakılamıyor, o eklentilere bağımlı bazı eklentiler var.<br/>Seçilen eklentiler: ${0}<br/>Bağımlı eklentiler: ${1}",
		admin_plugin_cannot_add: "Bağımlı olduğu bazı eklentiler eksik ya da geçersiz kılınmış olduğundan eklenti eklenemiyor. Eksik ya da geçersiz kılınmış eklentiler: ${0}",
		admin_plugin_cannot_enable: "Bağımlı oldukları bazı eklentiler eksik ya da geçersiz kılınmış olduğundan, seçilen eklentiler eklenemiyor.<br/>Seçilen eklentiler: ${0}<br/>Eksik ya da geçersiz kılınmış eklentiler: ${1}",
		admin_plugin_save_order: "Sırayı Kaydet",
		admin_plugin_load: "Yükle",
		admin_plugin_load_hover: "Eklentinin URL adresini belirtin",
		admin_plugin_file_hover: "Eklenti JAR dosyası yerel dosya sisteminizdeyse, eklenti dosyasının tam olarak nitelenmiş yolunu ya da URL adresini girebilirsiniz. Eklenti JAR dosyası uzak bir sunucudaysa, eklenti dosyasının URL adresini girmelisiniz.",
		admin_plugin_classfolderpath_hover: "Derlenmiş sınıf dosyası IBM Content Navigator web uygulama sunucusunda olmalıdır.<br/><br/>Eklenti sınıflarının derlendiği ve oluşturulduğu klasörün tam olarak nitelenmiş yolunu girin.<br/><br/>Yol, eklenti sınıfının paket adını içermemelidir. Örneğin, örnek eklenti sınıfının Windows sistemindeki varsayılan yolu şöyledir: C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Yüklenmesi ve eklenti sınıfı olarak çağrılması gereken, sınıf dosyasındaki Java sınıfının tam adını girin.<br/>Örneğin, örnek eklentinin sınıf adı şöyledir: com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Eklenti JAR dosyası belirtilen URL adresinde bulunamadı. JAR dosyasının web uygulama sunucusunda bulunduğunu ve URL adresi ile dosya adının doğru olduğunu doğrulayın.",
		admin_plugin_for_repository_not_loaded: "Bu havuzu düzenleyemezsiniz. Bu havuz tipini tanımlayan ve destekleyen eklenti yüklenmedi. Eklentiler sekmesinde eklentiyi düzenleyerek, doğru olarak yapılandırıldığını ve yüklendiğini doğrulayın.",
		admin_plugin_repository_types: "Havuz tipleri:",
		admin_plugin_viewers: "Görüntüleyiciler:",
		admin_plugin_features: "Özellikler:",
		admin_plugin_layouts: "Yerleşim düzenleri:",
		admin_plugin_not_available: "Yok",
		admin_plugin_config_params: "Yapılandırma Parametreleri:",
		admin_viewer_def_heading: "Görüntüleyici Eşlemesi: <b>${0}</b>",
		admin_users_and_groups: "Kullanıcılar ve Gruplar",
		admin_general: "Genel",
		admin_logging: "Günlüğe Kaydetme",
		admin_authentication: "Kimlik Doğrulaması",		
		admin_rolebase_role: "Rol:",
		admin_settings_logging_instructions: "Web istemcisiyle ilgili sorunları gidermek için günlüğe kaydetmeyi kullanabilirsiniz. Bir sorunun belirli bir Java sınıfında ya da belirli bir kullanıcı için oluştuğunu biliyorsanız, günlüğe kaydetmeyi daraltabilirsiniz. Hata bilgileri web uygulama sunucunuzun hata günlüklerine yazılır.",
		admin_settings_logging_instructions2: "<b>Hata Ayıklama Amaçlı Günlüğe Kaydetme Ayarları</b><br />Bir sorunun belirli bir ana makine ya da kullanıcı için oluştuğunu biliyorsanız, hata ayıklama amaçlı günlüğe kaydetmenin hedefi olarak o makineyi ya da kullanıcıyı belirtebilirsiniz. Hata ayıklama bilgilerini üretim ortamında sisteminizin performansını anlamlı ölçüde olumsuz etkilemeden yakalayabilirsiniz.<br /><br /><b>Önemli:</b> Bir istemci ana makinesi ya da kullanıcı belirtseniz, bu ayalr diğer günlüğe kaydetme ayarlarını geçersiz kılar. Gerek duyduğunuz bilgileri yakaladıktan sonra, bu seçeneği <b>Yok</b> değerine ayarlayarak, ortamınız için standart günlüğe kaydetmeyi sürdürebilirsiniz.",
		admin_settings_export_config_hover: "Yürürlükteki sistem yapılandırması bilgilerini IBM Support Assistant Data Collector ile kullanılmak üzere bir dosyaya aktarır. Dosya, user.home Java sistem özelliğiyle tanımlanan konuma kaydedilir.",
		admin_logging_level: "Uygulama düzeyinde günlüğe kaydetme:",
		admin_logging_level_hover: "Sunucunuzda saklanacak belge miktarını günlüğe kaydetme düzeyleri belirler. <b>Hata</b> seçilirse, en az miktarda günlüğe kaydetme bilgisi yakalanır. <b>Hata Ayıklama</b> seçilirse, en çok miktarda bilgi yakalanır.<br /><br />IBM Software Support olanağı tarafından istenmedikçe, üretim ortamında <b>Hata Ayıklama</b> seçeneğini kullanmayın.",
		admin_logging_level_0: "Kaydetme yok",
		admin_logging_level_1: "Hata",
		admin_logging_level_2: "Uyarı",
		admin_logging_level_3: "Bilgi",
		admin_logging_level_4: "Hata Ayıklama",
		admin_logging_classes: "Java sınıfı düzeyinde günlüğe kaydetme:",
		admin_logging_classes_hover: "Varsayılan olarak, web uygulama sunucusu hata günlükleri tüm Java sınıflarını ve paketlerini içerir. Ancak, günlüğe kaydetmenin hangi sınıfları ve paketleri içereceğini (ya da dışlayacağını) belirleyebilirsiniz. İçerilecek ya da dışlanacak sınıfları saptamak için web uygulama sunucusunu günlüklerini kullanabilirsiniz.<br><br>Bir sorunun belirli bir sınıfta oluştuğunu biliyorsanız, günlük dosyalarının o sınıfı içermesini belirtebilirsiniz. Hata günlüklerinize bir sınıfı eklediğinizde, diğer sınıfların tümü dışlanır.<br><br>Bir sorunun bir sınıfta oluşmadığını biliyor ve günlük dosyası büyüklüğünü azaltmak istiyorsanız, günlük dosyalarının o sınıfı dışlamasını sağlayabilirsiniz.",
		admin_logging_classes_include: "Ekle",
		admin_logging_classes_include_all: "Tüm sınıflar",
		admin_logging_classes_include_specified: "Belirli sınıflar",
		admin_logging_classes_include_specified_msg: "İçerilecek sınıfları seçin.",
		admin_logging_classes_exclude: "Kapsam Dışı Bırak",
		admin_logging_classes_exclude_none: "Yok",
		admin_logging_classes_exclude_specified: "Belirli sınıflar",
		admin_logging_classes_exclude_specified_msg: "Dışlanacak sınıfları seçin.",
		admin_logging_debug: "Bu öğe için hata ayıklama amaçlı günlüğe kaydetme:",
		admin_logging_debug_hover: "<b>Önemli:</b> Bir istemci ana makinesi IP adresi ya da kullanıcı belirtmeden önce, web uygulama sunucusu günlük dosyalarını gözden geçirin. Belirteceğiniz değer, günlük dosyasında görüntülenen değerle eşleşmelidir.",
		admin_logging_debug_none: "Yok (varsayılan)",
		admin_logging_debug_host: "İstemci ana makineleri (IP adresleri)",
		admin_logging_debug_host_msg: "Hata ayıklama bilgilerinin günlüğe kaydedilmesini istediğiniz bir ya da daha fazla istemci makinesinin IP adresini belirtin. IP adreslerini ayırmak için virgül kullanın.<br /><br /><b>Önemli:</b> Bir IP adresi belirtmeden önce, web uygulama sunucusu günlük dosyalarını gözden geçirin. Belirteceğiniz değer, günlük dosyasında görüntülenen değerle eşleşmelidir.",
		admin_logging_debug_user: "Kullanıcılar",
		admin_logging_debug_user_msg: "Hata ayıklama bilgilerinin günlüğe kaydedilmesini istediğiniz bir ya da daha fazla kullanıcının kullanıcı adını belirtin. Kullanıcı adlarını ayırmak için virgül kullanın.<br /><br /><b>Önemli:</b> Bir kullanıcı adı belirtmeden önce, web uygulama sunucusu günlük dosyalarını gözden geçirin. Belirteceğiniz değer, günlük dosyasında görüntülenen değerle eşleşmelidir.",

		admin_office_settings_logging_instructions: "IBM Content Navigator for Microsoft Office ile ilgili sorunları gidermek için günlüğe kaydetmeyi kullanabilirsiniz. Bir sorunun belirli bir sınıfta ya da belirli bir kullanıcı için oluştuğunu biliyorsanız, günlüğe kaydetmeyi daraltabilirsiniz. Hata bilgileri, IBM Content Navigator for Microsoft Office istemci ana makinelerindeki uygulama günlüklerine yazılır. ",
		admin_office_settings_logging_instructions2: "<b>Hata Ayıklama Amaçlı Günlüğe Kaydetme Ayarları</b><br />Bir sorunun belirli bir istemci ana makinesi ya da IBM Content Navigator for Microsoft Office kullanıcısı için oluştuğunu biliyorsanız, hata ayıklama amaçlı günlüğe kaydetmenin hedefi olarak o makineyi ya da kullanıcıyı belirtebilirsiniz. Hata ayıklama bilgilerini üretim ortamında sisteminizin performansını anlamlı ölçüde olumsuz etkilemeden yakalayabilirsiniz. <br /><br /><b>Önemli:</b> Bir istemci ana makinesi ya da kullanıcı belirtseniz, bu ayalr diğer günlüğe kaydetme ayarlarını geçersiz kılar. Gerek duyduğunuz bilgileri yakaladıktan sonra, bu seçeneği <b>Yok</b> değerine ayarlayarak, IBM Content Navigator for Microsoft Office ortamınız için standart günlüğe kaydetmeyi sürdürebilirsiniz. ",
		admin_office_logging_debug_hover: "<b>Önemli:</b> Bir istemci ana makinesi IP adresi ya da kullanıcı belirtmeden önce, istemci makinesi günlük dosyalarını gözden geçirin. Belirteceğiniz değer, günlük dosyasında görüntülenen değerle eşleşmelidir. ",
		admin_office_logging: "Office İçin Günlüğe Kaydetme",
		admin_office_logging_classes: "Sınıf düzeyinde günlüğe kaydetme:",
		admin_office_logging_classes_hover: "Varsayılan olarak, IBM Content Navigator for Microsoft Office hata günlükleri tüm sınıfları ve paketleri içerir. Ancak, günlüğe kaydetmenin hangi sınıfları ve paketleri içereceğini (ya da dışlayacağını) belirleyebilirsiniz. İçerilecek ya da dışlanacak sınıfları saptamak için istemci makinesi günlüklerini kullanabilirsiniz.<br /><br />Bir sorunun belirli bir sınıfta oluştuğunu biliyorsanız, günlük dosyalarının o sınıfı içermesini belirtebilirsiniz. Hata günlüklerinize bir sınıfı eklediğinizde, diğer sınıfların tümü dışlanır. <br /><br />Bir sorunun bir sınıfta oluşmadığını biliyor ve günlük dosyası büyüklüğünü azaltmak istiyorsanız, günlük dosyalarının o sınıfı dışlamasını sağlayabilirsiniz. ",
		admin_office_logging_debug_hover: "<b>Önemli:</b> Bir istemci ana makinesi IP adresi ya da kullanıcı belirtmeden önce, istemci makinesi günlük dosyalarını gözden geçirin. Belirteceğiniz değer, günlük dosyasında görüntülenen değerle eşleşmelidir.",
		admin_office_logging_additional_settings: "Ek ayarlar:",
		admin_office_logging_additional_settings_hover: "Ek ayarları belirtin",
		admin_office_logging_file_size: "Günlük dosyası büyüklüğü",
		admin_office_logging_file_size_hover: "IBM Content Navigator for Microsoft Office'in yeni günlük dosyası yaratırken kullanacağı büyüklüğü belirtin. Bir günlük dosyası büyüklük üst sınırına ulaşınca, yürürlükteki günlük, tarihi (biçimi YYYYAAgg) içerecek şekilde yeniden adlandırılır ve yeni bir günlük dosyası yaratılır. ",
		admin_office_logging_show_stacktrace_on_dialogs: "İletişim kutularında yığın izleme bilgilerini göster",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "İsteğe bağlı olarak, sorunların çözülmesini kolaylaştırmak için ileti iletişim kutularında yığın izleme bilgilerinin gösterilmesini sağlayabilirsiniz. Bu seçeneği etkinleştirmeseniz de, IBM Content Navigator for Microsoft Office hata günlükleri ayrıntılı yığın izleme bilgilerini her zaman içerir. ",

		admin_icon_state_twisty: "Durum Simgeleri",
		admin_icon_state_icon: "Durum Simgesi",
		admin_icon_state: "Durum",
		state_contains_label: "Bunu içeren durum:",
		admin_icon_state_instructions: "Havuzlarınızdaki belgelerin, klasörlerin ve iş öğelerinin yanında görüntülenen simgeleri özelleştirebilirsiniz.<br><br><b>İpucu:</b> Ortamınızdaki her havuz için durum simgesi görüntülenip görüntülenmeyeceğini belirtebilirsiniz.",
		admin_icon_state_dialog_title: "Durum Simgesi Eşlemesi",
		admin_icon_state_dialog_instructions: "Seçilen durumu, web istemcisiyle verilen önceden tanımlanmış bir simgeyle ya da özel bir simgeyle eşleyebilirsiniz.",

		admin_icon_mapping_twisty: "MIME Tipi Simgeleri",
		admin_icon_mapping_dialog_title: "Simge Eşlemesi",
		admin_icon_mapping: "Simge Eşlemesi",
		admin_icon_mapping_instructions: "Bir MIME tipi listesini, web istemcisiyle verilen önceden tanımlanmış bir simgeyle ya da özel bir simgeyle eşleyebilirsiniz.",
		admin_icon_mapping_list_instructions: "Havuzlarınızda saklanan farklı MIME tipleri için görüntülenen simgeleri özelleştirebilirsiniz. Web istemcisi bu simgeleri listelendikleri sırayla kullanır. Bir MIME tipi bir kereden fazla listeleniyorsa, o MIME tipiyle ilişkilendirilmiş ilk simge kullanılır.",
		admin_icon_mapping_icon_label: "Hangi simgeyi kullanmak istiyorsunuz?",
		admin_icon_mapping_file_name: "Özel simge:",
		admin_icon_mapping_file_name_heading: "Özel Simge",
		admin_icon_mapping_file_name_placeholder: "Simgenin URL adresini belirtin",
		admin_icon_mapping_file_name_hover: "Simgenin URL adresini girin. Simge web istemcisiyle aynı web uygulama sunucusundaysa, göreli bir URL adresi girin. Örnek: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Önceden tanımlanmış simge:",
		admin_icon_mapping_class_name_heading: "Önceden Tanımlanmış Simge",
		admin_icon_mapping_class_name_hover: "Web istemcisiyle verilen bir simgeyi seçin",
		admin_icon_mapping_class_name_placeholder: "Simge seçin",

		admin_p8_instructions: "Bu bilgiler web istemcisi için yapılandırılan tüm FileNet Content Manager havuzları tarafından paylaşılır.",
		admin_p8_collaboration_config: "İsteğe Bağlı FileNet Collaboration Services Yapılandırması",
		admin_p8_collaboration_config_instructions: "FileNet Collaboration Services olanağını IBM FileNet P8 ortamıza göre ayarlamak istiyorsanız bu parametreleri yapılandırabilirsiniz.",
		admin_p8_use_url_incoming: "Yanıt URL'leri oluşturmak için gelen isteklerdeki URL'yi kullan:",
		admin_p8_use_url_incoming_hover: "Çoğu FileNet Collaboration Services ortamında, bir yanıtta URL adresi oluşturmak için gelen istekteki URL adresini kullanabilirsiniz. Ortamınızda şu durumlardan biri geçerli değilse <b>Evet</b>'i seçin:<ul><li>İstemci uygulamalarını FileNet Collaboration Services olanağına belirli bir URL ile erişmeye zorlamak istiyorsunuz.<li>Yetkili sunucu ayarlarınız FileNet Collaboration Services olanağının geçersiz URL adresleri üretmesine neden oluyor.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL adresi:",
		admin_p8_use_url_incoming_http_hover: "Şu biçimi kullanarak, istemci uygulamalarının FileNet Collaboration Services olanağına erişebileceği URL adresini belirtin: http://FNCSsunucusu:kapı_numarası.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL adresi:",
		admin_p8_use_url_incoming_https_hover: "FileNet Collaboration Services SSL için yapılandırıldıysa, şu biçimi kullanarak, istemci uygulamalarının FileNet Collaboration Services olanağına erişebileceği HTTPS URL adresini belirtin: https://FNCSsunucusu:kapı_numarası",
		admin_p8_hide_email_addresses: "Sunucu yanıtlarında kullanıcı eposta adreslerini gizle:",
		admin_p8_hide_email_addresses_hover: "Gizlilik ilkelerine uymanız gerekiyorsa, sunucu yanıtlarında kullanıcıların eposta adreslerini gizleyebilirsiniz. Örneğin, sunucu bir belge listesi ve belgeleri yaratan ya da düzenleyen kullanıcılarla ilgili bilgi döndürüyorsa, kullanıcıların eposta adresleri listesini gizleyebilirsiniz.",

		admin_p8_mask_user_ids: "Günlük dosyalarında kullanıcı kimliklerini maskele:",
		admin_p8_mask_user_ids_hover: "Gizlilik ilkelerine uymanız gerekiyorsa, FileNet Collaboration Services günlük dosyalarında kullanıcı adlarını gizleyebilirsiniz. Bu seçeneği etkinleştirdiğinizde, kullanıcı adlarının yerine karma değerler konur. Bu yolla, kullanıcılarınızın adlarını ya da etkinlik kayıtlarını riske atmadan, günlük dosyalarını dış şirketlere (IBM gibi) gönderebilirsiniz.",

		admin_p8_soft_delete: "Silinen dosyaları kurtarma kabına taşı:",
		admin_p8_soft_delete_hover: "Kullanıcılar öğeleri sildiğinde, öğeleri havuzdan silmek yerine kurtarma kabına taşır. Öğeler temizleninceye kadar kurtarma kabında kalır. Hedef havuz kurtarma kaplarını desteklemiyorsa bu ayar yoksayılır.<br><br><b>Kısıtlama:</b> Kurtarma kapları IBM FileNet P8 Sürüm 5.2 ya da sonrasında desteklenir ve Social Collaboration Base Extensions adlı eklentiyi gerektirir.",

		admin_p8_download: "Karşıdan İçerik Yükleme HTTP Önbelleği Yapılandırması",
		admin_p8_download_instructions: "IBM FileNet Content Manager havuzlarınız birçok büyük dosya içeriyorsa, FileNet Collaboration Services olanağının büyük dosyalara yönelik içerik isteklerini adanmış bir web sunucusuna güvenli bir şekilde yönlendirmesini sağlamak için CDHC (Content Download HTTP Cache; Karşıdan İçerik Yükleme HTTP Önbelleği) özelliğini kullanabilirsiniz.<br/><br/>Bu özellik IBM HTTP Server sunucusunu gerektirir. Ayrıca, IBM HTTP Server httpd.conf dosyasını da güncellemeniz gerekir.",
		admin_p8_download_cache: "Karşıdan İçerik Yükleme HTTP Önbelleği:",
		admin_p8_download_cache_hover: "Ortamınızdaki tüm IBM FileNet Content Manager havuzları için CDHC (Content Download HTTP Cache; Karşıdan İçerik Yükleme HTTP Önbelleği) özelliğini etkinleştirmeyi isteyip istemediğinizi belirtin. Dosyaların önbelleğe alınacağı dosya büyüklüğü alt sınırını belirtebilirsiniz.",
		admin_p8_download_cache_folder: "Tam olarak nitelenmiş önbellek dizini:",
		admin_p8_download_cache_folder_hover: "Önbelleğe alınan dosyaları saklamak istediğiniz dizinin tam olarak nitelenmiş yolunu belirtin. FileNet Collaboration Services ve IBM HTTP Server tarafından bir dosya sistemi olarak görülmesi koşuluyla, herhangi bir işletim sisteminde ya da aygıtta bulunan bir dizin kullanılabilir (örneğin, paylaşılan bir ağ dizini).",
		admin_p8_download_cache_url: "Önbellek konumunun diğer adı:",
		admin_p8_download_cache_url_hover: "FileNet Collaboration Services URL adresinden önbellek dizinini göstermek için kullanılan diğer adı belirtin. Diğer adı /diğerad biçiminde belirtin; örneğin, /cdhc.<br/><br/>/cdhc bir URL adresine eklendiğinde, uygulama tam olarak nitelenmiş önbellek dizinine yönlendirilir.",
		admin_p8_download_cache_max_files: "Önbelleğe alınacak dosya sayısı üst sınırı:",
		admin_p8_download_cache_max_files_hover: "Dosya sayısı üst sınırına ulaşıldığında, en eski dosya önbellekten kaldırılır.<br><br>Önbelleğe alınacak dosya sayısı üst sınırını ve önbellek büyüklüğü üst sınırını belirtirseniz, iki koşuldan en küçük olanı gerçekleştiğinde en eski dosya önbellekten kaldırılır.",
		admin_p8_download_cache_max_size: "Önbellek büyüklüğü üst sınırı (GB):",
		admin_p8_download_cache_max_size_hover: "Önbellek büyüklüğü üst sınırına ulaşıldığında, en eski dosya önbellekten kaldırılır.<br/><br/>Önbelleğe alınacak dosya sayısı üst sınırını ve önbellek büyüklüğü üst sınırını belirtirseniz, iki koşuldan en küçük olanı gerçekleştiğinde en eski dosya önbellekten kaldırılır.",
		admin_p8_download_cache_cleanup_duration: "Temizleme süresi üst sınırı (saniye):",
		admin_p8_download_cache_cleanup_duration_hover: "Temizleme işleminin en fazla ne kadar sürebileceğini belirtin. Varsayılan süre 5 saniyedir.<br><br>Silinecek olan, ancak temizleme işleminden sonra önbellekte kalan dosyalar, ilerideki bir temizleme işleminde kaldırılır.",
		admin_p8_download_cache_cleanup_min: "Önbellek temizleme işlemleri aralığı alt sınırı (saniye):",
		admin_p8_download_cache_cleanup_min_hover: "Önbellek temizleme işlemleri arasında en az ne kadar süre olması gerektiğini belirtin. Varsayılan süre 3600 saniyedir (1 saat).<br><br>Önbellek temizleme işlemleri yalnızca, önbellekten içerik yüklemeye ilişkin etkin bir istek varsa gerçekleşir. İstekler dakikada bir geliyorsa, temizleme işlemi saatte bir yapılır. Ancak, karşıdan yükleme istekleri arasında üç saat geçiyorsa, sonraki karşıdan yükleme istediği alınmadıkça temizleme işlemi yapılmaz.",
		admin_p8_download_cache_min_lifetime: "Önbellekte kalma süresi alt sınırı (saniye):",
		admin_p8_download_cache_min_lifetime_hover: "Bir dosyanın kaldırılmadan önce bellekte alıkonabileceği en kısa süreyi belirtin. Varsayılan süre 3600 saniyedir (1 saat).<br><br>Önbellek büyüklüğü üst sınırına ya da dosya sayısı üst sınırına ulaşılsa bile, önbellekteki en eski dosya, belirtilen süre boyunca önbellekte kalmadıkça silinmez.",
		admin_p8_download_cache_size_threshold: "Önbelleğe alınacak dosya büyüklüğü alt sınırı (KB):",
		admin_p8_download_cache_size_threshold_hover: "Dosyaları önbelleğe almak için CDHC özelliğinin kullanılması gereken büyüklük alt sınırını belirtin. Bir dosyanın büyüklüğü belirtilen bu büyüklükten azsa, dosya FileNet Collaboration Services olanağının konuşlandırıldığı web uygulama sunucusu aracılığıyla yönlendirilir. Varsayılan büyüklük 1000 KB'dir.",
		admin_p8_download_guard_header: "Eşik denetimi için HTTP üstbilgisi:",
		admin_p8_download_guard_header_hover: "İstemci uygulaması bir isteği IBM HTTP Server ile yöneltmezse, önbelleğe alınan içerik karşıdan yüklenemez. Karşıdan yükleme başarısızlıklarını önlemek için, önbelleğe alınan içeriğe yalnızca, belirli bir HTTP üstbilgisi (isteklere IBM HTTP Server sunucusundan eklenir) bulunan gelen isteklerin erişebileceğini belirtebilirsiniz.<br><br>HTTP üstbilgisi IBM HTTP Server sunucusunda yapılandırılır ve IBM HTTP Server ile yöneltilen tüm gelen isteklerde bulunur. Bir isteğin HTTP üstbilgisi yoksa, içerik IBM HTTP Server ile değil web uygulama sunucusuyla yöneltilir.",
		admin_p8_download_generate_config: "Yapılandırma oluştur",
		admin_p8_download_generate_config_label: "IBM HTTP Server yapılandırması:",
		admin_p8_download_generate_config_label_hover: "CHDC yapılandırmasının çalışması için IBM HTTP Server httpd.conf dosyasını güncellemelisiniz. httpd.conf dosyasına eklenmesi gereken deyimleri oluşturmak için Yapılandırma Oluştur'u tıklatın.",

		admin_logging_viewone_pro: "ViewONE Professional'da günlüğe kaydetme:",
		admin_logging_viewone_virtual: "ViewONE Virtual'da günlüğe kaydetme:",
		admin_logging_viewone_streamer: "Document Streaming Server Module'da günlüğe kaydetme:",
		admin_logging_viewone_streamer_hover: "Document Streaming Server Module günlüğe kaydetme seçenekleri, yönetim aracının <b>Daeja ViewONE</b> kısmında PDF ya da TIFF dosyaları için akım oluşturma etkinleştirdiyseniz geçerlidir.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module'da günlüğe kaydetme:",
		admin_logging_viewone_redaction_hover: "Permanent Redaction Server Module günlüğe kaydetme seçenekleri, Daeja ViewONE Professional'ın Redaction adlı modülünü kullanım hakkınız varsa geçerlidir.",

		admin_daeja_viewonepro: "Profesyonel",
		admin_daeja_viewonepro_stream_pdf_documents: "PDF dosyalarını akıt:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Havuzunuzda büyük PDF belgeleri varsa, kullanıcıların bu belgeleri daha hızlı görüntülemesini sağlamak için görüntüleyiciyi belge içeriğini akıtacak şekilde yapılandırabilirsiniz. Ancak, ortamınızda akım oluşturma çalışmıyorsa, akım oluşturmayı geçersiz kılabilirsiniz.",
		admin_daeja_viewonepro_stream_tiff_documents: "TIFF dosyalarını akıt:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Havuzunuzda büyük TIFF belgeleri varsa, kullanıcıların bu belgeleri daha hızlı görüntülemesini sağlamak için görüntüleyiciyi belge içeriğini akıtacak şekilde yapılandırabilirsiniz. Ancak, ortamınızda akım oluşturma çalışmıyorsa, akım oluşturmayı geçersiz kılabilirsiniz.",
		admin_daeja_viewonepro_show_file_buttons: "Dosya düğmeleri",
		admin_daeja_viewonepro_show_file_menus: "Dosya menüleri",
		admin_daeja_viewonepro_enable_file_keys: "Dosya geçiş tuşları",
		admin_daeja_viewonepro_file_keys_hover_help: "Kullanıcıların dosyalarla çalışmak (örneğin, bir dosyayı açmak ya da kaydetmek) için klavye kısayollarını kullanmasını isteyip istemediğinizi belirleyin. Belirli geçiş tuşlarıyla ilgili daha fazla bilgi için, IBM Daeja ViewONE Parameters Reference Manual belgesinde FileKeys parametresiyle ilgili açıklamalara bakın.",
		admin_daeja_viewonepro_show_print_buttons: "Yazdırma düğmeleri",
		admin_daeja_viewonepro_show_print_menus: "Yazdırma menüleri",
		admin_daeja_viewonepro_enable_print_keys: "Yazdırma geçiş tuşları",
		admin_daeja_viewonepro_print_keys_hover_help: "Kullanıcıların dosyaları yazdırmak (örneğin, bir sayfayı ya da belgeyi yazdırmak) için klavye kısayollarını kullanmasını isteyip istemediğinizi belirleyin. Belirli geçiş tuşlarıyla ilgili daha fazla bilgi için, IBM Daeja ViewONE Parameters Reference Manual belgesinde PrintKeys parametresiyle ilgili açıklamalara bakın.",
		admin_daeja_viewonepro_show_invert_buttons: "Ters Çevirme düğmeleri",
		admin_daeja_viewonepro_annotation_tooltip: "Varsayılan özel ek açıklama araç ipucu:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Özel bir ek açıklama için herhangi bir araç ipucu belirtilmediğinde görüntülenecek metni girin. Metin değiştirilebilir belirteçler içerebilir. Örneğin, &quot;&lt;creator&gt; bu ek açıklamayı &lt;createdateonly&gt; tarihinde yarattı.&quot; Değiştirilebilir belirteçlerle ilgili daha fazla bilgi için, IBM Daeja ViewONE Parameters Reference Manual belgesinde customAnnotations parametresiyle ilgili açıklamalara bakın.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Önceden tanımlanmış özel araç ipucunu kullan",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Aşağıdaki metin kutusunda gösterilen, sistem tanımlı özel ipucu kullanılır",
		admin_daeja_viewonepro_help_url: "Yardım URL adresi:",
		admin_daeja_viewonepro_help_url_hover_help: "Görüntüleyiciye ilişkin yardım belgelerini içeren web sayfasının URL adresini belirtin. Görüntüleyici araç çubuğundaki yardım düğmesi ve yardım menüsü eylemi web sayfasını açar. URL belirtmezseniz, yardım düğmesi ve menü eylemi görüntülenmez.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Resim damgası kaynağı bağlamı:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Desteklenmeyen içeriği tarayıcıya yönelt:",
		admin_daeja_viewonepro_route_docs_hover_help: "Kullanıcılar desteklenmeyen resim dosyalarını dosyayı görüntüleyecek uygun uygulamayı açan tarayıcıya yönelterek görebilir. Örneğin bir Microsoft Word belgesini açmak için, tarayıcı Microsoft Word görüntüleyicisini kullanır.",
		admin_daeja_viewonepro_scale: "Resmi otomatik boyutlandır:",
		admin_daeja_viewonepro_scale_best: "En Uygun Boyut",
		admin_daeja_viewonepro_scale_ftow: "Genişliğe Göre Boyutlandır",
		admin_daeja_viewonepro_scale_ftoh: "Yüksekliğe Göre Boyutlandır",
		admin_daeja_viewonepro_enable_hotkeys: "Geçiş tuşlarını etkinleştir:",
		admin_daeja_viewonepro_show_features: "Düğmeleri ve menüleri göster:",
		admin_daeja_custom_settings: "Ek ayarlar:",
		admin_daeja_custom_settings_hover_help: "Parametre adını ve değerini belirterek başka parametreler ekleyebilirsiniz. Örneğin, resim görüntü alanını aşan bir büyüklüğe ölçeklendiğinde kaydırma çubuğu görüntülenmesini istiyorsanız &quot;scrollbars&quot; parametresini ve &quot;true&quot; değerini belirtebilirsiniz. Parametre adları ve değerleriyle ilgili daha fazla bilgi için IBM Daeja ViewONE Parameters Reference Manual belgesine bakın.",
		admin_daeja_virtual: "Sanal",
		admin_daeja_virtual_annotation_tooltip: "Varsayılan özel ek açıklama araç ipucu:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Özel bir ek açıklama için herhangi bir araç ipucu belirtilmediğinde görüntülenecek metni girin. Metin değiştirilebilir belirteçler içerebilir. Örneğin, &quot;&lt;creator&gt; bu ek açıklamayı &lt;createdateonly&gt; tarihinde yarattı.&quot; Değiştirilebilir belirteçlerle ilgili daha fazla bilgi için, IBM Daeja ViewONE Parameters Reference Manual belgesinde customAnnotations parametresiyle ilgili açıklamalara bakın.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Önceden tanımlanmış özel araç ipucunu kullan",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Aşağıdaki metin kutusunda gösterilen, sistem tanımlı özel ipucu kullanılır",
		admin_daeja_virtual_image_stamp_resource_context: "Resim damgası kaynağı bağlamı:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Lisans dosyaları yolu:",
		admin_daeja_virtual_license_path_hover_help:"lic-server-virtual.v1 ve lic-server.v1 license dosyalarını içeren dizinin tam olarak nitelenmiş yolunu belirtin.",
		admin_default_license_path:"Varsayılan lisans dosyaları yolunu kullan",
		admin_license_path_specified:"Özel lisans dosyaları yolunu kullan",

		admin_daeja_streamer: "Sunucu",
		admin_daeja_streamer_cache_root: "Önbellek dizini:",
		admin_daeja_streamer_cache_root_hover_help: "Daha hızlı erişim için önbelleğe alınan dosyaları saklamak istediğiniz dizinin tam olarak nitelenmiş yolunu belirtin. IBM Content Navigator ve IBM HTTP Server tarafından bir dosya sistemi olarak görülüyorsa, herhangi bir işletim sisteminde ya da aygıtta bulunan bir dizin kullanılabilir (örneğin, paylaşılan bir ağ dizini). Performansı yükseltmek için yerel dizin kullanın.",
		admin_daeja_streamer_settings: "Ek ayarlar:",
		admin_daeja_streamer_settings_hover_help: "Parametre adını ve değerini belirterek başka parametreler ekleyebilirsiniz. Örneğin, “cookieAllowedDomainList” parametresini ve anasistem sunucularının virgülle ayrılmış bir listesini belirtebilirsiniz.  Parametre adları ve değerleriyle ilgili daha fazla bilgi için IBM Daeja ViewONE Parameters Reference Manual belgesine bakın.",

		admin_daeja_redaction: "Kalıcı Düzelti",
		admin_daeja_redaction_settings: "Ayarlar:",
		admin_daeja_redaction_settings_hover_help: "Parametre adını ve değerini belirterek başka parametreler ekleyebilirsiniz. Örneğin, “burnIncrementalAnnotations” parametresini ve ”true” değerini belirtebilirsiniz. Parametre adları ve değerleriyle ilgili daha fazla bilgi için IBM Daeja ViewONE Parameters Reference Manual belgesine bakın.",

		admin_daeja_setting_dialog_title_new: "Yeni Ayar",
		admin_daeja_setting_dialog_title_edit: "Ayarı Düzenle",
		admin_daeja_setting_dialog_hover_help: "Parametre adını ve değerini belirterek başka parametreler ekleyin. Örneğin, resim görüntü alanını aşan bir büyüklüğe ölçeklendiğinde kaydırma çubuğu görüntülenmesini istiyorsanız “scrollbars” parametresini ve “true” değerini belirtebilirsiniz.",
		admin_daeja_setting_dialog_field_hover_help: "Parametre adları ve değerleriyle ilgili daha fazla bilgi için Daeja ViewONE Parameter Reference Manual belgesine bakın.",

		admin_daeja_logging: "Daeja ViewONE İçin Günlüğe Kaydetme",
		admin_daeja_logging_trace: "İzleme amaçlı günlüğe kaydetmeyi etkinleştir",
		admin_daeja_logging_trace_net: "Ağı günlüğe kaydetmeyi etkinleştir",
		admin_daeja_logging_trace_annotations: "Ek açıklamaları günlüğe kaydetmeyi etkinleştir",
		admin_daeja_logging_log_file: "Günlük dosyası:",
		admin_daeja_logging_instructions: "Daeja ViewONE Professional ve Daeja ViewONE Virtual ile ilgili sorunları gidermek için günlüğe kaydetme olanağını kullanabilirsiniz. Bir sorunun belirli bir özellik için oluştuğunu biliyorsanız, günlüğe kaydetmenin hedefi olarak o özelliği belirtebilirsiniz.",

		admin_v1pro_logging_trace_hover: "Görüntüleyiciyle ilgili genel sorunları gidermek için bu ayarı kullanın.<br><br>Günlüğe kaydetme bilgileri istemci makinedeki Java konsoluna yazılır. Java konsoluna işletim sisteminize göre Denetim Masası'ndan (Windows) ya da Sistem Tercihleri'nden (Mac) erişebilirsiniz.",
		admin_v1pro_logging_trace_net_hover: "Şu sorunları gidermek için bu ayarı kullanın.<ul><li>Sunucu bağlantınızla ilgili sorunlar</li><li>MIME tipleriyle ilgili sorunlar</li><li>Dosyaların çok uzun olmasından kaynaklanan sorunlar</li></ul>Ağ izlemelerini günlüğe kaydetme olanağını, Daeja ViewONE Professional kullanırken gecikmelerin nerede oluştuğunu saptamak amacıyla da kullanabilirsiniz.<br><br>Günlüğe kaydetme bilgileri istemci makinedeki Java konsoluna yazılır. Java konsoluna işletim sisteminize göre Denetim Masası'ndan (Windows) ya da Sistem Tercihleri'nden (Mac) erişebilirsiniz.",
		admin_v1pro_logging_trace_annotations_hover: "Ek açıklamaları yaratırken, kaydederken ya da yüklerken karşılaılan sorunları gidermek için bu ayarı kullanın.<br><br>Günlüğe kaydetme bilgileri istemci makinedeki Java konsoluna yazılır. Java konsoluna işletim sisteminize göre Denetim Masası'ndan (Windows) ya da Sistem Tercihleri'nden (Mac) erişebilirsiniz.",

		admin_virtual_logging_trace_hover: "Görüntüleyiciyle ilgili genel sorunları gidermek için bu ayarı kullanın.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki virtual.log dosyasına yazılır.",
		admin_virtual_logging_trace_net_hover: "Şu sorunları gidermek için bu ayarı kullanın.<ul><li>Sunucu bağlantınızla ilgili sorunlar</li><li>MIME tipleriyle ilgili sorunlar</li><li>Dosyaların çok uzun olmasından kaynaklanan sorunlar</li></ul>Ağ izlemelerini günlüğe kaydetme olanağını, Daeja ViewONE Virtual kullanırken gecikmelerin nerede oluştuğunu saptamak amacıyla da kullanabilirsiniz.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki virtual.log dosyasına yazılır.",
		admin_virtual_logging_trace_annotations_hover: "Ek açıklamaları yaratırken, kaydederken ya da yüklerken karşılaılan sorunları gidermek için bu ayarı kullanın.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki virtual.log dosyasına yazılır.",
		admin_virtual_logging_log_file_hover: "Görüntüleyici için günlüğe kaydetmeyi etkinleştirirseniz, kaydedilen bilgilerin saklanmasını istediğiniz günlük dosyasının tam olarak nitelenmiş yolunu ve adını belirtmelisiniz.  Günlük dosyasını virtual.log olarak adlandırmanız önerilir.",

		admin_streamer_logging_trace_hover: "Document Streaming Server Module ile ilgili genel sorunları gidermek için bu ayarı kullanın.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki streamer.log dosyasına yazılır.",
		admin_streamer_logging_trace_net_hover: "Şu sorunları gidermek için bu ayarı kullanın.<ul><li>Sunucu bağlantınızla ilgili sorunlar</li><li>Belirli MIME tipleriyle ilgili sorunlar</li><li>Dosyaların çok uzun olmasından kaynaklanan sorunlar</li></ul>Ağ izlemelerini günlüğe kaydetme olanağını, Document Streaming Server Module adlı modülü kullanırken gecikmelerin nerede oluştuğunu saptamak amacıyla da kullanabilirsiniz.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki streamer.log dosyasına yazılır.",
		admin_streamer_logging_log_file_hover: "Document Streaming Server Module için günlüğe kaydetmeyi etkinleştirirseniz, kaydedilen bilgilerin saklanmasını istediğiniz günlük dosyasının tam olarak nitelenmiş yolunu ve adını belirtmelisiniz.  Günlük dosyasını streamer.log olarak adlandırmanız önerilir.",

		admin_redaction_logging_trace_hover: "Permanent Redaction Server Module ile ilgili genel sorunları gidermek için bu ayarı kullanın.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki redacttofile.log dosyasına yazılır.",
		admin_redaction_logging_trace_net_hover: "Şu sorunları gidermek için bu ayarı kullanın.<ul><li>Sunucu bağlantınızla ilgili sorunlar</li><li>Belirli MIME tipleriyle ilgili sorunlar</li><li>Dosyaların çok uzun olmasından kaynaklanan sorunlar</li></ul>Ağ izlemelerini günlüğe kaydetme olanağını, Permanent Redaction Server Module adlı modülü kullanırken gecikmelerin nerede oluştuğunu saptamak amacıyla da kullanabilirsiniz.<br><br>Varsayılan olarak, günlüğe kaydetme bilgileri IBM Content Navigator kuruluş dizininin config altdizinindeki redacttofile.log dosyasına yazılır.",
		admin_redaction_logging_log_file_hover: "Permanent Redaction Server Module için günlüğe kaydetmeyi etkinleştirirseniz, kaydedilen bilgilerin saklanmasını istediğiniz günlük dosyasının tam olarak nitelenmiş yolunu ve adını belirtmelisiniz.  Günlük dosyasını redacttofile.log olarak adlandırmanız önerilir.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Görüntüleyicileriniz ve hizmetleriniz için özellikleri yapılandırın.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Web istemcisini bir ya da daha çok Content Manager OnDemand havuzuna bağlanmak için kullanıyorsanız, OnDemand Web Enablement Kit'in doğru çalışması için gereken bilgileri belirtmelisiniz. Bu bilgiler web istemcisi için yapılandırılan tüm Content Manager OnDemand havuzları tarafından paylaşılır.",
		admin_ondemand_language: "Dil:",
		admin_ondemand_tempdir: "ODWEK geçici dizini:",
		admin_ondemand_tracegrp: "ODWEK İzlemesi",
		admin_ondemand_tracedir: "İzleme dizini:",
		admin_ondemand_tracelevel: "İzleme düzeyi:",
		admin_ondemand_tracelevel_0: "0 - Günlüğe kaydetme yok",
		admin_ondemand_tracelevel_1: "1 - Hata iletileri günlüğe kaydedilir",
		admin_ondemand_tracelevel_2: "2 - Hata ve uyarı iletileri günlüğe kaydedilir",
		admin_ondemand_tracelevel_3: "3 - Hata, uyarı ve bilgi iletileri günlüğe kaydedilir",
		admin_ondemand_tracelevel_4: "4 - İşlev izlemesi de içinde olmak üzere tüm iletiler yakalanır",
		admin_ondemand_max_trace_filesize: "İzleme dosyası büyüklüğü üst sınırı:",
		admin_ondemand_max_trace_filesize_unlimited: "Sınırsız",
		admin_ondemand_max_trace_filesize_limited: "Sınırlı (Önerilir)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Bu değer geçerli aralığın dışında. Değerin 1 - 1.000.000 arasında bir tamsayı olması gerekir.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF kuruluş dizini:",
		admin_ondemand_language_hover: "ODWEK tarafından ileti döndürmekte kullanılacak dili belirtin.",
		admin_ondemand_tempdir_hover: "OnDemand Web Enablement Kit olanağının işleme sırasında geçici dosyaları saklayacağı dizini girin. Web uygulama sunucusunda var olan bir dizinin tam olarak nitelenmiş yolunu girmelisiniz.",
		admin_ondemand_tracedir_hover: "ODWEK izleme dosyası olan arswww.trace dosyasının saklanacağı dizini girin. Web uygulama sunucusunda var olan bir dizinin tam olarak nitelenmiş yolunu girmelisiniz.",
		admin_ondemand_tracelevel_hover: "arswww.trace dosyasına yazılacak günlüğe kaydetme bilgileri düzeyini belirtin. <b>Hata iletilerini günlüğe kaydetme</b> seçilirse, en az miktarda günlüğe kaydetme bilgisi yakalanır. <b>İşlev izlemesi de içinde olmak üzere tüm iletileri yakalama</b> seçilirse, en fazla miktarda bilgi yakalanır.<br /><br />IBM Software Support tarafından istenmedikçe, üretim ortamında <b>İşlev izlemesi de içinde olmak üzere tüm iletiler yakalama</b> seçeneğini belirlemeyin.",
		admin_ondemand_max_trace_filesize_hover: "ODWEK izleme dosyasının sınırsız olarak büyümesine izin verilmesini mi, yoksa günlük dosyası belirli bir büyüklüğe ulaştığında web istemcisinin yeni günlük dosyaları yaratmasını mı istediğinizi belirleyin. Varsayılan seçim, web uygulaması web uygulama sunucusunda durduruluncaya kadar, izleme günlüğü dosyasının büyümesine izin verilmesidir.",
		admin_ondemand_max_trace_unlimited_hover: "ODWEK izleme bilgilerinin tek bir günlük dosyasına yazılmasını istiyorsanız bu seçeneği belirleyin. Bu seçeneği belirlerseniz, günlük dosyanız standart bir dosya görüntüleyicisiyle görüntülenemeyecek kadar büyüyebilir.",
		admin_ondemand_max_trace_limited_hover: "ODWEK izleme bilgilerinin daha küçük günlük dosyalarına yazılmasını istiyorsanız bu seçeneği belirleyin. Bir günlük dosyası büyüklük üst sınırına ulaşınca, yürürlükteki günlük, tarihi (arswww.trace.YYYYAAGG.SSDDSS) içerecek şekilde yeniden adlandırılır ve yeni bir günlük dosyası yaratılır.",
		admin_ondemand_afp2pdf_installdir_hover: "AFP belgelerini görüntülemek ve yazdırmak üzere PDF belgelerine dönüştürmek için AFP2PDF Dönüştürme yardımcı programını kullanmak istiyorsanız, web uygulama sunucusunda AFP2PDF Dönüştürme yardımcı programının kurulu olduğu dizini belirtin. Örnek: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Yöneticiler",
		admin_adminusers_heading_text_multi: "Web istemcisinde yönetim ayrıcalıklarına sahip olacak kullanıcıları belirtmelisiniz. Yönetim masaüstünde yalnızca yöneticiler oturum açabilir.<br /><br /><b>Önemli:</b> IBM Content Navigator yöneticilerinin kullanıcı kimlikleri şunlarla eşleşmelidir:<ul><li>UWeb uygulama sunucunuzda var olan kullanıcı kimlikleri. Kullanıcı kimliklerinin web uygulama sunucusunda yönetici olması gerekmez.</li><li>Yönetim özelliğini içeren her masaüstü için yapılandırılan varsayılan havuzda var olan kullanıcı kimlikleri.</li></ul>",
		admin_adminusers_heading_text_single: "Web istemcisinde yönetim ayrıcalıklarına sahip olacak kullanıcıları belirtmelisiniz. Yönetim masaüstünde yalnızca yöneticiler oturum açabilir.<br /><br /><b>Önemli:</b> IBM Content Navigator yöneticilerinin kullanıcı kimlikleri, web uygulama sunucunuzda var olan kullanıcı kimlikleriyle eşleşmelidir. Kullanıcı kimliklerinin web uygulama sunucusunda yönetici olması gerekmez.",
		admin_adminusers_newuser: "Yeni yönetici:",
		admin_adminusers_add: "Ekle",
		admin_adminusers_remove: "Kaldır",
		admin_adminusers_listheading: "Yöneticiler",
		admin_adminusers_nameInvalid: "Yinelenen bir değer kullanılamaz.",

		admin_sync_server_instructions: "<b>Yalnızca FileNet P8 kullanıcıları:</b> Bir ya da daha fazla havuz için Sync Services olanağını etkinleştirmeyi planlıyorsanız, web istemcisini Sync Services kullanacak şekilde yapılandırmalısınız. Sync Services yapılandırması, ortamınızdaki tüm havuzlar tarafından paylaşılır.",
		admin_settings_instructions: "Ayarlar sekmesinde belirttiğiniz değerler, yapılandırmanızdaki tüm masaüstüleri için geçerlidir.",
		admin_autocomplete: "Kullanıcı adlarını otomatik olarak doldur:",
		admin_autocomplete_hover: "Oturum açma sırasında web istemcisindeki kullanıcı adlarının otomatik olarak doldurulması için, web istemcisinin kullanıcı adlarını tarayıcı tanımlama bilgilerinde kaydetmesini isteyip istemediğinizi belirtin.<br><br>Bu seçeneği etkinleştirirseniz, web istemcisinde oturum açan son kullanıcının kullanıcı adı tarayıcı tanımlama bilgilerinde saklanır ve bir kullanıcı web istemcisini açtığında otomatik olarak Oturum Aç sayfasında görüntülenir.<br><br>Uygulamaya paylaşılan iş istasyonlarından erişiliyorsa ya da kullanıcı adlarının tarayıcı tanımlama bilgilerinde saklanması sizi tedirgin ediyorsa bu seçeneği geçersiz kılın.<br /><br />Bu seçenek mobil ya da özel uygulamalar için geçerli değildir.",
		admin_autocomplete_enable: "Etkinleştir",
		admin_autocomplete_disable: "Geçersiz Kıl",
		admin_cultural_collation: "Ülke değerine özgü sıralama kullan:",
		admin_cultural_collation_hover: "Ülke değerine özgü sıralamayı etkinleştirirseniz, sıralama havuz sunucusunda yapılır. Bu, web istemcisinin performansını düşürebilir.<br><br>Ülke değerine özgü sıralamanın geçersiz kılınması web istemcisinin performansını yükseltebilir.",
		admin_cultural_collation_enable: "Etkinleştir",
		admin_cultural_collation_disable: "Geçersiz Kıl",
		admin_base_ui_style: "Tema stili",
		admin_base_ui_style_hover: "Web istemcisinde kullanılan varsayılan temanın stilini belirtin. Bu stil yalnızca <b>Varsayılan</b> temayı (masaüstü yapılandırmasının <b>Görünüş</b> sekmesinde belirtilir) kullanan masaüstlerinde kullanılır.<br/></br><b>Kısıtlama:</b> Masaüstü yapılandırmalarınız özel temaları kullanıyorsa, seçtiğiniz stilden bağımsız olarak, özel temalar klasik stile dayalı olur.",
		admin_base_ui_style_classic: "Klasik",
		admin_access_control_access: "Erişimi belirli kullanıcılar ve gruplar ile sınırla",
		admin_access_control_access_show: "Erişim denetimi verilerini göster",
		admin_access_control_access_enable: "Evet",
		admin_access_control_access_disable: "Hayır",
		admin_mobile_access: "Mobil uygulamalardan erişilmesine izin ver",
		admin_mobile_access_hover: "Varsayılan olarak, kullanıcılar web istemcisine IBM Content Navigator iOS uygulamasından erişebilir.<br /><br /><b>Önemli:</b> Kullanıcıların web istemcisine iOS uygulamasından erişmesini engellerseniz, kullanıcılar web istemcisine mobil aygıtlarındaki web tarayıcılarından ve IBM Content Navigator API'ları kullanılarak yazılmış, mobil aygıtlar üzerinde çalışan özel uygulamalardan da erişebilir.",
		admin_mobile_access_enable: "Evet",
		admin_mobile_access_disable: "Hayır",
		admin_error: "Hata iletisi bilgileri:",
		admin_error_custom: "Özel destek içeriğini ara",
		admin_error_default: "IBM desteği içeriğini ara <BDO DIR='LTR'>(</BDO>varsayılan<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Bir hata iletisiyle karşılaşan kullanıcıların daha fazla bilgi için yönlendirilmesini istediğiniz kaynağı belirtin. Kullanıcıları IBM Support Portal'daki bilgilere ya da yardım masası gibi iç kaynaklara yönlendirebilirsiniz.",
		admin_error_URL: "URL öneki:",
		admin_error_URL_hover: "Kullanıcıların bir hatayla karşılaştıklarında yönlendirileceği kaynağın (örneğin, bir yardım masasının) URL adresini belirtin. Örnek: http://localhost:kapı_numarası. Web istemcisi iletinin numarasını URL adresine ekler.",
		admin_prompt_close_without_save: "Değişiklikleri kaydetmeden kapatmak istiyor musunuz?",
		admin_object_expiration_time: "Önbellek yenileme aralığı (dakika):",
		admin_object_expiration_time_hover: "Web istemcisinin performansını yükseltmek için masaüstleri gibi yapılandırma nesnelerinin önbellekte alıkonacağı süreyi artırabilirsiniz. Varsayılan süre 10 dakikadır. Süre üst sınırı 1440 dakikadır (1 gün).<br /><br />Yaptığınız değişikliklerin yürürlüğe girmesi için web uygulamasını yeniden başlatmanız gerekir.<br /><br />IBM Content Navigator kullanılabilirliği yüksek bir kümeli ortama konuşlandırıldıysa, önbellek yenilenmedikçe, yapılandırma nesnelerinde yapılan değişiklikler düğümlere yansıtılmaz.",
		admin_temp_file_cleanup_interval: "Görüntüleyici önbelleğini temizlemek için tarama aralığı (saat):",
		admin_temp_file_cleanup_interval_hover: "Süresi dolmuş geçici dosyaları bulup silmek için geçici dizinin hangi sıklıkta taranacağını zamanlayın. Varsayılan olarak, geçici dizin altı saatte bir taranır. 6-48 saat belirtebilirsiniz.",
		admin_temp_file_expiration_interval: "Görüntüleyici önbelleği süre bitim (saat):",
		admin_temp_file_expiration_interval_hover: "Görüntüleyicideki etkinliklerle ilgili geçici dosyaların tarayıcının önbelleğinde kalacağı süreyi belirtin. Varsayılan olarak, bu geçici dosyalar 24 saatin sonunda süre bitimine uğratılır. 12-48 saat belirtebilirsiniz.",
		admin_encryption_key_hover: "Navigator şifreleme işlevleri için kullanılan anahtarlar.",
		admin_encryption_key: "Şifreleme anahtarı:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Markalama",
		admin_mobile_branding_main_color: "Ana renk:",
		admin_mobile_branding_secondary_color: "İkincil renk:",
		admin_mobile_device_title: "MaaS360 Yönetimi",
		admin_mobile_device_enable_maas360: "MaaS360'ı etkinleştir:",
		admin_mobile_device_enable_maas360_hover_help: "MaaS360 belirten yardımını etkinleştir",
		admin_mobile_device_maas360_developer_id: "MaaS360 geliştirici kimliği:",
		admin_mobile_device_maas360_license_key: "MaaS360 lisans anahtarı:",
		admin_mobile_settings_title: "Ayarlar",
		admin_mobile_email_address_hover_help: "Kullanıcı \"Hata Raporu Gönder\" öğesini tıklattığında mobil uygulamada kullanılan eposta adresi.",
		admin_mobile_email_address: "Eposta adresi:",
		admin_invalid_email_address_message: "Girdiğiniz eposta adresi doğru biçimde değil. Doğru adresi girip yeniden deneyin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Bazı veriler geçerli değil.",
		admin_configuration_parameters: "Yapılandırma Parametreleri",
		admin_configuration_optional_features: "İsteğe Bağlı Özellikler",
		admin_configuration_optional_features_p8_instructions: "Bu havuzda etkinleştirilmesini istediğiniz özellikleri seçin.<p><b>Önemli:</b> Havuza eklenti kuran bir özelliği etkinleştirecekseniz, havuza Content Platform Engine ya da Content Engine yöneticisi olarak bağlanmış olmanız gerekir.</p>",
		admin_configuration_optional_features_cm_instructions: "Bu havuzda etkinleştirilmesini istediğiniz özellikleri seçin.<p><b>Önemli:</b> Bu özellikler havuzundaki veri modelini değiştirir. Bunları etkinleştirmek için, havuza kitaplık sunucusu yöneticisi olarak bağlanmış olmalısınız.</p>",
		admin_system_properties: "Sistem Özellikleri",
		admin_system_properties_for: "İlgili sistem özellikleri:",
		admin_available_properties: "Kullanılabilecek Özellikler",
		admin_displayed_properties: "Görüntülenen Özellikler",
		admin_selected_properties: "Seçilen Özellikler",
		admin_selected_filtered_properties: "Gizlenmiş Özellikler",
		admin_available_operators: "Görüntülenen İşleçler",
		admin_selected_filtered_operators: "Gizlenmiş İşleçler",
		admin_system_properties_shown: "Gösterilen Özellikler",
		admin_system_properties_hidden: "Gizlenmiş Özellikler",
		admin_available_menu_items: "Kullanılabilecek Eylemler:",
		admin_selected_menu_items: "Seçilen Eylemler:",
		admin_menu_global: "Herhangi bir öğe seçilmediğinde geçerlidir:",
		admin_menu_multiple_document: "Birden çok öğe seçildiğinde geçerlidir:",
		admin_menu_privileges: "Gerekli ayrıcalıklar:",
		admin_menu_plugin: "Eklenti:",
		admin_menu_repository_types: "Havuz tipleri:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Ayırıcı",
		admin_browse: "Göz At",
		admin_search: "Arama",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Rol Tabanlı Düzelti",
		admin_connections_library_enabled: "IBM Connections etkinleştirildi",
		admin_office_conf: "Edit Service Bütünleşmesi",
		admin_desktop_conf_label: "Masaüstü Yapılandırması",
		admin_ms_office_conf_label: "Office Yapılandırması",
		admin_workflows: "İş Akışları",
		admin_file_types: "Dosya Tipleri",
		admin_file_type_contains_label: "Bunu içeren dosya tipi:",
		admin_name_propepty: "Ad",
		admin_cm_name_property_default: "Varsayılan adı kullan",
		admin_cm_name_property_default_hover: "Öğe için ICM sıradüzenli adı (ICM$NAME) özelliği tanımlandıysa, bu özellik varsayılan öğe adı olarak kullanılır.  ICM sıradüzenli adı (ICM$NAME) özelliği yoksa, öğe adı olarak, \"represents\" işaretli olan ilk özellik kullanılır.",
		admin_cm_name_property: "Öğe adı özelliğini belirtin",
		admin_cm_name_property_hover: "Hangi özelliğin belgelerin ve klasörlerin adı olarak kullanılacağını belirtin.",
		admin_name_property: "Ad özelliği:",
		admin_doc_name_property: "Belge adı özelliği:",
		admin_doc_name_property_hover: "Hangi özelliğin belge adı olarak kullanılacağını belirtin.",
		admin_folder_name_property: "Klasör adı özelliği:",
		admin_folder_name_property_hover: "Hangi özelliğin klasör adı olarak kullanılacağını belirtin.",
		admin_all_searches_label: "Görüntülenecek aramaların sayısı:",
		admin_unlimited: "Sınır yok",
		admin_limit: "Bununla sınırlı",
		admin_repository: "Havuz:",
		admin_application_space: "Uygulama Alanı",
		admin_available_application_spaces: "Kullanılabilecek Uygulama Alanları:",
		admin_selected_application_spaces: "Seçilen Uygulama Alanları:",
		admin_label: "Etiket",
		admin_repository_box_placeholder: "Box havuzu seçin",
		admin_repository_placeholder: "Havuz seç",
		admin_search_match: "Eşleştir:",
		admin_search_match_all: "Arama ölçütlerinin tümüyle eşleştir",
		admin_search_match_any: "Arama ölçütlerinin herhangi biriyle eşleştir",
		admin_search_match_hover: "<b>Özellik seçenekleri</b> menüsünde varsayılan olarak hangi seçeneğin seçili olacağını belirtin.",

		admin_repository_redactions_instructions: "Bu havuz için rol tabanlı düzeltiler yapılandırabilirsiniz.",
		admin_repository_redaction_policies_description: "Düzelti ilkeleri yaratabilir ve bunları yönetebilirsiniz; düzelti ilkeleri, düzelti nedenlerini duyarlı verileri okuyabilecek ve o duyarlı verilerin görüntülenmesini engelleyen ek açıklamaları düzenleyebilecek kullanıcılar ve gruplar ile ilişkilendirir.",
		admin_repository_redaction_roles_instruction: "Bir düzelti rolü yaratarak, belirli kullanıcıları ve grupları duyarlı verileri okuma yeteneğiyle ya da duyarlı verilerin görüntülenmesini engelleyen ek açıklamaları düzenleme yeteneğiyle ilişkilendirebilirsiniz. Bu kullanıcıların ve grupların verileri okuyabilmesi ya da ek açıklamaları düzenleyebilmesi için, düzelti rolünün düzelti ilkesinde bir düzelti nedeniyle ilişkilendirilmesi gereklidir.",
		admin_repository_redaction_reasons_instruction: "Havuzunuz için düzelti nedenleri yapılandırabilirsiniz.",
		admin_repository_redaction_policies: "Düzelti İlkesi Yapılandırması",
		admin_repository_redaction_roles: "Düzelti Rolleri Yapılandırması",
		admin_repository_redaction_reasons: "Düzelti Nedenleri Yapılandırması",
		admin_repository_redaction_roles_type: "Tip",
		admin_repository_redaction_roles_type_hover: "Bir düzenleyici, belirli tiplerde rol tabanlı düzeltiler yaratabilir, bunları değiştirebilir ya da silebilir; görüntüleyici ise, belirli tiplerdeki duyarlı verileri görüntüleyebilir.",
		admin_repository_redaction_roles_type_editor: "Düzenleyici",
		admin_repository_redaction_roles_type_viewer: "Görüntüleyici",
		admin_repository_redaction_roles_membership: "Üyelik",
		admin_repository_redaction_roles_membership_hover: "Bu role atamak istediğiniz düzenleyicileri seçin.",
		admin_repository_redaction_roles_user_group_hover: "Bu role atamak istediğiniz kullanıcıları ve grupları arayın ya da düzenleyicileri seçin.",
		admin_repository_redaction_roles_description: "Düzelti rolleri yaratabilir ve bunları yönetebilirsiniz; düzelti rolleri, kullanıcıları ve grupları duyarlı verileri okuma ve duyarlı verilerin görüntülenmesini engelleyen ek açıklamaları düzenleme yetenekleriyle ilişkilendirir.",
		admin_repository_redaction_new: "Yeni Düzelti Rolü",
		admin_repository_redaction_role_avail_editors: "Kullanılabilecek Düzelti Düzenleyicileri",
		admin_repository_redaction_role_avail_users: "Kullanılabilecek Kullanıcılar",
		admin_repository_redaction_role_avail_groups: "Kullanılabilecek Gruplar",
		admin_repository_redaction_role_selected_editors: "Seçilen Düzelti Düzenleyicileri",
		admin_repository_redaction_role_selected_users_groups: "Seçilen Kullanıcılar ve Gruplar",
		admin_repository_redaction_role_add_editor: "Yeni Düzenleyiciler...",
		admin_repository_redaction_role_access_type: "Erişim",
		admin_repository_redaction_role_access_type_access: "İzin Ver",
		admin_repository_redaction_role_access_type_no_access: "İzin Verme",
		admin_repository_redaction_role_users: "Kullanıcılar",
		admin_repository_redaction_role_groups: "Gruplar",
		admin_repository_redaction_role_editors: "Düzenleyiciler",
		admin_delete_confirmation_redaction_roles: "Seçilen düzelti rolünü silmek istiyor musunuz?",
		admin_repository_edit_redaction_role: "Düzelti rolü: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Varsayılan erişim",
		// RBA
		desktop_user_group_acl: "Masaüstü Yöneticileri",
		desktop_user_group_remove: "Kaldır",
		desktop_rba_membership: "Üyelik:",
		desktop_rba_membership_list_label: "Ad",
		admin_repository_redaction_policy_hover: "Kullanıcıların bu ilkeyi diğer ilkelerden ayırt etmelerini sağlayacak bir tanım belirtin.",
		admin_repository_new_redaction_policy: "Yeni Düzelti İlkesi",
		admin_repository_policy_name: "İlke Adı",
		admin_repository_reason_redactions: "Düzelti Nedenleri:",
		admin_repository_role_editors: "Düzenleyiciler",
		admin_repository_role_viewers: "Görüntüleyiciler",
		admin_repository_redaction_policy_instruction: "Seçilen düzelti nedenlerini hem düzelti düzenleyicileri hem de düzelti görüntüleyicileri ile ilişkilendirmek için bir düzelti ilkesi yaratabilirsiniz.",
		admin_repository_redaction_reasons_hover: "Kullanıcıların çoğunun görmesini istemediğiniz bir ya da daha çok duyarlı veri tipi seçin; örneğin, kişisel bilgiler, ticari sırlar ya da şirketinize özel ya da şirketinizin mülkiyeti altındaki bilgiler.",
		admin_repository_readaction_available_reasons: "Kullanılabilecek Nedenler",
		admin_repository_readaction_selected_reasons: "Seçilen Nedenler",
		admin_repository_readaction_new_reason: "Yeni Neden...",
		admin_repository_redeaction_reasons: "Düzelti nedenleri:",
		admin_repository_readaction_editor_permmission: "Düzelti düzenleyicileri:",
		admin_repository_redaction_editors_hover: "Seçilen nedenler için düzelti yaratabilecek ya da bunları değiştirebilecek rolleri seçin.",
		admin_repository_readaction_new_editor_role: "Yeni Düzenleyici Rolü...",
		admin_repository_readaction_available_editors: "Kullanılabilecek Düzenleyici Rolleri",
		admin_repository_readaction_selected_editors: "Seçilen Düzenleyici Rolleri",
		admin_repository_readaction_viewer_permmission: "Düzelti görüntüleyicileri:",
		admin_repository_redaction_viewers_hover: "Seçilen nedenler için duyarlı verileri görüntüleyebilecek rolleri seçin. Düzelti bu role sahip kullanıcılara ve gruplara uygulanmaz.",
		admin_repository_readaction_new_viewer_role: "Yeni Görüntüleyici Rolü...",
		admin_repository_readaction_available_viewers: "Kullanılabilecek Görüntüleyici Rolleri",
		admin_repository_readaction_selected_viewers: "Seçilen Görüntüleyici Rolleri",
		admin_repository_reason_redactions_header: "Düzelti Nedenleri",
		admin_delete_confirmation_redaction_policy: "Seçilen düzelti ilkesini silmek istiyor musunuz?",
		admin_role_type_repository: "Havuz",
		admin_role_type_administrator: "Yönetici",
		admin_role_type_template: "Şablon",
		admin_role_type_teamspace: "Ekip Alanı",
		admin_role_type_author: "Düzenleyici",
		admin_role_type_user: "Görüntüleyici",
		admin_collaboration_services_instructions: "Sisteminizde IBM Connections ve bir FileNet Collaboration Services web uygulaması varsa, topluluk için topluluk ekip alanları ve etkinlik akımları yapılandırabilirsiniz.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Topluluk Kitaplığı Yapılandırması",
		admin_collaboration_community_instruction: "IBM Connections topluluk kitaplıklarını (ekip alanı da denir) saklamak için IBM FileNet P8 etki alanınızda tek bir havuz yapılandırabilirsiniz. Kullanıcılar IBM Connections aracılığıyla topluluk kitaplığı yarattığında, bu kitaplık topluluk kitaplığı havuzu olarak belirlenmiş havuzda saklanır.",
		admin_collaboration_community_teamspaces: "Topluluk kitaplıkları için bu havuzu kullan:",
		admin_collaboration_community_teamspaces_hover: "Yeni topluluk kitaplıklarını saklamak için IBM FileNet P8 etki alanınızda tek bir havuz kullanabilirsiniz. Bu havuzu etkinleştirirseniz ve bir havuzunuz varsa, var olan havuz geçersiz kılınır. Ancak, var olan kitaplıklar yürürlükteki havuzda kalır.",
		admin_collaboration_connections_anonymous: "Genel içeriğe anonim erişime izin ver:",
		admin_collaboration_connections_anonymous_hover: "IBM Connections sunucunuz genel kullanıma açık ya da yönetilen topluluklar içeriyorsa, FileNet Collaboration Services olanağını, kullanıcıların önce oturum açmak zorunda kalmadan bu topluluklardaki kitaplıklarda yer alan içeriğe göz atmalarını ve içeriği karşıdan yüklemelerini sağlayacak şekilde yapılandırabilirsiniz.<br><br>Topluluk kitaplıklarına anonim olarak erişen kullanıcılar içerik yaratamaz, değiştiremez ya da silemez.<br><br><b>Önemli:</b> Bir IBM FileNet P8 LDAP kullanıcısını anonim kullanıcı olarak belirlemeli ve WebSphere Application Server'da o kullanıcıyı <b>Anonymous</b> rolüyle yapılandırmalısınız.",
		admin_collaboration_connections_url: "IBM Connections URL adresi:",
		admin_collaboration_connections_url_hover: "Şu biçimi kullanarak IBM Connections sunucunuzun URL adresini belirtin: http://IBMConnectionsServer:kapı_numarası.  IBM Connections, IBM HTTP Server sunucusunu kullanacak şekilde yapılandırıldıysa, URL adresinde kapı numarasını atlayabilirsiniz.<br><br>IBM Connections kullanıcıları bu URL adresine erişebilmelidir; FileNet Collaboration Services tarafından IBM Connections olanağındaki belge iniş sayfalarına bağlantı yaratmak için kullanılan bağlantı budur.",
		admin_collaboration_connections_url_http_use: "IBM Connections URL adresini kullan",
		admin_collaboration_connections_url_https_use: "IBM Connections HTTPS URL adresini kullan",
		admin_collaboration_connections_url_specify: "URL adresini belirtin",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL adresi:",
		admin_collaboration_connections_url_https_hover: "IBM Connections SSL kullanacak şekilde yapılandırıldıysa, şu biçimi kullanarak IBM Connections sunucunuzun HTTPS URL adresini belirtin: https://IBMConnectionsServer:kapı_numarası.  IBM Connections, IBM HTTP Server sunucusunu kullanacak şekilde yapılandırıldıysa, URL adresinde kapı numarasını atlayabilirsiniz.",

		admin_collaboration_connections_gadget_url: "IBM Connections araççık URL adresi:",
		admin_collaboration_connections_retrieval_url: "IBM Connections alma URL adresi:",
		admin_collaboration_connections_security: "Topluluk yöneticileri:",
		admin_collaboration_connections_security_hover: "Topluluk kitaplıklarının içeriğini yönetebilecek kullanıcıları ve grupları belirtin.<br><br>Genel yöneticiler topluluk kitaplıkları ve topluluk kitaplığı içerikleri yaratabilir, bu içerikleri değiştirebilir, silebilir ve bunlar için erişim verebilir. Bir kullanıcıyı genel yönetici olarak belirlediğinizde, kullanıcıya havuz için ClbGlobalAdministrator ayrıcalıkları verilir.<br><br>Genel gözden geçirme yöneticileri, bir topluluk kitaplığında yayınlanmak üzere gözden geçirme aşamasında olan içerikleri onaylayabilir ya da reddedebilir. Bir kullanıcıyı genel gözden geçirme yöneticisi olarak belirlediğinizde, kullanıcıya havuz için ClbGloablReviewAdministrator ayrıcalıkları verilir.",

		admin_collaboration_connections_admins: "Genel yöneticiler",
		admin_collaboration_connections_admins_review: "Genel gözden geçirme yöneticileri",
		admin_collaboration_connections_seedlist: "Topluluk kitaplığı içeriğini dizinle:",
		admin_collaboration_connections_seedlist_hover: "IBM Connections olanağının bu havuzdaki topluluk kitaplıklarında bilgi/belge toplayarak arama dizini yaratmasını isteyip istemediğiniz belirleyin. Dizin yaratılması havuzun performansını olumsuz etkileyebilir.<br><br>Havuzda Social Collaboration Search Indexing Extensions kuruluysa, bu seçenek varsayılan olarak etkindir. Havuzda Social Collaboration Search Indexing Extensions kurulu değilse, bu seçeneği etkinleştirdiğinizde eklenti havuza kurulur.",
		admin_collaboration_activity_stream: "Etkinlik Akımı Olay Yapılandırması",
		admin_collaboration_activity_stream_label: "Olay bilgilerini IBM Connections olanağına gönder:",
		admin_collaboration_activity_stream_label_hover: "Belge yaratma, dışarı alma, içeri verme, açıklama, etiket ve paylaşım gibi olay bilgilerinin IBM Connections olanağına gönderilmesini isteyip istemediğinizi belirleyin.<br><br><b>Önemli:</b> IBM Connections olanağına bildirimlerin gönderilmesi havuzun performansını olumsuz etkileyebilir.",

		admin_collaboration_activity_stream_instruction: "Bu havuzu, açıklama ve belge onaylama gibi olay bilgilerini IBM Connections olanağına gönderecek şekilde yapılandırabilirsiniz. Olaylar, IBM Connections topluluklarındaki <b>En Son Güncellemeler</b> sayfasında görüntülenir. ",
		admin_collaboration_activity_stream_ignored_ids: "Belirli kullanıcılar ve gruplar için olay bilgilerini yoksay:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Kullanıcıların göreceği bildirimlerin sayısını azaltmak için, belirli kullanıcılar ya da gruplar (örneğin, yöneticiler ya da sistem hesapları) tarafından oluşturulan olayları yoksayabilirsiniz. Örneğin, içerik geçiriyorsanız, geçiş için kullanılan hesabın oluşturduğu olayların yoksayılacağını belirtmek isteyebilirsiniz.",
		admin_collaboration_activity_stream_userid: "IBM Connections kullanıcı adı:",
		admin_collaboration_activity_stream_userid_hover: "Content Platform Engine tarafından IBM Connections olanağına kimlik doğrulamasında bulunmak ve olay göndermek için kullanacak sistem hesabını belirtin. Kullanıcı, IBM Connections olanağındaki Widget Container (Gereç Taşıyıcısı) uygulamasında <b>trustedExternalApplication</b> rolünde olmalıdır.<br><br><b>İpucu:</b> Varsayılan olarak, IBM Connections yöneticisi uygun ayrıcalıklara sahiptir. Yönetici kimliğini kullanıcı adı olarak kullanabilirsiniz.",
		admin_collaboration_activity_stream_password: "IBM Connections kullanıcı parolası:",

		admin_help_url: "Son kullanıcı yardımı URL adresi:",
		admin_help_url_hover: "<b>Önemli not:</b> IBM Knowledge Center Customer Installed, IBM Content Navigator Sürüm 3.0.0'dan başlayarak güncellenmeyecektir. Özelleştirilmiş yardımla ilgili daha fazla bilgi için müşteri hizmetlerine başvurun.<br><br>IBM Content Navigator Sürüm 3.0.0 ile başlayarak, son kullanıcı yardımının URL adresi IBM Knowledge Center olanağına gider. IBM Knowledge Center URL adresi şöyledir: http://www.ibm.com/support/knowledgecenter.<br><br>Önceki bir IBM Knowledge Center Customer Installed sürümünü kullanmaya devam etmek istiyorsanız, IBM Content Navigator Configuration and Deployment Tool ile konuşlandırılan IBM Knowledge Center Customer Installed eşgörünümünün URL adresini belirtin. URL adresi istemci makineleri için erişilebilir olmalıdır. URL adresi şu biçimde olmalıdır: http://sunucu_adı:kapı_numarası/kc.<br><br>Sunucu adını ve kapı numarasını, IBM Content Navigator kuruluş dizininin KnowledgeCenter/logs altdizinindeki console.log dosyasından alabilirsiniz.",

		admin_help_default: "IBM tarafından verilen varsayılan yardımı kullan",
		admin_custom_help: "Özel bir yardım sistemini kullan",
		admin_help_kc: "IBM Knowledge Center Customer Installed olanağında özel yardım kullan",
		admin_help_kc_hover: "<b>Önemli not:</b> IBM Knowledge Center Customer Installed, IBM Content Navigator Sürüm 3.0.0'dan başlayarak güncellenmeyecektir. Özelleştirilmiş yardımla ilgili daha fazla bilgi için müşteri hizmetlerine başvurun.<br><br>Önceki bir IBM Knowledge Center Customer Installed sürümünü kullanmaya devam etmek istiyorsanız, önceden konuşlandırılan IBM Knowledge Center Customer Installed eşgörünümüne içerik eklemeye devam etmek için bu seçeneği belirleyin.",
		admin_help_taxonomy: "Taksonomi kodu:",
		admin_help_taxonomy_hover: "Özel yardımınızın taksonomi kodunu belirtin.<br><br>IBM Content Navigator'un taksonomi kodu SSEUEX'tir. Yardımınızın IBM Knowledge Center Customer Installed olanağında farklı bir ürün adı altında görüntülenmesini istiyorsanız, IBM Content Navigator kuruluş dizininin KnowledgeCenter/usr/taxonomy dizini altındaki KC_taxonomy.ditamap dosyasına benzersiz bir taksonomi kodu eklemelisiniz.",
		admin_help_context: "Yardım bağlamı:",
		admin_help_context_hover: "Özel yardımınızın bağlamını belirtin.<br><br>IBM Content Navigator yardımı, IBM Content Navigator kuruluş dizininin KnowledgeCenter/usr/content/com.ibm.usingeuc.doc dizinindedir. Varsayılan yardımın bağlamı com.ibm.usingeuc.doc'tur. Özel yardım vermek istiyorsanız, içeriği KnowledgeCenter/usr/content/ dizini altında yeni bir altdizine ekleyin.",
		admin_help_welcome: "Başlangıç sayfası:",
		admin_help_welcome_hover: "Kullanıcılar yardıma eriştiğinde başlangıç sayfası olarak kullanılmasını istediğiniz konunun adını belirtin. Başlangıç sayfasının konumunu belirten bir özellikler dosyası yaratmalı ve bu dosyayı IBM Content  Navigator kuruluş dizininin KnowledgeCenter/usr/conf dizinine eklemelisiniz.",

		admin_settings_mimetype_extensions_jsonfile: "Mime Tipi Uzantıları JSON Dosyası:",
		admin_settings_mimetype_extensions_jsonfile_hover: "JSON dosyası adını ve dosyanın tam yolunu doğrulayın. Dosya, dosya sistemindeki genel bir dosya ya da JSON dosyasını gösteren bir URL olabilir.  <br><br>JSON dosyası içeriği, Mime tipi tanımlamalarına ilişkin bir dizidir. <br><br>Bir Mime Tipi tanımlaması \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\" adlı dört anahtarı içerir. \"mimeTypes\", \"extensions\" adlı ilk iki anahtar gereklidir; bunlar \",\" ile ayrılmış dizgi dizileri olabilir. \"fileType\", \"iconName\" adlı son iki anahtar isteğe bağlıdır. <br><br>Örnek: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Task Manager Yapılandırması",
		admin_taskmanager_service: "Task Manager hizmeti:",
		admin_taskmanager_service_hover: "Zamanuyumsuz görevler yaratmak ve çalıştırmak için Task Manager hizmetini kullanmak isteyip istemediğinizi belirleyin. <br><br>Bu ayarı değiştirirseniz, değişikliğin yürürlüğe girmesi için IBM Content Navigator web uygulamasını yeniden başlatmalısınız.",
		admin_taskmanager_url: "Task Manager hizmeti URL adresi:",
		admin_taskmanager_url_hover: "Diğer uygulamaların Task Manager hizmetiyle iletişim kurmak için kullanabileceği URL adresini belirtin. URL adresi şu biçimde olmalıdır: http://sunucu_adı:kapı_no/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Task Manager günlük dizini:",
		admin_taskmanager_logdirectory_hover: "Varsayılan olarak, Task Manager hizmeti günlük dosyaları web uygulama sunucusu günlük dosyalarıyla aynı dizine yazılır. <br><br>Günlüğe kaydetme bilgilerinin IBM Content Navigator sunucusunda farklı bir dizine yazılmasını istiyorsanız, Task Manager bileşeni tarafından üretilen günlük dosyalarının saklanacağı dizinin tam olarak nitelenmiş yolunu belirtin. <br><br>Bu ayarı değiştirirseniz, değişikliğin yürürlüğe girmesi için IBM Content Navigator web uygulamasını yeniden başlatmalısınız.",
		admin_taskmanager_heartBeatMonitor: "Küme sağlığı izlemesi",
		admin_taskmanager_heartBeatMonitor_hover: "Yalnızca yüksek kullanılabilirlikli küme ortamları. Bu seçeneği etkinleştirirseniz, Task Manager hizmeti o an kapalı olan düğümlerdeki görevleri çalışır durumdaki düğümlere yönlendirir. <br><br>Bu ayarı değiştirirseniz, değişikliğin yürürlüğe girmesi için IBM Content Navigator web uygulamasını yeniden başlatmalısınız.",

		admin_syncserver_title: "Eşitleme Sunucusu Yapılandırması",
		admin_syncserver_enable: "Sync Services:",
		admin_syncserver_enable_hover: "Bu masaüstüne erişen kullanıcıların öğelerini iş istasyonlarında ve mobil aygıtlarında eşitleyebilmesini isteyip istemediğinizi belirleyin.<br><br><b>Önemli:</b> Bu özeliği kullanabilmek için şu görevleri de tamamlamalısınız:<ul><li>Yönetim aracının <b>Sync Services</b> kısmında <b>Sync Services genel URL adresi</b> değerini belirtin.</li><li>Bu masaüstüne Sync Services olanağının etkinleştirildiği bir havuz ekleyin.</li></ul>Bu seçeneği geçersiz kılar ancak bu masaüstüne Sync Services olanağının etkinleştirildiği bir havuz eklerseniz, havuzdaki ayar yoksayılır.",
		admin_mobileqr_enable: "Oturum açma sayfasında IBM Navigator QR kodunu göster:",
		admin_mobileqr_enable_hover: "Web istemcisi oturum açma sayfasında IBM Navigator mobil uygulamasının QR kodunun görüntülenmesini istiyorsanız bu seçeneği belirleyin.<br><br>Kullanıcı QR kodunu taradığında, IBM Navigator mobil uygulamasını yükleyebileceği, aygıtı için uygun uygulama mağazasına yönlendirilir.",

		admin_streamlineservice_enable: "Edit Service:",
		admin_streamlineservice_enable_hover: "Yalnızca IBM FileNet P8 kullanıcıları. Masaüstü kullanıcılarının iş istasyonlarındaki yerel uygulamalardan kolaylıkla belge ekleyebilmelerini ve belge düzenleyebilmelerini istiyorsanız bu seçeneği etkinleştirin. <br><br>Bu ayarı kullanmak için aşağıdakiler de gereklidir: <ul><li>Bu masaüstüyle ilişkilendirilmiş bir ya da daha fazla havuzda Edit Service hizmetini etkinleştirin.</li><li>Kullanıcı iş istasyonlarına IBM Content Navigator Edit Client istemcisini kurun.</li></ul>",

		admin_repository_general_instructions: "Parametreler, sistem özellikleri, klasörler gibi öğeleri yapılandırmadan önce havuza bağlanmalısınız.",
		admin_repository_system_instructions: "Bu havuzdaki belgeler ve klasörler için hangi sistem özelliklerinin görüntüleneceğini belirtin.",

		admin_desktop_general_create_instructions: "Masaüstü, bir kullanıcının web istemcisinde oturum açınca neleri göreceğini ve neler yapabileceğini belirler. Bir masaüstü yarattıktan sonra, masaüstünün URL adresini kullanıcılara göndererek masaüstüne erişmelerini sağlayabilirsiniz.",
		admin_desktop_admin_instructions: "Yönetim masaüstü, yönetici kullanıcıların web istemcisini ayarlamalarına olanak sağlamak için web istemcisiyle birlikte verilir. Bu masaüstünün, web istemcisi için yapılandırılan tüm havuzlara erişimi vardır.",
		admin_desktop_repositories_instructions: "Kullanıcıların bu masaüstünden erişmesini istediğiniz havuzları belirtin. Havuzları masaüstüne eklemek için önce yapılandırmanız gerekir.<br><br><b>İpucu:</b> Masaüstü yerleşim düzenini yapılandırırken, her özellik için kullanılabilir olacak havuzları sınırlayabilirsiniz.",
		admin_desktop_menus_instructions: "Kullanıcıların bu masaüstünden erişmesini istediğiniz menüleri belirtin. Menüler, arabirimde seçilenlere bağlı olarak hangi eylemlerin kullanılabileceğini belirler.<br><br><b>İpucu:</b> Yönetim aracının <b>Menüler</b> kısmında menülerin içeriğini özelleştirebilir ya da eklentiler yaratma yoluya yeni menü tipleri yaratabilirsiniz.",

		admin_desktop_no_repositories: "Herhangi bir havuz yapılandırılmadı.",

		admin_desktop_id_hover: "Masaüstü tanıtıcısı web istemcisi URL adresine eklenir ve bir kullanıcı web istemcisinde oturum açtığında hangi masaüstünün açıldığını belirtir. Tanıtıcı benzersiz olmalıdır; masaüstünü kaydettikten sonra tanıtıcıyı değiştiremezsiniz.<br><br>Tanıtıcı yalnızca alfasayısal karakterler içerebilir ve büyük ve küçük harfe duyarlıdır.",
		admin_desktop_id_disabled_hover: "Masaüstü tanıtıcısı değiştirilemez. Farklı bir tanıtıcı kullanmak istiyorsanız, yeni bir masaüstü yaratmalısınız.",
		admin_desktop_name_hover: "Masaüstü adı şu karakterleri içeremez: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Yapılandırmanız tek bir varsayılan masaüstü içerebilir.",

		admin_repository_id_disabled_hover: "Havuz tanıtıcısı değiştirilemez. Farklı bir tanıtıcı kullanmak istiyorsanız, yeni bir havuz bağlantısı yaratmalısınız.",
		admin_printService_enable: "IBM Daeja ViewONE yazdırma hizmetini kullanarak yazdır:",
		admin_printService_enable_hover: "IBM Daeja ViewONE yazdırma hizmetini etkinleştirmeyi seçerseniz, belgeler PDF biçimine dönüştürülür ve herhangi bir web tarayıcısı kullanılarak yazdırma tamamlanabilir.<br><br>IBM Daeja ViewONE yazdırma hizmetini geçersiz kılmayı seçerseniz, yalnızca Java uygulamacıklarını destekleyen web tarayıcılarında belge yazdırabilirsiniz.  Bazı web tarayıcıları Java uygulamacıklarını desteklemediğinden uygulamacık yazdırmayı da desteklemez.<br><br>Desteklenen tarayıcılar için belgelere bakın.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Kullanıcı Ana Dizini",
		admin_file_tracking_doc_directory_my_documents: "Kullanıcı Belge Dizini",
		admin_file_tracking_doc_directory_qp: "Nitelenmiş Yol",
		admin_file_tracking_section_tile: "Dosya İzleme Yapılandırması",
		admin_file_tracking_home_path: "Ana Yol",
		admin_file_tracking_my_documents: "Belgelerim",
		admin_file_tracking_exact_path: "Tam olarak nitelenmiş yol:",
		admin_file_tracking_qp: "Nitelenmiş Yol",
		admin_file_tracking_ev: "Ortam Değişkeni",
		admin_file_tracking_ev_us: "Özel Ortam Değişkeni ",
		admin_file_tracking_del_local_copy: "Yerel kopyayı sil:",
		admin_file_tracking_yes: "Evet",
		admin_file_tracking_no: "Hayır",
		admin_file_tracking_del_local_copy_rt_state_editable: "Kullanıcıların bu ayarı geçersiz kılmasına izin ver",
		admin_file_tracking_del_local_copy_rt_state1: "Evet",
		admin_file_tracking_del_local_copy_rt_state2: "Hayır",
		admin_file_Tracking_label: "Dosya izleme:",
		admin_file_Tracking_disable: "Geçersiz Kıl",
		admin_file_Tracking_enable: "Etkinleştir",
		admin_file_tracking_label_hover_help: "Dosya izleme olanağı, belgeleri dışarı almak ve kullanıcıların makinelerindeki belirli bir dizine yüklemek için bir uygulamacık kullanır. Bu uygulamacık, kullanıcılar belgeleri içeri verdiğinde IBM Content Navigator'un kullanıcıların makinelerinde belge bulmasına da olanak sağlar.",
		admin_file_tracking_doc_directory: "Depolama konumu:",
		admin_file_tracking_open_file: "Dosyayı otomatik olarak aç",
		admin_file_Tracking_append_qualified_path: "Dizin ekle",
		admin_file_Tracking_append_qualified_path_hover_help: "Belgelerin belirli bir altdizine kaydedilmesini istiyorsanız, ortam değişkeninin sonuna bir dizin ekleyebilirsiniz. <br/><br/>Örneğin, belgelerin kullanıcının ana dizini içindeki <i>EnterpriseDocuments</i> adlı bir dizine yüklenmesini belirtebilirsiniz.",
		admin_file_Tracking_append_ev: "Ortam değişkeni ekle",
		admin_file_Tracking_append_ev_hover_help: "Belgelerin dinamik olarak belirtilen bir dizine (örneğin, bir kullanıcı dizinine) kaydedilmesini istiyorsanız, bir ortam değişkeni ekleyebilirsiniz.<br/><br/>Örneğin, belgelerin paylaşılan bir ağ dizinindeki <i>kullanıcı_adı</i> altdizinine saklanmasını belirtebilirsiniz. ",
		admin_file_tracking_doc_directory_hover_help: "Belgelerin dışarı alındığında ve karşıdan yüklendiğinde nereye saklanması gerektiğini belirtin.<br/><br/> <b>İpucu</b>: Belgelerin bir kullanıcının ana dizinine ya da varsayılan belge dizinine saklanmasını istiyorsanız, o konumları gösteren önceden tanımlanmış değişkenlerin bulunduğu <b>Ortam değişkeni</b>'ni seçin.",
		admin_file_tracking_qualified_path_hover_help: "Belgelerin saklanmasını istediğiniz dizini ya da ağ dizinini belirtmek için, Windows ya da Mac işletim sisteminiz için uygun dizin yapısını kullanın. <ul><li>Windows için yola bir sürücü adı ekleyin; örneğin, C:\\Kurumsal Belgeler.</li><li>Paylaşılan ağ dizini için yolu şu biçimde girin: \\\\sunucuadı\\dizin</li></ul><br/><b>Önemli:</b> Bu seçeneği kullanmak için, belirteceğiniz dizin yapısı ortamınızdaki tüm istemci iş istasyonlarında yaratılabilir olmalıdır.",
		admin_file_tracking_environment_variable_path_hover_help: "Belgelerin saklanmasını istediğiniz dizini ya da ağ dizinini belirtmek için, Windows ya da Mac işletim sisteminiz için uygun ortam değişkenlerini kullanın. <br/><br/><b>Kullanıcı Ana Dizini</b> seçeneği belgeleri şu dizine saklar:<br/><ul><li>Windows: C:\\Users\\Kullanıcı_adı</li><li>Mac: /Users/Kullanıcı_adı</li></ul><br/><b>Kullanıcı Belge Dizini</b> seçeneği belgeleri şu dizine saklar:<br/><ul><li>Windows: C:\\Users\\Kullanıcı_adı\\Documents</li><li>Mac: /Users/Kullanıcı_adı/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Kullanıcılar havuza belge eklediğinde ya da verdiğinde belgenin yerel kopyasının silinip silinmeyeceğini belirleyin.<br/><br/>Yerel kopyanın silinmesi şunları sağlar:<br/><ul><li>BT ilkelerine uyulmasını güvenceye alma</li><li>Kullanıcıların belgelerin en son sürümüyle çalışmasını güvenceye alma</li></ul><br/><b>Kısıtlama:</b> Kullanıcılar belgeleri sürükleyip bırakarak eklediğinde bu ayar kullanılmaz.<br/><br/>IBM Content Navigator for Microsoft Office için, masaüstünün <b>Office Yapılandırması</b> kısmında <b>Kullanıcılar bir belgeyi eklediğinde, içeri verdiğinde ya da dışarı almayı iptal ettiğinde yerel dosyaları sil</b> seçeneğini belirlemelisiniz.",
		admin_file_tracking_open_file_hover_help: "Bu ayar, kullanıcıların web tarayıcılarında yapılandırılan belge işleme tercihlerini geçersiz kılar. </br></br><b>Kısıtlama:</b> IBM Content Navigator for Microsoft Office bu ayarı kullanmaz.",
		admin_file_tracking_over_write_file: "Yerel kopyanın üzerine yaz:",
		admin_file_tracking_over_write_file_hover_help: "Kullanıcılar belgeleri havuzdan dışarı aldığında belgenin yerel kopyasının üzerine yazılıp yazılmayacağını belirleyin. <br/><br/>Yerel kopyanın üzerine yazılması şunları sağlar:<br/><ul><li>Kullanıcıların belgelerin en son sürümüyle çalışmasını güvenceye alma</li><li>Yerel bir kopya varsa kullanıcıların bilgi istemi almasını engelleme</li></ul> </br></br><b>Kısıtlama:</b> <b>Kullanıcıların bu ayarı geçersiz kılmasına izin ver</b> seçeneğini belirlerseniz, IBM Content Navigator for Microsoft Office bu ayarı kullanmaz.",
		admin_file_tracking_over_write_file_state_editable: "Kullanıcıların bu ayarı geçersiz kılmasına izin ver",
		admin_file_tracking_inline_help: "Dosya izleme, belgelerin havuzdan dışarı alınmasını ve içeri verilmesi işlemlerini kolaylaştırır. Ayrıca, belgelerin kullanıcı makinelerinde nasıl saklanacağını yönetmenizi sağlar. <br/><br/>Dosya izleme, bunlara ek olarak, belgelerin birden çok IBM Content Navigator bileşeninde (web istemcisi ve IBM Content Navigator for Microsoft Office gibi) izlenmesini de sağlar.",

		// Box repository admin...
		admin_box_instructions: "Havuza bağlanmadan önce Standart ya da Sunucu kimlik doğrulamasını etkinleştirmelisiniz.",
		admin_box_use_oauth: "Kimlik Doğrulama Tipi:",
		admin_box_use_oauth_hover: "Box belgelerine IBM Content Navigator'dan erişim sağlarken üretim ortamında Standart ya da Sunucu kimlik doğrulamasını seçin. Bu IBM Content Navigator konuşlandırmasıyla ilişkilendirilmiş istemci_tanıtıcısı ve OAuth2 istemci_güvenlik dizgisi değerlerini belirtin. IBM Content Navigator sunucunuz için Box uygulamasını yarattıktan sonra bu değerleri Box'tan alabilirsiniz.<br/><br/>Geliştirme ortamında Geliştirici kimlik doğrulamasını seçin. Geliştiriciler geliştirici hesaplarını kullanarak Box'ta oturum açabilir ve 60 dakika süreyle geçerli olan bir geliştirici belirteci oluşturabilir. Geliştirici belirteçleri, geliştiricilerin herhangi bir kullanıcı kimliğinin parolası olarak geliştirici belirtecini kullanarak Box'ta oturum açmasına olanak sağlar.",
		admin_box_oauth_client_id: "istemci_tanıtıcısı:",
		admin_box_oauth_client_secret: "istemci_güvenlik_dizgisi:",
		admin_box_oauth_subdomain: "Box kurumsal hesabı alt etki alanı:",
		admin_box_share: "Task Manager bağlantı tanıtıcısı:",
		admin_box_share_hover: "Box'a kopyalama ya da Box paylaşımı için, Task Manager havuzda değişiklik yapan arka plan görevlerini çalıştırmak için bir yönetici kullanıcı kimliği ve parolası kullanır.<br/><br/>Ayarla'yı tıklatın ve geçerli bir Box yöneticisi hesabı kullanarak Box'ta oturum açın.<br/><br/>Bu Box havuzunu paylaşılan dosyaların havuzu olarak seçerek bir masaüstü yapılandırırsanız, Box'ta sınırsız depolama alanı olan bir Box yöneticisi belirtmelisiniz.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Dosyayı otomatik olarak aç",
		file_tracking_runtime_overwrite_hover_help: "Bu seçeneği belirlemezseniz ve yerel dosya sisteminizde aynı adı taşıyan bir belge varsa, belge dışarı alınır, ancak şu eylemlerden biri gerçekleştirilmedikçe karşıdan yüklenmez:<br/><ul><li> Belgeyi varsayılan dizinin bir altdizinine yükleyin. Bir altdizin seçerseniz, web uygulaması belgenin konumunu izleyebilir.</li><li>Karşıdan yükleyeceğiniz belgeyi yeniden adlandırma. Belgeyi yeniden adlandırma dosya adı çakışmalarını önler.</li></ul>",
		open_file: "Dosyayı otomatik olarak aç",
		over_write_file: "Yerel kopyanın üzerine yaz",
		checkout_and_download_file: "Belgeleri Dışarı Al ve Karşıdan Yükle",
		download_to_local_directory: "Buraya yükle:",
		checkout_and_download_button_title: "Dışarı Al ve Karşıya Yükle",
		checkout_without_java_confirmation_dialog: "Dosya karşıdan yüklenemiyor ve dosya izleme özelliğiyle izlenemiyor.",
		browse_for_directory: "Göz At",
		selected_documents: "Seçilen Belgeler",

		checkout_without_java_confirmation_text: "Bu sorun şu nedenlerden ötürü oluşur:<br/><ul><li>İş istasyonunuzda Java Runtime Environment (JRE) kurulu değil.</li><li>Web tarayıcınızda Java eklentisi etkinleştirilmedi.</li><li>Web tarayıcınız Java'yı desteklemiyor.</li></ul><br/><br/>Bu sorunu çözmek için uygun eylemi gerçekleştirin:<br/><br/><ul><li>Dosyayı dosya izleme etkinleştirilmeden karşıdan yüklemeye devam etmek istiyorsanız Tamam düğmesini tıklatın.</li><li>Dosyayı dosya izleme etkinleştirilmiş olarak karşıdan yüklemek istiyorsanız, karşıdan yüklemeyi iptal edin ve iş istasyonunuzda JRE'nin kurulduğunu ve web tarayıcınızda Java eklentisinin etkinleştirildiğini doğrulayın.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Belge dışarı alındı ve karşıdan yüklendi, ancak açılamıyor.",
		runtime_file_tracking_open_error_explanation: "İş istasyonunuzda kurulu olan işletim sistemi bu tipteki dosyaları desteklemiyor.",
		runtime_file_tracking_open_error_userResponse: "Sorunu çözmek için şu eylemlerden birini gerçekleştirin:<br/><br/><ul><li>Belgeyle çalışmanız gerekiyorsa, web istemcisini farklı bir işletim sistemi olan başka bir iş istasyonundan açın.</li><li>Belgeyi yalnızca görüntülemeniz gerekiyorsa, web istemcisinde belgeyi farenin sağ düğmesiyle tıklatıp Aç'ı seçin.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Belge dışarı alındı, ancak karşıdan yüklenmedi.",
		runtime_file_tracking_save_file_error_explanation: "Yerel dosya sisteminizde aynı adı taşıyan bir belge var, ancak o belgenin üzerine yazılmadı. ",
		runtime_file_tracking_save_file_error_userResponse: "Belgeyi havuzdan yüklemek istiyorsanız, bunu yaparken belgenin yerel kopyasının üzerine yazmalısınız.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Belge dışarı alındı, ancak karşıdan yüklenemiyor ya da açılamıyor.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Yerel dosya sisteminizde aynı adı taşıyan bir belge var. Ancak, dosyanın üzerine yazılmadığı için, havuzdaki belge karşıdan yüklenip açılamıyor.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Belgeyi havuzdan yüklemek istiyorsanız, bunu yaparken belgenin yerel kopyasının üzerine yazmalısınız.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Belge karşıdan yüklenemiyor.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Dosyaları izlemek için gereken ${0} ortam değişkeni bu istemci makinesinde tanımlı değil.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Sorunu çözmek için:<br/><br/><ul><li>${0} ortam değişkenini işletim sistemi ortam değişkenlerine ekleyin.</li><li>Web istemcisinde oturum kapatın ve web tarayıcınızı kapatın. Sonra yeniden oturum açın.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Belge karşıdan yüklenemiyor ve dosya izleme uygulamacığıyla izlenemiyor.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Dosya izlemek için gereken ${0} dizini tanımlı değil ve yaratılamıyor.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Bu sorunu çözmek için uygun eylemi gerçekleştirin:<br/><br/><ul><li>Göz At düğmesini tıklatın ve istemci makinesindeki başka bir dizini seçin. Bu seçeneği belirlerseniz dosya izlenmez.</li><li>Sistem yöneticinize başvurun ve dosya izlemek için kullanılmak üzere farklı bir dizin belirtmesini isteyin. Örneğin, belirtilen dizin Windows işletim sistemi için, ancak siz Mac OS kullanıyorsunuz. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Bu masaüstüne farklı işletim sistemleri kullanan aygıtlardan erişiliyorsa, şu eylemlerden birini gerçekleştirerek sorun olasılığını azaltabilirsiniz:<br/><br/><ul><li>İstemci makinelerinde depolama konumunu belirtmek için ortam değişkenlerini kullanın.</li><li>Her aygıt tipinin kullanıcıları için farklı masaüstleri yaratın. Örneğin, Windows işletim sistemi kullanan kullanıcılar için bir masaüstü ve Mac OS kullananlar için bir masaüstü yaratabilirsiniz.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "İsteğiniz işlenemiyor.",
		runtime_file_tracking_generic_error_explanation: "Dosya izleme uygulamacığında hata oluştu.",
		runtime_file_tracking_generic_error_userResponse: "Yardım almak için sistem yöneticinize başvurun.",
		runtime_file_tracking_generic_error_adminResponse: "Java konsolunu açın ve isteğinizi sunmayı yeniden deneyin. Hatanın ayrıntıları Java konsolunda görüntülenir.<br/><br/>Java konsoluna işletim sisteminize göre Denetim Masası'ndan (Windows) ya da Sistem Tercihleri'nden (Macintosh) erişebilirsiniz.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "İsteğiniz işlenemiyor.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Şu dosyalar havuza eklendi, ancak yerel dosya sisteminizden silinmedi: ${0}. Bu durum genellikle, dosyalar açıksa ya da başka bir uygulama tarafından kullanılıyorsa oluşur. Gerekiyorsa, dosyaları elle silebilirsiniz.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Belge karşıdan yüklenemiyor.",
		runtime_file_tracking_ioexception_error_explanation: "Belge karşıdan yüklenemiyor.",
		runtime_file_tracking_ioexception_userResponse: "Şu dizine yazmak için gereken izinleriniz olmayabilir: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Belirtilen dizine yazma izinlerinizin bulunduğunu doğrulayın. Belirtilen dizine yazma izinlerine sahip değilseniz sistem yöneticinize başvurun.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "İsteğiniz işlenemiyor.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Bu hata şu nedenlerden ötürü oluşabilir:<br/><br/><ul><li>Mac OS üzerinde Safari kullanıyorsunuz ve Java güvenli kipte çalışıyor.</li><li>Masaüstünüze ilişkin dosya izleme yapılandırılmasında belirtilen dizin için okuma/yazma izinlerine sahip değilsiniz.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "IBM Content Navigator olanağını dosya izlemesi olmadan kullanmaya devam edebilir ya da sorunu çözmek için şu adımları tamamlayabilirsiniz:<br/><br/><ol><li>Safari'de Java'nın güvenli olmayan kipini etkinleştirin.</li><li>IBM Content Navigator web sitesine güvenmek isteyip istemediğiniz sorulursa, sayfayı yüklemek için <b>Trust</b> (Güven) öğesini tıklatın ve bundan sonra Safari'de Java'nın güvenli olmayan kipini etkinleştirin.</li></ol><br/><br/>Safari doğru yapılandırıldıysa, sorunu çözmek için şu adımları izleyin:<br/><br/><ol><li>Masaüstünüze ilişkin dosya izleme yapılandırılmasında belirtilen dizin için okuma/yazma izinlerine sahip olduğunuzu doğrulayın.</li><li>Dizinde okuma/yazma izinleriniz yoksa, dizine ilişkin izinleri düzenleyin.</li><li>Dizine ilişkin izinlerinizi düzenleyemiyorsanız, yöneticiniz dosya izlemek için yapılandırılan dizini değiştirmeli ya da farklı bir dosya izleme dizini yapılandırılmış bir masaüstü için size erişim vermelidir.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "İsteğiniz işlenemiyor.",
		runtime_file_tracking_java__notfound_error_explanation: "Bu sorun genellikle şu durumlarda oluşur:<br/><br/><ul><li>İş istasyonunuzda Java Runtime Environment (JRE) yok ya da etkinleştirilmedi.</li><li>İş istasyonunuzdaki JRE sürümü IBM Content Navigator sürümüyle uyumlu değil.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "IBM Content Navigator olanağını dosya izlemesi olmadan kullanmaya devam edebilir ya da JRE ile ilgili sorunu çözmek için şu adımları tamamlayabilirsiniz:<br/><br/><ol><li>JRE'nin iş istasyonunuzda kurulu olduğunu doğrulayın.</li><li>İş istasyonunuzdaki JRE sürümünün IBM Content Navigator sürümüyle uyumlu olduğunu doğrulayın. Desteklenen sürümlerin listesini, IBM Software Support sitesindeki <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> adlı belgede bulabilirsiniz.</li><li>JRE'nin iş istasyonunuzda etkinleştirildiğini doğrulayın.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "İsteğiniz işlenemiyor.",
		runtime_file_tracking_security_error_explanation: "Masaüstünüze ilişkin dosya izleme yapılandırılmasında belirtilen dizin için okuma/yazma izinlerine sahip değilsiniz.",
		runtime_file_tracking_security_error_userResponse: "IBM Content Navigator olanağını dosya izlemesi olmadan kullanmaya devam edebilir ya da sistem yöneticinizle birlikte çalışarak şu adımları tamamlayabilirsiniz:<ol><li>Masaüstünüze ilişkin dosya izleme yapılandırılmasında belirtilen dizin için okuma/yazma izinlerine sahip olduğunuzu doğrulayın. </li><li>Dizinde okuma/yazma izinleriniz yoksa, dizine ilişkin izinleri düzenleyin.</li><li>Dizine ilişkin izinlerinizi düzenleyemiyorsanız, yöneticiniz dosya izlemek için yapılandırılan dizini değiştirmeli ya da farklı bir dosya izleme dizini yapılandırılmış bir masaüstü için size erişim vermelidir.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Şu belgeler karşıdan yüklendi: ${0}.",

		admin_file_tracking_inline_help: "Dosya izleme, belgelerin havuza eklenmesi, dışarı alınması ve içeri verilmesi işlemlerini kolaylaştırır. Ayrıca, belgelerin kullanıcıların makinelerinde nasıl saklanacağını yönetmenizi sağlar.<br/><br/>Dosya izleme, bunlara ek olarak, belgelerin birden çok IBM Content Navigator bileşeninde (web istemcisi ve IBM Content Navigator for Microsoft Office gibi) izlenmesini de sağlar.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Menü tanıtıcısı \"Default\" ile başlayamaz.  \"Default\" menü tanıtıcıları için ayrılmış bir önektir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Tanıtıcı yalnızca alfasayısal karakterler içerebilir ve büyük ve küçük harfe duyarlıdır.",
		admin_repository_id_hover: "Havuz tanıtıcısı, hangi havuzda oturum açılacağını belirtmek için web istemcisi URL adreslerine, sık kullanılanlara ve eposta bağlantılarına eklenir. Tanıtıcı benzersiz olmalıdır ve havuzu kaydettikten sonra tanıtıcıyı değiştiremezsiniz.<br><br>Tanıtıcı yalnızca alfasayısal karakterler içerebilir ve büyük ve küçük harfe duyarlıdır.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Ad şu karakterlerin hiçbirini içeremez: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Masaüstü tanıtıcısı boşluk karakterlerini ya da şu karakterlerin hiçbirini içeremez: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Masaüstü adı şu karakterlerin hiçbirini içeremez: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Görüntü adı şu karakterlerin hiçbirini içeremez: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Web istemcisinde kullanıcılara görüntülenecek havuz adını belirtin.<br><br>Ad şu karakterleri içeremez: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Bağlanmak istediğiniz Content Manager OnDemand sunucusunun anasistem adını ya da IP adresini belirtin; örneğin, sunucu.tnt.com.",
		admin_server_p8_name_hover: "Content Engine ya da Content Platform Engine sunucusunun URL adresini belirtin. URL adresi büyük ve küçük harfe duyarlıdır ve şu biçimdedir:<br><br><ul><li>WebSphere Application Server sunucusunda, iiop://anasistem_adı:kapı_numarası/FileNet/Engine. Temel konuşlandırmalarda varsayılan kapı numarası 2809'dur.</li><li>WebLogic Server sunucusunda, t3://anasistem_adı:kapı_numarası/FileNet/Engine. Varsayılan kapı numarası 7001'dir.</li></ul><br><br>Yüksek kullanılabilirlikli Content Engine ve Content Platform Engine yapılandırmaları için, cemp: öneki olmadan, yüksek kullanılabilirlikli EJB iletimi URL adresini kullanın. ",
		admin_server_p8_protocol_hover: "Content Engine ile iletişim için kullanılacak protokolü belirtin.",
		admin_server_cm_name_hover: "Content Manager veritabanının yerel katalog adını ya da kitaplık sunucusu bağlantısı adını belirtin. Bu ad, ICMSERVER değişkeni için belirtilen değerdir.",
		admin_repository_cmis_hover: "Bağlanmak istediğiniz havuzun tanıtıcısını belirtin.  CMIS ortamınızdaki her havuzun tanıtıcısı, AtomPub bağ tanımı hizmeti belgesinde listelenir.  <br/><br/><b>İpucu:</b> Atompub bağ tanımı hizmeti belgesinde tanımlı olan ilk ya da tek havuza bağlanmak için bir yıldız işareti de (*) girebilirsiniz.",
		admin_url_cmis_hover: "URL biçimi hizmet sağlayıcıya göre değişir. URL için CMIS belgelerinize bakın ya da CMIS sunucunuzun yöneticisine başvurun.",
		admin_repcfg_cmis_status_columns_hover: "Durum simgeleri görmek istediğiniz öğe durumlarını belirtin. Durum simgeleri içerik listesinde belgelerin yanında görüntülenir.",
		admin_port_hover: "Content Manager OnDemand sunucusunun dinlediği TCP/IP kapı numarasını belirtin. Varsayılan değer 1445'tir.",
		admin_unified_searches_hover: "Kullanıcıların bu havuzda havuzlar arası aramaları kaydetmelerini isteyip istemediğinizi belirtin.<br/><br/>Bu seçeneği etkinleştirmezseniz, kullanıcılar bu havuza yönelik olarak çalışacak havuzlar arası aramalar yaratabilir. Kullanıcıların havuzlar arası arama yaratmasını masaüstü düzeyinde önleyebilirsiniz.<br/><br/>Havuzlar arası aramaları etkinleştirirseniz, IBM Content Navigator havuzda havuzlar arası arama veri modelini yaratır.<br/><br/>IBM FileNet Content Manager için, bu seçeneği etkinleştirmeden önce havuza Content Engine yöneticisi olarak bağlanmanız gerekir.",
		admin_unified_searches_cm_hover: "Kullanıcıların bu havuzda havuzlar arası aramaları kaydetmelerini isteyip istemediğinizi belirtin.<br/><br/>Bu seçeneği etkinleştirmezseniz, kullanıcılar bu havuza yönelik olarak çalışacak havuzlar arası aramalar yaratabilir. Kullanıcıların havuzlar arası arama yaratmasını masaüstü düzeyinde önleyebilirsiniz.<br/><br/>Havuzlar arası aramaları etkinleştirirseniz, IBM Content Navigator havuzda havuzlar arası arama veri modelini yaratır.",
		admin_max_results_hover: "Bir aramanın döndüreceği sonuçların sayısının sınırlanıp sınırlanmayacağını belirtin. Arama sonuçları sayısını sınırlamazsanız ve arama çok sayıda sonuç döndürürse performans sorunlarıyla karşılaşabilirsiniz.",
		admin_timeout_hover: "Bir aramanın havuzda ne kadar süreyle (saniye olarak) çalışabileceğini belirtin. Arama belirtilen süre içinde tamamlanmazsa, web istemcisi isteği iptal eder. Önerilen zamanaşımı üst sınırı 60 saniyedir.",
		admin_object_store_hover: "Content Engine sunucusunda bağlanmak istediğiniz nesne deposunu belirtin. Simgesel adı Content Platform Engine yönetim konsolundan alabilirsiniz.",
		admin_object_store_display_name_hover: "IBM FileNet P8 iş akışlarını kullanmak istiyorsanız, nesne deposunun görüntü adı gereklidir. Nesne deposunun görüntü adını Content Platform Engine yönetim konsolundan alabilirsiniz.",
		admin_all_searches_hover: "Kullanıcılar havuzda arama yaparken <b>Tüm Aramalar</b> altında görüntülenecek sonuçların sayısının sınırlanıp sınırlanmayacağını belirleyin. Arama sonuçları sayısını sınırlamazsanız ve havuzda çok sayıda kayıtlı arama varsa, performans sorunlarıyla karşılaşabilirsiniz.",

		admin_text_desktop: "Masaüstü",
		admin_text_repository: "Havuz",
		admin_text_plugin: "Eklenti",
		admin_text_theme: "Tema",
		admin_text_menu: "Menü",
		admin_text_reason_code: "Düzelti Nedeni",
		admin_text_redactions: "Düzeltiler",
		admin_text_viewer_mapping: "Görüntüleyici eşlemesi",
		admin_text_mobile_feature: "Mobil özellik",
		admin_test_interface_text: "Arabirim metni",
		admin_text_interface_text_locale: "Yerelleştirilen arabirim metni",
		admin_text_icon_status: "Durum simgesi",
		admin_text_icon: "Simge",
		admin_text_file_type: "Dosya tipi",
		admin_text_viewer: "Görüntüleyici",
		admin_text_desktop_access: "Masaüstü erişimi",
		admin_text_mapped_properties_for_office: "Microsoft Office için eşlenen özellikler",
		admin_text_desktop_features: "Masaüstü Özellikleri",
		admin_text_unknown: "Bilinmiyor",
		admin_folder_instruction: "Kullanıcılar göz atarken içerik listesinde belgeler ve klasörler için görüntülenecek özellikleri belirtin. Özelliklerin görüntüleneceği sırayı da belirtebilirsiniz.",
		admin_search_instruction: "Kullanıcılar arama yarattığında varsayılan olarak hangi seçeneklerin seçili olacağını belirtin.",
		admin_repository_office_conf_class_instruction: "Ortamınızdaki istemci makinelerde IBM Content Navigator for Microsoft Office kuruluysa, belgeler bu havuza eklenirken ya da içeri verilirken belgelerin nasıl işlenmesi gerektiğini belirtebilirsiniz.",
		admin_repository_office_conf_instruction: "Microsoft Office belge özelliklerini bu havuzda tanımlı olan özelliklerle eşleyin.<br/><br/>Bu havuzun ilişkilendirildiği bir masaüstü için özellik eşleme etkinleştirilirse, kullanıcı IBM Content Navigator for Microsoft Office'ten belge eklediğinde, havuzdaki özelliklere veri yerleştirmek için Microsoft Office belgelerinde ayarlanmış özellikler kullanılır.",
		admin_repository_office_conf_prop_mapping_title: "Özellik Eşlemesi",
		admin_repository_office_conf_prop_mapping_title1: "MS Office Integration",
		admin_office_conf_instruction: "İstemci makinelere IBM Content Navigator for Microsoft Office kurulduğunda IBM Content Navigator olanağının Microsoft Office uygulamalarıyla nasıl bütünleşeceğini denetleyebilirsiniz.<br /><br /><b>Önemli:</b> <b>Office özelliklerini eşle…</b> seçeneğini seçerseniz, bu masaüstüyle ilişkilendirilmiş her havuz için özellik eşlemesini yapılandırmanız gerekir. <b>Office Özellikleri</b> sekmesinde, ortamınızdaki her havuz için özellik eşlemelerini yapılandırabilirsiniz.",
		admin_desktop_workflows_instruction: "<b>Yalnızca IBM FileNet P8 sistemleri:</b> Bu masaüstünde hangi uygulama alanlarının görüntüleneceğini belirtin. Seçilen uygulama alanlarının sırası, uygulama alanlarının web istemcisinde görüntüleneceği sırayı belirler.<br><br><b>İpucu:</b> Yönetim aracının <b>Etiketler</b> kısmında yeni adlar belirterek, uygulama alanlarının görüntü adlarını değiştirebilirsiniz.",
		admin_search_filtered_properties_instruction: "Kullanıcıların arama yapmak için kullanabileceği özellikleri belirtin. Kullanıcıların aramada kullanmasını istemediğiniz özellikleri gizleyebilirsiniz.",
		admin_search_filtered_operators_instruction: "Kullanıcıların belirli bir veri tipi (tarih ya da tamsayı gibi) için arama yaparken kullanabileceği işleçleri belirtin. Kullanıcıların seçmesini istemediğiniz işleçleri gizleyebilirsiniz.",
		admin_search_default_search_results_instruction: "Arama sonuçlarında görüntülenecek özellikleri belirtin. Arama sonuçlarında görünmesini istemediğiniz özellikleri gizleyebilirsiniz.",
		admin_search_default_search_results_p8_cmis_instruction: "Arama sonuçlarında belgeler için görüntülenecek özellikleri belirtin. Sonuçlarda görünmesini istemediğiniz özellikleri gizleyebilirsiniz.",

		admin_datetimeOp: "Tarih Saat",
		admin_floatOp: "Kayan noktalı sayı",
		admin_integerOp: "Tamsayı",
		admin_stringOp: "Dizgi",
		admin_binaryOp: "İkili",
		admin_objectOp: "Nesne",
		admin_idOp: "Tanıtıcı",
		admin_userOp: "Kullanıcı",
		admin_booleanOp: "Boole",

		admin_string: "Dizgi",
		admin_long: "Uzun",
		admin_date: "Tarih",
		admin_double: "Çift duyarlıklı sayı",
		admin_object: "Nesne",
		admin_guid: "GUID",
		admin_boolean: "Boole",

		admin_repcfg_heading: "Yapılandırma parametrelerini ayarlayarak, bu havuzun varsayılan davranışını geçersiz kılabilirsiniz.",
		admin_repcfg_heading_od: "Yapılandırma parametrelerini ayarlayarak, bu havuzun varsayılan davranışını geçersiz kılabilirsiniz.<br /><br /><b>Önemli:</b> Web istemcisini Content Manager OnDemand ile kullanmak için, <b>Content Manager OnDemand</b> sekmesinde <b>Ayarlar</b> altında görüntülenen parametrelerin değerlerini de belirtmelisiniz; bu parametreler, bağlandığınız tüm Content Manager OnDemand havuzları için geçerlidir.",
		admin_repcfg_teamspaces: "Ekip alanı yönetimi:",
		admin_repcfg_enable: "Etkinleştir",
		admin_repcfg_disable: "Geçersiz Kıl",

		admin_repcfg_deliver_redacted_pdf_files_as: "Düzeltilen PDF dosyaları şu biçimde teslim edilir:",
		admin_repcfg_burn_pdf_to_pdf: "PDF dosyaları",
		admin_repcfg_burn_pdf_to_tiff: "TIFF dosyaları",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Rol tabanlı düzeltiler uygulayarak düzeltilen bir PDF dosyası, istemciye farklı bir dosya biçiminde teslim edilebilir. Dosya biçimi değiştiğinde dosya uzantısı ve MIME tipi de değişir.<br><br>Örneğin, bir PDF dosyası TIFF dosyası olarak teslim edilirse dosya uzantısı .tiff yapılır.",
		admin_repcfg_redaction_allow_merge_and_split: "Kullanıcıların rol tabanlı düzeltileri olan sayfaları birleştirmesine ve ayırmasına izin ver",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Kullanıcıların rol tabanlı düzeltileri olan sayfaları birleştirmesine ve ayırmasına izin vermek için bu seçeneği belirleyin. Düzelti düzenleyicisi olmayan kullanıcılar rol tabanlı düzeltileri düzenleyemez ve bu seçenek etkinleştirilmiş olsa bile, bu düzenleyicilere rol tabanlı düzeltilerle ilişkili duyarlı verilere erişim verilmez.",
		admin_repcfg_modify_teamspace_roles: "Sahiplerin var olan ekip alanlarına ilişkin rolleri değiştirmesine izin ver",
		admin_repcfg_tm_delete_teamspace: "Sahiplerin içerik de içinde olmak üzere ekip alanını silmelerine olanak sağla",
		admin_repcfg_tm_delete_teamspace_id_missing: "Havuz yöneticisinin kullanıcı adını belirtmelisiniz.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Havuz yöneticisinin parolasını belirtmelisiniz.",
		admin_repcfg_teamspace_display_Recent: "Yalnızca en son değiştirilen ekip alanlarını göster ",
		admin_repcfg_teamspace_display_Recent_value: "Son değişiklikten bu yana gün sayısı:",

		admin_repcfg_folder_selector: "Kök klasör:",
		admin_repcfg_enable_folder_selector: "Etkinleştir",
		admin_repcfg_disable_folder_selector: "Geçersiz Kıl",
		admin_repcfg_SSO: "Tekli oturum açma:",
		admin_repcfg_teamspace_template_permission_text: "Ekip alanı şablonu yaratanlar ata:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Ekip alanı şablonları yaratabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılara ve gruplara, gereken sınıflar ve klasörler üzerinde uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Daha fazla bilgi</a><br/><br/><b>Öneri:</b> Ekip alanı yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Ekip alanı şablonları yaratabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılar uygun erişim denetimi listelerine eklenir ve gereken ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Daha fazla bilgi</a><br/><br/><b>Öneri:</b> Ekip alanı yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_teamspace_permission_text: "Ekip alanı rolleri ata:",
		admin_repcfg_teamspace_permission_hover_p8: "Ekip alanları yaratabilecek ve kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılara, gereken sınıflar ve klasörler üzerinde uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Daha fazla bilgi</a><br/><br/><b>Öneri:</b> Ekip alanı yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_teamspace_permission_hover_cm: "Ekip alanları yaratabilecek ve kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılar uygun erişim denetimi listelerine eklenir ve gereken ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Daha fazla bilgi</a><br/><br/><b>Öneri:</b> Ekip alanı yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_entry_template_permission_text: "Giriş şablonu rolleri ata:",
		admin_repcfg_entry_template_permission_hover_p8: "Giriş şablonları yaratabilecek ve kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılara, Giriş Şablonu belge sınıfı üzerinde uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Daha fazla bilgi</a><br/><br/><b>Öneri:</b> Giriş şablonu yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_entry_template_permission_hover_cm: "Giriş şablonları yaratabilecek ve kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılar uygun erişim denetimi listelerine eklenir ve gereken ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Daha fazla bilgi</a><br /><br /><b>Öneri:</b> Giriş şablonu yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_office_template_permission_text: "Şablon rolleri ata:",
		admin_repcfg_office_template_permission_hover_cm: "Microsoft Office Online ya da Edit Service şablonları yaratabilecek, bunları düzenleyebilecek ve kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılar uygun erişim denetimi listelerine eklenir ve gereken ayrıcalıklar atanır.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a><br /><br /><b>Öneri:</b> Microsoft Office Online ya da Edit Service şablonu yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_draft_permission_text: "Taslak rolleri ata:",
		admin_repcfg_draft_permission_hover_cm: "İşbirliğine yönelik düzenleme sırasında Microsoft Office Online ya da Edit Service belgelerinin taslaklarını yaratabilecek grupları ya da kullanıcıları belirtin. Microsoft Office Online'da ya da Edit Service'te işbirliği kapsamında belge düzenlemesi gereken her kullanıcının taslak yaratmak için uygun ayrıcalıkları olmalıdır. Bu kullanıcılar uygun erişim denetimi listelerine eklenir ve gereken ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a><br /><br /><b>Öneri:</b> Taslak yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_search_permission_text: "Arama rolleri ata:",
		admin_repcfg_search_permission_hover_p8: "Kayıtlı aramalar ve havuzlar arası aramalar yaratabilecek ya da kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılara, gereken sınıflar üzerinde uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Daha fazla bilgi</a><br /><br /><b>Öneri:</b> Arama yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_search_permission_hover_cm: "Kayıtlı aramalar ve havuzlar arası aramalar yaratabilecek, bunları düzenleyebilecek ya da kullanabilecek grupları ya da kullanıcıları belirtin. Bu kullanıcılar uygun erişim denetimi listelerine eklenir ve gereken ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Daha fazla bilgi</a><br /><br /><b>Öneri:</b> Arama yönetimini kolaylaştırmak için grupları kullanın.",
		admin_repcfg_search_permission_title: "Arama Rolleri",
		admin_repcfg_search_permission_intro_text: "Kullanıcıların, rollerini destekleyen bir masaüstüne erişimleri olduğunu doğrulayın. Örneğin, arama yaratanların arama ve havuzlar arası arama yaratabilecekleri bir masaüstüne erişimleri olmalıdır.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Ekip alanı şablonu yöneticileri, havuz (nesne deposu) için <b>Tam Denetim</b> izinleri bulunan kullanıcılardır. Yönetim aracından ekip alanı şablonu yöneticileri listesini değiştiremezsiniz. <p>Ekip alanı şablonu yöneticileri her ekip alanı şablonunu değiştirebilir ya da silebilir. Ekip alanı şablonu yaratan kullanıcının şablonu ekip alanı şablonu yöneticileriyle paylaşması gerekmez.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Bir kullanıcıyı ya da grubu ekip alanı şablonu yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda ekip alanı şablonları yaratmak için uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Daha fazla bilgi</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Yöneticiler ve Yaratanlar ile ilişkilendirilmiş ayrıcalıklardan başka ayrıcalıklar atanmış kullanıcılar ve gruplar.<p>Bu kullanıcıları ve grupları, Diğer rolünden kaldırıp ekip alanı şablonu yaratanlar olarak atayarak, ekip alanı şablonu yaratanlar rolüne taşıyabilirsiniz.<p>IBM Administration Console for Content Engine olanağını kullanarak, bu kullanıcılara ve gruplara verilen ayrıcalıkları gözden geçirebilirsiniz.",
		admin_repcfg_teamspace_administrators_hover_p8: "Ekip alanı yöneticileri, havuz (nesne deposu) için <b>Tam Denetim</b> izinleri bulunan kullanıcılardır. Yönetim aracından ekip alanı yöneticileri listesini değiştiremezsiniz.<p>Ekip alanı yöneticileri her ekip alanını değiştirebilir ya da silebilir. Ekip alanı yaratan kullanıcının ekip alanını ekip alanı yöneticileriyle paylaşması gerekmez.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Bir kullanıcıyı ya da grubu ekip alanı yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda ekip alanı yaratmak için uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Daha fazla bilgi</a>",
		admin_repcfg_teamspace_user_hover_p8: "Bir kullanıcıyı ya da grubu ekip alanı kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda ekip alanlarını kullanmak için uygun güvenlik ayarları atanır. Ancak, kullanıcının ekip alanına erişebilmesi için o ekip alanının üyesi olması gerekir. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Daha fazla bilgi</a><p><b>İpucu:</b> Ortamınızdaki tüm kullanıcıların ekip alanlarını görebilmesini istiyorsanız, ekip alanı kullanıcısı rolüne #AUTHENTICATED-USERS sözde hesabını ekleyebilirsiniz.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Yöneticiler, Yaratanlar ve Kullanıcılar ile ilişkilendirilmiş ayrıcalıklardan başka ayrıcalıklar atanmış kullanıcılar ve gruplar.<p>Bu kullanıcıları ve grupları, Diğer rolünden kaldırıp ekip alanı şablonu rolleri atayarak, önceden tanımlanmış rollere taşıyabilirsiniz.<p>IBM Administration Console for Content Engine olanağını kullanarak, bu kullanıcılara ve gruplara verilen ayrıcalıkları gözden geçirebilirsiniz.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Giriş şablonu yöneticileri, havuz (nesne deposu) için <b>Tam Denetim</b> izinleri bulunan kullanıcılardır. Yönetim aracından giriş şablonu yöneticileri listesini değiştiremezsiniz. <p>Giriş şablonu yöneticileri her giriş şablonunu değiştirebilir ya da silebilir. Giriş şablonu yaratan kullanıcının giriş şablonunu giriş şablonu yöneticileriyle paylaşması gerekmez.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Bir kullanıcıyı ya da grubu giriş şablonu yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda giriş şablonları yaratmak için uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Daha fazla bilgi</a>",
		admin_repcfg_entry_template_user_hover_p8: "Bir kullanıcıyı ya da grubu giriş şablonu kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda giriş şablonlarını kullanmak için uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Daha fazla bilgi</a><p><b>İpucu:</b> Ortamınızdaki tüm kullanıcıların giriş şablonlarını kullanabilmesini istiyorsanız, giriş şablonu kullanıcısı rolüne #AUTHENTICATED-USERS sözde hesabını ekleyebilirsiniz.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Yöneticiler, Yaratanlar ve Kullanıcılar ile ilişkilendirilmiş ayrıcalıklardan başka ayrıcalıklar atanmış kullanıcılar ve gruplar.<p>Bu kullanıcıları ve grupları, Diğer rolünden kaldırıp giriş şablonu rolleri atayarak, önceden tanımlanmış rollere taşıyabilirsiniz.<p>IBM Administration Console for Content Engine olanağını kullanarak, bu kullanıcılara ve gruplara verilen ayrıcalıkları gözden geçirebilirsiniz.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Bir kullanıcıyı ya da grubu ekip alanı şablonu yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda ekip alanı şablonları yaratmak için uygun ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Daha fazla bilgi</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Bir kullanıcıyı ya da grubu ekip alanı yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda ekip alanı yaratmak için uygun ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Daha fazla bilgi</a>",
		admin_repcfg_teamspace_user_hover_cm: "Bir kullanıcıyı ya da grubu ekip alanı kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda ekip alanlarını kullanmak için uygun ayrıcalıklar atanır. Ancak, kullanıcının ekip alanına erişebilmesi için o ekip alanının üyesi olması gerekir. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Daha fazla bilgi</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Bir kullanıcıyı ya da grubu giriş şablonu yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda giriş şablonları yaratmak için uygun ayrıcalıklar atanır. <br/><br/>Ancak, kullanıcının ya da grubun belirli bir giriş şablonu üzerindeki ayrıcalıklarını, o giriş şablonuna ilişkin güvenlik ayarları belirler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Daha fazla bilgi</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Bir kullanıcıyı ya da grubu giriş şablonu düzenleyicisi olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda giriş şablonlarını değiştirmek için uygun ayrıcalıklar atanır. <br/><br/>Ancak, kullanıcının ya da grubun belirli bir giriş şablonu üzerindeki ayrıcalıklarını, o giriş şablonuna ilişkin güvenlik ayarları belirler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Daha fazla bilgi</a>",
		admin_repcfg_entry_user_hover_cm: "Bir kullanıcıyı ya da grubu giriş şablonu kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda giriş şablonlarını kullanmak için uygun ayrıcalıklar atanır. <br/><br/>Ancak, kullanıcının ya da grubun belirli bir giriş şablonu üzerindeki ayrıcalıklarını, o giriş şablonuna ilişkin güvenlik ayarları belirler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Daha fazla bilgi</a>",
		admin_repcfg_office_template_creators_hover_cm: "Bir kullanıcıyı ya da grubu Microsoft Office Online ya da Edit Service şablonu yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda şablon dosyaları yaratmak için uygun ayrıcalıklar atanır. <br/><br/>Ancak, kullanıcının ya da grubun belirli bir şablon dosyası üzerindeki ayrıcalıklarını, o şablona ilişkin güvenlik ayarları belirler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a>",
		admin_repcfg_office_template_editors_hover_cm: "Bir kullanıcıyı ya da grubu Microsoft Office Online ya da Edit Service şablonu düzenleyicisi olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda şablon dosyalarını değiştirmek için uygun ayrıcalıklar atanır.  <br/><br/>Ancak, kullanıcının ya da grubun belirli bir şablon dosyası üzerindeki ayrıcalıklarını, o şablona ilişkin güvenlik ayarları belirler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a>",
		admin_repcfg_office_template_user_hover_cm: "Bir kullanıcıyı ya da grubu Microsoft Office Online ya da Edit Service şablonu kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba web istemcisinden yeni Microsoft Office Online ya da Edit Service belgesi yaratırken şablon uygulamak için uygun ayrıcalıklar atanır.  <br/><br/>Ancak, kullanıcının ya da grubun belirli bir şablon dosyası üzerindeki ayrıcalıklarını, o şablona ilişkin güvenlik ayarları belirler.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a>",
		admin_repcfg_draft_creators_hover_cm: "Microsoft Office Online'da ya da Edit Service'te işbirliği kapsamında belge düzenlemesi gereken her kullanıcıya bu rol atanmalıdır. Kullanıcılara düzenleyici ya da kullanıcı rolleri atamayın. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a>",
		admin_repcfg_draft_editors_hover_cm: "Microsoft Office Online'da ya da Edit Service'te işbirliği kapsamında belge düzenlemesi gereken her kullanıcıya <b>yaratan</b> rolü atanmalıdır. Düzenleyici rolü atanırsa, kullanıcı işbirliğine yönelik düzenleme için gereken taslakları yaratamaz.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a>",
		admin_repcfg_draft_user_hover_cm: "Microsoft Office Online'da ya da Edit Service'te işbirliği kapsamında belge düzenlemesi gereken her kullanıcıya <b>yaratan</b> rolü atanmalıdır. Kullanıcı rolü atanırsa, kullanıcı işbirliğine yönelik düzenleme için gereken taslakları yaratamaz.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Daha fazla bilgi</a>",		
		admin_repcfg_search_others_hover_p8: "Yöneticiler, Yaratanlar ve Kullanıcılar ile ilişkilendirilmiş ayrıcalıklardan başka ayrıcalıklar atanmış kullanıcılar ve gruplar.<p>Bu kullanıcıları ve grupları, Diğer rolünden kaldırıp arama rolleri atayarak, önceden tanımlanmış rollere taşıyabilirsiniz.<p>IBM Administration Console for Content Engine olanağını kullanarak, bu kullanıcılara ve gruplara verilen ayrıcalıkları gözden geçirebilirsiniz.",		
		admin_repcfg_search_admins_hover_p8: "Arama yöneticileri, havuz (nesne deposu) için <b>Tam Denetim</b> izinleri bulunan kullanıcılardır. Yönetim aracından arama yöneticileri listesini değiştiremezsiniz. <br /><br />Arama yöneticileri her aramayı değiştirebilir ya da silebilir. Arama yaratan kullanıcının aramayı arama yöneticileriyle paylaşması gerekmez.",
		admin_repcfg_search_creators_hover_p8: "Bir kullanıcıyı ya da grubu arama yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda arama yaratmak için uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Daha fazla bilgi</a>",
		admin_repcfg_search_user_hover_p8: "Bir kullanıcıyı ya da grubu arama kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda aramaları kullanmak için uygun güvenlik ayarları atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Daha fazla bilgi</a><br /><br /><b>İpucu:</b> Ortamınızdaki tüm kullanıcıların aramaları kullanabilmesini istiyorsanız, arama kullanıcısı rolüne #AUTHENTICATED-USERS sözde hesabını ekleyebilirsiniz.<br/><br />Varsayılan olarak, arama kullanıcısı arama ve havuzlar arası arama yaratabilir, ancak aramaları kaydedemez. Arama kullanıcılarının şu seçeneklerin seçili olduğu bir masaüstünü kullanmasını sağlayarak, bu kullanıcıların arama yaratmasını önleyebilirsiniz:<ul><li><b>Kullanıcıların arama yaratmasını engelle</b></li><li><b>Kullanıcıların havuzlar arası aramalar yaratmasını engelle</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Bir kullanıcıyı ya da grubu arama yaratan olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda arama ve havuzlar arası arama yaratmak ve bu aramaları kaydetmek için uygun ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Daha fazla bilgi</a><br /><br /><b>Önemli:</b> Arama yaratan kullanıcıların şu seçeneklerin seçili olmadığı bir masaüstünü kullandığını doğrulayın:<ul><li><b>Kullanıcıların arama yaratmasını engelle</b></li><li><b>Kullanıcıların havuzlar arası aramalar yaratmasını engelle</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Bir kullanıcıyı ya da grubu arama düzenleyicisi olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda var olan aramaları ve havuzlar arası aramaları değiştirmek için uygun ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Daha fazla bilgi</a><br /><br /><b>İpucu:</b> Varsayılan olarak, arama düzenleyicisi arama ve havuzlar arası arama yaratabilir, ancak aramaları kaydedemez. Arama düzenleyicilerinin şu seçeneklerin seçili olduğu bir masaüstünü kullanmasını sağlayarak, bu kullanıcıların arama yaratmasını önleyebilirsiniz:<ul><li><b>Kullanıcıların arama yaratmasını engelle</b></li><li><b>Kullanıcıların havuzlar arası aramalar yaratmasını engelle</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Bir kullanıcıyı ya da grubu arama kullanıcısı olarak belirlediğinizde, o kullanıcıya ya da gruba havuzda kayıtlı aramaları ve havuzlar arası aramaları açmak ve çalıştırmak için uygun ayrıcalıklar atanır. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Daha fazla bilgi</a><br /><br /><b>İpucu:</b> Varsayılan olarak, arama kullanıcısı arama ve havuzlar arası arama yaratabilir, ancak aramaları kaydedemez. Arama kullanıcılarının şu seçeneklerin seçili olduğu bir masaüstünü kullanmasını sağlayarak, bu kullanıcıların arama yaratmasını önleyebilirsiniz:<ul><li><b>Kullanıcıların arama yaratmasını engelle</b></li><li><b>Kullanıcıların havuzlar arası aramalar yaratmasını engelle</b></li></ul>",
		admin_repcfg_db_encoding: "Sunucu veritabanı karakter kodlaması:",
		admin_repcfg_db_encoding_hover: "IBM Content Manager veritabanlarının varsayılan karakter kodlaması UTF-8'dir.",
		admin_repcfg_db_encoding_specify: "Veritabanı karakter kodlamasını belirtin",
		admin_repcfg_db_encoding_utf8: "UTF-8 kodlaması",
		admin_repcfg_db_encoding_utf8_hover: "UTF-8 ile kodlanmış bir veritabanı kullanıyorsanız bu seçeneği belirleyin. IBM Content Navigator, öğe özellik değeri dizgilerinin uzunluğunu denetlemek için UTF-8 kodlamasını kullanır.",
		admin_repcfg_db_encoding_other: "Diğer kodlama",
		admin_repcfg_db_encoding_other_hover: "UTF-8 ile kodlanmamış bir veritabanı kullanıyorsanız bu seçeneği belirleyin. IBM Content Navigator, öğe özellik değeri dizgilerinin uzunluğunu denetlemek için karakter sayısını kullanır.",
		admin_repcfg_language_codes: "Sunucu dil kodları:",
		admin_repcfg_language_codes_avail: "Kullanılabilir",
		admin_repcfg_language_codes_sel: "Seçilen",
		admin_repcfg_pdf_conversion: "Eklerde PDF belgesine dönüştürülecek MIME tipleri:",
		admin_repcfg_pdf_conversion_avail: "Kullanılabilir",
		admin_repcfg_pdf_conversion_sel: "Seçilen",

		admin_repcfg_box_share_enable_classes_label: "Box paylaşımı desteği için değiştirilecek sınıflar:",
		admin_repcfg_box_share_enable_classes_hover: "Sınıfı, öğe paylaşıldığında dosyanın tanıtıcısını Box'ta saklayacak şekilde değiştirebilirsiniz.",
		admin_repcfg_box_share_enable_classes_warning: "Önemli: Belirteceğiniz tüm sınıflar, Box paylaşımını destekleyecek şekilde değiştirilir. Yaptığınız değişiklikler kaydedildikten sonra sınıflardan kaldırılamaz.<br><br>Sınıfları değiştirmek için, havuza kitaplık sunucusu yöneticisi olarak bağlanmış olmalısınız.",
		admin_repcfg_box_share_enable_classes_available: "Kullanılabilecek Sınıflar",
		admin_repcfg_box_share_enable_classes_selected: "Seçilen Sınıflar",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Box Paylaşım Tanıtıcısını Sakla",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Bu sınıf, Box paylaşım tanıtıcısını saklayacak şekilde önceden değiştirildi. Bu seçeneği kaldıramazsınız.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Sınıfı, öğe paylaşıldığında dosyanın tanıtıcısını Box'ta saklayacak şekilde değiştirin.",

		admin_repcfg_redaction: "Rol tabanlı düzeltiler:",
		admin_repcfg_enable_redaction_hover: "Bu havuzdaki belgelerde rol tabanlı düzeltiler kullanmak isteyip istemediğinizi belirleyin.<br/><br/>Rol tabanlı düzeltiler bir belge karşıdan yüklendiğinde, yazdırıldığında, bir görüntüleyici tarafından görüntülendiğinde ya da küçük resim olarak görüntülendiğinde uygulanır. Belgeyi görüntüleyen kullanıcıların ne görecekleri, rollerine ve ilgili düzelti ilkelerine bağlıdır.",

		admin_repcfg_redaction_policy_permission_text: "İlke düzenleyicileri ata:",
		admin_repcfg_redaction_policy_editors_hover: "Düzelti ilkelerini ve düzelti rollerini yaratacak, değiştirecek ve silecek kullanıcıları ve grupları seçin.",
		admin_repcfg_redaction_policy_editors_select_hover: "Düzelti ilkesi düzenleyicileri düzelti ilkelerini ve düzelti rollerini yaratabilir, değiştirebilir ve silebilir.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Düzelti ilkesi yöneticileri, düzelti ilkesi düzenleyicileri atayabilir.<br/><br/>IBM Administration Console for Content Engine olanağını kullanarak düzelti ilkesi yöneticileri listesini değiştirebilirsiniz.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Düzelti ilkesi yöneticileri, düzelti ilkesi düzenleyicileri atayabilir.<br/><br/>IBM Content Manager sistem yönetimi istemcisini kullanarak düzelti ilkesi yöneticileri listesini değiştirebilirsiniz.",

		admin_repcfg_redaction_permission_text: "Düzelti düzenleyicileri ata:",
		admin_repcfg_redaction_editors_hover: "Rol tabanlı düzeltileri yaratacak, değiştirecek ve silecek kullanıcıları ve grupları seçin. Düzenleyici olacak kullanıcıları ve grupları seçtikten sonra, bu kişilerin ve grupların rol tabanlı düzeltileri düzenleyebilmesi için bunları düzelti ilkelerinde düzenleyici olarak belirtmeniz gerekir.",
   		admin_repcfg_redaction_editors_select_hover: "Düzelti düzenleyicileri, düzelti ilkelerinde de düzenleyici olarak belirtildikten sonra rol tabanlı düzeltileri yaratabilir, değiştirebilir ve silebilir.",
   		admin_repcfg_redaction_administrators_hover_p8: "Düzelti yöneticileri, düzelti düzenleyicileri atayabilir.<br/><br/>IBM Administration Console for Content Engine olanağını kullanarak düzelti yöneticileri listesini değiştirebilirsiniz.",
   		admin_repcfg_redaction_administrators_hover_cm: "Düzelti yöneticileri, düzelti düzenleyicileri atayabilir.<br/><br/>IBM Content Manager sistem yönetimi istemcisini kullanarak düzelti yöneticileri listesini değiştirebilirsiniz.",
		admin_repcfg_entry_template: "Giriş şablonu yönetimi:",
		admin_repcfg_entry_template_enable_classes_label: "Giriş şablonu desteği için değiştirilecek sınıflar:",
		admin_repcfg_oos_reference_attribute_label: "Office Online için başvuru öznitelikleri:",
		admin_repcfg_entry_template_enable_classes_hover: "Önemli: Belirttiğiniz sınıflar, giriş şablonlarını desteklemek üzere değiştirilir. Yaptığınız değişiklikler kaydedildikten sonra sınıflardan kaldırılamaz.<br><br>Sınıfı şu amaçlardan biri ya da her ikisi için değiştirebilirsiniz:<br><ul><li>Öğe eklemek için kullanılan giriş şablonunun tanıtıcısını saklayarak, öğe değiştirildiğinde giriş şablonu ayarlarının uygulanmasını sağlamak</li><li>Yalnızca sıradüzenli klasör sınıfları: Giriş şablonu klasör ilişkilendirmelerini desteklemek</li></ul>Sınıfları değiştirmek için, havuza kitaplık sunucusu yöneticisi olarak bağlanmış olmalısınız.",
		admin_repcfg_entry_template_enable_classes_warning: "Önemli: Belirttiğiniz sınıflar, giriş şablonlarını desteklemek üzere değiştirilir. Yaptığınız değişiklikler kaydedildikten sonra sınıflardan kaldırılamaz.<br><br>Sınıfları değiştirmek için, havuza kitaplık sunucusu yöneticisi olarak bağlanmış olmalısınız.",
		admin_repcfg_entry_template_enable_classes_available: "Kullanılabilecek Sınıflar",
		admin_repcfg_entry_template_enable_classes_selected: "Seçilen Sınıflar",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Giriş Şablonu Tanıtıcısını Kaydet",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Sınıfta değişiklik yaparak, öğe eklemek için kullanılan giriş şablonunun tanıtıcısını saklamasını ve böylelikle öğe değiştirildiğinde giriş şablonu ayarlarının uygulanmasını sağlayabilirsiniz.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Klasör İlişkilendirmelerini Sakla",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Bu sınıfı, giriş şablonu klasör ilişkilendirmelerini destekleyecek şekilde değiştirebilirsiniz. Bu seçenek yalnızca sıradüzenli klasör sınıfları için kullanılabilir.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Bu sınıf, giriş şablonu tanıtıcısını saklayacak şekilde önceden değiştirildi. Bu seçeneği kaldıramazsınız.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Bu sınıf, klasör ilişkilendirmelerini saklayacak şekilde önceden değiştirildi. Bu seçeneği kaldıramazsınız.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Klasör ilişkilendirmelerini saklamak için yalnızca sıradüzenli klasör sınıfları ve sıradüzenli olmayan sınıflar kullanılabilir.",
		admin_repcfg_entry_template_root_folder_association_title: "Kök klasörle ilişkilendirilen giriş şablonları:",
		admin_repcfg_entry_template_root_folder_association_hover: "IBM Content Manager havuzunuzda kök klasörle ilişkilendirmek istediğiniz giriş şablonlarını belirtin.<br /><br />Giriş şablonlarını kök klasörle ilişkilendirirseniz ve kullanıcılar sıradüzenli bir klasöre öğe ekliyorsa, öğe eklemek için her zaman giriş şablonu kullanılır.",
		admin_repcfg_entry_template_root_folder_association_button: "İlişkilendirmeleri Ayarla",
		admin_repcfg_oos_enable_classes_label: "Office Online ve Edit Service desteği için değiştirilecek sınıflar:",
		admin_repcfg_oos_enable_classes_warning: "Önemli: Belirteceğiniz tüm sınıflar, Microsoft Office Online ya da Edit Service ile çalışacak şekilde değiştirilir. Yaptığınız değişiklikler kaydedildikten sonra, her sınıfa otomatik olarak eklenen başvuru özniteliği kaldırılamaz.<br><br>Sınıfları değiştirmek için, havuza kitaplık sunucusu yöneticisi olarak bağlanmış olmalısınız.",
		admin_repcfg_oos_enable_classes_available: "Kullanılabilecek Sınıflar",
		admin_repcfg_oos_enable_classes_selected: "Seçilen Sınıflar",
		admin_repcfg_oos_enable_classes_note: "Önemli:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Bu sınıf Microsoft Office Online ya da Edit Service ile desteklenmiyor.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Sınıfın sürüm ilkesi, Microsoft Office Online ya da Edit Service tarafından desteklenmeyen Her Zaman Sürüm Oluştur olarak ayarlanmış. Farklı bir sınıf seçin.",
		admin_repcfg_download_recording: "Karşıdan yüklemeleri izle:",
		admin_repcfg_download_recording_hover: "Havuzda Social Collaboration Base Extensions eklentisi kuruluysa, karşıdan yüklemeler varsayılan olarak izlenir. Ancak, bu seçeneğin geçersiz kılınması havuzun performansını yükseltebilir.<br><br>Bu seçeneği geçersiz kılarsanız, kullanıcılar seçenek geçersiz kılınmadan önce yapılan karşıdan yüklemeleri görür.",
		admin_repcfg_sync_service: "Sync Services:",
		admin_repcfg_download_ignored: "Belirli kullanıcılar için karşıdan yüklemeleri yoksay:",
		admin_repcfg_download_ignored_hover: "Karşıdan belge yükleyen kullanıcıların sayısının daha doğru olarak yansıtılması için, belirli kullanıcılar (örneğin, yöneticiler ya da sistem hesapları) tarafından istenen karşıdan yüklemeleri yoksayabilirsiniz. Örneğin, aylık rapor oluşturmak için karşıdan içerik yükleyen belirli bir hesap varsa, o hesap tarafından istenen karşıdan yüklemeleri yoksayabilirsiniz.<br><br><b>Kısıtlama:</b> Grupları belirtemezsiniz.",

		admin_repcfg_add_as_major_version: "Ana sürüm olarak ekle:",
		admin_repcfg_enable_add_as_major_version: "Evet",
		admin_repcfg_disable_add_as_major_version: "Hayır",
		admin_repcfg_checkin_as_major_version: "Ana sürüm olarak içeri ver:",
		admin_repcfg_enable_checkin_as_major_version: "Evet",
		admin_repcfg_disable_checkin_as_major_version: "Hayır",
		admin_repcfg_annotation_security: "Ek açıklama güvenliği:",
		admin_repcfg_inherit_annotation_security: "Bulunduran belgenin güvenliğini yinele",
		admin_repcfg_default_annotation_security: "Varsayılan ek açıklama güvenliğini kullan",
		admin_repcfg_connection_point: "İş akışı kapısı:",
		admin_repcfg_include_workflow_definition: "İş akışı tanımlaması sınıfını görüntüle:",
		admin_repcfg_include_form_template: "Form şablonu sınıfını görüntüle:",
		admin_repcfg_enable_include_workflow_definition: "Evet",
		admin_repcfg_disable_include_workflow_definition: "Hayır",

		admin_repcfg_status_columns: "Durum simgeleri:",
		admin_repcfg_status_columns_hover: "Durum simgeleri görmek istediğiniz durumları belirtin. Durum simgeleri içerik listesinde belgelerin, klasörlerin ve iş öğelerinin yanında görüntülenir.",
		admin_repcfg_status_columns_documents_or_folders: "Şu durumlarda simge görüntüle - belgeler ya da klasörler:",
		admin_repcfg_status_columns_documents: "Şu durumlarda simge görüntüle - belgeler:",
		admin_repcfg_status_columns_documents_checked_out: "Dışarı alındığında",
		admin_repcfg_status_columns_documents_declared_records: "Kayıt olarak bildirildiğinde",
		admin_repcfg_status_columns_documents_minor_versions: "İkincil sürümlere sahipse",
		admin_repcfg_status_columns_documents_compound_document: "Bileşik belgelerse",
		admin_repcfg_status_columns_documents_bookmarks: "Yer işaretleri varsa",
		admin_repcfg_status_columns_documents_hold: "Tutuluyorsa",
		admin_repcfg_status_columns_documents_notes: "Notları varsa",
		admin_repcfg_status_columns_work_items: "İş öğeleri şöyle olduğunda simge görüntüle:",
		admin_repcfg_status_columns_work_items_locked: "Kilitlendiğinde",
		admin_repcfg_status_columns_work_items_checked_out: "Dışarı alındığında",
		admin_repcfg_status_columns_work_items_deadline: "Son tarihleri varsa",
		admin_repcfg_status_columns_work_items_suspended: "İşlenmesi askıya alındığında",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF yapılandırma dosyası:",
		admin_repcfg_transform_xml_file: "Özel dönüştürme dosyası:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Etkinleştir",
		admin_repcfg_disable_ssl: "Geçersiz Kıl",
		admin_repcfg_keyringdb_file: "Anahtarlık veritabanı dosyası:",
		admin_repcfg_keyringstash_file: "Anahtarlık parolası dosyası:",
		admin_repcfg_od_sso: "Tekli oturum açma",
		admin_repcfg_od_enable_sso: "Etkinleştir",
		admin_repcfg_od_disable_sso: "Geçersiz Kıl",
		admin_repcfg_od_sso_password: "Parola",
		admin_repcfg_advanced_label: "İleri Düzey",
		admin_repcfg_custom_properties_label: "Özel özellikler:",
		admin_repcfg_new_button_label: "Yeni",
		admin_repcfg_edit_button_label: "Düzenle",
		admin_repcfg_delete_button_label: "Sil",
		admin_repcfg_custom_head1: "Ad",
		admin_repcfg_custom_head2: "Değer",
		admin_repcfg_ecpdialog_title_new: "Yeni Özel Özellik Ekle",
		admin_repcfg_ecpdialog_title_edit: "Özel Özelliği Düzenle",
		admin_repcfg_ecpdialog_name: "Ad:",
		admin_repcfg_ecpdialog_value: "Değer:",
		admin_repcfg_ecpdialog_save: "Kaydet",
		admin_repcfg_ecpdialog_create: "Yaratma",
		admin_repcfg_ecpdialog_cancel: "İptal",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Bu değer gereklidir. Değer boşluk içeremez ve yinelenen bir değer olamaz.",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP kodlamasını kullan:",

		admin_repcfg_task_mgr_proxy: "Task Manager bağlantı tanıtıcısı:",
		admin_repcfg_task_mgr_proxy_hover: "Box paylaşımı ya da Ekip Alanı silinmesi için, Task Manager havuzda değişiklik yapan arka plan görevlerini çalıştırmak için bir yönetici kullanıcı kimliği ve parolası kullanır.<br><br>Ayarla'yı tıklatın ve geçerli bir havuz yöneticisi kullanıcı kimliği ve parolası kullanarak havuzda oturum açın.",
		admin_task_manager_not_enabled_warning: "Bu seçenek Task Manager hizmetini gerektirir, ancak Task Manager hizmeti etkinleştirilmedi.  Ayarlar'ın Genel sayfasında, tüm masaüstleri için Task Manager hizmetini etkinleştirebilirsiniz.",
		admin_task_manager_not_enabled_and_user_warning: "Bu seçenek Task Manager hizmetini gerektirir, ancak Task Manager hizmeti etkinleştirilmedi. Bu sayfada Task Manager bağlantı tanıtıcısını ayarlayın ve Ayarlar'ın Genel sayfasında tüm masaüstleri için Task Manager hizmetini etkinleştirin.",
		admin_task_manager_user_id_pw_not_set_warning: "Bu seçenek Task Manager hizmetini ve yönetici kullanıcı kimliğini ve parolasını gerektirir. Bu sayfada Task Manager bağlantı tanıtıcısını ayarlayın.",
		admin_repcfg_teamspaces_delete_task_id: "Havuz yöneticisi:",
		admin_repcfg_teamspaces_delete_task_password: "Parola:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Task Manager hizmetinin havuzda bir ekip alanını silmesine olanak sağlamak için bir kitaplık sunucusu belirtmelisiniz.",
		admin_repcfg_teamspaces_delete_task_hover: "Varsayılan olarak, kullanıcı bir ekip alanını sildiğinde, ekip alanı gizlenir. Ekip alanındaki tüm klasörler ve belgeler havuzda kalır. <br /> <br />Bu seçeneği etkinleştirdiğinizde, havuzda yalnızca, diğer klasörlerde dosyalanmış olan belgeler kalır.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Ortamınızda çok sayıda ekip alanı varsa, <b>Ekip Alanları</b> sekmesinde bunların hepsinin görüntülenmesi uzun sürebilir. Listeye veri yerleştirmek için gereken süreyi kısaltmak için bu seçeneği belirleyebilirsiniz.<br /><br />Bir kullanıcının belirlediğiniz aralığın dışındaki bir ekip alanıyla çalışması gerekiyorsa, kullanıcı ekip alanını bulmak için <b>Süzgeç</b> alanını kullanabilir.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Bu seçeneği belirlerseniz, bir ekip alanında sahip rolü bulunan kullanıcılar, IBM Content Navigator Sürüm 2.0.2 öncesinde yaratılan ekip alanlarıyla ilişkilendirilmiş rolleri değiştirebilir.<br /><br />Bu seçenek, IBM Content Navigator Sürüm 2.0.2 ile yaratılan ekip alanlarını etkilemez.",
		admin_repcfg_use_teamspaces_cm_hover: "Kullanıcıların bu havuzda ekip alanları ve ekip alanı şablonları havuzlar yaratmasını isteyip istemediğinizi belirleyin.<br /><br /><b>Önemli:</b> Havuz sıradüzenli klasörleri desteklemelidir.<br /><br />Ekip alanlarını etkinleştirirseniz, IBM Content Navigator havuzda ekip alanı veri modelini yaratır. Veri modeli ACL nesnelerini, ayrıcalıkları, ayrıcalık kümelerini ve iki yeni öğe tipini içerir.",
		admin_repcfg_folder_selector_hover: "Kullanıcılar belgeler için sisteme göz atarken kök klasör olarak kullanılmasını istediğiniz klasörü seçin. Havuzunuzda yapılandırılmış sıradüzenli klasörler yoksa, bu ayar kök klasör tanımlayarak göz atmayı desteklemenizi sağlar. Havuzunuzda yapılandırılmış sıradüzenli klasörler varsa, bu ayar havuzda yapılandırılmış kök klasörü geçersiz kılar.",
		admin_repcfg_cm_use_sso_hover: "Güvenilir Oturum Açma ayrıcalık kümesine sahip kullanıcıların tekli oturum açmayı kullanmasına izin verilip verilmeyeceğini belirleyin.<br /><br /><b>Önemli:</b> Bu yapılandırma parametresinin işlev görmesi için, Content Manager sunucusunda tekli oturum açma etkinleştirilmiş ve WebSphere Application Server LTPA için yapılandırılmış olmalıdır.",
		admin_repcfg_cm_direct_retrieve_hover: "Doğrudan alma, web istemcisinin kaynak yöneticisinden hızla içerik almasını sağladığından, varsayılan olarak etkindir. <br /><br />İstemci uygulamasının kaynak yöneticisine doğrudan erişmesini istemiyorsanız ya da web istemcisinin kaynak yöneticisine URL adreslerinden erişmesini engelleyen bir güvenlik duvarınız ya da yetkili sunucunuz varsa, bu seçeneği geçersiz kılabilirsiniz. Örneğin, doğrudan alma etkin olduğunda güvenlik duvarı kullanıcıların uygulamacık görüntüleyicisindeki belgeleri görüntülemesini engelleyebilir.",
		admin_repcfg_cmItemTypesToDisplay: "Kullanıcıların IBM Content Manager sunucunuzdaki kaynak öğesi tiplerini ve öğe tiplerini görmesini istemiyorsanız, yalnızca belge modeli öğesi tiplerini görüntüleyebilirsiniz. Öğe tipleri, kullanıcılar arama yarattığında, belge eklediğinde ve klasör yarattığında görüntülenir.",
		admin_repcfg_cm_language_codes_hover: "Content Manager sunucusundan veri döndürmek için kullanılacak dilleri belirtin. Kullanılabilecek diller listesini, sunucudaki dil tanımlamaları listesi belirler.<br /><br /><b>Dikkat:</b> Web istemcisindeki veriler, kullanıcının web tarayıcısında ayarlı olan dilde görüntülenir.",
		admin_repcfg_cm_pdf_conversion_hover: "Bir kullanıcı birden çok kısımdan oluşan bir belgeyi eposta eki olarak gönderdiğinde PDF'e dönüştürülecek dosya tiplerini belirtin. Tüm kısımlar tek bir PDF belgesi içinde toplanır.",
		admin_repcfg_use_teamspaces_p8_hover: "Kullanıcıların bu havuzda ekip alanları ve ekip alanı şablonları havuzlar yaratmasını isteyip istemediğinizi belirleyin.<br /><br />Ekip alanlarını etkinleştirirseniz, IBM Content Navigator havuzda ekip alanı veri modelini yaratır. Veri modelinde özellik şablonları, özel nesneler, bir klasör nesnesi ve bazı klasörler bulunur.",
		admin_repcfg_use_entry_template_p8_hover: "Kullanıcıların IBM Content Navigator'dan bu havuzda giriş şablonları yaratmasına ve giriş şablonlarını yönetmesine olanak verilip verilmeyeceğini belirleyin. Bu seçeneği etkinleştirmezseniz, kullanıcılar bu havuzda var olan giriş şablonları için arama yapabilir ve o giriş şablonlarını kullanabilir.<br /><br />Giriş şablonu yönetimini etkinleştirirseniz, IBM Content Navigator havuzdaki giriş şablonu veri modelini günceller. Güncelleme yeni özellikleri içerir. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Daha fazla bilgi</a>",
		admin_repcfg_use_entry_template_cm_hover: "Kullanıcıların IBM Content Navigator'dan bu havuzda giriş şablonları yaratmasına ve giriş şablonlarını yönetmesine olanak verilip verilmeyeceğini belirleyin.<br /><br />Giriş şablonu yönetimini etkinleştirirseniz, IBM Content Navigator havuzda giriş şablonu veri modeli yaratır. Veri modelinde yeni bir ACL nesnesi, yeni özellikler ve yeni bir öğe tipi bulunur. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Daha fazla bilgi</a>",
		admin_repcfg_sync_service_p8_hover: "Kullanıcıların sık kullanlan öğelerini iş istasyonlarında ve mobil ayrıtlarında eşitleyebilmesini isteyip istemediğinizi belirleyin.<br><br><b>Önemli:</b> Bu özeliği kullanabilmek için şu görevleri de tamamlamalısınız:<br><ul><li>Yönetim aracının <b>Sync Services</b> kısmında <b>Sync Services genel URL adresi</b> değerini belirtin.</li><li>Bu havuzu Sync Services olanağının etkinleştirildiği bir masaüstüne ekleyin.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Kullanıcılar havuza belge eklediğinde varsayılan olarak ana sürüm seçeneğinin seçili olup olmayacağını belirleyin.<br /><br />Belgeyi ikincil sürüm olarak eklemek isteyen kullanıcılar bu seçeneği temizleyebilir.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Kullanıcılar havuza belge verdiğinde varsayılan olarak ana sürüm seçeneğinin seçili olup olmayacağını belirleyin.<br /><br />Belgeyi ikincil sürüm olarak vermek isteyen kullanıcılar bu seçeneği temizleyebilir.",
		admin_repcfg_p8_annotation_security_hover: "Varsayılan olarak ek açıklamalara uygulanacak güvenlik tipini belirtin.<br /><br />Kullanıcıların ek açıklama güvenliğini değiştirme seçeneği vardır.",
		admin_repcfg_p8_connection_point_hover: "IBM FileNet P8 iş akışlarını kullanmak istiyorsanız, bir Process Engine kapısı seçin. Seçtiğiniz kapı, bu havuza erişen kullanıcıların hangi iş akışlarını kullanabileceğini belirler.",
		admin_repcfg_p8_include_workflow_definition_hover: "Web istemcisinde IBM FileNet P8 iş akışı tanımlaması belge sınıfını görüntülerseniz, kullanıcılar iş akışı tanımlamalarını arayabilir ve havuza iş akışı tanımlamaları ekleyebilir.",
		admin_repcfg_p8_include_form_template_hover: "Web istemcisinde IBM FileNet P8 form şablonu belge sınıfını görüntülerseniz, kullanıcılar form şablonlarını arayabilir ve havuza form şablonları ekleyebilir.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Bu havuza ilişkin AFP2PDF yapılandırma dosyasının web uygulama sunucusundaki tam olarak nitelenmiş yolunu belirtin. AFP verilerini görüntülemek ve yazdırmak için AFP2PDF Transform gereklidir.<br /><br /><b>Dikkat:</b> Bu parametrenin kullanılabilmesi için AFP2PDF Transform kurulu olmalıdır.",
		admin_repcfg_od_transform_xml_file_hover: " Content Manager OnDemand içeriğini dönüştürmek için özel dönüştürme kullanmak istiyorsanız, dönüştürmeyi tanımlamak için kullanılan XML dosyasının tam olarak nitelenmiş yolunu belirtin. XML dosyası web uygulama sunucusunda bulunmalıdır.",
		admin_repcfg_od_ssl_hover: "IBM Content Navigator uygulama sunucusu, Content Manager OnDemand kitaplık sunucusu ve nesne sunucuları arasındaki iletişimi şifrelemek için SSL kullanılıp kullanılmayacağını belirleyin.<br /><br /><b>Önemli:</b> Content Manager OnDemand için SSL'nin etkinleştirilmesi, IBM Content Navigator uygulama sunucusu, web sunucusu ya da kullanıcıların iş istasyonları arasındaki iletişimi kapsamaz.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Bu havuza ilişkin anahtarlık (keyring) veritabanı dosyasının web uygulama sunucusundaki tam olarak nitelenmiş yolunu belirtin. Örnek:  C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Anahtarlık veritabanı dosyası güvenilen kök sertifikalarınızı içerir. Bu dosyaya yetkisiz erişimi önlemek için güçlü dosya sistemi korumasını kullanmalısınız.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Bu havuza ilişkin anahtarlık (keyring) parolası saklama dosyasının web uygulama sunucusundaki tam olarak nitelenmiş yolunu belirtin. Örnek:  C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Anahtarlık parolası saklama dosyası, anahtarlık veritabanı dosyasının parolasını içerir. Bu dosyaya yetkisiz erişimi önlemek için güçlü dosya sistemi korumasını kullanmalısınız.",
		admin_repcfg_od_sso_password_hover: "OnDemand sunucusunda tekli oturum açmak için kullanılacak parolayı belirtin.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API özel özellikleri destekler. Web istemcisinden havuza bağlanırken özel özelliklerden herhangi birini kullanmak istiyorsanız, özel özelliklerin adlarını ve değerlerini belirtin.<br /><br />Desteklenen özel özelliklerle ilgili bilgi için, ODWEK kuruluş dizininin /api altdizininde bulunan ODWEK Java API Javadoc'larına bakın.",
		admin_repcfg_od_custom_properties_name_hover: "Özellik adını girin.",
		admin_repcfg_od_custom_properties_value_hover: "Özellik değerini girin.",
		admin_repcfg_od_use_sso_hover: "Kullanıcıların tekli oturum açmayı kullanmasına izin verilip verilmeyeceğini belirleyin.<br /><br /><b>Önemli:</b> Bu yapılandırma parametresinin işlev görmesi için, Content Manager OnDemand sunucusunda tekli oturum açma etkinleştirilmiş olmalıdır.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Bu CMIS kaynağı için GZIP kodlaması kullanılır.",
		admin_repcfg_cm_use_part_file_name: "Karşıdan belge yüklerken kullanılacak dosya adı:",
		admin_repcfg_cm_use_part_file_name_help: "Kullanıcılar karşıdan belge yüklerken belgelerin dosya adlarının nasıl saptanacağını belirtin.",
		admin_repcfg_cm_use_part_file_name_enable: "Dosya adını kullan",
		admin_repcfg_cm_use_part_file_name_disable: "Öğenin havuzdaki adını kullan",
		admin_repcfg_add_doc_name: "Eklenen bir belgenin varsayılan adı:",
		admin_repcfg_add_doc_name_hover: "Kullanıcılar belgeyi eklemeden önce adı değiştirebilir.",
		admin_repcfg_add_doc_name_empty: "Yok (boşluk)",
		admin_repcfg_add_doc_name_file_name: "Seçilen belgenin dosya adı",

		admin_repcfg_compound_documents: "Bileşik belge özellikleri:",
		admin_repcfg_compound_documents_hover: "Dolaşma gibi, P8 bileşik belge özelliklerini etkinleştirmenizi sağlar.",
		admin_repcfg_cm_action_list_config_enabled: "İş öğesi eylem listesi:",
		admin_repcfg_cm_action_list_config_hover: "Content Manager sistem yönetimi istemcisinde belge yöneltmeyi yapılandırdığınızda, kullanıcının iş öğeleri üzerinde gerçekleştirebileceği eylemlerin listesini belirtebilirsiniz.<br /><br />Content Manager sunucusundaki Eylem Listesi'ni kullanmak istiyorsanız bu seçeneği belirleyin. Bu ayarlar, iş öğesine ilişkin bağlam menüsünde ve Özellikleri Düzenle penceresinde kullanılır.<br /><br /><b>Önemli:</b> Eylem Listesi'ndeki ayarlar, Content Navigator yönetim aracında yapılandırdığınız özelleştirilmiş menüleri geçersiz kılar. Eylem Listesi'nde herhangi bir ayar yoksa, kullanıcı iş öğeleri üzerinde eylem gerçekleştiremez.",

		admin_repcfg_box_share: "Box paylaşımı",
		admin_repcfg_box_share_p8_hover: "Kullanıcıların bu havuzdaki bir belgeyi paylaşmalarına olanak sağlar. Bir belgenin paylaşılması dosyanın Box'a kopyalanmasını, bağlantı yaratılmasını ve bağlantının epostayla gönderilmesini içerir.<br /><br />Box paylaşımını etkinleştirirseniz, IBM Content Navigator havuzda Box paylaşımı veri modelini yaratır. IBM Content Navigator Box paylaşımı eklentisini kurmak için, havuza kitaplık sunucusu yöneticisi olarak bağlanmış olmalısınız.",

		admin_menu_type_icon: "Menu Tipi Simgesi",
		admin_menu_toolbar_hover: "Araç çubuğu",
		admin_menu_toolbar_custom_hover: "Özel araç çubuğu",
		admin_menu_contextMenu_hover: "Bağlam menüsü",
		admin_menu_contextMenu_custom_hover: "Özel bağlam menüsü",

		admin_menu_contextMenu_custom_empty: "Yapılandırılan eklentilerde herhangi bir özel bağlam menüsü tanımlanmadı.",
		admin_menu_toolbar_custom_empty: "Yapılandırılan eklentilerde herhangi bir özel araç çubuğu tanımlanmadı.",

		admin_file_type_category_filters: "Dosya tipi süzgeçleri:",
		admin_file_type_category_filters_hover_help: "Kullanıcıların şu durumlarda kullanabileceği dosya tiplerinin listesini belirtin:<ul><li>IBM Content Navigator for Microsoft Office'te arama ya da göz atma sırasında sonuç listesini daraltmak için<li>Web istemcisindeki bir IBM FileNet P8 havuzunda arama yaparken sonuçların listesini daraltmak için<li>Kullanıcıların giriş şablonu kullanırken havuza ekleyebileceği dosya tiplerini sınırlamak için</ul>",
		admin_file_type_only_use_in_et_folder_association: "Yalnızca Giriş Şablonu Klasör İlişkilendirmelerinde Göster",
		admin_office_config_properties_label: "Office Özellikleri",
		admin_office_config_type_label: "Veri Tipi",
		admin_office_config_mapped_property_label: "Havuz Özelliği",
		admin_office_config_properties_hover_help: "Bir havuz özelliğiyle eşleme istediğiniz her Microsoft Office özelliğini girin ve adını ekleyin. Tüm özelliklerin veri tipi eşleşmelidir",
		admin_office_config_mapped_property_hover_help: "Office Özellikleri'ni birden çok havuz özelliğiyle eşlemek istiyorsanız yeni bir özellik eşlemesi yaratmalısınız",
		admin_new_property_mapping_title: "Yeni Özellik Eşlemesi",
		admin_property_mapping_title: "Özellik Eşlemesini Düzenle",
		admin_property_mapping_instruction: "Havuzdaki bir özellikle eşlemek istediğiniz Microsoft Office özelliklerini belirtin. Office özelliklerinin veri tipi, havuzdaki özelliğin veri tipiyle eşleşmelidir. <br /><br />Bir Office belgesi eşlemedeki özelliklerin birden fazlasını içeriyorsa, IBM Content Navigator havuzda özelliğe veri yerleştirmek için listedeki ilk özelliği kullanır.",
		admin_ms_general_settings: "Genel yapılandırma:",
		admin_ms_delete_local_settings: "Kullanıcılar aşağıdakileri yapınca yerel dosyaları sil:",
		admin_ms_outlook_options: "Outlook bütünleşmesi:",
		admin_ms_enable_props_mapping: "Kullanıcılar aşağıdakileri yapınca Office özelliklerini havuz özellikleriyle eşle:",
		admin_ms_open_doc_when_checkout: "Belge açılınca belgeyi otomatik olarak dışarı al",
		admin_ms_open_doc_when_checkout_hover_help: "Bu seçeneğin belirlenmesi, kullanıcının havuzdaki dosyanın üzerine dosyanın eski bir sürümünü yazmasını önler.",
		admin_ms_prompt_close_office: "Kullanıcılar Office uygulamalarını kapattıklarında belgeleri içeri vermelerini iste",
		admin_ms_prompt_close_office_hover_help: "Bu seçeneğin belirlenmesi kullanıcıların çalışmalarını içeri vermeyi unutmalarını önler.",
		admin_ms_add_with_entry_template_only: "Yalnızca Şablonla Ekle eylemini göster",
		admin_ms_delete_local_on_add: "Kullanıcılar belge ekleyince yerel dosyaları sil",
		admin_ms_delete_local_on_checkin: "Kullanıcılar içeri belge verince ya da dışarı almayı iptal edince yerel dosyaları sil",
		admin_ms_delete_local_on_add_hover_help: "Bir kullanıcı IBM Content Navigator for Microsoft Office'te bir belge eklediğinde, belge havuza eklenir ve kullanıcıların değişiklik yapmak üzere belgeyi hemen dışarı alabilmesi için belgenin yerel kopyası açık kalır.<br /><br />Belge havuza eklendikten sonra belgenin yerel kopyasının otomatik olarak kapatılıp silinmesi için bu seçeneği belirleyin.",
		admin_ms_delete_local_on_checkin_hover_help: "Bir kullanıcı IBM Content Navigator for Microsoft Office'te bir belgeyi içeri verdiğinde, belge havuza verilir ve belgenin yerel kopyası açık kalır. Dışarı almayı iptal etme eylemi kullanıldıktan sonra da belgenin yerel kopyası açık kalır. Yerel kopya açık olduğunda, kullanıcılar değişiklik yapmak üzere belgeyi yeniden dışarı alabilir.<br /><br />Belge içeri verildikten ya da dışarı alma eylemi iptal edildikten sonra belgenin yerel kopyasının otomatik olarak kapatılıp silinmesi için bu seçeneği belirleyin.",
		admin_ms_delete_local_on_save: "Belgeyi kaydet",
		admin_ms_prompt_for_props_on_add: "Kullanıcılardan havuza eposta eklediklerinde özellik değerleri belirtmelerini iste",
		admin_ms_prompt_for_props_on_add_hover_help: "Bu seçeneği belirlemezseniz, web istemcisi havuz için tanımlanmış Outlook özellik eşlemesini kullanır.<br /><br />Epostaların eklendiği klasörle ilişkilendirilmiş giriş şablonlarınız varsa, kullanıcıdan özellik istenmeyebilir.",
		admin_ms_delete_email_on_add: "Eposta havuza eklendiğinde epostayı eposta sunucusundan sil",
		admin_ms_send_email_as_link_only: "Kullanıcıların belgeleri ek olarak göndermelerini engelle",
		admin_ms_send_email_as_link_only_hover_help: "Bu seçeneği belirlerseniz, kullanıcılar belgeleri Outlook'tan ancak bağlantı olarak gönderebilir. Bu seçenek, belgeleri yalnızca havuz için uygun ayrıcalıklara sahip olan kullanıcıların görebilmelerini güvenceye alır.",
		admin_ms_enable_prop_mapping_for_add: "Kullanıcılar belge ekleyince ya da belgeleri içeri verince Office özelliklerini havuz özellikleriyle eşle",
		admin_ms_checkout_document_after_add: "Havuza eklendikten sonra belgeleri otomatik olarak dışarı al",
		admin_no_default_document_type_filtering: "Kullanıcılar arama çalıştırdığında varsayılan olarak tüm belge tiplerini döndür",
		admin_no_default_document_type_filtering_hover_help: "IBM Content Navigator for Microsoft Office'te varsayılan davranış, arama çalıştıran kullanıcıların yalnızca yürürlükteki uygulamaya ilişkin belge tipini görmesidir. Örneğin, Microsoft Word'den arama yapıldığında varsayılan olarak Word belge tipi seçilidir.<br/><br/>Ancak, bu seçeneğin belirlenmesi belge tipleri onay kutularını temizleyerek, kullanıcıların aramanın döndürdüğü tüm belgeleri görmesini sağlar. Kullanıcılar arama çalıştırmadan önce bir ya da daha fazla belge tipi seçerek bu ayarı geçersiz kılabilir.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Microsoft Office belgeleri için tanımlanan belge özelliklerinin havuzda tanımlanan özelliklerle eşlenip eşlenmeyeceğini belirleyin.<br /></br /><b>Önemli:</b> Bu özelliği etkinleştirirseniz, ortamınızdaki her havuz için Office özelliklerini yapılandırmanız gerekir. Office özelliklerini havuz özellikleriyle eşlemezseniz bu özellik çalışmaz.<br /><br />Bu ayar Microsoft Outlook için geçerli değildir.",
		admin_ms_checkout_document_after_add_hover_help: "Belgeler havuza eklendikten sonra kullanıcıların belgelerle çalışması için gereken adımların sayısını azaltmak için bu seçeneği belirleyin.<br /></br /><b>İpucu:</b> Kullanıcıların dosyaları havuza geri vermelerini güvenceye almak için <b>Kullanıcılar Office uygulamalarını kapattıklarında belgeleri içeri vermelerini iste</b> öğesini seçin.",
		admin_ms_show_details_recently_used: "<b>En son kullanılan</b> öğelerin ayrıntılarını göster",
		admin_ms_show_details_recently_used_hover_help: "Varsayılan olarak, en son kullanılan öğelerin listesini görüntülediğinizde, öğelere ilişkin ayrıntılar gizlenerek daha fazla öğenin görüntülenmesi sağlanır. Bu seçeneği belirlediğinizde, en son kullanılan öğeler listesinde varsayılan olarak, ayrıntılar bölmesindeki ilk belgenin ayrıntıları görüntülenir.",
		admin_ms_show_no_permissions_warning: "Belge özelliklerini düzenleyen ya da belgeyi içeri veren kullanıcıların belgenin giriş şablonunu görüntüleme izni yoksa uyarı göster",
		admin_ms_show_no_permissions_warning_hover_help: "Havuzdaki bir belge giriş şablonu kullanılarak yaratıldıysa, ancak kullanıcının belgenin giriş şablonunu görüntüleme izni yoksa, giriş şablonu alınmaz.<br /><br/>Bu nedenle, kullanıcı belge özelliklerini düzenlediğinde, özellikler giriş şablonu kullanılmadan görüntülenir. Kullanıcı belgeyi içeri verdiğinde de, belge giriş şablonu kullanılmadan içeri verilir.<br /><br />Bu eylemler varsayılan olarak, giriş şablonunun kullanılmadığı kullanıcıya bildirilmeden gerçekleşir. Yalnızca, günlük dosyasına bir uyarı kaydedilir.<br /><br />Giriş şablonunun kullanılmadığını kullanıcıya hemen bildiren uyarılar görüntülenmesini istiyorsanız bu seçeneği belirleyin.",
		admin_ms_hide_search_actions: "Arama süzgeçleri kısmını daralt",
		admin_ms_hide_search_actions_hover_help: "Kullanıcılar varsayılan olarak, bir eylem, kullanıcı ya da kullanıcı grubu belirtmek ve işlemin gerçekleşeceği tarihi ya da tarih aralığını seçmek için eylem süzgeci uygulayabilir. Örneğin, yalnızca geçen ay eklediğiniz belgeleri arayabilirsiniz.<br /><br />Kullanıcıların eylem süzgeçleri uygulamasına izin vermek istemiyorsanız, eylem süzgeçlerini gizlemek ve arama ölçütleri tanımlanırken görüntülenen alanların sayısını azaltmak için bu seçeneği belirleyin.",
		admin_ms_hide_save_document: "Şerit çubuğundaki <b>Kaydet</b> seçeneğini gizle",
		admin_ms_hide_save_document_hover_help: "Kullanıcılar <b>Kaydet</b> seçeneğini kullanarak, belgeyi içeri vermeden belge değişikliklerini havuza kaydedebilir.",
		admin_ms_indicate_managed_email_on_add: "Havuza eposta eklenip eklenmediğini göster",
		admin_ms_indicate_managed_email_on_add_hover_help: "Bu seçeneğin belirlenmesi kullanıcıların havuza önceden eposta eklendiğini öğrenmesini sağlayarak, havuza eposta eklenme sayısını azaltabilir.  Bu seçenek belirlendiğinde, Microsoft Outlook'ta IBM ECM adlı yeni bir renk kategorisi yaratılır. Havuza eklenen her eposta, IBM ECM'de Yönetilir kategorisine otomatik olarak eklenir.",
		admin_ms_edit_group_add_command_configuration: "Düzenle grubundaki Ekle seçenekleri:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Şerit çubuğundaki <b>Düzenle</b> grubunun da hangi <b>Ekle</b> seçeneklerini içereceğini belirtin:<ul><li>Ekle düğmesinin ve Düzenle grubundaki tüm Ekle eylemlerinin gösterilmesi için <b>Tüm Ekle seçeneklerini göster</b> öğesini seçin.</li><li>Kullanıcıların havuza belge eklemesini önlemek ya da yalnızca ekip alanı içinden belge eklemesini sağlamak için <b>Tüm Ekle seçeneklerini gizle</b> öğesini seçin.</li><li>Giriş şablonu klasör ilişkilendirmelerini zorunlu kılmak ve kullanıcıların farklı bir giriş şablonu seçmesini önlemek için <b>Şablonla Ekle eylemini gizle</b> öğesini seçin.</li><li>Kullanıcıların giriş şablonlarını kullanarak belge eklemesini zorunlu kılmak için <b>Yalnızca Şablonla Ekle eylemini göster</b> öğesini seçin.</li></ul>",
		admin_ms_show_edit_group_add_button: "Tüm Ekle seçeneklerini göster (varsayılan)",
		admin_ms_hide_edit_group_add_button: "Tüm Ekle seçeneklerini gizle",
		admin_ms_hide_add_with_entry_template: "Şablonla Ekle eylemini gizle",
		admin_ms_managed_in_ecm: "IBM ECM'de Yönetilir",
		admin_ms_managed_in_ecm_hover_help: "Kullanıcılar Microsoft Outlook'ta kategorileri görüntülerse, bir IBM Content Manager ya da IBM FileNet Content Manager havuzuna eklenmiş eposta için bu etiket görüntülenir.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "IBM ECM'de Yönetilir kategori adı virgül (,) ya da noktalı virgül içeremez.",
		admin_delete_open_docs_after_close: "Kullanıcılar belgeleri kapattığında açık belgeleri otomatik olarak sil",
		admin_admin_delete_open_docs_after_close_hover_help: "Bir kullanıcı IBM Content Navigator for Microsoft Office'te bir belgeyi açtığında, belge kullanıcının belge dizinine ya da masaüstüne ilişkin dosya izleme ayarlarında belirtilen konuma yüklenir.<br><br>Açık olan, ancak kullanıcı belgeyi kapattığında dışarı alınmayan dosyaları silmek için bu seçeneği kullanın. Bu seçeneğin belirlenmesi şunları sağlar:<ul><li>BT ilkelerine uyulmasını güvenceye alma</li><li>Kullanıcıların belgelerin en son sürümüyle çalışmasını güvenceye alma</li><li>Belgeleri saklamak için gereken disk alanı miktarını azaltma</li><ul>",
		admin_ms_custom_command_configuration: "Özel komutlar:",
		admin_ms_custom_command_configuration_hover_help: "Microsoft Office uygulamalarındaki IBM Content Navigator for Microsoft Office araç çubuğuna en çok dört komut ekleyebilirsiniz. Komutlar URL adreslerini açmak için kullanılabilir. Örneğin, kullanıcı ve grup aramak için kullanılabilecek bir hizmeti açacak bir komut ekleyebilirsiniz.",
		admin_ms_custom_command_dialog_title: "Düzenle özel komutu",
		admin_ms_custom_command_dialog_intro_text: "Microsoft Office uygulamalarındaki IBM Content Navigator for Microsoft Office araç çubuğundan bir URL adresini açmak için kullanılabilecek bir komut tanımlayın.",
		admin_ms_custom_command_id: "${0} Komutu",
		admin_ms_custom_command_available_label: "Kullanılabilir",
		admin_ms_custom_command_available_hover_help: "Komut için tanımlanan URL adresinin bakım amacıyla çevrimdışına çıkarılması gerekirse, komutun Microsoft Office'te görüntülenmemesi için komuta ilişkin onay kutusunu temizleyebilirsiniz.<br/><br/><b>Önemli:</b> Değişikliklerin IBM Content Navigator for Microsoft Office'e yansıtılması için kullanıcılar masaüstünde oturum kapatmalıdır.",
		admin_ms_custom_command_command_id_label: "Komut Tanıtıcısı",
		admin_ms_custom_command_id_label: "Tanıtıcı",
		admin_ms_custom_command_label_label: "Etiket",
		admin_ms_custom_command_label_hover_help: "Microsoft Office'te komut için görüntülenecek etiketi belirtin.",
		admin_ms_custom_command_description_label: "Tanım",
		admin_ms_custom_command_description_hover_help: "Microsoft Office'te komut için görüntülenecek tanımı belirtin.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Microsoft Office'ten açılacak tam olarak nitelenmiş URL adresini belirtin. URL adresi bir web sayfasına ya da hizmete ilişkin olabilir.",
		admin_ms_custom_command_icon_label: "Simge",
		admin_ms_custom_command_icon_hover_help: "Görüntülenecek simgenin dosya adını belirtin; örneğin, CommandIcon.png.<br/><br/><b>Önemli:</b> Simge dosyasını, her istemci makinesinde IBM Content Navigator for Microsoft Office kuruluş dizininin Plugins altdizinine eklemeniz gerekir.<br/><br/>Simge dosyası Plugins dizininde olmazsa ya da simge belirtmezseniz, varsayılan simge olan customButtonIcon_38.gif görüntülenir.",
		admin_ms_custom_command_group_name: "Grup etiketi:",
		admin_ms_custom_command_group_name_hover_help: "Şerit çubuğundaki özel komutların altında görüntülenecek bir grup etiketi belirtebilirsiniz.<br/><br/>Etiket belirtmezseniz, grup etiketi <b>Özel Komutlar</b> olur.",
		admin_ms_ribbon_tab_label: "IBM ECM sekmesi etiketi:",
		admin_ms_ribbon_tab_hover_help: "Microsoft Office şerit çubuğunda IBM Content Navigator for Microsoft Office sekmesi için görüntülenmesini istediğiniz adı girin. Ad belirtmezseniz, sekmenin adı \"IBM ECM\" olur.",
		admin_ms_close_task_pane_on_open: "Kullanıcılar belgeleri açtığında görev bölmesini kapat",
		admin_ms_close_task_pane_on_open_hover_help: "Microsoft Office'te kullanıcıların belgeleri görebileceği alanı en üst düzeye çıkarmak için bu seçeneği belirleyin.<br/><br/>Microsoft Office 2010 kullanıcıları: Görev bölmesinin tüm belgeler için kapalı olmasını sağlamak için, <b>Seçenekler</b> &gt; <b>Gelişmiş</b> öğelerini tıklatarak ve <b>Görev çubuğunda tüm pencereleri göster</b> öğesini temizleyerek çoklu belge arabirimi (MDI) kipini etkinleştirin.",
		admin_ms_open_document_options: "Belge açma seçenekleri:",
		admin_ms_delete_local_file_options: "Yerel dosyayı silme seçenekleri:",
		admin_ms_add_and_checkin_options: "Ekleme ve içeri verme seçenekleri:",
		admin_ms_search_options: "Arama seçenekleri:",
		admin_ms_display_options: "Görüntüleme seçenekleri:",
		admin_ms_bidirection_enable_label: "İki yönlü metin desteğini etkinleştir",
		admin_ms_bidirection_enable_hover_help: "Kullanıcıların IBM Content Navigator for Microsoft Office'te soldan sağa dışında bir yönde metin girmesine ya da görüntülemesine olanak vermek istiyorsanız bu seçeneği belirleyin.",
		admin_ms_text_direction_label: "İçerik için temel metin yönü:",
		admin_ms_text_direction_hover_help: "IBM Content Navigator for Microsoft Office'teki giriş alanlarına metin girilirken kullanılacak yönü belirtin. Klasör adı ya da özellik değeri gibi öğelerin nasıl görüntüleneceğini de bu ayar denetler.",
		admin_ms_control_threshold_label: "Önden okumayı etkinleştirmek için öğe sayısı alt sınırı:",
		admin_ms_control_threshold_hover_help: "Öğelerin sayısı 50'den büyük ya da 50 ise, açılan bir listede önceden tanımlı değerleri olan özelliklerin aranması ya da ayarlanması için varsayılan olarak önden okuma etkinleştirilir. Değer alt sınırını değiştirebilirsiniz.",

		admin_ms_default_email_class: "Eposta eklenirken kullanılacak sınıf",
		admin_ms_default_email_class_hover_help: "Microsoft Outlook'tan bu havuza eklenen her eposta, belirttiğiniz sınıfa eklenir. Kullanıcılar sınıfı değiştiremez.",
		admin_ms_default_folder_class: "Klasör yaratılırken kullanılacak sınıf",
		admin_ms_default_folder_class_hover_help: "Bir Microsoft Outlook uygulamasından bu havuzda yaratılan her klasör, belirttiğiniz sınıfa eklenir.  Kullanıcılar sınıfı değiştiremez.",
		admin_ms_default_folder_warn_title: "${0} sınıfını, klasör yaratılırken kullanılacak sınıf olarak kullanamazsınız.",
		admin_ms_default_folder_warn_name_prop_invalid: "Sınıfın ad özelliği dizgi değil, klasörün adı bir dizgi olmalıdır.<br />Klasör yaratılırken kullanılmak üzere farklı bir klasör seçin ya da IBM Content Manager yöneticinizle çalışarak sınıfın ad özelliğini dizgi olarak değiştirin.",
		admin_ms_default_folder_warn_req_props: "Sınıf, değeri olmayan gerekli özellikler içeriyor. Ancak, kullanıcılar IBM Content Navigator for Microsoft Office'ten klasör yarattıklarında gerekli özellikler için değer belirtemezler.<br />Klasör yaratılırken kullanılmak üzere farklı bir sınıf seçin ya da IBM Content Manager yöneticinizle birlikte çalışarak gerekli özellikleri isteğe bağlı özellik yapın ya da gerekli özelliklere değer yerleştirin.",
		admin_ms_delimiter_for_office_properties: "Çok değerli dizgi özellikleri için sınırlayıcı",
		admin_ms_delimiter_for_office_properties_hover_help: "Çok değerli dizgi özellikleriyle eşleyeceğiniz dizgi özellikleri için kullanılacak karakterleri belirtin. Varsayılan olarak, değerleri ayıran sınırlayıcı olarak noktalı virgül (;) kullanarak bir değer kümesini çok değerli bir dizi özelliğine atayabilirsiniz. Ancak, dizgi değerlerinizden biri noktalı virgül içeriyorsa, sınırlayıcı farklı bir karaktere çevrilmedikçe, o dizgiyi ekleyemezsiniz. Örneğin, sınırlayıcıyı virgüle (,) çevirebilirsiniz.",
		admin_ms_outlookPropertyRemembrance : "İletiler ve ekler eklerken ayarları anımsa",
		admin_ms_outlookPropertyRemembrance_hover_help : "İletilere ve eklere atanmış özellik değerleri, konum, sınıf seçimi ve güvenlik anımsanır ve ileride öğe eklenirken bunlar varsayılan ayar olarak kullanılır.",

		admin_file_type_name_hover_help: "Ad beliren yardımı",
		admin_file_type_description_hover_help: "Tanım beliren yardımı",
		admin_file_type_dialog_title: "Dosya Tipi Süzgecini Düzenle",
		admin_new_file_type_dialog_title: "Yeni Dosya Tipi Süzgeci",
		admin_mobile_feature_dialog_title: "Özellik",
		admin_mobile_feature_dialog_new_title: "Yeni Özellik",
		admin_file_type_instructions: "Kullanıcıların arama sonucu listelerini daraltmak için kullanabilecekleri bir süzgeç yaratın. Birden çok MIME tipini süzgeçle eşleyebilirsiniz.",
		admin_file_type_filter_place_holder: "MIME tiplerine süzgeç uygula",
		admin_new_button_label: "Yeni",
		admin_edit_button_label: "Düzenle",
		admin_delete_button_label: "Sil",
		admin_copy_button_label: "Kopyala",
		admin_verify_button_label: "Doğrula",
		admin_availabe_filters_label: "Kullanılabilecek Süzgeçler",
		admin_selected_filters_label: "Seçilen Süzgeçler",

		admin_mobile_access: "Mobil uygulama erişimi:",
		admin_mobile_access_hover_help: "IBM Content Navigator olanağının mobil aygıttan kullanılmasını istiyorsanız, kullanıcıların bu masaüstüne mobil uygulamadan erişmelerini etkinleştirmeniz önerilir.<br /><br />Mobil uygulamadan bu masaüstüne erişimi geçersiz kılarsanız, kullanıcılar web istemcisine mobil tarayıcılarından erişebilir. Ancak, web istemcisi mobil aygıtlardan erişilmek üzere tasarlanmamıştır.",

		admin_mobile_access_allow_label: "Kullanıcıların aşağıdakileri yapmasına izin ver:",
		admin_mobile_allow_add_photos: "Fotoğraf makinesinden ve fotoğraf kitaplığından fotoğraf ekleme",
		admin_mobile_allow_add_docs: "Havuza belge ekleme ve klasör yaratma",
		admin_mobile_allow_open_docs: "Belgeleri başka uygulamalarda açma",
		admin_mobile_allow_add_docs_hover_help: "Kullanıcılar, diğer mobil uygulamalardan klasör yaratabilir ve belge ekleyebilir (epostaya ekli bir belge gibi).",
		admin_mobile_allow_open_docs_hover_help: "Kullanıcılardan seçilen belgeyi görüntülemek için kullanılacak uygulamayı seçmeleri istenir. Tek bir uygulama varsa, o uygulama kullanılır.",
		admin_mobile_features: "Özellikler:",
		admin_mobile_features_hover_help: "IBM Content Navigator mobil uygulamasında bu masaüstünün hangi özelliklerinin görüntüleneceğini belirtin.",
		admin_mobile_new_feature_button_label: "Yeni Özellik",
		admin_mobile_move_up_button_label: "Yukarı Taşı",
		admin_mobile_move_down_button_label: "Aşağı Taşı",
		admin_desktop_mobile_instructions: "Mobil ayarlar yönergesi buraya eklenir",
		admin_desktop_max_number_of_docs_to_add: "Eklenecek belge sayısı üst sınırı:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Kullanıcıların bir kerede en çok kaç belge ekleyebileceklerini belirtin. Varsayılan üst sınır 50'dir. Ancak, üst sınır değerini 300'e kadar belirtebilirsiniz.",
		admin_desktop_max_number_of_docs_to_modify: "Değiştirilecek öğe sayısı üst sınırı:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Kullanıcıların bir kerede en çok kaç öğeyi değiştirebileceklerini belirtin. Varsayılan üst sınır 50'dir. Ancak, üst sınır değerini 300'e kadar belirtebilirsiniz.",
		admin_desktop_max_conversion_size: "PDF dönüştürmeleri için veri miktarı üst sınırı (MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Kısıtlama:</b> IBM Content Manager OnDemand'da bu ayar desteklenmez.<br/><br/>PDF'e dönüştürülebilecek veri miktarı üst sınırını belirtin. Bu sınır, kullanıcılar öğeleri PDF dosyası olarak karşıdan yüklerken ya da PDF dosyası olarak epostayla gönderirken uygulanır.<br /><br />Her belgenin büyüklüğü saptanamıyorsa, belgeler yine de PDF'e dönüştürülür.<br/><br/>Varsayılan sınır 200 MB'dir. Sınırı 200 MB üzerinde ayarlamak sistemin performansını olumsuz etkileyebilir.",
		admin_desktop_timeProperties: "Zaman damgası:",
		admin_desktop_time_properties_hover_help: "<b>Yalnızca IBM FileNet P8 kullanıcıları:</b> Bu ayar özel özellikler için geçerlidir; sistem özellikleri için geçerli değildir. Örneğin, <b>Zaman damgasının yalnızca tarih kısmını görüntüle</b> seçeneğini belirlerseniz, Değiştirme özelliği zaman damgasının saat kısmını da göstermeye devam eder.<br/><br/>Bu ayar, havuzdaki zaman damgasını değiştirmez.",
		admin_desktop_disable_time_stamp: "Tüm zaman damgasını görüntüle",
		admin_desktop_enable_time_stamp: "Zaman damgasının yalnızca tarih kısmını görüntüle",
		admin_desktop_timezone: "Saat dilimi:",
		admin_desktop_timezone_localuser: "Kullanıcının yerel saat dilimini görüntüle",
		admin_desktop_timezone_alluser: "Tüm kullanıcılar için aynı saat dilimini görüntüle",
		admin_desktop_timezone_hover_help: "Kullanıcıların yerel saat dilimlerine dayalı bir zaman damgası mı göreceğini, yoksa tüm kullanıcıların aynı zaman damgasını mı göreceğini belirleyebilirsiniz.<br/><br/>Bu ayar, havuzdaki zaman damgasını değiştirmez. Ancak, kullanıcılar öğe eklediğinde ya da öğeleri değiştirdiğinde havuzda zaman damgası yaratmak için kullanılacak saat dilimini, seçtiğiniz ayar belirler.",
		admin_desktop_mobile_feature_display_label: "Görüntü",
		admin_desktop_mobile_feature_icon_file_label: "Simge Dosyası",
		admin_mobile_feature_dialog_icon_file_label: "Simge Dosyası:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Ad",
		admin_desktop_mobile_select_feature_label: "Özellik Seç",
		admin_desktop_mobile_feature_icon_label: "Özellik Simgesi",
		admin_desktop_share_admin_none: "Sistem yöneticisi ayarlanmadı.",
		admin_desktop_share_admin_edit_label: "Sistem Yöneticisi Ayarla...",
		admin_browse_icon: "Göz Atma Simgesi",
		admin_search_icon: "Arama Simgesi",
		admin_favorites_icon: "Sık Kullanılanlar Simgesi",
		admin_casesearch_icon: "Vaka Simgesi",
		admin_datacap_icon: "Veri Yakalama Simgesi",
		admin_system_defined: "Sistem Tanımlı",
		admin_icon_file_placeholder_text: "Dosya Konumu (örn. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Kök",
		admin_folder_default: "Varsayılan",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Araç çubukları",
		admin_menu_context_menus: "Bağlam Menüleri",
		admin_menu_office_toolbars: "Microsoft Office Şerit Çubuk Komutları",
		admin_menu_office_menus: "Microsoft Office Bağlam Menüleri",

		admin_file_name_label: "Dosya adı:",
		admin_exportconfiguration_security_label: "Bu masaüstünü kullanmaya yetkili kullanıcıları ve grupları içer",
		admin_exportconfiguration_instruction: "Seçilen masaüstleriyle ilişkilendirilmiş havuz yapılandırmaları ve eklenti yapılandırmaları da içinde olmak üzere, masaüstlerinizi başka bir IBM Content Navigator eşgörünümüne (içe) aktarabileceğiniz bir dosyaya (dışa) aktarabilirsiniz.",
		admin_exportconfiguration_dialog_label: "Masaüstünü Dışa Aktar",
		admin_exportconfiguration_button_label: "Dışa Aktar",
		admin_dialog_select_all: "Tümünü Seç",
		admin_dialog_deselect_all: "Tümünü Temizle",

		admin_importconfiguration_instruction: "Seçilen yapılandırma dosyasındaki öğeler bu sisteme aktarılacak. Ancak, sistemde tanıtıcısı aynı olan bir öğe varsa, öğenin korunmasına ya da üzerine yazılmasına karar vermelisiniz.",
		admin_importconfiguration_dialog_label: "Masaüstünü İçe Aktar",
		admin_importconfiguration_reason_dialog_label: "Düzelti Nedenlerini İçe Aktar",
		admin_importconfiguration_button_label: "Al",
		admin_to_be_imported: "İçe Aktarılacak Yapılandırma Öğesi",
		admin_on_target_system: "Hedef Sistemde Var Olan Öğe",
		admin_import_short_warning_message: "Aşağıdaki öğeler bu sistemde zaten var. Bu sistemde diğerleriyle değiştirmek istediğiniz öğeleri seçin:",
		admin_import_warning_message: "Aşağıdaki yapılandırma öğelerinin tanıtıcıları, hedef sistemde var olan öğelerin tanıtıcılarıyla aynı. Yalnızca, içe aktarılmasını ve hedef sistemde üzerine yazılmasını istediğiniz öğeleri seçin.<br /><br />Bir yapılandırma öğesinin üzerine yazılmasını istemiyorsanız, masaüstünü dışa aktardığınız eşgörünümde öğenin bir kopyasını yaratın, öğeye farklı bir tanıcıyı atayın ve öğeyi masaüstüyle ilişkilendirin. Masaüstünü yeniden dışa aktardıktan sonra, bu eşgörünümde yeniden (içe) aktarın.",
		admin_choose_file_to_import_label: "İçe aktarmak için dosya seçin:",
		admin_download_imported_log: "Raporu Karşıdan Yükle",
		admin_desktop_import_summary: "Masaüstü İçe Aktarma Özeti",
		admin_reason_import_summary: "Düzelti Nedeni İçe Aktarma Özeti",
		admin_rba_import_summary: "Yönetim Rolü İçe Aktarma Özeti",
		admin_import_open_tabs_checking: "Masaüstlerini içe aktarabilmek için, yönetim aracında <bold>Masaüstleri</bold> dışındaki tüm sekmeleri kapatmalısınız.",
		admin_import_no_conflict: "Şu öğeler içe aktarılacak:",
		admin_desktop_invalid: "Masaüstü geçersiz",
		admin_desktop_warning: "Masaüstü uyarılarla kaydedildi.",
		admin_repos_warning: "Havuz uyarılarla kaydedildi.",
		admin_config_type_icon: "Yapılandırma Öğesi Tipi Simgesi",

		admin_approval_workflow: "Onay İş Akışı",
		admin_approval_workflow_hover: "Kullanıcıların önceden tanımlanmış bir onay iş akışı başlatmasını sağlar. Kullanıcıların bir aboneliğin tanımladığı özel bir onay iş akışı başlatmasına olanak sağlamak için onay iş akışını geçersiz kılabilirsiniz. Varsayılan olarak onay iş akışı etkinleştirilmiştir.<br><br><b>Önemli:</b> Onay iş akışını etkinleştirirseniz, önceden tanımlanmış iş akışı tanımlamalarından birinin ya da her ikisinin (ICNParallelDocumentApproval.pep ve ICNSequentialDocumentApproval.pep) havuza eklendiğini ve Content Process Engine olanağına aktarıldığını da doğrulamanız gerekir.",

		admin_cannot_add_desktop_members_error: "Bu masaüstüne erişimi olan kullanıcıları ve grupları belirtemezsiniz.",
		admin_cannot_add_desktop_members_error_explanation: "Kullanıcı ve grup bilgilerini almak için gereken izinlere sahip değilsiniz.",
		admin_cannot_add_desktop_members_error_userResponse: "Farklı bir kullanıcı adıyla oturum açın ya da IBM Content Manager sistem yöneticinizden kullanıcı ve grup bilgilerini almak için gerekli olan UserACLOwner ayrıcalığını vermesini isteyin.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Kullanıcı ve grup seçemezsiniz.",
		admin_cannot_select_users_groups_error_explanation: "Kullanıcı ve grup bilgilerini almak için gereken izinlere sahip değilsiniz.",
		admin_cannot_select_users_groups_error_userResponse: "Farklı bir kullanıcı adıyla oturum açın ya da IBM Content Manager sistem yöneticinizden kullanıcı ve grup bilgilerini almak için gerekli olan UserACLOwner ayrıcalığını vermesini isteyin.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2 istemcisi bulunamadı.",
		oauth_client_not_found_error_explanation: "OAuth2 istemci tanıtıcısı ${0} bulunamadı.",
		oauth_client_not_found_error_userResponse: "Sistem yöneticinizle bağlantı kurarak OAuth2 istemci tanıtıcısının bulunamadığını bildirin.",
		oauth_client_not_found_error_adminResponse: "Havuz yapılandırmasını gözden geçirin ve doğru OAuth2 istemci tanıtıcısını içerdiğini doğrulayın.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "istemci_tanıtıcısı",

		oauth_login_failed_error: "Havuzda oturum açma başarısız oldu.",
		oauth_login_failed_error_explanation: "${0} havuzunda oturum açma girişimi başarısız oldu.",
		oauth_login_failed_error_userResponse: "Kullanıcı kimliğinin ve parolanın doğru olduğunu doğrulayın ve oturum açmayı yeniden deneyin.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "havuz_tanıtıcısı",

		oauth_error_return_error: "${0} içinde oturum açma girişimi sırasında hata oluştu.",
		oauth_error_return_error_explanation: "${0} yetkilendirme girişimi başarısız oldu.",
		oauth_error_return_error_userResponse: "Şu bilgilerle sistem yöneticinize başvurun: ${0} yetkilendirme girişimi başarısız oldu ve şu hata iletisini döndürdü: <br>${1}<br><b>hata:</b> ${2}.<br><b>tanım:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Web uygulama sunucusu günlüklerinde hatayla ilgili ek bilgi bulunur.  Günlük dosyalarıyla ilgili daha fazla bilgi için, IBM Knowledge Center olanağında &quot;IBM Content Navigator log files&quot; konusuna bakın. ${0} yetkilendirme girişimine ilişkin bilgileri kullanarak sorunu düzeltmeyi deneyin ve OAuth2'nin etkinleştirildiğini doğrulayın.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth hedef uygulaması",
		oauth_error_return_error_1: "hata_iletisi",
		oauth_error_return_error_2: "hata",
		oauth_error_return_error_3: "hata_tanımı",

		oauth_error_unknown: "Tanınmayan OAuth hata iletisi.",

		delete_share_permission_error: "Paylaşım silinmedi.",
		delete_share_permission_error_explanation: "Paylaşımı silmek için gereken izinlere sahip değilsiniz.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Bu öğeyi paylaşamazsınız.",
		class_not_support_share_error_explanation: "${0} sınıfı paylaşmayı destekleyecek şekilde ayarlanmamış.",
		class_not_support_share_error_0: "sınıf_adı",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Bu öğeyi paylaşamazsınız.",
		rbr_not_support_share_error_explanation: "Öğeye duyarlı içerik eklendi.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Kullanıcının içinden oturum açmaya çalıştığı aygıtın kullanıcının hesabına erişme yetkisi yok.",
		box_oauth_error_invalid_request: "İstekte gerekli bir parametre eksik, geçersiz bir parametre değeri var, bir parametre bir kereden fazla geçiyor ya da isteğin biçimi yanlış.",
		box_oauth_error_unsupported_response_type: "Yetkilendirme sunucusu, bu yöntem kullanılarak yetkilendirme kodu edinilmesini desteklemiyor.  İsteğinizdeki kod parametresi değerini denetleyin.",
		box_oauth_error_access_denied: "Kaynak sahibi ya da yetkilendirme sunucusu isteği reddetti.",
		box_oauth_error_temporarily_unavailable: "Aygıtınızın hızı sınırlanıyor; yetkilendirme isteklerinizin hızını azaltın ya da biraz bekleyin.",
		box_oauth_error_unknown: "Tanınmayan Box hata iletisi.",

		admin_default_search_type: "Varsayılan arama tipi",
		admin_default_search_type_hover: "<b>Arama seçenekleri</b> menüsündeki <b>Aranacak</b> alanında varsayılan olarak hangi seçeneğin seçili olacağını belirtin.",
		admin_default_search_type_documents: "Belgeler",
		admin_default_search_type_folders: "Klasörler",
		admin_default_search_type_folders_and_documents: "Belgeler ve Klasörler",

		admin_restricted_search_type: "Üzerinde arama yapılmasına izin ver",
		admin_restricted_search_type_hover: "Varsayılan olarak, kullanıcılar hem belgeler hem de klasörler üzerinde arama yapabilir. Üzerinde arama yapılmasına izin ver seçeneğini gizlemek ve aramaları belgelerle kısıtlamak istiyorsanız, Belgeler'i seçin ve Klasörler'den seçimi kaldırın.</br>,</br> Hem belgeler hem de klasörler üzerinde arama yapılmasına izin verirseniz, arama bölmesi açıldığında görüntülenecek varsayılan seçeneği belirleyin.",
		admin_restricted_search_type_documents: "Belgeler",
		admin_restricted_search_type_folders: "Klasörler",
		admin_restricted_search_type_folders_and_documents: "Belgeler ve Klasörler",

		admin_default_search_version: "Varsayılan arama sürümü",
		admin_default_search_version_hover: "<b>Arama seçenekleri</b> menüsündeki <b>Sürüm</b> alanında varsayılan olarak hangi seçeneğin seçili olacağını belirtin.",

		admin_all_classes_search: "Tüm sınıfları ara",
		admin_all_classes_search_hover: "Kullanıcıların tüm sınıflarda arama yapmasına izin verilip verilmeyeceğini belirleyin ve izin verilecekse, belge aramalarında nelerin içerileceğini belirtin.",
		admin_all_classes_search_removed_hover: "Navigator uygulaması web.xml dosyasında context-param allPseudoClassHidden parametresi true olarak ayarlandığından, tüm sınıfları arama seçeneği kullanılamıyor.",
		admin_all_classes_search_hide: "Tüm sınıfları arama seçeneğini kaldır",
		admin_all_classes_search_documents_only_documents: "Belge araması yalnızca belgeleri, kayıtlı aramaları ve giriş şablonlarını içerir",
		admin_all_classes_search_documents_non_folders: "Belge araması klasör olmayan tüm öğeleri içerir",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Ağaç görünümü",
		admin_feature_config_tree_view_hoverhelp: "Kullanıcıların Göz At bölmesini kullanarak havuzdaki klasörlerin listesine erişip erişemeyeceğini belirleyin. Göz At bölmesini gizlerseniz, kullanıcıların havuzdaki klasörlere gitmek için içerik listesini kullanması gerekir.",
		admin_feature_config_selected_repositories_label: "Havuzlar:",
		admin_feature_config_selected_repositories_hoverhelp: "Kullanıcıların bu özellikte erişebileceği havuzları seçin.",
		admin_feature_config_selected_repositories_select_state_hdr: "Havuz Seç",
		admin_feature_config_selected_repositories_name_hdr: "Havuz Adı",
		admin_feature_config_selected_repositories_show_hdr: "Göster",
		admin_feature_config_invalid_icon_title: "Özellikte gerekli bazı ayarlar eksik",
		admin_feature_config_view_select_hdr: "Görünüm Seç",
		admin_feature_config_view_hdr: "Görüntüleme",
		admin_feature_config_view: "Görüntüleme",
		admin_feature_config_views: "Görünümler:",
		admin_feature_config_views_hoverhelp: "Kullanıcıların içerik listesine hangi görünümleri uygulayabileceğini belirtin. Görünümler listelendikleri sırayla görüntülenir. İlk seçilen görünüm, özelliğin varsayılan görünümüdür.<br><br><b>Önemli:</b> Film Şeridi görünümünü etkinleştirirseniz, belge önizlemelerini görmek için HTML dönüştürme görüntüleyicisini yapılandırmanız gerekir.",

		admin_custom_dialog_name: "Ad:",
		admin_custom_dialog_value: "Değer:",
		admin_custom_setting_name_hover: "Yapılandırmanıza eklemek istediğiniz Daeja ViewONE ayarının adını girin. Yapılandırma ayarlarıyla ilgili daha fazla bilgi için Daeja ViewONE belgelerine bakın.",
		admin_custom_setting_value_hover: "Daeja ViewONE yapılandırma ayarı için kullanmak istediğiniz değeri girin. Yapılandırma ayarlarına ilişkin geçerli değerlerle ilgili daha fazla bilgi için Daeja ViewONE belgelerine bakın.",

		entry_template_name_required_message: "Giriş Şablonu Ayarları altındaki ad alanı gereklidir.",
		entry_template_name_invalid_message: "Giriş Şablonu Ayarları altındaki ad alanı şu karakterleri içeremez: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Giriş Şablonu Ayarları altındaki Bunlarla Paylaş alanı için belirli kullanıcılar ve gruplar seçildiğinde, en az bir kullanıcı ya da grup belirtmelisiniz.",
		entry_template_no_permission_to_save_to_teamspace_message: "Giriş Şablonu Ayarları altındaki Kaydetme Hedefi alanında seçilen ekip alanına (${0}) giriş şablonları ekleme izniniz yok.",
		entry_template_save_in_destination_required_message: "<b>Öğe Depolama Konumunu Ayarla</b> kısmında varsayılan bir kaydetme konumu belirtmelisiniz.",
		entry_template_save_in_destination_must_select_folder: "<b>Kaydetme hedefi</b> alanını gizler ve kullanıcının yeni öğeleri bir klasöre eklemesini gerekli kılarsanız, <b>Öğe Depolama Konumunu Ayarla</b> kısmındaki <b>Varsayılan kaydetme hedefi konumu</b> alanında bir klasör seçmelisiniz.",
		entry_template_what_to_save_required_message: "Seçenekleri Ayarla altındaki Neyi Kaydetmek İstiyorsunuz alanı için en az bir seçenek seçin.",
		entry_template_custom_workflow_empty_message: "<b>Özel İş Akışı...</b> öğesini seçerseniz, kullanmak istediğiniz iş akışını aramalı ve seçmelisiniz.",

		entry_template_new: "Yeni Giriş Şablonu",
		entry_template_name_hover: "Giriş şablonu adı şu karakterleri içeremez: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Giriş şablonu adı şu karakterlerin hiçbirini içeremez: * \\ / : ? \" < > |",
		entry_template_description_hover: "Kullanıcıların bu giriş şablonunu diğerlerinden ayırt etmesini sağlayacak bir tanım belirtin.",
		entry_tempalte_save_in_hover: "Giriş şablonunun nereye kaydedileceğini belirtin.<br><br><b>Kısıtlama:</b> Giriş şablonunu bir ekip alanına kaydederseniz, giriş şablonunu yalnızca o ekip alanı içinde kullanabilirsiniz.",
		entry_template_inherit_hover: "Bu seçeneği belirlerseniz, üst klasörün güvenlik ayarları, giriş şablonunun paylaşıldığı kullanıcılar ve gruplar listesine eklenir.",
		entry_template_builder_aria_label: "Giriş Şablonu Oluşturucu",
		entry_template_builder_layout_aria_label: "Giriş Şablonu Özellikleri Oluşturucu",

		entry_template_settings_document: "Giriş Şablonunu Tanımla",
		entry_template_settings_folder: "Öğe Depolama Konumunu Ayarla",
		entry_template_settings_folder_intro: "Bu giriş şablonu kullanılarak eklenen öğelerin nerede saklanacağını belirtin.",
		entry_template_settings_properties: "Öğe Özelliklerini Ayarla",
		entry_template_settings_properties_intro: "Bu giriş şablonu kullanılarak eklenen öğeler için varsayılan ya da önceden tanımlanmış değerler belirtebilirsiniz. Ayrıca, hangi özelliklerin hangi sırayla görüntüleneceğini denetlemek için, özelliklerin yerleşim düzenini değiştirebilirsiniz.",
		entry_template_settings_workflow: "Öğe İçin İş Akışı Yapılandır",
		entty_template_settings_workflow_intro: "Bu giriş şablonu kullanılarak öğeler eklendiğinde bir iş akışı başlatılıp başlatılmayacağını belirleyebilirsiniz.",
		entry_template_settings_security: "Öğe Güvenliğini Ayarla",
		entry_template_settings_security_intro: "Bu giriş şablonu kullanılarak eklenen öğeler için varsayılan ya da önceden tanımlanmış güvenlik belirtebilirsiniz. Uygun izinleri olan kullanıcılar, öğe eklendikten sonra öğenin güvenliğini değiştirebilir.",
		entry_template_settings_options: "Öğeyle İlgili Seçenekleri Ayarla",
		entry_template_xt_warning: "Bu giriş şablonunda yapılan değişikliklerin kaydedilmesi, giriş şablonunu IBM Workplace XT giriş şablonundan IBM Content Navigator giriş şablonuna çevirir. IBM Workplace XT, IBM Content Navigator giriş şablonlarını desteklemez.",

		entry_template_properties_edit_layout: "Yerleşim düzenini düzenle...",
		entry_template_properties_read_only: "Salt okuma",
		entry_template_properties_hidden: "Gizlenmiş",

		entry_template_destination_show: "<b>Kaydetme hedefi</b> alanını göster",
		entry_template_destination_show_hover: "<b>Kaydetme hedefi</b> alanını gösterirseniz, kullanıcılar öğelerin kaydedildiği konumu değiştirebilir.",
		entry_template_destination_hide: "<b>Kaydetme hedefi</b> alanını gizle",
		entry_template_destination_hide_hover: "<b>Kaydetme hedefi</b> alanını gizlerseniz, kullanıcılar öğelerin kaydedildiği konumu değiştiremez.",
		entry_template_folder_save_in_default: "Varsayılan <b>Kaydetme hedefi</b> konumu:",
		entry_template_folder_save_in_default_hover: "Bu giriş şablonu kullanılarak eklenen öğelerin varsayılan konumunu belirtin.<br><br>Seçeceğiniz varsayılan konum, giriş şablonunun yürütme zamanındaki davranışına bazı kısıtlamalar getirir:<ul><li>Kullanıcılar farklı bir havuz seçemez.</li><li>Varsayılan konum bir ekip alanıysa, kullanıcılar farklı bir ekip alanı seçemez.</li></ul>Ancak, kullanıcılar bu giriş şablonunu bir klasörle ilişkilendirirse, bu giriş şablonu için yapılandırılan depolama konumunu geçersiz kılabilir.",
		entry_template_folder_restrict_choice: "Kullanıcıların öğeleri varsayılan konuma ya da varsayılan konumun bir alt klasörüne eklemesini gerekli kıl",
		entry_template_folder_file_in_required: "Kullanıcıların yeni öğeleri klasöre eklemesini gerekli kıl",
		entry_template_folder_file_in_required_hover: "Bu seçeneği belirlemezseniz, kullanıcılar havuzun kök klasörüne öğe ekleyebilir.<br><br><b>Kısıtlama:</b> Havuz yapılandırması kullanıcıların bir klasör seçmesini gerektirebilir.",

		entry_template_document_type_show: "<b>Neyi kaydetmek istiyorsunuz</b> alanını göster",
		entry_template_document_type_show_hover: "<b>Neyi kaydetmek istiyorsunuz</b> alanını gösterirseniz, seçtiğiniz öğeler <b>Neyi kaydetmek istiyorsunuz</b> alanında seçenek olarak görüntülenir.",
		entry_template_document_type_hide: "<b>Neyi kaydetmek istiyorsunuz</b> alanını gizle",
		entry_template_document_type_hide_hover: "<b>Neyi kaydetmek istiyorsunuz</b> alanını gizlerseniz, kullanıcıların bu giriş şablonunu kullanarak her belge ekleyişinde, seçtiğiniz belge tipi kullanılır.",
		entry_template_document_type: "Bu giriş şablonu şu öğeleri eklemek için kullanılabilir:",
		entry_template_document_type_hover: "<b>Neyi kaydetmek istiyorsunuz</b> alanını gösterirseniz, seçtiğiniz öğeler <b>Neyi kaydetmek istiyorsunuz</b> alanında seçenek olarak görüntülenir.<br><br><b>Neyi kaydetmek istiyorsunuz</b> alanını gizlerseniz, kullanıcıların bu giriş şablonunu kullanarak her belge ekleyişinde, seçtiğiniz belge tipi kullanılır.",

		entry_template_misc: "Ek seçenekler:",
		entry_template_auto_classify_show: "Belgenin içeriğini otomatik olarak sınıflandır",
		entry_template_auto_classify_show_hover: "FileNet Content Manager'da bir belge sınıflandırıldığında, belgenin içeriği incelenerek, belge için uygun sınıf ve özellik değerleri saptanır.<br><br>Content Platform Engine'de içerik sınıflandırmanın etkinleştirilmiş olup olmadığını sistem yöneticinizden öğrenin.<br><br>Bu seçeneği etkinleştirirseniz, bir kullanıcı belgeyi havuza eklediğinde belgenin sınıfı ve özellikleri değiştirilebilir.",
		entry_template_allow_duplicate_file_names: "Dosya adları yinelenen belgelere izin ver",
		entry_template_allow_duplicate_file_names_hover: "Varsayılan olarak, FileNet Content Manager'da adı aynı olan belgeleri bir klasöre ekleyebilirsiniz. Seçilen depolama konumundaki her dosyanın benzersiz bir adı olmasını istiyorsanız bu seçeneği temizleyebilirsiniz.",
		entry_template_allow_compound_documents: "Bu belgenin bileşik bir belgenin üst öğesi olmasına izin ver",
		entry_template_version_show: "Ekleme ve içeri verme işlemleri için sürüm seçeneklerini göster",
		entry_template_version_hide: "Ekleme ve içeri verme işlemleri için sürüm seçeneklerini gizle",
		entry_template_version_to_add_as: "Şöyle eklenecek varsayılan sürüm:",
		entry_template_version_default: "Varsayılan sürüm seçeneği:",
		entry_template_version_default_checked: "Ana Sürüm",
		entry_template_version_default_unchecked: "İkincil Sürüm",
		entry_template_version_display: "Belge sürümü:",
		entry_template_version_display_show: "Göster",
		entry_template_version_display_hide: "Gizle",
		entry_template_version_default_add: "Şöyle eklenecek varsayılan sürüm:",

		entry_template_checkin_version_show: "İçeri verme işlemleri için sürüm seçeneklerini göster",
		entry_template_checkin_version_hide: "İçeri verme işlemleri için sürüm seçeneklerini gizle",

		entry_template_checkin_version_message_no_versions: "Seçilen sınıfın sürüm ilkesi, kullanıcıların belgenin yeni bir sürümünü içeri vermesini engelliyor.",
		entry_template_checkin_version_message_always_version: "Seçilen sınıfın sürüm ilkesi, kullanıcıların belgenin yürürlükteki sürümünü başkasıyla değiştirmesini engelliyor.",

		entry_template_applied: "Bu giriş şablonunu kullanıcılar şu işlemleri yapınca kullan:",
		entry_template_applied_add: "Belge ekle (gerekli)",
		entry_template_applied_add_folder: "Klasör yarat (gerekli)",
		entry_template_applied_checkin: "İçeri ver",
		entry_template_applied_properties_group: "Özellikleri görüntüle ya da düzenle:",
		entry_template_applied_properties: "Özellikler penceresinde",
		entry_template_applied_viewer: "Uygulamacık görüntüleyicide",
		entry_template_applied_docinfo: "Belge bilgileri bölmesinde",
		entry_template_applied_no_class_support: "Bu giriş şablonu öğe eklemek için kullanılabilir, ancak belgeleri içeri vermek ya da özellikleri görüntülemek ve düzenlemek için kullanılamaz. Bu durumları desteklemek için, seçilen sınıfın değiştirilmesi gerekir. Bu tür durumlarda giriş şablonunu kullanmanız gerekiyorsa, yöneticinizden yönetim aracını kullanarak sınıfı giriş şablonu tanıtıcılarını saklayacak şekilde değiştirmesini isteyin.",
		entry_template_applied_no_child_component_support: "Seçilen sınıfın alt bileşenleri var ve bir özellik yerleşim düzeni tanımlandı. Özellik yerleşim düzenleri alt bileşenleri desteklemez. Alt bileşenler kullanıcıya görüntülenmez.",
		entry_template_applied_child_component: "Seçilen sınıfın alt bileşenleri var. Bunlar kullanıcıya görüntülenir, ancak alt bileşenleri bu giriş şablonunda yapılandıramazsınız.",

		entry_template_properties_show: "<b>Özellikler</b> kısmını göster",
		entry_tempalte_properties_show_hover: "<b>Özellikler</b> kısmını gösterirseniz, kullanıcılar giriş şablonunda görüntülenen ve salt okunur olmayan özelliklerin değerlerini değiştirebilir.",
		entry_template_properties_hide: "<b>Özellikler</b> kısmını gizle",
		entry_template_properties_hide_hover: "<b>Özellikler</b> kısmını gizlerseniz, kullanıcılar özellik değerlerini değiştiremez. Giriş şablonunun, öğeler bu giriş şablonu kullanılarak eklendiğinde kullanmak istediğiniz tüm değerleri tanımlaması gerekir.",

		entry_template_security_show: "<b>Güvenlik</b> kısmını göster",
		entry_template_security_show_hover: "<b>Güvenlik</b> kısmını gösterdiğinizde, uygun izinleri olan kullanıcılar öğenin güvenliğini değiştirebilir.",
		entry_template_security_hide: "<b>Güvenlik</b> kısmını gizle",
		entry_template_security_hide_hover: "<b>Güvenlik</b> kısmını gizlerseniz, kullanıcılar öğelerin güvenliğini değiştiremez. Giriş şablonunun, öğeler eklendiğinde ya da düzenlendiğinde kullanmak istediğiniz tüm güvenlik ayarlarını tanımlaması gerekir.",
		entry_template_security_policy: "Güvenlik ilkesi:",
		entry_template_security_policy_hover: "Seçtiğiniz güvenlik ilkesine bağlı olarak, güvenlik ilkesi:<br><ul><li><b>Öğe Güvenliğini Ayarla</b> altında belirtilen izinleri geçersiz kılabilir.</li><li><b>Öğe Güvenliğini Ayarla</b> altında belirtilen izinlere ekleme yapabilir.</li></ul>",
		entry_template_security_policy_none: "Güvenlik ilkesi seçilmedi",
		entry_template_security_inherit: "Güvenlik ayarlarını üst klasörden devral",
		entry_tempalte_save_in_hover: "Giriş şablonunun nereye kaydedileceğini belirtin.<br><br><b>Kısıtlama:</b> Giriş şablonunu bir ekip alanına kaydederseniz, giriş şablonunu yalnızca o ekip alanı içinde kullanabilirsiniz.",
		entry_template_security_inherit_item_security_hover: "Bu seçeneği belirlerseniz, üst klasörün güvenlik ayarları, şu öğelerden birinin tanımladığı güvenlik ayarlarına eklenir:<ul><li><b>Öğe Özelliklerini Ayarla</b> kısmında belirtilen sınıf</li><li><b>Öğe Özelliklerini Ayarla</b> kısmında belirttiğiniz özel güvenlik</li></ul>",
		entry_template_security_change: "Seçilen sınıfın tanımladığı güvenliği geçersiz kıl",
		entry_template_security_change_hover: "Bu seçeneği belirlerseniz, varsayılan olarak, sınıf için tanımlanan güvenlik ayarları görüntülenir. Böylece, giriş şablonuna ilişkin güvenlik ayarlarını değiştirebilirsiniz.<br><br><b>Güvenlik</b> kısmını gösterdiğinizde, uygun izinleri olan kullanıcılar öğenin güvenliğini değiştirebilir.<br><br>Bu seçeneği belirler ve güvenlik ayarlarının üst klasörden devralınmasını seçerseniz, devralınabilir izinler, belirttiğiniz güvenlik ayarlarına eklenir.",
		entry_template_security_default_item_security: "Öğeyi ekleyen kullanıcının varsayılan öğe güvenliğini geçersiz kıl",
		entry_template_security_policy_message_override: "Seçilen güvenlik ilkesi, Güvenliği Ayarla altında belirtilen izinleri geçersiz kılmak için yapılandırıldı.",
		entry_template_security_policy_message_add: "Seçilen güvenlik ilkesi, Güvenliği Ayarla altında belirtilen izinlere ekleme yapmak için yapılandırıldı.",
		entry_template_security_policy_preserve_true_hover: "Doğrudan izni korur",
		entry_template_security_policy_preserve_false_hover: "Doğrudan izni korumaz",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Belirli roller",
		entry_template_security_class_role_search_title: "Aranacak roller:",
		entry_template_secuirty_class_member_title: "${0} ile ilgili üye listesi",
		entry_template_secuirty_class_folder_only: "Bu izinler yalnızca bu klasör için geçerlidir",
		entry_template_secuirty_class_folder_and_immediate_children: "Bu izinler bu klasör için ve klasörün hemen altındaki, güvenliği bu klasörden devralmak üzere yapılandırılmış öğeler için geçerlidir.",
		entry_template_secuirty_class_folder_and_all_children: "Bu izinler bu klasör için ve klasörün, güvenliği bu klasörden devralmak üzere yapılandırılmış tüm türevleri için geçerlidir. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Bu izinler, klasörün hemen altındaki, güvenliği bu klasörden devralmak üzere yapılandırılmış öğeler için geçerlidir.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Bu izinler, güvenliği bu klasörden devralmak üzere yapılandırılmış tüm türevler için geçerlidir.",

		entry_template_class_security_message_no_override: "Seçilen sınıfın güvenliği, kullanıcıların güvenliği geçersiz kılmasını engelliyor.",
		entry_template_class_security_required_privileges: "<b>Önemli</b>: Seçilen sınıfın güvenliğini geçersiz kıldığınızda, bu giriş şablonunu kullanarak öğe ekleyen kullanıcıların ItemSetACL ve UserACLOwner ayrıcalıkları olmalıdır.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Sıralı Kalıp İş Akışı",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Koşut Kalıp İş Akışı",
		entry_template_workflow_type_existing: "Özel İş Akışı...",
		entry_template_workflow_launch_prompt: "İş akışının başlatılıp başlatılmayacağını kullanıcıya sor",
		entry_template_workflow_launch_auto: "İş akışını otomatik olarak başlat",
		entry_template_workflow_modify_launch: "Kullanıcıların başlatma adımını değiştirmesine izin ver",
		entry_template_workflow_modify_launch_hover: "Kullanıcılara iş akışının nasıl başlatılacağını değiştirme olanağı sağlamak istiyorsanız bu seçeneği belirleyin.",

		entry_template_optionsButton_title: "Değiştir",
		entry_template_optionsButton_readonly_title: "İlişkilendirmeyi Görüntüle",
		entry_template_optionsDialog_title: "Klasör İlişkilendirme Ayarları",
		entry_template_removeButton_title: "Kaldır",
		entry_template_addButton_title: "Ekle",
		entry_template_selected_entry_templates: "Seçilen Giriş Şablonları",
		entry_template_docs_added_to_template_destination: "Belgeler, giriş şablonunda belirtilen hedefe eklendi.",
		entry_template_docs_added_to_other_object_store: "Bu giriş şablonu öğeleri ${0} nesne deposuna ekler.",
		entry_template_inherited_entry_templates_label: "Şunu istiyorum: ",
		entry_template_inherited_entry_templates: "Giriş şablonu ilişkilendirmelerini klasörden devral: ",
		entry_template_inherited_entry_templates_not: "Bu klasör için yeni ilişkilendirmeler yarat",
		entry_template_inherited_folder_path: "Seçilen giriş şablonları listesindeki giriş şablonları şu klasörle ilişkilendirildi: ${0}. <br> Klasörün yolu ${1}.",
		entry_template_folder_associations_title: "Giriş Şablonlarını İlişkilendir",
		entry_template_folder_associations_intro: "Bir giriş şablonunu bir klasörle ilişkilendirdiğinizde, kullanıcıların o klasöre öğe eklemek için giriş şablonunu kullanması gerekir. Bir klasörle birden çok giriş şablonunu ilişkilendirirseniz, kullanıcılar hangi giriş şablonunun kullanılacağını seçebilir.",
		entry_tempalte_folder_associations_entrytemplate: "Giriş şablonu: ",
		entry_template_avaliable_entry_templates: "Kullanılabilecek Giriş Şablonları",
		entry_template_fileTypes_intro_title: "İzin verilen dosya tipleri:",
		entry_template_fileTypes_intro: "Bir giriş şablonu varsayılan olarak, havuza herhangi bir tipte belge eklemek için kullanılabilir. Ancak, birden çok dosya tipi seçerseniz, giriş şablonları yalnızca, kullanıcılar belirtilen dosya tiplerinden biriyle eşleşen belgeler eklerken kullanılabilir.",
		entry_template_fileTypes: "Dosya Tipleri",
		entry_template_fileType_error: "Bir ya da daha fazla giriş şablonu ilişkilendirmesi için seçilen dosya tipleri geçersiz. Giriş şablonu ilişkilendirmelerinin kaydedilebilmesi için geçersiz dosya tiplerini kaldırmalısınız.",
		entry_template_fileTypes_any_type_of_file: " Herhangi bir dosya tipi",
		entry_template_description_label: "Tanım",
		entry_template_ItemInfoPrefix: "Bununla İlişkilendir: ",
		entry_template_TargetObjectStoreName: "Hedef Nesne Deposu",
		entry_template_class: "Sınıf",
		entry_template_current_folder_as_parent: "Klasörü hedef olarak kullan",
		entry_template_view_minetypes: "MIME Tiplerini Görüntüle",
		entry_template_avaliable_MIME_types: "Kullanılabilecek Dosya Tipleri",
		entry_template_selected_MIME_types: "Seçilen Dosya Tipleri",
		entry_template_MIME_type_column: "dosya tipi kategorisi adı",
		entry_template_file_type_not_existing: "Geçersiz dosya tiplerini lütfen kaldırın.",
		entry_template_MIME_types: "MIME tipleri:",
		entry_template_MIME_types_info_dialog_title: "İlgili MIME tipleri:",
		entry_template_destination_label: "Belgelerin ekleneceği hedef: ",
		entry_template_destination_help: "Kullanıcılar seçilen giriş şablonunu kullanarak bu klasöre belge eklediğinde, belgelerin havuzda saklanacağı yeri belirtin.",
		entry_template_radioButton_folder_destination: "Seçilen klasör",
		entry_template_radioButton_template_destination: "Giriş şablonunda belirtilen hedef",
		entry_tempalte_teamspace_default: "Varsayılan Giriş Şablonu",
		entry_template_folder_associations_save_new: "Bazı giriş şablonu ilişkilendirmelerini değiştirdiniz. Değişiklikleri kaydetmeden pencereyi kapatmak istiyor musunuz?",
		entry_template_mode_binding_label: "Özellikler",
		entry_template_columns_className: "Sınıf Adı",
		entry_template_columns_type: "Şablon Tipi",
		entry_template_columns_workflow: "İş Akışı Adı",
		entry_template_columns_destination: "Hedef",
		entry_template_association_less_than_record: "Seçilen Giriş Şablonları'nda listelenmeyen ${0} giriş şablonu var. Bunları görme izniniz yok. Ya da hepsi silinmiş. Daha fazla bilgi için sistem yöneticinize başvurun.",
		/* Request */

		progress_message_general: "Çalışıyor...",
		cancel_message_general: "Eylem iptal edildi.",
		ie8_not_supported_browser: "IE8 desteklenen bir tarayıcı değil.",
		progress_message_getDesktop: "Masaüstü yükleniyor...",
		progress_message_getActions: "Eylemler yükleniyor...",
		progress_message_getViewers: "Masaüstü yükleniyor...",
		progress_message_logon: "Oturum açılıyor...",
		progress_message_logoff: "Oturum kapatılıyor...",
		progress_message_getContentClasses: "Sınıflar alınıyor...",
		progress_message_openContentClass: "Sınıf ayrıntıları alınıyor...",
		progress_message_od_getCabinets: "Kabinler alınıyor...",
		progress_message_getSearchTemplates: "Aramalar alınıyor...",
		progress_message_od_getTemplates: "Klasörler alınıyor...",
		progress_message_od_openCabinet: "Klasörler alınıyor...",
		progress_message_openSearchTemplate: "Arama açılıyor...",
		progress_message_od_openTemplate: "Klasör açılıyor...",

		progress_message_getWorklists: "İş listeleri alınıyor...",
		progress_message_getWorkItems: "İş öğeleri alınıyor...",
		progress_message_getNextWorkItems: "İş öğeleri alınıyor...",
		progress_message_getStepParameters: "İş öğesi bilgileri alınıyor...",
		progress_message_getStepAttachmentItems: "Ek bilgileri alınıyor...",
		progress_message_getDependentParameters: "Özellik bilgileri alınıyor...",

		progress_message_p8_getProcessApplicationSpaces: "Uygulama alanları alınıyor...",
		progress_message_p8_getProcessRoles: "Süreç rolleri alınıyor...",
		progress_message_p8_getProcessInbaskets: "Gelen sepetleri alınıyor...",
		progress_message_p8_getProcessorInformation: "Süreç bilgileri alınıyor...",
		progress_message_p8_getFilterCriteria: "Gelen sepeti süzgeci alınıyor...",
		progress_message_p8_getLaunchParameters: "İş öğesi bilgileri alınıyor...",
		progress_message_p8_getStepAttachments: "İş öğesi ekleri alınıyor...",
		progress_message_p8_getSubscriptions: "İş akışı abonelikleri alınıyor...",
		progress_message_p8_getTrackerParameters: "İş öğesi bilgileri alınıyor...",
		progress_message_p8_getTrackerHistory: "İş öğesi geçmişi alınıyor...",
		progress_message_p8_getTrackerMilestones: "İş öğesi kilometretaşları alınıyor...",
		progress_message_p8_completeStep: "İş öğesi tamamlanıyor...",
		progress_message_p8_moveToInbox: "Öğe genel sepetine taşınıyor...",
		progress_message_p8_returnToSender: "İş öğesi geri döndürülüyor...",
		progress_message_p8_reassign: "İş öğesi yeniden atanıyor...",
		progress_message_p8_launchWorkflow: "İş akışı başlatılıyor...",
		progress_message_p8_getTransferedWorkflows: "İş akışı bilgileri alınıyor...",

		progress_message_cm_getProcesses: "İş akışı bilgileri alınıyor...",
		progress_message_cm_completeStep: "İş öğesi devam ettiriliyor...",
		progress_message_cm_getItemProcessInformation: "İş akışı bilgileri alınıyor...",

		progress_message_search: "Aranıyor...",
		cancel_message_search: "Arama iptal edildi.",
		progress_message_getContentItems: "Öğe bilgileri alınıyor...",
		progress_message_openFolder: "Klasör açılıyor...",
		progress_message_addItem: "Öğe yaratılıyor...",
		progress_message_checkIn: "Öğe içeri veriliyor...",
		progress_message_changePassword: "Parola değiştiriliyor...",
		progress_message_getDefaultInstancePermissions: "Varsayılan izinler alınıyor...",
		progress_message_openItem: "Öğe bilgileri alınıyor...",
		progress_message_saveItem: "Öğe bilgileri kaydediliyor...",
		progress_message_getPermissions: "İzinler alınıyor...",
		progress_message_getEntryTemplates: "Giriş şablonları alınıyor...",
		progress_message_openEntryTemplate: "Giriş şablonu açılıyor ...",
		progress_message_getFavorites: "Sık kullanılanlar alınıyor...",
		progress_message_getFoldersFiledIn: "Klasörler alınıyor...",
		progress_message_getDocumentVersions: "Sürümler alınıyor...",
		progress_message_getDependentAttributeInfo: "Öznitelik bilgileri alınıyor...",
		progress_message_packageForDownload: "Karşıdan yükleme için paketleniyor...",
		progress_message_convertDocument: "İçerik dönüştürülüyor...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "İçerik tipi alınıyor...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Belge ekleniyor...",

		progress_message_desktop_reload: "İstemci masaüstünüzü yeniden yüklüyor.<br>Yeniden oturum açmanız istenebilir.",
		progress_message_email: "Eposta gönderiliyor...",
		cancel_message_email: "Eposta iptal edildi.",

		progress_message_p8_getOfficeOnlineTemplates: "Office şablonları alınıyor...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Sık Kullanılanlar Ağacı",
		favorites_content_list_label: "Sık Kullanılanlar İçerik Listesi",
		syncItems_tree_label: "Eşitlenen Dosyalarım Ağacı",
		syncItems_content_list_label: "Eşitlenen Dosyalarım İçerik Listesi",
		my_checkouts_content_list_label: "Dışarı Aldıklarım İçerik Listesi",
		browse_tree_label: "Göz Atma Ağacı",
		browse_content_list_label: "Göz Atma İçerik Listesi",
		repository_selector_label: "Havuz Seçici",
		teamspaces_content_list_label: "Ekip Alanı İçerik Listesi",
		templates_content_list_label: "Şablon İçeriği Listesi",
		work_content_list_label: "İş İçeriği Listesi",
		work_tree_label: "İş Ağacı",
		admin_tree_label: "Yönetim Ağacı",
		admin_tabs_label: "Yönetim Sekmeleri",
		search_tabs_label: "Arama Sekmeleri",
		search_selector_label: "Arama Seçici",
		teamspace_browse_content_list_label: "Ekip Alanı Göz Atma İçerik Listesi",
		teamspace_search_tabs_label: "Ekip Alanı Arama Sekmeleri",

		/* Desktop */
		undo_description: "${0} Eylemini Geri Al",
		redo_description: "${0} Eylemini Yinele",

		/* Application Tabs */
		home: "Home",
		repository: "Havuz",
		repository_type: "Havuz tipi:",
		repository_type_header: "Havuz Tipi",
		repository_type_any: "Tüm Havuzlar",
		repository_type_contains_label: "Bunu içeren havuz tipi:",
		document_info: "Belge Bilgileri",
		team: "Ekip",
		administration: "Yönetim",

		/* Home Page */
		recent_activity: "En Son Etkinlik",
		repos_and_wrksp: "Havuzlar ve Ekip Alanları",
		workspaces: "Ekip alanları",
		repositories: "Havuzlar",
		templates: "Şablonlar",
		favorites: "Sık Kullanılanlar",
		my_checkouts: "Dışarı Aldıklarım",
		mySyncedFiles: "Eşitlenen Dosyalarım",
		links: "Bağlantılar",
		name_label: "Ad",
		description_label: "Tanım:",
		type_label: "Tip:",
		type_heading: "Tip",
		type_id_label: "Tip Tanıtıcısı",
		server_type_icon: "Sunucu Tipi Simgesi",
		server_type_heading: "Sunucu Tipi",
		server_type: "Sunucu tipi",
		port_heading: "Kapı Numarası",
		port_label: "Kapı numarası:",
		server_name_heading: "Sunucu Adı",
		server_label: "Sunucu adı:",
		server_url_label: "Sunucu URL:",
		id_label: "Kimlik:",
		id_heading: "Tanıtıcı",
		connected_label: "Bağlantı kuruldu:",
		repository_label: "Havuz",
		modified_label: "Değiştiren:",
		modified_date_label: "Değiştirme:",
		status_label: "Durum:",
		last_modified_label: "Son değiştiren:",

		modifier: "Değiştiren",
		modified_date: "Değiştirme",

		/* Favorites */
		new_favorite_label: "Sık Kullanılanlara Ekle",
		edit_favorite_label: "Sık Kullanılanı Yeniden Adlandır",
		remove_favorite_label: "Sık Kullanılanlardan Kaldır",
		missing_alias_message: "Bir ad belirtmelisiniz.",
		sync_favorite_enable_hover: "Bu öğe eşitleme için etkinleştirildi.",
		sync_favorite_disable_hover: "Bu öğe eşitlenmiyor.",
		sync_favorite_sync_unavailable_hover: "Bu nesne tipi için eşitleme kullanılamaz.",
		sync_enable_label: "Bu öğeyi eşitle",
		sync_enable_label_hover: "Bu öğe aygıtlarınızla eşitlenecek.",
		delete_favorite_confirmation_question: "Bu öğeyi sık kullanılanlar listenizden kaldırmak istiyor musunuz?",
		alias_label: "Ad:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Seçilen öğe sık kullanılanlar listenizde zaten var.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Bu öğe sık kullanılanlar listenize eklenemiyor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Yalnızca ${0} sık kullanılan saklayabilirsiniz.",
		add_favorite_max_reached_response: "Bu öğeyi sık kullanılanlar listenize eklemek istiyorsanız, var olan bir sık kullanılan öğeyi silin.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Seçilen belgeler PDF'e dönüştürülemiyor.",
		download_as_pdf_max_content_error_explanation: "Yalnızca ${0} MB veriyi PDF'e dönüştürebilirsiniz. Ancak, seçilen belgeler ${0} MB'yi aşıyor.",
		download_as_pdf_max_content_error_response: "Daha az sayıda belge ya da daha küçük belgeler seçin ve belgeleri PDF dosyası olarak karşıdan yüklemeyi yeniden deneyin.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Seçilen belgeler tek bir PDF dosyasına dönüştürülemiyor.",
		download_as_pdf_mimetype_check_error_explanation: "Çok kısımlı bir belgeyi tek bir PDF dosyasına dönüştürmek için her kısmın MIME tipi aynı olmalıdır.",
		download_as_pdf_mimetype_check_error_response: "PDF'e dönüştürmek için başka bir belge seçin.",

		/* Activity Stream */
		show_label: "Göster:",
		all_filter: "Tümü",
		notifications_filter: "Bildirimler",
		workitems_filter: "İş Öğeleri",
		documentes_filter: "Belgeler",
		all_favorites_filter: "Tüm Sık Kullanılanlar",
		folders_filter: "Klasörler",
		searches_filter: "Aramalar",
		teamspaces_filter: "Ekip alanları",

		/* Repository */
		all_search_templates: "Tüm Aramalar",
		all_od_searches: "Tüm Arama Şablonları",
		recent_searches: "En Son Aramalar",
		opened_searches: "Açılan Aramalar",

		all_worklists: "Tüm Gelen Kutuları",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Her iş listesinin listesi",

		/* Teamspace */
		all_workspaces: "Tüm Ekip Alanları",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Her ekip alanının listesi",
		workspace_title: "Ekip Alanı",
		workspace_icon: "Ekip Alanı Simgesi",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Kullanılabilir",
		workspace_stat_offline: "Kullanılamıyor",
		workspace_stat_validate: "Doğrulama gerektirir",
		workspace_stat_pendingDelete: "Silme bekliyor",
		workspace_stat_deleteError: "Silme başarısız oldu",

		undefined_value: "Tanımlı değil",
		undefined_reference_value: "Başvuru tanımlanmadı.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Sunucuda daha fazla sonuç olabilir.",
		search_all_data: "Tüm verileri ara.",
		search_all_teamspaces: "Tüm ekip alanlarını ara.",
		teamspace_filter_results: "${0} sonuç gösteriliyor. ",
		displaying_filtered_results: "Süzgeç uygulanan sonuçlar gösteriliyor. ",
		displaying_recent_results: "Yalnızca, son ${0} gün içinde değiştirilmiş olan ekip alanları gösteriliyor. Diğer ekip alanlarını bulmak için, ekip alanları listesine ad ya da tanım temelinde süzgeç uygulayın. ",
		clear_filter: "Süzgeci temizle",

		/* FolderTreeModel */
		move_item_task: "Öğeyi taşı",
		copy_item_task: "Öğeyi kopyala",
		add_item_task: "Öğe ekle",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Şu klasör bulunamadı: ${0} Silinmiş ya da bu görünümden açılamıyor olabilir. Klasöre gitmek için, ağaç görünümünde Daha Fazla bağlantısını tıklatın. Klasörü görüntüleyemiyorsanız, içerik listesi görünümünü yenileyin.",
		more_paging_link: "daha fazla ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Durum",
		status_dialog_cancel_label: "İptal",

		/* ErrorDialog */
		error_dialog_title: "Hata",
		error_dialog_icon_tooltip: "Hata",
		error_dialog_stack_trace_title: "Yığın İzlemesi",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Doğrulama",

		close_browser_msg: "Tarayıcı penceresini kapatın.",

		/* MessageDialog */
		message_dialog_title: "Bilgi",
		warning_dialog_title: "Uyarı",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "${0} Olanağına Hoş Geldiniz",
		server: "Havuz:",
		username: "Kullanıcı adı:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Havuzda oturum açmak için kullanıcı adı gereklidir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Havuzda oturum açmak için parola gereklidir.",
		password: "Parola:",
		login: "Oturum Aç",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Oturumunuzun süresi doldu. Yeniden oturum açın.",
		login_repository_connection_expired_message: "${0} havuzuna yönelik bağlantınızın süresi doldu. Yeniden oturum açın.",
		login_site_connection_expired_message: "Siteyle bağlantınızın süresi doldu. Yeniden oturum açın.",
		login_new_server_message: "${0} için kullanıcı adı ve parola girin.",
		login_error_more_information_message: "Daha fazla bilgi",

		disconnect_box_account_user: "Box hesabının bağlantısını kes: ${0}",
		disconnect_box_account: "Box Hesabının Bağlantısını Kes",
		disconnect_box_accounts: "Box Hesaplarının Bağlantısını Kes",

		// OAuth2/Box Login
		login_ssl_connection_required: "Box havuzuna erişmek için SSL bağlantısı gerekir",
		login_oauth_popup_blocked: "Beliren pencereler engellenmiş. Oturum açmak için tarayıcınızda beliren pencere engelini kaldırmanız gerekebilir.",
		login_oauth_click_here: "5 saniye içinde yeniden yönlendirilmezseniz burayı tıklatın.",
		login_oauth_title: "Oturum Aç",
		login_oauth_grant_intro: "${0} için kimlik doğrulaması sağlar.",
		login_pane_oauth_click_here: "Oturum açmak için burayı tıklatın.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Web istemcisinde oturum kapatmak istiyor musunuz?",
		logout_confirmation_button: "Oturumu Kapat",

		/* ChangeLocaleDialog */
		change_locale: "Dil ve Ülke Değeri Ayarlarını Değiştir",
		change_locale_use_browser_language: "Tarayıcının Dil Ayarını Kullan (Varsayılan)",
		change_locale_use_browser_locale: "Tarayıcının Dil Ayarını Kullan (Varsayılan)",
		change_locale_description: "Tarayıcı tanımlama bilgilerini silerseniz, dil ve ülke değeri ayarlarınızı sıfırlamanız gerekir.",
		change_locale_language_locale: "Uygulama dili:",
		change_locale_language_locale_hover: "Bu ayar web istemcisindeki metinlerin dilini değiştirir, ancak uygulamadaki belgelerin dilini değiştirmez.<br><br>Varsayılan ayar, web tarayıcınızın yapılandırma seçeneklerinde belirttiğiniz dili kullanır.",
		change_locale_value_format_locale: "Uygulama ülke değeri:",
		change_locale_value_format_locale_hover: "Web istemcisindeki tarih, saat ve sayı biçimlerini ülke değeri belirler.<br><br>Varsayılan ayar, web tarayıcınızın yapılandırma seçeneklerinde belirtilen dille ilişkilendirilmiş biçimleri kullanır.",
		change_locale_for_office: "İki yönlü metin ayarları:",
		change_locale_bidi_support_flag: "İki yönlü dil desteğini etkinleştir",
		change_locale_bidi_support_flag_hover: "İki yönlü dil desteği etkinleştirildiğinde, kullanıcı giriş alanlarında kullanılan metnin yönünü ayarlayabilir.  Örneğin klasör gibi öğeler için girilen metin, girildiği yönle görüntülenir.",
		change_locale_base_text_direction: "İçerik için temel metin yönü:",
		change_locale_base_text_direction_hover: "Giriş alanlarına girilecek metnin yönünü ayarlar.  Bu alan, klasör adları gibi kullanıcı tarafından girilen etiketlerin görüntülenme yönünü de belirler.",
		change_locale_calendar_type: "Takvim tipi:",
		change_locale_calendar_type_hover: "Kullanıcı oturumu için kullanılacak takvim tipini seçin.",
		change_locale_base_text_direction_default: "Varsayılan",
		change_locale_base_text_direction_ltr: "Soldan sağa",
		change_locale_base_text_direction_rtl: "Sağdan sola",
		change_locale_base_text_direction_contextual: "Bağlamsal",
		change_locale_calendar_type_gregorian: "Gregoryen",
		change_locale_calendar_type_hijri: "Hicri",
		change_locale_calendar_type_hebrew: "İbrani",
		change_locale_calendar_type_Umm_al_Qura: "Ümmü'l-Kurra",

		/* ChangePasswordDialog */
		change_password: "Parolayı Değiştir",
		change_password_title: "Parolayı Değiştir",
		change_password_expired_title: "Parolanın Süresi Doldu",
		change_password_message: "Yeni bir parola girin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Parolanızın süresi doldu. Yeni bir parola girin.",
		change_password_password_rules: "Parola kuralları",
		change_password_old_password: "Eski parola:",
		change_password_new_password: "Yeni parola:",
		change_password_confirm_password: "Parolayı doğrulayın:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Eski parolanızı girmelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Yeni bir parola girmelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Yeni parolanızı doğrulamalısınız.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Parolalar eşleşmelidir.",

		/* GlobalToolbar */
		actions: "Eylemler",
		actions_label: "Eylemler:",
		open_actions_label: "Eylemleri Aç:",

		/* About Dialog */
		about_dialog_title: "Hakkında",
		about_product_name_label: "Ürün Adı: ",
		about_product_version_label: "Sürüm: ",
		about_product_build_label: "Oluşturma: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM ve IBM logosu, International Business Machine Corporation firmasının ABD'de ve/ya da diğer ülkelerdeki tescilli ticari markalarıdır. Bu Program, Program'a eşlik eden lisans sözleşmesinin koşulları altında lisanslanır. Bu lisans sözleşmesi \"License\" ya da \"Non_IBM_License\" olarak belirtilen bir Program dizini klasöründe ya da kitaplıkta (geçerli olduğu durumlarda) bulunur ya da basılı bir lisans sözleşmesi olarak verilir. Program'ı kullanmadan önce lütfen bu sözleşmeyi dikkatle okuyun. Program'ı kullanmanız bu koşulları kabul ettiğiniz anlamına gelir. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Seçilen öğenin silinmesini istiyor musunuz?",
		delete_single_folder_confirmation_question: "${0} adlı klasörün silinmesini istiyor musunuz?",
		delete_multiple_confirmation_question: "Seçilen öğeleri silmek istiyor musunuz?<br>${0} öğe seçildi.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Sil",
		search_template_delete_confirmation_question: "${0} adlı aramanın silinmesini istiyor musunuz?",
		search_template_opened_delete_confirmation_question: "${0} araması açık. Aramayı silerseniz kapanır.<br>Bu aramayı silmek istiyor musunuz?",
		delete_multiple_opened_search_template_confirmation_question: "Şu aramalar açık: ${0}.<br>Aramaları silerseniz hepsi kapanır. Bu aramaları silmek istiyor musunuz?",
		delete_large_number_items_confirmation_question: "Silmek için ${0} öğe seçtiniz.<br/>Çok sayıda öğenin silinmesi uzun sürebilir.<br/>Devam etmek istiyor musunuz?",
		delete_confirmation_entrytemplate: "Bu giriş şablonunu silerseniz, işlemin giriş şablonuyla ilişkilendirilmiş belgeler ya da klasörlerde şu etkisi olur:<ul><li>Öğelerin giriş şablonuyla ilişkisi kalkar ve kullanıcılar bir öğeyi güncelleyince uyarı alabilir.</li><li>Giriş şablonun denetlediği özellikler (özelliklerin adı ya da sırası gibi), giriş şablonuyla ilişkilendirilmiş öğeler için geçerliliğini kaybeder.</li></ul>Bu giriş şablonunu silmek istiyor musunuz?",
		delete_confirmation_entrytempalte_with_multi_items: "Giriş şablonları tek tek silinmelidir. Giriş şablonları silinecek öğeler listesinden kaldırıldı. Giriş şablonlarını silmek istiyorsanız, her giriş şablonunu ayrı olarak silmelisiniz.",

		/* Create/Apply/Remove Hold */
		hold: "Tutma",
		createHold: "Yeni Tutma",
		applyHold: "Tutma Uygula",
		removeHold: "Tutmayı Kaldır",
		showHolds_title: "Tutmaları Göster",
		applyHoldSelectText: "Seçilen öğelere uygulamak istediğiniz tutmaları seçin.",
		availableHolds: "Kullanılabilecek tutmalar:",
		removeHoldSelectText: "Seçilen öğelerden kaldırmak istediğiniz tutmaları seçin.",
		appliedHolds: "Uygulanan tutmalar:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Seçilen öğelere uygulamak için yeni tutma yaratın.",
		holdName: "Tutma adı:",
		holdDescription: "Tanım:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Tutma için bir ad belirtmelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Belirtilen tutma adı zaten var.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Tutma adı şu karakterlerin hiçbirini içeremez: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "${0} dakika içinde oturumunuzun süresi dolacak.",
		session_expire: "Oturumun süresi doluyor",
		logoff: "Oturum kapat",
		extend_session: "Oturumu uzat",
		admin_custom_settings: "Ek ayarlar:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning, oturum süre bitimi uyarısının etrkinleştirilip etkinleştirilmediğini gösteren bir Boole değeridir; varsayılan değer True değeridir. sessionExpireWarningTime, oturum süre bitimi uyarısı zamanını belirtmek için kullanılan 2 - 5 arası bir tamsayıdır.",
		admin_custom_setting_dialog_title_new: "Yeni Ayar",
		admin_custom_setting_dialog_title_edit: "Ayarı Düzenle",
		admin_custom_setting_dialog_hover_help: "Parametre adını ve değerini belirterek başka parametreler ekleyin. Örneğin, oturum site bitimini etkinleştirmek istiyorsanız “enableSessionExpireWarning” parametresini ve “true” değerini belirtebilirsiniz.",
		admin_custom_setting_dialog_field_hover_help: "Parametre adları ve değerleriyle ilgili daha fazla bilgi için IBM Navigator Parameter Reference Manual belgesine bakın.",
		admin_custom_setting_dialog_nameInvalid: "Bu değer gereklidir. Değer boşluk içeremez ve yinelenen bir değer olamaz.",
		admin_custom_setting_dialog_bool_valueInvalid: "Bu değer gereklidir. Değer Boole tipi bir değer olmalıdır.",
		admin_custom_setting_dialog_int_valueInvalid: "Bu değer gereklidir. Değer bir tamsayı olmalıdır.",
		/* Add Document Dialog */
		add_document_dialog_title: "Belge Ekle",
		add_documents_dialog_title: "Belgeleri Ekle",
		add_document_general_label: "Genel",
		add_document_properties_label: "Özellikler",
		add_document_properties_with_ellipsis_label: "Özellikler...",
		add_document_security_label: "Güvenlik",
		add_document_location_label: "Kaydetme hedefi:",
		add_document_type_label: "Neyi kaydetmek istiyorsunuz?",
		add_document_localfile_label: "Yerel belge",
		add_document_metadata_label: "Belgeyle ilgili bilgi",
		add_document_external_label: "Dış belgeye bağlantı",
		add_document_web_link_label: "Web Bağlantısı",
		add_document_saved_content_label: "Kaydedilen dosyayı kullan:",
		add_document_saved_content_choice: "Kaydedilen dosya",
		add_document_file_name_label: "Dosya adı:",
		add_document_entry_template_label: "Giriş şablonu:",
		add_document_delete_file_label: "Yerel dosyayı sil",
		add_document_delete_file_disabled_label: "Dosya izleme dizininde olmayan dosyalar silinmez.",
		add_document_major_version_label: "Ana sürüm",
		add_document_major_version_hover: "Belge durumunu Serbest Bırakıldı olarak ayarlar. Belge havuza sürüm 1.0 olarka eklenir. Bu seçenek belirlenmezse, belge serbest bırakılmaya hazır değildir ve 0.1 ikincil sürümü olarak eklenir.",
		add_document_save_document_as_unfiled_label: "Belgeyi klasöre kaydetme",
		add_document_save_document_as_unfiled_hover: "Bu seçeneği belirlerseniz, bu belgeyi yalnızca arama yoluyla bulabilirsiniz. Sisteme göz atarak bulamazsınız.",
		add_document_create_new_version_label: "Yeni Sürüm Yarat",
		add_document_replace_existing_version_label: "Var Olan Sürümü Başkasıyla Değiştir",
		add_document_start_workflow_label: "İş akışını başlat",
		add_document_auto_classify_label: "İçeriği otomatik olarak sınıflandır",
		add_document_add_label: "Ekle",
		add_document_cancel_label: "İptal",
		add_document_document_type_label: "Sınıf",
		add_document_context_info: "Belge özellikleri için girdiğiniz değerler daha sonra belgeyi bulmak için kullanılabilir.",
		add_documents_context_info: "Belgeler için girdiğiniz değerler daha sonra belgeleri bulmak için kullanılabilir. Bir belge için farklı bir özellik değeri girmeniz gerekiyorsa, bu değeri ayrı olarak eklemeli ya da değeri ekledikten sonra belgenin özelliklerini düzenlemelisiniz.",
		add_document_url_label: "URL:",
		add_document_template_description: "Şablon Tanımı:",
		add_document_select_entry_template: "Giriş şablonu girin ya da seçin",
		add_document_no_permission_to_associations: "Giriş şablonu kullanmak için gereken izinlere sahip değilsiniz.",
		add_document_no_entry_template_to_use: "Seçilen dosyalar için giriş şablonu kullanılamaz",
		add_document_no_entry_template_itemtype_permission: "Bu klasöre öğe ekleyemezsiniz. Bir giriş şablonu seçilmesi gerekir; ancak, bu klasörle ilişkilendirilmiş giriş şablonlarının hiçbirine erişiminiz yok. Sistem yöneticinize başvurun ve bu klasörle ilişkilendirilmiş giriş şablonları için size erişim vermesini isteyin.",
		add_document_appgroup_name_label: "Uygulama Grubu Adı:",
		add_document_app_name_label: "Uygulama Adı:",
		create_folder_dialog_title: "Yeni Klasör",
		create_folder_context_info: "Klasör özellikleri için girdiğiniz değerler daha sonra klasörü bulmak için kullanılabilir.",
		create_folder_folder_name_label: "Klasör adı",
		create_folder_save_folder_as_unfiled_label: "Klasörü başka bir klasöre kaydetme",
		create_folder_save_folder_as_unfiled_hover: "Bu seçeneği belirlerseniz, bu klasörü yalnızca arama yoluyla bulabilirsiniz. Sisteme göz atarak bulamazsınız.",
		add_item_create_in_folder: "Yaratılacağı klasör:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Klasör adı şu karakterlerin hiçbirini içeremez: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Klasör adı şu karakterlerin hiçbirini içeremez: \\ / ve şu karakterlere eşit olamaz: . ya da ..",
		invalid_box_file_name_message: "Dosya adı şu karakterlerin hiçbirini içeremez: \\ / ve şu karakterlere eşit olamaz: . ya da ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Dosya adı şu karakterlerin hiçbirini içeremez: \\ / : * ? \" < > |",
		external_document_placeholder: "Belgenin URL adresini girin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Renk, 3 ya da 6 rakamlı onaltılı sayı olarak girilmelidir; örneğin #000 ya da #000000.",
		add_document_unfiled: "${0} dosyalanmadı",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Giriş Şablonu Kullanarak Belge Ekle",
		add_document_using_template_context_info: "Belge eklerken giriş şablonu kullandığınızda, belge için girdiğiniz değerler tutarlı olur.",
		add_documents_using_template_dialog_title: "Giriş Şablonu Kullanarak Belgeleri Ekle",
		add_documents_document_name_is_file_name_hint: "Dosya adı bu özellik için kullanılır",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Giriş Şablonu Kullanarak Yeni Klasör",
		create_folder_using_template_context_info: "Klasör yaratırken giriş şablonu kullandığınızda, klasör için girdiğiniz değerler tutarlı olur.",

		add_documents_batch_results_dialog_title: "Belgeler Havuza Eklenmedi",
		add_documents_batch_results_dialog_context_info: "Aşağıdaki belgeler havuza eklenmedi. Bir belge seçin ve belgenin havuza neden eklenemediğiyle ilgili daha fazla bilgi için Ayrıntılar'ı tıklatın.",
		add_documents_batch_results_dialog_filename_col_hdr: "Dosya adı",
		add_documents_batch_results_dialog_status_col_hdr: "Durum",
		add_documents_batch_results_dialog_message_col_hdr: "İleti",
		add_documents_batch_results_status_error: "Hata",
		add_documents_batch_results_status_cancelled: "İptal edildi",
		add_documents_batch_results_status_cancelled_msg: "İstek iptal edildiği için belge eklenmedi.",

		add_documents_batch_status_title: "Belgeler Ekleniyor",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "${0} / ${1} dosya ekleniyor...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Hatalar: ${0}",
		add_documents_batch_status_completing_msg: "Bu belge eklendikten sonra işlem duracak.",

		add_documents_status_uploading_msg: "${0} / ${1} dosya karşıya yükleniyor...",
		add_documents_status_adding_msg: "${0} / ${1} dosya ekleniyor...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Giriş şablonu, başka bir uygulamada ve belgeleri her zaman kayıt olarak bildirecek şekilde yapılandırıldı. Ancak, web istemcisi belgelerin kayıt olarak bildirilmesini desteklemediğinden bu ayar yoksayılır.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Giriş şablonu, başka bir uygulamada ve belgelerin kayıt olarak bildirilip bildirilmeyeceğine sizin karar vereceğiniz şekilde yapılandırıldı. Ancak, web istemcisi belgelerin kayıt olarak bildirilmesini desteklemediğinden bu ayar yoksayılır.",
		no_selection: "&lt;Seçin&gt;",

		batch_results_dialog_details_label: "Ayrıntılar",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Değer geçersiz. Değerin bir Genel Benzersiz Tanıtıcı (Globally Unique Identifier; GUID) olması gerekir; örneğin, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Değer geçersiz. Değerin bir kayar noktalı sayı olması gerekir; örneğin, 1.2 ya da 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Değer geçersiz. Değerin ${0} biçiminde olması gerekir; örneğin ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Değer geçersiz. Değerin ondalık sayı olması gerekir; örneğin, 1.2 ya da 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Değer geçersiz. Değerin tamsayı olması gerekir; örneğin, 5 ya da 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Değer geçersiz. Değerin yalnızca alfabetik karakterleri içermesi gerekir; örneğin, a-z ve A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Değer geçersiz. Değerin yalnızca alfasayısal karakterleri içermesi gerekir; örneğin, a-z, A-Z ve 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Değer geçersiz. Değerin yalnızca sayısal karakterleri içermesi gerekir; örneğin, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Değer geçersiz. Değer yalnızca şu karakterleri içerebilir: a-z, A-Z, 0-9, [boşluk] ve `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Değer geçersiz. Değer şu biçimi kullanan bir tarih olmalıdır: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Değer geçersiz. Değer şu biçimi kullanan bir saat olmalıdır: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Değer geçersiz. Açılan menüden bir değer seçin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Değer geçersiz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Değer geçersiz. Değer şu biçimde olmalıdır: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Bu değer zorunludur.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Değer çok uzun. Özelliğin desteklediği uzunluk üst sınırı ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Değer çok kısa. Özelliğin desteklediği uzunluk alt sınırı ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Değer geçerli aralığın dışında. Değerin ${0} ile ${1} arasında bir kayan noktalı sayı olması gerekir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Değer geçerli aralığın dışında. Değerin ${0} ile ${1} arasında bir ondalık sayı olması gerekir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Değer geçerli aralığın dışında. Değerin ${0} ile ${1} arasında bir tamsayı olması gerekir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Değerin ${0} ile ${1} arasında bir tarih olması gerekir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Değer geçerli aralığın dışında. Değerin ${0} ile ${1} arasında bir tarih olması gerekir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Değer geçerli aralığın dışında. Değerin ${0} ile ${1} arasında bir saat olması gerekir.",
		property_and: "ve",

		property_invalidValueOrRequired: "Şu değer geçersiz ya da gerekli: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Özellikler",
		edit_properties_dialog_info: "Bu öğenin özelliklerini görüntüleyebilir ya da düzenleyebilirsiniz. Uygun izinleriniz varsa, öğenin güvenliğini de değiştirebilirsiniz. Ancak sistem özelliklerini değiştiremezsiniz.",
		edit_properties_od_dialog_info: "Bu öğenin özelliklerini görüntüleyebilir ya da düzenleyebilirsiniz. Ancak sistem özelliklerini değiştiremezsiniz.",
		system_properties_title: "Sistem Özellikleri",
		custom_properties_title: "Özellikler",
		/* Folder collaboration tab */
		box_permission_permission: "İzin",
		box_permission_permissions: "İzinler",
		box_permission_editor: "Düzenleyici",
		box_permission_owner: "Sahip",
		box_permission_co_owner: "İkincil sahip",
		box_permission_viewer_uploader: "Görüntüleyici Karşıya Yükleyici",
		box_permission_previewer_uploader: "Önizleyici Karşıya Yükleyici",
		box_permission_viewer: "Görüntüleyici",
		box_permission_previewer: "Önizleyici",
		box_permission_uploader: "Karşıya Yükleyici",
		box_permission_add: "Ekle",
		box_permission_upload: "Karşıya Yükle",
		box_permission_download: "Karşıdan Yükleme",
		box_permission_preview: "Önizleme",
		box_permission_view: "Görüntüleme",
		box_permission_send_links: "Salt Görüntülenir Bağlantılar Gönder",
		box_permission_create_subfolders: "Alt Klasör Yarat",
		box_permission_create_tasks: "Görev Yarat",
		box_permission_add_comments: "Açıklama Ekle",
		box_collaboration_invite_placeholder: "Davet etmek için bir ad, eposta ya da grup girin",
		box_collaboration_invite_placeholder_non_admin: "Davet etmek için bir eposta adresi girin.",
		box_collaboration_invalid_email: "Geçerli bir eposta adresi girin",
		box_collaboration_user_already_present: "Bu kullanıcı klasörde zaten işbirliği kullanıcısı",
		box_collaboration_user_name: "Ad",
		box_collaboration_email_address: "Eposta Adresi",
		box_collaboration_date_added: "Eklenme Tarihi",
		box_collaboration_remove_collaboration: "Kaldır",
		box_collaboration_remove_collaboration_title: "Sil",
		box_collaboration_no_collaborators: "Herhangi bir işbirliği kullanıcısı yok",
		box_collaboration_change_owner_title: "Öğe Sahibini Değiştir",
		box_collaboration_change_owner_prompt: "Bu işbirliği kullanıcısını Klasör Sahibi yaparsanız, Düzenleyici olursunuz ve artık klasörün sahibi olmazsınız. Bu klasöre doğrudan eklenmiş işbirliği kullanıcıları klasörü kendi kök klasörlerinde görürler. Üst klasör düzeyinde ya da üstü düzeyde eklenmiş işbirliği kullanıcıları artık işbirliği kullanıcıları olmaz. Devam etmek istiyor musunuz?",
		box_collaboration_remove_self_title: "Kendini Kaldır",
		box_collaboration_remove_self_prompt: "Bir işbirliği kullanıcısı olarak kendinizi kaldırmak istediğinizden emin misiniz? Artık bu klasöre erişemezsiniz.",
		box_collaboration_user: "Kullanıcı",
		box_collaboration_group: "Grup",
		box_managing_users_not_configured: "Kullanıcı ve grup arayamazsınız; Box uygulaması doğru yapılandırılmadı. Bu özelliği kullanmak için sistem yöneticinize başvurun ve Box uygulamasının kullanıcıları ve grupları yönetecek şekilde yapılandırılmasını isteyin.",
		duplicate_value_error: "Bu özellikteki her değer benzersiz olmalıdır.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Aşağıdaki alanlarda yaptığınız her değişiklik, seçilen öğelerin tümüne uygulanır. Belirli bir öğe için farklı bir özellik değeri girmeniz ya da bir öğenin güvenliğini düzenlemeniz gerekiyorsa, öğenin özelliklerini tek tek düzenlemeniz gerekir.",
		multi_edit_properties_class_label: "Sınıf:",
		multi_edit_properties_items_label: "Öğe adları:",
		multi_edit_properties_properties_label: "Özellikler",
		multi_edit_batch_status_title: "Özellikler Güncelleniyor",
		multi_edit_batch_status_adding_msg: "${0} / ${1} öğe güncelleniyor...",
		multi_edit_batch_status_verifying_msg: "${0} / ${1} öğe doğrulanıyor...",
		multi_edit_batch_status_completing_msg: "Bu öğe güncellendikten sonra işlem durur.",
		multi_edit_batch_status_validation_completing_msg: "Bu öğe doğrulandıktan sonra işlem durur.",
		multi_edit_batch_results_status_error: "Hata",
		multi_edit_batch_results_status_cancelled: "İptal edildi",
		multi_edit_batch_results_status_cancelled_msg: "İstek iptal edildiği için öğe güncellenmedi.",
		multi_edit_batch_results_dialog_title: "Öğeler Güncellenmedi",
		multi_edit_batch_results_dialog_context_info: "Aşağıdaki öğeler güncellenmedi. Bir öğe adı seçin ve öğenin neden güncellenmediğiyle ilgili daha fazla bilgi için Ayrıntılar'ı tıklatın.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Öğe adı",
		multi_edit_batch_results_dialog_status_col_hdr: "Durum",
		multi_edit_batch_results_dialog_message_col_hdr: "İleti",
		multi_edit_batch_status_errors_msg: "Hatalar: ${0}",
		multi_edit_batch_permission_error_text: "Özelliklerde yapılan değişiklikler kaydedilemiyor.",
		multi_edit_invalid_value_error: "Bu değer başka bir değere bağımlı ve seçtiğiniz tüm öğeler için geçerli değil.",
		multi_edit_batch_permission_error_explanation: "Bu öğenin özelliklerini değiştiremezsiniz; ayrıcalıklarınız yeterli değil.",
		multi_edit_no_modifiable_properties: "Seçilen öğelerin özellikleri değiştirilemez. Bir öğe yalnızca salt okunur özellikler içeriyorsa ya da öğenin adı ya da başlığı düzenlenebilir ise bu durum oluşabilir. Birden çok öğe seçildiyse, öğelerin adını ya da başlığını değiştiremezsiniz.",
		multi_edit_mult_classes_dialog_info: "Seçilen öğeler farklı havuzlarda ya da farklı sınıflara ait. Yalnızca, aynı sınıfta ya da aynı havuzda olan öğeleri düzenleyebilirsiniz. Düzenlemek istediğiniz öğe alt kümesini seçin.",
		multi_edit_class_selector_class_heading: "Sınıf",
		multi_edit_class_selector_entry_template_heading: "Giriş Şablonu",
		multi_edit_class_selector_repository_heading: "Havuz",
		multi_edit_class_selector_items_heading: "Öğeler",
		multi_edit_some_classes_not_displayed: "Seçilen öğelerden bazıları, salt okunur özellikler içermesi ya da özelliklerin düzenlenmesini desteklemeyen bir havuzda bulunması nedeniyle bu listeye eklenmedi.",
		multi_edit_properties_invalid_msg: "Bazı özellik değerleri, seçilen öğelerin tümü için geçerli değil.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Bu özellik salt okunur, değiştirilemez.",
		multi_edit_append_checkbox_label: "Sonuna Ekle",
		multi_edit_append_checkbox_tooltip: "Yeni özellik değerlerinin var olan değerlerin yerine geçmesini değil, o değerlere eklenmesini istiyorsanız bu seçeneği belirleyin.",
		multi_edit_properties_invalid_childcomponent_msg: "${1} alt bileşeninin ${0} özelliğindeki bazı değerler diğer özelliklere bağımlı ve yaptığınız seçimlerle artık geçerli değil. ${1} alt bileşenindeki değeri temizleyin ya da tek tek seçtiğiniz öğelerde özellik değişiklikleri yapın.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Özellikleri Dışa Aktar",
		export_properties_dialog_info: "Dışa aktarmak istediğini özellikleri seçin ve görüntülenecekleri sırayı belirtin.",
		export_properties_dialog_export_button_label: "Dışa Aktar",
		export_properties_dialog_export_raw_values: "Ham değerleri dışa aktar",

		/* Properties */
		filter_clear_tooltip: "Süzgeci temizler",
		properties_new_row: "Yeni",
		properties_requiredClass_document_tooltip: "Bir belge seçin. Belge ${0} sınıfına ait olmalıdır.",
		properties_requiredClass_folder_tooltip: "Bir klasör seçin. Klasör ${0} sınıfına ait olmalıdır.",
		properties_dataType_tooltip: "Veri tipi: ${0}",
		properties_maxLength_tooltip: "Uzunluk üst sınırı: ",
		properties_minLength_tooltip: "Uzunluk alt sınırı: ",
		properties_minValue_tooltip: "Değer alt sınırı: ",
		properties_maxValue_tooltip: "Değer üst sınırı: ",
		properties_format_tooltip: "Biçim: ",
		properties_description_tooltip: "Tanım: ",

		properties_type_boolean_tooltip: "Boole",
		properties_type_date_tooltip: "Tarih",
		properties_type_time_tooltip: "Time",
		properties_type_timestamp_tooltip: "Zaman damgası",
		properties_type_decimal_tooltip: "Ondalık değer",
		properties_type_double_tooltip: "Kayan noktalı sayı",
		properties_type_short_tooltip: "Tamsayı",
		properties_type_integer_tooltip: "Tamsayı",
		properties_type_long_tooltip: "Tamsayı",
		properties_type_string_tooltip: "Metin dizgisi",
		properties_type_string_alpha_tooltip: "Alfabetik dizgi",
		properties_type_string_alphanum_tooltip: "Alfasayısal dizgi",
		properties_type_string_ext_tooltip: "Genişletilmiş alfasayısal dizgi",
		properties_type_string_num_tooltip: "Sayısal dizgi",
		properties_type_binary_tooltip: "İkili",
		properties_type_object_tooltip: "Nesne",
		properties_type_reference_tooltip: "Bu özellik havuzdaki başka bir özelliğe gönderme yapıyor.",
		properties_type_guid_tooltip: "Genel Benzersiz Tanıtıcı",
		properties_type_group_tooltip: "Kullanıcılar ve Gruplar",
		properties_type_user_tooltip: "Kullanıcılar",
		properties_type_childComponent_tooltip: "Alt Bileşen",

		properties_childComponent_minCardinalityOnly_tooltip: "Bu özelliğin en az ${0} değeri olmalıdır.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Bu özelliğin en çok ${0} değeri olabilir.",
		properties_childComponent_minMaxCardinality_tooltip: "Bu özelliğin en az ${0} değeri olmalıdır ve en çok ${1} değeri olabilir.",
		properties_childComponent_noCardinality_tooltip: "Bu özelliğin herhangi bir sayıda değeri olabilir.",

		properties_type_guid_example_tooltip: ", örneğin {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Listeden bir değer seçin.",
		properties_single_select_choice_tooltip: "Bir değer seçin.",
		properties_multiple_select_typein_tooltip: "Bir ya da daha çok değer girin.",
		properties_multiple_select_choice_tooltip: "Bir ya da daha çok değer seçin.",
		properties_not_selectable_tooltip: "Kategori seçilemez.",
		properties_none: "Yok",
		properties_none_tooltip: "Bu özelliğin yürürlükteki değerinin temizlenmesi için <i>Yok</i> öğesini seçin.",
		properties_value_empty: "Değer yok",
		properties_value_read_only: "Salt okuma",
		properties_clear_label: "Temizle",
		properties_clear_tooltip: "Bu alandaki değerin temizlenmesi, <b>Kaydet</b>'i tıklatmanızdan sonra havuzdaki değerin temizlenmesine neden olur.",
		properties_box_custom_properties: "Özel Özellikler",
		properties_box_metadata_name_in_use: "Bu ad zaten kullanılıyor. Özel özellik için başka bir ad girin.",

		properties_templates: "Şablonlar",
		properties_add_template: "Şablon Ekle",
		properties_remove_template: "Kaldır",
		/* Checkin Document Dialog */
		checkin_dialog_title: "İçeri Ver",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "İçeri Ver",
		checkin_cancel_label: "İptal",
		checkin_file_name_label: "Dosya adı",
		checkin_document_status_title: "Belgeyi İçeri Ver",
		checkin_document_status_uploading_msg: "Dosya karşıya yükleniyor...",
		checkin_document_status_checkingin_msg: "Dosya içeri veriliyor...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Düzelti Kipini Seçin",
		viewer_redaction_new_document_confirmation_question: "Düzeltiyi yeni belge olarak mı, yoksa yerel dosya olarak mı kaydetmek istiyorsunuz?",
		viewer_redaction_new_version_confirmation_question: "Düzeltiyi yeni sürüm olarak mı kaydetmek istiyorsunuz?",
		viewer_redaction_new_version_confirmation_question_never: "Düzeltiyi yeni içerik olarak mı kaydetmek istiyorsunuz?",		
		viewer_redaction_new_document_button: "Evet",
		viewer_redaction_new_document_cancel_button: "Hayır",
		viewer_redaction_add_document_confirmation_question: "Düzeltiyi yeni belge olarak mı, yeni sürüm olarak mı, yoksa yerel dosya olarak mı kaydetmek istiyorsunuz?",
		viewer_redaction_add_document_confirmation_question_version_never: "Düzeltiyi yeni belge olarak mı, yeni içerik olarak mı, yoksa yerel dosya olarak mı kaydetmek istiyorsunuz?",
		viewer_redaction_add_document_button: "Yeni Belge",
		viewer_redaction_add_new_version_button: "Yeni Sürüm",
		viewer_redaction_add_new_version_button_version_never: "Yeni İçerik",
		viewer_redaction_add_local_file_button: "Yerel Dosya",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Düzelti nedenini seçin",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Bu belgeyi havuza eklemek için kullanılan giriş şablonu bulunamıyor. Belge, giriş şablonu kullanılmadan havuza verilir.",
		property_entry_template_not_retrieved_warning: "Bu belgeyi havuza eklemek için kullanılan giriş şablonu bulunamıyor. Belge özellikleri, giriş şablonu kullanılmadan görüntülenir.",
		multi_edit_entry_template_not_found_name: "[Bulunamadı]",
		multi_edit_entry_template_not_retrieved_warning: "Bu öğeleri havuza eklemek için kullanılan giriş şablonu bulunamıyor. Öğe özellikleri, giriş şablonu kullanılmadan değiştirilir.",
		checkin_major_version_hover: "Belge sürümünü 1 artırır ve belgeyi Serbest Bırakıldı durumuna getirir. Bu seçenek belirlenmezse, belge serbest bırakılmaya hazır değildir ve ikincil sürümü olarak içeri verilir.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Belge içeri verilemez, dışarı alınmadı.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Kullanıcı kimliği ya da parola sunucu için geçerli değil.",
		error_bad_userid_password_userResponse: "Kullanıcı kimliğinizi ve parolanızı doğru girip girmediğinizi denetleyin.",
		error_bad_userid_password_adminResponse: "Şu hata döndürüldü: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "hata_iletisi",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Şu URL adresi kullanılarak web istemcisiyle bağlantı kurulamadı: ${0}.",
		http_send_error_explanation: "Bu hatanın nedeni, web uygulama sunucusundaki bir yapılandırma sorunu ya da web istemcisi uygulamasıyla ilgili bir sorun olabilir.",
		http_send_error_userResponse: "Oturum açmayı yeniden deneyin. Sorun devam ederse, bu hatayı sistem yöneticinize bildirin.",
		http_send_error_adminResponse: "Şu HTTP hatası döndürüldü: ${1}.",
		http_send_error_0: "web_istemcisi_URL",
		http_send_error_1: "HTTP_hatası",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Şu URL adresi kullanılarak web istemcisiyle bağlantı kurulamadı: ${0}.",
		http_error_explanation: "Bir güvenlik duvarına kimlk doğrulamasında bulunmanız gerekebilir ya da ağ sorunları nedeniyle web uygulama sunucusu çalışmıyor ya da web uygulama sunucusuna ulaşılamıyor.",
		http_error_userResponse: "Bir güvenlik duvarına kimlik doğrulamasında bulunmanız gerekiyorsa, kimlik doğrulamasını gerçekleştirin ve yeniden oturum açmayı deneyin. Sorun devam ederse, bu hatayı sistem yöneticinize bildirin.",
		http_error_adminResponse: "Şu HTTP hatası döndürüldü: ${1}.",
		http_error_0: "web_istemcisi_URL",
		http_error_1: "HTTP_hatası",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Şu URL adresi kullanılarak web istemcisiyle bağlantı kurulamadı: ${0}.",
		http_response_bad_explanation: "Bu hatanın nedeni, web uygulama sunucusundaki bir yapılandırma sorunu ya da web istemcisiyle ilgili bir sorun olabilir.",
		http_response_bad_userResponse: "Oturum açmayı yeniden deneyin. Sorun devam ederse, bu hatayı sistem yöneticinize bildirin.",
		http_response_bad_adminResponse: "Şu hata döndürüldü: ${1}.",
		http_response_bad_0: "web_istemcisi_URL",
		http_response_bad_1: "HTTP_hatası",
		http_response_bad_number: 2002,

		unititled_document_name: "Adsız",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Eposta uygulamacığı başlatılamıyor.",
		email_applet_init_failed_explanation: "Bu sorun, eposta istemciniz düzgün olarak kurulup yapılandırılmadıysa ya da iş istasyonunuzda desteklenen bir Java Runtime Environment (JRE) sürümü kurulu değilse oluşabilir.",
		email_applet_init_failed_userResponse: "Sorunu çözmek için:<ul><li>Eposta uygulamanızın kurulu olduğunu ve iş istasyonunuzun varsayılan eposta istemcisi olarak ayarlandığını doğrulayın.</li><li>Komut isteminde şu komutu girerek, iş istasyonunuzda desteklenen bir JRE sürümünün kurulu olup olmadığını denetleyin: java -version</li></ul><p>Desteklenen JRE sürümleri listesini, IBM Software Support sitesindeki <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> adlı belgede bulabilirsiniz.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Gerekli bir DLL dosyası yüklenemedi için eposta uygulaması başlatılamadı.",
		email_applet_JNI_LOAD_FAILED_explanation: "Gereken WCEmailAppletJNI.dll dosyası yüklenemiyor; iş istasyonunuzun geçici dizini dolu olabilir.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Geçici dizinde yeterli yer olduğunu doğrulayın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin. Varsayılan olarak, WCEmailAppletJNI.dll dosyası web tarayıcınızın ayarlarında belirtilen geçici dizine yüklenir.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Eposta uygulaması geçici bir dosya yaratamadığı için başlatılamadı.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "İş istasyonunuzun geçici dizini dolu olabilir.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Geçici dizinde yeterli yer olduğunu doğrulayın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Eposta uygulaması geçici dizine erişemediği için başlatılamıyor.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "İş istasyonunuzun geçici dizini dolu olabilir ya da geçici dizine yazmak için gereken erişiminiz olmayabilir.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Geçici dizinde yeterli yer olduğunu ve geçici dizine yazma izinlerine sahip olduğunuzu doğrulayın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ederse, sistem yöneticinize başvurun.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Eposta uygulamacığı geçici dosyayı silemiyor.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Dosyayı başka bir uygulama kullanıyor olabilir ya da dosya iş istasyonunuzda var olmayabilir.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Dosya başka bir uygulama tarafından kullanılıyorsa uygulamayı kapatın. Dosya yerel dosya sisteminizdeyse, şu dosyayı iş istasyonunuzun geçici dizininden kaldırın: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Belgeye bağlantı yaratılamıyor.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Havuzun döndürdüğü URL adresinin biçimi geçersiz.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Tüm sekmeler ve oturumlar da içinde olmak üzere web tarayıcınızı kapatın ve yeniden oturum açın. Web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ediyorsa IBM Software Support olanağına başvurun.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Eposta uygulamacığı dosyayı epostaya ekleyemiyor.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Havuzun belge için döndürdüğü URL adresinin biçimi geçersiz.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Tüm sekmeler ve oturumlar da içinde olmak üzere web tarayıcınızı kapatın ve yeniden oturum açın. Web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ediyorsa IBM Software Support olanağına başvurun.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Ek yaratılamıyor.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Eposta uygulamacığı belgenin URL adresini okuyamıyor.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Tüm sekmeler ve oturumlar da içinde olmak üzere web tarayıcınızı kapatın ve yeniden oturum açın. Web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ediyorsa IBM Software Support olanağına başvurun.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Belge havuzdan alınamadı.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Oturumunuz zamanaşımına uğradı, havuz ya da web uygulama sunucusu çalışmıyor ya da web istemcisi yapılandırmasında bir sorun var.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Oturum açın ve belgeyi epostayla göndermeyi yeniden deneyin. Sorun devam ederse, sistem yöneticinizden havuzun hata günlüklerini incelemesini isteyin.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Web istemcisini, belgeler ek olarak gönderilmeden önce AFP belgelerini başka bir biçime (PDF gibi) dönüştürecek şekilde yapılandırdıysanız, dönüştürmenin doğru olarak yapılandırıldığını doğrulayın.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Belge PDF'e dönüştürülemedi.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Belgeleri PDF'e dönüştürmek için kullanılan araç dosya tipini desteklemiyor.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Bu sayfayı kapatın ve belgeyi PDF'e dönüştürmeden yüklemeyi yeniden deneyin.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Eposta yaratılmadı.",
		email_applet_MAPI_USER_ABORT_explanation: "Eposta uygulamanızı açın ve düzgün çalıştığını doğrulayın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ederse, işletim sisteminizin olay günlüğünü incelemesi için sistem yöneticinize başvurun.",
		email_applet_MAPI_USER_ABORT_userResponse: "Eposta uygulamasını kapatmayı amaçlıyorsanız, başka bir işlem yapılması gerekmez. Epostayı göndermek için, eposta uygulamanızda oturum açın ve web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Eposta yaratılamıyor.",
		email_applet_MAPI_FAILURE_explanation: "Eposta istemciniz açık değil ya da oturum açmadınız.",
		email_applet_MAPI_FAILURE_userResponse: "Eposta uygulamanızı açın ve düzgün çalıştığını doğrulayın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ederse, işletim sisteminizin olay günlüğünü incelemesi için sistem yöneticinize başvurun.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Eposta yaratılamıyor.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Eposta istemcinizde oturum açmadınız. Web istemcisinden ileti göndermek için eposta istemciniz açık olmalıdır ve oturum açmış olmalısınız.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Eposta istemcinizi açın ve oturum açın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Geçici dosya iş istasyonunuzda yaratılamadığı için eposta yaratılamıyor.",
		email_applet_MAPI_DISK_FULL_explanation: "İş istasyonunuzun geçici dizini dolu olabilir.",
		email_applet_MAPI_DISK_FULL_userResponse: "Geçici dizinde yeterli yer olduğunu doğrulayın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Sistem belleği yeterli olmadığı için eposta yaratılamıyor.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Sisteminizde çok fazla uygulama açık olabilir.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Kullanılmayan uygulamaları kapatın ve web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI erişimi verilmedi.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "MAPI (Messaging Application Programming Interface; İleti Alışverişi Uygulama Programlama Arabirimi) erişimi eposta uygulamanız için etkinleştirilmedi ya da desteklenmiyor. MAPI, web istemcinizle eposta uygulamanız arasındaki iletişimi etkinleştirmek için kullanılan ileti alışverişi protokolüdür.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Sistem yöneticinize başvurun.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Eposta uygulamasında MAPI erişiminin doğru olarak kurulduğunu ve yapılandırıldığını doğrulayın. Sorun devam ederse IBM Software Support olanağına başvurun.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Belgeye ek ya da bağlantı yaratılamıyor.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Sisteminizde çok fazla web tarayıcısı oturumu açık olabilir.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Kullanılmayan web tarayıcısı oturumlarını kapatın. Sonra, web istemcisinden belgeyi göndermeyi yeniden deneyin. Sorun devam ederse, sistem yöneticinize başvurun.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Eposta gönderilemiyor.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Çok fazla ek göndermeye çalışıyor olabilirsiniz.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Daha az sayıda dosya seçin. Sonra, web istemcisinden belgeleri göndermeyi yeniden deneyin.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Eposta gönderilemiyor.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Epostayı çok fazla alıcıya gönderiyor olabilirsiniz.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Epostayı daha az sayıda alıcıya gönderin.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Ek yaratılamıyor.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Gereken bazı geçici dosyalar, ek yaratılamadan önce silinmiş olabilir. Eposta gönderilmeden önce tarayıcının önbelleği temizlendiyse bu hata oluşabilir.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Ek yaratılamıyor.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Gereken bazı geçici dosyalar, ek yaratılamadan önce silinmiş olabilir. Eposta gönderilmeden önce tarayıcının önbelleği temizlendiyse bu hata oluşabilir.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Eposta uygulaması eki yaratamıyor.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Eposta belirtilen alıcıya gönderilemiyor.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Alıcı adres defterinde var olmayabilir.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Alıcının adını denetleyin ve belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Eposta belirtilen alıcıya gönderilemiyor.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Eposta adresi doğru biçimlenmemiş olabilir.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Geçerli bir eposta adresi girdiğinizi doğruladıktan sonra belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Eposta gönderilemiyor.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Eposta çok uzun olabilir.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Eposta metnini kısaltın ve epostayı göndermeyi yeniden deneyin.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Eposta yaratılamıyor.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Eposta istemicisi, epostayı yaratmayı denerken başarısız olmuş olabilir.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Eposta istemcinizi yeniden başlatın ve web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Eposta doğru oluşturulmamış olabilir.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Eposta belirtilen alıcıya gönderilemiyor.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Eposta adresi doğru biçimlenmemiş olabilir.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Geçerli bir eposta adresi girdiğinizi doğruladıktan sonra belgeyi yeniden gönderin.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Eposta istemcisi istenen eylemi gerçekleştiremiyor.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Eposta uygulaması beklenmeyen bir hata döndürdü.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Web istemcisinden belgeyi göndermeyi yeniden deneyin.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Özelliklerden birinin gereken sayıda değeri yok.",
		error_property_cardinality_explanation: "Bazı özelliklerin alt sınır ve üst sınır değerleri vardır.",
		error_property_cardinality_userResponse: "Hangi özelliğin alt sınır sayısı kadar değer gerektirdiğini saptamak için beliren yardımı kullanın. Sonra alt sınır sayısı kadar değer belirtin ve yeniden deneyin.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Dosya adı gerekiyor.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Bir dosya adı belirtin ve yeniden deneyin.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} eklentisinde hatalar var.",
		plugin_error_explanation: "${0} eklentisi için JavaScript değerlendirilirken hata oluştu. Web istemcisini kullanmaya devam ederseniz, ek hatalarla karşılaşabilirsiniz.",
		plugin_error_userResponse: "Sistem yöneticinize başvurun.",
		plugin_error_adminResponse: "Eklentide, eklenti sağlayıcısı tarafından çözülmesi gereken bir sorun var. Eklentideki sorun çözülünceye kadar, eklentiyi web istemcisi yapılandırmanızdan kaldırmanız önerilir.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Giriş şablonu açılamıyor.",
		open_old_format_entry_template_error_explanation: "Giriş şablonu, web istemcisinde desteklenmeyen daha eski bir biçimi kullanıyor.",
		open_old_format_entry_template_error_userResponse: "Sistem yöneticinizden giriş şablonunu güncellemesini isteyin.",
		open_old_format_entry_template_error_adminResponse: "Giriş şablonunun güncellenmiş bir sürümünü kaydetmek için Application Engine olanağını ya da Workplace XT Giriş Şablonu Tasarımcısı sihirbazını kullanın.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Giriş şablonu açılamıyor.",
		open_custom_object_entry_template_error_explanation: "Web istemcisi şu giriş şablonu tipini desteklemiyor: Özel Nesne giriş şablonları.",
		open_custom_object_entry_template_error_userResponse: "Farklı bir giriş şablonunu açın.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Eform nesnesi açılamıyor.",
		open_forms_object_error_explanation: "Web istemcisi şu eform nesnesi tiplerini desteklemez: Form şablonu, form verileri, belge ilkesi ve iş akışı ilkesi.",
		open_forms_object_error_userResponse: "Farklı bir belge açın.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "${0} giriş şablonunu kullanamazsınız.",
		entry_template_folder_restricted_error_explanation: "Giriş şablonu öğeleri ${1} klasörüne ekler; ancak, o klasöre öğe eklemek için gereken izinlere sahip değilsiniz.",
		entry_template_folder_restricted_error_userResponse: "Farklı bir giriş şablonu seçin ya da sistem yöneticinizden ${1} klasörüne öğe eklemek için gereken izinleri isteyin.",
		entry_template_folder_restricted_error_0: "giriş_şablonu_adı",
		entry_template_folder_restricted_error_1: "klasör_adı",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Giriş şablonu açılamıyor.",
		open_records_entry_template_error_explanation: "Web istemcisi şu giriş şablonu tipini desteklemiyor: Kayıt Olarak Bildir giriş şablonları.",
		open_records_entry_template_error_userResponse: "Farklı bir giriş şablonunu açın.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "İş akışı açılamıyor.",
		open_workflow_error_explanation: "Web istemcisi iş akışlarının açılmasını desteklemiyor.",
		open_workflow_error_userResponse: "Farklı bir belge açın.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Belge açılamıyor.",
		viewer_unable_to_view_error_explanation: "Bu tip belgeler için herhangi bir görüntüleyici yapılandırılmadı ya da yapılandırılan görüntüleyici sisteminizle uyumlu değil.",
		viewer_unable_to_view_error_userResponse: "Sistem yöneticisinden bu tip belgeler için bir görüntüleyici yapılandırmasını isteyin ve yapılandırılan görüntüleyicinin kullanıcının sistemiyle çalışabildiğini doğrulayın.",
		viewer_unable_to_view_error_adminResponse: "Yönetim aracını kullanarak bu tipteki belgeler için bir görüntüleyici yapılandırın.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Arama açılamıyor.",
		search_cannot_open_error_explanation: "Bu masaüstü için arama özelliği yapılandırılmadı.",
		search_cannot_open_error_userResponse: "Sistem yöneticinize arama özelliğini içeren bir masaüstüne erişip erişemeyeceğinizi ya da bu masaüstünün arama özelliğini içerecek şekilde güncellenip güncellenemeyeceğini sorun.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Belge yüklenmedi.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional görüntüleyicisi belgeyi açamadı.",
		viewer_document_load_failed_error_userResponse: "Daha fazla bilgi için, görüntüleyicide görüntülenen hata iletisine bakın.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Belge görüntülenemez.",
		viewer_session_expired_explanation: "Belge içeriği alınamıyor.",
		viewer_session_expired_userResponse: "Oturum açmayı yeniden deneyin. Sorun devam ederse, uygulama sunucusu çalışmıyor olabilir. Sistem yöneticinizden IBM Content Navigator hata günlüklerini incelemesini ya da sunucuyu yeniden başlatmasını isteyin.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Belge görüntülenemez.",
		ajaxViewer_getPage_failed_explanation: "AJAX Görüntüleyicisi sayfa içeriğini alırken bir hata yanıtı aldı. Uygulama sunucusu çalışmıyor olabilir.",
		ajaxViewer_getPage_failed_userResponse: "Web tarayıcınızı kapatıp yeniden oturum açın. Sorun devam ederse, sistem yöneticinizden web uygulama sunucusu hata günlüklerini incelemesini ya da sunucuyu yeniden başlatmasını isteyin.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "İş istasyonunuzda Java Runtime Environment (JRE) bulunamadı.",
		viewer_java_plugin_not_found_explanation: "Eklenti bulunamadı ya da doğru JRE sürümü kurulu değil.",
		viewer_java_plugin_not_found_userResponse: "JRE'nin kurulu olup olmadığını denetleyin. Örneğin, bir komut isteminde şu komutu girin: Java -version. JRE kurulu değilse ya da yanlış bir sürüm düzeyi kuruluysa, uygun sürümünü kurun. Desteklenen sürümlerin listesini, IBM Software Support sitesindeki <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> adlı belgede bulabilirsiniz.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Belge web tarayıcınızda görüntülenemiyor.",
		viewer_pdf_plugin_not_found_explanation: "Web tarayıcısında PDF belgelerini görüntülemek için kullanılan eklenti bulunamadı.",
		viewer_pdf_plugin_not_found_userResponse: "PDF dosyası görüntüleyici penceresinde görüntülenmek yerine iş istasyonunuza yüklenecek.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Şu öğe havuza eklenemiyor: ${0}.",
		add_document_single_item_error_explanation: "Bu hata şu nedenlerin birinden ötürü oluşur:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Taşınmış ya da silinmiş bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Yeniden adlandırılmış bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Bozulmuş bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Başka bir uygulamada açık olan bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Havuza klasör eklemeye çalışıyorsunuz.</li>" + "<li>İşletim sisteminde belgeye erişmek için gereken izinlere sahip değilsiniz.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Sorunu çözmek için uygun eylemi gerçekleştirin:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Belge taşınmış ya da yeniden adlandırılmışsa, dosya sisteminizde belgeyi bulun ve eklemeyi yeniden deneyin.</li>" + "<li>Belge başka bir uygulamada açıksa, kapatın ve eklemeyi yeniden deneyin.</li>" + "</ul>" + "<br>Havuza klasör ekleyemezsiniz.",
		add_document_single_item_error_0: "başarısız_olan_öğe",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Şu ${0} öğe havuza eklenemiyor: ${1}",
		add_document_multiple_items_error_explanation: "Öğelerden biriyle ilgili bir sorun, öğelerin havuza eklenmesini engelliyor. Bu hata şu nedenlerin birinden ötürü oluşur:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Taşınmış ya da silinmiş bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Yeniden adlandırılmış bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Bozulmuş bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Başka bir uygulamada açık olan bir belgeyi eklemeye çalışıyorsunuz.</li>" + "<li>Havuza klasör eklemeye çalışıyorsunuz.</li>" + "<li>İşletim sisteminde belgeye erişmek için gereken izinlere sahip değilsiniz.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Sorunu çözmek için uygun eylemi gerçekleştirin:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Bir belge taşınmış ya da yeniden adlandırılmışsa, dosya sisteminizde belgeyi bulun ve öğeleri eklemeyi yeniden deneyin.</li>" + "<li>Bir belge başka bir uygulamada açıksa, kapatın ve öğeleri eklemeyi yeniden deneyin.</li>" + "<li>Bir belge silinmiş ya da bozulmuşsa, öğeden seçimi kaldırın ve geri kalan öğeleri eklemeyi yeniden deneyin.</li>" + "</ul>" + "<br>Havuza klasör ekleyemezsiniz.",
		add_document_multiple_items_error_0: "öğelerin_sayısı",
		add_document_multiple_items_error_1: "başarısız_olan_öğelerin_sayısı",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Bu konumdan öğeleri sürükleyip bırakamazsınız.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Eform nesnesi açılamıyor.",
		open_forms_work_object_error_explanation: "Web istemcisi şu eform nesnesi tipini desteklemiyor: iş akışı ilkesi.",
		open_forms_work_object_error_userResponse: "Farklı bir belge açın.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Belge açılamıyor.",
		viewer_privilege_to_view_error_explanation: "Belgeyi görüntülemek için gereken ayrıcalıklara sahip değilsiniz.",
		viewer_privilege_to_view_error_userResponse: "Belgenin sahibinden, belgeyi görüntülemek için gereken izinleri isteyin.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Öğeler havuza eklenemiyor.",
		add_document_too_many_items_error_explanation: "Bir kerede en çok ${0} öğe ekleyebilirsiniz. ${1} öğe eklemeye çalışıyorsunuz.",
		add_document_too_many_items_error_userResponse: "Listedeki öğelerden bazılarını kaldırın ve öğeleri eklemeyi yeniden deneyin. Ayrıca, bu masaüstüne bir kerede ekleyebileceğiniz belge sayısı üst sınırını artırması için sistem yöneticinize başvurabilirsiniz.",
		add_document_too_many_items_error_0: "öğe_sayısı_üst_sınırı",
		add_document_too_many_items_error_1: "öğelerin_sayısı",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Şu URL adresi kullanılarak web istemcisiyle bağlantı kurulamadı: ${0}.",
		http_ltpa_expired_explanation: "Tarama oturumunuzla ilişkilendirilen LTPA anahtarının süresi doldu.",
		http_ltpa_expired_userResponse: "Web tarayıcınızı yeniden başlatın ve oturum açmayı yeniden deneyin. Sorun devam ederse, şu hatayı sistem yöneticinize bildirin: ${1}.",
		http_ltpa_expired_0: "web_istemcisi_URL",
		http_ltpa_expired_1: "HTTP_hatası",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Belge ${0} klasörüne eklenemiyor.",
		dnd_no_privilege_error_explanation: "Klasörle ilgili izinler, klasöre belge eklenmesini engelliyor.",
		dnd_no_privilege_error_userResponse: "Belgeyi başka bir klasöre ekleyin.",
		dnd_no_privilege_error_0: "öğe_adı",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Öğeler değiştirilemiyor.",
		modify_document_too_many_items_error_explanation: "Bir kerede en çok ${0} öğeyi değiştirebilirsiniz. ${1} öğeyi değiştirmeye çalışıyorsunuz.",
		modify_document_too_many_items_error_userResponse: "Daha az öğe seçin ve öğeleri değiştirmeyi yeniden deneyin. Ayrıca, bu masaüstünden bir kerede değiştirebileceğiniz öğe sayısı üst sınırını artırması için sistem yöneticinize başvurabilirsiniz.",
		modify_document_too_many_items_error_0: "öğe_sayısı_üst_sınırı",
		modify_document_too_many_items_error_1: "öğelerin_sayısı",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "${0} sınıfını kullanamazsınız.",
		add_document_multiple_unique_values_error_explanation: "${0} sınıfı her belge için benzersiz bir değer gerektiren bir ya da daha çok özellik içeriyor. Birden çok belge eklediğinizde, belgelerin tümü aynı değerleri kullanır.",
		add_document_multiple_unique_values_error_userResponse: "Farklı bir sınıf seçin ya da belgeleri ayrı olarak ekleyin.",
		add_document_multiple_unique_values_error_0: "sınıfın_görüntü_adı",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "${0} giriş şablonunu kullanamazsınız.",
		add_document_multiple_unique_values_entry_template_error_explanation: "${0} giriş şablonu, belgeleri ${1} sınıfına eklemenizi gerektiriyor. Ancak, ${1} sınıfında her belge için benzersiz bir değer gerektiren bir ya da daha çok özellik var. Birden çok belge eklediğinizde, belgelerin tümü aynı değerleri kullanır.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Farklı bir giriş şablonu seçin ya da belgeleri ayrı olarak ekleyin.",
		add_document_multiple_unique_values_entry_template_error_0: "giriş_şablonu_adı",
		add_document_multiple_unique_values_entry_template_error_1: "sınıfın_görüntü_adı",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "${0} giriş şablonunu kullanamazsınız.",
		entry_template_class_restricted_error_explanation: "Giriş şablonu öğeleri ${1} sınıfını kullanarak ekler; ancak, o sınıfı kullanarak öğe eklemek için gereken izinlere sahip değilsiniz.",
		entry_template_class_restricted_error_userResponse: "Farklı bir giriş şablonu seçin ya da sistem yöneticinizden ${1} sınıfını kullanarak öğe eklemek için gereken izinleri isteyin.",
		entry_template_class_restricted_error_0: "giriş_şablonu_adı",
		entry_template_class_restricted_error_1: "sınıfın_görüntü_adı",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "İş öğesi başka bir kullanıcıya yeniden atanamıyor.",
		process_reassign_error_explanation: "Bu eylem iş akışı tarafından yasaklandı.",
		process_reassign_error_userResponse: "İş öğesini açabilir ve iş akışının yürürlükteki adımını tamamlayabilirsiniz.  Bu konuyla ilgili daha fazla bilgi için, öğenin sahibinden iş öğesinin yeniden atanabileceğini doğrulamasını isteyin.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Şu özel eylem yüklenemiyor: ${0}",
		customaction_loadurl_error_explanation: "Özel eylem erişilebilir bir konumda değil. Özel eylemin yürürlükteki URL adresi ${1}.",
		customaction_loadurl_error_userResponse: "Sistem yöneticinizden özel eylemi erişilebilir bir konuma taşımasını isteyin.",
		customaction_loadurl_error_adminResponse: "Özel eylemi tanımlayan JSP dosyası eClient web uygulamasının ya da IBM Content Navigator web uygulamasının bir parçası olarak sağlanmalıdır.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Şu özellik bulunamıyor: ${0}.",
		feature_invalid_explanation: "Özellik belirtilen masaüstünde yoksa ya da özellik adı yanlış yazıldıysa bu sorun oluşabilir.",
		feature_invalid_userResponse: "Tamam düğmesini tıklattığınızda, bu masaüstünün varsayılan özelliğine yöneltilirsiniz. Bu sorunu sistem yöneticinize bildirin.",
		feature_invalid_adminResponse: "Özelliğin masaüstünde kullanılabilir olması gerekiyorsa, yönetim aracında masaüstü yapılandırmasını güncelleyin. Özelliğin masaüstünde olması gerekmiyorsa ya da özellik adı yanlış yazıldıysa, özelliğin URL adresini yaratan uygulama geliştiriciyle birlikte çalışarak URL adresini güncelleyin.",
		feature_invalid_number: 2066,
		feature_invalid_0: "özellik_adı",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "${0} araması açılamıyor.",
		search_unsupportedTeamspaceSearch_error_explanation: "Bu aramayı açmak için bir ekip alanında olmalısınız.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Farklı bir arama seçin.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Şu dosya içe aktarılamıyor: ${0}.",
		wrong_import_file_type_error_explanation: "Dosya bir özellikler dosyası olmalıdır.",
		wrong_import_file_type_error_userResponse: "Yönetim aracından dışa aktardığınız özellikler dosyasını seçin.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "${0} havuzu ${1} masaüstünde bulunamadı.",
		browse_repository_not_found_error_explanation: "Havuz bir URL parametresinde belirtildiğinde masaüstünde var olmalı ve göz atma özelliği için etkinleştirilmiş olmalıdır.",
		browse_repository_not_found_error_userResponse: "URL adresinde belirtilen havuz tanıtıcısının doğru olduğunu, havuzun ${1} masaüstüne eklendiğini ve havuz için göz atma özelliğinin etkinleştirildiğini doğrulayın.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "${0} havuzu ${1} masaüstünde göz atma özelliği için etkinleştirilmedi.",
		browse_repository_not_enabled_error_explanation: "Havuz bir URL parametresinde belirtildiğinde göz atma özelliği için etkinleştirilmiş olmalıdır.",
		browse_repository_not_enabled_error_userResponse: "${1} masaüstünde ${0} havuzu için göz atma özelliğini etkinleştirin.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Bağlantıda geçersiz ölçütler olduğundan arama tamamlanamıyor.",
		invalid_xt_stored_search_criteria_error_explanation: "Şu değer geçerli değil: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Sistem yöneticinizden güncellenmiş bir bağlantı sağlamasını isteyin.",
		invalid_xt_stored_search_criteria_error_adminResponse: "URL adresindeki ilgili ad-değer çiftini düzenleyin. Özellik için hangi değerlerin geçerli olduğunu bilmiyorsanız, geçerli değeri saptamak için kayıtlı aramayı FileNet Workplace XT Search Designer olanağında açın.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Havuzlar arası arama açılamıyor.",
		unified_search_invalid_fixed_value_error_explanation: "Havuzlar arası aramada geçersiz ölçütler var. Bir ölçütün eşlemedeki diğer özelliklerle uyumlu olmayan sabit bir değeri varsa bu sorun oluşabilir. Örneğin, sabit değer bir dizgiyse, ancak eşlemedeki diğer özellikler tamsayıysa bu sorun oluşur.",
		unified_search_invalid_fixed_value_error_userResponse: "Aramayı düzenlemek için gereken izinlere sahipseniz, geçersiz ölçütü kaldırın ve aramayı yeniden kaydedin. Aramayı düzenlemek için gereken izinlere sahip değilseniz, aramanın sahibinden ya da sistem yöneticinizden aramayı yeniden kaydetmesini isteyin.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "İsteğiniz tamamlanamıyor.",
		launch_action_invalid_json_error_explanation: "Web istemcisine geçirilen veriler geçerli değil.",
		launch_action_invalid_json_error_userResponse: "Sistem yöneticinize bu sorun oluştuğunda kullanmakta olduğunuz uygulamayı bildirin.",
		launch_action_invalid_json_error_adminResponse: "İstemci uygulaması web istemcisine geçerli bir JSON nesnesi göndermedi. Ek yardım almak için IBM Software Support olanağına başvurun.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "İsteğiniz tamamlanamıyor.",
		launch_action_not_found_error_explanation: "${0} eylemi, ${1} masaüstündeki hiçbir menü için yapılandırılmadı.",
		launch_action_not_found_error_userResponse: "Sistem yöneticinizden ${1} masaüstünü ${0} eylemini içeren bir menüyü kullanacak şekilde yapılandırmasını ya da size ${0} eylemini içeren bir masaüstü atamasını isteyin.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "İsteğiniz tamamlanamıyor.",
		launch_action_repository_not_found_error_explanation: "${0} havuzu ${1} masaüstüyle ilişkilendirilmedi.",
		launch_action_repository_not_found_error_userResponse: "Sistem yöneticinizden ${0} havuzunu ${1} masaüstüyle ilişkilendirmesini ya da size ${0} havuzunu içeren bir masaüstü atamasını isteyin.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Ekip alanı açılamıyor.",
		teamspace_cannot_open_error_explanation: "Bu masaüstü için ekip alanı özelliği yapılandırılmadı.",
		teamspace_cannot_open_error_userResponse: "Sistem yöneticinize ekip alanı özelliğini içeren bir masaüstüne erişip erişemeyeceğinizi ya da bu masaüstünün ekip alanı özelliğini içerecek şekilde güncellenip güncellenemeyeceğini sorun.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Düzeltilen içerik içeri verilirken hata oluştu.",
		viewer_redaction_checkin_failed_explanation: "Düzeltilen içerik içeri verilirken görüntüleyici bir hata aldı.",
		viewer_redaction_checkin_failed_userResponse: "Sistem yöneticinizden web uygulama sunucusu günlüklerini gözden geçirmesini isteyin.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Bu havuza belge ekleyemezsiniz.",
		add_document_odserver_odwek_version_od_error_explanation: "IBM Content Manager OnDemand Server'ın ya da ODWEK'in yürürlükteki sürümü, bir Content Manager OnDemand havuzuna belge eklenmesini desteklemek için gereken en düşük sürüm düzeyinde değil.",
		add_document_odserver_odwek_version_od_error_userResponse: "Content Manager OnDemand havuzlarına belge eklenmesini desteklemek için gereken Content Manager OnDemand Server ve ODWEK sürümlerini yöneticinizden öğrenin.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Öğeler havuza eklenemiyor.",
		add_document_too_many_items_od_error_explanation: "IBM Content Manager OnDemand havuzları için bir kerede tek bir öğe ekleyebilirsiniz.",
		add_document_too_many_items_od_error_userResponse: "Listedeki öğelerden bazılarını kaldırın ve öğeleri birer birer eklemeyi deneyin.",
		add_document_too_many_items_od_error_0: "öğe_sayısı_üst_sınırı",
		add_document_too_many_items_od_error_1: "öğelerin_sayısı",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Öğe havuza eklenemiyor.",
		add_document_filesize_empty_od_error_explanation: "Bir IBM Content Manager OnDemand havuzuna boş dosya ekleyemezsiniz.",
		add_document_filesize_empty_od_error_userResponse: "Dosyaya içerik ekledikten sonra dosyayı eklemeyi yenide deneyin ya da farklı bir öğe ekleyin.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Havuzlar arası arama açılamıyor.",
		unified_search_repository_not_found_error_explanation: "Havuzlar arası arama geçersiz bir ya da daha fazla havuz içeriyor. Arama kapsamındaki havuzlar uygulamadan silindiyse ya da yürürlükteki masaüstünden kaldırıldıysa bu sorun oluşabilir.",
		unified_search_repository_not_found_error_userResponse: "Aramayı düzenlemek için gereken izinlere sahipseniz, aramayı yeniden kaydedin. Aramayı kaydettiğinizde, web istemcisi geçersiz havuzları aramadan kaldırır. Aramayı düzenlemek için gereken izinlere sahip değilseniz, aramanın sahibinden ya da sistem yöneticinizden aramayı yeniden kaydetmesini isteyin.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Yeni belge yaratılamıyor.",
		edit_document_using_office_online_error: "Belge açılamıyor.",
		edit_document_using_office_online_error_explanation: "Microsoft Office Online Server URL adresi yapılandırılmadı.",
		edit_document_using_office_online_error_userResponse: "Office Online'ı kullanabilmeniz için, yöneticiniz Office Online Server'ı bir havuzda etkinleştirmeli ve Microsoft Office Online Server URL adresini belirtmelidir.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Belge Microsoft Office Online'da açılamıyor.",
		edit_document_using_office_online_error_userResponse1: "Sistem yöneticinizden MS Office Online Server Integration'ı güncellemesini isteyin.<br><br> Kullanıcının bu belgeye Microsoft Office Online'dan erişmesi gerekiyorsa, havuzun Edit Service Bütünleşmesi sayfasına gidin ve MS Office Online Server Integration'ı sınıf listesinde Office Online için değiştirilmesi gereken sınıfı içerecek şekilde güncelleyin. ",		
		browser_not_support_this_viewer: "Yapılandırılan görüntüleyici tarayıcınızla uyumlu değil.",
		browser_not_support_this_viewer_explanation: "${0} tarayıcı tarafından desteklenmiyor.",
		browser_not_support_this_viewer_userResponse: "Belgeyi açmak için başka bir görüntüleyiciyi kullanın. Desteklenen tarayıcıların listesini, IBM Software Support sitesindeki <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> adlı belgede bulabilirsiniz.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "İş Akışı Bilgileri",
		process_information_info_text: "Seçilen öğe aşağıdaki iş akışlarda çalışıyor.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Buna Eşit",
		operator_NOTEQUAL: "Buna Eşit Değil",
		operator_LIKE: "Benzer",
		operator_STARTSWITH: "Bununla Başlar",
		operator_ENDSWITH: "Bununla Biter",
		operator_NOTLIKE: "Benzer Değil",
		operator_NULL: "Boş",
		operator_NOTNULL: "Boş Değil",
		operator_LESS: "Bundan Küçük",
		operator_LESSOREQUAL: "Bundan Küçük veya Eşit",
		operator_GREATER: "Bundan Büyük",
		operator_GREATEROREQUAL: "Bundan Büyük veya Eşit",
		operator_BETWEEN: "Bu Aralıkta",
		operator_NOTBETWEEN: "Bu Aralıkta Değil",
		operator_IN: "Tümünü İçer",
		operator_INANY: "Herhangi Birini İçer",
		operator_NOTIN: "Tümünü Dışla",
		operator_CONTAINS: "Bunu İçerir",

		/* SearchForm widget */
		search_button_tooltip: "Ölçütlerinize eşleşen belgeleri arayın.",
		reset_button_tooltip: "Aramayı, sistem yöneticiniz tarafından belirlenen varsayılan değerlere geri çevirir.",
		clear_button_tooltip: "Arama için girdiğiniz tüm değerleri kaldırır.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Arama Seçin",
		append_to_search: "Aramaya Ekle",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Yeni Arama",
		new_unified_search: "Yeni Havuzlar Arası Arama",
		searh_name_contains: "Arama adı şunu içerir",
		keep_search_criteria_expanded: "Arama ölçütlerini açık tut",
		showing_results: "İlgili arama sonuçları gösteriliyor:",
		open_in_new_window: "Yeni Pencerede Aç",
		open_in_new_tab: "Yeni Sekmede Aç",
		close_tab: "Sekmeyi Kapat",
		add_repository: "Havuz Ekle",
		edit_repository: "Havuzu Düzenle",
		remove_repository: "Kaldır",
		search_scope: "Arama Kapsamı",
		search_class_template: "Sınıf",
		object_type_version: "Nesne Tipi ve Sürümü",
		not_applicable: "Burada geçerli değil",
		unified_search_including_subfolders: " (Alt klasörler de içinde)",
		unified_search_dialog_intro_text: "Aramanın içermesini istediğiniz havuzu ve aramayı ya da sınıfları seçin.",
		unified_search_class_or_template: "Sınıf ya da Şablon",

		select_object_fieldset_legend: "Eklenecek öğeleri nasıl bulmak istiyorsunuz:",
		select_object_create_new_search: "Yeni arama",
		select_object_search_template: "Var olan arama",

		search_criteria: "Arama Ölçütleri:",
		search_criteria_no_colon: "Arama Ölçütleri",
		search_in_multiple: "(${0}) içinde ara:",
		search_location_including_subfolders: "Alt klasörler de içinde olmak üzere ${0}",
		search_class: "Sınıf:",
		search_class_multiple: "Sınıf (${0}):",
		search_class_including_subclasses: "Alt sınıflar da içinde olmak üzere ${0}",
		search_class_all_pseudo: "Tümü",
		search_results: "Arama Sonuçları",
		select_operator: "İşleç seçin",
		ending_value: "${0} özelliğinin bitiş değeri:",
		search_options: "Arama seçenekleri:",
		search_version: "Sürüm:",
		search_released_version: "Serbest bırakılan sürüm",
		search_current_version: "Yürürlükteki sürüm",
		search_all_versions: "Tüm sürümler",
		search_file_type_filter: "Dosya tipi süzgeci:",
		search_one_file_type: "1 dosya tipi",
		search_many_file_types: "${0} dosya tipi",
		search_action_filter: "Eylem süzgeci:",
		search_action_filter_hover_help: "Yalnızca, kullanıcıların üzerinde özel eylem gerçekleştirdikleri dosyaları içerecek şekilde, sonuçları daraltır.<br/>Örneğin, yalnızca 20 Eylül 2012 tarihinde eklediğiniz belgeleri arayabilirsiniz.",
		search_action_filter_enabled: "Eylem süzgeci etkinleştirildi",
		search_enable: "Etkinleştir",
		search_disable: "Geçersiz Kıl",
		search_by: "/",
		search_added: "Ekleyen",
		search_modified: "Değiştiren",
		search_checked_out: "Dışarı alan",
		search_date_operator_on: "Açık",
		search_date_operator_not_on: "bu tarihte değil",
		search_date_operator_before: "Bu tarihten önce",
		search_date_operator_after: "Bu tarihten sonra",
		search_version_hover_help_p8: "Serbest bırakılan sürüm, tüm kullanıcılar tarafından kullanılabilir. Bir belgenin yürürlükteki sürüm olması, o belgenin bir ya da daha çok kullanıcı tarafından düzenlenmekte olduğunu gösterir.",
		search_version_hover_help_cm: "Yürürlükteki sürüm, öğenin en son sürümüdür.",
		search_using: "Eşleşen öğeleri ara:",
		search_property_and_text_criteria: "Hem özellik değerleri hem de metin ölçütleri",
		search_property_or_text_criteria: "Ya özellik değerleri ya da metin ölçütleri",
		search_property_and_text: "Hem özellik hem de metin ölçütleri",
		search_property_or_text: "Ya özellik ya da metin ölçütleri",
		search_property_options: "Özellik seçenekleri:",
		search_property_option_match_all: "Özelliklerin tümü",
		search_property_option_match_any: "Özelliklerin herhangi biri",
		search_property_option_match_all_summary: "Tümünü eşleştir",
		search_property_option_match_any_summary: "Herhangi birini eşleştir",
		search_total_count_type_total: "Toplam",
		search_total_count_type_atleast: "En az",
		search_content_size_filter: "İçerik büyüklüğü süzgeci:",
		search_content_size_filter_any: "Herhangi bir içerik büyüklüğü",

		/* Search work options */
		search_work_filter: "İş öğesi süzgeci:",
		search_work_filter_hover_help: "Sonuçları, yalnızca bir iş akışında bulunan öğeleri içerecek şekilde daraltmanızı sağlar. Örneğin, sonuçları yalnızca etkin iş öğelerini içerecek şekilde daraltabilirsiniz.<br /><br />Aramanın döndürdüğü öğelerin tüm sürümlerini görmek istiyorsanız bu seçenek geçerli değildir.",
		search_work_filter_enabled: "İş öğesi süzgeçi etkinleştirildi",
		search_work_filter_status: "Durum:",
		search_work_filter_step: "Adım:",
		search_work_filter_owner: "Sahip:",
		search_work_filter_status_all: "Tüm öğeler",
		search_work_filter_status_active: "Etkin öğeler",
		search_work_filter_status_suspended: "Askıya alınmış öğeler",
		search_work_filter_process_all: "Tüm iş akışları",
		search_work_filter_step_all: "Tüm adımlar",
		search_work_filter_owner_all: "Tüm kullanıcılar",
		search_work_filter_step_error: "Adım adı yok.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Ek bilgi olmadan arama tamamlanamaz. En az bir koşul için değer girin.",
		search_insufficient_input_box: "Ek bilgi olmadan arama tamamlanamaz. Metin arama ölçütleri girin ya da bir meta veri şablonu seçin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Arama ek bilgi olmadan açıldığında çalışmak üzere yapılandırılamaz. En az bir koşul için değer girin.",
		search_member_required: "Bu aramayı belirli kullanıcılar ve gruplar ile paylaşmak için, aramayı paylaşmak üzere en az bir kullanıcı ya da grup seçin.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Değişiklikleri kaydetmeden kapatmak istiyor musunuz?",
		search_prompt_close_all_without_save: "Değişiklikleri kaydetmeden tüm sekmeleri kapatmak istiyor musunuz?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Aşağıdaki arama ölçütü tiplerinden biri bu havuz için geçerli değil: ${0}. Aramayı web istemcisinde çalıştırmak için geçersiz ölçütler kaldırılmalıdır. Aramayı kaydederseniz, geçersiz ölçütler kaldırılır. Aramayı değiştirmek istemiyorsanız kapatın.",
		search_invalid_repository: "Bir ya da daha çok havuz",
		search_invalid_class: "Bir ya da daha çok sınıf",
		search_invalid_folder: "Bir ya da daha çok klasör",
		search_invalid_file_type: "Bir ya da daha çok dosya tipi",
		search_invalid_property: "Bir ya da daha çok özellik",
		search_invalid_text_search: "Metin arama ölçütleri",
		search_invalid_work: "İş öğesi süzgeç ölçütleri",

		search_operator_pulldown_missing: "Bir işleç gereklidir. Açılan menüden işleç seçin. Listede işleç görmüyorsanız, tüm işleçlerin gizlenmiş olup olmadığını saptamak için sistem yöneticinizden yönetim aracındaki <b>Ara</b> sekmesini denetlemesini isteyin. Bu bir havuzlar arası aramaysa ve birbiriyle eşlenen özelliklerin ortak işleçleri yoksa, açılan menü herhangi bir işleç içermez.",

		/*SearchBuilder */
		open_search_builder: "Yeni Arama",
		document_type: "Sınıf",
		show_all_properties: "Tüm Özellikleri Göster",
		text_search_label: "Şu terimleri içeren öğeleri bul:",
		text_search_place_holder: "Terim ve işleçlerin bir birleşimini kullan: * ? ya da \"tam eşleşme sözcük grupları\"",
		text_search_place_holder_box: "Terim ve işleçlerin bir birleşimini kullan: AND, OR, NOT ve \"tam eşleşme sözcük grupları\"",
		text_search_place_holder_cascade_proximity: "Terim ve işleçlerin bir birleşimini kullan: * ya da ?",
		text_search_place_holder_common: "Terimlerle \"tam eşleşme sözcük grupları\" birleşimini kullan",
		text_search_hover_help_p8: "Joker karakter olarak yıldız işareti (*) ya da soru işareti (?) kullanın. Tam eşleşme için çift tırnak işareti (\"\") kullanın.",
		text_search_hover_help_p8_only_crs: "Joker karakter olarak yıldız işareti (*) ya da soru işareti (?) kullanın. Tam eşleşme için çift tırnak işareti (\"\") kullanın. Birden çok terim belirttiğinizde, havuzlar arası arama bu terimlerin herhangi birini içeren öğeleri döndürür.",
		text_search_hover_help_cm: "Joker karakter olarak yıldız işareti (*) ya da soru işareti (?) kullanın. Tam eşleşme için çift tırnak işareti (\"\") kullanın. Dışlanacak terimlerin başına - işaretini ve içerilecek terimlerin başına + işaretini ekleyin.",
		text_search_hover_help_box: "Tüm terimleri eşleştirmek için terimler arasında AND işlecini kullanın. Terimlerin herhangi birini eşleştirmek için terimler arasında OR işlecini kullanın. Tam eşleşme için çift tırnak işareti (\"\") kullanın. Dışlanmasını istediğiniz terimin başında NOT işlecini kullanın.",
		text_search_hover_help_common: "Tam eşleşme için çift tırnak işareti (\"\") kullanın. Birden çok terim belirttiğinizde, havuzlar arası arama bu terimlerin tümünü içeren öğeleri döndürür.",
		text_search_options: "Metin seçenekleri:",
		text_search_options_hover_help: "Joker karakterler dışında işleç kullanacaksanız Gelişmiş İşleçler'i seçin.",
		text_search_option_any: "Terimlerin herhangi biri",
		text_search_option_all: "Terimlerin tümü",
		text_search_option_proximity: "Sözcüklerin yakınında:",
		text_search_option_none: "Gelişmiş işleçler",
		text_search_option_authoring: "Metin araması:",
		text_search_option_authoring_hover_help: "Metin arama ölçütlerinin kullanıcılar tarafından nasıl kullanılabilmesini istediğinizi gösteren seçeneği belirleyin. Aramanın herhangi bir metin arama ölçütü içermesini istemiyorsanız, seçeneği gizleyin. Tersi durumda, metin arama ölçütlerini kullanıcılar için düzenlenebilir, gerekli ya da salt okunur olarak belirleyebilirsiniz.",
		text_search_option_hide: "Ölçütleri gizle",
		text_search_option_hide_hover_help: "Aramanın metin arama ölçütleri içermesini ya da diğer kullanıcıların metin arama ölçütleri belirtmesini istemiyorsanız bu seçeneği belirleyin.",
		text_search_option_in: "${0} HTML/XML etiketinde",
		text_search_option_paragraph: "Aynı paragrafta",
		text_search_option_sentence: "Aynı tümcede",
		text_search_option_vql: "VQL sorgusu",
		text_search_option_none_hover_help: "Dışlanacak terimlerin başına - işaretini ekleyin.",
		text_search_option_cascade_proximity_hover_help: "Arama ölçütlerini, tam sözcük grubu içermeyen bir sözcük aralığındaki terimlerle sınırlar.",

		box_search_metadata: "Meta veri:",
		box_search_select_template: "Şablon seç",
		box_search_no_templates: "Kullanılabilecek şablon yok",
		box_text_search_options_search_within: "Arama kapsamı:",
		box_text_search_options_search_within_everything: "Her şey",
		box_text_search_options_search_within_file_content: "Belge İçeriği",
		box_text_search_options_search_within_tags: "Etiketler",
		box_text_search_options_limit_to: "Yalnızca bu öğeleri ara:",

		add_property: "Özellik Ekle",
		edit_template: "Aramayı Düzenle",
		save_search: "Aramayı Kaydet",
		search_template_name: "Ad:",
		search_template_desc: "Tanım:",
		auto_run: "Aramayı açılınca çalıştır",
		show_in_tree: "Aramayı klasör yapısında göster",
		show_in_tree_hover_help: "Bir arama bir klasöre kaydedilirse, varsayılan olarak yalnızca içerik listesinde görüntülenir. Bu seçeneği belirlerseniz, arama Göz At görünümündeki klasör ağacında da görüntülenir.  Ancak, aramanın klasör ağacında gösterilmesi için aramayı bir klasöre kaydetmiş olmanız gereklidir.",
		share_search_with: "Aramayı bu kişilerle paylaş:",
		remove_member: "${0} öğesini kaldır",
		ok_button_label: "Tamam",
		save_template: "Kaydet",
		save_template_title: "Belirli öğeleri sık sık aramanız gerekiyorsa, arama ölçütlerinizi kaydedin.",
		remove_criterion: "Kaldır",
		apply_button_label: "Uygula",
		empty_search_results_pane: "Sonuçları görmek için arama çalıştırın.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Tüm Havuz",

		repository_already_selected: "${0} havuzu havuzlar arası aramaya eklenemiyor; bu havuz zaten havuzlar arası aramanın kapsamında. <br/> Bir havuz havuzlar arası aramaya bir kez eklenebilir. <br/>Havuzlar arası aramaya eklemek için başka bir havuz seçin.",

		repository_limit_reached: "${0} havuzu havuzlar arası aramaya eklenemiyor. Aramaya en çok ${1} havuz ekleyebilirsiniz.",

		nomore_criteria_toappend: "Arama ölçütleri eşlenen tüm özellikleri zaten içeriyor. Arama ölçütlerine özellik eklenmedi.",
		nomore_criteria_toappend_regular: "Arama ölçütleri tüm özellikleri zaten içeriyor. Arama ölçütlerine özellik eklenmedi.",

		/* OD Save Search dialog */
		reload_label: "Yeniden Yükle",
		od_save_search_help_text: "Arama için bir ad yazın ya da yerine koymak için var olan bir aramayı seçin",
		public_access_label: "Başkalarının bu aramayı kullanmasına izin ver",
		od_delete_search_help_text: "Silmek için bir ya da daha çok arama seçin",
		delete_save_searches: "Kayıtlı Aramaları Sil",

		/* Unified Search */
		unified_search_enable_text_search: "Metin arama ölçütlerini içer",
		unified_search_text_search_enabled: "Metin Arama İçerildi",
		unified_search_mapping: "Eşleme",
		unified_search_new_mapping: "Yeni Eşleme",
		unified_search_mapping_name: "Eşleme Adı",
		unified_search_mapping_dialog_instructions: "Eşlemek istediğiniz özellikleri seçin. Bazı özellikler veri tipi farklı olan özelliklerle eşlenebilir. Örneğin, bir dizgi özelliğini tamsayı özelliğiyle eşleyebilirsiniz. Bir özelliği başka bir özellikle eşlediğinizde, havuzlar arası aramada bu özellikler tek bir özellik olarak ele alınır.",
		unified_search_filter_available_properties: "Kullanılabilecek özelliklere süzgeç uygula",
		unified_search_available_properties: "Kullanılabilecek Özellikler",
		unified_search_mapped_properties: "Eşlenen Özellikler",
		unified_search_single_values: "tek değer",
		unified_search_multiple_values: "birden çok değer",
		unified_search_add_mapping: "Eşleme Ekle",
		unified_search_warn_remove_repository: "Seçilen havuz arama ölçütlerinde kullanıldı.\nHavuzu kaldırırsanız, bu havuzu içeren eşlemeler ve arama ölçütleri silinir.\n\nHavuzu kaldırmak istiyor musunuz?",
		unified_search_warn_update_repository_mappings: "Bu havuz için özellik seçiminin değiştirilmesi arama ölçütlerini etkiler.\n\nArama ölçütlerinde, kaldıracağınız özelliklerden birini ya da daha fazlasını içeren bir ya da daha fazla eşleme var. Kaldıracağınız özellikleri içeren eşlemeler silinmelidir. Aramayı çalıştırmak için, bu eşlemeleri içeren arama ölçütleri silinmelidir.\n\nHavuz seçeneklerini güncellemek ve eşlemeleri ve arama ölçütlerini silmek istiyor musunuz?",
		unified_search_warn_update_repository_mappings_reset: "Bu havuz için metin arama ölçütlerinin içerilmesi havuzlar arası arama ölçütlerini etkiler.\n\nAramayı çalıştırmak için, bu havuza ilişkin özelliklerin bulunduğu bir eşleme içeren her özellik arama ölçütü temizlenmelidir.\n\nHavuz seçeneklerini güncellemek ve arama ölçütlerini temizlemek istiyor musunuz?",
		unified_search_warn_update_repository_text_criteria: "Bu havuz için metin arama ölçütlerinin kaldırılması havuzlar arası arama ölçütlerini etkiler.\n\nAramayı çalıştırmak için, metin arama ölçütleri havuzlar arası arama ölçütlerinden silinmelidir.\n\nHavuz seçeneğini güncellemek ve metin arama ölçütlerini silmek istiyor musunuz?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Bu havuz için metin arama ölçütlerinin kaldırılması ve özellik seçiminin değiştirilmesi havuzlar arası arama ölçütlerini etkiler.\n\nAramayı çalıştırmak için, metin arama ölçütleri havuzlar arası arama ölçütlerinden silinmelidir. Ayrıca, özellik arama ölçütlerinde, kaldıracağınız özelliklerden birini ya da daha fazlasını içeren bir ya da daha fazla eşleme var. Kaldıracağınız özellikleri içeren eşlemeler silinmelidir. Aramayı çalıştırmak için, bu eşlemeleri içeren özellik arama ölçütleri silinmelidir.\n\nHavuz seçeneklerini güncellemek ve metin arama ölçütlerini, eşlemeleri ve özellik arama ölçütlerini silmek istiyor musunuz?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Bu havuz için metin arama ölçütlerinin dışlanması havuzlar arası arama ölçütlerini etkiler.\n\nAramayı çalıştırmak için, bu havuza ilişkin özelliklerin bulunduğu bir eşleme içeren her özellik arama ölçütü temizlenmelidir. Aramayı çalıştırmak için, metin arama ölçütleri havuzlar arası arama ölçütlerinden silinmelidir.\n\nHavuz seçeneklerini güncellemek ve arama ölçütlerini temizlemek istiyor musunuz?",
		unified_search_warn_remove_mapping: "Bu eşlemenin kaldırılması arama ölçütlerini etkiler.\n\nAramayı çalıştırmak için, eşlemeyi kullanan arama ölçütleri silinmelidir.\n\nEşlemeyi güncellemek ve arama ölçütlerini silmek istiyor musunuz?",
		unified_search_warn_update_mapping: "Bu eşlemede yapılan değişiklikler arama ölçütlerini etkiler.\n\nAramanın geçersiz işleçler ya da geçersiz değerler içermemesini güvenceye almak için, eşlemeyi kullanan arama ölçütleri temizlenmelidir.\n\nEşlemeyi güncellemek ve arama ölçütlerini temizlemek istiyor musunuz?",
		unified_search_warn_update_mapping_not_searchable: "Bu eşlemede yapılan değişiklikler arama ölçütlerini etkiler.\n\nEşlenmiş özelliklerin tümü salt görüntülenir olduğunda, eşlemeyi arama ölçütlerinde kullanamazsınız. Aramayı çalıştırmak için, eşlemeyi kullanan arama ölçütleri silinmelidir.\n\nEşlemeyi güncellemek ve arama ölçütlerini silmek istiyor musunuz?",
		unified_search_warn_update_mapping_box_searchable: "Bu eşlemede yapılan değişiklikler arama ölçütlerini etkiler.\n\nBu eşleme arama ölçütlerinde bir kereden fazla geçiyor; ${1} havuzundan ${0} özelliğini eklerseniz, ${0} özelliği arama ölçütlerinde çok fazla geçer. Aramayı çalıştırmak için, eşlemeyi kullanan arama ölçütleri silinmelidir.\n\nEşlemeyi güncellemek ve arama ölçütlerini silmek istiyor musunuz?",
		unified_search_details: "Havuzlar arası arama ayrıntıları",
		unified_search_fixed_value_property: "Sabit değerli özellik",
		unified_search_required_property: "Gerekli özellik",
		unified_search_display_only_property: "Salt görüntülenir özellik",
		unified_search_missing_required_properities: "Arama kaydedilemiyor ya da çalıştırılamıyor.<br/>Şu özellikler gereklidir:${0}Özellikleri bir eşlemeye eklemeniz ve özellikleri değerleriyle arama ölçütlerine eklemeniz gerekir.",
		unified_search_property_repostory: "${0} (Havuz: ${1})",
		unified_search_builder_no_mappings: "Arama çalıştırılamıyor.<br/>Bir özellik eşlemesi yaratmalı ve aramanın sonuçları görüntülemesi için <b>Sonuç Görüntüsü</b>'ne eklemelisiniz.",
		unified_search_builder_insufficient_criteria_to_run: "Arama çalıştırılamıyor.<br/>Arama ölçütleri, şu havuzlar için metin arama ölçütleri ya da özellik değerleri içermiyor: ${0}Aramaya katılan her havuz için, metin arama ölçütlerini girmeli ya da bir özellik eşlemesi yaratıp özellik ölçütlerine eklemeli ve bir özellik değeri belirtmelisiniz.",
		unified_search_builder_insufficient_criteria_to_save: "Arama kaydedilemiyor.<br/>Arama ölçütleri şu havuzlar için arama ölçütleri içermiyor: ${0}Aramaya katılan her havuz için şu seçeneklerden birini gerçekleştirmelisiniz.<ol><li>Bir özellik eşlemesi yaratın ve özellik ölçütlerine ekleyin.</li><li>Havuzu metin arama ölçütleri içerecek şekilde değiştirin ve bir özellik eşlemesi yaratıp <b>Sonuç Görüntüsü</b>'ne ekleyin.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Arama çalıştırılamıyor.<br/>Aramadaki her havuz için en az bir özellik değeri belirtmelisiniz. Örneğin, şu özelliklerin değerlerini belirtebilirsiniz: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Arama çalıştırılamıyor.<br/>Metin arama ölçütleri gereklidir.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Arama çalıştırılamıyor.<br/>Aramadaki her havuz için en az bir özellik değeri belirtmeli ya da metin arama ölçütleri girmelisiniz. Örneğin, şu özelliklerin değerlerini belirtebilirsiniz: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Arama çalıştırılamıyor.<br/>Metin arama ölçütleri gereklidir. Aramadaki her havuz için en az bir özellik değeri belirtmeli ya da metin arama ölçütleri girmelisiniz. Örneğin, şu özelliklerin değerlerini belirtebilirsiniz: ${0}",
		unified_search_invalid_criteria: "Aramada, aramanın çalışmasını engelleyen geçersiz ölçütler var.<br/>Geçersiz ölçütler kaldırıldı. Ancak, aramayı çalıştırabilmek için değişiklikleri kaydetmelisiniz. Değişiklikleri kaydetmek istemiyorsanız aramayı kapatın.<br/><br/>Şu öğeler kaldırıldı ya da değiştirildi:${0}",
		unified_search_invalid_fixed_values: "Arama kaydedilemiyor ya da çalıştırılamıyor.<br/>Şu arama ölçütlerinde geçersiz sabit değerler var:${0}Sorunu çözmek için şu eylemlerden birini gerçekleştirin:<ul><li>Geçersiz değerler içeren arama ölçütlerini kaldırın.</li><li>Özelliği kaldırmak için, sabit değerli IBM Content Manager OnDemand özelliğini içeren eşlemeyi düzenleyin.</li><li>Tüm özelliklerin uyumlu olmasını sağlamak için, sabit değerli IBM Content Manager OnDemand özelliğini içeren eşlemeyi düzenleyin. Eşlenebilecek özelliklerle ilgili daha fazla bilgi için, özellik eşleme penceresinin üst kısmında yer alan giriş metnindeki Daha Fazla Bilgi bağlantısını kullanın.</li></ul>",
		unified_search_cannot_add_properties: "Bu aramaya özellik ekleyemezsiniz.<br/>Var olan eşlenmiş özelliklerinizin tümü arama ölçütlerinde zaten var; her özellik aramaya tek bir kez eklenebilir.",
		unified_search_mapping_not_viewable: "Box şablonu özellikleri arama sonuçlarında görüntülenemez. Bu eşlemeyi bir sütun olarak eklemek istiyorsanız, Box şablonu özelliği olmayan en az bir özelliği eşlemelisiniz. Örneğin, başka bir havuzdaki bir özelliği seçebilirsiniz.",

		unified_search_returned_more: "İzin verilen sonuç sayısı üst sınırını aşan en az bir havuz var.",
		unified_search_partial_failure: "En az bir havuzda hata oluştu.",
		unified_search_partial_failure_and_returned_more: "En az bir havuzda hata oluştu ve en az bir havuz izin verilen sonuç sayısı üst sınırını aştı.",
		unified_search_see_analysis: "Sonuç analizine bakın.",
		unified_search_analysis_intro_returned_more: "İzin verilen sonuç sayısı üst sınırını aşan her havuz için, arama ölçütlerinizi daha az sonuç döndürecek şekilde iyileştirmeyi deneyin. Ya da havuzlar arası arama için izin verilen üst sınırdan daha fazla sonuç döndürecek tek bir havuz araması çalıştırabilirsiniz.",
		unified_search_analysis_intro_partial_failure: "Havuz ya da havuzlar tarafından döndürülen hata bilgilerini gözden geçirin. Uygunsa, hataları çözün ve havuzlar arası aramayı yeniden çalıştırın.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Hata oluşan her havuz için, sorunu çözmeyi deneyin ve aramayı yeniden çalıştırın.<br/><br/>İzin verilen sonuç sayısı üst sınırını aşan her havuz için, arama ölçütlerinizi daha az sonuç döndürecek şekilde iyileştirmeyi deneyin. Ya da havuzlar arası arama için izin verilen üst sınırdan daha fazla sonuç döndürecek tek bir havuz araması çalıştırabilirsiniz.",
		unified_search_results_found: "Bulunan Sonuçlar",
		unified_search_maximum_allowed: "İzin Verilen Üst Sınır",
		unified_search_maximum_exceeded: "Üst sınır aşıldı",

		unified_search_mapping_rule_box: "Bu özellik eşlemeye eklenemiyor.<p>${1} havuzundaki ${0} özelliği başka bir eşlemede zaten var; bu havuzdaki aranabilir özellikler, arama başına tek bir eşlemeye eklenebilir.<br/>Eşlemeyi eklemek için farklı bir özellik seçin.</p>",
		unified_search_mapping_rule_repository: "Özellik eşlemeye eklenemiyor.<br/>Eşleme ${0} havuzundaki bir özelliği zaten içeriyor. Bir eşleme bir havuzdaki tek bir özelliği içerebilir.<br/>İçerdiği bir özelliği eklemek için başka bir havuz seçin ya da seçilen özellikten yeni bir eşleme yaratın.",
		unified_search_mapping_rule_data_type: "Özellik eşlemeye eklenemiyor.<br/>Bir ${0} özelliği ${1} özelliğiyle eşlenemez. Eşlemek için başka bir özellik seçin ya da seçilen özellik için yeni bir eşleme yaratın.<br/>Eşlenebilecek özelliklerle ilgili daha fazla bilgi için, bu pencerenin üst kısmında yer alan giriş metnindeki Daha Fazla Bilgi bağlantısını kullanın.",
		unified_search_mapping_rule_cardinality: "Özellik eşlemeye eklenemiyor.<br/>Eşlemedeki tüm özellikler ya tek değeri ya da birden çok değeri desteklemelidir. Seçilen özelliğin desteklediği ${0}, ancak eşlemedeki özelliklerin desteklediği ${1}.<br/>Eşlemeye eklemek için başka bir özellik seçin ya da seçilen özellik için yeni bir eşleme yaratın.",
		unified_search_mapping_rule_fixed_value: "Özellik eşlemeye eklenemiyor.<br/>Eşleme sabit değerli bir özelliği zaten içeriyor. Bir eşleme sabit değerli tek bir özellik içerebilir.<br/>Eşlemeye eklemek için başka bir özellik seçin ya da seçilen özellik için yeni bir eşleme yaratın.",
		unified_search_mapping_rule_child_component: "Özellik eşlemeye eklenemiyor.<br/>Alt bileşeni olan bir özellik diğer özelliklerle eşlenemez. Bu özellik temelinde arama yapabilmek istiyorsanız, seçilen özellik için yeni bir eşleme yaratın.",
		unified_search_mapping_rule_operator_intersection: "Özellik eşlemeye eklenemiyor.<br/>Eşlemedeki tüm özelliklerin ortak bir ya da daha çok işleci olmalıdır. Ancak, ${0} özelliğinin eşlemedeki diğer özelliklerle ortak işleci yok.<br/>Uygunsa, başka bir özellik seçin. Seçilen özelliği eklemeniz gerekiyorsa, sistem yöneticinizle birlikte çalışarak özellikle ilişkilendirilmiş işleçleri düzenleyin.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Gelişmiş Ayarlar",
		advanced_search_options_intro: "Gelişmiş ölçüt seçeneklerini belirleyin.",
		advanced_search_options_editable: "Düzenlenebilir",
		advanced_search_options_readonly: "Salt okuma",
		advanced_search_options_required: "Gerekli",
		advanced_search_options_hidden: "Gizlenmiş",
		advanced_search_options_property_editable:"Özellik:",
		advanced_search_options_operators:"İşleçler:",
		advanced_search_options_use_all:"Tümünü kullan",
		advanced_search_options_use_selected:"Seçileni kullan",
		advanced_search_options_operators_filtered: "Süzgeç uygulanan işleçler",
		// Data types in lowercase
		data_type_boolean: "boole",
		data_type_date: "tarih",
		data_type_time: "saat",
		data_type_timestamp: "zaman damgası",
		data_type_decimal: "ondalık değer",
		data_type_double: "kayar noktalı sayı",
		data_type_short: "tamsayı",
		data_type_integer: "tamsayı",
		data_type_long: "tamsayı",
		data_type_string: "Metin dizgisi",
		data_type_string_alpha: "alfabetik dizgi",
		data_type_string_alphanum: "alfasayısal dizgi",
		data_type_string_ext: "genişletilmiş alfasayısal dizgi",
		data_type_string_num: "sayısal dizgi",
		data_type_binary: "ikili",
		data_type_object: "nesne",
		data_type_guid: "genel benzersiz tanıtıcı",
		data_type_user: "kullanıcı",
		data_type_child_component: "alt bileşen",

		/* Print Dialog */
		print_title: "Yazdır",
		print_message: "Yazdırılıyor: ${0}",
		print_print_button: "Yazdır",
		print_clean_margins_button: "Tümünü 0 olarak ayarla",
		print_type: "Yazıcı Tipi:",
		print_printer_server_options: "Sunucu Yazdırma Seçenekleri",
		print_printer_properties: "Yazıcı Özellikleri",
		print_printer_fax_properties: "Faks Özellikleri",
		print_printer_name: "Yazıcı Adı:",
		print_fax_recipient: "Alıcı",
		print_fax_sender: "Gönderen",
		print_copies: "Kopya sayısı:",
		print_local_orientation: "Yön",
		print_local_orientation_landscape: "Yatay",
		print_local_orientation_portrait: "Düşey",
		print_local_margins: "Kenar Boşlukları",
		print_local_margins_top: "Üst",
		print_local_margins_bottom: "Alta",
		print_local_margins_left: "Sola",
		print_local_margins_right: "Sağa",
		print_printer_server: "Sunucu",
		print_printer_local: "Yerel",
		print_property_class: "Sınıf:",
		print_property_routing: "Yöneltme:",
		print_property_pagedef: "SayfaTnm:",
		print_property_node: "Düğüm:",
		print_property_writer: "Yazma programı:",
		print_property_formdef: "FormTnm:",
		print_property_printerid: "Hedef:",
		print_property_forms: "Formlar:",
		print_property_faxnotes: "Notlar:",
		print_property_faxcompany: "Şirket:",
		print_property_faxnumber: "Faks Numarası:",
		print_property_faxname: "Ad:",
		print_property_faxsendertelnumber: "Telefon Numarası:",
		print_property_faxcoverpage: "Kapak Sayfası:",
		print_property_faxsubject: "Konu:",
		print_saveoptions: "Yazdırma Seçeneklerini Kaydet",
		print_property_bannerpage: "Başlık sayfası kullan",
		print_print_with_info_fields: "Bilgi Alanlarıyla Yazdır",
		print_field_from: "Başlangıç",
		print_field_to: "Bitiş",
		print_invalid_value_class: "Geçerli karakterler A-Z ya da 0-9 arasındaki karakterlerdir",
		print_invalid_value_pagedef: "Geçerli karakterler alfabetik ya da sayısal karakterler ya da @, # ya da $ karakterleridir",
		print_invalid_value_writer: "Geçerli karakterler alfabetik ya da sayısal karakterler ya da @, # ya da $ karakterleridir",
		print_invalid_value_formdef: "Geçerli karakterler alfabetik ya da sayısal karakterler ya da @, # ya da $ karakterleridir",
		print_invalid_value_forms: "Geçerli karakterler alfabetik ya da sayısal karakterler ya da @, # ya da $ karakterleridir",
		print_invalid_value_margin: "Geçerli karakterler ${0} ile ${1} arasındaki karakterlerdir",
		print_status_message: "${0} belge ${1} yazıcısına gönderildi.",

		print_applet_init_error: "Yazdırma uygulamacığı başlatılamıyor.",
		print_applet_init_error_explanation: "Bu sorun şu nedenlerden ötürü oluşur: <br/><br/><ul><li>İş istasyonunuzda Java Runtime Environment (JRE) kurulu değil.</li><li>Web tarayıcınızda Java eklentisi etkinleştirilmedi.</li><li>İş istasyonunuzdaki JRE sürümü IBM Content Navigator sürümüyle uyumlu değil.</li><li>Yazdırma uygulamacığının başlamasını beklerken tarayıcı zamanaşımına uğradı.</li></ul>",
		print_applet_init_error_userResponse: "JRE ile ilgili sorunu çözmek için şu adımları tamamlayabilirsiniz:<br/><br/><ol><li>JRE'nin iş istasyonunuzda kurulu olduğunu doğrulayın.</li><li>Web tarayıcısında Java eklentisinin etkinleştirildiğini doğrulayın.</li><li>İş istasyonunuzdaki JRE sürümünün IBM Content Navigator sürümüyle uyumlu olduğunu doğrulayın ve yeniden deneyin. Desteklenen sürümlerin listesini, IBM Software Support sitesindeki <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> adlı belgede bulabilirsiniz.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Kapak Sayfası",
		daeja_print_selected_documents_title: "Seçilen Belgeler",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Arama ölçütlerinin tümüyle eşleştir",
		match_any_criteria: "Arama ölçütlerinin herhangi biriyle eşleştir",
		include_subfolders_summary: "${0} (alt klasörler de içinde)",
		browse_button: "Göz At&hellip;",
		search_for: "Aranacak:",
		object_type_documents: "Belgeler",
		object_type_folders: "Klasörler",
		object_type_documents_folders: "Belgeler ve Klasörler",
		object_type_web_links: "Web Bağlantıları",
		object_type_documents_folders_web_links: "Belgeler, Klasörler ve Web Bağlantıları",

		/* SelectSearchFolderDialog */
		search_in: "Arama yeri:",
		include_subfolders: "Alt klasörleri içer",

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
		locked_item_icon_title: "${0} tarafından kilitlendi",
		checked_out_icon_title: "${0} tarafından dışarı alındı",
		major_minor_version_icon_title: "İkincil sürümleri olan ana sürüm",
		suspended_icon_title: "İş akışı askıya alındı",
		on_hold_icon_title: "Tutuluyor",
		has_notes_icon_title: "Notları var",
		record_icon_title: "Kayıt olarak bildirildi",
		compound_document_icon_title: "Bileşik belge",
		validateTemplate_icon_title: "Ekip alanı şablonu için doğrulama gerekiyor",
		offlineTemplate_icon_title: "Ekip alanı şablonu çevrimdışı",
		offlineTeamspace_icon_title: "Ekip alanı çevrimdışı",
		pending_delete_icon_title: "Ekip alanı silinmeyi bekliyor",
		delete_error_icon_title: "Ekip alanı silinemedi",
		defaultTemplate_icon_title: "Varsayılan ekip alanı şablonu",
		teamspace_icon_title: "Ekip Alanı",
		teamspace_template_icon_title: "Ekip alanı şablonu",
		has_bookmark_icon_title: "Yer işareti var",
		read_only_icon_title: "Salt okuma",
		no_results_were_found: "Herhangi bir sonuç bulunamadı.",
		folder_is_empty: "Klasör boş.",
		no_checked_out_items: "Hiçbir öğeyi dışarı almadınız.",
		inbasket_is_empty: "Gelen sepeti boş.",
		worklist_is_empty: "İş listesi boş.",
		tracker_milestone_completed: "Tamamlandı",
		stepprocessor_attachments_title: "İçerik",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Öğeleri kilitle",
		unlock_items: "Öğelerin kilidini aç",
		checkin_item: "Öğeyi içeri ver",

		/* Help */
		learn_more: "Daha fazla bilgi",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Ekip Alanını Aç",
		repository_tab_createWorkspace: "Yeni Ekip Alanı",
		repository_tab_createWorkspaceTemplate: "Yeni Ekip Alanı Şablonu",
		repository_tab_DefaultTemplate: "Varsayılan",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Bu görev belge kopyalar.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Seçilen ekip alanı şablonu için düzenleme ayrıcalıklarınız yok.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "${0} ekip alanını silmek istediğinizden emin misiniz? <br><br>Havuzda yalnızca, diğer klasörlerde dosyalanmış olan belgeler kalır. Yalnızca ekip alanında dosyalanmış belgeler silinir.",
		teamspaceDecommissionLabel: "Sil:",
		teamspaceDecommissionDescription: "Ekip alanının silinmesi, bu ekip alanını sunucudan kaldırır: Ekip alanı yapıtlarına ne yapılacağını belirtin.",
		teamspaceDecommissionOptions: "Ekip alanı silme seçenekleri",
		teamspaceDecommissionDeleteAll: "Tüm ekip alanı yapıtlarını sil",
		teamspaceDecommissionReFileAll: "Tüm ekip alanı yapıtlarını yeniden dosyala",
		teamspaceDecommissionReFileDestination: "Klasöre taşı:",
		teamspaceDecommissionReFileIn: "Bu konumda yeniden dosyala",
		teamspaceDecommissionTaskName: "Ekip alanı silme görevi",
		teamspaceDecommissionTaskDescription: "Bu görev bir ekip alanını havuzdan siler.",
		teamspaceDecommissionDeletionStarted: "Ekip alanı silinmek üzere zamanlandı.",
		teamspaceDecommissionDeletionConnectionFailed: "Bir ekip alanını silme görevi, havuzla bağlantı kuramadığından çalışmadı. Havuz yöneticisinin kimlik bilgilerinin doğru olduğunu doğrulatın.",

		teamspace_edit_properties_notsupported: "Ekip alanlarının özelliklerini yalnızca Ekip Alanları görünümünden düzenleyebilirsiniz.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Ekip alanı çevrimdışı ve yalnızca ekip alanının sahipleri tarafından açılabilir.",

		/* Teamspace Builder widget */
		workspace_validation_document: "Belge:",
		workspace_validation_folder: "Klasör:",
		workspace_validation_ets: "Şu giriş şablonlar bu havuzda yok ve seçilen giriş şablonları listesinden kaldırıldı:",
		workspace_validation_classes: "Şu sınıflar bu havuzda yok ve seçilen sınıflar listesinden kaldırıldı:",
		workspace_validation_searches: "Şu aramalar bu havuzda yok ve seçilen aramalar listesinden kaldırıldı:",
		workspace_validation_docs_folders: "Şu belgeler ve klasörler bu havuzda yok ve içerilen öğeler listesinden kaldırıldı:",
		workspace_change_template_confirmation_question: "Farklı bir şablon seçerseniz, yaptığınız tüm değişiklikleri kaybedersiniz. Devam etmek istiyor musunuz?\n",
		workspace_delete_item_confirmation_question: "${0} adlı öğenin kaldırılmasını istiyor musunuz?\n",
		workspace_delete_role_confirmation_question: "${0} adlı rolün kaldırılmasını istiyor musunuz?\n",
		workspace_delete_confirmation_question: "Bir ekip alanını silerseniz, yalnızca ekip alanı taşıyıcısı silinir. Ekip alanındaki klasörler ve belgeler havuzda kalır; arama yaparak bunları bulabilirsiniz. Ekip alanın içindekileri silmek için, önce ekip alanının içerdiği öğeleri silin, ekip alanını bundan sonra silin.<br><br>${0} adlı ekip alanının silinmesini istiyor musunuz?",
		workspacebuilder_instance_template_name_header: "Ekip Alanı Şablonu Adı",
		workspacebuilder_instance_template_description_header: "Tanım",

		workspacebuilder_template_tooltip_name: "Şablon adı şu karakterlerin hiçbirini içeremez: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Ekip alanı adı şu karakterlerin hiçbirini içeremez: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Kullanıcıların şablonlar listesinden doğru seçimi yapmasını sağlayacak bir tanım belirtin. Örneğin, şablonun hedef kitlesi ya da kullanımıyla ilgili bilgi verebilirsiniz.",
		workspacebuilder_instance_tooltip_description: "Kullanıcıların bu ekip alanını diğer ekip alanlarından ayırt etmelerini sağlayacak bir tanım belirtin.",

		workspacebuilder_template_edit_properties_pane: "Ekip Alanı Şablonunu Düzenle",
		workspacebuilder_instance_properties_pane: "Ekip Alanı Tanımla",
		workspacebuilder_template_properties_pane: "Ekip Alanı Şablonu Tanımla",

		workspacebuilder_instance_security_pane: "Ekip Alanı Güvenliğini Ayarla",
		workspacebuilder_template_security_pane: "Şablon Güvenliğini Ayarla",

		workspacebuilder_layout_pane: "Yerleşim Düzeni Seç",
		workspacebuilder_search_templates_pane: "Arama Seçin",
		workspacebuilder_document_folders_pane: "İçerilecek Klasörler ve Belgeler",
		workspacebuilder_doctypes_entryTemplates_pane: "Sınıf ya da Giriş Şablonu Seçin",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Sınıf Seçin",
		workspacebuilder_security: "Ekip Alanı Güvenliği",

		workspacebuilder_roles_pane: "Rol Seçin",
		workspacebuilder_security: "Güvenlik",

		workspacebuilder_properties_templates: "Kullanılabilecek şablonlar:",
		workspacebuilder_available_templates: "Kullanılabilecek aramalar:",
		workspacebuilder_selected_templates: "Seçilen aramalar:",
		workspacebuilder_templates_name: "Arama adı",

		workspacebuilder_available_entryTemplates: "Kullanılabilecek giriş şablonları:",
		workspacebuilder_selected_entryTemplates: "Seçilen giriş şablonları:",

		workspacebuilder_item_classes: "Kullanılabilecek sınıflar:",
		workspacebuilder_item_classes_selected: "Seçilen sınıflar:",
		workspacebuilder_properties_select_template: "Bu ekip alanı için kullanılacak şablonu seçin.",
		workspacebuilder_template_properties: "Ekip Alanı Şablonu Tanımla",
		workspacebuilder_instance_properties: "Ekip Alanı Tanımla",
		workspacebuilder_template_introText: "Dolaşma kısmındaki seçimleri kullanarak, bu şablondan yaratılan her ekip alanının içermesini istediğiniz ortak bileşenleri belirtin. Tamamlayınca, şablonu yeni ekip alanları yaratmak üzere kullanabilecek diğer kullanıcılar tarafından kullanılabilir kılmak için <b>Son</b> düğmesini tıklatın.",
		workspacebuilder_instance_introText: "Ekipler, belirli belge kümelerini paylaşmak ve bunlarla çalışmak için ekip alanlarını kullanır. Kullanıcıların bu ekip alanını diğer ekip alanlarından ayırt edebilmesini sağlayacak anlamlı bir ad ve tanım belirtin. Ek aramalar, sınıflar ya da giriş şablonları, belgeler ve klasörler ekleyerek, ekip alanını özelleştirebilirsiniz.",

		workspacebuilder_template_search_template_introText: "Bu şablondan yaratılan her ekip alanının içermesini istediğiniz varsayılan aramaları seçin. Arama seçilmezse, ekip alanı kullanıcıları erişimleri bulunan aramaları görür. Kullanıcılar, uygun izinlerle, ekip alanındaki aramaları paylaşabilir ve ekip alanına arama ekleyebilir.",
		workspacebuilder_instance_search_template_introText: "Ekip alanı kullanıcılarının görevleri daha verimli şekilde tamamlamalarını sağlayacak aramaları ekleyin. Arama eklenmezse, ekip alanı kullanıcıları izinleri olan aramaları görür. Uygun izinleri olan kullanıcılar da ekip alanına arama ekleyebilir ve aramaları paylaşabilir.",

		workspacebuilder_template_roles_introText: "Ekip alanı kullanıcıları rollere atanır. Kullanıcıların gerçekleştirmesine izin verilecek görevleri roller belirler. İzin verilen görevleri görmek için her rolün yanındaki simgeleri tıklatın. Ekip alanı için uygun rolleri seçin.",
		workspacebuilder_template_roles_modify_introText: "Bu ekip alanındaki her rolle ilişkilendirilmiş izinleri değiştirebilirsiniz. İzinleri değiştiğinde, bunu ekip alanı üyelerine bildirmeniz gerekir.",

		workspacebuilder_template_roles_header_name: "Rol Adı",

		workspacebuilder_template_folders_introText: "Bu şablondan yaratılan her ekip alanının içermesini istediğiniz varsayılan belgeleri ve klasörleri seçin. Belgeleri bağlantı ya da kopya olarak ekleyebilirsiniz. İlkeler ve yordamlar gibi, birden çok kopyası olmasını istemediğiniz belgeleri göstermek için bağlantıları kullanın. Şablonlar ve formlar gibi, kullanıcıların değiştireceği belgelerin kopyalarını yaratın.",
		workspacebuilder_instance_folders_introText: "Ekip alanının içereceği varsayılan belgeleri ve klasörleri seçin. Belgeleri bağlantı ya da kopya olarak ekleyebilirsiniz. İlkeler ve yordamlar gibi, birden çok kopyası olmasını istemediğiniz belgeleri göstermek için bağlantıları kullanın. Şablonlar ve formlar gibi, kullanıcıların değiştireceği belgelerin kopyalarını yaratın.",

		workspacebuilder_template_roles_introText: "Bu şablondan yaratılan her ekip alanının içereceği rolleri belirtin. Başka ekip alanı şablonları yaratırken kullanabileceğiniz yeni roller de yaratabilirsiniz.",
		workspacebuilder_instance_users_introText: "Bir ekip alanında, her kullanıcıya kullanıcının tamamlayabileceği görevleri belirleyen bir ya da daha çok rol atanır. Kullanıcıları ekip alanına ekleyin ve kullanıcılara roller atayın.",

		workspacebuilder_instance_navigation_pane_title: "Ekip Alanı Oluşturucu",
		workspacebuilder_template_navigation_pane_title: "Ekip Alanı Şablonu Oluşturucu",

		workspacebuilder_roles_roles_nopermissions: "Şu rol için herhangi bir izin seçilmedi - {0}",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Seçilen roller:",
		workspacebuilder_roles_available_roles: "Kullanılabilecek roller:",
		workspacebuilder_roles_privilege_header: "İzin",
		workspacebuilder_roles_select_role: "Rol Seç",
		workspacebuilder_roles_select_permission: "İzin Seç",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Adı {0} olan bir rol zaten var. Rol için benzersiz bir ad belirtmelisiniz. ",
		workspacebuilder_roles_edit_dialog_role_name: "Rol adı:",
		workspacebuilder_roles_edit_dialog_role_description: "Rol tanımı:",
		workspacebuilder_roles_edit_dialog_title_new: "Yeni Rol",
		workspacebuilder_roles_edit_dialog_title_edit: "Rolü Düzenle",

		workspacebuilder_roles_privileges_header: "{0} rolüne ilişkin izinler:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Belge izinleri:",
		workspacebuilder_roles_priv_group_folder: "Klasör izinleri:",
		workspacebuilder_roles_priv_group_teamspace: "Ekip alanı izinleri:",
		workspacebuilder_roles_priv_group_item: "Belge ve Klasör izinleri:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "İzinleri yönetme",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelere ve klasörlere erişimi yönetebilir. Bu izin, diğer kullanıcıların öğe silme, özellikleri düzenleme, alt klasör yaratma gibi işlemleri yapmasına izin verilmesini kapsar.",

		workspacebuilder_roles_priv_deleteItems: "Sil",
		workspacebuilder_roles_plbl_deleteItems: "Bu izne sahip olan kullanıcılar ekip alanındaki belgeleri ve klasörleri silebilir.",

		workspacebuilder_roles_priv_createItems: "Yaratma",
		workspacebuilder_roles_plbl_createItems: "Bu izne sahip olan kullanıcılar ekip alanında belge ve klasör yaratabilir.",

		workspacebuilder_roles_priv_viewItemProperties: "Özellikleri görüntüleme",
		workspacebuilder_roles_plbl_viewItemProperties: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelerin ve klasörlerin özelliklerini (sistem özellikleri de içerir) görüntüleyebilir.",

		workspacebuilder_roles_priv_modifyItemProperties: "Özellikleri düzenleme",
		workspacebuilder_roles_plbl_modifyItemProperties: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelerin ve klasörlerin özelliklerini düzenleyebilir.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Klasör izinlerini yönetme",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Bu izne sahip olan kullanıcılar ekip alanındaki klasörlere erişimi yönetebilir. Bu izin, diğer kullanıcıların klasör silme, klasör özelliklerini düzenleme, alt klasör yaratma gibi işlemleri yapmasına izin verilmesini kapsar.",

		workspacebuilder_roles_priv_deleteFolders: "Klasör silme",
		workspacebuilder_roles_plbl_deleteFolders: "Bu izne sahip olan kullanıcılar ekip alanındaki klasörleri silebilir.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Klasör özelliklerini düzenleme",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Bu izne sahip olan kullanıcılar ekip alanındaki klasörlerin özelliklerini düzenleyebilir.",

		workspacebuilder_roles_priv_createSubfolders: "Alt klasör yaratma",
		workspacebuilder_roles_plbl_createSubfolders: "Bu izne sahip olan kullanıcılar ekip alanında klasör yaratabilir.",

		workspacebuilder_roles_priv_fileInFolders: "Klasörlere ekleme",
		workspacebuilder_roles_plbl_fileInFolders: "Bu izne sahip olan kullanıcılar ekip alanındaki klasörlerden belgelere bağlantı ekleyebilir.",

		workspacebuilder_roles_priv_viewFolderProperties: "Klasör özelliklerini görüntüleme",
		workspacebuilder_roles_plbl_viewFolderProperties: "Bu izne sahip olan kullanıcılar ekip alanındaki klasörlerin özelliklerini (sistem özellikleri de içerir) görüntüleyebilir.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Belge izinlerini yönetme",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelere erişimi yönetebilir. Bu izin, diğer kullanıcıların belge silme, belge özellikleri düzenleme gibi işlemleri yapmasına izin verilmesini kapsar.",

		workspacebuilder_roles_priv_deleteDocuments: "Belge silme",
		workspacebuilder_roles_plbl_deleteDocuments: "Bu izne sahip olan kullanıcılar ekip alanındaki belgeleri silebilir.",

		workspacebuilder_roles_priv_promoteVersions: "Sürüm yükseltme",
		workspacebuilder_roles_plbl_promoteVersions: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelere yeni sürüm numarası atayabilir.",

		workspacebuilder_roles_priv_modifyContent: "Belgeleri düzenleme",
		workspacebuilder_roles_plbl_modifyContent: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelerin içeriğini düzenleyebilir.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Belge özelliklerini düzenleme",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelerin özelliklerini düzenleyebilir.",

		workspacebuilder_roles_priv_viewContent: "Belge görüntüleme",
		workspacebuilder_roles_plbl_viewContent: "Bu izne sahip olan kullanıcılar ekip alanındaki belgeleri görüntüleyebilir.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Belge özelliklerini görüntüleme",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Bu izne sahip olan kullanıcılar ekip alanındaki belgelerin özelliklerini (sistem özellikleri de içerir) görüntüleyebilir.",

		workspacebuilder_roles_priv_addNewSearches: "Arama ekleme",
		workspacebuilder_roles_plbl_addNewSearches: "Bu izne sahip olan kullanıcılar ekip alanına arama ekleyebilir. Varsayılan olarak, arama diğer kullanıcılar tarafından kullanılamaz.",

		workspacebuilder_roles_priv_createNewSearches: "Arama yaratma",
		workspacebuilder_roles_plbl_createNewSearches: "Bu izne sahip olan kullanıcılar yeni arama yaratabilir, ancak aramaları kaydedemez. Bu izni olmayan kullanıcılar, havuzda bulunan belgeleri ekip alanına ekleyemez.",

		workspacebuilder_roles_priv_shareSearches: "Aramaları paylaşma",
		workspacebuilder_roles_plbl_shareSearches: "Bu izne sahip olan kullanıcılar, yarattıkları aramaları ekip alanının diğer kullanıcılarıyla paylaşabilir.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Sınıfları ya da giriş şablonlarını yönetme",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Bu izne sahip olan kullanıcılar ekip alanına sınıf ya da giriş şablonu ekleyebilir ya da var olanları kaldırabilir.",

		workspacebuilder_roles_priv_addRemoveClasses: "Sınıfları yönetme",
		workspacebuilder_roles_plbl_addRemoveClasses: "Bu izne sahip olan kullanıcılar ekip alanına sınıf ekleyebilir ya da var olanları kaldırabilir.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Ekip alanı kullanıcılarını yönetme",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Bu izne sahip olan kullanıcılar ekip alanına kullanıcı ve grup ekleyebilir ya da var olanları kaldırabilir. Kullanıcılar, atandıkları rolleri de yönetebilir.",

		workspacebuilder_roles_priv_modifyRoles: "Rolleri değiştirme",
		workspacebuilder_roles_plbl_modifyRoles: "Bu izni bulunan sahipler, ekip alanına ilişkin rol izinlerini değiştirebilir. Bu izin yalnızca sahipler için kullanılabilir.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Kullanıcı Seçin",
		workspacebuilder_users_add_users_and_groups_button: "Kullanıcı ve Grup Ekle...",
		workspacebuilder_users_users_or_group_header: "Kullanıcı ve Grup",
		workspacebuilder_users_roles_header: "Roller",

		workspacebuilder_users_role_header: "Rol",
		workspacebuilder_users_role_no_permissions: "Bu rolün herhangi bir izni yok",
		workspacebuilder_users_available_roles_label: "Kullanılabilecek roller:",
		workspacebuilder_users_selected_users_and_groups_label: "Seçilen kullanıcılar ve gruplar:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Ekip alanı kaydedilemiyor. Bu ekip alanı için en az bir sahip belirtmelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Ekip alanı kaydedilemiyor. Tüm kullanıcılara rol atanmış olmalıdır.",
		// end of select users

		workspacebuilder_search_templates: "Arama Seçin",
		workspacebuilder_search_add: "Arama Ekle",
		workspacebuilder_properties_workspaceName: "Ekip alanı adı:",
		workspacebuilder_properties_templateName: "Şablon adı:",
		workspacebuilder_properties_workspaceDescription: "Ekip alanı tanımı:",
		workspacebuilder_properties_templateDescription: "Şablon tanımı:",
		workspacebuilder_properties_workspaceTemplate: "Seçilen şablon:",
		workspacebuilder_properties_security: "Şablonu bu kullanıcılarla paylaş:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Ekip alanından taşı:",
		moveTeamspaceDocuments_security: "Belgeyi bu kişilerle paylaş:",
		moveTeamspaceDocuments_security_change: "Seçilen öğeler için özel güvenlik belirle",
		moveTeamspaceDocuments_item_type_level: "Seçilen öğelerin güvenliğini geçersiz kıl seçeneğini belirleyemezsiniz; seçilen öğenin sınıfı, yalnızca sınıf düzeyi güvenlik kullanacak şekilde yapılandırıldı.",
		moveTeamspaceDocuments_security_inherit: "Güvenliği hedef klasörden devral",
		moveTeamspaceDocuments_file_info_text: "Öğeleri bir ekip alanından diğer bir ekip alanına ya da klasöre taşıyabilirsiniz.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Öğeleri seçilen klasöre taşımak için gereken izinlere sahip değilsiniz.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Öğeleri ekip alanından taşımak için gereken izinlere sahip değilsiniz.",
		moveTeamspaceDocuments_move_mixed_items: "Seçilen öğelerin güvenliğini geçersiz kılamazsınız. Öğelerin bazıları ekip alanı tarafından yönetilmiyor. Yalnızca, ekip alanı tarafından yönetilen öğelerin güvenliğini geçersiz kılabilirsiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Ekip alanı için bir ad belirtmelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Ekip alanı şablonu için bir ad belirtmelisiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Ekip alanı adı şu karakterlerin hiçbirini içeremez: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Şablon adı şu karakterlerin hiçbirini içeremez: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Belgeye Bağlantı Yarat",
		workspacebuilder_folders_makeDocCopy: "Belgeyi Kopyala",
		workspacebuilder_folders_newfolder: "Yeni Klasör",
		workspacebuilder_folders_local_drive: "Yerel Dizinden",
		workspacebuilder_folders_from_repo: "Havuzdan",
		workspacebuilder_folders_add_doc: "Belge Ekle",
		workspacebuilder_folders_grid_name: "Ad",
		workspacebuilder_folders_props: "Özellikler",
		workspacebuilder_folders_remove: "Kaldır",
		workspacebuilder_folders_delete: "Sil",
		workspacebuilder_folders_adddoc_local: "Yerel Sürücüden Belge Ekle",
		workspacebuilder_folders_adddoc_repo: "Havuzdan Belge Ekle",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Belirtilen klasör adı zaten var. Farklı bir klasör adı belirtin.",

		workspacebuilder_classes_title: "Sınıf ya da Giriş Şablonu Seçin",
		workspacebuilder_classes_title_cm: "Sınıf Seçin",
		workspacebuilder_classes_template_introText: "Bu şablondan yaratılan ekip alanlarının havuza belge eklemek için sınıfları mı, yoksa giriş şablonlarını mı kullanacağını belirleyin. Sınıf seçilmezse, ekip alanları erişimi olan tüm sınıfları görür.  Gereken izinlere sahip olan kullanıcılar, ekip alanındaki sınıfların ya da giriş şablonlarının listesini değiştirebilir.",
		workspacebuilder_classes_template_introText_cm: "Kullanıcıların havuza belge eklemek için kullanabilecekleri sınıfları seçin. Sınıf seçilmezse, ekip alanı kullanıcıları erişimleri olan tüm sınıfları görür. Gereken izinlere sahip olan kullanıcılar, ekip alanındaki sınıfların listesini değiştirebilir.",
		workspacebuilder_classes_instance_introText: "Kullanıcıların havuza belge eklemek için kullanabilecekleri sınıfları ya da giriş şablonlarını seçin. Sınıf seçilmezse, ekip alanı kullanıcıları izinleri olan tüm sınıfları görür. Gereken izinlere sahip olan kullanıcılar, ekip alanındaki sınıfların ya da giriş şablonlarının listesini değiştirebilir.",
		workspacebuilder_classes_instance_introText_cm: "Kullanıcıların havuza belge eklemek için kullanabilecekleri sınıfları seçin. Sınıf seçilmezse, ekip alanı kullanıcıları izinleri olan tüm sınıfları görür. Gereken izinlere sahip olan kullanıcılar, ekip alanındaki sınıfların listesini değiştirebilir.",
		workspacebuilder_classes_selection: "Sınıfları Seçin:",
		workspacebuilder_classes_list: "Kullanılabilecek Sınıflar:",
		workspacebuilder_classes_columns_default: "Varsayılan",
		workspacebuilder_classes_columns_className: "Sınıf Adı",
		workspacebuilder_classes_type_classes: "Belge eklemek için sınıfları kullan",
		workspacebuilder_classes_type_classes_tooltip: "Sınıflar, belgelerin ileride kullanılmak üzere bulunmasına yardımcı olacak ilişkili özellikleri içerir.",
		workspacebuilder_classes_type_entryTemplates: "Belge eklemek için giriş şablonlarını kullan",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Giriş şablonları, her belge için sağlanan bilgilerin tutarlı olmasını ve önceden tanımlanmış değerleri kullanmasını güvenceye alır.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Giriş Şablonu Adı",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Tanım",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Ekip alanına en az bir giriş şablonu eklemelisiniz.",

		workspacebuilder_classes_new: "Yeni Sınıf",
		workspacebuilder_classes_add: "Sınıf Ekle",
		workspacebuilder_entryTemplate_add: "Giriş Şablonu Ekle",
		workspacebuilder_add_list: "Ekle",
		workspacebuilder_makeDefault_list: "Varsayılan Yap",
		workspacebuilder_removeDefault_list: "Varsayılanı Kaldır",

		workspacebuilder_roles_title: "Rol Seçin",
		workspacebuilder_roles_title_modify: "Rolleri Değiştir",

		workspacebuilder_selection_moveup: "Yukarı Taşı",
		workspacebuilder_selection_movedown: "Aşağı Taşı",
		workspacebuilder_selection_remove: "Kaldır",
		workspacebuilder_selection_add: "Ekle",
		workspacebuilder_selection_create_new_search: "Yeni Arama...",
		workspacebuilder_selection_create_new_role: "Yeni Rol...",
		workspacebuilder_selection_make_role_available: "Kullanılabilir Kıl",
		workspacebuilder_selection_make_role_available_tooltip: "Seçilen rolü diğer şablonlarla paylaşır. Rolü paylaşmak için role en az bir izin atamalısınız.",

		workspacebuilder_navigation_next: "Sonraki",
		workspacebuilder_navigation_finish: "Son",
		workspacebuilder_navigation_validate: "Doğrula",
		workspacebuilder_navigation_previous: "Önceki",
		workspacebuilder_navigation_cancel: "İptal",
		workspacebuilder_navigation_customize: "Özelleştir",

		workspacebuilder_search_dialog_title: "Arama",
		workspacebuilder_dialog_close: "Kapat",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Şablon kullanılabilirliği:",
		workspace_properties_templateState_tooltip: "Kullanıcıların bu şablonu kullanan ekip alanları yaratmasını önlemek için şablonu kullanılamaz kılın.",
		workspace_properties_dialog_title: "Şablon Özellikleri",
		workspace_properties_online_radio_option_label: "Kullanılabilir Kıl",
		workspace_properties_offline_radio_option_label: "Kullanılamaz Kıl",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Değişiklikleri kaydetmeden iptal etmek istiyor musunuz?",
		workspacebuilder_cancel_confirmation_button: "Evet",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Geçersiz öğeler şablondan kaldırılır ve şablon kullanıcıların kullanımına açılır.  Bu ekip alanı şablonunun doğrulanmasını istiyor musunuz?",
		workspacebuilder_validate_confirmation_button: "Evet",
		workspacebuilder_validate_confirmation_title: "Doğrula",

		/* Entry templates builder */
		entry_templates: "Giriş Şablonu Yöneticisi",
		no_entry_templates_were_found: "Herhangi bir giriş şablonu yok.",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Süzgeç Uygula",

		/* Roleselector widget */
		role_selector_name: "Roller:",

		/* User Group picker widget */
		directory_label: "Dizin:",
		scope_label: "Aranacak:",
		name_starts_with_label: "Adı bununla başlayan:",
		name_contains_label: "Adı bunu içeren:",
		display_name_contains_label: "Görüntü adı bunu içeren:",
		starts_with_label: "Bununla başlayan:",
		available_label: "Kullanılabilir:",
		available_heading: "Kullanılabilir",
		selected_label: "Seçilen:",
		selected_heading: "Seçilen",
		available_repositories_label: "Kullanılabilecek Havuzlar",
		selected_repositories_label: "Seçilen Havuzlar",
		default_repository: "Varsayılan havuz:",
		default_repository_placeholder: "Havuz seç",
		default_role_placeholder: "Rol seç",
		menu_label_placeholder: "Etiket seçin ya da girin",
		default_repository_hover: "Kullanıcılar bu masaüstünden web istemcisinde oturum açtığında varsayılan olarak seçili olacak havuzu belirtin.<br><br><b>Önemli:</b> Varsayılan havuzu belirtebilmek için, seçilen havuz listesi masaüstüne havuz eklemelisiniz.",
		default_repository_workflow_hover: "<b>Dikkat:</b> Uygulama alanlarını yalnızca, bu masaüstü için yapılandırılmış havuzlar için yapılandırabilirsiniz.",
		remove_label: "Kaldır",
		users_label: "Kullanıcılar",
		groups_label: "Gruplar",
		user_or_group_name_label: "Kullanıcı ya da grup adı:",
		user_or_group_name_hover: "Havuzda geçerli olan bir kullanıcı ya da grup adını girin.  Adın geçerliliği denetlenmez.",
		user: "Kullanıcı",
		group: "Grup",
		name: "Ad:",
		displayName: "Görüntü Adı",
		display_name: "Görüntü adı:",
		shortName: "Kısa Ad:",
		distinguishedName: "Ayırt Edici Ad:",
		search_tooltip: "Arama",
		add_tooltip: "Ekle",
		add_selected_tooltip: "Seçilen listeye ekle",
		remove_tooltip: "Kaldır",
		remove_selected_tooltip: "Seçilen listeden kaldır",
		add_to_selected_tooltip: "Ekle",
		remove_from_selected_tooltip: "Kaldır",
		move_up_selected_tooltip: "Yukarı taşı",
		move_down_selected_tooltip: "Aşağı taşı",
		advanced_search_options_tooltip: "Gelişmiş ayarlar",
		move_right_selected_tooltip: "Alt menüye taşı",
		move_left_selected_tooltip: "Alt menüden dışarı taşı",
		add_separator: "Ayırıcı Ekle",
		menu_item_label: "Menü öğesi etiketi:",
		add_menu_label: "Alt menü ekle",
		menu_label: "Alt menü etiketi:",
		menu_label_info: "<b>Önemli:</b> Bu menüyü kaydedebilmek için, bu alt menüye en az bir menü öğesi eklemelisiniz.",
		menu_dropdown_label: "Açılan düğme etiketi:",
		menu_dropdown_label_info: "<b>Önemli:</b> Bu araç çubuğunu kaydedebilmek için, bu açılan düğmeye en az bir menü öğesi eklemelisiniz.",
		no_item_found: "Herhangi bir sonuç bulunamadı.",
		me: "Ben",
		anyone: "Herhangi biri",
		specific_users: "Belirli kullanıcılar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Arama {0} taneden fazla sonuç döndürdü. Ölçütlerinizi değiştirerek aramayı daraltın.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Arama sonuçları seçili olan öğeleri içeriyor. Bu öğeler arama sonuçlarında görüntülenmeyecek.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "{0} taneden fazla sonuç döndürüldü. Sonuçları daraltmak için süzgeç kullanın.",

		user_already_selected: "Belirtilen kullanıcı zaten seçili.  Farklı bir kullanıcı belirtin.",
		group_already_selected: "Belirtilen grup zaten seçili.  Farklı bir grup belirtin.",
		user_cannot_select_self: "Kendinizi ekleyemezsiniz. Farklı bir kullanıcı belirtin.",

		/* Select User Group dialog */
		select_user_group_add_label: "Ekle",
		select_user_group_cancel_label: "İptal",
		add_users_groups_label: "Kullanıcı ve Grup Ekle",
		add_user_group_label: "Kullanıcı ve Grup Ekle",
		add_users_label: "Kullanıcı Ekle",
		add_user_label: "Kullanıcı Ekle",
		add_label: "Ekle:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Şu belgelerde kaydedilmemiş ek açıklama değişiklikleri var:",
		viewer_confirm_to_proceed: "Devam etmek ve değişiklikleri kaybetmek istiyor musunuz?",
		viewer_warn_has_changes: "Kaydedilmemiş değişiklikler atılacak.",
		viewer_warn_is_printing: "Devam etmekte olan yazdırma tamamlanmayabilir.",
		viewer_warn_confirm_exit: "Çıkmak istiyor musunuz?",
		viewer_prompt_save_changes: "Şu belgede kaydedilmemiş ek açıklama değişiklikleri var ve bunlar kaybedilecek:<br>${0}<br><br>Değişiklikleri kaydetmek istiyor musunuz?",
		viewer_prompt_mergesplit_changes: "Şu belgelerde kaydedilmemiş değişiklikler var:<br>${0}<br><br>Devam etmek ve değişiklikleri kaybetmek istiyor musunuz?",
		viewer_prompt_mergesplit_tab_changes: "Şu belgede kaydedilmemiş değişiklikler var:<br>${0}<br><br>Devam etmek ve değişiklikleri kaybetmek istiyor musunuz?",
		viewer_new_item_name: "Yeni Belge",
		viewer_top_frame: "Üst çerçeve:",
		viewer_bottom_frame: "Alt çerçeve:",
		viewer_left_frame: "Sol çerçeve:",
		viewer_right_frame: "Sağ çerçeve:",
		viewer_viewer_frame: "Görüntüleyici çerçevesi:",
		viewer_properties_frame: "Özellikler çerçevesi:",
		viewer_comment_frame: "Açıklama çerçevesi:",
		viewer_mergesplit_on: "Görüntüleme",
		viewer_mergesplit_off: "Birleştir ve Ayır",
		viewer_mergesplit_context_menu_move: "Taşı",
		viewer_mergesplit_context_menu_rename: "Yeniden Adlandır",
		viewer_mergesplit_context_menu_delete: "Sil",
		//move to new window
		viewer_move_to_new_window:"Yeni pencereye taşı",
		viewer_continue:"Değişiklikleri At",
		viewer_return_to_original_window:"Özgün pencereye dön",
		viewer_switch_window:"Diğer Pencereye Geç",
		viewer_prompt_lost_changes:"${0} belgesi başka bir pencerede zaten açık. Belgede kaydedilmemiş değişiklikler var.<br><br>O pencereye geçip değişiklikleri kaydetmek mi, yoksa değişiklikleri atıp belgeyi bu pencerede açmak mı istersiniz?",
		viewer_mergesplit_fallback_info: "Birleştir ve Ayır eylemini ancak aynı havuzda bulunan belgeler üzerinde gerçekleştirebilirsiniz.",
		viewer_tabbed_layout: "Sekme Olarak Görüntüle",
		viewer_tabbed_layout_highcontrast: "Sekmeler",
		viewer_split_vertical_layout: "Bölmeleri üst ve alt olarak ayır",
		viewer_split_vertical_layout_highcontrast: "Üst ve alt",
		viewer_split_horizontal_layout: "Bölmeleri sol ve sağ olarak ayır",
		viewer_split_horizontal_layout_highcontrast: "Sol ve sağ",
		viewer_add_vertical_layout: "Yeni sekme altta",
		viewer_add_vertical_layout_highcontrast: "Alt sekme",
		viewer_add_horizontal_layout: "Yeni sekme sağda",
		viewer_add_horizontal_layout_highcontrast: "Sağ sekme",
		viewer_add_horizontal_layout_rtl: "Yeni sekme solda",
		viewer_add_horizontal_layout_rtl_highcontrast: "Sol sekme",
		viewer_split_properties_layout: "Özellikleri Görüntüle",
		viewer_split_comment_layout: "Açıklamaları Görüntüle",
		viewer_split_notelog_layout: "Not Günlüğünü Görüntüle",
		viewer_window_title: "${0} Görüntüleyicisi",
		viewer_next_hit: "Listedeki sonraki belgeyi görüntüle",
		viewer_prev_hit: "Listedeki önceki belgeyi görüntüle",
		viewer_confrim_more_search_results: "Arama sonuçlarında, görüntülenebilir başka belge yok.  Daha fazla arama sonucu almak istiyor musunuz?",
		viewer_confirm_get_next_page: "Sonuç listesinde, görüntülenebilir başka öğe yok.  Daha fazla arama sonucu almak istiyor musunuz?",
		viewer_confirm_get_next_item: "Sonuç listesinde, görüntülenebilir başka öğeler var.  Sonraki öğeyi görmek istiyor musunuz?",
		viewer_fn_annotation_tooltip: " Yaratan: ${0},  Yaratma Tarihi: ${1}",
		viewer_box_note_limitation: "Box notlarını ancak ayrı bir pencerede açıp görüntüleyebilirsiniz.",
		viewer_click_to_open_box_note: "Box notunu açmak için burayı tıklatın.",
		viewer_box_view_expiring: "Box belgenizi görüntüleyebileceğiniz sürenin üst sınırı 60 dakikadır. Yürürlükteki oturumunuzun ${0} dakika içinde süresi dolacak. Belge üzerinde çalışmaya devam etmek istiyorsanız, belgeyi şimdi yeniden yüklemelisiniz. Belgeyi yeniden yüklemek ister misiniz?",
		viewer_add_dialog_save_as_type: "Şu tipte kaydet:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Dışarı alma çakışması",
		viewer_checkout_conflict: "Belge başka bir kullanıcı tarafından dışarı alındı.",
		viewer_checkout_confirm: "Belgenin daha yeni bir sürümü var. Belgeyi dışarı almaya devam etmek mi, yoksa daha yeni sürümle görüntüleyiciyi yeniden yüklemek mi istiyorsunuz? Görüntüleyiciyi yeniden yüklemeyi seçerseniz, kaydedilmemiş değişiklikler kaybedilir.",
		viewer_checkout_continue: "Dışarı almaya devam et",
		viewer_checkout_reload: "Yeniden Yükle",
		viewer_status_building: "Belge oluşturuluyor...",
		viewer_status_adding: "Belge ekleniyor...",
		viewer_status_checking_in: "Belge içeri veriliyor...",

		/* Class Selector Widget */
		include_subclasses_label: "Alt sınıfları içer",
		include_subclasses_label2: "Alt sınıflarda da ara",
		include_subclasses_note: "(Alt sınıfları içerir)",
		available_classes_col_header: "Kullanılabilecek Sınıflar",
		single_class_label: "Tek bir sınıfta ara",
		multiple_classes_label: "Birden çok kaynak sınıfta ara",
		multiple_classes_hover_help: "Birden çok sınıfta arama yapmak için bu seçeneği belirleyin. Sınıflar, üst sınıf ya da alt sınıf olabilir. Bu seçeneği belirlerseniz, yalnızca seçilen sınıflardaki ortak özellikleri ve değerleri görürsünüz.",
		selected_classes_col_header: "Seçilen Sınıflar",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(alt klasörler de içinde)",
		favorites_pseudo_node: "\\Sık Kullanılanlar\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Havuzda var olan, belgenin ekleneceği klasörü seçmelisiniz.",
		no_permission_add_folder: "Bu klasöre klasör eklemek için gereken izinlere sahip değilsiniz.",
		no_permission_add_document: "Bu klasöre belge eklemek için gereken izinlere sahip değilsiniz.",
		document_already_in_folder: "Belge zaten bu klasörde.",
		cant_move_folder_onto_parent: "Klasör zaten bu klasörde.",
		cant_move_folder_onto_self: "Bir klasörü kendisine ya da alt klasörlerine taşıyamazsınız.",

		/* Workflow Widgets */
		process_application_space: "Uygulama Alanını İşle",
		process_role: "Rolü İşle",
		process_inbasket: "Gelen Sepetini İşle",
		process_worklist: "İş Listesi",
		process_step_processor: "İş Öğesini İşle",
		process_tracker: "İş Öğesini İzle",
		process_info_subject: "Konu",
		process_info_stepname: "Adım",
		process_info_is_locked: "Kilitli",
		process_info_no_access: "Erişim yok",
		process_info_received_on: "Alınma tarihi",
		process_info_overdue: "Süresi doldu",
		process_info_reminder_sent: "Anımsatıcı gönderildi",
		process_info_locked_by_user: "Kilitleyen",
		process_work_object_number: "İş nesnesi numarası",
		process_deadline: "Son tarih:",
		process_launchedby: "Başlatan:",
		process_receivedon: "Alınma tarihi:",
		process_step: "Adım:",
		process_properties: "Özellikler",
		process_attachments: "Ekler",
		process_attachments_select: "Ek Seç",
		process_finish_button_label: "İzlemeyi Durdur",
		process_tracker_history: "Geçmiş",
		process_tracker_milestones: "Kilometretaşları",
		process_tracker_milestone: "Aşama",
		process_tracker_milestone_level: "Düzey",
		process_tracker_milestones_empty: "Görüntülenecek herhangi bir kilometretaşı yok.",
		process_tracker_level_selector_label: "Kilometretaşlarını bu düzeye kadar göster:",
		process_tracker_map_selector_label: "Eşleme temelinde süzgeç uygula:",
		process_tracker_message: "İleti",
		process_tracker_datereached: "Ulaşma Tarihi",
		process_tracker_stepname: "Adım",
		process_tracker_cycle: "Çevrim",
		process_tracker_review_cycle: "Gözden Geçirme Çevrimi",
		process_tracker_participant: "Katılımcı",
		process_tracker_completed: "Tamamlandı",
		process_tracker_response: "Yanıt",
		process_tracker_comments: "Açıklama sayısı",
		process_tracker_delete_confirmation: "Şu iş akışı için izlemenin durdurulmasını istiyor musunuz: ${0}?",
		process_tracker_history_allmaps: "Tüm eşlemler",
		process_tracker_history_workflow: "İş Akışı",
		process_tracker_history_terminate: "Sonlandırma",
		process_tracker_history_malfunction: "Bozukluk",
		process_filter_label: "Süzgeç Uygula",
		process_no_filter_summary: "Süzgeç uygulanmadı",
		process_filter_summary: "${0} uygulandı",
		process_filter_reset_tooltip: "Sıfırlama süzgeci temizler ve gelen sepetini yeniler.",
		process_attachments_add_folder: "Klasör Ekle",
		process_attachments_add_doc: "Belge Ekle",
		process_complete_button_label: "Tam",
		process_save_button_label: "Kaydet",
		process_launch_button_label: "İş Akışını Başlat",
		process_open_button_label: "Aç",
		process_movetoinbox_button_label: "Gelen Sepetine Taşı",
		process_return_button_label: "Geri Döndür",
		process_return_to_sender_tooltip: "İş öğesini, başlangıçtaki gelen sepetine geri koyar",
		process_move_to_inbasket_tooltip: "İş öğesini kişisel gelen sepetinize taşır",
		process_reassign_tooltip: "İş öğesini başka bir sahibe atar",
		process_reassign_button_label: "Yeniden ata",
		process_preferences_button_label: "Tercihler",
		process_manageroles_button_label: "Rolleri Yönet",
		process_manageroles_no_members: "Herhangi bir üye yok.",
		process_responses_button_label: "Diğer Yanıtlar",
		process_morecustomaction_button_label: "Diğer Eylemler",
		process_show_instructions: "Yönergeleri Görüntüle",
		process_hide_instructions: "Yönergeleri Gizle",
		process_remove_attachment: "Kaldır",
		process_close_window: "İş öğesi işlendi.",
		process_delegate_flag: "İş öğesinin iş akışının sonraki öğesine yöneltilmeden önce yürürlükteki sahip tarafından onaylanmasını gerekli kıl",
		process_paticipant_voting: "Onay oylaması için gereken katılımcı sayısı:",
		process_get_next_label: "Sonraki iş öğesini al",
		process_no_more_items: "Gelen sepetinde işlenecek başka öğe yok.",
		process_workflow_name: "İş akışı adı:",
		process_pattern_process_name: "${0} için gözden geçir",
		process_instuctions: "Gözden geçirme görevlileri için yönergeler:",
		process_pattern_deadline: "Son tarih:",
		process_reviewers: "Gözden geçirme görevlileri:",
		process_approvals_required: "Gerekli onaylar:",
		process_on_reject: "Öğe reddedilirse:",
		process_return_to_originator: "Bana geri döndür",
		process_return_to_previous_reviewer: "Önceki gözden geçirme görevlisine geri döndür",
		process_additional_settings: "Ek ayarlar:",
		process_allow_reassign: "Gözden geçirme görevlilerinin bu gözden geçirmeyi yeniden atamasına izin ver",
		process_complete_notification: "Gözden geçirme tamamlanınca bana bildir",
		process_workflow_name_hover_help: "Bu iş öğesi için belirteceğiniz ad, gözden geçirme görevlilerinin gelen sepetlerindeki bu öğeyi diğer öğelerden ayırt etmelerini kolaylaştıracak bir ad olmalıdır.",
		process_approvals_required_hover_help: "İş öğesi koşutzamanlı olarak birden çok kişi tarafından gözden geçirilecekse, iş akışının başarıyla tamamlanması için kaç onayın gerekli olduğunu belirtebilirsiniz.",
		process_approval_options: "Onay seçenekleri",
		process_all: "Tümü",
		process_at_least: "En az",
		process_at_least_by_count: "En az şu sayıda gözden geçiren: ${0}",
		process_at_least_by_percentage: "Gözden geçirenlerin yüzde olarak en az şu kadarı: ${0}",
		process_comments: "Açıklamalar:",
		process_review_step_comments_hover_help: "İş öğesini reddederseniz, reddetme nedeninizle ilgili bilgi vermeniz gerekir. Bu bilgi, iş akışını başlatan kişinin ya da önceki gözden geçirme görevlisinin kaygılarınıza yanıt vermesini sağlar.",
		process_rework_step_comments_hover_help: "Açıklamalar karşısındaki görüşünüzü bildirmeniz gerekir. Açıklamalarla aynı görüşte değilseniz, kararınızın dayandığı mantığı belirtin.",
		process_rejection_reason: "Reddetme nedeni:",
		process_summary: "Özet",
		process_sequential_review: "Sıralı gözden geçirme",
		process_sequential_review_description: "İş öğesi, her gözden geçirme görevlisi tarafından sırayla gözden geçirilir.",
		process_parallel_review: "Koşut gözden geçirme",
		process_parallel_review_description: "İş öğesi, her gözden geçirme görevlisi tarafından koşutzamanlı olarak gözden geçirilir.",
		process_parallel_approvals_required_error: "Gereken onay sayısı çok fazla. Yalnızca ${0} gözden geçiren belirtildi.",
		process_parallel_invalid_required_approvals_count: "Değer geçersiz. Değer ${0} olmalıdır.",
		process_subject_prompt: "Konuyu girin",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "İş Öğesi:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Özellikleri görüntüleme",
		view_permissions_level: "İzinleri görüntüleme",
		view_content_level: "Belge görüntüleme",
		link_level: "Bağlantı",
		modify_properties_level: "Özellikleri düzenleme",
		modify_content_level: "Belgeyi düzenleme",
		minor_version_level: "İkincil sürümü düzenleme",
		major_version_level: "Ana sürümü düzenleme",
		create_instance_level: "Eşgörünüm yaratma",
		delete_document_level: "Belge silme",
		delete_item_level: "Öğe silme",
		modify_document_permissions_level: "İzinleri yönetme",
		modify_folder_permissions_level: "İzinleri yönetme",
		modify_owner_level: "Sahibi değiştirme",
		delete_folder_level: "Klasör silme",
		file_in_folder_level: "Klasörlere ekleme",
		create_subfolder_level: "Alt klasör yaratma",
		link_item_level: "Belgeye ek açıklama ekleme, klasöre ekleme", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Yalnızca belge: Belgeye ek açıklama ekleme ya da bir ek açıklamayı belgeden kaldırma</li><li>Yalnızca klasör: Klasöre öğe ekleme ya da klasörden öğe kaldırma</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Sil",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Sahip",
		/* previously \"Full control\" */
		edit_privilege: "Yazar",
		/* previously \"Edit\" */
		read_only_privilege: "Okuyucu",
		/* previously \"Read only\" */
		no_access_privilege: "Erişim yok",
		share_with_label: "Bunlarla paylaş:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Yalnızca ben",
		public_label: "Herkes",
		members_label: "Belirli kullanıcılar ve gruplar",
		select_members_label: "Seç...",
		select_user_group_label: "Kullanıcı Seç...",
		select_users_groups_label: "Kullanıcı ve Grup Seç...",
		select_user_label: "Kullanıcı Seç...",
		propagation_label: "Yayma:",
		access_label: "İzinler:",
		add_permission_add_label: "Ekle",
		security_policy_label: "Güvenlik ilkesi:",
		includes_inherited_access: "Devralınan erişimi içerir",
		customize_access_for_label: "İlgili erişimi özelleştir",
		customize: "Özelleştir",
		direct: "Bu Öğe",
		singleLevelInheritance: "Bir Düzey",
		infiniteLevelInheritance: "Tüm Düzeyler",
		inherited: "Devralınmış",
		direct_hover_help: "Seçilen öğe için geçerli olan güvenlik ayarları",
		singleLevelInheritance_hover_help: "Bu izinler bu öğe için ve öğenin hemen altındaki, güvenliği bu öğeden devralmak üzere yapılandırılmış öğeler için geçerlidir.",
		infiniteLevelInheritance_hover_help: "Bu izinler bu öğe için ve öğenin, güvenliği bu öğeden devralmak üzere yapılandırılmış tüm türevleri için geçerlidir.",
		inherited_hover_help: "Bu izinler üst öğeden devralınır.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0} ile ilgili bu izinler bu öğe için ve öğenin hemen altındaki, güvenliği bu öğeden devralmak üzere yapılandırılmış öğeler için geçerlidir.",
		infiniteLevelInheritance_member_hover_help: "${0} ile ilgili bu izinler bu öğe için ve öğenin, güvenliği bu öğeden devralmak üzere yapılandırılmış tüm türevleri için geçerlidir.",
		inherited_member_hover_help: "${0} ile ilgili bu izinler üst öğeden devralınır.",
		partial_hover_help: "Öğe güvenliği ayarları bir kullanıcı tarafından değiştirildi",
		allow: "İzin Ver",
		deny: "İzin Verme",
		basic: "Temel",
		advanced: "İleri Düzey",
		permission_type: "İlgili erişimi ayarla:",
		share_with_hover_help: "Bu öğe, izleyen kullanıcılar ve gruplarla paylaşılır.",
		direct_security_policy_hover_help: "Bu güvenlik ilkesinin ayarları, bu öğenin güvenliğini değiştirmenizi sağlar.",
		security_policy_hover_help: "Bu güvenlik ilkesinin ayarları bu öğenin güvenliğini değiştirmenizi önlediği için, bu öğenin güvenliği salt okunur olur.",
		security_remove: "İzin yok",
		pseudo_group_label: "Diğer Ad Hesapları",
		marking_hover_help: "Bu öğenin güvenliği, güvenliği olumsuz etkileyebilecek bir işaretleme kümesiyle denetlenir.",
		note_label: "Önemli:",
		marking_text: "Bu öğe şöyle işaretlendi: ${0}. Öğenin ek güvenlik kısıtlamaları olabilir.",
		authenticated_users: "Kimliği doğrulanmış kullanıcılar",
		realm_users: "${0} kullanıcı",
		denyAll: "Hiçbirini verme",
		allowAll: "Tümünü ver",
		remove_direct_text: "Yaptığınız değişiklikleri kaydettiğinizde, bu üyeye ilişkin izinler öğeden kaldırılır.",
		remove_single_inheritance_text: "Yaptığınız değişiklikleri kaydettiğinizde, bu üyeye ilişkin izinler öğeden ve <br>öğenin hemen altındaki, güvenliği bu öğeden devralmak üzere yapılandırılmış öğelerden kaldırılır.<p>Devam etmek istiyor musunuz?",
		remove_infinite_inheritance_text: "Yaptığınız değişiklikleri kaydettiğinizde, bu üyeye ilişkin izinler öğeden ve <br>güvenliği bu öğeden devralmak üzere yapılandırılmış tüm türevlerden kaldırılır.<p>Devam etmek istiyor musunuz?",
		remove_inheritance_text: "Yaptığınız değişiklikleri kaydettiğinizde, bu üyeye ilişkin izinler öğeden ve <br>güvenliği bu öğeden devralmak üzere yapılandırılmış tüm türevlerden kaldırılır. Yalnızca, bu öğe tarafından devralınan <br>izinler kalır.<p>Devam etmek istiyor musunuz?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "${0} için bu izinleri kaldır",

		security_proxy_text: "Bu öğenin güvenliği salt okunur.",
		security_proxy_declared_text: "Bu öğenin güvenliği, bir güvenlik yetkisini tarafından tanımlandığı için salt okunur olur.",
		security_proxy_hover_help: "Bu öğenin güvenliği, havuzdaki başka bir nesne için ayarlanan güvenlikle denetlenir.",
		add_permissions_label: "İzin ekle",
		permission_propagation_direct: "Yalnızca bu klasör",
		permission_propagation_onelevel: "Bu klasör ve bir düzey altı",
		permission_propagation_alllevels: "Bu klasör ve alttaki tüm düzeyler",
		document_propagation_label: "İlgili erişimi ayarla:",
		document_propagation_FOLDER: "Klasör",
		document_propagation_DOCUMENT: "Belge",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Kimlik doğrulama kaynağı:",

		/* Versions Widget */
		object_versions_selector_label: "Sürümler:",
		object_versions_label: "Sürümler",
		object_type_document_label: "Belge:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Dosyalandığı Klasörler",
		folders_filed_in_folder_col_hdr: "Klasör",
		folders_filed_in_path_col_hdr: "Yol",
		folders_filed_in_containment_name_col_hdr: "Bulundurma Adı",
		folders_filed_in_creator_col_hdr: "Oluşturan",
		folders_filed_in_date_created_col_hdr: "Yaratma Tarihi",

		/* Parent Documents */
		properties_parent_documents_label: "Üst Belgeler",

		/* Select object dialog */
		select_object_title: "Öğe Seç",
		select_object_breadCrumb_version_prefix: "İlgili sürümler: ",
		show_versions_label: "Sürümleri Göster",
		use_current_version_label: "Yürürlükteki Sürümü Kullan",
		use_released_version_label: "Serbest Bırakılan Sürümü Kullan",

		/* Select content class dialog */
		select_class: "Sınıf Seç",
		/* Select Search dialog */
		select_search: "Arama Seçin",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Bağlantıyı Görüntüle",
		show_hyperlink_intro: "Bağlantıyı epostalara, sohbetlere ve web sayfalarına kopyalayabilir ve yapıştırabilirsiniz. Öğenin birden çok sürümü varsa, bağlantı yaratmak istediğiniz sürümü belirtin.",
		show_hyperlink_intro_no_version_select: "Bağlantıyı epostalara, sohbetlere ve web sayfalarına kopyalayabilir ve yapıştırabilirsiniz.",
		show_text_label: "Sürüm:",
		released_button_label: "Serbest Bırakıldı",
		current_button_label: "Geçerli",
		select_button_label: "Belirli Sürüm",
		show_hyperlink_no_released_version_msg: "Bu belgenin serbest bırakılmış bir sürümü yok.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "İş Akışını Başlat",
		edit_workflow_title: "İş Öğesi Özellikleri",
		start_workflow_intro: "Seçilen öğeleri işlemek için iş akışı başlatılır. İş öğelerini belirli bir kullanıcıya atamak isterseniz sahip belirtin.",
		edit_workflow_intro: "Seçilen iş öğelerinin özelliklerini düzenleyebilirsiniz. İş öğesini başka bir kullanıcıya yeniden atamak isterseniz sahip belirtin.",
		workflow_field_label: "İş akışı:",
		priority_field_label: "Öncelik:",
		owner_field_label: "Sahip:",
		start_button_label: "Başlat",
		save_button_label: "Kaydet",
		owner_value_hint: "En çok 32 karakter uzunluğunda alfasayısal bir dizgi girin. Dizgi yalnızca boşluk karakterlerini ya da şu karakterleri içerebilir: a-z, A-Z, 0-9, ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "İçerik Öğeleri",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Değer geçersiz. Değer yalnızca boşluk karakterlerini ya da şu karakterleri içerebilir: a-z, A-Z, 0-9, ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "İş öğesinin önemini göstermek için 1 - 32000 arası bir değer girin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Değer geçersiz. Öncelik 1 - 32000 arası bir değer olmalıdır.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "İş akışı adı yok.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "İş Akışında Askıya Al",
		suspend_workitems_intro: "Bir iş öğesini iş akışında askıya aldığınızda, iş öğesi sürdürülünceye kadar işlenemez",
		suspend_workitems_options_label: "Seçilen iş öğelerini askıya al:",
		suspend_until_resume_label: "El ile sürdürülünceye kadar",
		suspend_until_date_label: "Şu zamana kadar",
		suspend_for_duration_label: "Şu zaman için",
		suspend_for_duration_hours: "Saat",
		suspend_for_duration_days: "Gün",
		suspend_for_duration_weeks: "Hafta",
		suspend_for_duration_months: "Ay",
		suspend_for_duration_years: "Yıl",
		suspend_button_label: "Askıya Al",
		suspend_duration_value_hint: "Süre için 1 - 99 aralığında bir değer girin.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Değer geçersiz. 1 - 99 aralığında olmalıdır.",

		/* Remove from workflow */
		remove_workflow_title: "İş Akışından Kaldır",
		remove_workflow_confirmation: "Seçilen öğeleri iş akışından kaldırmak istiyor musunuz?<br>${0} öğe seçildi.",
		remove_workflow_button_label: "Kaldır",

		/* Unfile dialog */
		unfile_dialog_title: "Klasörden Kaldır",
		unfile_dialog_remove_from_folder_label: "Bu klasörden kaldır:",
		unfile_dialog_info_text: "Klasörlerden öğeleri kaldırabilirsiniz. Ancak, bir öğenin tüm klasörlerden kaldırılması, öğenin havuzdan kaldırılmasına neden olmaz. Arama yaparak öğeyi alabilirsiniz. Bu listede yalnızca, görüntüleme ayrıcalıklarınız bulunan klasörler görüntülenir.",
		unfile_dialog_select_all: "Tümünü Seç",
		unfile_dialog_deselect_all: "Tümünü Temizle",
		unfile_dialog_remove_button_label: "Kaldır",
		unfile_dialog_select_folder_col_hdr: "Klasör Seç",
		unfile_dialog_folder_col_hdr: "Klasör",
		unfile_dialog_path_col_hdr: "Yol",
		unfile_dialog_not_filed_msg: "Bu öğe hiçbir klasörde yok.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Bu öğeyi bulunduğu klasörlerden kaldırmak için gereken izinlere sahip değilsiniz.",
		unfile_dialog_folder_not_selectable_tooltip: "Bu öğeyi bu klasörden kaldırmak için gereken izinlere sahip değilsiniz.",
		unfile_multi_prompt: "Seçilen öğeleri ${0} klasöründen kaldırmak istiyor musunuz?",
		unfile_large_number_items_confirmation_question: "${1} klasöründen kaldırmak için ${0} öğe seçtiniz.<br/>Çok sayıda öğenin klasörden kaldırılması uzun sürebilir.<br/>Devam etmek istiyor musunuz?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Aç",
		move_to_folder_title: "Klasöre Taşı",
		move_to_folder_button_caption: "Taşı",
		move_to_folder_label: "Klasöre taşı:",
		add_to_folder_title: "Klasöre Ekle",
		add_to_folder_button_caption: "Ekle",
		add_to_folder_label: "Klasöre ekle:",
		copy_to_folder_title: "Klasöre kopyala",
		copy_to_folder_button_caption: "Kopyala",
		copy_to_folder_label: "Bu klasöre kopyala:",
		copy_to_folder_delete_label: "Kopyalama tamamlandıktan sonra seçilen öğeleri Box'tan sil",
		move_from_folder_label: "Bu klasörden taşı:",
		move_file_info_text: "Öğeleri bir klasörden diğerine taşıyabilirsiniz.",
		move_folder_info_text: "Klasörleri bir üst klasörden diğerine taşıyabilirsiniz.",
		add_doc_to_folder_info_text: "Öğeleri bir ya da daha fazla klasöre ekleyebilirsiniz. Bir öğe bir klasörde zaten varsa, o klasörde kalır ve belirteceğiniz ek klasörlere eklenir.",
		copy_doc_to_folder_info_text: "Öğeleri bir klasöre kopyalayabilirsiniz.",
		box_copy: "Box'a Kopyala",
		box_copy__button_caption: "Kopyala",
		box_copy_to_info_text: "Seçilen öğeleri Box'tan kopyalamak istediğiniz havuzu ve klasörü seçin.",
		box_copy_from_info_text: "Seçilen öğeleri Box'tan kopyalamak istediğiniz havuzu ve klasörü seçin.",
		box_copy_version_info_text: "Yeni belge eklemek için havuzu ve klasörü seçin. Yeni bir sürümü içeri vermek için havuzu ve belgeyi seçin.",
		admin_box_copy: "Box'a kopyala",
		admin_box_copy_hover: "Bu seçenek, kullanıcıların Box'a belge kopyalamasını sağlar.",

		no_permission_to_copy_version_msg: "Belgeyi, seçilen belgenin yeni sürümü olarak Box'tan kopyalayamazsınız. Seçilen belgeyi düzenlemek için gereken izinlere sahip değilsiniz ya da seçilen belge başka biri tarafından dışarı alındı.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Bu öğeyi bulunduğu klasörlerden kaldırmak için gereken izinlere sahip değilsiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Bu öğeyi bu klasörden kaldırmak için gereken izinlere sahip değilsiniz.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Öğe hiçbir klasörde dosyalanmadığı için taşınamıyor. Başka bir öğe seçin.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "İş Akışını Başlat",
		subscriptions_dialog_available_items_label: "Kullanılabilecek öğeler:",
		subscriptions_dialog_info_text: "Başlatılacak iş akışını belirtin.",
		subscriptions_dialog_select_button_label: "Tamam",
		subscriptions_dialog_name_col_hdr: "Ad",
		subscriptions_dialog_desc_col_hdr: "Tanım",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Rolleri Yönet",
		manageroles_dialog_info_text: "Bu süreç uygulaması alanıyla ilişkilendirilmiş her rol için kullanıcı listesini değiştirebilirsiniz.",
		manageroles_dialog_members_label: "Üyeler",
		manageroles_dialog_roles_label: "Roller",
		manageroles_dialog_add_button_label: "Kullanıcı ve Grup Ekle",
		manageroles_dialog_remove_button_label: "Kaldır",
		manageroles_dialog_save_button_label: "Kaydet",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Bu öğeyle ilişkilendirilmiş herhangi bir iş akışı yok.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "İş Akışı Tercihleri",
		workflow_pref_dialog_info_text: "Eposta bildirimi almak istediğiniz iş akışı olaylarını belirtin. Ayrıca, işinizin atanacağı kişiyi seçerek, işi başka bir kişiye yöneltme seçeneğini de etkinleştirebilirsiniz.",

		workflow_pref_general: "Genel",
		workflow_pref_email_address: "Eposta adresi",
		workflow_pref_email_address_hover: "İş akışı bildirimleri almak istediğiniz eposta adresini belirtin.",
		workflow_pref_preferred_locale: "Dil",
		workflow_pref_preferred_locale_hover: "Eposta bildirimlerinin görüntüleneceği dili belirler.",

		workflow_pref_work_item_notice: "İş Öğesi Bildirimleri",
		workflow_pref_step_new_assignment: "Bana yeni bir iş öğesi atandı",
		workflow_pref_step_new_assignment_hover: "Yeni iş öğesi aldığımda bana bildir",
		workflow_pref_step_expired_deadline: "İş öğesinin son tarihi geçti",
		workflow_pref_step_expired_deadline_hover: "Bir iş öğesinin son tarihini geçirdiğimde bana bildir",
		workflow_pref_step_reminders: "İş öğesinin son tarihi yaklaşıyor",
		workflow_pref_step_reminders_hover: "Bir iş öğesinin son tarihi yaklaştığında bunu bana anımsat",

		workflow_pref_originator_notice: "Başlatan Bildirimleri",
		workflow_pref_milestone_reached: "Kilometretaşına ulaşıldı",
		workflow_pref_milestone_reached_hover: "Başlattığım bir iş akışında bir kilometretaşına ulaşıldığında bana bildir",

		workflow_pref_tracker_notice: "İş Akışı İzleyici Bildirimleri",
		workflow_pref_tracker_new_assignment: "Bana yeni bir izleyici öğesi atandı",
		workflow_pref_tracker_new_assignment_hover: "İzlediğim bir iş öğesi başlatıldığında bana bildir",
		workflow_pref_tracker_deadline_reminders: "İş akışı son tarihi yaklaşıyor",
		workflow_pref_tracker_deadline_reminders_hover: "Bir iş akışının son tarihi yaklaştığında bunu bana anımsat",
		workflow_pref_tracker_deadline_expired: "İş akışının son tarihi geçti",
		workflow_pref_tracker_deadline_expired_hover: "Bir iş akışının son tarihi geçtiğinde bana bildir",
		workflow_pref_tracker_exception: "İş Akışı hatası oluştu",
		workflow_pref_tracker_exception_hover: "Bir iş akışı kural dışı durumu ya da hatası oluştuğunda bana bildir",
		workflow_pref_tracker_expired_deadline: "Adımın son tarihi geçti",
		workflow_pref_tracker_expired_deadline_hover: "İzlemekte olduğum bir iş akışında bir adımın son tarihi geçtiğinde bana bildir",
		workflow_pref_tracker_milestone_reached: "Kilometretaşına ulaşıldı",
		workflow_pref_tracker_milestone_reached_hover: "İzlemekte olduğum bir iş akışında bir kilometretaşına ulaşıldığında bana bildir",

		workflow_pref_out_notice: "Ofis Dışında",
		workflow_pref_proxy_user: "İşi bu kullanıcıya yönelt",
		workflow_pref_proxy_user_hover: "Ofis dışında ya da tatilde olduğunuzda işinizin otomatik olarak başka bir kullanıcıya yöneltilmesi için bu seçeneği kullanın.",
		workflow_pref_workflow: "İş Akışı",
		workflow_pref_on: "Açık",
		workflow_pref_off: "Kapalı",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "İş Akışını Başlat",
		transfered_workflows_dialog_info_text: "Başlatılacak bir iş akışı seçin.",
		transfered_workflows_dialog_available_items_label: "Kullanılabilecek öğeler:",
		transfered_workflows_dialog_select_button_label: "Başlat",
		transfered_workflows_dialog_name_col_hdr: "Ad",
		transfered_workflows_dialog_no_item_found: "Aktarılan herhangi bir iş akışı bulunamadı.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "İş Akışını Aktar",
		transfer_workflow_dialog_info_text: "İş akışı sistemine aktarılacak iş akışını seçin.",
		transfer_workflow_dialog_use: "Bu iş akışı adını kullan",
		transfer_workflow_dialog_use_another: "Başka bir iş akışı adı kullan",
		transfer_workflow_dialog_in_use: "İş akışı adı: ",
		transfer_workflow_dialog_transfer_button_label: "Aktar",
		transfer_workflow_dialog_no_items_found: "Aktarılan herhangi bir iş akışı bulunamadı.",
		transfer_workflow_dialog_use_hover: "İş akışı tanımlamasında yürürlükte olan iş akışı adını belirtin.",
		transfer_workflow_dialog_another_hover: "Farklı bir iş akışı adı belirtin ya da var olan aktarılmış bir iş akışı adını yeniden kullanın.",

		/*Search In control*/
		search_in_title: "Arama yeri:",
		search_in_teamspaces: "Ekip alanları",
		search_in_repositories: "Havuzlar",
		search_in_thisteamspaces: "Bu ekip alanı",

		ajaxViewer_save: "Ek Açıklamaları Kaydet",
		ajaxViewer_print: "Yazdırma Önizlemesi",
		ajaxViewer_firstPage: "İlk Sayfa",
		ajaxViewer_previousPage: "Önceki Sayfa",
		ajaxViewer_nextPage: "Sonraki Sayfa",
		ajaxViewer_lastPage: "Son Sayfa",
		ajaxViewer_unknownPageCount: "1 / ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} / ${1}",
		ajaxViewer_zoomOut: "Uzaklaştır",
		ajaxViewer_zoomIn: "Yaklaştır",
		ajaxViewer_25percent: "% 25",
		ajaxViewer_50percent: "% 50",
		ajaxViewer_75percent: "% 75",
		ajaxViewer_100percent: "% 100",
		ajaxViewer_150percent: "% 150",
		ajaxViewer_200percent: "% 200",
		ajaxViewer_300percent: "% 300",
		ajaxViewer_400percent: "% 400",
		ajaxViewer_fitWidth: "Genişliğe Göre Boyutlandır",
		ajaxViewer_fitHeight: "Yüksekliğe Göre Boyutlandır",
		ajaxViewer_fitPage: "Sayfaya Göre Boyutlandır",
		ajaxViewer_rotate270: "270 Derece Döndür",
		ajaxViewer_rotate90: "90 Derece Döndür",
		ajaxViewer_rotate180: "180 Derece Döndür",
		ajaxViewer_darken: "Daha Koyu",
		ajaxViewer_lighten: "Daha Açık",
		ajaxViewer_lessContrast: "Daha Az Karşıtlık",
		ajaxViewer_moreContrast: "Daha Fazla Karşıtlık",
		ajaxViewer_invert: "Ters Çevir",
		ajaxViewer_createHighlight: "Vurgula",
		ajaxViewer_createNote: "Ek Açıklama Koy",
		ajaxViewer_editAnnotation: "Ek Açıklama Özelliklerini Düzenle",
		ajaxViewer_deleteAnnotation: "Ek Açıklamayı Sil",
		ajaxViewer_editAnnotationTitle: "Ek Açıklama Özelliklerini Düzenle",
		printableView_print: "Yazdır",
		printableView_close: "Kapat",

		search_results_dropdown_button: "Sonuç Görüntüsü",
		search_results_columns_label: "Arama Sonuçları Görüntüsü",
		search_results_columns_description: "Arama sonuçlarında görüntülenmesini istediğiniz özellikleri seçin.",
		search_results_sortby_label: "Sıralama temeli:",
		search_results_order_label: "Sıralama düzeni:",
		search_results_accending_label: "Artan",
		search_results_descending_label: "Azalan",
		search_results_available_properties: "Kullanılabilir",
		search_results_selected_properties: "Seçilen",
		search_rank_property: "Anlam sırası (yalnızca metin araması)",
		search_name_attribute: "Ad (${0})",
		search_results_summary_enabled_label: "İçerik özetlerini etkinleştir (yalnızca metin araması)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Aramalar",
		manage_teamspace_classes_tab_title: "Sınıflar",
		manage_teamspace_entry_templates_tab_title: "Giriş Şablonları",
		manage_teamspace_team_tab_title: "Ekip",
		manage_teamspace_roles_tab_title: "Roller",
		manage_teamspace_dialog_title: "Ekip Alanını Değiştir",
		manage_teamspace_button_label: "Ekip Alanını Değiştir",
		manage_teamspace_team_pane_heading: "Ekip Seçin",
		manage_teamspace_classes_pane_heading: "Sınıf Seçin",
		manage_teamspace_entry_templates_pane_heading: "Giriş Şablonları Seçin",
		manage_teamspace_no_rights_message: "Bu ekip alanını değiştirmek için gereken izinlere sahip değilsiniz.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Ekip Alanı Özellikleri",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Kullanıcılar ekip alanında göz atarken içerik listesinde belgeler ve klasörler için görüntülenecek özellikleri belirtin. Özelliklerin görüntüleneceği sırayı da belirtebilirsiniz.",
		teamspace_props_sel_cols_use_default_label: "Bu havuz için <b>Göz At</b> sayfasındaki ayarları kullan",
		teamspace_props_sel_cols_use_default_tooltip: "Yönetim aracında bu havuz için Göz At sayfasında belirtilen ayarlar kullanılır.",
		teamspace_props_general_tab_label: "Genel",
		teamspace_props_column_props_tab_label: "Görüntülenen Özellikler",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "İçe aktarmak için dosya seçin",
		teamspace_import_template_instruction: "İçe aktarmak için bir ekip alanı şablonu dışa aktarma dosyası seçebilirsiniz.",
		teamspace_import_template_button_label: "Al",
		teamspace_import_template_dialog_label: "Ekip Alanı Şablonunu İçe Aktar",

		/* Annotation Dialog */
		annotationDlg_title: "Ek Açıklamalar",
		annotationDlg_description: "Seçilen belgenin şu ek açıklamaları var:",
		annotationDlg_msg_noAnnotations: "Herhangi bir ek açıklama yok. Ek açıklama yaratmak için Ekle düğmesini tıklatın.",
		annotationDlg_pageLabel: "Sayfa: ${pageNum}",
		annotationDlg_accLabel: "ERİŞİM: ${accType}",
		annotationDlg_accLabel_public: "Genel",
		annotationDlg_accLabel_private: "Özel",
		annotationDlg_accLabel_privateGroup: "Özel(${groupName})",
		annotationDlg_copiable: "Başka bir sunucuya kopyalanabilir",
		annotationDlg_cannotCopy: "Başka bir sunucuya kopyalanamaz",
		annotationDlg_addButtonLabel: "Ekle",

		/* Share Dialog */
		is_shared: "Paylaşıldı",
		is_share_pending: "Paylaşım bekliyor",
		share_title: "Box Paylaşımı",
		share_instructions_new: "Paylaşılan dosya için bağlantı içeren bir eposta gönderin. Bağlantıyı alan herkes dosyaya erişebilir.",
		share_instructions_existing: "Paylaşılan dosya için bağlantı içeren bir eposta gönderin. Bağlantıyı alan herkes dosyaya erişebilir. Bir kullanıcı bu dosyayı önceden paylaştığı için bu bağlantı başka kullanıcılarda da olabilir.",
		share_instructions_another_version_shared: "Paylaşılan dosyaya ilişkin bağlantıyı içeren bir eposta gönderin. Bağlantıyı alan herkes dosyaya erişebilir. Bir kullanıcı bu dosyanın başka bir sürümünü önceden paylaştığı için bu bağlantı başka kullanıcılarda da olabilir.",
		share_buttonLabel_share: "Paylaş",
		share_email_addresses: "Gönderme hedefi:",
		share_email_addresses_hover: "Paylaşma tamamlandığında, bu eposta adreslerine bağlantı gönderilir. Bir şey girmezseniz, bağlantı sizin eposta adresinize gönderilir.",
		share_email_addresses_reshare_hover: "Paylaşma tamamlandığında, bu eposta adreslerine bağlantı gönderilir. Bir şey girmezseniz eposta gönderilmez.",
		share_password: "Parolayı ayarla:",
		share_password_placeholder: "İsteğe Bağlı",
		share_comments: "İleti:",
		share_comments_default: "Dosyamı Box'ta sizinle paylaşmak istiyorum.",
		share_myEmail: "Gönderme kaynağı:",
		share_expiration: "Bağlantı süre bitimini ayarla:",
		share_expire: "Erişim süresi bitimi:",
		share_expire_none: "Süre bitimi yok",
		share_allowDownload: "Karşıdan yüklemeye izin ver",
		share_add: "Ekle",
		share_advanced_instructions: "Karşıdan yükleme, süre bitimi ve parola ayarları, Box'taki paylaşılan dosya için geçerlidir.",
		share_advanced_existing_instructions: "Karşıdan yükleme, süre bitimi ve parola ayarları, Box'taki paylaşılan dosya için geçerlidir.",
		share_options_edit_warning: "Önemli: Bu ayarlarda yapılan değişiklikler, bağlantıya sahip olan herkesi (önceden sahip olan kişiler de içinde olmak üzere) etkiler.",
		share_link: "Bağlantı:",
		share_email_addresses_placeholder: "Eposta adresleri",
		share_email_address_placeholder: "Eposta adresi",
		share_email_address_invalid: "Geçerli bir eposta adresi girin.",
		share_cannot_share_with_self: "Kendinizle dosya paylaşamazsınız. Farklı bir kullanıcı belirtin.",
		share_selected_version_with_minor_warning_hover: "Belgenin ${0} sürümü paylaşıldı. ${1} sürümünü seçtiniz.<br><br><b>Uyarı</b>: ${1} sürümünü paylaşırsanız, ${1} sürümüne ilişkin paylaşımı silmedikçe, ${2} sürümünü kimse paylaşamaz.",
		share_selected_version_hover: "Belgenin ${0} sürümü paylaşıldı. ${1} sürümünü seçtiniz.",
		share_selected_version_message: "Önemli: Belgenin ${0} sürümü paylaşıldı. ${1} sürümünü seçtiniz.",
		share_different_version_message: "Önemli: ${1} sürümünü seçtiniz, ancak belgenin ${0} sürümü zaten paylaşıldı.  Önce paylaşımı silmeden ${1} sürümünü paylaşamazsınız; ancak ${0} sürümüne ilişkin bağlantıyı paylaşabilirsiniz.",
		share_version_message: "Önemli: Belgenin ${0} sürümü paylaşıldı. Paylaşmak istediğiniz sürümü seçin.",
		share_version_new: "${0} sürümünü paylaş",
		share_version_new_p8_hover: "Bu belgenin paylaşılması, yalnızca seçilen sürüme ilişkin özel bir sürüm bağlantısı yaratır.<br><br>Bir belge önceden paylaşıldıysa:<ul><li>Daha sonraki bir sürümü paylaşabilirsiniz ve bağlantı daha sonraki sürüme yeniden yönlendirir.</li><li>Önce paylaşımı silmeden, daha önceki bir sürümü paylaşamazsınız.</li></ul>",
		share_version_new_cm_hover: "Bu belgenin paylaşılması, yalnızca seçilen sürüme ilişkin özel bir sürüm bağlantısı yaratır.<br><br>Bir belge önceden paylaşıldıysa:<ul><li>Daha sonraki bir sürümü paylaşabilirsiniz ve bağlantı daha sonraki sürüme yeniden yönlendirir.</li><li>Daha önceki bir sürümü paylaşamazsınız.</li></ul>",
		share_version_update: "${0} sürümünü paylaş (paylaşım seçeneklerini güncelle).",
		share_version_update_p8_hover: "Bu belgenin paylaşılması, yalnızca belirli sürüme ilişkin bağlantıyı alıkoyar.<br><br>Bir belge önceden paylaşıldıysa:<ul><li>Daha sonraki bir sürümü paylaşabilirsiniz ve bağlantı daha sonraki sürüme yeniden yönlendirir.</li><li>Önce paylaşımı silmeden, daha önceki bir sürümü paylaşamazsınız.</li></ul>",
		share_version_update_cm_hover: "Bu belgenin paylaşılması, yalnızca belirli sürüme ilişkin bağlantıyı alıkoyar.<br><br>Bir belge önceden paylaşıldıysa:<ul><li>Daha sonraki bir sürümü paylaşabilirsiniz ve bağlantı daha sonraki sürüme yeniden yönlendirir.</li><li>Daha önceki bir sürümü paylaşamazsınız.</li></ul>",
		share_version_change_to_current: "${0} sürümünü paylaş (paylaşımı seçilen sürümle güncelle).",
		share_version_change_to_current_p8_hover: "Bu belgenin paylaşılması, bağlantıyı yalnızca seçilen sürümü gösterecek şekilde günceller.<br><br>Bir belge önceden paylaşıldıysa:<ul><li>Daha sonraki bir sürümü paylaşabilirsiniz ve bağlantı daha sonraki sürüme yeniden yönlendirir.</li><li>Önce paylaşımı silmeden, daha önceki bir sürümü paylaşamazsınız.</li></ul>",
		share_version_change_to_current_cm_hover: "Bu belgenin paylaşılması, bağlantıyı yalnızca seçilen sürümü gösterecek şekilde günceller.<br><br>Bir belge önceden paylaşıldıysa:<ul><li>Daha sonraki bir sürümü paylaşabilirsiniz ve bağlantı daha sonraki sürüme yeniden yönlendirir.</li><li>Daha önceki bir sürümü paylaşamazsınız.</li></ul>",
		share_repository: "Paylaşılan dosyalar için havuz",
		share_repository_hover: "Kullanmak istediğiniz Box havuzunu görmüyorsanız, Havuzlar sayfasında yeni bir Box havuzu ekleyebilirsiniz.",
		share_options: "Paylaşım Seçenekleri",
		unshare_confirm: "Paylaşımı silerseniz, paylaşım bağlantıları (diğer kullanıcılar tarafından önceden gönderilenler de içinde olmak üzere) işlevsiz duruma gelir. Belgeyi paylaşmak isteyen diğer kullanıcılar özgün belgeyi seçmeli ve yeniden paylaşmalıdır.<br><br>Paylaşımı silmek istediğinizden emin misiniz?",
		unshare_button: "Box Paylaşımını Sil",
		admin_share: "Box paylaşım hizmetleri:",
		admin_share_hover: "Kullanıcıların, Box paylaşımı etkinleştirilmiş herhangi bir havuzdan belge paylaşmasına izin verir. Bir belgenin paylaşılması dosyanın Box'a kopyalanmasını, bağlantı yaratılmasını ve bağlantının epostayla gönderilmesini içerir.",
		admin_my_email_modifiable: "Kullanıcıların Gönderme Kaynağı eposta adresini değiştirmesine izin ver",
		admin_my_email_modifiable_hover: "Box paylaşımı için, kullanıcının eposta adresi varsayılan olarak salt okunur olur ve Box kullanıcı hesaplarını temsil eden bir kullanıcı ve eposta adresleri eşlemesinden elde edilir.<br><br>Kullanıcıların paylaşma sırasında eposta adreslerini düzenlemelerine izin vermek için bu seçeneği belirleyin; ancak, eposta adresinin geçerliliği doğrulanmaz.",
		admin_repos_admin_user: "Paylaşım yöneticisi:",
		admin_repos_admin_user_hover: "Box paylaşım hizmetleri etkinleştirilmiş bir masaüstünüz varsa ve bu Box havuzu paylaşılan dosyaların havuzu olarak seçildiyse, paylaşım yöneticisini ayarlayın.<br><br>Ayarla'yı tıklatın ve geçerli bir Box yöneticisi hesabı kullanarak Box'ta oturum açın.<br><br>Paylaşım yöneticisi, Box'ta sınırsız depolama alanına sahip olacak şekilde yapılandırılmış bir Box yönetici kullanıcısı olmalıdır.",
		admin_repos_admin_user_not_set_warning: "Box yöneticisi seçilen havuz için yapılandırılmadı.<br><br>Seçilen havuz için Box yöneticisi ayarlanmadıkça ya da Box yöneticisinin yapılandırıldığı başka bir Box havuzu seçilmedikçe, Box paylaşım hizmetleri geçersiz kılınır.<br><br>Box yöneticisini, havuzun Genel sayfasındaki Box paylaşım hizmetleri kısmında ayarlayabilirsiniz.",
		admin_share_not_configured_warning: "Box paylaşım hizmetlerini kullanabilmek için, önce sunucu kimlik doğrulamasını kullanan bir Box havuzunu eklemeniz ve seçmeniz gerekir.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online Yapılandırması",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Bu masaüstüne erişen kullanıcıların, Office belgelerini Office Online Server kullanarak düzenleyebilmesini isteyip istemediğinizi belirleyin.",		
		admin_office_online_allow_collaborative_editing: "İşbirliğiyle düzenlemeye izin ver",
		admin_office_online_allow_collaborative_editing_hover: "Birden çok kullanıcının aynı belge üzerinde çalışmasını sağlar. Belge düzenlemeyi tek kullanıcıyla sınırlamak istiyorsanız bu seçeneği temizleyin.",
		admin_office_online_repository_not_set_warning: "Office Online hizmetini etkinleştirebilmek için, önce hizmeti bir havuzda etkinleştirmeli ve Microsoft Office Online Server URL adresini belirtmelisiniz. <b>Havuzlar</b>'ı tıklatıp bir havuz seçin ve <b>Edit Service Bütünleşmesi</b> sekmesinde hizmeti etkinleştirin. <b>Ayarlar > Genel</b> öğelerini tıklatın ve Microsoft Office Online Server URL adresini girin.",
		admin_settings_office_online_server_enable_hover: "Office belgeleriyle çalışmak için Office Online Server sunucusunu kullanmak isteyip istemediğinizi belirleyin.",
		admin_office_online_server_url: "Microsoft Office Online Server URL",
		admin_office_online_server_url_hover: "Diğer uygulamaların Office Online Server ile iletişim kurmak için kullanabileceği URL adresini belirtin. URL adresi şu biçimde olmalıdır: http://sunucu_adı:kapı_no/hosting/discovery.",
		admin_office_online_server_Verified: "Doğrulandı",
	    admin_office_online_server_Failed: "<b>Başarısız</b>",

		admin_repcfg_office_online_service_p8_hover: "Havuzu Office Online Server kullanmaya hazırlamak amacıyla her Office uygulaması için ilk şablon dosyasını ekleyebilirsiniz. Şablon belirtilmezse varsayılan şablon kullanılır.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server Integration",
		admin_repcfg_office_online_service_url_not_set_warning: "Office Online Server'ı etkinleştirebilmek için, önce Microsoft Office Online Server URL adresini belirtmelisiniz. Ayarlar > Genel öğelerini tıklatın ve URL adresini girin",
		admin_repcfg_office_online_word_template_name: "Varsayılan Word şablonu",
		admin_repcfg_office_online_excel_template_name: "Varsayılan Excel şablonu",
		admin_repcfg_office_online_powerpoint_template_name: "Varsayılan PowerPoint şablonu",
		admin_repcfg_office_online_blank_template_description: "Kendi şablonunuzu eklemezseniz bu varsayılan şablon kullanılır.",
		/* Edit Service settings */
		admin_icn_edit_title: "Yapılandırmayı Düzenle",	
	    admin_icn_edit_files_cleanup_interval: "Geçici dosya yenileme aralığı (gün):",
	    admin_icn_edit_files_cleanup_interval_hover: "Geçici dosyaların ICN Edit Client istemcisinde alıkonacağı süreyi ayarlayabilirsiniz. Varsayılan süre 20 gündür. Üst sınır 20 gündür. Alt sınır 1 gündür.",
	    admin_icn_edit_service_integration: "Edit Service Bütünleşmesi",
	    admin_icn_edit_service_integration_intro: "Edit Service, kullanıcıların bilgisayarlarında kurulu yerel uygulamalara kolayca dosya eklemelerini ya da dosyaları düzenlemelerini sağlar.<br><br><b>Önemli:</b> Edit Service'i etkinleştirirseniz, önceden tanımlanmış kategorileri düzenleyebilmek için havuz yapılandırmanızı kaydetmeniz gerekir.",
		admin_icn_edit_service: "Edit Service:",
		admin_icn_edit_enable_hover: "Edit Service'i kullanmak için yapmanız gerekenler şunlardır:<ul><li>Havuzda hizmeti etkinleştirin.</li><li>Ortamınızdaki masaüstlerinde hizmeti etkinleştirin.</li><li>Kullanıcı iş istasyonlarına IBM Content Navigator Edit Client istemcisini kurun.</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Etkinleştir",
		admin_icn_edit_disable: "Geçersiz Kıl",
		admin_icn_edit_create_new_category: "Yeni Kategori",
		admin_icn_edit_delete_category: "Kategoriyi Sil",
		admin_icn_edit_edit_category: "Kategoriyi Düzenle",
		admin_icn_edit_disable_category: "Kategoriyi Geçersiz Kıl",
		admin_icn_edit_enable_category: "Kategoriyi Etkinleştir",
		admin_icn_edit_new_category_dialog_title: "Yeni Kategori",
		admin_icn_edit_edit_category_dialog_title:"Kategoriyi Düzenle",
		admin_icn_edit_new_category_dialog_instructions: "Belge kategorisi, Edit Service için şablonları belirli MIME tipleriyle ilişkilendirmenizi sağlar. Örneğin, bir şablon kümesini PDF dosyalarıyla ilişkilendirerek, kullanıcıların IBM Content Navigator Edit Client istemcisinden dosya eklerken ya da düzenlerken şablon uygulamalarını sağlayabilirsiniz. <br><br><b>Önemli:</b> Yarattığınız kategoriye şablon ekleyebilmek için havuz yapılandırmanızı kaydetmeniz gerekir. ",
		admin_icn_edit_edit_category_dialog_instructions: "Bu kategoriye şablon ekleyebilmek için havuz yapılandırmanızı kaydetmeniz gerekir. ",
		admin_icn_edit_delete_category_dialog_instructions: "Bu kategoriyi ve kategoriyle ilişkilendirilmiş şablonları silmek istiyor musunuz?<br><br><b>Önemli:</b> Yaptığınız değişikliklerin kalıcı olması için bunları havuza kaydetmeniz gerekir. ",
		admin_icn_edit_category_label: "Kategori: ",
		admin_icn_edit_category_discription_label:"Tanım: ",
		admin_icn_edit_template_column_head:"Şablon Adı",
		admin_icn_edit_category_duplicate_error_message: "Tanıtıcısı bu değer olan bir kategori zaten var. ",
		admin_icn_edit_word_category_description: "Bu kategori, Edit Service hizmetinde Microsoft Word belgeleri için kullanılabilecek şablonları tanımlar. ",
		admin_icn_edit_excel_category_description: "Bu kategori, Edit Service hizmetinde Microsoft Excel belgeleri için kullanılabilecek şablonları tanımlar. ",
		admin_icn_edit_powerpoint_category_description: "Bu kategori, Edit Service hizmetinde Microsoft PowerPoint belgeleri için kullanılabilecek şablonları tanımlar. ",

		icn_edit_add_template_dialog_title:"${0} Şablonu Ekle",
		icn_edit_add_template_only_one_file_error: "Tek bir dosya seçebilirsiniz.",
		icn_edit_add_template_file_type_error: "Geçerli bir ${0} şablonu dosyası belirtmelisiniz.<br><br>Seçilen belgenin MIME tipi ${1}.<br><br>Geçerli MIME tipleri: ${2}.",
		icn_edit_change_template_dialog_title: "${0} Şablonunu Düzenle",
		icn_edit_action_in_new_menu_name:"${0} Belgesi",
		icn_edit_action_in_new_menu_submenu_oo_name: "Office Online ile",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "Masaüstü uygulamaları ile",
		icn_edit_new_document_dialog_title: "Yeni ${0} Belgesi",
		icn_edit_new_document_dialog_intro: "Yeni bir ${0} belgesi yaratın ve havuza ekleyin. Belge, seçilen Edit Service şablonuyla yaratılır.", 
		icn_edit_select_edit_service_template: "Şablon seçin",
		icn_edit_edit_service_template: "Edit Service şablonu:",
		icn_edit_new_document_category_no_templates_message:"Bu kategoride şablon yok. Lütfen, bu kategoriye şablon eklemesi için sistem yöneticinize başvurun.",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "Sınıf ve Rol Ayarları",
		admin_repcfg_classes_and_roles_warning: "Şablonları yaratabilecek, düzenleyebilecek ve kullanabilecek ya da Office Online Service ya da Edit Service ile çalışan belge taslakları yaratabilecek sınıfları ve kullanıcıları ya da kullanıcı gruplarını belirtmek için",
		admin_repcfg_classes_and_roles_click_warning: "burayı tıklatın.",
		/* Edit Service settings END */
		share_no_my_email_error: "Belgeyi paylaşmak için gereken eposta adresi saptanırken bir sorun oluştu.",
		share_no_my_email_error_explanation: "${0} kullanıcı kimliğiyle oturum açtınız, ancak kullanıcı kimliği bir eposta adresiyle eşlenmedi.",
		share_no_my_email_error_userResponse: "Oturum açmayı yeniden deneyin ya da farklı bir kullanıcı kimliğiyle oturum açın. Sorun devam ederse, bu hatayı sistem yöneticinize bildirin.",
		share_no_my_email_error_adminResponse: "${0} kullanıcı kimliği bir eposta adresiyle eşlenmedi ve ${1} masaüstü kullanıcıların Box paylaşım hizmetleri için eposta adresini düzenlemesine izin vermiyor.<br><br>Şu çözümlerden birini deneyin:<br>Eposta Eşleme eklentisinin kayıtlı olduğunu doğrulayın.<br>emailMappingPlugin.json dosyasının ${0} kullanıcı kimliğini ve kullanıcının eposta adresini içerdiğini doğruladıktan sonra, Eposta Eşleme eklentisini oluşturun, yapılandırın ve kaydettirin.<br>Eposta Eşleme eklentisini ya da FileNet P8 eposta adresi dizinini kullanmak istemiyorsanız, onun yerine kullanıcıların belge paylaşma sırasında kendi eposta adreslerini girmesine olanak vermek istiyorsanız, Box paylaşım hizmetleri için masaüstü ayarlarını kullanıcıların bağlantıyı başka bir eposta adresinden göndermesine izin verecek şekilde değiştirebilirsiniz.",
		share_no_my_email_error_0: "kullanıcı_kimliği",
		share_no_my_email_error_1: "masaüstü_adı",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Bu belgenin daha sonraki bir sürümü paylaşıldığı için, seçilen sürümünü paylaşamazsınız.",
		share_later_version_shared_error_explanation: "Önceden paylaşılmış bir belgenin daha önceki bir sürümünü paylaşamazsınız.",
		share_later_version_shared_error_userResponse: "Belgenin daha sonraki sürümüne ilişkin bağlantıyı göndermek için, daha sonraki sürümü seçtikten sonra Paylaş eylemini kullanın.<br><br>Belgenin seçilen sürümünü paylaşmak için, önce belgenin daha sonraki sürümüne ilişkin paylaşımı silmeniz gerekir.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Yeni İleti",
		email_from: "Kimden:",
		email_to: "Kime:",
		email_cc_link: "Bilgi",
		email_bcc_link: "Gizli",
		email_cc: "Bilgi:",
		email_bcc: "Gizli:",
		email_address_invalid: "Geçerli bir eposta adresi girin.",
		email_subject: "Konu:",
		email_message: "İleti:",
		email_message_placeholder: "İleti ekle",
		email_attachments: "Ekler:",
		email_links: "Bağlantılar:",
		email_send: "Gönder",
		email_dont_send: "Gönderme",
		email_subject_reminder: "Konu anımsatıcı",
		email_subject_reminder_confirm: "Bu iletiyi konu olmadan mı göndermek istiyorsunuz?",
		email_missing_from_error: "Epostayı göndermek için gereken Kimden eposta adresi saptanırken bir sorun oluştu.",
		email_missing_from_error_explanation: "${0} kullanıcı kimliğiyle oturum açtınız, ancak kullanıcı kimliği bir eposta adresiyle eşlenmedi.",
		email_missing_from_error_userResponse: "Oturum açmayı yeniden deneyin ya da farklı bir kullanıcı kimliğiyle oturum açın. Sorun devam ederse, bu hatayı sistem yöneticinize bildirin.",
		email_missing_from_error_adminResponse: "${0} kullanıcı kimliği bir eposta adresiyle eşlenmedi ve ${1} masaüstü kullanıcıların Kimden eposta adresini düzenlemesine izin vermiyor.<br><br>Şu çözümlerden birini deneyin:<br>Eposta Eşleme eklentisinin kayıtlı olduğunu doğrulayın.<br>emailMappingPlugin.json dosyasının ${0} kullanıcı kimliğini ve kullanıcının eposta adresini içerdiğini doğruladıktan sonra, Eposta Eşleme eklentisini oluşturun, yapılandırın ve kaydettirin.<br>Eposta Eşleme eklentisini ya da FileNet P8 eposta adresi dizinini kullanmak istemiyorsanız, onun yerine kullanıcıların eposta gönderdiklerinde kendi eposta adreslerini girmesine olanak vermek istiyorsanız, masaüstlerinin eposta ayarlarını, kullanıcıların Kimden eposta adresini değiştirmelerine olanak verecek şekilde değiştirebilirsiniz.",
		email_missing_from_error_0: "kullanıcı_kimliği",
		email_missing_from_error_1: "masaüstü_adı",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Belge açılamıyor.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator, IBM Content Navigator Edit Client ile bağlantı kuramıyor.",
		open_edit_document_with_native_application_error_userResponse: "İş istasyonunuzda IBM Content Navigator Edit Client istemcisini kurun ve başlatın. Bundan sonra, belgeyi açmayı yeniden deneyin.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Belge açılamıyor.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator, IBM Content Navigator Edit Client ile bağlantı kuramıyor.",
		connect_to_the_streamline_service_error_userResponse: "İş istasyonunuzda IBM Content Navigator Edit Client istemcisini kurun ve başlatın. Bundan sonra, belgeyi açmayı yeniden deneyin.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator belge paylaşmak için doğru olarak yapılandırılmadı.",
		share_not_configured_error_explanation: "Belge paylaşabilmeniz için Box paylaşma özelliğinin doğru olarak yapılandırılması gerekir.",
		share_not_configured_error_userResponse: "Sistem yöneticinize başvurun ve Box paylaşma özelliğini yapılandırmasını isteyin.",
		share_not_configured_error_adminResponse: "Belge paylaşabilmek için şu öğelerin yapılandırılması gerekir:<ul><li>Yönetim aracı ayarlarında Task Manager hizmeti etkinleştirilmelidir.</li><li>Havuzda Task Manager bağlantı tanıtıcısı yapılandırılmalıdır.</li><li>Havuzda paylaşma özelliği yapılandırılmalıdır.</li><li>Masaüstünde paylaşmak için bir Box havuzu seçilmelidir.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Yeni sürüm için özellik değişiklikleri kaydedilmedi",
		checkin_cors_save_attributes_error_explanation: "Sürüm yaratıldı, ancak özellik değişiklikleri kaydedilmedi. Belge hala dışarı alınmış durumda olabilir.",
		checkin_cors_save_attributes_error_userResponse: "Belgenin kilidini açın ve Özellikler şablon menüsü öğesini kullanarak özellikleri güncelleyin.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Yeni belge için özellik değişiklikleri kaydedilmedi",
		add_cors_save_attributes_error_explanation: "Belge yaratıldı, ancak özellik değişiklikleri kaydedilmedi.",
		add_cors_save_attributes_error_userResponse: "Özellikler şablon menüsü öğesini kullanarak özellikleri güncelleyin.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Belge açılamıyor.",		
		edit_document_using_edit_service_error_explanation: "Belge Edit Service'te açılamıyor.",
		edit_document_using_edit_service_error_userResponse: "Sistem yöneticinizden Edit Service Bütünleşmesi'ni güncellemesini isteyin.<br><br> Kullanıcının bu belgeye Edit Service'tan erişmesi gerekiyorsa, havuzun Edit Service Bütünleşmesi sayfasına gidin ve Edit Service Bütünleşmesi'ni sınıf listesinde Edit Service desteği için değiştirilmesi gereken sınıfı içerecek şekilde güncelleyin.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Belge açılamıyor.",		
		edit_document_is_editing_by_oos_error_explanation: "Belge Office Online Service tarafından kullanılıyor.",
		edit_document_is_editing_by_oos_error_userResponse: "Belgeyi Edit Service'te açabilmek için Office Online Service'te kaydetmeniz ve kapatmanız gerekir.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "CORS (etki alanları arası kaynak paylaşımı) yüklemelerini etkinleştir",

		/* Email Settings */
		admin_email_settings: "Eposta ayarları:",
		admin_email_settings_hover: "Kullanıcıların kullanmasını istediğiniz eposta hizmeti tipini belirtin. HTML tabanlı eposta hizmetini etkinleştirdiğinizde, kullanıcıların Kimden eposta adreslerini değiştirmelerine izin verme seçeneğiniz vardır. Java tabanlı eposta hizmetini etkinleştirmek istiyorsanız, Java'yı destekleyen bir tarayıcınız olmalıdır.",
		admin_email_use_service: "HTML tabanlı eposta hizmetini kullanın",
		admin_email_use_applet: "Java tabanlı eposta hizmetini kullanın",
		admin_email_can_modify_from: "Kullanıcıların Kimden eposta adresini değiştirmesine izin ver",
		admin_email_can_modify_from_hover: "Varsayılan olarak, Kimden eposta adresi değiştirilemez ve kullanıcı hesaplarını gösteren kullanıcı-eposta adresi eşlemelerinden elde edilir.<br><br>Kullanıcıların eposta gönderirken kendi eposta adreslerini düzenlemelerine izin vermek için bu seçeneği belirleyin; ancak, eposta adresinin geçerliliği doğrulanmaz.",
		admin_email_use_from_as_sender: "Epostayı gönderen olarak Kimden eposta adresini kullan",
		admin_email_use_from_as_sender_hover: "Varsayılan olarak, kullanıcının epostasında geçerli bir Kimden eposta adresi kullanılır. Eposta adresi, uygulama sunucusundaki CNMailSession posta oturumu tarafından tanımlanır. Epostada kullanıcının eposta adresinin kullanılacağını belirtmek için bu seçeneği belirleyin.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Yeni Ek Açıklamalar",
		addAnnotationDlg_labelContents: "İçindekiler:",
		addAnnotationDlg_labelAccess: "Erişim:",
		addAnnotationDlg_labelPublic: "Genel",
		addAnnotationDlg_labelPrivate: "Özel",
		addAnnotationDlg_labelPrivateGroup: "Gruba özel",
		addAnnotationDlg_labelGroup: "Grup",
		addAnnotationDlg_labelCopiable: "Bu ek açıklama başka bir sunucuya kopyalanabilir.",
		addAnnotationDlg_buttonLabel_save: "Kaydet",

		/* Skip navigation */
		skipNavigation_title_main: "Ana içeriğe geç",
		skipNavigation_title_menu: "Dolaşma düğmelerine geç",
		skipNavigation_label_main: "Ana içeriğe geç",
		skipNavigation_label_menu: "Dolaşma düğmelerine geç",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Ekip Alanlarını Yönet",
		manage_teamspace_pane_instance_hdr: "Ekip alanları",
		manage_teamspace_pane_template_hdr: "Şablonlar",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "İleriye kaydır",
		scroll_back: "Geriye kaydır",

		breadcrumb_separator_open: "Düğümü aç",
		breadcrumb_separator_close: "Düğümü kapat",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Hiçbir öğe seçilmedi.",

		/* eds */
		eds_url: "Dış Veri Hizmeti URL Adresi:",
		eds_request_timeout: "Hizmet İsteği Zamanaşımı (saniye):",
		eds_is_required: "Dış Veri Hizmeti kullanılamadığında kullanıcıların özelliklerin değerini değiştiren eylemler yapmasını önler.",

		/* eforms */
		eform_signing_pane_welcome: "Formu imzala",
		eform_signing_button_label: "İmzala",
		eform_signing_pane_delete: "İmzayı Sil",
		eform_signing_button_label_delete: "Sil",

		xtplugin_server_label: "IBM FileNet Workplace XT sunucusu URL adresi",
		xtplugin_server_hover: "IBM FileNet Workplace XT'nin konuşlandırıldığı sunucunun URL adresini girin; örneğin, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "IBM eClient sunucusu URL adresi",
		ecplugin_server_hover: "IBM eClient'ın konuşlandırıldığı sunucunun URL adresini girin; örneğin, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Çok sayıda öğe üzerinde yapılan eylemler uzun sürebilir. Devam etmek istiyor musunuz?",
		large_number_actions_continue_button: "Devam",

		large_items_actions_confirmation_question: "Çok sayıda öğe üzerinde yapılan eylemler uzun sürebilir. Devam etmek istiyor musunuz?",

		viewer_editproperties_title: "Doğrulama",
		viewer_editproperties_title_warning: "Uyarı",
		viewer_editproperties_save: "Kaydet",
		viewer_editproperties_next: "Sonraki",
		viewer_editproperties_reset: "Sıfırla",
		viewer_editproperties_reset_hover: "Kaydedilmemiş veriler varsa, bunlar daha önce kaydedilmiş olan değerlerine ayarlanır.",
		viewer_editproperties_saveandgetnext: "Kaydet ve sonrakini al",
		viewer_editproperties_saveandgetnext_hover: "Yaptığım değişiklikleri kaydetmemden sonra otomatik olarak sonraki belgeyi al",
		viewer_editproperties_prompt_save_changes: "Şu belgenin özelliklerini değiştirdiniz<br>${0}<br><br>Değişikliklerinizi kaydetmek istiyor musunuz?",
		viewer_editproperties_prompt_discard_changes: "Şu belgenin özelliklerini değiştirdiniz<br>${0}<br><br>Ancak, özelliklerden birinin ya da daha fazlasının geçersiz bir değeri var ve değişiklikler kaydedilemiyor. Geçersiz değerleri düzeltebilir ya da yaptığınız değişiklikleri atabilirsiniz.<br>Özellikler bölmesinde gösterilen geçersiz değerleri düzeltmek istiyor musunuz?",
		viewer_comments_prompt_discard_changes: "Açıklamaları değiştirdiniz. Değişikliklerinizi kaydetmek istiyor musunuz?",
		viewer_notelogs_prompt_discard_changes: "Not günlüklerini değiştirdiniz. Değişikliklerinizi kaydetmek istiyor musunuz?",
		social_collaborated_version: "Sürüm: ${0}",
		social_link_label: "Kim...",

		// social comments
		comments: "Açıklama sayısı",
		comments_add_hint: "Açıklamalarınızı eklemek için Enter tuşuna basın.",
		comments_hint: "Açıklamalarınızı girin.",
		comments_label: "Açıklamalarınızı kaydetmek için Enter ya da Sekme tuşuna basın. İptal etmek için Esc tuşuna basın.",
		comments_delete_confirmation: "Seçilen açıklamanın silinmesini istiyor musunuz?",
		comments_number: "Açıklamalar: ${0}",
		comments_save_new: "Açıklamaları değiştirdiniz. Değişiklikleri kaydetmeden pencereyi kapatmak istiyor musunuz?",

		notelogs: "Not Günlükleri",
		notelogs_download: "Karşıdan Yükleme",
		notelog_modify: "Değişiklikleri Kaydet",
		notelog_edit: "Not Günlüğünü Düzenle",
		notelog_create_newVersion: "Yeni Not Günlüğü Sürümü Yarat",
		notelog_add_hint: "Açıklamalarınızı girin ve eklemek için Enter tuşuna basın.",
		notelog_hint: "Satır beslemek için Üst Karakter+Enter tuş birleşimine basın.",
		notelog_add_placeholder: "Açıklamaları not günlüğüne eklemek için Enter tuşuna basın.",
		notelog_save_new: "Not günlüğünü değiştirdiniz. Değişiklikleri kaydetmeden pencereyi kapatmak istiyor musunuz?",

		// P8 markings related
		cannot_remove_markings: "İşaret değerlerini kaldırma izniniz yok: {0}",

		// download count
		downloadcount: "Karşıdan yüklemeler: {0}",
		downloadcount_single: "1 yükleme",
		downloadcount_multiple: "{0} yükleme",
		downloadcount_none: "Bunu henüz hiç kimse yüklemedi",

		// recommendations
		recommendations: "Beğenme: {0}",
		recommendations_recommend: "Bunu beğen",
		recommendations_unrecommend: "Beğenmeyi kaldır",
		recommendations_you: "Bunu beğendiniz",
		recommendations_you_and_another: "Siz ve diğer 1 kişi bunu beğendi",
		recommendations_you_and_others: "Siz ve diğer {0} kişi bunu beğendi",
		recommendations_another: "Bunu 1 kişi beğendi",
		recommendations_others: "Bunu {0} kişi beğendi",
		recommendations_none: "Bunu henüz hiç kimse beğenmedi",

		// tags
		tags: "Etiketler: ${0}",
		tags_delete: "Sil: ${0}",
		tags_none: "Görüntülenecek etiket yok.",
		tags_add: "Etiket ekle:",
		tags_hint: "Etiketlerinizi eklemek için Enter tuşuna basın.",
		tags_hover_help: "Bir etiket ya da etiket listesi belirtilerek aynı etiketi taşıyan belgeler aranabilir. Etiketleri ayırmak için virgül (,), noktalı virgül (;) ya da boşluk kullanabilirsiniz.",
		tags_hover_help_box: "Bir etiket ya da virgülle ayrılmış bir etiket listesi belirtilerek aynı etiketi taşıyan belgeler aranabilir.",
		tags_no_access: "Etiket eklemek için gereken izinlere sahip değilsiniz.",

		//task scheduler pane
		taskPane_tooltip: "Zamanuyumsuz Görevler Görünümünü Aç",
		taskPane_tree: "Görev Bölmesi Dolaşma Ağacı",
		taskPane_allTasks: "Tüm Görevler",
		taskPane_scheduledTasks: "Zamanlanmış Görevler",
		taskPane_recurringTasks: "Yinelenen Görevler",
		taskPane_inProgressTasks: "Devam Eden Görevler",
		taskPane_completedTasks: "Tamamlanan Görevler",
		taskPane_failedTasks: "Başarısız Olan Görevler",
		taskPane_disabledTasks: "Geçersiz Kılınan Görevler",
		taskPane_statusScheduled: "Zamanlandı",
		taskPane_statusInProgress: "Devam Ediyor",
		taskPane_statusCompleted: "Tamamlandı",
		taskPane_statusFailed: "Başarısız",
		taskPane_statusPaused: "Duraklatıldı",
		taskPane_noItemSelected: "Öğe seçilmedi",
		taskSchedulerPane_scheduleInformation: "Zaman Çizelgesi Bilgileri",
		taskSchedulerPane_loginInformation: "Oturum Açma Bilgileri",
		taskSchedulerPane_startImmediately: "Hemen başlat",
		taskSchedulerPane_recurrence: "Yineleme",
		taskSchedulerPane_interval: "Zaman Aralığı",
		taskSchedulerPane_scheduleReport: "Zamanlama raporu",
		taskSchedulerPane_nameHoverHelp: "Görevin adını girin.",
		taskSchedulerPane_descriptionHoverHelp: "Görev için bir tanım girin. Tanım görevleri ayırt etmenize yardımcı olur.",
		taskSchedulerPane_startTimeHoverHelp: "Görevin ne zaman çalıştırılacağını belirtin. Görevi şimdi çalıştırmak için Hemen Başlat'ı seçin.",
		taskSchedulerPane_recurrenceHoverHelp: "Görevi yinelemeli olarak çalışacak şekilde zamanlayabilirsiniz.",
		taskSchedulerPane_endTimeHoverHelp: "Görevin ne zaman durdurulacağını belirtin. Görev, zamanlanmış başlangıç saatinden zamanlanmış bitiş saatine kadar çalışır.",
		taskSchedulerPane_usernameHoverHelp: "Yinelenen görevler için, görev çalıştığında kimlik doğrulaması yapacak hizmeti etkinleştirmek için bir kullanıcı adı girmelisiniz.",
		taskSchedulerPane_passwordHoverHelp: "Yinelenen görevler için, görev çalıştığında kimlik doğrulaması yapacak hizmeti etkinleştirmek için belirtilen kullanıcının parolasını girmelisiniz.",
		taskSchedulerPane_notification: "Bildirim",
		taskSchedulerPane_emailAddress: "Eposta adresi",
		taskSchedulerPane_emailAddressHoverHelp: "Görevin durumu hakkındaki bildirimleri almak istediğiniz eposta adresini girin.",
		taskSchedulerPane_intervalHoverHelp: "Yinelenen görevin çalışacağı zaman aralığını belirtin. Zaman aralığını saat, gün, hafta ya da ay olarak belirtilebilir.",
		taskSchedulerPane_scheduledStartTime: "Zamanlanmış başlangıç saati",
		taskSchedulerPane_startTime: "Başlangıç saati",
		taskSchedulerPane_title: "Zamanla",
		taskSchedulerPane_runNow: "Şimdi çalıştır",
		taskSchedulerPane_runOnce: "Bir kez çalıştır",
		taskSchedulerPane_runAtSchedule: "Bir zaman çizelgesine göre çalıştır",
		taskSchedulerPane_repeats: "Yineleme",
		taskSchedulerPane_repeatsEvery: "Yineleme",
		taskSchedulerPane_hourly: "Saatte bir",
		taskSchedulerPane_daily: "Günde bir",
		taskSchedulerPane_weekly: "Haftada bir",
		taskSchedulerPane_monthly: "Ayda bir",
		taskSchedulerPane_yearly: "Yılda bir",
		taskSchedulerPane_sunday: "Pa",
		taskSchedulerPane_monday: "Pt",
		taskSchedulerPane_tuesday: "Sa",
		taskSchedulerPane_wednesday: "Ça",
		taskSchedulerPane_thursday: "Sa",
		taskSchedulerPane_friday: "Cu",
		taskSchedulerPane_saturday: "Pa",
		taskSchedulerPane_starting: "Başlangıç tarihi",
		taskSchedulerPane_after: "Bu tarihten sonra",
		taskSchedulerPane_ending: "Bitiş tarihi",
		taskSchedulerPane_times: "kez",
		taskSchedulerPane_days: "gün",
		taskSchedulerPane_hours: "gün içindeki saat",
		taskSchedulerPane_interval: "Zaman Aralığı",
		taskSchedulerPane_endingDays: "Bitiş (gün)",
		taskSchedulerPane_never: "Hiçbir Zaman",
		taskSchedulerPane_categorization: "Kategorizasyon",
		taskSchedulerPane_scheduleTask: "Görev Zamanla",
		taskInformationPane_details: "Ayrıntılar",
		taskInformationPane_errors: "Hatalar",
		taskInformationPane_taskInstances: "Görev Eşgörünümleri",
		taskInformationPane_audits: "Denetlemeler",
		taskInformationPane_results: "Sonuçlar",
		asyncTasks: "Zamanuyumsuz Görevler",

		//entry template pane
		search_all_entry_templates: "Tüm giriş şablonlarını ara.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Tüm Siteyi Görüntüle",
		mobilesite: "Mobil Siteyi Görüntüle",
		profile: "Profili Yönet",
		office_template: "Office şablonu:",
		select_office_template: "Bir Office şablonu seçin",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Seçilen belgeler, Birleştir ve Ayır eylemiyle görüntüleyicide açılamıyor.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "PDF ve TIFF belgeleri için yapılandırılan görüntüleyici Birleştir ve Ayır eylemini desteklemiyor.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Sistem yöneticisinden PDF ve TIFF belgeleri için Birleştir ve Ayır eylemini destekleyen bir görüntüleyici (Daeja ViewONE Virtual gibi) yapılandırmasını isteyin.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Seçilen PDF belgeleri, Birleştir ve Ayır eylemiyle görüntüleyicide açılamıyor.",
		document_builder_pdf_unsupported_viewer_error_explanation: "PDF belgeleri için yapılandırılan görüntüleyici Birleştir ve Ayır eylemini desteklemiyor.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Sistem yöneticisinden PDF belgeleri için Birleştir ve Ayır eylemini destekleyen bir görüntüleyici (Daeja ViewONE Virtual gibi) yapılandırmasını isteyin.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Seçilen TIFF belgeleri, Birleştir ve Ayır eylemiyle görüntüleyicide açılamıyor.",
		document_builder_tiff_unsupported_viewer_error_explanation: "TIFF belgeleri için yapılandırılan görüntüleyici Birleştir ve Ayır eylemini desteklemiyor.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Sistem yöneticisinden TIFF belgeleri için Birleştir ve Ayır eylemini destekleyen bir görüntüleyici (Daeja ViewONE Virtual gibi) yapılandırmasını isteyin.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Seçilen belgeler, Birleştir ve Ayır eylemiyle görüntüleyicide açılamıyor.",
		document_builder_unsupported_documents_error_explanation: "Birleştir ve Ayır eylemi yalnızca PDF ve TIFF belgeleriyle çalışır.",
		document_builder_unsupported_documents_error_userResponse: "Desteklenen belgeleri seçip yeniden deneyin.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Seçilen belgelerin bazıları, Birleştir ve Ayır eylemiyle görüntüleyicide açılamıyor.",
		document_builder_some_unsupported_documents_error_explanation: "Birleştir ve Ayır eylemi yalnızca aynı havuzdan açılan PDF ve TIFF belgeleriyle çalışır.",
		document_builder_some_unsupported_documents_error_userResponse: "Desteklenen belgeler görüntüleyicide açılır.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Değiştirilen içerik içeri verilirken hata oluştu.",
		document_builder_checkin_failed_explanation: "Değiştirilen içerik içeri verilirken görüntüleyici bir hata aldı.",
		document_builder_checkin_failed_userResponse: "Sistem yöneticinizden web uygulama sunucusu günlüklerini gözden geçirmesini isteyin.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Belge açılamıyor.",
		no_viewer_to_view_error_explanation: "Sistem yöneticisi bu belgenin görüntülenmesini engelledi. Bu belgeye erişmeniz gerekiyorsa, belgeyi karşıdan yükleyebilirsiniz.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "İçerik oluşturulamadı.",
		document_build_failed_userResponse: "Sistem yöneticinizden görüntüleyici günlüğü dosyalarını gözden geçirmesini isteyin.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Belge Birleştir ve Ayır kipinde açılamadı.",
		document_builder_open_failed_userResponse: "Sistem yöneticinizden görüntüleyici günlüğü dosyalarını gözden geçirmesini isteyin.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Sistem Birleştir ve Ayır kipine geçemedi.",
		document_builder_switch_failed_userResponse: "Sistem yöneticinizden görüntüleyici günlüğü dosyalarını gözden geçirmesini isteyin.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Belgeler",
		print_service_page_setup_tab_title: "Sayfa Düzeni",
		print_service_OD_print_tab_title: "Yazıcı Seçenekleri",
		print_service_status_merging: "Belgeler birleştiriliyor...",
		print_service_status_converting: "Belgeler dönüştürülüyor...",
		print_service_status_formatting: "Belge yazdırılmak üzere biçimleniyor...",
		admin_print_service_maximum_number_to_print: "Yazdırmak için izin verilen belge sayısı üst sınırı:",
		admin_print_service_maximum_size_to_print: "Yazdırmak için izin verilen veri miktarı üst sınırı (MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Kullanıcıların bir kerede en çok kaç belge yazdırabileceklerini belirtin. Varsayılan üst sınır 50'dir. Yazdırılacak belge sayısını sınırlamak istemiyorsanız, bu sınırı 0 olarak ayarlayın",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Kısıtlama:</b> IBM Content Manager OnDemand'da bu ayar desteklenmez.<br/><br/>IBM Daeja ViewONE yazdırma hizmetini kullanarak yazdırılabilecek veri miktarı üst sınırını belirtin.<br /><br />Seçilen belgelerin toplam büyüklüğü bu sınırı aşamaz.<br/><br/>Varsayılan sınır 200 MB'dir. Sınırı 200 MB üzerinde ayarlamak sistemin performansını olumsuz etkileyebilir. Yazdırılacak belgelerin veri miktarını sınırlamak istemiyorsanız, bu sınırı 0 olarak ayarlayın",
		// error printing
		print_service_error_printing: "Yazdırma sırasında hata oluştu.",
		print_service_error_printing_userResponse: "Sistem yöneticinizden yazdırma hizmeti günlük dosyalarını gözden geçirmesini isteyin.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Seçilen belgeler yazdırılamayacak kadar büyük",
		print_service_max_content_error_explanation: "Seçilen belgeler ${0} MB veri sınırını aşıyor.",
		print_service_max_content_error_userResponse: "Daha az sayıda belge ya da daha küçük belgeler seçin ve yazdırmayı yeniden deneyin. Ayrıca, bu masaüstünden bir kerede yazdırabileceğiniz toplam öğe büyüklüğü üst sınırını artırması için sistem yöneticinize başvurabilirsiniz.",
		print_service_max_content_error_0: "öğe_büyüklüğü_üst_sınırı",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Öğeler yazdırılamıyor.",
		print_service_max_number_selected_error_explanation: "Bir kerede en çok ${0} öğeyi yazdırabilirsiniz. ${1} öğeyi yazdırmaya çalışıyorsunuz.",
		print_service_max_number_selected_error_userResponse: "Daha az öğe seçin ve öğeleri yazdırmayı yeniden deneyin. Ayrıca, bu masaüstünden bir kerede yazdırabileceğiniz öğe sayısı üst sınırını artırması için sistem yöneticinize başvurabilirsiniz.",
		print_service_max_number_selected_error_0: "öğe_sayısı_üst_sınırı",
		print_service_max_number_selected_error_1: "öğelerin_sayısı",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});

